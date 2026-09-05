/**
 * Tadabbur long-form articles — surah 41.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "41:33": {
    "sections": [
      {
        "h": {
          "en": "A Question With One Answer",
          "bn": "যে প্রশ্নের উত্তর একটিই"
        },
        "p": [
          {
            "en": "Wa man ahsanu qawlan — and who is better in speech? The Arabic is a question of the kind that expects no answer, because none is available: nobody is. The whole verse is thirteen words in Arabic, and it spends them naming who the question is about. What is being ranked here is not eloquence, not volume, not winning an argument. It is the best kind of speech there is, and the Quran defines it by what surrounds the speaking rather than by the speaking itself.",
            "bn": "ওয়া মান আহসানু ক্বাওলান — কথায় কে বেশি উত্তম? আরবিতে এটি এমন এক প্রশ্ন যা কোনো উত্তর প্রত্যাশা করে না, কারণ উত্তর নেই: কেউ নয়। পুরো আয়াতটি আরবিতে তেরোটি শব্দের, আর সেই শব্দগুলো খরচ হয় প্রশ্নটি কাকে নিয়ে তা বলতে গিয়ে। এখানে যার মান নির্ধারণ হচ্ছে তা বাগ্মিতা নয়, উচ্চস্বর নয়, তর্কে জেতাও নয়। এটি সর্বোত্তম ধরনের কথা, আর কুরআন তার সংজ্ঞা দেয় কথা বলাটিকে ঘিরে যা থাকে তা দিয়ে — কথা বলাটিকে দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Things, Not One",
          "bn": "একটি নয়, তিনটি"
        },
        "p": [
          {
            "en": "The description has three parts, and they are easy to collapse into one. He calls to Allah — da'a ila Allah. He works righteousness — wa 'amila salihan. And he says, indeed I am of the Muslims — wa qala innani mina al-muslimin. Speech, action, and an owned identity. Remove any of the three and the verse no longer describes the person: a caller whose life contradicts him, or a good man who never invites anyone, or someone doing both while keeping his allegiance quiet.",
            "bn": "বর্ণনাটির তিনটি অংশ, আর এগুলোকে এক করে ফেলা খুব সহজ। সে আল্লাহর দিকে ডাকে — দা'আ ইলাল্লাহ। সে সৎকর্ম করে — ওয়া 'আমিলা সালিহা। আর সে বলে, নিশ্চয় আমি মুসলিমদের একজন — ওয়া ক্বালা ইন্নানী মিনাল মুসলিমীন। কথা, কাজ, আর নিজের বলে স্বীকার করা পরিচয়। এই তিনটির যেকোনো একটি সরিয়ে নিলে আয়াতটি আর সেই মানুষটির বর্ণনা থাকে না: এমন আহ্বানকারী যার জীবন তার কথাকে মিথ্যা প্রমাণ করে, কিংবা এমন ভালো মানুষ যে কাউকে কখনো ডাকে না, কিংবা এমন কেউ যে দুটোই করে অথচ নিজের পরিচয়টি চুপ করে রাখে।"
          },
          {
            "en": "The middle clause does the most work, because it is the one the Quran elsewhere presses hardest. 61:2-3 asks the believers why they say what they do not do, and calls it greatly hateful in the sight of Allah. 2:44 asks whether they order righteousness of people and forget themselves while they recite the Scripture. The verse does not require the caller to be perfect, which no caller has ever been. It requires that he be standing inside the thing he is calling people to.",
            "bn": "মাঝের অংশটিই সবচেয়ে বেশি কাজ করে, কারণ কুরআন অন্যত্র এটির ওপরই সবচেয়ে জোর দেয়। 61:2-3 আয়াতে মুমিনদের জিজ্ঞেস করা হয়, তারা কেন এমন কথা বলে যা তারা করে না, আর একে বলা হয় আল্লাহর কাছে অত্যন্ত অপছন্দনীয়। 2:44 আয়াতে জিজ্ঞেস করা হয়, তারা কি মানুষকে সৎকাজের নির্দেশ দেয় আর নিজেদের ভুলে যায়, অথচ কিতাব পাঠ করে? আয়াতটি আহ্বানকারীর নিখুঁত হওয়া দাবি করে না — কোনো আহ্বানকারীই কখনো নিখুঁত ছিল না। এটি দাবি করে, সে যেন যেদিকে ডাকছে সেই জিনিসটির ভেতরে দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Meant",
          "bn": "কার কথা বলা হয়েছে"
        },
        "p": [
          {
            "en": "The commentators give more than one answer and do not treat them as rivals. Some read it of the Prophet ﷺ first, since he is the caller the surah is addressing. Ibn Kathir records a statement of Aisha (RA) reading it of the mu'adhdhin, who calls people to Allah and then prays what he called them to. Ibn Kathir also cites al-Hasan al-Basri saying of this verse that such a person is the beloved of Allah and the most beloved of the people of the earth to Allah. Most take the wording as general, since it is phrased as a class and not as a name.",
            "bn": "মুফাসসিরগণ একাধিক উত্তর দেন এবং সেগুলোকে পরস্পরবিরোধী মনে করেন না। কেউ কেউ প্রথমেই এটিকে নবী ﷺ-এর ক্ষেত্রে পড়েন, কারণ সূরাটি যাঁকে সম্বোধন করছে তিনিই সেই আহ্বানকারী। ইবনে কাসীর আয়িশা (রাঃ)-এর একটি উক্তি উল্লেখ করেন যেখানে তিনি এটিকে মুয়াযযিনের ক্ষেত্রে পড়েন — যে দিনে পাঁচবার মানুষকে আল্লাহর দিকে ডাকে, তারপর গিয়ে সেই নামাযটিই আদায় করে যার দিকে সে ডেকেছিল। ইবনে কাসীর হাসান আল-বসরীর কথাও উদ্ধৃত করেন, যিনি এই আয়াত সম্পর্কে বলেন যে এমন ব্যক্তিই আল্লাহর প্রিয়পাত্র, আর যমীনের মানুষদের মধ্যে আল্লাহর কাছে সবচেয়ে প্রিয়। অধিকাংশই শব্দগুলোকে সাধারণ অর্থে নেন, কারণ এটি কোনো নাম নয়, একটি শ্রেণি হিসেবে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits in Fussilat",
          "bn": "সূরা ফুসসিলাতে এর অবস্থান"
        },
        "p": [
          {
            "en": "Surah Fussilat is Makkan, and the years it belongs to were years in which calling to Allah earned mockery rather than standing. The verses just before it, 41:30-32, promise that those who say our Lord is Allah and then hold steady will have the angels descend upon them with the words do not fear and do not grieve. Then this verse lifts the caller to the top of all speech. And the verse immediately after it, 41:34, supplies the manner: repel with what is better, and the one you were at enmity with becomes like a warm friend.",
            "bn": "সূরা ফুসসিলাত মক্কী, আর যে বছরগুলোর সঙ্গে এটি জড়িত সেগুলোতে আল্লাহর দিকে ডাকলে মর্যাদা নয়, উপহাসই জুটত। ঠিক আগের আয়াতগুলো, 41:30-32, প্রতিশ্রুতি দেয় যে যারা বলে 'আমাদের প্রতিপালক আল্লাহ' এবং তারপর অবিচল থাকে, তাদের কাছে ফেরেশতারা নেমে আসে এই কথা নিয়ে — ভয় করো না, দুঃখ করো না। এরপর আলোচ্য আয়াতটি আহ্বানকারীকে সব কথার শীর্ষে তুলে দেয়। আর ঠিক পরের আয়াত, 41:34, জোগায় পদ্ধতি: যা উৎকৃষ্ট তা দিয়ে প্রতিহত করো, তখন যার সঙ্গে শত্রুতা ছিল সে হয়ে যায় অন্তরঙ্গ বন্ধুর মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "How, Not Just Whether",
          "bn": "শুধু কি নয়, কীভাবেও"
        },
        "p": [
          {
            "en": "The Quran is specific about method elsewhere as well. 16:125 says to invite to the way of your Lord with wisdom and good instruction, and to argue with them in the way that is best. 12:108 has the Prophet ﷺ say that this is his way, that he invites to Allah upon insight, he and those who follow him. Read together with this verse, the three passages say that calling is a competence and not a temperament: it has content, it has manners, and it has evidence standing behind it.",
            "bn": "পদ্ধতির ব্যাপারে কুরআন অন্যত্রও সুনির্দিষ্ট। 16:125 আয়াতে বলা হয়, প্রজ্ঞা ও সুন্দর উপদেশ দিয়ে তোমার প্রতিপালকের পথের দিকে ডাকো, আর তাদের সঙ্গে বিতর্ক করো সর্বোত্তম পন্থায়। 12:108 আয়াতে নবী ﷺ বলেন, এটিই তাঁর পথ — তিনি ও যারা তাঁর অনুসরণ করে, তাঁরা জ্ঞানদৃষ্টির ওপর দাঁড়িয়ে আল্লাহর দিকে ডাকেন। আলোচ্য আয়াতের সঙ্গে মিলিয়ে পড়লে এই তিনটি অংশ বলে, আহ্বান করা একটি দক্ষতা, নিছক স্বভাব নয়: এর বিষয়বস্তু আছে, আদব আছে, আর পেছনে দাঁড়ানো দলিল আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "In Your Own Circle",
          "bn": "নিজের পরিসরে"
        },
        "p": [
          {
            "en": "What makes this verse usable is that it mentions no pulpit, no title and no following. Muslim relates from Abu Hurayrah (RA) that whoever calls to guidance has a reward like the rewards of those who follow him, without that diminishing their own rewards in the least. That covers a parent, a colleague, a message sent to one person. And the third clause has a modern edge: innani mina al-muslimin is said aloud, in the first person, by someone who is not quietly editing his religion out of his introduction.",
            "bn": "এই আয়াতটিকে ব্যবহারযোগ্য করে তোলে এই যে, এতে কোনো মিম্বরের কথা নেই, কোনো উপাধির কথা নেই, কোনো অনুসারীদলের কথাও নেই। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, যে হিদায়াতের দিকে ডাকে সে তার অনুসারীদের সমপরিমাণ প্রতিদান পায়, অথচ তাতে তাদের প্রতিদান বিন্দুমাত্র কমে না। এর আওতায় পড়ে একজন অভিভাবক, একজন সহকর্মী, একজন মানুষকে পাঠানো একটি বার্তা। আর তৃতীয় অংশটির একটি আধুনিক ধার আছে: 'ইন্নানী মিনাল মুসলিমীন' কথাটি উচ্চারিত হয় সরবে, উত্তম পুরুষে — এমন কারও মুখে যে নিজের পরিচয় দেওয়ার সময় চুপিসারে নিজের দ্বীনটুকু বাদ দিয়ে দেয় না।"
          }
        ]
      }
    ]
  },
  "41:34": {
    "sections": [
      {
        "h": {
          "en": "The Verse After the Call",
          "bn": "আহ্বানের পরের আয়াত"
        },
        "p": [
          {
            "en": "Surah Fussilat was revealed in Makkah, in years when calling to Allah earned mockery and harm. The verse just before this one, 41:33, asks: who is better in speech than one who calls to Allah, does righteousness and says, I am of the Muslims? Then comes this verse, and the placement is the point. It is addressed first to the caller, telling him how to answer the hostility his calling will certainly attract.",
            "bn": "সূরা ফুসসিলাত মক্কায় নাযিল হয় — এমন বছরগুলোতে, যখন আল্লাহর দিকে ডাকার পুরস্কার ছিল উপহাস ও নির্যাতন। ঠিক আগের আয়াত, 41:33, প্রশ্ন করে: কথায় তার চেয়ে উত্তম কে, যে আল্লাহর দিকে ডাকে, সৎকাজ করে এবং বলে — আমি মুসলিমদের একজন? তারপর আসে এই আয়াত, আর এই অবস্থানই মূল কথা। এটি প্রথমত সেই আহ্বানকারীকে সম্বোধন করে — তার ডাক যে শত্রুতা অবশ্যই টেনে আনবে, তার জবাব কীভাবে দিতে হবে তা শিখিয়ে।"
          },
          {
            "en": "That context saves the verse from being read as soft advice for easy days. It was given to people who were being insulted for their faith, and it told them their conduct under insult was part of the call itself. An argument can be won and a listener lost; the verse aims at winning the person, not the exchange.",
            "bn": "এই প্রেক্ষাপটই আয়াতটিকে সহজ দিনের নরম উপদেশ হিসেবে পড়া থেকে বাঁচায়। এটি দেওয়া হয়েছিল তাদের, যারা ঈমানের কারণে অপমানিত হচ্ছিল; আর এটি তাদের বলেছিল — অপমানের মুখে তাদের আচরণটাও দাওয়াতেরই অংশ। তর্কে জেতা যায়, অথচ শ্রোতাকে হারানো যায়; আয়াতটির লক্ষ্য মানুষটিকে জেতা, বাক্যবিনিময়টি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Equal, and Not Merely Good",
          "bn": "সমান নয়, কেবল ভালোও নয়"
        },
        "p": [
          {
            "en": "The verse opens with a flat statement: the good deed and the evil deed are not equal. That sounds obvious until its consequence lands — if they are not equal, then answering evil with equal evil is trading down, choosing the lesser currency. The command that follows raises the bar further: repel with that which is ahsan, better. Not merely with good, but with the better response available — patience where anger is deserved, a greeting where a slight was given.",
            "bn": "আয়াতটি শুরু হয় এক সরাসরি ঘোষণায়: ভালো কাজ আর মন্দ কাজ সমান নয়। কথাটা সাধারণ শোনায়, যতক্ষণ না এর পরিণতিটা ধরা পড়ে — সমান না হলে, মন্দের জবাব সমান মন্দ দিয়ে দেওয়া মানে নিচু মুদ্রায় নেমে যাওয়া। এরপরের আদেশ মানদণ্ড আরও ওঠায়: প্রতিহত করো তা দিয়ে যা 'আহসান' — উত্তম। কেবল ভালো দিয়ে নয়, বরং সম্ভাব্য উত্তম জবাবটি দিয়ে — যেখানে রাগ প্রাপ্য সেখানে ধৈর্য, যেখানে খোঁচা দেওয়া হয়েছে সেখানে সালাম।"
          },
          {
            "en": "The same instruction appears in 23:96, repel evil with that which is best, and in 13:22 the people of the final home are described as those who repel evil with good. Repetition across surahs marks this as method, not a one-off counsel. The Quran treats the gracious response as a tool that does work in the world — idfa, repel, is a verb of pushing something back, not of passively absorbing it.",
            "bn": "একই নির্দেশ 23:96 আয়াতে আছে — মন্দকে প্রতিহত করো তা দিয়ে যা সর্বোত্তম; আর 13:22 আয়াতে শেষ আবাসের অধিকারীদের পরিচয় দেওয়া হয়েছে — তারা মন্দকে ভালো দিয়ে প্রতিহত করে। একাধিক সূরায় এই পুনরাবৃত্তি বুঝিয়ে দেয়, এটি একটি পদ্ধতি — একবারের উপদেশ নয়। কুরআন অনুগ্রহপূর্ণ জবাবকে দেখে এমন এক হাতিয়ার হিসেবে যা দুনিয়ায় সত্যিই কাজ করে — 'ইদফা', প্রতিহত করো, শব্দটি কিছু ঠেলে ফেরানোর ক্রিয়া, নীরবে সয়ে যাওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Enemy Becomes a Warm Friend",
          "bn": "শত্রু হয়ে ওঠে অন্তরঙ্গ বন্ধু"
        },
        "p": [
          {
            "en": "Then the verse states the result: the one between whom and you is enmity will become as though he were a waliyy hamim, a devoted, warm friend. Hamim carries heat — the friend whose concern for you is warm to the touch, not polite distance. The little word kaanna, as though, is honest: the transformation can feel almost unbelievable, yet it happens. Hostility is often a fire waiting for fuel, and a better response starves it.",
            "bn": "এরপর আয়াতটি ফল ঘোষণা করে: তোমার ও যার মধ্যে শত্রুতা, সে হয়ে যাবে যেন এক 'ওয়ালিইয়ুন হামীম' — নিবেদিতপ্রাণ, উষ্ণ বন্ধু। 'হামীম' শব্দে তাপ আছে — সেই বন্ধু, তোমার জন্য যার উদ্বেগ ছুঁলে উষ্ণ লাগে; ভদ্র দূরত্ব নয়। ছোট্ট শব্দ 'কাআন্না' — যেন — সৎ স্বীকারোক্তি: এই রূপান্তর প্রায় অবিশ্বাস্য মনে হতে পারে, তবু তা ঘটে। শত্রুতা প্রায়ই জ্বালানির অপেক্ষায় থাকা আগুন, আর উত্তম জবাব সেই জ্বালানি বন্ধ করে দেয়।"
          },
          {
            "en": "Ibn Kathir and others record from the early commentators the plain reading of how this works: when a man wrongs you and you meet him with pardon and good, his own nature testifies against him, and the wrongdoer is turned. The verse does not promise that every enemy converts to friendship; it describes what the better response is capable of, and history and ordinary life both supply the examples.",
            "bn": "ইবনে কাসীর ও অন্যরা প্রাথমিক মুফাসসিরদের থেকে এর কার্যপ্রণালীর সরল পাঠটি লিপিবদ্ধ করেছেন: কেউ তোমার ওপর অন্যায় করলে তুমি যখন তাকে ক্ষমা ও কল্যাণ দিয়ে বরণ করো, তখন তার নিজের স্বভাবই তার বিরুদ্ধে সাক্ষ্য দেয়, আর অন্যায়কারী ফিরে আসে। আয়াতটি প্রতিশ্রুতি দেয় না যে প্রতিটি শত্রুই বন্ধুতে পরিণত হবে; এটি বর্ণনা করে উত্তম জবাব কী করতে সক্ষম — আর ইতিহাস ও দৈনন্দিন জীবন, দুটোই তার উদাহরণ জোগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Can Actually Do This",
          "bn": "কে আসলে এটা পারে"
        },
        "p": [
          {
            "en": "The next verse, 41:35, immediately manages expectations: none is granted this quality except those who are patient, and none is granted it except the owner of a great portion. The Quran itself certifies the difficulty. Answering a wound with something better runs against instinct, and the verse calls the capacity a grant — yulaqqaha, something a person is given to receive — and its holder someone with hazz azim, a great share of good.",
            "bn": "পরের আয়াত, 41:35, সঙ্গে সঙ্গেই প্রত্যাশা ঠিক করে দেয়: এই গুণ কেবল তাদেরই দেওয়া হয় যারা ধৈর্যশীল, আর কেবল তাকেই দেওয়া হয় যে মহাভাগ্যের অধিকারী। কুরআন নিজেই কাজটির কাঠিন্য প্রত্যয়ন করে। আঘাতের জবাব উত্তম কিছু দিয়ে দেওয়া প্রবৃত্তির বিপরীতে চলে; আর আয়াতটি এই সামর্থ্যকে বলে এক দান — 'ইউলাক্কাহা', যা গ্রহণের জন্য মানুষকে দেওয়া হয় — এবং এর ধারককে বলে 'হাযযিন আযীম'-এর মালিক, কল্যাণের এক বিরাট অংশের অধিকারী।"
          },
          {
            "en": "Then 41:36 adds the final piece: if a provocation from Shaytan provokes you, seek refuge in Allah. The sequence is a complete anatomy of the angry moment. The insult arrives; the instinct to strike back is named as the devil's nudge, not as justice; and the remedy is not gritted teeth but isti'adhah, stepping out of the exchange and into Allah's protection. The three verses together are a training program, not a slogan.",
            "bn": "এরপর 41:36 শেষ টুকরোটি যোগ করে: শয়তানের পক্ষ থেকে কোনো প্ররোচনা তোমাকে উসকে দিলে আল্লাহর আশ্রয় চাও। এই ধারাবাহিকতা রাগের মুহূর্তের এক পূর্ণাঙ্গ ব্যবচ্ছেদ। অপমান আসে; পাল্টা আঘাতের প্রবৃত্তিকে চিহ্নিত করা হয় শয়তানের ঠেলা হিসেবে — ন্যায়বিচার হিসেবে নয়; আর প্রতিকার দাঁত কামড়ে সহ্য করা নয়, বরং 'ইস্তিআযা' — বাক্যবিনিময় থেকে বেরিয়ে আল্লাহর আশ্রয়ে ঢুকে পড়া। তিনটি আয়াত মিলে একটি প্রশিক্ষণ কর্মসূচি, কোনো স্লোগান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Practicing the Better Answer",
          "bn": "উত্তম জবাবের অনুশীলন"
        },
        "p": [
          {
            "en": "The verse becomes real in small collisions: the curt message, the relative who needles, the colleague who takes credit. Practice starts below heroism — replying to sarcasm with plain courtesy, returning a greeting with a better one as 4:86 teaches, praying quietly for the person who irritates you most. Each repetition weakens the reflex the verse calls Shaytan's provocation and strengthens the grant it calls patience.",
            "bn": "আয়াতটি বাস্তব হয়ে ওঠে ছোট ছোট সংঘর্ষে: রুক্ষ বার্তা, খোঁচা দেওয়া আত্মীয়, কৃতিত্ব নিয়ে নেওয়া সহকর্মী। অনুশীলন শুরু হয় বীরত্বের অনেক নিচ থেকে — শ্লেষের জবাবে সাদাসিধা ভদ্রতা, সালামের জবাব আরও উত্তমভাবে ফেরানো যেমন 4:86 শেখায়, যে মানুষটি সবচেয়ে বিরক্ত করে তার জন্য নীরবে দোয়া করা। প্রতিটি পুনরাবৃত্তি সেই প্রতিবর্ত ক্রিয়াকে দুর্বল করে যাকে আয়াত বলে শয়তানের প্ররোচনা, আর সেই দানকে মজবুত করে যাকে বলে ধৈর্য।"
          },
          {
            "en": "One caution keeps the practice honest: the verse is about personal graciousness, not about abandoning justice or enabling oppression; the Quran elsewhere affirms the right of the wronged. What it removes is retaliation as a habit of the tongue and heart in daily dealings. The believer who masters that exchange rate — paying in better coin than was received — walks around with the great portion 41:35 describes, and some former enemies as proof.",
            "bn": "একটি সতর্কতা অনুশীলনটিকে সৎ রাখে: আয়াতটি ব্যক্তিগত মহানুভবতা নিয়ে — ন্যায়বিচার ছেড়ে দেওয়া বা জুলুমকে প্রশ্রয় দেওয়া নিয়ে নয়; কুরআন অন্যত্র মজলুমের অধিকার স্বীকার করেছে। এটি যা সরায় তা হলো দৈনন্দিন লেনদেনে জিহ্বা ও হৃদয়ের অভ্যাস হয়ে ওঠা প্রতিশোধ। যে মুমিন এই বিনিময় হার আয়ত্ত করে — যা পেয়েছে তার চেয়ে উত্তম মুদ্রায় শোধ করা — সে চলাফেরা করে 41:35 বর্ণিত সেই মহাভাগ্য নিয়ে, আর প্রমাণ হিসেবে সঙ্গে থাকে কিছু সাবেক শত্রু।"
          }
        ]
      }
    ]
  },
  "41:53": {
    "sections": [
      {
        "h": {
          "en": "A Promise in Future Tense",
          "bn": "ভবিষ্যৎ কালের প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Sanurihim ayatina — We will show them Our signs — in the horizons and within themselves, until it becomes clear to them that it is the truth. The verb is future and continuous: not signs already sealed in a completed list, but a showing that goes on. Every generation, the verse promises, will be shown enough — in the world it explores and the self it inhabits — for the truth of the revelation to stand clear.",
            "bn": "সানুরীহিম আয়াতিনা — আমি তাদের আমার নিদর্শনগুলো দেখাব — দিগন্তসমূহে এবং তাদের নিজেদের মধ্যে, যতক্ষণ না তাদের কাছে স্পষ্ট হয় যে এটিই সত্য। ক্রিয়াটি ভবিষ্যৎ ও চলমান: সম্পূর্ণ হয়ে যাওয়া কোনো তালিকায় সিলমোহর পড়া নিদর্শন নয়, বরং এমন এক দেখানো যা চলতেই থাকে। আয়াতের প্রতিশ্রুতি: প্রতিটি প্রজন্মকে যথেষ্ট দেখানো হবে — যে জগৎ সে অনুসন্ধান করে আর যে সত্তায় সে বাস করে, দুটিতেই — যাতে ওহীর সত্যতা স্পষ্ট দাঁড়িয়ে যায়।"
          },
          {
            "en": "The pronoun in that it is the truth points, the commentators say, to the Quran and the message it carries. The verse thus makes a bold wager: reality itself, honestly examined at any depth, will keep agreeing with the Book. Signs do not replace revelation and revelation does not fear signs; each points at the other, and the showing continues until the seeing is complete.",
            "bn": "এটিই সত্য — এই বাক্যের সর্বনামটি, মুফাসসিরগণ বলেন, নির্দেশ করে কুরআন ও তার বহন করা বার্তাকে। আয়াতটি তাই এক সাহসী বাজি রাখে: বাস্তবতা নিজে, যে গভীরতাতেই সততার সঙ্গে পরীক্ষা করা হোক, কিতাবের সঙ্গে একমত হতেই থাকবে। নিদর্শন ওহীর জায়গা নেয় না, ওহীও নিদর্শনকে ভয় পায় না; প্রত্যেকে অন্যটির দিকে ইশারা করে, আর দেখা সম্পূর্ণ না হওয়া পর্যন্ত দেখানো চলতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horizons",
          "bn": "দিগন্তসমূহে নিদর্শন"
        },
        "p": [
          {
            "en": "Al-afaq, the horizons, was read two ways by the mufassirun, and both readings stand. Some took it as the regions of the earth — the early hearers would live to see the message reach lands they could not name, itself a sign that this word was not an ordinary word. Others took it as the horizons in the plainest sense: the sky and its order, the alternation that 2:164 and 3:190 keep pointing at from their own angles.",
            "bn": "আল-আফাক — দিগন্তসমূহ — মুফাসসিরগণ দুইভাবে পড়েছেন, এবং দুটি পাঠই টিকে থাকে। কেউ কেউ একে নিয়েছেন পৃথিবীর অঞ্চলসমূহ অর্থে — প্রথম শ্রোতারা বেঁচে থেকেই দেখবে এই বার্তা এমন সব ভূখণ্ডে পৌঁছেছে যাদের নামও তারা জানত না, যা নিজেই এক নিদর্শন যে এই বাণী সাধারণ বাণী নয়। অন্যরা নিয়েছেন সরলতম অর্থে দিগন্ত: আকাশ ও তার শৃঙ্খলা — যে আবর্তনের দিকে 2:164 ও 3:190 নিজ নিজ কোণ থেকে বারবার ইশারা করে।"
          },
          {
            "en": "On either reading the instruction to the reader is the same: look outward, and look as one expecting evidence. The Quran repeatedly commands the looking — 10:101 says, observe what is in the heavens and the earth — and treats the cosmos not as scenery but as speech: ayat, signs, the very word used for the Book's own verses. Scholars have long put it this way: creation and revelation are two books of one Author, each vouching for the other.",
            "bn": "যে পাঠই নিন, পাঠকের প্রতি নির্দেশ একই: বাইরে তাকান, এবং তাকান প্রমাণের প্রত্যাশী হয়ে। কুরআন বারবার তাকানোর আদেশ দেয় — 10:101 বলে, দেখো আসমান ও যমীনে কী আছে — আর মহাজগৎকে গণ্য করে দৃশ্যপট নয়, বাণী হিসেবে: আয়াত, নিদর্শন — ঠিক সেই শব্দ যা কিতাবের নিজের বাক্যগুলোর জন্যও ব্যবহৃত। আলিমগণ বহুদিন ধরেই কথাটি এভাবে বলেছেন: সৃষ্টি ও ওহী এক লেখকেরই দুই কিতাব — প্রত্যেকে অন্যটির সাক্ষ্য দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "And Within Themselves",
          "bn": "এবং নিজেদের মধ্যে"
        },
        "p": [
          {
            "en": "Wa fi anfusihim — and within their own selves. The commentators point to the body's construction, from a drop to hearing, sight and reasoning; to the sustenance and turning of hearts; and to what a person witnesses of Allah's dealings in his own life. 51:20-21 issues the same double summons: on the earth are signs for the certain, and within yourselves — do you not see?",
            "bn": "ওয়া ফী আনফুসিহিম — এবং তাদের নিজেদের মধ্যে। মুফাসসিরগণ ইঙ্গিত করেন দেহের নির্মাণের দিকে — এক বিন্দু থেকে শ্রবণ, দৃষ্টি ও বিবেক পর্যন্ত; হৃদয়ের রিযিক ও তার মোড় ফেরার দিকে; আর নিজের জীবনে আল্লাহর কার্যধারার যা কিছু মানুষ প্রত্যক্ষ করে তার দিকে। 51:20-21 একই দ্বৈত আহ্বান জারি করে: যমীনে নিদর্শন আছে দৃঢ় বিশ্বাসীদের জন্য, আর তোমাদের নিজেদের মধ্যেও — তোমরা কি দেখো না?"
          },
          {
            "en": "The inward sign has a special force the outward lacks: you cannot dismiss it as someone else's report. Whoever has watched their own heart shift from despair to tranquillity after du'a, or traced how they were carried through what should have broken them, has been shown a sign in the first person. The self is the one witness no sceptic can claim was somewhere else.",
            "bn": "অন্তর্গত নিদর্শনের এমন এক জোর আছে যা বাইরেরটির নেই: একে অন্য কারও প্রতিবেদন বলে উড়িয়ে দেওয়া যায় না। যে নিজের হৃদয়কে দোয়ার পরে হতাশা থেকে প্রশান্তিতে সরে যেতে দেখেছে, কিংবা খুঁজে দেখেছে কীভাবে তাকে পার করিয়ে নেওয়া হয়েছে এমন কিছুর ভেতর দিয়ে যা তাকে ভেঙে ফেলার কথা ছিল — তাকে নিদর্শন দেখানো হয়েছে একেবারে নিজের জবানে। নিজ সত্তা এমন এক সাক্ষী, কোনো সংশয়বাদী যার সম্পর্কে বলতে পারে না যে সে অন্য কোথাও ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Until It Becomes Clear",
          "bn": "যতক্ষণ না স্পষ্ট হয়"
        },
        "p": [
          {
            "en": "Hatta yatabayyana lahum — until it becomes clear to them. Clarity, in the Quran's account, arrives cumulatively: sign upon sign, outer and inner agreeing, until denial requires more effort than acceptance. This is how 2:164 works, piling the heavens, the rain, the ships and the winds into one verse for a people who reason, and how 3:190-191 describes the thinkers whom the alternation of night and day leads to: our Lord, You did not create this in vain.",
            "bn": "হাত্তা ইয়াতাবাইয়ানা লাহুম — যতক্ষণ না তাদের কাছে স্পষ্ট হয়। কুরআনের বিবরণে স্পষ্টতা আসে স্তরে স্তরে: নিদর্শনের ওপর নিদর্শন, বাহির ও ভেতর একমত হতে হতে, যতক্ষণ না অস্বীকারে গ্রহণের চেয়ে বেশি পরিশ্রম লাগে। 2:164 এভাবেই কাজ করে — আসমান, বৃষ্টি, জাহাজ আর বাতাসকে এক আয়াতে স্তূপ করে, বোঝে এমন জাতির জন্য; আর 3:190-191 বর্ণনা করে সেই চিন্তাশীলদের, রাত-দিনের আবর্তন যাদের পৌঁছে দেয় এই কথায়: আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি।"
          },
          {
            "en": "Note what the verse does not promise: that signs will force belief. Clarity can be shown and still refused; the Quran describes people who saw and turned away. The promise is about the evidence, not the verdict — Allah undertakes that the case will be made plain, and leaves the response where He always leaves it, with the one who has been shown.",
            "bn": "লক্ষ করুন আয়াতটি কী প্রতিশ্রুতি দেয় না: নিদর্শন ঈমান জোর করে আদায় করবে — এমন নয়। স্পষ্টতা দেখানো হতে পারে, তবু প্রত্যাখ্যাত হতে পারে; কুরআন এমন মানুষদের বর্ণনা দেয় যারা দেখেও মুখ ফিরিয়েছে। প্রতিশ্রুতিটি প্রমাণ নিয়ে, রায় নিয়ে নয় — আল্লাহ দায়িত্ব নেন যে মামলাটি সুস্পষ্ট করা হবে, আর জবাবটুকু রেখে দেন যেখানে তিনি সবসময় রাখেন: যাকে দেখানো হয়েছে, তার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness Over All Things",
          "bn": "সবকিছুর সাক্ষী"
        },
        "p": [
          {
            "en": "The verse closes above the whole argument: is it not sufficient concerning your Lord that He is, over all things, a Witness? After horizons and selves, the final ground of certainty is not an object but a presence. He does not merely leave traces to be deciphered; He witnesses everything, including the deciphering, including the doubter mid-doubt. For hearts far along the road, this is the deepest proof: knowing themselves seen.",
            "bn": "আয়াতটি শেষ হয় পুরো যুক্তির ঊর্ধ্বে উঠে: আপনার রবের ব্যাপারে কি এটুকু যথেষ্ট নয় যে তিনি সবকিছুর ওপর সাক্ষী? দিগন্ত ও নিজ সত্তার পরে নিশ্চয়তার চূড়ান্ত ভিত্তি কোনো বস্তু নয়, এক উপস্থিতি। তিনি কেবল পাঠোদ্ধারের জন্য চিহ্ন রেখে যান না; তিনি সবকিছু প্রত্যক্ষ করেন — পাঠোদ্ধারটিসহ, সংশয়ের মাঝখানে থাকা সংশয়ীসহ। পথের অনেকটা এগিয়ে যাওয়া হৃদয়ের কাছে এটিই গভীরতম প্রমাণ: নিজেকে দেখা-হচ্ছে জানা।"
          },
          {
            "en": "The commentators hear in the closing question a gentle relocation of the whole search. Signs are for our benefit, not His need; He was never absent for evidence to establish. So the reflective reader holds both: study the signs gratefully, and remember that the One they point to is nearer than the pointing, a Witness over the very heart that is weighing Him.",
            "bn": "সমাপ্তির প্রশ্নটিতে মুফাসসিরগণ শোনেন গোটা অনুসন্ধানের এক কোমল স্থানবদল। নিদর্শন আমাদের উপকারের জন্য, তাঁর প্রয়োজনে নয়; তিনি কখনো অনুপস্থিত ছিলেন না যে প্রমাণ দিয়ে তাঁকে প্রতিষ্ঠা করতে হবে। তাই চিন্তাশীল পাঠক দুটিই ধরে রাখে: কৃতজ্ঞতার সঙ্গে নিদর্শন অধ্যয়ন করে, আর মনে রাখে — সেগুলো যাঁর দিকে ইশারা করে তিনি ইশারার চেয়েও নিকটে, সেই হৃদয়টিরও সাক্ষী, যে হৃদয় তাঁকে ওজন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Training the Eye",
          "bn": "দৃষ্টির অনুশীলন"
        },
        "p": [
          {
            "en": "The verse turns observation into worship. Walk under the night sky deliberately; learn one thing about how your own hand or eye works; watch a season turn — and each time, complete the loop the Quran commands, from the wonder to its Maker. Without the loop, wonder decays into mere information; with it, an ordinary walk becomes what 3:191 describes, remembrance standing, sitting and lying down.",
            "bn": "আয়াতটি পর্যবেক্ষণকে ইবাদতে পরিণত করে। ইচ্ছা করেই রাতের আকাশের নিচে হাঁটুন; নিজের হাত বা চোখ কীভাবে কাজ করে তার একটি বিষয় শিখুন; একটি ঋতুর মোড় ফেরা দেখুন — আর প্রতিবার কুরআনের আদেশ করা বৃত্তটি সম্পূর্ণ করুন: বিস্ময় থেকে বিস্ময়ের নির্মাতা পর্যন্ত। বৃত্তটি ছাড়া বিস্ময় ক্ষয়ে যায় নিছক তথ্যে; বৃত্তটিসহ একটি সাধারণ হাঁটাও হয়ে ওঠে যা 3:191 বর্ণনা করে — দাঁড়িয়ে, বসে ও শুয়ে স্মরণ।"
          },
          {
            "en": "And keep the promise's tense in mind during dry seasons of faith. We will show them is Allah's undertaking, not yours; your part is to stay honest and keep looking. Certainty in the Quran is not a possession seized once but a clarity that grows as the showing continues — in the horizons, in yourself, until the truth stands where doubt used to live.",
            "bn": "আর ঈমানের শুষ্ক মৌসুমে প্রতিশ্রুতির কালটি মনে রাখুন। আমি তাদের দেখাব — এ দায়িত্ব আল্লাহর, আপনার নয়; আপনার অংশ সৎ থাকা আর তাকিয়ে যাওয়া। কুরআনে নিশ্চয়তা একবারে দখল করা কোনো সম্পত্তি নয়, বরং এমন এক স্পষ্টতা যা দেখানো চলতে থাকার সঙ্গে সঙ্গে বাড়ে — দিগন্তে, নিজের মধ্যে — যতক্ষণ না সত্য গিয়ে দাঁড়ায় ঠিক সেখানে, যেখানে আগে সংশয় বাস করত।"
          }
        ]
      }
    ]
  }
});
