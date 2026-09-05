/**
 * Tadabbur long-form articles — surah 88.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "88:17-20": {
    "sections": [
      {
        "h": {
          "en": "From the Unseen to the Obvious",
          "bn": "অদৃশ্য থেকে চোখের সামনে"
        },
        "p": [
          {
            "en": "Surah al-Ghashiyah is Makkan and has twenty-six verses. It opens in 88:1 by asking whether the report of the Overwhelming has reached you, and then shows two sets of faces on that Day: the humbled and exhausted in 88:2-7, and the delighted in 88:8-16, whose description ends with carpets spread about. Everything so far is unseen. Then, with no transition at all, 88:17 turns the reader's head towards a camel.",
            "bn": "সূরা আল-গাশিয়াহ মক্কী, আয়াত সংখ্যা ছাব্বিশ। 88:1 আয়াতে এটি শুরু হয় এই প্রশ্ন দিয়ে যে আচ্ছন্নকারী সেই ঘটনার সংবাদ তোমার কাছে পৌঁছেছে কি না, তারপর সেদিনের দুই ধরনের মুখ দেখায়: 88:2-7 আয়াতে অবনত ও ক্লান্ত মুখ, আর 88:8-16 আয়াতে আনন্দিত মুখ, যাদের বর্ণনা শেষ হয় বিছানো মখমলে। এ পর্যন্ত সবই অদৃশ্য। এরপর কোনো ভূমিকা ছাড়াই 88:17 আয়াত পাঠকের মাথা ঘুরিয়ে দেয় একটি উটের দিকে।"
          },
          {
            "en": "The move is an argument, not a change of subject. The people first addressed denied the Day because they had never seen one. The verses answer by pointing at four things they had seen every day of their lives and asking them to look again. Nothing new is offered. What is asked for is attention to what was already there, and the claim underneath is that the world already carries the evidence for the Day it will end in.",
            "bn": "এই মোড় বিষয় বদল নয়, একটি যুক্তি। যাদের উদ্দেশে এটি প্রথম নাযিল হয়, তারা সেই দিনকে অস্বীকার করত কারণ তারা কখনো তা দেখেনি। আয়াতগুলো উত্তর দেয় এমন চারটি জিনিসের দিকে আঙুল তুলে, যা তারা জীবনের প্রতিটি দিন দেখেছে, আর বলে আবার তাকাও। নতুন কিছুই দেওয়া হচ্ছে না। যা চাওয়া হচ্ছে তা হলো যা ইতিমধ্যেই সামনে ছিল তার প্রতি মনোযোগ; আর এর নিচে দাবিটি হলো, যে দিনে জগৎ শেষ হবে তার প্রমাণ জগৎ নিজেই বহন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nazar, Not Merely Sight",
          "bn": "নাযার, কেবল দেখা নয়"
        },
        "p": [
          {
            "en": "Afala yanzurun — do they then not look? The verb nazara, taken with the preposition ila, is the looking that dwells on a thing and considers it, not the passive registering that lets a familiar object pass unread. The reproach sits in the opening particle. It is not that they lacked the sight; it is that the sight was spent without ever being used, on animals they owned and a sky they slept under.",
            "bn": "'আফালা ইয়ানযুরূন' — তবে কি তারা লক্ষ করে না? 'নাযারা' ক্রিয়াপদটি 'ইলা' অব্যয়ের সঙ্গে এলে বোঝায় সেই দেখা যা বস্তুটির ওপর থেমে থাকে ও চিন্তা করে, নিছক নিষ্ক্রিয় নজরে পড়া নয় — যে নজরে পরিচিত জিনিস অপঠিত থেকেই পাশ কাটিয়ে যায়। ভর্ৎসনাটি রয়েছে শুরুর অব্যয়ে। তাদের দৃষ্টিশক্তির অভাব ছিল না; বরং সেই দৃষ্টি ব্যয় হয়েছে অথচ কখনো কাজে লাগেনি — যে পশু তাদেরই ছিল আর যে আকাশের নিচে তারা ঘুমাত, তাদের ওপরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Questions, Four Passives",
          "bn": "চারটি প্রশ্ন, চারটি কর্মবাচ্য"
        },
        "p": [
          {
            "en": "Four things are named, one to a verse: the camels in 88:17, the sky in 88:18, the mountains in 88:19 and, last of all, the earth in 88:20 — each arriving in the same mould, kayfa, how, followed by a verb in the passive: khuliqat, created; rufi'at, raised; nusibat, set up; sutihat, spread out. Four times the question is put, and four times the doer of the action is left out of the clause.",
            "bn": "চারটি জিনিসের নাম নেওয়া হয়েছে, প্রতিটি আয়াতে একটি করে: 88:17 আয়াতে উট, 88:18 আয়াতে আকাশ, 88:19 আয়াতে পর্বতমালা এবং 88:20 আয়াতে যমীন। প্রতিটি আসে একই ছাঁচে — 'কাইফা', অর্থাৎ কীভাবে, তারপর একটি কর্মবাচ্য ক্রিয়া: 'খুলিকাত' — সৃষ্টি করা হয়েছে; 'রুফিআত' — উঁচু করা হয়েছে; 'নুসিবাত' — স্থাপন করা হয়েছে; 'সুতিহাত' — বিছিয়ে দেওয়া হয়েছে। চারবার প্রশ্নটি রাখা হয়, আর চারবারই কাজটি যিনি করেছেন তাঁকে বাক্যের বাইরে রাখা হয়।"
          },
          {
            "en": "That omission is the point. A passive verb states that something was done and declines to name who did it, so the listener has to supply the answer himself. And the question is kayfa, how, rather than what: the verses do not ask about the camel but about its making. The order also traces a single turn of the head — down at the mount beside you, up at the sky, across at the mountains, and down again at the ground under your feet.",
            "bn": "এই বাদ দেওয়াটাই মূল কথা। কর্মবাচ্য ক্রিয়া বলে যে কাজটি করা হয়েছে, কিন্তু কে করেছে তা বলতে অস্বীকার করে; ফলে উত্তরটি শ্রোতাকেই জোগাতে হয়। আর প্রশ্নটি 'কী' নয়, 'কাইফা' — কীভাবে: আয়াতগুলো উট সম্পর্কে জিজ্ঞেস করে না, জিজ্ঞেস করে তার নির্মাণ সম্পর্কে। ক্রমটিও মাথার একটি পূর্ণ ঘূর্ণন এঁকে দেয় — পাশে দাঁড়ানো বাহনের দিকে নিচে, তারপর আকাশের দিকে ওপরে, তারপর পর্বতমালার দিকে আড়াআড়ি, আর তারপর আবার পায়ের নিচের মাটির দিকে নিচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Camel Comes First",
          "bn": "উট কেন প্রথমে"
        },
        "p": [
          {
            "en": "The commentators explain the first item by the audience. The camel was the Arab's transport, his wealth, his milk, his wool and his measure of a man's standing; there was nothing he saw more often or thought about less. So the sequence begins with the most familiar object in the listener's world rather than the rarest. No journey and no expertise is required to begin. The evidence was tethered outside the tent.",
            "bn": "মুফাসসিরগণ প্রথম বস্তুটির ব্যাখ্যা দেন শ্রোতাদের দিয়ে। উট ছিল আরবের বাহন, তার সম্পদ, তার দুধ, তার পশম এবং মানুষের মর্যাদা মাপার মানদণ্ড; এর চেয়ে বেশি সে আর কিছু দেখত না, আবার এর চেয়ে কম সে আর কিছু নিয়ে ভাবতও না। তাই ক্রমটি শুরু হয় শ্রোতার জগতের বিরলতম বস্তু দিয়ে নয়, বরং সবচেয়ে পরিচিত বস্তু দিয়ে। শুরু করতে কোনো সফরও লাগে না, কোনো বিশেষজ্ঞতাও নয়। প্রমাণটি তাঁবুর বাইরেই বাঁধা ছিল।"
          },
          {
            "en": "The other three keep that character. The sky raised, the mountains set firm, the earth spread out: each is described exactly as it presents itself to a person standing in the open, which is what looking means. The verses do not hand out information the listener could not have gathered. They correct the way he was already gathering it, and the whole demand of the passage is that a familiar thing be seen once as made.",
            "bn": "বাকি তিনটিও একই চরিত্র ধরে রাখে। উঁচু করা আকাশ, দৃঢ়ভাবে স্থাপিত পর্বতমালা, বিছিয়ে দেওয়া যমীন: প্রতিটির বর্ণনা ঠিক সেভাবেই, যেভাবে খোলা জায়গায় দাঁড়ানো একজন মানুষের কাছে তা ধরা দেয় — আর তাকানো বলতে সেটিই বোঝায়। আয়াতগুলো এমন তথ্য দেয় না যা শ্রোতা নিজে সংগ্রহ করতে পারত না। বরং সে যেভাবে ইতিমধ্যেই সংগ্রহ করছিল সেই ধরনটিকে শুধরে দেয়; আর গোটা অংশের দাবি একটিই — পরিচিত একটি জিনিসকে অন্তত একবার নির্মিত হিসেবে দেখা হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Looking Is For",
          "bn": "এই দেখা কীসের জন্য"
        },
        "p": [
          {
            "en": "The passage that follows sets the limits of the whole enterprise. 88:21 tells the Prophet ﷺ to remind, and says he is only a reminder; 88:22 adds that he is not a controller over them. Nobody can do the looking on another person's behalf. And the surah then closes the circle it opened with: 88:25 says that to Us is their return, and 88:26 that upon Us is their reckoning — which is the Overwhelming of the first verse, argued for by four ordinary sights.",
            "bn": "এর পরের অংশটি গোটা কাজের সীমা নির্ধারণ করে দেয়। 88:21 আয়াত নবী ﷺ-কে উপদেশ দিতে বলে, আর বলে যে তিনি কেবল একজন উপদেশদাতা; 88:22 আয়াত যোগ করে যে তিনি তাদের ওপর জবরদস্তিকারী নন। কেউ অন্যের হয়ে তাকিয়ে দিতে পারে না। এরপর সূরাটি যে বৃত্ত দিয়ে শুরু হয়েছিল তা বন্ধ করে: 88:25 আয়াত বলে তাদের প্রত্যাবর্তন আমারই কাছে, আর 88:26 আয়াত বলে তাদের হিসাব নেওয়া আমারই কাজ — এটিই প্রথম আয়াতের সেই আচ্ছন্নকারী দিন, যার পক্ষে যুক্তি দিল চারটি সাধারণ দৃশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning It Into a Habit",
          "bn": "একে অভ্যাসে পরিণত করা"
        },
        "p": [
          {
            "en": "Muslim narrates from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ used to recite Surah al-A'la and Surah al-Ghashiyah in the two Eid prayers and in the Friday prayer. That means the largest regular gatherings of the community heard this fourfold command to look, over and over, in the middle of a normal week. It was never treated as an exercise for specialists.",
            "bn": "মুসলিম নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ দুই ঈদের নামাযে এবং জুমু'আর নামাযে সূরা আল-আ'লা ও সূরা আল-গাশিয়াহ পড়তেন। অর্থাৎ সম্প্রদায়ের সবচেয়ে বড় নিয়মিত সমাবেশগুলো একটি সাধারণ সপ্তাহের মাঝখানে বারবার শুনত তাকাবার এই চারমুখী নির্দেশ। একে কখনোই বিশেষজ্ঞদের অনুশীলন হিসেবে দেখা হয়নি।"
          },
          {
            "en": "The same practice is described elsewhere. 3:190-191 gives it to those of understanding, who remember Allah standing, sitting and lying down and reflect on the creation of the heavens and the earth; 2:164 lists the materials again for a people who use reason. Al-Ghashiyah keeps the version anyone can start today, because it asks for only one thing at a time: pick a single ordinary sight, stay with it past the moment of recognition, and let the question be how it was made.",
            "bn": "একই অনুশীলনের বর্ণনা অন্যত্রও আছে। 3:190-191 আয়াত এটি দেয় জ্ঞানবানদের, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে এবং আসমান ও যমীনের সৃষ্টি নিয়ে চিন্তা করে; 2:164 আয়াত বিবেকবান সম্প্রদায়ের জন্য সেই উপকরণগুলোই আবার সাজিয়ে দেয়। আল-গাশিয়াহ ধরে রাখে সেই সংস্করণটি, যা আজই যে কেউ শুরু করতে পারে, কারণ এটি একবারে একটির বেশি চায় না: একটি সাধারণ দৃশ্য বেছে নিন, চেনা হয়ে যাওয়ার মুহূর্তটির পরেও তার সঙ্গে থাকুন, আর প্রশ্নটি হোক — এটি কীভাবে বানানো হলো।"
          }
        ]
      }
    ]
  }
});
