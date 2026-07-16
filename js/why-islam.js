/**
 * Why Islam? — an educational Da'wah & Aqidah (creed) module presenting the
 * reasoned case for Islam in the mainstream Sunni scholarly tradition, and
 * answering common sincere questions charitably and respectfully.
 *
 * Content is INLINE and bilingual (en + bn per item); other UI languages fall
 * back to English. Renders into #why-islam-container (tab "whyislam"). Tone is
 * calm, academic and respectful: it makes the positive intellectual case for
 * Islam and engages ideas, never demeaning any religion or its followers.
 *
 * Six browsable topics -> detail views: Existence of God, Oneness of God,
 * Prophethood of Muhammad (peace be upon him), The Quran, Common Questions
 * (accordion Q&A), and Further Study (curated reputable links). Includes topic
 * search and per-topic "mark as read" progress (localStorage lq_whyislam_read).
 *
 * Mirrors js/resources.js integration: global whyIslamView on DOMContentLoaded,
 * listens for tabChanged (whyislam) and settingChanged (language). Defensive
 * throughout — guards DOM, localStorage and JSON; never throws.
 */

/* Inline fallback UI strings so the module renders standalone even before the
 * orchestrator wires these keys into translations.js. */
const WHY_ISLAM_I18N = {
  whyislam_subtitle: {
    en: 'A calm, reasoned introduction to the case for Islam — and honest answers to sincere questions.',
    bn: 'ইসলামের যৌক্তিক পরিচিতি — এবং আন্তরিক প্রশ্নের সৎ উত্তর, শান্ত ও পাণ্ডিত্যপূর্ণ ভঙ্গিতে।',
  },
  whyislam_search_placeholder: { en: 'Search topics and questions…', bn: 'বিষয় ও প্রশ্ন খুঁজুন…' },
  whyislam_back: { en: 'All topics', bn: 'সব বিষয়' },
  whyislam_mark_read: { en: 'Mark as read', bn: 'পড়া হয়েছে চিহ্নিত করুন' },
  whyislam_marked_read: { en: 'Read', bn: 'পড়া হয়েছে' },
  whyislam_progress: { en: 'read', bn: 'পড়া হয়েছে' },
  whyislam_no_results: { en: 'No topics match your search.', bn: 'আপনার অনুসন্ধানে কোনো বিষয় মেলেনি।' },
  whyislam_note: {
    en: 'This section explains the Islamic position and its reasoning. It is meant to inform and invite reflection, with respect for everyone.',
    bn: 'এই অংশে ইসলামের অবস্থান ও তার যুক্তি ব্যাখ্যা করা হয়েছে। উদ্দেশ্য জ্ঞান দেওয়া ও চিন্তায় আমন্ত্রণ জানানো, সবার প্রতি শ্রদ্ধা রেখে।',
  },
  whyislam_disclaimer: {
    en: 'Educational overview in the mainstream Sunni tradition. For detailed rulings and study, consult qualified scholars and the further-study resources.',
    bn: 'মূলধারার সুন্নি ঐতিহ্যে একটি শিক্ষামূলক পরিচিতি। বিস্তারিত জানতে যোগ্য আলিম ও নিচের অধ্যয়ন-উৎসের সাহায্য নিন।',
  },
  whyislam_read_more: { en: 'Read topic', bn: 'বিষয়টি পড়ুন' },
  whyislam_open_link: { en: 'Visit', bn: 'দেখুন' },
};

const WHY_ISLAM_DATA = [
  {
    id: 'existence',
    emoji: '🌌',
    kind: 'article',
    title: { en: 'The Existence of God', bn: 'আল্লাহর অস্তিত্ব' },
    summary: {
      en: 'Four classical lines of reasoning: the innate disposition (fitrah), cause, order and morality.',
      bn: 'চারটি ধ্রুপদী যুক্তি: সহজাত প্রকৃতি (ফিতরাহ), কারণ, শৃঙ্খলা ও নৈতিকতা।',
    },
    points: [
      {
        heading: { en: 'The innate disposition (fitrah)', bn: 'সহজাত প্রকৃতি (ফিতরাহ)' },
        body: {
          en: 'Islam teaches that human beings are created with a natural inclination to recognise their Creator. In times of genuine need or awe, many people instinctively turn to a higher power. The Quran describes this original disposition: "So direct your face toward the religion, inclining to truth — the fitrah of Allah upon which He created people" (Quran 30:30). This is offered not as proof by itself, but as an invitation to notice a deep and widely shared human intuition.',
          bn: 'ইসলাম শেখায় যে মানুষ তার স্রষ্টাকে চেনার এক সহজাত প্রবণতা নিয়ে সৃষ্ট। প্রকৃত প্রয়োজন বা বিস্ময়ের মুহূর্তে বহু মানুষ সহজাতভাবে এক মহাশক্তির দিকে ঝুঁকে পড়ে। কুরআন এই মৌলিক প্রকৃতির কথা বলে: "তুমি একনিষ্ঠভাবে নিজেকে দ্বীনের প্রতি প্রতিষ্ঠিত রাখো—আল্লাহর সেই ফিতরাহ, যার উপর তিনি মানুষকে সৃষ্টি করেছেন" (কুরআন ৩০:৩০)। এটি নিজে কোনো প্রমাণ নয়, বরং এক গভীর ও ব্যাপকভাবে অনুভূত মানবিক অন্তর্দৃষ্টির প্রতি আমন্ত্রণ।',
        },
      },
      {
        heading: { en: 'The argument from a cause (kalam)', bn: 'কারণ থেকে যুক্তি (কালাম)' },
        body: {
          en: 'Classical Muslim theologians (the mutakallimun, e.g. al-Ghazali) argued: whatever begins to exist has a cause; the universe began to exist; therefore the universe has a cause — one that is itself uncaused, powerful and beyond time and space. The Quran points to the same reflection: "Or were they created by nothing, or were they the creators [of themselves]?" (Quran 52:35). The argument does not claim to describe God fully; it reasons that a beginning points beyond itself.',
          bn: 'ধ্রুপদী মুসলিম ধর্মতাত্ত্বিকগণ (মুতাকাল্লিমুন, যেমন ইমাম গাজ্জালি) যুক্তি দিয়েছেন: যা কিছুর সূচনা আছে তার একটি কারণ আছে; বিশ্বজগতের সূচনা আছে; সুতরাং বিশ্বজগতের একটি কারণ আছে—এমন এক কারণ যা নিজে অনাদি, ক্ষমতাবান এবং কাল-স্থানের ঊর্ধ্বে। কুরআন একই চিন্তার দিকে ইঙ্গিত করে: "তারা কি স্রষ্টা ছাড়াই সৃষ্টি হয়েছে, নাকি তারাই স্রষ্টা?" (কুরআন ৫২:৩৫)। এই যুক্তি আল্লাহকে পূর্ণভাবে বর্ণনার দাবি করে না; বরং বলে যে সূচনা নিজের বাইরে কিছুর দিকে ইশারা করে।',
        },
      },
      {
        heading: { en: 'The argument from order and design', bn: 'শৃঙ্খলা ও নকশা থেকে যুক্তি' },
        body: {
          en: 'The universe displays remarkable order and finely balanced conditions that allow life to exist. Islam invites us to read this order as a sign of a wise Designer rather than blind accident: "Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision — do you see any breaks?" (Quran 67:3). This is presented as reasoned reflection on nature, not as a substitute for science.',
          bn: 'বিশ্বজগতে রয়েছে অসাধারণ শৃঙ্খলা এবং জীবনের অনুকূল সূক্ষ্মভাবে ভারসাম্যপূর্ণ অবস্থা। ইসলাম আমন্ত্রণ জানায় এই শৃঙ্খলাকে অন্ধ দুর্ঘটনা নয়, বরং এক প্রজ্ঞাময় স্রষ্টার নিদর্শন হিসেবে পড়তে: "যিনি স্তরে স্তরে সাত আকাশ সৃষ্টি করেছেন। পরম দয়াময়ের সৃষ্টিতে তুমি কোনো অসামঞ্জস্য দেখবে না। আবার তাকিয়ে দেখো—কোনো ফাটল কি চোখে পড়ে?" (কুরআন ৬৭:৩)। এটি প্রকৃতির উপর যুক্তিসংগত অনুধ্যান, বিজ্ঞানের বিকল্প নয়।',
        },
      },
      {
        heading: { en: 'The moral argument', bn: 'নৈতিক যুক্তি' },
        body: {
          en: 'Most people sense that some things — justice, honesty, compassion — are genuinely good, and cruelty genuinely wrong, not merely as personal opinion. Islam holds that such objective moral truths make most sense if they are grounded in a wise and just Creator who is their source. This does not claim non-believers cannot be moral; it asks where the binding weight of "ought" ultimately comes from.',
          bn: 'অধিকাংশ মানুষ অনুভব করে যে কিছু জিনিস—ন্যায়, সততা, দয়া—প্রকৃতপক্ষেই ভালো, আর নিষ্ঠুরতা প্রকৃতপক্ষেই মন্দ, নিছক ব্যক্তিগত মত হিসেবে নয়। ইসলামের অভিমত, এমন বস্তুনিষ্ঠ নৈতিক সত্য সবচেয়ে ভালোভাবে অর্থবহ হয় যদি তা এক প্রজ্ঞাময় ও ন্যায়বান স্রষ্টায় প্রোথিত থাকে, যিনি এদের উৎস। এতে অবিশ্বাসীরা নৈতিক হতে পারে না—এমন দাবি নেই; বরং প্রশ্ন হলো "উচিত"-এর বাধ্যতামূলক ভার চূড়ান্তভাবে কোথা থেকে আসে।',
        },
      },
    ],
  },
  {
    id: 'tawhid',
    emoji: '☝️',
    kind: 'article',
    title: { en: 'The Oneness of God (Tawhid)', bn: 'আল্লাহর একত্ব (তাওহিদ)' },
    summary: {
      en: 'The single message of every prophet, its three dimensions, and why pure monotheism is coherent.',
      bn: 'প্রত্যেক নবীর একই বার্তা, এর তিনটি দিক, এবং কেন বিশুদ্ধ একত্ববাদ যুক্তিসংগত।',
    },
    points: [
      {
        heading: { en: 'One consistent message', bn: 'একই ধারাবাহিক বার্তা' },
        body: {
          en: 'The Quran presents tawhid — worship of the one God alone — as the shared core of every prophet from Adam to Muhammad (peace be upon them): "And We sent not before you any messenger except that We revealed to him that there is no deity except Me, so worship Me" (Quran 21:25). The declaration of faith, "La ilaha illa Allah" (there is no god but God), captures this centre.',
          bn: 'কুরআন তাওহিদকে—কেবল এক আল্লাহর ইবাদত—আদম থেকে মুহাম্মাদ (তাঁদের প্রতি শান্তি) পর্যন্ত প্রত্যেক নবীর অভিন্ন মূল বার্তা হিসেবে উপস্থাপন করে: "আমি তোমার পূর্বে এমন কোনো রাসুল পাঠাইনি, যাঁর প্রতি আমি এই ওহি করিনি যে, আমি ছাড়া কোনো ইলাহ নেই, সুতরাং আমারই ইবাদত করো" (কুরআন ২১:২৫)। ঈমানের ঘোষণা "লা ইলাহা ইল্লাল্লাহ" (আল্লাহ ছাড়া কোনো উপাস্য নেই) এই কেন্দ্রকেই ধারণ করে।',
        },
      },
      {
        heading: { en: 'Three dimensions of tawhid', bn: 'তাওহিদের তিন দিক' },
        body: {
          en: 'Scholars introduce tawhid in three related aspects: (1) Lordship (rububiyyah) — God alone creates, sustains and governs; (2) Worship (uluhiyyah) — God alone deserves to be worshipped and turned to; and (3) Names and Attributes (asma wa sifat) — God is described only as He described Himself, without likening Him to creation. Together these mean the Creator is utterly unique and alone worthy of devotion.',
          bn: 'আলিমগণ তাওহিদকে তিনটি সম্পর্কিত দিকে পরিচয় করান: (১) রুবুবিয়্যাহ (প্রভুত্ব)—কেবল আল্লাহই সৃষ্টি করেন, রক্ষণাবেক্ষণ করেন ও পরিচালনা করেন; (২) উলুহিয়্যাহ (ইবাদত)—কেবল আল্লাহই ইবাদতের ও আশ্রয়ের যোগ্য; এবং (৩) আসমা ওয়া সিফাত (নাম ও গুণাবলি)—আল্লাহকে কেবল সেভাবেই বর্ণনা করা হয় যেভাবে তিনি নিজেকে বর্ণনা করেছেন, সৃষ্টির সাথে তুলনা ছাড়াই। একত্রে এর অর্থ, স্রষ্টা সম্পূর্ণ অনন্য এবং একমাত্র তিনিই ইবাদতের যোগ্য।',
        },
      },
      {
        heading: { en: 'Why pure monotheism is coherent', bn: 'কেন বিশুদ্ধ একত্ববাদ সুসংগত' },
        body: {
          en: 'The Quran offers a rational reflection on unity: "Had there been within them [the heavens and earth] gods besides Allah, they both would have been ruined" (Quran 21:22). A single, ultimate source gives the universe its consistency and unified laws; competing ultimate powers would introduce conflict. Pure monotheism keeps the object of worship simple, unlimited and free of contradiction — the essence expressed in Surah al-Ikhlas (Quran 112).',
          bn: 'কুরআন একত্ব নিয়ে এক যুক্তিসংগত অনুধ্যান দেয়: "যদি আকাশ ও পৃথিবীতে আল্লাহ ছাড়া আরও উপাস্য থাকত, তবে উভয়ই বিশৃঙ্খল হয়ে যেত" (কুরআন ২১:২২)। একক, চূড়ান্ত উৎস বিশ্বজগতকে দেয় সামঞ্জস্য ও অভিন্ন নিয়ম; প্রতিদ্বন্দ্বী চূড়ান্ত শক্তিরা দ্বন্দ্ব আনত। বিশুদ্ধ একত্ববাদ ইবাদতের লক্ষ্যকে রাখে সরল, অসীম ও দ্বন্দ্বমুক্ত—যার সারকথা সুরা আল-ইখলাসে (কুরআন ১১২)।',
        },
      },
    ],
  },
  {
    id: 'prophethood',
    emoji: '🕌',
    kind: 'article',
    title: { en: 'The Prophethood of Muhammad ﷺ', bn: 'মুহাম্মাদ ﷺ-এর নবুয়ত' },
    summary: {
      en: 'His trusted character, the unlettered messenger, deep reforms, and continuity with earlier prophets.',
      bn: 'তাঁর বিশ্বস্ত চরিত্র, নিরক্ষর রাসুল, গভীর সংস্কার এবং পূর্ববর্তী নবীদের সাথে ধারাবাহিকতা।',
    },
    points: [
      {
        heading: { en: 'A trusted character (al-Amin)', bn: 'বিশ্বস্ত চরিত্র (আল-আমিন)' },
        body: {
          en: 'Even before prophethood, the people of Makkah knew Muhammad (peace be upon him) as al-Amin, "the trustworthy," and al-Sadiq, "the truthful," entrusting him with their valuables. Someone consistently honest with people, who then conveyed a message calling to truth and moral discipline at great personal cost, invites us to weigh his sincerity seriously.',
          bn: 'নবুয়তের আগেও মক্কার মানুষ মুহাম্মাদ (তাঁর প্রতি শান্তি)-কে চিনত আল-আমিন "বিশ্বস্ত" ও আস-সাদিক "সত্যবাদী" নামে, এবং তাঁর কাছে নিজেদের মূল্যবান জিনিস আমানত রাখত। মানুষের সাথে যিনি সর্বদা সৎ ছিলেন, এবং যিনি ব্যক্তিগত বড় মূল্য দিয়েও সত্য ও নৈতিক শৃঙ্খলার আহ্বান পৌঁছে দিয়েছেন—তাঁর আন্তরিকতাকে গুরুত্বসহকারে বিবেচনা করতে এটি আমন্ত্রণ জানায়।',
        },
      },
      {
        heading: { en: 'An unlettered messenger', bn: 'একজন নিরক্ষর রাসুল' },
        body: {
          en: 'Islamic sources describe the Prophet as unlettered (ummi) — he did not read or write: "Those who follow the Messenger, the unlettered prophet…" (Quran 7:157). That a person without formal learning conveyed a text of such linguistic power and coherent teaching is, in the Islamic view, a sign that its source is divine rather than personal authorship.',
          bn: 'ইসলামি উৎস নবীকে বর্ণনা করে নিরক্ষর (উম্মি) হিসেবে—তিনি পড়তে বা লিখতে জানতেন না: "যারা অনুসরণ করে সেই রাসুলের, উম্মি নবীর…" (কুরআন ৭:১৫৭)। প্রাতিষ্ঠানিক শিক্ষা ছাড়া একজন মানুষ এমন ভাষিক শক্তি ও সুসংগত শিক্ষাসম্পন্ন এক গ্রন্থ পৌঁছে দিয়েছেন—ইসলামের দৃষ্টিতে এটি এই ইঙ্গিত দেয় যে এর উৎস ব্যক্তিগত রচনা নয়, বরং ঐশী।',
        },
      },
      {
        heading: { en: 'Deep moral and social reform', bn: 'গভীর নৈতিক ও সামাজিক সংস্কার' },
        body: {
          en: 'In a single generation his message transformed a society: ending the burying of infant girls, curbing tribal vengeance, protecting the rights of the poor, orphans and slaves, and uniting warring tribes under justice and mercy. The scale and speed of this ethical reform is, historically, remarkable and central to his mission.',
          bn: 'এক প্রজন্মের মধ্যেই তাঁর বার্তা একটি সমাজকে বদলে দেয়: কন্যাশিশু জীবন্ত সমাধিস্থ করা বন্ধ, গোত্রীয় প্রতিশোধ নিয়ন্ত্রণ, দরিদ্র-এতিম-দাসের অধিকার রক্ষা, এবং যুদ্ধরত গোত্রগুলোকে ন্যায় ও দয়ার অধীনে ঐক্যবদ্ধ করা। এই নৈতিক সংস্কারের বিস্তার ও গতি ঐতিহাসিকভাবে অসাধারণ এবং তাঁর মিশনের কেন্দ্রবিন্দু।',
        },
      },
      {
        heading: { en: 'Continuity with earlier prophets', bn: 'পূর্ববর্তী নবীদের সাথে ধারাবাহিকতা' },
        body: {
          en: 'Islam sees Muhammad (peace be upon him) not as founding a new religion but as completing the one message brought by Noah, Abraham, Moses and Jesus (peace be upon them): call to the one God, uprightness, and accountability. The Quran honours these prophets and asks believers to make no distinction between them (Quran 2:285). This continuity is presented as a mark of authenticity, not novelty.',
          bn: 'ইসলাম মুহাম্মাদ (তাঁর প্রতি শান্তি)-কে দেখে নতুন কোনো ধর্মের প্রতিষ্ঠাতা হিসেবে নয়, বরং নূহ, ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি) আনীত সেই একই বার্তার পূর্ণতাদানকারী হিসেবে: এক আল্লাহর প্রতি আহ্বান, সততা ও জবাবদিহিতা। কুরআন এই নবীদের সম্মান করে এবং বিশ্বাসীদের বলে তাঁদের মধ্যে কোনো পার্থক্য না করতে (কুরআন ২:২৮৫)। এই ধারাবাহিকতাকে উপস্থাপন করা হয় প্রামাণিকতার চিহ্ন হিসেবে, নতুনত্বের নয়।',
        },
      },
    ],
  },
  {
    id: 'quran',
    emoji: '📖',
    kind: 'article',
    title: { en: 'The Quran', bn: 'আল-কুরআন' },
    summary: {
      en: 'Its preservation, its open literary challenge, its internal consistency, and its guidance.',
      bn: 'এর সংরক্ষণ, উন্মুক্ত সাহিত্যিক চ্যালেঞ্জ, অভ্যন্তরীণ সামঞ্জস্য এবং হিদায়াত।',
    },
    points: [
      {
        heading: { en: 'Its preservation', bn: 'এর সংরক্ষণ' },
        body: {
          en: 'From the beginning the Quran has been preserved in two ways together: memorised in full by huge numbers of people (the huffaz) in every generation, and written down and carefully transmitted. The Quran states this care: "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian" (Quran 15:9). The living oral tradition alongside the manuscript record is a distinctive feature of its transmission.',
          bn: 'শুরু থেকেই কুরআন দুইভাবে একসাথে সংরক্ষিত হয়ে এসেছে: প্রতি প্রজন্মে বিপুলসংখ্যক মানুষের (হাফিজ) দ্বারা সম্পূর্ণ মুখস্থ, এবং লিপিবদ্ধ হয়ে যত্নসহকারে হস্তান্তরিত। কুরআন এই যত্নের কথা বলে: "নিশ্চয়ই আমিই এই উপদেশ (কুরআন) অবতীর্ণ করেছি এবং আমিই এর সংরক্ষক" (কুরআন ১৫:৯)। পাণ্ডুলিপির পাশাপাশি জীবন্ত মৌখিক ধারা এর হস্তান্তরের এক স্বতন্ত্র বৈশিষ্ট্য।',
        },
      },
      {
        heading: { en: 'An open literary challenge (i‘jaz)', bn: 'উন্মুক্ত সাহিত্যিক চ্যালেঞ্জ (ইজাজ)' },
        body: {
          en: 'The Quran issues a standing challenge to those who doubt its source: to produce even a single chapter like it — "And if you are in doubt about what We have sent down… then produce a surah the like thereof" (Quran 2:23). Classical Arab critics, masters of the language, acknowledged its distinctive eloquence. The claim of i‘jaz (inimitability) is a literary and linguistic argument, offered to the reader to weigh, not a coercion.',
          bn: 'যারা এর উৎস নিয়ে সন্দেহ করে, কুরআন তাদের প্রতি এক স্থায়ী চ্যালেঞ্জ রাখে: এর মতো একটিমাত্র সুরা রচনা করে আনতে—"আমি আমার বান্দার প্রতি যা অবতীর্ণ করেছি তাতে যদি তোমরা সন্দেহে থাকো, তবে এর অনুরূপ একটি সুরা রচনা করে আনো" (কুরআন ২:২৩)। ভাষার পারদর্শী ধ্রুপদী আরব সমালোচকগণও এর স্বতন্ত্র অলংকারিত্ব স্বীকার করেছেন। ইজাজ (অননুকরণীয়তা)-র এই দাবি এক সাহিত্যিক ও ভাষিক যুক্তি, পাঠকের বিবেচনার জন্য উপস্থাপিত—কোনো জবরদস্তি নয়।',
        },
      },
      {
        heading: { en: 'Internal consistency', bn: 'অভ্যন্তরীণ সামঞ্জস্য' },
        body: {
          en: 'Revealed piecemeal over about twenty-three years, across changing and difficult circumstances, the Quran maintains a unified message and voice. It draws attention to this itself: "Then do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction" (Quran 4:82). Coherence across such a span is presented as a sign worth reflecting on.',
          bn: 'প্রায় তেইশ বছর ধরে, পরিবর্তনশীল ও কঠিন পরিস্থিতির মধ্যে ধাপে ধাপে অবতীর্ণ হয়েও কুরআন এক অভিন্ন বার্তা ও স্বর ধরে রাখে। এটি নিজেই এদিকে দৃষ্টি আকর্ষণ করে: "তবে কি তারা কুরআন নিয়ে চিন্তা করে না? যদি তা আল্লাহ ছাড়া অন্য কারও কাছ থেকে হতো, তবে তারা এতে অনেক অসংগতি পেত" (কুরআন ৪:৮২)। এত দীর্ঘ পরিসরে এই সামঞ্জস্যকে উপস্থাপন করা হয় চিন্তার যোগ্য এক নিদর্শন হিসেবে।',
        },
      },
      {
        heading: { en: 'A book of guidance', bn: 'হিদায়াতের গ্রন্থ' },
        body: {
          en: 'Above all the Quran presents itself as guidance for living — "This is the Book about which there is no doubt, a guidance for those conscious of God" (Quran 2:2). Its main concern is not to catalogue scientific facts but to nurture God-consciousness, justice, gratitude and good character. Muslims are encouraged to read it thoughtfully and let its counsel be tested in a sincere life.',
          bn: 'সর্বোপরি কুরআন নিজেকে উপস্থাপন করে জীবনযাপনের পথনির্দেশ হিসেবে—"এই সেই কিতাব, যাতে কোনো সন্দেহ নেই; মুত্তাকিদের জন্য হিদায়াত" (কুরআন ২:২)। এর মূল উদ্দেশ্য বৈজ্ঞানিক তথ্যের তালিকা নয়, বরং আল্লাহ-সচেতনতা, ন্যায়, কৃতজ্ঞতা ও উত্তম চরিত্র গড়ে তোলা। মুসলিমদের উৎসাহ দেওয়া হয় একে মনোযোগসহ পড়তে এবং এর উপদেশকে আন্তরিক জীবনে যাচাই করতে।',
        },
      },
    ],
  },
  {
    id: 'questions',
    emoji: '💬',
    kind: 'qa',
    title: { en: 'Common Questions', bn: 'সাধারণ প্রশ্নাবলি' },
    summary: {
      en: 'Sincere questions answered from the Islamic position — respectfully, without strawmen.',
      bn: 'আন্তরিক প্রশ্নের ইসলামি দৃষ্টিকোণ থেকে উত্তর—শ্রদ্ধার সাথে, কোনো বিকৃতি ছাড়া।',
    },
    qa: [
      {
        q: { en: 'Aren’t all religions basically the same?', bn: 'সব ধর্ম কি মূলত একই নয়?' },
        a: {
          en: 'Religions genuinely share much — a call to compassion, humility and meaning — and Islam honours that common ground and the sincerity of people who seek God. At the same time, they make different claims about the nature of God, the purpose of life and how we are saved, and these differences are real, not trivial. Islam respects the questioner and the shared values, while holding that truth about God matters and that its own account of pure monotheism is the one to weigh carefully.',
          bn: 'ধর্মগুলো প্রকৃতপক্ষে অনেক কিছু ভাগ করে নেয়—দয়া, বিনয় ও অর্থের আহ্বান—এবং ইসলাম এই অভিন্ন ভিত্তি ও আল্লাহ-অন্বেষী মানুষের আন্তরিকতাকে সম্মান করে। একই সঙ্গে, ঈশ্বরের স্বরূপ, জীবনের উদ্দেশ্য ও মুক্তির পথ নিয়ে তারা ভিন্ন দাবি করে, আর এই পার্থক্যগুলো বাস্তব, তুচ্ছ নয়। ইসলাম প্রশ্নকর্তা ও অভিন্ন মূল্যবোধকে সম্মান করে, তবে মনে করে ঈশ্বর সম্পর্কে সত্য গুরুত্বপূর্ণ, এবং তার বিশুদ্ধ একত্ববাদের বিবরণটিই যত্নসহকারে বিবেচনার যোগ্য।',
        },
      },
      {
        q: { en: 'Why does Islam say it is the final and complete religion?', bn: 'ইসলাম কেন বলে যে তা চূড়ান্ত ও পূর্ণাঙ্গ ধর্ম?' },
        a: {
          en: 'Islam teaches that God sent prophets to every people, and that this same guidance was completed and preserved in its final form through Muhammad (peace be upon him): "This day I have perfected for you your religion" (Quran 5:3). "Final" means no further prophet is needed because the core message — worship the one God and live justly — is now complete and safeguarded, not that earlier prophets were false. It is an invitation to a message believed to be intact, offered without compulsion (Quran 2:256).',
          bn: 'ইসলাম শেখায় যে আল্লাহ প্রত্যেক জাতির কাছে নবী পাঠিয়েছেন, এবং এই একই হিদায়াত মুহাম্মাদ (তাঁর প্রতি শান্তি)-এর মাধ্যমে চূড়ান্ত রূপে পূর্ণ ও সংরক্ষিত হয়েছে: "আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম" (কুরআন ৫:৩)। "চূড়ান্ত"-এর অর্থ, আর কোনো নবীর প্রয়োজন নেই কারণ মূল বার্তা—এক আল্লাহর ইবাদত ও ন্যায়সংগত জীবন—এখন পূর্ণ ও সুরক্ষিত; এর অর্থ এই নয় যে পূর্ববর্তী নবীরা মিথ্যা ছিলেন। এটি অটুট বলে বিশ্বাসকৃত এক বার্তার প্রতি আমন্ত্রণ, জবরদস্তি ছাড়াই (কুরআন ২:২৫৬)।',
        },
      },
      {
        q: { en: 'What does Islam say about earlier scriptures and prophets?', bn: 'পূর্ববর্তী কিতাব ও নবীদের সম্পর্কে ইসলাম কী বলে?' },
        a: {
          en: 'Islam requires belief in all of God’s prophets — including Abraham, Moses and Jesus (peace be upon them) — and honours the original revelations given to them, such as the Torah and the Gospel, as having been true guidance from God. Muslims believe the final revelation, the Quran, confirms the core truth those prophets taught and serves as the preserved standard. This is a stance of deep respect for the prophetic tradition, not rejection of it.',
          bn: 'ইসলাম আল্লাহর সকল নবীর প্রতি—ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি) সহ—ঈমান আনা আবশ্যক করে, এবং তাঁদের প্রতি অবতীর্ণ মূল ওহি, যেমন তাওরাত ও ইনজিল, আল্লাহর সত্য হিদায়াত হিসেবে সম্মান করে। মুসলিমরা বিশ্বাস করে যে চূড়ান্ত ওহি কুরআন সেই নবীদের শেখানো মূল সত্যকে নিশ্চিত করে এবং সংরক্ষিত মানদণ্ড হিসেবে কাজ করে। এটি নবুয়তি ঐতিহ্যের প্রতি গভীর শ্রদ্ধার অবস্থান, প্রত্যাখ্যানের নয়।',
        },
      },
      {
        q: { en: 'Isn’t faith just blind belief?', bn: 'ঈমান কি নিছক অন্ধ বিশ্বাস নয়?' },
        a: {
          en: 'In Islam faith (iman) is not meant to be blind. The Quran repeatedly appeals to reason, evidence and reflection — inviting people to observe nature, weigh arguments and think ("Do they not reflect…?" recurs throughout). Faith is trust built on grounds one has considered, and it grows through knowledge and sincerity. Certainly it also involves trust beyond what can be fully proven, as most deep human commitments do — but it is invited to begin with honest thinking, not the switching off of the mind.',
          bn: 'ইসলামে ঈমান অন্ধ হওয়ার কথা নয়। কুরআন বারবার যুক্তি, প্রমাণ ও চিন্তার প্রতি আহ্বান জানায়—মানুষকে প্রকৃতি পর্যবেক্ষণ, যুক্তি বিবেচনা ও চিন্তা করতে ডাকে ("তারা কি চিন্তা করে না?"—বারবার আসে)। ঈমান হলো এমন আস্থা যা বিবেচিত ভিত্তির উপর গড়ে ওঠে, এবং জ্ঞান ও আন্তরিকতায় বৃদ্ধি পায়। অবশ্যই এতে সম্পূর্ণ প্রমাণযোগ্যতার বাইরেও আস্থা থাকে, যেমন মানুষের গভীর অঙ্গীকারগুলোতে থাকে—তবে এর সূচনা সৎ চিন্তা দিয়ে, মন বন্ধ করে নয়।',
        },
      },
      {
        q: { en: 'What about free will and the problem of evil?', bn: 'স্বাধীন ইচ্ছা ও মন্দের সমস্যা সম্পর্কে কী?' },
        a: {
          en: 'Islam affirms that God gives human beings real moral choice, and that this life is a meaningful test (Quran 67:2). Much suffering flows from the freedom to do right or wrong, which is what makes goodness meaningful. Other hardships, Islam teaches, carry wisdom we may not fully see, can be a means of growth and mercy, and are set against a just accounting and reward in the hereafter where wrongs are addressed. It does not claim every "why" is answered here, but that evil does not defeat a wise and just God.',
          bn: 'ইসলাম নিশ্চিত করে যে আল্লাহ মানুষকে প্রকৃত নৈতিক পছন্দ দিয়েছেন, এবং এই জীবন এক অর্থবহ পরীক্ষা (কুরআন ৬৭:২)। অনেক কষ্ট আসে ভালো-মন্দ করার স্বাধীনতা থেকে, যা কল্যাণকে অর্থবহ করে তোলে। অন্যান্য দুর্ভোগ, ইসলামের শিক্ষা অনুযায়ী, এমন প্রজ্ঞা বহন করে যা আমরা পুরোপুরি দেখতে না-ও পারি, তা বৃদ্ধি ও রহমতের উপায় হতে পারে, এবং আখিরাতে এক ন্যায়সংগত হিসাব ও প্রতিদানের প্রেক্ষাপটে স্থাপিত যেখানে অন্যায়ের সুরাহা হবে। এটি দাবি করে না যে প্রতিটি "কেন"-র উত্তর এখানেই আছে, বরং বলে যে মন্দ এক প্রজ্ঞাময় ও ন্যায়বান আল্লাহকে পরাস্ত করতে পারে না।',
        },
      },
      {
        q: { en: 'Why the Quran and not another book?', bn: 'অন্য কোনো গ্রন্থ নয়, কুরআন কেন?' },
        a: {
          en: 'Muslims point to a combination of features they invite others to examine together: its remarkable preservation in memory and text, its open and unmet literary challenge, its inner consistency across twenty-three years, its rational and moral coherence, and the character of the unlettered man who conveyed it. No single point is treated as a knock-down proof; rather, taken together they are offered as reasonable grounds to read the Quran seriously and judge for oneself.',
          bn: 'মুসলিমরা এমন কিছু বৈশিষ্ট্যের সমষ্টির দিকে ইঙ্গিত করে, যা তারা অন্যদের একসাথে পরীক্ষা করতে আমন্ত্রণ জানায়: স্মৃতি ও লিখিত রূপে এর অসাধারণ সংরক্ষণ, এর উন্মুক্ত ও অপূরিত সাহিত্যিক চ্যালেঞ্জ, তেইশ বছর জুড়ে এর অভ্যন্তরীণ সামঞ্জস্য, এর যৌক্তিক ও নৈতিক সংগতি, এবং যে নিরক্ষর ব্যক্তি এটি পৌঁছে দিয়েছেন তাঁর চরিত্র। কোনো একটি বিষয়কেই চূড়ান্ত প্রমাণ ধরা হয় না; বরং একত্রে এগুলো কুরআনকে গুরুত্বসহ পড়ে নিজে বিচার করার যুক্তিসংগত ভিত্তি হিসেবে উপস্থাপিত হয়।',
        },
      },
    ],
  },
  {
    id: 'study',
    emoji: '🎓',
    kind: 'resources',
    title: { en: 'Further Study', bn: 'আরও অধ্যয়ন' },
    summary: {
      en: 'A short, curated list of reputable, mainstream da‘wah and aqidah resources.',
      bn: 'নির্ভরযোগ্য মূলধারার দাওয়াহ ও আকিদার সংক্ষিপ্ত বাছাই করা উৎস-তালিকা।',
    },
    resources: [
      { name: 'Yaqeen Institute', url: 'https://yaqeeninstitute.org', emoji: '🔬',
        en: 'Research-based articles and videos on faith, doubts and aqidah', bn: 'ঈমান, সংশয় ও আকিদা নিয়ে গবেষণাভিত্তিক প্রবন্ধ ও ভিডিও' },
      { name: 'Sapience Institute', url: 'https://sapienceinstitute.org', emoji: '💡',
        en: "Da‘wah and the intellectual case for God and Islam", bn: 'দাওয়াহ এবং আল্লাহ ও ইসলামের বৌদ্ধিক যুক্তি' },
      { name: 'WhyIslam (ICNA)', url: 'https://www.whyislam.org', emoji: '🌱',
        en: 'Introductory articles and Q&A for those exploring Islam', bn: 'ইসলাম অন্বেষণকারীদের জন্য পরিচিতিমূলক প্রবন্ধ ও প্রশ্নোত্তর' },
      { name: 'iERA', url: 'https://iera.org', emoji: '🤝',
        en: 'Da‘wah training and accessible material on core beliefs', bn: 'দাওয়াহ প্রশিক্ষণ ও মূল বিশ্বাস নিয়ে সহজবোধ্য উপকরণ' },
      { name: 'SeekersGuidance', url: 'https://seekersguidance.org', emoji: '📚',
        en: 'Free structured courses in aqidah and the Islamic sciences', bn: 'আকিদা ও ইসলামি শাস্ত্রে বিনামূল্যে কাঠামোবদ্ধ কোর্স' },
      { name: 'AlMaghrib Institute', url: 'https://www.almaghrib.org', emoji: '🎓',
        en: 'Seminars and courses on creed, seerah and the Quran', bn: 'আকিদা, সিরাহ ও কুরআন নিয়ে সেমিনার ও কোর্স' },
      { name: 'Qalam Institute', url: 'https://qalam.institute', emoji: '🎙️',
        en: 'Classes, podcasts and tafsir from qualified scholars', bn: 'যোগ্য আলিমদের ক্লাস, পডকাস্ট ও তাফসির' },
      { name: 'IslamQA', url: 'https://islamqa.info/en', emoji: '❓',
        en: 'Referenced answers on belief and practice by scholars', bn: 'আলিমদের রেফারেন্সসহ বিশ্বাস ও আমল বিষয়ক উত্তর' },
    ],
  },
];

class WhyIslamView {
  constructor() {
    this.container = document.getElementById('why-islam-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.rendered = false;
    this.currentId = null; // null => home grid; otherwise topic detail
    this.query = '';
    this.readSet = this.loadRead();

    window.addEventListener('tabChanged', (e) => {
      if (e && e.detail && e.detail.tabId === 'whyislam') this.render();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e && e.detail && e.detail.key === 'language') {
        this.language = e.detail.value || 'en';
        if (this.rendered) this.render();
      }
    });
  }

  /* ---------- helpers ---------- */
  tt(key) {
    try {
      if (typeof t === 'function') {
        const v = t(key, this.language);
        if (v && v !== key) return v; // orchestrator-wired translation wins
      }
    } catch (_) { /* ignore */ }
    const fb = WHY_ISLAM_I18N[key];
    if (fb) return this.language === 'bn' ? (fb.bn || fb.en) : fb.en;
    return key;
  }

  L(obj) {
    if (!obj) return '';
    return this.language === 'bn' ? (obj.bn || obj.en || '') : (obj.en || '');
  }

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  loadRead() {
    const s = new Set();
    try {
      const raw = localStorage.getItem('lq_whyislam_read');
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) arr.forEach(id => { if (typeof id === 'string') s.add(id); });
      }
    } catch (_) { /* ignore */ }
    return s;
  }

  saveRead() {
    try {
      localStorage.setItem('lq_whyislam_read', JSON.stringify(Array.from(this.readSet)));
    } catch (_) { /* ignore */ }
  }

  topicById(id) { return WHY_ISLAM_DATA.find(t => t.id === id) || null; }

  matches(topic, q) {
    if (!q) return true;
    const parts = [this.L(topic.title), this.L(topic.summary)];
    (topic.points || []).forEach(p => { parts.push(this.L(p.heading), this.L(p.body)); });
    (topic.qa || []).forEach(x => { parts.push(this.L(x.q), this.L(x.a)); });
    (topic.resources || []).forEach(r => { parts.push(r.name, this.L(r)); });
    return parts.join('   ').toLowerCase().indexOf(q) !== -1;
  }

  /* ---------- render dispatch ---------- */
  render() {
    this.rendered = true;
    if (!this.container) return;
    try {
      if (this.currentId && this.topicById(this.currentId)) {
        this.renderDetail(this.topicById(this.currentId));
      } else {
        this.currentId = null;
        this.renderHome();
      }
    } catch (_) {
      // Never throw into the app shell.
      this.container.innerHTML = '';
    }
  }

  /* ---------- home grid ---------- */
  renderHome() {
    const q = (this.query || '').trim().toLowerCase();
    const list = WHY_ISLAM_DATA.filter(topic => this.matches(topic, q));
    const total = WHY_ISLAM_DATA.length;
    const readCount = WHY_ISLAM_DATA.filter(t => this.readSet.has(t.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;

    const cards = list.map(topic => {
      const isRead = this.readSet.has(topic.id);
      const badge = isRead
        ? `<span class="inline-flex items-center gap-1 text-[0.65rem] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">✓ ${this.esc(this.tt('whyislam_marked_read'))}</span>`
        : '';
      return `
        <button type="button" data-topic="${this.esc(topic.id)}"
          class="wi-card group text-start flex flex-col gap-2 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all">
          <span class="flex items-center gap-3">
            <span class="text-2xl" aria-hidden="true">${topic.emoji}</span>
            <span class="flex-1 min-w-0 font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.L(topic.title))}</span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">→</span>
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.L(topic.summary))}</span>
          <span class="mt-1 flex items-center justify-between">
            <span class="text-xs text-primary dark:text-blue-400 font-medium">${this.esc(this.tt('whyislam_read_more'))}</span>
            ${badge}
          </span>
        </button>`;
    }).join('');

    const grid = list.length
      ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${cards}</div>`
      : `<p class="text-center text-gray-500 dark:text-gray-400 py-12">${this.esc(this.tt('whyislam_no_results'))}</p>`;

    this.container.innerHTML = `
      <div class="w-full max-w-4xl mx-auto">
        <div class="text-center mb-4">
          <p class="text-gray-500 dark:text-gray-400 text-sm" dir="auto">${this.esc(this.tt('whyislam_subtitle'))}</p>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mb-5" dir="auto">🕊️ ${this.esc(this.tt('whyislam_note'))}</p>

        <div class="mb-4">
          <input type="search" id="wi-search" value="${this.esc(this.query)}"
            placeholder="${this.esc(this.tt('whyislam_search_placeholder'))}"
            class="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                   text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            dir="auto" autocomplete="off" />
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>${readCount} / ${total} ${this.esc(this.tt('whyislam_progress'))}</span>
            <span>${pct}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-primary transition-all" style="width:${pct}%"></div>
          </div>
        </div>

        ${grid}

        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-8 mb-8" dir="auto">${this.esc(this.tt('whyislam_disclaimer'))}</p>
      </div>`;

    this.wireHome();
  }

  wireHome() {
    const search = this.container.querySelector('#wi-search');
    if (search) {
      search.addEventListener('input', (e) => {
        this.query = e.target.value || '';
        const pos = search.selectionStart;
        this.renderHome();
        const again = this.container.querySelector('#wi-search');
        if (again) { again.focus(); try { again.setSelectionRange(pos, pos); } catch (_) {} }
      });
    }
    this.container.querySelectorAll('[data-topic]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentId = btn.getAttribute('data-topic');
        const topic = this.topicById(this.currentId);
        if (topic) this.renderDetail(topic);
      });
    });
  }

  /* ---------- detail view ---------- */
  renderDetail(topic) {
    const isRead = this.readSet.has(topic.id);
    let body = '';

    if (topic.kind === 'qa') {
      body = `<div class="flex flex-col gap-3">${(topic.qa || []).map((x, i) => `
        <details class="group rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <summary class="cursor-pointer list-none flex items-center gap-3 p-4 font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <span class="text-primary dark:text-blue-400" aria-hidden="true">Q${i + 1}</span>
            <span class="flex-1 min-w-0" dir="auto">${this.esc(this.L(x.q))}</span>
            <span class="text-gray-400 group-open:rotate-180 transition-transform" aria-hidden="true">▾</span>
          </summary>
          <div class="px-4 pb-4 pt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700" dir="auto">${this.esc(this.L(x.a))}</div>
        </details>`).join('')}</div>`;
    } else if (topic.kind === 'resources') {
      body = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${(topic.resources || []).map(r => `
        <a href="${this.esc(r.url)}" target="_blank" rel="noopener noreferrer"
           class="group flex flex-col gap-1 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all">
          <span class="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100">
            <span class="text-lg" aria-hidden="true">${r.emoji || '🔗'}</span>
            <span class="flex-1 min-w-0 truncate">${this.esc(r.name)}</span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">↗</span>
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.L(r))}</span>
          <span class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate" dir="ltr">${this.esc(String(r.url).replace(/^https?:\/\//, ''))}</span>
        </a>`).join('')}</div>`;
    } else {
      body = `<div class="flex flex-col gap-5">${(topic.points || []).map(p => `
        <section>
          <h4 class="font-bold text-gray-800 dark:text-gray-100 mb-1.5" dir="auto">${this.esc(this.L(p.heading))}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.L(p.body))}</p>
        </section>`).join('')}</div>`;
    }

    const readBtn = `
      <button type="button" id="wi-read"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors
               ${isRead
                 ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                 : 'bg-primary text-white hover:opacity-90'}">
        <span aria-hidden="true">${isRead ? '✓' : '＋'}</span>
        <span>${this.esc(isRead ? this.tt('whyislam_marked_read') : this.tt('whyislam_mark_read'))}</span>
      </button>`;

    this.container.innerHTML = `
      <div class="w-full max-w-3xl mx-auto">
        <button type="button" id="wi-back"
          class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary mb-5">
          <span aria-hidden="true">←</span><span>${this.esc(this.tt('whyislam_back'))}</span>
        </button>

        <div class="flex items-start gap-3 mb-4">
          <span class="text-3xl" aria-hidden="true">${topic.emoji}</span>
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.L(topic.title))}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.L(topic.summary))}</p>
          </div>
        </div>

        <div class="mb-5">${readBtn}</div>

        ${body}

        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-8 mb-8" dir="auto">${this.esc(this.tt('whyislam_disclaimer'))}</p>
      </div>`;

    this.wireDetail(topic);
  }

  wireDetail(topic) {
    const back = this.container.querySelector('#wi-back');
    if (back) back.addEventListener('click', () => { this.currentId = null; this.renderHome(); });

    const readBtn = this.container.querySelector('#wi-read');
    if (readBtn) {
      readBtn.addEventListener('click', () => {
        if (this.readSet.has(topic.id)) this.readSet.delete(topic.id);
        else this.readSet.add(topic.id);
        this.saveRead();
        this.renderDetail(topic);
      });
    }
  }
}

let whyIslamView;
document.addEventListener('DOMContentLoaded', () => { whyIslamView = new WhyIslamView(); });
