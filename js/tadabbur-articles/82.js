/**
 * Tadabbur long-form articles — surah 82.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "82:6": {
    "sections": [
      {
        "h": {
          "en": "A Question Cuts In",
          "bn": "প্রশ্নটি মাঝপথে ঢোকে"
        },
        "p": [
          {
            "en": "Surah al-Infitar opens with four clauses of collapse: the sky breaks apart in 82:1, the stars fall scattering in 82:2, the seas are erupted in 82:3, and in 82:4 the contents of the graves are scattered. 82:5 delivers the result the four were building towards — a soul will know what it sent ahead and what it kept back. The scene is complete, and it has been addressed to nobody in particular.",
            "bn": "সূরা আল-ইনফিতার শুরু হয় ধসের চারটি বাক্য দিয়ে: 82:1 আয়াতে আসমান ফেটে যায়, 82:2 আয়াতে তারকারা বিক্ষিপ্ত হয়ে ঝরে পড়ে, 82:3 আয়াতে সমুদ্রকে উত্তাল করে তোলা হয়, আর 82:4 আয়াতে কবরগুলোর ভেতরের সব বের করে ছড়িয়ে দেওয়া হয়। 82:5 আয়াত সেই পরিণতিটি দেয় যার দিকে চারটি বাক্য এগোচ্ছিল — প্রত্যেকে জেনে নেবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে এসেছে। দৃশ্যটি সম্পূর্ণ, আর তা এতক্ষণ কাউকে বিশেষভাবে সম্বোধন করেনি।"
          },
          {
            "en": "Then the grammar turns and looks straight at the reader: O man. The Day is dropped mid-description and a question is put to a single person, in the singular. No other verse in the surah calls the reader by name like this. A reader who has been watching the sky tear open is suddenly the one being asked something, and the something is not what he did but what he was thinking.",
            "bn": "তারপর ব্যাকরণ ঘুরে দাঁড়িয়ে সরাসরি পাঠকের দিকে তাকায়: হে মানুষ। কিয়ামতের বর্ণনা মাঝপথে থামিয়ে একজন ব্যক্তিকে, একবচনে, একটি প্রশ্ন করা হয়। সূরার আর কোনো আয়াত পাঠককে এভাবে ডেকে সম্বোধন করে না। যে পাঠক এতক্ষণ আসমান ফেটে যেতে দেখছিলেন, তিনি হঠাৎ নিজেই জিজ্ঞাসিত হন — আর জিজ্ঞাসাটি তিনি কী করেছেন তা নিয়ে নয়, তিনি কী ভাবছিলেন তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Deceived You",
          "bn": "কীসে তোমাকে ধোঁকা দিল"
        },
        "p": [
          {
            "en": "The verb gharra means to deceive by making something dangerous look safe. Its noun al-gharur, the arch-deceiver, appears in 31:33, 35:5 and 57:14, and in each of those places the deception is specifically about Allah. Here no deceiver is named at all. The question ma gharraka, what deceived you, occurs nowhere else in the Quran, and it is left open so the reader has to fill in his own answer.",
            "bn": "গাররা ক্রিয়ার অর্থ বিপজ্জনক কিছুকে নিরাপদ দেখিয়ে ধোঁকা দেওয়া। এর বিশেষ্য আল-গারূর — প্রধান প্রতারক — এসেছে 31:33, 35:5 ও 57:14 আয়াতে, আর এই প্রতিটি জায়গাতেই ধোঁকাটি বিশেষভাবে আল্লাহকে নিয়ে। এখানে কোনো প্রতারকের নামই নেওয়া হয়নি। 'মা গাররাকা' — কীসে তোমাকে ধোঁকা দিল — এই প্রশ্নটি কুরআনের আর কোথাও নেই, আর তা খোলা রাখা হয়েছে যেন পাঠককে নিজের উত্তরটি নিজেই বসাতে হয়।"
          },
          {
            "en": "The mufassirun record answers anyway. Ibn Kathir relates from Qatadah that what deceived him was his own devil, and others answered simply: his ignorance. Ibn Kathir also records the view that the name at the end of the verse is placed there to prompt the answer — that the man's reply would be, your generosity deceived me. As-Sa'di reads the question as a rebuke that already contains its refutation: nothing about this Lord ever gave grounds for the presumption.",
            "bn": "তবু মুফাসসিরগণ উত্তর নথিবদ্ধ করেছেন। ইবনে কাসীর কাতাদাহ থেকে বর্ণনা করেন যে তাকে ধোঁকা দিয়েছে তার নিজের শয়তান; আবার কেউ কেউ সোজাসুজি উত্তর দিয়েছেন: তার নিজের অজ্ঞতা। ইবনে কাসীর এই মতটিও উল্লেখ করেন যে আয়াতের শেষে নামটি রাখা হয়েছে উত্তরটি মুখে তুলে দেওয়ার জন্য — অর্থাৎ লোকটির জবাব হবে, তোমার উদারতাই আমাকে ধোঁকা দিয়েছে। আস-সা'দী প্রশ্নটিকে এমন এক তিরস্কার হিসেবে পড়েন যার ভেতরেই তার খণ্ডন রয়েছে: এই প্রতিপালকের কোনো কিছুই কখনো এই ধৃষ্টতার ভিত্তি জোগায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why al-Karim",
          "bn": "কেন আল-কারীম"
        },
        "p": [
          {
            "en": "The name chosen is the point. The verse could have leaned on fear and named a Lord of severity; instead it names the Lord being disregarded by the very attribute that made the disregard comfortable. Al-Karim, the Generous, describes a giving that costs the Giver nothing and asks nothing back. That is exactly the quality that is easiest to mistake for indifference, and the verse puts it where the excuse would go.",
            "bn": "যে নামটি বেছে নেওয়া হয়েছে, সেটাই মূল কথা। আয়াতটি ভয়ের উপর ভর করে কঠোরতার কোনো নাম উল্লেখ করতে পারত; বরং তা যাঁকে অগ্রাহ্য করা হচ্ছে তাঁকে চিহ্নিত করে ঠিক সেই গুণটি দিয়ে, যে গুণ অগ্রাহ্য করাটাকে আরামদায়ক করে তুলেছিল। আল-কারীম — মহানুভব — এমন এক দান বোঝায় যা দাতার কিছুই খরচ করায় না এবং বিনিময়ে কিছু চায় না। ঠিক এই গুণটিকেই উদাসীনতা বলে ভুল করা সবচেয়ে সহজ, আর আয়াতটি তাকে বসায় সেখানেই যেখানে অজুহাতটি বসত।"
          },
          {
            "en": "The root is worth following. The superlative form al-Akram, the Most Generous, is used of Allah in 96:3 and nowhere else, in the first passage ever revealed. In 27:40 Sulayman (AS), looking at a throne carried to him in an instant, says that whoever is ungrateful should know that his Lord is Ghaniyy Karim, free of all need and generous. In each case the generosity is stated next to a warning about what people do with it.",
            "bn": "ধাতুটির পিছু নেওয়া দরকার। অতিশয়ার্থক রূপ আল-আকরাম — সর্বাধিক অনুগ্রহশীল — আল্লাহর জন্য ব্যবহৃত হয়েছে 96:3 আয়াতে এবং আর কোথাও নয়; সেটি সর্বপ্রথম নাযিল হওয়া অংশ। 27:40 আয়াতে সুলাইমান (আঃ) মুহূর্তের মধ্যে তাঁর সামনে এনে রাখা সিংহাসনটির দিকে তাকিয়ে বলেন, যে অকৃতজ্ঞ হয় সে জেনে রাখুক তাঁর প্রতিপালক গানিয়্য ও কারীম — অভাবমুক্ত ও মহানুভব। প্রতিটি ক্ষেত্রেই উদারতার কথা বলা হয়েছে মানুষ তা নিয়ে কী করে সে বিষয়ে এক সতর্কবাণীর পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer in the Body",
          "bn": "উত্তরটি দেহের ভেতরেই"
        },
        "p": [
          {
            "en": "The next two verses answer the question with the reader's own body. 82:7 says He created you, then proportioned you, then balanced you; 82:8 adds that He assembled you in whatever form He willed. The generosity being presumed upon is not an abstraction somewhere. It is the frame the person doing the presuming is standing in. Then 82:9 names the real problem: no, but you deny the Recompense.",
            "bn": "পরের দুই আয়াত প্রশ্নটির উত্তর দেয় পাঠকের নিজের দেহ দিয়েই। 82:7 আয়াত বলে, তিনি তোমাকে সৃষ্টি করেছেন, তারপর সুঠাম করেছেন, তারপর ভারসাম্যপূর্ণ করেছেন; 82:8 আয়াত যোগ করে, তিনি তোমাকে তাঁর ইচ্ছেমতো আকৃতিতে গঠন করেছেন। যে উদারতার উপর ভরসা করে ধৃষ্টতা দেখানো হচ্ছে, তা দূরের কোনো বিমূর্ত ব্যাপার নয়। তা সেই কাঠামো, যার ভেতরে দাঁড়িয়েই ধৃষ্টতাটি দেখানো হচ্ছে। তারপর 82:9 আয়াত আসল সমস্যাটির নাম বলে: না, বরং তোমরা কর্মফলকে অস্বীকার করে থাক।"
          },
          {
            "en": "And so that generosity is not confused with absence of oversight, 82:10 to 82:12 place keepers over every person — noble, recording, and knowing whatever you do. The surah answers its own question in a straight line: you were made carefully, you are watched constantly, and what you actually did was decide the Reckoning would never arrive.",
            "bn": "আর উদারতাকে যেন নজরদারির অনুপস্থিতি বলে গুলিয়ে ফেলা না হয়, সে জন্য 82:10 থেকে 82:12 আয়াত প্রত্যেক মানুষের উপর তত্ত্বাবধায়ক নিযুক্ত করে — সম্মানিত, লিপিবদ্ধকারী, আর তোমরা যা করো তা জ্ঞাত। সূরাটি নিজের প্রশ্নের উত্তর দেয় সোজা এক রেখায়: তোমাকে যত্ন করে বানানো হয়েছে, তোমাকে অবিরাম দেখা হচ্ছে, আর তুমি আসলে যা করেছ তা হলো সিদ্ধান্ত নিয়ে বসা যে হিসাবের দিনটি কখনো আসবেই না।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering It Yourself",
          "bn": "নিজেই এর উত্তর দেওয়া"
        },
        "p": [
          {
            "en": "Because the question is left open, its use is diagnostic. Answer it in the first person and name the thing exactly: youth, health, an unbroken run of ease, a delay in consequences long enough to look like permission. Every item on that list is a gift. The deception is not in receiving it; it is in reading a gift as a guarantee, and then reading the Giver's patience as agreement.",
            "bn": "প্রশ্নটি খোলা রাখা হয়েছে বলেই এর ব্যবহার নিরূপণমূলক। উত্তম পুরুষে এর উত্তর দিন আর জিনিসটির নাম নির্দিষ্ট করে বলুন: যৌবন, সুস্থতা, অবিচ্ছিন্ন স্বাচ্ছন্দ্যের ধারা, কিংবা পরিণতির এমন দীর্ঘ বিলম্ব যা অনুমতির মতো দেখায়। এই তালিকার প্রতিটি জিনিসই এক উপহার। ধোঁকা তা গ্রহণ করায় নয়; ধোঁকা হলো উপহারকে নিশ্চয়তা বলে পড়া, আর তারপর দাতার ধৈর্যকে সম্মতি বলে পড়া।"
          }
        ]
      }
    ]
  }
});
