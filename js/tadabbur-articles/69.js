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
  },
  "69:25": {
    "sections": [
      {
        "h": {
          "en": "A Turn After the Garden",
          "bn": "বাগানের পরে মোড়"
        },
        "p": [
          {
            "en": "Wa-amma man utiya kitabahu bi-shimalihi fa-yaqulu ya laytani lam uta kitabiyah: but as for he who is given his record in his left hand, he will say, I wish I had not been given my record. The verse is ten words long in Arabic. The verse before it, 69:24, closed a scene of reward with an invitation to eat and drink for what was put forth in the days past. Ours opens with wa-amma, but as for, and turns from the garden to a second man.",
            "bn": "ওয়া আম্মা মান ঊতিয়া কিতাবাহু বিশিমালিহি ফাইয়াকূলু ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ: আর যাকে তার আমলনামা দেওয়া হবে তার বাম হাতে, সে বলবে, হায়, আমাকে যদি আমার আমলনামা না দেওয়া হত! আরবিতে আয়াতটি ১০টি শব্দের। এর ঠিক আগে ৬৯:২৪ পুরস্কারের এক দৃশ্য শেষ করেছে এই আমন্ত্রণে: বিগত দিনগুলোতে যা আগে পাঠিয়েছ, তার বিনিময়ে তৃপ্তির সঙ্গে খাও, পান কর। আমাদের আয়াত খোলে 'ওয়া আম্মা' দিয়ে, মানে 'আর যার কথা বলতে হয়'। বাগান থেকে চোখ সরে যায় দ্বিতীয় এক মানুষের দিকে।"
          },
          {
            "en": "Both verbs that matter are passive. Utiya, he is given, and lam uta, I had not been given: in neither does the man act. He does not reach for the record or choose the hand it comes to. Something is handed to him, and the only thing in the verse that is his own is the sentence he says when it arrives. The commentators fetched for this verse keep to that shape. They spend their words on what the record is, how it is handed, and what the wish means.",
            "bn": "আয়াতের দুটি মূল ক্রিয়াই কর্মবাচ্যে। 'ঊতিয়া' মানে তাকে দেওয়া হল, আর 'লাম ঊতা' মানে আমাকে দেওয়া না হত। কোনোটাতেই লোকটি নিজে কিছু করছে না। আমলনামার দিকে সে হাত বাড়ায় না, কোন হাতে আসবে তাও সে বেছে নেয় না। জিনিসটা তার হাতে তুলে দেওয়া হয়। আয়াতে তার নিজের বলতে শুধু সেই বাক্যটুকু, যা আমলনামা হাতে আসার পর সে উচ্চারণ করে। এ আয়াতের যেসব তাফসীর সামনে আছে, সেগুলোও এই কাঠামো ধরে চলে। তাদের আলোচনা তিনটি প্রশ্ন ঘিরে: আমলনামাটা কী, কীভাবে তা দেওয়া হয়, আর ইচ্ছাটার অর্থ কী।"
          }
        ]
      },
      {
        "h": {
          "en": "What Reaches His Hand",
          "bn": "হাতে যা এসে পৌঁছায়"
        },
        "p": [
          {
            "en": "At-Tabari restates the verse in plainer words: as for whoever is given, on that Day, the record of his deeds, kitab a'malihi, in his left hand. His gloss makes two things explicit that the verse leaves implied. The time is yawma'idhin, that Day, which ties the verse back to the Day the surah has been describing. And the book is a book of deeds. The Muyassar uses the same phrase, kitab a'malihi, and as-Sa'di makes it plural and specific: kutub a'malihim as-sayyi'a, the records of their evil deeds.",
            "bn": "তাবারী আয়াতটিকে আরও সহজ ভাষায় বলেন: আর যাকে সেদিন তার আমলের খাতা, 'কিতাবু আ'মালিহি', দেওয়া হবে তার বাম হাতে। আয়াতে যা ইঙ্গিতে আছে, তাঁর ব্যাখ্যায় এমন দুটি কথা খোলাখুলি এসে যায়। প্রথমটি সময়: 'ইয়াওমাইযিন', সেদিন। এ শব্দ আয়াতটিকে বেঁধে দেয় সেই দিনের সঙ্গে, যার ছবি সূরাটি এতক্ষণ আঁকছিল। দ্বিতীয়টি খাতার পরিচয়: এ হল আমলের খাতা। মুয়াসসারও একই কথা বলে, 'কিতাবু আ'মালিহি'। সা'দী শব্দটিকে বহুবচন করেন এবং আরও নির্দিষ্ট করে দেন: 'কুতুবু আ'মালিহিমুস সাইয়্যিআহ', তাদের মন্দ আমলের খাতাগুলো।"
          },
          {
            "en": "Ibn Kathir places the scene. His Arabic says the record is given fi al-'arasat, on the open grounds of the gathering, which the English abridgement renders as when the people are brought before Allah. He calls the passage an account of the condition of al-ashqiya', the wretched, and the abridgement heads it the bad condition of whoever is given his record in his left hand. Apart from al-Qurtubi's narration, taken up below, these sources say no more about the record's contents than that they are his deeds.",
            "bn": "ইবন কাসীর দৃশ্যটির জায়গা চিনিয়ে দেন। তাঁর আরবি ভাষ্যে আমলনামা দেওয়া হয় 'ফিল আরাসাত', মানে হাশরের খোলা প্রান্তরে। ইংরেজি সংক্ষিপ্ত সংস্করণ কথাটির অনুবাদ করেছে এভাবে: যখন মানুষকে আল্লাহর সামনে হাজির করা হবে। তিনি এ অংশকে বলেন 'আল-আশকিয়া', অর্থাৎ হতভাগাদের অবস্থার বিবরণ। সংক্ষিপ্ত সংস্করণের শিরোনামও তাই: যাকে বাম হাতে আমলনামা দেওয়া হবে, তার করুণ অবস্থা। নিচে কুরতুবীর বর্ণনার কথা আসবে। সেটুকু বাদ দিলে এসব সূত্র আমলনামার ভেতরের কথা নিয়ে এর বেশি কিছু বলে না যে, তাতে আছে তার আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Behind the Back",
          "bn": "পিঠের পেছন দিয়ে"
        },
        "p": [
          {
            "en": "Bi-shimalihi: in his left hand. At-Tabari, the Muyassar and Ibn Kathir repeat the phrase without describing how the handing happens. Al-Baghawi is the one who does. He quotes Ibn as-Sa'ib: his left hand is twisted round behind his back, and then he is given his record. He then adds a second account under qila, it is said: his left hand is pulled out from his chest to behind his back, and then he is given his record. Neither account appears in the other sources fetched for this verse.",
            "bn": "বিশিমালিহি: তার বাম হাতে। তাবারী, মুয়াসসার আর ইবন কাসীর শব্দটি উল্লেখ করেন, কিন্তু হাতে দেওয়াটা কীভাবে ঘটে তা বলেন না। সে বর্ণনা দেন বাগাভী। তিনি ইবনুস সাইবের কথা আনেন: তার বাম হাত মুচড়ে পিঠের পেছনে নেওয়া হবে, তারপর তাকে আমলনামা দেওয়া হবে। এরপর 'কীলা', অর্থাৎ 'বলা হয়' কথাটি দিয়ে তিনি আরেকটি বর্ণনা যোগ করেন: তার বাম হাত বুক থেকে টেনে বের করে পিঠের পেছনে নেওয়া হবে, তারপর আমলনামা দেওয়া হবে। এ আয়াতের অন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিতে এ দুই বর্ণনার একটিও নেই।"
          },
          {
            "en": "The two accounts differ in the verb, twisting against pulling out, and al-Baghawi does not choose between them. He ties neither to another verse, so they are reported here as his, with the attributions he gives, and no further. What they share is the end point: before the record arrives, the hand that takes it has been moved behind him. The other commentators leave the picture at the left hand alone, and that is where the verse itself leaves it.",
            "bn": "দুই বর্ণনার পার্থক্য ক্রিয়াপদে। একটিতে হাত মোচড়ানো, অন্যটিতে টেনে বের করা। বাগাভী এর কোনোটিকে অন্যটির উপর প্রাধান্য দেন না। অন্য কোনো আয়াতের সঙ্গেও তিনি এগুলোকে যুক্ত করেন না। তাই এখানে বর্ণনা দুটি তাঁরই নামে, তাঁর দেওয়া সূত্রসহ রাখা হল, এর বেশি নয়। দুটির মিল শেষ জায়গায়। আমলনামা আসার আগেই যে হাত তা গ্রহণ করবে, সেটিকে তার পিঠের পেছনে সরিয়ে নেওয়া হয়। বাকি তাফসীরকারেরা ছবিটা থামান শুধু বাম হাতে এসে। আয়াত নিজেও সেখানেই থামে।"
          },
          {
            "en": "As-Sa'di gives a reason for the left hand, in four nouns. The people of wretchedness are given their records in their left hands tamyizan lahum wa-khizyan wa-'aran wa-fadihatan: as a mark that sets them apart, and as disgrace, shame and public exposure. On his reading the hand is itself the first part of what happens to the man. Before he has read a line, the way the record reaches him has already set him apart in front of everyone.",
            "bn": "বাম হাত কেন, সা'দী তার কারণ বলেন ৪টি শব্দে। হতভাগাদের আমলনামা তাদের বাম হাতে দেওয়া হয় 'তাময়ীযান লাহুম ওয়া খিযয়ান ওয়া আরান ওয়া ফাদীহাতান'। অর্থাৎ তাদের আলাদা করে চিনিয়ে দিতে, আর লাঞ্ছনা, লজ্জা ও প্রকাশ্য অপমান হিসেবে। তাঁর ব্যাখ্যায় হাতটাই লোকটির উপর যা ঘটছে তার প্রথম অংশ। একটা লাইনও পড়ার আগে আমলনামা যেভাবে তার কাছে পৌঁছায়, সেটাই সবার সামনে তাকে আলাদা করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Wishing Not to Know",
          "bn": "না জানার আকুতি"
        },
        "p": [
          {
            "en": "Then the speech: ya laytani lam uta kitabiyah, oh, I wish I had not been given my record. Ya layta is a particle of wishing. What he wishes for is narrow and exact. He does not wish the record said something else, or that its pages were fewer. He wishes it had never been handed to him at all. At-Tabari restates the clause with the more common verb, ya laytani lam u'ta kitabiyah, and the Muyassar does the same, dropping the final ha: ya laytani lam u'ta kitabi.",
            "bn": "এরপর তার কথা: ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ, হায়, আমাকে যদি আমার আমলনামা না দেওয়া হত! 'ইয়া লাইতা' আকাঙ্ক্ষা প্রকাশের শব্দ। লোকটি যা চায়, তা খুব সীমিত, খুব নির্দিষ্ট। সে চায় না যে খাতায় অন্য কিছু লেখা থাকুক, কিংবা পাতা কম হোক। সে চায়, খাতাটা যেন তার হাতে দেওয়াই না হত। তাবারী বাক্যটি বলেন বেশি প্রচলিত ক্রিয়া দিয়ে: 'ইয়া লাইতানী লাম উ'তা কিতাবিয়াহ'। মুয়াসসারও তাই করে, তবে শেষের 'হা' বাদ দিয়ে: 'ইয়া লাইতানী লাম উ'তা কিতাবী'।"
          },
          {
            "en": "The commentators name the feeling behind the sentence, and each uses a different word. Ibn Kathir says that at that moment yandamu ghayat an-nadam, he regrets with the utmost regret, which the abridgement gives as he will be very remorseful. The Muyassar has him speak nadiman mutahassiran, regretful and consumed with sorrow. As-Sa'di says he speaks min al-hamm wa-l-ghamm wa-l-khizy, out of worry, grief and disgrace. None of them softens the moment, and none of them adds a reply to it.",
            "bn": "বাক্যটির পেছনের অনুভূতির নাম দেন তাফসীরকারেরা, প্রত্যেকে ভিন্ন শব্দে। ইবন কাসীর বলেন, তখন সে 'ইয়ানদামু গায়াতান নাদাম', চরম অনুশোচনায় ভোগে। সংক্ষিপ্ত ইংরেজি সংস্করণে আছে, সে ভীষণ অনুতপ্ত হবে। মুয়াসসারের ভাষায় সে কথাটা বলে 'নাদিমান মুতাহাসসিরান', অনুতাপে আর আফসোসে পুড়তে পুড়তে। সা'দী বলেন, সে বলে 'মিনাল হাম্মি ওয়াল গাম্মি ওয়াল খিযই', দুশ্চিন্তা, দুঃখ আর লাঞ্ছনা থেকে। তাঁদের কেউ মুহূর্তটাকে নরম করেন না। কেউ এর কোনো জবাবও জুড়ে দেন না।"
          },
          {
            "en": "As-Sa'di is also the one who says why. He wishes it, in his words, because he is given tidings of entering the Fire and of al-khasara al-abadiyya, everlasting loss. On that reading the record does more than list what was done. Being handed it in that hand is itself the news, and the wish not to have received it is a wish not to have heard what it announces. The verse does not spell this out; it is as-Sa'di's gloss, and among these sources he alone states a reason in so many words.",
            "bn": "কেন এ ইচ্ছা, সেটাও বলেন সা'দী। তাঁর ভাষায়, কারণ তাকে জাহান্নামে প্রবেশের আর 'আল-খাসারাতুল আবাদিয়্যাহ', চিরস্থায়ী ক্ষতির খবর দেওয়া হচ্ছে। এ ব্যাখ্যায় আমলনামা শুধু কৃতকর্মের ফর্দ নয়। ওই হাতে সেটা পাওয়াই এক খবর। তাই তা না পাওয়ার ইচ্ছা আসলে সেই খবর না শোনার ইচ্ছা। আয়াত নিজে কথাটা খুলে বলে না। এটা সা'দীর ব্যাখ্যা, আর এসব সূত্রের মধ্যে কেবল তিনিই স্পষ্ট ভাষায় একটা কারণ উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Black Book Turned Over",
          "bn": "উল্টে দেখা কালো খাতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi's comment on this verse is a long narrated description, and it needs a caution first. The passage fetched for this verse begins partway through, with the words and if the man was a head in evil, so the narrator and the chain do not appear in it. It is reported here as something al-Qurtubi carries, not as a hadith, and nothing else in this article rests on it. It describes one kind of man: a leader in evil who called people to it, commanded it and gathered many followers.",
            "bn": "এ আয়াতে কুরতুবীর আলোচনা একটি দীর্ঘ বর্ণনা। তবে আগে একটা সতর্কতা দরকার। এ আয়াতে তাঁর তাফসীরের যে অংশটুকু সামনে আছে, তা শুরু হয়েছে মাঝপথ থেকে, এই কথায়: 'আর লোকটি যদি মন্দের নেতা হয়'। ফলে বর্ণনাকারী কে, সনদ কী, তা এতে নেই। তাই এখানে এটিকে হাদীস হিসেবে নয়, কুরতুবী যা উদ্ধৃত করেছেন সেভাবেই রাখা হল। এ প্রবন্ধের আর কোনো কথা এর উপর দাঁড়িয়ে নেই। বর্ণনাটি এক বিশেষ ধরনের মানুষের। সে ছিল মন্দের নেতা, মানুষকে সেদিকে ডাকত, তার হুকুম দিত, আর তার পেছনে জুটেছিল অনেক অনুসারী।"
          },
          {
            "en": "He is called by his own name and his father's name, and comes forward to his reckoning. A black book with black writing is brought out for him, his good deeds on the inside and his evil deeds on the outside. He reads the good deeds first and thinks he will be saved, until at the end he finds: these are your good deeds, and they have been turned back on you. His face darkens and he despairs of any good. He turns the book over to the evil deeds, and at their end he finds: these are your evil deeds, doubled against you.",
            "bn": "তাকে তার নিজের নাম আর বাবার নাম ধরে ডাকা হয়। সে এগিয়ে আসে হিসাব দিতে। তার জন্য বের করা হয় কালো এক খাতা, লেখাও কালো। ভেতরের দিকে তার নেকি, বাইরের দিকে তার গুনাহ। প্রথমে সে নেকিগুলো পড়ে, আর ভাবে সে বেঁচে যাবে। শেষে গিয়ে দেখে লেখা আছে: এই তোমার নেকি, আর এগুলো তোমাকে ফিরিয়ে দেওয়া হয়েছে। তার চেহারা কালো হয়ে যায়, কল্যাণের সব আশা সে হারিয়ে ফেলে। তারপর খাতা উল্টে সে গুনাহগুলো পড়ে। সেগুলোর শেষে দেখে লেখা: এই তোমার গুনাহ, আর এগুলো তোমার উপর দ্বিগুণ করা হয়েছে।"
          },
          {
            "en": "The text pauses at once on that last word. Doubled, it explains, means that the punishment is multiplied for him; it does not mean that anything he did not do is added to him. Then he is enlarged for the Fire, his face blackened, clothed in garments of tar, and told: go to your companions and tell them that each of them has the like of this. He goes, the narration ends, saying: ya laytani lam uta kitabiyah. In this telling the verse is spoken after the reading, on his way to his companions.",
            "bn": "শেষ শব্দটিতে এসে বর্ণনা সঙ্গে সঙ্গে থেমে ব্যাখ্যা দেয়। দ্বিগুণ মানে তার শাস্তি বাড়িয়ে দেওয়া হবে। এর মানে এই নয় যে, যা সে করেনি তা তার ঘাড়ে চাপানো হবে। এরপর জাহান্নামের জন্য তার দেহ বিশাল করা হয়, চেহারা কালো হয়ে যায়, তাকে আলকাতরার পোশাক পরানো হয়। তাকে বলা হয়: তোমার সঙ্গীদের কাছে যাও, তাদের জানিয়ে দাও যে তাদের প্রত্যেকের জন্য এমনটাই আছে। বর্ণনার শেষে দেখা যায়, সে চলে যাচ্ছে আর বলছে: ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ। এ বর্ণনা অনুযায়ী আয়াতের কথাটা সে বলে পড়া শেষ করার পর, সঙ্গীদের কাছে যাওয়ার পথে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Left Hand Is Meant",
          "bn": "বাম হাত কার, সে প্রশ্ন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what it describes: a man on the Day of Reckoning receiving his record in his left hand and wishing he had not. It licenses nothing against any living person or any community. It gives no one a test for deciding who among the people they know belongs to the left hand, and no one's standing with Allah can be read from it. Ibn Kathir's al-ashqiya' and as-Sa'di's ahl ash-shaqa', the people of wretchedness, name an outcome of that Day, not a label for anyone now.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, তা-ই বর্ণনা করে: হিসাবের দিনে একজন মানুষ বাম হাতে আমলনামা পাচ্ছে, আর চাইছে যেন তা না পেত। এ আয়াত কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। পরিচিতদের মধ্যে কে বাম হাতের দলে, তা বিচার করার কোনো মাপকাঠিও এটি কাউকে দেয় না। আল্লাহর কাছে কার কী অবস্থান, তাও এ থেকে পড়া যায় না। ইবন কাসীরের 'আল-আশকিয়া' আর সা'দীর 'আহলুশ শাকা', মানে হতভাগার দল, সেদিনের পরিণতির নাম। আজ কারও গায়ে লাগানোর তকমা নয়।"
          },
          {
            "en": "Even al-Qurtubi's narration, which does describe a particular kind of man, shows him only at the moment his record is read; it does not tell its listener whom to point at. For anyone reading this verse, the record it is really about is the reader's own. In 69:24 the reward is for what was put forth in the days past. For the person reading, those days are still today, and the pages are still being filled. That is the use the verse leaves open: to read one's own record while it can still change.",
            "bn": "কুরতুবীর বর্ণনা নির্দিষ্ট এক ধরনের মানুষের কথা বলে ঠিকই। তবু তাকে দেখায় শুধু আমলনামা পড়ার মুহূর্তে। কার দিকে আঙুল তুলতে হবে, তা শ্রোতাকে বলে দেয় না। যে-ই এ আয়াত পড়ুক, আসলে আয়াতটি তার নিজের আমলনামার কথাই বলছে। ৬৯:২৪ আয়াতে পুরস্কার দেওয়া হয় বিগত দিনগুলোতে আগে পাঠানো আমলের জন্য। পাঠকের জন্য সেই দিনগুলো এখনো চলছে, আজও তারই একটা, আর পাতাগুলো এখনো ভরছে। আয়াতটি কাজে লাগানোর পথ তাই একটাই খোলা: বদলানোর সুযোগ থাকতে থাকতে নিজের আমলনামা নিজে পড়ে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Speech Runs On",
          "bn": "কথা যেখানে গড়িয়ে চলে"
        },
        "p": [
          {
            "en": "The man does not stop at this sentence. Ibn Kathir quotes the following verses with it in a single quotation, and the Muyassar reads 69:25 to 69:29 as a continuous speech of regret: his wish not to have known his recompense, his wish that the death he died in the world had ended his affair, the wealth that did not help him, and his hujja, his argument, that is gone. Each of those clauses has its own verse, and they are left to their own entries.",
            "bn": "লোকটি এই বাক্যে থেমে থাকে না। ইবন কাসীর পরের আয়াতগুলো এর সঙ্গে এক উদ্ধৃতিতেই আনেন। মুয়াসসার ৬৯:২৫ থেকে ৬৯:২৯ পর্যন্ত পুরোটাকে আফসোসের একটানা কথা হিসেবে পড়ে। সে চায়, নিজের প্রতিফল কী তা যদি না জানত। চায়, দুনিয়ায় যে মৃত্যু সে বরণ করেছিল, তাতেই যদি সব চুকে যেত। যে সম্পদ তার কোনো কাজে আসেনি, আর তার 'হুজ্জাহ', মানে যে যুক্তি দিয়ে সে নিজের পক্ষে কথা বলত, তা হারিয়ে গেছে। এ কথাগুলোর প্রতিটির নিজস্ব আয়াত আছে, তাই সেগুলোর আলোচনা সেসব আয়াতের জন্যই রইল।"
          },
          {
            "en": "No hadith is attached to this verse in the tafsirs fetched for it. Ibn Kathir's abridgement, which treats 69:25 to 69:34 as a block, cites narrations only under the later verses of that block, not under this verse, so none is reported here. Nor does any of these sources give an occasion of revelation for the verse. What they give is enough: the record named as a record of deeds, the left hand described and explained, and the wish glossed as regret, sorrow and the dread of what the record announces.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তাতে আয়াতটির সঙ্গে যুক্ত কোনো হাদীস নেই। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ৬৯:২৫ থেকে ৬৯:৩৪ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে বর্ণনাগুলো এসেছে ওই অংশের পরের আয়াতগুলোর অধীনে, এ আয়াতের অধীনে নয়। তাই এখানে কোনোটিই উল্লেখ করা হল না। এ সূত্রগুলোর কোনোটি আয়াতটির শানে নুযূলও উল্লেখ করে না। তারা যা দেয়, তাই যথেষ্ট। আমলনামা মানে আমলের খাতা। বাম হাতে দেওয়ার বর্ণনা আর কারণ। আর ইচ্ছাটার ব্যাখ্যা: অনুতাপ, আফসোস, আর খাতাটা যে খবর দেয় তার ভয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pages Still Open Today",
          "bn": "আজও খোলা পাতা"
        },
        "p": [
          {
            "en": "Set the two moments side by side, as the passage sets them. In 69:24 a reward is given for what was sent ahead in days now gone. In our verse a man stands holding the same kind of document and wishes it had never reached him. He is not asking for a second chance in that sentence; he is asking not to have been given what he was given. The verse records the wish and grants nothing. The record stays in his hand, and the passage moves on.",
            "bn": "অংশটি যেভাবে মুহূর্ত দুটিকে পাশাপাশি রাখে, সেভাবে দেখুন। ৬৯:২৪ আয়াতে পুরস্কার মেলে চলে যাওয়া দিনগুলোতে আগে পাঠানো আমলের জন্য। আমাদের আয়াতে একজন মানুষ সেই একই ধরনের খাতা হাতে দাঁড়িয়ে আছে, আর চাইছে, এটা যদি তার কাছে না পৌঁছাত! এ বাক্যে সে দ্বিতীয় সুযোগ চাইছে না। সে চাইছে, যা তাকে দেওয়া হয়েছে তা যেন দেওয়াই না হত। আয়াত ইচ্ছাটুকু লিখে রাখে, মঞ্জুর করে না কিছুই। আমলনামা তার হাতেই থেকে যায়, আর বর্ণনা সামনে এগিয়ে যায়।"
          },
          {
            "en": "That is a wish a reader can make unnecessary in advance. The pages being written today are the ones that will be handed over on that Day. A wrong put right, a debt repaid, a prayer kept, a repentance made while it can still be made: these are changes that are possible now and will not be possible then. The verse's question to its reader is not about anyone else's left hand. It is whether, on that Day, I will be glad to have been given mine.",
            "bn": "পাঠক চাইলে এই ইচ্ছাকে আগেভাগেই অপ্রয়োজনীয় করে তুলতে পারেন। আজ যে পাতাগুলো লেখা হচ্ছে, সেদিন সেগুলোই হাতে তুলে দেওয়া হবে। একটা অন্যায় শুধরে নেওয়া, একটা ঋণ শোধ করা, একটা নামাজ ঠিকমতো আদায় করা, তওবার সময় থাকতে তওবা করা: এসব বদল এখন সম্ভব, তখন আর সম্ভব হবে না। এ আয়াতের প্রশ্ন অন্য কারও বাম হাত নিয়ে নয়। প্রশ্নটা হল, সেদিন আমার আমলনামা হাতে পেয়ে আমি খুশি হব কি না।"
          }
        ]
      }
    ]
  }
});
