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
          "bn": "পঞ্জিকা নয়, যুক্তি"
        },
        "p": [
          {
            "en": "Surah Yunus reaches this verse in the middle of a case about accountability. 10:3 states that your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter, and that no one intercedes except after His permission. 10:4 follows with the return: to Him is your return, all together. Then comes the sun and the moon, and 10:6 adds the alternation of night and day as signs for a people who fear Allah.",
            "bn": "সূরা ইউনুসে এই আয়াত আসে জবাবদিহি নিয়ে চলা এক যুক্তির মাঝখানে। ১০:৩ আয়াত বলে, তোমাদের প্রতিপালক আল্লাহ, যিনি ছয় দিনে আসমান ও যমীন সৃষ্টি করেছেন, তারপর আরশে সমুন্নত হয়েছেন, আর সব বিষয় তিনিই পরিচালনা করেন; তাঁর অনুমতি ছাড়া কেউ সুপারিশ করতে পারে না। ১০:৪ আয়াতে আসে ফিরে যাওয়ার কথা: তোমাদের সবাইকে তাঁরই কাছে ফিরতে হবে। এরপর আসে সূর্য আর চাঁদের কথা, আর ১০:৬ আয়াত যোগ করে রাত-দিনের পালাবদল, যা আল্লাহকে ভয় করে এমন লোকদের জন্য নিদর্শন।"
          },
          {
            "en": "So the sky is being entered as evidence in a hearing, not admired for its own sake. The point being argued is that a Lord who arranges the heavens is a Lord who will arrange a reckoning, and that the same precision which lets a farmer know when to plant will let a Day be appointed. Nothing in the passage encourages reading the verse as a piece of astronomy detached from that argument.",
            "bn": "তাহলে আকাশকে এখানে আনা হয়েছে বিচারের সাক্ষ্য হিসেবে, শুধু তাকিয়ে মুগ্ধ হওয়ার জন্য নয়। যুক্তিটা এই: যে রব আসমানকে এমন নিয়মে চালান, তিনিই হিসাব-নিকাশের ব্যবস্থাও করবেন। যে নিখুঁত হিসাবে একজন কৃষক বোঝে কখন বীজ বুনতে হবে, সেই হিসাবেই একটি দিনও ঠিক করে রাখা যায়। গোটা অংশের কোথাও এমন ইঙ্গিত নেই যে আয়াতটিকে এই যুক্তি থেকে আলাদা করে জ্যোতির্বিদ্যার পাঠ হিসেবে পড়তে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Diya' and Nur",
          "bn": "যিয়া ও নূর"
        },
        "p": [
          {
            "en": "The sun is called diya' and the moon nur, and classical commentators treat the choice as deliberate. They take diya' as the stronger word, light that blazes from the thing itself and comes with burning; nur they take as the milder light by which things are seen. Elsewhere the Quran calls the sun a siraj, a lamp, at 25:61 and again at 71:16, where the same verse calls the moon nur — so the vocabulary is consistent across the Book.",
            "bn": "সূর্যকে বলা হয়েছে যিয়া, আর চাঁদকে নূর। পূর্বসূরি মুফাসসিরগণ এই শব্দ বাছাইকে ইচ্ছাকৃত বলেই ধরেন। তাঁদের মতে যিয়া জোরালো শব্দ: এমন আলো, যা জিনিসটির নিজের ভেতর থেকে জ্বলে ওঠে, সঙ্গে থাকে পোড়ানোর তেজ। আর নূর কোমল আলো, যার সাহায্যে জিনিস দেখা যায়। কুরআন অন্য জায়গায় সূর্যকে সিরাজ, অর্থাৎ প্রদীপ বলেছে: ২৫:৬১ আয়াতে, আবার ৭১:১৬ আয়াতে, আর সেই আয়াতেই চাঁদকে বলা হয়েছে নূর। ফলে গোটা কিতাবে শব্দের ব্যবহার একই রকম থেকেছে।"
          },
          {
            "en": "It is worth being careful about what this does not establish. The verse distinguishes two kinds of light by name; the Arabic says only nur, and where a translation calls the moon a derived or a reflected light that is the translator's interpretation and not a word in the verse. It makes no statement about the mechanism by which the moon comes to have its light, and a reader who presses it into saying more than that is adding to it rather than reading it.",
            "bn": "তবে এ থেকে কী প্রমাণ হয় না, সে ব্যাপারে সাবধান থাকা দরকার। আয়াতটি নাম দিয়ে দুই রকম আলোকে আলাদা করেছে, এটুকুই। আরবিতে আছে শুধু 'নূর'। কোনো অনুবাদ যদি চাঁদের আলোকে 'ধার করা' বা 'প্রতিফলিত' আলো বলে, সেটা অনুবাদকের ব্যাখ্যা, আয়াতের শব্দ নয়। চাঁদ কীভাবে তার আলো পায়, সে বিষয়ে আয়াত কিছুই বলে না। যে পাঠক জোর করে আয়াতের মুখে এর চেয়ে বেশি কথা বসান, তিনি আয়াত পড়ছেন না, আয়াতে নিজের কথা যোগ করছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stations Measured Out",
          "bn": "মেপে দেওয়া মানযিল"
        },
        "p": [
          {
            "en": "Wa qaddarahu manazila — and He determined for it stations. The pronoun is singular, and most of the commentators refer it to the moon, the nearer of the two just mentioned, glossing manazil as the stations it passes through in the course of a month. The verb qaddara is from the root of qadar, measuring out. Nothing about the path is casual; it is portioned.",
            "bn": "ওয়া কাদ্দারাহু মানাজিলা: আর তিনি তার জন্য মানযিল নির্ধারণ করেছেন। সর্বনামটি একবচন। অধিকাংশ মুফাসসির একে চাঁদের দিকে ফেরান, কারণ এইমাত্র যে দুটির কথা এল, তার মধ্যে চাঁদের কথাই কাছে। মানাজিল বলতে তাঁরা বোঝান সেই স্তরগুলো, যা চাঁদ এক মাসের পথে একে একে পার হয়। কাদ্দারা ক্রিয়াটি এসেছে কাদার শব্দের ধাতু থেকে, যার অর্থ মেপে দেওয়া। এই পথের কিছুই এলোমেলো নয়; সবটাই ভাগ করে মাপা।"
          },
          {
            "en": "36:39 gives the same image with a comparison attached: the moon has been measured out in phases until it returns looking like the old dried stalk of a date palm. That is a description anyone can verify by looking up for a month, and it is the reason this particular sign carries weight. It is not reported to us; it is repeated in front of us, on schedule, without an instrument being required.",
            "bn": "৩৬:৩৯ আয়াত একই ছবি দেয়, সঙ্গে একটি উপমাও: চাঁদের জন্য মানযিল মেপে দেওয়া হয়েছে, শেষে সে ফিরে আসে খেজুর গাছের পুরোনো শুকনো ডাঁটার মতো হয়ে। এ এমন বর্ণনা, যা যে কেউ এক মাস আকাশের দিকে তাকিয়ে মিলিয়ে নিতে পারে। আর এ কারণেই এই নিদর্শনের এত ওজন। এটা আমাদের কাছে শোনা খবর হয়ে আসেনি; আমাদের চোখের সামনেই বারবার ঘটে, ঠিক সময়মতো, কোনো যন্ত্র ছাড়াই।"
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
            "bn": "উদ্দেশ্যটা আয়াত নিজেই বলে দিয়েছে: মানুষের হিসাব, যাতে তোমরা বছরের সংখ্যা আর হিসাব জানতে পার। ১৭:১২ আয়াত রাত আর দিন সম্পর্কে প্রায় একই কথা বলে, আর ৬:৯৬ আয়াত বলে, সূর্য আর চাঁদ হিসাবের জন্য। মানুষ যখন নবী ﷺ-কে নতুন চাঁদ সম্পর্কে জিজ্ঞেস করল, ২:১৮৯ আয়াতে যে জবাব এল, তাও এই সবকিছুর সঙ্গে মেলে: এগুলো মানুষের জন্য আর হজের জন্য সময়ের মাপকাঠি।"
          },
          {
            "en": "There is a quiet mercy in this. The calendar that fixes fasting and hajj hangs on something every human being can see without owning anything. A shepherd and an astronomer look at the same crescent and both know the month has turned. A worship schedule built on the sky is a schedule that no one can be priced out of and no authority can privately hold.",
            "bn": "এর ভেতরে এক নীরব রহমত আছে। রোজা আর হজের সময় যে পঞ্জিকা ঠিক করে, তা ঝুলে আছে এমন জিনিসের ওপর, যা দেখতে কাউকে কিছুর মালিক হতে হয় না। একজন রাখাল আর একজন জ্যোতির্বিদ একই বাঁকা চাঁদ দেখেন, আর দুজনেই বোঝেন নতুন মাস শুরু হয়ে গেছে। ইবাদতের সময়সূচি যখন আকাশের ওপর দাঁড়ানো, তখন টাকার অভাবে কাউকে তা থেকে বাদ পড়তে হয় না, আর কোনো কর্তৃপক্ষ তা গোপনে নিজের মুঠোয় রাখতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Except in Truth",
          "bn": "সত্য ছাড়া নয়"
        },
        "p": [
          {
            "en": "Allah has not created that except bil-haqq, in truth. The clause rules out two readings at once: that the arrangement is accidental, and that it is decorative. 30:8 says the same of the heavens and the earth and adds a specified term to it. Purpose and expiry are stated together, and since 10:4 raised the question of the return this surah has been arguing for exactly that combination.",
            "bn": "আল্লাহ এসব সৃষ্টি করেছেন বিল-হক্ব, অর্থাৎ সত্য সহকারে; অন্য কোনোভাবে নয়। এই কথাটুকু একসঙ্গে দুটি ভুল পড়া বাতিল করে দেয়: এই বিন্যাস আকস্মিক, কিংবা নিছক সাজসজ্জা। ৩০:৮ আয়াত আসমান ও যমীন সম্পর্কে একই কথা বলে, সঙ্গে যোগ করে একটি নির্দিষ্ট মেয়াদ। উদ্দেশ্য আর মেয়াদ, দুটোই একসঙ্গে বলা হয়েছে। আর ১০:৪ আয়াতে ফিরে যাওয়ার কথা তোলার পর থেকে সূরাটি ঠিক এই জোড়ার পক্ষেই যুক্তি দিয়ে আসছে।"
          },
          {
            "en": "The closing verb is yufassilu, He lays the signs out in detail. The same verb ends 6:97 after the stars are named for guidance, there in the past tense — fassalna, We have detailed — and it returns in this exact form at 13:2, where the detailing is so that you may be certain of the meeting with your Lord. The signs, then, are not withheld and not obscure. They have been set out at length, and the variable the verse leaves open is the reader.",
            "bn": "শেষ ক্রিয়াটি ইউফাসসিলু: তিনি নিদর্শনগুলো খুলে খুলে বর্ণনা করেন। পথ চেনার জন্য নক্ষত্রের কথা বলার পর ৬:৯৭ আয়াতও এই ক্রিয়া দিয়েই শেষ হয়, তবে সেখানে অতীত কালে: ফাসসালনা, আমি বিশদভাবে বর্ণনা করেছি। আর হুবহু এই রূপটিই আবার আসে ১৩:২ আয়াতে, যেখানে বিশদ বর্ণনার উদ্দেশ্য, তোমরা যেন তোমাদের প্রতিপালকের সাক্ষাৎ সম্পর্কে নিশ্চিত হও। তাহলে নিদর্শনগুলো লুকিয়ে রাখা হয়নি, অস্পষ্টও নয়। সেগুলো বিস্তারিত খুলে রাখা হয়েছে। আয়াত একটি জিনিসই খোলা রেখেছে, আর তা হলো পাঠক নিজে।"
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
          "bn": "প্রশংসা আর ভুলে যাওয়ার মাঝখানে"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this stretch of it is about calling on Allah. 10:10 has just shown the people of the Garden at their call: glorification, peace for a greeting, and praise to the Lord of the worlds last. Our verse turns to a caller who asks for harm and wants it as fast as he expects good. Then 10:12 adds the man who calls while affliction touches him and walks on as if he never called once it lifts.",
            "bn": "সূরা ইউনুস মাক্কী সূরা, আর তার এই অংশটা আল্লাহকে ডাকা নিয়ে। ১০:১০ আয়াতে জান্নাতবাসীদের ডাক সদ্য দেখানো হয়েছে। সেখানে আল্লাহর পবিত্রতার ঘোষণা, অভিবাদন হিসেবে সালাম, আর সবশেষে জগৎসমূহের প্রতিপালকের প্রশংসা। আমাদের আয়াত আনে অন্য রকম এক ডাকনেওয়ালাকে, যে ক্ষতি চায় আর চায় ভালো জিনিসের মতোই তাড়াতাড়ি সেটাও হাতে আসুক। এরপর ১০:১২ আয়াত আনে সেই মানুষকে, কষ্ট লাগলে যে আল্লাহকে ডাকতেই থাকে, আর কষ্ট সরে গেলে এমনভাবে চলে যায় যেন কখনো ডাকেইনি।"
          },
          {
            "en": "Was there an occasion? Al-Baghawi reports that it is said the verse came down about an-Nadr ibn al-Harith, when he said what 8:32 records: O Allah, if this should be the truth from You, rain down upon us stones from the sky. Al-Qurtubi passes the same on as something said, that the verse means the people of Makkah, and closes with and Allah knows best. Neither gives it a chain, so the placement, not the occasion, carries the weight.",
            "bn": "নাজিল হওয়ার কোনো উপলক্ষ আছে কি? বাগাভী বলছেন, বলা হয়ে থাকে যে আয়াতটি নেমেছে নাযর ইবনুল হারিসকে নিয়ে, যখন সে ৮:৩২ আয়াতে ধরা কথাটা বলেছিল, হে আল্লাহ, এটা যদি আপনার কাছ থেকে আসা সত্য হয়, তবে আমাদের উপর আসমান থেকে পাথর বর্ষণ করুন। কুরতুবীও কথাটা এভাবেই আনেন, বলা হয়ে থাকে যে আয়াতের লক্ষ্য মক্কার লোকেরা, আর শেষে যোগ করেন, আল্লাহই ভালো জানেন। কেউই সনদ দেন না। তাই এখানে উপলক্ষের চেয়ে আয়াতের অবস্থানটাই ভরসার জিনিস।"
          },
          {
            "en": "The surah's own frame supports reading it by position. 10:7 has already named a group who do not expect the meeting with Us, satisfied with the life of this world and secure in it. Our verse picks up that exact description at its close and says what is done with them. So this is not an aside about bad temper. It is the second half of a portrait the surah had already begun.",
            "bn": "অবস্থান ধরে পড়ার পক্ষে সূরার নিজের গড়নটাই কথা বলে। ১০:৭ আয়াতে এমন এক দলের কথা আগেই এসেছে, যারা আমার সাক্ষাতের আশা রাখে না, দুনিয়ার জীবন নিয়েই সন্তুষ্ট আর তাতেই নিশ্চিন্ত। আমাদের আয়াত শেষে গিয়ে হুবহু সেই পরিচয়টাই তুলে নেয়, আর বলে তাদের নিয়ে কী করা হয়। তাহলে এটি নিছক বদমেজাজ নিয়ে ফেলে রাখা কোনো প্রসঙ্গান্তর নয়। সূরা আগেই যে ছবিটা আঁকতে শুরু করেছিল, এটি তার বাকি অর্ধেক।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words for Hurry",
          "bn": "তাড়াহুড়োর দুটো শব্দ"
        },
        "p": [
          {
            "en": "The condition clause runs to seven Arabic words: wa law yu'ajjilu Allahu li-n-nasi ash-sharra isti'jalahum bi-l-khayr. Two forms of the root 'a-j-l stand inside it. Yu'ajjilu is the second form, to make a thing come early, and Allah is its subject. Isti'jalahum is the tenth form's verbal noun with their pronoun attached, their own demanding that it come early. Al-Qurtubi keeps the scholars' summary in one line: the hastening is from Allah, the hurrying from the servant.",
            "bn": "শর্তের অংশটা সাতটি আরবি শব্দ: ওয়া লাও ইউআজ্জিলুল্লাহু লিন্নাসিশ শাররা ইস্তিজালাহুম বিল খাইর। এক মূল থেকে আসা দুটি রূপ এর ভেতরে পাশাপাশি বসে আছে, মূলটা আইন-জীম-লাম। ইউআজ্জিলু দ্বিতীয় বাবের ক্রিয়া, অর্থ কোনো কিছু আগেই আনিয়ে দেওয়া, আর এর কর্তা আল্লাহ নিজে। ইস্তিজালাহুম দশম বাবের মাসদার, সঙ্গে তাদের সর্বনাম লাগানো, অর্থ তাদের নিজেদের তাড়া দেওয়া যেন জিনিসটা আগেই আসে। কুরতুবী আলিমদের কথাটা একটি লাইনে ধরে রেখেছেন। তাড়াতাড়ি করাটা আল্লাহর দিক থেকে, তাড়া দেওয়াটা বান্দার দিক থেকে।"
          },
          {
            "en": "At-Tabari explains why isti'jalahum sits in the accusative: the verb yu'ajjilu falls upon it, as in qumtu al-yawma qiyamaka, I stood as you stand. He adds a test: it cannot be the verbal noun of yu'ajjilu, since then the kaf of comparison could not have entered it, a point he refers to al-Farra'. Al-Qurtubi leaves it open. Abu Ali held both hastenings to be Allah's with a word elided, which he ascribes to al-Khalil and Sibawayh; al-Akhfash and al-Farra' read ka-isti'jalihim with the kaf dropped.",
            "bn": "ইস্তিজালাহুম কেন নাসবের অবস্থায় বসেছে, তাবারী তা বুঝিয়ে দেন। ইউআজ্জিলু ক্রিয়াটাই তার উপর গিয়ে পড়েছে, যেমন কুমতুল ইয়াওমা কিয়ামাকা, মানে আমি দাঁড়িয়েছি তোমার দাঁড়ানোর মতো। তিনি একটা যাচাইও দেন। এটি ইউআজ্জিলুর মাসদার হতে পারে না, কারণ তা হলে তুলনার কাফ এর ভেতরে ঢুকতে পারত না, আর এই কথার জন্য তিনি ফাররার দিকে ইশারা করেন। কুরতুবী প্রশ্নটা খোলা রাখেন। আবু আলীর মত, দুটো তাড়াই আল্লাহর দিক থেকে আর মাঝে একটি শব্দ উহ্য, আর এটিকে তিনি খলীল ও সীবাওয়াইহির অবস্থান বলেন। আখফাশ ও ফাররা পড়েন কা-ইস্তিজালিহিম, কাফ ফেলে দিয়ে।"
          },
          {
            "en": "The answer clause is three words: la-qudiya ilayhim ajaluhum. At-Tabari glosses the verb as finished off and cast to them, propping the usage on a line of Abu Dhu'ayb about two coats of mail that Dawud finished. Then, plainly: they would have perished, and death, which is the term, would have been brought forward. He renders transgression as defiance and insolence, and wandering blindly as going back and forth, which as-Sa'di and al-Qurtubi both sharpen to being bewildered.",
            "bn": "জবাবের অংশটা তিনটি শব্দ: লাকুদিয়া ইলাইহিম আজালুহুম। তাবারী ক্রিয়াটির অর্থ করেন, তাদের মেয়াদ চুকিয়ে তাদের দিকে ছুঁড়ে দেওয়া হত। ব্যবহারটা দেখাতে তিনি আবু যুআইবের পঙক্তি আনেন, যেখানে দাউদ দুটি বর্ম বানিয়ে শেষ করেছেন। তারপর সোজা কথায়, তারা ধ্বংস হয়ে যেত, আর মৃত্যু, যেটাই মেয়াদ, তাদের জন্য আগিয়ে আনা হত। তুগইয়ানের অর্থ তিনি দেন গোঁয়ার্তুমি আর ঔদ্ধত্য, আর ইয়ামহুনের অর্থ এদিক-ওদিক ঘোরা, যেটাকে সা'দী আর কুরতুবী দুজনেই আরও ধারালো করে বলেন, দিশেহারা হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Hastened Evil Is",
          "bn": "তাড়াতাড়ি আনা অকল্যাণ বলতে কী"
        },
        "p": [
          {
            "en": "At-Tabari opens by supplying a word the verse leaves out. If Allah were to hasten the answering of their supplication for evil, meaning whatever harms a person or his property, as He hastens the good when they call for it, they would perish. Mujahid, cited there through four chains, makes it domestic: a man's word when angry at his child or his property, O Allah, do not bless him and curse him. Qatada puts it broadly: a supplication against himself and his wealth with what he would hate answered.",
            "bn": "তাবারী শুরু করেন আয়াতের একটি উহ্য শব্দ যোগ করে। আল্লাহ যদি মানুষের অকল্যাণের দু'আ কবুল করায় তাড়াতাড়ি করতেন, অর্থাৎ যা তার নিজের বা তার সম্পদের ক্ষতি ডেকে আনে, ঠিক যেমন কল্যাণের ডাকে তিনি তাড়াতাড়ি সাড়া দেন, তাহলে তারা ধ্বংস হয়ে যেত। সেখানে চারটি সনদে তিনি মুজাহিদের কথা আনেন, আর ব্যাপারটা একেবারে ঘরের ভেতরের। সন্তানের বা সম্পদের উপর রাগ হলে মানুষ বলে ফেলে, হে আল্লাহ, এতে বরকত দেবেন না, একে লানত করুন। কাতাদা কথাটা চওড়া করে বলেন, মানুষ নিজের আর নিজের মালের বিরুদ্ধে এমন দু'আ করে, যা কবুল হলে তার নিজেরই অপছন্দ।"
          },
          {
            "en": "Al-Baghawi adds Ibn Abbas: it is what a man says in anger to his household and his child, may Allah curse you and not bless you. As-Sa'di does not limit the verse to supplication. He reads it of sin and consequence. If Allah hastened the evil when they brought about its causes, as He hastens the good when they bring about theirs, the punishment would have wiped them out. His summary is a pair of near-identical verbs: He grants them respite and does not neglect them.",
            "bn": "বাগাভী যোগ করেন ইবনু আব্বাসকে। রাগের মুহূর্তে মানুষ নিজের পরিবার আর সন্তানকে যা বলে ফেলে, আল্লাহ তোমাদের লানত করুন, তোমাদের বরকত না দিন। সা'দী আয়াতটিকে দু'আর মধ্যে আটকে রাখেন না। তিনি পড়েন গুনাহ আর তার পরিণাম হিসেবে। মানুষ যখন অকল্যাণের কারণগুলো নিজেই জোগাড় করে, তখন আল্লাহ যদি তাড়াতাড়ি সেই অকল্যাণ এনে দিতেন, যেমন কল্যাণের কারণ জোগাড় করলে তিনি কল্যাণ তাড়াতাড়ি দেন, তাহলে শাস্তিই তাদের মুছে দিত। সা'দীর সারকথা প্রায় একই রকম দুটি ক্রিয়ায় বাঁধা, তিনি অবকাশ দেন কিন্তু অবহেলা করেন না।"
          },
          {
            "en": "Al-Qurtubi lays the readings side by side instead of choosing. One is that if He hastened the punishment as they hasten the reward they would simply die, since in this world they were created weak, and will not be on the Day of Resurrection, created to last. Another, which he gives to Ibn Ishaq, restricts it to the disbeliever, whose term would be closed early so he reached the punishment of the hereafter sooner. Muqatil names an-Nadr. So the supplication reading and the punishment reading are a real disagreement.",
            "bn": "কুরতুবী কোনো একটা মত বেছে না নিয়ে সবগুলো পাশাপাশি সাজান। একটি মত এই, তিনি যদি শাস্তি ততটাই তাড়াতাড়ি আনতেন যতটা তাড়াতাড়ি তারা পুরস্কার চায়, তবে তারা মরেই যেত। দুনিয়ায় তারা দুর্বল করেই সৃষ্টি, কিয়ামতের দিন তারা দুর্বল থাকবে না, সেদিন তাদের গড়া হবে টিকে থাকার জন্য। আরেক মত তিনি দেন ইবনু ইসহাকের নামে, যা আয়াতটিকে কাফিরের মধ্যে সীমিত করে। তার মেয়াদ আগেই চুকিয়ে দেওয়া হত, যাতে সে আখিরাতের শাস্তিতে তাড়াতাড়ি পৌঁছে যায়। নাযরের নামটা আনেন মুকাতিল। তাহলে আয়াতটিকে দু'আর অর্থে নেওয়া আর শাস্তির অর্থে নেওয়া, এ দুইয়ের মধ্যে সত্যিকারের মতভেদ আছে।"
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
            "bn": "জবাবের অংশটা নিয়ে তাবারী মতভেদটা তুলে ধরেন। হিজাজ আর ইরাকের ক্বারীরা পড়েন লাকুদিয়া, কর্মবাচ্যে, কাফের উপর পেশ আর আজাল রফয়ে। এতে কর্তার নাম আসে না, শুধু বলা হয়, তাদের মেয়াদ তাদের জন্য চুকিয়ে দেওয়া হত। শামের লোকেরা পড়েন লাকাদা, কর্তৃবাচ্যে, আর আজাল আসে নাসবে, অর্থ তিনি তাদের মেয়াদ তাদের দিকে চুকিয়ে দিতেন। তাবারীর রায়টা নরম। দুই ক্বিরাআতের অর্থ একই, যে যেটাই পড়ুক সে ঠিক আছে, আর তিনি নিজে কর্মবাচ্যেই পড়েন শুধু এই কারণে যে অধিকাংশ ক্বারী সেটার উপরেই আছেন।"
          },
          {
            "en": "Al-Qurtubi names Ibn Amir for la-qada and calls it a fine reading, because it joins the opening clause, where Allah is already the subject of the hastening. Al-Baghawi names Ibn Amir and Ya'qub for it and spells out each yield. Passive, their destruction would have been completed and they would all have died. Active, He would have destroyed the one prayed against and put him to death. So one reading veils the agent and spreads the ruin; the other names Allah and narrows it to the person the curse targeted.",
            "bn": "লাকাদা পড়াটার জন্য কুরতুবী নাম করেন ইবনু আমিরের, আর এটিকে সুন্দর ক্বিরাআত বলেন, কারণ এটি শুরুর অংশের সঙ্গে জুড়ে যায়, যেখানে তাড়াতাড়ি করার ক্রিয়ার কর্তা হিসেবে আল্লাহর নাম আগেই এসেছে। বাগাভী এর জন্য ইবনু আমির ও ইয়াকুব দুজনের নাম দেন, আর খুলে বলেন কোন পড়ায় কী অর্থ দাঁড়ায়। কর্মবাচ্যে, তাদের ধ্বংস পুরো হয়ে যেত আর তারা সবাই মরে যেত। কর্তৃবাচ্যে, যার বিরুদ্ধে দু'আ করা হয়েছে তাকে তিনি ধ্বংস করে দিতেন, মেরেই ফেলতেন। তাই এক পড়া কর্তাকে আড়ালে রাখে আর ধ্বংসটা ছড়িয়ে দেয়, অন্যটা আল্লাহর নাম সামনে আনে আর ধ্বংসটা সেই একজনের মধ্যে গুটিয়ে আনে, যার দিকে বদদু'আটা ছোঁড়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Curse Your Own",
          "bn": "আপনজনকে বদদু'আ নয়"
        },
        "p": [
          {
            "en": "The narration attached here comes from Jabir ibn Abdullah (RA). Ibn Kathir brings it here from the Musnad of Abu Bakr al-Bazzar and notes that Abu Dawud recorded it too. Abu Dawud's wording, at number 1532, runs: Do not invoke curse on yourselves, and do not invoke curse on your children, and do not invoke curse on your servants, and do not invoke curse on your property, lest you happen to do it at a time when Allah is asked for something and grants your request. Abu Dawud adds that the chain is connected: Ubadah ibn al-Walid met Jabir (RA).",
            "bn": "এই আয়াতের সঙ্গে জোড়া হাদিসটি জাবির ইবনু আবদুল্লাহ (রাঃ) থেকে। ইবনু কাসীর এটি এখানে আনেন আবু বকর বাযযারের মুসনাদ থেকে, আর জানিয়ে দেন যে আবু দাউদও এটি সংকলন করেছেন। আবু দাউদের সংকলনে ১৫৩২ নম্বরে শব্দগুলো এই, নিজেদের বিরুদ্ধে বদদু'আ করো না, তোমাদের সন্তানের বিরুদ্ধে বদদু'আ করো না, তোমাদের খাদেমের বিরুদ্ধে বদদু'আ করো না, তোমাদের সম্পদের বিরুদ্ধে বদদু'আ করো না, এমন যেন না হয় যে আল্লাহর কাছে কিছু চাওয়ার আর দেওয়ার সেই সময়টাতেই তা পড়ে যায় আর তোমাদের চাওয়া কবুল হয়ে যায়। আবু দাউদ যোগ করেন, এই হাদিসের সনদ মিলিত, উবাদা ইবনুল ওয়ালীদ জাবির (রাঃ)-এর সাক্ষাৎ পেয়েছেন।"
          },
          {
            "en": "Al-Qurtubi cites the same prohibition from Sahih Muslim, in the expedition of Batn Buwat, where an Ansari's camel balked under him and he said to it, may Allah curse you. The Prophet ﷺ asked who was cursing his camel and told him to dismount and not travel in their company on something cursed. He also passes on, with no collection and no chain, a report that the Prophet ﷺ asked Allah not to answer a lover's supplication against the one he loves. Nothing rests on that.",
            "bn": "একই নিষেধ কুরতুবী আনেন সহীহ মুসলিম থেকে, বাতনে বুওয়াতের অভিযানের ঘটনার ভেতর থেকে। এক আনসারীর উটটি তাঁর নিচে গোঁ ধরে বসে, আর তিনি উটটিকে বলে ফেলেন, আল্লাহ তোকে লানত করুন। নবী ﷺ জিজ্ঞেস করেন, কে নিজের উটকে লানত করল, তারপর তাকে নেমে যেতে বলেন, আর লানতপ্রাপ্ত কিছু নিয়ে তাঁদের সঙ্গে সফর করতে নিষেধ করেন। তিনি আরেকটি বর্ণনাও আনেন, কোনো সংকলনের নাম নেই, সনদও নেই, যেখানে নবী ﷺ আল্লাহর কাছে চেয়েছেন, কেউ যাকে ভালোবাসে, তার বিরুদ্ধে তার বদদু'আ যেন কবুল না হয়। এই লেখার কিছুই তার উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Delay Recurs",
          "bn": "যে আয়াতগুলোয় দেরিটা ফিরে আসে"
        },
        "p": [
          {
            "en": "17:11 says man supplicates for evil as he does for good, and adds what our verse withholds, that man is ever hasty. Ibn Kathir sets it beside this verse himself. 13:6 turns the same haste outward, where they urge the Prophet ﷺ to bring on evil before good, and answers that his Lord is full of forgiveness despite their wrongdoing and severe in penalty. 16:61 states the rule our verse implies: were Allah to blame people for their wrongdoing He would leave no creature on the earth, but defers them to a named term. As-Sa'di quotes it here.",
            "bn": "১৭:১১ আয়াত বলছে, মানুষ যেভাবে কল্যাণের জন্য দু'আ করে, সেভাবেই অকল্যাণের জন্যও দু'আ করে বসে। সঙ্গে সে আয়াত এমন একটি কথা বলে দেয়, যা আমাদের আয়াত বলে না: মানুষ বড়ই তাড়াহুড়াপ্রবণ। ইবনু কাসীর নিজেই ওই আয়াতটিকে এই আয়াতের পাশে বসান। ১৩:৬ আয়াতে একই তাড়া বাইরের দিকে ঘোরানো, সেখানে তারা কল্যাণের আগেই অকল্যাণ আনার জন্য নবী ﷺ-কে তাড়া দেয়, আর জবাব আসে, মানুষ সীমালঙ্ঘন করলেও তাঁর প্রতিপালক ক্ষমাশীল, আর তিনি শাস্তিদানেও কঠোর। ১৬:৬১ আয়াত সেই নিয়মটাই বলে, যা আমাদের আয়াত ইশারায় ধরে। আল্লাহ মানুষকে তাদের সীমালঙ্ঘনের জন্য পাকড়াও করলে যমীনে কোনো প্রাণীই রেহাই পেত না, কিন্তু তিনি নির্দিষ্ট কাল পর্যন্ত সময় দেন। সা'দী এটিই এখানে উদ্ধৃত করেন।"
          },
          {
            "en": "Two more sit close by. 10:19 carries the same passive verb and puts it to another use: were it not for a word that preceded from your Lord, it would have been judged between them over what they differ in. So the Quran twice says that a judgement was ready and a word held it back. The closing clause here is a formula kept for the same condition, as in 7:186. Heard together, the delay stops looking like slowness and starts looking like a decision He made and described.",
            "bn": "আরও দুটি আয়াত কাছেই আছে। ১০:১৯ আয়াত আমাদের আয়াতের সেই কর্মবাচ্য ক্রিয়াটিই বহন করে, তবে অন্য কাজে লাগায়। তোমার প্রতিপালকের পক্ষ থেকে আগেই একটি কথা ঠিক না হয়ে থাকলে তারা যে বিষয়ে মতভেদ করছে তার মীমাংসা করেই দেওয়া হত। তাহলে কুরআন দুবার বলছে, ফয়সালা তৈরি ছিল আর একটি কথা তাকে আটকে রেখেছে। এই আয়াতের শেষ বাক্যটিও একই অবস্থার জন্য কুরআনের বাঁধা ভাষা, যেমন ৭:১৮৬ আয়াতে। সব একসঙ্গে শুনলে দেরিটাকে আর ধীরগতি মনে হয় না, মনে হয় এটি তাঁর নেওয়া আর বলে দেওয়া সিদ্ধান্ত।"
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
            "bn": "আয়াতটির কাজ আছে কিছু ভেঙে যাওয়ার পরের মিনিটটায়। সন্তান দামি কিছু নষ্ট করে ফেলল, স্বামী বা স্ত্রী এমন কথা বলল যা আর ফেরানো যায় না, শরিক অন্যের টাকা নিয়ে উধাও হল। মন কিছু ভাবার আগেই মুখ থেকে বদদু'আ বেরিয়ে আসতে চায়। মুজাহিদের উদাহরণটা ওই মিনিটটার, আর হাদিস যে অভ্যাসটা চায় তা বলতে ছোট, করতে কঠিন। ওই মিনিটে সন্তান, পরিবার, সম্পদ কিংবা নিজের জীবন নিয়ে এমন কিছু মুখে আনবেন না, যা কবুল হয়ে গেলে আপনার সর্বনাশ হয়ে যায়।"
          },
          {
            "en": "The other half is a gratitude most people never practise. Nearly everyone can name a supplication that went unanswered, and many are quietly aggrieved about it still. Keep a second list beside that one: the prayers refused that should always have been refused. The job you begged for and did not get. The person you swore you could not live without. The ruin you called down on someone now closer to you than family. As-Sa'di's phrase covers the list: He gives respite, and He is not neglecting.",
            "bn": "বাকি অর্ধেকটা হল এমন এক কৃতজ্ঞতা, যার চর্চা বেশিরভাগ মানুষ করেই না। প্রায় সবাই এমন কোনো দু'আর নাম বলতে পারে যা কখনো কবুল হয়নি, আর অনেকেই সেই অভিমান চুপচাপ বয়ে বেড়ায়। ওই তালিকার পাশে আরেকটি তালিকা রাখুন, যেসব চাওয়া ফিরিয়ে দেওয়া হয়েছে আর ফিরিয়ে দেওয়াই উচিত ছিল। যে চাকরিটার জন্য কেঁদেছিলেন আর পাননি। যে মানুষটাকে ছাড়া বাঁচবেন না বলে কসম খেয়েছিলেন। যার সর্বনাশ চেয়েছিলেন, আজ যে আপনার আত্মীয়ের চেয়েও কাছের। সা'দীর একটি কথাই গোটা তালিকাটা ঢেকে দেয়, তিনি অবকাশ দেন, তিনি অবহেলা করেন না।"
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
            "bn": "আয়াতটিকে তার নিজের ভাষা দিয়েই দু'আ বানিয়ে নেওয়া যায়, তবে সেটিকে দু'আ বলেই চেনানো উচিত, সুন্নাহর কোনো পাঠ বলে নয়। হে আল্লাহ, আমরা যেভাবে কল্যাণের জন্য আপনাকে তাড়া দিই, আপনি সেভাবে আমাদের জন্য অকল্যাণ তাড়াতাড়ি আনেন না। নিজের বিরুদ্ধে, সন্তানের বিরুদ্ধে আর সম্পদের বিরুদ্ধে যা চেয়ে ফেলি, তাতে আমাকে সাড়া দেবেন না। রাগের মুখে বলা কথাগুলো আমার কাছ থেকে ফিরিয়ে রাখুন। আপনার দেওয়া অবকাশেই আমাকে রাখুন, যতক্ষণ না যে কাজের জন্য তা দেওয়া হয়েছে সেই কাজে তা লাগাতে পারি।"
          },
          {
            "en": "A second move is nearer to hand. The previous verse has supplied the vocabulary of a call that is safe to have answered: glorification, peace, and praise to the Lord of the worlds last. Nothing on that list can harm the one who says it. So when something must come out of the mouth, one of those is available, and it costs the same breath as the curse. Our verse warns about a speed; 10:10 hands over the words.",
            "bn": "আরেকটা পথও আছে, আর তা আরও হাতের কাছে। আগের আয়াতই এমন এক ডাকের ভাষা দিয়ে রেখেছে, যা কবুল হলেও কোনো ভয় নেই। আল্লাহর পবিত্রতার ঘোষণা, সালাম, আর সবশেষে জগৎসমূহের প্রতিপালকের প্রশংসা। এই তালিকার কোনো কথাই যে বলে তার ক্ষতি করতে পারে না। তাই মুখ দিয়ে কিছু একটা বেরোতেই হলে এগুলোর যেকোনোটি হাতের কাছেই আছে, আর বদদু'আয় যতটুকু নিঃশ্বাস যায়, এগুলোতেও ততটুকুই। আমাদের আয়াত একটা গতি নিয়ে সতর্ক করে, আর ১০:১০ আয়াত শব্দগুলো ধরিয়ে দেয়।"
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
            "bn": "শেষবার যখন প্রচণ্ড রাগ হয়েছিল, আমি কী চেয়েছিলাম, আর যে মুহূর্তে বলেছিলাম সেই মুহূর্তেই তা পেয়ে গেলে আজ আমার জীবনটা কেমন দাঁড়াত? কোন দু'আ ফিরিয়ে দেওয়া হয়েছে বলে আমি এখনো অভিমান পুষে রাখি, আর সত্যিই কি দাবি করতে পারি যে ওটা আমার জন্য ভালো ছিল? সন্তান বা সম্পদ নিয়ে রাগের মাথায় যা বলি, আল্লাহ যদি ঠিক সেই কথামতোই ব্যবস্থা নেন, আমি কি তাতে রাজি? আর কিছু ভেঙে গেলে আমার মুখে প্রথমে কোন বাক্যটা আসে, বদদু'আ না প্রশংসা?"
          },
          {
            "en": "The verse ends on people left wandering inside their own excess, describing what the text describes. It passes no sentence on any living community and hands nobody a verdict to carry out. So its question turns inward. If my term had been closed the first time I earned it, which part of my life would be missing, and who else would be missing it with me? Is there anyone I once cursed by name whom I now need to pray for by name?",
            "bn": "আয়াতটি শেষ হয় এমন মানুষদের কথায়, যাদের নিজেদের সীমালঙ্ঘনের ভেতরেই ঘুরতে ছেড়ে দেওয়া হয়েছে। এটি যা বর্ণনা করে, ততটুকুই বর্ণনা করে। জীবিত কোনো জনগোষ্ঠীর উপর এটি কোনো রায় দেয় না, আর কারও হাতে কার্যকর করার মতো কোনো ফয়সালাও তুলে দেয় না। তাই আয়াতের রেখে যাওয়া প্রশ্নটা নিজের দিকেই ফেরে। প্রথমবার শাস্তি পাওয়ার মতো কাজ করার দিনেই মেয়াদ চুকে গেলে আমার জীবনের কোন অংশটা থাকত না, আর আমার সঙ্গে আর কারা সেটা হারাত? আর এমন কেউ আছে কি, যার নাম ধরে একদিন বদদু'আ করেছিলাম, আজ নাম ধরে দু'আ করা দরকার?"
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
          "bn": "আরেকটা আনো, নয়তো বদলে দাও"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and the verses just before this one set the scene. 10:12 has the man who calls on Allah while affliction touches him and walks on as if he never called once it lifts. 10:13 recalls generations destroyed when they wronged, though their messengers had come with clear proofs. 10:14 then makes this people successors in the land so that it may be seen how they act. Our verse is what they do when the verses are recited.",
            "bn": "সূরা ইউনুস মাক্কী, আর ঠিক আগের আয়াতগুলোই দৃশ্যটা সাজিয়ে দেয়। ১০:১২ আয়াতে সেই মানুষ, যে বিপদ ছোঁয়ার সময় আল্লাহকে ডাকে, আর বিপদ সরে গেলে এমনভাবে চলে যেন কখনো ডাকেইনি। ১০:১৩ আয়াত মনে করিয়ে দেয়, আগের বহু জাতিকে ধ্বংস করা হয়েছে যখন তারা যুলুম করেছিল, অথচ তাদের রাসূলরা স্পষ্ট প্রমাণ নিয়েই এসেছিলেন। ১০:১৪ আয়াত এরপর এই লোকদের যমীনে উত্তরাধিকারী বানায়, যাতে দেখা যায় তারা কী করে। আর আমাদের আয়াত দেখায়, আয়াত পড়ে শোনালে তারা কী করে।"
          },
          {
            "en": "Al-Qurtubi glosses tutla plainly as tuqra', is recited, and takes bayyinat as a circumstantial accusative: clear, with nothing confused or difficult in them. So the demand is not raised against something obscure. It is raised against verses whose meaning had already landed. At-Tabari reads those who do not expect Our meeting as those who do not fear Our punishment, are not certain of the return to Us, and do not affirm the raising.",
            "bn": "কুরতুবী তুতলা শব্দের অর্থ করেন সহজভাবেই, তুক্বরা, অর্থাৎ পড়ে শোনানো হয়; আর বাইয়িনাত-কে নেন হাল হিসেবে, মানে স্পষ্ট, যাতে জট নেই, বোঝার অসুবিধাও নেই। তাই দাবিটা অস্পষ্ট কিছুর বিরুদ্ধে ওঠেনি। উঠেছে এমন আয়াতের বিরুদ্ধে, যার মানে তাদের ভেতরে পৌঁছে গিয়েছিল। তাবারী যারা আমাদের সাক্ষাতের আশা রাখে না বলতে বোঝেন, যারা আমাদের শাস্তিকে ভয় করে না, আমাদের কাছে ফেরার ব্যাপারে নিশ্চিত নয়, আর পুনরুত্থান মানে না।"
          },
          {
            "en": "Who asked? Qatada, quoted by both al-Qurtubi and al-Baghawi, says the mushriks of Makkah. Al-Baghawi adds a narrower report from Muqatil, that they were five men, and names them: Abdullah ibn Umayyah al-Makhzumi, al-Walid ibn al-Mughira, Mukriz ibn Hafs, Amr ibn Abdullah ibn Abi Qays al-Amiri, and al-As ibn Amir ibn Hashim. No chain is given for that list. The verse describes the men who said this and passes no verdict on anyone alive now.",
            "bn": "কে চেয়েছিল? কাতাদার কথা কুরতুবী আর বাগাভী দুজনেই আনেন, তিনি বলেন মাক্কার মুশরিকরা। বাগাভী মুকাতিলের আরেকটি সংকীর্ণ বর্ণনা যোগ করেন, তারা ছিল পাঁচজন, আর নামও বলেন, আবদুল্লাহ ইবনু উমাইয়া মাখযূমী, ওয়ালীদ ইবনুল মুগীরা, মুকরিয ইবনু হাফস, আমর ইবনু আবদুল্লাহ ইবনু আবী কায়স আমিরী আর আস ইবনু আমির ইবনু হাশিম। এই তালিকার কোনো সনদ দেওয়া হয়নি। আয়াত যারা এ কথা বলেছিল তাদেরই কথা বলছে, আজ বেঁচে থাকা কারো উপর কোনো রায় দিচ্ছে না।"
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
            "bn": "আয়াতটিতে উনচল্লিশটি শব্দ, লাইনে ছাপা চারটি ওয়াকফ চিহ্ন বাদ দিয়ে গুনলে। ভাগটাও পরিষ্কার: ষোলো শব্দে দাবি, তেইশ শব্দে সেই জবাব, যা দিতে হুকুম করা হয়েছে। দুই ভাগকে জুড়ে রেখেছে একটিমাত্র ধাতু। তাদের হুকুম ছিল বাদ্দিলহু, এটা বদলে দাও। জবাবে সেই একই ক্রিয়া আসে নবীর নিজের মুখে, 'আমি' হয়ে: আন উবাদ্দিলাহু, অর্থাৎ আমি এটা বদলাব। আর তার আগে বসে মা ইয়াকূনু লী।"
          },
          {
            "en": "That phrase is the whole verse. It does not say I am unable. As-Sa'di reads it as it is not fitting for me and does not befit me. Then comes min tilqa'i nafsi, which at-Tabari renders min indi, from my own side. The restriction follows with in and illa: I follow nothing except what is revealed to me. And the last eight words give the reason, which is fear of the punishment of a tremendous Day.",
            "bn": "এই কথাটাই গোটা আয়াত। এখানে বলা হয়নি, আমি পারি না। সা'দী এর অর্থ করেন, এটা আমার জন্য উচিত নয়, আমাকে মানায়ও না। এরপর আসে মিন তিলক্বাই নাফসী, যার অর্থ তাবারী করেন মিন ইনদী, অর্থাৎ নিজের কাছ থেকে। এরপর ইন আর ইল্লা দিয়ে সীমা বাঁধা হয়, আমার কাছে যা ওয়াহী করা হয় তা ছাড়া আমি কিছুরই অনুসরণ করি না। আর শেষ আট শব্দে আসে কারণ, ভয়ানক এক দিনের শাস্তির ভয়।"
          },
          {
            "en": "At-Tabari glosses that Day with the words of 22:2: every nursing mother distracted from the child she nursed, every pregnant woman delivering what she carries, and the people seen as though drunk while they are not drunk. So the man asked to edit the Book answers by naming what he fears, and what he fears is not the men standing in front of him.",
            "bn": "সেই দিনটাকে তাবারী বোঝান ২২:২ আয়াতের কথায়, প্রতিটি দুধপানকারিণী তার দুধের শিশুকে ভুলে যাবে, প্রতিটি গর্ভবতী তার গর্ভের বোঝা নামিয়ে দেবে, আর মানুষকে দেখা যাবে মাতালের মতো, অথচ তারা মাতাল নয়। তাই কিতাব বদলে দেওয়ার দাবি যাঁকে করা হয়েছিল, তিনি জবাবে বলে দেন তিনি কাকে ভয় করেন; আর সেই ভয়ের নাম সামনে দাঁড়ানো লোকগুলো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Actually Asked",
          "bn": "তারা ঠিক কী চেয়েছিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi separates the two halves of the demand with a distinction worth keeping: changing this Qur'an cannot stand together with it, while bringing another may stand together with it. So two exits were offered, a second book beside this one or this one amended. Then he lists three readings of what the amendment meant, and names the holder of each.",
            "bn": "কুরতুবী দাবির দুই অংশকে আলাদা করেছেন, আর পার্থক্যটা মনে রাখার মতো। এই কুরআনকে বদলে দিলে এটি আর আগের মতো টিকে থাকে না; কিন্তু আরেকটা আনলে এটি পাশে থেকেই যেতে পারে। তাই তাঁর সামনে দুটি পথ রাখা হয়েছিল: এটির পাশে আরেকটি কিতাব, নয়তো এটিকেই কেটে-ছেঁটে নেওয়া। এরপর কুরতুবী সেই কাটাছেঁড়ার তিনটি ব্যাখ্যা সাজান, আর প্রত্যেকটি কার মত, তাও বলেন।"
          },
          {
            "en": "The first he gives to at-Tabari: that a verse of threat be turned into a verse of promise and a promise into a threat, the forbidden made lawful and the lawful forbidden. That reading is indeed in at-Tabari's own text. The second he gives to Ibn Isa: drop from the Qur'an what faults their gods and calls their judgement foolish. The third he gives to az-Zajjaj: drop what it says about the resurrection and the raising of the dead.",
            "bn": "প্রথমটি তিনি তোলেন তাবারীর নামে, ভয়ের আয়াতকে প্রতিশ্রুতির আয়াত বানানো হোক আর প্রতিশ্রুতির আয়াতকে ভয়ের, হারামকে হালাল আর হালালকে হারাম। এই ব্যাখ্যা সত্যিই তাবারীর নিজের লেখাতেই আছে। দ্বিতীয়টি তিনি তোলেন ইবনু ঈসার নামে, কুরআন থেকে তাদের মা'বুদদের দোষ ধরা আর তাদের বুদ্ধিকে বোকা বলার কথাগুলো বাদ দেওয়া হোক। তৃতীয়টি যাজ্জাজের নামে, পুনরুত্থান আর মৃতদের উঠানোর কথাগুলো বাদ দেওয়া হোক।"
          },
          {
            "en": "Al-Baghawi's report from Muqatil is the most concrete of all. They told the Prophet ﷺ that if he wanted them to believe him, he should bring a Qur'an with no abandoning of al-Lat, al-Uzza and Manat in it and no faulting of them, and if Allah had not sent that down, then say it yourself, from yourself. Or change it: put a verse of mercy where a verse of punishment stands. Belief was offered in exchange for an edit.",
            "bn": "মুকাতিল থেকে বাগাভীর বর্ণনাটাই সবচেয়ে খোলাসা। তারা নবী ﷺ-কে বলেছিল, আপনি যদি চান আমরা আপনাকে মানি, তবে এমন কুরআন আনুন যাতে লাত, উযযা আর মানাতের ইবাদত ছাড়ার কথা নেই, তাদের দোষ ধরার কথাও নেই; আর আল্লাহ তা না নামালে আপনি নিজের কাছ থেকেই বলে দিন। কিংবা এটিকেই বদলে দিন, শাস্তির আয়াতের জায়গায় রহমতের আয়াত বসিয়ে দিন। ঈমানের বদলে চাওয়া হয়েছিল কিছু কাটাছেঁড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Messenger Under Orders",
          "bn": "হুকুমের অধীন এক রাসূল"
        },
        "p": [
          {
            "en": "At-Tabari draws the conclusion in words the commentators share. Allah commanded His Prophet ﷺ to inform them that this is not his to do, that it belongs to One whose ruling is not turned back and whose decree is not reviewed, and that he himself is only a messenger conveying and a commanded man following. Ibn Kathir says it more briefly still: I am but a servant who receives commands, a Messenger conveying from Allah.",
            "bn": "তাবারী সিদ্ধান্তটা টানেন এমন ভাষায়, যা মুফাসসিরদের মধ্যে একরকম। আল্লাহ তাঁর নবী ﷺ-কে হুকুম দিলেন তাদের জানিয়ে দিতে যে কাজটা তাঁর হাতে নেই, তা এমন একজনের হাতে যাঁর হুকুম ফেরানো হয় না, যাঁর ফয়সালা নিয়ে পুনর্বিচার চলে না; আর তিনি নিজে শুধু পৌঁছে দেওয়া রাসূল আর হুকুম মেনে চলা একজন। ইবনু কাসীর কথাটা আরও ছোট করে বলেন, আমি তো হুকুমের অধীন এক বান্দা, আল্লাহর পক্ষ থেকে পৌঁছে দেওয়া এক রাসূল।"
          },
          {
            "en": "As-Sa'di presses on the manners of it. I am purely a messenger, he has the verse say, I have no say in the matter at all; I am a slave under orders. Then he turns it on the askers. This is the speech of the best of creation and his adab before his Lord's commands and revelation, so what of these men, who joined ignorance to wrongdoing and obstinacy, do they not fear the punishment of a tremendous Day?",
            "bn": "সা'দী জোর দেন এর আদবের দিকে। আয়াতের মুখে তিনি রাখেন, আমি নিছক একজন রাসূল, এই বিষয়ে আমার কোনো কর্তৃত্বই নেই; আমি হুকুমের অধীন এক বান্দা। এরপর তিনি কথাটা প্রশ্নকারীদের দিকে ঘুরিয়ে দেন। এ তো সৃষ্টির সেরা মানুষের কথা, নিজের রবের হুকুম আর ওয়াহীর সামনে তাঁর আদব; তাহলে এই লোকদের কী হবে, যারা মূর্খতার সঙ্গে যুলুম আর গোঁয়ার্তুমি মিলিয়েছে, তারা কি ভয়ানক দিনের শাস্তিকে ভয় করে না?"
          }
        ]
      },
      {
        "h": {
          "en": "The Abrogation Argument",
          "bn": "নাসখ নিয়ে যে দলিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a use some scholars make of this verse in usul: that the Book cannot be abrogated by the Sunnah, since Allah told him to say that changing it from himself was not his to do. Al-Qurtubi does not accept the inference and calls it far-fetched. His first reason is what the verse was about. The mushriks were asking for a Qur'an like this one in its composition, which was not in the Messenger's power, and they did not ask him to change a ruling while keeping the wording.",
            "bn": "কুরতুবী জানান, কিছু আলিম উসূলে এই আয়াত থেকে একটি কথা বের করেন: সুন্নাহ দিয়ে কিতাবের নাসখ হয় না, কারণ আল্লাহ তাঁকে বলতে বলেছেন, নিজের পক্ষ থেকে এটি বদলানো তাঁর কাজ নয়। কুরতুবী এই দলিল মানেন না; বলেন, এটা অনেক টেনে আনা কথা। তাঁর প্রথম কারণ, আয়াতটি কোন প্রসঙ্গে এসেছে। মুশরিকরা চাইছিল গঠনে এই কুরআনের মতো আরেকটি কুরআন, যা রাসূল ﷺ এর সাধ্যে ছিল না। শব্দ ঠিক রেখে শুধু হুকুম বদলাতে তারা বলেনি।"
          },
          {
            "en": "His second reason goes to what the Prophet ﷺ says: when it is revelation it is not from himself at all but from Allah, so it is not the case of a man amending a text of his own accord. The disagreement is left standing with both sides named, and 2:106 is where the changing is spoken of as Allah's own act, no verse withdrawn or made forgotten except that He brings one better than it or like it.",
            "bn": "তাঁর দ্বিতীয় কারণ নবী ﷺ এর কথার স্বরূপ নিয়ে। সেই কথা যখন ওয়াহী, তখন তা তাঁর নিজের কাছ থেকে নয় বরং আল্লাহর কাছ থেকে; কাজেই এটি নিজের ইচ্ছায় কোনো মানুষের লেখা সংশোধনের মামলা নয়। মতভেদটা দুই পক্ষের নাম নিয়েই রেখে দেওয়া হল, আর ২:১০৬ আয়াতই সেই জায়গা যেখানে বদলানোটা আল্লাহর নিজের কাজ হিসেবে আসে, কোনো আয়াত তিনি রহিত করেন না বা ভুলিয়ে দেন না, যদি না তার চেয়ে উত্তম বা তার সমান কিছু আনেন।"
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
            "bn": "যে আট শব্দে এই আয়াত শেষ হয়, সেই আট শব্দেই শেষ হয় আরও দুটি আয়াত। ৬:১৫ আর ৩৯:১৩ সেই বাক্যই, সামনে শুধু কুল বসানো, আর দুটি আয়াত অক্ষরে অক্ষরে এক, বল, আমি আমার রবের নাফরমানি করলে ভয়ানক এক দিনের শাস্তির ভয় করি। ৬:১৫ আয়াতের আলোচনা এই মডিউলে আলাদা করেই আছে, তাই এখানে আর বলা হচ্ছে না। বারবার আসা থেকে যা বোঝা যায়, কাটাছেঁড়া করা ওয়াহীর দাবির জবাব আর অন্য কিছুর ইবাদত করার চাপের জবাব একটাই।"
          },
          {
            "en": "Two further verses guard the same door from the other side. 17:73 says they were about to tempt him away from what was revealed to him so that he would invent something else about Allah, and 17:74 says that had He not made him firm he would almost have inclined to them a little. 69:44-46 state what an invention would have cost: We would have seized him by the right hand, then cut from him the aorta. The editing was neither permitted nor survivable.",
            "bn": "আরও দুটি আয়াত একই দরজা অন্য দিক থেকে পাহারা দেয়। ১৭:৭৩ আয়াত বলছে, তারা তো চেয়েছিল তাঁকে ওহির পথ থেকে সরিয়ে আনতে, যাতে তিনি আল্লাহর নামে অন্য কিছু বানিয়ে বলেন; আর ১৭:৭৪ আয়াত বলছে, তিনি তাঁকে অবিচল না রাখলে তিনি অল্প হলেও তাদের দিকে ঝুঁকে পড়তেন। ৬৯:৪৪-৪৬ আয়াত বলে দেয় বানিয়ে বলার দাম কী হত, আমরা তাঁকে ডান হাত ধরে ধরতাম, তারপর তাঁর জীবন-ধমনি কেটে দিতাম। কাটাছেঁড়ার অনুমতিও ছিল না, সেটি করে বেঁচে থাকার উপায়ও ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Heraclius Was Told",
          "bn": "হিরাক্লিয়াসকে যা বলা হয়েছিল"
        },
        "p": [
          {
            "en": "None of the commentaries consulted attaches a prophetic narration to this verse itself. Ibn Kathir brings one under the verse that follows, where the argument becomes: I stayed among you a lifetime before this, will you not reason? What he brings is Heraclius questioning Abu Sufyan, which stands in Sahih al-Bukhari 7, narrated by Abdullah ibn Abbas (RA) from Abu Sufyan himself.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এই আয়াতের সঙ্গে নবীজি ﷺ এর কোনো হাদিস জোড়ে না। ইবনু কাসীর একটি হাদিস আনেন পরের আয়াতের নিচে, যেখানে দলিলটা দাঁড়ায়, এর আগে তো আমি তোমাদের মধ্যেই জীবন কাটিয়েছি, তবু বুঝবে না? তিনি যা আনেন তা হিরাক্লিয়াসের আবু সুফিয়ানকে করা জিজ্ঞাসাবাদ, আর সেটি আছে সহীহ বুখারীর ৭ নম্বর হাদিসে, আবদুল্লাহ ইবনু আব্বাস (রাঃ) আবু সুফিয়ানের মুখ থেকেই যা বর্ণনা করেছেন।"
          },
          {
            "en": "One exchange in it is the one Ibn Kathir wants. Heraclius asked whether they had ever accused him of lying before he said what he said, and Abu Sufyan answered no. Heraclius then said that he wondered how a man who does not lie about people could lie about Allah. Abu Sufyan adds, in the same hadith, that had he not feared his companions would report him a liar, he would not have told the truth about the Prophet ﷺ. The testimony is the enemy's own.",
            "bn": "এর ভেতরের একটি কথা-চালাচালিই ইবনু কাসীরের দরকার। হিরাক্লিয়াস জিজ্ঞেস করেন, এই দাবি করার আগে তোমরা কখনো তাঁকে মিথ্যা বলার দোষ দিয়েছ কি; আবু সুফিয়ান বলেন, না। তখন হিরাক্লিয়াস বলেন, যে মানুষ মানুষের নামে মিথ্যা বলে না, সে আল্লাহর নামে মিথ্যা বলবে কী করে, তা তিনি ভেবে পান না। একই হাদিসে আবু সুফিয়ান নিজেই বলছেন, সঙ্গীরা তাঁকে মিথ্যাবাদী বলে ফাঁস করে দেবে এই ভয় না থাকলে তিনি নবী ﷺ এর ব্যাপারে সত্যটা বলতেন না। সাক্ষ্যটা শত্রুর নিজের মুখের।"
          }
        ]
      },
      {
        "h": {
          "en": "Editing by Skipping Verses",
          "bn": "আয়াত এড়িয়ে যাওয়াও বদলানো"
        },
        "p": [
          {
            "en": "Nobody today asks for a different Qur'an in those words. The editing happens by selection instead. A verse about wealth is read quickly, a verse about the tongue is heard as advice for other people, and a ruling that would cost something stays an open question for years. Al-Qurtubi's gloss on the fear closes that exit too: I fear, if I disobeyed my Lord, means if I differed by changing and altering it, or by leaving off acting on it.",
            "bn": "আজ কেউ ওই ভাষায় অন্য কুরআন চায় না। কাটাছেঁড়াটা হয় বেছে নেওয়ার মধ্য দিয়ে। সম্পদ নিয়ে আসা আয়াত দ্রুত পড়ে ফেলা হয়, জিভ নিয়ে আসা আয়াত শোনা হয় অন্যদের জন্য উপদেশ হিসেবে, আর যে হুকুম মানতে গেলে কিছু খরচ হয়, সেটি বছরের পর বছর আলোচনার বিষয় হয়ে পড়ে থাকে। ভয়ের ব্যাখ্যায় কুরতুবী এই রাস্তাটাও বন্ধ করে দেন, আমি আমার রবের নাফরমানি করলে ভয় করি, মানে বদলে-পাল্টে দিয়ে বিরোধিতা করলে, কিংবা সেটির উপর আমল ছেড়ে দিয়ে।"
          },
          {
            "en": "So the second half of that gloss is the one to carry away. Changing the text is available to nobody; abandoning the practice is available to everybody, and the verse puts both under one word, disobedience. The man to whom the revelation came said in public that he had no right to soften a single line of it. A reader who edits by skipping is claiming a right the Messenger ﷺ said was not his.",
            "bn": "তাই এই ব্যাখ্যার দ্বিতীয় অংশটাই সঙ্গে নেওয়ার মতো। লেখাটা বদলানোর সুযোগ কারো নেই; আমল ছেড়ে দেওয়ার সুযোগ সবারই আছে, আর আয়াত দুটোকেই এক শব্দের নিচে রাখে, নাফরমানি। যাঁর কাছে ওয়াহী এসেছিল, তিনি সবার সামনে বলেছেন, এর একটি লাইন নরম করার অধিকারও তাঁর নেই। আর যে পাঠক এড়িয়ে গিয়ে কাটাছেঁড়া করে, সে এমন অধিকার দাবি করে, যা রাসূল ﷺ বলেছেন তাঁরই ছিল না।"
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
            "bn": "চারটি প্রশ্ন নিয়ে বসুন। কোন আয়াতগুলো আমি দ্রুত পার করে দিই, আর সেগুলোর ভেতরে আসলে কী থেকে আমি সরে থাকি? কুরআন এমন কিছু বললে যা আমার পছন্দ নয়, আমি কি আগে এমন ব্যাখ্যা খুঁজি যা কথাটা নরম করে দেয়? কিতাব থেকে কোনো একটি হুকুম তুলে দেওয়ার ক্ষমতা আমার হাতে দেওয়া হলে, এমন কোনো হুকুম আছে যেখানে আমি হাত বাড়াতাম? আর কোন কথাটা আমি একেবারে স্পষ্ট শুনেছি, তবু আজও আলোচনার বিষয় বানিয়ে রেখেছি?"
          },
          {
            "en": "One more, from as-Sa'di's turn in the argument. The best of creation was made to say out loud that changing it was not his to do. If that was his standing before the revelation, what is mine? Ask that the next time a verse asks for something expensive, and answer it before going to look for an interpretation.",
            "bn": "আরও একটি প্রশ্ন, সা'দী যেভাবে কথাটা ঘুরিয়ে দিয়েছেন সেখান থেকে। সৃষ্টির সেরা মানুষকে মুখ ফুটে বলতে বলা হল, এটি বদলানো তাঁর হাতে নেই। ওয়াহীর সামনে তাঁর অবস্থান যদি এই হয়, আমার অবস্থান কী? পরেরবার কোনো আয়াত যখন দামি কিছু চেয়ে বসবে, তখন এই প্রশ্নটা করুন, আর ব্যাখ্যা খুঁজতে যাওয়ার আগেই জবাব দিন।"
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
          "bn": "যে কথার ব্যাখ্যা এই আয়াত"
        },
        "p": [
          {
            "en": "Surah Yunus has just put its readers on a ship. In 10:22 a good wind turns into a storm, the waves close in from every side, and the passengers call on Allah with sincere religion, promising that they will be among the thankful. 10:23 records what happens after the rescue: at once they transgress on the earth, and they are told that their wrongdoing is only against themselves, being the enjoyment of worldly life. That closing phrase is what this verse takes up and draws.",
            "bn": "সূরা ইউনুস এর একটু আগেই পাঠককে জাহাজে তুলে দিয়েছে। ১০:২২ আয়াতে অনুকূল বাতাস হঠাৎ ঝড় হয়ে যায়, চারদিক থেকে ঢেউ এসে ঘিরে ধরে, আর যাত্রীরা দ্বীনকে আল্লাহর জন্য খাঁটি করে তাঁকে ডাকে, কথা দেয় যে তারা শোকরগুজার হয়ে থাকবে। ১০:২৩ আয়াত জানায়, উদ্ধার পাওয়ার পর কী হয়: সঙ্গে সঙ্গেই তারা যমীনে সীমালঙ্ঘন শুরু করে। তাদের জানিয়ে দেওয়া হয়, এই বাড়াবাড়ি তাদের নিজেদেরই বিরুদ্ধে; এ তো দুনিয়ার জীবনের ভোগমাত্র। শেষের এই কথাটিকেই আমাদের আয়াত তুলে নিয়ে ছবি এঁকে দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Water, and Who Eats",
          "bn": "পানি, আর কে খায়"
        },
        "p": [
          {
            "en": "The comparison begins where the weight of it lies: not with a thing but with a process. The example of worldly life is like water We sent down from the sky, and the plants of the earth mingled with it — fakhtalata, an intermingling, growth pressing into growth until the ground is covered. Then a detail that is easy to read past: from it eat both the people and the livestock. The world genuinely feeds. The verse does not call it an illusion, and it is careful to say who is being fed.",
            "bn": "উপমাটি শুরু হয় ঠিক সেখান থেকে, যেখানে এর আসল ভার: কোনো জিনিস দিয়ে নয়, একটি চলমান ঘটনা দিয়ে। দুনিয়ার জীবনের দৃষ্টান্ত সেই পানির মতো, যা আমি আকাশ থেকে নামিয়েছি, আর তার সঙ্গে মিশে গেছে যমীনের গাছপালা। ফাখতালাতা মানে পরস্পর জড়িয়ে যাওয়া: এক চারা আরেক চারাকে ঠেলে বেড়ে ওঠে, যতক্ষণ না মাটি ঢেকে যায়। এরপর এমন একটি খুঁটিনাটি, যা সহজেই চোখ এড়িয়ে যায়: তা থেকে খায় মানুষ, খায় গবাদিপশুও। দুনিয়া সত্যিই খাওয়ায়। আয়াত একে মায়া বলে না, আর কারা এখান থেকে খাবার পায়, তাও যত্ন করে বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn at Hatta Idha",
          "bn": "মোড় ঘোরে হাত্তা ইযা-তে"
        },
        "p": [
          {
            "en": "The pivot is the word hatta, until. Until the earth has taken on its zukhruf — the word for gold-work and gilding, and the name of the forty-third surah — and has adorned itself, and its people supposed that they had power over it. Every clause in that run is a peak, not a decline. The commentators fix on the verb zanna: supposition, not knowledge. And qadirun is a participle of capability. What the owners get wrong is not that the field is beautiful but that it is theirs to command.",
            "bn": "মোড়টা 'হাত্তা' শব্দে, অর্থাৎ 'যতক্ষণ না'। যতক্ষণ না যমীন তার যুখরুফ ধারণ করে আর নিজেকে সাজিয়ে তোলে, আর তার মালিকেরা ধরে নেয় যে এর ওপর তাদের পূর্ণ ক্ষমতা আছে। যুখরুফ মানে সোনার কারুকাজ, গিলটি; কুরআনের তেতাল্লিশতম সূরার নামও এটি। এই ধারার প্রতিটি কথা উন্নতির চূড়া, পতনের নয়। মুফাসসিরগণ 'যান্না' ক্রিয়াটিতে এসে থামেন: এটি অনুমান, জ্ঞান নয়। আর 'কাদিরূন' শব্দটি সামর্থ্য বোঝায়, যারা পারে। মালিকদের ভুল এই নয় যে ক্ষেতটা সুন্দর; ভুল এই যে তারা ভেবেছে ক্ষেত তাদের হুকুমে চলবে।"
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
            "bn": "এরপর একটিমাত্র বাক্যে সব শেষ: রাতে কিংবা দিনে তার ওপর আমার আদেশ এসে পড়ে, আর আমি তাকে কেটে নেওয়া ফসলের মতো করে দিই, যেন গতকালও তা ফুলে-ফলে ভরা ছিল না। 'লাইলান আও নাহারান' কোনো প্রহরকেই নিরাপদ রাখে না। 'হাসীদ' মানে কেটে নেওয়া ফসল। আর শেষের চারটি আরবি শব্দ বলে 'গতকাল', বহু যুগ আগে নয়। ওই ক্ষেতের গোটা সুখের ইতিহাস এক নিঃশ্বাসে নাকচ হয়ে যায়, আর যে ক্রিয়া দিয়ে তা বলা হয়, তার ধাতুতেই আছে প্রাচুর্যের মধ্যে বসবাসের অর্থ।"
          },
          {
            "en": "Set the Quran's tellings of this parable side by side and the endings differ. 18:45 ends with dry remnants scattered by the winds. 57:20 ends with a crop that yellows and crumbles to chaff, a decline anyone can watch happening. This one ends with a command arriving overnight on a field still at its best. The picture is varied because loss is varied; what does not vary is that the green stage was never the whole of the story.",
            "bn": "কুরআনে এই উপমা কয়েক জায়গায় এসেছে; পাশাপাশি রাখলে দেখা যায়, শেষটা প্রতিবার আলাদা। ১৮:৪৫ শেষ হয় শুকনো খড়কুটোয়, যা বাতাসে উড়ে যায়। ৫৭:২০ শেষ হয় এমন ফসলে, যা হলুদ হয়ে যায়, তারপর ভেঙে খড় হয়ে যায়; এই ক্ষয় যে কেউ চোখের সামনে ঘটতে দেখে। আর এখানে শেষ হয় এমন ক্ষেতে, যা তখনও সবচেয়ে ভালো অবস্থায়, অথচ রাতারাতি তার ওপর আদেশ নেমে আসে। ছবি বদলায়, কারণ ক্ষতিও নানা রকম। যা বদলায় না তা এই: সবুজ সময়টুকু কখনোই পুরো গল্প ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "For a People Who Think",
          "bn": "চিন্তাশীল সম্প্রদায়ের জন্য"
        },
        "p": [
          {
            "en": "The verse closes by naming its audience: thus do We lay out the signs in detail for a people who reflect, yatafakkarun. Tafakkur is not admiration; it is working something out, taking what stands in front of you and drawing the conclusion from it. And the very next verse refuses to leave the reader standing in a ruined field. 10:25 says that Allah invites to Dar as-Salam, the Home of Peace, and guides whom He wills to a straight path.",
            "bn": "আয়াত শেষ হয় তার শ্রোতাদের পরিচয় দিয়ে: এভাবেই আমি নিদর্শনগুলো বিশদভাবে বর্ণনা করি সেই সম্প্রদায়ের জন্য, যারা চিন্তা করে, 'ইয়াতাফাক্কারূন'। তাফাক্কুর মানে মুগ্ধ হয়ে তাকিয়ে থাকা নয়। এর মানে হিসাব মিলিয়ে দেখা: সামনে যা আছে, তা থেকে সিদ্ধান্ত বের করে আনা। আর ঠিক পরের আয়াত পাঠককে উজাড় হওয়া ক্ষেতের মধ্যে দাঁড় করিয়ে রাখে না। ১০:২৫ আয়াত বলে, আল্লাহ দারুস সালাম, অর্থাৎ শান্তির নিবাসের দিকে ডাকেন, আর যাকে চান সরল পথে চালান।"
          }
        ]
      },
      {
        "h": {
          "en": "Owning a Field That Turns",
          "bn": "যে ক্ষেত বদলে যায়, তার মালিকানা"
        },
        "p": [
          {
            "en": "The verse does not ask anyone to stop planting or to enjoy less. What it corrects is one sentence inside the owner's head: that he is qadir, in command, over what he holds. The practical form of that correction is to name the real Owner while the field is still green — at the promotion, at the new house, at the clear medical result — and not only after a loss. Gratitude spoken at the peak is precisely the sentence the people in this parable never said.",
            "bn": "আয়াত কাউকে চাষ বন্ধ করতে বলে না, কম উপভোগ করতেও বলে না। এটি শুধরে দেয় মালিকের মাথার ভেতরের একটি কথা: তার হাতে যা আছে, তার ওপর সে-ই 'কাদির', সে-ই কর্তা। এই শোধরানোর বাস্তব রূপ হলো, ক্ষেত সবুজ থাকতেই আসল মালিকের নাম মুখে আনা। পদোন্নতির দিনে, নতুন বাড়িতে ওঠার দিনে, ডাক্তারি পরীক্ষার ফল ভালো আসার দিনে; শুধু কিছু হারানোর পরে নয়। চূড়ায় দাঁড়িয়ে কৃতজ্ঞতার যে কথাটি বলার ছিল, এই উপমার মানুষগুলো ঠিক সেটিই কখনো বলেনি।"
          },
          {
            "en": "The second practice comes from 10:25. If a harvest can be taken overnight, then whatever has been moved out of the field and toward the Home of Peace is the only part of the crop that is secure. Wealth given away, a night prayer, a debt forgiven, a child taught — these are the transfers. The believer is not asked to look at the world with suspicion. He is asked to look at it accurately, and the verse's own closing word for that is thinking.",
            "bn": "দ্বিতীয় আমলটি আসে ১০:২৫ থেকে। ফসল যদি রাতারাতি চলে যেতে পারে, তবে ক্ষেত থেকে সরিয়ে শান্তির নিবাসের দিকে যা পাঠানো হয়েছে, শুধু সেটুকুই নিরাপদ। দান করে দেওয়া সম্পদ, রাতের নামাজ, মাফ করে দেওয়া ঋণ, শিক্ষা দেওয়া একটি সন্তান: এভাবেই ফসল ওপারে পাঠানো হয়। মুমিনকে দুনিয়ার দিকে সন্দেহের চোখে তাকাতে বলা হয়নি। বলা হয়েছে ঠিকঠাক দেখতে, আর আয়াত নিজেই এই দেখার নাম দিয়েছে: চিন্তা করা।"
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
          "bn": "সুপারিশকারীরা যখন জবাব দেয়"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this stretch of it argues with people who worshipped what could neither harm nor benefit them. 10:18 records their claim in their own words: these are our intercessors with Allah. Then 10:25 names the invitation to the Home of Peace, 10:26 gives the doers of good the best reward and something added to it, and 10:27 covers the faces of the others with pieces of the night. Our verse opens the Day itself and calls the claimed intercessors forward to speak for themselves.",
            "bn": "সূরা ইউনুস মাক্কী, আর এর এই অংশটা কথা বলছে সেই লোকদের সঙ্গে যারা এমন কিছুর ইবাদত করত যা তাদের ক্ষতিও করতে পারে না, উপকারও পারে না। ১০:১৮ আয়াতে তাদের নিজের মুখের দাবিটা ধরা আছে, এরাই আল্লাহর কাছে আমাদের সুপারিশকারী। এরপর ১০:২৫ আয়াতে শান্তির নীড়ের দিকে ডাক, ১০:২৬ আয়াতে নেককারদের জন্য উত্তম প্রতিদান আর তার সঙ্গে বাড়তি কিছু, আর ১০:২৭ আয়াতে অন্যদের চেহারা ঢেকে দেওয়া হয় রাতের টুকরো দিয়ে। আমাদের আয়াত সেই দিনটাই খুলে দেয়, আর দাবি করা সুপারিশকারীদের সামনে ডেকে এনে নিজেদের কথা বলতে বলে।"
          },
          {
            "en": "What follows finishes the scene. 10:29 gives the partners' oath that Allah is witness enough between us and you, and that we were unaware of your worship; Ma'arif al-Qur'an fills in the excuse behind it, that they had no senses, no movement and no intelligence to understand such matters. 10:30 then closes the passage: every soul is tested by what it sent ahead, they are returned to Allah their true master, and what they used to invent is lost to them. With 10:31 the cross-examination begins.",
            "bn": "এরপরের আয়াতগুলো দৃশ্যটা শেষ করে। ১০:২৯ আয়াতে শরীকরা কসম খায়, আমাদের আর তোমাদের মাঝে আল্লাহই সাক্ষী হিসেবে যথেষ্ট, তোমাদের ইবাদতের খবর আমরা রাখতাম না। মাআরিফুল কুরআন এর পেছনের অজুহাতটা খুলে বলে, তাদের অনুভূতি ছিল না, চলার শক্তি ছিল না, এসব বোঝার বুদ্ধিও ছিল না। ১০:৩০ আয়াত তারপর পর্বটা বন্ধ করে দেয়, প্রত্যেক প্রাণ তার আগে পাঠানো আমল যাচাই করে দেখবে, তাদের সত্যিকার অভিভাবক আল্লাহর কাছে তাদের ফিরিয়ে আনা হবে, আর তারা যা বানিয়ে নিয়েছিল সব হারিয়ে যাবে। ১০:৩১ আয়াত থেকে শুরু হয় জেরা।"
          },
          {
            "en": "Which Day is it? Ibn Kathir reads the gathering as wide as it will go: all the people of the earth, of men and jinn, the obedient and the rebellious, and he brings 18:47 for it, We shall gather them and leave none of them behind. At-Tabari records a dissent. Al-A'mash heard people report from Mujahid that al-hashr here means death. At-Tabari refuses it and says why: this is a report of what is said to the idolaters and what they answer, and that exchange does not happen in the grave. No established occasion of revelation is reported in the commentaries consulted for this verse.",
            "bn": "কোন দিনের কথা? ইবনু কাসীর একত্র করাটাকে যতদূর নেওয়া যায় নিয়েছেন, যমীনের সব মানুষ আর জিন, নেককার আর নাফরমান সবাই। তিনি এর সঙ্গে ১৮:৪৭ আয়াত আনেন, আমি তাদের একত্র করব, কাউকেও বাদ দেব না। তাবারী এখানে একটা ভিন্নমত রেখে দিয়েছেন। আ'মাশ লোকদের কাছ থেকে শুনেছেন, মুজাহিদ বলতেন এখানে হাশর মানে মৃত্যু। তাবারী তা মানেন না, আর কারণটাও বলেন, এটি তো সেই খবর যা মুশরিকদের বলা হবে আর তারা যা জবাব দেবে, আর কবরের ভেতরে এই কথা চালাচালি হয় না। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তাতে নাজিলের কোনো প্রতিষ্ঠিত ঘটনা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Stay Where You Are",
          "bn": "নিজ জায়গায় দাঁড়িয়ে থাক"
        },
        "p": [
          {
            "en": "The verse runs to eighteen Arabic words, counting the text and leaving out the two pause marks printed in the line. Makanakum is the odd word in it: a noun of place standing alone as a command. At-Tabari fills in the missing verb, imkuthu makanakum, stay in your place, halt where you stand. Al-Qurtubi supplies ilzamu wa-thbutu, keep to it and hold still, and calls the sentence a threat. Al-Jalalayn says makanakum is accusative because an understood ilzamu governs it. Al-Muyassar adds the purpose the Arabic leaves out, until you see what is done with you.",
            "bn": "আয়াতটির আরবি শব্দ আঠারোটি, লাইনে ছাপা দুটি ওয়াকফ চিহ্ন বাদ দিয়ে গুনলে। এর ভেতরে খাপছাড়া শব্দটি মাকানাকুম, জায়গার শব্দ একা দাঁড়িয়ে আছে হুকুমের জায়গায়। তাবারী বাদ পড়া ক্রিয়াটা বসিয়ে দেন, উমকুসূ মাকানাকুম, নিজের জায়গায় থাক, যেখানে আছ সেখানেই থাম। কুরতুবী বসান ইলযামূ ওয়াসবুতূ, জায়গা আঁকড়ে থাক আর স্থির হয়ে থাক, আর বলেন এটি হুমকি। জালালাইন বলেন, মাকানাকুম নাসব অবস্থায় আছে কারণ ভেতরে লুকানো ইলযামূ তাকে চালাচ্ছে। মুয়াসসার আরবিতে না-বলা উদ্দেশ্যটা যোগ করেন, যতক্ষণ না দেখ তোমাদের সঙ্গে কী করা হয়।"
          },
          {
            "en": "Antum, the detached pronoun you, adds nothing to the sense. Al-Jalalayn explains why it is there: the imperative that has been left out already carries its subject inside it, and antum strengthens that hidden pronoun so that wa shuraka'ukum, and your partners, can be joined onto it. The partners are summoned by the same command as their worshippers. The denial that ends the verse is four words, ma kuntum iyyana ta'budun. Iyyana, the object us, stands in front of its verb, which al-Jalalayn puts down to the rhyme that closes the verses of this surah.",
            "bn": "আনতুম, আলাদা সর্বনাম তোমরা, অর্থে কিছু যোগ করে না। জালালাইন কারণটা বলেন, যে হুকুমের ক্রিয়াটা বাদ পড়েছে তার কর্তা তার ভেতরেই আছে, আর আনতুম সেই লুকানো কর্তাকে শক্ত করে, যাতে ওয়াশুরাকাউকুম অর্থাৎ তোমাদের শরীকরা তার সঙ্গে জোড়া দেওয়া যায়। ফলে শরীকদের ডাকা হচ্ছে ঠিক সেই হুকুমেই, যে হুকুমে তাদের পূজারিদের ডাকা হচ্ছে। আয়াত যে অস্বীকারে শেষ হয়, তা চারটি শব্দ, মা কুনতুম ইয়্যানা তা'বুদূন। ইয়্যানা অর্থাৎ আমাদের, কর্মটি নিজের ক্রিয়ার আগে বসেছে; জালালাইন এর কারণ বলেন এই সূরার আয়াতশেষের ছন্দ।"
          },
          {
            "en": "Fa-zayyalna is the second form of the root z-y-l, to part. At-Tabari derives it from ziltu ash-shay'a aziluhu, I parted a thing and marked it off from what lay beside it, then notices the doubling: He said fa-zayyalna, wanting the act multiplied and repeated, and He did not say fa-zilna baynahum. Both at-Tabari and al-Qurtubi also report a second recitation, fa-zayalna, with an alif where the doubling is. At-Tabari gives it anonymously, as mentioned of some of them, and compares the same alternation at 31:18; al-Qurtubi names al-Farra' as reporting it. Neither text traces it to a named reciter of the seven.",
            "bn": "ফাযায়্যালনা শব্দটি য-ইয়া-ল ধাতুর দ্বিতীয় বাবের, অর্থ আলাদা করা, সরিয়ে দেওয়া। তাবারী এটি বের করেন যিলতুশ শাইআ আযীলুহু থেকে, আমি জিনিসটাকে আলাদা করলাম আর পাশের জিনিস থেকে চিনিয়ে দিলাম। এরপর তিনি দ্বিত্ব অক্ষরটার দিকে নজর দেন, আল্লাহ বলেছেন ফাযায়্যালনা, কাজটা বহুবার ও বারবার হওয়া বোঝাতে, ফাযিলনা বাইনাহুম বলেননি। তাবারী আর কুরতুবী দুজনেই আরেকটি পাঠও উল্লেখ করেন, শাদ্দার জায়গায় আলিফ দিয়ে ফাযায়ালনা। তাবারী নাম না নিয়ে বলেন, কেউ কেউ এভাবে পড়তেন, আর ৩১:১৮ আয়াতে একই রকম বদলের কথা টানেন। ফাররার নাম নেন কুরতুবী। কোনো লেখাই এটি সাত ক্বারীর কারো নামে তোলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Parting Cuts",
          "bn": "এই বিচ্ছেদ কী ছিঁড়ে দেয়"
        },
        "p": [
          {
            "en": "At-Tabari adds the grammar that makes the two recitations legible. Arabic will sometimes put an alif in place of the doubling when the act belongs to a single agent, he says, and when it belongs to two parties acting on each other it scarcely uses anything else. He draws no conclusion from that, but it is why the doubled reading keeps a single Agent parting them over and over, while the alif reading sounds like a mutual parting. Al-Qurtubi settles the pattern by the verbal noun: you say tazyilan, so the verb is fa''altu; fay'altu would have given zilah.",
            "bn": "তাবারী ব্যাকরণের এমন একটি কথা যোগ করেন, যা দিয়ে দুই পাঠের ফারাকটা বোঝা যায়। তিনি বলেন, কাজটা যখন একজন কর্তার, আরবি তখন কখনো শাদ্দার বদলে আলিফ বসায়; আর কাজটা যখন দুই পক্ষের, একে অন্যের উপর, তখন আলিফ ছাড়া প্রায় কিছুই ব্যবহার করে না। তিনি নিজে এ থেকে কোনো সিদ্ধান্তে যান না, তবু এ কারণেই শাদ্দাওয়ালা পাঠে একজন কর্তা বারবার তাদের আলাদা করেন, আর আলিফওয়ালা পাঠে শোনায় যেন দুই পক্ষ পরস্পর থেকে সরে যাচ্ছে। কুরতুবী বাবটা ঠিক করেন মাসদার দিয়ে, বলা হয় তাযয়ীলান, কাজেই ক্রিয়াটি ফা'আলতু বাবের; ফাইআলতু হলে মাসদার হত যীলাহ।"
          },
          {
            "en": "Al-Qurtubi's sense of the verse is a severing: We parted them and cut off what had run between them in the world, the going back and forth that had tied them together. Al-Baghawi glosses the verb as distinguished and divided, and dates the moment exactly, when every object of worship besides Allah disowns the one who worshipped it. As-Sa'di makes the distance bodily and of the heart at once. Severe enmity comes up between them, he says, after the worshippers had given these partners their purest love in the world, and that allegiance turns over into hatred.",
            "bn": "কুরতুবীর কাছে আয়াতের মানে সম্পর্ক ছিঁড়ে ফেলা, আমরা তাদের আলাদা করে দিলাম আর দুনিয়ায় তাদের মধ্যে যে যাওয়া-আসা চলত, যা তাদের বেঁধে রেখেছিল, তা কেটে দিলাম। বাগাবী ক্রিয়াটির অর্থ করেন চিনিয়ে দেওয়া আর ভাগ করে দেওয়া, আর সময়টাও ঠিক করে বলেন, আল্লাহ ছাড়া প্রত্যেক মা'বুদ যখন নিজের পূজারিকে অস্বীকার করবে সেই মুহূর্ত। সা'দী দূরত্বটাকে একসঙ্গে শরীরের আর দিলের দূরত্ব বানান। তিনি বলেন, তাদের মধ্যে কড়া শত্রুতা দাঁড়িয়ে যাবে, অথচ দুনিয়ায় পূজারিরা এই শরীকদের খাঁটি ভালোবাসাটাই দিয়েছিল; সেই টান উল্টে গিয়ে ঘৃণা হয়ে যাবে।"
          },
          {
            "en": "Ibn Kathir and al-Jalalayn draw the line somewhere else. For them the idolaters are held at a marked place and set apart from where the believers stand, and Ibn Kathir brings 36:59, 30:14 and 30:43 for it, adding that it happens when the Lord comes for the decisive judgement. Maududi, in Tafhim al-Qur'an, rejects the severing reading outright as opposed to Arabic usage: the word means We will distinguish them from each other, the idolaters and their deities set face to face until each knows the truth about the other. The two readings stand unreconciled.",
            "bn": "ইবনু কাসীর আর জালালাইন দাগটা টানেন অন্য জায়গায়। তাঁদের মতে মুশরিকদের একটা নির্দিষ্ট জায়গায় আটকে রাখা হবে, মু'মিনরা যেখানে দাঁড়াবে তার থেকে আলাদা করে। ইবনু কাসীর এর পক্ষে ৩৬:৫৯, ৩০:১৪ আর ৩০:৪৩ আয়াত আনেন, আর বলেন, এটা ঘটবে যখন রব চূড়ান্ত ফয়সালার জন্য আসবেন। মওদূদী তাফহীমুল কুরআনে সম্পর্ক ছেঁড়ার ব্যাখ্যাটা সোজা বাতিল করে দেন; তাঁর মতে এটা আরবি ভাষার ব্যবহারের সঙ্গে মেলে না। তাঁর কাছে শব্দটার মানে, আমরা তাদের একে অন্যের থেকে আলাদা করে দেব। মুশরিক আর তাদের মা'বুদদের মুখোমুখি দাঁড় করানো হবে, যতক্ষণ না একে অন্যের আসল রূপ জেনে যায়। দুই ব্যাখ্যার মীমাংসা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Idol, Devil or Angel",
          "bn": "মূর্তি, শয়তান নাকি ফেরেশতা"
        },
        "p": [
          {
            "en": "Who are the partners that speak? Al-Qurtubi lists three answers and chooses none: the angels, or the devils, or the idols, which Allah makes speak so that this exchange can take place. He explains why the question matters. The idolaters pressed a charge against the devils they had obeyed and the idols they had worshipped, that these had ordered them to do it, saying we did not worship you until you commanded us. Tanwir al-Miqbas puts the same charge in their mouths and has the idols answer that they commanded nothing.",
            "bn": "যে শরীকরা কথা বলছে, তারা কারা? কুরতুবী তিনটি জবাব দেন, কোনোটিকেই বেছে নেন না: ফেরেশতা, নয়তো শয়তান, নয়তো মূর্তি; আল্লাহ এদের কথা বলাবেন, যাতে এই কথাবার্তাটা হতে পারে। প্রশ্নটা কেন জরুরি, তাও তিনি বলেন। মুশরিকরা যে শয়তানদের কথা মেনেছিল আর যে মূর্তিগুলোর পূজা করেছিল, তাদের বিরুদ্ধেই অভিযোগ তুলবে: এরাই আমাদের এ কাজের হুকুম দিয়েছিল। তারা বলবে, তোমরা হুকুম না দিলে আমরা তোমাদের পূজা করতাম না। তানবীরুল মিক্‌বাসও একই অভিযোগ তাদের মুখে দেয়, আর মূর্তিরা জবাব দেয়, তারা কোনো হুকুমই দেয়নি।"
          },
          {
            "en": "At-Tabari preserves the exchange itself in two reports. Mujahid describes an hour of severity on that Day in which the gods they used to worship are set up before them and it is said, these are the ones you worshipped besides Allah; the gods answer, by Allah we did not hear, we did not see, we did not understand, and we did not know that you were worshipping us. Ibn Zayd supplies the worshippers' reply, yes indeed, we used to worship you, and then the partners swear the oath of 10:29.",
            "bn": "তাবারী এই কথাবার্তাটাই দুটি রেওয়ায়েতে ধরে রেখেছেন। মুজাহিদ বর্ণনা করেন, সেদিন কঠিন এক সময় আসবে, তারা যাদের ইবাদত করত সেই মা'বুদদের তাদের সামনে দাঁড় করানো হবে, আর বলা হবে, আল্লাহ ছাড়া এদেরই তো তোমরা ইবাদত করতে। মা'বুদরা জবাব দেবে, আল্লাহর কসম, আমরা শুনতাম না, দেখতাম না, বুঝতাম না, আর জানতামও না যে তোমরা আমাদের ইবাদত করছ। ইবনু যায়দ পূজারিদের জবাবটা যোগ করেন, হ্যাঁ, আমরা তো তোমাদেরই ইবাদত করতাম; তারপর শরীকরা ১০:২৯ আয়াতের কসমটা খায়।"
          },
          {
            "en": "Is the denial honest? Al-Baghawi hears it narrower than it looks: you were not worshipping us at our bidding. As-Sa'di gives the partners a motive that clears Allah rather than themselves, for we declare Allah free of having any partner or equal. Al-Qurtubi raises the possibility of a lie: if the partners are the devils, they may speak in sheer bewilderment, or lie and scheme for a way out, and such a thing may still happen on that Day. So the same four words may be simple truth from stone and a last manoeuvre from a devil.",
            "bn": "এই অস্বীকার কি সত্যি? বাগাবীর কাছে কথাটার পরিধি যতটা মনে হয়, তার চেয়ে ছোট: তোমরা আমাদের কথায় আমাদের ইবাদত করতে না। সা'দী শরীকদের মুখে এমন এক কারণ দেন, যা তাদের নিজেদের নির্দোষ প্রমাণ করে না, আল্লাহকে দোষমুক্ত করে: আমরা আল্লাহকে সব শরীক ও সমকক্ষ থেকে পবিত্র ঘোষণা করি। কুরতুবী মিথ্যার সম্ভাবনাও তোলেন। শরীকরা যদি শয়তান হয়, তবে হয়তো তারা একেবারে হতভম্ব হয়ে কথাটা বলছে, কিংবা বাঁচার ফন্দি এঁটে মিথ্যা বলছে; সেদিনও এমনটা ঘটতে পারে। তাই একই চারটি শব্দ পাথরের মুখে সরল সত্য, আর শয়তানের মুখে শেষ চাল হতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Denial Elsewhere",
          "bn": "অন্য জায়গাতেও একই অস্বীকার"
        },
        "p": [
          {
            "en": "Ibn Kathir gathers the sisters himself. 19:82 says they will deny their worship of them and will be against them opponents. 2:166 has those who were followed disassociate themselves from those who followed, all of them seeing the punishment while the ties between them are cut off. 46:5-6 puts the two ends together: those invoked are unaware of the invocation now, and when the people are gathered they will be enemies to them and deniers of their worship. Three places, one sentence.",
            "bn": "এর সমগোত্রীয় আয়াতগুলো ইবনু কাসীর নিজেই এক জায়গায় এনেছেন। ১৯:৮২ আয়াত বলছে, তারা এদের ইবাদত অস্বীকার করবে আর এদের বিরুদ্ধ পক্ষ হয়ে দাঁড়াবে। ২:১৬৬ আয়াতে যাদের অনুসরণ করা হয়েছিল, তারা অনুসারীদের সঙ্গে সব সম্পর্ক অস্বীকার করে; সবাই তখন শাস্তি চোখের সামনে দেখছে, আর তাদের মধ্যের সব বাঁধন ছিঁড়ে গেছে। ৪৬:৫-৬ আয়াত দুই মাথা একসঙ্গে ধরে: যাদের ডাকা হয়, তারা এখনই এই ডাকের খবর রাখে না; আর যখন মানুষকে একত্র করা হবে, তখন তারা এদের শত্রু হয়ে যাবে আর এদের ইবাদত অস্বীকার করবে। তিন জায়গা, কথা একটাই।"
          },
          {
            "en": "Two more sharpen it. In 16:86 the idolaters point at their partners and say, our Lord, these are our partners whom we used to invoke besides You, and the answer thrown back at them is that they are liars. 35:14 states the case before the Day arrives at all: if you invoke them they do not hear, and if they heard they would not respond, and on the Day of Resurrection they will deny your association. The denial is not news. It was published in advance.",
            "bn": "আরও দুটি আয়াত কথাটায় শান দেয়। ১৬:৮৬ আয়াতে মুশরিকরা নিজেদের শরীকদের দেখিয়ে বলে, হে আমাদের রব, এরাই তো আমাদের সেই শরীক, আপনাকে ছাড়া যাদের আমরা ডাকতাম; জবাবে তাদের মুখের উপর বলা হয়, তোমরা মিথ্যাবাদী। ৩৫:১৪ আয়াত সেই দিন আসার আগেই বিষয়টা পরিষ্কার করে দেয়: তাদের ডাকলে তারা শোনে না, শুনলেও জবাব দিত না, আর কিয়ামতের দিন তারা তোমাদের এই শরীক করাটাই অস্বীকার করবে। তাই অস্বীকারটা নতুন খবর নয়। আগেভাগেই তা ঘোষণা করে রাখা হয়েছে।"
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
            "en": "None of the commentaries consulted for this verse attaches a prophetic narration to it. Ibn Kathir quotes one line, that on the Day of Resurrection we will be on a mound above the people, without naming a collection, and no number for it could be confirmed here, so nothing is built on it. What is confirmable stands in Sahih al-Bukhari, and it is brought here as a general principle rather than as a narration the commentators tie to this verse.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয় না। ইবনু কাসীর একটি বাক্য উদ্ধৃত করেন, কিয়ামতের দিন আমরা থাকব মানুষের উপরে উঁচু এক টিলায়। তবে কোনো কিতাবের নাম তিনি বলেন না, আর এখানে এর কোনো নম্বরও নিশ্চিত করা যায়নি; তাই এর উপর কিছু দাঁড় করানো হয়নি। যা নিশ্চিত করা গেছে, তা আছে সহীহ বুখারীতে। সেটা এখানে আনা হচ্ছে সাধারণ নীতি হিসেবে, মুফাসসিররা এই আয়াতের সঙ্গে জুড়েছেন এমন হাদিস হিসেবে নয়।"
          },
          {
            "en": "Bukhari 4581, from Abu Sa'id al-Khudri (RA): a call-maker will announce, let every nation follow that which they used to worship. Bukhari 806, from Abu Hurayrah (RA), reports the same order and then the answer of this nation, we shall stay in this place until our Lord comes to us. The posture in both is the posture our verse commands. One group is told to stay where it is and loses everything it stood with; the other stays where it is and waits for the One it worshipped.",
            "bn": "বুখারী ৪৫৮১, আবু সাঈদ খুদরী (রাঃ)-এর সূত্রে: এক ঘোষক ঘোষণা দেবে, যে যার ইবাদত করত, প্রত্যেক জাতি তার পিছনে চলুক। বুখারী ৮০৬, আবু হুরায়রা (রাঃ)-এর সূত্রে, একই হুকুমের কথা বলে, তারপর এই উম্মতের জবাবটাও জানায়: আমাদের রব আমাদের কাছে না আসা পর্যন্ত আমরা এই জায়গাতেই থাকব। দুই হাদিসেই অবস্থাটা ঠিক তেমন, আমাদের আয়াত যার হুকুম দিচ্ছে। এক দলকে বলা হয়, নিজের জায়গায় থাকো, আর যাদের পাশে তারা দাঁড়িয়েছিল তাদের সবাইকে তারা হারায়। আরেক দল নিজের জায়গাতেই থাকে, আর যাঁর ইবাদত করত তাঁরই অপেক্ষা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Partner I Still Keep",
          "bn": "যে শরীক আজও রেখে দিয়েছি"
        },
        "p": [
          {
            "en": "The verse describes the people the text describes, those who set partners beside Allah and the things they set up. It passes no sentence on any living person or community and hands nobody a verdict to carry out. Its use is inward. 10:18 had already recorded the claim in their own words, these are our intercessors with Allah, and this verse calls those intercessors forward to answer for themselves. Anything leaned on in that way is asked the same question.",
            "bn": "আয়াত যাদের কথা বলছে, তাদেরই কথা বলছে: যারা আল্লাহর পাশে শরীক দাঁড় করিয়েছিল, আর যাদের দাঁড় করিয়েছিল। আজকের কোনো মানুষ বা জনগোষ্ঠীর উপর আয়াত কোনো রায় দেয় না, কারো হাতে কোনো ফয়সালা তুলেও দেয় না। এর কাজ ভেতরের দিকে। ১০:১৮ আয়াতে তাদের নিজের মুখের দাবিটা আগেই লেখা আছে, এরাই আল্লাহর কাছে আমাদের সুপারিশকারী। আর এই আয়াত সেই সুপারিশকারীদেরই সামনে ডেকে আনে, নিজেদের জবাব নিজেরা দিতে। এভাবে যার উপরই ভর দেওয়া হয়, তাকে এই একই প্রশ্নের সামনে দাঁড়াতে হয়।"
          },
          {
            "en": "As-Sa'di's sentence is the one to sit with: the purest love was spent on these partners in the world, and on that Day the allegiance turns over into hatred and severe enmity. So the test is not whether a person owns an idol. It is what he actually expects to speak for him when nothing else will, a reputation, a lineage, a teacher's name, money, a movement, and whether he has quietly asked it for what only Allah gives. What cannot answer for me then is not worth leaning on now.",
            "bn": "সা'দীর কথাটাই নিয়ে বসার মতো। দুনিয়ায় এই শরীকদের পিছনে খাঁটি ভালোবাসাটাই খরচ হয়েছিল, আর সেই দিন সেই টান উল্টে গিয়ে ঘৃণা আর কড়া শত্রুতা হয়ে যায়। তাই পরীক্ষাটা এই নয় যে কারো ঘরে মূর্তি আছে কি নেই। পরীক্ষাটা হল, আর কিছু যখন কাজে আসবে না তখন সে আসলে কার মুখের দিকে তাকিয়ে আছে, নিজের নাম, বংশ, কোনো উস্তাদের নাম, টাকা, নাকি কোনো দল; আর চুপচাপ তার কাছে এমন কিছু চেয়ে ফেলেছে কি না, যা কেবল আল্লাহই দেন। সেদিন যে আমার হয়ে কথা বলতে পারবে না, আজ তার উপর ভর দেওয়ার মানে নেই।"
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
            "bn": "চারটি প্রশ্ন নিয়ে বসুন। আমার হয়ে সুপারিশ করবে বলে কার দিকে তাকিয়ে আছি, আর কখনো কি যাচাই করে দেখেছি, সুপারিশ করার মতো মর্যাদা তার আছে কি না? ভয় পেলে সবার আগে কার নাম মুখে আসে? আমি যার উপর ভর দিই, তাকে যদি সামনে দাঁড় করিয়ে জিজ্ঞেস করা হয়, সে কখনো আমাকে তার উপর ভর দিতে বলেছিল কি না, সে কী বলবে? আর সা'দী যেমন বলেছেন, আমার কোন টানটা সেই দিন ঠান্ডা হয়ে যাবে?"
          },
          {
            "en": "One more, from the command itself. Makanakum means stay where you are until you see what is done with you, as al-Muyassar fills it in. If that were said to me today, and the place I had to stand in were the place my own choices had built, where exactly would I be standing, and who would be standing beside me?",
            "bn": "আরও একটি প্রশ্ন, হুকুমটার ভেতর থেকেই। মাকানাকুম মানে নিজের জায়গায় দাঁড়িয়ে থাক, যতক্ষণ না দেখ তোমাদের সঙ্গে কী করা হয়, মুয়াসসার এভাবেই কথাটা পূরণ করেন। আজ যদি আমাকে এটা বলা হয়, আর দাঁড়াতে হয় ঠিক সেই জায়গায় যা আমার নিজের পছন্দগুলো বানিয়েছে, তবে আমি কোথায় দাঁড়িয়ে থাকব, আর আমার পাশে কারা দাঁড়াবে?"
          }
        ]
      }
    ]
  },
  "10:32": {
    "sections": [
      {
        "h": {
          "en": "The Answer in Their Mouths",
          "bn": "তাদের মুখেই ছিল জবাব"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this verse is the verdict on an argument the previous verse had already won. 10:31 puts four questions to the idolaters, one of them in two clauses: who provides for you from the heaven and the earth, who owns hearing and sight, who brings the living out of the dead and the dead out of the living, and who arranges the matter. The Arabic settles their reply before they give it, fa-sayaqulun Allah, and they will say, Allah. Our verse starts from that admission.",
            "bn": "সূরা ইউনুস মাক্কী, আর এই আয়াত হল সেই তর্কের রায় যে তর্ক আগের আয়াতেই জেতা হয়ে গেছে। ১০:৩১ আয়াতে মুশরিকদের সামনে চারটি প্রশ্ন রাখা হয়, একটির ভেতরে দুটি অংশ। আসমান আর যমীন থেকে কে তোমাদের রিযক দেন, শোনা আর দেখার মালিক কে, মৃত থেকে জীবিতকে আর জীবিত থেকে মৃতকে কে বের করেন, আর সব বিষয়ের পরিচালনা কার হাতে? আরবিতে তাদের জবাব তাদের মুখ থেকে বেরোনোর আগেই বসিয়ে দেওয়া আছে, ফাসাইয়াকূলূনাল্লাহ, তারা বলবে, আল্লাহ। আমাদের আয়াত সেই স্বীকারোক্তি থেকেই শুরু করে।"
          },
          {
            "en": "Ibn Kathir states the logic of the passage: the idolaters' recognition of Allah's oneness in lordship is an evidence against them, by which they ought to recognise His oneness in divinity and worship. He fills in each clause from elsewhere in the Book, bringing 67:21 for the provision that would stop if He withheld it, 67:23 and 6:46 for the hearing and the sight He gave and could take back, and 55:29 for the arranging, where everyone in the heavens and the earth begs of Him.",
            "bn": "ইবনু কাসীর পুরো অংশের যুক্তিটা খুলে দেন। রব হিসেবে আল্লাহর একত্ব মুশরিকরা যে মানছে, সেটাই তাদের বিরুদ্ধে দলিল, আর সেই দলিলেই তাদের মানা উচিত ছিল ইলাহ আর ইবাদতেও তিনি একক। আয়াতের প্রতিটি অংশের জন্য তিনি কুরআনের অন্য জায়গা টানেন। রিযকের জন্য ৬৭:২১, তিনি রিযক আটকে দিলে কে দেবে; শোনা আর দেখার জন্য ৬৭:২৩ আর ৬:৪৬, যে দুটো তিনি দিয়েছেন আর কেড়েও নিতে পারেন; আর পরিচালনার জন্য ৫৫:২৯, যেখানে আসমান ও যমীনের সবাই তাঁরই কাছে চায়।"
          },
          {
            "en": "What comes after keeps the same thread. 10:33 says the word of your Lord has come into effect upon those who defiantly disobeyed, that they will not believe; then 10:34 and 10:35 put the question again, about who begins creation and repeats it and who guides to the truth. None of the eight commentaries consulted for this verse reports an occasion of revelation for it, so its place inside that cross-examination is the context to read it in.",
            "bn": "পরের আয়াতগুলোও একই সুতো ধরে চলে। ১০:৩৩ বলে, যারা নাফরমানি করেছে তাদের ব্যাপারে আপনার রবের কথা সত্য হয়ে গেছে, তারা ঈমান আনবে না। এরপর ১০:৩৪ আর ১০:৩৫ আয়াতে প্রশ্নটা আবার আসে: কে সৃষ্টি শুরু করেন আর আবার তা ফিরিয়ে আনেন, আর কে সত্যের পথ দেখান? এই আয়াতের জন্য যে আটটি তাফসীর দেখা হয়েছে, তার কোনোটিতেই এর নাজিলের কোনো উপলক্ষ পাওয়া যায় না। তাই আয়াতটা পড়তে হবে এই জেরার ভেতরে তার অবস্থান থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Eleven Words, Al-Haqq Twice",
          "bn": "১১ শব্দ, দুবার আল-হক্ক"
        },
        "p": [
          {
            "en": "Counted in the text of surah Yunus, and leaving out the two pause marks printed in the line, the verse is eleven words. It falls into three clauses, each of them opening with the connective fa. Four words give the verdict, fa-dhalikumu Allahu rabbukumu al-haqq. Five put a question that has only one answer, fa-madha ba'da al-haqqi illa ad-dalal. Two close it, fa-anna tusrafun. The whole verse is a consequence drawn three times over from something the hearers had just conceded.",
            "bn": "সূরা ইউনুসের মূল পাঠে গুনলে, আর লাইনে ছাপা দুটি ওয়াকফ চিহ্ন বাদ দিলে, আয়াতটি ১১ শব্দের। ভাগ হয়েছে ৩ বাক্যে, আর প্রতিটি শুরু হয়েছে ফা দিয়ে। ৪ শব্দে রায়, ফাযালিকুমুল্লাহু রব্বুকুমুল হক্ক। ৫ শব্দে এমন প্রশ্ন যার জবাব একটাই, ফামাযা বা'দাল হক্কি ইল্লাদ দালাল। ২ শব্দে শেষ, ফাআন্না তুসরাফূন। শ্রোতারা এইমাত্র যা মেনে নিয়েছে, পুরো আয়াত সেখান থেকেই ৩ বার সিদ্ধান্ত টেনে আনে।"
          },
          {
            "en": "Fa-dhalikum is the far demonstrative with the plural you fastened onto it: that, all of you, is Allah. Both at-Tabari and al-Qurtubi paraphrase it with the near demonstrative instead, hadha, this One who does these things is your Lord, which shows how tightly the word is meant to point back at the four questions. As-Sa'di reads the same word as gathering up a description: fa-dhalikum, the One who has described Himself with what He has just described Himself with.",
            "bn": "ফাযালিকুম হল দূরের ইশারার শব্দ, আর তার সঙ্গে জোড়া আছে বহুবচনের সম্বোধন, অর্থাৎ ওই সত্তা, হে তোমরা সকলে, তিনিই আল্লাহ। তাবারী আর কুরতুবী দুজনেই কিন্তু এর অর্থ করেন কাছের ইশারা দিয়ে, হাযা, যিনি এসব করেন তিনিই তোমাদের রব। এতেই বোঝা যায়, শব্দটি কত শক্ত করে ওই চারটি প্রশ্নের দিকে ফিরে ইশারা করছে। সাদী একই শব্দে পান গোটা বর্ণনার সমাপ্তি, ফাযালিকুম, অর্থাৎ যিনি নিজেকে নিয়ে এইমাত্র যা বললেন, তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lord Who Is Real",
          "bn": "যিনি সত্যিকারের রব"
        },
        "p": [
          {
            "en": "What does al-haqq attach to here? One line of reading keeps it on the lordship. At-Tabari: Allah is your Lord, al-haqq, there is no doubt in it. Al-Baghawi keeps it that short as well, the One who does these things is your Lord. Al-Muyassar spells it out, He is the truth in which there is no doubt, the One deserving worship alone, with no partner. Ibn Kathir draws the consequence, that every object of worship besides Him is false.",
            "bn": "আল-হক্ক শব্দটা এখানে কার সঙ্গে জোড়া? একটা ধারার পাঠ এটাকে রব হওয়ার সঙ্গেই রাখে। তাবারী বলেন, আল্লাহ তোমাদের রব, তিনিই হক্ক, এতে কোনো সন্দেহ নেই। বাগভীও কথাটা এত ছোট করেই রাখেন, যিনি এসব করেন তিনিই তোমাদের রব। মুয়াসসার খুলে বলেন, তিনিই সেই হক্ক যাঁতে কোনো সন্দেহ নেই, একমাত্র তিনিই ইবাদতের হকদার, তাঁর কোনো শরীক নেই। ইবনু কাসীর এর সিদ্ধান্তটা টানেন, তাঁকে বাদ দিয়ে যার ইবাদত করা হয় সবই বাতিল।"
          },
          {
            "en": "Al-Qurtubi's first question adds the entitlement: your Lord, al-haqq, means the One to whom godhood is due and who warrants being worshipped; and if that is so, setting anyone beside Him is misguidance and not truth. As-Sa'di piles the description up: the One worshipped and praised, who raises all creation on His blessings, alone in creating and arranging everything, from whom every favour the servants hold comes.",
            "bn": "কুরতুবী তাঁর প্রথম মাসআলায় এর সঙ্গে হকদার হওয়ার কথাটা যোগ করেন। তোমাদের রব, তিনিই হক্ক, অর্থাৎ ইলাহ হওয়ার অধিকার তাঁরই, আর ইবাদত পাওয়ার যোগ্য তিনিই। তা-ই যদি হয়, তবে তাঁর পাশে আর কাউকে বসানো গুমরাহি, হক নয়। সাদী বর্ণনার পাহাড় জমান: তিনিই ইবাদত পান আর প্রশংসা পান, সব সৃষ্টিকে তিনিই নিআমত দিয়ে গড়ে তোলেন, সৃষ্টি আর পরিচালনায় একমাত্র তিনিই, বান্দার হাতে যত নিআমত, সব তাঁর কাছ থেকেই।"
          },
          {
            "en": "His third question takes the word the other way, as a name of Allah, and defines it as the necessarily existent, from haqqa ash-shay', the thing was established and became due. The description is Allah's in reality, he argues, because His being is from Himself, with no non-existence before it or after it, while everything else so named came after non-existence. He quotes Labid's line, that all apart from Allah is batil, and points to 28:88. The two readings are not rivals; one commentator holds both.",
            "bn": "তৃতীয় মাসআলায় কুরতুবী শব্দটা অন্যভাবে নেন, আল্লাহর নাম হিসেবে, আর অর্থ করেন: যাঁর অস্তিত্ব অবশ্যম্ভাবী। শব্দটির মূল হক্কাশ শাইউ, অর্থাৎ জিনিসটা প্রতিষ্ঠিত হল আর অবধারিত হয়ে গেল। তাঁর যুক্তি, এই বিশেষণ প্রকৃত অর্থে আল্লাহরই, কারণ তাঁর অস্তিত্ব তাঁর নিজের থেকেই; তার আগেও অনস্তিত্ব নেই, পরেও নেই। আর এই নামে যাদের ডাকা হয়, বাকি সবাই অনস্তিত্ব থেকেই অস্তিত্বে এসেছে। তিনি লাবীদের সেই পঙক্তি টানেন, আল্লাহ ছাড়া সবই বাতিল, আর ২৮:৮৮ আয়াতের দিকে ইশারা করেন। দুটি পাঠে কোনো বিরোধ নেই; একই মুফাসসির দুটোই মানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Third Place to Stand",
          "bn": "তৃতীয় কোনো জায়গা নেই"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes first that the dha in madha is sila, a filler joined to ma, so the sense is just what is after; al-Jalalayn adds that the interrogative is meant as an affirmative, there being nothing after the truth but error. At-Tabari reads the clause as a flat alternative, what thing other than the truth is there except misguidance, glossing misguidance as al-jawr an qasd as-sabil, swerving off the road you meant to take. For al-Qurtubi too the reality of dalal is going away from the truth, taken from losing a road and turning off its track.",
            "bn": "কুরতুবী প্রথমে ধরিয়ে দেন, মাযা-র ভেতরের যা হল সিলা, মা-র সঙ্গে জোড়া বাড়তি অংশ। তাই অর্থ দাঁড়ায় শুধু: এরপরে কী আছে? জালালাইন যোগ করেন, প্রশ্নটা আসলে জোর দিয়ে বলা কথা: হকের পরে গুমরাহি ছাড়া কিছুই নেই। তাবারী বাক্যটাকে নেন সোজা দুই বিকল্প হিসেবে: হক ছাড়া এমন কী আছে, যা গুমরাহি নয়? গুমরাহির অর্থ তিনি করেন আল-জাওর আন কাসদিস সাবীল, অর্থাৎ যে পথে যেতে চেয়েছিলেন, সেই পথ থেকে সরে যাওয়া। কুরতুবীর কাছেও গুমরাহি মানে হক থেকে সরে যাওয়া; শব্দটা এসেছে পথ হারানো আর পথের রেখা ছেড়ে দেওয়া থেকে।"
          },
          {
            "en": "Al-Qurtubi's second question draws a boundary. His scholars ruled from this verse, he reports, that there is no third rank between truth and falsehood in the matter of Allah's oneness, nor in the questions of usul, where truth lies on a single side. The branches are otherwise: he cites 5:48, to each of you We prescribed a law and a method, with the Prophet's ﷺ words that the halal is clear and the haram is clear and between them are doubtful matters, confirmed in Sahih al-Bukhari 2051 from an-Nu'man ibn Bashir (RA).",
            "bn": "কুরতুবী তাঁর দ্বিতীয় মাসআলায় সীমানা টেনে দেন। তিনি জানান, তাঁর আলিমরা এই আয়াত থেকে সিদ্ধান্ত নিয়েছেন যে আল্লাহর একত্বের প্রশ্নে হক আর বাতিলের মাঝখানে তৃতীয় কোনো স্তর নেই, উসূলের প্রশ্নগুলোতেও নেই; সেখানে হক থাকে কেবল এক দিকেই। শাখা-মাসআলা এমন নয়। এর জন্য তিনি টানেন ৫:৪৮, তোমাদের প্রত্যেকের জন্য আমি শরীয়ত আর পথ নির্ধারণ করেছি; সঙ্গে নবীর ﷺ কথা, হালাল স্পষ্ট আর হারাম স্পষ্ট, আর এ দুয়ের মাঝে আছে সন্দেহজনক বিষয়। এই কথাগুলো সহীহ বুখারীর ২০৫১ নম্বরে নুমান ইবনু বাশীর (রাঃ)-এর সূত্রে পাওয়া যায়।"
          },
          {
            "en": "Ma'arif al-Qur'an reaches the same limit, adding that in questions settled by ijtihad the majority hold the other position cannot be called straying. Al-Qurtubi also records a wider use of the clause and then refuses it. Some earlier scholars took it to cover deeds, so that the forbidden is misguidance and the permitted is guidance; Malik, asked about chess and dice, answered with this very clause, and az-Zuhri called such play part of the batil. Al-Qurtubi's own verdict is the narrower reading, because what stands before it in 10:31 is provision and lordship.",
            "bn": "মাআরিফুল কুরআন একই সীমায় পৌঁছায়, আর যোগ করে, ইজতিহাদের মাসআলায় বিপরীত মতকে গুমরাহি বলা যায় না, এটাই অধিকাংশের কথা। কুরতুবী এই বাক্যটির আরো চওড়া ব্যবহারও লিখে রাখেন, তারপর তা নাকচ করেন। আগের কিছু আলিম এটাকে আমলের ক্ষেত্রেও টেনেছেন, তাতে হারাম হয় গুমরাহি আর মুবাহ হয় হিদায়াত। মালিককে দাবা আর পাশা খেলার কথা জিজ্ঞেস করা হলে তিনি এই বাক্যটিই শোনান, আর যুহরী এসব খেলাকে বলেন বাতিলের অংশ। কুরতুবীর নিজের রায় সংকীর্ণ পাঠটাই, কারণ এর আগে ১০:৩১ আয়াতে কথা চলছিল রিযক আর রব হওয়া নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Turned, Not Turning",
          "bn": "নিজে ঘুরছে না, ঘোরানো হচ্ছে"
        },
        "p": [
          {
            "en": "Now the two words at the end. At-Tabari expands them into a question with a sting: to which direction away from guidance and the truth are you turned, and which road other than those two are you walking, while you admit that what you are turned from is the truth? Al-Baghawi gives it briefly, where are you turned away from His worship while you confess Him. Ibn Kathir adds what makes it worse, that you know He is the Lord who created everything.",
            "bn": "এবার শেষের দুটি শব্দ। তাবারী এগুলো খুলে এমন এক প্রশ্ন বানান, যার ভেতরে কাঁটা আছে: হিদায়াত আর হক থেকে সরে কোন দিকে তোমাদের ঘোরানো হচ্ছে, এ দুটো ছেড়ে কোন পথে তোমরা হাঁটছ, অথচ নিজেরাই মানছ যে যা থেকে তোমাদের ঘোরানো হচ্ছে, সেটাই হক? বাগভী কথাটা ছোট করে বলেন: তাঁর ইবাদত থেকে সরিয়ে কোথায় তোমাদের নেওয়া হচ্ছে, অথচ তাঁকে তো তোমরা স্বীকার করছ। ইবনু কাসীর এমন কথা যোগ করেন, যা দোষটাকে আরো ভারী করে: তোমরা তো জানো, তিনিই সেই রব যিনি সব কিছু সৃষ্টি করেছেন।"
          },
          {
            "en": "Al-Qurtubi's closing line makes the hearer the agent of the turning: how do you turn your minds away, to the worship of something that does not provide, does not give life and does not cause death. Al-Jalalayn reads the turning as away from faith itself, and adds the aggravation, after the proofs had been established. Tanwir al-Miqbas goes somewhere else again, glossing the clause as, from where do you invent lies about Allah.",
            "bn": "কুরতুবী শেষ লাইনে ঘোরানোর কাজটা শ্রোতার হাতেই দেন: তোমরা নিজেদের বুদ্ধি কোন দিকে ঘুরিয়ে নিচ্ছ, এমন কিছুর ইবাদতের দিকে যা রিযক দেয় না, জীবন দেয় না, মৃত্যুও দেয় না? জালালাইন ঘোরানোটাকে নেন খোদ ঈমান থেকে সরে যাওয়া অর্থে, আর দোষটাকে আরো ভারী করে যোগ করেন: দলিল কায়েম হয়ে যাওয়ার পরেও। তানবীরুল মিকবাস আবার অন্য দিকে যায়; বাক্যটির অর্থ করে, আল্লাহর নামে মিথ্যা তোমরা কোথা থেকে বানাচ্ছ?"
          },
          {
            "en": "Maududi, in Tafhim al-Qur'an, presses the passive voice instead. The questions are put to ordinary people, he says, so they are not asked whither are you turning away but whither are you being turned away, and the passive shows somebody must have been turning them. The Qur'an keeps back the names of the misguiders wherever it asks this, he adds, so that their followers weigh the matter coolly instead of rallying to a criticised leader. The earlier reading has the hearer turning his own mind; Maududi has him moved by hands he has not named.",
            "bn": "মওদূদী তাফহীমুল কুরআনে বরং কর্মবাচ্যের উপরেই জোর দেন। তাঁর কথা, প্রশ্নগুলো করা হচ্ছে সাধারণ মানুষকে। তাই বলা হয়নি, তোমরা কোথায় ঘুরে যাচ্ছ; বলা হয়েছে, তোমাদের কোথায় ঘুরিয়ে নেওয়া হচ্ছে। আর এই কর্মবাচ্যই দেখায়, নিশ্চয়ই কেউ তাদের ঘুরিয়ে নিচ্ছিল। তিনি আরো বলেন, কুরআন যেখানেই এই প্রশ্ন করে, সেখানেই পথভ্রষ্টকারীদের নাম চেপে রাখে, যাতে তাদের অনুসারীরা মাথা ঠান্ডা রেখে ভাবতে পারে, সমালোচিত নেতার পক্ষে দল বেঁধে না দাঁড়ায়। আগের পাঠে শ্রোতা নিজেই নিজের মন ঘুরিয়ে নিচ্ছে; মওদূদীর পাঠে তাকে সরাচ্ছে এমন সব হাত, যাদের নাম বলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "You Are the Truth",
          "bn": "আপনিই হক্ক"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the only commentary consulted here that brings a narration to this word. He says it is established from A'ishah (RA) that the Prophet ﷺ, rising to pray in the depth of the night, would say Allahumma laka al-hamd, a du'a containing, You are al-Haqq and Your promise is the truth. That wording stands in Sahih al-Bukhari 1120, from Ibn Abbas (RA), so the attribution is left as al-Qurtubi's. The other narrations on his page belong to his digression about play, and nothing here is built on them.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার মধ্যে কেবল কুরতুবীই এই শব্দের সঙ্গে হাদিস আনেন। তিনি বলেন, আয়িশা (রাঃ)-এর সূত্রে প্রমাণিত আছে, নবী ﷺ গভীর রাতে নামাজে দাঁড়িয়ে বলতেন, আল্লাহুম্মা লাকাল হামদ; সেই দুআর ভেতরে আছে, আপনিই হক্ক আর আপনার ওয়াদা হক্ক। এই শব্দগুলো সহীহ বুখারীর ১১২০ নম্বরে আছে, তবে সেখানে বর্ণনাকারী ইবনু আব্বাস (রাঃ)। তাই আয়িশা (রাঃ)-এর নামে জোড়াটা কুরতুবীর কথা হিসেবেই রেখে দেওয়া হল। তাঁর পাতার বাকি হাদিসগুলো খেলা নিয়ে তাঁর প্রসঙ্গান্তরের অংশ; এখানে সেগুলোর উপর কিছু দাঁড় করানো হয়নি।"
          },
          {
            "en": "Part of it, from Bukhari 1120: O Allah, all the praises are for You, You are the Holder of the Heavens and the Earth and whatever is in them; and the praise runs on until, You are the Truth and Your Promise is the truth, and to meet You is true, Your Word is the truth, and Paradise is true and Hell is true and all the Prophets are true, and Muhammad ﷺ is true, and the Day of Resurrection is true. The du'a begins where the verse begins.",
            "bn": "বুখারীর ১১২০ নম্বর থেকে তার কিছু অংশ, হে আল্লাহ, সমস্ত প্রশংসা আপনারই, আসমান ও যমীন আর তাতে যা আছে সব ধরে রেখেছেন আপনিই; প্রশংসা চলতে থাকে, তারপর আসে, আপনিই হক্ক আর আপনার ওয়াদা হক্ক, আপনার সাক্ষাৎ হক্ক, আপনার কথা হক্ক, জান্নাত হক্ক আর জাহান্নাম হক্ক, নবীগণ হক্ক, মুহাম্মাদ ﷺ হক্ক, আর কিয়ামতের দিন হক্ক। দুআটি সেখান থেকেই শুরু করে যেখান থেকে আয়াত শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else It Is Asked",
          "bn": "আর কোথায় এই প্রশ্ন"
        },
        "p": [
          {
            "en": "Other places keep al-haqq where this verse puts it. In 6:62 the servants are returned to Allah, their true Lord, and the judgement is His. 10:30, two verses before ours, uses the same phrase for the return, to Allah their master, the Truth, while what they used to invent is lost to them. The word does the same work at the end of the road.",
            "bn": "আরো কিছু জায়গায় আল-হক্ক শব্দটা ঠিক এই আয়াতের জায়গাতেই বসে আছে। ৬:৬২ আয়াতে বান্দাদের ফিরিয়ে আনা হয় আল্লাহর কাছে, তাদের প্রকৃত রবের কাছে, আর ফয়সালা তাঁরই। আমাদের আয়াতের দুই আয়াত আগে, ১০:৩০ আয়াতে, একই শব্দবন্ধ ফেরার কথায় আসে, তাদের প্রকৃত অভিভাবক আল্লাহর কাছে, আর তাদের বানানো সব মিথ্যা তাদের থেকে হারিয়ে যায়। পথের শেষেও শব্দটি একই কাজ করে।"
          },
          {
            "en": "Al-Qurtubi pairs it with falsehood too, quoting that Allah is the True Reality and what they call upon other than Him is falsehood; that wording is 22:62, and all but one word of it stands again at 31:30. The closing question has relatives as well: 23:89 ends a like exchange with fa-anna tusharun, rendered here as, then how are you deluded, and 29:61 and 43:87 both close with fa-anna yu'fakun.",
            "bn": "কুরতুবী শব্দটাকে বাতিলের সঙ্গেও জোড়া বেঁধে দেখান, তিনি সেই বাক্য টানেন, আল্লাহই হক আর তাঁকে বাদ দিয়ে তারা যাকে ডাকে তা বাতিল; তিনি যে শব্দগুলো আনেন সেগুলো ২২:৬২ আয়াতের, আর একটি শব্দের ফারাক রেখে প্রায় একই বাক্য আছে ৩১:৩০ আয়াতেও। শেষের প্রশ্নটিরও আত্মীয় আছে। ২৩:৮৯ আয়াতে এ ধরনের কথাবার্তাই শেষ হয় ফাআন্না তুসহারূন দিয়ে, যার অনুবাদ এখানে, তাহলে কেমন করে তোমরা যাদুগ্রস্ত হয়ে পড়ছ; আর ২৯:৬১ আর ৪৩:৮৭ দুটোই শেষ হয় ফাআন্না ইউফাকূন দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside the Admission",
          "bn": "স্বীকারোক্তির ভেতরে থাকা"
        },
        "p": [
          {
            "en": "The verse speaks about the people it speaks about, those who granted everything in 10:31 and worshipped beside Him anyway. It passes sentence on nobody alive and hands nobody a verdict to carry out. Its work is inward, and Ibn Kathir's framing is what makes it reach: the admission itself was the evidence against them. Whoever concedes that his provision and his senses are from Allah stands where the question is asked.",
            "bn": "আয়াত যাদের কথা বলছে, তাদেরই কথা বলছে: যারা ১০:৩১ আয়াতে সব মেনে নিয়েও তাঁর পাশে অন্যের ইবাদত করত। বেঁচে থাকা কারো ব্যাপারে আয়াত কোনো রায় দেয় না, কারো হাতে কোনো ফয়সালাও তুলে দেয় না। এর কাজ ভেতরের দিকে। আর ইবনু কাসীর যেভাবে কথাটা ধরেছেন, সেটাই আয়াতটাকে আমাদের পর্যন্ত টেনে আনে: স্বীকারোক্তিটাই ছিল তাদের বিরুদ্ধে দলিল। রিযক আর নিজের কান-চোখ আল্লাহর দেওয়া, এটা যিনি মানেন, প্রশ্নটা তাঁর সামনেই রাখা হচ্ছে।"
          },
          {
            "en": "So the test is small and can be run today. Find a place where a settled conviction and a standing habit do not match, and refuse the comfort of calling that gap a middle position, because the verse says there is none. Then, reading the passive Maududi's way, name the agents: whose opinion settled a matter you never checked, whose approval decided what you bought. A turn you can name is a turn you can refuse.",
            "bn": "তাই পরীক্ষাটা ছোট, আজই করে দেখা যায়। এমন একটা জায়গা খুঁজুন, যেখানে আপনার পাকা বিশ্বাস আর রোজকার অভ্যাস মেলে না। সেই ফাঁকটাকে মাঝামাঝি অবস্থান বলে নিজেকে সান্ত্বনা দেবেন না, কারণ আয়াত বলছে মাঝামাঝি বলে কিছু নেই। তারপর মওদূদীর মতো কর্মবাচ্যটা খেয়াল করুন, আর যারা ঘোরাচ্ছে তাদের নাম বলুন: কার মতামতে আপনি যাচাই না করেই একটা বিষয় মেনে নিয়েছেন, কার পছন্দ দেখে ঠিক করেছেন কী কিনবেন। যে টানের নাম আপনি বলতে পারেন, তাকে না-ও বলতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer, Then Four Questions",
          "bn": "দুআ, তারপর চার প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse addresses people, not Allah, so it is not itself a supplication; but the confession inside it can be prayed. What follows is composed here from the verse's own vocabulary and is not a narrated du'a: You are Allah, my Lord, the Truth; after Your truth there is nothing but going astray; keep me from being turned away from what I have already admitted, and let nothing turn me that I cannot name.",
            "bn": "আয়াত মানুষকে সম্বোধন করছে, আল্লাহকে নয়, তাই এটি নিজে কোনো দুআ নয়; তবে এর ভেতরের স্বীকারোক্তিটা দুআ হিসেবে বলা যায়। নিচের কথাগুলো আয়াতের শব্দ থেকেই এখানে সাজানো; এগুলো বর্ণিত কোনো দুআ নয়। আপনিই আল্লাহ, আমার রব, আপনিই হক্ক; আপনার হকের পরে গুমরাহি ছাড়া কিছু নেই। যা আমি আগেই মেনে নিয়েছি, তা থেকে আমাকে ঘুরে যেতে দেবেন না; আর যার নাম আমি জানি না, এমন কিছু যেন আমাকে ঘোরাতে না পারে।"
          },
          {
            "en": "Four to carry. The answer is already in my mouth, so where in the week does my life stop agreeing with it? What actually turns me, and could I name it out loud if somebody asked? Since there is no third place between truth and error, which habit have I parked in a middle that does not exist? And if He owns my hearing and my sight, what did I spend them on since yesterday?",
            "bn": "সঙ্গে নেওয়ার জন্য চারটি প্রশ্ন। জবাবটা তো আমার মুখেই আছে, তাহলে সপ্তাহের কোন জায়গায় আমার জীবন সেই জবাবের সঙ্গে আর মেলে না? আমাকে আসলে কে ঘোরায়, আর কেউ জিজ্ঞেস করলে তার নাম কি আমি মুখে বলতে পারব? হক আর গুমরাহির মাঝখানে যখন তৃতীয় কোনো জায়গা নেই, তখন কোন অভ্যাসটা আমি এমন মাঝখানে রেখে দিয়েছি যার অস্তিত্বই নেই? আর শোনা আর দেখার মালিক যখন তিনিই, গতকাল থেকে এ দুটো আমি কোন কাজে খরচ করলাম?"
          }
        ]
      }
    ]
  },
  "10:39": {
    "sections": [
      {
        "h": {
          "en": "After the Challenge Failed",
          "bn": "চ্যালেঞ্জটা ব্যর্থ হওয়ার পর"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan. 10:36 said most of them follow nothing but assumption, which avails nothing against the truth. 10:37 states that this Qur'an could not have been produced by other than Allah. 10:38 puts the accusation into their mouths and answers it with a challenge: then bring a surah like it, and call on whoever you can besides Allah. Our verse begins with bal, rather, the word that drops the accusation and names what was underneath it.",
            "bn": "সূরা ইউনুস মাক্কী। ১০:৩৬ আয়াত বলেছে, তাদের অধিকাংশ কেবল ধারণার পিছনেই চলে, আর সত্যের মুকাবিলায় ধারণা কোনো কাজে আসে না। ১০:৩৭ আয়াত জানিয়ে দেয়, এই কুরআন আল্লাহ ছাড়া আর কারো রচনা হতে পারে না। ১০:৩৮ আয়াত তাদের মুখের অভিযোগটা তুলে ধরে, আর জবাব দেয় চ্যালেঞ্জ দিয়ে: তাহলে এর মতো সূরা নিয়ে আসো, আল্লাহকে বাদ দিয়ে যাকে পারো ডেকে নাও। আমাদের আয়াত শুরু হয় বাল দিয়ে, মানে বরং। এই শব্দ অভিযোগটাকে নামিয়ে রাখে, আর তার নিচে যা ছিল সেটার নাম বলে দেয়।"
          },
          {
            "en": "As-Sa'di reads the join tightly. Once their inability to meet the challenge was clear, their claim stood exposed as false, with no share of proof in it. What is left to explain is not their argument but their motive, and the verse supplies it: they had not encompassed the Book in knowledge. Tanwir al-Miqbas adds that the verse is also said to console the Prophet ﷺ, so that he bears their harm.",
            "bn": "সা'দী জোড়টা টানটান করে পড়েন। চ্যালেঞ্জের জবাব দিতে তাদের অক্ষমতা যখন ফাঁস হয়ে গেল, তখনই বোঝা গেল তাদের দাবির পিছনে দলিলের কোনো ভাগই নেই। তাহলে ব্যাখ্যা করার মতো বাকি থাকে কী? তাদের যুক্তি নয়, তাদের ভেতরের কারণ। আয়াতটাই সেটা বলে দেয়: কিতাবটাকে তারা জ্ঞানের ঘেরে আনতে পারেনি। তানভীরুল মিক্বাস আরো যোগ করে, বলা হয়েছে এই আয়াত নবী ﷺ-এর জন্য সান্ত্বনাও, যাতে তিনি তাদের কষ্ট সহ্য করতে পারেন।"
          },
          {
            "en": "Al-Muyassar fills in the speed of it: they rushed to deny the Qur'an the first time they heard it, before they had pondered its verses. What follows shows the verse is no blanket sentence on the audience. 10:40 divides them at once, some believing in it and some not, and 10:41 tells the Prophet ﷺ to hand each side its own account. Then 10:44 states that Allah wrongs nobody and that people wrong themselves.",
            "bn": "মুয়াসসার গতিটা ধরিয়ে দেয়: প্রথম শোনামাত্রই তারা কুরআনকে মিথ্যা বলতে ছুটেছিল, আয়াতগুলো নিয়ে ভেবে দেখার আগেই। এরপর যা আসে, তাতে বোঝা যায় আয়াতটা শ্রোতা সবার উপরে ঢালাও রায় নয়। ১০:৪০ আয়াত সঙ্গে সঙ্গে ভাগ করে দেয়, কেউ এতে ঈমান আনে আর কেউ আনে না। ১০:৪১ আয়াত নবী ﷺ-কে বলে, দুই পক্ষের হিসাব দুই পক্ষের হাতেই বুঝিয়ে দিতে। আর ১০:৪৪ আয়াত বলে, আল্লাহ কারো প্রতি যুলুম করেন না, মানুষ নিজেরাই নিজেদের প্রতি যুলুম করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nineteen Words, One Pivot",
          "bn": "উনিশ শব্দ, একটাই মোড়"
        },
        "p": [
          {
            "en": "The verse is nineteen Arabic words, counting the text and leaving out the two pause marks printed in the line. It opens on bal, the particle that withdraws what was just entertained and puts something else there. The accusation of 10:38 is not answered as an argument at all. At-Tabari renders the turn in his own words: what ails these mushriks is not their belying you, he has Allah tell His Prophet ﷺ, but their denying what they had not encompassed in knowledge.",
            "bn": "আয়াতটি ১৯টি আরবি শব্দের, লাইনে ছাপা দুটি ওয়াক্ফ চিহ্ন বাদ দিয়ে গোনা। শুরু হয় বাল দিয়ে, যে হরফ আগের কথাটা সরিয়ে রেখে সেই জায়গায় অন্য কিছু বসায়। ১০:৩৮ আয়াতের অভিযোগের জবাব যুক্তি দিয়ে একেবারেই দেওয়া হয়নি। তাবারী মোড়টা নিজের ভাষায় খুলে বলেন। এই মুশরিকদের আসল রোগ নবী ﷺ-কে মিথ্যা বলা নয়; বরং যা তারা জ্ঞানের ঘেরে আনতে পারেনি, সেটাকেই মিথ্যা বলা। কথাটা আল্লাহ তাঁর নবী ﷺ-কে বলছেন।"
          },
          {
            "en": "The verb in the relative clause is ahata, to go right round a thing so that nothing of it stays outside. Lam yuhitu bi-ilmihi is therefore not that they knew nothing of the Book, but that their knowledge of it never closed the circle. The Qur'an puts the same verb in the question asked on the Day, in 27:84: did you deny My signs while you encompassed them not in knowledge? The charge here is the charge they will hear read back to them.",
            "bn": "বাক্যের ভেতরের ক্রিয়াটা আহাতা, মানে কোনো জিনিসকে এমনভাবে ঘিরে ফেলা যাতে তার কিছুই বাইরে না থাকে। তাই লাম ইউহীতূ বি-ইলমিহি মানে এই নয় যে কিতাবের কিছুই তারা জানত না; মানে হল, তাদের জানাটা কখনো বৃত্ত পূরণ করেনি। কিয়ামতের দিনের প্রশ্নেও কুরআন এই ক্রিয়াই ব্যবহার করে। ২৭:৮৪ আয়াত: তোমরা কি আমার নিদর্শনকে মিথ্যা বলেছিলে, অথচ তা জ্ঞানের ঘেরে আনতে পারনি? এখানকার অভিযোগটাই সেদিন তাদের সামনে পড়ে শোনানো হবে।"
          },
          {
            "en": "The second clause changes the negative particle. Not lam ya'tihim, it did not come to them, but lamma ya'tihim, it has not come yet, the arrival still expected. As-Sa'di reads it exactly that way, glossing the phrase with ila'l-an, until now. And ta'wil is built on the root of ya'ulu, to come back to, to end up at. Both at-Tabari and al-Baghawi gloss the noun with that very verb: ma ya'ulu ilayhi, what the matter comes back to in the end.",
            "bn": "দ্বিতীয় বাক্যে না-বাচক হরফটা বদলে যায়। লাম ইয়াতিহিম, অর্থাৎ তাদের কাছে আসেনি, তা নয়; বলা হয়েছে লাম্মা ইয়াতিহিম, অর্থাৎ এখনো আসেনি, আসার অপেক্ষা এখনো আছে। সা'দী ঠিক এভাবেই পড়েন, কথাটার ব্যাখ্যায় জুড়ে দেন ইলাল-আন, অর্থাৎ এখন পর্যন্ত। আর তাবীল শব্দের মূল হল ইয়াউলু, কোনো কিছুতে ফিরে যাওয়া, শেষে গিয়ে ঠেকা। তাবারী আর বাগাভী দুজনেই এই ক্রিয়াটা দিয়েই শব্দটার ব্যাখ্যা দেন: মা ইয়াউলু ইলাইহি, শেষে ব্যাপারটা যেখানে গিয়ে ঠেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Consequence or Comprehension",
          "bn": "পরিণাম, নাকি বোঝা"
        },
        "p": [
          {
            "en": "What is the ta'wil that had not yet come? Most of the commentaries read it as the outcome the Qur'an had warned them of. At-Tabari says plainly: the clarification of what that threat, with which Allah threatened them in this Qur'an, will come back to. Al-Baghawi says the same and adds that they did not know where their own affair would end. As-Sa'di names the content of the promise: that the punishment would descend on them.",
            "bn": "যে তাবীল তখনো আসেনি, সেটা কী? বেশির ভাগ তাফসীর এটাকে নেয় সেই পরিণাম হিসেবে, যার ভয় কুরআন তাদের দেখিয়েছিল। তাবারী সোজাসুজি বলেন: এই কুরআনে আল্লাহ তাদের যে শাস্তির ভয় দেখিয়েছেন, সেই ভয়টা শেষে কোথায় গিয়ে ঠেকবে তার খোলাসা। বাগাভী একই কথা বলে যোগ করেন, নিজেদের ব্যাপারটা শেষে কোথায় গিয়ে দাঁড়াবে সেটা তারা জানত না। সা'দী প্রতিশ্রুতির ভেতরের জিনিসটার নাম বলে দেন: তাদের উপর শাস্তি নেমে আসবে।"
          },
          {
            "en": "Al-Jalalayn puts it briefly: the consequence of the threats made therein. Tanwir al-Miqbas says the same. Al-Muyassar and a report from ad-Dahhak that al-Qurtubi carries widen it: what they denied is the raising, the reckoning, the Garden and the Fire, and what has not reached them is the reality the Book promised. This app's two translations sit on opposite sides of the word: the English says whose interpretation has not yet come to them, the Bengali says whose outcome has not yet arrived.",
            "bn": "জালালাইন সংক্ষেপে বলে: এতে যে ভয় দেখানো হয়েছে, তারই পরিণাম। তানভীরুল মিক্বাসও একই কথা বলে। মুয়াসসার আর কুরতুবীর উদ্ধৃত দাহহাকের একটি বর্ণনা কথাটা আরো চওড়া করে। তাদের মতে তারা যা মিথ্যা বলেছিল, তা হল পুনরুত্থান, হিসাব, জান্নাত আর জাহান্নাম; আর যা তাদের কাছে এসে পৌঁছায়নি, তা হল কিতাবের প্রতিশ্রুত বাস্তবতা। এই অ্যাপের দুই অনুবাদ শব্দটার দুই পাশে দাঁড়িয়ে আছে: ইংরেজিতে বলা হয়েছে যার ব্যাখ্যা এখনো তাদের কাছে আসেনি, বাংলায় বলা হয়েছে যার পরিণাম ফল এখনও উপস্থিত হয়নি।"
          },
          {
            "en": "Ibn Kathir reads the clause the other way, and the difference is worth keeping as a difference. For him what had not reached them is the Book's own content: they had not attained the guidance and the religion of truth in it, up to the moment they denied it out of ignorance and folly. Al-Qurtubi's gloss on the first clause runs alongside it: they denied while ignorant of the Qur'an's meanings and its tafsir. Read the first way, the sentence is a delayed punishment; read the second, it is a meaning never let in.",
            "bn": "ইবনু কাসীর একই বাক্যকে উল্টো দিক থেকে পড়েন, আর এই মতভেদটা মতভেদ হিসেবেই রেখে দেওয়া উচিত। তাঁর কাছে যা তাদের কাছে পৌঁছায়নি সেটা কিতাবের নিজের ভেতরের জিনিস: এতে যে হিদায়াত আর সত্য দীন আছে, অজ্ঞতা আর বোকামির বশে মিথ্যা বলার সময় পর্যন্ত তারা তা হাতে পায়নি। কুরতুবীর প্রথম বাক্যের ব্যাখ্যাও এর পাশেই চলে: কুরআনের অর্থ আর তাফসীর না জেনেই তারা কুরআনকে মিথ্যা বলেছিল। প্রথম পড়ায় বাক্যটা পিছিয়ে দেওয়া শাস্তি; দ্বিতীয় পড়ায় ভেতরে ঢুকতেই না দেওয়া অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "Ignorant of a Thing",
          "bn": "যা জানি না, তার শত্রু"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave the observation as description. It was upon them to know the meanings by asking, he says, and then draws the rule: this shows it is obligatory to look into the ta'wil. The verse is being read as an argument for study. A person who has not examined a thing has no standing to rule on it, and the remedy named is the plainest there is: ask someone who knows.",
            "bn": "কুরতুবী কথাটাকে কেবল বর্ণনা হিসেবে ফেলে রাখেন না। তিনি বলেন, জিজ্ঞেস করে অর্থগুলো জেনে নেওয়া তাদের উপর ওয়াজিব ছিল। এরপর তিনি হুকুমটা বের করে আনেন: এতে বোঝা যায়, তাবীলের দিকে নজর দেওয়া ওয়াজিব। মানে আয়াতটাকে পড়া হচ্ছে ইলম হাসিলের দলিল হিসেবে। যে জিনিস কেউ যাচাই করে দেখেনি, তার উপর রায় দেওয়ার অধিকারও তার নেই। আর যে উপায় বলা হল, সেটাই সবচেয়ে সহজ: যে জানে তাকে জিজ্ঞেস করা।"
          },
          {
            "en": "Al-Qurtubi then records an exchange. Al-Husayn ibn al-Fadl was asked whether the saying whoever is ignorant of a thing becomes its enemy is in the Qur'an. He answered yes, in two places, and named them: this verse, and the closing words of 46:11, where those not guided by the Book say this is an ancient falsehood. The pairing is exact. Ignorance of a thing is not neutral in either verse; it hardens into hostility towards the thing not known.",
            "bn": "কুরতুবী এরপর একটা কথোপকথন উল্লেখ করেন। হুসাইন ইবনুল ফাদলকে জিজ্ঞেস করা হয়েছিল, মানুষ যা জানে না তার শত্রু হয়ে যায়, এই কথাটা কি কুরআনে আছে? তিনি বলেছিলেন, হ্যাঁ, দুই জায়গায়; আর জায়গা দুটোর নামও বলেছিলেন: এই আয়াত, আর ৪৬:১১ আয়াতের শেষ কথাগুলো, যেখানে কিতাব থেকে যারা হিদায়াত পায়নি তারা বলে, এটা তো এক পুরনো মিথ্যা। মিলটা হুবহু। দুই আয়াতেই না জানাটা নিরপেক্ষ থাকে না; যা জানা নেই, তার প্রতি শত্রুতায় জমাট বাঁধে।"
          },
          {
            "en": "As-Sa'di turns the same lesson into a discipline for anyone: in this is proof of taking care in matters, and that a person should not rush to accept or reject a thing before he has encompassed it in knowledge. Note that he makes acceptance as culpable as rejection. Maududi, in Tafhim al-Qur'an, presses the other half: they had no proof the Book was forged and no knowledge that its reports were false, yet challenged it like men who had researched it thoroughly.",
            "bn": "সা'দী একই শিক্ষাকে সবার জন্য একটা নিয়ম বানিয়ে দেন: এতে দলিল আছে যে কোনো ব্যাপারে থেমে যাচাই করা দরকার, আর জ্ঞানের ঘেরে আনার আগে কোনো কিছু মেনে নিতে বা নাকচ করতে তাড়াহুড়ো করা উচিত নয়। খেয়াল করুন, তিনি মেনে নেওয়াকেও নাকচ করার মতোই দোষের বলছেন। মওদূদী তাফহীমুল কুরআনে অন্য দিকটা চেপে ধরেন: কিতাবটা যে বানানো, তার কোনো প্রমাণ তাদের হাতে ছিল না; এর খবরগুলো যে মিথ্যা, সে জ্ঞানও ছিল না। তবু তারা এমনভাবে চ্যালেঞ্জ করছিল, যেন বিষয়টা খুঁটিয়ে গবেষণা করে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Miracles, and This Revelation",
          "bn": "মু'জিযা আর এই ওহি"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for 10:39 attaches a prophetic narration to this verse itself. At-Tabari, al-Qurtubi, as-Sa'di and al-Baghawi argue it from the words and the fate of earlier nations; the authorities al-Qurtubi names here, ad-Dahhak and al-Husayn ibn al-Fadl, are not Companions. Ibn Kathir does bring a hadith a few lines earlier in the same block, under the challenge of 10:38, and it is worth hearing here for what it says about how conviction arrives.",
            "bn": "১০:৩৯ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটাই এই আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয় না। তাবারী, কুরতুবী, সা'দী আর বাগাভী কথাটা প্রমাণ করেন শব্দ থেকে আর আগের জাতিগুলোর পরিণতি থেকে। কুরতুবী এখানে নাম ধরে যাঁদের কথা আনেন, দাহহাক আর হুসাইন ইবনুল ফাদল, তাঁরা সাহাবী ছিলেন না। তবে ইবনু কাসীর একই আলোচনার কয়েক লাইন আগে, ১০:৩৮ আয়াতের চ্যালেঞ্জের নিচে, একটা হাদিস আনেন। মানুষের মনে বিশ্বাস কীভাবে আসে, সে বিষয়ে হাদিসটা যা বলে, সেজন্যই এখানে এটা শোনা দরকার।"
          },
          {
            "en": "The wording is Sahih al-Bukhari 4981, from Abu Hurayra (RA). The Prophet ﷺ said: Every Prophet was given miracles because of which people believed, but what I have been given is Divine Inspiration which Allah has revealed to me. So I hope that my followers will outnumber the followers of the other Prophets on the Day of Resurrection. Ibn Kathir's point is that the sign given with this Book is the Book itself, so refusing to read it carefully is refusing the evidence.",
            "bn": "শব্দগুলো সহীহ বুখারীর ৪৯৮১ নম্বর হাদিসের, আবূ হুরায়রা (রাঃ)-এর সূত্রে। নবী ﷺ বলেছেন: প্রত্যেক নবীকে এমন মু'জিযা দেওয়া হয়েছে, যা দেখে মানুষ ঈমান এনেছে; আর আমাকে যা দেওয়া হয়েছে, তা হল ওহি, যা আল্লাহ আমার কাছে নাজিল করেছেন। তাই আমি আশা করি, কিয়ামতের দিন অন্য নবীদের চেয়ে আমার অনুসারী বেশি হবে। ইবনু কাসীর এটা এনে বোঝাতে চান, এই কিতাবের সঙ্গে যে নিদর্শন দেওয়া হয়েছে, তা কিতাব নিজেই। তাই মন দিয়ে পড়তে রাজি না হওয়া মানে প্রমাণটাকেই ফিরিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Ta'wil Comes Due",
          "bn": "পরিণাম যেখানে এসে দাঁড়ায়"
        },
        "p": [
          {
            "en": "The word that divides the commentators is settled elsewhere by the Qur'an itself. 7:53 asks whether they await anything but its ta'wil, then describes the Day its ta'wil comes, when those who forgot it ask for intercessors or a second chance; this app renders the word there as its result. 6:67 states the principle without narrative: every report has its appointed outcome, and you are going to know.",
            "bn": "যে শব্দ এখানে তাফসীরকারদের ভাগ করে দেয়, কুরআন নিজেই অন্য জায়গায় সেটা মিটিয়ে দিয়েছে। ৭:৫৩ আয়াত জিজ্ঞেস করে, তারা কি তার তাবীল ছাড়া আর কিছুর অপেক্ষা করছে? তারপর সেই দিনটা বর্ণনা করে যেদিন তার তাবীল এসে যায়, আর যারা একে ভুলে ছিল তারা সুপারিশকারী খোঁজে কিংবা আরেকবার সুযোগ চায়। এই অ্যাপ ওখানে শব্দটার অর্থ করে পরিণাম। ৬:৬৭ আয়াত কাহিনি ছাড়াই নীতিটা বলে দেয়, প্রত্যেক খবরের নির্ধারিত পরিণাম আছে, আর তোমরা জানতে পারবে।"
          },
          {
            "en": "27:84 turns the diagnosis into a question put to the deniers on the Day, in the verse's own vocabulary: did you deny My signs while you encompassed them not in knowledge? 17:36 gives the command that would have prevented it, do not pursue what you have no knowledge of, and names what will be questioned: the hearing, the sight and the heart. 38:88 closes the loop with the same not-yet as our verse: you will surely know its news after a time.",
            "bn": "২৭:৮৪ আয়াত এই দোষটাকেই কিয়ামতের দিন অস্বীকারকারীদের সামনে প্রশ্ন বানিয়ে রাখে, আর প্রশ্নের ভাষা আমাদের আয়াতেরই: তোমরা কি আমার নিদর্শনকে মিথ্যা বলেছিলে, অথচ তা জ্ঞানের ঘেরে আনতে পারনি? ১৭:৩৬ আয়াত সেই হুকুম দেয়, যা মানলে এর কিছুই ঘটত না: যে বিষয়ে জ্ঞান নেই, তার পিছনে ছুটবে না। তারপর নাম ধরে বলে দেয়, কী নিয়ে জিজ্ঞেস করা হবে: কান, চোখ আর অন্তর। ৩৮:৮৮ আয়াত আমাদের আয়াতের মতোই এখনো-না-আসার সুরে বৃত্তটা পূর্ণ করে: কিছুকাল পরেই এর খবর তোমরা অবশ্যই জানতে পারবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verdict Before the Reading",
          "bn": "পড়ার আগেই রায়"
        },
        "p": [
          {
            "en": "Begin with what the last clause is not. The verse tells the reader to look at how the end of the wrongdoers was, and at-Tabari fills that in from the Qur'an's own history: some destroyed by the earthquake, some swallowed by the earth, some drowned. It describes the peoples the text describes and hands nobody a verdict about any living person or community. The looking it commands is backward, at what happened, and its use is on oneself.",
            "bn": "আগে বলে রাখা ভালো, শেষ বাক্যটা কী নয়। আয়াত পাঠককে বলছে দেখে নাও জালিমদের পরিণতি কী হয়েছিল, আর তাবারী সেটা কুরআনের নিজের ইতিহাস থেকে ভরে দেন: কাউকে ভূমিকম্পে ধ্বংস করা হয়েছে, কাউকে মাটি গিলে নিয়েছে, কাউকে ডুবিয়ে দেওয়া হয়েছে। আয়াত যে জাতিগুলোর কথা বলছে, সেগুলোরই কথা বলছে; আজ বেঁচে থাকা কোনো মানুষ বা কোনো সমাজ নিয়ে কারো হাতে রায় তুলে দিচ্ছে না। যে দেখার হুকুম দেওয়া হচ্ছে সেটা পিছনের দিকে, যা ঘটে গেছে তার দিকে। আর কাজে লাগানোর জায়গা নিজের উপর।"
          },
          {
            "en": "The habit the verse catches is cheap and everywhere. A ruling is dismissed on the strength of a screenshot; a hadith is rejected because of how someone summarised it; a verse is decided against without being read in its passage. As-Sa'di's rule cuts both ways, so a claim swallowed in a second is the same fault as a verse refused in a second. Al-Qurtubi's remedy is the nearest to hand: they should have asked. Take the questions you have been leaving unasked to somebody qualified, and read a hard verse with its neighbours and a tafsir before holding a view.",
            "bn": "আয়াত যে অভ্যাসটা ধরে ফেলে, তা সস্তা আর সবখানে ছড়ানো। একটা স্ক্রিনশট দেখেই মাসআলা উড়িয়ে দেওয়া হয়; কে কীভাবে সারাংশ করেছে তা শুনেই হাদিস নাকচ হয়ে যায়; আশপাশের আয়াতের সঙ্গে না পড়েই একটা আয়াতের বিরুদ্ধে রায় দেওয়া হয়। সা'দীর নিয়ম দুই দিকেই খাটে: এক নিমেষে কোনো দাবি গিলে ফেলা আর এক নিমেষে আয়াত নাকচ করা, দোষ একই। কুরতুবীর বলা উপায়টা হাতের কাছেই: তাদের জিজ্ঞেস করা উচিত ছিল। যে প্রশ্নগুলো জিজ্ঞেস না করে ফেলে রেখেছেন, সেগুলো যোগ্য কারো কাছে নিয়ে যান। আর যে আয়াত কঠিন লাগে, মত তৈরি করার আগে সেটা পাশের আয়াত আর তাফসীর মিলিয়ে পড়ুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Not to Rush",
          "bn": "তাড়াহুড়ো না করার দুআ"
        },
        "p": [
          {
            "en": "The commentaries attach no narrated supplication to this verse, so what follows is composed here from its own words and offered as that, not as a Sunnah text. O Allah, do not let me rule on what I have not encompassed in knowledge. Keep me from denying what I have not troubled to learn, and from accepting what I have not troubled to check. Let the meaning of Your Book reach me before its outcome does.",
            "bn": "তাফসীরগুলো এই আয়াতের সঙ্গে বর্ণিত কোনো দুআ জুড়ে দেয় না। তাই নিচের কথাগুলো আয়াতের নিজের শব্দ থেকে এখানেই সাজানো, আর সেভাবেই পেশ করা হচ্ছে, সুন্নাহর কোনো পাঠ হিসেবে নয়। হে আল্লাহ, যা আমি জ্ঞানের ঘেরে আনতে পারিনি, তার উপর আমাকে রায় দিতে দেবেন না। যা শেখার কষ্ট আমি করিনি, তা অস্বীকার করা থেকে আমাকে বাঁচান; আর যা যাচাই করার কষ্ট আমি করিনি, তা মেনে নেওয়া থেকেও বাঁচান। আপনার কিতাবের পরিণাম আমার কাছে পৌঁছানোর আগেই তার অর্থ যেন আমার কাছে পৌঁছায়।"
          },
          {
            "en": "A shorter form can be taken straight from 17:36, whose command is the positive of this verse's charge, and asked as help to keep it: my Lord, hold me back from pursuing what I have no knowledge of, and guard my hearing, my sight and my heart, since I will be questioned about all of them. That is the verse turned into a request in its own vocabulary, marked as that rather than reported as a narration.",
            "bn": "আরো ছোট একটা রূপ সরাসরি ১৭:৩৬ আয়াত থেকে নেওয়া যায়। ওই আয়াতের হুকুম এই আয়াতের অভিযোগেরই উল্টো পিঠ, তাই সেটা মেনে চলার জন্য সাহায্য চাওয়া যায়: হে আমার রব, যে বিষয়ে আমার জ্ঞান নেই, তার পিছনে ছোটা থেকে আমাকে আটকে রাখুন, আর আমার কান, চোখ আর অন্তর হেফাজত করুন; কারণ এর প্রতিটির ব্যাপারে আমাকে জিজ্ঞেস করা হবে। এভাবে আয়াতকেই তার নিজের শব্দে দুআ বানানো হল, আর সেটা জানিয়েই দেওয়া হচ্ছে; এটা বর্ণিত কোনো হাদিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What I Reject",
          "bn": "যা নাকচ করি, তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Four questions, and they are about you rather than about Makkah. What do I hold a firm opinion about in my religion, on the basis of nothing I could name? When did I last say I do not know, and did it cost me anything? Which question have I not asked because the answer would put me under an obligation? And what have I already understood clearly, and am still treating as open?",
            "bn": "চারটি প্রশ্ন, আর সেগুলো মক্কা নিয়ে নয়, আপনাকে নিয়ে। দীনের কোন বিষয়ে আমার শক্ত মত আছে, অথচ কেউ জিজ্ঞেস করলে তার পক্ষে একটা কারণও আমি বলতে পারব না? শেষ কবে আমি বলেছি আমি জানি না, আর সেটা বলতে আমার কিছু খরচ হয়েছিল কি? কোন প্রশ্নটা আমি জিজ্ঞেস করিনি, কারণ জবাবটা আমার কাঁধে দায়িত্ব চাপাত? আর কোন কথাটা আমি স্পষ্ট বুঝে গেছি, তবু আজও খোলা প্রশ্ন বানিয়ে রেখেছি?"
          },
          {
            "en": "As-Sa'di ends his comment with a warning aimed at the living: let these beware of continuing in their denial, lest what befell the nations that denied befall them. He does not say it happened to them; he says beware. That is the shape of the verse's last clause too. The looking is at a closed history, and its point is that your own account is still open, and that the not-yet in this verse is time you were given.",
            "bn": "সা'দী তাঁর আলোচনা শেষ করেন জীবিতদের উদ্দেশে সতর্কবাণী দিয়ে: এরা যেন সাবধান হয়, অস্বীকারে লেগে থাকলে অস্বীকারকারী জাতিগুলোর উপর যা নেমেছিল, তা এদের উপরেও নামতে পারে। তিনি বলছেন না যে তা ঘটে গেছে; বলছেন, সাবধান হও। আয়াতের শেষ বাক্যটার ধরনও ঠিক এমন। যে ইতিহাসের দিকে তাকাতে বলা হচ্ছে, তা শেষ হয়ে গেছে; আর তাকানোর উদ্দেশ্য হল, আপনার নিজের হিসাব এখনো খোলা। এই আয়াতের এখনো-না-আসা সময়টুকু আসলে আপনাকেই দেওয়া সময়।"
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
          "bn": "যে প্রশ্নের জবাব এই আয়াত"
        },
        "p": [
          {
            "en": "The verse arrives as an answer to a difficulty the two verses before it create. In 10:42 the Prophet ﷺ is told that among them are those who listen to you, but can you make the deaf hear, even though they will not use reason? 10:43 repeats the shape for sight: among them are those who look at you, but can you guide the blind, even though they will not see? A listener might fairly ask how the deaf and the blind are to be held answerable.",
            "bn": "আগের দুই আয়াত একটা খটকা তৈরি করে, আর এই আয়াত আসে তারই জবাব হয়ে। ১০:৪২ আয়াতে নবী ﷺ-কে বলা হয়, তাদের মধ্যে কেউ কেউ তোমার কথা কান পেতে শোনে; কিন্তু তুমি কি বধিরকে শোনাতে পারবে, তারা বুদ্ধি না খাটালেও? ১০:৪৩ আয়াত একই ছাঁচে চোখের কথা বলে: তাদের মধ্যে কেউ কেউ তোমার দিকে তাকায়; কিন্তু তুমি কি অন্ধকে পথ দেখাতে পারবে, তারা না দেখলেও? শ্রোতা তখন ন্যায্যভাবেই জিজ্ঞেস করতে পারেন, বধির আর অন্ধকে দায়ী করা হবে কীভাবে?"
          },
          {
            "en": "10:44 answers without softening anything. Allah does not wrong the people at all; rather, the people wrong themselves. The deafness described is not an affliction that arrived from outside, and the two earlier verses had each attached a clause saying so: they will not use reason, they will not see. Faculties in working order are being declined. 10:45 then closes the passage on the Day they are gathered, feeling they had stayed no longer than an hour.",
            "bn": "১০:৪৪ আয়াত কিছুই নরম না করে জবাব দেয়: আল্লাহ মানুষের প্রতি একটুও জুলুম করেন না; বরং মানুষ নিজেরাই নিজেদের প্রতি জুলুম করে। এখানে যে বধিরতার কথা, তা বাইরে থেকে আসা কোনো বিপদ নয়। আগের দুই আয়াতেই সে কথা বলে দেওয়া একটি করে অংশ জোড়া ছিল: তারা বুদ্ধি খাটাবে না, তারা দেখবে না। কান-চোখ ঠিকঠাক কাজ করছে, তবু তারা সেগুলো কাজে লাগাতে রাজি নয়। এরপর ১০:৪৫ আয়াত এই অংশটা শেষ করে সেই দিনের কথা বলে, যেদিন তাদের একত্র করা হবে, আর তাদের মনে হবে, তারা এক ঘণ্টার বেশি থাকেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not by the Smallest Amount",
          "bn": "এক বিন্দুও নয়"
        },
        "p": [
          {
            "en": "Shay'an is the word that closes the first half, and it is doing exact work. An indefinite noun placed inside a negation produces total generality in Arabic: not a thing, not in the least, not by any amount however small. So the clause is not the broad assurance that Allah's justice is reliable. It rules out the smallest possible instance. 4:40 states the same guarantee with a different measure, that He does not wrong by the weight of an atom.",
            "bn": "প্রথম অর্ধেক শেষ হয় 'শাইআন' শব্দে, আর শব্দটা এখানে মাপা কাজ করছে। আরবিতে না-বাচক বাক্যের ভেতরে অনির্দিষ্ট বিশেষ্য বসলে অর্থ পুরোপুরি ব্যাপক হয়ে যায়: কিছুই না, একটুও না, যত সামান্যই হোক, তাও না। তাই বাক্যটা কেবল এই সাধারণ আশ্বাস নয় যে আল্লাহর ইনসাফে ভরসা করা যায়। ছোট থেকে ছোট জুলুমের সম্ভাবনাটুকুও এটা নাকচ করে দেয়। ৪:৪০ আয়াত একই নিশ্চয়তা দেয় অন্য মাপে: তিনি অণু পরিমাণও জুলুম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn in the Middle",
          "bn": "মাঝখানের মোড়"
        },
        "p": [
          {
            "en": "Then wa lakinna, which is not simply and. It is the particle of correction, withdrawing the impression the first clause might have left and redirecting it. The sentence also repeats an-nas, the people, on purpose: they are the object of the verb in the first half and its subject in the second. And the closing clause puts anfusahum, themselves, in front of the verb, a fronting Arabic uses for restriction. It is themselves, specifically, that they are wronging.",
            "bn": "এরপর আসে 'ওয়া লাকিন্না', যা নিছক 'আর' নয়। এটা সংশোধনের অব্যয়: প্রথম অংশ শুনে মনে যে ধারণা তৈরি হতে পারত, সেটা ফিরিয়ে নিয়ে কথার মোড় ঘুরিয়ে দেয়। বাক্যটি 'আন-নাস', মানে 'মানুষ', শব্দটাও ইচ্ছা করেই দুবার আনে: প্রথম অর্ধেকে মানুষ ক্রিয়ার কর্ম, দ্বিতীয় অর্ধেকে তারাই কর্তা। আর শেষ অংশে 'আনফুসাহুম', মানে 'নিজেদের', শব্দটা ক্রিয়ার আগে বসানো; আরবিতে কথাকে নির্দিষ্ট করতে এভাবে আগে আনা হয়। অর্থাৎ তারা জুলুম করছে ঠিক নিজেদেরই প্রতি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Zulm Is",
          "bn": "জুলুম কী"
        },
        "p": [
          {
            "en": "The lexicographers define zulm as putting a thing somewhere other than its own place. That is why one word covers injustice, oppression and idolatry alike: each is something set down where it does not belong, a right in the wrong hands, a worship given to the wrong object, a life spent on the wrong claim. Muslim relates the hadith qudsi from Abu Dharr (RA) in which Allah says: O My servants, I have forbidden zulm upon Myself and have made it forbidden among you, so do not wrong one another.",
            "bn": "অভিধানবিদরা জুলুমের সংজ্ঞা দেন এভাবে: কোনো জিনিসকে তার নিজের জায়গা ছেড়ে অন্য জায়গায় রাখা। এ কারণেই এক শব্দেই অবিচার, অত্যাচার আর শিরক সবই ধরা পড়ে। প্রতিটিতেই কোনো কিছু রাখা হয়েছে ভুল জায়গায়: হক চলে গেছে ভুল হাতে, ইবাদত গেছে ভুল সত্তার কাছে, জীবন খরচ হয়েছে ভুল দাবির পিছনে। মুসলিম আবু যর (রাঃ) থেকে একটি হাদিসে কুদসী বর্ণনা করেছেন, যেখানে আল্লাহ বলেন: হে আমার বান্দারা, আমি নিজের উপর জুলুম হারাম করেছি, আর তোমাদের মধ্যেও তা হারাম করেছি; তাই তোমরা একে অপরের উপর জুলুম কোরো না।"
          },
          {
            "en": "The hadith and the verse make two matching statements in the same order. First, that the possibility of injustice from Allah is closed; not merely restrained, but forbidden by Him upon Himself. Second, that the injustice actually in circulation is ours: the verse says people wrong themselves, and the hadith adds that they wrong one another. Nothing in either text denies that people wrong each other. What is denied is that any of it originates above.",
            "bn": "হাদিস আর আয়াত একই ক্রমে দুটি মিলে যাওয়া কথা বলে। প্রথম কথা: আল্লাহর পক্ষ থেকে অবিচারের সম্ভাবনাই বন্ধ। তিনি কেবল নিজেকে সংযত রাখেন তা নয়, নিজেই নিজের উপর তা হারাম করেছেন। দ্বিতীয় কথা: দুনিয়ায় আসলে যে অবিচার চলছে, তা আমাদের। আয়াত বলে, মানুষ নিজেদের প্রতি জুলুম করে; হাদিস যোগ করে, তারা একে অপরের প্রতিও জুলুম করে। মানুষ যে একে অপরের উপর অন্যায় করে, দুটোর কোনোটিই তা অস্বীকার করে না। দুটোই অস্বীকার করে কেবল এটুকু: এর কোনোটার উৎসই উপর থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refrain Across the Book",
          "bn": "কিতাবজুড়ে এক ধুয়া"
        },
        "p": [
          {
            "en": "The second half of this verse is close to a refrain. 2:57 says of the Children of Israel, given shade and manna and quails, that they did not wrong Us but were wronging themselves. 9:70 says it of the destroyed nations after listing them by name, 16:33 of people waiting for the angels to come, 29:40 after cataloguing the storm and the blast and the swallowing earth and the drowning, and 30:9 of a people stronger than the Makkans who had built more than they had.",
            "bn": "এই আয়াতের দ্বিতীয় অর্ধেকটা গানের ধুয়ার মতো বারবার ফিরে আসে। ২:৫৭ আয়াতে বনী ইসরাঈলের কথা: তাদের ছায়া দেওয়া হয়েছিল, মান্না আর সালওয়া দেওয়া হয়েছিল; তারা আমার প্রতি জুলুম করেনি, বরং নিজেদের প্রতিই জুলুম করছিল। ৯:৭০ আয়াত ধ্বংস হওয়া জাতিগুলোর নাম একে একে বলার পর একই কথা বলে। ১৬:৩৩ বলে তাদের সম্পর্কে, যারা ফেরেশতাদের আসার অপেক্ষায় আছে। ২৯:৪০ বলে ঝড়, বিকট আওয়াজ, মাটিতে ধসিয়ে দেওয়া আর ডুবিয়ে মারার তালিকা দেওয়ার পর। আর ৩০:৯ বলে এমন এক জাতির কথা, যারা মক্কাবাসীদের চেয়ে শক্তিশালী ছিল, আর তাদের চেয়ে বেশি আবাদ করেছিল।"
          },
          {
            "en": "Set together, those verses show what the clause is for. It is attached to verdicts, to the moment a community's account is closed and the reader is tempted to ask whether the punishment was fair. The Quran does not argue the case afresh each time. It repeats one sentence, and the sentence assigns the cause to the party that had the faculties, the messengers and the time.",
            "bn": "আয়াতগুলো পাশাপাশি রাখলে বোঝা যায়, এই কথাটা কী কাজে আসে। কথাটা জোড়া থাকে রায়ের সঙ্গে, ঠিক সেই মুহূর্তে যখন কোনো জাতির হিসাব চুকে যায়, আর পাঠকের মনে প্রশ্ন জাগে, শাস্তিটা কি ন্যায্য ছিল? কুরআন প্রতিবার নতুন করে যুক্তি সাজায় না। একটা বাক্যই বারবার বলে, আর সেই বাক্য দায়টা চাপায় সেই পক্ষের ঘাড়ে, যাদের কান-চোখ-বুদ্ধি ছিল, যাদের কাছে রাসূল এসেছিলেন, যাদের হাতে সময়ও ছিল।"
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
            "bn": "কুরআন এই কথাটা তার শ্রেষ্ঠ মানুষদের মুখেও দিয়েছে। ২৮:১৬ আয়াতে মূসা (আঃ)-এর এক আঘাতে একজন লোক মারা যায়, তারপর তিনি বলেন: হে আমার রব, আমি নিজের প্রতি জুলুম করেছি, আপনি আমাকে মাফ করে দিন। আর একই আয়াতেই আল্লাহ তাঁকে মাফ করে দেন। এই কথায় মিসরীয় লোকটি, ইসরাঈলী লোকটি, ভিড় বা সময়, কারো ঘাড়েই দোষ চাপানো হয়নি। নিজের প্রতি জুলুমকে ঠিক নামে ডাকা তাই নিজেকে শাস্তি দেওয়া নয়; এটাই তওবার প্রথম ধাপ।"
          },
          {
            "en": "Read as a discipline, this verse redirects an instinct. When something goes badly the mind reaches for a cause outside itself: the timing, the people, the decree. 10:44 does not deny that others do wrong, and it is not a rule for assigning blame to victims. It removes exactly one candidate from the list, permanently and entirely, and what is left is a question a believer can act on, because the only conduct in the account that he controls is his own.",
            "bn": "নিজেকে গড়ার শিক্ষা হিসেবে পড়লে আয়াতটা মনের এক সহজাত টানকে অন্য দিকে ঘুরিয়ে দেয়। কিছু খারাপ হলে মন কারণ খোঁজে নিজের বাইরে: সময়, মানুষজন, তাকদীর। ১০:৪৪ আয়াত এটা অস্বীকার করে না যে অন্যরা অন্যায় করে; আবার মজলুমের ঘাড়ে দোষ চাপানোর নিয়মও এটা নয়। আয়াতটা তালিকা থেকে ঠিক একটা নাম চিরতরে, পুরোপুরি কেটে দেয়। তখন যা বাকি থাকে, তা এমন এক প্রশ্ন, যা নিয়ে মুমিন কাজ করতে পারে; কারণ এই হিসাবে তার নিজের হাতে আছে কেবল তার নিজের আচরণ।"
          }
        ]
      }
    ]
  },
  "10:49": {
    "sections": [
      {
        "h": {
          "en": "Where the Demand Lands",
          "bn": "দাবিটা কোথায় এসে পড়ে"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this verse answers inside a running argument. 10:45 pictures the Day they are gathered, feeling they had stayed no longer than an hour of the day. 10:46 tells the Prophet ﷺ that whether he is shown part of what they are promised or taken in death first, their return is to Allah. 10:47 lays the rule down: every nation has a messenger, and when he comes it is judged between them in justice.",
            "bn": "সূরা ইউনুস মক্কী, আর এই আয়াত এসেছে চলমান এক তর্কের মাঝখানে, জবাব হয়ে। ১০:৪৫ সেই দিনের ছবি আঁকে, যেদিন তাদের জড়ো করা হবে আর মনে হবে, দিনের এক ঘণ্টার বেশি তারা থাকেইনি। ১০:৪৬ নবী ﷺ-কে বলছে, তাদের যে ওয়াদা দেওয়া হচ্ছে তার কিছুটা তাঁকে দেখানো হোক কিংবা তার আগেই তাঁকে তুলে নেওয়া হোক, ফেরা তাদের আল্লাহর কাছেই। ১০:৪৭ নিয়মটা বসিয়ে দেয়: প্রত্যেক জাতির জন্য রাসূল আছে, আর রাসূল এলে ইনসাফের সঙ্গে তাদের মধ্যে ফয়সালা হয়ে যায়।"
          },
          {
            "en": "Then 10:48 puts the taunt into their mouths: when is this promise, if you should be truthful? At-Tabari says these are the mushriks of the Prophet's own people, and that what they mean is the standing of the Hour. Al-Qurtubi names them the disbelievers of Makkah and traces the question to excessive denial and to wanting the punishment brought forward. No occasion of revelation is established for 10:49; the tafsir page consulted carries nothing from al-Wahidi, so the placement is what there is to go on.",
            "bn": "এরপর ১০:৪৮ তাদের মুখে খোঁচাটা তুলে দেয়: তোমরা সত্যবাদী হলে বলো, এই ওয়াদা কখন? তাবারী বলছেন, এরা নবী ﷺ-এর নিজের কওমেরই মুশরিক, আর তাদের উদ্দেশ্য কিয়ামত কায়েম হওয়া। কুরতুবী তাদের পরিচয় দেন মক্কার কাফির বলে, আর প্রশ্নটার উৎস খোঁজেন চূড়ান্ত অস্বীকারে এবং আযাব আগে এনে ফেলার তাড়ায়। ১০:৪৯-এর জন্য শানে নুযূল হিসেবে প্রতিষ্ঠিত কিছু নেই; যে তাফসীরের পাতা আনা হয়েছে তাতে ওয়াহিদীর কোনো বর্ণনা নেই। কাজেই ভরসা আয়াতের অবস্থান।"
          }
        ]
      },
      {
        "h": {
          "en": "Harm Before Benefit",
          "bn": "ক্ষতি আগে, লাভ পরে"
        },
        "p": [
          {
            "en": "The verse is 22 Arabic words once the three pause marks printed in the line are set aside, and it divides exactly down the middle. The first half is 11 words and ends on illa ma sha'Allah, except what Allah wills. The second half is 11 words and states the law of the term. The verb is la amliku, from the root m-l-k, which is ownership and the right of disposal rather than bare ability.",
            "bn": "লাইনে ছাপা তিনটি বিরামচিহ্ন বাদ দিলে আয়াতটা ২২টি আরবি শব্দের, আর ঠিক মাঝখানে দুই ভাগ হয়ে যায়। প্রথম ভাগ ১১ শব্দের, শেষ হয় ইল্লা মা শা-আল্লাহ দিয়ে, অর্থাৎ আল্লাহ যা চান তা ছাড়া। দ্বিতীয় ভাগও ১১ শব্দের, সেখানে নির্ধারিত মেয়াদের বিধানটা বলা। ক্রিয়াটা লা আমলিকু, মূল মীম-লাম-কাফ থেকে, যার ভাব মালিকানা ও হাতে রাখার অধিকার, নিছক সামর্থ্য নয়।"
          },
          {
            "en": "Then li-nafsi, for myself. The disclaimer is aimed at the nearest object first, and every commentator consulted builds from there. Al-Qurtubi reads the clause as that is not mine nor anyone else's, then presses it: how could I have power over the thing you are hastening? Al-Jalalayn puts the same step as a question. At-Tabari is sharper: if he cannot do even that except by His leave, he is more incapable still of knowing when the Hour will stand.",
            "bn": "এরপর লিনাফসী, অর্থাৎ নিজের জন্য। অস্বীকৃতিটা আগে তাক করা সবচেয়ে কাছের জিনিসটার দিকেই, আর যত মুফাসসিরের লেখা আনা হয়েছে সবাই যুক্তি তোলেন এখান থেকেই। কুরতুবী বাক্যটা পড়েন এভাবে: এ ক্ষমতা আমারও নয়, কারোরও নয়। তারপর চাপ দেন, তাহলে তোমরা যেটা তাড়াতাড়ি চাইছ তার মালিক আমি হই কী করে? জালালাইন একই ধাপটা প্রশ্ন করেই সেরে দেয়। তাবারী আরও ধারালো: তাঁর অনুমতি ছাড়া এটুকুই যখন পারি না, কিয়ামত কখন দাঁড়াবে তা জানার বেলায় আমি আরও অক্ষম।"
          },
          {
            "en": "The order of the two nouns matters. Here it runs darran wa la naf'an, harm and then benefit, because harm was what they were demanding be hurried. In 7:188 the same disclaimer runs naf'an wa la darran, benefit then harm, and that verse goes on to wealth and the unseen. Al-Baghawi glosses the pair as repelling a harm and drawing a benefit, which is the whole of what anybody wants from any power he turns to.",
            "bn": "দুই শব্দের ক্রমটা খেয়াল করার মতো। এখানে আছে দাররান ওয়ালা নাফআন, আগে ক্ষতি তারপর লাভ, কারণ তারা তাড়া দিচ্ছিল ক্ষতিটাকেই। ৭:১৮৮-এ এই অস্বীকৃতিই এসেছে উল্টো ক্রমে, নাফআন ওয়ালা দাররান, আর সেখানে আয়াত এগোয় সম্পদ ও গায়েবের দিকে। বাগাবী জোড়াটার ব্যাখ্যা করেন এভাবে: ক্ষতি ঠেকানো আর লাভ টেনে আনা। মানুষ যে শক্তির কাছেই হাত পাতুক, চাওয়ার পুরোটা এই দুইয়ের মধ্যেই ধরা পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Messenger, Then Term",
          "bn": "আগে রাসূল, পরে মেয়াদ"
        },
        "p": [
          {
            "en": "The second half opens on three words, li-kulli ummatin ajal. Two verses earlier the surah opened a sentence on three words built the same way, wa li-kulli ummatin rasul. Every nation has a messenger; every nation has a term. The first is what it is given, the second is how long it has to answer. Al-Baghawi glosses ajal as a span struck out in advance, and Tanwir al-Miqbas as a respite with a determined limit.",
            "bn": "দ্বিতীয় ভাগ শুরু হয় তিনটি শব্দে, লিকুল্লি উম্মাতিন আজাল। দুই আয়াত আগে সূরাটা ঠিক একই গড়নের তিনটি শব্দে বাক্য শুরু করেছিল, ওয়া লিকুল্লি উম্মাতিন রাসূল। প্রত্যেক জাতির রাসূল আছে, প্রত্যেক জাতির মেয়াদ আছে। প্রথমটা তাকে যা দেওয়া হলো, দ্বিতীয়টা জবাব দেওয়ার জন্য তার হাতে কতটুকু সময়। বাগাবী আজালের ব্যাখ্যা করেন আগে থেকে কেটে রাখা মেয়াদ বলে, আর তানভীরুল মিকবাস পড়ে সীমা-বাঁধা অবকাশ হিসেবে।"
          },
          {
            "en": "The two verbs that close the verse, yasta'khiruna and yastaqdimuna, both take the istaf'ala pattern, built on the roots of putting back and putting forward. That pattern usually carries seeking, which suits men asking for the thing to be brought forward. Al-Baghawi glosses them plainly as they do not come later and they do not come earlier. Between them stands sa'atan, an hour, the word 10:45 had just used for how long their whole worldly life will feel.",
            "bn": "আয়াতের শেষ দুই ক্রিয়া ইয়াসতা'খিরূন আর ইয়াসতাকদিমূন, দুটোই ইসতিফআল বাবের, পেছানো আর এগোনোর মূল থেকে গড়া। এই বাবে সাধারণত চাওয়ার ভাব থাকে, আর যারা জিনিসটাকে এগিয়ে আনতে চাইছিল তাদের বেলায় সেটা খাপ খায়। বাগাবী সোজা করে বলেন, তারা পরেও আসে না, আগেও আসে না। মাঝখানে বসে আছে সাআতান, এক ঘণ্টা, ঠিক যে শব্দটা একটু আগেই ১০:৪৫ ব্যবহার করেছে গোটা দুনিয়ার জীবন তাদের কাছে কতটুকু মনে হবে তা বোঝাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Term Is",
          "bn": "মেয়াদ বলতে কী"
        },
        "p": [
          {
            "en": "What is the ajal? The commentators consulted do not all mean the same thing by it, and the difference is worth keeping as a difference. At-Tabari reads it as a fixed appointment for the expiry of their period and the running out of their lifespans. Al-Baghawi says much the same. Ibn Kathir narrows it to a generation, a measured span of life for every qarn, and sets 63:11 beside it: Allah will never delay a soul whose term has come.",
            "bn": "আজাল বলতে কী? যাঁদের তাফসীর আনা হয়েছে সবাই এক জিনিস বোঝাচ্ছেন না, আর পার্থক্যটা পার্থক্য হিসেবেই রাখা দরকার। তাবারী পড়েন, এ হলো তাদের কালপর্ব ফুরানোর আর আয়ু শেষ হওয়ার বাঁধা সময়। বাগাবী প্রায় একই কথা বলেন। ইবনে কাসীর আরও সরু করে ধরেন এক প্রজন্মকে, প্রত্যেক কারনের জন্য মেপে রাখা আয়ু, আর পাশে রাখেন ৬৩:১১: কোনো প্রাণের নির্ধারিত সময় এসে গেলে আল্লাহ তা আর পিছিয়ে দেন না।"
          },
          {
            "en": "Al-Qurtubi takes the word the other way. For him li-kulli ummatin ajal means that for their destruction and their punishment there is a time known in Allah's knowledge, so the term is the date of the reckoning rather than the length of the living. Tanwir al-Miqbas follows the same line. As-Sa'di holds both ends together: the punishment descends at the term He appointed, the moment He decreed, in agreement with His wisdom, and not before.",
            "bn": "কুরতুবী শব্দটা অন্যভাবে নেন। তাঁর কাছে লিকুল্লি উম্মাতিন আজাল মানে, তাদের ধ্বংস ও আযাবের জন্য আল্লাহর ইলমে জানা একটা সময় ঠিক করা আছে। তাহলে মেয়াদ মানে হিসাব চুকানোর তারিখ, বেঁচে থাকার দৈর্ঘ্য নয়। তানভীরুল মিকবাস এই পথেই চলে। সা'দী দুই মাথা একসঙ্গে ধরে রাখেন: আযাব নামে সেই নির্ধারিত সময়ে, যে মুহূর্তটা তিনি ঠিক করে রেখেছেন, তাঁর হিকমতের সঙ্গে মিলিয়ে, তার আগে নয়।"
          },
          {
            "en": "Maududi adds what the term is for. Allah is not hasty with reward or punishment; when He sends a messenger He gives each person and each community time to weigh the message and mend, and for a community that may run into centuries. Read that way, the delay the Makkans mocked was not the absence of the promise but the mercy inside it. As-Sa'di's warning comes in the same breath: let the deniers beware of hastening it.",
            "bn": "মওদূদী যোগ করেন, মেয়াদটা কী কাজে। আল্লাহ পুরস্কার বা শাস্তিতে তাড়াহুড়ো করেন না। রাসূল পাঠানোর পর তিনি প্রত্যেক মানুষ আর প্রত্যেক জাতিকে যথেষ্ট সময় দেন, যাতে বার্তাটা ভেবে দেখা যায় আর চলার পথ শোধরানো যায়; কোনো জাতির বেলায় সে সময় শতাব্দীও গড়াতে পারে। এভাবে পড়লে মক্কাবাসীরা যে দেরি নিয়ে ঠাট্টা করছিল সেটা ওয়াদার অনুপস্থিতি নয়, ওয়াদার ভেতরের রহমত। সা'দীর সতর্কবাণী আসে একই নিঃশ্বাসে: অস্বীকারকারীরা যেন আযাব তাড়াতাড়ি চাওয়া থেকে বাঁচে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warning to His Kin",
          "bn": "নিজের আত্মীয়দের দেওয়া হুঁশিয়ারি"
        },
        "p": [
          {
            "en": "None of the eight commentaries consulted for 10:49 attaches a prophetic narration to the verse itself. At-Tabari, al-Qurtubi, al-Baghawi, as-Sa'di, Ibn Kathir, al-Muyassar, al-Jalalayn and Tanwir al-Miqbas all argue it from the wording and from other verses. Ibn Kathir's supports here are Qur'anic throughout: 42:18, that those who do not believe in the Hour seek to hasten it while the believers fear it, and 63:11 on the soul whose term has arrived.",
            "bn": "১০:৪৯-এর জন্য আনা আটটি তাফসীরের একটিও আয়াতটার সঙ্গে কোনো নববী হাদিস জুড়ে দেয়নি। তাবারী, কুরতুবী, বাগাবী, সা'দী, ইবনে কাসীর, মুয়াসসার, জালালাইন আর তানভীরুল মিকবাস সবাই কথা তোলেন শব্দ থেকে আর অন্য আয়াত থেকে। ইবনে কাসীর এখানে যা দলিল আনেন তার পুরোটাই কুরআন: ৪২:১৮, যারা কিয়ামতে বিশ্বাস করে না তারাই তা তাড়াতাড়ি চায়, আর মুমিনরা তাকে ভয় করে; আর ৬৩:১১, যে প্রাণের নির্ধারিত সময় এসে গেছে তার প্রসঙ্গে।"
          },
          {
            "en": "What follows is brought only as the same disclaimer in his own mouth; the collection places it under 26:214. Sahih al-Bukhari 2753, from Abu Hurayra (RA): when the verse Warn your nearest kinsmen was revealed, Allah's Messenger ﷺ got up and said, O people of Quraish, buy yourselves as I cannot save you from Allah's Punishment; O Bani Abd Manaf, I cannot save you from Allah's Punishment; O Safiya, the Aunt of Allah's Messenger, I cannot save you from Allah's Punishment; O Fatima bint Muhammad, ask me anything from my wealth, but I cannot save you from Allah's Punishment.",
            "bn": "এরপরের বর্ণনাটা আনা হলো শুধু এই কারণে যে, এতে একই অস্বীকৃতি শোনা যায় তাঁর নিজের মুখে; সংকলনে এটি রাখা আছে ২৬:২১৪-এর অধীনে। সহীহ বুখারী ২৭৫৩, আবূ হুরাইরা (রাঃ) থেকে: যখন নাজিল হলো তোমার নিকটাত্মীয়দের সতর্ক করো, তখন আল্লাহর রাসূল ﷺ দাঁড়িয়ে বললেন, হে কুরাইশের লোকেরা, নিজেদের কিনে নাও, আল্লাহর শাস্তি থেকে আমি তোমাদের বাঁচাতে পারব না; হে বনূ আবদে মানাফ, আল্লাহর শাস্তি থেকে আমি তোমাদের বাঁচাতে পারব না; হে সাফিয়্যা, আল্লাহর রাসূলের ফুফু, আল্লাহর শাস্তি থেকে আমি তোমাকে বাঁচাতে পারব না; হে ফাতিমা বিনতে মুহাম্মাদ, আমার সম্পদ থেকে যা চাও চেয়ে নাও, কিন্তু আল্লাহর শাস্তি থেকে আমি তোমাকে বাঁচাতে পারব না।"
          },
          {
            "en": "The verse denies him power over his own harm and benefit; the narration shows him denying it out loud over his clan, his aunt, his daughter. As-Sa'di draws the balancing half at 7:188. Whoever comes to him ﷺ to obtain a benefit or push away a harm has misread him, since nothing of that is in his hand; and yet his benefit to people surpassed that of fathers and mothers, because he urged them towards every good.",
            "bn": "আয়াত তাঁর নিজের ক্ষতি ও লাভের উপর মালিকানা অস্বীকার করছে, আর বর্ণনাটা দেখাচ্ছে তিনি সেই অস্বীকার প্রকাশ্যে করছেন নিজের গোত্র, নিজের ফুফু, নিজের মেয়েকে নিয়ে। সা'দী ভারসাম্যের অন্য দিকটা টানেন ৭:১৮৮-এ। কেউ লাভ পাওয়ার বা ক্ষতি সরানোর জন্য তাঁর ﷺ কাছে হাত পাতলে সে তাঁকে ভুল বুঝেছে, কারণ এসবের কিছুই তাঁর হাতে নেই। অথচ মানুষের জন্য তাঁর উপকার বাপ-মায়ের উপকারকেও ছাড়িয়ে গেছে, কারণ তিনি প্রত্যেক ভালোর দিকে ঠেলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Clause Elsewhere",
          "bn": "একই বাক্য আরও যেখানে"
        },
        "p": [
          {
            "en": "The second half of this verse is not unique to it. 7:34 carries the same sentence with a single difference of placement: there the connecting fa stands in front of idha, here in front of la. 16:61 closes on the identical clause, after saying that if Allah seized people for their wrongdoing He would leave no creature on the earth, but defers them to a named term. Together the three make the term a standing law.",
            "bn": "এই আয়াতের দ্বিতীয় ভাগটা কেবল এখানেই নেই। ৭:৩৪-এ হুবহু একই বাক্য, বসার জায়গায় তফাত সামান্য: সেখানে সংযোজক ফা বসেছে ইযা-র আগে, এখানে বসেছে লা-র আগে। ১৬:৬১ শেষ হয় ঠিক এই বাক্যেই, তার আগে বলা হয়েছে আল্লাহ যদি মানুষকে তাদের যুলমের জন্য ধরতেন তবে যমীনে কোনো প্রাণীই রাখতেন না, কিন্তু তিনি নির্ধারিত মেয়াদ পর্যন্ত ঢিল দেন। তিনটি আয়াত একসঙ্গে পড়লে মেয়াদ দাঁড়ায় চালু এক বিধান হিসেবে।"
          },
          {
            "en": "15:5 and 23:43 say it from the other side, in the same words in both places: no nation outruns its term, nor do they lag behind it. 63:11 brings the rule down from the nation to the single soul, which is why Ibn Kathir reaches for it. And 29:53 names what the Makkans were doing: they urge you to hasten the punishment, and were it not for a specified term it would have reached them.",
            "bn": "১৫:৫ আর ২৩:৪৩ কথাটা বলে উল্টো দিক থেকে, আর দুই জায়গায় শব্দও এক: কোনো জাতি নিজের মেয়াদকে ছাড়িয়ে আগে যেতে পারে না, পিছিয়েও থাকতে পারে না। ৬৩:১১ বিধানটাকে জাতি থেকে নামিয়ে আনে একটিমাত্র প্রাণের উপর, আর সে কারণেই ইবনে কাসীর ওটা টেনে আনেন। আর ২৯:৫৩ মক্কাবাসীরা ঠিক যা করছিল তারই নাম বলে দেয়: তারা তোমাকে আযাব তাড়াতাড়ি আনতে বলে, নির্ধারিত সময় না থাকলে তা এসেই পড়ত।"
          },
          {
            "en": "For the first half, 6:17 is the plainest sister: if Allah touches you with harm there is no remover of it but Him. 48:11 turns the disclaimer into a question put to men who wanted the Prophet ﷺ to secure something for them: who could avail you anything against Allah if He intended you harm or benefit? And 33:63 leaves the timing where this verse leaves it, with Allah alone.",
            "bn": "প্রথম ভাগের সবচেয়ে সোজাসাপ্টা সঙ্গী ৬:১৭: আল্লাহ তোমাকে কোনো ক্ষতি স্পর্শ করালে তিনি ছাড়া কেউ তা সরাতে পারে না। ৪৮:১১ এই অস্বীকৃতিকেই প্রশ্নে বদলে দেয়, আর প্রশ্নটা ছোড়া হয় সেই লোকদের দিকে যারা নবী ﷺ-এর কাছ থেকে নিজেদের জন্য কিছু আদায় করাতে চেয়েছিল: আল্লাহ তোমাদের ক্ষতি বা লাভ চাইলে তাঁর বিপক্ষে কে তোমাদের কিছু দিতে পারে? আর ৩৩:৬৩ সময়ের হিসাব সেখানেই রাখে যেখানে এই আয়াত রাখে, একমাত্র আল্লাহর কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Term Buys",
          "bn": "মেয়াদ দিয়ে যা কেনা যায়"
        },
        "p": [
          {
            "en": "Before any application, a limit. The verse describes people who demanded a date for a punishment they did not believe in, and hands down no verdict about any living person or community. As-Sa'di's line is a warning, not a sentence already passed. For a reader the use is on himself, and it starts with the habit of expecting benefit and harm from a hand that owns neither: the manager, the visa officer, the test result, the relative whose mood decides the week. None of them is denied a role, and none is handed the title.",
            "bn": "কাজে লাগানোর আগে সীমাটা বলে নেওয়া দরকার। আয়াত সেই লোকদের বর্ণনা করছে যারা এমন আযাবের তারিখ চাইছিল যা তারা বিশ্বাসই করত না, আর জীবিত কোনো মানুষ বা জনগোষ্ঠীর ব্যাপারে এটি কোনো রায় দেয় না। সা'দীর কথাটাও সতর্কবাণী, আগেই দিয়ে দেওয়া দণ্ড নয়। পাঠকের জন্য আয়াতের ব্যবহার নিজের উপরেই, আর শুরু সেই অভ্যাস থেকে, যে হাতের মালিকানাই নেই সেখান থেকে লাভ আর ক্ষতি আশা করা: বস, ভিসা অফিসার, রিপোর্টের ফল, কিংবা যে আত্মীয়ের মেজাজের উপর গোটা সপ্তাহ নির্ভর করে। আয়াত এদের কারও ভূমিকা অস্বীকার করে না, কারও হাতে মালিকানাও তুলে দেয় না।"
          },
          {
            "en": "The second half asks for something else. If the term is running and cannot be shifted, a slow season is not a reprieve but working material. Maududi's reading turns the delay into a period of grace, and the practical form of that is small and datable: a debt settled this month instead of next year, a relationship repaired while both sides are alive, a prayer put back inside its time. No plan moves the term; a plan changes what the term finds finished.",
            "bn": "দ্বিতীয় ভাগ চায় অন্য কিছু। মেয়াদ যদি চলতেই থাকে আর নাড়ানো না যায়, তাহলে ঢিমে সময়টা রেহাই নয়, ওটাই কাজের কাঁচামাল। মওদূদীর পড়া অনুযায়ী দেরিটা আসলে অবকাশের সময়, আর তার বাস্তব চেহারা ছোট এবং তারিখ দিয়ে ধরা যায়: আগামী বছর নয়, এই মাসেই ধারটা শোধ করা; দুই পক্ষ বেঁচে থাকতেই সম্পর্কটা জোড়া লাগানো; নামাজটা তার নিজের ওয়াক্তে ফিরিয়ে আনা। কোনো পরিকল্পনা মেয়াদ নড়ায় না। পরিকল্পনা বদলায় শুধু এটুকু, মেয়াদ এসে কতটা শেষ করা অবস্থায় পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From the Words",
          "bn": "আয়াতের শব্দ থেকে দোয়া"
        },
        "p": [
          {
            "en": "The commentaries attach no narrated supplication to this verse, so what follows is composed from its own vocabulary and offered as that, not as a Sunnah text. O Allah, I own for myself neither harm nor benefit, and I am not asking You for a date. I ask You for the good You have willed, and that You turn from me what I cannot turn. Make the time You have given me enough, and let it find me ready.",
            "bn": "তাফসীরগুলো এই আয়াতের সঙ্গে বর্ণিত কোনো দোয়া জুড়ে দেয় না। তাই নিচেরটা আয়াতের নিজের শব্দ থেকে সাজানো, সুন্নাহর পাঠ হিসেবে নয়, সাজানো দোয়া হিসেবেই পেশ করা হচ্ছে। হে আল্লাহ, নিজের ক্ষতি বা লাভের মালিক আমি নই, আর আমি আপনার কাছে কোনো তারিখ চাইছি না। আমি চাইছি সেই কল্যাণ যা আপনি চেয়েছেন, আর চাইছি আপনি আমার থেকে তা সরিয়ে দিন যা সরানোর ক্ষমতা আমার কখনোই ছিল না। আপনার দেওয়া সময়টুকু যথেষ্ট করে দিন, আর যেন সে আমাকে প্রস্তুত অবস্থায় পায়।"
          },
          {
            "en": "A shorter form stays inside the verse's second half and takes 63:11 with it. My Lord, my term is with You and it does not move; do not let it find my account still open. Plainest of all is to recite the verse and stop at illa ma sha'Allah, the place where the Prophet ﷺ was told to leave the whole matter, letting the sentence say to Allah what it was sent to say to the people who asked.",
            "bn": "আরও ছোট একটা রূপ আয়াতের দ্বিতীয় ভাগের ভেতরেই থাকে, সঙ্গে নেয় ৬৩:১১। হে আমার রব, আমার মেয়াদ আপনার কাছে, সেটা নড়ে না; সে যেন আমার হিসাব খোলা অবস্থায় আমাকে না পায়। সবচেয়ে সহজ পথটাও আছে, আয়াতটাই পড়া আর ইল্লা মা শা-আল্লাহ পর্যন্ত এসে থামা। ওই জায়গাতেই নবী ﷺ-কে গোটা ব্যাপারটা ছেড়ে দিতে বলা হয়েছিল। বাক্যটা যা প্রশ্নকারীদের বলার জন্য এসেছিল, সেটাই আল্লাহকে বলতে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About My Own Term",
          "bn": "নিজের মেয়াদ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Five to sit with, and they are about you rather than about Makkah. When something I badly want is delayed, do I conclude it is not coming, or that the time is not up? Which person in my life have I quietly made the owner of my harm and my benefit? What am I waiting for a date on, and what would I do this week if none is given? Where has a long grace made me careless instead of ready?",
            "bn": "পাঁচটি প্রশ্ন নিয়ে বসুন, আর এগুলো মক্কা নিয়ে নয়, আপনাকে নিয়ে। ভীষণভাবে চাওয়া কিছু দেরি হলে আমি কি ধরে নিই জিনিসটা আসছেই না, নাকি বুঝি সময়টা এখনো ফুরায়নি? আমার জীবনের কোন মানুষটাকে আমি চুপচাপ আমার ক্ষতি আর লাভের মালিক বানিয়ে রেখেছি? কোন বিষয়ে আমি তারিখের অপেক্ষায় আছি, আর তারিখ না পেলে এই সপ্তাহে আমি কী করব? লম্বা অবকাশ কোথায় আমাকে প্রস্তুত না করে বেপরোয়া করে তুলেছে?"
          },
          {
            "en": "A last question from the disclaimer's side. The Prophet ﷺ was made to say in public that he held no title to his own good or his own trouble. If that was the standing of the best of creation before his Lord, what am I claiming when I speak of my plans as though the timing belonged to me? Answer it before the next delay arrives, because when the term comes it will not wait an hour.",
            "bn": "শেষ প্রশ্নটা অস্বীকৃতির দিক থেকে। নবী ﷺ-কে প্রকাশ্যে বলতে বলা হয়েছিল, নিজের ভালো বা নিজের বিপদের উপর তাঁর কোনো মালিকানা নেই। সৃষ্টির সেরা মানুষটির অবস্থান যদি তাঁর রবের সামনে এই হয়, তাহলে নিজের পরিকল্পনার কথা এমনভাবে বলার সময় আমি আসলে কী দাবি করছি, যেন সময়টা আমার হাতে? পরের দেরিটা আসার আগেই জবাব দিয়ে রাখুন, কারণ মেয়াদ এসে গেলে সে এক ঘণ্টাও অপেক্ষা করে না।"
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
          "bn": "সব মানুষের উদ্দেশে"
        },
        "p": [
          {
            "en": "Surah Yunus circles one dispute: the people of Makkah demanded a different Quran, or that this one be changed, and the surah answers by describing what the Quran actually is. At this point the address widens beyond the disputers: ya ayyuhan-nas, O mankind. What follows is not an argument but an announcement of goods received — there has come to you an admonition from your Lord, a healing for what is in the breasts, and guidance and mercy for the believers.",
            "bn": "সূরা ইউনুসের কেন্দ্রে একটা বিতর্ক। মক্কার লোকেরা দাবি তুলেছিল, অন্য একটা কুরআন আনো, নয়তো এটাকেই বদলে দাও। সূরাটি জবাব দেয় কুরআন আসলে কী, সেটা দেখিয়ে। এই জায়গায় এসে ডাকটা তর্ককারীদের ছাড়িয়ে সবার দিকে ছড়িয়ে পড়ে: ইয়া আইয়ুহান-নাস, হে মানবজাতি। এরপর যা আসে তা কোনো যুক্তি নয়, হাতে পৌঁছে যাওয়া নিয়ামতের ঘোষণা: তোমাদের কাছে তোমাদের রবের পক্ষ থেকে এসেছে উপদেশ, অন্তরে যা আছে তার নিরাময়, আর মুমিনদের জন্য হিদায়াত ও রহমত।"
          },
          {
            "en": "The phrase min rabbikum, from your Lord, carries the tone. What has arrived is not a book from a lawgiver to subjects but provision from the One who has been raising and sustaining you all along; rabb is the word of nurture. A summons from a ruler and a parcel from a caretaker are opened with different hands. The verse insists the Quran is the second kind of arrival, whatever its critics were calling it.",
            "bn": "মিন রাব্বিকুম, তোমাদের রবের পক্ষ থেকে: এই কথাটুকুই পুরো সুর বেঁধে দেয়। যা এসেছে তা কোনো আইনদাতার পক্ষ থেকে প্রজাদের কাছে পাঠানো বই নয়। এ সেই সত্তার পাঠানো রসদ, যিনি শুরু থেকেই মানুষকে লালন-পালন করে আসছেন; রব শব্দটাই প্রতিপালনের শব্দ। শাসকের তলবনামা আর অভিভাবকের পাঠানো উপহার মানুষ একই মন নিয়ে খোলে না। আয়াত জোর দিয়ে বলে, কুরআন এই দ্বিতীয় ধরনের জিনিস, সমালোচকেরা একে যে নামেই ডাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Gifts in Order",
          "bn": "পরপর চারটি দান"
        },
        "p": [
          {
            "en": "The verse names four things: maw'izah, admonition; shifa' lima fis-sudur, healing for what is in the breasts; huda, guidance; rahmah, mercy. Commentators including as-Sa'di read the sequence as a course of treatment. Admonition confronts and warns, the way a physician names the disease. Healing then works on the inner faculties the disease had corrupted. Guidance sets the recovered patient walking on the right road, and mercy is the flourishing at the road's end.",
            "bn": "আয়াতে চারটি জিনিসের নাম আছে: মাওইযা, উপদেশ; শিফাউল লিমা ফিস-সুদূর, অন্তরে যা আছে তার নিরাময়; হুদা, হিদায়াত; রহমাহ, রহমত। আস-সা'দীসহ মুফাসসিররা এই ক্রমটাকে দেখেন চিকিৎসার ধাপ হিসেবে। উপদেশ মানুষকে মুখোমুখি দাঁড় করায়, সতর্ক করে, যেমন ডাক্তার আগে রোগের নামটা বলে দেন। তারপর নিরাময় কাজ করে ভেতরের সেই শক্তিগুলোর উপর, রোগ যেগুলোকে নষ্ট করে দিয়েছিল। হিদায়াত সেরে ওঠা রোগীকে সঠিক পথে হাঁটিয়ে নেয়, আর রহমত হলো সেই পথের শেষে ভরে ওঠা জীবন।"
          },
          {
            "en": "The distribution of the gifts is equally deliberate. The admonition is announced to all mankind, but the verse ends lil-mu'minin, for the believers — guidance and mercy reach the ones who accept the treatment. Medicine on the shelf heals nobody. The Quran's benefit, the verse implies, is not automatic in a house where the book is present; it is conditional on the patient actually taking what was sent.",
            "bn": "দানগুলো কার কাছে পৌঁছায়, সেটাও ভেবেচিন্তে সাজানো। উপদেশের ঘোষণা গোটা মানবজাতির জন্য, কিন্তু আয়াত শেষ হয় লিল-মুমিনীন দিয়ে, মুমিনদের জন্য। হিদায়াত আর রহমত পৌঁছায় তাদের কাছে, যারা চিকিৎসাটা নেয়। তাকে তুলে রাখা ওষুধ কাউকে সারায় না। আয়াতের ইঙ্গিত হলো, ঘরে কুরআন থাকলেই তার উপকার আপনাআপনি আসে না। শর্ত একটাই: যা পাঠানো হয়েছে, রোগীকে তা সত্যিই খেতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Breasts Carry",
          "bn": "অন্তর যা বয়ে বেড়ায়"
        },
        "p": [
          {
            "en": "The healing is located precisely: lima fis-sudur, for what is in the breasts. The mufassirun name the diseases that live there — doubt about the truth, hypocrisy, envy, and the restless attachment to desires. As-Sa'di sums the classes into two: shubuhat, the confusions that sicken conviction, and shahawat, the appetites that sicken the will. The Quran treats the first with clear proofs and the second by making the Hereafter vivid and the world's price honest.",
            "bn": "নিরাময়ের জায়গাটা আয়াত ঠিকঠাক বলে দেয়: লিমা ফিস-সুদূর, অন্তরে যা আছে তার জন্য। মুফাসসিররা সেখানে বাসা বাঁধা রোগগুলোর নাম বলেন: সত্য নিয়ে সন্দেহ, নিফাক, হিংসা, আর কামনা-বাসনার পেছনে অস্থির ছুটে চলা। আস-সা'দী এগুলোকে দুই ভাগে গুছিয়ে আনেন। শুবুহাত, যে সংশয় ইয়াকীনকে অসুস্থ করে; আর শাহাওয়াত, যে লোভ-লালসা ইচ্ছাশক্তিকে অসুস্থ করে। প্রথমটার চিকিৎসা কুরআন করে স্পষ্ট দলিল দিয়ে। দ্বিতীয়টার চিকিৎসা করে আখিরাতকে চোখের সামনে জীবন্ত করে তুলে, আর দুনিয়ার আসল দাম খোলাখুলি জানিয়ে দিয়ে।"
          },
          {
            "en": "The claim recurs in 17:82, We send down of the Quran that which is healing and mercy for the believers, though it increases the wrongdoers only in loss. The same rain grows the garden and floods the ruin; the difference is in the ground. Reading these two verses together guards against a superstition and a despair alike — the Quran is not a charm that works regardless of the heart, nor a text too lofty to reach one.",
            "bn": "একই দাবি আবার এসেছে ১৭:৮২ আয়াতে: আমি কুরআনে এমন কিছু নাজিল করি যা মুমিনদের জন্য নিরাময় ও রহমত, কিন্তু জালিমদের তা কেবল ক্ষতিই বাড়ায়। একই বৃষ্টিতে বাগান ফলে ওঠে, আবার ভাঙা ভিটা ভেসে যায়; তফাতটা মাটিতে। দুই আয়াত মিলিয়ে পড়লে কুসংস্কার থেকেও বাঁচা যায়, হতাশা থেকেও। কুরআন এমন তাবিজ নয় যে অন্তরের অবস্থা যা-ই হোক, কাজ করে যাবে। আবার এত উঁচু কিতাবও নয় যে কোনো অন্তরের নাগাল পাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than What They Amass",
          "bn": "তারা যা জমায় তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "The next verse presses the point into economics. In 10:58, say: in the bounty of Allah and in His mercy — in that let them rejoice; it is better than what they gather. Early commentators read the bounty and the mercy here as Islam and the Quran. The verse thus stages a comparison people rarely make out loud: on one side everything a lifetime can accumulate, on the other the revelation lying on the shelf, and it ranks the second higher.",
            "bn": "পরের আয়াত কথাটাকে টেনে আনে লাভ-লোকসানের হিসাবে। ১০:৫৮: বলো, আল্লাহর অনুগ্রহ আর তাঁর রহমত নিয়েই তারা আনন্দ করুক; তারা যা জমায় তার চেয়ে এটা উত্তম। আগের যুগের মুফাসসিররা এখানে অনুগ্রহ আর রহমত বলতে বুঝেছেন ইসলাম আর কুরআন। এভাবে আয়াতটি এমন একটা তুলনা সামনে আনে, যা মানুষ মুখ ফুটে খুব কমই করে। এক পাল্লায় সারা জীবনে যা কিছু জমানো যায়, অন্য পাল্লায় তাকে পড়ে থাকা ওহি। আর আয়াত দ্বিতীয়টাকেই উপরে রাখে।"
          },
          {
            "en": "Rejoicing is commanded, which is worth noticing. Gratitude for the Quran is not meant to stay at solemn respect; it is meant to reach the register of joy that people otherwise reserve for windfalls. A believer who would celebrate an inheritance but has never once felt lucky about owning revelation has, by the measure of 10:58, priced the two backwards.",
            "bn": "আয়াত এখানে আনন্দ করার হুকুম দিচ্ছে, এটা খেয়াল করার মতো। কুরআনের জন্য শুকরিয়া শুধু গম্ভীর সম্মানে আটকে থাকার কথা নয়। তাকে পৌঁছাতে হবে সেই খুশিতে, যা মানুষ সাধারণত হঠাৎ পাওয়া সৌভাগ্যের জন্য তুলে রাখে। যে মুমিন উত্তরাধিকার পেলে উৎসব করত, অথচ ওহি হাতে পেয়ে একবারও নিজেকে ভাগ্যবান মনে করেনি, ১০:৫৮-এর মাপে সে দুটোর দাম উল্টো ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Cure",
          "bn": "ওষুধটা সেবন করা"
        },
        "p": [
          {
            "en": "The lived form of this verse is a change in how one approaches the book. A person reads differently when reading for a condition: the anxious reader watching for verses on decree and provision, the doubting reader for the arguments, the hardened reader for the passages that describe hearts like his own. Put directly: when we come to it as a cure, we discover it was sent for exactly what ails us.",
            "bn": "এই আয়াত জীবনে নামলে বদলে যায় কিতাবটার কাছে যাওয়ার ধরন। নিজের অসুখটা মাথায় রেখে পড়লে মানুষ অন্যভাবে পড়ে। দুশ্চিন্তায় থাকা পাঠক খোঁজে তাকদীর আর রিযিকের আয়াত, সন্দেহে ভোগা পাঠক খোঁজে দলিলগুলো, আর যার অন্তর শক্ত হয়ে গেছে সে খোঁজে সেই অংশগুলো, যেখানে তার মতোই অন্তরের বর্ণনা আছে। সোজা কথায়: আমরা যখন ওষুধ হিসেবে এর কাছে যাই, তখন টের পাই, ঠিক আমাদের অসুখের জন্যই এটা পাঠানো হয়েছিল।"
          },
          {
            "en": "Treatment also implies dosage and regularity. No one expects medicine taken once a year, on an occasion, to hold a chronic condition at bay. A small daily portion read with the question what is this saying to my present state does more of the verse's work than a long recitation performed while the mind is elsewhere. The four gifts are already in the book; the reader's part is to keep the appointment.",
            "bn": "চিকিৎসা মানেই মাত্রা আর নিয়ম। বছরে একবার কোনো উপলক্ষে খাওয়া ওষুধ পুরোনো রোগ ঠেকিয়ে রাখবে, এমনটা কেউ আশা করে না। মন অন্য কোথাও রেখে লম্বা তিলাওয়াতের চেয়ে প্রতিদিন অল্প একটু পড়া আয়াতটার কাজ বেশি করে, যদি সঙ্গে থাকে এই প্রশ্ন: এটা আমার এখনকার অবস্থাকে কী বলছে? চারটি দান কিতাবে আগে থেকেই আছে। পাঠকের কাজ শুধু নিয়ম করে হাজির হওয়া।"
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
            "bn": "জেনে রাখো, আল্লাহর আওলিয়াদের কোনো ভয় নেই, তারা দুঃখও পাবে না। ওয়ালী শব্দে আছে নৈকট্য আর বন্ধুত্বের ভাব। এই শব্দকে ঘিরে গড়ে উঠেছে আস্ত সব কল্পকাহিনি: বুযুর্গি যেন আলাদা এক জাত, যার চিহ্ন অলৌকিক কাণ্ড আর যার পথ গোপন রহস্য। তাই ১০:৬৩ সঙ্গে সঙ্গে শব্দটার সংজ্ঞা দিয়ে কল্পকাহিনির দরজা বন্ধ করে দেয়: যারা ঈমান এনেছে আর তাকওয়া অবলম্বন করত। ঈমান আর তাকওয়া, সংজ্ঞায় এর বাইরে আর কিছু নেই।"
          },
          {
            "en": "The definition is the most quoted thing the mufassirun say here, because it makes walaya open. No lineage is named, no order, no initiation, no miracle. Whoever believes and is mindful of Allah has a share of His alliance in exact proportion to those two qualities — and whoever claims the rank without them has only the claim.",
            "bn": "এখানে মুফাসসিরদের সবচেয়ে বেশি উদ্ধৃত কথা এই সংজ্ঞাটাই, কারণ এতে ওয়ালায়ার দরজা সবার জন্য খুলে যায়। কোনো বংশের নাম নেই, কোনো তরিকা নেই, কোনো দীক্ষা নেই, কোনো কারামত নেই। যে ঈমান আনে আর আল্লাহকে ভয় করে চলে, আল্লাহর বন্ধুত্বে তার ভাগ ঠিক ততটুকু, যতটুকু এই দুই গুণ তার মধ্যে আছে। আর যে এই দুই গুণ ছাড়াই পদটা দাবি করে, তার হাতে আছে শুধু দাবিটুকুই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Fear, No Grief",
          "bn": "ভয়ও নেই, দুঃখও নেই"
        },
        "p": [
          {
            "en": "The commentators observe the pair's precision: khawf, fear, faces what may come; huzn, grief, faces what has passed. Between them they cover every direction from which sorrow enters a life. The verse does not promise that Allah's allies feel nothing — the prophets themselves knew fear and sadness — but that neither will settle on them as a final state, and that on the Day it matters most, both are lifted entirely.",
            "bn": "মুফাসসিররা জোড়াটার সূক্ষ্মতা খেয়াল করেন। খাওফ, ভয়, তাকিয়ে থাকে সামনে যা আসতে পারে তার দিকে; হুযন, দুঃখ, তাকিয়ে থাকে যা চলে গেছে তার দিকে। দুটো মিলে জীবনে কষ্ট ঢোকার সব দিকই ঢেকে ফেলে। আয়াত এমন কথা দিচ্ছে না যে আল্লাহর বন্ধুরা কিছুই অনুভব করেন না; নবীরাও (আঃ) ভয় আর দুঃখ চিনেছেন। কথা দিচ্ছে এটুকু: কোনোটাই তাঁদের উপর শেষ অবস্থা হয়ে চেপে বসবে না, আর যেদিন সবচেয়ে বেশি দরকার, সেদিন দুটোই পুরোপুরি তুলে নেওয়া হবে।"
          },
          {
            "en": "Their security has an unusual source. It does not come from wealth, walls or numbers, but from the two inward qualities of 10:63, and that is why it cannot be confiscated. Everything the world secures, the world can also seize; what faith and taqwa secure sits beyond reach, which is the whole advantage of being allied to the One whom nothing escapes and nothing defeats.",
            "bn": "তাঁদের নিরাপত্তার উৎসটা অন্যরকম। তা সম্পদ, দেয়াল বা লোকবল থেকে আসে না; আসে ১০:৬৩-এর দুই ভেতরের গুণ থেকে। সে কারণেই কেউ তা কেড়ে নিতে পারে না। দুনিয়া যা কিছু দিয়ে নিরাপত্তা দেয়, দুনিয়া তা কেড়েও নিতে পারে। ঈমান আর তাকওয়া যে নিরাপত্তা দেয়, তা নাগালের বাইরে। যাঁর হাত থেকে কিছুই ফসকায় না, যাঁকে কিছুই হারাতে পারে না, তাঁর মিত্র হওয়ার পুরো লাভটা এখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News in Both Lives",
          "bn": "দুই জীবনেই সুসংবাদ"
        },
        "p": [
          {
            "en": "For them is good news in the life of this world and in the Hereafter. The Prophet ﷺ explained the worldly share: the righteous dream a Muslim sees or that is seen about him — related in the sound collections as what remains of the tidings of prophethood. Muslim also relates that when a man does good and people praise him for it, that is the immediate glad tidings of the believer.",
            "bn": "তাদের জন্য সুসংবাদ দুনিয়ার জীবনে আর আখিরাতে। দুনিয়ার ভাগটা নবী ﷺ নিজেই ব্যাখ্যা করেছেন: ভালো স্বপ্ন, যা কোনো মুসলিম নিজে দেখে বা তার ব্যাপারে অন্য কেউ দেখে। নির্ভরযোগ্য হাদিসগ্রন্থগুলোতে এসেছে, নবুওয়াতের সুসংবাদের মধ্যে এটুকুই বাকি আছে। মুসলিম আরও বর্ণনা করেন, কেউ ভালো কাজ করলে আর লোকে সে জন্য তার প্রশংসা করলে, সেটা মুমিনের আগাম সুসংবাদ।"
          },
          {
            "en": "The commentators add the third and greatest instalment: the tidings the angels bring at death, described in 41:30 — those who said our Lord is Allah and stood firm, upon them the angels descend: do not fear and do not grieve, and receive the good news of the Garden you were promised. The same two words, fear and grief, cancelled at the exact moment humans dread most.",
            "bn": "মুফাসসিররা এর সঙ্গে যোগ করেন তৃতীয় এবং সবচেয়ে বড় কিস্তি: মৃত্যুর সময় ফেরেশতারা যে সুসংবাদ নিয়ে আসেন। ৪১:৩০ আয়াতে তার বর্ণনা: যারা বলেছে আমাদের রব আল্লাহ, তারপর অবিচল থেকেছে, তাদের কাছে ফেরেশতারা নেমে আসে: ভয় কোরো না, দুঃখও কোরো না, আর সেই জান্নাতের সুসংবাদ নাও, যার ওয়াদা তোমাদের দেওয়া হয়েছিল। সেই একই দুই শব্দ, ভয় আর দুঃখ, মুছে দেওয়া হয় ঠিক সেই মুহূর্তে, যেটাকে মানুষ সবচেয়ে বেশি ভয় পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Words That Do Not Change",
          "bn": "যে বাণী বদলায় না"
        },
        "p": [
          {
            "en": "Then the guarantee: no change is there in the words of Allah — that is the great attainment. Promises fail for two reasons, deceit or inability, and both are impossible for Him. The verse fixes the promise's reliability to His own nature: His words do not change because He does not change His word, as 50:29 says — the word will not be altered with Me.",
            "bn": "তারপর নিশ্চয়তা: আল্লাহর কথার কোনো রদবদল নেই, এটাই মহাসাফল্য। ওয়াদা ভাঙে দুই কারণে, হয় প্রতারণা, নয় অক্ষমতা; আর তাঁর বেলায় দুটোই অসম্ভব। আয়াত ওয়াদার ভরসাকে বেঁধে দেয় তাঁর নিজের সত্তার সঙ্গে। তাঁর বাণী বদলায় না, কারণ তিনি নিজের কথা বদলান না। যেমন ৫০:২৯ বলে: আমার কাছে কথার রদবদল হয় না।"
          },
          {
            "en": "Al-fawz al-'azim, the great attainment, is the Quran's settled name for the best possible outcome. Attaching it here teaches proportion: the triumph is not the dream, nor the people's praise, but the standing itself — to be someone Allah calls His ally, guarded from fear and grief by a promise that cannot be revised in either world.",
            "bn": "আল-ফাওযুল আযীম, মহাসাফল্য: সবচেয়ে ভালো পরিণতির জন্য কুরআনের বাঁধা নাম। এখানে নামটা জুড়ে দিয়ে আয়াত মাপ বুঝতে শেখায়। আসল জয় স্বপ্নটা নয়, লোকের প্রশংসাও নয়; জয় হলো মর্যাদাটাই। আল্লাহ যাকে নিজের বন্ধু বলেন, এমন একজন হওয়া; আর এমন এক ওয়াদায় ভয় আর দুঃখ থেকে নিরাপদ থাকা, যা দুনিয়া বা আখিরাত কোথাও বদলানো যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Into Walaya",
          "bn": "ওয়ালায়ার পথ"
        },
        "p": [
          {
            "en": "Al-Bukhari relates the hadith qudsi that maps the road: whoever shows enmity to a wali of Mine, I have declared war upon him; My servant draws near to Me with nothing more beloved to Me than what I have made obligatory upon him, and he keeps drawing near with voluntary acts until I love him. The order is the point — the obligations first, then the extras, and love at the end of a long ordinary road.",
            "bn": "আল-বুখারী সেই হাদিসে কুদসি বর্ণনা করেন, যা এ পথের নকশা এঁকে দেয়: যে আমার কোনো ওয়ালীর সঙ্গে শত্রুতা করে, আমি তার বিরুদ্ধে যুদ্ধ ঘোষণা করলাম। আমার বান্দা যা দিয়ে আমার নৈকট্য লাভ করে, তার মধ্যে আমার কাছে সবচেয়ে প্রিয় হলো যা আমি তার উপর ফরজ করেছি। আর নফল আমল দিয়ে সে আমার আরও কাছে আসতেই থাকে, শেষে আমি তাকে ভালোবাসি। আসল কথা এই ক্রমটাই: আগে ফরজ, তারপর নফল, আর ভালোবাসা এক লম্বা, সাদামাটা পথের শেষে।"
          },
          {
            "en": "Nothing in that road is exotic. Prayers on time, honest earnings, dues paid, then the gentle accumulation of voluntary prayer, fasting, charity and remembrance. The hadith continues that when Allah loves the servant, He is the hearing with which he hears and the seeing with which he sees, and if he asks, He gives him — the lived meaning of having Allah as one's wali.",
            "bn": "এই পথে অদ্ভুত কিছুই নেই। সময়মতো নামাজ, হালাল রুজি, পাওনা মিটিয়ে দেওয়া; তারপর ধীরে ধীরে নফল নামাজ, রোজা, সদকা আর জিকির জমতে থাকা। হাদিসটি আরও বলে, আল্লাহ যখন বান্দাকে ভালোবাসেন, তখন তিনি হয়ে যান তার শ্রবণশক্তি, যা দিয়ে সে শোনে, আর তার দৃষ্টিশক্তি, যা দিয়ে সে দেখে; আর সে কিছু চাইলে তিনি তাকে দেন। আল্লাহকে নিজের ওয়ালী হিসেবে পাওয়ার জীবন্ত অর্থ এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Measuring by the Right Scale",
          "bn": "ঠিক দাঁড়িপাল্লায় মাপা"
        },
        "p": [
          {
            "en": "These verses re-calibrate two judgments. About others: rank in Allah's sight tracks faith and taqwa, not fame, wealth or titles — so the unnoticed woman of consistent prayer may outrank the celebrated. About ourselves: anxiety about the future and grief over the past are, among much else, signals showing where our security is currently invested, and in what.",
            "bn": "এই আয়াতগুলো দুটো বিচারের মাপকাঠি নতুন করে ঠিক করে দেয়। অন্যদের বেলায়: আল্লাহর কাছে মর্যাদা চলে ঈমান আর তাকওয়া অনুযায়ী, খ্যাতি, সম্পদ বা পদবি অনুযায়ী নয়। তাই নিয়মিত নামাজ পড়া কোনো অচেনা নারী নামকরা মানুষকেও ছাড়িয়ে যেতে পারেন। নিজের বেলায়: ভবিষ্যৎ নিয়ে দুশ্চিন্তা আর অতীত নিয়ে দুঃখ আরও অনেক কিছুর পাশাপাশি একটা সংকেতও দেয়। আমাদের নিরাপত্তা এই মুহূর্তে কোথায় আর কীসে খাটানো আছে, তা ধরিয়ে দেয়।"
          },
          {
            "en": "The response the passage invites is to move the investment. Strengthen the two qualifying qualities — belief, examined and fed; taqwa, practiced in small daily refusals — and the promised freedoms follow at their own pace, in this life as tranquillity and in the next completely. That is the trade 10:64 calls the great attainment, offered without change to anyone willing to be His ally on His terms.",
            "bn": "এই অংশ যে সাড়া চায় তা হলো, বিনিয়োগটা সরিয়ে আনা। যে দুই গুণ দিয়ে যোগ্যতা ঠিক হয়, সেগুলো মজবুত করুন: ঈমানকে যাচাই করে আর খোরাক দিয়ে; তাকওয়াকে প্রতিদিনের ছোট ছোট না বলার মধ্য দিয়ে। তাহলে প্রতিশ্রুত মুক্তি আসবে নিজের গতিতে, এই জীবনে প্রশান্তি হয়ে, আর পরের জীবনে পুরোপুরি। এই লেনদেনকেই ১০:৬৪ বলে মহাসাফল্য। কোনো রদবদল ছাড়াই এ প্রস্তাব খোলা প্রত্যেকের জন্য, যে তাঁর শর্তে তাঁর মিত্র হতে রাজি।"
          }
        ]
      }
    ]
  },
  "10:68": {
    "sections": [
      {
        "h": {
          "en": "The Speech Not to Grieve Over",
          "bn": "যে কথায় দুঃখ পেতে মানা"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan. Three verses before ours, 10:65 tells the Prophet ﷺ not to let their speech grieve him, because honour belongs to Allah entirely. 10:66 declares that whoever is in the heavens and whoever is on the earth belongs to Allah, and that those who invoke partners besides Him follow nothing but assumption. 10:67 points to the night made for rest and the day made for seeing. Our verse quotes a specimen of that speech.",
            "bn": "সূরা ইউনুস মাক্কী। আমাদের আয়াতের তিনটি আয়াত আগে, ১০:৬৫ আয়াত নবী ﷺ-কে বলে, ওদের কথায় যেন তিনি দুঃখ না পান, কারণ সমস্ত সম্মান আল্লাহরই। ১০:৬৬ আয়াত ঘোষণা দেয়, আসমান আর যমীনে যারা আছে সবাই আল্লাহর, আর যারা তাঁকে বাদ দিয়ে শরীকদের ডাকে তারা ধারণা ছাড়া কিছুরই পিছনে চলছে না। ১০:৬৭ আয়াত আঙুল তোলে রাতের দিকে, যা বানানো হয়েছে বিশ্রামের জন্য, আর দিনের দিকে, যা বানানো হয়েছে দেখার জন্য। আমাদের আয়াত সেই কথারই একটা নমুনা তুলে ধরে।"
          },
          {
            "en": "What follows keeps the thread. 10:69 commissions a reply: say, those who invent falsehood about Allah will not succeed. 10:70 measures their gain and their end, a brief enjoyment in this world, then to Us is their return, then the severe punishment. With 10:71 the surah leaves the argument for the news of Nuh (AS). None of the six commentaries consulted reports an occasion of revelation, so its placement is the context.",
            "bn": "এরপর যা আসে, তাতে সুতোটা ধরা থাকে। ১০:৬৯ আয়াত জবাবটা বলে দেয়: বলে দাও, যারা আল্লাহর নামে মিথ্যা রচনা করে তারা সফল হবে না। ১০:৭০ আয়াত মেপে দেয় তাদের পাওনা আর তাদের শেষটা, দুনিয়ায় সামান্য ভোগ, তারপর আমার কাছেই তাদের ফেরা, তারপর কঠিন আযাব। ১০:৭১ আয়াতে সূরা তর্ক ছেড়ে নূহ (আ)-এর খবরে যায়। এই আয়াতের জন্য যে ছয়টি তাফসীর দেখা হয়েছে, তার একটিও শানে নুযূল জানায় না। তাই আয়াতের অবস্থানটাই তার প্রেক্ষাপট।"
          },
          {
            "en": "Who is speaking in it? At-Tabari names them as the idolaters of your people, addressing the Prophet ﷺ, and identifies their saying as the claim that the angels are the daughters of Allah. Al-Baghawi reads it the same way. Al-Muyassar widens the reference, glossing the claim as their saying that the angels are Allah's daughters, or that the Messiah is the son of Allah. Al-Qurtubi says only the disbelievers. Ibn Kathir names no group.",
            "bn": "কথাটা বলছে কারা? তাবারী তাদের নাম বলে দেন, আপনার কওমের মুশরিকরা, আর কথাটা নবী ﷺ-কেই বলা হচ্ছে। তাদের বলাটা কী ছিল, সেটাও তিনি ধরিয়ে দেন: ফেরেশতারা আল্লাহর কন্যা। বাগাবীও একই পড়া নেন। মুয়াসসার পরিধিটা বাড়িয়ে দেয়, দাবিটার ব্যাখ্যায় বলে, তারা বলত ফেরেশতারা আল্লাহর কন্যা, কিংবা মাসীহ আল্লাহর পুত্র। কুরতুবী কেবল বলেন কাফিররা। ইবনে কাসীর কোনো দলের নামই নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ittakhadha, Walad, Sultan",
          "bn": "ইত্তাখাজা, ওয়ালাদ, সুলতান"
        },
        "p": [
          {
            "en": "The verse runs to 25 Arabic words, counting the text of surah Yunus and leaving out the 5 pause marks printed in the line. The verb carrying the claim is ittakhadha, the eighth form of the root a-kh-dh, to take a thing for oneself. Its object is waladan, offspring, and it is indefinite. English renders it son here, but at-Tabari and al-Baghawi both take the reported claim to be about daughters, so the Arabic word covers a child of either kind.",
            "bn": "আয়াতটি ২৫টি আরবি শব্দের, সূরা ইউনুসের পাঠ ধরে গোনা, আর লাইনে ছাপা ৫টি ওয়াক্ফ চিহ্ন বাদ দিয়ে। দাবিটা যে ক্রিয়ার কাঁধে চড়ে আসে সেটা ইত্তাখাজা, আখাজা ধাতুর অষ্টম বাব, মানে কোনো জিনিস নিজের জন্য নিয়ে নেওয়া। এর কর্ম ওয়ালাদান, সন্তান, আর শব্দটা অনির্দিষ্ট। ইংরেজিতে এখানে পুত্র লেখা হয়, কিন্তু তাবারী আর বাগাবী দুজনেই যে দাবির কথা বলছেন সেটা কন্যা নিয়ে। তাই আরবি শব্দটার ভেতরে ছেলে মেয়ে দুই রকম সন্তানই পড়ে।"
          },
          {
            "en": "Then the answer begins, and it begins by putting distance between Allah and the sentence. Subhanahu: al-Qurtubi glosses it as Allah declaring Himself free of a consort and of children, and of partners and rivals. Next comes al-Ghaniyy with the definite article, not simply ghaniyy. As-Sa'di reads the article strictly. Self-sufficiency is confined to Him, so He is self-sufficient completely and from every angle. Ibn Kathir states it as a pair: free of need of all besides Him, while everything else needs Him desperately.",
            "bn": "এবার জবাব শুরু হয়, আর শুরু হয় আল্লাহ আর কথাটার মাঝখানে দূরত্ব বসিয়ে। সুবহানাহু। কুরতুবী এর ব্যাখ্যায় বলেন, আল্লাহ নিজেকে পবিত্র ঘোষণা করছেন স্ত্রী থেকে, সন্তান থেকে, আর শরীক ও সমকক্ষ থেকে। এরপর আসে আল-গানী, নির্দিষ্টতাবাচক আলিফ-লাম সহ, শুধু গানী নয়। সা'দী এই আলিফ-লামটা কড়াভাবে পড়েন। অমুখাপেক্ষিতা তাঁরই মধ্যে সীমাবদ্ধ, তাই তিনি পূর্ণভাবে আর সব দিক থেকেই অমুখাপেক্ষী। ইবনে কাসীর কথাটা জোড়া বেঁধে বলেন: তিনি ছাড়া বাকি সবকিছু থেকে তিনি বেনিয়াজ, আর বাকি সবকিছুই তাঁর মুখাপেক্ষী।"
          },
          {
            "en": "Sultan is the word the challenge turns on. Al-Baghawi glosses it as hujjah wa burhan, proof and demonstration, and points out that the min before it is extra, making the denial total. The in that opens the clause is the negating in, and both at-Tabari and al-Baghawi paraphrase in indakum with ma indakum, you have none. The verse then closes on a question not seeking information. Ibn Kathir calls it a denunciation, a firm threat and a severe warning.",
            "bn": "পুরো চ্যালেঞ্জটা ঘোরে সুলতান শব্দটার উপর। বাগাবী এর অর্থ করেন হুজ্জাহ ওয়া বুরহান, দলিল ও প্রমাণ। সঙ্গে ধরিয়ে দেন, আগের মিন হরফটা অতিরিক্ত, আর তাতে অস্বীকারটা পূর্ণ হয়ে যায়। বাক্যের শুরুর ইন হরফটাও নেতিবাচক, আর তাবারী ও বাগাবী দুজনেই ইন ইনদাকুম-এর ব্যাখ্যায় লেখেন মা ইনদাকুম, তোমাদের কাছে কিছুই নেই। এরপর আয়াতটা শেষ হয় এমন প্রশ্নে, যা তথ্য জানতে চায় না। ইবনে কাসীর একে বলেন ধিক্কার, দৃঢ় হুমকি আর কঠিন সতর্কবাণী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Three Proofs of Sufficiency",
          "bn": "অমুখাপেক্ষিতার তিনটি দলিল"
        },
        "p": [
          {
            "en": "As-Sa'di does not read the answer as a rebuke but as an argument, and he numbers its moves. The first is huwa al-Ghaniyy. If He is self-sufficient from every angle, for what would He take a child? Out of need of one? That contradicts His sufficiency, and nobody takes a child except for a deficiency in his own. The second is lahu ma fis-samawati wa ma fil-ard, which as-Sa'di calls a comprehensive phrase no existing thing in the heavens or the earth escapes.",
            "bn": "সা'দী এই জবাবটাকে ধমক হিসেবে পড়েন না, পড়েন দলিল হিসেবে, আর দলিলের ধাপগুলো তিনি গুনে গুনে সাজান। প্রথমটি হুয়াল-গানী। সব দিক থেকেই যদি তিনি অমুখাপেক্ষী হন, তাহলে কীসের জন্য তিনি সন্তান নেবেন? সন্তানের দরকার আছে বলে? সেটা তো তাঁর অমুখাপেক্ষিতার উল্টো কথা। কেউ সন্তান নেয় না, যদি না তার নিজের স্বয়ংসম্পূর্ণতায় একটা ঘাটতি থাকে। দ্বিতীয়টি লাহু মা ফিস-সামাওয়াতি ওয়া মা ফিল-আরদ। সা'দী একে বলেন সর্বব্যাপী কথা, আসমান আর যমীনের কোনো অস্তিত্বই যার বাইরে যায় না।"
          },
          {
            "en": "All of them are created, owned, servants. A child, he continues, is of the same genus as his father, so cannot be created and cannot be a possession; owning everything and begetting anything cancel each other out. The third proof is the challenge itself. Had they owned one they would have produced it, and when they proved unable, the falsehood was established. That is why the verse ends on speech about Allah without knowledge, which as-Sa'di calls one of the gravest of the forbidden things.",
            "bn": "সবাই সৃষ্ট, সবাই মালিকানাধীন, সবাই বান্দা। সন্তান, তিনি বলে চলেন, বাপের সঙ্গে একই জাতের হয়। তাই সে সৃষ্টও হতে পারে না, মালিকানার মালও হতে পারে না। সবকিছুর মালিক হওয়া আর সন্তান জন্ম দেওয়া, দুটো একসঙ্গে টেকে না। তৃতীয় দলিল হল চ্যালেঞ্জটাই। একটি প্রমাণও যদি তাদের থাকত, তারা সেটা বের করে আনত। তারা যখন অপারগ হল, তখনই তাদের কথার মিথ্যাত্ব সাব্যস্ত হয়ে গেল। এজন্যই আয়াতটা শেষ হয় না জেনে আল্লাহর নামে কথা বলায়, যেটাকে সা'দী বলেন সবচেয়ে বড় হারামগুলোর একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Anyone Wants a Son",
          "bn": "সন্তান মানুষ কেন চায়"
        },
        "p": [
          {
            "en": "At-Tabari asks the question lying under the first proof. Why does anyone seek a child at all? Because he wants a help to him during his life and a remembrance of him after his death. Allah, at-Tabari says, is free of all of that. He needs no assistant to help Him govern, and He does not pass away, so as to need somebody to come after Him. Both ordinary human reasons are reasons of weakness and of dying.",
            "bn": "প্রথম দলিলের নিচে যে প্রশ্নটা চাপা পড়ে আছে, তাবারী সেটাই তোলেন। মানুষ আদৌ সন্তান চায় কেন? কারণ সে চায় জীবদ্দশায় একটা সহায়, আর মৃত্যুর পরে নিজের একটা স্মৃতি। আল্লাহ, তাবারী বলেন, এসব কিছু থেকেই বেনিয়াজ। তাঁর তদবিরে সাহায্য করার জন্য কোনো সহকারী তাঁর লাগে না, আর তিনি ফুরিয়েও যান না যে তাঁর পরে কাউকে দরকার হবে। মানুষের এই সাধারণ কারণ দুটোই আসলে দুর্বলতার আর মরণশীলতার কারণ।"
          },
          {
            "en": "At-Tabari takes the ownership clause the same way. Whatever is in the heavens and the earth belongs to Allah as property, and the angels are His servants and His possession, so how can a man's slave be his son? He closes by asking whether the people do not use their reason. Al-Qurtubi presses the point through another door: a child entails sharing a genus and a resemblance, and Allah is of the genus of nothing and resembles nothing.",
            "bn": "মালিকানার কথাটাও তাবারী একইভাবে ধরেন। আসমান ও যমীনে যা আছে সবই আল্লাহর সম্পত্তি, আর ফেরেশতারা তাঁর বান্দা ও তাঁর মালিকানার জিনিস। তাহলে কারো গোলাম কী করে তার সন্তান হবে? শেষে তিনি প্রশ্ন রাখেন, লোকেরা কি বুদ্ধি খাটায় না। কুরতুবী একই কথায় পৌঁছান অন্য দরজা দিয়ে: সন্তান মানেই জাতে মেলা আর সাদৃশ্য থাকা, অথচ আল্লাহ কোনো কিছুর জাতেরও নন, কোনো কিছুর মতোও নন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Forbearance Worth Noticing",
          "bn": "যে সহনশীলতা চোখে পড়ে না"
        },
        "p": [
          {
            "en": "None of the six commentaries consulted for this verse attaches a prophetic narration to it. Two sound reports carry its subject, and both are brought here as a general principle, not as narrations the commentators tie to this ayah. Sahih al-Bukhari 4974, from Abu Hurayrah (RA): the Prophet ﷺ said that Allah said, the son of Adam tells a lie against Me though he has not the right to do so, and he abuses Me though he has not the right.",
            "bn": "এই আয়াতের জন্য যে ছয়টি তাফসীর দেখা হয়েছে, তার একটিও এখানে কোনো হাদিস জুড়ে দেয় না। আয়াতের বিষয়টা নিয়ে দুটি সহীহ বর্ণনা আছে, আর দুটিকেই এখানে আনা হচ্ছে সাধারণ নীতি হিসেবে, মুফাসসিরদের এই আয়াতের সঙ্গে জোড়া বর্ণনা হিসেবে নয়। সহীহ বুখারী ৪৯৭৪, আবু হুরায়রা (রাঃ) থেকে: নবী ﷺ বলেছেন, আল্লাহ বলেন, আদম সন্তান আমার নামে মিথ্যা বলে, অথচ তার সে অধিকার নেই; আর সে আমাকে গালি দেয়, অথচ তারও সে অধিকার নেই।"
          },
          {
            "en": "The lie, it continues, is his saying that Allah will not recreate him as He created him the first time; the abuse is his saying that Allah has begotten children, while I am the One, the Self-Sufficient Master whom all creatures need, I beget not, nor was I begotten, and there is none like unto Me. Its Arabic carries this verse's own clause, ittakhadha Allahu waladan, answered with as-Samad, a near neighbour of al-Ghaniyy.",
            "bn": "বর্ণনাটি বলে চলে, মিথ্যাটা হল তার এই কথা যে আল্লাহ তাকে আবার সৃষ্টি করবেন না যেমন প্রথমবার করেছিলেন। আর গালিটা হল তার এই কথা যে আল্লাহ সন্তান গ্রহণ করেছেন, অথচ আমিই আল-আহাদ, একমাত্র সত্তা, আস-সামাদ, সবাই যাঁর মুখাপেক্ষী; আমি জন্ম দিইনি, আমাকে জন্মও দেওয়া হয়নি, আর আমার সমকক্ষ কেউ নেই। এর আরবিতে এই আয়াতেরই বাক্য বসে আছে, ইত্তাখাজাল্লাহু ওয়ালাদা, আর জবাব আসে আস-সামাদ দিয়ে, যা আল-গানীর গা ঘেঁষে দাঁড়ানো নাম।"
          },
          {
            "en": "The other is Sahih al-Bukhari 7378, from Abu Musa al-Ashari (RA): the Prophet ﷺ said, none is more patient than Allah against the harmful and annoying words He hears from the people; they ascribe children to Him, yet He bestows upon them health and provision. Al-Bukhari gives no grading beyond placing both in his Sahih. Set beside 10:65, where the Prophet ﷺ is told not to be grieved by their speech, it fixes the tone this passage keeps.",
            "bn": "অন্যটি সহীহ বুখারী ৭৩৭৮, আবু মূসা আশ'আরী (রাঃ) থেকে: নবী ﷺ বলেছেন, মানুষের মুখ থেকে শোনা কষ্টদায়ক কথার উপর আল্লাহর চেয়ে বেশি ধৈর্যশীল কেউ নেই; তারা তাঁর সঙ্গে সন্তান জুড়ে দেয়, তবু তিনি তাদের সুস্থতা আর রিযিক দিয়ে যান। বুখারী নিজের সহীহতে রাখা ছাড়া আলাদা কোনো মান দেননি। ১০:৬৫ আয়াতের পাশে রাখলে, যেখানে নবী ﷺ-কে বলা হচ্ছে ওদের কথায় দুঃখ না পেতে, এই বর্ণনাই অংশটার সুর বেঁধে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Book Answers It",
          "bn": "কুরআন কোথায় জবাব দেয়"
        },
        "p": [
          {
            "en": "Ibn Kathir compresses the argument into a single question, how can He have a son from among what He has created, and then lets another passage answer at length. He quotes the run beginning at 19:88, where the heavens almost rupture and the earth splits and the mountains collapse at the saying, arriving at the line al-Qurtubi also brings, 19:93: there is no one in the heavens and the earth but that he comes to the Most Merciful as a servant.",
            "bn": "ইবনে কাসীর যুক্তিটাকে একটি প্রশ্নে গুটিয়ে আনেন, তিনি যা সৃষ্টি করেছেন তার ভেতর থেকে তাঁর সন্তান হবে কী করে। তারপর জবাবটা লম্বা করার ভার ছেড়ে দেন আরেকটি অংশের হাতে। তিনি উদ্ধৃত করেন ১৯:৮৮ আয়াত থেকে শুরু হওয়া অংশ, যেখানে এই কথায় আসমান প্রায় ফেটে পড়ে, যমীন চৌচির হয় আর পাহাড় ধসে পড়ে। সেই অংশ গিয়ে পৌঁছায় সেই লাইনে যেটা কুরতুবীও আনেন, ১৯:৯৩ আয়াত: আসমান ও যমীনে এমন একজনও নেই, যে দয়াময়ের কাছে বান্দা হয়ে আসবে না।"
          },
          {
            "en": "2:116 is the near twin. It opens with the same clause and the same subhanahu, then answers with bal, rather, to Him belongs whatever is in the heavens and the earth, all are devoutly obedient to Him. It does not carry huwa al-Ghaniyy and asks for no warrant. 39:4 meets as-Sa'di's second proof head on: had Allah intended a son, He could have chosen from what He creates whatever He willed. And 7:33 forbids both associating with Allah what He has sent down no authority for, and saying about Allah what you do not know, setting this verse's challenge beside its closing question.",
            "bn": "২:১১৬ আয়াত এই আয়াতের প্রায় যমজ। শুরু হয় একই বাক্য দিয়ে, একই সুবহানাহু দিয়ে, তারপর জবাব আসে বাল দিয়ে, মানে বরং: আসমান ও যমীনে যা আছে সবই তাঁর, সবাই তাঁরই অনুগত। যা সেখানে নেই তা হল হুয়াল-গানী, আর সেখানে কোনো প্রমাণও চাওয়া হয় না। ৩৯:৪ আয়াত সা'দীর দ্বিতীয় দলিলের মুখোমুখি দাঁড়ায়: আল্লাহ যদি সন্তান নিতে চাইতেন, তিনি যা সৃষ্টি করেন তার ভেতর থেকে যাকে ইচ্ছা বেছে নিতে পারতেন। আর ৭:৩৩ আয়াত হারামের তালিকায় রাখে দুটোই: আল্লাহর সঙ্গে এমন কিছু শরীক করা যার পক্ষে তিনি কোনো দলিল নামাননি, আর না জেনে আল্লাহর নামে কথা বলা। এই আয়াতের চ্যালেঞ্জ আর তার শেষ প্রশ্ন, এখানে পাশাপাশি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sultan Test",
          "bn": "সুলতানের পরীক্ষা"
        },
        "p": [
          {
            "en": "The verse records a claim and answers it. It states that its holders have no warrant, and puts a question to them. It passes sentence on no living person and hands nobody a verdict to carry out. 10:69 gives the only reply the passage commissions, and that reply is a sentence to say, not an action to take. 10:65 had already told the Prophet ﷺ not to be grieved by their speech. The verse asks a reader to state its content and leave the heat out.",
            "bn": "আয়াতটি একটা দাবি লিখে রাখে আর তার জবাব দেয়। বলে দেয়, যারা দাবিটা ধরে আছে তাদের হাতে কোনো প্রমাণ নেই, আর তাদের প্রশ্ন করে। জীবিত কোনো মানুষের উপর এটি রায় দেয় না, কারো হাতে কার্যকর করার মতো কোনো ফয়সালাও তুলে দেয় না। ১০:৬৯ আয়াত এই অংশে একমাত্র যে জবাবের হুকুম দেয়, সেটা মুখে বলার কথা, হাতে করার কাজ নয়। আর ১০:৬৫ আয়াত আগেই নবী ﷺ-কে বলে দিয়েছে, ওদের কথায় যেন তিনি দুঃখ না পান। পাঠকের কাছে আয়াতটি চায় কেবল এটুকু, সে কথাটা বলুক আর উত্তাপটা বাদ দিক।"
          },
          {
            "en": "Its other edge points inward, and it is the sharper one. In indakum min sultanin bihadha can be put to any sentence beginning Allah wants, or Allah has decided, or Allah will never. As-Sa'di calls speech about Allah without knowledge one of the gravest of the forbidden things, and most of us commit a little of it weekly, in consolation, in argument, in explaining somebody else's loss. The practice is small: before a sentence about Allah leaves the mouth, ask its warrant.",
            "bn": "এর অন্য ধারটা ভেতরের দিকে ফেরানো, আর ওটাই বেশি ধারালো। ইন ইনদাকুম মিন সুলতানিন বিহাজা প্রশ্নটা এমন যেকোনো বাক্যের সামনে রাখা যায় যেটা শুরু হয় আল্লাহ চান, কিংবা আল্লাহ ঠিক করে রেখেছেন, কিংবা আল্লাহ কখনোই করবেন না দিয়ে। না জেনে আল্লাহর নামে কথা বলাকে সা'দী বলেন সবচেয়ে বড় হারামগুলোর একটি, আর আমাদের বেশির ভাগই প্রতি সপ্তাহে কিছু না কিছু বলে ফেলি, সান্ত্বনা দিতে গিয়ে, তর্ক করতে গিয়ে, অন্যের ক্ষতির ব্যাখ্যা দিতে গিয়ে। আমলটা ছোট: আল্লাহ নিয়ে কোনো কথা মুখ থেকে বেরোনোর আগে নিজেকে জিজ্ঞেস করুন, এর দলিল কী।"
          },
          {
            "en": "The name al-Ghaniyy has a working edge too. If He needs nothing, then nothing offered to Him is offered because He lacked it; the prayer, the fast and the charity are all for the giver. 35:15 says this to everybody: you are the ones in need of Allah, while Allah is the Free of need, the Praiseworthy. Whoever takes as-Sa'di's first proof seriously stops keeping accounts with his Lord, because a creditor has to be owed something.",
            "bn": "আল-গানী নামটার একটা কাজের দিকও আছে। তাঁর যদি কিছুরই দরকার না থাকে, তাহলে তাঁকে যা দেওয়া হয় তার কিছুই এজন্য দেওয়া হয় না যে তাঁর ঘাটতি ছিল। নামাজ, রোজা, সদকা, সবটাই যে দিচ্ছে তারই লাভের জন্য। ৩৫:১৫ আয়াত কথাটা সবাইকে বলে দেয়: তোমরাই আল্লাহর মুখাপেক্ষী, আর আল্লাহ অমুখাপেক্ষী, প্রশংসিত। সা'দীর প্রথম দলিলটা যে সত্যিই ধরতে পেরেছে, সে আর নিজের রবের সঙ্গে হিসাব খুলে বসে থাকে না। পাওনাদার হতে গেলে কিছু একটা পাওনা থাকতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise for What He Never Took",
          "bn": "যা তিনি নেননি, তার প্রশংসা"
        },
        "p": [
          {
            "en": "The verse's own answer is already a supplication in a single word, and the shortest response a reader can make is to say what the verse says: subhanahu, exalted is He. The Qur'an supplies a longer form and makes it a command to speak, in 17:111: say, praise to Allah, who has not taken a son and has had no partner in His dominion and has no protector out of weakness; and glorify Him with great glorification.",
            "bn": "আয়াতের নিজের জবাবটাই একটি শব্দে দোয়া হয়ে আছে, আর পাঠকের পক্ষে সবচেয়ে ছোট সাড়া হল আয়াতের কথাটাই বলা: সুবহানাহু, তিনি কত পবিত্র। কুরআন লম্বা রূপটাও দিয়ে দেয়, আর সেটাকে বলার হুকুম বানিয়ে দেয়, ১৭:১১১ আয়াতে: বলো, সব প্রশংসা সেই আল্লাহর, যিনি সন্তান নেননি, রাজত্বে যাঁর কোনো শরীক নেই, আর দুর্বলতার কারণে যাঁর কোনো অভিভাবকও নেই; আর তাঁর মহিমা ঘোষণা করো পূর্ণ মহিমায়।"
          },
          {
            "en": "Every clause of it denies one of the needs a child would answer. A supplication composed here in the verse's own vocabulary, offered as that and not as a narrated du'a, could run: O Allah, You are al-Ghaniyy, and whatever is in the heavens and whatever is in the earth is Yours; keep my tongue from saying about You what I do not know, and let me hold no opinion about You that I have no warrant for.",
            "bn": "সন্তান যে দরকারগুলো মেটাত, এর প্রতিটি বাক্যাংশ তার একটি করে নাকচ করে দেয়। এই আয়াতের নিজের শব্দ দিয়ে এখানে একটি দোয়া সাজানো হল, বর্ণিত দোয়া হিসেবে নয়, সাজানো দোয়া হিসেবেই: হে আল্লাহ, আপনি আল-গানী, আসমানে যা আছে আর যমীনে যা আছে সবই আপনার; আপনার সম্পর্কে না জেনে কথা বলা থেকে আমার জিহ্বাকে বাঁচান, আর আপনার সম্পর্কে এমন কোনো ধারণা আমাকে ধরে রাখতে দেবেন না যার পক্ষে আমার কোনো দলিল নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What I Assert",
          "bn": "নিজের দাবি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Three to sit with. What is the last thing I said about Allah in front of another person, and could I show the warrant for it if somebody asked me now? When I comfort a friend who has lost something, do I tell him what Allah has actually said, or what I suppose He intends? And if this verse's question were put to my religious opinions one at a time, how many would come back holding a sultan, and how many only a habit?",
            "bn": "তিনটি প্রশ্ন নিয়ে বসুন। আল্লাহ সম্পর্কে সবশেষ কোন কথাটা আমি কারো সামনে বলেছি, আর এখন কেউ দলিল চাইলে আমি কি সেটা দেখাতে পারব? কোনো বন্ধু কিছু হারালে তাকে সান্ত্বনা দেওয়ার সময় আমি কি আল্লাহ সত্যিই যা বলেছেন সেটা বলি, নাকি তিনি কী চাইছেন বলে আমার ধারণা সেটা বলি? আর এই আয়াতের প্রশ্নটা যদি আমার দীনি মতামতগুলোর সামনে একটি একটি করে রাখা হয়, কতগুলো সুলতান হাতে নিয়ে ফিরবে, আর কতগুলো ফিরবে শুধু অভ্যাসটুকু নিয়ে?"
          },
          {
            "en": "Two more, from the first half of the verse. If He needs nothing at all, what have I been quietly treating as a debt He owes me, and what would change in the way I pray if I stopped? And when somebody near me says a thing about my Lord that this verse denies, what moves in me first, the wish to correct or the wish to win? The Prophet ﷺ was told in 10:65 not to be grieved by their speech, which is neither indifference nor anger.",
            "bn": "আরও দুটি প্রশ্ন, আয়াতের প্রথম অর্ধেক থেকে। তাঁর যদি কিছুরই দরকার না থাকে, তাহলে কোন জিনিসটাকে আমি চুপচাপ তাঁর কাছে নিজের পাওনা ধরে রেখেছি, আর সেটা ছেড়ে দিলে আমার নামাজে কী বদলাত? আর আমার কাছের কেউ যখন আমার রব সম্পর্কে এমন কিছু বলে যা এই আয়াত নাকচ করে, তখন ভেতরে আগে কোনটা নড়ে ওঠে, ভুলটা শুধরে দেওয়ার ইচ্ছা, নাকি তর্কে জিতে যাওয়ার ইচ্ছা? ১০:৬৫ আয়াতে নবী ﷺ-কে বলা হয়েছিল ওদের কথায় দুঃখ না পেতে, যেটা উদাসীনতাও নয়, রাগও নয়।"
          }
        ]
      }
    ]
  },
  "10:78": {
    "sections": [
      {
        "h": {
          "en": "Between the Magic and the Magicians",
          "bn": "যাদু আর যাদুকরদের মাঝখানে"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan. 10:74 says that after Nuh (AS) messengers went to their own peoples with clear proofs, and that they would not believe what they had already denied. 10:75 names Musa and Harun (AS), sent to Pharaoh and his chiefs with Our signs, and reports that they behaved arrogantly. 10:76 gives their verdict the moment the truth reached them: this is obvious magic. 10:77 is Musa's reply, that magicians do not succeed. Our verse is what the chiefs said back.",
            "bn": "সূরা ইউনুস মাক্কী। ১০:৭৪ আয়াত বলে, নূহ (আ)-এর পরে রাসূলরা গিয়েছিলেন নিজ নিজ জাতির কাছে, সুস্পষ্ট প্রমাণ নিয়ে; আর আগে যা অস্বীকার করেছিল তাতে ঈমান আনার লোক তারা ছিল না। ১০:৭৫ আয়াত নাম নেয় মূসা আর হারূন (আ)-এর, যাঁদের পাঠানো হল ফেরাউন আর তার প্রধানদের কাছে আমার নিদর্শন দিয়ে, আর জানায়, তারা অহংকার করল। সত্য পৌঁছাতেই তাদের রায়টা আসে ১০:৭৬ আয়াতে: এটা তো স্পষ্ট যাদু। ১০:৭৭ আয়াত মূসার জবাব, যাদুকররা মুক্তি পায় না। আমাদের আয়াতটি তারই উত্তরে প্রধানদের বলা কথা।"
          },
          {
            "en": "The scene keeps moving: 10:79 has Pharaoh send for every learned magician, and by 10:83 only a few young men of Musa's own people have believed. None of the seven commentaries consulted reports an occasion of revelation, so the placement is the context. Who is speaking? At-Tabari writes that Pharaoh and his chiefs said it to Musa, and al-Muyassar names the same pair, filling in what the fathers' way had been: the worship of other than Allah. Al-Baghawi widens it to Pharaoh and his people; as-Sa'di and Ibn Kathir name no group.",
            "bn": "দৃশ্যটা এরপরও থেমে থাকে না। ১০:৭৯ আয়াতে ফেরাউন ডেকে পাঠায় প্রত্যেক পারদর্শী যাদুকরকে, আর ১০:৮৩ আয়াতে দেখা যায় মূসার নিজের জাতির গুটিকয় তরুণ ছাড়া কেউ ঈমান আনেনি। যে সাতটি তাফসীর দেখা হয়েছে তার একটিও কোনো শানে নুযূল জানায় না, তাই আয়াতের অবস্থানটাই তার প্রেক্ষাপট। কথাটা বলছে কারা? তাবারী লেখেন, ফেরাউন আর তার প্রধানরা মূসাকে এ কথা বলেছিল; মুয়াসসারও সেই একই দুই পক্ষের নাম নেয় আর ধরিয়ে দেয় বাপ-দাদার পথ বলতে কী বোঝানো হচ্ছে, আল্লাহ ছাড়া অন্যের ইবাদত। বাগাবী পরিধি বাড়িয়ে বলেন, ফেরাউন আর তার কওম; সা'দী আর ইবনে কাসীর কোনো দলের নামই নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Wrenches",
          "bn": "যে ক্রিয়া ঘাড় মুচড়ে দেয়"
        },
        "p": [
          {
            "en": "The verse is 16 Arabic words, counted in the text of surah Yunus, with no pause marks printed in the line. The verb they reach for is talfita, from the root l-f-t. At-Tabari glosses it with two verbs at once, li-tasrifana wa talwiyana, to turn us aside and twist us round, and cites the Arab usage that a man lafata another's neck when he wrenched it. Qatadah, carried by at-Tabari with his chain, gives only li-talwiyana; Ibn Kathir shortens it to tathnina, to bend us back.",
            "bn": "আয়াতটি ১৬টি আরবি শব্দের, সূরা ইউনুসের পাঠ ধরে গোনা, আর লাইনে কোনো ওয়াক্ফ চিহ্নই ছাপা নেই। তারা যে ক্রিয়াটা বেছে নেয় সেটা তালফিতা, ধাতু লাম-ফা-তা। তাবারী এর অর্থে একসঙ্গে দুটি ক্রিয়া বসান, লিতাসরিফানা ওয়া তালবিয়ানা, আমাদের ফিরিয়ে দিতে আর মুচড়ে দিতে। সঙ্গে আরবদের চলতি কথাও টানেন, কেউ আরেকজনের ঘাড় মুচড়ে দিলে বলা হত সে তার ঘাড় লাফত করেছে। কাতাদা, যাঁকে তাবারী সনদসহ আনেন, বলেন শুধু লিতালবিয়ানা; ইবনে কাসীর আরও ছোট করে বলেন তাসনিনা, আমাদের বাঁকিয়ে ফেরানো।"
          },
          {
            "en": "Al-Qurtubi adds where the word travels next: from this comes iltifat, a turning away from the direction that lies in front of you. That is the picture inside the complaint. They do not say Musa argued badly or that his evidence failed; they say he took hold of their heads and turned them. The root's other verbs keep the same movement, since 11:81 and 15:65 both tell the family of Lut (AS) to leave by night and let none of them look back.",
            "bn": "কুরতুবী জানিয়ে দেন শব্দটা এরপর কোথায় যায়: এখান থেকেই আসে ইলতিফাত, মানে সামনের দিক ছেড়ে অন্য দিকে ঘুরে যাওয়া। অভিযোগটার ভেতরের ছবিটা এই। তারা বলছে না যে মূসার যুক্তি দুর্বল কিংবা তাঁর প্রমাণ টেকেনি; তারা বলছে, তিনি তাদের মাথা ধরে ঘুরিয়ে দিচ্ছেন। এই ধাতুর বাকি ক্রিয়াগুলোতেও সেই একই নড়াচড়া, কারণ ১১:৮১ আর ১৫:৬৫ দুই আয়াতেই লূত (আ)-এর পরিবারকে বলা হয় রাতে বেরিয়ে পড়তে আর কেউ যেন পেছনে ফিরে না তাকায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Used Twice",
          "bn": "কুরআনে দুবার আসা শব্দ"
        },
        "p": [
          {
            "en": "Then al-kibriya', the word the accusation hangs on. At-Tabari says it means al-'azamah, greatness, built on kibr in the fi'liya' pattern, and gathers the early glosses by chain: Mujahid, through several routes, al-mulk, kingship, and once as-sultan fil-ard; ad-Dahhak, at-ta'ah, being obeyed. He judges these readings to be near each other, since kingship is authority and being obeyed is kingship, and holds that the word means greatness first, which afterwards shows itself through rule or power.",
            "bn": "এবার আল-কিবরিয়া, যে শব্দের উপর পুরো অভিযোগটা ঝুলে আছে। তাবারী বলেন এর অর্থ আল-আজামা, মহত্ত্ব, গঠনটা কিবর থেকে বানানো ফিইলিয়া ছাঁদ। নিচে তিনি সনদসহ পুরনো ব্যাখ্যাগুলো জড়ো করেন: মুজাহিদ, কয়েকটি সূত্রে, আল-মুলক, রাজত্ব, আর একবার আস-সুলতান ফিল-আরদ; দাহহাক, আত-তাআ, মানে লোকে মানবে। তাঁর রায়, পড়াগুলো একে অন্যের কাছাকাছি, কারণ রাজত্বই কর্তৃত্ব আর আনুগত্যই রাজত্ব; শব্দটার মূল অর্থ মহত্ত্ব, সেটাই পরে রাজত্ব বা ক্ষমতা হয়ে ফুটে ওঠে।"
          },
          {
            "en": "Al-Qurtubi gives greatness, kingship and authority together, places the land at the land of Egypt, and says why the senses fuse: kingship is called kibriya' because it is the greatest thing a man seeks in this world. Al-Baghawi and al-Muyassar agree on the authority and on Egypt, and Ibn Kathir reads grandeur and leadership. The word occurs twice in the whole Qur'an: here, offered as the private motive of two men, and in 45:37, where to Allah belongs al-kibriya' in the heavens and the earth.",
            "bn": "কুরতুবী একসঙ্গে বলেন মহত্ত্ব, রাজত্ব আর কর্তৃত্ব, যমীন বলতে বোঝান মিসরের যমীন, আর জানান অর্থ দুটো কেন মিলে যায়: রাজত্বকে কিবরিয়া বলা হয়, কারণ দুনিয়ায় মানুষ যা চায় তার মধ্যে ওটাই সবচেয়ে বড়। বাগাবী আর মুয়াসসারও কর্তৃত্বের কথা আর মিসরের কথা বলেন, ইবনে কাসীর বলেন মহত্ত্ব আর নেতৃত্ব। শব্দটা গোটা কুরআনে এসেছে দুবার। একবার এখানে, দুজন মানুষের গোপন মতলব বলে; আর একবার ৪৫:৩৭ আয়াতে, যেখানে আসমান ও যমীনে আল-কিবরিয়া আল্লাহরই।"
          },
          {
            "en": "The grammar of the accusation is worth watching. Ajitana and litalfitana are singular, addressed to Musa alone, but lakuma and the closing lakuma are dual, so the charge of ambition spreads to Harun (AS) without his having said a word. Ibn Kathir spells the dual out as you and Harun, and at-Tabari reads the last clause as addressed to both by name. Al-Qurtubi records a variant reading, wa yakuna with ya', from Ibn Mas'ud, al-Hasan and others; al-Baghawi attributes the same reading to Abu Bakr.",
            "bn": "অভিযোগটার ব্যাকরণও দেখার মতো। আজিতানা আর লিতালফিতানা একবচন, মূসাকে একা বলা; কিন্তু লাকুমা আর শেষের লাকুমা দ্বিবচন। ফলে ক্ষমতালোভের অপবাদটা হারূন (আ)-এর ঘাড়েও চাপে, অথচ তিনি একটি কথাও বলেননি। ইবনে কাসীর দ্বিবচনটা খুলে বলেন, তুমি আর হারূন; তাবারী শেষ বাক্যটাকে পড়েন দুজনের নাম ধরে বলা কথা হিসেবে। কুরতুবী একটি ভিন্ন কিরাআত লিখে রাখেন, ইয়া দিয়ে ওয়া ইয়াকুনা, ইবনে মাসউদ, হাসান আর অন্যদের সূত্রে; বাগাবী সেই পড়াটাই আবু বকরের বলে জানান।"
          }
        ]
      },
      {
        "h": {
          "en": "Sa'di on the Motive Charge",
          "bn": "মতলব ধরার জবাবে সা'দী"
        },
        "p": [
          {
            "en": "As-Sa'di works on the verse itself. They made their misguided fathers' word into a proof, he says, and pushed back with it the truth Musa had brought. For the second clause he supplies the unspoken version: you came so the two of you would be the chiefs, and so you could drive us from our land. He names the move three times: tamwih, a coat of paint over the question; tarwij, talk put about among their ignorant; tahyij, a stirring of their common people against Musa.",
            "bn": "সা'দী কাজ করেন আয়াতটার উপরেই। তিনি বলেন, পথভ্রষ্ট বাপ-দাদার কথাটাকে তারা বানিয়ে ফেলল দলিল, আর তা দিয়েই ঠেলে সরাতে চাইল মূসার আনা সত্যটাকে। দ্বিতীয় বাক্যটার জন্য তিনি মুখে না বলা কথাটা খুলে দেন: তোমরা এসেছ যাতে নেতা হও তোমরা দুজন, আর যাতে আমাদের দেশ থেকে বের করে দিতে পারো। চালটাকে তিনি তিনবার নাম দেন। তামবীহ, আসল প্রশ্নের উপর রঙ চড়ানো; তারবীজ, মূর্খদের মধ্যে ছড়িয়ে দেওয়া কথা; তাহইজ, সাধারণ লোককে মূসার বিরুদ্ধে খেপিয়ে তোলা।"
          },
          {
            "en": "Then comes the rule, and it is the most usable sentence in the commentary. Proofs are repelled only by proofs and demonstrations. A man who brings the truth and is met with talk of this kind has met somebody unable to produce anything that refutes him; had he owned a proof he would have produced it, instead of falling back on your aim is such and your intention is such. As-Sa'di closes the escape route too: this stands whether the guess about the opponent's aim is true or false.",
            "bn": "এরপর আসে নিয়মটা, আর এই বাক্যটাই তাফসীরের সবচেয়ে কাজের কথা। দলিল ঠেকানো যায় কেবল দলিল আর প্রমাণ দিয়ে। যে সত্য নিয়ে আসে আর জবাবে এ ধরনের কথা শোনে, সে এমন লোকের সামনে পড়েছে যার হাতে খণ্ডন করার মতো কিছুই নেই। দলিল থাকলে সে দলিলটাই বের করত, তোমার মতলব এই আর তোমার উদ্দেশ্য ওই বলে সরে যেত না। সা'দী পালানোর পথটাও বন্ধ করেন: প্রতিপক্ষের মতলব নিয়ে আন্দাজটা সত্য হোক বা মিথ্যা, কথাটা একই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised at His Own Table",
          "bn": "নিজের দস্তরখানে বড় করা"
        },
        "p": [
          {
            "en": "As-Sa'di finishes with Musa himself. Anyone who knew his state and what he called to knew that he had no aim of height in the land; his aim was his brother messengers' aim, guidance for people and direction toward what benefits them. The truth of the matter, as-Sa'di says, is what they themselves put into words at the end, and we are not believers in you. That is arrogance and obstinacy, and a desire for the very height they had just charged the two of them with.",
            "bn": "সা'দী শেষ করেন মূসাকে দিয়েই। তাঁর অবস্থা যে জানত আর তিনি কীসের দিকে ডাকছেন যে বুঝত, সে জানত দেশে উঁচু হয়ে বসার কোনো মতলব তাঁর নেই। তাঁর মতলব ছিল তাঁর ভাই রাসূলদেরই মতলব, মানুষকে পথ দেখানো আর যাতে তাদের ভালো হয় সেদিকে চালানো। আসল ব্যাপারটা কী, সা'দী বলেন, তারা নিজেরাই শেষে সেটা মুখে এনে ফেলেছে, আমরা তোমাদের মানব না। এটাই অহংকার, এটাই একগুঁয়েমি, আর এর ভেতরেই সেই উঁচু হওয়ার সাধ, যার অপবাদ তারা এইমাত্র দুজনের গায়ে দিল।"
          },
          {
            "en": "Ibn Kathir steps back to the whole story, which he calls among the most astonishing in the Book. Pharaoh took every precaution against Musa, and destiny compelled him to raise on his own bed and at his own table, in the standing of a son, the one he was guarding against. Allah then took him out from among them, gave him prophethood and direct speech, and sent him back with no minister but his brother Harun. Pharaoh rebelled, until Allah drowned them all in a single morning. He closes on 6:45.",
            "bn": "ইবনে কাসীর এবার পিছিয়ে এসে গোটা কাহিনিটা দেখেন, আর বলেন, এটি কিতাবের সবচেয়ে বিস্ময়কর কাহিনিগুলোর একটি। মূসার ব্যাপারে ফেরাউন সব রকম সাবধানতা নিয়েছিল। অথচ তকদীর তাকে দিয়েই করিয়ে নিল উল্টোটা: যার ভয়ে সে পাহারা বসিয়েছিল, তাকেই সে নিজের বিছানায় আর নিজের দস্তরখানে ছেলের মর্যাদায় বড় করল। তারপর আল্লাহ তাঁকে তাদের মাঝখান থেকে বের করে আনলেন, নবুওয়াত দিলেন, সরাসরি কথা বলার মর্যাদা দিলেন, আর ফেরত পাঠালেন এমনভাবে যে সহকারী বলতে কেবল ভাই হারূন। ফেরাউন বিদ্রোহ করেই চলল, শেষে আল্লাহ এক সকালেই সবাইকে ডুবিয়ে দিলেন। ইবনে কাসীর শেষ করেন ৬:৪৫ আয়াত দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Cloak Nobody Shares",
          "bn": "যে চাদরে কারো ভাগ নেই"
        },
        "p": [
          {
            "en": "None of the seven commentaries consulted for this verse attaches a prophetic narration to it. At-Tabari carries a report from Qatadah and several from Mujahid, but those are explanations of a word by men of the generation after the Companions, not sayings of the Prophet ﷺ. Two sound narrations stand beside the verse's own vocabulary, and both are brought here on that footing, as a general principle rather than as reports the commentators tie to this ayah.",
            "bn": "এই আয়াতের জন্য যে সাতটি তাফসীর দেখা হয়েছে, তার একটিও এখানে কোনো হাদিস জুড়ে দেয় না। তাবারী কাতাদা থেকে একটি আর মুজাহিদ থেকে কয়েকটি বর্ণনা আনেন, কিন্তু সেগুলো সাহাবীদের পরের প্রজন্মের লোকদের করা শব্দের ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। তবে আয়াতের নিজের শব্দগুলোর পাশে রাখা যায় দুটি সহীহ বর্ণনা। দুটিকেই এখানে আনা হচ্ছে সাধারণ নীতি হিসেবে; মুফাসসিররা এগুলোকে এই আয়াতের সঙ্গে জুড়েছেন, এমন দাবি করে নয়।"
          },
          {
            "en": "Sahih Muslim 2620, from Abu Sa'id al-Khudri and Abu Hurayrah (RA): the Prophet ﷺ said that Allah, the Exalted and Glorious, said, Glory is His lower garment and Majesty is His cloak, and he who contends with Me in regard to them I shall torment him. The word rendered Majesty is al-kibriya', the same word the chiefs place in the hands of two men, and the word rendered cloak is rida', which nobody wears but its owner. Muslim gives no grading beyond putting it in his Sahih.",
            "bn": "সহীহ মুসলিম ২৬২০, আবু সাঈদ খুদরী আর আবু হুরায়রা (রাঃ) থেকে: নবী ﷺ বলেছেন, আল্লাহ তাআলা বলেন, সম্মান আমার লুঙ্গি আর মহত্ত্ব আমার চাদর; যে এ দুটি নিয়ে আমার সঙ্গে টানাটানি করবে, আমি তাকে শাস্তি দেব। মহত্ত্ব বলে যে শব্দটা এসেছে সেটা আল-কিবরিয়া, প্রধানরা যে শব্দটা দুজন মানুষের হাতে তুলে দিচ্ছে; আর চাদর বলে যে শব্দটা এসেছে সেটা রিদা, যে কাপড় মালিক ছাড়া কেউ গায়ে দেয় না। নিজের সহীহ গ্রন্থে রাখা ছাড়া মুসলিম আলাদা করে কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "The other is Sahih Muslim 91, from Abdullah ibn Mas'ud (RA): he who has in his heart the weight of a mustard seed of pride shall not enter Paradise. A man said, verily a person loves that his dress should be fine and his shoes should be fine. He said, verily Allah is Graceful and He loves Grace; pride is disdaining the truth and contempt for the people. The word rendered pride is kibr, from which at-Tabari derived kibriya', and both halves of that definition sit inside our verse.",
            "bn": "অন্যটি সহীহ মুসলিম ৯১, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে: যার অন্তরে সরিষার দানা পরিমাণ অহংকার আছে সে জান্নাতে ঢুকবে না। একজন বলল, মানুষ তো চায় তার কাপড় সুন্দর হোক, তার জুতা সুন্দর হোক। তিনি বললেন, আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন; অহংকার হল সত্যকে তুচ্ছ করা আর মানুষকে হেয় করা। অহংকার বলে যে শব্দটা এসেছে সেটা কিবর, তাবারী যেটা থেকে কিবরিয়া শব্দটার গঠন বের করেছেন; আর এই সংজ্ঞার দুই ভাগই আমাদের আয়াতের ভেতরে বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fathers, and Another Turning",
          "bn": "বাপ-দাদা, আর আরেক ফেরানো"
        },
        "p": [
          {
            "en": "The first defence has its own family of verses. In 2:170, told to follow what Allah has revealed, they answer that they will follow what they found their fathers doing, and the verse replies that their fathers understood nothing. 5:104 has the shorter form, sufficient for us is that upon which we found our fathers. 31:21 adds the sting, even if Satan was inviting them to the punishment of the Blaze. 43:23 shows it is no single nation's habit, and 7:70 puts almost our own sentence to Hud (AS).",
            "bn": "প্রথম ঢালটার নিজস্ব একদল আয়াত আছে। ২:১৭০ আয়াতে আল্লাহ যা নাজিল করেছেন তা মেনে চলতে বলা হলে তারা জবাব দেয়, বাপ-দাদাকে আমরা যা করতে দেখেছি তা-ই মানব; আয়াত পাল্টা বলে, তাদের বাপ-দাদারা তো কিছুই বুঝত না। ৫:১০৪ আয়াতে কথাটা আরও ছোট: বাপ-দাদাকে যে পথে পেয়েছি, সেটাই আমাদের জন্য যথেষ্ট। ৩১:২১ আয়াত খোঁচাটা জুড়ে দেয়: শয়তান যদি তাদের জ্বলন্ত আগুনের শাস্তির দিকে ডাকে, তবুও কি? ৪৩:২৩ আয়াত দেখায়, এটা কোনো একটি জাতির অভ্যাস নয়। আর ৭:৭০ আয়াতে হূদ (আ)-কে প্রায় হুবহু আমাদের আয়াতের কথাটাই শোনানো হয়।"
          },
          {
            "en": "The second defence stays close to Pharaoh. 20:57 has him ask Musa directly whether he has come to drive them from their land by his magic, which is as-Sa'di's reading of our clause spoken plainly. 26:35 repeats the charge to the chiefs, and 7:123 swings it onto the magicians the moment they believe. Ibn Kathir, on their words two verses before ours, says they spoke as though swearing while knowing it was a lie, and cites 27:14. Then 7:146 answers from the other side with both of our roots: Allah turns away from His signs those arrogant in the land without right.",
            "bn": "দ্বিতীয় ঢালটা ফেরাউনের গা ঘেঁষেই থাকে। ২০:৫৭ আয়াতে সে মূসাকে সরাসরি জিজ্ঞেস করে, তুমি কি যাদুর জোরে আমাদের দেশ থেকে আমাদের বের করে দিতে এসেছ; সা'দী আমাদের বাক্যটার যে অর্থ করেন, এ যেন সেটাই খোলাখুলি বলা। ২৬:৩৫ আয়াতে অভিযোগটা প্রধানদের কানে তোলা হয়, আর ৭:১২৩ আয়াতে যাদুকররা ঈমান আনতেই সেটা ঘুরে যায় তাদের দিকে। আমাদের আয়াতের দুই আয়াত আগের কথাটা নিয়ে ইবনে কাসীর বলেন, তারা এমনভাবে বলল যেন কসম খাচ্ছে, অথচ জানত কথাটা মিথ্যা; আর পক্ষে আনেন ২৭:১৪ আয়াত। এরপর ৭:১৪৬ আয়াত উল্টো দিক থেকে জবাব দেয় আমাদের দুই ধাতু দিয়েই: যারা অন্যায়ভাবে যমীনে অহংকার করে, আল্লাহ তাদের নিজের নিদর্শন থেকে ফিরিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Answer the Claim First",
          "bn": "আগে দাবিটার জবাব দিন"
        },
        "p": [
          {
            "en": "Before any use is made of it, a limit. The verse records what one court said to two prophets. It describes the people the text describes, licenses no application to any living community, and hands no reader a verdict to carry out. What it leaves in a reader's hands is the shape of the two defences. The first is the one nobody admits to. Few say aloud that a practice must be right because the family always did it; the reasoning runs silently and surfaces as irritation when somebody asks.",
            "bn": "কাজে লাগানোর আগে একটা সীমা। আয়াতটি লিখে রাখে এক দরবার দুজন নবীকে কী বলেছিল। কুরআন যাদের কথা বলছে আয়াত তাদেরই বর্ণনা দেয়; আজকের কোনো জনগোষ্ঠীর গায়ে এটা বসানোর অনুমতি এখানে নেই, আর কারো হাতে কার্যকর করার মতো ফয়সালাও এটি তুলে দেয় না। পাঠকের হাতে যা থেকে যায় তা হল ওই দুই ঢালের চেহারা। প্রথমটা এমন ঢাল যেটার কথা কেউ স্বীকার করে না। খুব কম মানুষই মুখে বলে যে ঘরে চলে আসছে বলেই কাজটা ঠিক; হিসাবটা চলে মনে মনে, আর কেউ প্রশ্ন করলে সেটা বেরিয়ে আসে বিরক্তি হয়ে।"
          },
          {
            "en": "The test is small. Take one religious habit you are firm about and ask what you would show a sincere questioner besides your upbringing. Where a text turns up, the habit has been strengthened; where none does, nothing must be dropped, but something stops being defended as though it came down from heaven. The second defence comes out faster and feels like cleverness. Someone quotes a verse and the reply names his character. As-Sa'di's sentence is the discipline: even if the guess is right, the claim is still standing. Answer the claim first.",
            "bn": "পরীক্ষাটা ছোট। দীনের এমন একটা অভ্যাস নিন যেটা নিয়ে আপনি শক্ত, আর নিজেকে জিজ্ঞেস করুন, আন্তরিক কোনো প্রশ্নকারীকে বাড়ির চল ছাড়া আর কী দেখাতে পারবেন। দলিল পাওয়া গেলে অভ্যাসটা আরও মজবুত হল; না পাওয়া গেলে কিছু ছাড়তে হবে না, শুধু ওটাকে আর আসমান থেকে নেমে আসা জিনিসের মতো আগলানো বন্ধ হবে। দ্বিতীয় ঢালটা বেরোয় আরও তাড়াতাড়ি, আর শুনতে বুদ্ধিমানের মতো লাগে। কেউ আয়াত তুলে ধরল, জবাবে এল তার চরিত্রের কথা। সা'দীর বাক্যটাই এখানে নিয়ম: আন্দাজটা ঠিক হলেও দাবিটা তো রয়েই গেল। আগে দাবিটার জবাব দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Next Argument",
          "bn": "পরের তর্কটার আগে"
        },
        "p": [
          {
            "en": "None of the commentaries consulted attaches a narrated supplication to this verse, so what follows is composed here from its own words and offered as that, not as a Sunnah text. O Allah, to You belongs al-kibriya' in the heavens and the earth, and no part of it is anyone else's to want. Do not let me answer Your truth with what my fathers did, nor push it away by guessing at whoever carries it, and if I have been turned, turn me back. 45:37 gives the opening clause.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে তার কোনোটিই এই আয়াতের সঙ্গে বর্ণিত কোনো দোয়া জোড়েনি। তাই নিচের দোয়াটি আয়াতের নিজের শব্দ দিয়ে এখানেই সাজানো, আর সেভাবেই পেশ করা হচ্ছে, সুন্নাহর দোয়া হিসেবে নয়। হে আল্লাহ, আসমান ও যমীনে আল-কিবরিয়া আপনারই, এর এক কণাও আর কারো চাওয়ার জিনিস নয়। আপনার সত্যের জবাবে আমাকে বাপ-দাদার আমল তুলে ধরতে দেবেন না, আর যে সেটা বয়ে আনে তার মতলব আন্দাজ করে সত্যটাকে সরিয়ে দিতেও দেবেন না; আমি যদি ফিরে গিয়েই থাকি, আমাকে ফিরিয়ে আনুন। প্রথম কথাটা ৪৫:৩৭ আয়াতের।"
          },
          {
            "en": "Four questions to carry. Which of my settled religious positions could I defend to a sincere questioner with something other than the fact that this is how it has always been done at home? When did somebody last bring me evidence and I answered by talking about them rather than it? Supposing that person really was right about my motive, what still has to be done about the evidence? And Musa (AS) was charged with wanting greatness in the land, so what in my own week would answer that charge about me?",
            "bn": "চারটি প্রশ্ন সঙ্গে নিন। দীনের যেসব মতে আমি থিতু হয়ে আছি, তার কোনটার পক্ষে আন্তরিক কোনো প্রশ্নকারীকে আমি ‘আমাদের ঘরে বরাবর এভাবেই হয়ে আসছে’ ছাড়া অন্য কিছু দেখাতে পারব? শেষ কবে কেউ আমার সামনে দলিল রেখেছিল, আর আমি দলিলটা নিয়ে কথা না বলে মানুষটাকে নিয়ে কথা বলেছিলাম? ধরা যাক, আমার মতলব নিয়ে তার আন্দাজ সত্যিই ঠিক ছিল; তবু দলিলটার ব্যাপারে কী করার বাকি থাকে? আর মূসা (আ)-এর নামে অপবাদ উঠেছিল যে তিনি দেশে বড় হয়ে বসতে চান; আমার নামে একই অপবাদ উঠলে আমার এই সপ্তাহের কোন কাজটা তার জবাব দেবে?"
          }
        ]
      }
    ]
  },
  "10:81": {
    "sections": [
      {
        "h": {
          "en": "The Moment After They Threw",
          "bn": "ছোড়া হয়ে যাওয়ার পরের মুহূর্ত"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan. The Musa (AS) passage opens at 10:75, where he and Harun (AS) are sent to Pharaoh and his establishment with Our signs, and are met with arrogance. 10:76 records the charge everything after it answers: when the truth came to them from Us, they said this is obvious magic. 10:77 has Musa ask whether they say that of the truth once it has reached them, and states that magicians will not succeed. 10:79 is Pharaoh's order to bring every learned magician, and 10:80 is Musa telling them to throw.",
            "bn": "সূরা ইউনুস মাক্কী। মূসা (আঃ)-এর ঘটনা শুরু হয় ১০:৭৫ আয়াতে, যেখানে তাঁকে আর হারূন (আঃ)-কে আমার নিদর্শন দিয়ে ফেরাউন ও তার পারিষদের কাছে পাঠানো হয়, আর সেখানে অহংকারই জোটে। ১০:৭৬ আয়াত সেই অভিযোগটা তুলে ধরে, এরপরের পুরোটা জুড়ে যার জবাব চলে: আমার কাছ থেকে সত্য যখন তাদের কাছে পৌঁছল, তারা বলল, এটা তো সুস্পষ্ট যাদু। ১০:৭৭ আয়াতে মূসা (আঃ) জিজ্ঞেস করেন, সত্য এসে যাওয়ার পরও কি তোমরা তার সম্পর্কে এ কথা বলছ, আর বলেন, যাদুকররা সফল হবে না। ১০:৭৯ আয়াতে ফেরাউনের হুকুম, প্রত্যেক পারদর্শী যাদুকরকে নিয়ে এসো। আর ১০:৮০ আয়াতে মূসা (আঃ) তাদের বলেন, ছোড়ো।"
          },
          {
            "en": "Our verse is what he says once the ropes are down. 10:82 finishes the speech with the other side of the verdict, that Allah will establish the truth by His words even if the criminals dislike it. 10:83 then leaves the contest and counts who believed. None of the six Arabic commentaries consulted for this verse reports an occasion of revelation, and the tafsir page consulted carries nothing from al-Wahidi. Placement is the context: a Makkan surah is showing Makkah an older audience that called revelation magic.",
            "bn": "দড়িগুলো মাটিতে পড়ার পর মূসা যা বলেন, সেটাই আমাদের আয়াত। ১০:৮২ আয়াতে কথাটা শেষ হয় রায়ের অন্য দিকটা দিয়ে: অপরাধীদের যতই খারাপ লাগুক, আল্লাহ তাঁর বাণী দিয়ে সত্যকে প্রতিষ্ঠিত করবেন। ১০:৮৩ আয়াতে সূরা প্রতিযোগিতা ছেড়ে হিসাব নেয়, কারা ঈমান আনল। এই আয়াতের জন্য দেখা ছয়টি আরবি তাফসীরের একটিও শানে নুযূল জানায় না, আর যে তাফসীরপাতা দেখা হয়েছে সেখানেও ওয়াহিদীর কিছু নেই। তাই আয়াতের অবস্থানটাই প্রেক্ষাপট: মক্কী সূরাটি মক্কাকে দেখাচ্ছে আগের কালের এমন এক জনগোষ্ঠীকে, যারাও ওহিকে যাদু বলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Seventeen Words, One Verdict",
          "bn": "সতেরো শব্দ, একটি রায়"
        },
        "p": [
          {
            "en": "The verse runs to 17 Arabic words in the text of surah Yunus, with 2 pause marks printed in the line and not counted among them. Musa's sentence falls into three short parts. First the naming: ma ji'tum bihi as-sihr, what you have brought is the magic. Then the disposal: inna Allaha sayubtiluhu, indeed Allah will nullify it. Then the reason, put not as a forecast about these men but as a standing rule about a class: inna Allaha la yuslihu amala al-mufsidin.",
            "bn": "সূরা ইউনুসের পাঠে আয়াতটি ১৭টি আরবি শব্দের, আর লাইনে ছাপা ২টি ওয়াক্ফ চিহ্ন এই গোনায় ধরা হয়নি। মূসা (আঃ)-এর কথাটা তিনটি ছোট ভাগে পড়ে। প্রথমে নাম ধরিয়ে দেওয়া: মা জি'তুম বিহিস সিহর, তোমরা যা এনেছ সেটাই সেই যাদু। তারপর তার ব্যবস্থা: ইন্নাল্লাহা সাইউবতিলুহু, নিশ্চয় আল্লাহ একে ব্যর্থ করে দেবেন। তারপর কারণ, যা এই লোকগুলোকে নিয়ে ভবিষ্যদ্বাণী নয়, বরং গোটা এক শ্রেণি সম্পর্কে বাঁধা নিয়ম: ইন্নাল্লাহা লা ইউসলিহু আমালাল মুফসিদীন।"
          },
          {
            "en": "Sayubtiluhu carries the root b-t-l, the root of batil, what is void and has no substance in it. at-Tabari glosses the verb with sayudhhibu bihi, He will take it away, and adds that He did, by setting Musa's staff, turned serpent, over it until nothing remained. al-Jalalayn glosses it briefly: He will efface it. The prefix sa- puts the effacing in the future, so Musa announces the outcome while the floor still belongs to the other side.",
            "bn": "সাইউবতিলুহু শব্দের ধাতু বা-তা-লাম, বাতিল শব্দেরও সেই ধাতু, যার মানে যা ফাঁপা, ভেতরে কিছুই নেই। তাবারী ক্রিয়াটির ব্যাখ্যায় বলেন সাইউযহিবু বিহি, তিনি একে সরিয়ে নেবেন, আর বলেন তিনি সরিয়েও নিলেন, মূসা (আঃ)-এর লাঠিকে সাপ বানিয়ে তার উপর চাপিয়ে দিয়ে, যতক্ষণ না কিছুই বাকি থাকল। জালালাইন সংক্ষেপে বলে, তিনি একে মুছে দেবেন। সা উপসর্গটি মোছার কাজ ভবিষ্যতে রাখে, তাই মূসা (আঃ) ফল ঘোষণা করছেন এমন সময়ে যখন মাঠটা তখনো অন্য পক্ষের দখলে।"
          },
          {
            "en": "The last clause sets two words from opposite roots against each other. Yuslihu is from s-l-h, to make sound, to set right, to mend. Al-mufsidin is the participle from f-s-d, those who spoil what was sound. Holding the mending verb and the spoiling participle in one short clause makes the denial exact: what a corrupter most wants, that his work come out sound and hold, is what is withheld. al-Muyassar reads al-mufsidin as whoever strives in Allah's earth with what He hates.",
            "bn": "শেষ বাক্যাংশে উল্টো দুই ধাতুর দুটি শব্দ মুখোমুখি বসে। ইউসলিহু এসেছে সা-লা-হা ধাতু থেকে: ঠিক করা, সুস্থ করা, মেরামত করা। আল-মুফসিদীন এসেছে ফা-সা-দা ধাতু থেকে: যারা ভালো জিনিস নষ্ট করে। মেরামতের ক্রিয়া আর নষ্টকারীদের নাম একই ছোট বাক্যাংশে পাশাপাশি রাখায় আল্লাহর এই ‘না’ একেবারে মাপমতো বসে। ফাসাদকারী সবচেয়ে বেশি যা চায়, তার কাজ যেন ঠিকঠাক দাঁড়ায় আর টিকে থাকে, ঠিক সেটাই তাকে দেওয়া হয় না। মুয়াসসার আল-মুফসিদীন বলতে বোঝায় তাদের, যারা আল্লাহর জমিনে তাঁর অপছন্দের কাজে ছুটে বেড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Statement or a Question",
          "bn": "সংবাদ, নাকি প্রশ্ন"
        },
        "p": [
          {
            "en": "The commentators record a real difference over how the opening clause is read, and it changes Musa's tone. at-Tabari reports that the general body of the reciters of the Hijaz and of Iraq read ma ji'tum bihi as-sihr as a statement: what you magicians have brought is the magic. Mujahid, with some reciters of Madinah and Basra, read it as a question, a-s-sihr, is it magic? al-Baghawi names Abu Amr and Abu Ja'far for the questioning reading, and al-Qurtubi names Abu Amr too.",
            "bn": "আয়াতের শুরুর অংশটা কীভাবে পড়া হবে, তা নিয়ে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর তাতে মূসা (আঃ)-এর গলার সুরই বদলে যায়। তাবারী জানান, হিজায আর ইরাকের অধিকাংশ কারী মা জি'তুম বিহিস সিহর পড়েছেন সংবাদ হিসেবে: হে যাদুকররা, তোমরা যা এনেছ সেটাই সেই যাদু। মুজাহিদ এবং মদীনা ও বসরার কিছু কারী পড়েছেন প্রশ্ন হিসেবে, আস-সিহর, এটা কি যাদু? বাগাবী প্রশ্নবোধক কিরাআতের জন্য আবু আমর আর আবু জাফরের নাম নেন, কুরতুবীও আবু আমরের নাম নেন।"
          },
          {
            "en": "at-Tabari does not leave the two readings level. The statement is the sounder, he holds, because Musa was not in doubt that what the magicians brought was magic, so he had no need to ask what it was; he already knew who they were and why Pharaoh had consulted them. al-Jalalayn sets out both readings without preferring either. at-Tabari then adds what settled it for him: Ubayy ibn Ka'b (RA) read ma ataytum bihi sihrun and Ibn Mas'ud (RA) read ma ji'tum bihi sihrun, both indefinite, which only the statement allows.",
            "bn": "তাবারী দুটি কিরাআতকে সমান ওজনে রাখেন না। তাঁর মতে সংবাদের পড়াটাই বেশি শক্ত। কারণ যাদুকররা যা এনেছিল তা যে যাদু, এ নিয়ে মূসা (আঃ)-এর কোনো সন্দেহ ছিল না, তাই ওটা কী, তা জিজ্ঞেস করার দরকারও তাঁর ছিল না। ওরা কারা আর ফেরাউন কেন ওদের আনিয়েছে, তাও তিনি জানতেন। জালালাইন দুটি কিরাআতই তুলে ধরে, কোনোটির পক্ষ নেয় না। এরপর তাবারী জানান, কোন দলিলে বিষয়টা তাঁর কাছে মীমাংসা হল: উবাই ইবনে কা'ব (রাঃ) পড়তেন মা আতাইতুম বিহি সিহরুন, আর ইবনে মাসউদ (রাঃ) পড়তেন মা জি'তুম বিহি সিহরুন। দুটিতেই শব্দটা অনির্দিষ্ট, আর অনির্দিষ্ট রূপ কেবল সংবাদের পড়াতেই খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving Back Their Own Word",
          "bn": "তাদের শব্দ তাদেরই ফেরত"
        },
        "p": [
          {
            "en": "There is a small grammatical question here that at-Tabari turns into the point of the verse. Why is sihr definite, with the alif-lam, when Arabic normally leaves such a predicate indefinite: what Amr brought me is a dirham, rather than the dirham? Because, he answers, the definite article belongs in the predicate of ma and alladhi when the predicate names something already known to speaker and addressee alike. And here it was known to both sides.",
            "bn": "এখানে ব্যাকরণের ছোট এক প্রশ্ন আছে, যাকে তাবারী আয়াতের মূল কথায় পরিণত করেন। সিহর শব্দটি আলিফ-লাম নিয়ে নির্দিষ্ট কেন, অথচ আরবিতে এ ধরনের খবর সাধারণত অনির্দিষ্ট থাকে, আমর আমাকে যা এনে দিয়েছে তা দিরহাম, সেই দিরহাম নয়? তাঁর জবাব, মা আর আল্লাযীর খবরে আলিফ-লাম তখনই বসে, যখন খবরটা এমন জিনিসের নাম নেয় যা বক্তা আর শ্রোতা দুজনেরই আগে থেকে জানা। আর এখানে দুই পক্ষেরই জানা ছিল।"
          },
          {
            "en": "What they already knew was their own word for it. In 10:76 the magicians and their masters had applied sihr to the signs Musa brought, this is obvious magic. So Musa is not introducing a term; he is handing their own term back. at-Tabari spells the sense out: the magic you described my signs with, magicians, is what you yourselves have brought, not what I brought you. al-Qurtubi hears the clause differently, reading ma as a question of reproach and belittlement. Both readings keep the contempt.",
            "bn": "তারা আগে থেকে যা জানত, সেটা তাদের নিজেদের দেওয়া নামই। ১০:৭৬ আয়াতে যাদুকর আর তাদের মনিবরা মূসা (আঃ)-এর আনা নিদর্শনকেই সিহর বলেছিল, এটা তো সুস্পষ্ট যাদু। তাই মূসা (আঃ) নতুন কোনো শব্দ চালু করছেন না, তাদের শব্দটাই তাদের হাতে ফিরিয়ে দিচ্ছেন। তাবারী অর্থটা খুলে বলেন: হে যাদুকররা, আমার নিদর্শনকে তোমরা যে যাদু বলেছিলে, সেই যাদু তোমরা নিজেরাই এনেছ, আমি যা এনেছি তা নয়। কুরতুবী বাক্যাংশটা অন্যভাবে শোনেন, মা-কে তিনি পড়েন তিরস্কার আর ছোট করে দেখানোর প্রশ্ন হিসেবে। দুই পড়াতেই অবজ্ঞাটা থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Corrupters and Those Who Mend",
          "bn": "ফাসাদ আর সংশোধনের দুই দল"
        },
        "p": [
          {
            "en": "as-Sa'di does not minimise what the magicians achieved. They cast their ropes and their staffs, and at once these were as though they were snakes moving; this, he says, is the real and immense magic. And with all its greatness, Allah will nullify it. He gives the reason as a law rather than a remark about that afternoon: what they intended by it was the victory of falsehood over truth, and what corruption, he asks, is greater than that?",
            "bn": "সা'দী যাদুকররা যা করেছিল তাকে ছোট করে দেখান না। তারা তাদের দড়ি আর লাঠি ছুড়ল, আর সঙ্গে সঙ্গে সেগুলো যেন ছুটে চলা সাপ হয়ে গেল। তাঁর ভাষায়, এটাই আসল আর বিরাট যাদু। এত বড় হওয়ার পরও আল্লাহ একে ব্যর্থ করে দেবেন। কারণটা তিনি সেদিনের মন্তব্য হিসেবে নয়, নিয়ম হিসেবে বলেন। ওরা এর দ্বারা চেয়েছিল সত্যের উপর মিথ্যার জয়, আর তিনি প্রশ্ন করেন, এর চেয়ে বড় ফাসাদ আর কী হতে পারে?"
          },
          {
            "en": "He extends it in both directions. Every corrupter's deed, scheme or trick will be nullified and will dissolve, and if it gains currency for a while, its end is still collapse and effacement. Those who mend, whose works aim at the face of Allah and are beneficial and commanded, have their works set right by Allah, raised and made to grow continually. Ibn Kathir describes the same day by its outcome: Pharaoh wanted to dazzle the people against the plain truth, and the result came out the exact opposite.",
            "bn": "তিনি কথাটা দুই দিকেই টেনে নেন। ফাসাদকারীর প্রতিটি কাজ, ফন্দি বা চালাকি ব্যর্থ হবে, গলে মিলিয়ে যাবে। কিছুদিন বাজার পেলেও শেষে তা ভেঙে পড়বে, মুছে যাবে। আর যারা সংশোধন করে, যাদের আমল আল্লাহর সন্তুষ্টির জন্য, উপকারী আর আল্লাহর হুকুম মোতাবেক, আল্লাহ তাদের আমল ঠিকঠাক করে দেন, উঁচু করেন আর অবিরাম বাড়িয়ে দেন। ইবনে কাসীর সেই দিনটাকে বোঝান তার ফল দিয়ে: ফেরাউন চেয়েছিল খোলা সত্যের বিপরীতে লোকের চোখ ধাঁধিয়ে দিতে, আর ফল দাঁড়াল ঠিক উল্টো।"
          }
        ]
      },
      {
        "h": {
          "en": "No Narration Attached Here",
          "bn": "এখানে কোনো হাদিস জোড়া নেই"
        },
        "p": [
          {
            "en": "Not a single commentary consulted for this verse brings a narration from the Prophet ﷺ on it. Ibn Kathir builds his treatment out of other verses instead: he places 20:67, where Musa sensed apprehension within himself, just before this moment, and 7:120, where the magicians fell down in prostration, just after it. That is worth saying plainly, because this subject attracts material from every direction. What the verse has is the Quran's own cross-referencing, and that is enough.",
            "bn": "এই আয়াতের জন্য দেখা কোনো তাফসীরই নবী ﷺ থেকে কোনো হাদিস আনে না। ইবনে কাসীর বরং আলোচনা গড়েন অন্য আয়াত দিয়ে। এই মুহূর্তের ঠিক আগে তিনি রাখেন ২০:৬৭ আয়াত, যেখানে মূসা (আঃ) মনের ভেতরে ভয় অনুভব করেন, আর ঠিক পরে ৭:১২০ আয়াত, যেখানে যাদুকররা সিজদায় লুটিয়ে পড়ে। কথাটা খোলাখুলি বলা দরকার, কারণ এই বিষয়টার গায়ে চারদিক থেকে অনেক কিছু এসে জোটে। আয়াতের পক্ষে আছে কুরআনের নিজেরই আয়াতে আয়াতে মিল, আর ততটুকুই যথেষ্ট।"
          },
          {
            "en": "Two things the commentaries do attach here are not prophetic, and naming them for what they are is the honest course. al-Qurtubi reports a saying of Ibn Abbas (RA) about reciting this verse at bedtime. Ibn Kathir, by way of Ibn Abi Hatim, carries a line from Layth ibn Abi Sulaym opening with it reached me, its source unnamed, about these verses being recited over water. Neither is traced to the Prophet ﷺ, the second is a balagh with no named authority, and no practice is recommended here on their strength.",
            "bn": "তাফসীরগুলো এখানে দুটি জিনিস জুড়ে দেয়, কিন্তু কোনোটিই নবী ﷺ-এর কথা নয়। সেগুলোর আসল পরিচয় খুলে বলাই সততা। কুরতুবী ইবনে আব্বাস (রাঃ)-এর একটি কথা আনেন, রাতে শোয়ার সময় এই আয়াত পড়া নিয়ে। ইবনে কাসীর ইবনে আবী হাতিমের সূত্রে লাইস ইবনে আবী সুলাইমের একটি কথা আনেন, যার শুরু ‘আমার কাছে পৌঁছেছে’ দিয়ে, উৎসের নাম নেই; তাতে বলা হয়েছে, এই আয়াতগুলো পানির উপর পড়া হয়। দুটির কোনোটিই নবী ﷺ পর্যন্ত পৌঁছায় না, দ্বিতীয়টি নামহীন সূত্রের বালাগ, আর এগুলোর জোরে এখানে কোনো আমলের পরামর্শ দেওয়া হচ্ছে না।"
          },
          {
            "en": "A sound narration can still be set beside a verse as a general principle, so long as it is marked as not attached to it. Sahih Muslim records from A'isha (RA) that the Messenger of Allah ﷺ said: He who did any act for which there is no sanction from our behalf, that is to be rejected. No commentator quotes it here. It is brought only because it states in worship what Musa states on the day of the contest: work Allah has not sanctioned is not made to stand.",
            "bn": "সহীহ কোনো হাদিস আয়াতের পাশে সাধারণ নীতি হিসেবে রাখা যায়, শর্ত এই যে বলে দিতে হবে সেটা আয়াতের সঙ্গে জোড়া নয়। সহীহ মুসলিমে আয়িশা (রাঃ) থেকে এসেছে, রাসূলুল্লাহ ﷺ বলেছেন: যে এমন কোনো কাজ করল যাতে আমাদের অনুমোদন নেই, তা প্রত্যাখ্যাত। কোনো তাফসীরকার এই আয়াতে এটি আনেননি। আনা হলো কেবল এ কারণে যে ইবাদতের ক্ষেত্রে সেটা সেই কথাই বলে, প্রতিযোগিতার দিনে মূসা (আঃ) যা বললেন: আল্লাহ যে কাজের অনুমোদন দেননি সেটা দাঁড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Foam and What Remains",
          "bn": "ফেনা আর যা টিকে থাকে"
        },
        "p": [
          {
            "en": "10:82 is the other half of Musa's sentence and should be heard with it: Allah will establish the truth by His words, even if the criminals dislike it. 8:8 puts the same pair of verbs into Allah's own arranging of a battle, that He should establish the truth and abolish falsehood even if the criminals disliked it, so the clause is not peculiar to Egypt. And 13:17 draws the picture: the torrent carries a rising foam, and the foam vanishes, cast off, while what benefits people stays in the earth.",
            "bn": "১০:৮২ আয়াত মূসা (আঃ)-এর কথার বাকি অর্ধেক, আর দুটো একসঙ্গেই শোনা উচিত: আল্লাহ তাঁর বাণী দিয়ে সত্যকে প্রতিষ্ঠিত করবেন, অপরাধীদের যতই খারাপ লাগুক। ৮:৮ আয়াত একই জোড়া ক্রিয়াকে বসায় আল্লাহর নিজের যুদ্ধ-পরিকল্পনার ভেতরে, যাতে তিনি সত্যকে সত্য হিসেবে দাঁড় করান আর মিথ্যাকে মিথ্যা প্রমাণ করেন, পাপীদের যতই অপছন্দ হোক। তাই কথাটা মিশরের জন্য বাঁধা নয়। আর ১৩:১৭ আয়াত ছবিটা এঁকে দেয়: বানের পানি উপরে ফেনা তোলে, সেই ফেনা উড়ে চলে যায়, আর যা মানুষের কাজে লাগে তা জমিনে থেকে যায়।"
          },
          {
            "en": "Two more verses fill in the human side. 2:220 says that Allah knows the corrupter from the amender, so these are categories He sorts, not labels people award themselves. And 7:142, still inside the story of Musa (AS), has him leaving Harun (AS) in charge with an instruction using both roots at once: set things right, and do not follow the way of the corrupters. The vocabulary of our verse turns up as a standing order to a prophet's deputy.",
            "bn": "আরও দুটি আয়াত মানুষের দিকটা পূর্ণ করে। ২:২২০ আয়াত বলে, আল্লাহ জানেন কে ফাসাদকারী আর কে সংশোধনকারী। অর্থাৎ এ দুটি শ্রেণি তিনিই আলাদা করেন; মানুষ নিজের গায়ে যে লেবেল সেঁটে নেয়, এগুলো তা নয়। আর ৭:১৪২ আয়াতে, মূসা (আঃ)-এর ঘটনার ভেতরেই, তিনি হারূন (আঃ)-কে দায়িত্বে রেখে যাওয়ার সময় এমন নির্দেশ দেন যাতে দুই ধাতুই একসঙ্গে আছে: সংশোধন কর, আর ফাসাদ সৃষ্টিকারীদের পথ অনুসরণ করো না। আমাদের আয়াতের শব্দগুলোই সেখানে নবীর প্রতিনিধির জন্য স্থায়ী হুকুম হয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where This Verse Is Lived",
          "bn": "এই আয়াত যেখানে কাজে লাগে"
        },
        "p": [
          {
            "en": "The first use of the verse is restraint. Musa names the thing, then names who will deal with it, and those are not the same party. A believer watching something false succeed in public is not obliged to be its undoing. He is obliged to call it by its name and keep doing his own work. Much of the exhaustion in religious argument comes from taking on a task this verse assigns to Allah. Say what is true, and let the collapse arrive on its own schedule.",
            "bn": "আয়াতের প্রথম কাজটা নিজেকে সামলানো। মূসা (আঃ) জিনিসটার নাম বলেন, তারপর বলেন কে এর ব্যবস্থা নেবে, আর এ দুই পক্ষ এক নয়। কোনো মিথ্যাকে লোকের সামনে জিততে দেখলে মুমিনের উপর এই দায় পড়ে না যে তাকেই ওটা ফেলে দিতে হবে। তার দায় নাম ধরে বলে দেওয়া আর নিজের কাজটা চালিয়ে যাওয়া। দীনি তর্কে যে ক্লান্তি জমে, তার অনেকটাই আসে আয়াতটি যে কাজ আল্লাহর উপর রেখেছে সেটা নিজের কাঁধে তুলে নেওয়া থেকে। সত্যটা বলুন, আর ভাঙনটা তার নিজের সময়ে আসতে দিন।"
          },
          {
            "en": "The second use turns the verse inward, and this is where as-Sa'di's reading bites. The clause is not only about other people's projects. Before asking whether a rival enterprise is the work of corrupters, a reader should ask what his own work rests on, because the same rule governs it. A business, a reputation, a marriage or a public role built on something false is not waiting for an enemy; it is waiting for time. The verse offers no technique against this. It offers a side to be on.",
            "bn": "দ্বিতীয় কাজটা আয়াতটাকে ভেতরের দিকে ঘোরায়, আর এখানেই সা'দীর পড়াটা কামড় বসায়। বাক্যাংশটা কেবল অন্যের কারবার নিয়ে নয়। প্রতিদ্বন্দ্বী কোনো উদ্যোগ ফাসাদ সৃষ্টিকারীদের কাজ কিনা তা জিজ্ঞেস করার আগে পাঠকের জিজ্ঞেস করা উচিত, তার নিজের কাজটা কিসের উপর দাঁড়ানো, কারণ সেটার উপরও একই নিয়ম চলে। মিথ্যার উপর গড়া ব্যবসা, সুনাম, সংসার বা সমাজের কোনো পদ শত্রুর অপেক্ষায় থাকে না, সময়ের অপেক্ষায় থাকে। আয়াতটি এর বিরুদ্ধে কোনো কৌশল দেয় না। দেয় কোন পক্ষে দাঁড়াতে হবে সেই কথাটা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer and the Questions",
          "bn": "একটি দোয়া আর কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse supplies the vocabulary for a supplication, marked as that rather than offered as a Sunnah du'a, since no narration fixes such wording. O Allah, You do not set right the work of corrupters, so do not let my work be of that kind. Make sound what I build, keep my aim on Your face, and when falsehood is loud let me name it plainly, do my own part, and leave its ending with You.",
            "bn": "আয়াতটি দোয়ার শব্দ জুগিয়ে দেয়, তবে সেভাবেই বলা দরকার, সুন্নাহর দোয়া বলে চালানো যাবে না, কারণ এমন শব্দ কোনো হাদিসে বাঁধা নেই। হে আল্লাহ, আপনি ফাসাদ সৃষ্টিকারীদের কাজ সুফলা করেন না, আমার কাজকে সেই দলে ফেলবেন না। আমি যা গড়ি তা মজবুত করে দিন, আমার নিয়ত আপনার সন্তুষ্টির দিকে ধরে রাখুন, আর মিথ্যা যখন হইচই ফেলে দেয় তখন তার নাম ধরে বলার তাওফীক দিন, নিজের ভাগের কাজটুকু করতে দিন, আর তার শেষটা আপনার হাতেই ছেড়ে রাখতে দিন।"
          },
          {
            "en": "Four questions to carry away. What have I been trying to bring down by my own strength that Musa would have named and then handed over? Is there anything in my work I would rather Allah did not examine closely, and how long have I known about it? When falsehood is visibly succeeding, does my confidence in the promise sag, and what does that tell me about where I think outcomes are decided? And which of my present efforts would still stand if everything untrue in it were removed?",
            "bn": "সঙ্গে নিয়ে যাওয়ার মতো চারটি প্রশ্ন। কোন জিনিসটা আমি নিজের জোরে ফেলে দিতে চাইছি, যেটার নাম মূসা (আঃ) বলে দিয়ে বাকিটা ছেড়ে দিতেন? আমার কাজের ভেতরে এমন কিছু কি আছে, যেদিকে আল্লাহ খুঁটিয়ে না তাকালেই আমি স্বস্তি পেতাম, আর কতদিন ধরে আমি তা জানি? মিথ্যা যখন চোখের সামনে জিতে যাচ্ছে, তখন কি ওয়াদার উপর আমার ভরসা নেমে যায়, আর তাতে বোঝা যায় ফলাফল কোথায় ঠিক হয় বলে আমি ভাবি? আর আমার এখনকার কাজগুলোর কোনটা তখনো দাঁড়িয়ে থাকত, যদি তার ভেতরের সব মিথ্যা বের করে নেওয়া হতো?"
          }
        ]
      }
    ]
  },
  "10:87": {
    "sections": [
      {
        "h": {
          "en": "Houses Before the Sea",
          "bn": "সমুদ্রের আগে ঘরের হুকুম"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and its Musa (AS) passage runs from 10:75 to 10:93. By 10:83 the tally is bleak: nobody believed him except a few youths of his own people, and they believed in fear of Pharaoh and his chiefs. In 10:84 Musa tells them to rely on Allah, and in 10:85 they answer with a prayer not to be made a trial for the wrongdoing people. Our verse arrives next, as revelation.",
            "bn": "সূরা ইউনুস মক্কী, আর এর মূসা (আ)-এর অংশটি চলে ১০:৭৫ থেকে ১০:৯৩ পর্যন্ত। ১০:৮৩ আয়াতে হিসাবটা করুণ: নিজের জাতির গুটিকয় তরুণ ছাড়া কেউ তাঁর উপর ঈমান আনেনি, আর তারাও ঈমান এনেছে ফেরাউন ও তার প্রধানদের ভয় বুকে নিয়ে। ১০:৮৪ আয়াতে মূসা তাদের বলেন, আল্লাহর উপরই ভরসা কর। ১০:৮৫ আয়াতে তারা জবাব দেয় দোয়া দিয়ে: আমাদের জালিম জাতির পরীক্ষার পাত্র বানাবেন না। এরপরই আসে আমাদের আয়াত, ওহি হয়ে।"
          },
          {
            "en": "What follows is the rescue. 10:88 is Musa's supplication against the splendour and wealth given to Pharaoh and his establishment, 10:89 tells both brothers their supplication has been answered, and 10:90 opens the sea. So the instruction about houses sits between a hunted community and its deliverance. None of the seven commentaries consulted reports an occasion of revelation, which is usual for a Makkan narrative passage. The placement is the context, and the placement is a siege.",
            "bn": "এরপর আসে উদ্ধার। ১০:৮৮ আয়াতে মূসা দু'আ করেন ফেরাউন আর তার প্রধানদের চাকচিক্য ও সম্পদের বিরুদ্ধে। ১০:৮৯ আয়াতে দুই ভাইকে জানানো হয়, তাঁদের দু'আ কবুল হয়েছে। ১০:৯০ আয়াতে সমুদ্র ফাঁক হয়ে যায়। অর্থাৎ ঘর নিয়ে হুকুমটা বসে আছে শিকার হয়ে পড়া একটা জাতি আর তার মুক্তির ঠিক মাঝখানে। দেখা সাতটি তাফসীরের একটিও কোনো শানে নুযূল জানায় না, মাক্কী কাহিনী অংশে যা সাধারণ। আয়াতের অবস্থানটাই তার প্রেক্ষাপট, আর সেই অবস্থান হল অবরোধ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dual, a Plural, a Single",
          "bn": "দ্বিবচন, বহুবচন, তারপর একবচন"
        },
        "p": [
          {
            "en": "The verse runs to 16 Arabic words in the text of surah Yunus, with one pause mark printed in the line and not counted among them. The verb at its centre is tabawwa'a, and at-Tabari and al-Baghawi both gloss it with the plainest word available, ittakhidha, take or acquire. At-Tabari gives the idiom whole: tabawwa'a fulanun li-nafsihi baytan, so-and-so took a house for himself. The sense is acquiring a place, not raising a wall.",
            "bn": "সূরা ইউনুসের পাঠে আয়াতটি ১৬টি আরবি শব্দের, আর লাইনে ছাপা একটি ওয়াকফ চিহ্ন এই গোনার বাইরে। আয়াতের কেন্দ্রে যে ক্রিয়া, সেটি তাবাওওয়াআ। তাবারী আর বাগাবী দুজনেই এর অর্থ করেন সবচেয়ে সাদামাটা শব্দ দিয়ে, ইত্তাখাযা, অর্থাৎ গ্রহণ করা, নিজের করে নেওয়া। তাবারী গোটা বাগ্‌ধারাটাই তুলে দেন: তাবাওওয়াআ ফুলানুন লিনাফসিহি বায়তান, অমুক নিজের জন্য ঘর নিল। কথাটা জায়গা হাতে নেওয়ার, দেয়াল তোলার নয়।"
          },
          {
            "en": "Al-Qurtubi adds the shade the plain gloss loses. Al-mubawwa', he says, is al-manzil al-malzum, the lodging a person is fixed to. As a witness he cites the warning confirmed at Sahih al-Bukhari 110 from Abu Hurayrah (RA): whoever tells a lie against me intentionally, let him occupy his seat in Hell-fire. The verb is not about shelter for a night but about settling and staying, strange to command a people whose hope was to leave.",
            "bn": "সাদামাটা অর্থে যে সূক্ষ্ম ভাবটুকু হারিয়ে যায়, কুরতুবী সেটা জুড়ে দেন। তিনি বলেন, আল-মুবাওওয়া মানে আল-মানযিলুল মালযূম, যে ঠাঁইয়ে মানুষ বাঁধা পড়ে থাকে। সাক্ষী হিসেবে তিনি আনেন সেই সতর্কবাণী, যা সহীহ বুখারীর ১১০ নম্বর হাদিসে আবূ হুরায়রা (রাঃ) থেকে প্রমাণিত: যে ইচ্ছা করে আমার নামে মিথ্যা বলে, সে যেন জাহান্নামে নিজের ঠিকানা বানিয়ে নেয়। অর্থাৎ ক্রিয়াটা এক রাতের আশ্রয়ের কথা বলে না, বলে থিতু হয়ে থেকে যাওয়ার কথা। যে জাতির আশাই ছিল চলে যাওয়া, তাদের এ হুকুম দেওয়াটা অদ্ভুত।"
          },
          {
            "en": "Then the address shifts three times inside one sentence. Tabawwa'a is dual, spoken to Musa and his brother alone. Waj'alu and aqimu are plural, spoken past the two of them to the whole community. Bashshir at the close is singular. At-Tabari and al-Baghawi read that last imperative as addressed to Muhammad ﷺ; al-Qurtubi records the difference and holds Musa (AS) the more apparent addressee, told to announce to Bani Israil that Allah would show them victory.",
            "bn": "এরপর একটি বাক্যের ভেতরেই সম্বোধন তিনবার বদলায়। তাবাওওয়াআ দ্বিবচন, শুধু মূসা আর তাঁর ভাইকে বলা। ওয়াজআলূ আর আকীমূ বহুবচন, দুজনকে ছাড়িয়ে গোটা জাতিকে বলা। শেষের বাশশির একবচন। তাবারী আর বাগাবী মনে করেন, শেষ হুকুমটি মুহাম্মাদ ﷺ-কে বলা। কুরতুবী মতভেদটা উল্লেখ করেন, তবে তাঁর কাছে বেশি স্পষ্ট হল, এখানে মূসা (আ)-কেই বলা হচ্ছে: বনী ইসরাঈলকে সুসংবাদ শোনাও যে আল্লাহ তাদের বিজয় দেখাবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Masjids or the Homes Themselves",
          "bn": "মাসজিদ, নাকি ঘরগুলোই"
        },
        "p": [
          {
            "en": "At-Tabari sets out three readings of waj'alu buyutakum qiblah naming the men behind each. The first is that it means make your houses masajid in which you pray. Ibn Abbas (RA) through Ikrimah says simply masajid, and through another chain that they dreaded Pharaoh over praying, so they were told to make the house a masjid. Ibrahim an-Nakha'i gives the same, and Mujahid adds that they had prayed only in the biya', and in fear.",
            "bn": "ওয়াজআলূ বুয়ূতাকুম কিবলাহ-র তিনটি পাঠ তাবারী সাজিয়ে দেন, আর প্রত্যেকটির পেছনে কারা আছেন তাঁদের নামও বলেন। প্রথম পাঠ: তোমাদের ঘরগুলোকে মাসজিদ বানাও, সেখানে নামাজ পড়বে। ইকরিমার সূত্রে ইবনে আব্বাস (রাঃ) শুধু বলেন, মাসজিদ। অন্য সূত্রে তিনি বলেন, নামাজ পড়তে গেলে তারা ফেরাউনের ভয়ে সিঁটিয়ে থাকত, তাই তাদের বলা হল ঘরটাকেই মাসজিদ বানাতে। ইবরাহীম নাখাঈও একই কথা বলেন, আর মুজাহিদ যোগ করেন, তারা নামাজ পড়ত কেবল বীআ-তে, তাও ভয়ে ভয়ে।"
          },
          {
            "en": "The second reading makes the command about direction: turn your places of prayer toward the Ka'bah. Ibn Abbas (RA) is cited for this too, through Sa'id ibn Jubayr, which is worth noticing, because the same Companion reaches at-Tabari on both sides through different chains. Qatadah says nahwa al-qiblah and dates it to when Pharaoh stopped them praying. The third reading, from Sa'id ibn Jubayr through Ata, is that the houses were to face each other.",
            "bn": "দ্বিতীয় পাঠে হুকুমটা দিক নিয়ে: তোমাদের নামাজের জায়গাগুলো কাবার দিকে ফেরাও। এখানেও দলিল হিসেবে আসেন ইবনে আব্বাস (রাঃ), সাঈদ ইবনে জুবায়রের সূত্রে; আর এটা খেয়াল করার মতো, কারণ একই সাহাবী ভিন্ন সনদে তাবারীর কাছে দুই দিকেই পৌঁছেছেন। কাতাদা বলেন নাহওয়াল কিবলাহ, আর সময়টা ধরিয়ে দেন, ফেরাউন যখন তাদের নামাজ বন্ধ করে দিল তখন। তৃতীয় পাঠটি আতার সূত্রে সাঈদ ইবনে জুবায়র থেকে, যে ঘরগুলো পরস্পরের মুখোমুখি রাখতে হবে।"
          },
          {
            "en": "At-Tabari does not leave the three level. He prefers the first, and his argument is lexical. Buyut said without qualification means inhabited dwellings, because masjids already have a name of their own; and qiblah, in ordinary usage, is what a masjid and a prayer face. The speech of Allah is carried to the commonest usage of the tongue it came down in unless something compels otherwise, and he finds nothing here that compels otherwise.",
            "bn": "তিনটি মতকে তাবারী সমান মর্যাদায় ছেড়ে দেন না। তিনি প্রথমটিকেই বাছেন, আর তাঁর যুক্তি ভাষার। বুয়ূত কথাটা বিশেষণ ছাড়া বললে বোঝায় বসবাসের ঘর, কারণ মাসজিদের তো নিজের আলাদা নামই আছে। আর কিবলাহ শব্দটা চালু ব্যবহারে বোঝায় মাসজিদ আর নামাজ যেদিকে ফেরে সেই দিক। যে ভাষায় কুরআন নেমেছে, আল্লাহর কালামকে সেই ভাষার সবচেয়ে চালু অর্থেই নিতে হবে, যদি না কিছু তাতে বাধা দেয়। তিনি এখানে বাধা দেওয়ার মতো কিছু পান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Qiblah Did They Face",
          "bn": "তারা কোন কিবলার দিকে ফিরত"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads the verse the other way, and reports that most of the commentators did. Bani Israil prayed only in their masjids and churches, which stood in the open; when Musa (AS) was sent, Pharaoh had those buildings ruined and the prayer stopped. So Allah revealed to Musa and Harun (AS) to choose buyut for their people in Egypt, meaning masajid, not inhabited dwellings. Al-Qurtubi names Ibrahim, Ibn Zayd, ar-Rabi', Abu Malik and Ibn Abbas (RA) for it.",
            "bn": "কুরতুবী আয়াতটি পড়েন উল্টো দিক থেকে, আর জানান, অধিকাংশ মুফাসসির এভাবেই পড়েছেন। বনী ইসরাঈল নামাজ পড়ত কেবল তাদের মাসজিদ আর গির্জায়, যেগুলো ছিল খোলা জায়গায়। মূসা (আ)-কে পাঠানোর পর ফেরাউন সেই ঘরগুলো গুঁড়িয়ে দেওয়ার হুকুম দিল আর নামাজ বন্ধ করে দিল। তখন আল্লাহ মূসা ও হারূন (আ)-এর কাছে ওহি পাঠালেন, তাঁরা যেন মিসরে নিজেদের জাতির জন্য বুয়ূত বেছে নেন, অর্থাৎ মাসজিদ, বসবাসের ঘর নয়। এই পাঠের পক্ষে কুরতুবী ইবরাহীম, ইবনে যায়েদ, রাবী, আবূ মালিক আর ইবনে আব্বাস (রাঃ)-এর নাম নেন।"
          },
          {
            "en": "Then he chooses: the first view is sounder, make your places of prayer face the qiblah. Against it stands the reading that they were merely permitted to pray at home in secret, and Ibn al-Arabi, whom al-Qurtubi quotes here, dismisses that as a bare claim. Al-Qurtubi agrees, and his reason is that the earth was made a masjid and a purifier for Muhammad ﷺ in particular, so that licence cannot be read back into Musa's law.",
            "bn": "তারপর তিনি নিজের মত বেছে নেন: প্রথম মতটিই বেশি সহীহ, অর্থাৎ তোমাদের নামাজের জায়গাগুলো কিবলামুখী কর। এর বিপরীতে আছে সেই ব্যাখ্যা যে তাদের কেবল ঘরে গোপনে নামাজ পড়ার অনুমতি দেওয়া হয়েছিল। কুরতুবী এখানে ইবনুল আরাবীকে উদ্ধৃত করেন, যিনি এ মতকে নিছক দাবি বলে উড়িয়ে দেন। কুরতুবীও একমত। তাঁর কারণ, জমিনকে মাসজিদ আর পবিত্রতার উপকরণ বানানো হয়েছে বিশেষভাবে মুহাম্মাদ ﷺ-এর জন্য। কাজেই সেই ছাড় পেছনে টেনে নিয়ে মূসা (আ)-এর শরীয়তে বসানো যায় না।"
          },
          {
            "en": "Which qiblah was it? Al-Qurtubi carries both answers, Bayt al-Maqdis from Ibn Bahr and the Ka'bah, and al-Baghawi cites Ibn Jurayj from Ibn Abbas (RA) that the Ka'bah was the qiblah of Musa (AS) and those with him. Ma'arif al-Qur'an follows that and draws the consequence al-Qurtubi draws: facing the qiblah was a condition of prayer before this Ummah, as purity and covering were.",
            "bn": "তাহলে কিবলাটা ছিল কোনটি? কুরতুবী দুটি জবাবই রাখেন: ইবনে বাহরের সূত্রে বায়তুল মাকদিস, আর কাবা। বাগাবী ইবনে জুরায়জের সূত্রে ইবনে আব্বাস (রাঃ) থেকে আনেন, কাবাই ছিল মূসা (আ) ও তাঁর সঙ্গীদের কিবলা। মাআরিফুল কুরআন এই মতই নেয়, আর কুরতুবীর মতো একই সিদ্ধান্তে পৌঁছায়: এই উম্মতের আগেও কিবলামুখী হওয়া নামাজের শর্ত ছিল, যেমন শর্ত ছিল পবিত্রতা আর সতর ঢাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "Sa'di on the Narrow Season",
          "bn": "সংকীর্ণ সময়টা নিয়ে সা'দী"
        },
        "p": [
          {
            "en": "As-Sa'di dates the revelation to the worst of it. This came, he writes, when the matter had grown hard on their people from Pharaoh and his people, bent on turning them from their religion. Tabawwa'a he reads as an instruction to pass along: order them to make houses in which they can keep out of sight. He takes the qiblah clause as at-Tabari does, make them a place where you pray, since the public churches are closed.",
            "bn": "সা'দী ওহির সময়টা ধরেন সবচেয়ে কঠিন মুহূর্তে। তিনি লেখেন, এ হুকুম এল তখন, যখন ফেরাউন আর তার লোকদের চাপে তাঁদের জাতির অবস্থা কঠিন হয়ে উঠেছে, আর ওরা উঠেপড়ে লেগেছে তাদের দীন থেকে ফিরিয়ে নিতে। তাবাওওয়াআ-কে তিনি পড়েন অন্যদের কাছে পৌঁছে দেওয়ার হুকুম হিসেবে: তাদের বলে দাও, তারা যেন এমন ঘর বানিয়ে নেয় যেখানে চোখের আড়ালে থাকা যায়। কিবলার বাক্যাংশটি তিনি তাবারীর মতোই বোঝেন: ঘরগুলোকে নামাজের জায়গা বানাও, কারণ খোলা গির্জাগুলো তো বন্ধ।"
          },
          {
            "en": "He will not let the last two clauses pass as ornament. Establish the prayer, he says, because it is a help in every matter; and give the believers glad tidings of victory, of support, and of their religion being made to appear. Then he repeats the promise as the Quran repeats it: with hardship comes ease, with hardship comes ease. When the way narrowed, Allah widened it. Al-Muyassar makes the same point in one word, refuges.",
            "bn": "শেষ দুটি বাক্যাংশকে তিনি নিছক অলংকার বলে পাশ কাটিয়ে যেতে দেন না। তিনি বলেন, নামাজ কায়িম কর, কারণ নামাজ সব কাজে সহায়। আর মু'মিনদের সুসংবাদ দাও জয়ের, সাহায্যের, আর তাদের দীনকে সবার উপরে তুলে ধরার। এরপর কুরআন যেভাবে ওয়াদাটা দুবার বলে, তিনিও সেভাবে বলেন: কষ্টের সঙ্গেই আছে স্বস্তি, কষ্টের সঙ্গেই আছে স্বস্তি। পথ যখন সরু হয়ে এল, আল্লাহ তা প্রশস্ত করে দিলেন। মুয়াসসার পুরো কথাটা এক শব্দে সারেন: আশ্রয়স্থল।"
          },
          {
            "en": "Ibn Kathir heads his treatment They were commanded to pray inside their homes, and builds it from two reports. Al-Awfi from Ibn Abbas (RA): the Children of Israel told Musa (AS) they could not pray in public before Pharaoh's people, so Allah permitted them to pray at home, and they were commanded to build those houses facing the qiblah. Mujahid sharpens the fear, that Pharaoh might kill them where they gathered; Qatadah and ad-Dahhak said the same.",
            "bn": "ইবনে কাসীর আয়াতটির আলোচনার শিরোনাম দেন, তাদের হুকুম দেওয়া হল নিজেদের ঘরের ভেতরে নামাজ পড়তে; আর গড়ে তোলেন দুটি বর্ণনার উপর। আওফীর সূত্রে ইবনে আব্বাস (রাঃ) বলেন, বনী ইসরাঈল মূসা (আ)-কে জানাল, ফেরাউনের লোকদের সামনে প্রকাশ্যে নামাজ পড়া তাদের পক্ষে সম্ভব নয়; তখন আল্লাহ তাদের ঘরে নামাজ পড়ার অনুমতি দিলেন, আর হুকুম দিলেন ঘরগুলো কিবলামুখী করে বানাতে। মুজাহিদ ভয়টাকে আরও ধারালো করেন, ফেরাউন হয়তো জমায়েতের জায়গাতেই তাদের মেরে ফেলবে। কাতাদা আর দাহহাকও একই কথা বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best Prayer at Home",
          "bn": "সবচেয়ে ভালো নামাজ ঘরে"
        },
        "p": [
          {
            "en": "The commentaries do attach a prophetic narration here, and al-Qurtubi is the one who brings it, while asking whether the night standing of Ramadan is better at home or in the masjid. Sahih al-Bukhari 731, from Zayd ibn Thabit (RA): Allah's Messenger ﷺ made a small room in the month of Ramadan, which the narrator thinks Zayd said was made of a mat, and he prayed there for a few nights, and some of his companions prayed behind him.",
            "bn": "এখানে তাফসীরগুলো নবী ﷺ-এর একটি হাদিস ঠিকই জুড়ে দেয়, আর সেটা আনেন কুরতুবী, এই প্রশ্নের আলোচনায়: রমজানের রাতের কিয়াম ঘরে ভালো, নাকি মাসজিদে? সহীহ বুখারীর ৭৩১ নম্বর হাদিস, যায়েদ ইবনে সাবিত (রাঃ) থেকে: আল্লাহর রাসূল ﷺ রমজান মাসে ছোট একটি কামরা বানিয়েছিলেন। বর্ণনাকারীর ধারণা, যায়েদ বলেছিলেন সেটি ছিল চাটাইয়ের। তাতে তিনি কয়েক রাত নামাজ পড়লেন, আর তাঁর কিছু সাহাবী তাঁর পেছনে নামাজ পড়লেন।"
          },
          {
            "en": "When he came to know about it, he kept on sitting. In the morning he went out and said: I have seen and understood what you did. You should pray in your houses, for the best prayer of a person is that which he prays in his house except the compulsory prayers. Al-Qurtubi cites it for Malik's view that qiyam Ramadan at home is better for one strong enough, and reports Ibn Abd al-Hakam and Ahmad holding the congregation better.",
            "bn": "বিষয়টা জানতে পেরে তিনি বসেই রইলেন। সকালে বেরিয়ে এসে বললেন: তোমরা যা করেছ তা আমি দেখেছি আর বুঝেছি। তোমরা নিজেদের ঘরে নামাজ পড়ো, কারণ ফরজ নামাজ ছাড়া মানুষের সবচেয়ে ভালো নামাজ সেটাই, যা সে নিজের ঘরে পড়ে। কুরতুবী হাদিসটি আনেন মালিকের মতের পক্ষে: যার সামর্থ্য আছে, তার জন্য রমজানের কিয়াম ঘরে পড়াই ভালো। সঙ্গে তিনি জানান, ইবনে আবদুল হাকাম আর আহমাদের মতে জামাআতে পড়াই ভালো।"
          },
          {
            "en": "The other narration al-Qurtubi and Ma'arif al-Qur'an both bring here measures the distance between that community and this one. Sahih al-Bukhari 335, from Jabir bin Abdullah (RA): the Prophet ﷺ said he had been given five things not given to anyone before him, among them that the earth had been made for him a place for praying and a thing to perform tayammum, so anyone of his followers can pray wherever the prayer is due.",
            "bn": "আরেকটি বর্ণনা কুরতুবী আর মাআরিফুল কুরআন দুটোই এখানে আনে, যা ওই জাতি আর এই উম্মতের মধ্যেকার দূরত্বটা মেপে দেয়। সহীহ বুখারীর ৩৩৫ নম্বর হাদিস, জাবির ইবনে আবদুল্লাহ (রাঃ) থেকে: নবী ﷺ বলেছেন, তাঁকে পাঁচটি জিনিস দেওয়া হয়েছে যা তাঁর আগে আর কাউকে দেওয়া হয়নি; তার একটি হল, জমিনকে তাঁর জন্য নামাজের জায়গা আর তায়াম্মুমের উপকরণ বানিয়ে দেওয়া হয়েছে, ফলে তাঁর উম্মতের যে কেউ যেখানেই ওয়াক্ত পাবে সেখানেই পড়ে নিতে পারবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About Raised Houses",
          "bn": "সমুন্নত ঘর নিয়ে যে আয়াতগুলো"
        },
        "p": [
          {
            "en": "Mujahid, arguing the qiblah reading in at-Tabari, points to 24:36: in houses which Allah has ordered to be raised and His name mentioned in them. It is the closest sister the verse has, naming the institution the command is putting up. 20:14 is the other half of Musa's own commission at the fire, worship Me and establish prayer for My remembrance, so the order to pray under Pharaoh's eye is the old one under pressure.",
            "bn": "তাবারীতে কিবলার পাঠটির পক্ষে যুক্তি দিতে গিয়ে মুজাহিদ ২৪:৩৬ আয়াতের দিকে ইশারা করেন: সে সব ঘরে, যেগুলোকে সমুন্নত রাখতে আর যেখানে তাঁর নাম স্মরণ করতে আল্লাহ নির্দেশ দিয়েছেন। আমাদের আয়াতের সবচেয়ে কাছের আয়াত এটিই; আমাদের হুকুমটা যে প্রতিষ্ঠান গড়ে তুলছে, এখানে তারই নাম আছে। ২০:১৪ আয়াত আগুনের পাশে মূসার নিজের দায়িত্ব পাওয়ার বাকি অর্ধেক: আমার ইবাদত কর, আর আমাকে স্মরণ করার উদ্দেশ্যে নামাজ কায়িম কর। কাজেই ফেরাউনের চোখের সামনে নামাজের হুকুমটা নতুন কিছু নয়, সেই পুরনো হুকুমই, শুধু চাপের মুখে।"
          },
          {
            "en": "Three more belong beside it. 2:144 is where this Ummah received its own turning, turn your face toward al-Masjid al-Haram, and wherever you are turn your faces toward it. 29:56 answers the question the verse raises for anyone barred from worship: My earth is spacious, so worship only Me. And 20:132 keeps the house in view after the danger passes, enjoin prayer upon your family and be steadfast therein, which is what a praying household is for.",
            "bn": "এর পাশে আরও তিনটি আয়াত বসে। ২:১৪৪ আয়াতেই এই উম্মত নিজের ফেরার দিক পেয়েছে: তুমি মাসজিদুল হারামের দিকে মুখ ফিরাও, আর তোমরা যেখানেই থাক ওরই দিকে মুখ ফিরাও। ইবাদত থেকে বাধা পাওয়া কারো মনে আয়াতটি যে প্রশ্ন তোলে, ২৯:৫৬ তার জবাব দেয়: আমার যমীন প্রশস্ত, কাজেই তোমরা একমাত্র আমারই ইবাদত কর। আর বিপদ কেটে যাওয়ার পরও ঘরটাকে চোখের সামনে রাখে ২০:১৩২: তোমার পরিবারকে নামাজের নির্দেশ দাও আর তাতে অবিচল থাক। নামাজ পড়া পরিবার তো এজন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning a Room Toward Makkah",
          "bn": "ঘরের একটা কোণ মক্কামুখী করা"
        },
        "p": [
          {
            "en": "The first thing the verse asks for is unglamorous. When the place where you normally worship is taken away, the answer it gives is not to wait until it is handed back; it is to make a place. A corner cleared, a mat left there, a direction settled, a time held to: that is the whole of what Bani Israil were told to do while the state hunted them, and it was enough to carry them to the sea.",
            "bn": "আয়াতটি প্রথমে যা চায়, তাতে চমক নেই কোনো। যেখানে আপনি সাধারণত ইবাদত করেন সেই জায়গাটা কেড়ে নেওয়া হলে আয়াতের জবাব এই নয় যে ফেরত পাওয়া পর্যন্ত বসে থাকুন; জবাব হল জায়গা বানিয়ে নিন। একটা কোণ পরিষ্কার করা, সেখানে জায়নামাজ রেখে দেওয়া, দিকটা ঠিক করে নেওয়া, সময়টা ধরে রাখা। রাষ্ট্র যখন তাদের খুঁজে বেড়াচ্ছে, বনী ইসরাঈলকে এটুকুই করতে বলা হয়েছিল, আর এটুকুই তাদের সমুদ্র পর্যন্ত টেনে নিয়ে গেছে।"
          },
          {
            "en": "The second thing is that the concession this Ummah lives under is wider, which makes an excuse about place harder to keep. A believer who may pray in a stairwell, a storeroom or a field has more than was given here. What is left is the part of the command that was never a concession: establish the prayer, within its limits and in its times, as at-Tabari glosses it, and let the house be where the family sees it done.",
            "bn": "দ্বিতীয় কথা, এই উম্মত যে ছাড়ের ভেতরে বাস করে তা তাদের ছাড়ের চেয়ে অনেক চওড়া, আর সেজন্যই জায়গার অজুহাতটা টিকিয়ে রাখা কঠিন। যে মু'মিন সিঁড়িঘরে, গুদামঘরে বা মাঠে নামাজ পড়তে পারে, তাকে এখানে যা দেওয়া হয়েছিল তার চেয়ে বেশিই দেওয়া হয়ে গেছে। বাকি থাকে হুকুমের সেই অংশটা, যা কোনোকালেই ছাড় ছিল না: নামাজ কায়িম কর, তার সীমা মেনে আর তার ওয়াক্তে, তাবারী যেভাবে অর্থ করেন। আর ঘরটাই হোক সেই জায়গা যেখানে পরিবার তা হতে দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Praying House",
          "bn": "নামাজের ঘর চেয়ে দু'আ"
        },
        "p": [
          {
            "en": "No narrated supplication is attached to this verse in any of the seven commentaries consulted, so what follows is composed here from its own vocabulary, not a Sunnah du'a. O Allah, You taught two of Your prophets to settle a frightened people in houses and to turn those houses into places of prayer. Make my house one of them. Let the prayer be established in it, and grant me the glad tidings You promised the believers.",
            "bn": "যে সাতটি তাফসীর দেখা হয়েছে, তার একটিতেও এ আয়াতের সঙ্গে বর্ণিত কোনো দোয়া জোড়া নেই। তাই নিচের দোয়াটি আয়াতেরই শব্দ দিয়ে এখানে সাজানো, সুন্নাহর দোয়া হিসেবে নয়। হে আল্লাহ, আপনি আপনার দুজন নবীকে শিখিয়েছিলেন, ভয়ে থাকা জাতিকে কীভাবে ঘরে ঠাঁই দিতে হয় আর সেই ঘরগুলোকেই নামাজের জায়গা বানাতে হয়। আমার ঘরটাকেও সেগুলোর একটি বানিয়ে দিন। তাতে নামাজ কায়িম থাকুক, আর মু'মিনদের যে সুসংবাদের ওয়াদা আপনি করেছেন, তা আমাকেও দান করুন।"
          },
          {
            "en": "Four questions to carry. If every masjid near me were closed tomorrow, where in my home would the prayer go, and is that place ready now? What have I been postponing until conditions improve, when this verse says to build inside the conditions there are? Who in my household has watched me pray this week? And which good news am I waiting to see before I trust it, when Musa (AS) was told to announce it with Pharaoh still enthroned?",
            "bn": "সঙ্গে নেওয়ার মতো চারটি প্রশ্ন। আমার আশেপাশের সব মাসজিদ কাল বন্ধ হয়ে গেলে ঘরের কোন জায়গাটায় নামাজ হবে, আর সেই জায়গাটা কি এখনই তৈরি আছে? পরিস্থিতি ভালো হওয়ার অপেক্ষায় আমি কোনটা ফেলে রেখেছি, অথচ আয়াত বলছে যে অবস্থা আছে তার ভেতরেই গড়ে নিতে? এ সপ্তাহে ঘরের কে আমাকে নামাজ পড়তে দেখেছে? আর কোন সুসংবাদটা চোখে না দেখা পর্যন্ত আমি ভরসা করতে রাজি নই, অথচ মূসা (আ)-কে তা শোনাতে বলা হয়েছিল তখন, যখন ফেরাউন গদিতেই বসা?"
          }
        ]
      }
    ]
  },
  "10:92": {
    "sections": [
      {
        "h": {
          "en": "After the Water Closed",
          "bn": "পানি বন্ধ হয়ে যাওয়ার পর"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and it has been arguing about signs and the people who ignore them. 10:88 is the prayer of Musa (AS) against the wealth Pharaoh and his chiefs were given. 10:89 answers it and tells the two brothers to stay straight. 10:90 takes the Children of Israel across the sea and sends Pharaoh and his soldiers after them in tyranny, until the drowning reaches him and he says he believes in the God of the Children of Israel. 10:91 is the reply: now, when you disobeyed before?",
            "bn": "সূরা ইউনুস মাক্কী, আর এ পর্যন্ত সূরাটি নিদর্শন আর নিদর্শন থেকে মুখ ফিরিয়ে থাকা লোকদের নিয়েই কথা বলে এসেছে। ১০:৮৮ আয়াতে মূসা (আ) দোয়া করেন ফেরাউন আর তার প্রধানদের পাওয়া ধনসম্পদের বিরুদ্ধে। ১০:৮৯ আয়াতে সেই দোয়া কবুল হয় আর দুই ভাইকে বলা হয় অটল থাকতে। ১০:৯০ আয়াতে বনী ইসরাঈলকে সাগর পার করানো হয়, ফেরাউন আর তার সৈন্যরা জুলুম আর সীমালঙ্ঘন নিয়ে পেছনে ছোটে, শেষে ডোবা যখন তাকে ধরে ফেলল তখন সে বলে, বনী ইসরাঈল যাঁর প্রতি ঈমান এনেছে আমিও তাঁর প্রতি ঈমান আনলাম। ১০:৯১ আয়াতে জবাব আসে: এখন? আগে তো অমান্য করেছিলে।"
          },
          {
            "en": "Our verse is what follows that refusal, and 10:93 then leaves Pharaoh entirely and settles the Children of Israel in a good place. Eight tafsirs were consulted on this verse and none of them reports an occasion of revelation for it, so the placement is the context: a body is produced at the end of a rescue narrative, and the last clause widens from a single drowned king to most of mankind. The verse addresses Pharaoh directly and then closes by speaking about people in general.",
            "bn": "আমাদের আয়াতটি সেই প্রত্যাখ্যানের পরের কথা, আর ১০:৯৩ আয়াতে ফেরাউনের প্রসঙ্গ একেবারে ছেড়ে দিয়ে বনী ইসরাঈলকে ভালো আবাসে বসানোর কথা আসে। এই আয়াতে ৮টি তাফসীর দেখা হয়েছে, কোনোটিই এর কোনো শানে নুযূল জানায় না, তাই আয়াতের অবস্থানটাই প্রেক্ষাপট। উদ্ধারের বর্ণনার শেষে এসে সামনে রাখা হচ্ছে লাশ, আর শেষ বাক্যটি ডুবে যাওয়া বাদশার কথা থেকে সরে গিয়ে বেশির ভাগ মানুষের কথায় চলে যায়। আয়াতটি ফেরাউনকে সরাসরি সম্বোধন করে শুরু হয়, শেষ হয় সাধারণভাবে মানুষের কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Saved Onto High Ground",
          "bn": "উঁচু জমিনে তুলে রাখা"
        },
        "p": [
          {
            "en": "The verse is 14 Arabic words, counted in the text of surah Yunus. Its first verb is nunajjika, from the root n-j-w, the ordinary verb of rescue. At-Tabari does not soften the strangeness of it: he glosses it as, today We place you on a najwah of the earth with your body, so that whoever denied your destruction may look at you. A najwah, he explains, is ground raised above what lies around it, and he cites a line of Aws ibn Hajar for the usage.",
            "bn": "আয়াতটি ১৪টি আরবি শব্দের, সূরা ইউনুসের পাঠ ধরে গোনা। প্রথম ক্রিয়াটি নুনাজ্জিকা, ধাতু নূন-জীম-ওয়াও, উদ্ধার বোঝাতে যে ক্রিয়া সচরাচর চলে সেটাই। তাবারী কথাটার অদ্ভুত দিকটা ঢেকে রাখেন না; তিনি ব্যাখ্যা করেন, আজ আমি তোমাকে তোমার দেহসহ জমিনের নাজওয়ার উপর রাখব, যে তোমার ধ্বংস অস্বীকার করেছিল সে তোমাকে দেখে নিক। নাজওয়া মানে আশপাশের চেয়ে উঁচু জায়গা, আর এ অর্থে তিনি আউস ইবনে হাজারের পঙ্‌ক্তি টানেন।"
          },
          {
            "en": "Al-Qurtubi gives the same picture and adds that the readers differed over the word itself. He reports that al-Yazidi and Ibn as-Samayqa' read nunahhika, with ha, from tanhiyah, to set a thing aside, which 'Alqamah also relates from Ibn Mas'ud; on that reading Pharaoh is put aside from the sea rather than raised above it. Al-Baghawi records a third form, that Ya'qub read nunjika without the doubled letter. The difference is small in sound and the outcome is the same corpse on the shore.",
            "bn": "কুরতুবী ছবিটা একই রাখেন, তবে জানিয়ে দেন শব্দটা নিয়ে কারীদের মধ্যে পাঠভেদ আছে। তিনি বলেন, ইয়াযীদী আর ইবনুস সুমাইকা পড়েছেন নুনাহহিকা, হা দিয়ে, তানহিয়া থেকে, মানে সরিয়ে রাখা; আলকামাও এ পাঠ ইবনে মাসউদ থেকে বর্ণনা করেন। সেই পাঠে ফেরাউনকে সাগর থেকে সরিয়ে রাখা হয়, উঁচুতে তোলা হয় না। বাগাবী আরেকটি রূপ লিখে রাখেন, ইয়াকুব পড়েছেন নুনজিকা, তাশদীদ ছাড়া। উচ্চারণের পার্থক্য সামান্য, আর পরিণামে সেই একই লাশ সৈকতে পড়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Body, or Coat of Mail",
          "bn": "দেহ, নাকি বর্ম"
        },
        "p": [
          {
            "en": "Bi-badanika is where the commentators part. Mujahid, quoted by at-Tabari through several chains, says simply bi-jasadika, with your body. Abdullah ibn Shaddad, also in at-Tabari, says his badan was his corpse, which the sea threw out. At-Tabari then raises the objection himself: why say with your body at all, when a man is not saved apart from his body? His answer is that it would have been possible to bring Pharaoh out alive as he went in, so the phrase is there to fix that he comes out as a body without a soul.",
            "bn": "বিবাদানিকা শব্দটাতেই মুফাসসিরদের পথ আলাদা হয়ে যায়। মুজাহিদ, যাঁর কথা তাবারী কয়েকটি সনদে আনেন, সোজা বলেন বিজাসাদিকা, তোমার দেহসহ। আবদুল্লাহ ইবনে শাদ্দাদও তাবারীর কাছে বলেন, তার বাদান মানে তার লাশ, যা সাগর ছুঁড়ে ফেলেছিল। এরপর তাবারী নিজেই প্রশ্নটা তোলেন: দেহ বাদ দিয়ে তো কাউকে বাঁচানোই যায় না, তাহলে তোমার দেহসহ কথাটা বলার দরকার পড়ল কেন? তাঁর জবাব, ফেরাউন যেমন জীবিত অবস্থায় ঢুকেছিল তেমনই জীবিত বের করা সম্ভব ছিল, তাই কথাটা বসানো হয়েছে বুঝিয়ে দিতে যে সে বেরোবে রূহহীন দেহ হয়ে।"
          },
          {
            "en": "Against that stands a second reading, that al-badan means a coat of mail. Al-Qurtubi collects the evidence for it: the old poets use al-abdan of armour, and he cites Abu 'Ubayda's lines from al-A'sha and 'Amr ibn Ma'dikarib, with Ka'b ibn Malik using the plural for coats of mail. He reports from Ibn Abbas (RA) and Muhammad ibn Ka'b al-Qurazi that Pharaoh's coat of mail was of strung pearl; others said gold, others iron, and it was the thing by which he was known.",
            "bn": "এর উল্টো দিকে দাঁড়ায় আরেক পাঠ, যেখানে আল-বাদান মানে বর্ম। কুরতুবী তার পক্ষের প্রমাণ জড়ো করেন: পুরনো কবিরা আল-আবদান বলতে বর্মই বোঝাতেন, আর তিনি আবু উবাইদার আনা আ'শা ও আমর ইবনে মাদীকারিবের পঙ্‌ক্তি টানেন, সঙ্গে কাব ইবনে মালিকের ব্যবহারও, যেখানে বহুবচনটা বর্মের অর্থেই বসেছে। ইবনে আব্বাস (রাঃ) আর মুহাম্মাদ ইবনে কাব আল-কুরাযী থেকে তিনি লেখেন, ফেরাউনের বর্মটা ছিল গাঁথা মুক্তার; কেউ বলেছেন সোনার, কেউ লোহার, আর ওই বর্ম দেখেই তাকে চেনা যেত।"
          },
          {
            "en": "The two readings are not treated the same way. Al-Qurtubi quotes al-Akhfash flatly rejecting the armour sense, that saying with your coat of mail amounts to nothing. Ibn Kathir takes the opposite line: he lists Mujahid's body, al-Hasan's body with no soul in it, Abdullah ibn Shaddad's whole and undamaged, so that they could verify and recognise him, and Abu Sakhr's coat of mail, and holds that there is no contradiction between any of these. Al-Baghawi keeps both, the corpse first and the famous jewelled armour second.",
            "bn": "দুটি পাঠকে অবশ্য এক চোখে দেখা হয়নি। কুরতুবী আখফাশের কথা তুলে ধরেন, যিনি বর্মের অর্থ সোজা নাকচ করে দেন: ‘তোমার বর্মসহ’ বললে কোনো অর্থই দাঁড়ায় না। ইবনে কাসীর ঠিক উল্টো পথে যান। তিনি পাশাপাশি রাখেন মুজাহিদের দেহ, হাসানের রূহহীন দেহ, আবদুল্লাহ ইবনে শাদ্দাদের অক্ষত ও অবিকৃত দেহ, যাতে লোকে যাচাই করে চিনে নিতে পারে, আর আবু সাখরের বর্ম; তারপর বলেন, এসবের মধ্যে কোনো বিরোধ নেই। বাগাবী দুটোই রাখেন, আগে লাশ, পরে সেই বিখ্যাত জহরতখচিত বর্ম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign Said Twice",
          "bn": "নিদর্শন শব্দটা দুবার"
        },
        "p": [
          {
            "en": "The word aya lands twice in this short verse, once as a singular and once as a plural. Pharaoh is to become an aya for those who come after him, and then most people are described as heedless of Our ayat. So the same word does the work at both ends: the body on the ridge is a sign, and the signs already scattered through the world are the ones nobody looks at. The closing clause is emphatic in Arabic, with inna and the lam of emphasis sitting on la-ghafilun.",
            "bn": "এই ছোট আয়াতে আয়াত শব্দটা দুবার আসে, একবার একবচনে আর একবার বহুবচনে। ফেরাউনকে হতে হবে পরবর্তীদের জন্য নিদর্শন, তারপরই বলা হচ্ছে, বেশির ভাগ মানুষ আমার নিদর্শনগুলো থেকে উদাসীন। একই শব্দ দুই প্রান্তে কাজ করছে: টিলার উপর পড়ে থাকা দেহটা নিদর্শন, আর দুনিয়াজুড়ে ছড়িয়ে থাকা নিদর্শনগুলোর দিকে কেউ তাকায় না। শেষ বাক্যটা আরবিতে জোর দিয়ে বলা, ইন্না আর তাকিদের লাম দুটোই বসেছে লাগাফিলূন শব্দের সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi identifies the audience of li-man khalfaka as the Children of Israel and those of Pharaoh's people who had not drowned and had not yet heard. He notes a reading li-man khalafaka, whoever succeeds you in your land, and reports that Ali ibn Abi Talib (RA) read li-man khalaqaka, a sign for your Creator. Ibn Kathir records the same qaf reading from some of the salaf, and takes the sign as proof to the Children of Israel that Pharaoh was dead and that nothing withstands Allah's anger.",
            "bn": "লিমান খালফাকা বলতে কাদের বোঝানো হচ্ছে, কুরতুবী তা ঠিক করে দেন: বনী ইসরাঈল, আর ফেরাউনের কওমের যারা ডোবেনি এবং খবরটাও পায়নি। তিনি আরেক পাঠ উল্লেখ করেন, লিমান খালাফাকা, অর্থাৎ যে তোমার দেশে তোমার জায়গায় বসবে; আর আলী ইবনে আবী তালিব (রাঃ) পড়তেন লিমান খালাকাকা, তোমার স্রষ্টার জন্য নিদর্শন। ইবনে কাসীরও কাফ দিয়ে এই পাঠ কিছু সালাফ থেকে লেখেন, আর নিদর্শনটাকে ধরেন বনী ইসরাঈলের জন্য প্রমাণ হিসেবে যে ফেরাউন মরেছে আর আল্লাহর ক্রোধের সামনে কিছুই টেকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why They Had to See",
          "bn": "কেন তাদের দেখতেই হত"
        },
        "p": [
          {
            "en": "Every commentator consulted explains the verse by the same problem: some of the Children of Israel would not accept that Pharaoh had died. At-Tabari carries it with chains. Qatadah says groups of them denied it, so Allah cast him on the shore where they could look at him. Ibn Abbas (RA), through Sa'id ibn Jubayr, says the companions of Musa (AS) feared Pharaoh had not drowned and would not believe in his destruction, so Musa prayed and the sea put him out until they were certain.",
            "bn": "যত তাফসীর দেখা হয়েছে সবাই আয়াতটির ব্যাখ্যা দেয় একই সমস্যা দিয়ে: বনী ইসরাঈলের কেউ কেউ মানতে চাইছিল না যে ফেরাউন মারা গেছে। তাবারী কথাটা সনদসহ আনেন। কাতাদা বলেন, তাদের কিছু দল অস্বীকার করেছিল, তাই আল্লাহ তাকে সৈকতে ছুঁড়ে দিলেন যেন তারা দেখে নিতে পারে। ইবনে আব্বাস (রাঃ), সাঈদ ইবনে জুবাইরের সূত্রে, বলেন, মূসা (আ)-এর সঙ্গীদের ভয় ছিল ফেরাউন হয়তো ডোবেনি, তার ধ্বংসের কথা তারা মানতে পারছিল না; তখন মূসা দোয়া করলেন আর সাগর তাকে বের করে দিল, যতক্ষণ না তারা নিশ্চিত হল।"
          },
          {
            "en": "As-Sa'di gives the reason for the doubt rather than just the fact. He says the commentators hold that the Children of Israel carried such great terror of Pharaoh in their hearts that it was as though they could not believe he had been drowned, and doubted it; so Allah ordered the sea to throw him with his body onto a raised place, to be a lesson and a sign for them. Terror is a kind of belief too, and it outlives the man who caused it.",
            "bn": "সা'দী শুধু ঘটনাটা নয়, সন্দেহের কারণটাও বলেন। তিনি লেখেন, মুফাসসিরদের মত এই যে ফেরাউনকে নিয়ে বনী ইসরাঈলের বুকে এত বড় আতঙ্ক জমে ছিল যে তারা যেন বিশ্বাসই করতে পারছিল না সে ডুবে গেছে, সন্দেহে পড়ে গেল; তাই আল্লাহ সাগরকে হুকুম দিলেন তাকে দেহসহ উঁচু জায়গায় ফেলে দিতে, যাতে সেটা তাদের জন্য শিক্ষা আর নিদর্শন হয়। আতঙ্কও এক ধরনের বিশ্বাস, আর যে লোক আতঙ্ক ছড়িয়েছিল তার চেয়ে সেটা বেশি দিন বাঁচে।"
          },
          {
            "en": "Ma'arif al-Qur'an is the only commentary consulted that raises the modern question, and it raises it carefully. It notes newspaper reports of an intact body of a Pharaoh placed in the Cairo museum, and then says plainly that it cannot be said with certainty that this is the Pharaoh of Musa (AS), since every Egyptian ruler of that era carried the title. It adds that what happened to the corpse afterwards is not known. The seven other tafsirs consulted say nothing about any of this.",
            "bn": "যেসব তাফসীর দেখা হয়েছে তার মধ্যে কেবল মাআরিফুল কুরআন আধুনিক প্রশ্নটা তোলে, আর সাবধানেই তোলে। সেখানে লেখা আছে, পত্রিকায় খবর এসেছিল অক্ষত অবস্থায় এক ফেরাউনের দেহ কায়রোর জাদুঘরে রাখা আছে; তারপরই স্পষ্ট করে বলা হয়, এটা যে মূসা (আ)-এর যুগের সেই ফেরাউন তা নিশ্চিত করে বলা যায় না, কারণ ওই সময়ের মিসরের প্রত্যেক শাসকই এই উপাধি বহন করত। সেখানে আরও বলা আছে, লাশটার শেষ পর্যন্ত কী হয়েছিল তা জানা নেই। বাকি সাতটি তাফসীর এ নিয়ে কিছুই বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Dated by a Fast",
          "bn": "রোজা দিয়ে দিনটা চেনা"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches a narration to this verse, and it is about a date rather than a doctrine. He says Pharaoh and his chiefs were destroyed on the day of Ashura, and cites al-Bukhari. In Sahih al-Bukhari 4680, Ibn Abbas (RA) narrated: when the Prophet ﷺ arrived at Medina, the Jews were observing the fast on Ashura and they said, this is the day when Moses became victorious over Pharaoh; on that the Prophet ﷺ said to his companions, you have more right to celebrate Moses' victory than they have, so observe the fast on this day.",
            "bn": "ইবনে কাসীর এই আয়াতের সঙ্গে একটি বর্ণনা জুড়ে দেন, আর সেটা আকীদার নয়, তারিখের। তিনি বলেন, ফেরাউন আর তার প্রধানদের ধ্বংস হয়েছিল আশুরার দিনে, আর দলিল দেন বুখারীর। সহীহ বুখারী ৪৬৮০ নম্বরে ইবনে আব্বাস (রাঃ) বর্ণনা করেন: নবী ﷺ মদীনায় এসে দেখলেন ইহুদীরা আশুরার রোজা রাখছে, তারা বলল, এই সেই দিন যেদিন মূসা ফেরাউনের উপর বিজয়ী হয়েছিলেন; তখন নবী ﷺ সাহাবীদের বললেন, মূসার বিজয় উদযাপনে তোমাদের হক তাদের চেয়ে বেশি, তাই তোমরা এই দিনে রোজা রাখো।"
          },
          {
            "en": "A second narration in the same passage of Ibn Kathir belongs to the confession in 10:90 rather than to this verse. Jami' at-Tirmidhi 3107 records from Ibn Abbas (RA) that when Allah drowned Pharaoh he declared his belief in the God of the Children of Israel, and that Jibril said: O Muhammad ﷺ, if you could only have seen me, while I was taking the mud from the sea, and filling his mouth out of fear that the mercy would reach him. At-Tirmidhi graded it hasan. Nothing in the commentaries consulted here attaches a hadith to the body itself.",
            "bn": "ইবনে কাসীরের ওই একই আলোচনায় আরেকটি বর্ণনা আছে, তবে সেটা এই আয়াতের নয়, ১০:৯০ আয়াতের স্বীকারোক্তির সঙ্গে জড়ানো। জামে তিরমিযী ৩১০৭ নম্বরে ইবনে আব্বাস (রাঃ) থেকে আছে, আল্লাহ যখন ফেরাউনকে ডুবিয়ে দিলেন তখন সে বনী ইসরাঈলের ইলাহের প্রতি ঈমানের ঘোষণা দিল, আর জিবরীল বললেন: হে মুহাম্মাদ ﷺ, আপনি যদি আমাকে দেখতেন, আমি সাগরের কাদা তুলে তার মুখে ঠেসে দিচ্ছিলাম, এই ভয়ে যে রহমত তার নাগাল পেয়ে না যায়। তিরমিযী একে হাসান বলেছেন। দেহটাকে ঘিরে কোনো হাদিস কোনো তাফসীরেই পাওয়া যায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Late Belief Recurs",
          "bn": "দেরির ঈমান আর কোথায় আসে"
        },
        "p": [
          {
            "en": "40:85 states the rule this scene illustrates: their faith did not benefit them once they saw Our punishment, and that is the way of Allah which has already passed among His servants. 4:18 puts the same closing door in front of an ordinary person, saying repentance is not for those who keep sinning until death arrives and then say, I have repented now. 23:99 gives the sentence such a person says at the end, my Lord, send me back, and the reply is a flat refusal.",
            "bn": "৪০:৮৫ আয়াত এই দৃশ্যের পেছনের নিয়মটা বলে দেয়: আমার শাস্তি দেখে ফেলার পর তাদের ঈমান আর কোনো কাজে আসেনি, আর আল্লাহর এই বিধান তাঁর বান্দাদের মধ্যে আগে থেকেই চলে আসছে। ৪:১৮ আয়াতে সেই একই দরজা বন্ধ হতে দেখা যায় সাধারণ মানুষের বেলায়: তওবা তাদের জন্য নয়, যারা গুনাহ করতেই থাকে, তারপর মৃত্যু হাজির হলে বলে, এখন আমি তওবা করছি। ২৩:৯৯ আয়াতে শোনা যায় শেষ মুহূর্তে এমন মানুষের মুখের কথা: হে আমার রব, আমাকে ফিরিয়ে পাঠান। জবাবে আসে সাফ না।"
          },
          {
            "en": "Two more belong here. 79:25 says Allah seized him as an exemplary punishment for the last and the first, which is the same idea of a case made public. 7:136 closes the drowning with the reason: because they denied Our signs and were heedless of them, the very word this verse ends on. Read together they say that the sign was never only for the people on that beach; it was filed for readers who would come long after the water had gone flat again.",
            "bn": "আরও দুটি আয়াত এখানে আসে। ৭৯:২৫ আয়াত বলে, আল্লাহ তাকে পাকড়াও করলেন আখেরাত আর দুনিয়ার শাস্তিতে; অর্থাৎ ঘটনাটাকে সবার সামনে নজির করে রাখা হল। ৭:১৩৬ আয়াত ডুবিয়ে মারার ঘটনা শেষ করে কারণটা জানিয়ে: তারা আমার নিদর্শনগুলো অস্বীকার করেছিল আর সেগুলো নিয়ে উদাসীন ছিল। উদাসীন, ঠিক এই শব্দেই আমাদের আয়াতটি শেষ হয়েছে। দুটো একসঙ্গে পড়লে বোঝা যায়, নিদর্শনটা কেবল ওই সৈকতের লোকদের জন্য ছিল না। পানি আবার শান্ত হয়ে যাওয়ার বহু পরে যারা পড়বে, তাদের জন্যও সেটা তুলে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Verdict Over Anyone",
          "bn": "কারো বিচার আপনার হাতে নয়"
        },
        "p": [
          {
            "en": "The verse names a man the Quran has already judged by name, and it hands no reader the same authority over anyone else. What is on display is a case Allah closed, not a licence to close cases. Nobody alive is in the position the verse describes, because nobody alive has had his file sealed. The practical consequence is the opposite of the satisfaction the story invites: the man who reads this and thinks of an enemy has missed it, and the man who reads it and checks his own delay has not.",
            "bn": "আয়াতটি এমন একজনের নাম ধরে কথা বলছে, যার ফয়সালা কুরআন আগেই দিয়ে দিয়েছে। কিন্তু অন্য কারও ব্যাপারে সেই ফয়সালা দেওয়ার অধিকার কোনো পাঠকের হাতে তুলে দেয় না। সামনে রাখা হয়েছে আল্লাহর মীমাংসা করে দেওয়া একটি মামলা, মামলা মীমাংসা করার অনুমতি নয়। জীবিত কেউ এই আয়াতের মানুষটির জায়গায় নেই, কারণ জীবিত কারও খাতা এখনো বন্ধ হয়নি। তাই ঘটনাটা পড়ে মনে যে তৃপ্তি জাগে, কাজের বেলায় শিক্ষাটা ঠিক তার উল্টো। যে এটা পড়ে শত্রুর কথা ভাবে, সে আসল কথাটাই ধরতে পারেনি। আর যে পড়ে নিজের গড়িমসির হিসাব নেয়, সে ধরতে পেরেছে।"
          },
          {
            "en": "So the verse turns into a habit of not postponing. Take the repentance you have scheduled for a quieter month and make it tonight, in whatever words you have. Pay the debt you were going to settle after the next salary. Say the apology you were saving for a better mood. As-Sa'di ends his comment by contrasting the heedless with the person who has an intellect and a present heart, and a present heart is mostly a matter of acting while the thing is still in your hand.",
            "bn": "তাই আয়াতটা শেষ পর্যন্ত একটাই অভ্যাস শেখায়: কাজ ফেলে না রাখা। যে তওবাটা আপনি কোনো নিরিবিলি মাসের জন্য তুলে রেখেছেন, আজ রাতেই সেরে ফেলুন, মুখে যেমন কথা আসে তেমন কথাতেই। পরের বেতনের পর যে ধারটা শোধ করবেন ভেবেছিলেন, সেটা এখনই শোধ করুন। মন ভালো হলে যে মাফ চাইবেন ভেবেছিলেন, সেটা চেয়ে নিন। সা'দী তাঁর কথা শেষ করেন উদাসীনদের পাশাপাশি সেই মানুষটির কথা বলে, যার আকল আছে আর অন্তর হাজির। আর অন্তর হাজির থাকার বেশির ভাগটাই হল, জিনিসটা হাতে থাকতে থাকতে কাজটা সেরে ফেলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Water Rises",
          "bn": "পানি ওঠার আগেই"
        },
        "p": [
          {
            "en": "A supplication can be built from the verse's own words, and it is offered here as such, not as a transmitted du'a: O Allah, make me a person who sees Your signs while seeing still profits me, and do not leave me among the heedless; let my life be a sign for those who come after me, and not a warning against me. The verse's own vocabulary supplies it, ayat and ghafilun, and the request is to be the reader of the sign rather than the sign.",
            "bn": "আয়াতের নিজের শব্দ দিয়েই একটি দোয়া গড়ে নেওয়া যায়। এটা সেভাবেই দেওয়া হল, বর্ণিত কোনো দোয়া হিসেবে নয়: হে আল্লাহ, আমাকে এমন বান্দা বানান, যে আপনার নিদর্শন দেখে নেয় তখনই, যখন দেখাটা কাজে আসে; উদাসীনদের মধ্যে আমাকে ফেলে রাখবেন না; আমার জীবনটা যেন পরে আসা লোকদের জন্য নিদর্শন হয়, আমার বিরুদ্ধে সতর্কবার্তা না হয়। দুটি শব্দই আয়াতের: আয়াত আর গাফিলূন। আর চাওয়াটা হল, আমি যেন নিদর্শন পড়ে শেখার লোক হই, নিজেই নিদর্শন না হয়ে যাই।"
          },
          {
            "en": "Then the questions to carry. What am I still treating as reversible that may not be? Which warning have I already been shown so often that another would be wasted on me? If someone studied the shape my life leaves behind, what would it teach them, and would I want that taught? Is there anything I am refusing to concede in public that I have already conceded to myself in private? And what would I do tomorrow if I knew the door would close this month?",
            "bn": "এবার সঙ্গে নিয়ে যাওয়ার প্রশ্নগুলো। কোন জিনিসটাকে আমি এখনো ফিরিয়ে আনা যায় বলে ধরে আছি, অথচ হয়তো যায় না? কোন সতর্কবার্তা আমাকে এত বার দেখানো হয়ে গেছে যে আরেকবার দেখানো নিছক অপচয় হবে? আমার জীবন যে ছাপ রেখে যাচ্ছে কেউ যদি সেটা পড়ে, কী শিখবে, আর সেটা কি আমি শেখাতে চাই? এমন কিছু কি আছে যা লোকের সামনে মানতে চাইছি না, অথচ মনে মনে মেনে বসে আছি? আর দরজাটা এ মাসেই বন্ধ হয়ে যাবে জানলে কাল আমি কী করতাম?"
          }
        ]
      }
    ]
  },
  "10:99": {
    "sections": [
      {
        "h": {
          "en": "After the One Exception",
          "bn": "সেই ব্যতিক্রমের পরেই"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this verse lands at the end of a long argument with people who could not be argued into faith. 10:96 says that those against whom the word of your Lord has come into effect will not believe, and 10:97 adds that no sign would move them until they see the painful punishment. 10:98 then asks whether any town ever believed while belief still profited it, and names the exception, the people of Yunus (AS).",
            "bn": "সূরা ইউনুস মক্কী। আয়াতটি আসে এক লম্বা তর্কের শেষে, এমন লোকদের সঙ্গে তর্ক, যুক্তি দিয়ে যাদের ঈমানে আনা যায়নি। ১০:৯৬ বলছে, যাদের ব্যাপারে তোমার রবের কথা সত্য হয়ে গেছে তারা ঈমান আনবে না। ১০:৯৭ যোগ করে, যন্ত্রণাদায়ক শাস্তি চোখে না দেখা পর্যন্ত কোনো নিদর্শনই তাদের নাড়াতে পারবে না। এরপর ১০:৯৮ জিজ্ঞেস করে, এমন কোনো জনপদ কি ছিল, যারা ঈমান এনেছিল তখন, যখন ঈমান আনায় লাভ হত? আর নাম আসে সেই ব্যতিক্রমের, ইউনুস (আ)-এর জাতি।"
          },
          {
            "en": "What follows keeps the same subject. 10:100 says that no soul believes except by the permission of Allah, and 10:101 tells the Prophet ﷺ to say, look at what is in the heavens and the earth, then adds that signs do not benefit a people who will not believe. None of the commentaries consulted reports an occasion of revelation here, as is normal in a Makkan argument. The placement is the context, and it is the close of a case already made.",
            "bn": "এরপরের আয়াতগুলোও একই প্রসঙ্গ ধরে রাখে। ১০:১০০ বলছে, আল্লাহর অনুমতি ছাড়া কেউ ঈমান আনতে পারে না। ১০:১০১ আয়াতে নবী ﷺ-কে বলতে বলা হচ্ছে, আসমান আর যমীনে যা আছে তার দিকে চেয়ে দেখ; তারপর যোগ হয়, যারা ঈমান আনবে না তাদের জন্য নিদর্শন কোনো কাজে আসে না। দেখা তাফসীরগুলোর একটিও এখানে কোনো শানে নুযূল জানায় না, মাক্কী তর্কে যা স্বাভাবিক। আয়াতের অবস্থানটাই তার প্রেক্ষাপট, আর তা হল দলিল পেশ শেষ হয়ে যাওয়ার মুহূর্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Fifteen Words and a Turn",
          "bn": "পনেরো শব্দ, তারপর মোড়"
        },
        "p": [
          {
            "en": "The verse runs to 15 Arabic words in the text of surah Yunus, and one pause mark is printed in the line without being counted among them. It breaks cleanly at that mark. The first half is a condition contrary to fact: wa law sha'a rabbuka la-amana man fi al-ard. The particle law states a condition that did not happen, and the lam on la-amana answers it. Nothing is being predicted here. Something is being denied by the shape of the sentence.",
            "bn": "সূরা ইউনুসের পাঠে আয়াতটি ১৫টি আরবি শব্দের, আর লাইনে ছাপা একটি ওয়াকফ চিহ্ন এ গোনার বাইরে থাকে। ঠিক সেখানেই আয়াতটি দুই ভাগ হয়ে যায়। প্রথম ভাগ এমন শর্ত যা ঘটেনি: ওয়া লাও শাআ রাব্বুকা লাআমানা মান ফিল আরদ। লাও শব্দটি না-ঘটা শর্তই বোঝায়, আর লাআমানা-র লাম সেই শর্তের জবাব দেয়। এখানে ভবিষ্যতের কোনো খবর দেওয়া হচ্ছে না। বাক্যের গড়নেই একটা কথা নাকচ হয়ে যাচ্ছে।"
          },
          {
            "en": "Then the doubling at the end of that clause, kulluhum jami'an, all of them, altogether. At-Tabari raises the objection himself, since kull already carries the sense of the whole and jami' carries it too, so why say both? He reports the Arabic grammarians differing over it. Some of the Basrans made jami'an pure emphasis, comparing 16:51, where the prohibition of taking two deities uses a word for two after a noun that is already dual.",
            "bn": "তারপর সেই ভাগের শেষে শব্দের জোড়া, কুল্লুহুম জামীআন, তাদের সবাই, একসঙ্গে সকলে। আপত্তিটা তাবারী নিজেই তোলেন: কুল্ল শব্দেই তো গোটাটা বোঝায়, জামীতেও তাই, তাহলে দুটোই বলা কেন? তিনি জানান, আরবি ব্যাকরণবিদরা এ নিয়ে একমত নন। বসরার কেউ কেউ জামীআনকে নিছক জোর দেওয়ার শব্দ ধরেছেন, আর তুলনায় এনেছেন ১৬:৫১ আয়াত, যেখানে দুই ইলাহ গ্রহণের নিষেধ এসেছে দ্বিবচন শব্দের পরেও আবার দুই বোঝানো শব্দ বসিয়ে।"
          },
          {
            "en": "Al-Qurtubi names the parties to the same question. Kulluhum, he says, is emphasis for man, while jami'an is accusative as a circumstantial state on Sibawayh's account, and al-Akhfash made it emphasis after kull, citing 16:51 as well. The disagreement is small and worth leaving as a disagreement. Then the sentence turns: afa-anta tukrihu al-nas. The interrogative hamza is prefixed, and the pronoun anta stands ahead of its verb, so the question is built around the person being asked.",
            "bn": "একই প্রশ্নে কুরতুবী নামগুলো ধরিয়ে দেন। তিনি বলেন, কুল্লুহুম হল মান শব্দের তাকীদ; আর জামীআন সীবাওয়াইহির মতে হালের কারণে নাসব, আর আখফাশ একে কুল্ল-এর পরের তাকীদই ধরেছেন এবং ১৬:৫১ আয়াতটিই দলিল হিসেবে এনেছেন। মতভেদটা ছোট, আর মতভেদ হিসেবেই রেখে দেওয়া ভালো। এরপর বাক্যটা মোড় নেয়: আফাআনতা তুকরিহুন নাস। সামনে বসেছে প্রশ্নের হামযা, আর আনতা সর্বনামটি ক্রিয়ার আগে দাঁড়িয়ে আছে, ফলে প্রশ্নটা গড়ে উঠেছে কাকে জিজ্ঞেস করা হচ্ছে তাকে ঘিরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "He Would Have Constrained Them",
          "bn": "বাধ্য করেই ফেলতেন"
        },
        "p": [
          {
            "en": "As-Sa'di fills in what the willing would have involved. Had your Lord willed, he says, it would have been by inspiring them with faith and turning their hearts toward taqwa; His power is adequate to that, but His wisdom required that some be believers and some deniers. Al-Muyassar keeps it plainer, that Allah guides whom He wills and leaves astray whom He wills in accordance with His wisdom, and that compelling people to faith is not within your capacity.",
            "bn": "ইচ্ছাটা করলে তা কীভাবে হত, সেটা সা'দী ধরিয়ে দেন। তিনি বলেন, তোমার রব চাইলে তাদের অন্তরে ঈমান ঢেলে দিতেন আর হৃদয়গুলোকে তাকওয়ার দিকে ফিরিয়ে দিতেন; এ কাজে তাঁর কুদরত পুরোপুরি যথেষ্ট। কিন্তু তাঁর হিকমত চেয়েছে যে কেউ হবে মু'মিন, কেউ হবে অস্বীকারকারী। মুয়াসসার আরও সোজা করে বলে, আল্লাহ যাকে চান হিদায়াত দেন, যাকে চান পথভ্রষ্ট হতে দেন, সবই তাঁর হিকমত অনুযায়ী; আর মানুষকে জোর করে ঈমানে আনা তোমার সাধ্যের বাইরে।"
          },
          {
            "en": "Al-Qurtubi answers with a verb, and it is the sharpest word said on this verse. Law sha'a rabbuka la-amana, he glosses, means la-idtarrahum ilayhi, He would have constrained them to it. Ibn Kathir puts the same point as permission: your Lord would have given leave to all the people of the earth to believe in what you brought, and they would all have believed, but He has wisdom in what He does. Either way, faith everywhere would have been faith imposed, and that is the thing not done.",
            "bn": "কুরতুবী জবাব দেন একটি ক্রিয়া দিয়ে, আর এ আয়াত নিয়ে বলা কথাগুলোর মধ্যে সেটিই সবচেয়ে ধারালো। তাঁর ব্যাখ্যায় লাও শাআ রাব্বুকা লাআমানা মানে লাইদতাররাহুম ইলাইহি: তিনি তাদের এর দিকে বাধ্যই করে ফেলতেন। ইবনে কাসীর একই কথা বলেন অনুমতির ভাষায়: তোমার রব চাইলে দুনিয়ার সব মানুষকে তুমি যা এনেছ তাতে ঈমান আনার অনুমতি দিতেন, তখন সবাই ঈমান আনত; কিন্তু তিনি যা করেন তাতে তাঁর হিকমত থাকে। যেভাবেই পড়ুন, সবার ঈমান আনাটা হত চাপিয়ে দেওয়া ঈমান, আর ঠিক সেটাই করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Written Before the Sending",
          "bn": "পাঠানোর আগেই লেখা"
        },
        "p": [
          {
            "en": "At-Tabari reads the refusal through the decree. Allah says to His prophet: had your Lord willed, all of them would have believed in you and confirmed that what you brought is true. But He does not will it, because the decree had gone out before you were sent, that none believes in you and follows you except whoever had felicity written for him in the first Book, before the heavens and the earth were created.",
            "bn": "আল্লাহ কেন তা চাননি, তাবারী সেটা বোঝেন তাকদীরের আলোয়। আল্লাহ তাঁর নবীকে বলছেন, তোমার রব চাইলে সবাই তোমাকে মেনে নিত আর স্বীকার করত যে তুমি যা এনেছ তা সত্য। কিন্তু তিনি তা চান না, কারণ তোমাকে পাঠানোর আগেই ফয়সালা হয়ে গেছে: তোমাকে সে-ই মানবে আর তোমার পিছনে সে-ই চলবে, যার জন্য প্রথম কিতাবে সৌভাগ্য লেখা হয়ে গিয়েছিল, আসমান আর যমীন সৃষ্টিরও আগে।"
          },
          {
            "en": "He then brings the report he is reading it by. Through his chain to Ibn Abbas (RA), at-Tabari records that the Messenger of Allah ﷺ was eager for all people to believe and to follow him upon guidance, so Allah informed him that none believes except whoever has felicity already preceding from Allah in the first remembrance, and none goes astray except whoever has wretchedness preceding. Al-Qurtubi carries the same words from Ibn Abbas (RA) in his comment on this verse.",
            "bn": "এরপর তিনি সেই বর্ণনাটি আনেন, যার আলোকে তিনি আয়াতটি পড়ছেন। ইবনে আব্বাস (রাঃ) পর্যন্ত নিজের সনদে তাবারী তুলে আনেন, আল্লাহর রাসূল ﷺ চাইতেন সব মানুষ ঈমান আনুক আর হিদায়াতের উপর তাঁর অনুসরণ করুক; তাই আল্লাহ তাঁকে জানিয়ে দিলেন, সে-ই ঈমান আনবে যার জন্য আল্লাহর কাছে প্রথম যিকরে আগেই সৌভাগ্য লেখা আছে, আর সে-ই পথ হারাবে যার জন্য আগেই দুর্ভাগ্য লেখা আছে। কুরতুবীও এ আয়াতের ব্যাখ্যায় ইবনে আব্বাস (রাঃ) থেকে ঠিক এ কথাগুলোই আনেন।"
          },
          {
            "en": "Al-Baghawi says plainly what the others leave implied: this is a consolation for the Prophet ﷺ, because he was eager that all people believe. That changes how the closing question sounds. It is not a charge that he had been reaching for force; it is the lifting of a weight he had picked up. Al-Qurtubi adds a further report, also from Ibn Abbas (RA), that the people meant here is Abu Talib, given as a view that was said, not the settled sense.",
            "bn": "বাকিরা যা ইঙ্গিতে রাখেন, বাগাবী তা সোজা করে বলে দেন: এটি নবী ﷺ-এর জন্য সান্ত্বনা, কারণ তিনি চাইতেন সব মানুষ ঈমান আনুক। এতে শেষের প্রশ্নটার সুর বদলে যায়। প্রশ্নটা তাঁর বিরুদ্ধে অভিযোগ নয় যে তিনি জোর খাটাতে যাচ্ছিলেন। বরং যে বোঝা তিনি নিজে কাঁধে তুলে নিয়েছিলেন, সেটা নামিয়ে দেওয়া। কুরতুবী আরেকটি বর্ণনাও যোগ করেন, সেটিও ইবনে আব্বাস (রাঃ) থেকে: এখানে নাস বলতে আবূ তালিবকে বোঝানো হয়েছে। তবে তিনি এটাকে 'কেউ কেউ বলেছেন' ধরনের মত হিসেবেই আনেন, আয়াতের প্রতিষ্ঠিত অর্থ হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Report Stops",
          "bn": "বর্ণনা যেখানে থেমে যায়"
        },
        "p": [
          {
            "en": "No commentary consulted for this verse attaches a saying of the Prophet ﷺ to it. What at-Tabari and al-Qurtubi bring is the statement of a Companion, Ibn Abbas (RA), about what the Prophet ﷺ wanted and what Allah then told him. That is valuable, and it is not a narration from the Prophet ﷺ himself. The honest thing is to say so and leave the slot empty rather than borrow from a neighbouring verse.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীরই এর সঙ্গে নবী ﷺ-এর কোনো বাণী জুড়ে দেয় না। তাবারী আর কুরতুবী যা আনেন, তা একজন সাহাবী, ইবনে আব্বাস (রাঃ)-এর কথা: নবী ﷺ কী চাইতেন আর আল্লাহ তাঁকে কী জানালেন। কথাটা মূল্যবান, তবু তা নবী ﷺ-এর নিজের মুখের বর্ণনা নয়। সততার দাবি হল এ কথা খোলাখুলি বলে দেওয়া আর জায়গাটা খালি রাখা, পাশের আয়াত থেকে কিছু ধার করে না আনা।"
          },
          {
            "en": "There is a narration in this territory and it belongs elsewhere. Al-Qurtubi's note that the people here was said to mean Abu Talib points to the deathbed account recorded in Sahih al-Bukhari 4772, at the end of which al-Bukhari reports that 28:56 was then revealed about him. That verse has its own entry in this module and the account is told there. Here it is enough that the account exists, sits on another verse, and says the same thing about who guides.",
            "bn": "এ প্রসঙ্গে একটি হাদিস আছে, তবে তার জায়গা অন্য আয়াতে। কুরতুবী যে বলেছেন, এখানে নাস বলতে কেউ কেউ আবূ তালিবকে বুঝিয়েছেন, তা মৃত্যুশয্যার সেই ঘটনার দিকে ইঙ্গিত করে, যা সহীহ বুখারীর ৪৭৭২ নম্বর হাদিসে আছে। সে বর্ণনার শেষে বুখারী জানান, এরপর তাঁর ব্যাপারে ২৮:৫৬ নাজিল হয়। এ মডিউলে সে আয়াতের আলাদা আলোচনা আছে, ঘটনাটিও সেখানেই বলা হয়েছে। এখানে এটুকু জানাই যথেষ্ট যে ঘটনাটি আছে, তার জায়গা অন্য আয়াতে, আর হিদায়াত কে দেন সে প্রশ্নে সেটাও একই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Same Point Returns",
          "bn": "একই কথা যেখানে ফেরে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads this verse by gathering its sisters, and his list is the best guide to it. 11:118 says that had your Lord willed He would have made mankind one community, but they will not cease to differ, and 11:119 finishes the thought, except whom your Lord has given mercy, and for that He created them. 13:31 puts the same clause as a question to the believers, asking whether they have not realised that had Allah willed He would have guided the people, all of them.",
            "bn": "ইবনে কাসীর এ আয়াতটি বোঝান এর মতো আরও আয়াত এক জায়গায় জড়ো করে, আর আয়াতটি বোঝার জন্য তাঁর এই তালিকাই সবচেয়ে ভালো সহায়। ১১:১১৮ বলছে, তোমার রব চাইলে মানুষকে একই জাতি করে দিতে পারতেন, কিন্তু তারা মতভেদ করতেই থাকবে। ১১:১১৯ কথাটা শেষ করে: তবে তোমার রব যাদের প্রতি রহম করেছেন তারা ছাড়া, আর এ জন্যই তিনি তাদের সৃষ্টি করেছেন। ১৩:৩১ একই কথা মু'মিনদের সামনে প্রশ্ন করে রাখে: তারা কি বোঝেনি যে আল্লাহ চাইলে সব মানুষকেই হিদায়াত দিতে পারতেন?"
          },
          {
            "en": "16:9 says it from the other side, that upon Allah is the direction of the way and had He willed He could have guided you all. 6:107 joins both halves of our verse in a breath: had Allah willed they would not have associated, and We have not appointed you over them as a guardian. 88:22 states the limit flatly, that you are not over them a controller. A reader will also reach for 2:256, which shares the noun ikrah, though none of the commentaries consulted brings 2:256 in here.",
            "bn": "১৬:৯ কথাটা বলে উল্টো দিক থেকে, সোজা পথ দেখানো আল্লাহরই দায়িত্ব, আর তিনি চাইলে তোমাদের সবাইকেই পথ দেখাতে পারতেন। ৬:১০৭ আমাদের আয়াতের দুই ভাগকেই এক নিঃশ্বাসে জুড়ে দেয়: আল্লাহ চাইলে তারা শিরক করত না, আর আমি তোমাকে তাদের উপর পাহারাদার করে পাঠাইনি। ৮৮:২২ সীমাটা একদম সাফ করে বলে, তুমি তাদের উপর জবরদস্তিকারী নও। পাঠকের মনে ২:২৫৬ আয়াতটিও আসবে, যেখানে ইকরাহ শব্দটিই আছে; যদিও দেখা তাফসীরগুলোর কোনোটিই এখানে ২:২৫৬ টেনে আনে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight It Will Not Carry",
          "bn": "যে বোঝা আয়াত নেয় না"
        },
        "p": [
          {
            "en": "What the commentaries consulted here draw from the closing question is narrow and consistent. Ibn Kathir glosses tukrihu as to oblige them and force them, then says that this is neither upon you nor for you to do, and that you were not commanded to do it. As-Sa'di says you have no power over that, it is not within your ability, and nobody besides Allah has any power over any part of it. Al-Jalalayn reads the question as, would you compel people to what Allah did not will for them, and answers it flatly.",
            "bn": "শেষের প্রশ্নটি থেকে দেখা তাফসীরগুলো যা বের করে, তার পরিসর ছোট, আর সবাই একই কথা বলে। ইবনে কাসীর তুকরিহু-র অর্থ করেন, তাদের বাধ্য করা ও জোর খাটানো; তারপর বলেন, এ কাজ তোমার উপরও বর্তায় না, তোমার হাতেও নেই, আর তোমাকে এর হুকুমও দেওয়া হয়নি। সা'দী বলেন, এ ক্ষমতা তোমার নেই, তোমার সাধ্যেও নেই, আর আল্লাহ ছাড়া এর কোনো অংশে কারও ক্ষমতা নেই। জালালাইন প্রশ্নটিকে পড়েন এভাবে: আল্লাহ যা চাননি সেদিকে কি তুমি মানুষকে জোর করে নেবে? আর জবাবটা সাফ করেই দেন।"
          },
          {
            "en": "At-Tabari ends by turning the Prophet ﷺ back to his own task, closing with the command to proclaim what he is ordered and turn away from the idolaters. Among the commentaries consulted, a modern voice states the guard directly: Mawdudi writes in Tafhim al-Qur'an that the words are addressed in form to the Prophet ﷺ and in substance to the people, and that the verse does not suggest he ever wished to force anybody. None of them turns the verse into a chapter of law, and this article will not either. 2:256 states a rule; this verse states what even a prophet could not do.",
            "bn": "তাবারী তাঁর আলোচনা শেষ করেন নবী ﷺ-কে নিজের কাজের দিকে ফিরিয়ে এনে। শেষ কথাটা হল, যার হুকুম দেওয়া হয়েছে তা প্রকাশ্যে বলে যাও আর মুশরিকদের থেকে মুখ ফিরিয়ে নাও। দেখা তাফসীরগুলোর মধ্যে একজন আধুনিক মুফাসসির এই সাবধানতার কথাটা সোজাসুজি বলেছেন। মওদূদী তাফহীমুল কুরআনে লেখেন, কথাগুলো বাহ্যত নবী ﷺ-কে বলা হলেও আসলে তা মানুষের উদ্দেশে; আর আয়াত এমন কিছু বোঝায় না যে তিনি কখনো কাউকে জোর করতে চেয়েছিলেন। তাঁদের কেউই আয়াতটিকে ফিকহের অধ্যায় বানান না, এ লেখাও তা বানাবে না। ২:২৫৬ একটি বিধান জানায়; এ আয়াত জানায়, নবীর পক্ষেও যা করা সম্ভব ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Calling Without Owning the Outcome",
          "bn": "ডাকা আপনার, ফল আপনার নয়"
        },
        "p": [
          {
            "en": "The first place this lands is the household. A parent who has been pressing a grown child about the prayer, a friend who reopens the same argument every time they meet, a caller whose voice has begun to rise because nothing quieter worked: the verse tells all of them that the tool they are reaching for was withheld from the Prophet ﷺ himself. What is left is not nothing. It is clarity, repetition, patience, du'a, and a life the other person is free to watch.",
            "bn": "এ কথা সবার আগে এসে লাগে ঘরের ভেতর। যে মা-বাবা বড় হয়ে যাওয়া সন্তানকে নামাজ নিয়ে চাপ দিয়ে যাচ্ছেন, যে বন্ধু দেখা হলেই একই তর্ক আবার তোলেন, যে দাঈর গলা চড়ে গেছে কারণ নরম কথায় কাজ হয়নি: আয়াতটি তাঁদের সবাইকে বলছে, যে হাতিয়ারের দিকে তাঁরা হাত বাড়াচ্ছেন, সেটা নবী ﷺ-কেও দেওয়া হয়নি। তবু হাত একেবারে খালি নয়। থাকে স্পষ্ট করে বলা, বারবার বলা, সবর, দু'আ, আর এমন একটা জীবন, যা অন্যজন চাইলেই দেখতে পারে।"
          },
          {
            "en": "The second place is inward. As-Sa'di described the willing as an inspiring of faith and a turning of hearts toward taqwa, and that describes something a person can ask for and cannot manufacture. People do try to force faith in their own chests, gritting through a dry season and treating the dryness as a personal failure. The verse suggests a different move. Ask for what only He gives, keep doing the work that is actually yours, and stop demanding of yourself what was never produced by demand.",
            "bn": "দ্বিতীয় জায়গাটা মনের ভেতরে। সা'দী বলেছেন, আল্লাহ চাইলে অন্তরে ঈমান ঢেলে দিতেন আর হৃদয়কে তাকওয়ার দিকে ফিরিয়ে দিতেন। এ জিনিস চেয়ে নেওয়া যায়, নিজে বানানো যায় না। মানুষ নিজের বুকের ভেতরেও ঈমান জোর করে আনতে চায়: শুকনো মৌসুমটা দাঁতে দাঁত চেপে পার করে, আর শুকিয়ে যাওয়াটাকে নিজের ব্যর্থতা ধরে নেয়। আয়াত অন্য পথ দেখায়। যা কেবল তিনিই দেন তা চেয়ে নিন, যে কাজটা সত্যিই আপনার তা করে যান, আর জোর খাটিয়ে যা কোনোদিন আসে না, তা নিজের কাছে দাবি করা ছেড়ে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Instead of Forcing",
          "bn": "জোর নয়, চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "A supplication can be built out of the verse's own vocabulary, and it is offered here as that rather than as a transmitted du'a: O Allah, had You willed, everyone on earth would have believed; make me one of them. Incline my heart to faith instead of leaving me to force it. Make my calling clear and patient and free of coercion, and let the outcome stay with You, because it was never mine to carry.",
            "bn": "আয়াতের নিজের শব্দ দিয়েই একটি দু'আ গড়ে নেওয়া যায়। এটা সেভাবেই দেওয়া হল, বর্ণিত কোনো দু'আ হিসেবে নয়: হে আল্লাহ, আপনি চাইলে দুনিয়ার সবাই ঈমান আনত; আমাকেও তাদের একজন করে নিন। ঈমানের দিকে আমার অন্তরটা ঝুঁকিয়ে দিন, জোর করে আনার ভার আমার উপর ছেড়ে দেবেন না। আমার দাওয়াতকে স্পষ্ট করুন, সবরে ভরে দিন, জবরদস্তি থেকে মুক্ত রাখুন। আর ফলটা আপনার কাছেই থাক, কারণ সে বোঝা কোনোদিনই আমার ছিল না।"
          },
          {
            "en": "Then the questions to carry. Whose belief have I quietly turned into a task I expect to complete, and what has that done to the way I speak to them? When my advice is refused, is my next move a better argument or a harder push? What am I still saying only because it seems to work, rather than because it is true? If nobody ever changed because of me, would I keep calling? And when my own faith goes quiet, do I ask for it or squeeze it out of myself?",
            "bn": "এবার সঙ্গে নিয়ে যাওয়ার প্রশ্নগুলো। কার ঈমান আনাটাকে আমি মনে মনে নিজের একটা কাজ বানিয়ে ফেলেছি, যা আমাকেই শেষ করতে হবে? আর তাতে তার সঙ্গে আমার কথা বলার ধরন কেমন বদলে গেছে? আমার নসীহত কেউ না নিলে আমি কি আরও ভালো যুক্তি খুঁজি, নাকি আরও জোরে ধাক্কা দিই? কোন কথাটা আমি এখনো বলে যাচ্ছি কেবল কাজে লাগে বলে, সত্য বলে নয়? আমার কারণে কেউ কোনোদিন না বদলালেও কি আমি ডেকে যেতাম? আর নিজের ঈমান যখন চুপ হয়ে যায়, তখন কি তা আল্লাহর কাছে চেয়ে নিই, নাকি নিজের ভেতর থেকে চেপে বের করি?"
          }
        ]
      }
    ]
  },
  "10:109": {
    "sections": [
      {
        "h": {
          "en": "The Last Order in Yunus",
          "bn": "সূরা ইউনুসের শেষ হুকুম"
        },
        "p": [
          {
            "en": "This is the closing verse of Surah Yunus. Before it runs a sequence of instructions set in the Messenger's mouth. 10:104 has him say he does not worship what they worship besides Allah but worships Allah who causes their death; 10:105 tells him to set his face to the religion as a hanif; 10:106 forbids calling on what can neither benefit nor harm. 10:107 states that nobody lifts an affliction Allah sends. 10:108 announces that guidance and straying are each a person's own account.",
            "bn": "এটি সূরা ইউনুসের শেষ আয়াত। এর আগে পরপর কয়েকটি হুকুম, সবই রাসূলের মুখে বসানো। ১০:১০৪ আয়াতে তাঁকে বলতে বলা হয়, আল্লাহ ছাড়া তোমরা যাদের ইবাদত কর আমি তাদের ইবাদত করি না; আমি ইবাদত করি সেই আল্লাহর, যিনি তোমাদের মৃত্যু ঘটান। ১০:১০৫ আয়াতে হুকুম, একনিষ্ঠ হয়ে দ্বীনের দিকে মুখ ঠিক রাখ। ১০:১০৬ আয়াতে নিষেধ, যা উপকারও করে না ক্ষতিও করে না তাকে ডেকো না। ১০:১০৭ আয়াত বলে, আল্লাহ কষ্ট দিলে তা সরানোর কেউ নেই। আর ১০:১০৮ আয়াত ঘোষণা করে, হিদায়াত আর গোমরাহি যার যার নিজের হিসাবে।"
          },
          {
            "en": "Then our verse. It is the only sentence in that closing run that is not a Say: the Prophet ﷺ is not told to announce it, he is told to do it. The surah opened in 10:1 calling its contents the verses of the wise Book, and in 10:2 reported the people's astonishment that revelation came to a man among them. It ends by telling that man to keep following what comes down. The argument is not concluded. The instruction is.",
            "bn": "তারপর আমাদের আয়াত। শেষের ওই হুকুমগুলোর মধ্যে কেবল এটিই 'বলো' দিয়ে শুরু হয়নি। নবী ﷺ-কে এখানে কথাটা ঘোষণা করতে বলা হচ্ছে না, নিজে করতে বলা হচ্ছে। সূরাটি শুরু হয়েছিল ১০:১ আয়াতে নিজের আয়াতগুলোকে হিকমতে ভরা কিতাবের আয়াত বলে। ১০:২ আয়াতে জানিয়েছিল, তাদেরই মধ্যকার এক মানুষের কাছে ওহি এসেছে বলে লোকেরা অবাক হয়েছে। সেই সূরা শেষ হচ্ছে সেই মানুষটিকেই বলে: যা নাজিল হচ্ছে তার পেছনে চলতে থাকো। সূরা তর্কের উপসংহার টেনে শেষ হয় না, শেষ হয় একটি হুকুম দিয়ে।"
          },
          {
            "en": "None of the seven tafsir commentaries consulted for this verse reports an occasion of revelation, and the tafsir page for 10:109 at quranx carries nothing from al-Wahidi, so the placement is the context. One detail of that placement deserves notice. At-Tabari, al-Qurtubi and as-Sa'di each end their commentary on the whole surah with this sentence. It is where the commentators themselves stop.",
            "bn": "এ আয়াতের জন্য দেখা সাতটি তাফসীরের একটিও কোনো শানে নুযূল জানায় না, আর কুরআনএক্স-এর ১০:১০৯ তাফসীর পাতাতেও ওয়াহিদীর কিছু নেই। কাজেই আয়াতের অবস্থানটাই তার প্রেক্ষাপট। অবস্থান নিয়ে একটি কথা খেয়াল করার মতো। তাবারী, কুরতুবী আর সা'দী গোটা সূরার তাফসীর এই বাক্যেই শেষ করেন। মুফাসসিরগণ নিজেরাই এখানে এসে থামেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Imperatives and a Limit",
          "bn": "দুই হুকুম আর একটা সীমা"
        },
        "p": [
          {
            "en": "In the text of Surah Yunus the verse runs to 11 Arabic words, with one pause mark printed in the line and not counted among them. Two of those words are commands, both joined to what precedes by wa: wa-ittabi', and follow, from the root t-b-', to come behind and go where a thing goes; and wasbir, and be patient, from s-b-r, to hold something in. Neither verb names a feeling. Both name a position kept.",
            "bn": "সূরা ইউনুসের পাঠে আয়াতটি ১১টি আরবি শব্দের, আর লাইনে ছাপা একটি ওয়াকফ চিহ্ন এই গোনার বাইরে। এর দুটি শব্দ হুকুম, দুটিই আগের কথার সঙ্গে জোড়া ওয়াও দিয়ে। ওয়াততাবি', অর্থাৎ অনুসরণ কর, ধাতু তা-বা-আ, পেছনে পেছনে চলা, জিনিসটা যেদিকে যায় সেদিকেই যাওয়া। আর ওয়াসবির, অর্থাৎ সবর কর, ধাতু সা-বা-রা, নিজেকে আটকে রাখা। কোনো ক্রিয়াই অনুভূতির নাম নয়। দুটিই ধরে রাখা অবস্থানের নাম।"
          },
          {
            "en": "The object of the first command is not what was revealed but ma yuha ilayk, what is being revealed to you: imperfect and passive, an arrival still in progress at the moment of the order. The Messenger is not pointed back at a finished deposit to guard. He is told to keep step with something still coming down, which is a harder discipline than looking after an archive.",
            "bn": "প্রথম হুকুমের কর্ম 'যা নাজিল হয়েছে' নয়, মা ইঊহা ইলাইক, অর্থাৎ তোমার কাছে যা নাজিল করা হচ্ছে। ক্রিয়াটি অসম্পূর্ণ কালের আর কর্মবাচ্যে; হুকুম দেওয়ার মুহূর্তে জিনিসটা তখনো নামছে। রাসূল ﷺ-কে শেষ হয়ে যাওয়া কোনো আমানতের দিকে আঙুল তুলে দেখানো হচ্ছে না, যা কেবল পাহারা দিলেই চলে। তাঁকে বলা হচ্ছে, যা এখনো নামছে তার সঙ্গে পা মিলিয়ে চলতে; ভাণ্ডার আগলে রাখার চেয়ে এ কাজ কঠিন।"
          },
          {
            "en": "Then hatta yahkuma Allah, until Allah judges. Hatta fixes an end, and the verb after it stands in the subjunctive because that end has not arrived. The patience is bounded, but the boundary is not disclosed to the person keeping it. Al-Qurtubi adds a grammatical note at the close: wa huwa khayru al-hakimin is a subject and a predicate, a sentence of its own, since Allah judges by nothing but the truth.",
            "bn": "এরপর হাত্তা ইয়াহকুমাল্লাহ, অর্থাৎ যতক্ষণ না আল্লাহ ফায়সালা করেন। হাত্তা শেষ সীমা বেঁধে দেয়, আর তার পরের ক্রিয়াটি নসবের অবস্থায় থাকে, কারণ সেই শেষটা তখনো আসেনি। সবরের সীমা আছে, কিন্তু যে সবর করছে তাকে সীমাটা জানানো হয়নি। কুরতুবী শেষে ব্যাকরণের ছোট্ট একটি কথা যোগ করেন: ওয়া হুওয়া খাইরুল হাকিমীন হল মুবতাদা আর খবর, নিজেই আলাদা বাক্য; কারণ আল্লাহ হক ছাড়া কিছু দিয়ে ফায়সালা করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Against What Exactly",
          "bn": "সবর ঠিক কীসের উপর"
        },
        "p": [
          {
            "en": "At-Tabari reads both halves narrowly. Follow the revelation of Allah that He sends down to you, he writes, and act on it; and be patient over what reaches you in Allah's cause from the idolaters of your people, the harm and the things you hate, until Allah decides His affair concerning them and you with a decisive act. Ibn Kathir compresses it: hold fast to what Allah revealed, and be patient with the opposition you meet.",
            "bn": "তাবারী দুই অংশেরই অর্থ করেন সীমিত পরিসরে। তিনি লেখেন, আল্লাহ তোমার প্রতি যে ওহি নাজিল করেন তার অনুসরণ কর আর সে অনুযায়ী আমল কর। আর আল্লাহর পথে তোমার জাতির মুশরিকদের কাছ থেকে যে কষ্ট আর অপ্রিয় জিনিস তোমার উপর আসে, তাতে সবর কর, যতক্ষণ না আল্লাহ তাদের আর তোমার ব্যাপারে চূড়ান্ত ফয়সালা দিয়ে নিজের হুকুম জারি করেন। ইবনে কাসীর কথাটা ছোট করে আনেন: আল্লাহ যা নাজিল করেছেন তা শক্ত করে ধর, আর যে বিরোধিতা আসে তাতে সবর কর।"
          },
          {
            "en": "Al-Qurtubi and al-Muyassar widen it. For those who do not read the verse as abrogated, al-Qurtubi says, its meaning is: be patient upon obedience and away from disobedience. Al-Muyassar keeps all three senses at once, patience upon obeying Allah, patience away from disobeying Him, and patience under the harm of whoever harms you while you deliver His message. On that reading the hardest thing commanded is steadiness in your own worship.",
            "bn": "কুরতুবী আর মুয়াসসার অর্থটা আরও চওড়া করেন। যাঁরা আয়াতটিকে রহিত মানেন না, কুরতুবীর ভাষায় তাঁদের কাছে এর অর্থ, আনুগত্যের উপর সবর কর আর গুনাহ থেকে দূরে থাকার উপর সবর কর। মুয়াসসার তিনটি অর্থই একসঙ্গে ধরে রাখে: আল্লাহর আনুগত্যের উপর সবর, তাঁর নাফরমানি থেকে বাঁচার উপর সবর, আর তাঁর বার্তা পৌঁছে দিতে গিয়ে যে কষ্ট দেয় তার কষ্টের উপর সবর। এ পড়া অনুযায়ী সবচেয়ে কঠিন হুকুমটা নিজের ইবাদতে অটল থাকা।"
          },
          {
            "en": "As-Sa'di takes the first command apart before reaching the second. Follow what is revealed to you, he glosses, in knowledge, in action, in state, and in calling others to it; and be patient upon that, for this is the highest of the kinds of patience and its outcome is praised. Then the warning: do not slacken and do not grow weary, but stay at it and hold firm. He adds that the Prophet ﷺ complied and stood firm on the straight path.",
            "bn": "সা'দী দ্বিতীয় হুকুমে যাওয়ার আগে প্রথম হুকুমটাকে খুলে দেখান। তাঁর ব্যাখ্যা: তোমার প্রতি যা ওহি করা হয় তার অনুসরণ কর ইলমে, আমলে, নিজের হালতে, আর মানুষকে এর দিকে ডাকায়; আর তার উপর সবর কর, কারণ এটাই সবচেয়ে উঁচু স্তরের সবর, আর এর পরিণাম প্রশংসিত। এরপর সাবধান করেন: ঢিলা দিও না, বিরক্তও হয়ো না, লেগে থাক আর অটল থাক। তিনি আরও বলেন, নবী ﷺ এ হুকুম মেনেছেন আর সিরাতে মুস্তাকীমের উপর অটল থেকেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated by the Fighting Verse",
          "bn": "কিতালের আয়াত কি একে রদ করল"
        },
        "p": [
          {
            "en": "The commentators do not agree on whether this patience was later cancelled. At-Tabari transmits, through Yunus from Ibn Wahb, that Ibn Zayd said of and be patient until Allah judges: this is abrogated, Allah's judging was that He decreed fighting them and commanded harshness towards them. At-Tabari's own summing up just before that narration runs the same way. Allah judged between him and them at Badr, and concerning those who remained His Prophet ﷺ was commanded either to take them the road of the destroyed, or that they repent.",
            "bn": "সবর পরে রহিত হয়ে গেছে কিনা, এ নিয়ে মুফাসসিরগণ এক মত নন। তাবারী ইউনুস থেকে ইবনে ওয়াহবের সূত্রে ইবনে যায়েদের কথা তুলে আনেন। 'আর সবর কর যতক্ষণ না আল্লাহ ফায়সালা করেন' প্রসঙ্গে ইবনে যায়েদ বলেছেন, এটি রহিত; আল্লাহর ফায়সালা হল, তিনি তাদের বিরুদ্ধে জিহাদের হুকুম দিয়েছেন আর তাদের প্রতি কঠোর হতে বলেছেন। এ বর্ণনার ঠিক আগে তাবারী নিজে যে সারকথা লেখেন তা-ও একই দিকে যায়। বদরের দিন আল্লাহ তাঁর আর তাদের মধ্যে ফায়সালা করে দিয়েছেন; আর যারা বাকি থাকল তাদের ব্যাপারে নবী ﷺ-কে হুকুম দিয়েছেন, হয় ধ্বংস হয়ে যাওয়াদের পথেই তাদের নেওয়া হবে, নয়তো তারা তওবা করবে।"
          },
          {
            "en": "Al-Qurtubi lays both positions down without naming anyone: it is said it was abrogated by the verse of fighting, and it is said it is not abrogated, its meaning being patience upon obedience and away from disobedience. Al-Baghawi never uses the word naskh, yet he glosses the judging as Allah's help for him and the subduing of his enemy, then says He judged with fighting the idolaters and with jizyah from the People of the Book. As-Sa'di, Ibn Kathir and al-Muyassar raise no abrogation.",
            "bn": "কুরতুবী কারও নাম না করেই দুই মত সাজিয়ে রাখেন: বলা হয়েছে কিতালের আয়াত একে রহিত করেছে, আবার বলা হয়েছে এটি রহিত নয়, আর এর অর্থ আনুগত্যের উপর আর গুনাহ থেকে দূরে থাকার উপর সবর। বাগাবী নাসখ শব্দটাই ব্যবহার করেন না, তবু ফায়সালার অর্থ করেন আল্লাহর সাহায্য আর শত্রুকে দমন; এরপর লেখেন, তিনি মুশরিকদের সঙ্গে লড়াইয়ের আর আহলে কিতাবের কাছ থেকে জিযিয়া নেওয়ার ফায়সালা দিয়েছেন। সা'দী, ইবনে কাসীর আর মুয়াসসার রহিত হওয়ার প্রশ্নই তোলেন না।"
          },
          {
            "en": "Two things are worth keeping straight. The disagreement is real and old, and this article settles nothing in it; both readings stand above with their names. And on either reading, nothing here is an instruction to a private person. The commentators who speak of fighting describe a judgement Allah decreed and a command given to the Prophet ﷺ in his office, leaving the matter of war to the authority they name. What the verse puts into a reader's hands is the patience.",
            "bn": "এখানে দুটি কথা আলাদা করে মনে রাখা দরকার। মতভেদটা সত্যিকারের এবং পুরোনো, আর এ লেখা তার নিষ্পত্তি করছে না; দুই মতই উপরে নাম ধরে তুলে দেওয়া হয়েছে। আর যে মতই নিন, এখানে কোনো সাধারণ ব্যক্তির জন্য কোনো হুকুম নেই। যাঁরা লড়াইয়ের কথা বলেন, তাঁরা বলেন আল্লাহর দেওয়া ফায়সালার কথা, আর নবী ﷺ-কে তাঁর দায়িত্বের জায়গা থেকে দেওয়া হুকুমের কথা। যুদ্ধের বিষয়টা তাঁরা ছেড়ে দেন সেই কর্তৃপক্ষের হাতে, যার কথা তাঁরা উল্লেখ করেন। আয়াত পাঠকের হাতে যা তুলে দেয়, তা হল সবর।"
          }
        ]
      },
      {
        "h": {
          "en": "Be Patient Until the Hawd",
          "bn": "হাওযে দেখা হওয়া পর্যন্ত সবর"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the only commentary among those consulted that attaches a narration to this verse. He reports from Ibn Abbas (RA) that when it came down the Prophet ﷺ gathered the Ansar and nobody else with them, and told them they would meet athara after him, others being preferred over them, and should be patient until they met him at the Hawd. The like is narrated from Anas (RA).",
            "bn": "দেখা তাফসীরগুলোর মধ্যে কেবল কুরতুবীই এ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেন। তিনি ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, আয়াতটি যখন নামল তখন নবী ﷺ আনসারদের ডেকে জড়ো করলেন, তাঁদের সঙ্গে আর কাউকে ডাকলেন না, আর বললেন, আমার পরে তোমরা আসারা দেখবে, অর্থাৎ তোমাদের উপর অন্যদের অগ্রাধিকার দেওয়া হবে; কাজেই সবর করো, যতক্ষণ না হাওযের ধারে আমার সঙ্গে দেখা হয়। আনাস (রাঃ) থেকেও এমনটাই বর্ণিত।"
          },
          {
            "en": "The wording is in Sahih al-Bukhari. At 3793, from Anas ibn Malik (RA): the Prophet ﷺ said to the Ansar, After me you will see others given preference to you; so be patient till you meet me, and your promised place of meeting will be the Tank. Al-Qurtubi's phrasing differs a little from al-Bukhari's, so al-Bukhari's alone is quoted here, not a blend. Al-Bukhari 3792 supplies the setting, from Usayd ibn Hudayr (RA): a man of the Ansar had asked to be appointed as somebody else had been.",
            "bn": "শব্দগুলো সহীহ বুখারীতেই আছে। ৩৭৯৩ নম্বরে আনাস ইবনে মালিক (রাঃ) থেকে বর্ণিত, নবী ﷺ আনসারদের বললেন, আমার পরে তোমরা দেখবে তোমাদের উপর অন্যদের অগ্রাধিকার দেওয়া হচ্ছে; কাজেই সবর করো যতক্ষণ না আমার সঙ্গে দেখা হয়, আর তোমাদের সঙ্গে দেখা হওয়ার জায়গা হাওয। কুরতুবীর বর্ণনার শব্দ বুখারীর শব্দ থেকে একটু আলাদা, তাই এখানে কেবল বুখারীর শব্দই তুলে দেওয়া হল, মিশেল নয়। বুখারীর ৩৭৯২ নম্বর ঘটনার পটভূমি দেয়, উসাইদ ইবনে হুযাইর (রাঃ) থেকে: আনসারদের এক ব্যক্তি আবেদন করেছিলেন, অন্য কাউকে যেমন দায়িত্ব দেওয়া হয়েছে তাঁকেও যেন দেওয়া হয়।"
          },
          {
            "en": "The report sits oddly with where the surah is normally placed, since the Ansar are a Madinan audience while Surah Yunus is counted Makkan, and al-Qurtubi records it without taking that up. What it does show is how the command was heard early. The patience ordered here was understood to reach past the lifetime of the man first addressed, and the meeting place named for its end is not a battlefield but a pool.",
            "bn": "বর্ণনাটি সূরার চেনা অবস্থানের সঙ্গে ঠিক খাপ খায় না, কারণ আনসার তো মাদানী শ্রোতা, আর সূরা ইউনুসকে গোনা হয় মক্কী বলে; কুরতুবী বর্ণনাটি আনেন, কিন্তু এ অমিল নিয়ে কিছু বলেন না। তবে এ থেকে বোঝা যায়, শুরুর দিকে হুকুমটা কীভাবে বোঝা হয়েছিল। সবাই বুঝেছিলেন, এখানে যে সবরের হুকুম, তা যাঁকে প্রথম বলা হয়েছিল তাঁর জীবন পেরিয়েও চলবে। আর সেই সবরের শেষে দেখা হওয়ার যে জায়গার নাম বলা হল, তা কোনো রণক্ষেত্র নয়, হাওয।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Sentence in Al-A'raf",
          "bn": "আরাফে হুবহু এই কথাটাই"
        },
        "p": [
          {
            "en": "7:87 carries the closing words almost exactly, but in another mouth. Shu'ayb (AS) tells the divided people of Madyan that if a party among them has believed in what he was sent with and a party has not, then be patient until Allah judges between us, and He is the best of judges. There it is a prophet's answer to a split in his own town; here it is Allah's order to His Messenger. 7:89 turns the idea into a supplication.",
            "bn": "৭:৮৭ আয়াতে শেষ কথাগুলো প্রায় হুবহু আছে, তবে অন্য মুখে। শুআইব (আঃ) মাদয়ানের ভাগ হয়ে যাওয়া লোকদের বলছেন, আমাকে যা দিয়ে পাঠানো হয়েছে তাতে যদি তোমাদের একদল ঈমান আনে আর একদল না আনে, তাহলে সবর কর যতক্ষণ না আল্লাহ আমাদের মধ্যে ফায়সালা করেন; তিনিই সর্বোত্তম ফায়সালাকারী। সেখানে কথাটা নিজের শহরের ভাঙন নিয়ে এক নবীর জবাব; এখানে কথাটা আল্লাহর পক্ষ থেকে তাঁর রাসূলকে দেওয়া হুকুম। ৭:৮৯ আয়াতে একই ভাবনা দোয়ার চেহারা পায়।"
          },
          {
            "en": "68:48 tells the Prophet ﷺ to be patient for the decision of his Lord and not to be like the companion of the fish, Yunus (AS), whose name this surah carries. 33:2 repeats the first command word for word in a Madinan surah years later: follow what is revealed to you from your Lord. And 11:49, closing the account of Nuh (AS) in the next surah, gives the same imperative with its reason attached, so be patient, the outcome belongs to the righteous.",
            "bn": "৬৮:৪৮ আয়াতে নবী ﷺ-কে বলা হচ্ছে, তোমার রবের ফায়সালার জন্য সবর কর, আর মাছওয়ালার মতো হয়ো না; সেই মাছওয়ালা ইউনুস (আঃ), যাঁর নামেই এ সূরা। ৩৩:২ আয়াতে বছর কয়েক পরের মাদানী সূরায় প্রথম হুকুমটাই হুবহু ফিরে আসে: তোমার রবের কাছ থেকে তোমার প্রতি যা ওয়াহী করা হয় তার অনুসরণ কর। আর ১১:৪৯ আয়াত, পরের সূরায় নূহ (আঃ)-এর ঘটনার শেষে, একই হুকুম দেয় কারণসহ, কাজেই সবর কর, শুভ পরিণতি মুত্তাকীদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Between Order and Verdict",
          "bn": "হুকুম আর ফায়সালার মাঝখানে"
        },
        "p": [
          {
            "en": "The verse splits a life into two parts and hands you only the first. What is revealed is yours to follow. When the matter gets settled is not yours at all. Much of the exhaustion that religious effort produces comes from quietly taking the second part as well: measuring a year of work by whether the people around you changed, treating an unresolved conflict as a personal failure, checking the result weekly as though the judging had been delegated.",
            "bn": "আয়াতটি জীবনকে দুটি ভাগে ভাগ করে, আর আপনার হাতে দেয় কেবল প্রথম ভাগটা। যা নাজিল হয়েছে তার পেছনে চলা আপনার কাজ। ব্যাপারটার ফায়সালা কখন হবে, তা মোটেও আপনার কাজ নয়। দ্বীনি মেহনতে যে ক্লান্তি জমে, তার অনেকটাই আসে চুপচাপ দ্বিতীয় ভাগটাও কাঁধে তুলে নেওয়া থেকে। আমরা বছরের মেহনত মাপি আশেপাশের মানুষ বদলাল কিনা দিয়ে, মীমাংসা না হওয়া ঝগড়াকে নিজের ব্যর্থতা ধরে নিই, আর প্রতি সপ্তাহে ফল মেপে দেখি, যেন ফায়সালার ভারটাও আমাদেরই দেওয়া হয়েছে।"
          },
          {
            "en": "Practically, that becomes a question about which commitments survive when nothing visibly improves. As-Sa'di's breakdown of the first command is a usable checklist for a week: knowledge, action, state, and calling. Learn something from the revelation, act on it, let it alter your bearing, and pass it on. Not a single item there requires a result from anybody else, which is why they can be commanded while the verdict cannot.",
            "bn": "কাজের কথায় এটি দাঁড়ায় এক প্রশ্নে: চোখে পড়ার মতো কিছুই যখন বদলাচ্ছে না, তখন আমার কোন কাজগুলো টিকে থাকে? প্রথম হুকুমটাকে সা'দী যেভাবে ভেঙে দেখান, তা এক সপ্তাহের কাজের তালিকা হিসেবে চলে: ইলম, আমল, হালত, আর দাওয়াত। ওহি থেকে কিছু শিখুন, সে অনুযায়ী আমল করুন, তা আপনার চালচলন বদলে দিক, আর কাউকে পৌঁছে দিন। এর একটিতেও অন্য কারও কাছ থেকে ফল আসার দরকার নেই। এ কারণেই এগুলোর হুকুম দেওয়া চলে, অথচ ফায়সালার হুকুম দেওয়া চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Decision",
          "bn": "ফায়সালা চেয়ে দোয়া"
        },
        "p": [
          {
            "en": "The Quran supplies a supplication in the same vocabulary, spoken in 7:89 by Shu'ayb (AS) and those with him: rabbana-ftah baynana wa bayna qawmina bil-haqqi wa anta khayru al-fatihin, our Lord, decide between us and our people in truth, and You are the best of those who give decision. It is a prophet's prayer preserved in the Book, not a Sunnah formula fixed by a narration.",
            "bn": "এই একই শব্দে গড়া একটি দোয়া কুরআনেই আছে। ৭:৮৯ আয়াতে শুআইব (আঃ) আর তাঁর সঙ্গীরা বলেন: রাব্বানাফতাহ বাইনানা ওয়া বাইনা কাওমিনা বিলহাক্কি ওয়া আনতা খাইরুল ফাতিহীন, অর্থাৎ হে আমাদের রব, আমাদের আর আমাদের জাতির মধ্যে হক দিয়ে ফায়সালা করে দিন, আপনিই তো সবচেয়ে ভালো ফায়সালাকারী। এটি কিতাবে সংরক্ষিত এক নবীর দোয়া, হাদিসে নির্দিষ্ট করা কোনো সুন্নাহর দোয়া নয়।"
          },
          {
            "en": "A shorter supplication can be built from this verse's own words, and it should be called exactly that. O Allah, make me follow what You have sent down, hold me steady until You judge, and let me be content that You are the best of judges. Nothing in the commentaries consulted fixes such a wording, so it is a reader's sentence assembled from the verse, not a narration.",
            "bn": "আয়াতের নিজের শব্দ দিয়েই ছোট একটি দোয়া গড়ে নেওয়া যায়, আর সেটিকে ঠিক সে নামেই ডাকা দরকার। হে আল্লাহ, আপনি যা নাজিল করেছেন তার পেছনে চলার তাওফিক আমাকে দিন, আপনার ফায়সালা না আসা পর্যন্ত আমাকে অটল রাখুন, আর আপনিই যে সর্বোত্তম ফায়সালাকারী, এ কথায় আমার মনকে তৃপ্ত রাখুন। দেখা তাফসীরগুলোর কোথাও এমন শব্দ বাঁধা নেই; কাজেই এটি আয়াত থেকে গড়ে নেওয়া পাঠকের বাক্য, কোনো হাদিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions at the Surah's End",
          "bn": "সূরার শেষে কয়েকটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Four questions to carry out of Surah Yunus. What has already reached me from the Book that I understood and have still not acted on, and how long has it been sitting there? When I describe myself as patient, am I waiting on Allah's decision or on a particular person changing their position? Which of my efforts would I quietly drop if I were told the verdict will not arrive within my lifetime?",
            "bn": "সূরা ইউনুস থেকে সঙ্গে নেওয়ার মতো চারটি প্রশ্ন। কিতাব থেকে কোন কথাটা আমার কাছে পৌঁছে গেছে, বুঝেও গেছি, অথচ আজও কাজে লাগাইনি, আর কতদিন ধরে তা পড়ে আছে? নিজেকে সবরকারী বলার সময় আমি আসলে কার অপেক্ষায় থাকি, আল্লাহর ফায়সালার, নাকি নির্দিষ্ট কোনো মানুষের মত বদলানোর? আর যদি জানিয়ে দেওয়া হয় ফায়সালাটা আমার জীবনকালের ভেতরে আসবে না, তাহলে আমার কোন চেষ্টাগুলো আমি চুপচাপ ছেড়ে দিতাম?"
          },
          {
            "en": "And a question aimed at the last clause rather than the first two. Do I actually want the best of judges to judge this matter, or do I want it settled my way, because those are not the same request, and the difference shows up in what I ask for once the delay gets long. Sitting with that is nearer to tadabbur than deciding the abrogation dispute, which the commentators left open.",
            "bn": "আর একটি প্রশ্ন শেষ বাক্যাংশটাকে ধরে, প্রথম দুটি হুকুমকে নয়। এই ব্যাপারটার ফায়সালা আমি সত্যিই সর্বোত্তম ফায়সালাকারীর হাতে চাই, নাকি নিজের মনমতো চাই? এ দুই চাওয়া এক নয়, আর দেরি লম্বা হলে আমার দোয়ায় কী চাইছি তাতেই তফাতটা ধরা পড়ে। রহিত হওয়ার তর্কটা কোনো এক দিকে মিটিয়ে ফেলার চেয়ে এ প্রশ্নটা নিয়ে বসে থাকাই তাদাব্বুরের বেশি কাছের; মুফাসসিরগণ নিজেরাই তো তর্কটা খোলা রেখে গেছেন।"
          }
        ]
      }
    ]
  }
});
