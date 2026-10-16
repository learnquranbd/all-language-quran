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
  "99:7-8": {
    "sections": [
      {
        "h": {
          "en": "The Last Two Lines",
          "bn": "শেষ দুই পংক্তি"
        },
        "p": [
          {
            "en": "Surah az-Zalzalah has eight verses, and these are the final two. Everything before them is on the scale of a planet. The earth is shaken with its own convulsion in 99:1, throws out its burdens in 99:2, and in 99:3 man asks what is wrong with it. Then the ground itself gives testimony, because its Lord inspired it to, in 99:4 and 99:5, and in 99:6 people come out in separate groups to be shown their deeds.",
            "bn": "সূরা আয-যালযালাহর আয়াত আটটি, আর এ দুটি তার শেষ দুই আয়াত। এর আগের সবকিছুই গোটা পৃথিবীর মাপে বলা। ৯৯:১ আয়াতে যমীন নিজের প্রচণ্ড কম্পনে কেঁপে ওঠে, ৯৯:২ আয়াতে ভেতরের বোঝা বের করে দেয়, আর ৯৯:৩ আয়াতে মানুষ জিজ্ঞেস করে, এর কী হলো? তারপর ৯৯:৪ ও ৯৯:৫ আয়াতে যমীন নিজেই সাক্ষ্য দেয়, কারণ তার রব তাকে সেই আদেশ দিয়েছেন। আর ৯৯:৬ আয়াতে মানুষ আলাদা আলাদা দলে বের হয়ে আসে, যাতে তাদের আমল তাদের দেখানো হয়।"
          },
          {
            "en": "Having widened the lens as far as it will go, the surah closes by narrowing it to a speck. The last two verses do not describe the Day at all. They describe you, standing in it, holding something almost too small to name. That is the whole design: a cosmic disturbance is set up, and then it is spent on the smallest unit of a human life.",
            "bn": "দৃষ্টি যতদূর যায় ততদূর মেলে ধরার পর সূরাটি শেষে তা গুটিয়ে আনে একটি বিন্দুতে। শেষ দুই আয়াতে সেই দিনের কোনো বর্ণনাই নেই। আছেন আপনি: সেই দিনে দাঁড়িয়ে, হাতে এমন কিছু নিয়ে, যা এত ছোট যে নাম দেওয়াও কঠিন। পুরো গঠনটাই এমন: সূরা প্রথমে মহাজাগতিক এক আলোড়নের মঞ্চ সাজায়, তারপর সবটুকু ঢেলে দেয় মানুষের জীবনের সবচেয়ে ছোট এককটির ওপর।"
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
            "en": "Mithqal means a weight — it comes from the root of heaviness, and it belongs to the imagery of the scales. The disputed word is dharrah. The early authorities explain it in more than one way, and it is honest to give the range rather than settle it: the smallest kind of ant; the mote of dust that floats visibly in a shaft of sunlight coming through a window; the specks that cling to a palm pressed against the ground and lifted.",
            "bn": "মিছক্বাল মানে ওজন। শব্দটি এসেছে ভারী হওয়ার ধাতু থেকে, আর দাঁড়িপাল্লার ছবির সঙ্গেই এর সম্পর্ক। মতভেদ যাররাহ শব্দটি নিয়ে। প্রথম যুগের আলিমরা একে একাধিকভাবে ব্যাখ্যা করেছেন, আর একটি মত বেছে না নিয়ে সবগুলো তুলে ধরাই সততা: সবচেয়ে ছোট জাতের পিঁপড়া; জানালা দিয়ে আসা রোদের রেখায় যে ধূলিকণা ভাসতে দেখা যায়; কিংবা মাটিতে হাতের তালু চেপে তুলে নিলে তালুতে যে কণাগুলো লেগে থাকে।"
          },
          {
            "en": "The app renders the phrase as an atom's weight, reaching for the smallest thing a modern reader can picture, as the classical explanations reached for the smallest thing an Arab listener could see. Neither is a unit of measurement, and the verse is not offering one. What the word does is mark the lower edge of noticing — below the level at which a human being would bother to record anything.",
            "bn": "অ্যাপের অনুবাদে শব্দবন্ধটি হয়েছে 'অণু পরিমাণ'। আধুনিক পাঠক যত ছোট জিনিস কল্পনা করতে পারেন, অনুবাদ সেটাই বেছে নিয়েছে; ঠিক যেমন পুরোনো ব্যাখ্যাগুলো বেছে নিয়েছিল আরব শ্রোতার চোখে দেখা সবচেয়ে ছোট জিনিসটি। কোনোটিই মাপের একক নয়, আর আয়াতও কোনো একক দিচ্ছে না। শব্দটি আসলে চোখে পড়ার নিচের সীমাটা দেখিয়ে দেয়: এর চেয়ে ছোট কিছু হলে মানুষ তা লিখে রাখার কথা ভাবতই না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Will See It",
          "bn": "সে তা দেখবে"
        },
        "p": [
          {
            "en": "The verb is yarah: he will see it. Not he will be told about it, not it will be counted against him — he will see it. And the two verses are identical in every part except one word, khayran and sharran, good and evil. Same weight, same verb, same certainty, in the same grammar. The symmetry is the argument: the scales do not use a coarser measure for the small kindness than for the small wrong.",
            "bn": "ক্রিয়াটি হলো ইয়ারাহ: সে তা দেখবে। তাকে জানানো হবে বা তার বিরুদ্ধে গোনা হবে, এমন নয়; সে তা দেখবে। আর দুই আয়াত হুবহু এক, শুধু একটি শব্দ ছাড়া: খাইরান আর শাররান, ভালো আর মন্দ। একই ওজন, একই ক্রিয়া, একই নিশ্চয়তা, একই ব্যাকরণ। এই মিলটাই আসল যুক্তি: ছোট্ট একটি ভালো ব্যবহার মাপতে দাঁড়িপাল্লা ছোট্ট একটি অন্যায়ের চেয়ে মোটা মাপকাঠি নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Comprehensive Verse",
          "bn": "সর্বব্যাপী আয়াত"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Abu Hurayrah (RA) that the Prophet ﷺ was asked about donkeys, and answered that nothing had been revealed to him concerning them except this single all-embracing verse, and he recited it. The report is worth holding onto because of what prompted it. A narrow question about one kind of property was answered by a principle that covers every act of every person, which is what the phrase all-embracing is doing.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ-কে গাধা সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন, এ বিষয়ে তাঁর প্রতি এই একটি সর্বব্যাপী আয়াত ছাড়া আর কিছু নাজিল হয়নি। তারপর তিনি আয়াতটি তিলাওয়াত করেন। বর্ণনাটি মনে রাখার মতো, প্রশ্নটা কোথা থেকে এসেছিল সে কারণেই। এক ধরনের সম্পদ নিয়ে সীমিত একটি প্রশ্ন, আর তার জবাবে এল এমন এক নীতি, যা প্রত্যেক মানুষের প্রতিটি কাজকে ঘিরে ফেলে। 'সর্বব্যাপী' শব্দটি এটাই বোঝাচ্ছে।"
          },
          {
            "en": "The same fineness of measure appears elsewhere. 21:47 sets up the scales of justice for the Day of Resurrection and promises that even the weight of a mustard seed will be brought forth. 18:49 has the criminals staring at the record and asking what kind of book leaves out nothing small or great. 4:40 rules out injustice of an atom's weight, and then, on the good side only, speaks of multiplying.",
            "bn": "মাপের এই সূক্ষ্মতা অন্য আয়াতেও আছে। ২১:৪৭ আয়াতে কিয়ামতের দিনের জন্য ন্যায়ের দাঁড়িপাল্লা স্থাপনের কথা আছে, সঙ্গে প্রতিশ্রুতি: সরিষার দানা পরিমাণ কিছু হলেও তা হাজির করা হবে। ১৮:৪৯ আয়াতে অপরাধীরা আমলনামার দিকে তাকিয়ে বলে, এ কেমন কিতাব, ছোট-বড় কিছুই বাদ দেয়নি! ৪:৪০ আয়াত অণু পরিমাণ জুলুমকেও নাকচ করে দেয়, তারপর শুধু ভালোর বেলায় বহুগুণ বাড়িয়ে দেওয়ার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ordinary Day",
          "bn": "সাধারণ এক দিন"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Dharr (RA) that the Prophet ﷺ said not to belittle any act of kindness, even that you meet your brother with a cheerful face. That is a deliberately unimpressive example, and it fits these two verses exactly. Most of a life is made of acts too small to plan, remember or boast about, and this surah ends by telling us that this is precisely the material the record is made of.",
            "bn": "ইমাম মুসলিম আবু যার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: কোনো ভালো কাজকেই তুচ্ছ মনে করো না, এমনকি ভাইয়ের সঙ্গে হাসিমুখে দেখা করাকেও না। উদাহরণটা ইচ্ছে করেই সাদামাটা, আর এ দুই আয়াতের সঙ্গে তা হুবহু মিলে যায়। জীবনের বেশির ভাগটাই এমন সব কাজে গড়া, যা এত ছোট যে কেউ তার পরিকল্পনা করে না, মনে রাখে না, তা নিয়ে গর্বও করে না। আর এই সূরা শেষে আমাদের জানিয়ে দেয়: আমলনামা ঠিক এই উপাদানেই তৈরি।"
          },
          {
            "en": "The second verse turns the same key the other way. If nothing good is too small to appear, nothing wrong is too small either, and the excuse that a thing was minor stops working in both directions at once. The practical discipline is small: stop grading your own actions by how impressive they look, and start assuming that the unremarkable ones are the ones being written.",
            "bn": "দ্বিতীয় আয়াত একই চাবি উল্টো দিকে ঘোরায়। কোনো ভালো কাজই যদি এত ছোট না হয় যে বাদ পড়ে যাবে, তাহলে কোনো মন্দ কাজও নয়। 'এ তো সামান্য ব্যাপার', এই অজুহাত তখন দুই দিকেই একসঙ্গে অচল হয়ে যায়। হাতে-কলমে করণীয়টা ছোট: নিজের কাজ কতটা চোখধাঁধানো দেখায়, তা দিয়ে তাকে মাপা বন্ধ করুন। বরং ধরে নিন, যেসব কাজ উল্লেখ করার মতোও মনে হয় না, সেগুলোই লেখা হচ্ছে।"
          }
        ]
      }
    ]
  }
});
