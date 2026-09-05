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
            "bn": "সূরা আয-যালযালাহ আট আয়াতের, আর এ দুটিই তার শেষ দুই আয়াত। এর আগের সবকিছু গ্রহের মাপের। 99:1 আয়াতে যমীনকে তার নিজস্ব প্রচণ্ড কম্পনে কাঁপিয়ে দেওয়া হয়, 99:2 আয়াতে সে তার বোঝা বাইরে ছুড়ে দেয়, আর 99:3 আয়াতে মানুষ জিজ্ঞেস করে — এর কী হলো। তারপর 99:4 ও 99:5 আয়াতে যমীন নিজেই সাক্ষ্য দেয়, কারণ তার প্রতিপালক তাকে আদেশ করেছেন; আর 99:6 আয়াতে মানুষ ভিন্ন ভিন্ন দলে বের হয়ে আসে, যেন তাদের কৃতকর্ম তাদের দেখানো যায়।"
          },
          {
            "en": "Having widened the lens as far as it will go, the surah closes by narrowing it to a speck. The last two verses do not describe the Day at all. They describe you, standing in it, holding something almost too small to name. That is the whole design: a cosmic disturbance is set up, and then it is spent on the smallest unit of a human life.",
            "bn": "দৃষ্টিকে যতদূর সম্ভব প্রসারিত করার পর সূরাটি শেষ হয় তাকে একটি বিন্দুতে সংকুচিত করে। শেষ দুই আয়াত সেই দিনের বর্ণনাই দেয় না। তারা বর্ণনা দেয় আপনার — সেই দিনে দাঁড়িয়ে থাকা আপনার, যার হাতে এমন কিছু আছে যা নাম দেওয়ার পক্ষেও প্রায় বড্ড ছোট। পুরো বিন্যাসটাই এই: এক মহাজাগতিক আলোড়ন সাজানো হয়, তারপর তা ব্যয় হয় মানবজীবনের ক্ষুদ্রতম এককটির পেছনে।"
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
            "bn": "মিছক্বাল মানে ওজন — শব্দটি ভারী হওয়ার ধাতু থেকে এসেছে এবং তা দাঁড়িপাল্লার চিত্রকল্পেরই অংশ। যে শব্দটি নিয়ে মতভেদ, তা হলো যাররাহ। প্রাচীন যুগের কর্তৃপক্ষগণ এটিকে একাধিকভাবে ব্যাখ্যা করেছেন, আর সীমাটি চাপিয়ে না দিয়ে পুরো পরিসরটুকু জানানোই সৎ: ক্ষুদ্রতম জাতের পিঁপড়া; জানালা দিয়ে আসা রোদের রেখায় যে ধূলিকণা ভাসতে দেখা যায়; কিংবা মাটিতে হাত চেপে তুলে নিলে হাতের তালুতে যে কণাগুলো লেগে থাকে।"
          },
          {
            "en": "The app renders the phrase as an atom's weight, reaching for the smallest thing a modern reader can picture, as the classical explanations reached for the smallest thing an Arab listener could see. Neither is a unit of measurement, and the verse is not offering one. What the word does is mark the lower edge of noticing — below the level at which a human being would bother to record anything.",
            "bn": "অ্যাপের অনুবাদ শব্দবন্ধটিকে অণু পরিমাণ বলে, অর্থাৎ আধুনিক পাঠক কল্পনা করতে পারেন এমন ক্ষুদ্রতম জিনিসটির দিকে হাত বাড়ায় — ঠিক যেমন ধ্রুপদী ব্যাখ্যাগুলো হাত বাড়িয়েছিল আরব শ্রোতা চোখে দেখতে পারেন এমন ক্ষুদ্রতম জিনিসটির দিকে। কোনোটিই পরিমাপের একক নয়, আর আয়াতও কোনো একক দিচ্ছে না। শব্দটি যা করে তা হলো লক্ষ করার নিচের সীমাটি চিহ্নিত করা — যে স্তরের নিচে কোনো মানুষ কিছু লিখে রাখার প্রয়োজনই বোধ করত না।"
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
            "bn": "ক্রিয়াপদটি ইয়ারাহ: সে তা দেখবে। তাকে জানানো হবে নয়, তার হিসাবে লেখা হবে নয় — সে তা দেখবে। আর দুটি আয়াত একটি শব্দ ছাড়া প্রতিটি অংশে অভিন্ন: খাইরান ও শাররান, ভালো ও মন্দ। একই ওজন, একই ক্রিয়া, একই নিশ্চয়তা, একই ব্যাকরণে। এই প্রতিসাম্যই যুক্তিটি: ছোট সদয়তার জন্য দাঁড়িপাল্লা ছোট ভুলের চেয়ে মোটা কোনো মাপকাঠি ব্যবহার করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Comprehensive Verse",
          "bn": "সর্বব্যাপী আয়াত"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Abu Hurayrah (RA) that the Prophet ﷺ was asked about donkeys, and answered that nothing had been revealed to him concerning them except this single all-embracing verse, and he recited it. The report is worth holding onto because of what prompted it. A narrow question about one kind of property was answered by a principle that covers every act of every person, which is what the phrase all-embracing is doing.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ-কে গাধা সম্পর্কে জিজ্ঞেস করা হয়েছিল, আর তিনি উত্তর দেন যে সে ব্যাপারে তাঁর প্রতি এই একটি সর্বব্যাপী আয়াত ছাড়া আর কিছুই নাযিল হয়নি — এরপর তিনি আয়াতটি তিলাওয়াত করেন। বর্ণনাটি মনে রাখার মতো, কারণ কোন প্রশ্ন থেকে তা এসেছিল। একধরনের সম্পত্তি নিয়ে একটি সংকীর্ণ প্রশ্নের জবাবে এল এমন এক নীতি যা প্রত্যেক মানুষের প্রতিটি কাজকে ঢেকে ফেলে — 'সর্বব্যাপী' শব্দটি সেটাই বোঝায়।"
          },
          {
            "en": "The same fineness of measure appears elsewhere. 21:47 sets up the scales of justice for the Day of Resurrection and promises that even the weight of a mustard seed will be brought forth. 18:49 has the criminals staring at the record and asking what kind of book leaves out nothing small or great. 4:40 rules out injustice of an atom's weight, and then, on the good side only, speaks of multiplying.",
            "bn": "একই সূক্ষ্ম মাপ অন্যত্রও দেখা যায়। 21:47 আয়াত কিয়ামতের দিনের জন্য সুবিচারের দাঁড়িপাল্লা স্থাপন করে এবং প্রতিশ্রুতি দেয় যে সরিষার দানা পরিমাণ কিছুও হাজির করা হবে। 18:49 আয়াতে অপরাধীরা আমলনামার দিকে তাকিয়ে জিজ্ঞেস করে, এ কেমন কিতাব যা ছোট-বড় কিছুই বাদ দেয়নি। 4:40 আয়াত অণু পরিমাণ যুলমকেও নাকচ করে দেয়, তারপর কেবল ভালো দিকটিতেই বহুগুণ বাড়িয়ে দেওয়ার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ordinary Day",
          "bn": "একটি সাধারণ দিন"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Dharr (RA) that the Prophet ﷺ said not to belittle any act of kindness, even that you meet your brother with a cheerful face. That is a deliberately unimpressive example, and it fits these two verses exactly. Most of a life is made of acts too small to plan, remember or boast about, and this surah ends by telling us that this is precisely the material the record is made of.",
            "bn": "ইমাম মুসলিম আবু যার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন কোনো সদাচরণকেই তুচ্ছ মনে করো না, এমনকি হাসিমুখে ভাইয়ের সঙ্গে দেখা করাকেও নয়। উদাহরণটি ইচ্ছাকৃতভাবেই চমকহীন, আর তা এ দুই আয়াতের সঙ্গে হুবহু মিলে যায়। জীবনের বেশির ভাগই এমন কাজে গড়া যেগুলো পরিকল্পনা করার, মনে রাখার বা গর্ব করার পক্ষে বড্ড ছোট — আর এই সূরা শেষ হয় আমাদের জানিয়ে যে আমলনামা ঠিক এই উপাদানেই তৈরি।"
          },
          {
            "en": "The second verse turns the same key the other way. If nothing good is too small to appear, nothing wrong is too small either, and the excuse that a thing was minor stops working in both directions at once. The practical discipline is small: stop grading your own actions by how impressive they look, and start assuming that the unremarkable ones are the ones being written.",
            "bn": "দ্বিতীয় আয়াতটি একই চাবি উল্টো দিকে ঘোরায়। কোনো ভালো কাজ যদি দেখা দেওয়ার পক্ষে বড্ড ছোট না হয়, তবে কোনো মন্দ কাজও নয়; আর 'এটা তো সামান্য ব্যাপার' — এই অজুহাতটি একই সঙ্গে দুই দিকেই অচল হয়ে যায়। ব্যবহারিক অনুশীলনটি ছোট: নিজের কাজগুলোকে সেগুলো কতটা চিত্তাকর্ষক দেখাচ্ছে তা দিয়ে মাপা বন্ধ করুন, আর ধরে নিন যে অনুল্লেখযোগ্য কাজগুলোই লেখা হচ্ছে।"
          }
        ]
      }
    ]
  }
});
