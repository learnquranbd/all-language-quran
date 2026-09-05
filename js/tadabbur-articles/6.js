/**
 * Tadabbur long-form articles — surah 6.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "6:32": {
    "sections": [
      {
        "h": {
          "en": "Where the Verse Interrupts",
          "bn": "আয়াতটি কোথায় এসে থামায়"
        },
        "p": [
          {
            "en": "Surah al-An'am is a Makkan surah arguing with people who denied that they would ever meet their Lord. 6:31 just before it shows exactly those people at the Hour, crying out their regret while carrying their burdens on their backs. 6:33 just after it turns to console the Prophet ﷺ over what they say. Between an image of total loss and a word of comfort, one line of appraisal is set down.",
            "bn": "সূরা আল-আনআম মক্কী সূরা, যা এমন মানুষদের সঙ্গে তর্ক করে যারা অস্বীকার করত যে তারা কখনো তাদের রবের সাক্ষাৎ পাবে। ঠিক আগের 6:31 আয়াতটি সেই মানুষদেরই কিয়ামতের মুহূর্তে দেখায় — পিঠে পাপের বোঝা নিয়ে আক্ষেপে চিৎকার করছে। ঠিক পরের 6:33 আয়াতটি নবী ﷺ-কে সান্ত্বনা দেয় তারা যা বলে তার জন্য। সম্পূর্ণ ক্ষতির একটি চিত্র আর সান্ত্বনার একটি কথার মাঝখানে বসিয়ে দেওয়া হয় মূল্যায়নের একটি লাইন।"
          },
          {
            "en": "The appraisal names two things and stops: la'ib and lahw. The same estimate appears elsewhere with different arithmetic. 57:20 expands it to five items ending in a withered field; 29:64 gives these same two with the order reversed, lahw first and then la'ib; 47:36 gives the same two in the same order but with innama in place of this verse's wa ma … illa. The Quran states the point more than once and varies the wording, which marks the judgement as settled rather than rhetorical.",
            "bn": "এই মূল্যায়ন দুটি জিনিসের নাম নিয়ে থেমে যায়: লা'ইব ও লাহও। একই মূল্যায়ন অন্যত্র ভিন্ন হিসাবে এসেছে। 57:20 আয়াতে তা পাঁচটি বিষয়ে বিস্তৃত হয়ে শেষ হয় শুকিয়ে যাওয়া ফসলে; 29:64 আয়াতে এই দুটিই আসে উল্টো ক্রমে — আগে লাহও, পরে লা'ইব; আর 47:36 আয়াত একই দুটিকে একই ক্রমেই দেয়, তবে এই আয়াতের 'ওয়া মা … ইল্লা'-র বদলে সেখানে 'ইন্নামা'। কুরআন কথাটি একাধিকবার বলে এবং শব্দবিন্যাস বদলায়, যা বুঝিয়ে দেয় রায়টি অলংকার নয়, স্থিরীকৃত।"
          }
        ]
      },
      {
        "h": {
          "en": "Play and Diversion",
          "bn": "খেলা ও বিনোদন"
        },
        "p": [
          {
            "en": "La'ib is play: effort that produces nothing and was never meant to. Lahw comes from a root carrying the sense of being turned away from something; it is the diversion that occupies a person while what matters goes unattended. Notice what is described. It is al-hayat ad-dunya, the lower life, not the earth, the body, food, marriage or work. The Quran nowhere calls creation play. It calls a life play when that life is the whole of what a person intends.",
            "bn": "লা'ইব মানে খেলা: এমন পরিশ্রম যা কিছুই উৎপন্ন করে না এবং করার কথাও ছিল না। লাহও এসেছে এমন এক ধাতু থেকে যা কোনো কিছু থেকে ফিরে যাওয়ার অর্থ বহন করে; এটি সেই বিনোদন যা মানুষকে ব্যস্ত রাখে আর যা গুরুত্বপূর্ণ তা অযত্নে পড়ে থাকে। লক্ষ করুন কী বর্ণনা করা হচ্ছে। বর্ণনাটি আল-হায়াতুদ দুনিয়ার — নিচের জীবনের; পৃথিবীর নয়, দেহের নয়, খাদ্যের নয়, বিবাহের নয়, কাজেরও নয়। কুরআন কোথাও সৃষ্টিকে খেলা বলে না। সে জীবনকেই খেলা বলে, যে জীবনটুকুই মানুষের সমস্ত উদ্দেশ্য।"
          },
          {
            "en": "Confirmation is inside this same surah. At 6:70 the Prophet ﷺ is told to leave those who have taken their religion as la'ib and lahw, whom the worldly life has deluded. The same two words that describe the dunya can describe how a person handles his religion. So the pair does not label a class of objects. It labels a way of treating something, and it can be fastened onto prayer as readily as onto amusement.",
            "bn": "নিশ্চয়তা এই সূরার ভেতরেই আছে। 6:70 আয়াতে নবী ﷺ-কে বলা হয় তাদের ছেড়ে দিতে যারা নিজেদের দ্বীনকে লা'ইব ও লাহও বানিয়ে নিয়েছে, আর দুনিয়ার জীবন যাদের ধোঁকায় ফেলেছে। যে দুটি শব্দ দুনিয়াকে বর্ণনা করে, সেই দুটিই বর্ণনা করতে পারে একজন মানুষ তার দ্বীনকে কীভাবে সামলায়। অর্থাৎ শব্দজোড়াটি কোনো বস্তুশ্রেণির নাম নয়। এটি কোনো কিছুর সঙ্গে আচরণের ধরনের নাম, আর তা বিনোদনের গায়ে যেমন সেঁটে যেতে পারে, নামাযের গায়েও তেমনই পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Better For Whom",
          "bn": "কার জন্য উত্তম"
        },
        "p": [
          {
            "en": "The second clause is not that the Hereafter is better, and stop. It is khayrun lilladhina yattaqun, better for those who guard themselves. The commentators take the restriction at its word. For a person who arrives there with nothing, the lasting home is not an improvement on the passing one; it is worse, because what lasts there is loss. The verse offers a superior home to a specified party, and that specification is the entire condition of the offer.",
            "bn": "দ্বিতীয় বাক্যটি এই নয় যে আখিরাত উত্তম, ব্যস। বাক্যটি হলো খাইরুন লিল্লাযীনা ইয়াত্তাকূন — যারা নিজেদের রক্ষা করে চলে তাদের জন্য উত্তম। মুফাসসিরগণ এই শর্তটিকে আক্ষরিক অর্থেই নেন। যে মানুষ সেখানে শূন্য হাতে পৌঁছায়, তার জন্য স্থায়ী ঘরটি ক্ষণস্থায়ী ঘরের চেয়ে উন্নত কিছু নয়; বরং খারাপতর, কারণ সেখানে যা স্থায়ী হয় তা তার ক্ষতি। আয়াতটি একটি নির্দিষ্ট দলকে উৎকৃষ্ট ঘরের প্রস্তাব দেয়, আর সেই নির্দিষ্টকরণটিই প্রস্তাবটির পুরো শর্ত।"
          },
          {
            "en": "The word chosen for the Hereafter is ad-dar, the home. The dunya is not given that noun here at all. A home is where a person's things are kept and where he returns at the end of the day; the verse's own vocabulary sorts one as residence and the other as passage. 29:64 puts the same sorting in stronger terms still: the home of the Hereafter, that is al-hayawan, the living — as though only that place has earned the noun life.",
            "bn": "আখিরাতের জন্য বেছে নেওয়া শব্দটি আদ-দার — ঘর। দুনিয়াকে এখানে সেই বিশেষ্যটি একেবারেই দেওয়া হয়নি। ঘর সেটাই যেখানে মানুষের জিনিসপত্র থাকে আর দিনশেষে সে যেখানে ফিরে আসে; আয়াতটির নিজের শব্দভাণ্ডারই একটিকে বাসস্থান আর অন্যটিকে পথ হিসেবে আলাদা করে দেয়। 29:64 আয়াতটি একই বাছাইকে আরও কড়াভাবে বলে: আখিরাতের ঘর — সেটিই আল-হায়াওয়ান, প্রকৃত জীবন — যেন কেবল সেই জায়গাটিই 'জীবন' শব্দটির অধিকার অর্জন করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict Against the World",
          "bn": "দুনিয়ার বিরুদ্ধে রায় নয়"
        },
        "p": [
          {
            "en": "It would be easy to read this line as contempt for the world, and the Quran itself blocks that reading. 28:77 instructs a man of enormous wealth to seek the home of the Hereafter with what Allah has given him and, in the same sentence, not to forget his share of the world. 7:32 asks who it was that forbade the adornment Allah produced for His servants and the good things of provision. The Book does not forbid the field. It corrects the estimate of the harvest.",
            "bn": "এই লাইনটিকে দুনিয়ার প্রতি ঘৃণা হিসেবে পড়া সহজ, আর কুরআন নিজেই সেই পাঠ আটকে দেয়। 28:77 আয়াতে বিপুল সম্পদের অধিকারী এক ব্যক্তিকে নির্দেশ দেওয়া হয় আল্লাহ তাকে যা দিয়েছেন তা দিয়ে আখিরাতের ঘর অনুসন্ধান করতে, আর একই বাক্যে দুনিয়ায় নিজের অংশের কথা না ভুলতে। 7:32 আয়াতটি জিজ্ঞেস করে, আল্লাহ তাঁর বান্দাদের জন্য যে শোভা সৃষ্টি করেছেন এবং যে পবিত্র রিযিক দিয়েছেন, তা কে হারাম করল। কিতাব ক্ষেতটিকে নিষিদ্ধ করে না। সে ফসলের হিসাবটি শুধরে দেয়।"
          },
          {
            "en": "So the verse works by proportion, not prohibition. Play is not a crime; it is simply a poor material to build a life out of. 18:46 states the same balance, calling wealth and children the adornment of the worldly life and the enduring good deeds better with your Lord in reward and better in hope. Neither verse asks a reader to own less. Both ask him to know accurately what he is holding.",
            "bn": "সুতরাং আয়াতটি কাজ করে অনুপাত দিয়ে, নিষেধাজ্ঞা দিয়ে নয়। খেলা অপরাধ নয়; কেবল জীবন গড়ার উপকরণ হিসেবে তা নিতান্ত দুর্বল। 18:46 আয়াতটি একই ভারসাম্য বলে দেয় — ধন-সম্পদ ও সন্তানসন্ততি দুনিয়ার জীবনের শোভা, আর স্থায়ী সৎকর্মগুলো তোমার রবের কাছে প্রতিদানে উত্তম এবং আশার দিক থেকেও উত্তম। কোনো আয়াতই পাঠককে কম মালিকানার কথা বলে না। দুটিই বলে, সে হাতে যা ধরে আছে তা যেন সঠিকভাবে চেনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Will You Not Reason",
          "bn": "তোমরা কি বুঝবে না"
        },
        "p": [
          {
            "en": "The verse ends afala ta'qilun, will you not use your minds. Not will you not fear, and not will you not believe. The appeal is to 'aql, the faculty that sets two options side by side and takes the larger. It is an argument the Quran expects a reader to be able to finish for himself: given a short thing and a lasting thing, both genuinely on offer, the sum is not difficult. What defeats people is not the arithmetic but the attention.",
            "bn": "আয়াতটি শেষ হয় আফালা তা'কিলূন দিয়ে — তোমরা কি বুদ্ধি খাটাবে না। 'তোমরা কি ভয় করবে না' নয়, 'তোমরা কি বিশ্বাস করবে না'ও নয়। আবেদনটি 'আকল-এর প্রতি, সেই শক্তির প্রতি যা দুটি বিকল্প পাশাপাশি রেখে বড়টি বেছে নেয়। এটি এমন এক যুক্তি যা কুরআন আশা করে পাঠক নিজেই শেষ করতে পারবে: একটি ক্ষণস্থায়ী জিনিস আর একটি স্থায়ী জিনিস, দুটিই সত্যিকারভাবে হাতের কাছে — অঙ্কটা কঠিন নয়। মানুষকে হারায় অঙ্ক নয়, মনোযোগ।"
          },
          {
            "en": "Lived, the verse is a question to hold over a decision rather than a mood to sit inside. Of any plan worth an evening's argument: what does this leave when it is finished? Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said the world is the prison of the believer and the paradise of the disbeliever. The believer is not made miserable by that. He is made accurate. He knows he is somewhere on the way, and he does not unpack as though he had arrived.",
            "bn": "যাপনের ক্ষেত্রে আয়াতটি এমন এক প্রশ্ন যা সিদ্ধান্তের ওপর ধরে রাখতে হয়, কোনো মনোভাব নয় যার ভেতর বসে থাকতে হয়। এক সন্ধ্যার তর্কের যোগ্য যেকোনো পরিকল্পনা সম্পর্কে: এটি শেষ হলে কী রেখে যায়? মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, দুনিয়া মুমিনের কারাগার আর কাফিরের জান্নাত। এতে মুমিন দুঃখী হয়ে যায় না। সে নির্ভুল হয়ে যায়। সে জানে সে পথের কোথাও আছে, আর পৌঁছে গেছে ভেবে বাক্স খুলে বসে না।"
          }
        ]
      }
    ]
  },
  "6:54": {
    "sections": [
      {
        "h": {
          "en": "The People Being Turned Away",
          "bn": "যাদের সরিয়ে দিতে বলা হচ্ছিল"
        },
        "p": [
          {
            "en": "This verse belongs to a passage about a specific kind of pressure. Muslim relates from Sa'd ibn Abi Waqqas (RA) that he was one of a small group of poor Muslims around the Prophet ﷺ whom the leading men of Quraysh wanted removed from his gathering before they would sit in it. The answer came in 6:52 as a prohibition: do not send away those who call upon their Lord morning and evening seeking His countenance.",
            "bn": "এই আয়াতটি এমন একটি অনুচ্ছেদের অংশ যা একধরনের নির্দিষ্ট চাপ নিয়ে কথা বলে। মুসলিম সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে বর্ণনা করেন যে, তিনি নবী ﷺ-এর আশপাশের সেই ছোট দরিদ্র মুসলিম দলটির একজন ছিলেন, যাদের কুরাইশের নেতারা মজলিস থেকে সরানোর দাবি করেছিল — নইলে তারা সেখানে বসবে না। জবাব আসে 6:52 আয়াতে একটি নিষেধাজ্ঞা হিসেবে: যারা সকাল-সন্ধ্যায় তাদের প্রতিপালকের সন্তুষ্টি চেয়ে তাঁকে ডাকে, তাদের দূরে সরিয়ে দিও না।"
          },
          {
            "en": "Then 6:53 explains that some are tried through others, so that the comfortable ask whether these are the ones Allah has favoured among us. Our verse is the positive half of the same answer. It is not enough that the poor believers are not driven off. When they come, the Prophet ﷺ is instructed to speak first, and to speak peace: say, peace be upon you. The men whose presence was treated as a problem are met with a greeting.",
            "bn": "এরপর 6:53 ব্যাখ্যা করে যে, কাউকে কারও মাধ্যমে পরীক্ষা করা হয়, যাতে সচ্ছল লোকেরা বলে — আমাদের মধ্যে এদেরকেই কি আল্লাহ অনুগ্রহ করেছেন? আমাদের আয়াতটি সেই একই জবাবের ইতিবাচক অর্ধেক। দরিদ্র মুমিনদের কেবল না তাড়ানোই যথেষ্ট নয়। তারা যখন আসে, নবী ﷺ-কে নির্দেশ দেওয়া হয় আগে কথা বলতে, আর শান্তির কথা বলতে: বলো, তোমাদের প্রতি সালাম। যাদের উপস্থিতিকে সমস্যা হিসেবে দেখা হচ্ছিল, তাদের সঙ্গে দেখা হয় অভিবাদন দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "He Wrote It Upon Himself",
          "bn": "তিনি নিজের ওপর লিখে নিয়েছেন"
        },
        "p": [
          {
            "en": "The heart of the verse is kataba rabbukum ala nafsihi ar-rahmah — your Lord has written mercy upon Himself. Kataba is the ordinary verb for writing, and by extension for prescribing something as binding. The statement occurs twice in the Quran, here and earlier in the same surah at 6:12, where it reads kataba ala nafsihi ar-rahmah without rabbukum; and nowhere else does Allah say that He has written something upon Himself. No one imposed this. It is an obligation He placed on His own side of the relationship.",
            "bn": "আয়াতের কেন্দ্র হলো 'কাতাবা রাব্বুকুম আলা নাফসিহির রাহমাহ' — তোমাদের প্রতিপালক নিজের ওপর রহমত লিখে নিয়েছেন। 'কাতাবা' হলো লেখার সাধারণ ক্রিয়াপদ, আর সেখান থেকে কোনো কিছুকে অবধারিত করে দেওয়ার অর্থে ব্যবহৃত হয়। কথাটি কুরআনে দুবার আসে — এখানে, আর এই সূরারই আগের অংশে 6:12 আয়াতে, যেখানে তা আসে 'কাতাবা আলা নাফসিহির রাহমাহ' রূপে, 'রাব্বুকুম' ছাড়া; আর অন্য কোথাও আল্লাহ বলেননি যে তিনি নিজের ওপর কিছু লিখে নিয়েছেন। কেউ এটি তাঁর ওপর চাপায়নি। এটি এমন এক দায়, যা তিনি সম্পর্কের নিজের দিকটিতে নিজেই রেখেছেন।"
          },
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that when Allah decreed the creation He wrote in a Book with Him above the Throne that His mercy prevails over His wrath. The hadith uses the same verb the verse uses. Ibn Kathir brings the two together at this point, and the effect is to make mercy something recorded rather than something hoped for. It is not a mood that Allah may or may not be in when a servant arrives.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে, আল্লাহ যখন সৃষ্টির ফয়সালা করলেন, তখন তিনি আরশের ওপর তাঁর কাছে রক্ষিত এক কিতাবে লিখলেন যে তাঁর রহমত তাঁর ক্রোধকে ছাপিয়ে যায়। হাদীসটি সেই একই ক্রিয়াপদ ব্যবহার করে যা আয়াতটি ব্যবহার করেছে। ইবনে কাসীর এখানে দুটিকে পাশাপাশি আনেন, আর তার ফল হলো — রহমত আশা করার মতো কিছু নয়, লিপিবদ্ধ করা কিছু। বান্দা যখন এসে দাঁড়ায় তখন আল্লাহ কোন মেজাজে আছেন, রহমত সেই মেজাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Lord, Not Merely Allah",
          "bn": "তোমাদের রব, শুধু আল্লাহ নন"
        },
        "p": [
          {
            "en": "The two occurrences of the phrase are not identical, and the difference is worth noticing. At 6:12 the passage is an argument with those who deny: whose is whatever is in the heavens and the earth? Say, Allah's. He has written mercy upon Himself. Here at 6:54 the same statement is addressed to believers who have just walked in, and the word used is rabbukum, your Lord. The same fact is stated once as evidence against denial and once as a welcome.",
            "bn": "বাক্যাংশটির দুটি উপস্থিতি হুবহু এক নয়, আর পার্থক্যটি লক্ষ করার মতো। 6:12 আয়াতে অনুচ্ছেদটি অস্বীকারকারীদের সঙ্গে একটি যুক্তিতর্ক: আসমান ও যমীনে যা কিছু আছে তা কার? বলো, আল্লাহর। তিনি নিজের ওপর রহমত লিখে নিয়েছেন। আর এখানে 6:54 আয়াতে একই কথা বলা হচ্ছে সদ্য এসে দাঁড়ানো মুমিনদের উদ্দেশে, আর ব্যবহৃত শব্দটি 'রাব্বুকুম' — তোমাদের রব। একই সত্য একবার অস্বীকারের বিরুদ্ধে প্রমাণ হিসেবে, আরেকবার অভ্যর্থনা হিসেবে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wrong Done in Ignorance",
          "bn": "অজ্ঞতাবশত করা অন্যায়"
        },
        "p": [
          {
            "en": "The terms follow: whoever among you does wrong bi-jahalatin, out of ignorance, then repents after that and puts things right. The obvious reading restricts the promise to people who did not know the ruling, which would exclude nearly everyone. The commentators do not read it that way. The reported view from the early authorities, which Ibn Kathir carries, is that anyone who disobeys Allah is acting in jahalah at that moment, whether or not he could recite the ruling from memory.",
            "bn": "এরপর শর্তগুলো আসে: তোমাদের মধ্যে যে 'বিজাহালাতিন' — অজ্ঞতাবশত — অন্যায় করে, তারপর তওবা করে ও নিজেকে সংশোধন করে। বাহ্যিক পাঠ প্রতিশ্রুতিটিকে কেবল তাদের মধ্যে সীমাবদ্ধ করে যারা বিধানটি জানত না, আর তাতে প্রায় সবাই বাদ পড়ে যায়। মুফাসসিরগণ এভাবে পড়েন না। প্রাচীনদের কাছ থেকে বর্ণিত এবং ইবনে কাসীরের বহন করা মতটি হলো, যে-ই আল্লাহর অবাধ্য হয় সে সেই মুহূর্তে জাহালাতের মধ্যেই আছে — সে বিধানটি মুখস্থ বলতে পারুক বা না পারুক।"
          },
          {
            "en": "The same phrase governs the promise in 4:17, where repentance accepted by Allah is said to be for those who do wrong in ignorance and then repent soon after. Read together, the two verses describe the ordinary sinner, not a rare category of the genuinely uninformed. Something in every act of disobedience is a failure of knowledge — a moment in which what is true about Allah stopped being present to the person doing it.",
            "bn": "একই বাক্যাংশ 4:17 আয়াতের প্রতিশ্রুতিকেও নিয়ন্ত্রণ করে, যেখানে বলা হয়েছে আল্লাহর কাছে গৃহীত তওবা তাদেরই জন্য যারা অজ্ঞতাবশত অন্যায় করে, তারপর অল্প সময়ের মধ্যেই তওবা করে। একসঙ্গে পড়লে আয়াত দুটি সাধারণ পাপীকেই বর্ণনা করে, প্রকৃত অজ্ঞদের কোনো বিরল শ্রেণিকে নয়। প্রতিটি অবাধ্যতার ভেতরেই কিছু একটা জ্ঞানের ব্যর্থতা — এমন একটি মুহূর্ত যখন আল্লাহ সম্পর্কে যা সত্য তা কর্মকারীর সামনে আর উপস্থিত থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Repents, and Puts Right",
          "bn": "তওবা করে, আর সংশোধন করে"
        },
        "p": [
          {
            "en": "Two verbs are required, not one: taba, he turned back, and aslaha, he put right. Islah is repair work. It is the difference between regretting a broken thing and mending it — returning what was taken, correcting what was said, changing the arrangement that made the wrong easy. A promise attached only to remorse would leave the damage standing. This one attaches to remorse and to the repair that follows it.",
            "bn": "দুটি ক্রিয়াপদ দরকার, একটি নয়: 'তাবা' — সে ফিরে এলো, আর 'আসলাহা' — সে সংশোধন করল। ইসলাহ মানে মেরামতের কাজ। ভাঙা জিনিসের জন্য আফসোস করা আর সেটিকে জোড়া লাগানো — এ দুইয়ের পার্থক্যই এটি: যা নেওয়া হয়েছিল তা ফিরিয়ে দেওয়া, যা বলা হয়েছিল তা শুধরে নেওয়া, যে বন্দোবস্ত অন্যায়টিকে সহজ করেছিল তা বদলে ফেলা। কেবল অনুশোচনার সঙ্গে যুক্ত প্রতিশ্রুতি ক্ষতিটিকে দাঁড়িয়েই থাকতে দিত। এই প্রতিশ্রুতি অনুশোচনার সঙ্গে এবং তার পরের মেরামতের সঙ্গে যুক্ত।"
          },
          {
            "en": "The closing names are Ghafur and Rahim, and the same pair closes 4:110 for whoever does a wrong or wrongs himself and then seeks Allah's forgiveness. Notice the order of the whole verse, because it is a template for receiving people. Peace first. Then the fact about Allah that makes return possible. Only then the terms. Most of us reverse it — we state the terms, withhold the peace, and expect the person to argue his way back in.",
            "bn": "শেষের নাম দুটি হলো গাফূর ও রাহীম, আর একই জোড়া 4:110 আয়াতও শেষ করে — যে অন্যায় করে কিংবা নিজের প্রতি জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, তার জন্য। গোটা আয়াতের ক্রমটি লক্ষ করুন, কারণ এটি মানুষকে গ্রহণ করার একটি নমুনা। আগে সালাম। তারপর আল্লাহ সম্পর্কে সেই সত্য, যা ফিরে আসাকে সম্ভব করে। তারপরই কেবল শর্ত। আমরা বেশিরভাগ সময় ক্রমটি উল্টে দিই — শর্ত জানাই, সালামটুকু আটকে রাখি, আর আশা করি মানুষটি তর্ক করে নিজের জায়গায় ফিরে আসবে।"
          }
        ]
      }
    ]
  },
  "6:59": {
    "sections": [
      {
        "h": {
          "en": "The Keys No One Else Holds",
          "bn": "যে চাবি আর কারও হাতে নেই"
        },
        "p": [
          {
            "en": "The verse opens with possession placed first: wa 'indahu — and with Him — are the mafatih of the unseen; none knows them but He. Putting 'indahu before the subject is Arabic's way of restriction: with Him, and with no one else. Mafatih is a plural the commentators read in two ways — as keys, the plural of miftah, or as treasuries, the plural of maftah. At-Tabari relates the reading of treasuries; on either reading, access belongs to Allah alone.",
            "bn": "আয়াতটি শুরু হয় মালিকানাকে আগে বসিয়ে: ওয়া ইনদাহু — আর তাঁরই কাছে — আছে গায়েবের মাফাতিহ; তিনি ছাড়া কেউ তা জানে না। বাক্যের শুরুতে ইনদাহু বসানো আরবিতে সীমাবদ্ধকরণের রীতি: তাঁরই কাছে, আর কারও কাছে নয়। মাফাতিহ এমন এক বহুবচন, যা মুফাসসিরগণ দুইভাবে পড়েন — চাবি অর্থে, মিফতাহ-এর বহুবচন; অথবা ভান্ডার অর্থে, মাফতাহ-এর বহুবচন। আত-তাবারী ভান্ডার পাঠটি বর্ণনা করেন; যেভাবেই পড়া হোক, প্রবেশাধিকার একমাত্র আল্লাহরই।"
          },
          {
            "en": "Ghayb is everything screened from creatures: the future, the inward, the appointed ends. The verse does not say that Allah merely knows more of it than we do; it says the store itself is with Him, and its opening is His act alone. Every later clause of the verse — land and sea, the leaf, the grain, the moist and the dry — descends from this single opening claim of exclusive ownership.",
            "bn": "গায়েব হলো সৃষ্টির চোখ থেকে আড়াল করা সবকিছু: ভবিষ্যৎ, অন্তরের ভেতরটা, নির্ধারিত পরিণতিগুলো। আয়াতটি এ কথা বলে না যে আল্লাহ কেবল আমাদের চেয়ে বেশি জানেন; বলে, ভান্ডারটিই তাঁর কাছে, আর তার খোলাও একমাত্র তাঁরই কাজ। আয়াতের পরের প্রতিটি বাক্যাংশ — স্থল ও সমুদ্র, পাতা, শস্যদানা, আর্দ্র ও শুষ্ক — নেমে আসে একচ্ছত্র মালিকানার এই প্রথম দাবিটি থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Named in the Sunnah",
          "bn": "সুন্নাহয় নাম করা পাঁচটি"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Ibn Umar (RA) that the Prophet ﷺ said the keys of the unseen are five, which none knows but Allah, and they are the five of 31:34 — knowledge of the Hour, the sending down of the rain, what the wombs contain, what any soul will earn tomorrow, and in what land any soul will die. Count them and they are exactly five, each one a matter that people in every age have tried and failed to secure in advance.",
            "bn": "আল-বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, গায়েবের চাবি পাঁচটি, আল্লাহ ছাড়া কেউ তা জানে না — আর সেগুলো 31:34 আয়াতের পাঁচটি বিষয়: কিয়ামতের জ্ঞান, বৃষ্টি বর্ষণ, গর্ভে যা আছে, কোনো প্রাণ আগামীকাল কী অর্জন করবে, আর কোনো প্রাণ কোন ভূমিতে মারা যাবে। গুনে দেখুন — ঠিক পাঁচটি, আর প্রতিটিই এমন বিষয় যা প্রতিটি যুগের মানুষ আগেভাগে নিশ্চিত করতে চেষ্টা করেছে এবং ব্যর্থ হয়েছে।"
          },
          {
            "en": "The list is practical, not abstract. Weather is forecast and still surprises; medicine images the womb and still cannot say what the child will become in character or destiny; no analyst knows tomorrow's earnings, and no traveller his place of death. The hadith turns the verse into a mirror held up to human planning: our instruments reach far, and the keys still hang where they always did.",
            "bn": "তালিকাটি বিমূর্ত নয়, একেবারে ব্যবহারিক। আবহাওয়ার পূর্বাভাস হয়, তবু তা চমকে দেয়; চিকিৎসাবিজ্ঞান গর্ভের ছবি তোলে, তবু বলতে পারে না শিশুটি চরিত্রে বা পরিণতিতে কী হবে; কোনো বিশ্লেষক আগামীকালের উপার্জন জানে না, কোনো মুসাফির জানে না তার মৃত্যুর স্থান। হাদীসটি আয়াতটিকে মানুষের পরিকল্পনার সামনে ধরা এক আয়নায় পরিণত করে: আমাদের যন্ত্রপাতি বহুদূর পৌঁছায়, অথচ চাবিগুলো ঝুলছে ঠিক আগের জায়গাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Down to a Single Leaf",
          "bn": "একটিমাত্র পাতা পর্যন্ত"
        },
        "p": [
          {
            "en": "Then the verse walks downward in scale. He knows what is in the land and the sea — the two halves of the visible world. Not a leaf falls but He knows it: one leaf, in the moment of its fall, out of all the forests of the earth. Nor a grain in the darknesses of the earth — buried and unseen, with darkness named in the plural: of soil, of depth, of night. Nor anything moist or dry. The commentators note the movement from the vast to the minute: whoever holds the smallest holds everything between.",
            "bn": "এরপর আয়াতটি মাপের সিঁড়ি বেয়ে নিচে নামে। স্থলে ও সমুদ্রে যা আছে তিনি জানেন — দৃশ্যমান জগতের দুই অর্ধেক। এমন কোনো পাতা ঝরে না যা তিনি জানেন না: পৃথিবীর সব অরণ্যের মধ্য থেকে একটিমাত্র পাতা, তার ঝরে পড়ার মুহূর্তে। মাটির অন্ধকারগুলোর ভেতরের কোনো শস্যদানাও নয় — প্রোথিত ও অদৃশ্য, আর অন্ধকার এখানে বহুবচনে: মাটির, গভীরতার, রাতের। আর্দ্র বা শুষ্ক কোনো কিছুও নয়। মুফাসসিরগণ বিশাল থেকে সূক্ষ্মের দিকে এই যাত্রা লক্ষ করেন: যিনি ক্ষুদ্রতমটি ধরে রাখেন, মাঝের সবকিছুই তাঁর ধরা।"
          },
          {
            "en": "The pairs are chosen to leave nothing out. Land and sea, falling and buried, moist and dry — each pair names two edges and thereby everything between them. What the sentence removes is the idea of a forgotten corner: a place, a moment, or a thing too small to matter. 10:61 states the same in units of weight — not an atom's weight in the earth or in the heaven escapes your Lord, nor smaller than that nor greater.",
            "bn": "জোড়াগুলো এমনভাবে বাছাই করা যেন কিছুই বাদ না পড়ে। স্থল ও সমুদ্র, ঝরে পড়া ও প্রোথিত, আর্দ্র ও শুষ্ক — প্রতিটি জোড়া দুটি প্রান্তের নাম নেয়, আর তাতে মাঝের সবকিছু ধরা পড়ে। বাক্যটি যে ধারণা মুছে দেয় তা হলো ভুলে যাওয়া কোনো কোণের ধারণা: এমন কোনো স্থান, মুহূর্ত বা বস্তু, যা এত ছোট যে ধর্তব্য নয়। 10:61 আয়াত একই কথা ওজনের এককে বলে — আসমানে বা যমীনে অণু পরিমাণ কিছুও তোমার রবের অগোচরে থাকে না, তার চেয়ে ছোটও না, বড়ও না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clear Record",
          "bn": "সুস্পষ্ট কিতাব"
        },
        "p": [
          {
            "en": "The verse gathers every clause into one place: illa fi kitabin mubin, except that it is in a clear record. The commentators identify this with al-Lawh al-Mahfuz, the Preserved Tablet. 6:38 in the same surah says that nothing has been neglected in the Book, and when Pharaoh asked Musa (AS) about the former generations, the answer in 20:52 was that their knowledge is with my Lord in a record; my Lord neither errs nor forgets. Knowledge written is knowledge that cannot slip.",
            "bn": "আয়াতটি প্রতিটি বাক্যাংশকে এক জায়গায় জমা করে: ইল্লা ফী কিতাবিম মুবীন — সবই আছে এক সুস্পষ্ট কিতাবে। মুফাসসিরগণ একে লাওহে মাহফুয — সংরক্ষিত ফলক — বলে চিহ্নিত করেন। একই সূরার 6:38 আয়াতে বলা হয়েছে, কিতাবে কোনো কিছুই অবহেলায় বাদ পড়েনি; আর ফেরাউন যখন মূসা (আঃ)-কে আগের প্রজন্মগুলোর কথা জিজ্ঞেস করে, 20:52 আয়াতে উত্তর ছিল — তাদের জ্ঞান আমার রবের কাছে এক কিতাবে আছে; আমার রব ভুলও করেন না, বিস্মৃতও হন না। লিখিত জ্ঞান এমন জ্ঞান, যা হাতছাড়া হতে পারে না।"
          },
          {
            "en": "The record matters because it turns knowledge into accountability and care. A falling leaf is not merely observed; it is kept. The same registry that misses no grain will miss no wrong suffered in secret and no good done unseen. What overwhelms the mind as infinite detail is, for the servant, a guarantee: nothing offered to Allah is ever mislaid.",
            "bn": "এই কিতাবটি গুরুত্বপূর্ণ, কারণ এটি জ্ঞানকে জবাবদিহি ও তত্ত্বাবধানে পরিণত করে। ঝরে পড়া পাতাটি কেবল দেখা হয় না; তা সংরক্ষিত হয়। যে নিবন্ধন-খাতা একটি শস্যদানাও হারায় না, তা গোপনে সয়ে যাওয়া কোনো অন্যায়ও হারাবে না, অদেখায় করা কোনো ভালো কাজও হারাবে না। যা অসীম খুঁটিনাটি হয়ে মনকে অভিভূত করে, বান্দার জন্য তা-ই এক নিশ্চয়তা: আল্লাহর উদ্দেশে নিবেদিত কোনো কিছু কখনো খোয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Rival Claimants",
          "bn": "কোনো প্রতিদ্বন্দ্বী দাবিদার নেই"
        },
        "p": [
          {
            "en": "27:65 makes the rule explicit — say: none in the heavens and the earth knows the unseen except Allah. Every claim to read the future, whether by stars, omens, or fortune-tellers, collides with this verse and with that one. Even the Prophet ﷺ was commanded in 6:50 to say that he does not possess the treasuries of Allah and does not know the unseen; he conveys what is revealed to him. Revelation is Allah sharing what He wills — it is not a rival key.",
            "bn": "27:65 আয়াত নিয়মটি স্পষ্ট করে দেয় — বলুন: আসমানসমূহ ও যমীনে আল্লাহ ছাড়া কেউ গায়েব জানে না। ভবিষ্যৎ পড়ার প্রতিটি দাবি — তারা দেখে হোক, লক্ষণ দেখে হোক, বা গণকের মাধ্যমে — এই আয়াত ও ওই আয়াত দুটোর সঙ্গেই সংঘর্ষে পড়ে। এমনকি নবী ﷺ-কেও 6:50 আয়াতে বলতে আদেশ করা হয়েছে যে আল্লাহর ভান্ডার তাঁর কাছে নেই এবং তিনি গায়েব জানেন না; তাঁর কাছে যা ওহী করা হয় তিনি তা-ই পৌঁছে দেন। ওহী হলো আল্লাহ যা চান তা জানিয়ে দেওয়া — এটি কোনো প্রতিদ্বন্দ্বী চাবি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under Total Knowledge",
          "bn": "পূর্ণ জ্ঞানের ছায়ায় জীবন"
        },
        "p": [
          {
            "en": "For conduct, the verse teaches muraqabah — living watched. The deed no colleague sees, the browsing no one audits, the kindness never announced: all of it is with the One who counts leaves. That awareness restrains in private, exactly where reputation cannot reach. Sincerity grows in the same soil: work for the One whose record of your life is the only complete one, and the applause of every smaller audience loses its grip.",
            "bn": "আচরণের দিক থেকে আয়াতটি শেখায় মুরাকাবা — দেখা হচ্ছে জেনে জীবনযাপন। যে কাজ কোনো সহকর্মী দেখে না, যে ব্রাউজিং কেউ যাচাই করে না, যে সদাচরণ কখনো ঘোষণা করা হয় না — সবই আছে তাঁর কাছে, যিনি পাতাও গণনা করেন। এই সচেতনতা সংযত করে ঠিক নির্জনে — যেখানে সুনামের হাত পৌঁছায় না। একই মাটিতে জন্মায় ইখলাস: তাঁর জন্য কাজ করুন, আপনার জীবনের একমাত্র পূর্ণাঙ্গ নথি যাঁর কাছে; তখন প্রতিটি ছোট দর্শকমহলের করতালি তার দখল হারায়।"
          },
          {
            "en": "For the heart, the same verse is a cure for anxious guessing. The keys of tomorrow are not lost; they are held — by the One who also knows every leaf of your circumstances. The truth this verse states is double-edged, and honestly so: total knowledge unsettles the one hiding something and steadies the one entrusting something. Which of the two it becomes for a reader is decided not by the verse, but by the life brought to it.",
            "bn": "হৃদয়ের দিক থেকে একই আয়াত উদ্বিগ্ন অনুমানের নিরাময়। আগামীকালের চাবিগুলো হারিয়ে যায়নি; সেগুলো ধরা আছে — তাঁরই হাতে, যিনি আপনার পরিস্থিতির প্রতিটি পাতাও জানেন। আয়াতটি যে সত্য ঘোষণা করে তা দুই দিকেই ধার রাখে, আর সততার সঙ্গেই: পূর্ণ জ্ঞান তাকে অস্থির করে যে কিছু লুকাচ্ছে, আর তাকে স্থির করে যে কিছু সঁপে দিচ্ছে। পাঠকের জন্য এটি দুটির কোনটি হবে, তা আয়াত ঠিক করে না — ঠিক করে আয়াতের সামনে আনা জীবনটাই।"
          }
        ]
      }
    ]
  },
  "6:103": {
    "sections": [
      {
        "h": {
          "en": "The Argument It Closes",
          "bn": "যে যুক্তির সমাপ্তি এটি টানে"
        },
        "p": [
          {
            "en": "This line does not stand alone. The verses before it are dismantling claims made about Allah by people who had never seen Him: 6:100 reports that they assigned Him partners from the jinn and invented sons and daughters for Him without knowledge, and 6:101 asks how He could have a son when He has no companion and created everything. Then 6:102 states that this is Allah your Lord, there is no deity except Him, so worship Him. Our verse comes as the seal on that sequence.",
            "bn": "এই বাক্যটি একা দাঁড়িয়ে নেই। এর আগের আয়াতগুলো ভেঙে দিচ্ছে সেই সব দাবি, যা আল্লাহকে কখনো না দেখেই মানুষ তাঁর সম্পর্কে করেছিল: 6:100 আয়াত জানায় যে তারা জিনদের মধ্য থেকে তাঁর শরিক নির্ধারণ করেছিল এবং না জেনেই তাঁর জন্য পুত্র ও কন্যা বানিয়ে নিয়েছিল, আর 6:101 আয়াত প্রশ্ন করে, তাঁর সন্তান হবে কীভাবে, যখন তাঁর কোনো সঙ্গিনী নেই এবং তিনিই সবকিছু সৃষ্টি করেছেন। এরপর 6:102 আয়াত বলে, ইনিই আল্লাহ, তোমাদের রব, তিনি ছাড়া কোনো ইলাহ নেই, সুতরাং তাঁরই ইবাদত করো। আমাদের আয়াতটি আসে সেই ধারাবাহিকতার সিলমোহর হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Idrak Is Not Ru'yah",
          "bn": "ইদরাক আর রুইয়াহ এক নয়"
        },
        "p": [
          {
            "en": "The verb is the hinge. La tudrikuhu al-absar, and then wa huwa yudriku al-absar: one verb, used first with sight as the failed subject and then with Allah as the subject that succeeds. Idrak in Arabic is not simply to see. It is to overtake a thing, to catch up with it and take its full measure, the way a runner overtakes another and has him completely. What the verse denies of created sight is that kind of grasp.",
            "bn": "ক্রিয়াপদটিই এখানে কব্জা। 'লা তুদরিকুহুল আবসার', তারপর 'ওয়া হুয়া ইউদরিকুল আবসার': একটিই ক্রিয়াপদ, প্রথমে দৃষ্টিকে ব্যর্থ কর্তা হিসেবে নিয়ে, তারপর আল্লাহকে সফল কর্তা হিসেবে নিয়ে। আরবিতে 'ইদরাক' মানে কেবল দেখা নয়। এর অর্থ কোনো কিছুকে নাগালে পাওয়া, তাকে ধরে ফেলা এবং তার পুরো মাপ নিয়ে নেওয়া — যেমন এক দৌড়বিদ আরেকজনকে ধরে ফেলে ও পুরোপুরি আয়ত্তে নিয়ে আসে। সৃষ্টির দৃষ্টি সম্পর্কে আয়াত এই ধরনের নাগালটাই অস্বীকার করে।"
          },
          {
            "en": "The distinction the mufassirun draw from this is precise and it matters: to deny idrak, an encompassing grasp, is not the same as to deny ru'yah, seeing as such. A person may see the sea and never encompass it. Qurtubi and Ibn Kathir both report a group of the early authorities reading the verse exactly this way, that sight does not comprehend Him even where He allows Himself to be seen. The verse is about the limits of the creature, not about a hidden God.",
            "bn": "মুফাসসিরগণ এখান থেকে যে পার্থক্যটি টানেন তা সূক্ষ্ম এবং গুরুত্বপূর্ণ: 'ইদরাক' অর্থাৎ পরিব্যাপ্ত নাগাল অস্বীকার করা আর 'রুইয়াহ' অর্থাৎ দেখা অস্বীকার করা এক কথা নয়। কেউ সমুদ্র দেখতে পারে, অথচ কখনোই তাকে পরিব্যাপ্ত করতে পারে না। কুরতুবী ও ইবনে কাসীর উভয়েই পূর্ববর্তী যুগের একদল আলিমের কথা বর্ণনা করেন যাঁরা আয়াতটি ঠিক এভাবেই পড়েন — তিনি নিজেকে দেখতে দিলেও দৃষ্টি তাঁকে আয়ত্ত করতে পারে না। আয়াতটি সৃষ্টির সীমাবদ্ধতা নিয়ে, কোনো লুকানো ইলাহ নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Companions Differed",
          "bn": "সাহাবীগণ কোথায় ভিন্নমত পোষণ করেছেন"
        },
        "p": [
          {
            "en": "On one question the companions did not agree, and it is honest to say so. Muslim narrates that Aishah (RA) rejected the claim that the Prophet ﷺ saw his Lord on the night journey, and recited this very verse as her proof. Muslim also narrates from Ibn Abbas (RA) the position that he saw Him with his heart, which is how he read 53:11, the heart did not lie about what it saw. The difference is over a vision in this life, not over the verse's wording.",
            "bn": "একটি প্রশ্নে সাহাবীগণ একমত হননি, আর কথাটি খোলাখুলি বলাই সৎ। মুসলিম বর্ণনা করেন যে আয়িশা (রাঃ) এই দাবি প্রত্যাখ্যান করেছিলেন যে নবী ﷺ মিরাজের রাতে তাঁর রবকে দেখেছিলেন, এবং প্রমাণ হিসেবে তিনি এই আয়াতটিই পাঠ করেন। মুসলিম আরও বর্ণনা করেন ইবনে আব্বাস (রাঃ) থেকে এই অবস্থান যে তিনি তাঁকে অন্তর দিয়ে দেখেছেন, আর এভাবেই তিনি 53:11 আয়াত পড়তেন — অন্তর যা দেখেছে সে বিষয়ে মিথ্যা বলেনি। মতভেদটি দুনিয়ার জীবনে দেখা নিয়ে, আয়াতের ভাষা নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sight Promised in the Hereafter",
          "bn": "আখিরাতে প্রতিশ্রুত দর্শন"
        },
        "p": [
          {
            "en": "About the next life the mufassirun are not divided, and they build the Sunni position on plain texts. In 75:22-23 some faces on that Day are radiant, looking at their Lord. Al-Bukhari and Muslim both narrate from Jarir ibn Abdullah (RA) that the Prophet ﷺ said the believers will see their Lord as they see the full moon, with no crowding or difficulty in seeing Him. Muslim narrates from Suhayb (RA) that the extra reward promised in 10:26 is the removal of the veil, and that nothing they had been given was more beloved to them than that.",
            "bn": "পরকাল সম্পর্কে মুফাসসিরগণ বিভক্ত নন, আর তাঁরা আহলুস সুন্নাহর অবস্থান গড়ে তোলেন স্পষ্ট নসের ওপর। 75:22-23 আয়াতে সেদিন কিছু মুখ উজ্জ্বল হবে, তারা তাদের রবের দিকে তাকিয়ে থাকবে। ইমাম বুখারী ও মুসলিম উভয়েই জারীর ইবনে আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, মুমিনরা তাদের রবকে দেখবে যেভাবে তারা পূর্ণিমার চাঁদ দেখে, কোনো ভিড় বা দেখতে কষ্ট ছাড়াই। মুসলিম সুহাইব (রাঃ) থেকে বর্ণনা করেন যে 10:26 আয়াতে প্রতিশ্রুত বাড়তি পুরস্কারটি হলো পর্দা সরিয়ে দেওয়া, আর তাদের যা কিছু দেওয়া হয়েছিল তার কোনোটিই তাদের কাছে এর চেয়ে প্রিয় ছিল না।"
          },
          {
            "en": "There is a further argument the mufassirun quote from ash-Shafi'i, drawn from 83:15, which says that the wicked will be veiled from their Lord on that Day. He read a screening imposed in displeasure as implying that those Allah is pleased with are not screened. Set beside this, 6:103 is not a denial of the promise but a statement of its terms: even there, sight will be given without ever encompassing the One seen. And 7:143 fixes the boundary for this life, where Musa (AS) asked and was told he would not see Him.",
            "bn": "মুফাসসিরগণ ইমাম শাফিঈ থেকে আরেকটি যুক্তি উদ্ধৃত করেন, যা নেওয়া হয়েছে 83:15 আয়াত থেকে — সেদিন পাপীরা তাদের রব থেকে পর্দার আড়ালে থাকবে। তিনি পড়েছেন, অসন্তুষ্টির কারণে আরোপিত এই আড়াল থেকেই বোঝা যায় যে আল্লাহ যাদের প্রতি সন্তুষ্ট তাদের জন্য আড়াল থাকবে না। এর পাশে রাখলে 6:103 আয়াত সেই প্রতিশ্রুতির অস্বীকার নয়, বরং তার শর্তের বিবৃতি: সেখানেও দেখা দেওয়া হবে, অথচ যাঁকে দেখা হচ্ছে তাঁকে কখনোই আয়ত্ত করা যাবে না। আর 7:143 আয়াত দুনিয়ার সীমাটি স্থির করে দেয়, যেখানে মূসা (আঃ) চেয়েছিলেন এবং তাঁকে বলা হয়েছিল তিনি তাঁকে দেখতে পাবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Subtle, the Aware",
          "bn": "সূক্ষ্মদর্শী, সর্ববিষয়ে অবগত"
        },
        "p": [
          {
            "en": "The verse ends with two names that answer the ache it has just created. Al-Latif is built on a root for what is fine and imperceptible, and the commentators apply it here in both directions: He is too fine to be caught by sight, and His knowledge reaches what is too fine for anyone else to catch. Al-Khabir names knowledge of the inner reality of a thing rather than its surface. 67:14 pairs the same two names with the argument that the One who created must know.",
            "bn": "আয়াতটি শেষ হয় এমন দুটি নামে যা একটু আগে তৈরি হওয়া শূন্যতার জবাব দেয়। 'আল-লাতীফ' গড়ে উঠেছে এমন এক ধাতু থেকে যার অর্থ সূক্ষ্ম ও অদৃশ্যপ্রায়, আর মুফাসসিরগণ এখানে এটি দুই দিকেই প্রয়োগ করেন: তিনি এতই সূক্ষ্ম যে দৃষ্টি তাঁকে ধরতে পারে না, আর তাঁর জ্ঞান সেখানেও পৌঁছায় যা অন্য কারও ধরার পক্ষে অতি সূক্ষ্ম। 'আল-খাবীর' নামটি কোনো বিষয়ের বাইরের চেহারা নয়, ভেতরের বাস্তবতা জানার কথা বলে। 67:14 আয়াত একই দুটি নামকে জোড়া লাগায় এই যুক্তির সঙ্গে যে, যিনি সৃষ্টি করেছেন তিনি না জেনে থাকতে পারেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Worshipping What You Cannot See",
          "bn": "যাঁকে দেখা যায় না তাঁর ইবাদত"
        },
        "p": [
          {
            "en": "The very next verse turns the eye inward. 6:104 announces that insight has come from your Lord, and whoever sees does so for his own soul. The word shifts from the sight of the eyes to the sight of the heart, and that is the faculty this passage is training. Muslim narrates from Umar ibn al-Khattab (RA) the definition the Prophet ﷺ gave of ihsan: that you worship Allah as though you see Him, and if you do not see Him, then He sees you.",
            "bn": "ঠিক পরের আয়াতটি চোখকে ভেতরের দিকে ঘুরিয়ে দেয়। 6:104 আয়াত ঘোষণা করে, তোমাদের রবের পক্ষ থেকে অন্তর্দৃষ্টি এসে গেছে, আর যে দেখবে তা তার নিজেরই কল্যাণে। শব্দটি চোখের দৃষ্টি থেকে সরে গিয়ে অন্তরের দৃষ্টিতে যায়, আর এই অনুভূতিটিকেই গোটা অংশটি প্রশিক্ষণ দিচ্ছে। মুসলিম উমর ইবনুল খাত্তাব (রাঃ) থেকে বর্ণনা করেন নবী ﷺ-এর দেওয়া ইহসানের সংজ্ঞা: তুমি আল্লাহর ইবাদত এমনভাবে করবে যেন তুমি তাঁকে দেখছ, আর যদি তুমি তাঁকে না দেখো, তবে তিনি তো তোমাকে দেখছেন।"
          },
          {
            "en": "Lived out, the verse cuts both ways at once and that is its comfort. You will never fully take His measure, so every conclusion you reach about Him stays smaller than He is, which should end the habit of arguing about Him as though He were a settled subject. And nothing about you is too small or too hidden for al-Latif al-Khabir, which means the effort no one witnessed and the grief no one was told about are already fully known.",
            "bn": "জীবনে প্রয়োগ করলে আয়াতটি একসঙ্গে দুই দিকেই কাটে, আর সেখানেই এর সান্ত্বনা। আপনি কখনোই তাঁর পুরো মাপ নিতে পারবেন না, তাই তাঁকে নিয়ে আপনার পৌঁছানো প্রতিটি সিদ্ধান্তই তাঁর চেয়ে ছোট থেকে যায় — এতে তাঁকে নিয়ে এমনভাবে তর্ক করার অভ্যাসের অবসান হওয়া উচিত যেন তিনি কোনো মীমাংসিত বিষয়। আবার আপনার কোনো কিছুই আল-লাতীফ আল-খাবীরের জন্য অতি ক্ষুদ্র বা অতি গোপন নয়, অর্থাৎ যে পরিশ্রম কেউ দেখেনি আর যে দুঃখের কথা কাউকে বলা হয়নি, তা আগে থেকেই পুরোপুরি জানা।"
          }
        ]
      }
    ]
  },
  "6:160": {
    "sections": [
      {
        "h": {
          "en": "The Last Statement Before the Declaration",
          "bn": "ঘোষণার আগে শেষ বক্তব্য"
        },
        "p": [
          {
            "en": "Surah al-An'am is closing. 6:159 has just separated the Prophet ﷺ from those who split their religion and became sects, leaving their affair to Allah. Then this verse states the rate at which deeds are repaid. Then 6:161 begins the surah's closing declaration — say, my Lord has guided me to a straight path — and 6:164 adds that no bearer of burdens bears the burden of another.",
            "bn": "সূরা আল-আন'আম শেষের দিকে। 6:159 এইমাত্র নবী ﷺ-কে আলাদা করেছে তাদের থেকে যারা নিজেদের দ্বীনকে খণ্ডবিখণ্ড করে দলে দলে ভাগ হয়ে গেছে, আর তাদের বিষয়টি আল্লাহর হাতে ছেড়ে দিয়েছে। এরপর এই আয়াতটি বলে দেয় আমলের প্রতিদান কোন হারে দেওয়া হবে। তারপর 6:161 শুরু করে সূরার সমাপ্তি-ঘোষণা — বলো, আমার প্রতিপালক আমাকে সরল পথে পরিচালিত করেছেন — আর 6:164 যোগ করে যে কোনো বহনকারী অন্যের বোঝা বহন করবে না।"
          },
          {
            "en": "So the verse is the final piece of argument before the surah turns into a declaration. A long Makkan case that the One who creates and provides is alone entitled to worship arrives, at the end, at the question a listener actually has: what happens to what I do. The answer comes in two halves, and the second of those halves is the one this article is mostly about.",
            "bn": "অর্থাৎ সূরাটি ঘোষণায় রূপ নেওয়ার আগে এই আয়াতটিই যুক্তির শেষ অংশ। যিনি সৃষ্টি করেন ও রিযক দেন কেবল তিনিই ইবাদতের যোগ্য — মক্কী যুগের এই দীর্ঘ যুক্তিটি শেষে এসে পৌঁছায় সেই প্রশ্নে, যা শ্রোতার মনে সত্যিই আছে: আমি যা করি তার কী হয়। জবাবটি আসে দুই অর্ধে, আর এই লেখাটির মূল আলোচনা সেই দ্বিতীয় অর্ধটি নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Coming With It in Hand",
          "bn": "হাতে নিয়ে উপস্থিত হওয়া"
        },
        "p": [
          {
            "en": "Man ja'a bil-hasanah — whoever comes with a good deed. Ja'a bi is to come bringing something, so the picture is arrival carrying, rather than a file being read out about you. The same formula opens 27:89 and 28:84, and both of those complete it differently: whoever comes with a good deed will have better than it. One place names a rate; the others decline to name one and say only that what returns is better.",
            "bn": "মান জাআ বিল-হাসানাহ — যে ব্যক্তি একটি সৎকর্ম নিয়ে আসে। 'জাআ বি' মানে কিছু নিয়ে আসা, তাই ছবিটি হলো হাতে কিছু নিয়ে উপস্থিত হওয়া, আপনার সম্পর্কে কোনো নথি পড়ে শোনানো নয়। এই একই গঠন দিয়ে শুরু হয় 27:89 ও 28:84, আর ঐ দুটি বাক্য শেষ হয় ভিন্নভাবে: যে সৎকর্ম নিয়ে আসবে তার জন্য থাকবে তার চেয়েও উত্তম কিছু। এক জায়গায় একটি হার বলা হয়েছে; অন্য জায়গাগুলোতে হার বলা হয়নি, কেবল বলা হয়েছে যা ফিরে আসে তা আরও উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "Ten of Its Like",
          "bn": "তার দশ গুণ"
        },
        "p": [
          {
            "en": "'Ashru amthaliha, ten of its like. This is the half of the verse most often quoted, and 2:261 follows it upward: spending in the way of Allah is likened there to a grain that produces seven ears with a hundred grains in each, and the figure is then left open with and Allah multiplies for whom He wills. Ten is therefore the general floor for a good deed, not a ceiling.",
            "bn": "'আশরু আমছালিহা — তার দশ গুণ। আয়াতের এই অর্ধেকটিই সবচেয়ে বেশি উদ্ধৃত হয়, আর 2:261 তা আরও ওপরে নিয়ে যায়: সেখানে আল্লাহর পথে ব্যয়কে তুলনা করা হয়েছে এমন এক বীজের সঙ্গে যা সাতটি শীষ উৎপন্ন করে, প্রতিটি শীষে একশত দানা; তারপর সংখ্যাটি খোলা রেখে দেওয়া হয় এই কথায় — আল্লাহ যাকে চান বাড়িয়ে দেন। কাজেই দশ হলো সৎকর্মের সাধারণ সর্বনিম্ন হার, সর্বোচ্চ সীমা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Except the Like of It",
          "bn": "কেবল তার সমানই"
        },
        "p": [
          {
            "en": "Now the clause that makes this a statement about justice: wa man ja'a bis-sayyi'ati fala yujza illa mithlaha. Whoever comes with an evil deed is not recompensed except with its like. Notice the grammar beside the first half. Good is stated as a possession — fa-lahu, then for him is ten of its like. Evil is stated as a passive with a restriction: he shall not be repaid except its like. Reward is granted; punishment is fenced.",
            "bn": "এবার সেই বাক্যাংশ, যা একে ন্যায়বিচার নিয়ে একটি বক্তব্যে পরিণত করে: ওয়া মান জাআ বিস-সাইয়্যিআতি ফালা ইউজযা ইল্লা মিছলাহা। যে মন্দ কাজ নিয়ে আসে তাকে কেবল তার সমান প্রতিফলই দেওয়া হবে। প্রথমার্ধের পাশে ব্যাকরণটি লক্ষ করুন। কল্যাণকে বলা হয়েছে অধিকার হিসেবে — 'ফালাহু', অর্থাৎ তার জন্য রয়েছে তার দশ গুণ। আর মন্দকে বলা হয়েছে সীমাসহ কর্মবাচ্যে: তাকে তার সমান ছাড়া প্রতিফল দেওয়া হবে না। পুরস্কার দেওয়া হয়; শাস্তির চারপাশে বেড়া দেওয়া হয়।"
          },
          {
            "en": "40:40 states it in almost identical words, and 42:40 applies the same principle to human dealings by calling the recompense for an evil an evil like it, and then immediately preferring pardon. What is excluded here is the thing human justice most reliably fails at, which is escalation. Nobody on that Day is punished beyond the weight of what he did, nobody for what he did not do, and 6:164 in this same surah rules out being punished for another.",
            "bn": "40:40 প্রায় হুবহু একই শব্দে কথাটি বলে, আর 42:40 একই নীতি মানুষের পারস্পরিক আচরণে প্রয়োগ করে — মন্দের প্রতিফল তার সমান মন্দ — এবং সঙ্গে সঙ্গেই ক্ষমাকে অগ্রাধিকার দেয়। এখানে যা বাদ দেওয়া হচ্ছে তা হলো মানুষের বিচারব্যবস্থা যেখানে সবচেয়ে নিয়মিতভাবে ব্যর্থ হয়: বাড়াবাড়ি। সেদিন কাউকে তার কৃতকর্মের ওজনের বেশি শাস্তি দেওয়া হবে না, যা সে করেনি তার জন্যও নয়; আর এই সূরারই 6:164 অন্যের অপরাধে শাস্তি পাওয়ার সম্ভাবনাও নাকচ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Even Before the Deed",
          "bn": "কাজের আগেও"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Ibn Abbas (RA), from the Prophet ﷺ reporting from his Lord, that whoever intends a good deed and does not do it has one full good deed written for him; whoever intends it and does it has ten written, up to seven hundred times and more; whoever intends an evil deed and does not do it has one full good deed written for him; and whoever intends it and does it has one evil deed written.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ তাঁর প্রতিপালকের পক্ষ থেকে বর্ণনা করেছেন: যে ব্যক্তি একটি সৎকাজের সংকল্প করে অথচ তা করে না, তার জন্য একটি পূর্ণ নেকি লেখা হয়; যে সংকল্প করে এবং করে, তার জন্য দশটি লেখা হয়, সাতশ গুণ পর্যন্ত ও তার বেশিও; যে একটি মন্দ কাজের সংকল্প করে অথচ তা করে না, তার জন্যও একটি পূর্ণ নেকি লেখা হয়; আর যে সংকল্প করে এবং তা করে, তার জন্য একটিমাত্র গুনাহ লেখা হয়।"
          },
          {
            "en": "Set the hadith beside the verse and the asymmetry starts earlier than the act itself. An abandoned intention to do good is credited, and an abandoned intention to do evil is credited as well. The only place a single unit is entered against a person is the evil actually carried out. The verse's ten and the hadith's ten are the same figure, and the hadith adds the stage that the verse does not describe.",
            "bn": "হাদীসটি আয়াতের পাশে রাখলে দেখা যায়, এই অসমতা কাজের আগেই শুরু হয়ে যায়। সৎকাজের পরিত্যক্ত সংকল্পও জমা হয়, আবার মন্দ কাজের পরিত্যক্ত সংকল্পও জমা হয়। কেবল একটিমাত্র জায়গায় মানুষের বিরুদ্ধে এক একক লেখা হয় — বাস্তবে করে ফেলা মন্দ কাজটিতে। আয়াতের দশ আর হাদীসের দশ একই সংখ্যা, আর হাদীসটি যোগ করে সেই স্তরটি, যা আয়াত বর্ণনা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "And They Will Not Be Wronged",
          "bn": "আর তাদের ওপর জুলুম করা হবে না"
        },
        "p": [
          {
            "en": "The verse ends where 2:281 ends: wa hum la yuzlamun. Zulm is described by the scholars as putting a thing somewhere it does not belong, and both halves of this verse are protected by the phrase. Multiplying the good is generosity and does not offend justice, because nobody is harmed by another's reward. Capping the evil is justice itself, and the closing clause states plainly that the cap will not be exceeded.",
            "bn": "আয়াতটি শেষ হয় সেখানেই যেখানে 2:281 শেষ হয়: ওয়া হুম লা ইউযলামূন। আলিমগণ জুলুমের ব্যাখ্যা দেন এভাবে — কোনো জিনিসকে এমন জায়গায় রাখা যেখানে তার স্থান নয়; আর এই বাক্যাংশ আয়াতের দুই অর্ধকেই রক্ষা করে। কল্যাণকে বহুগুণ করা অনুগ্রহ, আর তা ন্যায়ের বিরুদ্ধে যায় না, কারণ অন্যের পুরস্কারে কারও ক্ষতি হয় না। মন্দের ওপর সীমা টেনে দেওয়াই ন্যায়, আর শেষ বাক্যাংশটি স্পষ্ট বলে দেয় যে সেই সীমা অতিক্রম করা হবে না।"
          },
          {
            "en": "Lived out, the verse cuts both ways, and people usually take only one of them. A small good is never negligible, because it is entered at ten before anything else is added to it. And a small wrong is never free, because a like-for-like repayment is still a repayment; what removes it is repentance or pardon, not its size. The generosity in this verse is real, and it is not an amnesty.",
            "bn": "জীবনে প্রয়োগ করলে আয়াতটি দুই দিকেই কাটে, অথচ মানুষ সাধারণত একটি দিকই নেয়। ছোট কোনো ভালো কাজ কখনোই তুচ্ছ নয়, কারণ আর কিছু যোগ হওয়ার আগেই তা দশ হিসেবে লেখা হয়। আর ছোট কোনো অন্যায়ও কখনোই বিনা মূল্যের নয়, কারণ সমানে-সমান প্রতিফলও তো প্রতিফলই; তা মুছে দেয় তাওবা বা ক্ষমা, তার আকার নয়। এই আয়াতের অনুগ্রহ সত্যিকারের, কিন্তু তা সাধারণ ক্ষমার ঘোষণা নয়।"
          }
        ]
      }
    ]
  },
  "6:162-163": {
    "sections": [
      {
        "h": {
          "en": "The Closing Declaration",
          "bn": "সমাপনী ঘোষণা"
        },
        "p": [
          {
            "en": "Surah al-An'am is a long Makkan surah with a single sustained argument: that the One who creates, provides and judges is alone entitled to worship. Near its end the argument stops being argued and becomes a declaration to be spoken. A series of verses beginning with qul, say, closes the surah, and 6:162-163 is their peak: say, my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds; He has no partner.",
            "bn": "সূরা আল-আন'আম একটি দীর্ঘ মাক্কী সূরা, যার একটাই ধারাবাহিক যুক্তি: যিনি সৃষ্টি করেন, রিযিক দেন ও বিচার করেন, ইবাদত পাওয়ার অধিকার কেবল তাঁরই। সূরার শেষপ্রান্তে এসে যুক্তিটি আর তর্ক থাকে না, হয়ে ওঠে উচ্চারণের ঘোষণা। 'কুল' — বলো — দিয়ে শুরু হওয়া কয়েকটি আয়াতের ধারা সূরাটি শেষ করে, আর 6:162-163 তার চূড়া: বলো, আমার নামায, আমার কুরবানী, আমার জীবন ও আমার মৃত্যু — সবই আল্লাহর জন্য, যিনি জগৎসমূহের রব; তাঁর কোনো শরীক নেই।"
          },
          {
            "en": "The speaker commanded to say it is the Prophet ﷺ, but the commentators read the command as a template handed to every believer, because the sentence describes what islam, surrender, actually is. The verse ends: with this I have been commanded, and I am the first of the Muslims — first of this community to submit, as Ibn Kathir explains, since every prophet before him (AS) submitted within his own nation.",
            "bn": "যাঁকে এটি বলার আদেশ দেওয়া হয়েছে তিনি নবী ﷺ, কিন্তু মুফাসসিরগণ আদেশটিকে প্রত্যেক মুমিনের হাতে তুলে দেওয়া এক নমুনা হিসেবে পড়েন, কারণ বাক্যটি বর্ণনা করে ইসলাম — আত্মসমর্পণ — আসলে কী। আয়াত শেষ হয়: এরই আদেশ আমাকে দেওয়া হয়েছে, আর আমি মুসলিমদের মধ্যে প্রথম — অর্থাৎ এই উম্মতের মধ্যে প্রথম আত্মসমর্পণকারী, যেমন ইবনে কাসীর ব্যাখ্যা করেন, কেননা তাঁর আগের প্রত্যেক নবী (আঃ) নিজ নিজ জাতির মধ্যে আত্মসমর্পণ করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Things Handed Over",
          "bn": "চারটি জিনিস সমর্পিত"
        },
        "p": [
          {
            "en": "The verse lists four possessions and signs them all over: salati, my prayer; nusuki, my sacrifice; mahyaya, my living; mamati, my dying. The first two are acts of worship, one of the body and tongue, one of wealth and blood. The second two are not acts at all — they are the whole span inside which acts happen. The list moves outward: from a rite, to a costlier rite, to everything a person does, to the one thing a person cannot do but only undergo.",
            "bn": "আয়াতটি চারটি সম্পদের তালিকা করে সবকটি সঁপে দেয়: 'সালাতি' — আমার নামায; 'নুসুকি' — আমার কুরবানী; 'মাহইয়ায়া' — আমার জীবন; 'মামাতি' — আমার মৃত্যু। প্রথম দুটি ইবাদত — একটি দেহ ও জিহ্বার, অন্যটি সম্পদ ও রক্তের। শেষ দুটি আদৌ কোনো কাজ নয় — সেগুলো সেই গোটা পরিসর, যার ভেতরে সব কাজ ঘটে। তালিকাটি ক্রমে বাইরের দিকে যায়: একটি রীতি থেকে আরও ব্যয়বহুল রীতিতে, সেখান থেকে মানুষের সমস্ত কর্মে, আর শেষে সেই একটি জিনিসে যা মানুষ করতে পারে না, কেবল বরণ করতে পারে।"
          },
          {
            "en": "Nusuk is glossed by al-Tabari and Ibn Kathir primarily as the slaughtered offering, sacrifice made to draw near to Allah, and the pairing of prayer with sacrifice recurs in 108:2, so pray to your Lord and sacrifice. The two acts answer the two idolatries of Makkah, which prayed to idols and slaughtered for them. The verse takes both channels of devotion, the one that costs breath and the one that costs blood, and routes them to a single recipient.",
            "bn": "'নুসুক' শব্দটিকে তাবারী ও ইবনে কাসীর প্রধানত যবেহকৃত কুরবানী অর্থে ব্যাখ্যা করেন — আল্লাহর নৈকট্যের জন্য উৎসর্গ; আর নামায ও কুরবানীর এই জোড় আবার আসে 108:2 আয়াতে — সুতরাং তোমার রবের জন্য নামায পড়ো এবং কুরবানী করো। কাজ দুটি মক্কার দুই শিরকের জবাব, যারা মূর্তির কাছে প্রার্থনা করত এবং মূর্তির নামে যবেহ করত। আয়াতটি ভক্তির দুটি প্রণালীকেই — যেটির মূল্য নিঃশ্বাস আর যেটির মূল্য রক্ত — একটিমাত্র প্রাপকের দিকে ফিরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living and Dying for Him",
          "bn": "তাঁর জন্য বাঁচা ও মরা"
        },
        "p": [
          {
            "en": "How can dying be for Allah, when no one chooses its hour? The commentators answer that what is handed over is not the event but its orientation: to remain on His religion until it comes, to hope to meet Him upon tawhid, to make even the manner of one's death — its patience, its testimony — an act of devotion. And living for Him does not mean living inside a mosque. It means the ordinary content of a life is aimed, by intention, at His pleasure.",
            "bn": "মৃত্যু কীভাবে আল্লাহর জন্য হয়, যখন কেউ তার ক্ষণ বেছে নিতে পারে না? মুফাসসিরগণ উত্তর দেন: যা সমর্পণ করা হয় তা ঘটনাটি নয়, তার অভিমুখ — মৃত্যু আসা পর্যন্ত তাঁর দ্বীনের ওপর টিকে থাকা, তাওহীদের ওপর থেকেই তাঁর সাক্ষাতের আশা রাখা, এমনকি নিজের মৃত্যুর ধরনকেও — তার ধৈর্য, তার সাক্ষ্য — ইবাদতে পরিণত করা। আর তাঁর জন্য বাঁচার মানে মসজিদের ভেতরে বাস করা নয়। এর মানে, জীবনের সাধারণ উপকরণগুলোকে নিয়তের মাধ্যমে তাঁর সন্তুষ্টির দিকে তাক করা।"
          },
          {
            "en": "This is the same purpose 51:56 states from the other direction: I did not create jinn and mankind except to worship Me. Read together, the two verses close a circle. Creation exists for worship; the believer answers by declaring that everything inside the created span, from the first breath to the last, is offered back. What was given as a loan is returned as a gift, and nothing of the life is left outside the transaction.",
            "bn": "এ সেই একই উদ্দেশ্য, যা 51:56 উল্টো দিক থেকে বলে: আমি জিন ও মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি। একসঙ্গে পড়লে আয়াত দুটি একটি বৃত্ত সম্পূর্ণ করে। সৃষ্টির অস্তিত্বই ইবাদতের জন্য; মুমিন উত্তর দেয় এই ঘোষণায় যে সৃষ্ট পরিসরের ভেতরের সবকিছু — প্রথম নিঃশ্বাস থেকে শেষ নিঃশ্বাস পর্যন্ত — ফিরিয়ে নিবেদন করা হলো। যা ঋণ হিসেবে দেওয়া হয়েছিল তা উপহার হিসেবে ফেরত যায়, আর জীবনের কোনো অংশই লেনদেনের বাইরে পড়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at the Start of Prayer",
          "bn": "নামাযের শুরুতে পঠিত"
        },
        "p": [
          {
            "en": "These words were not left as theology on a page. Muslim narrates from Ali (RA) that the Prophet ﷺ, when he stood for prayer, would open with a supplication that includes these very phrases: my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds, He has no partner, and with this I have been commanded. The declaration Allah taught in 6:162-163 became the doorway through which the Prophet ﷺ entered the prayer itself.",
            "bn": "এই কথাগুলো পাতার ওপর কেবল তত্ত্ব হয়ে পড়ে থাকেনি। মুসলিম আলী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ নামাযে দাঁড়ালে এমন এক দোয়া দিয়ে শুরু করতেন যাতে ঠিক এই বাক্যগুলোই আছে: আমার নামায, আমার কুরবানী, আমার জীবন ও আমার মৃত্যু আল্লাহর জন্য, যিনি জগৎসমূহের রব, তাঁর কোনো শরীক নেই, আর এরই আদেশ আমাকে দেওয়া হয়েছে। 6:162-163 আয়াতে আল্লাহ যে ঘোষণা শেখালেন, তা-ই হয়ে গেল সেই দরজা, যা দিয়ে নবী ﷺ স্বয়ং নামাযে প্রবেশ করতেন।"
          },
          {
            "en": "That usage teaches something about the verse's weight. A sentence this total could become a slogan, spoken once and framed. Instead it was placed at the threshold of a repeated act, so that the whole-life claim is renewed each time before a few minutes of standing and bowing. The largest commitment in the religion is maintained by the smallest of intervals, and the prayer that follows becomes a sample, freshly signed, of the life being promised.",
            "bn": "এই ব্যবহার আয়াতটির ওজন সম্পর্কে কিছু শেখায়। এত সর্বগ্রাসী একটি বাক্য স্লোগান হয়ে যেতে পারত — একবার বলে বাঁধিয়ে রাখার জিনিস। বদলে একে রাখা হলো এক পুনরাবৃত্ত আমলের চৌকাঠে, যাতে গোটা-জীবনের দাবিটি প্রতিবার নবায়ন হয় কয়েক মিনিটের দাঁড়ানো-রুকুর আগে। দ্বীনের সবচেয়ে বড় অঙ্গীকারটি রক্ষিত হয় সবচেয়ে ছোট ছোট বিরতিতে, আর এর পরের নামাযটি হয়ে ওঠে প্রতিশ্রুত জীবনের এক টাটকা-স্বাক্ষরিত নমুনা।"
          }
        ]
      },
      {
        "h": {
          "en": "One Direction for Every Act",
          "bn": "প্রতিটি কাজের এক অভিমুখ"
        },
        "p": [
          {
            "en": "The verse's demand, lived out, is less dramatic than it sounds and more constant. It does not ask for a heroic single sacrifice; it asks that the question for whom be answered the same way across categories that people usually keep separate — worship, work, family, rest, and finally death. The note this article expands puts it plainly: to say this sincerely is to hand over ownership of your life to the One who gave it.",
            "bn": "আয়াতটির দাবি, বাস্তবে যাপন করলে, শুনতে যেমন লাগে তার চেয়ে কম নাটকীয় আর বেশি নিরবচ্ছিন্ন। এটি কোনো বীরত্বপূর্ণ একক কুরবানী চায় না; এটি চায় 'কার জন্য' প্রশ্নটির উত্তর একই হোক সেইসব খাত জুড়ে, যেগুলোকে মানুষ সাধারণত আলাদা রাখে — ইবাদত, কাজ, পরিবার, বিশ্রাম, এবং শেষে মৃত্যু। এই লেখা যে নোটটির বিস্তার, তা সরলভাবেই বলে: এ কথা আন্তরিকভাবে বলা মানে জীবনের মালিকানা তাঁর হাতে তুলে দেওয়া, যিনি তা দিয়েছিলেন।"
          },
          {
            "en": "A workable practice is to test one ordinary act each day against the verse: this meal, this commute, this hour of work — can it be aimed at Allah by intention, gratitude, or excellence, and if not, why is it in the life at all? La sharika lahu, He has no partner, then does quiet work: it rules out not only idols of stone but every rival claimant to the day, approval, fear, and habit among them.",
            "bn": "একটি কার্যকর অভ্যাস হলো প্রতিদিন একটি সাধারণ কাজকে আয়াতটির সামনে পরীক্ষা করা: এই খাবার, এই যাতায়াত, কাজের এই ঘণ্টা — নিয়ত, কৃতজ্ঞতা বা উৎকর্ষ দিয়ে কি একে আল্লাহর দিকে তাক করা যায়? না গেলে, তা জীবনে আছেই বা কেন? 'লা শারীকা লাহু' — তাঁর কোনো শরীক নেই — তখন নীরবে কাজ করে: এটি কেবল পাথরের মূর্তিকে বাদ দেয় না, দিনের ওপর দাবি তোলা প্রতিটি প্রতিদ্বন্দ্বীকেও বাদ দেয় — মানুষের সমর্থন, ভয় আর অভ্যাস তাদের অন্যতম।"
          }
        ]
      }
    ]
  }
});
