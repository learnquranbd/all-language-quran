/**
 * Tadabbur long-form articles — surah 7.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "7:23": {
    "sections": [
      {
        "h": {
          "en": "The Question Before the Prayer",
          "bn": "প্রার্থনার আগের প্রশ্ন"
        },
        "p": [
          {
            "en": "These words sit inside a scene, and the scene explains them. 7:19 places Adam (AS) and his wife in the Garden with a single restriction. 7:20-21 have the whisperer at work, offering a reason for the restriction and swearing that he is a sincere adviser. 7:22 has them taste the tree, their nakedness appear, and their Lord call out: did I not forbid you that tree and tell you Satan is a clear enemy to you? This verse is the answer to that question.",
            "bn": "এই কথাগুলো একটি দৃশ্যের ভেতরে বসে আছে, আর দৃশ্যটিই এগুলোর ব্যাখ্যা। 7:19 আয়াতে আদম (আঃ) ও তাঁর স্ত্রীকে জান্নাতে রাখা হয় একটিমাত্র নিষেধসহ। 7:20-21 আয়াতে কুমন্ত্রণাদাতা কাজে নামে, নিষেধের একটি কারণ বানিয়ে দেয় আর শপথ করে বলে যে সে আন্তরিক হিতাকাঙ্ক্ষী। 7:22 আয়াতে তাঁরা গাছের স্বাদ নেন, তাঁদের লজ্জাস্থান প্রকাশ পায়, আর তাঁদের রব ডেকে বলেন: আমি কি তোমাদের ওই গাছ থেকে নিষেধ করিনি এবং বলিনি যে শয়তান তোমাদের প্রকাশ্য শত্রু? এই আয়াতটি সেই প্রশ্নের উত্তর।"
          },
          {
            "en": "So it is not an unprompted supplication but a reply given under direct questioning, which is when excuses are most natural. The Quran does not name Adam's wife, here or anywhere, and there is no reason to supply a name it withheld. What it does record is that both of them spoke: the verb introducing the words is dual. Given a scene containing an obvious second party to blame and a deceiver who had genuinely deceived them, they name only themselves.",
            "bn": "অর্থাৎ এটি আপনা থেকে করা কোনো দোয়া নয়, বরং সরাসরি জিজ্ঞাসাবাদের মুখে দেওয়া জবাব — আর তখনই অজুহাত সবচেয়ে স্বাভাবিক। কুরআন আদম (আঃ)-এর স্ত্রীর নাম নেয় না, এখানেও নয়, অন্য কোথাও নয়; কুরআন যে নামটি বলেনি তা জোগান দেওয়ার কোনো কারণ নেই। কুরআন যা লিপিবদ্ধ করে তা হলো, তাঁরা দুজনেই বলেছিলেন: কথাগুলোর সূচনাকারী ক্রিয়াপদটি দ্বিবচনে। এমন এক দৃশ্যে যেখানে দোষ চাপানোর মতো স্পষ্ট দ্বিতীয় পক্ষ আছে এবং সত্যিই প্রতারণাকারী এক প্রতারক আছে, তাঁরা কেবল নিজেদেরই নাম নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "We Wronged Ourselves",
          "bn": "আমরা নিজেদের প্রতি জুলুম করেছি"
        },
        "p": [
          {
            "en": "Rabbana zalamna anfusana. Zulm is putting a thing somewhere it does not belong. What is striking is the object of the wrong: anfusana, ourselves. The command that was broken belonged to Allah, and the breach was against Him, yet the confession identifies the injured party as the one who disobeyed. Nothing is added by way of setting, cause or provocation. Three words carry the whole admission and then it stops.",
            "bn": "রাব্বানা যালামনা আনফুসানা। জুলুম মানে কোনো জিনিসকে এমন জায়গায় রাখা যেখানে তার স্থান নয়। চমকে দেওয়ার মতো বিষয়টি হলো অন্যায়ের লক্ষ্যবস্তু: আনফুসানা — আমাদের নিজেদের। যে আদেশ ভাঙা হয়েছিল তা আল্লাহর, আর লঙ্ঘনটিও তাঁর বিরুদ্ধে; তবু স্বীকারোক্তি ক্ষতিগ্রস্ত পক্ষ হিসেবে চিহ্নিত করে সেই ব্যক্তিকেই যে অবাধ্য হয়েছে। পরিস্থিতি, কারণ বা উসকানি — কিছুই যোগ করা হয় না। তিনটি শব্দ পুরো স্বীকারোক্তিটি বহন করে, তারপর থেমে যায়।"
          },
          {
            "en": "The build of the prayer deserves attention too: it contains no imperative verb at all. Where the believers of 23:109 say forgive us and have mercy upon us as straight commands in the mouth of a petitioner, this du'a states a fact and then a consequence — if You do not forgive us and have mercy on us, we will certainly be among the losers. The request is made by describing what happens without it. It asks by admitting.",
            "bn": "প্রার্থনাটির গড়নও মনোযোগের দাবি রাখে: এতে কোনো আদেশসূচক ক্রিয়াপদই নেই। 23:109 আয়াতের মুমিনরা যেখানে 'আমাদের ক্ষমা করুন ও আমাদের প্রতি দয়া করুন' বলেন প্রার্থীর মুখে সরাসরি আদেশ হিসেবে, সেখানে এই দোয়া একটি সত্য বলে, তারপর একটি পরিণতি — যদি আপনি আমাদের ক্ষমা না করেন ও দয়া না করেন, আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব। চাওয়াটি করা হয় এটি না পেলে কী হবে তা বর্ণনা করে। এটি স্বীকার করে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Set Against Another Answer",
          "bn": "অন্য এক জবাবের পাশে"
        },
        "p": [
          {
            "en": "The surah has already staged the alternative. In 7:12 Iblis, asked what prevented him from prostrating, answers with an argument: I am better than him, You created me from fire and created him from clay. The same reply is recorded at 38:76 in a second telling. In 7:16 he traces his own error back to his Lord. He does make one request, at 7:14, and it is for time, not for pardon.",
            "bn": "সূরাটি বিকল্পটি আগেই মঞ্চস্থ করে রেখেছে। 7:12 আয়াতে ইবলিসকে জিজ্ঞেস করা হয় কিসে তাকে সিজদা থেকে বিরত রাখল, আর সে জবাব দেয় যুক্তি দিয়ে: আমি তার চেয়ে উত্তম, আপনি আমাকে আগুন থেকে সৃষ্টি করেছেন আর তাকে সৃষ্টি করেছেন মাটি থেকে। একই জবাব দ্বিতীয় বর্ণনায় 38:76 আয়াতে লিপিবদ্ধ। 7:16 আয়াতে সে নিজের বিভ্রান্তির দায় তার রবের দিকেই ফেরায়। সে একটি অনুরোধ করে, 7:14 আয়াতে, আর তা সময়ের জন্য — ক্ষমার জন্য নয়।"
          },
          {
            "en": "So Surah al-A'raf places two responses to a breached command within a dozen verses of each other. One party argues, explains, reassigns the cause and asks for a reprieve. The other admits and asks for mercy. The outcome for the first is stated in 7:18 as expulsion in disgrace; the outcome for Adam (AS) is stated in 2:37 as repentance accepted. The mufassirun make that comparison the lesson of the passage. The lapse was not what separated them. The answer was.",
            "bn": "অর্থাৎ সূরা আল-আ'রাফ ভঙ্গ করা আদেশের দুটি জবাবকে এক ডজনেরও কম আয়াতের ব্যবধানে পাশাপাশি রাখে। এক পক্ষ তর্ক করে, ব্যাখ্যা দেয়, কারণ অন্যের ঘাড়ে চাপায় এবং অবকাশ চায়। অন্য পক্ষ স্বীকার করে এবং রহমত চায়। প্রথম পক্ষের পরিণতি 7:18 আয়াতে বলা হয়েছে অপমানিত হয়ে বিতাড়ন হিসেবে; আদম (আঃ)-এর পরিণতি 2:37 আয়াতে বলা হয়েছে তাওবা কবুল হিসেবে। মুফাসসিরগণ এই তুলনাকেই অংশটির শিক্ষা হিসেবে ধরেন। ভুলটি তাঁদের আলাদা করেনি। জবাবটি করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Words He Received",
          "bn": "যে বাণী তিনি পেয়েছিলেন"
        },
        "p": [
          {
            "en": "2:37 says that Adam (AS) received words from his Lord and He turned to him in forgiveness, but it does not quote them. A body of the mufassirun, reporting from Ibn Abbas (RA) and transmitted by at-Tabari and repeated by Ibn Kathir, identify those words as this very supplication. That is an attribution, and it is honest to give it as one rather than as the text of 2:37 itself. What is not in dispute is the shape of the sentence there: the words came to him.",
            "bn": "2:37 আয়াত বলে, আদম (আঃ) তাঁর রবের কাছ থেকে কিছু বাণী পেলেন এবং তিনি তাঁর তাওবা কবুল করলেন — কিন্তু আয়াতটি সেই বাণী উদ্ধৃত করে না। একদল মুফাসসির, ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করে এবং আত-তাবারীর মাধ্যমে সংক্রমিত ও ইবনে কাসীরে পুনরাবৃত্ত হয়ে, সেই বাণীগুলোকে এই দোয়াটিই বলে চিহ্নিত করেন। এটি একটি সম্বন্ধারোপ, আর একে 2:37 আয়াতের পাঠ হিসেবে নয়, সম্বন্ধারোপ হিসেবেই বলা সৎ। যা নিয়ে মতভেদ নেই তা হলো সেখানকার বাক্যগঠন: বাণীগুলো তাঁর কাছে এসেছিল।"
          },
          {
            "en": "If the identification is accepted, something follows from it. The prayer that saved him was given to him. Repentance in the Quran's account is not a human achievement climbing up toward Allah; the turning is itself something granted. 20:121-122 tells the same episode in the same order — Adam disobeyed his Lord and erred, then his Lord chose him, turned to him and guided him. The choosing is mentioned after the fall, not before it.",
            "bn": "এই চিহ্নিতকরণ মেনে নিলে তা থেকে একটি কথা বেরিয়ে আসে। যে প্রার্থনা তাঁকে রক্ষা করেছে, সেটি তাঁকে দেওয়া হয়েছিল। কুরআনের বিবরণে তাওবা কোনো মানবিক অর্জন নয় যা আল্লাহর দিকে বেয়ে ওঠে; ফিরে আসাটাই একটি দান। 20:121-122 আয়াত একই ঘটনাকে একই ক্রমে বলে — আদম তাঁর রবের অবাধ্য হলেন ও পথভ্রষ্ট হলেন, তারপর তাঁর রব তাঁকে মনোনীত করলেন, তাঁর দিকে ফিরলেন এবং তাঁকে পথ দেখালেন। মনোনয়নের কথা বলা হয়েছে পতনের পরে, আগে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Used",
          "bn": "এটি কীভাবে ব্যবহার হয়"
        },
        "p": [
          {
            "en": "The supplication is short enough to memorise in an evening and general enough for any fault. Its shape is the instruction. Name the act. Name yourself as the one harmed by it. Ask for nothing except forgiveness and mercy. State plainly what you are without them. Every clause a person normally reaches for first — the provocation, the circumstances, the others involved — is simply absent from the model.",
            "bn": "দোয়াটি এত ছোট যে এক সন্ধ্যায় মুখস্থ হয়ে যায়, আর এত সাধারণ যে যেকোনো অপরাধের জন্য চলে। এর গড়নটিই নির্দেশ। কাজটির নাম নিন। যে ক্ষতিগ্রস্ত হয়েছে সেই আপনাকেই চিহ্নিত করুন। ক্ষমা ও রহমত ছাড়া আর কিছু চাইবেন না। সেগুলো ছাড়া আপনি কী, তা স্পষ্ট করে বলুন। মানুষ সাধারণত প্রথমে যেসব বাক্যাংশের দিকে হাত বাড়ায় — উসকানি, পরিস্থিতি, জড়িত অন্যরা — এই আদর্শে তার কোনোটিই নেই।"
          },
          {
            "en": "The last word is al-khasirin, the losers, which is a commercial word, and it prices the fault honestly: without forgiveness the account comes up short. That is the register the Quran wants, rather than either dismissal or despair. 7:24 gives the sequel — they went down to the earth with a settlement and a provision for a term. The forgiveness did not cancel the consequence. It changed who they were while they lived through it.",
            "bn": "শেষ শব্দটি আল-খাসিরীন — ক্ষতিগ্রস্তরা; শব্দটি বাণিজ্যিক, আর তা অপরাধটির দাম সৎভাবে নির্ধারণ করে: ক্ষমা ছাড়া হিসাব ঘাটতিতে দাঁড়ায়। কুরআন এই সুরটিই চায় — উড়িয়ে দেওয়াও নয়, হতাশাও নয়। 7:24 আয়াত পরবর্তী অংশ দেয় — তাঁরা পৃথিবীতে নেমে গেলেন নির্দিষ্ট সময়ের জন্য বসবাস ও জীবিকা নিয়ে। ক্ষমা পরিণামটি বাতিল করেনি। তা বদলে দিয়েছিল সেই পরিণামের ভেতর দিয়ে যাওয়ার সময় তাঁরা কেমন মানুষ ছিলেন।"
          }
        ]
      }
    ]
  },
  "7:55-56": {
    "sections": [
      {
        "h": {
          "en": "After the Verse of Creation and Command",
          "bn": "সৃষ্টি ও হুকুমের আয়াতের পরে"
        },
        "p": [
          {
            "en": "The command to call on Allah follows straight after one of the Quran's great creation passages. 7:54 declares that your Lord is Allah, who created the heavens and the earth in six days and then rose over the Throne; He makes the night cover the day, chasing it swiftly; and the sun, the moon and the stars are subjected by His command. His is the creation and the command. Then, without pause: call upon your Lord. The One just described is the One addressed.",
            "bn": "আল্লাহকে ডাকার নির্দেশটি এসেছে কুরআনের অন্যতম মহৎ সৃষ্টি-বর্ণনার ঠিক পরেই। 7:54 ঘোষণা করে, তোমাদের রব আল্লাহ, যিনি আসমানসমূহ ও যমীন ছয় দিনে সৃষ্টি করেছেন, তারপর আরশের উপর সমুন্নত হয়েছেন; তিনি রাত দিয়ে দিনকে ঢেকে দেন — রাত তাকে দ্রুত তাড়া করে ফেরে; আর সূর্য, চাঁদ ও নক্ষত্ররাজি তাঁর হুকুমের অধীন। সৃষ্টিও তাঁর, হুকুমও তাঁর। তারপর, কোনো বিরতি ছাড়াই: তোমাদের রবকে ডাকো। যাঁর বর্ণনা এইমাত্র দেওয়া হলো, সম্বোধন তাঁরই উদ্দেশে।"
          },
          {
            "en": "The sequence teaches before it commands. Only after establishing who holds creation and command does the passage say: now speak to Him. At-Tirmidhi records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ said supplication is itself the worship. Du'a is not a device for extracting outcomes; it is the creature answering the description of 7:54 with the only fitting response — turning to the One who commands all things with its needs and its lowness.",
            "bn": "এই বিন্যাস নির্দেশ দেওয়ার আগে শিক্ষা দেয়। সৃষ্টি ও হুকুম কার হাতে তা প্রতিষ্ঠার পরেই অনুচ্ছেদটি বলে: এবার তাঁর সাথে কথা বলো। তিরমিযী নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দোয়াই তো ইবাদত। দোয়া ফলাফল আদায়ের কোনো কৌশল নয়; এটি হলো 7:54 আয়াতের বর্ণনার জবাবে সৃষ্টির একমাত্র মানানসই সাড়া — নিজের প্রয়োজন ও দীনতা নিয়ে সেই সত্তার দিকে ফেরা, যিনি সবকিছুর হুকুম দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Humbly and in Secret",
          "bn": "বিনয়ে ও গোপনে"
        },
        "p": [
          {
            "en": "Ud'u rabbakum tadarru'an wa khufyah — call on your Lord in humility and in secret. Tadarru' is the lowness of someone who knows his need; khufyah is quietness, prayer kept between the servant and his Lord. The commentators note that secrecy protects sincerity — a hidden request cannot be performed for an audience — and suits the One addressed, who hears the faintest whisper. Loudness adds nothing to His hearing; softness adds much to our honesty.",
            "bn": "উদ'ঊ রাব্বাকুম তাদাররু'আন ওয়া খুফইয়াহ — তোমাদের রবকে ডাকো বিনয়ের সাথে ও গোপনে। তাদাররু' হলো নিজের মুখাপেক্ষিতা জানা মানুষের দীনতা; খুফইয়াহ হলো নীরবতা — বান্দা ও তার রবের মাঝে সীমাবদ্ধ রাখা প্রার্থনা। মুফাসসিরগণ লক্ষ করেন, গোপনীয়তা আন্তরিকতাকে রক্ষা করে — লুকানো আবেদন কোনো দর্শকের জন্য অভিনয় করা যায় না — আর তা মানানসইও যাঁকে ডাকা হচ্ছে তাঁর সাথে, যিনি ক্ষীণতম ফিসফিসও শোনেন। উচ্চস্বর তাঁর শ্রবণে কিছুই যোগ করে না; কোমল স্বর আমাদের সততায় অনেক কিছু যোগ করে।"
          },
          {
            "en": "Al-Bukhari records that when the companions raised their voices in takbir on a journey, the Prophet ﷺ told them to be gentle with themselves, for they were not calling upon one deaf or absent, but upon One who is Hearing and near. The hadith is the verse in action: the volume of supplication should be set by who Allah is, not by the intensity of our feelings.",
            "bn": "বুখারী বর্ণনা করেন, এক সফরে সাহাবীরা উঁচু গলায় তাকবীর বলছিলেন, তখন নবী ﷺ তাঁদের বললেন নিজেদের প্রতি সদয় হতে, কারণ তাঁরা কোনো বধির বা অনুপস্থিত সত্তাকে ডাকছেন না; ডাকছেন তাঁকে, যিনি সর্বশ্রোতা ও নিকটবর্তী। হাদীসটি যেন আয়াতেরই বাস্তব প্রয়োগ: দোয়ার স্বরমাত্রা ঠিক হবে আল্লাহ কে — সেই পরিচয় দিয়ে, আমাদের আবেগের তীব্রতা দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Transgressing in Asking",
          "bn": "চাওয়ায় সীমালঙ্ঘন"
        },
        "p": [
          {
            "en": "He does not love al-mu'tadin, those who cross the bounds. The commentators apply this first to transgression within supplication itself: asking Allah for something sinful or for the severing of family ties, or turning du'a into ornate performance. Abu Dawud records from Abdullah ibn Mughaffal (RA) that the Prophet ﷺ said there will be in this nation a people who transgress in purification and in supplication. Even worship has edges, and love is promised to those who stay within them.",
            "bn": "তিনি আল-মু'তাদীন — সীমালঙ্ঘনকারীদের — ভালোবাসেন না। মুফাসসিরগণ এটি প্রথমে প্রয়োগ করেন খোদ দোয়ার ভেতরের সীমালঙ্ঘনে: আল্লাহর কাছে কোনো গুনাহের বিষয় বা আত্মীয়তার বন্ধন ছিন্ন করার আবেদন, কিংবা দোয়াকে অলঙ্কৃত প্রদর্শনীতে পরিণত করা। আবূ দাঊদ আবদুল্লাহ ইবনে মুগাফফাল (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: এই উম্মতে এমন এক সম্প্রদায় হবে যারা পবিত্রতা অর্জনে ও দোয়ায় সীমালঙ্ঘন করবে। এমনকি ইবাদতেরও কিনারা আছে, আর ভালোবাসার প্রতিশ্রুতি তাদের জন্য যারা তার ভেতরে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Corruption After Setting Right",
          "bn": "সংশোধনের পর বিপর্যয়"
        },
        "p": [
          {
            "en": "Then 7:56 widens the lens: do not spread corruption in the earth after it has been set right. The commentators read the setting right as Allah's own act — He ordered the world and sent messengers and guidance to keep it ordered — so that fasad, whether sin, injustice or the ruin of what others depend on, is vandalism against a finished work. Placing this command between two commands about du'a is deliberate: the hands must not undo what the tongue asks for.",
            "bn": "এরপর 7:56 দৃষ্টিক্ষেত্র প্রশস্ত করে: যমীন সংশোধিত হওয়ার পর তাতে বিপর্যয় ছড়িয়ো না। মুফাসসিরগণ এই সংশোধনকে পড়েন আল্লাহর নিজের কাজ হিসেবে — তিনি জগৎকে সুবিন্যস্ত করেছেন এবং তা সুবিন্যস্ত রাখতে রাসূল ও হেদায়েত পাঠিয়েছেন — কাজেই ফাসাদ, তা গুনাহ হোক, জুলুম হোক বা মানুষের নির্ভরতার জিনিস ধ্বংস করা হোক, একটি সম্পূর্ণ কাজের উপর ভাঙচুর। দোয়া-সংক্রান্ত দুটি নির্দেশের মাঝখানে এই নির্দেশ বসানো ইচ্ছাকৃত: জিহ্বা যা চায়, হাত যেন তা ভেঙে না ফেলে।"
          },
          {
            "en": "The pairing also blocks a familiar self-deception, in which private devotion is treated as compensation for public harm. The passage refuses the split: the same breath that teaches how to ask teaches what the asker's hands must not do. A person's supplication and a person's conduct in the land are one file, read together. The earth set right includes what is near you — the household, the workplace, the trust you hold — and leaving it better is part of the asking.",
            "bn": "এই জোড় একটি চেনা আত্মপ্রতারণাকেও আটকে দেয় — যেখানে একান্ত ইবাদতকে প্রকাশ্য ক্ষতির ক্ষতিপূরণ ভাবা হয়। অনুচ্ছেদটি এই বিভাজন মানে না: যে নিঃশ্বাসে চাওয়ার নিয়ম শেখানো হয়, সেই নিঃশ্বাসেই শেখানো হয় প্রার্থনাকারীর হাত কী করতে পারবে না। মানুষের দোয়া আর যমীনে তার আচরণ একই নথি — একসাথে পড়া হয়। সংশোধিত যমীনের মধ্যে আপনার নিকটের জিনিসও পড়ে — সংসার, কর্মক্ষেত্র, আপনার হাতে থাকা আমানত — আর তা আগের চেয়ে ভালো রেখে যাওয়াও চাওয়ারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear, Hope, and Nearness",
          "bn": "ভয়, আশা ও নৈকট্য"
        },
        "p": [
          {
            "en": "Call on Him khawfan wa tama'an, in fear and in hope — fear of one's own sins and of rejection, hope in His mercy and His promise. The scholars describe these as two wings that keep the heart level: fear alone curdles into despair, hope alone into presumption. The verse then closes with the reason both are safe: surely the mercy of Allah is near to the muhsinin, those who do good.",
            "bn": "তাঁকে ডাকো খাওফান ওয়া তামা'আন — ভয় ও আশা নিয়ে — নিজের গুনাহের ও প্রত্যাখ্যাত হওয়ার ভয়, তাঁর রহমত ও প্রতিশ্রুতিতে আশা। আলিমগণ এ দুটিকে বর্ণনা করেন দুটি ডানা হিসেবে, যা অন্তরকে সমতলে রাখে: শুধু ভয় জমাট বেঁধে হয় হতাশা, শুধু আশা গড়ায় দুঃসাহসে। আয়াতটি তারপর শেষ হয় সেই কারণ দিয়ে, যার জোরে দুটিই নিরাপদ: নিশ্চয়ই আল্লাহর রহমত মুহসিনদের — সৎকর্মশীলদের — নিকটবর্তী।"
          },
          {
            "en": "That closing line is echoed by 2:186, where Allah says: when My servants ask you about Me, I am near, answering the call of the caller when he calls. And 40:60 carries the command with a promise: call upon Me; I will respond to you. Nearness, response, mercy — the Quran keeps stacking assurances around du'a, while this passage adds the manners that keep the channel clean.",
            "bn": "এই সমাপ্তি-বাক্যের প্রতিধ্বনি 2:186 আয়াতে, যেখানে আল্লাহ বলেন: আমার বান্দারা যখন তোমাকে আমার সম্পর্কে জিজ্ঞেস করে — আমি তো নিকটেই, ডাকনেওয়ালা যখন ডাকে আমি তার ডাকে সাড়া দিই। আর 40:60 নির্দেশের সাথে প্রতিশ্রুতি বহন করে: আমাকে ডাকো; আমি তোমাদের সাড়া দেব। নৈকট্য, সাড়া, রহমত — কুরআন দোয়ার চারপাশে আশ্বাসের পর আশ্বাস সাজিয়ে যায়, আর এই অনুচ্ছেদ যোগ করে সেই আদবগুলো, যা যোগাযোগের পথটি পরিচ্ছন্ন রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Praying and Behaving",
          "bn": "প্রার্থনা ও আচরণ"
        },
        "p": [
          {
            "en": "The lived shape of these verses is a quiet, regular, private supplication — a fixed time when no one else hears you. Check the content of your asking against the verse: nothing that transgresses, nothing performed. And keep the middle command attached: the same person who whispers to Allah at night must not corrupt dealings, trusts or shared spaces by day. Whoever prays like 7:55 and lives against 7:56 has torn the passage in half; mercy is written as near to those who do good, and the two verses define doing good from the inside out.",
            "bn": "এই আয়াতগুলোর যাপিত রূপ হলো এক শান্ত, নিয়মিত, একান্ত দোয়া — এমন এক নির্দিষ্ট সময়, যখন আপনার কথা আর কেউ শোনে না। নিজের চাওয়ার বিষয়বস্তু আয়াতের সাথে মিলিয়ে নিন: সীমালঙ্ঘন করে এমন কিছু নয়, প্রদর্শনীর জন্যও কিছু নয়। আর মাঝের নির্দেশটিকে সাথে জুড়ে রাখুন: যে মানুষ রাতে আল্লাহর কাছে ফিসফিস করে, সে যেন দিনে লেনদেন, আমানত বা যৌথ পরিসর নষ্ট না করে। যে 7:55 আয়াতের মতো দোয়া করে অথচ 7:56 আয়াতের বিরুদ্ধে জীবন যাপন করে, সে অনুচ্ছেদটিকে দুই টুকরো করে ফেলেছে; রহমত লেখা আছে সৎকর্মশীলদের নিকটে, আর আয়াত দুটি সৎকর্মের সংজ্ঞা দেয় ভেতর থেকে বাইরের দিকে।"
          }
        ]
      }
    ]
  },
  "7:156": {
    "sections": [
      {
        "h": {
          "en": "Whose Words These Are",
          "bn": "এগুলো কার কথা"
        },
        "p": [
          {
            "en": "The boundary matters here, because the verse contains two speakers. Musa (AS) had chosen seventy men of his people for an appointed meeting, and when the earthquake seized them he began to plead. That plea starts in 7:155 with, my Lord, if You had willed You could have destroyed them and me before, and runs on through would You destroy us for what the foolish among us have done, this is only Your trial, have mercy upon us, You are the best of forgivers.",
            "bn": "এখানে সীমারেখাটি গুরুত্বপূর্ণ, কারণ আয়াতটিতে দুজন বক্তা আছেন। মূসা (আঃ) নির্ধারিত সাক্ষাতের জন্য তাঁর জাতির সত্তরজনকে বাছাই করেছিলেন, আর ভূমিকম্প যখন তাদের ধরল তখন তিনি মিনতি শুরু করলেন। সেই মিনতি শুরু হয় 7:155 আয়াতে — হে আমার প্রতিপালক, আপনি চাইলে তো এদেরকে ও আমাকে আগেই ধ্বংস করতে পারতেন — এবং চলতে থাকে: আমাদের মধ্যকার নির্বোধেরা যা করেছে তার জন্য কি আপনি আমাদের ধ্বংস করবেন, এ তো কেবল আপনার পরীক্ষা, আমাদের প্রতি দয়া করুন, আপনিই তো সর্বশ্রেষ্ঠ ক্ষমাশীল।"
          },
          {
            "en": "His words continue into our verse and end partway through it: and decree for us good in this world and in the Hereafter, indeed we have turned back to You. Everything after that is Allah's answer — My punishment, I strike with it whom I will, and My mercy has encompassed all things — and the answer does not stop at the end of the verse either. It carries on through the clause about whom the mercy is written for, and into 7:157 describing them further.",
            "bn": "তাঁর কথা আমাদের আয়াতের ভেতরে এসে মাঝপথে শেষ হয়: আর আমাদের জন্য এই দুনিয়ায় ও আখিরাতে কল্যাণ লিখে দিন, নিশ্চয়ই আমরা আপনার দিকেই ফিরে এসেছি। এরপরের সবটুকু আল্লাহর জবাব — আমার শাস্তি, আমি যাকে চাই তাকে তা দিয়ে আঘাত করি, আর আমার রহমত সবকিছুকে পরিব্যাপ্ত করে আছে — আর জবাবটি আয়াতের শেষেও থামে না। এটি চলতে থাকে সেই বাক্যাংশ পর্যন্ত যেখানে বলা হয় রহমতটি কাদের জন্য লেখা হবে, এবং 7:157 আয়াতে গিয়ে তাদের আরও বর্ণনা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Write for Us, and I Will Write",
          "bn": "আমাদের জন্য লিখুন, আর আমি লিখব"
        },
        "p": [
          {
            "en": "Musa (AS) asks with the verb uktub — write, decree, enter it in the record. Allah answers with the same root: fa-sa-aktubuha, so I shall write it. A prophet asks for a good thing to be entered for his people, and the reply grants an entry of a different order altogether. This is the verb that appears twice in Surah al-An'am, at 6:12 and 6:54, where Allah says He has written mercy upon Himself. Mercy is spoken of throughout as something recorded.",
            "bn": "মূসা (আঃ) চান 'উকতুব' ক্রিয়াপদ দিয়ে — লিখে দিন, নির্ধারণ করে দিন, খাতায় তুলে নিন। আল্লাহ জবাব দেন একই ধাতুমূল দিয়ে: 'ফাসাআকতুবুহা' — তবে আমি তা লিখব। একজন নবী তাঁর জাতির জন্য একটি কল্যাণ লিখে দিতে বলেন, আর জবাবে সম্পূর্ণ অন্য মাত্রার একটি লেখা মঞ্জুর হয়। এই সেই ক্রিয়াপদ যা সূরা আল-আন'আমে দুবার আসে, 6:12 ও 6:54 আয়াতে, যেখানে আল্লাহ বলেন তিনি নিজের ওপর রহমত লিখে নিয়েছেন। রহমতের কথা সর্বত্রই বলা হয় লিপিবদ্ধ কিছু হিসেবে।"
          },
          {
            "en": "The ground Musa (AS) gives for the request is worth hearing: inna hudna ilayk, we have turned back to You. The commentators gloss hudna as tubna, we have repented. He does not argue that his people have earned anything; the seventy had just been struck down. The only credential offered is the turning itself. That is the standing on which the greatest sentence about mercy in the Quran is spoken.",
            "bn": "মূসা (আঃ) চাওয়ার জন্য যে ভিত্তিটি দেন তা শোনার মতো: 'ইন্না হুদনা ইলাইক' — আমরা আপনার দিকেই ফিরে এসেছি। মুফাসসিরগণ 'হুদনা'-র ব্যাখ্যায় বলেন 'তুবনা' — আমরা তওবা করেছি। তিনি এ যুক্তি দেন না যে তাঁর জাতি কিছু অর্জন করেছে; সেই সত্তরজন তো সবে আঘাতপ্রাপ্ত হয়েছেন। একমাত্র যে যোগ্যতাটি পেশ করা হয় তা হলো ফিরে আসাটুকুই। কুরআনে রহমত সম্পর্কে সবচেয়ে বড় বাক্যটি এই ভিত্তির ওপর দাঁড়িয়েই উচ্চারিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shape of the Answer",
          "bn": "জবাবের গড়ন"
        },
        "p": [
          {
            "en": "The two halves of the reply are not built the same way. Punishment is tied to will: I strike with it whom I will. Mercy is stated without any such tie: wa rahmati wasi'at kulla shay', and My mercy has encompassed all things. The verb is in the perfect tense, describing something already accomplished rather than promised, and kulla shay', every single thing, leaves no creature and no category outside its reach.",
            "bn": "জবাবের দুটি অর্ধেক একই ছাঁচে গড়া নয়। শাস্তি ইচ্ছার সঙ্গে বাঁধা: আমি যাকে চাই তাকে তা দিয়ে আঘাত করি। রহমত সে ধরনের কোনো বাঁধন ছাড়াই বলা হয়েছে: 'ওয়া রাহমাতী ওয়াসিআত কুল্লা শাইইন' — আর আমার রহমত সবকিছুকে পরিব্যাপ্ত করে ফেলেছে। ক্রিয়াপদটি অতীত-সম্পন্ন কালে, অর্থাৎ প্রতিশ্রুত নয় বরং ইতিমধ্যেই সম্পন্ন কিছুকে বোঝায়; আর 'কুল্লা শাইইন' — প্রতিটি জিনিস — এর নাগালের বাইরে কোনো সৃষ্টি বা কোনো শ্রেণিকে রাখে না।"
          },
          {
            "en": "The angels who carry the Throne pray with this same word in 40:7, saying that Allah has encompassed all things in mercy and knowledge, and then asking forgiveness for those who repent and follow His way. Muslim relates from Abu Hurayrah (RA) that Allah has a hundred portions of mercy, sent one of them down among the creation, by which they show compassion to one another, and kept ninety-nine for the Day of Resurrection. All the tenderness anyone has ever received is from the one portion.",
            "bn": "আরশবাহী ফেরেশতারা 40:7 আয়াতে এই একই শব্দ দিয়ে দোয়া করেন — আপনি রহমত ও জ্ঞান দিয়ে সবকিছুকে পরিব্যাপ্ত করে রেখেছেন — এবং তারপর যারা তওবা করে ও আপনার পথ অনুসরণ করে তাদের জন্য ক্ষমা চান। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর রহমতের একশত ভাগ আছে; তার একটি ভাগ তিনি সৃষ্টির মধ্যে নামিয়ে দিয়েছেন, যা দিয়ে তারা একে অপরের প্রতি দয়া দেখায়, আর নিরানব্বইটি রেখে দিয়েছেন কিয়ামতের দিনের জন্য। মানুষ আজ পর্যন্ত যত কোমলতা পেয়েছে, সবই সেই এক ভাগ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause That Gets Cut Off",
          "bn": "যে বাক্যাংশটি কেটে ফেলা হয়"
        },
        "p": [
          {
            "en": "The famous half of this verse is usually quoted alone, and the sentence does not end there. It continues: so I shall write it for those who are mindful of Allah and give zakah and those who believe in Our signs. The mufassirun draw a distinction from this. The mercy that has already encompassed all things is the mercy of this world, which reaches the believer and the denier, the obedient and the rebel, in health and provision and every daily kindness.",
            "bn": "এই আয়াতের বিখ্যাত অর্ধেকটি সাধারণত একাই উদ্ধৃত হয়, অথচ বাক্যটি সেখানে শেষ হয় না। এটি চলতে থাকে: তবে আমি তা লিখে দেব তাদের জন্য যারা তাকওয়া অবলম্বন করে, যাকাত দেয়, আর যারা আমার নিদর্শনাবলিতে ঈমান আনে। মুফাসসিরগণ এখান থেকে একটি পার্থক্য টানেন। যে রহমত ইতিমধ্যেই সবকিছুকে পরিব্যাপ্ত করেছে, তা দুনিয়ার রহমত — যা মুমিন ও অস্বীকারকারী, অনুগত ও বিদ্রোহী সবার কাছেই পৌঁছায়: সুস্থতায়, রিযিকে, আর প্রতিদিনের প্রতিটি অনুগ্রহে।"
          },
          {
            "en": "The mercy that is written, entered permanently in the record, is scoped to the three qualities the verse names. So the verse is neither a blank cheque nor a narrow door. It says the reach is total and the settlement is conditioned, and it names conditions that are actions rather than feelings: reverence, giving, believing. The same balance appears in 6:147, where the Prophet ﷺ is told to say that his Lord is the possessor of vast mercy, and that His punishment is not turned back from the criminal people.",
            "bn": "আর যে রহমত লেখা হয়, স্থায়ীভাবে খাতায় তোলা হয়, তা আয়াতে নাম নেওয়া তিনটি গুণের সঙ্গে শর্তযুক্ত। ফলে আয়াতটি না কোনো খালি চেক, না কোনো সরু দরজা। এটি বলে যে নাগাল সর্বব্যাপী আর ফয়সালা শর্তসাপেক্ষ; আর যে শর্তগুলোর নাম নেয় সেগুলো অনুভূতি নয়, কাজ: তাকওয়া, দান, ঈমান। একই ভারসাম্য 6:147 আয়াতেও আছে, যেখানে নবী ﷺ-কে বলতে বলা হয় যে তাঁর প্রতিপালক প্রশস্ত দয়ার অধিকারী, আর তাঁর শাস্তি অপরাধী সম্প্রদায়ের ওপর থেকে ফেরানো হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking the Way Musa Asked",
          "bn": "মূসা যেভাবে চেয়েছিলেন"
        },
        "p": [
          {
            "en": "The du'a itself is short enough to keep. Decree for us good in this world and good in the Hereafter — one request covering both, made in the plural for a community that had just failed, on the sole ground of having turned back. It is a useful correction to the way most of us ask, alternating between requests for this world when we are comfortable and requests for the next when we are frightened.",
            "bn": "দোয়াটি নিজে এতটাই ছোট যে মনে রাখা যায়। আমাদের জন্য এই দুনিয়ায় কল্যাণ লিখে দিন, আর আখিরাতেও — একটি চাওয়া যা দুটোকেই ধরে, বহুবচনে বলা এমন এক সম্প্রদায়ের জন্য যারা সবেমাত্র ব্যর্থ হয়েছে, আর একমাত্র ভিত্তি ফিরে আসাটুকু। আমরা বেশিরভাগ যেভাবে চাই — স্বস্তিতে থাকলে দুনিয়া, ভয় পেলে আখিরাত — তার একটি কাজের সংশোধন এটি।"
          },
          {
            "en": "And it fixes the direction of the whole verse. Mercy is not persuaded into existence by our asking; it is already there, wider than everything. What our asking and our turning do is put us where the written portion is being written. Read that way, the verse produces neither the complacency of assuming everyone is covered nor the fear of assuming nobody is. It produces movement toward the three things it named.",
            "bn": "আর এটি গোটা আয়াতের দিকটিও ঠিক করে দেয়। আমাদের চাওয়ার কারণে রহমত অস্তিত্বে আসে না; তা আগে থেকেই আছে, সবকিছুর চেয়ে প্রশস্ত। আমাদের চাওয়া ও আমাদের ফিরে আসা যা করে তা হলো, আমাদেরকে সেখানে নিয়ে দাঁড় করায় যেখানে লেখা অংশটি লেখা হচ্ছে। এভাবে পড়লে আয়াতটি না জন্ম দেয় 'সবাই তো ঢেকে আছে' ধরনের নিশ্চিন্ততার, না জন্ম দেয় 'কেউই নয়' ধরনের ভয়ের। এটি জন্ম দেয় নাম নেওয়া তিনটি জিনিসের দিকে চলার।"
          }
        ]
      }
    ]
  },
  "7:180": {
    "sections": [
      {
        "h": {
          "en": "The Most Beautiful Names",
          "bn": "সর্বসুন্দর নামসমূহ"
        },
        "p": [
          {
            "en": "To Allah belong the most beautiful names, so call on Him by them. Al-asma al-husna: husna is a superlative — not merely beautiful names but the most beautiful there are. The phrase appears four times in the Quran — here, and in 17:110, 20:8 and 59:24 — and it is repeatedly attached to practice: call by them, as 7:180 and 17:110 command, and glorify by them, as 59:24's context does. The names are not ornaments; they are the appointed way into knowing their Owner.",
            "bn": "আল্লাহরই সর্বসুন্দর নামসমূহ, সুতরাং সেগুলো দিয়েই তাঁকে ডাকো। আল-আসমাউল হুসনা: হুসনা অতিশয়ার্থক — কেবল সুন্দর নাম নয়, যত নাম হতে পারে তার মধ্যে সর্বোত্তম। বাক্যাংশটি কুরআনে চারবার এসেছে — এখানে, আর 17:110, 20:8 ও 59:24 আয়াতে — এবং বারবার তা যুক্ত চর্চার সঙ্গে: সেগুলো দিয়ে ডাকো — যেমন 7:180 ও 17:110 নির্দেশ দেয় — আর সেগুলো দিয়ে মহিমা ঘোষণা করো, যেমন 59:24-এর প্রসঙ্গে এসেছে। নামগুলো অলংকার নয়; সেগুলোই তাদের মালিককে জানার নির্ধারিত পথ।"
          },
          {
            "en": "A name in this sense is a description that is fully true. Human titles flatter or approximate; His names state realities without excess or shortfall. That is why the Quran teaches theology mostly through them — verse after verse ends with a pair of names chosen for the moment, and the mufassirun regularly pause at those endings to show why each pair seals its verse.",
            "bn": "এই অর্থে নাম হলো সম্পূর্ণ সত্য এক বর্ণনা। মানুষের উপাধি তোষামোদ করে বা কাছাকাছি যায়; তাঁর নামগুলো বাস্তবতা বলে — বাড়তি বা ঘাটতি ছাড়া। এ জন্যই কুরআন ইলাহি পরিচয়ের শিক্ষা দেয় প্রধানত নামগুলোর মাধ্যমে — আয়াতের পর আয়াত শেষ হয় সেই মুহূর্তের জন্য বেছে নেওয়া এক জোড়া নামে, আর মুফাসসিরগণ নিয়মিত সেই সমাপ্তিগুলোতে থেমে দেখান, প্রতিটি জোড়া কেন তার আয়াতে সিলমোহর দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Keeps Count of Them",
          "bn": "যে সেগুলো সংরক্ষণ করে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim relate that the Prophet ﷺ said: Allah has ninety-nine names, one hundred less one; whoever ahsaha will enter Paradise. Ahsaha is richer than counting: the scholars explain it as taking the names in fully — memorizing them, understanding their meanings, and living toward Allah by what they mean. A man who knows ar-Razzaq is the Provider and still panics over provision has counted the name but not yet kept it.",
            "bn": "আল-বুখারী ও মুসলিম বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহর নিরানব্বইটি নাম আছে — একশো থেকে এক কম; যে সেগুলোর ইহসা করবে সে জান্নাতে প্রবেশ করবে। ইহসা গোনার চেয়ে সমৃদ্ধ: আলিমগণ এর ব্যাখ্যা করেন নামগুলোকে পুরোপুরি আত্মস্থ করা — মুখস্থ করা, অর্থ বোঝা, আর সেগুলোর অর্থ অনুযায়ী আল্লাহর দিকে জীবন যাপন করা। যে জানে আর-রাযযাক মানে রিযিকদাতা, অথচ রিযিক নিয়ে আতঙ্কে ভোগে — সে নামটি গুনেছে, এখনো রক্ষা করেনি।"
          },
          {
            "en": "The itemized lists of ninety-nine that circulate come from later narrators and compilers; the soundly transmitted wording gives the number, not a fixed roster, and scholars' compiled lists differ. The practical door this opens is generous: gather His names from the Quran and the sound Sunnah yourself, name by name, and the gathering is itself the act the hadith rewards.",
            "bn": "প্রচলিত নিরানব্বই নামের তালিকাগুলো এসেছে পরবর্তী বর্ণনাকারী ও সংকলকদের থেকে; বিশুদ্ধ সূত্রে বর্ণিত শব্দগুলো সংখ্যাটি দেয়, নির্দিষ্ট কোনো তালিকা নয় — আর আলিমদের সংকলিত তালিকাগুলোও ভিন্ন ভিন্ন। এতে যে ব্যবহারিক দরজা খোলে তা উদার: কুরআন ও বিশুদ্ধ সুন্নাহ থেকে নিজেই তাঁর নামগুলো সংগ্রহ করুন, নামের পর নাম — এই সংগ্রহ করাটাই সেই আমল যার পুরস্কারের কথা হাদীস বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Matching the Name to the Need",
          "bn": "প্রয়োজনের সঙ্গে নামের মিল"
        },
        "p": [
          {
            "en": "Fad'uhu biha — call on Him by them. The instruction shapes du'a into something precise. Seeking forgiveness, call on al-Ghafur; seeking provision, on ar-Razzaq; at a dead end, on al-Fattah, who opens. 17:110 makes the breadth explicit: call upon Allah or call upon ar-Rahman — whichever you call, to Him belong the most beautiful names. The name you choose is itself a statement of what you believe He is.",
            "bn": "ফাদউহু বিহা — সেগুলো দিয়ে তাঁকে ডাকো। নির্দেশটি দোয়াকে সুনির্দিষ্ট রূপ দেয়। ক্ষমা চাইলে ডাকুন আল-গাফূরকে; রিযিক চাইলে আর-রাযযাককে; পথ বন্ধ মনে হলে আল-ফাত্তাহকে — যিনি খুলে দেন। 17:110 বিস্তৃতিটি স্পষ্ট করে: আল্লাহ বলে ডাকো বা আর-রাহমান বলে ডাকো — যে নামেই ডাকো, সর্বসুন্দর নামগুলো তাঁরই। আপনি যে নামটি বেছে নেন, তা নিজেই এক ঘোষণা — আপনি তাঁকে কী বিশ্বাস করেন।"
          },
          {
            "en": "The Prophet's ﷺ own supplications work this way, gathering the names that fit the request — the reported du'as for morning and evening, distress and forgiveness each reach for particular names. Praying this way changes the person praying: to ask al-Ghafur is to rehearse, in the middle of your fear of your own sin, the fact that forgiving is what He is.",
            "bn": "নবী ﷺ-এর নিজের দোয়াগুলোও এভাবেই কাজ করে — আবেদনের সঙ্গে মানানসই নামগুলো একত্র করে; সকাল-সন্ধ্যা, দুশ্চিন্তা ও ক্ষমার বর্ণিত দোয়াগুলো প্রতিটিই নির্দিষ্ট নামের দিকে হাত বাড়ায়। এভাবে দোয়া করা দোয়াকারীকেই বদলে দেয়: আল-গাফূরের কাছে চাওয়া মানে নিজের গুনাহের ভয়ের ঠিক মাঝখানে এই সত্যটি অনুশীলন করা — ক্ষমা করাই তাঁর পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Deviation in His Names",
          "bn": "নামে বিকৃতি"
        },
        "p": [
          {
            "en": "The verse's second half warns: and leave those who commit ilhad in His names; they will be repaid for what they used to do. Ilhad is deviation, veering from the straight. The commentators list its classical forms: the pagans deriving idol-names from His — al-Lat from Allah, al-'Uzza from al-'Aziz, as related from the early authorities — denying the names outright, emptying them of meaning, or extending them to creatures as if creatures shared them.",
            "bn": "আয়াতের দ্বিতীয় অংশ সতর্ক করে: আর তাদের ছেড়ে দাও যারা তাঁর নামে ইলহাদ করে; তারা যা করত তার প্রতিফল তাদের দেওয়া হবে। ইলহাদ মানে বিচ্যুতি, সরল থেকে বেঁকে যাওয়া। মুফাসসিরগণ এর চিরায়ত রূপগুলো তালিকা করেন: মুশরিকদের তাঁর নাম থেকে মূর্তির নাম বানানো — আল্লাহ থেকে আল-লাত, আল-আযীয থেকে আল-উযযা, যেমন প্রাথমিক ইমামদের থেকে বর্ণিত — নামগুলো সরাসরি অস্বীকার করা, সেগুলোকে অর্থশূন্য করে ফেলা, কিংবা সৃষ্টির ওপর এমনভাবে প্রসারিত করা যেন সৃষ্টিও সেগুলোর অংশীদার।"
          },
          {
            "en": "The warning still has work to do. Names of God invented from imagination, His attributes explained away until nothing remains, His mercy or His justice denied in anger — each is a way of worshipping a god other than the One who named Himself. The verse's discipline is simple: learn who He is from what He said about Himself, and guard that knowledge as carefully as any inheritance.",
            "bn": "সতর্কবাণীটির কাজ আজও ফুরায়নি। কল্পনা থেকে বানানো আল্লাহর নাম, ব্যাখ্যার নামে তাঁর গুণাবলি এমনভাবে উড়িয়ে দেওয়া যে কিছুই অবশিষ্ট থাকে না, রাগের বশে তাঁর রহমত বা তাঁর ইনসাফ অস্বীকার — প্রতিটিই এমন এক উপাস্যের ইবাদতের পথ, যিনি নিজের নাম নিজে দেওয়া সেই সত্তা নন। আয়াতের অনুশাসনটি সরল: তিনি কে তা শিখুন তিনি নিজের সম্পর্কে যা বলেছেন তা থেকে, আর সেই জ্ঞানকে রক্ষা করুন যেকোনো উত্তরাধিকারের মতোই যত্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Quran Teaches God",
          "bn": "কুরআন যেভাবে আল্লাহকে চেনায়"
        },
        "p": [
          {
            "en": "59:22-24 shows the method at full strength: three verses that are almost nothing but names — the Knower of the unseen and the witnessed, ar-Rahman ar-Rahim, the King, the Holy, Peace, the Securer, the Overseer, the Mighty, the Compeller, the Supreme, the Creator, the Inventor, the Fashioner — closing with: to Him belong the most beautiful names. The Quran's answer to the question who is God is not an abstraction; it is this cascade.",
            "bn": "59:22-24 পদ্ধতিটি পূর্ণ শক্তিতে দেখায়: তিনটি আয়াত যা প্রায় কেবলই নাম — অদৃশ্য ও দৃশ্যের জ্ঞানী, আর-রাহমান আর-রাহীম, বাদশাহ, মহাপবিত্র, শান্তি, নিরাপত্তাদাতা, রক্ষণাবেক্ষণকারী, পরাক্রমশালী, মহাপ্রতাপশালী, গর্বের অধিকারী, স্রষ্টা, উদ্ভাবক, রূপদানকারী — শেষ হয় এই বলে: সর্বসুন্দর নামগুলো তাঁরই। আল্লাহ কে — এই প্রশ্নে কুরআনের উত্তর কোনো বিমূর্ত ধারণা নয়; উত্তরটি এই নামের স্রোত।"
          },
          {
            "en": "20:8 sets the same seal on the story of Musa (AS) about to begin: Allah — there is no deity except Him; to Him belong the best names. Everywhere the phrase appears, it converts theology into address. You do not merely conclude that God is merciful; you call Him ar-Rahman, to His face, and the knowledge becomes a relationship.",
            "bn": "20:8 একই সিলমোহর বসায় শুরু হতে যাওয়া মূসা (আঃ)-এর কাহিনির মুখে: আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই; সর্বোত্তম নামগুলো তাঁরই। বাক্যাংশটি যেখানেই আসে, সেখানেই তত্ত্বকে সম্বোধনে রূপান্তরিত করে। আপনি কেবল সিদ্ধান্তে পৌঁছান না যে আল্লাহ দয়ালু; আপনি তাঁকে সরাসরি ডাকেন আর-রাহমান বলে — আর জ্ঞানটি হয়ে ওঠে সম্পর্ক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Practice of One Name",
          "bn": "একটি নামের অনুশীলন"
        },
        "p": [
          {
            "en": "The practical entry is one name at a time. Take a single name for a week: find its verses, learn what the scholars say it means, watch for its traces in your own day, then use it in sujud and in du'a until calling it feels like recognition rather than recitation. Ninety-nine such weeks is a curriculum the hadith itself attached to Paradise.",
            "bn": "ব্যবহারিক প্রবেশপথ — এক সময়ে একটি নাম। এক সপ্তাহের জন্য একটিমাত্র নাম নিন: এর আয়াতগুলো খুঁজুন, আলিমগণ এর অর্থ কী বলেন তা শিখুন, নিজের দিনের মধ্যে এর চিহ্নগুলো লক্ষ করুন, তারপর সিজদায় ও দোয়ায় সেটি ব্যবহার করুন — যতক্ষণ না নামটি ডাকা আবৃত্তি নয়, চেনার মতো অনুভূত হয়। এমন নিরানব্বইটি সপ্তাহ এমন এক পাঠক্রম, যাকে হাদীস নিজেই জান্নাতের সঙ্গে যুক্ত করেছে।"
          },
          {
            "en": "And let the names correct your image of Allah whenever fear distorts it. The verse began with an instruction and ended with a warning because both movements matter: reach for Him by what He truly is, and refuse every picture of Him that He did not give. Between those two disciplines, the heart's knowledge of its Lord stays both warm and true.",
            "bn": "আর ভয় যখনই আল্লাহ সম্পর্কে আপনার ধারণা বিকৃত করে, নামগুলোকে তা সংশোধন করতে দিন। আয়াতটি শুরু হয়েছে নির্দেশ দিয়ে, শেষ হয়েছে সতর্কবাণী দিয়ে — কারণ দুটি গতিই জরুরি: তিনি সত্যিকারে যা, সেই পরিচয়েই তাঁর দিকে হাত বাড়ান, আর তাঁর যে ছবি তিনি নিজে দেননি তার প্রতিটি প্রত্যাখ্যান করুন। এই দুই অনুশাসনের মাঝখানে হৃদয়ের রব-পরিচয় থাকে একই সঙ্গে উষ্ণ ও সত্য।"
          }
        ]
      }
    ]
  },
  "7:205": {
    "sections": [
      {
        "h": {
          "en": "The Closing Note of al-A'raf",
          "bn": "আল-আ'রাফের সমাপ্তি-সুর"
        },
        "p": [
          {
            "en": "Near the very end of al-A'raf, after stories of nations, prophets and the long argument with heedless hearts, two quiet commands arrive. In 7:204 the community is told to listen attentively and silently when the Quran is recited. Then comes 7:205 in the singular: remember your Lord within yourself, in humility and fear, below the loudness of speech, in the mornings and the evenings, and do not be among the heedless. The address is first to the Prophet ﷺ, and through him to every reader.",
            "bn": "আল-আ'রাফের একেবারে শেষ প্রান্তে, জাতিসমূহের কাহিনি, নবীগণ ও গাফেল হৃদয়ের সাথে দীর্ঘ বাদানুবাদের পরে, দুটি শান্ত আদেশ আসে। 7:204 আয়াতে সম্প্রদায়কে বলা হয়, কুরআন তিলাওয়াত হলে মন দিয়ে শোনো ও চুপ থাকো। তারপর একবচনে আসে 7:205 আয়াতটি: তোমার রবকে স্মরণ করো তোমার নিজের ভেতরে, বিনয় ও ভয়ের সাথে, উচ্চকণ্ঠের নিচে, সকালে ও সন্ধ্যায়, আর গাফেলদের অন্তর্ভুক্ত হয়ো না। সম্বোধন প্রথমত নবী ﷺ-এর প্রতি, আর তাঁর মাধ্যমে প্রত্যেক পাঠকের প্রতি।"
          },
          {
            "en": "The verse gives remembrance a place, a manner, a volume and a schedule. The place is fi nafsika, within yourself. The manner is tadarru'an wa khifatan, pleading humility and fear. The volume is duna-l-jahri mina-l-qawl, beneath the loudness of speech. The schedule is bil-ghuduwwi wal-asal, the early mornings and the late afternoons. And then a single warning names the disease all of this prevents: do not be among the ghafilin, the heedless.",
            "bn": "আয়াতটি স্মরণকে দেয় একটি স্থান, একটি ভঙ্গি, একটি স্বরমাত্রা ও একটি সময়সূচি। স্থানটি ফী নাফসিকা — তোমার নিজের ভেতরে। ভঙ্গিটি তাদাররু'আন ওয়া খীফাতান — মিনতিভরা বিনয় ও ভয়। স্বরমাত্রাটি দূনাল-জাহরি মিনাল-কাওল — উচ্চকণ্ঠের নিচে। সময়সূচিটি বিল-গুদুওয়্যি ওয়াল-আসাল — ভোরবেলা ও পড়ন্ত বিকেল। তারপর একটিমাত্র সতর্কবাণী সেই ব্যাধির নাম নেয়, যা এই সবকিছু ঠেকায়: গাফেলদের — উদাসীনদের — অন্তর্ভুক্ত হয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Quiet That Protects Sincerity",
          "bn": "যে নীরবতা ইখলাস রক্ষা করে"
        },
        "p": [
          {
            "en": "Ibn Kathir notes on this verse that remembrance is recommended away from shouting. The reason is not that softness has magic in it, but that quietness removes the audience. A remembrance no one can hear is being performed for no one except Allah, so its sincerity has nothing to feed on but Him. Earlier in the same surah, 7:55 uses the same word of humility for supplication: call upon your Lord in tadarru and in secret, for He does not love transgressors.",
            "bn": "ইবনে কাসীর এই আয়াতে উল্লেখ করেন, স্মরণ হওয়া উচিত চিৎকার থেকে দূরে। কারণ এটা নয় যে মৃদুতার মধ্যে কোনো জাদু আছে; বরং নীরবতা দর্শক-শ্রোতাকে সরিয়ে দেয়। যে স্মরণ কেউ শুনতে পায় না, তা আল্লাহ ছাড়া আর কারও জন্য পরিবেশিত হচ্ছে না — তাই তার ইখলাসের খোরাক কেবল তিনিই। একই সূরার আগের দিকে 7:55 আয়াতে দোয়ার জন্যও বিনয়ের একই শব্দ এসেছে: তোমাদের রবকে ডাকো তাদাররুর সাথে ও গোপনে; নিশ্চয়ই তিনি সীমালঙ্ঘনকারীদের ভালোবাসেন না।"
          },
          {
            "en": "Below the loudness of speech marks out a middle register: the tongue may move, the heart must be present, but nothing needs to carry across a room. That register has a practical gift — it fits everywhere. What must be loud can only happen in certain places; what is nearly silent can happen in a queue, on a road, in a sickbed. The verse quietly removes every excuse of circumstance by prescribing a form of worship that no circumstance can prevent.",
            "bn": "উচ্চকণ্ঠের নিচে — এই কথাটি একটি মাঝামাঝি স্বর চিহ্নিত করে: জিহ্বা নড়তে পারে, হৃদয়কে হাজির থাকতে হবে, কিন্তু কিছুই ঘর পেরিয়ে পৌঁছানোর দরকার নেই। এই স্বরের একটি ব্যবহারিক উপহার আছে — এটি সব জায়গায় খাপ খায়। যা উচ্চস্বরে করতে হয় তা কেবল নির্দিষ্ট জায়গায় সম্ভব; যা প্রায় নিঃশব্দ তা সম্ভব লাইনে দাঁড়িয়ে, পথে, রোগশয্যায়। যে ইবাদত কোনো পরিস্থিতিই আটকাতে পারে না, তেমন এক রূপ নির্ধারণ করে আয়াতটি নীরবে পরিস্থিতির সব অজুহাত সরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Ends of the Day",
          "bn": "দিনের দুই প্রান্ত"
        },
        "p": [
          {
            "en": "Ghuduww is the early part of the day; asal is the plural of asil, the stretch of late afternoon that leans toward sunset. Naming the day's two ends is a way of fencing the whole of it: what begins and closes with remembrance is unlikely to lose its middle entirely. The Quran repeats the pairing — 33:41-42 commands abundant remembrance with glorification morning and evening, and 18:28 tells the Prophet ﷺ to keep himself patiently with those who call on their Lord at both ends of the day, seeking His Face.",
            "bn": "গুদুওয় দিনের প্রথম ভাগ; আসাল হলো আসীলের বহুবচন — সূর্যাস্তের দিকে হেলে পড়া পড়ন্ত বিকেল। দিনের দুই প্রান্তের নাম নেওয়া আসলে পুরো দিনটিকে বেড়া দেওয়ার এক উপায়: যা শুরু ও শেষ হয় স্মরণে, তার মাঝখানটা পুরোপুরি হারিয়ে যাওয়ার সম্ভাবনা কম। কুরআন এই জুটি বারবার আনে — 33:41-42 আয়াতে সকাল-সন্ধ্যায় তাসবীহসহ প্রচুর স্মরণের আদেশ, আর 18:28 আয়াতে নবী ﷺ-কে বলা হয়েছে তাদের সাথে নিজেকে ধৈর্যের সাথে ধরে রাখতে, যারা দিনের দুই প্রান্তে তাদের রবকে ডাকে, তাঁর চেহারা কামনা করে।"
          },
          {
            "en": "The morning and evening adhkar of the sunnah occupy exactly these two windows, and this verse is among their roots. The choice of hours is merciful in design: the morning, before the day's noise decides your state for you; the late afternoon, before the night closes the account. A person anchored at those two moments carries a corrected compass into everything between them, and the day's traffic passes over a heart that has already been pointed home.",
            "bn": "সুন্নাহর সকাল-সন্ধ্যার যিকিরগুলো ঠিক এই দুটি সময়-জানালাই দখল করে, আর এই আয়াত সেগুলোর অন্যতম ভিত্তি। সময় বাছাইয়ে রহমতের ছাপ স্পষ্ট: সকাল — দিনের কোলাহল তোমার অবস্থা ঠিক করে দেওয়ার আগে; পড়ন্ত বিকেল — রাত হিসাব বন্ধ করার আগে। এই দুই মুহূর্তে নোঙর করা মানুষ মাঝের সবকিছুতে একটি সংশোধিত কম্পাস বহন করে, আর দিনের যানজট বয়ে যায় এমন এক হৃদয়ের ওপর দিয়ে, যাকে আগেই ঘরের দিকে তাক করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Disease Called Ghaflah",
          "bn": "গাফলত নামের ব্যাধি"
        },
        "p": [
          {
            "en": "The verse does not warn here against disbelief; it warns against being among the heedless — forgetting while still believing. Ghaflah is the slow anesthetic of the heart, and the same surah has already shown its end: 7:179 describes people with hearts that do not understand, eyes that do not see and ears that do not hear, like cattle and further astray, and closes by naming them the ghafilun. Heedlessness there is not a lapse of manners; it is the road to that condition.",
            "bn": "আয়াতটি এখানে কুফরের বিরুদ্ধে সতর্ক করছে না; সতর্ক করছে গাফেলদের অন্তর্ভুক্ত হওয়ার বিরুদ্ধে — বিশ্বাস রেখেও ভুলে থাকার বিরুদ্ধে। গাফলত হৃদয়ের ধীর চেতনানাশক, আর এই সূরাই আগে এর পরিণতি দেখিয়েছে: 7:179 আয়াতে বর্ণিত মানুষদের হৃদয় আছে কিন্তু বোঝে না, চোখ আছে কিন্তু দেখে না, কান আছে কিন্তু শোনে না — চতুষ্পদ জন্তুর মতো, বরং আরও পথভ্রষ্ট — আর শেষে তাদেরই নাম দেওয়া হয়েছে গাফিলুন। সেখানে গাফলত কোনো শিষ্টাচারের ত্রুটি নয়; তা ওই অবস্থার দিকে যাওয়ার রাস্তা।"
          },
          {
            "en": "The Prophet ﷺ measured the difference remembrance makes in the starkest terms. Al-Bukhari relates from Abu Musa (RA): the example of the one who remembers his Lord and the one who does not is the example of the living and the dead. And Muslim relates from Abu Hurayrah (RA) that the mufarridun have raced ahead — the men and women who remember Allah much. Dhikr in these texts is not decoration on top of religious life; it is the pulse by which its life is checked.",
            "bn": "স্মরণ কী পার্থক্য গড়ে, নবী ﷺ তা মেপেছেন সবচেয়ে তীক্ষ্ণ ভাষায়। বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: যে তার রবকে স্মরণ করে আর যে করে না, তাদের উপমা জীবিত ও মৃতের উপমা। আর মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, মুফাররিদূনরা এগিয়ে গেছে — সেই পুরুষ ও নারীরা, যারা আল্লাহকে বেশি বেশি স্মরণ করে। এই ভাষ্যগুলোতে যিকির দ্বীনী জীবনের ওপরের সাজসজ্জা নয়; এ হলো সেই নাড়ি, যা দিয়ে তার জীবন পরীক্ষা করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angels Next Door",
          "bn": "পরের আয়াতের ফেরেশতারা"
        },
        "p": [
          {
            "en": "The surah's last verse, 7:206, supplies the model for the command just given: those who are with your Lord are not too proud to worship Him; they glorify Him, and to Him they prostrate. Reciting it calls for a prostration — in the order of the mushaf this is the first verse of sajdah. The sequence is deliberate: told to remember quietly and constantly, the reader is immediately shown beings who already do, without fatigue and without arrogance.",
            "bn": "সূরার শেষ আয়াত 7:206 সদ্য দেওয়া আদেশের নমুনা হাজির করে: যারা তোমার রবের কাছে আছে, তারা তাঁর ইবাদতে অহংকার করে না; তারা তাঁর তাসবীহ পড়ে এবং তাঁকেই সিজদা করে। এটি তিলাওয়াতে সিজদা করতে হয় — মুসহাফের ক্রমে এটিই সিজদার প্রথম আয়াত। এই বিন্যাস ইচ্ছাকৃত: নীরবে ও নিয়মিত স্মরণের আদেশ পাওয়ামাত্র পাঠককে দেখানো হয় এমন সত্তাদের, যারা এরই মধ্যে তা করে — ক্লান্তিহীন, অহংকারহীন।"
          },
          {
            "en": "Widen the frame and the whole universe joins them: 17:44 states that there is nothing at all that does not glorify Allah with His praise, though we do not perceive it. Against that background, ghaflah is exposed as the strange condition — a forgetful creature moving through a cosmos that remembers. The command of 7:205 is therefore not an extra burden laid on life but an invitation to stop being the one silent voice in a singing creation.",
            "bn": "ফ্রেমটা বড় করলে গোটা মহাবিশ্ব তাদের সাথে যোগ দেয়: 17:44 আয়াত বলে, এমন কিছুই নেই যা আল্লাহর প্রশংসাসহ তাঁর তাসবীহ পড়ে না, যদিও আমরা তা টের পাই না। সেই পটভূমিতে গাফলতই ধরা পড়ে অদ্ভুত অবস্থা হিসেবে — স্মরণে মগ্ন এক বিশ্বজগতের ভেতর দিয়ে চলা এক বিস্মৃত প্রাণী। তাই 7:205 আয়াতের আদেশ জীবনের ওপর চাপানো বাড়তি বোঝা নয়, বরং আমন্ত্রণ — গানরত সৃষ্টির মাঝে একমাত্র নীরব কণ্ঠ হয়ে না থাকার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Practice That Needs Nothing",
          "bn": "যে আমলের জন্য কিছুই লাগে না"
        },
        "p": [
          {
            "en": "Everything this verse asks for is already in your possession: a self to go inward to, a morning and an evening that arrive without being earned, and a voice that can drop below loudness. Begin with the two ends of the day and guard them like appointments. Let the tongue move gently and pull the heart back each time it wanders. The verse promises no visible result and threatens no visible loss; it simply separates two kinds of people, the remembering and the heedless, and asks which list you are on.",
            "bn": "এই আয়াত যা চায় তার সবই এরই মধ্যে তোমার কাছে আছে: ভেতরে ফেরার মতো একটি নিজ, না চাইতেই আসা একটি সকাল ও একটি সন্ধ্যা, আর উচ্চতার নিচে নামতে পারা একটি কণ্ঠ। শুরু করো দিনের দুই প্রান্ত দিয়ে, আর সেগুলো পাহারা দাও নির্ধারিত সাক্ষাতের মতো। জিহ্বা মৃদু চলুক, আর হৃদয় যতবার ভেসে যায় ততবার টেনে ফেরাও। আয়াতটি কোনো দৃশ্যমান ফল প্রতিশ্রুতি দেয় না, কোনো দৃশ্যমান ক্ষতির হুমকিও দেয় না; এটি কেবল দুই ধরনের মানুষকে আলাদা করে — স্মরণকারী ও গাফেল — আর জিজ্ঞেস করে, তুমি কোন তালিকায়।"
          }
        ]
      }
    ]
  }
});
