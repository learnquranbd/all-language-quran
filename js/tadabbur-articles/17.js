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
            "bn": "সূরাটি সফরের কথা দিয়ে শুরু হয়নি, শুরু হয়েছে তাসবীহের একটি শব্দ দিয়ে: সুবহান, তিনি পবিত্র। ইবন কাসীর বলেন, আল্লাহ এখানে নিজের পবিত্রতা ঘোষণা করছেন, কারণ এমন কাজ তিনি ছাড়া আর কেউ করতে পারে না। তিনি ছাড়া কোনো ইলাহ নেই, তিনি ছাড়া কোনো রব নেই। মুয়াসসারও শুরুটা একইভাবে বুঝেছে: আল্লাহ নিজের শান বড় করে তুলে ধরছেন, কারণ এমন ঘটনা ঘটানোর ক্ষমতা কেবল তাঁরই। কোনো বিবরণের আগেই বিস্ময়টা সামনে আনা হয়েছে, যাতে কাজের কথা শোনার আগেই মন কাজের কর্তাকে চিনে নেয়।"
          },
          {
            "en": "Classical readers noticed that Subḥān is the language of astonishment, spoken to mark a great marvel. Ma'arif al-Qur'an draws a point from this: had the night journey been merely a dream, there would be nothing so unusual in it, for any believer may dream of far places. The opening therefore signals something outside ordinary experience. It also guards the reader from a wrong thought. However dazzling the honour about to be described, the glory belongs to God alone, and never to the one He chooses to honour.",
            "bn": "তাফসীরকারেরা লক্ষ করেছেন, সুবহান বিস্ময়ের শব্দ। বড় কোনো আশ্চর্য ঘটনার কথা বলতে গিয়েই মানুষ এ শব্দ বলে। মাআরিফুল কুরআন এখান থেকে একটি যুক্তি দেখায়: রাতের এই সফর যদি নিছক স্বপ্ন হতো, তাতে অবাক হওয়ার তেমন কিছু থাকত না, কারণ যেকোনো মুমিনই দূর দেশের স্বপ্ন দেখতে পারে। তাই শুরুর এই শব্দই জানিয়ে দেয়, ঘটনাটা সাধারণ অভিজ্ঞতার বাইরের। পাশাপাশি শব্দটি পাঠককে একটি ভুল ধারণা থেকেও বাঁচায়। সামনে যত বড় সম্মানের কথাই আসুক, মহিমা কেবল আল্লাহর। যাকে তিনি সম্মান দেন, মহিমা কখনো তার নয়।"
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
            "bn": "এখানে ক্রিয়াপদটি আসরা। এর মূল ধাতুর অর্থ, কাউকে রাতের বেলা সফর করানো। পরের শব্দ লাইলান, মানে রাতে। এতে অর্থ নিয়ে আর কোনো সন্দেহ থাকে না। মাআরিফুল কুরআন বলে, লাইলান শব্দটি ইচ্ছে করেই অনির্দিষ্ট রাখা হয়েছে: গোটা রাত নয়, রাতের একটা অংশ। ইবন কাসীর এর অর্থ করেন গভীর রাত। সাদী দেখান, দূরত্বটাই এক বিস্ময়: আল্লাহ তাঁর বান্দাকে বিশাল পথ পার করিয়ে সেই রাতেই ফিরিয়ে এনেছেন। কোনো সাধারণ মুসাফিরের পক্ষে এমন সফর সম্ভব নয়।"
          },
          {
            "en": "The taking is God's own act: asrā bi-ʿabdihi, He caused His servant to travel. as-Saʿdī reads this as part of God's care and gentleness toward him, easing his every affair and granting him favours beyond those of the first people and the last. The night, in the tafsir, is not incidental. It is the hour of stillness and secrecy, when the servant who stood in prayer while others slept is now carried where nobody else has gone. The honour is quiet, unseen by the sleeping city.",
            "bn": "সফরটা আল্লাহ নিজেই করিয়েছেন: আসরা বিআবদিহি, তিনি তাঁর বান্দাকে সফর করালেন। সাদী এখানে দেখেন তাঁর প্রতি আল্লাহর যত্ন আর কোমলতা। আল্লাহ তাঁর প্রতিটি কাজ সহজ করে দিয়েছেন, আর তাঁকে এমন নিয়ামত দিয়েছেন যা আগের-পরের সবার নিয়ামতকে ছাড়িয়ে যায়। তাফসীরের চোখে রাতটা কাকতালীয় নয়। রাত নীরবতা আর গোপনীয়তার সময়। অন্যরা যখন ঘুমাত, এই বান্দা তখন দাঁড়িয়ে নামাজ পড়তেন। এখন তাঁকেই নেওয়া হচ্ছে এমন জায়গায়, যেখানে আর কেউ কখনো যায়নি। সম্মানটা আসে নিঃশব্দে, ঘুমন্ত শহর তা টেরও পায় না।"
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
            "bn": "জীবনের সবচেয়ে উঁচু মুহূর্তে আল্লাহ তাঁর রাসূলকে নবুয়তের পরিচয়ে বা ভালোবাসার নামে ডাকেননি, ডেকেছেন বন্দেগির পরিচয়ে: বিআবদিহি, তাঁর বান্দাকে। মাআরিফুল কুরআন বলে, একজন মানুষ এর চেয়ে বড় সম্মান কখনো পেতে পারে না। আল্লাহ যখন নিজে বেছে নিয়ে কাউকে আদর ও নৈকট্যের মুহূর্তে আমার বান্দা বলে ডাকেন, তখন সেই শব্দের ভেতরে লুকিয়ে থাকে ভালোবাসার এক অনন্য বন্ধন। তাফসীরকার এখান থেকে সোজা একটি শিক্ষা নেন: মানুষ সবচেয়ে উঁচুতে যেখানে পৌঁছাতে পারে, তা হলো আল্লাহর খাঁটি বান্দা হয়ে ওঠা।"
          },
          {
            "en": "as-Saʿdī notices that God names him His servant in three great settings: here in the night journey, at the sending down of the Qur'an, and in the challenge to produce its like. In each, he reads, the Prophet ﷺ attained these towering stations precisely because he perfected his servitude to his Lord. The title is not a step down from honour but its very source. He rose because he bowed. What lifted him above all people was that he belonged, more completely than anyone, to God alone.",
            "bn": "সাদী লক্ষ করেন, তিনটি বড় প্রসঙ্গে আল্লাহ তাঁকে বান্দা বলে ডেকেছেন: এখানে রাতের সফরে, কুরআন নাজিলের কথায়, আর কুরআনের মতো কিছু এনে দেখানোর চ্যালেঞ্জে। সাদীর মতে, তিনটি ক্ষেত্রেই নবী ﷺ এত উঁচু মর্যাদায় পৌঁছেছেন ঠিক এ কারণে যে তিনি তাঁর রবের বন্দেগি পূর্ণ করেছিলেন। তাই বান্দা পরিচয়টা সম্মান থেকে নিচে নামা নয়, এটাই সম্মানের উৎস। তিনি মাথা নত করেছিলেন বলেই উঁচু হয়েছিলেন। সব মানুষের উপরে তাঁকে তুলেছিল একটি জিনিস: অন্য যে কারও চেয়ে বেশি পূর্ণভাবে তিনি কেবল আল্লাহর ছিলেন।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a second reason for the word. Because the journey from start to finish is filled with wonders, someone might slip, as others did over earlier prophets, into thinking its traveller more than a man. By naming him servant, the Qur'an closes that door: with all these marvels, he remains a servant of God, not a god. The same Qur'an calls the righteous the servants of the Most Merciful (25:63), where being a servant is a title of nearness and not of lowliness at all.",
            "bn": "মাআরিফুল কুরআন এই শব্দের আরও একটি কারণ বলে। সফরটা শুরু থেকে শেষ পর্যন্ত বিস্ময়ে ভরা। তাই কেউ ভুল করে ভাবতে পারত, এই মুসাফির মানুষের চেয়ে বেশি কিছু, যেমন আগের নবীদের বেলায় অনেকে ভেবেছিল। তাঁকে বান্দা বলে কুরআন সেই পথ বন্ধ করে দিয়েছে: এত বিস্ময়ের পরও তিনি আল্লাহর বান্দা, ইলাহ নন। এই কুরআনই নেককারদের বলেছে দয়াময়ের বান্দা (২৫:৬৩)। সেখানে বান্দা হওয়া নৈকট্যের পরিচয়, হীনতার একেবারেই নয়।"
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
            "bn": "সফর শুরু হয় মক্কার পবিত্র মসজিদ মাসজিদুল হারাম থেকে, শেষ হয় জেরুজালেমের দূরবর্তী মসজিদ মাসজিদুল আকসায়। সাদী প্রথমটিকে বলেন সব মসজিদের মধ্যে সবচেয়ে সম্মানিত, আর দ্বিতীয়টিকে বলেন উঁচু মর্যাদার মসজিদ, বহু নবীর বাসস্থান। আয়াত দুটিরই নাম নেয়, আর এক রাতের মধ্যে দুটিকে এক সুতোয় বাঁধে। যে ঘরে নবী ﷺ নামাজ পড়তেন, সেটি জুড়ে যায় সেই ঘরের সঙ্গে, যেখানে তাঁর আগের নবীরা নামাজ পড়েছেন। নবুয়তের গোটা ধারাটা যেন একটিই পথ হয়ে ফুটে ওঠে।"
          },
          {
            "en": "Of al-Aqṣā the verse says We have blessed its surroundings. Ibn Kathir reads the blessing as its crops and fruits; as-Saʿdī, as its abundant trees, rivers and lasting fertility, and also its rank among mosques and the reward of travelling to it for worship. Ma'arif al-Qur'an widens the word surroundings to the whole land of Syria and Palestine, blessed both in religion, as the home and qiblah of earlier prophets, and in the world, with its streams and green fields. The place itself carries the memory of worship.",
            "bn": "আকসা সম্পর্কে আয়াত বলছে, আমি তার চারপাশে বরকত দিয়েছি। ইবন কাসীরের মতে এই বরকত হলো সেখানকার ফসল আর ফলমূল। সাদীর মতে, সেখানকার অজস্র গাছপালা, নদী আর স্থায়ী উর্বরতা। সঙ্গে আছে মসজিদগুলোর মধ্যে এর মর্যাদা, আর ইবাদতের নিয়তে সেখানে সফর করার সওয়াব। মাআরিফুল কুরআন চারপাশ বলতে গোটা সিরিয়া ও ফিলিস্তিন অঞ্চলকে ধরে। এই ভূমি দ্বীনের দিক থেকে বরকতময়, কারণ এটা আগের নবীদের বাসভূমি ও কিবলা ছিল। দুনিয়ার দিক থেকেও বরকতময়, তার ঝরনা আর সবুজ মাঠের জন্য। জায়গাটা নিজেই ইবাদতের স্মৃতি বয়ে বেড়ায়।"
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
            "bn": "একটি সহীহ হাদিস আয়াতের দুই মসজিদকে সরাসরি এক সূত্রে বাঁধে। বুখারী বর্ণনা করেছেন, আবু যর (রাঃ) জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, পৃথিবীতে সবার আগে কোন মসজিদ বানানো হয়েছিল? তিনি বললেন, মাসজিদুল হারাম। আমি বললাম, তারপর কোনটি? তিনি বললেন, মাসজিদুল আকসা। আমি জিজ্ঞেস করলাম, দুটির মাঝে কত সময়ের ব্যবধান? তিনি বললেন, চল্লিশ বছর। তারপর বললেন, যেখানেই নামাজের সময় হয়ে যায়, সেখানেই নামাজ পড়ে নাও, ফজিলত তাতেই। মুসলিমও তাঁর সহীহ গ্রন্থে একই হাদিস বর্ণনা করেছেন।"
          },
          {
            "en": "The hadith honours both houses named in the verse and sets them in order: the Kaʿbah first, then al-Aqṣā, forty years apart. Yet its closing line keeps the worshipper from making holiness a matter of place alone. The whole earth has been made a place of prayer, so wherever the hour finds you, you may pray. The journey exalts al-Aqṣā without imprisoning worship inside its walls. The door of nearness to God, the hadith reminds us, opens on every patch of ground.",
            "bn": "আয়াতে যে দুই ঘরের নাম এসেছে, হাদিসটি দুটিকেই সম্মান দেয় এবং তাদের ক্রমও বলে দেয়: আগে কাবা, তারপর আকসা, মাঝে চল্লিশ বছরের ব্যবধান। তবে শেষ বাক্যটি ইবাদতকারীকে সাবধান করে, পবিত্রতাকে যেন শুধু জায়গার সঙ্গে বেঁধে ফেলা না হয়। গোটা জমিনকেই নামাজের জায়গা বানানো হয়েছে, তাই যেখানেই নামাজের সময় হয়, সেখানেই আপনি নামাজ পড়তে পারেন। এই সফর আকসাকে মর্যাদা দেয়, কিন্তু ইবাদতকে তার দেয়ালের ভেতরে আটকে রাখে না। হাদিসটি মনে করিয়ে দেয়, আল্লাহর নৈকট্যের দরজা জমিনের প্রতিটি কোণেই খোলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Awake, or a Vision?",
          "bn": "জাগ্রত অবস্থায়, নাকি স্বপ্নে?"
        },
        "p": [
          {
            "en": "The early scholars differed over how the journey happened, and the tafsir keeps the difference open. al-Qurṭubī reports a group holding that it was a journey of the soul: the Prophet's body never left its resting place, and what he saw was a true vision, for the visions of prophets are true. He names Muʿāwiyah and ʿĀʾishah (may God be pleased with them) as holding this, and mentions it also from al-Ḥasan and Ibn Isḥāq. at-Tabari records ʿĀʾishah's own words, that his body was not missed; rather God made his soul journey.",
            "bn": "সফরটা কীভাবে হয়েছিল, তা নিয়ে শুরুর যুগের আলিমদের মধ্যে মতভেদ ছিল, আর তাফসীর সেই মতভেদ খোলাখুলিই রেখে দেয়। কুরতুবী জানান, একদল আলিমের মতে এটি ছিল রূহের সফর: নবীর দেহ তাঁর শোয়ার জায়গা ছেড়ে কোথাও যায়নি, আর তিনি যা দেখেছেন তা ছিল সত্য স্বপ্ন, কারণ নবীদের স্বপ্ন সত্য হয়। কুরতুবী বলেন, মুআবিয়া ও আয়িশা (রাঃ) এই মত পোষণ করতেন, আর হাসান ও ইবন ইসহাক থেকেও এ মত বর্ণিত আছে। তাবারী আয়িশা (রাঃ)-এর নিজের কথা উদ্ধৃত করেছেন: রাসূলের দেহ বিছানা থেকে হারিয়ে যায়নি, বরং আল্লাহ তাঁর রূহকে সফর করিয়েছেন।"
          },
          {
            "en": "A second group held that the journey to Jerusalem was in the body and while awake. al-Qurṭubī argues the point from the wording itself: God says He took His servant, and ʿabd names body and soul together, not His servant's soul alone; and He opens with Glory, which suits a bodily marvel rather than a dream. Ma'arif al-Qur'an reports this to be the position of the majority. at-Tabari, having laid out both readings, leaves the matter with God, who knows best which of them it was. The tafsir names the sides and forces no verdict.",
            "bn": "আরেক দলের মতে, জেরুজালেম পর্যন্ত সফর হয়েছিল দেহসহ, জাগ্রত অবস্থায়। কুরতুবী আয়াতের শব্দ থেকেই এর দলিল দেন। আল্লাহ বলেছেন, তিনি তাঁর বান্দাকে নিয়ে গেছেন। আর আবদ বা বান্দা বলতে দেহ ও রূহ দুটোই বোঝায়, শুধু রূহ নয়। তা ছাড়া আয়াতটি শুরু হয়েছে সুবহান দিয়ে, যা দেহসহ ঘটা কোনো বিস্ময়ের সঙ্গেই মানায়, স্বপ্নের সঙ্গে নয়। মাআরিফুল কুরআন জানায়, অধিকাংশ আলিমের মত এটাই। তাবারী দুই মতই তুলে ধরে বিষয়টা আল্লাহর ওপর ছেড়ে দেন, কোনটি ঘটেছিল তা তিনিই ভালো জানেন। তাফসীর দুই পক্ষের কথাই বলে, কোনো রায় চাপিয়ে দেয় না।"
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
            "bn": "আয়াত নিজেই উদ্দেশ্যটা বলে দেয়: লিনুরিয়াহু মিন আয়াতিনা, যাতে আমি তাঁকে আমার কিছু নিদর্শন দেখাই। ইবন কাসীরের মতে এগুলো ছিল বড় বড় নিদর্শন। সাদী বলেন, আল্লাহ তাঁকে এমন নিদর্শন দেখিয়েছেন, যা তাঁর হেদায়েত, অন্তর্দৃষ্টি, দৃঢ়তা আর সত্য-মিথ্যা চেনার ক্ষমতা আরও বাড়িয়ে দিয়েছে। এখানে বাক্যের গঠনটা একটু থেমে দেখার মতো। নবী ﷺ দেখছেন, কিন্তু দেখাচ্ছেন আল্লাহ। এত উঁচুতে পৌঁছেও তিনি উপহার গ্রহণকারী, উপহারদাতা নন। রাতের এই সফর শুরু থেকে শেষ পর্যন্ত তাঁর রবই তাঁর জন্য ঘটিয়েছেন।"
          },
          {
            "en": "The verse then closes on His names: He is the Hearing, the Seeing. al-Muyassar unfolds them, that He hears every voice and sees all that can be seen, and gives everyone his due in this world and the next. The seal answers the opening. A God who is beyond compare, who alone could do such a thing, is also the God who hears and sees His servant closely. Distance and nearness meet in Him. The God exalted above all is not far from the servant He chooses to honour.",
            "bn": "আয়াত শেষ হয় তাঁর দুটি নাম দিয়ে: তিনি সর্বশ্রোতা, সর্বদ্রষ্টা। মুয়াসসার এর ব্যাখ্যায় বলে, তিনি প্রতিটি আওয়াজ শোনেন, যা কিছু দেখা যায় সবই দেখেন, আর দুনিয়া ও আখিরাতে প্রত্যেককে তার প্রাপ্য দেন। আয়াতের শেষটা এভাবে শুরুর সঙ্গে মিলে যায়। যে আল্লাহর কোনো তুলনা নেই, এমন কাজ যিনি একাই করতে পারেন, তিনিই আবার তাঁর বান্দার কথা কাছ থেকে শোনেন, তার অবস্থা কাছ থেকে দেখেন। দূরত্ব আর নৈকট্য তাঁর মধ্যেই মিলেছে। যিনি সবকিছুর ঊর্ধ্বে, তিনি সেই বান্দা থেকে দূরে নন, যাকে তিনি সম্মান দিতে বেছে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Title Worth Having",
          "bn": "পাওয়ার মতো পরিচয়"
        },
        "p": [
          {
            "en": "Read whole, the verse teaches by its very order. It begins with God's glory and ends with His hearing and sight; between the two it carries His servant by night and shows him wonders. And at the centre of it all stands one word: ʿabd. The most honoured human being, at his most honoured hour, is named by the plainest relationship a person can have with God, which is simply to belong to Him. as-Saʿdī's point returns here: he reached the heights by perfecting that belonging.",
            "bn": "পুরো আয়াতটা একসঙ্গে পড়লে দেখা যায়, এর সাজানোর ধরনটাই একটা শিক্ষা। শুরু আল্লাহর মহিমা দিয়ে, শেষ তাঁর শোনা ও দেখা দিয়ে। মাঝখানে তিনি রাতের বেলা তাঁর বান্দাকে নিয়ে যান, তাঁকে বিস্ময় দেখান। আর সবকিছুর কেন্দ্রে একটি শব্দ: আবদ। সবচেয়ে সম্মানিত মানুষটিকে তাঁর সবচেয়ে সম্মানের মুহূর্তে ডাকা হয়েছে আল্লাহর সঙ্গে মানুষের সবচেয়ে সাদামাটা সম্পর্কের নামে: কেবল তাঁর হয়ে থাকা। সাদীর কথাটা এখানে আবার আসে: এই হয়ে থাকাকে পূর্ণ করেই তিনি উঁচুতে পৌঁছেছিলেন।"
          },
          {
            "en": "For a reader, that reorders the whole idea of a life worth living. We reach for titles that raise us over other people; the verse hands us the title that sets us lowest before our Lord and calls it the summit. To be God's servant is not a station left behind on the way up. It is itself the way up. What honoured the Prophet ﷺ is offered, in its own measure, to anyone willing to belong to God before belonging to anything else at all.",
            "bn": "আমাদের জন্য এতে সার্থক জীবনের পুরো ধারণাটাই নতুন করে সাজাতে হয়। আমরা এমন পরিচয় খুঁজি, যা আমাদের অন্য মানুষের ওপরে তোলে। আয়াতটি আমাদের হাতে দেয় এমন এক পরিচয়, যা রবের সামনে আমাদের সবচেয়ে নিচু করে, আর সেটাকেই বলে চূড়া। আল্লাহর বান্দা হওয়া উপরে ওঠার পথে পেছনে ফেলে আসা কোনো ধাপ নয়। এটাই উপরে ওঠার পথ। যা নবী ﷺ-কে সম্মানিত করেছিল, নিজ নিজ মাপে তা যে কেউ পেতে পারে, যদি সে অন্য সবকিছুর আগে আল্লাহর হয়ে থাকতে রাজি হয়।"
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
            "en": "Surah al-Isra opens in 17:1 with the night journey, and in 17:2 turns at once to an earlier book: We gave Musa (AS) the Scripture and made it a guidance for the Children of Israel. Verses 17:4 to 17:8 then tell what that community was told in the Scripture, two corruptions on the earth and two reckonings, ending with: if you return, We return. Then comes our verse, and it opens with a pointing word: inna hadha al-Qur'an, indeed this Qur'an.",
            "bn": "সূরা আল-ইসরার শুরু ১৭:১ আয়াতে রাতের সফর দিয়ে। পরের আয়াতেই, ১৭:২-এ, কথা চলে যায় আগের এক কিতাবে: আমি মূসা (আঃ)-কে কিতাব দিয়েছিলাম, আর তাকে বনী ইসরাঈলের জন্য হিদায়াত বানিয়েছিলাম। ১৭:৪ থেকে ১৭:৮ আয়াত জানায়, সেই কিতাবে ওই জাতিকে কী বলে দেওয়া হয়েছিল: পৃথিবীতে দুই দফা বিপর্যয়, আর দুবারই তার পরিণতি। শেষ কথাটি ছিল, তোমরা আবার করলে আমিও আবার করব। এরপরই আমাদের আয়াত, শুরুতেই একটি ইশারার শব্দ: ইন্না হাযাল কুরআন, নিশ্চয়ই এই কুরআন।"
          },
          {
            "en": "Al-Qurtubi traces the thread. Having mentioned the ascension, he says, Allah mentioned what He had decreed for the Children of Israel, and that was itself a proof of the prophethood of Muhammad ﷺ; then He made clear that the Book He sent down to him is a cause of guidance. Ma'arif al-Qur'an reads the sequence the same way: the opening of the surah showed the majesty of his prophethood through the miracle of the Mi'raj, and these verses bring the miracle of the Qur'an as its confirmation.",
            "bn": "এই ধারাটা কুরতুবী খুলে দেখান। তাঁর কথায়, মি'রাজের কথা বলার পর আল্লাহ বনী ইসরাঈলের ব্যাপারে তাঁর ফয়সালার কথা বলেছেন, আর সেটিই ছিল মুহাম্মাদ ﷺ-এর নবুওয়াতের এক প্রমাণ। তারপর জানিয়ে দিয়েছেন, তাঁর উপর নাজিল করা কিতাব হিদায়াতের উপায়। মাআরিফুল কুরআনও ধারাটা একইভাবে পড়ে। সূরার শুরুতে মি'রাজের মু'জিযা দিয়ে রাসূলুল্লাহ ﷺ-এর নবুওয়াতের মহিমা দেখানো হয়েছে। আর এই আয়াতগুলো তার সমর্থনে নিয়ে আসে কুরআনের মু'জিযা।"
          },
          {
            "en": "So the word hadha, this, does work. The reader has just heard how a people who received a scripture fared, and is now turned to the Book in front of him. The root h-d-y appears in both places: as a noun, hudan, for the book of Musa (AS) in 17:2, and here as a present-tense verb, yahdi, it guides. Ibn Kathir opens his comment by saying that Allah here praises His mighty Book. As-Sa'di says the verse tells of the Qur'an's nobility and majesty.",
            "bn": "তাই হাযা, এই, শব্দটি এমনি আসেনি। একটি জাতি কিতাব পেয়ে কী করেছিল, পাঠক এইমাত্র তা শুনলেন। এবার তাঁর চোখ ফেরানো হয় সামনে থাকা কিতাবের দিকে। হ-দ-য় ধাতুটি দুই জায়গাতেই আছে। ১৭:২ আয়াতে মূসা (আঃ)-এর কিতাবের জন্য তা বিশেষ্য, হুদা। আর এখানে তা বর্তমান কালের ক্রিয়া, ইয়াহদী, পথ দেখায়। ইবন কাসীর তাঁর ব্যাখ্যা শুরু করেন এই বলে যে আল্লাহ এখানে নিজের মহান কিতাবের প্রশংসা করছেন। সা'দী বলেন, আয়াতটি কুরআনের মর্যাদা ও মহিমার খবর দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Guides, Then Keeps on Course",
          "bn": "পথ দেখায়, পথে রাখে"
        },
        "p": [
          {
            "en": "Yahdi, it guides. At-Tabari unpacks the verb with two of his own: yurshidu wa yusaddidu, it directs and it keeps on target. And he names whom: man ihtada bihi, whoever takes guidance from it. The Book does the acting, but the guidance lands on those who take it. He repeats the point a few lines later: this Qur'an guides the servants of Allah who seek guidance through it to the straight course of the path. Al-Muyassar keeps the first of his two verbs: it directs people to the best of ways.",
            "bn": "ইয়াহদী, পথ দেখায়। তাবারী ক্রিয়াটি খুলে বলেন নিজের দুটি ক্রিয়া দিয়ে: ইউরশিদু ওয়া ইউসাদ্দিদু, পথ বাতলে দেয় এবং লক্ষ্যে স্থির রাখে। কাকে, তাও বলেন: মান ইহতাদা বিহী, যে এর কাছ থেকে হিদায়াত নেয়। কাজটা কিতাবের, কিন্তু হিদায়াত গিয়ে পৌঁছায় তার কাছে, যে তা গ্রহণ করে। কয়েক লাইন পরে তিনি কথাটা আবার বলেন: আল্লাহর যে বান্দারা এর মাধ্যমে হিদায়াত খোঁজে, এই কুরআন তাদের সঠিক পথের মাঝরাস্তায় নিয়ে যায়। মুয়াসসার তাবারীর প্রথম ক্রিয়াটিই নেয়: কুরআন মানুষকে সবচেয়ে সুন্দর পথ বাতলে দেয়।"
          },
          {
            "en": "The two descriptions do not compete; they see one act from two sides. Al-Muyassar states the reach of the offer, which is people at large. At-Tabari states where it takes hold, in whoever turns to the Book for it. Ibn Kathir joins the same condition to the good news that follows: the believers in it, who do righteous deeds in accordance with it. A guide who walks ahead guides only those who follow, and the verse's own second clause describes the followers.",
            "bn": "দুটি বর্ণনা পরস্পরের প্রতিদ্বন্দ্বী নয়। একই কাজকে দুই দিক থেকে দেখা। মুয়াসসার বলে দেয় দাওয়াত কতদূর পৌঁছায়: সাধারণভাবে সব মানুষের কাছে। তাবারী বলেন তা কোথায় শিকড় গাড়ে: যে কিতাবের কাছে হিদায়াত চাইতে আসে, তার মধ্যে। পরের সুসংবাদের সঙ্গে ইবন কাসীরও একই শর্ত জোড়েন: যারা এতে ঈমান আনে, আর এর দাবি অনুযায়ী নেক আমল করে। সামনে হাঁটা পথপ্রদর্শক কেবল তাকেই পথ দেখান, যে তাঁর পিছু নেয়। আর সেই অনুসারীদের বর্ণনা আয়াতের দ্বিতীয় অংশেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Aqwam Is a Comparative",
          "bn": "আক্বওয়াম তুলনাবাচক শব্দ"
        },
        "p": [
          {
            "en": "Lillati hiya aqwam: to that which is aqwam. The word is an elative, the af'al form Arabic uses for more and most, built on the root q-w-m, to stand upright. At-Tabari makes the comparison explicit: the path that is more upright than the other paths. Ibn Kathir goes to the superlative: it guides to the straightest of ways, aqwam al-turuq, and the clearest of paths, awdah al-subul. Al-Muyassar renders it ahsan al-turuq, the best of ways.",
            "bn": "লিল্লাতী হিয়া আক্বওয়াম: যা আক্বওয়াম, তার দিকে। শব্দটি আফআল গঠনের, আরবি যা দিয়ে বেশি বা সবচেয়ে বোঝায়। ধাতু ক্ব-ও-ম, যার মূল অর্থ সোজা হয়ে দাঁড়ানো। তাবারী তুলনাটা স্পষ্ট করে দেন: সেই পথ, যা অন্য সব পথের চেয়ে বেশি সোজা। ইবন কাসীর সরাসরি সর্বোচ্চ মাত্রায় যান: কুরআন পথ দেখায় সবচেয়ে সোজা রাস্তার দিকে, আক্বওয়ামুত তুরুক, আর সবচেয়ে স্পষ্ট পথের দিকে, আওদাহুস সুবুল। মুয়াসসার বলে আহসানুত তুরুক, সবচেয়ে সুন্দর পথ।"
          },
          {
            "en": "Al-Qurtubi gives three elatives in a row to fill out the one: the way that is asadd, a'dal and aswab, most sound in its aim, most just, most correct. As-Sa'di uses two: a'dal wa a'la, most just and highest. Al-Baghawi keeps one: aswab, most correct. Read together, these are not rival definitions. Each picks out a facet of straightness: aim, justice, height, clarity, correctness. What they share is the comparison itself: set beside every other path, the Qur'an's is the straighter.",
            "bn": "কুরতুবী একটি শব্দের জায়গায় পরপর তিনটি তুলনাবাচক শব্দ বসান: সেই পথ, যা আসাদ্দ, আ'দাল ও আসওয়াব। অর্থাৎ লক্ষ্যের দিক থেকে সবচেয়ে নির্ভুল, সবচেয়ে ন্যায্য, সবচেয়ে সঠিক। সা'দী নেন দুটি: আ'দাল ওয়া আ'লা, সবচেয়ে ন্যায্য ও সবচেয়ে উঁচু। বাগাভী রাখেন একটি: আসওয়াব, সবচেয়ে সঠিক। পাশাপাশি পড়লে বোঝা যায়, এগুলো একে অন্যের প্রতিদ্বন্দ্বী সংজ্ঞা নয়। প্রত্যেকে সোজা হওয়ার একটি করে দিক তুলে ধরেছেন: লক্ষ্য, ন্যায়, উচ্চতা, স্পষ্টতা, নির্ভুলতা। সবার মিল তুলনাটিতে: অন্য সব পথের পাশে রাখলে কুরআনের পথটিই বেশি সোজা।"
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
            "en": "Allati is a feminine relative pronoun, that which, and the noun it describes is not in the verse. Al-Qurtubi states the grammar outright: allati is an attribute of an omitted noun, and he supplies al-tariqa, the way. Al-Baghawi supplies the same word first. At-Tabari writes al-sabil allati, the path which, treating that noun as feminine. Ibn Kathir's gloss stays inside the same picture of ways and paths. On all of these readings, what the Qur'an guides to is a road.",
            "bn": "আল্লাতী স্ত্রীলিঙ্গ সম্বন্ধবাচক সর্বনাম, মানে যেটি। কিন্তু কোন বিশেষ্যের কথা বলা হচ্ছে, তা আয়াতে নেই। কুরতুবী ব্যাকরণটা সরাসরি বলেন: আল্লাতী একটি উহ্য বিশেষ্যের বিশেষণ, আর সেখানে তিনি বসান আত-তারীক্বা, পথ। বাগাভীও প্রথমে একই শব্দ বসান। তাবারী লেখেন আস-সাবীল আল্লাতী, যে পথ, অর্থাৎ সাবীল শব্দটিকে তিনি স্ত্রীলিঙ্গ হিসেবে নেন। ইবন কাসীরের ব্যাখ্যাও রাস্তা আর পথের সেই একই ছবির মধ্যে থাকে। এসব পড়ায় কুরআন যেদিকে নিয়ে যায়, তা একটি রাস্তা।"
          },
          {
            "en": "Others supply a noun that turns the road into a condition or a word. Al-Qurtubi reports from al-Zajjaj: to the hal, the state, that is the most upright of states, and that is affirming the oneness of Allah and believing in His messengers; he adds that al-Kalbi and al-Farra' said the same. Al-Baghawi records a further reading under qila, it is said: the kalima, the word, that is most just, which is the testimony that there is no god but Allah.",
            "bn": "অন্যরা এমন বিশেষ্য বসান, যাতে রাস্তার ছবিটা বদলে হয়ে যায় অবস্থা বা বাক্য। কুরতুবী যাজ্জাজের মত উদ্ধৃত করেন: সেই হালের দিকে, অর্থাৎ সেই অবস্থার দিকে, যা সব অবস্থার মধ্যে সবচেয়ে সঠিক। আর তা হলো আল্লাহর তাওহীদ এবং তাঁর রাসূলদের প্রতি ঈমান। তিনি যোগ করেন, কালবী ও ফাররাও একই কথা বলেছেন। বাগাভী কীলা, অর্থাৎ বলা হয়, দিয়ে আরেকটি মত লিখে রাখেন: সেই কালিমা, যা সবচেয়ে ন্যায্য। আর তা হলো লা ইলাহা ইল্লাল্লাহর সাক্ষ্য।"
          },
          {
            "en": "These are different fillings, and they are kept apart here rather than reduced to one. A road is walked; a state is something a person is in; a word is said and held to. Al-Zajjaj's state and al-Baghawi's word both arrive at the oneness of Allah, the first adding belief in the messengers. The road readings arrive, in at-Tabari and al-Muyassar, at the religion itself. The verse left the noun unsaid, and the commentators between them heard more than one.",
            "bn": "এগুলো আলাদা আলাদা পূরণ, আর এখানে সেগুলোকে একটিতে নামিয়ে না এনে আলাদাভাবেই রাখা হলো। রাস্তার উপর দিয়ে হাঁটা হয়। অবস্থার মধ্যে মানুষ থাকে। কালিমা মুখে বলা হয়, আর আঁকড়ে ধরা হয়। যাজ্জাজের অবস্থা আর বাগাভীর কালিমা, দুটোই গিয়ে পৌঁছায় আল্লাহর তাওহীদে। প্রথমটির সঙ্গে আছে রাসূলদের প্রতি ঈমানও। আর রাস্তার পড়াগুলো তাবারী ও মুয়াসসারে গিয়ে পৌঁছায় খোদ দ্বীনে। আয়াত বিশেষ্যটি বলেনি, আর মুফাসসিররা মিলে তাতে একাধিক অর্থ শুনেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Has a Name",
          "bn": "পথটির একটি নাম আছে"
        },
        "p": [
          {
            "en": "At-Tabari names the path: that is the religion of Allah with which He sent His prophets, and it is Islam. Al-Muyassar says likewise: the best of ways, and that is the millah of Islam. At-Tabari then describes the straight course of the path as the path from which the rest of the people of the creeds who denied the Qur'an strayed. On his reading the comparison in aqwam lies between the religion the prophets brought and the paths that departed from it.",
            "bn": "তাবারী পথটির নাম বলেন: তা আল্লাহর দ্বীন, যা দিয়ে তিনি তাঁর নবীদের পাঠিয়েছেন, আর তা হলো ইসলাম। মুয়াসসারও বলে: সবচেয়ে সুন্দর পথ, আর তা হলো ইসলামের মিল্লাত। এরপর তাবারী সেই পথের মাঝরাস্তার বর্ণনা দেন এভাবে: কুরআনকে অস্বীকারকারী অন্য সব মিল্লাতের লোকেরা এ পথ থেকেই সরে গেছে। তাঁর পড়ায় আক্বওয়াম শব্দের তুলনাটা দুই জিনিসের মধ্যে: নবীদের আনা দ্বীন, আর তা থেকে সরে যাওয়া পথগুলো।"
          },
          {
            "en": "At-Tabari also preserves an early gloss from Ibn Zayd: allati hiya aswab, that which is most correct; it is the right and it is the truth, and what opposes it is falsehood. Ibn Zayd then recited two verses from the same root. One is 98:3, fiha kutubun qayyimah, of which he said: in them is the truth, with no crookedness. The other is 18:1 and 18:2, the Book in which Allah placed no crookedness, qayyiman, which Ibn Zayd glosses as mustaqiman, straight.",
            "bn": "তাবারী ইবন যায়দের একটি প্রাচীন ব্যাখ্যাও সংরক্ষণ করেছেন: আল্লাতী হিয়া আসওয়াব, যা সবচেয়ে সঠিক। সেটিই সঠিক, সেটিই হক, আর তার বিপরীত হলো বাতিল। এরপর ইবন যায়দ একই ধাতুর শব্দ আছে এমন দুটি আয়াত তিলাওয়াত করেন। একটি ৯৮:৩, ফীহা কুতুবুন ক্বাইয়িমা। এর ব্যাখ্যায় তিনি বলেন, এতে আছে হক, কোনো বক্রতা নেই। অন্যটি ১৮:১ ও ১৮:২, যে কিতাবে আল্লাহ কোনো বক্রতা রাখেননি, ক্বাইয়িমান। ইবন যায়দ এর অর্থ করেন মুস্তাক্বীমান, সোজা।"
          },
          {
            "en": "Set beside 17:9, the verse 18:2 runs on almost as ours does: it gives good tidings to the believers who do righteous deeds that they will have a reward. There the reward is hasan, good; here it is kabir, great. Ibn Zayd's pairing shows how an early reader heard aqwam. For him it was not an abstract ideal floating free of the text, but the quality of a Book with no bend anywhere in it.",
            "bn": "১৭:৯-এর পাশে রাখলে ১৮:২ আয়াতটি প্রায় আমাদের আয়াতের মতোই এগোয়: নেক আমলকারী মুমিনদের সুসংবাদ দেয় যে তাদের জন্য প্রতিদান আছে। সেখানে প্রতিদান হাসান, উত্তম। এখানে কাবীর, মহা। ইবন যায়দের এই জোড়া থেকে দেখা যায়, প্রথম যুগের এক পাঠক আক্বওয়াম শব্দটি কীভাবে শুনেছিলেন। তাঁর কাছে এটি পাঠ থেকে আলগা কোনো বিমূর্ত আদর্শ নয়। এটি এমন এক কিতাবের গুণ, যার কোথাও কোনো বাঁক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Belief, Deed and Character",
          "bn": "বিশ্বাস, আমল আর আখলাক"
        },
        "p": [
          {
            "en": "As-Sa'di widens the field. Aqwam, he says, means most just and highest in beliefs, in deeds and in character. Then he draws the consequence for the person: whoever is guided by what the Qur'an calls to becomes the most complete of people, the most upright of them and the best guided in all his affairs. The elative of the verse returns in his sentence as aqwamuhum, the most upright of them. The quality of the path becomes the quality of whoever walks it.",
            "bn": "সা'দী ক্ষেত্রটা বড় করেন। তাঁর মতে আক্বওয়াম মানে আকীদা, আমল ও আখলাকে সবচেয়ে ন্যায্য ও সবচেয়ে উঁচু। তারপর মানুষের জন্য এর ফল দেখান: কুরআন যেদিকে ডাকে, সেদিকে যে হিদায়াত নেয়, সে হয় মানুষের মধ্যে সবচেয়ে পূর্ণ, সবচেয়ে সোজা, আর নিজের সব কাজে সবচেয়ে বেশি হিদায়াতপ্রাপ্ত। আয়াতের তুলনাবাচক শব্দটি তাঁর বাক্যে ফিরে আসে আক্বওয়ামুহুম হয়ে, তাদের মধ্যে সবচেয়ে সোজা। পথের গুণটাই হয়ে যায় পথিকের গুণ।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Qurtubi, explains aqwam as a way that is closer to the destination, easy, and free of dangers at the same time, and says the rules the Qur'an sets for human life combine all three. A person may at times find this way hard or dangerous, it adds, but that comes from his own limited comprehension. The Lord of the worlds knows what is most beneficial for human beings, while a person, not seeing things in their full setting, cannot fully identify even his own good or harm.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর বরাতে আক্বওয়াম-এর ব্যাখ্যা দেয় এভাবে: এমন পথ, যা গন্তব্যের বেশি কাছে, সহজ, আবার একই সঙ্গে বিপদমুক্ত। এর মতে কুরআন মানুষের জীবনের জন্য যে বিধান দিয়েছে, তাতে এই তিনটি গুণই একসঙ্গে আছে। মাআরিফ আরও বলে, মানুষ কখনো কখনো এ পথকে কঠিন বা বিপজ্জনক ভাবতে পারে, কিন্তু তা তার নিজের বোঝার ঘাটতি থেকে আসে। মানুষের জন্য কোনটি সবচেয়ে উপকারী, বিশ্বজগতের রব তা জানেন। আর মানুষ সবকিছু পূর্ণ প্রেক্ষাপটে দেখে না, তাই নিজের ভালো-মন্দও সে পুরোপুরি চিনতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Receives the Good News",
          "bn": "সুসংবাদের হকদার যারা"
        },
        "p": [
          {
            "en": "Wa yubashshiru al-mu'minin alladhina ya'malun al-salihat: and it gives good tidings to the believers who do righteous deeds. At-Tabari defines them as those who believe in Allah and His Messenger, act in their worldly life by what Allah commanded them, and refrain from what He forbade. Al-Muyassar uses nearly the same words. As-Sa'di names what the righteous deeds include: the obligatory and the sunan. Ibn Kathir adds his two qualifiers: believers in it, doing those deeds in accordance with it.",
            "bn": "ওয়া ইউবাশশিরুল মু'মিনীনাল্লাযীনা ইয়া'মালূনাস সালিহাত: আর নেক আমলকারী মুমিনদের সুসংবাদ দেয়। তাবারী তাদের পরিচয় দেন: যারা আল্লাহ ও তাঁর রাসূলের উপর ঈমান আনে, দুনিয়ার জীবনে আল্লাহর হুকুম মেনে চলে, আর তিনি যা নিষেধ করেছেন তা থেকে বিরত থাকে। মুয়াসসারের ভাষাও প্রায় একই। নেক আমলের মধ্যে কী পড়ে, সা'দী তা বলে দেন: ফরজ ও সুন্নাত। ইবন কাসীর জোড়েন তাঁর দুটি শর্ত: এতে ঈমান রাখা, আর এর দাবি অনুযায়ী সেই আমল করা।"
          },
          {
            "en": "Anna lahum ajran kabira: that they will have a great reward. At-Tabari glosses it as an immense recompense and an ample return, which is Paradise, prepared by Allah for those whose deeds please Him, and he cites Ibn Jurayj: every great reward, noble reward and noble provision in the Qur'an is Paradise. Al-Qurtubi and al-Baghawi also say: Paradise. Ibn Kathir places it on the Day of Resurrection. As-Sa'di says Allah prepared it in the abode of His honour, and none knows its description but He.",
            "bn": "আন্না লাহুম আজরান কাবীরা: তাদের জন্য আছে মহা প্রতিদান। তাবারীর ব্যাখ্যায় এর মানে বিশাল সওয়াব ও প্রচুর বিনিময়, আর তা হলো জান্নাত। আল্লাহ তা প্রস্তুত রেখেছেন তাদের জন্য, যাদের আমলে তিনি সন্তুষ্ট। তিনি ইবন জুরাইজের কথা উদ্ধৃত করেন: কুরআনে যেখানেই আজরুন কাবীর, আজরুন কারীম বা রিযকুন কারীম এসেছে, তা জান্নাত। কুরতুবী ও বাগাভীও বলেন, জান্নাত। ইবন কাসীর একে রাখেন কিয়ামতের দিনে। সা'দী বলেন, আল্লাহ তা প্রস্তুত রেখেছেন তাঁর সম্মানের ঘরে, আর এর বর্ণনা তিনি ছাড়া কেউ জানে না।"
          },
          {
            "en": "The grammar of that clause carries a small disagreement, which al-Qurtubi records. On one view anna lahum is in the accusative, governed directly by yubashshiru. Al-Kisa'i and a group of the Basrans held that it is in the genitive, with the preposition bi understood: gives good tidings of the fact that. At-Tabari takes the first view, saying anna is accusative because the good tidings fall on it. The meaning holds either way, yet both views were kept.",
            "bn": "এই অংশের ব্যাকরণে একটি ছোট মতভেদ আছে, কুরতুবী তা লিখে রেখেছেন। এক মতে আন্না লাহুম অংশটি নসব অবস্থায়, অর্থাৎ যবরের অবস্থায়, সরাসরি ইউবাশশিরু ক্রিয়ার অধীনে। কিসাঈ ও বসরার একদল আলিমের মতে তা যেরের অবস্থায়, আগে একটি উহ্য বি অব্যয় ধরে নিয়ে: এই কথার সুসংবাদ দেয় যে। তাবারী প্রথম মতটি নেন। তাঁর কথায়, সুসংবাদ এর উপর গিয়ে পড়েছে বলেই আন্না যবরের অবস্থায়। দুই মতেই অর্থ একই থাকে, তবু দুটি মতই রেখে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News and Its Counterpart",
          "bn": "সুসংবাদ আর তার জুড়ি"
        },
        "p": [
          {
            "en": "The sentence runs on into 17:10: and that those who do not believe in the Hereafter, We have prepared for them a painful punishment. At-Tabari notes that this second anna is coordinated with the first, so both stand under the one verb of good tidings. Ibn Kathir carries the telling on, a painful torment on the Day of Resurrection, and cites 84:24, fa-bashshirhum bi-'adhabin alim, give them tidings of a painful punishment, where the same verb carries a warning. Al-Muyassar places that punishment in the Fire.",
            "bn": "বাক্যটি গড়িয়ে যায় ১৭:১০ আয়াতে: আর যারা আখিরাতে ঈমান আনে না, তাদের জন্য আমি যন্ত্রণাদায়ক শাস্তি প্রস্তুত রেখেছি। তাবারী বলেন, এই দ্বিতীয় আন্না প্রথমটির সঙ্গে যুক্ত, ফলে দুটোই সুসংবাদের একই ক্রিয়ার অধীনে দাঁড়ায়। ইবন কাসীরও খবরটা এভাবেই এগিয়ে নেন: কিয়ামতের দিনের যন্ত্রণাদায়ক শাস্তি। তিনি উদ্ধৃত করেন ৮৪:২৪, ফাবাশশিরহুম বি'আযাবিন আলীম, তাদের যন্ত্রণাদায়ক শাস্তির সুসংবাদ দাও। সেখানে সুসংবাদের সেই ক্রিয়াই বহন করছে সতর্কবাণী। মুয়াসসার বলে দেয়, সেই শাস্তি জাহান্নামের আগুনে।"
          },
          {
            "en": "This needs saying plainly. 17:4 to 17:8 describe what was decreed for the Children of Israel in their Scripture; 17:10 describes those who do not believe in the Hereafter; at-Tabari speaks of the people of creeds who strayed from the straight course. The verses describe what the text describes and license nothing against any living person or community. They hand no reader a verdict on anyone. No hadith is attached to 17:9 in any of the commentaries read for it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ১৭:৪ থেকে ১৭:৮ আয়াত বলে, বনী ইসরাঈলের কিতাবে তাদের ব্যাপারে কী ফয়সালা জানানো হয়েছিল। ১৭:১০ আয়াত বলে আখিরাতে অবিশ্বাসীদের কথা। আর তাবারী বলেন সঠিক পথ থেকে সরে যাওয়া মিল্লাতের লোকদের কথা। আয়াতগুলো কেবল তা-ই বর্ণনা করে, যা পাঠে আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুরই অনুমতি দেয় না। কোনো পাঠকের হাতে কারও ব্যাপারে রায় তুলে দেওয়া হয়নি। এই আয়াতের জন্য পড়া কোনো তাফসীরে ১৭:৯-এর সঙ্গে কোনো হাদীস যুক্ত নেই।"
          },
          {
            "en": "What the verse leaves with a reader is a measure and a promise. The measure is aqwam, which on as-Sa'di's reading reaches belief, deed and character, so it can be put to any day's choices: which course is more just, more correct, straighter? At-Tabari's condition comes with it: the guidance takes hold in whoever seeks it through the Book. The promise is for belief joined to deeds, and its full description, as-Sa'di says, Allah alone knows.",
            "bn": "আয়াতটি পাঠকের হাতে রেখে যায় একটি মাপকাঠি আর একটি প্রতিশ্রুতি। মাপকাঠি হলো আক্বওয়াম। সা'দীর পড়ায় তার আওতায় পড়ে বিশ্বাস, আমল আর আখলাক। তাই প্রতিদিনের যেকোনো সিদ্ধান্তে প্রশ্নটা তোলা যায়: কোন পথটা বেশি ন্যায্য, বেশি সঠিক, বেশি সোজা? সঙ্গে আছে তাবারীর শর্ত: হিদায়াত শিকড় গাড়ে তার মধ্যে, যে কিতাবের মাধ্যমে তা খোঁজে। আর প্রতিশ্রুতিটি তাদের জন্য, যারা ঈমানের সঙ্গে আমল জুড়েছে। সা'দী বলেন, তার পূর্ণ বর্ণনা আল্লাহ ছাড়া কেউ জানে না।"
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
            "bn": "ওয়া কুল্লা ইনসানিন আলঝামনাহু তায়িরাহু ফী উনুকিহি: আর প্রত্যেক মানুষের তায়ির আমি তার গলায় বেঁধে দিয়েছি। আয়াতের শুরুই কুল্লা ইনসান, প্রত্যেকটি মানুষ, কেউ বাদ নেই। সাদীর মতে পুরো আয়াতটি আল্লাহর পরিপূর্ণ ন্যায়বিচারের কথা বলছে। মানুষ ভালো-মন্দ যা করেছে, আল্লাহ তা তার সঙ্গেই লাগিয়ে রাখেন, অন্য কারও ঘাড়ে যেতে দেন না। এই “প্রত্যেক” কথাটাই আসল। কথাটা কোনো ধ্বংসপ্রাপ্ত জাতি বা নাম-ধরা কোনো জালিমকে নিয়ে নয়। যে-ই আমল করে, কথাটা তাকে নিয়েই, আর পাঠক, আপনিও তার মধ্যে আছেন।"
          },
          {
            "en": "From that one image al-Muyassar and as-Sa'di both draw the same rule, and draw it in both directions: a person is not called to account for anyone else's deed, and no one else is called to account for his. Your record is yours coming and going. Nothing you carry was earned by another, and nothing you did quietly attaches to a name that is not yours. Later in the same surah, 17:15, says it flatly, that no bearer of burdens bears the burden of another.",
            "bn": "এই একটি ছবি থেকে মুয়াসসার আর সাদী দুজনেই একই নিয়ম বের করেন, আর নিয়মটা দুই দিকেই খাটে। একজনের আমলের জন্য আরেকজনকে জবাবদিহি করতে হবে না, আবার তার আমলের জন্যও অন্য কাউকে ধরা হবে না। আপনার আমলনামা সব দিক থেকেই শুধু আপনার। আপনি যা বয়ে বেড়াচ্ছেন, তা অন্য কেউ কামাই করেনি। আর আপনি গোপনে যা করেছেন, তা অন্যের নামে লেখা হবে না। এই সূরারই একটু পরে ১৭:১৫ আয়াত সোজাসুজি বলে দেয়: কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Taken from Birds",
          "bn": "পাখি থেকে নেওয়া এক শব্দ"
        },
        "p": [
          {
            "en": "The word ta'ir has a history that at-Tabari opens up. Fastening his ta'ir to his neck, he says, is a figure drawn from what the Arabs used to take as good or bad omen from the flights of birds, the ones that crossed from the right and the ones that crossed from the left. Al-Baghawi says the same in the same terms, sawanih and bawarih, the bird that runs before you and the bird that cuts across. A man loosed a bird and let its direction decide whether he travelled or stayed.",
            "bn": "তায়ির শব্দের পেছনে একটা ইতিহাস আছে, তাবারী সেটা খুলে বলেন। তাঁর মতে, গলায় তায়ির বেঁধে দেওয়া একটা উপমা। আরবরা পাখির ওড়া দেখে শুভ-অশুভ লক্ষণ ধরত: কোন পাখি ডান দিক দিয়ে উড়ে গেল, কোনটা বাঁ দিক দিয়ে। উপমাটা সেখান থেকেই নেওয়া। বাগাভীও প্রায় একই ভাষায় বলেন: সাওয়ানিহ আর বাওয়ারিহ, যে পাখি সামনে দিয়ে ছুটে যায় আর যে পাখি আড়াআড়ি পার হয়। লোকে একটা পাখি উড়িয়ে দিত, আর সেটা কোন দিকে গেল তা দেখে ঠিক করত সফরে বের হবে, নাকি ঘরে থাকবে।"
          },
          {
            "en": "The Qur'an keeps the very word and moves where it points. Your ta'ir is not a bird overhead; it is fastened to you, decreed and made of your own doing, whether an ill one that drives to the Fire or a happy one that leads to gardens, as at-Tabari puts the two ends. Ibn Abbas, whom he cites, says plainly that the ta'ir is a person's deed, and adds that the word runs through many things, one of them the very superstition people work against one another. The omen you feared is relocated: it was never in the sky, it is in your record.",
            "bn": "কুরআন শব্দটা রেখে দেয়, কিন্তু তার ইশারা বদলে দেয়। আপনার তায়ির মাথার ওপরে উড়ে যাওয়া কোনো পাখি নয়। তা আপনার সঙ্গেই বাঁধা, তাকদিরে লেখা, আর আপনার নিজের আমল দিয়ে গড়া। তাবারী এর দুই পরিণতির কথা বলেন: হয় অশুভ, যা জাহান্নামের দিকে টেনে নেয়, নয়তো শুভ, যা জান্নাতে পৌঁছে দেয়। তিনি ইবন আব্বাসের কথা উদ্ধৃত করেন। ইবন আব্বাস সোজা বলেন, তায়ির মানে মানুষের আমল। তিনি আরও বলেন, শব্দটা অনেক অর্থে চলে, তার একটা হলো সেই কুসংস্কার, যা দিয়ে মানুষ একে অন্যের বিরুদ্ধে অশুভ লক্ষণ টানে। যে লক্ষণকে আপনি ভয় পেতেন, তার ঠিকানাই বদলে গেছে। তা কখনো আকাশে ছিল না, আছে আপনার আমলনামায়।"
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
            "bn": "সবচেয়ে সোজা অর্থে তায়ির মানে মানুষের আমল। ইবন কাসীর এর সংজ্ঞা দেন: মানুষের কাজ থেকে যা উড়ে বেরিয়েছে। তিনি এ অর্থ বর্ণনা করেন ইবন আব্বাস, মুজাহিদ ও অন্যদের সূত্রে: ভালো আর মন্দ আমল, যা মানুষকে নিজের বলে মেনে নিতে হবে, আর যার প্রতিদান সে পাবে। তাবারী একই রকম অনেক সূত্র পরপর আনেন, ইবন আব্বাস, মুজাহিদ, কাতাদা। সবাই একই ব্যাখ্যায় ফেরেন: আমালুহু, তার আমল। সে যেখানে যায়, আমল তার সঙ্গে লেগে থাকে, যেখানে সরে, আমলও সঙ্গে সরে। যে শব্দ একসময় পাখির নাম ছিল, তা এখন একটি জীবনের রেখে যাওয়া চিহ্নের নাম।"
          },
          {
            "en": "Others widen it. Mujahid, in al-Qurtubi, joins to the deed a person's rizq, his allotted provision, and elsewhere reports that no child is born but with a slip on its neck marked wretched or blessed. Al-Hasan reads it as one's wretchedness and happiness and what flew to him of the decree. Al-Baghawi gathers a second line entirely: Abu 'Ubaydah and al-Qutaybi take ta'ir as a person's share, his lot, from the Arab phrase his arrow flew, meaning his portion came up. Deed, destiny, provision, portion, the readings press close without merging.",
            "bn": "কেউ কেউ অর্থটা আরও বড় করে দেখেন। কুরতুবীর বর্ণনায় মুজাহিদ আমলের সঙ্গে যোগ করেন মানুষের রিযিক, অর্থাৎ তার জন্য বরাদ্দ জীবিকা। অন্য জায়গায় তিনি বর্ণনা করেন, প্রতিটি শিশু জন্মায় গলায় একটি চিরকুট নিয়ে, তাতে লেখা থাকে সে হতভাগা না সৌভাগ্যবান। হাসানের মতে তায়ির মানে মানুষের দুর্ভাগ্য আর সৌভাগ্য, আর তাকদির থেকে তার ভাগে যা উড়ে এসেছে। বাগাভী একেবারে আলাদা আরেকটি মত আনেন। আবু উবাইদা আর কুতাইবী তায়িরকে ধরেন মানুষের ভাগ বা হিস্যা হিসেবে। এটা আরবদের একটি কথা থেকে নেওয়া: তার তীর উড়ল, মানে তার ভাগ উঠল। আমল, তাকদির, রিযিক, হিস্যা: অর্থগুলো একে অন্যের খুব কাছাকাছি, তবু এক হয়ে যায় না।"
          },
          {
            "en": "At-Tabari does not leave the two sides even. He judges the interpreters' reading the stronger, that the ta'ir is the fate a person comes to by his own deed, and says one may not overstep in the Qur'an's meaning what they held. Yet he grants that the share reading has a face, and that if it means one's share of deed and of misery or happiness, it does not fall far from theirs. He keeps the difference on the page rather than erasing it, which is why it can be reported here as a difference at all.",
            "bn": "তাবারী দুই মতকে সমান পাল্লায় রাখেন না। তাঁর রায়ে মুফাসসিরদের ব্যাখ্যাই বেশি মজবুত: তায়ির হলো সেই পরিণতি, নিজের আমলের কারণে মানুষ যেখানে গিয়ে পৌঁছায়। তিনি আরও বলেন, কুরআনের অর্থ করতে গিয়ে তাঁদের মতের সীমা ছাড়িয়ে যাওয়া চলে না। তবু তিনি মানেন, হিস্যার ব্যাখ্যারও একটা দিক আছে। হিস্যা বলতে যদি আমলের ভাগ আর দুর্ভাগ্য বা সৌভাগ্যের ভাগ বোঝানো হয়, তাহলে তা তাঁদের মত থেকে বেশি দূরে নয়। তিনি মতভেদটা মুছে না দিয়ে লিখে রেখেছেন। সে কারণেই আজ এখানে একে মতভেদ হিসেবে তুলে ধরা যাচ্ছে।"
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
            "bn": "আমল তো যেকোনো জায়গায় বাঁধা যেত, কিন্তু আয়াত বেছে নিয়েছে ফী উনুকিহি, তার গলায়। কুরতুবীর বর্ণনায় যাজ্জাজ বলেন, গলার কথা এসেছে লুযুম বোঝাতে, মানে এমনভাবে লেগে থাকা যে আর খোলে না, যেমন বেড়ি গলায় এঁটে থাকে। তাবারী বুঝিয়ে বলেন, গলাতেই মানুষ চিহ্ন, হার আর জোয়াল পরে, যা তাকে সাজায় বা লজ্জায় ফেলে। আরবরা কথায় লেগে থাকা জিনিসকে গলার সঙ্গে জুড়ে দেয়, ঠিক যেমন শরীরের অপরাধকে জুড়ে দেয় হাতের সঙ্গে। তাই বলে, তার হাত যা কামিয়েছে, অথচ ক্ষতিটা হয়তো করেছিল জিভ।"
          },
          {
            "en": "Ibn Kathir gives the plainest reason of all. The neck is singled out, he says, because it is a part of the body that has no double, and once a person is held by it he has no escape. That is the force of the image. A load on the back can be set down and a thing in the hand let go, but what is bound at the throat travels with the person, un-droppable, for as long as he lives and beyond. The deed is not near you; it is on you.",
            "bn": "সবচেয়ে সোজা কারণটা দেন ইবন কাসীর। গলাকেই আলাদা করে বলা হয়েছে, তিনি বলেন, কারণ এ দেহের এমন এক অঙ্গ যার জোড়া নেই, আর একবার একে ধরা হলে মানুষের আর পালানোর পথ থাকে না। ছবিটার জোর এখানেই। পিঠের বোঝা নামানো যায়, হাতের জিনিস ছেড়ে দেওয়া যায়, কিন্তু গলায় বাঁধা জিনিস মানুষের সঙ্গেই চলে, খোলা যায় না, যতদিন সে বাঁচে ততদিন, তারপরও। আমল আপনার কাছে নয়, আমল আপনার গায়ে।"
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
            "bn": "শব্দটা যেহেতু কুলক্ষণ মানার সংস্কৃতি থেকে এসেছে, এ বিষয়ে সহীহ হাদিসটি ঠিক সেই কুলক্ষণকেই ভেঙে দেয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, আদওয়া (নিজে নিজে রোগ ছড়ানো) বলে কিছু নেই, তিয়ারা (কুলক্ষণ) বলে কিছু নেই, হামা নেই, সফরও নেই (সহীহ বুখারী ৫৭৫৭, সহীহ বুখারীতে থাকায় বিশুদ্ধ)। এই হাদিসে আয়াতের উল্লেখ নেই। তবু আমরা একে আয়াতের পাশে রেখেছি, কারণ তায়ির শব্দটি যে মাটিতে জন্মেছিল, এই হাদিস সেই মাটিই সাফ করে দেয়। পাখির ওড়া কিছুই ঠিক করে না।"
          },
          {
            "en": "There is also a narration that joins the two of them directly. At-Tabari reports, through Qatadah from Jabir, the Prophet (peace be upon him) setting \"no contagion and no evil omen\" against the words of this very verse; Ibn Kathir cites Ahmad's wording, \"the ta'ir of every person is on his neck,\" where the sub-narrator Ibn Lahi'ah glossed ta'ir as tiyarah, and Ibn Kathir calls that gloss gharib jiddan, very strange. The texts consulted give these chains no explicit grade, and Ibn Lahi'ah is a known weak link, so the graded wording above is what carries the point, not this attachment.",
            "bn": "আরেকটি বর্ণনা দুটিকে সরাসরি জুড়ে দেয়। তাবারী কাতাদা থেকে জাবির (রাঃ)-এর সূত্রে বর্ণনা করেন, নবী ﷺ সংক্রমণ নেই, কুলক্ষণ নেই কথাটি এই আয়াতেরই শব্দের পাশাপাশি বলেছেন। ইবন কাসীর আহমাদের বর্ণনার ভাষা উদ্ধৃত করেন: প্রত্যেক মানুষের তায়ির তার গলায়। সেখানে নিচের স্তরের বর্ণনাকারী ইবন লাহীআ তায়িরের অর্থ করেছেন তিয়ারা, আর ইবন কাসীর এই ব্যাখ্যাকে বলেন গারীব জিদ্দান, খুবই অদ্ভুত। আমাদের হাতে থাকা গ্রন্থগুলো এই সনদগুলোর কোনো স্পষ্ট মান উল্লেখ করেনি, আর ইবন লাহীআ সুপরিচিত দুর্বল বর্ণনাকারী। তাই মূল কথাটা দাঁড়িয়ে আছে ওপরের সহীহ হাদিসের ওপর, এই বাড়তি সংযোগের ওপর নয়।"
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
            "bn": "এবার আয়াত গলার আমল থেকে পাতার আমলের দিকে যায়: ওয়া নুখরিজু লাহু ইয়াওমাল কিয়ামাতি কিতাবান ইয়ালকাহু মানশুরা, আর কিয়ামতের দিন আমি তার জন্য বের করব এক কিতাব, যা সে খোলা অবস্থায় পাবে। ইবন কাসীরের ব্যাখ্যায়, মানুষের সব আমল একটি কিতাবে জমা করা হবে, আর সেদিন তা তার হাতে দেওয়া হবে: সৌভাগ্যবান হলে ডান হাতে, হতভাগা হলে বাঁ হাতে। তাবারী আরও সহজ করে বলেন: সেই আমলটাকেই আমি কিতাব বানিয়ে বের করব।"
          },
          {
            "en": "The word manshuran, spread open, does its own work. Al-Qurtubi reads the openness as a hastening, so that the good news for a good deed and the reproach for a bad deed reach a person without delay, nothing kept folded away from him. Ibn Kathir adds that open means legible to him and to others, holding all he did from the first of his life to the last. And Ma'arif al-Qur'an relays from Qatadah the mercy inside the terror of it: on that Day even a person who never learned to read will read his own book.",
            "bn": "মানশুরা, অর্থাৎ খোলা, এই শব্দটিরও আলাদা একটা ভূমিকা আছে। কুরতুবীর মতে, খোলা থাকা মানে দেরি না হওয়া। ভালো কাজের সুসংবাদ আর মন্দ কাজের তিরস্কার কোনো দেরি ছাড়াই মানুষের কাছে পৌঁছে যাবে, কিছুই ভাঁজ করে তার কাছ থেকে লুকিয়ে রাখা হবে না। ইবন কাসীর যোগ করেন, খোলা মানে সে নিজে যেমন পড়তে পারবে, অন্যরাও পারবে। জীবনের শুরু থেকে শেষ পর্যন্ত যা করেছে, সবই তাতে থাকবে। আর মাআরিফুল কুরআন কাতাদা থেকে এই ভয়ের মধ্যেও লুকানো একটি রহমতের কথা জানায়: যে কখনো পড়তে শেখেনি, সেদিন সেও নিজের কিতাব পড়তে পারবে।"
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
            "bn": "মুফাসসিররা দেখান, এই কিতাব গোটা জীবন ধরে লেখা হতে থাকে। বাগাভী বর্ণনা আনেন, বান্দার আয়ু ফুরালে ফেরেশতাকে পাতা গুটিয়ে নিতে আদেশ করা হয়, আর কিয়ামতের আগে তা আর খোলা হয় না। কুরতুবী আবু সাওয়ার আল-আদাবীর কথা উদ্ধৃত করেন, যিনি পুরো ছবিটা এক নিঃশ্বাসে বলে দিয়েছেন: দুই বার খোলা আর এক বার গোটানো। হে আদম-সন্তান, যতদিন তুমি বেঁচে আছ, তোমার পাতা খোলা, তাতে যা ইচ্ছা লেখো। মরলে তা গুটিয়ে রাখা হয়, আর যখন তোমাকে আবার ওঠানো হবে, তখন তা আবার খোলা হবে।"
          },
          {
            "en": "Al-Hasan al-Basri, whom Ibn Kathir preserves at length, said it to the human being directly: your sheet is laid out for you, and two noble angels are set on you, one on the right recording good, one on the left recording bad; so do what you will, little or much, until you die; then your book is folded and tied to your neck with you in the grave; then you come out on the Day of Resurrection and find it spread open. What is done now is what will be read then, and it is being written now.",
            "bn": "ইবন কাসীর হাসান বসরীর একটি কথা বিস্তারিত উদ্ধৃত করেছেন। তিনি মানুষকে সরাসরি সম্বোধন করে বলেছেন: তোমার পাতা তোমার সামনে বিছানো। তোমার ওপর নিযুক্ত আছেন দুই সম্মানিত ফেরেশতা, ডানের জন ভালো লেখেন, বাঁয়ের জন মন্দ। তাই যা ইচ্ছা করো, অল্প হোক বা বেশি, মৃত্যু পর্যন্ত। তারপর তোমার কিতাব গুটিয়ে কবরে তোমার গলায় বেঁধে দেওয়া হবে। তারপর কিয়ামতের দিন তুমি বেরিয়ে এসে তা খোলা অবস্থায় পাবে। এখন যা করা হচ্ছে, তখন সেটাই পড়া হবে, আর তা লেখা হচ্ছে এখনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying It Today",
          "bn": "আজই তা বয়ে চলা"
        },
        "p": [
          {
            "en": "Put the readings together and the verse cuts the same way for every person. The thing that decides you is not an omen crossing your path, nor a burden handed to you from outside, nor anything a neighbour did; it grows from your own doing and clings like a collar you cannot slip. This is said of the whole of humankind, not of any group to be pointed at. No sign in the sky bends a life. What a person ties to his own neck does, and each of us is tying something there in ordinary hours.",
            "bn": "সব ব্যাখ্যা একসঙ্গে রাখলে দেখা যায়, আয়াতটি প্রত্যেক মানুষের জন্য একই কথা বলে। আপনার পরিণতি ঠিক করে না পথের ওপর দিয়ে উড়ে যাওয়া কোনো লক্ষণ, বাইরে থেকে চাপিয়ে দেওয়া কোনো বোঝা, কিংবা প্রতিবেশীর কোনো কাজ। তা গড়ে ওঠে আপনার নিজের আমল থেকে, আর গলার বেড়ির মতো লেগে থাকে, খুলে ফেলা যায় না। কথাটা গোটা মানবজাতির জন্য, আঙুল তুলে দেখানোর মতো কোনো বিশেষ দলের জন্য নয়। আকাশের কোনো লক্ষণ জীবনের মোড় ঘোরায় না। ঘোরায় সেই জিনিস, যা মানুষ নিজের গলায় বাঁধে। আর আমরা প্রত্যেকে সাধারণ দিনের সাধারণ সময়েই সেখানে কিছু না কিছু বেঁধে চলেছি।"
          },
          {
            "en": "The sheet is still open, and it is being filled in these plain hours, not on some far Day. The folding and the reading come later. In the very next verse, 17:14, the book is placed in the hand with the words Read your record, you suffice today as your own reckoner, and that summons is its own beat, best met when it arrives. For now the verse asks only the earlier thing: to know the record is being made today, tied close and un-droppable, and to weigh with care what goes onto it.",
            "bn": "পাতা এখনো খোলা, আর তা ভরে উঠছে এই সাদামাটা সময়েই, দূরের কোনো দিনে নয়। গুটিয়ে রাখা আর পড়ে শোনানো আসবে পরে। ঠিক পরের আয়াতে, ১৭:১৪, কিতাব হাতে দিয়ে বলা হয়: পড়ো তোমার আমলনামা, আজ নিজের হিসাব নেওয়ার জন্য তুমিই যথেষ্ট। সেই ডাকের কথা ভাবার সময় আসবে, যখন সেই আয়াত সামনে আসবে। আপাতত এই আয়াত শুধু আগের কাজটুকু চায়: জেনে রাখা যে আমলনামা আজই লেখা হচ্ছে, গলায় শক্ত করে বাঁধা, খুলে ফেলার উপায় নেই। আর তাতে কী উঠছে, তা যত্ন করে মেপে দেখা।"
          }
        ]
      }
    ]
  },
  "17:23-24": {
    "sections": [
      {
        "h": {
          "en": "A Command, Not a Fate",
          "bn": "হুকুম, তাকদির নয়"
        },
        "p": [
          {
            "en": "Wa-qada rabbuka: and your Lord has decreed. The verse follows straight on from 17:22, do not set up another god with Allah, and as-Sa'di joins them: having forbidden shirk, Allah now commands tawhid, by a religious decree and a legal command. At-Tabari reports amara, He commanded, from Ibn Abbas (RA) and Qatada. He also tells of a man who had divorced his wife three times and said Allah had decreed it for him; al-Hasan answered that Allah had commanded no such thing, and recited this verse.",
            "bn": "ওয়া কাদা রব্বুকা: আর আপনার রব ফয়সালা দিয়েছেন। ঠিক আগের আয়াত ১৭:২২ বলেছে, আল্লাহর সঙ্গে অন্য কোনো ইলাহ দাঁড় করাবেন না। সা'দী দুটোকে জুড়ে দেন: শিরক নিষেধ করার পর আল্লাহ এবার তাওহীদের হুকুম দিচ্ছেন, আর এই ফয়সালা দ্বীনি ফয়সালা, শরীয়তের হুকুম। তাবারী ইবনে আব্বাস (রাঃ) ও কাতাদা থেকে অর্থ বর্ণনা করেন: আমারা, তিনি আদেশ করেছেন। তিনি এক লোকের ঘটনাও আনেন। লোকটি স্ত্রীকে তিনটি তালাক দিয়ে বলেছিল, আল্লাহ তো আমার ভাগ্যে এটাই লিখেছেন। হাসান জবাব দিলেন, আল্লাহ এমন কোনো হুকুম দেননি, তারপর এই আয়াত পড়ে শোনালেন।"
          },
          {
            "en": "Al-Qurtubi takes the point further. Qada has several senses in the Qur'an: command, creation, judgment, completion, will and covenant. Because the word can bear all of these, he says, it may not be stated without qualification that sins happen by Allah's qada, since if command is meant, all agree it cannot be said: Allah does not command indecency. Here the sense is command, and he gathers the glosses into three verbs: Allah commanded, obliged and made binding. What follows is therefore not advice but an obligation.",
            "bn": "কুরতুবী কথাটা আরও এগিয়ে নেন। কুরআনে কাদা শব্দের অর্থ একাধিক: আদেশ, সৃষ্টি, বিচার, শেষ করা, ইচ্ছা আর অঙ্গীকার। শব্দটা এতগুলো অর্থ বহন করে বলে তিনি সতর্ক করেন, গুনাহ আল্লাহর কাদা অনুযায়ী ঘটে, এ কথা ঢালাওভাবে বলা চলে না। কারণ কাদা মানে যদি আদেশ হয়, তবে সবাই একমত যে এমন বলা নাজায়েজ, আল্লাহ অশ্লীলতার আদেশ দেন না। এখানে অর্থ আদেশ। কুরতুবী সব ব্যাখ্যাকে তিনটি ক্রিয়ায় গুছিয়ে দেন: আদেশ করেছেন, অপরিহার্য করেছেন, ফরজ করেছেন। তাই সামনে যা আসছে, তা পরামর্শ নয়, দায়িত্ব।"
          },
          {
            "en": "Several reports concern the wording itself. At-Tabari, from Qatada, says the reading of Ibn Mas'ud (RA) had wassa, He enjoined; he reports a codex on the reading of Ubayy ibn Ka'b (RA) with wa-wassa; and he records that ad-Dahhak read wa-wassa, claiming the waw had run into the sad and become a qaf. Al-Qurtubi carries these, and adds that Abu Hatim refused to accept that Ibn Abbas (RA) ever said so, warning that heretics would use it against the mushaf. The received text reads qada, and every gloss gives one sense.",
            "bn": "শব্দটির পাঠ নিয়েও কয়েকটি বর্ণনা আছে। তাবারী কাতাদা থেকে বর্ণনা করেন, ইবনে মাসউদ (রাঃ)-এর পাঠে ছিল ওয়াসসা, অর্থাৎ তিনি নির্দেশ দিয়েছেন। উবাই ইবনে কা'ব (রাঃ)-এর পাঠ অনুযায়ী লেখা এক মুসহাফেও ছিল ওয়া ওয়াসসা। দাহহাক নিজেও ওয়া ওয়াসসা পড়তেন। তাঁর দাবি, ওয়াও অক্ষর সোয়াদের গায়ে লেগে গিয়ে কাফ হয়ে গেছে। কুরতুবী এসব বর্ণনা আনেন, সঙ্গে এটাও জানান যে আবু হাতিম মানতে রাজি হননি ইবনে আব্বাস (রাঃ) এমন কথা বলেছেন। তাঁর আশঙ্কা ছিল, ধর্মদ্রোহীরা এ দিয়ে মুসহাফের ওপর আঘাত হানবে। প্রচলিত পাঠ কাদা, আর সব ব্যাখ্যার অর্থ একটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "His Right, Then Theirs",
          "bn": "আগে তাঁর হক, তারপর তাঁদের"
        },
        "p": [
          {
            "en": "Wa-bil-walidayni ihsana: and to the two parents, excellent treatment. At-Tabari explains the grammar: He commanded you to do good to your parents, with the particle an dropped, so the one verb qada governs both clauses. Ibn Kathir draws the consequence: this is why Allah joined dutifulness to parents with His own worship, citing 31:14, be grateful to Me and to your parents. Al-Qurtubi pairs them with the same verse. As-Sa'di gives the reason: the parents are the cause of the servant's existence, and their love and nearness make the right firm.",
            "bn": "ওয়া বিল ওয়ালিদাইনি ইহসানা: আর মা-বাবার সঙ্গে উত্তম আচরণ। তাবারী ব্যাকরণটা খুলে বলেন। আসল কথা হলো, তিনি আপনাদের আদেশ করেছেন মা-বাবার প্রতি সদাচরণ করতে। মাঝখানের আন অব্যয়টি বাদ পড়েছে, ফলে কাদা একটি ক্রিয়াই দুই বাক্যাংশকে ধরে রেখেছে। ইবনে কাসীর এখান থেকে সিদ্ধান্ত টানেন: এ কারণেই আল্লাহ নিজের ইবাদতের সঙ্গে মা-বাবার প্রতি সদ্ব্যবহারকে জুড়ে দিয়েছেন। প্রমাণ হিসেবে আনেন ৩১:১৪, আমার শুকরিয়া আদায় করো এবং তোমার মা-বাবারও। কুরতুবীও একই আয়াত দিয়ে দুটোকে জোড়েন। সা'দী কারণ বলেন: মা-বাবাই বান্দার অস্তিত্বের মাধ্যম, আর সন্তানের প্রতি তাঁদের ভালোবাসা ও নৈকট্য এই হককে মজবুত করে।"
          },
          {
            "en": "Al-Qurtubi attaches a hadith to this pairing, and it is in Sahih al-Bukhari 527, from Abdullah (RA): I asked the Prophet ﷺ which deed is most beloved to Allah. He said: prayer at its time. I said: then which? He said: then dutifulness to the parents. I said: then which? He said: jihad in the way of Allah. Abdullah said: he told me these, and had I asked for more he would have told me more. Its grading is al-Bukhari's placing it in his Sahih. Al-Qurtubi notes the ordering by thumma, then.",
            "bn": "এই জোড়ার সঙ্গে কুরতুবী একটি হাদীস যুক্ত করেন। সেটি আছে সহীহ বুখারী ৫২৭-এ, আবদুল্লাহ (রাঃ) থেকে: আমি নবী ﷺ-কে জিজ্ঞেস করলাম, কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয়? তিনি বললেন, সময়মতো নামাজ। বললাম, তারপর কোনটি? বললেন, তারপর মা-বাবার সঙ্গে সদ্ব্যবহার। বললাম, তারপর কোনটি? বললেন, আল্লাহর পথে জিহাদ। আবদুল্লাহ বলেন, তিনি আমাকে এগুলো বললেন, আরও জানতে চাইলে আরও বলতেন। এর মান হলো ইমাম বুখারী একে নিজের সহীহতে রেখেছেন। কুরতুবী খেয়াল করিয়ে দেন, ক্রমগুলো সাজানো হয়েছে সুম্মা, অর্থাৎ তারপর, দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Age Comes Home",
          "bn": "ঘরে যখন বার্ধক্য আসে"
        },
        "p": [
          {
            "en": "Imma yablughanna 'indaka al-kibara ahaduhuma aw kilahuma: if one of them or both reach old age with you. Al-Qurtubi asks why old age is singled out. It is when they most need dutifulness, because weakness has changed them; they now depend on the child, who must tend them in their age as they tended him in his childhood. He adds a second reason: a long stay under one roof ordinarily breeds a sense of burden and weariness, until anger shows, and the least of it is a sigh of irritation.",
            "bn": "ইম্মা ইয়াবলুগান্না ইনদাকাল কিবারা আহাদুহুমা আও কিলাহুমা: তাঁদের একজন বা দুজনই যদি আপনার কাছে বার্ধক্যে পৌঁছান। কুরতুবী প্রশ্ন তোলেন, বার্ধক্যের কথা আলাদা করে কেন? কারণ এ সময়েই তাঁদের সদ্ব্যবহারের প্রয়োজন সবচেয়ে বেশি। দুর্বলতা তাঁদের অবস্থা বদলে দিয়েছে, এখন তাঁরা সন্তানের ওপর নির্ভরশীল। শৈশবে তাঁরা যেভাবে তার দেখাশোনা করেছেন, এখন বার্ধক্যে তাকে সেভাবে তাঁদের দেখাশোনা করতে হবে। কুরতুবী আরেকটি কারণও বলেন। এক ছাদের নিচে দীর্ঘদিন থাকলে সাধারণত মানুষ ভার বোধ করে, বিরক্তি জমে, একসময় রাগ বেরিয়ে আসে। তার সবচেয়ে হালকা রূপ হলো বিরক্তির একটা দীর্ঘশ্বাস।"
          },
          {
            "en": "The verb has two readings. At-Tabari reports that most readers of Madinah and Basrah, with some Kufans, read yablughanna, singular, agreeing with ahaduhuma, one of them; most Kufan readers read yablughanni, dual, referring back to the parents, with one of them or both as a fresh clause. Al-Baghawi names Hamzah and al-Kisa'i for the dual. At-Tabari prefers the singular, since the command about parents ends at ihsana and a new sentence begins with imma. Either way, the case of just one parent is named outright.",
            "bn": "ক্রিয়াটির দুটি পাঠ আছে। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী এবং কূফার কয়েকজন পড়েছেন ইয়াবলুগান্না, একবচনে, যা আহাদুহুমা অর্থাৎ তাঁদের একজনের সঙ্গে মেলে। কূফার অধিকাংশ কারী পড়েছেন ইয়াবলুগান্নি, দ্বিবচনে, যা আগের মা-বাবার দিকে ফেরে। সে ক্ষেত্রে একজন বা দুজনই অংশটা নতুন বাক্যের শুরু। বাগাভী দ্বিবচন পাঠের কারী হিসেবে হামযা ও কিসাঈর নাম বলেন। তাবারী একবচন পাঠকে অগ্রাধিকার দেন। তাঁর যুক্তি, মা-বাবা সংক্রান্ত আদেশ ইহসানা শব্দে শেষ হয়েছে, আর ইম্মা দিয়ে নতুন বাক্য শুরু। যে পাঠই হোক, মা-বাবার কেবল একজনের বার্ধক্যের কথাও আয়াতে স্পষ্ট করে বলা আছে।"
          },
          {
            "en": "Al-Qurtubi and Ibn Kathir both attach to this clause a hadith that, Ibn Kathir notes, Muslim recorded. In Sahih Muslim 2551, from Abu Hurayrah (RA), Allah's Messenger ﷺ said: may his nose be rubbed in the dust, then may his nose be rubbed in the dust, then may his nose be rubbed in the dust. It was said: who, Messenger of Allah? He said: whoever finds his parents in old age, one of them or both, and then does not enter Paradise. Ibn Kathir calls the route sahih; Muslim's grading is its place in his Sahih.",
            "bn": "কুরতুবী ও ইবনে কাসীর দুজনেই এই অংশের সঙ্গে একটি হাদীস যুক্ত করেন, যা ইবনে কাসীরের ভাষ্যমতে ইমাম মুসলিম বর্ণনা করেছেন। সহীহ মুসলিম ২৫৫১-এ আবু হুরায়রা (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন: তার নাক ধুলোয় মলিন হোক, তারপর তার নাক ধুলোয় মলিন হোক, তারপর তার নাক ধুলোয় মলিন হোক। জিজ্ঞেস করা হলো, কে সে, হে আল্লাহর রাসূল? তিনি বললেন, যে তার মা-বাবার একজনকে বা দুজনকেই বার্ধক্যে পেল, তারপরও জান্নাতে প্রবেশ করল না। ইবনে কাসীর এই সূত্রকে সহীহ বলেছেন, আর মুসলিমের মূল্যায়ন হলো তিনি এটি নিজের সহীহতে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Less Than a Word",
          "bn": "একটা শব্দেরও কম"
        },
        "p": [
          {
            "en": "Fa-la taqul lahuma uff: do not say to them uff. Ibn Kathir and al-Muyassar give one gloss: let them hear nothing bad from you, not even uff, the lowest rank of bad speech. As-Sa'di calls it the lowest grade of harm, named to point to everything above it. At-Tabari turns it into patience: do not say uff at anything you see from them that people find hard to bear, but bear it and count your patience toward reward, as they were patient with you when you were small.",
            "bn": "ফালা তাকুল লাহুমা উফ: তাঁদের উফ বলবেন না। ইবনে কাসীর ও মুয়াসসারের ব্যাখ্যা একই: আপনার মুখ থেকে তাঁরা যেন কোনো মন্দ কথা না শোনেন, এমনকি উফও না, যা মন্দ কথার সবচেয়ে নিচের স্তর। সা'দীর ভাষায় এটি কষ্ট দেওয়ার সবচেয়ে নিচু ধাপ। এর উল্লেখ দিয়ে তার ওপরের সব কিছুর দিকে ইঙ্গিত করা হয়েছে। তাবারী একে সবরের শিক্ষা হিসেবে পড়েন। তাঁদের কারও কাছ থেকে এমন কিছু দেখলে যা মানুষের কাছে কষ্টকর লাগে, উফ বলবেন না। বরং সয়ে নিন, আর সেই সবরের প্রতিদান আল্লাহর কাছে আশা করুন, যেমন ছোটবেলায় তাঁরা আপনার বেলায় সবর করেছেন।"
          },
          {
            "en": "Mujahid, in at-Tabari and al-Baghawi, gives a concrete case: if they reach an age when they soil themselves, do not say uff in disgust while you clean them, as they cleaned you when you were small. Al-Qurtubi widens it: the verse is more general than this. Ma'arif al-Qur'an counts even a long breath, drawn after hearing what they said, as uff. Both relay a report from Ali (RA) that had anything been lower than uff, it would have been named; al-Qurtubi gives it as narrated, with no chain or grading, so it stands here as their report, not a graded hadith.",
            "bn": "তাবারী ও বাগাভীতে মুজাহিদ একটি বাস্তব ছবি দেন। তাঁরা যদি এমন বয়সে পৌঁছান যে মলমূত্র সামলাতে পারেন না, তবে পরিষ্কার করার সময় ঘৃণায় উফ বলবেন না। ছোটবেলায় তাঁরাও তো আপনাকে এভাবেই পরিষ্কার করেছেন। কুরতুবী কথাটা মেনে নিয়ে পরিসর বাড়ান: আয়াতের অর্থ এর চেয়ে ব্যাপক। মাআরিফুল কুরআন তাঁদের কথা শুনে লম্বা নিঃশ্বাস ফেলাকেও উফের মধ্যে গণ্য করে। কুরতুবী ও মাআরিফ দুটিতেই আলী (রাঃ) থেকে একটি বর্ণনা আছে: উফের চেয়ে নিচু কিছু থাকলে সেটারও উল্লেখ হতো। কুরতুবী এটি এনেছেন শুধু বর্ণিত আছে বলে, কোনো সনদ বা মান উল্লেখ করেননি। তাই এখানে এটি তাঁদের উদ্ধৃত বর্ণনা, মান যাচাই করা হাদীস নয়।"
          },
          {
            "en": "The word itself drew the grammarians. Al-Baghawi lists three readings: uffa, from Ibn Kathir (the reader, not the commentator), Ibn Amir and Ya'qub; uffin, from Abu Ja'far, Nafi' and Hafs; and uffi from the rest. The meaning is one, he says: a word of displeasure. At-Tabari counts six forms in Arabic and prefers uffi; al-Qurtubi counts ten. On its origin, al-Baghawi cites Abu Ubaydah: the grime on the fingers when you roll them. Al-Qurtubi cites al-Asma'i: uff is earwax and its partner tuff is nail-dirt, and use spread the word to anything irksome.",
            "bn": "শব্দটি নিয়ে ব্যাকরণবিদেরাও ভেবেছেন। বাগাভী তিনটি পাঠ উল্লেখ করেন: ইবনে কাসীর (এখানে কারী ইবনে কাসীর, মুফাসসির নন), ইবনে আমির ও ইয়াকুব পড়েছেন উফফা; আবু জা'ফর, নাফে' ও হাফস পড়েছেন উফফিন; বাকিরা উফফি। তাঁর মতে অর্থ একটাই: অপছন্দ প্রকাশের শব্দ। তাবারী আরবিতে এর ছয়টি রূপ গোনেন এবং উফফি পাঠকে অগ্রাধিকার দেন, আর কুরতুবী গোনেন দশটি। শব্দের উৎস নিয়ে বাগাভী আবু উবাইদার কথা আনেন: আঙুল ঘষলে যে ময়লা জমে। কুরতুবী আনেন আসমাঈর কথা: উফ হলো কানের ময়লা, আর তার জোড়া শব্দ তুফ নখের ময়লা। ব্যবহার বাড়তে বাড়তে শব্দটা বিরক্তিকর যে কোনো কিছুর জন্যই বলা হতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Raised Hand, a Noble Word",
          "bn": "ধমক নয়, সম্মানের কথা"
        },
        "p": [
          {
            "en": "Wa la tanharhuma: and do not rebuke them. At-Tabari glosses it as do not chide them, and reports from 'Ata' ibn Abi Rabah: do not shake your hand at your parents. As-Sa'di defines it as scolding them and speaking to them roughly. Ibn Kathir reads the pair as a pattern: uff is the ugly word and the rebuke the ugly act, and having forbidden both, Allah commands their opposites, the good word and the good deed.",
            "bn": "ওয়ালা তানহারহুমা: আর তাঁদের ধমক দেবেন না। তাবারীর ব্যাখ্যা, তাঁদের ঝাড়ি দেবেন না। তিনি আতা ইবনে আবি রাবাহ থেকে বর্ণনা করেন: মা-বাবার দিকে হাত ঝাড়বেন না। সা'দীর সংজ্ঞায় এর মানে বকাঝকা করা আর রূঢ় ভাষায় কথা বলা। ইবনে কাসীর দুটোকে একটা ছক হিসেবে দেখেন। উফ হলো মন্দ কথা, ধমক মন্দ আচরণ। দুটোই নিষেধ করার পর আল্লাহ তাদের বিপরীতটার আদেশ দেন: ভালো কথা আর ভালো আচরণ।"
          },
          {
            "en": "Wa qul lahuma qawlan karima: and speak to them a noble word. At-Tabari reports from Ibn Jurayj, the best speech you can find, and from Qatada, soft and easy speech. Asked what this noble word was, Sa'id ibn al-Musayyib answered: the speech of a servant who has done wrong to a stern master. Al-Baghawi has Mujahid, and al-Qurtubi 'Ata', say: do not call them by their names, but say O my father, O my mother. As-Sa'di adds that it is speech they love, and that it differs with circumstances, customs and times.",
            "bn": "ওয়া কুল লাহুমা কাওলান কারীমা: আর তাঁদের সঙ্গে সম্মানের কথা বলুন। তাবারী ইবনে জুরাইজ থেকে আনেন, আপনার জানা সবচেয়ে সুন্দর কথা; আর কাতাদা থেকে, নরম ও সহজ কথা। সাঈদ ইবনুল মুসাইয়িবকে জিজ্ঞেস করা হয়েছিল, এই সম্মানের কথা কেমন? তিনি বলেছিলেন, কঠোর মনিবের সামনে অপরাধী গোলাম যেভাবে কথা বলে। বাগাভী মুজাহিদ থেকে এবং কুরতুবী আতা থেকে বর্ণনা করেন: তাঁদের নাম ধরে ডাকবেন না, বলুন আব্বা, বলুন আম্মা। সা'দী যোগ করেন, এমন কথা যা তাঁরা শুনতে ভালোবাসেন, আর অবস্থা, প্রথা ও যুগভেদে তার রূপ বদলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wing Lowered in Mercy",
          "bn": "রহমতে নামানো ডানা"
        },
        "p": [
          {
            "en": "Wa-khfid lahuma janaha adh-dhulli mina ar-rahmah: and lower to them the wing of humility, out of mercy. Al-Qurtubi calls it a metaphor for tenderness, taken from a bird spreading its wing over its young. He glosses dhull as softness: a person should hold himself before his parents in the best humility, in word, stillness and look, and never fix a hard stare on them, for that is the look of the angry. Ibn Kathir's gloss is short: be humble to them in your actions.",
            "bn": "ওয়াখফিদ লাহুমা জানাহায যুল্লি মিনার রহমাহ: আর রহমতের সঙ্গে তাঁদের জন্য বিনয়ের ডানা নামিয়ে দিন। কুরতুবী একে স্নেহ ও মমতার রূপক বলেন। ছবিটা এসেছে পাখির কাছ থেকে, যে বাচ্চার ওপর ডানা মেলে দেয়। তাঁর মতে যুল মানে কোমলতা। মা-বাবার সামনে মানুষ নিজেকে রাখবে সবচেয়ে সুন্দর বিনয়ে, কথায়, চুপ থাকায়, চাহনিতে। তাঁদের দিকে কড়া চোখে তাকাবে না, কারণ ওটা রাগী মানুষের চাহনি। ইবনে কাসীরের ব্যাখ্যা ছোট: কাজেকর্মে তাঁদের প্রতি বিনয়ী হোন।"
          },
          {
            "en": "Urwah ibn az-Zubayr, in at-Tabari and al-Baghawi, makes it practical: be gentle with them until you refuse nothing they love. At-Tabari sets the bound in the same breath: obey them in what they command, so long as it is no disobedience to Allah. Min ar-rahmah names the source. Al-Qurtubi says it marks a humility rising from mercy settled in the soul, not put on for use; Ma'arif warns against mere show; as-Sa'di says it is for mercy and reward, not fear of them or hope of their wealth.",
            "bn": "তাবারী ও বাগাভীতে উরওয়া ইবনুয যুবাইর কথাটাকে বাস্তবে নামিয়ে আনেন: তাঁদের সঙ্গে এতটা নরম হোন যে তাঁদের পছন্দের কোনো কিছুতে না বলবেন না। তাবারী সঙ্গে সঙ্গে সীমাও টেনে দেন: তাঁরা যা আদেশ করেন তা মানুন, যতক্ষণ তা আল্লাহর নাফরমানি না হয়। মিনার রহমাহ বলে দেয় এই বিনয়ের উৎস কোথায়। কুরতুবী বলেন, এ বিনয় জন্মায় মনের গভীরে থাকা রহমত থেকে, কাজ আদায়ের জন্য পরা মুখোশ থেকে নয়। মাআরিফ সতর্ক করে, এ যেন লোক দেখানো না হয়। সা'দীর মতে এর পেছনে থাকবে রহমত আর সওয়াবের আশা, তাঁদের ভয় বা তাঁদের সম্পদের লোভ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "As They Raised Me Small",
          "bn": "যেমন তাঁরা ছোটবেলায় লালন করেছেন"
        },
        "p": [
          {
            "en": "Wa qul rabbi-rhamhuma kama rabbayani saghira: and say, my Lord, have mercy on them as they raised me when I was small. At-Tabari paraphrases: incline to them with Your forgiveness and mercy, as they inclined to me in my childhood, until I could stand on my own. Qatada, in at-Tabari: this is how you have been taught; take Allah's teaching. As-Sa'di and al-Muyassar say to pray for them living and dead, and Ma'arif notes that this one instruction outlasts them.",
            "bn": "ওয়া কুল রব্বির হামহুমা কামা রব্বাইয়ানী সগীরা: আর বলুন, হে আমার রব, তাঁদের প্রতি রহম করুন, যেমন তাঁরা ছোটবেলায় আমাকে লালন করেছেন। তাবারীর ব্যাখ্যায় দোয়াটা এমন: আপনার মাগফিরাত ও রহমত দিয়ে তাঁদের দিকে ফিরুন, যেমন শৈশবে তাঁরা আমার দিকে ফিরেছিলেন, যতদিন না আমি নিজের পায়ে দাঁড়াতে পেরেছি। তাবারীতে কাতাদা বলেন: এভাবেই তোমাদের শেখানো হয়েছে, আল্লাহর শিক্ষা গ্রহণ করো। সা'দী ও মুয়াসসার বলেন, জীবিত অবস্থায় এবং মৃত্যুর পরেও তাঁদের জন্য দোয়া করতে হবে। মাআরিফ মনে করিয়ে দেয়, এই একটি নির্দেশ তাঁদের মৃত্যুর পরও কাজে থাকে।"
          },
          {
            "en": "Does the prayer cover parents who die as idolaters? Here there is a genuine disagreement. At-Tabari reports from Ibn Abbas (RA) and 'Ikrimah that it was abrogated by 9:113, it is not for the Prophet and the believers to ask forgiveness for the idolaters, even if they are near of kin; Ibn Kathir and al-Baghawi carry the same from Ibn Abbas, and al-Qurtubi from Ibn Abbas and Qatada. Al-Qurtubi narrows it: only the prayer for mercy after they die in disbelief was abrogated, and all else in the passage still applies.",
            "bn": "মুশরিক অবস্থায় মারা যাওয়া মা-বাবাও কি এই দোয়ার মধ্যে পড়েন? এখানে সত্যিকারের মতভেদ আছে। তাবারী ইবনে আব্বাস (রাঃ) ও ইকরিমা থেকে বর্ণনা করেন, আয়াতটি ৯:১১৩ দিয়ে মানসূখ হয়েছে: নবী ও মুমিনদের জন্য সংগত নয় মুশরিকদের জন্য মাগফিরাত চাওয়া, তারা নিকটাত্মীয় হলেও। ইবনে কাসীর ও বাগাভী একই কথা ইবনে আব্বাস (রাঃ) থেকে আনেন, আর কুরতুবী আনেন ইবনে আব্বাস (রাঃ) ও কাতাদা থেকে। কুরতুবী পরিসরটা ছোট করে আনেন। তাঁর বর্ণনায় মানসূখ হয়েছে কেবল কুফরের ওপর মৃত্যুর পর রহমতের দোয়া, অংশটির বাকি সব হুকুম বহাল আছে।"
          },
          {
            "en": "Others see restriction, not abrogation. At-Tabari says the verse can bear a specific sense with nothing abrogated: say it if they are believers. Al-Baghawi's own gloss is: if they are Muslims. Al-Qurtubi adds the view that it is a prayer for worldly mercy while they live, and himself calls the general reading correct; Ma'arif, abridging him, allows it in their lifetime, for relief and for faith, but not after death. On treatment, al-Qurtubi says dutifulness is not limited to Muslim parents where there is a covenant, citing 60:8. This article does not choose between the readings.",
            "bn": "অন্য আলেমরা একে মানসূখ নয়, সীমিত হুকুম হিসেবে দেখেন। তাবারী বলেন, কিছু মানসূখ না ধরেও আয়াতটির একটি বিশেষ অর্থ হতে পারে: তাঁরা মুমিন হলে এ দোয়া করো। বাগাভীর নিজের ব্যাখ্যাও তাই: যদি তাঁরা মুসলিম হন। কুরতুবী আরেকটি মত আনেন, এ হলো জীবিত অবস্থায় দুনিয়াবি রহমতের দোয়া, এবং নিজে ব্যাপক অর্থটিকেই সঠিক বলেন। মাআরিফ তাঁর কথা সংক্ষেপ করে বলে, জীবদ্দশায় কষ্ট লাঘব আর ঈমানের তাওফিকের জন্য এ দোয়া জায়েজ, মৃত্যুর পর নয়। আচরণের প্রশ্নে কুরতুবী বলেন, সদ্ব্যবহার শুধু মুসলিম মা-বাবার জন্য নয়, চুক্তির আওতায় থাকা অমুসলিম মা-বাবারও তা প্রাপ্য, প্রমাণ ৬০:৮। কোন মতটি সঠিক, এ লেখা তা বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Home Is Not Easy",
          "bn": "ঘর যখন সহজ নয়"
        },
        "p": [
          {
            "en": "Nothing in these verses makes the command wait on the parents being easy. The commentators do mark one limit. At-Tabari bounds obedience at disobedience to Allah, and Ma'arif reports scholarly agreement that obedience is owed only in what is permissible; for parents who are not Muslims it cites 31:15: do not obey them in shirk, yet keep them company in this world with kindness. What the verses ask is a guarded tongue, a lowered bearing and a prayer, and the prayer stays within reach even where closeness is hard.",
            "bn": "এই দুই আয়াতের কোথাও হুকুমটাকে মা-বাবার সহজ মানুষ হওয়ার শর্তে বাঁধা হয়নি। তবে মুফাসসিররা একটি সীমা টানেন। তাবারীর কাছে আনুগত্যের সীমা আল্লাহর নাফরমানি পর্যন্ত। মাআরিফ জানায়, আলেমরা একমত যে মা-বাবার আনুগত্য কেবল জায়েজ বিষয়ে। অমুসলিম মা-বাবার প্রসঙ্গে সেখানে আসে ৩১:১৫: শিরকের ব্যাপারে তাঁদের কথা মানবেন না, তবু দুনিয়াতে তাঁদের সঙ্গে সদ্ভাবে থাকুন। আয়াত দুটি চায় সংযত জিহ্বা, নত আচরণ আর দোয়া। কাছাকাছি থাকা যেখানে কঠিন, দোয়ার পথ সেখানেও খোলা থাকে।"
          },
          {
            "en": "The next verse speaks to anyone who has failed here. 17:25: your Lord knows best what is in your souls; if you are righteous, He is ever forgiving to those who keep returning. Al-Muyassar explains that Allah knows the good and bad in your hearts, and for whoever aims at His pleasure, with a heart that holds only turning back to Him, He pardons the small lapses that come from human nature. The sigh regretted is not the end of the matter. Then 17:26 widens the circle to kin, the poor and the traveller.",
            "bn": "যে এখানে কখনো পিছলে গেছে, পরের আয়াত তাকেই সম্বোধন করে। ১৭:২৫: তোমাদের রব ভালো জানেন তোমাদের মনে কী আছে; তোমরা নেককার হলে, বারবার ফিরে আসা মানুষদের তিনি ক্ষমা করেন। মুয়াসসারের ব্যাখ্যা, আল্লাহ আপনার মনের ভালো-মন্দ সবই জানেন। যার উদ্দেশ্য তাঁর সন্তুষ্টি, যার মনে তাঁর দিকে ফেরা ছাড়া আর কিছু নেই, মানুষের স্বভাব থেকে আসা তার ছোটখাটো ভুলগুলো তিনি মাফ করে দেন। যে দীর্ঘশ্বাসের জন্য পরে অনুতাপ হয়েছে, সেখানেই সব শেষ নয়। তারপর ১৭:২৬ বৃত্তটা বাড়িয়ে আত্মীয়, মিসকীন ও মুসাফিরকে টেনে আনে।"
          }
        ]
      }
    ]
  },
  "17:26": {
    "sections": [
      {
        "h": {
          "en": "After the Parents, the Kin",
          "bn": "মা-বাবার পরে আত্মীয়"
        },
        "p": [
          {
            "en": "Wa ati dha al-qurba haqqahu wa al-miskina wa ibna as-sabil, wa la tubadhdhir tabdhira: give the relative his right, and the poor and the traveller, and do not squander. Ten Arabic words, set inside the run of commands that opens in 17:23 with worshipping none but Allah and goodness to parents. For Ibn Kathir the order is deliberate: after devotion to parents, Allah joins kindness to relatives and keeping family ties. Al-Qurtubi puts the link as an instruction: as you have honoured your parents' right, so join your kin, then give charity to the poor and the traveller.",
            "bn": "ওয়া আতি যাল-কুরবা হাক্কাহু ওয়াল-মিসকীনা ওয়াবনাস-সাবীল, ওয়া লা তুবাযযির তাবযীরা: আত্মীয়কে তার হক দাও, মিসকীন ও মুসাফিরকেও, আর অপচয় করো না। আরবিতে মাত্র দশটি শব্দ। আয়াতটি বসেছে সেই নির্দেশমালার ভেতরে, যা ১৭:২৩ আয়াতে শুরু হয়েছে আল্লাহ ছাড়া কারও ইবাদত না করা আর মা-বাবার সঙ্গে সদ্ব্যবহারের হুকুম দিয়ে। ইবন কাসীরের চোখে এই ক্রম ভেবেচিন্তে সাজানো। মা-বাবার প্রতি সদাচরণের কথা বলে আল্লাহ তার সঙ্গে জুড়লেন আত্মীয়দের প্রতি সদ্ব্যবহার আর আত্মীয়তার বন্ধন রক্ষার কথা। কুরতুবী যোগসূত্রটা বলেন উপদেশের ভাষায়: মা-বাবার হক যেমন রক্ষা করেছ, তেমনি আত্মীয়তার সম্পর্ক জুড়ে রাখো, তারপর মিসকীন ও মুসাফিরকে সদকা দাও।"
          },
          {
            "en": "At-Tabari notices who is addressed. The verb ati is singular, spoken on its face to the Prophet ﷺ, yet he says its ruling covers everyone on whom Allah's obligations fall. His evidence is the passage's own opening: wa qada rabbuka is addressed to the Prophet, alla ta'budu turns to the plural, and imma yablughanna 'indaka singles out one listener again. Ibn Zayd, quoted by at-Tabari, sums up the order: He began with the parents, and when He had finished with them and their right, He mentioned these. The parents are the subject of the article on 17:23 and 17:24.",
            "bn": "কথাটা কাকে বলা হচ্ছে, তাবারী সেদিকে নজর দেন। আতি ক্রিয়াটি একবচন, বাহ্যত নবী ﷺ-কে সম্বোধন। তবু তাবারীর মতে এর বিধান তাদের সবার জন্য, যাদের ওপর আল্লাহর ফরজ বর্তায়। প্রমাণ তিনি নেন এই অংশের শুরু থেকেই। ওয়া কাদা রাব্বুকা বলা হয়েছে নবীকে, আল্লা তা'বুদূ-তে সম্বোধন চলে গেছে বহুবচনে, আবার ইম্মা ইয়াবলুগান্না ইনদাকা-তে ফিরে এসেছে একজনের দিকে। তাবারীর উদ্ধৃতিতে ইবন যায়দ ক্রমটা এক কথায় বলে দেন: তিনি শুরু করেছেন মা-বাবা দিয়ে, তাঁদের আর তাঁদের হকের কথা শেষ করে এদের কথা বলেছেন। মা-বাবার প্রসঙ্গ আছে ১৭:২৩ ও ১৭:২৪ আয়াতের প্রবন্ধে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Kinsman Is Meant",
          "bn": "কোন আত্মীয়ের কথা"
        },
        "p": [
          {
            "en": "At-Tabari opens by noting that the commentators differed over who dha al-qurba means. The first group says it is a person's own relatives through father and mother, whom Allah commanded His servants to join. He gives three reports. A man asked al-Hasan whether he might give his zakat to his relatives; al-Hasan answered that they have a right in it besides the zakat, and recited this verse. 'Ikrimah said the right is the kindness with which you mean to join him. Ibn 'Abbas (RA) said it is to join the relative and the poor, and to treat the traveller well.",
            "bn": "তাবারী শুরুই করেন একটি মতভেদ দিয়ে: যাল-কুরবা বলে কাকে বোঝানো হয়েছে, তা নিয়ে মুফাসসিরদের মধ্যে ভিন্নমত আছে। প্রথম দলের মতে, এরা মানুষের নিজের আত্মীয়, বাবার দিক থেকে আর মায়ের দিক থেকে। আল্লাহ বান্দাদের এদের সঙ্গে সম্পর্ক রাখার হুকুম দিয়েছেন। এ মতের পক্ষে তিনি তিনটি বর্ণনা আনেন। এক লোক হাসানকে জিজ্ঞেস করল, আত্মীয়দের কি নিজের মালের যাকাত দিতে পারি? হাসান বললেন, যাকাতের বাইরেও তাদের হক আছে, তারপর এই আয়াত পড়লেন। ইকরিমা বলেন, তার হক হলো সেই সদাচরণ, যা দিয়ে তুমি তার সঙ্গে সম্পর্ক জুড়তে চাও। ইবন আব্বাস (রাঃ) বলেন, এর মানে আত্মীয় ও মিসকীনের সঙ্গে সম্পর্ক রাখা আর মুসাফিরের প্রতি সদয় হওয়া।"
          },
          {
            "en": "Al-Baghawi gives the same reading: it means joining the tie of kinship, a person's own relatives are intended, and most scholars hold this. The Muyassar mentions no other view: be good to everyone who has a tie of kinship with you, and give him his right of kindness and devotion. Ma'arif al-Qur'an calls this a turn from parents to common relatives. It says the verse proves at least this much: every person is obliged to fulfil the right of his ordinary relatives, though what that right is and how much, the verse does not specify.",
            "bn": "বাগাভীও একই ব্যাখ্যা দেন, আর জানিয়ে দেন বেশির ভাগ আলেম কোথায় দাঁড়িয়ে: এখানে আত্মীয়তার বন্ধন রক্ষার কথা, উদ্দেশ্য মানুষের নিজের আত্মীয়, আর অধিকাংশের মত এটাই। মুয়াসসার অন্য কোনো মতের উল্লেখই করে না। তার ভাষায়: যার সঙ্গেই আপনার আত্মীয়তার সম্পর্ক, তার প্রতি সদয় হোন, সদাচরণ ও সদ্ব্যবহারে তার হক তাকে দিন। মাআরিফুল কুরআন মা-বাবার হকের আলোচনা সেরে বলে, এবার সাধারণ আত্মীয়দের কথা এসেছে। তার মতে আয়াত থেকে অন্তত এটুকু প্রমাণিত যে প্রত্যেককে তার সাধারণ আত্মীয়দের হক আদায় করতে হবে। তবে সেই হক কী, কতটুকু, তার খুঁটিনাটি এখানে বলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Second Reading, and Fadak",
          "bn": "দ্বিতীয় মত ও ফাদাকের বর্ণনা"
        },
        "p": [
          {
            "en": "The second group, at-Tabari continues, says the verse means the kin of the Messenger of Allah ﷺ. He relates it from 'Ali ibn al-Husayn, who asked a man from Syria whether he had read, in Bani Isra'il, the words wa ati dha al-qurba haqqahu. The man asked whether they were the kin whose right Allah had commanded be given, and he said yes. Al-Baghawi lists the view under the same name. Al-Qurtubi spells it out: the Prophet ﷺ was commanded to give them their rights from the public treasury, from the kin's share of spoils, so the address falls on rulers and those in their place.",
            "bn": "দ্বিতীয় দলের মত, তাবারী জানান, আয়াতে রাসূলুল্লাহ ﷺ-এর আত্মীয়দের কথা বলা হয়েছে। তিনি এটি বর্ণনা করেন আলী ইবনুল হুসাইন থেকে। শামের এক লোককে তিনি জিজ্ঞেস করেছিলেন, বনী ইসরাঈল সূরায় ওয়া আতি যাল-কুরবা হাক্কাহু পড়োনি? লোকটি জানতে চাইল, আপনারাই কি সেই আত্মীয়, যাদের হক দিতে আল্লাহ হুকুম করেছেন? তিনি বললেন, হ্যাঁ। বাগাভীও একই নামে এই মত উল্লেখ করেন। কুরতুবী বলেন এর বাস্তব রূপ: নবী ﷺ-কে হুকুম দেওয়া হয়েছিল বায়তুল মাল থেকে তাদের হক দিতে, অর্থাৎ যুদ্ধ ও গনিমতে আত্মীয়দের যে অংশ, তা থেকে। সে হিসেবে সম্বোধনটা শাসকদের প্রতি, কিংবা যাঁরা তাঁদের স্থলাভিষিক্ত।"
          },
          {
            "en": "At-Tabari then weighs the two and gives his reason. The sounder interpretation, he says, is that this is Allah's counsel to His servants to join their own relatives through fathers and mothers, because Allah placed it directly after urging them to honour fathers and mothers. It should therefore urge the joining of their own lineage, not a lineage that has not been mentioned. Hence his paraphrase: give, O Muhammad, your relative his right of your joining, your kindness and your tenderness. That is his judgement; this article keeps both readings and takes neither side.",
            "bn": "তারপর তাবারী দুই মত মেপে দেখেন এবং কারণসহ নিজের রায় দেন। তাঁর মতে বেশি সঠিক ব্যাখ্যা হলো, এখানে আল্লাহ বান্দাদের নিজ নিজ আত্মীয়, বাবা-মায়ের দিকের আত্মীয়দের সঙ্গে সম্পর্ক রাখার উপদেশ দিচ্ছেন। কারণ আল্লাহ কথাটা এনেছেন মা-বাবার প্রতি সদাচরণের তাগিদের ঠিক পরেই। কাজেই তাগিদটা হওয়া উচিত তাদের নিজেদের বংশের ব্যাপারে, এমন কারও বংশ নয় যার উল্লেখই আসেনি। সেই অনুযায়ী তাঁর ব্যাখ্যা: হে মুহাম্মাদ, তোমার আত্মীয়কে তার হক দাও, তোমার সম্পর্ক, সদাচরণ আর মমতা দিয়ে। এটি তাবারীর রায়। এই প্রবন্ধ দুটি মতই রাখছে, কোনো পক্ষ নিচ্ছে না।"
          },
          {
            "en": "Ibn Kathir records a report tied to the second reading. Al-Bazzar narrated with his chain from Abu Sa'id (RA) that when this verse came down, the Messenger of Allah ﷺ called Fatimah (RA) and gave her Fadak. Al-Bazzar adds that he knows of only two men who related it from Fudayl ibn Marzuq. Ibn Kathir judges: this hadith is problematic even if its chain were sound, because the verse is Makkan, while Fadak was conquered only with Khaybar in the seventh year of the Hijra, so how can the one fit the other? That is all the fetched commentaries say of it.",
            "bn": "দ্বিতীয় মতের সঙ্গে যুক্ত একটি বর্ণনা ইবন কাসীর উল্লেখ করেন। বাযযার নিজের সনদে আবূ সাঈদ (রাঃ) থেকে বর্ণনা করেছেন: এই আয়াত নাযিল হলে রাসূলুল্লাহ ﷺ ফাতিমা (রাঃ)-কে ডেকে তাঁকে ফাদাক দিয়ে দেন। বাযযার আরও বলেন, ফুযাইল ইবন মারযূক থেকে এটি মাত্র দুজন বর্ণনা করেছেন বলে তিনি জানেন। এরপর ইবন কাসীরের নিজের মূল্যায়ন: সনদ সহীহ হলেও হাদীসটি জটিলতামুক্ত হতো না। কারণ আয়াতটি মক্কী, অথচ ফাদাক জয় হয়েছে খায়বারের সঙ্গে, হিজরতের সপ্তম বছরে। তাহলে এ দুটো মেলে কী করে? সংগৃহীত তাফসীরগুলো এ বিষয়ে এটুকুই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What His Right Contains",
          "bn": "হকের ভেতরে কী আছে"
        },
        "p": [
          {
            "en": "Whichever relative is meant, what is his right? As-Sa'di answers: kindness and honour, both the obligatory and the recommended, and that right varies with circumstances, with the relatives themselves, with need or its absence, and with the times. Al-Qurtubi's list is concrete: the right in this verse is what becomes due of joining the tie, filling the gap of want, sharing wealth in time of need, and help in every way. The Muyassar names ihsan and birr, goodness and devotion.",
            "bn": "আত্মীয় বলতে যাকেই বোঝানো হোক, তার হকটা কী? সা'দীর জবাব: সদ্ব্যবহার ও সম্মান, যার কিছু ওয়াজিব, কিছু মুস্তাহাব। আর এই হক এক রকম থাকে না। অবস্থা, আত্মীয়ের ধরন, অভাব থাকা না থাকা আর সময়ভেদে তা বদলায়। কুরতুবীর তালিকা একেবারে হাতে-কলমে: এই আয়াতে হক মানে যা আবশ্যক হয়ে দাঁড়ায়, আত্মীয়তার সম্পর্ক রক্ষা, অভাবের ফাঁক পূরণ, প্রয়োজনের সময় সম্পদ দিয়ে পাশে দাঁড়ানো, আর সব রকমের সাহায্য। মুয়াসসার বলে ইহসান ও বির, অর্থাৎ সদয়তা ও সদ্ব্যবহার।"
          },
          {
            "en": "Ma'arif al-Qur'an describes a floor. The least degree is to share with relatives the graces of good social living and treat them well; if they are needy, helping them with money, within one's means, is included. It then reports, through Tafsir Mazhari, Imam Abu Hanifah's view that this command obliges support of a needy relative within the degrees that bar marriage: a woman or child with no means and no ability to earn, or one who is disabled or blind. Relatives of equal means share the cost, with 2:233 cited in support: on the heir is the like of that.",
            "bn": "মাআরিফুল কুরআন একটা ন্যূনতম সীমা দেখায়। সবচেয়ে কম যা করতে হবে, তা হলো আত্মীয়দের সঙ্গে সুন্দর সামাজিক আচরণ ভাগ করে নেওয়া আর তাদের সঙ্গে ভালো ব্যবহার করা। তারা অভাবী হলে নিজের সামর্থ্য অনুযায়ী টাকাপয়সা দিয়ে সাহায্য করাও এর মধ্যে পড়ে। এরপর তাফসীরে মাযহারীর সূত্রে ইমাম আবূ হানীফার মত আনা হয়েছে। তাঁর মতে এই হুকুমের ভিত্তিতেই অভাবী মাহরাম আত্মীয়ের ভরণপোষণ দিতে হবে। যেমন এমন নারী বা শিশু, যার সম্বল নেই, রোজগারের সামর্থ্যও নেই, কিংবা যে পঙ্গু বা অন্ধ। খরচ ভাগ হবে সমান সচ্ছল আত্মীয়দের মধ্যে। সমর্থনে আনা হয়েছে ২:২৩৩: ওয়ারিসের ওপরও একই দায়িত্ব।"
          },
          {
            "en": "Two remarks in the sources give haqqahu its weight. Al-Hasan's answer, that relatives have a right besides the zakat, treats the claim as something beyond the minimum alms. And Ma'arif al-Qur'an draws a lesson from the possessive: because the help is called their right, the giver has no reason to remind anyone of the favour, in front of them or behind their backs. Their right is his duty. He is doing that duty, Ma'arif says, not showering favours on anyone.",
            "bn": "উৎসগুলোর দুটি মন্তব্য হাক্কাহু শব্দটিকেই ভারী করে তোলে। হাসানের জবাব ছিল, যাকাতের বাইরেও আত্মীয়দের হক আছে। অর্থাৎ এই দাবি ন্যূনতম যাকাতে শেষ হয় না। আর মাআরিফুল কুরআন সর্বনামটি থেকে একটা শিক্ষা টানে। সাহায্যটাকে যেহেতু তাদের হক বলা হয়েছে, তাই দাতার কোনো কারণ নেই কারও সামনে বা আড়ালে অনুগ্রহের খোঁটা দেওয়ার। তাদের হক মানেই তার দায়িত্ব। মাআরিফের ভাষায়, সে কেবল নিজের দায়িত্ব পালন করছে, কারও ওপর দয়া বর্ষণ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Poor and the Stranded",
          "bn": "মিসকীন আর পথে আটকে পড়া"
        },
        "p": [
          {
            "en": "The verse names two more. At-Tabari glosses al-miskin as the lowly among people in need, and refers back to his earlier discussion of the word. The Muyassar defines him as a person who does not own what suffices him and meets his need. As-Sa'di says: give him his right from the zakat and from beyond it, so that his want is removed. Ibn Kathir says only that he has already discussed the poor and the traveller in Surah Bara'ah and will not repeat it here.",
            "bn": "আয়াতে আরও দুজনের নাম আছে। তাবারী আল-মিসকীনের ব্যাখ্যা দেন অভাবীদের মধ্যে যে দীনহীন, সে। শব্দটির বিস্তারিত আলোচনা তিনি আগেই করেছেন বলে সেদিকে ইঙ্গিত করেন। মুয়াসসারের সংজ্ঞায় মিসকীন সেই লোক, যার কাছে প্রয়োজন মেটানোর মতো যথেষ্ট কিছু নেই। সা'দী বলেন, যাকাত থেকে এবং যাকাতের বাইরে থেকেও তার হক দাও, যাতে তার অভাব দূর হয়। ইবন কাসীর শুধু বলেন, মিসকীন ও মুসাফিরের আলোচনা তিনি সূরা বারাআতে করে এসেছেন, এখানে আর দোহরাবেন না।"
          },
          {
            "en": "Ibn as-sabil, the son of the road, is for at-Tabari the traveller cut off on his way: help him, and strengthen him to finish his journey. A narrower view, introduced with it has been said, limits the traveller's right to three days of hospitality. At-Tabari prefers the general reading, because Allah did not single out one of the traveller's rights over another, in His Book or on His Messenger's tongue; so the right covers hospitality, a mount, or help on the road. As-Sa'di calls him the stranger cut off from his land, and the Muyassar the traveller cut off from his family and wealth.",
            "bn": "ইবনুস সাবীল, আক্ষরিক অর্থে পথের সন্তান। তাবারীর কাছে সে এমন মুসাফির, যে পথে আটকে পড়েছে। তাকে সাহায্য করো, সফর শেষ করার মতো শক্তি জোগাও। তিনি 'বলা হয়েছে' দিয়ে একটি সংকীর্ণ মতও উল্লেখ করেন: মুসাফিরের হক হলো তিনটি দিন তাকে মেহমান রাখা। তবে তাবারী সাধারণ অর্থটাই পছন্দ করেন। কারণ আল্লাহ তাঁর কিতাবে বা রাসূলের মুখে মুসাফিরের কোনো একটি হককে আলাদা করে নির্দিষ্ট করেননি। তাই মেহমানদারি, বাহন কিংবা সফরে সাহায্য, সবই এর মধ্যে পড়ে। সা'দীর ভাষায় সে নিজের দেশ থেকে বিচ্ছিন্ন পরদেশি, মুয়াসসারের ভাষায় পরিবার ও সম্পদ থেকে বিচ্ছিন্ন মুসাফির।"
          }
        ]
      },
      {
        "h": {
          "en": "Scattering Wealth Wrongly",
          "bn": "অন্যায় পথে সম্পদ ছড়ানো"
        },
        "p": [
          {
            "en": "Then the prohibition: wa la tubadhdhir tabdhira, a verb followed by its own verbal noun. At-Tabari paraphrases: do not scatter, O Muhammad, the wealth Allah has given you in disobedience to Him. The root of tabdhir, he says, is scattering in excess, citing a line of poetry. Then the Companions, through many chains. 'Abdullah ibn Mas'ud (RA), asked what tabdhir is, said: spending wealth in other than its right. In one chain he adds that the Companions of Muhammad ﷺ used to speak of it that way. Ibn 'Abbas (RA) defines the squanderer the same way.",
            "bn": "তারপর নিষেধ: ওয়া লা তুবাযযির তাবযীরা। ক্রিয়ার পরে এসেছে তারই ক্রিয়াবাচক বিশেষ্য। তাবারীর ব্যাখ্যা: হে মুহাম্মাদ, আল্লাহ তোমাকে যে সম্পদ দিয়েছেন, তা তাঁর নাফরমানিতে ছড়িয়ে দিয়ো না। তিনি বলেন, তাবযীরের মূল অর্থ বাড়াবাড়ি করে ছড়িয়ে ফেলা, আর এই অর্থে শব্দটির ব্যবহার দেখাতে একটি কবিতার চরণ আনেন। এরপর সাহাবিদের কথা, বহু সনদে। আবদুল্লাহ ইবন মাসঊদ (রাঃ)-কে তাবযীর সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন: সম্পদ তার হকের বাইরে খরচ করা। এক সনদে তিনি যোগ করেন, মুহাম্মাদ ﷺ-এর সাহাবিরা নিজেদের মধ্যে একে এভাবেই বলতেন। ইবন আব্বাস (রাঃ)-ও অপচয়কারীর একই সংজ্ঞা দেন।"
          },
          {
            "en": "Mujahid's line, in at-Tabari, al-Baghawi and Ibn Kathir, is the sharpest: if a person spent all his wealth in the right, it would not be tabdhir, and if he spent a single mudd in falsehood, it would be. Qatadah: spending in disobedience to Allah, in what is not right, and in corruption. Ibn Zayd: do not give in disobedience to Allah. At-Tabari and al-Baghawi also relate that Shu'bah, walking with Abu Ishaq on a road in Kufa, passed a house being built of gypsum and baked brick, and Abu Ishaq said: this is tabdhir in 'Abdullah's sense.",
            "bn": "সবচেয়ে ধারালো কথাটি মুজাহিদের, তাবারী, বাগাভী ও ইবন কাসীর সবাই তা উল্লেখ করেন: কেউ যদি তার সব সম্পদ হক পথে খরচ করে, সেটা তাবযীর নয়। আর যদি অন্যায় পথে এক মুদ্দও খরচ করে, সেটাই তাবযীর। কাতাদা বলেন, আল্লাহর নাফরমানিতে, নাহক পথে আর ফাসাদে খরচ করা। ইবন যায়দ বলেন, আল্লাহর নাফরমানিতে দিয়ো না। তাবারী ও বাগাভী আরও বর্ণনা করেন, শু'বা একবার আবূ ইসহাকের সঙ্গে কূফার পথে হাঁটছিলেন। চুন-সুরকি আর পোড়া ইটে গাঁথা একটি বাড়ির পাশ দিয়ে যাওয়ার সময় আবূ ইসহাক বললেন: আবদুল্লাহর কথার অর্থে এটাই তাবযীর।"
          },
          {
            "en": "Al-Qurtubi records al-Shafi'i: tabdhir is spending wealth in other than its right, and there is no tabdhir in doing good; this, he says, is the view of the majority. Ashhab relates from Malik that it is taking wealth from its proper source and placing it where it has no right, that this is israf, and that it is forbidden because of 17:27. Ibn Kathir reads the ban as measure: having commanded spending, Allah forbade excess in it, citing 25:67. As-Sa'di: give in a way that neither harms the giver nor exceeds the fitting amount, for that would be tabdhir.",
            "bn": "কুরতুবী শাফেয়ীর কথা উদ্ধৃত করেন: তাবযীর মানে সম্পদ তার হকের বাইরে খরচ করা, আর ভালো কাজে কোনো তাবযীর নেই। কুরতুবী বলেন, অধিকাংশ আলেমের মত এটাই। আশহাব ইমাম মালেক থেকে বর্ণনা করেন: তাবযীর হলো সম্পদ বৈধ উৎস থেকে নিয়ে এমন জায়গায় রাখা, যেখানে তার হক নেই। এটাই ইসরাফ, আর ১৭:২৭ আয়াতের কারণে তা হারাম। ইবন কাসীর নিষেধটিকে পড়েন ভারসাম্যের নির্দেশ হিসেবে। আল্লাহ খরচের হুকুম দিয়ে তাতে বাড়াবাড়ি নিষেধ করেছেন, যেন খরচ হয় মাঝামাঝি। প্রমাণে তিনি আনেন ২৫:৬৭। সা'দী বলেন দাতার দিক থেকে: এমনভাবে দাও যাতে দাতার ক্ষতি না হয় আর উপযুক্ত পরিমাণও ছাড়িয়ে না যায়, কারণ সেটাও তাবযীর।"
          }
        ]
      },
      {
        "h": {
          "en": "Neighbouring Verses, One Narration",
          "bn": "পাশের আয়াত, একটি হাদীস"
        },
        "p": [
          {
            "en": "Two neighbours get a line each. Of 17:27, the squanderers are brothers of the devils, Ibn Kathir says they are their brothers in extravagance, folly, abandoning obedience to Allah and committing sin, and that Shaytan is ungrateful because he denied Allah's blessings. The verse describes a kind of conduct and the company it keeps; it licenses nothing against any living person or community. Of 17:28, Ibn Kathir says that when the needy ask and you have nothing, speak to them a gentle word, meaning a promise, the view of Mujahid, 'Ikrimah, al-Hasan, Qatadah and others.",
            "bn": "পাশের দুটি আয়াত, এক লাইন করে। ১৭:২৭ আয়াত বলে, অপচয়কারীরা শয়তানের ভাই। ইবন কাসীরের ব্যাখ্যা: তারা শয়তানের ভাই অপচয়ে, নির্বুদ্ধিতায়, আল্লাহর আনুগত্য ছেড়ে দেওয়ায় আর গুনাহে লিপ্ত হওয়ায়। আর শয়তান না-শোকর, কারণ সে আল্লাহর নিয়ামত অস্বীকার করেছে। আয়াতটি এক ধরনের আচরণ আর তার সঙ্গী কারা, সেটুকুই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি দেয় না। ১৭:২৮ সম্পর্কে ইবন কাসীর বলেন, অভাবীরা চাইলে আর দেওয়ার কিছু না থাকলে তাদের নরম কথা বলো, অর্থাৎ প্রতিশ্রুতি দাও। এটি মুজাহিদ, ইকরিমা, হাসান, কাতাদা প্রমুখের মত।"
          },
          {
            "en": "Ibn Kathir also cites, without naming a collection, the narration on keeping ties of kinship. Al-Bukhari records it in his Sahih (5986) from Anas ibn Malik (RA): Allah's Apostle said, \"Whoever loves that he be granted more wealth and that his lease of life be prolonged then he should keep good relations with his Kith and kin.\" He brings it for the theme of kinship, not as the occasion of this verse's revelation. The other narrations he places here could not be checked against a collection, and are left out.",
            "bn": "ইবন কাসীর কোনো গ্রন্থের নাম না নিয়ে আত্মীয়তার সম্পর্ক রক্ষার হাদীসটিও উল্লেখ করেন। ইমাম বুখারী তাঁর সহীহ গ্রন্থে (৫৯৮৬) আনাস ইবন মালিক (রাঃ) থেকে এটি বর্ণনা করেছেন: রাসূলুল্লাহ ﷺ বলেছেন, \"যে চায় তার রিযিক প্রশস্ত হোক আর তার আয়ু বৃদ্ধি পাক, সে যেন আত্মীয়তার সম্পর্ক বজায় রাখে।\" ইবন কাসীর হাদীসটি এনেছেন আত্মীয়তার প্রসঙ্গে, আয়াতটি নাযিলের উপলক্ষ হিসেবে নয়। এখানে তাঁর আনা অন্য বর্ণনাগুলো কোনো গ্রন্থের সঙ্গে মিলিয়ে দেখা যায়নি, তাই সেগুলো বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Right, Not a Favour",
          "bn": "হক, দয়া নয়"
        },
        "p": [
          {
            "en": "Read through its commentators, the verse sets out a short map of obligation. Relatives come first, because the command follows the parents; then the one whose need is plain, and the one whose road has failed him. The word that holds it together is haqqahu. As-Sa'di's note that the right varies with circumstance, need and time keeps the command from hardening into a fixed sum, and al-Qurtubi's list, from joining the tie to help in every way, keeps it from shrinking to money alone.",
            "bn": "তাফসীরকারদের চোখ দিয়ে পড়লে আয়াতটি দায়িত্বের একটা ছোট মানচিত্র এঁকে দেয়। প্রথমে আত্মীয়, কারণ হুকুমটা এসেছে মা-বাবার পরেই। তারপর সেই মানুষ, যার অভাব চোখের সামনে, আর সেই মানুষ, যাকে পথ মাঝপথে ফেলে দিয়েছে। সবকিছুকে এক সুতোয় বাঁধে হাক্কাহু শব্দটি। সা'দী বলেছেন, এই হক অবস্থা, প্রয়োজন আর সময়ভেদে বদলায়। ফলে হুকুমটা কোনো বাঁধা অঙ্কে আটকে যায় না। আর কুরতুবীর তালিকা, সম্পর্ক রক্ষা থেকে সব রকমের সাহায্য পর্যন্ত, হুকুমটাকে কেবল টাকাপয়সায় ছোট হয়ে যেতে দেয় না।"
          },
          {
            "en": "The prohibition beside it is not a brake on giving. In al-Shafi'i's words there is no tabdhir in doing good, and Mujahid's single mudd shows how small a wrong outlay can be. Yet as-Sa'di's caution stands as well: a gift that harms the giver or passes the fitting amount falls under what the verse forbids. Know whose right sits in your wealth, hand it over without reminding anyone of it, and look hardest at the spending that goes nowhere good.",
            "bn": "পাশের নিষেধটি দানের পথে বাধা নয়। শাফেয়ীর ভাষায় ভালো কাজে কোনো তাবযীর নেই। আর মুজাহিদের এক মুদ্দের কথা দেখায়, অন্যায় খরচ কত সামান্যও হতে পারে। তবু সা'দীর সতর্কবাণীও থেকে যায়: যে দান দাতার ক্ষতি করে বা উপযুক্ত পরিমাণ ছাড়িয়ে যায়, সেটাও আয়াতের নিষেধের মধ্যে পড়ে। আপনার সম্পদে কার হক আছে, জেনে নিন। খোঁটা না দিয়ে তা পৌঁছে দিন। আর সবচেয়ে কড়া নজর রাখুন সেই খরচের ওপর, যা কোনো ভালো কাজে যায় না।"
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
          "bn": "যে প্রাণ পবিত্র করা হয়েছে"
        },
        "p": [
          {
            "en": "This command does not stand alone. It falls inside a run of instructions that the sura calls wisdom your Lord has revealed (17:39), and it comes straight after two other prohibitions: do not kill your children for fear of poverty (17:31), and do not approach unlawful intercourse (17:32). Read together, these verses fence a human life on every side. Here the fence is plainest of all: do not kill the soul that Allah has made inviolable, except by right. The soul comes first; the exceptions come after, and narrowly.",
            "bn": "এই আদেশ একা দাঁড়িয়ে নেই। এটি একগুচ্ছ নির্দেশের ভেতরে রয়েছে, যেগুলোকে সূরাটি বলে আপনার রবের নাজিল করা হিকমাত (১৭:৩৯)। আর এর ঠিক আগে আছে আরও দুটি নিষেধ: দারিদ্র্যের ভয়ে সন্তানদের হত্যা কোরো না (১৭:৩১), আর যিনার কাছেও যেয়ো না (১৭:৩২)। একসঙ্গে পড়লে এই আয়াতগুলো মানুষের প্রাণকে চারদিক থেকে ঘিরে রাখে। এখানে বেড়াটা সবচেয়ে স্পষ্ট: আল্লাহ যে প্রাণকে পবিত্র করেছেন তা যথাযথ কারণ ছাড়া হত্যা কোরো না। প্রাণের কথা আগে, ছাড়পত্রের কথা পরে এবং তা সংকীর্ণভাবে।"
          },
          {
            "en": "Whose life? As-Sa'di reads the soul Allah forbade as sweeping in its reach: it takes in the young and the old, male and female, the free and the slave, the Muslim and the non-Muslim who lives under a covenant of protection. None of these may be killed but by right. Ad-Dahhak notes that this was the first passage of the Qur'an revealed about killing, and that it came down in Mecca, before any command to fight. The law of blood, in other words, was set before the community held any power to enforce it.",
            "bn": "কার প্রাণ? সা'দী বলেন, আল্লাহ যে প্রাণ হারাম করেছেন তার পরিধি অনেক বিস্তৃত। এতে আসে ছোট ও বড়, পুরুষ ও নারী, স্বাধীন ও দাস, মুসলিম, আর নিরাপত্তার চুক্তির অধীনে থাকা অমুসলিমও। যথাযথ কারণ ছাড়া এদের কাউকেই হত্যা করা যায় না। দাহহাক জানান, হত্যার ব্যাপারে কুরআনে সবার আগে নাজিল হওয়া অংশ এটিই, আর তা নেমেছিল মক্কায়, যুদ্ধের কোনো আদেশ আসার আগেই। অর্থাৎ রক্তের বিধান স্থির হয়ে গিয়েছিল সমাজের হাতে তা কার্যকর করার শক্তি আসার আগেই।"
          },
          {
            "en": "Ma'arif al-Qur'an observes that virtually every people, faith, and sect has treated the unjust taking of life as a grave crime; the Qur'an does not invent the horror of murder but names it and ranks it. And the placement matters. A verse that has just forbidden killing your own children out of fear of want now widens the circle to every protected soul. The command is not narrow self-interest; it is the sanctity of a human life as such.",
            "bn": "মাআরিফুল কুরআন বলছে, দুনিয়ার প্রায় সব জাতি, ধর্ম আর সম্প্রদায় অন্যায়ভাবে প্রাণ নেওয়াকে গুরুতর অপরাধ বলে মেনেছে। খুন যে ভয়াবহ, এ কথা কুরআন নতুন করে বানায়নি; কুরআন একে নাম ধরে ডাকে আর বুঝিয়ে দেয় অপরাধটা কত বড়। আয়াতটা কোথায় বসেছে, সেটাও গুরুত্বপূর্ণ। একটু আগেই অভাবের ভয়ে নিজের সন্তান হত্যা নিষেধ করা হয়েছে; এবার গণ্ডিটা বড় হয়ে প্রতিটি সুরক্ষিত প্রাণকে ভেতরে নিয়ে নেয়। এই আদেশ কোনো সংকীর্ণ স্বার্থের হিসাব নয়। কথাটা মানুষের প্রাণের পবিত্রতা নিয়ে, প্রাণটা মানুষের বলেই।"
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
            "bn": "ব্যতিক্রমটা মাত্র একটি শব্দগুচ্ছে: ইল্লা বিল-হাক্ক, অর্থাৎ যথাযথ কারণ ছাড়া। সেই কারণ কী, তাবারী খুলে বলেছেন। তাঁর মতে প্রাণ নেওয়া যায় কেবল তিন কারণে: ইসলাম গ্রহণের পর কুফরি করলে, বিয়ের পর যিনা করলে, কিংবা কারও প্রাণ নেওয়ার বদলা হিসেবে। আর কোনো অমুসলিম নিরাপত্তা হারায় কেবল তখনই, যখন তার জন্য কোনো নিরাপত্তা-চুক্তি বহাল থাকে না। বাক্যটির গড়ন খেয়াল করুন। এটি নিষেধকে ঢিলে করে না। যে কয়টি সংকীর্ণ, নির্দিষ্ট কারণে নিষেধ খাটে না, শুধু সেগুলোর নাম বলে দেয়, আর বাকি সব পথের দরজা বন্ধ করে দেয়।"
          },
          {
            "en": "Al-Muyassar gathers the same grounds under one word, shar'i, lawful: retaliation, the stoning of the married adulterer, and the killing of the apostate. As-Sa'di keeps that list and adds the armed aggressor in the act of his aggression, when nothing short of killing will stop him. None of these is a private matter. Each is a judgement of the law, carried out by lawful authority, not a warrant any individual holds over another.",
            "bn": "মুয়াসসার এই একই কারণগুলোকে একটি শব্দে জড়ো করেন: শরঈ, অর্থাৎ শরীয়তসম্মত। কারণগুলো হলো কিসাস, বিবাহিত ব্যভিচারীকে রজম, আর মুরতাদকে হত্যা। সা'দী এই তালিকা রেখে আরেকটি যোগ করেন: সশস্ত্র হামলাকারী, হামলা চলাকালেই, যখন হত্যা ছাড়া তাকে থামানোর আর কোনো উপায় থাকে না। এর কোনোটিই ব্যক্তিগত ব্যাপার নয়। প্রতিটিই শরীয়তের রায়, যা কার্যকর করে বৈধ কর্তৃপক্ষ। কারও হাতে অন্যের প্রাণ নেওয়ার কোনো ছাড়পত্র এখানে নেই।"
          },
          {
            "en": "Al-Qurtubi passes quickly over the phrase here, noting that he treated it fully in Sura al-An'am (6:151), where the same prohibition appears. That brevity is itself instructive: the exceptions are settled, few, and defined, so there is little left to argue. The weight of the verse sits on the rule, not the exception. Inviolability is the standing state of every soul named above; except by right opens only a small and guarded door, and it is the courts, not the aggrieved party, who decide whether a given case has passed through it.",
            "bn": "কুরতুবী এখানে বাক্যাংশটি নিয়ে বেশি কথা বলেননি। তিনি জানিয়ে দেন, সূরা আনআমে (৬:১৫১), যেখানে একই নিষেধ এসেছে, সেখানে এর পুরো আলোচনা করেছেন। এই সংক্ষিপ্ততাও কিছু শেখায়: ব্যতিক্রমগুলো মীমাংসিত, সংখ্যায় অল্প, সীমা টানা; তাই তর্কের জায়গা সামান্য। আয়াতের ভার নিয়মের উপর, ব্যতিক্রমের উপর নয়। উপরে বলা প্রতিটি প্রাণের স্বাভাবিক অবস্থাই হলো সে অলঙ্ঘনীয়। ইল্লা বিল-হাক্ক কেবল একটা ছোট, পাহারা দেওয়া দরজা খোলে। আর কোনো ঘটনা সেই দরজা দিয়ে পার হয়েছে কি না, তা ঠিক করে আদালত, ক্ষতিগ্রস্ত পক্ষ নয়।"
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
            "bn": "আর কাউকে অন্যায়ভাবে হত্যা করা হলে আমি তার উত্তরাধিকারীকে অধিকার দিয়েছি। সা'দী বলেন, এই উত্তরাধিকারী হলেন নিহত ব্যক্তির সবচেয়ে নিকট পুরুষ আত্মীয়। এমন কেউ না থাকলে, মুয়াসসার ও মাআরিফুল কুরআন বলছে, অধিকারটা যায় শাসকের হাতে, কারণ তিনিই প্রতিটি মুসলিমের অভিভাবক। কীসের অধিকার? তাফসীরকারেরা একমত: উত্তরাধিকারী চাইলে খুনির উপর কিসাস কার্যকর করাতে পারেন, চাইলে রক্তমূল্য নিয়ে তাকে প্রাণে বাঁচিয়ে দিতে পারেন, আবার চাইলে কিছু না নিয়েই মাফ করে দিতে পারেন। তিনটি পথ খোলা, আর কোনটা বেছে নেবেন তা উত্তরাধিকারীর হাতে।"
          },
          {
            "en": "On the word sultan the commentators divide, and the difference is worth keeping. Ibn Abbas reads it as a clear proof, a warrant from Allah the heir presents when he claims his due; Malik, as al-Qurtubi reports, reads it as the command of Allah. Beyond that they split on what the command grants. Ibn Abbas, ad-Dahhak, and ash-Shafi'i take it as the whole choice among killing, blood-money, and pardon; Qatada, and Malik and Abu Hanifa in another report, take it narrowly, as the right of retaliation itself. The verse is read both ways.",
            "bn": "সুলতান শব্দের অর্থ নিয়ে তাফসীরকারদের মত ভিন্ন, আর এই মতভেদ মনে রাখার মতো। ইবন আব্বাসের মতে এর অর্থ সুস্পষ্ট দলিল: আল্লাহর দেওয়া এমন প্রমাণ, যা উত্তরাধিকারী নিজের হক দাবি করার সময় পেশ করেন। কুরতুবীর বর্ণনায় মালিকের মতে এর অর্থ আল্লাহর আদেশ। এরপর প্রশ্ন ওঠে, এই আদেশ ঠিক কী দেয়, আর সেখানেও তাঁদের মত দুই রকম। ইবন আব্বাস, দাহহাক আর শাফিঈর মতে এটি পুরো এখতিয়ার: কিসাস, রক্তমূল্য বা ক্ষমা, যেকোনোটি বেছে নেওয়া। কাতাদা, আর অন্য এক বর্ণনায় মালিক ও আবু হানিফা, একে আরও সংকীর্ণ অর্থে নেন: শুধু কিসাসের অধিকার। আয়াতটি দুভাবেই পড়া হয়েছে।"
          },
          {
            "en": "As-Sa'di adds the conditions under which that authority even arises: the killing must have been deliberate, wrongful, and between parties of comparable standing. And the right belongs to the heir, not to the state acting over his head. No retaliation is carried out except by his leave; if he pardons, it falls away entirely. The verse does not merely permit justice for the slain. It entrusts the decision to the person the loss fell upon, and then, as the next clause shows, it binds him.",
            "bn": "সা'দী সেই শর্তগুলোও বলে দেন, যেগুলো পূরণ হলে তবেই এই অধিকার জন্মায়: হত্যাটি হতে হবে ইচ্ছাকৃত ও অন্যায়, আর দুই পক্ষ হতে হবে সমমর্যাদার। আর অধিকারটা উত্তরাধিকারীর; তাঁকে পাশ কাটিয়ে রাষ্ট্র নিজে থেকে এটা প্রয়োগ করতে পারে না। তাঁর অনুমতি ছাড়া কিসাস কার্যকর হয় না, আর তিনি মাফ করলে কিসাস পুরোপুরি বাতিল হয়ে যায়। আয়াত শুধু নিহতের পক্ষে বিচারের অনুমতি দেয় না। ক্ষতিটা যার উপর পড়েছে, সিদ্ধান্ত তুলে দেয় তারই হাতে। তারপর, পরের অংশে যেমন দেখা যাবে, তাকে বেঁধেও দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sahih Records",
          "bn": "সহীহ বুখারীর বর্ণনা"
        },
        "p": [
          {
            "en": "The clearest commentary on except by right is a hadith the mufassirun cite here in one voice. Al-Bukhari records, from Abdullah ibn Mas'ud, that the Messenger of Allah said: The blood of a Muslim who bears witness that none has the right to be worshipped but Allah and that I am the Messenger of Allah is not lawful except in one of three cases: a life for a life, a married person who commits adultery, and one who abandons his religion and forsakes the community. It is a sound report, recorded by al-Bukhari in his Sahih.",
            "bn": "যথাযথ কারণ বলতে কী বোঝায়, তার সবচেয়ে স্পষ্ট ব্যাখ্যা একটি হাদিস, যা তাফসীরকারেরা এখানে একবাক্যে উল্লেখ করেন। বুখারী আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: যে মুসলিম সাক্ষ্য দেয় যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং আমি আল্লাহর রাসূল, তিনটি অবস্থার কোনো একটি ছাড়া তার রক্ত হালাল নয়: প্রাণের বদলে প্রাণ, বিবাহিত ব্যভিচারী, আর যে নিজের দ্বীন ছেড়ে জামাআত থেকে বেরিয়ে যায়। হাদিসটি সহীহ; বুখারী তাঁর সহীহ গ্রন্থে এটি এনেছেন।"
          },
          {
            "en": "Read the three against the verse and they line up exactly. A life for a life is retaliation for murder, the ground the whole verse turns on. The other two, the married adulterer and the person who leaves the faith and the community, are matters for the court, not the street. The hadith is why except by right cannot be stretched: the Prophet named the cases, and they are closed. Outside them the prohibition returns, and the believer's blood stays, as the report puts it, unlawful to shed.",
            "bn": "তিনটিকে আয়াতের পাশে রেখে দেখুন, হুবহু মিলে যায়। প্রাণের বদলে প্রাণ মানে খুনের কিসাস, গোটা আয়াত যাকে ঘিরে। বাকি দুটি, বিবাহিত ব্যভিচারী আর দ্বীন ও জামাআত ত্যাগকারী, আদালতের বিষয়, রাস্তার নয়। এই হাদিসের কারণেই যথাযথ কারণ কথাটাকে টেনে বড় করা যায় না: নবী ﷺ অবস্থাগুলোর নাম বলে দিয়েছেন, তালিকা সেখানেই শেষ। এর বাইরে গেলেই নিষেধ আবার ফিরে আসে, আর মুমিনের রক্ত, হাদিসের ভাষায়, ঝরানো হারামই থাকে।"
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
            "bn": "এরপর আসে লাগাম: তবে সে যেন হত্যার ব্যাপারে সীমা না ছাড়ায়। তাফসীরকারেরা এই সীমালঙ্ঘনের তিনটি রূপ বলেছেন, আর তাবারী, কুরতুবী ও বাগভী তিনটিই উল্লেখ করেছেন। এক, উত্তরাধিকারী খুনি ছাড়া অন্য কাউকে হত্যা করবেন না। দুই, একজনের বদলে দুজন বা কয়েকজনকে হত্যা করবেন না। তিন, খুনির দেহ বিকৃত করবেন না। মুজাহিদ, সাঈদ ইবন জুবায়র, কাতাদা প্রমুখ থেকে এই ব্যাখ্যাগুলো এসেছে। তাফসীরকারেরা বলেন, তিনটিই আয়াতের উদ্দেশ্য, কারণ প্রতিটিই এমন বাড়াবাড়ি, যা আয়াত নিষেধ করেছে।"
          },
          {
            "en": "The excess had a concrete history. Ma'arif al-Qur'an describes the custom of the age before Islam: when a man was killed, his people would not rest with the killer's life alone. If the slain was someone of rank, they would take two lives for one, or three, or more, and some, carried away by rage, would cut off the nose and ears of the dead. Against all of this the verse sets a single measure. Retaliation is like for like, one life for the one taken, and the body is left whole.",
            "bn": "এই বাড়াবাড়ির একটা বাস্তব ইতিহাস ছিল। মাআরিফুল কুরআন ইসলাম-পূর্ব যুগের রীতি বর্ণনা করে: কেউ খুন হলে তার লোকজন কেবল খুনির প্রাণেই সন্তুষ্ট হতো না। নিহত যদি মর্যাদাবান কেউ হতো, তারা একজনের বদলে দুজন, তিনজন বা আরও প্রাণ নিত, আর কেউ কেউ রাগে অন্ধ হয়ে মৃতের নাক-কান কেটে ফেলত। এই সবকিছুর বিপরীতে আয়াত একটি মাপ বসিয়ে দেয়। কিসাস হলো সমানে সমান, একটি প্রাণের বদলে একটি প্রাণ, আর দেহ অক্ষত রেখে দেওয়া হয়।"
          },
          {
            "en": "Ma'arif draws the principle out. Injustice is answered not with injustice but with justice, even while the wrongdoer is being punished. So long as the heir keeps to lawful retaliation, the Shari'a stands behind him. But if revenge blinds him and he crosses the line, the roles reverse: the wronged party becomes a wrongdoer, and the killer, now wronged in turn, gains the law's protection. Allah's help withdraws from whoever exceeds and shields the other side instead.",
            "bn": "মাআরিফুল কুরআন নীতিটা টেনে বের করে। অন্যায়ের জবাব অন্যায় দিয়ে নয়, বিচার দিয়ে দিতে হয়, অপরাধীকে শাস্তি দেওয়ার সময়েও। উত্তরাধিকারী যতক্ষণ বৈধ কিসাসের ভেতরে থাকেন, শরীয়তের বিধান ততক্ষণ তাঁর পক্ষে দাঁড়ায়। কিন্তু প্রতিশোধে অন্ধ হয়ে তিনি সীমা পেরোলে ভূমিকা উল্টে যায়: যে মজলুম ছিল সে জালিম হয়ে যায়, আর খুনি, এবার নিজেই মজলুম, পেয়ে যায় আইনের আশ্রয়। যে সীমা ছাড়ায় আল্লাহর সাহায্য তার কাছ থেকে সরে গিয়ে অন্যজনকে আগলে রাখে।"
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
            "bn": "খেয়াল করার মতো দ্বিতীয় একটা জিনিস লুকিয়ে আছে শব্দগুলো কীভাবে তিলাওয়াত হয় তার ভেতরে। বেশির ভাগ পাঠক পড়েন ফালা ইউসরিফ, নাম-পুরুষে, ফলে সীমা না ছাড়ানোর সতর্কবাণী যায় উত্তরাধিকারীর দিকে। কিন্তু বাগভী জানান, হামযা ও কিসাঈ পড়েন ফালা তুসরিফ, সরাসরি সম্বোধনে। তাবারী ও কুরতুবী ব্যাখ্যা করেন যে এই সম্বোধন পড়ে নবী ﷺ আর তাঁর পরের সমাজ-নেতাদের উপর, অর্থাৎ বৈধ কর্তৃপক্ষের উপর। আর মুজাহিদ থেকে একটি বর্ণনায় সম্বোধন বরং আসল খুনির দিকে ফেরে, তাকে গোড়াতেই সতর্ক করা হয় যেন সে অন্যায়ভাবে রক্তপাত না করে।"
          },
          {
            "en": "At-Tabari brings the readings together. When Allah directs a command to His Prophet in a matter of religion, he says, it is a ruling upon all His servants; and when He forbids one of them, He forbids them all. So it makes little difference whether the verse restrains the heir, the ruler, or the killer from excess. Each reading forbids the same thing to everyone with a hand in the taking of life. The ban on going too far is not aimed at one party alone; it fences the whole chain of vengeance.",
            "bn": "তাবারী পাঠ দুটিকে এক জায়গায় আনেন। তিনি বলেন, আল্লাহ যখন দ্বীনের কোনো বিষয়ে তাঁর নবীকে আদেশ দেন, তা তাঁর সব বান্দার উপরই বিধান। আর তিনি যখন তাদের একজনকে নিষেধ করেন, তখন সবাইকেই নিষেধ করেন। তাই আয়াত উত্তরাধিকারী, শাসক না খুনি, কাকে বাড়াবাড়ি থেকে ঠেকায় তাতে খুব একটা তফাত হয় না। প্রতিটি পাঠই একই জিনিস নিষেধ করে তাদের সবার প্রতি, প্রাণ নেওয়ার সঙ্গে যাদের হাত জড়িত। সীমা ছাড়ানোর নিষেধ কেবল কোনো এক পক্ষের জন্য নয়, তা গোটা প্রতিশোধের শেকলটাকেই বেঁধে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Supported by the Law",
          "bn": "শরীয়ত তার পক্ষে"
        },
        "p": [
          {
            "en": "The verse ends: indeed, he has been supported. Supported who? The commentators divide again. At-Tabari holds that he is the heir, backed against the killer, and prefers this because the heir is the wronged party nearest to the words. But al-Baghawi carries a reading from Mujahid that he is the slain man himself, supported in this world by the retaliation owed on his behalf and in the next by the expiation of his sins. Ibn Kathir sums it plainly: the heir is helped against the killer by the Shari'a, and usually by divine decree as well.",
            "bn": "আয়াত শেষ হয় এই কথায়: নিশ্চয়ই তাকে সাহায্য করা হয়েছে। কাকে? এখানেও তাফসীরকারদের মত ভিন্ন। তাবারীর মতে সে উত্তরাধিকারী, খুনির বিরুদ্ধে যাকে সাহায্য করা হয়। এই মতটিকেই তিনি অগ্রাধিকার দেন, কারণ শব্দগুলোর সবচেয়ে কাছে যে মজলুম পক্ষের উল্লেখ, সে এই উত্তরাধিকারীই। কিন্তু বাগভী মুজাহিদ থেকে আরেকটি ব্যাখ্যা আনেন: সে হলো নিহত ব্যক্তি নিজেই। দুনিয়ায় তাকে সাহায্য করা হয় তার পক্ষে পাওনা কিসাস দিয়ে, আর আখিরাতে তার গুনাহ মাফ করে দিয়ে। ইবন কাসীর সোজা কথায় বলেন: শরীয়ত উত্তরাধিকারীকে খুনির বিরুদ্ধে সাহায্য করে, আর সাধারণত তাকদিরও তার পক্ষে থাকে।"
          },
          {
            "en": "Al-Qurtubi raises the obvious objection: how many an heir is failed and never reaches his right? His answer is careful. The help comes sometimes through the truth being made plain, sometimes through the right being carried out, sometimes through both; whichever it is, it is help from Allah. Supported, then, is no guarantee that vengeance always succeeds in the world. It is the assurance that the law and the truth stand with the wronged, whatever a particular case turns out to be.",
            "bn": "কুরতুবী মনে আসা আপত্তিটা নিজেই তোলেন: কত উত্তরাধিকারীই তো ব্যর্থ হন, নিজের হক আর পান না! তাঁর জবাব মেপে মেপে দেওয়া। সাহায্য কখনো আসে সত্য প্রকাশ হয়ে যাওয়ার মধ্য দিয়ে, কখনো হক আদায় হওয়ার মধ্য দিয়ে, কখনো দুটোই। যেভাবেই আসুক, তা আল্লাহরই সাহায্য। তাই ‘সাহায্যপ্রাপ্ত’ কথার মানে এই নিশ্চয়তা নয় যে দুনিয়ায় প্রতিশোধ সবসময় সফল হবে। এর মানে এই আশ্বাস যে আইন আর সত্য মজলুমের পাশে আছে, কোনো নির্দিষ্ট মামলার পরিণতি যা-ই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "Justice, Not Private Vengeance",
          "bn": "বিচার, ব্যক্তিগত প্রতিশোধ নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly. This verse describes justice that Allah ordained and that lawful authority administers: the courts that weigh a case, the ruler who guards the community, the heir who acts under the law and within its limits. It licenses nothing against any living person or community, and it is no warrant for private vengeance. The verse that hands the heir authority is the same verse that forbids him to exceed, and reverses the roles the moment he does. Justice here is measured, answerable, and never his to seize alone.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। এই আয়াত সেই বিচারের কথা বলে, যা আল্লাহ বিধান করেছেন আর বৈধ কর্তৃপক্ষ কার্যকর করে: আদালত মামলা যাচাই করে, শাসক সমাজকে আগলে রাখেন, আর উত্তরাধিকারী আইনের অধীনে, তার সীমার ভেতরে থেকে কাজ করেন। আয়াতটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না, ব্যক্তিগত প্রতিশোধেরও কোনো সনদ দেয় না। যে আয়াত উত্তরাধিকারীকে অধিকার দেয়, সেই আয়াতই তাকে সীমা ছাড়াতে নিষেধ করে, আর সীমা ছাড়ানো মাত্র ভূমিকা উল্টে দেয়। এখানে বিচার মাপা, জবাবদিহির অধীন, আর তা কখনোই কারও একার হাতে তুলে নেওয়ার জিনিস নয়।"
          },
          {
            "en": "Most of us will never stand as a slain man's heir. What the verse trains is a disposition we carry into far smaller things. It asks us to hold every life inviolable, in our speech, our driving, our anger, and not to spend what is not ours to spend. It asks us, when genuinely wronged, to want justice and not an ounce more, and never to let grief reach past the guilty toward someone easier to strike. The right to redress is real; so is the duty to keep it measured.",
            "bn": "আমাদের বেশির ভাগকেই কখনো কোনো নিহত ব্যক্তির উত্তরাধিকারী হয়ে দাঁড়াতে হবে না। কিন্তু আয়াতটি এমন এক মনোভাব গড়ে তোলে, যা আমরা অনেক ছোট ছোট ব্যাপারেও সঙ্গে রাখি। আয়াত চায়, আমরা প্রতিটি প্রাণকে অলঙ্ঘনীয় মনে করি: কথায়, গাড়ি চালানোয়, রাগের মুহূর্তে। আর যা খরচ করার অধিকার আমাদের নেই, তা যেন খরচ না করি। আয়াত চায়, সত্যিই অন্যায়ের শিকার হলে আমরা বিচার চাইব, তার চেয়ে এক রতিও বেশি নয়। আর শোক যেন কখনো দোষীকে পেরিয়ে এমন কারও দিকে হাত না বাড়ায়, যাকে আঘাত করা সহজ। প্রতিকারের অধিকার সত্যি; তা মেপে রাখার দায়ও সত্যি।"
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
          "bn": "আদেশের এক বৃত্ত"
        },
        "p": [
          {
            "en": "Wa la tamshi fi'l-ardi marahan: and do not walk upon the earth exultantly. The verse belongs to a run of commands in Surah al-Isra that opens at 17:22 with do not set up another god beside Allah, and closes at 17:39 with the same prohibition, right after calling everything between them part of the wisdom your Lord has revealed to you. Ma'arif al-Qur'an counts the commands one by one and numbers this the thirteenth. The others concern parents, kin, the poor and the traveller, children, chastity, life, the orphan's property, promises and honest measure.",
            "bn": "ওয়া লা তামশি ফিল আরদি মারাহান: আর যমীনে দম্ভভরে চলো না। সূরা আল-ইসরায় একটানা কয়েকটি আদেশ আছে। শুরু ১৭:২২ আয়াতে, 'আল্লাহর সঙ্গে আর কোনো ইলাহ স্থির করো না' দিয়ে। শেষ ১৭:৩৯ আয়াতে, ঠিক সেই নিষেধ দিয়েই, আর তার ঠিক আগে মাঝের সবকিছুকে বলা হয়েছে তোমার রবের ওয়াহী করা হিকমাতের অংশ। এ আয়াত সেই ধারারই একটি। মাআরিফুল কুরআন আদেশগুলো এক এক করে গুনে এটিকে বলে তেরো নম্বর আদেশ। বাকিগুলোর বিষয় বাবা-মা, আত্মীয়, অভাবী ও মুসাফির, সন্তান, সতীত্ব, প্রাণ, ইয়াতীমের সম্পদ, অঙ্গীকার আর সঠিক মাপ।"
          },
          {
            "en": "Just before it, 17:36 forbids following what you have no knowledge of. Just after it, 17:38 gives the verdict on the whole list: all of that, its evil is hateful in the sight of your Lord. So the way a person carries himself across the ground is weighed in the same series as killing and false measure. The neighbouring commands on parents (17:23 and 17:24) and on the relative's right (17:26) have their own articles; this one stays with the walk, and with what the commentators found inside one word.",
            "bn": "ঠিক আগে ১৭:৩৬ আয়াত নিষেধ করে, যে বিষয়ে জ্ঞান নেই তার পেছনে ছোটা। ঠিক পরে ১৭:৩৮ আয়াত পুরো তালিকার উপর রায় দেয়: এসবের মধ্যে যা মন্দ, তোমার রবের কাছে তা ঘৃণিত। অর্থাৎ মাটির উপর দিয়ে মানুষ কীভাবে হাঁটে, সেটাও মাপা হচ্ছে একই সারিতে, যেখানে আছে হত্যা আর মাপে কম দেওয়া। বাবা-মা বিষয়ক আদেশ (১৭:২৩ ও ১৭:২৪) আর আত্মীয়ের হক বিষয়ক আদেশ (১৭:২৬) নিয়ে আলাদা লেখা আছে। এ লেখা থাকবে হাঁটার কথায়, আর একটি শব্দের ভেতরে তাফসীরকারেরা যা পেয়েছেন তার কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pride Worn in the Stride",
          "bn": "হাঁটার ভঙ্গিতে অহংকার"
        },
        "p": [
          {
            "en": "What is marah? At-Tabari glosses the whole command as do not walk upon the earth mukhtalan mustakbiran, vain and proud. He brings two reports from Qatada: by your pride and your marah, and, in the second, do not walk upon the earth in boasting and pride, for that will not bring you to the mountains nor pierce the earth. From Ibn Jurayj he has the shortest gloss of all: do not boast. The Muyassar keeps at-Tabari's pair of words, vain and proud.",
            "bn": "মারাহ মানে কী? তাবারী পুরো আদেশটির ব্যাখ্যা দেন এভাবে: যমীনে মুখতাল মুসতাকবির হয়ে, অর্থাৎ দেমাক আর অহংকার নিয়ে হেঁটো না। কাতাদা থেকে তিনি দুটি বর্ণনা আনেন। একটিতে আছে: তোমার অহংকার আর তোমার মারাহ দিয়ে। অন্যটিতে: গর্ব আর অহংকার নিয়ে যমীনে হেঁটো না, কারণ তা তোমাকে পাহাড়ের উচ্চতায় পৌঁছাবে না, যমীনও ফুঁড়তে দেবে না। ইবন জুরাইজ থেকে তিনি আনেন সবচেয়ে ছোট ব্যাখ্যাটি: গর্ব করো না। মুয়াসসার তাবারীর সেই শব্দজোড়াই রাখে: দেমাকি আর অহংকারী।"
          },
          {
            "en": "Ibn Kathir makes the bearing visible. Allah, he says, forbids His servants tajabbur and tabakhtur in their walk; marahan means mutabakhtiran mutamayilan, strutting and swaying, the walk of the overbearing. Al-Baghawi lists three nouns, batar, kibr and khuyala: insolence, pride and vanity. As-Sa'di gives his own three, kibr, tih and batar, then names the two directions this pride faces: proud against the truth, and holding himself great over the creation. The glosses differ in emphasis, not in substance: boasting, the visible strut, the stance behind it.",
            "bn": "ইবন কাসীর ভঙ্গিটা চোখের সামনে এনে দেন। তাঁর কথায়, আল্লাহ বান্দাদের নিষেধ করছেন চলনে তাজাব্বুর আর তাবাখতুর থেকে, অর্থাৎ জবরদস্তি আর ঠমক থেকে। মারাহান মানে মুতাবাখতিরান মুতামায়িলান: ঠমক দেখিয়ে, দুলে দুলে, জালিম দাম্ভিকদের মতো হাঁটা। বাগাভী তিনটি শব্দ গোনান: বাতার, কিবর আর খুয়ালা, মানে ঔদ্ধত্য, অহংকার আর দেমাক। সা'দী দেন নিজের তিনটি: কিবর, তীহ আর বাতার। তারপর বলেন এ অহংকারের দুই দিক: সত্যের বিরুদ্ধে অহংকার, আর সৃষ্টির উপর নিজেকে বড় ভাবা। ব্যাখ্যাগুলোর জোর ভিন্ন জায়গায়, সারকথা এক: কেউ দেখেন গর্ব, কেউ চোখে পড়া ঠমক, কেউ তার পেছনের মনোভাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Joy That Is Not Blamed",
          "bn": "যে আনন্দ নিন্দনীয় নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens by calling the verse a prohibition of vanity and a command to humility, then lists what marah has been said to mean: intense joy; pride in walking; a person going beyond his measure; Qatada's vanity in walking; insolence and arrogance; and liveliness. These sayings are close, he says, but they fall into two kinds. Pride, insolence, vanity and overstepping one's measure are blamed. Joy and liveliness are praised, and Allah has described Himself with one of them.",
            "bn": "কুরতুবী শুরুতেই বলেন, আয়াতটি দেমাকের নিষেধ আর বিনয়ের আদেশ। তারপর মারাহ-এর যত অর্থ বলা হয়েছে, তা গুনে দেখান: প্রচণ্ড আনন্দ; চলনে অহংকার; নিজের সীমা ছাড়িয়ে যাওয়া; কাতাদার মতে চলনে দেমাক; ঔদ্ধত্য আর বড়াই; আর উদ্যম। তাঁর মতে কথাগুলো কাছাকাছি, তবে দুই ভাগে পড়ে। অহংকার, ঔদ্ধত্য, দেমাক আর নিজের সীমা ছাড়ানো নিন্দনীয়। আনন্দ আর উদ্যম প্রশংসনীয়, আর এর একটি দিয়ে আল্লাহ নিজেকেই বর্ণনা করেছেন।"
          },
          {
            "en": "For that he points to the sound hadith of Allah's joy at repentance, which al-Bukhari relates from Anas (6309): Allah is more pleased with the repentance of His servant than one of you who comes upon his camel after losing it in a desert land. Laziness, al-Qurtubi adds, is blamed in the Sharia, and liveliness is its opposite. Even pride can be praised, he says, when it is shown against the enemies of Allah and against oppressors, and he cites a narration from Jabir ibn 'Atik.",
            "bn": "এর প্রমাণ হিসেবে তিনি সহীহ হাদীসটির দিকে ইঙ্গিত করেন, যেখানে বান্দার তওবায় আল্লাহর আনন্দের কথা আছে। বুখারী আনাস (রাঃ) থেকে এটি বর্ণনা করেছেন (৬৩০৯): মরুভূমিতে উট হারিয়ে আবার তা খুঁজে পেলে তোমাদের কেউ যতটা খুশি হয়, বান্দার তওবায় আল্লাহ তার চেয়েও বেশি খুশি হন। কুরতুবী আরও বলেন, শরীয়তে অলসতা নিন্দনীয়, আর উদ্যম তার বিপরীত। এমনকি অহংকারও প্রশংসনীয় হতে পারে, যখন তা আল্লাহর দুশমন আর জালিমদের সামনে দেখানো হয়। এ নিয়ে তিনি জাবির ইবন আতীক (রাঃ)-এর একটি বর্ণনা আনেন।"
          },
          {
            "en": "In Abu Dawud's wording (2659): There is jealousy which Allah loves and jealousy which Allah hates; what He loves is jealousy where there is cause for suspicion, and what He hates is jealousy where there is none. There is pride which Allah hates and pride which Allah loves; what He loves is a man's pride in himself in battle and in giving charity, and what He hates is his pride in wrongdoing. The page consulted shows no grading. The verse, on this account, does not condemn gladness, only gladness turned into self-exaltation.",
            "bn": "আবু দাউদের ভাষায় (২৬৫৯): এক ধরনের গাইরত, অর্থাৎ মর্যাদাবোধ থেকে জাগা ঈর্ষা, আল্লাহ ভালোবাসেন, আরেক ধরনের গাইরত অপছন্দ করেন। তিনি ভালোবাসেন সন্দেহের সঙ্গত কারণ থাকলে যে গাইরত জাগে তা, আর অপছন্দ করেন কারণ ছাড়া গাইরত। এক ধরনের দেমাক আল্লাহ অপছন্দ করেন, আরেক ধরনের দেমাক ভালোবাসেন। তিনি ভালোবাসেন যুদ্ধের সময় আর সদকা দেওয়ার সময় মানুষের দেমাক, আর অপছন্দ করেন জুলুমের বেলায় তার দেমাক। যে পাতা দেখা হয়েছে, তাতে এর কোনো মান উল্লেখ নেই। এ ব্যাখ্যায় আয়াতটি আনন্দকে দোষ দেয় না, দোষ দেয় সেই আনন্দকে যা নিজেকে বড় করে তোলায় গড়িয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Marahan, Not Marihan",
          "bn": "মারিহান নয়, মারাহান"
        },
        "p": [
          {
            "en": "A small grammatical choice carries meaning here. The word is marahan, a verbal noun, not marihan, an adjective for the walker. At-Tabari explains why: the sentence does not mean do not be exultant, which would make the word a description of the one walking. It means do not exult upon the earth with exultation, so the word explains what is meant by do not walk. He compares a line of rajaz in which a man likes certain foods hubban, with love, because liking already carries the sense of loving.",
            "bn": "এখানে ব্যাকরণের ছোট্ট একটা বাছাই অর্থ বহন করে। শব্দটি মারাহান, ক্রিয়ার মূল বিশেষ্য। মারিহান নয়, যা হলে শব্দটি হতো পথচারীর বিশেষণ। তাবারী কারণ বুঝিয়ে বলেন। বাক্যের অর্থ এই নয় যে 'দম্ভী হয়ো না', তাহলে শব্দটি হাঁটা মানুষটির গুণ বর্ণনা করত। অর্থ হলো: যমীনে দম্ভ করে বেড়িয়ো না। ফলে শব্দটি খুলে বলছে 'হেঁটো না' দিয়ে কী বোঝানো হয়েছে। তুলনায় তিনি রাজায ছন্দের একটি চরণ আনেন, যেখানে কারও কাছে কিছু খাবার ভালো লাগে 'হুব্বান', ভালোবাসায়। কারণ ভালো লাগার মধ্যেই ভালোবাসার অর্থ আছে।"
          },
          {
            "en": "Al-Baghawi says the same in one clause: marah is the explanation of the walking, which is why it comes as a verbal noun. Al-Qurtubi adds the reading. The majority read marahan, with a fatha; a group, as Ya'qub reported, read marihan, with a kasra, on the pattern of the active participle. He prefers the first as more forceful, since saying Zayd came at a run says more than saying Zayd came running. The verbal noun makes the walk itself the exultation.",
            "bn": "বাগাভীও এক বাক্যে একই কথা বলেন: মারাহ হলো হাঁটারই ব্যাখ্যা, এজন্যই শব্দটি এসেছে ক্রিয়ার মূল বিশেষ্য রূপে। কুরতুবী যোগ করেন কিরাআতের কথা। অধিকাংশ কারী পড়েছেন রা-তে যবর দিয়ে, মারাহান। ইয়াকূবের বর্ণনামতে একদল পড়েছেন যের দিয়ে, মারিহান, কর্তৃবাচক বিশেষ্যের ছাঁচে। কুরতুবী প্রথমটিকে বেশি জোরালো মনে করেন। কারণ আরবিতে মূল বিশেষ্য দিয়ে 'জাআ যায়দুন রাকদান' বলা কর্তৃবাচক রূপে 'রাকিদান' বলার চেয়ে বেশি জোরালো, মারাহান শব্দেও তাই। মূল বিশেষ্যে হাঁটাটাই হয়ে যায় দম্ভ।"
          }
        ]
      },
      {
        "h": {
          "en": "Cutting Across or Boring Down",
          "bn": "পাড়ি দেওয়া, না ফুঁড়ে ফেলা"
        },
        "p": [
          {
            "en": "Then the first impossibility: innaka lan takhriqa al-ard. At-Tabari reads the verb as cutting across: you will never traverse the earth by your vanity. He cites the rajaz poet Ru'ba, whose line speaks of a dark, empty mukhtaraq, meaning a passage cut through. Ibn Kathir repeats this, naming Ibn Jarir and the same verse. Al-Baghawi has it the same way and adds a measure: you will never cut across it by your pride until you reach its end.",
            "bn": "এরপর প্রথম অসম্ভব কাজটি: ইন্নাকা লান তাখরিকাল আরদ। তাবারী ক্রিয়াটির অর্থ করেন পাড়ি দেওয়া: দেমাক দেখিয়ে তুমি কখনো যমীন পাড়ি দিতে পারবে না। সাক্ষী হিসেবে তিনি আনেন রাজায কবি রু'বার চরণ, যেখানে এক অন্ধকার, শূন্য মুখতারাকের কথা আছে, মানে চিরে যাওয়া পথ। ইবন কাসীর এ কথাই বলেন, ইবন জারীরের নাম নিয়ে আর ওই চরণ উদ্ধৃত করে। বাগাভীও একইভাবে বলেন, সঙ্গে একটা মাপ জুড়ে দেন: অহংকার দিয়ে তুমি যমীন পাড়ি দিয়ে তার শেষ মাথায় পৌঁছাতে পারবে না।"
          },
          {
            "en": "Al-Qurtubi sets out both senses and chooses between them. Kharaqa a garment means tore it, kharaqa the earth means crossed it, and al-khirq is a wide stretch of land. Yet he concludes that the tearing meant here is boring into the earth, not crossing a distance, and glosses it as entering its depths to know what lies inside. He then reports al-Azhari, who said it means you will never cross it, and an-Nahhas, who called that clearer, deriving it from al-khirq, the wide desert. The difference stands.",
            "bn": "কুরতুবী দুটি অর্থই সামনে রাখেন, তারপর একটি বেছে নেন। খারাকাস সাওব মানে কাপড় ছিঁড়ল, খারাকাল আরদ মানে যমীন পাড়ি দিল, আর আল-খিরক মানে বিস্তীর্ণ ভূমি। তবু তাঁর সিদ্ধান্ত, এখানে ছেঁড়া মানে যমীন ফুঁড়ে ভেতরে ঢোকা, দূরত্ব পাড়ি দেওয়া নয়। তিনি ব্যাখ্যা করেন: তুমি এর গভীরে ঢুকে ভেতরে কী আছে জানতে পারবে না। তারপর তিনি আযহারীর মত আনেন, যাঁর মতে অর্থ হলো তুমি তা পাড়ি দিতে পারবে না। আর আনেন নাহহাসের কথা, যিনি এটিকেই বেশি স্পষ্ট বলেছেন, আল-খিরক অর্থাৎ বিস্তীর্ণ মরুভূমি থেকে নিয়ে। মতভেদটা মতভেদ হিসেবেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "On Heels, Then on Toes",
          "bn": "কখনো গোড়ালিতে, কখনো আঙুলে"
        },
        "p": [
          {
            "en": "Why name these two impossibilities? At-Tabari answers that the verse is a prohibition from Allah against pride, boasting and vanity, sent ahead to His servants to make them know that by their pride they gain nothing that others fall short of. Al-Baghawi puts it as an image: the proud man gains nothing by his pride and insolence, like someone who wants to pierce the earth and rival the mountains in height, and comes away with nothing.",
            "bn": "এই দুটি অসম্ভব কাজের কথাই কেন? তাবারীর উত্তর: আয়াতটি অহংকার, গর্ব আর দেমাকের বিরুদ্ধে আল্লাহর নিষেধ। বান্দাদের তিনি আগেভাগে জানিয়ে দিচ্ছেন, অহংকার দিয়ে তারা এমন কিছু পাবে না যা অন্যরা পায় না। বাগাভী কথাটা বলেন একটা ছবি দিয়ে। অহংকার আর ঔদ্ধত্য দিয়ে মানুষ কিছুই পায় না, ঠিক যেমন কেউ যমীন ফুঁড়ে ফেলতে আর উচ্চতায় পাহাড়ের সঙ্গে পাল্লা দিতে চাইলে খালি হাতে ফেরে।"
          },
          {
            "en": "Al-Baghawi then reports a second reading, introduced with it is said. A man who walks in vanity walks at one moment on his heels and at another on the fronts of his feet. So he is told: you will not bore through the earth if you walk on your heels, and you will not reach the mountains in height if you walk on your toes. On this reading the two clauses answer the two halves of the strut itself, the pressing down and the stretching up.",
            "bn": "এরপর বাগাভী 'বলা হয়' কথাটি দিয়ে আরেকটি ব্যাখ্যা আনেন। দেমাক নিয়ে যে হাঁটে, সে কখনো হাঁটে গোড়ালিতে ভর দিয়ে, কখনো পায়ের সামনের দিকে ভর দিয়ে। তাই তাকে বলা হলো: গোড়ালিতে ভর দিয়ে হাঁটলেও তুমি যমীন ফুঁড়তে পারবে না, আর আঙুলে ভর দিয়ে উঁচু হলেও পাহাড়ের উচ্চতায় পৌঁছাবে না। এ ব্যাখ্যায় দুটি বাক্য ঠমকের দুই ভঙ্গির জবাব: একটি নিচে চাপ দেওয়া, অন্যটি উপরে টান দেওয়া।"
          },
          {
            "en": "Al-Qurtubi draws the lesson as a description of the human condition: you are a lowly servant, hemmed in from beneath you and above you, and whoever is hemmed in is confined and weak, so pride does not befit you. As-Sa'di gives the outcome: the proud man does not reach any part of what he wanted, and ends contemptible before Allah and despised by people, having put on the worst of character.",
            "bn": "কুরতুবী শিক্ষাটা টানেন মানুষের অবস্থার বর্ণনা দিয়ে। তুমি এক অসহায় বান্দা, নিচ থেকেও ঘেরা, উপর থেকেও ঘেরা। আর যে ঘেরাও হয়ে আছে, সে আটকা পড়া, দুর্বল। কাজেই অহংকার তোমাকে মানায় না। সা'দী বলেন পরিণামের কথা। অহংকারী যা চায় তার কিছুই পায় না। উল্টো আল্লাহর কাছে সে হয় তুচ্ছ, মানুষের কাছে ঘৃণিত, আর গায়ে চাপায় সবচেয়ে নিকৃষ্ট চরিত্রের পোশাক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man the Earth Swallowed",
          "bn": "যাকে মাটি গিলে নিল"
        },
        "p": [
          {
            "en": "Ibn Kathir adds that whoever walks this way may be repaid with the opposite of what he intended, and cites, as established in the Sahih, the man who strutted and was swallowed. Muslim relates it from Abu Hurayrah (2088) in several wordings; one reads: While a man was strutting, walking in his two cloaks, pleased with himself, Allah caused the earth to swallow him, and he goes on sinking down in it until the Day of Resurrection. Al-Bukhari also relates it from Abu Hurayrah (5789), in other words.",
            "bn": "ইবন কাসীর যোগ করেন, এভাবে যে হাঁটে, তাকে অনেক সময় তার উদ্দেশ্যের ঠিক উল্টো প্রতিফল দেওয়া হয়। তারপর 'সহীহতে প্রমাণিত' বলে তিনি আনেন সেই লোকের কথা, যে ঠমক দেখিয়ে হাঁটছিল আর মাটি তাকে গিলে নিল। মুসলিম আবু হুরায়রা (রাঃ) থেকে এটি কয়েকটি শব্দে বর্ণনা করেছেন (২০৮৮)। তার একটি: এক লোক নিজের দুটি চাদর পরে ঠমক দেখিয়ে হাঁটছিল, নিজেকে নিয়ে মুগ্ধ। তখন আল্লাহ তাকে মাটিতে ধসিয়ে দিলেন, আর কিয়ামতের দিন পর্যন্ত সে তার ভেতরে তলিয়ে যেতেই থাকবে। বুখারীও আবু হুরায়রা (রাঃ) থেকে ভিন্ন শব্দে এটি বর্ণনা করেছেন (৫৭৮৯)।"
          },
          {
            "en": "Beside the verse the irony is plain: he was told he would never pierce the earth, and the earth opened under him. Ibn Kathir sets Qarun beside him, who went out before his people in his finery (28:79), and of whom Allah says: so We caused the earth to swallow him and his home (28:81). Both reports describe what happened to particular men. They give no one the right to call a living person's misfortune a punishment for his walk, or to read another's gait as proof of his heart.",
            "bn": "আয়াতের পাশে রাখলে পরিহাসটা স্পষ্ট। তাকে বলা হয়েছিল, তুমি কখনো যমীন ফুঁড়তে পারবে না। শেষে যমীন নিজেই তার নিচে ফাঁক হয়ে গেল। ইবন কাসীর তার পাশে রাখেন কারূনকে, যে জাঁকজমক নিয়ে নিজের কওমের সামনে বেরিয়েছিল (২৮:৭৯), আর যার সম্পর্কে আল্লাহ বলেন: অতঃপর আমি তাকে ও তার প্রাসাদকে যমীনে ধসিয়ে দিলাম (২৮:৮১)। দুটি বর্ণনাই নির্দিষ্ট কিছু মানুষের পরিণতির কথা। জীবিত কারও বিপদকে তার হাঁটার শাস্তি বলার অধিকার এগুলো কাউকে দেয় না। অন্যের চলন দেখে তার অন্তরের রায় দেওয়ার অধিকারও দেয় না।"
          },
          {
            "en": "Ibn Kathir also passes on, from Ibn Abi al-Dunya's book on obscurity and humility, a scene in the company of al-Hasan. Ibn al-Ahtam passed by on his way to al-Mansur, in layered silk, strutting, and al-Hasan spoke sharply of a man admiring his own sides amid blessings for which he gives no thanks. Ibn al-Ahtam heard it and came back to apologise. Al-Hasan said: do not apologise to me; repent to your Lord. Have you not heard the words of Allah, and do not walk upon the earth exultantly?",
            "bn": "ইবন কাসীর ইবন আবিদ দুনিয়ার অখ্যাতি ও বিনয় বিষয়ক গ্রন্থ থেকে হাসানের মজলিসের একটি দৃশ্যও তুলে দেন। ইবনুল আহতাম মানসূরের কাছে যাচ্ছিলেন। গায়ে পরতে পরতে রেশমি জোব্বা, চলনে ঠমক। হাসান তাঁর দিকে তাকিয়ে কড়া কথা বললেন: লোকটা নিজের পাশ ফিরে ফিরে দেখছে, অথচ যে নিয়ামতের মধ্যে আছে তার শোকর নেই। ইবনুল আহতাম শুনতে পেয়ে ফিরে এসে মাফ চাইলেন। হাসান বললেন: আমার কাছে মাফ চেয়ো না, তোমার রবের কাছে তওবা করো। তুমি কি আল্লাহর এই বাণী শোনোনি, আর যমীনে দম্ভভরে চলো না?"
          }
        ]
      },
      {
        "h": {
          "en": "Brisk but Not Proud",
          "bn": "দ্রুত পায়ে, নত মনে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an moves from the gait to its source. Arrogance, it says, is a major sin that can wound the heart mortally; it is taking yourself to be superior and rating others below you, and even its outward signs are to be guarded against. Among the hadith it cites is Ibn Mas'ud's, which Muslim records (91): Whoever has an atom's weight of pride in his heart will not enter Paradise. A man said: A man likes his garment to be fine and his sandals fine. He said: Allah is beautiful and loves beauty. Pride is rejecting the truth and looking down on people.",
            "bn": "মাআরিফুল কুরআন চলন থেকে তার উৎসের দিকে যায়। তার কথায়, অহংকার কবীরা গুনাহ, যা অন্তরে মরণঘাতী ক্ষত করতে পারে। অহংকার মানে নিজেকে অন্যদের চেয়ে বড় আর অন্যদের নিজের চেয়ে ছোট ভাবা, আর এর বাইরের আলামত থেকেও বেঁচে থাকতে হবে। যে হাদীসগুলো সেখানে আনা হয়েছে, তার একটি ইবন মাসউদ (রাঃ)-এর বর্ণনা, যা মুসলিম রেখেছেন (৯১): যার অন্তরে অণু পরিমাণ অহংকার আছে, সে জান্নাতে প্রবেশ করবে না। এক ব্যক্তি বলল: মানুষ তো চায় তার পোশাক সুন্দর হোক, জুতা সুন্দর হোক। তিনি বললেন: আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। অহংকার হলো সত্যকে প্রত্যাখ্যান করা আর মানুষকে তুচ্ছ জ্ঞান করা।"
          },
          {
            "en": "Its two halves echo as-Sa'di's two phrases. It also removes a misreading: liking a fine garment is not the sin. Nor is a humble walk a slow one. Al-Baghawi closes his comment with how the Prophet ﷺ walked. At-Tirmidhi relates from 'Ali (3637): The Messenger of Allah ﷺ was neither tall nor short; his palms and feet were thick, his head large, his joints large, the line of hair down his chest long; when he walked, he leaned forward as if coming down a slope; I never saw anyone like him before him or after him. At-Tirmidhi grades it hasan sahih.",
            "bn": "সংজ্ঞার দুই অংশ সা'দীর সেই দুই কথার প্রতিধ্বনি। হাদীসটি একটা ভুল ধারণাও দূর করে: সুন্দর পোশাক পছন্দ করা গুনাহ নয়। আবার বিনয়ের চলন মানে ঢিমেতালে হাঁটাও নয়। বাগাভী এ আয়াতের আলোচনা শেষ করেন নবী ﷺ কীভাবে হাঁটতেন সে কথা দিয়ে। তিরমিযী আলী (রাঃ) থেকে বর্ণনা করেছেন (৩৬৩৭): রাসূলুল্লাহ ﷺ বেশি লম্বাও ছিলেন না, বেঁটেও ছিলেন না। তাঁর হাত-পা ছিল পুরু, মাথা বড়, হাড়ের জোড় মোটা, বুক থেকে নাভি পর্যন্ত লোমের রেখা লম্বা। হাঁটার সময় সামনের দিকে ঝুঁকে চলতেন, যেন ঢাল বেয়ে নামছেন। তাঁর আগে বা পরে তাঁর মতো কাউকে আমি দেখিনি। তিরমিযী একে হাসান সহীহ বলেছেন।"
          },
          {
            "en": "That is the figure the verse leaves standing: someone walking with purpose, leaning into his path, his eyes on where he is going rather than on who is watching. The earth under him is not his to pierce and the mountains around him are not his to match, and he has no need for either. Al-Qurtubi quotes a couplet that says it in a line: do not walk upon the earth except in humility, for how many beneath it are higher than you.",
            "bn": "আয়াতটি শেষে যে ছবি রেখে যায়, তা এমন একজনের, যে উদ্দেশ্য নিয়ে হাঁটে, পথের দিকে ঝুঁকে, চোখ তার গন্তব্যে, কে দেখছে সেদিকে নয়। পায়ের নিচের যমীন ফুঁড়ে ফেলা তার কাজ নয়, চারপাশের পাহাড়ের সমান হওয়াও নয়, আর এর কোনোটার দরকারও তার নেই। কুরতুবী একটি কবিতা উদ্ধৃত করেন, যা কথাটা এক চরণে বলে দেয়: বিনয় ছাড়া যমীনের উপর দিয়ে হেঁটো না, কারণ এর নিচে কত মানুষ শুয়ে আছে, যারা তোমার চেয়ে উঁচু।"
          }
        ]
      }
    ]
  },
  "17:44": {
    "sections": [
      {
        "h": {
          "en": "Where the Throne Argument Lands",
          "bn": "আরশের যুক্তি যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "This verse completes the two before it. In 17:42 the Prophet ﷺ is told to say that if there were gods beside Allah, as the idolaters claim, those gods would have sought a way to the Owner of the Throne. Then 17:43 sets Him apart: glory be to Him, high above what they say, by a great height. Our verse takes that declaration of glory out of a single mouth and gives it to everything: the seven heavens and the earth, and whoever is in them, glorify Him.",
            "bn": "আগের দুটি আয়াতের কথাকে এ আয়াত পূর্ণ করে। ১৭:৪২ আয়াতে নবী ﷺ-কে বলতে বলা হয়েছে: মুশরিকরা যেমন দাবি করে, তেমন যদি আল্লাহর সঙ্গে আরও ইলাহ থাকত, তবে তারা আরশের মালিকের কাছে পৌঁছানোর পথ খুঁজত। তারপর ১৭:৪৩ আয়াত তাঁকে সবকিছু থেকে আলাদা করে ঘোষণা দেয়: তিনি পবিত্র, তারা যা বলে তা থেকে তিনি অনেক অনেক ঊর্ধ্বে। এ আয়াত সেই পবিত্রতার ঘোষণাকে একজনের মুখ থেকে তুলে সবার মুখে দিয়ে দেয়। সাতটি আসমান, যমীন আর এগুলোর ভেতরে যারা আছে, সবাই তাঁর তাসবীহ পাঠ করে।"
          },
          {
            "en": "At-Tabari reads it as spoken to the idolaters themselves: the heavens and the earth, and the believers in them, declare Allah free of what you have ascribed to Him, while you, for all His favours to you, invent lies against Him. Ibn Kathir's gloss runs close: they exalt Him above what these idolaters say, and bear witness to His oneness in His lordship and His divinity, for in everything there is a sign of Him pointing to His oneness. He sets beside it 19:90 to 19:92, where the heavens almost burst at the claim that ar-Rahman has taken a son.",
            "bn": "তাবারী আয়াতটিকে পড়েন সরাসরি মুশরিকদের উদ্দেশে বলা কথা হিসেবে। আসমান-যমীন আর এগুলোর ভেতরের মুমিনরা আল্লাহকে পবিত্র ঘোষণা করে সেসব থেকে, যা তোমরা তাঁর প্রতি আরোপ করেছ। অথচ তাঁর এত নিয়ামত পেয়েও তোমরা তাঁর নামে মিথ্যা রটাও। ইবন কাসীরের ব্যাখ্যাও কাছাকাছি। এই মুশরিকরা যা বলে, তা থেকে তারা তাঁকে পবিত্র ও মহান ঘোষণা করে, আর সাক্ষ্য দেয় যে রুবুবিয়্যাতে ও উলুহিয়্যাতে তিনি এক। কারণ প্রতিটি জিনিসে তাঁর এমন নিদর্শন আছে, যা তাঁর একত্বের দিকে ইশারা করে। এর পাশে তিনি রাখেন ১৯:৯০ থেকে ১৯:৯২ আয়াত, যেখানে রহমানের সন্তান আছে এই দাবিতে আসমান প্রায় ফেটে পড়ার উপক্রম হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavens Spoken of as Persons",
          "bn": "আসমান যেন বোধসম্পন্ন"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on a point of grammar. Glorifying is the act of a being that reasons, and since the verse assigns that act to the heavens and the earth, it refers back to them with the pronoun used for reasoning beings. Then comes wa man fihinna, and whoever is in them. Al-Qurtubi takes it to mean the angels, humans and jinn, and notes that the verse widens to all things only in its next clause. At-Tabari names the same three kinds but narrows them to the believers among them.",
            "bn": "কুরতুবী এখানে ব্যাকরণের একটি ছোট বিষয়ে থামেন। তাসবীহ এমন সত্তার কাজ, যার বোধবুদ্ধি আছে। আয়াত যেহেতু কাজটি আসমান ও যমীনের উপর আরোপ করেছে, তাই তাদের দিকে ফিরেছে সেই সর্বনাম দিয়ে, যা বোধসম্পন্নদের বেলায় ব্যবহৃত হয়। এরপর আসে ওয়া মান ফীহিন্না, আর এগুলোর ভেতরে যারা আছে। কুরতুবীর মতে এর অর্থ ফেরেশতা, মানুষ ও জিন। তিনি লক্ষ করেন, সবকিছুকে শামিল করার কথাটা আয়াত বলে পরের বাক্যাংশে গিয়ে। তাবারীও এই তিনটি শ্রেণির নাম নেন, তবে সীমিত রাখেন তাদের মধ্যকার মুমিনদের মধ্যে।"
          },
          {
            "en": "Others read the phrase more widely: Ibn Kathir glosses it as the created beings in them, and the Muyassar as all the creatures in them. Al-Baghawi records a difference over the verb's first letter. Abu 'Amr, Hamza, al-Kisa'i, Hafs and Ya'qub read tusabbihu, with ta, and the others yusabbihu, with ya, which he explains by the words standing between the verb and its feminine subject. Either way the subject and the claim are the same.",
            "bn": "অন্যরা শব্দটিকে আরও প্রশস্ত অর্থে নেন। ইবন কাসীরের ব্যাখ্যায় এর অর্থ এগুলোর ভেতরের সৃষ্টিজগৎ, আর মুয়াসসারের ভাষায় এগুলোর ভেতরের সব সৃষ্টি। ক্রিয়াটির প্রথম অক্ষর নিয়ে কিরাআতের একটি পার্থক্যও বাগাভী উল্লেখ করেন। আবু আমর, হামযা, কিসাঈ, হাফস ও ইয়াকূব পড়েছেন তুসাব্বিহু, তা দিয়ে। অন্যরা পড়েছেন ইউসাব্বিহু, ইয়া দিয়ে। দ্বিতীয় পাঠের কারণ হিসেবে তিনি বলেন, ক্রিয়া আর তার স্ত্রীলিঙ্গ কর্তার মাঝে অন্য শব্দ এসে পড়েছে। যেভাবেই পড়া হোক, কর্তা একই, দাবিও একই।"
          }
        ]
      },
      {
        "h": {
          "en": "Not One Thing Left Out",
          "bn": "একটি জিনিসও বাদ নেই"
        },
        "p": [
          {
            "en": "Wa in min shay'in illa yusabbihu bi-hamdihi: and there is not a thing but glorifies with His praise. At-Tabari: there is nothing of His creation that does not glorify with His praise. The Muyassar spells out the pairing in bi-hamdihi: everything in existence declares Allah free of fault, a declaration joined to praise of Him. As-Sa'di lists what the clause takes in: animals that speak and animals that do not, trees and plants, the inanimate, the living and the dead. Al-Baghawi reports Mujahid: all things glorify Allah, living, dead or inanimate, and their glorification is subhan Allah wa bi-hamdihi.",
            "bn": "ওয়া ইন মিন শাইইন ইল্লা ইউসাব্বিহু বিহামদিহী: আর এমন কোনো জিনিস নেই, যা তাঁর প্রশংসাসহ তাসবীহ পড়ে না। তাবারীর ভাষায়, তাঁর সৃষ্টির এমন কিছুই নেই যা তাঁর হামদসহ তাসবীহ পড়ে না। বিহামদিহীর জোড়টা মুয়াসসার খুলে বলে: অস্তিত্বের সবকিছু আল্লাহকে ত্রুটিমুক্ত ঘোষণা করে, আর সেই ঘোষণার সঙ্গে থাকে তাঁর প্রশংসা। বাক্যাংশটি কী কী শামিল করে, সা'দী তার তালিকা দেন: কথা বলা প্রাণী ও কথা না বলা প্রাণী, গাছপালা ও উদ্ভিদ, জড়বস্তু, জীবিত ও মৃত। বাগাভী মুজাহিদের মত উল্লেখ করেন। জীবিত, মৃত বা জড়, সব জিনিসই আল্লাহর তাসবীহ পড়ে, আর তাদের তাসবীহ হলো সুবহানাল্লাহি ওয়া বিহামদিহী।"
          },
          {
            "en": "The early reports turn this into manners. At-Tabari brings from 'Ikrimah: let none of you find fault with his riding animal or his garment, for everything glorifies with His praise. Al-Qurtubi relays, from Ibn al-Mubarak, a saying of 'Abdullah ibn Mas'ud (RA): one mountain asks another whether anyone remembering Allah passed over it that day, and is glad if the answer is yes. Ibn Mas'ud then recited 19:88 and what follows, and asked: do you suppose they hear falsehood and do not hear good?",
            "bn": "পূর্ববর্তীদের বর্ণনায় এ কথা আচরণের শিক্ষা হয়ে ওঠে। তাবারী ইকরিমা থেকে আনেন: তোমাদের কেউ যেন নিজের বাহন পশু বা কাপড়ের দোষ না ধরে, কারণ প্রতিটি জিনিস তাঁর প্রশংসাসহ তাসবীহ পড়ে। কুরতুবী ইবনুল মুবারকের সূত্রে আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর একটি কথা আনেন। এক পাহাড় আরেক পাহাড়কে জিজ্ঞেস করে, আজ তোমার উপর দিয়ে আল্লাহর জিকিরকারী কেউ গেছে কি? উত্তর হ্যাঁ হলে সে খুশি হয়। এরপর ইবন মাসউদ (রাঃ) ১৯:৮৮ ও তার পরের আয়াতগুলো তিলাওয়াত করে বলেন: তোমরা কি মনে কর, এরা মিথ্যা কথা শোনে অথচ ভালো কথা শোনে না?"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken Praise or Silent Witness",
          "bn": "মুখের তাসবীহ, না নীরব সাক্ষ্য"
        },
        "p": [
          {
            "en": "Here the commentators divide, and al-Qurtubi sets out the division most fully. One group holds that the clause is not restricted at all, and that what is meant is the glorification of indication: everything that has come into being testifies of itself that Allah is its Creator and has power over it. Another group holds that the glorification is real, that everything without exception glorifies in a way humans neither hear nor understand. Were it only the mark of craftsmanship, they argue, it would be understood, and the verse says it is not.",
            "bn": "এখানে এসে তাফসীরকারেরা দুই ভাগ হয়ে যান, আর বিভাজনটা সবচেয়ে বিস্তারিতভাবে তুলে ধরেন কুরতুবী। একটি দলের মতে বাক্যাংশটি কোনোভাবেই সীমিত নয়, তবে এখানে উদ্দেশ্য দালালাতের তাসবীহ, অর্থাৎ নির্দেশনার তাসবীহ। যা কিছু অস্তিত্বে এসেছে, তা নিজের ব্যাপারেই সাক্ষ্য দেয় যে আল্লাহ তার স্রষ্টা, তার উপর ক্ষমতাবান। আরেক দলের মতে এ তাসবীহ বাস্তব। ব্যতিক্রম ছাড়াই সবকিছু এমনভাবে তাসবীহ পড়ে, যা মানুষ শোনে না, বোঝেও না। তাদের যুক্তি: এটা যদি শুধু নির্মাণকৌশলের ছাপ হতো, তবে তো বোঝা যেত। অথচ আয়াত বলছে, তা বোঝা যায় না।"
          },
          {
            "en": "The first group has a reply, which al-Qurtubi records too: you do not understand is addressed to disbelievers who turn away from reflection and so miss Allah's wisdom in things. Al-Baghawi credits the indication reading to some scholars of meaning: creation points, by its fine composition and wondrous form, to its Maker, and that pointing stands in place of glorification. He adds that the first view, real glorification, is the one transmitted from the early generations, and that Allah's knowledge of inanimate things is beyond anyone else, so it should be left to Him.",
            "bn": "প্রথম দলের একটি জবাবও কুরতুবী উল্লেখ করেন: 'তোমরা বোঝ না' কথাটি সেই কাফিরদের উদ্দেশে, যারা চিন্তাভাবনা থেকে মুখ ফিরিয়ে নেয়, তাই জিনিসের ভেতরে আল্লাহর হিকমত তাদের চোখে পড়ে না। বাগাভী নির্দেশনার ব্যাখ্যাটি উল্লেখ করেন কিছু আহলুল মাআনীর নামে। তাঁদের মতে সৃষ্টি তার সূক্ষ্ম গঠন আর বিস্ময়কর আকৃতি দিয়ে স্রষ্টার দিকে ইশারা করে, আর এই ইশারাই তাসবীহর স্থান নেয়। বাগাভী যোগ করেন, প্রথম মতটি, অর্থাৎ বাস্তব তাসবীহ, সালাফ থেকে বর্ণিত। জড়বস্তুর ব্যাপারে আল্লাহর এমন জ্ঞান আছে যার নাগাল আর কেউ পায় না, তাই বিষয়টি তাঁর উপরই ছেড়ে দেওয়া উচিত।"
          },
          {
            "en": "Al-Qurtubi ends on the side of real glorification: were it a glorification of indication, why single out Dawud (AS), with whom, in 38:18, the mountains were made to glorify at evening and sunrise? It is, he says, a glorification of speech, Allah creating life in things and making them utter it, and the Sunnah confirms the outward sense of the Qur'an. As-Sa'di joins the two: everything glorifies by the tongue of its state and the tongue of speech. Ma'arif al-Qur'an gives the state reading as that of some scholars, then follows al-Qurtubi to a real glorification beyond our grasp.",
            "bn": "কুরতুবী শেষে বাস্তব তাসবীহর পক্ষেই দাঁড়ান। তাঁর প্রশ্ন: এ যদি দালালাতের তাসবীহ হতো, তবে দাউদ (আঃ)-এর বেলায় আলাদা করে বলার কী দরকার ছিল? ৩৮:১৮ আয়াতে তো পাহাড়গুলোকে তাঁর সঙ্গে সন্ধ্যা ও সকালে তাসবীহ পড়ার জন্য বশীভূত করা হয়েছিল। তাঁর মতে এটি কথার তাসবীহ: আল্লাহ জিনিসের মধ্যে জীবন সৃষ্টি করেন আর তাকে তাসবীহ উচ্চারণ করান। কুরআনের বাহ্যিক অর্থকে সুন্নাহও সমর্থন করে। সা'দী দুটিকে মিলিয়ে দেন: প্রতিটি জিনিস তাসবীহ পড়ে তার অবস্থার ভাষায়, আবার কথার ভাষায়ও। মাআরিফুল কুরআন অবস্থার ব্যাখ্যাটিকে কিছু আলেমের মত বলে উল্লেখ করে, তারপর কুরতুবীর অনুসরণে বলে, এ তাসবীহ বাস্তব, যদিও আমাদের বোধের বাইরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Living Only, or All?",
          "bn": "শুধু প্রাণবান, না সবকিছু?"
        },
        "p": [
          {
            "en": "Among those who take the glorification as real, a second question opens: does a thing mean every thing, or every living and growing thing? Ibn Kathir names the two views and calls the first, covering animals, plants and inanimate things alike, the better known. For the second, at-Tabari carries al-Hasan and ad-Dahhak, everything that has a spirit, and Qatadah, a tree or anything else with a spirit. Al-Qurtubi gives it as general wording with a specific meaning, and al-Baghawi has a report from Ibn 'Abbas: there is no living thing but glorifies.",
            "bn": "যাঁরা তাসবীহকে বাস্তব বলে ধরেন, তাঁদের মধ্যে আরেকটি প্রশ্ন ওঠে: 'জিনিস' মানে কি সব জিনিস, নাকি শুধু জীবিত ও বর্ধনশীল জিনিস? ইবন কাসীর দুটি মতের কথা বলেন। প্রথমটিতে প্রাণী, উদ্ভিদ ও জড়বস্তু সবই শামিল, আর তাঁর মতে এটিই বেশি প্রসিদ্ধ। দ্বিতীয় মতটি তাবারী আনেন হাসান ও দাহহাক থেকে: যার মধ্যে রূহ আছে, এমন প্রতিটি জিনিস। কাতাদা থেকেও আনেন: গাছ হোক বা অন্য কিছু, যার মধ্যে রূহ আছে। কুরতুবী একে বলেন শব্দ ব্যাপক কিন্তু অর্থ নির্দিষ্ট। বাগাভী ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন: এমন কোনো জীবিত জিনিস নেই যা তাসবীহ পড়ে না।"
          },
          {
            "en": "'Ikrimah's saying reaches the books in two forms. At-Tabari and Ibn Kathir give it as: the tree glorifies, and the pillar glorifies. Al-Qurtubi and al-Baghawi give it as: the tree glorifies, and the pillar does not. At-Tabari also reports that Yazid ar-Raqashi, at a meal with al-Hasan, asked whether the table before them glorified, and al-Hasan said: it used to, once. Ibn Kathir explains that the table was wood: while it was a living green tree it glorified, and once cut and dried its glorification stopped.",
            "bn": "ইকরিমার কথাটি কিতাবগুলোতে দুই রূপে পৌঁছেছে। তাবারী ও ইবন কাসীরের বর্ণনায়: গাছ তাসবীহ পড়ে, খুঁটিও তাসবীহ পড়ে। কুরতুবী ও বাগাভীর বর্ণনায়: গাছ তাসবীহ পড়ে, খুঁটি পড়ে না। তাবারী আরও বর্ণনা করেন, হাসানের সঙ্গে খেতে বসে ইয়াযীদ রাকাশী জানতে চাইলেন, সামনে রাখা খাবারের এই টেবিলটি কি তাসবীহ পড়ে? হাসান বললেন: একসময় পড়ত। ইবন কাসীর বুঝিয়ে দেন, টেবিলটি ছিল কাঠের। যতদিন তা সবুজ জীবন্ত গাছ ছিল, তাসবীহ পড়ত। কেটে শুকিয়ে ফেলার পর তার তাসবীহ থেমে গেছে।"
          },
          {
            "en": "In its support, al-Qurtubi and Ibn Kathir bring the report of the two graves, which Ibn Kathir says both Sahihs record: the Prophet ﷺ split a fresh palm stalk, planted a half on each grave, and said that perhaps the punishment would be lightened for the two buried there as long as the halves did not dry. Some explained the condition by the green stalks glorifying. The other side reads thing at full width: Ibrahim, in at-Tabari, says food glorifies, and al-Qurtubi and al-Baghawi report an-Nakha'i extending it to inanimate things, down to the creak of a door.",
            "bn": "এ মতের সমর্থনে কুরতুবী ও ইবন কাসীর দুই কবরের হাদীসটি আনেন। ইবন কাসীর বলেন, দুই সহীহ গ্রন্থেই এটি আছে। নবী ﷺ একটি তাজা খেজুরের ডাল চিরে দুই ভাগ করলেন, প্রতিটি কবরে একটি করে গেড়ে দিলেন, আর বললেন, ডাল দুটি না শুকানো পর্যন্ত হয়তো সেখানে শায়িত দুজনের আযাব কিছুটা হালকা হবে। কেউ কেউ এ শর্তের ব্যাখ্যা দেন এভাবে: সবুজ থাকা পর্যন্ত ডালগুলো তাসবীহ পড়ে। অন্য পক্ষ 'জিনিস' শব্দটিকে পুরো প্রশস্ততায় নেন। তাবারীর বর্ণনায় ইবরাহীম বলেন, খাবারও তাসবীহ পড়ে। কুরতুবী ও বাগাভী নাখঈর মত আনেন, যিনি জড়বস্তুকেও এর মধ্যে ধরেন, এমনকি দরজার কাঁচকাঁচ শব্দকেও।"
          }
        ]
      },
      {
        "h": {
          "en": "The Food They Heard",
          "bn": "খাবারের যে তাসবীহ তাঁরা শুনেছিলেন"
        },
        "p": [
          {
            "en": "Al-Bukhari records it in his Sahih (3579): \"Narrated 'Abdullah: We used to consider miracles as Allah's Blessings, but you people consider them to be a warning. Once we were with Allah's Messenger (ﷺ) on a journey, and we ran short of water. He said, 'Bring the water remaining with you.' The people brought a utensil containing a little water. He placed his hand in it and said, 'Come to the blessed water, and the Blessing is from Allah.' I saw the water flowing from among the fingers of Allah's Messenger (ﷺ), and no doubt, we heard the meal glorifying Allah, when it was being eaten (by him).\"",
            "bn": "বুখারী তাঁর সহীহ গ্রন্থে (৩৫৭৯) এটি বর্ণনা করেছেন। আবদুল্লাহ (রাঃ) বলেন: \"আমরা মুজিযাগুলোকে বরকত মনে করতাম, আর তোমরা সেগুলোকে মনে কর ভয় দেখানো। একবার আমরা সফরে আল্লাহর রাসূল ﷺ-এর সঙ্গে ছিলাম, পানি কমে গেল। তিনি বললেন, 'বেঁচে যাওয়া পানি খুঁজে আনো।' লোকেরা অল্প পানিসহ একটি পাত্র নিয়ে এল। তিনি পাত্রে হাত ঢুকিয়ে বললেন, 'বরকতময় পবিত্র পানির দিকে এসো, আর বরকত আল্লাহর পক্ষ থেকে।' আমি দেখেছি, আল্লাহর রাসূল ﷺ-এর আঙুলের ফাঁক দিয়ে পানি উথলে বের হচ্ছে। আর খাবার যখন খাওয়া হতো, আমরা সেই খাবারের তাসবীহ শুনতাম।\""
          },
          {
            "en": "Being in al-Bukhari's Sahih, it carries his own judgment that it is sound. The report itself does not mention this verse; the commentators bring it here. Al-Baghawi cites it through al-Bukhari's own chain from 'Abdullah ibn Mas'ud (RA), and Ibn Kathir offers it as evidence for the view that everything glorifies. Al-Qurtubi adds, without naming a collection, a wording in which the Companions ate with the Prophet ﷺ and heard the food's glorification. He also points to a stone in Makkah that greeted the Prophet ﷺ before his mission, from Sahih Muslim, and to the palm trunk's report, which he says al-Bukhari records.",
            "bn": "বুখারীর সহীহ গ্রন্থে থাকায় এর সঙ্গে আছে তাঁর নিজের রায়: বর্ণনাটি সহীহ। তবে বর্ণনাটি নিজে এ আয়াতের কথা বলে না, তাফসীরকারেরাই একে এখানে এনেছেন। বাগাভী এটি এনেছেন বুখারীর নিজস্ব সনদে, আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে। ইবন কাসীর একে পেশ করেন সবকিছুর তাসবীহ পড়ার মতের প্রমাণ হিসেবে। কুরতুবী কোনো গ্রন্থের নাম না নিয়ে আরেকটি পাঠ উল্লেখ করেন, যেখানে সাহাবিরা নবী ﷺ-এর সঙ্গে খেতেন আর খাবারের তাসবীহ শুনতেন। তিনি সহীহ মুসলিম থেকে মক্কার সেই পাথরের কথাও বলেন, যা নবুওয়াতের আগে নবী ﷺ-কে সালাম দিত। আর খেজুরগাছের কাণ্ডের ঘটনার কথা বলেন, যা তাঁর ভাষায় বুখারী বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tongue Unlike Ours",
          "bn": "আমাদের ভাষার বাইরের ভাষা"
        },
        "p": [
          {
            "en": "Wa lakin la tafqahuna tasbihahum: but you do not understand their glorification. At-Tabari: you do not understand the glorification of whatever does not glorify with tongues like yours. Ibn Kathir: you do not understand it, O people, because it is unlike your language. Al-Baghawi: you do not know the glorification of whatever does not glorify in your languages. As-Sa'di: the glorification of the rest of creation is not in your language, though the Knower of the unseen encompasses it. The Muyassar: you do not perceive it, O people.",
            "bn": "ওয়া লাকিল লা তাফকাহূনা তাসবীহাহুম: কিন্তু তোমরা তাদের তাসবীহ বোঝ না। তাবারী বলেন, যারা তোমাদের মতো জিহ্বায় তাসবীহ পড়ে না, তাদের তাসবীহ তোমরা বোঝ না। ইবন কাসীর বলেন, হে মানুষ, তোমরা তা বোঝ না, কারণ তা তোমাদের ভাষার মতো নয়। বাগাভীর ব্যাখ্যা: তোমাদের ভাষায় যারা তাসবীহ পড়ে না, তাদের তাসবীহ তোমরা জান না। সা'দী বলেন, বাকি সৃষ্টির তাসবীহ তোমাদের ভাষায় নয়, তবে গায়েবের জ্ঞানী আল্লাহ তা পুরোপুরি জানেন। মুয়াসসার বলে: হে মানুষ, তোমরা তা উপলব্ধি কর না।"
          },
          {
            "en": "On the indication view, as al-Qurtubi reports its defenders, these words rebuke disbelievers who will not reflect; on the reading most of these glosses take, they state that human hearing has limits. Ibn Kathir points to a further witness for the view that everything glorifies: the verse of prostration near the opening of Surah al-Hajj, 22:18, where the sun, the moon, the stars, the mountains, the trees and the beasts prostrate to Allah. Either way, the clause asks the listener for humility about what lies beyond his own perception.",
            "bn": "কুরতুবী নির্দেশনার মতের পক্ষের লোকদের যে জবাব উল্লেখ করেন, সে অনুযায়ী এ কথা সেই কাফিরদের প্রতি তিরস্কার, যারা ভেবে দেখতে চায় না। আর এখানকার অধিকাংশ ব্যাখ্যা যেভাবে পড়ে, সে অনুযায়ী এটি মানুষের শোনার সীমা নিয়ে সোজা একটি কথা। সবকিছুর তাসবীহ পড়ার মতের পক্ষে ইবন কাসীর আরেকটি সাক্ষ্যের দিকে ইশারা করেন: সূরা হজ্জের শুরুর দিকের সিজদার আয়াত, ২২:১৮। সেখানে সূর্য, চাঁদ, তারা, পাহাড়, গাছপালা ও জীবজন্তু আল্লাহকে সিজদা করে। যেভাবেই পড়া হোক, বাক্যাংশটি শ্রোতার কাছে চায় নিজের উপলব্ধির সীমা নিয়ে কিছুটা বিনয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Forbearing While They Spoke",
          "bn": "তারা বলছিল, তিনি সইছিলেন"
        },
        "p": [
          {
            "en": "Innahu kana haliman ghafura: He is ever Forbearing, Forgiving. At-Tabari ties the names to the passage. Allah is forbearing in that He does not hasten against those of His creation who oppose His command and disbelieve in Him; were it not so, He would have hastened punishment on these idolaters who call on other gods beside Him. He is forgiving in that He covers their sins when they repent. Al-Qurtubi divides the two: forbearing about His servants' sins in this world, forgiving to the believers in the next.",
            "bn": "ইন্নাহূ কানা হালীমান গাফূরা: নিশ্চয় তিনি পরম সহনশীল, ক্ষমাশীল। তাবারী নাম দুটিকে এই আলোচনার সঙ্গে জুড়ে দেন। আল্লাহ হালীম, কারণ তাঁর সৃষ্টির যারা তাঁর আদেশের বিরোধিতা করে আর তাঁকে অস্বীকার করে, তাদের বেলায় তিনি তাড়াহুড়া করেন না। তা না হলে তাঁর সঙ্গে অন্য ইলাহ ডাকা এই মুশরিকদের উপর তিনি দ্রুত শাস্তি নামাতেন। তিনি গাফূর, কারণ তারা তওবা করলে তিনি তাদের গুনাহ ঢেকে দেন। কুরতুবী দুটিকে ভাগ করে দেখান: দুনিয়াতে বান্দাদের গুনাহের ব্যাপারে তিনি সহনশীল, আখিরাতে মুমিনদের প্রতি ক্ষমাশীল।"
          },
          {
            "en": "Ibn Kathir gives the names a sequence. Allah does not hasten to punish whoever disobeys Him but defers him and waits; if he persists in disbelief and obstinacy, He seizes him with the seizing of the Mighty, the Able, and Ibn Kathir cites 11:102 and 22:48 here. Whoever gives up disbelief or sin and turns to Allah in repentance, Allah accepts it, as 4:110 says. He notes too that the same pair of names closes 35:41, where Allah holds the heavens and the earth lest they cease.",
            "bn": "ইবন কাসীর নাম দুটিকে একটি ধারাবাহিকতায় সাজান। যে আল্লাহর নাফরমানি করে, তাকে শাস্তি দিতে তিনি তাড়াহুড়া করেন না, বরং সময় দেন, অপেক্ষা করেন। সে যদি কুফর আর হঠকারিতায় অটল থাকে, তবে মহাপরাক্রমশালী, সর্বশক্তিমানের পাকড়াওয়ে তাকে ধরেন। এখানে ইবন কাসীর ১১:১০২ ও ২২:৪৮ আয়াত উদ্ধৃত করেন। আর যে কুফর বা গুনাহ ছেড়ে তওবা করে আল্লাহর দিকে ফেরে, আল্লাহ তার তওবা কবুল করেন, যেমন ৪:১১০ আয়াত বলে। তিনি আরও লক্ষ করেন, এই একই নামজোড়া দিয়ে শেষ হয়েছে ৩৫:৪১ আয়াত, যেখানে আল্লাহ আসমান ও যমীনকে ধরে রাখেন যাতে তা টলে না যায়।"
          },
          {
            "en": "As-Sa'di draws the pair back to the passage. Allah did not hasten to punish those who said of Him a word at which the heavens almost split, but gave them respite, blessings, health and provision, and called them to His door to repent and be forgiven. Were it not for His forbearance and forgiveness, he says, the heavens would have fallen upon the earth. The next verses, 17:45 and 17:46, turn to the veil between the Prophet ﷺ and those who do not believe in the Hereafter.",
            "bn": "সা'দী নামজোড়াকে আবার এই আলোচনায় ফিরিয়ে আনেন। যারা আল্লাহ সম্পর্কে এমন কথা বলেছিল, যাতে আসমান প্রায় ফেটে পড়ে, তাদের শাস্তি দিতে তিনি তাড়াহুড়া করেননি। বরং সময় দিয়েছেন, নিয়ামত দিয়েছেন, সুস্থ রেখেছেন, রিজিক দিয়েছেন, আর নিজের দরজায় ডেকেছেন, যাতে তারা তওবা করে মাগফিরাত পায়। সা'দীর ভাষায়, তাঁর হিলম আর মাগফিরাত না থাকলে আসমান ভেঙে যমীনের উপর পড়ত। পরের দুটি আয়াত, ১৭:৪৫ ও ১৭:৪৬, নবী ﷺ আর আখিরাতে অবিশ্বাসীদের মাঝের পর্দার কথা বলে।"
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
          "bn": "তিনি জানেন তারা কীভাবে শোনে"
        },
        "p": [
          {
            "en": "Nahnu a'lamu bima yastami'una bihi: We are most knowing of how they listen to it. The verse does not say Allah hears their words; it says He knows their listening — the ear and the aim behind it. Al-Baghawi and al-Qurtubi both pause on the small particle bihi, the bi in listen to it. Al-Baghawi reads it as they seek to hear it; al-Qurtubi notes the view that the bi is extra, so the sense is simply they listen to it. Either way, the listening itself is what is weighed.",
            "bn": "নাহনু আ‘লামু বিমা ইয়াসতামি‘উনা বিহি: তারা কীভাবে কান পাতে, তা আমিই ভাল জানি। আয়াত বলছে না যে আল্লাহ তাদের কথা শোনেন; বলছে, তিনি তাদের শোনাটাকেই জানেন, কান আর তার পেছনের উদ্দেশ্যটাকে। বাগভী ও কুরতুবী দুজনেই ছোট্ট ‘বিহি’ শব্দটায় থামেন, অর্থাৎ ‘তা শোনা’র ভেতরের ‘বি’। বাগভী পড়েন, তারা তা শুনতে চায়; কুরতুবী সেই মতটি তুলে ধরেন যে এখানে ‘বি’ অতিরিক্ত, তাই অর্থ দাঁড়ায় নিছক তারা তা শোনে। যেভাবেই হোক, শোনাটাই এখানে ওজন করা হচ্ছে।"
          },
          {
            "en": "This comes right after two verses about a veil. In 17:45 and 17:46 Allah describes a concealed partition set between the Prophet and those who deny the Hereafter, coverings laid over their hearts so they cannot grasp the Qur'an, and a heaviness in their ears. Now the reason surfaces. It was never that the sound failed to reach them; they heard the words plainly enough. What Allah knows, and what they will not admit, is why they bent their ears toward the recitation in the first place.",
            "bn": "এর ঠিক আগের দুটি আয়াত একটি পর্দার কথা বলে। ১৭:৪৫ ও ১৭:৪৬ আয়াতে আল্লাহ জানান, নবী আর আখিরাত অস্বীকারকারীদের মাঝে এক অদৃশ্য পর্দা টেনে দেওয়া হয়েছে; তাদের অন্তরে আবরণ, যাতে তারা কুরআন বুঝতে না পারে, আর কানে ভার। এবার কারণটা সামনে আসে। আওয়াজ তাদের কানে পৌঁছায়নি, ব্যাপারটা তা নয়; কথাগুলো তারা স্পষ্টই শুনত। আল্লাহ যা জানেন আর তারা যা মানতে চায় না, তা হলো: তারা তিলাওয়াতের দিকে কান পাতত কেন।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ear Already Decided",
          "bn": "আগেই সিদ্ধান্ত নিয়ে রাখা কান"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as the answer to a question the earlier verses raised: why did all that listening never benefit them? Because, he says, Allah knew their aims were corrupt. They did not come to be guided or to accept the truth; they came hoping to trip over the smallest thing they could seize on to attack it. A person in that state, as-Sa'di concludes, gains nothing at all from listening — and this, he notes, is precisely why the earlier barrier was placed between them and the words. The recitation entered ears that had already refused it.",
            "bn": "সাদী আয়াতটিকে দেখেন আগের আয়াতগুলোর তোলা একটি প্রশ্নের জবাব হিসেবে: এত শোনার পরও তাদের কোনো লাভ হলো না কেন? কারণ, তিনি বলেন, আল্লাহ জানতেন তাদের নিয়ত খারাপ। তারা হেদায়েত পেতে বা সত্য মেনে নিতে আসেনি। এসেছিল এই আশায় যে ছোটখাটো কিছু একটা পেয়ে যাবে, যা ধরে আক্রমণ করা যায়। সাদীর সিদ্ধান্ত: এমন মনের মানুষ শুনে কিছুই পায় না। আর তিনি বলেন, ঠিক এ কারণেই আগে তাদের আর কালামের মাঝে সেই পর্দা দেওয়া হয়েছিল। তিলাওয়াত ঢুকেছিল এমন কানে, যা আগেই তা ফিরিয়ে দিয়েছিল।"
          },
          {
            "en": "Al-Muyassar puts the same point plainly: We know best what the chiefs of Quraysh are listening to, and their motives are evil. Their listening was not for the sake of seeking right guidance and accepting the truth. This reframes an ordinary act. Two people can hear the identical words — the first leaning in to be corrected, another scanning for a weapon. The sound is the same; the heart behind the ear is not, and it is the heart that Allah reports He knows.",
            "bn": "মুয়াসসার একই কথা সোজা করে বলেন: কুরাইশ নেতারা কী শুনছে তা আমিই ভাল জানি, আর তাদের উদ্দেশ্য মন্দ। তাদের শোনা সঠিক পথের খোঁজ আর সত্য কবুলের জন্য ছিল না। এতে একটি সাধারণ কাজেরই নতুন চেহারা বেরিয়ে আসে। দুজন মানুষ হুবহু একই কথা শুনতে পারে, প্রথমজন ঝুঁকে পড়ে শুধরে নিতে, অন্যজন খোঁজে অস্ত্র। শব্দ এক, কিন্তু কানের পেছনের অন্তর এক নয়। আর আল্লাহ বলছেন, সেই অন্তরটাই তিনি জানেন।"
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
            "bn": "ইবন কাসীর এর আরও পূর্ণ একটি দৃশ্য তুলে রেখেছেন, যা ইবন ইসহাক সিরাতে যুহরীর সূত্রে বর্ণনা করেছেন। তিন নেতা, আবু সুফিয়ান, আবু জাহল আর আখনাস ইবন শুরাইক, রাতে বেরিয়েছিলেন রাসূলের ঘরে নামাজে তাঁর তিলাওয়াত শুনতে। প্রত্যেকে আলাদা এক গোপন জায়গায় লুকিয়ে বসলেন; কেউ জানত না অন্যরাও সেখানে আছে। ভোর পর্যন্ত সবাই সেখানেই রইলেন। ফেরার পথে তিনজনের দেখা হলো, আর তারা একে অপরকে দোষ দিলেন: আর এসো না, লোকে ভুল বুঝবে। এটি সিরাতের বর্ণনা; ইবন কাসীর নিজে এর কোনো মান নির্ধারণ করেননি।"
          },
          {
            "en": "The report has them repeat this for three nights, each night promising not to return and each night returning. At last al-Akhnas went to Abu Sufyan and asked what he made of what he had heard; Abu Sufyan admitted he had grasped some of it and not the rest. Going on to Abu Jahl, al-Akhnas heard the plainest confession of all: our clan and Banu Abd Manaf had competed for every honour until we were neck and neck, and now they claim a prophet receiving revelation — by Allah, we will never believe in him.",
            "bn": "বর্ণনায় আছে, পরপর তিন রাত এমনই হলো: প্রতি রাতে তারা আর না আসার ওয়াদা করেন, আর প্রতি রাতেই আবার আসেন। শেষে আখনাস আবু সুফিয়ানের কাছে গিয়ে জিজ্ঞেস করেন, যা শুনেছেন তা নিয়ে তিনি কী ভাবছেন। আবু সুফিয়ান স্বীকার করেন, কিছুটা তিনি বুঝেছেন, বাকিটা বোঝেননি। এরপর আখনাস যান আবু জাহলের কাছে, আর শোনেন সবচেয়ে খোলামেলা স্বীকারোক্তি: আমরা আর বনু আবদ মানাফ প্রতিটি সম্মান নিয়ে পাল্লা দিয়েছি, শেষে দুই পক্ষ সমানে সমান হয়ে গেছি। এখন তারা বলছে, তাদের মধ্যে এক নবী আছেন, যাঁর কাছে ওহি আসে! আল্লাহর কসম, আমরা কখনো তাঁর প্রতি ঈমান আনব না।"
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
            "bn": "‘আর যখন তারা গোপনে পরামর্শ করে’: ওয়া ইয হুম নাজওয়া। তাবারী লেখেন, এই নাজওয়া ছিল নবীর ব্যাপারে তাদের গোপন শলাপরামর্শ। কাতাদা, যাঁর কথা তাবারী ও কুরতুবী দুজনেই এনেছেন, খুলে বলেন সেখানে কী হতো: তারা কানাকানি করত, তিনি পাগল, তিনি জাদুকর, তিনি শুধু আগের লোকদের কিসসা-কাহিনি নিয়ে এসেছেন। বাগভী একই রকম অভিযোগের তালিকা দেন: কেউ বলত পাগল, কেউ গণক, কেউ জাদুকর, কেউ কবি। অভিযোগগুলো একটা আরেকটার সঙ্গে মেলে না, আর এটাই প্রমাণ যে কোনোটাই ভেবেচিন্তে দেওয়া রায় ছিল না।"
          },
          {
            "en": "Where were these whispers exchanged? Here the reports diverge, and the commentators flag them as uncertain with the word qila, it is said. At-Tabari relays, through Mujahid, that this echoes what al-Walid ibn al-Mughira and his circle said in Dar an-Nadwa, the assembly house of Quraysh. Al-Qurtubi adds two further settings: a meal Utba laid on for the nobles of Quraysh, or another that Ali prepared at the Prophet's request. Al-Qurtubi also cites az-Zajjaj that najwa is a noun standing for the act itself, secret talk. None is offered as established; the verse's point holds without deciding which gathering it was.",
            "bn": "এই কানাকানি কোথায় হয়েছিল? এখানে বর্ণনাগুলো আলাদা হয়ে যায়, আর তাফসিরকারেরা ‘কীলা’, অর্থাৎ ‘বলা হয়’ শব্দ দিয়ে জানিয়ে দেন যে এগুলো নিশ্চিত নয়। তাবারী মুজাহিদের সূত্রে জানান, এটি সেই কথারই প্রতিধ্বনি, যা ওয়ালিদ ইবন মুগিরা ও তার সঙ্গীরা কুরাইশের সভাঘর দারুন নাদওয়ায় বলেছিল। কুরতুবী আরও দুটি উপলক্ষের কথা বলেন: কুরাইশ নেতাদের জন্য উতবার দেওয়া এক ভোজ, অথবা নবীর অনুরোধে আলীর আয়োজন করা আরেক ভোজ। কুরতুবী যাজ্জাজের সূত্রে এটাও আনেন যে ‘নাজওয়া’ আসলে কাজটিরই নাম, অর্থাৎ গোপন কথা। কোনোটিকেই নিশ্চিত বলে পেশ করা হয়নি। আর কোন মজলিসে কথাগুলো হয়েছিল, তা ঠিক না করেও আয়াতের বক্তব্য পুরোপুরি টিকে থাকে।"
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
            "bn": "তারপর জালিমরা বলে: তোমরা তো কেবল এক মাসহুর লোকের অনুসরণ করছ। বেশি প্রচলিত ব্যাখ্যায়, যাকে ইবন কাসীর ‘আল-মাশহুর’ বলেছেন, মাসহুর মানে যাদুগ্রস্ত, যার উপর জাদু কাজ করেছে। মুয়াসসারের ভাষায়: এমন লোক, যাকে জাদু ধরেছে আর তার বুদ্ধি এলোমেলো হয়ে গেছে। কুরতুবীর ব্যাখ্যায়: এমন লোক, যাকে জাদু করে বুদ্ধিভ্রষ্ট করা হয়েছে, যার সবকিছু গুলিয়ে গেছে। সঙ্গে তিনি তাদের উদ্দেশ্যও বলে দেন: মানুষকে তাঁর কাছ থেকে দূরে রাখতেই তারা এ কথা বলত। অভিযোগটা সেজেছিল রোগের বিবরণের মতো, অথচ আসলে কাজ করছিল অপবাদের।"
          },
          {
            "en": "As-Sa'di draws out what the label let them do. Having settled among themselves that he was bewitched, they held themselves excused from weighing a word he said; they treated him as a man raving, who does not know what comes out of his own mouth. Al-Baghawi's term is matbub, spellbound. The move is old and still with us: fasten on a speaker a label that makes listening pointless, and you never have to answer what he actually says. The verdict is entered first, so the evidence is never given a hearing at all.",
            "bn": "সাদী দেখান, এই তকমা তাদের কী সুবিধা করে দিয়েছিল। তিনি যাদুগ্রস্ত, নিজেদের মধ্যে এটা ঠিক করে ফেলার পর তাঁর কোনো কথা যাচাই করার দায় থেকে তারা নিজেদের রেহাই দিয়ে দেয়। তাঁকে তারা ধরে নেয় প্রলাপ বকা লোক হিসেবে, যে নিজেই জানে না মুখ দিয়ে কী বেরোচ্ছে। বাগভীর শব্দ ‘মাতবুব’, অর্থাৎ জাদুবদ্ধ। কৌশলটা পুরনো, আর আজও চলছে: বক্তার গায়ে এমন তকমা সেঁটে দেওয়া, যাতে তার কথা শোনাই অর্থহীন হয়ে যায়। তাহলে সে আসলে কী বলছে, তার জবাব আর কোনোদিন দিতে হয় না। রায় আগেই দিয়ে রাখা হয়, তাই প্রমাণের শুনানি আর হয়ই না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man With Lungs",
          "bn": "ফুসফুসওয়ালা এক মানুষ"
        },
        "p": [
          {
            "en": "A second reading turns on a different root. The Arabs called the lung the sahr, so mashur could mean simply a man who has lungs — a creature that eats and drinks, a mere mortal and not an angel. Abu Ubayda held this sense, and al-Qurtubi and al-Baghawi both record it, citing the poet Labid: if you ask us what we are, we are but sparrows of these lung-bearing folk. Read this way, the taunt was: why follow someone as human as yourselves, who hungers and thirsts as you do?",
            "bn": "দ্বিতীয় একটি পাঠ ভিন্ন ধাতুর উপর দাঁড়ায়। আরবরা ফুসফুসকে বলত ‘সাহর’, তাই মাসহুর মানে হতে পারে নিছক এমন লোক যার ফুসফুস আছে, যে খায়দায়, নিছক এক মানুষ, ফেরেশতা নয়। আবু উবাইদা এ অর্থটাই ধরেন, আর কুরতুবী ও বাগভী দুজনেই তা লিপিবদ্ধ করেন, কবি লাবিদের পঙক্তি টেনে: তুমি যদি জিজ্ঞেস কর আমরা কী, আমরা এই ফুসফুসওয়ালা মানুষদেরই চড়ুই। এভাবে পড়লে খোঁচাটা দাঁড়ায়, তোমাদেরই মতো একজন মানুষ, যে তোমাদের মতোই ক্ষুধাতৃষ্ণা বোধ করে, তার পিছনে কেন?"
          },
          {
            "en": "The commentators do not agree on which reading is meant. At-Tabari inclines to the lung sense, judging it not far from correct: they meant a man with lungs who eats and drinks, unlike an angel with no need of food. Ibn Kathir records the same reading but finds it questionable, holding that here they meant he was under a spell that fed him a familiar's whispers of what he recited. Both preserve both senses; each weighs them differently. Where two careful readers part, the honest course is to keep the difference in view.",
            "bn": "কোন অর্থটি উদ্দেশ্য, তা নিয়ে তাফসিরকারেরা একমত নন। তাবারী ফুসফুসের অর্থের দিকে ঝোঁকেন; তাঁর মতে এটা সঠিক থেকে দূরে নয়। অর্থাৎ তারা বোঝাতে চেয়েছিল, ইনি ফুসফুসওয়ালা এক মানুষ, যে খায়-দায়, ফেরেশতার মতো নয়, যার খাবারের দরকার নেই। ইবন কাসীর এই ব্যাখ্যাটাও উল্লেখ করেন, তবে একে প্রশ্নসাপেক্ষ মনে করেন। তাঁর মতে এখানে তারা বলতে চেয়েছিল, তিনি জাদুর কবলে আছেন, আর কোনো জিন-সঙ্গী তাঁর কানে কানে বলে দেয় যা তিনি পাঠ করেন। দুজনেই দুটো অর্থ রেখেছেন, শুধু গুরুত্ব দিয়েছেন আলাদা। দুই মনোযোগী পাঠক যেখানে ভিন্ন পথে যান, সেখানে সৎ কাজ হলো মতভেদটা চোখের সামনে রাখা।"
          },
          {
            "en": "Alongside these, Mujahid offered a third gloss recorded by al-Qurtubi and al-Baghawi: mashur as deceived, taken in, as in the Qur'anic reproach how are you so deceived. Al-Baghawi notes a further shade, turned away from the truth. The single word carried a spread of insults, bewitched, deranged, merely human, duped, diverted, and the verse gathers them all under a single heading before answering none of them here.",
            "bn": "এগুলোর পাশাপাশি মুজাহিদ তৃতীয় একটি অর্থ দেন, যা কুরতুবী ও বাগভী লিখে রেখেছেন: মাসহুর মানে প্রতারিত, ধোঁকায় পড়া। যেমন কুরআনের তিরস্কার: ‘তবে তোমরা কীভাবে মোহগ্রস্ত হচ্ছ?’ বাগভী আরও একটি ছায়া-অর্থ দেন: সত্য থেকে ফিরিয়ে দেওয়া। একটিমাত্র শব্দে বোঝাই ছিল এক গাদা অপবাদ: যাদুগ্রস্ত, উন্মাদ, নিছক মানুষ, প্রতারিত, পথভ্রষ্ট। আয়াত এগুলো সবই এক শিরোনামের নিচে এনেছে, তবে এখানে কোনোটিরই জবাব দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Called The Wrongdoers",
          "bn": "কেন জালিম বলা হলো"
        },
        "p": [
          {
            "en": "Notice whom the verse names as the speakers. It does not say when they say, but when the wrongdoers say — az-zalimun. Al-Qurtubi identifies them as Abu Jahl, al-Walid ibn al-Mughira and their like; al-Baghawi names al-Walid and his companions. The naming is deliberate and damning. To hear the truth clearly, to gather in private to plan against it, and then to brand its bearer a madman is not a mere difference of opinion or an honest mistake. The Qur'an files the whole performance under zulm, wrongdoing, and lets the label settle on the deed rather than on the man they slandered.",
            "bn": "খেয়াল করুন, আয়াত কাদের বক্তা হিসেবে নাম দেয়। বলে না ‘যখন তারা বলে’, বলে ‘যখন জালিমরা বলে’, অর্থাৎ আয-যালিমুন। কুরতুবী তাদের চিহ্নিত করেন আবু জাহল, ওয়ালিদ ইবন মুগিরা ও তাদের মতো লোক হিসেবে; বাগভী নাম নেন ওয়ালিদ ও তার সঙ্গীদের। এই নাম দেওয়া ইচ্ছাকৃত এবং কঠোর। সত্য স্পষ্ট শুনে, তার বিরুদ্ধে ষড়যন্ত্র করতে আড়ালে বসে, তারপর তার বাহককে পাগল বলে দাগিয়ে দেওয়া—এ নিছক মতভেদ বা সরল ভুল নয়। কুরআন গোটা কাণ্ডটাকে যুলুমের খাতায় তোলে, আর তকমাটা ফেলে সেই কাজের উপর, যাদের অপবাদ দেওয়া হলো সেই মানুষের উপর নয়।"
          },
          {
            "en": "This must be said plainly. This verse speaks only of what it names: the slander of a particular group of Makkan chiefs against the Prophet in his own lifetime. It licenses nothing against any living person or community, and passes no verdict on anyone alive today. To read it as a warrant to brand this or that present-day group as the wrongdoers of the verse is to misuse it. It is a mirror held up to the reader's own listening, not a charge sheet to hand to someone else.",
            "bn": "কথাটা স্পষ্ট করে বলা দরকার। এ আয়াত একটি নির্দিষ্ট ঘটনার কথা বলে: নবীর জীবদ্দশায় মক্কার একদল নেতা তাঁর বিরুদ্ধে যে অপবাদ ছড়িয়েছিল। আয়াতটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না, আজ বেঁচে থাকা কারও ব্যাপারে কোনো রায়ও দেয় না। কেউ যদি একে আজকের এই বা ওই দলকে আয়াতের ‘জালিম’ বলে দাগানোর সনদ বানায়, সে আয়াতের অপব্যবহার করে। এ আয়াত পাঠকের সামনে ধরা এক আয়না, যাতে সে নিজের শোনাটা দেখে; অন্যের হাতে ধরিয়ে দেওয়ার অভিযোগপত্র নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Can Magic Touch a Prophet?",
          "bn": "নবীকে কি জাদু ছুঁতে পারে?"
        },
        "p": [
          {
            "en": "The charge of being bewitched raises an old question, and Ma'arif al-Qur'an takes it up: can magic affect a prophet at all? Its answer, drawing on Bayan al-Qur'an and Mufti Taqi Usmani, is careful. A prophet shares human vulnerabilities — he can be wounded, run a fever, feel pain — and magic, working through physical causes, could touch his body in the same way. But the disbelievers here meant something else entirely: that he was deranged, his message the raving of a broken mind. That, Ma'arif stresses, was impossible, and it is that claim the Qur'an refutes.",
            "bn": "যাদুগ্রস্ত বলার অভিযোগ একটা পুরনো প্রশ্ন সামনে আনে, আর মাআরিফুল কুরআন সে প্রশ্নের উত্তর দিয়েছে: জাদু কি আদৌ কোনো নবীর উপর প্রভাব ফেলতে পারে? বায়ানুল কুরআন ও মুফতি তাকি উসমানির কথার ভিত্তিতে দেওয়া উত্তরটি সতর্ক। নবীও মানুষ হিসেবে দুর্বলতার শিকার হতে পারেন: আহত হতে পারেন, জ্বরে ভুগতে পারেন, ব্যথা পেতে পারেন। জাদুও যেহেতু দৈহিক কারণের মাধ্যমে কাজ করে, তাই একইভাবে তা তাঁর শরীরে প্রভাব ফেলতে পারে। কিন্তু এখানে কাফিররা বোঝাতে চেয়েছিল একেবারে অন্য কিছু: তিনি পাগল, তাঁর বাণী বিকৃত মনের প্রলাপ। মাআরিফ জোর দিয়ে বলে, এটা ছিল অসম্ভব, আর কুরআন এই দাবিটাকেই খণ্ডন করে।"
          },
          {
            "en": "Ma'arif adds that a hadith does record the Prophet being affected by magic on a certain occasion — but, it explains, that touched only his body and never his prophetic function, so it does not concede the disbelievers' insult. Beyond this, none of the tafsirs consulted attaches a sound, verse-specific hadith to this ayah; the vivid scene of the night listening comes through the Sira, not a graded chain. Where there is no sound narration to add, the honest thing is to say so and let the verse speak.",
            "bn": "মাআরিফ আরও বলে, একটি হাদিসে অবশ্য আছে যে এক সময় নবী জাদুতে আক্রান্ত হয়েছিলেন। তবে এর ব্যাখ্যা হলো, তা কেবল তাঁর শরীর ছুঁয়েছিল, তাঁর নবুওয়াতের দায়িত্বে কখনো হাত দেয়নি; তাই এতে কাফিরদের অপবাদ মেনে নেওয়া হয় না। এর বাইরে, যেসব তাফসির দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে নির্দিষ্টভাবে জড়িত কোনো সহিহ হাদিস আনেনি। রাতে লুকিয়ে শোনার সেই জীবন্ত দৃশ্য এসেছে সিরাত থেকে, মান যাচাই করা কোনো সনদ থেকে নয়। যোগ করার মতো সহিহ বর্ণনা যেখানে নেই, সেখানে সৎ কাজ হলো সেটা খোলাখুলি বলা, আর আয়াতকেই কথা বলতে দেওয়া।"
          },
          {
            "en": "For the reader, the verse turns the question inward. Allah is most-knowing not merely of what is whispered in private but of how we listen — the posture of the heart as the words arrive. It is possible to attend a lecture, a recitation, a sincere warning, already armed with the label that will let us set it aside. The verse that follows, 17:48, will marvel at the comparisons they coined and where those led them; here, the summons is simpler: examine why you bent your ear.",
            "bn": "পাঠকের জন্য আয়াতটি প্রশ্নটাকে নিজের দিকে ঘুরিয়ে দেয়। গোপনে কী কানাকানি হলো, আল্লাহ শুধু সেটাই ভালো জানেন না; তিনি ভালো জানেন আমরা কীভাবে শুনি, কথা কানে আসার মুহূর্তে অন্তর কোন ভঙ্গিতে থাকে। এমন হতেই পারে যে আমরা কোনো বয়ান, তিলাওয়াত বা আন্তরিক নসিহত শুনতে বসেছি, আর হাতে আগে থেকেই একটা তকমা তৈরি, যা দিয়ে কথাটা একপাশে সরিয়ে রাখা যাবে। পরের আয়াত, ১৭:৪৮, বিস্ময় প্রকাশ করবে তারা কী সব উপমা বানিয়েছিল আর তা তাদের কোথায় নিয়ে গেল। এখানে ডাকটা সহজ: নিজেকে জিজ্ঞেস করুন, কেন কান পেতেছিলেন।"
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
            "bn": "আয়াতের শুরুতে আল্লাহ তাঁর নবী ﷺ-এর মাধ্যমে কথা বলছেন এমন একদল মানুষ সম্পর্কে, যাদের তিনি নিজের বলে ডাকেন: ওয়া কুল লিইবাদী, ‘আমার বান্দাদের বলে দাও।’ ঠিক আগের আয়াতগুলোয় মক্কার বিদ্রূপকারীদের কথা এসেছে। তারা নবী ﷺ-কে বলত যাদুগ্রস্ত লোক (১৭:৪৭), আর পুনরুত্থানের কথাকেই উপহাস করত (১৭:৪৯)। সেই হইচইয়ের মাঝে আল্লাহ ফেরেন ঈমানদারদের দিকে, আর কথা বলার ধরন নিয়ে তাদের একটিই নির্দেশ দেন। তিনি তাদের হাতে আরও ধারালো জবাব তুলে দেন না। তিনি বলেন, সবচেয়ে সুন্দর কথাটা বলো।"
          },
          {
            "en": "That He calls them ʿibādī, My servants, is itself part of the lesson. As-Saʿdi reads the whole command as a mark of Allah's gentleness toward His servants: He is directing them to the finest character, the finest deeds and the finest words — the very things, as-Saʿdi says, that earn happiness in this world and the next. The instruction is not a restraint fastened on them from outside. It is a gift handed to people He has already claimed as His own, and the shape of the gift is a better way of speaking.",
            "bn": "তিনি যে তাদের ‘আমার বান্দা’ বলে ডাকেন, সেটাও শিক্ষার একটা অংশ। সা'দী গোটা নির্দেশটিকেই দেখেন বান্দাদের প্রতি আল্লাহর কোমলতার চিহ্ন হিসেবে। তিনি তাদের পথ দেখাচ্ছেন সবচেয়ে সুন্দর চরিত্র, সবচেয়ে সুন্দর আমল আর সবচেয়ে সুন্দর কথার দিকে। সা'দী বলেন, এই জিনিসগুলোই দুনিয়া ও আখিরাতে সুখ এনে দেয়। এ নির্দেশ বাইরে থেকে চাপিয়ে দেওয়া কোনো বাঁধন নয়। এ যেন এক উপহার, যাদের তিনি আগেই নিজের বলে নিয়েছেন তাদের হাতে তুলে দেওয়া, আর সেই উপহারের রূপ হলো কথা বলার এক সুন্দরতর ঢং।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Is Best",
          "bn": "যে কথা সবচেয়ে সুন্দর"
        },
        "p": [
          {
            "en": "The phrase is spare: allatī hiya aḥsan, \"that which is best.\" At-Tabari fills in the noun it leaves out — Allah tells the Prophet ﷺ to instruct His servants that they should say to one another the best of speech and address. He quotes al-Hasan al-Basri on what that looks like in practice: a man does not answer like with like; where he was insulted, he says instead, \"May Allah have mercy on you, may Allah forgive you.\" The best word, on this reading, is not the equal-and-opposite word. It is the one that refuses to trade.",
            "bn": "শব্দগুচ্ছটি খুবই সংক্ষিপ্ত: আল্লাতী হিয়া আহসান, ‘যা সবচেয়ে উত্তম।’ এখানে যে বিশেষ্যটি উহ্য, তাবারী তা পূরণ করে দেন। আল্লাহ নবী ﷺ-কে বলছেন তাঁর বান্দাদের এই নির্দেশ দিতে যে, তারা যেন একে অপরকে সবচেয়ে সুন্দর কথা বলে, সবচেয়ে সুন্দরভাবে সম্বোধন করে। বাস্তবে এর চেহারা কেমন, তা বোঝাতে তিনি হাসান বসরীর কথা আনেন: মানুষটি জবাবে একই রকম কথা ফিরিয়ে দেয় না। যেখানে তাকে গালি দেওয়া হয়েছে, সেখানে সে বরং বলে, ‘আল্লাহ আপনার প্রতি রহম করুন, আল্লাহ আপনাকে মাফ করুন।’ এই ব্যাখ্যায় সবচেয়ে সুন্দর কথা মানে সমান ওজনের পাল্টা কথা নয়। এ সেই কথা, যা পাল্টাপাল্টির খেলায় নামতেই রাজি নয়।"
          },
          {
            "en": "As-Saʿdi widens the frame. For him, \"that which is best\" reaches every kind of speech that draws a person nearer to Allah: recitation, remembrance, teaching, enjoining good and forbidding wrong, and gentle, kindly words to people of every rank and station. He adds a rule for the borderline case — when the choice lies between two good things and both cannot be said, prefer the better of the two. Good speech, he writes, calls to every beautiful trait and righteous deed; for whoever masters his tongue has, in effect, mastered his whole affair.",
            "bn": "সা'দী পরিসরটা আরও বড় করেন। তাঁর কাছে ‘যা সবচেয়ে উত্তম’ বলতে বোঝায় এমন সব কথা, যা মানুষকে আল্লাহর কাছে নিয়ে যায়: তিলাওয়াত, জিকির, ইলম শেখানো, সৎকাজের আদেশ ও অসৎকাজে নিষেধ, আর ছোট-বড় সব মানুষের সঙ্গে নরম, কোমল কথা। দোটানার ক্ষেত্রের জন্য তিনি একটা নিয়মও দেন: দুটি ভালো কথার মধ্যে একটি বেছে নিতে হলে, আর দুটো একসঙ্গে বলা না গেলে, যেটা বেশি ভালো সেটাই বলবে। সা'দী লেখেন, সুন্দর কথা প্রতিটি সুন্দর গুণ আর নেক আমলের দিকে ডাকে; কারণ যে নিজের জিভ বশে আনে, সে যেন নিজের সব কাজই বশে আনে।"
          },
          {
            "en": "Al-Baghawi gathers still more of the range. Some, he reports, took \"that which is best\" to mean the best trait of character; others took \"the best\" to be the word of sincerity itself, lā ilāha illā Allāh — the finest word a tongue can form. Al-Qurtubi records a reading in which the address is to people who admit that Allah created them yet still worship idols: let them say the best word, the word of oneness and the acknowledgment of prophethood. The single open phrase turns out to hold a whole scale of good speech.",
            "bn": "বাগাভী এই পরিসরের আরও দিক জড়ো করেন। তিনি জানান, কেউ কেউ ‘যা সবচেয়ে উত্তম’ বলতে বুঝেছেন সবচেয়ে সুন্দর চারিত্রিক গুণ; আবার কেউ ‘সবচেয়ে উত্তম’ বলতে বুঝেছেন খাঁটি তাওহিদের বাক্যটিকেই, লা ইলাহা ইল্লাল্লাহ, জিভে উচ্চারিত সবচেয়ে সুন্দর কথা। কুরতুবী এমন এক ব্যাখ্যাও আনেন, যেখানে সম্বোধনটি সেই লোকদের প্রতি, যারা স্বীকার করে আল্লাহ তাদের সৃষ্টি করেছেন, অথচ মূর্তির পূজা করে চলে: তারা যেন সবচেয়ে সুন্দর কথাটা বলে, অর্থাৎ তাওহিদের কথা আর নবুয়তের স্বীকৃতি। এভাবে একটিমাত্র খোলা শব্দগুচ্ছের ভেতরেই ধরা পড়ে সুন্দর কথার গোটা এক বিস্তার।"
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
            "bn": "এই সুন্দর কথা কার প্রাপ্য, তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান, আর মতভেদটাকে মতভেদ হিসেবেই রাখা ভালো। বাগাভী কালবীর সূত্রে জানান, মুশরিকরা মুসলিমদের কষ্ট দিচ্ছিল, আর মুসলিমরা তা নবী ﷺ-এর কাছে নালিশ করে। তখন আয়াতটি মুমিনদের বলে কাফিরদের সাথে ‘যা সবচেয়ে উত্তম’ তা-ই বলতে, তাদের মূর্খতার বদলা একই রকমে না দিতে। এ ব্যাখ্যায় নির্দেশটি ঠিক করে দেয় একজন মুমিন প্রতিপক্ষের সাথে কীভাবে কথা বলবে। এ হলো দাওয়াতের প্রসঙ্গ, যে বার্তা প্রত্যাখ্যান করে আর উসকে দেয় তার সাথে বাদানুবাদের প্রসঙ্গ।"
          },
          {
            "en": "Al-Qurtubi records that reading and several like it, including one that ties the verse to disputing the idolaters about tawhid — as in the warning of 6:108 not to insult the gods they call upon, lest they insult Allah in return out of ignorance. But al-Qurtubi then names a second group who held that the verse addresses the believers among themselves in particular: good manners, softened speech, a lowered wing, and the casting-off of Satan's promptings. He cites the Prophet's words ﷺ, \"Be, O servants of Allah, brothers,\" calls this the best of the readings, and holds the verse to be muḥkam, firm and in force.",
            "bn": "কুরতুবী এই ব্যাখ্যা আর এর মতো আরও কয়েকটি লিপিবদ্ধ করেন, যার একটি আয়াতটিকে জুড়ে দেয় তাওহিদ নিয়ে মূর্তিপূজকদের সাথে বিতর্কের সাথে। যেমন ৬:১০৮ আয়াতে সতর্ক করা হয়েছে, তারা আল্লাহ ছাড়া যাদের ডাকে তাদের যেন গালি দেওয়া না হয়, নইলে তারা না জেনে পাল্টা আল্লাহকে গালি দেবে। তবে কুরতুবী এরপর দ্বিতীয় একটি দলের নাম করেন, যারা মনে করতেন আয়াতটি বিশেষভাবে মুমিনদের নিজেদের মধ্যেকার আচরণ নিয়ে: সুন্দর আদব, নরম কথা, বিনয়ে নুয়ে থাকা, আর শয়তানের কুমন্ত্রণা ঝেড়ে ফেলা। তিনি নবী ﷺ-এর কথা আনেন, ‘হে আল্লাহর বান্দারা, তোমরা ভাই ভাই হয়ে যাও।’ এই ব্যাখ্যাকেই তিনি সবচেয়ে ভালো বলেন, আর আয়াতটিকে ধরেন মুহকাম, দৃঢ় ও বলবৎ।"
          },
          {
            "en": "Held side by side, the two readings do not cancel — they widen the verse. If it governs speech to an opponent, it disciplines how the message is carried to those who reject it. If it governs speech among believers, it guards the community from turning inward on itself. Al-Qurtubi's own choice was the second, yet nothing in the first is thereby lost. A believer stands to answer for both the word he sends outward and the word he sends to his brother, and the verse, read either way, asks for the better one.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে একটি অন্যটিকে বাতিল করে না, বরং আয়াতটিকে চওড়া করে। এটি যদি প্রতিপক্ষের সাথে কথার নিয়ম হয়, তবে যারা বার্তা প্রত্যাখ্যান করে তাদের কাছে বার্তা পৌঁছানোর ধরনটাকে এটি শৃঙ্খলায় বাঁধে। আর এটি যদি মুমিনদের নিজেদের মধ্যেকার কথার নিয়ম হয়, তবে এটি সমাজকে নিজের ভেতরেই ভেঙে পড়া থেকে রক্ষা করে। কুরতুবীর নিজের পছন্দ ছিল দ্বিতীয়টি, তবু প্রথমটির কিছুই এতে হারায় না। বান্দাকে জবাব দিতে হবে বাইরে পাঠানো কথার জন্যও, ভাইয়ের কাছে পাঠানো কথার জন্যও। আয়াতটি যেভাবেই পড়া হোক, উত্তম কথাটাই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Verse Came Down",
          "bn": "আয়াতটি নাজিলের প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "Several occasions of revelation are reported, and they do not agree. Al-Qurtubi relates — on the authority of ath-Thaʿlabi, al-Mawardi, Ibn ʿAtiyya and al-Wahidi — that the verse came down about ʿUmar ibn al-Khattab (RA): an Arab man insulted him, ʿUmar answered in kind and meant to kill him, and it nearly kindled a fitna, so Allah revealed these words. Ma'arif al-Qur'an carries the same account from al-Qurtubi. A different report, from al-Kalbi, sets the verse at the moment the Muslims asked leave to fight and were told the command to fight had not yet come.",
            "bn": "নাজিলের কয়েকটি প্রেক্ষাপট বর্ণিত হয়েছে, আর সেগুলো একমত নয়। কুরতুবী সালাবী, মাওয়ারদী, ইবন আতিয়্যা ও ওয়াহিদীর সূত্রে বর্ণনা করেন যে, আয়াতটি নাজিল হয়েছিল উমার ইবনুল খাত্তাব (রাঃ)-কে নিয়ে। এক আরব লোক তাঁকে গালি দেয়, উমার একই রকমে জবাব দেন আর তাকে মেরে ফেলতে চান, যা প্রায় এক ফিতনা বাধিয়ে দিচ্ছিল। তখন আল্লাহ এই কথাগুলো নাজিল করেন। মাআরিফুল কুরআন কুরতুবীর সূত্রে একই ঘটনা আনে। ভিন্ন একটি বর্ণনা, কালবীর সূত্রে, আয়াতটিকে বসায় সেই মুহূর্তে যখন মুসলিমরা যুদ্ধের অনুমতি চেয়েছিল আর তাদের বলা হয়েছিল যুদ্ধের নির্দেশ এখনো আসেনি।"
          },
          {
            "en": "Attached to that second report is a view the texts carry but do not settle. Al-Baghawi, quoting al-Hasan's gloss \"say to him, may Allah guide you,\" adds that \"this was before they were commanded to jihad and fighting,\" and al-Qurtubi preserves the same note. Read as those transmitters read it, the gentle-speech command belonged to a season before fighting the mushrikīn was permitted. It is reported here as their reading, not asserted as the verse's ruling — and al-Qurtubi's own preference, as we saw, was that the verse is firm and speaks to the believers with one another.",
            "bn": "সেই দ্বিতীয় বর্ণনার সাথে জড়ানো আছে এমন এক অভিমত, যা তাফসীরের পাঠ বহন করে কিন্তু চূড়ান্ত করে না। বাগাভী হাসানের ব্যাখ্যা ‘তাকে বলো, আল্লাহ তোমাকে হেদায়েত দিন’ উদ্ধৃত করে জুড়ে দেন, ‘এটা ছিল জিহাদ ও যুদ্ধের নির্দেশ আসার আগের কথা,’ আর কুরতুবীও একই মন্তব্য রেখে দেন। সেই বর্ণনাকারীরা যেভাবে পড়েছেন, সেভাবে দেখলে নরম কথার নির্দেশটি ছিল মুশরিকদের সাথে যুদ্ধের অনুমতির আগের এক সময়ের। এটি এখানে তাঁদের পাঠ হিসেবে বর্ণিত, আয়াতের বিধান হিসেবে দাবি করা নয়। আর কুরতুবীর নিজের পছন্দ, আগেই দেখেছি, ছিল এই যে আয়াতটি দৃঢ় এবং মুমিনদের নিজেদের মধ্যেকার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Foothold in a Quarrel",
          "bn": "ঝগড়ায় শয়তানের পা রাখার ঠাঁই"
        },
        "p": [
          {
            "en": "Then the reason: inna ash-shaytāna yanzaghu baynahum, \"indeed Satan sows discord among them.\" At-Tabari glosses the verb plainly — Satan spoils their dealings with each other, stirring evil up between them. Al-Muyassar spells out what he casts among them: enmity, corruption and quarrelling. The link the verse draws is exact and unsentimental. Harsh speech is not merely unpleasant; it is the seam Satan works at, the point where he pries a conversation apart before the speakers have even noticed the gap opening.",
            "bn": "এরপর কারণটি: ইন্নাশ শাইতানা ইয়ানযাগু বাইনাহুম, ‘নিশ্চয় শয়তান তাদের মাঝে বিভেদ সৃষ্টি করে।’ তাবারী ক্রিয়াটির সোজা অর্থ দেন। শয়তান একে অপরের সাথে তাদের লেনদেন নষ্ট করে দেয়, তাদের মাঝে মন্দকে উসকে তোলে। মুয়াসসার খুলে বলেন সে তাদের মাঝে কী ছড়ায়: দুশমনি, ফাসাদ আর ঝগড়া। আয়াত যে যোগসূত্রটি টানে তা নিখুঁত ও আবেগহীন। কড়া কথা কেবল অপ্রীতিকর নয়, এ হলো সেই সেলাই-রেখা যেখানে শয়তান কাজ করে। বক্তারা ফাঁকটা খুলে যাওয়া টেরও পাওয়ার আগে সে সেখান থেকেই কথাটাকে টেনে ছিঁড়ে ফেলে।"
          },
          {
            "en": "Ibn Kathir traces the sequence. Allah commands the believers to say the best word, he writes, because if they do not, Satan sows discord among them — and the speech \"leads out into action,\" so that evil, dispute and fighting break out. Ma'arif al-Qur'an gives the same mechanism a sharper image: harsh words at the moment of disagreement are a trap door through which Satan pushes people down into mutual strife and disorder. The bad word is not the whole of the harm. It is where the fall begins.",
            "bn": "ইবন কাসীর ধাপগুলো খুলে দেখান। তিনি লেখেন, আল্লাহ মুমিনদের সবচেয়ে সুন্দর কথা বলতে আদেশ করেন, কারণ তা না বললে শয়তান তাদের মাঝে বিভেদ ঢুকিয়ে দেয়। তারপর কথা ‘গড়ায় কাজে’, আর তখন মন্দ, বিবাদ আর মারামারি বেধে যায়। মাআরিফুল কুরআন একই ব্যাপারটা আরও ধারালো ছবিতে বোঝায়: মতভেদের মুহূর্তে কড়া কথা যেন মেঝের এক চোরা দরজা, যেটা দিয়ে শয়তান মানুষকে ঠেলে ফেলে দেয় পরস্পরের ঝগড়া আর বিশৃঙ্খলার গর্তে। খারাপ কথাটাই পুরো ক্ষতি নয়। পতনটা শুরু হয় ওখান থেকেই।"
          },
          {
            "en": "The pronoun matters here. \"Among them,\" baynahum, means among the very servants just addressed; the discord Satan seeks is not out in the wide world but between people who might otherwise have stood as allies. That is why the cure is placed inside their own speech and nowhere else. Close the seam with a kind word and there is nothing for him to pry at; leave it open with a cutting word, and the verse says plainly who it is that steps through the gap.",
            "bn": "এখানে সর্বনামটি গুরুত্বপূর্ণ। ‘তাদের মাঝে,’ বাইনাহুম, মানে ঠিক যে বান্দাদের এইমাত্র সম্বোধন করা হলো তাদের মাঝেই। শয়তান যে বিভেদ খোঁজে তা দূরের বিশাল দুনিয়ায় নয়, বরং এমন মানুষদের মাঝে যারা নইলে পরস্পরের সঙ্গী হয়ে দাঁড়াতে পারত। এ কারণেই এর প্রতিকার রাখা হয়েছে তাদের নিজেদের কথার ভেতরেই, আর কোথাও নয়। নরম কথায় সেলাই বন্ধ করে দিলে শয়তানের টানার মতো কিছু থাকে না। কড়া কথায় খোলা রাখলে আয়াত সাফ বলে দেয়, ফাঁক দিয়ে কে ঢোকে।"
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
            "bn": "ফাঁকটা যে কত ছোট হতে পারে, ইবন কাসীর তা দেখিয়েছেন। ঠিক এই আয়াতের ব্যাখ্যায় তিনি আবু হুরায়রা (রাঃ)-এর বর্ণনাটি এনেছেন: নবী ﷺ বলেছেন, কেউ যেন তার ভাইয়ের দিকে অস্ত্র তাক না করে, ‘কারণ সে জানে না, হয়তো শয়তান তার হাত থেকে ওটা ফসকে দেবে, আর সে জাহান্নামের এক গর্তে গিয়ে পড়বে।’ ইবন কাসীর এটি ইমাম আহমাদের সূত্রে এনেছেন, আর জানিয়েছেন যে বুখারী ও মুসলিম দুজনেই আবদুর রাযযাকের সূত্রে এটি বর্ণনা করেছেন। বর্ণনাটি সহীহ, মুত্তাফাকুন আলাইহি। এখানে সহীহ বুখারীর শব্দই দেওয়া হলো।"
          },
          {
            "en": "The gesture in the hadith is not even speech — it is a raised weapon between two people who may only be playing. Yet the same enemy the verse named is at work: he needs only a hand already lifted and a temper already warm, and he turns a motion into a wound. If a pointed blade is that dangerous, the pointed word — which is what the verse is actually about — asks for at least the same care. Both hand Satan the very foothold the verse warned would let him in.",
            "bn": "হাদিসে যে কাজটার কথা, সেটা তো কথাও নয়। দুজন মানুষ, হয়তো নিছক খেলার ছলে, একজন আরেকজনের দিকে অস্ত্র তুলেছে। তবু আয়াত যে দুশমনের নাম নিয়েছে, সে-ই এখানে কাজ করছে। তার দরকার শুধু আগে থেকে ওঠানো একটা হাত আর আগে থেকে গরম হয়ে থাকা মেজাজ; তাতেই সে সামান্য এক নড়াচড়াকে জখমে পরিণত করে। তাক-করা অস্ত্র যদি এতটা বিপজ্জনক হয়, তবে তাক-করা কথা, আয়াত আসলে যার কথা বলছে, অন্তত ততটুকু সাবধানতা দাবি করে। দুটোই শয়তানের হাতে ঠিক সেই পা রাখার জায়গা তুলে দেয়, যেটা দিয়ে সে ঢুকে পড়বে বলে আয়াত সাবধান করেছিল।"
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
            "bn": "সা'দী চিকিৎসাটা আয়াত থেকেই বের করে আনেন। তিনি লেখেন, শয়তানই বান্দাদের আসল দুশমন; লড়াই হওয়া উচিত তার সঙ্গেই। তাই প্রতিকার হলো, সে যে কুৎসিত কথার দিকে উসকে দেয় তাতে তার কথা না শোনা, আর একে অপরের সঙ্গে নরম হওয়া, যতক্ষণ না মাঝখানে উসকানি দেওয়া শয়তান দমে যায়। মতভেদের ওপাশে দাঁড়ানো ভাইটি নিশানা নয়, শয়তান দুজনের মাঝে ঝামেলা বাধিয়ে দিলেও না। সা'দী বলেন, করণীয় হলো দৃঢ় মনে আসল দুশমনের বিরুদ্ধে ঘুরে দাঁড়ানো, আর নিজের সেই নফসকে বশে আনা, যার ভেতর দিয়ে শয়তান ঢোকার পথ পায়।"
          },
          {
            "en": "Al-Qurtubi closes with a related report. A group sat remembering Allah, and Satan came to break up their gathering but the angels held him off; so he went to people sitting nearby who were not remembering Allah, and set them against one another until they quarrelled and came to blows. The ones remembering Allah then rose to reconcile them — and at that, the report says, Satan rejoiced. Al-Qurtubi offers it as one glimpse of the enemy's work; it is related as a narration and given without a grading, so it is carried here as illustration, not as proof.",
            "bn": "কুরতুবী শেষ করেন এরই কাছাকাছি একটি বর্ণনা দিয়ে। একদল লোক বসে আল্লাহর জিকির করছিল। শয়তান এল তাদের মজলিস ভাঙতে, কিন্তু ফেরেশতারা তাকে ঠেকিয়ে দিলেন। তখন সে গেল কাছেই বসা কিছু লোকের কাছে, যারা জিকির করছিল না। সে তাদের একে অপরের বিরুদ্ধে লাগিয়ে দিল, শেষে তারা ঝগড়া করে হাতাহাতিতে জড়িয়ে পড়ল। তখন জিকিরকারীরা উঠে গেল তাদের মিটমাট করাতে, আর বর্ণনায় আছে, এতেই শয়তান খুশি হলো। কুরতুবী এটি এনেছেন দুশমনের কাজের এক ঝলক হিসেবে। এটি নিছক একটি বর্ণনা, এর মান সম্পর্কে কিছু বলা হয়নি; তাই এখানে এটি দলিল হিসেবে নয়, দৃষ্টান্ত হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing the Kinder Word",
          "bn": "নরম কথাটাই বেছে নেওয়া"
        },
        "p": [
          {
            "en": "Put together, the verse is unusually practical. It does not ask the believer to feel differently about an opponent; it asks him to choose a different word — the better of the two that rise to the lips — and it explains what is at stake if he does not. Every commentator here, whether he read the verse as governing speech to disbelievers or speech among believers, agreed on the core instruction: the kindest true word, especially where feeling runs high and the pull to answer in kind is strongest.",
            "bn": "সব মিলিয়ে দেখলে আয়াতটি আশ্চর্য রকম বাস্তব। প্রতিপক্ষের প্রতি মনের অনুভূতি বদলাতে আয়াত মুমিনকে বলে না; বলে অন্য একটা কথা বেছে নিতে। মুখে যে দুটো কথা চলে আসে, তার মধ্যে ভালোটা। আর না বাছলে কী হারানোর আশঙ্কা, তাও বুঝিয়ে দেয়। এখানে যত তাফসীরকারের কথা এসেছে, কেউ আয়াতটিকে কাফিরদের সঙ্গে কথা বলার নিয়ম হিসেবে পড়ুন বা মুমিনদের নিজেদের মধ্যে কথার নিয়ম হিসেবে, মূল নির্দেশে সবাই একমত: সত্য কথাগুলোর মধ্যে যেটা সবচেয়ে নরম, সেটাই বলা। বিশেষ করে যখন মেজাজ চড়ে থাকে, আর পাল্টা জবাব দেওয়ার টান সবচেয়ে বেশি।"
          },
          {
            "en": "And the verse locates the enemy for us, so we do not mistake him. It is not the person disagreeing, however wrongly, but the one who profits from the disagreement. That reframing is itself a mercy: it lifts the heat off the human being in front of us and sets it where it belongs. What Allah then knows of each servant, and how He deals with them, the surah takes up in the words that follow. Here the servant is handed only his own task, and it is a small, daily one — the better word.",
            "bn": "আয়াতটি দুশমনকেও চিনিয়ে দেয়, যাতে আমরা ভুল মানুষকে দুশমন না ভাবি। যে দ্বিমত করছে, সে যত ভুলই করুক, সে দুশমন নয়; দুশমন সেই, যে এই দ্বিমত থেকে ফায়দা লোটে। এভাবে দেখতে শেখাটাই এক রহমত। সামনের মানুষটার ওপর থেকে রাগটা সরে যায়, গিয়ে পড়ে যেখানে তার পড়ার কথা। প্রত্যেক বান্দা সম্পর্কে আল্লাহ কী জানেন আর তাদের সঙ্গে তিনি কেমন আচরণ করেন, সূরাটি সে কথা বলে এর পরের অংশে। এখানে বান্দার হাতে শুধু তার নিজের কাজটুকু দেওয়া হয়েছে, আর সে কাজ ছোট, রোজকার: ভালো কথাটা বলা।"
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
            "bn": "আয়াতটি শুরু হয় এক স্মরণের ভেতরে আরেক স্মরণ দিয়ে: 'যখন আমি তোমাকে বলেছিলাম, তোমার রব মানুষদের ঘিরে রেখেছেন।' তাবারী এই ঘিরে রাখাকে বোঝেন কুদরত অর্থে: মানুষ আল্লাহর মুঠোয়, তাঁর ইচ্ছার বাইরে এক পা-ও যেতে পারে না। তাঁর মতে এতে নবী ﷺ-এর প্রতি তাগিদ আছে: কাউকে পরোয়া না করে বার্তা পৌঁছে দেওয়ার। সাদী অর্থটা আরও চওড়া করেন: ইলম আর কুদরত দুটোই। যিনি সব মানুষকে ঘিরে রেখেছেন, তাঁর কাছ থেকে পালানোর কোনো আশ্রয় নেই, লুকানোর কোনো ঠাঁই নেই।"
          },
          {
            "en": "The commentators do not all press the word the same way. Al-Kalbi, cited by al-Qurtubi, makes it encompassing in knowledge; al-Hasan, Urwah and Qatadah make it protection — He has fenced the Arabs off from killing you until the message is delivered. Ibn Abbas, in al-Qurtubi's report, takes 'the people' as the people of Mecca and the encompassing as their coming destruction, fulfilled at Badr and the Conquest. One phrase wears several true faces: reassurance to the Messenger, warning to the deniers, and a wall around a life that still had work to finish.",
            "bn": "শব্দটির অর্থ সব তাফসীরকার একভাবে ধরেন না। কুরতুবী কালবীর মত উদ্ধৃত করেন: এ হলো ইলম দিয়ে ঘিরে রাখা। হাসান, উরওয়া ও কাতাদার মতে এর অর্থ হিফাযত: বার্তা পৌঁছানো শেষ না হওয়া পর্যন্ত আল্লাহ আরবদের হাত থেকে তোমাকে আগলে রেখেছেন, তারা তোমাকে হত্যা করতে পারবে না। কুরতুবীর বর্ণনায় ইবন আব্বাস 'মানুষ' বলতে বোঝেন মক্কার লোকদের, আর ঘিরে রাখা মানে তাদের আসন্ন ধ্বংস, যা বদরে আর মক্কা বিজয়ে সত্য হয়েছে। একটি কথার কয়েকটি সত্য রূপ: রাসূলের জন্য সান্ত্বনা, অস্বীকারকারীদের জন্য হুঁশিয়ারি, আর এমন এক জীবনের চারপাশে প্রাচীর, যার কাজ তখনো শেষ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sight That Sifted",
          "bn": "যে দৃশ্য মানুষকে ছেঁকে নিল"
        },
        "p": [
          {
            "en": "Then the pivot: 'We did not make the sight which We showed you except as a trial for the people.' The overwhelming majority of the early authorities — Ibn Abbas, and after him Aisha, Muawiyah, al-Hasan, Mujahid, Qatadah, Saeed ibn Jubayr and others named by al-Qurtubi — read this sight as what the Prophet ﷺ was shown on the Night Journey, when he was carried to the Farthest Mosque. At-Tabari calls this the soundest of the readings. The weight of the verse falls not on the journey itself but on what the telling of it did to those who heard.",
            "bn": "এরপর আয়াতের মোড়: 'আমি তোমাকে যে দৃশ্য দেখিয়েছি, তা কেবল মানুষের জন্য পরীক্ষা হিসেবেই রেখেছি।' পূর্বসূরি আলিমদের সিংহভাগ এই দৃশ্যকে বুঝেছেন মিরাজের রাতের দেখা হিসেবে, যে রাতে নবী ﷺ-কে বায়তুল মুকাদ্দাস পর্যন্ত নিয়ে যাওয়া হয়েছিল। এঁদের মধ্যে আছেন ইবন আব্বাস, তাঁর পরে আয়েশা, মুআবিয়া, হাসান, মুজাহিদ, কাতাদা, সাঈদ ইবন জুবায়ের, আরও অনেকে, যাঁদের নাম কুরতুবী উল্লেখ করেছেন। তাবারী বলেন, সব মতের মধ্যে এটিই সবচেয়ে সঠিক। তবে আয়াতের জোর সফরটার ওপর নয়; সফরের খবর যারা শুনল, তাদের ওপর সেই খবর কী করল, তার ওপর।"
          },
          {
            "en": "A fitnah, in the Arabic of the tafsir, is a test that separates. Ibn Kathir explains that when the news reached Mecca, some who had been on the truth could not make their hearts and minds hold it, so they denied what their knowledge could not encompass and fell away, while Allah made the same news a firmness and certainty for others. Ma'arif al-Qur'an lists the senses the word can carry — going astray, trial, upheaval — and settles, with the early authorities, on the trial of apostasy that the report provoked.",
            "bn": "তাফসীরের ভাষায় ফিতনা মানে এমন পরীক্ষা, যা মানুষকে আলাদা করে ফেলে। ইবন কাসীর বলেন, খবরটা মক্কায় পৌঁছালে হকের ওপর থাকা কিছু লোক তা মনে আর মাথায় ধরে রাখতে পারল না। যা তাদের জ্ঞানে কুলাল না, তা তারা অস্বীকার করে সরে পড়ল। অথচ সেই একই খবরকে আল্লাহ অন্যদের জন্য করে দিলেন দৃঢ়তা আর ইয়াকীন। মাআরিফুল কুরআন শব্দটির কয়েকটি অর্থ উল্লেখ করে: পথভ্রষ্টতা, পরীক্ষা, গোলযোগ। তারপর পূর্বসূরিদের সঙ্গে একমত হয়ে বলে, এখানে ফিতনা মানে মুরতাদ হয়ে যাওয়ার সেই পরীক্ষা, যা খবরটা জাগিয়ে তুলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Vision, Not a Dream",
          "bn": "স্বপ্ন নয়, চোখে দেখা"
        },
        "p": [
          {
            "en": "One reading had to be closed off. Some, al-Qurtubi notes, took the 'sight' to be a dream in sleep. He answers that the verse itself rules this out: a dream carries no trial in it, and no one would think to deny another man's dream. Ma'arif al-Qur'an makes the same argument from the wording — had it been a dream, there was no reason for anyone to apostatise, since dreams are dreams that all people see. The word was chosen, it says, precisely to signal a marvel witnessed while awake.",
            "bn": "একটি ব্যাখ্যার পথ বন্ধ করা দরকার ছিল। কুরতুবী জানান, কেউ কেউ এই 'দৃশ্য'-কে ঘুমের স্বপ্ন ধরেছিলেন। তাঁর জবাব, আয়াত নিজেই এ কথা নাকচ করে দেয়। স্বপ্নে তো কোনো পরীক্ষা নেই, আর অন্যের স্বপ্নকে কেউ অস্বীকার করতে বসে না। মাআরিফুল কুরআন শব্দ থেকেই একই যুক্তি দেয়: স্বপ্ন হলে কারও মুরতাদ হওয়ার কোনো কারণ ছিল না, স্বপ্ন তো সবাই দেখে। তার মতে, এই শব্দটি এসেছেই জেগে থেকে দেখা এক বিস্ময় বোঝাতে।"
          },
          {
            "en": "Two further readings are recorded and then weighed down. Al-Baghawi and a narration from Ibn Abbas tie the sight to the Prophet's ﷺ true vision of entering Mecca, fulfilled after Hudaybiyyah; al-Qurtubi marks this weak, since the surah is Meccan while that vision belonged to Medina. A third narration, from Sahl ibn Saad and others, has the Prophet ﷺ shown certain men leaping upon his pulpit. Ibn Atiyyah found this reading questionable, and it will need its own careful handling below.",
            "bn": "আরও দুটি ব্যাখ্যা তাফসীরে উল্লেখ আছে, তবে বিচারের পাল্লায় সেগুলো হালকা। বাগাভী আর ইবন আব্বাসের একটি বর্ণনা এই দৃশ্যকে মিলিয়েছে নবী ﷺ-এর সেই সত্য স্বপ্নের সঙ্গে, যাতে তিনি নিজেকে মক্কায় প্রবেশ করতে দেখেছিলেন, আর হুদায়বিয়ার পরে তা সত্য হয়। কুরতুবী একে দুর্বল বলেন, কারণ সূরাটি মক্কী, অথচ সেই স্বপ্ন মদীনার সময়ের। তৃতীয় একটি বর্ণনা এসেছে সাহল ইবন সাদ প্রমুখ থেকে: নবী ﷺ-কে দেখানো হয়েছিল, কিছু লোক তাঁর মিম্বারে লাফিয়ে উঠছে। ইবন আতিয়া এই ব্যাখ্যাকে প্রশ্নবিদ্ধ মনে করেছেন; সামনে এটি নিয়ে আলাদা করে সাবধানে কথা বলতে হবে।"
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
            "bn": "আয়াত এই দৃশ্যের সঙ্গে জুড়ে দেয় 'কুরআনে উল্লেখিত অভিশপ্ত গাছ'। বুখারীর বর্ণনায় ইবন আব্বাস, আর তাঁর পথ ধরে পরের ইমামরা, গাছটিকে সোজাসুজি চিনিয়ে দেন: এ হলো জাক্কুম গাছ। সাদীর ভাষায় গাছটি 'জাহান্নামের তলদেশে জন্মায়'। তাবারী তাফসীরের ইমামদের ইজমার কথা টেনে এই মতকেই সঠিক বলে গ্রহণ করেন। আগুনের ভেতরে বেঁচে থাকা গাছের কথা শোনানোই ছিল বিশ্বাসের ওপর এক চাপ। মনকে আরও একটি জিনিস মেনে নিতে বলা হলো, শুধু রাসূলের কথার ওপর ভরসা করে।"
          },
          {
            "en": "The narration sits directly on the verse. Al-Bukhari records from Ibn Abbas, on the words 'the vision which We showed you,' that 'it was an actual eyewitness which was shown to Allah's Messenger ﷺ during the night he was taken on a journey; and the cursed tree is the tree of Az-Zaqqum.' At-Tirmidhi records the same report and graded it sound. It is the one hadith the commentators lean on here, and it fixes both halves of the verse at once: a waking sight, and a real tree named in the Qur'an.",
            "bn": "বর্ণনাটি সরাসরি এই আয়াত নিয়েই। বুখারী ইবন আব্বাস থেকে বর্ণনা করেন, 'আমি তোমাকে যে দৃশ্য দেখিয়েছি' কথাটি সম্পর্কে তিনি বলেছেন: 'এ ছিল চোখে দেখা বাস্তব দৃশ্য, যা রাসূলুল্লাহ ﷺ-কে দেখানো হয়েছিল সেই রাতে, যে রাতে তাঁকে মিরাজের সফরে নেওয়া হয়; আর অভিশপ্ত গাছ হলো জাক্কুম গাছ।' তিরমিযীও একই বর্ণনা এনেছেন এবং একে সহীহ বলেছেন। এখানে তাফসীরকারেরা এই একটি হাদিসের ওপরই ভর করেন, আর এটি আয়াতের দুই অংশই একসঙ্গে পাকা করে দেয়: জেগে থেকে দেখা দৃশ্য, আর কুরআনে নাম নেওয়া এক সত্যিকারের গাছ।"
          },
          {
            "en": "A careful point about the word 'accursed.' Al-Qurtubi observes that the Qur'an nowhere pronounces a curse on this tree as such; rather Allah cursed the disbelievers who eat from it, so the phrase means the tree whose eaters are accursed. He and al-Baghawi add that the Arabs called any harmful, repugnant food 'accursed.' A minority reading, related from Ibn Abbas, took the tree to be the kashuth, a creeper that winds over trees and dries them out; the majority stayed with Zaqqum.",
            "bn": "'অভিশপ্ত' শব্দটি নিয়ে একটি সূক্ষ্ম কথা আছে। কুরতুবী খেয়াল করিয়ে দেন, কুরআন কোথাও এই গাছটিকে সরাসরি অভিশাপ দেয়নি। অভিশাপ দিয়েছেন আল্লাহ সেই কাফিরদের, যারা এ গাছ থেকে খাবে। তাই 'অভিশপ্ত গাছ' মানে সেই গাছ, যা খায় অভিশপ্তরা। তিনি ও বাগাভী আরও বলেন, আরবরা যেকোনো ক্ষতিকর, জঘন্য খাবারকে 'অভিশপ্ত' বলত। ইবন আব্বাস থেকে বর্ণিত অল্প কয়েকজনের একটি মত গাছটিকে কাশূস ধরে, এক ধরনের লতা, যা গাছ পেঁচিয়ে ধরে তাকে শুকিয়ে ফেলে। তবে অধিকাংশ আলিম জাক্কুমের মতেই থেকেছেন।"
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
            "bn": "একটা গাছ মানুষকে দুই ভাগ করবে কেন? উত্তর আছে অস্বীকারকারীরা খবরটা যেভাবে নিয়েছিল তাতে। বাগাভী ও তাবারী লিখেছেন, জাক্কুমের ভয় দেখানো হলে আবু জাহল ঠাট্টা করে বলল: মুহাম্মদ তোমাদের এমন আগুনের ভয় দেখায় যা পাথর পর্যন্ত পোড়ায়, আবার বলে তার ভেতরে গাছ জন্মায়, অথচ তোমরা তো জানো আগুন গাছ পুড়িয়ে ফেলে। কুরতুবী একই বিদ্রূপ এনেছেন, সঙ্গে লোকটার পরের কাণ্ডও। সে খেজুর আর মাখন আনিয়ে সঙ্গীদের বলল, 'নাও, এ দিয়ে জাক্কুম খাও।' এভাবে সে সতর্কবাণীকে তামাশা বানিয়ে তার ধার ভোঁতা করতে চাইল।"
          },
          {
            "en": "The mockery had a second mouth. Al-Baghawi names Abdullah ibn az-Zibara, who said, 'Muhammad frightens us with Zaqqum, and we know no Zaqqum but butter and dates' — in the tongue of Yemen, al-Qurtubi explains, that is what the word meant. Both men may have said it. The lesson the commentators draw is not about them alone: a report from the unseen, met by a heart already set against it, becomes an occasion for ridicule, and the ridicule hardens the heart further into what it had chosen.",
            "bn": "বিদ্রূপ এসেছিল আরেকজনের মুখ থেকেও। বাগাভী নাম বলেন আবদুল্লাহ ইবন আয-যিবারার। সে বলেছিল, 'মুহাম্মদ আমাদের জাক্কুমের ভয় দেখায়, অথচ আমরা মাখন আর খেজুর ছাড়া কোনো জাক্কুম চিনি না।' কুরতুবী ব্যাখ্যা করেন, ইয়ামানের ভাষায় শব্দটার অর্থ ছিল এটাই। হয়তো দুজনেই কথাটা বলেছিল। তবে তাফসীরকাররা যে শিক্ষা বের করেন, তা শুধু এ দুজনকে নিয়ে নয়। গায়েবের কোনো খবর যখন আগে থেকেই বিমুখ হয়ে থাকা অন্তরে পৌঁছায়, তখন তা হয়ে ওঠে ঠাট্টার খোরাক। আর সেই ঠাট্টা অন্তরকে তার বেছে নেওয়া পথে আরও কঠিন করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Against the Living",
          "bn": "জীবিত কারও বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "This is where the disputed reading must be handled with care. A narration relates that the Prophet ﷺ was shown certain men — named in some reports as a clan — leaping upon his pulpit, and a few reporters read 'the accursed tree' as a lineage rather than Zaqqum. Ibn Kathir calls this identification odd and weak, and its chain 'very weak,' its narrator abandoned; al-Qurtubi calls it 'a weak, newly-introduced view,' noting the surah is Meccan while the claim would need it to be Medinan, which is not established.",
            "bn": "এবার সেই বিতর্কিত মতটি, যা খুব সাবধানে সামলাতে হয়। একটি বর্ণনায় আছে, নবী ﷺ-কে দেখানো হয়েছিল কিছু লোক তাঁর মিম্বারে লাফিয়ে উঠছে; কোনো কোনো বর্ণনায় তাদের একটি গোত্র বলে উল্লেখ করা হয়েছে। আর অল্প কয়েকজন বর্ণনাকারী 'অভিশপ্ত গাছ' বলতে জাক্কুম নয়, একটি বংশ বুঝেছেন। ইবন কাসীর এভাবে চিহ্নিত করাকে বলেন গরীব ও দুর্বল, এর সনদকে বলেন 'অত্যন্ত দুর্বল', আর এর বর্ণনাকারী পরিত্যক্ত। কুরতুবী একে বলেন 'এক দুর্বল, নতুন গজানো মত'। তিনি মনে করিয়ে দেন, সূরাটি মক্কী, অথচ এ দাবি টিকতে হলে সূরাটিকে মদীনী হতে হয়, আর তা প্রমাণিত নয়।"
          },
          {
            "en": "So this article holds to what the sources establish and refuses what they grade away. The verse names a tree in the Fire and a sight shown to the Prophet ﷺ, and it condemns the deniers who mocked them. It speaks only of what it names and licenses nothing against any living person, family or community. Ibn Kathir and at-Tabari both settled on Zaqqum by the agreement of the authorities; a report about any lineage that the scholars themselves graded weak cannot be turned, in our own voice, into a verdict on anyone alive.",
            "bn": "তাই এই লেখা শুধু সেটুকুই ধরে রাখে, যা সূত্রগুলো দিয়ে প্রমাণিত; আলিমরা যা দুর্বল বলে বাদ দিয়েছেন, তা এখানে নেওয়া হয়নি। আয়াত আগুনের ভেতরের এক গাছের নাম নেয়, নবী ﷺ-কে দেখানো এক দৃশ্যের কথা বলে, আর নিন্দা করে সেই অস্বীকারকারীদের, যারা এ নিয়ে ঠাট্টা করেছিল। আয়াতে যা আছে, আমরা ততটুকুই বলি। জীবিত কোনো মানুষ, পরিবার বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এতে নেই। ইবন কাসীর ও তাবারী দুজনেই ইমামদের ইজমার ভিত্তিতে জাক্কুমের মত গ্রহণ করেছেন। কোনো বংশ নিয়ে যে বর্ণনাকে আলিমরা নিজেরাই দুর্বল বলেছেন, তাকে আমরা নিজের মুখে জীবিত কারও বিরুদ্ধে রায় বানাতে পারি না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Warning Hardens",
          "bn": "হুঁশিয়ারি যখন অন্তর শক্ত করে"
        },
        "p": [
          {
            "en": "The verse ends with a law of the heart: 'We threaten them, but it increases them not except in great transgression.' Ibn Kathir reads the threatening as Allah's warnings of punishment and reckoning, and the increase as the deniers being pushed further into their disbelief and misguidance — and he traces the cause to Allah's forsaking of those who had first forsaken Him. The same sun that softens wax hardens clay; the same warning that melts a yielding heart drives a stubborn heart deeper into what it fled.",
            "bn": "আয়াত শেষ হয় অন্তরের এক নিয়ম দিয়ে: 'আমি তাদের ভয় দেখাই, কিন্তু তাতে তাদের চরম অবাধ্যতাই কেবল বাড়ে।' ইবন কাসীরের মতে এই ভয় দেখানো হলো শাস্তি ও হিসাবের ব্যাপারে আল্লাহর হুঁশিয়ারি, আর বেড়ে যাওয়া মানে অস্বীকারকারীরা কুফর ও গোমরাহির আরও গভীরে চলে যায়। এর কারণও তিনি দেখান: যারা আগে আল্লাহকে ছেড়ে দিয়েছিল, আল্লাহও তাদের ছেড়ে দিয়েছেন। একই রোদ মোমকে নরম করে, আবার কাদামাটিকে শক্ত করে তোলে। একই হুঁশিয়ারি নরম অন্তরকে গলিয়ে দেয়, আর জেদি অন্তরকে আরও গভীরে ঠেলে দেয় সেখানে, যেখানে সে পালিয়ে গিয়েছিল।"
          },
          {
            "en": "As-Sa'di reads the closing words as the furthest reach of a heart in love with evil: warned, and growing only in tyranny and defiance. Yet he finds in the same verse a mercy hidden in restraint. This, he says, is why revelation states the great matters of the unseen in general terms rather than spelling out every overwhelming detail, for minds that have seen nothing like them might have stumbled had they been told in advance. Warning is measured out; it is meant to save, not to break.",
            "bn": "সাদীর মতে আয়াতের শেষ কথাগুলো দেখায়, মন্দকে ভালোবেসে ফেলা অন্তর কতদূর যেতে পারে: তাকে সতর্ক করা হয়, আর সে কেবল জুলুম ও হঠকারিতায় বাড়তে থাকে। তবু একই আয়াতে তিনি সংযমের ভেতরে লুকানো এক রহমতও খুঁজে পান। তিনি বলেন, এ কারণেই ওহি গায়েবের বড় বড় বিষয় সংক্ষেপে বলে, প্রতিটি বিস্ময়কর খুঁটিনাটি খুলে বলে না। যে মন এমন কিছু কখনো দেখেনি, আগেভাগে সব বলে দিলে সে হয়তো হোঁচট খেত। হুঁশিয়ারি দেওয়া হয় মেপে মেপে; উদ্দেশ্য বাঁচানো, ভেঙে দেওয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Hearts, One Report",
          "bn": "এক খবর, দুই হৃদয়"
        },
        "p": [
          {
            "en": "The whole verse turns on a single fact: the same news reached different hearts and sorted them. Al-Qurtubi preserves the image of the other response. When Abu Bakr was told, the morning after the Night Journey, that his companion claimed to have reached Jerusalem and returned in a night, he answered, 'If he said it, he has spoken the truth' — and asked only to have it described. He believed the report on the strength of who carried it, and by that he was named as-Siddiq, the one who affirms the truth.",
            "bn": "গোটা আয়াত একটি সত্যকে ঘিরে: একই খবর ভিন্ন ভিন্ন অন্তরে পৌঁছে তাদের আলাদা করে দিল। অন্য রকম সাড়াটির ছবিও কুরতুবী ধরে রেখেছেন। মিরাজের পরের সকালে আবু বকর (রাঃ)-কে বলা হলো, তাঁর সঙ্গী দাবি করছেন, এক রাতেই তিনি বায়তুল মুকাদ্দাস গিয়ে ফিরে এসেছেন। তিনি বললেন, 'তিনি যদি এ কথা বলে থাকেন, তবে সত্যই বলেছেন।' তারপর শুধু চাইলেন, তিনি যেন সেটার বর্ণনা দেন। কে খবরটা এনেছেন, সেটা দেখেই তিনি তা বিশ্বাস করলেন, আর এ কারণেই তাঁর নাম হলো সিদ্দীক, যিনি সত্যকে সত্য বলে মেনে নেন।"
          },
          {
            "en": "That is the trial the verse leaves with the reader. Revelation still tells us of things the eye has not seen — the Fire, the tree, the scale, the meeting with our Lord. The mind cannot draw them, and it was never asked to. It was asked to trust the Lord who spoke. When the next hard truth arrives and your reason cannot picture it, you stand where those first hearers stood: soften and affirm, or scoff and harden. The sieve is still working, and each of us comes down on a side of it.",
            "bn": "আয়াত পাঠকের হাতে এই পরীক্ষাটাই রেখে যায়। ওহি আজও আমাদের এমন সব জিনিসের খবর দেয়, যা চোখ কখনো দেখেনি: জাহান্নাম, সেই গাছ, মিযান, রবের সঙ্গে সাক্ষাৎ। মন এগুলোর ছবি আঁকতে পারে না, আর তার কাছে তা কখনো চাওয়াও হয়নি। চাওয়া হয়েছে শুধু এটুকু: যে রব কথা বলেছেন, তাঁর ওপর ভরসা রাখা। পরের কোনো কঠিন সত্য যখন সামনে আসবে আর আপনার বুদ্ধি তার ছবি কল্পনা করতে পারবে না, তখন আপনি দাঁড়াবেন সেই প্রথম শ্রোতাদের জায়গায়: হয় নরম হয়ে মেনে নেবেন, নয়তো ঠাট্টা করে শক্ত হয়ে যাবেন। চালুনি আজও চলছে, আর আমরা প্রত্যেকেই তার কোনো না কোনো পাশে গিয়ে পড়ি।"
          }
        ]
      }
    ]
  },
  "17:70": {
    "sections": [
      {
        "h": {
          "en": "After the Storm, the Gift",
          "bn": "ঝড়ের পরে অনুগ্রহের হিসাব"
        },
        "p": [
          {
            "en": "The preceding verses are set at sea. In 17:66 it is your Lord who drives the ship for you through the sea, so that you may seek His bounty. In 17:67, when harm touches you at sea, everyone you call upon besides Him is lost to you; when He brings you safely to land, you turn away, and man is ever ungrateful. Then 17:68 and 17:69 ask whether you feel secure that the land will not swallow you, or that He will not send you back to sea and drown you.",
            "bn": "এর আগের আয়াতগুলোর দৃশ্য সমুদ্র। ১৭:৬৬ বলছে, তোমাদের রবই সমুদ্রে তোমাদের জন্য নৌযান চালান, যাতে তোমরা তাঁর অনুগ্রহ খুঁজতে পার। ১৭:৬৭ বলছে, সমুদ্রে বিপদ ছুঁয়ে গেলে তিনি ছাড়া যাদের ডাকতে, তারা সবাই হারিয়ে যায়। আবার তিনি নিরাপদে ডাঙায় পৌঁছে দিলেই মুখ ফিরিয়ে নাও। মানুষ বড়ই অকৃতজ্ঞ। এরপর ১৭:৬৮ ও ১৭:৬৯ প্রশ্ন তোলে: তোমরা কি নিশ্চিন্ত যে ডাঙাই তোমাদের গিলে ফেলবে না, কিংবা তিনি তোমাদের আবার সমুদ্রে ফিরিয়ে নিয়ে ডুবিয়ে দেবেন না?"
          },
          {
            "en": "Then comes wa-laqad karramna bani Adama: and We have certainly honoured the children of Adam. Al-Qurtubi names the turn briefly: having set out the warning that He set out, Allah now makes plain His blessing upon them as well. The verse makes four statements in the divine We. We honoured them, We carried them on land and sea, We provided them with good things, and We preferred them over many of those We created. The ungrateful passenger of 17:67 is among those to whom all four were given.",
            "bn": "তারপরই আসে: ওয়া লাকাদ কাররামনা বানী আদাম, আর আমি অবশ্যই আদম সন্তানকে সম্মানিত করেছি। কুরতুবী মোড়টা সংক্ষেপে ধরিয়ে দেন। ভয় দেখানোর কথা যা বলার ছিল, বলা হয়ে গেছে। এবার আল্লাহ তাদের উপর তাঁর নিয়ামতের কথাও খুলে বলছেন। আয়াতে আল্লাহ 'আমি' বলে চারটি কাজের কথা জানান: সম্মান দিয়েছি, জলে স্থলে বহন করেছি, পবিত্র জিনিস থেকে রিযক দিয়েছি, আর আমার বহু সৃষ্টির উপর শ্রেষ্ঠত্ব দিয়েছি। ১৭:৬৭-এর সেই অকৃতজ্ঞ যাত্রীও এই চারটির ভাগীদার।"
          }
        ]
      },
      {
        "h": {
          "en": "Carriage on Land and Water",
          "bn": "জলে স্থলে বহনের দান"
        },
        "p": [
          {
            "en": "The second verb returns to that setting. Ibn Kathir reads the land as the beasts people ride, cattle, horses and mules, and the sea as ships great and small. At-Tabari says: on the backs of riding animals and mounts, and in the ships We subjected to them. As-Sa'di lists camels, mules, donkeys and land vehicles, then ships and vessels at sea. Al-Muyassar sets the carriage beside a wider gift: Allah subjected to them all that is in the universe, beasts on land and ships at sea to bear them.",
            "bn": "দ্বিতীয় ক্রিয়াটি আগের আয়াতগুলোর দৃশ্যেই ফিরে যায়। ইবন কাসীরের ব্যাখ্যায় স্থলের বাহন হলো গবাদি পশু, ঘোড়া আর খচ্চর, আর সমুদ্রের বাহন ছোট বড় জাহাজ। তাবারী বলেন, স্থলে সওয়ারি পশু ও বাহনের পিঠে, আর সমুদ্রে সেই নৌযানে যা আমি তাদের অধীন করে দিয়েছি। সা'দী গুনে দেন উট, খচ্চর, গাধা ও স্থলের অন্য বাহন, তারপর সমুদ্রের জাহাজ ও নৌযান। মুয়াসসার এর পাশে আরও বড় একটা দান রাখেন: মহাবিশ্বে যা কিছু আছে, সবই আল্লাহ তাদের অধীন করেছেন। তাদের বহনের জন্য স্থলে পশু আর সমুদ্রে জাহাজ দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi sees something in the carrying that the others leave unsaid. He counts it within the honour because no animal other than the children of Adam can have itself carried by its own will, intention and planning. The point is the deliberate traveller, not the vessel. In the verses just before, that same planned voyage had become the scene of forgetting. Here it is named among the marks of honour, so the sea that tested the passenger also records his rank.",
            "bn": "বহনের ব্যাপারে কুরতুবী এমন একটা দিক দেখান, যা অন্যরা বলেননি। তিনি একে সম্মানের মধ্যে গোনেন, কারণ আদম সন্তান ছাড়া আর কোনো প্রাণী নিজের ইচ্ছা, সংকল্প আর পরিকল্পনায় নিজেকে বহন করাতে পারে না। আসল কথা বাহন নয়, সচেতন যাত্রী। ঠিক আগের আয়াতগুলোতে এই পরিকল্পিত সফরই ভুলে যাওয়ার মঞ্চ হয়ে উঠেছিল। এখানে সেটাকেই সম্মানের নিদর্শন বলা হলো। যে সমুদ্র যাত্রীকে পরীক্ষা করেছিল, সেই সমুদ্রই তার মর্যাদার সাক্ষী।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Glosses on One Verb",
          "bn": "এক ক্রিয়ার নানা ব্যাখ্যা"
        },
        "p": [
          {
            "en": "What is the honour? Al-Qurtubi first defines it: karramna intensifies karam, so We gave them nobility and excellence, the karam that negates deficiency and not the karam of wealth. Then he gathers the early answers. Ad-Dahhak said speech and discernment; 'Ata' said the balanced, upright stature; Yaman said beauty of form; Muhammad ibn Ka'b said that Muhammad ﷺ was made from among them. Al-Baghawi relates from Ibn 'Abbas (RA) that they eat with their hands while other creatures eat from the ground with their mouths, and, from him too, that it is the intellect.",
            "bn": "সম্মানটা আসলে কী? কুরতুবী আগে শব্দটার মানে বলেন। কাররামনা এসেছে কারাম থেকে, জোর দেওয়া রূপে। অর্থাৎ আমি তাদের মর্যাদা ও শ্রেষ্ঠত্ব দিয়েছি। এ সেই কারাম, যা ঘাটতি দূর করে, ধনসম্পদের কারাম নয়। তারপর তিনি পূর্বসূরিদের জবাবগুলো জড়ো করেন। দাহহাক বলেছেন কথা বলার শক্তি ও বিচারবোধ, আতা বলেছেন সুষম, সোজা দেহকাঠামো, ইয়ামান বলেছেন সুন্দর গড়ন। মুহাম্মাদ ইবনে কা'ব বলেছেন, মুহাম্মাদ ﷺ-কে তাদের মধ্য থেকে করা হয়েছে। বাগাভী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, মানুষ হাতে খায়, অন্য প্রাণী মুখ দিয়ে মাটি থেকে খায়। তাঁর থেকে আরেক বর্ণনায় আছে: সম্মানটা আকলের।"
          },
          {
            "en": "Al-Qurtubi records the hand reading as reported from Ibn 'Abbas by al-Mahdawi and an-Nahhas, and as the view of al-Kalbi and Muqatil according to al-Mawardi. Ibn Kathir begins with form, citing 95:4, We created man in the best of stature: he walks upright on two feet and eats with his hands, unlike other animals, and he was given hearing, sight and a heart to tell benefit from harm. Al-Muyassar names the intellect and the sending of messengers. As-Sa'di adds knowledge, the books sent down, and the friends of Allah raised from among them.",
            "bn": "কুরতুবী জানান, হাতে খাওয়ার ব্যাখ্যাটি মাহদাবী ও নাহহাস ইবনে আব্বাস (রাঃ) থেকে উল্লেখ করেছেন, আর মাওয়ারদীর বর্ণনায় এটি কালবী ও মুকাতিলের মত। ইবন কাসীর শুরু করেন দেহের গড়ন দিয়ে, প্রমাণ হিসেবে আনেন ৯৫:৪: আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে। অন্য প্রাণীর মতো নয়, মানুষ দুই পায়ে সোজা হয়ে হাঁটে, হাতে খায়। তাকে দেওয়া হয়েছে শ্রবণ, দৃষ্টি আর হৃদয়, যা দিয়ে সে উপকার আর ক্ষতি আলাদা করে চেনে। মুয়াসসার বলেন আকল আর রাসূল পাঠানোর কথা। সা'দী এর সঙ্গে যোগ করেন ইলম, কিতাব নাযিল আর তাদের মধ্য থেকে আল্লাহর বন্ধুদের উঠে আসা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Eye and the Sun",
          "bn": "চোখ আর সূর্যের উপমা"
        },
        "p": [
          {
            "en": "At-Tabari divides the verse differently. For karramna he says: by giving them mastery over the rest of creation and subjecting all creation to them. The hand, in his reading, belongs to the last verb. It was mentioned to us, he says, that the preference is their ability to work with their hands and to lift food and drink to their mouths with them, which is not easy for other creatures. He then gives Ibn Jurayj: faddalnahum, in the two hands, with which he eats and works.",
            "bn": "তাবারী আয়াতটা ভাগ করেন অন্যভাবে। কাররামনার ব্যাখ্যায় তিনি বলেন: বাকি সৃষ্টির উপর তাদের কর্তৃত্ব দিয়ে, আর গোটা সৃষ্টিকে তাদের অধীন করে দিয়ে। হাতের কথাটা তাঁর পাঠে শেষ ক্রিয়ার সঙ্গে যুক্ত। তিনি বলেন, আমাদের কাছে বলা হয়েছে, শ্রেষ্ঠত্বটা হলো হাত দিয়ে কাজ করতে পারা, হাতে খাবার আর পানীয় তুলে মুখে দিতে পারা। অন্য সৃষ্টির জন্য এটা সহজ নয়। এরপর তিনি ইবনে জুরাইজের কথা আনেন: ফাদ্দালনাহুম মানে দুই হাতে, যা দিয়ে মানুষ খায় আর কাজ করে।"
          },
          {
            "en": "Al-Qurtubi lists all of this and then decides. The sound view to rely on, he says, is that the preference was by the intellect, the pillar of moral responsibility, by which Allah is known, His speech understood and His messengers believed. Yet because the intellect cannot carry all that is asked of the servant, messengers were sent and books revealed. His image: the revealed law is like the sun and the intellect like the eye; when the eye opens and is sound, it sees the sun and makes out the details of things.",
            "bn": "কুরতুবী সব মত সাজিয়ে রেখে তারপর রায় দেন। তাঁর মতে নির্ভরযোগ্য সঠিক কথা হলো, শ্রেষ্ঠত্ব দেওয়া হয়েছে আকল দিয়ে। আকলই শরীয়তের দায়িত্বের ভিত। এর দ্বারাই আল্লাহকে চেনা যায়, তাঁর কালাম বোঝা যায়, তাঁর রাসূলদের সত্য বলে মানা যায়। তবে বান্দার কাছে যা চাওয়া হয়েছে, তার সবটা একা আকল বইতে পারে না। তাই রাসূল পাঠানো হয়েছে, কিতাব নাযিল হয়েছে। তাঁর উপমাটা এ রকম। শরীয়ত সূর্যের মতো, আকল চোখের মতো। চোখ সুস্থ থাকলে, খুললেই সূর্য দেখে, আর সব জিনিসের খুঁটিনাটি ধরতে পারে।"
          },
          {
            "en": "He adds a check on pride. Allah has given some animals traits in which they surpass the son of Adam: the horse its speed, hearing and sight, the elephant its strength, the lion its courage, the rooster its generosity. So the honour is not bodily superiority. The other reports, al-Qurtubi grants, are some stronger than others, but he closes on his own conclusion: the honouring and the preferring are by the intellect, as he has explained, and Allah knows best.",
            "bn": "অহংকারে একটা লাগামও তিনি টেনে দেন। আল্লাহ কিছু প্রাণীকে এমন গুণ দিয়েছেন, যাতে তারা আদম সন্তানকে ছাড়িয়ে যায়। ঘোড়ার আছে গতি, শ্রবণ আর দৃষ্টি, হাতির শক্তি, সিংহের সাহস, মোরগের উদারতা। কাজেই সম্মানটা শারীরিক শ্রেষ্ঠত্বের নয়। কুরতুবী মানেন, অন্য বর্ণনাগুলোর কোনোটা অন্যটার চেয়ে জোরালো। তবু তিনি শেষ করেন নিজের সিদ্ধান্তে: সম্মান আর শ্রেষ্ঠত্ব আকলের কারণেই, যেমনটা তিনি ব্যাখ্যা করেছেন। আর আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Provided With Good Things",
          "bn": "পবিত্র রিযকের আয়োজন"
        },
        "p": [
          {
            "en": "Wa-razaqnahum mina-t-tayyibat: and We provided them with good things. At-Tabari explains these as good foods and drinks, meaning their lawful and delicious kinds. Ibn Kathir spreads the list wide: crops, fruits, meats and milks of every desirable flavour and colour, and fine clothes of every kind, some made by people themselves and some brought by others from distant regions. As-Sa'di adds clothing and marriage, and says there is no good thing their needs depend on but Allah has honoured them with it and made it easy for them.",
            "bn": "ওয়া রাযাকনাহুম মিনাত তাইয়্যিবাত: আর আমি তাদের পবিত্র জিনিস থেকে রিযক দিয়েছি। তাবারীর ব্যাখ্যায় এ হলো উত্তম খাদ্য ও পানীয়, মানে সেগুলোর হালাল আর সুস্বাদু রকম। ইবন কাসীর তালিকাটা অনেক বড় করেন: শস্য, ফল, মাংস, দুধ, নানা লোভনীয় স্বাদ আর রঙের খাবার। সঙ্গে নানা রকমের সুন্দর পোশাক, যার কিছু মানুষ নিজে বানায়, কিছু অন্যরা দূর দেশ থেকে এনে দেয়। সা'দী যোগ করেন পোশাক আর বিয়ে। তিনি বলেন, মানুষের প্রয়োজন জড়িত এমন কোনো ভালো জিনিস নেই, যা দিয়ে আল্লাহ তাদের সম্মানিত করেননি এবং যা তিনি সহজ করে দেননি।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both relate from Muqatil a homely list: ghee, butter, dates and sweets, with al-Qurtubi adding honey, while the provision of other creatures is plain to see, straw and bones in al-Qurtubi's version. Al-Qurtubi counts the manner of eating within the honour: people earn wealth, wear clothes and eat foods made of many ingredients, while the most an animal manages is raw meat or unmixed food. Ma'arif al-Qur'an makes the same observation, that compounding food with spices and herbs belongs to human beings alone.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই মুকাতিল থেকে ঘরোয়া একটা তালিকা দেন: ঘি, মাখন, খেজুর আর মিষ্টান্ন। কুরতুবী সঙ্গে মধুও রাখেন। অন্য প্রাণীর রিযক কী, তা তো সবার চোখের সামনে। কুরতুবীর ভাষ্যে তা খড় আর হাড়। খাওয়ার ধরনকেও কুরতুবী সম্মানের অংশ ধরেন। মানুষ সম্পদ উপার্জন করে, কাপড় পরে, নানা উপাদান মিশিয়ে রান্না করা খাবার খায়। আর কোনো প্রাণীর দৌড় বড়জোর কাঁচা মাংস কিংবা মিশ্রণহীন খাবার পর্যন্ত। মাআরিফুল কুরআনও একই কথা বলে: মসলা আর ভেষজ মিশিয়ে খাবার তৈরি কেবল মানুষেরই কাজ।"
          },
          {
            "en": "From this clause al-Qurtubi draws a ruling. He says the verse refutes a report attributed to 'A'isha (RA) telling people to deny themselves good food, which many Sufis used to justify abandoning good things; it has no basis, he says, since the Qur'an rejects it and the established Sunnah runs against it. He relates that Ibrahim ibn Adham bought butter, honey and fine white bread, and said: when we find, we eat as men eat, and when we lack, we are patient as men are patient.",
            "bn": "এই অংশ থেকে কুরতুবী একটা বিধানও বের করেন। আয়িশা (রাঃ)-এর নামে একটা বর্ণনা চলে, যাতে উত্তম খাবার থেকে নিজেকে বঞ্চিত রাখতে বলা হয়েছে। বহু সূফী এটাকে ভালো জিনিস ত্যাগ করার দলিল বানাতেন। কুরতুবী বলেন, আয়াতটি এই বর্ণনাকে খণ্ডন করে। এর কোনো ভিত্তি নেই, কারণ কুরআন একে প্রত্যাখ্যান করে আর প্রতিষ্ঠিত সুন্নাহ এর বিপরীত। তিনি বর্ণনা করেন, ইবরাহীম ইবনে আদহাম মাখন, মধু আর মিহি সাদা রুটি কিনেছিলেন। প্রশ্ন উঠলে বলেছিলেন: পেলে আমরা পুরুষের মতো খাই, না পেলে পুরুষের মতো সবর করি।"
          }
        ]
      },
      {
        "h": {
          "en": "Over Many, Not Over All",
          "bn": "অনেকের উপর, সবার উপর নয়"
        },
        "p": [
          {
            "en": "The last clause carries the verse's open question: wa-faddalnahum 'ala kathirin mimman khalaqna tafdila, and We preferred them over many of those We created. Ibn Kathir names the obvious ones, all animals and kinds of creatures, and al-Qurtubi says cattle, beasts, wild animals and birds, surpassed by mastery and dominion, by reward and recompense, by discernment and accurate insight. Then the question: who stands outside many? Al-Baghawi states the plain sense first. He preferred them over many of His creatures, not over all.",
            "bn": "শেষ বাক্যাংশেই আয়াতের খোলা প্রশ্নটা: ওয়া ফাদ্দালনাহুম আলা কাসীরিম মিম্মান খালাকনা তাফদীলা, আর আমি তাদের আমার সৃষ্টির অনেকের উপর শ্রেষ্ঠত্ব দিয়েছি। যাদের কথা স্পষ্ট, তাদের নাম ইবন কাসীর বলেন: সব প্রাণী ও নানা জাতের সৃষ্টি। কুরতুবী বলেন গবাদি পশু, চতুষ্পদ, বন্য জন্তু আর পাখি। মানুষ তাদের ছাড়িয়ে গেছে প্রাধান্য ও কর্তৃত্বে, সওয়াব ও প্রতিদানে, বিচারবোধ ও নির্ভুল অন্তর্দৃষ্টিতে। এরপর প্রশ্ন: 'অনেক'-এর বাইরে কারা? বাগাভী আগে আয়াতের বাহ্যিক অর্থটা বলেন। আল্লাহ তাদের শ্রেষ্ঠত্ব দিয়েছেন অনেকের উপর, সবার উপর নয়।"
          },
          {
            "en": "Then he lays out the views. Some said humans were preferred over all creation except the angels. Al-Kalbi said over all except a group of angels: Jibril, Mika'il, Israfil, the Angel of Death and their like. Others said over all creation, the angels included, since most can stand in place of all, as in 26:221, 26:222 and 26:223, where most of them are liars means all of them. Al-Baghawi's own preference is a split: ordinary believers are better than ordinary angels, and the elite of the believers better than the elite of the angels, citing 98:7.",
            "bn": "তারপর তিনি মতগুলো সাজান। কেউ বলেছেন, ফেরেশতা ছাড়া সব সৃষ্টির উপর মানুষকে শ্রেষ্ঠত্ব দেওয়া হয়েছে। কালবী বলেছেন, সবার উপর, শুধু একদল ফেরেশতা বাদে: জিবরীল, মীকাঈল, ইসরাফীল, মৃত্যুর ফেরেশতা ও তাঁদের মতো আরও কয়েকজন। অন্যরা বলেছেন, ফেরেশতাসহ গোটা সৃষ্টির উপর। তাঁদের যুক্তি, 'অধিকাংশ' কখনো 'সবাই' অর্থে আসে। যেমন ২৬:২২১, ২৬:২২২ ও ২৬:২২৩, যেখানে 'তাদের অধিকাংশই মিথ্যাবাদী' মানে তারা সবাই। বাগাভীর নিজের পছন্দ মাঝামাঝি: সাধারণ মুমিন সাধারণ ফেরেশতার চেয়ে উত্তম, আর বিশিষ্ট মুমিন বিশিষ্ট ফেরেশতার চেয়ে উত্তম। প্রমাণ হিসেবে তিনি আনেন ৯৮:৭।"
          },
          {
            "en": "Al-Qurtubi takes up the opposite inference. A faction, he reports, said the verse requires the angels to be preferred over humans and jinn, since they are the ones set apart, as in the words nor the angels brought near, from 4:172. He answers that this does not follow from the verse. The comparison here is between humans and jinn: the jinn are the many who are surpassed, and the angels stand outside it, for the verse does not mention them. The angels may be better, or the reverse, or they are equal; on the whole, he says, the question does not reach certainty.",
            "bn": "কুরতুবী উল্টো দিকের সিদ্ধান্তটা নিয়ে কথা বলেন। তিনি জানান, একদল বলেছে, আয়াত থেকে প্রমাণ হয় ফেরেশতারা মানুষ ও জিনের চেয়ে শ্রেষ্ঠ, কারণ আলাদা করে উল্লেখ পেয়েছেন তাঁরাই, যেমন ৪:১৭২-এর কথায়: আর নৈকট্যপ্রাপ্ত ফেরেশতারাও না। কুরতুবীর জবাব, আয়াত থেকে এটা অনিবার্যভাবে আসে না। এখানে তুলনা মানুষ আর জিনের মধ্যে। জিনরাই সেই 'অনেক', যাদের উপর মানুষকে শ্রেষ্ঠত্ব দেওয়া হয়েছে। ফেরেশতারা এর বাইরে, আয়াত তাঁদের কথা তোলেইনি। হতে পারে ফেরেশতারা শ্রেষ্ঠ, হতে পারে উল্টো, হতে পারে সমান। মোটকথা, তাঁর ভাষায়, এ প্রশ্নের আলোচনা নিশ্চিত সিদ্ধান্তে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports, Ranks and Their Grades",
          "bn": "বর্ণনা, মর্যাদা ও সনদের মান"
        },
        "p": [
          {
            "en": "Ibn Kathir records that the verse has been cited as evidence that humankind is superior to the angels as a kind; the abridged English edition renders this as the verse indicating it. He brings reports and grades them himself. One, from Zayd ibn Aslam, which at-Tabari also gives, has the angels ask for the next world since Adam's children were given this one; Allah answers that He will not make the righteous offspring of the one He created with His hands like the one to whom He said Be. Ibn Kathir calls that route mursal.",
            "bn": "ইবন কাসীর জানান, এই আয়াতকে দলিল বানানো হয়েছে যে জাতি হিসেবে মানুষ ফেরেশতার চেয়ে শ্রেষ্ঠ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা এসেছে এভাবে: আয়াতটি তা-ই নির্দেশ করে। এরপর তিনি কয়েকটি বর্ণনা আনেন এবং নিজেই সেগুলোর মান বলেন। যায়দ ইবনে আসলাম থেকে একটি বর্ণনা তাবারীও এনেছেন। তাতে ফেরেশতারা আবেদন করেন, আদম সন্তানকে দুনিয়া দেওয়া হয়েছে, তাই তাঁদের আখিরাত দেওয়া হোক। আল্লাহ জবাব দেন, যাকে তিনি নিজ হাতে সৃষ্টি করেছেন তার নেক বংশধরকে তিনি তার সমান করবেন না, যাকে তিনি বলেছিলেন 'হও', আর সে হয়ে গেল। ইবন কাসীর এই সূত্রকে মুরসাল বলেন।"
          },
          {
            "en": "He adds versions traced to the Prophet ﷺ through at-Tabarani and Ibn 'Asakir, and ends with one saying nothing is more honoured with Allah on the Day of Resurrection than the son of Adam, not even the angels, which he calls very strange. Al-Baghawi gives a similar report from Jabir (RA) without a grading, and Abu Hurayra's (RA) saying that the believer is more honoured with Allah than the angels with Him. No fetched tafsir attaches to this verse a hadith from al-Bukhari, Muslim or the Sunan.",
            "bn": "এরপর তিনি তাবারানী ও ইবনে আসাকিরের সূত্রে নবী ﷺ পর্যন্ত পৌঁছানো কয়েকটি রূপ আনেন। শেষে আনেন একটি বর্ণনা, যাতে বলা হয়েছে, কিয়ামতের দিন আল্লাহর কাছে আদম সন্তানের চেয়ে সম্মানিত কিছু নেই, ফেরেশতারাও নয়। এটিকে তিনি অত্যন্ত গরীব বলেন। বাগাভী জাবির (রাঃ) থেকে এ রকম একটি বর্ণনা আনেন, মান উল্লেখ না করে। সঙ্গে আবু হুরায়রা (রাঃ)-এর উক্তি: আল্লাহর কাছে মুমিন তাঁর নিকটবর্তী ফেরেশতাদের চেয়েও বেশি সম্মানিত। বুখারী, মুসলিম কিংবা সুনান গ্রন্থের কোনো হাদীস সংগৃহীত কোনো তাফসীর এই আয়াতের সঙ্গে যুক্ত করেনি।"
          },
          {
            "en": "Ma'arif al-Qur'an gives a tiered answer: righteous believers in general above angels in general, special angels such as Jibra'il and Mika'il above the general righteous, and the prophets (AS) above even the special angels. Its reason: animals have desire without reason, angels reason without desire, humans both, and whoever masters desire by reason reaches a station above many angels. These are the views; this article takes none of them, and al-Qurtubi's caution stands beside the rest.",
            "bn": "মাআরিফুল কুরআন স্তরভিত্তিক একটা জবাব দেয়। সাধারণ নেককার মুমিন সাধারণ ফেরেশতার উপরে। জিবরীল ও মীকাঈলের মতো বিশিষ্ট ফেরেশতা সাধারণ নেককারদের উপরে। আর নবীগণ (আঃ) বিশিষ্ট ফেরেশতাদেরও উপরে। এর কারণ হিসেবে বলা হয়, পশুর আছে কামনা, আকল নেই। ফেরেশতার আকল আছে, কামনা নেই। মানুষের দুটোই আছে। যে আকল দিয়ে কামনাকে বশে আনে, সে বহু ফেরেশতার চেয়ে উঁচু মর্যাদায় পৌঁছায়। মতগুলো এই। এ লেখা এর কোনোটাকে নিজের মত বলে নেয় না, আর কুরতুবীর সতর্ক কথাটাও এদের পাশেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Honour That Asks Thanks",
          "bn": "যে সম্মান শুকরিয়া চায়"
        },
        "p": [
          {
            "en": "As-Sa'di closes his comment with a question. Will they not give thanks to the One who granted the blessings and turned away harm, and not let the blessings veil them from the Giver, so that they are busied with them instead of worshipping their Lord, or even use them to disobey Him? It is the question 17:67 raised at sea. The next verses carry it to its end: 17:71 speaks of the Day every people is called with its imam, and 17:72 says that whoever is blind in this life is blind in the Hereafter.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শেষ করেন একটা প্রশ্নে। যিনি নিয়ামত দিয়েছেন আর বিপদ সরিয়ে দিয়েছেন, তারা কি তাঁর শুকরিয়া আদায় করবে না? নিয়ামত যেন দাতার কাছ থেকে তাদের আড়াল না করে, এমন না হয় যে রবের ইবাদত ছেড়ে তারা নিয়ামতেই মগ্ন থাকে, কিংবা সেগুলো দিয়েই তাঁর নাফরমানি করে। এই প্রশ্নই ১৭:৬৭ তুলেছিল সমুদ্রের বুকে। পরের আয়াতগুলো একে শেষ পর্যন্ত নিয়ে যায়। ১৭:৭১ বলে সেই দিনের কথা, যেদিন প্রত্যেক দলকে তার ইমামসহ ডাকা হবে। আর ১৭:৭২ বলে, যে এখানে অন্ধ, সে আখিরাতেও অন্ধ।"
          },
          {
            "en": "The honour is given to the children of Adam as a whole, not to a particular nation, lineage or creed among them. The stature, speech, intellect and provision the commentators list belong to the stranger as much as to oneself, so contempt for any person slights what Allah says He honoured. And for oneself, the intellect was given to see the sun of revelation, and the good things to be eaten with thanks, neither refused nor turned against the Giver.",
            "bn": "সম্মানটা দেওয়া হয়েছে আদম সন্তানকে, তাদের ভেতরের কোনো এক জাতি, বংশ বা ধর্মের লোককে নয়। মুফাসসিররা যে দেহগঠন, বাকশক্তি, আকল আর রিযকের কথা বলেছেন, তা অচেনা মানুষটিরও যেমন, আপনারও তেমন। তাই কাউকে তুচ্ছ করা মানে আল্লাহ যাকে সম্মানিত বলেছেন, তাকে ছোট করা। আর নিজের বেলায়: আকল দেওয়া হয়েছে ওহীর সূর্য দেখার জন্য, আর পবিত্র রিযক দেওয়া হয়েছে শুকরিয়ার সঙ্গে খাওয়ার জন্য। তা প্রত্যাখ্যান করার জন্য নয়, দাতার বিরুদ্ধে কাজে লাগানোর জন্যও নয়।"
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
            "bn": "আদমসন্তানকে সম্মান দেওয়ার পর, জলে-স্থলে তাদের বহন করার কথা বলার পর, সূরাটি চোখ তোলে পথের শেষ মাথার দিকে। আয়াত বলছে, স্মরণ করো সেই দিন, যেদিন আমি প্রতিটি সম্প্রদায়কে তাদের ইমামসহ ডাকব। মুয়াসসার পুরো আয়াতটিকে একই সঙ্গে সুসংবাদ ও সতর্কবাণী হিসেবে পড়েন: একজন ঘোষক প্রতিটি দলকে ডাকবেন, আর সঙ্গে ডাকবেন দুনিয়ায় তারা যাকে অনুসরণ করত তাকেও। দৃশ্যটা শুরু হয় আদালতের আতঙ্ক দিয়ে নয়; শুরু হয় নাম ধরে ডাক দিয়ে, আর সেই ডাকে সাড়া দিতে উঠে দাঁড়ানো এক জনতা দিয়ে।"
          },
          {
            "en": "The verse makes three moves in a single breath. First the summons, every people called with their imam. Then a division: whoever is given his record in his right hand. Then a promise about that group — they read their record, and they are not wronged so much as a fatil. Much of the surah before this warned the ungrateful; here the light falls on the people of the right hand. Their portion is joy, and the article that follows stays with them, as the verse does, before the darker hand is ever named.",
            "bn": "আয়াতটি এক নিঃশ্বাসে তিনটি কাজ করে। প্রথমে ডাক: প্রতিটি সম্প্রদায়কে ডাকা হবে তাদের ইমামসহ। তারপর ভাগ: যাকে তার আমলনামা ডান হাতে দেওয়া হবে। তারপর সেই দলকে নিয়ে এক প্রতিশ্রুতি: তারা নিজেদের আমলনামা পড়বে, আর তাদের ওপর সুতো পরিমাণও জুলুম করা হবে না। এর আগে সূরার অনেকটা অংশ অকৃতজ্ঞদের সতর্ক করেছে; এখানে আলো পড়েছে ডান হাতের লোকদের ওপর। তাদের ভাগে আনন্দ। আর এই লেখাও, আয়াতের মতোই, তাদের সঙ্গেই থাকে; আঁধার হাতের কথা ওঠার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What 'Imam' Means Here",
          "bn": "ইমাম এখানে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators genuinely differ over what imam means, and the difference is old and unforced. Mujahid and Qatadah read it as their prophet: every nation summoned with the messenger sent to it. Ibn Kathir sets this beside another verse — for every nation there is a messenger, and when their messenger comes it is judged with justice (10:47). Some of the early scholars, he notes, saw in this a great honour for the people of hadith, since their imam on that Day would be the Prophet himself.",
            "bn": "ইমাম শব্দের অর্থ নিয়ে তাফসীরকারদের মধ্যে সত্যিই মতভেদ আছে, আর এই মতভেদ পুরোনো ও স্বাভাবিক। মুজাহিদ ও কাতাদার মতে ইমাম মানে তাদের নবী: প্রতিটি জাতিকে ডাকা হবে তাদের কাছে পাঠানো রাসূলসহ। ইবন কাসীর এর পাশে আরেকটি আয়াত রাখেন: প্রতিটি জাতির জন্য আছেন একজন রাসূল; তাদের রাসূল যখন আসবেন, তখন তাদের মধ্যে ন্যায়ের সঙ্গে ফয়সালা করা হবে (১০:৪৭)। তিনি জানান, পূর্বসূরি আলিমদের কেউ কেউ এতে হাদিসের লোকদের জন্য বড় সম্মান দেখেছেন, কারণ সেদিন তাদের ইমাম হবেন স্বয়ং নবী ﷺ।"
          },
          {
            "en": "A second group read imam as the record of a person's own deeds. Ibn Abbas, al-Hasan, Abu al-Aliyah and ad-Dahhak took it this way, and Ibn Kathir judged this the strongest reading. He rests it on another verse, where God says He has counted everything in a clear register, imamin mubin (36:12), and on this verse's own next words: whoever is given his record. A book is called an imam, al-Qurtubi explains, because people turn back to it to settle a dispute, as they turn to a leader.",
            "bn": "আরেক দলের মতে ইমাম মানে মানুষের নিজের আমলনামা। ইবন আব্বাস, হাসান, আবুল আলিয়া ও দাহহাক এ অর্থই নিয়েছেন, আর ইবন কাসীর এটিকেই সবচেয়ে শক্ত মত বলেছেন। এর দলিল হিসেবে তিনি আনেন আরেকটি আয়াত, যেখানে আল্লাহ বলেন, তিনি সবকিছু গুনে রেখেছেন এক সুস্পষ্ট কিতাবে, ইমামিম মুবীন (৩৬:১২)। আর আনেন এই আয়াতেরই পরের কথা: যাকে তার আমলনামা দেওয়া হবে। কুরতুবী ব্যাখ্যা করেন, কিতাবকে ইমাম বলা হয়, কারণ বিবাদ মেটাতে মানুষ তার কাছে ফিরে যায়, যেমন ফিরে যায় নেতার কাছে।"
          },
          {
            "en": "Two further readings survive. Ibn Zayd took imam as the scripture revealed to each people: the people of the Torah called by the Torah, the people of the Qur'an by the Qur'an, each asked whether they kept its commands. Ali reportedly read it as the leader of their own age, and al-Baghawi records from Ibn Abbas the same: the imam who summoned them in the world, whether to guidance or astray — God speaks of leaders who guide by His command (21:73) and of leaders who call to the Fire (28:41).",
            "bn": "আরও দুটি মত টিকে আছে। ইবন যায়দের মতে ইমাম মানে প্রতিটি জাতির ওপর নাজিল হওয়া কিতাব: তাওরাতের লোকদের ডাকা হবে তাওরাত ধরে, কুরআনের লোকদের কুরআন ধরে, আর প্রত্যেককে জিজ্ঞেস করা হবে, তারা তার হুকুম মেনেছে কি না। আলী (রাঃ) থেকে বর্ণিত, তিনি একে বুঝেছেন নিজেদের যুগের নেতা হিসেবে। বাগাভীও ইবন আব্বাস থেকে একই কথা এনেছেন: দুনিয়ায় যে ইমাম তাদের ডাকত, হেদায়েতের দিকে হোক বা গোমরাহির দিকে। আল্লাহ এমন নেতাদের কথাও বলেছেন, যাঁরা তাঁর হুকুমে পথ দেখান (২১:৭৩), আবার এমন নেতাদের কথাও, যারা জাহান্নামের দিকে ডাকে (২৮:৪১)।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Reading the Scholars Chose",
          "bn": "আলিমরা কোন মত বেছে নিয়েছেন"
        },
        "p": [
          {
            "en": "Here two great commentators part ways, and the verse leaves room for both. At-Tabari weighs the readings and prefers the leader followed in the world, on a plain linguistic ground: in the speech of the Arabs, imam most commonly means whoever is imitated and followed, and that likeliest sense is the default unless proof forces another. Ibn Kathir, weighing the same evidence, prefers the record of deeds, held up by the clear register of 36:12 and by the verse's own turn to the record given in the right hand.",
            "bn": "এখানে দুই বড় তাফসীরকারের পথ আলাদা হয়ে যায়, আর আয়াতে দুজনের মতেরই জায়গা আছে। তাবারী সব মত যাচাই করে দুনিয়ায় অনুসৃত নেতার অর্থটিকেই অগ্রাধিকার দেন, আর তাঁর যুক্তি সোজা ভাষাগত: আরবদের কথায় ইমাম বলতে সাধারণত তাকেই বোঝায়, যাকে অনুকরণ ও অনুসরণ করা হয়। অন্য অর্থ নিতে বাধ্য করার মতো দলিল না থাকলে সবচেয়ে প্রচলিত অর্থটাই ধরতে হয়। ইবন কাসীর একই প্রমাণ যাচাই করে অগ্রাধিকার দেন আমলনামার অর্থকে। তাঁর পক্ষে আছে ৩৬:১২-এর সুস্পষ্ট কিতাব, আর আয়াতেরই পরের অংশে ডান হাতে দেওয়া আমলনামার কথা।"
          },
          {
            "en": "A further view deserves noting for how the tradition itself checks it. Muhammad ibn Ka'b read imam as a plural, meaning people would be summoned by their mothers. Al-Qurtubi records the three reasons some gave for it, then sets against it a report from al-Bukhari and Muslim: on the Day of Resurrection a banner is raised for every treacherous person, and it is said, this is the treachery of so-and-so, son of so-and-so. Being named by the father, he argues, tells against being called by the mother. The plainest sense stays with the imam a people followed.",
            "bn": "আরেকটি মত উল্লেখ করার মতো, কারণ এতে দেখা যায় আমাদের আলিমরা নিজেরাই কীভাবে মত যাচাই করেছেন। মুহাম্মদ ইবন কা'ব 'ইমাম' শব্দটিকে বহুবচন ধরে পড়েছেন, অর্থাৎ মানুষকে ডাকা হবে তাদের মায়ের নামে। কুরতুবী এই মতের পক্ষে দেওয়া তিনটি কারণ উল্লেখ করেন, তারপর এর বিপরীতে রাখেন বুখারী ও মুসলিমের একটি বর্ণনা: কিয়ামতের দিন প্রত্যেক বিশ্বাসঘাতকের জন্য একটি পতাকা তোলা হবে, আর বলা হবে, এ হলো অমুকের ছেলে অমুকের বিশ্বাসঘাতকতা। তাঁর যুক্তি, বাবার নামে ডাকা হবে, এটাই মায়ের নামে ডাকার মতের বিপক্ষে যায়। তাই সবচেয়ে সহজ অর্থ সেটাই থাকে: যে ইমামকে কোনো সম্প্রদায় অনুসরণ করেছে।"
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
            "en": "A narration ties the whole scene together, and at-Tirmidhi records it directly under this verse. On the authority of Abu Hurayrah, the Prophet, explaining the Day We call every people with their imam, said: one of them will be called and given his record in his right hand, his body made to grow sixty cubits tall, his face turned white, and on his head a crown of pearls that gleams. At-Tirmidhi graded the report hasan gharib — sound but singular in its chain.",
            "bn": "একটি বর্ণনা গোটা দৃশ্যটিকে এক সুতোয় গেঁথে দেয়, আর তিরমিযী তা এনেছেন ঠিক এই আয়াতের ব্যাখ্যায়। আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ 'যেদিন আমি প্রতিটি সম্প্রদায়কে তাদের ইমামসহ ডাকব' আয়াতের ব্যাখ্যায় বলেছেন: তাদের একজনকে ডাকা হবে, তার ডান হাতে আমলনামা দেওয়া হবে, তার শরীর বাড়িয়ে ষাট হাত লম্বা করে দেওয়া হবে, চেহারা সাদা উজ্জ্বল করে দেওয়া হবে, আর মাথায় পরানো হবে ঝলমলে মুক্তার মুকুট। তিরমিযী বর্ণনাটিকে বলেছেন হাসান গারীব, অর্থাৎ গ্রহণযোগ্য, তবে এর সনদ একটিই।"
          },
          {
            "en": "Ibn Kathir cites the very same hadith through al-Hafiz al-Bazzar, by the same chain of al-Suddi, from his father, from Abu Hurayrah, and notes that al-Bazzar said it is related only through this single route. That candour matters: the report is not concealed behind a claim of mass transmission, and a lone chain is exactly what hasan gharib records. Both Ma'arif al-Qur'an and al-Qurtubi cite the Tirmidhi wording too, so the narration's tie to this verse rests on more than a single book.",
            "bn": "ইবন কাসীর ঠিক এই হাদিসটিই এনেছেন হাফিজ আল-বাযযারের সূত্রে, একই সনদে: সুদ্দী থেকে, তিনি তাঁর বাবা থেকে, তিনি আবু হুরায়রা (রাঃ) থেকে। সঙ্গে জানিয়েছেন, আল-বাযযার বলেছেন এটি কেবল এই একটি সূত্রেই বর্ণিত। এই খোলাখুলি স্বীকারোক্তির দাম আছে। বর্ণনাটিকে বহু সূত্রে বর্ণিত বলে দাবি করে আড়াল করা হয়নি; আর একক সনদের কথাই তো 'হাসান গারীব' পরিভাষায় লেখা থাকে। মাআরিফুল কুরআন ও কুরতুবী দুজনেই তিরমিযীর শব্দ উদ্ধৃত করেছেন, তাই এই আয়াতের সঙ্গে বর্ণনাটির যোগ কেবল একটি বইয়ের ওপর দাঁড়িয়ে নেই।"
          },
          {
            "en": "Then, the hadith goes on, he walks to his companions, who see him from afar and pray, our Lord, bring him to us and bless us through him; and he reaches them and says, rejoice, for every one of you will have the like of this. The disbeliever, by contrast, is blackened of face and his companions recoil. The report keeps its warning, yet its centre of gravity is the joy of the man holding his own good news in his hand.",
            "bn": "বর্ণনায় এরপর আছে, সে হেঁটে যায় তার সঙ্গীদের দিকে। তারা দূর থেকে তাকে দেখে দোয়া করে: হে আমাদের রব, একে আমাদের কাছে এনে দিন, আর তাকে দিয়ে আমাদের বরকত দিন। সে তাদের কাছে পৌঁছে বলে, খুশি হও, তোমাদের প্রত্যেকে এমনটাই পাবে। কাফিরের দশা ঠিক উল্টো: তার চেহারা কালো করে দেওয়া হয়, আর সঙ্গীরা তাকে দেখে পিছিয়ে যায়। বর্ণনাটিতে সতর্কবাণীও আছে, তবু এর মূল সুর সেই মানুষের আনন্দ, যার হাতে তার নিজের সুসংবাদ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Record Read in Joy",
          "bn": "আনন্দে পড়া আমলনামা"
        },
        "p": [
          {
            "en": "Why does the verse say they read their record, rather than that they receive it? Ibn Kathir answers from the heart of it: out of their gladness and delight at the good deeds recorded there, they read it and love to read it. As-Sa'di draws the two halves of the verse together — this is the person who followed his guiding imam and was steered by his book, so his good deeds grew many and his failings few. The right hand is not an accident of that Day; it is the harvest of a life spent behind a true guide.",
            "bn": "আয়াত কেন বলছে তারা আমলনামা পড়বে, শুধু হাতে পাবে বলছে না? ইবন কাসীর এর জবাব দেন একেবারে মনের কথা থেকে: সেখানে লেখা নেক আমল দেখে তারা এত খুশি হয় যে পড়ে, আর পড়তে ভালোবাসে। সা'দী আয়াতের দুই অংশকে মিলিয়ে দেন। এ সেই মানুষ, যে তার হেদায়েতের ইমামকে অনুসরণ করেছে আর তার কিতাব মেনে চলেছে; তাই তার নেকি বেড়েছে, আর ভুলত্রুটি কমেছে। সেদিন ডান হাত কোনো কাকতালীয় ব্যাপার নয়; সত্য পথপ্রদর্শকের পেছনে কাটানো এক জীবনের ফসল।"
          },
          {
            "en": "Ma'arif al-Qur'an notes that the happy believer does not read in silence — he calls others to read it too, the way a man shares a letter that clears his name. His joy, it adds, is the joy of faith kept intact and of rescue from lasting punishment, even if some deeds still await their account. The same delight rings in another passage, where the man given his record in the right hand cries out, here, read my record (69:19). On this Day, the good is not hidden away; it is announced. The believer's shame, if any remained, is covered; only the good is read out.",
            "bn": "মাআরিফুল কুরআন লক্ষ করে, খুশি মুমিন চুপচাপ পড়ে না। সে অন্যদেরও ডেকে পড়তে বলে, যেমন কেউ নিজেকে নির্দোষ প্রমাণ করা চিঠি সবাইকে দেখায়। বইটি আরও বলে, তার আনন্দ ঈমান অটুট থাকার আনন্দ, স্থায়ী শাস্তি থেকে বেঁচে যাওয়ার আনন্দ, যদিও কিছু আমলের হিসাব হয়তো তখনো বাকি। একই খুশি বাজে আরেক আয়াতে, যেখানে ডান হাতে আমলনামা পাওয়া মানুষটি চিৎকার করে বলে: এই নাও, আমার আমলনামা পড়ে দেখো (৬৯:১৯)। সেদিন ভালোকে লুকিয়ে রাখা হয় না, ঘোষণা করা হয়। মুমিনের লজ্জার কিছু থেকে থাকলেও তা ঢেকে দেওয়া হয়; সবার সামনে পড়া হয় শুধু ভালোটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Thread's Worth",
          "bn": "সুতো পরিমাণও নয়"
        },
        "p": [
          {
            "en": "The verse ends with a startlingly small measure: they are not wronged by so much as a fatil. At-Tabari, al-Qurtubi and Ibn Kathir all give the same picture — the fatil is the fine, twisted thread that lies in the long groove on the face of a date-stone. Split a date-pit and look: that hair-thin fibre is the byword the Arabs reached for when they meant the most negligible thing imaginable. Not even that much of anyone's due, the verse says, will be shaved off. The image is deliberately homely, a thing you could pinch between your fingers, so that the scale of God's precision is unmistakable.",
            "bn": "আয়াত শেষ হয় অবাক করার মতো ছোট এক মাপ দিয়ে: তাদের ওপর সুতো পরিমাণও জুলুম করা হবে না। তাবারী, কুরতুবী ও ইবন কাসীর সবাই একই ছবি দেন: খেজুরের আঁটির গায়ে যে লম্বা খাঁজ, তার ভেতরে পড়ে থাকা সরু, পাকানো সুতোটাই ফাতীল। একটা খেজুরের আঁটি চিরে দেখুন। চুলের মতো সরু ওই আঁশটাই ছিল আরবদের প্রবাদ; সবচেয়ে তুচ্ছ জিনিস বোঝাতে তারা এর কথাই বলত। আয়াত বলছে, কারও প্রাপ্য থেকে ততটুকুও কেটে নেওয়া হবে না। ছবিটা ইচ্ছে করেই ঘরোয়া, দুই আঙুলে চিমটি দিয়ে ধরা যায় এমন জিনিস, যাতে আল্লাহর হিসাব কতটা নিখুঁত, তা নিয়ে কোনো সংশয় না থাকে।"
          },
          {
            "en": "For the people of the right hand, this measure works in a single direction. As-Sa'di is precise: they are not wronged of a fatil of the good they did. Al-Baghawi and al-Muyassar say the same — not the smallest fraction of their reward will be diminished. Justice here does not mean a cold ledger balanced to the last entry; it means that every hidden kindness, every unseen struggle, every prayer nobody witnessed is weighed and paid in full. Nothing good is lost in God's keeping. That is why the reading is joy and not dread.",
            "bn": "ডান হাতের লোকদের বেলায় এই মাপ কাজ করে এক দিকেই। সা'দী কথাটা স্পষ্ট করে দেন: তারা যে ভালো কাজ করেছে, তার সুতো পরিমাণও তাদের থেকে কমানো হবে না। বাগাভী ও মুয়াসসারও একই কথা বলেন: তাদের প্রতিদানের সামান্যতম অংশও কমবে না। এখানে ন্যায়বিচার মানে শেষ অঙ্ক পর্যন্ত মেলানো কোনো নীরস হিসাবের খাতা নয়। এর মানে, প্রতিটি গোপন দয়া, প্রতিটি অদেখা সংগ্রাম, কেউ দেখেনি এমন প্রতিটি নামাজ ওজন করা হবে, আর তার পুরো প্রতিদান দেওয়া হবে। আল্লাহর কাছে রাখা কোনো ভালো কাজ হারিয়ে যায় না। তাই আমলনামা পড়া সেদিন আনন্দের, ভয়ের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hand the Verse Names",
          "bn": "আয়াত যে হাতের কথা বলে"
        },
        "p": [
          {
            "en": "It is worth noticing what this verse does not say. It names only the people of the right hand and stops there; the left hand is left for other passages to describe. Ma'arif al-Qur'an points out that, across the Qur'an, it is the disbelievers who receive their record in the left hand, while those who take it in the right are the people of faith, whether steady or stumbling. Ibn Kathir sets our verse beside a fuller scene where both hands appear side by side (69:19), but here the verse deliberately keeps its light on the joyful hand.",
            "bn": "এ আয়াত কী বলে না, সেটাও খেয়াল করার মতো। এটি শুধু ডান হাতের লোকদের কথা বলে, আর সেখানেই থামে; বাঁ হাতের বর্ণনা রেখে দেয় অন্য আয়াতের জন্য। মাআরিফুল কুরআন দেখিয়ে দেয়, গোটা কুরআনে বাঁ হাতে আমলনামা পায় কাফিররা, আর ডান হাতে পায় ঈমানদাররা, তারা অবিচল থাকুক বা মাঝে মাঝে হোঁচট খাক। ইবন কাসীর আমাদের আয়াতটিকে রাখেন আরেকটি পূর্ণ দৃশ্যের পাশে, যেখানে দুই হাতের কথাই পাশাপাশি এসেছে (৬৯:১৯)। তবে এখানে আয়াত ইচ্ছে করেই তার আলো ধরে রাখে আনন্দের হাতটির ওপর।"
          },
          {
            "en": "This restraint carries a caution. The verse assigns no living person to either hand, and neither may we. It does not hand us a test for sorting our neighbours into the saved and the doomed; the disbeliever it warns of is a matter left to God, who alone reads the heart. What the verse does is turn the listener's eye inward — not to rank others, but to ask which hand his own life is reaching toward. The summons is public, but the reckoning it points to is deeply personal.",
            "bn": "এই সংযমের মধ্যে একটা সতর্কতাও আছে। আয়াত কোনো জীবিত মানুষকে কোনো হাতে বসায় না, আমরাও বসাতে পারি না। প্রতিবেশীদের নাজাতপ্রাপ্ত আর ধ্বংসপ্রাপ্ত দুই দলে ভাগ করার কোনো মাপকাঠি আয়াত আমাদের হাতে দেয় না। যে কাফিরের ব্যাপারে আয়াত সতর্ক করে, তার ফয়সালা আল্লাহর হাতে; অন্তরের খবর একমাত্র তিনিই জানেন। আয়াত বরং শ্রোতার চোখ ফিরিয়ে দেয় তার নিজের দিকে। অন্যদের বিচার করতে নয়, নিজেকে জিজ্ঞেস করতে: আমার জীবন কোন হাতের দিকে এগোচ্ছে? ডাকটা হবে সবার সামনে, কিন্তু যে হিসাবের দিকে তা ইঙ্গিত করে, তা একান্তই ব্যক্তিগত।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Your Imam Now",
          "bn": "এখনই নিজের ইমাম বেছে নিন"
        },
        "p": [
          {
            "en": "If the summons on that Day is by the imam a people followed, then the most practical question the verse asks is present-tense: whom am I following now? As-Sa'di's link makes it plain — the hand that receives the record is set by the guide the life was spent behind. A person is always following something: a teacher, a crowd, an appetite, a book. The verse quietly asks whether that leader is bound for the right hand or away from it, and it asks while there is still time to change guides.",
            "bn": "সেদিনের ডাক যদি হয় সেই ইমামের নামে, যাকে কোনো সম্প্রদায় অনুসরণ করেছে, তাহলে আয়াতের সবচেয়ে কাজের প্রশ্নটা আজকের: আমি এখন কাকে অনুসরণ করছি? সা'দীর ব্যাখ্যা কথাটা পরিষ্কার করে দেয়: আমলনামা কোন হাতে আসবে, তা ঠিক হয় সেই পথপ্রদর্শক দিয়ে, যার পেছনে জীবন কেটেছে। মানুষ সবসময় কিছু-না-কিছুর পেছনে চলে: কোনো শিক্ষক, লোকের ভিড়, কোনো খায়েশ, কোনো বই। আয়াত চুপচাপ জিজ্ঞেস করে, সেই নেতা কি ডান হাতের দিকে যাচ্ছে, নাকি তার উল্টো দিকে। আর প্রশ্নটা করে এমন সময়ে, যখন পথপ্রদর্শক বদলানোর সময় এখনো হাতে আছে।"
          },
          {
            "en": "The second half of the answer is being written now, line by line. The record read in joy on that Day is the same record my hands are filling today, in deeds seen and unseen. Nothing true will be left out of it, and nothing good will be shaved away — which is a mercy if the page is worth reading, and a warning if it is not. So the verse turns tomorrow's joy into today's work: follow a guide who leads to the right hand, and write, this week, a line you would be glad to read aloud on the Day you are called.",
            "bn": "জবাবের দ্বিতীয় অংশটা লেখা হচ্ছে এখনই, লাইনের পর লাইন। সেদিন আনন্দে যে আমলনামা পড়া হবে, সেটা তো এই আমলনামাই, যা আজ আমার হাত দুটো ভরে তুলছে দেখা-অদেখা আমলে। সত্য কিছুই এখান থেকে বাদ যাবে না, ভালো কিছুই কেটে নেওয়া হবে না। পাতাটা পড়ার মতো হলে এ এক রহমত, না হলে এক সতর্কবাণী। তাই আয়াত আগামীকালের আনন্দকে আজকের কাজে পরিণত করে: এমন পথপ্রদর্শকের পেছনে চলুন, যিনি ডান হাতের দিকে নিয়ে যান। আর এই সপ্তাহেই এমন একটা লাইন লিখুন, ডাক পড়ার দিনে যা সবাইকে পড়ে শোনাতে আপনার ভালো লাগবে।"
          }
        ]
      }
    ]
  },
  "17:78-79": {
    "sections": [
      {
        "h": {
          "en": "When the Pressure Mounted",
          "bn": "চাপের মুখে নামাজের হুকুম"
        },
        "p": [
          {
            "en": "The two verses arrive straight after a hard passage. In 17:73 to 17:77 the unbelievers nearly tempted the Prophet ﷺ away from what was revealed to him, Allah held him firm, and they nearly unsettled him from the land to drive him out. Al-Qurtubi opens his commentary on exactly this: having mentioned the plots of the idolaters, Allah commanded His Prophet to patience and to guarding the prayer, and in the prayer lies the seeking of help against enemies. He sets 15:97 and 15:98 beside it, where a chest tightened by their words is answered with glorification and prostration.",
            "bn": "আয়াত দুটি আসে এক কঠিন অংশের ঠিক পরে। ১৭:৭৩ থেকে ১৭:৭৭ আয়াতে দেখা যায়, কাফেররা নবী ﷺ-কে তাঁর প্রতি নাযিল হওয়া ওহী থেকে প্রায় সরিয়ে দিচ্ছিল। আল্লাহ তাঁকে অটল রাখলেন। তারা তাঁকে দেশ থেকে উৎখাত করে বের করে দেওয়ার উপক্রমও করেছিল। কুরতুবী তাঁর ব্যাখ্যা ঠিক এখান থেকেই শুরু করেন। মুশরিকদের চক্রান্তের কথা বলার পর আল্লাহ তাঁর নবীকে সবর আর নামাজের হেফাজতের হুকুম দিলেন, আর নামাজের ভেতরেই আছে শত্রুর বিরুদ্ধে সাহায্য চাওয়া। পাশে তিনি রাখেন ১৫:৯৭ ও ১৫:৯৮, যেখানে তাদের কথায় সংকুচিত বুকের জবাব দেওয়া হয়েছে তাসবীহ আর সিজদা দিয়ে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the placement the same way: prayer is offered as the best remedy against the harm enemies cause, and it adds 2:153, seek help through patience and prayer. As-Sa'di describes the command itself: Allah orders His Prophet to establish the prayer complete, outwardly and inwardly, in its times. Al-Qurtubi records the consensus of the commentators that the verse points to the obligatory prayers. The answer given to pressure here is not a counter-plot. It is a set of times for standing before Allah.",
            "bn": "মাআরিফুল কুরআনও অবস্থানটা এভাবেই পড়ে। শত্রুরা যে কষ্ট দেয়, তার সবচেয়ে ভালো প্রতিকার হিসেবে নামাজকে সামনে আনা হয়েছে। সেখানে ২:১৫৩ আয়াতও যোগ হয়: সবর ও নামাজের মাধ্যমে সাহায্য চাও। হুকুমটা কেমন, সা'দী তা বলেন: আল্লাহ তাঁর নবীকে বলছেন নামাজ পূর্ণভাবে কায়েম করতে, বাইরে ও ভেতরে, তার নির্ধারিত সময়ে। কুরতুবী জানান, এ আয়াত যে ফরজ নামাজের দিকেই ইশারা করছে, তাতে মুফাসসিরদের ইজমা আছে। চাপের জবাবে এখানে পাল্টা চক্রান্ত নেই। আছে আল্লাহর সামনে দাঁড়ানোর কয়েকটি নির্দিষ্ট সময়।"
          }
        ]
      },
      {
        "h": {
          "en": "Noon or Sunset?",
          "bn": "দুপুর, নাকি সূর্যাস্ত?"
        },
        "p": [
          {
            "en": "Establish the prayer li-duluki ash-shams, at the duluk of the sun. Its meaning is genuinely disputed. At-Tabari reports that some took it to be the sun's setting, so that the prayer meant is Maghrib. Ibn Mas'ud (RA), on a roof at sunset, recited the verse and swore by Him in whose hand his soul is that this was when the sun did duluk, the fasting person breaks his fast, and the prayer's time comes. Others took duluk to be the sun's slipping from the zenith, so that the prayer meant is Zuhr; at-Tabari gives this from Ibn Abbas through ash-Sha'bi, Ibn Umar, Abu Barzah al-Aslami, al-Hasan and Mujahid.",
            "bn": "লিদুলূকিশ শামস: সূর্যের দুলূকের সময় নামাজ কায়েম করো। দুলূক বলতে কী বোঝায়, তা নিয়ে সত্যিকারের মতভেদ আছে। তাবারী জানান, কেউ কেউ একে সূর্যাস্ত ধরেছেন, তখন উদ্দিষ্ট নামাজ মাগরিব। ইবন মাসউদ (রাঃ) একবার সূর্যাস্তের সময় এক ছাদে আয়াতটি পড়লেন। তারপর সেই সত্তার কসম খেয়ে বললেন, যাঁর হাতে তাঁর প্রাণ: এটাই সেই সময়, যখন সূর্যের দুলূক হলো, রোজাদার ইফতার করে, আর নামাজের ওয়াক্ত আসে। অন্যরা দুলূক ধরেছেন মাঝ আকাশ থেকে সূর্যের হেলে পড়া, তখন উদ্দিষ্ট নামাজ যোহর। তাবারী এ মত আনেন শা'বীর সূত্রে ইবন আব্বাস (রাঃ) থেকে, আর ইবন উমর (রাঃ), আবু বারযা আসলামী (রাঃ), হাসান ও মুজাহিদ থেকে।"
          },
          {
            "en": "The lists do not line up neatly. Al-Qurtubi names Ali, Ibn Mas'ud and Ubayy ibn Ka'b for sunset, adding that it is also narrated from Ibn Abbas, and Umar, his son, Abu Hurayrah and Ibn Abbas for the decline. Al-Baghawi puts an-Nakha'i, ad-Dahhak and as-Suddi with Ibn Mas'ud, and Mujahid, Qatada and most of the Successors with Ibn Abbas and Ibn Umar. Ibn Kathir puts ad-Dahhak on the side of the decline and records the decline from Ibn Mas'ud and Mujahid as well. Some of the same names, Ibn Abbas, Ibn Mas'ud and Mujahid, are reported on both sides.",
            "bn": "নামের তালিকাগুলো সুন্দরভাবে মেলে না। কুরতুবী সূর্যাস্তের পক্ষে আনেন আলী (রাঃ), ইবন মাসউদ (রাঃ) ও উবাই ইবন কা'ব (রাঃ)-এর নাম, আর বলেন, ইবন আব্বাস (রাঃ) থেকেও এটি বর্ণিত। হেলে পড়ার পক্ষে তিনি রাখেন উমর (রাঃ), তাঁর ছেলে, আবু হুরাইরা (রাঃ) ও ইবন আব্বাস (রাঃ)-কে। বাগাভী ইবন মাসউদের সঙ্গে রাখেন নাখাঈ, যাহহাক ও সুদ্দীকে। আর ইবন আব্বাস ও ইবন উমরের সঙ্গে রাখেন মুজাহিদ, কাতাদা ও অধিকাংশ তাবেয়ীকে। ইবন কাসীর আবার যাহহাককে রাখেন হেলে পড়ার দলে, আর ইবন মাসউদ ও মুজাহিদ থেকেও সে মত বর্ণনা করেন। ইবন আব্বাস, ইবন মাসউদ, মুজাহিদ: একই নাম দুই দিকেই পাওয়া যায়।"
          },
          {
            "en": "The word itself allows both. At-Tabari says duluk in the speech of the Arabs means inclining; al-Baghawi says the meaning gathers both senses, since the sun inclines when it passes the zenith and when it sets; al-Qurtubi quotes Ibn Atiyyah that the first of duluk is the decline and its last is the setting. Each commentator then states a preference. At-Tabari chooses the decline and cites reports from the Prophet ﷺ, conceding that some of their chains are open to question; al-Baghawi chooses it because more hold it and because the verse then gathers every prayer time. This article reports both readings and chooses neither.",
            "bn": "শব্দটি নিজেই দুটোর জায়গা রাখে। তাবারী বলেন, আরবদের ভাষায় দুলূক মানে হেলে পড়া। বাগাভী বলেন, অর্থটি দুই অর্থকেই ধারণ করে, কারণ সূর্য মাঝ আকাশ পেরোলেও হেলে, অস্ত যাওয়ার সময়ও হেলে। কুরতুবী ইবন আতিয়্যার কথা আনেন: দুলূকের শুরু হেলে পড়া, আর তার শেষ সূর্যাস্ত। এরপর প্রত্যেক মুফাসসির নিজের পছন্দ জানান। তাবারী হেলে পড়াকে বেছে নেন এবং নবী ﷺ থেকে কিছু বর্ণনা আনেন, তবে স্বীকার করেন, সেগুলোর কোনো কোনো সনদ প্রশ্নের ঊর্ধ্বে নয়। বাগাভীও এটাই বেছে নেন, কারণ এ মতের লোক বেশি, আর তখন আয়াতটি সব ওয়াক্তকে একসঙ্গে ধরে। এ লেখা দুটো মতই তুলে ধরে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "From Decline to Darkness",
          "bn": "হেলে পড়া থেকে গাঢ় অন্ধকার"
        },
        "p": [
          {
            "en": "On the reading of the decline, the commentators show the verse holding all five prayers. The Muyassar runs from the sun's passing the zenith at midday to the darkness of night, and says Zuhr, Asr, Maghrib and Isha enter it, with Fajr named after. As-Sa'di divides the span: li-duluk, the sun's leaning towards the western horizon, brings in Zuhr and Asr; ila ghasaq, its darkness, brings in Maghrib and Isha; so the verse mentions the five times of the prescribed prayers. Ibn Kathir agrees: the verse takes in the five times.",
            "bn": "হেলে পড়ার মত ধরলে মুফাসসিরগণ দেখান, আয়াতটি পাঁচ ওয়াক্তকেই ধরে রেখেছে। মুয়াসসার সময়টা টানে দুপুরে সূর্য মাঝ আকাশ পেরোনো থেকে রাতের অন্ধকার পর্যন্ত, আর বলে, এর ভেতরে পড়ে যোহর, আসর, মাগরিব ও ইশা। ফজরের কথা আসে আলাদা করে। সা'দী সময়টাকে ভাগ করেন। লিদুলূক, অর্থাৎ সূর্যের পশ্চিম দিগন্তের দিকে ঝুঁকে পড়া, এতে আসে যোহর ও আসর। ইলা গাসাক, অর্থাৎ রাতের অন্ধকার, এতে আসে মাগরিব ও ইশা। তাই এ আয়াতে ফরজ নামাজের পাঁচটি ওয়াক্তের উল্লেখ আছে। ইবন কাসীরও একমত: আয়াতটি পাঁচ ওয়াক্তকেই ধরে।"
          },
          {
            "en": "Ghasaq al-layl has its own spread of glosses. At-Tabari explains it as the night's coming on and drawing near with its darkness. He reports the beginning of the night from Ibn Abbas and 'Ikrimah, sunset from Mujahid, the Maghrib prayer from Qatada, and the Asr prayer from Abu Ja'far; he prefers Maghrib, since ghasaq can only come after the sun has gone. Al-Qurtubi gives, through Malik, Ibn Abbas's words that duluk is the sun's inclining and ghasaq is the gathering of the night and its darkness.",
            "bn": "গাসাকুল লাইলেরও কয়েক রকম ব্যাখ্যা আছে। তাবারী একে ব্যাখ্যা করেন অন্ধকার নিয়ে রাতের এগিয়ে আসা ও কাছে আসা হিসেবে। ইবন আব্বাস (রাঃ) ও ইকরিমা থেকে তিনি আনেন রাতের শুরু, মুজাহিদ থেকে সূর্যাস্ত, কাতাদা থেকে মাগরিবের নামাজ, আর আবু জা'ফর থেকে আসরের নামাজ। তাবারী মাগরিবকেই অগ্রাধিকার দেন, কারণ গাসাক সূর্য ডোবার পরেই আসতে পারে। কুরতুবী মালিকের সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: দুলূক হলো সূর্যের হেলে পড়া, আর গাসাক হলো রাতের জমাট বাঁধা ও তার অন্ধকার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Named for Recitation",
          "bn": "তিলাওয়াতের নামে এক নামাজ"
        },
        "p": [
          {
            "en": "Wa-qur'ana al-fajr: and the qur'an of dawn. The commentators here take it as the Fajr prayer, at-Tabari as what is recited in it. Why name a prayer after its recitation? Al-Baghawi says because it is not valid without the Qur'an. Al-Qurtubi, from az-Zajjaj, says because its recitation is long and aloud. As-Sa'di says because lengthening the recitation is prescribed in it more than in other prayers, and naming an act of worship by one of its parts shows that part is obligatory.",
            "bn": "ওয়া কুরআনাল ফাজর: আর ভোরের কুরআন। এখানকার মুফাসসিরগণ এর মানে ধরেন ফজরের নামাজ, তাবারী ধরেন তাতে যা তিলাওয়াত হয়। একটি নামাজকে তার তিলাওয়াতের নামে ডাকা হলো কেন? বাগাভী বলেন, কারণ কুরআন ছাড়া এ নামাজ শুদ্ধ হয় না। কুরতুবী যাজ্জাজের সূত্রে বলেন, কারণ এর তিলাওয়াত লম্বা ও উচ্চস্বরে। সা'দী বলেন, অন্য নামাজের চেয়ে এতে লম্বা তিলাওয়াতের বিধান বেশি। আর কোনো ইবাদতকে তার একটি অংশের নামে ডাকলে বোঝা যায়, সেই অংশটি ফরজ।"
          },
          {
            "en": "Then the reason: inna qur'ana al-fajri kana mashhuda, the recitation of dawn is witnessed. Ibn Kathir, al-Qurtubi and al-Baghawi all cite Abu Hurayrah's report, which al-Bukhari records: 'The prayer in congregation exceeds the prayer of one person alone by twenty-five degrees, and the angels of the night and the angels of the day gather at the Subh prayer.' Abu Hurayrah would then say: recite if you wish, and the recitation of dawn; indeed the recitation of dawn is ever witnessed.",
            "bn": "তারপর কারণ: ইন্না কুরআনাল ফাজরি কানা মাশহূদা, ভোরের তিলাওয়াতে সাক্ষীরা হাজির থাকে। ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই আবু হুরাইরা (রাঃ)-এর বর্ণনা আনেন, যা বুখারী সংকলন করেছেন: 'একা একজনের নামাজের চেয়ে জামাতের নামাজ পঁচিশ গুণ বেশি মর্যাদার, আর রাতের ফেরেশতা ও দিনের ফেরেশতারা সুবহের নামাজে একত্র হন।' তারপর আবু হুরাইরা (রাঃ) বলতেন: চাইলে পড়ো, ওয়া কুরআনাল ফাজর, ইন্না কুরআনাল ফাজরি কানা মাশহূদা।"
          },
          {
            "en": "Ibn Mas'ud (RA) describes the meeting as a change of guard; Ibn Kathir quotes him: the two watches meet at the Fajr prayer, and one ascends while the other stays. At-Tabari also gives a long report from Abu ad-Darda' linking the verse to the hour before dawn, in which Allah and the angels witness it; Ibn Kathir notes that one narrator, Ziyada, is alone in transmitting it. So the hour that feels the least observed is the one the verse calls attended.",
            "bn": "ইবন মাসউদ (রাঃ) এই মিলনকে বর্ণনা করেন পাহারা বদলের মতো করে। ইবন কাসীর তাঁর কথা আনেন: দুই পাহারাদার দল ফজরের নামাজে মিলিত হয়, একদল ওপরে উঠে যায়, আরেক দল থেকে যায়। তাবারী আবুদ দারদা (রাঃ) থেকে একটি দীর্ঘ বর্ণনাও আনেন, যা আয়াতটিকে ভোরের আগের প্রহরের সঙ্গে যুক্ত করে, আর তাতে বলা হয়েছে, আল্লাহ ও ফেরেশতারা এর সাক্ষী থাকেন। ইবন কাসীর মনে করিয়ে দেন, যিয়াদা নামের এক বর্ণনাকারী একাই এটি বর্ণনা করেছেন। যে প্রহরকে সবচেয়ে অদেখা মনে হয়, আয়াত সেটাকেই বলছে সাক্ষীতে ভরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Rising From Sleep",
          "bn": "ঘুম ভেঙে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Wa-mina al-layli fa-tahajjad bihi: and in part of the night, keep vigil with it. The root is one of the Arabic words with opposite meanings: hajada can mean he slept and he stayed awake. At-Tabari defines tahajjud as waking and keeping vigil after a sleep in the night, hujud itself being sleep. Ibn Kathir says tahajjud is what comes after sleep, the view of 'Alqamah, al-Aswad and an-Nakha'i and the known usage of the Arabs, and he reads al-Hasan's gloss, whatever comes after Isha, in that light. Ma'arif, following al-Mazhari, says the words do not make prior sleep a condition.",
            "bn": "ওয়া মিনাল লাইলি ফাতাহাজ্জাদ বিহী: আর রাতের কিছু অংশে এর সঙ্গে জেগে থাকো। ধাতুটি আরবি ভাষার সেই শব্দগুলোর একটি, যার অর্থ পরস্পরবিরোধী: হাজাদা মানে ঘুমাল, আবার জেগে থাকল। তাবারী তাহাজ্জুদের সংজ্ঞা দেন রাতে এক ঘুমের পর জেগে ওঠা ও জেগে থাকা, আর হুজূদ মানে খোদ ঘুম। ইবন কাসীর বলেন, তাহাজ্জুদ হলো ঘুমের পরের নামাজ। এটা আলকামা, আসওয়াদ ও নাখাঈর মত, আর আরবদের পরিচিত ব্যবহারও তা-ই। হাসানের ব্যাখ্যা, ইশার পরে যা কিছু, সেটাও তিনি এ অর্থেই পড়েন। মাআরিফুল কুরআন মাযহারীর অনুসরণে বলে, আয়াতের শব্দে আগে ঘুমানোর শর্ত নেই।"
          },
          {
            "en": "At-Tabari keeps a picture of it. A man of the Ansar travelling with the Prophet ﷺ resolved to watch how he prayed. The Prophet ﷺ slept, woke and recited four verses from the end of Al Imran, beginning at 3:190, then used the tooth-stick, made wudu and prayed, then slept and did the same again; and they hold, the report says, that this is the tahajjud Allah commanded. Ibn Kathir sets the verse beside a hadith in Muslim from Abu Hurayrah: 'The best fasting after Ramadan is Allah's month al-Muharram, and the best prayer after the obligatory prayer is the night prayer.'",
            "bn": "তাবারী এর একটি ছবি ধরে রেখেছেন। এক আনসারি সাহাবি নবী ﷺ-এর সঙ্গে সফরে ছিলেন। তিনি ঠিক করলেন, দেখবেন নবী ﷺ কীভাবে নামাজ পড়েন। নবী ﷺ ঘুমালেন, তারপর জেগে আলে ইমরানের শেষ দিকের চারটি আয়াত পড়লেন, ৩:১৯০ থেকে শুরু করে। তারপর মিসওয়াক করলেন, অজু করলেন, নামাজ পড়লেন। আবার ঘুমালেন, আবার একইভাবে করলেন। বর্ণনায় আছে, লোকেরা মনে করে, এটাই সেই তাহাজ্জুদ, যার হুকুম আল্লাহ দিয়েছেন। ইবন কাসীর আয়াতের পাশে রাখেন মুসলিমে আবু হুরাইরা (রাঃ) থেকে বর্ণিত হাদীস: 'রমজানের পরে সবচেয়ে উত্তম রোজা আল্লাহর মাস মুহাররমের রোজা, আর ফরজ নামাজের পরে সবচেয়ে উত্তম নামাজ রাতের নামাজ।'"
          }
        ]
      },
      {
        "h": {
          "en": "Extra, and Only His",
          "bn": "অতিরিক্ত, শুধু তাঁর জন্য"
        },
        "p": [
          {
            "en": "Nafilatan laka: as an extra for you. Night prayer is extra for anyone who has prayed his obligations, so why single out the Prophet ﷺ? At-Tabari reports two answers. The first, from Ibn Abbas, is that it was obligatory on him alone and voluntary for others; at-Tabari prefers it. Al-Baghawi adds that night prayer was first obligatory on all through 73:2, then lightened for the community through 73:20, while the duty stayed on him. The other answer, from Mujahid, is that his sins past and future were forgiven, so his extra deeds expiated nothing and stayed pure extras, while other people's extras expiate their sins.",
            "bn": "নাফিলাতান লাকা: তোমার জন্য অতিরিক্ত। যে ফরজ আদায় করেছে, তার জন্য তো রাতের নামাজ এমনিতেই অতিরিক্ত। তাহলে নবী ﷺ-কে আলাদা করে বলা কেন? তাবারী দুটি উত্তর আনেন। ইবন আব্বাস (রাঃ) থেকে প্রথমটি: এটা শুধু তাঁর ওপর ফরজ ছিল, অন্যদের জন্য নফল। তাবারী এটাকেই অগ্রাধিকার দেন। বাগাভী যোগ করেন, রাতের নামাজ প্রথমে ৭৩:২ আয়াত দিয়ে সবার ওপর ফরজ ছিল। পরে ৭৩:২০ আয়াতে উম্মতের জন্য তা হালকা হলো, কিন্তু তাঁর ওপর দায়িত্ব রয়ে গেল। মুজাহিদ থেকে দ্বিতীয় উত্তর: তাঁর আগের ও পরের সব গুনাহ মাফ হয়ে গিয়েছিল, তাই তাঁর অতিরিক্ত আমল কোনো কাফফারা হতো না, খাঁটি অতিরিক্তই থাকত। অন্যদের অতিরিক্ত আমল তাদের গুনাহের কাফফারা হয়।"
          },
          {
            "en": "The two sides answer each other. At-Tabari calls Mujahid's view meaningless: after 48:2 the Prophet ﷺ sought forgiveness more than ever, he was told in 110:3 to glorify and seek forgiveness, and a hundred such requests were counted from him in one sitting. Al-Qurtubi finds the first view far-fetched: calling an obligation nafl is only a figure of speech, and the hadith fixes the obligatory prayers at five. As-Sa'di keeps both open: a raising in rank for him where it is expiation for others, or an extra duty given out of his honour with Allah.",
            "bn": "দুই পক্ষই একে অপরের জবাব দেয়। তাবারী মুজাহিদের মতকে অর্থহীন বলেন। তাঁর যুক্তি: ৪৮:২ নাযিলের পর নবী ﷺ আগের চেয়েও বেশি ইস্তিগফার করতেন, ১১০:৩ আয়াতে তাঁকে তাসবীহ ও ইস্তিগফারের হুকুম দেওয়া হয়েছিল, আর এক মজলিসেই তাঁর কাছ থেকে একশবার ইস্তিগফার গোনা হতো। কুরতুবী আবার প্রথম মতটিকে দূরবর্তী মনে করেন। ফরজকে নফল বলা কেবল রূপক অর্থে চলে, আর হাদীস ফরজ নামাজকে পাঁচেই বেঁধে দিয়েছে। সা'দী দুটো সম্ভাবনাই খোলা রাখেন। অন্যদের জন্য যা কাফফারা, তাঁর জন্য তা মর্যাদা বাড়ানো। অথবা আল্লাহর কাছে তাঁর সম্মানের কারণেই তাঁকে একটি বাড়তি দায়িত্ব দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Station of Intercession",
          "bn": "শাফাআতের মাকাম"
        },
        "p": [
          {
            "en": "'Asa an yab'athaka rabbuka maqaman mahmuda: it may be that your Lord will raise you to a praised station. At-Tabari, al-Baghawi and al-Qurtubi all say that 'asa from Allah is binding. At-Tabari reports that most of the people of knowledge took the station to be where the Prophet ﷺ stands on the Day of Resurrection to intercede for people, so that their Lord relieves them. Ibn Kathir gives this from Ibn Abbas, Mujahid, al-Hasan and Qatada, and as-Sa'di and al-Baghawi call it the station where the first and the last praise him.",
            "bn": "আসা আন ইয়াব'আসাকা রাব্বুকা মাকামাম মাহমূদা: আশা করা যায়, তোমার রব তোমাকে এক প্রশংসিত মাকামে উঠাবেন। তাবারী, বাগাভী ও কুরতুবী তিনজনই বলেন, আল্লাহর পক্ষ থেকে 'আসা' মানে অবধারিত। তাবারী জানান, অধিকাংশ আলেমের মতে এ সেই মাকাম, যেখানে কিয়ামতের দিন নবী ﷺ মানুষের জন্য সুপারিশ করতে দাঁড়াবেন, যাতে তাদের রব তাদের কষ্ট থেকে স্বস্তি দেন। ইবন কাসীর এ মত আনেন ইবন আব্বাস (রাঃ), মুজাহিদ, হাসান ও কাতাদা থেকে। সা'দী ও বাগাভী একে বলেন সেই মাকাম, যেখানে আগের ও পরের সবাই তাঁর প্রশংসা করবে।"
          },
          {
            "en": "Al-Qurtubi and Ibn Kathir cite Ibn Umar's words, which al-Bukhari records: 'On the Day of Resurrection the people will become kneeling crowds, each nation following its prophet, saying: O so-and-so, intercede, until the intercession ends with the Prophet ﷺ. That is the day Allah raises him to the praised station.' Al-Qurtubi also cites at-Tirmidhi's report from Abu Hurayrah that the Messenger of Allah ﷺ, asked about this verse, said: 'It is the intercession.' At-Tirmidhi grades it hasan.",
            "bn": "কুরতুবী ও ইবন কাসীর ইবন উমর (রাঃ)-এর কথা আনেন, যা বুখারী সংকলন করেছেন: 'কিয়ামতের দিন মানুষ দলে দলে হাঁটু গেড়ে বসে পড়বে। প্রত্যেক জাতি নিজ নবীর পেছনে যাবে আর বলবে, হে অমুক, সুপারিশ করুন। শেষে সুপারিশের দায় গিয়ে পৌঁছাবে নবী ﷺ-এর কাছে। সেদিনই আল্লাহ তাঁকে প্রশংসিত মাকামে উঠাবেন।' কুরতুবী তিরমিযীর বর্ণনাও আনেন। আবু হুরাইরা (রাঃ) বলেন, রাসূলুল্লাহ ﷺ-কে এ আয়াত সম্পর্কে জিজ্ঞেস করা হলে তিনি বললেন: 'এটা শাফাআত।' তিরমিযী একে হাসান বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Readings Beside the Majority",
          "bn": "সংখ্যাগরিষ্ঠ মতের পাশের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The station has other glosses too. Al-Qurtubi counts four: the intercession, which he calls the soundest; being given the banner of praise, which he says does not clash with the first; bringing out of the Fire those he intercedes for, from Jabir in Muslim; and a report from Mujahid. At-Tabari gives that report through Layth: He will seat him with Him on His Throne. Al-Baghawi records from Mujahid that He will seat him on the Throne, and from Abdullah ibn Salam that He will seat him on the Kursi. Ibn Kathir, as-Sa'di, the Muyassar and Ma'arif do not raise the Mujahid report.",
            "bn": "মাকামটির আরও কয়েকটি ব্যাখ্যা আছে। কুরতুবী চারটি গোনেন। প্রথমটি শাফাআত, যাকে তিনি সবচেয়ে সহীহ বলেন। দ্বিতীয়টি হামদের পতাকা পাওয়া, যা তাঁর মতে প্রথমটির সঙ্গে সাংঘর্ষিক নয়। আরেকটি হলো, যাদের জন্য তিনি সুপারিশ করবেন তাদের জাহান্নাম থেকে বের করে আনা, যা মুসলিমে জাবির (রাঃ) থেকে এসেছে। আর আছে মুজাহিদের একটি বর্ণনা। তাবারী সেটি আনেন লাইসের সূত্রে: তিনি তাঁকে নিজের সঙ্গে তাঁর আরশে বসাবেন। বাগাভী মুজাহিদ থেকে আনেন, তিনি তাঁকে আরশে বসাবেন, আর আবদুল্লাহ ইবন সালাম (রাঃ) থেকে আনেন, কুরসিতে বসাবেন। ইবন কাসীর, সা'দী, মুয়াসসার ও মাআরিফুল কুরআন মুজাহিদের বর্ণনাটি আনেন না।"
          },
          {
            "en": "The two commentators who discuss the Mujahid report handle it differently. At-Tabari holds the intercession to be the correct reading, because the report from the Prophet ﷺ establishes it, yet says Mujahid's statement is not refuted by any report or by reasoning. Al-Qurtubi calls at-Tabari's defence of it an overreach that works only with a subtle reading and is far-fetched, though he also calls the reading not impossible; he quotes Abu Umar that it is one of two opinions of Mujahid the scholars set aside, and says the word with Him points to rank and honour, not place. Neither handling is weighed here.",
            "bn": "যে দুই মুফাসসির মুজাহিদের বর্ণনাটি নিয়ে আলোচনা করেন, তাঁরা একে দুই রকমভাবে দেখেন। তাবারী শাফাআতকেই সঠিক ব্যাখ্যা মনে করেন, কারণ নবী ﷺ থেকে আসা বর্ণনা তা প্রতিষ্ঠিত করে। তবু তিনি বলেন, মুজাহিদের কথাটি কোনো বর্ণনা বা যুক্তি দিয়ে খণ্ডিত হয়নি। কুরতুবী তাবারীর এই সমর্থনকে বাড়াবাড়ি বলেন। তাঁর মতে এটা কেবল সূক্ষ্ম ব্যাখ্যায় টেকে, আর তা দূরবর্তী, যদিও ব্যাখ্যাটিকে তিনি অসম্ভবও বলেন না। তিনি আবু উমরের কথা আনেন যে এটি মুজাহিদের সেই দুই মতের একটি, যা আলেমগণ পরিত্যাগ করেছেন। তিনি আরও বলেন, 'তাঁর সঙ্গে' কথাটি মর্যাদা ও সম্মান বোঝায়, স্থান নয়। এখানে কোনো দৃষ্টিভঙ্গিকেই পাল্লায় তোলা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Night Leads There",
          "bn": "রাত কেন সেখানে পৌঁছে দেয়"
        },
        "p": [
          {
            "en": "Why should night prayer lead to that station? Al-Qurtubi reports two answers. One is that Allah makes whatever He wills a cause of His favour, whether or not the wisdom is known. The other is that night prayer is solitude with Allah and intimate speech with Him apart from people, so he was given that solitude and speech, the praised station, in which creation differs by rank and Muhammad ﷺ is highest. Then 17:80 gives the prayer for a sound entry and exit.",
            "bn": "রাতের নামাজ কেন সেই মাকামে পৌঁছে দেবে? কুরতুবী দুটি উত্তর আনেন। একটি হলো, আল্লাহ যা চান তাকেই নিজের অনুগ্রহের উপলক্ষ বানান, তার হিকমত জানা যাক বা না যাক। অন্যটি হলো, রাতের নামাজ মানে মানুষ থেকে দূরে আল্লাহর সঙ্গে নির্জনে থাকা আর তাঁর সঙ্গে একান্তে কথা বলা। তাই তাঁকে সেই নির্জনতা ও একান্ত কথাই দেওয়া হলো, আর সেটাই প্রশংসিত মাকাম, যেখানে সৃষ্টিকুল মর্যাদায় ভিন্ন ভিন্ন, আর সবার ওপরে মুহাম্মাদ ﷺ। এরপর ১৭:৮০ আয়াত শেখায় সঠিকভাবে প্রবেশ ও সঠিকভাবে বের হওয়ার দোয়া।"
          }
        ]
      }
    ]
  },
  "17:80": {
    "sections": [
      {
        "h": {
          "en": "Fourteen Words After a Threat",
          "bn": "হুমকির পরে চৌদ্দটি শব্দ"
        },
        "p": [
          {
            "en": "Wa qul rabbi adkhilni mudkhala sidqin wa akhrijni mukhraja sidqin waj'al li min ladunka sultanan nasira: and say, My Lord, cause me to enter an entrance of truth and cause me to exit an exit of truth, and grant me from Yourself a supporting authority. Fourteen Arabic words, given to the Prophet ﷺ as a command to pray them. At-Tabari reads them against 17:76, where the Makkans had nearly provoked him out of the land to expel him from it. Between that threat and this prayer come the prayer times and night vigil of 17:78 and 17:79.",
            "bn": "ওয়া কুল রাব্বি আদখিলনী মুদখালা সিদকিন ওয়া আখরিজনী মুখরাজা সিদকিন ওয়াজ'আল লী মিন লাদুনকা সুলতানান নাসীরা: বলো, হে আমার রব, আমাকে প্রবেশ করাও সত্যের প্রবেশে, বের করো সত্যের প্রস্থানে, আর তোমার কাছ থেকে আমাকে দাও সাহায্যকারী এক কর্তৃত্ব। আরবিতে মোট চৌদ্দটি শব্দ। নবী ﷺ-কে এগুলো দেওয়া হয়েছে দোয়া হিসেবে পড়ার হুকুমসহ। তাবারী আয়াতটি পড়েন ১৭:৭৬ আয়াতের প্রসঙ্গ মাথায় রেখে। সেখানে বলা হয়েছে, মক্কাবাসী তাঁকে দেশ থেকে উৎখাত করে বের করে দেওয়ার উপক্রম করেছিল। সেই হুমকি আর এই দোয়ার মাঝখানে আছে ১৭:৭৮ ও ১৭:৭৯ আয়াতের নামাজের সময় আর রাতের তাহাজ্জুদ।"
          },
          {
            "en": "Mudkhal and mukhraj carry a damma on the mim. Al-Baghawi and al-Qurtubi both take them as verbal nouns: the causing to enter, the causing to exit. Al-Qurtubi compares the wording of 23:29, my Lord, land me at a blessed landing. He calls the damma the reading of the generality, and notes that al-Hasan, Abu al-'Aliya and Nasr ibn 'Asim read madkhal and makhraj with a fatha, from the three-letter verb, meaning the plain entering and exiting. Ma'arif al-Qur'an treats the words instead as nouns of place and time.",
            "bn": "মুদখাল আর মুখরাজ শব্দ দুটির মীমে পেশ। বাগাভী ও কুরতুবী দুজনেই এগুলোকে কাজের নাম হিসেবে পড়েন: প্রবেশ করানো আর বের করে আনা। কুরতুবী তুলনা করেন ২৩:২৯ আয়াতের সঙ্গে, যেখানে আছে: হে আমার রব, আমাকে বরকতময় স্থানে নামাও। কুরতুবী বলেন, পেশসহ পড়াই অধিকাংশের কিরাআত। তবে হাসান, আবুল আলিয়া ও নাসর ইবন আসিম মীমে যবর দিয়ে মাদখাল ও মাখরাজ পড়েছেন, তিন অক্ষরের ক্রিয়া থেকে, যার অর্থ শুধু ঢোকা আর বের হওয়া। মাআরিফুল কুরআন আবার শব্দ দুটিকে প্রবেশ ও প্রস্থানের জায়গা আর সময়ের নাম হিসেবে ব্যাখ্যা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sidq Adds",
          "bn": "সিদক শব্দটি যা যোগ করে"
        },
        "p": [
          {
            "en": "Both requests hang on one word, sidq, truth. Ma'arif al-Qur'an explains that Arabic uses sidq for any act that is right and good both outwardly and inwardly, so an entrance of sidq is one wholly in line with Allah's will and pleasure and made in the best of circumstances. It sets the phrase beside three others built the same way: qadama sidqin, a footing of truth, in 10:2; lisana sidqin, a tongue of truth, in 26:84; and maq'adi sidqin, a seat of truth, in 54:55.",
            "bn": "দুটি চাওয়াই একটি শব্দের ওপর দাঁড়িয়ে: সিদক, মানে সত্য। মাআরিফুল কুরআন বুঝিয়ে বলে, আরবিতে সিদক বলা হয় এমন প্রতিটি কাজকে, যা বাইরে-ভেতরে দুই দিক থেকেই ঠিক ও উত্তম। তাই সত্যের প্রবেশ হলো সেই প্রবেশ, যা পুরোপুরি আল্লাহর ইচ্ছা ও সন্তুষ্টি মেনে হয়, আর হয় সবচেয়ে ভালো অবস্থায়। একই গড়নের আরও তিনটি কথা পাশে রাখে সে: ১০:২ আয়াতে কাদামা সিদকিন, সত্যের পদক্ষেপ; ২৬:৮৪ আয়াতে লিসানা সিদকিন, সত্যের সুনাম; আর ৫৪:৫৫ আয়াতে মাক'আদি সিদকিন, সত্যের আসন।"
          },
          {
            "en": "Al-Baghawi gives another reason for the adjective. The entering and the leaving are called truthful, he says, because of what they lead to: help, honour and the rising power of the religion, just as Allah spoke of a footing of truth in 10:2. His reading looks ahead to where the journey ends; Ma'arif's describes the journey itself. The two do not collide.",
            "bn": "বিশেষণটির আরেকটি কারণ দেখান বাগাভী। তাঁর মতে, ঢোকা আর বের হওয়াকে সত্যের বলা হয়েছে এগুলোর পরিণতির কারণে: সাহায্য, সম্মান আর দ্বীনের প্রতিষ্ঠা। যেমন ১০:২ আয়াতে আল্লাহ এক পদক্ষেপকে বলেছেন সত্যের পদক্ষেপ। বাগাভীর চোখ পথের শেষ মাথায়, আর মাআরিফুল কুরআন বলে পথটা নিজে কেমন। দুই ব্যাখ্যায় কোনো সংঘাত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Out of Makkah, Into Madinah",
          "bn": "মক্কা ছেড়ে মদীনার পথে"
        },
        "p": [
          {
            "en": "At-Tirmidhi records the report of Ibn 'Abbas (RA), which Ibn Kathir also gives through Imam Ahmad and at-Tabari through his own teachers. In the Dar-us-Salam translation it reads: \"The Prophet (ﷺ) was in Makkah, then Hijrah was ordered, so the following was revealed to him: Say: 'My Lord! Let my entry be good, and likewise my exit be good. And grant me from You a helping authority (17:80).'\" At-Tirmidhi grades it hasan sahih (Jami' at-Tirmidhi 3139). Al-Baghawi and Ma'arif al-Qur'an build their readings on it as well.",
            "bn": "তিরমিযী ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা এনেছেন। ইবন কাসীর এটি এনেছেন ইমাম আহমাদের সূত্রে, আর তাবারী নিজের শিক্ষকদের সূত্রে। ইবন আব্বাস (রাঃ) বলেন: \"নবী ﷺ মক্কায় ছিলেন। তারপর তাঁকে হিজরতের হুকুম দেওয়া হলো। তখন তাঁর ওপর নাজিল হলো: বলো, হে আমার রব, আমাকে প্রবেশ করাও সত্যের প্রবেশে, বের করো সত্যের প্রস্থানে, আর তোমার কাছ থেকে আমাকে দাও সাহায্যকারী এক কর্তৃত্ব (১৭:৮০)।\" তিরমিযী নিজে একে হাসান সহীহ বলেছেন (জামি' আত-তিরমিযী ৩১৩৯)। বাগাভী আর মাআরিফুল কুরআনও এর ওপর ভর করেই ব্যাখ্যা সাজিয়েছে।"
          },
          {
            "en": "Al-Hasan al-Basri tells the setting. When the disbelievers of Makkah plotted against the Messenger ﷺ to kill him, drive him out or bind him, and Allah willed that the people of Makkah be fought, He commanded him to leave for Madinah; that, al-Hasan says, is what this verse means. Qatada makes the mapping exact: the entrance of truth is Madinah, the exit of truth is Makkah. Ibn Zayd adds the moment: he said these words when he left as an emigrant.",
            "bn": "প্রেক্ষাপটটা বলেন হাসান বসরী। মক্কার কাফিররা যখন রাসূল ﷺ-কে হত্যা, বিতাড়ন বা বন্দি করার ষড়যন্ত্র করল, আর আল্লাহ চাইলেন মক্কাবাসীর বিরুদ্ধে লড়াই হোক, তখন তিনি তাঁকে মদীনায় চলে যাওয়ার হুকুম দিলেন। হাসান বলেন, এ আয়াত সেই কথাই বলছে। কাতাদা জায়গা দুটো স্পষ্ট করে দেন: সত্যের প্রবেশ মদীনা, সত্যের প্রস্থান মক্কা। ইবন যায়দ মুহূর্তটাও জানিয়ে দেন: হিজরতের জন্য বের হওয়ার সময়ই তিনি এ কথাগুলো বলেছিলেন।"
          },
          {
            "en": "Ibn Kathir calls this the best known of the views, then the soundest, and notes that it is the choice of Ibn Jarir, that is at-Tabari. At-Tabari's reason is the context. The verse follows the news that the idolaters meant to provoke the Prophet ﷺ out of Makkah, so it is a command to ask Allah to bring him out of that town with an exit of truth and into the town He moved him to with an entrance of truth. Ma'arif al-Qur'an asks why entering is named first, and suggests, with a perhaps, that the journey's aim was put before the pain of leaving the House.",
            "bn": "ইবন কাসীর এই মতকে বলেন সবচেয়ে প্রসিদ্ধ, তারপর বলেন সবচেয়ে বিশুদ্ধ, আর জানান যে ইবন জারীর অর্থাৎ তাবারীও এটাই বেছে নিয়েছেন। তাবারীর যুক্তি প্রসঙ্গ। আয়াতটি এসেছে মুশরিকদের সেই চক্রান্তের খবরের পরেই, যারা নবী ﷺ-কে মক্কা থেকে উৎখাত করতে চেয়েছিল। তাই এখানে হুকুম হলো আল্লাহর কাছে চাওয়া: যে শহর থেকে তারা তাঁকে তাড়াতে চায়, সেখান থেকে যেন সত্যের প্রস্থান হয়, আর যে শহরে আল্লাহ তাঁকে নিয়ে যাচ্ছেন, সেখানে যেন সত্যের প্রবেশ হয়। মাআরিফুল কুরআন প্রশ্ন তোলে, প্রবেশের কথা আগে কেন? তারপর 'সম্ভবত' বলে উত্তর দেয়: কাবা ছাড়ার বেদনার চেয়ে সফরের লক্ষ্যটাকেই আগে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grave and Other Doors",
          "bn": "কবর এবং আরও কিছু দরজা"
        },
        "p": [
          {
            "en": "At-Tabari opens by noting that the people of interpretation differed here, and lists them. Through al-'Awfi, Ibn 'Abbas (RA) is reported to have said that the entering is death and the exiting is life after death. At-Tabari words that view as: let me die a death of truth, and bring me out of my grave on the Day of Resurrection with an exit of truth. Al-Qurtubi gives a version from Ibn 'Abbas that names the grave outright: enter me into the grave with truth at death, and bring me out with truth at the raising.",
            "bn": "তাবারী আলোচনা শুরু করেন এই কথা বলে যে, ব্যাখ্যাকারেরা এখানে মতভেদ করেছেন। তারপর মতগুলো একে একে সাজান। আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণিত: প্রবেশ মানে মৃত্যু, আর প্রস্থান মানে মৃত্যুর পরের জীবন। তাবারী এই মতকে এভাবে বলেন: আমাকে সত্যের মৃত্যু দাও, আর কিয়ামতের দিন কবর থেকে সত্যের প্রস্থানে বের করো। কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরেকটি রূপ আনেন, যেখানে সরাসরি কবরের নাম আছে: মৃত্যুর সময় আমাকে সত্যের সঙ্গে কবরে ঢোকাও, আর পুনরুত্থানের সময় সত্যের সঙ্গে বের করো।"
          },
          {
            "en": "Al-Qurtubi also records, under it is said, a reading that ties the verse to 17:79 just before it: make me die a death of truth and raise me on the Day of Resurrection a raising of truth. Once Allah had promised the Prophet ﷺ a praised station, the reasoning goes, He told him to pray for the promise to be kept. Mujahid reads the doors as the mission itself: enter me into the prophethood You sent me with as an entrance of truth, and bring me out of it with an exit of truth. Al-Qurtubi completes Mujahid's words with: when You cause me to die.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি ব্যাখ্যা আনেন, যা আয়াতটিকে ঠিক আগের ১৭:৭৯ আয়াতের সঙ্গে জুড়ে দেয়: আমাকে সত্যের মৃত্যু দাও, আর কিয়ামতের দিন সত্যের পুনরুত্থান দাও। এই যুক্তিতে, আল্লাহ যখন নবী ﷺ-কে প্রশংসিত মর্যাদার ওয়াদা দিলেন, তখন সেই ওয়াদা পূরণের জন্য দোয়া করতেও বললেন। মুজাহিদ দরজাগুলোকে দেখেন নবুওয়াতের দায়িত্ব হিসেবে: যে নবুওয়াত দিয়ে তুমি আমাকে পাঠিয়েছ, তাতে আমাকে সত্যের প্রবেশ দাও, আর তা থেকে বের করো সত্যের প্রস্থানে। কুরতুবী মুজাহিদের কথার সঙ্গে যোগ করেন: যখন তুমি আমাকে মৃত্যু দেবে।"
          },
          {
            "en": "Others place the doors elsewhere. Al-Hasan, in a chain at-Tabari gives through Qatada, said the entrance is Paradise and the exit is from Makkah to Madinah. Abu Salih said: enter me into Islam with an entrance of truth, and bring me out of it with an exit of truth. Ad-Dahhak, in at-Tabari, said Makkah: he entered it safe and left it safe. Al-Baghawi and al-Qurtubi give his view as leaving Makkah safe from the idolaters and entering it victorious at the conquest. Al-Qurtubi adds Abu Sahl, who placed it at the return from Tabuk.",
            "bn": "কেউ কেউ দরজাগুলো দেখেন অন্য জায়গায়। তাবারী কাতাদার মাধ্যমে হাসানের যে বর্ণনা এনেছেন, তাতে প্রবেশ মানে জান্নাত, আর প্রস্থান মানে মক্কা থেকে মদীনায় যাওয়া। আবু সালিহ বলেন: আমাকে ইসলামে সত্যের প্রবেশ দাও, আর তা থেকে বের করো সত্যের প্রস্থানে। তাবারীর বর্ণনায় দাহহাক বলেন, এ হলো মক্কা: তিনি সেখানে নিরাপদে ঢুকেছেন, নিরাপদে বেরিয়েছেন। বাগাভী ও কুরতুবী দাহহাকের মত বলেন এভাবে: মুশরিকদের হাত থেকে নিরাপদে মক্কা ছাড়া, আর বিজয়ের দিন বিজয়ী হয়ে মক্কায় ঢোকা। কুরতুবী আরও আনেন আবু সাহলের মত। তিনি একে জুড়েছেন তাবুক থেকে ফেরার সময়ের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Going In and Out",
          "bn": "জীবনের প্রতিটি আসা-যাওয়া"
        },
        "p": [
          {
            "en": "A last group of readings ties the verse to no single place. Al-Muyassar: enter me into what is good for me, and bring me out of what is bad for me. As-Sa'di: make all my entrances and exits in Your obedience and towards Your pleasure, because such entrances hold sincerity and agree with the command. Al-Qurtubi and al-Baghawi each record a further view: enter me with truth wherever You enter me, and bring me out with truth; do not make me a man who enters wearing a face and leaves wearing a different face, for the two-faced man is not held in honour with You.",
            "bn": "শেষ একদল ব্যাখ্যা আয়াতটিকে কোনো নির্দিষ্ট জায়গায় বাঁধে না। মুয়াসসার বলে: যা আমার জন্য কল্যাণকর, তাতে আমাকে ঢোকাও, আর যা অকল্যাণকর, তা থেকে বের করো। সা'দী বলেন: আমার সব ঢোকা আর বের হওয়া তোমার আনুগত্যে ও তোমার সন্তুষ্টির পথে রাখো। কারণ এমন প্রবেশে থাকে ইখলাস, আর তা হুকুমের সঙ্গে মেলে। কুরতুবী ও বাগাভী দুজনেই আরেকটি মত আনেন: যেখানেই আমাকে ঢোকাও, সত্যের সঙ্গে ঢোকাও, আর সত্যের সঙ্গেই বের করো। আমাকে এমন মানুষ বানিয়ো না, যে এক চেহারা নিয়ে ঢোকে আর আরেক চেহারা নিয়ে বের হয়। কারণ দুমুখো মানুষ তোমার কাছে সম্মান পায় না।"
          },
          {
            "en": "Al-Qurtubi gives the widest form: the verse is general, covering every matter a person takes up, every journey and task attempted, and every turn of the decrees in death and life still awaited. It is then a prayer meaning: Lord, set right my going in and my coming out in all things. Ma'arif al-Qur'an reports that some scholars say every believer should make this prayer at the start of whatever aim he pursues. These readings stand here side by side, unranked. At-Tabari and Ibn Kathir favour the hijrah; as-Sa'di and al-Muyassar give only the general sense.",
            "bn": "সবচেয়ে বিস্তৃত রূপটি দেন কুরতুবী। তাঁর উদ্ধৃত মতে আয়াতটি সাধারণ। মানুষ যে কাজ হাতে নেয়, যে সফর বা আমলের চেষ্টা করে, আর মৃত্যু ও জীবনে তাকদীরের যে পালাবদলের অপেক্ষায় থাকে, সবই এর ভেতরে। তখন দোয়াটির মানে দাঁড়ায়: হে রব, সব কাজে আমার ঢোকা আর বের হওয়া দুটোই ঠিক করে দাও। মাআরিফুল কুরআন জানায়, কিছু আলেম বলেছেন, প্রত্যেক মুমিনের উচিত যেকোনো লক্ষ্যের শুরুতে এই দোয়া পড়া। এখানে মতগুলো পাশাপাশি রইল, কোনোটিকে ওপরে তোলা হলো না। তাবারী ও ইবন কাসীর হিজরতের মত পছন্দ করেন। সা'দী ও মুয়াসসার শুধু সাধারণ অর্থটাই দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Proof, or Power?",
          "bn": "প্রমাণ, নাকি ক্ষমতা?"
        },
        "p": [
          {
            "en": "Sultanan nasira, the third request, divided the early authorities too. Mujahid said: a clear proof, hujja bayyina; at-Tabari, Ibn Kathir and al-Baghawi all carry this from him. Ash-Sha'bi and 'Ikrima, in al-Qurtubi, said: a firm proof. As-Sa'di reads it the same way, as a manifest proof and decisive evidence for everything a person does and leaves. Al-Muyassar: a firm proof by which You help me against all who oppose me.",
            "bn": "তৃতীয় চাওয়া, সুলতানান নাসীরা, নিয়েও আগের যুগের আলেমরা দুই ভাগ হয়েছেন। মুজাহিদ বলেন: স্পষ্ট প্রমাণ, হুজ্জাতুন বাইয়িনা। তাবারী, ইবন কাসীর ও বাগাভী তিনজনই তাঁর এ কথা এনেছেন। কুরতুবীর বর্ণনায় শা'বী ও ইকরিমা বলেন: সুদৃঢ় প্রমাণ। সা'দীও এভাবেই পড়েন। তাঁর মতে এ হলো মানুষ যা করে আর যা ছাড়ে, তার সবকিছুর পক্ষে প্রকাশ্য প্রমাণ ও অকাট্য দলিল। মুয়াসসার বলে: এমন সুদৃঢ় প্রমাণ, যা দিয়ে তুমি আমার বিরোধীদের সবার বিরুদ্ধে আমাকে সাহায্য করবে।"
          },
          {
            "en": "Al-Hasan al-Basri read it as power. At-Tabari words it: grant me a helping kingship that aids me against whoever opposes me, and an honour by which I establish Your religion and defend it from anyone who means it harm. Al-Hasan adds that Allah promised He would take the kingdom and might of Persia and give it to him, and the kingdom and might of Byzantium and give it to him. Al-Qurtubi sums up al-Hasan's view as honour, help and the triumph of his religion over every religion.",
            "bn": "হাসান বসরী একে পড়েছেন ক্ষমতা হিসেবে। তাবারী এ মত বলেন এভাবে: আমাকে এমন সাহায্যকারী রাজত্ব দাও, যা আমার বিরোধীদের বিরুদ্ধে আমার পাশে দাঁড়াবে। আর দাও এমন মর্যাদা, যা দিয়ে আমি তোমার দ্বীন কায়েম করব এবং কেউ তার ক্ষতি চাইলে তাকে ঠেকাব। হাসান আরও বলেন, আল্লাহ তাঁকে ওয়াদা দিয়েছিলেন, পারস্যের রাজত্ব ও প্রতাপ কেড়ে নিয়ে তাঁকে দেবেন, রোমের রাজত্ব ও প্রতাপও কেড়ে নিয়ে তাঁকে দেবেন। কুরতুবী হাসানের মতটির সারকথা বলেন এভাবে: মর্যাদা, সাহায্য, আর সব দ্বীনের ওপর তাঁর দ্বীনের বিজয়।"
          },
          {
            "en": "Qatada gives a reason, and it is his report, not the verse's own words. As at-Tabari and Ibn Kathir relate it, the Prophet of Allah ﷺ knew that he had no strength for this matter except by authority, so he asked for a helping authority for the Book of Allah, His limits, His obligations and the establishing of His religion. Qatada goes on: authority is a mercy Allah has placed among His servants; were it not for it, some would raid others and the strong among them would devour the weak.",
            "bn": "কাতাদা একটি কারণ বলেন। মনে রাখা দরকার, এটা তাঁর বর্ণনা, আয়াতের নিজের শব্দ নয়। তাবারী ও ইবন কাসীরের বর্ণনায় কাতাদা বলেন: আল্লাহর নবী ﷺ জানতেন, কর্তৃত্ব ছাড়া এই দায়িত্ব বহনের শক্তি তাঁর নেই। তাই তিনি সাহায্যকারী কর্তৃত্ব চাইলেন আল্লাহর কিতাবের জন্য, তাঁর সীমারেখা ও ফরজগুলোর জন্য, আর তাঁর দ্বীন কায়েমের জন্য। কাতাদা আরও বলেন: কর্তৃত্ব আল্লাহর এক রহমত, যা তিনি বান্দাদের মাঝে রেখেছেন। তা না থাকলে মানুষ একে অন্যের ওপর হামলা করত, আর সবল দুর্বলকে গিলে খেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Truth Needs a Guard",
          "bn": "সত্যের কেন পাহারা লাগে"
        },
        "p": [
          {
            "en": "At-Tabari weighs the two and in the end keeps both. The soundest reading, he says, is that Allah commanded His Prophet ﷺ to ask for a helping authority against whoever wronged him, plotted against him and tried to stop him establishing Allah's obligations in himself and among His servants. Then he closes the gap: whoever is given that has, without doubt, been given a clear proof as well. Ibn Zayd, whom at-Tabari cites in support, glossed nasir as: he helps me, pointing to Allah's words to Musa (AS) in 28:35: We will give you both an authority.",
            "bn": "তাবারী দুই মত মেপে দেখেন, আর শেষে দুটোকেই রাখেন। তাঁর মতে সবচেয়ে সঠিক ব্যাখ্যা হলো: আল্লাহ তাঁর নবী ﷺ-কে হুকুম দিয়েছেন সাহায্যকারী কর্তৃত্ব চাইতে, তাদের বিরুদ্ধে যারা তাঁর ওপর জুলুম করেছে, তাঁর বিরুদ্ধে চক্রান্ত করেছে, আর নিজের জীবনে ও বান্দাদের মাঝে আল্লাহর ফরজ কায়েম করতে তাঁকে বাধা দিয়েছে। তারপর তিনি দুই মতের ফাঁক মিলিয়ে দেন: যাকে এই কর্তৃত্ব দেওয়া হয়, নিঃসন্দেহে তাকে স্পষ্ট প্রমাণও দেওয়া হয়। তাবারী সমর্থনে ইবন যায়দের কথা আনেন। নাসীরের অর্থ তিনি বলেছেন: সে আমাকে সাহায্য করবে, আর দলিল দিয়েছেন ২৮:৩৫ আয়াত থেকে, যেখানে আল্লাহ মূসা (আঃ)-কে বলেন: আমি তোমাদের দুজনকে কর্তৃত্ব দেব।"
          },
          {
            "en": "Ibn Kathir also judges the view of al-Hasan and Qatada the more likely, and his reason is a principle: alongside truth there must be force against whoever opposes and resists it. He cites 57:25, where Allah sent His messengers with clear proofs, sent down with them the Book and the balance so that people would uphold justice, and sent down iron, in which there is great might and benefit for people. In that verse proof and power are not rivals; the Book and the iron come in one sending.",
            "bn": "ইবন কাসীরও হাসান ও কাতাদার মতকেই বেশি অগ্রগণ্য মনে করেন। তাঁর যুক্তি একটি নীতি: সত্যের সঙ্গে এমন শক্তি থাকতেই হবে, যা তার বিরোধী ও শত্রুকে দমন করতে পারে। তিনি দলিল আনেন ৫৭:২৫ আয়াত থেকে। সেখানে আল্লাহ বলেন, তিনি রাসূলদের পাঠিয়েছেন স্পষ্ট প্রমাণসহ, তাঁদের সঙ্গে নাজিল করেছেন কিতাব ও মানদণ্ড, যাতে মানুষ ইনসাফে দাঁড়ায়। আর নাজিল করেছেন লোহা, যাতে আছে প্রচণ্ড শক্তি আর মানুষের উপকার। সেই আয়াতে প্রমাণ আর শক্তি প্রতিদ্বন্দ্বী নয়; কিতাব আর লোহা এসেছে একই পাঠানোর সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Idols Around the House",
          "bn": "কাবার চারপাশের মূর্তি"
        },
        "p": [
          {
            "en": "The next verse, 17:81, says: and say, truth has come and falsehood has vanished. The English Ibn Kathir reads it as a warning to Quraysh and attaches a narration found in al-Bukhari's Sahih (4720). In the Dar-us-Salam translation: \"Narrated 'Abdullah bin Masud: Allah's Messenger (ﷺ) entered Mecca (in the year of the Conquest) and there were three-hundred and sixty idols around the Ka'ba. He then started hitting them with a stick in his hand and say: 'Truth (i.e. Islam) has come and falsehood (disbelief) vanished. Truly falsehood (disbelief) is ever bound to vanish.' (17.81) 'Truth has come and falsehood (Iblis) can not create anything.' (34.49)\"",
            "bn": "পরের আয়াত ১৭:৮১ বলে: আর বলো, সত্য এসেছে, মিথ্যা বিলুপ্ত হয়েছে। ইংরেজি ইবন কাসীর একে কুরাইশের প্রতি সতর্কবাণী হিসেবে পড়েন, আর এর সঙ্গে জুড়ে দেন সহীহ বুখারীর একটি বর্ণনা (৪৭২০)। আবদুল্লাহ ইবন মাসউদ (রাঃ) বলেন: \"নবী ﷺ (বিজয়ের বছর) মক্কায় ঢুকলেন। তখন কাবাঘরের চারপাশে ছিল তিনশ ষাটটি মূর্তি। তিনি হাতের একটি লাঠি দিয়ে সেগুলোতে আঘাত করতে লাগলেন আর বলতে লাগলেন: সত্য এসেছে, মিথ্যা বিলুপ্ত হয়েছে, মিথ্যা তো বিলুপ্ত হওয়ারই (১৭.৮১)। সত্য এসেছে, আর মিথ্যা না কিছু শুরু করতে পারে, না ফিরিয়ে আনতে পারে (৩৪.৪৯)।\""
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Thresholds",
          "bn": "চৌকাঠ পেরোনোর দোয়া"
        },
        "p": [
          {
            "en": "What does the verse hand to a reader who is not migrating? First, a wording. The Prophet ﷺ was told to say it, and al-Qurtubi records the view that he was being taught what to ask for in his prayer and beyond it. On every reading above, the request has the same shape: Allah does the bringing in and the bringing out, and both are to be marked by truth. Whatever the door, the asking stays with the One who opens and closes it.",
            "bn": "যিনি হিজরত করছেন না, তাঁর হাতে আয়াতটি কী তুলে দেয়? প্রথমত, দোয়ার শব্দ। নবী ﷺ-কে এটি বলতে হুকুম দেওয়া হয়েছিল। কুরতুবী একটি মত আনেন যে, নামাজে ও নামাজের বাইরে কী চাইতে হবে, তা-ই তাঁকে শেখানো হচ্ছিল। ওপরের সব ব্যাখ্যাতেই চাওয়ার গড়ন এক: ঢোকানো আর বের করা দুটোই আল্লাহর কাজ, আর দুটোতেই চাই সত্যের ছাপ। দরজা যেটাই হোক, চাওয়াটা থাকে তাঁরই কাছে, যিনি দরজা খোলেন আর বন্ধ করেন।"
          },
          {
            "en": "Second, a test of oneself. The view al-Qurtubi and al-Baghawi record asks not to be double-faced. We judge beginnings by success and endings by comfort; the verse asks of both: was it true? And its last clause admits that doing right in the world often needs backing, proof first and then strength, asked for min ladunka, from Allah's own presence. Then 17:82 turns to the Qur'an as healing.",
            "bn": "দ্বিতীয়ত, নিজেকে যাচাইয়ের একটা মাপকাঠি। কুরতুবী ও বাগাভীর আনা মতটি চায়, আপনি যেন এক চেহারায় ঢুকে আরেক চেহারায় বেরিয়ে না যান। আমরা শুরুকে মাপি সাফল্য দিয়ে, শেষকে মাপি স্বস্তি দিয়ে। আয়াতটি দুটোর কাছেই জানতে চায়: সেটা কি সত্য ছিল? আর শেষ অংশটি মেনে নেয়, দুনিয়ায় ঠিক কাজ করতে গেলে প্রায়ই পেছনে জোর লাগে, আগে প্রমাণ, তারপর শক্তি। সেটাও চাইতে হয় মিন লাদুনকা, আল্লাহর নিজের কাছ থেকে। তারপর ১৭:৮২ আয়াত কুরআনকে বলে আরোগ্য।"
          }
        ]
      }
    ]
  },
  "17:82": {
    "sections": [
      {
        "h": {
          "en": "A Verse About the Book",
          "bn": "কিতাবের কথা কিতাবেরই মুখে"
        },
        "p": [
          {
            "en": "Wa nunazzilu mina-l-Qur'ani ma huwa shifa'un wa rahmatun lil-mu'minina, wa la yazidu-z-zalimina illa khasara: and We send down of the Qur'an that which is healing and mercy for the believers, and it increases the wrongdoers in nothing but loss. Just before it, 17:80 and 17:81 give the Prophet ﷺ a prayer for a sound entry and exit and the words: truth has come and falsehood has vanished. Just after it, 17:83 turns to man, who turns away when he is favoured and despairs when evil touches him.",
            "bn": "ওয়া নুনাযযিলু মিনাল কুরআনি মা হুয়া শিফাউন ওয়া রাহমাতুল লিল মু'মিনীন, ওয়া লা ইয়াযীদুয যালিমীনা ইল্লা খাসারা: আর আমি কুরআন থেকে এমন কিছু নাযিল করি যা মু'মিনদের জন্য শিফা ও রহমত, আর যালিমদের তা কেবল ক্ষতিই বাড়ায়। ঠিক আগে ১৭:৮০ ও ১৭:৮১ নবী ﷺ-কে শিখিয়েছে সত্যের সঙ্গে প্রবেশ আর সত্যের সঙ্গে বের হওয়ার দোয়া, আর এই ঘোষণা: সত্য এসেছে, মিথ্যা বিলুপ্ত হয়েছে। ঠিক পরে ১৭:৮৩ মানুষের কথায় যায়। নিয়ামত পেলে সে মুখ ফিরিয়ে নেয়, আর বিপদ ছুঁলে হতাশ হয়ে পড়ে।"
          },
          {
            "en": "Between the two stands a sentence about the Book itself. At-Tabari reads it as an address to the Prophet: and We send down to you, O Muhammad, of the Qur'an what is healing. Al-Qurtubi records a difference in the reading. The majority read nunazzilu, with the letter nun: We send down. Mujahid read yunzilu, with ya' and without the doubled consonant: He sends down, and al-Marwazi transmitted this from Hafs. On either reading the sender is God, and the verse names three effects of what He sends: healing, mercy and loss.",
            "bn": "এ দুইয়ের মাঝখানে আছে কিতাবকে নিয়েই একটি বাক্য। তাবারী একে পড়েন নবী ﷺ-এর প্রতি সম্বোধন হিসেবে: হে মুহাম্মাদ, আমি তোমার উপর কুরআন থেকে নাযিল করি যা শিফা। কুরতুবী এখানে কিরাআতের একটি পার্থক্য উল্লেখ করেন। অধিকাংশ কারী পড়েছেন নুনাযযিলু, নূন দিয়ে, অর্থাৎ আমি নাযিল করি। মুজাহিদ পড়েছেন ইউনযিলু, ইয়া দিয়ে এবং তাশদীদ ছাড়া, অর্থাৎ তিনি নাযিল করেন। মারওয়াযী এ কিরাআত হাফস থেকেও বর্ণনা করেছেন। যেভাবেই পড়া হোক, নাযিলকারী আল্লাহ। আর তিনি যা পাঠান তার তিনটি প্রভাবের কথা আয়াতে আছে: শিফা, রহমত আর ক্ষতি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portion, or the Whole",
          "bn": "কিছু অংশ, না পুরোটা"
        },
        "p": [
          {
            "en": "Al-Qurtubi stops first on the small word min, of. He says it marks the starting point, ibtida' al-ghaya, and may properly be read as explaining the kind, li-bayan al-jins, as if the verse said: We send down what has healing in it, from the Qur'an. He then reports that some interpreters refused to read min as partitive, tab'id. They were guarding against what that reading seemed to imply: that some part of the Qur'an carries no healing at all.",
            "bn": "কুরতুবী প্রথমে থামেন ছোট্ট শব্দ মিন-এর উপর। তাঁর মতে এটি সূচনাবিন্দু বোঝায়, যাকে বলে ইবতিদাউল গায়া। আবার একে জাতি বা ধরন বোঝানোর জন্যও পড়া যায়, লি বায়ানিল জিনস, যেন আয়াতটি বলছে: কুরআন থেকে আমি তা-ই নাযিল করি যার মধ্যে শিফা আছে। এরপর তিনি জানান, কোনো কোনো ব্যাখ্যাকার মিন-কে অংশবাচক, অর্থাৎ তাবঈদ হিসেবে পড়তে রাজি হননি। তাঁদের আশঙ্কা ছিল, তাহলে মনে হবে কুরআনের কোনো অংশে বুঝি শিফা নেই।"
          },
          {
            "en": "Al-Qurtubi then quotes Ibn 'Atiyya's reply: that does not follow. Min may well be partitive, because the sending down itself came in portions, as if the verse said: We send down of the Qur'an something that is healing, all of which is healing. Al-Baghawi gives only the first view, introduced with it is said: min here is not partitive, and the meaning is that We send down of the Qur'an what is wholly healing. Read either way, no verse is left outside the healing. The disagreement is about grammar, not about which verses heal.",
            "bn": "কুরতুবী এরপর ইবন আতিয়্যার জবাব উদ্ধৃত করেন: এমন অর্থ দাঁড়ায় না। মিন অংশবাচক হতেই পারে, কারণ কুরআন নাযিলই হয়েছে ভাগে ভাগে। তখন অর্থ হবে: আমি কুরআন থেকে এমন কিছু নাযিল করি যা শিফা, আর তার পুরোটাই শিফা। বাগাভী শুধু প্রথম মতটি আনেন, 'বলা হয়েছে' কথাটি দিয়ে: এখানে মিন অংশবাচক নয়, অর্থ হলো কুরআন থেকে আমি যা নাযিল করি তার সবটাই শিফা। যেভাবেই পড়া হোক, কোনো আয়াত শিফার বাইরে থাকে না। মতভেদটা ব্যাকরণের, কোন আয়াত আরোগ্য দেয় তা নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Healing for What Hearts Hide",
          "bn": "অন্তরের লুকোনো রোগের চিকিৎসা"
        },
        "p": [
          {
            "en": "Ibn Kathir names the illnesses. The Qur'an takes away what is in hearts of disease: doubt and hypocrisy, shirk, zaygh (swerving) and mayl (leaning away), and he adds that the Qur'an heals all of that. At-Tabari puts it in terms of knowledge and sight: a healing by which cure is sought from ignorance and from misguidance, and by which a person is made to see out of blindness.",
            "bn": "ইবন কাসীর রোগগুলোর নাম ধরে বলেন। অন্তরে যত ব্যাধি আছে, কুরআন তা দূর করে: সন্দেহ ও মুনাফিকি, শিরক, যাইগ অর্থাৎ বাঁকা হয়ে যাওয়া, আর মাইল অর্থাৎ সত্য থেকে সরে ঝুঁকে পড়া। তিনি বলেন, কুরআন এর সবকিছু থেকেই আরোগ্য দেয়। তাবারী বিষয়টি দেখেন জ্ঞান আর দৃষ্টির দিক থেকে। এ এমন শিফা, যা দিয়ে মূর্খতা ও পথভ্রষ্টতা থেকে আরোগ্য চাওয়া হয়, আর যা অন্ধত্ব থেকে মানুষকে দেখতে শেখায়।"
          },
          {
            "en": "Al-Baghawi defines the healing as bayan, a making clear. It clears away misguidance and ignorance: by it what people differ over is made plain, what is obscure becomes clear, cure is sought from shubha (doubt that confuses), and guidance is found out of bewilderment. So it is the healing of hearts by the removal of ignorance from them. As-Sa'di lists doubts, ignorance, corrupt opinions, evil deviation and evil intentions, and explains the cure: the Qur'an holds certain knowledge that removes every doubt, and admonition that removes every desire opposed to God's command.",
            "bn": "বাগাভী শিফার অর্থ করেন বায়ান, অর্থাৎ স্পষ্ট করে দেওয়া। এটি পথভ্রষ্টতা আর অজ্ঞতা দূর করে। মানুষ যা নিয়ে মতভেদ করে তা পরিষ্কার হয়, যা জটিল তা খোলাসা হয়। শুবহা, অর্থাৎ বিভ্রান্তিকর সংশয় থেকে আরোগ্য মেলে, আর দিশেহারা অবস্থা থেকে পথ পাওয়া যায়। তাই এ হলো অন্তর থেকে অজ্ঞতা সরিয়ে অন্তরের আরোগ্য। সা'দী তালিকা দেন: সংশয়, অজ্ঞতা, ভ্রান্ত মত, মন্দ বিচ্যুতি আর মন্দ উদ্দেশ্য। চিকিৎসাটাও তিনি বলে দেন। কুরআনে আছে নিশ্চিত জ্ঞান, যা সব সংশয় মুছে দেয়। আর আছে নসীহত, যা আল্লাহর আদেশের বিরোধী প্রতিটি কামনা দূর করে।"
          },
          {
            "en": "The Muyassar keeps it short: verses that heal hearts of diseases such as doubt, hypocrisy and ignorance. Ma'arif al-Qur'an says that the Qur'an cures hearts and delivers people from shirk and kufr, low morals and spiritual ailments, and that the entire Muslim ummah agrees on this. Al-Qurtubi adds a further view, introduced with it is said: a healing in the obligations and rulings, because of the clarity they bring. On the healing of the heart, then, every commentator fetched for this verse stands together. They part on the next question.",
            "bn": "মুয়াসসার সংক্ষেপে বলে: এমন আয়াত, যা সন্দেহ, মুনাফিকি ও অজ্ঞতার মতো রোগ থেকে অন্তরকে সারিয়ে তোলে। মাআরিফুল কুরআন বলে, কুরআন অন্তরের চিকিৎসা করে এবং মানুষকে শিরক ও কুফর, হীন চরিত্র আর আত্মিক রোগ থেকে মুক্তি দেয়। গোটা মুসলিম উম্মাহ এতে একমত। কুরতুবী 'বলা হয়েছে' কথাটি দিয়ে আরেকটি মত যোগ করেন: ফরজ বিধান ও আহকামের মধ্যেও শিফা আছে, কারণ সেগুলো বিষয়কে স্পষ্ট করে দেয়। অন্তরের আরোগ্যের প্রশ্নে তাই এ আয়াতের জন্য পড়া সব তাফসীর এক জায়গায় দাঁড়িয়ে। পথ আলাদা হয় পরের প্রশ্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "Does It Heal Bodies Too?",
          "bn": "শরীরেরও কি আরোগ্য?"
        },
        "p": [
          {
            "en": "Al-Qurtubi states the question as a disagreement: the scholars differed over how the Qur'an is a healing, on two views. The first is that it heals hearts, by removing ignorance and doubt from them and by lifting the covering of ignorance from the heart, so that it understands the miracles and the signs that point to God. The second is that it heals outward illnesses, through ruqa (recitation over the sick), seeking refuge with God, and the like. He sets the two side by side and gives the rest of his discussion to the reports about recitation over the sick.",
            "bn": "কুরতুবী প্রশ্নটি তোলেন মতভেদ হিসেবেই: কুরআন কীভাবে শিফা, এ নিয়ে আলেমদের দুটি মত। প্রথম মত, এটি অন্তরের আরোগ্য। অন্তর থেকে অজ্ঞতা ও সংশয় সরিয়ে দেয়, অজ্ঞতার পর্দা তুলে নেয়, যাতে অন্তর মুজিযা আর আল্লাহর দিকে নির্দেশকারী নিদর্শনগুলো বুঝতে পারে। দ্বিতীয় মত, এটি বাহ্যিক রোগেরও আরোগ্য, রুকা অর্থাৎ রোগীর উপর পড়ে ফুঁ দেওয়া, আল্লাহর আশ্রয় চাওয়া এবং এ জাতীয় আমলের মাধ্যমে। তিনি দুটি মত পাশাপাশি রাখেন। তারপর আলোচনার বাকিটা দেন রোগীর উপর তিলাওয়াত সংক্রান্ত বর্ণনাগুলোতে।"
          },
          {
            "en": "The other commentators fall on either side of that line. Ibn Kathir, at-Tabari and al-Baghawi describe only the healing of hearts and say nothing about bodies on this verse. The Muyassar names both: what heals hearts of their diseases, and what heals bodies by ruqya with it. As-Sa'di calls the healing general, for hearts and also for bodies, from their pains and illnesses. Ma'arif al-Qur'an reports that according to some 'ulama' the Qur'an is a cure for physical diseases as it is for spiritual ones. This article reports both readings and chooses neither.",
            "bn": "বাকি তাফসীরকারেরা এ রেখার দুই পাশে পড়েন। ইবন কাসীর, তাবারী ও বাগাভী এ আয়াতে কেবল অন্তরের আরোগ্যের কথা বলেন, শরীর নিয়ে কিছু বলেন না। মুয়াসসার দুটোই উল্লেখ করে: যা অন্তরের রোগ সারায়, আর যা দিয়ে রুকইয়া করলে শরীর সেরে ওঠে। সা'দী শিফাকে ব্যাপক বলেন। এতে অন্তরের আরোগ্য আছে, শরীরের ব্যথা আর অসুখ থেকে আরোগ্যও আছে। মাআরিফুল কুরআন জানায়, কিছু আলেমের মতে কুরআন যেমন আত্মিক রোগের চিকিৎসা, তেমনি শারীরিক রোগেরও। এই লেখা দুটি মতই তুলে ধরে, কোনোটির পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Chief Stung on the Road",
          "bn": "পথের ধারে দংশিত সর্দার"
        },
        "p": [
          {
            "en": "Al-Qurtubi and Ma'arif al-Qur'an both attach a hadith of Abu Sa'id al-Khudri (RA) here. Al-Bukhari's wording (5736) reads: 'Narrated Abu Sa`id Al-Khudri: Some of the companions of the Prophet (ﷺ) came across a tribe amongst the tribes of the Arabs, and that tribe did not entertain them. While they were in that state, the chief of that tribe was bitten by a snake (or stung by a scorpion). They said, (to the companions of the Prophet (ﷺ) ), \"Have you got any medicine with you or anybody who can treat with Ruqya?\"",
            "bn": "কুরতুবী ও মাআরিফুল কুরআন দুজনেই এখানে আবু সাঈদ খুদরী (রাঃ)-এর একটি হাদীস যুক্ত করেন। বুখারীর ভাষ্যে (৫৭৩৬) হাদীসটি এরকম: আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণিত, নবী ﷺ-এর কয়েকজন সাহাবী আরবের এক গোত্রের কাছে এলেন। গোত্রের লোকেরা তাঁদের মেহমানদারি করল না। এ অবস্থাতেই হঠাৎ সেই গোত্রের সর্দারকে দংশন করা হলো। তারা বলল, আপনাদের কাছে কি কোনো ওষুধ আছে, কিংবা ঝাড়ফুঁক করতে পারে এমন কেউ?"
          },
          {
            "en": "The Prophet's companions said, \"You refuse to entertain us, so we will not treat (your chief) unless you pay us for it.\" So they agreed to pay them a flock of sheep. One of them (the Prophet's companions) started reciting Surat-al-Fatiha and gathering his saliva and spitting it (at the snake-bite). The patient got cured and his people presented the sheep to them, but they said, \"We will not take it unless we ask the Prophet (whether it is lawful).\" When they asked him, he smiled and said, \"How do you know that Surat-al-Fatiha is a Ruqya? Take it (flock of sheep) and assign a share for me.\"'",
            "bn": "সাহাবীরা বললেন, তোমরা আমাদের মেহমানদারি করোনি, তাই আমাদের জন্য পারিশ্রমিক ঠিক না করলে আমরা কিছু করব না। তারা তখন একপাল বকরি দিতে রাজি হলো। একজন সাহাবী উম্মুল কুরআন, অর্থাৎ সূরা ফাতিহা পড়তে লাগলেন, মুখে থুথু জমিয়ে দংশনের জায়গায় ছিটাতে লাগলেন। লোকটি সেরে উঠল। গোত্রের লোকেরা বকরি নিয়ে এল। কিন্তু সাহাবীরা বললেন, নবী ﷺ-কে জিজ্ঞেস না করে আমরা এগুলো নেব না। জিজ্ঞেস করলে তিনি হাসলেন এবং বললেন: তুমি কী করে জানলে যে এটা রুকইয়া? এগুলো নাও, আর আমার জন্যও একটা ভাগ রেখো।"
          },
          {
            "en": "Al-Bukhari placed it in his Sahih, and that inclusion is the grading this article reports. Al-Qurtubi's own text gives the story in ad-Daraqutni's wording, with further details: a party of thirty riders, Abu Sa'id himself as the reciter, al-hamdu lillahi rabbi-l-'alamin recited seven times, and thirty sheep. Ma'arif al-Qur'an also says the Fatiha was recited seven times, and adds that, by other reports, the Prophet ﷺ himself would recite from the Qur'an and blow his breath over the sick. Those who include bodies cite these reports on this verse; the heart-only commentators do not.",
            "bn": "বুখারী হাদীসটি তাঁর সহীহ গ্রন্থে রেখেছেন। সহীহ গ্রন্থে স্থান পাওয়াটাই এ লেখায় উল্লিখিত মান। কুরতুবীর নিজের পাঠে ঘটনাটি এসেছে দারাকুতনীর ভাষ্যে। সেখানে আরও কিছু খুঁটিনাটি আছে: দলটি ছিল ত্রিশজন অশ্বারোহীর, পড়েছিলেন আবু সাঈদ (রাঃ) নিজে, আলহামদু লিল্লাহি রাব্বিল আলামীন পড়েছিলেন ৭ বার, আর পারিশ্রমিক ছিল ত্রিশটি বকরি। মাআরিফুল কুরআনও বলে, ফাতিহা পড়া হয়েছিল ৭ বার। সঙ্গে যোগ করে, অন্য বর্ণনা অনুযায়ী নবী ﷺ নিজেও কুরআন থেকে পড়ে অসুস্থের গায়ে ফুঁ দিতেন। যাঁরা শরীরের আরোগ্যকেও ধরেন, তাঁরা এ আয়াতে এসব বর্ণনা আনেন। যাঁরা কেবল অন্তরের কথা বলেন, তাঁরা আনেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Scholars Drew Lines",
          "bn": "আলেমরা যেখানে সীমা টেনেছেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a report from Ibn Mas'ud (RA) that the Prophet ﷺ disliked ruqa except with the mu'awwidhat, and answers it with at-Tabari's words. Such a hadith, at-Tabari says, cannot serve as proof in religion, since among its transmitters is one who is unknown; and were it sound, it would be either an error or abrogated, because of the Prophet's question about the Fatiha: what told you it was a ruqya? If ruqya with the two mu'awwidhas is allowed, then ruqya with the rest of the Qur'an is equally allowed, since all of it is Qur'an.",
            "bn": "কুরতুবী ইবন মাসঊদ (রাঃ) থেকে একটি বর্ণনা আনেন যে নবী ﷺ মুআওয়িযাত ছাড়া অন্য ঝাড়ফুঁক অপছন্দ করতেন। এর জবাব তিনি দেন তাবারীর ভাষায়। তাবারী বলেন, এমন হাদীস দ্বীনের ব্যাপারে দলিল হতে পারে না, কারণ এর বর্ণনাকারীদের মধ্যে অপরিচিত লোক আছে। আর যদি সহীহও হতো, তবে হয় তা ভুল, নয়তো রহিত। কারণ ফাতিহা সম্পর্কে নবী ﷺ নিজেই জিজ্ঞেস করেছিলেন: তুমি কী করে জানলে এটা রুকইয়া? মুআওয়িযাতাইন, অর্থাৎ ওই দুই সূরা দিয়ে রুকইয়া জায়েয হলে বাকি কুরআন দিয়েও তেমনি জায়েয, কারণ পুরোটাই কুরআন।"
          },
          {
            "en": "He then reports a sharper dispute over nushra: writing God's names or verses, washing them off in water, then wiping the sick person with it or giving it to drink. Sa'id ibn al-Musayyib permitted it; al-Hasan and Ibrahim an-Nakha'i forbade it. Against it stands a report from Jabir, which reads in Abu Dawud (3868): 'The Messenger of Allah (ﷺ) was asked about a charm for one who is possessed (nashrah). He replied: It pertains to the work of the devil.' Abu Dawud adds no grading. Al-Qurtubi relays Ibn 'Abd al-Barr's verdict that such reports are soft, and concludes that nushra may only be from the Book of God.",
            "bn": "এরপর তিনি নুশরা নিয়ে আরও তীব্র একটি মতভেদের কথা বলেন। নুশরা হলো আল্লাহর নাম বা কুরআনের আয়াত লিখে পানিতে ধুয়ে ফেলা, তারপর সেই পানি রোগীর গায়ে মুছে দেওয়া বা তাকে পান করানো। সাঈদ ইবনুল মুসাইয়িব একে জায়েয বলেছেন, হাসান ও ইবরাহীম নাখঈ নিষেধ করেছেন। বিপক্ষে আছে জাবির (রাঃ)-এর একটি বর্ণনা, আবু দাউদে (৩৮৬৮) যা এরকম: রাসূলুল্লাহ ﷺ-কে নুশরা সম্পর্কে জিজ্ঞেস করা হলো। তিনি বললেন, এটা শয়তানের কাজের অন্তর্ভুক্ত। আবু দাউদ এর কোনো মান উল্লেখ করেননি। কুরতুবী ইবন আবদিল বারের রায় জানান যে এসব বর্ণনা দুর্বল। আর শেষে নিজের সিদ্ধান্ত দেন: নুশরা কেবল আল্লাহর কিতাব থেকেই হতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Beside the Cure",
          "bn": "আরোগ্যের পাশে রহমত"
        },
        "p": [
          {
            "en": "The second word is rahma, mercy. At-Tabari explains why it belongs to the believers and not to those who deny it: they act on the obligations God set in it, hold lawful what it makes lawful and unlawful what it forbids, and so He admits them to Paradise and saves them from His punishment. Ibn Kathir calls it a mercy in which faith, wisdom, the seeking of good and the desire for it come about. As-Sa'di finds the mercy in the means the Qur'an urges: whoever acts on them wins mercy and lasting happiness, with reward now and later.",
            "bn": "দ্বিতীয় শব্দটি রহমত। তাবারী বুঝিয়ে দেন, কেন এ রহমত মু'মিনদের, অস্বীকারকারীদের নয়। তারা কুরআনে আল্লাহর দেওয়া ফরজগুলো পালন করে, যা হালাল তাকে হালাল আর যা হারাম তাকে হারাম মানে। ফলে আল্লাহ তাদের জান্নাতে দেন এবং আযাব থেকে বাঁচান। ইবন কাসীর বলেন, এ এমন রহমত যার ভেতরে ঈমান, হিকমত, কল্যাণের সন্ধান আর তার প্রতি আগ্রহ জন্ম নেয়। সা'দী রহমত দেখেন সেই উপায়গুলোর মধ্যে যেগুলোর দিকে কুরআন উৎসাহ দেয়। বান্দা সেগুলো করলে রহমত আর চিরস্থায়ী সৌভাগ্য পায়, সঙ্গে দুনিয়া ও আখিরাতের সওয়াব।"
          },
          {
            "en": "Al-Qurtubi gives the mercy a list of its own: the relief of distress, the cleansing of faults and the expiation of sins, together with the reward God attaches to recitation. For the reward he cites at-Tirmidhi's report from Ibn Mas'ud, which reads in at-Tirmidhi (2910): '[Whoever recites a letter] from Allah's Book, then he receives the reward from it, and the reward of ten the like of it. I do not say that Alif Lam Mim is a letter, but Alif is a letter, Lam is a letter and Mim is a letter.' At-Tirmidhi grades it hasan sahih gharib by this route.",
            "bn": "কুরতুবী রহমতের আলাদা একটি তালিকা দেন: দুশ্চিন্তা থেকে মুক্তি, দোষত্রুটি থেকে পবিত্রতা, গুনাহের কাফফারা, আর সেই সঙ্গে তিলাওয়াতের সওয়াব। সওয়াবের পক্ষে তিনি ইবন মাসঊদ (রাঃ) থেকে তিরমিযীর বর্ণনা আনেন। তিরমিযীতে (২৯১০) তা এরকম: যে আল্লাহর কিতাবের একটি হরফ পড়ে, সে তার বিনিময়ে একটি নেকি পায়, আর প্রতিটি নেকি দশটি নেকির সমান। আমি বলি না আলিফ-লাম-মীম একটি হরফ। বরং আলিফ একটি হরফ, লাম একটি হরফ, মীম একটি হরফ। তিরমিযী এ সূত্রে হাদীসটিকে হাসান সহীহ গরীব বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Loss Added to Loss",
          "bn": "ক্ষতির উপর ক্ষতি"
        },
        "p": [
          {
            "en": "Wa la yazidu-z-zalimina illa khasara. At-Tabari identifies the wrongdoers as those who disbelieve in it, and glosses khasar as destruction, ihlak. Whenever a command or a prohibition came down in it they rejected it, neither obeying nor refraining, so it added loss to the loss they were already in, and filth to their earlier filth. Ibn Kathir speaks of the disbeliever who wrongs himself by that denial: hearing the Qur'an only increases him in distance, denial and disbelief. The fault, he says, lies with the disbeliever, not with the Qur'an.",
            "bn": "ওয়া লা ইয়াযীদুয যালিমীনা ইল্লা খাসারা। তাবারী বলেন, এখানে যালিম তারা, যারা কুরআনকে অস্বীকার করে। আর খাসার মানে ধ্বংস, ইহলাক। কুরআনে যখনই কোনো আদেশ বা নিষেধ নাযিল হতো, তারা তা প্রত্যাখ্যান করত। আদেশও মানত না, নিষেধ থেকেও বিরত থাকত না। ফলে আগে থেকে যে ক্ষতিতে তারা ছিল, তার উপর আরও ক্ষতি যোগ হতো, আগের অপবিত্রতার উপর আরও অপবিত্রতা। ইবন কাসীর বলেন সেই কাফিরের কথা, যে অস্বীকার করে নিজের উপর যুলুম করে। কুরআন শুনলে তার কেবল দূরত্ব, মিথ্যারোপ আর কুফরই বাড়ে। তাঁর ভাষায়, দোষ কাফিরের, কুরআনের নয়।"
          },
          {
            "en": "Ibn Kathir supports this with 41:44, which al-Qurtubi also names as the verse's counterpart: for those who believe it is guidance and healing, and for those who do not believe there is heaviness in their ears, and it is blindness for them. He adds 9:124 and 9:125, where a surah increases the believers in faith and adds filth to the filth of those with disease in their hearts. As-Sa'di counts as wrongdoers those who do not affirm it or do not act on it, since by it the proof stands against them.",
            "bn": "ইবন কাসীর এর পক্ষে আনেন ৪১:৪৪, কুরতুবীও যাকে এ আয়াতের সমতুল্য বলেছেন: যারা ঈমান এনেছে তাদের জন্য এটি হিদায়াত ও শিফা, আর যারা ঈমান আনে না তাদের কানে আছে বধিরতা, আর তাদের জন্য এটি অন্ধত্ব। তিনি আরও আনেন ৯:১২৪ ও ৯:১২৫। সেখানে একটি সূরা মু'মিনদের ঈমান বাড়ায়, আর যাদের অন্তরে রোগ, তাদের অপবিত্রতার উপর অপবিত্রতা বাড়ায়। সা'দী যালিম বলেন তাদের, যারা কুরআনকে সত্য বলে মানে না, অথবা মানলেও সে অনুযায়ী আমল করে না। কারণ কুরআন দিয়েই তাদের বিরুদ্ধে দলিল প্রতিষ্ঠিত হয়।"
          },
          {
            "en": "This needs saying plainly: the verse describes what the text describes, those who met the revelation with denial, and it licenses nothing against any living person or community. Its measure is turned on the listener. Qatada, as at-Tabari and Ibn Kathir report, said that the believer who hears it benefits, memorises it and takes it in, while the wrongdoer does none of these. Al-Baghawi and al-Qurtubi give his other saying: no one sits with this Qur'an but rises from it with an increase or a decrease.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি কেবল তা-ই বর্ণনা করে যা পাঠে আছে, অর্থাৎ যারা ওহিকে অস্বীকার দিয়ে গ্রহণ করেছিল তাদের কথা। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এর মাপকাঠি ঘুরে আসে শ্রোতার দিকেই। তাবারী ও ইবন কাসীর কাতাদার কথা বর্ণনা করেন: মু'মিন কুরআন শুনলে উপকৃত হয়, মুখস্থ করে, অন্তরে ধারণ করে। যালিম এর কোনোটাই করে না। বাগাভী ও কুরতুবী কাতাদার আরেকটি কথা আনেন: যে-ই এ কুরআনের সঙ্গে বসে, সে ওঠে হয় কিছু বাড়িয়ে, নয়তো কিছু কমিয়ে।"
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
          "bn": "যতক্ষণ না ঝর্ণা প্রবাহিত হয়"
        },
        "p": [
          {
            "en": "Wa qalu lan nu'mina laka hatta tafjura lana mina al-ardi yanbu'a: and they said, we will never believe you until you make a spring gush for us from the ground. This verse opens a list that runs to 17:93. After the spring they demand a garden of palms and grapes with rivers driven through it, then the sky brought down on them in fragments, then Allah and the angels marched out before them, then a house of gold, and finally that the Prophet climb into the sky and bring back a book they can read. Six impossible conditions, laid down one after another as the price of belief.",
            "bn": "ওয়া কালূ লান নু'মিনা লাকা হাত্তা তাফজুরা লানা মিনাল আরদি ইয়ামবূআ: তারা বলল, যতক্ষণ না তুমি আমাদের জন্য যমীন ফুঁড়ে ঝর্ণা বের করবে, আমরা কক্ষনো তোমাকে বিশ্বাস করব না। এ আয়াত একটা তালিকার শুরু, যা চলে ১৭:৯৩ পর্যন্ত। ঝর্ণার পর তারা দাবি করে খেজুর ও আঙুরের বাগান যার ফাঁকে ফাঁকে বইবে নদী, তারপর আকাশ টুকরো হয়ে তাদের উপর পড়ুক, তারপর আল্লাহ ও ফেরেশতাদের তাদের সামনে এনে হাজির করা হোক, তারপর সোনার ঘর, শেষে নবী ﷺ আকাশে উঠে এমন এক কিতাব নামিয়ে আনুন যা তারা পড়তে পারবে। একের পর এক ছয়টি অসম্ভব শর্ত, ঈমানের দাম হিসেবে সাজিয়ে রাখা।"
          },
          {
            "en": "The hinge of the whole speech is one small word: lan, an emphatic never. They do not say we might believe, or we will consider it; they announce in advance that faith is withheld, and only then attach a condition to it. That order matters. A person genuinely searching asks for what would settle the question and then follows the answer. These speakers have settled the question first and are now naming a price they expect will never be paid. The demands only sound like sincere requests; read with the never in front, they are a refusal wearing the costume of an inquiry.",
            "bn": "গোটা বক্তব্যের আসল কব্জা একটি ছোট শব্দ: লান, জোরালো এক ‘কক্ষনো’। তারা বলে না আমরা হয়তো মানব, কিংবা ভেবে দেখব। তারা আগেই ঘোষণা দেয় যে ঈমান তারা দেবে না, তারপর তার গায়ে শর্ত জুড়ে দেয়। এই ক্রমটাই গুরুত্বপূর্ণ। সত্যিকারের অনুসন্ধানী মানুষ জানতে চায় কীসে প্রশ্নটা মিটবে, তারপর জবাব মেনে চলে। এরা প্রশ্নটা আগেই মিটিয়ে ফেলেছে, আর এখন এমন এক দাম হাঁকছে যা কখনো শোধ হবে না বলেই তারা ধরে নিয়েছে। দাবিগুলো শুনতে অনুরোধের মতো, কিন্তু সামনে ‘কক্ষনো’ বসিয়ে পড়লে বোঝা যায় এ হলো অনুসন্ধানের সাজে সাজানো এক অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "What Yanbu' Actually Names",
          "bn": "ইয়ামবূ শব্দের অর্থ"
        },
        "p": [
          {
            "en": "At-Tabari explains yanbu' as a word built on the pattern yaf'ul from naba'a al-ma', said of water when it appears and gushes up. He records from Qatadah and Mujahid that it means 'uyun, springs, and that the demand was for such springs to be opened in their own town. As-Sa'di reads the request as flowing rivers, and the Muyassar places it plainly in the land of Makkah: a running spring gushing out of the ground. Al-Baghawi agrees the word points to springs and locates the demand in the earth of Makkah itself.",
            "bn": "তাবারী বলেন, ইয়ামবূ শব্দটি ‘নাবাআল মা’ থেকে ইয়াফউল ছাঁচে গড়া, যা বলা হয় পানি যখন বেরিয়ে এসে উপচে ওঠে। তিনি কাতাদা ও মুজাহিদ থেকে বর্ণনা করেন যে এর অর্থ উয়ূন, অর্থাৎ ঝর্ণা, আর দাবিটা ছিল তাদের নিজেদের শহরেই এমন ঝর্ণা খুলে দেওয়ার। সা'দী চাওয়াটাকে পড়েন বহমান নদী হিসেবে, আর মুয়াসসার সোজাসুজি মক্কার মাটিতেই বসায়: যমীন ফুঁড়ে বেরিয়ে আসা এক বহতা ঝর্ণা। বাগাভীও মানেন যে শব্দটি ঝর্ণার দিকেই ইঙ্গিত করে, আর দাবিটাকে রাখেন খোদ মক্কার জমিনে।"
          },
          {
            "en": "The commentators also weigh a difference in recitation. Al-Qurtubi notes that 'Asim, Hamzah and al-Kisa'i read the verb tafjura in its lighter form, and that Abu Hatim preferred this because yanbu' is a single spring, while the second verb in the next verse, tufajjira al-anhar, is read with the heavier form by agreement, since rivers are plural and the doubling signals abundance. At-Tabari favours the same split for the same reason, though he grants the heavier first reading is also sound. It is a small point, yet it shows the care the scholars brought even to how these hostile words were pronounced.",
            "bn": "তাফসীরকারেরা কিরাআতের একটি পার্থক্যও ওজন করেন। কুরতুবী উল্লেখ করেন, আসিম, হামযা ও কিসাঈ ‘তাফজুরা’ ক্রিয়াটি হালকা রূপে পড়েন, আর আবু হাতিম এটাই পছন্দ করেন কারণ ইয়ামবূ একটিমাত্র ঝর্ণা। পরের আয়াতের দ্বিতীয় ক্রিয়া ‘তুফাজ্জিরাল আনহার’ সবাই একমত হয়ে ভারী রূপে পড়েন, কারণ নদী বহুবচন আর দ্বিত্ব প্রাচুর্য বোঝায়। তাবারীও একই কারণে এই ভাগটাই বেছে নেন, যদিও তিনি মানেন প্রথমটির ভারী পাঠও শুদ্ধ। কথাটা ছোট, তবু দেখায় বিরুদ্ধপক্ষের এই কথাগুলোর উচ্চারণ পর্যন্ত আলিমরা কত যত্নে দেখেছেন।"
          },
          {
            "en": "So the object of the demand is not exotic. A spring is water rising from the ground, and rivers are water in motion. Even the reading that treats the single spring as standing for many, as Mujahid takes it, keeps the request inside the ordinary world of wells and channels the people of Makkah knew well. They are not asking for something no eye has seen. They are asking that the familiar arrive on command, at the Prophet's word, as a receipt for his claim. Naming the thing exactly helps, because the next section turns on how ordinary it really was.",
            "bn": "তাই দাবির বিষয়টা মোটেও অদ্ভুত কিছু নয়। ঝর্ণা মানে যমীন থেকে ওঠা পানি, আর নদী মানে চলমান পানি। এমনকি মুজাহিদের সেই পাঠ, যেখানে একটি ঝর্ণা বহু ঝর্ণার প্রতিনিধি, তাতেও চাওয়াটা থেকে যায় কূপ আর জলধারার সেই চেনা জগতে, যা মক্কাবাসীর ভালোই জানা। তারা এমন কিছু চাইছে না যা কোনো চোখ দেখেনি। তারা চাইছে চেনা জিনিসটাই হুকুমমতো হাজির হোক, নবীর ﷺ কথায়, তাঁর দাবির রসিদ হিসেবে। জিনিসটার নাম ঠিকঠাক বলা কাজে দেয়, কারণ পরের অংশটা দাঁড়িয়ে আছে এটা আসলে কতটা সাধারণ তার উপরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Denied Gift",
          "bn": "অস্বীকৃত নিয়ামতেরই দাবি"
        },
        "p": [
          {
            "en": "Here is the strange edge of the demand. Springs, palm gardens, grapes and rivers are exactly the blessings the Qur'an keeps holding up as God's signs, and exactly the blessings these people already enjoy without thanks. Earlier in this very surah the ground, the sky and the rain are named as favours over the children of Adam. To ask the Prophet to produce a spring, then, is to ask for a fresh copy of a gift already lying open in their fields. The miracle they crave is a smaller, staged version of the standing miracle they walk past every morning.",
            "bn": "দাবিটার অদ্ভুত ধারটা এখানেই। ঝর্ণা, খেজুরের বাগান, আঙুর আর নদী তো ঠিক সেই নিয়ামত, যেগুলোকে কুরআন বারবার আল্লাহর নিদর্শন হিসেবে তুলে ধরে, আর ঠিক সেই নিয়ামত, যা এই লোকেরা কোনো শুকরিয়া ছাড়াই ভোগ করছে। এই সূরার আগের অংশেই যমীন, আকাশ আর বৃষ্টিকে আদম-সন্তানের উপর অনুগ্রহ বলা হয়েছে। তাহলে নবীকে ﷺ ঝর্ণা বের করতে বলা মানে এমন এক নিয়ামতের নতুন নকল চাওয়া, যা এমনিতেই তাদের মাঠে খোলা পড়ে আছে। তারা যে মুজিযা চায়, তা রোজ সকালে যে বড় মুজিযার পাশ কাটিয়ে যায় তারই এক ছোট, সাজানো সংস্করণ।"
          },
          {
            "en": "This is why the tafsirs treat the whole list as one gesture rather than six separate wishes. The Muyassar frames it sharply: once the Qur'an had defeated them and they could produce nothing like it, they turned to demanding wonders that fit their own whims. The problem was never a shortage of evidence. They had a book they could not rival, and a land full of the very gifts they were now asking be repeated on cue. What they lacked was the will to read either the book or the field as a sign, and no seventh wonder would have supplied it.",
            "bn": "এ কারণেই তাফসীরকারেরা গোটা তালিকাকে ছয়টি আলাদা চাওয়া না ধরে একটাই ভঙ্গি হিসেবে দেখেন। মুয়াসসার তীক্ষ্ণভাবে বলে: কুরআন যখন তাদের হারিয়ে দিল আর তারা এর মতো কিছুই আনতে পারল না, তখন তারা নিজেদের খেয়ালমতো নানা বিস্ময় দাবি করতে লাগল। সমস্যাটা কখনো প্রমাণের অভাব ছিল না। তাদের হাতে ছিল এমন এক কিতাব যার সমকক্ষ তারা আনতে পারেনি, আর ছিল সেই নিয়ামতে ভরা এক জমিন যা তারা এখন হুকুমমতো আবার চাইছিল। যা তাদের ছিল না তা হলো কিতাব বা মাঠ, কোনোটিকেই নিদর্শন হিসেবে পড়ার ইচ্ছা। আর সপ্তম কোনো বিস্ময়ও সেই ইচ্ছা জোগাত না।"
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
            "bn": "কুরতুবী, বাগাভী ও ইবন কাসীর তিনজনই এই আয়াতের প্রেক্ষাপট নিয়ে একটি দীর্ঘ বর্ণনা এনেছেন। বর্ণনাটি ইবন ইসহাকের সূত্রে ইকরিমা হয়ে ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছায়। কুরাইশ নেতারা, তাদের মধ্যে উতবা ও শায়বা, আবু সুফিয়ান, ওয়ালিদ ইবন মুগীরা, আবু জাহল ও আবদুল্লাহ ইবন আবি উমাইয়া, সূর্যাস্তের পর কাবার পেছনে জড়ো হয়ে নবীকে ﷺ ডেকে পাঠায়। প্রথমে তারা তাঁকে সাধে সম্পদ, নেতৃত্ব কিংবা রাজত্ব, অথবা জিনের আসর হয়ে থাকলে চিকিৎসা। তিনি সব ফিরিয়ে দিলে তারা দাবিতে নামে: এই পাহাড়গুলো সরিয়ে দাও, আমাদের উপত্যকা প্রশস্ত করো, তাতে সিরিয়া ও ইরাকের নদীর মতো নদী বইয়ে দাও, আর আমাদের মৃত পূর্বপুরুষদের জীবিত করে তোমার কথা সত্য বলে সাক্ষী দেওয়াও।"
          },
          {
            "en": "The escalation continued: gardens and palaces of gold, an angel sent visibly to vouch for him, the sky dropped on them in pieces, and finally, from 'Abdullah ibn Abi Umayyah, that he climb a ladder to heaven and bring back a book with four angels as witnesses — adding that even then he would not believe. This report supplies the setting the verses answer, and its demand for rivers sits close to the spring of our verse. But its chain runs through an unnamed transmitter, leaving it unestablished as sound; the commentators relay it as background to the revelation, not as proof, and should be received in that spirit.",
            "bn": "দাবি চড়তেই থাকে: সোনার বাগান ও প্রাসাদ, তাঁর পক্ষে সাক্ষ্য দিতে চোখের সামনে ফেরেশতা পাঠানো, আকাশ টুকরো টুকরো হয়ে তাদের ওপর পড়া। শেষে আবদুল্লাহ ইবন আবি উমাইয়া দাবি করে, তিনি সিঁড়ি বেয়ে আকাশে উঠে চারজন ফেরেশতাকে সাক্ষী রেখে একটা কিতাব নামিয়ে আনুন। সঙ্গে এ-ও বলে, তবুও সে বিশ্বাস করবে না। আয়াতগুলো যে পরিস্থিতির জবাব, এই বর্ণনা সেই পটভূমি জানায়, আর এতে নদীর যে দাবি, তা আমাদের আয়াতের ঝর্ণার খুব কাছাকাছি। তবে এর সনদে এক অজ্ঞাতনামা রাবী আছেন, তাই এটি সহীহ বলে প্রমাণিত নয়। তাফসীরকারেরা একে নাজিলের পটভূমি হিসেবে আনেন, দলিল হিসেবে নয়। একে সেভাবেই নেওয়া উচিত।"
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
            "bn": "ইবন কাসীর বর্ণনাটা থেকে নির্ধারক কথাটা টেনে বের করেন। ঝর্ণা বা নদী কিংবা এসবের যেকোনোটা আল্লাহর জন্য সহজ; ইচ্ছা করলে তালিকার প্রতিটা জিনিসই তিনি দিতে পারতেন। নিদর্শন আটকে রইল দুর্বলতায় নয়, বরং যারা চাইছিল তাদের জেনেই। ইবন কাসীর বলেন, আল্লাহ যদি জানতেন তারা হেদায়েত পেতেই চাইছে, তবে তাদের জবাব দেওয়া হতো। কিন্তু তিনি জানতেন তারা চাইছে কুফর আর একগুঁয়েমি থেকে, আর চাওয়া মুজিযা তাদের ধ্বংসকেই পাকা করত। এ কারণেই এই সূরার ১৭:৫৯ আয়াত বলে, নিদর্শন পাঠানো কেবল এ কারণেই থামানো হলো যে আগের জাতিরা তা অস্বীকার করেছিল, ফলে ধ্বংস হয়েছিল।"
          },
          {
            "en": "Then comes the mercy that turns the passage. Ibn Kathir relates that the Prophet was offered a choice: either they be given what they asked and then, if they disbelieved, be struck with a punishment never sent on anyone in the worlds; or the gate of repentance and mercy be opened to them instead. He chose the gate of repentance and mercy. So the unanswered demand was not a snub but a reprieve. The verses that pile up the impossible conditions are, underneath, a record of restraint — a refusal to hand a doomed people the very sign that would have doomed them.",
            "bn": "তারপর আসে সেই রহমত, যা গোটা আলোচনার মোড় ঘুরিয়ে দেয়। ইবন কাসীর বর্ণনা করেন, নবীকে ﷺ একটা বেছে নেওয়ার কথা বলা হলো: হয় তাদের চাওয়া দেওয়া হবে, তারপর তারা অস্বীকার করলে এমন শাস্তি নামবে যা জগতের কারো উপর কখনো নামানো হয়নি; নয়তো তাদের জন্য খুলে দেওয়া হবে তওবা ও রহমতের দরজা। তিনি বেছে নিলেন তওবা ও রহমতের দরজা। তাই দাবির জবাব না পাওয়া কোনো তাচ্ছিল্য ছিল না, ছিল অবকাশ। যে আয়াতগুলো অসম্ভব শর্ত জমিয়ে তোলে, সেগুলোর নিচে লুকিয়ে আছে সংযমের এক দলিল: এক ধ্বংসমুখী জাতির হাতে সেই নিদর্শন তুলে না দেওয়া, যা তাদের ধ্বংসই পাকা করত।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to Convey, Not Control",
          "bn": "পৌঁছে দেওয়াই তাঁর কাজ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads the demands as conditions that anyone would hear as mockery, and it dwells on the answer God taught rather than on the taunt. No rebuke of their dullness, no counting of their hostility, no verbal duel — the reply simply lays the truth bare in plain words. Beneath their list sits a mistaken idea: that a messenger of God must also command every divine power and control the world at will. Ma'arif calls this notion false. A messenger's task is to convey the message. God does send miracles to confirm His messengers, but that happens by His power and His decision alone.",
            "bn": "মাআরিফুল কুরআন দাবিগুলোকে পড়ে এমন শর্ত হিসেবে, যা যে কেউ শুনলে বিদ্রূপ মনে করবে, আর তা মনোযোগ দেয় খোঁচার দিকে নয়, আল্লাহর শেখানো জবাবের দিকে। তাদের বোকামির কোনো ভর্ৎসনা নয়, শত্রুতার হিসাব নয়, বাগ্‌যুদ্ধ নয় — জবাবটা কেবল সাদা কথায় সত্যটা খুলে রাখে। তাদের তালিকার নিচে বসে আছে একটা ভুল ধারণা: আল্লাহর রাসূলকে নাকি সমস্ত ঐশী ক্ষমতারও মালিক হতে হবে আর ইচ্ছামতো দুনিয়া চালাতে হবে। মাআরিফ একে মিথ্যা ধারণা বলে। রাসূলের কাজ বার্তা পৌঁছে দেওয়া। আল্লাহ তাঁর রাসূলদের সত্যায়নে মুজিযা পাঠান বটে, তবে তা ঘটে কেবল তাঁরই ক্ষমতায় ও তাঁরই সিদ্ধান্তে।"
          },
          {
            "en": "This is why the answer at the close of the passage is not another wonder but a confession of limits. The Prophet is told to say, glory be to my Lord; was I ever anything but a human messenger? The reply refuses the whole frame of the demand. He does not own the sky to fold it, or the springs to open them; he carries words, and the response to their conditions belongs to his Lord. For anyone who leads or teaches, Ma'arif notes, this is the model: meet even an absurd challenge by making the truth plain, not by matching contempt with contempt.",
            "bn": "এ কারণেই আলোচনার শেষে জবাবটা আরেকটা বিস্ময় নয়, বরং সীমার এক স্বীকারোক্তি। নবীকে ﷺ বলতে বলা হয়, আমার রবের পবিত্রতা ঘোষণা করছি; আমি কি একজন মানুষ রাসূল ছাড়া কখনো অন্য কিছু ছিলাম? এই জবাব দাবির গোটা কাঠামোটাই নাকচ করে দেয়। আকাশ ভাঁজ করার মালিক তিনি নন, ঝর্ণা খোলার মালিকও নন; তিনি বহন করেন বার্তা, আর তাদের শর্তের জবাব তাঁর রবের হাতে। মাআরিফ বলে, যে কেউ নেতৃত্ব দেয় বা শেখায় তার জন্য এটাই আদর্শ: অসম্ভব চ্যালেঞ্জের মুখেও সত্যটা স্পষ্ট করে বলা, তুচ্ছতার জবাবে তুচ্ছতা না ছুড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Condemned Stance, Not People",
          "bn": "নিন্দা দাবির, মানুষের নয়"
        },
        "p": [
          {
            "en": "The speakers here are named plainly by the commentators as the mushrikun of Quraysh, and the Qur'an in a parallel passage calls the ones who spoke this way zalimun, wrongdoers, who said you follow none but a man bewitched. This needs stating carefully. The verse condemns a posture — demanding signs in defiance while having already refused — and not a bloodline, a city or anyone alive today. It licenses no contempt for any living person or community, and no one may read their own opponents into these named few. What is censured is the stance of the closed heart, wherever it is found, including in oneself.",
            "bn": "এখানকার বক্তাদের তাফসীরকারেরা স্পষ্টভাবে কুরাইশের মুশরিক বলে চিহ্নিত করেন, আর একটি সমান্তরাল আয়াতে কুরআন এভাবে বলা লোকদের জালিম, অর্থাৎ সীমালঙ্ঘনকারী বলে, যারা বলেছিল তোমরা তো এক জাদুগ্রস্ত লোকেরই অনুসরণ করছ। কথাটা সাবধানে বলা দরকার। আয়াত নিন্দা করে একটা ভঙ্গির: আগেই অস্বীকার করে রেখে অবাধ্যতায় নিদর্শন দাবি করা। এই নিন্দা কোনো বংশ, শহর বা আজকের জীবিত কারো নয়। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর প্রতি অবজ্ঞার অনুমতি দেয় না, আর এই নামধারী কয়েকজনের জায়গায় কেউ নিজের প্রতিপক্ষকে বসাতে পারে না। নিন্দিত হচ্ছে বন্ধ মনের সেই ভঙ্গি, যেখানেই তা থাক, নিজের ভেতরে হলেও।"
          },
          {
            "en": "The account itself carries the proof of this. Ibn Kathir notes that the Prophet asked for their punishment to be delayed, hoping God would bring believers from their offspring, and that this is exactly what happened: some of the very men in that gathering later embraced Islam sincerely. He names 'Abdullah ibn Abi Umayyah, who had sworn he would not believe even if he saw the ladder to heaven, and who afterwards turned to God in true repentance. The gate of mercy chosen over the sign was not left standing shut. That is the difference between condemning a decision and condemning a soul.",
            "bn": "বর্ণনাটাই এর প্রমাণ বহন করে। ইবন কাসীর উল্লেখ করেন, নবী ﷺ তাদের শাস্তি পিছিয়ে দিতে চাইলেন, এই আশায় যে আল্লাহ তাদের বংশ থেকে মুমিন বের করবেন, আর ঠিক তা-ই ঘটল: সেই বৈঠকের কিছু লোক পরে খাঁটিভাবে ইসলাম গ্রহণ করে। তিনি নাম নেন আবদুল্লাহ ইবন আবি উমাইয়ার, যে কসম খেয়ে বলেছিল আকাশের সিঁড়ি দেখলেও সে মানবে না, অথচ পরে সে সত্যিকারের তওবা করে আল্লাহর দিকে ফিরে আসে। নিদর্শনের বদলে বেছে নেওয়া রহমতের দরজা বন্ধ করে রাখা হয়নি। সিদ্ধান্তের নিন্দা আর মানুষের নিন্দার মধ্যে এখানেই পার্থক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "When Proof Cannot Persuade",
          "bn": "প্রমাণ যখন মন টলায় না"
        },
        "p": [
          {
            "en": "The lasting lesson of the verse is about the order of the heart, not the size of the sign. These men had the Qur'an they could not rival and the standing wonders of their own valley, and they still asked for more, because the deciding had come first and the demand only followed. God's own reply, reported by Ibn Kathir, makes the point: a sign given to such a heart would not have guided it but hardened it. Evidence does not overpower a will that has set itself against the truth; it is received by a will already willing to look.",
            "bn": "আয়াতের স্থায়ী শিক্ষা নিদর্শন কত বড় তা নিয়ে নয়, মনের ভেতরে কোনটা আগে আসে তা নিয়ে। এই লোকদের হাতে ছিল সেই কুরআন, যার সমকক্ষ তারা আনতে পারেনি, আর ছিল নিজেদের উপত্যকার চিরচেনা বিস্ময়গুলো। তবুও তারা আরও চাইল, কারণ সিদ্ধান্ত আগেই নেওয়া হয়ে গিয়েছিল, দাবি এসেছিল শুধু তার পেছন পেছন। ইবন কাসীরের বর্ণনায় আল্লাহর নিজের জবাবই কথাটা পরিষ্কার করে দেয়: এমন অন্তরকে নিদর্শন দিলে তা হেদায়েত পেত না, বরং আরও কঠিন হয়ে যেত। যে মন সত্যের বিরুদ্ধে দাঁড়িয়ে গেছে, প্রমাণ তাকে জোর করে বদলাতে পারে না। প্রমাণকে কবুল করে সেই মন, যে আগে থেকেই দেখতে রাজি।"
          },
          {
            "en": "So the mirror the verse holds up asks a quiet question. When I tell myself I would commit if I only had one more reason, one clearer sign, one answered prayer, am I truly waiting on evidence, or have I already refused and dressed the refusal as patience? The honest test is whether I act on the truth I can already see. The people of this verse wanted the last word more than they wanted the answer. The invitation underneath their story is to want the answer, and to let it move me while the gate of mercy still stands open.",
            "bn": "তাই আয়াত যে আয়না তুলে ধরে, তা চুপিচুপি একটা প্রশ্ন করে। আমি যখন নিজেকে বলি, আর একটা কারণ পেলে, আরেকটু স্পষ্ট নিদর্শন পেলে, একটা দোয়া কবুল হলেই আমি লেগে পড়তাম, তখন আমি কি সত্যিই প্রমাণের অপেক্ষায় আছি? নাকি আগেই না বলে দিয়ে সেই না-কে ধৈর্যের পোশাক পরিয়েছি? সৎ পরীক্ষা হলো, যে সত্য আমি এখনই দেখতে পাচ্ছি, তার ওপর আমল করি কি না। এই আয়াতের লোকেরা জবাবের চেয়ে শেষ কথাটা নিজেদের করে রাখতেই বেশি চেয়েছিল। তাদের কাহিনির ভেতরের ডাকটা হলো জবাবটাই চাওয়া, আর রহমতের দরজা খোলা থাকতেই সেই জবাবকে নিজেকে বদলাতে দেওয়া।"
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
          "bn": "যেখানে আলোচনা মোড় নেয়"
        },
        "p": [
          {
            "en": "The verses just before this one stack the demands of the Makkan deniers one on another: bring us a gushing spring, a garden of palms, a house of gold, or climb into the sky and bring down a book we can read (17:90 to 17:93). Each was answered, and then 17:96 closed the argument with a witness, that it is enough for Allah to stand as witness between the Prophet and them. Verse 97 draws the line under the whole exchange. After every sign and every reply, whether a person ends up guided or astray rests with Allah alone.",
            "bn": "ঠিক আগের আয়াতগুলো মক্কার অস্বীকারকারীদের একের পর এক দাবি সাজিয়ে রাখে: আমাদের জন্য ঝর্ণা বইয়ে দাও, খেজুরের বাগান দাও, স্বর্ণের ঘর দাও, কিংবা আকাশে উঠে এমন এক কিতাব নামিয়ে আনো যা আমরা পড়তে পারি (১৭:৯০ থেকে ১৭:৯৩)। প্রতিটির জবাব এসেছে, এরপর ১৭:৯৬ আয়াত এক সাক্ষী দিয়ে আলোচনা শেষ করে: নবী ﷺ ও তাদের মাঝে আল্লাহর সাক্ষ্যই যথেষ্ট। ৯৭ আয়াত গোটা কথোপকথনের নিচে দাগ টেনে দেয়। সব নিদর্শন আর সব জবাবের পর একজন মানুষ পথপ্রাপ্ত হবে না পথভ্রষ্ট, তা কেবল আল্লাহর হাতে।"
          },
          {
            "en": "This is why Ibn Kathir opens his comment on the same note: guidance and misguidance rest in the hands of Allah, and none can put back His judgement. Whoever He guides cannot be led astray, and whoever He leaves to stray finds no one to guide him instead. Ibn Kathir ties it to a twin verse, that whom Allah guides is the rightly guided, but whom He sends astray will find no guiding friend to lead him (18:17). The line is not neutral reporting. It names the place where the outcome is settled.",
            "bn": "এ কারণেই ইবন কাসীর একই সুরে তাঁর ব্যাখ্যা শুরু করেন: হেদায়েত ও গুমরাহি আল্লাহর হাতে, তাঁর ফয়সালা কেউ ফিরিয়ে দিতে পারে না। যাকে তিনি পথ দেখান, কেউ তাকে বিভ্রান্ত করতে পারে না, আর যাকে তিনি পথভ্রষ্ট হতে দেন, তাকে পথ দেখানোর কেউ থাকে না। ইবন কাসীর একে যুক্ত করেন এর যমজ এক আয়াতের সঙ্গে, আল্লাহ যাকে পথ দেখান সে-ই পথপ্রাপ্ত, আর যাকে তিনি পথভ্রষ্ট করেন তার জন্য পথ দেখানো কোনো অভিভাবক পাওয়া যাবে না (১৮:১৭)। কথাটা নিছক খবর নয়। এটি বলে দেয় ফয়সালা কোথায় হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Held in One Hand",
          "bn": "হেদায়েত থাকে এক হাতে"
        },
        "p": [
          {
            "en": "At-Tabari reads the first clause closely. Whoever Allah guides to faith in Him, and to believing His Messenger and what he brought from his Lord, and grants him success in it, is the one truly guided to the truth, not a man guided by anyone other than his Lord, for guidance is in Allah's hand. The wording matters. The guided person is not the one who found his own way and was later confirmed in it; he is the one Allah directed and enabled. Al-Qurtubi puts the same thought as a plain condition. Had Allah guided them, they would have been guided.",
            "bn": "তাবারী প্রথম অংশটি মন দিয়ে পড়েন। আল্লাহ যাকে তাঁর প্রতি ঈমানের দিকে, তাঁর রাসূল ও রাসূল যা এনেছেন তা মেনে নেওয়ার দিকে পরিচালিত করেন এবং সে কাজে তাওফিক দেন, সে-ই সত্যের দিকে সত্যিকার পথপ্রাপ্ত, তার রব ছাড়া অন্য কারও দেখানো পথে নয়, কারণ হেদায়েত আল্লাহরই হাতে। শব্দগুলো গুরুত্বপূর্ণ। পথপ্রাপ্ত সে নয় যে নিজেই পথ খুঁজে নিয়ে পরে তাতে থিতু হয়েছে, বরং সে যাকে আল্লাহ পথ দেখিয়েছেন ও সামর্থ্য দিয়েছেন। কুরতুবী একই কথা এক সরল শর্তে বলেন। আল্লাহ যদি তাদের পথ দেখাতেন, তারা পথ পেত।"
          },
          {
            "en": "As-Sa'di sets the whole verse under one heading: Allah alone possesses guidance and misguidance. When He guides a person, He eases him toward what is easy and turns him from what is hard, so that the man becomes guided in truth and not merely in name. Read this way, guidance is not a verdict passed on a finished character. It is a help given along the road, a smoothing of the path so that the next step becomes possible. The one who walks it has been carried as much as he has walked, and that is exactly what leaves no room for pride.",
            "bn": "সাদী গোটা আয়াতকে এক শিরোনামের নিচে রাখেন: হেদায়েত ও গুমরাহি একমাত্র আল্লাহরই এখতিয়ার। তিনি যখন কাউকে পথ দেখান, তখন তাকে সহজের দিকে সহজ করে দেন আর কঠিন থেকে সরিয়ে রাখেন, যাতে সে নামমাত্র নয়, সত্যিকারভাবেই পথপ্রাপ্ত হয়। এভাবে পড়লে হেদায়েত কোনো গড়ে-ওঠা চরিত্রের উপর দেওয়া রায় নয়। এ পথের মধ্যে দেওয়া এক সাহায্য, পথটা মসৃণ করে দেওয়া যাতে পরের পা ফেলা সম্ভব হয়। যে এ পথে চলে, সে যতটা হেঁটেছে ততটাই তাকে বয়ে নেওয়া হয়েছে। ঠিক এখানেই অহংকারের কোনো জায়গা থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Left to One's Own Self",
          "bn": "নিজের হাতে ছেড়ে দেওয়া"
        },
        "p": [
          {
            "en": "The second clause turns the picture over. At-Tabari glosses whoever He sends astray as whoever Allah abandons to being away from the truth, failing him in reaching it, not granting him the success He gave the other. The verb he reaches for is that of khidhlan, the withdrawal of support, rather than a shove into error. As-Sa'di and the Muyassar sharpen it with a single phrase that recurs across the commentaries: Allah leaves such a person to himself. He entrusts the man to his own devices and stands back, and that abandonment is itself the losing of the road.",
            "bn": "দ্বিতীয় অংশটি ছবিটা উল্টে দেয়। তাবারী পথভ্রষ্ট করার ব্যাখ্যায় বলেন, আল্লাহ যাকে সত্য থেকে দূরে ছেড়ে দেন, তাতে পৌঁছাতে তাকে সাহায্য থেকে বঞ্চিত করেন, অন্যজনকে যে তাওফিক দিয়েছেন তা তাকে দেন না। তিনি যে শব্দটি বেছে নেন তা খিযলান, অর্থাৎ সাহায্য তুলে নেওয়া, ভুলের দিকে ধাক্কা দেওয়া নয়। সাদী ও মুয়াসসার তা আরও স্পষ্ট করেন এক কথায়, যা তাফসীরগুলোতে ঘুরেফিরে আসে: আল্লাহ এমন মানুষকে তার নিজের হাতে ছেড়ে দেন। তাকে নিজের ভরসায় রেখে সরে দাঁড়ান, আর এই ছেড়ে দেওয়াই তো পথ হারানো।"
          },
          {
            "en": "That phrase is where the commentators locate the verse's justice, and they do not push past what the text says. To be left to oneself is already the ruin, because before God none is sufficient for himself. As-Sa'di ends his comment by insisting on the balance: Allah did not wrong them, and their straying is the recompense of a disbelief that was their own. Misguidance here meets a turning away; it is not an arbitrary sentence passed on the innocent. The commentators hold guidance-as-gift and straying-as-desert together, and leave the deeper question of decree exactly where the verse leaves it.",
            "bn": "এই কথাটির মধ্যেই তাফসীরকারেরা আয়াতের ইনসাফ খুঁজে পান, আর আয়াত যা বলে, তার বাইরে যান না। নিজের হাতে ছেড়ে দেওয়াটাই তো ধ্বংস, কারণ আল্লাহর সামনে কেউ নিজের জন্য যথেষ্ট নয়। সাদী তাঁর ব্যাখ্যা শেষ করেন এই ভারসাম্যের ওপর জোর দিয়ে: আল্লাহ তাদের ওপর জুলুম করেননি, তাদের পথভ্রষ্টতা তাদের নিজেদেরই কুফরির প্রতিফল। এখানে গুমরাহি আসে মুখ ফিরিয়ে নেওয়ার জবাবে; নির্দোষের ওপর চাপানো খেয়ালি রায় এটা নয়। তাফসীরকারেরা দুটো কথা একসঙ্গে ধরে রাখেন: হেদায়েত আল্লাহর দান, আর গুমরাহি মানুষের প্রাপ্য। তাকদিরের গভীর প্রশ্নটা তাঁরা ঠিক সেখানেই রেখে দেন, যেখানে আয়াত রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Guardian But Him",
          "bn": "তিনি ছাড়া কোনো অভিভাবক নেই"
        },
        "p": [
          {
            "en": "You will never find for them protectors besides Him. At-Tabari reads the protectors here as helpers, allies who might rescue them from Allah when He wills to punish them. Ibn Kathir hears it a little differently, as protecting friends who could guide them where Allah has not, and as-Sa'di as a patron who might shield a man from Allah's punishment. The readings converge on one loss. Whatever a person leans on in place of Allah, whether ally, patron, or the power he trusted, is shown unable to reach him at the single moment it would have mattered.",
            "bn": "তুমি কখনো তাঁকে ছাড়া তাদের জন্য কোনো অভিভাবক পাবে না। তাবারী এখানে অভিভাবক বলতে বোঝেন সাহায্যকারী, এমন সঙ্গী যারা আল্লাহ শাস্তি দিতে চাইলে তাদের বাঁচাতে পারত। ইবন কাসীর একটু ভিন্নভাবে বোঝেন: এমন রক্ষাকারী বন্ধু, যারা আল্লাহ যাকে পথ দেখাননি তাকে পথ দেখাতে পারত। আর সাদী বোঝেন এমন পৃষ্ঠপোষক, যে আল্লাহর শাস্তি থেকে মানুষকে আড়াল করতে পারত। সব ব্যাখ্যা এসে মেলে একই ক্ষতিতে। আল্লাহর বদলে মানুষ যার ওপরই ভরসা করুক, সঙ্গী হোক, পৃষ্ঠপোষক হোক, কিংবা যে ক্ষমতায় সে আস্থা রেখেছিল, যে একটিমাত্র মুহূর্তে সত্যিই দরকার ছিল, তখন কেউই তার কাছে পৌঁছাতে পারে না।"
          },
          {
            "en": "This is aimed straight at the deniers of the passage. They had their chiefs, their gods, their standing and their wealth, and they spoke as men who were covered on every side. The verse tells them the cover is nothing. Ibn Kathir frames the whole line as Allah's account of how His rule runs through His creation, with no one able to send His judgement back. A protector who cannot protect against the only One who judges is not a protector at all, and the verse quietly strips the word down to that bare truth.",
            "bn": "কথাটা সরাসরি এই আলোচনার অস্বীকারকারীদের দিকে তাক করা। তাদের ছিল সরদার, ছিল উপাস্য, ছিল মান-মর্যাদা আর ধন-সম্পদ, আর তারা কথা বলত এমন মানুষের মতো যাদের চারপাশ ঢাকা। আয়াত তাদের বলে, সে ঢাকা কিছুই নয়। ইবন কাসীর গোটা বাক্যটিকে দেখেন আল্লাহর সৃষ্টির উপর তাঁর শাসন কীভাবে চলে তার বিবরণ হিসেবে, যেখানে তাঁর ফয়সালা ফেরানোর কেউ নেই। যে অভিভাবক একমাত্র বিচারকের বিরুদ্ধে রক্ষা করতে পারে না, সে তো অভিভাবকই নয়, আর আয়াত নিঃশব্দে শব্দটিকে সেই খালি সত্যে নামিয়ে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gathered Upon Their Faces",
          "bn": "মুখের ভরে হাশর"
        },
        "p": [
          {
            "en": "And We will gather them on the Day of Resurrection upon their faces. A man asked, O Prophet of Allah, will the disbeliever be gathered on his face on the Day of Resurrection? He answered, Is not the One who made him walk on his two feet in this world able to make him walk on his face on the Day of Resurrection? The subnarrator Qatada added, Yes, by the might of our Lord. Anas reported it, and al-Bukhari and Muslim recorded it, so it is sound; the commentators cite it right here to explain the verse's image.",
            "bn": "আর ক্বিয়ামাতের দিন আমি তাদের একত্রিত করব তাদের মুখের ভরে। একজন লোক জিজ্ঞেস করল, হে আল্লাহর নবী, ক্বিয়ামাতের দিন কি কাফিরকে তার মুখের ভরে একত্রিত করা হবে? তিনি জবাব দিলেন, যিনি দুনিয়ায় তাকে দুই পায়ে চালিয়েছেন, তিনি কি ক্বিয়ামাতের দিন তাকে মুখের ভরে চালাতে সক্ষম নন? বর্ণনার এক রাবি ক্বাতাদা যোগ করেন, হ্যাঁ, আমাদের রবের ইজ্জতের কসম। আনাস (রাঃ) এটি বর্ণনা করেছেন, বুখারী ও মুসলিম এটি সংকলন করেছেন, তাই এটি সহীহ; তাফসীরকারেরা আয়াতের ছবি বোঝাতে ঠিক এখানেই এটি উল্লেখ করেন।"
          },
          {
            "en": "How should upon their faces be pictured? Al-Qurtubi records two readings. One takes it from an Arab idiom, where coming on the face means coming in haste, so it is a hurrying of them to Hell. The other, which he calls the sound view, is that they are dragged on their faces to the Fire, as is done in this world to one meant for utter humiliation. The hadith of Anas turns him toward the second, and al-Baghawi adds that they ward off with their faces every rough rise and thorn on the way. A life that refused to bow is gathered in the very posture of being brought lowest.",
            "bn": "মুখের ভরে, এই দৃশ্যটা কীভাবে বুঝব? কুরতুবী দুটি ব্যাখ্যা উল্লেখ করেন। একটি আরবি বাগধারা থেকে: মুখের ওপর আসা মানে তাড়াহুড়ো করে আসা, অর্থাৎ তাদের দ্রুত জাহান্নামের দিকে হাঁকিয়ে নেওয়া হবে। অন্যটিকে তিনি সঠিক মত বলেন: তাদের মুখের ওপর হিঁচড়ে আগুনের দিকে টেনে নেওয়া হবে, যেমন দুনিয়ায় কাউকে চরম অপমান করতে চাইলে করা হয়। আনাসের হাদিস তাঁকে দ্বিতীয় মতের দিকে ঝোঁকায়। আর বাগাভী যোগ করেন, পথের প্রতিটি উঁচু ঢিবি আর কাঁটা তারা মুখ দিয়েই ঠেকাবে। যে জীবন কখনো মাথা নোয়াতে চায়নি, তাকে হাশরে আনা হয় সবচেয়ে নিচু হওয়ার ভঙ্গিতেই।"
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
            "bn": "অন্ধ, বোবা ও বধির। তাবারী প্রথমে সোজা অর্থটি ধরেন: বোবা মানে কথা বলার শক্তি হারানো, যেমন ক্বাতাদা ব্যাখ্যা করেছেন, আর তিনটি শব্দ দৃষ্টি, বাক ও শ্রবণ হারানোকে বোঝায়। কিন্তু তিনি সামনে আনেন স্পষ্ট সমস্যাটি। কুরআন অন্যত্র বলে, অপরাধীরা আগুন দেখে আর ভাবে তারা তাতে পড়বে (১৮:৫৩), তারা তার ফুঁসে ওঠা ও গর্জন শোনে (২৫:১২), আর তারা নিজেদের ধ্বংস কামনা করে চিৎকার করে (২৫:১৩)। একই মানুষ এখানে অন্ধ, বোবা ও বধির, আবার সেখানে দেখে, শোনে ও কথা বলে, তা কী করে হয়?"
          },
          {
            "en": "The commentators give two answers and do not force one. The first is a matter of stages. They are gathered and driven to the standing in this stripped state, and their sight, hearing and speech are given back at other points, once they face the Fire itself. Al-Hasan places the blindness in the drive toward the standing, until they enter the Fire. Muqatil ties it to the moment they are told, Be despised in it and speak not to Me (23:108), after which the three faculties fall away together. On this reading the words describe a real condition at a real stage of the Day.",
            "bn": "তাফসীরকারেরা দুটি জবাব দেন, কোনোটিকে জোর করে চাপান না। প্রথম জবাব পর্যায়ের। দৃষ্টি, শ্রবণ ও বাকশক্তি কেড়ে নেওয়া এই অবস্থাতেই তাদের জড়ো করে হাশরের ময়দানের দিকে হাঁকিয়ে নেওয়া হয়। পরে অন্য সময়ে, যখন তারা আগুনের মুখোমুখি হয়, তখন এগুলো ফিরিয়ে দেওয়া হয়। হাসান অন্ধত্বকে রাখেন ময়দানের দিকে হাঁকিয়ে নেওয়ার সময়ে, আগুনে ঢোকার আগ পর্যন্ত। মুক্বাতিল একে জোড়েন সেই মুহূর্তের সঙ্গে, যখন তাদের বলা হয়, এতে লাঞ্ছিত হয়ে থাক আর আমার সঙ্গে কথা বোলো না (২৩:১০৮); এরপর তিনটি শক্তি একসঙ্গে চলে যায়। এ ব্যাখ্যায় শব্দগুলো সেই দিনের এক বাস্তব পর্যায়ের বাস্তব অবস্থা।"
          },
          {
            "en": "The second answer reads the three words against the life that earned them. Ibn Abbas takes blind as seeing nothing that would gladden them, dumb as unable to speak a single argument in their defence, and deaf as hearing nothing of any use. Ibn Kathir joins this to the world they came from: they were blind, dumb and deaf to the truth while they lived, and are raised so on the very Day they need those faculties most. The verse keeps both readings open, and both of them indict the same refusal.",
            "bn": "দ্বিতীয় জবাব তিনটি শব্দকে মেলায় সেই জীবনের সঙ্গে, যে জীবনের কারণে তাদের এ দশা। ইবন আব্বাস (রাঃ) বলেন, অন্ধ মানে খুশি হওয়ার মতো কিছুই না দেখা, বোবা মানে নিজেদের পক্ষে একটি যুক্তিও বলতে না পারা, আর বধির মানে কাজে আসে এমন কিছুই না শোনা। ইবন কাসীর এর সঙ্গে জোড়েন তাদের ফেলে আসা দুনিয়াকে: বেঁচে থাকতে তারা সত্যের ব্যাপারে অন্ধ, বোবা ও বধির ছিল, তাই ঠিক সেই দিনই তাদের এভাবে ওঠানো হয়, যেদিন এই শক্তিগুলো তাদের সবচেয়ে বেশি দরকার। আয়াত দুটি ব্যাখ্যাই খোলা রাখে, আর দুটোই একই প্রত্যাখ্যানকে কাঠগড়ায় দাঁড় করায়।"
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
            "bn": "তাদের আবাস জাহান্নাম; যখনই তা নিস্তেজ হয়, আমি তাদের জন্য দহন বাড়িয়ে দিই। তাফসীরকারেরা নিস্তেজ হওয়ার অর্থে এসে মেলেন। ইবন আব্বাস (রাঃ) একে বলেন শান্ত হয়ে নিভে আসা, মুজাহিদ বলেন নিভে যাওয়া, ক্বাতাদা বলেন দুর্বল হওয়া, আর তাবারী বলেন কোমল হয়ে থিতিয়ে আসা, এক পুরনো কবিতার চরণ টেনে যেখানে প্রদীপ কখনো ম্লান হয় কখনো জ্বলে ওঠে। আর বাড়িয়ে দেওয়া মানে শিখা, তাপ আর জ্বলন্ত অঙ্গার বাড়িয়ে দেওয়া। তাই আগুন যেন নিভে আসে, আর যতবার তা হয়, ততবার একে আবার জ্বালানি দেওয়া হয়।"
          },
          {
            "en": "But the commentators are careful that this rising and falling is no relief. As-Sa'di reads subsides as the fire making ready to go out, and the increase as its being kindled afresh upon them, so that the punishment never lets up, they are not finished off by death, and nothing of it is lightened. Al-Qurtubi and al-Baghawi say the same: the calming of the blaze brings no decrease in their pains and no easing of the punishment, for Allah has said elsewhere that it is not lightened for them (43:75). The lull is a part of the torment, not a pause in it.",
            "bn": "কিন্তু তাফসীরকারেরা খেয়াল রাখেন যে এই ওঠানামা কোনো স্বস্তি নয়। সাদী নিস্তেজ হওয়াকে পড়েন আগুনের নিভে যাওয়ার প্রস্তুতি হিসেবে, আর বৃদ্ধিকে পড়েন তাদের উপর নতুন করে জ্বালিয়ে দেওয়া হিসেবে, যাতে শাস্তি কখনো থামে না, মৃত্যু দিয়ে তাদের শেষ করে দেওয়া হয় না, আর কিছুই লাঘব করা হয় না। কুরতুবী ও বাগাভী একই কথা বলেন: শিখা শান্ত হলেও তাদের যন্ত্রণায় কোনো কমতি আসে না, শাস্তিতে কোনো ছাড় হয় না, কারণ আল্লাহ অন্যত্র বলেছেন যে তাদের থেকে তা হালকা করা হবে না (৪৩:৭৫)। এই থমকে যাওয়াটা শাস্তিরই অংশ, তার মধ্যে বিরতি নয়।"
          },
          {
            "en": "Ibn Abbas gives the starkest image of what the subsiding really is. The fire blazes with them as its fuel until it has burned them away and nothing of them is left, and then it settles into glowing embers; that settling is its subsiding. When they are made a new creation, it takes them again. Qatada reads it alongside the renewing of skins, each burned skin replaced so that the punishment can be tasted afresh. Ibn Kathir closes on a warning verse of its own, So taste, We shall not increase you except in torment (78:30).",
            "bn": "ইবন আব্বাস (রাঃ) নিস্তেজ হওয়া আসলে কী, তার সবচেয়ে কঠিন ছবিটা দেন। আগুন তাদের জ্বালানি করে জ্বলতে থাকে যতক্ষণ না তাদের পুড়িয়ে শেষ করে, তাদের কিছুই আর বাকি থাকে না, এরপর তা জ্বলন্ত অঙ্গারে থিতিয়ে আসে; সেই থিতিয়ে আসাই তার নিস্তেজ হওয়া। যখন তাদের নতুন সৃষ্টি করে দেওয়া হয়, আগুন আবার তাদের ধরে। ক্বাতাদা একে পড়েন চামড়া নতুন করে দেওয়ার সঙ্গে মিলিয়ে, প্রতিটি পোড়া চামড়া বদলে দেওয়া হয় যাতে শাস্তি নতুন করে চাখা যায়। ইবন কাসীর শেষ করেন নিজস্ব এক সতর্কবাণীর আয়াতে, তোমরা স্বাদ নাও, আমি তোমাদের শাস্তি ছাড়া আর কিছুই বাড়াব না (৭৮:৩০)।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Warrants",
          "bn": "আয়াত কী অনুমতি দেয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes those whom Allah leaves to stray and the end their refusal reaches, exactly as the commentators describe it, and no further. It licenses nothing against any living person or community. No one on earth may point to a particular man and declare him among those Allah has sent astray, for that judgement is Allah's alone and belongs to the Day the verse is describing, not to us. To read the verse as a warrant to condemn the living is to seize a knowledge that the verse itself places entirely in the hand of God.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত তাদের বর্ণনা দেয় যাদের আল্লাহ পথভ্রষ্ট হতে ছেড়ে দেন, আর তাদের প্রত্যাখ্যান যে পরিণতিতে গিয়ে পৌঁছে, ঠিক যেমন তাফসীরকারেরা বলেন, তার বেশি নয়। এটি কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। পৃথিবীর কেউ কোনো নির্দিষ্ট মানুষকে দেখিয়ে বলতে পারে না যে সে আল্লাহর পথভ্রষ্ট করা লোকদের একজন, কারণ সে ফয়সালা একমাত্র আল্লাহর আর তা সেই দিনের যা আয়াত বর্ণনা করছে, আমাদের নয়। আয়াতকে জীবিতদের দোষী সাব্যস্ত করার সনদ বানানো মানে সেই জ্ঞান কেড়ে নেওয়া যা আয়াত নিজেই পুরোপুরি আল্লাহর হাতে রাখে।"
          },
          {
            "en": "The commentators guard this from both sides. As-Sa'di insists Allah did not wrong these people; their straying was their own disbelief. Yet guidance and misguidance rest with Allah alone, so no observer can read another's heart or settle his case. That leaves me one task, and it is not a census of the doomed. It is to stop treating my guidance as a possession. I did not invent the light I walk by, and the verse says plainly I can be left to myself. The fitting response is to keep asking to be held on the path, and to keep eyes, tongue and ears open to the truth.",
            "bn": "তাফসীরকারেরা দুই দিক থেকেই এই কথাকে আগলে রাখেন। সাদী জোর দিয়ে বলেন, আল্লাহ এই লোকদের ওপর জুলুম করেননি, তাদের পথভ্রষ্টতা তাদের নিজেদেরই কুফরি। আবার হেদায়েত ও গুমরাহি একমাত্র আল্লাহর হাতে, তাই বাইরে থেকে কেউ অন্যের অন্তর পড়তে বা তার ফয়সালা করতে পারে না। ফলে আমার হাতে থাকে একটাই কাজ, আর তা ধ্বংসপ্রাপ্তদের তালিকা বানানো নয়। কাজটা হলো নিজের হেদায়েতকে নিজের সম্পত্তি ভাবা বন্ধ করা। যে আলোয় আমি চলি, তা আমার বানানো নয়, আর আয়াত সোজাসুজি বলে, আমাকেও নিজের হাতে ছেড়ে দেওয়া হতে পারে। তাই মানানসই জবাব হলো বারবার চাওয়া, যেন আমাকে পথের ওপর ধরে রাখা হয়, আর সত্যের জন্য নিজের চোখ, জিভ ও কান খোলা রাখা।"
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
          "bn": "ফেরাউনের পর সেই আদেশ"
        },
        "p": [
          {
            "en": "The verse falls just as the sea closes. In 17:103 Pharaoh intended to drive the Children of Israel from the land, and God drowned him and all with him. Then comes min baʿdihi, after him: God turns to the people Pharaoh had crushed and says uskunū al-arḍ, dwell in the land. Ibn Kathir reads the placement closely. The drowning is not the end of the story but its hinge, the point where the oppressed stop fleeing and are told at last to stay.",
            "bn": "আয়াতটি আসে ঠিক তখন, যখন সমুদ্র বন্ধ হয়ে গেছে। ১৭:১০৩ আয়াতে ফেরাউন চেয়েছিল বানী ইসরাঈলকে যমীন থেকে সরিয়ে দিতে, আর আল্লাহ তাকে ও তার সঙ্গীদের সবাইকে ডুবিয়ে দিলেন। তারপর আসে মিন বাদিহি, তার পরে: আল্লাহ সেই নিপীড়িত মানুষদের দিকে ফেরেন যাদের ফেরাউন পিষে রেখেছিল, আর বলেন উসকুনুল আরদ, যমীনে বসবাস করো। ইবন কাসীর আয়াতের অবস্থানটা খুঁটিয়ে দেখেন। এই ডুবে যাওয়া কাহিনির শেষ নয়, বরং তার মোড়, যেখানে নিপীড়িতরা পালানো থামিয়ে অবশেষে থিতু হওয়ার আদেশ পায়।"
          },
          {
            "en": "Ibn Kathir hears more than old history here. To the Prophet, reciting it in Makkah before the Hijrah, it reads as glad tidings. The people of Makkah, too, were set on driving him out, as 17:76 and 17:77 record, and he too would be given the city he was pushed from. So the verse works on two levels: one about a people long ago, one about the man reciting it. Both turn on a single law. The ground can change hands, and the One who moves it is God, not whoever holds the power.",
            "bn": "ইবন কাসীর এই বাক্যে পুরনো ইতিহাসের চেয়ে বেশি কিছু শোনেন। নবী ﷺ যখন হিজরতের আগে মক্কায় এটি তিলাওয়াত করছেন, তাঁর কাছে তা সুসংবাদ। মক্কার লোকেরাও তাঁকে বের করে দিতে উঠেপড়ে লেগেছিল, যেমন ১৭:৭৬ ও ১৭:৭৭ আয়াত বলে। আর তিনিও একদিন সেই শহর ফিরে পাবেন যেখান থেকে তাঁকে ঠেলে বের করা হয়েছিল। তাই আয়াতটি একসঙ্গে দুই স্তরে কাজ করে। একটি বহুকাল আগের এক জাতিকে নিয়ে, অন্যটি যিনি তিলাওয়াত করছেন তাঁকে নিয়ে। দুটোই একই বিধানের উপর ঘোরে। যমীনের হাতবদল হতে পারে, আর সেই হাতবদল ঘটান আল্লাহ, ক্ষমতা যার হাতেই থাক না কেন।"
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
            "bn": "কোন যমীনের কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারদের মত ভিন্ন। তাবারী বলেন শামের ভূমি, মুয়াসসারও তাই বলে: ফেরাউন ও তার সৈন্যরা ধ্বংস হওয়ার পর বানী ইসরাঈলকে শামের ভূমিতে বসবাস করতে বলা হলো। কুরতুবী একে শাম ও মিসর পর্যন্ত ছড়িয়ে দেন, আর বাগাভী মিসর ও শাম দুটোকেই একসঙ্গে ধরেন। শুধু আল-আরদ শব্দে জায়গাটা খোলা থেকে যায়। সাগর দুভাগ হয়ে আবার মিলে যাওয়ার পর এই জাতি কোথায় গিয়েছিল, কুরআনের সেই বড় বিবরণ থেকে প্রত্যেক তাফসীরকার ফাঁকটুকু পূরণ করেন।"
          },
          {
            "en": "Ibn Kathir takes al-arḍ more broadly still. He does not pin it to one province but reads it as the inheritance itself: God caused the people who had been made weak to inherit the land, and gave them the land of Pharaoh's people, its crops and treasures. He cites 26:59, thus We caused the Children of Israel to inherit them. For Ibn Kathir the weight is less the map than the transfer: what the tyrant guarded is handed to the very people he ground down.",
            "bn": "ইবন কাসীর আল-আরদ শব্দটি আরও ব্যাপকভাবে নেন। তিনি একে কোনো একটি অঞ্চলে বেঁধে ফেলেন না, বরং পড়েন উত্তরাধিকার হিসেবেই: যাদের দুর্বল করে রাখা হয়েছিল, আল্লাহ তাদের যমীনের উত্তরাধিকারী করলেন, আর দিলেন ফেরাউনের জাতির ভূমি, তার ক্ষেত ও ধনভাণ্ডার। তিনি ২৬:৫৯ আয়াত উদ্ধৃত করেন, এভাবেই আমি বানী ইসরাঈলকে এসবের উত্তরাধিকারী করলাম। ইবন কাসীরের কাছে আয়াতের ভার মানচিত্রে নয়, হাতবদলে। জালিম যা আগলে রেখেছিল, তা তুলে দেওয়া হলো সেই লোকদের হাতে যাদের সে পিষে রেখেছিল।"
          },
          {
            "en": "The disagreement is less a contradiction than a difference of focus. Tabari and al-Muyassar look to where the people settled next; Qurtubi and al-Baghawi hold two regions together; Ibn Kathir reads the word as inheritance rather than a border. None of them turns the line into a title-deed to a particular soil for all time. Each reads it as the record of a settling that God granted after an oppression He had ended. And they all then move straight on to the clause where the verse itself points, away from any earthly ground: the Hereafter.",
            "bn": "এই মতভেদ ঠিক বিরোধ নয়, বরং দৃষ্টিভঙ্গির পার্থক্য। তাবারী ও মুয়াসসার তাকান জাতিটি এরপর কোথায় থিতু হলো সেদিকে; কুরতুবী ও বাগাভী দুটি অঞ্চল একসঙ্গে ধরেন; ইবন কাসীর শব্দটিকে সীমানা নয়, উত্তরাধিকার হিসেবে পড়েন। তাঁদের কেউই আয়াতটিকে চিরকালের জন্য কোনো নির্দিষ্ট মাটির দলিলে পরিণত করেন না। প্রত্যেকে একে পড়েন এক থিতু হওয়ার নথি হিসেবে, যা আল্লাহ দিলেন এক নিপীড়ন শেষ করার পর। আর তারপর তাঁরা প্রত্যেকেই সোজা এগিয়ে যান সেই বাক্যাংশে, যেখানে আয়াত নিজেই ইশারা করে, যেকোনো পার্থিব মাটি ছাড়িয়ে: আখিরাত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Settling With a Term",
          "bn": "মেয়াদ বেঁধে দেওয়া বসবাস"
        },
        "p": [
          {
            "en": "Notice how the sentence is built. God grants the land in its first half and dates it in its second: fa-idhā jāʾa waʿd al-ākhira, and when the promise of the Last comes. The commentators agree on this join even where they differ over the land. As-Sa'di reads the whole verse to a single end. They are brought together jamīʿan, all of them, so that every worker may be repaid for his work. The dwelling, however long it runs, is a stay held under notice. Its lease has a date written into the very breath that grants it.",
            "bn": "খেয়াল করুন বাক্যটি কীভাবে গড়া। আল্লাহ প্রথমার্ধে যমীন দান করেন, আর দ্বিতীয়ার্ধে তার মেয়াদ বেঁধে দেন: ফা-ইজা জাআ ওয়াদুল আখিরাহ, আর যখন শেষের ওয়াদা আসবে। যমীন নিয়ে মতভেদ থাকলেও এই জোড়ায় তাফসীরকারেরা একমত। সাদী গোটা আয়াতটিকে একটিমাত্র লক্ষ্যে পড়েন। তাদের জামিয়ান, সবাইকে একসঙ্গে জড়ো করা হবে, যাতে প্রতিটি আমলকারীকে তার আমলের প্রতিদান দেওয়া যায়। বসবাস যত দীর্ঘই হোক, তা এক মেয়াদি অবস্থান। যে নিঃশ্বাসে তা দান করা হচ্ছে, সেই নিঃশ্বাসেই তার তারিখ লেখা।"
          },
          {
            "en": "This reframes the gift. A land handed to the oppressed is real mercy, but the verse will not let it harden into a final home. At-Tabari glosses the closing clause as the Hour itself; al-Muyassar as the Day of Resurrection, when the dead are raised from their graves to the standing of the reckoning. So the settling that opens the verse is measured against the gathering that closes it. To dwell in the land, on the Qur'an's own terms, is to live on the road to somewhere else, never at the road's end.",
            "bn": "এতে দানটির মানেই বদলে যায়। নিপীড়িতদের হাতে তুলে দেওয়া যমীন সত্যিকারের রহমত, তবে আয়াত সেটাকে শেষ ঠিকানা হয়ে উঠতে দেয় না। তাবারী শেষ অংশটির ব্যাখ্যা করেন খোদ কিয়ামত দিয়ে, আর মুয়াসসার বলে পুনরুত্থানের দিন, যখন মৃতদের কবর থেকে তুলে হিসাবের ময়দানে দাঁড় করানো হবে। তাই আয়াতের শুরুর বসতিকে মাপা হয় আয়াতের শেষের হাশর দিয়ে। কুরআনের নিজের শর্তে যমীনে বসবাস মানে অন্য কোথাও যাওয়ার পথে থাকা, পথের শেষে পৌঁছে যাওয়া কখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise of the Last",
          "bn": "শেষের সেই ওয়াদা"
        },
        "p": [
          {
            "en": "What is waʿd al-ākhira, the promise of the Last? The majority of the commentators read it as the Resurrection. At-Tabari says it plainly: when the Hour comes, and it is the promise of the Hereafter. Al-Muyassar names it yawm al-qiyāma, the Day of Resurrection. Al-Baghawi and al-Qurtubi both gloss it the same way, the Day of Standing. As-Sa'di's whole reading, that all are brought together to be repaid for their deeds, rests on this same sense. On this reading the promise is the raising of the dead, the appointment God has fixed and will keep without fail.",
            "bn": "ওয়াদুল আখিরাহ, শেষের সেই ওয়াদা কী? বেশির ভাগ তাফসীরকার একে পড়েন পুনরুত্থান হিসেবে। তাবারী সোজা বলেন: যখন কিয়ামত আসবে, আর তা-ই শেষের ওয়াদা। মুয়াসসার একে বলেন ইয়াওমুল কিয়ামাহ, পুনরুত্থানের দিন। বাগাভী ও কুরতুবী দুজনেই একইভাবে ব্যাখ্যা করেন, হাশরের দিন। সাদীর গোটা পাঠ, অর্থাৎ সবাইকে জড়ো করা হবে আমলের প্রতিদান দিতে, এই একই অর্থের উপর দাঁড়িয়ে। এই পাঠে ওয়াদা মানে মৃতদের পুনরুত্থান, সেই নির্ধারিত সময় যা আল্লাহ স্থির করেছেন আর নিশ্চিতভাবেই রক্ষা করবেন।"
          },
          {
            "en": "A second reading is preserved, and the honest thing is to keep it as a difference rather than fold it away. Al-Qurtubi and al-Baghawi both report, on the authority of al-Kalbi, that waʿd al-ākhira here means the coming of ʿĪsā (AS) down from the sky. On that view the promise is a return within history, not only the final raising of the dead. The two commentators carry the reading without adopting it; they set it beside the Resurrection gloss and leave both standing, which is where an honest reader has to leave them too.",
            "bn": "একটি দ্বিতীয় ব্যাখ্যাও সংরক্ষিত আছে। সততার দাবি হলো, তাকে চাপা না দিয়ে মতভেদ হিসেবেই রেখে দেওয়া। কুরতুবী ও বাগাভী দুজনেই কালবীর সূত্রে বর্ণনা করেন, এখানে ওয়াদুল আখিরাহ মানে ঈসা (আঃ)-এর আসমান থেকে নেমে আসা। এই মতে ওয়াদাটি শুধু শেষ পুনরুত্থান নয়, ইতিহাসের ভেতরেই এক প্রত্যাবর্তন। দুই তাফসীরকার মতটি উল্লেখ করেন, কিন্তু নিজেরা গ্রহণ করেন না। তাঁরা একে পুনরুত্থানের ব্যাখ্যার পাশে রেখে দেন, দুটোকেই বহাল রাখেন। সৎ পাঠককেও ঠিক সেখানেই থামতে হয়।"
          },
          {
            "en": "It is worth being exact about what these commentators do not say. None of them ties this promise of the Last back to the two corruptions foretold at the opening of the sura, in 17:4 to 17:8, though a reader might expect the link. On these pages the phrase is read as the Resurrection by the majority, or as the descent of ʿĪsā (AS) by al-Kalbi, and no further than that. Where the sources fall silent, the discipline is to stop where they stop and not to supply a connection they did not themselves draw.",
            "bn": "এই তাফসীরকারেরা কী বলেন না, সে ব্যাপারেও নিখুঁত থাকা দরকার। সূরার শুরুতে ১৭:৪ থেকে ১৭:৮ আয়াতে যে দুই ফাসাদের ভবিষ্যদ্বাণী, তাঁদের কেউই শেষের এই ওয়াদাকে তার সঙ্গে জোড়েন না, যদিও পাঠক হয়তো এমন যোগসূত্র আশা করবেন। এখানে তাঁদের বেশির ভাগ কথাটিকে বোঝেন পুনরুত্থান, আর কালবী বোঝেন ঈসা (আঃ)-এর অবতরণ। এর বেশি কিছু নয়। উৎস যেখানে চুপ, সেখানে নিয়ম হলো তাঁরা যেখানে থেমেছেন সেখানেই থামা, আর তাঁরা নিজেরা যে যোগসূত্র টানেননি, তা জুড়ে না দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Together as Lafif",
          "bn": "মিশ্রিত ভিড়ে হাশর"
        },
        "p": [
          {
            "en": "The verse ends jiʾnā bikum lafīfan, We will bring you as a lafīf. At-Tabari opens the word: We gather you from your graves to the standing of the Resurrection as a lafīf, that is, intermingled, folded together, not knowing each other, none of you drawing off to his tribe and his clan. He derives it from the phrase lafaftu al-juyūsh, I folded the armies together, said when they are thrown against each other until all is mixed. Whatever is folded into something else, he adds, is lafīf with it.",
            "bn": "আয়াত শেষ হয় জিনা বিকুম লাফীফা দিয়ে, আমি তোমাদের লাফীফ হিসেবে হাজির করব। তাবারী শব্দটি খুলে দেন: তোমাদের কবর থেকে কিয়ামতের ময়দানে জড়ো করব লাফীফ হিসেবে, অর্থাৎ মিশ্রিত, একে অন্যের উপর জড়ানো, একে অন্যকে চেনে না, তোমাদের কেউ নিজের গোত্র ও বংশের দিকে সরে যেতে পারে না। তিনি শব্দটির উৎস দেখান লাফাফতুল জুয়ুশ বাক্যে, আমি সৈন্যদলকে একসঙ্গে জড়িয়ে দিলাম, যা বলা হয় যখন তারা একে অন্যের সঙ্গে ধাক্কা খেয়ে সব মিশে যায়। যা কিছু অন্য কিছুর সঙ্গে জড়ানো, তিনি বলেন, তা তার সঙ্গে লাফীফ।"
          },
          {
            "en": "Al-Qurtubi paints the same scene. They come from the graves intermingled from every place, believer mixed with disbeliever, not recognizing one another, none able to withdraw to his tribe. He then gathers the lexicographers. Al-Jawhari: al-lafīf is what has come together of people from diverse tribes. Al-Asma'i: lafīf is a plural with no singular, like the word for all. They pour out at the mustering, al-Qurtubi says, like scattered locusts, mixed and unknowing. The word itself refuses to let anyone in that crowd keep a separate label.",
            "bn": "কুরতুবী একই দৃশ্য আঁকেন। তারা কবর থেকে বেরিয়ে আসে সব জায়গা থেকে মিশ্রিত হয়ে, মুমিন মিশে যায় কাফিরের সঙ্গে, একে অন্যকে চেনে না, কেউ নিজের গোত্রের দিকে সরে যেতে পারে না। এরপর তিনি অভিধানবিদদের কথা টেনে আনেন। জাওহারী: আল-লাফীফ হলো নানা গোত্র থেকে জড়ো হওয়া মানুষের দল। আসমাঈ: লাফীফ এমন এক বহুবচন যার কোনো একবচন নেই, ‘সবাই’ শব্দটির মতো। হাশরের ময়দানে তারা ছড়িয়ে থাকা পঙ্গপালের মতো বেরিয়ে আসে, মিশ্রিত আর অচেনা। শব্দটি নিজেই সেই ভিড়ে কাউকে আলাদা পরিচয় ধরে রাখতে দেয় না।"
          },
          {
            "en": "Alongside this vivid sense runs a plainer one. Ibn Kathir reports from Ibn ʿAbbas, Mujahid, Qatadah and ad-Dahhak that lafīf simply means jamīʿan, all together, you and your enemies alike. Al-Baghawi holds both at once: al-lafīf is the great crowd when its kinds are mixed, believer and disbeliever, the righteous and the corrupt. At-Tabari notes that the two glosses come to a single meaning. Whether you hear all together or all jumbled, the picture is one crowd in which the old sortings of tribe and side no longer hold at all.",
            "bn": "এই জীবন্ত অর্থের পাশে চলে আরও সাদামাটা একটি অর্থ। ইবন কাসীর ইবন আব্বাস, মুজাহিদ, কাতাদা ও দাহহাক থেকে বর্ণনা করেন যে লাফীফ মানে সোজা জামিয়ান, সবাই একসঙ্গে, তোমরা আর তোমাদের শত্রুরা সমান। বাগাভী দুটোকেই একসঙ্গে ধরেন: আল-লাফীফ হলো সেই বিশাল ভিড় যখন তার নানা রকম মিশে যায়, মুমিন ও কাফির, নেককার ও পাপী। তাবারী বলেন, দুই ব্যাখ্যা এসে দাঁড়ায় একই অর্থে। ‘সবাই একসঙ্গে’ শুনুন বা ‘সব জট পাকানো’, ছবিটা এক ভিড়ের, যেখানে গোত্র আর পক্ষের পুরনো ভাগগুলো আর কোনোভাবেই টেকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report Is Attached",
          "bn": "যে হাদিস যুক্ত নেই"
        },
        "p": [
          {
            "en": "Honesty about the sources includes their silence. None of the tafsir consulted for this verse attaches a sound hadith to 17:104 itself. Ma'arif al-Qur'an does cite a sound narration close by, from Safwan ibn al-ʿAssal, reported in Abu Dawud, an-Nasa'i, at-Tirmidhi and Ibn Majah, in which the Prophet lists nine commandments as the nine signs. But that report explains 17:101, the verse of the nine signs given to Musa (AS), not the command to dwell in the land. It is sound, and it is not on this verse. Both facts belong in the record.",
            "bn": "উৎস নিয়ে সৎ থাকতে হলে তারা কোথায় চুপ, সেটাও বলতে হয়। এই আয়াতের জন্য আনা কোনো তাফসীরই ১৭:১০৪-এর সঙ্গে সহীহ হাদিস যুক্ত করে না। মাআরিফুল কুরআন কাছাকাছি একটি সহীহ বর্ণনা উদ্ধৃত করে, সাফওয়ান ইবন আসসাল থেকে, যা আছে আবু দাউদ, নাসাঈ, তিরমিযী ও ইবন মাজায়, যেখানে নবী ﷺ নয়টি আদেশকে ‘নয় নিদর্শন’ বলে গণনা করেন। কিন্তু সেই বর্ণনা ব্যাখ্যা করে ১৭:১০১, মূসা (আঃ)-কে দেওয়া নয় নিদর্শনের আয়াত, যমীনে বসবাসের আদেশ নয়। তা সহীহ, আর তা এই আয়াতের নয়। দুটো কথাই নথিতে থাকা দরকার।"
          },
          {
            "en": "For the theme that closes the verse, the gathering, one sound narration can stand beside it, though not as its commentary. Al-Bukhari records from Abu Hurayra that the Prophet said, Allah will give shade to seven on the Day when there is no shade but His. The report is sound, in Sahih al-Bukhari. It names not a land but the people the Day will shelter: the just ruler, the youth raised worshipping his Lord, the man whose heart is tied to the mosques, and the rest. It is set here as a light on the gathering, not a comment on 17:104.",
            "bn": "আয়াত যে বিষয়ে শেষ হয়, সেই হাশরের জন্য একটি সহীহ বর্ণনা এর পাশে দাঁড়াতে পারে, তবে এর ব্যাখ্যা হিসেবে নয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, আল্লাহ ৭ জনকে সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। বর্ণনাটি সহীহ, সহীহ বুখারীতে। এতে কোনো যমীনের নাম নেই, বরং নাম আছে সেই মানুষদের যাদের সেই দিন আশ্রয় দেবে: ন্যায়পরায়ণ শাসক, রবের ইবাদতে বেড়ে ওঠা যুবক, মসজিদের সঙ্গে বাঁধা হৃদয়ের মানুষ, আর বাকিরা। এটি এখানে হাশরের উপর এক আলো হিসেবে রাখা, ১৭:১০৪-এর ব্যাখ্যা হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Withholds",
          "bn": "আয়াত যা দেয় না"
        },
        "p": [
          {
            "en": "One thing must be said plainly. This verse speaks only of what it names: a people God settled in a land after He drowned the tyrant who had oppressed them, and a Day on which He will gather all of humankind. It is history, and it is eschatology. It is not a comment on any modern people, state or border, and it licenses nothing against any living person or community. To read a settling God granted long ago as a warrant over anyone's home today is to make the verse carry what it plainly does not say.",
            "bn": "একটি কথা সোজাসুজি বলা দরকার। এই আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: এক জাতি, যাদের আল্লাহ যমীনে থিতু করলেন সেই জালিমকে ডুবিয়ে দেওয়ার পর যে তাদের নিপীড়ন করেছিল, আর সেই দিন যেদিন তিনি গোটা মানবজাতিকে জড়ো করবেন। এটি ইতিহাস, আবার আখিরাতের বিবরণ। এটি আজকের কোনো জাতি, রাষ্ট্র বা সীমানা নিয়ে মন্তব্য নয়, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। বহুকাল আগে আল্লাহর দেওয়া এক থিতু হওয়াকে আজ কারও ঘরের উপর অধিকারের সনদ বানানো মানে আয়াতকে এমন কিছু বওয়ানো যা সে স্পষ্টতই বলে না।"
          },
          {
            "en": "The verse passes no political verdict on anyone now alive. Its subject is Banī Isrāʾīl as scripture names them, in a story with a fixed beginning and end, and its horizon is the gathering where tribe and side dissolve into a single lafīf. Whoever reaches for it to justify seizing or denying a land has stepped outside both the words and what the careful early commentators understood by them. The right response is the very thing the verse asks for: to remember that every ground is held on loan, and to make ready for the Day it is all left behind.",
            "bn": "এই আয়াত আজ জীবিত কারও ব্যাপারে কোনো রাজনৈতিক রায় দেয় না। এর বিষয় বানী ইসরাঈল, যেভাবে ওহি তাদের নাম দেয়, এক কাহিনিতে যার শুরু ও শেষ নির্দিষ্ট। আর এর দিগন্ত সেই হাশর, যেখানে গোত্র আর পক্ষ গলে মিশে যায় লাফীফে। কেউ যদি একে টেনে আনে কোনো যমীন দখল বা কাউকে তা থেকে বঞ্চিত করার সাফাই দিতে, সে শব্দের অর্থ আর সতর্ক প্রাচীন তাফসীরকারদের বোঝা, উভয়েরই বাইরে পা রেখেছে। আয়াতের সঠিক জবাব ঠিক সেটাই যা সে চায়: মনে রাখা যে প্রতিটি মাটি ধার হিসেবে ধরা, আর সেই দিনের জন্য তৈরি হওয়া যেদিন সব পেছনে পড়ে থাকবে।"
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
            "bn": "আয়াতের দুই অংশ পাশাপাশি রাখুন, একটা জীবনধারা চোখে পড়বে। আল্লাহ দাঁড়ানোর একটা জায়গা দেন, আর একই বাক্যে বলে দেন কোন দিন তা শেষ হবে। প্রতিটি থিতু জীবনের চেহারাই এমন: একটা সত্যিকারের ঘর, একটা বাঁধা মেয়াদ, আর এমন এক হাশর, যা সমান করে দেয় সেই সব ভেদাভেদ, যেগুলো আগলে রাখতে আমরা জীবন কাটিয়ে দিই। যে মুমিন এ কথা বোঝে, সে তার পাওয়া যমীনকে তুচ্ছ করে না। সে তা আলগা হাতে ধরে, আমানত হিসেবে। সে জানে, মেয়াদ আগেই লেখা হয়ে গেছে, আর যিনি দিয়েছেন, তিনি তাঁর ঠিক করা কোনো সময়ের হেরফের করেন না।"
          },
          {
            "en": "So the verse turns a question back on the reader. What am I building on ground I have only borrowed? The tribe I draw off to, the side I sort myself into, the address I defend as though it were mine forever, all of it dissolves in the lafīf, where no one is known by anything but his deeds. As-Sa'di caught the whole point: they are gathered so that every worker is repaid for his work. The wise response is to begin sending ahead now the one thing that will still be mine when the ground is not.",
            "bn": "তাই আয়াত পাঠকের দিকেই একটা প্রশ্ন ফিরিয়ে দেয়। শুধু ধার করা মাটির উপর আমি কী গড়ছি? যে গোত্রের দিকে আমি সরে যাই, যে পক্ষে আমি নিজেকে ফেলি, যে ঠিকানা আমি চিরকালের নিজের মনে করে আগলাই, সবই গলে যায় লাফীফে, সেই ভিড়ে যেখানে আমল ছাড়া কাউকে আর কিছু দিয়ে চেনা যায় না। সাদী গোটা কথাটা এক বাক্যে ধরেছেন: তাদের জড়ো করা হয় যাতে প্রতিটি আমলকারী তার আমলের প্রতিদান পায়। বুদ্ধিমানের কাজ হলো এখন থেকেই সেই একটা জিনিস আগে পাঠানো, যা সেই দিনও আমার থাকবে যেদিন মাটি আর আমার নয়।"
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
            "bn": "এটি সূরার শেষের আগের আয়াত, আর গোটা সূরা একে দুই দিক থেকে ঘিরে রেখেছে। ১৭:১ শুরু হয় 'সুবহান' দিয়ে: পবিত্র তিনি, যিনি তাঁর বান্দাকে রাতে ভ্রমণ করিয়েছেন। ১৭:১১১ শেষ হয় সেই আল্লাহর প্রশংসায়, যিনি কোনো সন্তান গ্রহণ করেননি, যাঁর রাজত্বে কোনো শরিক নেই; সঙ্গে আছে তাঁর বড়ত্ব পুরোপুরি ঘোষণা করার নির্দেশ। শুরুতে মহিমা, শেষেও মহিমা। এর মাঝখানে এই আয়াত শেখায়, কথাগুলো কীভাবে বলতে হয়।"
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
            "bn": "বল: আল্লাহ নামে ডাকো বা রহমান নামে ডাকো; আইয়্যান মা তাদউ, এ দুইয়ের যে নামেই ডাকো, সুন্দর সব নাম তাঁরই। আয়াতটি দুটি নাম পাশাপাশি রেখেছে, কিন্তু কোন নামে ডাকা হবে সেই বাছাইকে দুই আলাদা সত্তার ভেদ হয়ে উঠতে দেয়নি। দুই নামেই সাড়া দেন একই রব। নামগুলো একে অপরের প্রতিদ্বন্দ্বী তকমা নয়; একই সত্তার দিকে খোলা ভিন্ন ভিন্ন জানালা।"
          },
          {
            "en": "The name ar-Rahman was contested in Makkah. 25:60 records exactly that: when they are told to prostrate to ar-Rahman they answer, and what is ar-Rahman, and it only increases their aversion. So this verse settles the question rather than avoiding it. The wider principle is stated in 7:180, that to Allah belong the best names, so call on Him by them, and again in 20:8, where the same phrase is attached to the declaration that there is no deity except Him.",
            "bn": "রহমান নামটি নিয়ে মক্কায় বিতর্ক ছিল। ২৫:৬০ আয়াতে ঠিক সে কথাই আছে: তাদের যখন রহমানকে সিজদা করতে বলা হয়, তারা বলে, রহমান আবার কী? আর এতে তাদের বিমুখতা আরও বাড়ে। তাই এই আয়াত প্রশ্নটা এড়িয়ে যায় না, বরং মীমাংসা করে দেয়। মূল নীতিটা আছে ৭:১৮০ আয়াতে: সুন্দর সব নাম আল্লাহরই, তাই সেসব নামেই তাঁকে ডাকো। আবার আছে ২০:৮ আয়াতে, যেখানে একই কথা জুড়ে আছে এই ঘোষণার সঙ্গে যে তিনি ছাড়া কোনো ইলাহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion of the Second Half",
          "bn": "দ্বিতীয়ার্ধের শানে নুযূল"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Ibn Abbas (RA) that this was revealed while the Prophet ﷺ was in hiding in Makkah. When he prayed with his Companions he would raise his voice with the Quran, and when the polytheists heard it they would revile the Quran, and the One who revealed it, and the one who brought it. So Allah said: do not be loud in your prayer, lest they revile, and do not be silent with it, so that your Companions cannot hear you, and seek a way between that.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেছেন: নবী ﷺ তখন মক্কায় গোপনে থাকতেন, সে সময় এই আয়াত নাজিল হয়। সাহাবীদের নিয়ে নামাজ পড়ার সময় তিনি উচ্চস্বরে কুরআন পড়তেন। মুশরিকরা তা শুনলে কুরআনকে গালি দিত, যিনি তা নাজিল করেছেন তাঁকে গালি দিত, আর যিনি তা নিয়ে এসেছেন তাঁকেও। তাই আল্লাহ বললেন: তোমার নামাজে স্বর উঁচু করো না, তাহলে তারা গালি দেবে; আবার এত নিচুও করো না যে তোমার সাহাবীরা শুনতে না পান; বরং এ দুইয়ের মাঝামাঝি পথ খোঁজো।"
          },
          {
            "en": "Read with that occasion, the ruling is not a rule of etiquette invented in the abstract. It weighs two real losses against each other: recitation loud enough to provoke insult against the Book, and recitation so quiet that the people praying behind gain nothing from it. The middle is not a compromise between two goods. It is the point at which neither harm occurs.",
            "bn": "এই শানে নুযূল মাথায় রেখে পড়লে বোঝা যায়, বিধানটি শূন্যে বসে বানানো কোনো আদবের নিয়ম নয়। এখানে দুটি বাস্তব ক্ষতিকে পাশাপাশি মেপে দেখা হচ্ছে। এক, এত জোরে তিলাওয়াত যে তা কিতাবকে গালি দেওয়ার উসকানি হয়ে দাঁড়ায়। দুই, এত আস্তে তিলাওয়াত যে পেছনের মুসল্লিরা কিছুই পান না। মাঝামাঝি পথটা দুটি ভালো জিনিসের মধ্যে আপস নয়। এটা সেই জায়গা, যেখানে কোনো ক্ষতিই হয় না।"
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
            "bn": "শেষ কথাগুলো হলো ওয়াবতাগি বাইনা যালিকা সাবীলা: এ দুইয়ের মাঝে একটি পথ খোঁজো। ক্রিয়াটি লক্ষ করুন। ইবতিগা মানে সক্রিয়ভাবে খুঁজে নেওয়া, চুপচাপ কোথাও থিতু হয়ে যাওয়া নয়। কিছু না করে বসে থাকলেই মাঝামাঝি জায়গায় পৌঁছানো যায় না; সেটা খুঁজে বের করতে হয়। একই গঠন, বাইনা যালিকা, এসেছে ২৫:৬৭ আয়াতে, রহমানের বান্দাদের বর্ণনায়: খরচ করার সময় তারা অপচয়ও করে না, কৃপণতাও করে না, বরং দুইয়ের মাঝামাঝি পথে থাকে।"
          },
          {
            "en": "That parallel is instructive. In both places the middle is defined by naming the two ditches, not by giving a measurement. Neither verse says how loud or how much. The believer is trusted to look at the two failures, see which one his own temperament pulls him toward, and correct in the other direction. Moderation in the Quran is a judgement exercised, not a quantity supplied.",
            "bn": "এই মিল থেকে শেখার আছে। দুই জায়গাতেই মাঝামাঝি পথ চেনানো হয়েছে দুই পাশের দুটি খাদ দেখিয়ে, কোনো মাপ বলে দিয়ে নয়। কোনো আয়াতেই বলা নেই কতটা জোরে বা কতটা পরিমাণে। বিষয়টা মুমিনের বিবেচনায় ছেড়ে দেওয়া হয়েছে: দুটি ভুলের দিকে তাকিয়ে সে দেখবে, তার নিজের স্বভাব কোনটার দিকে টানে, তারপর উল্টো দিকে নিজেকে শুধরে নেবে। কুরআনে মধ্যপন্থা মানে বিবেচনা খাটানো, মেপে হাতে তুলে দেওয়া কোনো পরিমাণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Middle Protects",
          "bn": "মধ্যপন্থা কী আগলে রাখে"
        },
        "p": [
          {
            "en": "There is a second thing the middle guards, quieter than the first. A voice raised beyond what the listeners need has begun to perform, and a worshipper who is aware of being heard is no longer only addressing Allah. The verse does not accuse anyone of that, but by capping the volume at what is useful it removes the room in which it grows. Sincerity is protected here by a rule about sound.",
            "bn": "মধ্যপন্থা আরও একটি জিনিস পাহারা দেয়, যা প্রথমটির মতো চোখে পড়ে না। শ্রোতাদের যতটুকু দরকার, স্বর তার চেয়ে উঁচু হলে লোক দেখানো শুরু হয়ে যায়। আর যে মুসল্লি টের পায় লোকে তাকে শুনছে, সে তখন আর শুধু আল্লাহকে ডাকছে না। আয়াতটি কাউকে এ অভিযোগ করে না। কিন্তু যতটুকু কাজে লাগে, স্বরকে ততটুকুতে বেঁধে দিয়ে এই রোগ বেড়ে ওঠার জায়গাটাই সরিয়ে দেয়। আওয়াজের একটি নিয়মই এখানে ইখলাসকে পাহারা দিচ্ছে।"
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
            "bn": "আমলের জন্য এখান থেকে দুটি কথা আসে। প্রথমত, আল্লাহকে আরও বেশি নামে ডাকুন। আপনার প্রতিটি দোয়া যদি একইভাবে শুরু হয়, তাহলে বহু দরজা খোলা থাকতেও আপনি একটি দরজা দিয়েই আল্লাহর কাছে যাচ্ছেন। অথচ ৭:১৮০ আপনাকে সবগুলো দরজা দিয়েই ডাকছে। রহমানের কাছে রহমত চান, কারীমের কাছে রিযিক চান, নাম ধরে। দ্বিতীয়ত, সরব নামাজগুলোতে স্বর ঠিক করুন শেষ কাতার শুনতে পাচ্ছে কি না দেখে। নিজের কান নয়, সেটাই ঠিক করুক কতটা জোরে পড়বেন।"
          }
        ]
      }
    ]
  }
});
