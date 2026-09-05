/**
 * Tadabbur long-form articles — surah 80.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "80:24": {
    "sections": [
      {
        "h": {
          "en": "Four Words of Command",
          "bn": "চার শব্দের নির্দেশ"
        },
        "p": [
          {
            "en": "The command is four words long: falyanzuri al-insanu ila ta'amih. The verb carries the lam of the imperative in the third person, an order issued about somebody rather than to him — let man look. 86:5 opens with the identical two words, falyanzuri al-insanu, and it too runs to four; there what he is told to look at is the substance he was made from. Twice the Quran stops a person and points, and both times the thing pointed at is already in front of him.",
            "bn": "নির্দেশটি চার শব্দের: 'ফালইয়ানযুরিল ইনসানু ইলা তাআমিহ'। ক্রিয়াপদটি বহন করে তৃতীয় পুরুষের আদেশসূচক 'লাম' — অর্থাৎ কাউকে সরাসরি নয়, তার সম্পর্কে দেওয়া আদেশ: মানুষ দেখুক। 86:5 শুরু হয় ঠিক এই একই দুটি শব্দ দিয়ে — 'ফালইয়ানযুরিল ইনসানু' — আর সেটিও চার শব্দেরই; সেখানে তাকে দেখতে বলা হয় সেই উপাদানটি যা থেকে তাকে সৃষ্টি করা হয়েছে। কুরআন দুবার মানুষকে থামিয়ে আঙুল তোলে, আর দুবারই যেদিকে আঙুল ওঠে তা তার সামনেই আছে।"
          },
          {
            "en": "Nazar with the preposition ila is ordinarily the look of the eye, and that is part of the point, since the thing to be looked at is visible without instruments. But the commentators gloss what is actually wanted as i'tibar, drawing the lesson, because nobody learns anything from merely seeing bread. The order is not to inspect the food. It is to follow it backwards, and the verses that come next perform the following-back for anyone unsure where to begin.",
            "bn": "'ইলা' অব্যয়সহ 'নাযার' সাধারণত চোখের দেখা বোঝায়, আর সেটিও প্রসঙ্গেরই অংশ — কারণ যা দেখতে বলা হচ্ছে তা কোনো যন্ত্র ছাড়াই দৃশ্যমান। তবে মুফাসসিরগণ ব্যাখ্যা করেন, আসলে যা চাওয়া হচ্ছে তা হলো 'ই'তিবার' — শিক্ষা গ্রহণ; কারণ কেবল রুটি দেখে কেউ কিছু শেখে না। নির্দেশটি খাবার পরখ করার নয়। নির্দেশটি হলো তাকে পেছন দিকে অনুসরণ করা — আর পরের আয়াতগুলো সেই অনুসরণটি করে দেখায়, যাতে কোথা থেকে শুরু করতে হবে তা কারও অজানা না থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came Just Before",
          "bn": "ঠিক আগে যা ছিল"
        },
        "p": [
          {
            "en": "The setting is severe. 80:17 curses man and exclaims at how great his denial is, and 80:18-22 answer by tracing him: from what thing did He create him — from a drop He created him and proportioned him, then eased the way for him, then caused him to die and gave him a grave, then when He wills He will raise him. 80:23 then delivers the charge: no, he has not accomplished what He commanded him. Only then comes the redirection to his food.",
            "bn": "প্রেক্ষাপটটি কঠোর। 80:17 মানুষকে অভিশাপ দেয় ও তার সত্য-প্রত্যাখ্যানের মাত্রা তুলে ধরে, আর 80:18-22 উত্তর দেয় তার পরিচয় ধরে ধরে: কোন জিনিস থেকে তিনি তাকে সৃষ্টি করলেন — এক ফোঁটা থেকে সৃষ্টি করে পরিমিত করলেন, তারপর তার পথ সহজ করলেন, তারপর তার মৃত্যু ঘটিয়ে কবরস্থ করলেন, তারপর যখন ইচ্ছে করবেন তাকে আবার উঠাবেন। এরপর 80:23 অভিযোগটি উচ্চারণ করে: না, তিনি তাকে যে নির্দেশ দিয়েছিলেন তা সে পূর্ণ করেনি। কেবল তখনই আসে খাদ্যের দিকে মোড় ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Verb Is His",
          "bn": "প্রতিটি ক্রিয়াপদই তাঁর"
        },
        "p": [
          {
            "en": "80:25-27 answer the look, and the answer is a run of first-person verbs. We poured down the water in a pouring; then We split the earth in a splitting; then We caused to grow in it. Man was told to look at his food, and the first thing the looking discloses is that every action involved in producing it belongs to Someone else. Nothing in the sequence is credited to the one holding the plate.",
            "bn": "80:25-27 সেই দেখার উত্তর দেয়, আর উত্তরটি উত্তম পুরুষের ক্রিয়াপদের এক ধারা। আমি পানি ঢেলেছি ঢালার মতো করে; তারপর আমি যমীনকে বিদীর্ণ করেছি বিদীর্ণ করার মতো করে; তারপর আমি তাতে উৎপন্ন করেছি। মানুষকে তার খাদ্যের দিকে তাকাতে বলা হয়েছিল, আর সেই তাকানো প্রথমেই যা ফাঁস করে দেয় তা হলো: এই খাদ্য উৎপাদনের সঙ্গে জড়িত প্রতিটি কাজই অন্য কারও। এই ধারার কোনো কিছুরই কৃতিত্ব প্লেট হাতে ধরে থাকা লোকটির নয়।"
          },
          {
            "en": "What grows is then named across five verses, eight things in all: grain, then grapes and qadb, then olive and palm, then dense gardens, then fruit and abb. That last word is unfamiliar even in Arabic; the lexicons gloss abb as pasture, the growth that animals graze. The list has moved, without announcing that it is moving, from what is on the man's plate to what is standing in his herd's field.",
            "bn": "এরপর যা উৎপন্ন হয় তার নাম আসে পাঁচটি আয়াত জুড়ে, মোট আটটি জিনিস: শস্য, তারপর আঙুর ও 'কাদ্‌ব', তারপর যায়তূন ও খেজুর, তারপর ঘন বাগান, তারপর ফল ও 'আব্ব'। শেষ শব্দটি আরবিতেও অপরিচিত; অভিধানগুলো 'আব্ব'-এর অর্থ করে তৃণভূমি — পশুরা যা চরে খায়। তালিকাটি নিজে ঘোষণা না করেই সরে এসেছে মানুষের প্লেটে যা আছে তা থেকে তার পশুপালের মাঠে যা দাঁড়িয়ে আছে তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Down to the Livestock",
          "bn": "পশুপাল পর্যন্ত"
        },
        "p": [
          {
            "en": "80:32 closes the passage by saying so outright: provision for you and for your grazing livestock. The same rain, the same opened earth and the same crop feed the man and the animal at his gate, and the verse states it without embarrassment. What separates the two is not the meal, and it is not the digestion. It is that one of them was addressed eight verses earlier and told to look at what he was eating.",
            "bn": "80:32 অংশটি শেষ করে কথাটি সরাসরি বলে দিয়ে: তোমাদের ও তোমাদের গৃহপালিত পশুদের ভোগের জন্য। একই বৃষ্টি, একই বিদীর্ণ মাটি আর একই ফসল খাওয়ায় মানুষকে এবং তার দরজার পাশের পশুটিকে — আয়াতটি কোনো সংকোচ ছাড়াই তা বলে। এই দুইয়ের পার্থক্য খাবারে নয়, হজমেও নয়। পার্থক্য এটুকুই যে তাদের একজনকে আট আয়াত আগে সম্বোধন করে বলা হয়েছিল, সে কী খাচ্ছে তা দেখে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Table",
          "bn": "খাবার টেবিলে"
        },
        "p": [
          {
            "en": "The argument of the passage is complete without anyone leaving the plate. Man's origin was traced for him in 80:18-22 and he did not respond, so 80:24 lowers the evidence to the level of a meal. Nobody has to travel, study or wait for a sign. Two or three times a day something arrives that a person did not make, could not make and did not water, and it arrives whether or not he says anything about it.",
            "bn": "এই অংশের যুক্তি সম্পূর্ণ হয়ে যায় প্লেট ছেড়ে না উঠেই। 80:18-22-এ মানুষের সামনে তার নিজের উৎপত্তি বর্ণনা করা হয়েছিল, সে সাড়া দেয়নি; তাই 80:24 প্রমাণটিকে নামিয়ে আনে এক বেলার খাবারের স্তরে। কাউকে ভ্রমণ করতে হয় না, পড়াশোনা করতে হয় না, কোনো নিদর্শনের অপেক্ষাও করতে হয় না। দিনে দুই-তিনবার এমন কিছু এসে হাজির হয় যা মানুষ বানায়নি, বানাতে পারত না এবং যাতে পানিও দেয়নি — আর তা আসে, সে সে সম্পর্কে কিছু বলুক বা না বলুক।"
          },
          {
            "en": "The discipline is small enough to keep. Before eating, follow one item backwards as far as it will go: the rain that fell on it, the soil that opened for it, the season that had to hold, the hands that were not yours. The chain runs out of human agents very quickly. That is the whole of what the verse asked for. It does not ask for gratitude in the abstract; it asks for a look, and gratitude is what an honest look produces.",
            "bn": "অনুশীলনটি এত ছোট যে ধরে রাখা যায়। খাওয়ার আগে যেকোনো একটি জিনিসকে যত দূর যায় পেছন দিকে অনুসরণ করুন: যে বৃষ্টি তার উপর পড়েছিল, যে মাটি তার জন্য ফেটেছিল, যে ঋতুটিকে অটুট থাকতে হয়েছিল, যে হাতগুলো আপনার ছিল না। এই শৃঙ্খলে মানুষ-কর্তা খুব দ্রুতই ফুরিয়ে যায়। আয়াতটি এটুকুই চেয়েছিল। এটি বিমূর্ত কৃতজ্ঞতা চায় না; এটি একটি দৃষ্টি চায় — আর সৎভাবে তাকালে কৃতজ্ঞতা এমনিতেই জন্মায়।"
          }
        ]
      }
    ]
  }
});
