/**
 * Tadabbur long-form articles — surah 46.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "46:15": {
    "sections": [
      {
        "h": {
          "en": "A Command With Its Reason Attached",
          "bn": "কারণসহ একটি নির্দেশ"
        },
        "p": [
          {
            "en": "The verse opens with wassayna al-insana bi-walidayhi ihsana: We have enjoined upon man kindness to his parents. The verb wassayna, We have enjoined, is the language of a solemn charge laid down by Allah Himself, and ihsan is a verbal noun demanding not bare compliance but excellence — the same word used for the highest grade of worship. Then, unusually, the verse immediately supplies the command's reason, and the reason is a person: his mother.",
            "bn": "আয়াতটি শুরু হয়: ওয়াসসাইনাল-ইনসানা বিওয়ালিদাইহি ইহসানা — আমি মানুষকে তার পিতামাতার প্রতি সদাচরণের নির্দেশ দিয়েছি। ওয়াসসাইনা ক্রিয়াটি — আমি নির্দেশ দিয়েছি — স্বয়ং আল্লাহর দেওয়া এক গুরুগম্ভীর দায়িত্বের ভাষা, আর ইহসান একটি ক্রিয়াবাচক বিশেষ্য, যা নিছক আনুগত্য নয়, উৎকর্ষ দাবি করে — ইবাদতের সর্বোচ্চ স্তরের জন্যও এই একই শব্দ ব্যবহৃত হয়। তারপর, অস্বাভাবিকভাবে, আয়াতটি সঙ্গে সঙ্গে আদেশটির কারণ জানিয়ে দেয় — আর সেই কারণটি একজন মানুষ: তার মা।"
          },
          {
            "en": "His mother carried him in hardship and gave birth to him in hardship — the word kurhan appears twice, once for the carrying and once for the delivery. Both parents are named in the command, but when the verse argues its case it points to the one whose service can never be repaid in kind. Nobody remembers being carried, and nobody witnessed their own birth; the verse testifies on behalf of a debt its debtor slept through.",
            "bn": "তার মা কষ্ট করে তাকে গর্ভে ধারণ করেছে এবং কষ্ট করে তাকে প্রসব করেছে — কুরহান শব্দটি দুইবার এসেছে, একবার গর্ভধারণের জন্য, একবার প্রসবের জন্য। আদেশে পিতামাতা দুজনের কথাই আছে, কিন্তু আয়াত যখন তার যুক্তি পেশ করে তখন আঙুল তোলে তাঁর দিকে, যাঁর সেবা কোনোদিন সমান মাপে শোধ করা যায় না। গর্ভে বহন করার কথা কারও মনে থাকে না, নিজের জন্ম কেউ দেখেনি; আয়াতটি এমন এক ঋণের পক্ষে সাক্ষ্য দেয়, যে ঋণের দেনাদার তখন ঘুমিয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Thirty Months, Measured",
          "bn": "মাপা ত্রিশ মাস"
        },
        "p": [
          {
            "en": "Then a number: his bearing and his weaning are thirty months. The Quran gives the weaning period on its own elsewhere — in 2:233 mothers suckle their children two complete years, which is twenty-four months, for whoever wishes to complete the nursing. Ibn Kathir relates that Ali (RA) put the two verses together and drew a legal conclusion: thirty months less twenty-four leaves six, so the shortest term of pregnancy the law recognises is six months.",
            "bn": "তারপর একটি সংখ্যা: তার গর্ভধারণ ও দুধ ছাড়ানো ত্রিশ মাসে। কুরআন দুধপানের মেয়াদ আলাদাভাবে অন্যত্র দিয়েছে — 2:233 আয়াতে মায়েরা সন্তানদের পূর্ণ দুই বছর দুধ পান করাবে, অর্থাৎ চব্বিশ মাস, যে দুধপানের মেয়াদ পূর্ণ করতে চায় তার জন্য। ইবনে কাসীর বর্ণনা করেন, আলী (রাঃ) আয়াত দুটি মিলিয়ে একটি শরয়ী সিদ্ধান্ত টেনেছিলেন: ত্রিশ মাস থেকে চব্বিশ বাদ দিলে থাকে ছয়, তাই শরীয়ত গর্ভধারণের সর্বনিম্ন যে মেয়াদ স্বীকার করে তা ছয় মাস।"
          },
          {
            "en": "The deduction shows how precisely the companions read. But for the ordinary reader the number does something simpler: it converts a vague sense of owing one's mother into a measured quantity. Thirty months is roughly nine hundred days and nights of another person's body being spent on yours before you could thank anyone. The verse asks for ihsan towards parents only after establishing that the account opened long before the child's memory did.",
            "bn": "এই সিদ্ধান্ত দেখায় সাহাবীগণ কত সূক্ষ্মভাবে পড়তেন। কিন্তু সাধারণ পাঠকের জন্য সংখ্যাটি আরও সরল একটি কাজ করে: মায়ের কাছে ঋণী থাকার অস্পষ্ট অনুভূতিকে এটি একটি মাপা পরিমাণে বদলে দেয়। ত্রিশ মাস মানে মোটামুটি নয়শো দিন-রাত — আপনি কাউকে ধন্যবাদ দিতে শেখার আগেই অন্য একজন মানুষের শরীর আপনার শরীরের পেছনে ব্যয় হয়ে গেছে। আয়াতটি পিতামাতার প্রতি ইহসান চায় কেবল এটুকু প্রতিষ্ঠার পরে যে হিসাবখাতাটি খুলেছিল সন্তানের স্মৃতি শুরু হওয়ার অনেক আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Full Strength and Forty Years",
          "bn": "পূর্ণ শক্তি ও চল্লিশ বছর"
        },
        "p": [
          {
            "en": "The verse then leaps across decades in a single clause: until, when he reaches his full strength and reaches forty years, he says a prayer. Two arrivals are named — ashuddahu, the peak of bodily and mental maturity, and then forty years. The commentators read forty as the age at which excuses run out: the passions have cooled, the parents have grown old or passed on, and a person's own children are watching how they treat their grandparents.",
            "bn": "এরপর আয়াতটি একটি মাত্র বাক্যাংশে কয়েক দশক পেরিয়ে যায়: অবশেষে সে যখন তার পূর্ণ শক্তিতে পৌঁছায় এবং চল্লিশ বছরে পৌঁছায়, তখন সে একটি দুআ করে। দুটি পৌঁছানোর কথা এসেছে — আশুদ্দাহু, দৈহিক ও মানসিক পরিপক্বতার চূড়া, তারপর চল্লিশ বছর। মুফাসসিরগণ চল্লিশকে পড়েন সেই বয়স হিসেবে যেখানে অজুহাত ফুরিয়ে যায়: প্রবৃত্তি ঠান্ডা হয়েছে, পিতামাতা বৃদ্ধ হয়েছেন বা চলে গেছেন, আর মানুষটির নিজের সন্তানেরা দেখছে সে তার দাদা-দাদি, নানা-নানির সঙ্গে কেমন ব্যবহার করে।"
          },
          {
            "en": "What the mature person does at that summit is the verse's quiet surprise. He does not celebrate his strength or audit his achievements; he turns and prays. The Quran presents the turning point of maturity not as arrival at independence but as arrival at gratitude — the moment a person finally has the height to see how much was carried for them, and uses that height to ask for the ability to give thanks.",
            "bn": "সেই চূড়ায় পৌঁছে পরিণত মানুষটি কী করে — সেটিই আয়াতের নীরব চমক। সে তার শক্তি উদযাপন করে না, অর্জনের হিসাবও মেলায় না; সে ফিরে দাঁড়ায় এবং দুআ করে। কুরআন পরিণত বয়সের মোড়কে উপস্থাপন করে স্বাধীনতায় পৌঁছানো হিসেবে নয়, কৃতজ্ঞতায় পৌঁছানো হিসেবে — সেই মুহূর্ত, যখন মানুষ অবশেষে এতটা উচ্চতা পায় যে দেখতে পারে তার জন্য কতখানি বহন করা হয়েছিল, আর সেই উচ্চতা ব্যবহার করে চায় শুকরিয়া আদায়ের সামর্থ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer Itself",
          "bn": "দুআটি নিজে"
        },
        "p": [
          {
            "en": "The du'a deserves reading clause by clause. Rabbi awzi'ni an ashkura ni'mataka — my Lord, enable me to be grateful for Your favour; awzi'ni is an imperative of request, asking Allah to gather one's scattered capacities towards thankfulness, an admission that even gratitude needs His help. The favour named is upon me and upon my parents — one blessing flowing through two generations. Then: and that I do righteousness You approve of, since not every impressive deed earns His approval.",
            "bn": "দুআটি বাক্যাংশ ধরে ধরে পড়ার দাবি রাখে। রাব্বি আওযি'নী আন আশকুরা নি'মাতাকা — হে আমার রব, আমাকে সামর্থ্য দিন যেন আপনার নিয়ামতের শুকরিয়া আদায় করি; আওযি'নী একটি প্রার্থনাসূচক আদেশরূপ, যা আল্লাহর কাছে চায় — তিনি যেন মানুষের ছড়িয়ে থাকা সামর্থ্যগুলো কৃতজ্ঞতার দিকে জড়ো করে দেন; এ এক স্বীকারোক্তি যে কৃতজ্ঞতার জন্যও তাঁর সাহায্য লাগে। যে নিয়ামতের নাম নেওয়া হয়েছে তা আমার ওপর ও আমার পিতামাতার ওপর — একটি নিয়ামত দুই প্রজন্মের ভেতর দিয়ে বয়ে চলেছে। তারপর: এবং যেন এমন সৎকাজ করি যা আপনি পছন্দ করেন — কারণ চোখধাঁধানো প্রতিটি কাজ তাঁর সন্তুষ্টি পায় না।"
          },
          {
            "en": "The prayer then reaches forward: and make righteousness continue for me in my offspring. The one who has just acknowledged the debt to the generation before asks for goodness in the generation after — gratitude flowing backwards becomes concern flowing forwards. And it closes with return: I have repented to You, and I am of the Muslims. At the height of his strength, the speaker's final words are surrender, as if strength were only ever borrowed for this.",
            "bn": "এরপর দুআটি সামনের দিকে হাত বাড়ায়: এবং আমার জন্য আমার সন্তানদের মধ্যে সততা অব্যাহত রাখুন। যে ব্যক্তি এইমাত্র আগের প্রজন্মের কাছে ঋণ স্বীকার করল, সে-ই পরের প্রজন্মের কল্যাণ চাইছে — পেছনদিকে বয়ে যাওয়া কৃতজ্ঞতা সামনের দিকে বয়ে যাওয়া মমতায় পরিণত হয়। আর শেষ হয় প্রত্যাবর্তনে: আমি আপনার কাছে তাওবা করলাম, এবং আমি মুসলিমদের অন্তর্ভুক্ত। শক্তির শিখরে দাঁড়িয়ে বক্তার শেষ কথা আত্মসমর্পণ — যেন শক্তিটা এই কাজের জন্যই ধার নেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes Across the Quran",
          "bn": "কুরআনজুড়ে প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "The verse gathers threads laid elsewhere. In 31:14 the mother carries her child in weakness upon weakness, and the weaning is in two years, with the command to be grateful to Me and to your parents — the same pairing of divine and parental thanks. In 17:23-24 kindness to parents is legislated for their old age, down to the prohibition of saying so much as uff to them, and the child is taught to pray: my Lord, have mercy on them as they raised me when I was small.",
            "bn": "আয়াতটি অন্যত্র বিছানো সুতোগুলো একত্র করে। 31:14 আয়াতে মা তার সন্তানকে বহন করে দুর্বলতার ওপর দুর্বলতা নিয়ে, আর দুধ ছাড়ানো দুই বছরে — সঙ্গে আদেশ: আমার প্রতি ও তোমার পিতামাতার প্রতি কৃতজ্ঞ হও — আল্লাহর শুকরিয়া ও পিতামাতার শুকরিয়ার সেই একই জোড়। 17:23-24 আয়াতে পিতামাতার বার্ধক্যের জন্য সদাচরণ বিধিবদ্ধ হয়েছে — এমনকি তাঁদের 'উফ' পর্যন্ত বলা নিষেধ — আর সন্তানকে দুআ শেখানো হয়েছে: হে আমার রব, তাঁদের প্রতি রহম করুন যেমন তাঁরা আমাকে শৈশবে লালন করেছেন।"
          },
          {
            "en": "The opening words of the mature believer's prayer are not unique to this verse either. In 27:19 Sulayman (AS), at the peak of a kingdom no one after him would match, smiles at the speech of an ant and prays with the same words: rabbi awzi'ni an ashkura ni'mataka, my Lord, enable me to be grateful for Your favour upon me and upon my parents. A prophet-king and an unnamed forty-year-old reach the same summit and say the same sentence.",
            "bn": "পরিণত মুমিনের দুআর শুরুর শব্দগুলোও কেবল এই আয়াতের নিজস্ব নয়। 27:19 আয়াতে সুলাইমান (আঃ), এমন এক রাজত্বের শিখরে যার সমকক্ষ তাঁর পরে কেউ হবে না, একটি পিপীলিকার কথা শুনে মুচকি হাসেন এবং একই শব্দে দুআ করেন: রাব্বি আওযি'নী আন আশকুরা নি'মাতাকা — হে আমার রব, আমাকে সামর্থ্য দিন যেন আমার ওপর ও আমার পিতামাতার ওপর আপনার নিয়ামতের শুকরিয়া আদায় করি। একজন নবী-বাদশাহ আর এক নাম-না-জানা চল্লিশ বছরের মানুষ একই চূড়ায় পৌঁছে একই বাক্য উচ্চারণ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Turning Point",
          "bn": "মোড় ঘোরার মুহূর্তটি যাপন"
        },
        "p": [
          {
            "en": "For those approaching or past forty, the verse offers a ready-made agenda: memorise this du'a and mean it. Its three requests — capacity for gratitude, deeds He approves, righteous descendants — and its closing declaration of repentance cover precisely the concerns that midlife raises and that midlife crises mishandle. Where the culture around us treats forty as a deadline for self-reinvention, the verse treats it as the appointed hour for self-orientation: towards the parents behind, the children ahead, and the Lord above.",
            "bn": "যাঁদের বয়স চল্লিশের কাছাকাছি বা পেরিয়ে গেছে, তাঁদের জন্য আয়াতটি একটি তৈরি কর্মসূচি দেয়: এই দুআটি মুখস্থ করুন এবং অন্তর থেকে করুন। এর তিনটি চাওয়া — কৃতজ্ঞতার সামর্থ্য, তাঁর পছন্দের আমল, সৎ সন্তান — আর শেষের তাওবার ঘোষণাটি মধ্যজীবন যে দুশ্চিন্তাগুলো তোলে এবং মধ্যজীবনের সংকট যেগুলো ভুলভাবে সামলায়, ঠিক সেগুলোই ধারণ করে। আমাদের চারপাশের সংস্কৃতি যেখানে চল্লিশকে ধরে নিজেকে নতুন করে গড়ার শেষ সময়সীমা, আয়াতটি সেখানে একে ধরে নিজেকে ঠিক দিকে ফেরানোর নির্ধারিত ক্ষণ: পেছনের পিতামাতা, সামনের সন্তান, আর ঊর্ধ্বের রবের দিকে।"
          },
          {
            "en": "For those whose parents still live, the verse restores urgency: the thirty months were spent on you without a contract, and the window for ihsan in return is closing at an unknown rate. For those whose parents have died, the du'a keeps a door open, since gratitude for the favour upon them can still be spoken. And for every parent reading, there is a sobering mirror: the gratitude your children will one day pray with is being shaped by what they watch you do now.",
            "bn": "যাঁদের পিতামাতা এখনো জীবিত, আয়াতটি তাঁদের তাগিদ ফিরিয়ে দেয়: সেই ত্রিশ মাস কোনো চুক্তি ছাড়াই আপনার পেছনে ব্যয় হয়েছিল, আর বিনিময়ে ইহসানের জানালাটি বন্ধ হয়ে আসছে — কত দ্রুত, তা অজানা। যাঁদের পিতামাতা মারা গেছেন, দুআটি তাঁদের জন্য একটি দরজা খোলা রাখে, কারণ তাঁদের ওপর নিয়ামতের শুকরিয়া এখনো মুখে আনা যায়। আর প্রতিটি পাঠক-অভিভাবকের জন্য আছে একটি সংযত আয়না: আপনার সন্তানেরা একদিন যে কৃতজ্ঞতা নিয়ে দুআ করবে, তা গড়ে উঠছে এখন তারা আপনাকে যা করতে দেখছে তা দিয়ে।"
          }
        ]
      }
    ]
  }
});
