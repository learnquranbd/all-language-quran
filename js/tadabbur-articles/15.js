/**
 * Tadabbur long-form articles — surah 15.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "15:9": {
    "sections": [
      {
        "h": {
          "en": "A Promise With Emphasis",
          "bn": "জোর দিয়ে বলা প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Indeed, it is We who sent down the Reminder, and indeed We are its guardian. Arabic can stack emphasis, and this sentence stacks nearly all of it: inna with the detached pronoun nahnu, then a second inna, then the lam of assertion before hafizun. The mufassirun note that the verse answers a taunt: in 15:6 the deniers had sneered, \"O you upon whom the Reminder has been sent down, you are surely mad.\" The reply passes over the insult and secures the Book instead.",
            "bn": "নিশ্চয়ই আমিই স্মারকগ্রন্থ নাযিল করেছি, আর নিশ্চয়ই আমিই তার রক্ষক। আরবি ভাষা জোরের ওপর জোর চাপাতে পারে, আর এই বাক্যটি তার প্রায় সবটুকুই চাপিয়েছে: ইন্না ও তার সঙ্গে স্বতন্ত্র সর্বনাম নাহনু, তারপর দ্বিতীয় ইন্না, তারপর হাফিযূনের আগে তাকিদের লাম। মুফাসসিরগণ লক্ষ করেন, আয়াতটি একটি বিদ্রূপের জবাব: 15:6 আয়াতে অস্বীকারকারীরা ঠাট্টা করে বলেছিল, \"ওহে, যার ওপর স্মারকগ্রন্থ নাযিল হয়েছে, তুমি তো নিশ্চিত পাগল।\" জবাবটি অপমান পাশ কাটিয়ে গিয়ে বরং কিতাবটিকেই সুরক্ষিত করে।"
          },
          {
            "en": "Hafizun is an active participle, and it is plural to match the majestic We: not \"We will guard it once,\" but \"We are, ongoingly, its guardians.\" The Quran is called adh-Dhikr here, the Reminder — the thing whose entire work is to be remembered. A reminder that could be corrupted would fail at its one task; the name chosen and the promise given fit each other exactly, and the verse makes the fit audible.",
            "bn": "হাফিযূন একটি কর্তৃবাচক বিশেষণপদ (ইসমুল ফাইল), আর মহিমাবাচক \"আমি\"-র সঙ্গে মিল রেখে তা বহুবচনে: \"আমি একবার এটি রক্ষা করব\" নয়, বরং \"আমি চলমানভাবে এর রক্ষক।\" কুরআনকে এখানে বলা হয়েছে আয-যিকর, স্মারকগ্রন্থ — যে জিনিসের সমগ্র কাজই হলো স্মরণে থাকা। যে স্মারক বিকৃত হতে পারত, সে তার ওই একটিমাত্র কাজেই ব্যর্থ হতো; বেছে নেওয়া নাম আর দেওয়া প্রতিশ্রুতি পরস্পরের সঙ্গে নিখুঁতভাবে খাপ খায়, আর আয়াতটি সেই খাপ খাওয়াকে কানে শোনার মতো করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded From What",
          "bn": "কিসের থেকে সুরক্ষিত"
        },
        "p": [
          {
            "en": "The guardianship covers addition, loss and distortion together. 41:42 says of this Book that falsehood cannot approach it from before it or from behind it. And the guarding began before the community could take any part in it: 75:17 tells the Prophet ﷺ that upon Allah is its collection and its recitation, and in 87:6 he is promised, \"We will make you recite, and you will not forget.\" Preservation is pledged at every stage of the journey — revelation, retention and transmission alike.",
            "bn": "এই রক্ষণাবেক্ষণ সংযোজন, হারিয়ে যাওয়া ও বিকৃতি — তিনটিকেই ঢেকে রাখে। 41:42 আয়াতে এই কিতাব সম্পর্কে বলা হয়েছে, মিথ্যা এর সামনে থেকেও আসতে পারে না, পেছন থেকেও না। আর এই পাহারা শুরু হয়েছিল উম্মাহ তাতে কোনো ভূমিকা রাখতে পারার আগেই: 75:17 আয়াতে নবী ﷺ-কে বলা হয়েছে — এর সংগ্রহ ও এর পাঠ আল্লাহরই দায়িত্বে, আর 87:6 আয়াতে তাঁকে প্রতিশ্রুতি দেওয়া হয়েছে, \"আমি তোমাকে পড়াব, আর তুমি ভুলবে না।\" যাত্রার প্রতিটি ধাপে সংরক্ষণের অঙ্গীকার করা হয়েছে — নাযিল, ধারণ ও পরম্পরায় পৌঁছে দেওয়া, সবটাতেই।"
          },
          {
            "en": "The commentators set this beside the earlier scriptures. In 5:44 the rabbis and the scholars were entrusted with guarding the Book of Allah — bima istuhfizu, by what they were asked to preserve — and an entrusted guardianship could be neglected by its human trustees. For the Quran the grammar itself changes: the Guardian named is Allah. That contrast, drawn in the tafsir literature, is why no promise shaped like 15:9 exists for any earlier book.",
            "bn": "মুফাসসিরগণ এটিকে পূর্ববর্তী কিতাবগুলোর পাশে রাখেন। 5:44 আয়াতে রব্বানী পণ্ডিত ও আলিমদের ওপর আল্লাহর কিতাব রক্ষার দায়িত্ব অর্পিত হয়েছিল — বিমা উস্তুহফিযূ, যা সংরক্ষণের ভার তাদের দেওয়া হয়েছিল — আর মানুষের হাতে অর্পিত রক্ষণাবেক্ষণে মানুষ অবহেলাও করতে পারত। কুরআনের বেলায় বাক্যের গঠনটাই বদলে যায়: রক্ষক হিসেবে যাঁর নাম, তিনি আল্লাহ। তাফসীর-সাহিত্যে টানা এই বৈপরীত্যই কারণ — 15:9 আয়াতের আদলে কোনো প্রতিশ্রুতি আগের কোনো কিতাবের জন্য নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise at Work in History",
          "bn": "ইতিহাসে প্রতিশ্রুতিটির কাজ"
        },
        "p": [
          {
            "en": "The promise worked through ordinary means. Al-Bukhari narrates that Jibril (AS) used to review the Quran with the Prophet ﷺ once every Ramadan, and reviewed it with him twice in the final year of his life. Companions carried it whole in memory. After the battle of Yamamah, when many reciters were killed, Abu Bakr (RA) commissioned Zayd ibn Thabit (RA) to gather the text — an account al-Bukhari preserves in Zayd's own words — and Uthman (RA) later had master copies made and sent to the garrison cities.",
            "bn": "প্রতিশ্রুতিটি কাজ করেছে সাধারণ উপায়-উপকরণের ভেতর দিয়ে। আল-বুখারী বর্ণনা করেন, জিবরীল (আঃ) প্রতি রমযানে একবার নবী ﷺ-এর সঙ্গে কুরআন পুনরাবৃত্তি করতেন, আর তাঁর জীবনের শেষ বছরে করেছিলেন দুবার। সাহাবীগণ পুরো কুরআন স্মৃতিতে বহন করতেন। ইয়ামামার যুদ্ধের পর, যখন বহু কারী শহীদ হন, আবু বকর (রাঃ) যায়দ ইবনে সাবিত (রাঃ)-কে পাঠটি সংকলনের দায়িত্ব দেন — বিবরণটি আল-বুখারী যায়দের নিজের ভাষায় সংরক্ষণ করেছেন — আর পরে উসমান (রাঃ) মূল অনুলিপি তৈরি করিয়ে সেনানিবাস-শহরগুলোতে পাঠান।"
          },
          {
            "en": "Alongside the written copies runs a chain that no other book possesses: unbroken mass memorisation. In every generation since, children in every land have carried the entire text in their chests, so that manuscripts check reciters and reciters check manuscripts against each other. The promise of 15:9 did not bypass human effort; it recruited human effort, and sustained it on a scale and across a span of centuries that no human institution announced in advance and then delivered.",
            "bn": "লিখিত অনুলিপিগুলোর পাশাপাশি চলে এমন এক ধারা, যা অন্য কোনো গ্রন্থের নেই: অবিচ্ছিন্ন গণ-মুখস্থকরণ। তারপর থেকে প্রতিটি প্রজন্মে, প্রতিটি দেশের শিশুরা পুরো পাঠটি বুকে বহন করে এসেছে — ফলে পাণ্ডুলিপি যাচাই করে কারীদের, আর কারীরা যাচাই করেন পাণ্ডুলিপিকে, পরস্পরের বিপরীতে। 15:9 আয়াতের প্রতিশ্রুতি মানুষের চেষ্টাকে পাশ কাটায়নি; বরং মানুষের চেষ্টাকেই কাজে নিয়োগ করেছে, এবং তাকে টিকিয়ে রেখেছে এমন এক পরিসরে ও এতগুলো শতাব্দী জুড়ে — যা কোনো মানবীয় প্রতিষ্ঠান আগে ঘোষণা করে তারপর বাস্তবায়ন করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Settles",
          "bn": "আয়াতটি যা মীমাংসা করে"
        },
        "p": [
          {
            "en": "For the believer the verse settles a quiet anxiety: the guidance in your hands is what was sent down. Rulings can be studied, promises leaned upon, and stories retold without the fear that the text beneath them has shifted over the centuries. This is also why the surah could tell its Prophet ﷺ — mocked in 15:6 and, near the end in 15:97, described as tightened in chest by what they say — to go on; the message would outlast every mocker.",
            "bn": "মুমিনের জন্য আয়াতটি এক নীরব দুশ্চিন্তার মীমাংসা করে: তোমার হাতে যে হিদায়াত, তা-ই নাযিল হয়েছিল। বিধানগুলো অধ্যয়ন করা যায়, প্রতিশ্রুতির ওপর হেলান দেওয়া যায়, ঘটনাগুলো আবার বলা যায় — এই ভয় ছাড়াই যে শতাব্দীর পর শতাব্দীতে সেগুলোর নিচের পাঠটি সরে গেছে। এ কারণেই সূরাটি তার নবী ﷺ-কে — যিনি 15:6 আয়াতে বিদ্রূপের শিকার, আর শেষের দিকে 15:97 আয়াতে তাদের কথায় সংকুচিত-বক্ষ বলে বর্ণিত — বলতে পেরেছে: এগিয়ে চলো; বার্তাটি প্রতিটি বিদ্রূপকারীর চেয়ে দীর্ঘজীবী হবে।"
          },
          {
            "en": "The trust also carries an edge of responsibility. A preserved Book removes the excuses that earlier communities might plead — that the original was lost, or that the message had been rewritten before it reached them. What reaches us is the Reminder itself, whole. Whether it is remembered inside one particular life — read, understood, obeyed — is the one part of the matter that Allah, who guarded the text, has left in the hands of its reader.",
            "bn": "এই আস্থার সঙ্গে জুড়ে আছে দায়িত্বের একটি ধারও। সংরক্ষিত কিতাব সেই অজুহাতগুলো সরিয়ে দেয়, যা আগের উম্মতেরা হয়তো পেশ করতে পারত — যে মূলটি হারিয়ে গিয়েছিল, বা বার্তাটি তাদের কাছে পৌঁছানোর আগেই নতুন করে লেখা হয়েছিল। আমাদের কাছে যা পৌঁছায় তা স্মারকগ্রন্থটিই, অখণ্ড। কিন্তু একটি নির্দিষ্ট জীবনের ভেতরে তা স্মরণে থাকল কি না — পড়া হলো, বোঝা হলো, মানা হলো কি না — গোটা ব্যাপারের এই একটি অংশই আল্লাহ, যিনি পাঠটি রক্ষা করেছেন, তার পাঠকের হাতে রেখে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining the Means",
          "bn": "মাধ্যমগুলোর সাথে যুক্ত হওয়া"
        },
        "p": [
          {
            "en": "The lived response to this verse is participation. Memorise — a page, a surah, a juz — and you become one link in the promise's ongoing fulfilment; teach a child al-Fatihah and you have extended the chain by a generation. Recitation in prayer, revision in the morning, listening on the road: these are the small mechanics by which a divine guarantee has moved through fourteen centuries of otherwise ordinary people, and they remain open to anyone who wants a share in them.",
            "bn": "এই আয়াতের যাপিত জবাব হলো অংশগ্রহণ। মুখস্থ করুন — একটি পৃষ্ঠা, একটি সূরা, এক জুয — আর আপনি হয়ে উঠবেন প্রতিশ্রুতির চলমান বাস্তবায়নের একটি কড়া; একটি শিশুকে আল-ফাতিহা শেখান — আপনি শৃঙ্খলটিকে এক প্রজন্ম বাড়িয়ে দিলেন। নামাযে তিলাওয়াত, সকালে পুনরাবৃত্তি, পথে শোনা: এই ছোট ছোট কলকব্জা দিয়েই একটি ঐশী নিশ্চয়তা চৌদ্দ শতাব্দীর নিতান্ত সাধারণ মানুষের ভেতর দিয়ে এগিয়ে এসেছে — আর যে-ই এতে অংশ চায়, তার জন্য সেগুলো আজও খোলা।"
          },
          {
            "en": "And let the preserved Book be treated as preserved: quoted carefully, translated honestly, checked against itself before being argued over. The verse is a particular comfort in an age anxious about information — records edited silently, histories rewritten, words put into mouths. One text, at least, sits under a guardianship that no archive and no algorithm can offer, and the heart that carries it carries something that time has been forbidden to take away.",
            "bn": "আর সংরক্ষিত কিতাবের সঙ্গে সংরক্ষিতের মতোই আচরণ হোক: সাবধানে উদ্ধৃত, সততার সঙ্গে অনূদিত, তর্কে নামার আগে নিজের সঙ্গেই মিলিয়ে দেখা। তথ্য নিয়ে উদ্বিগ্ন এক যুগে আয়াতটি বিশেষ এক সান্ত্বনা — যেখানে নথি নিঃশব্দে সম্পাদিত হয়, ইতিহাস নতুন করে লেখা হয়, মানুষের মুখে কথা বসিয়ে দেওয়া হয়। অন্তত একটি পাঠ এমন এক রক্ষণাবেক্ষণের নিচে আছে, যা কোনো মহাফেজখানা বা কোনো অ্যালগরিদম দিতে পারে না; আর যে হৃদয় তা বহন করে, সে এমন কিছু বহন করে — সময়ের জন্য যা কেড়ে নেওয়া নিষিদ্ধ করা হয়েছে।"
          }
        ]
      }
    ]
  },
  "15:49": {
    "sections": [
      {
        "h": {
          "en": "Inform, Not Say",
          "bn": "সংবাদ দাও, বলো নয়"
        },
        "p": [
          {
            "en": "The verb is nabbi', an imperative from a root whose noun is naba' — news of weight, the kind that changes what a person does next. 78:2 uses that noun for an-naba' al-'azim, the great news. The same root stands behind the word nabi. So the command is not qul, say, but nabbi': deliver this as news. Forgiveness is not left to be inferred from His conduct over time. It is dispatched, in six Arabic words, as an announcement.",
            "bn": "ক্রিয়াপদটি নাব্বি', একটি আদেশসূচক শব্দ, যার ধাতুর বিশেষ্য নাবা' — ভারী সংবাদ, যে ধরনের খবর মানুষ এরপর কী করবে তা বদলে দেয়। 78:2 আয়াত সেই বিশেষ্যটিই ব্যবহার করে আন-নাবা'উল 'আযীম বোঝাতে — মহাসংবাদ। একই ধাতু নবী শব্দটির পেছনেও দাঁড়িয়ে আছে। কাজেই আদেশটি 'কুল' — বলো — নয়, বরং নাব্বি': এটি সংবাদ হিসেবে পৌঁছে দাও। ক্ষমাকে সময়ের সঙ্গে তাঁর আচরণ থেকে অনুমান করে নেওয়ার জন্য ফেলে রাখা হয়নি। আরবি ছয়টি শব্দে তা ঘোষণা হিসেবে পাঠিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "'Ibadi, My servants, with the possessive attached. 39:53 keeps the same possessive when it addresses those who went to excess against themselves: O My servants. The relationship word arrives before any description of the record. And here there is no description at all — no qualifier narrows who is to be told, so the announcement is to be carried to whoever is a servant, which is everyone.",
            "bn": "'ইবাদী — আমার বান্দারা, সঙ্গে সম্বন্ধসূচক অংশটি জুড়ে দেওয়া। 39:53 আয়াতও একই সম্বন্ধ ধরে রাখে যখন তা তাদের সম্বোধন করে যারা নিজেদের ওপর বাড়াবাড়ি করেছে: হে আমার বান্দারা। সম্পর্কের শব্দটি আসে রেকর্ডের কোনো বর্ণনার আগেই। আর এখানে বর্ণনা একেবারেই নেই — কোনো বিশেষণ সংকীর্ণ করে দেয় না কাদের জানাতে হবে; কাজেই ঘোষণাটি বয়ে নিয়ে যেতে হবে যে-ই বান্দা তার কাছেই, অর্থাৎ সবার কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "It Is I",
          "bn": "আমিই তিনি"
        },
        "p": [
          {
            "en": "Anni ana al-ghafur ar-rahim. The emphasis is stacked three deep: the particle anna, then the standing pronoun ana, then the definite article on both names. Grammarians call a pronoun in this position a pronoun of separation, and its work is exclusivity. The sentence does not say I forgive, nor even I am forgiving. It hands over two titles with the definite article attached, which shuts every other claimant out of them.",
            "bn": "আন্নী আনাল গাফূরুর রাহীম। জোর এখানে তিন স্তরে সাজানো: প্রথমে অব্যয় আন্না, তারপর স্বতন্ত্র সর্বনাম আনা, তারপর দুটি নামের ওপরই নির্দিষ্টতাসূচক অংশ। ব্যাকরণবিদরা এই অবস্থানের সর্বনামকে বলেন বিচ্ছেদসূচক সর্বনাম, আর তার কাজ হলো একচেটিয়াকরণ। বাক্যটি বলে না 'আমি ক্ষমা করি', এমনকি 'আমি ক্ষমাশীল'ও নয়। এটি নির্দিষ্টতাসূচক অংশসহ দুটি উপাধি তুলে দেয়, যা সেগুলো থেকে অন্য সব দাবিদারকে বের করে দেয়।"
          },
          {
            "en": "The lexicographers connect the root of al-Ghafur to covering: the mighfar is the helmet that covers the head. Ar-Rahim is the mercy that acts. One conceals the record, the other gives beyond it, and the difference matters. Forgiveness without mercy would leave a person merely unpunished and standing where he was. This same pair closes 39:53, and the two names are set together often enough in the Book that the mufassirun treat them as one movement rather than two favours.",
            "bn": "অভিধানবিদরা আল-গাফূর শব্দের ধাতুকে আচ্ছাদনের সঙ্গে যুক্ত করেন: মিগফার হলো সেই শিরস্ত্রাণ যা মাথা ঢেকে রাখে। আর-রাহীম হলো সেই রহমত যা কাজ করে। একটি রেকর্ড ঢেকে দেয়, অন্যটি তার চেয়ে বেশি দেয় — আর পার্থক্যটি গুরুত্বপূর্ণ। রহমত ছাড়া ক্ষমা মানুষকে কেবল শাস্তিমুক্ত করে যেখানে ছিল সেখানেই দাঁড় করিয়ে রাখত। এই একই জোড়া 39:53 আয়াতকেও শেষ করে, আর নাম দুটি কিতাবে এত ঘনঘন একসঙ্গে বসে যে মুফাসসিরগণ এদের দুটি অনুগ্রহ নয়, একটিই গতি হিসেবে দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "And the Other Half",
          "bn": "আর বাকি অর্ধেক"
        },
        "p": [
          {
            "en": "15:50 comes immediately after, with nothing in between: and that My punishment, it is the painful punishment. It is built to the same pattern — the particle anna, the standing pronoun huwa, the definite article. The grammar of the second clause mirrors the first exactly, and that mirroring is the point. The two verses are one announcement in two halves, and neither half can be quoted as the whole of what the servants were to be told.",
            "bn": "15:50 আয়াতটি আসে ঠিক পরেই, মাঝখানে কিছু নেই: আর আমার শাস্তি — সেটিই যন্ত্রণাদায়ক শাস্তি। এটি গড়া হয়েছে একই ছাঁচে — অব্যয় আন্না, স্বতন্ত্র সর্বনাম হুয়া, নির্দিষ্টতাসূচক অংশ। দ্বিতীয় বাক্যের ব্যাকরণ প্রথমটির হুবহু প্রতিচ্ছবি, আর সেই প্রতিফলনই আসল কথা। দুটি আয়াত মিলে এক ঘোষণার দুই অর্ধেক, আর বান্দাদের যা জানানোর কথা ছিল তার পুরোটা হিসেবে কোনো অর্ধেককেই উদ্ধৃত করা যায় না।"
          },
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: if the believer knew what punishment is with Allah, none would hope for His Paradise; and if the disbeliever knew what mercy is with Allah, none would despair of His Paradise. That hadith is the pairing of these two verses stated as psychology. Each name is entirely true. A person holding only one of them has not been given the message.",
            "bn": "মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: মুমিন যদি জানত আল্লাহর কাছে কী শাস্তি আছে, কেউই তাঁর জান্নাতের আশা করত না; আর কাফির যদি জানত আল্লাহর কাছে কী রহমত আছে, কেউই তাঁর জান্নাত থেকে নিরাশ হতো না। এই হাদীসটি এই দুই আয়াতের জোড়টিকেই মনস্তত্ত্বের ভাষায় বলে দেয়। দুটি নামই সম্পূর্ণ সত্য। যে মানুষ কেবল একটি ধরে আছে, তাকে বার্তাটি পৌঁছে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah Acts It Out",
          "bn": "সূরাটি তা অভিনয় করে দেখায়"
        },
        "p": [
          {
            "en": "The placement is not incidental. 15:45-48 has just shown the righteous in gardens and springs, entering in peace, their breasts cleared of any rancour, seated facing one another, untouched by fatigue and never to be removed. The two announcements follow that. Then 15:51 uses the very same verb again — inform them about the guests of Ibrahim (AS) — so the reader is handed a third thing to be told, in the same imperative.",
            "bn": "অবস্থানটি আকস্মিক নয়। 15:45-48 আয়াতগুলো সবেমাত্র দেখিয়েছে মুত্তাকীদের বাগান ও ঝর্ণার মধ্যে, শান্তিতে প্রবেশ করছে, তাদের অন্তর থেকে বিদ্বেষ দূর করা হয়েছে, তারা মুখোমুখি আসনে বসা, কোনো ক্লান্তি তাদের স্পর্শ করে না আর সেখান থেকে কখনো বের করাও হবে না। এরপরই আসে দুটি ঘোষণা। তারপর 15:51 আয়াত সেই একই ক্রিয়াপদ আবার ব্যবহার করে — তাদের ইবরাহীম (আঃ)-এর মেহমানদের কথা জানিয়ে দাও — অর্থাৎ পাঠকের হাতে একই আদেশসূচক ভঙ্গিতে তৃতীয় একটি সংবাদ তুলে দেওয়া হয়।"
          },
          {
            "en": "And what follows demonstrates both halves in turn. The guests bring Ibrahim (AS) glad tidings of a learned boy, and when he wonders at it in old age they tell him not to be of the despairing; his answer in 15:56 is that none despairs of the mercy of his Lord except those astray. Then in 15:58-60 the same messengers say they were sent to a criminal people, and that the family of Lot (AS) would be saved. One errand, two outcomes, in the order the two verses gave them.",
            "bn": "আর এরপর যা আসে তা পর্যায়ক্রমে দুটি অর্ধেকই দেখিয়ে দেয়। মেহমানরা ইবরাহীম (আঃ)-কে এক জ্ঞানী পুত্রের সুসংবাদ দেন, আর বার্ধক্যে তিনি বিস্মিত হলে তাঁরা তাঁকে বলেন নিরাশদের অন্তর্ভুক্ত না হতে; 15:56 আয়াতে তাঁর জবাব — পথভ্রষ্টরা ছাড়া কেউ তার রবের রহমত থেকে নিরাশ হয় না। তারপর 15:58-60 আয়াতে সেই একই বার্তাবাহকরা বলেন, তাঁদের এক অপরাধী জাতির কাছে পাঠানো হয়েছে, আর লূত (আঃ)-এর পরিবারকে রক্ষা করা হবে। একটিই সফর, দুটি পরিণতি — আর যে ক্রমে আয়াত দুটি সেগুলো দিয়েছিল ঠিক সেই ক্রমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Being Told and Telling",
          "bn": "জানা ও জানানো"
        },
        "p": [
          {
            "en": "The verse contains two positions, and most readers occupy both. Someone is commanded to inform; someone is to be informed. Anyone who teaches, who raises children, who answers a question after a lesson, or who sits with a person convinced his own case is closed has been handed the content of what to say. It is not a technique or a form of words. It is two names, with the emphasis left in place.",
            "bn": "আয়াতটির ভেতরে দুটি অবস্থান আছে, আর অধিকাংশ পাঠকই দুটিতেই থাকে। একজনকে জানানোর আদেশ দেওয়া হয়েছে; আরেকজনকে জানানো হবে। যে শেখায়, যে সন্তান মানুষ করে, যে পাঠের শেষে কোনো প্রশ্নের উত্তর দেয়, কিংবা যে এমন মানুষের পাশে বসে যিনি নিশ্চিত যে তাঁর মামলা বন্ধ হয়ে গেছে — তাঁর হাতে কী বলতে হবে তার বিষয়বস্তু তুলে দেওয়া হয়েছে। এটি কোনো কৌশল নয়, কোনো বাঁধা বুলিও নয়। এটি দুটি নাম, তাদের জোরটুকু অক্ষত রেখে।"
          },
          {
            "en": "Despair rarely announces itself as despair. It usually looks like avoidance: not praying because the prayer feels dishonest, not attending because of who might be there, not asking because the answer is assumed. This verse takes the assumption away, and 15:50 keeps the correction from swinging into carelessness. A servant who holds both verses at once approaches Allah expecting to be received, and does not treat that expectation as permission.",
            "bn": "হতাশা খুব কমই নিজেকে হতাশা বলে ঘোষণা করে। সাধারণত তাকে দেখায় এড়িয়ে চলার মতো: নামায না পড়া, কারণ নামাযটাকে অসৎ মনে হয়; না যাওয়া, কারণ সেখানে কে থাকতে পারে; জিজ্ঞেস না করা, কারণ উত্তরটা ধরেই নেওয়া হয়েছে। এই আয়াত সেই ধরে নেওয়াটা সরিয়ে দেয়, আর 15:50 আয়াত সংশোধনটিকে বেপরোয়াপনার দিকে ঝুঁকে পড়তে দেয় না। যে বান্দা দুটি আয়াতই একসঙ্গে ধরে রাখে, সে গ্রহণ করা হবে এই প্রত্যাশা নিয়ে আল্লাহর কাছে আসে, আর সেই প্রত্যাশাকে অনুমতি বলে গণ্য করে না।"
          }
        ]
      }
    ]
  },
  "15:56": {
    "sections": [
      {
        "h": {
          "en": "Two Announcements First",
          "bn": "আগে দুটি ঘোষণা"
        },
        "p": [
          {
            "en": "A few lines before the story begins, Surah al-Hijr gives the Prophet ﷺ a pair of things to announce. In 15:49 he is told to inform Allah's servants that He is the Forgiving, the Merciful, and in 15:50 that His punishment is the painful punishment. The very next verse, 15:51, opens with, and inform them about the guests of Ibrahim. The announcement is stated, and then it is illustrated.",
            "bn": "কাহিনি শুরু হওয়ার কয়েক লাইন আগে সূরা আল-হিজর নবী ﷺ-কে দুটি জিনিস ঘোষণা করতে বলে। 15:49 আয়াতে তাঁকে বলা হয় আল্লাহর বান্দাদের জানাতে যে তিনি ক্ষমাশীল, দয়ালু; আর 15:50 আয়াতে জানাতে যে তাঁর শাস্তিই যন্ত্রণাদায়ক শাস্তি। ঠিক পরের আয়াত 15:51 শুরু হয় এভাবে — আর তাদের ইবরাহীমের অতিথিদের কথা জানাও। ঘোষণাটি দেওয়া হয়, তারপর তা দেখিয়ে দেওয়া হয়।"
          },
          {
            "en": "Both halves are illustrated in one visit. The same messengers who bring Ibrahim (AS) the news of a son bring destruction to the people of Lut (AS), as they say themselves in 15:58 and after. So Ibrahim's sentence about despair is not spoken in a vacuum. It is spoken inside a passage that has just insisted mercy and punishment are both real and both His.",
            "bn": "একটিমাত্র সফরেই দুটি অর্ধেকই দেখানো হয়। যে ফেরেশতারা ইবরাহীম (আঃ)-এর কাছে পুত্রের সুসংবাদ আনেন, তারাই লূত (আঃ)-এর জাতির কাছে ধ্বংস নিয়ে যান, যা তারা নিজেরাই 15:58 আয়াতে ও তার পরে বলেন। তাই নিরাশা নিয়ে ইবরাহীমের বাক্যটি শূন্যতায় উচ্চারিত নয়। এটি এমন এক অনুচ্ছেদের ভেতরে উচ্চারিত, যা সবেমাত্র জোর দিয়ে বলেছে — রহমত ও শাস্তি দুটোই বাস্তব এবং দুটোই তাঁর।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was Actually Said",
          "bn": "আসলে কী বলা হয়েছিল"
        },
        "p": [
          {
            "en": "The visitors enter and say peace, and he answers that he is apprehensive of them, both within 15:52 itself. In 15:53 they tell him not to fear and give him good news of a learned boy. His reply in 15:54 is the hinge: have you given me good news although old age has come upon me, then of what do you give news? They answer in 15:55 that the news is given in truth, so do not be of the despairing.",
            "bn": "অতিথিরা ঢোকেন এবং সালাম বলেন, আর তিনি জবাবে বলেন যে তিনি তাঁদের ব্যাপারে শঙ্কিত — দুটোই 15:52 আয়াতের ভেতরেই। তাঁরা তাঁকে ভয় না পেতে বলেন এবং 15:53 আয়াতে এক জ্ঞানী পুত্রের সুসংবাদ দেন। 15:54 আয়াতে তাঁর জবাবটিই মোড় ঘোরানো জায়গা: তোমরা আমাকে সুসংবাদ দিচ্ছ যখন বার্ধক্য আমাকে স্পর্শ করেছে, তাহলে কিসের সুসংবাদ দিচ্ছ? তাঁরা 15:55 আয়াতে জবাব দেন যে সুসংবাদটি সত্য সহকারেই দেওয়া হয়েছে, কাজেই নিরাশদের অন্তর্ভুক্ত হয়ো না।"
          },
          {
            "en": "That last phrase is the one to hold on to, because Ibrahim (AS) answers it with its own word. The angels use the participle al-qanitin, the despairing ones — from the root with the emphatic ta, not the qanitin of devout obedience in 33:35 — and he replies with the verb from the same root, yaqnatu. His answer is seven words in the Arabic, and it is a question rather than a defence: and who despairs of the mercy of his Lord except those who are astray? He does not say he was not despairing. He says that the category does not fit a person who knows his Lord.",
            "bn": "শেষ বাক্যাংশটিই ধরে রাখার মতো, কারণ ইবরাহীম (আঃ) তার জবাব দেন সেই শব্দটি দিয়েই। ফেরেশতারা ব্যবহার করেন ইসমে ফা'ইল 'আল-ক্বানিত্বীন' — নিরাশ ব্যক্তিরা; শব্দটি ত্ব-যুক্ত ধাতু থেকে, যা 33:35 আয়াতের আনুগত্যবাচক 'আল-ক্বানিতীন' নয়; তিনি জবাব দেন একই ধাতুমূলের ক্রিয়াপদ 'ইয়াক্বনাতু' দিয়ে। তাঁর জবাবটি আরবিতে সাতটি শব্দের, আর তা আত্মপক্ষ সমর্থন নয়, একটি প্রশ্ন: পথভ্রষ্টরা ছাড়া আর কে তার প্রতিপালকের রহমত থেকে নিরাশ হয়? তিনি বলেন না যে তিনি নিরাশ ছিলেন না। তিনি বলেন, যে নিজের রবকে চেনে তার গায়ে এই শ্রেণিটি লাগে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder Is Not Doubt",
          "bn": "বিস্ময় সংশয় নয়"
        },
        "p": [
          {
            "en": "It is easy to misread his question in 15:54 as hesitation. The commentators, Ibn Kathir and al-Qurtubi among them, read it as astonishment at the size of the gift rather than doubt about the Giver. His own reply in 15:56 settles the matter, since a man defending himself against a charge of despair would answer differently. He does not plead his record; he states a rule about who despairs, and lets the rule speak for him.",
            "bn": "15:54 আয়াতে তাঁর প্রশ্নটিকে দ্বিধা হিসেবে ভুল পড়া সহজ। মুফাসসিরগণ, তাঁদের মধ্যে ইবনে কাসীর ও আল-কুরতুবী, এটিকে পড়েন দাতার ব্যাপারে সংশয় হিসেবে নয়, বরং দানের বিশালতায় বিস্ময় হিসেবে। 15:56 আয়াতে তাঁর নিজের জবাবই বিষয়টি মীমাংসা করে দেয়, কারণ নিরাশার অভিযোগ থেকে আত্মরক্ষা করতে চাওয়া মানুষ অন্যভাবে জবাব দিত। তিনি নিজের রেকর্ড পেশ করেন না; তিনি কে নিরাশ হয় তার একটি নিয়ম বলে দেন, আর নিয়মটিকেই নিজের হয়ে কথা বলতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Despair Named as Straying",
          "bn": "নিরাশাকে পথভ্রষ্টতা বলা"
        },
        "p": [
          {
            "en": "The word he uses, qunut with the emphatic ta — not the qunut of devotion recited in witr — is not ordinary sadness. It is the settled conclusion that there is no way through — the closing of a case. And the only people he allows into that category are ad-dallun, those who have gone off the road. That is a diagnosis, not an insult. Despair is treated as a navigational error: a person who has concluded that Allah's mercy has run out has misjudged where he is and what is around him.",
            "bn": "তিনি যে শব্দটি ব্যবহার করেন, 'ক্বুনূত্ব' (ত্ব দিয়ে — বিতরের দোয়ায়ে কুনূতের 'কুনূত' নয়), তা সাধারণ দুঃখ নয়। এটি সেই স্থির সিদ্ধান্ত যে আর কোনো পথ নেই — মামলাটি বন্ধ করে দেওয়া। আর এই শ্রেণিতে তিনি কেবল 'আদ-দাল্লীন' — যারা পথ থেকে সরে গেছে — তাদেরই ঢুকতে দেন। এটি অপমান নয়, রোগনির্ণয়। নিরাশাকে দেখা হয় পথ চেনার ভুল হিসেবে: যে সিদ্ধান্তে পৌঁছেছে যে আল্লাহর রহমত ফুরিয়ে গেছে, সে ভুল হিসাব করেছে সে কোথায় আছে আর তার চারপাশে কী আছে।"
          },
          {
            "en": "The same judgement is passed once more, in Ya'qub's instruction to his sons at 12:87, and the same word is forbidden outright in the address to those who have gone to excess against themselves at 39:53, both of which this app treats at length in their own articles. What is distinctive here is the speaker and the situation. The other two are spoken to people already in grief or in guilt. This one is spoken by a man receiving good news, which is when the rule is easiest to state and hardest to remember later.",
            "bn": "একই রায় আরও একবার দেওয়া হয় — 12:87 আয়াতে ইয়াকুবের পুত্রদের প্রতি নির্দেশে; আর একই শব্দটি সরাসরি নিষেধ করা হয় 39:53 আয়াতে নিজেদের ওপর বাড়াবাড়ি করা লোকদের প্রতি সম্বোধনে; এই অ্যাপ দুটিকেই আলাদা লেখায় বিস্তারিত আলোচনা করেছে। এখানে যা স্বতন্ত্র তা হলো বক্তা ও পরিস্থিতি। ওই দুটি বলা হয়েছে এমন মানুষদের, যারা ইতিমধ্যেই শোকে বা অপরাধবোধে আছে। এটি বলছেন এমন একজন, যিনি সুসংবাদ পাচ্ছেন — আর তখনই নিয়মটি বলা সবচেয়ে সহজ এবং পরে মনে রাখা সবচেয়ে কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying It Before You Need It",
          "bn": "প্রয়োজনের আগেই বলে রাখা"
        },
        "p": [
          {
            "en": "That is the practical use of this verse. Despair rarely announces itself as a belief about Allah. It arrives as arithmetic — the age, the years, the diagnosis, the record — and the arithmetic is usually correct. Ibrahim (AS) does not dispute his age. He simply refuses to let the arithmetic decide what Allah will do, because the sum was never the whole of the matter.",
            "bn": "এটিই এই আয়াতের ব্যবহারিক প্রয়োগ। নিরাশা খুব কমই আল্লাহ সম্পর্কে একটি বিশ্বাস হিসেবে নিজের পরিচয় দেয়। এটি আসে হিসাব হয়ে — বয়স, বছরগুলো, রোগনির্ণয়, অতীতের খাতা — আর হিসাবটি সাধারণত ঠিকই থাকে। ইবরাহীম (আঃ) নিজের বয়স নিয়ে তর্ক করেন না। তিনি কেবল হিসাবটিকে এই সিদ্ধান্ত নিতে দেন না যে আল্লাহ কী করবেন, কারণ যোগফলটি কখনোই গোটা ব্যাপারটি ছিল না।"
          },
          {
            "en": "So the habit worth building is to state the rule while things are calm, the way he did. Hope in Allah is not optimism about outcomes and it does not require predicting one. It is a settled position about who is in charge of them. A believer may fear, may weep, may see no route at all — and still refuse the one conclusion this verse puts outside the boundary.",
            "bn": "তাই গড়ে তোলার মতো অভ্যাসটি হলো, তিনি যেমন করেছিলেন তেমনি শান্ত সময়েই নিয়মটি বলে রাখা। আল্লাহর ওপর আশা মানে ফলাফল নিয়ে আশাবাদ নয়, আর তা কোনো ফলাফলের ভবিষ্যদ্বাণীও দাবি করে না। এটি একটি স্থির অবস্থান — কে সেগুলোর দায়িত্বে আছেন সে সম্পর্কে। একজন মুমিন ভয় পেতে পারে, কাঁদতে পারে, কোনো পথই দেখতে না পেতে পারে — তবু এই আয়াত যে একটিমাত্র সিদ্ধান্তকে সীমার বাইরে রেখেছে, সেটি সে প্রত্যাখ্যান করে।"
          }
        ]
      }
    ]
  },
  "15:85": {
    "sections": [
      {
        "h": {
          "en": "Two Facts and a Conclusion",
          "bn": "দুটি সত্য, একটি সিদ্ধান্ত"
        },
        "p": [
          {
            "en": "The verse sets down two facts and then draws a command out of them. We did not create the heavens and the earth and what is between them except in truth. And the Hour is surely coming. Then the fa of consequence: so overlook with a gracious overlooking. The logic runs through the middle statement. If nothing was made pointlessly and a day of settlement is fixed, then no injury a person suffers will be left unaccounted for, and the pressure to settle it personally drops away.",
            "bn": "আয়াতটি দুটি সত্য স্থাপন করে, তারপর সেগুলো থেকে একটি নির্দেশ টেনে আনে। আমি আসমানসমূহ, যমীন ও এ দুইয়ের মাঝে যা কিছু আছে তা যথার্থ উদ্দেশ্য ছাড়া সৃষ্টি করিনি। আর কিয়ামত অবশ্যই আসবে। এরপর পরিণতিসূচক 'ফা': কাজেই উত্তম পন্থায় উপেক্ষা করো। যুক্তিটি চলে মাঝের বাক্যটির ভেতর দিয়ে। যদি কিছুই অনর্থক সৃষ্টি না হয়ে থাকে এবং হিসাব চুকানোর একটি দিন নির্ধারিত থাকে, তবে মানুষ যে অন্যায়ের শিকার হয় তার কোনোটিই হিসাবের বাইরে থাকবে না — আর নিজে হাতে তা চুকিয়ে নেওয়ার চাপটুকু তখন নেমে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Falls in al-Hijr",
          "bn": "সূরা হিজরে এর অবস্থান"
        },
        "p": [
          {
            "en": "Placement sharpens it. 15:80-84 has just recounted the companions of al-Hijr, who denied the messengers, whom the shriek seized in the morning, and whose earnings availed them nothing. The command to overlook comes directly after a nation has been destroyed for its denial. The arrangement is deliberate: the man being told to release his own injuries has just been shown, in detail, that the settling of accounts is real, thorough, and not his department.",
            "bn": "অবস্থানটি বিষয়টিকে আরও ধারালো করে। 15:80-84-এ সদ্যই বর্ণিত হয়েছে হিজরের অধিবাসীদের কথা — যারা রাসূলদের অস্বীকার করেছিল, যাদের ভোরবেলা এক বিকট আওয়াজ গ্রাস করেছিল, আর যাদের উপার্জন কোনো কাজে আসেনি। উপেক্ষা করার নির্দেশটি আসে ঠিক এমন এক জাতির ধ্বংসের বর্ণনার পরেই, যারা অস্বীকারের কারণে ধ্বংস হয়েছিল। বিন্যাসটি উদ্দেশ্যপ্রণোদিত: যাঁকে নিজের আঘাতগুলো ছেড়ে দিতে বলা হচ্ছে, তাঁকে সদ্যই বিস্তারিতভাবে দেখানো হয়েছে যে হিসাব চুকানোর কাজটি সত্যি, নিখুঁত — এবং তা তাঁর দায়িত্ব নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Safh al-Jamil",
          "bn": "আস-সাফহুল জামীল"
        },
        "p": [
          {
            "en": "Safh is from a root that names the side or the broad face of a thing — the flat of a page, or of a blade. To do safh is to turn that face: to turn the page over an injury, and afterwards to turn toward the offender with a clear face rather than a cold one. That is why the phrase is rendered in more than one way, sometimes as gracious forgiveness and sometimes as turning away in a gracious manner. The word genuinely holds both movements.",
            "bn": "'সাফহ' এসেছে এমন এক মূল থেকে যা কোনো কিছুর পাশ বা চওড়া তলকে বোঝায় — পৃষ্ঠার সমতল, কিংবা তলোয়ারের ফলার সমতল। সাফহ করা মানে সেই তলটি ঘুরিয়ে দেওয়া: আঘাতের ওপর পৃষ্ঠাটি উল্টে দেওয়া, আর তারপর অপরাধীর দিকে ঠান্ডা মুখে নয়, বরং পরিষ্কার মুখে ফেরা। এ কারণেই কথাটির অনুবাদ একাধিকভাবে হয় — কখনো 'উদারভাবে ক্ষমা করা', কখনো 'উত্তম পন্থায় এড়িয়ে যাওয়া'। শব্দটি সত্যিই এই দুই গতিকেই ধারণ করে।"
          },
          {
            "en": "The Arabic reinforces it by construction. The command is followed by its own cognate noun carrying the definite article, and then by an adjective — fasfahi as-safha al-jamil — a pattern Arabic uses to specify the manner of an act rather than merely to repeat it. So the verse does not ask for overlooking and then add a compliment to it. It names a particular kind of overlooking: the beautiful kind, with no reproach attached and no reminder issued afterwards.",
            "bn": "আরবি গঠনটিও বিষয়টিকে জোরালো করে। নির্দেশের পরেই আসে তারই সমমূল বিশেষ্য, নির্দিষ্টতাবাচক উপসর্গসহ, আর তারপর একটি বিশেষণ — 'ফাসফাহিস সাফহাল জামীল' — আরবিতে এই গঠন কোনো কাজের পুনরাবৃত্তি বোঝাতে নয়, বরং তার ধরন নির্দিষ্ট করতে ব্যবহৃত হয়। অর্থাৎ আয়াত কেবল উপেক্ষা করতে বলে তারপর একটি প্রশংসা জুড়ে দিচ্ছে না। এটি উপেক্ষার একটি বিশেষ ধরনের নাম নিচ্ছে: সেই সুন্দর ধরনটি, যার সঙ্গে কোনো খোঁটা নেই এবং যার পরে কোনো স্মরণ করিয়ে দেওয়া নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Beautiful Withdrawals",
          "bn": "সুন্দর প্রত্যাহারগুলো"
        },
        "p": [
          {
            "en": "Jamil is attached to a small family of acts in the Quran, and they share something. 12:18 gives sabrun jamil, beautiful patience, from Ya'qub (AS) when the shirt is brought to him. 73:10 commands hajran jamilan, a gracious withdrawal from what the deniers say. 33:28 and 33:49 use sarahan jamilan for a gracious release in divorce. Each names something a person refrains from doing, and in each case jamil rules out the ugliness that usually accompanies restraint.",
            "bn": "কুরআনে 'জামীল' শব্দটি অল্প কয়েকটি কাজের সঙ্গে যুক্ত হয়েছে, আর সেগুলোর মধ্যে একটি মিল আছে। 12:18-এ আছে 'সবরুন জামীল' — সুন্দর ধৈর্য, যা ইয়াকুব (আঃ) বলেন যখন তাঁর কাছে জামাটি আনা হয়। 73:10-এ নির্দেশ 'হাজরান জামীলা' — অস্বীকারকারীদের কথা থেকে ভদ্রভাবে সরে থাকা। 33:28 ও 33:49-এ 'সারাহান জামীলা' ব্যবহৃত হয়েছে বিবাহবিচ্ছেদে সুন্দরভাবে বিদায় দেওয়ার অর্থে। প্রতিটিই এমন কিছু, যা মানুষ করা থেকে বিরত থাকে; আর প্রতিটি ক্ষেত্রেই 'জামীল' সেই কুৎসিততাকে বাদ দিয়ে দেয় যা সাধারণত সংযমের সঙ্গে জুড়ে থাকে।"
          },
          {
            "en": "The commentators gloss these in the same spirit: patience that is beautiful is patience without complaint poured out to people, and withdrawal that is beautiful is withdrawal without an insult returned. Read that way, jamil is the difference between two things that look identical from outside. One man forgives and mentions it every year afterwards. Another turns the page. Both have dropped the claim; only the second has done what this verse actually asks for.",
            "bn": "মুফাসসিরগণ এগুলোর ব্যাখ্যা একই সুরে করেন: সুন্দর ধৈর্য হলো এমন ধৈর্য যাতে মানুষের কাছে অভিযোগ ঢেলে দেওয়া হয় না, আর সুন্দর প্রত্যাহার হলো এমন সরে আসা যাতে গালির বদলে গালি ফেরত দেওয়া হয় না। এভাবে পড়লে বোঝা যায়, 'জামীল' হলো বাইরে থেকে একরকম দেখতে দুটি জিনিসের মধ্যেকার পার্থক্য। একজন ক্ষমা করে দেয়, তারপর প্রতিবছর সে কথা মনে করিয়ে দেয়। আরেকজন পৃষ্ঠাটি উল্টে দেয়। দুজনেই দাবি ছেড়েছে; কিন্তু এই আয়াত যা চেয়েছে তা কেবল দ্বিতীয়জনই করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Posture of the Undefended",
          "bn": "এ অসহায়ের ভঙ্গি নয়"
        },
        "p": [
          {
            "en": "Overlooking here is not surrender. Later in the same surah, 15:94 pairs a command to proclaim openly what he was commanded with turning away from the idolaters, and 15:95 adds that We are sufficient for you against the mockers. A man who has been told his defence is handled can afford to stop conducting it. Some of the commentators counted verses of this kind among those superseded by later legislation about fighting; others held that an instruction about character is not the sort of ruling a later verse repeals.",
            "bn": "এখানে উপেক্ষা করা মানে আত্মসমর্পণ নয়। এই সূরারই পরের দিকে 15:94 প্রকাশ্যে ঘোষণা করার নির্দেশের সঙ্গে জুড়ে দেয় মুশরিকদের থেকে মুখ ফিরিয়ে নেওয়ার কথা, আর 15:95 যোগ করে — বিদ্রূপকারীদের বিরুদ্ধে আমিই তোমার জন্য যথেষ্ট। যে মানুষটিকে জানিয়ে দেওয়া হয়েছে যে তার পক্ষসমর্থনের দায়িত্ব অন্য কেউ নিয়েছেন, সে নিজে সেই মামলা চালানো বন্ধ করতে পারে। কিছু মুফাসসির এ ধরনের আয়াতকে পরবর্তী যুদ্ধসংক্রান্ত বিধানের দ্বারা রহিত হওয়া আয়াতের মধ্যে গণ্য করেছেন; অন্যরা বলেছেন, চরিত্র সম্পর্কিত নির্দেশ এমন ধরনের বিধান নয় যা পরের কোনো আয়াত রহিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Costs and What It Buys",
          "bn": "এর মূল্য, আর এর প্রাপ্তি"
        },
        "p": [
          {
            "en": "The verse is honest about the price. Safh does not require pretending that the injury did not happen or that it did not matter; the Quran nowhere asks anyone to lie to himself. It requires that the page be turned and stay turned, which is harder, because a grievance is useful — it explains a person to himself and it excuses things. 42:40 states the offer plainly: whoever pardons and puts matters right, his reward is upon Allah.",
            "bn": "আয়াতটি মূল্যের ব্যাপারে সৎ। সাফহ-এর জন্য এমন ভান করার দরকার নেই যে আঘাতটি ঘটেনি কিংবা তা গুরুত্বপূর্ণ ছিল না; কুরআন কোথাও কাউকে নিজের কাছে মিথ্যা বলতে বলে না। এতে প্রয়োজন কেবল এটুকু যে পৃষ্ঠাটি উল্টে দিতে হবে এবং উল্টানো অবস্থাতেই রাখতে হবে — যা আরও কঠিন, কারণ ক্ষোভ কাজে লাগে; তা মানুষকে নিজের কাছে ব্যাখ্যা করে আর অনেক কিছুর অজুহাত জোগায়। 42:40 প্রস্তাবটি স্পষ্ট করে বলে: যে ক্ষমা করে ও অবস্থা সংশোধন করে, তার প্রতিদান আল্লাহর কাছে।"
          },
          {
            "en": "Three verses later, the surah shows what a heart with the page turned is free to do. 15:88 tells the Prophet ﷺ not to stretch his eyes toward what others have been given, not to grieve over them, and to lower his wing to the believers. Resentment and envy occupy the same room in a person. Clear it, and the attention goes where the verse sends it, to the people who are actually standing with you.",
            "bn": "তিন আয়াত পরেই সূরাটি দেখায়, যে হৃদয় পৃষ্ঠা উল্টে দিয়েছে সে কী করতে মুক্ত। 15:88 নবী ﷺ-কে বলে, অন্যদের যা দেওয়া হয়েছে তার দিকে চোখ বাড়িয়ে না তাকাতে, তাদের জন্য দুঃখ না করতে, আর মুমিনদের প্রতি নিজের ডানা নামিয়ে দিতে। ক্ষোভ আর হিংসা মানুষের ভেতরে একই ঘরে থাকে। ঘরটি খালি করুন, তখন মনোযোগ সেদিকেই যাবে যেদিকে আয়াত পাঠাচ্ছে — যারা সত্যিই আপনার পাশে দাঁড়িয়ে আছে তাদের দিকে।"
          }
        ]
      }
    ]
  },
  "15:99": {
    "sections": [
      {
        "h": {
          "en": "The Surah's Last Word",
          "bn": "সূরার শেষ কথা"
        },
        "p": [
          {
            "en": "Surah al-Hijr ends with five Arabic words: and worship your Lord until the certainty comes to you. They are the third of three instructions given in a row to a man under strain. 15:97 states the problem — We already know that your breast is constrained by what they say. 15:98 gives the first two remedies: so glorify your Lord with praise, and be of those who prostrate. Then this verse extends the remedy past the crisis and across the whole of a life.",
            "bn": "সূরা আল-হিজর শেষ হয় আরবিতে মাত্র পাঁচটি শব্দে: আর তোমার রবের ইবাদত করতে থাকো যতক্ষণ না তোমার কাছে সুনিশ্চিত বিষয়টি আসে। চাপে থাকা একজন মানুষকে পরপর দেওয়া তিনটি নির্দেশের এটি তৃতীয়। 15:97 সমস্যাটি বলে — আমি তো জানিই, তারা যা বলে তাতে তোমার বুক সংকুচিত হয়। 15:98 প্রথম দুটি প্রতিকার দেয়: কাজেই তোমার রবের প্রশংসাসহ তাসবীহ পড়ো, আর সিজদাকারীদের অন্তর্ভুক্ত হও। এরপর এই আয়াত প্রতিকারটিকে সংকট ছাড়িয়ে গোটা জীবনের ওপর বিস্তৃত করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Yaqin Is Death",
          "bn": "'আল-ইয়াকীন' মানে মৃত্যু"
        },
        "p": [
          {
            "en": "The mufassirun are agreed that al-yaqin here means death, and the Quran settles the question with its own usage. In 74:46-47 the people of the Fire recount their old habits and say that they used to deny the Day of Recompense until al-yaqin came to them. They are speaking from after it, so what arrived was death. The verb in our verse points the same way: ya'tiyaka, it comes to you — an arrival from outside, not a state a person reaches by his own effort.",
            "bn": "মুফাসসিরগণ একমত যে এখানে 'আল-ইয়াকীন' অর্থ মৃত্যু, আর কুরআন নিজের ব্যবহারেই বিষয়টি নিষ্পত্তি করে দেয়। 74:46-47-এ জাহান্নামীরা তাদের পুরোনো অভ্যাসের কথা বলে জানায় যে তারা প্রতিদান দিবসকে অস্বীকার করত, যতক্ষণ না তাদের কাছে 'আল-ইয়াকীন' এসে পৌঁছায়। তারা কথা বলছে সেটি পেরিয়ে আসার পর, কাজেই যা এসেছিল তা মৃত্যু। আমাদের আয়াতের ক্রিয়াপদটিও একই দিকে ইঙ্গিত করে: 'ইয়া'তিয়াকা' — তা তোমার কাছে আসে; অর্থাৎ বাইরে থেকে আসা কিছু, নিজের চেষ্টায় পৌঁছানো কোনো অবস্থা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Other Reading Is Rejected",
          "bn": "অন্য পাঠটি কেন প্রত্যাখ্যাত"
        },
        "p": [
          {
            "en": "The point is doctrinally serious, because a misreading has been built on it. If al-yaqin meant certainty in the sense of spiritual attainment, then hatta, until, would make worship expire at the moment a person believed he had arrived, and prayer would become a ladder to be kicked away. The scholars reject that reading outright. Nothing in the Book or the Sunnah exempts anyone from the obligations of worship at any station; obligation ends with life, and with nothing else.",
            "bn": "বিষয়টি আকীদাগতভাবে গুরুতর, কারণ এর ওপর একটি ভুল পাঠ দাঁড় করানো হয়েছে। 'আল-ইয়াকীন' যদি আধ্যাত্মিক প্রাপ্তির অর্থে 'নিশ্চয়তা' বোঝাত, তবে 'হাত্তা' অর্থাৎ 'যতক্ষণ না' শব্দটির কারণে ইবাদত সেই মুহূর্তেই শেষ হয়ে যেত যখন কেউ ভাবত সে পৌঁছে গেছে, আর নামায হয়ে যেত এমন এক সিঁড়ি যা উঠে গিয়ে লাথি মেরে ফেলে দেওয়া যায়। আলিমগণ এই পাঠ সরাসরি প্রত্যাখ্যান করেন। কিতাব ও সুন্নাহর কোথাও কোনো মর্যাদার কারণে কাউকে ইবাদতের দায়িত্ব থেকে অব্যাহতি দেওয়া হয়নি; এই দায়িত্ব শেষ হয় জীবনের সঙ্গে, আর অন্য কিছুতে নয়।"
          },
          {
            "en": "The refutation is also biographical. The most certain of creation was the Prophet ﷺ, who saw what nobody else saw and was told that his sins were forgiven, and he did not reduce his worship by a single prayer. Al-Bukhari narrates from Aisha (RA) that during the illness of which he died he directed that Abu Bakr (RA) should lead the people in prayer; the ordering of the prayer was among his concerns while he was dying. Certainty deepened the worship. It never replaced it.",
            "bn": "খণ্ডনটি জীবনীগতও। সৃষ্টির মধ্যে সবচেয়ে নিশ্চিত জ্ঞানের অধিকারী ছিলেন নবী ﷺ, যিনি এমন কিছু দেখেছেন যা আর কেউ দেখেনি এবং যাঁকে জানানো হয়েছিল যে তাঁর গুনাহ ক্ষমা করে দেওয়া হয়েছে; অথচ তিনি নিজের ইবাদত এক ওয়াক্তও কমাননি। ইমাম বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, যে অসুখে তাঁর ইন্তেকাল হয় সেই অসুস্থতার সময় তিনি নির্দেশ দেন যে আবু বকর (রাঃ) মানুষকে নিয়ে নামায পড়াবেন; মৃত্যুশয্যাতেও নামাযের ব্যবস্থাপনা ছিল তাঁর চিন্তার বিষয়। নিশ্চয়তা ইবাদতকে গভীর করেছে, কখনো তার বিকল্প হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Your Lord",
          "bn": "তোমার রবের ইবাদত করো"
        },
        "p": [
          {
            "en": "The command says rabbaka, your Lord — the One who has raised you, provided for you and corrected you — rather than a name of majesty alone. And 'ibadah is wider than the rituals. The scholars define it as every word and deed, inward and outward, that Allah loves and is pleased with, which is why a lifetime of it is a liveable instruction rather than a crushing one. 51:56 makes that same breadth the stated purpose of the creation of jinn and mankind.",
            "bn": "নির্দেশে বলা হয়েছে 'রাব্বাকা' — তোমার রব, যিনি তোমাকে প্রতিপালন করেছেন, রিযিক দিয়েছেন ও সংশোধন করেছেন — কেবল মহিমার কোনো নাম নয়। আর 'ইবাদত' আনুষ্ঠানিক আমলের চেয়ে বিস্তৃত। আলিমগণ একে সংজ্ঞায়িত করেন এভাবে: প্রতিটি কথা ও কাজ, প্রকাশ্য ও গোপন, যা আল্লাহ ভালোবাসেন ও যাতে তিনি সন্তুষ্ট। এ কারণেই সারাজীবনব্যাপী এই নির্দেশ পিষে ফেলার মতো নয়, বরং পালনযোগ্য। 51:56 এই একই ব্যাপ্তিকেই জিন ও মানুষ সৃষ্টির ঘোষিত উদ্দেশ্য বানিয়ে দেয়।"
          },
          {
            "en": "6:162 shows what that breadth looks like when a believer says it about himself: my prayer, my rites, my living and my dying are for Allah, Lord of the worlds. Living is placed in the same list as prayer. Under that definition, the years in which a person can no longer stand for prayer are not years off; illness, old age and a failing memory still leave dhikr, du'a, patience and intention, all of which the verse's own word covers.",
            "bn": "6:162 দেখায়, একজন মুমিন যখন নিজের সম্পর্কে কথাটি বলেন তখন সেই ব্যাপ্তি কেমন দেখায়: আমার নামায, আমার কুরবানি, আমার জীবন ও আমার মৃত্যু — সবই বিশ্বজগতের প্রতিপালক আল্লাহর জন্য। বেঁচে থাকাকে রাখা হয়েছে নামাযের সঙ্গে একই তালিকায়। এই সংজ্ঞা অনুযায়ী, যে বছরগুলোতে মানুষ আর দাঁড়িয়ে নামায পড়তে পারে না সেগুলো ছুটির বছর নয়; অসুস্থতা, বার্ধক্য আর দুর্বল হয়ে আসা স্মৃতির পরেও থেকে যায় যিকর, দুআ, ধৈর্য ও নিয়ত — আয়াতের শব্দটি এগুলোর সবই ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Deadline Nobody Misses",
          "bn": "যে সময়সীমা কেউ এড়ায় না"
        },
        "p": [
          {
            "en": "There is a mercy in the wording that is easy to miss. The command has a terminus. It is not endless; it runs to a fixed point, and that point arrives on its own without being sought or scheduled by anyone. Read against 3:102, which tells the believers not to die except as Muslims, the two verses meet. Since the hour is not ours to choose, the only reliable way to end well is to be found doing this continuously.",
            "bn": "শব্দচয়নের ভেতরে এমন এক রহমত আছে যা সহজেই চোখ এড়ায়। নির্দেশটির একটি শেষবিন্দু আছে। এটি অন্তহীন নয়; এটি চলে একটি নির্ধারিত বিন্দু পর্যন্ত, আর সেই বিন্দুটি কারও খোঁজা বা সময়সূচি ঠিক করা ছাড়াই নিজে থেকেই এসে পড়ে। 3:102-এর পাশে রেখে পড়ুন, যেখানে মুমিনদের বলা হয়েছে মুসলিম অবস্থা ছাড়া মৃত্যুবরণ না করতে — তখন দুই আয়াত এক জায়গায় মেলে। সময়টি যেহেতু আমাদের বেছে নেওয়ার নয়, তাই ভালোভাবে শেষ করার একমাত্র নির্ভরযোগ্য উপায় হলো এই কাজেই ধারাবাহিকভাবে নিয়োজিত অবস্থায় ধরা পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing What You Can Carry",
          "bn": "যা শেষ পর্যন্ত বইতে পারবেন"
        },
        "p": [
          {
            "en": "The practical question this verse forces is not how much a person can do this month, but what he will still be doing in thirty years. That reframes ambition downward and consistency upward. A fixed daily portion of Quran that survives a bad week, the obligatory prayers guarded at their times, one charity that does not depend on enthusiasm — these are the deeds shaped for a command that carries no expiry date.",
            "bn": "এই আয়াত যে ব্যবহারিক প্রশ্নটি সামনে আনে তা হলো — এ মাসে কেউ কতটা করতে পারে তা নয়, বরং ত্রিশ বছর পরেও সে কোন কাজটি করে যাচ্ছে। এতে উচ্চাভিলাষ নেমে আসে আর ধারাবাহিকতা উঁচুতে ওঠে। প্রতিদিনের একটি নির্দিষ্ট কুরআন তিলাওয়াতের অংশ যা খারাপ সপ্তাহেও টিকে থাকে, ফরয নামাযগুলো তার নির্ধারিত সময়ে রক্ষা করা, একটি দান যা উদ্দীপনার ওপর নির্ভর করে না — এগুলোই সেই আমল, যেগুলোর গড়ন এমন এক নির্দেশের উপযোগী যার কোনো মেয়াদ শেষ হওয়ার তারিখ নেই।"
          },
          {
            "en": "And the surah's own arrangement is worth keeping. When the chest tightened from what people were saying, the answer given was not withdrawal but tasbih, prostration and continued worship. Difficulty is not a reason to suspend the practice; in this passage it is the occasion for it. Whoever holds to the deed on the days it feels useless has understood the word until in the way this verse meant it.",
            "bn": "আর সূরার নিজস্ব বিন্যাসটিও ধরে রাখার মতো। মানুষের কথায় যখন বুক সংকুচিত হয়ে আসছিল, তখন যে উত্তর দেওয়া হয়েছিল তা গুটিয়ে যাওয়া নয় — বরং তাসবীহ, সিজদা ও ইবাদত চালিয়ে যাওয়া। কষ্ট আমল স্থগিত করার কারণ নয়; এই অংশে কষ্টই বরং আমলের উপলক্ষ। যিনি সেই দিনগুলোতেও আমল ধরে রাখেন যেদিন তা নিষ্ফল মনে হয়, তিনিই 'যতক্ষণ না' কথাটি সেই অর্থে বুঝেছেন যে অর্থে এই আয়াত তা বলেছে।"
          }
        ]
      }
    ]
  }
});
