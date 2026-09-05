/**
 * Tadabbur long-form articles — surah 69.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "69:19": {
    "sections": [
      {
        "h": {
          "en": "The Day of Exhibition",
          "bn": "প্রদর্শনের দিন"
        },
        "p": [
          {
            "en": "Surah al-Haqqah has been building a scene. One blast on the Horn in 69:13, the earth and the mountains lifted and crushed in a single blow in 69:14, the sky split apart in 69:16, and eight bearing the Throne of your Lord in 69:17. Then 69:18 turns from the sky to the crowd standing under it: that Day you will be exhibited, and nothing of yours that was concealed stays hidden. Our verse is the first individual voice heard after that sentence.",
            "bn": "সূরা আল-হাক্কাহ ধাপে ধাপে একটি দৃশ্য গড়ে তুলছিল। 69:13-এ শিঙায় একটিমাত্র ফুঁক, 69:14-এ যমীন ও পাহাড়গুলোকে তুলে নিয়ে এক আঘাতে চূর্ণ করা, 69:16-এ আকাশ ফেটে যাওয়া, আর 69:17-এ আটজন বহন করছে আপনার প্রতিপালকের আরশ। এরপর 69:18 আকাশ থেকে মুখ ফিরিয়ে নিচে দাঁড়ানো ভিড়ের দিকে তাকায়: সেদিন তোমাদের হাজির করা হবে, আর তোমাদের গোপন কিছুই গোপন থাকবে না। এই বাক্যের পর প্রথম যে একক কণ্ঠস্বর শোনা যায়, সেটিই আমাদের আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Said Once",
          "bn": "একবারই বলা একটি শব্দ"
        },
        "p": [
          {
            "en": "The first thing he says is a word that occurs nowhere else in the Quran: ha'umu. It is not a statement at all but a word of offering, what a person says while holding something out, and the grammarians gloss it as khudhu, take. And it is plural. One man has been handed one document, and the first sound out of him is addressed to a crowd. The verse does not say who the crowd is.",
            "bn": "সে প্রথম যে কথাটি বলে, তাতে এমন একটি শব্দ আছে যা কুরআনে আর কোথাও নেই: 'হা-উমু'। এটি আদৌ কোনো বিবৃতি নয়, বরং এগিয়ে দেওয়ার শব্দ — কিছু হাতে বাড়িয়ে ধরে মানুষ যা বলে; ব্যাকরণবিদরা এর অর্থ করেন 'খুযূ', অর্থাৎ নাও। আর শব্দটি বহুবচন। একজন মানুষের হাতে একটি দলিল দেওয়া হয়েছে, আর তার মুখ থেকে প্রথম যে শব্দটি বের হয় তা একদল লোককে সম্বোধন করে বলা। সেই দল কারা, আয়াত তা বলে না।"
          },
          {
            "en": "That plural carries the emotional content of the verse. The record in his hand holds exactly what 69:18 has just said cannot be concealed, and his response to its contents becoming public is to hurry the reading along. People hide what would shame them; this man is not waiting to be exposed, he is distributing. Whatever is written there, he already knows what it says, and he is content for strangers to know it too.",
            "bn": "এই বহুবচনটিই আয়াতের আবেগ বহন করে। তার হাতের আমলনামায় ঠিক সেই জিনিসগুলোই আছে, 69:18 যেগুলো সম্পর্কে সবেমাত্র বলেছে যে সেগুলো লুকানো যাবে না; আর সেগুলো প্রকাশ্য হয়ে পড়ছে দেখে তার প্রতিক্রিয়া হলো পড়াটা তাড়াতাড়ি করার তাগাদা দেওয়া। মানুষ তা-ই লুকায় যা তাকে লজ্জা দেবে; এই লোকটি ধরা পড়ার অপেক্ষা করছে না, সে নিজেই বিলি করছে। সেখানে যা-ই লেখা থাকুক, সে আগে থেকেই জানে কী লেখা আছে, আর অচেনা মানুষও তা জানুক — এতে তার আপত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Silent Ha",
          "bn": "নীরব 'হা'"
        },
        "p": [
          {
            "en": "The last word is kitabiyah, my record, and it ends on a ha that is not part of the word. Arabic calls it the ha' as-sakt, a letter added at a pause so the voice can rest. It is written into the mushaf here and it recurs through the passage: kitabiyah and hisabiyah in 69:19 and 69:20, both again in 69:25 and 69:26, then maliyah in 69:28 and sultaniyah in 69:29 — six times inside eleven verses.",
            "bn": "শেষ শব্দটি 'কিতাবিয়াহ' — আমার আমলনামা — আর তা শেষ হয় এমন একটি 'হা' দিয়ে যা শব্দটির অংশ নয়। আরবিতে এর নাম 'হা-উস সাক্‌ত' — থামার সময় কণ্ঠকে বিশ্রাম দেওয়ার জন্য যোগ করা একটি অক্ষর। এখানে তা মুসহাফে লিখিত আছে এবং এই অংশ জুড়ে বারবার ফিরে আসে: 69:19 ও 69:20-তে 'কিতাবিয়াহ' ও 'হিসাবিয়াহ', আবার 69:25 ও 69:26-তে সে দুটিই, তারপর 69:28-এ 'মালিয়াহ' এবং 69:29-এ 'সুলতানিয়াহ' — এগারো আয়াতের ভেতরে ছয়বার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Counterpart at 69:25",
          "bn": "69:25-এর বিপরীত ছবি"
        },
        "p": [
          {
            "en": "Six verses later the same sentence is built again with everything reversed. 69:19 begins fa-amma man utiya kitabahu bi-yaminihi; 69:25 begins wa-amma man utiya kitabahu bi-shimalihi. The right hand becomes the left. And the two speeches end on the identical word: this man says ha'umu iqra'u kitabiyah, while the other says ya laytani lam uta kitabiyah, I wish I had not been given my record.",
            "bn": "ছয় আয়াত পরে একই বাক্য আবার গড়া হয়, তবে সবকিছু উল্টে দিয়ে। 69:19 শুরু হয় 'ফাআম্মা মান ঊতিয়া কিতাবাহু বিয়ামীনিহ' দিয়ে; 69:25 শুরু হয় 'ওয়া আম্মা মান ঊতিয়া কিতাবাহু বিশিমালিহ' দিয়ে। ডান হাত হয়ে যায় বাম হাত। আর দুটি কথাই শেষ হয় একই শব্দে: এই লোকটি বলে 'হা-উমু ইক্‌রাঊ কিতাবিয়াহ', আর অন্যজন বলে 'ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ' — হায়, আমাকে যদি আমার আমলনামা না দেওয়া হতো।"
          },
          {
            "en": "So it is one Day, and the document is the same kind of document. Nothing differs except what is written in it, and what is written in it was supplied earlier. The Quran describes the same handing over elsewhere with another detail: 84:7 has the record given in the right hand, and 84:10 has it given from behind the back. In every version the record arrives. The only variable is which sentence the person then says.",
            "bn": "কাজেই দিনটি একটিই, আর দলিলটিও একই ধরনের দলিল। এর ভেতরে কী লেখা আছে তা ছাড়া আর কিছুই আলাদা নয় — আর যা লেখা আছে, তা সরবরাহ করা হয়েছিল আরও আগে। কুরআন এই একই হস্তান্তরের বর্ণনা অন্যত্র আরেকটি বিবরণসহ দেয়: 84:7-এ আমলনামা দেওয়া হয় ডান হাতে, আর 84:10-এ দেওয়া হয় পিঠের পেছন দিক থেকে। প্রতিটি বর্ণনাতেই আমলনামা এসে পৌঁছায়। কেবল বদলায় এটুকু — মানুষটি এরপর কোন বাক্যটি উচ্চারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Is Confident",
          "bn": "তার এই নিশ্চিন্ততা কেন"
        },
        "p": [
          {
            "en": "69:20 gives his reason in a single sentence: inni zanantu anni mulaqin hisabiyah, indeed I was certain that I would meet my account. The verb zanna usually covers supposition, and the commentators point out that here it carries its other sense, firm conviction, which is how this app renders it. He is not saying that he suspected a reckoning might come. He is saying that he lived as a man who knew it would.",
            "bn": "69:20 তার কারণটি জানায় একটিমাত্র বাক্যে: 'ইন্নী যানানতু আন্নী মুলাকিন হিসাবিয়াহ' — নিশ্চয়ই আমি নিশ্চিত ছিলাম যে আমাকে আমার হিসাবের সম্মুখীন হতে হবে। 'যান্না' ক্রিয়াটি সাধারণত অনুমান বোঝায়, আর মুফাসসিরগণ উল্লেখ করেন যে এখানে তা তার অন্য অর্থটি বহন করছে — দৃঢ় প্রত্যয়; এই অ্যাপের অনুবাদও সেভাবেই করেছে। সে বলছে না যে হিসাব হতে পারে বলে তার সন্দেহ ছিল। সে বলছে, সে এমন মানুষের মতো বেঁচেছে যে জানত হিসাব হবেই।"
          },
          {
            "en": "69:24 then completes the logic. The people of the garden are told: eat and drink in satisfaction for what you put forth in the days past. Bima aslaftum uses the language of sending goods on ahead of yourself. Nothing in the passage suggests that the joy of our verse was manufactured on the spot. It is the ordinary relief of a man collecting something he dispatched long ago and had not forgotten sending.",
            "bn": "এরপর 69:24 যুক্তিটি সম্পূর্ণ করে। জান্নাতবাসীদের বলা হয়: বিগত দিনগুলোতে তোমরা যা আগে পাঠিয়েছ তার বিনিময়ে তৃপ্তির সঙ্গে খাও ও পান করো। 'বিমা আসলাফতুম' শব্দবন্ধটি নিজের আগে পণ্য পাঠিয়ে দেওয়ার ভাষা ব্যবহার করে। এই অংশের কোথাও ইঙ্গিত নেই যে আমাদের আয়াতের আনন্দটি সেখানেই হঠাৎ তৈরি হয়েছে। এটি সেই সাধারণ স্বস্তি, যা অনুভব করে এমন একজন মানুষ যে বহু আগে পাঠানো কিছু সংগ্রহ করছে এবং পাঠানোর কথা ভোলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Writing It Now",
          "bn": "এখনই তা লেখা"
        },
        "p": [
          {
            "en": "The verse offers a test that does not require imagining the Hereafter at all. Take one ordinary day and ask which parts of it you would hand to a stranger to read. The distance between that answer and the whole day is the work. What makes this man shout is not that his record is spotless, since 69:20 never claims that; it is that he expected to meet it, lived accordingly, and 69:24 says his ease was earned in days now past.",
            "bn": "আয়াতটি এমন একটি পরীক্ষা দেয় যার জন্য আখিরাত কল্পনা করারও দরকার নেই। যেকোনো একটি সাধারণ দিন নিন এবং জিজ্ঞেস করুন, তার কোন অংশগুলো আপনি একজন অচেনা মানুষের হাতে পড়তে দিতে পারতেন। সেই উত্তর আর গোটা দিনটির মধ্যেকার ব্যবধানটুকুই আসল কাজ। এই লোকটি যে চেঁচিয়ে ওঠে তার কারণ এই নয় যে তার আমলনামা নিষ্কলঙ্ক — 69:20 তেমন দাবি কখনোই করে না; কারণ হলো সে হিসাবের মুখোমুখি হওয়ার প্রত্যাশা রাখত, সেভাবেই বেঁচেছে, আর 69:24 বলছে তার এই স্বস্তি অর্জিত হয়েছে বিগত দিনগুলোতেই।"
          }
        ]
      }
    ]
  }
});
