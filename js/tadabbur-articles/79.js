/**
 * Tadabbur long-form articles — surah 79.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "79:46": {
    "sections": [
      {
        "h": {
          "en": "A Question and a Refusal",
          "bn": "একটি প্রশ্ন ও একটি প্রত্যাখ্যান"
        },
        "p": [
          {
            "en": "The verse answers a question asked four verses earlier. In 79:42 they ask the Prophet ﷺ about the Hour: when is its arrival? 79:43 replies with a question of its own — in what position are you that you should mention it? — and 79:44 puts the matter where it belongs, saying that to your Lord is its finality. Then 79:45 leaves him one role and only one: he is a warner for whoever fears it.",
            "bn": "আয়াতটি এমন এক প্রশ্নের উত্তর দেয় যা করা হয়েছিল চার আয়াত আগে। 79:42-এ তারা নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করে: কখন তা ঘটবে? 79:43 উত্তর দেয় নিজেরই একটি প্রশ্ন দিয়ে — এর আলোচনার সঙ্গে তোমার সম্পর্ক কী? — আর 79:44 বিষয়টিকে তার যথাস্থানে রাখে, বলে যে এ সংক্রান্ত জ্ঞান তোমার প্রতিপালক পর্যন্তই শেষ। এরপর 79:45 তাঁর জন্য রাখে একটিমাত্র ভূমিকা: যারা একে ভয় করে তিনি কেবল তাদেরই সতর্ককারী।"
          },
          {
            "en": "So the date is refused, and then this verse arrives. It is not a compromise. It supplies no year, no interval and no sign to watch for. What it supplies instead is a measurement of an entirely different kind: not when the Hour will come, but how long the whole of this life will feel to the people standing there on the day they see it. The question was about the clock. The answer describes the memory.",
            "bn": "কাজেই তারিখ জানাতে অস্বীকার করা হলো, আর তারপরেই আসে এই আয়াত। এটি কোনো আপস নয়। এটি কোনো সন, কোনো ব্যবধান বা লক্ষ করার মতো কোনো চিহ্ন দেয় না। বরং এটি দেয় সম্পূর্ণ অন্য ধরনের একটি পরিমাপ: কিয়ামত কখন আসবে তা নয়, বরং যেদিন মানুষ তা দেখবে সেদিন তাদের কাছে এই গোটা জীবনটা কত দীর্ঘ মনে হবে। প্রশ্নটি ছিল ঘড়ি নিয়ে। উত্তরটি বর্ণনা করে স্মৃতিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Evening or Its Morning",
          "bn": "এক সন্ধ্যা কিংবা তার সকাল"
        },
        "p": [
          {
            "en": "The Arabic runs kaannahum yawma yarawnaha lam yalbathu illa 'ashiyyatan aw duhaha. 'Ashiyyah is the late part of the day, the stretch that runs down toward sunset, which this app renders afternoon. Duha is the forenoon, the brightening that follows sunrise. Both are portions of daylight, not days; the verse never offers the option of a day, and neither of its two words can be stretched to mean one.",
            "bn": "আরবিতে আয়াতটি: 'কাআন্নাহুম ইয়াওমা ইয়ারাওনাহা লাম ইয়ালবাসূ ইল্লা আশিয়্যাতান আও দুহাহা'। 'আশিয়্যাহ' হলো দিনের শেষভাগ — সূর্যাস্তের দিকে নেমে আসা সময়টুকু। 'দুহা' হলো পূর্বাহ্ণ — সূর্যোদয়ের পরের উজ্জ্বল হয়ে ওঠা সময়। দুটোই দিনের অংশ, গোটা দিন নয়; আয়াতটি কখনোই একটি পূর্ণ দিনের বিকল্প দেয় না, আর এর দুটি শব্দের কোনোটিকেই টেনে একটি দিন বানানো যায় না।"
          },
          {
            "en": "The pronoun at the end is the sharpest part of it. Duhaha is not the forenoon but its forenoon, the morning belonging to the very day whose evening has just been named. The commentators observe that the day itself is never mentioned in the verse at all; it is carried entirely by that one attached suffix. So the two options are not an evening or some other morning. They are the two ends of a single day.",
            "bn": "শেষের সর্বনামটিই এর সবচেয়ে ধারালো অংশ। 'দুহাহা' মানে কেবল পূর্বাহ্ণ নয়, বরং 'তার' পূর্বাহ্ণ — অর্থাৎ যে দিনটির সন্ধ্যার কথা এইমাত্র বলা হলো, সেই দিনটিরই সকাল। মুফাসসিরগণ লক্ষ করেন, আয়াতে দিনটির উল্লেখ কোথাও নেই; পুরো ভারটি বহন করছে ওই একটিমাত্র যুক্ত সর্বনাম। কাজেই বিকল্প দুটি এক সন্ধ্যা আর অন্য কোনো সকাল নয়। সে দুটি একটিমাত্র দিনেরই দুই প্রান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scale, Not a Date",
          "bn": "তারিখ নয়, মাপকাঠি"
        },
        "p": [
          {
            "en": "That is why the refusal in 79:43-44 is not evasion. A date would change a person's arithmetic; a scale changes his valuation. A life measured against a known date can be budgeted, spent down to the last month and settled at the end. A life that will finally register as an evening cannot be budgeted at all, because no stretch of it is long enough to be safely written off, and the settling cannot be scheduled for a month whose number nobody has.",
            "bn": "এ কারণেই 79:43-44-এর প্রত্যাখ্যানটি এড়িয়ে যাওয়া নয়। তারিখ বদলে দিত মানুষের হিসাব; মাপকাঠি বদলে দেয় তার মূল্যায়ন। জানা তারিখের বিপরীতে মাপা জীবনকে বাজেট করা যায় — শেষ মাসটি পর্যন্ত খরচ করে শেষে হিসাব চুকিয়ে নেওয়া যায়। কিন্তু যে জীবন শেষ পর্যন্ত এক সন্ধ্যার মতো ঠেকবে, তাকে আদৌ বাজেট করা যায় না; কারণ তার কোনো অংশই এত দীর্ঘ নয় যে নিরাপদে অপচয় করা চলে, আর হিসাব চুকানোর জন্য এমন কোনো মাস ঠিক করা যায় না যার সংখ্যাটা কারও জানা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Answer Elsewhere",
          "bn": "একই উত্তর অন্যত্র"
        },
        "p": [
          {
            "en": "The Quran states this compression repeatedly, and almost always as something the people themselves say. In 10:45 it is as though they had not remained but an hour of a day. In 30:55 the criminals swear they stayed only an hour. 20:103-104 has them murmuring that they remained ten, while the most accurate among them says one day. In 23:112-114 they are asked how many years, answer a day or part of a day, and are told they stayed only a little.",
            "bn": "কুরআন এই সংকোচনের কথা বারবার বলে, আর প্রায় সবসময়ই মানুষের নিজেদের মুখ দিয়ে। 10:45-এ মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। 30:55-এ অপরাধীরা শপথ করে বলবে তারা এক ঘণ্টাই ছিল। 20:103-104-এ তারা নিজেদের মধ্যে চুপিচুপি বলবে তারা দশ দিন ছিল, আর তাদের মধ্যে সবচেয়ে সঠিক কথা বলা লোকটি বলবে — একদিন। 23:112-114-এ তাদের জিজ্ঞেস করা হবে কত বছর ছিলে, তারা বলবে একদিন বা দিনের কিছু অংশ, আর জবাব আসবে — তোমরা সামান্যই ছিলে।"
          },
          {
            "en": "46:35 says it in nearly the words of our verse: on the day they see what they are promised, it will be as though they had not remained except an hour of a day. Set beside each other, these passages make the compression a fixed feature of the scene rather than a rhetorical flourish in one surah. Some put the estimate into the mouths of those who lived the years and some state it as the scene itself, and every one of them shortens the years drastically.",
            "bn": "46:35 প্রায় আমাদের আয়াতেরই ভাষায় কথাটি বলে: যেদিন তারা প্রতিশ্রুত জিনিসটি দেখবে, সেদিন মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। পাশাপাশি রাখলে এই অংশগুলো বুঝিয়ে দেয়, এই সংকোচন কোনো একটি সূরার অলংকার নয়, বরং সেই দৃশ্যের একটি স্থায়ী বৈশিষ্ট্য। কোথাও হিসাবটি বসানো হয়েছে তাদেরই মুখে যারা বছরগুলো কাটিয়ে এসেছে, কোথাও তা বলা হয়েছে দৃশ্যের বর্ণনা হিসেবেই; আর প্রতিটি ক্ষেত্রেই বছরগুলো নাটকীয়ভাবে ছোট হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Changes Today",
          "bn": "আজ এটি কী বদলায়"
        },
        "p": [
          {
            "en": "The verse is not asking anyone to conclude that life is worthless. Nothing in it says the evening was wasted; it says the evening was short. The practical consequence is a reordering rather than a withdrawal. Whatever has its whole value used up inside the evening — a rank, a purchase, an argument won — gets priced at what an evening is worth, and whatever outlasts the evening gets the remainder of the attention.",
            "bn": "আয়াতটি কাউকে এই সিদ্ধান্তে আসতে বলছে না যে জীবন মূল্যহীন। এতে কোথাও বলা হয়নি সন্ধ্যাটি অপচয় হয়েছে; বলা হয়েছে সন্ধ্যাটি ছোট। এর ব্যবহারিক ফল গুটিয়ে যাওয়া নয়, বরং অগ্রাধিকার নতুন করে সাজানো। যার পুরো মূল্য ওই সন্ধ্যার ভেতরেই ফুরিয়ে যায় — একটি পদ, একটি কেনাকাটা, জিতে যাওয়া একটি তর্ক — তার দাম ধরা হবে এক সন্ধ্যার সমান; আর যা সন্ধ্যার পরেও টিকে থাকে, মনোযোগের বাকিটুকু তারই।"
          },
          {
            "en": "It also settles a particular kind of grief. Waiting is the hardest part of most trials: waiting for health, for a marriage, for a child, for relief that keeps not arriving. This verse does not shorten the wait. It tells you in advance what the wait will look like from the far side of it, and the answer is that it will be the same length as everyone else's ease was — an evening, or the morning of the same day.",
            "bn": "এটি এক বিশেষ ধরনের বেদনাকেও থিতু করে দেয়। বেশির ভাগ পরীক্ষার সবচেয়ে কঠিন অংশ হলো অপেক্ষা: সুস্থতার অপেক্ষা, বিয়ের অপেক্ষা, সন্তানের অপেক্ষা, কিংবা যে স্বস্তি আসতেই চায় না তার অপেক্ষা। আয়াতটি অপেক্ষাকে ছোট করে দেয় না। এটি আগেভাগে জানিয়ে দেয়, ওপারে গিয়ে সেই অপেক্ষাটি দেখতে কেমন লাগবে — আর উত্তরটি হলো, অন্যরা যে স্বাচ্ছন্দ্য পেয়েছিল ঠিক তারই সমান দৈর্ঘ্যের: এক সন্ধ্যা, কিংবা সেই দিনেরই সকাল।"
          }
        ]
      }
    ]
  }
});
