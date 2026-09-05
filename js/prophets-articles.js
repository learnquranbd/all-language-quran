/**
 * Long-form articles for the Prophets module — one per prophet, keyed by the
 * `id` used in js/prophets-data.js.
 *
 * The module's own `summaryEn` is a caption: 58 words on average. These are the
 * readings behind it, 700-950 words in 5-7 sections, in English and Bengali.
 *
 * Loaded by js/article-view.js the first time a reader opens a prophet's detail
 * page — never with the tab itself, because most readers browse the list
 * without opening anyone and this file is large.
 *
 * Conventions, all enforced by `npm test`:
 *   - sections: [{ h: {en, bn}, p: [{en, bn}, ...] }]
 *   - verse references are written bare in the prose ("the command came in
 *     20:14"); js/ayah-autolink.js turns them into buttons that open the verse.
 *     Every one of them is bounds-checked against SURAH_DATA by the suite, in
 *     the Bengali text as well as the English.
 *   - no HTML and no markdown in any string.
 */

var PROPHET_ARTICLES = {
  sulayman: {
    sections: [
      {
        h: { en: "The Heir Who Was Taught", bn: "যে উত্তরাধিকারী শিক্ষা পেয়েছিলেন" },
        p: [
          { en: "The Quran opens this story not with a throne but with a sentence about learning. Allah gave knowledge to Dawud and Sulayman, and both said, “Praise be to Allah, who has favoured us over many of His believing servants” (27:15). Only then comes the line that frames the rest: Sulayman inherited from Dawud (27:16). The inheritance meant here is not silver. It is judgement, scripture, and the charge of guiding a nation.",
            bn: "কুরআন এই কাহিনি শুরু করে সিংহাসন দিয়ে নয়, জ্ঞান দিয়ে। আল্লাহ দাউদ ও সুলাইমানকে জ্ঞান দান করেন, আর দুজনেই বলেন, “সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের তাঁর বহু মুমিন বান্দার ওপর মর্যাদা দিয়েছেন” (27:15)। এরপরই আসে সেই বাক্য যা পরবর্তী সবকিছুর কাঠামো গড়ে দেয়: সুলাইমান দাউদের উত্তরাধিকারী হন (27:16)। এখানে উত্তরাধিকার মানে রুপা-সোনা নয়। এর অর্থ বিচারবোধ, কিতাব এবং এক জাতিকে পথ দেখানোর দায়িত্ব।" },
          { en: "That inheritance was tested before the wonders began. A dispute came about a flock that had strayed by night into a field, and Allah gave Sulayman the understanding of the case — yet the Quran is careful to add that to each of the two He had given judgement and knowledge (21:78-79). The placement is deliberate. The first gift is not the wind but understanding, and a better verdict from the younger man takes nothing away from the elder who ruled first.",
            bn: "সেই উত্তরাধিকারের পরীক্ষা হয় অলৌকিকতার আগেই। রাতে এক পালের ভেড়া ফসলের খেতে ঢুকে পড়ার বিবাদ আসে, আর আল্লাহ সুলাইমানকে সেই মামলার সঠিক বোধ দান করেন — তবু কুরআন যত্ন করে যোগ করে যে তাদের উভয়কেই তিনি বিচারবুদ্ধি ও জ্ঞান দিয়েছিলেন (21:78-79)। এই বিন্যাস উদ্দেশ্যপ্রণোদিত। প্রথম দান বাতাস নয়, বোধ; আর কনিষ্ঠজনের উত্তম রায় জ্যেষ্ঠজনের মর্যাদা এক বিন্দুও কমায় না।" },
        ],
      },
      {
        h: { en: "A Kingdom Asked For, Not Seized", bn: "চেয়ে নেওয়া রাজত্ব, ছিনিয়ে নেওয়া নয়" },
        p: [
          { en: "His famous prayer follows a moment of self-reproach, not appetite. Surah Sad records that he was absorbed by fine horses until the sun had set (38:31-33), and that a test was placed upon his very throne before he turned back to his Lord (38:34). Only after that does he say, “My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me” (38:35). The order of the verses is the commentary on the request.",
            bn: "তাঁর বিখ্যাত দোয়াটি আসে আত্মসমালোচনার পর, লোভের পর নয়। সূরা সাদ বলে, সূর্যাস্ত পর্যন্ত তিনি উৎকৃষ্ট ঘোড়ার প্রতি মগ্ন হয়ে পড়েন (38:31-33), আর তাঁর সিংহাসনেই এক পরীক্ষা রাখা হয়, তারপর তিনি প্রভুর দিকে ফিরে আসেন (38:34)। এরপরই তিনি বলেন, “হে আমার প্রভু, আমাকে ক্ষমা করুন এবং আমাকে এমন রাজত্ব দিন যা আমার পরে আর কারও হবে না” (38:35)। আয়াতগুলোর ক্রমই এই প্রার্থনার ব্যাখ্যা।" },
          { en: "Read that way, the prayer stops sounding like ambition. A kingdom that can belong to no one afterwards cannot be inherited, imitated, or claimed as a human achievement; it can only be a sign. Allah granted it, and the passage at once calls the whole arrangement a gift, with leave to give freely or withhold without reckoning (38:39). Authority without audit is itself a trial, and the same passage praises him as an excellent servant who constantly turned to his Lord (38:30).",
            bn: "এভাবে পড়লে দোয়াটিকে আর উচ্চাকাঙ্ক্ষা মনে হয় না। যে রাজত্ব পরে আর কারও হতে পারে না, তা উত্তরাধিকারে যায় না, নকলও করা যায় না, মানুষের কৃতিত্ব বলেও দাবি করা যায় না; তা কেবল নিদর্শনই হতে পারে। আল্লাহ তা দান করেন, আর আয়াত সঙ্গে সঙ্গে গোটা ব্যবস্থাটিকে বলে “আমার দান”, যা হিসাব ছাড়াই দেওয়া বা আটকে রাখার অনুমতিসহ (38:39)। জবাবদিহিহীন কর্তৃত্ব নিজেই এক পরীক্ষা, আর সেই একই অনুচ্ছেদে তাঁকে বলা হয় উত্তম বান্দা, যিনি বারবার প্রভুর দিকে প্রত্যাবর্তনশীল (38:30)।" },
        ],
      },
      {
        h: { en: "Wind, Jinn, and Molten Copper", bn: "বাতাস, জিন ও গলিত তামা" },
        p: [
          { en: "The wind was made subject to him, running by his command to the land Allah had blessed (21:81), and Surah Saba measures it plainly: a month's journey in the morning and a month's in the evening (34:12). In the same verse a spring of molten copper flows for him. That detail is not decoration; it is an economy. Transport, metal, and labour were placed in the hands of a man answerable for their use.",
            bn: "বাতাসকে তাঁর অধীন করা হয়, যা তাঁর আদেশে সেই বরকতময় ভূমির দিকে বইত (21:81), আর সূরা সাবা তা মেপে দেয়: সকালের পথ এক মাসের, সন্ধ্যার পথ এক মাসের (34:12)। একই আয়াতে তাঁর জন্য প্রবাহিত হয় গলিত তামার ঝর্ণা। এই বিবরণ কেবল অলংকার নয়; এটি একটি অর্থনীতি। পরিবহন, ধাতু ও শ্রম — সবই এমন একজনের হাতে দেওয়া হয় যাঁকে এগুলোর ব্যবহারের জবাব দিতে হবে।" },
          { en: "The jinn worked before him by his Lord's leave, building sanctuaries and images, great basins and firm cauldrons, while divers and builders among them were kept under restraint (34:12-13, 21:82). And the passage that lists all this ends not with a boast but with an order and a lament: work, family of Dawud, in gratitude — and few of My servants are grateful (34:13). Every favour in this story arrives with the duty of thanks fastened to it.",
            bn: "জিনেরা তাঁর প্রভুর অনুমতিতে তাঁর সামনে কাজ করত — উপাসনালয় ও প্রতিকৃতি, বিশাল গামলা ও সুদৃঢ় ডেগ বানাত, আর তাদের ডুবুরি ও নির্মাতাদের নিয়ন্ত্রণে রাখা হতো (34:12-13, 21:82)। যে অনুচ্ছেদে এসব তালিকাভুক্ত, তা শেষ হয় গর্ব দিয়ে নয়, এক আদেশ ও এক আক্ষেপ দিয়ে: হে দাউদের পরিবার, কৃতজ্ঞতার সাথে কাজ করো — আর আমার বান্দাদের অল্পই কৃতজ্ঞ (34:13)। এই কাহিনিতে প্রতিটি নিয়ামতের সাথে শুকরিয়ার দায়িত্ব বাঁধা।" },
        ],
      },
      {
        h: { en: "The Birds and the Ant", bn: "পাখি ও পিঁপড়া" },
        p: [
          { en: "Sulayman announced his gift publicly: “We have been taught the speech of birds, and we have been given of all things” (27:16). His forces of jinn, men and birds were marshalled in ordered ranks (27:17), and he inspected them himself. When the hoopoe was missing he noticed at once and demanded a clear reason for the absence (27:20-21). Command, in the Quranic portrait, is attention to the smallest member of the ranks.",
            bn: "সুলাইমান তাঁর দান প্রকাশ্যে ঘোষণা করেন: “আমাদের পাখির ভাষা শেখানো হয়েছে এবং সব কিছু থেকেই আমাদের দেওয়া হয়েছে” (27:16)। জিন, মানুষ ও পাখির বাহিনীকে সুশৃঙ্খল সারিতে সমবেত করা হয় (27:17), আর তিনি নিজেই তাদের পরিদর্শন করেন। হুদহুদ অনুপস্থিত থাকলে তিনি সঙ্গে সঙ্গে তা লক্ষ করেন এবং অনুপস্থিতির স্পষ্ট কারণ দাবি করেন (27:20-21)। কুরআনের চিত্রে নেতৃত্ব মানে সারির ক্ষুদ্রতম সদস্যের প্রতিও মনোযোগ।" },
          { en: "Then comes the scene the Quran preserved above every conquest. An ant called out to her colony to enter their dwellings lest Sulayman and his troops crush them without perceiving it (27:18). He smiled at her words and prayed: “My Lord, enable me to be grateful for Your favour, and to do righteousness that pleases You, and admit me by Your mercy among Your righteous servants” (27:19). The most powerful man alive overheard an insect and asked to be counted among the ordinary righteous.",
            bn: "এরপর আসে সেই দৃশ্য, যাকে কুরআন প্রতিটি বিজয়ের ওপরে স্থান দিয়েছে। এক পিঁপড়া তার দলকে ডেকে বলে, নিজেদের বাসস্থানে ঢুকে পড়ো, যেন সুলাইমান ও তাঁর বাহিনী অজান্তে তোমাদের পিষে না ফেলে (27:18)। তিনি তার কথায় মৃদু হেসে দোয়া করেন: “হে আমার প্রভু, আমাকে সামর্থ্য দিন যেন আপনার নিয়ামতের শুকরিয়া আদায় করি, এমন সৎকর্ম করি যা আপনি পছন্দ করেন, আর আপনার রহমতে আমাকে আপনার সৎকর্মশীল বান্দাদের অন্তর্ভুক্ত করুন” (27:19)। পৃথিবীর সবচেয়ে ক্ষমতাধর মানুষটি এক পতঙ্গের কথা শুনে সাধারণ সৎকর্মশীলদের কাতারে গণ্য হওয়ার প্রার্থনা করলেন।" },
        ],
      },
      {
        h: { en: "The Letter and the Throne", bn: "চিঠি ও সিংহাসন" },
        p: [
          { en: "The hoopoe returned with news of a people in Saba ruled by a queen, prostrating to the sun instead of Allah (27:22-24). Sulayman did not send an army; he sent a letter. She read it aloud to her council: it opens with the name of Allah, the Most Merciful, and says, “Do not be haughty with me, but come to me in submission” (27:29-31). She judged that kings ruin a city when they enter it, and tried a gift first (27:32-35).",
            bn: "হুদহুদ ফিরে এসে খবর দেয় সাবার এক জাতির, যাদের শাসক এক রানি, আর তারা আল্লাহর পরিবর্তে সূর্যকে সিজদা করে (27:22-24)। সুলাইমান সেনাবাহিনী পাঠাননি; পাঠিয়েছেন এক চিঠি। রানি তা তাঁর পরিষদের সামনে পড়ে শোনান: চিঠির শুরু পরম করুণাময় অসীম দয়ালু আল্লাহর নামে, আর তাতে লেখা, “আমার বিরুদ্ধে ঔদ্ধত্য করো না, বরং আত্মসমর্পণকারী হয়ে আমার কাছে এসো” (27:29-31)। রানি বিবেচনা করলেন, রাজারা কোনো জনপদে ঢুকলে তা বিপর্যস্ত করে দেয়, তাই প্রথমে উপহার পাঠালেন (27:32-35)।" },
          { en: "The gift was refused: what Allah had given him was better (27:36). Before she arrived, one who had knowledge of the Scripture brought her throne to him in less than the blink of an eye, and his response was inward: “This is from the favour of my Lord, to test me whether I am grateful or ungrateful” (27:40). At the palace she mistook the polished floor for water, then said the words the episode existed for: “I submit with Sulayman to Allah, Lord of the worlds” (27:44).",
            bn: "উপহার প্রত্যাখ্যাত হলো: আল্লাহ তাঁকে যা দিয়েছেন তা তাদের দেওয়া সম্পদের চেয়ে উত্তম (27:36)। রানি পৌঁছার আগেই কিতাবের জ্ঞান রাখেন এমন একজন চোখের পলক ফেলার আগেই তাঁর সিংহাসন হাজির করেন, আর তখনও সুলাইমানের প্রতিক্রিয়া অন্তর্মুখী: “এ আমার প্রভুর অনুগ্রহ, যেন তিনি পরীক্ষা করেন আমি কৃতজ্ঞ না অকৃতজ্ঞ” (27:40)। প্রাসাদে রানি মসৃণ মেঝেকে পানি ভেবে ভুল করেন, তারপর বলেন সেই কথা যার জন্যই গোটা ঘটনা: “হে আমার প্রভু, আমি নিজের প্রতি জুলুম করেছি, আর আমি সুলাইমানের সাথে বিশ্বজগতের প্রতিপালক আল্লাহর কাছে আত্মসমর্পণ করলাম” (27:44)।" },
        ],
      },
      {
        h: { en: "The Staff and the Creature of the Earth", bn: "লাঠি ও মাটির প্রাণী" },
        p: [
          { en: "His death is told in one verse — the quietest ending given to any king in the Quran. When Allah decreed his death, nothing indicated it to the jinn except a creature of the earth eating away his staff; when he fell, it became clear to them that had they known the unseen they would not have remained in humiliating labour (34:14). The man who commanded the wind was given away by a worm in a stick.",
            bn: "তাঁর মৃত্যুর বিবরণ এক আয়াতেই, আর কুরআনে কোনো রাজাকে দেওয়া এটিই সবচেয়ে নিঃশব্দ পরিসমাপ্তি। আল্লাহ যখন তাঁর মৃত্যুর ফয়সালা করলেন, জিনদের কাছে তা প্রকাশ করার কিছুই ছিল না — কেবল মাটির এক পোকা তাঁর লাঠি খেয়ে চলছিল; আর তিনি পড়ে যেতেই জিনদের কাছে স্পষ্ট হলো, তারা যদি গায়েব জানত তবে অপমানজনক শ্রমে পড়ে থাকত না (34:14)। যিনি বাতাসকে আদেশ করতেন, শেষে তাঁর কথা ফাঁস করে দিল লাঠির ভেতরের এক পোকা।" },
          { en: "The verse settles a claim, not merely a life. It denies the jinn any access to the unseen, and elsewhere the Quran clears Sulayman of the sorcery attributed to him by those who followed what the devils recited in his reign: Sulayman did not disbelieve (2:102). What finally remains of him is not the empire but a repeated description — an excellent servant, always turning to his Lord (38:30) — and a prayer any reader can make.",
            bn: "আয়াতটি কেবল একটি জীবনের নয়, একটি দাবিরও নিষ্পত্তি করে। এটি জিনদের গায়েবের জ্ঞান অস্বীকার করে; আর অন্যত্র কুরআন সুলাইমানকে সেই জাদুর অভিযোগ থেকেও মুক্ত করে, যা তাঁর রাজত্বকালে শয়তানরা আবৃত্তি করত এবং কিছু লোক অনুসরণ করত: সুলাইমান কুফরি করেননি (2:102)। শেষ পর্যন্ত কুরআন তাঁর যা রেখে যায় তা সাম্রাজ্য নয়, বরং এক পুনরাবৃত্ত পরিচয় — উত্তম বান্দা, সদা প্রভুর দিকে প্রত্যাবর্তনশীল (38:30) — এবং কৃতজ্ঞতার এক দোয়া, যা যেকোনো পাঠক নিজেও করতে পারেন।" },
        ],
      },
    ],
  },
  ilyas: {
    sections: [
      {
        h: { en: "A Prophet Named Twice", bn: "দুবার নাম নেওয়া এক নবী" },
        p: [
          { en: "Ilyas (AS) appears in the Quran in two places only. He is listed in Surah al-An'am among a chain of prophets guided by Allah, named alongside Zakariya, Yahya and Isa and described simply as one of the righteous (6:85). And he is given a short narrative passage in Surah as-Saffat (37:123-132). That is the whole of his Quranic footprint, and the honest way to read him is to build on exactly that, not on stories the Quran declined to tell.",
            bn: "কুরআনে ইলিয়াস (আঃ)-এর উল্লেখ কেবল দুই জায়গায়। সূরা আল-আনআমে আল্লাহর হিদায়াতপ্রাপ্ত নবীদের ধারাবাহিকতায় তাঁর নাম আসে — যাকারিয়া, ইয়াহইয়া ও ঈসার পাশে — আর তাঁকে সহজভাবে সৎকর্মশীলদের একজন বলা হয় (6:85)। আর সূরা আস-সাফফাতে তাঁকে দেওয়া হয় একটি সংক্ষিপ্ত বিবরণ (37:123-132)। কুরআনে তাঁর উপস্থিতি এটুকুই; সৎভাবে তাঁকে পড়ার উপায় হলো ঠিক এর ওপরই ভিত্তি করা, কুরআন যে কাহিনিগুলো বলেনি সেগুলোর ওপর নয়।" },
          { en: "The brevity is itself instructive. Surah as-Saffat is a gallery of messengers told at speed — Nuh, Ibrahim, Musa and Harun, Ilyas, Lut, Yunus — each reduced to the essential shape of a mission and its ending. Ilyas is not a footnote in that gallery; he is one of its panels, given the same closing formula as the greatest of them. The Quran is not short of material about him. It is showing that the pattern matters more than the detail.",
            bn: "এই সংক্ষিপ্ততাই এক শিক্ষা। সূরা আস-সাফফাত যেন দ্রুতগতির এক রাসূল-চিত্রশালা — নূহ, ইবরাহীম, মূসা ও হারুন, ইলিয়াস, লূত, ইউনুস — প্রত্যেককে দেওয়া হয়েছে দাওয়াত ও পরিণতির মূল আকৃতিটুকু। ইলিয়াস সেই চিত্রশালার পাদটীকা নন; তিনি এর একটি পূর্ণ ফলক, আর তাঁকে দেওয়া হয়েছে সেই একই সমাপনী বাক্য যা শ্রেষ্ঠদের দেওয়া হয়েছে। কুরআনে তাঁর সম্পর্কে বলার উপকরণের অভাব নেই; বরং কুরআন দেখাচ্ছে যে বিস্তারিত বিবরণের চেয়ে ধরনটাই বেশি গুরুত্বপূর্ণ।" },
        ],
      },
      {
        h: { en: "The Question That Undoes an Idol", bn: "যে প্রশ্ন মূর্তিকে ভেঙে দেয়" },
        p: [
          { en: "His mission is compressed into a single question. He said to his people, “Will you not fear Allah? Do you call upon Ba'l and leave the best of creators — Allah, your Lord and the Lord of your forefathers?” (37:124-126). No miracle is narrated, no confrontation staged. The whole case against their idol is made by putting the two objects of worship side by side and letting the comparison do the work.",
            bn: "তাঁর গোটা দাওয়াত সংকুচিত হয়ে আছে একটি প্রশ্নে। তিনি তাঁর সম্প্রদায়কে বললেন, “তোমরা কি আল্লাহকে ভয় করবে না? তোমরা কি বালকে ডাকো আর ছেড়ে দাও সর্বশ্রেষ্ঠ স্রষ্টাকে — আল্লাহকে, যিনি তোমাদের ও তোমাদের পূর্বপুরুষদের প্রতিপালক?” (37:124-126)। এখানে কোনো মুজিযার বর্ণনা নেই, কোনো সাজানো মুখোমুখি সংঘাত নেই। মূর্তির বিরুদ্ধে গোটা যুক্তিটাই দাঁড় করানো হয়েছে দুই উপাস্যকে পাশাপাশি রেখে, আর তুলনাটাকেই কাজ করতে দিয়ে।" },
          { en: "The phrase “best of creators” is the pivot. Ba'l was a name and a shrine; Allah is the one who made both the worshipper and the material the idol was carved from. And the second half of the question — “your Lord and the Lord of your forefathers” — takes away the usual defence of inherited religion. Ancestry cannot be a reason to keep Ba'l, because the ancestors themselves were creations and dependents of the same Lord.",
            bn: "“সর্বশ্রেষ্ঠ স্রষ্টা” কথাটিই এখানে কেন্দ্রবিন্দু। বাল ছিল একটি নাম ও একটি মন্দির; আর আল্লাহ তিনিই, যিনি উপাসককেও বানিয়েছেন এবং যে উপকরণে মূর্তি খোদাই হয়েছে তাকেও। প্রশ্নের দ্বিতীয় অংশ — “তোমাদের ও তোমাদের পূর্বপুরুষদের প্রতিপালক” — উত্তরাধিকারসূত্রে পাওয়া ধর্মের চিরাচরিত অজুহাতটিও কেড়ে নেয়। বংশপরম্পরা বালকে ধরে রাখার কারণ হতে পারে না, কারণ পূর্বপুরুষেরাও ছিলেন সেই একই প্রভুর সৃষ্টি ও মুখাপেক্ষী।" },
        ],
      },
      {
        h: { en: "When a People Say No", bn: "যখন এক জাতি না বলে" },
        p: [
          { en: "The response is stated without drama: they denied him, and so they will surely be brought forth for judgement — except the chosen servants of Allah (37:127-128). Two things are settled in that one sentence. The rejection was real and it was not total; a minority stood apart. The Quran does not tell us how many, and it does not have to, because the point is that a community's verdict is not a verdict on the truth.",
            bn: "প্রতিক্রিয়া বলা হয়েছে কোনো নাটকীয়তা ছাড়াই: তারা তাঁকে মিথ্যা প্রতিপন্ন করে, তাই তাদের অবশ্যই হাজির করা হবে — কেবল আল্লাহর মনোনীত বান্দারা ছাড়া (37:127-128)। এই এক বাক্যেই দুটি বিষয় নিষ্পন্ন। প্রত্যাখ্যান বাস্তব ছিল, আবার তা সর্বব্যাপীও ছিল না; একটি সংখ্যালঘু অংশ আলাদা ছিল। কতজন, কুরআন তা বলে না, বলার প্রয়োজনও নেই — কারণ মূল কথা হলো, জনতার রায় সত্যের ওপর রায় নয়।" },
          { en: "This is where a reader should resist the pull of extra-Quranic biography. Popular retellings supply him with famines, contests and journeys drawn from later sources of uncertain standing. The Quran gives a call, a refusal, a saved remnant, and a blessing. A teacher can defend every word of that. Anything added to it is borrowed weight, and borrowed weight is exactly what a prophet's story does not need.",
            bn: "এখানেই পাঠকের উচিত কুরআন-বহির্ভূত জীবনীর টান এড়িয়ে চলা। প্রচলিত বহু বর্ণনায় তাঁর নামে দুর্ভিক্ষ, প্রতিযোগিতা ও ভ্রমণের কাহিনি যুক্ত হয়েছে, যেগুলোর উৎস সংশয়পূর্ণ। কুরআন দেয় একটি আহ্বান, একটি অস্বীকার, রক্ষা পাওয়া একটি ক্ষুদ্র দল এবং একটি বরকত। একজন শিক্ষক এর প্রতিটি শব্দের পক্ষে দাঁড়াতে পারেন। এর সাথে যা যোগ করা হয় তা ধার করা ভার — আর নবীর কাহিনির সবচেয়ে কম প্রয়োজন এই ধার করা ভারেরই।" },
        ],
      },
      {
        h: { en: "The Name That Was Kept", bn: "যে নাম রক্ষা পেল" },
        p: [
          { en: "Then comes his reward, and it is not land or victory. Allah says He left for him a good remembrance among later generations: peace be upon Il-Yasin (37:129-130). The identical formula is used for Nuh (37:79), for Ibrahim (37:109), and for Musa and Harun (37:120). Whatever his people decided about him, Allah placed his name in the same sentence pattern as the greatest messengers, and kept it there permanently.",
            bn: "এরপর আসে তাঁর প্রতিদান, আর তা ভূমি বা বিজয় নয়। আল্লাহ বলেন, তিনি পরবর্তীদের মধ্যে তাঁর সুনাম রেখে দিয়েছেন: ইল-ইয়াসিনের প্রতি শান্তি বর্ষিত হোক (37:129-130)। ঠিক এই একই বাক্যরূপ ব্যবহৃত হয়েছে নূহের জন্য (37:79), ইবরাহীমের জন্য (37:109), এবং মূসা ও হারুনের জন্য (37:120)। তাঁর সম্প্রদায় তাঁকে নিয়ে যা-ই সিদ্ধান্ত নিক, আল্লাহ তাঁর নামকে শ্রেষ্ঠ রাসূলদের সাথে একই বাক্যকাঠামোয় বসিয়ে দিয়েছেন — এবং স্থায়ীভাবে সেখানে রেখে দিয়েছেন।" },
          { en: "The passage closes by explaining why: thus do We reward the doers of good; he was among Our believing servants (37:131-132). Notice what is not measured. Not converts, not years, not the fate of the shrine of Ba'l. The reward is attached to ihsan — doing the work well — and to iman, and both of those are within reach of a person whose efforts nobody records.",
            bn: "অনুচ্ছেদটি শেষ হয় কারণ ব্যাখ্যা করে: এভাবেই আমি সৎকর্মশীলদের প্রতিদান দিই; নিশ্চয়ই তিনি ছিলেন আমার মুমিন বান্দাদের একজন (37:131-132)। লক্ষ করুন, এখানে কী মাপা হয়নি। অনুসারীর সংখ্যা নয়, বছরের হিসাব নয়, বালের মন্দিরের পরিণতিও নয়। প্রতিদান বাঁধা হয়েছে ইহসানের সাথে — কাজটি সুন্দরভাবে করার সাথে — এবং ঈমানের সাথে; আর এই দুটিই তার নাগালের মধ্যে, যার পরিশ্রমের হিসাব কেউ রাখে না।" },
        ],
      },
      {
        h: { en: "What the Silence Teaches", bn: "নীরবতা যা শেখায়" },
        p: [
          { en: "There is a discipline in reading a prophet the Quran describes in ten verses. It trains the reader to want what Allah chose to preserve rather than what curiosity would prefer. The mission of Ilyas is fully legible without a single date: a society had made a name into a god, a man told them plainly that the Creator is not a rival to His creation, and the argument was refused by most and accepted by a few.",
            bn: "মাত্র দশ আয়াতে বর্ণিত একজন নবীকে পড়ার মধ্যে এক ধরনের সংযম শেখা যায়। এটি পাঠককে অভ্যস্ত করে সেটিই চাইতে, যা আল্লাহ সংরক্ষণ করতে চেয়েছেন — কৌতূহল যা চায় তা নয়। একটি তারিখ ছাড়াই ইলিয়াসের দাওয়াত পুরোপুরি বোধগম্য: এক সমাজ একটি নামকে ইলাহ বানিয়েছিল, একজন মানুষ তাদের স্পষ্ট করে বললেন যে স্রষ্টা তাঁর সৃষ্টির প্রতিদ্বন্দ্বী নন, আর সেই যুক্তি অধিকাংশ প্রত্যাখ্যান করল, অল্প কয়েকজন গ্রহণ করল।" },
          { en: "The lesson carries directly. Idols now are rarely carved, but anything given the authority to define good and evil in a person's life is functionally a Ba'l. Ilyas asked one question about the ranking of loyalties, and the Quran preserved him for asking it. Those who call others to their Creator are told, in his story, exactly where to leave the outcome — and where their names are safest.",
            bn: "এই শিক্ষা সরাসরি প্রযোজ্য। আজকের মূর্তি খুব কমই খোদাই করা হয়, কিন্তু কারও জীবনে ভালো-মন্দ নির্ধারণের কর্তৃত্ব যাকেই দেওয়া হয়, কার্যত সে-ই এক বাল। ইলিয়াস আনুগত্যের ক্রম নিয়ে একটিমাত্র প্রশ্ন করেছিলেন, আর সেই প্রশ্নের জন্যই কুরআন তাঁকে সংরক্ষণ করেছে। যাঁরা মানুষকে তাদের স্রষ্টার দিকে ডাকেন, তাঁর কাহিনি তাঁদের শিখিয়ে দেয় ফলাফল কোথায় ছেড়ে দিতে হয় — আর নিজের নাম কোথায় সবচেয়ে নিরাপদ।" },
        ],
      },
    ],
  },
  alyasa: {
    sections: [
      {
        h: { en: "Two Verses, One Standing", bn: "দুই আয়াত, এক মর্যাদা" },
        p: [
          { en: "Al-Yasa' (AS) is named twice in the Quran and no more. He appears in Surah al-An'am (6:86) and in Surah Sad (38:48). No narrative is attached to either mention: no people described, no confrontation, no miracle, no ending. What he receives instead is placement — and in the Quran, placement is a statement. He is set among names every reader already reveres, and left there without explanation.",
            bn: "কুরআনে আল-ইয়াসা (আঃ)-এর নাম এসেছে মাত্র দুবার, এর বেশি নয়। তিনি আছেন সূরা আল-আনআমে (6:86) এবং সূরা সাদে (38:48)। কোনো উল্লেখের সাথেই কোনো কাহিনি যুক্ত নেই: কোনো সম্প্রদায়ের বর্ণনা নেই, কোনো সংঘাত নেই, কোনো মুজিযা নেই, কোনো পরিণতি নেই। এর বদলে তিনি পান অবস্থান — আর কুরআনে অবস্থান নিজেই একটি ঘোষণা। তাঁকে বসানো হয়েছে এমন নামগুলোর মধ্যে যাদের প্রতিটি পাঠক ইতিমধ্যেই শ্রদ্ধা করেন, এবং কোনো ব্যাখ্যা ছাড়াই সেখানে রেখে দেওয়া হয়েছে।" },
          { en: "This is unusual enough to be worth pausing over. Most prophets in the Quran come with at least a scene — a flood, a fire, a staff, a city. Al-Yasa' comes with none. Any article about him that manufactures scenes has stopped describing him and started inventing him. The material the Quran actually provides is the company he keeps and the words used to rank him, and that material turns out to be substantial.",
            bn: "এটি যথেষ্ট ব্যতিক্রম, তাই থেমে ভাবার মতো। কুরআনে অধিকাংশ নবীর সাথে অন্তত একটি দৃশ্য থাকে — এক প্লাবন, এক আগুন, এক লাঠি, এক জনপদ। আল-ইয়াসার সাথে কিছুই নেই। তাঁকে নিয়ে যে লেখা দৃশ্য বানিয়ে নেয়, সে আর তাঁকে বর্ণনা করে না, বরং তাঁকে উদ্ভাবন করতে শুরু করে। কুরআন প্রকৃতপক্ষে যা দেয় তা হলো তাঁর সঙ্গীদের তালিকা আর তাঁকে মর্যাদা দেওয়ার শব্দগুলো — আর সেই উপকরণই কম নয়।" },
        ],
      },
      {
        h: { en: "The Company He Is Named In", bn: "যাদের সাথে তাঁর নাম" },
        p: [
          { en: "Surah al-An'am gives a long roll of prophets — Ibrahim and his descendants, Ishaq, Ya'qub, Nuh, Dawud, Sulayman, Ayyub, Yusuf, Musa, Harun, Zakariya, Yahya, Isa, Ilyas — and then adds Isma'il, Al-Yasa', Yunus and Lut, saying of them all that each was favoured above the worlds (6:83-86). The list is not casual; it is the argument of the passage. Guidance is one line, and Al-Yasa' is inside it.",
            bn: "সূরা আল-আনআম নবীদের এক দীর্ঘ তালিকা দেয় — ইবরাহীম ও তাঁর বংশধর, ইসহাক, ইয়াকুব, নূহ, দাউদ, সুলাইমান, আইয়ুব, ইউসুফ, মূসা, হারুন, যাকারিয়া, ইয়াহইয়া, ঈসা, ইলিয়াস — এরপর যোগ করে ইসমাঈল, আল-ইয়াসা, ইউনুস ও লূতের নাম, এবং তাদের সবার সম্পর্কে বলে যে প্রত্যেককেই সৃষ্টিকুলের ওপর মর্যাদা দেওয়া হয়েছে (6:83-86)। এই তালিকা অনিচ্ছাকৃত নয়; এটিই অনুচ্ছেদটির যুক্তি। হিদায়াত এক অভিন্ন ধারা, আর আল-ইয়াসা তার ভেতরেই।" },
          { en: "The passage then draws its own conclusion: that is the guidance of Allah, by which He guides whom He wills of His servants — and had they associated others with Him, all their deeds would have been worthless (6:88). Al-Yasa' is cited as evidence in an argument about tawhid. He is not an ornament on the list; he is one of the witnesses the Quran calls to prove that the message has never changed.",
            bn: "এরপর অনুচ্ছেদটি নিজেই সিদ্ধান্ত টানে: এটিই আল্লাহর হিদায়াত, যা দিয়ে তিনি তাঁর বান্দাদের মধ্যে যাকে ইচ্ছা পথ দেখান — আর তারা যদি শিরক করত, তবে তাদের সব আমল বৃথা যেত (6:88)। তাওহিদের এই যুক্তিতে আল-ইয়াসাকে হাজির করা হয় প্রমাণ হিসেবে। তিনি তালিকার অলংকার নন; তিনি সেই সাক্ষীদের একজন, যাদের কুরআন ডেকে আনে এটি প্রমাণ করতে যে বার্তা কখনো বদলায়নি।" },
        ],
      },
      {
        h: { en: "Among the Good", bn: "উত্তমদের অন্তর্ভুক্ত" },
        p: [
          { en: "The second mention is warmer still. Surah Sad has just recounted Dawud, Sulayman and Ayyub (38:17-44), and then Ibrahim, Ishaq and Ya'qub, calling these three possessed of strength and vision, chosen and outstanding (38:45-47). Then: “And remember Isma'il, Al-Yasa' and Dhul-Kifl — and all are among the good” (38:48). The word is al-akhyar, the outstanding ones, and it is applied to him by Allah directly, with no qualification and no biography required to earn it.",
            bn: "দ্বিতীয় উল্লেখটি আরও উষ্ণ। সূরা সাদ সবেমাত্র দাউদ, সুলাইমান ও আইয়ুবের কথা বলেছে (38:17-44), এরপর ইবরাহীম, ইসহাক ও ইয়াকুবের কথা — এই তিনজনকে বলেছে শক্তি ও অন্তর্দৃষ্টির অধিকারী, মনোনীত ও শ্রেষ্ঠ (38:45-47)। এরপর: “আর স্মরণ করো ইসমাঈল, আল-ইয়াসা ও যুলকিফলকে — তারা সকলেই উত্তমদের অন্তর্ভুক্ত” (38:48)। শব্দটি আল-আখইয়ার, অর্থাৎ শ্রেষ্ঠজনেরা, আর তা তাঁর ওপর প্রয়োগ করেছেন স্বয়ং আল্লাহ — কোনো শর্ত ছাড়াই, তা অর্জনের জন্য কোনো জীবনী দরকার হয়নি।" },
          { en: "The verses immediately following make the setting explicit: this is a reminder, and for the God-conscious there is an excellent place of return (38:49-50). Surah Sad is not writing history in this passage. It is holding up examples for people who must persevere without applause and without a record of their efforts, and Al-Yasa' is the sharpest of those examples precisely because nothing else about him was preserved. The praise stands on its own, resting on no achievement the reader can inspect.",
            bn: "ঠিক পরের আয়াতগুলো প্রেক্ষাপট স্পষ্ট করে দেয়: এটি এক উপদেশ, আর মুত্তাকিদের জন্য রয়েছে উত্তম প্রত্যাবর্তনস্থল (38:49-50)। সূরা সাদ এই অনুচ্ছেদে ইতিহাস লিখছে না। এটি এমন মানুষদের সামনে দৃষ্টান্ত তুলে ধরছে যাদের হাততালি ছাড়া এবং পরিশ্রমের কোনো নথি ছাড়াই অবিচল থাকতে হয় — আর আল-ইয়াসা সেই দৃষ্টান্তগুলোর মধ্যে সবচেয়ে ধারালো, ঠিক এই কারণেই যে তাঁর সম্পর্কে আর কিছুই সংরক্ষিত হয়নি। প্রশংসাটি নিজের পায়েই দাঁড়িয়ে, এমন কোনো অর্জনের ওপর নয় যা পাঠক যাচাই করতে পারেন।" },
        ],
      },
      {
        h: { en: "After Ilyas, By Order", bn: "ইলিয়াসের পর, ক্রম অনুসারে" },
        p: [
          { en: "It is commonly said that Al-Yasa' continued the work of Ilyas among the Children of Israel, and the Quranic order supports the association: Ilyas is named in 6:85 and Al-Yasa' in the verse that follows. What the Quran does not do is state the relationship, describe the handover, or name the generation. A careful teacher can say the two are placed together and that tradition links them, and should stop there.",
            bn: "সাধারণভাবে বলা হয় যে আল-ইয়াসা বনী ইসরাঈলের মধ্যে ইলিয়াসের কাজ অব্যাহত রেখেছিলেন, আর কুরআনের ক্রমও এই সংযোগকে সমর্থন করে: ইলিয়াসের নাম 6:85 আয়াতে, আর আল-ইয়াসার নাম তার পরের আয়াতেই। তবে কুরআন এই সম্পর্কটি ঘোষণা করে না, দায়িত্ব হস্তান্তরের বর্ণনা দেয় না, প্রজন্মের নামও বলে না। একজন সতর্ক শিক্ষক বলতে পারেন যে দুজনকে পাশাপাশি রাখা হয়েছে এবং ঐতিহ্য তাঁদের যুক্ত করে — এবং সেখানেই থামা উচিত।" },
          { en: "The restraint is not a gap in the record; it is a principle stated in the Quran itself. Allah tells the Prophet ﷺ that He has related the accounts of some messengers to him and not related others (4:164), and repeats it: among them are those We have told you of, and among them are those We have not (40:78). Silence about a prophet is a decision, and it is not an invitation to fill the space.",
            bn: "এই সংযম বর্ণনার ঘাটতি নয়; এটি কুরআনেরই ঘোষিত এক নীতি। আল্লাহ নবী ﷺ-কে জানান যে কিছু রাসূলের বৃত্তান্ত তিনি তাঁকে বলেছেন, আর কিছুর বলেননি (4:164), এবং তা পুনরায় বলেন: তাদের কারও কথা আমি তোমাকে জানিয়েছি, আর কারও কথা জানাইনি (40:78)। কোনো নবী সম্পর্কে নীরবতা একটি সিদ্ধান্ত — শূন্যস্থান পূরণের আমন্ত্রণ নয়।" },
        ],
      },
      {
        h: { en: "Why the Brief Mention Matters", bn: "সংক্ষিপ্ত উল্লেখ কেন গুরুত্বপূর্ণ" },
        p: [
          { en: "Most believing lives look far more like Al-Yasa's entry than like the story of Musa. There is no parted sea, no famous confrontation before a tyrant, no line that anyone will quote a thousand years later. There is faithfulness carried on quietly without an audience, and a name known to Allah. The Quran's willingness to honour a prophet in two short clauses tells every unremembered servant exactly how carefully their own record is being kept.",
            bn: "অধিকাংশ ঈমানদারের জীবন মূসার কাহিনির চেয়ে অনেক বেশি মিলে যায় আল-ইয়াসার সংক্ষিপ্ত উল্লেখের সাথে। সেখানে কোনো দ্বিখণ্ডিত সমুদ্র নেই, কোনো স্বৈরাচারীর সামনে বিখ্যাত মুখোমুখি নেই, হাজার বছর পরেও উদ্ধৃত হওয়ার মতো কোনো বাক্য নেই। আছে দর্শক ছাড়াই নীরবে বয়ে চলা বিশ্বস্ততা, আর আল্লাহর কাছে পরিচিত একটি নাম। মাত্র দুটি সংক্ষিপ্ত বাক্যাংশে একজন নবীকে সম্মান দেওয়ার মধ্য দিয়ে কুরআন প্রতিটি অস্মরণীয় বান্দাকে জানিয়ে দেয়, তার নিজের হিসাব কত যত্নে রাখা হচ্ছে।" },
          { en: "It also protects the reader from a subtle error: measuring prophethood by drama. The mission of every messenger named in 6:83-88 was identical — worship Allah alone — and the differences between their stories are differences in what Allah chose to show, not in what they achieved. Al-Yasa' is favoured above the worlds and counted among the good on the same authority that describes the parting of the sea.",
            bn: "এটি পাঠককে একটি সূক্ষ্ম ভুল থেকেও রক্ষা করে: নাটকীয়তা দিয়ে নবুয়তকে মাপা। 6:83-88 আয়াতে উল্লিখিত প্রতিটি রাসূলের দাওয়াত অভিন্ন ছিল — কেবল আল্লাহর ইবাদত করো — আর তাঁদের কাহিনির পার্থক্য আসলে আল্লাহ কী দেখাতে চেয়েছেন তার পার্থক্য, তাঁদের অর্জনের পার্থক্য নয়। যে কর্তৃত্ববলে সমুদ্র বিভক্ত হওয়ার বর্ণনা এসেছে, সেই একই কর্তৃত্ববলে আল-ইয়াসা সৃষ্টিকুলের ওপর মর্যাদাপ্রাপ্ত ও উত্তমদের অন্তর্ভুক্ত।" },
        ],
      },
    ],
  },
  yunus: {
    sections: [
      {
        h: { en: "Sent to a Great City", bn: "এক মহানগরে প্রেরিত" },
        p: [
          { en: "Yunus (AS) is named among the messengers to whom Allah gave revelation (4:163) and among those favoured above the worlds (6:86). Surah as-Saffat opens his account with a flat statement of fact — Yunus was one of the messengers (37:139) — and later describes the audience he was sent to as a hundred thousand or more (37:147). He was not preaching in a village. He was addressing a city, and cities are slow to move.",
            bn: "ইউনুস (আঃ)-এর নাম রয়েছে সেই রাসূলদের মধ্যে যাঁদের আল্লাহ ওহি দিয়েছেন (4:163), এবং সৃষ্টিকুলের ওপর মর্যাদাপ্রাপ্তদের মধ্যেও (6:86)। সূরা আস-সাফফাত তাঁর বৃত্তান্ত শুরু করে এক সরল ঘোষণায় — ইউনুস ছিলেন রাসূলদের একজন (37:139) — আর পরে বলে, যাদের কাছে তাঁকে পাঠানো হয়েছিল তারা ছিল এক লক্ষ বা তারও বেশি (37:147)। তিনি কোনো গ্রামে দাওয়াত দিচ্ছিলেন না। তিনি সম্বোধন করছিলেন একটি নগরকে — আর নগর নড়ে ধীরে।" },
          { en: "The Quran does not narrate his years of preaching there. It moves straight to the moment it wants examined: what a sincere man does when a long call produces no visible change. Everything memorable in this story — the ship, the fish, the darkness, the deliverance — grows out of that one decision, and the story is told so that the decision is never romanticised.",
            bn: "কুরআন সেখানে তাঁর দীর্ঘ দাওয়াতের বছরগুলোর বিবরণ দেয় না। এটি সরাসরি চলে যায় সেই মুহূর্তে, যা সে পরীক্ষা করাতে চায়: দীর্ঘ আহ্বানেও যখন দৃশ্যমান কোনো পরিবর্তন আসে না, তখন একজন আন্তরিক মানুষ কী করেন। এই কাহিনির স্মরণীয় সবকিছু — জাহাজ, মাছ, অন্ধকার, উদ্ধার — জন্ম নেয় সেই একটি সিদ্ধান্ত থেকে; আর কাহিনিটি এমনভাবে বলা হয়েছে যেন সিদ্ধান্তটিকে কখনো মহিমান্বিত করা না হয়।" },
        ],
      },
      {
        h: { en: "Leaving in Anger", bn: "ক্ষোভে চলে যাওয়া" },
        p: [
          { en: "Surah al-Anbiya says it without softening: and the man of the fish, when he went off in anger and thought that We would not constrain him (21:87). He left his post. Surah as-Saffat continues the sequence — he fled to a laden ship, lots were cast, and he was among the losers (37:140-141). A prophet's frustration was real, and the Quran neither denies it nor excuses it.",
            bn: "সূরা আল-আম্বিয়া তা বলে কোনো রাখঢাক ছাড়াই: আর মাছওয়ালা, যখন তিনি ক্ষুব্ধ হয়ে চলে গেলেন এবং ভাবলেন যে আমি তাঁর ওপর সংকীর্ণতা আরোপ করব না (21:87)। তিনি নিজের দায়িত্বের জায়গা ছেড়ে গেলেন। সূরা আস-সাফফাত ধারাবাহিকতা টানে — তিনি বোঝাই এক জাহাজের দিকে পালিয়ে গেলেন, লটারি হলো, আর তিনি পরাভূতদের অন্তর্ভুক্ত হলেন (37:140-141)। একজন নবীর ক্ষোভ বাস্তব ছিল, আর কুরআন তা অস্বীকারও করে না, অজুহাতও দেয় না।" },
          { en: "The word translated “thought We would not constrain him” is the hinge of the whole account. It does not describe disbelief; it describes a servant acting as though the matter had passed out of Allah's ordering. What follows is not punishment for preaching badly. It is a correction applied to a man Allah intended to keep, delivered in the one place where nothing could distract him from it.",
            bn: "“ভাবলেন যে আমি তাঁর ওপর সংকীর্ণতা আরোপ করব না” — এই বাক্যাংশই গোটা বৃত্তান্তের কব্জা। এটি অবিশ্বাসের বর্ণনা নয়; এটি এমন এক বান্দার বর্ণনা যিনি এমনভাবে কাজ করলেন যেন বিষয়টি আর আল্লাহর ব্যবস্থাপনার ভেতরে নেই। এরপর যা ঘটে তা খারাপ দাওয়াতের শাস্তি নয়। এটি এমন একজনের সংশোধন, যাঁকে আল্লাহ ধরে রাখতে চেয়েছিলেন — আর তা দেওয়া হলো এমন এক জায়গায় যেখানে কোনো কিছুই তাঁর মনোযোগ সরাতে পারত না।" },
        ],
      },
      {
        h: { en: "The Du'a of the Darkness", bn: "অন্ধকারের দোয়া" },
        p: [
          { en: "The great fish swallowed him while he was blameworthy (37:142). Then, in the darkness, he called out: “There is no god except You; glory be to You; indeed I have been of the wrongdoers” (21:87). Three moves in nine words — declare Allah's oneness, clear Him of any fault, take the blame yourself — and not one word asking for release. He did not negotiate. He corrected his own position.",
            bn: "মাছ তাঁকে গিলে ফেলল, আর তিনি ছিলেন তিরস্কারযোগ্য অবস্থায় (37:142)। এরপর অন্ধকারে তিনি ডাকলেন: “তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র; নিশ্চয়ই আমি সীমালঙ্ঘনকারীদের অন্তর্ভুক্ত” (21:87)। নয়টি শব্দে তিনটি পদক্ষেপ — আল্লাহর একত্ব ঘোষণা, তাঁকে সব ত্রুটি থেকে পবিত্র ঘোষণা, আর দোষ নিজের কাঁধে নেওয়া — অথচ মুক্তি চাওয়ার একটি শব্দও নেই। তিনি দরকষাকষি করেননি। তিনি নিজের অবস্থানটাই সংশোধন করেছেন।" },
          { en: "Allah's answer is recorded immediately: We responded to him and saved him from distress, and thus do We save the believers (21:88). The closing clause turns a private rescue into a public rule. And Surah as-Saffat states the alternative plainly: had he not been of those who glorify Allah, he would have remained in its belly until the Day of Resurrection (37:143-144). Remembrance, built before the crisis, was what made the crisis survivable.",
            bn: "আল্লাহর জবাব সঙ্গে সঙ্গেই লিপিবদ্ধ: আমি তাঁর ডাকে সাড়া দিলাম এবং তাঁকে দুশ্চিন্তা থেকে উদ্ধার করলাম, আর এভাবেই আমি মুমিনদের উদ্ধার করি (21:88)। শেষ বাক্যাংশটি একটি ব্যক্তিগত উদ্ধারকে একটি সর্বজনীন বিধানে পরিণত করে। আর সূরা আস-সাফফাত বিকল্পটিও স্পষ্ট করে দেয়: তিনি যদি তাসবিহকারীদের অন্তর্ভুক্ত না হতেন, তবে কিয়ামত পর্যন্ত সেই পেটেই থাকতেন (37:143-144)। সংকটের আগেই গড়ে তোলা যিকরই সংকটকে উত্তরণযোগ্য করেছিল।" },
        ],
      },
      {
        h: { en: "Cast Ashore and Restored", bn: "তীরে নিক্ষিপ্ত ও পুনরুজ্জীবিত" },
        p: [
          { en: "He was cast onto the open shore while he was ill, and Allah caused a gourd plant to grow over him (37:145-146). It is a strikingly gentle detail after so severe a discipline: the same power that arranged the fish arranged the shade. Correction in this story is never abandonment, and recovery is treated as part of the mercy rather than an afterthought.",
            bn: "অসুস্থ অবস্থায় তাঁকে উন্মুক্ত তীরে নিক্ষেপ করা হলো, আর আল্লাহ তাঁর ওপর এক লাউজাতীয় গাছ উদ্গত করলেন (37:145-146)। এত কঠিন সংশোধনের পর এ এক আশ্চর্য কোমল বিবরণ: যে শক্তি মাছের ব্যবস্থা করেছিল, সেই শক্তিই ছায়ার ব্যবস্থা করল। এই কাহিনিতে সংশোধন কখনো পরিত্যাগ নয়, আর আরোগ্যকে দেখা হয়েছে রহমতেরই অংশ হিসেবে, কোনো বাড়তি সংযোজন হিসেবে নয়।" },
          { en: "Then he was sent back — to a hundred thousand or more — and they believed, so Allah gave them enjoyment for a time (37:147-148). The mission he had walked away from was returned to him intact. Nothing had been lost by the delay except his own comfort, and the people he had given up on were the ones who received the outcome.",
            bn: "এরপর তাঁকে আবার পাঠানো হলো — এক লক্ষ বা তারও বেশি মানুষের কাছে — আর তারা ঈমান আনল, ফলে আল্লাহ তাদের এক নির্দিষ্ট সময় পর্যন্ত ভোগের সুযোগ দিলেন (37:147-148)। যে দায়িত্ব ছেড়ে তিনি চলে গিয়েছিলেন, তা অক্ষত অবস্থায়ই তাঁকে ফিরিয়ে দেওয়া হলো। বিলম্বে তাঁর নিজের স্বস্তি ছাড়া আর কিছুই হারায়নি, আর যাদের ব্যাপারে তিনি আশা ছেড়ে দিয়েছিলেন, ফলাফলটি পেল তারাই।" },
        ],
      },
      {
        h: { en: "The Nation That Turned in Time", bn: "যে জাতি সময়মতো ফিরেছিল" },
        p: [
          { en: "Surah Yunus makes a claim about history that is easy to read past: no town believed and profited by its faith except the people of Yunus — when they believed, We removed from them the punishment of disgrace in worldly life and gave them enjoyment for a time (10:98). Across every nation the Quran describes, this is the single recorded case of a community repenting collectively before the punishment fell.",
            bn: "সূরা ইউনুস ইতিহাস সম্পর্কে এমন একটি দাবি করে যা সহজেই চোখ এড়িয়ে যায়: এমন কোনো জনপদ ছিল না যারা ঈমান আনার পর তা তাদের উপকারে এসেছে — কেবল ইউনুসের সম্প্রদায় ছাড়া; তারা যখন ঈমান আনল, আমি তাদের ওপর থেকে দুনিয়ার জীবনের লাঞ্ছনার শাস্তি সরিয়ে নিলাম এবং এক নির্দিষ্ট সময় পর্যন্ত ভোগের সুযোগ দিলাম (10:98)। কুরআনে বর্ণিত সব জাতির মধ্যে এটিই একমাত্র নথিভুক্ত ঘটনা, যেখানে শাস্তি নেমে আসার আগেই একটি জনগোষ্ঠী সমষ্টিগতভাবে তওবা করেছে।" },
          { en: "The contrast is deliberate. Pharaoh's faith was refused at the moment the sea closed over him (10:90-91), and the Quran states the rule generally: their faith did not benefit them once they saw Our punishment (40:84-85). The people of Yunus were not more deserving; they were earlier. The window closes, and the story exists to say that it is still open now.",
            bn: "এই বৈসাদৃশ্য উদ্দেশ্যপ্রণোদিত। ফিরআউনের ঈমান প্রত্যাখ্যাত হয়েছিল ঠিক সেই মুহূর্তে যখন সমুদ্র তার ওপর বন্ধ হয়ে আসছিল (10:90-91), আর কুরআন বিধানটি সাধারণভাবে বলে দেয়: আমার শাস্তি দেখে ফেলার পর তাদের ঈমান আর কোনো উপকারে আসেনি (40:84-85)। ইউনুসের সম্প্রদায় বেশি যোগ্য ছিল না; তারা ছিল আগেভাগে। দরজা একসময় বন্ধ হয়ে যায় — আর কাহিনিটি রয়েছে এ কথা বলতেই যে এখনো তা খোলা।" },
        ],
      },
      {
        h: { en: "The Warning Drawn From Him", bn: "তাঁর থেকে নেওয়া সতর্কবার্তা" },
        p: [
          { en: "Years later the Quran turned this episode into an instruction for the final Prophet ﷺ: be patient for the decision of your Lord, and be not like the companion of the fish, when he called out while he was distressed — had a favour from his Lord not reached him, he would have been cast onto the barren shore while he was blamed (68:48-49). The lesson drawn is impatience, not weakness of faith.",
            bn: "বহু বছর পর কুরআন এই ঘটনাকে শেষ নবী ﷺ-এর জন্য এক নির্দেশনায় রূপ দিল: তোমার প্রভুর ফয়সালার জন্য ধৈর্য ধরো, আর মাছওয়ালার মতো হয়ো না, যখন তিনি অস্থির অবস্থায় ডেকেছিলেন — যদি তাঁর প্রভুর অনুগ্রহ তাঁর কাছে না পৌঁছাত, তবে তিনি তিরস্কৃত অবস্থায় উন্মুক্ত প্রান্তরে নিক্ষিপ্ত হতেন (68:48-49)। এখান থেকে যে শিক্ষা নেওয়া হচ্ছে তা অধৈর্যের, ঈমানের দুর্বলতার নয়।" },
          { en: "The very next verse completes the balance: but his Lord chose him and made him of the righteous (68:50). That is the settled Quranic verdict on Yunus, and it is why the Prophet ﷺ warned that no one should claim to be better than Yunus son of Matta, as reported in Sahih al-Bukhari and Sahih Muslim. His fault is recorded so that no believer thinks a lapse is the end, and his standing is recorded so that no believer belittles a servant Allah has chosen.",
            bn: "ঠিক পরের আয়াতটিই ভারসাম্য পূর্ণ করে: কিন্তু তাঁর প্রভু তাঁকে মনোনীত করলেন এবং সৎকর্মশীলদের অন্তর্ভুক্ত করলেন (68:50)। ইউনুস সম্পর্কে এটিই কুরআনের চূড়ান্ত রায়, আর এ কারণেই নবী ﷺ সতর্ক করেছেন যে কেউ যেন না বলে সে ইউনুস ইবনে মাত্তার চেয়ে উত্তম — সহিহ বুখারি ও সহিহ মুসলিমে তা বর্ণিত। তাঁর ত্রুটি লিপিবদ্ধ হয়েছে যেন কোনো মুমিন একটি স্খলনকেই শেষ মনে না করে, আর তাঁর মর্যাদা লিপিবদ্ধ হয়েছে যেন কোনো মুমিন আল্লাহর মনোনীত বান্দাকে ছোট না করে।" },
        ],
      },
    ],
  },
  zakariya: {
    sections: [
      {
        h: { en: "A Servant in the Sanctuary", bn: "উপাসনালয়ের এক বান্দা" },
        p: [
          { en: "Surah Maryam introduces him in a way reserved for very few: this is a mention of the mercy of your Lord to His servant Zakariya (19:2). Not his mission, not his lineage — his Lord's mercy to him. Everything that follows is offered as an illustration of that opening sentence, and the chapter that carries his name at its head is the chapter that will go on to tell the birth of Isa (AS).",
            bn: "সূরা মারইয়াম তাঁর পরিচয় দেয় এমনভাবে, যা খুব অল্প কয়েকজনের জন্যই সংরক্ষিত: এ হলো তোমার প্রভুর রহমতের বর্ণনা, তাঁর বান্দা যাকারিয়ার প্রতি (19:2)। তাঁর দাওয়াত নয়, তাঁর বংশ নয় — তাঁর প্রতি তাঁর প্রভুর রহমত। এরপর যা কিছু আসে, সবই সেই সূচনাবাক্যের দৃষ্টান্ত হিসেবে উপস্থাপিত; আর যে সূরার শুরুতে তাঁর কথা, সেই সূরাই পরে বলবে ঈসা (আঃ)-এর জন্মের কাহিনি।" },
          { en: "His public role was the guardianship of Maryam. Surah Ali 'Imran records that lots were cast over who would take charge of her, and Zakariya was given the trust (3:44, 3:37). He served in the sanctuary — the commentators place it at Jerusalem — and the Quran shows him fulfilling the trust attentively: he entered upon her in the prayer chamber, and he noticed what was there.",
            bn: "জনসমক্ষে তাঁর ভূমিকা ছিল মারইয়ামের অভিভাবকত্ব। সূরা আলে ইমরান জানায়, কে তাঁর দায়িত্ব নেবে তা নিয়ে লটারি হয়েছিল, আর দায়িত্ব পেয়েছিলেন যাকারিয়া (3:44, 3:37)। তিনি উপাসনালয়ে সেবারত ছিলেন — মুফাসসিরগণ একে জেরুজালেমে অবস্থিত বলেন — আর কুরআন দেখায় তিনি সেই দায়িত্ব পালন করছেন গভীর মনোযোগে: তিনি ইবাদতকক্ষে তাঁর কাছে যেতেন, আর সেখানে যা থাকত তা তাঁর চোখ এড়াত না।" },
        ],
      },
      {
        h: { en: "The Provision in the Mihrab", bn: "মিহরাবের রিজিক" },
        p: [
          { en: "Every time Zakariya entered the prayer chamber he found provision with her. He asked, “Maryam, from where is this to you?” She said, “It is from Allah. Indeed Allah provides for whom He wills without account” (3:37). He had come as her guardian and left as her student. The answer he received was not about food at all; it was about the limits he had quietly placed on what Allah could give.",
            bn: "যতবার যাকারিয়া ইবাদতকক্ষে প্রবেশ করতেন, ততবারই তিনি সেখানে মারইয়ামের কাছে রিজিক দেখতে পেতেন। তিনি জিজ্ঞেস করলেন, “মারইয়াম, তোমার কাছে এসব কোথা থেকে আসে?” তিনি বললেন, “এ আল্লাহর পক্ষ থেকে। নিশ্চয়ই আল্লাহ যাকে ইচ্ছা বেহিসাব রিজিক দেন” (3:37)। তিনি এসেছিলেন অভিভাবক হয়ে, ফিরলেন ছাত্র হয়ে। যে উত্তর তিনি পেলেন তা আসলে খাবার নিয়ে ছিল না; ছিল সেই সীমা নিয়ে, যা তিনি নিজের অজান্তেই আল্লাহর দানের ওপর টেনে রেখেছিলেন।" },
          { en: "The Quran links the two events by sequence: it is there, in that chamber, that Zakariya called upon his Lord (3:38). Seeing sustenance arrive outside every ordinary channel reopened a hope he had long since put away. That is how the passage teaches du'a — not as a technique, but as what happens to a heart that has just watched Allah work outside the expected order.",
            bn: "কুরআন ঘটনা দুটিকে যুক্ত করে ক্রম দিয়েই: সেখানেই, সেই কক্ষেই, যাকারিয়া তাঁর প্রভুকে ডাকলেন (3:38)। সব চেনা উপায়ের বাইরে দিয়ে রিজিক আসতে দেখে তাঁর বহু আগে তুলে রাখা এক আশা আবার জেগে উঠল। এভাবেই অনুচ্ছেদটি দোয়া শেখায় — কোনো কৌশল হিসেবে নয়, বরং সেই হৃদয়ের স্বাভাবিক প্রতিক্রিয়া হিসেবে, যে সদ্য দেখেছে আল্লাহ প্রত্যাশিত নিয়মের বাইরে কাজ করেন।" },
        ],
      },
      {
        h: { en: "The Prayer He Whispered", bn: "যে দোয়া তিনি ফিসফিস করে করেছিলেন" },
        p: [
          { en: "Surah Maryam preserves the words themselves. He called upon his Lord with a hidden call: “My Lord, indeed my bones have weakened, and my head has flared with white, and never have I been unblessed in my supplication to You, my Lord” (19:3-4). He begins by describing his own decline honestly, and then, in the same breath, describes a record of answered prayer. Neither cancels the other.",
            bn: "সূরা মারইয়াম শব্দগুলো নিজেই সংরক্ষণ করে রেখেছে। তিনি তাঁর প্রভুকে ডাকলেন গোপন ডাকে: “হে আমার প্রভু, আমার হাড় দুর্বল হয়ে গেছে, আমার মাথা শুভ্রতায় জ্বলে উঠেছে, আর হে আমার প্রভু, আপনার কাছে দোয়া করে আমি কখনো বঞ্চিত হইনি” (19:3-4)। তিনি শুরু করেন নিজের ক্ষয়ের সৎ বর্ণনা দিয়ে, আর একই নিঃশ্বাসে বলেন কবুল হওয়া দোয়ার এক দীর্ঘ ইতিহাস। একটি অন্যটিকে বাতিল করে না।" },
          { en: "Then he states his fear and his request: he feared the successors after him, his wife had been barren, so he asked for an heir from Allah — one who would inherit from him and from the family of Ya'qub, and whom Allah would make pleasing (19:5-6). The concern is not property. He wanted the trust of prophecy in safe hands, and he asked for a son who would be acceptable to Allah before he was useful to himself.",
            bn: "এরপর তিনি নিজের আশঙ্কা ও আবেদন জানান: তিনি তাঁর পরের উত্তরাধিকারীদের নিয়ে ভীত ছিলেন, তাঁর স্ত্রী ছিলেন বন্ধ্যা, তাই তিনি আল্লাহর কাছে এক উত্তরাধিকারী চাইলেন — যে তাঁর ও ইয়াকুবের পরিবারের উত্তরাধিকারী হবে, আর যাকে আল্লাহ করবেন সন্তোষভাজন (19:5-6)। উদ্বেগটি সম্পত্তি নিয়ে নয়। তিনি চেয়েছিলেন নবুয়তের আমানত নিরাপদ হাতে থাকুক, আর এমন এক পুত্র চেয়েছিলেন যে নিজের কাজে আসার আগে আল্লাহর কাছে গ্রহণযোগ্য হবে।" },
        ],
      },
      {
        h: { en: "An Answer With a Name", bn: "নামসহ এক উত্তর" },
        p: [
          { en: "The reply is immediate and specific: “Zakariya, We give you good tidings of a boy whose name is Yahya. We have not assigned to any before him that name” (19:7). Not merely a son — a named son, and a name that had never been used. The answer exceeded the request in a way that could not be mistaken for coincidence.",
            bn: "উত্তর এলো সঙ্গে সঙ্গে এবং সুনির্দিষ্টভাবে: “হে যাকারিয়া, আমি তোমাকে এক পুত্রের সুসংবাদ দিচ্ছি, যার নাম ইয়াহইয়া। এর আগে এই নামে আমি কাউকে অভিহিত করিনি” (19:7)। কেবল একটি পুত্র নয় — নামসহ এক পুত্র, আর এমন এক নাম যা আগে কখনো ব্যবহৃত হয়নি। উত্তরটি আবেদনকে এমনভাবে ছাপিয়ে গেল, যাকে কাকতালীয় বলে ভুল করার উপায় নেই।" },
          { en: "He asked how, given his wife's barrenness and the extreme old age he had reached (19:8). The answer reframed the question: your Lord says it is easy for Me, and I created you before, when you were nothing (19:9). His own existence was the precedent. Surah al-Anbiya sums up the same episode with the couple included in the mercy — We answered him, granted him Yahya, and made his wife fit for him (21:90).",
            bn: "তিনি জিজ্ঞেস করলেন, কীভাবে — যেখানে তাঁর স্ত্রী বন্ধ্যা এবং তিনি নিজে বার্ধক্যের চরমে পৌঁছে গেছেন (19:8)। উত্তর প্রশ্নটিকেই নতুন করে সাজিয়ে দিল: তোমার প্রভু বলেন, এটি আমার জন্য সহজ; আমি তো এর আগে তোমাকেই সৃষ্টি করেছি, যখন তুমি কিছুই ছিলে না (19:9)। তাঁর নিজের অস্তিত্বই ছিল নজির। সূরা আল-আম্বিয়া একই ঘটনার সারসংক্ষেপে স্ত্রীকেও রহমতের ভেতরে টেনে নেয় — আমি তাঁর ডাকে সাড়া দিলাম, তাঁকে ইয়াহইয়া দান করলাম এবং তাঁর স্ত্রীকে তাঁর জন্য উপযোগী করলাম (21:90)।" },
        ],
      },
      {
        h: { en: "Three Days Without Speech", bn: "তিন দিন কথা ছাড়া" },
        p: [
          { en: "He asked for a sign, and was told: your sign is that you will not speak to people for three nights, though sound in body (19:10). Surah Ali 'Imran states it as three days, except by gesture, and adds the instruction that fills the silence — remember your Lord much, and glorify Him in the evening and the morning (3:41). The tongue was closed to people and left open to Allah.",
            bn: "তিনি একটি নিদর্শন চাইলেন, আর তাঁকে বলা হলো: তোমার নিদর্শন এই যে, সুস্থ থাকা সত্ত্বেও তুমি তিন রাত মানুষের সাথে কথা বলবে না (19:10)। সূরা আলে ইমরান বলে তিন দিন, কেবল ইশারা ছাড়া, আর সেই নীরবতাকে ভরে দেওয়ার নির্দেশও যোগ করে — তোমার প্রভুকে অধিক স্মরণ করো এবং সকাল-সন্ধ্যায় তাঁর তাসবিহ পড়ো (3:41)। জিহ্বা মানুষের জন্য বন্ধ হলো, আল্লাহর জন্য খোলা রইল।" },
          { en: "So he came out to his people from the prayer chamber and signalled to them to glorify Allah morning and evening (19:11). A man who could not explain his own news spent it in dhikr and gestured others toward the same. The last picture the Quran gives of Zakariya is a servant unable to speak and still teaching. His life answers a question every believer asks: whether a prayer long unanswered has been heard. It had been heard from the beginning; only the timing belonged to Allah.",
            bn: "তারপর তিনি ইবাদতকক্ষ থেকে বেরিয়ে তাঁর সম্প্রদায়ের কাছে এসে ইশারায় জানালেন, সকাল-সন্ধ্যায় আল্লাহর তাসবিহ পড়ো (19:11)। যিনি নিজের সুসংবাদটুকুও ব্যাখ্যা করতে পারছিলেন না, তিনি সময়টা কাটালেন যিকরে, আর অন্যদেরও সেদিকেই ইশারা করলেন। কুরআনে যাকারিয়ার শেষ ছবিটি এমন এক বান্দার, যিনি কথা বলতে অক্ষম, তবু শিক্ষা দিয়ে চলেছেন। তাঁর জীবন প্রতিটি মুমিনের সেই প্রশ্নের উত্তর দেয়: বহু দিনের অনুত্তরিত দোয়া কি শোনা হয়েছে? তা শুরু থেকেই শোনা হয়েছিল; কেবল সময়টুকু ছিল আল্লাহর হাতে।" },
        ],
      },
    ],
  },
  yahya: {
    sections: [
      {
        h: { en: "A Name No One Had Carried", bn: "যে নাম কেউ বহন করেনি" },
        p: [
          { en: "Before he was born he was distinguished by his name. Allah told Zakariya of a boy called Yahya, adding that no one before him had been given that name (19:7). It is a small clause with a large implication: this child was not a continuation of a family line but something newly begun, announced by Allah rather than chosen by a parent.",
            bn: "জন্মের আগেই তিনি আলাদা হয়ে গিয়েছিলেন তাঁর নামে। আল্লাহ যাকারিয়াকে ইয়াহইয়া নামের এক পুত্রের সংবাদ দেন, আর যোগ করেন যে এর আগে এই নামে কাউকে অভিহিত করা হয়নি (19:7)। ছোট্ট একটি বাক্যাংশ, কিন্তু এর তাৎপর্য বিশাল: এই শিশু ছিল না কোনো বংশধারার নিছক ধারাবাহিকতা, বরং নতুন করে শুরু হওয়া কিছু — যা পিতা বেছে নেননি, আল্লাহ ঘোষণা করেছেন।" },
          { en: "Surah Ali 'Imran adds the descriptions given with the glad tidings: he would confirm a word from Allah, and be a leader, chaste, and a prophet from among the righteous (3:39). Four qualities, fixed before birth. The Quran presents his whole character as a gift bestowed rather than a reputation earned, which is exactly how it will describe his childhood.",
            bn: "সূরা আলে ইমরান সেই সুসংবাদের সাথে দেওয়া বিশেষণগুলোও যোগ করে: তিনি আল্লাহর পক্ষ থেকে আগত এক বাণীকে সত্যায়ন করবেন, হবেন নেতা, সংযমী এবং সৎকর্মশীলদের মধ্য থেকে একজন নবী (3:39)। চারটি গুণ, জন্মের আগেই নির্ধারিত। কুরআন তাঁর গোটা চরিত্রকে উপস্থাপন করে অর্জিত সুনাম হিসেবে নয়, বরং প্রদত্ত এক দান হিসেবে — আর ঠিক এভাবেই সে তাঁর শৈশবের বর্ণনা দেবে।" },
        ],
      },
      {
        h: { en: "Take the Scripture With Strength", bn: "কিতাব দৃঢ়ভাবে ধরো" },
        p: [
          { en: "The command comes without preamble: “Yahya, take the Scripture with determination.” And, the verse continues, We gave him judgement while yet a boy (19:12). The Quran does not report a period of training. Wisdom arrives as a grant, in childhood, and the command to hold the Book firmly is addressed to a child capable of obeying it.",
            bn: "আদেশটি আসে কোনো ভূমিকা ছাড়াই: “হে ইয়াহইয়া, কিতাব দৃঢ়ভাবে ধারণ করো।” আর আয়াতটি বলে চলে, আমি তাঁকে শৈশবেই বিচারবুদ্ধি দান করেছি (19:12)। কুরআন কোনো প্রশিক্ষণকালের বর্ণনা দেয় না। প্রজ্ঞা আসে দান হিসেবে, শৈশবেই — আর কিতাব শক্ত করে ধরার আদেশ দেওয়া হয় এমন এক শিশুকে, যে তা মানতে সক্ষম।" },
          { en: "The word rendered “with determination” carries seriousness and grip. It is not a call to admire the Scripture but to hold it under pressure. Everything later reported about his firmness with rulers rests on this verse: a person who has taken the Book with that grip in childhood is not easily moved by a court in adulthood.",
            bn: "“দৃঢ়ভাবে” অনূদিত শব্দটির ভেতরে আছে গুরুত্ব ও আঁকড়ে ধরা। এটি কিতাবের প্রশংসা করার আহ্বান নয়, চাপের মুখেও তা ধরে রাখার আহ্বান। শাসকদের সামনে তাঁর দৃঢ়তা সম্পর্কে পরে যা কিছু বর্ণিত, তার ভিত্তি এই আয়াতেই: শৈশবেই যে কিতাবকে এমন করে আঁকড়ে ধরেছে, পূর্ণ বয়সে কোনো রাজদরবার তাকে সহজে নাড়াতে পারে না।" },
        ],
      },
      {
        h: { en: "Tenderness, Purity, Fear of Allah", bn: "কোমলতা, পবিত্রতা, আল্লাহভীতি" },
        p: [
          { en: "The description continues in three short phrases: and tenderness from Us, and purity — and he was God-fearing (19:13). The first is hanan, an affection and compassion given to him as a gift from Allah. It is a striking pairing. Devotion of his intensity might be expected to harden a person, so the Quran records the softness alongside the discipline.",
            bn: "বর্ণনা এগিয়ে চলে তিনটি সংক্ষিপ্ত বাক্যাংশে: আর আমার পক্ষ থেকে কোমলতা ও পবিত্রতা — আর তিনি ছিলেন আল্লাহভীরু (19:13)। প্রথমটি হলো ‘হানান’, অর্থাৎ স্নেহ ও করুণা, যা আল্লাহর পক্ষ থেকে তাঁকে দান করা হয়েছিল। এই সংযোগটি চমকপ্রদ। তাঁর মতো তীব্র নিষ্ঠা মানুষকে কঠোর করে তুলতে পারত, তাই কুরআন কঠোরতার পাশে কোমলতাটিও লিপিবদ্ধ করে রাখে।" },
          { en: "Then the social measure: and dutiful to his parents, and he was not a tyrant, disobedient (19:14). The Quran defines his greatness partly by what he was not. He held no arrogance and no rebellion, in an age when both were common among those with religious authority. Honour toward parents is placed in the same verse as the absence of tyranny, because they train the same instinct.",
            bn: "এরপর সামাজিক পরিমাপ: আর তিনি ছিলেন পিতামাতার প্রতি অনুগত, আর তিনি ছিলেন না উদ্ধত, অবাধ্য (19:14)। কুরআন তাঁর মহত্ত্বের একটি অংশ নির্ধারণ করে তিনি যা ছিলেন না তা দিয়েই। তাঁর মধ্যে ছিল না অহংকার, ছিল না বিদ্রোহ — এমন এক যুগে, যখন ধর্মীয় কর্তৃত্বধারীদের মধ্যে এ দুটিই ছিল সাধারণ। পিতামাতার প্রতি সম্মান আর উদ্ধত না হওয়াকে একই আয়াতে রাখা হয়েছে, কারণ দুটিই একই প্রবৃত্তিকে শাসন করে।" },
        ],
      },
      {
        h: { en: "Confirming a Word From Allah", bn: "আল্লাহর এক বাণীর সত্যায়ন" },
        p: [
          { en: "His prophetic task is summarised in a single phrase: confirming a word from Allah (3:39). The word in question is Isa (AS), whom the Quran elsewhere calls His word which He directed to Maryam (4:171). Yahya's mission was therefore to authenticate the messenger who came alongside him, and to prepare a whole people to recognise him when he came.",
            bn: "তাঁর নবুয়তি দায়িত্ব সংক্ষেপে বলা হয়েছে একটি বাক্যাংশে: আল্লাহর পক্ষ থেকে আগত এক বাণীর সত্যায়নকারী (3:39)। এখানে সেই বাণী হলেন ঈসা (আঃ), যাঁকে কুরআন অন্যত্র বলে তাঁর সেই বাণী, যা তিনি মারইয়ামের কাছে পৌঁছে দিয়েছিলেন (4:171)। সুতরাং ইয়াহইয়ার দায়িত্ব ছিল তাঁর সমসাময়িক রাসূলকে সত্যায়ন করা, আর একটি জাতিকে তাঁকে চিনে নেওয়ার জন্য প্রস্তুত করা।" },
          { en: "The same verse calls him sayyid — a leader whom people look to — and hasur, restrained from appetite. Leadership and self-denial are named together. Surah al-Anbiya groups him with his father in a description of how they worked: they used to hasten to good deeds, and call upon Us in hope and fear, and were humble before Us (21:90).",
            bn: "সেই একই আয়াত তাঁকে বলে ‘সাইয়িদ’ — এমন নেতা যাঁর দিকে মানুষ তাকায় — আর ‘হাসূর’, প্রবৃত্তি থেকে সংযত। নেতৃত্ব ও আত্মসংযমকে একসাথে উল্লেখ করা হয়েছে। সূরা আল-আম্বিয়া তাঁকে তাঁর পিতার সাথে রেখে তাঁদের কর্মপদ্ধতির বর্ণনা দেয়: তাঁরা সৎকাজে দ্রুত এগিয়ে যেতেন, আশা ও ভয় নিয়ে আমাকে ডাকতেন এবং আমার সামনে বিনয়ী ছিলেন (21:90)।" },
        ],
      },
      {
        h: { en: "Peace at Three Stations", bn: "তিন স্থানে শান্তি" },
        p: [
          { en: "The section closes with a benediction: and peace be upon him the day he was born, and the day he dies, and the day he is raised alive (19:15). Three moments a human being cannot control are each sealed with peace. Birth is behind him, death ahead, resurrection beyond both, and the guarantee covers all three at once.",
            bn: "অনুচ্ছেদটি শেষ হয় এক বন্দনায়: আর তাঁর প্রতি শান্তি যেদিন তিনি জন্মেছিলেন, যেদিন তিনি মারা যাবেন এবং যেদিন তিনি জীবিত উত্থিত হবেন (19:15)। মানুষের নিয়ন্ত্রণের বাইরে থাকা তিনটি মুহূর্তের প্রতিটিতেই মুদ্রিত হলো শান্তি। জন্ম পেছনে, মৃত্যু সামনে, পুনরুত্থান দুয়েরও পরে — আর নিশ্চয়তা একসাথে তিনটিকেই ঢেকে দেয়।" },
          { en: "Later in the same surah Isa (AS) speaks the identical formula about himself from the cradle (19:33). Over Yahya, Allah declares it; Isa declares it of himself by Allah's leave. The parallel is deliberate and binds the two cousins together at the point where the surah is most concerned to establish that both are servants.",
            bn: "একই সূরার পরের অংশে ঈসা (আঃ) দোলনা থেকে নিজের সম্পর্কে ঠিক একই বাক্য বলেন (19:33)। ইয়াহইয়ার ক্ষেত্রে তা ঘোষণা করেন আল্লাহ; আর ঈসা আল্লাহর অনুমতিতে তা নিজের সম্পর্কে ঘোষণা করেন। এই সমান্তরালতা উদ্দেশ্যপ্রণোদিত, আর তা এই দুই আত্মীয়কে যুক্ত করে ঠিক সেই বিন্দুতে, যেখানে সূরাটি সবচেয়ে বেশি জোর দিয়ে প্রতিষ্ঠা করতে চায় যে তাঁরা উভয়েই বান্দা।" },
        ],
      },
      {
        h: { en: "What the Quran Leaves Unsaid", bn: "কুরআন যা বলেনি" },
        p: [
          { en: "The Quran does not narrate his death. Later reports say he was killed for upholding Allah's law before a ruler, and the Quran's own phrase — the day he dies — is left without commentary. A story told with such care about his childhood ends without a martyrdom scene, and the restraint should be respected rather than filled in.",
            bn: "কুরআন তাঁর মৃত্যুর বিবরণ দেয় না। পরবর্তী বর্ণনায় বলা হয়, শাসকের সামনে আল্লাহর বিধান সমুন্নত রাখার কারণে তাঁকে হত্যা করা হয়েছিল; আর কুরআনের নিজের বাক্যাংশ — “যেদিন তিনি মারা যাবেন” — কোনো ব্যাখ্যা ছাড়াই রেখে দেওয়া হয়েছে। যে কাহিনি তাঁর শৈশব নিয়ে এত যত্নে বলা, তা শেষ হয় কোনো শাহাদাতের দৃশ্য ছাড়াই — আর এই সংযমকে পূরণ করার চেষ্টা না করে সম্মান করাই উচিত।" },
          { en: "What is given is more than enough to imitate. Purity, tenderness, seriousness about revelation, honour toward parents, and freedom from arrogance are all within reach of an ordinary believer, and Allah listed exactly those qualities when describing a prophet He loved. His name means “he lives,” and the Quran keeps that name honoured wherever it is read.",
            bn: "যা দেওয়া হয়েছে, অনুসরণের জন্য তা-ই যথেষ্ট। পবিত্রতা, কোমলতা, ওহির প্রতি গুরুত্ব, পিতামাতার প্রতি সম্মান এবং অহংকারমুক্ততা — এর সবই একজন সাধারণ মুমিনের নাগালের ভেতরে; আর আল্লাহ তাঁর প্রিয় এক নবীর বর্ণনায় ঠিক এগুলোরই তালিকা দিয়েছেন। তাঁর নামের অর্থ “সে বাঁচে”, আর কুরআন যেখানেই পঠিত হয়, সেখানেই সেই নাম সম্মানিত থাকে।" },
        ],
      },
    ],
  },
  isa: {
    sections: [
      {
        h: { en: "The Family of Imran", bn: "ইমরানের পরিবার" },
        p: [
          { en: "This account begins a generation early. Allah chose Adam, Nuh, the family of Ibrahim and the family of Imran above the worlds (3:33). The wife of Imran vowed the child in her womb to Allah's service, and when she delivered a girl she said, “My Lord, I have delivered a female” (3:35-36). She named her Maryam and sought Allah's protection for her offspring.",
            bn: "কুরআন এই বৃত্তান্ত শুরু করে এক প্রজন্ম আগে থেকে। আল্লাহ আদম, নূহ, ইবরাহীমের পরিবার ও ইমরানের পরিবারকে সৃষ্টিকুলের ওপর মনোনীত করেছেন (3:33)। ইমরানের স্ত্রী তাঁর গর্ভের সন্তানকে আল্লাহর সেবায় উৎসর্গ করার মানত করেন, আর কন্যা প্রসব করে বলেন, “হে আমার প্রভু, আমি তো কন্যা প্রসব করেছি” (3:35-36)। তিনি তার নাম রাখেন মারইয়াম এবং তার ও তার বংশধরের জন্য আল্লাহর আশ্রয় প্রার্থনা করেন।" },
          { en: "Allah accepted her graciously, caused her to grow in purity, and placed her in the care of Zakariya (3:37). The chapter is building its case before a single miracle is told: this child was chosen, protected, and raised inside the sanctuary, so that when the impossible was announced to her it reached someone already formed by worship.",
            bn: "আল্লাহ তাকে উত্তমরূপে কবুল করেন, উত্তমভাবে বেড়ে উঠতে দেন এবং যাকারিয়ার তত্ত্বাবধানে রাখেন (3:37)। একটি মুজিযার কথা বলার আগেই সূরাটি ভিত্তি গড়ে তুলছে: এই কন্যা ছিলেন মনোনীত, সুরক্ষিত ও আল্লাহর ঘরের ভেতরে প্রতিপালিত — যাতে অসম্ভব সংবাদটি যখন ঘোষিত হয়, তখন তা পৌঁছায় এমন একজনের কাছে, যাঁকে ইবাদতই গড়ে তুলেছে।" },
        ],
      },
      {
        h: { en: "The Annunciation", bn: "সুসংবাদ" },
        p: [
          { en: "The angels said, “Maryam, Allah has chosen you and purified you and chosen you above the women of the worlds” (3:42). Then came the news itself: a word from Him, whose name is the Messiah, Isa son of Maryam, honoured in this world and the Hereafter and among those brought near, who would speak to people in the cradle and in maturity (3:45-46).",
            bn: "ফেরেশতারা বললেন, “হে মারইয়াম, আল্লাহ তোমাকে মনোনীত করেছেন, পবিত্র করেছেন এবং বিশ্বজগতের নারীদের ওপর মনোনীত করেছেন” (3:42)। এরপর এলো সংবাদ: তাঁর পক্ষ থেকে এক বাণী, যাঁর নাম মসীহ, মারইয়ামের পুত্র ঈসা, দুনিয়া ও আখিরাতে সম্মানিত এবং নৈকট্যপ্রাপ্তদের অন্তর্ভুক্ত, যিনি দোলনায় ও পরিণত বয়সে মানুষের সাথে কথা বলবেন (3:45-46)।" },
          { en: "She asked how she could have a boy when no man had touched her. The answer is the principle the story rests on: so it is; Allah creates what He wills — when He decrees a matter He only says to it “Be,” and it is (3:47). Surah Maryam records the same exchange, where the one sent to her says he brings her a pure boy, a matter already decreed (19:19-21).",
            bn: "তিনি জিজ্ঞেস করলেন, কোনো পুরুষ তাঁকে স্পর্শ করেনি, তবু কীভাবে তাঁর পুত্র হবে। উত্তরটিই সেই মূলনীতি, যার ওপর গোটা কাহিনি দাঁড়িয়ে: এমনই হবে; আল্লাহ যা ইচ্ছা সৃষ্টি করেন — তিনি যখন কোনো বিষয়ের ফয়সালা করেন, কেবল বলেন “হও”, আর তা হয়ে যায় (3:47)। সূরা মারইয়াম একই কথোপকথন বর্ণনা করে, যেখানে প্রেরিত দূত বলেন, তিনি এসেছেন তাঁকে এক পবিত্র পুত্র দান করতে, আর তা ইতিমধ্যেই নির্ধারিত (19:19-21)।" },
        ],
      },
      {
        h: { en: "The Birth and the Cradle", bn: "জন্ম ও দোলনা" },
        p: [
          { en: "The labour pains drove her to the trunk of a palm tree, and she said, “I wish I had died before this and been in oblivion, forgotten” (19:23). She was comforted from below her: a stream had been placed there, and she was told to shake the trunk toward herself for fresh dates, to eat and drink and be content, and to vow a fast of silence if she saw anyone (19:24-26).",
            bn: "প্রসববেদনা তাঁকে এক খেজুরগাছের কাণ্ডের কাছে নিয়ে গেল, আর তিনি বললেন, “হায়, এর আগেই যদি আমি মরে যেতাম এবং সম্পূর্ণ বিস্মৃত হয়ে যেতাম” (19:23)। নিচ থেকে তাঁকে সান্ত্বনা দেওয়া হলো: সেখানে এক ঝর্ণা রাখা হয়েছে, আর তাঁকে বলা হলো গাছের কাণ্ড নিজের দিকে নাড়াতে, তাজা খেজুর খেতে ও পান করতে ও চোখ জুড়াতে, এবং কাউকে দেখলে নীরবতার রোজার মানত করতে (19:24-26)।" },
          { en: "She brought the child to her people and they accused her (19:27-28). She pointed to the infant, and he spoke: “I am the servant of Allah. He has given me the Scripture and made me a prophet, and made me blessed wherever I am, and enjoined upon me prayer and zakah as long as I live, and dutiful to my mother, and He has not made me a tyrant, wretched. And peace is upon me the day I was born, the day I die, and the day I am raised alive” (19:30-33).",
            bn: "তিনি শিশুটিকে নিয়ে তাঁর সম্প্রদায়ের কাছে এলেন, আর তারা তাঁকে অভিযুক্ত করল (19:27-28)। তিনি শিশুটির দিকে ইশারা করলেন, আর সে কথা বলল: “আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং নবী করেছেন। আমি যেখানেই থাকি তিনি আমাকে বরকতময় করেছেন, আর যতদিন বেঁচে থাকি সালাত ও যাকাতের নির্দেশ দিয়েছেন, এবং আমাকে করেছেন মায়ের প্রতি অনুগত; তিনি আমাকে উদ্ধত ও হতভাগা করেননি। আর আমার প্রতি শান্তি যেদিন আমি জন্মেছি, যেদিন আমি মারা যাব এবং যেদিন আমি জীবিত উত্থিত হব” (19:30-33)।" },
        ],
      },
      {
        h: { en: "Signs by Allah's Permission", bn: "আল্লাহর অনুমতিতে নিদর্শন" },
        p: [
          { en: "He was sent to the Children of Israel with signs, and the Quran lists them with one phrase repeated at every step: that he would form from clay the likeness of a bird and breathe into it, and it would become a bird by Allah's permission; heal the blind and the leper; and revive the dead, by Allah's permission (3:49). That qualifier is the point of the verse.",
            bn: "তাঁকে নিদর্শনসহ বনী ইসরাঈলের কাছে পাঠানো হয়, আর কুরআন সেগুলোর তালিকা দেয় প্রতিটি ধাপে একই বাক্যাংশ পুনরাবৃত্তি করে: তিনি মাটি দিয়ে পাখির আকৃতি বানাবেন ও তাতে ফুঁ দেবেন, আর তা আল্লাহর অনুমতিতে পাখি হয়ে যাবে; জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করবেন; এবং আল্লাহর অনুমতিতে মৃতকে জীবিত করবেন (3:49)। এই শর্তটিই আয়াতের মূল কথা।" },
          { en: "Surah al-Ma'idah recounts the same favours as blessings Allah reminds him of: the Scripture and wisdom, the Torah and the Injil, the support of the Holy Spirit, and the restraint of those who would have harmed him (5:110). The Injil he was given held guidance and light, and confirmed the Torah that had come before it (5:46).",
            bn: "সূরা আল-মায়িদা সেই একই অনুগ্রহগুলোকে বর্ণনা করে আল্লাহর স্মরণ করিয়ে দেওয়া নিয়ামত হিসেবে: কিতাব ও প্রজ্ঞা, তাওরাত ও ইঞ্জিল, রূহুল কুদুসের সহায়তা, এবং যারা তাঁর ক্ষতি করতে চেয়েছিল তাদের প্রতিহত করা (5:110)। তাঁকে দেওয়া ইঞ্জিলে ছিল হিদায়াত ও আলো, আর তা পূর্ববর্তী তাওরাতকে সত্যায়ন করে (5:46)।" },
        ],
      },
      {
        h: { en: "The Disciples and the Table", bn: "শিষ্যগণ ও দস্তরখান" },
        p: [
          { en: "Sensing disbelief from them, he asked, “Who are my supporters for Allah?” The disciples said, “We are supporters of Allah; we have believed in Allah, so bear witness that we are Muslims” (3:52). The Quran calls them al-Hawariyyun and returns to them later, telling the believers to be supporters of Allah as they were (61:14).",
            bn: "তাদের পক্ষ থেকে অবিশ্বাস আঁচ করে তিনি জিজ্ঞেস করলেন, “আল্লাহর পথে কারা আমার সাহায্যকারী?” শিষ্যরা বলল, “আমরা আল্লাহর সাহায্যকারী; আমরা আল্লাহর ওপর ঈমান এনেছি, তাই সাক্ষী থাকুন যে আমরা আত্মসমর্পণকারী” (3:52)। কুরআন তাদের বলে হাওয়ারিয়্যূন, আর পরে আবার তাদের কথা তোলে, মুমিনদের বলে তাদের মতোই আল্লাহর সাহায্যকারী হতে (61:14)।" },
          { en: "Then they asked whether his Lord could send down a table spread from heaven. He answered, “Fear Allah, if you are believers,” and they said they wished their hearts reassured (5:112-113). He prayed for it to be a festival and a sign. Allah replied that He would send it down, but whoever disbelieved afterwards would be punished as no one else had been (5:114-115).",
            bn: "এরপর তারা জিজ্ঞেস করল, তাঁর প্রভু কি আকাশ থেকে খাবারে ভরা দস্তরখান নাযিল করতে পারেন। তিনি উত্তর দিলেন, “তোমরা মুমিন হলে আল্লাহকে ভয় করো,” আর তারা বলল, তারা চায় তাদের অন্তর প্রশান্ত হোক (5:112-113)। তিনি দোয়া করলেন যেন তা উৎসব ও নিদর্শন হয়। আল্লাহ জানালেন, তিনি তা নাযিল করবেন, তবে এরপর যে অবিশ্বাস করবে তাকে এমন শাস্তি দেবেন যা আর কাউকে দেওয়া হয়নি (5:114-115)।" },
        ],
      },
      {
        h: { en: "What Was Not Done to Him", bn: "তাঁর সাথে যা করা হয়নি" },
        p: [
          { en: "About the end of his earthly life the Quran is explicit, and Muslims hold this as a matter of revelation: they did not kill him, nor did they crucify him, but it was made to appear so to them; those who differ are in doubt, following assumption; they certainly did not kill him (4:157). Rather, Allah raised him to Himself (4:158).",
            bn: "তাঁর পার্থিব জীবনের পরিসমাপ্তি সম্পর্কে কুরআন স্পষ্ট, আর মুসলিমরা এটিকে ওহির বিষয় হিসেবে গ্রহণ করে: তারা তাঁকে হত্যা করেনি, শূলেও চড়ায়নি, বরং তাদের কাছে তেমনই মনে হয়েছিল; যারা এ নিয়ে মতভেদ করে তারা সংশয়ে রয়েছে, ধারণার অনুসরণ ছাড়া এ বিষয়ে তাদের কোনো জ্ঞান নেই; নিশ্চিতভাবে তারা তাঁকে হত্যা করেনি (4:157)। বরং আল্লাহ তাঁকে নিজের দিকে তুলে নিয়েছেন, আর আল্লাহ পরাক্রমশালী, প্রজ্ঞাময় (4:158)।" },
          { en: "This is where Islam and Christianity differ most plainly, and the difference is best stated without heat. The concern of the passage is that a servant of Allah was not defeated by a plot: Allah told him He would take him, raise him, and purify him from those who disbelieved (3:55). The People of the Scripture will believe in him before his death (4:159).",
            bn: "এখানেই ইসলাম ও খ্রিস্টধর্মের পার্থক্য সবচেয়ে স্পষ্ট, আর এই পার্থক্য উত্তেজনা ছাড়াই বলা উত্তম। এই অনুচ্ছেদে কুরআনের মূল বক্তব্য হলো, আল্লাহর এক বান্দা কোনো ষড়যন্ত্রে পরাভূত হননি: আল্লাহ তাঁকে জানিয়েছিলেন যে তিনি তাঁকে গ্রহণ করবেন, নিজের দিকে তুলে নেবেন এবং অবিশ্বাসীদের থেকে পবিত্র করবেন (3:55)। কুরআন আরও জানায়, কিতাবিদের প্রত্যেকেই তার মৃত্যুর আগে তাঁর ওপর ঈমান আনবে, আর কিয়ামতের দিন তিনি তাদের বিরুদ্ধে সাক্ষী হবেন (4:159)।" },
        ],
      },
      {
        h: { en: "Servant and Messenger", bn: "বান্দা ও রাসূল" },
        p: [
          { en: "Surah Maryam closes his account with a sentence of great weight: that is Isa son of Maryam — the word of truth about which they are in dispute; it is not for Allah to take a son; exalted is He (19:34-35). Surah al-Ma'idah puts it in human terms: the Messiah was no more than a messenger, and his mother a woman of truth — they both used to eat food (5:75).",
            bn: "সূরা মারইয়াম তাঁর বৃত্তান্ত শেষ করে অত্যন্ত ভারী এক বাক্যে: এই হলেন মারইয়ামের পুত্র ঈসা — সেই সত্য বাণী, যা নিয়ে তারা বিতর্ক করে; আল্লাহর জন্য শোভনীয় নয় যে তিনি কোনো সন্তান গ্রহণ করবেন; তিনি পবিত্র মহান (19:34-35)। সূরা আল-মায়িদা একই শিক্ষা দেয় মানবিক ভাষায়: মসীহ একজন রাসূল ছাড়া আর কিছু নন, আর তাঁর মা ছিলেন সত্যনিষ্ঠ নারী — তাঁরা উভয়েই খাবার খেতেন (5:75)।" },
          { en: "The Quran records his answer on the Day of Resurrection, asked whether he told people to take him and his mother as gods: “Glory be to You; it was not for me to say what I had no right to say... I said nothing except what You commanded me: worship Allah, my Lord and your Lord” (5:116-117). The comparison offered is with Adam, created from dust by the word “Be” (3:59). He announced a messenger to come after him named Ahmad (61:6), and his coming is knowledge of the Hour (43:61).",
            bn: "কুরআন কিয়ামতের দিন তাঁর নিজের উত্তরটিও লিপিবদ্ধ করে, যখন জিজ্ঞেস করা হবে তিনি কি মানুষকে বলেছিলেন আল্লাহ ছাড়া তাঁকে ও তাঁর মাকে উপাস্য বানাতে: “আপনি পবিত্র! যা বলার অধিকার আমার নেই তা বলা আমার শোভা পায় না... আমি তাদের কেবল তা-ই বলেছি যা আপনি আমাকে আদেশ করেছেন: আল্লাহর ইবাদত করো, যিনি আমার প্রভু ও তোমাদের প্রভু” (5:116-117)। কুরআন তুলনা টানে আদমের সাথে, যাঁকে মাটি থেকে “হও” বাণীতে সৃষ্টি করা হয়েছিল (3:59)। তিনি তাঁর পরে আগমনকারী আহমাদ নামের এক রাসূলের সুসংবাদ দেন (61:6), আর তাঁর নিজের আগমন কিয়ামতের জ্ঞান (43:61)।" },
        ],
      },
    ],
  },
  muhammad: {
    sections: [
      {
        h: { en: "An Orphan of Mecca", bn: "মক্কার এক এতিম" },
        p: [
          { en: "He was born in Mecca into the clan of Hashim, and his father had already died. His mother Aminah died while he was a small child, and his grandfather Abd al-Muttalib soon after; his uncle Abu Talib raised him from then on. The Quran addresses this directly years later: did He not find you an orphan and give you refuge, and find you lost and guide you (93:6-7).",
            bn: "তাঁর জন্ম মক্কায়, বনু হাশিম গোত্রে; জন্মের আগেই পিতা ইন্তেকাল করেছিলেন। শিশুকালেই মা আমিনা মারা যান, অল্পকাল পরেই দাদা আবদুল মুত্তালিবও; এরপর তাঁকে লালন করেন চাচা আবু তালিব। বহু বছর পর কুরআন সরাসরি এ প্রসঙ্গেই বলে: তিনি কি তোমাকে এতিম পেয়ে আশ্রয় দেননি, আর পথের সন্ধানহীন পেয়ে পথ দেখাননি (93:6-7)।" },
          { en: "Long before prophethood, Mecca called him al-Amin, the trustworthy. Ibn Hisham records the incident that gave the title its reputation: when the Quraysh rebuilt the Ka'bah and the clans nearly fought over who would set the Black Stone, he laid it on a cloak, had a man from each clan lift an edge, and set the stone himself.",
            bn: "নবুয়তের বহু আগেই মক্কা তাঁকে ডাকত আল-আমিন, বিশ্বস্ত। ইবনে হিশাম সেই ঘটনার বর্ণনা দেন, যা এই উপাধিকে খ্যাতি দিয়েছিল: কুরাইশ যখন কাবা পুনর্নির্মাণ করছিল এবং হাজরে আসওয়াদ কে স্থাপন করবে তা নিয়ে গোত্রগুলো প্রায় সংঘর্ষে জড়িয়ে পড়ছিল, তখন তিনি পাথরটি একটি চাদরের ওপর রাখলেন, প্রতিটি গোত্রের একজনকে চাদরের এক প্রান্ত ধরালেন, তারপর নিজ হাতে পাথরটি বসালেন।" },
        ],
      },
      {
        h: { en: "Hira and the First Revelation", bn: "হেরা ও প্রথম ওহি" },
        p: [
          { en: "He used to withdraw to the cave of Hira to worship alone, and there, at about forty, the angel came with the command: “Read in the name of your Lord who created — created man from a clinging clot. Read, and your Lord is the most Generous, who taught by the pen, taught man what he did not know” (96:1-5). He returned home shaking, and Khadijah (RA) covered him and reassured him.",
            bn: "তিনি একাকী ইবাদতের জন্য হেরা গুহায় গিয়ে অবস্থান করতেন, আর প্রায় চল্লিশ বছর বয়সে সেখানেই ফেরেশতা এসে আদেশ দেন: “পড়ো তোমার প্রভুর নামে, যিনি সৃষ্টি করেছেন — জমাট রক্ত থেকে মানুষ সৃষ্টি করেছেন। পড়ো, আর তোমার প্রভু মহামহিমান্বিত, যিনি কলমের মাধ্যমে শিক্ষা দিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না” (96:1-5)। তিনি কাঁপতে কাঁপতে ঘরে ফেরেন, আর খাদিজা (রাঃ) তাঁকে চাদরে ঢেকে দেন।" },
          { en: "Her words, preserved in Sahih al-Bukhari, were an argument rather than mere comfort: Allah would never disgrace him, for he kept ties of kinship, carried the burdens of the weak, and helped the afflicted. She took him to her cousin Waraqah ibn Nawfal, who heard the account from him directly and recognised the angel as the one sent to Musa (AS). Then came the second call: “O you who covers himself, arise and warn” (74:1-2).",
            bn: "সহিহ বুখারিতে সংরক্ষিত তাঁর কথাগুলো ছিল নিছক সান্ত্বনা নয়, বরং এক যুক্তি: আল্লাহ কখনো তাঁকে লাঞ্ছিত করবেন না, কারণ তিনি আত্মীয়তার বন্ধন রক্ষা করেন, দুর্বলের ভার বহন করেন এবং বিপদগ্রস্তকে সাহায্য করেন। তিনি তাঁকে নিয়ে যান নিজের চাচাতো ভাই ওয়ারাকা ইবনে নাওফালের কাছে, যিনি ঘটনাটি তাঁর নিজ মুখে সরাসরি শুনে ফেরেশতাকে চিনতে পারেন — ইনি সেই ফেরেশতা, যাঁকে মুসার (আঃ) কাছে পাঠানো হয়েছিল। এরপর এলো দ্বিতীয় আহ্বান: “হে বস্ত্রাবৃত, ওঠো এবং সতর্ক করো” (74:1-2)।" },
        ],
      },
      {
        h: { en: "Thirteen Years Under Pressure", bn: "চাপের ভেতরে তেরো বছর" },
        p: [
          { en: "When he was ordered to warn his nearest kindred (26:214), the opposition turned personal. The weak among the believers were tortured — Bilal and the family of Sumayyah among them, as Ibn Hisham and Ibn Sa'd record — and a group migrated to Abyssinia. His own clan was placed under a boycott in the valley until it collapsed under its own injustice.",
            bn: "যখন তাঁকে নিকটাত্মীয়দের সতর্ক করার আদেশ দেওয়া হলো (26:214), বিরোধিতা হয়ে উঠল ব্যক্তিগত। মুমিনদের মধ্যে দুর্বলদের ওপর নেমে এলো নির্যাতন — ইবনে হিশাম ও ইবনে সাদের বর্ণনামতে তাদের মধ্যে ছিলেন বিলাল ও সুমাইয়ার পরিবার — আর একটি দল আবিসিনিয়ায় হিজরত করে। তাঁর নিজের গোত্রকে উপত্যকায় বয়কটের মধ্যে ফেলা হয়, যতক্ষণ না সেই অন্যায় নিজেরই ভারে ভেঙে পড়ে।" },
          { en: "Then Khadijah (RA) and Abu Talib died in the same period, and he went to Ta'if seeking support and was driven out. Sahih al-Bukhari and Sahih Muslim record what followed: the angel of the mountains offered to crush the town, and he refused, hoping Allah would bring from their descendants people who worship Him alone.",
            bn: "এরপর একই সময়কালে খাদিজা (রাঃ) ও আবু তালিব ইন্তেকাল করেন, আর তিনি সাহায্যের আশায় তায়েফে যান, সেখান থেকেও বিতাড়িত হন। সহিহ বুখারি ও সহিহ মুসলিম বর্ণনা করে এরপর কী ঘটেছিল: পাহাড়ের ফেরেশতা প্রস্তাব দেন জনপদটিকে পিষে দেওয়ার, আর তিনি তা প্রত্যাখ্যান করে বলেন, তিনি আশা করেন আল্লাহ তাদের বংশধর থেকে এমন মানুষ বের করবেন যারা কেবল তাঁরই ইবাদত করবে।" },
        ],
      },
      {
        h: { en: "The Night Journey and the Hijrah", bn: "রাত্রিভ্রমণ ও হিজরত" },
        p: [
          { en: "In that period of loss came the Night Journey: exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs (17:1). Surah an-Najm describes what he was shown at the furthest limit (53:13-18). The five daily prayers were made obligatory that night.",
            bn: "সেই ক্ষতির সময়েই এলো রাত্রিভ্রমণ: পবিত্র মহান তিনি, যিনি তাঁর বান্দাকে রাতে মসজিদুল হারাম থেকে মসজিদুল আকসায় নিয়ে গিয়েছিলেন, যার চারপাশ আমি বরকতময় করেছি, যেন তাঁকে আমার নিদর্শনাবলি দেখাই (17:1)। সূরা আন-নাজম বর্ণনা করে চূড়ান্ত সীমায় তাঁকে যা দেখানো হয়েছিল (53:13-18)। সেই রাতেই পাঁচ ওয়াক্ত সালাত ফরজ হয়।" },
          { en: "Pledges from the people of Yathrib opened a way out, and the believers migrated. He left last, with Abu Bakr (RA), and the Quran recalls the cave where the two were hidden and the words spoken there: do not grieve; indeed Allah is with us (9:40). Yathrib became al-Madinah, and the Islamic calendar counts from that departure, not from any victory.",
            bn: "ইয়াসরিবের লোকদের বাইআত বেরিয়ে যাওয়ার পথ খুলে দিল, আর মুমিনরা হিজরত করলেন। তিনি বের হলেন সবার শেষে, আবু বকর (রাঃ)-কে সঙ্গে নিয়ে; কুরআন স্মরণ করিয়ে দেয় সেই গুহার কথা এবং সেখানে বলা কথাটিও: দুঃখ করো না, নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন (9:40)। ইয়াসরিব হলো আল-মদিনা, আর ইসলামের বর্ষপঞ্জি গণনা করা হলো কোনো বিজয় থেকে নয়, সেই যাত্রা থেকেই।" },
        ],
      },
      {
        h: { en: "Brotherhood and Charter", bn: "ভ্রাতৃত্ব ও সনদ" },
        p: [
          { en: "In Madinah he built a mosque and then rebuilt a society. He paired each Muhajir with an Ansari in formal brotherhood, and the Quran later praised the hosts: they love those who emigrated to them and find in their hearts no want of what they were given, preferring others over themselves even in poverty (59:9).",
            bn: "মদিনায় তিনি প্রথমে একটি মসজিদ গড়লেন, তারপর গড়লেন একটি সমাজ। প্রত্যেক মুহাজিরকে তিনি একজন আনসারির সাথে আনুষ্ঠানিক ভ্রাতৃত্বে যুক্ত করলেন, আর কুরআন পরে আতিথেয়দের প্রশংসা করল: তারা তাদের কাছে হিজরতকারীদের ভালোবাসে, তাদের যা দেওয়া হয়েছে তার জন্য অন্তরে কোনো ঈর্ষা রাখে না, বরং নিজেদের অভাবের মধ্যেও অন্যদের অগ্রাধিকার দেয় (59:9)।" },
          { en: "He then issued the document Ibn Hisham preserves as the Sahifah — the charter of Madinah — binding the Muhajirun, the Ansar and the Jewish tribes into one political community, with mutual defence, shared costs, freedom of religion, and disputes referred to the Prophet ﷺ. It is the earliest constitution of the Muslim state, governing a plural city rather than trying to remove it.",
            bn: "এরপর তিনি জারি করলেন সেই দলিল, যাকে ইবনে হিশাম সংরক্ষণ করেছেন ‘সহিফা’ নামে — মদিনার সনদ — যা মুহাজির, আনসার ও ইহুদি গোত্রগুলোকে এক রাজনৈতিক সম্প্রদায়ে বাঁধল: পারস্পরিক প্রতিরক্ষা, যৌথ ব্যয়ভার, ধর্মীয় স্বাধীনতা এবং বিরোধের ক্ষেত্রে নবী ﷺ-এর কাছে ফয়সালা। এটিই মুসলিম রাষ্ট্রের প্রাচীনতম সংবিধান, আর এটি এক বহুত্ববাদী নগরকে অপসারণের চেষ্টা না করে ন্যায়ের সাথে পরিচালনা করে।" },
        ],
      },
      {
        h: { en: "Badr, Uhud, the Trench, Hudaybiyah", bn: "বদর, উহুদ, খন্দক, হুদাইবিয়া" },
        p: [
          { en: "At Badr a small, poorly equipped force was given victory, and the Quran ties the lesson to gratitude: Allah had already given you victory at Badr while you were few (3:123). At Uhud the same army suffered reverses after archers left their post, and the Quran analyses the defeat frankly (3:152). At the Trench, eyes shifted and hearts reached the throats (33:10).",
            bn: "বদরে এক ক্ষুদ্র ও স্বল্প-সজ্জিত বাহিনীকে বিজয় দান করা হলো, আর কুরআন শিক্ষাটিকে বেঁধে দিল কৃতজ্ঞতার সাথে: আল্লাহ তো বদরে তোমাদের সাহায্য করেছেন যখন তোমরা ছিলে দুর্বল (3:123)। উহুদে সেই একই বাহিনী বিপর্যয়ের মুখে পড়ল, যখন তিরন্দাজরা তাদের অবস্থান ছেড়ে দিল; কুরআন পরাজয়কে আড়াল না করে সরাসরি বিশ্লেষণ করল (3:152)। খন্দকে অবরোধের সময় দৃষ্টি বিভ্রান্ত হয়ে সরে গেল ও প্রাণ কণ্ঠাগত হলো (33:10)।" },
          { en: "Then came Hudaybiyah, where he accepted terms his companions found painful — a delayed pilgrimage, clauses that looked one-sided — and the revelation that followed called it what it was: indeed We have given you a clear victory (48:1). The following year the dream that preceded it was fulfilled and the sanctuary was entered in security (48:27).",
            bn: "এরপর এলো হুদাইবিয়া, যেখানে তিনি এমন শর্ত মেনে নিলেন যা তাঁর সঙ্গীদের কাছেও কষ্টকর ঠেকেছিল — উমরা পিছিয়ে দেওয়া, একপেশে মনে হওয়া ধারা — আর এরপর নাযিল হওয়া ওহি তাকে যা ছিল তা-ই বলল: নিশ্চয়ই আমি তোমাকে সুস্পষ্ট বিজয় দান করেছি (48:1)। পরের বছরই তার পূর্ববর্তী স্বপ্নটি সত্য হলো এবং নিরাপত্তার সাথে পবিত্র ঘরে প্রবেশ করা হলো (48:27)।" },
        ],
      },
      {
        h: { en: "The Conquest, the Farewell, the Seal", bn: "বিজয়, বিদায় ও সমাপ্তি" },
        p: [
          { en: "Mecca — the city that had tortured, boycotted and expelled him — was taken almost without bloodshed. Bukhari records that he rode in with his head bowed so low it nearly touched the saddle. He cleared the Ka'bah of its idols, reciting: truth has come and falsehood has vanished (17:81). Then, as Ibn Hisham preserves it, he told the Quraysh they were free to go. Surah an-Nasr had framed the moment as a call to praise and seek forgiveness (110:1-3).",
            bn: "মক্কায় প্রবেশের দিন যে নগর তাঁকে নির্যাতন করেছিল, বয়কট করেছিল ও বিতাড়িত করেছিল, তা প্রায় রক্তপাতহীনভাবেই বিজিত হলো। বুখারি বর্ণনা করেন, তিনি এতটা মাথা নত করে প্রবেশ করেছিলেন যে তা প্রায় বাহনের গদি স্পর্শ করছিল। তিনি কাবাকে মূর্তিমুক্ত করলেন, আর তিলাওয়াত করলেন: সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে (17:81)। এরপর, ইবনে হিশামের ভাষ্যে, তিনি কুরাইশকে বললেন তারা মুক্ত। সূরা আন-নাসর এই মুহূর্তকে চিহ্নিত করে রেখেছিল প্রশংসা ও ক্ষমাপ্রার্থনার আহ্বান হিসেবে (110:1-3)।" },
          { en: "At the Farewell Pilgrimage he addressed the largest gathering of his life. Sahih Muslim preserves Jabir's (RA) account: he declared their blood and property inviolable, cancelled the blood feuds and the interest of the age of ignorance beginning with his own family, charged the people to treat women well, and left among them the Book of Allah. There came the verse: today I have perfected for you your religion (5:3).",
            bn: "বিদায় হজে তিনি ভাষণ দিলেন তাঁর জীবনের বৃহত্তম সমাবেশে। সহিহ মুসলিমে জাবির (রাঃ)-এর বর্ণনা সংরক্ষিত: তিনি ঘোষণা করলেন তাদের রক্ত ও সম্পদ অলঙ্ঘনীয়, জাহেলি যুগের রক্তের প্রতিশোধ ও সুদ বাতিল করলেন — শুরু করলেন নিজের পরিবারের পাওনা দিয়েই, নারীদের সাথে সদাচরণের নির্দেশ দিলেন, আর তাদের মধ্যে রেখে গেলেন আল্লাহর কিতাব। সেখানেই নাযিল হলো আয়াত: আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম (5:3)।" },
          { en: "He died in Madinah not long after, and Abu Bakr (RA) steadied the community by reciting 3:144 — Muhammad is a messenger, and messengers have passed away before him. Two verses hold his place: he is not the father of any of your men, but the Messenger of Allah and the seal of the prophets (33:40); and We have not sent you except as a mercy to the worlds (21:107).",
            bn: "অল্পকাল পরেই তিনি মদিনায় ইন্তেকাল করেন, আর আবু বকর (রাঃ) 3:144 তিলাওয়াত করে সম্প্রদায়কে স্থির করেন — মুহাম্মাদ একজন রাসূল, তাঁর আগেও রাসূলগণ অতিবাহিত হয়েছেন। দুটি আয়াত তাঁর অবস্থান নির্ধারণ করে: তিনি তোমাদের কোনো পুরুষের পিতা নন, বরং আল্লাহর রাসূল ও নবীগণের সমাপ্তিকারী (33:40); আর আমি তোমাকে সমগ্র জগতের জন্য রহমত হিসেবেই পাঠিয়েছি (21:107)।" },
        ],
      },
    ],
  },
  yaqub: {
    sections: [
      {
        h: { en: "The Middle of the Chain", bn: "বংশধারার মধ্যবিন্দু" },
        p: [
          {
            en: "Ya'qub (AS) stands in the middle of a chain the Quran names again and again. He was the son of Ishaq and the grandson of Ibrahim, and the Book presents him as a gift announced in advance: 21:72 says Allah gave Ibrahim both Ishaq and Ya'qub in addition, and 29:27 says He placed prophethood and the Scripture among his descendants. 19:49 records that He made each of them a prophet.",
            bn: "ইয়াকুব (আঃ) সেই বংশধারার মাঝখানে দাঁড়িয়ে আছেন যাঁদের নাম কুরআন বারবার উচ্চারণ করে। তিনি ইসহাকের পুত্র ও ইবরাহীমের পৌত্র, আর কুরআন তাঁকে আগেভাগে ঘোষিত এক দান হিসেবে উপস্থাপন করে: 21:72 বলে আল্লাহ ইবরাহীমকে ইসহাক ও অতিরিক্ত হিসেবে ইয়াকুব দান করেন, আর 29:27 বলে তিনি তাঁর বংশধরদের মধ্যে নবুয়ত ও কিতাব রেখেছেন। 19:49 জানায়, তিনি তাঁদের প্রত্যেককেই নবী করেছেন।",
          },
          {
            en: "He is also called Israel, and the sons of his household became the tribes the Quran addresses through the rest of the Book as the Children of Israel. 2:136 teaches the believers to affirm what was revealed to Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants, making no distinction between them, and 6:84 counts him among those Allah guided. Yet his own life is told mostly through the loss of a single son.",
            bn: "তাঁকে ইসরাঈলও বলা হয়, আর তাঁর ঘরের পুত্রদের থেকেই সেই গোত্রগুলো এসেছে যাদের কুরআন বাকি গ্রন্থজুড়ে বনী ইসরাঈল বলে সম্বোধন করে। 2:136 মুমিনদের শেখায় ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁদের বংশধরদের প্রতি যা নাযিল হয়েছে সবই স্বীকার করতে, কারও মধ্যে পার্থক্য না করে; আর 6:84 তাঁকে গণনা করে আল্লাহর হিদায়াতপ্রাপ্তদের মধ্যে। তবু তাঁর নিজের জীবনকাহিনি বলা হয়েছে মূলত এক পুত্রকে হারানোর ভেতর দিয়ে।",
          },
        ],
      },
      {
        h: { en: "The Father Who Read a Dream", bn: "স্বপ্ন-পাঠকারী পিতা" },
        p: [
          {
            en: "Sura Yusuf opens inside his house. A boy comes to his father with a dream of eleven stars and the sun and the moon prostrating to him (12:4). Ya'qub neither dismisses it nor celebrates it. He tells the boy not to relate the vision to his brothers, warning that Satan is a clear enemy to man (12:5), then reads the dream in a sentence: his Lord would choose Yusuf, teach him the interpretation of narratives, and complete His favour upon the family of Ya'qub (12:6).",
            bn: "সূরা ইউসুফ শুরু হয় তাঁরই ঘরে। এক বালক পিতার কাছে এসে স্বপ্নের কথা বলে — এগারোটি তারা, সূর্য ও চাঁদ তাকে সিজদা করছে (12:4)। ইয়াকুব তা উড়িয়েও দেন না, উৎসবও করেন না। তিনি বালককে বলেন স্বপ্নটি ভাইদের কাছে বর্ণনা না করতে, সতর্ক করেন যে শয়তান মানুষের প্রকাশ্য শত্রু (12:5), এরপর এক বাক্যেই স্বপ্নের পাঠ খুলে দেন: তাঁর প্রভু ইউসুফকে মনোনীত করবেন, কথার ব্যাখ্যা শেখাবেন এবং ইয়াকুব-পরিবারের ওপর তাঁর নিয়ামত পূর্ণ করবেন (12:6)।",
          },
          {
            en: "That is a prophet's insight and a father's realism at once. He knew what jealousy could do inside his own home; 12:8 records the brothers complaining that Yusuf and his brother were dearer to their father than they were. When they asked to take the boy out to play, he answered that their taking him away grieved him and that he feared a wolf would eat him while they were heedless (12:11-13).",
            bn: "এ একই সঙ্গে নবীর অন্তর্দৃষ্টি ও পিতার বাস্তববোধ। নিজের ঘরের ভেতর হিংসা কী করতে পারে তা তিনি জানতেন; 12:8 আয়াতে ভাইদের অভিযোগ লিপিবদ্ধ — ইউসুফ ও তার সহোদর পিতার কাছে তাদের চেয়ে প্রিয়। তারা যখন বালকটিকে খেলতে নিয়ে যেতে চায়, তিনি বলেন তাকে নিয়ে যাওয়া তাঁকে কষ্ট দেয় এবং তিনি আশঙ্কা করেন তারা অমনোযোগী থাকতে নেকড়ে তাকে খেয়ে ফেলবে (12:11-13)।",
          },
        ],
      },
      {
        h: { en: "Beautiful Patience", bn: "সুন্দর ধৈর্য" },
        p: [
          {
            en: "They came back at nightfall weeping, with his shirt stained by false blood (12:16-18). His reply became one of the most quoted sentences in the Quran: rather, your souls have enticed you to something, so beautiful patience — and Allah is the One whose help is sought against what you describe (12:18). Sabr jamil is patience with no complaint poured out before people, which is why the sentence turns past his sons and addresses Allah.",
            bn: "তারা রাতের বেলা কাঁদতে কাঁদতে ফেরে, সঙ্গে মিথ্যা রক্তমাখা জামা (12:16-18)। তাঁর জবাব কুরআনের সর্বাধিক উদ্ধৃত বাক্যগুলোর একটি: বরং তোমাদের মন তোমাদের জন্য একটি বিষয় সাজিয়ে দিয়েছে, সুতরাং সুন্দর ধৈর্যই শ্রেয় — আর তোমরা যা বর্ণনা করছ তার বিরুদ্ধে আল্লাহই সাহায্যস্থল (12:18)। সবরে জামীল মানে এমন ধৈর্য যার অভিযোগ মানুষের সামনে ঢালা হয় না — তাই বাক্যটি পুত্রদের পেরিয়ে সরাসরি আল্লাহকে সম্বোধন করে।",
          },
          {
            en: "Years later the same composure returns. Asked to send Binyamin, he says he will not trust them with him as he trusted them with his brother before, then adds at once that Allah is the best guardian and the most merciful of the merciful (12:64). Sending them at last, he advises them to enter by separate gates and corrects himself so the advice is not mistaken for control: the decision belongs to Allah alone (12:67).",
            bn: "বছর পেরিয়ে সেই একই স্থৈর্য ফিরে আসে। বিনইয়ামিনকে পাঠাতে বলা হলে তিনি বলেন, আগে তার ভাইয়ের ব্যাপারে যেমন ভরসা করেছিলাম তেমন ভরসা তোমাদের ওপর করব না; সঙ্গে সঙ্গে যোগ করেন, আল্লাহই সর্বোত্তম রক্ষক এবং তিনিই সর্বাধিক দয়ালু (12:64)। শেষমেশ পাঠানোর সময় তিনি আলাদা আলাদা দরজা দিয়ে প্রবেশের পরামর্শ দেন এবং নিজেই স্পষ্ট করেন যেন পরামর্শকে নিয়ন্ত্রণ ভাবা না হয়: ফায়সালা কেবল আল্লাহরই (12:67)।",
          },
        ],
      },
      {
        h: { en: "Grief Without Despair", bn: "নিরাশাহীন শোক" },
        p: [
          {
            en: "When Binyamin too was kept back in Egypt, he turned away from his sons and said, oh my sorrow over Yusuf — and his eyes turned white from grief, and he was suppressing it (12:84). His sons told him he would not stop remembering Yusuf until he was fatally ill or dead (12:85). His answer draws the line between grief and complaint: I complain of my anguish and my sorrow only to Allah, and I know from Allah what you do not know (12:86).",
            bn: "বিনইয়ামিনকেও যখন মিশরে আটকে রাখা হয়, তিনি পুত্রদের থেকে মুখ ফিরিয়ে বলেন, হায় ইউসুফের জন্য আমার আফসোস — আর শোকে তাঁর চোখ সাদা হয়ে যায়, তবু তিনি তা চেপে রাখেন (12:84)। পুত্ররা বলে, আপনি ইউসুফের স্মরণ ছাড়বেন না যতক্ষণ না মৃত্যুপথযাত্রী হন বা মারা যান (12:85)। তাঁর জবাব শোক ও অভিযোগের মাঝে রেখা টেনে দেয়: আমি আমার দুঃখ ও শোকের অভিযোগ কেবল আল্লাহর কাছেই করি, আর আল্লাহর পক্ষ থেকে আমি তা জানি যা তোমরা জানো না (12:86)।",
          },
          {
            en: "Then he sent them back with an instruction that is itself a creed: go and seek news of Yusuf and his brother, and do not despair of the mercy of Allah, for none despairs of Allah's mercy except the disbelieving people (12:87). Despair is placed on the far side of faith. A man who had wept for decades was still telling his sons the door stood open, because he had never treated the loss as final.",
            bn: "এরপর তিনি তাদের ফেরত পাঠান এমন এক নির্দেশ দিয়ে যা নিজেই একটি আকিদা: যাও, ইউসুফ ও তার ভাইয়ের খোঁজ করো, আর আল্লাহর রহমত থেকে নিরাশ হয়ো না; কারণ কাফির সম্প্রদায় ছাড়া কেউ আল্লাহর রহমত থেকে নিরাশ হয় না (12:87)। নিরাশাকে ঈমানের সীমার বাইরে রাখা হয়েছে। যে মানুষটি যুগ যুগ কেঁদেছেন, তিনিই পুত্রদের বলছেন দরজা খোলা আছে — কারণ ক্ষতিকে তিনি কখনো চূড়ান্ত বলে মেনে নেননি।",
          },
        ],
      },
      {
        h: { en: "The Scent of the Shirt", bn: "জামার ঘ্রাণ" },
        p: [
          {
            en: "As the caravan left Egypt he said he could sense the scent of Yusuf, and his household told him he was in his old error (12:94-95). When the bearer of good news arrived and cast the shirt over his face, his sight returned, and he said: did I not tell you that I know from Allah what you do not know (12:96)? The claim he had made in the depth of grief was verified in relief, in the same words.",
            bn: "কাফেলা মিশর ছাড়তেই তিনি বলেন, আমি ইউসুফের ঘ্রাণ পাচ্ছি; ঘরের লোকেরা বলে, আপনি তো পুরোনো ভ্রান্তিতেই আছেন (12:94-95)। সুসংবাদদাতা এসে যখন জামাটি তাঁর মুখে রাখে, তাঁর দৃষ্টি ফিরে আসে এবং তিনি বলেন: আমি কি তোমাদের বলিনি, আল্লাহর পক্ষ থেকে আমি তা জানি যা তোমরা জানো না (12:96)? শোকের গভীরে করা দাবিটি স্বস্তির মুহূর্তে হুবহু একই শব্দে সত্য প্রমাণিত হয়।",
          },
          {
            en: "His sons asked him to seek forgiveness for them, and he promised to ask his Lord's forgiveness for them (12:97-98). The family travelled to Egypt, Yusuf raised his parents onto the throne, and they fell before him in prostration, and Yusuf said his Lord had made his old dream come true (12:99-100). What Ya'qub had understood in a single verse decades earlier arrived exactly as he had read it.",
            bn: "পুত্ররা তাঁকে তাদের জন্য ক্ষমা প্রার্থনা করতে বলে, আর তিনি প্রতিশ্রুতি দেন তিনি তাঁর প্রভুর কাছে তাদের জন্য ক্ষমা চাইবেন (12:97-98)। পরিবার মিশরে যাত্রা করে, ইউসুফ পিতামাতাকে সিংহাসনে বসান, সবাই তাঁর সামনে সিজদায় লুটিয়ে পড়ে, আর ইউসুফ বলেন তাঁর প্রভু তাঁর পুরোনো স্বপ্নকে সত্যে পরিণত করেছেন (12:99-100)। কয়েক দশক আগে ইয়াকুব একটিমাত্র আয়াতে যা বুঝেছিলেন, তা ঠিক তাঁর পাঠ অনুযায়ীই এসে পৌঁছাল।",
          },
        ],
      },
      {
        h: { en: "The Charge at the End", bn: "শেষ ওসিয়ত" },
        p: [
          {
            en: "The Quran does not close his account with a scene of loss. It closes with a question. Ibrahim charged his sons with this, and so did Ya'qub: my sons, Allah has chosen for you this religion, so do not die except as Muslims (2:132). Then comes the scene itself — were you witnesses when death approached Ya'qub, when he said to his sons, what will you worship after me (2:133)?",
            bn: "কুরআন তাঁর বৃত্তান্ত কোনো শোকদৃশ্য দিয়ে শেষ করে না; শেষ করে একটি প্রশ্ন দিয়ে। ইবরাহীম তাঁর পুত্রদের এ ওসিয়ত করেন, ইয়াকুবও করেন: হে আমার পুত্ররা, আল্লাহ তোমাদের জন্য এই দ্বীন মনোনীত করেছেন, সুতরাং মুসলিম না হয়ে মরো না (2:132)। এরপর আসে দৃশ্যটি — তোমরা কি উপস্থিত ছিলে যখন ইয়াকুবের মৃত্যু ঘনিয়ে এল, যখন তিনি পুত্রদের বললেন, আমার পরে তোমরা কার ইবাদত করবে (2:133)?",
          },
          {
            en: "Their answer was that they would worship the God of their father and of his fathers Ibrahim, Isma'il and Ishaq — one God, and to Him they submit (2:133). A man who had lost a son and found him again spent his last strength not on property, and not on the inheritance of twelve tribes, but on whether they would keep tawhid after him. That, and not the reunion in Egypt, is where the Quran leaves him.",
            bn: "তাদের জবাব ছিল, তারা ইবাদত করবে তাদের পিতার ও তাঁর পূর্বপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহের — একক ইলাহ, আর তাঁরই কাছে তারা আত্মসমর্পিত (2:133)। যে মানুষটি এক পুত্রকে হারিয়ে আবার ফিরে পেয়েছিলেন, তিনি শেষ শক্তিটুকু ব্যয় করলেন সম্পত্তিতে নয়, বারো গোত্রের উত্তরাধিকারেও নয়, বরং তাঁর পরে তারা তাওহিদ ধরে রাখবে কি না তাতে। মিশরের পুনর্মিলন নয়, এখানেই কুরআন তাঁকে রেখে যায়।",
          },
        ],
      },
    ],
  },
  yusuf: {
    sections: [
      {
        h: { en: "The Best of Stories", bn: "সর্বোত্তম কাহিনি" },
        p: [
          {
            en: "Alone among the prophets, Yusuf (AS) is given one continuous surah from beginning to end. Allah calls it the best of stories, related through what He revealed of this Quran (12:3), and closes it by saying that in the accounts of the messengers is a lesson for people of understanding (12:111). Every turn in it rests on a choice about honesty, desire, envy or trust.",
            bn: "নবীদের মধ্যে কেবল ইউসুফ (আঃ)-কেই শুরু থেকে শেষ পর্যন্ত একটি অখণ্ড সূরা দেওয়া হয়েছে। আল্লাহ একে বলেন সর্বোত্তম কাহিনি, যা তিনি এই কুরআনের ওহির মাধ্যমে বর্ণনা করেছেন (12:3), আর শেষ করেন এ কথা বলে যে রাসূলদের বৃত্তান্তে বোধসম্পন্ন মানুষের জন্য শিক্ষা রয়েছে (12:111)। কাহিনির প্রতিটি মোড় ঘোরে সততা, কামনা, হিংসা কিংবা ভরসা নিয়ে নেওয়া কোনো এক সিদ্ধান্তের ওপর।",
          },
          {
            en: "He was the son of Ya'qub, son of Ishaq, son of Ibrahim, and in a narration recorded by al-Bukhari the Prophet ﷺ called him the noble son of the noble son of the noble son of the noble. The story opens with a boy's dream of eleven stars, the sun and the moon prostrating (12:4), and a father's warning to keep it hidden (12:5).",
            bn: "তিনি ইয়াকুবের পুত্র, ইয়াকুব ইসহাকের পুত্র, ইসহাক ইবরাহীমের পুত্র — বুখারিতে লিপিবদ্ধ এক বর্ণনায় নবী ﷺ ঠিক এভাবেই তাঁকে বর্ণনা করেছেন: সম্ভ্রান্তের পুত্র সম্ভ্রান্ত, তাঁরও পুত্র সম্ভ্রান্ত, তাঁরও পুত্র সম্ভ্রান্ত। কাহিনির সূচনা এক বালকের স্বপ্ন দিয়ে — এগারোটি তারা, সূর্য ও চাঁদ সিজদা করছে (12:4) — আর পিতার সতর্কবাণী দিয়ে, তা যেন ভাইদের না জানানো হয় (12:5)।",
          },
        ],
      },
      {
        h: { en: "The Well and the Caravan", bn: "কূপ ও কাফেলা" },
        p: [
          {
            en: "The brothers reasoned that Yusuf and his brother were dearer to their father than they were, and resolved to kill him or cast him into some land so their father's regard would be theirs alone (12:8-9). One of them proposed the compromise that saved his life: throw him into the bottom of the well, and some travellers will pick him up (12:10).",
            bn: "ভাইয়েরা হিসাব কষে দেখে, ইউসুফ ও তার সহোদর পিতার কাছে তাদের চেয়ে প্রিয়; তাই তারা ঠিক করে তাকে হত্যা করবে বা কোনো দূর দেশে ফেলে আসবে, যাতে পিতার মনোযোগ কেবল তাদেরই হয় (12:8-9)। তাদেরই একজন সেই সমঝোতা প্রস্তাব করে যা তার প্রাণ বাঁচায়: তাকে কূপের গভীরে ফেলে দাও, কোনো পথিকদল তাকে তুলে নেবে (12:10)।",
          },
          {
            en: "As they lowered him in, Allah revealed to him that he would one day tell them of this affair of theirs while they did not perceive it (12:15). From the bottom of a pit, the reader is told the boy has a future. His brothers came home with false blood on his shirt (12:18); a caravan drew him out and sold him for a paltry price, a few dirhams (12:19-20).",
            bn: "তারা যখন তাকে কূপে নামিয়ে দিচ্ছিল, আল্লাহ তার কাছে ওহি পাঠান যে একদিন সে তাদের এই কাজের কথা তাদেরই স্মরণ করিয়ে দেবে, অথচ তারা টেরও পাবে না (12:15)। কূপের তলদেশ থেকেই পাঠক জেনে যায়, বালকটির একটি ভবিষ্যৎ আছে। ভাইয়েরা জামায় মিথ্যা রক্ত মেখে ঘরে ফেরে (12:18); এক কাফেলা তাকে তুলে নেয় ও তুচ্ছ মূল্যে, গোনা কয়েক দিরহামে বিক্রি করে দেয় (12:19-20)।",
          },
        ],
      },
      {
        h: { en: "The House of al-Aziz", bn: "আজীজের ঘর" },
        p: [
          {
            en: "The Egyptian who bought him told his wife to make his stay honourable, since he might benefit them or be taken as a son — and the Quran comments that thus did We establish Yusuf in the land, to teach him the interpretation of events (12:21). At full maturity Allah gave him judgement and knowledge, the standing reward of those who do good (12:22).",
            bn: "যে মিশরীয় তাঁকে কিনেছিল সে স্ত্রীকে বলে তার থাকার ব্যবস্থা সম্মানজনক করতে, কারণ সে হয়তো উপকারে আসবে বা তারা তাকে পুত্র হিসেবে গ্রহণ করবে — আর কুরআন মন্তব্য করে, এভাবেই আমি ইউসুফকে সেই ভূমিতে প্রতিষ্ঠিত করলাম, যাতে তাকে ঘটনার ব্যাখ্যা শেখাই (12:21)। পূর্ণ যৌবনে আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দান করেন, যা সৎকর্মশীলদের জন্য নির্ধারিত প্রতিদান (12:22)।",
          },
          {
            en: "The woman of the house bolted the doors and sought to seduce him. His refusal named its reason first: I seek the refuge of Allah; he is my master who has made good my stay (12:23). The shirt tore from behind as they raced to the door, and a witness reasoned from the tear that the truth was with him (12:25-28). Allah turned evil away from His chosen servant (12:24).",
            bn: "ঘরের নারীটি দরজা বন্ধ করে তাঁকে প্রলুব্ধ করতে চায়। তাঁর প্রত্যাখ্যান প্রথমেই কারণটি উচ্চারণ করে: আমি আল্লাহর আশ্রয় চাই; তিনিই তো আমার প্রভু, যিনি আমার থাকার ব্যবস্থা উত্তম করেছেন (12:23)। তারা দরজার দিকে ছোটে, পেছন থেকে জামা ছিঁড়ে যায়, আর একজন সাক্ষী ছেঁড়ার ধরন থেকেই যুক্তি দেয় যে সত্য তাঁরই পক্ষে (12:25-28)। সূরাটি বলে, আল্লাহ তাঁর মনোনীত বান্দা থেকে মন্দ ফিরিয়ে দিয়েছেন (12:24)।",
          },
        ],
      },
      {
        h: { en: "Prison Was the Better Choice", bn: "কারাগারই ছিল শ্রেয়" },
        p: [
          {
            en: "The women of the city gossiped about her, so she gathered them, and at the sight of him they cut their hands (12:30-31). His response was a prayer rather than a boast: prison is dearer to me than what they call me to, and unless You turn their plot from me I may incline and be of the ignorant (12:33). His Lord responded to him, and prison followed (12:34-35).",
            bn: "শহরের নারীরা তাকে নিয়ে কানাঘুষা করে, তাই সে তাদের জড়ো করে, আর তাঁকে দেখে তারা নিজেদের হাত কেটে ফেলে (12:30-31)। তাঁর প্রতিক্রিয়া ছিল দোয়া, অহংকার নয়: এরা যেদিকে ডাকছে তার চেয়ে কারাগারই আমার কাছে প্রিয়; আপনি তাদের ষড়যন্ত্র না ফেরালে আমি ঝুঁকে পড়ে অজ্ঞদের অন্তর্ভুক্ত হয়ে যেতে পারি (12:33)। তাঁর প্রভু তাঁর ডাকে সাড়া দেন, এরপর আসে কারাবাস (12:34-35)।",
          },
          {
            en: "Two young men entered the prison with him and each described a dream (12:36). Before interpreting either he used the opening to teach: the knowledge was from his Lord, and he had left the religion of a people who did not believe in Allah (12:37-38). Were many separate lords better, or Allah, the One, the Prevailing? Judgement belongs to none but Allah, and that is the upright religion (12:39-40).",
            bn: "দুই যুবক তাঁর সঙ্গে কারাগারে প্রবেশ করে এবং প্রত্যেকে নিজের স্বপ্ন বর্ণনা করে (12:36)। কোনোটির ব্যাখ্যা দেওয়ার আগেই তিনি সুযোগটিকে শিক্ষায় রূপ দেন: এ জ্ঞান তাঁর প্রভুর দেওয়া, আর তিনি সেই সম্প্রদায়ের ধর্ম ত্যাগ করেছেন যারা আল্লাহতে বিশ্বাস করে না (12:37-38)। বহু বিচ্ছিন্ন প্রভু উত্তম, না এক ও পরাক্রমশালী আল্লাহ? হুকুম কেবল আল্লাহরই, আর এটাই সঠিক দ্বীন (12:39-40)।",
          },
        ],
      },
      {
        h: { en: "Seven Years, Then Seven", bn: "সাত বছর, তারপর সাত" },
        p: [
          {
            en: "He gave the two interpretations, and asked the one he judged would be saved to mention him to his master — yet he stayed in prison several years more (12:41-42). The Quran does not say how many. Then the king dreamt of seven fat cows eaten by seven lean, and seven green ears and others dry, and his court called it a confusion of dreams (12:43-44).",
            bn: "তিনি দুটি স্বপ্নেরই ব্যাখ্যা দেন, আর যাকে মুক্তিপ্রাপ্ত মনে করেছিলেন তাকে বলেন মনিবের কাছে তাঁর কথা উল্লেখ করতে — তবু তিনি আরও কয়েক বছর কারাগারেই থাকেন (12:41-42)। কত বছর, কুরআন তা বলে না। এরপর রাজা স্বপ্নে দেখেন সাতটি মোটা গাভিকে সাতটি শীর্ণ গাভি খেয়ে ফেলছে, আর সাতটি সবুজ শীষ ও অন্যগুলো শুকনো; দরবার একে বলে অলীক স্বপ্নের জট (12:43-44)।",
          },
          {
            en: "The freed prisoner remembered at last, and Yusuf answered with a policy, not merely a reading: sow seven years and leave the harvest in the ear, then seven hard years will consume what was stored, then comes a year of relief and rain (12:45-49). Summoned to the palace, he refused to leave prison until his name was cleared (12:50).",
            bn: "মুক্তিপ্রাপ্ত বন্দি অবশেষে স্মরণ করে, আর ইউসুফ কেবল ব্যাখ্যা নয়, একটি নীতিমালাও দেন: সাত বছর চাষ করো ও ফসল শীষেই রেখে দাও, এরপর সাতটি কঠিন বছর সঞ্চয় নিঃশেষ করবে, তারপর আসবে স্বস্তি ও বৃষ্টির এক বছর (12:45-49)। রাজপ্রাসাদে ডাক পেয়েও নাম নিষ্কলঙ্ক না হওয়া পর্যন্ত তিনি কারাগার ছাড়তে অস্বীকার করেন, বলেন সেই নারীদের জিজ্ঞেস করা হোক যারা নিজেদের হাত কেটেছিল (12:50)।",
          },
        ],
      },
      {
        h: { en: "A Knowing Guardian", bn: "একজন জ্ঞানী রক্ষক" },
        p: [
          {
            en: "The women testified they knew no evil of him and the wife confessed, yet he still said the soul is a persistent enjoiner of evil, except those on whom his Lord has mercy (12:51-53). Made a man of high standing, he asked for the storehouses of the land as a knowing guardian; thus was he established, and Allah does not waste the reward of the doers of good (12:54-56).",
            bn: "নারীরা সাক্ষ্য দেয়, তাঁর সম্পর্কে তারা কোনো মন্দ জানে না; স্ত্রীটি স্বীকার করে সত্য প্রকাশ পেয়েছে; তবু তিনি বলেন, মন তো মন্দের প্রবল প্ররোচনাদাতা, তবে যার প্রতি তাঁর প্রভু দয়া করেন সে ছাড়া (12:51-53)। উচ্চ মর্যাদার বিশ্বস্ত ব্যক্তি হওয়ার পর তিনি একজন জ্ঞানী রক্ষক হিসেবে দেশের ধনভাণ্ডার চেয়ে নেন, আর আল্লাহ মন্তব্য করেন: এভাবেই আমি তাকে প্রতিষ্ঠিত করলাম, আর আমি সৎকর্মশীলদের প্রতিদান নষ্ট করি না (12:54-56)।",
          },
          {
            en: "Famine brought his brothers for grain; they entered, and he knew them while they did not know him (12:58). He asked for their half-brother, and on their return took Binyamin aside to tell him privately not to grieve (12:62-69). The cup was then placed in his brother's bag — a plan, the Quran says, that Allah devised, since the king's law would not have let him keep his brother (12:70-76).",
            bn: "এরপর দুর্ভিক্ষ তাঁর ভাইদের শস্যের খোঁজে নিয়ে আসে; তারা প্রবেশ করে, তিনি তাদের চিনে ফেলেন, অথচ তারা তাঁকে চেনে না (12:58)। তিনি তাদের পণ্য গোপনে বোঝায় ফিরিয়ে দেন, বৈমাত্রেয় ভাইকে আনতে বলেন, আর পরের সফরে বিনইয়ামিনকে আড়ালে ডেকে বলেন, তারা যা করত তার জন্য দুঃখ কোরো না (12:62-69)। পানপাত্রটি রাখা হয় ভাইয়ের বোঝায় — কুরআন বলে, এ আল্লাহরই সাজানো পরিকল্পনা, কারণ রাজার আইনে তিনি ভাইকে রাখতে পারতেন না (12:70-76)।",
          },
        ],
      },
      {
        h: { en: "No Blame Upon You Today", bn: "আজ তোমাদের কোনো দোষারোপ নেই" },
        p: [
          {
            en: "When they came back in hardship, he asked whether they knew what they had done to Yusuf and his brother in their ignorance (12:88-89). They said, are you indeed Yusuf? He answered: I am Yusuf, and this is my brother; whoever fears Allah and is patient, indeed Allah does not let the reward of the doers of good be lost (12:90). It is the surah's moral, spoken by the man who lived it.",
            bn: "তারা যখন দুরবস্থায় ফিরে এসে দান প্রার্থনা করে, তিনি জিজ্ঞেস করেন, তোমরা কি জানো অজ্ঞতাবশত ইউসুফ ও তার ভাইয়ের সঙ্গে তোমরা কী করেছিলে (12:88-89)? তারা বলে, তুমিই কি ইউসুফ? তিনি বলেন: আমিই ইউসুফ, আর এ আমার ভাই; যে তাকওয়া অবলম্বন করে ও ধৈর্য ধরে, নিশ্চয়ই আল্লাহ সৎকর্মশীলদের প্রতিদান নষ্ট করেন না (12:90)। এ সূরার মূল শিক্ষা, উচ্চারণ করছেন সেই মানুষ যিনি তা যাপন করেছেন।",
          },
          {
            en: "They admitted they had been sinners, and he replied with the sentence the whole story had travelled toward: no blame upon you today; may Allah forgive you (12:92). He held every advantage of power and used none of it, sending his shirt instead to restore his father's sight (12:93). On the throne at last, with his family in prostration, he asked only to die a Muslim and be joined with the righteous (12:100-101).",
            bn: "তারা স্বীকার করে তারাই অপরাধী ছিল, আর তিনি জবাব দেন সেই বাক্যে যেদিকে গোটা কাহিনিটি এগোচ্ছিল: আজ তোমাদের কোনো দোষারোপ নেই; আল্লাহ তোমাদের ক্ষমা করুন (12:92)। ক্ষমতার সমস্ত সুবিধা হাতে থাকা সত্ত্বেও তিনি একটিও ব্যবহার করেননি; বরং পিতার দৃষ্টি ফেরাতে নিজের জামা পাঠিয়েছেন (12:93)। অবশেষে সিংহাসনে, সামনে সিজদারত পরিবার নিয়ে, তিনি কেবল চাইলেন মুসলিম হিসেবে মৃত্যু ও সৎকর্মশীলদের সঙ্গে মিলিত হওয়া (12:100-101)।",
          },
        ],
      },
    ],
  },
  ayyub: {
    sections: [
      {
        h: { en: "A Prophet Under Trial", bn: "পরীক্ষার মুখে এক নবী" },
        p: [
          {
            en: "Ayyub (AS) belongs to the line of prophets Allah names in 4:163 as those He inspired, and 6:84 places him among those He guided together with Dawud, Sulayman, Yusuf and Harun. He is not, then, a figure on the margins. Yet the Quran devotes only two short passages to him, 21:83-84 and 38:41-44, and both are about one thing: what a servant of Allah does when everything is taken away.",
            bn: "আইয়ুব (আঃ) সেই নবীদের ধারার অন্তর্ভুক্ত যাঁদের কথা আল্লাহ 4:163 আয়াতে বলেন — যাঁদের প্রতি তিনি ওহি পাঠিয়েছেন; আর 6:84 তাঁকে দাউদ, সুলাইমান, ইউসুফ ও হারুনের সঙ্গে হিদায়াতপ্রাপ্তদের মধ্যে রাখে। সুতরাং তিনি প্রান্তিক কোনো চরিত্র নন। তবু কুরআন তাঁকে দিয়েছে মাত্র দুটি সংক্ষিপ্ত অংশ, 21:83-84 ও 38:41-44, আর দুটিরই বিষয় একটাই: সবকিছু কেড়ে নেওয়া হলে আল্লাহর বান্দা কী করে।",
          },
          {
            en: "The Quran does not describe his illness, does not count his losses, and does not name his city or his era. That silence is deliberate and worth respecting. Much of what circulates about worms, about a wife who abandoned him, and about the length of his affliction comes from later storytelling rather than from revelation or an authenticated report, and a reader loses nothing by setting it aside. What Allah preserved is the prayer and the praise.",
            bn: "কুরআন তাঁর রোগের বর্ণনা দেয় না, ক্ষতির হিসাব কষে না, তাঁর নগর বা যুগের নামও বলে না। এই নীরবতা উদ্দেশ্যপ্রণোদিত, আর তা মর্যাদার সঙ্গে মেনে নেওয়াই উচিত। পোকা, তাঁকে ছেড়ে যাওয়া স্ত্রী কিংবা বিপদের দৈর্ঘ্য নিয়ে যা প্রচলিত, তার অধিকাংশই পরবর্তীকালের গল্প — ওহি বা নির্ভরযোগ্য বর্ণনা নয়; সেসব সরিয়ে রাখলে পাঠকের কিছুই হারায় না। আল্লাহ যা সংরক্ষণ করেছেন তা হলো দোয়াটি ও প্রশংসাটি।",
          },
        ],
      },
      {
        h: { en: "The Words of the Prayer", bn: "দোয়ার শব্দগুলো" },
        p: [
          {
            en: "The prayer itself is six words in Arabic. When he called upon his Lord, he said: adversity has touched me, and You are the most merciful of the merciful (21:83). He states his condition and stops. There is no demand, no bargaining, no listing of his services. The sentence ends by naming an attribute of Allah rather than a need of his own, and it is on that attribute that the whole request rests.",
            bn: "দোয়াটি আরবিতে মাত্র ছয়টি শব্দ। তিনি যখন তাঁর প্রভুকে ডাকেন, বলেন: আমাকে কষ্ট স্পর্শ করেছে, আর আপনি তো দয়ালুদের মধ্যে সর্বশ্রেষ্ঠ দয়ালু (21:83)। তিনি নিজের অবস্থাটি জানান, ব্যস। কোনো দাবি নেই, দর-কষাকষি নেই, নিজের খিদমতের ফিরিস্তি নেই। বাক্যটি শেষ হয় নিজের প্রয়োজনের বদলে আল্লাহর এক গুণ উচ্চারণ করে — আর গোটা আবেদনটি দাঁড়িয়ে আছে সেই গুণের ওপরেই।",
          },
          {
            en: "In the second passage he says that Satan has touched him with hardship and torment (38:41). He does not attribute the affliction to his Lord in the language of blame. This is the courtesy the prophets keep: Ibrahim, describing his Lord, says that when he is ill it is He who cures him (26:80), naming Allah with the healing. Ayyub speaks of his pain in one direction and his hope in another, and both directions are worship.",
            bn: "দ্বিতীয় অংশে তিনি বলেন, শয়তান তাঁকে কষ্ট ও যন্ত্রণা দিয়ে স্পর্শ করেছে (38:41)। অভিযোগের ভাষায় তিনি বিপদটিকে তাঁর প্রভুর দিকে আরোপ করেন না। এটাই নবীদের রক্ষিত শিষ্টাচার: ইবরাহীম নিজের প্রভুর বর্ণনায় বলেন, তিনি অসুস্থ হলে তিনিই তাঁকে আরোগ্য দেন (26:80) — আরোগ্যের সঙ্গেই আল্লাহর নাম। আইয়ুব ব্যথার কথা বলেন এক দিকে, আশার কথা অন্য দিকে, আর দুই দিকই ইবাদত।",
          },
        ],
      },
      {
        h: { en: "What Allah Praised in Him", bn: "আল্লাহ তাঁর কীসের প্রশংসা করলেন" },
        p: [
          {
            en: "The verdict on his life is a single verse: We found him patient — an excellent servant; indeed he was one who constantly turned back to his Lord (38:44). Two words carry it. Sabir is the one who holds, and awwab is the one who returns, again and again, to Allah. Patience alone could be mere endurance; joined to returning, it becomes a relationship that the trial did not interrupt but intensified.",
            bn: "তাঁর জীবনের রায় একটি আয়াতেই: আমি তাকে ধৈর্যশীল পেয়েছি — কত উত্তম বান্দা; নিশ্চয়ই সে ছিল বারবার প্রভুর দিকে প্রত্যাবর্তনকারী (38:44)। দুটি শব্দেই সব ধরা। সাবির মানে যে ধরে রাখে, আর আওয়াব মানে যে বারবার আল্লাহর দিকে ফিরে আসে। কেবল ধৈর্য হলে তা নিছক সহ্যক্ষমতা হতে পারত; প্রত্যাবর্তনের সঙ্গে যুক্ত হয়ে তা এমন সম্পর্কে দাঁড়ায় যা পরীক্ষা ভাঙেনি, বরং ঘন করেছে।",
          },
          {
            en: "Notice also what is not praised. He is not praised for silence, since he prayed; nor for pretending the pain was small, since he said plainly that adversity had touched him. The Quran approves of a servant who tells Allah exactly where he stands and still calls Him the most merciful. That is the model 2:155-157 sets out, where the good news is for those who, struck by disaster, say that to Allah they belong and to Him they return.",
            bn: "লক্ষ করুন, কীসের প্রশংসা করা হয়নি তাও। নীরবতার জন্য তাঁর প্রশংসা নয়, কারণ তিনি দোয়া করেছেন; ব্যথাকে তুচ্ছ দেখানোর জন্যও নয়, কারণ তিনি স্পষ্টই বলেছেন কষ্ট তাঁকে স্পর্শ করেছে। কুরআন সেই বান্দাকে সমর্থন করে যে আল্লাহকে নিজের প্রকৃত অবস্থা জানায়, তবু তাঁকেই সর্বাধিক দয়ালু বলে ডাকে। 2:155-157 আয়াত সেই আদর্শই তুলে ধরে, যেখানে সুসংবাদ তাদের জন্য যারা বিপদে বলে, আমরা আল্লাহরই এবং তাঁরই দিকে ফিরে যাব।",
          },
        ],
      },
      {
        h: { en: "The Spring and the Return", bn: "ঝর্ণা ও প্রত্যাবর্তন" },
        p: [
          {
            en: "The answer came as an instruction, not an explanation: strike with your foot — this is a cool bath and a drink (38:42). A man who could barely move was told to move, and water appeared where his foot fell. The Quran gives no diagnosis and no timetable; it simply records that relief arrived through an act of obedience, which is how deliverance usually reaches those who ask for it.",
            bn: "উত্তর এল ব্যাখ্যা হিসেবে নয়, নির্দেশ হিসেবে: তোমার পা দিয়ে আঘাত করো — এই তো শীতল গোসলের ও পানের পানি (38:42)। যে মানুষটি নড়তেই পারতেন না, তাঁকেই বলা হলো নড়তে; আর যেখানে পা পড়ল সেখানেই পানি এল। কুরআন কোনো রোগনির্ণয় দেয় না, সময়সূচিও নয়; কেবল লিপিবদ্ধ করে যে স্বস্তি এসেছিল একটি আনুগত্যের কাজের মধ্য দিয়ে — যাঁরা চান, মুক্তি সাধারণত তাঁদের কাছে এভাবেই পৌঁছায়।",
          },
          {
            en: "Then We responded to him and removed his adversity, and We gave him his family and the like of them with them (21:84). The same restoration is described in 38:43 as mercy from Us and a reminder for people of understanding. The reward is stated twice as a mercy, never as wages earned by suffering; and both passages end by turning the reader's attention outward, to what the story is meant to teach the worshippers who read it.",
            bn: "এরপর আমি তার ডাকে সাড়া দিলাম এবং তার কষ্ট দূর করলাম, আর তাকে দিলাম তার পরিবার ও তাদের সঙ্গে আরও ততটুকু (21:84)। একই পুনরুদ্ধারকে 38:43 বলে আমার পক্ষ থেকে রহমত ও বোধসম্পন্নদের জন্য উপদেশ। প্রতিদানকে দুইবারই বলা হয়েছে রহমত, কষ্টের বিনিময়ে অর্জিত পারিশ্রমিক নয়; আর দুটি অংশই শেষ হয় পাঠকের দৃষ্টি বাইরে ফিরিয়ে — যা এ কাহিনি পাঠকারী ইবাদতকারীদের শেখাতে চায় সেদিকে।",
          },
        ],
      },
      {
        h: { en: "The Oath He Kept", bn: "যে শপথ তিনি রক্ষা করলেন" },
        p: [
          {
            en: "One verse in the passage is easy to pass over: take in your hand a bundle and strike with it, and do not break your oath (38:44). Something had been sworn during the trial, and the Quran does not tell us what. What it does show is that the oath was not simply cancelled because the man had suffered enough; a way was opened for him to discharge it without breaking his word.",
            bn: "এই অংশের একটি আয়াত সহজেই চোখ এড়িয়ে যায়: তোমার হাতে এক আঁটি নাও এবং তা দিয়ে আঘাত করো, আর শপথ ভেঙো না (38:44)। পরীক্ষার সময় কোনো এক শপথ করা হয়েছিল, আর কুরআন আমাদের বলে না তা কী ছিল। যা এটি দেখায় তা হলো, লোকটি যথেষ্ট কষ্ট পেয়েছেন বলেই শপথটি বাতিল করে দেওয়া হয়নি; বরং কথা না ভেঙে তা আদায়ের একটি পথ খুলে দেওয়া হয়েছে।",
          },
          {
            en: "That detail says something about the man and about the law he lived under. His recovery did not loosen his obligations; it restored his ability to meet them. The Quran presents his healing and his oath in the same breath, so that the reader does not imagine that the end of a trial is the end of responsibility. He returned to health as the same servant he had been in illness.",
            bn: "এই ছোট্ট বিবরণটি মানুষটি সম্পর্কে এবং যে বিধানের অধীনে তিনি চলতেন তা সম্পর্কে অনেক কিছু বলে। আরোগ্য তাঁর দায়িত্ব শিথিল করেনি; বরং দায়িত্ব পালনের সামর্থ্য ফিরিয়ে দিয়েছে। কুরআন তাঁর আরোগ্য ও তাঁর শপথের কথা একই নিঃশ্বাসে উপস্থাপন করে, যাতে পাঠক না ভাবেন পরীক্ষার সমাপ্তি মানেই দায়িত্বের সমাপ্তি। অসুস্থতায় তিনি যে বান্দা ছিলেন, সুস্থতায়ও তিনি সেই বান্দাই থেকে গেলেন।",
          },
        ],
      },
      {
        h: { en: "Wealth Returned, Heart Unchanged", bn: "সম্পদ ফিরল, হৃদয় বদলাল না" },
        p: [
          {
            en: "Al-Bukhari records a striking scene from after his recovery. While Ayyub was bathing, golden locusts began to fall on him, and he started gathering them into his garment. His Lord called to him: had I not made you free of need of what you see? He answered: yes, by Your might, but I have no escape from Your blessing. He was not indifferent to gifts; he was attached to the Giver.",
            bn: "বুখারি আরোগ্যের পরের এক অসাধারণ দৃশ্য লিপিবদ্ধ করেছেন। আইয়ুব যখন গোসল করছিলেন, সোনার পঙ্গপাল তাঁর ওপর পড়তে শুরু করে, আর তিনি তা কাপড়ে জড়ো করতে থাকেন। তাঁর প্রভু তাঁকে ডেকে বলেন: আমি কি তোমাকে যা দেখছ তার মুখাপেক্ষিতা থেকে মুক্ত করিনি? তিনি বলেন: অবশ্যই, আপনার ইজ্জতের কসম, কিন্তু আপনার বরকত থেকে আমার কোনো অব্যাহতি নেই। দানের প্রতি তিনি উদাসীন ছিলেন না; তিনি আসক্ত ছিলেন দাতার প্রতি।",
          },
          {
            en: "That is the shape of his whole life, and it explains why the Prophet ﷺ could say, as Muslim records, that the affair of the believer is wholly good: if ease comes he is grateful, and that is good for him; if hardship comes he is patient, and that is good for him. Ayyub was tested in both conditions and passed in both, which is why Allah called him an excellent servant rather than merely a patient one.",
            bn: "এটাই তাঁর গোটা জীবনের আকৃতি, আর এতেই বোঝা যায় কেন নবী ﷺ বলতে পেরেছেন — মুসলিমে যা বর্ণিত — মুমিনের ব্যাপারটাই আশ্চর্য, তার সবটাই কল্যাণ: স্বাচ্ছন্দ্য এলে সে শোকর করে, তা তার জন্য কল্যাণ; কষ্ট এলে সে ধৈর্য ধরে, তাও তার জন্য কল্যাণ। আইয়ুব দুই অবস্থাতেই পরীক্ষিত হয়েছেন ও দুটিতেই উত্তীর্ণ হয়েছেন — তাই আল্লাহ তাঁকে কেবল ধৈর্যশীল নয়, উত্তম বান্দা বলেছেন।",
          },
        ],
      },
    ],
  },
  shuayb: {
    sections: [
      {
        h: { en: "Sent to a Trading Town", bn: "এক বাণিজ্যনগরীতে প্রেরিত" },
        p: [
          {
            en: "Madyan sat on the caravan roads of northwest Arabia, and its wealth came from what passed through its markets. To this town Allah sent their brother Shu'ayb (AS), and his opening words were the words of every messenger before him: my people, worship Allah; you have no god other than Him (7:85). What follows in the same verse is what makes his mission distinctive.",
            bn: "মাদইয়ান ছিল উত্তর-পশ্চিম আরবের কাফেলা-পথের ওপর, আর তার সম্পদ আসত বাজার দিয়ে যা কিছু যেত তা থেকেই। এই জনপদেই আল্লাহ পাঠান তাদেরই ভাই শুআইব (আঃ)-কে, আর তাঁর সূচনার কথাগুলো ছিল তাঁর আগের প্রত্যেক রাসূলের কথাই: হে আমার সম্প্রদায়, আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই (7:85)। ওই একই আয়াতে এরপর যা আসে, তা-ই তাঁর দাওয়াতকে স্বতন্ত্র করে তোলে।",
          },
          {
            en: "The Quran also addresses the companions of al-Aykah, the people of the thicket, and sends Shu'ayb to them as well (26:176-177). Commentators differ over whether they were the people of Madyan under another description or a neighbouring community; the Quran does not settle it, and it calls him the brother of Madyan while it does not use that word of al-Aykah. The message to both is identical, which is the point worth keeping.",
            bn: "কুরআন আইকার অধিবাসীদেরও সম্বোধন করে, অর্থাৎ ঝোপ-জঙ্গলের সেই সম্প্রদায়কে, আর শুআইবকে তাদের কাছেও পাঠায় (26:176-177)। তাঁরা মাদইয়ানবাসীই ভিন্ন পরিচয়ে, না প্রতিবেশী কোনো জনগোষ্ঠী — এ নিয়ে তাফসিরকারগণ ভিন্নমত পোষণ করেন; কুরআন বিষয়টির নিষ্পত্তি করে না, আর মাদইয়ানের ক্ষেত্রে তাঁকে ভাই বলা হলেও আইকার ক্ষেত্রে সে শব্দ ব্যবহৃত হয়নি। দুই পক্ষের প্রতি বার্তা অভিন্ন — এটুকুই ধরে রাখার মতো।",
          },
        ],
      },
      {
        h: { en: "Worship and the Scale", bn: "ইবাদত ও দাঁড়িপাল্লা" },
        p: [
          {
            en: "Having called them to Allah, he said in the same breath: give full measure and weight, do not deprive people of their due, and cause no corruption on the earth after its reform (7:85). In 11:84 the two commands are welded together even more tightly — worship Allah, and do not reduce the measure and the scale. Faith and the marketplace are not treated as separate departments of life.",
            bn: "আল্লাহর দিকে আহ্বানের সঙ্গে একই নিঃশ্বাসে তিনি বলেন: মাপ ও ওজন পূর্ণ করো, মানুষের প্রাপ্য কমিয়ে দিয়ো না, আর ভূমিতে সংস্কারের পর বিপর্যয় সৃষ্টি কোরো না (7:85)। 11:84 আয়াতে দুই নির্দেশ আরও নিবিড়ভাবে জোড়া — আল্লাহর ইবাদত করো, আর মাপ ও দাঁড়িপাল্লায় কম দিয়ো না। ঈমান ও বাজারকে জীবনের আলাদা দুই বিভাগ হিসেবে দেখা হয়নি।",
          },
          {
            en: "He then gave them a principle their ledgers could not supply: what remains from Allah is better for you, if you are believers — and I am not a guardian over you (11:86). The lawful remainder, however small, outlasts the larger sum gained by shaving a weight. In 26:181-183 the same instruction is spelled out for the people of the thicket: weigh with an even balance, and do not diminish what belongs to others.",
            bn: "এরপর তিনি তাদের এমন এক নীতি দেন যা তাদের হিসাবের খাতা দিতে পারত না: আল্লাহর দেওয়া যে অবশিষ্ট তা-ই তোমাদের জন্য উত্তম, যদি তোমরা মুমিন হও — আর আমি তোমাদের ওপর তত্ত্বাবধায়ক নই (11:86)। বৈধ উপায়ে থেকে যাওয়া সামান্য অংশও ওজনে কম দিয়ে পাওয়া বড় অঙ্কের চেয়ে বেশি টেকে। 26:181-183 আয়াতে আইকাবাসীর জন্য একই নির্দেশ বিস্তারিত: সঠিক দাঁড়িপাল্লায় ওজন করো, আর অন্যের প্রাপ্য কমিয়ে দিয়ো না।",
          },
        ],
      },
      {
        h: { en: "Does Your Prayer Command This", bn: "তোমার নামাজই কি এ নির্দেশ দেয়" },
        p: [
          {
            en: "Their objection is one of the sharpest sentences in the Quran, because it is still in use. Shu'ayb, does your prayer command you that we should leave what our fathers worshipped, or that we should not do with our wealth what we please (11:87)? They call him forbearing and right-minded as they say it, and the sarcasm is unmistakable. Religion, in their view, could have the mosque provided it stayed out of the market.",
            bn: "তাদের আপত্তিটি কুরআনের সবচেয়ে ধারালো বাক্যগুলোর একটি, কারণ কথাটি আজও চালু আছে। হে শুআইব, তোমার নামাজই কি তোমাকে নির্দেশ দেয় যে আমরা আমাদের পূর্বপুরুষদের উপাস্য ছেড়ে দেব, কিংবা নিজেদের সম্পদ নিয়ে যা ইচ্ছা তা করতে পারব না (11:87)? কথাটি বলার সময় তারা তাঁকে সহনশীল ও সুবুদ্ধিসম্পন্ন বলে সম্বোধন করে, আর ব্যঙ্গটি অস্পষ্ট নয়। তাদের মতে ধর্ম মসজিদ পেতে পারে, যদি বাজারের বাইরে থাকে।",
          },
          {
            en: "His reply is a charter for anyone who works for reform: I only intend correction as much as I am able, and my success is only through Allah; upon Him I rely and to Him I turn (11:88). He claims no power to change hearts and no guarantee of results. He accepts the limit of his ability, and hands the outcome to the One who is not limited.",
            bn: "তাঁর জবাব সংস্কারকর্মে নিয়োজিত যে কারও জন্য একটি সনদ: আমি তো কেবল সাধ্যমতো সংশোধন চাই, আর আমার তাওফিক কেবল আল্লাহর মাধ্যমেই; তাঁরই ওপর আমি ভরসা করি এবং তাঁরই দিকে ফিরি (11:88)। হৃদয় বদলে দেওয়ার ক্ষমতা তিনি দাবি করেন না, ফলাফলের নিশ্চয়তাও দেন না। নিজের সামর্থ্যের সীমা তিনি মেনে নেন, আর পরিণতি সঁপে দেন তাঁর হাতে যাঁর কোনো সীমা নেই।",
          },
        ],
      },
      {
        h: { en: "Threats on Every Road", bn: "প্রতিটি পথে হুমকি" },
        p: [
          {
            en: "Cheating was not their only offence. He told them not to sit on every path, threatening and turning away from the way of Allah those who believed, and seeking to make it crooked (7:86). A community that has grown used to dishonest profit will defend it, and the defence takes the form of intimidation. Corruption in the scales and coercion on the roads are two faces of the same refusal.",
            bn: "প্রতারণাই তাদের একমাত্র অপরাধ ছিল না। তিনি তাদের বলেন, প্রতিটি পথে বসে ভয় দেখিয়ো না, বিশ্বাসীদের আল্লাহর পথ থেকে ফিরিয়ে দিয়ো না এবং সে পথকে বাঁকা করতে চেয়ো না (7:86)। যে সমাজ অসৎ মুনাফায় অভ্যস্ত হয়ে পড়ে, সে তা রক্ষা করতে নামে — আর সেই রক্ষার চেহারা হয় ভীতিপ্রদর্শন। মাপে দুর্নীতি আর পথে জবরদস্তি একই অস্বীকৃতির দুই মুখ।",
          },
          {
            en: "The chiefs then gave him the usual choice: we will expel you and those who believe with you from our town, unless you return to our religion (7:88). He answered that they would be inventing a lie against Allah if they returned to it, and that his Lord encompasses everything in knowledge (7:89). When they said that only his family protected him from stoning, he asked whether his family was more respected by them than Allah (11:91-92).",
            bn: "এরপর নেতারা তাঁকে চিরাচরিত সেই বিকল্প দেয়: আমরা তোমাকে ও তোমার সঙ্গে যারা ঈমান এনেছে তাদের আমাদের জনপদ থেকে বের করে দেব, যদি না তোমরা আমাদের ধর্মে ফিরে আসো (7:88)। তিনি বলেন, ফিরে গেলে তো তাঁরা আল্লাহর ওপর মিথ্যা রচনা করবেন, আর তাঁর প্রভুর জ্ঞান সবকিছুকে বেষ্টন করে আছে (7:89)। তারা যখন বলে কেবল তাঁর পরিবারই তাঁকে পাথর থেকে বাঁচিয়ে রেখেছে, তিনি জিজ্ঞেস করেন — আল্লাহর চেয়ে তাঁর পরিবার কি তোমাদের কাছে বেশি সম্মানিত (11:91-92)?",
          },
        ],
      },
      {
        h: { en: "The Day the Town Fell", bn: "যেদিন জনপদ ধসে পড়ে" },
        p: [
          {
            en: "The end is described in more than one way. 7:91 says the earthquake seized them and they lay lifeless in their homes, and 29:36-37 repeats it. 11:94 names the shriek, and 26:189 speaks of the punishment of the day of the shadow. The Quran also says of the companions of the thicket in 15:78-79 that they were wrongdoers and were requited. Each account is given as it is; they need not be forced into one scene.",
            bn: "সমাপ্তির বর্ণনা এসেছে একাধিকভাবে। 7:91 বলে ভূমিকম্প তাদের গ্রাস করে এবং তারা নিজ ঘরে নিষ্প্রাণ পড়ে থাকে, আর 29:36-37 তা পুনরাবৃত্তি করে। 11:94 উল্লেখ করে বিকট আওয়াজের কথা, আর 26:189 বলে ছায়াময় দিনের শাস্তির কথা। আইকার অধিবাসীদের সম্পর্কে 15:78-79 বলে, তারা ছিল সীমালঙ্ঘনকারী এবং তাদের প্রতিফল দেওয়া হয়েছে। প্রতিটি বিবরণ যেমন আছে তেমনই গ্রহণযোগ্য; সবগুলোকে জোর করে এক দৃশ্যে মেলানোর প্রয়োজন নেই।",
          },
          {
            en: "What followed is stated with unusual coldness: those who denied Shu'ayb became as though they had never lived there (7:92), and away with Madyan as Thamud was taken away (11:95). A town whose whole identity was its trade left no trace. Shu'ayb and those who believed with him were saved by the mercy of Allah, which is the only security the passage acknowledges (11:94).",
            bn: "এরপর যা ঘটে তা বলা হয়েছে অস্বাভাবিক নির্লিপ্ততায়: যারা শুআইবকে অস্বীকার করেছিল তারা এমন হয়ে গেল যেন সেখানে তারা কখনো বসবাসই করেনি (7:92), আর দূর হোক মাদইয়ান, যেমন দূর হয়েছিল সামুদ (11:95)। যে জনপদের গোটা পরিচয়ই ছিল তার বাণিজ্য, তা কোনো চিহ্নই রেখে গেল না। শুআইব ও তাঁর সঙ্গে যারা ঈমান এনেছিল তারা রক্ষা পান আল্লাহর রহমতে — এ অংশে স্বীকৃত একমাত্র নিরাপত্তা সেটিই (11:94)।",
          },
        ],
      },
      {
        h: { en: "The Scale Outlives the Town", bn: "জনপদ যায়, দাঁড়িপাল্লা থাকে" },
        p: [
          {
            en: "His last recorded words are not bitter. He turned from them and said: I conveyed to you the messages of my Lord and advised you, so how could I grieve for a disbelieving people (7:93)? A messenger is answerable for delivery, not for results. He had been threatened with stoning and exile, and what he expresses at the end is not resentment but the calm of a man who finished his task.",
            bn: "তাঁর সর্বশেষ লিপিবদ্ধ কথায় কোনো তিক্ততা নেই। তিনি তাদের থেকে মুখ ফিরিয়ে বলেন: আমি তো তোমাদের কাছে আমার প্রভুর বার্তা পৌঁছে দিয়েছি ও উপদেশ দিয়েছি; তবে কাফির সম্প্রদায়ের জন্য আমি কেন শোক করব (7:93)? রাসূল দায়বদ্ধ পৌঁছে দেওয়ার জন্য, ফলাফলের জন্য নয়। তাঁকে পাথর মারা ও নির্বাসনের হুমকি দেওয়া হয়েছিল, অথচ শেষে যা প্রকাশ পায় তা ক্ষোভ নয় — কাজ শেষ করা মানুষের প্রশান্তি।",
          },
          {
            en: "Madyan appears once more in the Quran, when Musa arrives there as a fugitive and is hired by an old man on honest terms (28:22-28). The Quran does not name that man, and it is better not to. What survives is the standard Shu'ayb was sent with, restated later in 83:1-3 as a woe upon those who take full measure from people and give less to them.",
            bn: "মাদইয়ানের নাম কুরআনে আরও একবার আসে, যখন মূসা পলাতক অবস্থায় সেখানে পৌঁছান এবং এক বৃদ্ধ ন্যায্য শর্তে তাঁকে কাজে নেন (28:22-28)। কুরআন সেই ব্যক্তির নাম বলে না, আর না বলাই উত্তম। যা টিকে থাকে তা হলো সেই মানদণ্ড যা নিয়ে শুআইব প্রেরিত হয়েছিলেন — পরে 83:1-3 আয়াতে যা আবার উচ্চারিত: দুর্ভোগ তাদের, যারা মানুষের কাছ থেকে মেপে নেওয়ার সময় পূর্ণ নেয়, আর দেওয়ার সময় কম দেয়।",
          },
        ],
      },
    ],
  },
  musa: {
    sections: [
      {
        h: { en: "The River and the Palace", bn: "নদী ও প্রাসাদ" },
        p: [
          {
            en: "Musa (AS) was born into a policy of killing. Pharaoh had divided the people into factions, oppressing one of them by slaughtering their sons and sparing their women (28:4). Into that year Allah inspired the mother of Musa: nurse him, and when you fear for him cast him into the river; do not fear or grieve, for We will return him to you and make him a messenger (28:7).",
            bn: "মূসা (আঃ)-এর জন্ম এমন এক সময়ে, যখন হত্যাই ছিল রাষ্ট্রীয় নীতি। ফেরাউন জনগণকে দলে দলে ভাগ করে একটি দলকে দুর্বল করে রেখেছিল — তাদের পুত্রদের হত্যা করত আর নারীদের বাঁচিয়ে রাখত (28:4)। সেই বছরেই আল্লাহ মূসার মায়ের অন্তরে ইলহাম দেন: তাকে দুধ পান করাও, আর যখন তার জন্য ভয় করবে তখন তাকে নদীতে ভাসিয়ে দাও; ভয় কোরো না, শোকও কোরো না, আমি তাকে তোমার কাছে ফিরিয়ে দেব ও রাসূল করব (28:7)।",
          },
          {
            en: "Pharaoh's family picked him up, so that he would become to them an enemy and a sorrow (28:8), and Pharaoh's wife pleaded that he not be killed (28:9). His sister watched from a distance while Allah made him refuse every wet nurse, so that he was returned to his own mother, that her eye might be comforted and she might know Allah's promise is true (28:10-13).",
            bn: "ফেরাউনের পরিবার তাকে তুলে নেয়, যেন সে তাদের জন্য শত্রু ও দুঃখের কারণ হয় (28:8), আর ফেরাউনের স্ত্রী অনুনয় করেন যেন তাকে হত্যা না করা হয় (28:9)। তাঁর বোন দূর থেকে লক্ষ রাখে, আর আল্লাহ তাঁকে সব ধাত্রীর দুধ প্রত্যাখ্যান করান — ফলে তিনি নিজ মায়ের কাছেই ফিরে আসেন, যাতে তাঁর চোখ জুড়ায় এবং তিনি জানেন যে আল্লাহর ওয়াদা সত্য (28:10-13)।",
          },
        ],
      },
      {
        h: { en: "Madyan and the Ten Years", bn: "মাদইয়ান ও দশ বছর" },
        p: [
          {
            en: "Grown to full strength and given judgement and knowledge (28:14), he intervened in a fight and struck a man who died. He did not excuse himself: this is from the work of Satan; my Lord, I have wronged myself, so forgive me (28:15-16). Warned that the chiefs were conferring to kill him, he left the city fearful and watchful (28:20-21).",
            bn: "পূর্ণ শক্তিতে পৌঁছে এবং প্রজ্ঞা ও জ্ঞান লাভ করে (28:14) তিনি এক সংঘর্ষে হস্তক্ষেপ করেন ও এক ব্যক্তিকে আঘাত করেন, যে মারা যায়। তিনি নিজেকে সাফাই দেননি: এ তো শয়তানের কাজ; হে আমার প্রভু, আমি নিজের ওপর জুলুম করেছি, আমাকে ক্ষমা করুন (28:15-16)। নেতারা তাঁকে হত্যার পরামর্শ করছে — এ সংবাদ পেয়ে তিনি ভীত ও সতর্ক অবস্থায় নগর ছাড়েন (28:20-21)।",
          },
          {
            en: "At the well of Madyan he found two women holding their flock back until the shepherds finished. He watered for them, withdrew to the shade and said: my Lord, I am in need of whatever good You send down to me (28:23-24). One of them proposed he be hired, with a line the Quran keeps as a rule: the best you can hire is the strong and the trustworthy (28:26).",
            bn: "মাদইয়ানের কূপে তিনি দেখেন দুই নারী নিজেদের পাল আটকে রেখেছে, যতক্ষণ না রাখালেরা সরে যায়। তিনি তাদের পশুদের পানি পান করান, ছায়ায় সরে গিয়ে বলেন: হে আমার প্রভু, আপনি আমার প্রতি যে কল্যাণই নাযিল করুন, আমি তার মুখাপেক্ষী (28:23-24)। তাদের একজন প্রস্তাব করে তাঁকে কাজে নিতে — সেই বাক্যটি কুরআন নীতি হিসেবেই রেখে দিয়েছে: আপনি যাকে কাজে নেবেন তাদের মধ্যে উত্তম সেই, যে শক্তিশালী ও বিশ্বস্ত (28:26)।",
          },
        ],
      },
      {
        h: { en: "The Fire at Tuwa", bn: "তুওয়ার আগুন" },
        p: [
          {
            en: "He served eight years, and completing ten was left to him, on a contract sealed with the words that Allah is witness over what they said (28:27-28). Years later, travelling with his family, he saw a fire on the side of the mount and turned aside for it (28:29). He was called from the blessed spot: remove your sandals, you are in the sacred valley of Tuwa (20:11-12).",
            bn: "তিনি আট বছর খেদমত করেন, আর দশ পূর্ণ করা তাঁর ইচ্ছার ওপর ছাড়া হয় — চুক্তিটি সিলমোহর হয় এই কথায় যে তাঁরা যা বলছেন আল্লাহ তার সাক্ষী (28:27-28)। বছর পেরিয়ে, পরিবারসহ সফরকালে তিনি পাহাড়ের পাশে আগুন দেখেন এবং সেদিকে এগিয়ে যান (28:29)। বরকতময় স্থান থেকে তাঁকে ডাকা হয়: তোমার জুতা খুলে ফেলো, তুমি পবিত্র উপত্যকা তুওয়ায় আছ (20:11-12)।",
          },
          {
            en: "Then came the sentence that turned a fugitive shepherd into a messenger: indeed I am Allah, there is no god but Me, so worship Me and establish the prayer for My remembrance (20:14). He was shown the staff that became a moving serpent and the hand that came out white without harm (20:17-22), and was sent to Pharaoh, who had transgressed (20:24).",
            bn: "এরপর এল সেই বাক্য যা এক পলাতক রাখালকে রাসূলে রূপান্তরিত করে: নিশ্চয়ই আমিই আল্লাহ, আমি ছাড়া কোনো ইলাহ নেই; সুতরাং আমার ইবাদত করো এবং আমার স্মরণে নামাজ কায়েম করো (20:14)। তাঁকে দেখানো হয় সেই লাঠি যা চলমান সাপ হয়ে যায়, আর সেই হাত যা কোনো ক্ষতি ছাড়াই সাদা হয়ে বের হয় (20:17-22); এরপর তাঁকে পাঠানো হয় ফেরাউনের কাছে, যে সীমা ছাড়িয়ে গিয়েছিল (20:24)।",
          },
        ],
      },
      {
        h: { en: "Pharaoh and the Magicians", bn: "ফেরাউন ও জাদুকরেরা" },
        p: [
          {
            en: "His answer was a prayer, not a protest: expand my breast, ease my task, untie the knot from my tongue, and appoint my brother Harun as a helper (20:25-32). Both were told to speak to Pharaoh a gentle word, that he might be reminded or fear (20:44). Pharaoh's opening move was personal: did we not raise you among us as a child (26:18)?",
            bn: "তাঁর জবাব ছিল দোয়া, আপত্তি নয়: আমার বুক প্রশস্ত করুন, কাজ সহজ করুন, আমার জিহ্বার জড়তা খুলে দিন, আর আমার ভাই হারুনকে সহকারী নিযুক্ত করুন (20:25-32)। দুজনকেই বলা হয় ফেরাউনের সঙ্গে নম্র কথা বলতে, হয়তো সে উপদেশ নেবে বা ভয় করবে (20:44)। ফেরাউনের প্রথম চাল ছিল ব্যক্তিগত: আমরা কি তোমাকে শিশু অবস্থায় আমাদের মধ্যে লালন করিনি (26:18)?",
          },
          {
            en: "Musa answered that the favour being held over him was that Pharaoh had enslaved the Children of Israel (26:22). The contest was then set for a day of festival. The magicians threw their ropes and staffs and bewitched the eyes of the people, and Musa's staff swallowed what they had falsified (7:116-117). The men who understood illusion best knew at once that this was not illusion.",
            bn: "মূসা জবাব দেন, যে অনুগ্রহের খোঁটা দেওয়া হচ্ছে তা তো এই যে ফেরাউন বনী ইসরাঈলকে দাস বানিয়ে রেখেছে (26:22)। এরপর প্রতিযোগিতার দিন ধার্য হয় উৎসবের দিনে। জাদুকরেরা তাদের রশি ও লাঠি নিক্ষেপ করে মানুষের চোখে ভেলকি লাগায়, আর মূসার লাঠি তাদের বানানো মিথ্যা গিলে ফেলে (7:116-117)। যারা ভেলকির কারিগরি সবচেয়ে ভালো বুঝত, তারাই তৎক্ষণাৎ বুঝে যায় এটি ভেলকি নয়।",
          },
        ],
      },
      {
        h: { en: "The Sea Opens", bn: "সমুদ্র খুলে যায়" },
        p: [
          {
            en: "They fell down in prostration and said: we believe in the Lord of the worlds, the Lord of Musa and Harun (7:120-122). Pharaoh threatened to crucify them, and they asked their Lord to pour patience upon them and let them die as Muslims (7:123-126). Inside his own household a believing man hid his faith and asked whether they would kill a man for saying, my Lord is Allah (40:28).",
            bn: "তারা সিজদায় লুটিয়ে পড়ে বলে: আমরা ঈমান আনলাম বিশ্বজগতের প্রতিপালকের প্রতি, মূসা ও হারুনের প্রতিপালকের প্রতি (7:120-122)। ফেরাউন তাদের শূলে চড়ানোর হুমকি দেয়, আর তারা প্রভুর কাছে প্রার্থনা করে: আমাদের ওপর ধৈর্য ঢেলে দিন এবং মুসলিম হিসেবে আমাদের মৃত্যু দিন (7:123-126)। ফেরাউনের নিজ পরিবারেই এক মুমিন ঈমান গোপন রেখে প্রশ্ন করেন, তোমরা কি এক ব্যক্তিকে কেবল এ কথার জন্য হত্যা করবে যে তার প্রতিপালক আল্লাহ (40:28)?",
          },
          {
            en: "When the two hosts came in sight of each other, the Children of Israel said they were about to be overtaken. Musa said: no, my Lord is with me; He will guide me (26:61-62). The command was to strike the sea with his staff, and it parted, each part like a great towering mountain (26:63). Pharaoh, drowning, declared belief and was told his body would be saved as a sign (10:90-92).",
            bn: "দুই দল যখন পরস্পরকে দেখতে পায়, বনী ইসরাঈল বলে ওঠে, আমরা তো ধরা পড়ে গেলাম। মূসা বলেন: কখনো নয়, আমার প্রতিপালক আমার সঙ্গে আছেন, তিনিই আমাকে পথ দেখাবেন (26:61-62)। নির্দেশ আসে লাঠি দিয়ে সমুদ্রে আঘাত করার, আর তা বিভক্ত হয়ে যায় — প্রতিটি অংশ যেন বিশাল পাহাড় (26:63)। ডুবতে ডুবতে ফেরাউন ঈমানের ঘোষণা দেয়, আর তাকে জানানো হয় যে তার দেহটি নিদর্শন হিসেবে রক্ষা করা হবে (10:90-92)।",
          },
        ],
      },
      {
        h: { en: "The Mountain and the Calf", bn: "পাহাড় ও বাছুর" },
        p: [
          {
            en: "Allah appointed thirty nights for him and completed them with ten, and he left Harun in charge: take my place among my people, do right, and do not follow the way of the corrupters (7:142). There he asked to see his Lord and was told he would not; the mountain was levelled, he fell unconscious, then turned to Him in repentance (7:143). Allah spoke to Musa directly (4:164).",
            bn: "আল্লাহ তাঁর জন্য ত্রিশ রাত নির্ধারণ করেন এবং তা দশ দিয়ে পূর্ণ করেন; তিনি হারুনকে দায়িত্বে রেখে যান এই কথায়: আমার সম্প্রদায়ে আমার স্থলাভিষিক্ত হও, সংশোধন করো, আর বিপর্যয় সৃষ্টিকারীদের পথ অনুসরণ কোরো না (7:142)। সেখানে তিনি প্রভুকে দেখতে চান, তাঁকে বলা হয় তিনি দেখতে পাবেন না; পাহাড় চূর্ণ হয়ে যায়, তিনি জ্ঞান হারান, এরপর তওবা করে তাঁর দিকেই ফেরেন (7:143)। আল্লাহ মূসার সঙ্গে সরাসরি কথা বলেছেন (4:164)।",
          },
          {
            en: "He came back with the tablets, told to take them with strength and to order his people to hold to the best in them (7:145), and found them worshipping a calf the Samiri had made (20:85-88). Harun had warned them that they were only being tested by it (20:90). Musa returned angry and grieved, threw down the tablets and seized his brother, then prayed for forgiveness for them both (7:150-151).",
            bn: "তিনি ফিরে আসেন ফলকগুলো নিয়ে — নির্দেশ ছিল তা দৃঢ়ভাবে ধরতে এবং সম্প্রদায়কে বলতে যেন তারা তার উত্তম বিষয়গুলো গ্রহণ করে (7:145) — আর দেখেন তারা সামিরির বানানো এক বাছুরের পূজা করছে (20:85-88)। হারুন তাদের সতর্ক করেছিলেন যে এর দ্বারা তাদের পরীক্ষা করা হচ্ছে (20:90)। মূসা ক্রুদ্ধ ও ব্যথিত হয়ে ফেরেন, ফলকগুলো রেখে দেন ও ভাইকে ধরেন, এরপর দুজনের জন্যই ক্ষমা প্রার্থনা করেন (7:150-151)।",
          },
        ],
      },
      {
        h: { en: "The Journey with al-Khidr", bn: "খিদিরের সঙ্গে সফর" },
        p: [
          {
            en: "Al-Bukhari records that Musa was asked which person had the most knowledge and answered that it was himself, whereupon Allah directed him to a servant at the meeting of the two seas who knew what he did not. The Quran calls him one given mercy from Allah and taught knowledge from Him (18:65). Musa asked to follow him and was told he could not bear it patiently (18:66-67).",
            bn: "বুখারি বর্ণনা করেন, মূসাকে জিজ্ঞেস করা হয়েছিল কোন ব্যক্তি সবচেয়ে জ্ঞানী; তিনি বলেছিলেন, তিনিই। তখন আল্লাহ তাঁকে দুই সমুদ্রের সঙ্গমস্থলের এক বান্দার দিকে পাঠান, যিনি এমন কিছু জানতেন যা তিনি জানতেন না। কুরআন তাঁকে বলে, যাঁকে আল্লাহ নিজের পক্ষ থেকে রহমত ও জ্ঞান দিয়েছেন (18:65)। মূসা তাঁর সঙ্গী হতে চাইলে তাঁকে বলা হয়, তিনি ধৈর্য ধরতে পারবেন না (18:66-67)।",
          },
          {
            en: "A ship was damaged, a boy was killed, a wall was rebuilt without pay, and Musa objected each time until they parted (18:71-78). The explanations reversed every appearance: the ship was flawed to save it from a king who seized ships, and the wall stood over a treasure belonging to two orphans whose father had been righteous (18:79-82). Even the prophet who spoke with Allah was shown he did not see everything.",
            bn: "একটি নৌকা ছিদ্র করা হয়, এক বালককে হত্যা করা হয়, একটি প্রাচীর বিনা পারিশ্রমিকে সোজা করে দেওয়া হয় — প্রতিবারই মূসা আপত্তি করেন, শেষে তাঁরা পৃথক হয়ে যান (18:71-78)। ব্যাখ্যাগুলো প্রতিটি বাহ্যিক চেহারা উল্টে দেয়: নৌকাটি ত্রুটিযুক্ত করা হয়েছিল যাতে নৌকা ছিনিয়ে নেওয়া এক রাজার হাত থেকে তা বাঁচে, আর প্রাচীরটির নিচে ছিল দুই এতিম বালকের গুপ্তধন, যাদের পিতা ছিলেন সৎকর্মশীল (18:79-82)। যিনি আল্লাহর সঙ্গে কথা বলেছেন, সেই নবীকেও দেখানো হলো যে সব কিছু তিনি দেখেন না।",
          },
        ],
      },
    ],
  },
  harun: {
    sections: [
      {
        h: { en: "The Brother He Asked For", bn: "যে ভাইকে তিনি চেয়েছিলেন" },
        p: [
          {
            en: "Harun (AS) enters the Quran as an answered prayer. Sent to Pharaoh, Musa asked for his chest to be expanded and his task eased, then added: appoint for me a minister from my family, Harun my brother; increase my strength through him and let him share my task (20:29-32). The reply was immediate — you have been granted your request, O Musa (20:36).",
            bn: "হারুন (আঃ) কুরআনে প্রবেশ করেন একটি কবুল হওয়া দোয়া হিসেবে। ফেরাউনের কাছে প্রেরিত হয়ে মূসা প্রার্থনা করেন তাঁর বুক প্রশস্ত করা হোক ও কাজ সহজ করা হোক, এরপর যোগ করেন: আমার পরিবার থেকে আমার জন্য একজন সহকারী নিযুক্ত করুন — আমার ভাই হারুনকে; তাঁর দ্বারা আমার শক্তি বাড়ান এবং তাঁকে আমার কাজে শরিক করুন (20:29-32)। জবাব এল তৎক্ষণাৎ — হে মূসা, তোমার প্রার্থনা মঞ্জুর করা হলো (20:36)।",
          },
          {
            en: "The reason is given in another surah: my brother Harun is more fluent than me in speech, so send him with me as support to confirm me, for I fear they will deny me (28:34). Allah answered that He would strengthen his arm through his brother (28:35). Elsewhere the appointment is described purely as a gift — and We gave him out of Our mercy his brother Harun, a prophet (19:53).",
            bn: "কারণটি বলা হয়েছে অন্য এক সূরায়: আমার ভাই হারুন কথায় আমার চেয়ে বেশি বাকপটু, তাই তাঁকে আমার সঙ্গে সহায়ক করে পাঠান যেন তিনি আমাকে সমর্থন করেন; আমি আশঙ্কা করি তারা আমাকে মিথ্যা বলবে (28:34)। আল্লাহ জানান, তিনি ভাইয়ের মাধ্যমে তাঁর বাহু শক্ত করবেন (28:35)। অন্যত্র এই নিয়োগকে বলা হয়েছে নিছক এক দান — আমি আমার রহমতে তাঁকে দিলাম তাঁর ভাই হারুনকে, একজন নবী হিসেবে (19:53)।",
          },
        ],
      },
      {
        h: { en: "Two Sent to One Tyrant", bn: "এক স্বৈরাচারীর কাছে দুজন" },
        p: [
          {
            en: "He was not an assistant standing behind a messenger. Go, both of you, to Pharaoh, for he has transgressed, and speak to him a gentle word, that perhaps he may be reminded or fear (20:43-44). When they said they feared he would hasten against them, the answer came to both: fear not, I am with you both, hearing and seeing (20:45-46).",
            bn: "তিনি কোনো রাসূলের পেছনে দাঁড়ানো সহকারী ছিলেন না। তোমরা দুজন ফেরাউনের কাছে যাও, সে সীমা ছাড়িয়ে গেছে; আর তার সঙ্গে নম্র কথা বলো, হয়তো সে উপদেশ নেবে বা ভয় করবে (20:43-44)। তাঁরা যখন আশঙ্কা প্রকাশ করেন যে সে তাড়াহুড়ো করে ক্ষতি করবে, জবাব আসে দুজনের উদ্দেশেই: ভয় কোরো না, আমি তোমাদের দুজনের সঙ্গেই আছি, শুনছি ও দেখছি (20:45-46)।",
          },
          {
            en: "In another telling, both are told to go with the signs of Allah and to say to Pharaoh that they are the messenger of the Lord of the worlds (26:15-16). 25:35 states it plainly: We gave Musa the Scripture and appointed with him his brother Harun as a helper. When the magicians believed they named the two together — the Lord of Musa and Harun (7:121-122).",
            bn: "অন্য এক বর্ণনায় দুজনকেই বলা হয় আল্লাহর নিদর্শন নিয়ে যেতে এবং ফেরাউনকে বলতে যে তাঁরা বিশ্বজগতের প্রতিপালকের রাসূল (26:15-16)। 25:35 স্পষ্ট করেই বলে: আমি মূসাকে কিতাব দিয়েছি এবং তাঁর সঙ্গে তাঁর ভাই হারুনকে সহকারী করেছি। জাদুকরেরা যখন ঈমান আনে, তারা দুজনের নামই একসঙ্গে নেয় — মূসা ও হারুনের প্রতিপালক (7:121-122)।",
          },
        ],
      },
      {
        h: { en: "The Tongue That Was Needed", bn: "যে জিহ্বা প্রয়োজন ছিল" },
        p: [
          {
            en: "The Quran links his role to his speech. Musa asked for the knot in his own tongue to be untied so his words would be understood (20:27-28), and named his brother as the more fluent of the two (28:34). Eloquence here is not ornament; it is the instrument by which a message reaches a hostile court. Allah gave the mission the voice it required, and that voice belonged to someone else.",
            bn: "কুরআন তাঁর ভূমিকাকে যুক্ত করে তাঁর বাচনভঙ্গির সঙ্গে। মূসা প্রার্থনা করেছিলেন তাঁর জিহ্বার জড়তা খুলে দেওয়া হোক যাতে তাঁর কথা বোঝা যায় (20:27-28), আর ভাইকে বলেছিলেন দুজনের মধ্যে অধিক বাকপটু (28:34)। এখানে বাগ্মিতা অলংকার নয়; এটি সেই যন্ত্র যার মাধ্যমে বার্তা এক বৈরী দরবার পর্যন্ত পৌঁছায়। আল্লাহ এ দায়িত্বকে প্রয়োজনীয় কণ্ঠ দিয়েছেন, আর সে কণ্ঠ ছিল অন্য একজনের।",
          },
          {
            en: "The purpose of the partnership is stated by Musa himself: let him share my task, that we may glorify You much and remember You much, for You are ever seeing us (20:32-35). Two prophets were joined not to make the work efficient but to make the worship greater. 21:48 records the outcome — We gave Musa and Harun the criterion, a light, and a reminder for the righteous.",
            bn: "এই অংশীদারিত্বের উদ্দেশ্য মূসা নিজেই বলেছেন: তাঁকে আমার কাজে শরিক করুন, যাতে আমরা আপনার অধিক পবিত্রতা ঘোষণা করি ও আপনাকে অধিক স্মরণ করি; আপনি তো আমাদের দেখছেন (20:32-35)। দুই নবীকে একত্র করা হয়েছিল কাজ দ্রুত করতে নয়, ইবাদত বাড়াতে। 21:48 ফলাফলটি লিপিবদ্ধ করে — আমি মূসা ও হারুনকে দিয়েছি ফুরকান, আলো ও মুত্তাকিদের জন্য উপদেশ।",
          },
        ],
      },
      {
        h: { en: "Left in Charge", bn: "দায়িত্বে রেখে যাওয়া" },
        p: [
          {
            en: "When Musa left for the appointment with his Lord, he handed the community to his brother: take my place among my people, do right, and do not follow the way of the corrupters (7:142). It is the hardest kind of trust — authority without the presence of the one who holds it, over a people newly delivered and not yet settled in faith.",
            bn: "মূসা যখন প্রভুর নির্ধারিত সাক্ষাতে রওনা হন, তিনি সম্প্রদায়টিকে ভাইয়ের হাতে তুলে দেন: আমার সম্প্রদায়ে আমার স্থলাভিষিক্ত হও, সংশোধন করো, আর বিপর্যয় সৃষ্টিকারীদের পথ অনুসরণ কোরো না (7:142)। এ এক কঠিনতম আমানত — যে কর্তৃত্বের প্রকৃত অধিকারী উপস্থিত নেই, আর যাদের ওপর কর্তৃত্ব তারা সদ্য মুক্তিপ্রাপ্ত, ঈমানে এখনো থিতু নয়।",
          },
          {
            en: "The Samiri produced a calf, and the people took it (20:85-88). Harun did not stay quiet. He told them plainly: my people, you are only being tested by it, and your Lord is the Most Merciful, so follow me and obey my command (20:90). They answered that they would not cease being devoted to it until Musa returned (20:91). He had spoken the truth and had been overruled by a crowd.",
            bn: "সামিরি এক বাছুর তৈরি করে, আর লোকেরা তা গ্রহণ করে (20:85-88)। হারুন চুপ থাকেননি। তিনি স্পষ্ট করেই বলেন: হে আমার সম্প্রদায়, এর দ্বারা তোমাদের পরীক্ষা করা হচ্ছে; তোমাদের প্রতিপালক তো পরম দয়াময়, সুতরাং আমাকে অনুসরণ করো ও আমার নির্দেশ মানো (20:90)। তারা জবাব দেয়, মূসা না ফেরা পর্যন্ত তারা এর পূজা ছাড়বে না (20:91)। তিনি সত্য বলেছিলেন, আর জনতার কাছে হেরে গিয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "Son of My Mother", bn: "হে আমার মায়ের ছেলে" },
        p: [
          {
            en: "Musa came back and rebuked him — what held you back when you saw them going astray? (20:92-93) — and in Surah al-A'raf he seizes his brother by the head and pulls him towards himself (7:150). Harun's reply is one of the gentlest defences in the Quran: son of my mother, do not seize me by my beard or my head; I feared you would say that I had divided the Children of Israel and had not observed your word (20:94). He had judged that a split community was a worse ruin than a delayed correction.",
            bn: "মূসা ফিরে এসে তিরস্কার করেন — তাদের পথভ্রষ্ট হতে দেখে কী তোমাকে বাধা দিয়েছিল? (20:92-93) — আর সূরা আল-আ'রাফে তিনি ক্রোধে ভাইয়ের মাথা ধরে নিজের দিকে টানেন (7:150)। হারুনের জবাব কুরআনের কোমলতম আত্মপক্ষ সমর্থনগুলোর একটি: হে আমার মায়ের ছেলে, আমার দাড়ি বা মাথা ধরে টেনো না; আমি আশঙ্কা করেছিলাম তুমি বলবে, আমি বনী ইসরাঈলের মধ্যে বিভেদ ঘটিয়েছি এবং তোমার কথা রক্ষা করিনি (20:94)। তাঁর বিবেচনা ছিল, বিভক্ত সম্প্রদায় বিলম্বিত সংশোধনের চেয়েও বড় ধ্বংস।",
          },
          {
            en: "In the account in Sura al-A'raf he adds that the people had overpowered him and had almost killed him, and asks that the enemies not be given cause to rejoice over him (7:150). Musa's response settles the matter: my Lord, forgive me and my brother, and admit us into Your mercy (7:151). The Quran preserves the anger and the answer together, and neither brother is diminished by it.",
            bn: "সূরা আরাফের বর্ণনায় তিনি যোগ করেন, লোকেরা তাঁকে দুর্বল করে ফেলেছিল এবং প্রায় হত্যাই করে ফেলছিল; তিনি অনুরোধ করেন, শত্রুদের যেন তাঁকে নিয়ে আনন্দ করার সুযোগ না দেওয়া হয় (7:150)। মূসার প্রতিক্রিয়া বিষয়টির নিষ্পত্তি করে: হে আমার প্রভু, আমাকে ও আমার ভাইকে ক্ষমা করুন এবং আমাদের আপনার রহমতে দাখিল করুন (7:151)। কুরআন ক্রোধ ও জবাব দুটোই ধরে রেখেছে, আর তাতে কোনো ভাইয়েরই মর্যাদা কমেনি।",
          },
        ],
      },
      {
        h: { en: "Peace Upon Musa and Harun", bn: "মূসা ও হারুনের প্রতি সালাম" },
        p: [
          {
            en: "Sura as-Saffat gathers his standing in a few lines: We conferred favour upon Musa and Harun, saved them and their people from the great distress, supported them so they were the victors, gave them the clarifying Scripture and guided them to the straight path, and left for them among later generations the words, peace upon Musa and Harun (37:114-120). The favour is named for both, without ranking.",
            bn: "সূরা সাফফাত তাঁর মর্যাদা কয়েকটি বাক্যেই জড়ো করে: আমি মূসা ও হারুনের প্রতি অনুগ্রহ করেছি, তাঁদের ও তাঁদের সম্প্রদায়কে মহাসংকট থেকে উদ্ধার করেছি, তাঁদের সাহায্য করেছি ফলে তাঁরাই বিজয়ী হয়েছেন, তাঁদের দিয়েছি সুস্পষ্ট কিতাব ও সরল পথের হিদায়াত, আর পরবর্তীদের মধ্যে রেখে দিয়েছি এই বাণী — মূসা ও হারুনের প্রতি সালাম (37:114-120)। অনুগ্রহের কথা এসেছে দুজনের জন্যই, কোনো ক্রমবিন্যাস ছাড়া।",
          },
          {
            en: "His house remained a mark of blessing: the ark that came to the Children of Israel carried a remnant of what the family of Musa and the family of Harun had left (2:248). He is counted among the guided in 6:84, and 4:163 names him among those given revelation. In the narration of the night journey recorded by al-Bukhari and Muslim, the Prophet ﷺ met him in the fifth heaven.",
            bn: "তাঁর ঘর বরকতের চিহ্ন হয়ে থাকে: বনী ইসরাঈলের কাছে আসা সিন্দুকে ছিল মূসা-পরিবার ও হারুন-পরিবারের রেখে যাওয়া নিদর্শনের অবশিষ্ট (2:248)। 6:84 আয়াতে তিনি হিদায়াতপ্রাপ্তদের মধ্যে গণিত, আর 4:163 তাঁকে ওহিপ্রাপ্তদের মধ্যে নাম করে উল্লেখ করে। বুখারি ও মুসলিমে লিপিবদ্ধ মিরাজের বর্ণনায় নবী ﷺ তাঁর সঙ্গে সাক্ষাৎ করেন পঞ্চম আকাশে।",
          },
        ],
      },
    ],
  },
  dhulkifl: {
    sections: [
      {
        h: { en: "Two Verses and No More", bn: "দুটি আয়াত, তার বেশি নয়" },
        p: [
          {
            en: "Dhul-Kifl (AS) is named twice in the Quran and nowhere else. The first mention is 21:85, where he is listed with Isma'il and Idris, and all of them are said to be of the patient. The second is 38:48, where he is listed with Isma'il and al-Yasa', and all of them are said to be of the outstanding. Every honest account of him begins by saying that this is the whole of the record.",
            bn: "যুলকিফল (আঃ)-এর নাম কুরআনে এসেছে দুইবার, আর কোথাও নয়। প্রথম উল্লেখ 21:85, যেখানে তাঁকে ইসমাঈল ও ইদরিসের সঙ্গে রাখা হয়েছে এবং বলা হয়েছে তাঁরা সবাই ছিলেন ধৈর্যশীলদের অন্তর্ভুক্ত। দ্বিতীয়টি 38:48, যেখানে তাঁকে ইসমাঈল ও আল-ইয়াসার সঙ্গে রাখা হয়েছে এবং বলা হয়েছে তাঁরা সবাই ছিলেন উত্তমদের অন্তর্ভুক্ত। তাঁকে নিয়ে যেকোনো সৎ আলোচনার শুরু হওয়া উচিত এ কথা দিয়েই যে, নথিপত্র এটুকুই।",
          },
          {
            en: "We are not told his people, his land, his century, what he was sent with, or what happened to him. There is no episode, no dialogue, no trial described. What each verse does supply is a verdict, and in both places the verdict is followed immediately by a consequence: We admitted them into Our mercy, indeed they were of the righteous (21:86); and this is a reminder (38:49).",
            bn: "তাঁর সম্প্রদায়, ভূমি, শতাব্দী, কী নিয়ে তিনি প্রেরিত হয়েছিলেন কিংবা তাঁর পরিণতি কী — কিছুই আমাদের জানানো হয়নি। কোনো ঘটনা নেই, সংলাপ নেই, কোনো পরীক্ষার বর্ণনাও নেই। প্রতিটি আয়াত যা দেয় তা হলো একটি রায়, আর দুই জায়গাতেই রায়ের পরপরই আসে তার ফল: আমি তাঁদের আমার রহমতে দাখিল করেছি, নিশ্চয়ই তাঁরা ছিলেন সৎকর্মশীলদের অন্তর্ভুক্ত (21:86); আর এ এক উপদেশ (38:49)।",
          },
        ],
      },
      {
        h: { en: "The Company He Keeps", bn: "যাঁদের সঙ্গে তাঁর নাম" },
        p: [
          {
            en: "In Sura al-Anbiya his name falls inside a procession of prophets. Nuh is answered (21:76), Dawud and Sulayman judge and are taught (21:78-79), Ayyub calls out in his affliction and is healed (21:83), and then, immediately after, come Isma'il, Idris and Dhul-Kifl, all of the patient (21:85). Directly after him the surah turns to Yunus, who called out from the darkness and was answered (21:87), and to Zakariya, who was given a son in old age (21:89-90). He stands at the point where the surah is speaking about endurance and the answer that follows it.",
            bn: "সূরা আম্বিয়ায় তাঁর নাম পড়েছে নবীদের এক মিছিলের ভেতরে। নূহের ডাকে সাড়া দেওয়া হয় (21:76), দাউদ ও সুলাইমান বিচার করেন ও জ্ঞান লাভ করেন (21:78-79), আইয়ুব বিপদে ডাকেন ও আরোগ্য পান (21:83), আর ঠিক এরপরই আসেন ইসমাঈল, ইদরিস ও যুলকিফল — সবাই ধৈর্যশীলদের অন্তর্ভুক্ত (21:85)। তাঁর পরপরই সূরাটি যায় ইউনুসের দিকে, যিনি অন্ধকার থেকে ডেকেছিলেন ও সাড়া পেয়েছিলেন (21:87), এরপর যাকারিয়ার দিকে, যাঁকে বার্ধক্যে পুত্র দেওয়া হয়েছিল (21:89-90)। সূরাটি যখন অবিচলতা ও তার পরের সাড়া নিয়ে কথা বলছে, ঠিক সেখানেই তিনি দাঁড়িয়ে আছেন।",
          },
          {
            en: "Sura Sad does the same thing with a different list. Dawud is remembered as the possessor of strength who turned constantly to Allah (38:17), Sulayman is called an excellent servant (38:30), Ayyub is found patient (38:44), Ibrahim, Ishaq and Ya'qub are named men of strength and vision and among the chosen (38:45-47), and then Isma'il, al-Yasa' and Dhul-Kifl close the list among the outstanding (38:48).",
            bn: "সূরা সাদ একই কাজ করে ভিন্ন এক তালিকায়। দাউদকে স্মরণ করা হয় শক্তির অধিকারী হিসেবে, যিনি সর্বদা আল্লাহর দিকে ফিরতেন (38:17), সুলাইমানকে বলা হয় উত্তম বান্দা (38:30), আইয়ুবকে পাওয়া যায় ধৈর্যশীল (38:44), ইবরাহীম, ইসহাক ও ইয়াকুবকে বলা হয় শক্তি ও অন্তর্দৃষ্টির অধিকারী এবং মনোনীতদের অন্তর্ভুক্ত (38:45-47), আর এরপর ইসমাঈল, আল-ইয়াসা ও যুলকিফল উত্তমদের মধ্যে থেকে তালিকাটি শেষ করেন (38:48)।",
          },
        ],
      },
      {
        h: { en: "Patient and Outstanding", bn: "ধৈর্যশীল ও উত্তম" },
        p: [
          {
            en: "Two descriptions are attached to him, and both are weighty. To be of the patient, in the language of these surahs, is not to be passive; it is what Ayyub is praised for after years of loss, and what Isma'il showed when he told his father he would be found, if Allah willed, among the patient (37:102). The word carries a life, even when the life is not described.",
            bn: "তাঁর সঙ্গে যুক্ত হয়েছে দুটি বিশেষণ, আর দুটিই ভারী। এই সূরাগুলোর ভাষায় ধৈর্যশীলদের অন্তর্ভুক্ত হওয়া মানে নিষ্ক্রিয়তা নয়; বছরের পর বছর ক্ষতির পর আইয়ুবের প্রশংসাও এই গুণেই, আর ইসমাঈলও এই গুণই দেখিয়েছিলেন যখন তিনি পিতাকে বলেছিলেন, আল্লাহ চাইলে তিনি ধৈর্যশীলদের মধ্যেই পাওয়া যাবেন (37:102)। শব্দটি একটি গোটা জীবন বহন করে, সেই জীবনের বর্ণনা না থাকলেও।",
          },
          {
            en: "The second word, al-akhyar, means the chosen and the best. In the same passage it is used of Ibrahim, Ishaq and Ya'qub, who are called among the chosen and the outstanding (38:47). So a man about whom we know almost nothing is given, in a single clause, the same class of praise as the patriarchs whose stories fill whole surahs. The reward is not proportioned to the length of the record.",
            bn: "দ্বিতীয় শব্দ আল-আখইয়ার, অর্থাৎ মনোনীত ও উত্তম। একই অংশে এ শব্দ ব্যবহৃত হয়েছে ইবরাহীম, ইসহাক ও ইয়াকুবের জন্য, যাঁদের বলা হয়েছে মনোনীত ও উত্তমদের অন্তর্ভুক্ত (38:47)। অর্থাৎ যাঁর সম্পর্কে আমরা প্রায় কিছুই জানি না, একটিমাত্র বাক্যাংশে তাঁকে দেওয়া হয়েছে সেই একই শ্রেণির প্রশংসা, যা পেয়েছেন সেই পিতৃপুরুষরা যাঁদের কাহিনি গোটা সূরা জুড়ে আছে। প্রতিদান নথির দৈর্ঘ্য মেপে দেওয়া হয় না।",
          },
        ],
      },
      {
        h: { en: "What Is Not Known", bn: "যা জানা নেই" },
        p: [
          {
            en: "The name itself has been read in more than one way. Kifl in Arabic can mean a share or portion, and it can mean standing surety for something, and commentators have explained his title through both senses. Scholars have also differed over whether he was a prophet or a righteous man of an earlier community, and some have tried to identify him with figures known from earlier scriptures.",
            bn: "নামটি নিজেই একাধিকভাবে পড়া হয়েছে। আরবিতে কিফল মানে হতে পারে অংশ বা ভাগ, আবার কোনো কিছুর জামিন হওয়াও বোঝাতে পারে; তাফসিরকারগণ দুই অর্থেই তাঁর উপাধির ব্যাখ্যা দিয়েছেন। তিনি নবী ছিলেন, না কোনো পূর্ববর্তী সম্প্রদায়ের সৎকর্মশীল ব্যক্তি — এ নিয়েও আলেমগণ ভিন্নমত পোষণ করেছেন, আর কেউ কেউ পূর্ববর্তী ধর্মগ্রন্থে পরিচিত ব্যক্তিত্বের সঙ্গে তাঁকে মেলানোর চেষ্টা করেছেন।",
          },
          {
            en: "None of this is settled, and it is not the reader's job to settle it. The detailed stories told about him come from Israelite reports rather than from the Quran or an authentic hadith. The Prophet ﷺ permitted narrating from the Children of Israel, as al-Bukhari records, but such reports are not to be affirmed or denied when nothing confirms them. A teacher who says plainly that we do not know is teaching correctly.",
            bn: "এর কোনোটিরই নিষ্পত্তি হয়নি, আর নিষ্পত্তি করা পাঠকের কাজও নয়। তাঁকে নিয়ে যেসব বিস্তারিত কাহিনি বলা হয় তা এসেছে ইসরাঈলি বর্ণনা থেকে, কুরআন বা সহিহ হাদিস থেকে নয়। নবী ﷺ বনী ইসরাঈল থেকে বর্ণনা করার অনুমতি দিয়েছেন, যেমন বুখারি লিপিবদ্ধ করেছেন; তবে যা নিশ্চিত করার কিছু নেই তা সত্যায়নও করা যায় না, মিথ্যা বলাও যায় না। যে শিক্ষক স্পষ্ট করে বলেন আমরা জানি না, তিনিই সঠিক শেখাচ্ছেন।",
          },
        ],
      },
      {
        h: { en: "Silence Is Not Diminishment", bn: "নীরবতা মানে অবমূল্যায়ন নয়" },
        p: [
          {
            en: "The Quran states its own policy on this. Allah says that He sent messengers whose accounts He has related to His Prophet ﷺ and messengers whose accounts He has not related (4:164), and 40:78 repeats it. Names without stories are therefore not oversights. The Book is not a biographical dictionary; its purpose in the accounts it does give is stated in 12:111, that in them is a lesson for people of understanding.",
            bn: "কুরআন এ বিষয়ে নিজের নীতিই ঘোষণা করেছে। আল্লাহ বলেন, তিনি এমন রাসূল পাঠিয়েছেন যাঁদের বৃত্তান্ত তিনি তাঁর নবী ﷺ-কে জানিয়েছেন, আবার এমন রাসূলও পাঠিয়েছেন যাঁদের বৃত্তান্ত জানাননি (4:164); 40:78 আয়াতেও তা পুনরাবৃত্ত। তাই কাহিনিহীন নামগুলো কোনো ভুলে যাওয়া নয়। এ গ্রন্থ জীবনীকোষ নয়; যেসব বৃত্তান্ত এটি দেয় তার উদ্দেশ্য 12:111 আয়াতে বলা আছে — তাতে বোধসম্পন্ন মানুষের জন্য শিক্ষা রয়েছে।",
          },
          {
            en: "That is why his two verses are enough. A man is remembered by Allah for holding fast and for being among the best, and admitted into His mercy (21:86), and the world knows nothing else about him. Most believers will leave a record no longer than that. Dhul-Kifl stands in the Quran as evidence that the record which matters is not written by people, and that patience is never lost even when its story is.",
            bn: "এ কারণেই তাঁর দুটি আয়াতই যথেষ্ট। এক ব্যক্তিকে আল্লাহ স্মরণ করেছেন অবিচল থাকার জন্য ও উত্তমদের অন্তর্ভুক্ত হওয়ার জন্য, আর তাঁকে দাখিল করেছেন নিজের রহমতে (21:86) — অথচ দুনিয়া তাঁর সম্পর্কে আর কিছুই জানে না। অধিকাংশ মুমিনের রেখে যাওয়া নথিও এর চেয়ে দীর্ঘ হবে না। যুলকিফল কুরআনে দাঁড়িয়ে আছেন এই প্রমাণ হয়ে যে, যে নথি গুরুত্বপূর্ণ তা মানুষ লেখে না, আর ধৈর্য কখনো হারায় না — তার কাহিনি হারিয়ে গেলেও।",
          },
        ],
      },
    ],
  },
  dawud: {
    sections: [
      {
        h: { en: "The Youth Who Faced Jalut", bn: "যে তরুণ জালুতের মুখোমুখি" },
        p: [
          {
            en: "Dawud (AS) first appears as a young man in someone else's army. The Children of Israel had asked a prophet of theirs to appoint a king so they could fight in the way of Allah, Talut was appointed, and the army was thinned by a test at a river until only a few crossed (2:246-249). Those few said that many a small company has overcome a large company by the permission of Allah.",
            bn: "দাউদ (আঃ) প্রথম দেখা দেন অন্যের সেনাদলে এক তরুণ হিসেবে। বনী ইসরাঈল তাদের এক নবীর কাছে চেয়েছিল একজন রাজা নিযুক্ত করা হোক, যাতে তারা আল্লাহর পথে লড়তে পারে; তালুত নিযুক্ত হন, আর এক নদীর পরীক্ষায় সেনাদল ছেঁটে যায় — অল্প কয়েকজনই পার হয় (2:246-249)। সেই অল্প কয়েকজনই বলেছিল, আল্লাহর অনুমতিতে কত ছোট দল বড় দলের ওপর বিজয়ী হয়েছে।",
          },
          {
            en: "Facing Jalut they prayed for patience, firm feet and victory (2:250). Then comes the verse that changes his life in a single line: Dawud killed Jalut, and Allah gave him the kingship and prophethood and taught him from what He willed (2:251). The same verse adds that were it not for Allah checking one people by means of another, the earth would be corrupted.",
            bn: "জালুতের মুখোমুখি হয়ে তারা প্রার্থনা করে ধৈর্য, পদক্ষেপে দৃঢ়তা ও বিজয়ের (2:250)। এরপর আসে সেই আয়াত যা এক বাক্যেই তাঁর জীবন বদলে দেয়: দাউদ জালুতকে হত্যা করেন, আর আল্লাহ তাঁকে রাজত্ব ও নবুয়ত দান করেন এবং তাঁকে শেখান যা তিনি চেয়েছেন (2:251)। একই আয়াত যোগ করে, আল্লাহ যদি এক দল দিয়ে আরেক দলকে প্রতিহত না করতেন, তবে পৃথিবী বিপর্যস্ত হয়ে যেত।",
          },
        ],
      },
      {
        h: { en: "Kingship and the Zabur", bn: "রাজত্ব ও যাবুর" },
        p: [
          {
            en: "He is one of the few prophets given both authority and a book. To Dawud We gave the Zabur, says 4:163, and 17:55 repeats it in the same words. The Quran quotes from it once: We wrote in the Zabur, after the Reminder, that the earth is inherited by My righteous servants (21:105). A book given to a king, and its remembered line is about the meek inheriting the land.",
            bn: "যে অল্পসংখ্যক নবীকে একসঙ্গে কর্তৃত্ব ও কিতাব দেওয়া হয়েছে, তিনি তাঁদের একজন। 4:163 বলে, দাউদকে আমি যাবুর দিয়েছি; 17:55 একই কথার পুনরাবৃত্তি করে। কুরআন একবার তা থেকে উদ্ধৃতিও দেয়: উপদেশের পর আমি যাবুরে লিখে দিয়েছি যে পৃথিবীর উত্তরাধিকারী হবে আমার সৎকর্মশীল বান্দারা (21:105)। এক রাজাকে দেওয়া কিতাব, আর তার স্মরণীয় বাক্যটি সৎকর্মশীলদের ভূমি-উত্তরাধিকার নিয়ে।",
          },
          {
            en: "Al-Bukhari records that recitation was made easy for him: he would order his mount to be saddled and would finish reciting the Zabur before the saddling was done. A man with a kingdom to run had the Book in his mouth while the animals were prepared, which is why 38:20 can say his kingdom was strengthened and he was given wisdom and decisive speech.",
            bn: "বুখারি বর্ণনা করেন, তাঁর জন্য তিলাওয়াত সহজ করে দেওয়া হয়েছিল: তিনি বাহনে জিন লাগানোর নির্দেশ দিতেন, আর জিন লাগানো শেষ হওয়ার আগেই যাবুর পাঠ শেষ করে ফেলতেন। যাঁর হাতে গোটা রাজ্য চালানোর ভার, পশু প্রস্তুত হওয়ার ফাঁকেই কিতাব ছিল তাঁর মুখে — এ কারণেই 38:20 বলতে পারে, তাঁর রাজত্ব সুদৃঢ় করা হয়েছিল এবং তাঁকে দেওয়া হয়েছিল প্রজ্ঞা ও চূড়ান্ত মীমাংসার ভাষা।",
          },
        ],
      },
      {
        h: { en: "Mountains and Birds", bn: "পাহাড় ও পাখি" },
        p: [
          {
            en: "The miracle he is best known for is not a display of power but of praise. O mountains, repeat the glorification with him, and the birds (34:10). We subjected the mountains to exalt Allah with Dawud, and the birds, and it was We who did it (21:79). A voice was given to him that the creation joined, so that his worship was audible in the hills.",
            bn: "যে মুজিজার জন্য তিনি সর্বাধিক পরিচিত, তা ক্ষমতার প্রদর্শনী নয়, প্রশংসার। হে পাহাড়সমূহ, তার সঙ্গে তাসবিহ পাঠ করো, আর হে পাখিরা, তোমরাও (34:10)। আমি পাহাড়গুলোকে অনুগত করেছিলাম, তারা দাউদের সঙ্গে আল্লাহর পবিত্রতা ঘোষণা করত, আর পাখিরাও; আমিই তা করেছিলাম (21:79)। তাঁকে এমন এক কণ্ঠ দেওয়া হয়েছিল যাতে সৃষ্টিও যোগ দিত — তাঁর ইবাদত পাহাড়েও শোনা যেত।",
          },
          {
            en: "Sura Sad sets it in a daily rhythm: We subjected the mountains to exalt Allah with him in the evening and after sunrise, and the birds gathered, all turning back to Him with him (38:18-19). The same passage calls him the possessor of strength and one who constantly returned to his Lord (38:17). Strength and repentance are placed side by side, as if neither is complete without the other.",
            bn: "সূরা সাদ একে দৈনন্দিন ছন্দে বসায়: আমি পাহাড়গুলোকে অনুগত করেছিলাম, তারা সন্ধ্যায় ও সূর্যোদয়ের পর তাঁর সঙ্গে আল্লাহর পবিত্রতা ঘোষণা করত, আর পাখিরা জড়ো হতো — সবাই তাঁর সঙ্গে আল্লাহর দিকে প্রত্যাবর্তনশীল (38:18-19)। একই অংশ তাঁকে বলে শক্তির অধিকারী ও সর্বদা প্রভুর দিকে প্রত্যাবর্তনকারী (38:17)। শক্তি ও তওবাকে পাশাপাশি রাখা হয়েছে, যেন একটি ছাড়া অন্যটি পূর্ণ নয়।",
          },
        ],
      },
      {
        h: { en: "Iron in His Hands", bn: "তাঁর হাতে লোহা" },
        p: [
          {
            en: "Allah made iron soft for him and taught him a trade with it: make full coats of mail, and measure the links precisely, and work righteousness (34:10-11). The instruction is remarkable for its exactness. A miracle is given, and then a standard of craftsmanship is imposed on it, along with the reminder that Allah sees what is done.",
            bn: "আল্লাহ তাঁর জন্য লোহাকে নরম করে দেন এবং তা দিয়ে একটি পেশাও শেখান: পূর্ণাঙ্গ বর্ম তৈরি করো, কড়াগুলোর মাপ নিখুঁত রাখো, আর সৎকর্ম করো (34:10-11)। নির্দেশটি তার নিখুঁততার কারণেই অসাধারণ। একটি মুজিজা দেওয়া হয়, এরপর তার ওপরই আরোপ করা হয় কারিগরির মান, সঙ্গে এই স্মরণ যে আল্লাহ দেখছেন কী করা হচ্ছে।",
          },
          {
            en: "21:80 states the purpose — We taught him the making of armour for you, to protect you from your violence — so the gift served other people's safety, not his own display. Al-Bukhari records the Prophet ﷺ saying that no one has eaten better food than what he earns with his own hand, and that the prophet of Allah Dawud ate from the work of his hand.",
            bn: "21:80 উদ্দেশ্যটি বলে দেয় — আমি তাকে তোমাদের জন্য বর্ম তৈরি শিখিয়েছি, যাতে তা তোমাদের যুদ্ধ থেকে রক্ষা করে — অর্থাৎ দানটি কাজে লেগেছে অন্যের নিরাপত্তায়, নিজের প্রদর্শনীতে নয়। বুখারি বর্ণনা করেন, নবী ﷺ বলেছেন, নিজের হাতের উপার্জনের চেয়ে উত্তম খাবার কেউ কখনো খায়নি; আর আল্লাহর নবী দাউদ নিজ হাতের উপার্জন থেকেই খেতেন।",
          },
        ],
      },
      {
        h: { en: "Judging Between People", bn: "মানুষের মধ্যে বিচার" },
        p: [
          {
            en: "The Quran shows him at work as a judge. Dawud and Sulayman gave judgement about a field into which sheep had strayed at night, and We gave Sulayman understanding of it, and to each We gave judgement and knowledge (21:78-79). The father is not diminished by the son's better answer; both are praised in the same breath, and the passage moves straight on to the mountains that glorified with him.",
            bn: "কুরআন তাঁকে দেখায় বিচারকের আসনে। দাউদ ও সুলাইমান এমন এক ক্ষেত নিয়ে ফায়সালা দেন যেখানে রাতে মেষ ঢুকে পড়েছিল; আমি সুলাইমানকে বিষয়টির সঠিক উপলব্ধি দিয়েছিলাম, আর প্রত্যেককেই দিয়েছিলাম প্রজ্ঞা ও জ্ঞান (21:78-79)। পুত্রের উত্তম জবাবে পিতার মর্যাদা কমে না; একই নিঃশ্বাসে দুজনেরই প্রশংসা হয়, আর অংশটি এগিয়ে যায় সেই পাহাড়ের কথায় যারা তাঁর সঙ্গে তাসবিহ পড়ত।",
          },
          {
            en: "The charge given to him is unique in the Quran: O Dawud, We have made you a successor upon the earth, so judge between people in truth, and do not follow desire, for it will lead you astray from the path of Allah (38:26). Authority is described first as a trust and immediately as a danger. He and Sulayman were given knowledge, and their response was to praise Allah for it (27:15).",
            bn: "তাঁকে দেওয়া নির্দেশটি কুরআনে অনন্য: হে দাউদ, আমি তোমাকে পৃথিবীতে প্রতিনিধি করেছি, সুতরাং মানুষের মধ্যে ন্যায়ের সঙ্গে বিচার করো, আর খেয়ালখুশির অনুসরণ কোরো না — তা তোমাকে আল্লাহর পথ থেকে বিচ্যুত করবে (38:26)। কর্তৃত্বকে প্রথমে বলা হয়েছে আমানত, পরক্ষণেই বিপদ। তাঁকে ও সুলাইমানকে জ্ঞান দেওয়া হয়েছিল, আর তাঁদের প্রতিক্রিয়া ছিল সে জন্য আল্লাহর প্রশংসা করা (27:15)।",
          },
        ],
      },
      {
        h: { en: "The Two Disputants", bn: "দুই বিবাদী" },
        p: [
          {
            en: "Two men climbed the wall into his prayer chamber and alarmed him; they said, do not fear, we are two disputants, so judge between us with truth (38:21-22). One had ninety-nine ewes and the other a single ewe, and the first had demanded it (38:23). He gave his judgement, then realised that Allah had tried him, and he asked forgiveness and fell down bowing, turning back to Him (38:24).",
            bn: "দুই ব্যক্তি প্রাচীর ডিঙিয়ে তাঁর ইবাদতকক্ষে ঢুকে পড়ে ও তাঁকে চমকে দেয়; তারা বলে, ভয় পেয়ো না, আমরা দুই বিবাদী, আমাদের মধ্যে ন্যায়ের সঙ্গে ফায়সালা করো (38:21-22)। একজনের ছিল নিরানব্বইটি দুম্বা আর অন্যজনের মাত্র একটি, আর প্রথমজন সেটিই দাবি করেছিল (38:23)। তিনি ফায়সালা দেন, এরপর বুঝতে পারেন আল্লাহ তাঁকে পরীক্ষা করেছেন; তিনি ক্ষমা চেয়ে সিজদায় লুটিয়ে পড়েন ও তাঁর দিকেই ফেরেন (38:24)।",
          },
          {
            en: "So We forgave him that, and indeed for him is nearness to Us and a good place of return (38:25). The Quran says no more, and it is better to say no more; the detailed tales that circulate about this episode have no basis in the Book or in an authentic report. What the surah does next is give the charge to judge in truth (38:26).",
            bn: "অতঃপর আমি তাকে ক্ষমা করে দিলাম, আর নিশ্চয়ই আমার কাছে তার জন্য রয়েছে নৈকট্য ও উত্তম প্রত্যাবর্তনস্থল (38:25)। কুরআন এর বেশি বলে না, আর না বলাই উত্তম; এ ঘটনাকে ঘিরে যেসব বিস্তারিত কাহিনি প্রচলিত, কুরআনে বা সহিহ বর্ণনায় তার কোনো ভিত্তি নেই। সূরাটি এরপর যা করে তা হলো ন্যায়ের সঙ্গে বিচারের নির্দেশ দেওয়া (38:26)।",
          },
        ],
      },
      {
        h: { en: "Fasting a Day, Standing a Third", bn: "একদিন রোজা, রাতের এক-তৃতীয়াংশ কিয়াম" },
        p: [
          {
            en: "His worship became a standard the Prophet ﷺ recommended by name. In al-Bukhari and Muslim he said that the most beloved fasting to Allah is the fasting of Dawud, who fasted a day and broke a day, and the most beloved prayer to Allah is the prayer of Dawud, who slept half the night, stood a third of it, and slept a sixth.",
            bn: "তাঁর ইবাদত এমন এক মানদণ্ডে পরিণত হয় যা নবী ﷺ নাম ধরেই সুপারিশ করেছেন। বুখারি ও মুসলিমে তিনি বলেছেন, আল্লাহর কাছে সর্বাধিক প্রিয় রোজা দাউদের রোজা — তিনি একদিন রোজা রাখতেন, একদিন রাখতেন না; আর আল্লাহর কাছে সর্বাধিক প্রিয় নামাজ দাউদের নামাজ — তিনি রাতের অর্ধেক ঘুমাতেন, এক-তৃতীয়াংশ দাঁড়িয়ে থাকতেন, আর এক-ষষ্ঠাংশ ঘুমাতেন।",
          },
          {
            en: "It is a life balanced rather than extreme, sustained rather than heroic. The command that gathers it all is given to his household: work, family of Dawud, in gratitude — and few of My servants are grateful (34:13). A youth who faced a tyrant, a king who judged, a craftsman who ate from his own hands, and a worshipper who kept his nights, is finally asked for one thing, and it is thankfulness.",
            bn: "এ এমন এক জীবন যা চরম নয়, ভারসাম্যপূর্ণ; বীরত্বপূর্ণ নয়, বরং টেকসই। সব মিলিয়ে যে নির্দেশটি আসে তা দেওয়া হয় তাঁর পরিবারকেই: হে দাউদ-পরিবার, কৃতজ্ঞতার সঙ্গে কাজ করো — আর আমার বান্দাদের অল্পসংখ্যকই কৃতজ্ঞ (34:13)। যে তরুণ এক স্বৈরাচারীর মুখোমুখি হয়েছিলেন, যে রাজা বিচার করতেন, যে কারিগর নিজ হাতের উপার্জনে খেতেন, আর যে ইবাদতকারী রাত জাগতেন — তাঁর কাছে শেষ পর্যন্ত চাওয়া হলো একটি জিনিসই, কৃতজ্ঞতা।",
          },
        ],
      },
    ],
  },
  adam: {
    sections: [
      {
        h: { en: "Announced Before He Was Made", bn: "সৃষ্টির আগেই ঘোষণা" },
        p: [
          {
            en: "The account of Adam (AS) begins not with a body but with an announcement. Before he existed, Allah told the angels that He was placing upon the earth a khalifah, one who would hold authority there in trust (2:30). The angels asked how such a creature could be given that rank when it would shed blood and spread corruption. Their question was inquiry, not objection, and the answer closed it completely: I know what you do not know.",
            bn: "আদম (আঃ)-এর বিবরণ শুরু হয় কোনো দেহ দিয়ে নয়, এক ঘোষণা দিয়ে। তাঁর অস্তিত্বের আগেই আল্লাহ ফেরেশতাদের জানান যে তিনি পৃথিবীতে একজন খলীফা স্থাপন করছেন, যিনি সেখানে আমানত হিসেবে কর্তৃত্ব বহন করবেন (2:30)। ফেরেশতারা জিজ্ঞেস করেন, যে সৃষ্টি রক্তপাত ঘটাবে ও বিপর্যয় ছড়াবে, তাকে কেন এই মর্যাদা দেওয়া হবে। তাঁদের কথা ছিল জিজ্ঞাসা, আপত্তি নয়; আর উত্তরটি সব প্রশ্ন থামিয়ে দেয় — আমি যা জানি, তোমরা তা জানো না।",
          },
          {
            en: "The making itself holds two truths together. Adam was shaped from clay, from sounding clay of altered black mud (15:28), the most ordinary material there is. Then Allah breathed into him of His spirit and commanded the angels to fall prostrate (15:29). To Iblis, Allah says plainly that He created Adam with His own hands (38:75). Dust and honour in one being. Every later question about human dignity and human weakness is already answered in that pairing.",
            bn: "সৃষ্টির বর্ণনাটিও দুটি সত্যকে একসাথে ধরে রাখে। আদমকে গড়া হয় মাটি থেকে, পরিবর্তিত কালো কাদার শুকনো ঠনঠনে মাটি থেকে (15:28) — সবচেয়ে সাধারণ উপাদান। এরপর আল্লাহ তাঁর মধ্যে নিজের পক্ষ থেকে রূহ ফুঁকে দেন এবং ফেরেশতাদের সিজদায় লুটিয়ে পড়ার আদেশ দেন (15:29)। ইবলিসকে আল্লাহ স্পষ্ট বলেন, তিনি আদমকে নিজ হাতে সৃষ্টি করেছেন (38:75)। এক সত্তায় ধুলা ও সম্মান একসাথে। মানুষের মর্যাদা ও দুর্বলতা নিয়ে পরবর্তী সব প্রশ্নের জবাব এই জোড়ার ভেতরেই আছে।",
          },
        ],
      },
      {
        h: { en: "The Knowledge That Honoured Him", bn: "যে জ্ঞান তাঁকে সম্মানিত করল" },
        p: [
          {
            en: "The first thing recorded about Adam after his creation is that he was taught. Allah taught him the names, all of them, then set the things before the angels and asked them to name them (2:31). They answered with the most beautiful words a creature can say: glory be to You, we have no knowledge except what You have taught us (2:32). Then Adam named them. Their worship was never in question; they were shown a capacity they had not been given.",
            bn: "সৃষ্টির পর আদম সম্পর্কে প্রথম যে কথাটি লিপিবদ্ধ, তা হলো তাঁকে শেখানো হয়েছিল। আল্লাহ তাঁকে সব নাম শেখান, তারপর বস্তুগুলো ফেরেশতাদের সামনে রেখে তাদের নাম বলতে বলেন (2:31)। তাঁরা এমন উত্তর দেন যা কোনো সৃষ্টির মুখে সবচেয়ে সুন্দর কথা: আপনি পবিত্র, আপনি যা শিখিয়েছেন তা ছাড়া আমাদের কোনো জ্ঞান নেই (2:32)। এরপর আদম নামগুলো বলেন। ফেরেশতাদের ইবাদত নিয়ে কোনো প্রশ্ন ছিল না; তাঁদের দেখানো হলো এমন এক যোগ্যতা যা তাঁদের দেওয়া হয়নি।",
          },
          {
            en: "That is the Quran's own explanation of why humanity is honoured: not strength, not size, not long life, but taught knowledge and the language to hold it. The point matters for how the rest of the story reads. Adam's rank rested on something received rather than owned, and knowledge given can be forgotten, ignored, or acted against. That is exactly what happens next, and it is why the Book spends the rest of its pages calling people back to what they already know.",
            bn: "মানুষ কেন সম্মানিত, কুরআন নিজেই তার ব্যাখ্যা দেয়: শক্তি নয়, আকার নয়, দীর্ঘ আয়ু নয় — বরং শেখানো জ্ঞান এবং তা ধারণ করার ভাষা। কথাটি বাকি ঘটনার পাঠের জন্যও জরুরি। আদমের মর্যাদা দাঁড়িয়ে ছিল প্রাপ্ত কিছুর ওপর, নিজের অর্জিত কিছুর ওপর নয়; আর প্রাপ্ত জ্ঞান ভুলে যাওয়া যায়, উপেক্ষা করা যায়, এমনকি তার বিরুদ্ধেও চলা যায়। এরপর ঠিক তা-ই ঘটে, আর এ কারণেই কুরআন বাকি পুরো কিতাবজুড়ে মানুষকে তার জানা কথার দিকেই ফিরিয়ে ডাকে।",
          },
        ],
      },
      {
        h: { en: "The Prostration and the Refusal", bn: "সিজদা ও অস্বীকার" },
        p: [
          {
            en: "The command came to all of them and they prostrated together, except Iblis (2:34). He was of the jinn; he refused, was arrogant, and became of the disbelievers. Asked directly what prevented him, he answered with a comparison: I am better than him, You created me from fire and created him from clay (7:12). It is the first argument ever made against a command of Allah: self-assessment set above instruction.",
            bn: "আদেশ সবার কাছে আসে এবং সবাই একসাথে সিজদা করে, কেবল ইবলিস ছাড়া (2:34)। সে ছিল জিনদের একজন; সে অস্বীকার করে, অহংকার করে এবং কাফিরদের অন্তর্ভুক্ত হয়ে যায়। সরাসরি জিজ্ঞেস করা হলে সে তুলনা দিয়ে জবাব দেয়: আমি তার চেয়ে উত্তম, আপনি আমাকে আগুন থেকে আর তাকে মাটি থেকে সৃষ্টি করেছেন (7:12)। আল্লাহর আদেশের বিরুদ্ধে এটিই ইতিহাসের প্রথম যুক্তি, আর তার পুরো কাঠামো হলো আদেশের ওপরে নিজের বিচারকে বসানো।",
          },
          {
            en: "The Quran preserves that reasoning because it is a pattern, not an incident. Iblis never denied that Allah exists or that He commands; he accepted both and still refused, because obeying meant accepting a rank he judged beneath him. He then asked not for forgiveness but for time, and declared he would come at the children of Adam from before them and behind them, from their right and their left (7:16-17). Pride asks for respite; humility asks for pardon.",
            bn: "কুরআন এই যুক্তিটি সংরক্ষণ করেছে, কারণ এটি একটি ধরন — নিছক একটি ঘটনা নয়। ইবলিস কখনোই অস্বীকার করেনি যে আল্লাহ আছেন বা তিনি আদেশ দেন; সে দুটোই মেনে নিয়েও অমান্য করেছে, কারণ মানার অর্থ হতো নিজের বিচারে হীন এক মর্যাদা কবুল করা। এরপর সে ক্ষমা চায়নি, চেয়েছে সময়; আর ঘোষণা দেয় যে সে আদম-সন্তানদের কাছে সামনে-পেছনে, ডানে-বামে সব দিক থেকে আসবে (7:16-17)। অহংকার অবকাশ চায়, বিনয় চায় ক্ষমা।",
          },
        ],
      },
      {
        h: { en: "The Tree and the Slip", bn: "গাছ ও পদস্খলন" },
        p: [
          {
            en: "Adam and his wife were settled in the Garden and told to eat freely wherever they wished, but not to approach one particular tree (7:19). The Quran never identifies that tree, and no sound report identifies it either; the identity is not the point, and guessing adds nothing. What is identified is the warning attached to it, that Iblis is an enemy to them both, so they must not let him drive them out of their ease (20:117).",
            bn: "আদম ও তাঁর স্ত্রীকে জান্নাতে বসানো হয় এবং বলা হয় যেখান থেকে ইচ্ছা অবাধে খেতে, কেবল একটি নির্দিষ্ট গাছের কাছে না যেতে (7:19)। কুরআন সেই গাছের পরিচয় দেয়নি, কোনো সহীহ বর্ণনাও দেয়নি; পরিচয়টি মূল বিষয় নয়, আর অনুমান করে কিছু যোগও হয় না। যা স্পষ্ট করা হয়েছে তা হলো সঙ্গে দেওয়া সতর্কবার্তা: ইবলিস তাঁদের উভয়ের শত্রু, তাই তারা যেন তাকে দিয়ে নিজেদের স্বস্তি থেকে বিতাড়িত না হন (20:117)।",
          },
          {
            en: "The attack came as whispering. Iblis suggested the prohibition was withholding something from them, an eternity or an angelic rank (7:20), and swore to them both that he was a sincere adviser (7:21). They ate, their nakedness became apparent to them, and they began covering themselves with the leaves of the Garden (7:22). Exposure, not elevation, was what the promised shortcut delivered. And the Quran names the failure precisely: he forgot, and We found in him no firm resolve (20:115).",
            bn: "আক্রমণ এসেছিল কুমন্ত্রণা হয়ে। ইবলিস ইঙ্গিত দেয় যে নিষেধাজ্ঞাটি তাঁদের কাছ থেকে কিছু আড়াল করছে — চিরস্থায়ী জীবন কিংবা ফেরেশতাসুলভ মর্যাদা (7:20) — এবং কসম খেয়ে বলে যে সে তাঁদের শুভাকাঙ্ক্ষী (7:21)। তাঁরা খান, তাঁদের লজ্জাস্থান তাঁদের কাছে প্রকাশ পায় এবং তাঁরা জান্নাতের পাতা দিয়ে নিজেদের ঢাকতে শুরু করেন (7:22)। প্রতিশ্রুত সহজ পথ উন্নতি নয়, উন্মোচনই এনে দিল। আর কুরআন ত্রুটিটির নাম নির্ভুলভাবে দেয়: তিনি ভুলে গিয়েছিলেন, আর আমি তাঁর মধ্যে দৃঢ় সংকল্প পাইনি (20:115)।",
          },
        ],
      },
      {
        h: { en: "The Words He Received", bn: "যে বাক্যগুলো তিনি পেলেন" },
        p: [
          {
            en: "Then Adam received words from his Lord, and He accepted his repentance (2:37). The words came from Allah. The first human being ever to sin did not have to invent the way back; he was taught it. Repentance was not a loophole discovered by a desperate creature but part of the design, prepared before it was ever needed. For anyone learning this story, that single verse carries more weight than the whole episode of the tree.",
            bn: "অতঃপর আদম তাঁর প্রভুর কাছ থেকে কিছু বাক্য পেলেন, আর তিনি তাঁর তওবা কবুল করলেন (2:37)। বাক্যগুলো এসেছিল আল্লাহর পক্ষ থেকেই। ইতিহাসের প্রথম পাপকারী মানুষটিকে ফিরে আসার পথ নিজে আবিষ্কার করতে হয়নি — তাঁকে তা শেখানো হয়েছিল। তওবা কোনো নিরুপায় সৃষ্টির খুঁজে পাওয়া ফাঁকফোকর নয়, বরং প্রয়োজনের আগেই প্রস্তুত রাখা ব্যবস্থার অংশ। যে এই ঘটনা শেখে, তার কাছে এই একটি আয়াত গোটা গাছের ঘটনার চেয়েও ভারী।",
          },
          {
            en: "The words are preserved elsewhere: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us we shall surely be among the losers (7:23). Three movements in one sentence — admitting the wrong, naming it as harm done to oneself, and asking with no claim of entitlement. Set beside Iblis, who met the same failure by blaming the One who commanded him (7:16), it is the parting of two destinies.",
            bn: "বাক্যগুলো অন্যত্র সংরক্ষিত: হে আমাদের প্রভু, আমরা নিজেদের ওপর জুলুম করেছি; আপনি যদি ক্ষমা না করেন ও দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব (7:23)। এক বাক্যে তিনটি পদক্ষেপ — অন্যায় স্বীকার, তাকে নিজের প্রতি করা ক্ষতি বলে চিহ্নিত করা, এবং কোনো দাবি ছাড়াই প্রার্থনা। পাশে রাখুন ইবলিসকে, যে একই ব্যর্থতার জবাবে আদেশদাতাকেই দোষ দিয়েছিল (7:16); সেখানেই দুই পরিণতির পথ আলাদা হয়ে যায়।",
          },
        ],
      },
      {
        h: { en: "Sent Down as Khalifah", bn: "খলীফা হিসেবে অবতরণ" },
        p: [
          {
            en: "The descent is often read as exile. The Quran does not read it so. Earth was the announced destination from the very start (2:30), before the Garden and before the tree. What the descent added was terms: go down, all of you, and when guidance comes to you from Me, whoever follows My guidance will have no fear upon them nor will they grieve (2:38). A place to work, a promise of guidance, and a stated way to be safe.",
            bn: "অবতরণকে প্রায়ই নির্বাসন হিসেবে পড়া হয়। কুরআন তা পড়ে না। পৃথিবীই ছিল একেবারে শুরুতে ঘোষিত গন্তব্য (2:30) — জান্নাতের আগে, গাছের আগে। অবতরণ যা যোগ করল তা হলো শর্ত: তোমরা সবাই নেমে যাও, অতঃপর আমার পক্ষ থেকে যখন হিদায়াত আসবে, যে আমার হিদায়াত অনুসরণ করবে তার কোনো ভয় থাকবে না, সে দুঃখিতও হবে না (2:38)। কাজ করার একটি জায়গা, হিদায়াতের প্রতিশ্রুতি, আর নিরাপদ থাকার ঘোষিত উপায়।",
          },
          {
            en: "Adam therefore stands at the head of two lines at once, the human and the prophetic. Allah chose Adam, Nuh, the family of Ibrahim and the family of Imran above the worlds (3:33). His children are warned in the same passage not to be tempted as their parents were, since Iblis sees them from where they do not see him (7:27), and reminded that they have been honoured and carried on land and sea (17:70). Honoured and vulnerable, taught and forgetful, and taught how to return.",
            bn: "তাই আদম একসাথে দুটি ধারার শীর্ষে দাঁড়িয়ে আছেন — মানবধারা ও নবুয়তের ধারা। আল্লাহ আদম, নূহ, ইবরাহীমের পরিবার ও ইমরানের পরিবারকে সমগ্র সৃষ্টির ওপর মনোনীত করেছেন (3:33)। একই প্রসঙ্গে তাঁর সন্তানদের সতর্ক করা হয়, তারা যেন পিতামাতার মতো প্রলুব্ধ না হয়, কারণ ইবলিস তাদের এমন দিক থেকে দেখে যেদিক থেকে তারা তাকে দেখে না (7:27); আবার মনে করিয়ে দেওয়া হয় যে তাদের সম্মানিত করা হয়েছে এবং জলে-স্থলে বহন করা হয়েছে (17:70)। সম্মানিত অথচ দুর্বল, শিক্ষিত অথচ বিস্মৃতিপ্রবণ — এবং ফিরে আসার পথও তাদের শেখানো।",
          },
        ],
      },
    ],
  },
  idris: {
    sections: [
      {
        h: { en: "Everything the Quran Says", bn: "কুরআন যা যা বলে" },
        p: [
          {
            en: "Idris (AS) appears in the Quran twice, and the two passages together run to four short verses. In Surah Maryam he is named among the prophets whom Allah favoured: mention in the Book Idris, he was a man of truth, a prophet, and We raised him to a high station (19:56-57). In Surah al-Anbiya he is listed with Isma'il and Dhul-Kifl, all of them of the patient, and Allah admits them into His mercy among the righteous (21:85-86).",
            bn: "ইদরিস (আঃ)-এর উল্লেখ কুরআনে দুইবার এসেছে, আর দুটি অংশ মিলিয়ে মোট চারটি ছোট আয়াত। সূরা মারইয়ামে আল্লাহ যাঁদের অনুগ্রহ দিয়েছেন সেই নবীদের মধ্যে তাঁর নাম আসে: কিতাবে ইদরিসের কথা স্মরণ করুন, তিনি ছিলেন সত্যনিষ্ঠ, একজন নবী, আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি (19:56-57)। সূরা আল-আম্বিয়ায় তাঁকে ইসমাঈল ও যুলকিফলের সঙ্গে গণনা করা হয় — তাঁরা সবাই ধৈর্যশীল, আর আল্লাহ তাঁদের সৎকর্মশীলদের সঙ্গে নিজ রহমতে দাখিল করেন (21:85-86)।",
          },
          {
            en: "That is the whole of it. There is no account of his people, no confrontation with a king, no sign, no punishment, no dialogue. For a Book that gives Nuh an entire surah and Yusuf a continuous chapter, the silence is not an accident of space. It is worth taking Idris exactly as the Quran gives him, because what is said about him in four verses is what the Quran considers worth saying about a life.",
            bn: "এটুকুই সব। তাঁর সম্প্রদায়ের বিবরণ নেই, কোনো রাজার সঙ্গে সংঘাত নেই, নিদর্শন নেই, শাস্তি নেই, সংলাপ নেই। যে কিতাব নূহকে একটি পূর্ণ সূরা এবং ইউসুফকে একটি অখণ্ড অধ্যায় দিয়েছে, সেখানে এই নীরবতা জায়গার অভাবে ঘটেনি। ইদরিসকে ঠিক সেভাবেই গ্রহণ করা উচিত যেভাবে কুরআন তাঁকে দিয়েছে, কারণ চারটি আয়াতে তাঁর সম্পর্কে যা বলা হয়েছে, একটি জীবন সম্পর্কে কুরআন সেটুকুই বলার যোগ্য মনে করেছে।",
          },
        ],
      },
      {
        h: { en: "A Man of Truth", bn: "সত্যনিষ্ঠ এক মানুষ" },
        p: [
          {
            en: "The first word used of him is siddiq, one whose truthfulness is constant enough to become a description of the person rather than of an occasion. The Quran uses it sparingly and always at a height: Ibrahim is called siddiq and a prophet in the same surah (19:41), and so is Yusuf by the man who came to him in prison (12:46). Idris is placed in that company by a single word.",
            bn: "তাঁর সম্পর্কে ব্যবহৃত প্রথম শব্দটি হলো সিদ্দীক — যাঁর সত্যবাদিতা এতটাই অবিচল যে তা কোনো একটি ঘটনার নয়, বরং মানুষটিরই পরিচয় হয়ে যায়। কুরআন শব্দটি খুব কম ব্যবহার করে এবং সবসময় উচ্চ মর্যাদায়: একই সূরায় ইবরাহীমকে সিদ্দীক ও নবী বলা হয়েছে (19:41), আর কারাগারে আসা লোকটি ইউসুফকেও একই শব্দে ডেকেছে (12:46)। একটি শব্দ দিয়েই ইদরিসকে সেই সারিতে বসানো হয়েছে।",
          },
          {
            en: "Siddiq is not only speaking accurately. It is a life in which word, belief and action do not contradict one another, so that a person can be believed on his report about the unseen because he has never been found false about the seen. Allah names the siddiqun as one of the four ranks a servant may be gathered with, after the prophets and before the martyrs and the righteous (4:69). It is the highest rank a non-prophet can reach.",
            bn: "সিদ্দীক মানে কেবল নির্ভুল কথা বলা নয়। এটি এমন এক জীবন যেখানে কথা, বিশ্বাস ও কাজ একে অপরের বিরোধিতা করে না; ফলে অদৃশ্য সম্পর্কে তাঁর সংবাদ বিশ্বাস করা যায়, কারণ দৃশ্যমান বিষয়ে তাঁকে কখনো মিথ্যা পাওয়া যায়নি। আল্লাহ সিদ্দীকদের সেই চারটি স্তরের একটি বলেছেন যাদের সঙ্গে বান্দাকে একত্র করা হতে পারে — নবীদের পরে, শহীদ ও সৎকর্মশীলদের আগে (4:69)। নবী নন এমন কারও পক্ষে এটিই সর্বোচ্চ মর্যাদা।",
          },
        ],
      },
      {
        h: { en: "Counted Among the Patient", bn: "ধৈর্যশীলদের অন্তর্ভুক্ত" },
        p: [
          {
            en: "The second passage places him among those who were patient (21:85). The grouping is instructive. Isma'il was patient under the knife and in a barren valley; Dhul-Kifl is himself barely detailed in the Quran. Sabr is the quality that binds three very different lives, and it is named as the reason they were admitted into Allah's mercy (21:86) — not their achievements, which the Quran does not list.",
            bn: "দ্বিতীয় অংশটি তাঁকে ধৈর্যশীলদের মধ্যে স্থান দেয় (21:85)। এই দলবদ্ধতা শিক্ষণীয়। ইসমাঈল ধৈর্য ধরেছিলেন ছুরির নিচে ও শুষ্ক উপত্যকায়; যুলকিফল সম্পর্কেও কুরআনে বিস্তারিত প্রায় নেই। সবরই সেই গুণ যা তিনটি ভিন্ন জীবনকে এক সুতোয় বাঁধে, আর সেটিকেই তাঁদের আল্লাহর রহমতে প্রবেশের কারণ বলা হয়েছে (21:86) — তাঁদের কীর্তি নয়, যা কুরআন তালিকাভুক্তই করেনি।",
          },
          {
            en: "Patience in the Quran is active, not passive. It is holding a position under pressure over time: continuing to call, continuing to worship, continuing to be truthful when nothing visible rewards it. Allah gives glad tidings to the patient, those who say when a calamity strikes them that they belong to Allah and to Him they return, and upon them are blessings and mercy from their Lord (2:155-157). Idris is remembered for having been that kind of man.",
            bn: "কুরআনে ধৈর্য নিষ্ক্রিয় নয়, সক্রিয়। এটি হলো দীর্ঘ সময় ধরে চাপের মধ্যে অবস্থান ধরে রাখা: ডাকতে থাকা, ইবাদত চালিয়ে যাওয়া, সত্যনিষ্ঠ থাকা — যখন দৃশ্যমান কোনো পুরস্কার নেই। আল্লাহ ধৈর্যশীলদের সুসংবাদ দেন, যারা বিপদ এলে বলে আমরা আল্লাহরই এবং তাঁরই কাছে ফিরে যাব; তাদের ওপরই প্রভুর পক্ষ থেকে বরকত ও রহমত (2:155-157)। ইদরিসকে ঠিক সেই ধরনের মানুষ হিসেবেই স্মরণ করা হয়।",
          },
        ],
      },
      {
        h: { en: "Raised to a High Station", bn: "উচ্চ মর্যাদায় উন্নীত" },
        p: [
          {
            en: "And We raised him to a high station (19:57). The phrase is the most discussed thing about him, and the honest position is that the Quran does not define it. Commentators have understood it as elevation of rank with Allah, and others as a physical raising. The verse itself supplies no place, no time and no manner, and nothing in the sound Sunnah settles the question.",
            bn: "আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি (19:57)। তাঁর সম্পর্কে সবচেয়ে বেশি আলোচিত কথাটি এটিই, আর সৎ অবস্থান হলো — কুরআন এর সংজ্ঞা দেয়নি। মুফাসসিরদের কেউ একে আল্লাহর কাছে মর্যাদার উন্নতি বুঝেছেন, কেউ দৈহিক উত্তোলন। আয়াতটি নিজে কোনো স্থান, সময় বা ধরন জানায় না, আর সহীহ সুন্নাহতেও প্রশ্নটির নিষ্পত্তি করার মতো কিছু নেই।",
          },
          {
            en: "What the verse does establish is the order of cause and effect, and that is the teachable part. He was truthful and a prophet, and then he was raised. Rank with Allah in this account is a consequence, not a starting condition, and it is granted for character rather than claimed by it. The same surah closes the list of favoured prophets by saying that when the verses of the Most Merciful were recited to them, they fell down prostrate and weeping (19:58).",
            bn: "আয়াতটি যা নিশ্চিত করে তা হলো কারণ ও ফলের ক্রম, আর শিক্ষণীয় অংশটিও সেটিই। তিনি ছিলেন সত্যনিষ্ঠ ও নবী, তারপর তাঁকে উন্নীত করা হয়েছে। এই বর্ণনায় আল্লাহর কাছে মর্যাদা একটি ফল, শুরুর শর্ত নয়; তা চরিত্রের বিনিময়ে দান করা হয়, চরিত্র দিয়ে দাবি করা যায় না। একই সূরা অনুগ্রহপ্রাপ্ত নবীদের তালিকা শেষ করে এই বলে যে, তাঁদের কাছে পরম করুণাময়ের আয়াত পাঠ করা হলে তাঁরা সিজদায় লুটিয়ে পড়তেন ও কাঁদতেন (19:58)।",
          },
        ],
      },
      {
        h: { en: "What Is Not Established", bn: "যা প্রমাণিত নয়" },
        p: [
          {
            en: "Later literature attaches a great deal to Idris: that he was the first to write with a pen, the first to sew garments, an astronomer, a builder of cities, and identical with figures from other traditions. None of that comes from the Quran, and none of it rests on a chain that a careful teacher would accept. Much of it entered the books as israiliyyat, material narrated from earlier scriptural communities and preserved without a verdict on its truth.",
            bn: "পরবর্তী সাহিত্যে ইদরিসের সঙ্গে অনেক কিছু যুক্ত করা হয়েছে: তিনিই প্রথম কলম দিয়ে লিখেছেন, প্রথম পোশাক সেলাই করেছেন, তিনি জ্যোতির্বিদ ছিলেন, নগর নির্মাতা ছিলেন, কিংবা অন্য ঐতিহ্যের কোনো ব্যক্তির সঙ্গে অভিন্ন। এর কিছুই কুরআন থেকে আসেনি, আর কিছুই এমন সনদের ওপর দাঁড়ানো নয় যা একজন সতর্ক শিক্ষক গ্রহণ করবেন। এর বড় অংশ ইসরাঈলিয়াত হিসেবে কিতাবগুলোতে ঢুকেছে — আগের কিতাবধারী সম্প্রদায় থেকে বর্ণিত, সত্যতার রায় ছাড়াই সংরক্ষিত।",
          },
          {
            en: "Even the relationship between Idris and the prophets around him is left open: whether he came before Nuh or after him is not stated in any binding text. Saying so plainly is not a loss. A student who learns to say that a detail is unknown has learned the discipline that protects the parts of the religion that are known, and the Quran models that discipline by refusing to fill the gap itself.",
            bn: "এমনকি ইদরিস ও তাঁর আশপাশের নবীদের পারস্পরিক অবস্থানও খোলা রাখা হয়েছে: তিনি নূহের আগে নাকি পরে, তা কোনো চূড়ান্ত পাঠে বলা নেই। কথাটি স্পষ্ট বলা কোনো ক্ষতি নয়। যে শিক্ষার্থী বলতে শেখে যে একটি তথ্য অজানা, সে সেই সংযম শিখল যা দ্বীনের জানা অংশগুলোকে রক্ষা করে; আর কুরআন নিজেই শূন্যস্থান পূরণ করতে অস্বীকার করে সেই সংযমের নমুনা দেখায়।",
          },
        ],
      },
      {
        h: { en: "Why So Little Is Enough", bn: "এত অল্পই কেন যথেষ্ট" },
        p: [
          {
            en: "Read together, the two passages describe a complete life without a single event in it. He was true, he was sent, he endured, he was raised, and he was received into mercy among the righteous. Nothing in that sequence depends on circumstance. A person with no public role and no dramatic trial can be measured against every item on the list, which may be precisely why the Quran left the circumstances out.",
            bn: "দুটি অংশ একসঙ্গে পড়লে দেখা যায়, একটিও ঘটনা ছাড়াই একটি পূর্ণ জীবনের বর্ণনা দেওয়া হয়েছে। তিনি সত্যনিষ্ঠ ছিলেন, প্রেরিত হয়েছিলেন, ধৈর্য ধরেছিলেন, উন্নীত হয়েছিলেন, এবং সৎকর্মশীলদের সঙ্গে রহমতে গৃহীত হয়েছিলেন। এই ধারাবাহিকতার কোনো কিছুই পরিস্থিতির ওপর নির্ভরশীল নয়। জনসমক্ষে কোনো ভূমিকা বা নাটকীয় পরীক্ষা নেই এমন মানুষও তালিকার প্রতিটি বিষয়ে নিজেকে মেপে দেখতে পারে — সম্ভবত এ কারণেই কুরআন পরিস্থিতিগুলো বাদ দিয়েছে।",
          },
          {
            en: "There is also a lesson in the proportion. Prophets whose stories fill pages are remembered for what happened to them; Idris is remembered for what he was. When Allah chose the shortest possible summary of a prophet, He chose truthfulness and patience, and He attached the elevation to those two things. That is the whole article, and it is enough to build a life on.",
            bn: "এই পরিমাপের মধ্যেও একটি শিক্ষা আছে। যেসব নবীর কাহিনি পৃষ্ঠার পর পৃষ্ঠা জুড়ে থাকে, তাঁদের স্মরণ করা হয় তাঁদের সঙ্গে যা ঘটেছে তার জন্য; ইদরিসকে স্মরণ করা হয় তিনি যা ছিলেন তার জন্য। আল্লাহ যখন একজন নবীর সম্ভাব্য সবচেয়ে সংক্ষিপ্ত পরিচয় বেছে নিলেন, তিনি বেছে নিলেন সত্যনিষ্ঠা ও ধৈর্য, আর উন্নতিকে যুক্ত করলেন এই দুটির সঙ্গেই। এটুকুই পুরো আলোচনা, আর একটি জীবন গড়ার জন্য এটুকুই যথেষ্ট।",
          },
        ],
      },
    ],
  },
  nuh: {
    sections: [
      {
        h: { en: "The First Messenger Sent", bn: "প্রথম প্রেরিত রাসূল" },
        p: [
          {
            en: "On the Day of Judgement, when people go seeking someone to intercede for them, they come to Nuh (AS) and address him as the first messenger Allah sent to the people of the earth — a description the Prophet ﷺ reports in the sound collections. Adam had guided his own children; Nuh was the first sent to a people who had already turned away. His surah opens with the commission: warn your people before a painful punishment comes (71:1).",
            bn: "কিয়ামতের দিন মানুষ যখন সুপারিশকারী খুঁজতে বের হবে, তারা নূহ (আঃ)-এর কাছে এসে তাঁকে সম্বোধন করবে পৃথিবীবাসীর প্রতি প্রেরিত প্রথম রাসূল বলে — সহীহ গ্রন্থগুলোতে নবী ﷺ এই বর্ণনা দিয়েছেন। আদম নিজের সন্তানদের পথ দেখিয়েছিলেন, কিন্তু এমন এক জাতির কাছে প্রথম প্রেরিত হন নূহ, যারা ইতিমধ্যেই মুখ ফিরিয়ে নিয়েছিল। তাঁর সূরার শুরুতেই দায়িত্ব: তোমার সম্প্রদায়কে সতর্ক করো, তাদের কাছে যন্ত্রণাদায়ক শাস্তি আসার আগে (71:1)।",
          },
          {
            en: "What they had turned to is named in the same surah. They refused to abandon their gods — Wadd, Suwa', Yaghuth, Ya'uq and Nasr (71:23) — and would not give them up for anything he said. Idolatry, in the Quran's first extended account of it, does not arrive as a decision anyone makes. It accumulates over generations, and by the time Nuh arrived it was simply the religion of the society, defended as inheritance rather than argued for.",
            bn: "তারা কীসের দিকে ফিরেছিল, তা একই সূরায় নাম ধরে বলা হয়েছে। তারা নিজেদের দেবতাগুলো ছাড়তে অস্বীকার করে — ওয়াদ্দ, সুওয়া, ইয়াগূস, ইয়াঊক ও নাসর (71:23) — আর তিনি যা-ই বলুন, তারা সেগুলো ত্যাগ করেনি। কুরআনের প্রথম বিস্তারিত বিবরণে মূর্তিপূজা কারও নেওয়া সিদ্ধান্ত হিসেবে আসে না। তা প্রজন্মের পর প্রজন্ম ধরে জমতে থাকে, আর নূহ যখন আসেন তখন তা কেবল সমাজের ধর্ম — যুক্তি দিয়ে নয়, উত্তরাধিকার বলেই যার পক্ষে দাঁড়ানো হতো।",
          },
        ],
      },
      {
        h: { en: "The Argument of His People", bn: "তাঁর সম্প্রদায়ের যুক্তি" },
        p: [
          {
            en: "Their objections are preserved almost as a transcript. The chiefs who disbelieved said he was only a man like themselves, that no one followed him but the lowest among them, following without thought, and that they saw in him and his people no merit over themselves — indeed they thought them liars (11:27). Every element of that reply would be repeated to later messengers: the messenger is ordinary, his followers are poor, and the objectors are fit to judge.",
            bn: "তাদের আপত্তিগুলো প্রায় হুবহু লিপিবদ্ধ আছে। অবিশ্বাসী প্রধানেরা বলেছিল, তিনি তাদেরই মতো একজন মানুষ; তাদের মধ্যে সবচেয়ে নিচু লোকেরা ছাড়া কেউ তাঁর অনুসরণ করেনি, তাও না ভেবেই; আর তারা তাঁর ও তাঁর অনুসারীদের মধ্যে নিজেদের ওপর কোনো শ্রেষ্ঠত্ব দেখে না — বরং তাদের মিথ্যাবাদীই মনে করে (11:27)। এই জবাবের প্রতিটি উপাদান পরবর্তী রাসূলদেরও শুনতে হয়েছে: রাসূল সাধারণ মানুষ, অনুসারীরা গরিব, আর বিচার করার যোগ্য আপত্তিকারীরাই।",
          },
          {
            en: "Nuh refused the premise rather than the tone. He would not drive away those who believed, for they were to meet their Lord, and he told the chiefs plainly that he saw them as ignorant people (11:29-30). He asked no payment; his reward was upon Allah alone. A community that will not sort its members by wealth is one its opponents cannot buy, which is part of why the opposition moved from argument to mockery and threat.",
            bn: "নূহ সুরের নয়, তাদের ভিত্তিটাই প্রত্যাখ্যান করেন। যারা ঈমান এনেছে তাদের তিনি তাড়িয়ে দেবেন না, কারণ তারা তাদের প্রভুর সাক্ষাৎ লাভ করবে; আর প্রধানদের তিনি স্পষ্ট বলেন যে তিনি তাদের অজ্ঞ লোক হিসেবেই দেখছেন (11:29-30)। তিনি কোনো পারিশ্রমিক চাননি; তাঁর প্রতিদান কেবল আল্লাহর কাছে। যে দল সম্পদ দিয়ে নিজের লোকদের সাজায় না, বিরোধীরা তাকে কিনতে পারে না — এ কারণেই বিরোধিতা যুক্তি ছেড়ে উপহাস ও হুমকিতে নামে।",
          },
        ],
      },
      {
        h: { en: "Nine Hundred and Fifty Years", bn: "সাড়ে নয়শ বছর" },
        p: [
          {
            en: "He remained among them a thousand years less fifty (29:14). The figure is given by Allah rather than estimated, and it is the measure of the whole story. He called them night and day (71:5), then openly, then privately again (71:8-9), and each time they thrust their fingers into their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance (71:7).",
            bn: "তিনি তাদের মধ্যে ছিলেন পঞ্চাশ কম হাজার বছর (29:14)। সংখ্যাটি অনুমান নয়, আল্লাহই দিয়েছেন, আর সেটিই গোটা ঘটনার পরিমাপ। তিনি তাদের ডেকেছেন রাত ও দিন (71:5), এরপর প্রকাশ্যে, এরপর আবার গোপনে (71:8-9); প্রতিবারই তারা কানে আঙুল ঢুকিয়েছে, কাপড়ে নিজেদের ঢেকেছে, একগুঁয়েমি করেছে এবং চরম অহংকার দেখিয়েছে (71:7)।",
          },
          {
            en: "His method deserves study, because it was never only warning. He told them to seek forgiveness from their Lord, who is ever forgiving, and promised on Allah's authority that He would send the sky upon them in abundant rain, increase them in wealth and children, and make for them gardens and rivers (71:10-12). The call offered them the very world they were chasing, on the only terms that would not ruin them.",
            bn: "তাঁর পদ্ধতিটি ভেবে দেখার মতো, কারণ তা কখনোই কেবল ভয় দেখানো ছিল না। তিনি তাদের বলেন নিজেদের প্রভুর কাছে ক্ষমা চাইতে, যিনি বড়ই ক্ষমাশীল; আর আল্লাহর পক্ষ থেকে প্রতিশ্রুতি দেন যে তিনি তাদের ওপর প্রচুর বৃষ্টি পাঠাবেন, সম্পদ ও সন্তানে বাড়িয়ে দেবেন এবং তাদের জন্য বাগান ও নদী সৃষ্টি করবেন (71:10-12)। এই আহ্বান তাদের সেই দুনিয়াটাই দিতে চেয়েছিল যার পেছনে তারা ছুটছিল — কেবল এমন শর্তে, যাতে তা তাদের ধ্বংস না করে।",
          },
        ],
      },
      {
        h: { en: "Building the Ark", bn: "নৌকা নির্মাণ" },
        p: [
          {
            en: "The end of the calling was decided by Allah, not by the messenger's fatigue: none of your people will believe except those who have already believed (11:36). Only a few had believed across all those centuries, which by any measure a person applies to his own work is failure, and which the Quran counts among the great successes of prophethood. Then came the order to build the ship under Our eyes and Our revelation (11:37). He built it, and the chiefs ridiculed him whenever they passed by (11:38).",
            bn: "দাওয়াতের সমাপ্তি ঠিক করেছেন আল্লাহই, রাসূলের ক্লান্তি নয়: যারা ইতিমধ্যে ঈমান এনেছে তারা ছাড়া তোমার সম্প্রদায়ের আর কেউ ঈমান আনবে না (11:36)। এত শতাব্দীতে ঈমান এনেছিল মাত্র অল্প কয়েকজন — মানুষ নিজের কাজ যে মাপকাঠিতে বিচার করে তাতে এটি ব্যর্থতা, অথচ কুরআন একে নবুয়তের ইতিহাসের অন্যতম বড় সাফল্য গণ্য করে। এরপরই আদেশ আসে, আমার তত্ত্বাবধানে ও আমার ওহি অনুযায়ী নৌকা তৈরি করো (11:37)। তিনি তা বানাতে থাকেন, আর প্রধানেরা যতবার পাশ দিয়ে যেত ততবারই উপহাস করত (11:38)।",
          },
          {
            en: "The signal was precise and strange: when Our command came and the oven overflowed (11:40). He was told to load pairs of every kind, his household except those against whom the word had preceded, and those who believed. Then he said, embark in it, in the name of Allah is its course and its anchorage — indeed my Lord is Forgiving and Merciful (11:41). The sky was opened with pouring water and the earth burst with springs, for a matter already decreed (54:11-12).",
            bn: "সংকেতটি ছিল নির্দিষ্ট ও অদ্ভুত: যখন আমার আদেশ এল এবং চুলা উথলে উঠল (11:40)। তাঁকে বলা হয় প্রতিটি প্রাণীর জোড়া তুলে নিতে, নিজের পরিবারকেও — যাদের বিরুদ্ধে আগেই কথা সাব্যস্ত হয়েছে তাদের ছাড়া — এবং যারা ঈমান এনেছে তাদের। তারপর তিনি বলেন, এতে আরোহণ করো, আল্লাহর নামেই এর চলা ও থামা; নিশ্চয়ই আমার প্রভু ক্ষমাশীল, দয়ালু (11:41)। আকাশ খুলে দেওয়া হয় প্রবল বর্ষণে, ভূমি ফেটে বেরোয় ঝর্ণা — এক নির্ধারিত বিষয়ের জন্য (54:11-12)।",
          },
        ],
      },
      {
        h: { en: "The Son Who Refused", bn: "যে পুত্র অস্বীকার করল" },
        p: [
          {
            en: "As the ship moved through waves like mountains, Nuh called out to a son who had stayed apart: O my son, embark with us and do not be with the disbelievers (11:42). The boy answered that a mountain would shelter him from the water. Nuh replied that there was no protector that day from the decree of Allah except for the one He had mercy upon — and a wave came between them, and he was among the drowned (11:43).",
            bn: "নৌকা যখন পাহাড়সম ঢেউয়ের মধ্য দিয়ে চলছিল, নূহ দূরে সরে থাকা নিজের এক পুত্রকে ডাকেন: হে আমার পুত্র, আমাদের সঙ্গে আরোহণ করো, অবিশ্বাসীদের সঙ্গে থেকো না (11:42)। ছেলেটি জবাব দেয়, সে এমন পাহাড়ে আশ্রয় নেবে যা তাকে পানি থেকে বাঁচাবে। নূহ বলেন, আজ আল্লাহর ফয়সালা থেকে রক্ষাকারী কেউ নেই, কেবল যাকে তিনি দয়া করেন — আর তখনই দুজনের মাঝে ঢেউ এসে পড়ে, এবং সে ডুবে যাওয়াদের একজন হয়ে যায় (11:43)।",
          },
          {
            en: "It is the sharpest moment in the account. A man had spent nine and a half centuries calling strangers, and the one he could not bring was his own child. Faith is not inherited and cannot be transferred by a father's standing, however high that standing is — the same truth later stated to the Prophet ﷺ himself, that he does not guide whom he likes, but Allah guides whom He wills (28:56).",
            bn: "এটিই পুরো বিবরণের সবচেয়ে তীব্র মুহূর্ত। যে মানুষ সাড়ে নয়শ বছর ধরে অপরিচিতদের ডেকেছেন, তিনিই নিজের সন্তানকে আনতে পারলেন না। ঈমান উত্তরাধিকারসূত্রে পাওয়া যায় না, পিতার মর্যাদা যত বড়ই হোক তা দিয়ে হস্তান্তরও করা যায় না — একই কথা পরে নবী ﷺ-কেও বলা হয়েছে যে তিনি যাকে ভালোবাসেন তাকে হিদায়াত দিতে পারেন না, বরং আল্লাহ যাকে ইচ্ছা হিদায়াত দেন (28:56)।",
          },
        ],
      },
      {
        h: { en: "The Plea and the Correction", bn: "আবেদন ও সংশোধন" },
        p: [
          {
            en: "When the water subsided and the ship came to rest upon al-Judi (11:44), Nuh called upon his Lord: my son is of my family, and Your promise is true, and You are the most just of judges (11:45). He was appealing to the promise that his household would be saved. The plea was sincere, made by a prophet, and the answer nonetheless corrected it.",
            bn: "পানি নেমে গেলে ও নৌকা জুদি পাহাড়ে স্থির হলে (11:44) নূহ তাঁর প্রভুকে ডাকেন: আমার পুত্র তো আমার পরিবারেরই, আপনার প্রতিশ্রুতি সত্য, আর আপনিই সর্বোত্তম বিচারক (11:45)। তিনি সেই প্রতিশ্রুতির দোহাই দিচ্ছিলেন যে তাঁর পরিবার রক্ষা পাবে। আবেদনটি ছিল আন্তরিক, একজন নবীর মুখ থেকেই আসা — তবু জবাব তা সংশোধন করে দেয়।",
          },
          {
            en: "O Nuh, he is not of your family; it is a deed other than righteous, so do not ask Me for that of which you have no knowledge, lest you be among the ignorant (11:46). Kinship in this religion is conduct, not blood. Nuh's reply is the model answer to correction: my Lord, I seek refuge in You from asking what I have no knowledge of, and unless You forgive me and have mercy upon me I will be among the losers (11:47). He was told to descend with peace and blessings (11:48), and Allah left his mention among later generations: peace upon Nuh among the worlds (37:78-79).",
            bn: "হে নূহ, সে তোমার পরিবারভুক্ত নয়; নিশ্চয়ই তার কাজ অসৎ, তাই যে বিষয়ে তোমার জ্ঞান নেই তা আমার কাছে চেয়ো না — আমি তোমাকে উপদেশ দিচ্ছি, যেন তুমি অজ্ঞদের অন্তর্ভুক্ত না হও (11:46)। এই দ্বীনে আত্মীয়তা রক্তের নয়, আমলের। সংশোধনের জবাবে নূহের কথাটিই আদর্শ: হে আমার প্রভু, যে বিষয়ে আমার জ্ঞান নেই তা চাওয়া থেকে আমি আপনার আশ্রয় চাই; আপনি ক্ষমা ও দয়া না করলে আমি ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব (11:47)। এরপর তাঁকে বলা হয়, আল্লাহর পক্ষ থেকে শান্তি ও বরকত নিয়ে নেমে যাও (11:48); আর অনেক পরে আল্লাহ পরবর্তী প্রজন্মের মধ্যে তাঁর স্মৃতি রেখে দেন — সমগ্র সৃষ্টিজগতে নূহের ওপর শান্তি (37:78-79)।",
          },
        ],
      },
    ],
  },
  hud: {
    sections: [
      {
        h: { en: "The People of 'Ad", bn: "আদ জাতি" },
        p: [
          {
            en: "Before Hud (AS) is introduced, the Quran describes what his people were. Have you not seen how your Lord dealt with 'Ad, Iram of the lofty pillars, the like of which had never been created in the land (89:6-8). They were the great power of their age, and the Quran does not deny their achievement. It records the achievement, and then asks what they did with it.",
            bn: "হুদ (আঃ)-এর পরিচয় দেওয়ার আগেই কুরআন জানায় তাঁর সম্প্রদায় কেমন ছিল। তুমি কি দেখোনি তোমার প্রভু আদের সঙ্গে কী করেছেন — সুউচ্চ স্তম্ভবিশিষ্ট ইরাম, যার সমতুল্য কোনো দেশে সৃষ্টি করা হয়নি (89:6-8)। তারা ছিল নিজেদের যুগের সবচেয়ে বড় শক্তি, আর কুরআন তাদের কীর্তি অস্বীকার করে না। কুরআন কীর্তিটি লিপিবদ্ধ করে, তারপর প্রশ্ন করে — সেই কীর্তি দিয়ে তারা কী করল।",
          },
          {
            en: "Their works are described exactly. Do you build on every elevation a landmark, amusing yourselves, and take for yourselves strongholds as though you would live forever, and when you strike, you strike as tyrants (26:128-130). Monuments, fortresses and force, in that order. The objection is not to building. It is to building as a way of forgetting that one will die, and to strength that answers to nothing above itself.",
            bn: "তাদের কাজের বর্ণনাও নির্দিষ্ট। তোমরা কি প্রতিটি উঁচু জায়গায় স্মারক গড়ে খেলা করছ, আর এমন দুর্গ বানাচ্ছ যেন চিরকাল থাকবে, আর যখন আঘাত হানো তখন স্বৈরাচারীর মতো আঘাত হানো (26:128-130)? স্মারক, দুর্গ ও শক্তি — এই ক্রমেই। আপত্তি নির্মাণের বিরুদ্ধে নয়। আপত্তি সেই নির্মাণের বিরুদ্ধে যা মৃত্যুকে ভুলে থাকার উপায় হয়ে যায়, আর সেই শক্তির বিরুদ্ধে যা নিজের ঊর্ধ্বে কারও কাছে জবাবদিহি করে না।",
          },
        ],
      },
      {
        h: { en: "Their Brother Hud", bn: "তাদেরই ভাই হুদ" },
        p: [
          {
            en: "To 'Ad Allah sent their brother Hud (7:65). The phrase matters. He was one of them, not a stranger with a grievance, and his message was the message of every messenger before and after him: worship Allah, you have no deity other than Him. To that he added a single question shaped for his audience — will you not then fear Him?",
            bn: "আদের কাছে আল্লাহ পাঠালেন তাদেরই ভাই হুদকে (7:65)। কথাটি গুরুত্বপূর্ণ। তিনি ছিলেন তাদেরই একজন, অভিযোগ নিয়ে আসা কোনো বহিরাগত নন; আর তাঁর বার্তা ছিল তাঁর আগে-পরে প্রত্যেক রাসূলের বার্তাই: আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। এর সঙ্গে তিনি যোগ করেন শ্রোতাদের জন্য গড়া একটিমাত্র প্রশ্ন — তবু কি তোমরা তাঁকে ভয় করবে না?",
          },
          {
            en: "He asked them for nothing at all. My people, I do not ask you for any reward for it; my reward is only from the One who created me (11:51). A man who wants nothing from his listeners removes the explanation they would most like to use. 'Ad were left holding a claim they had to answer on its merits, rather than by guessing at the motive of the man making it.",
            bn: "তিনি তাদের কাছে কিছুই চাননি। হে আমার সম্প্রদায়, আমি এর জন্য তোমাদের কাছে কোনো প্রতিদান চাই না; আমার প্রতিদান কেবল তাঁর কাছে যিনি আমাকে সৃষ্টি করেছেন (11:51)। যে মানুষ শ্রোতাদের কাছ থেকে কিছুই চায় না, সে তাদের সবচেয়ে পছন্দের ব্যাখ্যাটিই কেড়ে নেয়। আদের হাতে তখন এমন এক দাবি রইল, যার জবাব তাদের দিতে হবে যুক্তিতে — বক্তার উদ্দেশ্য নিয়ে অনুমান করে নয়।",
          },
        ],
      },
      {
        h: { en: "What They Answered", bn: "তাদের জবাব" },
        p: [
          {
            en: "They answered first with contempt. The chiefs who disbelieved among his people said they saw him in foolishness, and they thought him one of the liars (7:66). Then they demanded the punishment itself: bring us what you promise us, if you are of the truthful (7:70). It is the demand of people certain that nothing will happen, made about the one thing they could not have survived.",
            bn: "প্রথম জবাব ছিল অবজ্ঞা। তাঁর সম্প্রদায়ের অবিশ্বাসী প্রধানেরা বলল, তারা তাঁকে নির্বুদ্ধিতায় ডুবে থাকতে দেখছে, আর তারা তাঁকে মিথ্যাবাদীদের একজন মনে করে (7:66)। এরপর তারা শাস্তিই দাবি করে বসল: তুমি সত্যবাদী হলে আমাদের যা প্রতিশ্রুতি দিচ্ছ তা নিয়ে এসো (7:70)। এটি সেই মানুষদের দাবি, যারা নিশ্চিত যে কিছুই ঘটবে না — অথচ দাবিটি ঠিক সেই জিনিস নিয়ে, যা থেকে তাদের বাঁচার কোনো উপায় ছিল না।",
          },
          {
            en: "Their deeper argument was religious rather than rational. We say only that some of our gods have afflicted you with evil (11:54). His preaching against the idols was explained as a madness the idols themselves had sent upon him. When a society's gods double as its explanation for dissent, the dissenter cannot be heard at all, and it is at this point that argument ended between Hud and his people.",
            bn: "তাদের গভীরতর যুক্তিটি ছিল ধর্মীয়, বুদ্ধিবৃত্তিক নয়। আমরা কেবল এটুকুই বলি যে আমাদের কোনো দেবতা তোমাকে অনিষ্ট দিয়ে আক্রান্ত করেছে (11:54)। মূর্তির বিরুদ্ধে তাঁর প্রচারকে ব্যাখ্যা করা হলো মূর্তিদেরই পাঠানো এক উন্মাদনা হিসেবে। যে সমাজে দেবতারাই ভিন্নমতের ব্যাখ্যা হয়ে দাঁড়ায়, সেখানে ভিন্নমত পোষণকারীর কথা শোনার আর কোনো পথ থাকে না; হুদ ও তাঁর সম্প্রদায়ের মধ্যে যুক্তির আলোচনা এখানেই শেষ হয়।",
          },
        ],
      },
      {
        h: { en: "The Reply of Hud", bn: "হুদের জবাব" },
        p: [
          {
            en: "His answer is one of the strongest declarations of tawhid in the Quran. I call Allah to witness, and you bear witness, that I am free of what you associate with Him. So plot against me all together and give me no respite. I have relied upon Allah, my Lord and your Lord — there is no creature but He holds it by its forelock (11:54-56).",
            bn: "তাঁর জবাবটি কুরআনের সবচেয়ে শক্তিশালী তাওহীদের ঘোষণাগুলোর একটি। আমি আল্লাহকে সাক্ষী রাখছি, আর তোমরাও সাক্ষী থাকো যে, তোমরা যাদের শরিক করো আমি তাদের থেকে সম্পূর্ণ মুক্ত। তাই তোমরা সবাই মিলে আমার বিরুদ্ধে ষড়যন্ত্র করো, আমাকে কোনো অবকাশ দিয়ো না। আমি ভরসা করেছি আল্লাহর ওপর, যিনি আমার প্রভু ও তোমাদেরও প্রভু — এমন কোনো প্রাণী নেই যার ললাট তাঁর হাতে ধরা নয় (11:54-56)।",
          },
          {
            en: "He then told them what refusal would cost, and what it would not. If you turn away, I have already conveyed to you what I was sent with, and my Lord will replace you with another people, and you will not harm Him at all (11:57). The messenger's task is delivery. The outcome belongs to Allah, and the loss in rejecting Him falls entirely on those who reject.",
            bn: "এরপর তিনি জানিয়ে দেন প্রত্যাখ্যানের মূল্য কী, আর কী নয়। তোমরা মুখ ফিরিয়ে নিলে নাও — আমি যা নিয়ে প্রেরিত হয়েছি তা তোমাদের পৌঁছে দিয়েছি; আমার প্রভু তোমাদের বদলে অন্য সম্প্রদায়কে স্থলাভিষিক্ত করবেন, আর তোমরা তাঁর কোনো ক্ষতি করতে পারবে না (11:57)। রাসূলের কাজ পৌঁছে দেওয়া। ফলাফল আল্লাহর হাতে, আর তাঁকে প্রত্যাখ্যানের ক্ষতি পুরোপুরি বর্তায় প্রত্যাখ্যানকারীদের ওপরই।",
          },
        ],
      },
      {
        h: { en: "Who Is Greater in Strength", bn: "শক্তিতে কে বেশি" },
        p: [
          {
            en: "The Quran preserves the exact sentence at the centre of their pride. As for 'Ad, they were arrogant upon the earth without right and said, who is greater than us in strength? Did they not consider that Allah, who created them, is greater than them in strength (41:15). The question answers itself, which is precisely why they were never given any other answer.",
            bn: "তাদের অহংকারের কেন্দ্রে থাকা বাক্যটি কুরআন হুবহু সংরক্ষণ করেছে। আর আদ, তারা পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল এবং বলেছিল, আমাদের চেয়ে শক্তিতে বড় কে আছে? তারা কি ভেবে দেখেনি যে আল্লাহ, যিনি তাদের সৃষ্টি করেছেন, শক্তিতে তাদের চেয়ে প্রবল (41:15)? প্রশ্নটি নিজেই নিজের উত্তর, আর ঠিক এ কারণেই তাদের অন্য কোনো উত্তর দেওয়া হয়নি।",
          },
          {
            en: "The end then arrived disguised as the thing they most wanted. When they saw it as a dense cloud approaching their valleys they said, this is a cloud bringing us rain. Rather, it is that which you were impatient for: a wind within which is a painful punishment (46:24). By morning nothing could be seen of them but their dwellings (46:25).",
            bn: "এরপর ধ্বংস এল ঠিক সেই বেশে, যা তারা সবচেয়ে বেশি চাইছিল। যখন তারা দেখল ঘন এক মেঘ তাদের উপত্যকার দিকে আসছে, তারা বলল, এ তো মেঘ, আমাদের বৃষ্টি দেবে। বরং এটি সেটিই, যার জন্য তোমরা তাড়াহুড়ো করছিলে — এমন এক বাতাস যাতে রয়েছে যন্ত্রণাদায়ক শাস্তি (46:24)। সকাল হতেই তাদের বসতিগুলো ছাড়া আর কিছুই দেখা গেল না (46:25)।",
          },
        ],
      },
      {
        h: { en: "The Wind and the Pattern", bn: "ঝড় ও ধারাবাহিকতা" },
        p: [
          {
            en: "As for 'Ad, they were destroyed by a screaming, violent wind, which Allah imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees (69:6-7). A wind is the softest instrument imaginable, and it was turned against the people who measured everything by force. Hud and those who believed with him were saved by a mercy from Allah (11:58).",
            bn: "আর আদ, তাদের ধ্বংস করা হয়েছিল এক প্রচণ্ড গর্জনশীল ঝড় দিয়ে, যা আল্লাহ তাদের ওপর চাপিয়ে দেন একটানা সাত রাত ও আট দিন; ফলে তুমি দেখতে সেখানকার মানুষ পড়ে আছে যেন ফাঁপা খেজুরকাণ্ড (69:6-7)। বাতাস হলো কল্পনাযোগ্য সবচেয়ে কোমল উপকরণ, আর সেটিকেই চালানো হলো সেই জাতির বিরুদ্ধে যারা সব কিছু মাপত শক্তি দিয়ে। হুদ ও তাঁর সঙ্গে যারা ঈমান এনেছিল, তাঁরা আল্লাহর রহমতে রক্ষা পান (11:58)।",
          },
          {
            en: "The Quran then sets 'Ad beside Thamud again and again — in Surah al-A'raf, in Surah Hud, in Surah al-Fajr — always in the same order and always for the same reason. Two peoples, two different gifts, two clear warnings delivered by a brother from among them, and two identical refusals. The pattern is itself the argument: what ruined them was not their strength but the conclusion they drew from it.",
            bn: "এরপর কুরআন বারবার আদের পাশে সামুদকে বসায় — সূরা আল-আরাফে, সূরা হুদে, সূরা আল-ফাজরে — সবসময় একই ক্রমে ও একই কারণে। দুটি জাতি, দুই রকম নিয়ামত, তাদেরই মধ্য থেকে আসা ভাইয়ের মুখে দুটি স্পষ্ট সতর্কবাণী, আর অবিকল একই দুটি প্রত্যাখ্যান। এই ধারাবাহিকতাই যুক্তি: তাদের ধ্বংস করেছিল তাদের শক্তি নয়, বরং সেই শক্তি থেকে তারা যে সিদ্ধান্ত টেনেছিল সেটিই।",
          },
        ],
      },
    ],
  },
  salih: {
    sections: [
      {
        h: { en: "Thamud, After 'Ad", bn: "আদের পর সামুদ" },
        p: [
          {
            en: "Remember when He made you successors after 'Ad and settled you in the land, taking for yourselves palaces from its plains and carving out homes in the mountains (7:74). Thamud inherited both the territory and the warning of the people before them. Their gift was not raw power but skill: they cut dwellings directly out of rock faces, and the Quran calls their work secure and confident (15:82).",
            bn: "স্মরণ করো, যখন তিনি তোমাদের আদের পর স্থলাভিষিক্ত করলেন এবং পৃথিবীতে বসতি দিলেন — তোমরা সমতল থেকে প্রাসাদ গড়তে ও পাহাড় কেটে ঘর বানাতে (7:74)। সামুদ উত্তরাধিকারে পেয়েছিল ভূখণ্ড এবং আগের জাতির প্রতি দেওয়া সতর্কবার্তা — দুটোই। তাদের নিয়ামত ছিল কাঁচা শক্তি নয়, দক্ষতা: তারা পাথরের গা কেটে সরাসরি বাসস্থান বানাত, আর কুরআন তাদের সেই নির্মাণকে নিরাপদ ও নিশ্চিন্ত বলে বর্ণনা করে (15:82)।",
          },
          {
            en: "Their prosperity is described in the same tone. Will you be left in what you have here, secure, among gardens and springs, and fields and palm trees with softened fruit — and you carve out of the mountains, homes, with skill (26:146-149). Every clause is a favour, and the passage lists them so that the question at the end lands: will you not fear Allah and obey me?",
            bn: "তাদের সমৃদ্ধিরও বর্ণনা একই সুরে। তোমাদের কি এখানকার সব কিছুতে নিরাপদে ছেড়ে দেওয়া হবে — বাগান ও ঝর্ণার মাঝে, ক্ষেত ও কোমল ফলে ভরা খেজুরবাগানে? আর তোমরা দক্ষতার সঙ্গে পাহাড় কেটে ঘর বানাও (26:146-149)। প্রতিটি বাক্যাংশই একটি অনুগ্রহ, আর সেগুলো একে একে গোনা হয়েছে যেন শেষের প্রশ্নটি জায়গামতো লাগে: তবু কি তোমরা আল্লাহকে ভয় করবে না এবং আমার আনুগত্য করবে না?",
          },
        ],
      },
      {
        h: { en: "The Man They Had Trusted", bn: "যাঁকে তারা ভরসা করত" },
        p: [
          {
            en: "To Thamud Allah sent their brother Salih (11:61), and his call was the same one that had already been refused once in that land: worship Allah, you have no deity other than Him. He added a reason drawn from their own history — He produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him.",
            bn: "সামুদের কাছে আল্লাহ পাঠালেন তাদেরই ভাই সালিহকে (11:61), আর তাঁর আহ্বান ছিল সেই একই আহ্বান যা ওই ভূখণ্ডে একবার প্রত্যাখ্যাত হয়ে গেছে: আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তিনি সঙ্গে যোগ করেন তাদের নিজেদের ইতিহাস থেকে নেওয়া এক যুক্তি — তিনিই তোমাদের মাটি থেকে সৃষ্টি করেছেন ও সেখানেই বসতি দিয়েছেন; তাই তাঁর কাছে ক্ষমা চাও, অতঃপর তাঁর দিকেই ফিরে এসো।",
          },
          {
            en: "Their reply contains a detail found nowhere else. O Salih, you were among us one in whom hope was placed before this (11:62). He had been the promising man of his people, the one they expected great things from, and their complaint was that he had turned away from what their fathers worshipped. Opposition to him was not sudden dislike; it was a community feeling betrayed by its own best.",
            bn: "তাদের জবাবে এমন একটি কথা আছে যা আর কোথাও নেই। হে সালিহ, এর আগে তুমি তো আমাদের মধ্যে এমন একজন ছিলে যাকে ঘিরে আশা ছিল (11:62)। তিনি ছিলেন সম্প্রদায়ের সেই সম্ভাবনাময় মানুষ, যাঁর কাছে তারা বড় কিছু আশা করত; আর তাদের অভিযোগ ছিল, তিনি পিতৃপুরুষের উপাস্যদের থেকে মুখ ফিরিয়ে নিয়েছেন। তাঁর বিরোধিতা হঠাৎ গজিয়ে ওঠা অপছন্দ নয় — এটি ছিল নিজেদের সেরা মানুষের হাতে প্রতারিত বোধ করা একটি সমাজ।",
          },
        ],
      },
      {
        h: { en: "The She-Camel as Sign", bn: "নিদর্শনরূপে উষ্ট্রী" },
        p: [
          {
            en: "They asked for proof, and it was given in a form no one could dispute. This is the she-camel of Allah, for you a sign, so leave her to eat within Allah's land and do not touch her with harm, lest a painful punishment seize you (7:73). The sign was not a spectacle in the sky. It was an animal that had to be lived with, day after day, in public.",
            bn: "তারা প্রমাণ চেয়েছিল, আর প্রমাণ এল এমন এক রূপে যা নিয়ে বিতর্ক করার উপায় নেই। এটি আল্লাহর উষ্ট্রী, তোমাদের জন্য নিদর্শন; একে আল্লাহর জমিনে চরতে দাও এবং কোনো ক্ষতি দিয়ে স্পর্শ কোরো না, নইলে যন্ত্রণাদায়ক শাস্তি তোমাদের ধরবে (7:73)। নিদর্শনটি আকাশে দেখানো কোনো দৃশ্য ছিল না। এটি ছিল এমন এক প্রাণী, যার সঙ্গে দিনের পর দিন প্রকাশ্যে বসবাস করতে হতো।",
          },
          {
            en: "The terms were exact. This is a she-camel; for her is a share of water, and for you a share of water, each on a known day (26:155). Water in that country was the whole of life, and a shared turn at it meant a daily decision, taken by the entire town, to accept a command from Allah. Allah calls the arrangement plainly what it was: a trial for them (54:27).",
            bn: "শর্ত ছিল নির্দিষ্ট। এটি একটি উষ্ট্রী; পানির একটি ভাগ তার, আর একটি ভাগ তোমাদের — প্রত্যেকের জন্য নির্ধারিত দিনে (26:155)। ওই দেশে পানিই ছিল গোটা জীবন, আর পানির পালা ভাগ করার অর্থ ছিল প্রতিদিন গোটা জনপদের একটি সিদ্ধান্ত: আল্লাহর একটি আদেশ মেনে নেওয়া। আল্লাহ এই ব্যবস্থাটিকে স্পষ্ট নামেই ডাকেন — তাদের জন্য এক পরীক্ষা (54:27)।",
          },
        ],
      },
      {
        h: { en: "The Hamstringing", bn: "উষ্ট্রী হত্যা" },
        p: [
          {
            en: "The Quran is careful about who did it. The most wretched of them was sent forth, and the messenger of Allah said to them, this is the she-camel of Allah and her drink. But they denied him and hamstrung her, so their Lord brought down upon them destruction for their sin and levelled them (91:12-14). One man struck; the whole people are held responsible, because they consented.",
            bn: "কে কাজটি করেছিল, কুরআন সে বিষয়ে সতর্ক। তাদের সবচেয়ে দুর্ভাগা লোকটিকে পাঠানো হলো, আর আল্লাহর রাসূল তাদের বললেন, এ তো আল্লাহর উষ্ট্রী ও তার পানি পানের পালা। কিন্তু তারা তাঁকে মিথ্যা বলল এবং উষ্ট্রীটিকে হত্যা করল; তখন তাদের প্রভু তাদের পাপের কারণে তাদের ওপর ধ্বংস নামিয়ে সব সমান করে দিলেন (91:12-14)। আঘাত করেছিল একজন; দায় বর্তায় গোটা জাতির ওপর, কারণ তারা সম্মতি দিয়েছিল।",
          },
          {
            en: "There was also a plot. In the city were nine men who caused corruption and did not reform, and they swore by Allah that they would attack Salih and his family by night, and then tell his heir they had not witnessed the destruction of his household, and that they were truthful (27:48-49). Men who were about to commit murder were still arranging an oath in Allah's name to cover it.",
            bn: "একটি ষড়যন্ত্রও ছিল। নগরীতে ছিল নয় ব্যক্তি, যারা বিপর্যয় ঘটাত ও সংশোধন করত না; তারা আল্লাহর নামে কসম খেয়ে বলল, তারা রাতে সালিহ ও তাঁর পরিবারের ওপর হামলা করবে, তারপর তাঁর উত্তরাধিকারীকে বলবে যে তারা তাঁর পরিবারের ধ্বংস দেখেনি এবং তারা সত্যবাদী (27:48-49)। যারা হত্যা করতে যাচ্ছিল, তারাই সেটি ঢাকতে আল্লাহর নামে কসমের বন্দোবস্ত করছিল।",
          },
        ],
      },
      {
        h: { en: "Three Days of Grace", bn: "তিন দিনের অবকাশ" },
        p: [
          {
            en: "After the killing Salih (AS) said, enjoy yourselves in your homes for three days; that is a promise not to be denied (11:65). The mercy in that sentence is easy to miss. Three days is time enough to repent, and it was given to a people who had just destroyed the proof they had themselves demanded. Nothing in the account says any of them used it.",
            bn: "হত্যার পর সালিহ (আঃ) বললেন, তোমরা তিন দিন নিজেদের ঘরে ভোগ করে নাও; এটি এমন প্রতিশ্রুতি যা মিথ্যা হওয়ার নয় (11:65)। এই বাক্যের ভেতরের দয়াটুকু সহজেই চোখ এড়িয়ে যায়। তিন দিন তওবা করার জন্য যথেষ্ট সময়, আর তা দেওয়া হয়েছিল এমন এক জাতিকে যারা নিজেদের চাওয়া প্রমাণটিই মাত্র ধ্বংস করেছে। বিবরণে কোথাও নেই যে তাদের কেউ সেই সময়টুকু কাজে লাগিয়েছিল।",
          },
          {
            en: "When Our command came, We saved Salih and those who believed with him, by mercy from Us (11:66). The blast seized the wrongdoers, and they became, in their homes, fallen upon their faces (11:67). Salih turned away from them and said, my people, I had certainly conveyed to you the message of my Lord and advised you, but you do not like advisers (7:79).",
            bn: "যখন আমার আদেশ এল, আমি সালিহ ও তাঁর সঙ্গে যারা ঈমান এনেছিল তাদের রক্ষা করলাম আমার পক্ষ থেকে রহমতে (11:66)। বিকট গর্জন জালিমদের গ্রাস করল, আর তারা নিজেদের ঘরের ভেতরেই উপুড় হয়ে পড়ে রইল (11:67)। সালিহ তাদের থেকে মুখ ফিরিয়ে বললেন, হে আমার সম্প্রদায়, আমি তো তোমাদের কাছে আমার প্রভুর বার্তা পৌঁছে দিয়েছি ও তোমাদের কল্যাণ কামনা করেছি, কিন্তু তোমরা কল্যাণকামীদের পছন্দ করো না (7:79)।",
          },
        ],
      },
      {
        h: { en: "The Ruins and the Pattern", bn: "ধ্বংসাবশেষ ও ধারাবাহিকতা" },
        p: [
          {
            en: "The Quran states the reason without ambiguity. As for Thamud, We guided them, but they preferred blindness over guidance (41:17). They were not left without knowledge; they were given a sign, a warning, a named prophet from among themselves and a grace period, and each was refused. The verdict falls on choice, not on ignorance, which is why it can be a warning to anyone reading it.",
            bn: "কারণটি কুরআন কোনো অস্পষ্টতা ছাড়াই বলে দেয়। আর সামুদ, আমি তাদের পথ দেখিয়েছিলাম, কিন্তু তারা হিদায়াতের ওপর অন্ধত্বকেই বেছে নিয়েছিল (41:17)। তাদের জ্ঞান থেকে বঞ্চিত রাখা হয়নি; তাদের দেওয়া হয়েছিল নিদর্শন, সতর্কবার্তা, নিজেদের মধ্য থেকে নাম ধরে পাঠানো এক নবী এবং অবকাশের সময় — প্রতিটিই তারা ফিরিয়ে দিয়েছে। রায়টি অজ্ঞতার ওপর নয়, বাছাইয়ের ওপর; এ কারণেই যে কেউ এটি পড়ে তার জন্যই এটি সতর্কবার্তা।",
          },
          {
            en: "Their dwellings survived them. And the companions of al-Hijr denied the messengers; We gave them Our signs, but they turned away from them (15:80-81). When the Muslim army passed those carved houses on the way to Tabuk, the Prophet ﷺ told his companions not to enter the dwellings of those who wronged themselves except in tears, lest what struck them strike the visitors too. Ruins are not tourism in this religion; they are evidence.",
            bn: "তাদের বসতিগুলো তাদের চেয়ে বেশিদিন টিকে থাকল। আর হিজরের অধিবাসীরা রাসূলদের অস্বীকার করেছিল; আমি তাদের নিদর্শন দিয়েছিলাম, কিন্তু তারা তা থেকে মুখ ফিরিয়ে নিয়েছিল (15:80-81)। তাবুকের পথে মুসলিম বাহিনী যখন সেই খোদাই করা ঘরগুলোর পাশ দিয়ে যায়, নবী ﷺ সাহাবিদের বলেন, যারা নিজেদের ওপর জুলুম করেছে তাদের বাসস্থানে কান্না ছাড়া প্রবেশ কোরো না, নইলে তাদের ওপর যা এসেছিল তা তোমাদের ওপরও আসতে পারে। এই দ্বীনে ধ্বংসাবশেষ ভ্রমণের বিষয় নয়, তা প্রমাণ।",
          },
        ],
      },
    ],
  },
  ibrahim: {
    sections: [
      {
        h: { en: "The Search for the Lord", bn: "প্রভুর সন্ধান" },
        p: [
          {
            en: "Thus did We show Ibrahim the realm of the heavens and the earth, that he would be among the certain in faith (6:75). What follows is the only passage in the Quran that walks a prophet through an argument step by step. When night covered him he saw a star and said, this is my lord; but when it set, he said, I do not love those that set (6:76).",
            bn: "এভাবেই আমি ইবরাহীমকে আসমান ও জমিনের রাজত্ব দেখিয়েছিলাম, যাতে তিনি দৃঢ় বিশ্বাসীদের অন্তর্ভুক্ত হন (6:75)। এরপর আসে কুরআনের একমাত্র সেই অংশ, যেখানে একজন নবীকে ধাপে ধাপে একটি যুক্তির ভেতর দিয়ে নিয়ে যাওয়া হয়। রাত যখন তাঁকে ঢেকে ফেলল, তিনি একটি তারা দেখে বললেন, এই আমার প্রভু; কিন্তু তা ডুবে গেলে বললেন, যারা অস্তমিত হয় তাদের আমি ভালোবাসি না (6:76)।",
          },
          {
            en: "Then the moon, then the sun, each greater than the last and each setting in turn (6:77-78). At the end he said, I have turned my face toward the One who created the heavens and the earth, inclining to truth, and I am not of those who associate others with Him (6:79). The conclusion is not that the sun is unworthy, but that whatever changes and departs cannot be what everything depends on.",
            bn: "এরপর চাঁদ, তারপর সূর্য — প্রত্যেকটি আগেরটির চেয়ে বড়, আর প্রত্যেকটিই পালা করে অস্ত যায় (6:77-78)। শেষে তিনি বললেন, আমি একনিষ্ঠভাবে মুখ ফিরিয়েছি তাঁরই দিকে যিনি আসমান ও জমিন সৃষ্টি করেছেন, আর আমি মুশরিকদের অন্তর্ভুক্ত নই (6:79)। উপসংহারটি এই নয় যে সূর্য অযোগ্য। উপসংহার হলো, যা বদলায় ও চলে যায়, সব কিছু তার ওপর নির্ভর করতে পারে না।",
          },
        ],
      },
      {
        h: { en: "His Father and His People", bn: "পিতা ও সম্প্রদায়" },
        p: [
          {
            en: "He took the argument home first. O my father, why do you worship that which does not hear and does not see (19:42). Each address opens with the same words, my father, and the last offers help rather than judgement: knowledge has come to me that has not come to you, so follow me and I will guide you to an even path (19:43).",
            bn: "যুক্তিটি তিনি প্রথমে ঘরেই তুললেন। হে আমার পিতা, আপনি এমন কিছুর ইবাদত করেন কেন যা শোনে না, দেখে না এবং আপনার কোনো উপকারেও আসে না (19:42)? প্রতিটি সম্বোধনের শুরুতেই একই শব্দ — হে আমার পিতা — মোট চারবার; আর শেষটি বিচার নয়, সাহায্যের প্রস্তাব: আমার কাছে এমন জ্ঞান এসেছে যা আপনার কাছে আসেনি, তাই আমাকে অনুসরণ করুন, আমি আপনাকে সরল পথ দেখাব (19:43)।",
          },
          {
            en: "The answer was a threat of stoning and an order to leave him for a long time (19:46). Ibrahim (AS) replied, peace be upon you; I will ask forgiveness for you from my Lord (19:47). He kept that word, and the Quran explains that the request was only because of a promise he had made; when it became clear his father was an enemy to Allah, he disassociated from him (9:114).",
            bn: "জবাব এল পাথর মেরে হত্যার হুমকি আর দীর্ঘদিনের জন্য দূরে সরে যাওয়ার আদেশ (19:46)। ইবরাহীম (আঃ) বললেন, আপনার প্রতি সালাম; আমি আমার প্রভুর কাছে আপনার জন্য ক্ষমা চাইব (19:47)। তিনি কথা রেখেছিলেন; আর কুরআন পরে ব্যাখ্যা দেয় যে সেই ক্ষমাপ্রার্থনা ছিল কেবল একটি প্রতিশ্রুতির কারণে, এবং যখন স্পষ্ট হলো তাঁর পিতা আল্লাহর শত্রু, তখন তিনি তাঁর থেকে সম্পর্ক ছিন্ন করেন (9:114)।",
          },
        ],
      },
      {
        h: { en: "The Axe and the Question", bn: "কুড়াল ও প্রশ্ন" },
        p: [
          {
            en: "He asked his people what these statues were to which they were devoted, and they answered that they had found their fathers worshipping them (21:52-53). That was the whole case: inheritance. He told them plainly they and their fathers had been in clear error, and then said he had a plan for their idols after they had turned their backs (21:54, 21:57).",
            bn: "তিনি তাঁর সম্প্রদায়কে জিজ্ঞেস করলেন, এই মূর্তিগুলো কী, যাদের প্রতি তোমরা এত নিবেদিত; তারা বলল, তারা তাদের পিতৃপুরুষদের এদের পূজা করতে দেখেছে (21:52-53)। পুরো যুক্তিটাই এই — উত্তরাধিকার। তিনি স্পষ্ট বললেন, তারা ও তাদের পিতৃপুরুষেরা প্রকাশ্য ভ্রান্তিতে ছিল; এরপর বললেন, তারা পিঠ ফিরিয়ে চলে গেলে তিনি তাদের মূর্তিগুলোর ব্যাপারে একটি পরিকল্পনা করবেন (21:54, 21:57)।",
          },
          {
            en: "So he made them into pieces, except a large one among them, that they might return to it (21:58). When they demanded who had done it, he said, rather, this the largest of them did it, so ask them, if they should speak (21:63). They turned to one another and admitted they were the wrongdoers — then reversed and told him he knew these idols do not speak (21:64-65).",
            bn: "অতঃপর তিনি সেগুলোকে টুকরো টুকরো করে দিলেন, কেবল বড়টিকে রেখে, যাতে তারা তার কাছে ফিরে আসে (21:58)। তারা যখন জানতে চাইল কে এ কাজ করেছে, তিনি বললেন, বরং এদের এই বড়টিই করেছে; ওদেরই জিজ্ঞেস করো, যদি তারা কথা বলতে পারে (21:63)। তারা একে অপরের দিকে ফিরে স্বীকার করল যে তারাই জালিম — তারপর মুহূর্তেই উল্টে গিয়ে বলল, তুমি তো জানোই এরা কথা বলে না (21:64-65)।",
          },
        ],
      },
      {
        h: { en: "Into the Fire", bn: "আগুনে নিক্ষেপ" },
        p: [
          {
            en: "That admission was the point of the act. He said, then do you worship instead of Allah that which does not benefit you at all, nor harm you (21:66). Having lost the argument in public, they moved to force: burn him and support your gods, if you are to act (21:68). It is the standard sequence when a belief cannot defend itself and will not be given up.",
            bn: "ওই স্বীকারোক্তিই ছিল গোটা কাজটির উদ্দেশ্য। তিনি বললেন, তবে কি তোমরা আল্লাহকে ছেড়ে এমন কিছুর ইবাদত করো যা তোমাদের কোনো উপকারও করে না, ক্ষতিও করে না (21:66)? প্রকাশ্যে যুক্তিতে হেরে গিয়ে তারা শক্তির দিকে গেল: একে পুড়িয়ে দাও এবং তোমাদের দেবতাদের সাহায্য করো, যদি কিছু করতে চাও (21:68)। যে বিশ্বাস নিজেকে রক্ষা করতে পারে না অথচ ছাড়াও হবে না, তার ক্ষেত্রে এটিই স্বাভাবিক ক্রম।",
          },
          {
            en: "We said, O fire, be coolness and safety upon Ibrahim (21:69). They intended for him a plan, but We made them the greatest losers (21:70). The fire was not extinguished and the crowd not scattered; it simply stopped doing to him what fire does. A thing obeys its Maker before it obeys its nature, and one man standing alone was the one who walked out of it.",
            bn: "আমি বললাম, হে আগুন, তুমি ইবরাহীমের জন্য শীতল ও নিরাপদ হয়ে যাও (21:69)। তারা তাঁর বিরুদ্ধে ফন্দি এঁটেছিল, কিন্তু আমি তাদেরই সবচেয়ে বড় ক্ষতিগ্রস্ত বানিয়ে দিলাম (21:70)। আগুন নিভিয়ে দেওয়া হয়নি, ভিড়ও সরিয়ে দেওয়া হয়নি; আগুন কেবল তাঁর সঙ্গে সেই কাজটি করা বন্ধ করল যা আগুন করে থাকে। প্রতিটি বস্তু নিজের স্বভাবের আগে নিজের স্রষ্টার আনুগত্য করে, আর একা দাঁড়ানো মানুষটিই সেখান থেকে হেঁটে বেরিয়ে এসেছিলেন।",
          },
        ],
      },
      {
        h: { en: "Migration and the Valley", bn: "হিজরত ও উপত্যকা" },
        p: [
          {
            en: "He then said, indeed I am going to my Lord; He will guide me (37:99). Lut believed him, and Ibrahim left his homeland for the sake of Allah (29:26). The migration cost him everything a man ordinarily holds: family, standing, birthplace. In exchange he was given a land Allah blessed for the worlds (21:71), and descendants through whom prophethood would run to the end.",
            bn: "এরপর তিনি বললেন, আমি আমার প্রভুর দিকে চললাম; তিনিই আমাকে পথ দেখাবেন (37:99)। লূত তাঁকে বিশ্বাস করলেন, আর ইবরাহীম আল্লাহর জন্য নিজের জন্মভূমি ছেড়ে দিলেন (29:26)। এই হিজরত তাঁর কাছ থেকে কেড়ে নিল সেই সব কিছু যা মানুষ সাধারণত আঁকড়ে ধরে: পরিবার, সমাজে অবস্থান, জন্মস্থান। বিনিময়ে তাঁকে দেওয়া হলো এমন এক ভূমি যা আল্লাহ বিশ্ববাসীর জন্য বরকতময় করেছেন (21:71), আর এমন বংশধর যাদের ভেতর দিয়ে নবুয়ত শেষ পর্যন্ত চলতে থাকবে।",
          },
          {
            en: "Later he brought Hajar and the infant Isma'il to an empty valley and left them there with a little food and water. Bukhari preserves her question — has Allah commanded you to do this? — and his answer, yes; she said, then He will not neglect us. His prayer is in the Quran: our Lord, I have settled some of my descendants in an uncultivated valley near Your sacred House, so make hearts incline toward them (14:37).",
            bn: "পরে তিনি হাজেরা ও শিশু ইসমাঈলকে এক জনশূন্য উপত্যকায় এনে সামান্য খাবার ও পানি রেখে চলে যান। বুখারি তাঁর প্রশ্নটি সংরক্ষণ করেছে — আল্লাহ কি আপনাকে এই আদেশ দিয়েছেন? — এবং তাঁর জবাব, হ্যাঁ; শুনে তিনি বলেন, তবে তিনি আমাদের অবহেলা করবেন না। তাঁর দোয়াটি কুরআনেই আছে: হে আমাদের প্রভু, আমি আমার বংশধরদের কিছু অংশকে আপনার সম্মানিত ঘরের কাছে অনুর্বর উপত্যকায় বসিয়েছি; তাই মানুষের হৃদয়কে তাদের প্রতি ঝুঁকিয়ে দিন (14:37)।",
          },
        ],
      },
      {
        h: { en: "The Greatest Trial", bn: "সবচেয়ে বড় পরীক্ষা" },
        p: [
          {
            en: "My Lord, grant me one of the righteous (37:100). The son was given, and when he reached the age of working with his father, Ibrahim said, my son, I have seen in a dream that I must sacrifice you, so see what you think (37:102). He did not conceal it or command it; he put the matter to the boy, which tells us what kind of father he was.",
            bn: "হে আমার প্রভু, আমাকে একজন সৎকর্মশীল সন্তান দান করুন (37:100)। সন্তান দেওয়া হলো; আর সে যখন পিতার সঙ্গে কাজ করার বয়সে পৌঁছাল, ইবরাহীম বললেন, হে আমার পুত্র, আমি স্বপ্নে দেখেছি যে আমি তোমাকে কুরবানি করছি, এখন ভেবে দেখো তোমার অভিমত কী (37:102)। তিনি বিষয়টি লুকাননি, আদেশও করেননি। তিনি কথাটি ছেলের সামনে রেখেছিলেন — এতেই বোঝা যায় তিনি কেমন পিতা ছিলেন।",
          },
          {
            en: "The boy answered that he should do as he was commanded, and would find him, if Allah willed, of the patient. When they had both submitted and he laid him down on his forehead, We called out to him, O Ibrahim, you have fulfilled the vision (37:103-105). The trial was never about the killing but about the willingness, and once that was real the command was lifted.",
            bn: "ছেলেটি জবাব দিল, আপনাকে যা আদেশ করা হয়েছে তা-ই করুন; আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীলদের একজন পাবেন। যখন তাঁরা দুজনেই আত্মসমর্পণ করলেন এবং তিনি ছেলেকে কাত করে শোয়ালেন, আমি তাঁকে ডেকে বললাম, হে ইবরাহীম, তুমি স্বপ্ন সত্যে পরিণত করেছ (37:103-105)। পরীক্ষাটি কখনোই জবাই নিয়ে ছিল না। ছিল স্বেচ্ছায় সম্মত হওয়া নিয়ে; আর সেই সম্মতি সত্য প্রমাণিত হতেই আদেশ তুলে নেওয়া হলো।",
          },
        ],
      },
      {
        h: { en: "The House and the Friend", bn: "ঘর ও বন্ধু" },
        p: [
          {
            en: "And We ransomed him with a great sacrifice (37:107). The rites of Hajj still trace that day. And when Ibrahim was raising the foundations of the House, with Isma'il, saying, our Lord, accept this from us; indeed You are the Hearing, the Knowing (2:127). Men building a sanctuary for all time still asked to be accepted as they worked.",
            bn: "আর আমি এক মহান কুরবানির বিনিময়ে তাকে মুক্ত করলাম (37:107)। হজের আচার আজও সেই দিনটিকে অনুসরণ করে। যখন ইবরাহীম ইসমাঈলকে সঙ্গে নিয়ে ঘরের ভিত তুলছিলেন, তাঁরা বলছিলেন, হে আমাদের প্রভু, আমাদের পক্ষ থেকে কবুল করুন; নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ (2:127)। যাঁরা চিরকালের জন্য একটি পবিত্র ঘর গড়ছিলেন, কাজ করতে করতেই তাঁরা কবুলিয়াতের প্রার্থনা করছিলেন।",
          },
          {
            en: "Their prayer went further than the building: our Lord, send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them (2:129). In a hadith recorded by Ahmad and Ibn Hibban and graded hasan, the Prophet ﷺ said he was the answer to it. Ibrahim was named an upright community in himself (16:120), the one who fulfilled his obligations (53:37), and Allah took him as an intimate friend (4:125).",
            bn: "তাঁদের দোয়া নির্মাণের চেয়েও দূর পর্যন্ত গেল: হে আমাদের প্রভু, তাদের মধ্য থেকেই তাদের কাছে এমন একজন রাসূল পাঠান, যিনি তাদের আপনার আয়াত পড়ে শোনাবেন, কিতাব ও হিকমত শেখাবেন এবং তাদের পবিত্র করবেন (2:129)। আহমদ ও ইবনে হিব্বানে বর্ণিত একটি হাসান হাদিসে নবী ﷺ বলেছেন, তিনিই সেই দোয়ার জবাব। ইবরাহীমকে বলা হয়েছে নিজেই এক অনুগত জাতি (16:120), যিনি নিজের দায়িত্ব পূর্ণ করেছেন (53:37); আর আল্লাহ তাঁকে অন্তরঙ্গ বন্ধু হিসেবে গ্রহণ করেছেন (4:125)।",
          },
        ],
      },
    ],
  },
  lut: {
    sections: [
      {
        h: { en: "The One Who Believed Him", bn: "যিনি তাঁকে বিশ্বাস করলেন" },
        p: [
          {
            en: "And Lut believed him (29:26). The him is Ibrahim, and the sentence is the first thing the Quran tells us about Lut (AS). He was a nephew of Ibrahim, and when Ibrahim left his homeland for the sake of Allah, Lut migrated with him. He is introduced not by his own mission but by the moment he accepted the truth when almost nobody else did.",
            bn: "আর লূত তাঁকে বিশ্বাস করলেন (29:26)। এখানে 'তাঁকে' মানে ইবরাহীম, আর এই বাক্যটিই লূত (আঃ) সম্পর্কে কুরআনের প্রথম বক্তব্য। তিনি ছিলেন ইবরাহীমের ভাতিজা; ইবরাহীম যখন আল্লাহর জন্য জন্মভূমি ছাড়েন, লূতও তাঁর সঙ্গে হিজরত করেন। তাঁর পরিচয় শুরু হয় নিজের দায়িত্ব দিয়ে নয়, বরং সেই মুহূর্ত দিয়ে যখন প্রায় আর কেউ না মানলেও তিনি সত্য মেনে নিয়েছিলেন।",
          },
          {
            en: "Allah then gave him judgement and knowledge and saved him from the city that had been practising wicked deeds; they were a people of evil, defiantly disobedient (21:74). He was sent to the cities of the plain as their prophet, and the assignment was among the hardest ever given: not a people who worshipped the wrong god, but a people whose public life had collapsed morally.",
            bn: "এরপর আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দিলেন এবং সেই জনপদ থেকে রক্ষা করলেন যা মন্দ কাজ করত; তারা ছিল মন্দ ও অবাধ্য এক সম্প্রদায় (21:74)। তাঁকে সমতলভূমির জনপদগুলোতে নবী হিসেবে পাঠানো হয়, আর দায়িত্বটি ছিল সবচেয়ে কঠিনগুলোর একটি: এরা ভুল উপাস্যের পূজারি কোনো জাতি নয়, বরং এমন এক জাতি যাদের প্রকাশ্য সমাজজীবন নৈতিকভাবে ভেঙে পড়েছিল।",
          },
        ],
      },
      {
        h: { en: "A Wrong Without Precedent", bn: "নজিরবিহীন এক অন্যায়" },
        p: [
          {
            en: "And Lut, when he said to his people, do you commit such immorality as no one has preceded you with among the worlds? Indeed, you approach men with desire instead of women; rather, you are a transgressing people (7:80-81). The Quran states the matter once, plainly, and does not linger over it. It is named as a wrong, given its reason, and left there.",
            bn: "আর লূত, যখন তিনি তাঁর সম্প্রদায়কে বললেন, তোমরা কি এমন অশ্লীল কাজ করছ যা সৃষ্টিজগতে তোমাদের আগে কেউ করেনি? তোমরা তো নারীদের ছেড়ে কামনা নিয়ে পুরুষদের কাছে যাও; বরং তোমরা সীমালঙ্ঘনকারী এক সম্প্রদায় (7:80-81)। কুরআন বিষয়টি একবারই স্পষ্টভাবে বলে এবং এর ওপর দীর্ঘ আলোচনা করে না। একে অন্যায় বলে চিহ্নিত করা হয়, কারণ জানানো হয়, তারপর সেখানেই রেখে দেওয়া হয়।",
          },
          {
            en: "The indecency was not the whole of it. He asked them, do you commit the wicked act, and cut off the road, and commit in your meetings what is shameful (29:29)? Robbery of travellers and open shamelessness in public gatherings are listed alongside it. What the Quran describes is a society in which the private wrong had become a public custom that nobody was any longer able to name.",
            bn: "অশ্লীলতাই সব ছিল না। তিনি তাদের জিজ্ঞেস করেন, তোমরা কি জঘন্য কাজ করো, পথ কেটে ডাকাতি করো এবং নিজেদের মজলিসে প্রকাশ্যে লজ্জাকর কাজ করো (29:29)? পথিকদের লুণ্ঠন ও জনসমাগমে প্রকাশ্য নির্লজ্জতাও এর সঙ্গে গোনা হয়েছে। কুরআন যা বর্ণনা করছে তা হলো এমন এক সমাজ, যেখানে ব্যক্তিগত অন্যায় প্রকাশ্য রীতিতে পরিণত হয়েছে এবং কেউ আর তার নাম ধরে বলতে পারে না।",
          },
        ],
      },
      {
        h: { en: "One Man in a City", bn: "নগরে একা এক মানুষ" },
        p: [
          {
            en: "His people answered with expulsion. If you do not desist, O Lut, you will surely be of those evicted (26:167). Elsewhere the answer is colder still: they said only, drive them out of your city; indeed they are people who keep themselves pure (7:82). Purity had become the accusation. When a community reaches that point, the person calling to good is the one who has to be removed for the community to feel normal.",
            bn: "তাঁর সম্প্রদায়ের জবাব ছিল বিতাড়ন। হে লূত, তুমি বিরত না হলে অবশ্যই বহিষ্কৃতদের একজন হবে (26:167)। অন্যত্র জবাবটি আরও শীতল: তারা কেবল বলল, এদের তোমাদের জনপদ থেকে বের করে দাও; এরা তো এমন লোক যারা পবিত্র থাকতে চায় (7:82)। পবিত্রতাই তখন অভিযোগে পরিণত হয়েছে। কোনো সমাজ সেই অবস্থায় পৌঁছালে, সমাজটির স্বাভাবিক বোধ করার জন্য কল্যাণের দিকে ডাকা মানুষটিকেই সরিয়ে দিতে হয়।",
          },
          {
            en: "He was alone in a way few prophets were. He had no clan behind him in that land, no group of believers, and his own household was divided. His prayer is one of the shortest in the Quran: my Lord, support me against the corrupting people (29:30). A single sentence, asking for strength rather than for their destruction, from a man who had been calling them for years.",
            bn: "তিনি এমনভাবে একা ছিলেন যেমনটা খুব কম নবীই ছিলেন। ওই ভূখণ্ডে তাঁর পেছনে কোনো গোত্র ছিল না, মুমিনদের কোনো দলও ছিল না, আর তাঁর নিজের পরিবারও বিভক্ত ছিল। কুরআনের সবচেয়ে সংক্ষিপ্ত দোয়াগুলোর একটি তাঁরই: হে আমার প্রভু, বিপর্যয় সৃষ্টিকারী এই সম্প্রদায়ের বিরুদ্ধে আমাকে সাহায্য করুন (29:30)। বছরের পর বছর ডেকে যাওয়া একজন মানুষের একটিমাত্র বাক্য, যেখানে তিনি তাদের ধ্বংস নয়, নিজের জন্য শক্তি চেয়েছেন।",
          },
        ],
      },
      {
        h: { en: "The Guests", bn: "অতিথিরা" },
        p: [
          {
            en: "The messengers went first to Ibrahim, who brought them a roasted calf and grew uneasy when they did not eat (11:69-70). They told him not to fear, gave his wife the news of Ishaq, and then said they were sent to the people of Lut. Ibrahim began to argue with them over that people, for he was forbearing and oft-returning to Allah (11:74-75).",
            bn: "ফেরেশতারা প্রথমে ইবরাহীমের কাছে যান; তিনি তাঁদের জন্য ভাজা বাছুর আনেন এবং তাঁরা না খেলে অস্বস্তি বোধ করেন (11:69-70)। তাঁরা তাঁকে ভয় পেতে নিষেধ করেন, তাঁর স্ত্রীকে ইসহাকের সুসংবাদ দেন, তারপর বলেন যে তাঁরা লূতের সম্প্রদায়ের কাছে প্রেরিত। ইবরাহীম সেই সম্প্রদায়ের ব্যাপারে তাঁদের সঙ্গে কথা বলতে শুরু করেন, কারণ তিনি ছিলেন সহনশীল ও আল্লাহর দিকে বারবার প্রত্যাবর্তনকারী (11:74-75)।",
          },
          {
            en: "When the messengers came to Lut he was distressed for them and felt himself powerless, and said, this is a trying day (11:77). His people came rushing toward the house, and he offered every argument he had, ending with: is there not among you a man of reason (11:78)? The guests then told him who they were, and that his people would never reach him (11:81).",
            bn: "ফেরেশতারা লূতের কাছে এলে তিনি তাঁদের জন্য উদ্বিগ্ন হন, নিজেকে অক্ষম বোধ করেন এবং বলেন, এ এক কঠিন দিন (11:77)। তাঁর সম্প্রদায় ছুটে আসে ঘরের দিকে; তিনি হাতে থাকা সব যুক্তি দেন এবং শেষে বলেন, তোমাদের মধ্যে কি একজনও বিবেকবান মানুষ নেই (11:78)? তখন অতিথিরা জানান তাঁরা কারা, আর জানান যে তাঁর সম্প্রদায় কখনোই তাঁর নাগাল পাবে না (11:81)।",
          },
        ],
      },
      {
        h: { en: "Travel by Night", bn: "রাতের সফর" },
        p: [
          {
            en: "So set out with your family during a portion of the night, and let not any among you look back — except your wife; indeed she will be struck by that which strikes them. Indeed, their appointment is the morning. Is not the morning near (11:81)? The instruction is precise: leave in the dark, keep moving, and do not turn round. The order to keep walking is the whole of the rescue.",
            bn: "সুতরাং রাতের কোনো এক অংশে পরিবার নিয়ে বেরিয়ে পড়ো, আর তোমাদের কেউ যেন পেছনে ফিরে না তাকায় — তোমার স্ত্রী ছাড়া; তার ওপরও তা-ই আসবে যা তাদের ওপর আসবে। নিশ্চয়ই তাদের নির্ধারিত সময় ভোরবেলা। ভোর কি নিকটে নয় (11:81)? নির্দেশটি নির্দিষ্ট: অন্ধকারে বেরোও, চলতে থাকো, আর পেছনে ফিরো না। হাঁটতে থাকার আদেশটিই ছিল উদ্ধারের পুরোটা।",
          },
          {
            en: "So when Our command came, We made the highest part of it its lowest and rained upon them stones of layered hard clay, marked from your Lord (11:82-83). The city that had turned everything upside down was itself turned over. The Quran adds that a clear sign was left of it for people who use reason (29:35), and that the ruins lie on a road still travelled (15:76).",
            bn: "অতঃপর যখন আমার আদেশ এল, আমি সেই জনপদের উপরকে নিচে করে দিলাম এবং তাদের ওপর স্তরে স্তরে সাজানো কঠিন মাটির পাথর বর্ষণ করলাম, যা তোমার প্রভুর কাছে চিহ্নিত (11:82-83)। যে নগর সব কিছু উল্টে দিয়েছিল, সেই নগরটিকেই উল্টে দেওয়া হলো। কুরআন যোগ করে, বুদ্ধিমান লোকদের জন্য এর মধ্যে সুস্পষ্ট নিদর্শন রেখে দেওয়া হয়েছে (29:35), আর ধ্বংসাবশেষ পড়ে আছে এমন এক পথের ধারে যেখানে এখনো মানুষ চলাচল করে (15:76)।",
          },
        ],
      },
      {
        h: { en: "His Wife, and the Lesson", bn: "তাঁর স্ত্রী ও শিক্ষা" },
        p: [
          {
            en: "So We saved him and his family, except his wife; she was of those who remained behind (7:83). Elsewhere Allah gives her as an example, together with the wife of Nuh: they were under two of Our righteous servants but betrayed them, and those two availed them nothing against Allah (66:10). The verse says only that they betrayed them; the commentators, following Ibn Abbas (RA), are unanimous that the betrayal was in religion and not in chastity.",
            bn: "অতঃপর আমি তাঁকে ও তাঁর পরিবারকে রক্ষা করলাম, তাঁর স্ত্রী ছাড়া; সে ছিল পিছনে পড়ে থাকাদের একজন (7:83)। অন্যত্র আল্লাহ নূহের স্ত্রীর সঙ্গে তাকেও দৃষ্টান্ত হিসেবে উপস্থাপন করেন: তারা দুজন ছিল আমার দুই সৎকর্মশীল বান্দার অধীনে, কিন্তু তারা তাঁদের সঙ্গে বিশ্বাসঘাতকতা করে; আর ওই দুজন আল্লাহর মোকাবিলায় তাদের কোনো কাজে আসেনি (66:10)। আয়াতটি কেবল এটুকুই বলে যে তারা বিশ্বাসঘাতকতা করেছিল; মুফাসসিরগণ ইবনে আব্বাসের (রাঃ) অনুসরণে সর্বসম্মতভাবে বলেন, এই বিশ্বাসঘাতকতা ছিল দ্বীনের ক্ষেত্রে, সতীত্বের ক্ষেত্রে নয়।",
          },
          {
            en: "But We brought out whoever was in them of the believers, and We found within them not but one house of Muslims (51:35-36). One household in a whole society is the measure of what Lut faced, and he stayed at his post for as long as he was told to. His account ends not with a victory but with a rescue, which is the Quran's promise to anyone standing where he stood.",
            bn: "আর সেখানে যত মুমিন ছিল আমি তাদের বের করে আনলাম, আর আমি সেখানে একটি মুসলিম পরিবার ছাড়া আর কিছুই পাইনি (51:35-36)। গোটা এক সমাজে একটিমাত্র ঘর — এটিই লূত যার মুখোমুখি ছিলেন তার পরিমাপ; আর তাঁকে যতদিন বলা হয়েছে ততদিন তিনি নিজের জায়গায় দাঁড়িয়ে থেকেছেন। তাঁর বিবরণ শেষ হয় কোনো বিজয় দিয়ে নয়, উদ্ধার দিয়ে — যিনি তাঁর জায়গায় দাঁড়ান, কুরআন তাঁকে এই প্রতিশ্রুতিই দেয়।",
          },
        ],
      },
    ],
  },
  ismail: {
    sections: [
      {
        h: { en: "Left in an Empty Valley", bn: "জনশূন্য উপত্যকায়" },
        p: [
          {
            en: "Isma'il (AS) enters the story as an infant carried into a place where nothing grew. Our Lord, I have settled some of my descendants in a valley without cultivation, near Your sacred House (14:37). Bukhari preserves what happened there: Ibrahim left them with a small skin of water and some dates and walked away without turning round, and Hajar ran after him asking whether Allah had commanded this.",
            bn: "ইসমাঈল (আঃ)-এর কাহিনির শুরু এক শিশুকে দিয়ে, যাঁকে এমন এক জায়গায় আনা হয়েছিল যেখানে কিছুই জন্মায় না। হে আমাদের প্রভু, আমি আমার বংশধরদের কিছু অংশকে আপনার সম্মানিত ঘরের কাছে এক অনুর্বর উপত্যকায় বসিয়েছি (14:37)। বুখারি সেখানকার ঘটনা সংরক্ষণ করেছে: ইবরাহীম সামান্য পানির মশক ও কিছু খেজুর রেখে পেছনে না তাকিয়ে হাঁটতে থাকেন, আর হাজেরা তাঁর পিছু নিয়ে জিজ্ঞেস করেন, আল্লাহ কি এই আদেশ দিয়েছেন।",
          },
          {
            en: "When he said yes, she answered that Allah would not neglect them, and went back. That sentence is the beginning of Mecca. The water ran out, the child grew desperate with thirst, and his mother climbed the nearest hill to look for anyone at all, then the hill opposite, and did that seven times. She was not performing a rite. She was a mother refusing to sit still.",
            bn: "তিনি হ্যাঁ বললে হাজেরা বলেন, তবে আল্লাহ আমাদের অবহেলা করবেন না, এবং ফিরে যান। এই একটি বাক্য থেকেই মক্কার শুরু। পানি ফুরিয়ে যায়, শিশুটি তৃষ্ণায় কাতর হয়ে পড়ে, আর তাঁর মা কাছের টিলায় উঠে কাউকে খুঁজতে থাকেন, তারপর উল্টো দিকের টিলায় — এভাবে সাতবার। তিনি কোনো ধর্মীয় আচার পালন করছিলেন না। তিনি ছিলেন এমন এক মা, যিনি বসে থাকতে রাজি নন।",
          },
        ],
      },
      {
        h: { en: "Zamzam, and Safa and Marwah", bn: "যমযম, সাফা ও মারওয়া" },
        p: [
          {
            en: "Water came where the child was, and it did not stop coming. The well of Zamzam turned an uninhabitable valley into a place people could live, and a passing tribe of Jurhum asked permission to settle beside it. Trade routes followed the water, and a town grew around a boy and his mother who had been left there with nothing.",
            bn: "যেখানে শিশুটি ছিল সেখানেই পানি এল, আর সেই পানি আর থামল না। যমযম কূপ বসবাসের অযোগ্য এক উপত্যকাকে বসতিযোগ্য করে তুলল; পথ চলতি জুরহুম গোত্র সেখানে বসতির অনুমতি চাইল। পানির পিছু পিছু এল বাণিজ্যপথ, আর এক মা ও এক শিশুকে ঘিরে গড়ে উঠল একটি জনপদ — যাঁদের সেখানে কিছুই ছাড়া রেখে যাওয়া হয়েছিল।",
          },
          {
            en: "Her running between the two hills became part of the Hajj itself. Indeed, Safa and Marwah are among the symbols of Allah (2:158). Millions repeat that walk every year, and what they are repeating is not a triumph or a battle. It is the search of one woman for water for her child, honoured by Allah until the end of time, which tells us what He values in a servant.",
            bn: "দুই টিলার মাঝে তাঁর সেই ছোটাছুটি হজেরই অংশ হয়ে গেল। নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত (2:158)। প্রতি বছর লক্ষ লক্ষ মানুষ সেই হাঁটাটুকুই পুনরাবৃত্তি করেন, আর যা তাঁরা পুনরাবৃত্তি করেন তা কোনো বিজয় বা যুদ্ধ নয়। তা হলো সন্তানের জন্য পানির খোঁজে এক নারীর ছুটে চলা, যাকে আল্লাহ কিয়ামত পর্যন্ত সম্মানিত করেছেন — এতেই বোঝা যায় বান্দার কোন জিনিসটি তাঁর কাছে মূল্যবান।",
          },
        ],
      },
      {
        h: { en: "The Dream, and His Answer", bn: "স্বপ্ন ও তাঁর জবাব" },
        p: [
          {
            en: "So We gave him good tidings of a forbearing boy. And when he reached with him the age of exertion, he said, my son, indeed I have seen in a dream that I must sacrifice you, so see what you think (37:101-102). The son was old enough to work beside his father and old enough to be consulted, and the Quran deliberately records that he was consulted.",
            bn: "অতঃপর আমি তাঁকে এক সহনশীল পুত্রের সুসংবাদ দিলাম। আর সে যখন তাঁর সঙ্গে কাজ করার বয়সে পৌঁছাল, তিনি বললেন, হে আমার পুত্র, আমি স্বপ্নে দেখেছি যে আমি তোমাকে কুরবানি করছি; এখন ভেবে দেখো তোমার অভিমত কী (37:101-102)। ছেলেটি পিতার পাশে কাজ করার মতো বড় হয়েছিল, আর পরামর্শ করার মতোও; কুরআন ইচ্ছা করেই লিপিবদ্ধ করেছে যে তাঁর সঙ্গে পরামর্শ করা হয়েছিল।",
          },
          {
            en: "His reply is the sentence that makes this his story and not only his father's. My father, do as you are commanded; you will find me, if Allah wills, of the patient (37:102). He does not say he will endure it. He says his father will find him patient if Allah wills, refusing to claim even his own steadiness as something he owned. The trial was passed twice, by two people, in one conversation.",
            bn: "তাঁর জবাবটিই এই ঘটনাকে কেবল পিতার নয়, তাঁরও কাহিনি করে তোলে। হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা-ই করুন; আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীলদের একজন পাবেন (37:102)। তিনি বলেননি যে তিনি সহ্য করবেন। তিনি বলেছেন, আল্লাহ চাইলে পিতা তাঁকে ধৈর্যশীল পাবেন — নিজের অবিচলতাকেও নিজের অর্জন বলে দাবি করতে অস্বীকার করে। এক কথোপকথনেই পরীক্ষাটি দুবার, দুজন মানুষ পার হয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "Ransomed With a Sacrifice", bn: "কুরবানির বিনিময়ে মুক্তি" },
        p: [
          {
            en: "And when they had both submitted and he put him down upon his forehead, We called to him, O Ibrahim, you have fulfilled the vision. Indeed, We thus reward the doers of good. Indeed, this was the clear trial. And We ransomed him with a great sacrifice (37:103-107). The word for both of them submitting carries the same root as Islam, and it is used of a father and a boy together.",
            bn: "যখন তাঁরা দুজনেই আত্মসমর্পণ করলেন এবং তিনি ছেলেকে কাত করে শোয়ালেন, আমি তাঁকে ডেকে বললাম, হে ইবরাহীম, তুমি স্বপ্ন সত্যে পরিণত করেছ। নিশ্চয়ই আমি সৎকর্মশীলদের এভাবেই প্রতিদান দিই। নিশ্চয়ই এটি ছিল সুস্পষ্ট পরীক্ষা। আর আমি এক মহান কুরবানির বিনিময়ে তাকে মুক্ত করলাম (37:103-107)। দুজনের আত্মসমর্পণ বোঝাতে ব্যবহৃত শব্দটির মূল ইসলাম শব্দেরই — আর তা এখানে পিতা ও পুত্র উভয়ের জন্য ব্যবহৃত।",
          },
          {
            en: "And We left for him among later generations: peace upon Ibrahim (37:108-109). Every year the pilgrims and those at home sacrifice an animal in memory of a command that was never carried out, because the point of it was never the animal or the boy. The ransom is the Quran's own commentary on the trial: Allah asked for the heart, and when He had it He gave the son back.",
            bn: "আর আমি পরবর্তী প্রজন্মের মধ্যে তাঁর স্মৃতি রেখে দিলাম: ইবরাহীমের ওপর শান্তি (37:108-109)। প্রতি বছর হাজিরা ও ঘরে থাকা মানুষেরা এমন এক আদেশের স্মরণে পশু কুরবানি করেন যা কখনো কার্যকর হয়নি, কারণ এর উদ্দেশ্য কখনোই পশু বা ছেলেটি ছিল না। মুক্তিপণটিই পরীক্ষার ওপর কুরআনের নিজস্ব ব্যাখ্যা: আল্লাহ চেয়েছিলেন অন্তর, আর তা পেয়ে যাওয়ার পর তিনি পুত্রকে ফিরিয়ে দিলেন।",
          },
        ],
      },
      {
        h: { en: "Raising the House", bn: "ঘরের ভিত তোলা" },
        p: [
          {
            en: "And We charged Ibrahim and Isma'il to purify My House for those who circle it, and those who stay for worship, and those who bow and prostrate (2:125). The duty was given to both of them by name. Then the building itself: and when Ibrahim was raising the foundations of the House, with Isma'il, saying, our Lord, accept this from us; indeed You are the Hearing, the Knowing (2:127).",
            bn: "আর আমি ইবরাহীম ও ইসমাঈলকে দায়িত্ব দিলাম আমার ঘরকে পবিত্র রাখতে — তাওয়াফকারী, ইতিকাফকারী এবং রুকু ও সিজদাকারীদের জন্য (2:125)। দায়িত্বটি দুজনকেই নাম ধরে দেওয়া হয়েছিল। এরপর নির্মাণ: আর যখন ইবরাহীম ইসমাঈলকে সঙ্গে নিয়ে ঘরের ভিত তুলছিলেন, তাঁরা বলছিলেন, হে আমাদের প্রভু, আমাদের পক্ষ থেকে কবুল করুন; নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ (2:127)।",
          },
          {
            en: "Father and son then prayed for themselves before they prayed for anyone else: our Lord, make us Muslims in submission to You, and from our descendants a Muslim nation, and show us our rites, and accept our repentance (2:128). Men laying the foundations of the holiest place on earth asked to be forgiven while doing it. Nothing in the account allows the builder to feel he has earned anything.",
            bn: "পিতা ও পুত্র অন্য কারও জন্য দোয়া করার আগে নিজেদের জন্য দোয়া করলেন: হে আমাদের প্রভু, আমাদের আপনার অনুগত করুন, আর আমাদের বংশধরদের মধ্য থেকেও একটি অনুগত জাতি বানান; আমাদের হজের নিয়ম দেখিয়ে দিন এবং আমাদের তওবা কবুল করুন (2:128)। যাঁরা পৃথিবীর সবচেয়ে পবিত্র স্থানের ভিত গড়ছিলেন, তাঁরা কাজ করতে করতেই ক্ষমা চাইছিলেন। এই বিবরণে নির্মাতার নিজেকে কিছু অর্জনকারী ভাবার কোনো সুযোগ নেই।",
          },
        ],
      },
      {
        h: { en: "True to His Promise", bn: "প্রতিশ্রুতিতে সত্যবাদী" },
        p: [
          {
            en: "And mention in the Book Isma'il. Indeed, he was true to his promise, and he was a messenger and a prophet (19:54). Of all the things that could have been chosen to summarise him — the sacrifice, the well, the House — Allah chose keeping his word. It is the quietest of virtues and the hardest to sustain, and it is the one attached to his name forever.",
            bn: "আর কিতাবে ইসমাঈলের কথা স্মরণ করো। নিশ্চয়ই তিনি ছিলেন প্রতিশ্রুতিতে সত্যবাদী, আর তিনি ছিলেন রাসূল ও নবী (19:54)। তাঁকে সংক্ষেপে বোঝাতে যা যা বেছে নেওয়া যেত — কুরবানি, কূপ, কাবা — সেসব ছেড়ে আল্লাহ বেছে নিলেন তাঁর কথা রাখাকে। এটি সবচেয়ে নীরব গুণ এবং ধরে রাখা সবচেয়ে কঠিন; আর এটিই চিরকালের জন্য তাঁর নামের সঙ্গে জুড়ে আছে।",
          },
          {
            en: "And he used to enjoin on his family prayer and zakat, and he was to his Lord pleasing (19:55). He is counted among the patient (21:85) and among the outstanding in goodness (38:48). His father's prayer for a messenger from among their descendants was answered centuries later in Muhammad ﷺ, who came from his line — so the boy left in a dry valley became the ancestor of the last of the prophets.",
            bn: "আর তিনি তাঁর পরিবারকে সালাত ও যাকাতের নির্দেশ দিতেন, এবং তিনি ছিলেন তাঁর প্রভুর কাছে সন্তোষভাজন (19:55)। তাঁকে গণ্য করা হয়েছে ধৈর্যশীলদের মধ্যে (21:85) এবং কল্যাণে অগ্রগামীদের মধ্যে (38:48)। তাঁদের বংশধরদের মধ্য থেকে রাসূল পাঠানোর জন্য পিতার দোয়া শতাব্দী পরে কবুল হয় মুহাম্মাদ ﷺ-এর মাধ্যমে, যিনি তাঁরই বংশধর — শুকনো উপত্যকায় রেখে আসা সেই শিশুটিই হলেন শেষ নবীর পূর্বপুরুষ।",
          },
        ],
      },
    ],
  },
  ishaq: {
    sections: [
      {
        h: { en: "Guests Who Would Not Eat", bn: "যে অতিথিরা খেলেন না" },
        p: [
          {
            en: "The account of Ishaq (AS) begins before he exists, in someone else's tent. And Our messengers came to Ibrahim with good tidings. They said, peace. He said, peace, and did not delay in bringing a roasted calf (11:69). Hospitality first, questions afterwards — the Quran records the meal being prepared before anyone has explained who the visitors are.",
            bn: "ইসহাক (আঃ)-এর বিবরণ শুরু হয় তাঁর অস্তিত্বেরও আগে, অন্য একজনের তাঁবুতে। আর আমার প্রেরিত ফেরেশতারা ইবরাহীমের কাছে সুসংবাদ নিয়ে এলেন। তাঁরা বললেন, সালাম। তিনি বললেন, সালাম; এবং দেরি না করে একটি ভাজা বাছুর নিয়ে এলেন (11:69)। আগে আপ্যায়ন, প্রশ্ন পরে — কুরআন লিপিবদ্ধ করেছে যে অতিথিরা কারা তা জানার আগেই খাবার প্রস্তুত করা হচ্ছে।",
          },
          {
            en: "But when he saw their hands not reaching for it, he distrusted them and felt from them apprehension. They said, fear not; we have been sent to the people of Lut (11:70). In the other telling he says quietly, will you not eat, and conceives a fear of them, and they answer, do not be afraid, and give him good tidings of a learned boy (51:27-28).",
            bn: "কিন্তু তিনি যখন দেখলেন তাঁদের হাত খাবারের দিকে যাচ্ছে না, তখন তিনি সন্দিহান হলেন এবং মনে ভয় অনুভব করলেন। তাঁরা বললেন, ভয় পাবেন না; আমরা লূতের সম্প্রদায়ের কাছে প্রেরিত হয়েছি (11:70)। অন্য বর্ণনায় তিনি ধীরে জিজ্ঞেস করেন, আপনারা খাচ্ছেন না কেন — এবং তাঁদের সম্পর্কে ভয় অনুভব করেন; তাঁরা বলেন, ভয় পাবেন না, আর তাঁকে এক জ্ঞানী পুত্রের সুসংবাদ দেন (51:27-28)।",
          },
        ],
      },
      {
        h: { en: "The News of a Son", bn: "পুত্রের সুসংবাদ" },
        p: [
          {
            en: "And his wife was standing, and she laughed. Then We gave her good tidings of Ishaq and, after Ishaq, Ya'qub (11:71). The promise ran two generations deep in a single sentence: not only a son to an aged couple, but a grandson through him, and prophethood in both. The reaction of his wife — Sarah, as the commentators identify her — is preserved exactly as it was, without being tidied.",
            bn: "আর তাঁর স্ত্রী দাঁড়িয়ে ছিলেন, তিনি হেসে ফেললেন। তখন আমি তাঁকে ইসহাকের সুসংবাদ দিলাম, আর ইসহাকের পর ইয়াকুবের (11:71)। একটিমাত্র বাক্যে প্রতিশ্রুতি পৌঁছে গেল দুই প্রজন্ম গভীরে: বৃদ্ধ দম্পতির ঘরে কেবল একটি পুত্র নয়, তাঁর মাধ্যমে একজন পৌত্রও, আর দুজনেরই নবুয়ত। তাঁর স্ত্রীর প্রতিক্রিয়া — মুফাসসিরগণ যাঁকে সারা বলে শনাক্ত করেন — হুবহু সেভাবেই রাখা হয়েছে, কোনো পরিপাটি করা ছাড়াই।",
          },
          {
            en: "She said, woe to me! Shall I give birth while I am an old woman, and this, my husband, is an old man? Indeed, this is an amazing thing (11:72). In the other account she came forward with a cry, struck her face, and said, I am a barren old woman (51:29). Nothing is edited out. The Quran lets the astonishment stand because the answer is addressed to it.",
            bn: "তিনি বললেন, হায় আমার কী দশা! আমি সন্তান জন্ম দেব, অথচ আমি বৃদ্ধা আর আমার এই স্বামীও বৃদ্ধ? এ তো সত্যিই এক আশ্চর্য ব্যাপার (11:72)। অন্য বর্ণনায় তিনি চিৎকার করে সামনে এগিয়ে আসেন, নিজের মুখে আঘাত করেন এবং বলেন, আমি তো এক বন্ধ্যা বৃদ্ধা (51:29)। কিছুই বাদ দেওয়া হয়নি। কুরআন বিস্ময়টুকু থাকতে দেয়, কারণ উত্তরটি সেই বিস্ময়কে লক্ষ্য করেই দেওয়া হয়।",
          },
        ],
      },
      {
        h: { en: "The Decree of Allah", bn: "আল্লাহর ফয়সালা" },
        p: [
          {
            en: "They said, are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honourable (11:73). The reply does not argue with biology. It moves the question to where it belongs: what is being reported is a decree, and a decree is not limited by the condition of the people it concerns.",
            bn: "তাঁরা বললেন, আপনি কি আল্লাহর ফয়সালায় বিস্মিত হচ্ছেন? হে ঘরের অধিবাসীগণ, আপনাদের ওপর আল্লাহর রহমত ও বরকত। নিশ্চয়ই তিনি প্রশংসিত, সম্মানিত (11:73)। জবাবটি জীববিদ্যা নিয়ে তর্কে যায় না। এটি প্রশ্নটিকে তার আসল জায়গায় সরিয়ে আনে: যা জানানো হচ্ছে তা একটি ফয়সালা, আর ফয়সালা যাদের নিয়ে, তাদের অবস্থার সীমায় তা বাঁধা নয়।",
          },
          {
            en: "The same exchange in Surah adh-Dhariyat ends with the messengers saying, thus has your Lord said; indeed He is the Wise, the Knowing (51:30). Wisdom and knowledge, not power alone. A child given late, after decades of waiting and one migration after another, arrives at the moment chosen by the One who knows what that timing will build.",
            bn: "সূরা আয-যারিয়াতে একই কথোপকথন শেষ হয় ফেরেশতাদের এই কথায়, আপনার প্রভু এমনই বলেছেন; নিশ্চয়ই তিনি প্রজ্ঞাময়, সর্বজ্ঞ (51:30)। কেবল ক্ষমতা নয় — প্রজ্ঞা ও জ্ঞান। দশকের পর দশক অপেক্ষা ও একের পর এক হিজরতের পর দেরিতে আসা সন্তানটি ঠিক সেই মুহূর্তেই আসে, যে মুহূর্ত বেছেছেন তিনিই, যিনি জানেন এই সময়টি কী গড়ে তুলবে।",
          },
        ],
      },
      {
        h: { en: "A Gift Beyond Asking", bn: "চাওয়ার চেয়ে বেশি দান" },
        p: [
          {
            en: "And We gave him Ishaq and Ya'qub in addition, and all of them We made righteous (21:72). The word translated as in addition marks a grandson nobody had asked for. Ibrahim's own thanks are recorded: praise to Allah, who has granted me in old age Isma'il and Ishaq. Indeed, my Lord is the Hearer of supplication (14:39).",
            bn: "আর আমি তাঁকে ইসহাক দিলাম, উপরন্তু ইয়াকুবকেও; এবং প্রত্যেককেই সৎকর্মশীল করলাম (21:72)। 'উপরন্তু' অনুবাদ করা শব্দটি এমন এক পৌত্রের দিকে ইঙ্গিত করে, যাঁকে কেউ চায়ইনি। ইবরাহীমের নিজের কৃতজ্ঞতাও লিপিবদ্ধ: সমস্ত প্রশংসা আল্লাহর, যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাক দান করেছেন। নিশ্চয়ই আমার প্রভু দোয়া শ্রবণকারী (14:39)।",
          },
          {
            en: "And We gave to him Ishaq and Ya'qub and placed in his descendants prophethood and scripture (29:27). That single verse explains why so little narrative is told about Ishaq himself. His significance in the Quran is not a set of events but a line: through him came Ya'qub, and through Ya'qub the tribes, and through them Yusuf, Musa, Dawud, Sulayman, Zakariya, Yahya and Isa.",
            bn: "আর আমি তাঁকে ইসহাক ও ইয়াকুব দান করলাম এবং তাঁর বংশধরদের মধ্যে নবুয়ত ও কিতাব রাখলাম (29:27)। এই একটি আয়াতই ব্যাখ্যা করে দেয় কেন ইসহাক সম্পর্কে ঘটনার বিবরণ এত কম। কুরআনে তাঁর গুরুত্ব কোনো ঘটনাবলি নয়, একটি ধারা: তাঁর মাধ্যমে এলেন ইয়াকুব, ইয়াকুবের মাধ্যমে গোত্রগুলো, আর তাঁদের মধ্য দিয়ে ইউসুফ, মূসা, দাউদ, সুলাইমান, যাকারিয়া, ইয়াহইয়া ও ঈসা।",
          },
        ],
      },
      {
        h: { en: "Blessed, and Honestly Told", bn: "বরকতপ্রাপ্ত, তবু সত্য বলা" },
        p: [
          {
            en: "And We gave him good tidings of Ishaq, a prophet from among the righteous. And We blessed him and Ishaq (37:112-113). The good news comes immediately after the ransom of the other son, so the two lines of Ibrahim stand side by side on the same page. Then comes a sentence that a family history written by human beings would have left out: but among their descendants is the doer of good and the clearly unjust to himself (37:113).",
            bn: "আর আমি তাঁকে ইসহাকের সুসংবাদ দিলাম — একজন নবী, সৎকর্মশীলদের অন্তর্ভুক্ত। আর আমি তাঁকে ও ইসহাককে বরকত দিলাম (37:112-113)। সুসংবাদটি আসে অন্য পুত্রের মুক্তিপণের ঠিক পরেই, ফলে ইবরাহীমের দুটি ধারা একই পৃষ্ঠায় পাশাপাশি দাঁড়িয়ে যায়। এরপর আসে এমন একটি বাক্য, যা মানুষের লেখা কোনো বংশ-ইতিহাস বাদ দিয়ে দিত: কিন্তু তাঁদের বংশধরদের মধ্যে রয়েছে সৎকর্মশীল, আবার নিজের ওপর স্পষ্ট জুলুমকারীও (37:113)।",
          },
          {
            en: "The blessing on a father does not transfer automatically to his children. Descent from prophets is stated in the same breath as the fact that some of that descent went wrong, which is the Quran's standing correction to every community that has ever rested on its ancestry. Ishaq's honour is his own, and it does not become anyone else's by inheritance.",
            bn: "পিতার ওপর বরকত সন্তানদের ওপর আপনাআপনি বর্তায় না। নবীদের বংশধর হওয়ার কথা বলা হয়েছে ঠিক সেই নিঃশ্বাসেই, যেখানে বলা হয়েছে সেই বংশেরই কেউ কেউ বিপথে গেছে — বংশপরিচয়ের ওপর ভর করে বসে থাকা প্রতিটি সম্প্রদায়ের জন্য এটিই কুরআনের স্থায়ী সংশোধনী। ইসহাকের সম্মান তাঁর নিজের, আর উত্তরাধিকারসূত্রে তা অন্য কারও হয়ে যায় না।",
          },
        ],
      },
      {
        h: { en: "A Link in the Chain", bn: "শৃঙ্খলের একটি কড়ি" },
        p: [
          {
            en: "And mention Our servants Ibrahim, Ishaq and Ya'qub, those of strength and vision. Indeed, We chose them for an exclusive quality: remembrance of the home of the hereafter (38:45-46). Strength and vision are named together, and the quality that set them apart was not ability but where their attention lived. And indeed, to Us they are among the chosen and outstanding (38:47). Three generations are praised in a single breath, and Ishaq stands in the middle of them without needing an episode of his own.",
            bn: "আর আমার বান্দা ইবরাহীম, ইসহাক ও ইয়াকুবের কথা স্মরণ করো — যাঁরা ছিলেন শক্তি ও অন্তর্দৃষ্টির অধিকারী। নিশ্চয়ই আমি তাঁদের এক বিশেষ গুণের জন্য মনোনীত করেছিলাম: পরকালের ঘরের স্মরণ (38:45-46)। শক্তি ও অন্তর্দৃষ্টি একসঙ্গে উল্লিখিত, আর যে গুণটি তাঁদের আলাদা করেছিল তা সামর্থ্য নয় — তাঁদের মনোযোগ কোথায় থাকত সেটিই। আর নিশ্চয়ই তাঁরা আমার কাছে মনোনীত ও উত্তমদের অন্তর্ভুক্ত (38:47)। এক নিঃশ্বাসেই তিন প্রজন্মের প্রশংসা করা হয়েছে, আর ইসহাক তাঁদের মাঝখানে দাঁড়িয়ে আছেন — নিজের কোনো আলাদা ঘটনার প্রয়োজন ছাড়াই।",
          },
          {
            en: "He appears wherever the Quran states what a Muslim believes: say, we believe in what was revealed to us and what was revealed to Ibrahim, Isma'il, Ishaq, Ya'qub and the tribes (2:136). Ya'qub asked his sons at death what they would worship after him, and they answered, your God and the God of your fathers, Ibrahim, Isma'il and Ishaq — one God (2:133). That is his place: named in the creed, generation after generation.",
            bn: "কুরআন যেখানেই একজন মুসলিমের বিশ্বাস বর্ণনা করে, সেখানেই তাঁর নাম আসে: বলো, আমরা ঈমান এনেছি আমাদের প্রতি যা নাযিল হয়েছে তার ওপর, আর ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁর বংশধরদের প্রতি যা নাযিল হয়েছে তার ওপর (2:136)। ইয়াকুব মৃত্যুকালে ছেলেদের জিজ্ঞেস করেন, আমার পরে তোমরা কার ইবাদত করবে; তারা বলে, আপনার ইলাহ ও আপনার পিতৃপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহ — এক ইলাহ (2:133)। এটিই তাঁর স্থান: প্রজন্মের পর প্রজন্ম ধরে আকিদার মধ্যে নাম ধরে উচ্চারিত।",
          },
        ],
      },
    ],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { PROPHET_ARTICLES };
