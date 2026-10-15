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
        h: { en: "The Heir Who Was Taught", bn: "শিক্ষা পাওয়া উত্তরাধিকারী" },
        p: [
          { en: "The Quran opens this story not with a throne but with a sentence about learning. Allah gave knowledge to Dawud and Sulayman, and both said, “Praise be to Allah, who has favoured us over many of His believing servants” (27:15). Only then comes the line that frames the rest: Sulayman inherited from Dawud (27:16). The inheritance meant here is not silver. It is judgement, scripture, and the charge of guiding a nation.",
            bn: "কুরআন এই কাহিনি শুরু করে সিংহাসন দিয়ে নয়, জ্ঞানের কথা দিয়ে। আল্লাহ দাউদ ও সুলাইমানকে জ্ঞান দিলেন, আর দুজনেই বললেন, “সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের তাঁর বহু মুমিন বান্দার ওপর মর্যাদা দিয়েছেন” (27:15)। এর পরেই আসে সেই কথা, যার আলোয় বাকি কাহিনি পড়তে হয়: সুলাইমান দাউদের উত্তরাধিকারী হলেন (27:16)। এই উত্তরাধিকার রুপা-সোনার নয়। এ হলো বিচারবুদ্ধি, কিতাব আর একটি জাতিকে পথ দেখানোর দায়িত্ব।" },
          { en: "That inheritance was tested before the wonders began. A dispute came about a flock that had strayed by night into a field, and Allah gave Sulayman the understanding of the case — yet the Quran is careful to add that to each of the two He had given judgement and knowledge (21:78-79). The placement is deliberate. The first gift is not the wind but understanding, and a better verdict from the younger man takes nothing away from the elder who ruled first.",
            bn: "অলৌকিক ঘটনাগুলোর আগেই সেই উত্তরাধিকারের পরীক্ষা হলো। রাতের বেলা এক পাল ভেড়া একটি খেতে ঢুকে পড়েছিল, তা নিয়ে বিবাদ এল। আল্লাহ মামলাটির সঠিক বুঝ দিলেন সুলাইমানকে। তবু কুরআন সাবধানে যোগ করে দেয়, দুজনকেই তিনি বিচারবুদ্ধি ও জ্ঞান দিয়েছিলেন (21:78-79)। কথাগুলো এভাবে সাজানো হয়েছে ভেবেচিন্তেই। প্রথম দান বাতাস নয়, বুঝ। আর ছোটজনের রায় ভালো হলেও যিনি আগে রায় দিয়েছিলেন, সেই বড়জনের মর্যাদা এতে এতটুকু কমে না।" },
        ],
      },
      {
        h: { en: "A Kingdom Asked For, Not Seized", bn: "চেয়ে নেওয়া রাজত্ব, ছিনিয়ে নেওয়া নয়" },
        p: [
          { en: "His famous prayer follows a moment of self-reproach, not appetite. Surah Sad records that he was absorbed by fine horses until the sun had set (38:31-33), and that a test was placed upon his very throne before he turned back to his Lord (38:34). Only after that does he say, “My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me” (38:35). The order of the verses is the commentary on the request.",
            bn: "তাঁর বিখ্যাত দোয়াটি এসেছে নিজেকে তিরস্কারের পর, লোভ থেকে নয়। সূরা সাদ জানায়, উৎকৃষ্ট ঘোড়ার দিকে তিনি এমন মগ্ন হয়ে পড়েছিলেন যে সূর্য ডুবে গেল (38:31-33)। তারপর তাঁর সিংহাসনের ওপরই এল এক পরীক্ষা, আর তিনি প্রভুর দিকে ফিরে এলেন (38:34)। এর পরেই তিনি বলেন, “হে আমার প্রভু, আমাকে ক্ষমা করুন এবং আমাকে এমন রাজত্ব দিন, যা আমার পরে আর কারও হবে না” (38:35)। আয়াতগুলোর ক্রমই বলে দেয়, এই চাওয়াকে কীভাবে বুঝতে হবে।" },
          { en: "Read that way, the prayer stops sounding like ambition. A kingdom that can belong to no one afterwards cannot be inherited, imitated, or claimed as a human achievement; it can only be a sign. Allah granted it, and the passage at once calls the whole arrangement a gift, with leave to give freely or withhold without reckoning (38:39). Authority without audit is itself a trial, and the same passage praises him as an excellent servant who constantly turned to his Lord (38:30).",
            bn: "এভাবে পড়লে দোয়াটিকে আর উচ্চাকাঙ্ক্ষা মনে হয় না। যে রাজত্ব পরে আর কারও হবে না, তা উত্তরাধিকারে পাওয়া যায় না, নকল করা যায় না, মানুষের কৃতিত্ব বলেও দাবি করা যায় না। তা কেবল নিদর্শনই হতে পারে। আল্লাহ তা দিলেন, আর আয়াত সঙ্গে সঙ্গে পুরো ব্যাপারটিকে বলে তাঁর দান: চাইলে অকাতরে দাও, চাইলে রেখে দাও, এর কোনো হিসাব নেই (38:39)। যে ক্ষমতার কোনো হিসাব দিতে হয় না, সেটাই তো এক পরীক্ষা। আর এই অনুচ্ছেদই তাঁর প্রশংসা করে বলে: তিনি উত্তম বান্দা, বারবার প্রভুর দিকে ফিরে আসতেন (38:30)।" },
        ],
      },
      {
        h: { en: "Wind, Jinn, and Molten Copper", bn: "বাতাস, জিন ও গলিত তামা" },
        p: [
          { en: "The wind was made subject to him, running by his command to the land Allah had blessed (21:81), and Surah Saba measures it plainly: a month's journey in the morning and a month's in the evening (34:12). In the same verse a spring of molten copper flows for him. That detail is not decoration; it is an economy. Transport, metal, and labour were placed in the hands of a man answerable for their use.",
            bn: "বাতাসকে তাঁর অধীন করে দেওয়া হয়েছিল; তাঁর আদেশে তা বয়ে যেত আল্লাহর বরকত দেওয়া ভূমির দিকে (21:81)। সূরা সাবা এর মাপও সোজাসুজি বলে দেয়: সকালের যাত্রা এক মাসের পথ, সন্ধ্যার যাত্রাও এক মাসের (34:12)। একই আয়াতে তাঁর জন্য বইয়ে দেওয়া হয় গলিত তামার ঝরনা। এ বিবরণ নিছক সাজসজ্জা নয়; এ হলো গোটা এক অর্থনীতি। পরিবহন, ধাতু, শ্রম, সবই তুলে দেওয়া হলো এমন একজনের হাতে, যাঁকে এর প্রতিটির ব্যবহারের জবাব দিতে হবে।" },
          { en: "The jinn worked before him by his Lord's leave, building sanctuaries and images, great basins and firm cauldrons, while divers and builders among them were kept under restraint (34:12-13, 21:82). And the passage that lists all this ends not with a boast but with an order and a lament: work, family of Dawud, in gratitude — and few of My servants are grateful (34:13). Every favour in this story arrives with the duty of thanks fastened to it.",
            bn: "জিনেরা তাঁর রবের অনুমতিতে তাঁর সামনে কাজ করত। তারা বানাত উপাসনালয় আর ভাস্কর্য, হাউজের মতো বড় বড় গামলা আর এক জায়গায় বসানো ভারী ডেগ। তাদের মধ্যে যারা ডুবুরি ও নির্মাতা, তাদের বশে রাখা হতো (34:12-13, 21:82)। যে অনুচ্ছেদে এই সবকিছুর তালিকা, তার শেষটা কোনো গর্বের কথায় নয়। শেষ হয় একটি আদেশ আর একটি আক্ষেপে: হে দাউদের পরিবার, শুকরিয়া আদায় করতে কাজ করো; আর আমার বান্দাদের মধ্যে কৃতজ্ঞ অল্পই (34:13)। এই কাহিনিতে প্রতিটি নিয়ামতের সঙ্গে শুকরিয়ার দায় বাঁধা।" },
        ],
      },
      {
        h: { en: "The Birds and the Ant", bn: "পাখি ও পিঁপড়া" },
        p: [
          { en: "Sulayman announced his gift publicly: “We have been taught the speech of birds, and we have been given of all things” (27:16). His forces of jinn, men and birds were marshalled in ordered ranks (27:17), and he inspected them himself. When the hoopoe was missing he noticed at once and demanded a clear reason for the absence (27:20-21). Command, in the Quranic portrait, is attention to the smallest member of the ranks.",
            bn: "সুলাইমান নিজের পাওয়া দানের কথা প্রকাশ্যে বললেন: “আমাদের পাখির ভাষা শেখানো হয়েছে এবং সব কিছু থেকেই আমাদের দেওয়া হয়েছে” (27:16)। জিন, মানুষ ও পাখি মিলিয়ে তাঁর বাহিনী সারি বেঁধে জড়ো করা হতো (27:17), আর তিনি নিজে তাদের দেখতেন। হুদহুদকে না দেখে তিনি সঙ্গে সঙ্গে খেয়াল করলেন, আর অনুপস্থিতির স্পষ্ট কারণ চাইলেন (27:20-21)। কুরআনের ছবিতে নেতৃত্ব মানে সারির সবচেয়ে ছোট সদস্যটির দিকেও নজর রাখা।" },
          { en: "Then comes the scene the Quran preserved above every conquest. An ant called out to her colony to enter their dwellings lest Sulayman and his troops crush them without perceiving it (27:18). He smiled at her words and prayed: “My Lord, enable me to be grateful for Your favour, and to do righteousness that pleases You, and admit me by Your mercy among Your righteous servants” (27:19). The most powerful man alive overheard an insect and asked to be counted among the ordinary righteous.",
            bn: "এরপর আসে সেই দৃশ্য, কুরআন কোনো রাজ্যজয়ের কাহিনি নয়, রেখে দিয়েছে যেটিকে। এক পিঁপড়া তার দলকে ডেকে বলল, নিজেদের ঘরে ঢুকে পড়ো, নইলে সুলাইমান ও তাঁর বাহিনী না জেনেই তোমাদের পিষে ফেলবে (27:18)। তার কথায় তিনি মৃদু হাসলেন, আর দোয়া করলেন: “হে আমার প্রভু, আমাকে সামর্থ্য দিন যেন আপনার নিয়ামতের শুকরিয়া আদায় করি, এমন সৎকর্ম করি যা আপনি পছন্দ করেন, আর আপনার রহমতে আমাকে আপনার সৎকর্মশীল বান্দাদের অন্তর্ভুক্ত করুন” (27:19)। পৃথিবীর সবচেয়ে ক্ষমতাধর মানুষটি একটি পোকার কথা শুনে চাইলেন, তাঁকে যেন সাধারণ নেককারদের দলে গণ্য করা হয়।" },
        ],
      },
      {
        h: { en: "The Letter and the Throne", bn: "চিঠি ও সিংহাসন" },
        p: [
          { en: "The hoopoe returned with news of a people in Saba ruled by a queen, prostrating to the sun instead of Allah (27:22-24). Sulayman did not send an army; he sent a letter. She read it aloud to her council: it opens with the name of Allah, the Most Merciful, and says, “Do not be haughty with me, but come to me in submission” (27:29-31). She judged that kings ruin a city when they enter it, and tried a gift first (27:32-35).",
            bn: "হুদহুদ ফিরে এসে খবর দিল সাবার এক জাতির: তাদের শাসক এক রানি, আর তারা আল্লাহকে বাদ দিয়ে সূর্যকে সিজদা করে (27:22-24)। সুলাইমান সেনাবাহিনী পাঠালেন না; পাঠালেন একটি চিঠি। রানি তাঁর সভাসদদের সামনে চিঠিটি পড়ে শোনালেন। এর শুরু পরম করুণাময় অসীম দয়ালু আল্লাহর নামে, আর তাতে লেখা: “আমার বিরুদ্ধে অহংকার করো না, আত্মসমর্পণ করে আমার কাছে চলে এসো” (27:29-31)। রানি ভাবলেন, রাজারা কোনো জনপদে ঢুকলে তা তছনছ করে দেয়; তাই আগে উপহার পাঠিয়ে দেখলেন (27:32-35)।" },
          { en: "The gift was refused: what Allah had given him was better (27:36). Before she arrived, one who had knowledge of the Scripture brought her throne to him in less than the blink of an eye, and his response was inward: “This is from the favour of my Lord, to test me whether I am grateful or ungrateful” (27:40). At the palace she mistook the polished floor for water, then said the words the episode existed for: “I submit with Sulayman to Allah, Lord of the worlds” (27:44).",
            bn: "উপহার ফিরিয়ে দেওয়া হলো: আল্লাহ তাঁকে যা দিয়েছেন, তা এর চেয়ে ঢের ভালো (27:36)। রানি এসে পৌঁছানোর আগেই, কিতাবের জ্ঞান ছিল এমন একজন চোখের পলক পড়ার আগেই তাঁর সিংহাসন এনে হাজির করলেন। সুলাইমানের সাড়া তখনও নিজের ভেতরের দিকে: “এ আমার প্রভুর অনুগ্রহ, আমাকে পরীক্ষা করার জন্য, আমি কৃতজ্ঞ হই নাকি অকৃতজ্ঞ” (27:40)। প্রাসাদে রানি মসৃণ মেঝেকে পানি ভেবে ভুল করলেন। তারপর বললেন সেই কথা, যার জন্যই গোটা ঘটনা: “আমি সুলাইমানের সঙ্গে বিশ্বজগতের প্রতিপালক আল্লাহর কাছে আত্মসমর্পণ করলাম” (27:44)।" },
        ],
      },
      {
        h: { en: "The Staff and the Creature of the Earth", bn: "লাঠি ও মাটির প্রাণী" },
        p: [
          { en: "His death is told in one verse — the quietest ending given to any king in the Quran. When Allah decreed his death, nothing indicated it to the jinn except a creature of the earth eating away his staff; when he fell, it became clear to them that had they known the unseen they would not have remained in humiliating labour (34:14). The man who commanded the wind was given away by a worm in a stick.",
            bn: "তাঁর মৃত্যুর কথা এসেছে মাত্র একটি আয়াতে। কুরআনে কোনো রাজার এত নীরব বিদায় আর নেই। আল্লাহ যখন তাঁর মৃত্যুর ফয়সালা করলেন, জিনেরা কিছুই টের পেল না। একমাত্র চিহ্ন ছিল মাটির এক পোকা, যে তাঁর লাঠি খেয়ে চলছিল। তিনি পড়ে যেতেই জিনদের কাছে স্পষ্ট হলো, তারা যদি গায়েব জানত, তবে এই অপমানজনক খাটুনিতে পড়ে থাকত না (34:14)। যিনি বাতাসকে হুকুম করতেন, তাঁর খবর শেষে ফাঁস করে দিল লাঠির ভেতরের এক পোকা।" },
          { en: "The verse settles a claim, not merely a life. It denies the jinn any access to the unseen, and elsewhere the Quran clears Sulayman of the sorcery attributed to him by those who followed what the devils recited in his reign: Sulayman did not disbelieve (2:102). What finally remains of him is not the empire but a repeated description — an excellent servant, always turning to his Lord (38:30) — and a prayer any reader can make.",
            bn: "আয়াতটি শুধু একটি জীবনের ইতি টানে না, একটি দাবিরও মীমাংসা করে। জিনেরা গায়েব জানে, এ দাবি এতে নাকচ হয়ে যায়। অন্য জায়গায় কুরআন সুলাইমানকে জাদুর অপবাদ থেকেও মুক্ত করেছে। তাঁর রাজত্বকালে শয়তানেরা যা আওড়াত, কিছু লোক তা মেনে চলত আর সেই জাদু তাঁর নামে চালিয়ে দিত। কুরআন বলে: সুলাইমান কুফরি করেননি (2:102)। শেষ পর্যন্ত তাঁর যা থেকে যায়, তা সাম্রাজ্য নয়। থেকে যায় বারবার বলা এক পরিচয়: উত্তম বান্দা, সবসময় প্রভুর দিকে ফিরে আসতেন (38:30)। আর থেকে যায় একটি দোয়া, যেকোনো পাঠক যা নিজেও করতে পারেন।" },
        ],
      },
    ],
  },
  ilyas: {
    sections: [
      {
        h: { en: "A Prophet Named Twice", bn: "যে নবীর নাম এসেছে দুবার" },
        p: [
          { en: "Ilyas (AS) appears in the Quran in two places only. He is listed in Surah al-An'am among a chain of prophets guided by Allah, named alongside Zakariya, Yahya and Isa and described simply as one of the righteous (6:85). And he is given a short narrative passage in Surah as-Saffat (37:123-132). That is the whole of his Quranic footprint, and the honest way to read him is to build on exactly that, not on stories the Quran declined to tell.",
            bn: "কুরআনে ইলিয়াস (আঃ)-এর কথা আছে মাত্র দুই জায়গায়। সূরা আল-আনআমে আল্লাহর হিদায়াত পাওয়া নবীদের তালিকায় যাকারিয়া, ইয়াহইয়া ও ঈসার পাশে তাঁর নাম এসেছে, আর তাঁর পরিচয় শুধু এটুকু: তিনি সৎকর্মশীলদের একজন (6:85)। আর সূরা আস-সাফফাতে আছে তাঁকে নিয়ে ছোট্ট একটি বিবরণ (37:123-132)। কুরআনে তাঁর উপস্থিতি এটুকুই। তাঁকে সৎভাবে পড়তে হলে ঠিক এর ওপরই দাঁড়াতে হবে; কুরআন যে কাহিনি বলেনি, তার ওপর নয়।" },
          { en: "The brevity is itself instructive. Surah as-Saffat is a gallery of messengers told at speed — Nuh, Ibrahim, Musa and Harun, Ilyas, Lut, Yunus — each reduced to the essential shape of a mission and its ending. Ilyas is not a footnote in that gallery; he is one of its panels, given the same closing formula as the greatest of them. The Quran is not short of material about him. It is showing that the pattern matters more than the detail.",
            bn: "এই সংক্ষিপ্ততাতেই শিক্ষা আছে। সূরা আস-সাফফাতে একের পর এক রাসূলের কথা আসে দ্রুত: নূহ, ইবরাহীম, মূসা ও হারুন, ইলিয়াস, লূত, ইউনুস। প্রত্যেকের দাওয়াত আর তার পরিণতির শুধু মূল রেখাটুকু সেখানে আছে। এই সারিতে ইলিয়াস কোনো পাদটীকা নন, তিনি তার পুরো একটি অধ্যায়। সবচেয়ে বড় রাসূলদের যে সমাপনী বাক্য দেওয়া হয়েছে, তাঁকেও ঠিক সেটিই দেওয়া হয়েছে। তাঁর সম্পর্কে বলার মতো উপকরণ কুরআনের কম ছিল না। কুরআন আসলে দেখাচ্ছে, খুঁটিনাটির চেয়ে ধারাটাই বেশি জরুরি।" },
        ],
      },
      {
        h: { en: "The Question That Undoes an Idol", bn: "যে প্রশ্ন মূর্তিকে ভেঙে দেয়" },
        p: [
          { en: "His mission is compressed into a single question. He said to his people, “Will you not fear Allah? Do you call upon Ba'l and leave the best of creators — Allah, your Lord and the Lord of your forefathers?” (37:124-126). No miracle is narrated, no confrontation staged. The whole case against their idol is made by putting the two objects of worship side by side and letting the comparison do the work.",
            bn: "তাঁর পুরো দাওয়াত একটি প্রশ্নেই ধরা আছে। তিনি তাঁর সম্প্রদায়কে বললেন, “তোমরা কি আল্লাহকে ভয় করবে না? তোমরা কি বালকে ডাকো আর ছেড়ে দাও সর্বশ্রেষ্ঠ স্রষ্টাকে — আল্লাহকে, যিনি তোমাদের ও তোমাদের পূর্বপুরুষদের প্রতিপালক?” (37:124-126)। এখানে কোনো মুজিযার বর্ণনা নেই, মুখোমুখি লড়াইয়ের কোনো দৃশ্য নেই। দুই উপাস্যকে শুধু পাশাপাশি রাখা হয়েছে। তুলনাটাই মূর্তির বিরুদ্ধে পুরো যুক্তি দাঁড় করিয়ে দেয়।" },
          { en: "The phrase “best of creators” is the pivot. Ba'l was a name and a shrine; Allah is the one who made both the worshipper and the material the idol was carved from. And the second half of the question — “your Lord and the Lord of your forefathers” — takes away the usual defence of inherited religion. Ancestry cannot be a reason to keep Ba'l, because the ancestors themselves were creations and dependents of the same Lord.",
            bn: "এখানে মূল কথাটি হলো “সর্বশ্রেষ্ঠ স্রষ্টা”। বাল ছিল শুধু একটি নাম আর একটি মন্দির। আর আল্লাহ তিনি, যিনি উপাসককেও বানিয়েছেন, আবার যে উপকরণ খোদাই করে মূর্তি বানানো হয়েছে সেটিও। প্রশ্নের দ্বিতীয় অংশ, “তোমাদের ও তোমাদের পূর্বপুরুষদের প্রতিপালক”, বাপ-দাদার ধর্ম আঁকড়ে থাকার চিরচেনা অজুহাতটিও কেড়ে নেয়। পূর্বপুরুষের দোহাই দিয়ে বালকে ধরে রাখা চলে না, কারণ পূর্বপুরুষেরাও ছিলেন সেই একই প্রভুর সৃষ্টি, তাঁরই মুখাপেক্ষী।" },
        ],
      },
      {
        h: { en: "When a People Say No", bn: "যখন জাতি অস্বীকার করে" },
        p: [
          { en: "The response is stated without drama: they denied him, and so they will surely be brought forth for judgement — except the chosen servants of Allah (37:127-128). Two things are settled in that one sentence. The rejection was real and it was not total; a minority stood apart. The Quran does not tell us how many, and it does not have to, because the point is that a community's verdict is not a verdict on the truth.",
            bn: "তাদের সাড়ার কথা বলা হয়েছে কোনো নাটকীয়তা ছাড়াই: তারা তাঁকে মিথ্যাবাদী বলল, তাই তাদের অবশ্যই বিচারের জন্য হাজির করা হবে, আল্লাহর বাছাই করা বান্দারা ছাড়া (37:127-128)। এই এক বাক্যেই দুটি কথার মীমাংসা হয়ে যায়। প্রত্যাখ্যান সত্যিই ঘটেছিল, তবে সবাই প্রত্যাখ্যান করেনি; অল্প কিছু মানুষ আলাদা থেকেছিল। কতজন, কুরআন তা বলে না, বলার দরকারও নেই। মূল কথা হলো, একটি জনগোষ্ঠী কী রায় দিল, তা দিয়ে সত্যের বিচার হয় না।" },
          { en: "This is where a reader should resist the pull of extra-Quranic biography. Popular retellings supply him with famines, contests and journeys drawn from later sources of uncertain standing. The Quran gives a call, a refusal, a saved remnant, and a blessing. A teacher can defend every word of that. Anything added to it is borrowed weight, and borrowed weight is exactly what a prophet's story does not need.",
            bn: "এখানে এসে পাঠককে কুরআনের বাইরের জীবনী-কাহিনির টান সামলাতে হবে। প্রচলিত গল্পে তাঁর নামে দুর্ভিক্ষ, প্রতিযোগিতা আর সফরের কাহিনি জুড়ে দেওয়া হয়, যা পরবর্তী কালের এমন সব উৎস থেকে নেওয়া, যাদের নির্ভরযোগ্যতা অনিশ্চিত। কুরআন দেয় একটি আহ্বান, একটি প্রত্যাখ্যান, বেঁচে যাওয়া অল্প কিছু মানুষ আর একটি বরকত। একজন শিক্ষক এর প্রতিটি শব্দের পক্ষে দাঁড়াতে পারেন। এর সঙ্গে যা-ই জোড়া হোক, তা বাইরে থেকে ধার করে আনা ভার; আর নবীর কাহিনিতে ঠিক এমন ভারেরই কোনো দরকার নেই।" },
        ],
      },
      {
        h: { en: "The Name That Was Kept", bn: "যে নাম থেকে গেল" },
        p: [
          { en: "Then comes his reward, and it is not land or victory. Allah says He left for him a good remembrance among later generations: peace be upon Il-Yasin (37:129-130). The identical formula is used for Nuh (37:79), for Ibrahim (37:109), and for Musa and Harun (37:120). Whatever his people decided about him, Allah placed his name in the same sentence pattern as the greatest messengers, and kept it there permanently.",
            bn: "এরপর আসে তাঁর পুরস্কার, আর তা কোনো ভূখণ্ড বা বিজয় নয়। আল্লাহ বলেন, পরবর্তীদের মধ্যে তিনি তাঁর সুনাম রেখে দিয়েছেন: ইল-ইয়াসিনের প্রতি শান্তি বর্ষিত হোক (37:129-130)। হুবহু এই কথাই আছে নূহের জন্য (37:79), ইবরাহীমের জন্য (37:109), মূসা ও হারুনের জন্য (37:120)। তাঁর সম্প্রদায় তাঁর ব্যাপারে যা-ই ঠিক করুক, আল্লাহ তাঁর নাম বসিয়ে দিয়েছেন শ্রেষ্ঠ রাসূলদের মতো একই ধাঁচের বাক্যে, আর সেখানেই চিরকালের জন্য রেখে দিয়েছেন।" },
          { en: "The passage closes by explaining why: thus do We reward the doers of good; he was among Our believing servants (37:131-132). Notice what is not measured. Not converts, not years, not the fate of the shrine of Ba'l. The reward is attached to ihsan — doing the work well — and to iman, and both of those are within reach of a person whose efforts nobody records.",
            bn: "অনুচ্ছেদটি শেষ হয় কারণটি জানিয়ে: এভাবেই আমি সৎকর্মশীলদের প্রতিদান দিই; তিনি ছিলেন আমার মুমিন বান্দাদের একজন (37:131-132)। খেয়াল করুন, এখানে কী মাপা হয়নি। অনুসারীর সংখ্যা নয়, বছরের হিসাব নয়, বালের মন্দিরের কী হলো তাও নয়। প্রতিদান বাঁধা হয়েছে ইহসানের সঙ্গে, অর্থাৎ কাজটি সুন্দর করে করার সঙ্গে, আর ঈমানের সঙ্গে। এই দুটিই এমন মানুষেরও নাগালে, যার পরিশ্রমের হিসাব কেউ রাখে না।" },
        ],
      },
      {
        h: { en: "What the Silence Teaches", bn: "নীরবতা যা শেখায়" },
        p: [
          { en: "There is a discipline in reading a prophet the Quran describes in ten verses. It trains the reader to want what Allah chose to preserve rather than what curiosity would prefer. The mission of Ilyas is fully legible without a single date: a society had made a name into a god, a man told them plainly that the Creator is not a rival to His creation, and the argument was refused by most and accepted by a few.",
            bn: "যে নবীর কথা কুরআনে মাত্র দশ আয়াতে, তাঁকে পড়তে গেলে এক ধরনের সংযম শিখতে হয়। পাঠক শেখেন, কৌতূহল যা চায় তা নয়, আল্লাহ যা সংরক্ষণ করতে চেয়েছেন সেটিকেই চাইতে। একটি তারিখও ছাড়া ইলিয়াসের দাওয়াত পুরোপুরি বোঝা যায়। এক সমাজ একটি নামকে ইলাহ বানিয়ে নিয়েছিল। একজন মানুষ তাদের সোজাসুজি বললেন, স্রষ্টা তাঁর সৃষ্টির প্রতিদ্বন্দ্বী নন। বেশির ভাগ মানুষ সেই কথা মানল না, অল্প কয়েকজন মানল।" },
          { en: "The lesson carries directly. Idols now are rarely carved, but anything given the authority to define good and evil in a person's life is functionally a Ba'l. Ilyas asked one question about the ranking of loyalties, and the Quran preserved him for asking it. Those who call others to their Creator are told, in his story, exactly where to leave the outcome — and where their names are safest.",
            bn: "এই শিক্ষা সরাসরি আমাদের জীবনেও খাটে। আজকাল মূর্তি খুব কমই খোদাই করে বানানো হয়। কিন্তু কারও জীবনে ভালো-মন্দ ঠিক করে দেওয়ার ক্ষমতা যাকেই দেওয়া হয়, কার্যত সে-ই এক বাল। কার প্রতি আনুগত্য আগে, এ নিয়ে ইলিয়াস একটিমাত্র প্রশ্ন করেছিলেন, আর সেই প্রশ্নের জন্যই কুরআন তাঁকে ধরে রেখেছে। যাঁরা মানুষকে তাদের স্রষ্টার দিকে ডাকেন, তাঁর কাহিনি তাঁদের দেখিয়ে দেয় ফলাফল কোথায় ছেড়ে দিতে হয়, আর নিজের নাম কোথায় সবচেয়ে নিরাপদ।" },
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
            bn: "কুরআনে আল-ইয়াসা (আঃ)-এর নাম এসেছে মাত্র দুবার, এর বেশি নয়: সূরা আল-আনআমে (6:86) আর সূরা সাদে (38:48)। কোনো জায়গাতেই কাহিনি নেই। কোনো সম্প্রদায়ের বর্ণনা নেই, সংঘাত নেই, মুজিযা নেই, পরিণতির কথাও নেই। তার বদলে তিনি পেয়েছেন একটি জায়গা, আর কুরআনে কাকে কোথায় বসানো হলো, সেটাই একটা বক্তব্য। এমন সব নামের মাঝে তাঁকে রাখা হয়েছে, যাঁদের প্রত্যেক পাঠক আগে থেকেই শ্রদ্ধা করেন। কোনো ব্যাখ্যা ছাড়াই তাঁকে সেখানে রেখে দেওয়া হয়েছে।" },
          { en: "This is unusual enough to be worth pausing over. Most prophets in the Quran come with at least a scene — a flood, a fire, a staff, a city. Al-Yasa' comes with none. Any article about him that manufactures scenes has stopped describing him and started inventing him. The material the Quran actually provides is the company he keeps and the words used to rank him, and that material turns out to be substantial.",
            bn: "ব্যাপারটি এতটাই ব্যতিক্রমী যে একটু থেমে ভাবা দরকার। কুরআনে বেশির ভাগ নবীর সঙ্গে অন্তত একটি দৃশ্য থাকে: প্লাবন, আগুন, লাঠি কিংবা কোনো জনপদ। আল-ইয়াসার সঙ্গে তেমন কিছুই নেই। তাঁকে নিয়ে কোনো লেখা যদি দৃশ্য বানিয়ে নেয়, তবে সে আর তাঁর বর্ণনা দিচ্ছে না, তাঁকে বানিয়ে তুলছে। কুরআন আসলে যা দেয়, তা হলো কাদের সঙ্গে তাঁর নাম এসেছে আর কোন শব্দে তাঁর মর্যাদা বলা হয়েছে। দেখা যায়, এই উপকরণও কম নয়।" },
        ],
      },
      {
        h: { en: "The Company He Is Named In", bn: "যাঁদের সঙ্গে তাঁর নাম" },
        p: [
          { en: "Surah al-An'am gives a long roll of prophets — Ibrahim and his descendants, Ishaq, Ya'qub, Nuh, Dawud, Sulayman, Ayyub, Yusuf, Musa, Harun, Zakariya, Yahya, Isa, Ilyas — and then adds Isma'il, Al-Yasa', Yunus and Lut, saying of them all that each was favoured above the worlds (6:83-86). The list is not casual; it is the argument of the passage. Guidance is one line, and Al-Yasa' is inside it.",
            bn: "সূরা আল-আনআমে নবীদের এক দীর্ঘ তালিকা আছে: ইবরাহীম ও তাঁর বংশধর, ইসহাক, ইয়াকুব, নূহ, দাউদ, সুলাইমান, আইয়ুব, ইউসুফ, মূসা, হারুন, যাকারিয়া, ইয়াহইয়া, ঈসা, ইলিয়াস। এরপর যোগ হয় ইসমাঈল, আল-ইয়াসা, ইউনুস ও লূতের নাম, আর সবার সম্পর্কে বলা হয়, প্রত্যেককেই সৃষ্টিকুলের ওপর মর্যাদা দেওয়া হয়েছে (6:83-86)। তালিকাটি এলোমেলো নয়; এটিই অনুচ্ছেদের মূল যুক্তি। হিদায়াতের ধারা একটাই, আর আল-ইয়াসা সেই ধারারই ভেতরে।" },
          { en: "The passage then draws its own conclusion: that is the guidance of Allah, by which He guides whom He wills of His servants — and had they associated others with Him, all their deeds would have been worthless (6:88). Al-Yasa' is cited as evidence in an argument about tawhid. He is not an ornament on the list; he is one of the witnesses the Quran calls to prove that the message has never changed.",
            bn: "এরপর অনুচ্ছেদটি নিজেই উপসংহার টানে: এ হলো আল্লাহর হিদায়াত, এ দিয়ে তিনি তাঁর বান্দাদের মধ্যে যাকে ইচ্ছা পথ দেখান; আর তারা যদি শিরক করত, তবে তাদের সব আমল বৃথা হয়ে যেত (6:88)। অর্থাৎ তাওহিদের পক্ষে যুক্তিতে কুরআন আল-ইয়াসাকে হাজির করে প্রমাণ হিসেবে। তিনি তালিকার সাজসজ্জা নন। তিনি সেই সাক্ষীদের একজন, যাঁদের ডেকে কুরআন প্রমাণ করে, বার্তা কখনো বদলায়নি।" },
        ],
      },
      {
        h: { en: "Among the Good", bn: "উত্তমদের অন্তর্ভুক্ত" },
        p: [
          { en: "The second mention is warmer still. Surah Sad has just recounted Dawud, Sulayman and Ayyub (38:17-44), and then Ibrahim, Ishaq and Ya'qub, calling these three possessed of strength and vision, chosen and outstanding (38:45-47). Then: “And remember Isma'il, Al-Yasa' and Dhul-Kifl — and all are among the good” (38:48). The word is al-akhyar, the outstanding ones, and it is applied to him by Allah directly, with no qualification and no biography required to earn it.",
            bn: "দ্বিতীয় উল্লেখটি আরও আন্তরিক। সূরা সাদ এর ঠিক আগে দাউদ, সুলাইমান ও আইয়ুবের কথা বলেছে (38:17-44), তারপর ইবরাহীম, ইসহাক ও ইয়াকুবের কথা। এই তিনজনকে বলেছে শক্তি ও অন্তর্দৃষ্টির অধিকারী, বাছাই করা ও শ্রেষ্ঠ (38:45-47)। তারপর আসে: “আর স্মরণ করো ইসমাঈল, আল-ইয়াসা ও যুলকিফলকে — তারা সকলেই উত্তমদের অন্তর্ভুক্ত” (38:48)। শব্দটি আল-আখইয়ার, অর্থাৎ শ্রেষ্ঠজনেরা। স্বয়ং আল্লাহ সরাসরি তাঁকে এ কথা বলেছেন, কোনো শর্ত ছাড়াই; এ মর্যাদা পেতে তাঁর কোনো জীবনকাহিনির দরকার হয়নি।" },
          { en: "The verses immediately following make the setting explicit: this is a reminder, and for the God-conscious there is an excellent place of return (38:49-50). Surah Sad is not writing history in this passage. It is holding up examples for people who must persevere without applause and without a record of their efforts, and Al-Yasa' is the sharpest of those examples precisely because nothing else about him was preserved. The praise stands on its own, resting on no achievement the reader can inspect.",
            bn: "ঠিক পরের আয়াতগুলো প্রেক্ষাপট পরিষ্কার করে দেয়: এ এক উপদেশ, আর মুত্তাকিদের জন্য আছে উত্তম ঠিকানা (38:49-50)। এই অনুচ্ছেদে সূরা সাদ ইতিহাস লিখছে না। সে দৃষ্টান্ত তুলে ধরছে এমন মানুষদের সামনে, যাদের অবিচল থাকতে হয় কারও বাহবা ছাড়া, নিজের পরিশ্রমের কোনো খতিয়ান ছাড়া। আর এই দৃষ্টান্তগুলোর মধ্যে আল-ইয়াসার দৃষ্টান্তই সবচেয়ে তীক্ষ্ণ, ঠিক এই কারণে যে তাঁর সম্পর্কে আর কিছুই সংরক্ষিত হয়নি। প্রশংসাটি নিজেই নিজের ভিত্তি; এমন কোনো কীর্তির ওপর তা দাঁড়িয়ে নেই, যা পাঠক যাচাই করে দেখতে পারেন।" },
        ],
      },
      {
        h: { en: "After Ilyas, By Order", bn: "ক্রমে ইলিয়াসের পরেই" },
        p: [
          { en: "It is commonly said that Al-Yasa' continued the work of Ilyas among the Children of Israel, and the Quranic order supports the association: Ilyas is named in 6:85 and Al-Yasa' in the verse that follows. What the Quran does not do is state the relationship, describe the handover, or name the generation. A careful teacher can say the two are placed together and that tradition links them, and should stop there.",
            bn: "সাধারণত বলা হয়, আল-ইয়াসা বনী ইসরাঈলের মধ্যে ইলিয়াসের কাজ এগিয়ে নিয়েছিলেন। কুরআনের ক্রমও এই যোগসূত্রের সঙ্গে মেলে: ইলিয়াসের নাম 6:85 আয়াতে, আর আল-ইয়াসার নাম ঠিক পরের আয়াতে। কিন্তু কুরআন এই সম্পর্কের কথা স্পষ্ট করে বলে না, দায়িত্ব বুঝিয়ে দেওয়ার বর্ণনা দেয় না, কোন প্রজন্ম তাও জানায় না। একজন সতর্ক শিক্ষক বলতে পারেন, দুজনকে পাশাপাশি রাখা হয়েছে এবং প্রচলিত বর্ণনা তাঁদের যুক্ত করে। এখানেই থামা উচিত।" },
          { en: "The restraint is not a gap in the record; it is a principle stated in the Quran itself. Allah tells the Prophet ﷺ that He has related the accounts of some messengers to him and not related others (4:164), and repeats it: among them are those We have told you of, and among them are those We have not (40:78). Silence about a prophet is a decision, and it is not an invitation to fill the space.",
            bn: "এই সংযম তথ্যের কোনো ফাঁক নয়; এ কুরআনেরই ঘোষিত একটি নীতি। আল্লাহ নবী ﷺ-কে জানান, কিছু রাসূলের ঘটনা তিনি তাঁকে শুনিয়েছেন, আর কিছু শোনাননি (4:164)। আবারও বলেন: তাদের কারও কথা আমি তোমাকে জানিয়েছি, আর কারও কথা জানাইনি (40:78)। কোনো নবীর ব্যাপারে নীরবতা একটি সিদ্ধান্ত। সেই ফাঁকা জায়গা ভরাট করার আমন্ত্রণ তা নয়।" },
        ],
      },
      {
        h: { en: "Why the Brief Mention Matters", bn: "সংক্ষিপ্ত উল্লেখ কেন গুরুত্বপূর্ণ" },
        p: [
          { en: "Most believing lives look far more like Al-Yasa's entry than like the story of Musa. There is no parted sea, no famous confrontation before a tyrant, no line that anyone will quote a thousand years later. There is faithfulness carried on quietly without an audience, and a name known to Allah. The Quran's willingness to honour a prophet in two short clauses tells every unremembered servant exactly how carefully their own record is being kept.",
            bn: "বেশির ভাগ মুমিনের জীবন মূসার কাহিনির মতো নয়, বরং আল-ইয়াসার ওই ছোট্ট উল্লেখের মতো। সেখানে দুই ভাগ হয়ে যাওয়া সমুদ্র নেই, কোনো জালিম শাসকের মুখোমুখি দাঁড়ানোর বিখ্যাত ঘটনা নেই, এমন কোনো কথা নেই যা হাজার বছর পরেও মানুষ উদ্ধৃত করবে। আছে দর্শকহীন, নীরব বিশ্বস্ততা, আর আল্লাহর কাছে চেনা একটি নাম। দুটি ছোট্ট বাক্যাংশে কুরআন একজন নবীকে যে সম্মান দেয়, তা থেকে প্রত্যেক অখ্যাত বান্দা জেনে যায়, তার নিজের আমলনামা কত যত্নে রাখা হচ্ছে।" },
          { en: "It also protects the reader from a subtle error: measuring prophethood by drama. The mission of every messenger named in 6:83-88 was identical — worship Allah alone — and the differences between their stories are differences in what Allah chose to show, not in what they achieved. Al-Yasa' is favoured above the worlds and counted among the good on the same authority that describes the parting of the sea.",
            bn: "এটি পাঠককে একটি সূক্ষ্ম ভুল থেকেও বাঁচায়: নাটকীয়তা দিয়ে নবুয়ত মাপা। 6:83-88 আয়াতে যে রাসূলদের নাম এসেছে, তাঁদের সবার দাওয়াত ছিল একই: শুধু আল্লাহর ইবাদত করো। তাঁদের কাহিনিতে যে পার্থক্য, তা আল্লাহ কী দেখাতে চেয়েছেন তার পার্থক্য, তাঁরা কী অর্জন করেছেন তার নয়। যে কালাম সমুদ্র দুই ভাগ হওয়ার বর্ণনা দেয়, সেই একই কালাম বলছে, আল-ইয়াসা সৃষ্টিকুলের ওপর মর্যাদাপ্রাপ্ত এবং উত্তমদের একজন।" },
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
            bn: "আল্লাহ যাঁদের কাছে ওহি পাঠিয়েছেন, সেই রাসূলদের তালিকায় ইউনুস (আঃ)-এর নাম আছে (4:163); সৃষ্টিকুলের ওপর মর্যাদা পাওয়া নবীদের মধ্যেও আছে (6:86)। সূরা আস-সাফফাত তাঁর কাহিনি শুরু করে সোজা একটি তথ্য দিয়ে: ইউনুস ছিলেন রাসূলদের একজন (37:139)। পরে জানায়, তাঁকে পাঠানো হয়েছিল এক লক্ষ বা তারও বেশি মানুষের কাছে (37:147)। তিনি কোনো গ্রামে দাওয়াত দিচ্ছিলেন না। তাঁর সামনে ছিল গোটা একটি নগর, আর নগর সহজে নড়ে না।" },
          { en: "The Quran does not narrate his years of preaching there. It moves straight to the moment it wants examined: what a sincere man does when a long call produces no visible change. Everything memorable in this story — the ship, the fish, the darkness, the deliverance — grows out of that one decision, and the story is told so that the decision is never romanticised.",
            bn: "সেখানে তাঁর দাওয়াতের বছরগুলোর বিবরণ কুরআন দেয় না। সরাসরি চলে যায় সেই মুহূর্তে, যেটি সে আমাদের ভেবে দেখতে বলে: দীর্ঘ দিন ডাকার পরও যখন চোখে পড়ার মতো কোনো পরিবর্তন আসে না, তখন একজন আন্তরিক মানুষ কী করেন। জাহাজ, মাছ, অন্ধকার, মুক্তি: এই কাহিনির যা কিছু মনে রাখার মতো, সবই ওই একটি সিদ্ধান্ত থেকে জন্ম নেয়। আর কাহিনিটি এমনভাবে বলা হয়েছে, যাতে সেই সিদ্ধান্তকে কখনো মহিমান্বিত করে দেখানো না হয়।" },
        ],
      },
      {
        h: { en: "Leaving in Anger", bn: "ক্ষোভে চলে যাওয়া" },
        p: [
          { en: "Surah al-Anbiya says it without softening: and the man of the fish, when he went off in anger and thought that We would not constrain him (21:87). He left his post. Surah as-Saffat continues the sequence — he fled to a laden ship, lots were cast, and he was among the losers (37:140-141). A prophet's frustration was real, and the Quran neither denies it nor excuses it.",
            bn: "সূরা আল-আম্বিয়া কথাটি বলে কোনো রাখঢাক ছাড়াই: আর মাছের সঙ্গী, যখন তিনি রাগ করে চলে গেলেন এবং ভেবেছিলেন, আমি তাঁর ওপর কোনো সংকট চাপাব না (21:87)। তিনি নিজের দায়িত্বের জায়গা ছেড়ে চলে গেলেন। সূরা আস-সাফফাত ঘটনার পরের ধাপগুলো বলে: তিনি পালিয়ে এক বোঝাই জাহাজে উঠলেন, লটারি হলো, আর তিনি হেরে যাওয়াদের দলে পড়লেন (37:140-141)। একজন নবীর হতাশা সত্যিই ছিল। কুরআন তা অস্বীকারও করে না, তার পক্ষে অজুহাতও দেয় না।" },
          { en: "The word translated “thought We would not constrain him” is the hinge of the whole account. It does not describe disbelief; it describes a servant acting as though the matter had passed out of Allah's ordering. What follows is not punishment for preaching badly. It is a correction applied to a man Allah intended to keep, delivered in the one place where nothing could distract him from it.",
            bn: "যে কথাটির অনুবাদ “ভেবেছিলেন, আমি তাঁর ওপর কোনো সংকট চাপাব না”, পুরো ঘটনার চাবিকাঠি সেটিই। এতে অবিশ্বাস বোঝায় না। বোঝায় এমন এক বান্দাকে, যিনি এমনভাবে চললেন যেন ব্যাপারটি আর আল্লাহর হুকুমের আওতায় নেই। এরপর যা ঘটে, তা ভালোভাবে দাওয়াত না দেওয়ার শাস্তি নয়। এ এমন একজনের সংশোধন, যাঁকে আল্লাহ নিজের কাছে রাখতে চেয়েছিলেন। আর সংশোধনটি এল এমন জায়গায়, যেখানে কোনো কিছুই তাঁর মন অন্য দিকে সরাতে পারত না।" },
        ],
      },
      {
        h: { en: "The Du'a of the Darkness", bn: "অন্ধকারের দোয়া" },
        p: [
          { en: "The great fish swallowed him while he was blameworthy (37:142). Then, in the darkness, he called out: “There is no god except You; glory be to You; indeed I have been of the wrongdoers” (21:87). Three moves in nine words — declare Allah's oneness, clear Him of any fault, take the blame yourself — and not one word asking for release. He did not negotiate. He corrected his own position.",
            bn: "বিশাল মাছটি তাঁকে গিলে ফেলল, আর তখন তিনি ছিলেন তিরস্কারের যোগ্য (37:142)। তারপর অন্ধকারে তিনি ডাকলেন: “তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র; নিশ্চয়ই আমি সীমালঙ্ঘনকারীদের অন্তর্ভুক্ত” (21:87)। নয়টি শব্দে তিনটি কাজ: আল্লাহর একত্বের ঘোষণা, তাঁকে সব ত্রুটি থেকে পবিত্র বলা, আর দোষ নিজের কাঁধে নেওয়া। অথচ মুক্তি চেয়ে একটি শব্দও নেই। তিনি দর-কষাকষি করেননি। নিজের অবস্থানটাই শুধরে নিয়েছেন।" },
          { en: "Allah's answer is recorded immediately: We responded to him and saved him from distress, and thus do We save the believers (21:88). The closing clause turns a private rescue into a public rule. And Surah as-Saffat states the alternative plainly: had he not been of those who glorify Allah, he would have remained in its belly until the Day of Resurrection (37:143-144). Remembrance, built before the crisis, was what made the crisis survivable.",
            bn: "আল্লাহর জবাব আসে সঙ্গে সঙ্গেই: আমি তাঁর ডাকে সাড়া দিলাম এবং তাঁকে দুশ্চিন্তা থেকে উদ্ধার করলাম, আর এভাবেই আমি মুমিনদের উদ্ধার করি (21:88)। শেষ কথাটি একজনের ব্যক্তিগত উদ্ধারকে সবার জন্য একটি নিয়ম বানিয়ে দেয়। আর সূরা আস-সাফফাত অন্য সম্ভাবনাটিও সোজাসুজি বলে দেয়: তিনি যদি আল্লাহর তাসবিহকারীদের একজন না হতেন, তবে কিয়ামত পর্যন্ত মাছের পেটেই থেকে যেতেন (37:143-144)। বিপদের আগেই যে জিকির গড়ে উঠেছিল, সেটাই তাঁকে বিপদ পার করিয়ে দিল।" },
        ],
      },
      {
        h: { en: "Cast Ashore and Restored", bn: "তীরে নিক্ষেপ, তারপর ফিরে আসা" },
        p: [
          { en: "He was cast onto the open shore while he was ill, and Allah caused a gourd plant to grow over him (37:145-146). It is a strikingly gentle detail after so severe a discipline: the same power that arranged the fish arranged the shade. Correction in this story is never abandonment, and recovery is treated as part of the mercy rather than an afterthought.",
            bn: "অসুস্থ অবস্থায় তাঁকে খোলা তীরে ফেলে দেওয়া হলো, আর আল্লাহ তাঁর ওপর লাউজাতীয় একটি গাছ জন্মিয়ে দিলেন (37:145-146)। এত কঠিন শাসনের পর এ বড়ই কোমল একটি খুঁটিনাটি: যিনি মাছের ব্যবস্থা করেছিলেন, তিনিই ছায়ার ব্যবস্থাও করলেন। এই কাহিনিতে সংশোধন মানে কখনো ছেড়ে দেওয়া নয়। সেরে ওঠাও রহমতেরই অংশ, পরে মনে পড়া কোনো বাড়তি কথা নয়।" },
          { en: "Then he was sent back — to a hundred thousand or more — and they believed, so Allah gave them enjoyment for a time (37:147-148). The mission he had walked away from was returned to him intact. Nothing had been lost by the delay except his own comfort, and the people he had given up on were the ones who received the outcome.",
            bn: "তারপর তাঁকে আবার পাঠানো হলো সেই এক লক্ষ বা তারও বেশি মানুষের কাছে। তারা ঈমান আনল, আর আল্লাহ তাদের একটি নির্দিষ্ট সময় পর্যন্ত জীবন উপভোগ করতে দিলেন (37:147-148)। যে দায়িত্ব ফেলে তিনি চলে গিয়েছিলেন, সেটি অটুট অবস্থায় তাঁকে ফিরিয়ে দেওয়া হলো। দেরির কারণে তাঁর নিজের আরাম ছাড়া আর কিছুই হারায়নি। আর যাদের ব্যাপারে তিনি আশা ছেড়ে দিয়েছিলেন, সুফলটা পেল তারাই।" },
        ],
      },
      {
        h: { en: "The Nation That Turned in Time", bn: "যে জাতি সময়মতো ফিরেছিল" },
        p: [
          { en: "Surah Yunus makes a claim about history that is easy to read past: no town believed and profited by its faith except the people of Yunus — when they believed, We removed from them the punishment of disgrace in worldly life and gave them enjoyment for a time (10:98). Across every nation the Quran describes, this is the single recorded case of a community repenting collectively before the punishment fell.",
            bn: "সূরা ইউনুস ইতিহাস নিয়ে এমন একটি কথা বলে, যা সহজেই চোখ এড়িয়ে যায়: ইউনুসের সম্প্রদায় ছাড়া আর কোনো জনপদ এমন হয়নি, যারা ঈমান এনেছে আর সেই ঈমান তাদের কাজে এসেছে; তারা যখন ঈমান আনল, আমি দুনিয়ার জীবনে তাদের ওপর থেকে লাঞ্ছনার শাস্তি সরিয়ে নিলাম এবং একটি নির্দিষ্ট সময় পর্যন্ত তাদের ভোগ করতে দিলাম (10:98)। কুরআনে যত জাতির কথা এসেছে, তাদের মধ্যে এটিই একমাত্র ঘটনা, যেখানে শাস্তি নেমে আসার আগেই গোটা একটি জনগোষ্ঠী একসঙ্গে তওবা করেছে।" },
          { en: "The contrast is deliberate. Pharaoh's faith was refused at the moment the sea closed over him (10:90-91), and the Quran states the rule generally: their faith did not benefit them once they saw Our punishment (40:84-85). The people of Yunus were not more deserving; they were earlier. The window closes, and the story exists to say that it is still open now.",
            bn: "এই বৈপরীত্য ইচ্ছা করেই দেখানো। ফেরাউন ঈমান আনল ঠিক তখন, যখন সমুদ্র তাকে গ্রাস করছিল, আর সেই ঈমান কবুল হলো না (10:90-91)। কুরআন নিয়মটি সাধারণভাবেও বলে দেয়: আমার শাস্তি দেখে ফেলার পর তাদের ঈমান আর কোনো কাজে আসেনি (40:84-85)। ইউনুসের সম্প্রদায় অন্যদের চেয়ে বেশি যোগ্য ছিল না; তারা শুধু সময় থাকতে ফিরেছিল। দরজা একসময় বন্ধ হয়ে যায়। আর এই কাহিনি আছে এ কথা জানাতেই যে, দরজা এখনো খোলা।" },
        ],
      },
      {
        h: { en: "The Warning Drawn From Him", bn: "তাঁর থেকে নেওয়া সতর্কবার্তা" },
        p: [
          { en: "Years later the Quran turned this episode into an instruction for the final Prophet ﷺ: be patient for the decision of your Lord, and be not like the companion of the fish, when he called out while he was distressed — had a favour from his Lord not reached him, he would have been cast onto the barren shore while he was blamed (68:48-49). The lesson drawn is impatience, not weakness of faith.",
            bn: "বহু বছর পর কুরআন এই ঘটনাকে শেষ নবী ﷺ-এর জন্য একটি নির্দেশনা বানিয়ে দিল: তোমার প্রভুর ফয়সালার অপেক্ষায় ধৈর্য ধরো, আর মাছের সঙ্গীর মতো হয়ো না, যখন তিনি মনোকষ্টে ভরা অবস্থায় ডেকেছিলেন। তাঁর প্রভুর অনুগ্রহ যদি তাঁর কাছে না পৌঁছাত, তবে তিনি তিরস্কৃত অবস্থায় বিরান প্রান্তরে নিক্ষিপ্ত হতেন (68:48-49)। এখান থেকে নেওয়া শিক্ষাটি অধৈর্য নিয়ে, ঈমানের দুর্বলতা নিয়ে নয়।" },
          { en: "The very next verse completes the balance: but his Lord chose him and made him of the righteous (68:50). That is the settled Quranic verdict on Yunus, and it is why the Prophet ﷺ warned that no one should claim to be better than Yunus son of Matta, as reported in Sahih al-Bukhari and Sahih Muslim. His fault is recorded so that no believer thinks a lapse is the end, and his standing is recorded so that no believer belittles a servant Allah has chosen.",
            bn: "ঠিক পরের আয়াতটিই পাল্লা সমান করে দেয়: কিন্তু তাঁর প্রভু তাঁকে বেছে নিলেন এবং সৎকর্মশীলদের অন্তর্ভুক্ত করলেন (68:50)। ইউনুস সম্পর্কে কুরআনের চূড়ান্ত রায় এটিই। এ কারণেই নবী ﷺ সতর্ক করেছেন, কেউ যেন নিজেকে ইউনুস ইবনে মাত্তার চেয়ে উত্তম দাবি না করে; সহিহ বুখারি ও সহিহ মুসলিমে এ হাদিস এসেছে। তাঁর ভুলের কথা লিখে রাখা হয়েছে, যাতে কোনো মুমিন একবার পা পিছলালেই সব শেষ মনে না করে। আর তাঁর মর্যাদার কথা লিখে রাখা হয়েছে, যাতে আল্লাহর বেছে নেওয়া কোনো বান্দাকে কোনো মুমিন ছোট করে না দেখে।" },
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
            bn: "সূরা মারইয়াম তাঁর পরিচয় দেয় এমনভাবে, যা খুব কম জনের ভাগ্যে জুটেছে: এ তোমার প্রভুর রহমতের কথা, তাঁর বান্দা যাকারিয়ার প্রতি (19:2)। তাঁর দাওয়াতের কথা নয়, তাঁর বংশের কথাও নয়; তাঁর প্রতি তাঁর প্রভুর রহমতের কথা। এরপর যা কিছু আসে, সবই সেই প্রথম বাক্যটিরই দৃষ্টান্ত। আর যে সূরার শুরুতেই তাঁর নাম, সেই সূরাই সামনে গিয়ে বলবে ঈসা (আঃ)-এর জন্মের কাহিনি।" },
          { en: "His public role was the guardianship of Maryam. Surah Ali 'Imran records that lots were cast over who would take charge of her, and Zakariya was given the trust (3:44, 3:37). He served in the sanctuary — the commentators place it at Jerusalem — and the Quran shows him fulfilling the trust attentively: he entered upon her in the prayer chamber, and he noticed what was there.",
            bn: "সবার সামনে তাঁর দায়িত্ব ছিল মারইয়ামের অভিভাবকত্ব। সূরা আলে ইমরান জানায়, মারইয়ামের দায়িত্ব কে নেবে তা নিয়ে লটারি হয়েছিল, আর আমানতটি পেয়েছিলেন যাকারিয়া (3:44, 3:37)। তিনি উপাসনালয়ে খিদমত করতেন; মুফাসসিরগণ সেটিকে জেরুজালেমে বলে উল্লেখ করেন। কুরআন দেখায়, তিনি সেই আমানত রক্ষা করছেন যত্নের সঙ্গে: ইবাদতকক্ষে তিনি মারইয়ামের কাছে যেতেন, আর সেখানে কী আছে তা খেয়াল করতেন।" },
        ],
      },
      {
        h: { en: "The Provision in the Mihrab", bn: "মিহরাবের রিজিক" },
        p: [
          { en: "Every time Zakariya entered the prayer chamber he found provision with her. He asked, “Maryam, from where is this to you?” She said, “It is from Allah. Indeed Allah provides for whom He wills without account” (3:37). He had come as her guardian and left as her student. The answer he received was not about food at all; it was about the limits he had quietly placed on what Allah could give.",
            bn: "যাকারিয়া যতবার ইবাদতকক্ষে ঢুকতেন, ততবারই মারইয়ামের কাছে রিজিক দেখতে পেতেন। তিনি জিজ্ঞেস করলেন, “মারইয়াম, এসব তোমার কাছে কোথা থেকে আসে?” মারইয়াম বললেন, “এ আল্লাহর পক্ষ থেকে। নিশ্চয়ই আল্লাহ যাকে ইচ্ছা বেহিসাব রিজিক দেন” (3:37)। তিনি এসেছিলেন অভিভাবক হয়ে, ফিরলেন ছাত্র হয়ে। যে উত্তর পেলেন, তা আসলে খাবার নিয়ে ছিলই না। ছিল সেই সীমা নিয়ে, আল্লাহ কী দিতে পারেন সে ব্যাপারে যা তিনি মনে মনে নিজের অজান্তেই টেনে রেখেছিলেন।" },
          { en: "The Quran links the two events by sequence: it is there, in that chamber, that Zakariya called upon his Lord (3:38). Seeing sustenance arrive outside every ordinary channel reopened a hope he had long since put away. That is how the passage teaches du'a — not as a technique, but as what happens to a heart that has just watched Allah work outside the expected order.",
            bn: "কুরআন ঘটনা দুটিকে জুড়ে দেয় ক্রম দিয়েই: সেখানেই, সেই কক্ষেই যাকারিয়া তাঁর প্রভুকে ডাকলেন (3:38)। সব চেনা পথের বাইরে দিয়ে রিজিক আসতে দেখে, বহু আগে তুলে রাখা একটি আশা তাঁর মনে আবার জেগে উঠল। অনুচ্ছেদটি দোয়া শেখায় এভাবেই। দোয়া এখানে কোনো কৌশল নয়। এ সেই হৃদয়ের সাড়া, যে এইমাত্র দেখেছে, আল্লাহ প্রত্যাশিত নিয়মের বাইরেও কাজ করেন।" },
        ],
      },
      {
        h: { en: "The Prayer He Whispered", bn: "চুপিচুপি করা দোয়া" },
        p: [
          { en: "Surah Maryam preserves the words themselves. He called upon his Lord with a hidden call: “My Lord, indeed my bones have weakened, and my head has flared with white, and never have I been unblessed in my supplication to You, my Lord” (19:3-4). He begins by describing his own decline honestly, and then, in the same breath, describes a record of answered prayer. Neither cancels the other.",
            bn: "সূরা মারইয়াম তাঁর দোয়ার কথাগুলো হুবহু রেখে দিয়েছে। তিনি তাঁর প্রভুকে ডাকলেন চুপিচুপি: “হে আমার প্রভু, আমার হাড় দুর্বল হয়ে গেছে, আমার মাথা সাদা চুলে ছেয়ে গেছে, আর হে আমার প্রভু, আপনার কাছে দোয়া করে আমি কখনো বঞ্চিত হইনি” (19:3-4)। শুরুতেই তিনি অকপটে বলেন নিজের ক্ষয়ে যাওয়ার কথা, আর একই নিঃশ্বাসে বলেন, এতদিন তাঁর দোয়া বারবার কবুল হয়েছে। একটি কথা অন্যটিকে বাতিল করে না।" },
          { en: "Then he states his fear and his request: he feared the successors after him, his wife had been barren, so he asked for an heir from Allah — one who would inherit from him and from the family of Ya'qub, and whom Allah would make pleasing (19:5-6). The concern is not property. He wanted the trust of prophecy in safe hands, and he asked for a son who would be acceptable to Allah before he was useful to himself.",
            bn: "এরপর তিনি জানান নিজের ভয় আর নিজের চাওয়া। তাঁর পরে যারা উত্তরসূরি হবে, তাদের নিয়ে তাঁর ভয় ছিল; তাঁর স্ত্রী ছিলেন বন্ধ্যা। তাই তিনি আল্লাহর কাছে একজন উত্তরাধিকারী চাইলেন, যে তাঁর এবং ইয়াকুবের বংশের উত্তরাধিকারী হবে, আর যাকে আল্লাহ বানাবেন পছন্দনীয় (19:5-6)। দুশ্চিন্তাটা সম্পত্তি নিয়ে নয়। তিনি চেয়েছিলেন, নবুয়তের আমানত নিরাপদ হাতে থাকুক। তিনি এমন পুত্র চেয়েছিলেন, যে তাঁর নিজের কাজে লাগার আগে আল্লাহর কাছে পছন্দনীয় হবে।" },
        ],
      },
      {
        h: { en: "An Answer With a Name", bn: "উত্তর এল নামসহ" },
        p: [
          { en: "The reply is immediate and specific: “Zakariya, We give you good tidings of a boy whose name is Yahya. We have not assigned to any before him that name” (19:7). Not merely a son — a named son, and a name that had never been used. The answer exceeded the request in a way that could not be mistaken for coincidence.",
            bn: "উত্তর এল সঙ্গে সঙ্গে, একেবারে নির্দিষ্ট করে: “হে যাকারিয়া, আমি তোমাকে এক পুত্রের সুসংবাদ দিচ্ছি, যার নাম ইয়াহইয়া। এর আগে এই নাম আমি কারও জন্য রাখিনি” (19:7)। শুধু একটি পুত্র নয়, নাম ঠিক করা পুত্র; আর সেই নাম আগে কখনো কারও ছিল না। চাওয়ার চেয়ে পাওয়া এত বেশি হলো যে, একে কাকতালীয় ভাবার কোনো উপায় রইল না।" },
          { en: "He asked how, given his wife's barrenness and the extreme old age he had reached (19:8). The answer reframed the question: your Lord says it is easy for Me, and I created you before, when you were nothing (19:9). His own existence was the precedent. Surah al-Anbiya sums up the same episode with the couple included in the mercy — We answered him, granted him Yahya, and made his wife fit for him (21:90).",
            bn: "তিনি জিজ্ঞেস করলেন, এ কীভাবে হবে, যখন তাঁর স্ত্রী বন্ধ্যা আর তিনি নিজে বার্ধক্যের শেষ সীমায় পৌঁছে গেছেন (19:8)। উত্তরটি প্রশ্নটাকেই অন্যভাবে দেখতে শেখাল: তোমার প্রভু বলেন, এ আমার জন্য সহজ; আমি তো আগে তোমাকেই সৃষ্টি করেছি, যখন তুমি কিছুই ছিলে না (19:9)। তাঁর নিজের অস্তিত্বই ছিল নজির। সূরা আল-আম্বিয়া একই ঘটনার সারকথা বলে, আর সেখানে রহমতের মধ্যে স্বামী-স্ত্রী দুজনেই আছেন: আমি তাঁর ডাকে সাড়া দিলাম, তাঁকে ইয়াহইয়া দান করলাম এবং তাঁর স্ত্রীকে তাঁর জন্য উপযোগী করে দিলাম (21:90)।" },
        ],
      },
      {
        h: { en: "Three Days Without Speech", bn: "তিন দিনের নীরবতা" },
        p: [
          { en: "He asked for a sign, and was told: your sign is that you will not speak to people for three nights, though sound in body (19:10). Surah Ali 'Imran states it as three days, except by gesture, and adds the instruction that fills the silence — remember your Lord much, and glorify Him in the evening and the morning (3:41). The tongue was closed to people and left open to Allah.",
            bn: "তিনি একটি নিদর্শন চাইলেন। তাঁকে বলা হলো: তোমার নিদর্শন হলো, সম্পূর্ণ সুস্থ থেকেও তুমি তিন রাত মানুষের সঙ্গে কথা বলবে না (19:10)। সূরা আলে ইমরান বলে তিন দিন, ইশারা ছাড়া কোনো কথা নয়। সেখানে এই নীরবতা ভরে দেওয়ার নির্দেশও আছে: তোমার প্রভুকে বেশি বেশি স্মরণ করো, আর সকাল-সন্ধ্যায় তাঁর তাসবিহ পড়ো (3:41)। জিহ্বা মানুষের জন্য বন্ধ হলো, আল্লাহর জন্য খোলা রইল।" },
          { en: "So he came out to his people from the prayer chamber and signalled to them to glorify Allah morning and evening (19:11). A man who could not explain his own news spent it in dhikr and gestured others toward the same. The last picture the Quran gives of Zakariya is a servant unable to speak and still teaching. His life answers a question every believer asks: whether a prayer long unanswered has been heard. It had been heard from the beginning; only the timing belonged to Allah.",
            bn: "তারপর তিনি ইবাদতকক্ষ থেকে বেরিয়ে নিজের সম্প্রদায়ের কাছে এলেন, আর ইশারায় বললেন, সকাল-সন্ধ্যায় আল্লাহর তাসবিহ পড়ো (19:11)। নিজের সুখবরটুকুও যিনি মুখে বলতে পারছিলেন না, তিনি সেই সময় কাটালেন জিকিরে, আর অন্যদেরও ইশারায় সেদিকেই ডাকলেন। কুরআনে যাকারিয়ার শেষ ছবিটি এমন এক বান্দার, যিনি কথা বলতে পারছেন না, তবু শিক্ষা দিয়ে চলেছেন। প্রত্যেক মুমিনের মনে একটি প্রশ্ন জাগে, আর তাঁর জীবন তার উত্তর দেয়: অনেক দিন ধরে কবুল না হওয়া দোয়া কি আল্লাহ শুনেছেন? শুনেছেন, একেবারে শুরু থেকেই; শুধু সময়টা ছিল আল্লাহর হাতে।" },
        ],
      },
    ],
  },
  yahya: {
    sections: [
      {
        h: { en: "A Name No One Had Carried", bn: "যে নাম আগে কারও ছিল না" },
        p: [
          { en: "Before he was born he was distinguished by his name. Allah told Zakariya of a boy called Yahya, adding that no one before him had been given that name (19:7). It is a small clause with a large implication: this child was not a continuation of a family line but something newly begun, announced by Allah rather than chosen by a parent.",
            bn: "জন্মের আগেই তাঁর নাম তাঁকে আলাদা করে দিয়েছিল। আল্লাহ যাকারিয়াকে ইয়াহইয়া নামের এক পুত্রের সুসংবাদ দিলেন, আর সঙ্গে বললেন, এর আগে এই নাম কাউকে দেওয়া হয়নি (19:7)। ছোট্ট একটি কথা, কিন্তু এর অর্থ অনেক বড়। এই শিশু কোনো বংশধারার নিছক পরবর্তী সন্তান ছিলেন না, তিনি ছিলেন নতুন এক সূচনা। তাঁর নাম বাবা-মা বেছে নেননি, ঘোষণা করেছেন আল্লাহ।" },
          { en: "Surah Ali 'Imran adds the descriptions given with the glad tidings: he would confirm a word from Allah, and be a leader, chaste, and a prophet from among the righteous (3:39). Four qualities, fixed before birth. The Quran presents his whole character as a gift bestowed rather than a reputation earned, which is exactly how it will describe his childhood.",
            bn: "সূরা আলে ইমরান সুসংবাদের সঙ্গে দেওয়া গুণগুলোও জানায়: তিনি আল্লাহর পক্ষ থেকে আসা এক বাণীকে সত্য বলে ঘোষণা করবেন; তিনি হবেন নেতা, সংযমী, আর সৎকর্মশীলদের মধ্য থেকে একজন নবী (3:39)। চারটি গুণ, জন্মের আগেই ঠিক করা। কুরআন তাঁর পুরো চরিত্রকে দেখায় আল্লাহর দেওয়া দান হিসেবে, নিজের চেষ্টায় কামানো সুনাম হিসেবে নয়। তাঁর শৈশবের বর্ণনাও কুরআন দেবে ঠিক এভাবেই।" },
        ],
      },
      {
        h: { en: "Take the Scripture With Strength", bn: "কিতাব দৃঢ়ভাবে ধরো" },
        p: [
          { en: "The command comes without preamble: “Yahya, take the Scripture with determination.” And, the verse continues, We gave him judgement while yet a boy (19:12). The Quran does not report a period of training. Wisdom arrives as a grant, in childhood, and the command to hold the Book firmly is addressed to a child capable of obeying it.",
            bn: "আদেশটি আসে কোনো ভূমিকা ছাড়াই: “হে ইয়াহইয়া, কিতাব দৃঢ়ভাবে ধারণ করো।” আয়াতটি আরও বলে, আমি তাঁকে শৈশবেই বিচারবুদ্ধি দিয়েছিলাম (19:12)। কোনো প্রশিক্ষণের সময়ের কথা কুরআন বলে না। প্রজ্ঞা আসে দান হিসেবে, শৈশবেই। আর কিতাব শক্ত করে ধরার আদেশটি দেওয়া হয় এমন এক শিশুকে, যে তা মানতে পারে।" },
          { en: "The word rendered “with determination” carries seriousness and grip. It is not a call to admire the Scripture but to hold it under pressure. Everything later reported about his firmness with rulers rests on this verse: a person who has taken the Book with that grip in childhood is not easily moved by a court in adulthood.",
            bn: "যে শব্দটিকে “দৃঢ়ভাবে” বলে অনুবাদ করা হয়েছে, তাতে আছে গুরুত্ব দেওয়া আর শক্ত করে আঁকড়ে ধরার ভাব। কিতাবকে দূর থেকে তারিফ করতে বলা হচ্ছে না; বলা হচ্ছে, চাপের মুখেও তা ধরে রাখতে। শাসকদের সামনে তাঁর দৃঢ়তা নিয়ে পরে যা কিছু বর্ণিত হয়েছে, তার ভিত্তি এই আয়াত। শৈশবেই যে কিতাবকে এভাবে আঁকড়ে ধরেছে, বড় হয়ে কোনো রাজদরবার তাকে সহজে টলাতে পারে না।" },
        ],
      },
      {
        h: { en: "Tenderness, Purity, Fear of Allah", bn: "কোমলতা, পবিত্রতা, আল্লাহভীতি" },
        p: [
          { en: "The description continues in three short phrases: and tenderness from Us, and purity — and he was God-fearing (19:13). The first is hanan, an affection and compassion given to him as a gift from Allah. It is a striking pairing. Devotion of his intensity might be expected to harden a person, so the Quran records the softness alongside the discipline.",
            bn: "বর্ণনা এগোয় তিনটি ছোট কথায়: আর আমার পক্ষ থেকে কোমলতা ও পবিত্রতা; আর তিনি ছিলেন আল্লাহভীরু (19:13)। প্রথম শব্দটি ‘হানান’: মমতা ও দরদ, যা আল্লাহ নিজের পক্ষ থেকে তাঁকে দান করেছিলেন। জোড়াটি লক্ষ করার মতো। তাঁর মতো গভীর ইবাদত-নিষ্ঠা মানুষকে কঠোর করে তুলতে পারত। তাই কুরআন তাঁর কঠোর সাধনার পাশাপাশি কোমলতার কথাও লিখে রেখেছে।" },
          { en: "Then the social measure: and dutiful to his parents, and he was not a tyrant, disobedient (19:14). The Quran defines his greatness partly by what he was not. He held no arrogance and no rebellion, in an age when both were common among those with religious authority. Honour toward parents is placed in the same verse as the absence of tyranny, because they train the same instinct.",
            bn: "এরপর আসে মানুষের সঙ্গে তাঁর আচরণের কথা: তিনি ছিলেন বাবা-মায়ের অনুগত, উদ্ধত বা অবাধ্য ছিলেন না (19:14)। কুরআন তাঁর মহত্ত্বের খানিকটা বলে দেয়, তিনি কী ছিলেন না তা দিয়ে। তাঁর মধ্যে অহংকার ছিল না, বিদ্রোহ ছিল না। অথচ সে যুগে ধর্মীয় ক্ষমতা যাদের হাতে ছিল, তাদের মধ্যে এ দুটিই ছিল সাধারণ ব্যাপার। বাবা-মায়ের প্রতি সম্মান আর উদ্ধত না হওয়া, দুটিকে একই আয়াতে রাখা হয়েছে, কারণ দুটিই মানুষের একই স্বভাব গড়ে তোলে।" },
        ],
      },
      {
        h: { en: "Confirming a Word From Allah", bn: "আল্লাহর এক বাণীর সত্যায়ন" },
        p: [
          { en: "His prophetic task is summarised in a single phrase: confirming a word from Allah (3:39). The word in question is Isa (AS), whom the Quran elsewhere calls His word which He directed to Maryam (4:171). Yahya's mission was therefore to authenticate the messenger who came alongside him, and to prepare a whole people to recognise him when he came.",
            bn: "তাঁর নবুয়তি দায়িত্ব সংক্ষেপে বলা হয়েছে একটি বাক্যাংশে: আল্লাহর পক্ষ থেকে আগত এক বাণীর সত্যায়নকারী (3:39)। এখানে সেই বাণী হলেন ঈসা (আঃ), যাঁকে কুরআন অন্যত্র বলে তাঁর সেই বাণী, যা তিনি মারইয়ামের কাছে পৌঁছে দিয়েছিলেন (4:171)। সুতরাং ইয়াহইয়ার দায়িত্ব ছিল তাঁর সমসাময়িক রাসূলকে সত্যায়ন করা, আর একটি জাতিকে তাঁকে চিনে নেওয়ার জন্য প্রস্তুত করা।" },
          { en: "The same verse calls him sayyid — a leader whom people look to — and hasur, restrained from appetite. Leadership and self-denial are named together. Surah al-Anbiya groups him with his father in a description of how they worked: they used to hasten to good deeds, and call upon Us in hope and fear, and were humble before Us (21:90).",
            bn: "সেই একই আয়াত তাঁকে বলে ‘সাইয়িদ’, অর্থাৎ এমন নেতা, মানুষ যাঁর দিকে চেয়ে থাকে; আর ‘হাসূর’, অর্থাৎ যিনি প্রবৃত্তির চাহিদা থেকে নিজেকে সংযত রাখেন। নেতৃত্ব আর আত্মসংযমের কথা এসেছে একসঙ্গে। সূরা আল-আম্বিয়া তাঁকে আর তাঁর পিতাকে একসঙ্গে রেখে তাঁদের আমলের ধরন বলে দেয়: তাঁরা নেক কাজে ছুটে যেতেন, আশা ও ভয় নিয়ে আমাকে ডাকতেন, আর আমার সামনে বিনীত থাকতেন (21:90)।" },
        ],
      },
      {
        h: { en: "Peace at Three Stations", bn: "তিন মুহূর্তে শান্তি" },
        p: [
          { en: "The section closes with a benediction: and peace be upon him the day he was born, and the day he dies, and the day he is raised alive (19:15). Three moments a human being cannot control are each sealed with peace. Birth is behind him, death ahead, resurrection beyond both, and the guarantee covers all three at once.",
            bn: "অনুচ্ছেদটি শেষ হয় শান্তির এক ঘোষণা দিয়ে: আর তাঁর প্রতি শান্তি, যেদিন তিনি জন্মেছেন, যেদিন তিনি মারা যাবেন এবং যেদিন তাঁকে জীবিত অবস্থায় ওঠানো হবে (19:15)। মানুষের হাতে নেই এমন তিনটি মুহূর্ত, আর প্রতিটির ওপর শান্তির সিলমোহর। জন্ম পেছনে, মৃত্যু সামনে, পুনরুত্থান দুটিরও পরে; আর এই নিশ্চয়তা একসঙ্গে তিনটিকেই ঘিরে রেখেছে।" },
          { en: "Later in the same surah Isa (AS) speaks the identical formula about himself from the cradle (19:33). Over Yahya, Allah declares it; Isa declares it of himself by Allah's leave. The parallel is deliberate and binds the two cousins together at the point where the surah is most concerned to establish that both are servants.",
            bn: "একই সূরায় পরে ঈসা (আঃ) দোলনা থেকেই নিজের সম্পর্কে হুবহু এই কথা বলেন (19:33)। ইয়াহইয়ার বেলায় ঘোষণাটি দেন আল্লাহ নিজে; ঈসা আল্লাহর অনুমতিতে তা নিজের সম্পর্কে বলেন। এই মিল ইচ্ছা করেই রাখা। এটি দুই আত্মীয়কে এক সুতোয় বাঁধে ঠিক সেই জায়গায়, যেখানে সূরাটি সবচেয়ে জোর দিয়ে প্রতিষ্ঠা করতে চায় যে দুজনেই আল্লাহর বান্দা।" },
        ],
      },
      {
        h: { en: "What the Quran Leaves Unsaid", bn: "কুরআন যা বলেনি" },
        p: [
          { en: "The Quran does not narrate his death. Later reports say he was killed for upholding Allah's law before a ruler, and the Quran's own phrase — the day he dies — is left without commentary. A story told with such care about his childhood ends without a martyrdom scene, and the restraint should be respected rather than filled in.",
            bn: "কুরআন তাঁর মৃত্যুর বিবরণ দেয় না। পরবর্তী কালের বর্ণনায় আছে, এক শাসকের সামনে আল্লাহর বিধানে অটল থাকায় তাঁকে হত্যা করা হয়েছিল। কিন্তু কুরআন নিজে শুধু বলে “যেদিন তিনি মারা যাবেন”, আর কোনো ব্যাখ্যা যোগ করে না। যে কাহিনি তাঁর শৈশব নিয়ে এত যত্নে বলা হয়েছে, তা শেষ হয় কোনো শাহাদাতের দৃশ্য ছাড়াই। এই সংযমকে সম্মান করা উচিত, ফাঁক ভরাট করার চেষ্টা নয়।" },
          { en: "What is given is more than enough to imitate. Purity, tenderness, seriousness about revelation, honour toward parents, and freedom from arrogance are all within reach of an ordinary believer, and Allah listed exactly those qualities when describing a prophet He loved. His name means “he lives,” and the Quran keeps that name honoured wherever it is read.",
            bn: "যা বলা হয়েছে, অনুসরণ করার জন্য তা যথেষ্টের চেয়েও বেশি। পবিত্রতা, কোমলতা, ওহিকে গুরুত্ব দেওয়া, বাবা-মাকে সম্মান করা, অহংকার থেকে মুক্ত থাকা: এর সবই একজন সাধারণ মুমিনের নাগালে। আর আল্লাহ তাঁর প্রিয় এক নবীর বর্ণনায় ঠিক এই গুণগুলোরই তালিকা দিয়েছেন। তাঁর নামের অর্থ “সে বেঁচে থাকে”, আর যেখানেই কুরআন পড়া হয়, সেখানেই কুরআন সেই নামকে সম্মানিত রাখে।" },
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
            bn: "এই কাহিনির শুরু এক প্রজন্ম আগে। আল্লাহ আদম, নূহ, ইবরাহীমের পরিবার আর ইমরানের পরিবারকে সৃষ্টিকুলের ওপর বেছে নিয়েছেন (3:33)। ইমরানের স্ত্রী মানত করলেন, গর্ভের সন্তানকে আল্লাহর কাজে উৎসর্গ করবেন। আর মেয়ে জন্ম নিলে তিনি বললেন, “হে আমার প্রভু, আমি তো মেয়ে প্রসব করেছি” (3:35-36)। তিনি তাঁর নাম রাখলেন মারইয়াম, আর তাঁর ও তাঁর সন্তানদের জন্য আল্লাহর আশ্রয় চাইলেন।" },
          { en: "Allah accepted her graciously, caused her to grow in purity, and placed her in the care of Zakariya (3:37). The chapter is building its case before a single miracle is told: this child was chosen, protected, and raised inside the sanctuary, so that when the impossible was announced to her it reached someone already formed by worship.",
            bn: "আল্লাহ তাঁকে সুন্দরভাবে কবুল করলেন, পবিত্রতার মধ্যে বড় করে তুললেন, আর যাকারিয়ার তত্ত্বাবধানে রাখলেন (3:37)। একটি মুজিযার কথাও বলার আগে সূরাটি ভিত গড়ে নিচ্ছে। এই মেয়েটি ছিলেন বাছাই করা, সুরক্ষিত, আর আল্লাহর ঘরের ভেতরেই প্রতিপালিত। ফলে অসম্ভব সংবাদটি যখন তাঁকে শোনানো হলো, তা পৌঁছাল এমন একজনের কাছে, যাঁকে আগেই ইবাদত গড়ে তুলেছে।" },
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
            bn: "প্রসববেদনা তাঁকে একটি খেজুরগাছের গুঁড়ির কাছে নিয়ে গেল। তিনি বললেন, “হায়, এর আগেই যদি আমি মরে যেতাম, আর মানুষের মন থেকে একেবারে মুছে যেতাম!” (19:23)। তখন নিচ থেকে তাঁকে সান্ত্বনা দেওয়া হলো: তাঁর নিচ দিয়ে একটি ঝরনা বইয়ে দেওয়া হয়েছে। তাঁকে বলা হলো, খেজুরগাছের গুঁড়ি ধরে নিজের দিকে নাড়া দাও, তাজা খেজুর ঝরে পড়বে; খাও, পান করো, চোখ জুড়াও; আর কাউকে দেখলে জানিয়ে দিয়ো, তুমি চুপ থাকার রোজা মানত করেছ (19:24-26)।" },
          { en: "She brought the child to her people and they accused her (19:27-28). She pointed to the infant, and he spoke: “I am the servant of Allah. He has given me the Scripture and made me a prophet, and made me blessed wherever I am, and enjoined upon me prayer and zakah as long as I live, and dutiful to my mother, and He has not made me a tyrant, wretched. And peace is upon me the day I was born, the day I die, and the day I am raised alive” (19:30-33).",
            bn: "তিনি শিশুটিকে নিয়ে নিজের সম্প্রদায়ের কাছে এলেন, আর তারা তাঁকে দোষারোপ করল (19:27-28)। তিনি শিশুর দিকে ইশারা করলেন, আর শিশু ঈসা কথা বলে উঠলেন: “আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং নবী করেছেন। আমি যেখানেই থাকি তিনি আমাকে বরকতময় করেছেন, আর যতদিন বেঁচে থাকি সালাত ও যাকাতের নির্দেশ দিয়েছেন, এবং আমাকে করেছেন মায়ের প্রতি অনুগত; তিনি আমাকে উদ্ধত ও হতভাগা করেননি। আর আমার প্রতি শান্তি যেদিন আমি জন্মেছি, যেদিন আমি মারা যাব এবং যেদিন আমি জীবিত উত্থিত হব” (19:30-33)।" },
        ],
      },
      {
        h: { en: "Signs by Allah's Permission", bn: "আল্লাহর অনুমতিতে নিদর্শন" },
        p: [
          { en: "He was sent to the Children of Israel with signs, and the Quran lists them with one phrase repeated at every step: that he would form from clay the likeness of a bird and breathe into it, and it would become a bird by Allah's permission; heal the blind and the leper; and revive the dead, by Allah's permission (3:49). That qualifier is the point of the verse.",
            bn: "তাঁকে নিদর্শন দিয়ে বনী ইসরাঈলের কাছে পাঠানো হয়েছিল। কুরআন সেগুলোর তালিকা দেয়, আর প্রতিটি ধাপে একই কথা ফিরে ফিরে আসে: তিনি মাটি দিয়ে পাখির আকৃতি বানিয়ে তাতে ফুঁ দেবেন, আর তা আল্লাহর অনুমতিতে পাখি হয়ে যাবে; জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করবেন; আর আল্লাহর অনুমতিতে মৃতকে জীবিত করবেন (3:49)। “আল্লাহর অনুমতিতে”, এই শর্তটিই আয়াতের মূল কথা।" },
          { en: "Surah al-Ma'idah recounts the same favours as blessings Allah reminds him of: the Scripture and wisdom, the Torah and the Injil, the support of the Holy Spirit, and the restraint of those who would have harmed him (5:110). The Injil he was given held guidance and light, and confirmed the Torah that had come before it (5:46).",
            bn: "সূরা আল-মায়িদা সেই একই অনুগ্রহগুলোকে বর্ণনা করে আল্লাহর স্মরণ করিয়ে দেওয়া নিয়ামত হিসেবে: কিতাব ও প্রজ্ঞা, তাওরাত ও ইঞ্জিল, রূহুল কুদুসের সহায়তা, এবং যারা তাঁর ক্ষতি করতে চেয়েছিল তাদের প্রতিহত করা (5:110)। তাঁকে দেওয়া ইঞ্জিলে ছিল হিদায়াত ও আলো, আর তা পূর্ববর্তী তাওরাতকে সত্যায়ন করে (5:46)।" },
        ],
      },
      {
        h: { en: "The Disciples and the Table", bn: "শিষ্যগণ ও দস্তরখান" },
        p: [
          { en: "Sensing disbelief from them, he asked, “Who are my supporters for Allah?” The disciples said, “We are supporters of Allah; we have believed in Allah, so bear witness that we are Muslims” (3:52). The Quran calls them al-Hawariyyun and returns to them later, telling the believers to be supporters of Allah as they were (61:14).",
            bn: "তাদের মধ্যে অবিশ্বাস টের পেয়ে তিনি জিজ্ঞেস করলেন, “আল্লাহর পথে কারা আমার সাহায্যকারী?” শিষ্যরা বললেন, “আমরা আল্লাহর সাহায্যকারী; আমরা আল্লাহর ওপর ঈমান এনেছি, আপনি সাক্ষী থাকুন, আমরা মুসলিম” (3:52)। কুরআন তাঁদের বলে আল-হাওয়ারিয়্যূন। পরে আবার তাঁদের কথা তুলে মুমিনদের বলে, তাঁদের মতো তোমরাও আল্লাহর সাহায্যকারী হও (61:14)।" },
          { en: "Then they asked whether his Lord could send down a table spread from heaven. He answered, “Fear Allah, if you are believers,” and they said they wished their hearts reassured (5:112-113). He prayed for it to be a festival and a sign. Allah replied that He would send it down, but whoever disbelieved afterwards would be punished as no one else had been (5:114-115).",
            bn: "তারপর তাঁরা জানতে চাইলেন, তাঁর প্রভু কি আকাশ থেকে খাবারভরা দস্তরখান নামিয়ে দিতে পারেন। তিনি বললেন, “তোমরা মুমিন হলে আল্লাহকে ভয় করো।” তাঁরা বললেন, তাঁরা চান তাঁদের মন নিশ্চিন্ত হোক (5:112-113)। তিনি দোয়া করলেন, দস্তরখানটি যেন উৎসব আর নিদর্শন হয়। আল্লাহ জানালেন, তিনি তা নামাবেন; তবে এরপর যে কুফরি করবে, তাকে এমন শাস্তি দেবেন, যেমন শাস্তি আর কাউকে দেওয়া হয়নি (5:114-115)।" },
        ],
      },
      {
        h: { en: "What Was Not Done to Him", bn: "তাঁর সাথে যা করা হয়নি" },
        p: [
          { en: "About the end of his earthly life the Quran is explicit, and Muslims hold this as a matter of revelation: they did not kill him, nor did they crucify him, but it was made to appear so to them; those who differ are in doubt, following assumption; they certainly did not kill him (4:157). Rather, Allah raised him to Himself (4:158).",
            bn: "তাঁর দুনিয়ার জীবনের শেষ নিয়ে কুরআন স্পষ্ট কথা বলে, আর মুসলিমরা এটিকে ওহির বিষয় হিসেবেই মানে: তারা তাঁকে হত্যা করেনি, শূলেও চড়ায়নি, বরং তাদের কাছে ব্যাপারটি সেরকম মনে করানো হয়েছিল; যারা এ নিয়ে মতভেদ করে, তারা সন্দেহে পড়ে আছে, শুধু অনুমানের পেছনে চলছে; নিশ্চিতভাবেই তারা তাঁকে হত্যা করেনি (4:157)। বরং আল্লাহ তাঁকে নিজের কাছে তুলে নিয়েছেন (4:158)।" },
          { en: "This is where Islam and Christianity differ most plainly, and the difference is best stated without heat. The concern of the passage is that a servant of Allah was not defeated by a plot: Allah told him He would take him, raise him, and purify him from those who disbelieved (3:55). The People of the Scripture will believe in him before his death (4:159); commentators differ whether the death meant is Isa's or each one's own.",
            bn: "ইসলাম ও খ্রিস্টধর্মের পার্থক্য সবচেয়ে স্পষ্ট এখানেই, আর এই পার্থক্যের কথা উত্তেজনা ছাড়াই বলা ভালো। অনুচ্ছেদটির মূল কথা হলো, আল্লাহর এক বান্দা কোনো ষড়যন্ত্রের কাছে হেরে যাননি: আল্লাহ তাঁকে জানিয়েছিলেন, তিনি তাঁকে নিয়ে নেবেন, নিজের কাছে তুলে নেবেন, আর অবিশ্বাসীদের কাছ থেকে তাঁকে পবিত্র করবেন (3:55)। কুরআন আরও জানায়, কিতাবিরা তাঁর মৃত্যুর আগে তাঁর ওপর ঈমান আনবে (4:159)। এখানে কার মৃত্যুর কথা, ঈসা (আঃ)-এর নাকি প্রত্যেক কিতাবির নিজের, তা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে।" },
        ],
      },
      {
        h: { en: "Servant and Messenger", bn: "বান্দা ও রাসূল" },
        p: [
          { en: "Surah Maryam closes his account with a sentence of great weight: that is Isa son of Maryam — the word of truth about which they are in dispute; it is not for Allah to take a son; exalted is He (19:34-35). Surah al-Ma'idah puts it in human terms: the Messiah was no more than a messenger, and his mother a woman of truth — they both used to eat food (5:75).",
            bn: "সূরা মারইয়াম তাঁর কাহিনি শেষ করে খুব ভারী একটি কথায়: ইনিই মারইয়ামের পুত্র ঈসা; এই হলো সত্য কথা, যা নিয়ে তারা বিতর্ক করে। সন্তান গ্রহণ করা আল্লাহর কাজ নয়; তিনি পবিত্র, মহান (19:34-35)। সূরা আল-মায়িদা কথাটি বলে মানুষের চেনা ভাষায়: মসীহ একজন রাসূল ছাড়া আর কিছু নন, তাঁর মা ছিলেন সত্যনিষ্ঠ নারী; তাঁরা দুজনেই খাবার খেতেন (5:75)।" },
          { en: "The Quran records his answer on the Day of Resurrection, asked whether he told people to take him and his mother as gods: “Glory be to You; it was not for me to say what I had no right to say... I said nothing except what You commanded me: worship Allah, my Lord and your Lord” (5:116-117). The comparison offered is with Adam, created from dust by the word “Be” (3:59). He announced a messenger to come after him named Ahmad (61:6), and his coming is knowledge of the Hour (43:61).",
            bn: "কিয়ামতের দিন তাঁকে জিজ্ঞেস করা হবে, তিনি কি মানুষকে বলেছিলেন আল্লাহকে ছেড়ে তাঁকে ও তাঁর মাকে উপাস্য বানাতে। কুরআন সেদিনের তাঁর উত্তরও জানিয়ে রেখেছে: “আপনি পবিত্র! যা বলার অধিকার আমার নেই, তা বলা আমার কাজ নয়... আপনি আমাকে যা আদেশ করেছেন, তার বাইরে আমি তাদের কিছুই বলিনি: আল্লাহর ইবাদত করো, যিনি আমার প্রভু ও তোমাদের প্রভু” (5:116-117)। কুরআন তাঁর তুলনা দেয় আদমের সঙ্গে, যাঁকে মাটি থেকে “হও” কথাটি দিয়ে সৃষ্টি করা হয়েছিল (3:59)। তিনি তাঁর পরে আসা এক রাসূলের সুসংবাদ দিয়েছিলেন, যাঁর নাম আহমাদ (61:6)। আর তাঁর আগমন কিয়ামতের জ্ঞান (43:61)।" },
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
            bn: "তিনি একাকী ইবাদতের জন্য হেরা গুহায় চলে যেতেন। প্রায় চল্লিশ বছর বয়সে সেখানেই ফেরেশতা এসে আদেশ দিলেন: “পড়ো তোমার প্রভুর নামে, যিনি সৃষ্টি করেছেন — সৃষ্টি করেছেন মানুষকে জমাট রক্ত থেকে। পড়ো, আর তোমার প্রভু পরম দানশীল, যিনি কলম দিয়ে শিখিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না” (96:1-5)। তিনি কাঁপতে কাঁপতে ঘরে ফিরলেন। খাদিজা (রাঃ) তাঁকে চাদরে ঢেকে দিলেন, অভয় দিলেন।" },
          { en: "Her words, preserved in Sahih al-Bukhari, were an argument rather than mere comfort: Allah would never disgrace him, for he kept ties of kinship, carried the burdens of the weak, and helped the afflicted. She took him to her cousin Waraqah ibn Nawfal, who heard the account from him directly and recognised the angel as the one sent to Musa (AS). Then came the second call: “O you who covers himself, arise and warn” (74:1-2).",
            bn: "সহিহ বুখারিতে তাঁর যে কথাগুলো সংরক্ষিত আছে, তা নিছক সান্ত্বনা ছিল না, ছিল যুক্তি: আল্লাহ কখনো আপনাকে লাঞ্ছিত করবেন না, কারণ আপনি আত্মীয়তার সম্পর্ক রক্ষা করেন, দুর্বলের বোঝা বহন করেন, বিপদগ্রস্তকে সাহায্য করেন। এরপর তিনি তাঁকে নিয়ে গেলেন নিজের চাচাতো ভাই ওয়ারাকা ইবনে নাওফালের কাছে। ওয়ারাকা তাঁর নিজের মুখে পুরো ঘটনা শুনলেন এবং ফেরেশতাকে চিনতে পারলেন: ইনি সেই ফেরেশতা, যাঁকে মূসা (আঃ)-এর কাছে পাঠানো হয়েছিল। তারপর এল দ্বিতীয় আহ্বান: “হে বস্ত্রাবৃত, ওঠো এবং সতর্ক করো” (74:1-2)।" },
        ],
      },
      {
        h: { en: "Thirteen Years Under Pressure", bn: "চাপের মুখে তেরো বছর" },
        p: [
          { en: "When he was ordered to warn his nearest kindred (26:214), the opposition turned personal. The weak among the believers were tortured — Bilal and the family of Sumayyah among them, as Ibn Hisham and Ibn Sa'd record — and a group migrated to Abyssinia. His own clan was placed under a boycott in the valley until it collapsed under its own injustice.",
            bn: "নিকটাত্মীয়দের সতর্ক করার আদেশ আসার পর (26:214) বিরোধিতা ব্যক্তিগত আক্রমণে রূপ নিল। মুমিনদের মধ্যে যারা দুর্বল, তাদের ওপর নির্যাতন নেমে এল; ইবনে হিশাম ও ইবনে সাদের বর্ণনায় তাঁদের মধ্যে আছেন বিলাল ও সুমাইয়ার পরিবার। একটি দল আবিসিনিয়ায় হিজরত করল। তাঁর নিজের গোত্রকে উপত্যকায় অবরুদ্ধ করে বয়কট করা হলো। শেষে সেই বয়কট নিজের অন্যায়ের ভারেই ভেঙে পড়ল।" },
          { en: "Then Khadijah (RA) and Abu Talib died in the same period, and he went to Ta'if seeking support and was driven out. Sahih al-Bukhari and Sahih Muslim record what followed: the angel of the mountains offered to crush the town, and he refused, hoping Allah would bring from their descendants people who worship Him alone.",
            bn: "এরপর একই সময়কালে খাদিজা (রাঃ) ও আবু তালিব ইন্তেকাল করেন, আর তিনি সাহায্যের আশায় তায়েফে যান, সেখান থেকেও বিতাড়িত হন। সহিহ বুখারি ও সহিহ মুসলিম বর্ণনা করে এরপর কী ঘটেছিল: পাহাড়ের ফেরেশতা প্রস্তাব দেন জনপদটিকে পিষে দেওয়ার, আর তিনি তা প্রত্যাখ্যান করে বলেন, তিনি আশা করেন আল্লাহ তাদের বংশধর থেকে এমন মানুষ বের করবেন যারা কেবল তাঁরই ইবাদত করবে।" },
        ],
      },
      {
        h: { en: "The Night Journey and the Hijrah", bn: "রাতের সফর ও হিজরত" },
        p: [
          { en: "In that period of loss came the Night Journey: exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs (17:1). Surah an-Najm describes what he was shown at the furthest limit (53:13-18). The five daily prayers were made obligatory that night.",
            bn: "স্বজন হারানোর সেই কঠিন সময়েই এল রাতের সফর, ইসরা: পবিত্র মহান তিনি, যিনি তাঁর বান্দাকে রাতের বেলা মসজিদুল হারাম থেকে মসজিদুল আকসায় নিয়ে গেলেন, যার চারপাশ আমি বরকতময় করেছি, যাতে তাঁকে আমার কিছু নিদর্শন দেখাই (17:1)। সর্বশেষ সীমানায় তাঁকে যা দেখানো হয়েছিল, সূরা আন-নাজম তার বর্ণনা দেয় (53:13-18)। সেই রাতেই পাঁচ ওয়াক্ত সালাত ফরজ হয়।" },
          { en: "Pledges from the people of Yathrib opened a way out, and the believers migrated. He was among the last to leave, with Abu Bakr (RA), and the Quran recalls the cave where the two were hidden and the words spoken there: do not grieve; indeed Allah is with us (9:40). Yathrib became al-Madinah, and the Islamic calendar counts from that departure, not from any victory.",
            bn: "ইয়াসরিবের লোকদের বাইআত মক্কা থেকে বেরোনোর পথ খুলে দিল, আর মুমিনরা হিজরত করলেন। তিনি বের হলেন একেবারে শেষ দিকে, আবু বকর (রাঃ)-কে সঙ্গে নিয়ে। কুরআন সেই গুহার কথা মনে করিয়ে দেয়, যেখানে দুজন লুকিয়ে ছিলেন, আর সেখানে বলা কথাটিও: দুঃখ করো না, নিশ্চয়ই আল্লাহ আমাদের সঙ্গে আছেন (9:40)। ইয়াসরিব হয়ে উঠল আল-মদিনা। আর ইসলামি বর্ষপঞ্জির গোনা শুরু হয় সেই যাত্রা থেকে, কোনো বিজয় থেকে নয়।" },
        ],
      },
      {
        h: { en: "Brotherhood and Charter", bn: "ভ্রাতৃত্ব ও সনদ" },
        p: [
          { en: "In Madinah he built a mosque and then rebuilt a society. He paired each Muhajir with an Ansari in formal brotherhood, and the Quran later praised the hosts: they love those who emigrated to them and find in their hearts no want of what they were given, preferring others over themselves even in poverty (59:9).",
            bn: "মদিনায় তিনি প্রথমে একটি মসজিদ গড়লেন, তারপর নতুন করে গড়লেন একটি সমাজ। প্রত্যেক মুহাজিরকে তিনি একজন আনসারির সঙ্গে আনুষ্ঠানিক ভ্রাতৃত্বের বন্ধনে জুড়ে দিলেন। পরে কুরআন আশ্রয়দাতাদের প্রশংসা করল: যারা তাদের কাছে হিজরত করে এসেছে, তারা তাদের ভালোবাসে; ওদের যা দেওয়া হয়েছে, তার জন্য নিজেদের মনে কোনো চাহিদা বোধ করে না; আর নিজেরা অভাবে থাকলেও অন্যদের নিজেদের ওপর প্রাধান্য দেয় (59:9)।" },
          { en: "He then issued the document Ibn Hisham preserves as the Sahifah — the charter of Madinah — binding the Muhajirun, the Ansar and the Jewish tribes into one political community, with mutual defence, shared costs, freedom of religion, and disputes referred to the Prophet ﷺ. It is the earliest constitution of the Muslim state, governing a plural city rather than trying to remove it.",
            bn: "এরপর তিনি একটি লিখিত দলিল জারি করলেন, যা ইবনে হিশাম ‘সহিফা’ নামে সংরক্ষণ করেছেন; এটিই মদিনার সনদ। এই দলিল মুহাজির, আনসার ও ইহুদি গোত্রগুলোকে একটি রাজনৈতিক সমাজে বাঁধল: সবাই মিলে প্রতিরক্ষা, খরচের ভাগাভাগি, ধর্মের স্বাধীনতা, আর বিরোধ হলে নবী ﷺ-এর কাছে মীমাংসা। এটিই মুসলিম রাষ্ট্রের প্রথম সংবিধান। শহরের বৈচিত্র্য মুছে ফেলার চেষ্টা না করে, এটি বহু সম্প্রদায়ের শহরটিকে সেভাবেই পরিচালনা করেছে।" },
        ],
      },
      {
        h: { en: "Badr, Uhud, the Trench, Hudaybiyah", bn: "বদর, উহুদ, খন্দক, হুদাইবিয়া" },
        p: [
          { en: "At Badr a small, poorly equipped force was given victory, and the Quran ties the lesson to gratitude: Allah had already given you victory at Badr while you were few (3:123). At Uhud the same army suffered reverses after archers left their post, and the Quran analyses the defeat frankly (3:152). At the Trench, eyes shifted and hearts reached the throats (33:10).",
            bn: "বদরে অল্প লোকের, অস্ত্রশস্ত্রে দুর্বল একটি বাহিনীকে বিজয় দেওয়া হলো, আর কুরআন এর শিক্ষাকে জুড়ে দিল শুকরিয়ার সঙ্গে: আল্লাহ তো বদরে তোমাদের বিজয় দিয়েছেন, যখন তোমরা ছিলে সংখ্যায় অল্প (3:123)। উহুদে সেই একই বাহিনী বিপর্যয়ে পড়ল, যখন তিরন্দাজরা নিজেদের জায়গা ছেড়ে দিল; কুরআন সেই পরাজয়ের কারণ খোলাখুলি বিশ্লেষণ করল (3:152)। খন্দকে চোখ বিস্ফারিত হয়ে গিয়েছিল, প্রাণ উঠে এসেছিল কণ্ঠনালিতে (33:10)।" },
          { en: "Then came Hudaybiyah, where he accepted terms his companions found painful — a delayed pilgrimage, clauses that looked one-sided — and the revelation that followed called it what it was: indeed We have given you a clear victory (48:1). The following year the dream that preceded it was fulfilled and the sanctuary was entered in security (48:27).",
            bn: "তারপর এল হুদাইবিয়া। সেখানে তিনি এমন সব শর্ত মেনে নিলেন, যা তাঁর সাহাবিদের কাছে কষ্টকর ঠেকেছিল: উমরা পিছিয়ে যাওয়া, একতরফা মনে হওয়া কিছু ধারা। কিন্তু এরপর নাজিল হওয়া ওহি ঘটনাটিকে তার আসল নামে ডাকল: নিশ্চয়ই আমি তোমাকে সুস্পষ্ট বিজয় দান করেছি (48:1)। পরের বছর এর আগে দেখা স্বপ্নটি সত্য হলো, আর মুসলিমরা নিরাপদে পবিত্র মসজিদে প্রবেশ করলেন (48:27)।" },
        ],
      },
      {
        h: { en: "The Conquest, the Farewell, the Seal", bn: "বিজয়, বিদায় ও নবুয়তের সমাপ্তি" },
        p: [
          { en: "Mecca — the city that had tortured, boycotted and expelled him — was taken almost without bloodshed. Ibn Ishaq records that he rode in with his head bowed so low it nearly touched the saddle. He cleared the Ka'bah of its idols, reciting: truth has come and falsehood has vanished (17:81). Then, as Ibn Hisham preserves it, he told the Quraysh they were free to go. Surah an-Nasr had framed the moment as a call to praise and seek forgiveness (110:1-3).",
            bn: "যে মক্কা তাঁকে নির্যাতন করেছিল, বয়কট করেছিল, শহর থেকে তাড়িয়ে দিয়েছিল, সেই মক্কা জয় হলো প্রায় বিনা রক্তপাতে। ইবনে ইসহাক বর্ণনা করেন, তিনি শহরে ঢুকেছিলেন এত নিচু করে মাথা নুইয়ে যে, তা প্রায় বাহনের গদি ছুঁয়ে যাচ্ছিল। তিনি কাবাকে মূর্তিমুক্ত করলেন, আর তিলাওয়াত করছিলেন: সত্য এসেছে, মিথ্যা বিলুপ্ত হয়েছে (17:81)। এরপর, ইবনে হিশামের বর্ণনায়, তিনি কুরাইশদের বললেন, তোমরা মুক্ত, যেতে পারো। সূরা আন-নাসর আগেই এই মুহূর্তটিকে চিহ্নিত করে রেখেছিল আল্লাহর প্রশংসা আর ইস্তিগফারের ডাক হিসেবে (110:1-3)।" },
          { en: "At the Farewell Pilgrimage he addressed the largest gathering of his life. Sahih Muslim preserves Jabir's (RA) account: he declared their blood and property inviolable, cancelled the blood feuds and the interest of the age of ignorance beginning with his own family, charged the people to treat women well, and left among them the Book of Allah. There came the verse: today I have perfected for you your religion (5:3).",
            bn: "বিদায় হজে তিনি জীবনের সবচেয়ে বড় সমাবেশে ভাষণ দিলেন। সহিহ মুসলিমে জাবির (রাঃ)-এর বর্ণনা সংরক্ষিত আছে: তিনি ঘোষণা করলেন, মানুষের রক্ত ও সম্পদ পবিত্র, তাতে হাত দেওয়া হারাম। জাহেলি যুগের রক্তের দাবি আর সুদ বাতিল করলেন, আর শুরু করলেন নিজের পরিবারের পাওনা দিয়েই। নারীদের সঙ্গে সদাচরণ করতে বললেন, আর তাদের মাঝে রেখে গেলেন আল্লাহর কিতাব। সেখানেই নাজিল হলো আয়াত: আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম (5:3)।" },
          { en: "He died in Madinah not long after, and Abu Bakr (RA) steadied the community by reciting 3:144 — Muhammad is a messenger, and messengers have passed away before him. Two verses hold his place: he is not the father of any of your men, but the Messenger of Allah and the seal of the prophets (33:40); and We have not sent you except as a mercy to the worlds (21:107).",
            bn: "এর অল্প কিছুদিন পরেই তিনি মদিনায় ইন্তেকাল করেন। তখন আবু বকর (রাঃ) 3:144 তিলাওয়াত করে উম্মাহকে স্থির রাখেন: মুহাম্মাদ একজন রাসূল, তাঁর আগেও বহু রাসূল গত হয়েছেন। তাঁর মর্যাদা ধরে আছে দুটি আয়াত: তিনি তোমাদের কোনো পুরুষের পিতা নন, বরং আল্লাহর রাসূল এবং খাতামুন নাবিয়্যিন, সর্বশেষ নবী (33:40); আর আমি তোমাকে বিশ্বজগতের জন্য কেবল রহমত হিসেবেই পাঠিয়েছি (21:107)।" },
        ],
      },
    ],
  },
  yaqub: {
    sections: [
      {
        h: { en: "The Middle of the Chain", bn: "বংশধারার মাঝখানে" },
        p: [
          {
            en: "Ya'qub (AS) stands in the middle of a chain the Quran names again and again. He was the son of Ishaq and the grandson of Ibrahim, and the Book presents him as a gift announced in advance: 21:72 says Allah gave Ibrahim both Ishaq and Ya'qub in addition, and 29:27 says He placed prophethood and the Scripture among his descendants. 19:49 records that He made each of them a prophet.",
            bn: "ইয়াকুব (আঃ) এমন এক বংশধারার মাঝখানে, যার নাম কুরআন বারবার নেয়। তিনি ইসহাকের পুত্র, ইবরাহীমের পৌত্র। কুরআন তাঁকে দেখায় আগে থেকে ঘোষিত এক দান হিসেবে: 21:72 আয়াতে আছে, আল্লাহ ইবরাহীমকে দিলেন ইসহাক, আর বাড়তি দান হিসেবে ইয়াকুব; 29:27 আয়াতে আছে, তিনি তাঁর বংশধরদের মধ্যে নবুয়ত ও কিতাব রেখেছেন। আর 19:49 আয়াত জানায়, তিনি তাঁদের প্রত্যেককে নবী বানিয়েছেন।",
          },
          {
            en: "He is also called Israel, and the sons of his household became the tribes the Quran addresses through the rest of the Book as the Children of Israel. 2:136 teaches the believers to affirm what was revealed to Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants, making no distinction between them, and 6:84 counts him among those Allah guided. Yet his own life is told mostly through the loss of a single son.",
            bn: "তাঁর আরেক নাম ইসরাঈল। তাঁর ঘরের পুত্রদের থেকেই এসেছে সেই গোত্রগুলো, কুরআন পুরো গ্রন্থজুড়ে যাদের ডাকে বনী ইসরাঈল বলে। 2:136 আয়াত মুমিনদের শেখায়, ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁর বংশধরদের ওপর যা নাজিল হয়েছে, সবই মেনে নিতে, তাঁদের কারও মধ্যে পার্থক্য না করে। আর 6:84 আয়াত তাঁকে গণ্য করে আল্লাহর হিদায়াত পাওয়া মানুষদের মধ্যে। তবু তাঁর নিজের জীবনের কথা কুরআন বলে মূলত একটি পুত্রকে হারানোর গল্প দিয়ে।",
          },
        ],
      },
      {
        h: { en: "The Father Who Read a Dream", bn: "যে বাবা স্বপ্নের মানে বুঝেছিলেন" },
        p: [
          {
            en: "Sura Yusuf opens inside his house. A boy comes to his father with a dream of eleven stars and the sun and the moon prostrating to him (12:4). Ya'qub neither dismisses it nor celebrates it. He tells the boy not to relate the vision to his brothers, warning that Satan is a clear enemy to man (12:5), then reads the dream in a sentence: his Lord would choose Yusuf, teach him the interpretation of narratives, and complete His favour upon the family of Ya'qub (12:6).",
            bn: "সূরা ইউসুফ শুরু হয় তাঁরই ঘরে। এক বালক বাবার কাছে এসে স্বপ্নের কথা বলল: এগারোটি তারা, সূর্য আর চাঁদ তাকে সিজদা করছে (12:4)। ইয়াকুব কথাটা উড়িয়েও দিলেন না, তা নিয়ে উচ্ছ্বসিতও হলেন না। ছেলেকে বললেন, স্বপ্নটি ভাইদের কাছে বোলো না; সাবধান করলেন, শয়তান মানুষের প্রকাশ্য শত্রু (12:5)। তারপর এক বাক্যেই স্বপ্নের অর্থ বলে দিলেন: তোমার প্রভু তোমাকে বেছে নেবেন, ঘটনাবলির ব্যাখ্যা শেখাবেন, আর ইয়াকুবের পরিবারের ওপর তাঁর নিয়ামত পূর্ণ করবেন (12:6)।",
          },
          {
            en: "That is a prophet's insight and a father's realism at once. He knew what jealousy could do inside his own home; 12:8 records the brothers complaining that Yusuf and his brother were dearer to their father than they were. When they asked to take the boy out to play, he answered that their taking him away grieved him and that he feared a wolf would eat him while they were heedless (12:11-13).",
            bn: "এখানে একসঙ্গে দেখা যায় নবীর অন্তর্দৃষ্টি আর বাবার বাস্তববুদ্ধি। নিজের ঘরের ভেতর হিংসা কী করতে পারে, তা তিনি জানতেন। 12:8 আয়াতে ভাইদের অভিযোগ আছে: ইউসুফ আর তার ভাই বাবার কাছে আমাদের চেয়ে বেশি প্রিয়। তারা যখন ছেলেটিকে খেলতে নিয়ে যেতে চাইল, তিনি বললেন, তোমরা ওকে নিয়ে গেলে আমার কষ্ট হয়; আর আমার ভয় হয়, তোমরা অসতর্ক থাকবে আর নেকড়ে ওকে খেয়ে ফেলবে (12:11-13)।",
          },
        ],
      },
      {
        h: { en: "Beautiful Patience", bn: "সুন্দর ধৈর্য" },
        p: [
          {
            en: "They came back at nightfall weeping, with his shirt stained by false blood (12:16-18). His reply became one of the most quoted sentences in the Quran: rather, your souls have enticed you to something, so beautiful patience — and Allah is the One whose help is sought against what you describe (12:18). Sabr jamil is patience with no complaint poured out before people, which is why the sentence turns past his sons and addresses Allah.",
            bn: "রাত নামলে তারা কাঁদতে কাঁদতে ফিরল, হাতে মিথ্যা রক্তমাখা জামা (12:16-18)। তাঁর জবাব কুরআনের সবচেয়ে বেশি উদ্ধৃত বাক্যগুলোর একটি হয়ে আছে: বরং তোমাদের মন তোমাদের জন্য একটি ব্যাপার সাজিয়ে দিয়েছে; সুতরাং সুন্দর ধৈর্যই শ্রেয়, আর তোমরা যা বলছ, সে ব্যাপারে আল্লাহর কাছেই সাহায্য চাওয়া যায় (12:18)। সবরে জামীল মানে এমন ধৈর্য, যাতে মানুষের সামনে কোনো অভিযোগ ঢেলে দেওয়া হয় না। তাই বাক্যটি ছেলেদের পেরিয়ে সরাসরি আল্লাহর দিকে ফেরে।",
          },
          {
            en: "Years later the same composure returns. Asked to send Binyamin, he says he will not trust them with him as he trusted them with his brother before, then adds at once that Allah is the best guardian and the most merciful of the merciful (12:64). Sending them at last, he advises them to enter by separate gates and corrects himself so the advice is not mistaken for control: the decision belongs to Allah alone (12:67).",
            bn: "বহু বছর পরে আবার দেখা যায় সেই একই স্থির মন। বিনইয়ামিনকে পাঠাতে বলা হলে তিনি বলেন, এর আগে তার ভাইয়ের ব্যাপারে তোমাদের যেমন বিশ্বাস করেছিলাম, তেমন বিশ্বাস এবার আর করব না। সঙ্গে সঙ্গে যোগ করেন, আল্লাহই সবচেয়ে ভালো রক্ষক, আর তিনিই দয়ালুদের মধ্যে সবচেয়ে বড় দয়ালু (12:64)। শেষে যখন পাঠালেন, তখন পরামর্শ দিলেন আলাদা আলাদা দরজা দিয়ে ঢুকতে; আর সঙ্গে সঙ্গে নিজেই শুধরে দিলেন, যাতে পরামর্শটাকে নিয়ন্ত্রণ বলে ভুল না হয়: ফয়সালা কেবল আল্লাহরই (12:67)।",
          },
        ],
      },
      {
        h: { en: "Grief Without Despair", bn: "শোক আছে, হতাশা নেই" },
        p: [
          {
            en: "When Binyamin too was kept back in Egypt, he turned away from his sons and said, oh my sorrow over Yusuf — and his eyes turned white from grief, and he was suppressing it (12:84). His sons told him he would not stop remembering Yusuf until he was fatally ill or dead (12:85). His answer draws the line between grief and complaint: I complain of my anguish and my sorrow only to Allah, and I know from Allah what you do not know (12:86).",
            bn: "বিনইয়ামিনকেও যখন মিশরে আটকে রাখা হলো, তিনি ছেলেদের দিক থেকে মুখ ফিরিয়ে বললেন, হায় ইউসুফের জন্য আমার আফসোস! শোকে তাঁর চোখ সাদা হয়ে গেল, তবু তিনি কষ্ট চেপে রাখতেন (12:84)। ছেলেরা বলল, আপনি ইউসুফকে মনে করা ছাড়বেন না, যতক্ষণ না একেবারে মরণাপন্ন হন বা মারা যান (12:85)। তাঁর জবাব শোক আর অভিযোগের মাঝখানে একটি রেখা টেনে দেয়: আমি আমার দুঃখ-বেদনার অভিযোগ কেবল আল্লাহর কাছেই করি, আর আল্লাহর পক্ষ থেকে আমি এমন কিছু জানি, যা তোমরা জানো না (12:86)।",
          },
          {
            en: "Then he sent them back with an instruction that is itself a creed: go and seek news of Yusuf and his brother, and do not despair of the mercy of Allah, for none despairs of Allah's mercy except the disbelieving people (12:87). Despair is placed on the far side of faith. A man who had wept for decades was still telling his sons the door stood open, because he had never treated the loss as final.",
            bn: "তারপর তিনি তাদের আবার পাঠালেন এমন এক নির্দেশ দিয়ে, যা নিজেই একটি আকিদা: যাও, ইউসুফ ও তার ভাইয়ের খোঁজ করো, আর আল্লাহর রহমত থেকে নিরাশ হয়ো না; কাফির সম্প্রদায় ছাড়া আর কেউ আল্লাহর রহমত থেকে নিরাশ হয় না (12:87)। হতাশাকে এখানে ঈমানের সীমানার ওপারে রাখা হয়েছে। যে মানুষটি কয়েক দশক ধরে কেঁদেছেন, তিনিই ছেলেদের বলছেন, দরজা এখনো খোলা। কারণ এই হারানোকে তিনি কখনো শেষ কথা বলে মেনে নেননি।",
          },
        ],
      },
      {
        h: { en: "The Scent of the Shirt", bn: "জামার ঘ্রাণ" },
        p: [
          {
            en: "As the caravan left Egypt he said he could sense the scent of Yusuf, and his household told him he was in his old error (12:94-95). When the bearer of good news arrived and cast the shirt over his face, his sight returned, and he said: did I not tell you that I know from Allah what you do not know (12:96)? The claim he had made in the depth of grief was verified in relief, in the same words.",
            bn: "কাফেলা মিশর ছাড়তেই তিনি বললেন, আমি ইউসুফের ঘ্রাণ পাচ্ছি। ঘরের লোকেরা বলল, আপনি তো আপনার সেই পুরোনো ভুলেই পড়ে আছেন (12:94-95)। সুসংবাদদাতা এসে জামাটি যখন তাঁর মুখের ওপর রাখল, তাঁর দৃষ্টি ফিরে এল। তিনি বললেন: আমি কি তোমাদের বলিনি, আল্লাহর পক্ষ থেকে আমি এমন কিছু জানি, যা তোমরা জানো না (12:96)? গভীর শোকের মধ্যে যে কথা তিনি বলেছিলেন, স্বস্তির দিনে সেই একই কথায় তা সত্য প্রমাণিত হলো।",
          },
          {
            en: "His sons asked him to seek forgiveness for them, and he promised to ask his Lord's forgiveness for them (12:97-98). The family travelled to Egypt, Yusuf raised his parents onto the throne, and they fell before him in prostration, and Yusuf said his Lord had made his old dream come true (12:99-100). What Ya'qub had understood in a single verse decades earlier arrived exactly as he had read it.",
            bn: "ছেলেরা তাঁকে অনুরোধ করল তাদের জন্য ক্ষমা চাইতে, আর তিনি কথা দিলেন, প্রভুর কাছে তাদের জন্য ক্ষমা চাইবেন (12:97-98)। পরিবারটি মিশরে গেল। ইউসুফ বাবা-মাকে সিংহাসনে তুলে বসালেন, সবাই তাঁর সামনে সিজদায় লুটিয়ে পড়ল, আর ইউসুফ বললেন, আমার প্রভু আমার সেই পুরোনো স্বপ্নকে সত্য করে দিয়েছেন (12:99-100)। কয়েক দশক আগে ইয়াকুব একটিমাত্র আয়াতে যা বুঝেছিলেন, ঘটনা ঘটল ঠিক সেভাবেই।",
          },
        ],
      },
      {
        h: { en: "The Charge at the End", bn: "শেষ ওসিয়ত" },
        p: [
          {
            en: "The Quran does not close his account with a scene of loss. It closes with a question. Ibrahim charged his sons with this, and so did Ya'qub: my sons, Allah has chosen for you this religion, so do not die except as Muslims (2:132). Then comes the scene itself — were you witnesses when death approached Ya'qub, when he said to his sons, what will you worship after me (2:133)?",
            bn: "কুরআন তাঁর কাহিনি কোনো শোকের দৃশ্য দিয়ে শেষ করে না; শেষ করে একটি প্রশ্ন দিয়ে। ইবরাহীম তাঁর ছেলেদের এই ওসিয়ত করেছিলেন, ইয়াকুবও করেছিলেন: হে আমার ছেলেরা, আল্লাহ তোমাদের জন্য এই দ্বীন বেছে দিয়েছেন, সুতরাং মুসলিম না হয়ে মরো না (2:132)। তারপর আসে দৃশ্যটি: তোমরা কি উপস্থিত ছিলে, যখন ইয়াকুবের মৃত্যু ঘনিয়ে এল, যখন তিনি ছেলেদের বললেন, আমার পরে তোমরা কার ইবাদত করবে (2:133)?",
          },
          {
            en: "Their answer was that they would worship the God of their father and of his fathers Ibrahim, Isma'il and Ishaq — one God, and to Him they submit (2:133). A man who had lost a son and found him again spent his last strength not on property, and not on the inheritance of twelve tribes, but on whether they would keep tawhid after him. That, and not the reunion in Egypt, is where the Quran leaves him.",
            bn: "তারা জবাব দিল, তারা ইবাদত করবে তাদের পিতার ইলাহের, আর তাঁর পূর্বপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহের; তিনি একক ইলাহ, আর তারা তাঁরই কাছে আত্মসমর্পণকারী (2:133)। যে মানুষটি এক ছেলেকে হারিয়ে আবার ফিরে পেয়েছিলেন, তিনি জীবনের শেষ শক্তিটুকু খরচ করলেন সম্পত্তির চিন্তায় নয়, বারো গোত্রের উত্তরাধিকার নিয়েও নয়; তাঁর চিন্তা ছিল, তাঁর পরে তারা তাওহিদ ধরে রাখবে কি না। মিশরের পুনর্মিলন নয়, এখানেই কুরআন তাঁকে রেখে যায়।",
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
            bn: "তিনি ইয়াকুবের পুত্র, ইয়াকুব ইসহাকের পুত্র, ইসহাক ইবরাহীমের পুত্র। বুখারিতে বর্ণিত এক হাদিসে নবী ﷺ তাঁর পরিচয় দিয়েছেন এভাবে: সম্মানিত, সম্মানিতের পুত্র, তিনিও সম্মানিতের পুত্র, তিনিও সম্মানিতের পুত্র। কাহিনি শুরু হয় এক বালকের স্বপ্ন দিয়ে: এগারোটি তারা, সূর্য আর চাঁদ তাকে সিজদা করছে (12:4)। আর আছে বাবার সতর্কবাণী, স্বপ্নটি যেন গোপন রাখা হয় (12:5)।",
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
            bn: "তারা যখন তাঁকে কূপে নামিয়ে দিচ্ছিল, আল্লাহ তাঁকে ওহির মাধ্যমে জানালেন: একদিন তুমি তাদের এই কাজের কথা তাদের জানাবে, অথচ তারা টেরও পাবে না (12:15)। কূপের তলা থেকেই পাঠক জেনে যায়, এই বালকের সামনে ভবিষ্যৎ আছে। ভাইয়েরা তাঁর জামায় মিথ্যা রক্ত মেখে ঘরে ফিরল (12:18)। এক কাফেলা তাঁকে কূপ থেকে তুলে নিল, তারপর সামান্য দামে, গোনা কয়েক দিরহামে বেচে দিল (12:19-20)।",
          },
        ],
      },
      {
        h: { en: "The House of al-Aziz", bn: "আজীজের ঘর" },
        p: [
          {
            en: "The Egyptian who bought him told his wife to make his stay honourable, since he might benefit them or be taken as a son — and the Quran comments that thus did We establish Yusuf in the land, to teach him the interpretation of events (12:21). At full maturity Allah gave him judgement and knowledge, the standing reward of those who do good (12:22).",
            bn: "যে মিশরীয় তাঁকে কিনেছিল, সে স্ত্রীকে বলল, তার থাকার ব্যবস্থা সম্মানজনক করো; হয়তো সে আমাদের উপকারে আসবে, কিংবা আমরা তাকে ছেলে বানিয়ে নেব। কুরআন এখানে মন্তব্য করে: এভাবেই আমি ইউসুফকে সেই দেশে প্রতিষ্ঠিত করলাম, যাতে তাকে ঘটনাবলির ব্যাখ্যা শেখাই (12:21)। পূর্ণ যৌবনে পৌঁছালে আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দিলেন; সৎকর্মশীলদের জন্য এটাই তাঁর চিরাচরিত প্রতিদান (12:22)।",
          },
          {
            en: "The woman of the house bolted the doors and sought to seduce him. His refusal named its reason first: I seek the refuge of Allah; he is my master who has made good my stay (12:23). The shirt tore from behind as they raced to the door, and a witness reasoned from the tear that the truth was with him (12:25-28). Allah turned evil away from His chosen servant (12:24).",
            bn: "গৃহকর্ত্রী দরজাগুলো বন্ধ করে দিয়ে তাঁকে ফুসলাতে চাইল। তিনি না বললেন, আর সবার আগে কারণটা বললেন: আমি আল্লাহর আশ্রয় চাই; তিনি আমার প্রভু, যিনি আমাকে সসম্মানে থাকতে দিয়েছেন (12:23)। দরজার দিকে দুজনের দৌড়ের মধ্যে পেছন থেকে জামা ছিঁড়ে গেল, আর একজন সাক্ষী ছেঁড়ার জায়গা দেখে যুক্তি দিল, সত্য তাঁর পক্ষেই (12:25-28)। আল্লাহ তাঁর বাছাই করা বান্দার কাছ থেকে মন্দকে সরিয়ে রাখলেন (12:24)।",
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
            bn: "তিনি দুটি স্বপ্নেরই ব্যাখ্যা দিলেন। যাকে তিনি মুক্তি পাবে বলে বুঝেছিলেন, তাকে বললেন মনিবের কাছে তাঁর কথা তুলতে। তবু তিনি আরও কয়েক বছর কারাগারেই রইলেন (12:41-42)। কত বছর, কুরআন তা বলে না। তারপর রাজা স্বপ্নে দেখলেন, সাতটি মোটাতাজা গাভিকে সাতটি রোগা গাভি খেয়ে ফেলছে, আর সাতটি সবুজ শিষ, বাকিগুলো শুকনো। দরবারের লোকেরা বলল, এ সব এলোমেলো স্বপ্ন (12:43-44)।",
          },
          {
            en: "The freed prisoner remembered at last, and Yusuf answered with a policy, not merely a reading: sow seven years and leave the harvest in the ear, then seven hard years will consume what was stored, then comes a year of relief and rain (12:45-49). Summoned to the palace, he refused to leave prison until his name was cleared (12:50).",
            bn: "ছাড়া পাওয়া সেই বন্দির অবশেষে মনে পড়ল। ইউসুফ শুধু স্বপ্নের ব্যাখ্যা দিলেন না, একটি পরিকল্পনাও দিলেন: সাত বছর চাষ করো, আর ফসল শিষসহই রেখে দাও; তারপর সাতটি কঠিন বছর জমানো সব খেয়ে ফেলবে; তারপর আসবে স্বস্তি আর বৃষ্টির একটি বছর (12:45-49)। রাজপ্রাসাদে ডাক পেয়েও তিনি কারাগার ছাড়তে রাজি হলেন না, যতক্ষণ না তাঁর নাম কলঙ্কমুক্ত হয় (12:50)।",
          },
        ],
      },
      {
        h: { en: "A Knowing Guardian", bn: "একজন জ্ঞানী রক্ষক" },
        p: [
          {
            en: "The women testified they knew no evil of him and the wife confessed; then come the words, which al-Tabari gives to Yusuf and Ibn Kathir to the wife, that the soul is a persistent enjoiner of evil, except those on whom the Lord has mercy (12:51-53). Made a man of high standing, he asked for the storehouses of the land as a knowing guardian; thus was he established, and Allah does not waste the reward of the doers of good (12:54-56).",
            bn: "নারীরা সাক্ষ্য দিল, তাঁর মধ্যে তারা কোনো মন্দ দেখেনি; আজীজের স্ত্রীও দোষ স্বীকার করল। তারপর আসে এই কথা: মন তো মন্দ কাজের দিকে বারবার তাড়া দেয়, তবে প্রভু যার প্রতি দয়া করেন, সে ছাড়া (12:51-53)। তাবারি কথাটিকে ইউসুফের বলে ধরেছেন, আর ইবনে কাসির ধরেছেন আজীজের স্ত্রীর। উচ্চ মর্যাদা পাওয়ার পর তিনি একজন জ্ঞানী রক্ষক হিসেবে দেশের শস্যভান্ডারের দায়িত্ব চেয়ে নিলেন। এভাবেই তিনি প্রতিষ্ঠিত হলেন, আর আল্লাহ সৎকর্মশীলদের প্রতিদান নষ্ট করেন না (12:54-56)।",
          },
          {
            en: "Famine brought his brothers for grain; they entered, and he knew them while they did not know him (12:58). He asked for their half-brother, and on their return took Binyamin aside to tell him privately not to grieve (12:62-69). The cup was then placed in his brother's bag — a plan, the Quran says, that Allah devised, since the king's law would not have let him keep his brother (12:70-76).",
            bn: "দুর্ভিক্ষ তাঁর ভাইদের শস্যের খোঁজে মিশরে নিয়ে এল। তারা তাঁর কাছে এল; তিনি তাদের চিনলেন, কিন্তু তারা তাঁকে চিনল না (12:58)। তিনি তাদের সৎভাইকে নিয়ে আসতে বললেন। পরের বার তারা এলে বিনইয়ামিনকে আলাদা ডেকে চুপিচুপি বললেন, দুঃখ কোরো না (12:62-69)। এরপর পানপাত্রটি রাখা হলো ভাইয়ের বোঝার মধ্যে। কুরআন বলে, এ কৌশল আল্লাহরই করে দেওয়া, কারণ রাজার আইনে তিনি ভাইকে নিজের কাছে রাখতে পারতেন না (12:70-76)।",
          },
        ],
      },
      {
        h: { en: "No Blame Upon You Today", bn: "আজ তোমাদের বিরুদ্ধে কোনো অভিযোগ নেই" },
        p: [
          {
            en: "When they came back in hardship, he asked whether they knew what they had done to Yusuf and his brother in their ignorance (12:88-89). They said, are you indeed Yusuf? He answered: I am Yusuf, and this is my brother; whoever fears Allah and is patient, indeed Allah does not let the reward of the doers of good be lost (12:90). It is the surah's moral, spoken by the man who lived it.",
            bn: "তারা যখন দুরবস্থায় আবার এল, তিনি জিজ্ঞেস করলেন, তোমরা কি জানো, অজ্ঞতার বশে ইউসুফ আর তার ভাইয়ের সঙ্গে তোমরা কী করেছিলে (12:88-89)? তারা বলল, তুমিই কি তাহলে ইউসুফ? তিনি বললেন: আমিই ইউসুফ, আর এ আমার ভাই; যে আল্লাহকে ভয় করে আর ধৈর্য ধরে, নিশ্চয়ই আল্লাহ এমন সৎকর্মশীলদের প্রতিদান নষ্ট করেন না (12:90)। এটাই সূরার মূল শিক্ষা, আর তা বলছেন সেই মানুষ, যিনি নিজের জীবন দিয়ে তা পার করে এসেছেন।",
          },
          {
            en: "They admitted they had been sinners, and he replied with the sentence the whole story had travelled toward: no blame upon you today; may Allah forgive you (12:92). He held every advantage of power and used none of it, sending his shirt instead to restore his father's sight (12:93). On the throne at last, with his family in prostration, he asked only to die a Muslim and be joined with the righteous (12:100-101).",
            bn: "তারা স্বীকার করল, তারাই অপরাধী ছিল। তিনি জবাব দিলেন সেই বাক্যে, গোটা কাহিনি এতক্ষণ যার দিকে এগোচ্ছিল: আজ তোমাদের বিরুদ্ধে কোনো অভিযোগ নেই; আল্লাহ তোমাদের ক্ষমা করুন (12:92)। ক্ষমতার সব সুবিধা তাঁর হাতে ছিল, কিন্তু একটিও তিনি কাজে লাগালেন না; বরং বাবার দৃষ্টি ফিরিয়ে আনতে নিজের জামা পাঠিয়ে দিলেন (12:93)। শেষে সিংহাসনে বসে, পরিবার সামনে সিজদায়, তিনি চাইলেন শুধু এটুকু: মুসলিম হয়ে যেন মরতে পারেন, আর নেককারদের সঙ্গে যেন মিলিত হন (12:100-101)।",
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
            bn: "আল্লাহ 4:163 আয়াতে যে নবীদের কথা বলেছেন, যাঁদের কাছে তিনি ওহি পাঠিয়েছেন, আইয়ুব (আঃ) তাঁদেরই একজন। 6:84 আয়াতে তাঁর নাম এসেছে দাউদ, সুলাইমান, ইউসুফ ও হারুনের সঙ্গে, আল্লাহর হিদায়াত পাওয়া মানুষদের তালিকায়। তাই তিনি কোনো প্রান্তিক চরিত্র নন। তবু কুরআন তাঁকে নিয়ে মাত্র দুটি ছোট অংশ রেখেছে, 21:83-84 আর 38:41-44, আর দুটিরই বিষয় একটাই: সবকিছু কেড়ে নেওয়া হলে আল্লাহর একজন বান্দা কী করেন।",
          },
          {
            en: "The Quran does not describe his illness, does not count his losses, and does not name his city or his era. That silence is deliberate and worth respecting. Much of what circulates about worms, about a wife who abandoned him, and about the length of his affliction comes from later storytelling rather than from revelation or an authenticated report, and a reader loses nothing by setting it aside. What Allah preserved is the prayer and the praise.",
            bn: "কুরআন তাঁর রোগের বর্ণনা দেয় না, তাঁর ক্ষতির হিসাব দেয় না, তাঁর শহর বা যুগের নামও বলে না। এই নীরবতা ইচ্ছাকৃত, আর তাকে সম্মান করাই উচিত। পোকার কথা, তাঁকে ছেড়ে চলে যাওয়া স্ত্রীর কথা, তাঁর বিপদ কত দিন ছিল সেই কথা: এ নিয়ে যা কিছু প্রচলিত, তার বেশির ভাগই পরবর্তী কালের গল্প, ওহি বা নির্ভরযোগ্য বর্ণনা নয়। এসব সরিয়ে রাখলে পাঠকের কিছুই হারায় না। আল্লাহ যা সংরক্ষণ করেছেন, তা হলো তাঁর দোয়া আর তাঁর প্রশংসা।",
          },
        ],
      },
      {
        h: { en: "The Words of the Prayer", bn: "দোয়ার শব্দগুলো" },
        p: [
          {
            en: "The prayer itself is six words in Arabic. When he called upon his Lord, he said: adversity has touched me, and You are the most merciful of the merciful (21:83). He states his condition and stops. There is no demand, no bargaining, no listing of his services. The sentence ends by naming an attribute of Allah rather than a need of his own, and it is on that attribute that the whole request rests.",
            bn: "দোয়াটি আরবিতে মাত্র ছয়টি শব্দ। তিনি যখন তাঁর প্রভুকে ডাকলেন, বললেন: আমাকে কষ্ট স্পর্শ করেছে, আর আপনি তো দয়ালুদের মধ্যে সবচেয়ে বড় দয়ালু (21:83)। তিনি নিজের অবস্থাটুকু জানান, ব্যস। কোনো দাবি নেই, দর-কষাকষি নেই, নিজের খিদমতের ফিরিস্তি নেই। বাক্যটি শেষ হয় নিজের কোনো প্রয়োজনের কথায় নয়, আল্লাহর একটি গুণের নাম নিয়ে। আর পুরো আবেদনটি দাঁড়িয়ে আছে সেই গুণের ওপরেই।",
          },
          {
            en: "In the second passage he says that Satan has touched him with hardship and torment (38:41). He does not attribute the affliction to his Lord in the language of blame. This is the courtesy the prophets keep: Ibrahim, describing his Lord, says that when he is ill it is He who cures him (26:80), naming Allah with the healing. Ayyub speaks of his pain in one direction and his hope in another, and both directions are worship.",
            bn: "দ্বিতীয় অংশে তিনি বলেন, শয়তান আমাকে কষ্ট ও যন্ত্রণায় ফেলেছে (38:41)। বিপদের জন্য তিনি দোষারোপের সুরে তাঁর প্রভুকে দায়ী করেন না। নবীরা সবসময় এই আদব রক্ষা করেছেন। ইবরাহীমও তাঁর প্রভুর পরিচয় দিতে গিয়ে বলেন, আমি অসুস্থ হলে তিনিই আমাকে আরোগ্য দেন (26:80); আল্লাহর নাম তিনি নেন আরোগ্যের সঙ্গে। আইয়ুব ব্যথার কথা বলেন এক দিকে, আশার কথা অন্য দিকে, আর দুটিই ইবাদত।",
          },
        ],
      },
      {
        h: { en: "What Allah Praised in Him", bn: "আল্লাহ তাঁর কীসের প্রশংসা করলেন" },
        p: [
          {
            en: "The verdict on his life is a single verse: We found him patient — an excellent servant; indeed he was one who constantly turned back to his Lord (38:44). Two words carry it. Sabir is the one who holds, and awwab is the one who returns, again and again, to Allah. Patience alone could be mere endurance; joined to returning, it becomes a relationship that the trial did not interrupt but intensified.",
            bn: "তাঁর জীবনের রায় একটিমাত্র আয়াতে: আমি তাঁকে ধৈর্যশীল পেয়েছি; কত উত্তম বান্দা! নিশ্চয়ই তিনি বারবার তাঁর প্রভুর দিকে ফিরে আসতেন (38:44)। দুটি শব্দেই সব কথা। সাবির মানে যিনি অটল থাকেন, আর আওয়াব মানে যিনি বারবার আল্লাহর দিকে ফিরে আসেন। শুধু ধৈর্য হলে তা নিছক সয়ে যাওয়া হতে পারত। কিন্তু ফিরে আসার সঙ্গে মিলে তা হয়ে ওঠে এমন এক সম্পর্ক, যা পরীক্ষায় ছিন্ন হয়নি, বরং আরও গভীর হয়েছে।",
          },
          {
            en: "Notice also what is not praised. He is not praised for silence, since he prayed; nor for pretending the pain was small, since he said plainly that adversity had touched him. The Quran approves of a servant who tells Allah exactly where he stands and still calls Him the most merciful. That is the model 2:155-157 sets out, where the good news is for those who, struck by disaster, say that to Allah they belong and to Him they return.",
            bn: "এটাও খেয়াল করুন, কীসের প্রশংসা করা হয়নি। চুপ থাকার জন্য তাঁর প্রশংসা হয়নি, কারণ তিনি দোয়া করেছেন। ব্যথাকে ছোট করে দেখানোর জন্যও নয়, কারণ তিনি স্পষ্টই বলেছেন, কষ্ট তাঁকে ছুঁয়েছে। কুরআন পছন্দ করে সেই বান্দাকে, যে আল্লাহকে নিজের অবস্থা ঠিক যেমন তেমনই জানায়, আর তবুও তাঁকে দয়ালুদের মধ্যে সবচেয়ে দয়ালু বলে ডাকে। 2:155-157 আয়াত এই আদর্শই তুলে ধরে: সুসংবাদ তাদের জন্য, যারা বিপদে পড়ে বলে, আমরা আল্লাহরই, আর তাঁরই কাছে ফিরে যাব।",
          },
        ],
      },
      {
        h: { en: "The Spring and the Return", bn: "ঝরনা আর ফিরে পাওয়া" },
        p: [
          {
            en: "The answer came as an instruction, not an explanation: strike with your foot — this is a cool bath and a drink (38:42). A man who could barely move was told to move, and water appeared where his foot fell. The Quran gives no diagnosis and no timetable; it simply records that relief arrived through an act of obedience, which is how deliverance usually reaches those who ask for it.",
            bn: "উত্তর এল ব্যাখ্যা হিসেবে নয়, নির্দেশ হিসেবে: তোমার পা দিয়ে মাটিতে আঘাত করো; এই তো গোসলের শীতল পানি, আর পান করার পানি (38:42)। যে মানুষটি নড়তেই পারতেন না, তাঁকেই বলা হলো নড়তে; আর যেখানে তাঁর পা পড়ল, সেখানেই পানি বেরিয়ে এল। কুরআন রোগের নাম বলে না, কত দিনে সারল তাও বলে না। শুধু জানায়, স্বস্তি এসেছিল আনুগত্যের একটি কাজের ভেতর দিয়ে। যারা মুক্তি চায়, তাদের কাছে মুক্তি সাধারণত এভাবেই পৌঁছায়।",
          },
          {
            en: "Then We responded to him and removed his adversity, and We gave him his family and the like of them with them (21:84). The same restoration is described in 38:43 as mercy from Us and a reminder for people of understanding. The reward is stated twice as a mercy, never as wages earned by suffering; and both passages end by turning the reader's attention outward, to what the story is meant to teach the worshippers who read it.",
            bn: "তারপর আমি তাঁর ডাকে সাড়া দিলাম, তাঁর কষ্ট দূর করে দিলাম, আর তাঁকে ফিরিয়ে দিলাম তাঁর পরিবার, সঙ্গে তাদের সমান আরও (21:84)। 38:43 আয়াত এই ফিরিয়ে দেওয়াকে বলে আমার পক্ষ থেকে রহমত, আর বোধসম্পন্নদের জন্য উপদেশ। দুই জায়গাতেই প্রতিদানকে বলা হয়েছে রহমত, কষ্ট সয়ে কামানো পারিশ্রমিক কখনো নয়। আর দুটি অংশই শেষে পাঠকের দৃষ্টি বাইরের দিকে ফিরিয়ে দেয়: যে ইবাদতকারীরা কাহিনিটি পড়েন, তাঁদের এটি কী শেখাতে চায়, সেদিকে।",
          },
        ],
      },
      {
        h: { en: "The Oath He Kept", bn: "যে শপথ তিনি রক্ষা করলেন" },
        p: [
          {
            en: "One verse in the passage is easy to pass over: take in your hand a bundle and strike with it, and do not break your oath (38:44). Something had been sworn during the trial, and the Quran does not tell us what. What it does show is that the oath was not simply cancelled because the man had suffered enough; a way was opened for him to discharge it without breaking his word.",
            bn: "এই অংশের একটি আয়াত সহজেই চোখ এড়িয়ে যায়: তোমার হাতে এক আঁটি নাও, তা দিয়ে আঘাত করো, আর শপথ ভেঙো না (38:44)। পরীক্ষার সময় একটি শপথ করা হয়েছিল; সেটি কী, কুরআন তা জানায় না। কুরআন যা দেখায় তা হলো, তিনি অনেক কষ্ট সয়েছেন বলেই শপথটি বাতিল করে দেওয়া হয়নি; বরং কথা না ভেঙে তা পূরণ করার একটি পথ খুলে দেওয়া হয়েছে।",
          },
          {
            en: "That detail says something about the man and about the law he lived under. His recovery did not loosen his obligations; it restored his ability to meet them. The Quran presents his healing and his oath in the same breath, so that the reader does not imagine that the end of a trial is the end of responsibility. He returned to health as the same servant he had been in illness.",
            bn: "এই ছোট্ট খুঁটিনাটি তাঁর সম্পর্কে, আর তিনি যে শরিয়তের অধীনে চলতেন সে সম্পর্কে, অনেক কিছু বলে দেয়। আরোগ্য তাঁর দায়িত্ব হালকা করেনি; বরং দায়িত্ব পালনের সামর্থ্য ফিরিয়ে দিয়েছে। কুরআন তাঁর আরোগ্য আর তাঁর শপথের কথা বলে একই নিঃশ্বাসে, যাতে পাঠক না ভাবেন, পরীক্ষা শেষ মানেই দায়িত্ব শেষ। অসুস্থ অবস্থায় তিনি যে বান্দা ছিলেন, সুস্থ হয়েও ঠিক সেই বান্দাই রইলেন।",
          },
        ],
      },
      {
        h: { en: "Wealth Returned, Heart Unchanged", bn: "সম্পদ ফিরল, হৃদয় বদলাল না" },
        p: [
          {
            en: "Al-Bukhari records a striking scene from after his recovery. While Ayyub was bathing, golden locusts began to fall on him, and he started gathering them into his garment. His Lord called to him: had I not made you free of need of what you see? He answered: yes, by Your might, but I have no escape from Your blessing. He was not indifferent to gifts; he was attached to the Giver.",
            bn: "বুখারি তাঁর আরোগ্যের পরের একটি চমৎকার দৃশ্য বর্ণনা করেছেন। আইয়ুব গোসল করছিলেন, এমন সময় তাঁর ওপর সোনার পঙ্গপাল ঝরে পড়তে লাগল, আর তিনি সেগুলো কাপড়ে কুড়িয়ে নিতে লাগলেন। তাঁর প্রভু তাঁকে ডেকে বললেন: তুমি যা দেখছ, তার প্রয়োজন থেকে কি আমি তোমাকে মুক্ত করে দিইনি? তিনি বললেন: অবশ্যই, আপনার ইজ্জতের কসম! কিন্তু আপনার বরকত ছাড়া আমার চলে না। দানের প্রতি তিনি উদাসীন ছিলেন না; তাঁর টান ছিল দাতার প্রতি।",
          },
          {
            en: "That is the shape of his whole life, and it explains why the Prophet ﷺ could say, as Muslim records, that the affair of the believer is wholly good: if ease comes he is grateful, and that is good for him; if hardship comes he is patient, and that is good for him. Ayyub was tested in both conditions and passed in both, which is why Allah called him an excellent servant rather than merely a patient one.",
            bn: "তাঁর পুরো জীবনের ধরনই এমন। এ থেকেই বোঝা যায়, নবী ﷺ কেন বলতে পেরেছেন, যেমন মুসলিমে বর্ণিত: মুমিনের সব ব্যাপারই কল্যাণের; সুখ এলে সে শুকরিয়া আদায় করে, আর তা তার জন্য কল্যাণ; বিপদ এলে সে ধৈর্য ধরে, আর তাও তার জন্য কল্যাণ। আইয়ুব দুই অবস্থাতেই পরীক্ষিত হয়েছেন, আর দুটিতেই উত্তীর্ণ হয়েছেন। তাই আল্লাহ তাঁকে শুধু ধৈর্যশীল নয়, উত্তম বান্দা বলেছেন।",
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
            bn: "মাদইয়ান ছিল উত্তর-পশ্চিম আরবের কাফেলার পথে, আর তার বাজার দিয়ে যে পণ্য আসা-যাওয়া করত, তা থেকেই আসত তার সম্পদ। এই জনপদে আল্লাহ পাঠালেন তাদেরই ভাই শুআইব (আঃ)-কে। তাঁর প্রথম কথাগুলো ছিল তাঁর আগের প্রত্যেক রাসূলের কথাই: হে আমার সম্প্রদায়, আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই (7:85)। একই আয়াতে এরপর যা আসে, সেটিই তাঁর দাওয়াতকে আলাদা করে তোলে।",
          },
          {
            en: "The Quran also addresses the companions of al-Aykah, the people of the thicket, and sends Shu'ayb to them as well (26:176-177). Commentators differ over whether they were the people of Madyan under another description or a neighbouring community; the Quran does not settle it, and it calls him the brother of Madyan while it does not use that word of al-Aykah. The message to both is identical, which is the point worth keeping.",
            bn: "কুরআন আইকার অধিবাসীদের কথাও বলে, অর্থাৎ ঘন বনের বাসিন্দাদের; শুআইবকে তাদের কাছেও পাঠানো হয়েছিল (26:176-177)। তারা কি অন্য নামে মাদইয়ানবাসীই, নাকি পাশের কোনো জনগোষ্ঠী, এ নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। কুরআন বিষয়টির মীমাংসা করে না। তবে মাদইয়ানের বেলায় কুরআন তাঁকে তাদের ভাই বলেছে, আইকার বেলায় এ শব্দ ব্যবহার করেনি। দুই সম্প্রদায়ের প্রতি বার্তা একই, আর মনে রাখার মতো কথা এটুকুই।",
          },
        ],
      },
      {
        h: { en: "Worship and the Scale", bn: "ইবাদত ও দাঁড়িপাল্লা" },
        p: [
          {
            en: "Having called them to Allah, he said in the same breath: give full measure and weight, do not deprive people of their due, and cause no corruption on the earth after its reform (7:85). In 11:84 the two commands are welded together even more tightly — worship Allah, and do not reduce the measure and the scale. Faith and the marketplace are not treated as separate departments of life.",
            bn: "আল্লাহর দিকে ডাকার পর একই নিঃশ্বাসে তিনি বললেন: মাপ ও ওজন পুরো দাও, মানুষের পাওনা কম দিয়ো না, আর পৃথিবীতে সংস্কারের পর সেখানে বিপর্যয় ঘটিয়ো না (7:85)। 11:84 আয়াতে দুটি নির্দেশ আরও শক্ত করে জোড়া লাগানো: আল্লাহর ইবাদত করো, আর মাপে ও ওজনে কম দিয়ো না। ঈমান এক জায়গায়, বাজার আরেক জায়গায়, এমন ভাগ এখানে নেই।",
          },
          {
            en: "He then gave them a principle their ledgers could not supply: what remains from Allah is better for you, if you are believers — and I am not a guardian over you (11:86). The lawful remainder, however small, outlasts the larger sum gained by shaving a weight. In 26:181-183 the same instruction is spelled out for the people of the thicket: weigh with an even balance, and do not diminish what belongs to others.",
            bn: "তারপর তিনি তাদের এমন একটি নীতি শোনালেন, যা তাদের হিসাবের খাতায় কখনো মিলত না: আল্লাহর পক্ষ থেকে যা অবশিষ্ট থাকে, সেটাই তোমাদের জন্য ভালো, যদি তোমরা মুমিন হও; আর আমি তোমাদের পাহারাদার নই (11:86)। হালাল উপায়ে যা বাকি থাকে, তা যত সামান্যই হোক, ওজনে কম দিয়ে কামানো বড় অঙ্কের চেয়ে বেশি দিন টেকে। 26:181-183 আয়াতে আইকার অধিবাসীদের জন্যও একই নির্দেশ খুলে বলা হয়েছে: সঠিক দাঁড়িপাল্লায় ওজন করো, আর মানুষের পাওনা কম দিয়ো না।",
          },
        ],
      },
      {
        h: { en: "Does Your Prayer Command This", bn: "তোমার নামাজই কি এ নির্দেশ দেয়" },
        p: [
          {
            en: "Their objection is one of the sharpest sentences in the Quran, because it is still in use. Shu'ayb, does your prayer command you that we should leave what our fathers worshipped, or that we should not do with our wealth what we please (11:87)? They call him forbearing and right-minded as they say it, and the sarcasm is unmistakable. Religion, in their view, could have the mosque provided it stayed out of the market.",
            bn: "তাদের আপত্তিটি কুরআনের সবচেয়ে ধারালো বাক্যগুলোর একটি, কারণ কথাটি আজও মানুষের মুখে মুখে ফেরে: হে শুআইব, তোমার নামাজ কি তোমাকে এই হুকুম দেয় যে, আমাদের বাপ-দাদারা যাদের উপাসনা করত তাদের আমরা ছেড়ে দেব, কিংবা নিজেদের সম্পদ নিয়ে যা খুশি তা করতে পারব না (11:87)? এ কথা বলতে বলতেই তারা তাঁকে সহনশীল ও সুবুদ্ধিসম্পন্ন বলে ডাকে; ব্যঙ্গটা বুঝতে কষ্ট হয় না। তাদের মতে ধর্ম মসজিদে থাকুক, আপত্তি নেই; শুধু বাজারে যেন নাক না গলায়।",
          },
          {
            en: "His reply is a charter for anyone who works for reform: I only intend correction as much as I am able, and my success is only through Allah; upon Him I rely and to Him I turn (11:88). He claims no power to change hearts and no guarantee of results. He accepts the limit of his ability, and hands the outcome to the One who is not limited.",
            bn: "সংশোধনের কাজে যে-ই নামুক, তার জন্য শুআইবের জবাবটি একটি সনদ: আমি তো সাধ্যমতো সংশোধনই চাই, আর আমার তাওফিক কেবল আল্লাহর কাছ থেকেই; তাঁরই ওপর আমি ভরসা করি, তাঁরই দিকে ফিরি (11:88)। মানুষের মন বদলে দেওয়ার ক্ষমতা তিনি দাবি করেন না, ফলাফলের নিশ্চয়তাও দেন না। নিজের সামর্থ্যের সীমা তিনি মেনে নেন, আর ফলাফল সঁপে দেন তাঁর হাতে, যাঁর কোনো সীমা নেই।",
          },
        ],
      },
      {
        h: { en: "Threats on Every Road", bn: "প্রতিটি পথে হুমকি" },
        p: [
          {
            en: "Cheating was not their only offence. He told them not to sit on every path, threatening and turning away from the way of Allah those who believed, and seeking to make it crooked (7:86). A community that has grown used to dishonest profit will defend it, and the defence takes the form of intimidation. Corruption in the scales and coercion on the roads are two faces of the same refusal.",
            bn: "শুধু প্রতারণাই তাদের অপরাধ ছিল না। তিনি তাদের বললেন, প্রতিটি পথে বসে থেকো না, মুমিনদের ভয় দেখিয়ো না, আল্লাহর পথ থেকে তাদের ফিরিয়ে দিয়ো না, আর সে পথকে বাঁকা করতে চেয়ো না (7:86)। যে সমাজ অসৎ মুনাফায় অভ্যস্ত হয়ে যায়, সে সেই মুনাফা রক্ষায় নামে, আর সেই রক্ষার চেহারা হয় ভয় দেখানো। দাঁড়িপাল্লায় দুর্নীতি আর রাস্তায় জোর-জবরদস্তি একই অস্বীকারের দুটি রূপ।",
          },
          {
            en: "The chiefs then gave him the usual choice: we will expel you and those who believe with you from our town, unless you return to our religion (7:88). He answered that they would be inventing a lie against Allah if they returned to it, and that his Lord encompasses everything in knowledge (7:89). When they said that only his family protected him from stoning, he asked whether his family was more respected by them than Allah (11:91-92).",
            bn: "এরপর নেতারা তাঁকে সেই চিরাচরিত শর্ত দিল: আমরা তোমাকে আর তোমার সঙ্গে যারা ঈমান এনেছে তাদের আমাদের জনপদ থেকে বের করে দেব, যদি না তোমরা আমাদের ধর্মে ফিরে আসো (7:88)। তিনি বললেন, সেই ধর্মে ফিরে গেলে তো আমরা আল্লাহর নামে মিথ্যা রচনা করব; আর আমার প্রভুর জ্ঞান সবকিছুকে ঘিরে আছে (7:89)। তারা যখন বলল, কেবল তোমার পরিবারের খাতিরেই তোমাকে পাথর মারিনি, তিনি জিজ্ঞেস করলেন, আল্লাহর চেয়ে কি আমার পরিবার তোমাদের কাছে বেশি সম্মানের (11:91-92)?",
          },
        ],
      },
      {
        h: { en: "The Day the Town Fell", bn: "যেদিন জনপদ ধ্বংস হলো" },
        p: [
          {
            en: "The end is described in more than one way. 7:91 says the earthquake seized them and they lay lifeless in their homes, and 29:36-37 repeats it. 11:94 names the shriek, and 26:189 speaks of the punishment of the day of the shadow. The Quran also says of the companions of the thicket in 15:78-79 that they were wrongdoers and were requited. Each account is given as it is; they need not be forced into one scene.",
            bn: "তাদের পরিণতির বর্ণনা এসেছে একাধিক রকমে। 7:91 আয়াত বলে, ভূমিকম্প তাদের পাকড়াও করল, আর তারা নিজেদের ঘরে নিষ্প্রাণ পড়ে রইল; 29:36-37 আয়াতে একই কথা আবার এসেছে। 11:94 আয়াতে আছে বিকট আওয়াজের কথা, আর 26:189 আয়াতে ছায়ার দিনের শাস্তির কথা। আইকার অধিবাসীদের সম্পর্কে কুরআন 15:78-79 আয়াতে বলে, তারা ছিল জালিম, আর তাদের প্রতিফল দেওয়া হয়েছে। প্রতিটি বিবরণ যেমন আছে তেমনই নেওয়া উচিত; সবগুলোকে জোর করে একটি দৃশ্যে মেলানোর দরকার নেই।",
          },
          {
            en: "What followed is stated with unusual coldness: those who denied Shu'ayb became as though they had never lived there (7:92), and away with Madyan as Thamud was taken away (11:95). A town whose whole identity was its trade left no trace. Shu'ayb and those who believed with him were saved by the mercy of Allah, which is the only security the passage acknowledges (11:94).",
            bn: "এরপরের কথা বলা হয়েছে অস্বাভাবিক রকম নির্লিপ্ত সুরে: যারা শুআইবকে মিথ্যা বলেছিল, তারা এমন হয়ে গেল যেন সেখানে কখনো বসবাসই করেনি (7:92); আর ধ্বংস হোক মাদইয়ান, যেমন ধ্বংস হয়েছিল সামুদ (11:95)। যে জনপদের পুরো পরিচয়ই ছিল তার ব্যবসা-বাণিজ্য, তার কোনো চিহ্নই রইল না। শুআইব আর তাঁর সঙ্গে যারা ঈমান এনেছিল, তারা বেঁচে গেল আল্লাহর রহমতে। এই অংশে নিরাপত্তা বলতে কুরআন কেবল এটুকুই স্বীকার করে (11:94)।",
          },
        ],
      },
      {
        h: { en: "The Scale Outlives the Town", bn: "জনপদ যায়, দাঁড়িপাল্লা থাকে" },
        p: [
          {
            en: "His last recorded words are not bitter. He turned from them and said: I conveyed to you the messages of my Lord and advised you, so how could I grieve for a disbelieving people (7:93)? A messenger is answerable for delivery, not for results. He had been threatened with stoning and exile, and what he expresses at the end is not resentment but the calm of a man who finished his task.",
            bn: "তাঁর শেষ যে কথা কুরআনে আছে, তাতে কোনো তিক্ততা নেই। তিনি তাদের দিক থেকে মুখ ফিরিয়ে বললেন: আমি তো তোমাদের কাছে আমার প্রভুর বার্তা পৌঁছে দিয়েছি, তোমাদের উপদেশ দিয়েছি; তাহলে কাফির সম্প্রদায়ের জন্য আমি কী করে দুঃখ করি (7:93)? রাসূলের দায় বার্তা পৌঁছে দেওয়ার, ফলাফলের নয়। তাঁকে পাথর মারার আর দেশছাড়া করার হুমকি দেওয়া হয়েছিল। তবু শেষে তাঁর কথায় ক্ষোভ নেই; আছে নিজের কাজ শেষ করা একজন মানুষের প্রশান্তি।",
          },
          {
            en: "Madyan appears once more in the Quran, when Musa arrives there as a fugitive and is hired by an old man on honest terms (28:22-28). The Quran does not name that man, and it is better not to. What survives is the standard Shu'ayb was sent with, restated later in 83:1-3 as a woe upon those who take full measure from people and give less to them.",
            bn: "কুরআনে মাদইয়ানের নাম আরেকবার আসে, যখন মূসা পালিয়ে সেখানে পৌঁছান, আর এক বৃদ্ধ ন্যায্য শর্তে তাঁকে কাজে রাখেন (28:22-28)। কুরআন সেই বৃদ্ধের নাম বলে না, আর নাম না বলাই ভালো। যা টিকে থাকে, তা হলো সেই মানদণ্ড, যা দিয়ে শুআইবকে পাঠানো হয়েছিল। পরে 83:1-3 আয়াতে কথাটি আবার এসেছে: দুর্ভোগ তাদের জন্য, যারা মানুষের কাছ থেকে মেপে নেওয়ার সময় পুরো নেয়, আর মানুষকে দেওয়ার সময় কম দেয়।",
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
            bn: "মূসা (আঃ)-এর জন্ম এমন সময়ে, যখন হত্যাই ছিল রাষ্ট্রের নীতি। ফেরাউন দেশের মানুষকে দলে দলে ভাগ করে তাদের একটি দলকে দাবিয়ে রেখেছিল; তাদের ছেলেদের জবাই করত, আর নারীদের বাঁচিয়ে রাখত (28:4)। সেই বছরেই আল্লাহ মূসার মায়ের মনে ইলহাম করলেন: তাকে দুধ খাওয়াও; আর যখন তার জন্য ভয় পাবে, তখন তাকে নদীতে ভাসিয়ে দিয়ো; ভয় কোরো না, দুঃখও কোরো না, আমি তাকে তোমার কাছে ফিরিয়ে দেব এবং তাকে রাসূল বানাব (28:7)।",
          },
          {
            en: "Pharaoh's family picked him up, so that he would become to them an enemy and a sorrow (28:8), and Pharaoh's wife pleaded that he not be killed (28:9). His sister watched from a distance while Allah made him refuse every wet nurse, so that he was returned to his own mother, that her eye might be comforted and she might know Allah's promise is true (28:10-13).",
            bn: "ফেরাউনের পরিবার তাঁকে নদী থেকে তুলে নিল, যাতে শেষ পর্যন্ত তিনিই হন তাদের শত্রু আর দুঃখের কারণ (28:8)। ফেরাউনের স্ত্রী অনুনয় করলেন, শিশুটিকে যেন মেরে ফেলা না হয় (28:9)। তাঁর বোন দূর থেকে নজর রাখছিলেন। এদিকে আল্লাহ এমন করলেন যে তিনি কোনো ধাত্রীর দুধই মুখে নিলেন না। ফলে তিনি ফিরে এলেন নিজের মায়ের কোলেই, যাতে মায়ের চোখ জুড়ায়, আর তিনি জানেন, আল্লাহর ওয়াদা সত্য (28:10-13)।",
          },
        ],
      },
      {
        h: { en: "Madyan and the Ten Years", bn: "মাদইয়ান ও দশ বছর" },
        p: [
          {
            en: "Grown to full strength and given judgement and knowledge (28:14), he intervened in a fight and struck a man who died. He did not excuse himself: this is from the work of Satan; my Lord, I have wronged myself, so forgive me (28:15-16). Warned that the chiefs were conferring to kill him, he left the city fearful and watchful (28:20-21).",
            bn: "যৌবনে পূর্ণ শক্তিতে পৌঁছালে আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দান করেন (28:14)। একদিন এক মারামারির মাঝে গিয়ে তিনি এক লোককে আঘাত করেন, আর লোকটি মারা যায়। তিনি নিজের পক্ষে কোনো অজুহাত দাঁড় করাননি; বলেছেন: এ তো শয়তানের কাজ; হে আমার প্রভু, আমি নিজের ওপর জুলুম করেছি, আমাকে ক্ষমা করুন (28:15-16)। পরে খবর এল, নেতারা তাঁকে হত্যার পরামর্শ করছে। তিনি ভয়ে ভয়ে, চারদিকে সতর্ক নজর রেখে শহর ছেড়ে বেরিয়ে পড়েন (28:20-21)।",
          },
          {
            en: "At the well of Madyan he found two women holding their flock back until the shepherds finished. He watered for them, withdrew to the shade and said: my Lord, I am in need of whatever good You send down to me (28:23-24). One of them proposed he be hired, with a line the Quran keeps as a rule: the best you can hire is the strong and the trustworthy (28:26).",
            bn: "মাদইয়ানের কূপের ধারে তিনি দেখেন, দুই নারী নিজেদের পশুগুলো আটকে রেখে দাঁড়িয়ে আছে; রাখালেরা পানি খাওয়ানো শেষ না করা পর্যন্ত তারা এগোবে না। তিনি তাদের পশুগুলোকে পানি খাইয়ে দেন, তারপর ছায়ায় গিয়ে বলেন: হে আমার প্রভু, আপনি আমার প্রতি যে কল্যাণই নাজিল করবেন, আমি তার মুখাপেক্ষী (28:23-24)। তাদের একজন তাঁকে কাজে রাখার প্রস্তাব দেয়। তার কথাটি কুরআন একটি নীতি হিসেবেই রেখে দিয়েছে: কাজে রাখার জন্য সবচেয়ে ভালো সেই লোক, যে শক্তিশালী ও বিশ্বস্ত (28:26)।",
          },
        ],
      },
      {
        h: { en: "The Fire at Tuwa", bn: "তুওয়ার আগুন" },
        p: [
          {
            en: "He contracted for eight years, and completing ten was left to him, on a contract sealed with the words that Allah is witness over what they said (28:27-28); al-Bukhari records Ibn Abbas (RA) saying he completed the longer and better term. Years later, travelling with his family, he saw a fire on the side of the mount and turned aside for it (28:29). He was called from the blessed spot: remove your sandals, you are in the sacred valley of Tuwa (20:11-12).",
            bn: "তিনি আট বছর কাজ করার চুক্তি করেন; দশ বছর পূর্ণ করবেন কি না, তা তাঁর ইচ্ছার ওপর ছেড়ে দেওয়া হয়। চুক্তি পাকা হয় এই কথায় যে, তাঁরা যা বলছেন আল্লাহ তার সাক্ষী (28:27-28)। বুখারির বর্ণনায় ইবনে আব্বাস (রাঃ) বলেছেন, তিনি দুই মেয়াদের মধ্যে দীর্ঘ ও উত্তমটিই পূর্ণ করেছিলেন। বহু বছর পর পরিবার নিয়ে সফরের পথে তিনি পাহাড়ের পাশে আগুন দেখতে পান এবং সেদিকে এগিয়ে যান (28:29)। বরকতময় স্থান থেকে তাঁকে ডাক দেওয়া হয়: তোমার জুতা খুলে ফেলো, তুমি পবিত্র উপত্যকা তুওয়ায় আছ (20:11-12)।",
          },
          {
            en: "Then came the sentence that turned a fugitive shepherd into a messenger: indeed I am Allah, there is no god but Me, so worship Me and establish the prayer for My remembrance (20:14). He was shown the staff that became a moving serpent and the hand that came out white without harm (20:17-22), and was sent to Pharaoh, who had transgressed (20:24).",
            bn: "তারপর এল সেই কথা, আর পলাতক এক রাখাল হয়ে গেলেন রাসূল: নিশ্চয়ই আমিই আল্লাহ, আমি ছাড়া কোনো ইলাহ নেই; সুতরাং আমার ইবাদত করো এবং আমার স্মরণে নামাজ কায়েম করো (20:14)। তাঁকে নিদর্শন দেখানো হয়: হাতের লাঠি হয়ে যায় ছুটন্ত সাপ, আর হাত বেরিয়ে আসে ধবধবে সাদা হয়ে, কোনো ক্ষতি ছাড়াই (20:17-22)। তারপর তাঁকে পাঠানো হয় ফেরাউনের কাছে, যে সীমা ছাড়িয়ে গিয়েছিল (20:24)।",
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
            bn: "মূসা জবাব দেন, যে অনুগ্রহের খোঁটা দেওয়া হচ্ছে, তার আসল চেহারা তো এই: ফেরাউন বনী ইসরাঈলকে গোলাম বানিয়ে রেখেছে (26:22)। এরপর মোকাবিলার দিন ঠিক হয় উৎসবের দিনে। জাদুকরেরা তাদের রশি ও লাঠি ছুড়ে মানুষের চোখে ভেলকি লাগায়, আর মূসার লাঠি তাদের সব বানোয়াট কারসাজি গিলে ফেলে (7:116-117)। ভেলকির কারবার যারা সবচেয়ে ভালো বুঝত, তারাই সঙ্গে সঙ্গে বুঝে গেল: এ ভেলকি নয়।",
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
            bn: "তিনি ফলকগুলো নিয়ে ফিরে আসেন। নির্দেশ ছিল, সেগুলো শক্ত করে ধরবেন এবং সম্প্রদায়কে বলবেন, তারা যেন এর উত্তম বিধানগুলো আঁকড়ে থাকে (7:145)। কিন্তু এসে দেখেন, লোকেরা সামিরির বানানো এক বাছুরের পূজা করছে (20:85-88)। অথচ হারুন তাদের সাবধান করে দিয়েছিলেন, এ দিয়ে তোমাদের কেবল পরীক্ষা করা হচ্ছে (20:90)। মূসা রাগে-দুঃখে কাতর হয়ে ফলকগুলো ফেলে দেন, ভাইকে চেপে ধরেন, তারপর দুজনের জন্যই ক্ষমা চেয়ে দোয়া করেন (7:150-151)।",
          },
        ],
      },
      {
        h: { en: "The Journey with al-Khidr", bn: "খিদিরের সঙ্গে সফর" },
        p: [
          {
            en: "Al-Bukhari records that Musa was asked which person had the most knowledge and answered that it was himself, whereupon Allah directed him to a servant at the meeting of the two seas who knew what he did not. The Quran calls him one given mercy from Allah and taught knowledge from Him (18:65). Musa asked to follow him and was told he could not bear it patiently (18:66-67).",
            bn: "বুখারির বর্ণনায় আছে, মূসাকে জিজ্ঞেস করা হয়েছিল, মানুষের মধ্যে সবচেয়ে বেশি জ্ঞান কার। তিনি বলেছিলেন, আমার। তখন আল্লাহ তাঁকে দুই সাগরের মিলনস্থলে এক বান্দার কাছে পাঠান, যিনি এমন কিছু জানতেন যা মূসা জানতেন না। কুরআন তাঁর পরিচয় দেয় এভাবে: আল্লাহ যাঁকে নিজের পক্ষ থেকে রহমত দিয়েছেন এবং নিজের কাছ থেকে জ্ঞান শিখিয়েছেন (18:65)। মূসা তাঁর সঙ্গে চলার অনুমতি চাইলে তিনি জানিয়ে দেন, আপনি আমার সঙ্গে ধৈর্য ধরে থাকতে পারবেন না (18:66-67)।",
          },
          {
            en: "A ship was damaged, a boy was killed, a wall was rebuilt without pay, and Musa objected each time until they parted (18:71-78). The explanations reversed every appearance: the ship was flawed to save it from a king who seized ships, and the wall stood over a treasure belonging to two orphans whose father had been righteous (18:79-82). Even the prophet who spoke with Allah was shown he did not see everything.",
            bn: "নৌকায় ছিদ্র করা হয়, এক বালককে হত্যা করা হয়, বিনা মজুরিতে একটি দেয়াল মেরামত করে দেওয়া হয়। প্রতিবারই মূসা আপত্তি তোলেন, শেষে দুজনের পথ আলাদা হয়ে যায় (18:71-78)। ব্যাখ্যা শুনে দেখা গেল, বাইরে যা দেখা গিয়েছিল, ভেতরের সত্য তার উল্টো। নৌকায় খুঁত করা হয়েছিল যেন এক রাজা সেটি কেড়ে নিতে না পারে; সে রাজা নৌকা পেলেই জোর করে নিয়ে নিত। আর দেয়ালের নিচে ছিল দুই এতিম বালকের গুপ্তধন, যাদের বাবা ছিলেন নেককার (18:79-82)। যে নবী আল্লাহর সঙ্গে কথা বলেছেন, তাঁকেও দেখিয়ে দেওয়া হলো: সবকিছু তিনি দেখতে পান না।",
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
            bn: "কুরআনে হারুন (আঃ)-কে আমরা পাই একটি কবুল হওয়া দোয়া হিসেবে। ফেরাউনের কাছে যাওয়ার নির্দেশ পেয়ে মূসা দোয়া করেন, তাঁর বুক যেন প্রশস্ত করে দেওয়া হয়, কাজ যেন সহজ হয়। তারপর বলেন: আমার পরিবার থেকে আমার জন্য একজন সহকারী ঠিক করে দিন, আমার ভাই হারুনকে; তাঁকে দিয়ে আমার শক্তি বাড়িয়ে দিন, তাঁকে আমার কাজে শরিক করুন (20:29-32)। জবাব এল সঙ্গে সঙ্গে: হে মূসা, তুমি যা চেয়েছ তা তোমাকে দেওয়া হলো (20:36)।",
          },
          {
            en: "The reason is given in another surah: my brother Harun is more fluent than me in speech, so send him with me as support to confirm me, for I fear they will deny me (28:34). Allah answered that He would strengthen his arm through his brother (28:35). Elsewhere the appointment is described purely as a gift — and We gave him out of Our mercy his brother Harun, a prophet (19:53).",
            bn: "কেন চেয়েছিলেন, তা আছে আরেক সূরায়: আমার ভাই হারুন আমার চেয়ে বেশি বাকপটু; তাঁকে আমার সহায়ক করে পাঠান, তিনি আমার কথার সত্যতা সমর্থন করবেন; আমার ভয় হয়, তারা আমাকে মিথ্যাবাদী বলবে (28:34)। আল্লাহ জানান, ভাইকে দিয়ে তিনি তাঁর বাহু শক্ত করবেন (28:35)। আরেক জায়গায় এই নিয়োগকে দেখানো হয়েছে কেবলই এক দান হিসেবে: আমি নিজ রহমতে তাঁকে দিলাম তাঁর ভাই হারুনকে, নবী বানিয়ে (19:53)।",
          },
        ],
      },
      {
        h: { en: "Two Sent to One Tyrant", bn: "এক স্বৈরাচারীর কাছে দুজন" },
        p: [
          {
            en: "He was not an assistant standing behind a messenger. Go, both of you, to Pharaoh, for he has transgressed, and speak to him a gentle word, that perhaps he may be reminded or fear (20:43-44). When they said they feared he would hasten against them, the answer came to both: fear not, I am with you both, hearing and seeing (20:45-46).",
            bn: "তিনি কেবল রাসূলের পেছনে দাঁড়িয়ে থাকা কোনো সহকারী ছিলেন না। নির্দেশ এসেছিল দুজনের প্রতিই: তোমরা দুজন ফেরাউনের কাছে যাও, সে সীমা ছাড়িয়ে গেছে; তার সঙ্গে নম্রভাবে কথা বলো, হয়তো সে উপদেশ নেবে বা ভয় পাবে (20:43-44)। তাঁরা যখন বললেন, আমাদের ভয় হয় সে তাড়াহুড়ো করে আমাদের ওপর চড়াও হবে, তখন জবাবও এল দুজনের প্রতি: ভয় কোরো না, আমি তোমাদের দুজনের সঙ্গেই আছি, শুনছি ও দেখছি (20:45-46)।",
          },
          {
            en: "In another telling, both are told to go with the signs of Allah and to say to Pharaoh that they are the messenger of the Lord of the worlds (26:15-16). 25:35 states it plainly: We gave Musa the Scripture and appointed with him his brother Harun as a helper. When the magicians believed they named the two together — the Lord of Musa and Harun (7:121-122).",
            bn: "অন্য এক বর্ণনায় দুজনকেই বলা হয় আল্লাহর নিদর্শন নিয়ে যেতে এবং ফেরাউনকে বলতে যে তাঁরা বিশ্বজগতের প্রতিপালকের রাসূল (26:15-16)। 25:35 স্পষ্ট করেই বলে: আমি মূসাকে কিতাব দিয়েছি এবং তাঁর সঙ্গে তাঁর ভাই হারুনকে সহকারী করেছি। জাদুকরেরা যখন ঈমান আনে, তারা দুজনের নামই একসঙ্গে নেয় — মূসা ও হারুনের প্রতিপালক (7:121-122)।",
          },
        ],
      },
      {
        h: { en: "The Tongue That Was Needed", bn: "যে জবানের দরকার ছিল" },
        p: [
          {
            en: "The Quran links his role to his speech. Musa asked for the knot in his own tongue to be untied so his words would be understood (20:27-28), and named his brother as the more fluent of the two (28:34). Eloquence here is not ornament; it is the instrument by which a message reaches a hostile court. Allah gave the mission the voice it required, and that voice belonged to someone else.",
            bn: "কুরআনে তাঁর ভূমিকার সঙ্গে জড়িয়ে আছে তাঁর কথা বলার ক্ষমতা। মূসা দোয়া করেছিলেন, তাঁর জিহ্বার জড়তা যেন খুলে দেওয়া হয়, যাতে লোকে তাঁর কথা বোঝে (20:27-28)। আর ভাইয়ের ব্যাপারে বলেছিলেন, দুজনের মধ্যে তিনিই বেশি বাকপটু (28:34)। এখানে বাগ্মিতা সাজসজ্জা নয়; এ দিয়েই বার্তা পৌঁছায় শত্রুভাবাপন্ন রাজদরবারে। এই দায়িত্বে যে কণ্ঠের দরকার ছিল, আল্লাহ তা দিয়েছেন; আর সে কণ্ঠ ছিল আরেকজনের।",
          },
          {
            en: "The purpose of the partnership is stated by Musa himself: let him share my task, that we may glorify You much and remember You much, for You are ever seeing us (20:32-35). Two prophets were joined not to make the work efficient but to make the worship greater. 21:48 records the outcome — We gave Musa and Harun the criterion, a light, and a reminder for the righteous.",
            bn: "এই যুগল দায়িত্বের উদ্দেশ্য মূসা নিজেই বলে দিয়েছেন: তাঁকে আমার কাজে শরিক করুন, যাতে আমরা বেশি বেশি আপনার তাসবিহ পাঠ করি আর বেশি বেশি আপনার জিকির করি; আপনি তো সবসময় আমাদের দেখছেন (20:32-35)। দুই নবীকে একসঙ্গে করা হয়েছিল কাজের গতি বাড়াতে নয়, ইবাদত বাড়াতে। এর ফল জানায় 21:48: আমি মূসা ও হারুনকে দিয়েছি ফুরকান, আলো এবং মুত্তাকিদের জন্য উপদেশ।",
          },
        ],
      },
      {
        h: { en: "Left in Charge", bn: "দায়িত্বে রেখে যাওয়া" },
        p: [
          {
            en: "When Musa left for the appointment with his Lord, he handed the community to his brother: take my place among my people, do right, and do not follow the way of the corrupters (7:142). It is the hardest kind of trust — authority without the presence of the one who holds it, over a people newly delivered and not yet settled in faith.",
            bn: "মূসা যখন প্রভুর নির্ধারিত সাক্ষাতে রওনা হন, সম্প্রদায়ের ভার তুলে দেন ভাইয়ের হাতে: আমার সম্প্রদায়ে আমার স্থলাভিষিক্ত হও, সংশোধন করো, আর বিপর্যয় সৃষ্টিকারীদের পথ অনুসরণ কোরো না (7:142)। আমানতের মধ্যে এটিই সবচেয়ে কঠিন ধরনের: আসল দায়িত্বশীল উপস্থিত নেই, অথচ তাঁর হয়ে চালাতে হবে এমন এক জাতিকে, যারা সদ্য মুক্তি পেয়েছে, ঈমানে এখনো স্থির হয়নি।",
          },
          {
            en: "The Samiri produced a calf, and the people took it (20:85-88). Harun did not stay quiet. He told them plainly: my people, you are only being tested by it, and your Lord is the Most Merciful, so follow me and obey my command (20:90). They answered that they would not cease being devoted to it until Musa returned (20:91). He had spoken the truth and had been overruled by a crowd.",
            bn: "সামিরি এক বাছুর বানায়, আর লোকেরা সেটিকে গ্রহণ করে নেয় (20:85-88)। হারুন চুপ থাকেননি। তিনি পরিষ্কার বলে দেন: হে আমার সম্প্রদায়, এ দিয়ে তোমাদের কেবল পরীক্ষা করা হচ্ছে; তোমাদের প্রতিপালক তো পরম দয়াময়, সুতরাং আমাকে অনুসরণ করো, আমার কথা মানো (20:90)। তারা জবাব দেয়, মূসা না ফেরা পর্যন্ত তারা এর পূজা ছাড়বে না (20:91)। তিনি সত্য কথাই বলেছিলেন, কিন্তু জনতার কাছে হেরে গিয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "Son of My Mother", bn: "হে আমার মায়ের ছেলে" },
        p: [
          {
            en: "Musa came back and rebuked him — what held you back when you saw them going astray? (20:92-93) — and in Surah al-A'raf he seizes his brother by the head and pulls him towards himself (7:150). Harun's reply is one of the gentlest defences in the Quran: son of my mother, do not seize me by my beard or my head; I feared you would say that I had divided the Children of Israel and had not observed your word (20:94). He had judged that a split community was a worse ruin than a delayed correction.",
            bn: "মূসা ফিরে এসে তাঁকে তিরস্কার করেন: তাদের পথভ্রষ্ট হতে দেখেও কিসে তোমাকে আটকে রেখেছিল? (20:92-93) সূরা আল-আ'রাফে আছে, তিনি ভাইয়ের মাথা ধরে নিজের দিকে টেনে আনেন (7:150)। হারুনের জবাব কুরআনের সবচেয়ে কোমল আত্মপক্ষ সমর্থনগুলোর একটি: হে আমার মায়ের ছেলে, আমার দাড়ি বা মাথা ধরো না; আমার ভয় হয়েছিল, তুমি বলবে, তুমি বনী ইসরাঈলের মধ্যে ভাঙন ধরিয়েছ, আমার কথা রক্ষা করোনি (20:94)। তাঁর হিসাব ছিল: সংশোধনে দেরি হলে যে ক্ষতি, সম্প্রদায় ভেঙে গেলে তার চেয়ে অনেক বড় সর্বনাশ।",
          },
          {
            en: "In the account in Sura al-A'raf he adds that the people had overpowered him and had almost killed him, and asks that the enemies not be given cause to rejoice over him (7:150). Musa's response settles the matter: my Lord, forgive me and my brother, and admit us into Your mercy (7:151). The Quran preserves the anger and the answer together, and neither brother is diminished by it.",
            bn: "সূরা আল-আ'রাফের বর্ণনায় তিনি আরও বলেন, লোকেরা তাঁকে কোণঠাসা করে ফেলেছিল, প্রায় মেরেই ফেলছিল; শত্রুদের যেন তাঁকে নিয়ে হাসার সুযোগ দেওয়া না হয় (7:150)। মূসার জবাবেই বিষয়টির মীমাংসা হয়ে যায়: হে আমার প্রভু, আমাকে ও আমার ভাইকে ক্ষমা করুন এবং আমাদের আপনার রহমতে দাখিল করুন (7:151)। কুরআন রাগ আর জবাব দুটোই পাশাপাশি রেখে দিয়েছে, আর তাতে কোনো ভাইয়েরই মর্যাদা এতটুকু কমেনি।",
          },
        ],
      },
      {
        h: { en: "Peace Upon Musa and Harun", bn: "মূসা ও হারুনের প্রতি সালাম" },
        p: [
          {
            en: "Sura as-Saffat gathers his standing in a few lines: We conferred favour upon Musa and Harun, saved them and their people from the great distress, supported them so they were the victors, gave them the clarifying Scripture and guided them to the straight path, and left for them among later generations the words, peace upon Musa and Harun (37:114-120). The favour is named for both, without ranking.",
            bn: "সূরা আস-সাফফাত অল্প কয়েকটি আয়াতে তাঁর মর্যাদার পুরো ছবি তুলে ধরে: আমি মূসা ও হারুনের প্রতি অনুগ্রহ করেছি; তাঁদের ও তাঁদের সম্প্রদায়কে মহাসংকট থেকে উদ্ধার করেছি; তাঁদের সাহায্য করেছি, ফলে তাঁরাই বিজয়ী হয়েছেন; তাঁদের দিয়েছি সুস্পষ্ট কিতাব এবং সরল পথের হিদায়াত; আর পরবর্তীদের মাঝে তাঁদের জন্য রেখে দিয়েছি এই কথা: মূসা ও হারুনের প্রতি সালাম (37:114-120)। অনুগ্রহের কথা এসেছে দুজনের নামেই, কাউকে আগে-পিছে না রেখে।",
          },
          {
            en: "His house remained a mark of blessing: the ark that came to the Children of Israel carried a remnant of what the family of Musa and the family of Harun had left (2:248). He is counted among the guided in 6:84, and 4:163 names him among those given revelation. In the narration of the night journey recorded by al-Bukhari and Muslim, the Prophet ﷺ met him in the fifth heaven.",
            bn: "তাঁর পরিবার বরকতের চিহ্ন হয়ে রইল: বনী ইসরাঈলের কাছে যে সিন্দুক এসেছিল, তাতে ছিল মূসার পরিবার ও হারুনের পরিবারের রেখে যাওয়া জিনিসের অবশিষ্টাংশ (2:248)। 6:84-এ তাঁকে হিদায়াতপ্রাপ্তদের মধ্যে গণ্য করা হয়েছে, আর 4:163 তাঁর নাম নিয়েছে ওহিপ্রাপ্তদের মধ্যে। বুখারি ও মুসলিমে বর্ণিত মিরাজের ঘটনায় নবী ﷺ পঞ্চম আসমানে তাঁর সাক্ষাৎ পান।",
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
            bn: "যুলকিফল (আঃ)-এর নাম কুরআনে এসেছে মাত্র দুবার, এর বাইরে কোথাও নয়। প্রথমবার 21:85-এ: সেখানে তাঁর নাম এসেছে ইসমাঈল ও ইদরিসের সঙ্গে, আর বলা হয়েছে, তাঁরা সবাই ধৈর্যশীল। দ্বিতীয়বার 38:48-এ: সেখানে তাঁর নাম ইসমাঈল ও আল-ইয়াসার সঙ্গে, আর বলা হয়েছে, তাঁরা সবাই উত্তমদের অন্তর্ভুক্ত। তাই তাঁকে নিয়ে সৎভাবে কিছু বলতে গেলে শুরুতেই স্বীকার করতে হয়: তাঁর সম্পর্কে জানা কথা এটুকুই।",
          },
          {
            en: "We are not told his people, his land, his century, what he was sent with, or what happened to him. There is no episode, no dialogue, no trial described. What each verse does supply is a verdict, and in both places the verdict is followed immediately by a consequence: We admitted them into Our mercy, indeed they were of the righteous (21:86); and this is a reminder (38:49).",
            bn: "তাঁর সম্প্রদায় কারা, দেশ কোথায়, কোন যুগের মানুষ, কী বার্তা নিয়ে এসেছিলেন, শেষে তাঁর কী হলো, কিছুই আমাদের জানানো হয়নি। কোনো ঘটনা নেই, কোনো কথোপকথন নেই, কোনো পরীক্ষার বিবরণ নেই। প্রতিটি আয়াত যা দেয়, তা একটি রায়। আর দুই জায়গাতেই রায়ের ঠিক পরেই আসে তার ফল: আমি তাঁদের আমার রহমতে দাখিল করেছি, নিশ্চয়ই তাঁরা ছিলেন সৎকর্মশীলদের অন্তর্ভুক্ত (21:86); এবং: এ এক উপদেশ (38:49)।",
          },
        ],
      },
      {
        h: { en: "The Company He Keeps", bn: "যাঁদের সঙ্গে তাঁর নাম" },
        p: [
          {
            en: "In Sura al-Anbiya his name falls inside a procession of prophets. Nuh is answered (21:76), Dawud and Sulayman judge and are taught (21:78-79), Ayyub calls out in his affliction and is healed (21:83-84), and then, immediately after, come Isma'il, Idris and Dhul-Kifl, all of the patient (21:85). Directly after him the surah turns to Yunus, who called out from the darkness and was answered (21:87), and to Zakariya, who was given a son in old age (21:89-90). He stands at the point where the surah is speaking about endurance and the answer that follows it.",
            bn: "সূরা আল-আম্বিয়ায় তাঁর নাম এসেছে নবীদের এক দীর্ঘ সারির মাঝখানে। নূহের ডাকে সাড়া দেওয়া হয় (21:76); দাউদ ও সুলাইমান বিচার করেন, জ্ঞান লাভ করেন (21:78-79); আইয়ুব বিপদে পড়ে ডাকেন, আরোগ্য পান (21:83-84)। ঠিক এরপরই আসেন ইসমাঈল, ইদরিস ও যুলকিফল, সবাই ধৈর্যশীল (21:85)। তাঁর পরপরই সূরাটি চলে যায় ইউনুসের কথায়, যিনি অন্ধকারের ভেতর থেকে ডেকেছিলেন আর সাড়া পেয়েছিলেন (21:87); তারপর যাকারিয়ার কথায়, বার্ধক্যে যাঁকে পুত্র দেওয়া হয়েছিল (21:89-90)। সূরাটি যেখানে সবর আর তার পরে আসা সাড়ার কথা বলছে, ঠিক সেখানেই তাঁর জায়গা।",
          },
          {
            en: "Sura Sad does the same thing with a different list. Dawud is remembered as the possessor of strength who turned constantly to Allah (38:17), Sulayman is called an excellent servant (38:30), Ayyub is found patient (38:44), Ibrahim, Ishaq and Ya'qub are named men of strength and vision and among the chosen (38:45-47), and then Isma'il, al-Yasa' and Dhul-Kifl close the list among the outstanding (38:48).",
            bn: "সূরা সাদও একই কাজ করে, ভিন্ন এক তালিকায়। দাউদকে স্মরণ করা হয় শক্তির অধিকারী হিসেবে, যিনি বারবার আল্লাহর দিকে ফিরতেন (38:17)। সুলাইমানকে বলা হয় উত্তম বান্দা (38:30)। আইয়ুবকে পাওয়া যায় ধৈর্যশীল (38:44)। ইবরাহীম, ইসহাক ও ইয়াকুবকে বলা হয় শক্তি ও অন্তর্দৃষ্টির অধিকারী, মনোনীতদের অন্তর্ভুক্ত (38:45-47)। তারপর ইসমাঈল, আল-ইয়াসা ও যুলকিফলকে উত্তমদের মধ্যে গণ্য করে তালিকাটি শেষ হয় (38:48)।",
          },
        ],
      },
      {
        h: { en: "Patient and Outstanding", bn: "ধৈর্যশীল ও উত্তম" },
        p: [
          {
            en: "Two descriptions are attached to him, and both are weighty. To be of the patient, in the language of these surahs, is not to be passive; it is what Ayyub is praised for after years of loss, and what Isma'il showed when he told his father he would be found, if Allah willed, among the patient (37:102). The word carries a life, even when the life is not described.",
            bn: "তাঁর পরিচয়ে এসেছে দুটি গুণ, আর দুটিই ওজনদার। এই সূরাগুলোর ভাষায় ধৈর্যশীল হওয়া মানে হাত গুটিয়ে বসে থাকা নয়। বছরের পর বছর সব হারিয়েও আইয়ুব এই গুণের জন্যই প্রশংসা পেয়েছেন। ইসমাঈলও এই গুণই দেখিয়েছিলেন, যখন বাবাকে বলেছিলেন: আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীলদের একজন হিসেবেই পাবেন (37:102)। জীবনের বিবরণ না থাকলেও এই একটি শব্দের ভেতরে একটি গোটা জীবন আছে।",
          },
          {
            en: "The second word, al-akhyar, means the chosen and the best. In the same passage it is used of Ibrahim, Ishaq and Ya'qub, who are called among the chosen and the outstanding (38:47). So a man about whom we know almost nothing is given, in a single clause, the same class of praise as the patriarchs whose stories fill whole surahs. The reward is not proportioned to the length of the record.",
            bn: "দ্বিতীয় শব্দটি আল-আখইয়ার, অর্থাৎ বাছাই করা, সেরা। একই অংশে শব্দটি এসেছে ইবরাহীম, ইসহাক ও ইয়াকুবের বেলায়; তাঁদের বলা হয়েছে মনোনীত ও উত্তমদের অন্তর্ভুক্ত (38:47)। তার মানে, যাঁর সম্পর্কে আমরা প্রায় কিছুই জানি না, এক বাক্যাংশেই তিনি পেলেন সেই একই মানের প্রশংসা, যা পেয়েছেন সেই মহান পূর্বপুরুষেরা, যাঁদের কাহিনিতে গোটা সূরা ভরা। কাহিনি কত লম্বা, তা দেখে প্রতিদান দেওয়া হয় না।",
          },
        ],
      },
      {
        h: { en: "What Is Not Known", bn: "যা জানা নেই" },
        p: [
          {
            en: "The name itself has been read in more than one way. Kifl in Arabic can mean a share or portion, and it can mean standing surety for something, and commentators have explained his title through both senses. Scholars have also differed over whether he was a prophet or a righteous man of an earlier community, and some have tried to identify him with figures known from earlier scriptures.",
            bn: "নামটিরই একাধিক ব্যাখ্যা আছে। আরবিতে কিফল মানে অংশ বা ভাগ হতে পারে, আবার কোনো কিছুর জামিন হওয়াও বোঝাতে পারে; মুফাসসিরগণ দুই অর্থ ধরেই তাঁর উপাধির ব্যাখ্যা করেছেন। তিনি নবী ছিলেন, নাকি আগের কোনো সম্প্রদায়ের একজন নেককার মানুষ, তা নিয়েও আলেমদের মধ্যে মতভেদ আছে। কেউ কেউ আবার আগের ধর্মগ্রন্থগুলোতে পরিচিত কোনো ব্যক্তির সঙ্গে তাঁকে মিলিয়ে দেখার চেষ্টা করেছেন।",
          },
          {
            en: "None of this is settled, and it is not the reader's job to settle it. The detailed stories told about him come from Israelite reports rather than from the Quran or an authentic hadith. The Prophet ﷺ permitted narrating from the Children of Israel, as al-Bukhari records, but such reports are not to be affirmed or denied when nothing confirms them. A teacher who says plainly that we do not know is teaching correctly.",
            bn: "এর কোনোটিরই মীমাংসা হয়নি, আর মীমাংসা করা পাঠকের দায়িত্বও নয়। তাঁকে নিয়ে যেসব বিস্তারিত কাহিনি শোনা যায়, সেগুলো এসেছে ইসরাঈলি বর্ণনা থেকে, কুরআন বা সহিহ হাদিস থেকে নয়। বুখারির বর্ণনা অনুযায়ী নবী ﷺ বনী ইসরাঈল থেকে বর্ণনা করার অনুমতি দিয়েছেন; তবে এমন বর্ণনার পক্ষে কোনো সমর্থন না থাকলে তাকে সত্যও বলা যাবে না, মিথ্যাও বলা যাবে না। যে শিক্ষক সোজাসুজি বলেন, আমরা জানি না, তিনিই ঠিক শেখাচ্ছেন।",
          },
        ],
      },
      {
        h: { en: "Silence Is Not Diminishment", bn: "নীরবতা মানে অবমূল্যায়ন নয়" },
        p: [
          {
            en: "The Quran states its own policy on this. Allah says that He sent messengers whose accounts He has related to His Prophet ﷺ and messengers whose accounts He has not related (4:164), and 40:78 repeats it. Names without stories are therefore not oversights. The Book is not a biographical dictionary; its purpose in the accounts it does give is stated in 12:111, that in them is a lesson for people of understanding.",
            bn: "কুরআন এ ব্যাপারে নিজের নীতি নিজেই জানিয়ে দিয়েছে। আল্লাহ বলেন, তিনি এমন রাসূল পাঠিয়েছেন যাঁদের কথা তিনি তাঁর নবী ﷺ-কে শুনিয়েছেন, আবার এমন রাসূলও পাঠিয়েছেন যাঁদের কথা শোনাননি (4:164); 40:78-এও একই কথা আছে। তাই কাহিনি ছাড়া শুধু নাম আসা কোনো ভুলচুক নয়। কুরআন জীবনী-অভিধান নয়। যেসব কাহিনি এতে আছে, তার উদ্দেশ্য 12:111 নিজেই বলে দেয়: তাতে বোধসম্পন্ন মানুষের জন্য শিক্ষা রয়েছে।",
          },
          {
            en: "That is why his two verses are enough. A man is remembered by Allah for holding fast and for being among the best, and admitted into His mercy (21:86), and the world knows nothing else about him. Most believers will leave a record no longer than that. Dhul-Kifl stands in the Quran as evidence that the record which matters is not written by people, and that patience is never lost even when its story is.",
            bn: "এ কারণেই তাঁর জন্য দুটি আয়াতই যথেষ্ট। একজন মানুষকে আল্লাহ মনে রেখেছেন অবিচল থাকার জন্য, উত্তমদের একজন হওয়ার জন্য, আর তাঁকে নিজের রহমতে দাখিল করেছেন (21:86)। অথচ দুনিয়া তাঁর সম্পর্কে আর কিছুই জানে না। বেশির ভাগ মুমিনের রেখে যাওয়া খতিয়ানও এর চেয়ে বড় হবে না। যুলকিফল কুরআনে এ কথার প্রমাণ হয়ে আছেন যে, যে খতিয়ানটি আসল, তা মানুষ লেখে না; আর সবরের গল্প হারিয়ে গেলেও সবর কখনো হারায় না।",
          },
        ],
      },
    ],
  },
  dawud: {
    sections: [
      {
        h: { en: "The Youth Who Faced Jalut", bn: "জালুতের মুখোমুখি এক তরুণ" },
        p: [
          {
            en: "Dawud (AS) first appears as a young man in someone else's army. The Children of Israel had asked a prophet of theirs to appoint a king so they could fight in the way of Allah, Talut was appointed, and the army was thinned by a test at a river until only a few crossed (2:246-249). Those few said that many a small company has overcome a large company by the permission of Allah.",
            bn: "দাউদ (আঃ)-কে আমরা প্রথম দেখি অন্যের সেনাদলের এক তরুণ হিসেবে। বনী ইসরাঈল তাদের এক নবীর কাছে আবদার করেছিল, তাদের জন্য একজন রাজা ঠিক করে দেওয়া হোক, যাতে তারা আল্লাহর পথে লড়তে পারে। তালুতকে রাজা করা হয়। তারপর এক নদীর ধারে পরীক্ষা নেওয়া হয়, তাতে সেনাদল ছোট হতে হতে অল্প কজনই নদী পার হয় (2:246-249)। সেই অল্প কজনই বলেছিল: আল্লাহর অনুমতিতে কত ছোট দল কত বড় দলকে হারিয়ে দিয়েছে!",
          },
          {
            en: "Facing Jalut they prayed for patience, firm feet and victory (2:250). Then comes the verse that changes his life in a single line: Dawud killed Jalut, and Allah gave him the kingship and wisdom, which commentators explain as prophethood, and taught him from what He willed (2:251). The same verse adds that were it not for Allah checking one people by means of another, the earth would be corrupted.",
            bn: "জালুতের মুখোমুখি হয়ে তারা দোয়া করে ধৈর্যের জন্য, পা অটল রাখার জন্য, বিজয়ের জন্য (2:250)। তারপর আসে সেই আয়াত, যার এক বাক্যেই তাঁর জীবন বদলে যায়: দাউদ জালুতকে হত্যা করেন, আর আল্লাহ তাঁকে রাজত্ব ও প্রজ্ঞা দান করেন এবং নিজের ইচ্ছামতো তাঁকে জ্ঞান শেখান (2:251)। মুফাসসিরগণ এখানে প্রজ্ঞার ব্যাখ্যা করেছেন নবুয়ত হিসেবে। একই আয়াতে আরও আছে: আল্লাহ যদি এক দলকে দিয়ে আরেক দলকে দমিয়ে না রাখতেন, তবে পৃথিবী বিপর্যস্ত হয়ে যেত।",
          },
        ],
      },
      {
        h: { en: "Kingship and the Zabur", bn: "রাজত্ব ও যাবুর" },
        p: [
          {
            en: "He is one of the few prophets given both authority and a book. To Dawud We gave the Zabur, says 4:163, and 17:55 repeats it in the same words. The Quran quotes from it once: We wrote in the Zabur, after the Reminder, that the earth is inherited by My righteous servants (21:105). A book given to a king, and its remembered line is about the meek inheriting the land.",
            bn: "তিনি সেই অল্প কয়েকজন নবীর একজন, যাঁদের ক্ষমতা ও কিতাব দুটোই দেওয়া হয়েছিল। 4:163 বলছে, দাউদকে আমি যাবুর দিয়েছি; 17:55-এ হুবহু একই কথা। কুরআন যাবুর থেকে একবার উদ্ধৃতিও দিয়েছে: উপদেশের পর আমি যাবুরে লিখে দিয়েছি, পৃথিবীর উত্তরাধিকারী হবে আমার নেককার বান্দারা (21:105)। কিতাব পেলেন একজন রাজা, অথচ তার যে বাক্যটি মনে রাখা হয়েছে, তা বিনয়ী মানুষদের জমিনের উত্তরাধিকার পাওয়ার কথা।",
          },
          {
            en: "Al-Bukhari records that recitation was made easy for him: he would order his mount to be saddled and would finish reciting the Zabur before the saddling was done. A man with a kingdom to run had the Book in his mouth while the animals were prepared, which is why 38:20 can say his kingdom was strengthened and he was given wisdom and decisive speech.",
            bn: "বুখারির বর্ণনায় আছে, তাঁর জন্য তিলাওয়াত সহজ করে দেওয়া হয়েছিল: তিনি বাহনে জিন পরানোর হুকুম দিতেন, আর জিন পরানো শেষ হওয়ার আগেই যাবুর পড়া শেষ করে ফেলতেন। গোটা রাজ্য চালানোর ভার যাঁর কাঁধে, সওয়ারি তৈরি হওয়ার ফাঁকেও তাঁর মুখে থাকত কিতাব। তাই তো 38:20 বলতে পারে, তাঁর রাজত্ব মজবুত করা হয়েছিল, আর তাঁকে দেওয়া হয়েছিল প্রজ্ঞা ও চূড়ান্ত মীমাংসার বাকশক্তি।",
          },
        ],
      },
      {
        h: { en: "Mountains and Birds", bn: "পাহাড় ও পাখি" },
        p: [
          {
            en: "The miracle he is best known for is not a display of power but of praise. O mountains, repeat the glorification with him, and the birds (34:10). We subjected the mountains to exalt Allah with Dawud, and the birds, and it was We who did it (21:79). A voice was given to him that the creation joined, so that his worship was audible in the hills.",
            bn: "যে মুজিজার জন্য তিনি সবচেয়ে বেশি পরিচিত, তা ক্ষমতা দেখানোর নয়, প্রশংসার। হে পাহাড়সমূহ, তার সঙ্গে তাসবিহ পাঠ করো, আর হে পাখিরা, তোমরাও (34:10)। আমি পাহাড়গুলোকে অনুগত করেছিলাম, তারা দাউদের সঙ্গে আল্লাহর পবিত্রতা ঘোষণা করত, আর পাখিরাও; আমিই তা করেছিলাম (21:79)। তাঁকে এমন কণ্ঠ দেওয়া হয়েছিল, যার সঙ্গে সৃষ্টিজগৎও সুর মেলাত; পাহাড়ে পাহাড়ে শোনা যেত তাঁর ইবাদত।",
          },
          {
            en: "Sura Sad sets it in a daily rhythm: We subjected the mountains to exalt Allah with him in the evening and after sunrise, and the birds gathered, all turning back to Him with him (38:18-19). The same passage calls him the possessor of strength and one who constantly returned to his Lord (38:17). Strength and repentance are placed side by side, as if neither is complete without the other.",
            bn: "সূরা সাদে দেখা যায়, এটি ছিল প্রতিদিনের নিয়ম: আমি পাহাড়গুলোকে অনুগত করেছিলাম, তারা সন্ধ্যায় ও সূর্যোদয়ের পর তাঁর সঙ্গে আল্লাহর পবিত্রতা ঘোষণা করত; আর পাখিরাও জড়ো হতো, সবাই তাঁর সঙ্গে বারবার আল্লাহর দিকে ফিরত (38:18-19)। একই অংশে তাঁকে বলা হয়েছে শক্তির অধিকারী, যিনি সবসময় প্রভুর দিকে ফিরে আসতেন (38:17)। শক্তি আর তওবাকে পাশাপাশি রাখা হয়েছে, যেন একটি ছাড়া অন্যটি পূর্ণ হয় না।",
          },
        ],
      },
      {
        h: { en: "Iron in His Hands", bn: "তাঁর হাতে লোহা" },
        p: [
          {
            en: "Allah made iron soft for him and taught him a trade with it: make full coats of mail, and measure the links precisely, and work righteousness (34:10-11). The instruction is remarkable for its exactness. A miracle is given, and then a standard of craftsmanship is imposed on it, along with the reminder that Allah sees what is done.",
            bn: "আল্লাহ তাঁর জন্য লোহা নরম করে দেন এবং তা দিয়ে একটি পেশাও শেখান: পূর্ণাঙ্গ বর্ম বানাও, কড়াগুলো ঠিক মাপে জোড়া দাও, আর নেক আমল করো (34:10-11)। নির্দেশটি লক্ষ করার মতো, কারণ তা এত সূক্ষ্ম। মুজিজা দেওয়া হলো, তারপর সেই মুজিজার কাজেও বেঁধে দেওয়া হলো কারিগরির মান। সঙ্গে মনে করিয়ে দেওয়া হলো, যা করা হচ্ছে আল্লাহ তা দেখছেন।",
          },
          {
            en: "21:80 states the purpose — We taught him the making of armour for you, to protect you from your violence — so the gift served other people's safety, not his own display. Al-Bukhari records the Prophet ﷺ saying that no one has eaten better food than what he earns with his own hand, and that the prophet of Allah Dawud ate from the work of his hand.",
            bn: "উদ্দেশ্যটি 21:80 বলে দেয়: আমি তাঁকে তোমাদের জন্য বর্ম বানানো শিখিয়েছি, যেন তা যুদ্ধে তোমাদের রক্ষা করে। অর্থাৎ এই দান কাজে লেগেছে অন্যদের নিরাপত্তায়, নিজের জৌলুস দেখাতে নয়। বুখারি বর্ণনা করেছেন, নবী ﷺ বলেছেন: নিজ হাতের উপার্জনের চেয়ে উত্তম খাবার কেউ কখনো খায়নি; আর আল্লাহর নবী দাউদ নিজ হাতের উপার্জন থেকেই খেতেন।",
          },
        ],
      },
      {
        h: { en: "Judging Between People", bn: "মানুষের মধ্যে বিচার" },
        p: [
          {
            en: "The Quran shows him at work as a judge. Dawud and Sulayman gave judgement about a field into which sheep had strayed at night, and We gave Sulayman understanding of it, and to each We gave judgement and knowledge (21:78-79). The father is not diminished by the son's better answer; both are praised in the same breath, and the passage moves straight on to the mountains that glorified with him.",
            bn: "কুরআন তাঁকে দেখায় বিচারকের আসনে। রাতে এক ক্ষেতে মেষপাল ঢুকে পড়েছিল; সে নিয়ে দাউদ ও সুলাইমান ফায়সালা দেন। আল্লাহ বলেন: আমি সুলাইমানকে বিষয়টি বুঝিয়ে দিয়েছিলাম, আর দুজনকেই দিয়েছিলাম প্রজ্ঞা ও জ্ঞান (21:78-79)। ছেলের জবাব ভালো হয়েছে বলে বাবার মর্যাদা কমেনি; একসঙ্গেই দুজনের প্রশংসা করা হয়েছে, আর বর্ণনাটি সোজা চলে গেছে সেই পাহাড়ের কথায়, যারা দাউদের সঙ্গে তাসবিহ পড়ত।",
          },
          {
            en: "The charge given to him is unique in the Quran: O Dawud, We have made you a successor upon the earth, so judge between people in truth, and do not follow desire, for it will lead you astray from the path of Allah (38:26). Authority is described first as a trust and immediately as a danger. He and Sulayman were given knowledge, and their response was to praise Allah for it (27:15).",
            bn: "তাঁকে দেওয়া নির্দেশটি কুরআনে অনন্য: হে দাউদ, আমি তোমাকে পৃথিবীতে প্রতিনিধি করেছি, সুতরাং মানুষের মধ্যে ন্যায়ের সঙ্গে বিচার করো, আর খেয়ালখুশির অনুসরণ কোরো না, কারণ তা তোমাকে আল্লাহর পথ থেকে বিচ্যুত করবে (38:26)। ক্ষমতাকে প্রথমে বলা হয়েছে আমানত, পরক্ষণেই বিপদ। তাঁকে ও সুলাইমানকে জ্ঞান দেওয়া হয়েছিল, আর এর জবাবে তাঁরা আল্লাহর প্রশংসা করেছেন (27:15)।",
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
            bn: "অতঃপর আমি তাকে ক্ষমা করে দিলাম, আর নিশ্চয়ই আমার কাছে তার জন্য রয়েছে নৈকট্য ও উত্তম প্রত্যাবর্তনস্থল (38:25)। কুরআন এর বেশি কিছু বলেনি, আমাদেরও এর বেশি না বলাই ভালো। এ ঘটনা ঘিরে যেসব বিস্তারিত কাহিনি প্রচলিত আছে, কুরআনে বা সহিহ বর্ণনায় তার কোনো ভিত্তি নেই। এরপর সূরাটি সরাসরি চলে যায় ন্যায়ের সঙ্গে বিচার করার নির্দেশে (38:26)।",
          },
        ],
      },
      {
        h: { en: "Fasting a Day, Standing a Third", bn: "একদিন রোজা, রাতের এক-তৃতীয়াংশ কিয়াম" },
        p: [
          {
            en: "His worship became a standard the Prophet ﷺ recommended by name. In al-Bukhari and Muslim he said that the most beloved fasting to Allah is the fasting of Dawud, who fasted a day and broke a day, and the most beloved prayer to Allah is the prayer of Dawud, who slept half the night, stood a third of it, and slept a sixth.",
            bn: "তাঁর ইবাদত এমন এক আদর্শ হয়ে আছে, যার কথা নবী ﷺ নাম ধরে বলে গেছেন। বুখারি ও মুসলিমে তিনি বলেছেন: আল্লাহর কাছে সবচেয়ে প্রিয় রোজা দাউদের রোজা; তিনি একদিন রোজা রাখতেন, একদিন রাখতেন না। আর আল্লাহর কাছে সবচেয়ে প্রিয় নামাজ দাউদের নামাজ; তিনি রাতের অর্ধেক ঘুমাতেন, এক-তৃতীয়াংশ নামাজে দাঁড়িয়ে থাকতেন, আর এক-ষষ্ঠাংশ ঘুমাতেন।",
          },
          {
            en: "It is a life balanced rather than extreme, sustained rather than heroic. The command that gathers it all is given to his household: work, family of Dawud, in gratitude — and few of My servants are grateful (34:13). A youth who faced a tyrant, a king who judged, a craftsman who ate from his own hands, and a worshipper who kept his nights, is finally asked for one thing, and it is thankfulness.",
            bn: "এ জীবন বাড়াবাড়ির নয়, ভারসাম্যের; হঠাৎ বীরত্বের নয়, দিনের পর দিন টিকে থাকার। সবকিছু এক কথায় বেঁধে দেওয়া নির্দেশটি এসেছে তাঁর পরিবারের প্রতি: হে দাউদের পরিবার, শুকরিয়া আদায়ের জন্য আমল করো; আমার বান্দাদের মধ্যে কৃতজ্ঞ খুব অল্পই (34:13)। যে তরুণ এক জালিমের মুখোমুখি দাঁড়িয়েছিলেন, যে রাজা বিচার করতেন, যে কারিগর নিজ হাতের উপার্জনে খেতেন, যে ইবাদতগুজার রাত জেগে কাটাতেন, শেষ পর্যন্ত তাঁর কাছে চাওয়া হলো একটিমাত্র জিনিস: কৃতজ্ঞতা।",
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
            bn: "আদম (আঃ)-এর কাহিনি শুরু হয় কোনো দেহ দিয়ে নয়, একটি ঘোষণা দিয়ে। তিনি সৃষ্টি হওয়ার আগেই আল্লাহ ফেরেশতাদের জানান, তিনি পৃথিবীতে একজন খলীফা নিযুক্ত করছেন, যে সেখানে আমানত হিসেবে কর্তৃত্ব চালাবে (2:30)। ফেরেশতারা জানতে চান, যে সৃষ্টি রক্তপাত ঘটাবে আর ফাসাদ ছড়াবে, তাকে এই মর্যাদা কীভাবে দেওয়া হবে। তাঁদের প্রশ্ন ছিল জানার জন্য, আপত্তি নয়; আর জবাবটি প্রশ্নটিকে পুরোপুরি মিটিয়ে দেয়: আমি যা জানি, তোমরা তা জানো না।",
          },
          {
            en: "The making itself holds two truths together. Adam was shaped from clay, from sounding clay of altered black mud (15:28), the most ordinary material there is. Then Allah breathed into him of His spirit and commanded the angels to fall prostrate (15:29). To Iblis, Allah says plainly that He created Adam with His own hands (38:75). Dust and honour in one being. Every later question about human dignity and human weakness is already answered in that pairing.",
            bn: "তাঁর সৃষ্টির মধ্যেই দুটি সত্য পাশাপাশি আছে। আদমকে গড়া হয় মাটি থেকে, পচা কালো কাদার শুকনো ঠনঠনে মাটি থেকে (15:28); এর চেয়ে সাধারণ উপাদান আর হয় না। তারপর আল্লাহ তাঁর মধ্যে নিজের পক্ষ থেকে রূহ ফুঁকে দেন এবং ফেরেশতাদের হুকুম দেন সিজদায় লুটিয়ে পড়তে (15:29)। ইবলিসকে আল্লাহ পরিষ্কার বলে দেন, আদমকে তিনি নিজ হাতে সৃষ্টি করেছেন (38:75)। একই সত্তায় মাটি আর মর্যাদা। মানুষের সম্মান আর মানুষের দুর্বলতা নিয়ে পরে যত প্রশ্ন উঠবে, সবগুলোর জবাব এই জোড়ার মধ্যেই আছে।",
          },
        ],
      },
      {
        h: { en: "The Knowledge That Honoured Him", bn: "যে জ্ঞান তাঁকে সম্মানিত করল" },
        p: [
          {
            en: "The first thing recorded about Adam after his creation is that he was taught. Allah taught him the names, all of them, then set the things before the angels and asked them to name them (2:31). They answered with the most beautiful words a creature can say: glory be to You, we have no knowledge except what You have taught us (2:32). Then Adam named them. Their worship was never in question; they were shown a capacity they had not been given.",
            bn: "সৃষ্টির পর আদমের ব্যাপারে প্রথম যে কথাটি জানানো হয়েছে, তা হলো: তাঁকে শেখানো হয়েছিল। আল্লাহ তাঁকে সব নাম শেখান, তারপর জিনিসগুলো ফেরেশতাদের সামনে রেখে বলেন, এগুলোর নাম বলো (2:31)। তাঁরা যে জবাব দেন, কোনো সৃষ্টির মুখে এর চেয়ে সুন্দর কথা হয় না: আপনি পবিত্র, আপনি যা শিখিয়েছেন তার বাইরে আমাদের কোনো জ্ঞান নেই (2:32)। তারপর আদম নামগুলো বলে দেন। ফেরেশতাদের ইবাদত নিয়ে কখনো প্রশ্ন ছিল না; তাঁদের শুধু দেখানো হলো এমন এক যোগ্যতা, যা তাঁদের দেওয়া হয়নি।",
          },
          {
            en: "That is the Quran's own explanation of why humanity is honoured: not strength, not size, not long life, but taught knowledge and the language to hold it. The point matters for how the rest of the story reads. Adam's rank rested on something received rather than owned, and knowledge given can be forgotten, ignored, or acted against. That is exactly what happens next, and it is why the Book spends the rest of its pages calling people back to what they already know.",
            bn: "মানুষ কেন সম্মানিত, কুরআন নিজেই তার কারণ বলে দেয়: শক্তির জন্য নয়, আকারের জন্য নয়, দীর্ঘ আয়ুর জন্যও নয়; বরং শেখানো জ্ঞান আর সেই জ্ঞান ধরে রাখার ভাষার জন্য। বাকি কাহিনি বুঝতে এ কথাটি জরুরি। আদমের মর্যাদা দাঁড়িয়ে ছিল পাওয়া জিনিসের ওপর, নিজের অর্জনের ওপর নয়। আর পাওয়া জ্ঞান ভুলে যাওয়া যায়, অবহেলা করা যায়, এমনকি জেনেও তার উল্টো চলা যায়। ঠিক এটাই এরপর ঘটে। আর এ কারণেই কুরআন তার বাকি সব পাতাজুড়ে মানুষকে ডেকে ফেরায় সেই কথার দিকে, যা সে আগে থেকেই জানে।",
          },
        ],
      },
      {
        h: { en: "The Prostration and the Refusal", bn: "সিজদা ও অস্বীকার" },
        p: [
          {
            en: "The command came to all of them and they prostrated together, except Iblis (2:34). He was of the jinn (18:50); he refused, was arrogant, and became of the disbelievers. Asked directly what prevented him, he answered with a comparison: I am better than him, You created me from fire and created him from clay (7:12). It is the first argument ever made against a command of Allah: self-assessment set above instruction.",
            bn: "হুকুম এল সবার কাছে, সবাই একসঙ্গে সিজদায় পড়ল, শুধু ইবলিস ছাড়া (2:34)। সে ছিল জিনদের একজন (18:50); সে মানল না, অহংকার করল, কাফিরদের দলে চলে গেল। সরাসরি জিজ্ঞেস করা হলে সে জবাব দিল তুলনা টেনে: আমি তার চেয়ে উত্তম, আপনি আমাকে আগুন থেকে আর তাকে মাটি থেকে সৃষ্টি করেছেন (7:12)। আল্লাহর হুকুমের বিরুদ্ধে এটাই প্রথম যুক্তি: হুকুমের ওপরে নিজের বিচারকে বসানো।",
          },
          {
            en: "The Quran preserves that reasoning because it is a pattern, not an incident. Iblis never denied that Allah exists or that He commands; he accepted both and still refused, because obeying meant accepting a rank he judged beneath him. He then asked not for forgiveness but for time, and declared he would come at the children of Adam from before them and behind them, from their right and their left (7:16-17). Pride asks for respite; humility asks for pardon.",
            bn: "কুরআন এই যুক্তিটি ধরে রেখেছে, কারণ এটি একবারের ঘটনা নয়, বারবার ফিরে আসা এক ধাঁচ। ইবলিস কখনো অস্বীকার করেনি যে আল্লাহ আছেন বা তিনি হুকুম দেন। দুটোই সে মানত, তবু অমান্য করল; কারণ হুকুম মানলে এমন এক অবস্থান মেনে নিতে হতো, যা তার চোখে তার মর্যাদার নিচে। এরপর সে ক্ষমা চাইল না, চাইল সময়। আর ঘোষণা দিল, সে আদমের সন্তানদের কাছে আসবে সামনে থেকে, পেছন থেকে, ডান দিক থেকে, বাম দিক থেকে (7:16-17)। অহংকার চায় অবকাশ, বিনয় চায় ক্ষমা।",
          },
        ],
      },
      {
        h: { en: "The Tree and the Slip", bn: "গাছ ও পদস্খলন" },
        p: [
          {
            en: "Adam and his wife were settled in the Garden and told to eat freely wherever they wished, but not to approach one particular tree (7:19). The Quran never identifies that tree, and no sound report identifies it either; the identity is not the point, and guessing adds nothing. What is identified is the warning attached to it, that Iblis is an enemy to them both, so they must not let him drive them out of their ease (20:117).",
            bn: "আদম ও তাঁর স্ত্রীকে জান্নাতে থাকতে দেওয়া হয়; বলা হয়, যেখান থেকে খুশি মন ভরে খাও, শুধু একটি নির্দিষ্ট গাছের কাছে যেয়ো না (7:19)। গাছটি কী, কুরআন তা বলেনি, কোনো সহিহ বর্ণনাও বলেনি। গাছের পরিচয় এখানে আসল কথা নয়, আর অনুমান করে কিছু লাভও হয় না। যা স্পষ্ট করে বলা হয়েছে, তা হলো এর সঙ্গে দেওয়া সতর্কবাণী: ইবলিস তোমাদের দুজনেরই শত্রু; সে যেন তোমাদের এই আরামের জীবন থেকে বের করে দিতে না পারে (20:117)।",
          },
          {
            en: "The attack came as whispering. Iblis suggested the prohibition was withholding something from them, an eternity or an angelic rank (7:20), and swore to them both that he was a sincere adviser (7:21). They ate, their nakedness became apparent to them, and they began covering themselves with the leaves of the Garden (7:22). Exposure, not elevation, was what the promised shortcut delivered. And the Quran names the failure precisely: he forgot, and We found in him no firm resolve (20:115).",
            bn: "আক্রমণ এল কুমন্ত্রণা হয়ে। ইবলিস বোঝাতে চাইল, এই নিষেধ দিয়ে তাঁদের কিছু একটা থেকে বঞ্চিত রাখা হচ্ছে: চিরস্থায়ী জীবন, কিংবা ফেরেশতার মর্যাদা (7:20)। সে তাঁদের দুজনের কাছে কসম খেয়ে বলল, আমি তোমাদের হিতাকাঙ্ক্ষী (7:21)। তাঁরা খেলেন, আর তাঁদের লজ্জাস্থান তাঁদের সামনে প্রকাশ হয়ে পড়ল; তাঁরা জান্নাতের পাতা দিয়ে নিজেদের ঢাকতে লাগলেন (7:22)। সহজ পথের প্রতিশ্রুতি তাঁদের উঁচুতে তোলেনি, বরং অনাবৃত করে দিয়েছে। আর কুরআন ভুলটির নাম দেয় একদম নিখুঁতভাবে: সে ভুলে গিয়েছিল, আর আমি তার মধ্যে দৃঢ় সংকল্প পাইনি (20:115)।",
          },
        ],
      },
      {
        h: { en: "The Words He Received", bn: "যে বাক্যগুলো তিনি পেলেন" },
        p: [
          {
            en: "Then Adam received words from his Lord, and He accepted his repentance (2:37). The words came from Allah. The first human being ever to sin did not have to invent the way back; he was taught it. Repentance was not a loophole discovered by a desperate creature but part of the design, prepared before it was ever needed. For anyone learning this story, that single verse carries more weight than the whole episode of the tree.",
            bn: "তারপর আদম তাঁর প্রভুর কাছ থেকে কয়েকটি বাক্য পেলেন, আর আল্লাহ তাঁর তওবা কবুল করলেন (2:37)। বাক্যগুলো এসেছিল আল্লাহর কাছ থেকেই। প্রথম যে মানুষটি গুনাহ করলেন, ফেরার পথ তাঁকে নিজে খুঁজে বের করতে হয়নি; পথটি তাঁকে শিখিয়ে দেওয়া হয়েছিল। তওবা কোনো অসহায় সৃষ্টির হঠাৎ খুঁজে পাওয়া ফাঁকফোকর নয়; প্রয়োজন হওয়ার আগেই তা ব্যবস্থার অংশ হিসেবে তৈরি রাখা ছিল। যে এই কাহিনি শিখছে, তার কাছে গাছের পুরো ঘটনার চেয়েও এই একটি আয়াত বেশি ভারী।",
          },
          {
            en: "The words are preserved elsewhere: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us we shall surely be among the losers (7:23). Three movements in one sentence — admitting the wrong, naming it as harm done to oneself, and asking with no claim of entitlement. Set beside Iblis, who met the same failure by blaming the One who commanded him (7:16), it is the parting of two destinies.",
            bn: "বাক্যগুলো আরেক জায়গায় সংরক্ষিত আছে: হে আমাদের প্রভু, আমরা নিজেদের ওপর জুলুম করেছি; আপনি যদি আমাদের ক্ষমা না করেন, আমাদের প্রতি রহম না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব (7:23)। এক বাক্যে তিনটি ধাপ: ভুল স্বীকার করা, সেটাকে নিজের প্রতি করা ক্ষতি বলে মেনে নেওয়া, আর কোনো দাবি না রেখে চাওয়া। এর পাশে রাখুন ইবলিসকে, যে একই রকম ব্যর্থতার পর দোষ দিয়েছিল হুকুমদাতাকেই (7:16)। এখানেই দুই পরিণতির পথ আলাদা হয়ে যায়।",
          },
        ],
      },
      {
        h: { en: "Sent Down as Khalifah", bn: "খলীফা হিসেবে অবতরণ" },
        p: [
          {
            en: "The descent is often read as exile. The Quran does not read it so. Earth was the announced destination from the very start (2:30), before the Garden and before the tree. What the descent added was terms: go down, all of you, and when guidance comes to you from Me, whoever follows My guidance will have no fear upon them nor will they grieve (2:38). A place to work, a promise of guidance, and a stated way to be safe.",
            bn: "পৃথিবীতে নেমে আসাকে অনেকে নির্বাসন মনে করেন। কুরআন তা মনে করে না। একেবারে শুরু থেকেই পৃথিবী ছিল ঘোষিত গন্তব্য (2:30), জান্নাতেরও আগে, গাছেরও আগে। নেমে আসার সময় যা যোগ হলো, তা হলো শর্ত: তোমরা সবাই নেমে যাও; এরপর আমার পক্ষ থেকে যখন তোমাদের কাছে হিদায়াত আসবে, তখন যারা আমার হিদায়াত মেনে চলবে, তাদের কোনো ভয় থাকবে না, তারা দুঃখও পাবে না (2:38)। কাজ করার একটি জায়গা, হিদায়াতের প্রতিশ্রুতি, আর নিরাপদ থাকার স্পষ্ট উপায়।",
          },
          {
            en: "Adam therefore stands at the head of two lines at once, the human and the prophetic. Allah chose Adam, Nuh, the family of Ibrahim and the family of Imran above the worlds (3:33). Elsewhere his children are warned not to be tempted as their parents were, since Iblis sees them from where they do not see him (7:27), and reminded that they have been honoured and carried on land and sea (17:70). Honoured and vulnerable, taught and forgetful, and taught how to return.",
            bn: "তাই আদম একসঙ্গে দুটি ধারার শুরুতে দাঁড়িয়ে আছেন: মানুষের ধারা আর নবুয়তের ধারা। আল্লাহ আদম, নূহ, ইবরাহীমের পরিবার ও ইমরানের পরিবারকে বিশ্ববাসীর ওপর বেছে নিয়েছেন (3:33)। আরেক জায়গায় তাঁর সন্তানদের সাবধান করা হয়েছে, তারা যেন বাবা-মায়ের মতো প্রতারিত না হয়, কারণ ইবলিস তাদের দেখে এমন জায়গা থেকে, যেখান থেকে তারা তাকে দেখে না (7:27)। আবার মনে করিয়ে দেওয়া হয়েছে, তাদের সম্মানিত করা হয়েছে, জলে-স্থলে তাদের বহন করা হয়েছে (17:70)। সম্মানিত, তবু দুর্বল; শেখানো হয়েছে, তবু ভুলে যায়; আর ফিরে আসার পথটিও তাদের শিখিয়ে দেওয়া হয়েছে।",
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
            bn: "ইদরিস (আঃ)-এর কথা কুরআনে এসেছে দুবার, আর দুই জায়গা মিলিয়ে মোট চারটি ছোট আয়াত। সূরা মারইয়ামে আল্লাহ যেসব নবীকে অনুগ্রহ করেছেন, তাঁদের মধ্যে তাঁর নাম আসে: কিতাবে ইদরিসের কথা স্মরণ করুন; তিনি ছিলেন সত্যনিষ্ঠ, একজন নবী, আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি (19:56-57)। সূরা আল-আম্বিয়ায় তাঁর নাম এসেছে ইসমাঈল ও যুলকিফলের সঙ্গে; তাঁরা সবাই ধৈর্যশীল, আর আল্লাহ তাঁদের সৎকর্মশীলদের সঙ্গে নিজ রহমতে দাখিল করেন (21:85-86)।",
          },
          {
            en: "That is the whole of it. There is no account of his people, no confrontation with a king, no sign, no punishment, no dialogue. For a Book that gives Nuh an entire surah and Yusuf a continuous chapter, the silence is not an accident of space. It is worth taking Idris exactly as the Quran gives him, because what is said about him in four verses is what the Quran considers worth saying about a life.",
            bn: "এটুকুই সব। তাঁর সম্প্রদায়ের কোনো বিবরণ নেই, কোনো রাজার সঙ্গে সংঘাত নেই, কোনো নিদর্শন নেই, কোনো আজাব নেই, কোনো কথোপকথন নেই। যে কিতাব নূহকে একটি পুরো সূরা দিয়েছে আর ইউসুফের কাহিনি একটানা বলে গেছে, সেখানে এই নীরবতা জায়গার অভাবে নয়। তাই ইদরিসকে ঠিক সেভাবেই নেওয়া ভালো, যেভাবে কুরআন তাঁকে দিয়েছে। কারণ চার আয়াতে তাঁর সম্পর্কে যা বলা হয়েছে, একটি জীবন সম্পর্কে কুরআনের চোখে বলার মতো কথা সেটুকুই।",
          },
        ],
      },
      {
        h: { en: "A Man of Truth", bn: "সত্যনিষ্ঠ এক মানুষ" },
        p: [
          {
            en: "The first word used of him is siddiq, one whose truthfulness is constant enough to become a description of the person rather than of an occasion. The Quran uses it sparingly and always at a height: Ibrahim is called siddiq and a prophet in the same surah (19:41), and so is Yusuf by the man who came to him in prison (12:46). Idris is placed in that company by a single word.",
            bn: "তাঁর জন্য ব্যবহৃত প্রথম শব্দটি সিদ্দীক: এমন মানুষ, যাঁর সত্যবাদিতা এতটাই স্থায়ী যে তা কোনো একটি উপলক্ষের নয়, মানুষটিরই পরিচয় হয়ে যায়। কুরআন শব্দটি খুব কম ব্যবহার করে, আর যখন করে, সবসময় উঁচু মর্যাদার মানুষের বেলায়। একই সূরায় ইবরাহীমকে সিদ্দীক ও নবী বলা হয়েছে (19:41); কারাগারে যে লোকটি ইউসুফের কাছে এসেছিল, সে-ও তাঁকে এই শব্দে ডেকেছে (12:46)। একটিমাত্র শব্দে ইদরিসকে সেই সারিতে বসানো হয়েছে।",
          },
          {
            en: "Siddiq is not only speaking accurately. It is a life in which word, belief and action do not contradict one another, so that a person can be believed on his report about the unseen because he has never been found false about the seen. Allah names the siddiqun as one of the four ranks a servant may be gathered with, after the prophets and before the martyrs and the righteous (4:69). It is the highest rank a non-prophet can reach.",
            bn: "সিদ্দীক মানে কেবল ঠিক কথা বলা নয়। এ এমন এক জীবন, যেখানে কথা, বিশ্বাস আর কাজ একে অপরের উল্টো চলে না। তাই গায়েব সম্পর্কে তাঁর খবর বিশ্বাস করা যায়, কারণ চোখে দেখা বিষয়ে তাঁকে কখনো মিথ্যা বলতে পাওয়া যায়নি। আল্লাহ চারটি দলের কথা বলেছেন, যাঁদের সঙ্গে বান্দাকে একত্র করা হতে পারে; সিদ্দীকরা তার একটি, নবীদের পরে এবং শহীদ ও সৎকর্মশীলদের আগে (4:69)। নবী নন এমন কারও জন্য এটিই সর্বোচ্চ মর্যাদা।",
          },
        ],
      },
      {
        h: { en: "Counted Among the Patient", bn: "ধৈর্যশীলদের অন্তর্ভুক্ত" },
        p: [
          {
            en: "The second passage places him among those who were patient (21:85). The grouping is instructive. Isma'il was patient under the knife and in a barren valley; Dhul-Kifl is himself barely detailed in the Quran. Sabr is the quality that binds three very different lives, and it is named as the reason they were admitted into Allah's mercy (21:86) — not their achievements, which the Quran does not list.",
            bn: "দ্বিতীয় অংশে তাঁকে রাখা হয়েছে ধৈর্যশীলদের মধ্যে (21:85)। কাদের সঙ্গে রাখা হলো, সেটাও শিক্ষণীয়। ইসমাঈল ধৈর্য ধরেছিলেন ছুরির নিচে, আর এক শুকনো উপত্যকায়; যুলকিফলের কথাও কুরআনে প্রায় বিস্তারিত নেই। সবরই সেই গুণ, যা তিনটি একেবারে ভিন্ন জীবনকে এক সুতোয় গেঁথেছে। আর আল্লাহর রহমতে তাঁদের দাখিল হওয়ার কারণ হিসেবেও এটিকেই বলা হয়েছে (21:86), তাঁদের কীর্তিকে নয়; কুরআন সেসব কীর্তির তালিকাই দেয়নি।",
          },
          {
            en: "Patience in the Quran is active, not passive. It is holding a position under pressure over time: continuing to call, continuing to worship, continuing to be truthful when nothing visible rewards it. Allah gives glad tidings to the patient, those who say when a calamity strikes them that they belong to Allah and to Him they return, and upon them are blessings and mercy from their Lord (2:155-157). Idris is remembered for having been that kind of man.",
            bn: "কুরআনে সবর নিষ্ক্রিয়তা নয়, সক্রিয় একটি গুণ। চাপের মধ্যে দিনের পর দিন নিজের জায়গায় অটল থাকা: ডেকে যাওয়া, ইবাদত চালিয়ে যাওয়া, সত্যের ওপর থাকা, এমনকি যখন চোখে পড়ার মতো কোনো প্রতিদান নেই তখনও। আল্লাহ ধৈর্যশীলদের সুসংবাদ দেন, যারা বিপদে পড়লে বলে: আমরা আল্লাহরই, আর তাঁর কাছেই ফিরে যাব; তাদের ওপরই রয়েছে তাদের প্রভুর পক্ষ থেকে বরকত ও রহমত (2:155-157)। ইদরিসকে মনে রাখা হয় ঠিক এমন একজন মানুষ হিসেবে।",
          },
        ],
      },
      {
        h: { en: "Raised to a High Station", bn: "উচ্চ মর্যাদায় উন্নীত" },
        p: [
          {
            en: "And We raised him to a high station (19:57). The phrase is the most discussed thing about him, and the honest position is that the Quran does not define it. Commentators have understood it as elevation of rank with Allah, and others as a physical raising. The verse itself supplies no place, no time and no manner, and nothing in the sound Sunnah settles the question.",
            bn: "আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি (19:57)। তাঁকে নিয়ে সবচেয়ে বেশি আলোচনা এই কথাটি নিয়েই, আর সৎভাবে বললে: কুরআন এর ব্যাখ্যা দেয়নি। মুফাসসিরদের কেউ এর অর্থ বুঝেছেন আল্লাহর কাছে মর্যাদা বৃদ্ধি, কেউ বুঝেছেন সশরীরে তুলে নেওয়া। আয়াতটি নিজে কোনো স্থান, সময় বা ধরন বলে না, আর সহিহ সুন্নাহতেও এমন কিছু নেই যা প্রশ্নটির মীমাংসা করে।",
          },
          {
            en: "What the verse does establish is the order of cause and effect, and that is the teachable part. He was truthful and a prophet, and then he was raised. Rank with Allah in this account is a consequence, not a starting condition, and it is granted for character rather than claimed by it. The same surah closes the list of favoured prophets by saying that when the verses of the Most Merciful were recited to them, they fell down prostrate and weeping (19:58).",
            bn: "আয়াতটি যা নিশ্চিত করে, তা হলো কারণ আর ফলের ক্রম; শেখার বিষয়ও এটাই। তিনি সত্যনিষ্ঠ ছিলেন, নবী ছিলেন, তারপর তাঁকে উঁচুতে তোলা হলো। এই বর্ণনায় আল্লাহর কাছে মর্যাদা হলো ফল, শুরুর শর্ত নয়। চরিত্রের জন্য তা দান করা হয়; চরিত্রের জোরে দাবি করে নেওয়া যায় না। একই সূরা অনুগ্রহপ্রাপ্ত নবীদের তালিকা শেষ করেছে এই বলে: তাঁদের সামনে পরম দয়াময়ের আয়াত তিলাওয়াত করা হলে তাঁরা কাঁদতে কাঁদতে সিজদায় লুটিয়ে পড়তেন (19:58)।",
          },
        ],
      },
      {
        h: { en: "What Is Not Established", bn: "যা প্রমাণিত নয়" },
        p: [
          {
            en: "Later literature attaches a great deal to Idris: that he was the first to write with a pen, the first to sew garments, an astronomer, a builder of cities, and identical with figures from other traditions. None of that comes from the Quran, and none of it rests on a chain that a careful teacher would accept. Much of it entered the books as israiliyyat, material narrated from earlier scriptural communities and preserved without a verdict on its truth.",
            bn: "পরবর্তীকালের বইপত্রে ইদরিসের নামে অনেক কিছু জুড়ে দেওয়া হয়েছে: তিনিই প্রথম কলম দিয়ে লিখেছেন, প্রথম কাপড় সেলাই করেছেন, তিনি ছিলেন জ্যোতির্বিদ, নগর নির্মাতা; এমনকি অন্য ধর্মীয় ঐতিহ্যের কোনো কোনো ব্যক্তির সঙ্গে তাঁকে এক করে দেখা হয়েছে। এর কোনোটিই কুরআন থেকে আসেনি, আর কোনোটিই এমন সনদের ওপর দাঁড়িয়ে নেই, যা একজন সতর্ক শিক্ষক গ্রহণ করবেন। এর বড় অংশ বইপত্রে ঢুকেছে ইসরাঈলিয়াত হিসেবে, অর্থাৎ আগের কিতাবধারী সম্প্রদায়গুলো থেকে বর্ণিত কথা, যা সত্য কি মিথ্যা সে রায় ছাড়াই সংরক্ষিত হয়েছে।",
          },
          {
            en: "Even the relationship between Idris and the prophets around him is left open: whether he came before Nuh or after him is not stated in any binding text. Saying so plainly is not a loss. A student who learns to say that a detail is unknown has learned the discipline that protects the parts of the religion that are known, and the Quran models that discipline by refusing to fill the gap itself.",
            bn: "এমনকি আশপাশের নবীদের সঙ্গে ইদরিসের সম্পর্কও খোলা রাখা হয়েছে: তিনি নূহের আগে এসেছেন নাকি পরে, কোনো অকাট্য দলিলে তা বলা নেই। এ কথা সোজাসুজি স্বীকার করায় কোনো ক্ষতি নেই। যে শিক্ষার্থী বলতে শেখে, এই তথ্যটি জানা নেই, সে এমন এক সংযম শিখল যা দ্বীনের জানা অংশগুলোকে রক্ষা করে। আর কুরআন নিজেই ফাঁকটি ভরাট না করে সেই সংযমের নমুনা দেখিয়েছে।",
          },
        ],
      },
      {
        h: { en: "Why So Little Is Enough", bn: "এত অল্পই কেন যথেষ্ট" },
        p: [
          {
            en: "Read together, the two passages describe a complete life without a single event in it. He was true, he was sent, he endured, he was raised, and he was received into mercy among the righteous. Nothing in that sequence depends on circumstance. A person with no public role and no dramatic trial can be measured against every item on the list, which may be precisely why the Quran left the circumstances out.",
            bn: "দুটি অংশ একসঙ্গে পড়লে দেখা যায়, একটিও ঘটনা ছাড়া একটি পূর্ণ জীবনের ছবি আঁকা হয়েছে। তিনি সত্যনিষ্ঠ ছিলেন, প্রেরিত হয়েছিলেন, ধৈর্য ধরেছিলেন, উঁচু মর্যাদা পেয়েছিলেন, আর সৎকর্মশীলদের সঙ্গে আল্লাহর রহমতে স্থান পেয়েছিলেন। এই ধারার কোনো কিছুই পরিস্থিতির ওপর নির্ভর করে না। যার জনজীবনে কোনো ভূমিকা নেই, কোনো নাটকীয় পরীক্ষাও আসেনি, সে-ও এই তালিকার প্রতিটি বিষয়ে নিজেকে মেপে দেখতে পারে। হয়তো ঠিক এ কারণেই কুরআন পরিস্থিতির বিবরণ বাদ রেখেছে।",
          },
          {
            en: "There is also a lesson in the proportion. Prophets whose stories fill pages are remembered for what happened to them; Idris is remembered for what he was. When Allah chose the shortest possible summary of a prophet, He chose truthfulness and patience, and He attached the elevation to those two things. That is the whole article, and it is enough to build a life on.",
            bn: "কার কথা কতটুকু বলা হলো, তার মধ্যেও একটি শিক্ষা আছে। যেসব নবীর কাহিনি পাতার পর পাতা জুড়ে, তাঁদের মনে রাখা হয় তাঁদের জীবনে যা ঘটেছে তার জন্য; ইদরিসকে মনে রাখা হয় তিনি যেমন ছিলেন তার জন্য। একজন নবীর পরিচয় যত ছোট করে বলা সম্ভব, সেভাবে বলতে গিয়ে আল্লাহ বেছে নিলেন সত্যনিষ্ঠা আর সবর, এবং উঁচু মর্যাদাকে জুড়ে দিলেন এই দুটির সঙ্গেই। পুরো আলোচনা এটুকুই, আর একটি জীবন গড়ার জন্য এটুকুই যথেষ্ট।",
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
            bn: "কিয়ামতের দিন মানুষ যখন সুপারিশকারী খুঁজে বেড়াবে, তারা নূহ (আঃ)-এর কাছে এসে তাঁকে ডাকবে পৃথিবীবাসীর কাছে আল্লাহর পাঠানো প্রথম রাসূল বলে। সহিহ হাদিসগ্রন্থগুলোতে নবী ﷺ এ কথা বর্ণনা করেছেন। আদম পথ দেখিয়েছিলেন নিজের সন্তানদের; আর নূহই প্রথম প্রেরিত হন এমন এক জাতির কাছে, যারা আগেই মুখ ফিরিয়ে নিয়েছিল। তাঁর সূরাটি শুরু হয় এই দায়িত্ব দিয়ে: তোমার সম্প্রদায়কে সতর্ক করো, তাদের ওপর যন্ত্রণাদায়ক শাস্তি আসার আগেই (71:1)।",
          },
          {
            en: "What they had turned to is named in the same surah. They refused to abandon their gods — Wadd, Suwa', Yaghuth, Ya'uq and Nasr (71:23) — and would not give them up for anything he said. Idolatry, in the Quran's first extended account of it, does not arrive as a decision anyone makes. It accumulates over generations, and by the time Nuh arrived it was simply the religion of the society, defended as inheritance rather than argued for.",
            bn: "তারা কিসের দিকে ফিরেছিল, তা একই সূরায় নাম ধরে বলা আছে। তারা নিজেদের দেবতাদের ছাড়তে রাজি হয়নি: ওয়াদ্দ, সুওয়া, ইয়াগূস, ইয়াঊক ও নাসর (71:23)। নূহ যা-ই বলুন, তারা এগুলো ছাড়বে না। মূর্তিপূজা নিয়ে কুরআনের প্রথম বিস্তারিত বিবরণে দেখা যায়, এটা কেউ একদিন বসে ঠিক করে নেয়নি। প্রজন্মের পর প্রজন্ম ধরে তা জমে উঠেছে। নূহ যখন এলেন, তখন সেটাই সমাজের চলতি ধর্ম; লোকেরা যুক্তি দিয়ে নয়, বাপ-দাদার উত্তরাধিকার বলে তা আঁকড়ে রাখত।",
          },
        ],
      },
      {
        h: { en: "The Argument of His People", bn: "তাঁর সম্প্রদায়ের যুক্তি" },
        p: [
          {
            en: "Their objections are preserved almost as a transcript. The chiefs who disbelieved said he was only a man like themselves, that no one followed him but the lowest among them, following without thought, and that they saw in him and his people no merit over themselves — indeed they thought them liars (11:27). Every element of that reply would be repeated to later messengers: the messenger is ordinary, his followers are poor, and the objectors are fit to judge.",
            bn: "তাদের আপত্তিগুলো প্রায় হুবহু লিখে রাখা আছে। সম্প্রদায়ের কাফির নেতারা বলেছিল: তুমি তো আমাদেরই মতো একজন মানুষ; আমাদের মধ্যে যারা সবচেয়ে নিচু, তারাই না ভেবেচিন্তে তোমার পেছনে চলেছে; তোমাদের মধ্যে আমরা নিজেদের চেয়ে বাড়তি কোনো গুণ দেখি না, বরং তোমাদের মিথ্যাবাদীই মনে করি (11:27)। এই জবাবের প্রতিটি কথা পরের রাসূলদেরও শুনতে হয়েছে: রাসূল সাধারণ মানুষ, তাঁর অনুসারীরা গরিব, আর বিচার করার অধিকার আপত্তিকারীদেরই।",
          },
          {
            en: "Nuh refused the premise rather than the tone. He would not drive away those who believed, for they were to meet their Lord, and he told the chiefs plainly that he saw them as ignorant people (11:29-30). He asked no payment; his reward was upon Allah alone. A community that will not sort its members by wealth is one its opponents cannot buy, which is part of why the opposition moved from argument to mockery and threat.",
            bn: "নূহ তাদের কথার ধরন নিয়ে আপত্তি তোলেননি, আপত্তি তুলেছেন গোড়ার যুক্তিটি নিয়েই। যারা ঈমান এনেছে, তিনি তাদের তাড়িয়ে দেবেন না; তারা তো তাদের প্রভুর সঙ্গে সাক্ষাৎ করবে। আর নেতাদের তিনি সোজাসুজি বলে দেন, আমি তো দেখছি তোমরা এক মূর্খ সম্প্রদায় (11:29-30)। তিনি কোনো পারিশ্রমিক চাননি; তাঁর প্রতিদান কেবল আল্লাহর কাছে। যে দল ধনসম্পদ দেখে নিজের লোকদের উঁচু-নিচু ভাগ করে না, বিরোধীরা তাকে টাকা দিয়ে কিনতে পারে না। এ কারণেও বিরোধিতা যুক্তি ছেড়ে উপহাস আর হুমকিতে নেমে আসে।",
          },
        ],
      },
      {
        h: { en: "Nine Hundred and Fifty Years", bn: "সাড়ে নয়শ বছর" },
        p: [
          {
            en: "He remained among them a thousand years less fifty (29:14). The figure is given by Allah rather than estimated, and it is the measure of the whole story. He called them night and day (71:5), then openly, then privately again (71:8-9), and each time they thrust their fingers into their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance (71:7).",
            bn: "তিনি তাদের মধ্যে ছিলেন পঞ্চাশ কম হাজার বছর (29:14)। সংখ্যাটি কারও অনুমান নয়, আল্লাহ নিজেই বলেছেন; আর গোটা কাহিনির মাপ এই সংখ্যাটিই। তিনি তাদের ডেকেছেন রাতদিন (71:5); তারপর প্রকাশ্যে, তারপর আবার গোপনে (71:8-9)। আর প্রতিবারই তারা কানে আঙুল দিয়েছে, কাপড় দিয়ে নিজেদের ঢেকে নিয়েছে, জেদ ধরে থেকেছে, আর চরম অহংকার দেখিয়েছে (71:7)।",
          },
          {
            en: "His method deserves study, because it was never only warning. He told them to seek forgiveness from their Lord, who is ever forgiving, and promised on Allah's authority that He would send the sky upon them in abundant rain, increase them in wealth and children, and make for them gardens and rivers (71:10-12). The call offered them the very world they were chasing, on the only terms that would not ruin them.",
            bn: "তাঁর পদ্ধতিটি ভেবে দেখার মতো, কারণ তা কখনোই কেবল ভয় দেখানো ছিল না। তিনি তাদের বলেন নিজেদের প্রভুর কাছে ক্ষমা চাইতে, যিনি বড়ই ক্ষমাশীল; আর আল্লাহর পক্ষ থেকে কথা দেন, তিনি তাদের ওপর আকাশ থেকে প্রচুর বৃষ্টি পাঠাবেন, ধনসম্পদ ও সন্তান বাড়িয়ে দেবেন, তাদের জন্য বাগান ও নদী বানিয়ে দেবেন (71:10-12)। এই দাওয়াত তাদের হাতে তুলে দিতে চেয়েছিল সেই দুনিয়াই, যার পেছনে তারা ছুটছিল; শুধু এমন শর্তে, যাতে সেই দুনিয়া তাদের ধ্বংস না করে।",
          },
        ],
      },
      {
        h: { en: "Building the Ark", bn: "নৌকা নির্মাণ" },
        p: [
          {
            en: "The end of the calling was decided by Allah, not by the messenger's fatigue: none of your people will believe except those who have already believed (11:36). Only a few had believed across all those centuries, which by any measure a person applies to his own work is failure, and which the Quran counts among the great successes of prophethood. Then came the order to build the ship under Our eyes and Our revelation (11:37). He built it, and the chiefs ridiculed him whenever they passed by (11:38).",
            bn: "দাওয়াত কবে শেষ হবে, তা ঠিক করেছেন আল্লাহ, রাসূলের ক্লান্তি নয়: তোমার সম্প্রদায়ের যারা ঈমান এনেছে, তারা ছাড়া আর কেউ ঈমান আনবে না (11:36)। এত শতাব্দী ধরে ঈমান এনেছিল অল্প কয়েকজন মাত্র। নিজের কাজ মাপতে মানুষ যে মাপকাঠিই ব্যবহার করুক, এটা ব্যর্থতা; অথচ কুরআন একে নবুয়তের বড় সাফল্যগুলোর মধ্যে গণ্য করে। এরপর হুকুম এল: আমার চোখের সামনে, আমার ওহি অনুযায়ী নৌকা বানাও (11:37)। তিনি নৌকা বানাতে থাকেন, আর নেতারা যতবার পাশ দিয়ে যেত, ততবার তাঁকে নিয়ে ঠাট্টা করত (11:38)।",
          },
          {
            en: "The signal was precise and strange: when Our command came and the oven overflowed (11:40). He was told to load pairs of every kind, his household except those against whom the word had preceded, and those who believed. Then he said, embark in it, in the name of Allah is its course and its anchorage — indeed my Lord is Forgiving and Merciful (11:41). The sky was opened with pouring water and the earth burst with springs, for a matter already decreed (54:11-12).",
            bn: "সংকেতটি ছিল নির্দিষ্ট, আবার অদ্ভুতও: যখন আমার হুকুম এল এবং চুলা উথলে উঠল (11:40)। তাঁকে বলা হলো, প্রত্যেক প্রাণীর এক জোড়া করে নৌকায় তুলে নাও; নিজের পরিবারকেও তোলো, তবে তাদের বাদে, যাদের ব্যাপারে আগেই কথা চূড়ান্ত হয়ে গেছে; আর তোলো যারা ঈমান এনেছে তাদের। তারপর তিনি বললেন: এতে উঠে পড়ো; আল্লাহর নামেই এর চলা আর এর থামা; নিশ্চয়ই আমার প্রভু ক্ষমাশীল, দয়ালু (11:41)। আকাশের দুয়ার খুলে দেওয়া হলো মুষলধারে বৃষ্টি নিয়ে, মাটি ফেটে বেরিয়ে এল ঝরনা, আগে থেকে স্থির করে রাখা এক ফয়সালার জন্য (54:11-12)।",
          },
        ],
      },
      {
        h: { en: "The Son Who Refused", bn: "যে পুত্র অস্বীকার করল" },
        p: [
          {
            en: "As the ship moved through waves like mountains, Nuh called out to a son who had stayed apart: O my son, embark with us and do not be with the disbelievers (11:42). The boy answered that a mountain would shelter him from the water. Nuh replied that there was no protector that day from the decree of Allah except for the one He had mercy upon — and a wave came between them, and he was among the drowned (11:43).",
            bn: "নৌকা যখন পাহাড়ের মতো ঢেউ ভেঙে চলছিল, নূহ দূরে সরে থাকা নিজের এক ছেলেকে ডাকলেন: হে আমার পুত্র, আমাদের সঙ্গে উঠে এসো, কাফিরদের সঙ্গে থেকো না (11:42)। ছেলেটি জবাব দিল, সে কোনো পাহাড়ে আশ্রয় নেবে, সেটাই তাকে পানি থেকে বাঁচাবে। নূহ বললেন, আজ আল্লাহর ফয়সালা থেকে বাঁচানোর কেউ নেই, কেবল সে ছাড়া যাকে তিনি দয়া করেন। ঠিক তখনই দুজনের মাঝে এসে পড়ল এক ঢেউ, আর সে ডুবে যাওয়াদের দলে চলে গেল (11:43)।",
          },
          {
            en: "It is the sharpest moment in the account. A man had spent nine and a half centuries calling strangers, and the one he could not bring was his own child. Faith is not inherited and cannot be transferred by a father's standing, however high that standing is — the same truth later stated to the Prophet ﷺ himself, that he does not guide whom he likes, but Allah guides whom He wills (28:56).",
            bn: "পুরো কাহিনির সবচেয়ে মর্মান্তিক মুহূর্ত এটিই। যে মানুষ সাড়ে নয়শ বছর ধরে অচেনা মানুষদের ডেকে গেছেন, তিনি নিজের সন্তানকেই আনতে পারলেন না। ঈমান উত্তরাধিকারে পাওয়া যায় না; বাবার মর্যাদা যত উঁচুই হোক, তা দিয়ে ঈমান অন্যের কাছে হস্তান্তর করা যায় না। পরে একই সত্য স্বয়ং নবী ﷺ-কে জানানো হয়েছে: আপনি যাকে ভালোবাসেন তাকে হিদায়াত দিতে পারবেন না; বরং আল্লাহ যাকে চান, তাকে হিদায়াত দেন (28:56)।",
          },
        ],
      },
      {
        h: { en: "The Plea and the Correction", bn: "আবেদন ও সংশোধন" },
        p: [
          {
            en: "When the water subsided and the ship came to rest upon al-Judi (11:44), Nuh called upon his Lord: my son is of my family, and Your promise is true, and You are the most just of judges (11:45). He was appealing to the promise that his household would be saved. The plea was sincere, made by a prophet, and the answer nonetheless corrected it.",
            bn: "পানি নেমে গেল, নৌকা গিয়ে থামল জুদি পাহাড়ে (11:44)। তখন নূহ তাঁর প্রভুকে ডেকে বললেন: আমার ছেলে তো আমার পরিবারেরই একজন, আপনার প্রতিশ্রুতি সত্য, আর আপনিই সবচেয়ে ন্যায়পরায়ণ বিচারক (11:45)। তিনি সেই প্রতিশ্রুতির কথা মনে করিয়ে দিচ্ছিলেন যে, তাঁর পরিবারকে বাঁচানো হবে। আবেদনটি ছিল আন্তরিক, এসেছিল একজন নবীর মুখ থেকে; তবু জবাবে তা শুধরে দেওয়া হলো।",
          },
          {
            en: "O Nuh, he is not of your family; it is a deed other than righteous, so do not ask Me for that of which you have no knowledge, lest you be among the ignorant (11:46). Kinship in this religion is conduct, not blood. Nuh's reply is the model answer to correction: my Lord, I seek refuge in You from asking what I have no knowledge of, and unless You forgive me and have mercy upon me I will be among the losers (11:47). He was told to descend with peace and blessings (11:48), and Allah left his mention among later generations: peace upon Nuh among the worlds (37:78-79).",
            bn: "হে নূহ, সে তোমার পরিবারের নয়; তার কাজ সৎকাজ নয়। সুতরাং যে বিষয়ে তোমার জ্ঞান নেই, তা আমার কাছে চেয়ো না; আমি তোমাকে উপদেশ দিচ্ছি, যেন তুমি অজ্ঞদের অন্তর্ভুক্ত না হও (11:46)। এই দ্বীনে আত্মীয়তা রক্তের নয়, আমলের। শুধরে দেওয়া হলে কীভাবে সাড়া দিতে হয়, নূহের জবাব তার আদর্শ: হে আমার প্রভু, যে বিষয়ে আমার জ্ঞান নেই, তা চাওয়া থেকে আমি আপনার আশ্রয় চাই; আপনি যদি আমাকে ক্ষমা না করেন, আমার প্রতি রহম না করেন, তবে আমি ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব (11:47)। এরপর তাঁকে বলা হলো, শান্তি ও বরকত নিয়ে নেমে যাও (11:48)। আর আল্লাহ পরবর্তী প্রজন্মগুলোর মাঝে তাঁর স্মরণ রেখে দিলেন: সমগ্র বিশ্বে নূহের প্রতি সালাম (37:78-79)।",
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
            bn: "হুদ (আঃ)-এর পরিচয় দেওয়ার আগেই কুরআন জানিয়ে দেয়, তাঁর সম্প্রদায় কেমন ছিল। তুমি কি দেখোনি, তোমার প্রভু আদ জাতির সঙ্গে কী করেছেন? সুউচ্চ স্তম্ভের অধিকারী ইরাম, যার মতো কিছু কোনো দেশে সৃষ্টি করা হয়নি (89:6-8)। তারা ছিল নিজেদের যুগের সবচেয়ে বড় শক্তি, আর কুরআন তাদের কীর্তি অস্বীকার করে না। কুরআন সেই কীর্তির কথা জানায়, তারপর প্রশ্ন তোলে: এই কীর্তি দিয়ে তারা করল কী?",
          },
          {
            en: "Their works are described exactly. Do you build on every elevation a landmark, amusing yourselves, and take for yourselves strongholds as though you would live forever, and when you strike, you strike as tyrants (26:128-130). Monuments, fortresses and force, in that order. The objection is not to building. It is to building as a way of forgetting that one will die, and to strength that answers to nothing above itself.",
            bn: "তাদের কাজকর্মের বর্ণনাও একদম নির্দিষ্ট। তোমরা কি প্রতিটি উঁচু জায়গায় খেলাচ্ছলে স্মৃতিস্তম্ভ গড়ছ, আর দুর্গ বানাচ্ছ যেন চিরকাল বেঁচে থাকবে? আর যখন আঘাত করো, আঘাত করো জালিমের মতো (26:128-130)। স্মৃতিস্তম্ভ, দুর্গ আর জোর-জবরদস্তি, ঠিক এই ক্রমে। আপত্তি নির্মাণ নিয়ে নয়। আপত্তি এমন নির্মাণ নিয়ে, যা মৃত্যুর কথা ভুলে থাকার উপায় হয়ে ওঠে; আর এমন শক্তি নিয়ে, যা নিজের ওপরে কারও কাছে জবাবদিহি করে না।",
          },
        ],
      },
      {
        h: { en: "Their Brother Hud", bn: "তাদেরই ভাই হুদ" },
        p: [
          {
            en: "To 'Ad Allah sent their brother Hud (7:65). The phrase matters. He was one of them, not a stranger with a grievance, and his message was the message of every messenger before and after him: worship Allah, you have no deity other than Him. To that he added a single question shaped for his audience — will you not then fear Him?",
            bn: "আদ জাতির কাছে আল্লাহ পাঠালেন তাদেরই ভাই হুদকে (7:65)। কথাটি খেয়াল করার মতো। তিনি ছিলেন তাদেরই একজন, কোনো ক্ষোভ নিয়ে আসা বাইরের লোক নন। আর তাঁর বার্তা ছিল আগের-পরের সব রাসূলের সেই একই বার্তা: আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। এর সঙ্গে তিনি জুড়ে দিলেন একটিমাত্র প্রশ্ন, যা ঠিক তাঁর শ্রোতাদের মাপে গড়া: তবু কি তোমরা তাঁকে ভয় করবে না?",
          },
          {
            en: "He asked them for nothing at all. My people, I do not ask you for any reward for it; my reward is only from the One who created me (11:51). A man who wants nothing from his listeners removes the explanation they would most like to use. 'Ad were left holding a claim they had to answer on its merits, rather than by guessing at the motive of the man making it.",
            bn: "তিনি তাদের কাছে কিছুই চাননি। হে আমার সম্প্রদায়, এর জন্য আমি তোমাদের কাছে কোনো প্রতিদান চাই না; আমার প্রতিদান কেবল তাঁর কাছে, যিনি আমাকে সৃষ্টি করেছেন (11:51)। যে মানুষ শ্রোতাদের কাছে কিছুই চায় না, তার বিরুদ্ধে শ্রোতাদের সবচেয়ে সুবিধার অজুহাতটিই আর খাটে না। আদ জাতির সামনে তখন রইল একটি দাবি, যার জবাব দিতে হবে দাবির যুক্তি দেখেই; দাবিদারের মতলব আন্দাজ করে নয়।",
          },
        ],
      },
      {
        h: { en: "What They Answered", bn: "তাদের জবাব" },
        p: [
          {
            en: "They answered first with contempt. The chiefs who disbelieved among his people said they saw him in foolishness, and they thought him one of the liars (7:66). Then they demanded the punishment itself: bring us what you promise us, if you are of the truthful (7:70). It is the demand of people certain that nothing will happen, made about the one thing they could not have survived.",
            bn: "প্রথম জবাব ছিল অবজ্ঞা। তাঁর সম্প্রদায়ের কাফির নেতারা বলল, আমরা তো দেখছি তুমি নির্বুদ্ধিতায় ডুবে আছ, আর আমাদের মনে হয় তুমি মিথ্যাবাদীদের একজন (7:66)। এরপর তারা শাস্তিটাই চেয়ে বসল: তুমি সত্যবাদী হলে আমাদের যার ভয় দেখাচ্ছ, তা নিয়ে এসো (7:70)। যারা নিশ্চিত যে কিছুই ঘটবে না, এ তাদেরই দাবি; অথচ তারা চাইছিল ঠিক সেই জিনিস, যার হাত থেকে বেঁচে যাওয়ার কোনো উপায় তাদের ছিল না।",
          },
          {
            en: "Their deeper argument was religious rather than rational. We say only that some of our gods have afflicted you with evil (11:54). His preaching against the idols was explained as a madness the idols themselves had sent upon him. When a society's gods double as its explanation for dissent, the dissenter cannot be heard at all, and it is at this point that argument ended between Hud and his people.",
            bn: "তাদের আসল যুক্তিটা ছিল ধর্মীয়, বুদ্ধির নয়: আমরা তো শুধু এটুকুই বলি, আমাদের কোনো এক দেবতা তোমার ওপর আছর করেছে (11:54)। মূর্তির বিরুদ্ধে তাঁর দাওয়াতকে তারা ব্যাখ্যা করল এক পাগলামি হিসেবে, যা স্বয়ং মূর্তিরাই তাঁর ওপর চাপিয়ে দিয়েছে। কোনো সমাজের দেবতারাই যখন ভিন্নমতের ব্যাখ্যা হয়ে দাঁড়ায়, তখন ভিন্নমতের মানুষটির কথা আর শোনাই যায় না। হুদ ও তাঁর সম্প্রদায়ের মধ্যে যুক্তির আলাপ এখানেই শেষ হয়ে গেল।",
          },
        ],
      },
      {
        h: { en: "The Reply of Hud", bn: "হুদের জবাব" },
        p: [
          {
            en: "His answer is one of the strongest declarations of tawhid in the Quran. I call Allah to witness, and you bear witness, that I am free of what you associate with Him. So plot against me all together and give me no respite. I have relied upon Allah, my Lord and your Lord — there is no creature but He holds it by its forelock (11:54-56).",
            bn: "তাঁর জবাবটি কুরআনের সবচেয়ে শক্তিশালী তাওহীদের ঘোষণাগুলোর একটি। আমি আল্লাহকে সাক্ষী রাখছি, আর তোমরাও সাক্ষী থাকো যে, তোমরা যাদের শরিক করো আমি তাদের থেকে সম্পূর্ণ মুক্ত। তাই তোমরা সবাই মিলে আমার বিরুদ্ধে ষড়যন্ত্র করো, আমাকে কোনো অবকাশ দিয়ো না। আমি ভরসা করেছি আল্লাহর ওপর, যিনি আমার প্রভু, তোমাদেরও প্রভু; এমন কোনো প্রাণী নেই, যার কপালের চুল তাঁর মুঠোয় ধরা নয় (11:54-56)।",
          },
          {
            en: "He then told them what refusal would cost, and what it would not. If you turn away, I have already conveyed to you what I was sent with, and my Lord will replace you with another people, and you will not harm Him at all (11:57). The messenger's task is delivery. The outcome belongs to Allah, and the loss in rejecting Him falls entirely on those who reject.",
            bn: "তারপর তিনি জানিয়ে দেন, প্রত্যাখ্যানের পরিণাম কী হবে, আর কী হবে না। তোমরা যদি মুখ ফিরিয়ে নাও, তবে জেনে রাখো, যা নিয়ে আমাকে পাঠানো হয়েছে তা আমি তোমাদের কাছে পৌঁছে দিয়েছি; আমার প্রভু তোমাদের জায়গায় অন্য এক জাতিকে বসাবেন, আর তোমরা তাঁর কোনো ক্ষতিই করতে পারবে না (11:57)। রাসূলের কাজ পৌঁছে দেওয়া। ফলাফল আল্লাহর হাতে, আর তাঁকে প্রত্যাখ্যানের পুরো ক্ষতি পড়ে প্রত্যাখ্যানকারীদের ঘাড়েই।",
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
            bn: "এরপর ধ্বংস এল ঠিক সেই বেশে, যা তারা সবচেয়ে বেশি চাইছিল। যখন তারা দেখল ঘন এক মেঘ তাদের উপত্যকার দিকে আসছে, তারা বলল, এ তো মেঘ, আমাদের বৃষ্টি দেবে। বরং এটি সেটিই, যার জন্য তোমরা তাড়াহুড়ো করছিলে: এমন এক বাতাস, যাতে রয়েছে যন্ত্রণাদায়ক শাস্তি (46:24)। সকাল হতেই তাদের বসতিগুলো ছাড়া আর কিছুই দেখা গেল না (46:25)।",
          },
        ],
      },
      {
        h: { en: "The Wind and the Pattern", bn: "ঝড় ও ধারাবাহিকতা" },
        p: [
          {
            en: "As for 'Ad, they were destroyed by a screaming, violent wind, which Allah imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees (69:6-7). A wind is the softest instrument imaginable, and it was turned against the people who measured everything by force. Hud and those who believed with him were saved by a mercy from Allah (11:58).",
            bn: "আর আদ জাতি, তাদের ধ্বংস করা হয়েছিল প্রচণ্ড গর্জনের এক তীব্র ঝড়ে, যা আল্লাহ তাদের ওপর চাপিয়ে রেখেছিলেন একটানা সাত রাত আট দিন; তখন তুমি দেখতে, মানুষগুলো সেখানে পড়ে আছে যেন ফাঁপা খেজুরগাছের কাণ্ড (69:6-7)। বাতাসের চেয়ে কোমল কিছু ভাবাই কঠিন; অথচ সেটিকেই পাঠানো হলো সেই জাতির বিরুদ্ধে, যারা সবকিছু মাপত গায়ের জোরে। হুদ ও তাঁর সঙ্গে যারা ঈমান এনেছিল, তাঁরা আল্লাহর রহমতে রক্ষা পান (11:58)।",
          },
          {
            en: "The Quran then sets 'Ad beside Thamud again and again — in Surah al-A'raf, in Surah Hud, in Surah al-Fajr — always in the same order and always for the same reason. Two peoples, two different gifts, two clear warnings delivered by a brother from among them, and two identical refusals. The pattern is itself the argument: what ruined them was not their strength but the conclusion they drew from it.",
            bn: "এরপর কুরআন বারবার আদের পাশে সামুদকে রাখে: সূরা আল-আরাফে, সূরা হুদে, সূরা আল-ফাজরে। সবসময় একই ক্রমে, সবসময় একই কারণে। দুটি জাতি, দুই রকম নিয়ামত; তাদেরই এক ভাইয়ের মুখে দুটি স্পষ্ট সতর্কবাণী; আর হুবহু একই রকম দুটি প্রত্যাখ্যান। এই পুনরাবৃত্তিটাই আসল যুক্তি: তাদের ধ্বংস করেছিল তাদের শক্তি নয়, বরং সেই শক্তি দেখে তারা যে সিদ্ধান্তে পৌঁছেছিল, সেটাই।",
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
            en: "Remember when He made you successors after 'Ad and settled you in the land, taking for yourselves palaces from its plains and carving out homes in the mountains (7:74). Thamud inherited both the territory and the warning of the people before them. Their gift was not raw power but skill: they cut dwellings directly out of rock faces, and the Quran says they carved homes from the mountains, feeling secure (15:82).",
            bn: "স্মরণ করো, তিনি আদের পর তোমাদের তাদের স্থলাভিষিক্ত করেছেন এবং জমিনে বসতি দিয়েছেন; তোমরা সমতলে প্রাসাদ গড়ো আর পাহাড় কেটে ঘর বানাও (7:74)। সামুদ আগের জাতির কাছ থেকে উত্তরাধিকারে পেয়েছিল দুটো জিনিস: তাদের ভূখণ্ড, আর তাদের প্রতি আসা সতর্কবাণী। সামুদের নিয়ামত কাঁচা শক্তি ছিল না, ছিল দক্ষতা: তারা পাথরের পাহাড় কেটে সরাসরি ঘর বানাত। কুরআন বলে, তারা নিশ্চিন্ত মনে পাহাড় কেটে ঘর বানাত (15:82)।",
          },
          {
            en: "Their prosperity is described in the same tone. Will you be left in what you have here, secure, among gardens and springs, and fields and palm trees with softened fruit — and you carve out of the mountains, homes, with skill (26:146-149). Every clause is a favour, and the passage lists them so that the question at the end lands: will you not fear Allah and obey me?",
            bn: "তাদের সমৃদ্ধির বর্ণনাও একই সুরে। তোমাদের কি এখানকার সবকিছুর মাঝে নিরাপদে ছেড়ে রাখা হবে? বাগান আর ঝরনার মাঝে, শস্যক্ষেত আর নরম রসালো খেজুরে ভরা বাগানে? আর তোমরা দক্ষ হাতে পাহাড় কেটে ঘর বানাও (26:146-149)। প্রতিটি কথাই একেকটি অনুগ্রহ; একে একে সেগুলো গোনানো হয়েছে, যাতে শেষের প্রশ্নটি ঠিক জায়গায় গিয়ে লাগে: তবু কি তোমরা আল্লাহকে ভয় করবে না, আমার কথা মানবে না?",
          },
        ],
      },
      {
        h: { en: "The Man They Had Trusted", bn: "যাঁকে তারা ভরসা করত" },
        p: [
          {
            en: "To Thamud Allah sent their brother Salih (11:61), and his call was the same one that had already been refused once in that land: worship Allah, you have no deity other than Him. He added a reason drawn from their own history — He produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him.",
            bn: "সামুদের কাছে আল্লাহ পাঠালেন তাদেরই ভাই সালিহকে (11:61)। তাঁর দাওয়াতও ছিল সেই একই দাওয়াত, যা ওই ভূখণ্ডে আগে একবার প্রত্যাখ্যাত হয়েছিল: আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। সঙ্গে তিনি তাদের নিজেদের ইতিহাস থেকে একটি যুক্তি দিলেন: তিনিই তোমাদের মাটি থেকে সৃষ্টি করেছেন, আর সেখানেই বসতি দিয়েছেন; তাই তাঁর কাছে ক্ষমা চাও, তারপর তওবা করে তাঁর দিকেই ফিরে এসো।",
          },
          {
            en: "Their reply contains a detail found nowhere else. O Salih, you were among us one in whom hope was placed before this (11:62). He had been the promising man of his people, the one they expected great things from, and their complaint was that he had turned away from what their fathers worshipped. Opposition to him was not sudden dislike; it was a community feeling betrayed by its own best.",
            bn: "তাদের জবাবে এমন একটি কথা আছে, যা আর কোথাও পাওয়া যায় না। হে সালিহ, এর আগে তো তুমি ছিলে আমাদের আশার মানুষ (11:62)। তিনি ছিলেন সম্প্রদায়ের সম্ভাবনাময় মানুষ, যাঁকে নিয়ে সবাই বড় কিছু আশা করত। আর তাদের অভিযোগ ছিল, বাপ-দাদারা যাদের পূজা করত, তিনি তাদের থেকে মুখ ফিরিয়ে নিয়েছেন। তাঁর বিরোধিতা হঠাৎ জন্মানো অপছন্দ থেকে আসেনি; এ ছিল এমন এক সমাজের ক্ষোভ, যারা ভাবছিল তাদের সেরা মানুষটিই তাদের সঙ্গে বিশ্বাসঘাতকতা করেছে।",
          },
        ],
      },
      {
        h: { en: "The She-Camel as Sign", bn: "নিদর্শনরূপে উষ্ট্রী" },
        p: [
          {
            en: "They asked for proof, and it was given in a form no one could dispute. This is the she-camel of Allah, for you a sign, so leave her to eat within Allah's land and do not touch her with harm, lest a painful punishment seize you (7:73). The sign was not a spectacle in the sky. It was an animal that had to be lived with, day after day, in public.",
            bn: "তারা প্রমাণ চেয়েছিল, আর প্রমাণ এল এমন রূপে, যা নিয়ে তর্কের সুযোগ নেই। এটি আল্লাহর উষ্ট্রী, তোমাদের জন্য নিদর্শন; একে আল্লাহর জমিনে চরে খেতে দাও, কোনো মন্দ উদ্দেশ্যে একে ছুঁয়ো না, নইলে যন্ত্রণাদায়ক শাস্তি তোমাদের পাকড়াও করবে (7:73)। নিদর্শনটি আকাশে দেখানো কোনো দৃশ্য ছিল না। এ ছিল এক জীবন্ত প্রাণী, যাকে নিয়ে সবার চোখের সামনে দিনের পর দিন বাস করতে হতো।",
          },
          {
            en: "The terms were exact. This is a she-camel; for her is a share of water, and for you a share of water, each on a known day (26:155). Water in that country was the whole of life, and a shared turn at it meant a daily decision, taken by the entire town, to accept a command from Allah. Allah calls the arrangement plainly what it was: a trial for them (54:27).",
            bn: "শর্তগুলো ছিল একদম নির্দিষ্ট। এই উষ্ট্রী; পানি পানের একটি পালা তার, আর একটি পালা তোমাদের, প্রত্যেকের জন্য নির্ধারিত দিনে (26:155)। ওই দেশে পানিই ছিল জীবনের সবকিছু। তাই পানির পালা ভাগ করে নেওয়ার মানে ছিল, গোটা জনপদকে প্রতিদিন নতুন করে আল্লাহর একটি হুকুম মেনে নেওয়ার সিদ্ধান্ত নিতে হবে। আল্লাহ এই ব্যবস্থার আসল নামটিই বলে দেন: তাদের জন্য এক পরীক্ষা (54:27)।",
          },
        ],
      },
      {
        h: { en: "The Hamstringing", bn: "উষ্ট্রী হত্যা" },
        p: [
          {
            en: "The Quran is careful about who did it. The most wretched of them was sent forth, and the messenger of Allah said to them, this is the she-camel of Allah and her drink. But they denied him and hamstrung her, so their Lord brought down upon them destruction for their sin and levelled them (91:12-14). One man struck; the whole people are held responsible, because they consented.",
            bn: "কাজটি কে করেছিল, কুরআন এ ব্যাপারে খুব সতর্ক। তাদের সবচেয়ে হতভাগা লোকটি ছুটে গেল; আল্লাহর রাসূল তাদের বললেন, এ আল্লাহর উষ্ট্রী, আর এ তার পানি পানের পালা। কিন্তু তারা তাঁকে মিথ্যাবাদী বলল এবং উষ্ট্রীর পায়ের রগ কেটে দিল; তখন তাদের গুনাহের কারণে তাদের প্রভু তাদের ওপর ধ্বংস নামিয়ে সবাইকে মাটির সঙ্গে মিশিয়ে দিলেন (91:12-14)। আঘাত করেছিল একজন; দায় পড়ল গোটা জাতির ওপর, কারণ তারা এতে সায় দিয়েছিল।",
          },
          {
            en: "There was also a plot. In the city were nine men who caused corruption and did not reform, and they swore by Allah that they would attack Salih and his family by night, and then tell his heir they had not witnessed the destruction of his household, and that they were truthful (27:48-49). Men who were about to commit murder were still arranging an oath in Allah's name to cover it.",
            bn: "একটি ষড়যন্ত্রও হয়েছিল। শহরে ছিল নয়জন লোক, যারা দেশে ফাসাদ ছড়াত, কোনো সংশোধন করত না। তারা আল্লাহর নামে কসম খেয়ে ঠিক করল, রাতের বেলা সালিহ ও তাঁর পরিবারের ওপর হামলা চালাবে, তারপর তাঁর উত্তরাধিকারীকে বলবে, তাঁর পরিবারের ধ্বংস আমরা চোখেও দেখিনি, আর আমরা সত্যই বলছি (27:48-49)। যারা খুন করতে যাচ্ছিল, তারাও সেটা ঢাকতে আল্লাহর নামে কসমের ব্যবস্থা পাকা করছিল।",
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
            bn: "কারণটি কুরআন কোনো অস্পষ্টতা ছাড়াই বলে দেয়। আর সামুদ, আমি তাদের পথ দেখিয়েছিলাম, কিন্তু তারা হিদায়াতের চেয়ে অন্ধত্বকেই বেশি পছন্দ করল (41:17)। তাদের না-জানা অবস্থায় রাখা হয়নি। তাদের দেওয়া হয়েছিল নিদর্শন, সতর্কবাণী, নিজেদের মধ্য থেকে নাম ধরে পাঠানো এক নবী, আর অবকাশের সময়ও; প্রতিটিই তারা ফিরিয়ে দিয়েছে। রায়টি এসেছে তাদের নিজেদের বেছে নেওয়ার কারণে, না-জানার কারণে নয়; তাই যে-ই এটি পড়ুক, তার জন্যই এটি সতর্কবাণী।",
          },
          {
            en: "Their dwellings survived them. And the companions of al-Hijr denied the messengers; We gave them Our signs, but they turned away from them (15:80-81). When the Muslim army passed those carved houses on the way to Tabuk, the Prophet ﷺ told his companions not to enter the dwellings of those who wronged themselves except in tears, lest what struck them strike the visitors too. Ruins are not tourism in this religion; they are evidence.",
            bn: "তাদের বসতিগুলো তাদের চেয়ে বেশিদিন টিকে রইল। আর হিজরের অধিবাসীরা রাসূলদের অস্বীকার করেছিল; আমি তাদের নিদর্শন দিয়েছিলাম, কিন্তু তারা সেগুলো থেকে মুখ ফিরিয়ে নিয়েছিল (15:80-81)। তাবুকের পথে মুসলিম বাহিনী যখন পাহাড় কেটে বানানো সেই ঘরগুলোর পাশ দিয়ে যায়, নবী ﷺ সাহাবিদের বলেন, যারা নিজেদের ওপর জুলুম করেছে, তাদের বাসস্থানে কাঁদতে কাঁদতে ছাড়া প্রবেশ কোরো না, নইলে তাদের ওপর যা এসেছিল তা তোমাদের ওপরও আসতে পারে। এই দ্বীনে ধ্বংসাবশেষ বেড়ানোর জায়গা নয়; তা সাক্ষ্য-প্রমাণ।",
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
            en: "He took the argument home first. O my father, why do you worship that which does not hear and does not see (19:42). Each address opens with the same words, my father, and the second offers help rather than judgement: knowledge has come to me that has not come to you, so follow me and I will guide you to an even path (19:43).",
            bn: "যুক্তিটি তিনি প্রথমে নিয়ে গেলেন নিজের ঘরে। হে আমার পিতা, আপনি এমন কিছুর ইবাদত কেন করেন, যা শোনে না, দেখে না (19:42)? প্রতিবার কথা শুরু হয় একই সম্বোধনে, হে আমার পিতা; আর দ্বিতীয় কথাটিতে রায় নেই, আছে সাহায্যের প্রস্তাব: আমার কাছে এমন জ্ঞান এসেছে যা আপনার কাছে আসেনি; তাই আমার অনুসরণ করুন, আমি আপনাকে সরল পথ দেখাব (19:43)।",
          },
          {
            en: "The answer was a threat of stoning and an order to leave him for a long time (19:46). Ibrahim (AS) replied, peace be upon you; I will ask forgiveness for you from my Lord (19:47). He kept that word, and the Quran explains that the request was only because of a promise he had made; when it became clear his father was an enemy to Allah, he disassociated from him (9:114).",
            bn: "জবাবে এল পাথর মেরে হত্যার হুমকি, আর হুকুম: দীর্ঘ সময়ের জন্য আমার কাছ থেকে দূর হয়ে যাও (19:46)। ইবরাহীম (আঃ) বললেন, আপনার প্রতি সালাম; আমি আমার প্রভুর কাছে আপনার জন্য ক্ষমা চাইব (19:47)। তিনি কথা রেখেছিলেন। কুরআন ব্যাখ্যা করে, এই ক্ষমা চাওয়া ছিল কেবল একটি ওয়াদার কারণে; যখন স্পষ্ট হলো তাঁর পিতা আল্লাহর শত্রু, তখন তিনি তার সঙ্গে সম্পর্ক ছিন্ন করলেন (9:114)।",
          },
        ],
      },
      {
        h: { en: "The Axe and the Question", bn: "কুড়াল ও প্রশ্ন" },
        p: [
          {
            en: "He asked his people what these statues were to which they were devoted, and they answered that they had found their fathers worshipping them (21:52-53). That was the whole case: inheritance. He told them plainly they and their fathers had been in clear error, and then said he had a plan for their idols after they had turned their backs (21:54, 21:57).",
            bn: "তিনি সম্প্রদায়ের লোকদের জিজ্ঞেস করলেন, এই মূর্তিগুলো কী, যাদের নিয়ে তোমরা এত মগ্ন? তারা বলল, আমরা আমাদের বাপ-দাদাদের এদের পূজা করতে দেখেছি (21:52-53)। তাদের পুরো যুক্তি এটুকুই: উত্তরাধিকার। তিনি সোজাসুজি বললেন, তোমরা আর তোমাদের বাপ-দাদারা স্পষ্ট গোমরাহিতে ছিলে। তারপর বললেন, তোমরা পিঠ ফিরিয়ে চলে গেলে আমি তোমাদের মূর্তিগুলোর একটা ব্যবস্থা করব (21:54, 21:57)।",
          },
          {
            en: "So he made them into pieces, except a large one among them, that they might return to it (21:58). When they demanded who had done it, he said, rather, this the largest of them did it, so ask them, if they should speak (21:63). They turned to one another and admitted they were the wrongdoers — then reversed and told him he knew these idols do not speak (21:64-65).",
            bn: "তারপর তিনি সেগুলোকে টুকরো টুকরো করে ফেললেন, শুধু বড়টিকে রেখে দিলেন, যাতে তারা তার কাছেই ফিরে আসে (21:58)। তারা যখন জানতে চাইল কে এ কাজ করেছে, তিনি বললেন, বরং এদের এই বড়টিই করেছে; ওদেরই জিজ্ঞেস করো, যদি ওরা কথা বলতে পারে (21:63)। তারা একে অপরের দিকে ফিরে স্বীকার করল, জালিম তো আমরাই। কিন্তু পরক্ষণেই আবার উল্টে গিয়ে তাঁকে বলল, তুমি তো জানোই, এরা কথা বলে না (21:64-65)।",
          },
        ],
      },
      {
        h: { en: "Into the Fire", bn: "আগুনে নিক্ষেপ" },
        p: [
          {
            en: "That admission was the point of the act. He said, then do you worship instead of Allah that which does not benefit you at all, nor harm you (21:66). Having lost the argument in public, they moved to force: burn him and support your gods, if you are to act (21:68). It is the standard sequence when a belief cannot defend itself and will not be given up.",
            bn: "ওই স্বীকারোক্তিটুকুই ছিল পুরো কাজের উদ্দেশ্য। তিনি বললেন, তাহলে কি তোমরা আল্লাহকে ছেড়ে এমন কিছুর ইবাদত করো, যা তোমাদের কোনো উপকারও করতে পারে না, ক্ষতিও না (21:66)? সবার সামনে যুক্তিতে হেরে গিয়ে তারা গায়ের জোরের পথ ধরল: একে পুড়িয়ে দাও, আর তোমাদের দেবতাদের সাহায্য করো, যদি কিছু করতেই চাও (21:68)। যে বিশ্বাস যুক্তি দিয়ে টিকতে পারে না, অথচ মানুষ তা ছাড়তেও রাজি নয়, তার বেলায় ঘটনা সাধারণত এভাবেই গড়ায়।",
          },
          {
            en: "We said, O fire, be coolness and safety upon Ibrahim (21:69). They intended for him a plan, but We made them the greatest losers (21:70). The fire was not extinguished and the crowd not scattered; it simply stopped doing to him what fire does. A thing obeys its Maker before it obeys its nature, and one man standing alone was the one who walked out of it.",
            bn: "আমি বললাম, হে আগুন, ইবরাহীমের জন্য শীতল ও নিরাপদ হয়ে যাও (21:69)। তারা তাঁর বিরুদ্ধে ফন্দি এঁটেছিল, কিন্তু আমি তাদেরই সবচেয়ে বেশি ক্ষতিগ্রস্ত করে দিলাম (21:70)। আগুন নেভানো হয়নি, ভিড়ও ছত্রভঙ্গ হয়নি; আগুন শুধু তাঁর সঙ্গে সেই কাজটি করল না, যা আগুনের স্বভাব। যেকোনো জিনিস নিজের স্বভাব মানার আগে তার স্রষ্টার হুকুম মানে। আর যিনি একা দাঁড়িয়ে ছিলেন, সেই আগুন থেকে হেঁটে বেরিয়ে এলেন তিনিই।",
          },
        ],
      },
      {
        h: { en: "Migration and the Valley", bn: "হিজরত ও উপত্যকা" },
        p: [
          {
            en: "He then said, indeed I am going to my Lord; He will guide me (37:99). Lut believed him, and Ibrahim left his homeland for the sake of Allah (29:26). The migration cost him everything a man ordinarily holds: family, standing, birthplace. In exchange he was given a land Allah blessed for the worlds (21:71), and descendants through whom prophethood would run to the end.",
            bn: "তারপর তিনি বললেন, আমি আমার প্রভুর দিকে চললাম, তিনিই আমাকে পথ দেখাবেন (37:99)। লূত তাঁর ওপর ঈমান আনলেন, আর ইবরাহীম আল্লাহর জন্য নিজের দেশ ছেড়ে চলে গেলেন (29:26)। এই হিজরতে তাঁকে ছাড়তে হলো এমন সবকিছু, যা মানুষ সাধারণত আঁকড়ে থাকে: পরিবার, সমাজে সম্মান, জন্মভূমি। বিনিময়ে তাঁকে দেওয়া হলো এমন এক ভূমি, যা আল্লাহ বিশ্ববাসীর জন্য বরকতময় করেছেন (21:71), আর এমন বংশধর, যাদের মধ্য দিয়ে নবুয়তের ধারা শেষ পর্যন্ত চলবে।",
          },
          {
            en: "Later he brought Hajar and the infant Isma'il to an empty valley and left them there with a little food and water. Bukhari preserves her question — has Allah commanded you to do this? — and his answer, yes; she said, then He will not neglect us. His prayer is in the Quran: our Lord, I have settled some of my descendants in an uncultivated valley near Your sacred House, so make hearts incline toward them (14:37).",
            bn: "পরে তিনি হাজেরা ও শিশু ইসমাঈলকে এক জনমানবহীন উপত্যকায় নিয়ে আসেন এবং সামান্য খাবার ও পানি দিয়ে সেখানে রেখে যান। বুখারিতে সংরক্ষিত আছে হাজেরার প্রশ্ন: আল্লাহ কি আপনাকে এর হুকুম দিয়েছেন? তিনি জবাব দিলেন, হ্যাঁ। হাজেরা বললেন, তাহলে তিনি আমাদের অবহেলা করবেন না। ইবরাহীমের দোয়াটি কুরআনেই আছে: হে আমাদের প্রভু, আমি আমার কিছু বংশধরকে আপনার সম্মানিত ঘরের কাছে এক অনুর্বর উপত্যকায় বসিয়েছি; সুতরাং মানুষের মন তাদের দিকে ঝুঁকিয়ে দিন (14:37)।",
          },
        ],
      },
      {
        h: { en: "The Greatest Trial", bn: "সবচেয়ে বড় পরীক্ষা" },
        p: [
          {
            en: "My Lord, grant me one of the righteous (37:100). The son was given, and when he reached the age of working with his father, Ibrahim said, my son, I have seen in a dream that I must sacrifice you, so see what you think (37:102). He did not conceal it or command it; he put the matter to the boy, which tells us what kind of father he was.",
            bn: "হে আমার প্রভু, আমাকে একজন সৎকর্মশীল সন্তান দান করুন (37:100)। সন্তান দেওয়া হলো; আর সে যখন বাবার সঙ্গে কাজকর্ম করার বয়সে পৌঁছাল, ইবরাহীম বললেন, হে আমার পুত্র, আমি স্বপ্নে দেখেছি যে আমি তোমাকে কুরবানি করছি; এখন ভেবে দেখো, তোমার মত কী (37:102)। তিনি বিষয়টি লুকাননি, আবার হুকুমও চাপিয়ে দেননি। কথাটি তিনি ছেলের সামনে রাখলেন; এতেই বোঝা যায়, তিনি কেমন বাবা ছিলেন।",
          },
          {
            en: "The boy answered that he should do as he was commanded, and would find him, if Allah willed, of the patient. When they had both submitted and he laid him down on his forehead, We called out to him, O Ibrahim, you have fulfilled the vision (37:103-105). The trial was never about the killing but about the willingness, and once that was real the command was lifted.",
            bn: "ছেলে জবাব দিল, আপনাকে যা হুকুম করা হয়েছে, তা-ই করুন; আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীলদের একজন পাবেন। যখন দুজনেই আত্মসমর্পণ করলেন, আর ইবরাহীম ছেলেকে কপালের ওপর উপুড় করে শুইয়ে দিলেন, তখন আমি তাঁকে ডেকে বললাম, হে ইবরাহীম, তুমি স্বপ্নকে সত্য করে দেখিয়েছ (37:103-105)। পরীক্ষাটি জবাই নিয়ে ছিল না; ছিল মনেপ্রাণে রাজি হওয়া নিয়ে। সেই রাজি হওয়া যখন সত্যি হয়ে উঠল, তখন হুকুমটি তুলে নেওয়া হলো।",
          },
        ],
      },
      {
        h: { en: "The House and the Friend", bn: "ঘর ও বন্ধু" },
        p: [
          {
            en: "And We ransomed him with a great sacrifice (37:107). The rites of Hajj still trace that day. And when Ibrahim was raising the foundations of the House, with Isma'il, saying, our Lord, accept this from us; indeed You are the Hearing, the Knowing (2:127). Men building a sanctuary for all time still asked to be accepted as they worked.",
            bn: "আর আমি এক মহান কুরবানির বিনিময়ে তাকে ছাড়িয়ে নিলাম (37:107)। হজের আমলগুলো আজও সেই দিনের স্মৃতি বহন করে। আর ইবরাহীম যখন ইসমাঈলকে সঙ্গে নিয়ে ঘরের ভিত তুলছিলেন, তাঁরা বলছিলেন: হে আমাদের প্রভু, আমাদের পক্ষ থেকে এটি কবুল করুন; নিশ্চয়ই আপনি সব শোনেন, সব জানেন (2:127)। যাঁরা চিরকালের জন্য একটি পবিত্র ঘর গড়ছিলেন, কাজের মাঝেও তাঁরা দোয়া করছিলেন যেন তা কবুল হয়।",
          },
          {
            en: "Their prayer went further than the building: our Lord, send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them (2:129). In a hadith recorded by Ahmad and Ibn Hibban, graded hasan or sahih by different scholars, the Prophet ﷺ said he was the answer to it. Ibrahim was named an upright community in himself (16:120), the one who fulfilled his obligations (53:37), and Allah took him as an intimate friend (4:125).",
            bn: "তাঁদের দোয়া ঘর বানানোর চেয়েও অনেক দূর গেল: হে আমাদের রব, তাদের মধ্য থেকেই তাদের কাছে একজন রাসূল পাঠান, যিনি তাদের আপনার আয়াত পড়ে শোনাবেন, কিতাব ও হিকমত শেখাবেন এবং তাদের পবিত্র করবেন (2:129)। আহমদ ও ইবনে হিব্বানের একটি হাদিসে, যাকে কোনো কোনো আলেম হাসান আর কেউ সহিহ বলেছেন, নবী ﷺ বলেছেন, তিনিই সেই দোয়ার জবাব। কুরআন ইবরাহীমকে বলেছে, তিনি একাই ছিলেন এক উম্মত, আল্লাহর অনুগত (16:120); তিনি নিজের দায়িত্ব পুরোপুরি পালন করেছেন (53:37); আর আল্লাহ তাঁকে খলিল, অর্থাৎ অন্তরঙ্গ বন্ধু বানিয়েছেন (4:125)।",
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
            bn: "এরপর আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দিলেন, আর রক্ষা করলেন সেই জনপদ থেকে, যার লোকেরা জঘন্য কাজে লিপ্ত ছিল; তারা ছিল এক মন্দ, নাফরমান সম্প্রদায় (21:74)। তাঁকে নবী করে পাঠানো হলো সমতলের জনপদগুলোতে। দায়িত্বটি ছিল সবচেয়ে কঠিনগুলোর একটি: সমস্যাটা শুধু ভুল উপাস্যের পূজা নয়; এদের প্রকাশ্য সমাজজীবনই নৈতিকভাবে ধসে পড়েছিল।",
          },
        ],
      },
      {
        h: { en: "A Wrong Without Precedent", bn: "নজিরবিহীন এক অন্যায়" },
        p: [
          {
            en: "And Lut, when he said to his people, do you commit such immorality as no one has preceded you with among the worlds? Indeed, you approach men with desire instead of women; rather, you are a transgressing people (7:80-81). The Quran states the matter once, plainly, and does not linger over it. It is named as a wrong, given its reason, and left there.",
            bn: "আর লূত, যখন তিনি তাঁর সম্প্রদায়কে বললেন, তোমরা কি এমন অশ্লীল কাজ করছ যা সৃষ্টিজগতে তোমাদের আগে কেউ করেনি? তোমরা তো নারীদের ছেড়ে কামনা নিয়ে পুরুষদের কাছে যাও; বরং তোমরা সীমালঙ্ঘনকারী এক সম্প্রদায় (7:80-81)। কুরআন বিষয়টি একবার, স্পষ্ট করে বলে দেয়; এ নিয়ে কথা বাড়ায় না। কাজটিকে অন্যায় বলে, তার কারণ জানায়, তারপর সেখানেই থামে।",
          },
          {
            en: "The indecency was not the whole of it. He asked them, do you commit the wicked act, and cut off the road, and commit in your meetings what is shameful (29:29)? Robbery of travellers and open shamelessness in public gatherings are listed alongside it. What the Quran describes is a society in which the private wrong had become a public custom that nobody was any longer able to name.",
            bn: "অশ্লীলতাই সব ছিল না। তিনি তাদের জিজ্ঞেস করেন, তোমরা কি এই জঘন্য কাজ করবে, রাহাজানি করবে, আর নিজেদের মজলিসে প্রকাশ্যে নির্লজ্জ কাজ করবে (29:29)? এর সঙ্গে গোনা হয়েছে পথিকদের লুট করা আর জনসমাগমে খোলাখুলি নির্লজ্জতা। কুরআন এমন এক সমাজের ছবি আঁকে, যেখানে গোপন অন্যায় প্রকাশ্য রেওয়াজে পরিণত হয়েছে, আর কেউ আর তাকে অন্যায় বলে নাম ধরে ডাকতে পারে না।",
          },
        ],
      },
      {
        h: { en: "One Man in a City", bn: "নগরে একা এক মানুষ" },
        p: [
          {
            en: "His people answered with expulsion. If you do not desist, O Lut, you will surely be of those evicted (26:167). Elsewhere the answer is colder still: they said only, drive them out of your city; indeed they are people who keep themselves pure (7:82). Purity had become the accusation. When a community reaches that point, the person calling to good is the one who has to be removed for the community to feel normal.",
            bn: "তাঁর সম্প্রদায়ের জবাব ছিল বের করে দেওয়ার হুমকি। হে লূত, তুমি বিরত না হলে অবশ্যই বহিষ্কৃতদের একজন হবে (26:167)। আরেক জায়গায় জবাবটি আরও ঠান্ডা: তারা শুধু বলল, এদের তোমাদের জনপদ থেকে বের করে দাও; এরা তো এমন লোক, যারা পবিত্র থাকতে চায় (7:82)। পবিত্রতাই তখন অভিযোগ হয়ে দাঁড়িয়েছে। কোনো সমাজ এই জায়গায় পৌঁছালে, যে মানুষটি ভালোর দিকে ডাকে, তাকেই সরিয়ে দিতে হয়; নইলে সমাজটির নিজেকে স্বাভাবিক মনে হয় না।",
          },
          {
            en: "He was alone in a way few prophets were. He had no clan behind him in that land, no group of believers, and his own household was divided. His prayer is one of the shortest in the Quran: my Lord, support me against the corrupting people (29:30). A single sentence, asking for strength rather than for their destruction, from a man who had been calling them for years.",
            bn: "এতটা একা খুব কম নবীই ছিলেন। ওই দেশে তাঁর পেছনে কোনো গোত্র ছিল না, মুমিনদের কোনো দলও ছিল না, আর নিজের পরিবারও ছিল বিভক্ত। কুরআনের সবচেয়ে ছোট দোয়াগুলোর একটি তাঁর: হে আমার প্রভু, ফাসাদ সৃষ্টিকারী এই সম্প্রদায়ের বিরুদ্ধে আমাকে সাহায্য করুন (29:30)। বছরের পর বছর যিনি তাদের ডেকে গেছেন, তাঁর মুখে একটিমাত্র বাক্য; তাতে তিনি তাদের ধ্বংস চাননি, চেয়েছেন নিজের জন্য শক্তি।",
          },
        ],
      },
      {
        h: { en: "The Guests", bn: "অতিথিরা" },
        p: [
          {
            en: "The messengers went first to Ibrahim, who brought them a roasted calf and grew uneasy when they did not eat (11:69-70). They told him not to fear, gave his wife the news of Ishaq, and then said they were sent to the people of Lut. Ibrahim began to argue with them over that people, for he was forbearing and oft-returning to Allah (11:74-75).",
            bn: "ফেরেশতারা প্রথমে আসেন ইবরাহীমের কাছে। তিনি তাঁদের জন্য একটি ভুনা বাছুর নিয়ে আসেন, আর তাঁরা না খাওয়ায় মনে মনে অস্বস্তি বোধ করেন (11:69-70)। তাঁরা তাঁকে ভয় পেতে নিষেধ করেন, তাঁর স্ত্রীকে ইসহাকের সুসংবাদ দেন, তারপর জানান, তাঁদের পাঠানো হয়েছে লূতের সম্প্রদায়ের কাছে। ইবরাহীম ওই সম্প্রদায়কে নিয়ে তাঁদের সঙ্গে তর্ক জুড়ে দেন, কারণ তিনি ছিলেন সহনশীল, বারবার আল্লাহর দিকে ফিরে আসা মানুষ (11:74-75)।",
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
            bn: "সুতরাং রাতের কোনো এক অংশে পরিবার নিয়ে বেরিয়ে পড়ো, আর তোমাদের কেউ যেন পেছনে ফিরে না তাকায়, তোমার স্ত্রী ছাড়া; তার ওপরও তা-ই আসবে যা তাদের ওপর আসবে। নিশ্চয়ই তাদের নির্ধারিত সময় ভোরবেলা। ভোর কি নিকটে নয় (11:81)? নির্দেশটি একদম নির্দিষ্ট: অন্ধকারে বেরিয়ে পড়ো, চলতে থাকো, পেছনে ফিরো না। হাঁটতে থাকার এই হুকুমটিই ছিল পুরো উদ্ধার।",
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
            en: "So We saved him and his family, except his wife; she was of those who remained behind (7:83). Elsewhere Allah gives her as an example, together with the wife of Nuh: they were under two of Our righteous servants but betrayed them, and those two availed them nothing against Allah (66:10). The verse says only that they betrayed them; the commentators, following Ibn Abbas (RA), hold that the betrayal was in religion and not in chastity.",
            bn: "অতঃপর আমি তাঁকে ও তাঁর পরিবারকে রক্ষা করলাম, তাঁর স্ত্রী ছাড়া; সে ছিল পিছনে পড়ে থাকাদের একজন (7:83)। আরেক জায়গায় আল্লাহ নূহের স্ত্রীর সঙ্গে তাকেও দৃষ্টান্ত হিসেবে তুলে ধরেছেন: তারা দুজন ছিল আমার দুই নেক বান্দার অধীনে, কিন্তু তারা তাঁদের সঙ্গে বিশ্বাসঘাতকতা করে; আর ওই দুজন আল্লাহর মোকাবিলায় তাদের কোনো কাজে আসেননি (66:10)। আয়াতটি কেবল এটুকুই বলে যে তারা বিশ্বাসঘাতকতা করেছিল; মুফাসসিরগণ ইবনে আব্বাসের (রাঃ) অনুসরণে বলেন, এই বিশ্বাসঘাতকতা ছিল দ্বীনের ক্ষেত্রে, সতীত্বের ক্ষেত্রে নয়।",
          },
          {
            en: "But We brought out whoever was in them of the believers, and We found within them not but one house of Muslims (51:35-36). One household in a whole society is the measure of what Lut faced, and he stayed at his post for as long as he was told to. His account ends not with a victory but with a rescue, which is the Quran's promise to anyone standing where he stood.",
            bn: "আর সেখানে যত মুমিন ছিল, আমি তাদের বের করে আনলাম; কিন্তু সেখানে একটি মুসলিম পরিবার ছাড়া আর কাউকে পাইনি (51:35-36)। গোটা একটি সমাজে মাত্র একটি ঘর: লূত কিসের মুখোমুখি ছিলেন, তার মাপ এটাই। তবু যতদিন তাঁকে থাকতে বলা হয়েছে, ততদিন তিনি নিজের জায়গায় অটল থেকেছেন। তাঁর কাহিনি শেষ হয় বিজয়ে নয়, উদ্ধারে। যে-ই তাঁর জায়গায় দাঁড়ায়, কুরআন তাকে এই প্রতিশ্রুতিই দেয়।",
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
            bn: "ইসমাঈল (আঃ)-কে কাহিনিতে প্রথম পাই কোলের এক শিশু হিসেবে, যাঁকে নিয়ে আসা হয়েছিল এমন জায়গায়, যেখানে কিছুই জন্মাত না। হে আমাদের প্রভু, আমি আমার কিছু বংশধরকে আপনার সম্মানিত ঘরের কাছে এক অনুর্বর উপত্যকায় বসিয়েছি (14:37)। সেখানে কী ঘটেছিল, বুখারি তা সংরক্ষণ করেছেন: ইবরাহীম তাঁদের কাছে ছোট এক মশক পানি আর কিছু খেজুর রেখে পেছনে না তাকিয়ে হেঁটে চলে যান। হাজেরা তাঁর পেছনে ছুটে গিয়ে জিজ্ঞেস করেন, আল্লাহ কি এর হুকুম দিয়েছেন?",
          },
          {
            en: "When he said yes, she answered that Allah would not neglect them, and went back. That sentence is the beginning of Mecca. The water ran out, the child grew desperate with thirst, and his mother climbed the nearest hill to look for anyone at all, then the hill opposite, and did that seven times. She was not performing a rite. She was a mother refusing to sit still.",
            bn: "তিনি হ্যাঁ বললে হাজেরা বললেন, তাহলে আল্লাহ আমাদের অবহেলা করবেন না; তারপর ফিরে গেলেন। মক্কার শুরু এই একটি বাক্য থেকেই। পানি ফুরিয়ে গেল, তৃষ্ণায় শিশুটি ছটফট করতে লাগল। মা কাছের টিলায় উঠে চারদিকে তাকালেন, কাউকে দেখা যায় কি না; তারপর উল্টো দিকের টিলায়; এভাবে সাতবার। তিনি কোনো ইবাদতের আনুষ্ঠানিকতা পালন করছিলেন না। তিনি ছিলেন এমন এক মা, যিনি হাত গুটিয়ে বসে থাকতে রাজি নন।",
          },
        ],
      },
      {
        h: { en: "Zamzam, and Safa and Marwah", bn: "যমযম, সাফা ও মারওয়া" },
        p: [
          {
            en: "Water came where the child was, and it did not stop coming. The well of Zamzam turned an uninhabitable valley into a place people could live, and a passing tribe of Jurhum asked permission to settle beside it. Trade routes followed the water, and a town grew around a boy and his mother who had been left there with nothing.",
            bn: "শিশুটি যেখানে ছিল, সেখানেই পানি বেরিয়ে এল, আর সেই পানি আর থামল না। যমযম কূপ বসবাসের অযোগ্য এক উপত্যকাকে বসবাসের উপযোগী করে তুলল; পথ চলতি জুরহুম গোত্র এর পাশে বসতি গড়ার অনুমতি চাইল। পানির পিছু পিছু এল বাণিজ্যের পথ। আর যে মা ও ছেলেকে সেখানে খালি হাতে রেখে যাওয়া হয়েছিল, তাঁদের ঘিরেই গড়ে উঠল একটি জনপদ।",
          },
          {
            en: "Her running between the two hills became part of the Hajj itself. Indeed, Safa and Marwah are among the symbols of Allah (2:158). Millions repeat that walk every year, and what they are repeating is not a triumph or a battle. It is the search of one woman for water for her child, honoured by Allah until the end of time, which tells us what He values in a servant.",
            bn: "দুই টিলার মাঝে তাঁর সেই ছোটাছুটি হজেরই অংশ হয়ে গেল। নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনগুলোর অন্তর্ভুক্ত (2:158)। প্রতি বছর লক্ষ লক্ষ মানুষ সেই পথটুকু আবার হাঁটেন; আর তাঁরা যা স্মরণ করেন, তা কোনো বিজয় বা যুদ্ধ নয়। তা হলো সন্তানের জন্য পানির খোঁজে এক নারীর ছুটোছুটি, যাকে আল্লাহ কিয়ামত পর্যন্ত সম্মানিত করে রেখেছেন। এ থেকেই বোঝা যায়, বান্দার কোন জিনিসের কদর তাঁর কাছে।",
          },
        ],
      },
      {
        h: { en: "The Dream, and His Answer", bn: "স্বপ্ন ও তাঁর জবাব" },
        p: [
          {
            en: "So We gave him good tidings of a forbearing boy. And when he reached with him the age of exertion, he said, my son, indeed I have seen in a dream that I must sacrifice you, so see what you think (37:101-102). The son was old enough to work beside his father and old enough to be consulted, and the Quran deliberately records that he was consulted. The Quran does not name the son here; because the glad tidings of Ishaq come only afterwards (37:112), most scholars hold that it was Isma'il.",
            bn: "অতঃপর আমি তাঁকে এক সহনশীল পুত্রের সুসংবাদ দিলাম। আর সে যখন তাঁর সঙ্গে কাজ করার বয়সে পৌঁছাল, তিনি বললেন, হে আমার পুত্র, আমি স্বপ্নে দেখেছি যে আমি তোমাকে কুরবানি করছি; এখন ভেবে দেখো তোমার অভিমত কী (37:101-102)। ছেলেটি পিতার পাশে কাজ করার মতো বড় হয়েছিল, আর পরামর্শ করার মতোও; কুরআন ইচ্ছা করেই লিপিবদ্ধ করেছে যে তাঁর সঙ্গে পরামর্শ করা হয়েছিল। এখানে কুরআন পুত্রের নাম বলেনি; ইসহাকের সুসংবাদ যেহেতু আসে এর পরে (37:112), তাই অধিকাংশ আলেমের মত, তিনি ছিলেন ইসমাঈল।",
          },
          {
            en: "His reply is the sentence that makes this his story and not only his father's. My father, do as you are commanded; you will find me, if Allah wills, of the patient (37:102). He does not say he will endure it. He says his father will find him patient if Allah wills, refusing to claim even his own steadiness as something he owned. The trial was passed twice, by two people, in one conversation.",
            bn: "তাঁর জবাবটিই এই ঘটনাকে শুধু বাবার নয়, তাঁরও কাহিনি করে তোলে। হে আমার পিতা, আপনাকে যা হুকুম করা হয়েছে, তা-ই করুন; আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীলদের একজন পাবেন (37:102)। তিনি বলেননি, আমি সহ্য করে নেব। বলেছেন, আল্লাহ চাইলে আপনি আমাকে ধৈর্যশীল পাবেন। নিজের অটল থাকাটুকুও তিনি নিজের কৃতিত্ব বলে দাবি করেননি। একটিমাত্র কথোপকথনে পরীক্ষায় উত্তীর্ণ হলেন দুজন: বাবা এবং ছেলে।",
          },
        ],
      },
      {
        h: { en: "Ransomed With a Sacrifice", bn: "কুরবানির বিনিময়ে মুক্তি" },
        p: [
          {
            en: "And when they had both submitted and he put him down upon his forehead, We called to him, O Ibrahim, you have fulfilled the vision. Indeed, We thus reward the doers of good. Indeed, this was the clear trial. And We ransomed him with a great sacrifice (37:103-107). The word for both of them submitting carries the same root as Islam, and it is used of a father and a boy together.",
            bn: "যখন তাঁরা দুজনেই আত্মসমর্পণ করলেন এবং তিনি ছেলেকে কপালের ওপর উপুড় করে শুইয়ে দিলেন, আমি তাঁকে ডেকে বললাম, হে ইবরাহীম, তুমি স্বপ্নকে সত্য করে দেখিয়েছ। নিশ্চয়ই আমি সৎকর্মশীলদের এভাবেই প্রতিদান দিই। নিশ্চয়ই এ ছিল এক সুস্পষ্ট পরীক্ষা। আর আমি এক মহান কুরবানির বিনিময়ে তাকে ছাড়িয়ে নিলাম (37:103-107)। দুজনের আত্মসমর্পণ বোঝাতে যে শব্দটি এসেছে, তার মূল আর ইসলাম শব্দের মূল একই; আর শব্দটি এখানে বাবা ও ছেলে দুজনের জন্য একসঙ্গে ব্যবহার হয়েছে।",
          },
          {
            en: "And We left for him among later generations: peace upon Ibrahim (37:108-109). Every year the pilgrims and those at home sacrifice an animal in memory of a command that was never carried out, because the point of it was never the animal or the boy. The ransom is the Quran's own commentary on the trial: Allah asked for the heart, and when He had it He gave the son back.",
            bn: "আর আমি পরবর্তী প্রজন্মগুলোর মাঝে তাঁর স্মরণ রেখে দিলাম: ইবরাহীমের প্রতি সালাম (37:108-109)। প্রতি বছর হাজিরা এবং ঘরে থাকা মানুষেরা পশু কুরবানি করেন এমন এক হুকুমের স্মরণে, যা শেষ পর্যন্ত পালন করতে হয়নি; কারণ এর আসল উদ্দেশ্য কখনোই পশু বা ছেলেটি ছিল না। মুক্তিপণের কথাটিই এই পরীক্ষার ওপর কুরআনের নিজের ব্যাখ্যা: আল্লাহ চেয়েছিলেন অন্তর, আর অন্তর পেয়ে যাওয়ার পর ছেলেকে ফিরিয়ে দিলেন।",
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
            bn: "বাবা ও ছেলে অন্য কারও জন্য দোয়া করার আগে নিজেদের জন্য দোয়া করলেন: হে আমাদের প্রভু, আমাদের দুজনকে আপনার অনুগত মুসলিম বানান, আমাদের বংশধরদের মধ্য থেকেও আপনার অনুগত একটি উম্মত বানান, আমাদের ইবাদতের নিয়মগুলো দেখিয়ে দিন, আর আমাদের তওবা কবুল করুন (2:128)। যাঁরা পৃথিবীর সবচেয়ে পবিত্র ঘরের ভিত গড়ছিলেন, কাজের মধ্যেই তাঁরা ক্ষমা চাইছিলেন। এই বিবরণের কোথাও নির্মাতার মনে এমন ভাব জাগার সুযোগ নেই যে, সে কিছু একটা অর্জন করে ফেলেছে।",
          },
        ],
      },
      {
        h: { en: "True to His Promise", bn: "প্রতিশ্রুতিতে সত্যবাদী" },
        p: [
          {
            en: "And mention in the Book Isma'il. Indeed, he was true to his promise, and he was a messenger and a prophet (19:54). Of all the things that could have been chosen to summarise him — the sacrifice, the well, the House — Allah chose keeping his word. It is the quietest of virtues and the hardest to sustain, and it is the one attached to his name forever.",
            bn: "আর কিতাবে ইসমাঈলের কথা স্মরণ করো। নিশ্চয়ই তিনি ছিলেন প্রতিশ্রুতিতে সত্যবাদী, আর তিনি ছিলেন রাসূল ও নবী (19:54)। তাঁর পরিচয় সংক্ষেপে দিতে অনেক কিছুই বেছে নেওয়া যেত: কুরবানি, কূপ, কাবাঘর। আল্লাহ সেসব না নিয়ে বেছে নিলেন তাঁর কথা রাখাকে। এ সবচেয়ে নীরব গুণ, আর ধরে রাখা সবচেয়ে কঠিন; আর চিরকালের জন্য তাঁর নামের সঙ্গে জুড়ে আছে এই গুণটিই।",
          },
          {
            en: "And he used to enjoin on his family prayer and zakat, and he was to his Lord pleasing (19:55). He is counted among the patient (21:85) and among the outstanding in goodness (38:48). His father's prayer for a messenger from among their descendants was answered centuries later in Muhammad ﷺ, who came from his line — so the boy left in a dry valley became the ancestor of the last of the prophets.",
            bn: "আর তিনি তাঁর পরিবারকে সালাত ও যাকাতের নির্দেশ দিতেন, এবং তিনি ছিলেন তাঁর প্রভুর কাছে সন্তোষভাজন (19:55)। তাঁকে গণ্য করা হয়েছে ধৈর্যশীলদের মধ্যে (21:85) এবং কল্যাণে অগ্রগামীদের মধ্যে (38:48)। বংশধরদের মধ্য থেকে একজন রাসূল পাঠানোর জন্য তাঁর বাবার যে দোয়া, তা বহু শতাব্দী পরে কবুল হলো মুহাম্মাদ ﷺ-এর মাধ্যমে, যিনি ইসমাঈলেরই বংশধর। এভাবে শুকনো উপত্যকায় রেখে যাওয়া সেই শিশুই হলেন শেষ নবীর পূর্বপুরুষ।",
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
            bn: "ইসহাক (আঃ)-এর কাহিনি শুরু হয় তিনি পৃথিবীতে আসারও আগে, অন্য একজনের তাঁবুতে। আর আমার প্রেরিত ফেরেশতারা ইবরাহীমের কাছে সুসংবাদ নিয়ে এলেন। তাঁরা বললেন, সালাম। তিনি বললেন, সালাম; তারপর দেরি না করে একটা ভুনা বাছুর নিয়ে এলেন (11:69)। আগে মেহমানদারি, প্রশ্ন পরে। অতিথিরা কারা, সে কথা কেউ খুলে বলার আগেই খাবার তৈরি হচ্ছে; কুরআন ঘটনাটা ঠিক এভাবেই তুলে ধরেছে।",
          },
          {
            en: "But when he saw their hands not reaching for it, he distrusted them and felt from them apprehension. They said, fear not; we have been sent to the people of Lut (11:70). In the other telling he says quietly, will you not eat, and conceives a fear of them, and they answer, do not be afraid, and give him good tidings of a learned boy (51:27-28).",
            bn: "কিন্তু যখন তিনি দেখলেন, তাঁদের হাত খাবারের দিকে এগোচ্ছে না, তখন তাঁদের ব্যাপারে তাঁর মনে খটকা লাগল, ভেতরে ভেতরে ভয়ও পেলেন। তাঁরা বললেন, ভয় পাবেন না; আমাদের লূতের সম্প্রদায়ের কাছে পাঠানো হয়েছে (11:70)। অন্য সূরার বর্ণনায় তিনি মৃদুস্বরে বলেন, আপনারা কি খাবেন না? তারপর মনে মনে তাঁদের নিয়ে ভয় পান। তাঁরা বলেন, ভয় পাবেন না, আর তাঁকে এক জ্ঞানী পুত্রের সুসংবাদ দেন (51:27-28)।",
          },
        ],
      },
      {
        h: { en: "The News of a Son", bn: "পুত্রের সুসংবাদ" },
        p: [
          {
            en: "And his wife was standing, and she laughed. Then We gave her good tidings of Ishaq and, after Ishaq, Ya'qub (11:71). The promise ran two generations deep in a single sentence: not only a son to an aged couple, but a grandson through him, and prophethood in both. The reaction of his wife — Sarah, as the commentators identify her — is preserved exactly as it was, without being tidied.",
            bn: "আর তাঁর স্ত্রী দাঁড়িয়ে ছিলেন, তিনি হেসে ফেললেন। তখন আমি তাঁকে ইসহাকের সুসংবাদ দিলাম, আর ইসহাকের পর ইয়াকুবের (11:71)। একটি বাক্যেই প্রতিশ্রুতি পৌঁছে গেল দুই প্রজন্ম পর্যন্ত: বৃদ্ধ দম্পতির ঘরে শুধু একটি ছেলে নয়, সেই ছেলের মাধ্যমে একজন নাতিও, আর দুজনের মধ্যেই নবুয়ত। তাঁর স্ত্রী, মুফাসসিরগণ যাঁকে সারা বলে চিহ্নিত করেন, সেদিন যেভাবে সাড়া দিয়েছিলেন, কুরআন হুবহু সেভাবেই রেখে দিয়েছে; একটুও ঘষামাজা করেনি।",
          },
          {
            en: "She said, woe to me! Shall I give birth while I am an old woman, and this, my husband, is an old man? Indeed, this is an amazing thing (11:72). In the other account she came forward with a cry, struck her face, and said, I am a barren old woman (51:29). Nothing is edited out. The Quran lets the astonishment stand because the answer is addressed to it.",
            bn: "তিনি বললেন, হায় আমার কী দশা! আমি সন্তান জন্ম দেব, অথচ আমি বৃদ্ধা আর আমার এই স্বামীও বৃদ্ধ? এ তো সত্যিই এক আশ্চর্য ব্যাপার (11:72)। অন্য সূরার বর্ণনায় তিনি চিৎকার করে সামনে এগিয়ে আসেন, নিজের মুখ চাপড়ে বলেন, আমি তো বন্ধ্যা বৃদ্ধা (51:29)। কিছুই ছেঁটে ফেলা হয়নি। কুরআন তাঁর বিস্ময়টুকু যেমন ছিল তেমনই থাকতে দেয়, কারণ পরের জবাবটা ওই বিস্ময়েরই জবাব।",
          },
        ],
      },
      {
        h: { en: "The Decree of Allah", bn: "আল্লাহর ফয়সালা" },
        p: [
          {
            en: "They said, are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honourable (11:73). The reply does not argue with biology. It moves the question to where it belongs: what is being reported is a decree, and a decree is not limited by the condition of the people it concerns.",
            bn: "তাঁরা বললেন, আপনি কি আল্লাহর ফয়সালায় অবাক হচ্ছেন? হে এই ঘরের লোকেরা, আপনাদের ওপর আল্লাহর রহমত ও বরকত। নিশ্চয়ই তিনি প্রশংসিত, সম্মানিত (11:73)। জবাবটা বয়স আর শরীরের হিসাব নিয়ে তর্কে যায় না। প্রশ্নটাকে বরং নিয়ে আসে তার আসল জায়গায়: এ খবর আল্লাহর এক ফয়সালার খবর, আর যাঁদের নিয়ে ফয়সালা, তাঁদের অবস্থা দিয়ে ফয়সালা আটকে থাকে না।",
          },
          {
            en: "The same exchange in Surah adh-Dhariyat ends with the messengers saying, thus has your Lord said; indeed He is the Wise, the Knowing (51:30). Wisdom and knowledge, not power alone. A child given late, after decades of waiting and one migration after another, arrives at the moment chosen by the One who knows what that timing will build.",
            bn: "সূরা আয-যারিয়াতে একই কথোপকথন শেষ হয় ফেরেশতাদের এই কথায়: আপনার প্রভু এমনই বলেছেন; নিশ্চয়ই তিনি প্রজ্ঞাময়, সর্বজ্ঞ (51:30)। শুধু ক্ষমতার কথা নয়, প্রজ্ঞা আর জ্ঞানের কথা। দশকের পর দশক অপেক্ষা আর একের পর এক হিজরতের পর অনেক দেরিতে সন্তান এল। কিন্তু এল ঠিক সেই মুহূর্তে, যা বেছে নিয়েছেন তিনিই, যিনি জানেন এই সময় কী গড়ে তুলবে।",
          },
        ],
      },
      {
        h: { en: "A Gift Beyond Asking", bn: "চাওয়ার চেয়ে বেশি দান" },
        p: [
          {
            en: "And We gave him Ishaq and Ya'qub in addition, and all of them We made righteous (21:72). The word translated as in addition marks a grandson nobody had asked for. Ibrahim's own thanks are recorded: praise to Allah, who has granted me in old age Isma'il and Ishaq. Indeed, my Lord is the Hearer of supplication (14:39).",
            bn: "আর আমি তাঁকে ইসহাক দিলাম, উপরন্তু ইয়াকুবকেও; এবং প্রত্যেককেই সৎকর্মশীল করলাম (21:72)। যে শব্দটিকে এখানে 'উপরন্তু' বলা হয়েছে, তা ইঙ্গিত করে এমন এক নাতির দিকে, যাঁকে কেউ চায়ওনি। ইবরাহীম নিজে কীভাবে শুকরিয়া আদায় করেছিলেন, তাও কুরআনে আছে: সমস্ত প্রশংসা আল্লাহর, যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাক দান করেছেন। নিশ্চয়ই আমার প্রভু দোয়া শ্রবণকারী (14:39)।",
          },
          {
            en: "And We gave to him Ishaq and Ya'qub and placed in his descendants prophethood and scripture (29:27). That single verse explains why so little narrative is told about Ishaq himself. His significance in the Quran is not a set of events but a line: through him came Ya'qub, and through Ya'qub the tribes, and through them Yusuf, Musa, Dawud, Sulayman, Zakariya, Yahya and Isa.",
            bn: "আর আমি তাঁকে ইসহাক ও ইয়াকুব দান করলাম এবং তাঁর বংশধরদের মধ্যে নবুয়ত ও কিতাব রাখলাম (29:27)। ইসহাককে নিয়ে কুরআনে কাহিনি এত কম কেন, এই একটি আয়াতেই তার উত্তর। কুরআনে তাঁর গুরুত্ব কিছু ঘটনায় নয়, একটি বংশধারায়: তাঁর থেকে এলেন ইয়াকুব, ইয়াকুব থেকে গোত্রগুলো, আর তাঁদের মধ্য থেকে ইউসুফ, মূসা, দাউদ, সুলাইমান, যাকারিয়া, ইয়াহইয়া ও ঈসা।",
          },
        ],
      },
      {
        h: { en: "Blessed, and Honestly Told", bn: "বরকতও, অকপট সত্যও" },
        p: [
          {
            en: "And We gave him good tidings of Ishaq, a prophet from among the righteous. And We blessed him and Ishaq (37:112-113). The good news comes immediately after the ransom of the other son, so the two lines of Ibrahim stand side by side on the same page. Then comes a sentence that a family history written by human beings would have left out: but among their descendants is the doer of good and the clearly unjust to himself (37:113).",
            bn: "আর আমি তাঁকে সুসংবাদ দিলাম ইসহাকের, যিনি হবেন নবী, সৎকর্মশীলদের একজন। আর আমি তাঁকে ও ইসহাককে বরকত দিলাম (37:112-113)। অন্য ছেলেকে ফিদিয়ার বিনিময়ে রক্ষা করার ঘটনার ঠিক পরেই এই সুসংবাদ আসে। ফলে ইবরাহীমের দুই বংশধারা একই পাতায় পাশাপাশি এসে দাঁড়ায়। তারপর আসে এমন এক বাক্য, মানুষের লেখা কোনো পারিবারিক ইতিহাস হলে যা বাদ পড়ত: কিন্তু তাঁদের বংশধরদের মধ্যে রয়েছে সৎকর্মশীল, আবার নিজের ওপর স্পষ্ট জুলুমকারীও (37:113)।",
          },
          {
            en: "The blessing on a father does not transfer automatically to his children. Descent from prophets is stated in the same breath as the fact that some of that descent went wrong, which is the Quran's standing correction to every community that has ever rested on its ancestry. Ishaq's honour is his own, and it does not become anyone else's by inheritance.",
            bn: "বাবার ওপর বরকত থাকলেই তা আপনাআপনি সন্তানদের ওপর এসে পড়ে না। কেউ নবীদের বংশধর, আর সেই বংশেরই কেউ কেউ বিপথে গেছে: এ দুটো কথা কুরআন বলেছে এক নিঃশ্বাসে। যে সম্প্রদায়ই কখনো বংশমর্যাদার ভরসায় বসে থেকেছে, তাদের সবাইকে কুরআন এভাবেই চিরকাল শুধরে দেয়। ইসহাকের মর্যাদা তাঁর নিজের; উত্তরাধিকার সূত্রে তা আর কারও হয়ে যায় না।",
          },
        ],
      },
      {
        h: { en: "A Link in the Chain", bn: "শিকলের এক কড়া" },
        p: [
          {
            en: "And mention Our servants Ibrahim, Ishaq and Ya'qub, those of strength and vision. Indeed, We chose them for an exclusive quality: remembrance of the home of the hereafter (38:45-46). Strength and vision are named together, and the quality that set them apart was not ability but where their attention lived. And indeed, to Us they are among the chosen and outstanding (38:47). Three generations are praised in a single breath, and Ishaq stands in the middle of them without needing an episode of his own.",
            bn: "আর স্মরণ করো আমার বান্দা ইবরাহীম, ইসহাক ও ইয়াকুবের কথা, যাঁরা ছিলেন শক্তি ও অন্তর্দৃষ্টির অধিকারী। নিশ্চয়ই আমি তাঁদের এক বিশেষ গুণের জন্য বেছে নিয়েছিলাম: আখিরাতের ঘরের স্মরণ (38:45-46)। শক্তি আর অন্তর্দৃষ্টির কথা এসেছে একসঙ্গে। তবু যে গুণ তাঁদের আলাদা করেছিল, তা যোগ্যতা নয়; তাঁদের মন পড়ে থাকত কোথায়, সেটাই। আর নিশ্চয়ই তাঁরা আমার কাছে মনোনীত ও উত্তমদের অন্তর্ভুক্ত (38:47)। এক নিঃশ্বাসে তিন প্রজন্মের প্রশংসা, আর ইসহাক তাঁদের ঠিক মাঝখানে। তাঁর জন্য আলাদা কোনো কাহিনির দরকার পড়েনি।",
          },
          {
            en: "He appears wherever the Quran states what a Muslim believes: say, we believe in what was revealed to us and what was revealed to Ibrahim, Isma'il, Ishaq, Ya'qub and the tribes (2:136). Ya'qub asked his sons at death what they would worship after him, and they answered, your God and the God of your fathers, Ibrahim, Isma'il and Ishaq — one God (2:133). That is his place: named in the creed, generation after generation.",
            bn: "একজন মুসলিম কী বিশ্বাস করে, কুরআন যেখানেই তা বলে দেয়, সেখানেই তাঁর নাম আছে: বলো, আমাদের প্রতি যা নাজিল হয়েছে, আর ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও গোত্রগুলোর প্রতি যা নাজিল হয়েছে, আমরা তাতে ঈমান এনেছি (2:136)। মৃত্যুর সময় ইয়াকুব ছেলেদের জিজ্ঞেস করেছিলেন, আমার পরে তোমরা কার ইবাদত করবে? তাঁরা বলেছিলেন, আপনার ইলাহ এবং আপনার পিতৃপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহ — এক ইলাহ (2:133)। এটাই তাঁর জায়গা: প্রজন্মের পর প্রজন্ম ঈমানের ঘোষণায় তাঁর নাম উচ্চারিত হয়ে আসছে।",
          },
        ],
      },
    ],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { PROPHET_ARTICLES };
