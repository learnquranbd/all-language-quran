/**
 * Tadabbur long-form articles — surah 84.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "84:6": {
    "sections": [
      {
        "h": {
          "en": "A Root Used Once",
          "bn": "একবারই ব্যবহৃত এক ধাতু"
        },
        "p": [
          {
            "en": "Ya ayyuha al-insanu innaka kadihun ila rabbika kadhan famulaqih. The root of kadh occurs nowhere else in the Quran, and at its single appearance it occurs twice inside the one verse: kadihun, the active participle, and kadhan, the cognate accusative that Arabic sets after a verb or participle to intensify it by repeating its own noun. One appearance, and it is doubled on arrival.",
            "bn": "ইয়া আইয়ুহাল ইনসানু ইন্নাকা কাদিহুন ইলা রাব্বিকা কাদহান ফামুলাকীহ। 'কাদহ' শব্দের ধাতুটি গোটা কুরআনে আর কোথাও আসেনি, আর এই একটিমাত্র জায়গায় তা একই আয়াতের ভেতরে দুইবার এসেছে: 'কাদিহুন' — ইসমে ফা'ইল, আর 'কাদহান' — মাফ'উলে মুতলাক, যা আরবিতে ক্রিয়া বা ইসমে ফা'ইলের পরে বসে তারই মাসদার পুনরাবৃত্তি করে অর্থকে জোরালো করে। একবারই এসেছে, আর আসার সঙ্গে সঙ্গেই দ্বিগুণ হয়ে এসেছে।"
          },
          {
            "en": "The lexicographers gloss kadh as labour that costs the labourer, effort pressed to the point where it leaves its mark on the one who makes it. That is why translations reach for phrases like great exertion and hard striving. The commentators add a caution the word itself carries: kadh says nothing about what the effort is for. It covers work done for good and work done for evil with equal accuracy.",
            "bn": "অভিধানকারগণ 'কাদহ'-এর ব্যাখ্যা করেন এমন পরিশ্রম হিসেবে যা পরিশ্রমকারীর নিজের ওপরই মূল্য আদায় করে — এমন সাধনা যা যিনি করেন তাঁর গায়ে দাগ রেখে যায়। এ কারণেই অনুবাদে 'কঠোর সাধনা' বা 'বহু কষ্ট' জাতীয় শব্দ ব্যবহৃত হয়। মুফাসসিরগণ শব্দটির ভেতরকার একটি সতর্কতাও যোগ করেন: 'কাদহ' এ কথা বলে না যে পরিশ্রমটি কীসের জন্য। ভালো কাজের পরিশ্রম আর মন্দ কাজের পরিশ্রম — দুটোকেই শব্দটি সমান নির্ভুলভাবে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Singular, and Everyone",
          "bn": "একবচন, অথচ সবাই"
        },
        "p": [
          {
            "en": "The address is worth looking at closely. Ya ayyuha al-insan puts the definite article on insan, which in Arabic can take in the whole species, while innaka, rabbika and the participle are all singular. So the sentence speaks to humankind as such and grammatically buttonholes one person at the same time. The commentators say plainly that the man addressed here takes in the believer and the disbeliever together.",
            "bn": "সম্বোধনটির দিকে একটু মনোযোগ দিয়ে তাকানো দরকার। 'ইয়া আইয়ুহাল ইনসান'-এ 'ইনসান' শব্দে আলিফ-লাম যুক্ত, যা আরবিতে গোটা প্রজাতিকে ধরতে পারে; অথচ 'ইন্নাকা', 'রাব্বিকা' এবং ইসমে ফা'ইল — সবই একবচন। ফলে বাক্যটি একই সঙ্গে সমগ্র মানবজাতিকে সম্বোধন করে এবং ব্যাকরণগতভাবে একজন মানুষকে আলাদা করে ধরে ফেলে। মুফাসসিরগণ স্পষ্ট করেই বলেন, এখানে সম্বোধিত 'মানুষ' শব্দটির ভেতরে মু'মিন ও কাফির উভয়েই শামিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Address Falls",
          "bn": "সম্বোধনটি যেখানে এসে পড়ে"
        },
        "p": [
          {
            "en": "84:1 describes the sky splitting, and 84:2 says it listened to its Lord, and it must. 84:3-4 describe the earth stretched out and emptied of what was inside it, and 84:5 says the same clause over again, this time of the earth: it listened to its Lord, and it must. Two creatures are named, and of each the identical words are used. Neither is asked for a decision.",
            "bn": "84:1 বর্ণনা করে আসমান ফেটে যাওয়ার কথা, আর 84:2 বলে — সে তার প্রতিপালকের নির্দেশ শুনল, আর তার তা-ই করণীয়। 84:3-4 বর্ণনা করে যমীনকে বিছিয়ে দেওয়ার এবং তার ভেতরে যা ছিল তা বের করে খালি হয়ে যাওয়ার কথা, আর 84:5 ঠিক সেই একই বাক্য আবার বলে, এবার যমীন সম্পর্কে — সে তার প্রতিপালকের নির্দেশ শুনল, আর তার তা-ই করণীয়। দুটি সৃষ্টির নাম আসে, আর দুটির ক্ষেত্রেই হুবহু একই শব্দ ব্যবহৃত হয়। কারও কাছেই কোনো সিদ্ধান্ত চাওয়া হয় না।"
          },
          {
            "en": "84:6 is where the sentence turns, and the turn is the point. After two things that simply comply, the surah stops describing and starts addressing: O man. The one creature on the scene of whom it was not said that it listened and had to is the creature now spoken to directly — and what is said to him is not that he must obey, but that he is already on his way.",
            "bn": "84:6 হলো সেই মোড়, আর মোড়টিই আসল কথা। দুটি সৃষ্টি নিছক আনুগত্য করে, তারপর সূরাটি বর্ণনা থামিয়ে সম্বোধন শুরু করে: হে মানুষ! এই দৃশ্যে যে একমাত্র সৃষ্টির সম্পর্কে বলা হয়নি যে সে শুনল এবং তার তা-ই করণীয়, তাকেই এখন সরাসরি সম্বোধন করা হচ্ছে — আর তাকে বলা হচ্ছে না যে তোমাকে মানতেই হবে; বলা হচ্ছে, তুমি ইতিমধ্যেই পথ চলছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom You Will Meet",
          "bn": "কার সাক্ষাৎ পাবে"
        },
        "p": [
          {
            "en": "The verse ends on a pronoun, famulaqih, and the commentators differ over what it points at. Ibn Kathir gives the reading that you will meet your work, whatever it was, good or evil; then he reports that others refer the pronoun back to your Lord, so the sense is you will meet Him. He does not choose between them. He observes that the two are connected, since the deed is met where its Judge is.",
            "bn": "আয়াতটি শেষ হয় একটি সর্বনাম দিয়ে — 'ফামুলাকীহ' — আর সেটি কোন দিকে ইঙ্গিত করে তা নিয়ে মুফাসসিরগণের মতভেদ আছে। ইবনে কাসীর প্রথমে সেই পাঠটি দেন যে তুমি তোমার আমলের সাক্ষাৎ পাবে, তা ভালো হোক বা মন্দ; এরপর জানান, অন্যরা সর্বনামটিকে 'তোমার প্রতিপালক'-এর দিকে ফিরিয়ে দেন, অর্থাৎ তুমি তাঁর সাক্ষাৎ পাবে। তিনি দুটির কোনো একটিকে বেছে নেন না। তিনি লক্ষ করেন, দুটি অর্থ পরস্পরের সঙ্গে যুক্ত — কারণ আমলের সাক্ষাৎ সেখানেই ঘটে যেখানে তার বিচারক থাকেন।"
          },
          {
            "en": "This is why the translations in this app part company at the last word: one ends on you will meet it, and the Bengali ends on you will attain His meeting. Neither is a slip. Both sit inside the classical reading of the verse, and the ambiguity is not a flaw in the Arabic but its economy — a single attached pronoun holding the deed and the One it is carried to.",
            "bn": "এ কারণেই এই অ্যাপের অনুবাদ দুটি শেষ শব্দে এসে আলাদা হয়ে যায়: একটি শেষ হয় 'তুমি তার সাক্ষাৎ পাবে' দিয়ে, আর বাংলাটি শেষ হয় 'তুমি তাঁর সাক্ষাৎ লাভ করবে' দিয়ে। কোনোটিই ভুল নয়। দুটিই আয়াতটির শাস্ত্রীয় ব্যাখ্যার ভেতরেই পড়ে, আর এই দ্ব্যর্থতা আরবির ত্রুটি নয়, বরং তার মিতব্যয়িতা — একটিমাত্র সর্বনাম একসঙ্গে ধরে রাখে আমলকে এবং যাঁর কাছে তা নিয়ে যাওয়া হচ্ছে তাঁকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reckoning It Opens Onto",
          "bn": "যে হিসাবের দিকে এটি খোলে"
        },
        "p": [
          {
            "en": "84:7-9 give the first outcome: whoever is given his record in his right hand will be reckoned with easily and go back to his people glad. 84:10-12 give the other: a record handed from behind the back, a cry for destruction, a blaze. So the meeting announced in our verse is specified within a few lines, and it is specified as the handing over of a written account.",
            "bn": "84:7-9 প্রথম পরিণতিটি জানায়: যার আমলনামা তার ডান হাতে দেওয়া হবে, তার হিসাব সহজভাবেই নেওয়া হবে এবং সে আনন্দিত হয়ে তার স্বজনদের কাছে ফিরে যাবে। 84:10-12 জানায় অন্যটি: পিঠের পেছন দিক থেকে হাতে দেওয়া আমলনামা, ধ্বংসের আর্তনাদ, আর জ্বলন্ত আগুন। অর্থাৎ আমাদের আয়াতে ঘোষিত সেই সাক্ষাৎ কয়েক পঙ্‌ক্তির ভেতরেই নির্দিষ্ট হয়ে যায়, আর নির্দিষ্ট হয় একটি লিখিত হিসাব হাতে তুলে দেওয়ার রূপে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Aishah (RA) that when she heard the Prophet ﷺ say that whoever is called to account is destroyed, she asked him about the easy reckoning of 84:8. He answered that this is only the presentation, and that whoever is closely examined in the reckoning is destroyed. Easy, in that verse, means passed over — not that the account itself was light.",
            "bn": "বুখারী ও মুসলিম উভয়েই আয়েশা (রাঃ) থেকে বর্ণনা করেন যে, তিনি যখন নবী ﷺ-কে বলতে শুনলেন — যার হিসাব নেওয়া হবে সে ধ্বংস হয়ে যাবে — তখন তিনি 84:8-এর সহজ হিসাব সম্পর্কে প্রশ্ন করলেন। নবী ﷺ উত্তরে বলেন, ওটি কেবল পেশ করা মাত্র; আর হিসাবের সময় যার সঙ্গে কড়াকড়ি করা হবে, সে ধ্বংস হয়ে যাবে। ওই আয়াতে 'সহজ' মানে ছেড়ে দেওয়া — আমলনামা হালকা ছিল, তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Variable",
          "bn": "একমাত্র যেটি বদলায়"
        },
        "p": [
          {
            "en": "Nothing in this verse asks whether you will exert yourself. It reports that you already are, and it names the direction the exertion is running in. Since the toil is not optional and the meeting is not optional, exactly one thing is left open, which is what the toil is spent on. Everyone alive is a kadih; people differ only in what they are wearing themselves out for.",
            "bn": "এই আয়াত এ কথা জিজ্ঞেস করে না যে তুমি পরিশ্রম করবে কি না। এটি জানায় যে তুমি ইতিমধ্যেই করছ, এবং সেই পরিশ্রম কোন দিকে ছুটছে তারও নাম বলে দেয়। যেহেতু পরিশ্রম ঐচ্ছিক নয় এবং সাক্ষাৎও ঐচ্ছিক নয়, তাই খোলা থাকে ঠিক একটি জিনিস — পরিশ্রমটি কীসের পেছনে ব্যয় হচ্ছে। জীবিত প্রত্যেকেই একজন 'কাদিহ'; মানুষে মানুষে পার্থক্য কেবল এখানেই যে সে নিজেকে কীসের জন্য ক্ষয় করছে।"
          }
        ]
      }
    ]
  }
});
