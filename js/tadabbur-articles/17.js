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
  "17:1": {
    "sections": [
      {
        "h": {
          "en": "One Word Before the Journey",
          "bn": "সফরের আগে একটি শব্দ"
        },
        "p": [
          {
            "en": "The surah opens not with the journey but with a word of glorification: Subḥān, Glory be to Him. Ibn Kathir explains that here Allah glorifies Himself for His power to do what none but He can do, for there is no god but He and no Lord besides Him. al-Muyassar reads the opening the same way: God magnifies His own affair because He alone is able to bring such a thing to pass. The wonder is placed first, before any detail, so the mind meets the Doer before it meets the deed.",
            "bn": "সূরাটি শুরু হয় সফর দিয়ে নয়, বরং একটি তাসবীহের শব্দ দিয়ে: সুবহান, তিনি পবিত্র। ইবন কাসীর বলেন, এখানে আল্লাহ নিজেই নিজের পবিত্রতা ঘোষণা করছেন সেই ক্ষমতার জন্য যা তিনি ছাড়া আর কেউ রাখে না। তিনি ছাড়া কোনো ইলাহ নেই, তিনি ছাড়া কোনো রব নেই। মুয়াসসারও একইভাবে পড়ে: আল্লাহ নিজের শানকে মহান করছেন, কারণ এমন কাজ কেবল তিনিই করতে পারেন। বিস্ময়টা সবার আগে রাখা হয়েছে, কোনো বিবরণের আগেই, যেন মন কাজটার আগে কাজের কর্তার সঙ্গে দেখা করে।"
          },
          {
            "en": "Classical readers noticed that Subḥān is the language of astonishment, spoken to mark a great marvel. Ma'arif al-Qur'an draws a point from this: had the night journey been merely a dream, there would be nothing so unusual in it, for any believer may dream of far places. The opening therefore signals something outside ordinary experience. It also guards the reader from a wrong thought. However dazzling the honour about to be described, the glory belongs to God alone, and never to the one He chooses to honour.",
            "bn": "তাফসীরকারেরা লক্ষ করেছেন, সুবহান বিস্ময়ের ভাষা, বড় কোনো আশ্চর্য জিনিস তুলে ধরতে বলা হয়। মাআরিফুল কুরআন এখান থেকে একটি কথা টানে: রাতের এই সফর যদি স্রেফ স্বপ্ন হতো, তাতে এত অস্বাভাবিক কিছু থাকত না, কারণ যেকোনো মুমিন দূর দেশের স্বপ্ন দেখতে পারে। তাই শুরুর এই শব্দ জানিয়ে দেয়, ঘটনাটা সাধারণ অভিজ্ঞতার বাইরের। এটি পাঠককে একটি ভুল ধারণা থেকেও বাঁচায়। যত ঝলমলে সম্মানের কথাই সামনে আসুক, মহিমা কেবল আল্লাহরই, যাকে তিনি সম্মান দেন তার কখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Taken by Night",
          "bn": "রাতের বেলার সেই সফর"
        },
        "p": [
          {
            "en": "The verb is asrā, from a root meaning to make someone travel by night, and the word that follows, lailan, by night, makes the sense unmistakable. Ma'arif al-Qur'an notes that lailan is left indefinite on purpose: not the whole night, but a part of it. Ibn Kathir renders it as the depths of the night. as-Saʿdī draws out the marvel in the distance itself, for His servant was carried across a very great stretch of land and returned within that same night, a journey no ordinary traveller could make.",
            "bn": "ক্রিয়াটি আসরা, এমন এক ধাতু থেকে যার অর্থ রাতের বেলা কাউকে সফর করানো। এরপরের শব্দ লাইলান, অর্থাৎ রাতে, অর্থটা আর সন্দেহের বাইরে রাখে না। মাআরিফুল কুরআন বলে, লাইলান শব্দটি ইচ্ছে করেই অনির্দিষ্ট রাখা হয়েছে: গোটা রাত নয়, রাতের একটি অংশ। ইবন কাসীর একে বলেন রাতের গভীর অংশ। সাদী দূরত্বের ভেতরেই বিস্ময়টা তুলে ধরেন, কারণ তাঁর বান্দাকে বিশাল এক পথ পাড়ি দিয়ে সেই রাতেই ফিরিয়ে আনা হয়েছিল, এমন সফর কোনো সাধারণ পথিকের পক্ষে সম্ভব নয়।"
          },
          {
            "en": "The taking is God's own act: asrā bi-ʿabdihi, He caused His servant to travel. as-Saʿdī reads this as part of God's care and gentleness toward him, easing his every affair and granting him favours beyond those of the first people and the last. The night, in the tafsir, is not incidental. It is the hour of stillness and secrecy, when the servant who stood in prayer while others slept is now carried where nobody else has gone. The honour is quiet, unseen by the sleeping city.",
            "bn": "যিনি এই সফর করাচ্ছেন তিনি স্বয়ং আল্লাহ: আসরা বিআবদিহি, তিনি তাঁর বান্দাকে সফর করিয়েছেন। সাদী একে দেখেন তাঁর প্রতি আল্লাহর যত্ন ও কোমলতার অংশ হিসেবে, যিনি তাঁর প্রতিটি কাজ সহজ করে দেন আর তাঁকে এমন নিয়ামত দেন যা আগের ও পরের সবাইকে ছাড়িয়ে যায়। তাফসীরে রাতটা এমনি এমনি আসেনি। এ সেই নীরব গোপন প্রহর, যখন যে বান্দা অন্যদের ঘুমের মধ্যে দাঁড়িয়ে নামাজ পড়তেন, তাঁকেই এখন এমন জায়গায় নেওয়া হচ্ছে যেখানে আর কেউ যায়নি। সম্মানটা নীরব, ঘুমন্ত শহরের চোখের আড়ালে।"
          }
        ]
      },
      {
        "h": {
          "en": "Called Simply His Servant",
          "bn": "কেবল বান্দা বলে ডাকা"
        },
        "p": [
          {
            "en": "At the highest moment of his life, God does not name His Messenger by prophethood or by love, but by servitude: bi-ʿabdihi, His servant. Ma'arif al-Qur'an calls this the greatest honour a human being can ever hold. When Allah, of His own choosing, calls someone My servant in a setting of welcome and nearness, a unique bond of love lies hidden inside the word. The lesson the commentator draws is plain: the highest thing a person can reach is to become a true servant of God.",
            "bn": "জীবনের সবচেয়ে উঁচু মুহূর্তে আল্লাহ তাঁর রাসূলকে নবুয়ত বা ভালোবাসার নামে ডাকেন না, ডাকেন বান্দাগিরির নামে: বিআবদিহি, তাঁর বান্দা। মাআরিফুল কুরআন একে বলে মানুষের পাওয়ার মতো সবচেয়ে বড় সম্মান। আল্লাহ যখন নিজে থেকেই কাউকে আমার বান্দা বলে ডাকেন সেই অভ্যর্থনা ও নৈকট্যের আসরে, তখন সেই শব্দের ভেতরে লুকিয়ে থাকে ভালোবাসার এক অনন্য বন্ধন। তাফসীরকারের টানা শিক্ষাটা সোজা: মানুষের পৌঁছানোর সর্বোচ্চ জিনিস হলো আল্লাহর সত্যিকার বান্দা হয়ে ওঠা।"
          },
          {
            "en": "as-Saʿdī notices that God names him His servant in three great settings: here in the night journey, at the sending down of the Qur'an, and in the challenge to produce its like. In each, he reads, the Prophet ﷺ attained these towering stations precisely because he perfected his servitude to his Lord. The title is not a step down from honour but its very source. He rose because he bowed. What lifted him above all people was that he belonged, more completely than anyone, to God alone.",
            "bn": "সাদী খেয়াল করেন, আল্লাহ তিনটি বড় আসরে তাঁকে বান্দা বলে ডাকেন: এই রাতের সফরে, কুরআন নাজিলের সময়, আর কুরআনের মতো কিছু আনার চ্যালেঞ্জে। প্রতিটিতেই, তিনি পড়েন, নবী ﷺ এই উঁচু স্থানগুলোতে পৌঁছেছিলেন ঠিক এ কারণেই যে তিনি তাঁর রবের বান্দাগিরি পূর্ণ করেছিলেন। এই পরিচয় সম্মান থেকে নেমে আসা নয়, বরং সম্মানের উৎসই। তিনি উঁচু হয়েছিলেন কারণ তিনি নত হয়েছিলেন। যা তাঁকে সব মানুষের উপরে তুলেছিল তা হলো, তিনি সবার চেয়ে বেশি করে কেবল আল্লাহরই ছিলেন।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a second reason for the word. Because the journey from start to finish is filled with wonders, someone might slip, as others did over earlier prophets, into thinking its traveller more than a man. By naming him servant, the Qur'an closes that door: with all these marvels, he remains a servant of God, not a god. The same Qur'an calls the righteous the servants of the Most Merciful (25:63), where being a servant is a title of nearness and not of lowliness at all.",
            "bn": "মাআরিফুল কুরআন এই শব্দের পেছনে দ্বিতীয় একটি কারণ যোগ করে। সফরটা শুরু থেকে শেষ পর্যন্ত বিস্ময়ে ভরা বলে কেউ হয়তো পিছলে যেতে পারে, আগের নবীদের নিয়ে যেমন অনেকে গিয়েছিল, ভাবতে পারে এর যাত্রী মানুষের চেয়ে বেশি কিছু। তাঁকে বান্দা বলে ডেকে কুরআন সেই দরজা বন্ধ করে দেয়: এত আশ্চর্যের পরও তিনি আল্লাহর বান্দাই, ইলাহ নন। এই কুরআনই নেককারদের বলে দয়াময়ের বান্দা (২৫:৬৩), যেখানে বান্দা হওয়া নৈকট্যের পরিচয়, মোটেও ছোট হওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Two Sacred Houses",
          "bn": "দুই পবিত্র ঘরের মাঝে"
        },
        "p": [
          {
            "en": "The journey runs from al-Masjid al-Ḥarām, the sacred mosque at Makkah, to al-Masjid al-Aqṣā, the farthest mosque at Jerusalem. as-Saʿdī calls the first the most honoured mosque without exception, and the second a mosque of high rank, the dwelling-place of many prophets. Both are named, and the verse binds them together within a single night, joining the house where the Prophet ﷺ prayed to the house where prophets before him had prayed. The whole line of prophecy is drawn as one road.",
            "bn": "সফরটা মাসজিদুল হারাম থেকে, মক্কার সেই পবিত্র মসজিদ থেকে, মাসজিদুল আকসা পর্যন্ত, জেরুজালেমের সেই দূরবর্তী মসজিদ পর্যন্ত। সাদী প্রথমটিকে বলেন নিঃসন্দেহে সবচেয়ে সম্মানিত মসজিদ, আর দ্বিতীয়টিকে বলেন উঁচু মর্যাদার মসজিদ, বহু নবীর আবাসস্থল। দুটিরই নাম নেওয়া হয়েছে, আর আয়াতটি একটি রাতের ভেতরে তাদের এক করে বেঁধে দেয়। যে ঘরে নবী ﷺ নামাজ পড়তেন তাকে জুড়ে দেয় সেই ঘরের সঙ্গে যেখানে তাঁর আগের নবীরা নামাজ পড়তেন। গোটা নবুয়তের ধারাটাকে যেন একটি পথ হিসেবে আঁকা হয়।"
          },
          {
            "en": "Of al-Aqṣā the verse says We have blessed its surroundings. Ibn Kathir reads the blessing as its crops and fruits; as-Saʿdī, as its abundant trees, rivers and lasting fertility, and also its rank among mosques and the reward of travelling to it for worship. Ma'arif al-Qur'an widens the word surroundings to the whole land of Syria and Palestine, blessed both in religion, as the home and qiblah of earlier prophets, and in the world, with its streams and green fields. The place itself carries the memory of worship.",
            "bn": "আকসা সম্পর্কে আয়াত বলে, আমি তার চারপাশকে বরকতময় করেছি। ইবন কাসীর এই বরকতকে পড়েন তার ফসল ও ফলফলাদি হিসেবে। সাদী পড়েন তার প্রচুর গাছপালা, নদী ও স্থায়ী উর্বরতা হিসেবে, আর মসজিদগুলোর মধ্যে তার মর্যাদা এবং ইবাদতের জন্য সেখানে সফরের সওয়াব হিসেবেও। মাআরিফুল কুরআন চারপাশ শব্দটিকে বিস্তৃত করে গোটা সিরিয়া ও ফিলিস্তিনের ভূমি পর্যন্ত, যা দ্বীনেও বরকতময়, আগের নবীদের আবাস ও কিবলা হিসেবে, আবার দুনিয়াতেও বরকতময়, তার ঝরনা ও সবুজ মাঠ দিয়ে। জায়গাটা নিজেই ইবাদতের স্মৃতি বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forty Years Apart",
          "bn": "চল্লিশ বছরের ব্যবধান"
        },
        "p": [
          {
            "en": "One sound narration ties the two mosques together directly. al-Bukhārī records that Abū Dharr (may God be pleased with him) asked, \"O Messenger of God, which mosque was first built on the earth?\" He said, \"Al-Masjid al-Ḥarām.\" I said, \"Which was next?\" He said, \"Al-Masjid al-Aqṣā.\" I asked, \"How long between them?\" He said, \"Forty years.\" He added, \"Wherever the time for prayer overtakes you, pray, for the merit is in that.\" The same report is also recorded by Muslim in his Ṣaḥīḥ.",
            "bn": "একটি সহীহ হাদীস আয়াতের দুই মসজিদকে সরাসরি জুড়ে দেয়। বুখারী বর্ণনা করেন, আবু যর (রাঃ) জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, পৃথিবীতে সবার আগে কোন মসজিদ তৈরি হয়েছিল? তিনি বললেন, মাসজিদুল হারাম। আমি বললাম, তারপর কোনটি? তিনি বললেন, মাসজিদুল আকসা। আমি বললাম, দুটির মাঝে কত সময়? তিনি বললেন, চল্লিশ বছর। তিনি আরও বললেন, নামাজের সময় যেখানেই তোমাকে পায়, সেখানেই নামাজ পড়ে নাও, কারণ ফজিলত তাতেই। একই বর্ণনা মুসলিমও তাঁর সহীহতে এনেছেন।"
          },
          {
            "en": "The hadith honours both houses named in the verse and sets them in order: the Kaʿbah first, then al-Aqṣā, forty years apart. Yet its closing line keeps the worshipper from making holiness a matter of place alone. The whole earth has been made a place of prayer, so wherever the hour finds you, you may pray. The journey exalts al-Aqṣā without imprisoning worship inside its walls. The door of nearness to God, the hadith reminds us, opens on every patch of ground.",
            "bn": "হাদীসটি আয়াতে নাম-নেওয়া দুই ঘরকেই সম্মান দেয় আর তাদের ক্রম ঠিক করে দেয়: আগে কাবা, তারপর আকসা, মাঝে চল্লিশ বছরের ফারাক। তবু এর শেষ কথাটি ইবাদতকারীকে পবিত্রতাকে কেবল জায়গার ব্যাপার বানিয়ে ফেলা থেকে ঠেকায়। গোটা জমিনকে নামাজের জায়গা করে দেওয়া হয়েছে, তাই যেখানেই সময় আপনাকে পায় সেখানেই নামাজ পড়তে পারেন। সফরটি আকসাকে উঁচু করে, কিন্তু ইবাদতকে তার দেয়ালের ভেতরে বন্দি করে না। হাদীসটি মনে করিয়ে দেয়, আল্লাহর নৈকট্যের দরজা জমিনের প্রতিটি টুকরোতেই খোলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Awake, or a Vision?",
          "bn": "জাগরণে, নাকি দর্শনে"
        },
        "p": [
          {
            "en": "The early scholars differed over how the journey happened, and the tafsir keeps the difference open. al-Qurṭubī reports a group holding that it was a journey of the soul: the Prophet's body never left its resting place, and what he saw was a true vision, for the visions of prophets are true. He names Muʿāwiyah and ʿĀʾishah (may God be pleased with them) as holding this, and mentions it also from al-Ḥasan and Ibn Isḥāq. at-Tabari records ʿĀʾishah's own words, that his body was not missed; rather God made his soul journey.",
            "bn": "শুরুর যুগের আলিমরা সফরটা কীভাবে হয়েছিল তা নিয়ে মতভেদ করেছেন, আর তাফসীর সেই মতভেদটাকে খোলা রাখে। কুরতুবী বর্ণনা করেন, এক দল মনে করতেন এটি ছিল রূহের সফর: নবীর দেহ তাঁর বিশ্রামের জায়গা ছাড়েনি, আর যা তিনি দেখেছেন তা ছিল সত্য দর্শন, কারণ নবীদের দর্শন সত্য হয়। তিনি এই মত ধারণকারী হিসেবে নাম নেন মুআবিয়া ও আয়িশা (রাঃ)-এর, আর একথা হাসান ও ইবন ইসহাক থেকেও উল্লেখ করেন। তাবারী আয়িশা (রাঃ)-এর নিজের কথা এনেছেন, রাসূলের দেহ কোথাও যায়নি, বরং আল্লাহ তাঁর রূহকে সফর করিয়েছেন।"
          },
          {
            "en": "A second group held that the journey to Jerusalem was in the body and while awake. al-Qurṭubī argues the point from the wording itself: God says He took His servant, and ʿabd names body and soul together, not His servant's soul alone; and He opens with Glory, which suits a bodily marvel rather than a dream. Ma'arif al-Qur'an reports this to be the position of the majority. at-Tabari, having laid out both readings, leaves the matter with God, who knows best which of them it was. The tafsir names the sides and forces no verdict.",
            "bn": "আরেক দল মনে করতেন, জেরুজালেমের সফর ছিল দেহে এবং জাগ্রত অবস্থায়। কুরতুবী কথাটা প্রমাণ করেন শব্দ থেকেই: আল্লাহ বলেন তিনি তাঁর বান্দাকে নিয়ে গেছেন, আর বান্দা শব্দটি দেহ ও রূহকে একসঙ্গে বোঝায়, শুধু বান্দার রূহকে নয়। আবার তিনি শুরু করেন পবিত্রতা দিয়ে, যা দেহের বিস্ময়ের সঙ্গে খাপ খায়, স্বপ্নের সঙ্গে নয়। মাআরিফুল কুরআন জানায়, এটাই অধিকাংশের অবস্থান। তাবারী দুই পাঠ সাজিয়ে দিয়ে বিষয়টা আল্লাহর কাছে ছেড়ে দেন, যিনি সবচেয়ে ভালো জানেন কোনটি ঘটেছিল। তাফসীর দুই পক্ষের নাম নেয়, কোনো রায় চাপায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Shown the Signs",
          "bn": "নিদর্শন দেখানোর জন্য"
        },
        "p": [
          {
            "en": "The verse gives the purpose: li-nuriyahu min āyātinā, that We might show him some of Our signs. Ibn Kathir reads these as great signs. as-Saʿdī says God showed him of His signs what increased him in guidance, insight, firmness and discernment. The grammar is worth pausing on. The Prophet ﷺ is shown; it is God who does the showing. Even at the summit, he is the receiver of a gift, not its author. The night journey is something done to him and for him, by his Lord, from beginning to end.",
            "bn": "আয়াত উদ্দেশ্যটা জানিয়ে দেয়: লিনুরিয়াহু মিন আয়াতিনা, যেন আমি তাঁকে আমার কিছু নিদর্শন দেখাই। ইবন কাসীর এগুলোকে পড়েন মহান নিদর্শন হিসেবে। সাদী বলেন, আল্লাহ তাঁকে তাঁর এমন নিদর্শন দেখালেন যা তাঁকে হেদায়েত, অন্তর্দৃষ্টি, দৃঢ়তা ও পার্থক্য-বোঝার ক্ষমতায় বাড়িয়ে দিল। এখানে ব্যাকরণটা একটু থেমে ভাবার মতো। নবী ﷺ-কে দেখানো হচ্ছে, আর আল্লাহই দেখানেওয়ালা। চূড়ায় পৌঁছেও তিনি এক উপহারের গ্রহীতা, তার রচয়িতা নন। রাতের এই সফর গোড়া থেকে শেষ পর্যন্ত তাঁর প্রতি ও তাঁর জন্য করা, তাঁর রবেরই করা।"
          },
          {
            "en": "The verse then closes on His names: He is the Hearing, the Seeing. al-Muyassar unfolds them, that He hears every voice and sees all that can be seen, and gives everyone his due in this world and the next. The seal answers the opening. A God who is beyond compare, who alone could do such a thing, is also the God who hears and sees His servant closely. Distance and nearness meet in Him. The God exalted above all is not far from the servant He chooses to honour.",
            "bn": "এরপর আয়াত শেষ হয় তাঁর নাম দিয়ে: তিনি সর্বশ্রোতা, সর্বদ্রষ্টা। মুয়াসসার এগুলো খুলে বলে, তিনি প্রতিটি শব্দ শোনেন আর যা কিছু দেখা যায় সব দেখেন, আর দুনিয়া ও আখিরাতে প্রত্যেককে তার প্রাপ্য দেন। শেষের এই মোহর শুরুর কথার জবাব দেয়। যে আল্লাহ তুলনার ঊর্ধ্বে, যিনি একাই এমন কাজ করতে পারতেন, তিনিই আবার সেই আল্লাহ যিনি তাঁর বান্দাকে কাছ থেকে শোনেন ও দেখেন। দূরত্ব আর নৈকট্য তাঁর মধ্যেই মিলে যায়। যিনি সবার ঊর্ধ্বে উঁচু, তিনি সেই বান্দা থেকে দূরে নন যাকে তিনি সম্মান দিতে বেছে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Title Worth Having",
          "bn": "পাওয়ার মতো পরিচয়"
        },
        "p": [
          {
            "en": "Read whole, the verse teaches by its very order. It begins with God's glory and ends with His hearing and sight; between the two it carries His servant by night and shows him wonders. And at the centre of it all stands one word: ʿabd. The most honoured human being, at his most honoured hour, is named by the plainest relationship a person can have with God, which is simply to belong to Him. as-Saʿdī's point returns here: he reached the heights by perfecting that belonging.",
            "bn": "আয়াতটা পুরোপুরি পড়লে এর ক্রম দিয়েই তা শেখায়। শুরু হয় আল্লাহর মহিমা দিয়ে, শেষ হয় তাঁর শোনা ও দেখা দিয়ে। এই দুইয়ের মাঝে তিনি রাতের বেলা তাঁর বান্দাকে নিয়ে যান আর তাঁকে বিস্ময় দেখান। আর সবকিছুর কেন্দ্রে দাঁড়িয়ে আছে একটি শব্দ: আবদ। সবচেয়ে সম্মানিত মানুষটিকে তাঁর সবচেয়ে সম্মানের মুহূর্তে ডাকা হয় সেই সবচেয়ে সাদামাটা সম্পর্কের নামে যা আল্লাহর সঙ্গে একজন মানুষের থাকতে পারে, অর্থাৎ কেবল তাঁর হয়ে থাকা। সাদীর কথাটা এখানে ফিরে আসে: সেই হয়ে থাকাকে পূর্ণ করেই তিনি উঁচুতে পৌঁছেছিলেন।"
          },
          {
            "en": "For a reader, that reorders the whole idea of a life worth living. We reach for titles that raise us over other people; the verse hands us the title that sets us lowest before our Lord and calls it the summit. To be God's servant is not a station left behind on the way up. It is itself the way up. What honoured the Prophet ﷺ is offered, in its own measure, to anyone willing to belong to God before belonging to anything else at all.",
            "bn": "একজন পাঠকের জন্য এটি জীবনটাকে সাজিয়ে দেখার গোটা ধারণাটাই উল্টে দেয়। আমরা এমন সব পরিচয়ের পেছনে ছুটি যা আমাদের অন্য মানুষের উপরে তোলে। আয়াতটি আমাদের হাতে তুলে দেয় সেই পরিচয় যা রবের সামনে আমাদের সবচেয়ে নিচে নামায়, আর সেটাকেই বলে চূড়া। আল্লাহর বান্দা হওয়া উপরে ওঠার পথে পেছনে ফেলে আসা কোনো স্তর নয়। ওটাই উপরে ওঠার পথ। যা নবী ﷺ-কে সম্মান দিয়েছিল, তা নিজের মাপে যেকোনো মানুষকেই দেওয়া হয় যে অন্য সবকিছুর আগে আল্লাহর হয়ে থাকতে রাজি।"
          }
        ]
      }
    ]
  },
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
  "17:13": {
    "sections": [
      {
        "h": {
          "en": "Every Neck, Every Deed",
          "bn": "প্রত্যেক গলা, প্রত্যেক আমল"
        },
        "p": [
          {
            "en": "Wa-kulla insanin alzamnahu ta'irahu fi 'unuqihi: and every human, We have fastened his ta'ir to his neck. The line opens on kull insan, every single person, with none set outside it. As-Sa'di reads the whole verse as a statement about the perfection of God's justice: what a person did of good and evil, Allah makes cling to him and lets it pass to no other. The scope is the point. This is not said of some condemned nation or a named wrongdoer; it is said of everyone who acts, the reader included.",
            "bn": "ওয়া কুল্লা ইনসানিন আলঝামনাহু তায়িরাহু ফী উনুকিহি: আর প্রত্যেক মানুষ, আমি তার তায়ির তার গলায় বেঁধে দিয়েছি। আয়াতটি শুরু হয় কুল্লা ইনসান দিয়ে, প্রত্যেকটি লোক, কেউ এর বাইরে নেই। সাদী গোটা আয়াতটিকে পড়েন আল্লাহর ন্যায়বিচারের পূর্ণতার কথা হিসেবে। মানুষ ভালো-মন্দ যা করেছে, আল্লাহ তা তার সঙ্গে বেঁধে রাখেন, অন্য কারো কাছে যেতে দেন না। এই ব্যাপ্তিটাই মূল কথা। এটি কোনো ধ্বংস হওয়া জাতি বা নাম-ধরা এক অপরাধীর কথা নয়, এটি প্রত্যেক কর্মশীল মানুষের কথা, পাঠক নিজেও যার ভেতরে।"
          },
          {
            "en": "From that one image al-Muyassar and as-Sa'di both draw the same rule, and draw it in both directions: a person is not called to account for anyone else's deed, and no one else is called to account for his. Your record is yours coming and going. Nothing you carry was earned by another, and nothing you did quietly attaches to a name that is not yours. Later in the same surah, 17:15, says it flatly, that no bearer of burdens bears the burden of another.",
            "bn": "সেই একটি ছবি থেকে মুয়াসসার আর সাদী দুজনেই একই নিয়ম টানেন, আর টানেন দুই দিক থেকেই। কারো কাজের হিসাব আরেকজনের কাছে চাওয়া হয় না, আর তার কাজের হিসাবও অন্য কারো কাছে চাওয়া হয় না। আপনার আমলনামা আসা-যাওয়া দুই দিকেই কেবল আপনার। আপনি যা বইছেন তা অন্য কেউ কামায়নি, আর আপনার কোনো কাজ চুপিসারে এমন নামে গিয়ে জোড়ে না যা আপনার নয়। এই সূরারই পরের দিকে, ১৭:১৫, কথাটা সোজাসুজি বলে, কোনো ভার বহনকারী অন্যের ভার বইবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Taken from Birds",
          "bn": "পাখি থেকে নেওয়া এক শব্দ"
        },
        "p": [
          {
            "en": "The word ta'ir has a history that at-Tabari opens up. Fastening his ta'ir to his neck, he says, is a figure drawn from what the Arabs used to take as good or bad omen from the flights of birds, the ones that crossed from the right and the ones that crossed from the left. Al-Baghawi says the same in the same terms, sawanih and bawarih, the bird that runs before you and the bird that cuts across. A man loosed a bird and let its direction decide whether he travelled or stayed.",
            "bn": "তায়ির শব্দটার একটা ইতিহাস আছে, তাবারী সেটা খুলে দেন। গলায় তার তায়ির বাঁধা, এ কথাটা তিনি বলেন এক রূপক, আরবেরা পাখির ওড়া থেকে যে শুভ-অশুভ লক্ষণ নিত তা থেকে নেওয়া, ডান দিক দিয়ে যাওয়া পাখি আর বাঁ দিক দিয়ে যাওয়া পাখি। বাগাভীও ঠিক একই শব্দে বলেন, সাওয়ানিহ আর বাওয়ারিহ, সামনে দিয়ে দৌড়ে যাওয়া পাখি আর আড়াআড়ি কেটে যাওয়া পাখি। একজন লোক পাখি ছেড়ে দিত, আর তার যাওয়ার দিক ঠিক করত সে সফরে যাবে নাকি থেমে যাবে।"
          },
          {
            "en": "The Qur'an keeps the very word and moves where it points. Your ta'ir is not a bird overhead; it is fastened to you, decreed and made of your own doing, whether an ill one that drives to the Fire or a happy one that leads to gardens, as at-Tabari puts the two ends. Ibn Abbas, whom he cites, says plainly that the ta'ir is a person's deed, and adds that the word runs through many things, one of them the very superstition people work against one another. The omen you feared is relocated: it was never in the sky, it is in your record.",
            "bn": "কুরআন শব্দটাই রেখে দেয়, কিন্তু সরিয়ে দেয় সে কোন দিকে ইশারা করছে। আপনার তায়ির মাথার উপরের কোনো পাখি নয়, তা বাঁধা আছে আপনার সঙ্গে, আপনার নিজের কাজ দিয়েই গড়া এক নির্ধারিত জিনিস, হয় অশুভ যা জাহান্নামের দিকে টানে, নয়তো শুভ যা জান্নাতের দিকে নেয়, তাবারী দুই প্রান্ত এভাবেই বলেন। তিনি ইবন আব্বাসকে উদ্ধৃত করেন, যিনি সোজাসুজি বলেন তায়ির মানে মানুষের আমল, আর যোগ করেন শব্দটা অনেক কিছুর ভেতর চলে, তার একটা হলো মানুষ একে অন্যের বেলায় যে কুসংস্কার খাটায় সেটাই। আপনি যে লক্ষণকে ভয় পেতেন তা সরে গেছে, তা কখনো আকাশে ছিল না, আছে আপনার আমলনামায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Deed, Fate, or Share",
          "bn": "আমল, ভাগ্য, নাকি হিস্যা"
        },
        "p": [
          {
            "en": "On the plainest reading the ta'ir is simply a person's deeds. Ibn Kathir defines it as what flew off him of his doing, and reports it from Ibn Abbas, Mujahid and others: good deeds and bad, which he will be made to own and be repaid for. At-Tabari stacks the same chains, Ibn Abbas, Mujahid, Qatadah, each returning the one gloss, 'amaluhu, his deed, clinging to him wherever he goes and moving wherever he moves. The word that once named a bird now names the trail a life leaves.",
            "bn": "সবচেয়ে সহজ পড়ায় তায়ির মানে কেবল মানুষের আমল। ইবন কাসীর এর সংজ্ঞা দেন, তার কাজ থেকে যা উড়ে গেছে, আর তা বর্ণনা করেন ইবন আব্বাস, মুজাহিদ ও আরো অনেকের সূত্রে, ভালো কাজ আর মন্দ কাজ, যা তাকে স্বীকার করানো হবে আর যার প্রতিদান দেওয়া হবে। তাবারী একই সূত্রগুলো সাজান, ইবন আব্বাস, মুজাহিদ, কাতাদা, প্রত্যেকে ফিরে আসেন সেই একটি অর্থে, আমালুহু, তার আমল, যেখানেই সে যায় সঙ্গে লেগে থাকে আর যেখানেই সরে সেখানেই সরে যায়। যে শব্দ একদিন পাখির নাম ছিল, তা এখন এক জীবনের রেখে যাওয়া ছাপের নাম।"
          },
          {
            "en": "Others widen it. Mujahid, in al-Qurtubi, joins to the deed a person's rizq, his allotted provision, and elsewhere reports that no child is born but with a slip on its neck marked wretched or blessed. Al-Hasan reads it as one's wretchedness and happiness and what flew to him of the decree. Al-Baghawi gathers a second line entirely: Abu 'Ubaydah and al-Qutaybi take ta'ir as a person's share, his lot, from the Arab phrase his arrow flew, meaning his portion came up. Deed, destiny, provision, portion, the readings press close without merging.",
            "bn": "অন্যরা তা আরো চওড়া করেন। কুরতুবীতে মুজাহিদ আমলের সঙ্গে জোড়েন মানুষের রিযিক, তার বরাদ্দ জীবিকা, আর অন্যত্র বর্ণনা করেন কোনো শিশু জন্মায় না যার গলায় সৌভাগ্যবান কি হতভাগা লেখা এক চিরকুট নেই। হাসান পড়েন মানুষের হতভাগ্য আর সৌভাগ্য, আর নির্ধারণ থেকে যা তার দিকে উড়ে এসেছে সেই অর্থে। বাগাভী একেবারে দ্বিতীয় একটি ধারা তোলেন। আবু উবাইদা আর কুতাইবী তায়িরকে ধরেন মানুষের ভাগ, তার অংশ হিসেবে, আরবি বাক্য তার তীর উড়ল থেকে, অর্থাৎ তার হিস্যা উঠে এল। আমল, ভাগ্য, রিযিক, হিস্যা, পাঠগুলো গায়ে গায়ে ঠেকে থাকে, তবু এক হয়ে যায় না।"
          },
          {
            "en": "At-Tabari does not leave the two sides even. He judges the interpreters' reading the stronger, that the ta'ir is the fate a person comes to by his own deed, and says one may not overstep in the Qur'an's meaning what they held. Yet he grants that the share reading has a face, and that if it means one's share of deed and of misery or happiness, it does not fall far from theirs. He keeps the difference on the page rather than erasing it, which is why it can be reported here as a difference at all.",
            "bn": "তাবারী দুই দিককে সমান রাখেন না। তিনি রায় দেন তাফসীরকারদের পড়াটাই বেশি শক্ত, যে তায়ির মানে নিজের আমল দিয়ে মানুষ যে পরিণতিতে পৌঁছায় তা, আর বলেন কুরআনের অর্থে তাঁদের কথার সীমা ডিঙানো চলে না। তবু তিনি মেনে নেন হিস্যার পড়ারও একটা যুক্তি আছে, আর তা যদি মানে আমল এবং হতভাগ্য বা সৌভাগ্যের হিস্যা, তবে তা তাঁদের থেকে খুব দূরে পড়ে না। তিনি পার্থক্যটা পাতাতেই রেখে দেন, মুছে ফেলেন না, তাই এখানে তা পার্থক্য বলেই তুলে ধরা যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Neck",
          "bn": "গলাই কেন"
        },
        "p": [
          {
            "en": "The deed could have been fastened anywhere; the verse chooses fi 'unuqihi, on his neck. Al-Zajjaj, in al-Qurtubi, says the neck is named to express luzum, the clinging of a thing that will not come off, the way a collar clings to a neck. At-Tabari explains that the neck is where marks and necklaces and yokes are worn, whatever adorns a person or disgraces him, and that Arab speech pins clinging things to the neck the way it pins a body's crimes to the hand, saying by what his hands earned even when it was the tongue that did the harm.",
            "bn": "আমল যেকোনো জায়গায় বাঁধা যেত, কিন্তু আয়াত বেছে নেয় ফী উনুকিহি, তার গলায়। কুরতুবীতে যাজ্জাজ বলেন, গলার কথা বলা হয়েছে লুযুম বোঝাতে, এমন এক জিনিসের লেগে থাকা যা খুলে পড়ে না, যেমন গলায় লেগে থাকে হার। তাবারী বোঝান, গলাই সেই জায়গা যেখানে পরা হয় চিহ্ন, হার আর বেড়ি, যা কিছু মানুষকে সাজায় বা তাকে লজ্জা দেয়। আর আরবি ভাষা লেগে থাকা জিনিসকে গলার সঙ্গে জোড়ে, যেমন সে দেহের অপরাধকে হাতের সঙ্গে জোড়ে, বলে তার হাত যা কামিয়েছে, অথচ ক্ষতিটা করেছিল হয়তো জিভ।"
          },
          {
            "en": "Ibn Kathir gives the plainest reason of all. The neck is singled out, he says, because it is a part of the body that has no double, and once a person is held by it he has no escape. That is the force of the image. A load on the back can be set down and a thing in the hand let go, but what is bound at the throat travels with the person, un-droppable, for as long as he lives and beyond. The deed is not near you; it is on you.",
            "bn": "সবচেয়ে সোজা কারণটা দেন ইবন কাসীর। গলাকেই আলাদা করে বলা হয়েছে, তিনি বলেন, কারণ এ দেহের এমন এক অঙ্গ যার জোড়া নেই, আর একবার একে ধরা হলে মানুষের আর পালানোর পথ থাকে না। ছবিটার জোর এখানেই। পিঠের বোঝা নামানো যায়, হাতের জিনিস ছেড়ে দেওয়া যায়, কিন্তু গলায় বাঁধা জিনিস মানুষের সঙ্গেই চলে, খোলা যায় না, যতদিন সে বাঁচে ততদিন, তারপরও। আমল আপনার কাছে নয়, আমল আপনার গায়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Contagion, No Omen",
          "bn": "নেই সংক্রমণ, নেই কুলক্ষণ"
        },
        "p": [
          {
            "en": "Because the word came from the omen-culture, the sound tradition on it is the report that takes the omen apart. Al-Bukhari records, from Abu Hurayrah, that the Prophet (peace be upon him) said, \"There is no 'adwa (contagion of itself), nor tiyarah (evil omen), nor hamah, nor safar\" (Sahih al-Bukhari 5757, sound by its place in the collection). This report does not name the verse; it is set beside it here because it clears the very ground the word ta'ir grew in. A bird's flight decides nothing.",
            "bn": "শব্দটা যেহেতু কুলক্ষণের সংস্কৃতি থেকে এসেছে, এর ওপর বিশুদ্ধ হাদীসটাই সেই কুলক্ষণকে ভেঙে দেয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, নেই কোনো আদওয়া (নিজে থেকে রোগের সংক্রমণ), নেই তিয়ারা (কুলক্ষণ), নেই হামা, নেই সফর (সহীহ বুখারী ৫৭৫৭, সংকলনে স্থানের কারণে বিশুদ্ধ)। এ বর্ণনা আয়াতের নাম নেয় না, একে এখানে পাশে রাখা হয়েছে কারণ তায়ির শব্দটি যে মাটিতে জন্মেছিল তা-ই এ হাদীস সাফ করে দেয়। পাখির ওড়া কিছুই ঠিক করে না।"
          },
          {
            "en": "There is also a narration that joins the two of them directly. At-Tabari reports, through Qatadah from Jabir, the Prophet (peace be upon him) setting \"no contagion and no evil omen\" against the words of this very verse; Ibn Kathir cites Ahmad's wording, \"the ta'ir of every person is on his neck,\" where the sub-narrator Ibn Lahi'ah glossed ta'ir as tiyarah, and Ibn Kathir calls that gloss gharib jiddan, very strange. The texts fetched give these chains no explicit grade, and Ibn Lahi'ah is a known weak link, so the graded wording above is what carries the point, not this attachment.",
            "bn": "আরেকটি বর্ণনাও আছে যা দুটিকে সরাসরি জোড়ে। তাবারী কাতাদা থেকে জাবির (রাঃ)-এর সূত্রে বর্ণনা করেন, নবী ﷺ নেই কোনো সংক্রমণ, নেই কুলক্ষণ কথাটি এই আয়াতেরই শব্দের পাশে বসিয়েছেন। ইবন কাসীর আহমাদের ভাষ্য তোলেন, প্রত্যেক মানুষের তায়ির তার গলায়, যেখানে উপ-বর্ণনাকারী ইবন লাহীআ তায়িরের অর্থ করেছেন তিয়ারা, আর ইবন কাসীর সেই অর্থকে বলেন গারীব জিদ্দান, বড় অদ্ভুত। আনা তাফসীরগুলো এসব সূত্রের কোনো স্পষ্ট মান দেয় না, আর ইবন লাহীআ পরিচিত দুর্বল যোগসূত্র, তাই উপরের মানসম্পন্ন ভাষ্যই মূল কথাটা বহন করে, এই জোড়াটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Record Spread Open",
          "bn": "খোলা এক আমলনামা"
        },
        "p": [
          {
            "en": "The verse turns from the deed on the neck to the deed on the page: wa-nukhrij lahu yawma l-qiyamati kitaban yalqahu manshuran, and We will bring out for him on the Day of Resurrection a record he will meet spread open. Ibn Kathir reads it as the gathering of all a person's deeds into a single book, handed to him that Day, in the right hand if he is among the blessed or the left if among the wretched. At-Tabari says it more simply still: We bring that very deed out as a book.",
            "bn": "আয়াত গলায় থাকা আমল থেকে ঘুরে যায় পাতায় থাকা আমলের দিকে: ওয়া নুখরিজু লাহু ইয়াওমাল কিয়ামাতি কিতাবান ইয়ালকাহু মানশুরা, আর কিয়ামতের দিন আমি তার জন্য এক কিতাব বের করব যাকে সে পাবে খোলা অবস্থায়। ইবন কাসীর এটি পড়েন, মানুষের সব আমল এক কিতাবে জড়ো করা, সেদিন তার হাতে তুলে দেওয়া, ডান হাতে যদি সে সৌভাগ্যবানদের হয়, বাঁ হাতে যদি হতভাগাদের হয়। তাবারী আরো সাদাভাবে বলেন, সেই আমলটাই আমি কিতাব করে বের করি।"
          },
          {
            "en": "The word manshuran, spread open, does its own work. Al-Qurtubi reads the openness as a hastening, so that the good news for a good deed and the reproach for a bad deed reach a person without delay, nothing kept folded away from him. Ibn Kathir adds that open means legible to him and to others, holding all he did from the first of his life to the last. And Ma'arif al-Qur'an relays from Qatadah the mercy inside the terror of it: on that Day even a person who never learned to read will read his own book.",
            "bn": "মানশুরা শব্দটা, খোলা অবস্থায়, নিজের কাজ করে যায়। কুরতুবী এই খোলা থাকাকে পড়েন এক ত্বরা হিসেবে, যাতে ভালো কাজের সুসংবাদ আর মন্দ কাজের ভর্ৎসনা দেরি ছাড়াই মানুষের কাছে পৌঁছে যায়, তার কাছ থেকে কিছুই গুটিয়ে লুকিয়ে রাখা না হয়। ইবন কাসীর যোগ করেন, খোলা মানে তার কাছে আর অন্যদের কাছেও পড়ার যোগ্য, জীবনের প্রথম থেকে শেষ পর্যন্ত যা করেছে সবই তাতে ধরা। আর মাআরিফুল কুরআন কাতাদা থেকে এর আতঙ্কের ভেতরের দয়াটুকু জানায়, সেদিন যে কখনো পড়তে শেখেনি সেও নিজের কিতাব পড়ে ফেলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Written While You Live",
          "bn": "বেঁচে থাকতেই লেখা"
        },
        "p": [
          {
            "en": "The commentators trace the book across a lifetime. Al-Baghawi relays reports that when a servant's term ends the angel is ordered to fold the sheet, and it is not spread again until the Day of Resurrection. Abu Sawwar al-'Adawi, quoted by al-Qurtubi, drew the whole shape in a breath: they are two unrollings and a folding. While you live, son of Adam, your sheet lies open, so write in it what you will; when you die it is rolled up; and when you are raised it is unrolled again.",
            "bn": "তাফসীরকারেরা কিতাবটাকে গোটা জীবন জুড়ে অনুসরণ করেন। বাগাভী বর্ণনা আনেন, বান্দার সময় ফুরালে ফেরেশতাকে আদেশ দেওয়া হয় পাতা গুটিয়ে ফেলতে, আর তা আর খোলা হয় না কিয়ামত পর্যন্ত। কুরতুবীর উদ্ধৃত আবু সাওয়ার আল-আদাবী গোটা রূপটা এক নিঃশ্বাসে আঁকেন, এ হলো দুই বার খোলা আর এক বার গোটানো। হে আদম-সন্তান, তুমি যতদিন বাঁচো তোমার পাতা খোলা পড়ে থাকে, তাতে যা ইচ্ছা লেখো। মরলে তা গুটিয়ে ফেলা হয়, আর তোমাকে ওঠানো হলে তা আবার খোলা হয়।"
          },
          {
            "en": "Al-Hasan al-Basri, whom Ibn Kathir preserves at length, said it to the human being directly: your sheet is laid out for you, and two noble angels are set on you, one on the right recording good, one on the left recording bad; so do what you will, little or much, until you die; then your book is folded and tied to your neck with you in the grave; then you come out on the Day of Resurrection and find it spread open. What is done now is what will be read then, and it is being written now.",
            "bn": "হাসান বসরী, যাঁর কথা ইবন কাসীর বিস্তারিত ধরে রাখেন, তা মানুষকে সোজাসুজি বলেন: তোমার পাতা তোমার সামনে বিছানো, আর তোমার ওপর বসানো দুই সম্মানিত ফেরেশতা, একজন ডানে ভালো লেখেন, একজন বাঁয়ে মন্দ লেখেন। তাই যা ইচ্ছা করো, অল্প কি বেশি, যতক্ষণ না মরো। তারপর তোমার কিতাব গুটিয়ে কবরে তোমার গলায় তোমার সঙ্গে বাঁধা হয়। তারপর কিয়ামতের দিন তুমি বেরিয়ে এসে তা খোলা পাও। এখন যা করা হয় সেটাই তখন পড়া হবে, আর তা এখনই লেখা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying It Today",
          "bn": "আজকের বহন"
        },
        "p": [
          {
            "en": "Put the readings together and the verse cuts the same way for every person. The thing that decides you is not an omen crossing your path, nor a burden handed to you from outside, nor anything a neighbour did; it grows from your own doing and clings like a collar you cannot slip. This is said of the whole of humankind, not of any group to be pointed at. No sign in the sky bends a life. What a person ties to his own neck does, and each of us is tying something there in ordinary hours.",
            "bn": "পড়াগুলো একসঙ্গে রাখুন, দেখবেন আয়াত প্রত্যেক মানুষের বেলায় একইভাবে কাটে। আপনাকে যা ঠিক করে তা আপনার পথ কেটে যাওয়া কোনো লক্ষণ নয়, বাইরে থেকে চাপানো কোনো বোঝা নয়, প্রতিবেশীর কোনো কাজও নয়। তা গজায় আপনার নিজের কাজ থেকে, আর গলার হারের মতো লেগে থাকে যা খুলে ফেলা যায় না। এ কথা গোটা মানবজাতির কথা, আঙুল তোলার মতো কোনো দলের কথা নয়। আকাশের কোনো লক্ষণ জীবন বাঁকায় না। মানুষ নিজের গলায় যা বাঁধে সেটাই বাঁকায়, আর সাদামাটা সময়েই আমরা প্রত্যেকে সেখানে কিছু-না-কিছু বাঁধছি।"
          },
          {
            "en": "The sheet is still open, and it is being filled in these plain hours, not on some far Day. The folding and the reading come later. In the very next verse, 17:14, the book is placed in the hand with the words Read your record, you suffice today as your own reckoner, and that summons is its own beat, best met when it arrives. For now the verse asks only the earlier thing: to know the record is being made today, tied close and un-droppable, and to weigh with care what goes onto it.",
            "bn": "পাতা এখনো খোলা, আর তা ভরা হচ্ছে এই সাদামাটা সময়েই, দূরের কোনো দিনে নয়। গুটিয়ে ফেলা আর পড়া আসে পরে। ঠিক পরের আয়াতে, ১৭:১৪, কিতাব হাতে তুলে দিয়ে বলা হয়, পড়ো তোমার আমলনামা, আজ নিজের হিসাব নিতে তুমিই যথেষ্ট। সেই ডাকের নিজের একটা পালা আছে, যখন আসে তখনই তার মুখোমুখি হওয়া ভালো। আপাতত আয়াত শুধু আগের কথাটা চায়, জেনে রাখা যে আমলনামা আজই লেখা হচ্ছে, কাছে বাঁধা আর খুলে ফেলার অসাধ্য, আর তাতে কী যাচ্ছে তা যত্ন করে মেপে নেওয়া।"
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
  "17:33": {
    "sections": [
      {
        "h": {
          "en": "The Life Set Apart",
          "bn": "যে প্রাণ পবিত্র করা হয়েছে"
        },
        "p": [
          {
            "en": "This command does not stand alone. It falls inside a run of instructions that the sura calls wisdom your Lord has revealed (17:39), and it comes straight after two other prohibitions: do not kill your children for fear of poverty (17:31), and do not approach unlawful intercourse (17:32). Read together, these verses fence a human life on every side. Here the fence is plainest of all: do not kill the soul that Allah has made inviolable, except by right. The soul comes first; the exceptions come after, and narrowly.",
            "bn": "এই আদেশ একা দাঁড়িয়ে নেই। এটি একগুচ্ছ নির্দেশের ভেতরে রয়েছে, যেগুলোকে সূরাটি বলে আপনার রবের নাযিল করা হিকমাত (১৭:৩৯)। আর এর ঠিক আগে আছে আরও দুটি নিষেধ: দারিদ্র্যের ভয়ে সন্তানদের হত্যা কোরো না (১৭:৩১), আর যিনার কাছেও যেয়ো না (১৭:৩২)। একসঙ্গে পড়লে এই আয়াতগুলো মানুষের প্রাণকে চারদিক থেকে ঘিরে রাখে। এখানে বেড়াটা সবচেয়ে স্পষ্ট: আল্লাহ যে প্রাণকে পবিত্র করেছেন তা যথাযথ কারণ ছাড়া হত্যা কোরো না। প্রাণের কথা আগে, ছাড়পত্রের কথা পরে এবং তা সংকীর্ণভাবে।"
          },
          {
            "en": "Whose life? As-Sa'di reads the soul Allah forbade as sweeping in its reach: it takes in the young and the old, male and female, the free and the slave, the Muslim and the non-Muslim who lives under a covenant of protection. None of these may be killed but by right. Ad-Dahhak notes that this was the first passage of the Qur'an revealed about killing, and that it came down in Mecca, before any command to fight. The law of blood, in other words, was set before the community held any power to enforce it.",
            "bn": "কার প্রাণ? সা'দী বলেন, আল্লাহ যে প্রাণ হারাম করেছেন তার পরিধি অনেক বিস্তৃত। এতে আসে ছোট ও বড়, পুরুষ ও নারী, স্বাধীন ও দাস, মুসলিম, আর নিরাপত্তার চুক্তির অধীনে থাকা অমুসলিমও। যথাযথ কারণ ছাড়া এদের কাউকেই হত্যা করা যায় না। দাহহাক জানান, হত্যার ব্যাপারে কুরআনে সবার আগে নাযিল হওয়া অংশ এটিই, আর তা নেমেছিল মক্কায়, যুদ্ধের কোনো আদেশ আসার আগেই। অর্থাৎ রক্তের বিধান স্থির হয়ে গিয়েছিল সমাজের হাতে তা কার্যকর করার শক্তি আসার আগেই।"
          },
          {
            "en": "Ma'arif al-Qur'an observes that virtually every people, faith, and sect has treated the unjust taking of life as a grave crime; the Qur'an does not invent the horror of murder but names it and ranks it. And the placement matters. A verse that has just forbidden killing your own children out of fear of want now widens the circle to every protected soul. The command is not narrow self-interest; it is the sanctity of a human life as such.",
            "bn": "মাআরিফুল কুরআন বলছে, দুনিয়ার প্রায় প্রতিটি জাতি, ধর্ম আর সম্প্রদায় অন্যায়ভাবে প্রাণ কেড়ে নেওয়াকে গুরুতর অপরাধ গণ্য করেছে। কুরআন খুনের ভয়াবহতা নতুন করে বানায় না, বরং তাকে নাম দেয় ও ওজন বুঝিয়ে দেয়। আর কোথায় কথাটা বসেছে সেটাও গুরুত্বপূর্ণ। যে আয়াত এইমাত্র অভাবের ভয়ে নিজের সন্তান হত্যা নিষেধ করল, তা এবার গণ্ডি বাড়িয়ে প্রতিটি সুরক্ষিত প্রাণকে ভেতরে টেনে নেয়। এই আদেশ কোনো সংকীর্ণ স্বার্থের হিসাব নয়, এ হলো মানুষের প্রাণের পবিত্রতা, ঘোষিত এক ঐশী নিষেধের ভার নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Except by Right",
          "bn": "কেবল যথাযথ কারণে"
        },
        "p": [
          {
            "en": "The exception is a single phrase: illa bi'l-haqq, except by right. At-Tabari spells out what that right is. A life may be taken, he says, only for disbelief after Islam, for unlawful intercourse after marriage, or as retaliation for a life already taken; a disbeliever forfeits protection only when no covenant of safety stands over him. Notice the shape of it. The clause does not loosen the prohibition. It lists the narrow, named grounds on which it does not apply, and closes the door on every other.",
            "bn": "ছাড়টা একটিমাত্র বাক্যাংশে: ইল্লা বিল-হাক্ক, অর্থাৎ যথাযথ কারণে। তাবারী খুলে বলেন সেই কারণ কী। তাঁর মতে প্রাণ নেওয়া যায় কেবল ইসলামের পর কুফরির জন্য, বিবাহের পর যিনার জন্য, কিংবা আগে নেওয়া কোনো প্রাণের বদলা হিসেবে। আর অমুসলিমও নিরাপত্তা হারায় তখনই, যখন তার উপর কোনো চুক্তি বা নিরাপত্তার অঙ্গীকার থাকে না। বাক্যটির গড়ন খেয়াল করুন। এটি নিষেধকে ঢিলে করে না। বরং যেসব সংকীর্ণ ও নির্দিষ্ট কারণে নিষেধ খাটে না সেগুলোই গুনে দেয়, আর বাকি সবকিছুর দরজা বন্ধ করে দেয়।"
          },
          {
            "en": "Al-Muyassar gathers the same grounds under one word, shar'i, lawful: retaliation, the stoning of the married adulterer, and the killing of the apostate. As-Sa'di keeps that list and adds the armed aggressor in the act of his aggression, when nothing short of killing will stop him. None of these is a private matter. Each is a judgement of the law, carried out by lawful authority, not a warrant any individual holds over another.",
            "bn": "মুয়াসসার এই একই কারণগুলোকে একটি শব্দের নিচে জড়ো করেন, শরঈ বা বিধিসম্মত: কিসাস, বিবাহিত ব্যভিচারীর রজম, আর দ্বীন ত্যাগকারীকে হত্যা। সা'দী সেই তালিকা রেখে যোগ করেন সশস্ত্র বিদ্রোহীকে, তার বিদ্রোহের অবস্থায়, যখন হত্যা ছাড়া অন্য কিছুতে তাকে থামানো যায় না। এদের প্রতিটির মধ্যে মিল একটাই: কোনোটিই ব্যক্তিগত ব্যাপার নয়। প্রতিটিই আইনের রায়, লাগসই কর্তৃপক্ষের হাতে ওজন করে কার্যকর করা, কোনো ব্যক্তির হাতে অন্যের উপর দেওয়া ছাড়পত্র নয়।"
          },
          {
            "en": "Al-Qurtubi passes quickly over the phrase here, noting that he treated it fully in Sura al-An'am (6:151), where the same prohibition appears. That brevity is itself instructive: the exceptions are settled, few, and defined, so there is little left to argue. The weight of the verse sits on the rule, not the exception. Inviolability is the standing state of every soul named above; except by right opens only a small and guarded door, and it is the courts, not the aggrieved party, who decide whether a given case has passed through it.",
            "bn": "কুরতুবী এখানে বাক্যাংশটির উপর দিয়ে দ্রুত পার হন, বলেন যে সূরা আনআমে (৬:১৫১) তিনি এটি পুরোপুরি আলোচনা করেছেন, যেখানে একই নিষেধ এসেছে। এই সংক্ষিপ্ততাই একটা কথা শেখায়: ছাড়গুলো নির্ধারিত, অল্প আর সুনির্দিষ্ট, তাই তর্কের জায়গা সামান্য। আয়াতের ভার বসে আছে নিয়মের উপর, ছাড়ের উপর নয়। উপরে বলা প্রতিটি প্রাণের স্বাভাবিক অবস্থা হলো তার পবিত্রতা। ইল্লা বিল-হাক্ক কেবল একটা ছোট, পাহারা-দেওয়া দরজা খোলে, আর কোনো মামলা সেই দরজা পেরিয়েছে কিনা তা ঠিক করে আদালত, ভুক্তভোগী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Authority Given the Heir",
          "bn": "উত্তরাধিকারীর হাতে অধিকার"
        },
        "p": [
          {
            "en": "And whoever is killed unjustly, We have given his heir authority. The heir, as-Sa'di explains, is the nearest of the slain man's male kin; where none exists, al-Muyassar and Ma'arif al-Qur'an say it passes to the ruler, who stands as guardian of every Muslim. Authority for what? The commentators agree: the heir may have the killer put to death in retaliation, or accept blood-money and spare him, or pardon him outright with nothing taken. Three roads open, and the choice sits in the heir's hand.",
            "bn": "আর কাউকে অন্যায়ভাবে হত্যা করা হলে আমি তার উত্তরাধিকারীকে অধিকার দিয়েছি। সা'দী বলেন, এই উত্তরাধিকারী হলেন নিহত ব্যক্তির নিকটতম পুরুষ স্বজন ও ওয়ারিসগণ। এমন কেউ না থাকলে, মুয়াসসার ও মাআরিফুল কুরআন বলছে, অধিকারটা চলে যায় শাসকের হাতে, যিনি প্রতিটি মুসলিমের অভিভাবক হিসেবে দাঁড়ান। কীসের অধিকার? মূল বিষয়ে তাফসীরকারেরা একমত: উত্তরাধিকারী চাইলে খুনিকে কিসাসে হত্যা করাতে পারেন, চাইলে রক্তমূল্য নিয়ে তাকে রেহাই দিতে পারেন, আবার চাইলে কিছু না নিয়েই ক্ষমা করে দিতে পারেন। তিনটি পথ খোলা, আর বেছে নেওয়ার ভার উত্তরাধিকারীর হাতে।"
          },
          {
            "en": "On the word sultan the commentators divide, and the difference is worth keeping. Ibn Abbas reads it as a clear proof, a warrant from Allah the heir presents when he claims his due; Malik, as al-Qurtubi reports, reads it as the command of Allah. Beyond that they split on what the command grants. Ibn Abbas, ad-Dahhak, and ash-Shafi'i take it as the whole choice among killing, blood-money, and pardon; Qatada, and Malik and Abu Hanifa in another report, take it narrowly, as the right of retaliation itself. The verse is read both ways.",
            "bn": "সুলতান শব্দটির অর্থ নিয়ে তাফসীরকারেরা ভাগ হয়ে যান, আর এই মতভেদটা ধরে রাখার মতো। ইবন আব্বাস এটিকে বোঝেন সুস্পষ্ট দলিল হিসেবে, আল্লাহর দেওয়া এক প্রমাণ, যা উত্তরাধিকারী নিজের হক দাবি করার সময় পেশ করেন। কুরতুবীর বর্ণনায় মালিক এটিকে বোঝেন আল্লাহর আদেশ হিসেবে। এর পরেও তাঁরা ভাগ হন এই আদেশ কী দেয় তা নিয়ে। ইবন আব্বাস, দাহহাক আর শাফিঈ এটিকে ধরেন হত্যা, রক্তমূল্য ও ক্ষমার গোটা এখতিয়ার বলে। কাতাদা, আর অন্য এক বর্ণনায় মালিক ও আবু হানিফা, এটিকে ধরেন আরও সংকীর্ণভাবে, শুধু কিসাসের অধিকার হিসেবে। আয়াতটি দুভাবেই পড়া হয়েছে।"
          },
          {
            "en": "As-Sa'di adds the conditions under which that authority even arises: the killing must have been deliberate, wrongful, and between parties of comparable standing. And the right belongs to the heir, not to the state acting over his head. No retaliation is carried out except by his leave; if he pardons, it falls away entirely. The verse does not merely permit justice for the slain. It entrusts the decision to the person the loss fell upon, and then, as the next clause shows, it binds him.",
            "bn": "সা'দী যোগ করেন কোন কোন শর্তে এই অধিকার আদৌ জন্মায়: হত্যাটি হতে হবে ইচ্ছাকৃত, অন্যায় এবং দুই পক্ষের মর্যাদা সমান, তবেই কিসাস পাওনা হয়। আর এই অধিকার উত্তরাধিকারীর, তাঁর মাথার উপর দিয়ে রাষ্ট্রের নয়। তাঁর অনুমতি ছাড়া কোনো কিসাস কার্যকর হয় না, আর তিনি ক্ষমা করলে কিসাস পুরোপুরি বাতিল হয়ে যায়। আয়াত শুধু নিহতের জন্য বিচারের অনুমতি দেয় না। বরং যার উপর ক্ষতিটা পড়েছে তার হাতেই সিদ্ধান্ত তুলে দেয়। তারপর পরের বাক্য যেমন দেখাবে, তাকে বেঁধেও দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sahih Records",
          "bn": "সহীহ যা লিপিবদ্ধ করেছে"
        },
        "p": [
          {
            "en": "The clearest commentary on except by right is a hadith the mufassirun cite here in one voice. Al-Bukhari records, from Abdullah ibn Mas'ud, that the Messenger of Allah said: The blood of a Muslim who bears witness that none has the right to be worshipped but Allah and that I am the Messenger of Allah is not lawful except in one of three cases: a life for a life, a married person who commits adultery, and one who abandons his religion and forsakes the community. It is a sound report, recorded by al-Bukhari in his Sahih.",
            "bn": "যথাযথ কারণ কথাটার সবচেয়ে স্পষ্ট ব্যাখ্যা এখানে তাফসীরকারেরা এক সুরে যে হাদীসটি আনেন, সেটিই। বুখারী আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করেন যে রাসূলুল্লাহ ﷺ বলেছেন: যে মুসলিম সাক্ষ্য দেয় আল্লাহ ছাড়া কোনো ইলাহ নেই আর আমি আল্লাহর রাসূল, তার রক্ত হালাল নয়, কেবল তিনটি অবস্থার একটিতে ছাড়া: প্রাণের বদলে প্রাণ, বিবাহিত অবস্থায় ব্যভিচারকারী, আর যে নিজের দ্বীন ত্যাগ করে জামাআত থেকে বেরিয়ে যায়। এটি সহীহ বর্ণনা, বুখারী তাঁর সহীহ গ্রন্থে লিপিবদ্ধ করেছেন।"
          },
          {
            "en": "Read the three against the verse and they line up exactly. A life for a life is retaliation for murder, the ground the whole verse turns on. The other two, the married adulterer and the person who leaves the faith and the community, are matters for the court, not the street. The hadith is why except by right cannot be stretched: the Prophet named the cases, and they are closed. Outside them the prohibition returns, and the believer's blood stays, as the report puts it, unlawful to shed.",
            "bn": "তিনটিকে আয়াতের সঙ্গে মিলিয়ে দেখুন, ঠিক মিলে যায়। প্রাণের বদলে প্রাণ হলো খুনের কিসাস, গোটা আয়াত যার উপর ঘোরে। বাকি দুটি, বিবাহিত ব্যভিচারী আর দ্বীন ও জামাআত ত্যাগকারী, আদালতের মীমাংসার বিষয়, রাস্তার নয়। এই হাদীসই কারণ যে যথাযথ কারণ কথাটাকে টেনে বড় করা যায় না। নবী ﷺ অবস্থাগুলোর নাম বলে দিয়েছেন, আর সেগুলো বন্ধ। এই অবস্থাগুলোর বাইরের সবকিছু আবার নিষেধের নিচে ফিরে আসে, আর মুমিনের রক্ত, বর্ণনার ভাষায়, হারামই থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Measured, One for One",
          "bn": "মেপে, একের বদলে এক"
        },
        "p": [
          {
            "en": "Then the guard: but let him not exceed limits in taking life. The commentators give three faces to this excess, and at-Tabari, al-Qurtubi, and al-Baghawi record all of them. First, that the heir must not kill anyone but the killer himself. Second, that he must not kill two, or several, in return for one. Third, that he must not mutilate the killer's body. Mujahid, Sa'id ibn Jubayr, Qatada, and others are named behind these readings, and the commentators note that all three are meant, since each is a kind of excess the verse forbids.",
            "bn": "এরপর পাহারাটা: তবে সে যেন হত্যার ব্যাপারে সীমা না ছাড়ায়। এই সীমালঙ্ঘনের তিনটি চেহারা তাফসীরকারেরা দেন, আর তাবারী, কুরতুবী ও বাগভী সবগুলোই তুলে ধরেন। প্রথমত, উত্তরাধিকারী যেন খুনি ছাড়া অন্য কাউকে না মারেন। দ্বিতীয়ত, একজনের বদলে দুজন বা কয়েকজনকে যেন না মারেন। তৃতীয়ত, খুনির দেহ যেন বিকৃত না করেন। মুজাহিদ, সাঈদ ইবন জুবায়র, কাতাদা প্রমুখের নাম এই পাঠগুলোর পেছনে আসে, আর তাফসীরকারেরা বলেন তিনটিই উদ্দেশ্য, কারণ প্রতিটিই আয়াতের নিষিদ্ধ করা এক ধরনের বাড়াবাড়ি।"
          },
          {
            "en": "The excess had a concrete history. Ma'arif al-Qur'an describes the custom of the age before Islam: when a man was killed, his people would not rest with the killer's life alone. If the slain was someone of rank, they would take two lives for one, or three, or more, and some, carried away by rage, would cut off the nose and ears of the dead. Against all of this the verse sets a single measure. Retaliation is like for like, one life for the one taken, and the body is left whole.",
            "bn": "এই বাড়াবাড়ির একটা বাস্তব ইতিহাস ছিল। মাআরিফুল কুরআন ইসলাম-পূর্ব যুগের রীতি বর্ণনা করে: কেউ খুন হলে তার লোকজন কেবল খুনির প্রাণেই সন্তুষ্ট হতো না। নিহত যদি মর্যাদাবান কেউ হতো, তারা একজনের বদলে দুজন, তিনজন বা আরও প্রাণ নিত, আর কেউ কেউ রাগে অন্ধ হয়ে মৃতের নাক-কান কেটে ফেলত। এই সবকিছুর বিপরীতে আয়াত একটি মাপ বসিয়ে দেয়। কিসাস হলো সমানে সমান, একটি প্রাণের বদলে একটি প্রাণ, আর দেহ অক্ষত রেখে দেওয়া হয়।"
          },
          {
            "en": "Ma'arif draws the principle out. Injustice is answered not with injustice but with justice, even while the wrongdoer is being punished. So long as the heir keeps to lawful retaliation, the Shari'a stands behind him. But if revenge blinds him and he crosses the line, the roles reverse: the wronged party becomes a wrongdoer, and the killer, now wronged in turn, gains the law's protection. Allah's help withdraws from whoever exceeds and shields the other side instead.",
            "bn": "মাআরিফুল কুরআন নীতিটা টেনে বের করে। অন্যায়ের জবাব অন্যায় দিয়ে নয়, বিচার দিয়ে দিতে হয়, অপরাধীকে শাস্তি দেওয়ার সময়েও। উত্তরাধিকারী যতক্ষণ বৈধ কিসাসের ভেতরে থাকেন, শরীয়তের বিধান ততক্ষণ তাঁর পক্ষে দাঁড়ায়। কিন্তু প্রতিশোধে অন্ধ হয়ে তিনি সীমা পেরোলে ভূমিকা উল্টে যায়: যে মজলুম ছিল সে জালিম হয়ে যায়, আর খুনি, এবার নিজেই মজলুম, পেয়ে যায় আইনের আশ্রয়। যে সীমা ছাড়ায় আল্লাহর সাহায্য তার কাছ থেকে সরে গিয়ে অন্যজনকে আগলে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Told Not To",
          "bn": "নিষেধটা কার প্রতি"
        },
        "p": [
          {
            "en": "A second thing hides in how the words are recited. Most readers say fa-la yusrif, in the third person, so the one warned not to exceed is the heir. But Hamza and al-Kisa'i, al-Baghawi reports, read fa-la tusrif, in direct address. At-Tabari and al-Qurtubi explain that this falls on the Prophet and the leaders after him, the holders of lawful authority. And in one report from Mujahid, the address turns instead to the original killer, warned not to shed blood unlawfully at all.",
            "bn": "খেয়াল করার মতো দ্বিতীয় একটা জিনিস লুকিয়ে আছে শব্দগুলো কীভাবে তিলাওয়াত হয় তার ভেতরে। বেশির ভাগ পাঠক পড়েন ফালা ইউসরিফ, নাম-পুরুষে, ফলে সীমা না ছাড়ানোর সতর্কবাণী যায় উত্তরাধিকারীর দিকে। কিন্তু বাগভী জানান, হামযা ও কিসাঈ পড়েন ফালা তুসরিফ, সরাসরি সম্বোধনে। তাবারী ও কুরতুবী ব্যাখ্যা করেন যে এই সম্বোধন পড়ে নবী ﷺ আর তাঁর পরের সমাজ-নেতাদের উপর, অর্থাৎ বৈধ কর্তৃপক্ষের উপর। আর মুজাহিদ থেকে একটি বর্ণনায় সম্বোধন বরং আসল খুনির দিকে ফেরে, তাকে গোড়াতেই সতর্ক করা হয় যেন সে অন্যায়ভাবে রক্তপাত না করে।"
          },
          {
            "en": "At-Tabari brings the readings together. When Allah directs a command to His Prophet in a matter of religion, he says, it is a ruling upon all His servants; and when He forbids one of them, He forbids them all. So it makes little difference whether the verse restrains the heir, the ruler, or the killer from excess. Each reading forbids the same thing to everyone with a hand in the taking of life. The ban on going too far is not aimed at one party alone; it fences the whole chain of vengeance.",
            "bn": "তাবারী পাঠ দুটিকে এক জায়গায় আনেন। তিনি বলেন, আল্লাহ যখন দ্বীনের কোনো বিষয়ে তাঁর নবীকে আদেশ দেন, তা তাঁর সব বান্দার উপরই বিধান। আর তিনি যখন তাদের একজনকে নিষেধ করেন, তখন সবাইকেই নিষেধ করেন। তাই আয়াত উত্তরাধিকারী, শাসক না খুনি, কাকে বাড়াবাড়ি থেকে ঠেকায় তাতে খুব একটা তফাত হয় না। প্রতিটি পাঠই একই জিনিস নিষেধ করে তাদের সবার প্রতি, প্রাণ নেওয়ার সঙ্গে যাদের হাত জড়িত। সীমা ছাড়ানোর নিষেধ কেবল কোনো এক পক্ষের জন্য নয়, তা গোটা প্রতিশোধের শেকলটাকেই বেঁধে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Supported by the Law",
          "bn": "বিধানের সাহায্যপ্রাপ্ত"
        },
        "p": [
          {
            "en": "The verse ends: indeed, he has been supported. Supported who? The commentators divide again. At-Tabari holds that he is the heir, backed against the killer, and prefers this because the heir is the wronged party nearest to the words. But al-Baghawi carries a reading from Mujahid that he is the slain man himself, supported in this world by the retaliation owed on his behalf and in the next by the expiation of his sins. Ibn Kathir sums it plainly: the heir is helped against the killer by the Shari'a, and usually by divine decree as well.",
            "bn": "আয়াত শেষ হয়: নিশ্চয়ই তাকে সাহায্য করা হয়েছে। কাকে সাহায্য? তাফসীরকারেরা আবার ভাগ হন। তাবারী মনে করেন এই 'সে' হলো উত্তরাধিকারী, খুনির বিরুদ্ধে যাকে সাহায্য করা হয়, আর এটিকেই তিনি অগ্রাধিকার দেন, কারণ শব্দের সবচেয়ে কাছে থাকা মজলুম পক্ষ এই উত্তরাধিকারীই। কিন্তু বাগভী মুজাহিদ থেকে একটি পাঠ আনেন যে এই 'সে' হলো নিহত ব্যক্তি নিজেই, দুনিয়ায় যাকে সাহায্য করা হয় তার পক্ষে পাওনা কিসাস দিয়ে, আর আখিরাতে তার গুনাহ মুছে দিয়ে। ইবন কাসীর সাফ বলেন: শরীয়ত দিয়ে, আর সাধারণত তাকদির দিয়েও, উত্তরাধিকারীকে খুনির বিরুদ্ধে সাহায্য করা হয়।"
          },
          {
            "en": "Al-Qurtubi raises the obvious objection: how many an heir is failed and never reaches his right? His answer is careful. The help comes sometimes through the truth being made plain, sometimes through the right being carried out, sometimes through both; whichever it is, it is help from Allah. Supported, then, is no guarantee that vengeance always succeeds in the world. It is the assurance that the law and the truth stand with the wronged, whatever a particular case turns out to be.",
            "bn": "কুরতুবী স্পষ্ট আপত্তিটা তোলেন: কত উত্তরাধিকারীই তো ব্যর্থ হয়, নিজের হক পর্যন্ত পৌঁছায় না। তাঁর জবাবটা সতর্ক। সাহায্য কখনো আসে সত্য স্পষ্ট হয়ে ওঠার মধ্য দিয়ে, কখনো হক কার্যকর হওয়ার মধ্য দিয়ে, কখনো দুইয়ের মধ্য দিয়ে। যেভাবেই হোক, তা আল্লাহর কাছ থেকে সাহায্য। তাই সাহায্যপ্রাপ্ত কথাটা এই নিশ্চয়তা নয় যে প্রতিশোধ দুনিয়ায় সবসময় সফল হবে। এ হলো এই আশ্বাস যে আইন আর সত্য মজলুমের পাশে দাঁড়িয়ে আছে, কোনো নির্দিষ্ট মামলার পরিণতি শেষ পর্যন্ত যা-ই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "Justice, Not Private Vengeance",
          "bn": "বিচার, ব্যক্তিগত প্রতিশোধ নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly. This verse describes justice that Allah ordained and that lawful authority administers: the courts that weigh a case, the ruler who guards the community, the heir who acts under the law and within its limits. It licenses nothing against any living person or community, and it is no warrant for private vengeance. The verse that hands the heir authority is the same verse that forbids him to exceed, and reverses the roles the moment he does. Justice here is measured, answerable, and never his to seize alone.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, আগের অংশ আর পরের অংশ দুটোই মাথায় রেখে। এই আয়াত সেই বিচারের কথা বলে যা আল্লাহ নির্ধারণ করেছেন আর বৈধ কর্তৃপক্ষ কার্যকর করে: যে আদালত মামলা ওজন করে, যে শাসক সমাজকে আগলায়, যে উত্তরাধিকারী আইনের অধীনে ও তার সীমার ভেতরে কাজ করেন। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না, আর ব্যক্তিগত প্রতিশোধের কোনো সনদ নয়। যে আয়াত উত্তরাধিকারীকে অধিকার দেয়, সেই একই আয়াত তাকে সীমা ছাড়াতে নিষেধ করে, আর সে সীমা ছাড়ালেই ভূমিকা উল্টে দেয়। এখানে বিচার মাপা, জবাবদিহিমূলক, আর কখনোই একা তার হাতে ছিনিয়ে নেওয়ার মতো নয়।"
          },
          {
            "en": "Most of us will never stand as a slain man's heir. What the verse trains is a disposition we carry into far smaller things. It asks us to hold every life inviolable, in our speech, our driving, our anger, and not to spend what is not ours to spend. It asks us, when genuinely wronged, to want justice and not an ounce more, and never to let grief reach past the guilty toward someone easier to strike. The right to redress is real; so is the duty to keep it measured.",
            "bn": "আমাদের বেশির ভাগই কখনো কোনো নিহত ব্যক্তির উত্তরাধিকারী হয়ে দাঁড়াব না। আয়াত যা গড়ে তোলে তা এক মেজাজ, যা আমরা অনেক ছোট ছোট ব্যাপারে সঙ্গে নিয়ে চলি। এটি বলে প্রতিটি প্রাণকে পবিত্র গণ্য করতে, কথায়, গাড়ি চালানোয়, রাগে, আর যা খরচ করার মালিক আমরা নই তা খরচ না করতে। এটি বলে, সত্যিই অন্যায়ের শিকার হলে বিচার চাইতে, তার চেয়ে এক রতিও বেশি নয়, আর শোককে কখনো দোষীকে ছাড়িয়ে সহজ কোনো লক্ষ্যের দিকে হাত বাড়াতে না দিতে। প্রতিকারের অধিকার সত্যি, তা মেপে রাখার দায়িত্বও সত্যি। এই ভারসাম্যটাই আয়াত।"
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
  "17:47": {
    "sections": [
      {
        "h": {
          "en": "He Knows the Listening",
          "bn": "তিনি শোনাটাই জানেন"
        },
        "p": [
          {
            "en": "Nahnu a'lamu bima yastami'una bihi: We are most knowing of how they listen to it. The verse does not say Allah hears their words; it says He knows their listening — the ear and the aim behind it. Al-Baghawi and al-Qurtubi both pause on the small particle bihi, the bi in listen to it. Al-Baghawi reads it as they seek to hear it; al-Qurtubi notes the view that the bi is extra, so the sense is simply they listen to it. Either way, the listening itself is what is weighed.",
            "bn": "নাহনু আ‘লামু বিমা ইয়াসতামি‘উনা বিহি: তারা কীভাবে কান পাতে, তা আমিই ভাল জানি। আয়াত বলছে না যে আল্লাহ তাদের কথা শোনেন; বলছে, তিনি তাদের শোনাটাকেই জানেন, কান আর তার পেছনের উদ্দেশ্যটাকে। বাগভী ও কুরতুবী দুজনেই ছোট্ট ‘বিহি’ শব্দটায় থামেন, অর্থাৎ ‘তা শোনা’র ভেতরের ‘বি’। বাগভী পড়েন, তারা তা শুনতে চায়; কুরতুবী সেই মতটি তুলে ধরেন যে এখানে ‘বি’ অতিরিক্ত, তাই অর্থ দাঁড়ায় নিছক তারা তা শোনে। যেভাবেই হোক, শোনাটাই এখানে ওজন করা হচ্ছে।"
          },
          {
            "en": "This comes right after two verses about a veil. In 17:45 and 17:46 Allah describes a concealed partition set between the Prophet and those who deny the Hereafter, coverings laid over their hearts so they cannot grasp the Qur'an, and a heaviness in their ears. Now the reason surfaces. It was never that the sound failed to reach them; they heard the words plainly enough. What Allah knows, and what they will not admit, is why they bent their ears toward the recitation in the first place.",
            "bn": "এ আয়াত আসে একটি পর্দার কথা বলা দুটি আয়াতের ঠিক পরেই। ১৭:৪৫ ও ১৭:৪৬ আয়াতে আল্লাহ বলেন, নবী ও যারা আখিরাত অস্বীকার করে তাদের মাঝে এক অদৃশ্য পর্দা রাখা হয়েছে, তাদের অন্তরে আবরণ যাতে তারা কুরআন বুঝতে না পারে, আর কানে বধিরতা। এবার কারণটা সামনে আসে। শব্দ যে তাদের কানে পৌঁছায়নি, তা নয়; তারা স্পষ্টই শুনত। আল্লাহ যা জানেন আর তারা যা মানতে চায় না, তা হলো কেন তারা প্রথমেই তিলাওয়াতের দিকে কান বাড়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ear Already Decided",
          "bn": "কান আগেই ঠিক করা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as the answer to a question the earlier verses raised: why did all that listening never benefit them? Because, he says, Allah knew their aims were corrupt. They did not come to be guided or to accept the truth; they came hoping to trip over the smallest thing they could seize on to attack it. A person in that state, as-Sa'di concludes, gains nothing at all from listening — and this, he notes, is precisely why the earlier barrier was placed between them and the words. The recitation entered ears that had already refused it.",
            "bn": "সাদী আয়াতটিকে দেখেন আগের আয়াতগুলোর তোলা এক প্রশ্নের জবাব হিসেবে: এত শোনা তবু তাদের কাজে এলো না কেন? কারণ, তিনি বলেন, আল্লাহ জানতেন তাদের নিয়ত পচা। তারা এসেছিল হেদায়েত পেতে বা সত্য মানতে নয়; এসেছিল এই আশায় যে সামান্যতম কিছু হোঁচট খেয়ে পেলে তা আঁকড়ে আক্রমণ করবে। এমন অবস্থার মানুষ শুনে কিছুই পায় না, সাদী এ কথাই টানেন, আর ঠিক এ কারণেই আগের আয়াতে তাদের ও কথার মাঝে সেই পর্দা রাখা হয়েছিল। তিলাওয়াত ঢুকেছিল এমন কানে, যা আগেই তা ফিরিয়ে দিয়েছিল।"
          },
          {
            "en": "Al-Muyassar puts the same point plainly: We know best what the chiefs of Quraysh are listening to, and their motives are evil. Their listening was not for the sake of seeking right guidance and accepting the truth. This reframes an ordinary act. Two people can hear the identical words — the first leaning in to be corrected, another scanning for a weapon. The sound is the same; the heart behind the ear is not, and it is the heart that Allah reports He knows.",
            "bn": "মুয়াসসার একই কথা সোজা করে বলেন: কুরাইশ নেতারা কী শুনছে তা আমিই ভাল জানি, আর তাদের উদ্দেশ্য মন্দ। তাদের শোনা সঠিক পথের খোঁজ আর সত্য কবুলের জন্য ছিল না। এতে একটি সাধারণ কাজেরই নতুন চেহারা বেরিয়ে আসে। দুজন মানুষ হুবহু একই কথা শুনতে পারে, প্রথমজন ঝুঁকে পড়ে শুধরে নিতে, অন্যজন খোঁজে অস্ত্র। শব্দ এক, কিন্তু কানের পেছনের অন্তর এক নয়। আর আল্লাহ বলছেন, সেই অন্তরটাই তিনি জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Listening in the Dark",
          "bn": "অন্ধকারে কান পাতা"
        },
        "p": [
          {
            "en": "Ibn Kathir preserves a fuller scene, reported by Ibn Ishaq in the Sira on the authority of az-Zuhri. Three of the leaders, namely Abu Sufyan, Abu Jahl and al-Akhnas ibn Shurayq, went out at night to listen to the Messenger reciting in prayer inside his house. Each took up a hidden spot, none knowing the others were there, and each stayed until dawn. On the road home they met and blamed each other: do not come back, lest you give the wrong impression. This is a Sira report, and Ibn Kathir gives it no grading of its own.",
            "bn": "ইবন কাসীর আরও পূর্ণ একটা দৃশ্য রক্ষা করেন, যা যুহরীর সূত্রে ইবন ইসহাক তাঁর সিরাতে বর্ণনা করেছেন। নেতাদের তিনজন, অর্থাৎ আবু সুফিয়ান, আবু জাহল আর আখনাস ইবন শুরাইক, এক রাতে বেরিয়েছিলেন নবীর ঘরে তাঁর নামাজে তিলাওয়াত শুনতে। প্রত্যেকে আলাদা এক গোপন জায়গায় ঘাপটি মারলেন, কেউ জানত না অন্যরাও সেখানে আছে, আর প্রত্যেকে ভোর পর্যন্ত রইলেন। ফেরার পথে দেখা হতেই তারা একে অপরকে দোষারোপ করে: আর এসো না, পাছে ভুল বার্তা যায়। এটি একটি সিরাতের বর্ণনা, আর ইবন কাসীর এর নিজস্ব কোনো মান দেননি।"
          },
          {
            "en": "The report has them repeat this for three nights, each night promising not to return and each night returning. At last al-Akhnas went to Abu Sufyan and asked what he made of what he had heard; Abu Sufyan admitted he had grasped some of it and not the rest. Going on to Abu Jahl, al-Akhnas heard the plainest confession of all: our clan and Banu Abd Manaf had competed for every honour until we were neck and neck, and now they claim a prophet receiving revelation — by Allah, we will never believe in him.",
            "bn": "বর্ণনায় আছে, পরপর তিন রাত তারা এমনটা করে; প্রতি রাতে আর না ফেরার ওয়াদা করে, তিনবার করেই আবার ফেরে। শেষে আখনাস আবু সুফিয়ানের কাছে গিয়ে জিজ্ঞেস করেন, শোনা কথা নিয়ে তিনি কী ভাবছেন; আবু সুফিয়ান স্বীকার করেন, কিছু তিনি বুঝেছেন, বাকিটা নয়। এরপর আবু জাহলের কাছে গিয়ে আখনাস শোনেন সবচেয়ে খোলা স্বীকারোক্তি: আমরা আর বনু আবদ মানাফ প্রতিটি সম্মানে পাল্লা দিয়েছি যতক্ষণ না কাঁধে কাঁধ মিলিয়ে দাঁড়িয়েছি, আর এখন তারা দাবি করে তাদের এক নবী আছে যিনি ওহি পান; আল্লাহর কসম, আমরা কখনো তাঁর প্রতি ঈমান আনব না।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Whispered Together",
          "bn": "গোপনে যা বলাবলি করত"
        },
        "p": [
          {
            "en": "And when they are in private counsel — wa idh hum najwa. At-Tabari records that the najwa was their secret consultation about the Messenger's affair. Qatada, whom both at-Tabari and al-Qurtubi cite, spells out its content: they whispered that he was possessed, that he was a magician, that he brought only tales of the ancients. Al-Baghawi lists the same crop of charges, some saying a madman, some a soothsayer, some a magician, some a poet, the labels contradicting each other, which is itself a sign that none was a considered verdict.",
            "bn": "‘আর যখন তারা গোপনে পরামর্শে বসে’, ওয়া ইয হুম নাজওয়া। তাবারী লেখেন, এই নাজওয়া ছিল নবীর ব্যাপারে তাদের গোপন শলাপরামর্শ। কাতাদা, যাঁকে তাবারী ও কুরতুবী দুজনেই উদ্ধৃত করেন, এর বিষয়বস্তু খুলে বলেন: তারা ফিসফিস করত যে তিনি পাগল, যে তিনি জাদুকর, যে তিনি কেবল পুরনো লোকের গল্প নিয়ে এসেছেন। বাগভী একই ধরনের অভিযোগের তালিকা দেন—কেউ বলে পাগল, কেউ গণক, কেউ জাদুকর, কেউ কবি। অভিযোগগুলো একটা আরেকটাকে কাটে, এটাই প্রমাণ যে কোনোটাই ভেবেচিন্তে দেওয়া রায় ছিল না।"
          },
          {
            "en": "Where were these whispers exchanged? Here the reports diverge, and the commentators flag them as uncertain with the word qila, it is said. At-Tabari relays, through Mujahid, that this echoes what al-Walid ibn al-Mughira and his circle said in Dar an-Nadwa, the assembly house of Quraysh. Al-Qurtubi adds two further settings: a meal Utba laid on for the nobles of Quraysh, or another that Ali prepared at the Prophet's request. Al-Qurtubi also cites az-Zajjaj that najwa is a noun standing for the act itself, secret talk. None is offered as established; the verse's point holds without deciding which gathering it was.",
            "bn": "এই ফিসফিস কোথায় হয়েছিল? এখানে বর্ণনাগুলো আলাদা হয়ে যায়, আর তাফসিরকারেরা ‘কীলা’ অর্থাৎ ‘বলা হয়’ শব্দে সেগুলোকে অনিশ্চিত বলে চিহ্নিত করেন। তাবারী মুজাহিদের সূত্রে জানান, এটি ওই কথারই প্রতিধ্বনি যা ওয়ালিদ ইবন মুগিরা ও তার সঙ্গীরা কুরাইশের সভাঘর দারুন নাদওয়ায় বলেছিল। কুরতুবী আরও দুটি উপলক্ষ যোগ করেন: উতবার দেওয়া কুরাইশ প্রধানদের এক ভোজে, অথবা নবীর অনুরোধে আলীর তৈরি আরেক ভোজে। কুরতুবী যাজ্জাজের সূত্রেও আনেন যে ‘নাজওয়া’ আসলে কাজটিরই নাম, গোপন কথা। কোনোটিকেই প্রতিষ্ঠিত বলা হয়নি; কোন মজলিসে হয়েছিল তা নিষ্পত্তি না করেও আয়াতের বক্তব্য দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bewitched, Out of His Mind",
          "bn": "যাদুগ্রস্ত, মাথা ঠিক নেই"
        },
        "p": [
          {
            "en": "Then the wrongdoers say: you follow only a man mashur. On the better-known reading, which Ibn Kathir calls al-mashhur, mashur means bewitched, a man worked on by magic. Al-Muyassar renders it a man whom sorcery has struck so that his mind is deranged. Al-Qurtubi glosses it as a man dosed with a spell that addled him and confused his affairs, and adds their purpose: they said it to drive people away from him. The charge dressed itself as diagnosis while doing the work of slander.",
            "bn": "তারপর যালিমরা বলে: তোমরা কেবল এক মাসহুর লোকের অনুসরণ করছ। বেশি পরিচিত পাঠে মাসহুর মানে যাদুগ্রস্ত, ইবন কাসীর একে ‘আল-মাশহুর’ বলেন, অর্থাৎ যার উপর জাদু কাজ করেছে। মুয়াসসার একে বলেন এমন লোক যাকে জাদু এমনভাবে ধরেছে যে তার বুদ্ধি এলোমেলো। কুরতুবী এর ব্যাখ্যা দেন এমন মানুষ হিসেবে যাকে জাদুর ডোজ দিয়ে বিভ্রান্ত করা হয়েছে আর তার সব গুলিয়ে গেছে; আর উদ্দেশ্যটাও তিনি জোড়েন: মানুষকে তাঁর কাছ থেকে দূরে সরাতে তারা এ কথা বলত। অভিযোগটা নিজেকে দোষ ধরার মোড়কে সাজিয়ে আসলে করত অপবাদের কাজ।"
          },
          {
            "en": "As-Sa'di draws out what the label let them do. Having settled among themselves that he was bewitched, they held themselves excused from weighing a word he said; they treated him as a man raving, who does not know what comes out of his own mouth. Al-Baghawi's term is matbub, spellbound. The move is old and still with us: fasten on a speaker a label that makes listening pointless, and you never have to answer what he actually says. The verdict is entered first, so the evidence is never given a hearing at all.",
            "bn": "সাদী দেখান, এই তকমাটা তাদের কী করতে দিয়েছিল। নিজেদের মধ্যে ঠিক করে ফেলার পর যে তিনি যাদুগ্রস্ত, তারা তাঁর একটি কথাও ওজন করা থেকে নিজেদের রেহাই দিয়ে দেয়; তারা তাঁকে ধরে নেয় এমন লোক যে বকছে, নিজের মুখ দিয়ে কী বেরোচ্ছে তা-ও জানে না। বাগভীর শব্দ হলো ‘মাতবুব’, জাদুবদ্ধ। কৌশলটা পুরনো, আজও আমাদের সঙ্গে আছে: বক্তার গায়ে এমন তকমা এঁটে দাও যাতে শোনা অর্থহীন হয়ে যায়, তাহলে সে আসলে কী বলছে তার জবাব কোনোদিন দিতে হয় না। রায় আগে বসিয়ে দেওয়া হয়, তাই প্রমাণ কোনো শুনানিই পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man With Lungs",
          "bn": "ফুসফুসওয়ালা এক মানুষ"
        },
        "p": [
          {
            "en": "A second reading turns on a different root. The Arabs called the lung the sahr, so mashur could mean simply a man who has lungs — a creature that eats and drinks, a mere mortal and not an angel. Abu Ubayda held this sense, and al-Qurtubi and al-Baghawi both record it, citing the poet Labid: if you ask us what we are, we are but sparrows of these lung-bearing folk. Read this way, the taunt was: why follow someone as human as yourselves, who hungers and thirsts as you do?",
            "bn": "দ্বিতীয় একটি পাঠ ভিন্ন ধাতুর উপর দাঁড়ায়। আরবরা ফুসফুসকে বলত ‘সাহর’, তাই মাসহুর মানে হতে পারে নিছক এমন লোক যার ফুসফুস আছে, যে খায়দায়, নিছক এক মানুষ, ফেরেশতা নয়। আবু উবাইদা এ অর্থটাই ধরেন, আর কুরতুবী ও বাগভী দুজনেই তা লিপিবদ্ধ করেন, কবি লাবিদের পঙক্তি টেনে: তুমি যদি জিজ্ঞেস কর আমরা কী, আমরা এই ফুসফুসওয়ালা মানুষদেরই চড়ুই। এভাবে পড়লে খোঁচাটা দাঁড়ায়, তোমাদেরই মতো একজন মানুষ, যে তোমাদের মতোই ক্ষুধাতৃষ্ণা বোধ করে, তার পিছনে কেন?"
          },
          {
            "en": "The commentators do not agree on which reading is meant. At-Tabari inclines to the lung sense, judging it not far from correct: they meant a man with lungs who eats and drinks, unlike an angel with no need of food. Ibn Kathir records the same reading but finds it questionable, holding that here they meant he was under a spell that fed him a familiar's whispers of what he recited. Both preserve both senses; each weighs them differently. Where two careful readers part, the honest course is to keep the difference in view.",
            "bn": "কোন পাঠটি উদ্দিষ্ট, তাতে তাফসিরকারেরা একমত নন। তাবারী ঝোঁকেন ফুসফুসের অর্থের দিকে, একে সঠিকের খুব কাছাকাছি মনে করেন: তাদের মানে ছিল ফুসফুসওয়ালা এক মানুষ, যে খায় ও পান করে, ফেরেশতার মতো নয় যার খাবারের দরকার নেই। ইবন কাসীর একই পাঠ তুলে ধরেও একে প্রশ্নবিদ্ধ মনে করেন; তাঁর মতে এখানে তারা বোঝাতে চেয়েছিল যে তিনি এমন জাদুর কবলে যা তাঁর কানে কোনো সঙ্গীর ফিসফিসানি ঢেলে দেয় সেই কথা, যা তিনি পড়েন। দুজনেই দুটো অর্থ রাখেন, তবে ওজন করেন আলাদাভাবে। দুই মনোযোগী পাঠক যেখানে দ্বিমত, সেখানে সৎ পথ হলো পার্থক্যটা চোখের সামনে রাখা।"
          },
          {
            "en": "Alongside these, Mujahid offered a third gloss recorded by al-Qurtubi and al-Baghawi: mashur as deceived, taken in, as in the Qur'anic reproach how are you so deceived. Al-Baghawi notes a further shade, turned away from the truth. The single word carried a spread of insults, bewitched, deranged, merely human, duped, diverted, and the verse gathers them all under a single heading before answering none of them here.",
            "bn": "এগুলোর পাশে মুজাহিদ একটি তৃতীয় অর্থ দেন, যা কুরতুবী ও বাগভী লিপিবদ্ধ করেন: মাসহুর মানে প্রতারিত, ভোলানো, যেমন কুরআনের তিরস্কার ‘তোমরা কোথা থেকে ভুলছ’। বাগভী আরেকটি ছায়া তুলে ধরেন, সত্য থেকে ফিরিয়ে দেওয়া। একটিমাত্র শব্দ বয়ে আনে অপবাদের এক গুচ্ছ: যাদুগ্রস্ত, উন্মাদ, নিছক মানুষ, প্রতারিত, বিভ্রান্ত। আর আয়াত এদের সবাইকে এক শিরোনামে জড়ো করে এখানে কোনোটির জবাব না দিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Called The Wrongdoers",
          "bn": "কেন যালিম বলা হলো"
        },
        "p": [
          {
            "en": "Notice whom the verse names as the speakers. It does not say when they say, but when the wrongdoers say — az-zalimun. Al-Qurtubi identifies them as Abu Jahl, al-Walid ibn al-Mughira and their like; al-Baghawi names al-Walid and his companions. The naming is deliberate and damning. To hear the truth clearly, to gather in private to plan against it, and then to brand its bearer a madman is not a mere difference of opinion or an honest mistake. The Qur'an files the whole performance under zulm, wrongdoing, and lets the label settle on the deed rather than on the man they slandered.",
            "bn": "খেয়াল করুন, আয়াত কাদের বক্তা হিসেবে নাম দেয়। বলে না ‘যখন তারা বলে’, বলে ‘যখন যালিমরা বলে’, অর্থাৎ আয-যালিমুন। কুরতুবী তাদের চিহ্নিত করেন আবু জাহল, ওয়ালিদ ইবন মুগিরা ও তাদের মতো লোক হিসেবে; বাগভী নাম নেন ওয়ালিদ ও তার সঙ্গীদের। এই নাম দেওয়া ইচ্ছাকৃত এবং কঠোর। সত্য স্পষ্ট শুনে, তার বিরুদ্ধে ষড়যন্ত্র করতে আড়ালে বসে, তারপর তার বাহককে পাগল বলে দাগিয়ে দেওয়া—এ নিছক মতভেদ বা সরল ভুল নয়। কুরআন গোটা কাণ্ডটাকে যুলুমের খাতায় তোলে, আর তকমাটা ফেলে সেই কাজের উপর, যাদের অপবাদ দেওয়া হলো সেই মানুষের উপর নয়।"
          },
          {
            "en": "This must be said plainly. This verse describes what the text describes: the slander of a particular group of Makkan chiefs against the Prophet in his own lifetime. It licenses nothing against any living person or community, and passes no verdict on anyone alive today. To read it as a warrant to brand this or that present-day group as the wrongdoers of the verse is to misuse it. It is a mirror held up to the reader's own listening, not a charge sheet to hand to someone else.",
            "bn": "কথাটা স্পষ্ট করে বলা দরকার। এ আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: নবীর নিজের জীবদ্দশায় মক্কার একদল নেতার করা অপবাদ। এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না, আর আজ বেঁচে থাকা কারও ব্যাপারে কোনো রায় দেয় না। একে যদি কেউ আজকের এই বা ওই দলকে আয়াতের ‘যালিম’ বলে দাগানোর সনদ বানায়, সে আয়াতটির অপব্যবহার করল। এটি পাঠকের নিজের শোনার সামনে ধরা এক আয়না, অন্য কারও হাতে ধরিয়ে দেওয়ার অভিযোগপত্র নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Can Magic Touch a Prophet?",
          "bn": "নবীকে কি জাদু ছোঁয়"
        },
        "p": [
          {
            "en": "The charge of being bewitched raises an old question, and Ma'arif al-Qur'an takes it up: can magic affect a prophet at all? Its answer, drawing on Bayan al-Qur'an and Mufti Taqi Usmani, is careful. A prophet shares human vulnerabilities — he can be wounded, run a fever, feel pain — and magic, working through physical causes, could touch his body in the same way. But the disbelievers here meant something else entirely: that he was deranged, his message the raving of a broken mind. That, Ma'arif stresses, was impossible, and it is that claim the Qur'an refutes.",
            "bn": "যাদুগ্রস্ত বলার অভিযোগ একটা পুরনো প্রশ্ন তোলে, আর মাআরিফুল কুরআন তা তুলে ধরে: জাদু কি আদৌ কোনো নবীকে ছুঁতে পারে? বায়ানুল কুরআন ও মুফতি তাকি উসমানির উপর ভর করে এর জবাব সতর্ক। নবীও মানুষের দুর্বলতা ভাগ করে নেন, তিনি আহত হতে পারেন, জ্বরে ভুগতে পারেন, ব্যথা পেতে পারেন; আর জাদু, দৈহিক কারণের ভেতর দিয়ে কাজ করে, সেভাবেই তাঁর শরীর ছুঁতে পারে। কিন্তু কাফিররা এখানে বোঝাতে চেয়েছিল একেবারে অন্য কিছু: তিনি উন্মাদ, তাঁর বাণী এক ভাঙা মনের প্রলাপ। সেটাই ছিল অসম্ভব, মাআরিফ জোর দিয়ে বলে, আর কুরআন সেই দাবিটাকেই খণ্ডন করে।"
          },
          {
            "en": "Ma'arif adds that a hadith does record the Prophet being affected by magic on a certain occasion — but, it explains, that touched only his body and never his prophetic function, so it does not concede the disbelievers' insult. Beyond this, none of the tafsirs consulted attaches a sound, verse-specific hadith to this ayah; the vivid scene of the night listening comes through the Sira, not a graded chain. Where there is no sound narration to add, the honest thing is to say so and let the verse speak.",
            "bn": "মাআরিফ যোগ করে, একটি হাদিসে বটে আছে যে নবী এক পর্যায়ে জাদুতে আক্রান্ত হয়েছিলেন; তবে, সে ব্যাখ্যা করে, তা কেবল তাঁর শরীর ছুঁয়েছিল, তাঁর নবুওয়াতের কাজ কখনো নয়, তাই এতে কাফিরদের অপবাদ মেনে নেওয়া হয় না। এর বাইরে, দেখা তাফসিরগুলোর কোনোটিই এ আয়াতের সঙ্গে সহিহ, আয়াত-নির্দিষ্ট কোনো হাদিস জোড়ে না; রাতের ওই শোনার জীবন্ত দৃশ্যটি আসে সিরাত থেকে, কোনো মানসম্পন্ন সনদ থেকে নয়। যেখানে যোগ করার মতো সহিহ বর্ণনা নেই, সেখানে সৎ কাজ হলো তা বলে দেওয়া আর আয়াতকেই কথা বলতে দেওয়া।"
          },
          {
            "en": "For the reader, the verse turns the question inward. Allah is most-knowing not merely of what is said to Him but of how we listen — the posture of the heart as the words arrive. It is possible to attend a lecture, a recitation, a sincere warning, already armed with the label that will let us set it aside. The verse that follows, 17:48, will marvel at the comparisons they coined and where those led them; here, the summons is simpler: examine why you bent your ear.",
            "bn": "পাঠকের জন্য আয়াত প্রশ্নটাকে ভেতরে ঘুরিয়ে দেয়। আল্লাহ শুধু তাঁকে কী বলা হলো তা-ই নন, আমরা কীভাবে শুনি তা-ও ভাল জানেন, কথা কানে আসার সময় অন্তরের ভঙ্গিটাও। বক্তৃতা, তিলাওয়াত, আন্তরিক নসিহত শুনতে বসাও সম্ভব এমন এক তকমা হাতে নিয়ে, যা দিয়ে সেটা সরিয়ে রাখা যাবে। পরের আয়াত, ১৭:৪৮, বিস্মিত হবে তারা কী সব উপমা বানাল আর তা তাদের কোথায় নিয়ে গেল তা নিয়ে; এখানে ডাকটা সহজ: নিজেকে জিজ্ঞেস করো কেন কান বাড়ালে।"
          }
        ]
      }
    ]
  },
  "17:53": {
    "sections": [
      {
        "h": {
          "en": "Spoken to His Servants",
          "bn": "তাঁর বান্দাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "The verse opens with Allah speaking through His Prophet ﷺ about a group He calls His own: wa-qul li-ʿibādī, \"and tell My servants.\" The verses just before had quoted the mockers of Makkah — the ones who called the Prophet ﷺ a bewitched man (17:47) and sneered at the very idea of resurrection (17:49). Against that noise, Allah turns to the people who believe and gives them a single instruction about how they are to speak. He does not hand them a sharper answer. He tells them to say the word that is best.",
            "bn": "আয়াতটি শুরু হয় আল্লাহর কথা দিয়ে, যা তিনি বলেন তাঁর নবী ﷺ-এর মাধ্যমে, আর যাদের নিয়ে বলেন তাদের ডাকেন নিজের বলে: ওয়া কুল লিইবাদী, ‘আমার বান্দাদের বলে দাও।’ ঠিক আগের আয়াতগুলোয় মক্কার বিদ্রূপকারীদের কথা এসেছে। তারা নবী ﷺ-কে বলত যাদুগ্রস্ত লোক (১৭:৪৭), আর পুনরুত্থানের কথা শুনে ঠাট্টা করত (১৭:৪৯)। সেই হইচইয়ের মধ্যে আল্লাহ মুখ ফেরান যারা ঈমান এনেছে তাদের দিকে, আর তাদের একটি কথা বলেন কীভাবে কথা বলতে হবে সে বিষয়ে। তিনি তাদের হাতে আরও ধারালো জবাব তুলে দেন না। তিনি বলেন সবচেয়ে সুন্দর কথাটা বলতে।"
          },
          {
            "en": "That He calls them ʿibādī, My servants, is itself part of the lesson. As-Saʿdi reads the whole command as a mark of Allah's gentleness toward His servants: He is directing them to the finest character, the finest deeds and the finest words — the very things, as-Saʿdi says, that earn happiness in this world and the next. The instruction is not a restraint fastened on them from outside. It is a gift handed to people He has already claimed as His own, and the shape of the gift is a better way of speaking.",
            "bn": "তিনি যে তাদের ‘আমার বান্দা’ বলে ডাকেন, সেটাও শিক্ষার একটা অংশ। সা'দী গোটা নির্দেশটিকেই দেখেন বান্দাদের প্রতি আল্লাহর কোমলতার চিহ্ন হিসেবে। তিনি তাদের পথ দেখাচ্ছেন সবচেয়ে সুন্দর চরিত্র, সবচেয়ে সুন্দর আমল আর সবচেয়ে সুন্দর কথার দিকে। সা'দী বলেন, এই জিনিসগুলোই দুনিয়া ও আখিরাতে সুখ এনে দেয়। এ নির্দেশ বাইরে থেকে চাপিয়ে দেওয়া কোনো বাঁধন নয়। এ যেন এক উপহার, যাদের তিনি আগেই নিজের বলে নিয়েছেন তাদের হাতে তুলে দেওয়া, আর সেই উপহারের রূপ হলো কথা বলার এক সুন্দরতর ঢং।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Is Best",
          "bn": "যে কথা সবচেয়ে সুন্দর"
        },
        "p": [
          {
            "en": "The phrase is spare: allatī hiya aḥsan, \"that which is best.\" At-Tabari fills in the noun it leaves out — Allah tells the Prophet ﷺ to instruct His servants that they should say to one another the best of speech and address. He quotes al-Hasan al-Basri on what that looks like in practice: a man does not answer like with like; where he was insulted, he says instead, \"May Allah have mercy on you, may Allah forgive you.\" The best word, on this reading, is not the equal-and-opposite word. It is the one that refuses to trade.",
            "bn": "কথাটি বেশ সংক্ষিপ্ত: আল্লাতী হিয়া আহসান, ‘যা সবচেয়ে উত্তম।’ তাবারী এতে বাদ থাকা বিশেষ্যটি ধরিয়ে দেন। আল্লাহ নবী ﷺ-কে বলছেন তাঁর বান্দাদের এমন নির্দেশ দিতে যে, তারা একে অপরের সাথে যেন সবচেয়ে সুন্দর কথা ও সম্বোধন বলে। কার্যত সেটা কেমন, তা বোঝাতে তিনি হাসান বসরীর কথা আনেন: মানুষ একই রকম কথায় জবাব দেয় না। যেখানে তাকে গালি দেওয়া হয়েছে সেখানে সে বরং বলে, ‘আল্লাহ আপনার প্রতি দয়া করুন, আল্লাহ আপনাকে ক্ষমা করুন।’ সবচেয়ে সুন্দর কথা মানে সমান-সমান পাল্টা কথা নয়। এ হলো সেই কথা, যা কথার বদলা নিতে অস্বীকার করে।"
          },
          {
            "en": "As-Saʿdi widens the frame. For him, \"that which is best\" reaches every kind of speech that draws a person nearer to Allah: recitation, remembrance, teaching, enjoining good and forbidding wrong, and gentle, kindly words to people of every rank and station. He adds a rule for the borderline case — when the choice lies between two good things and both cannot be said, prefer the better of the two. Good speech, he writes, calls to every beautiful trait and righteous deed; for whoever masters his tongue has, in effect, mastered his whole affair.",
            "bn": "সা'দী পরিসরটা আরও চওড়া করেন। তাঁর কাছে ‘যা সবচেয়ে উত্তম’ কথাটি ছুঁয়ে যায় এমন প্রতিটি কথা, যা মানুষকে আল্লাহর কাছে নিয়ে আসে: তিলাওয়াত, জিকির, শিক্ষা, সৎকাজের আদেশ ও অসৎ কাজে নিষেধ, আর সব স্তরের মানুষের সাথে নরম ও কোমল কথা। তিনি একটা সীমারেখার নিয়মও জুড়ে দেন। যখন দুটি ভালো কথার মধ্যে বেছে নিতে হয় আর দুটোই একসাথে বলা যায় না, তখন দুটির মধ্যে ভালোটাকেই অগ্রাধিকার দিতে হবে। সা'দী লেখেন, সুন্দর কথা প্রতিটি সুন্দর গুণ আর নেক আমলের দিকে ডাকে। কারণ যে নিজের জিভকে বশে আনে, সে যেন নিজের গোটা কাজটাকেই বশে আনে।"
          },
          {
            "en": "Al-Baghawi gathers still more of the range. Some, he reports, took \"that which is best\" to mean the best trait of character; others took \"the best\" to be the word of sincerity itself, lā ilāha illā Allāh — the finest word a tongue can form. Al-Qurtubi records a reading in which the address is to people who admit that Allah created them yet still worship idols: let them say the best word, the word of oneness and the acknowledgment of prophethood. The single open phrase turns out to hold a whole scale of good speech.",
            "bn": "বাগাভী এই পরিসরের আরও দিক জড়ো করেন। তিনি জানান, কেউ কেউ ‘যা সবচেয়ে উত্তম’ বলতে বুঝেছেন সবচেয়ে সুন্দর চারিত্রিক গুণ; আবার কেউ ‘সবচেয়ে উত্তম’ বলতে বুঝেছেন খাঁটি তাওহীদের বাক্যটিকেই, লা ইলাহা ইল্লাল্লাহ, জিভে গড়া সবচেয়ে সুন্দর কথা। কুরতুবী এমন এক ব্যাখ্যাও আনেন যেখানে সম্বোধনটি সেই লোকদের প্রতি, যারা স্বীকার করে আল্লাহ তাদের সৃষ্টি করেছেন অথচ মূর্তির পূজা করে চলে: তারা যেন সবচেয়ে সুন্দর কথাটা বলে, তাওহীদের কথা আর নবুয়তের স্বীকৃতি। একটিমাত্র খোলা বাক্যের ভেতরে দেখা যায় সুন্দর কথার গোটা একটা মাপকাঠি ধরা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Best With Whom",
          "bn": "সুন্দর কথা কার সাথে"
        },
        "p": [
          {
            "en": "The commentators divide over whom this best speech is owed to, and the split is worth keeping as a split. Al-Baghawi, citing al-Kalbi, reports that the mushrikīn were harming the Muslims, who complained to the Prophet ﷺ; the verse then told the believers to say to the disbelievers \"that which is best\" and not to repay their folly in kind. On this reading, the command governs how a believer speaks to an opponent — the case of daʿwah, of the argument with someone who rejects the message and provokes.",
            "bn": "এই সুন্দর কথা কার প্রাপ্য, তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান, আর মতভেদটাকে মতভেদ হিসেবেই রাখা ভালো। বাগাভী কালবীর সূত্রে জানান, মুশরিকরা মুসলিমদের কষ্ট দিচ্ছিল, আর মুসলিমরা তা নবী ﷺ-এর কাছে নালিশ করে। তখন আয়াতটি মুমিনদের বলে কাফিরদের সাথে ‘যা সবচেয়ে উত্তম’ তা-ই বলতে, তাদের মূর্খতার বদলা একই রকমে না দিতে। এ ব্যাখ্যায় নির্দেশটি ঠিক করে দেয় একজন মুমিন প্রতিপক্ষের সাথে কীভাবে কথা বলবে। এ হলো দাওয়াতের প্রসঙ্গ, যে বার্তা প্রত্যাখ্যান করে আর উসকে দেয় তার সাথে বাদানুবাদের প্রসঙ্গ।"
          },
          {
            "en": "Al-Qurtubi records that reading and several like it, including one that ties the verse to disputing the idolaters about tawhid — as in the warning of 6:108 not to insult the gods they call upon, lest they insult Allah in return out of ignorance. But al-Qurtubi then names a second group who held that the verse addresses the believers among themselves in particular: good manners, softened speech, a lowered wing, and the casting-off of Satan's promptings. He cites the Prophet's words ﷺ, \"Be, O servants of Allah, brothers,\" calls this the best of the readings, and holds the verse to be muḥkam, firm and in force.",
            "bn": "কুরতুবী এই ব্যাখ্যা আর এর মতো আরও কয়েকটি লিপিবদ্ধ করেন, যার একটি আয়াতটিকে জুড়ে দেয় তাওহীদ নিয়ে মূর্তিপূজকদের সাথে বিতর্কের সাথে। যেমন ৬:১০৮ আয়াতে সতর্ক করা হয়েছে, তারা আল্লাহ ছাড়া যাদের ডাকে তাদের যেন গালি দেওয়া না হয়, নইলে তারা না জেনে পাল্টা আল্লাহকে গালি দেবে। তবে কুরতুবী এরপর দ্বিতীয় একটি দলের নাম করেন, যারা মনে করতেন আয়াতটি বিশেষভাবে মুমিনদের নিজেদের মধ্যেকার আচরণ নিয়ে: সুন্দর আদব, নরম কথা, বিনয়ে নুয়ে থাকা, আর শয়তানের কুমন্ত্রণা ঝেড়ে ফেলা। তিনি নবী ﷺ-এর কথা আনেন, ‘হে আল্লাহর বান্দারা, তোমরা ভাই ভাই হয়ে যাও।’ এই ব্যাখ্যাকেই তিনি সবচেয়ে ভালো বলেন, আর আয়াতটিকে ধরেন মুহকাম, দৃঢ় ও বলবৎ।"
          },
          {
            "en": "Held side by side, the two readings do not cancel — they widen the verse. If it governs speech to an opponent, it disciplines how the message is carried to those who reject it. If it governs speech among believers, it guards the community from turning inward on itself. Al-Qurtubi's own choice was the second, yet nothing in the first is thereby lost. A believer stands to answer for both the word he sends outward and the word he sends to his brother, and the verse, read either way, asks for the better one.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে একটি অন্যটিকে বাতিল করে না, বরং আয়াতটিকে চওড়া করে। এটি যদি প্রতিপক্ষের সাথে কথার নিয়ম হয়, তবে যারা বার্তা প্রত্যাখ্যান করে তাদের কাছে বার্তা পৌঁছানোর ধরনটাকে এটি শৃঙ্খলায় বাঁধে। আর এটি যদি মুমিনদের নিজেদের মধ্যেকার কথার নিয়ম হয়, তবে এটি সমাজকে নিজের ভেতরেই ভেঙে পড়া থেকে রক্ষা করে। কুরতুবীর নিজের পছন্দ ছিল দ্বিতীয়টি, তবু প্রথমটির কিছুই এতে হারায় না। বান্দাকে জবাব দিতে হবে বাইরে পাঠানো কথার জন্যও, ভাইয়ের কাছে পাঠানো কথার জন্যও। আয়াতটি যেভাবেই পড়া হোক, উত্তম কথাটাই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Verse Came Down",
          "bn": "আয়াতটি নাযিলের প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "Several occasions of revelation are reported, and they do not agree. Al-Qurtubi relates — on the authority of ath-Thaʿlabi, al-Mawardi, Ibn ʿAtiyya and al-Wahidi — that the verse came down about ʿUmar ibn al-Khattab (RA): an Arab man insulted him, ʿUmar answered in kind and meant to kill him, and it nearly kindled a fitna, so Allah revealed these words. Ma'arif al-Qur'an carries the same account from al-Qurtubi. A different report, from al-Kalbi, sets the verse at the moment the Muslims asked leave to fight and were told the command to fight had not yet come.",
            "bn": "নাযিলের কয়েকটি প্রেক্ষাপট বর্ণিত হয়েছে, আর সেগুলো একমত নয়। কুরতুবী সালাবী, মাওয়ারদী, ইবন আতিয়্যা ও ওয়াহিদীর সূত্রে বর্ণনা করেন যে, আয়াতটি নাযিল হয়েছিল উমার ইবনুল খাত্তাব (রাঃ)-কে নিয়ে। এক আরব লোক তাঁকে গালি দেয়, উমার একই রকমে জবাব দেন আর তাকে মেরে ফেলতে চান, যা প্রায় এক ফিতনা বাধিয়ে দিচ্ছিল। তখন আল্লাহ এই কথাগুলো নাযিল করেন। মাআরিফুল কুরআন কুরতুবীর সূত্রে একই ঘটনা আনে। ভিন্ন একটি বর্ণনা, কালবীর সূত্রে, আয়াতটিকে বসায় সেই মুহূর্তে যখন মুসলিমরা যুদ্ধের অনুমতি চেয়েছিল আর তাদের বলা হয়েছিল যুদ্ধের নির্দেশ এখনো আসেনি।"
          },
          {
            "en": "Attached to that second report is a view the texts carry but do not settle. Al-Baghawi, quoting al-Hasan's gloss \"say to him, may Allah guide you,\" adds that \"this was before they were commanded to jihad and fighting,\" and al-Qurtubi preserves the same note. Read as those transmitters read it, the gentle-speech command belonged to a season before fighting the mushrikīn was permitted. It is reported here as their reading, not asserted as the verse's ruling — and al-Qurtubi's own preference, as we saw, was that the verse is firm and speaks to the believers with one another.",
            "bn": "সেই দ্বিতীয় বর্ণনার সাথে জড়ানো আছে এমন এক অভিমত, যা তাফসীরের পাঠ বহন করে কিন্তু চূড়ান্ত করে না। বাগাভী হাসানের ব্যাখ্যা ‘তাকে বলো, আল্লাহ তোমাকে হেদায়েত দিন’ উদ্ধৃত করে জুড়ে দেন, ‘এটা ছিল জিহাদ ও যুদ্ধের নির্দেশ আসার আগের কথা,’ আর কুরতুবীও একই মন্তব্য রেখে দেন। সেই বর্ণনাকারীরা যেভাবে পড়েছেন, সেভাবে দেখলে নরম কথার নির্দেশটি ছিল মুশরিকদের সাথে যুদ্ধের অনুমতির আগের এক সময়ের। এটি এখানে তাঁদের পাঠ হিসেবে বর্ণিত, আয়াতের বিধান হিসেবে দাবি করা নয়। আর কুরতুবীর নিজের পছন্দ, আগেই দেখেছি, ছিল এই যে আয়াতটি দৃঢ় এবং মুমিনদের নিজেদের মধ্যেকার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Foothold in a Quarrel",
          "bn": "ঝগড়ায় শয়তানের পা রাখার ঠাঁই"
        },
        "p": [
          {
            "en": "Then the reason: inna ash-shaytāna yanzaghu baynahum, \"indeed Satan sows discord among them.\" At-Tabari glosses the verb plainly — Satan spoils their dealings with each other, stirring evil up between them. Al-Muyassar spells out what he casts among them: enmity, corruption and quarrelling. The link the verse draws is exact and unsentimental. Harsh speech is not merely unpleasant; it is the seam Satan works at, the point where he pries a conversation apart before the speakers have even noticed the gap opening.",
            "bn": "এরপর কারণটি: ইন্নাশ শাইতানা ইয়ানযাগু বাইনাহুম, ‘নিশ্চয় শয়তান তাদের মাঝে বিভেদ সৃষ্টি করে।’ তাবারী ক্রিয়াটির সোজা অর্থ দেন। শয়তান একে অপরের সাথে তাদের লেনদেন নষ্ট করে দেয়, তাদের মাঝে মন্দকে উসকে তোলে। মুয়াসসার খুলে বলেন সে তাদের মাঝে কী ছড়ায়: দুশমনি, ফাসাদ আর ঝগড়া। আয়াত যে যোগসূত্রটি টানে তা নিখুঁত ও আবেগহীন। কড়া কথা কেবল অপ্রীতিকর নয়, এ হলো সেই সেলাই-রেখা যেখানে শয়তান কাজ করে। বক্তারা ফাঁকটা খুলে যাওয়া টেরও পাওয়ার আগে সে সেখান থেকেই কথাটাকে টেনে ছিঁড়ে ফেলে।"
          },
          {
            "en": "Ibn Kathir traces the sequence. Allah commands the believers to say the best word, he writes, because if they do not, Satan sows discord among them — and the speech \"leads out into action,\" so that evil, dispute and fighting break out. Ma'arif al-Qur'an gives the same mechanism a sharper image: harsh words at the moment of disagreement are a trap door through which Satan pushes people down into mutual strife and disorder. The bad word is not the whole of the harm. It is where the fall begins.",
            "bn": "ইবন কাসীর ধারাটা খুলে দেখান। তিনি লেখেন, আল্লাহ মুমিনদের সবচেয়ে সুন্দর কথা বলতে আদেশ করেন, কারণ তারা তা না করলে শয়তান তাদের মাঝে বিভেদ ঢুকিয়ে দেয়। আর সেই কথা ‘বেরিয়ে আসে কাজে,’ ফলে মন্দ, বিবাদ আর মারামারি বেধে যায়। মাআরিফুল কুরআন একই প্রক্রিয়াকে আরও তীক্ষ্ণ ছবিতে দেয়: মতভেদের মুহূর্তে কড়া কথা যেন এক গোপন দরজা, যা দিয়ে শয়তান মানুষকে ঠেলে ফেলে পারস্পরিক কলহ আর বিশৃঙ্খলার নিচে। খারাপ কথাটাই পুরো ক্ষতি নয়। ওখান থেকেই পতনটা শুরু হয়।"
          },
          {
            "en": "The pronoun matters here. \"Among them,\" baynahum, means among the very servants just addressed; the discord Satan seeks is not out in the wide world but between people who might otherwise have stood as allies. That is why the cure is placed inside their own speech and nowhere else. Close the seam with a kind word and there is nothing for him to pry at; leave it open with a cutting word, and the verse says plainly who it is that steps through the gap.",
            "bn": "এখানে সর্বনামটি গুরুত্বপূর্ণ। ‘তাদের মাঝে,’ বাইনাহুম, মানে ঠিক যে বান্দাদের এইমাত্র সম্বোধন করা হলো তাদের মাঝেই। শয়তান যে বিভেদ খোঁজে তা দূরের বিশাল দুনিয়ায় নয়, বরং এমন মানুষদের মাঝে যারা নইলে পরস্পরের সঙ্গী হয়ে দাঁড়াতে পারত। এ কারণেই এর প্রতিকার রাখা হয়েছে তাদের নিজেদের কথার ভেতরেই, আর কোথাও নয়। নরম কথায় সেলাই বন্ধ করে দিলে শয়তানের টানার মতো কিছু থাকে না। কড়া কথায় খোলা রাখলে আয়াত সাফ বলে দেয়, ফাঁক দিয়ে কে ঢোকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Weapon and a Whisper",
          "bn": "অস্ত্র আর কুমন্ত্রণা"
        },
        "p": [
          {
            "en": "Ibn Kathir illustrates how small the opening can be. He brings, under this very verse, the report of Abu Hurayrah (RA) that the Prophet ﷺ said nobody should point a weapon at his brother, \"for he does not know — perhaps Satan will make it slip in his hand, and he falls into a pit of the Fire.\" Ibn Kathir records it from Imam Ahmad and notes that al-Bukhari and Muslim both narrated it through ʿAbdur-Razzaq; it is a sound, agreed-upon report. The wording given here is that of Sahih al-Bukhari.",
            "bn": "ইবন কাসীর দেখান ফাঁকটা কত ছোট হতে পারে। তিনি ঠিক এই আয়াতের নিচে আনেন আবু হুরায়রা (রাঃ)-এর বর্ণনা যে, নবী ﷺ বলেছেন কেউ যেন তার ভাইয়ের দিকে অস্ত্র তাক না করে, ‘কারণ সে জানে না, হয়তো শয়তান তার হাতে ওটা ফসকে দেবে, আর সে আগুনের গর্তে পড়ে যাবে।’ ইবন কাসীর এটি ইমাম আহমাদের সূত্রে লিপিবদ্ধ করেন আর জানান যে, বুখারী ও মুসলিম দুজনেই এটি আবদুর রাযযাকের সূত্রে বর্ণনা করেছেন। এটি সহীহ, মুত্তাফাকুন আলাইহি বর্ণনা। এখানে যে শব্দে দেওয়া হলো তা সহীহ বুখারীর।"
          },
          {
            "en": "The gesture in the hadith is not even speech — it is a raised weapon between two people who may only be playing. Yet the same enemy the verse named is at work: he needs only a hand already lifted and a temper already warm, and he turns a motion into a wound. If a pointed blade is that dangerous, the pointed word — which is what the verse is actually about — asks for at least the same care. Both hand Satan the very foothold the verse warned would let him in.",
            "bn": "হাদীসের এই ইঙ্গিতটা তো কথাও নয়, এ হলো দুজন মানুষের মাঝে তাক-করা এক অস্ত্র, যারা হয়তো নিছক খেলছে। তবু আয়াতের বলা সেই একই দুশমন কাজ করছে। তার শুধু দরকার একটা তুলে-ফেলা হাত আর একটা গরম হয়ে থাকা মেজাজ, তাতেই সে এক নড়াচড়াকে বানিয়ে দেয় ক্ষত। তাক-করা ধার যদি এতটা বিপজ্জনক হয়, তবে তাক-করা কথা, যা নিয়ে আয়াত আসলে বলছে, অন্তত ততটুকু সতর্কতা চায়। দুটোই শয়তানের হাতে তুলে দেয় সেই পা রাখার ঠাঁই, যা দিয়ে ঢুকবে বলে আয়াত সতর্ক করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Real Enemy",
          "bn": "আসল দুশমন কে"
        },
        "p": [
          {
            "en": "As-Saʿdi draws the cure straight from the verse. Satan, he writes, is the servants' true enemy, the adversary they ought to be fighting — so the remedy is not to obey him in the ugly speech he urges on them, but to be gentle with each other until the inciter between them is put down. The brother across the disagreement, even when Satan has stirred trouble between them, is not the target. The resolve, as-Saʿdi says, is to turn against the real enemy and to subdue the lower self through which Satan finds his way in.",
            "bn": "সা'দী প্রতিকারটি টেনে আনেন আয়াত থেকেই। তিনি লেখেন, শয়তানই বান্দাদের আসল দুশমন, যার বিরুদ্ধে তাদের লড়া উচিত। তাই প্রতিকার হলো সে যে কুৎসিত কথায় উসকায় তাতে তার আনুগত্য না করা, বরং নিজেদের মধ্যে নরম হওয়া, যতক্ষণ না তাদের মাঝে বিভেদ-বাধানো সেই শয়তান দমে যায়। মতভেদের ওপারে যে ভাই, শয়তান তাদের মাঝে ঝামেলা বাধিয়ে দিলেও সে নিশানা নয়। সা'দী বলেন, দৃঢ়সংকল্পটা হলো আসল দুশমনের বিরুদ্ধে ঘুরে দাঁড়ানো, আর সেই কুপ্রবৃত্তিকে দমানো যার ভেতর দিয়ে শয়তান পথ পায়।"
          },
          {
            "en": "Al-Qurtubi closes with a related report. A group sat remembering Allah, and Satan came to break up their gathering but the angels held him off; so he went to people sitting nearby who were not remembering Allah, and set them against one another until they quarrelled and came to blows. The ones remembering Allah then rose to reconcile them — and at that, the report says, Satan rejoiced. Al-Qurtubi offers it as one glimpse of the enemy's work; it is related as a narration and given without a grading, so it is carried here as illustration, not as proof.",
            "bn": "কুরতুবী শেষ করেন এর সাথে মেলে এমন একটি বর্ণনা দিয়ে। একদল লোক বসে আল্লাহর জিকির করছিল, শয়তান এল তাদের মজলিস ভাঙতে কিন্তু ফেরেশতারা তাকে ঠেকিয়ে দিল। তখন সে কাছেই বসা এমন কিছু লোকের কাছে গেল যারা জিকির করছিল না, আর তাদের একে অপরের বিরুদ্ধে লাগিয়ে দিল, শেষে তারা ঝগড়া করে হাতাহাতিতে জড়াল। যারা জিকির করছিল তারা তখন উঠে গিয়ে তাদের মেলাতে গেল, আর এতে, বর্ণনাটি বলে, শয়তান খুশি হলো। কুরতুবী এটি আনেন দুশমনের কাজের এক ঝলক হিসেবে। এটি একটি বর্ণনা হিসেবেই এসেছে, কোনো মান ছাড়া, তাই এখানে এটি দলিল নয়, দৃষ্টান্ত হিসেবে ধরা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing the Kinder Word",
          "bn": "নরম কথাটাই বেছে নেওয়া"
        },
        "p": [
          {
            "en": "Put together, the verse is unusually practical. It does not ask the believer to feel differently about an opponent; it asks him to choose a different word — the better of the two that rise to the lips — and it explains what is at stake if he does not. Every commentator here, whether he read the verse as governing speech to disbelievers or speech among believers, agreed on the core instruction: the kindest true word, especially where feeling runs high and the pull to answer in kind is strongest.",
            "bn": "সব মিলিয়ে আয়াতটি অস্বাভাবিক রকম কাজের। এটি মুমিনকে প্রতিপক্ষ সম্পর্কে ভিন্নভাবে অনুভব করতে বলে না। এটি তাকে বলে ভিন্ন একটা কথা বেছে নিতে, ঠোঁটে যে দুটি কথা আসছে তার ভালোটাকে, আর বুঝিয়ে দেয় না বাছলে কী ঝুঁকি। এখানকার প্রত্যেক তাফসীরকার, তিনি আয়াতটিকে কাফিরদের সাথে কথার নিয়ম হিসেবে পড়ুন বা মুমিনদের নিজেদের মধ্যেকার কথার নিয়ম হিসেবে, মূল নির্দেশে একমত: সবচেয়ে সুন্দর সত্য কথাটা, বিশেষত যেখানে আবেগ চড়ে থাকে আর একই রকমে জবাব দেওয়ার টান সবচেয়ে জোরালো।"
          },
          {
            "en": "And the verse locates the enemy for us, so we do not mistake him. It is not the person disagreeing, however wrongly, but the one who profits from the disagreement. That reframing is itself a mercy: it lifts the heat off the human being in front of us and sets it where it belongs. What Allah then knows of each servant, and how He deals with them, the surah takes up in the words that follow. Here the servant is handed only his own task, and it is a small, daily one — the better word.",
            "bn": "আর আয়াতটি দুশমনকে আমাদের জন্য চিনিয়ে দেয়, যাতে আমরা তাকে ভুল না করি। যে মতভেদ করছে সে দুশমন নয়, যত ভুলভাবেই করুক, বরং দুশমন সেই, যে মতভেদ থেকে ফায়দা তোলে। এই দৃষ্টিভঙ্গি বদলে দেওয়াটাই এক রহমত। এটি সামনের মানুষটার ওপর থেকে গরমটা সরিয়ে নেয়, আর যেখানে ওটার জায়গা সেখানে বসিয়ে দেয়। প্রত্যেক বান্দা সম্পর্কে আল্লাহ কী জানেন আর তাদের সাথে তিনি কেমন আচরণ করেন, সূরাটি তা তুলে ধরে পরের কথাগুলোয়। এখানে বান্দার হাতে শুধু তার নিজের কাজটুকু দেওয়া, আর তা ছোট, রোজকার একটা কাজ: উত্তম কথাটা।"
          }
        ]
      }
    ]
  },
  "17:60": {
    "sections": [
      {
        "h": {
          "en": "A Lord Who Encompasses",
          "bn": "যিনি সবাইকে ঘিরে আছেন"
        },
        "p": [
          {
            "en": "The verse opens with a reminder set inside a reminder: 'when We told you, Indeed your Lord has encompassed the people.' At-Tabari reads the encompassing as power — the people sit in Allah's grip and cannot step outside His will — and hears in it a charge to the Prophet ﷺ to carry the message and fear nobody. As-Sa'di widens it to knowledge and power together: there is no refuge to flee to, no shelter to hide in, from Him who has encompassed all people.",
            "bn": "আয়াতটি শুরু হয় স্মরণের ভেতরে আরেক স্মরণ দিয়ে: 'যখন আমি তোমাকে বলেছিলাম, তোমার রবব মানুষদেরকে ঘিরে রেখেছেন।' তাবারী এই ঘিরে রাখাকে বোঝেন কুদরত হিসেবে। মানুষ আল্লাহর মুঠোর ভেতর, তাঁর ইচ্ছার বাইরে বেরোনোর সাধ্য তাদের নেই। এর ভেতরেই তিনি শোনেন নবী ﷺ-এর প্রতি এক নির্দেশ, কাউকে ভয় না করে বার্তা পৌঁছে দেওয়ার। সাদী একে আরও চওড়া করেন, ইলম আর কুদরত দুই মিলিয়ে। যিনি সব মানুষকে ঘিরে রেখেছেন, তাঁর থেকে পালানোর কোনো আশ্রয় নেই, লুকানোর কোনো ঠাঁই নেই।"
          },
          {
            "en": "The commentators do not all press the word the same way. Al-Kalbi, cited by al-Qurtubi, makes it encompassing in knowledge; al-Hasan, Urwah and Qatadah make it protection — He has fenced the Arabs off from killing you until the message is delivered. Ibn Abbas, in al-Qurtubi's report, takes 'the people' as the people of Mecca and the encompassing as their coming destruction, fulfilled at Badr and the Conquest. One phrase wears several true faces: reassurance to the Messenger, warning to the deniers, and a wall around a life that still had work to finish.",
            "bn": "শব্দটিকে সব তাফসীরকার একইভাবে চাপ দেন না। কুরতুবীর উদ্ধৃত কালবীর মতে এ হলো ইলমে ঘিরে রাখা। হাসান, উরওয়া ও কাতাদার মতে এ হলো হিফাযত, বার্তা পৌঁছানো পর্যন্ত আরবদের হাত থেকে তোমাকে আগলে রাখা। কুরতুবীর বর্ণনায় ইবন আব্বাস 'মানুষ' বলতে বোঝেন মক্কার লোকদের, আর ঘিরে রাখা মানে তাদের আসন্ন ধ্বংস, যা বদর ও মক্কা বিজয়ে সত্য হলো। এক কথা কয়েকটি সত্য চেহারা পরে আছে: রাসূলের জন্য সান্ত্বনা, অস্বীকারকারীদের জন্য হুঁশিয়ারি, আর যে জীবনের সামনে তখনো কাজ বাকি তার চারপাশে এক প্রাচীর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sight That Sifted",
          "bn": "যে দর্শন যাচাই করল"
        },
        "p": [
          {
            "en": "Then the pivot: 'We did not make the sight which We showed you except as a trial for the people.' The overwhelming majority of the early authorities — Ibn Abbas, and after him Aisha, Muawiyah, al-Hasan, Mujahid, Qatadah, Saeed ibn Jubayr and others named by al-Qurtubi — read this sight as what the Prophet ﷺ was shown on the Night Journey, when he was carried to the Farthest Mosque. At-Tabari calls this the soundest of the readings. The weight of the verse falls not on the journey itself but on what the telling of it did to those who heard.",
            "bn": "তারপর মোড় ঘোরে: 'আমি তোমাকে যে দৃশ্য দেখিয়েছি তা কেবল মানুষের জন্য পরীক্ষা হিসেবেই রেখেছি।' প্রাচীন যুগের অধিকাংশ ইমাম, ইবন আব্বাস আর তাঁর পরে আয়েশা, মুআবিয়া, হাসান, মুজাহিদ, কাতাদা, সাঈদ ইবন জুবায়ের প্রমুখ, যাঁদের নাম কুরতুবী তুলে ধরেন, এই দৃশ্যকে বোঝেন সেই মিরাজের রাতের দর্শন হিসেবে, যখন নবী ﷺ-কে বায়তুল মুকাদ্দাস পর্যন্ত নিয়ে যাওয়া হয়। তাবারী একে বলেন মতগুলোর মধ্যে সবচেয়ে সঠিক। আয়াতের ভার সফরটার ওপর নয়, বরং সেই খবর শোনানো যাদের ওপর যা করল তার ওপর পড়ে।"
          },
          {
            "en": "A fitnah, in the Arabic of the tafsir, is a test that separates. Ibn Kathir explains that when the news reached Mecca, some who had been on the truth could not make their hearts and minds hold it, so they denied what their knowledge could not encompass and fell away, while Allah made the same news a firmness and certainty for others. Ma'arif al-Qur'an lists the senses the word can carry — going astray, trial, upheaval — and settles, with the early authorities, on the trial of apostasy that the report provoked.",
            "bn": "তাফসীরের ভাষায় ফিতনা মানে এমন পরীক্ষা যা আলাদা করে দেয়। ইবন কাসীর বলেন, খবরটা মক্কায় পৌঁছালে হকের ওপর থাকা কিছু লোক তা অন্তরে ধরে রাখতে পারল না। যা তাদের জ্ঞান ঘিরে ধরতে পারল না তা তারা অস্বীকার করে সরে গেল, অথচ সেই একই খবর আল্লাহ অন্যদের জন্য বানালেন দৃঢ়তা আর ইয়াকীন। মাআরিফুল কুরআন শব্দটির নানা অর্থ সাজিয়ে দেয়, পথভ্রষ্টতা, পরীক্ষা, উথালপাথাল, শেষে প্রাচীনদের সঙ্গে থেমে বলে, এ ছিল সেই মুরতাদ হওয়ার পরীক্ষা যা খবরটা টেনে আনল।"
          }
        ]
      },
      {
        "h": {
          "en": "Vision, Not a Dream",
          "bn": "স্বপ্ন নয়, চোখে দেখা"
        },
        "p": [
          {
            "en": "One reading had to be closed off. Some, al-Qurtubi notes, took the 'sight' to be a dream in sleep. He answers that the verse itself rules this out: a dream carries no trial in it, and no one would think to deny another man's dream. Ma'arif al-Qur'an makes the same argument from the wording — had it been a dream, there was no reason for anyone to apostatise, since dreams are dreams that all people see. The word was chosen, it says, precisely to signal a marvel witnessed while awake.",
            "bn": "একটি ব্যাখ্যা বন্ধ করে দেওয়া দরকার ছিল। কুরতুবী জানান, কেউ কেউ এই 'দৃশ্য'-কে ঘুমের স্বপ্ন ধরেছিলেন। তিনি জবাব দেন, আয়াত নিজেই এ কথা নাকচ করে। স্বপ্নে তো কোনো পরীক্ষা নেই, আর কারও স্বপ্নকে অস্বীকার করতে কেউ যায় না। মাআরিফুল কুরআন একই যুক্তি টানে শব্দ থেকে। স্বপ্ন হলে কারও মুরতাদ হওয়ার কারণ থাকত না, কারণ স্বপ্ন তো সবাই দেখে। তাই বলে, এই শব্দটি বেছে নেওয়া হয়েছে জেগে থেকে দেখা এক বিস্ময় বোঝাতেই।"
          },
          {
            "en": "Two further readings are recorded and then weighed down. Al-Baghawi and a narration from Ibn Abbas tie the sight to the Prophet's ﷺ true vision of entering Mecca, fulfilled after Hudaybiyyah; al-Qurtubi marks this weak, since the surah is Meccan while that vision belonged to Medina. A third narration, from Sahl ibn Saad and others, has the Prophet ﷺ shown certain men leaping upon his pulpit. Ibn Atiyyah found this reading questionable, and it will need its own careful handling below.",
            "bn": "আরও দুটি ব্যাখ্যা লিপিবদ্ধ হয়, তারপর ভার কমিয়ে দেওয়া হয়। বাগাভী আর ইবন আব্বাসের এক বর্ণনা এই দৃশ্যকে জোড়ে নবী ﷺ-এর সেই সত্য স্বপ্নের সঙ্গে, যেখানে তিনি মক্কায় প্রবেশ করছেন, যা হুদায়বিয়ার পরে সত্য হয়। কুরতুবী একে দুর্বল বলেন, কারণ সূরাটি মক্কী, অথচ সেই স্বপ্ন মদীনার। তৃতীয় এক বর্ণনায়, সাহল ইবন সাদ প্রমুখ থেকে, নবী ﷺ-কে দেখানো হয় কিছু লোক তাঁর মিম্বারে লাফাচ্ছে। ইবন আতিয়া এই ব্যাখ্যাকে প্রশ্নবিদ্ধ মনে করেন, আর নিচে একে আলাদা করে সাবধানে ধরতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Tree in the Fire",
          "bn": "আগুনের ভেতরের গাছ"
        },
        "p": [
          {
            "en": "The verse pairs the sight with 'the accursed tree in the Qur'an.' Ibn Abbas, in the report al-Bukhari records, and the authorities who followed him, identify it plainly: it is the tree of Zaqqum. As-Sa'di places it 'growing at the root of the Blaze,' and at-Tabari chooses this reading as the sound one, citing the agreement of the authorities of interpretation. Telling people of a tree that lives inside the Fire was itself a strain on belief, one more thing the mind was asked to accept on the word of the Messenger.",
            "bn": "আয়াত দৃশ্যটির সঙ্গে জোড়ে 'কুরআনে উল্লেখিত অভিশপ্ত গাছ'। বুখারীর লিপিবদ্ধ বর্ণনায় ইবন আব্বাস আর তাঁকে অনুসরণকারী ইমামরা একে সাফ চিনিয়ে দেন: এ হলো জাক্কুম গাছ। সাদী একে রাখেন 'জাহান্নামের তলদেশে জন্মানো' গাছ হিসেবে, আর তাবারী তাফসীরের ইমামদের ইজমার কথা টেনে একেই সঠিক মত বলে বেছে নেন। আগুনের ভেতরে বেঁচে থাকা এক গাছের কথা শোনানো নিজেই ছিল বিশ্বাসের ওপর এক চাপ, রাসূলের কথার ওপর মেনে নিতে বলা আরও একটি জিনিস।"
          },
          {
            "en": "The narration sits directly on the verse. Al-Bukhari records from Ibn Abbas, on the words 'the vision which We showed you,' that 'it was an actual eyewitness which was shown to Allah's Messenger ﷺ during the night he was taken on a journey; and the cursed tree is the tree of Az-Zaqqum.' At-Tirmidhi records the same report and graded it sound. It is the one hadith the commentators lean on here, and it fixes both halves of the verse at once: a waking sight, and a real tree named in the Qur'an.",
            "bn": "বর্ণনাটি সরাসরি এই আয়াতের ওপর বসে। বুখারী ইবন আব্বাস থেকে লিপিবদ্ধ করেন, 'আমি তোমাকে যে দৃশ্য দেখিয়েছি' কথাটি নিয়ে, যে 'এ ছিল চোখে দেখা এক প্রত্যক্ষ দর্শন, যা রাসূলুল্লাহ ﷺ-কে দেখানো হয়েছিল সেই রাতে যখন তাঁকে রাত্রিভ্রমণে নেওয়া হয়; আর অভিশপ্ত গাছ হলো জাক্কুম গাছ।' তিরমিযীও একই বর্ণনা এনে একে সহীহ বলেছেন। এখানে তাফসীরকারেরা এই একটি হাদীসের ওপরই নির্ভর করেন, আর তা আয়াতের দুই অংশকেই একসঙ্গে থিতু করে দেয়: জেগে দেখা এক দৃশ্য, আর কুরআনে নাম-ধরা এক সত্যিকারের গাছ।"
          },
          {
            "en": "A careful point about the word 'accursed.' Al-Qurtubi observes that the Qur'an nowhere pronounces a curse on this tree as such; rather Allah cursed the disbelievers who eat from it, so the phrase means the tree whose eaters are accursed. He and al-Baghawi add that the Arabs called any harmful, repugnant food 'accursed.' A minority reading, related from Ibn Abbas, took the tree to be the kashuth, a creeper that winds over trees and dries them out; the majority stayed with Zaqqum.",
            "bn": "'অভিশপ্ত' শব্দটি নিয়ে একটি সূক্ষ্ম কথা। কুরতুবী খেয়াল করান, কুরআন কোথাও এই গাছটিকে সরাসরি অভিশাপ দেয়নি। বরং আল্লাহ অভিশাপ দিয়েছেন সেই কাফিরদের, যারা তা খায়। তাই কথাটার অর্থ, যে গাছের ভক্ষণকারীরা অভিশপ্ত। তিনি ও বাগাভী যোগ করেন, আরবরা যেকোনো ক্ষতিকর, ঘৃণ্য খাবারকে 'অভিশপ্ত' বলত। ইবন আব্বাস থেকে বর্ণিত এক সংখ্যালঘু মত গাছটিকে ধরে কাশূস, এমন এক লতা যা গাছের ওপর জড়িয়ে তাকে শুকিয়ে মারে। তবে অধিকাংশ জাক্কুমেই থিতু থাকেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How a Tree Became a Test",
          "bn": "গাছ যেভাবে পরীক্ষা হলো"
        },
        "p": [
          {
            "en": "Why should a tree divide people? Because of how the deniers met the news. Al-Baghawi and at-Tabari record that when they were warned of Zaqqum, Abu Jahl scoffed: Muhammad threatens you with a fire that burns stones, then claims a tree grows in it — and you know fire burns trees. Al-Qurtubi carries the same taunt and the man's next move: he called for dates and butter and told his companions, 'Zaqqum yourselves with this,' making a joke of the warning to blunt its edge.",
            "bn": "একটি গাছ মানুষকে ভাগ করবে কেন? কারণ অস্বীকারকারীরা খবরটা যেভাবে নিল। বাগাভী ও তাবারী লিপিবদ্ধ করেন, জাক্কুমের ভয় দেখানো হলে আবু জাহল টিটকারি দিল: মুহাম্মদ তোমাদের এমন আগুনের ভয় দেখায় যা পাথর পোড়ায়, তারপর দাবি করে তাতে গাছ জন্মায়, অথচ তোমরা জানো আগুন গাছ পোড়ায়। কুরতুবী একই বিদ্রূপ আর লোকটির পরের কাজ তুলে ধরেন। সে খেজুর আর মাখন আনিয়ে সঙ্গীদের বলল, 'এই দিয়ে জাক্কুম খাও', ভয়টাকে ঠাট্টায় নামিয়ে তার ধার ভোঁতা করতে।"
          },
          {
            "en": "The mockery had a second mouth. Al-Baghawi names Abdullah ibn az-Zibara, who said, 'Muhammad frightens us with Zaqqum, and we know no Zaqqum but butter and dates' — in the tongue of Yemen, al-Qurtubi explains, that is what the word meant. Both men may have said it. The lesson the commentators draw is not about them alone: a report from the unseen, met by a heart already set against it, becomes an occasion for ridicule, and the ridicule hardens the heart further into what it had chosen.",
            "bn": "বিদ্রূপের দ্বিতীয় মুখও ছিল। বাগাভী নাম নেন আবদুল্লাহ ইবন আয-যিবারার, যে বলল, 'মুহাম্মদ আমাদের জাক্কুমের ভয় দেখায়, অথচ আমরা মাখন আর খেজুর ছাড়া কোনো জাক্কুম চিনি না।' কুরতুবী বলেন, ইয়ামানের ভাষায় শব্দটার অর্থ তা-ই ছিল। হয়তো দুজনেই কথাটা বলেছিল। তাফসীরকারদের টানা শিক্ষা শুধু এদের নিয়ে নয়: গায়েবের কোনো খবর যখন আগে থেকেই বেঁকে বসা অন্তরে পৌঁছায়, তা ঠাট্টার উপলক্ষ হয়, আর সেই ঠাট্টা অন্তরকে তার বেছে নেওয়া পথে আরও শক্ত করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Against the Living",
          "bn": "জীবিত কারও বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "This is where the disputed reading must be handled with care. A narration relates that the Prophet ﷺ was shown certain men — named in some reports as a clan — leaping upon his pulpit, and a few reporters read 'the accursed tree' as a lineage rather than Zaqqum. Ibn Kathir calls this identification odd and weak, and its chain 'very weak,' its narrator abandoned; al-Qurtubi calls it 'a weak, newly-introduced view,' noting the surah is Meccan while the claim would need it to be Medinan, which is not established.",
            "bn": "এখানেই সেই বিতর্কিত মতটিকে সাবধানে ধরতে হয়। এক বর্ণনায় আছে, নবী ﷺ-কে দেখানো হয় কিছু লোক, কোনো বর্ণনায় যাদের এক গোত্র বলা হয়, তাঁর মিম্বারে লাফাচ্ছে, আর অল্প কয়েকজন বর্ণনাকারী 'অভিশপ্ত গাছ'-কে জাক্কুম নয়, বরং এক বংশ ধরেছেন। ইবন কাসীর এই চিহ্নিতকরণকে বলেন গরীব ও দুর্বল, আর এর সনদকে 'অত্যন্ত দুর্বল', এর বর্ণনাকারী পরিত্যক্ত। কুরতুবী একে বলেন 'এক দুর্বল, নতুন গজানো মত', মনে করিয়ে দেন সূরাটি মক্কী, অথচ এ দাবির জন্য একে মদীনী হতে হয়, যা প্রমাণিত নয়।"
          },
          {
            "en": "So this article holds to what the sources establish and refuses what they grade away. The verse names a tree in the Fire and a sight shown to the Prophet ﷺ, and it condemns the deniers who mocked them. It describes what the text describes and licenses nothing against any living person, family or community. Ibn Kathir and at-Tabari both settled on Zaqqum by the agreement of the authorities; a report about any lineage that the scholars themselves graded weak cannot be turned, in our own voice, into a verdict on anyone alive.",
            "bn": "তাই এই লেখা যা সূত্রে প্রতিষ্ঠিত তাতেই আঁকড়ে থাকে, আর যা তারা দুর্বল বলে সরিয়ে দেয় তা বর্জন করে। আয়াত নাম নেয় আগুনের ভেতরের এক গাছের আর নবী ﷺ-কে দেখানো এক দৃশ্যের, আর নিন্দা করে সেই অস্বীকারকারীদের যারা এগুলো নিয়ে ঠাট্টা করেছিল। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, আর জীবিত কোনো মানুষ, পরিবার বা জনগোষ্ঠীর বিরুদ্ধে এ কিছুরই অনুমতি দেয় না। ইবন কাসীর ও তাবারী দুজনেই ইমামদের ইজমায় জাক্কুমেই থিতু হয়েছেন। কোনো বংশ নিয়ে যে বর্ণনাকে আলিমরা নিজেরাই দুর্বল বলেছেন, তাকে আমাদের নিজের মুখে জীবিত কারও বিরুদ্ধে রায় বানানো যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Warning Hardens",
          "bn": "ভয় যখন কঠিন করে"
        },
        "p": [
          {
            "en": "The verse ends with a law of the heart: 'We threaten them, but it increases them not except in great transgression.' Ibn Kathir reads the threatening as Allah's warnings of punishment and reckoning, and the increase as the deniers being pushed further into their disbelief and misguidance — and he traces the cause to Allah's forsaking of those who had first forsaken Him. The same rain that softens soft earth bakes hard earth; the same warning that melts a yielding heart drives a stubborn heart deeper into what it fled.",
            "bn": "আয়াত শেষ হয় অন্তরের এক নিয়ম দিয়ে: 'আমি তাদের ভয় দেখাই, কিন্তু তা তাদের চরম অবাধ্যতাই বাড়ায়।' ইবন কাসীর এই ভয় দেখানোকে বোঝেন আল্লাহর শাস্তি ও হিসাবের হুঁশিয়ারি হিসেবে, আর বৃদ্ধি মানে অস্বীকারকারীদের তাদের কুফর ও গোমরাহিতে আরও ঠেলে দেওয়া। এর কারণ তিনি খুঁজে পান আল্লাহর সেই পরিত্যাগে, যারা আগে তাঁকে ছেড়েছিল তাদের তিনি ছেড়ে দেন। যে বৃষ্টি এক মাটিকে নরম করে, তা-ই আরেক মাটিকে শক্ত করে ফেলে। যে হুঁশিয়ারি এক অন্তরকে ফেরায়, তা আরেক অন্তরকে আরও গভীরে ঠেলে দেয়।"
          },
          {
            "en": "As-Sa'di reads the closing words as the furthest reach of a heart in love with evil: warned, and growing only in tyranny and defiance. Yet he finds in the same verse a mercy hidden in restraint. This, he says, is why revelation states the great matters of the unseen in general terms rather than spelling out every overwhelming detail, for minds that have seen nothing like them might have stumbled had they been told in advance. Warning is measured out; it is meant to save, not to break.",
            "bn": "সাদী এই শেষ কথাগুলো পড়েন মন্দের প্রেমে পড়া অন্তরের শেষ সীমা হিসেবে, ভয় পেয়েও কেবল জুলুম আর বিদ্রোহেই বাড়া। তবু সেই একই আয়াতে তিনি খুঁজে পান সংযমে লুকানো এক রহমত। এ কারণেই, তিনি বলেন, ওহী গায়েবের বড় বিষয়গুলো সাধারণ কথায় বলে, প্রতিটি বিস্ময়কর খুঁটিনাটি খুলে না দিয়ে। যে মন এমন কিছু আগে দেখেনি, আগেভাগে বলে দিলে সে হয়তো হোঁচট খেত। ভয় দেখানো মেপে দেওয়া হয়, এ ভাঙার জন্য নয়, বাঁচানোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Hearts, One Report",
          "bn": "এক খবর, দুই হৃদয়"
        },
        "p": [
          {
            "en": "The whole verse turns on a single fact: the same news reached different hearts and sorted them. Al-Qurtubi preserves the image of the other response. When Abu Bakr was told, the morning after the Night Journey, that his companion claimed to have reached Jerusalem and returned in a night, he answered, 'If he said it, he has spoken the truth' — and asked only to have it described. He believed the report on the strength of who carried it, and by that he was named as-Siddiq, the one who affirms the truth.",
            "bn": "গোটা আয়াত ঘোরে একটি সত্যের চারপাশে: একই খবর ভিন্ন অন্তরে পৌঁছে তাদের আলাদা করে দিল। কুরতুবী অন্য জবাবটার ছবিও রেখে দেন। মিরাজের পরের সকালে আবু বকর (রাঃ)-কে যখন বলা হলো, তাঁর সঙ্গী দাবি করছেন এক রাতে বায়তুল মুকাদ্দাস গিয়ে ফিরে এসেছেন, তিনি বললেন, 'তিনি যদি এ বলে থাকেন, তবে সত্যই বলেছেন', আর শুধু বর্ণনাটা শুনতে চাইলেন। যিনি খবর বহন করেছেন তাঁর জোরেই তিনি খবরটা মেনে নিলেন, আর এতেই তাঁর নাম হলো সিদ্দীক, সত্যের সমর্থক।"
          },
          {
            "en": "That is the trial the verse leaves with the reader. Revelation still tells us of things the eye has not seen — the Fire, the tree, the scale, the meeting with our Lord. The mind cannot draw them, and it was never asked to. It was asked to trust the Lord who spoke. When the next hard truth arrives and your reason cannot picture it, you stand where those first hearers stood: soften and affirm, or scoff and harden. The sieve is still working, and each of us comes down on a side of it.",
            "bn": "এটাই সেই পরীক্ষা যা আয়াত পাঠকের হাতে রেখে যায়। ওহী আজও আমাদের এমন সব কিছুর খবর দেয় যা চোখ দেখেনি, জাহান্নাম, সেই গাছ, মিযান, রবের সঙ্গে সাক্ষাৎ। মন এগুলোর ছবি আঁকতে পারে না, আর তাকে কখনো তা করতে বলাও হয়নি। তাকে বলা হয়েছে, যিনি বলেছেন তাঁকে বিশ্বাস করতে। পরের কঠিন সত্য যখন আসে আর যুক্তি তার ছবি আঁকতে পারে না, তখন আপনি সেই প্রথম শ্রোতাদের জায়গায় দাঁড়ান: নরম হয়ে মেনে নিন, নাকি ঠাট্টা করে শক্ত হয়ে যান। চালুনি আজও চলছে, আর আমরা প্রত্যেকে এর কোনো এক পাশে গিয়ে পড়ি।"
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
  "17:71": {
    "sections": [
      {
        "h": {
          "en": "Called on That Day",
          "bn": "সেদিনের সেই ডাক"
        },
        "p": [
          {
            "en": "After honouring the children of Adam and carrying them over land and sea, the surah lifts its gaze to the end of the road. Remember the Day, it says, when We call every people with their imam. Al-Muyassar reads the whole verse as at once glad tidings and warning: a herald will summon each community together with whoever it followed in the world. The scene opens not on a courtroom's terror but on a name being called, and a crowd rising to answer to it.",
            "bn": "আদম সন্তানকে সম্মান দিয়ে, জলে-স্থলে তাদের বহন করার পর সূরাটি চোখ তোলে পথের শেষপ্রান্তের দিকে। আয়াত বলছে, স্মরণ করো সেই দিনকে, যেদিন আমি প্রতিটি সম্প্রদায়কে তাদের ইমামসহ ডাকব। মুয়াসসার গোটা আয়াতটিকে একসঙ্গে সুসংবাদ ও সতর্কবাণী হিসেবে পড়েন। ঘোষক প্রতিটি জাতিকে ডাকবেন সেই সঙ্গে, দুনিয়ায় তারা যাকে অনুসরণ করত তাকেসহ। দৃশ্যটা খোলে আদালতের আতঙ্ক দিয়ে নয়, বরং একটা নাম ধরে ডাক আর সেই ডাকে ভিড় করে উঠে দাঁড়ানো দিয়ে।"
          },
          {
            "en": "The verse makes three moves in a single breath. First the summons, every people called with their imam. Then a division: whoever is given his record in his right hand. Then a promise about that group — they read their record, and they are not wronged so much as a fatil. Much of the surah before this warned the ungrateful; here the light falls on the people of the right hand. Their portion is joy, and the article that follows stays with them, as the verse does, before the darker hand is ever named.",
            "bn": "আয়াতটি এক নিঃশ্বাসে তিনটি কাজ করে। প্রথমে ডাক, প্রতিটি সম্প্রদায়কে ডাকা হয় তাদের ইমামসহ। এরপর ভাগ: যাকে তার আমলনামা ডান হাতে দেওয়া হয়। এরপর সেই দলটিকে নিয়ে এক প্রতিশ্রুতি, তারা নিজেদের আমলনামা পড়বে, আর তাদের ওপর সুতো পরিমাণও যুলম করা হবে না। এর আগে সূরার অনেকখানি অকৃতজ্ঞদের সতর্ক করেছে। এখানে আলো পড়ে ডান হাতের লোকদের ওপর। তাদের ভাগে আনন্দ, আর এই লেখাও আয়াতের মতোই তাদের সঙ্গেই থাকে, আঁধার হাতটির নাম মুখে আসার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What 'Imam' Means Here",
          "bn": "ইমাম এখানে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators genuinely differ over what imam means, and the difference is old and unforced. Mujahid and Qatadah read it as their prophet: every nation summoned with the messenger sent to it. Ibn Kathir sets this beside another verse — for every nation there is a messenger, and when their messenger comes it is judged with justice (10:47). Some of the early scholars, he notes, saw in this a great honour for the people of hadith, since their imam on that Day would be the Prophet himself.",
            "bn": "ইমাম শব্দের অর্থ নিয়ে তাফসীরকারদের মতভেদ সত্যিকারের, আর এই মতভেদ পুরনো ও স্বাভাবিক। মুজাহিদ ও কাতাদা পড়েন তাদের নবী: প্রতিটি জাতিকে ডাকা হবে তাদের কাছে পাঠানো রাসূলসহ। ইবন কাসীর একে আরেকটি আয়াতের পাশে রাখেন, প্রতিটি জাতির জন্য একজন রাসূল আছেন, আর তাদের রাসূল এলে ন্যায়বিচারে ফয়সালা করা হয় (১০:৪৭)। তিনি বলেন, পূর্বসূরিদের কেউ কেউ এতে হাদীসের অনুসারীদের জন্য বড় সম্মান দেখেছেন, কারণ সেদিন তাদের ইমাম হবেন স্বয়ং নবী ﷺ।"
          },
          {
            "en": "A second group read imam as the record of a person's own deeds. Ibn Abbas, al-Hasan, Abu al-Aliyah and ad-Dahhak took it this way, and Ibn Kathir judged this the strongest reading. He rests it on another verse, where God says He has counted everything in a clear register, imamin mubin (36:12), and on this verse's own next words: whoever is given his record. A book is called an imam, al-Qurtubi explains, because people turn back to it to settle a dispute, as they turn to a leader.",
            "bn": "দ্বিতীয় একটি দল ইমাম বলতে বোঝেন নিজের আমলনামা। ইবন আব্বাস, হাসান, আবুল আলিয়া ও দাহহাক এভাবেই নিয়েছেন, আর ইবন কাসীর এই পাঠটিকেই সবচেয়ে শক্তিশালী মনে করেছেন। তিনি ভিত্তি রাখেন আরেকটি আয়াতের ওপর, যেখানে আল্লাহ বলেন তিনি সবকিছু গুনে রেখেছেন এক সুস্পষ্ট কিতাবে, ইমামিম মুবীন (৩৬:১২), আর এই আয়াতের পরের কথাতেই: যাকে তার আমলনামা দেওয়া হয়। কিতাবকে ইমাম বলা হয়, কুরতুবী ব্যাখ্যা করেন, কারণ বিবাদ মেটাতে মানুষ তার কাছে ফিরে যায়, যেমন ফিরে যায় নেতার কাছে।"
          },
          {
            "en": "Two further readings survive. Ibn Zayd took imam as the scripture revealed to each people: the people of the Torah called by the Torah, the people of the Qur'an by the Qur'an, each asked whether they kept its commands. Ali reportedly read it as the leader of their own age, and al-Baghawi records from Ibn Abbas the same: the imam who summoned them in the world, whether to guidance or astray — God speaks of leaders who guide by His command (21:73) and of leaders who call to the Fire (28:41).",
            "bn": "আরও দুটি পাঠ টিকে আছে। ইবন যায়দ ইমাম বলতে নিয়েছেন প্রতিটি জাতির ওপর নাযিলকৃত কিতাব: তাওরাতের অনুসারীদের ডাকা হবে তাওরাতসহ, কুরআনের অনুসারীদের কুরআনসহ, প্রত্যেককে জিজ্ঞেস করা হবে তারা তার হুকুম মেনেছে কিনা। আলী (রাঃ) থেকে বর্ণিত, তিনি একে পড়েন নিজ যুগের নেতা হিসেবে, আর বাগাভী ইবন আব্বাস থেকে একই কথা আনেন: দুনিয়ায় যে ইমাম তাদের ডেকেছিল, হেদায়েতের দিকে হোক বা গোমরাহির দিকে। আল্লাহ এমন নেতাদের কথা বলেন যাঁরা তাঁর হুকুমে পথ দেখান (২১:৭৩), আবার এমন নেতাদের যারা আগুনের দিকে ডাকে (২৮:৪১)।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Reading the Scholars Chose",
          "bn": "আলিমরা কোন পাঠ বেছেছেন"
        },
        "p": [
          {
            "en": "Here two great commentators part ways, and the verse leaves room for both. At-Tabari weighs the readings and prefers the leader followed in the world, on a plain linguistic ground: in the speech of the Arabs, imam most commonly means whoever is imitated and followed, and that likeliest sense is the default unless proof forces another. Ibn Kathir, weighing the same evidence, prefers the record of deeds, held up by the clear register of 36:12 and by the verse's own turn to the record given in the right hand.",
            "bn": "এখানে দুই মহান তাফসীরকার আলাদা পথে যান, আর আয়াত দুজনের জন্যই জায়গা রাখে। তাবারী পাঠগুলো ওজন করে বেছে নেন দুনিয়ায় অনুসৃত নেতাকে, সোজা ভাষাগত যুক্তিতে: আরবদের ভাষায় ইমাম বলতে সচরাচর বোঝায় যাকে অনুকরণ ও অনুসরণ করা হয়, আর প্রমাণ অন্য অর্থে বাধ্য না করলে সেই বেশি প্রচলিত অর্থই ধরা হয়। ইবন কাসীর একই প্রমাণ ওজন করে বেছে নেন আমলনামাকে, যার সমর্থনে দাঁড়ায় ৩৬:১২-এর সুস্পষ্ট কিতাব আর আয়াতের নিজেরই ডান হাতে দেওয়া আমলনামার দিকে মোড়।"
          },
          {
            "en": "A further view deserves noting for how the tradition itself checks it. Muhammad ibn Ka'b read imam as a plural, meaning people would be summoned by their mothers. Al-Qurtubi records the three reasons some gave for it, then sets against it a report from al-Bukhari and Muslim: on the Day of Resurrection a banner is raised for every treacherous person, and it is said, this is the treachery of so-and-so, son of so-and-so. Being named by the father, he argues, tells against being called by the mother. The plainest sense stays with the imam a people followed.",
            "bn": "আরেকটি মত উল্লেখের দাবি রাখে এ কারণে যে, ঐতিহ্য নিজেই তা যাচাই করে। মুহাম্মদ ইবন কা'ব ইমামকে বহুবচন ধরে পড়েন, অর্থাৎ মানুষকে ডাকা হবে তাদের মায়েদের নামে। কুরতুবী এর পক্ষে দেওয়া তিনটি কারণ উল্লেখ করেন, তারপর তার বিপরীতে রাখেন বুখারী ও মুসলিমের এক বর্ণনা: কিয়ামতের দিন প্রতিটি বিশ্বাসঘাতকের জন্য একটি ঝান্ডা তোলা হবে, আর বলা হবে, এ হলো অমুকের ছেলে অমুকের বিশ্বাসঘাতকতা। বাবার নামে ডাকা, তিনি যুক্তি দেন, মায়ের নামে ডাকার বিপক্ষেই যায়। সবচেয়ে স্পষ্ট অর্থ থেকে যায় সেই ইমামের সঙ্গে, যাকে কোনো সম্প্রদায় অনুসরণ করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sixty Cubits and a Crown",
          "bn": "ষাট হাত আর এক মুকুট"
        },
        "p": [
          {
            "en": "A narration ties the whole scene together, and at-Tirmidhi records it directly under this verse. On the authority of Abu Hurayrah, the Prophet, explaining the Day We call every people with their imam, said: one of them will be called and given his record in his right hand, his body stretched tall, his face turned white, and on his head a crown of pearls that gleams. At-Tirmidhi graded the report hasan gharib — sound but singular in its chain.",
            "bn": "একটি বর্ণনা গোটা দৃশ্যটিকে এক সুতোয় বাঁধে, আর তিরমিযী তা সরাসরি এই আয়াতের অধীনেই উল্লেখ করেন। আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ 'যেদিন আমি প্রতিটি সম্প্রদায়কে তাদের ইমামসহ ডাকব' আয়াতের ব্যাখ্যায় বলেন: তাদের একজনকে ডাকা হবে আর তার আমলনামা ডান হাতে দেওয়া হবে, তার শরীর লম্বা করে দেওয়া হবে, মুখ সাদা করা হবে, আর মাথায় থাকবে ঝলমলে মুক্তার মুকুট। তিরমিযী বর্ণনাটিকে হাসান গারীব বলেছেন, সহীহ তবে সনদে একক।"
          },
          {
            "en": "Ibn Kathir cites the very same hadith through al-Hafiz al-Bazzar, by the same chain of al-Suddi, from his father, from Abu Hurayrah, and notes that al-Bazzar said it is related only through this single route. That candour matters: the report is not concealed behind a claim of mass transmission, and a lone chain is exactly what hasan gharib records. Both Ma'arif al-Qur'an and al-Qurtubi cite the Tirmidhi wording too, so the narration's tie to this verse rests on more than a single book.",
            "bn": "ইবন কাসীর ঠিক একই হাদীস আনেন হাফিজ আল-বাযযারের সূত্রে, একই সনদে, সুদ্দী থেকে তাঁর বাবা থেকে আবু হুরায়রা (রাঃ) থেকে, আর উল্লেখ করেন যে আল-বাযযার বলেছেন এটি কেবল এই একটি সূত্রেই বর্ণিত। এই খোলামেলা স্বীকৃতি জরুরি: বর্ণনাটিকে ব্যাপক বর্ণনার দাবির আড়ালে লুকানো হয় না, আর একক সনদই তো হাসান গারীবের পরিচয়। মাআরিফুল কুরআন ও কুরতুবী দুজনেই তিরমিযীর শব্দ উদ্ধৃত করেন, তাই এই আয়াতের সঙ্গে বর্ণনাটির যোগ কেবল একটি বইয়ের ওপর দাঁড়িয়ে নেই।"
          },
          {
            "en": "Then, the hadith goes on, he walks to his companions, who see him from afar and pray, our Lord, bring him to us and bless us through him; and he reaches them and says, rejoice, for every one of you will have the like of this. The disbeliever, by contrast, is blackened of face and his companions recoil. The report keeps its warning, yet its centre of gravity is the joy of the man holding his own good news in his hand.",
            "bn": "এরপর, বর্ণনা বলে চলে, সে তার সঙ্গীদের কাছে হেঁটে যায়, যারা দূর থেকে তাকে দেখে দোয়া করে, হে আমাদের রব, একে আমাদের কাছে আনুন আর তাকে দিয়ে আমাদের বরকত দিন; সে তাদের কাছে পৌঁছে বলে, আনন্দ করো, তোমাদের প্রত্যেকের জন্য এমনই একটি থাকবে। কাফির তার উল্টো, তার মুখ কালো করা হয় আর তার সঙ্গীরা শিউরে ওঠে। বর্ণনাটি তার সতর্কবাণী ধরে রাখে, তবু এর মূল ভার সেই মানুষের আনন্দে, যে নিজের সুসংবাদ নিজের হাতে ধরে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Record Read in Joy",
          "bn": "আনন্দে পড়া আমলনামা"
        },
        "p": [
          {
            "en": "Why does the verse say they read their record, rather than that they receive it? Ibn Kathir answers from the heart of it: out of their gladness and delight at the good deeds recorded there, they read it and love to read it. As-Sa'di draws the two halves of the verse together — this is the person who followed his guiding imam and was steered by his book, so his good deeds grew many and his failings few. The right hand is not an accident of that Day; it is the harvest of a life spent behind a true guide.",
            "bn": "আয়াত কেন বলে তারা তাদের আমলনামা পড়বে, না বলে শুধু গ্রহণ করবে? ইবন কাসীর জবাব দেন একেবারে ভেতর থেকে: সেখানে লেখা ভালো কাজ দেখে আনন্দ ও খুশিতে তারা তা পড়ে, আর পড়তেই ভালোবাসে। সা'দী আয়াতের দুই অংশকে এক করে দেখান, এ সেই মানুষ যে তার পথপ্রদর্শক ইমামকে অনুসরণ করেছে আর তার কিতাবে পরিচালিত হয়েছে, ফলে তার নেকি বেড়েছে আর গুনাহ কমেছে। ডান হাত সেদিনের কোনো আকস্মিক ঘটনা নয়, তা সত্য পথপ্রদর্শকের পেছনে কাটানো এক জীবনের ফসল।"
          },
          {
            "en": "Ma'arif al-Qur'an notes that the happy believer does not read in silence — he calls others to read it too, the way a man shares a letter that clears his name. His joy, it adds, is the joy of faith kept intact and of rescue from lasting punishment, even if some deeds still await their account. The same delight rings in another passage, where the man given his record in the right hand cries out, here, read my record (69:19). On this Day, the good is not hidden away; it is announced. The believer's shame, if any remained, is covered; only the good is read out.",
            "bn": "মাআরিফুল কুরআন লক্ষ করে, খুশি মুমিন চুপচাপ পড়ে না, সে অন্যদেরও ডেকে পড়তে বলে, যেমন কেউ নিজের নাম পরিষ্কার করে দেওয়া চিঠি সবাইকে দেখায়। তার এই আনন্দ, বলে সে, ঈমান অটুট থাকার আর স্থায়ী শাস্তি থেকে রক্ষা পাওয়ার আনন্দ, যদিও কিছু আমলের হিসাব হয়তো তখনো বাকি। একই খুশি বাজে আরেকটি আয়াতেও, যেখানে ডান হাতে আমলনামা পাওয়া মানুষ চিৎকার করে বলে, এই নাও, আমার আমলনামা পড়ো (৬৯:১৯)। এই দিনে ভালোকে লুকিয়ে রাখা হয় না, ঘোষণা করা হয়। মুমিনের লজ্জা, যদি কিছু বাকিও থাকে, ঢেকে দেওয়া হয়; কেবল ভালোটুকুই সরবে পড়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Thread's Worth",
          "bn": "সুতো পরিমাণও নয়"
        },
        "p": [
          {
            "en": "The verse ends with a startlingly small measure: they are not wronged by so much as a fatil. At-Tabari, al-Qurtubi and Ibn Kathir all give the same picture — the fatil is the fine, twisted thread that lies in the long groove on the face of a date-stone. Split a date-pit and look: that hair-thin fibre is the byword the Arabs reached for when they meant the most negligible thing imaginable. Not even that much of anyone's due, the verse says, will be shaved off. The image is deliberately homely, a thing you could pinch between your fingers, so that the scale of God's precision is unmistakable.",
            "bn": "আয়াত শেষ হয় বিস্ময়করভাবে ছোট এক মাপ দিয়ে: তাদের ওপর সুতো পরিমাণও যুলম করা হবে না। তাবারী, কুরতুবী ও ইবন কাসীর সবাই একই ছবি আঁকেন, ফাতীল হলো খেজুরের আঁটির উপরিভাগের লম্বা ফাটলে পড়ে থাকা সরু, পাকানো সুতোটি। একটা খেজুরের আঁটি চিরে দেখুন: সেই চুল-পরিমাণ আঁশটাই ছিল আরবদের সবচেয়ে তুচ্ছ জিনিস বোঝানোর প্রবাদ। কারও প্রাপ্য থেকে ততটুকুও কেটে নেওয়া হবে না, বলে আয়াত। ছবিটা ইচ্ছে করেই ঘরোয়া, আঙুলে চিমটে ধরার মতো এক জিনিস, যাতে আল্লাহর নিখুঁত হিসাবের মাপটা ভুল বোঝার উপায় না থাকে।"
          },
          {
            "en": "For the people of the right hand, this measure works in a single direction. As-Sa'di is precise: they are not wronged of a fatil of the good they did. Al-Baghawi and al-Muyassar say the same — not the smallest fraction of their reward will be diminished. Justice here does not mean a cold ledger balanced to the last entry; it means that every hidden kindness, every unseen struggle, every prayer nobody witnessed is weighed and paid in full. Nothing good is lost in God's keeping. That is why the reading is joy and not dread.",
            "bn": "ডান হাতের লোকদের জন্য এই মাপ কাজ করে একদিকেই। সা'দী নিখুঁতভাবে বলেন: তারা যে ভালো কাজ করেছে, তার সুতো পরিমাণও তাদের থেকে কমানো হবে না। বাগাভী ও মুয়াসসার একই কথা বলেন, তাদের প্রতিদানের ক্ষুদ্রতম অংশটুকুও কমবে না। এখানে ন্যায়বিচার মানে শেষ হিসাব পর্যন্ত মেলানো কোনো নিরস খাতা নয়। এর মানে, প্রতিটি গোপন দয়া, প্রতিটি অদেখা সংগ্রাম, কেউ দেখেনি এমন প্রতিটি নামাজ ওজন করা হয় আর পুরোপুরি শোধ করা হয়। আল্লাহর হেফাজতে ভালো কিছুই হারায় না। তাই পড়াটা আনন্দের, ভয়ের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hand the Verse Names",
          "bn": "আয়াত যে হাতের কথা বলে"
        },
        "p": [
          {
            "en": "It is worth noticing what this verse does not say. It names only the people of the right hand and stops there; the left hand is left for other passages to describe. Ma'arif al-Qur'an points out that, across the Qur'an, it is the disbelievers who receive their record in the left hand, while those who take it in the right are the people of faith, whether steady or stumbling. Ibn Kathir sets our verse beside a fuller scene where both hands appear side by side (69:19), but here the verse deliberately keeps its light on the joyful hand.",
            "bn": "খেয়াল করার মতো এটাও যে, এ আয়াত কী বলে না। এটি শুধু ডান হাতের লোকদের নাম নেয় আর সেখানেই থামে; বাঁ হাতের বর্ণনা অন্য আয়াতগুলোর জন্য রেখে দেয়। মাআরিফুল কুরআন দেখিয়ে দেয়, গোটা কুরআনজুড়ে বাঁ হাতে আমলনামা পায় কাফিররা, আর যারা ডান হাতে পায় তারা ঈমানদার, স্থির হোক বা পদস্খলিত। ইবন কাসীর আমাদের আয়াতটিকে রাখেন এমন এক পূর্ণাঙ্গ দৃশ্যের পাশে যেখানে দুই হাত পাশাপাশি আসে (৬৯:১৯), তবে এখানে আয়াত ইচ্ছে করেই তার আলো রাখে আনন্দের হাতটির ওপর।"
          },
          {
            "en": "This restraint carries a caution. The verse assigns no living person to either hand, and neither may we. It does not hand us a test for sorting our neighbours into the saved and the doomed; the disbeliever it warns of is a matter left to God, who alone reads the heart. What the verse does is turn the listener's eye inward — not to rank others, but to ask which hand his own life is reaching toward. The summons is public, but the reckoning it points to is deeply personal.",
            "bn": "এই সংযমের সঙ্গে আসে একটা সতর্কতা। আয়াত কোনো জীবিত মানুষকে কোনো হাতে বসায় না, আমাদেরও তা করার অধিকার নেই। এটি প্রতিবেশীদের নাজাতপ্রাপ্ত আর ধ্বংসপ্রাপ্তে ভাগ করার কোনো মাপকাঠি হাতে ধরিয়ে দেয় না; যে কাফিরের কথা এটি সতর্ক করে, তার ফয়সালা আল্লাহর হাতে, যিনি একাই অন্তর পড়েন। আয়াত যা করে তা হলো শ্রোতার চোখ ভেতরের দিকে ফেরানো, অন্যকে বিচার করতে নয়, বরং জিজ্ঞেস করতে যে তার নিজের জীবন কোন হাতের দিকে হাত বাড়াচ্ছে। ডাকটা সর্বসমক্ষে, কিন্তু সেটি যে হিসাবের দিকে ইশারা করে তা গভীরভাবে ব্যক্তিগত।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Your Imam Now",
          "bn": "এখনই নিজের ইমাম বাছা"
        },
        "p": [
          {
            "en": "If the summons on that Day is by the imam a people followed, then the most practical question the verse asks is present-tense: whom am I following now? As-Sa'di's link makes it plain — the hand that receives the record is set by the guide the life was spent behind. A person is always following something: a teacher, a crowd, an appetite, a book. The verse quietly asks whether that leader is bound for the right hand or away from it, and it asks while there is still time to change guides.",
            "bn": "সেদিনের ডাক যদি হয় সেই ইমাম ধরে, যাকে কোনো সম্প্রদায় অনুসরণ করেছে, তাহলে আয়াত যে সবচেয়ে বাস্তব প্রশ্নটা তোলে তা বর্তমান কালেই: আমি এখন কাকে অনুসরণ করছি? সা'দীর টানা যোগসূত্রটা কথাটা স্পষ্ট করে দেয়, আমলনামা কোন হাতে আসবে তা ঠিক করে দেয় সেই পথপ্রদর্শক, যার পেছনে জীবনটা কেটেছে। মানুষ সবসময়ই কিছু-না-কিছু অনুসরণ করছে: কোনো শিক্ষক, কোনো দল, কোনো খায়েশ, কোনো বই। আয়াত চুপচাপ জিজ্ঞেস করে, সেই নেতা কি ডান হাতের দিকে চলেছে নাকি তা থেকে দূরে, আর জিজ্ঞেস করে এমন সময়ে যখন গাইড বদলানোর সময় এখনো আছে।"
          },
          {
            "en": "The second half of the answer is being written now, line by line. The record read in joy on that Day is the same record my hands are filling today, in deeds seen and unseen. Nothing true will be left out of it, and nothing good will be shaved away — which is a mercy if the page is worth reading, and a warning if it is not. So the verse turns tomorrow's joy into today's work: follow a guide who leads to the right hand, and write, this week, a line you would be glad to read aloud on the Day you are called.",
            "bn": "জবাবের দ্বিতীয় অংশটা এখনই লেখা হচ্ছে, লাইনে লাইনে। সেদিন আনন্দে যে আমলনামা পড়া হবে, তা তো সেই একই আমলনামা যা আজ আমার হাত ভরে তুলছে, দেখা আর অদেখা আমলে। এর থেকে সত্য কিছুই বাদ যাবে না, ভালো কিছুই কেটে ফেলা হবে না। পাতাটা পড়ার যোগ্য হলে এ এক রহমত, না হলে এক সতর্কবাণী। তাই আয়াত আগামীকালের আনন্দকে আজকের কাজে বদলে দেয়: এমন গাইডকে অনুসরণ করুন যে ডান হাতের দিকে নিয়ে যায়, আর এ সপ্তাহেই এমন একটি লাইন লিখুন যা ডাক পড়ার দিনে সরবে পড়তে আপনি খুশি হবেন।"
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
  "17:90": {
    "sections": [
      {
        "h": {
          "en": "Until a Spring Breaks Open",
          "bn": "যতক্ষণ না ঝর্ণা প্রবাহিত হয়"
        },
        "p": [
          {
            "en": "Wa qalu lan nu'mina laka hatta tafjura lana mina al-ardi yanbu'a: and they said, we will never believe you until you make a spring gush for us from the ground. This verse opens a list that runs to 17:93. After the spring they demand a garden of palms and grapes with rivers driven through it, then the sky brought down on them in fragments, then Allah and the angels marched out before them, then a house of gold, and finally that the Prophet climb into the sky and bring back a book they can read. Six impossible conditions, laid down one after another as the price of belief.",
            "bn": "ওয়া কালূ লান নু'মিনা লাকা হাত্তা তাফজুরা লানা মিনাল আরদি ইয়ামবূআ: তারা বলল, যতক্ষণ না তুমি আমাদের জন্য যমীন ফুঁড়ে ঝর্ণা বের করবে, আমরা কক্ষনো তোমাকে বিশ্বাস করব না। এ আয়াত একটা তালিকার শুরু, যা চলে ১৭:৯৩ পর্যন্ত। ঝর্ণার পর তারা দাবি করে খেজুর ও আঙুরের বাগান যার ফাঁকে ফাঁকে বইবে নদী, তারপর আকাশ টুকরো হয়ে তাদের উপর পড়ুক, তারপর আল্লাহ ও ফেরেশতাদের সামনে হাজির করা হোক, তারপর সোনার ঘর, শেষে নবী ﷺ আকাশে উঠে এমন এক কিতাব নামিয়ে আনুন যা তারা পড়তে পারবে। একের পর এক ছয়টি অসম্ভব শর্ত, ঈমানের দাম হিসেবে সাজিয়ে রাখা।"
          },
          {
            "en": "The hinge of the whole speech is one small word: lan, an emphatic never. They do not say we might believe, or we will consider it; they announce in advance that faith is withheld, and only then attach a condition to it. That order matters. A person genuinely searching asks for what would settle the question and then follows the answer. These speakers have settled the question first and are now naming a price they expect will never be paid. The demands only sound like sincere requests; read with the never in front, they are a refusal wearing the costume of an inquiry.",
            "bn": "গোটা বক্তব্যের আসল কব্জা একটি ছোট শব্দ: লান, জোরালো এক ‘কক্ষনো’। তারা বলে না আমরা হয়তো মানব, কিংবা ভেবে দেখব। তারা আগেই ঘোষণা দেয় যে ঈমান তারা দেবে না, তারপর তার গায়ে শর্ত জুড়ে দেয়। এই ক্রমটাই গুরুত্বপূর্ণ। সত্যিকারের অনুসন্ধানী মানুষ জানতে চায় কীসে প্রশ্নটা মিটবে, তারপর জবাব মেনে চলে। এরা প্রশ্নটা আগেই মিটিয়ে ফেলেছে, আর এখন এমন এক দাম হাঁকছে যা কখনো শোধ হবে না বলেই তারা ধরে নিয়েছে। দাবিগুলো শুনতে অনুরোধের মতো, কিন্তু সামনে ‘কক্ষনো’ বসিয়ে পড়লে বোঝা যায় এ হলো অনুসন্ধানের সাজে সাজানো এক অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "What Yanbu' Actually Names",
          "bn": "ইয়ামবূ শব্দের অর্থ"
        },
        "p": [
          {
            "en": "At-Tabari explains yanbu' as a word built on the pattern yaf'ul from naba'a al-ma', said of water when it appears and gushes up. He records from Qatadah and Mujahid that it means 'uyun, springs, and that the demand was for such springs to be opened in their own town. As-Sa'di reads the request as flowing rivers, and the Muyassar places it plainly in the land of Makkah: a running spring gushing out of the ground. Al-Baghawi agrees the word points to springs and locates the demand in the earth of Makkah itself.",
            "bn": "তাবারী বলেন, ইয়ামবূ শব্দটি ‘নাবাআল মা’ থেকে ইয়াফউল ছাঁচে গড়া, যা বলা হয় পানি যখন বেরিয়ে এসে উপচে ওঠে। তিনি কাতাদা ও মুজাহিদ থেকে বর্ণনা করেন যে এর অর্থ উয়ূন, অর্থাৎ ঝর্ণা, আর দাবিটা ছিল তাদের নিজেদের শহরেই এমন ঝর্ণা খুলে দেওয়ার। সা'দী চাওয়াটাকে পড়েন বহমান নদী হিসেবে, আর মুয়াসসার সোজাসুজি মক্কার মাটিতেই বসায়: যমীন ফুঁড়ে বেরিয়ে আসা এক বহতা ঝর্ণা। বাগাভীও মানেন যে শব্দটি ঝর্ণার দিকেই ইঙ্গিত করে, আর দাবিটাকে রাখেন খোদ মক্কার জমিনে।"
          },
          {
            "en": "The commentators also weigh a difference in recitation. Al-Qurtubi notes that 'Asim, Hamzah and al-Kisa'i read the verb tafjura in its lighter form, and that Abu Hatim preferred this because yanbu' is a single spring, while the second verb in the next verse, tufajjira al-anhar, is read with the heavier form by agreement, since rivers are plural and the doubling signals abundance. At-Tabari favours the same split for the same reason, though he grants the heavier first reading is also sound. It is a small point, yet it shows the care the scholars brought even to how these hostile words were pronounced.",
            "bn": "তাফসীরকারেরা কিরাআতের একটি পার্থক্যও ওজন করেন। কুরতুবী উল্লেখ করেন, আসিম, হামযা ও কিসাঈ ‘তাফজুরা’ ক্রিয়াটি হালকা রূপে পড়েন, আর আবু হাতিম এটাই পছন্দ করেন কারণ ইয়ামবূ একটিমাত্র ঝর্ণা। পরের আয়াতের দ্বিতীয় ক্রিয়া ‘তুফাজ্জিরাল আনহার’ সবাই একমত হয়ে ভারী রূপে পড়েন, কারণ নদী বহুবচন আর দ্বিত্ব প্রাচুর্য বোঝায়। তাবারীও একই কারণে এই ভাগটাই বেছে নেন, যদিও তিনি মানেন প্রথমটির ভারী পাঠও শুদ্ধ। কথাটা ছোট, তবু দেখায় বিরুদ্ধপক্ষের এই কথাগুলোর উচ্চারণ পর্যন্ত আলিমরা কত যত্নে দেখেছেন।"
          },
          {
            "en": "So the object of the demand is not exotic. A spring is water rising from the ground, and rivers are water in motion. Even the reading that treats the single spring as standing for many, as Mujahid takes it, keeps the request inside the ordinary world of wells and channels the people of Makkah knew well. They are not asking for something no eye has seen. They are asking that the familiar arrive on command, at the Prophet's word, as a receipt for his claim. Naming the thing exactly helps, because the next section turns on how ordinary it really was.",
            "bn": "তাই দাবির বিষয়টা মোটেও অদ্ভুত কিছু নয়। ঝর্ণা মানে যমীন থেকে ওঠা পানি, আর নদী মানে চলমান পানি। এমনকি মুজাহিদের সেই পাঠ, যেখানে একটি ঝর্ণা বহু ঝর্ণার প্রতিনিধি, তাতেও চাওয়াটা থেকে যায় কূপ আর জলধারার সেই চেনা জগতে, যা মক্কাবাসীর ভালোই জানা। তারা এমন কিছু চাইছে না যা কোনো চোখ দেখেনি। তারা চাইছে চেনা জিনিসটাই হুকুমমতো হাজির হোক, নবীর ﷺ কথায়, তাঁর দাবির রসিদ হিসেবে। জিনিসটার নাম ঠিকঠাক বলা কাজে দেয়, কারণ পরের অংশটা দাঁড়িয়ে আছে এটা আসলে কতটা সাধারণ তার উপরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Denied Gift",
          "bn": "অস্বীকৃত নিয়ামতেরই দাবি"
        },
        "p": [
          {
            "en": "Here is the strange edge of the demand. Springs, palm gardens, grapes and rivers are exactly the blessings the Qur'an keeps holding up as God's signs, and exactly the blessings these people already enjoy without thanks. Earlier in this very surah the ground, the sky and the rain are named as favours over the children of Adam. To ask the Prophet to produce a spring, then, is to ask for a fresh copy of a gift already lying open in their fields. The miracle they crave is a smaller, staged version of the standing miracle they walk past every morning.",
            "bn": "দাবিটার অদ্ভুত ধারটা এখানেই। ঝর্ণা, খেজুরের বাগান, আঙুর আর নদী তো ঠিক সেই নিয়ামত, যেগুলোকে কুরআন বারবার আল্লাহর নিদর্শন হিসেবে তুলে ধরে, আর ঠিক সেই নিয়ামত, যা এই লোকেরা কোনো শুকরিয়া ছাড়াই ভোগ করছে। এই সূরার আগের অংশেই যমীন, আকাশ আর বৃষ্টিকে আদম-সন্তানের উপর অনুগ্রহ বলা হয়েছে। তাহলে নবীকে ﷺ ঝর্ণা বের করতে বলা মানে এমন এক নিয়ামতের নতুন নকল চাওয়া, যা এমনিতেই তাদের মাঠে খোলা পড়ে আছে। তারা যে মুজিযা চায়, তা রোজ সকালে যে বড় মুজিযার পাশ কাটিয়ে যায় তারই এক ছোট, সাজানো সংস্করণ।"
          },
          {
            "en": "This is why the tafsirs treat the whole list as one gesture rather than six separate wishes. The Muyassar frames it sharply: once the Qur'an had defeated them and they could produce nothing like it, they turned to demanding wonders that fit their own whims. The problem was never a shortage of evidence. They had a book they could not rival, and a land full of the very gifts they were now asking be repeated on cue. What they lacked was the will to read either the book or the field as a sign, and no seventh wonder would have supplied it.",
            "bn": "এ কারণেই তাফসীরকারেরা গোটা তালিকাকে ছয়টি আলাদা চাওয়া না ধরে একটাই ভঙ্গি হিসেবে দেখেন। মুয়াসসার তীক্ষ্ণভাবে বলে: কুরআন যখন তাদের হারিয়ে দিল আর তারা এর মতো কিছুই আনতে পারল না, তখন তারা নিজেদের খেয়ালমতো নানা বিস্ময় দাবি করতে লাগল। সমস্যাটা কখনো প্রমাণের অভাব ছিল না। তাদের হাতে ছিল এমন এক কিতাব যার সমকক্ষ তারা আনতে পারেনি, আর ছিল সেই নিয়ামতে ভরা এক জমিন যা তারা এখন হুকুমমতো আবার চাইছিল। যা তাদের ছিল না তা হলো কিতাব বা মাঠ, কোনোটিকেই নিদর্শন হিসেবে পড়ার ইচ্ছা। আর সপ্তম কোনো বিস্ময়ও সেই ইচ্ছা জোগাত না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Meeting Behind the Ka'ba",
          "bn": "কাবার পেছনে সেই বৈঠক"
        },
        "p": [
          {
            "en": "Al-Qurtubi, al-Baghawi and Ibn Kathir all carry a long account, traced through Ibn Ishaq from 'Ikrimah from Ibn 'Abbas, of an occasion behind these words. The chiefs of Quraysh — among them 'Utbah, Shaybah, Abu Sufyan, al-Walid ibn al-Mughirah, Abu Jahl and 'Abdullah ibn Abi Umayyah — gathered behind the Ka'ba after sunset and sent for the Prophet. They first offered him wealth, leadership or kingship, or a cure if he were possessed. When he refused it all, they moved to demands: shift these mountains, widen our valley, run rivers through it like those of Syria and Iraq, and raise our dead forefathers to confirm you.",
            "bn": "কুরতুবী, বাগাভী ও ইবন কাসীর সকলেই একটি দীর্ঘ বর্ণনা আনেন, যা ইবন ইসহাক সূত্রে ইকরিমা থেকে ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছায়, এই আয়াতের এক প্রেক্ষাপট নিয়ে। কুরাইশ নেতারা, তাদের মধ্যে উতবা ও শায়বা, আবু সুফিয়ান, ওয়ালিদ ইবন মুগীরা, আবু জাহল ও আবদুল্লাহ ইবন আবি উমাইয়া, সূর্যাস্তের পর কাবার পেছনে জড়ো হয়ে নবীকে ﷺ ডেকে পাঠায়। প্রথমে তারা তাঁকে সাধে সম্পদ, নেতৃত্ব কিংবা রাজত্ব, অথবা জিন-আসর হলে চিকিৎসা। তিনি সব ফিরিয়ে দিয়ে বলেন এসবের কিছুই তিনি চান না। তখন তারা দাবিতে নামে: এই পাহাড়গুলো সরিয়ে দাও, আমাদের উপত্যকা প্রশস্ত করো, তাতে সিরিয়া ও ইরাকের নদীর মতো নদী বইয়ে দাও, আর আমাদের মৃত পূর্বপুরুষদের জীবিত করে তোমার কথা সত্য বলে সাক্ষী দেওয়াও।"
          },
          {
            "en": "The escalation continued: gardens and palaces of gold, an angel sent visibly to vouch for him, the sky dropped on them in pieces, and finally, from 'Abdullah ibn Abi Umayyah, that he climb a ladder to heaven and bring back a book with four angels as witnesses — adding that even then he would not believe. This report supplies the setting the verses answer, and its demand for rivers sits close to the spring of our verse. But its chain runs through an unnamed transmitter, leaving it unestablished as sound; the commentators relay it as background to the revelation, not as proof, and should be received in that spirit.",
            "bn": "উত্তেজনা বাড়তেই থাকে: সোনার বাগান ও প্রাসাদ, তাঁর পক্ষে সাক্ষ্য দিতে দৃশ্যমান ফেরেশতা পাঠানো, আকাশ টুকরো হয়ে তাদের উপর পড়া, আর শেষে আবদুল্লাহ ইবন আবি উমাইয়ার কথা যে তিনি সিঁড়ি বেয়ে আকাশে উঠে চারজন ফেরেশতাকে সাক্ষী রেখে এক কিতাব নামিয়ে আনুন। সে আরও যোগ করে, তবুও সে বিশ্বাস করবে না। এই বর্ণনা আয়াতগুলোর জবাব যে প্রেক্ষাপটে, তা জোগায়, আর উপত্যকায় নদীর দাবি আমাদের আয়াতের ঝর্ণার কাছাকাছি। তবে এর সনদ এক অনামা রাবীর ভেতর দিয়ে যায়, তাই এটি সহীহ বর্ণনা হিসেবে প্রতিষ্ঠিত নয়। তাফসীরকারেরা একে নাযিলের পটভূমি হিসেবে আনেন, প্রমাণ হিসেবে নয়, আর ঠিক সেই দৃষ্টিতেই একে নেওয়া উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Signs Stayed Back",
          "bn": "নিদর্শন কেন আটকে থাকল"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the decisive point out of the account. Producing a spring, rivers, or any of it is easy for Allah; had He willed, He could have granted every item on the list. The signs were withheld not from weakness but from knowledge of the askers. Had Allah known they asked in order to be guided, Ibn Kathir says, they would have been answered. But He knew they asked out of disbelief and stubbornness, and a granted miracle would only have sealed their ruin. This is why the same surah says at 17:59 that nothing stopped the sending of signs except that earlier peoples denied them and were destroyed.",
            "bn": "ইবন কাসীর বর্ণনাটা থেকে নির্ধারক কথাটা টেনে বের করেন। ঝর্ণা বা নদী কিংবা এসবের যেকোনোটা আল্লাহর জন্য সহজ; ইচ্ছা করলে তালিকার প্রতিটা জিনিসই তিনি দিতে পারতেন। নিদর্শন আটকে রইল দুর্বলতায় নয়, বরং যারা চাইছিল তাদের জেনেই। ইবন কাসীর বলেন, আল্লাহ যদি জানতেন তারা হেদায়েত পেতেই চাইছে, তবে তাদের জবাব দেওয়া হতো। কিন্তু তিনি জানতেন তারা চাইছে কুফর আর একগুঁয়েমি থেকে, আর চাওয়া মুজিযা তাদের ধ্বংসকেই পাকা করত। এ কারণেই এই সূরার ১৭:৫৯ আয়াত বলে, নিদর্শন পাঠানো কেবল এ কারণেই থামানো হলো যে আগের জাতিরা তা অস্বীকার করেছিল, ফলে ধ্বংস হয়েছিল।"
          },
          {
            "en": "Then comes the mercy that turns the passage. Ibn Kathir relates that the Prophet was offered a choice: either they be given what they asked and then, if they disbelieved, be struck with a punishment never sent on anyone in the worlds; or the gate of repentance and mercy be opened to them instead. He chose the gate of repentance and mercy. So the unanswered demand was not a snub but a reprieve. The verses that pile up the impossible conditions are, underneath, a record of restraint — a refusal to hand a doomed people the very sign that would have doomed them.",
            "bn": "তারপর আসে সেই রহমত, যা গোটা আলোচনার মোড় ঘুরিয়ে দেয়। ইবন কাসীর বর্ণনা করেন, নবীকে ﷺ একটা বেছে নেওয়ার কথা বলা হলো: হয় তাদের চাওয়া দেওয়া হবে, তারপর তারা অস্বীকার করলে এমন শাস্তি নামবে যা জগতের কারো উপর কখনো নামানো হয়নি; নয়তো তাদের জন্য খুলে দেওয়া হবে তওবা ও রহমতের দরজা। তিনি বেছে নিলেন তওবা ও রহমতের দরজা। তাই দাবির জবাব না পাওয়া কোনো তাচ্ছিল্য ছিল না, ছিল অবকাশ। যে আয়াতগুলো অসম্ভব শর্ত জমিয়ে তোলে, সেগুলোর নিচে লুকিয়ে আছে সংযমের এক দলিল: এক ধ্বংসমুখী জাতির হাতে সেই নিদর্শন তুলে না দেওয়া, যা তাদের ধ্বংসই পাকা করত।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to Convey, Not Control",
          "bn": "পৌঁছে দেওয়াই তাঁর কাজ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads the demands as conditions that anyone would hear as mockery, and it dwells on the answer God taught rather than on the taunt. No rebuke of their dullness, no counting of their hostility, no verbal duel — the reply simply lays the truth bare in plain words. Beneath their list sits a mistaken idea: that a messenger of God must also command every divine power and control the world at will. Ma'arif calls this notion false. A messenger's task is to convey the message. God does send miracles to confirm His messengers, but that happens by His power and His decision alone.",
            "bn": "মাআরিফুল কুরআন দাবিগুলোকে পড়ে এমন শর্ত হিসেবে, যা যে কেউ শুনলে বিদ্রূপ মনে করবে, আর তা মনোযোগ দেয় খোঁচার দিকে নয়, আল্লাহর শেখানো জবাবের দিকে। তাদের বোকামির কোনো ভর্ৎসনা নয়, শত্রুতার হিসাব নয়, বাগ্‌যুদ্ধ নয় — জবাবটা কেবল সাদা কথায় সত্যটা খুলে রাখে। তাদের তালিকার নিচে বসে আছে একটা ভুল ধারণা: আল্লাহর রাসূলকে নাকি সমস্ত ঐশী ক্ষমতারও মালিক হতে হবে আর ইচ্ছামতো দুনিয়া চালাতে হবে। মাআরিফ একে মিথ্যা ধারণা বলে। রাসূলের কাজ বার্তা পৌঁছে দেওয়া। আল্লাহ তাঁর রাসূলদের সত্যায়নে মুজিযা পাঠান বটে, তবে তা ঘটে কেবল তাঁরই ক্ষমতায় ও তাঁরই সিদ্ধান্তে।"
          },
          {
            "en": "This is why the answer at the close of the passage is not another wonder but a confession of limits. The Prophet is told to say, glory be to my Lord; was I ever anything but a human messenger? The reply refuses the whole frame of the demand. He does not own the sky to fold it, or the springs to open them; he carries words, and the response to their conditions belongs to his Lord. For anyone who leads or teaches, Ma'arif notes, this is the model: meet even an absurd challenge by making the truth plain, not by matching contempt with contempt.",
            "bn": "এ কারণেই আলোচনার শেষে জবাবটা আরেকটা বিস্ময় নয়, বরং সীমার এক স্বীকারোক্তি। নবীকে ﷺ বলতে বলা হয়, আমার রবের পবিত্রতা ঘোষণা করছি; আমি কি একজন মানুষ রাসূল ছাড়া কখনো অন্য কিছু ছিলাম? এই জবাব দাবির গোটা কাঠামোটাই নাকচ করে দেয়। আকাশ ভাঁজ করার মালিক তিনি নন, ঝর্ণা খোলার মালিকও নন; তিনি বহন করেন বার্তা, আর তাদের শর্তের জবাব তাঁর রবের হাতে। মাআরিফ বলে, যে কেউ নেতৃত্ব দেয় বা শেখায় তার জন্য এটাই আদর্শ: অসম্ভব চ্যালেঞ্জের মুখেও সত্যটা স্পষ্ট করে বলা, তুচ্ছতার জবাবে তুচ্ছতা না ছুড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Condemned Stance, Not People",
          "bn": "নিন্দা দাবির, মানুষের নয়"
        },
        "p": [
          {
            "en": "The speakers here are named plainly by the commentators as the mushrikun of Quraysh, and the Qur'an in a parallel passage calls the ones who spoke this way zalimun, wrongdoers, who said you follow none but a man bewitched. This needs stating carefully. The verse condemns a posture — demanding signs in defiance while having already refused — and not a bloodline, a city or anyone alive today. It licenses no contempt for any living person or community, and no one may read their own opponents into these named few. What is censured is the stance of the closed heart, wherever it is found, including in oneself.",
            "bn": "এখানকার বক্তাদের তাফসীরকারেরা স্পষ্টভাবে কুরাইশের মুশরিক বলে চিহ্নিত করেন, আর একটি সমান্তরাল আয়াতে কুরআন এভাবে বলা লোকদের যালিম, অর্থাৎ সীমালঙ্ঘনকারী বলে, যারা বলেছিল তোমরা তো এক জাদুগ্রস্ত লোকেরই অনুসরণ করছ। কথাটা সাবধানে বলা দরকার। আয়াত নিন্দা করে একটা ভঙ্গির: আগেই অস্বীকার করে রেখে অবাধ্যতায় নিদর্শন দাবি করা। এই নিন্দা কোনো বংশ, শহর বা আজকের জীবিত কারো নয়। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর প্রতি অবজ্ঞার অনুমতি দেয় না, আর এই নামধারী কয়েকজনের জায়গায় কেউ নিজের প্রতিপক্ষকে বসাতে পারে না। নিন্দিত হচ্ছে বন্ধ মনের সেই ভঙ্গি, যেখানেই তা থাক, নিজের ভেতরে হলেও।"
          },
          {
            "en": "The account itself carries the proof of this. Ibn Kathir notes that the Prophet asked for their punishment to be delayed, hoping God would bring believers from their offspring, and that this is exactly what happened: some of the very men in that gathering later embraced Islam sincerely. He names 'Abdullah ibn Abi Umayyah, who had sworn he would not believe even if he saw the ladder to heaven, and who afterwards turned to God in true repentance. The gate of mercy chosen over the sign was not left standing shut. That is the difference between condemning a decision and condemning a soul.",
            "bn": "বর্ণনাটাই এর প্রমাণ বহন করে। ইবন কাসীর উল্লেখ করেন, নবী ﷺ তাদের শাস্তি পিছিয়ে দিতে চাইলেন, এই আশায় যে আল্লাহ তাদের বংশ থেকে মুমিন বের করবেন, আর ঠিক তা-ই ঘটল: সেই বৈঠকের কিছু লোক পরে খাঁটিভাবে ইসলাম গ্রহণ করে। তিনি নাম নেন আবদুল্লাহ ইবন আবি উমাইয়ার, যে কসম খেয়ে বলেছিল আকাশের সিঁড়ি দেখলেও সে মানবে না, অথচ পরে সে সত্যিকারের তওবা করে আল্লাহর দিকে ফিরে আসে। নিদর্শনের বদলে বেছে নেওয়া রহমতের দরজা বন্ধ করে রাখা হয়নি। সিদ্ধান্তের নিন্দা আর মানুষের নিন্দার মধ্যে এখানেই পার্থক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "When Proof Cannot Persuade",
          "bn": "প্রমাণ যখন মন টলায় না"
        },
        "p": [
          {
            "en": "The lasting lesson of the verse is about the order of the heart, not the size of the sign. These men had the Qur'an they could not rival and the standing wonders of their own valley, and they still asked for more, because the deciding had come first and the demand only followed. God's own reply, reported by Ibn Kathir, makes the point: a sign given to such a heart would not have guided it but hardened it. Evidence does not overpower a will that has set itself against the truth; it is received by a will already willing to look.",
            "bn": "আয়াতের স্থায়ী শিক্ষা নিদর্শনের আকার নিয়ে নয়, মনের বিন্যাস নিয়ে। এই লোকদের হাতে ছিল সেই কুরআন যার সমকক্ষ তারা আনতে পারেনি, আর ছিল নিজেদের উপত্যকার চিরস্থায়ী বিস্ময়, তবুও তারা আরও চাইল, কারণ সিদ্ধান্তটা আগে এসেছিল আর দাবি এসেছিল কেবল তার পিছু পিছু। ইবন কাসীরের বর্ণনায় আল্লাহর নিজের জবাবই কথাটা স্পষ্ট করে: এমন মনকে দেওয়া নিদর্শন তাকে হেদায়েত দিত না, আরও কঠিন করত। প্রমাণ সত্যের বিরুদ্ধে দাঁড়ানো কোনো মনকে জোর করে বদলায় না; প্রমাণ কবুল করে সেই মন, যা আগে থেকেই তাকাতে রাজি।"
          },
          {
            "en": "So the mirror the verse holds up asks a quiet question. When I tell myself I would commit if I only had one more reason, one clearer sign, one answered prayer, am I truly waiting on evidence, or have I already refused and dressed the refusal as patience? The honest test is whether I act on the truth I can already see. The people of this verse wanted the last word more than they wanted the answer. The invitation underneath their story is to want the answer, and to let it move me while the gate of mercy still stands open.",
            "bn": "তাই আয়াত যে আয়নাটা তুলে ধরে, তা একটা চাপা প্রশ্ন করে। আমি যখন নিজেকে বলি আর একটামাত্র কারণ পেলে, আর একটু স্পষ্ট নিদর্শন পেলে, একটা কবুল হওয়া দোয়া পেলে আমি লেগে যেতাম, আমি কি সত্যিই প্রমাণের অপেক্ষায় আছি, নাকি আগেই অস্বীকার করে সেটাকে ধৈর্যের সাজ পরিয়েছি? খাঁটি পরীক্ষা হলো, যে সত্য আমি এখনই দেখতে পাই তার উপর আমি আমল করি কিনা। এই আয়াতের লোকেরা জবাবের চেয়ে শেষ কথাটাই বেশি চেয়েছিল। তাদের কাহিনির নিচের ডাকটা হলো জবাবটাকেই চাওয়া, আর রহমতের দরজা খোলা থাকতে থাকতেই তা আমাকে টলতে দেওয়া।"
          }
        ]
      }
    ]
  },
  "17:97": {
    "sections": [
      {
        "h": {
          "en": "Where the Passage Turns",
          "bn": "যেখানে আলোচনা মোড় নেয়"
        },
        "p": [
          {
            "en": "The verses just before this one stack the demands of the Makkan deniers one on another: bring us a gushing spring, a garden of palms, a house of gold, or climb into the sky and fetch down a book we can read (17:90 to 17:93). Each was answered, and then 17:96 closed the argument with a witness, that it is enough for Allah to stand as witness between the Prophet and them. Verse 97 draws the line under the whole exchange. After every sign and every reply, whether a person ends up guided or astray rests with Allah alone.",
            "bn": "ঠিক আগের আয়াতগুলো মক্কার অস্বীকারকারীদের একের পর এক দাবি সাজিয়ে রাখে: আমাদের জন্য ঝর্ণা বইয়ে দাও, খেজুরের বাগান দাও, স্বর্ণের ঘর দাও, কিংবা আকাশে উঠে এমন এক কিতাব নামিয়ে আনো যা আমরা পড়তে পারি (১৭:৯০ থেকে ১৭:৯৩)। প্রতিটির জবাব এসেছে, এরপর ১৭:৯৬ আয়াত এক সাক্ষী দিয়ে আলোচনা শেষ করে: নবী ﷺ ও তাদের মাঝে আল্লাহর সাক্ষ্যই যথেষ্ট। ৯৭ আয়াত গোটা কথোপকথনের নিচে দাগ টেনে দেয়। সব নিদর্শন আর সব জবাবের পর একজন মানুষ পথপ্রাপ্ত হবে না পথভ্রষ্ট, তা কেবল আল্লাহর হাতে।"
          },
          {
            "en": "This is why Ibn Kathir opens his comment on the same note: guidance and misguidance rest in the hands of Allah, and none can put back His judgement. Whoever He guides cannot be led astray, and whoever He leaves to stray finds no one to guide him instead. Ibn Kathir ties it to a twin verse, that whom Allah guides is the rightly guided, but whom He sends astray will find no guiding friend to lead him (18:17). The line is not neutral reporting. It names the place where the outcome is settled.",
            "bn": "এ কারণেই ইবন কাসীর একই সুরে তাঁর ব্যাখ্যা শুরু করেন: হেদায়েত ও গুমরাহি আল্লাহর হাতে, তাঁর ফয়সালা কেউ ফিরিয়ে দিতে পারে না। যাকে তিনি পথ দেখান, কেউ তাকে বিভ্রান্ত করতে পারে না, আর যাকে তিনি পথভ্রষ্ট হতে দেন, তাকে পথ দেখানোর কেউ থাকে না। ইবন কাসীর একে যুক্ত করেন এক জোড়া আয়াতের সঙ্গে, আল্লাহ যাকে পথ দেখান সে-ই পথপ্রাপ্ত, আর যাকে তিনি পথভ্রষ্ট করেন তার জন্য পথ দেখানো কোনো অভিভাবক পাওয়া যাবে না (১৮:১৭)। কথাটা নিছক খবর নয়। এটি বলে দেয় ফয়সালা কোথায় হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Held in One Hand",
          "bn": "হেদায়েত থাকে এক হাতে"
        },
        "p": [
          {
            "en": "At-Tabari reads the first clause closely. Whoever Allah guides to faith in Him, and to believing His Messenger and what he brought from his Lord, and grants him success in it, is the one truly guided to the truth, not a man guided by anyone other than his Lord, for guidance is in Allah's hand. The wording matters. The guided person is not the one who found his own way and was later confirmed in it; he is the one Allah directed and enabled. Al-Qurtubi puts the same thought as a plain condition. Had Allah guided them, they would have been guided.",
            "bn": "তাবারী প্রথম অংশটি মন দিয়ে পড়েন। আল্লাহ যাকে তাঁর প্রতি ঈমানের দিকে, তাঁর রসূল ও রসূল যা এনেছেন তা মেনে নেওয়ার দিকে পরিচালিত করেন এবং সে কাজে তাওফিক দেন, সে-ই সত্যের দিকে সত্যিকার পথপ্রাপ্ত, তার রব ছাড়া অন্য কারও দেখানো পথে নয়, কারণ হেদায়েত আল্লাহরই হাতে। শব্দগুলো গুরুত্বপূর্ণ। পথপ্রাপ্ত সে নয় যে নিজেই পথ খুঁজে নিয়ে পরে তাতে থিতু হয়েছে, বরং সে যাকে আল্লাহ পথ দেখিয়েছেন ও সামর্থ্য দিয়েছেন। কুরতুবী একই কথা এক সরল শর্তে বলেন। আল্লাহ যদি তাদের পথ দেখাতেন, তারা পথ পেত।"
          },
          {
            "en": "As-Sa'di sets the whole verse under one heading: Allah alone possesses guidance and misguidance. When He guides a person, He eases him toward what is easy and turns him from what is hard, so that the man becomes guided in truth and not merely in name. Read this way, guidance is not a verdict passed on a finished character. It is a help given along the road, a smoothing of the path so that the next step becomes possible. The one who walks it has been carried as much as he has walked, and that is exactly what leaves no room for pride.",
            "bn": "সাদী গোটা আয়াতকে এক শিরোনামের নিচে রাখেন: হেদায়েত ও গুমরাহি একমাত্র আল্লাহরই এখতিয়ার। তিনি যখন কাউকে পথ দেখান, তখন তাকে সহজের দিকে সহজ করে দেন আর কঠিন থেকে সরিয়ে রাখেন, যাতে সে নামমাত্র নয়, সত্যিকারভাবেই পথপ্রাপ্ত হয়। এভাবে পড়লে হেদায়েত কোনো গড়ে-ওঠা চরিত্রের উপর দেওয়া রায় নয়। এ পথের মধ্যে দেওয়া এক সাহায্য, পথটা মসৃণ করে দেওয়া যাতে পরের পা ফেলা সম্ভব হয়। যে এ পথে চলে, সে যতটা হেঁটেছে ততটাই তাকে বয়ে নেওয়া হয়েছে। ঠিক এখানেই অহংকারের কোনো জায়গা থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Left to One's Own Self",
          "bn": "নিজের হাতে ছেড়ে দেওয়া"
        },
        "p": [
          {
            "en": "The second clause turns the picture over. At-Tabari glosses whoever He sends astray as whoever Allah abandons to being away from the truth, failing him in reaching it, not granting him the success He gave the other. The verb he reaches for is that of khidhlan, the withdrawal of support, rather than a shove into error. As-Sa'di and the Muyassar sharpen it with a single phrase that recurs across the commentaries: Allah leaves such a person to himself. He entrusts the man to his own devices and stands back, and that abandonment is itself the losing of the road.",
            "bn": "দ্বিতীয় অংশটি ছবিটা উল্টে দেয়। তাবারী পথভ্রষ্ট করার ব্যাখ্যায় বলেন, আল্লাহ যাকে সত্য থেকে দূরে ছেড়ে দেন, তাতে পৌঁছাতে তাকে সাহায্য থেকে বঞ্চিত করেন, অন্যজনকে যে তাওফিক দিয়েছেন তা তাকে দেন না। তিনি যে শব্দটি বেছে নেন তা খিযলান, অর্থাৎ সাহায্য তুলে নেওয়া, ভুলের দিকে ধাক্কা দেওয়া নয়। সাদী ও মুয়াসসার তা আরও স্পষ্ট করেন এক কথায়, যা তাফসীরগুলোতে ঘুরেফিরে আসে: আল্লাহ এমন মানুষকে তার নিজের হাতে ছেড়ে দেন। তাকে নিজের ভরসায় রেখে সরে দাঁড়ান, আর এই ছেড়ে দেওয়াই তো পথ হারানো।"
          },
          {
            "en": "That phrase is where the commentators locate the verse's justice, and they do not push past what the text says. To be left to oneself is already the ruin, because before God none is sufficient for himself. As-Sa'di ends his comment by insisting on the balance: Allah did not wrong them, and their straying is the recompense of a disbelief that was their own. Misguidance here meets a turning away; it is not an arbitrary sentence passed on the innocent. The commentators hold guidance-as-gift and straying-as-desert together, and leave the deeper question of decree exactly where the verse leaves it.",
            "bn": "এই কথাটির মধ্যেই তাফসীরকারেরা আয়াতের ইনসাফ খুঁজে পান, আর তাঁরা আয়াতের কথার বাইরে যান না। নিজের হাতে ছেড়ে দেওয়া হওয়া মানেই ধ্বংস, কারণ আল্লাহর সামনে কেউ নিজের জন্য যথেষ্ট নয়। সাদী তাঁর ব্যাখ্যা শেষ করেন এই ভারসাম্যের উপর জোর দিয়ে: আল্লাহ তাদের উপর জুলুম করেননি, তাদের পথভ্রষ্টতা তাদের নিজেদেরই কুফরির প্রতিফল। এখানে গুমরাহি এক মুখ ফিরিয়ে নেওয়ার জবাব, নিরপরাধের উপর চাপানো কোনো খেয়ালি রায় নয়। তাফসীরকারেরা হেদায়েত-দান আর গুমরাহি-প্রাপ্য দুটোকে একসঙ্গে ধরে রাখেন, আর তাকদিরের গভীর প্রশ্নটা ঠিক সেখানেই রেখে দেন যেখানে আয়াত রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Guardian But Him",
          "bn": "তিনি ছাড়া কোনো অভিভাবক নেই"
        },
        "p": [
          {
            "en": "You will never find for them protectors besides Him. At-Tabari reads the protectors here as helpers, allies who might rescue them from Allah when He wills to punish them. Ibn Kathir hears it a little differently, as protecting friends who could guide them where Allah has not, and as-Sa'di as a patron who might shield a man from Allah's punishment. The readings converge on one loss. Whatever a person leans on in place of Allah, whether ally, patron, or the power he trusted, is shown unable to reach him at the single moment it would have mattered.",
            "bn": "তুমি কখনো তাঁকে ছাড়া তাদের জন্য কোনো অভিভাবক পাবে না। তাবারী এখানে অভিভাবক বলতে বোঝেন সাহায্যকারী, এমন সঙ্গী যারা আল্লাহ শাস্তি দিতে চাইলে তাদের বাঁচাতে পারত। ইবন কাসীর একটু ভিন্নভাবে শোনেন, রক্ষাকারী বন্ধু যারা আল্লাহ যেখানে পথ দেখাননি সেখানে পথ দেখাতে পারত, আর সাদী বোঝেন এমন পৃষ্ঠপোষক যে আল্লাহর শাস্তি থেকে মানুষকে আড়াল করতে পারত। পাঠগুলো এক জায়গায় এসে মেলে। আল্লাহর বদলে মানুষ যার উপরই ভরসা করুক, সঙ্গী হোক, পৃষ্ঠপোষক হোক, কিংবা যে শক্তির উপর আস্থা রেখেছিল, যে একটিমাত্র মুহূর্তে দরকার ছিল সেখানে কেউই তার নাগাল পায় না।"
          },
          {
            "en": "This is aimed straight at the deniers of the passage. They had their chiefs, their gods, their standing and their wealth, and they spoke as men who were covered on every side. The verse tells them the cover is nothing. Ibn Kathir frames the whole line as Allah's account of how His rule runs through His creation, with no one able to send His judgement back. A protector who cannot protect against the only One who judges is not a protector at all, and the verse quietly strips the word down to that bare truth.",
            "bn": "কথাটা সরাসরি এই আলোচনার অস্বীকারকারীদের দিকে তাক করা। তাদের ছিল সরদার, ছিল উপাস্য, ছিল মান-মর্যাদা আর ধন-সম্পদ, আর তারা কথা বলত এমন মানুষের মতো যাদের চারপাশ ঢাকা। আয়াত তাদের বলে, সে ঢাকা কিছুই নয়। ইবন কাসীর গোটা বাক্যটিকে দেখেন আল্লাহর সৃষ্টির উপর তাঁর শাসন কীভাবে চলে তার বিবরণ হিসেবে, যেখানে তাঁর ফয়সালা ফেরানোর কেউ নেই। যে অভিভাবক একমাত্র বিচারকের বিরুদ্ধে রক্ষা করতে পারে না, সে তো অভিভাবকই নয়, আর আয়াত নিঃশব্দে শব্দটিকে সেই খালি সত্যে নামিয়ে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gathered Upon Their Faces",
          "bn": "মুখের ভরে একত্রিত"
        },
        "p": [
          {
            "en": "And We will gather them on the Day of Resurrection upon their faces. A man asked, O Prophet of Allah, will the disbeliever be gathered on his face on the Day of Resurrection? He answered, Is not the One who made him walk on his two feet in this world able to make him walk on his face on the Day of Resurrection? The subnarrator Qatada added, Yes, by the might of our Lord. Anas reported it, and al-Bukhari and Muslim recorded it, so it is sound; the commentators cite it right here to explain the verse's image.",
            "bn": "আর ক্বিয়ামাতের দিন আমি তাদের একত্রিত করব তাদের মুখের ভরে। একজন লোক জিজ্ঞেস করল, হে আল্লাহর নবী, ক্বিয়ামাতের দিন কি কাফিরকে তার মুখের ভরে একত্রিত করা হবে? তিনি জবাব দিলেন, যিনি দুনিয়ায় তাকে দুই পায়ে চালিয়েছেন, তিনি কি ক্বিয়ামাতের দিন তাকে মুখের ভরে চালাতে সক্ষম নন? বর্ণনার এক রাবি ক্বাতাদা যোগ করেন, হ্যাঁ, আমাদের রবের ইজ্জতের কসম। আনাস (রাঃ) এটি বর্ণনা করেছেন, বুখারী ও মুসলিম এটি নথিভুক্ত করেছেন, তাই এটি সহীহ; তাফসীরকারেরা আয়াতের ছবি বোঝাতে ঠিক এখানেই এটি উল্লেখ করেন।"
          },
          {
            "en": "How should upon their faces be pictured? Al-Qurtubi records two readings. One takes it from an Arab idiom, where coming on the face means coming in haste, so it is a hurrying of them to Hell. The other, which he calls the sound view, is that they are dragged on their faces to the Fire, as is done in this world to one meant for utter humiliation. The hadith of Anas turns him toward the second, and al-Baghawi adds that they ward off with their faces every rough rise and thorn on the way. A life that refused to bow is gathered in the very posture of being brought lowest.",
            "bn": "মুখের ভরে কথাটা কীভাবে ছবি হিসেবে দেখা যায়? কুরতুবী দুটি পাঠ উল্লেখ করেন। একটি আরবি বাগধারা থেকে নেওয়া, যেখানে মুখের উপর আসা মানে দ্রুত আসা, অর্থাৎ তাদের জাহান্নামের দিকে দ্রুত টেনে নেওয়া। অন্যটি, যাকে তিনি সহীহ মত বলেন, তা হলো তাদের মুখের ভরে আগুনের দিকে টেনে নেওয়া হবে, যেমন দুনিয়ায় চরম লাঞ্ছনার জন্য নির্ধারিত কারও সঙ্গে করা হয়। আনাসের হাদীস তাঁকে দ্বিতীয় মতের দিকে ঝোঁকায়, আর বাগাভী যোগ করেন যে তারা পথের প্রতিটি উঁচু ঢিবি ও কাঁটা নিজেদের মুখ দিয়ে ঠেকায়। যে জীবন নত হতে চায়নি, তাকে একত্রিত করা হয় সবচেয়ে নিচু করে দেওয়ার ভঙ্গিতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Blind, Dumb and Deaf",
          "bn": "অন্ধ, বোবা ও বধির"
        },
        "p": [
          {
            "en": "Blind, dumb and deaf. At-Tabari notes the plain sense first: dumb is the loss of speech, as Qatada glossed it, and the three words name the loss of sight, speech and hearing. But he raises the obvious problem. Elsewhere the Qur'an says the criminals see the Fire and think they will fall into it (18:53), that they hear its raging and roaring (25:12), and that they cry out for their own destruction (25:13). How can the same people be blind, dumb and deaf here, yet seeing, hearing and speaking there?",
            "bn": "অন্ধ, বোবা ও বধির। তাবারী প্রথমে সোজা অর্থটি ধরেন: বোবা মানে কথা বলার শক্তি হারানো, যেমন ক্বাতাদা ব্যাখ্যা করেছেন, আর তিনটি শব্দ দৃষ্টি, বাক ও শ্রবণ হারানোকে বোঝায়। কিন্তু তিনি সামনে আনেন স্পষ্ট সমস্যাটি। কুরআন অন্যত্র বলে, অপরাধীরা আগুন দেখে আর ভাবে তারা তাতে পড়বে (১৮:৫৩), তারা তার ফুঁসে ওঠা ও গর্জন শোনে (২৫:১২), আর তারা নিজেদের ধ্বংস কামনা করে চিৎকার করে (২৫:১৩)। একই মানুষ এখানে অন্ধ, বোবা ও বধির, আবার সেখানে দেখে, শোনে ও কথা বলে, তা কী করে হয়?"
          },
          {
            "en": "The commentators give two answers and do not force one. The first is a matter of stages. They are gathered and driven to the standing in this stripped state, and their sight, hearing and speech are given back at other points, once they face the Fire itself. Al-Hasan places the blindness in the drive toward the standing, until they enter the Fire. Muqatil ties it to the moment they are told, Be despised in it and speak not to Me (23:108), after which the three faculties fall away together. On this reading the words describe a real condition at a real stage of the Day.",
            "bn": "তাফসীরকারেরা দুটি জবাব দেন আর একটিকে জোর করে চাপান না। প্রথমটি স্তরের ব্যাপার। তাদের এই বিবস্ত্র অবস্থায় একত্রিত করে হাশরের ময়দানে নেওয়া হয়, আর তাদের দৃষ্টি, শ্রবণ ও বাক অন্য মুহূর্তে ফিরিয়ে দেওয়া হয়, যখন তারা আগুনের মুখোমুখি হয়। হাসান অন্ধত্বকে রাখেন ময়দানের দিকে হাঁকিয়ে নেওয়ার সময়ে, আগুনে প্রবেশের আগ পর্যন্ত। মুক্বাতিল একে যুক্ত করেন সেই মুহূর্তের সঙ্গে যখন তাদের বলা হয়, এতে লাঞ্ছিত হয়ে থাক আর আমার সঙ্গে কথা বোলো না (২৩:১০৮), এরপর তিনটি শক্তি একসঙ্গে চলে যায়। এ পাঠে শব্দগুলো দিনটির এক বাস্তব স্তরে এক বাস্তব অবস্থার বর্ণনা।"
          },
          {
            "en": "The second answer reads the three words against the life that earned them. Ibn Abbas takes blind as seeing nothing that would gladden them, dumb as unable to speak a single argument in their defence, and deaf as hearing nothing of any use. Ibn Kathir joins this to the world they came from: they were blind, dumb and deaf to the truth while they lived, and are raised so on the very Day they need those faculties most. The verse keeps both readings open, and both of them indict the same refusal.",
            "bn": "দ্বিতীয় জবাবটি তিনটি শব্দকে পড়ে সেই জীবনের সঙ্গে মিলিয়ে যা এগুলো অর্জন করেছে। ইবন আব্বাস (রাঃ) অন্ধ মানে ধরেন এমন কিছু না দেখা যা তাদের খুশি করত, বোবা মানে নিজেদের পক্ষে একটি যুক্তিও বলতে না পারা, আর বধির মানে কোনো কাজের কথা না শোনা। ইবন কাসীর একে যুক্ত করেন তাদের ফেলে আসা দুনিয়ার সঙ্গে: তারা জীবদ্দশায় সত্যের প্রতি অন্ধ, বোবা ও বধির ছিল, তাই ঠিক সেই দিনই এমন করে ওঠানো হয় যেদিন এই শক্তিগুলো তাদের সবচেয়ে বেশি দরকার। আয়াত দুটি পাঠই খোলা রাখে, আর দুটোই একই প্রত্যাখ্যানকে দোষী সাব্যস্ত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fire Without Respite",
          "bn": "যে আগুন থামে না"
        },
        "p": [
          {
            "en": "Their refuge is Hell; every time it subsides, We increase for them the blaze. The commentators gather on the meaning of subsides. Ibn Abbas glosses it as calms and dies down, Mujahid as goes out, Qatada as grows weak, and at-Tabari as softens and abates, quoting an old line about a lamp that now dims and now shines. The increase is then an increase of flame, heat and glowing coal. So the fire appears to fail, and each time it does, it is fed once more.",
            "bn": "তাদের আবাস জাহান্নাম; যখনই তা নিস্তেজ হয়, আমি তাদের জন্য দহন বাড়িয়ে দিই। তাফসীরকারেরা নিস্তেজ হওয়ার অর্থে এসে মেলেন। ইবন আব্বাস (রাঃ) একে বলেন শান্ত হয়ে নিভে আসা, মুজাহিদ বলেন নিভে যাওয়া, ক্বাতাদা বলেন দুর্বল হওয়া, আর তাবারী বলেন কোমল হয়ে থিতিয়ে আসা, এক পুরনো কবিতার চরণ টেনে যেখানে প্রদীপ কখনো ম্লান হয় কখনো জ্বলে ওঠে। বাড়ানোটা তখন শিখা, তাপ আর জ্বলন্ত অঙ্গারের বৃদ্ধি। তাই আগুন যেন নিভে আসে, আর যতবার তা হয়, ততবার একে আবার জ্বালানি দেওয়া হয়।"
          },
          {
            "en": "But the commentators are careful that this rising and falling is no relief. As-Sa'di reads subsides as the fire making ready to go out, and the increase as its being kindled afresh upon them, so that the punishment never lets up, they are not finished off by death, and nothing of it is lightened. Al-Qurtubi and al-Baghawi say the same: the calming of the blaze brings no decrease in their pains and no easing of the punishment, for Allah has said elsewhere that it is not lightened for them (43:75). The lull is a part of the torment, not a pause in it.",
            "bn": "কিন্তু তাফসীরকারেরা খেয়াল রাখেন যে এই ওঠানামা কোনো স্বস্তি নয়। সাদী নিস্তেজ হওয়াকে পড়েন আগুনের নিভে যাওয়ার প্রস্তুতি হিসেবে, আর বৃদ্ধিকে পড়েন তাদের উপর নতুন করে জ্বালিয়ে দেওয়া হিসেবে, যাতে শাস্তি কখনো থামে না, মৃত্যু দিয়ে তাদের শেষ করে দেওয়া হয় না, আর কিছুই লাঘব করা হয় না। কুরতুবী ও বাগাভী একই কথা বলেন: শিখা শান্ত হলেও তাদের যন্ত্রণায় কোনো কমতি আসে না, শাস্তিতে কোনো ছাড় হয় না, কারণ আল্লাহ অন্যত্র বলেছেন যে তাদের থেকে তা হালকা করা হবে না (৪৩:৭৫)। এই থমকে যাওয়াটা শাস্তিরই অংশ, তার মধ্যে বিরতি নয়।"
          },
          {
            "en": "Ibn Abbas gives the starkest image of what the subsiding really is. The fire blazes with them as its fuel until it has burned them away and nothing of them is left, and then it settles into glowing embers; that settling is its subsiding. When they are made a new creation, it takes them again. Qatada reads it alongside the renewing of skins, each burned skin replaced so that the punishment can be tasted afresh. Ibn Kathir closes on a warning verse of its own, So taste, We shall not increase you except in torment (78:30).",
            "bn": "ইবন আব্বাস (রাঃ) নিস্তেজ হওয়া আসলে কী, তার সবচেয়ে কঠিন ছবিটা দেন। আগুন তাদের জ্বালানি করে জ্বলতে থাকে যতক্ষণ না তাদের পুড়িয়ে শেষ করে, তাদের কিছুই আর বাকি থাকে না, এরপর তা জ্বলন্ত অঙ্গারে থিতিয়ে আসে; সেই থিতিয়ে আসাই তার নিস্তেজ হওয়া। যখন তাদের নতুন সৃষ্টি করে দেওয়া হয়, আগুন আবার তাদের ধরে। ক্বাতাদা একে পড়েন চামড়া নতুন করে দেওয়ার সঙ্গে মিলিয়ে, প্রতিটি পোড়া চামড়া বদলে দেওয়া হয় যাতে শাস্তি নতুন করে চাখা যায়। ইবন কাসীর শেষ করেন নিজস্ব এক সতর্কবাণীর আয়াতে, তোমরা স্বাদ নাও, আমি তোমাদের শাস্তি ছাড়া আর কিছুই বাড়াব না (৭৮:৩০)।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Warrants",
          "bn": "আয়াত কী অনুমতি দেয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes those whom Allah leaves to stray and the end their refusal reaches, exactly as the commentators describe it, and no further. It licenses nothing against any living person or community. No one on earth may point to a particular man and declare him among those Allah has sent astray, for that judgement is Allah's alone and belongs to the Day the verse is describing, not to us. To read the verse as a warrant to condemn the living is to seize a knowledge that the verse itself places entirely in the hand of God.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত তাদের বর্ণনা দেয় যাদের আল্লাহ পথভ্রষ্ট হতে ছেড়ে দেন, আর তাদের প্রত্যাখ্যান যে পরিণতিতে গিয়ে পৌঁছে, ঠিক যেমন তাফসীরকারেরা বলেন, তার বেশি নয়। এটি কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। পৃথিবীর কেউ কোনো নির্দিষ্ট মানুষকে দেখিয়ে বলতে পারে না যে সে আল্লাহর পথভ্রষ্ট করা লোকদের একজন, কারণ সে ফয়সালা একমাত্র আল্লাহর আর তা সেই দিনের যা আয়াত বর্ণনা করছে, আমাদের নয়। আয়াতকে জীবিতদের দোষী সাব্যস্ত করার সনদ বানানো মানে সেই জ্ঞান কেড়ে নেওয়া যা আয়াত নিজেই পুরোপুরি আল্লাহর হাতে রাখে।"
          },
          {
            "en": "The commentators guard this from both sides. As-Sa'di insists Allah did not wrong these people; their straying was their own disbelief. Yet guidance and misguidance rest with Allah alone, so no observer can read another's heart or settle his case. That leaves me one task, and it is not a census of the doomed. It is to stop treating my guidance as a possession. I did not invent the light I walk by, and the verse says plainly I can be left to myself. The fitting response is to keep asking to be held on the path, and to keep eyes, tongue and ears open to the truth.",
            "bn": "তাফসীরকারেরা দুই দিক থেকেই একে পাহারা দেন। সাদী জোর দিয়ে বলেন, আল্লাহ এই লোকদের উপর জুলুম করেননি, তাদের পথভ্রষ্টতা তাদের নিজেদের কুফরিরই ফসল। তবু হেদায়েত ও গুমরাহি একমাত্র আল্লাহর হাতে, তাই কোনো দর্শক অন্যের অন্তর পড়তে বা তার ফয়সালা করতে পারে না। এতে আমার হাতে থাকে একটাই কাজ, আর তা ধ্বংসপ্রাপ্তদের হিসাব নেওয়া নয়। তা হলো নিজের হেদায়েতকে সম্পত্তি ভাবা বন্ধ করা। যে আলোয় আমি চলি তা আমি বানাইনি, আর আয়াত সোজাসুজি বলে যে আমাকেও নিজের হাতে ছেড়ে দেওয়া হতে পারে। মানানসই জবাব সেটাই যা এই আলোচনা দেখিয়ে দেয়, পথের উপর ধরে রাখার জন্য চাইতে থাকা, আর সত্যের প্রতি নিজের চোখ, জিভ ও কান খোলা রাখা যতক্ষণ তারা সাড়া দেয়।"
          }
        ]
      }
    ]
  },
  "17:104": {
    "sections": [
      {
        "h": {
          "en": "The Command After Pharaoh",
          "bn": "ফিরআউনের পর সেই আদেশ"
        },
        "p": [
          {
            "en": "The verse falls just as the sea closes. In 17:103 Pharaoh intended to drive the Children of Israel from the land, and God drowned him and all with him. Then comes min baʿdihi, after him: God turns to the people Pharaoh had crushed and says uskunū al-arḍ, dwell in the land. Ibn Kathir reads the placement closely. The drowning is not the end of the story but its hinge, the point where the oppressed stop fleeing and are told at last to stay.",
            "bn": "আয়াতটি আসে ঠিক তখন, যখন সমুদ্র বন্ধ হয়ে গেছে। ১৭:১০৩ আয়াতে ফিরআউন চেয়েছিল বানী ইসরাঈলকে যমীন থেকে সরিয়ে দিতে, আর আল্লাহ তাকে ও তার সঙ্গীদের সবাইকে ডুবিয়ে দিলেন। তারপর আসে মিন বাদিহি, তার পরে: আল্লাহ সেই নিপীড়িত মানুষদের দিকে ফেরেন যাদের ফিরআউন পিষে রেখেছিল, আর বলেন উসকুনুল আরদ, যমীনে বসবাস করো। ইবন কাসীর আয়াতের অবস্থানটা খুঁটিয়ে দেখেন। এই ডুবে যাওয়া কাহিনির শেষ নয়, বরং তার মোড়, যেখানে নিপীড়িতরা পালানো থামিয়ে অবশেষে থিতু হওয়ার আদেশ পায়।"
          },
          {
            "en": "Ibn Kathir hears more than old history here. To the Prophet, reciting it in Makkah before the Hijrah, it reads as glad tidings. The people of Makkah, too, were set on driving him out, as 17:76 and 17:77 record, and he too would be given the city he was pushed from. So the verse works on two levels: one about a people long ago, one about the man reciting it. Both turn on a single law. The ground can change hands, and the One who moves it is God, not whoever holds the power.",
            "bn": "ইবন কাসীর এই বাক্যে পুরনো ইতিহাসের চেয়ে বেশি কিছু শোনেন। নবী ﷺ যখন হিজরতের আগে মক্কায় এটি তিলাওয়াত করছেন, তাঁর কাছে তা সুসংবাদ। মক্কার লোকেরাও তাঁকে বের করে দিতে উঠেপড়ে লেগেছিল, যেমন ১৭:৭৬ ও ১৭:৭৭ আয়াত বলে। আর তিনিও একদিন সেই শহর ফিরে পাবেন যেখান থেকে তাঁকে ঠেলে বের করা হয়েছিল। তাই আয়াতটি একসঙ্গে দুই স্তরে কাজ করে। একটি বহুকাল আগের এক জাতিকে নিয়ে, অন্যটি যিনি তিলাওয়াত করছেন তাঁকে নিয়ে। দুটোই একই বিধানের উপর ঘোরে। যমীনের হাতবদল হতে পারে, আর যিনি তা ঘোরান তিনি আল্লাহ, ক্ষমতা যার হাতেই থাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Land Is Meant",
          "bn": "কোন যমীনের কথা"
        },
        "p": [
          {
            "en": "The commentators split over which land is meant. At-Tabari names it the land of Shām, and al-Muyassar reads it the same way: once Pharaoh and his troops had perished, the Children of Israel were told to settle in the land of Shām. Al-Qurtubi widens it to the land of Shām and Egypt, and al-Baghawi to Egypt and Shām, the two held together. What the bare word al-arḍ leaves open, each commentator fills from the wider Qur'anic account of where this people went once the sea had parted and closed.",
            "bn": "কোন যমীনের কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারেরা ভিন্ন মত পোষণ করেন। তাবারী একে বলেন শামের ভূমি, আর মুয়াসসারও একইভাবে পড়েন: ফিরআউন ও তার সৈন্যরা ধ্বংস হওয়ার পর বানী ইসরাঈলকে শামের ভূমিতে বসবাসের কথা বলা হলো। কুরতুবী তা বিস্তৃত করেন শাম ও মিসরের ভূমি পর্যন্ত, আর বাগাভী মিসর ও শাম, দুটিকে একসঙ্গে ধরেন। শুধু আল-আরদ শব্দটি যা খোলা রেখে দেয়, প্রতিটি তাফসীরকার তা ভরে দেন এই জাতি সমুদ্র পার হওয়ার পর কোথায় গিয়েছিল, সেই বিস্তৃত কুরআনি বিবরণ থেকে।"
          },
          {
            "en": "Ibn Kathir takes al-arḍ more broadly still. He does not pin it to one province but reads it as the inheritance itself: God caused the people who had been made weak to inherit the land, and gave them the land of Pharaoh's people, its crops and treasures. He cites 26:59, thus We caused the Children of Israel to inherit them. For Ibn Kathir the weight is less the map than the transfer: what the tyrant guarded is handed to the very people he ground down.",
            "bn": "ইবন কাসীর আল-আরদ শব্দটি আরও ব্যাপকভাবে নেন। তিনি একে কোনো একটি অঞ্চলে বেঁধে ফেলেন না, বরং পড়েন উত্তরাধিকার হিসেবেই: যাদের দুর্বল করে রাখা হয়েছিল, আল্লাহ তাদের যমীনের উত্তরাধিকারী করলেন, আর দিলেন ফিরআউনের জাতির ভূমি, তার ক্ষেত ও ধনভাণ্ডার। তিনি ২৬:৫৯ আয়াত উদ্ধৃত করেন, এভাবেই আমি বানী ইসরাঈলকে এসবের উত্তরাধিকারী করলাম। ইবন কাসীরের কাছে আয়াতের ভার মানচিত্রে নয়, হাতবদলে। জালিম যা আগলে রেখেছিল, তা তুলে দেওয়া হলো সেই লোকদের হাতে যাদের সে পিষে রেখেছিল।"
          },
          {
            "en": "The disagreement is less a contradiction than a difference of focus. Tabari and al-Muyassar look to where the people settled next; Qurtubi and al-Baghawi hold two regions together; Ibn Kathir reads the word as inheritance rather than a border. None of them turns the line into a title-deed to a particular soil for all time. Each reads it as the record of a settling that God granted after an oppression He had ended. And they all then move straight on to the clause where the verse itself points, away from any earthly ground: the Hereafter.",
            "bn": "এই মতভেদ ঠিক বিরোধ নয়, বরং দৃষ্টিভঙ্গির পার্থক্য। তাবারী ও মুয়াসসার তাকান জাতিটি এরপর কোথায় থিতু হলো সেদিকে; কুরতুবী ও বাগাভী দুটি অঞ্চল একসঙ্গে ধরেন; ইবন কাসীর শব্দটিকে সীমানা নয়, উত্তরাধিকার হিসেবে পড়েন। তাঁদের কেউই আয়াতটিকে চিরকালের জন্য কোনো নির্দিষ্ট মাটির দলিলে পরিণত করেন না। প্রত্যেকে একে পড়েন এক থিতু হওয়ার নথি হিসেবে, যা আল্লাহ দিলেন এক নিপীড়ন শেষ করার পর। আর তারপর তাঁরা প্রত্যেকেই সোজা এগিয়ে যান সেই বাক্যাংশে, যেখানে আয়াত নিজেই ইশারা করে, যেকোনো পার্থিব মাটি ছাড়িয়ে: আখিরাত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Settling With a Term",
          "bn": "মেয়াদ বেঁধে দেওয়া বসবাস"
        },
        "p": [
          {
            "en": "Notice how the sentence is built. God grants the land in its first half and dates it in its second: fa-idhā jāʾa waʿd al-ākhira, and when the promise of the Last comes. The commentators agree on this join even where they differ over the land. As-Sa'di reads the whole verse to a single end. They are brought together jamīʿan, all of them, so that every worker may be repaid for his work. The dwelling, however long it runs, is a stay held under notice. Its lease has a date written into the very breath that grants it.",
            "bn": "খেয়াল করুন বাক্যটি কীভাবে গড়া। আল্লাহ প্রথমার্ধে যমীন দান করেন, আর দ্বিতীয়ার্ধে তার মেয়াদ বেঁধে দেন: ফা-ইজা জাআ ওয়াদুল আখিরাহ, আর যখন শেষের ওয়াদা আসবে। যমীন নিয়ে মতভেদ থাকলেও এই জোড়ায় তাফসীরকারেরা একমত। সাদী গোটা আয়াতটিকে একটিমাত্র লক্ষ্যে পড়েন। তাদের জামিয়ান, সবাইকে একসঙ্গে জড়ো করা হবে, যাতে প্রতিটি আমলকারীকে তার আমলের প্রতিদান দেওয়া যায়। বসবাস যত দীর্ঘই হোক, তা এক মেয়াদি অবস্থান। যে নিঃশ্বাসে তা দান করা হচ্ছে, সেই নিঃশ্বাসেই তার তারিখ লেখা।"
          },
          {
            "en": "This reframes the gift. A land handed to the oppressed is real mercy, but the verse will not let it harden into a final home. At-Tabari glosses the closing clause as the Hour itself; al-Muyassar as the Day of Resurrection, when the dead are raised from their graves to the standing of the reckoning. So the settling that opens the verse is measured against the gathering that closes it. To dwell in the land, on the Qur'an's own terms, is to live on the road to somewhere else, never at the road's end.",
            "bn": "এতে দানটির অর্থই বদলে যায়। নিপীড়িতের হাতে তুলে দেওয়া যমীন সত্যিকারের রহমত, তবে আয়াত তাকে চূড়ান্ত ঠিকানায় জমাট বাঁধতে দেয় না। তাবারী শেষ বাক্যাংশটিকে ব্যাখ্যা করেন খোদ কিয়ামত হিসেবে; মুয়াসসার একে বলেন পুনরুত্থানের দিন, যখন মৃতদের কবর থেকে হিসাবের ময়দানে তোলা হবে। তাই আয়াতের শুরুতে যে থিতু হওয়া, তা মাপা হয় শেষে যে জড়ো হওয়া, তার নিরিখে। যমীনে বসবাস করা, কুরআনের নিজের ভাষায়, হলো এক জায়গায় থাকা যা আরেক জায়গায় যাওয়ার পথ, পথের শেষ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise of the Last",
          "bn": "শেষের সেই ওয়াদা"
        },
        "p": [
          {
            "en": "What is waʿd al-ākhira, the promise of the Last? The majority of the commentators read it as the Resurrection. At-Tabari says it plainly: when the Hour comes, and it is the promise of the Hereafter. Al-Muyassar names it yawm al-qiyāma, the Day of Resurrection. Al-Baghawi and al-Qurtubi both gloss it the same way, the Day of Standing. As-Sa'di's whole reading, that all are brought together to be repaid for their deeds, rests on this same sense. On this reading the promise is the raising of the dead, the appointment God has fixed and will keep without fail.",
            "bn": "ওয়াদুল আখিরাহ, শেষের সেই ওয়াদা কী? বেশির ভাগ তাফসীরকার একে পড়েন পুনরুত্থান হিসেবে। তাবারী সোজা বলেন: যখন কিয়ামত আসবে, আর তা-ই শেষের ওয়াদা। মুয়াসসার একে বলেন ইয়াওমুল কিয়ামাহ, পুনরুত্থানের দিন। বাগাভী ও কুরতুবী দুজনেই একইভাবে ব্যাখ্যা করেন, হাশরের দিন। সাদীর গোটা পাঠ, অর্থাৎ সবাইকে জড়ো করা হবে আমলের প্রতিদান দিতে, এই একই অর্থের উপর দাঁড়িয়ে। এই পাঠে ওয়াদা মানে মৃতদের পুনরুত্থান, সেই নির্ধারিত সময় যা আল্লাহ স্থির করেছেন আর নিশ্চিতভাবেই রক্ষা করবেন।"
          },
          {
            "en": "A second reading is preserved, and the honest thing is to keep it as a difference rather than fold it away. Al-Qurtubi and al-Baghawi both report, on the authority of al-Kalbi, that waʿd al-ākhira here means the coming of ʿĪsā (AS) down from the sky. On that view the promise is a return within history, not only the final raising of the dead. The two commentators carry the reading without adopting it; they set it beside the Resurrection gloss and leave both standing, which is where an honest reader has to leave them too.",
            "bn": "একটি দ্বিতীয় পাঠও সংরক্ষিত আছে, আর সৎ কাজ হলো তাকে চাপা না দিয়ে মতভেদ হিসেবেই রাখা। কুরতুবী ও বাগাভী দুজনেই কালবীর সূত্রে বর্ণনা করেন যে এখানে ওয়াদুল আখিরাহ মানে ঈসা (আঃ)-এর আসমান থেকে নেমে আসা। এই মতে ওয়াদা হলো ইতিহাসের ভেতরেই এক প্রত্যাবর্তন, কেবল শেষের পুনরুত্থান নয়। দুই তাফসীরকার পাঠটি বহন করেন, তবে গ্রহণ করেন না। তাঁরা একে পুনরুত্থানের ব্যাখ্যার পাশে রাখেন আর দুটোকেই দাঁড় করিয়ে রাখেন। সৎ পাঠককেও ঠিক সেখানেই থামতে হয়।"
          },
          {
            "en": "It is worth being exact about what these fetched commentators do not say. None of them ties this promise of the Last back to the two corruptions foretold at the opening of the sura, in 17:4 to 17:8, though a reader might expect the link. On these pages the phrase is read as the Resurrection by the majority, or as the descent of ʿĪsā (AS) by al-Kalbi, and no further than that. Where the sources fall silent, the discipline is to stop where they stop and not to supply a connection they did not themselves draw.",
            "bn": "যা এই তাফসীরকারেরা বলেন না, সে বিষয়েও নিখুঁত থাকা দরকার। তাঁদের কেউই শেষের এই ওয়াদাকে সুরার শুরুতে ১৭:৪ থেকে ১৭:৮ আয়াতে বর্ণিত দুই ফাসাদের সঙ্গে জোড়েন না, যদিও পাঠক এমন যোগসূত্র আশা করতে পারেন। এই পাতাগুলোতে বাক্যটি বেশির ভাগের কাছে পড়া হয় পুনরুত্থান হিসেবে, বা কালবীর কাছে ঈসা (আঃ)-এর অবতরণ হিসেবে, এর বেশি নয়। যেখানে উৎস নীরব, সেখানে নিয়ম হলো তাঁরা যেখানে থামেন সেখানেই থামা, আর তাঁরা নিজে না টানা কোনো যোগসূত্র জুড়ে না দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Together as Lafif",
          "bn": "মিশ্রিত ভিড়ে হাশর"
        },
        "p": [
          {
            "en": "The verse ends jiʾnā bikum lafīfan, We will bring you as a lafīf. At-Tabari opens the word: We gather you from your graves to the standing of the Resurrection as a lafīf, that is, intermingled, folded together, not knowing each other, none of you drawing off to his tribe and his clan. He derives it from the phrase lafaftu al-juyūsh, I folded the armies together, said when they are thrown against each other until all is mixed. Whatever is folded into something else, he adds, is lafīf with it.",
            "bn": "আয়াত শেষ হয় জিনা বিকুম লাফীফা দিয়ে, আমি তোমাদের লাফীফ হিসেবে হাজির করব। তাবারী শব্দটি খুলে দেন: তোমাদের কবর থেকে কিয়ামতের ময়দানে জড়ো করব লাফীফ হিসেবে, অর্থাৎ মিশ্রিত, একে অন্যের উপর জড়ানো, একে অন্যকে চেনে না, তোমাদের কেউ নিজের গোত্র ও পাড়ার দিকে সরে যেতে পারে না। তিনি শব্দটির উৎস দেখান লাফাফতুল জুয়ুশ বাক্যে, আমি সৈন্যদলকে একসঙ্গে জড়িয়ে দিলাম, যা বলা হয় যখন তারা একে অন্যের সঙ্গে ধাক্কা খেয়ে সব মিশে যায়। যা কিছু অন্য কিছুর সঙ্গে জড়ানো, তিনি বলেন, তা তার সঙ্গে লাফীফ।"
          },
          {
            "en": "Al-Qurtubi paints the same scene. They come from the graves intermingled from every place, believer mixed with disbeliever, not recognizing one another, none able to withdraw to his tribe. He then gathers the lexicographers. Al-Jawhari: al-lafīf is what has come together of people from diverse tribes. Al-Asma'i: lafīf is a plural with no singular, like the word for all. They pour out at the mustering, al-Qurtubi says, like scattered locusts, mixed and unknowing. The word itself refuses to let anyone in that crowd keep a separate label.",
            "bn": "কুরতুবী একই দৃশ্য আঁকেন। তারা কবর থেকে বেরিয়ে আসে সব জায়গা থেকে মিশ্রিত হয়ে, মুমিন মিশে যায় কাফিরের সঙ্গে, একে অন্যকে চেনে না, কেউ নিজের গোত্রের দিকে সরে যেতে পারে না। এরপর তিনি অভিধানবিদদের কথা টেনে আনেন। জাওহারী: আল-লাফীফ হলো নানা গোত্র থেকে জড়ো হওয়া মানুষের দল। আসমাঈ: লাফীফ এমন এক বহুবচন যার কোনো একবচন নেই, ‘সবাই’ শব্দটির মতো। হাশরের ময়দানে তারা ছড়িয়ে থাকা পঙ্গপালের মতো বেরিয়ে আসে, মিশ্রিত আর অচেনা। শব্দটি নিজেই সেই ভিড়ে কাউকে আলাদা পরিচয় ধরে রাখতে দেয় না।"
          },
          {
            "en": "Alongside this vivid sense runs a plainer one. Ibn Kathir reports from Ibn ʿAbbas, Mujahid, Qatadah and ad-Dahhak that lafīf simply means jamīʿan, all together, you and your enemies alike. Al-Baghawi holds both at once: al-lafīf is the great crowd when its kinds are mixed, believer and disbeliever, the righteous and the corrupt. At-Tabari notes that the two glosses come to a single meaning. Whether you hear all together or all jumbled, the picture is one crowd in which the old sortings of tribe and side no longer hold at all.",
            "bn": "এই জীবন্ত অর্থের পাশে চলে আরও সাদামাটা একটি অর্থ। ইবন কাসীর ইবন আব্বাস, মুজাহিদ, কাতাদা ও দাহহাক থেকে বর্ণনা করেন যে লাফীফ মানে সোজা জামিয়ান, সবাই একসঙ্গে, তোমরা আর তোমাদের শত্রুরা সমান। বাগাভী দুটোকেই একসঙ্গে ধরেন: আল-লাফীফ হলো সেই বিশাল ভিড় যখন তার নানা রকম মিশে যায়, মুমিন ও কাফির, নেককার ও পাপী। তাবারী বলেন, দুই ব্যাখ্যা এসে দাঁড়ায় একই অর্থে। ‘সবাই একসঙ্গে’ শুনুন বা ‘সব জট পাকানো’, ছবিটা এক ভিড়ের, যেখানে গোত্র আর পক্ষের পুরনো ভাগগুলো আর কোনোভাবেই টেকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report Is Attached",
          "bn": "যে হাদীস যুক্ত নেই"
        },
        "p": [
          {
            "en": "Honesty about the sources includes their silence. None of the tafsir fetched for this verse attaches a sound hadith to 17:104 itself. Ma'arif al-Qur'an does cite a sound narration close by, from Safwan ibn al-ʿAssal, reported in Abu Dawud, an-Nasa'i, at-Tirmidhi and Ibn Majah, in which the Prophet lists nine commandments as the nine signs. But that report explains 17:101, the verse of the nine signs given to Musa (AS), not the command to dwell in the land. It is sound, and it is not on this verse. Both facts belong in the record.",
            "bn": "উৎস নিয়ে সততার মধ্যে তাদের নীরবতাও পড়ে। এই আয়াতের জন্য আনা কোনো তাফসীরই ১৭:১০৪-এর সঙ্গে সহীহ হাদীস যুক্ত করে না। মাআরিফুল কুরআন কাছাকাছি একটি সহীহ বর্ণনা উদ্ধৃত করে, সাফওয়ান ইবন আসসাল থেকে, যা আছে আবু দাউদ, নাসাঈ, তিরমিযী ও ইবন মাজায়, যেখানে নবী ﷺ নয়টি আদেশকে ‘নয় নিদর্শন’ বলে গণনা করেন। কিন্তু সেই বর্ণনা ব্যাখ্যা করে ১৭:১০১, মূসা (আঃ)-কে দেওয়া নয় নিদর্শনের আয়াত, যমীনে বসবাসের আদেশ নয়। তা সহীহ, আর তা এই আয়াতের নয়। দুটো কথাই নথিতে থাকা দরকার।"
          },
          {
            "en": "For the theme that closes the verse, the gathering, one sound narration can stand beside it, though not as its commentary. Al-Bukhari records from Abu Hurayra that the Prophet said, Allah will give shade to seven on the Day when there is no shade but His. The report is sound, in Sahih al-Bukhari. It names not a land but the people the Day will shelter: the just ruler, the youth raised worshipping his Lord, the man whose heart is tied to the mosques, and the rest. It is set here as a light on the gathering, not a comment on 17:104.",
            "bn": "আয়াত যে বিষয়ে শেষ হয়, সেই হাশরের জন্য একটি সহীহ বর্ণনা এর পাশে দাঁড়াতে পারে, তবে এর ব্যাখ্যা হিসেবে নয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, আল্লাহ ৭ জনকে সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। বর্ণনাটি সহীহ, সহীহ বুখারীতে। এতে কোনো যমীনের নাম নেই, বরং নাম আছে সেই মানুষদের যাদের সেই দিন আশ্রয় দেবে: ন্যায়পরায়ণ শাসক, রবের ইবাদতে বেড়ে ওঠা যুবক, মসজিদের সঙ্গে বাঁধা হৃদয়ের মানুষ, আর বাকিরা। এটি এখানে হাশরের উপর এক আলো হিসেবে রাখা, ১৭:১০৪-এর ব্যাখ্যা হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Withholds",
          "bn": "আয়াত যা দেয় না"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in both languages. This verse describes what the text describes: a people God settled in a land after He drowned the tyrant who had oppressed them, and a Day on which He will gather all of humankind. It is history, and it is eschatology. It is not a comment on any modern people, state or border, and it licenses nothing against any living person or community. To read a settling God granted long ago as a warrant over anyone's home today is to make the verse carry what it plainly does not say.",
            "bn": "একটি কথা দুই ভাষাতেই সোজাসুজি বলা দরকার। এই আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: এক জাতি, যাদের আল্লাহ যমীনে থিতু করলেন সেই জালিমকে ডুবিয়ে দেওয়ার পর যে তাদের নিপীড়ন করেছিল, আর সেই দিন যেদিন তিনি গোটা মানবজাতিকে জড়ো করবেন। এটি ইতিহাস, আবার আখিরাতের বিবরণ। এটি আজকের কোনো জাতি, রাষ্ট্র বা সীমানা নিয়ে মন্তব্য নয়, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। বহুকাল আগে আল্লাহর দেওয়া এক থিতু হওয়াকে আজ কারও ঘরের উপর অধিকারের সনদ বানানো মানে আয়াতকে এমন কিছু বওয়ানো যা সে স্পষ্টতই বলে না।"
          },
          {
            "en": "The verse passes no political verdict on anyone now alive. Its subject is Banī Isrāʾīl as scripture names them, in a story with a fixed beginning and end, and its horizon is the gathering where tribe and side dissolve into a single lafīf. Whoever reaches for it to justify seizing or denying a land has stepped outside both the words and what the careful early commentators understood by them. The right response is the very thing the verse asks for: to remember that every ground is held on loan, and to make ready for the Day it is all left behind.",
            "bn": "এই আয়াত আজ জীবিত কারও ব্যাপারে কোনো রাজনৈতিক রায় দেয় না। এর বিষয় বানী ইসরাঈল, যেভাবে ওহি তাদের নাম দেয়, এক কাহিনিতে যার শুরু ও শেষ নির্দিষ্ট। আর এর দিগন্ত সেই হাশর, যেখানে গোত্র আর পক্ষ গলে মিশে যায় লাফীফে। কেউ যদি একে টেনে আনে কোনো যমীন দখল বা কাউকে তা থেকে বঞ্চিত করার সাফাই দিতে, সে শব্দের অর্থ আর সতর্ক প্রাচীন তাফসীরকারদের বোঝা, উভয়েরই বাইরে পা রেখেছে। আয়াতের সঠিক জবাব ঠিক সেটাই যা সে চায়: মনে রাখা যে প্রতিটি মাটি ধার হিসেবে ধরা, আর সেই দিনের জন্য তৈরি হওয়া যেদিন সব পেছনে পড়ে থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Toward the Gathering",
          "bn": "হাশরের পানে বাঁচা"
        },
        "p": [
          {
            "en": "Bring the two halves of the verse together and a way of living appears. God grants a place to stand and, in the same sentence, names the Day it ends. That is the shape of every settled life: a home that is real, a term that is fixed, and a gathering that levels every distinction we spend our days defending. The believer who takes this in does not despise the land he is given. He holds it lightly, as a trust, knowing the lease is already written and its Grantor keeps every appointment He makes.",
            "bn": "আয়াতের দুই অর্ধেক একসঙ্গে রাখুন, তখন একটা জীবনধারা ফুটে ওঠে। আল্লাহ দাঁড়ানোর একটা জায়গা দেন, আর একই বাক্যে সেই দিনের নাম বলে দেন যেদিন তা শেষ হবে। প্রতিটি থিতু জীবনের গড়নই এমন: একটা বাস্তব ঘর, একটা নির্ধারিত মেয়াদ, আর এক হাশর যা আমাদের সারা দিন আগলে রাখা প্রতিটি পার্থক্য সমান করে দেয়। যে মুমিন এটা বুঝে নেয়, সে তার পাওয়া যমীনকে তুচ্ছ করে না। সে তাকে হালকাভাবে ধরে, আমানত হিসেবে, জেনে যে ভাড়ার চুক্তি আগেই লেখা আর যিনি তা দিয়েছেন তিনি তাঁর প্রতিটি নির্ধারিত সময় রক্ষা করেন।"
          },
          {
            "en": "So the verse turns a question back on the reader. What am I building on ground I have only borrowed? The tribe I draw off to, the side I sort myself into, the address I defend as though it were mine forever, all of it dissolves in the lafīf, where no one is known by anything but his deeds. As-Sa'di caught the whole point: they are gathered so that every worker is repaid for his work. The wise response is to begin sending ahead now the one thing that will still be mine when the ground is not.",
            "bn": "তাই আয়াত পাঠকের দিকেই একটা প্রশ্ন ফিরিয়ে দেয়। শুধু ধার করা মাটির উপর আমি কী গড়ছি? যে গোত্রের দিকে আমি সরে যাই, যে পক্ষে আমি নিজেকে ফেলি, যে ঠিকানা আমি চিরকালের নিজের মনে করে আগলাই, সবই গলে যায় লাফীফে, সেই ভিড়ে যেখানে আমল ছাড়া কাউকে আর কিছু দিয়ে চেনা যায় না। সাদী গোটা কথাটা এক বাক্যে ধরেছেন: তাদের জড়ো করা হয় যাতে প্রতিটি আমলকারী তার আমলের প্রতিদান পায়। বুদ্ধিমানের কাজ হলো এখন থেকেই সেই একটা জিনিস আগে পাঠানো, যা সেই দিনও আমার থাকবে যেদিন মাটি আর আমার নয়।"
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
