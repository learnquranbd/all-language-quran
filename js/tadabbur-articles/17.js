/**
 * Tadabbur long-form articles — surah 17.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "17:9": {
    "sections": [
      {
        "h": {
          "en": "This Quran, After That One",
          "bn": "সেই কিতাবের পরে এই কুরআন"
        },
        "p": [
          {
            "en": "Surah al-Isra opens with the night journey in 17:1 and then, without pause, turns in 17:2 to an earlier book: We gave Musa the Scripture and made it a guidance for the Children of Israel. The verses that follow trace what became of that community, through warning and consequence, down to 17:8 where they are told that if they return, We return. Only then does our verse begin, and it begins with a pointing word: inna hadha al-Qur'an, indeed this Quran.",
            "bn": "সূরা আল-ইসরা শুরু হয় 17:1 আয়াতে রাতের সফর দিয়ে, আর তারপর কোনো বিরতি ছাড়াই আগের একটি কিতাবের দিকে ফেরে: আমি মূসাকে কিতাব দিয়েছিলাম এবং তা বনী ইসরাঈলের জন্য হিদায়াত বানিয়েছিলাম — 17:2 আয়াতে। পরের আয়াতগুলো সতর্কবার্তা ও পরিণতির ভেতর দিয়ে সেই জাতির পরিণাম অনুসরণ করে, একেবারে 17:8 আয়াত পর্যন্ত, যেখানে তাদের বলা হয় — যদি তোমরা ফিরে যাও, আমিও ফিরব। এরপরই কেবল আমাদের আয়াতটি শুরু হয়, আর শুরু হয় একটি নির্দেশক শব্দ দিয়ে: 'ইন্না হাযাল কুরআন' — নিশ্চয়ই এই কুরআন।"
          },
          {
            "en": "The demonstrative does work. After pages about a scripture that a community received and mishandled, the reader is turned toward the one in front of him and told what it is for. The claim is not that this Book contains guidance; it is that the Book guides, actively, and the object of that guiding is named in a phrase that has puzzled and rewarded commentators ever since.",
            "bn": "নির্দেশক শব্দটি কাজ করে। এমন এক কিতাব নিয়ে কয়েক পাতা পড়ার পর, যা একটি জাতি পেয়েছিল ও যার সঙ্গে অন্যায় করেছিল, পাঠককে ঘুরিয়ে দেওয়া হয় তার সামনে থাকা কিতাবটির দিকে, আর বলে দেওয়া হয় এটি কিসের জন্য। দাবিটি এই নয় যে এই কিতাবে হিদায়াত আছে; দাবিটি হলো কিতাবটি হিদায়াত করে, সক্রিয়ভাবে — আর সেই হিদায়াতের লক্ষ্যটির নাম আসে এমন এক বাক্যাংশে, যা তখন থেকে মুফাসসিরদের ভাবিয়েছে ও পুরস্কৃত করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Aqwam Is a Comparative",
          "bn": "আক্বওয়াম একটি তুলনামূলক রূপ"
        },
        "p": [
          {
            "en": "It guides lillati hiya aqwam. Aqwam is not simply the adjective for upright; it is the elative, the af'al form Arabic builds to mean more or most. It is the elative of qawim, upright, straight, standing firm — from the root that also gives qayyim and mustaqim. So the sentence is not saying the Quran guides to something upright, which would be a modest claim. It is saying it guides to whatever is more upright than the alternatives.",
            "bn": "এটি হিদায়াত করে 'লিল্লাতী হিয়া আক্বওয়াম'-এর দিকে। 'আক্বওয়াম' নিছক 'সঠিক' অর্থের বিশেষণ নয়; এটি অতিশয়ার্থক রূপ, আরবি যে 'আফআল' গঠনে 'অধিকতর' বা 'সর্বাধিক' বোঝায়। এটি 'ক্বাউইম'-এর অতিশয়ার্থক রূপ — সোজা, সঠিক, দৃঢ়ভাবে দাঁড়ানো — যে ধাতুমূল থেকে 'ক্বাইয়িম' ও 'মুস্তাক্বীম' শব্দও আসে। তাই বাক্যটি বলছে না যে কুরআন সঠিক কোনো কিছুর দিকে পথ দেখায়, যা হতো একটি বিনীত দাবি। এটি বলছে, কুরআন সেই দিকেই পথ দেখায় যা বিকল্পগুলোর চেয়ে অধিকতর সঠিক।"
          },
          {
            "en": "That comparative edge is what the word adds, and translations handle it differently — most suitable, most upright, straightest and best established. Ibn Kathir glosses the phrase as the straightest of ways and the clearest of paths. The practical consequence is that guidance here is not only about avoiding what is forbidden. Between two courses that are both permitted, the Book is claiming to point at the one that stands straighter.",
            "bn": "সেই তুলনামূলক ধারটিই শব্দটি যোগ করে, আর অনুবাদকেরা তা নানাভাবে সামলান — সবচেয়ে উপযুক্ত, সবচেয়ে সঠিক, সোজা ও সুপ্রতিষ্ঠিত। ইবনে কাসীর বাক্যাংশটির ব্যাখ্যায় বলেন: পথগুলোর মধ্যে সবচেয়ে সোজা ও সবচেয়ে স্পষ্ট। এর ব্যবহারিক ফল হলো, এখানে হিদায়াত কেবল নিষিদ্ধ জিনিস এড়ানোর ব্যাপার নয়। দুটি পথ যখন দুটোই বৈধ, তখনও কিতাবটি দাবি করে যে সে সেটির দিকেই আঙুল তোলে যেটি বেশি সোজা হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Noun That Is Missing",
          "bn": "যে বিশেষ্যটি নেই"
        },
        "p": [
          {
            "en": "There is a gap in the Arabic that every reader has to fill. Allati is a feminine relative pronoun, the one which, but the noun it refers to is not stated. Guides to the which that is most upright — the which what? At-Tabari supplies al-millah, the creed or way; others read it as al-hal, the state, or al-tariqah, the road, or al-khislah, the trait.",
            "bn": "আরবিতে একটি ফাঁক আছে, যা প্রতিটি পাঠককেই পূরণ করতে হয়। 'আল্লাতী' একটি স্ত্রীলিঙ্গ সম্বন্ধবাচক সর্বনাম — 'যেটি' — কিন্তু এটি যে বিশেষ্যকে নির্দেশ করছে তার নাম বলা হয়নি। 'যেটি সবচেয়ে সঠিক তার দিকে পথ দেখায়' — কোন 'যেটি'? আত-তাবারী সেখানে বসান 'আল-মিল্লাহ' — দ্বীন বা পথ; অন্যরা পড়েন 'আল-হাল' — অবস্থা, কিংবা 'আত-তারীক্বাহ' — রাস্তা, কিংবা 'আল-খিসলাহ' — স্বভাব।"
          },
          {
            "en": "The commentators do not treat this as a defect to be resolved by choosing one. Leaving the noun out generalises the sentence: whatever the matter under consideration — a creed, a state of heart, a road, a habit, a decision at work — the Quran guides to its most upright form. A specified noun would have narrowed the claim to one department of life. The gap keeps it open.",
            "bn": "মুফাসসিরগণ এটিকে এমন কোনো ত্রুটি মনে করেন না যা একটিকে বেছে নিয়ে মেটাতে হবে। বিশেষ্যটি বাদ দেওয়া বাক্যটিকে সাধারণ করে তোলে: বিবেচনাধীন বিষয়টি যা-ই হোক — একটি বিশ্বাস, হৃদয়ের একটি অবস্থা, একটি রাস্তা, একটি অভ্যাস, কর্মক্ষেত্রের একটি সিদ্ধান্ত — কুরআন তার সবচেয়ে সঠিক রূপটির দিকেই পথ দেখায়। নির্দিষ্ট কোনো বিশেষ্য থাকলে দাবিটি জীবনের একটি বিভাগে সংকুচিত হয়ে যেত। ফাঁকটি তা খোলা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Root, Nearby",
          "bn": "কাছাকাছি একই ধাতুমূল"
        },
        "p": [
          {
            "en": "The root turns up again in places that are worth reading beside this one. In 18:1 Allah is praised for sending down the Book with no crookedness in it, and 18:2 immediately affirms the positive: qayyiman, straight. The clause that follows there is almost word for word the one here — good tidings to the believers who do righteous deeds that they will have a reward — with a good reward named at 18:2 and a great reward named here.",
            "bn": "ধাতুমূলটি এমন জায়গাগুলোতে আবার আসে, যেগুলো এর পাশে রেখে পড়ার মতো। 18:1 আয়াতে আল্লাহর প্রশংসা করা হয় এমন কিতাব নাযিল করার জন্য যাতে কোনো বক্রতা নেই, আর 18:2 আয়াত সঙ্গে সঙ্গেই ইতিবাচক দিকটি নিশ্চিত করে: 'ক্বাইয়িমান' — সোজা। সেখানকার পরের বাক্যাংশটি এখানকার বাক্যাংশের প্রায় হুবহু — সৎকর্মশীল মুমিনদের সুসংবাদ যে তাদের জন্য পুরস্কার রয়েছে — তবে 18:2 আয়াতে বলা হয়েছে উত্তম পুরস্কার, আর এখানে মহা পুরস্কার।"
          },
          {
            "en": "The same elative appears in 73:6 of speech at night, aqwamu qila. And the request every Muslim makes seventeen times a day at the least, in 1:6, asks to be guided to the straight path. Our verse answers that request by naming the instrument: the thing that does the guiding is this Quran. A person who asks for the straight path in prayer and then does not open the Book has asked for something and declined the means of receiving it.",
            "bn": "একই অতিশয়ার্থক রূপ 73:6 আয়াতে রাতের কথা প্রসঙ্গে আসে — 'আক্বওয়ামু ক্বীলা'। আর প্রত্যেক মুসলিম দিনে অন্তত সতেরো বার যে চাওয়াটি করে, 1:6 আয়াতে, তা হলো সরল পথে পরিচালিত হওয়ার চাওয়া। আমাদের আয়াতটি সেই চাওয়ার জবাব দেয় মাধ্যমটির নাম বলে দিয়ে: যা পথ দেখায় তা হলো এই কুরআন। যে ব্যক্তি নামাযে সরল পথ চায় অথচ এরপর কিতাবটি খোলে না, সে কিছু একটা চেয়েছে আর তা পাওয়ার উপায়টিকে ফিরিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News and Its Counterpart",
          "bn": "সুসংবাদ ও তার বিপরীত"
        },
        "p": [
          {
            "en": "The verse does not stop at guidance. It gives good tidings to the believers who do righteous deeds that they will have a great reward — belief and action named together, as the Quran almost always names them. And the sentence has a second half in the next verse: 17:10 states that for those who do not believe in the Hereafter We have prepared a painful punishment. Glad tidings and warning arrive as a pair, which is how the Quran describes the work of every messenger.",
            "bn": "আয়াতটি হিদায়াতেই থামে না। এটি সৎকর্মশীল মুমিনদের সুসংবাদ দেয় যে তাদের জন্য রয়েছে মহা পুরস্কার — ঈমান ও আমলের নাম একসঙ্গে, কুরআন প্রায় সব সময় যেভাবে নেয়। আর বাক্যটির দ্বিতীয় অর্ধেক আছে পরের আয়াতে: 17:10 আয়াত বলে, যারা আখিরাতে ঈমান আনে না তাদের জন্য আমি যন্ত্রণাদায়ক শাস্তি প্রস্তুত করে রেখেছি। সুসংবাদ ও সতর্কবাণী জোড়ায় আসে, কুরআন প্রত্যেক রাসূলের কাজকে এভাবেই বর্ণনা করে।"
          },
          {
            "en": "What the verse asks of a reader is concrete. Take a decision you are actually facing, one where both options are lawful, and ask which of them is aqwam — which stands straighter, which you could defend on the Day the accounts are read. Then go to the Book for it rather than to your preference. The claim of 17:9 is that the answer is there, and that the Book was sent down to give exactly that kind of answer.",
            "bn": "আয়াতটি পাঠকের কাছ থেকে যা চায় তা বাস্তব। এমন একটি সিদ্ধান্ত নিন যার মুখোমুখি আপনি সত্যিই আছেন, যেখানে দুটি বিকল্পই বৈধ, আর প্রশ্ন করুন এ দুটির কোনটি 'আক্বওয়াম' — কোনটি বেশি সোজা হয়ে দাঁড়ায়, কোনটির পক্ষে আপনি সেই দিন কথা বলতে পারবেন যেদিন হিসাব পড়ে শোনানো হবে। তারপর তার জন্য নিজের পছন্দের কাছে নয়, কিতাবের কাছে যান। 17:9 আয়াতের দাবি হলো, উত্তরটি সেখানেই আছে, আর কিতাবটি ঠিক এই ধরনের উত্তর দেওয়ার জন্যই নাযিল হয়েছে।"
          }
        ]
      }
    ]
  },
  "17:23-24": {
    "sections": [
      {
        "h": {
          "en": "Decreed, Not Suggested",
          "bn": "সুপারিশ নয়, ফয়সালা"
        },
        "p": [
          {
            "en": "The passage begins wa qada rabbuka, and your Lord has decreed. Qada is a decisive verb — a settled ruling, not advice offered for consideration. What it decrees is doubled: that you worship none but Him, and bil-walidayni ihsana, kindness to the two parents. Ihsan is more than duty; it is doing the good thing and doing it beautifully. The two commands share one verb, and no reader of the Arabic can separate them without breaking the sentence.",
            "bn": "অংশটি শুরু হয় ওয়া ক্বাদা রাব্বুকা দিয়ে — আর তোমার রব ফয়সালা করেছেন। ক্বাদা একটি চূড়ান্ত ক্রিয়া — এটি স্থিরীকৃত সিদ্ধান্ত, বিবেচনার জন্য দেওয়া পরামর্শ নয়। যা ফয়সালা করা হয়েছে তা দ্বৈত: তোমরা তাঁকে ছাড়া কারো ইবাদত করবে না, আর বিল-ওয়ালিদাইনি ইহসানা — পিতামাতার সাথে সদাচরণ। ইহসান কেবল কর্তব্য নয়; এটি ভালো কাজটি করা এবং সুন্দরভাবে করা। দুটি আদেশ একটি ক্রিয়াই ভাগ করে নেয়, আর আরবি পাঠক বাক্য না ভেঙে দুটিকে আলাদা করতে পারেন না।"
          },
          {
            "en": "These verses open a charter of conduct running to 17:39, sealed with the statement that this is from the wisdom your Lord revealed to you. Inside it come the prohibitions of killing children out of fear of poverty, of approaching adultery, of taking a life unjustly, of consuming an orphan's wealth, of short measure and of arrogance in walking. Parents are placed first, immediately after tawhid — before every social crime the passage names.",
            "bn": "এই আয়াতগুলো দিয়েই শুরু হয় একটি আচরণ-সনদ, যা চলে 17:39 পর্যন্ত, যেখানে বলা হয় এসবই সেই হিকমত যা তোমার রব তোমার প্রতি ওহি করেছেন। সেই সনদের ভেতরে আছে দারিদ্র্যের ভয়ে সন্তান হত্যা, ব্যভিচারের কাছে যাওয়া, অন্যায়ভাবে প্রাণ নেওয়া, এতিমের সম্পদ ভক্ষণ, মাপে কম দেওয়া ও দম্ভভরে চলার নিষেধাজ্ঞা। এই তালিকায় পিতামাতাকে রাখা হয়েছে সবার আগে, তাওহীদের ঠিক পরেই — সনদে উল্লেখিত প্রতিটি সামাজিক অপরাধেরও আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of One Syllable",
          "bn": "একটি ধ্বনির ভার"
        },
        "p": [
          {
            "en": "The verse then narrows to a specific season: imma yablughanna indaka al-kibara ahaduhuma aw kilahuma. If one of them, or both, reaches old age with you. Indaka means in your keeping — the moment when the direction of care has reversed. Ahaduhuma aw kilahuma, one or both, closes the loophole of a child attentive to one parent and cold to the other. The Arabic is precise about a situation families recognise at once.",
            "bn": "এরপর আয়াত একটি নির্দিষ্ট সময়ের দিকে সংকুচিত হয়: ইম্মা ইয়াবলুগান্না ইনদাকাল-কিবারা আহাদুহুমা আও কিলাহুমা। যদি তাদের একজন কিংবা উভয়েই তোমার কাছে বার্ধক্যে পৌঁছে। ইনদাকা মানে তোমার তত্ত্বাবধানে — অর্থাৎ সেই মুহূর্ত যখন যত্নের দিক উল্টে গেছে। আহাদুহুমা আও কিলাহুমা, একজন বা উভয়ে — এই কথাটি সেই ফাঁকটি বন্ধ করে দেয় যেখানে সন্তান এক অভিভাবকের প্রতি যত্নশীল আর অন্যজনের প্রতি নিস্পৃহ। পরিবারগুলো যে অবস্থা সঙ্গে সঙ্গে চিনতে পারে, আরবি সেখানে অস্বাভাবিক রকম নিখুঁত।"
          },
          {
            "en": "Then: fala taqul lahuma uffin. Do not say to them uff. Uff is not an insult or an argument. It is the small breath of irritation a tired person lets out — the click of the tongue, the sigh at a question asked for the fourth time. The Quran forbids the smallest audible sign of impatience, and the commentators reason from it that everything heavier is forbidden by necessity. Then wa la tanharhuma, do not rebuke or push them away, and qul lahuma qawlan karima, speak to them a noble word.",
            "bn": "এরপর: ফালা তাক্বুল লাহুমা উফ্ফ। তাদের ‘উফ’ বলো না। উফ কোনো গালি নয়, তর্কও নয়। এটি ক্লান্ত মানুষের বেরিয়ে আসা বিরক্তির ছোট্ট নিঃশ্বাস — জিভের টক্ শব্দ, চতুর্থবার করা প্রশ্নে দীর্ঘশ্বাস। কুরআন অধৈর্যের ক্ষুদ্রতম শ্রবণযোগ্য চিহ্নটিও নিষেধ করে, আর মুফাসসিরগণ এখান থেকেই যুক্তি টানেন যে এর চেয়ে ভারী সবকিছু আপনাআপনিই নিষিদ্ধ। এরপর ওয়া লা তানহারহুমা, তাদের ধমক দিও না বা সরিয়ে দিও না, আর ক্বুল লাহুমা ক্বাওলান কারীমা, তাদের সাথে সম্মানজনক কথা বলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wing of Humility",
          "bn": "বিনয়ের ডানা"
        },
        "p": [
          {
            "en": "In 17:24 the image changes from speech to posture: wakhfid lahuma janaha adh-dhulli min ar-rahmah. Lower to them the wing of humility out of mercy. The picture is a bird drawing its wing down over what it shelters — the gesture of a parent bird, now asked of the grown child. Dhull here is not humiliation but the willing lowering of one's own standing. Min ar-rahmah names the motive: not obligation grudgingly met, but tenderness.",
            "bn": "17:24 আয়াতে চিত্র বদলে কথা থেকে ভঙ্গিতে যায়: ওয়াখফিদ লাহুমা জানাহায-যুল্লি মিনার-রাহমাহ। দয়াবশত তাদের প্রতি বিনয়ের ডানা নত করো। ছবিটি এমন এক পাখির, যে নিজের ডানা নামিয়ে আশ্রিতকে ঢেকে রাখে — মা-বাবা পাখির ভঙ্গি, যা এখন বড় হয়ে ওঠা সন্তানের কাছে চাওয়া হচ্ছে। এখানে যুল্ল মানে অপমান নয়, বরং স্বেচ্ছায় নিজের অবস্থান নামিয়ে আনা। মিনার-রাহমাহ উদ্দেশ্যটির নাম বলে দেয়: গাঁইগুঁই করে পালন করা দায়িত্ব নয়, বরং কোমলতা।"
          },
          {
            "en": "The order across the two verses is deliberate. First the tongue is disciplined, then the manner, then the heart is given the reason. It is possible to serve parents faultlessly and still make them feel like a burden; the wording closes that gap. What is being asked is not merely that the elderly be fed and housed, but that they not be made to feel small in the house of the child they raised.",
            "bn": "দুই আয়াতজুড়ে ক্রমটি উদ্দেশ্যমূলক। প্রথমে জিহ্বাকে শৃঙ্খলিত করা হয়, তারপর আচরণকে, তারপর হৃদয়কে কারণটি জানানো হয়। নিখুঁতভাবে পিতামাতার সেবা করেও তাদের বোঝা মনে করানো সম্ভব; আয়াতের ভাষা সেই ফাঁকটি বন্ধ করে দেয়। এখানে কেবল এটুকু চাওয়া হচ্ছে না যে বৃদ্ধ মা-বাবা খাবার ও আশ্রয় পাবেন, বরং এটাও যে তাঁরা যে সন্তানকে বড় করেছেন তারই ঘরে যেন নিজেদের ছোট মনে না করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Du'a That Closes It",
          "bn": "যে দোয়া দিয়ে শেষ"
        },
        "p": [
          {
            "en": "The passage ends by handing the child words to say: rabbi irhamhuma kama rabbayani saghira. My Lord, have mercy on them as they raised me when I was small. The verb rabbayani, they raised me, echoes the name Rabb — the Lord who nurtures and brings to completion — a link the scholars have long heard in the wording. The child is asking the true Rabb to do for his parents what they, in their small human way, once did for him.",
            "bn": "অংশটি শেষ হয় সন্তানের হাতে কিছু শব্দ তুলে দিয়ে: রাব্বির হামহুমা কামা রাব্বাইয়ানী সাগীরা। হে আমার রব, তাদের প্রতি দয়া করুন যেমন তারা আমাকে ছোটবেলায় লালন করেছেন। রাব্বাইয়ানী ক্রিয়াটি — তারা আমাকে লালন করেছেন — প্রতিধ্বনি তোলে রাব্ব নামের, যিনি লালন করে পূর্ণতায় পৌঁছান; শব্দচয়নের এই মিল আলিমগণ বহুদিন ধরেই লক্ষ করেছেন। সন্তান প্রকৃত রব-এর কাছে চাইছে যেন তিনি তার পিতামাতার জন্য তা-ই করেন, যা তাঁরা মানুষের সীমিত সামর্থ্যে একদিন তার জন্য করেছিলেন।"
          },
          {
            "en": "Note what is asked for. Not their health, not their comfort, not long life — mercy, which is what they will need most and what no child can provide. This is also the part of the command that outlives them. When parents have died, the tongue and the manner are no longer in play, but the du'a is — one of the few things a person can still send. Prophetic teaching preserved in Sahih Muslim names the supplication of a righteous child among the deeds that continue after death.",
            "bn": "লক্ষ্য করুন কী চাওয়া হচ্ছে। তাঁদের স্বাস্থ্য নয়, আরাম নয়, দীর্ঘ আয়ুও নয় — বরং রহমত, যা তাঁদের সবচেয়ে বেশি প্রয়োজন হবে এবং যা কোনো সন্তান দিতে পারে না। আদেশের এই অংশটিই তাঁদের মৃত্যুর পরেও টিকে থাকে। পিতামাতা চলে গেলে জিহ্বা আর আচরণের প্রশ্ন থাকে না, কিন্তু দোয়া থাকে, আর মানুষ তখনো যে অল্প কয়টি জিনিস পাঠাতে পারে এটি তার একটি। সহীহ মুসলিমে সংরক্ষিত নবীর ﷺ শিক্ষা নেক সন্তানের দোয়াকে সেই আমলগুলোর মধ্যে গণ্য করে যা মৃত্যুর পরও চলতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Home Is Hard",
          "bn": "যখন ঘরটাই কঠিন"
        },
        "p": [
          {
            "en": "Nothing in the wording makes the command conditional on the parents being easy, fair, or even believing. That is the hardest thing about the verse and it should be said plainly rather than softened. But the Quran itself sets the limit elsewhere: in 31:15, where parents strive to make a child associate partners with Allah, the instruction is do not obey them in that — and in the same breath, accompany them in this world with kindness. Obedience in a command is refused; kind treatment continues.",
            "bn": "আয়াতের ভাষায় এমন কিছু নেই যা আদেশটিকে পিতামাতার সহজ, ন্যায়পরায়ণ বা এমনকি ঈমানদার হওয়ার শর্তে বাঁধে। এটিই আয়াতের সবচেয়ে কঠিন দিক, আর একে নরম করে না বলে স্পষ্টভাবেই বলা উচিত। তবে সীমাটি কুরআন নিজেই অন্যত্র টেনে দেয়: 31:15 আয়াতে, যেখানে পিতামাতা সন্তানকে আল্লাহর সাথে শরিক করাতে জোর করেন, নির্দেশ হলো সে বিষয়ে তাদের কথা মেনো না — আর একই নিঃশ্বাসে, দুনিয়ায় তাদের সাথে সদ্ভাবে চলো। নির্দিষ্ট আদেশে আনুগত্য প্রত্যাখ্যান করা হয়; সদাচরণ চলতে থাকে।"
          },
          {
            "en": "That distinction carries a great deal. Birr, kind treatment, is owed; ta'ah, obedience in a particular instruction, is not owed where it means disobeying Allah, and the scholars have never read ihsan as a duty to accept harm. A person estranged from a parent for real reasons is not outside the verse. Speech that stays civil, help that is real but bounded, and the du'a of 17:24 remain open even where daily closeness is not possible or not safe.",
            "bn": "এই পার্থক্যটি অনেক কিছু বহন করে। বির্র বা সদাচরণ প্রাপ্য; কিন্তু তা‘আত অর্থাৎ নির্দিষ্ট নির্দেশে আনুগত্য সেখানে প্রাপ্য নয় যেখানে তা আল্লাহর অবাধ্যতা মানে, আর আলিমগণ কখনোই ইহসানকে ক্ষতি মেনে নেওয়ার দায়িত্ব হিসেবে পড়েননি। বাস্তব কারণে পিতামাতা থেকে দূরে থাকা মানুষটিও আয়াতের বাইরে নয়। ভদ্র থাকা কথা, সীমিত কিন্তু সত্যিকারের সাহায্য, আর 17:24 আয়াতের দোয়া — এসব খোলা থাকে তখনো, যখন প্রতিদিনের ঘনিষ্ঠতা সম্ভব নয় বা নিরাপদ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "In Practice, and Today",
          "bn": "আমল ও আজকের জীবন"
        },
        "p": [
          {
            "en": "The Sunnah puts this duty very high. In Sahih al-Bukhari, asked which deed is most beloved to Allah, the Prophet ﷺ named prayer at its time, then kindness to parents, then striving in the way of Allah — parents ranked above the battlefield. A man seeking permission to go out and fight was asked whether his parents were living and told to strive in serving them. Sahih Muslim records the warning that one whose parents reach old age and who does not thereby enter Paradise has been brought low.",
            "bn": "সুন্নাহ এই দায়িত্বকে অত্যন্ত উঁচুতে রাখে। সহীহ বুখারীতে আছে, কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয় জিজ্ঞেস করা হলে নবী ﷺ বলেন সময়মতো নামাজ, তারপর পিতামাতার সাথে সদাচরণ, তারপর আল্লাহর পথে সংগ্রাম — অর্থাৎ পিতামাতা রণাঙ্গনেরও ওপরে। এক ব্যক্তি যুদ্ধে যাওয়ার অনুমতি চাইতে এলে তাকে জিজ্ঞেস করা হয় তার পিতামাতা জীবিত কি না, এবং বলা হয় তাদের সেবাতেই সংগ্রাম করতে। আর সহীহ মুসলিম সেই সতর্কবাণী সংরক্ষণ করেছে যে যার পিতামাতা বার্ধক্যে পৌঁছেছে অথচ সে এর মাধ্যমে জান্নাতে প্রবেশ করতে পারল না, সে লাঞ্ছিত হলো।"
          },
          {
            "en": "Lived out now, it is mostly small and unglamorous. It is answering the same question again without the sigh. It is not finishing their sentences, not correcting their memory before guests, not treating the phone call as an interruption. It is a visit not attached to an errand. And where distance, illness or history make more impossible, it is the sentence taught at the end of 17:24, said honestly, on a day when nothing else could be done.",
            "bn": "আজকের জীবনে এর রূপ বেশিরভাগই ছোট ও জৌলুসহীন। এটি একই প্রশ্নের উত্তর আবার দেওয়া, দীর্ঘশ্বাস ছাড়াই। এটি তাঁদের বাক্য শেষ করে না দেওয়া, অতিথিদের সামনে তাঁদের স্মৃতি শুধরে না দেওয়া, ফোনকলটিকে বিঘ্ন মনে না করা। এটি এমন এক সাক্ষাৎ যার সাথে কোনো কাজ জুড়ে নেই। আর যেখানে দূরত্ব, অসুস্থতা বা অতীত ইতিহাস এর বেশি কিছু অসম্ভব করে তোলে, সেখানে এটি 17:24 আয়াতের শেষে শেখানো সেই বাক্যটি — আন্তরিকভাবে বলা, এমন এক দিনে যেদিন আর কিছুই করার ছিল না।"
          }
        ]
      }
    ]
  },
  "17:26": {
    "sections": [
      {
        "h": {
          "en": "Inside a Charter",
          "bn": "একটি সনদের ভেতরে"
        },
        "p": [
          {
            "en": "This verse belongs to the run of commands in Surah al-Isra that begins with worshipping none but Allah and treating parents well. 17:23-24 gives the parents their due, down to the single syllable a child may not say to them, and 17:25 reminds the reader that his Lord knows best what is inside him. Then the circle widens. From the two people a person owes most, the command moves outward to relatives, the poor and the stranded traveller, and it does so in ten Arabic words.",
            "bn": "আয়াতটি সূরা আল-ইসরার সেই নির্দেশমালার অংশ, যা শুরু হয় আল্লাহ ছাড়া কারও ইবাদত না করা এবং পিতামাতার সঙ্গে সদাচরণ দিয়ে। 17:23-24 আয়াতে পিতামাতার প্রাপ্য দেওয়া হয়, এমনকি সন্তান তাঁদের যে একটি শব্দও বলতে পারবে না তা পর্যন্ত বলে দেওয়া হয়; আর 17:25 আয়াতে পাঠককে মনে করিয়ে দেওয়া হয় যে তার প্রতিপালক তার ভেতরে যা আছে তা সবচেয়ে ভালো জানেন। এরপর বৃত্তটি চওড়া হয়। যে দুজনের কাছে মানুষ সবচেয়ে বেশি ঋণী, সেখান থেকে নির্দেশ বাইরের দিকে যায় আত্মীয়, দরিদ্র ও পথে আটকে পড়া মুসাফিরের দিকে — আর তা করে আরবিতে দশটি শব্দে।"
          }
        ]
      },
      {
        "h": {
          "en": "Give Him His Right",
          "bn": "তার প্রাপ্য তাকে দাও"
        },
        "p": [
          {
            "en": "The verb is ati, give, and the object is haqqahu — his right. Not his share, not a gift, not charity in the sense of something the giver may withhold without wronging anyone. The pronoun attaches the right to the recipient. Whatever a person decides to hand over, the Quran has already assigned ownership of it before the decision was reached, and that changes the emotional colour of the transaction entirely: there is nothing here to be thanked for.",
            "bn": "ক্রিয়াটি 'আতি' — দাও; আর কর্মটি 'হাক্বক্বাহু' — তার অধিকার। তার ভাগ নয়, উপহার নয়, এমন দানও নয় যা দাতা কাউকে না ঠকিয়েই আটকে রাখতে পারে। সর্বনামটি অধিকারটিকে গ্রহীতার সঙ্গে জুড়ে দেয়। মানুষ যা-ই হাতে তুলে দিতে ঠিক করুক, সিদ্ধান্তে পৌঁছানোর আগেই কুরআন তার মালিকানা নির্ধারণ করে রেখেছে; আর এতে লেনদেনটির আবেগের রংই পুরো বদলে যায়: এখানে কৃতজ্ঞতা পাওয়ার মতো কিছু নেই।"
          },
          {
            "en": "The same phrasing recurs wherever the Quran discusses wealth. 30:38 repeats the command almost word for word and adds that this is best for those who desire the face of Allah. 70:24-25 says that in the wealth of the believers is a known right for the petitioner and the deprived, and 51:19 says that from their properties was the right of the petitioner and the deprived. In 2:177 giving wealth to these same categories, in spite of love for it, is placed inside the definition of righteousness itself.",
            "bn": "কুরআন যেখানেই সম্পদ নিয়ে আলোচনা করে, সেখানেই এই ভাষাভঙ্গি ফিরে আসে। 30:38 আয়াতে নির্দেশটি প্রায় হুবহু পুনরাবৃত্ত হয়, সঙ্গে যোগ করা হয় যে যারা আল্লাহর চেহারা কামনা করে তাদের জন্য এটিই উত্তম। 70:24-25 আয়াতে বলা হয়, মুমিনদের সম্পদে প্রার্থী ও বঞ্চিতের জন্য একটি সুবিদিত অধিকার আছে; আর 51:19 আয়াতে বলা হয়, তাদের ধনসম্পদে ছিল প্রার্থী ও বঞ্চিতের অধিকার। 2:177 আয়াতে সম্পদের প্রতি ভালোবাসা থাকা সত্ত্বেও এই একই শ্রেণিগুলোকে দান করাকে রাখা হয়েছে খোদ 'বির'-এর সংজ্ঞার ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Three Named",
          "bn": "নামোল্লিখিত তিনজন"
        },
        "p": [
          {
            "en": "Three recipients are named, and they are not three degrees of poverty. Dha al-qurba is defined by relationship. Al-miskin is defined by need. Ibn as-sabil, literally the son of the road, is defined by circumstance — a traveller may be comfortable at home and stranded here, which is why the Quran keeps listing him separately in 8:41, 59:7 and 9:60 rather than folding him into the poor. Reading the three together prevents the common narrowing of giving to whoever looks poorest, and puts kinship, need and situation each on its own footing.",
            "bn": "তিনজন প্রাপকের নাম বলা হয়েছে, আর এরা দারিদ্র্যের তিনটি স্তর নয়। 'যাল-কুরবা' নির্ধারিত হয় সম্পর্ক দিয়ে। 'আল-মিসকীন' নির্ধারিত হয় প্রয়োজন দিয়ে। 'ইবনুস সাবীল' — আক্ষরিক অর্থে পথের সন্তান — নির্ধারিত হয় পরিস্থিতি দিয়ে; একজন মুসাফির নিজের ঘরে সচ্ছল হয়েও এখানে আটকে পড়তে পারে, আর সে কারণেই কুরআন তাকে দরিদ্রদের সঙ্গে মিশিয়ে না ফেলে আলাদা করে উল্লেখ করে যায় 8:41, 59:7 ও 9:60 আয়াতে। তিনটিকে একসঙ্গে পড়লে দান কেবল সবচেয়ে গরিব দেখতে মানুষটির দিকে সংকুচিত হয়ে পড়ে না, বরং আত্মীয়তা, প্রয়োজন ও পরিস্থিতি — প্রত্যেকটি নিজের জায়গায় দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Squander",
          "bn": "অপচয় করো না"
        },
        "p": [
          {
            "en": "The verse ends on a prohibition: wa la tubadhdhir tabdhira. The Arabic repeats the root, verb followed by its own verbal noun, a construction that intensifies rather than adds new information. Placing it in the same breath as the command to give is deliberate, because the two are not opposites. At-Tabari relates from Ibn Mas'ud (RA) and Ibn Abbas (RA) that tabdhir is spending in other than the rightful way, and from Mujahid the sharper formulation that a man who spent all his wealth rightly would not be a squanderer, while one who spent a little wrongly would be.",
            "bn": "আয়াতটি শেষ হয় একটি নিষেধাজ্ঞায়: ওয়া লা তুবাযযির তাবযীরা। আরবিতে মূল ধাতুটি পুনরাবৃত্ত হয়েছে — ক্রিয়া, তারপর তারই ক্রিয়াবাচক বিশেষ্য; এই গঠন নতুন তথ্য যোগ করে না, জোর বাড়ায়। দান করার নির্দেশের সঙ্গে একই নিঃশ্বাসে একে বসানো ইচ্ছাকৃত, কারণ দুটি পরস্পরবিরোধী নয়। তাবারী ইবনে মাস'ঊদ (রাঃ) ও ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে তাবযীর হলো ন্যায্য পথ ছাড়া অন্য কোথাও ব্যয় করা; আর মুজাহিদ থেকে আরও ধারালো রূপে: যে ব্যক্তি তার সমস্ত সম্পদ ন্যায্য পথে ব্যয় করল সে অপচয়কারী নয়, আর যে অন্যায় পথে সামান্যও ব্যয় করল সে অপচয়কারী।"
          },
          {
            "en": "The commentators distinguish tabdhir from israf: israf is too much in a right place, tabdhir is anything at all in a wrong one. The next verse, 17:27, supplies the reason for the ban in the strongest language the Quran uses about spending — the squanderers are brothers of the devils, and Shaytan was ever ungrateful to his Lord. Waste is treated as ingratitude rather than as poor budgeting. A few verses later 17:29 draws both edges: neither a hand chained to the neck nor one stretched out completely.",
            "bn": "মুফাসসিরগণ তাবযীর ও ইসরাফের মধ্যে পার্থক্য করেন: ইসরাফ হলো ঠিক জায়গায় মাত্রাতিরিক্ত ব্যয়, আর তাবযীর হলো ভুল জায়গায় সামান্য ব্যয়ও। পরের আয়াত, 17:27, নিষেধাজ্ঞার কারণটি দেয় ব্যয় সম্পর্কে কুরআনের সবচেয়ে কঠিন ভাষায় — অপচয়কারীরা শয়তানের ভাই, আর শয়তান তার প্রতিপালকের প্রতি চিরকালই অকৃতজ্ঞ। অপচয়কে এখানে দুর্বল হিসাবরক্ষণ নয়, অকৃতজ্ঞতা হিসেবে দেখা হয়েছে। কয়েক আয়াত পরে 17:29 আয়াতে দুই প্রান্তই টেনে দেওয়া হয়: হাত গলার সঙ্গে বেঁধেও রেখো না, আবার একেবারে প্রসারিত করেও দিও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Relatives First",
          "bn": "আগে আত্মীয়"
        },
        "p": [
          {
            "en": "The order of the three names is itself instruction, and the sunnah presses it. At-Tirmidhi relates from Salman ibn Amir (RA) that charity given to a poor person is one charity, while charity given to a relative is two — a charity and a joining of kinship. Relatives are the hardest category, because history, grievance and pride are all in the room, and because a needy relative is the one person a giver can most easily tell himself has other options. The verse arrives before the excuse does.",
            "bn": "তিনটি নামের ক্রমটিই একটি শিক্ষা, আর সুন্নাহ এর ওপর জোর দেয়। তিরমিযী সালমান ইবনে আমির (রাঃ) থেকে বর্ণনা করেন, দরিদ্রকে দেওয়া সদকা একটি সদকা, আর আত্মীয়কে দেওয়া সদকা দুটি — একটি সদকা এবং একটি আত্মীয়তার বন্ধন রক্ষা। আত্মীয়রাই সবচেয়ে কঠিন শ্রেণি, কারণ সেখানে অতীত, অভিমান ও অহংকার সবই ঘরের ভেতরে থাকে, আর কারণ অভাবী আত্মীয়ই সেই একজন যার সম্পর্কে দাতা সবচেয়ে সহজে নিজেকে বোঝাতে পারে যে তার আরও উপায় আছে। আয়াতটি অজুহাতের আগেই পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "When There Is Nothing to Give",
          "bn": "যখন দেওয়ার কিছু থাকে না"
        },
        "p": [
          {
            "en": "The passage anticipates the empty pocket. 17:28 says that if you must turn away from them while awaiting a mercy from your Lord that you yourself are hoping for, then speak to them a gentle word. Nothing in that permits the curt dismissal people who cannot give often reach for out of embarrassment. Taken whole, the instruction is practical and small: know who has a claim on you, set their portion aside before it becomes a matter of mood, cut what is going nowhere, and keep the tone soft in the month when there is nothing to send.",
            "bn": "অনুচ্ছেদটি খালি পকেটের কথাও আগেই ভেবে রেখেছে। 17:28 আয়াতে বলা হয়, তুমি যদি তোমার প্রতিপালকের এমন এক অনুগ্রহের প্রত্যাশায় থেকে তাদের পাশ কাটাতে বাধ্য হও যা তুমি নিজেই আশা করছ, তবে তাদের সঙ্গে নম্রভাবে কথা বলো। এতে সেই রূঢ় বিদায়ের কোনো অনুমতি নেই, যা দিতে না পারা মানুষ প্রায়ই লজ্জা ঢাকতে ব্যবহার করে। পুরোটা একসঙ্গে নিলে নির্দেশনাটি ব্যবহারিক ও ছোট: কে তোমার ওপর দাবি রাখে তা জানো, মেজাজের ব্যাপার হয়ে ওঠার আগেই তাদের অংশটা আলাদা করে রাখো, যা কোথাও যাচ্ছে না তা ছেঁটে ফেলো, আর যে মাসে পাঠানোর মতো কিছু নেই সে মাসে কণ্ঠস্বরটি নরম রাখো।"
          }
        ]
      }
    ]
  },
  "17:37": {
    "sections": [
      {
        "h": {
          "en": "A Ring of Commands",
          "bn": "আদেশের একটি বলয়"
        },
        "p": [
          {
            "en": "This verse sits inside a run of instructions in Surah al-Isra that begins at 17:22 with the ban on setting up another god beside Allah, and closes at 17:39 by repeating that same ban and calling everything between it wisdom your Lord has revealed. The commands enclosed by that ring are startlingly ordinary: parents, relatives and the traveller, spending neither chained nor overstretched, children, chastity, life, the orphan's property, contracts, honest weights.",
            "bn": "এই আয়াতটি সূরা আল-ইসরার এমন এক ধারাবাহিক নির্দেশনার ভেতরে বসে আছে, যা শুরু হয় 17:22 আয়াতে আল্লাহর সাথে অন্য ইলাহ স্থির করার নিষেধাজ্ঞা দিয়ে, আর শেষ হয় 17:39 আয়াতে সেই একই নিষেধাজ্ঞার পুনরাবৃত্তি করে এবং মাঝের সবকিছুকে 'তোমার প্রতিপালকের নাযিল করা হিকমাহ' বলে। সেই বলয়ের ভেতরে ঘেরা আদেশগুলো বিস্ময়করভাবে সাধারণ: পিতামাতা, আত্মীয় ও পথিক, হাত না বাঁধা ও না ছড়ানো ব্যয়, সন্তান, সতীত্ব, প্রাণ, এতিমের সম্পদ, অঙ্গীকার, সঠিক ওজন।"
          },
          {
            "en": "Immediately before this verse, 17:36 forbids pursuing what you have no knowledge of, and immediately after it, 17:38 delivers the verdict on the whole list: the evil of all that is, with your Lord, detested. So how a person walks is placed in the same series as murder and false measure, and is covered by the same verdict. That placement is the first thing the verse says.",
            "bn": "এই আয়াতের ঠিক আগে 17:36 আয়াত নিষেধ করে সেই বিষয়ের পিছু নিতে যে বিষয়ে কোনো জ্ঞান নেই, আর ঠিক পরে 17:38 আয়াত পুরো তালিকাটির ওপর রায় দেয়: এসবের মধ্যে যা মন্দ তা তোমার প্রতিপালকের কাছে ঘৃণিত। অর্থাৎ একজন মানুষ কীভাবে হাঁটে সেটিকে হত্যা ও ওজনে কম দেওয়ার সাথে একই ধারাবাহিকতায় রাখা হয়েছে, আর একই রায়ের আওতায় আনা হয়েছে। আয়াতটির প্রথম কথাই এই অবস্থান।"
          }
        ]
      },
      {
        "h": {
          "en": "Marah Is a Bearing",
          "bn": "মারাহ একটি ভঙ্গি"
        },
        "p": [
          {
            "en": "La tamshi fi'l-ardi maraha. Marah is not speed and not a style of stride; it is exultation, the delighted self-regard that a body broadcasts without meaning to. Arabic puts the word in a form that describes the state of the walker rather than the walking, so the verse is aimed at the man and not at his legs. The contrast is drawn elsewhere: 25:63 describes the servants of the Most Merciful walking hawnan, at ease, and 31:19 tells Luqman's son to be moderate in his pace.",
            "bn": "'লা তামশি ফিল-আরদি মারাহা'। 'মারাহ' মানে গতি নয়, পা ফেলার কোনো কায়দাও নয়; এর অর্থ উল্লাস — নিজেকে নিয়ে সেই মুগ্ধ তৃপ্তি যা শরীর নিজের অজান্তেই ছড়িয়ে দেয়। আরবি শব্দটিকে এমন গঠনে রাখে যা হাঁটার নয়, হাঁটা মানুষটির অবস্থার বর্ণনা দেয়; ফলে আয়াতটি তার পায়ের দিকে নয়, তার দিকেই তাক করা। তুলনাটি অন্যত্র টানা হয়েছে: 25:63 আয়াতে পরম দয়াময়ের বান্দাদের বর্ণনা এসেছে 'হাওনান' অর্থাৎ নম্রভাবে চলার মধ্য দিয়ে, আর 31:19 আয়াতে লুকমান তাঁর ছেলেকে বলেন চলাফেরায় সংযত হতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Things You Cannot Do",
          "bn": "দুটি কাজ যা আপনি পারবেন না"
        },
        "p": [
          {
            "en": "The reason given is physical and slightly comic. You will never tear the earth apart, and you will never reach the mountains in height. One measurement points down and the other up, and the proud walker is pinned between them: he cannot break what is under his feet and he cannot match what stands over his head. Both limits are stated with lan, the same emphatic negation Arabic uses to rule a thing out for good. The verse does not argue that pride is wrong. It simply shows the proud man his actual dimensions and leaves him there.",
            "bn": "যে কারণটি দেওয়া হয়েছে তা শারীরিক এবং সামান্য কৌতুকপূর্ণ। তুমি কখনোই যমীনকে বিদীর্ণ করতে পারবে না, আর উচ্চতায় কখনোই পর্বতের সমান হতে পারবে না। একটি মাপ নিচের দিকে নির্দেশ করে, অন্যটি উপরের দিকে, আর গর্বিত পথচারী দুটির মাঝখানে আটকে থাকে: পায়ের নিচে যা আছে তা সে ভাঙতে পারে না, আর মাথার ওপরে যা দাঁড়িয়ে আছে তার সমানও হতে পারে না। দুটি সীমাই ঘোষিত হয়েছে 'লান' দিয়ে — আরবি যে জোরালো নেতিবাচক শব্দ দিয়ে কোনো কিছুকে চিরতরে নাকচ করে দেয়। আয়াতটি যুক্তি দিয়ে প্রমাণ করতে বসে না যে অহংকার খারাপ। এটি কেবল অহংকারীকে তার প্রকৃত মাপটি দেখিয়ে দিয়ে ছেড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Kibr Actually Lives",
          "bn": "কিবর আসলে কোথায় থাকে"
        },
        "p": [
          {
            "en": "It would be easy to reduce this to a rule about clothes and gait, and the sunnah blocks that. Muslim relates from Ibn Mas'ud (RA) that the Prophet ﷺ said no one with an atom's weight of kibr in his heart will enter Paradise. A man asked about a person who likes his garment and his sandals to be good, and the Prophet ﷺ answered that Allah is beautiful and loves beauty, and that kibr is rejecting the truth and looking down on people.",
            "bn": "এটিকে কেবল পোশাক ও চলনভঙ্গির নিয়মে নামিয়ে আনা সহজ হতো, কিন্তু সুন্নাহ সেই পথ বন্ধ করে দেয়। মুসলিম ইবনে মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, যার অন্তরে অণু পরিমাণ কিবর আছে সে জান্নাতে প্রবেশ করবে না। এক ব্যক্তি জিজ্ঞেস করলেন এমন মানুষের কথা যে চায় তার কাপড় ও জুতা সুন্দর হোক; নবী ﷺ জবাব দিলেন যে আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন, আর কিবর হলো সত্যকে প্রত্যাখ্যান করা ও মানুষকে তুচ্ছ জ্ঞান করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man the Earth Swallowed",
          "bn": "যে মানুষকে যমীন গিলে নিল"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that a man was walking in a garment that pleased him, his hair combed, his manner proud, when Allah caused the earth to swallow him, and he goes on sinking into it until the Day of Resurrection. Set that beside the verse and the irony is exact. He was told he would never tear the earth apart; in the end the earth opened for him, not by his strength, and did not give him back.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে এক ব্যক্তি এমন এক পোশাকে হাঁটছিল যা তাকে মুগ্ধ করছিল, তার চুল আঁচড়ানো, তার ভঙ্গি গর্বিত — তখন আল্লাহ তাকে যমীনে ধসিয়ে দিলেন, আর সে কিয়ামত পর্যন্ত তাতে ডুবতেই থাকবে। ঘটনাটি আয়াতের পাশে রাখলে বৈপরীত্যটি নিখুঁত। তাকে বলা হয়েছিল সে কখনোই যমীনকে বিদীর্ণ করতে পারবে না; শেষপর্যন্ত যমীন তার জন্য খুলে গেল — তার নিজের শক্তিতে নয় — এবং তাকে আর ফিরিয়ে দিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Without an Audience",
          "bn": "দর্শক ছাড়া হাঁটা"
        },
        "p": [
          {
            "en": "The verse is worth keeping because it targets something nobody thinks to work on. Fasting is practised, prayer is counted, charity is recorded; bearing is not. Yet bearing is what other people meet first, and it is remarkably honest about what is inside — how a person enters a room, how his voice changes when the listener cannot answer back, what happens to his posture when a title arrives.",
            "bn": "আয়াতটি ধরে রাখার মতো, কারণ এটি এমন কিছুকে লক্ষ্য করে যা নিয়ে কাজ করার কথা কারও মাথায় আসে না। রোযার অনুশীলন হয়, নামায গোনা হয়, দান লিপিবদ্ধ হয়; ভঙ্গি নয়। অথচ অন্য মানুষ সবার আগে ভঙ্গিটিরই মুখোমুখি হয়, আর ভেতরে কী আছে সে বিষয়ে ভঙ্গি অসাধারণ রকম সৎ — একজন কীভাবে ঘরে ঢোকে, শ্রোতা পাল্টা জবাব দিতে না পারলে তার কণ্ঠস্বর কীভাবে বদলায়, কোনো পদবি এসে গেলে তার দাঁড়ানোর ভঙ্গির কী হয়।"
          },
          {
            "en": "The same closing description of the proud, mukhtal fakhur, appears in 4:36 and in 31:18 and again in 57:23, and 28:83 assigns the home of the Hereafter to those who want no exaltedness on the earth. The correction is not a performance of humility, which the commentators of 25:63 warn against as its own kind of display. It is simply walking as a person who knows he can neither split the ground nor grow to the height of a hill.",
            "bn": "অহংকারীর সেই একই সমাপ্তি-বর্ণনা, মুখতাল ফাখূর, এসেছে 4:36 আয়াতে, 31:18 আয়াতে এবং আবার 57:23 আয়াতে; আর 28:83 আয়াতে আখিরাতের ঘর নির্দিষ্ট করা হয়েছে তাদের জন্য যারা যমীনে ঔদ্ধত্য চায় না। সংশোধনটি বিনয়ের কোনো অভিনয় নয় — 25:63 আয়াতের মুফাসসিরগণ সে ধরনের প্রদর্শনী থেকেই সতর্ক করেন। সংশোধনটি কেবল এমনভাবে হাঁটা, যেভাবে হাঁটে সেই মানুষ যে জানে সে না মাটি ফাটাতে পারে, না পাহাড়ের উচ্চতায় বাড়তে পারে।"
          }
        ]
      }
    ]
  },
  "17:44": {
    "sections": [
      {
        "h": {
          "en": "One God, Then a Singing Universe",
          "bn": "এক ইলাহ, তারপর গানরত মহাবিশ্ব"
        },
        "p": [
          {
            "en": "The verse stands at the end of a short argument. In 17:42 the Quran reasons: had there been other gods with Him, as they claim, those gods would have sought a way to the Owner of the Throne. Then 17:43 declares Him exalted, high above everything they say. Having silenced the false claim, the passage turns the volume up on the true one: the seven heavens and the earth and whoever is within them declare His perfection.",
            "bn": "আয়াতটি দাঁড়িয়ে আছে একটি সংক্ষিপ্ত যুক্তির শেষে। 17:42 আয়াতে কুরআন যুক্তি দেয়: তারা যেমন দাবি করে, তেমন তাঁর সাথে অন্য ইলাহ থাকলে সেই ইলাহরা আরশের মালিকের দিকে পথ খুঁজত। তারপর 17:43 আয়াত ঘোষণা করে — তারা যা বলে তিনি তার অনেক ঊর্ধ্বে, মহিমান্বিত। মিথ্যা দাবিকে স্তব্ধ করে অনুচ্ছেদটি এবার সত্য ঘোষণার আওয়াজ বাড়িয়ে দেয়: সাত আসমান, যমীন আর তাদের মধ্যে যারা আছে সবাই তাঁর পূর্ণতা ঘোষণা করে।"
          },
          {
            "en": "Then the verse widens past all counting: there is not a single thing that does not glorify Him with His praise — but you do not understand their glorification. It closes with two names, Halim and Ghafur, Forbearing and Forgiving. The structure moves from the named realms, seven heavens and one earth, to an absolute: wa-in min shay'in, nothing whatsoever excluded. Whatever exists, by existing, is already engaged in the work the idolaters refused.",
            "bn": "তারপর আয়াতটি সব গণনার সীমা ছাড়িয়ে যায়: এমন একটি জিনিসও নেই যা তাঁর প্রশংসাসহ তাঁর তাসবীহ পড়ে না — কিন্তু তোমরা তাদের তাসবীহ বোঝো না। শেষ হয় দুটি নামে — হালীম ও গাফূর, পরম সহনশীল ও ক্ষমাশীল। কাঠামোটি এগোয় নামাঙ্কিত জগৎ থেকে — সাত আসমান ও এক যমীন — এক নিরঙ্কুশ ঘোষণায়: ওয়া-ইন মিন শাইইন, কোনো কিছুই বাদ নেই। যা কিছু আছে, থাকার মধ্য দিয়েই সে সেই কাজে রত, যা মূর্তিপূজারীরা অস্বীকার করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Glorifying, with His Praise",
          "bn": "তাঁর প্রশংসার সাথে তাসবীহ"
        },
        "p": [
          {
            "en": "The verb is tusabbihu, a present tense that pictures action renewed moment by moment, not a finished fact. The mufassirun note that the surahs of glorification open with both tenses — sabbaha, the past, in 57:1, and yusabbihu, the present, in 62:1 — so that between them all of time is covered. And the verse does not say the creatures merely glorify; they glorify bi-hamdihi, with His praise: declaring Him free of every defect and, in the same breath, affirming for Him every perfection.",
            "bn": "ক্রিয়াপদটি তুসাব্বিহু — বর্তমান কাল, যা মুহূর্তে মুহূর্তে নবায়িত কাজের ছবি আঁকে, সমাপ্ত কোনো ঘটনার নয়। মুফাসসিরগণ লক্ষ করেন, তাসবীহর সূরাগুলো দুই কাল দিয়েই শুরু হয় — 57:1 আয়াতে অতীত রূপ সাব্বাহা, আর 62:1 আয়াতে বর্তমান রূপ ইউসাব্বিহু — যেন দুয়ে মিলে সমস্ত সময় ঢেকে যায়। আর আয়াতটি বলে না যে সৃষ্টিরা কেবল তাসবীহ পড়ে; তারা পড়ে বি-হামদিহী — তাঁর প্রশংসার সাথে: তাঁকে প্রতিটি ত্রুটি থেকে মুক্ত ঘোষণা করা, আর একই নিঃশ্বাসে তাঁর জন্য প্রতিটি পূর্ণতা সাব্যস্ত করা।"
          },
          {
            "en": "That pairing is the one the Prophet ﷺ loved on the tongue. The hadith with which al-Bukhari chooses to close his entire Sahih runs: two phrases, light on the tongue, heavy in the scales, beloved to ar-Rahman — subhanallahi wa bihamdihi, subhanallahil-azim. To say subhanallahi wa bihamdihi is to do knowingly, in words, what this verse says every part of the universe is doing already in a manner we cannot hear.",
            "bn": "এই জুটিই নবী ﷺ-এর কাছে জিহ্বায় প্রিয় ছিল। যে হাদীস দিয়ে বুখারী তাঁর গোটা সহীহ শেষ করতে বেছে নেন, তা হলো: দুটি বাক্য — জিহ্বায় হালকা, পাল্লায় ভারী, আর-রহমানের কাছে প্রিয় — সুবহানাল্লাহি ওয়া বিহামদিহী, সুবহানাল্লাহিল-আযীম। সুবহানাল্লাহি ওয়া বিহামদিহী বলা মানে সজ্ঞানে, শব্দে সেই কাজটিই করা, যা এই আয়াতের ভাষ্যমতে মহাবিশ্বের প্রতিটি অংশ এরই মধ্যে করছে — এমনভাবে, যা আমরা শুনতে পাই না।"
          }
        ]
      },
      {
        "h": {
          "en": "Real Praise or Figure of Speech?",
          "bn": "বাস্তব তাসবীহ, না ভাষার অলঙ্কার?"
        },
        "p": [
          {
            "en": "The commentators record two readings, and it is honest to state both. Some hold that things glorify by their state: every creature's design points to its Maker, as a well-made work praises its craftsman. Many others hold that it is a real glorification which we simply cannot perceive, arguing from the verse's own words — it says you do not understand their tasbih, while the silent witness of design is something everyone understands. Ibn Kathir gathers the reports that support this second reading.",
            "bn": "মুফাসসিরগণ দুটি পাঠ লিপিবদ্ধ করেছেন, আর দুটিই সরাসরি বলা সততার দাবি। কেউ কেউ মনে করেন, বস্তুরা তাদের অবস্থা দিয়ে তাসবীহ পড়ে: প্রতিটি সৃষ্টির গড়ন তার নির্মাতার দিকে ইশারা করে, যেমন সুনির্মিত কাজ তার কারিগরের প্রশংসা করে। আর অনেকে মনে করেন এটি বাস্তব তাসবীহ, যা আমরা কেবল টের পাই না; তাঁদের যুক্তি আয়াতের নিজের শব্দ থেকে — বলা হয়েছে, তোমরা তাদের তাসবীহ বোঝো না, অথচ গড়নের নীরব সাক্ষ্য তো সবাই বোঝে। ইবনে কাসীর এই দ্বিতীয় পাঠের সমর্থক বর্ণনাগুলো একত্র করেছেন।"
          },
          {
            "en": "Revelation attests particular cases. In 38:18 the mountains are made to glorify with Dawud (AS) in the evening and at sunrise, and in 13:13 the thunder glorifies with His praise. Abdullah ibn Mas'ud (RA) said, as al-Bukhari relates, that the companions used to hear the food glorifying while it was being eaten in the presence of the Prophet ﷺ. What is exceptional in these reports is not that creation praised, but that human ears were briefly allowed to hear it.",
            "bn": "ওহী নির্দিষ্ট কিছু ঘটনাও সাক্ষ্য দেয়। 38:18 আয়াতে পাহাড়গুলোকে দাউদ (আঃ)-এর সাথে সন্ধ্যায় ও সূর্যোদয়ে তাসবীহে নিয়োজিত করা হয়, আর 13:13 আয়াতে বজ্র তাঁর প্রশংসাসহ তাসবীহ পড়ে। আবদুল্লাহ ইবনে মাসউদ (রাঃ) বলেছেন — বুখারী তা বর্ণনা করেন — নবী ﷺ-এর সামনে খাবার খাওয়ার সময় সাহাবীগণ খাবারের তাসবীহ শুনতে পেতেন। এই বর্ণনাগুলোতে ব্যতিক্রম এটা নয় যে সৃষ্টি প্রশংসা করেছে; ব্যতিক্রম হলো, মানুষের কানকে ক্ষণিকের জন্য তা শুনতে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What We Do Not Understand",
          "bn": "যা আমরা বুঝি না"
        },
        "p": [
          {
            "en": "You do not understand their glorification — the verb is tafqahuna, from the root of fiqh, deep comprehension. The clause states our deafness as plain fact, and in doing so it disciplines a common assumption: that what we cannot detect must not exist. The universe holds a continuous act of worship our instruments have never once recorded. A person who accepts that finding walks differently through the world — more careful with claims of knowledge, more suspicious of the confidence that silence proves absence.",
            "bn": "তোমরা তাদের তাসবীহ বোঝো না — ক্রিয়াপদটি তাফকাহূনা, ফিকহ মূল থেকে, গভীর উপলব্ধি। বাক্যাংশটি আমাদের বধিরতাকে সরল সত্য হিসেবে জানায়, আর তা করতে গিয়ে একটি প্রচলিত অনুমানকে শাসন করে: আমরা যা শনাক্ত করতে পারি না তা নিশ্চয়ই নেই। মহাবিশ্ব ধারণ করে আছে এক অবিরাম ইবাদত, যা আমাদের যন্ত্র একবারও রেকর্ড করেনি। এই সত্য মেনে নেওয়া মানুষ পৃথিবীর ভেতর দিয়ে অন্যভাবে হাঁটে — জ্ঞানের দাবিতে আরও সাবধান, আর নীরবতাই অনুপস্থিতির প্রমাণ — এই আত্মবিশ্বাসের ব্যাপারে আরও সন্দিহান।"
          },
          {
            "en": "The same widening appears in 22:18, where the sun, the moon, the stars, the mountains, the trees, the moving creatures and many of mankind all prostrate to Allah — and the exception in that verse is telling. Only among human beings does the verse note a portion for whom punishment is due. Stones have no choice to withhold; we do. That is precisely why our deliberate tasbih carries a worth that the ocean's cannot.",
            "bn": "একই প্রশস্ততা দেখা যায় 22:18 আয়াতে, যেখানে সূর্য, চাঁদ, তারা, পাহাড়, গাছ, বিচরণশীল প্রাণী এবং মানুষের অনেকে — সবাই আল্লাহকে সিজদা করে; আর ওই আয়াতের ব্যতিক্রমটুকুই তাৎপর্যপূর্ণ। কেবল মানুষের মধ্যেই আয়াতটি এমন এক অংশের কথা বলে, যাদের ওপর শাস্তি অবধারিত হয়েছে। পাথরের কাছে বিরত থাকার কোনো বিকল্প নেই; আমাদের আছে। ঠিক এ কারণেই আমাদের সজ্ঞান তাসবীহ এমন এক মূল্য বহন করে, যা সমুদ্রের তাসবীহ পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Forbearing, Why Forgiving",
          "bn": "কেন হালীম, কেন গাফূর"
        },
        "p": [
          {
            "en": "The ending seems abrupt until the context returns. This passage answers people who spoke of Allah in ways the heavens can barely bear — 19:90-91 says the heavens are almost torn apart at the claim that ar-Rahman has taken a son. Surrounded by a creation that praises Him, He hears creatures who insult Him, and He does not hasten their punishment. Halim is the One whose power is never panicked into striking; Ghafur is the One who covers and forgives those who turn back.",
            "bn": "প্রসঙ্গ ফিরে না আসা পর্যন্ত সমাপ্তিটি আকস্মিক মনে হয়। এই অনুচ্ছেদ তাদের জবাব, যারা আল্লাহ সম্পর্কে এমন কথা বলেছে যা আসমান সইতে পারে না — 19:90-91 আয়াত বলে, আর-রহমান সন্তান গ্রহণ করেছেন এই দাবিতে আসমান প্রায় বিদীর্ণ হয়ে যায়। তাঁর প্রশংসারত সৃষ্টিজগতে ঘেরা থেকেও তিনি শোনেন তাঁকে অপমানকারী প্রাণীদের, আর তাদের শাস্তিতে তাড়াহুড়ো করেন না। হালীম তিনি — যাঁর ক্ষমতা কখনো আতঙ্কে আঘাত হানে না; গাফূর তিনি — যিনি ঢেকে দেন এবং ফিরে আসা মানুষদের ক্ষমা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining the Chorus",
          "bn": "সেই সমবেত সঙ্গীতে যোগ দেওয়া"
        },
        "p": [
          {
            "en": "The verse changes what ordinary scenery is. Wind, rain, birdsong and the night sky are no longer backdrop; they are colleagues in worship, further along in constancy than we are. The practical response is small and immediate: let subhanallah become the tongue's resting position, said with its meaning — He is beyond every flaw. Whoever does so stops being a spectator of creation and becomes what this verse quietly assumes everything already is: a voice, among uncountable voices, praising the same Lord.",
            "bn": "আয়াতটি বদলে দেয় সাধারণ দৃশ্যপটের অর্থ। বাতাস, বৃষ্টি, পাখির গান আর রাতের আকাশ আর নিছক পটভূমি নয়; তারা ইবাদতের সহকর্মী — ধারাবাহিকতায় আমাদের চেয়ে এগিয়ে। ব্যবহারিক জবাবটি ছোট ও তাৎক্ষণিক: সুবহানাল্লাহ হয়ে উঠুক জিহ্বার বিশ্রাম-অবস্থান, অর্থসহ উচ্চারিত — তিনি প্রতিটি ত্রুটির ঊর্ধ্বে। যে তা করে, সে সৃষ্টির দর্শক থাকা বন্ধ করে এবং তা-ই হয়ে ওঠে, যা এই আয়াত নীরবে ধরে নেয় সবকিছু এরই মধ্যে আছে: অগণিত কণ্ঠের মাঝে একটি কণ্ঠ, একই রবের প্রশংসায়।"
          }
        ]
      }
    ]
  },
  "17:70": {
    "sections": [
      {
        "h": {
          "en": "Four Verbs About You",
          "bn": "আপনাকে নিয়ে চারটি ক্রিয়াপদ"
        },
        "p": [
          {
            "en": "The verse is built on four verbs, all first person plural: karramna, We honoured; wa hamalnahum, and We carried them; wa razaqnahum, and We provided them; wa faddalnahum, and We preferred them. It opens with wa laqad, an oath particle followed by an emphatic qad, which Arabic uses for a claim it wants heard as settled rather than argued. And the ones honoured are bani Adam, the children of Adam — the species, not the believers inside it.",
            "bn": "আয়াতটি দাঁড়িয়ে আছে চারটি ক্রিয়াপদের উপর, প্রতিটিই উত্তম পুরুষ বহুবচনে: কাররামনা — আমি সম্মানিত করেছি; ওয়া হামালনাহুম — আর আমি তাদের বহন করেছি; ওয়া রাযাকনাহুম — আর আমি তাদের রিযিক দিয়েছি; ওয়া ফাদ্দালনাহুম — আর আমি তাদের শ্রেষ্ঠত্ব দিয়েছি। শুরু হয় 'ওয়া লাকাদ' দিয়ে — শপথসূচক অব্যয়ের পর জোরদার 'কাদ', যা আরবিতে এমন দাবির জন্য ব্যবহৃত হয় যা তর্কের বিষয় নয়, মীমাংসিত হিসেবে শোনানোর বিষয়। আর যাদের সম্মানিত করা হয়েছে তারা 'বানী আদম' — আদম-সন্তান, গোটা মানবজাতি, তার ভেতরের মুমিনরা নয়।"
          },
          {
            "en": "All four verbs are in the perfect tense. The honouring is not offered as a promise to be earned or a reward held back pending conduct; it is reported as something already done. And no condition is attached anywhere in the sentence — no faith, no lineage and no deed qualifies or disqualifies anyone for it. Whatever the verse gives, it has already given, and it gave it to a species rather than to a party inside it.",
            "bn": "চারটি ক্রিয়াপদই অতীতকালের। এই সম্মান অর্জন-সাপেক্ষ কোনো প্রতিশ্রুতি নয়, আচরণের অপেক্ষায় আটকে রাখা কোনো পুরস্কারও নয়; এটি বর্ণিত হয়েছে ইতোমধ্যেই সম্পন্ন হওয়া কিছু হিসেবে। আর বাক্যটির কোথাও কোনো শর্ত জুড়ে দেওয়া হয়নি — ঈমান, বংশ বা আমল কোনোটিই কাউকে এর যোগ্য বা অযোগ্য করে না। আয়াতটি যা দেয়, তা আগেই দিয়ে ফেলেছে; আর দিয়েছে একটি প্রজাতিকে, তার ভেতরের কোনো দলকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sea It Answers",
          "bn": "যে সমুদ্রের জবাব এটি"
        },
        "p": [
          {
            "en": "The verses just before this one are about the sea. 17:66 says it is your Lord who drives the ship for you through the sea. 17:67 says that when harm touches you at sea, everyone you call upon besides Him is lost — and when He delivers you safely to land, you turn away. 17:68 and 17:69 then ask whether you feel secure that He will not cause the land to swallow you, or send a storm of wind.",
            "bn": "ঠিক আগের আয়াতগুলো সমুদ্র নিয়ে। 17:66 বলে, তিনিই তোমার রব যিনি সমুদ্রে তোমাদের জন্য নৌযান চালান। 17:67 বলে, সমুদ্রে যখন বিপদ তোমাদের স্পর্শ করে, তখন তিনি ছাড়া যাদের তোমরা ডাকতে তারা সব হারিয়ে যায় — আর তিনি যখন তোমাদের নিরাপদে ডাঙায় পৌঁছে দেন, তোমরা মুখ ফিরিয়ে নাও। এরপর 17:68 ও 17:69 জিজ্ঞেস করে, তোমরা কি নিশ্চিন্ত যে তিনি স্থলকে তোমাদের গ্রাস করতে দেবেন না, কিংবা ঝড়ো হাওয়া পাঠাবেন না?"
          },
          {
            "en": "Then this verse says: and We carried them in the land and the sea. The very carriage that had just been the setting of the ingratitude is now entered on the list of honours. Ibn Kathir reads the land half as the animals people are carried on and the sea half as ships and boats. Naming both together covers the whole surface of the world; there is no route a human being travels that is not a favour he is being carried upon.",
            "bn": "এরপর এই আয়াত বলে: আর আমি তাদের বহন করেছি স্থলে ও সমুদ্রে। যে বহনটিই এতক্ষণ ছিল অকৃতজ্ঞতার প্রেক্ষাপট, সেটিই এখন সম্মানের তালিকায় উঠে এল। ইবনে কাসীর স্থলভাগের অংশটিকে পড়েন সেই পশুগুলো হিসেবে যাদের উপর মানুষ চড়ে, আর সমুদ্রের অংশটিকে নৌযান ও জাহাজ হিসেবে। দুটিকে একসঙ্গে নাম দেওয়া মানে গোটা পৃথিবীর উপরিতল ঢেকে ফেলা; মানুষের চলার এমন কোনো পথ নেই যা তার বহন করা হওয়ার একটি নিয়ামত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Honoured, and Preferred",
          "bn": "সম্মানিত, আর শ্রেষ্ঠত্বপ্রাপ্ত"
        },
        "p": [
          {
            "en": "The two verbs at either end of the verse are not synonyms. Karramna stands unqualified: no comparison is drawn, no other creature is named as the loser, and nothing is said about what the honoured did to deserve it. Faddalnahum is explicitly comparative and states its comparison — 'ala kathirin mimman khalaqna, over much of what We have created — reinforced by tafdila, a cognate accusative that in Arabic strengthens the verb it echoes.",
            "bn": "আয়াতের দুই প্রান্তের ক্রিয়াপদ দুটি সমার্থক নয়। 'কাররামনা' কোনো শর্ত ছাড়াই দাঁড়িয়ে আছে: কোনো তুলনা টানা হয়নি, কোনো সৃষ্টিকে পরাজিত হিসেবে নাম দেওয়া হয়নি, আর সম্মানিতরা তা পাওয়ার জন্য কী করেছিল সে বিষয়ে কিছুই বলা হয়নি। 'ফাদ্দালনাহুম' স্পষ্টভাবে তুলনামূলক এবং নিজের তুলনাটিও বলে দেয় — 'আলা কাসীরিম মিম্মান খালাকনা, আমার সৃষ্টির বহু কিছুর উপর — আর তা জোরদার হয় 'তাফদীলা' দিয়ে, যা আরবিতে ক্রিয়াকে শক্তিশালী করার ধাতুগত কর্মপদ।"
          },
          {
            "en": "The wording says much and not all, and the commentators noticed. Ibn Kathir takes the verse as indicating that human beings are preferred even over the angels; others read the choice of much as deliberately leaving the question open. What is not open is the order of the two verbs. Dignity is announced first and without conditions, and rank is mentioned last with a limit written into it.",
            "bn": "শব্দটি বলেছে 'বহু', 'সব' নয় — আর মুফাসসিরগণ তা লক্ষ করেছেন। ইবনে কাসীর আয়াতটিকে এই ইঙ্গিত হিসেবে নেন যে মানুষকে ফেরেশতাদের উপরও শ্রেষ্ঠত্ব দেওয়া হয়েছে; অন্যরা 'বহু' শব্দের নির্বাচনকে পড়েন প্রশ্নটিকে ইচ্ছাকৃতভাবে খোলা রাখা হিসেবে। যা খোলা নয় তা হলো দুই ক্রিয়াপদের ক্রম। মর্যাদা ঘোষিত হয় আগে এবং কোনো শর্ত ছাড়া; পদমর্যাদার কথা আসে শেষে, আর তার ভেতরেই একটি সীমা লেখা থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Honouring Consists Of",
          "bn": "এই সম্মান কী দিয়ে গড়া"
        },
        "p": [
          {
            "en": "Ibn Kathir begins with form, citing 95:4, We created man in the best of stature. He notes that a human being walks upright on two feet and eats with his hand, while other living creatures walk on four and eat with their mouths, and that he was given hearing, sight and a heart with which to understand what he takes in. The good things he lists as crops, fruit, meat, milk and clothing.",
            "bn": "ইবনে কাসীর শুরু করেন গঠন দিয়ে, উদ্ধৃত করেন 95:4 — আমি মানুষকে সৃষ্টি করেছি সুন্দরতম অবয়বে। তিনি লক্ষ করেন, মানুষ দুই পায়ে সোজা হয়ে হাঁটে এবং হাত দিয়ে খায়, অথচ অন্য প্রাণীরা চার পায়ে হাঁটে ও মুখ দিয়ে খায়; আর তাকে দেওয়া হয়েছে শ্রবণ, দৃষ্টি ও হৃদয় — যা দিয়ে সে গ্রহণ করা জিনিস বুঝতে পারে। 'উত্তম বস্তুসমূহ'-এর তালিকায় তিনি রাখেন ফসল, ফল, মাংস, দুধ আর পোশাক।"
          },
          {
            "en": "The surah had already recorded an objection to all of it. At 17:62 Iblis says of Adam: this one whom You have honoured above me — karramta, the same root as our verse — and swears that if he is given respite he will seize his descendants except a few. The honour is announced in the same surah that records who resents it. What Iblis calls an injustice, the verse states as a plain fact about every human being who walks past you.",
            "bn": "সূরাটি এই সবকিছুর বিরুদ্ধে একটি আপত্তি আগেই লিপিবদ্ধ করেছে। 17:62-তে ইবলীস আদম সম্পর্কে বলে: এই যাকে আপনি আমার উপর সম্মানিত করেছেন — 'কাররামতা', আমাদের আয়াতের একই ধাতু — আর সে শপথ করে, অবকাশ পেলে সে অল্প কয়েকজন ছাড়া তার বংশধরদের কব্জা করে নেবে। যে সূরা এই সম্মান ঘোষণা করে, সেই সূরাই লিপিবদ্ধ করে কে এতে ক্ষুব্ধ। ইবলীস যাকে অবিচার বলে, আয়াত তাকে বলে আপনার পাশ দিয়ে হেঁটে যাওয়া প্রত্যেক মানুষ সম্পর্কে একটি সাদামাটা সত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dignity Nobody Awarded",
          "bn": "যে মর্যাদা কেউ পুরস্কার দেয়নি"
        },
        "p": [
          {
            "en": "Because the honour was conferred and not earned, no human estimate can withdraw it. Al-Bukhari relates from Sahl ibn Hunayf and Qays ibn Sa'd (RA) that a funeral passed the Prophet ﷺ and he stood; when he was told that it was the funeral of a Jew, he said: was it not a soul? The dignity respected in that moment is not the dignity of a fellow believer or a fellow citizen. It is what this verse gives to the children of Adam as such.",
            "bn": "যেহেতু এই সম্মান দেওয়া হয়েছে, অর্জিত হয়নি, তাই মানুষের কোনো মূল্যায়ন তা কেড়ে নিতে পারে না। ইমাম বুখারী সাহল ইবনে হুনাইফ ও কায়স ইবনে সা'দ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ-এর পাশ দিয়ে একটি জানাযা যাচ্ছিল আর তিনি দাঁড়িয়ে গেলেন; তাঁকে যখন বলা হলো এটি একজন ইহুদির জানাযা, তিনি বললেন: এটি কি একটি প্রাণ নয়? সেই মুহূর্তে যে মর্যাদার প্রতি সম্মান দেখানো হচ্ছে, তা সহ-মুমিন বা সহ-নাগরিকের মর্যাদা নয়। তা সেই মর্যাদা, যা এই আয়াত আদম-সন্তানকে দিয়েছে।"
          },
          {
            "en": "5:32 puts the principle into law: whoever kills a soul, other than for a soul or for corruption in the land, it is as though he had killed all mankind. And 49:11 and 49:12 forbid the small daily erosions of it — ridicule, insulting nicknames, suspicion, spying, backbiting. The practical edge runs outward, at people who can no longer be useful to you, and inward, since the creature Allah carried, fed and honoured happens to be you as well.",
            "bn": "5:32 নীতিটিকে আইনে রূপ দেয়: প্রাণের বদলা বা পৃথিবীতে বিপর্যয় সৃষ্টির কারণ ছাড়া যে কেউ একটি প্রাণ হত্যা করল, সে যেন সমগ্র মানবজাতিকে হত্যা করল। আর 49:11 ও 49:12 নিষেধ করে এর প্রতিদিনের ছোট ছোট ক্ষয় — বিদ্রূপ, অবমাননাকর ডাকনাম, কুধারণা, গোয়েন্দাগিরি, গীবত। এর ব্যবহারিক ধার চলে বাইরের দিকে, সেই মানুষদের প্রতি যারা আপনার আর কোনো কাজে আসবে না; আর ভেতরের দিকেও, কারণ আল্লাহ যাকে বহন করেছেন, খাইয়েছেন ও সম্মানিত করেছেন সেই সৃষ্টিটি আপনি নিজেও।"
          }
        ]
      }
    ]
  },
  "17:78-79": {
    "sections": [
      {
        "h": {
          "en": "Prayer Across the Turning Day",
          "bn": "দিনের পালাবদল জুড়ে নামায"
        },
        "p": [
          {
            "en": "The command is compressed and complete: establish prayer li-duluki ash-shams, from the declining of the sun, ila ghasaqi al-layl, to the darkness of night, and the qur'an of dawn. Duluk, most commentators hold, is the sun's slipping from its zenith — the moment Zuhr enters. From there to the night's darkness the times of Zuhr, Asr, Maghrib and Isha unfold, and the dawn recitation names Fajr. Ibn Kathir and others note that this single verse thus gathers the five daily prayers.",
            "bn": "নির্দেশটি সংক্ষিপ্ত অথচ পূর্ণাঙ্গ: নামায কায়েম করো 'লিদুলূকিশ শামস' — সূর্য ঢলে পড়া থেকে — 'ইলা গাসাকিল লাইল' — রাতের অন্ধকার পর্যন্ত, আর ফজরের কুরআন। অধিকাংশ মুফাসসিরের মতে দুলূক হলো সূর্যের মধ্যগগন থেকে হেলে পড়া — যে মুহূর্তে যোহর ঢোকে। সেখান থেকে রাতের অন্ধকার পর্যন্ত খুলে যায় যোহর, আসর, মাগরিব ও ইশার সময়, আর ভোরের তিলাওয়াত নাম ধরে ডাকে ফজরকে। ইবনে কাসীরসহ অন্যরা লক্ষ করেন, এই একটি আয়াতই এভাবে দৈনিক পাঁচ ওয়াক্ত নামাযকে একত্র করে।"
          },
          {
            "en": "The choice of markers deserves reflection. Prayer is fastened not to clock numbers but to the turning of the sky — the sun's decline, the thickening dark, the first light. A worshipper who keeps the five prayers is thereby kept in continuous conversation with creation's rhythm, met at each turning of the day by a standing before its Maker. The day does not interrupt the prayers; in this verse's picture, prayers are the joints on which the day turns.",
            "bn": "চিহ্নগুলোর নির্বাচনও ভাবনার দাবি রাখে। নামায বাঁধা হয়েছে ঘড়ির সংখ্যায় নয়, আকাশের পালাবদলে — সূর্যের ঢলে পড়া, ঘন হয়ে আসা অন্ধকার, প্রথম আলো। যে ইবাদতকারী পাঁচ ওয়াক্ত ধরে রাখে, সে এভাবেই সৃষ্টির ছন্দের সঙ্গে অবিরাম সংলাপে থাকে — দিনের প্রতিটি বাঁকে তার স্রষ্টার সামনে এক দাঁড়ানো তাকে অভ্যর্থনা জানায়। দিন নামাযে ব্যাঘাত ঘটায় না; এই আয়াতের ছবিতে নামাযই সেই কব্জা, যার ওপর দিন ঘোরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Witnessed Recitation",
          "bn": "সাক্ষ্যপ্রাপ্ত তিলাওয়াত"
        },
        "p": [
          {
            "en": "One prayer is singled out and given a reason: indeed the qur'an of dawn is witnessed — mashhudan. Fajr is called a recitation because lengthened recitation is its heart. As for the witnessing, al-Bukhari narrates from Abu Hurayrah (RA) that the Prophet ﷺ said the angels of the night and the angels of the day succeed one another, and they meet together at the Fajr prayer and the Asr prayer; the commentators read the verse's mashhudan in the light of that meeting.",
            "bn": "একটি নামাযকে আলাদা করে কারণসহ উল্লেখ করা হয়েছে: নিশ্চয় ফজরের কুরআন 'মাশহূদ' — সাক্ষ্যপ্রাপ্ত। ফজরকে তিলাওয়াত নামে ডাকা হয়েছে, কারণ দীর্ঘ তিলাওয়াতই এর প্রাণ। আর সাক্ষ্যের ব্যাপারে, বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন — রাতের ফেরেশতা ও দিনের ফেরেশতারা পালাক্রমে আসা-যাওয়া করেন এবং তাঁরা একত্র হন ফজরের নামায ও আসরের নামাযে; মুফাসসিরগণ আয়াতের 'মাশহূদ' শব্দটি সেই সম্মিলনের আলোয় পড়েন।"
          },
          {
            "en": "So the prayer that costs the most attendance has the most attendance. At the hour when rising is hardest and no human observer would know the difference, two shifts of angels are present for the recitation. The verse quietly reverses our accounting: the moments that feel most unseen are the most witnessed. Whoever internalises that will guard Fajr differently, and will want its recitation to be worth the audience it draws.",
            "bn": "অর্থাৎ যে নামাযে হাজির হওয়া সবচেয়ে কঠিন, সেখানেই উপস্থিতি সবচেয়ে বেশি। যে প্রহরে ওঠা কঠিনতম এবং কোনো মানুষ-দর্শক পার্থক্যটা জানতেও পারত না, সেই প্রহরে তিলাওয়াতের জন্য উপস্থিত থাকেন ফেরেশতাদের দুই পালা। আয়াতটি নীরবে আমাদের হিসাব উল্টে দেয়: যে মুহূর্তগুলো সবচেয়ে অদেখা মনে হয়, সেগুলোই সবচেয়ে বেশি সাক্ষ্যপ্রাপ্ত। যে এটি অন্তরে গেঁথে নেয়, সে ফজরকে অন্যভাবে হেফাজত করবে, আর চাইবে তার তিলাওয়াত যেন এই শ্রোতৃমণ্ডলীর যোগ্য হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Tahajjud, an Extra for You",
          "bn": "তাহাজ্জুদ — তোমার জন্য অতিরিক্ত"
        },
        "p": [
          {
            "en": "Then the address narrows to the Prophet ﷺ alone: and in part of the night, pray tahajjud with it, nafilatan laka — as something additional for you. The commentators pause on that phrase. For the Prophet ﷺ the night prayer carried a special status beyond the five prescribed prayers, while for his community it remains voluntary — and immensely honoured. Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said the best prayer after the obligatory ones is prayer in the night.",
            "bn": "এরপর সম্বোধন সংকুচিত হয়ে আসে কেবল নবী ﷺ-এর দিকে: আর রাতের একাংশে এর সঙ্গে তাহাজ্জুদ পড়ো — 'নাফিলাতান লাকা' — তোমার জন্য অতিরিক্ত কিছু হিসেবে। মুফাসসিরগণ এই বাক্যাংশে থামেন। নবী ﷺ-এর জন্য রাতের নামায নির্ধারিত পাঁচ ওয়াক্তের অতিরিক্ত এক বিশেষ মর্যাদা বহন করত, আর তাঁর উম্মতের জন্য তা রয়ে গেছে ঐচ্ছিক — এবং অপরিসীম সম্মানিত। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন — ফরয নামাযের পরে শ্রেষ্ঠ নামায হলো রাতের নামায।"
          },
          {
            "en": "The word tahajjud itself implies leaving sleep for prayer, and the verse's structure keeps the order honest: the five prayers are commanded first, the night prayer is built upon them. The extra never substitutes for the foundation. But the extra is where love shows, because no one will ask where you were. What the five prayers establish, tahajjud raises — which is exactly the language the verse turns to next.",
            "bn": "তাহাজ্জুদ শব্দটি নিজেই বোঝায় নামাযের জন্য ঘুম ছেড়ে ওঠা, আর আয়াতের গঠন ক্রমটিকে সৎ রাখে: আগে পাঁচ ওয়াক্তের নির্দেশ, তার ওপর রাতের নামাযের ভিত্তি। অতিরিক্তটি কখনো ভিত্তির বিকল্প নয়। কিন্তু অতিরিক্তটিই সেই জায়গা যেখানে ভালোবাসা প্রকাশ পায়, কারণ কেউ জিজ্ঞেস করবে না আপনি কোথায় ছিলেন। পাঁচ ওয়াক্ত যা প্রতিষ্ঠা করে, তাহাজ্জুদ তাকে ওপরে তোলে — আর ঠিক এই ভাষাতেই আয়াতটি এরপর মোড় নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Praised Station",
          "bn": "প্রশংসিত মর্যাদা"
        },
        "p": [
          {
            "en": "The passage ends with a hope that is really a promise: it may be that your Lord will raise you to maqaman mahmudan, a praised station. The commentators explain that 'perhaps' from Allah, in the usage of the Quran, conveys what He will certainly bring about. And the sound reports identify the station. Al-Bukhari narrates from Ibn Umar (RA) that on the Day of Resurrection the nations will surge and seek one to intercede, until the matter comes to the Prophet ﷺ — and that is the day Allah raises him to the praised station.",
            "bn": "অংশটি শেষ হয় এমন এক আশায়, যা আসলে প্রতিশ্রুতি: আশা করা যায়, তোমার রব তোমাকে 'মাকামাম মাহমূদা' — এক প্রশংসিত মর্যাদায় — উন্নীত করবেন। মুফাসসিরগণ ব্যাখ্যা করেন, কুরআনের ব্যবহারে আল্লাহর পক্ষ থেকে 'আশা করা যায়' বোঝায় তা-ই, যা তিনি নিশ্চিতভাবে ঘটাবেন। আর সহীহ বর্ণনাগুলো মর্যাদাটির পরিচয় দেয়। বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, কিয়ামতের দিন জাতিগুলো উদ্বেলিত হয়ে একজন সুপারিশকারী খুঁজবে, শেষে বিষয়টি নবী ﷺ-এর কাছে পৌঁছাবে — আর সেই দিনই আল্লাহ তাঁকে প্রশংসিত মর্যাদায় উন্নীত করবেন।"
          },
          {
            "en": "The station is called praised without limiting who does the praising, and the commentators read the openness as deliberate: it is a standing for which he ﷺ is praised when all creation is desperate for the judgment to begin and he is the one who steps forward. The detail beyond the sound reports is left alone. What the verse fixes is the link between the honour and the night: the highest station of that Day is announced to the one who left his bed in this one.",
            "bn": "মর্যাদাটিকে প্রশংসিত বলা হয়েছে, কে প্রশংসা করবে তা সীমিত না করে, আর মুফাসসিরগণ এই উন্মুক্ততাকে ইচ্ছাকৃত হিসেবে পড়েন: এ সেই অবস্থান, যার জন্য তিনি ﷺ প্রশংসিত হবেন — যখন সমস্ত সৃষ্টি বিচার শুরুর জন্য ব্যাকুল, আর তিনিই এগিয়ে যাওয়ার জন। সহীহ বর্ণনার বাইরের খুঁটিনাটি ছেড়ে দেওয়াই রীতি। আয়াত যা পাকা করে তা হলো সম্মান ও রাতের সংযোগ: সেই দিনের সর্বোচ্চ মর্যাদার ঘোষণা এসেছে তাঁর কাছে, যিনি এই দুনিয়ার রাতে নিজের বিছানা ছেড়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a the Ummah Repeats",
          "bn": "উম্মাহর পুনরাবৃত্ত এক দোয়া"
        },
        "p": [
          {
            "en": "The praised station entered the daily voice of the community. Al-Bukhari narrates from Jabir (RA) that the Prophet ﷺ said: whoever, on hearing the adhan, says — O Allah, Lord of this perfect call and the established prayer, grant Muhammad al-wasilah and al-fadilah, and raise him to the praised station You have promised him — my intercession becomes due for him. Five times a day, the ummah asks its Lord to fulfil for its Prophet ﷺ what this verse holds out.",
            "bn": "প্রশংসিত মর্যাদা ঢুকে গেছে উম্মাহর প্রতিদিনের কণ্ঠে। বুখারী জাবির (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আযান শুনে যে বলবে — হে আল্লাহ, এই পরিপূর্ণ আহ্বান ও প্রতিষ্ঠিত নামাযের রব, মুহাম্মাদকে ওয়াসীলা ও ফযীলত দান করো, আর তাঁকে সেই প্রশংসিত মর্যাদায় উন্নীত করো যার প্রতিশ্রুতি তুমি তাঁকে দিয়েছ — তার জন্য আমার সুপারিশ অবধারিত হবে। দিনে পাঁচবার উম্মাহ তার রবের কাছে চায়, তিনি যেন তার নবী ﷺ-এর জন্য পূর্ণ করেন যা এই আয়াত সামনে ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Anchors and Ascent",
          "bn": "নোঙর ও আরোহণ"
        },
        "p": [
          {
            "en": "Read as one breath, the two verses give a complete architecture of worship: five anchors fixed to the turning sky, and above them a night stair that rises toward honour with Allah. The same pairing opens 73:1-6, where night standing and measured recitation prepare the bearer of a heavy word, and it describes the servants of the Most Merciful in 25:64, who pass the night before their Lord prostrating and standing.",
            "bn": "এক নিঃশ্বাসে পড়লে আয়াত দুটি ইবাদতের এক পূর্ণাঙ্গ স্থাপত্য দেয়: ঘুরতে থাকা আকাশে বাঁধা পাঁচটি নোঙর, আর তাদের ওপরে এক রাতের সিঁড়ি, যা উঠে যায় আল্লাহর কাছে সম্মানের দিকে। একই জোড় খুলে দেয় 73:1-6 অংশকে, যেখানে রাতে দাঁড়ানো ও পরিমিত তিলাওয়াত এক ভারী বাণীর বাহককে প্রস্তুত করে, আর 25:64 আয়াতে এটি পরম করুণাময়ের বান্দাদের বর্ণনা — যারা তাদের রবের সামনে সিজদায় ও দাঁড়িয়ে রাত পার করে।"
          },
          {
            "en": "The lived order is the verse's own order. Secure the five first, on time, fastened to the day's turnings. Guard Fajr especially, and give its recitation length enough to deserve the angels' meeting described for it. Then add what the night can carry — even briefly, even irregularly at first — remembering in 32:16 those whose sides forsake their beds. The five keep a person from sinking; the night portion is how a person rises.",
            "bn": "যাপনের ক্রম আয়াতের নিজেরই ক্রম। আগে পাঁচ ওয়াক্ত সুরক্ষিত করুন — সময়মতো, দিনের বাঁকগুলোতে বাঁধা। বিশেষভাবে ফজর হেফাজত করুন, আর এর তিলাওয়াতকে এতটা দৈর্ঘ্য দিন যেন তা এর জন্য বর্ণিত ফেরেশতাদের সম্মিলনের যোগ্য হয়। তারপর যোগ করুন রাত যতটা বইতে পারে — শুরুতে অল্প হলেও, অনিয়মিত হলেও — স্মরণে রেখে 32:16 আয়াতে তাদের, যাদের পার্শ্বদেশ বিছানা ছেড়ে দূরে থাকে। পাঁচ ওয়াক্ত মানুষকে ডুবে যাওয়া থেকে রক্ষা করে; রাতের অংশটুকুই তার ওঠার পথ।"
          }
        ]
      }
    ]
  },
  "17:80": {
    "sections": [
      {
        "h": {
          "en": "Between Prayer and Victory",
          "bn": "নামায ও বিজয়ের মাঝখানে"
        },
        "p": [
          {
            "en": "The verse sits in a deliberate neighbourhood. Just before it, 17:78-79 command the prayer from the sun's decline into the darkness of night, and the night vigil, tahajjud, promised to raise the Prophet ﷺ to a praised station. Just after it, 17:81 announces: truth has come and falsehood has vanished; indeed falsehood is ever bound to vanish. Between the discipline of prayer and the declaration of victory stands this request: an honest entrance, an honest exit, and supporting authority from Allah.",
            "bn": "আয়াতটির অবস্থান এক সুচিন্তিত প্রতিবেশে। ঠিক আগে, 17:78-79 আদেশ দেয় সূর্য ঢলে পড়া থেকে রাতের অন্ধকার পর্যন্ত নামাযের, আর রাত-জাগা তাহাজ্জুদের — যার প্রতিশ্রুতি নবী ﷺ-কে এক প্রশংসিত স্থানে উন্নীত করা। ঠিক পরে, 17:81 ঘোষণা করে: সত্য এসেছে আর মিথ্যা বিলুপ্ত হয়েছে; নিশ্চয়ই মিথ্যা বিলুপ্ত হওয়ারই। নামাযের অনুশীলন আর বিজয়ের ঘোষণার মাঝখানে দাঁড়িয়ে এই চাওয়া: এক সত্যনিষ্ঠ প্রবেশ, এক সত্যনিষ্ঠ প্রস্থান, আর আল্লাহর পক্ষ থেকে সাহায্যকারী কর্তৃত্ব।"
          },
          {
            "en": "The wording given to the Prophet ﷺ to say is: my Lord, cause me to enter an entrance of sidq and cause me to exit an exit of sidq, and grant me from Yourself a supporting authority. Sidq is truthfulness, soundness, integrity — the quality of a thing that is exactly what it claims to be. Attached to entering and exiting, it asks that both ends of every passage be free of falsehood, treachery and disgrace.",
            "bn": "নবী ﷺ-কে যে শব্দে বলতে বলা হয়েছে: হে আমার রব, আমাকে প্রবেশ করান 'সিদক'-এর প্রবেশে, আর বের করুন 'সিদক'-এর প্রস্থানে, এবং আপনার পক্ষ থেকে আমাকে দিন এক সাহায্যকারী কর্তৃত্ব। 'সিদক' মানে সত্যনিষ্ঠা, নির্ভুলতা, সততা — কোনো জিনিস ঠিক যা দাবি করে তা-ই হওয়ার গুণ। প্রবেশ ও প্রস্থানের সঙ্গে জুড়ে দিলে এর অর্থ দাঁড়ায়: প্রতিটি যাত্রাপথের দুই প্রান্তই যেন মিথ্যা, বিশ্বাসঘাতকতা ও অপমান থেকে মুক্ত থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hijrah Reading",
          "bn": "হিজরতের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Ibn Abbas (RA) that this verse came when the Prophet ﷺ was commanded to emigrate: the exit was from Makkah, the entrance into Madinah. On that reading the prayer was answered visibly in history. He left Makkah without compromise or humiliation, hidden by Allah from those posted to kill him, and entered Madinah openly, welcomed, to found the community that would carry the religion. Both ends of the hardest passage of his life were made passages of sidq.",
            "bn": "তিরমিযী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে এই আয়াত এসেছিল যখন নবী ﷺ-কে হিজরতের আদেশ দেওয়া হয়: প্রস্থানটি মক্কা থেকে, প্রবেশটি মদীনায়। এই ব্যাখ্যায় দোয়াটির উত্তর ইতিহাসে দৃশ্যমানভাবে এসেছে। তিনি মক্কা ছেড়েছেন কোনো আপস বা অপমান ছাড়া — হত্যার জন্য মোতায়েন লোকদের চোখ থেকে আল্লাহ তাঁকে আড়াল করেছেন — আর মদীনায় প্রবেশ করেছেন প্রকাশ্যে, সাদর অভ্যর্থনায়, সেই সমাজ গড়তে যা দ্বীনকে বহন করবে। জীবনের কঠিনতম যাত্রার দুই প্রান্তই 'সিদক'-এর পথ হয়ে গিয়েছিল।"
          },
          {
            "en": "The commentators do not stop the verse there. Qurtubi records broader readings held among the exegetes: entering and exiting every affair; and even entering the grave and exiting it at the resurrection. The grammar supports the width — no object is named, so every threshold is included. A du'a revealed about one journey is worded so that it fits all journeys, which is a pattern the Quran repeats: the occasion is specific, the wording is kept general.",
            "bn": "মুফাসসিরগণ আয়াতটিকে সেখানেই থামিয়ে দেন না। কুরতুবী তাফসীরকারদের মধ্যে প্রচলিত আরও প্রশস্ত ব্যাখ্যাগুলো লিপিবদ্ধ করেন: প্রতিটি বিষয়ে প্রবেশ ও প্রস্থান; এমনকি কবরে প্রবেশ আর পুনরুত্থানে সেখান থেকে বের হওয়া। ব্যাকরণও এই প্রশস্ততাকে সমর্থন করে — কোনো নির্দিষ্ট বস্তুর নাম নেই, তাই প্রতিটি চৌকাঠই অন্তর্ভুক্ত। এক সফর উপলক্ষে নাযিল হওয়া দোয়ার শব্দ এমনভাবে গাঁথা যে তা সব সফরে খাপ খায় — কুরআন এই ধরন বারবার দেখায়: উপলক্ষ সুনির্দিষ্ট, শব্দ রাখা হয় সর্বজনীন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Supporting Authority",
          "bn": "এক সাহায্যকারী কর্তৃত্ব"
        },
        "p": [
          {
            "en": "The third request changes register: grant me from Yourself a sultan nasir, a supporting authority. Al-Tabari relates the explanation of Qatadah: the Prophet ﷺ knew that he had no power for this matter without authority, so he asked for an authority to aid the Book of Allah, its limits and its obligations. Truth in this world does not administer itself. It needs protected space — an order in which the weak can believe without being crushed for it.",
            "bn": "তৃতীয় চাওয়াটি সুর বদলায়: আপনার পক্ষ থেকে আমাকে দিন এক 'সুলতান নাসির' — সাহায্যকারী কর্তৃত্ব। তাবারী কাতাদাহর ব্যাখ্যা বর্ণনা করেন: নবী ﷺ জানতেন, কর্তৃত্ব ছাড়া এই কাজের সামর্থ্য তাঁর নেই, তাই তিনি এমন এক কর্তৃত্ব চাইলেন যা আল্লাহর কিতাব, তার সীমারেখা ও তার ফরযগুলোর সহায় হবে। সত্য এই দুনিয়ায় নিজে নিজের প্রশাসন চালায় না। তার দরকার সুরক্ষিত পরিসর — এমন এক ব্যবস্থা, যেখানে দুর্বলও ঈমান আনতে পারে সে জন্য পিষ্ট না হয়ে।"
          },
          {
            "en": "The phrase min ladunka, from Yourself, guards the request from ambition. The authority sought is not personal power but a grant from Allah, held for His Book's sake, and history matched the wording: what was given at Madinah was not a throne but a community under revelation. The prayer thus teaches a clean relationship to power — it may be asked for, from Allah, for the sake of truth, and it remains His grant rather than one's possession.",
            "bn": "'মিন লাদুনকা' — আপনার নিজের পক্ষ থেকে — বাক্যাংশটি চাওয়াটিকে উচ্চাভিলাষ থেকে পাহারা দেয়। যে কর্তৃত্ব চাওয়া হচ্ছে তা ব্যক্তিগত ক্ষমতা নয়, বরং আল্লাহর দান — তাঁর কিতাবের খাতিরে ধারণ করা; আর ইতিহাস শব্দগুলোর সঙ্গে মিলে গেছে: মদীনায় যা দেওয়া হয়েছিল তা সিংহাসন নয়, ওহীর অধীন একটি সমাজ। দোয়াটি এভাবে ক্ষমতার সঙ্গে এক পরিচ্ছন্ন সম্পর্ক শেখায় — তা চাওয়া যেতে পারে, আল্লাহর কাছে, সত্যের খাতিরে; এবং তা থেকে যায় তাঁরই দান, কারও নিজস্ব সম্পত্তি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When Truth Arrived",
          "bn": "যখন সত্য এসে পৌঁছাল"
        },
        "p": [
          {
            "en": "The verse after the prayer reads like its receipt. Al-Bukhari narrates from Ibn Mas'ud (RA) that when the Prophet ﷺ entered Makkah at the conquest, and around the House stood three hundred and sixty idols, he went among them striking them with a stick in his hand and reciting the words of 17:81 over them: truth has come and falsehood has vanished. The man who once left that city by night, hunted, was entering it as its liberator — an entrance of sidq if ever one was seen.",
            "bn": "দোয়ার পরের আয়াতটি পড়লে মনে হয় তার প্রাপ্তিস্বীকার। বুখারী ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন: বিজয়ের দিন নবী ﷺ যখন মক্কায় প্রবেশ করলেন, আর কাবাঘরের চারপাশে দাঁড়িয়ে তিনশ ষাটটি মূর্তি, তিনি হাতের লাঠি দিয়ে সেগুলোতে আঘাত করতে করতে হাঁটলেন আর তিলাওয়াত করলেন: সত্য এসেছে আর মিথ্যা বিলুপ্ত হয়েছে — 17:81। যে মানুষটি একদিন রাতের অন্ধকারে, শিকার হয়ে, সেই শহর ছেড়েছিলেন, তিনি প্রবেশ করছেন তার মুক্তিদাতা হয়ে — 'সিদক'-এর প্রবেশ যদি কোনোদিন দেখা গিয়ে থাকে, তবে এই সেটি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Thresholds",
          "bn": "চৌকাঠের এক দোয়া"
        },
        "p": [
          {
            "en": "The note behind this article calls this a prayer for integrity in every transition of life, and that is exactly how it transfers. A new job, a new city, a marriage, a project, a resignation — each has an entrance and will have an exit, and the du'a covers both in advance. Asking to enter with sidq means entering without deceit about who you are and what you intend; asking to exit with sidq means leaving without betrayal, cover-up or disgrace.",
            "bn": "এই লেখার পেছনের নোটটি একে বলে জীবনের প্রতিটি পালাবদলে সততার দোয়া — আর ঠিক সেভাবেই এটি আমাদের জীবনে স্থানান্তরিত হয়। নতুন চাকরি, নতুন শহর, বিবাহ, কোনো প্রকল্প, পদত্যাগ — প্রত্যেকটির একটি প্রবেশ আছে, আর প্রস্থানও আসবে; দোয়াটি আগেভাগেই দুটিকে ঢেকে দেয়। 'সিদক' নিয়ে প্রবেশ করতে চাওয়া মানে — তুমি কে আর কী চাও, সে বিষয়ে প্রতারণা ছাড়া ঢোকা; 'সিদক' নিয়ে বের হতে চাওয়া মানে — বিশ্বাসঘাতকতা, ধামাচাপা বা অপমান ছাড়া বিদায় নেওয়া।"
          },
          {
            "en": "The third clause matters for ordinary lives too. Whoever attempts anything upright soon learns that intention alone does not survive contact with institutions; one needs backing — a just superior, a sound contract, a rule that protects the honest. The verse teaches where to seek that backing first. Ask Allah for the supporting authority, then look for its worldly forms, and read whatever arrives as min ladunka, from Him, held on loan for the sake of doing things truthfully.",
            "bn": "তৃতীয় বাক্যাংশটি সাধারণ জীবনের জন্যও জরুরি। সৎ কিছু করতে নামলেই মানুষ শেখে — প্রতিষ্ঠানের সংস্পর্শে শুধু নিয়ত টিকে থাকে না; দরকার হয় পৃষ্ঠপোষকতা — একজন ন্যায়পরায়ণ ঊর্ধ্বতন, একটি নির্ভুল চুক্তি, সৎ মানুষকে রক্ষা করে এমন একটি বিধি। আয়াতটি শেখায় সেই পৃষ্ঠপোষকতা আগে কোথায় খুঁজতে হয়। আল্লাহর কাছে সাহায্যকারী কর্তৃত্ব চাও, তারপর তার দুনিয়াবি রূপগুলো খোঁজো, আর যা-ই আসুক তাকে পড়ো 'মিন লাদুনকা' — তাঁর পক্ষ থেকে, সত্যনিষ্ঠভাবে কাজ করার খাতিরে ধার দেওয়া।"
          }
        ]
      }
    ]
  },
  "17:82": {
    "sections": [
      {
        "h": {
          "en": "Healing Sent Down",
          "bn": "অবতীর্ণ আরোগ্য"
        },
        "p": [
          {
            "en": "We send down of the Quran that which is a healing and a mercy for the believers — and it increases the wrongdoers in nothing but loss. The verse stands in Surah al-Isra among passages about the Quran itself: how in 17:9 it guides to that which is most upright, and how people receive it when it is recited over them. Here the Book is described not as information but as medicine — something that acts upon the person who takes it, and whose effect depends on the taking.",
            "bn": "আমি কুরআনে এমন কিছু নাযিল করি যা মুমিনদের জন্য আরোগ্য ও রহমত — আর তা জালিমদের ক্ষতি ছাড়া কিছুই বাড়ায় না। আয়াতটি সূরা আল-ইসরায় দাঁড়িয়ে আছে খোদ কুরআন সম্পর্কিত অনুচ্ছেদগুলোর মাঝে: কীভাবে 17:9 আয়াতে এটি সর্বাধিক সরল-সঠিক পথে পরিচালিত করে, আর তিলাওয়াত করা হলে মানুষ কীভাবে তা গ্রহণ করে। এখানে কিতাবকে বর্ণনা করা হয়েছে তথ্য হিসেবে নয়, ওষুধ হিসেবে — এমন কিছু যা গ্রহণকারীর ওপর কাজ করে, এবং যার প্রভাব নির্ভর করে গ্রহণের ওপর।"
          },
          {
            "en": "The commentators pause on the small word min, \"of the Quran.\" Ibn Kathir and al-Qurtubi explain that it does not mean only a part of the Quran heals; the min identifies the kind of thing being sent down — the whole of what comes down is healing and mercy. Shifa' is a noun of cure: the verse does not say the Quran contains remedies somewhere inside it, but that what is sent down is itself the remedy.",
            "bn": "মুফাসসিরগণ ছোট্ট শব্দ মিন — \"কুরআনের মধ্য থেকে\" — নিয়ে থামেন। ইবনে কাসীর ও আল-কুরতুবী ব্যাখ্যা করেন, এর অর্থ এই নয় যে কুরআনের কেবল একটি অংশ আরোগ্য দেয়; মিন এখানে যা নাযিল হচ্ছে তার জাত চিহ্নিত করে — যা কিছু নামে তার পুরোটাই আরোগ্য ও রহমত। শিফা একটি আরোগ্য-বাচক বিশেষ্য: আয়াতটি বলে না যে কুরআনের ভেতরে কোথাও ওষুধ রাখা আছে, বরং বলে — যা নাযিল হয় তা নিজেই ওষুধ।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Heals",
          "bn": "এটি কী সারায়"
        },
        "p": [
          {
            "en": "The first healing the mufassirun name is of the heart: doubt, hypocrisy, envy, despair — the diseases that 10:57 calls \"what is in the breasts,\" in a verse that likewise pairs healing with mercy. The Quran diagnoses these conditions by name and then treats them: certainty against doubt, remembered mercy against despair, the scales of the Hereafter against greed. This medicine works by being taken slowly — recited, understood, returned to — not by being owned and left on a shelf.",
            "bn": "মুফাসসিরগণ প্রথম যে আরোগ্যের নাম নেন তা অন্তরের: সন্দেহ, কপটতা, হিংসা, নিরাশা — যে ব্যাধিগুলোকে 10:57 আয়াতে বলা হয়েছে \"বক্ষের ভেতরে যা আছে,\" আর সে আয়াতটিও একইভাবে আরোগ্যের সঙ্গে রহমতকে জুড়ে দেয়। কুরআন এই রোগগুলোকে নাম ধরে নির্ণয় করে, তারপর চিকিৎসা করে: সন্দেহের বিপরীতে ইয়াকীন, নিরাশার বিপরীতে স্মরণ করা রহমত, লোভের বিপরীতে আখিরাতের পাল্লা। এই ওষুধ কাজ করে ধীরে ধীরে গ্রহণে — তিলাওয়াতে, বোঝায়, বারবার ফিরে আসায় — মালিকানায় নিয়ে তাকে তাকিয়ায় ফেলে রাখলে নয়।"
          },
          {
            "en": "The body is not excluded. Al-Bukhari narrates from Abu Sa'id al-Khudri (RA) that a party of companions treated a tribal chief who had been stung by a scorpion by reciting Surah al-Fatihah over him; the man recovered, and the Prophet ﷺ approved of what they had done, asking how they had known that it was a ruqyah. Recitation as treatment stands on that approval — while the verse's own first emphasis remains the cure of hearts.",
            "bn": "দেহও বাদ পড়েনি। আল-বুখারী আবু সাঈদ আল-খুদরী (রাঃ) থেকে বর্ণনা করেন, একদল সাহাবী বিচ্ছুর দংশনে আক্রান্ত এক গোত্রপ্রধানকে সূরা আল-ফাতিহা পড়ে চিকিৎসা করেছিলেন; লোকটি সুস্থ হয়ে ওঠে, আর নবী ﷺ তাঁদের কাজ অনুমোদন করে জিজ্ঞেস করেন — তাঁরা কীভাবে জানলেন যে এটি একটি রুকইয়া। চিকিৎসা হিসেবে তিলাওয়াত ওই অনুমোদনের ওপরই দাঁড়িয়ে — যদিও আয়াতটির নিজের প্রথম জোর থেকে যায় অন্তরের আরোগ্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Rain, Two Soils",
          "bn": "একই বৃষ্টি, দুই মাটি"
        },
        "p": [
          {
            "en": "The hard clause is the second one: the same revelation increases the wrongdoers only in loss. Nothing in the medicine changes; the receiving heart does. 9:124-125 draws the same line — when a surah comes down, it increases the believers in faith, while for those in whose hearts is disease it adds filth to their filth. And 41:44 says of those who do not believe that there is deafness in their ears, as if they were being called from a far-off place.",
            "bn": "কঠিন বাক্যাংশটি দ্বিতীয়টি: একই ওহি জালিমদের কেবল ক্ষতিই বাড়ায়। ওষুধের মধ্যে কিছুই বদলায় না; বদলায় গ্রহণকারী অন্তর। 9:124-125 আয়াতে একই রেখা টানা হয়েছে — যখন কোনো সূরা নাযিল হয়, তা মুমিনদের ঈমান বাড়িয়ে দেয়, আর যাদের অন্তরে ব্যাধি আছে তাদের কলুষের ওপর কলুষ যোগ করে। আর 41:44 আয়াতে যারা ঈমান আনে না তাদের সম্পর্কে বলা হয়েছে — তাদের কানে বধিরতা, যেন তাদের ডাকা হচ্ছে বহু দূরের কোনো জায়গা থেকে।"
          },
          {
            "en": "The loss is not a punishment added from outside; it is what refusing a cure does by itself. Each rejected passage hardens the habit of rejecting; each mocked warning makes the next warning easier to mock. Ibn Kathir observes that for such hearers the hearing itself becomes part of their loss — they did not remain neutral, because revelation, like rain, never leaves a soil exactly the way it found it.",
            "bn": "এই ক্ষতি বাইরে থেকে যোগ করা কোনো শাস্তি নয়; ওষুধ প্রত্যাখ্যান করা নিজে থেকেই যা ঘটায়, এ তাই। প্রত্যাখ্যাত প্রতিটি অনুচ্ছেদ প্রত্যাখ্যানের অভ্যাসকে শক্ত করে; বিদ্রূপ করা প্রতিটি সতর্কবার্তা পরের সতর্কবার্তাকে বিদ্রূপ করা সহজ করে দেয়। ইবনে কাসীর লক্ষ করেন, এমন শ্রোতাদের জন্য শোনাটাই তাদের ক্ষতির অংশ হয়ে যায় — তারা নিরপেক্ষ থাকতে পারেনি, কারণ ওহি বৃষ্টির মতো: কোনো মাটিকে ঠিক যেমন পেয়েছিল তেমনটি রেখে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Joined to Healing",
          "bn": "আরোগ্যের সাথে যুক্ত রহমত"
        },
        "p": [
          {
            "en": "The verse pairs shifa' with rahmah, and the pairing is deliberate. A cure can be bitter; this one arrives wrapped in mercy — in a Book that consoles while it corrects, follows its threats with forgiveness, and addresses the sinner as someone being called back rather than someone cast off. Within the same Quran, 39:53 tells those who have transgressed against their own souls not to despair of the mercy of Allah. The medicine and the gentleness come from the same Lord.",
            "bn": "আয়াতটি শিফার সঙ্গে রহমত জুড়ে দেয়, আর এই জোড়টি ইচ্ছাকৃত। ওষুধ তেতো হতে পারে; কিন্তু এই ওষুধ আসে রহমতে মোড়ানো হয়ে — এমন এক কিতাবে, যা শোধরাতে গিয়ে সান্ত্বনাও দেয়, নিজের হুঁশিয়ারির পরে ক্ষমার কথা আনে, আর পাপীকে সম্বোধন করে ছুড়ে ফেলা কেউ নয়, ফিরে ডাকা কেউ হিসেবে। একই কুরআনের ভেতরে 39:53 আয়াত নিজেদের আত্মার ওপর জুলুমকারীদের বলে — আল্লাহর রহমত থেকে নিরাশ হয়ো না। ওষুধ আর কোমলতা — দুটিই আসে একই প্রভুর কাছ থেকে।"
          },
          {
            "en": "For the believers — lil-mu'minin — restricts the benefit, not the offer. The Quran is recited to everyone; its healing settles on those who come to it believing, or at least willing to believe. That is why the Book keeps describing its own audience: guidance for the God-conscious in 2:2, warning in 36:70 for whoever is alive of heart. The door stands open to all; the verse simply states, without apology, who actually walks through it.",
            "bn": "মুমিনদের জন্য — লিল-মুমিনীন — সীমিত করে উপকারকে, প্রস্তাবকে নয়। কুরআন সবার সামনেই তিলাওয়াত হয়; তার আরোগ্য গিয়ে বসে তাদের ওপর, যারা ঈমান নিয়ে আসে — অন্তত ঈমান আনতে রাজি হয়ে আসে। এ কারণেই কিতাবটি বারবার নিজের শ্রোতাদের বর্ণনা দেয়: 2:2 আয়াতে মুত্তাকীদের জন্য হিদায়াত, 36:70 আয়াতে সতর্কবার্তা তার জন্য যার অন্তর জীবিত। দরজা সবার জন্য খোলা; আয়াতটি কেবল কোনো রাখঢাক ছাড়াই বলে দেয় — সেই দরজা দিয়ে বাস্তবে কারা হেঁটে ঢোকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Medicine",
          "bn": "ওষুধটি গ্রহণ করা"
        },
        "p": [
          {
            "en": "The practical question the verse leaves us with is dosage. A patient does not read the label once a year; healing recitation is regular, unhurried and aimed — bringing the verses of mercy to despair, the verses of provision to money-fear, the verses of the Hereafter to grief. Many believers can name which surahs they reach for in which wounds; this verse gives that instinct its warrant, and turns a daily portion of reading into a daily course of treatment.",
            "bn": "আয়াতটি আমাদের সামনে যে ব্যবহারিক প্রশ্ন রেখে যায় তা মাত্রার। রোগী বছরে একবার ওষুধের গায়ের লেখা পড়ে না; আরোগ্যদায়ী তিলাওয়াত নিয়মিত, তাড়াহুড়োহীন ও লক্ষ্যভেদী — নিরাশার কাছে রহমতের আয়াতগুলো নিয়ে যাওয়া, রিযিকের দুশ্চিন্তার কাছে রিযিকের আয়াত, শোকের কাছে আখিরাতের আয়াত। বহু মুমিন বলতে পারেন কোন ক্ষতে তাঁরা কোন সূরার দিকে হাত বাড়ান; এই আয়াত সেই সহজাত প্রবণতাকে তার সনদ দেয়, আর প্রতিদিনের পাঠের অংশটুকুকে বানিয়ে দেয় প্রতিদিনের চিকিৎসা।"
          },
          {
            "en": "It also leaves a warning worth keeping. Familiarity without surrender drifts toward the second clause: to hear the Quran often while quietly exempting oneself from it is a form of the wrongdoing the verse names, and it does not leave a person where it found them. So come as a patient rather than a critic — admit the disease, take the remedy in small daily amounts, and let the Book do upon the heart what it was sent down to do.",
            "bn": "এটি রেখে যায় একটি সতর্কবার্তাও, যা মনে রাখার মতো। আত্মসমর্পণ ছাড়া কেবল পরিচিতি ধীরে ধীরে গড়ায় দ্বিতীয় বাক্যাংশের দিকে: প্রায়ই কুরআন শোনা অথচ চুপচাপ নিজেকে তার আওতার বাইরে রাখা — এ আয়াতে বলা জুলুমেরই এক রূপ, আর তা মানুষকে যেখানে পেয়েছিল সেখানে রেখে যায় না। তাই সমালোচক নয়, রোগী হয়ে আসুন — রোগ স্বীকার করুন, ওষুধ নিন অল্প অল্প করে প্রতিদিন, আর কিতাবকে অন্তরের ওপর সেই কাজটি করতে দিন, যে কাজের জন্য তা নাযিল হয়েছে।"
          }
        ]
      }
    ]
  },
  "17:110": {
    "sections": [
      {
        "h": {
          "en": "At the Close of al-Isra",
          "bn": "সূরা আল-ইসরার শেষপ্রান্তে"
        },
        "p": [
          {
            "en": "This is the second-to-last verse of its surah, and the surah frames it. 17:1 opens with subhan, glory to Him who took His servant by night. 17:111 closes with praise to Allah who has taken no son and has no partner in His dominion, and with the command to magnify Him greatly. Between an opening of glorification and a closing of glorification, this verse deals with how the words are said.",
            "bn": "এটি তার সূরার শেষ থেকে দ্বিতীয় আয়াত, আর সূরাটি একে দুই পাশ থেকে ঘিরে রেখেছে। 17:1 শুরু হয় সুবহান দিয়ে — পবিত্র ও মহিমান্বিত তিনি, যিনি তাঁর বান্দাকে রাতে ভ্রমণ করিয়েছেন। 17:111 শেষ হয় সেই আল্লাহর প্রশংসা দিয়ে যিনি কোনো সন্তান গ্রহণ করেননি এবং যাঁর রাজত্বে কোনো অংশীদার নেই, আর শেষ হয় তাঁর শ্রেষ্ঠত্ব পূর্ণভাবে ঘোষণার নির্দেশ দিয়ে। মহিমাঘোষণা দিয়ে শুরু আর মহিমাঘোষণা দিয়ে শেষ — এ দুইয়ের মাঝখানে এই আয়াতটি বলে দেয় কথাগুলো কীভাবে বলতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Allah or ar-Rahman",
          "bn": "আল্লাহ নামে বা রহমান নামে"
        },
        "p": [
          {
            "en": "Say: call upon Allah or call upon ar-Rahman; ayyan ma tad'u, whichever of the two you call by, to Him belong the best names. The phrasing puts two names side by side and refuses to let a choice between them become a distinction between two objects. One Lord answers to both, and the names are not competing labels but different windows onto the same One.",
            "bn": "বল: আল্লাহ নামে ডাকো বা রহমান নামে ডাকো; আইয়্যান মা তাদউ — এ দুইয়ের যে নামেই ডাকো, সুন্দর সব নাম তাঁরই। শব্দবিন্যাসটি দুটি নামকে পাশাপাশি রাখে এবং এ দুইয়ের মধ্যে বেছে নেওয়াকে দুটি ভিন্ন সত্তার পার্থক্য হয়ে উঠতে দেয় না। একই প্রতিপালকই দুটোতেই সাড়া দেন, আর নামগুলো প্রতিদ্বন্দ্বী পরিচয়পত্র নয়, বরং একই সত্তার দিকে খোলা ভিন্ন ভিন্ন জানালা।"
          },
          {
            "en": "The name ar-Rahman was contested in Makkah. 25:60 records exactly that: when they are told to prostrate to ar-Rahman they answer, and what is ar-Rahman, and it only increases their aversion. So this verse settles the question rather than avoiding it. The wider principle is stated in 7:180, that to Allah belong the best names, so call on Him by them, and again in 20:8, where the same phrase is attached to the declaration that there is no deity except Him.",
            "bn": "রহমান নামটি নিয়ে মক্কায় বিরোধ ছিল। 25:60 ঠিক সেটিই লিপিবদ্ধ করে: তাদেরকে যখন রহমানের উদ্দেশ্যে সিজদা করতে বলা হয়, তারা বলে — রহমান আবার কী; আর এতে তাদের অনীহাই বাড়ে। তাই এই আয়াত প্রশ্নটি এড়িয়ে যায় না, মীমাংসা করে দেয়। বৃহত্তর নীতিটি বলা আছে 7:180 আয়াতে — সুন্দর সব নাম আল্লাহরই, কাজেই সেই নামগুলো দিয়েই তাঁকে ডাকো — আর আবার 20:8 আয়াতে, যেখানে একই বাক্যাংশ জুড়ে দেওয়া হয়েছে এই ঘোষণার সঙ্গে যে তিনি ছাড়া কোনো ইলাহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion of the Second Half",
          "bn": "দ্বিতীয়ার্ধের শানে নুযূল"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Ibn Abbas (RA) that this was revealed while the Prophet ﷺ was in hiding in Makkah. When he prayed with his Companions he would raise his voice with the Quran, and when the polytheists heard it they would revile the Quran, and the One who revealed it, and the one who brought it. So Allah said: do not be loud in your prayer, lest they revile, and do not be silent with it, so that your Companions cannot hear you, and seek a way between that.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে এটি নাযিল হয়েছিল যখন নবী ﷺ মক্কায় আত্মগোপন করে ছিলেন। তিনি যখন সাহাবীদের নিয়ে নামায পড়তেন তখন কুরআন উচ্চস্বরে পড়তেন, আর মুশরিকরা তা শুনলে কুরআনকে, যিনি তা নাযিল করেছেন তাঁকে এবং যিনি তা নিয়ে এসেছেন তাঁকে গালি দিত। তাই আল্লাহ বললেন: তোমার নামাযে স্বর উঁচু করো না, যাতে তারা গালি না দেয়, আর তা এত নিচুও করো না যে তোমার সাহাবীরা শুনতে না পান, বরং এ দুইয়ের মাঝামাঝি পথ খোঁজো।"
          },
          {
            "en": "Read with that occasion, the ruling is not a rule of etiquette invented in the abstract. It weighs two real losses against each other: recitation loud enough to provoke insult against the Book, and recitation so quiet that the people praying behind gain nothing from it. The middle is not a compromise between two goods. It is the point at which neither harm occurs.",
            "bn": "এই শানে নুযূলের আলোকে পড়লে বিধানটি নিছক বায়বীয়ভাবে বানানো কোনো শিষ্টাচারের নিয়ম নয়। এটি দুটি বাস্তব ক্ষতিকে একে অপরের সঙ্গে ওজন করে: এমন উচ্চস্বরে তিলাওয়াত যা কিতাবের বিরুদ্ধে গালি ডেকে আনে, আর এমন নিচু স্বরে তিলাওয়াত যাতে পেছনে দাঁড়ানো মুসল্লিরা কিছুই পান না। মাঝামাঝি পথটি দুটি ভালোর মধ্যে আপস নয়। এটি সেই বিন্দু যেখানে কোনো ক্ষতিই ঘটে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Bayna Dhalika Sabilan",
          "bn": "বাইনা যালিকা সাবীলা"
        },
        "p": [
          {
            "en": "The closing words are wabtaghi bayna dhalika sabilan, seek between that a way. Note the verb: ibtigha is active seeking, not passive settling. The middle is not where you end up by doing nothing in particular; it is something looked for and found. The same construction, bayna dhalika, appears in 25:67 of the servants of the Most Merciful, who when they spend are neither extravagant nor stingy but hold to a course between the two.",
            "bn": "শেষ কথাগুলো হলো ওয়াবতাগি বাইনা যালিকা সাবীলা — এ দুইয়ের মাঝে একটি পথ খোঁজো। ক্রিয়াপদটি লক্ষ করুন: ইবতিগা মানে সক্রিয়ভাবে খোঁজা, নিষ্ক্রিয়ভাবে থিতু হওয়া নয়। মাঝামাঝি জায়গাটি এমন নয় যেখানে বিশেষ কিছু না করলেই পৌঁছে যাওয়া যায়; এটি এমন কিছু যা খুঁজে বের করতে হয়। একই গঠন — বাইনা যালিকা — আসে 25:67 আয়াতে, রহমানের বান্দাদের সম্পর্কে, যারা ব্যয় করার সময় অপব্যয়ও করে না, কার্পণ্যও করে না, বরং এ দুইয়ের মাঝামাঝি পথ ধরে থাকে।"
          },
          {
            "en": "That parallel is instructive. In both places the middle is defined by naming the two ditches, not by giving a measurement. Neither verse says how loud or how much. The believer is trusted to look at the two failures, see which one his own temperament pulls him toward, and correct in the other direction. Moderation in the Quran is a judgement exercised, not a quantity supplied.",
            "bn": "এই মিলটি শিক্ষণীয়। দুই জায়গাতেই মাঝামাঝি পথকে চেনানো হয় দুই পাশের দুই খাদের নাম বলে, কোনো মাপ দিয়ে নয়। কোনো আয়াতই বলে না কতটা জোরে বা কতটা পরিমাণে। মুমিনের উপর ভরসা রাখা হয় যে সে দুটি ব্যর্থতার দিকে তাকিয়ে দেখবে তার নিজের স্বভাব কোনটির দিকে টানে, আর উল্টো দিকে নিজেকে শোধরাবে। কুরআনে মধ্যপন্থা হলো প্রয়োগ করা এক বিচারবোধ, মেপে দেওয়া কোনো পরিমাণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Middle Protects",
          "bn": "মধ্যপন্থা যা রক্ষা করে"
        },
        "p": [
          {
            "en": "There is a second thing the middle guards, quieter than the first. A voice raised beyond what the listeners need has begun to perform, and a worshipper who is aware of being heard is no longer only addressing Allah. The verse does not accuse anyone of that, but by capping the volume at what is useful it removes the room in which it grows. Sincerity is protected here by a rule about sound.",
            "bn": "মধ্যপন্থা আরও একটি জিনিস রক্ষা করে, যা প্রথমটির চেয়ে নীরব। শ্রোতাদের প্রয়োজনের চেয়ে বেশি উঁচু করা স্বর অভিনয়ে ঢুকে পড়েছে, আর যে মুসল্লি সচেতন যে তাকে শোনা হচ্ছে সে আর কেবল আল্লাহকেই সম্বোধন করছে না। আয়াতটি কারও বিরুদ্ধে এই অভিযোগ করে না, তবে স্বরকে যতটুকু কাজে লাগে ততটুকুতে বেঁধে দিয়ে সেই জায়গাটুকুই সরিয়ে দেয় যেখানে এটি বেড়ে ওঠে। এখানে ইখলাসকে রক্ষা করা হয়েছে শব্দ সম্পর্কে একটি নিয়ম দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Calling and Keeping the Level",
          "bn": "ডাকা এবং স্বর ঠিক রাখা"
        },
        "p": [
          {
            "en": "Two things follow for practice. First, widen the names you use. If every du'a you make opens the same way, you are approaching Allah through one door when many stand open, and 7:180 invites you through all of them; ask the Merciful for mercy and the Generous for provision by name. Second, in the audible prayers, set the volume by whether the last row can hear, and let that, rather than your own ear, decide.",
            "bn": "ব্যবহারিকভাবে দুটি কথা এখান থেকে আসে। প্রথমত, যে নামগুলো আপনি ব্যবহার করেন তার পরিসর বাড়ান। আপনার প্রতিটি দোয়া যদি একইভাবে শুরু হয়, তবে বহু দরজা খোলা থাকতে আপনি একটি দরজা দিয়েই আল্লাহর কাছে যাচ্ছেন, অথচ 7:180 আপনাকে সবগুলো দিয়েই ডাকে; রহমানের কাছে রহমত চান আর কারীমের কাছে রিযিক চান, নাম ধরে। দ্বিতীয়ত, সরব নামাযগুলোতে স্বর ঠিক করুন এই বিচারে যে শেষ কাতার শুনতে পাচ্ছে কি না, আর নিজের কান নয়, সেটিই সিদ্ধান্ত নিক।"
          }
        ]
      }
    ]
  }
});
