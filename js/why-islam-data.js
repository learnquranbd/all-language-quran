/**
 * Why Islam — DATA MODULE
 * Extracted from js/why-islam.js.
 * Globals: WHY_ISLAM_I18N, WHY_ISLAM_DATA, WHY_ISLAM_QUIZ, plus any additional consts.
 * Loaded BEFORE js/why-islam.js in index.html.
 */

const WHY_ISLAM_I18N = {
  whyislam_subtitle: {
    en: 'A calm, reasoned introduction to the case for Islam — and honest answers to sincere questions.',
    bn: 'ইসলামের যৌক্তিক পরিচিতি — এবং আন্তরিক প্রশ্নের সৎ উত্তর, শান্ত ও পাণ্ডিত্যপূর্ণ ভঙ্গিতে।',
    zh: '对伊斯兰教的冷静、理性介绍——以及对真诚问题的诚实回答。',
    ja: 'イスラームへの穏やかで合理的な入門——誠実な問いへの正直な回答。',
  },
  whyislam_search_placeholder: { en: 'Search topics and questions…', bn: 'বিষয় ও প্রশ্ন খুঁজুন…', zh: '搜索主题和问题…', ja: 'トピックや質問を検索…' },
  whyislam_back: { en: 'All topics', bn: 'সব বিষয়', zh: '所有主题', ja: 'すべてのトピック' },
  whyislam_mark_read: { en: 'Mark as read', bn: 'পড়া হয়েছে চিহ্নিত করুন', zh: '标记为已读', ja: '既読にする' },
  whyislam_marked_read: { en: 'Read', bn: 'পড়া হয়েছে', zh: '已读', ja: '既読' },
  whyislam_progress: { en: 'read', bn: 'পড়া হয়েছে', zh: '已读', ja: '既読' },
  whyislam_no_results: { en: 'No topics match your search.', bn: 'আপনার অনুসন্ধানে কোনো বিষয় মেলেনি।', zh: '没有与搜索匹配的主题。', ja: '検索に一致するトピックはありません。' },
  whyislam_note: {
    en: 'This section explains the Islamic position and its reasoning. It is meant to inform and invite reflection, with respect for everyone.',
    bn: 'এই অংশে ইসলামের অবস্থান ও তার যুক্তি ব্যাখ্যা করা হয়েছে। উদ্দেশ্য জ্ঞান দেওয়া ও চিন্তায় আমন্ত্রণ জানানো, সবার প্রতি শ্রদ্ধা রেখে।',
    zh: '本节解释伊斯兰教的立场及其推理。旨在提供信息和引发思考，尊重每一个人。',
    ja: 'このセクションでは、イスラームの立場とその論理を説明します。すべての人への敬意をもって、情報提供と内省への招待を目的としています。',
  },
  whyislam_disclaimer: {
    en: 'Educational overview in the mainstream Sunni tradition. For detailed rulings and study, consult qualified scholars and the further-study resources.',
    bn: 'মূলধারার সুন্নি ঐতিহ্যে একটি শিক্ষামূলক পরিচিতি। বিস্তারিত জানতে শুধুমাত্র ইসলামিক জ্ঞানসম্পন্ন আলিমের কাছে জানুন।',
    zh: '基于主流逊尼派传统的教育性概述。如需详细裁决和学习，请咨询合格的学者和进一步学习资源。',
    ja: '主流スンナ派の伝統に基づく教育的概要。詳細な判断や学習については、資格のある学者や追加の学習リソースを参照してください。',
  },
  whyislam_read_more: { en: 'Read topic', bn: 'বিষয়টি পড়ুন', zh: '阅读主题', ja: 'トピックを読む' },
  whyislam_open_link: { en: 'Visit', bn: 'দেখুন', zh: '访问', ja: '訪問' },
  whyislam_shahada_label: { en: 'The Testimony of Faith (Shahada)', bn: 'ঈমানের সাক্ষ্য (শাহাদাহ)', zh: '信仰的见证（作证言）', ja: '信仰の証言（シャハーダ）' },
  whyislam_embrace_welcome: {
    en: 'This is an informational explanation, offered gently and without any pressure. In Islam, becoming a Muslim is a free and personal choice (Quran 2:256 — "There shall be no compulsion in religion"). Take your time to learn and reflect.',
    bn: 'এটি একটি তথ্যমূলক ব্যাখ্যা, কোমলভাবে ও কোনো চাপ ছাড়াই উপস্থাপিত। ইসলামে মুসলিম হওয়া একটি স্বাধীন ও ব্যক্তিগত সিদ্ধান্ত (কুরআন ২:২৫৬—"দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই")। শেখা ও চিন্তার জন্য সময় নিন।',
    zh: '这是一份信息性的说明，温和且无任何压力地呈现。在伊斯兰教中，成为穆斯林是一个自由和个人选择（古兰经 2:256——"宗教中无强迫"）。请花时间学习和思考。',
    ja: 'これは情報提供のための説明であり、穏やかに、強制なく提供されます。イスラームでは、ムスリムになることは自由で個人的な選択です（クルアーン 2:256 —「宗教に強制はありません」）。学び、熟考するために時間をかけてください。',
  },
  whyislam_objections_note: {
    en: 'Each objection is stated fairly first, then answered. The aim is to engage the arguments honestly — never to disparage anyone who holds them.',
    bn: 'প্রতিটি আপত্তি প্রথমে ন্যায্যভাবে উপস্থাপন করা হয়েছে, তারপর উত্তর দেওয়া হয়েছে। উদ্দেশ্য যুক্তির সাথে সৎ সংলাপ—যাঁরা এই আপত্তি রাখেন তাঁদের কাউকে ছোট করা নয়।',
    zh: '每个反对意见首先被公平陈述，然后予以回答。目的是诚实地参与论证——绝不贬低持有这些意见的人。',
    ja: '各反論はまず公平に述べられ、その後に回答されます。目的は議論に誠実に関わることであり、それを保持する人を決して貶めることではありません。',
  },
  whyislam_comparative_note: {
    en: 'This compares ideas and concepts of God — describing what Islam affirms and why. It is offered with respect for other faith communities and is not a criticism of any people.',
    bn: 'এটি ধারণা ও ঈশ্বর-কল্পনার তুলনা করে—ইসলাম কী নিশ্চিত করে ও কেন, তা বর্ণনা করে। এটি অন্যান্য ধর্মসম্প্রদায়ের প্রতি শ্রদ্ধা রেখে উপস্থাপিত, কোনো মানুষের সমালোচনা নয়।',
    zh: '这部分比较关于神的观念和概念——描述伊斯兰教所肯定的内容及其原因。这是对其他信仰群体尊重的呈现，而非对任何人的批评。',
    ja: 'これは神についての考えや概念を比較し、イスラームが何をなぜ肯定するかを説明します。他の信仰共同体への敬意をもって提供され、どの人々への批判でもありません。',
  },
  whyislam_dialogue_note: {
    en: 'Guidance on inviting others with wisdom, gentleness and respect — and without any compulsion.',
    bn: 'প্রজ্ঞা, কোমলতা ও শ্রদ্ধার সাথে—এবং কোনো জবরদস্তি ছাড়াই—অন্যকে আমন্ত্রণ জানানোর নির্দেশনা।',
    zh: '以智慧、温和和尊重——且没有任何强迫——邀请他人的指导。',
    ja: '知恵、優しさ、敬意をもって——強制することなく——他者を招くためのガイダンス。',
  },
  whyislam_glossary_note: {
    en: 'Short introductory definitions. Each term carries much more depth in the scholarly tradition.',
    bn: 'সংক্ষিপ্ত পরিচিতিমূলক সংজ্ঞা। প্রতিটি পরিভাষা শাস্ত্রীয় ঐতিহ্যে আরও অনেক গভীরতা বহন করে।',
    zh: '简短介绍性定义。每个术语在学术传统中都承载着更深的含义。',
    ja: '簡潔な入門的定義。各用語は学術的伝統の中ではるかに深い意味を持っています。',
  },
  whyislam_stories_note: {
    en: 'A general note, shared respectfully — journeys of faith are personal, and no pressure is intended.',
    bn: 'একটি সাধারণ নোট, শ্রদ্ধার সাথে উপস্থাপিত—ঈমানের যাত্রা ব্যক্তিগত, এবং কোনো চাপ উদ্দিষ্ট নয়।',
    zh: '一个一般性说明，怀着尊重分享——信仰之旅是个人的，并无意施加任何压力。',
    ja: '一般的な注意事項を敬意をもって共有します——信仰の旅は個人的なものであり、圧力をかける意図はありません。',
  },
  whyislam_misconceptions_note: {
    en: 'Each item states a sincere misconception fairly, then clarifies it. The aim is honest understanding — never to mock or blame anyone who holds it.',
    bn: 'প্রতিটি অংশে একটি আন্তরিক ভুল ধারণা প্রথমে ন্যায্যভাবে উপস্থাপন করা হয়েছে, তারপর তা স্পষ্ট করা হয়েছে। উদ্দেশ্য সৎ বোঝাপড়া—যিনি এমন ধারণা রাখেন তাঁকে উপহাস বা দোষারোপ করা কখনোই নয়।',
    zh: '每条都公平地陈述一个真诚的误解，然后予以澄清。目的是诚实的理解——绝不嘲笑或责怪持有该误解的人。',
    ja: '各項目は誠実な誤解を公平に述べた上で、それを明確にします。目的は正直な理解であり、それを抱く人を決して嘲ったり非難したりすることではありません。',
  },
  whyislam_next_note: {
    en: 'These are gentle suggestions only, offered without any pressure. Go at your own pace, and follow whichever step feels right for you.',
    bn: 'এগুলো কেবল কোমল পরামর্শ, কোনো চাপ ছাড়াই উপস্থাপিত। নিজের গতিতে এগোন, এবং যে পদক্ষেপ আপনার কাছে উপযুক্ত মনে হয় তা-ই অনুসরণ করুন।',
    zh: '这些仅是温和的建议，没有任何压力。按照自己的节奏前进，跟随你觉得合适的任何步骤。',
    ja: 'これらは穏やかな提案であり、強制ではありません。ご自身のペースで進め、あなたにとって正しいと感じるステップに従ってください。',
  },
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
          bn: 'ইসলামের শিক্ষা হলো, মানুষ জন্ম থেকেই নিজের স্রষ্টাকে চেনার এক স্বাভাবিক টান নিয়ে আসে। সত্যিকারের বিপদে বা গভীর বিস্ময়ের মুহূর্তে অনেক মানুষ আপনা থেকেই এক মহাশক্তির দিকে ফেরে। কুরআন মানুষের এই আদি স্বভাবের কথা বলে: "তুমি একনিষ্ঠভাবে নিজেকে দ্বীনের প্রতি প্রতিষ্ঠিত রাখো—আল্লাহর সেই ফিতরাহ, যার উপর তিনি মানুষকে সৃষ্টি করেছেন" (কুরআন ৩০:৩০)। এ কথা একা কোনো প্রমাণ হিসেবে বলা হচ্ছে না। বরং এটা একটা আহ্বান: প্রায় সব মানুষের মনের গভীরে থাকা এই অনুভূতিটুকু একবার খেয়াল করে দেখুন।',
        },
      },
      {
        heading: { en: 'The argument from a cause (kalam)', bn: 'কারণ থেকে যুক্তি (কালাম)' },
        body: {
          en: 'Classical Muslim theologians (the mutakallimun, e.g. al-Ghazali) argued: whatever begins to exist has a cause; the universe began to exist; therefore the universe has a cause — one that is itself uncaused, powerful and beyond time and space. The Quran points to the same reflection: "Or were they created by nothing, or were they the creators [of themselves]?" (Quran 52:35). The argument does not claim to describe God fully; it reasons that a beginning points beyond itself.',
          bn: 'ধ্রুপদী যুগের মুসলিম কালামশাস্ত্রবিদগণ (মুতাকাল্লিমুন, যেমন ইমাম গাজ্জালি) যুক্তি দিয়েছেন: যার শুরু আছে, তার একটা কারণ আছে; মহাবিশ্বের শুরু আছে; কাজেই মহাবিশ্বেরও একটা কারণ আছে। সেই কারণ নিজে আর কোনো কারণের ফল নয়, তিনি ক্ষমতাবান এবং কাল ও স্থানের ঊর্ধ্বে। কুরআনও একই ভাবনার দিকে ইঙ্গিত করে: "তারা কি স্রষ্টা ছাড়াই সৃষ্টি হয়েছে, নাকি তারাই স্রষ্টা?" (কুরআন ৫২:৩৫)। এই যুক্তি আল্লাহর পূর্ণ পরিচয় দেওয়ার দাবি করে না। এর কথা শুধু এটুকু: যার শুরু আছে, সে নিজের বাইরের কিছুর দিকে ইশারা করে।',
        },
      },
      {
        heading: { en: 'The argument from order and design', bn: 'শৃঙ্খলা ও নকশা থেকে যুক্তি' },
        body: {
          en: 'The universe displays remarkable order and finely balanced conditions that allow life to exist. Islam invites us to read this order as a sign of a wise Designer rather than blind accident: "Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision — do you see any breaks?" (Quran 67:3). This is presented as reasoned reflection on nature, not as a substitute for science.',
          bn: 'মহাবিশ্বে আছে বিস্ময়কর শৃঙ্খলা, আছে এমন সূক্ষ্ম ভারসাম্য, যার কারণে প্রাণ টিকে থাকতে পারে। ইসলাম আমাদের ডাকে এই শৃঙ্খলাকে অন্ধ দুর্ঘটনা হিসেবে না দেখে এক প্রজ্ঞাময় স্রষ্টার নিদর্শন হিসেবে দেখতে: "যিনি স্তরে স্তরে সাত আকাশ সৃষ্টি করেছেন। পরম দয়াময়ের সৃষ্টিতে তুমি কোনো অসামঞ্জস্য দেখবে না। আবার তাকিয়ে দেখো—কোনো ফাটল কি চোখে পড়ে?" (কুরআন ৬৭:৩)। এটা প্রকৃতি নিয়ে যুক্তি দিয়ে ভাবনা, বিজ্ঞানের বিকল্প নয়।',
        },
      },
      {
        heading: { en: 'The moral argument', bn: 'নৈতিক যুক্তি' },
        body: {
          en: 'Most people sense that some things — justice, honesty, compassion — are genuinely good, and cruelty genuinely wrong, not merely as personal opinion. Islam holds that such objective moral truths make most sense if they are grounded in a wise and just Creator who is their source. This does not claim non-believers cannot be moral; it asks where the binding weight of "ought" ultimately comes from.',
          bn: 'বেশিরভাগ মানুষ টের পায়, কিছু জিনিস সত্যিই ভালো: ন্যায়, সততা, দয়া। আর নিষ্ঠুরতা সত্যিই অন্যায়। এটা কেবল ব্যক্তিগত মতামতের ব্যাপার নয়। ইসলামের কথা হলো, এমন বস্তুনিষ্ঠ নৈতিক সত্যের সবচেয়ে ভালো ব্যাখ্যা মেলে, যদি এর উৎস হন এক প্রজ্ঞাময় ও ন্যায়বান স্রষ্টা। এর মানে এই নয় যে অবিশ্বাসীরা নৈতিক হতে পারে না। প্রশ্নটা হলো: "উচিত" কথাটার যে বাধ্য করার জোর, শেষ পর্যন্ত তা আসে কোথা থেকে?',
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
      bn: 'প্রত্যেক নবীর একই বার্তা, এর তিনটি দিক, এবং খাঁটি একত্ববাদ কেন যুক্তিসংগত।',
    },
    points: [
      {
        heading: { en: 'One consistent message', bn: 'সব নবীর এক ও অভিন্ন বার্তা' },
        body: {
          en: 'The Quran presents tawhid — worship of the one God alone — as the shared core of every prophet from Adam to Muhammad (peace be upon them): "And We sent not before you any messenger except that We revealed to him that there is no deity except Me, so worship Me" (Quran 21:25). The declaration of faith, "La ilaha illa Allah" (there is no god but God), captures this centre.',
          bn: 'কুরআন জানায়, তাওহিদ মানে কেবল এক আল্লাহর ইবাদত, আর আদম থেকে মুহাম্মাদ (তাঁদের প্রতি শান্তি) পর্যন্ত প্রত্যেক নবীর দাওয়াতের মূল কথা এটাই: "আমি তোমার পূর্বে এমন কোনো রাসূল পাঠাইনি, যাঁর প্রতি আমি এই ওহি করিনি যে, আমি ছাড়া কোনো ইলাহ নেই, সুতরাং আমারই ইবাদত করো" (কুরআন ২১:২৫)। ঈমানের ঘোষণা "লা ইলাহা ইল্লাল্লাহ" (আল্লাহ ছাড়া কোনো উপাস্য নেই) এই মূল কথাটিকেই ধরে রাখে।',
        },
      },
      {
        heading: { en: 'Three dimensions of tawhid', bn: 'তাওহিদের তিন দিক' },
        body: {
          en: 'Scholars introduce tawhid in three related aspects: (1) Lordship (rububiyyah) — God alone creates, sustains and governs; (2) Worship (uluhiyyah) — God alone deserves to be worshipped and turned to; and (3) Names and Attributes (asma wa sifat) — God is described only as He described Himself, without likening Him to creation. Together these mean the Creator is utterly unique and alone worthy of devotion.',
          bn: 'আলিমগণ তাওহিদকে পরস্পর সম্পর্কিত তিনটি দিক থেকে বুঝিয়ে থাকেন। (১) রুবুবিয়্যাহ (প্রভুত্ব): সৃষ্টি, প্রতিপালন ও পরিচালনা কেবল আল্লাহই করেন। (২) উলুহিয়্যাহ (ইবাদত): কেবল আল্লাহই ইবাদতের যোগ্য, কেবল তাঁরই দিকে ফিরতে হয়। (৩) আসমা ওয়া সিফাত (নাম ও গুণাবলি): আল্লাহ নিজেকে যেভাবে বর্ণনা করেছেন, তাঁকে কেবল সেভাবেই বর্ণনা করতে হবে, সৃষ্টির সাথে কোনো তুলনা না করে। সব মিলিয়ে কথা হলো, স্রষ্টা সম্পূর্ণ অতুলনীয়, আর ইবাদত পাওয়ার যোগ্য একমাত্র তিনিই।',
        },
      },
      {
        heading: { en: 'Why pure monotheism is coherent', bn: 'খাঁটি একত্ববাদ কেন সুসংগত' },
        body: {
          en: 'The Quran offers a rational reflection on unity: "Had there been within them [the heavens and earth] gods besides Allah, they both would have been ruined" (Quran 21:22). A single, ultimate source gives the universe its consistency and unified laws; competing ultimate powers would introduce conflict. Pure monotheism keeps the object of worship simple, unlimited and free of contradiction — the essence expressed in Surah al-Ikhlas (Quran 112).',
          bn: 'কুরআন একত্ব নিয়ে যুক্তি দিয়ে ভাবতে বলে: "যদি আকাশ ও পৃথিবীতে আল্লাহ ছাড়া আরও উপাস্য থাকত, তবে উভয়ই বিশৃঙ্খল হয়ে যেত" (কুরআন ২১:২২)। উৎস যখন একক ও চূড়ান্ত, তখনই মহাবিশ্বে থাকে সামঞ্জস্য আর অভিন্ন নিয়ম। একাধিক চূড়ান্ত শক্তি থাকলে তাদের মধ্যে সংঘাত বাধত। খাঁটি একত্ববাদে যাঁর ইবাদত করা হয়, তিনি এক ও অখণ্ড, সীমাহীন, তাঁর মধ্যে কোনো স্ববিরোধ নেই। এরই সারকথা সূরা আল-ইখলাসে (কুরআন ১১২)।',
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
          bn: 'নবুয়তের আগেও মক্কার লোকেরা মুহাম্মাদ (তাঁর প্রতি শান্তি)-কে চিনত আল-আমিন ("বিশ্বস্ত") ও আস-সাদিক ("সত্যবাদী") নামে, তাঁর কাছেই নিজেদের দামি জিনিস আমানত রাখত। যে মানুষ সবসময় সবার সাথে সৎ ছিলেন, তিনিই পরে নিজের বড় ক্ষতি মেনে নিয়ে সত্য আর নৈতিক শৃঙ্খলার দিকে ডাক দিয়েছেন। তাঁর আন্তরিকতার কথা তাই গুরুত্ব দিয়ে ভেবে দেখার মতো।',
        },
      },
      {
        heading: { en: 'An unlettered messenger', bn: 'একজন নিরক্ষর রাসুল' },
        body: {
          en: 'Islamic sources describe the Prophet as unlettered (ummi) — he did not read or write: "Those who follow the Messenger, the unlettered prophet…" (Quran 7:157). That a person without formal learning conveyed a text of such linguistic power and coherent teaching is, in the Islamic view, a sign that its source is divine rather than personal authorship.',
          bn: 'ইসলামি সূত্রগুলো জানায়, নবী ছিলেন উম্মি, অর্থাৎ তিনি লিখতে-পড়তে জানতেন না: "যারা সেই রাসূলের অনুসরণ করে, যিনি উম্মি নবী…" (কুরআন ৭:১৫৭)। প্রাতিষ্ঠানিক শিক্ষা ছাড়াই একজন মানুষ এমন ভাষার শক্তি আর এমন সুসংগত শিক্ষায় ভরা একটি গ্রন্থ পৌঁছে দিলেন। ইসলামের দৃষ্টিতে এটাই ইঙ্গিত দেয় যে এর উৎস কোনো মানুষের রচনা নয়, আল্লাহর কাছ থেকে আসা।',
        },
      },
      {
        heading: { en: 'Deep moral and social reform', bn: 'গভীর নৈতিক ও সামাজিক সংস্কার' },
        body: {
          en: 'In a single generation his message transformed a society: ending the burying of infant girls, curbing tribal vengeance, protecting the rights of the poor, orphans and slaves, and uniting warring tribes under justice and mercy. The scale and speed of this ethical reform is, historically, remarkable and central to his mission.',
          bn: 'মাত্র এক প্রজন্মে তাঁর বার্তা পুরো একটা সমাজ বদলে দিল। কন্যাশিশুকে জীবন্ত কবর দেওয়া বন্ধ হলো, গোত্রীয় প্রতিশোধে লাগাম পড়ল, গরিব, এতিম ও দাসদের হক রক্ষা পেল, আর যুদ্ধে লিপ্ত গোত্রগুলো ন্যায় ও রহমতের ছায়ায় এক হলো। এত বড় নৈতিক সংস্কার এত দ্রুত ঘটা ইতিহাসে সত্যিই অসাধারণ, আর এটাই ছিল তাঁর দাওয়াতের কেন্দ্রে।',
        },
      },
      {
        heading: { en: 'Continuity with earlier prophets', bn: 'পূর্ববর্তী নবীদের সাথে ধারাবাহিকতা' },
        body: {
          en: 'Islam sees Muhammad (peace be upon him) not as founding a new religion but as completing the one message brought by Noah, Abraham, Moses and Jesus (peace be upon them): call to the one God, uprightness, and accountability. The Quran honours these prophets and asks believers to make no distinction between them (Quran 2:285). This continuity is presented as a mark of authenticity, not novelty.',
          bn: 'ইসলামের দৃষ্টিতে মুহাম্মাদ (তাঁর প্রতি শান্তি) নতুন কোনো ধর্ম প্রতিষ্ঠা করেননি। নূহ, ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি) যে একই বার্তা এনেছিলেন, তিনি সেটাকেই পূর্ণ করেছেন: এক আল্লাহর দিকে ডাক, সৎ ও সোজা পথে চলা, আর জবাবদিহি। কুরআন এই নবীদের সম্মান করে এবং মুমিনদের বলে তাঁদের মধ্যে কোনো পার্থক্য না করতে (কুরআন ২:২৮৫)। ইসলাম এই ধারাবাহিকতাকে দেখে বার্তাটি খাঁটি হওয়ার চিহ্ন হিসেবে, নতুন কিছু হওয়ার চিহ্ন হিসেবে নয়।',
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
          bn: 'শুরু থেকেই কুরআন একসাথে দুইভাবে সংরক্ষিত হয়ে আসছে। প্রতি প্রজন্মে অসংখ্য মানুষ (হাফিজগণ) পুরো কুরআন মুখস্থ করেছেন, আবার তা লিখে রেখে যত্ন করে পরের প্রজন্মের হাতে তুলে দেওয়া হয়েছে। কুরআন নিজেই এই হেফাজতের কথা বলে: "নিশ্চয়ই আমিই এই উপদেশ (কুরআন) অবতীর্ণ করেছি এবং আমিই এর সংরক্ষক" (কুরআন ১৫:৯)। পাণ্ডুলিপির পাশাপাশি এই জীবন্ত মুখস্থ ধারা কুরআনের প্রজন্ম থেকে প্রজন্মে পৌঁছানোর এক অনন্য বৈশিষ্ট্য।',
        },
      },
      {
        heading: { en: 'An open literary challenge (i‘jaz)', bn: 'উন্মুক্ত সাহিত্যিক চ্যালেঞ্জ (ইজাজ)' },
        body: {
          en: 'The Quran issues a standing challenge to those who doubt its source: to produce even a single chapter like it — "And if you are in doubt about what We have sent down… then produce a surah the like thereof" (Quran 2:23). Classical Arab critics, masters of the language, acknowledged its distinctive eloquence. The claim of i‘jaz (inimitability) is a literary and linguistic argument, offered to the reader to weigh, not a coercion.',
          bn: 'যারা কুরআনের উৎস নিয়ে সন্দেহ করে, কুরআন তাদের সামনে একটা চ্যালেঞ্জ রেখে দিয়েছে, যা আজও খোলা: এর মতো মাত্র একটি সূরা বানিয়ে আনো। "আমি আমার বান্দার প্রতি যা অবতীর্ণ করেছি তাতে যদি তোমরা সন্দেহে থাকো, তবে এর অনুরূপ একটি সূরা রচনা করে আনো" (কুরআন ২:২৩)। আরবি ভাষার ওস্তাদ ধ্রুপদী যুগের আরব সমালোচকরাও এর অনন্য বাগ্মিতা স্বীকার করেছেন। ইজাজ (অননুকরণীয়তা)-র দাবি আসলে সাহিত্য ও ভাষার যুক্তি। পাঠক নিজেই তা বিচার করে দেখবেন, এতে কোনো জোর-জবরদস্তি নেই।',
        },
      },
      {
        heading: { en: 'Internal consistency', bn: 'অভ্যন্তরীণ সামঞ্জস্য' },
        body: {
          en: 'Revealed piecemeal over about twenty-three years, across changing and difficult circumstances, the Quran maintains a unified message and voice. It draws attention to this itself: "Then do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction" (Quran 4:82). Coherence across such a span is presented as a sign worth reflecting on.',
          bn: 'প্রায় তেইশ বছর ধরে অল্প অল্প করে নাজিল হয়েছে কুরআন, বদলে যাওয়া আর কঠিন সব পরিস্থিতির মধ্যে। তবু এর বার্তা ও কণ্ঠস্বর আগাগোড়া এক। কুরআন নিজেই এদিকে মনোযোগ টানে: "তবে কি তারা কুরআন নিয়ে চিন্তা করে না? যদি তা আল্লাহ ছাড়া অন্য কারও কাছ থেকে হতো, তবে তারা এতে অনেক অসংগতি পেত" (কুরআন ৪:৮২)। এত দীর্ঘ সময় জুড়ে এমন সামঞ্জস্য সত্যিই ভেবে দেখার মতো এক নিদর্শন।',
        },
      },
      {
        heading: { en: 'A book of guidance', bn: 'হিদায়াতের গ্রন্থ' },
        body: {
          en: 'Above all the Quran presents itself as guidance for living — "This is the Book about which there is no doubt, a guidance for those conscious of God" (Quran 2:2). Its main concern is not to catalogue scientific facts but to nurture God-consciousness, justice, gratitude and good character. Muslims are encouraged to read it thoughtfully and let its counsel be tested in a sincere life.',
          bn: 'সবচেয়ে বড় কথা, কুরআন নিজেকে পরিচয় দেয় জীবন চলার পথনির্দেশ হিসেবে: "এই সেই কিতাব, যাতে কোনো সন্দেহ নেই; মুত্তাকিদের জন্য হিদায়াত" (কুরআন ২:২)। বৈজ্ঞানিক তথ্যের তালিকা দেওয়া এর মূল উদ্দেশ্য নয়। এর আসল লক্ষ্য তাকওয়া, ন্যায়, শুকরিয়া আর উত্তম চরিত্র গড়ে তোলা। মুসলিমরা উৎসাহ পান ভেবেচিন্তে কুরআন পড়তে, আর আন্তরিকভাবে জীবনে মেনে চলে এর উপদেশ যাচাই করে দেখতে।',
        },
      },
    ],
  },
  {
    id: 'purpose',
    emoji: '🧭',
    kind: 'article',
    title: { en: 'The Purpose of Life & the Human Condition', bn: 'জীবনের উদ্দেশ্য ও মানুষের অবস্থা' },
    summary: {
      en: 'Why we are here, the test of this life, our trust and dignity, and where the heart finds rest.',
      bn: 'আমরা কেন এখানে, এই জীবনের পরীক্ষা, আমাদের আমানত ও মর্যাদা, এবং হৃদয় কোথায় প্রশান্তি পায়।',
    },
    points: [
      {
        heading: { en: 'Why are we here?', bn: 'আমরা কেন এখানে?' },
        body: {
          en: 'Islam answers the question of purpose directly: we exist to know and worship our Creator. "And I did not create the jinn and mankind except to worship Me" (Quran 51:56). Worship here is broader than ritual — it is a whole life lived with awareness of God, in gratitude, honesty and service. Purpose is therefore not something we must invent alone, but a relationship we are invited into.',
          bn: 'জীবনের উদ্দেশ্য কী, এই প্রশ্নের সোজা উত্তর দেয় ইসলাম: আমরা আছি আমাদের স্রষ্টাকে চেনার ও তাঁর ইবাদত করার জন্য। "আমি জিন ও মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি" (কুরআন ৫১:৫৬)। এখানে ইবাদত মানে শুধু আনুষ্ঠানিক আমল নয়। আল্লাহকে মনে রেখে, শুকরিয়া, সততা আর মানুষের সেবায় কাটানো পুরো জীবনটাই ইবাদত। তাই জীবনের উদ্দেশ্য আমাদের একা একা বানিয়ে নিতে হয় না। এটা এক সম্পর্ক, যেখানে আমাদের ডেকে নেওয়া হয়েছে।',
        },
      },
      {
        heading: { en: 'This life as a meaningful test', bn: 'এই জীবন এক অর্থবহ পরীক্ষা' },
        body: {
          en: 'Islam frames earthly life as a temporary and meaningful trial: "[He] who created death and life to test which of you is best in deed" (Quran 67:2). Our struggles, choices and responsibilities are not random; they carry weight precisely because they are part of a test whose results matter beyond this world. This gives both hardship and effort a deeper significance.',
          bn: 'ইসলাম দুনিয়ার জীবনকে দেখে এক সাময়িক অথচ অর্থবহ পরীক্ষা হিসেবে: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন, তোমাদের মধ্যে কে আমলে উত্তম তা পরীক্ষা করতে" (কুরআন ৬৭:২)। আমাদের সংগ্রাম, সিদ্ধান্ত আর দায়িত্ব এলোমেলো কিছু নয়। এগুলোর ওজন আছে ঠিক এই কারণেই যে এগুলো এমন এক পরীক্ষার অংশ, যার ফল এই দুনিয়া ছাড়িয়েও গুরুত্ব রাখে। তাই কষ্ট আর চেষ্টা, দুটোরই মানে আরও গভীর হয়ে ওঠে।',
        },
      },
      {
        heading: { en: 'Dignity, trust and stewardship', bn: 'মর্যাদা, আমানত ও দায়িত্ব' },
        body: {
          en: 'The human being is given honour and a trust (amanah): to act with justice and care on earth as a steward (khalifah) — "Indeed, I will make upon the earth a successive authority" (Quran 2:30). With dignity comes responsibility toward God, other people, and the world. Human weakness is acknowledged honestly, but so is our capacity for good.',
          bn: 'মানুষকে দেওয়া হয়েছে সম্মান, আর দেওয়া হয়েছে এক আমানত: পৃথিবীতে খলিফা (প্রতিনিধি) হিসেবে ন্যায় ও যত্নের সাথে দায়িত্ব পালন করা। আল্লাহ বলেছেন, "আমি পৃথিবীতে একজন প্রতিনিধি সৃষ্টি করব" (কুরআন ২:৩০)। মর্যাদার সাথেই আসে দায়িত্ব: আল্লাহর প্রতি, অন্য মানুষের প্রতি, আর এই পৃথিবীর প্রতি। ইসলাম মানুষের দুর্বলতা খোলাখুলি স্বীকার করে, তবে ভালো কাজ করার সামর্থ্যও স্বীকার করে।',
        },
      },
      {
        heading: { en: 'Where the heart finds rest', bn: 'হৃদয় কোথায় প্রশান্তি পায়' },
        body: {
          en: 'Islam teaches that lasting contentment comes not only from possessions or status but from connection with God: "Unquestionably, by the remembrance of Allah hearts are assured" (Quran 13:28). Meaning, gratitude and inner peace are presented as fruits of a life oriented toward its Creator and lived in service to others.',
          bn: 'ইসলাম শেখায়, স্থায়ী প্রশান্তি শুধু সম্পদ বা পদমর্যাদায় আসে না, আসে আল্লাহর সাথে সম্পর্ক থেকে: "জেনে রাখো, আল্লাহর জিকিরেই অন্তর প্রশান্ত হয়" (কুরআন ১৩:২৮)। জীবনের অর্থ, শুকরিয়া আর মনের শান্তি সেই জীবনেরই ফল, যে জীবন স্রষ্টার দিকে মুখ করে চলে আর মানুষের সেবায় কাটে।',
        },
      },
    ],
  },
  {
    id: 'preservation',
    emoji: '📜',
    kind: 'article',
    title: { en: 'Preservation of the Quran', bn: 'কুরআনের সংরক্ষণ' },
    summary: {
      en: 'How memorization and a careful written tradition together preserved the text — at an introductory, defensible level.',
      bn: 'মুখস্থের ধারা আর যত্নশীল লিখিত ধারা মিলে কীভাবে কুরআনের পাঠ সংরক্ষিত হয়েছে। প্রাথমিক স্তরের, প্রমাণে টেকে এমন আলোচনা।',
    },
    points: [
      {
        heading: { en: 'A living tradition of memorization', bn: 'হিফজের জীবন্ত ধারা' },
        body: {
          en: 'From the Prophet’s own lifetime, the Quran was memorised in full by many companions, and this practice has continued unbroken. In every generation since, large numbers of people (the huffaz) have committed the entire Quran to memory. This continuous oral tradition means the text is carried in living minds worldwide, not only on paper.',
          bn: 'নবীর জীবদ্দশাতেই বহু সাহাবি পুরো কুরআন মুখস্থ করেছিলেন, আর এই চর্চা তখন থেকে অবিচ্ছিন্নভাবে চলে আসছে। এরপর প্রতিটি প্রজন্মে অসংখ্য মানুষ (হাফিজগণ) পুরো কুরআন মুখস্থ করেছেন। এই অবিচ্ছিন্ন মৌখিক ধারার ফলে কুরআন শুধু কাগজে নয়, সারা বিশ্বের জীবন্ত মানুষের স্মৃতিতেও বেঁচে আছে।',
        },
      },
      {
        heading: { en: 'A careful written record', bn: 'যত্নে লেখা লিখিত রূপ' },
        body: {
          en: 'The revelation was also written down during the Prophet’s life by appointed scribes. According to the mainstream account, it was gathered into a single reference during the caliphate of Abu Bakr, and standardised copies were distributed under the caliph Uthman to keep recitation uniform across the expanding community. Memorisation and manuscript thus checked and reinforced one another.',
          bn: 'নবীর জীবদ্দশাতেই নিযুক্ত লেখকরা ওহি লিখেও রাখতেন। মূলধারার বর্ণনা অনুযায়ী, খলিফা আবু বকরের সময়ে তা একটি একক সংকলনে একত্র করা হয়। পরে খলিফা উসমানের সময়ে প্রমিত কপি বিভিন্ন অঞ্চলে পাঠানো হয়, যাতে ছড়িয়ে পড়া মুসলিম সমাজে তিলাওয়াত সবখানে এক রকম থাকে। এভাবে মুখস্থ আর লিখিত পাণ্ডুলিপি একে অন্যকে যাচাই করেছে, মজবুত করেছে।',
        },
      },
      {
        heading: { en: 'Manuscript continuity', bn: 'পাণ্ডুলিপির ধারাবাহিকতা' },
        body: {
          en: 'Early Quran manuscripts that survive from the first Islamic centuries show a text that corresponds closely to the Quran recited today. Presented cautiously and without overstatement, the surviving manuscript evidence together with the unbroken chain of memorisation is what Muslims point to when speaking of the Quran’s remarkable preservation.',
          bn: 'ইসলামের প্রথম শতাব্দীগুলো থেকে যেসব প্রাচীন পাণ্ডুলিপি টিকে আছে, সেগুলোর পাঠ আজকের তিলাওয়াত করা কুরআনের সাথে ঘনিষ্ঠভাবে মিলে যায়। সাবধানে, বাড়িয়ে না বলে কথাটা এই: টিকে থাকা পাণ্ডুলিপির প্রমাণ আর মুখস্থের অবিচ্ছিন্ন ধারা, এই দুটোকেই মুসলিমরা সামনে আনেন কুরআনের অসাধারণ সংরক্ষণের কথা বলতে গিয়ে।',
        },
      },
      {
        heading: { en: 'The promise of guardianship', bn: 'সংরক্ষণের প্রতিশ্রুতি' },
        body: {
          en: 'For Muslims this preservation is not accidental but the fulfilment of a promise: "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian" (Quran 15:9). The claim is offered as something one can examine — comparing copies and reciters across the world — rather than accepted on assertion alone.',
          bn: 'মুসলিমদের কাছে এই সংরক্ষণ কোনো কাকতালীয় ঘটনা নয়, এক প্রতিশ্রুতির পূরণ: "নিশ্চয়ই আমিই এই উপদেশ (কুরআন) অবতীর্ণ করেছি এবং আমিই এর সংরক্ষক" (কুরআন ১৫:৯)। এই দাবি শুধু মুখের কথায় মেনে নিতে বলা হয় না। যে কেউ যাচাই করে দেখতে পারেন: সারা বিশ্বের কপি আর কারিদের তিলাওয়াত মিলিয়ে দেখুন।',
        },
      },
    ],
  },
  {
    id: 'finality',
    emoji: '🏁',
    kind: 'article',
    title: { en: 'The Finality of Prophethood', bn: 'নবুয়তের সমাপ্তি' },
    summary: {
      en: 'Why Islam teaches there is no prophet after Muhammad ﷺ — and what that does and does not mean.',
      bn: 'ইসলাম কেন শেখায় যে মুহাম্মাদ ﷺ-এর পর আর কোনো নবী নেই, আর এর মানে কী, কী নয়।',
    },
    points: [
      {
        heading: { en: 'The Seal of the Prophets', bn: 'নবীদের সিলমোহর (খাতামুন নাবিয়্যিন)' },
        body: {
          en: 'Islam teaches that Muhammad (peace be upon him) is the final prophet: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the seal (last) of the prophets" (Quran 33:40). Prophethood is understood as a single mission carried by many messengers over time, now brought to completion.',
          bn: 'ইসলামের শিক্ষা হলো, মুহাম্মাদ (তাঁর প্রতি শান্তি) সর্বশেষ নবী: "মুহাম্মাদ তোমাদের কোনো পুরুষের পিতা নন, বরং তিনি আল্লাহর রাসূল ও নবীদের সিলমোহর (শেষ নবী)" (কুরআন ৩৩:৪০)। নবুয়ত আসলে একটিই দায়িত্ব, যা যুগে যুগে বহু রাসূল বহন করেছেন, আর এখন তা পূর্ণতা পেয়েছে।',
        },
      },
      {
        heading: { en: 'Because the message is complete', bn: 'কারণ বার্তা পূর্ণ হয়ে গেছে' },
        body: {
          en: 'A further prophet is understood to be unnecessary because the guidance itself is now complete: "This day I have perfected for you your religion" (Quran 5:3). Finality is not a claim that earlier prophets were lesser; rather, the same core message they all taught has reached its final and preserved form.',
          bn: 'ইসলামের বুঝ হলো, আর কোনো নবীর দরকার নেই, কারণ হিদায়াত নিজেই এখন পূর্ণ: "আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম" (কুরআন ৫:৩)। শেষ নবী হওয়ার মানে এই নয় যে আগের নবীরা মর্যাদায় কম ছিলেন। বরং তাঁরা সবাই যে একই মূল বার্তা শিখিয়েছেন, সেটাই এখন তার চূড়ান্ত ও সংরক্ষিত রূপ পেয়েছে।',
        },
      },
      {
        heading: { en: 'Preservation makes finality workable', bn: 'সংরক্ষণই সমাপ্তিকে সম্ভব করে' },
        body: {
          en: 'A final revelation only makes sense if it remains intact for all later generations. Islam connects finality to preservation: because the Quran is safeguarded, later peoples do not need a new prophet to restore lost guidance — they have access to the same message directly.',
          bn: 'শেষ ওহি তখনই অর্থবহ, যখন তা পরের সব প্রজন্মের জন্য অক্ষত থাকে। ইসলাম তাই নবুয়তের সমাপ্তিকে সংরক্ষণের সাথে যুক্ত করে। কুরআন যেহেতু সুরক্ষিত, হারানো হিদায়াত ফিরিয়ে আনতে পরের মানুষদের নতুন নবীর দরকার নেই। একই বার্তা তারা সরাসরি হাতে পায়।',
        },
      },
      {
        heading: { en: 'Renewal through knowledge, not new prophets', bn: 'নতুন নবী নয়, জ্ঞানের মাধ্যমে নবায়ন' },
        body: {
          en: 'Islam still expects each age to be served by sincere scholars and reformers who explain and apply the preserved guidance to new circumstances. This ongoing renewal (of understanding and practice) takes the place of new prophethood, keeping the religion both fixed in its source and responsive in its application.',
          bn: 'তবে ইসলাম আশা করে, প্রতিটি যুগে আন্তরিক আলিম ও সংস্কারকরা উম্মতের খেদমত করবেন। তাঁরা সংরক্ষিত হিদায়াতকে নতুন পরিস্থিতিতে ব্যাখ্যা করবেন, প্রয়োগ করবেন। বোঝা ও আমলের এই চলমান নবায়নই নতুন নবুয়তের জায়গা নেয়। ফলে দ্বীন তার উৎসে থাকে অটল, আবার প্রয়োগে সময়ের ডাকে সাড়া দিতে পারে।',
        },
      },
    ],
  },
  {
    id: 'mercy',
    emoji: '🤲',
    kind: 'article',
    title: { en: 'Mercy, Justice & Morality in Islam', bn: 'ইসলামে দয়া, ন্যায় ও নৈতিকতা' },
    summary: {
      en: 'God’s encompassing mercy, the call to justice even against oneself, and a balanced view of character.',
      bn: 'আল্লাহর সর্বব্যাপী দয়া, নিজের বিরুদ্ধেও ন্যায়ের আহ্বান, এবং চরিত্রের ভারসাম্যপূর্ণ দৃষ্টিভঙ্গি।',
    },
    points: [
      {
        heading: { en: 'Mercy comes first', bn: 'সবার আগে রহমত' },
        body: {
          en: 'Almost every chapter of the Quran opens by naming God as the Most Merciful (ar-Rahman, ar-Rahim), and God describes His mercy as all-embracing: "My mercy encompasses all things" (Quran 7:156). In Islam, hope in God’s mercy is meant to outweigh despair, and mercy is the lens through which His other qualities are understood.',
          bn: 'কুরআনের প্রায় প্রতিটি সূরা শুরু হয় আল্লাহকে পরম দয়াময় (আর-রহমান, আর-রহিম) বলে, আর আল্লাহ নিজেই তাঁর রহমতকে বলেছেন সর্বব্যাপী: "আমার রহমত সব কিছুকে ঘিরে রেখেছে" (কুরআন ৭:১৫৬)। ইসলামে আল্লাহর রহমতের আশা সবসময় হতাশার চেয়ে ভারী থাকার কথা। আর তাঁর অন্য সব গুণ বুঝতে হয় এই রহমতের আলোতেই।',
        },
      },
      {
        heading: { en: 'A prophet sent as mercy', bn: 'রহমত হয়ে আসা নবী' },
        body: {
          en: 'The mission of the Prophet is summarised in terms of mercy: "And We have not sent you except as a mercy to the worlds" (Quran 21:107). Gentleness, forgiveness and concern for others — including the vulnerable, animals and the natural world — are held up as central to prophetic character and to Muslim ethics.',
          bn: 'কুরআন নবীর দাওয়াতের সারকথা বলেছে রহমতের ভাষায়: "আমি আপনাকে কেবল বিশ্বজগতের জন্য রহমতরূপেই পাঠিয়েছি" (কুরআন ২১:১০৭)। কোমলতা, ক্ষমা আর অন্যের প্রতি মমতা, তা দুর্বল মানুষ হোক, পশুপাখি হোক বা প্রকৃতি, নবীর চরিত্র ও মুসলিম নৈতিকতার একেবারে কেন্দ্রে।',
        },
      },
      {
        heading: { en: 'Justice, even against oneself', bn: 'ন্যায়, এমনকি নিজের বিরুদ্ধেও' },
        body: {
          en: 'Justice is a firm command, binding even when it is inconvenient: "Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves…" (Quran 4:135), and "do not let hatred of a people prevent you from being just" (Quran 5:8). Fairness is required toward everyone, including those one disagrees with.',
          bn: 'ন্যায় আল্লাহর এক দৃঢ় নির্দেশ, অসুবিধা হলেও তা মানতে হয়: "ন্যায়ের উপর দৃঢ়ভাবে প্রতিষ্ঠিত থাকো, আল্লাহর জন্য সাক্ষী হিসেবে, যদিও তা তোমাদের নিজেদের বিরুদ্ধে হয়…" (কুরআন ৪:১৩৫)। আরেক আয়াতে আছে: "কোনো সম্প্রদায়ের প্রতি বিদ্বেষ যেন তোমাদের ন্যায়বিচার থেকে বিরত না রাখে" (কুরআন ৫:৮)। সবার প্রতি ইনসাফ করতে হবে, যাদের সাথে মতে মেলে না তাদের প্রতিও।',
        },
      },
      {
        heading: { en: 'Character as the heart of religion', bn: 'চরিত্রই দ্বীনের প্রাণ' },
        body: {
          en: 'Islamic morality balances rights owed to God (like worship and gratitude) with rights owed to people (honesty, kindness, keeping promises, caring for family and neighbours). Good character (akhlaq) — truthfulness, humility, patience and generosity — is treated not as an optional extra but as a core aim of the faith.',
          bn: 'ইসলামি নৈতিকতা দুই ধরনের হকের মধ্যে ভারসাম্য রাখে: আল্লাহর হক (যেমন ইবাদত ও শুকরিয়া) আর বান্দার হক (সততা, সদয় আচরণ, ওয়াদা রক্ষা, পরিবার ও প্রতিবেশীর খোঁজখবর রাখা)। উত্তম চরিত্র (আখলাক), অর্থাৎ সত্যবাদিতা, বিনয়, ধৈর্য ও উদারতা, ঐচ্ছিক কোনো বাড়তি জিনিস নয়। এটি দ্বীনের অন্যতম মূল লক্ষ্য।',
        },
      },
    ],
  },
  {
    id: 'hereafter',
    emoji: '⚖️',
    kind: 'article',
    title: { en: 'The Hereafter & Accountability', bn: 'পরকাল ও জবাবদিহিতা' },
    summary: {
      en: 'Why an afterlife makes life meaningful and just — held in balance between hope and responsibility.',
      bn: 'পরকালের বিশ্বাস কেন জীবনকে অর্থবহ ও ন্যায্য করে তোলে, আর কীভাবে তা আশা ও দায়িত্বের মাঝে ভারসাম্য রাখে।',
    },
    points: [
      {
        heading: { en: 'Life is accountable, so it matters', bn: 'জীবনের হিসাব দিতে হবে, তাই জীবন মূল্যবান' },
        body: {
          en: 'Islam teaches that nothing we do is finally lost or meaningless: "So whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it" (Quran 99:7–8). Belief in the hereafter gives every act moral weight and encourages sincerity even when no one else is watching.',
          bn: 'ইসলাম শেখায়, আমাদের কোনো কাজই শেষ পর্যন্ত হারিয়ে যায় না, অর্থহীনও হয় না: "সুতরাং কেউ অণু পরিমাণ ভালো করলে তা দেখবে, আর কেউ অণু পরিমাণ মন্দ করলে তা-ও দেখবে" (কুরআন ৯৯:৭–৮)। আখিরাতে বিশ্বাস প্রতিটি কাজকে নৈতিক ওজন দেয়, আর কেউ না দেখলেও মানুষকে খাঁটি থাকতে উৎসাহ দেয়।',
        },
      },
      {
        heading: { en: 'Justice ultimately fulfilled', bn: 'শেষ পর্যন্ত ন্যায়ের পূর্ণতা' },
        body: {
          en: 'Many wrongs in this world are never put right, and much good goes unrewarded. Islam answers this with a just reckoning: the oppressed are vindicated, sincere good is honoured, and no injustice is overlooked by God. The hereafter is presented as the completion of a justice only partly seen now.',
          bn: 'এই দুনিয়ায় অনেক অন্যায়ের কোনো বিচার হয় না, অনেক ভালো কাজের কোনো প্রতিদানও মেলে না। ইসলাম এর জবাব দেয় ন্যায্য হিসাব-নিকাশের কথা বলে: মজলুম তার ন্যায্য বিচার পাবে, আন্তরিক নেক কাজ মর্যাদা পাবে, আর কোনো জুলুমই আল্লাহর নজর এড়াবে না। পরকাল সেই ন্যায়েরই পূর্ণতা, যার কেবল কিছুটা আমরা এখন দেখি।',
        },
      },
      {
        heading: { en: 'Hope alongside responsibility', bn: 'দায়িত্বের পাশে আশা' },
        body: {
          en: 'The Quran holds accountability and mercy together. It warns honestly about consequences, yet repeatedly emphasises God’s forgiveness for those who turn back to Him. The intended attitude is neither reckless nor despairing, but hopeful and responsible — striving to do good while trusting in God’s mercy.',
          bn: 'কুরআন জবাবদিহি আর রহমতকে একসাথে রাখে। পরিণতির ব্যাপারে খোলাখুলি সতর্ক করে, আবার বারবার মনে করিয়ে দেয়: যারা আল্লাহর দিকে ফিরে আসে, তিনি তাদের ক্ষমা করেন। কুরআন চায় মানুষ বেপরোয়াও হবে না, নিরাশও হবে না। বরং আশা আর দায়িত্ববোধ নিয়ে চলবে: ভালো কাজের চেষ্টা করবে, আর ভরসা রাখবে আল্লাহর রহমতে।',
        },
      },
    ],
  },
  {
    id: 'qadar',
    emoji: '🌗',
    kind: 'article',
    title: { en: 'Free Will & Divine Decree (Qadar)', bn: 'স্বাধীন ইচ্ছা ও তাকদির (কদর)' },
    summary: {
      en: 'An introductory look at how Islam affirms both God’s knowledge and real human choice.',
      bn: 'ইসলাম কীভাবে আল্লাহর জ্ঞান এবং মানুষের সত্যিকারের বেছে নেওয়ার ক্ষমতা, দুটোকেই স্বীকার করে: একটি প্রাথমিক পরিচিতি।',
    },
    points: [
      {
        heading: { en: 'Both together, not one or the other', bn: 'একটি নয়, দুটোই একসাথে' },
        body: {
          en: 'At an introductory level, mainstream Islamic belief affirms two truths together: God has complete knowledge of all that happens and nothing occurs outside His will, and human beings have genuine choice for which they are responsible. These are held as compatible, not contradictory, even where the full "how" lies beyond us.',
          bn: 'প্রাথমিক স্তরে বললে, মূলধারার ইসলামি আকিদা দুটি সত্যকে একসাথে মানে। এক, যা কিছু ঘটে তার পূর্ণ জ্ঞান আল্লাহর আছে, আর তাঁর ইচ্ছার বাইরে কিছুই ঘটে না। দুই, মানুষের সত্যিকারের বেছে নেওয়ার স্বাধীনতা আছে, আর সেজন্য সে দায়ী। এ দুটো পরস্পরবিরোধী নয়, বরং একসাথে সত্য, যদিও পুরো "কীভাবে" আমাদের বোঝার বাইরে।',
        },
      },
      {
        heading: { en: 'We are responsible for our effort', bn: 'আমরা আমাদের প্রচেষ্টার জন্য দায়ী' },
        body: {
          en: 'In daily life we plainly experience making real choices, and Islam treats us as accountable for our intentions and efforts — not for outcomes beyond our control. "Allah does not charge a soul except with that within its capacity" (Quran 2:286). Divine knowledge of what we will freely choose does not force the choice upon us.',
          bn: 'রোজকার জীবনে আমরা স্পষ্টই টের পাই যে আমরা সত্যিই বেছে নিচ্ছি। ইসলাম আমাদের দায়ী করে আমাদের নিয়ত আর চেষ্টার জন্য, আমাদের হাতের বাইরের ফলাফলের জন্য নয়। "আল্লাহ কোনো ব্যক্তিকে তার সাধ্যের বাইরে দায়িত্ব দেন না" (কুরআন ২:২৮৬)। আমরা স্বাধীনভাবে কী বেছে নেব, আল্লাহ তা জানেন। কিন্তু তাঁর এই জানা আমাদের সেই সিদ্ধান্ত নিতে বাধ্য করে না।',
        },
      },
      {
        heading: { en: 'Humility before a deep matter', bn: 'এক গভীর বিষয়ে বিনয়' },
        body: {
          en: 'Classical scholars advised approaching qadar with humility, warning against endless speculation about matters that exceed human comprehension. The practical emphasis is on doing one’s duty rather than using "destiny" as an excuse for wrongdoing or inaction.',
          bn: 'ধ্রুপদী আলিমগণ পরামর্শ দিয়েছেন তাকদিরের বিষয়ে বিনয়ের সাথে এগোতে। মানুষের বুদ্ধির নাগালের বাইরের বিষয় নিয়ে অন্তহীন জল্পনা করতে তাঁরা সতর্ক করেছেন। বাস্তব জীবনে জোরটা নিজের দায়িত্ব পালনের উপর। "ভাগ্যে ছিল" বলে অন্যায় করা বা হাত গুটিয়ে বসে থাকার অজুহাত খোঁজা চলবে না।',
        },
      },
      {
        heading: { en: 'Strive, then trust', bn: 'চেষ্টা করুন, তারপর ভরসা রাখুন' },
        body: {
          en: 'The lived attitude Islam encourages balances two extremes: it rejects fatalism (doing nothing because "it is all decreed") and rejects arrogance (imagining we control everything). Instead the believer takes sincere action and then places trust in God (tawakkul) with the results — active in effort, peaceful in outcome.',
          bn: 'ইসলাম যে মনোভাব নিয়ে বাঁচতে শেখায়, তা দুই প্রান্তিকতার মাঝে ভারসাম্য রাখে। এক দিকে নিয়তিবাদ: "সবই তো লেখা আছে" বলে কিছুই না করা। আরেক দিকে অহংকার: ভাবা যে সবকিছু আমাদের হাতে। ইসলাম দুটোই নাকচ করে। মুমিন আন্তরিকভাবে চেষ্টা করে, তারপর ফলাফলের ব্যাপারে আল্লাহর উপর ভরসা করে (তাওয়াক্কুল)। চেষ্টায় সে সক্রিয়, ফলাফলে প্রশান্ত।',
        },
      },
    ],
  },
  {
    id: 'earlier-prophets',
    emoji: '🕯️',
    kind: 'article',
    title: { en: 'Earlier Prophets & Scriptures', bn: 'পূর্ববর্তী নবী ও কিতাবসমূহ' },
    summary: {
      en: 'How Islam honours the prophets before Muhammad ﷺ and the revelations given to them.',
      bn: 'মুহাম্মাদ ﷺ-এর পূর্ববর্তী নবী ও তাঁদের প্রতি অবতীর্ণ ওহিকে ইসলাম কীভাবে সম্মান করে।',
    },
    points: [
      {
        heading: { en: 'Belief in all the prophets', bn: 'সকল নবীর প্রতি ঈমান' },
        body: {
          en: 'A Muslim is required to believe in all of God’s prophets and to make no distinction between them: "We believe in Allah and what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob… and what was given to Moses and Jesus… we make no distinction between any of them" (Quran 2:136). Rejecting any true prophet is not part of Islam.',
          bn: 'একজন মুসলিমকে আল্লাহর সব নবীর প্রতি ঈমান আনতে হয়, তাঁদের মধ্যে কোনো পার্থক্য করা চলে না: "আমরা ঈমান আনি আল্লাহর প্রতি এবং আমাদের প্রতি যা অবতীর্ণ হয়েছে, আর ইব্রাহিম, ইসমাইল, ইসহাক, ইয়াকুবের প্রতি যা অবতীর্ণ হয়েছে… এবং মূসা ও ঈসাকে যা দেওয়া হয়েছে… আমরা তাঁদের কারও মধ্যে পার্থক্য করি না" (কুরআন ২:১৩৬)। কোনো সত্য নবীকে অস্বীকার করার জায়গা ইসলামে নেই।',
        },
      },
      {
        heading: { en: 'Honour for earlier revelation', bn: 'পূর্ববর্তী ওহির প্রতি সম্মান' },
        body: {
          en: 'Islam teaches that God gave revelation before the Quran — such as the scriptures given to Moses and Jesus (peace be upon them) — as genuine guidance in its time. Muslims speak of these prophets and their original message with reverence, seeing themselves as heirs to the same prophetic tradition rather than opponents of it.',
          bn: 'ইসলাম শেখায়, কুরআনের আগেও আল্লাহ ওহি পাঠিয়েছেন, যেমন মূসা ও ঈসা (তাঁদের প্রতি শান্তি)-কে দেওয়া কিতাব। সেগুলো নিজ নিজ যুগে ছিল সত্যিকারের হিদায়াত। মুসলিমরা এই নবীদের আর তাঁদের মূল বার্তার কথা বলেন গভীর শ্রদ্ধার সাথে। তাঁরা নিজেদের মনে করেন সেই একই নবুয়তের ধারার উত্তরসূরি, তার বিরোধী নয়।',
        },
      },
      {
        heading: { en: 'The Quran as confirming and final', bn: 'কুরআন: সত্যায়নকারী ও চূড়ান্ত' },
        body: {
          en: 'The Quran describes itself as confirming the truth of what came before it and as a guardian standard over it: "We have sent down to you the Book in truth, confirming that which preceded it and as a criterion over it" (Quran 5:48). Islam thus presents itself as continuous with earlier faith communities while offering the final, preserved reference point.',
          bn: 'কুরআন নিজের পরিচয় দেয় আগের কিতাবগুলোর সত্যের সমর্থক হিসেবে, এবং সেগুলোর উপর রক্ষক ও মানদণ্ড হিসেবে: "আমি আপনার প্রতি সত্যসহ কিতাব অবতীর্ণ করেছি, যা পূর্ববর্তী কিতাবের সত্যায়নকারী ও তার উপর তত্ত্বাবধায়ক" (কুরআন ৫:৪৮)। তাই ইসলাম নিজেকে দেখে আগের ঈমানদার সম্প্রদায়গুলোর ধারাবাহিকতা হিসেবে, আবার একই সাথে চূড়ান্ত ও সংরক্ষিত মানদণ্ড হিসেবে।',
        },
      },
      {
        heading: { en: 'Seeking common ground', bn: 'অভিন্ন ভিত্তির খোঁজ' },
        body: {
          en: 'The Quran invites respectful dialogue with the People of the Book on shared principles: "Say: O People of the Scripture, come to a word that is equitable between us and you — that we worship none but God" (Quran 3:64). The tone commended is one of courteous conversation around common values, not hostility.',
          bn: 'কুরআন আহলে কিতাবকে ডাকে অভিন্ন নীতির উপর দাঁড়িয়ে শ্রদ্ধাপূর্ণ আলোচনায়: "বলুন, হে আহলে কিতাব, এসো এমন এক কথায় যা আমাদের ও তোমাদের মধ্যে অভিন্ন—আমরা আল্লাহ ছাড়া কারও ইবাদত করব না" (কুরআন ৩:৬৪)। কুরআন যে সুর পছন্দ করে, তা হলো অভিন্ন মূল্যবোধ নিয়ে ভদ্র ও সৌজন্যপূর্ণ আলাপ, শত্রুতা নয়।',
        },
      },
    ],
  },
  {
    id: 'history',
    emoji: '🏺',
    kind: 'article',
    title: { en: 'Historical Evidence', bn: 'ঐতিহাসিক প্রমাণ' },
    summary: {
      en: 'Early Quran manuscripts, the mass-transmitted recitation, and early attestations of the Prophet ﷺ — presented carefully.',
      bn: 'প্রাচীন কুরআন পাণ্ডুলিপি, অসংখ্য মানুষের মুখে মুখে চলে আসা তিলাওয়াত, আর নবী ﷺ সম্পর্কে প্রথম দিকের সাক্ষ্য: সতর্কভাবে তুলে ধরা।',
    },
    points: [
      {
        heading: { en: 'The Birmingham manuscript', bn: 'বার্মিংহাম পাণ্ডুলিপি' },
        body: {
          en: 'In 2015 the University of Birmingham announced that the parchment of a Quran folio in its Mingana Collection had been radiocarbon-dated, with high probability, to approximately 568–645 CE — a range overlapping the lifetime of the Prophet (peace be upon him) and the first generation. Its text corresponds closely to the Quran read today. Radiocarbon dating tests the animal skin rather than the ink, so scholars discuss the exact writing date carefully — but it stands among the earliest surviving Quranic material, significant precisely because so early a text matches the familiar one.',
          bn: '২০১৫ সালে বার্মিংহাম বিশ্ববিদ্যালয় ঘোষণা করে, তাদের মিংগানা সংগ্রহের একটি কুরআন-পাতার চামড়ার বয়স রেডিওকার্বন পরীক্ষায়, উচ্চ সম্ভাবনায়, আনুমানিক ৫৬৮–৬৪৫ খ্রিষ্টাব্দ বলে নির্ণীত হয়েছে। এই সময়সীমা নবী (তাঁর প্রতি শান্তি)-এর জীবনকাল ও প্রথম প্রজন্মের সময়ের সাথে মিলে যায়। এর পাঠ আজকের কুরআনের সাথে ঘনিষ্ঠভাবে মেলে। রেডিওকার্বন পরীক্ষা কালির নয়, চামড়ার বয়স মাপে। তাই ঠিক কবে লেখা হয়েছিল, তা নিয়ে গবেষকরা সাবধানে আলোচনা করেন। তবু এটি টিকে থাকা সবচেয়ে প্রাচীন কুরআনি নিদর্শনগুলোর একটি। এর গুরুত্ব ঠিক এখানেই: এত পুরোনো পাঠও আমাদের চেনা পাঠের সাথে মিলে যায়।',
        },
      },
      {
        heading: { en: 'Sana‘a, Topkapi and other early codices', bn: 'সানআ, তোপকাপি ও অন্যান্য প্রাচীন মুসহাফ' },
        body: {
          en: 'Other very early witnesses include the Sana‘a manuscripts discovered in Yemen in 1972 — among the oldest known Quranic manuscripts and an important subject of academic study — and large early codices such as the Topkapi manuscript in Istanbul. Studied soberly, this record shows an early text corresponding closely to the Quran recited today, with the kinds of minor scribal features specialists routinely examine in any manuscript tradition. Muslims present this correspondence, without overclaiming, as consistent with the account of an early and careful standardisation.',
          bn: 'আরও কিছু অতি প্রাচীন সাক্ষ্য আছে। যেমন ১৯৭২ সালে ইয়েমেনে আবিষ্কৃত সানআ পাণ্ডুলিপি, যা জানা প্রাচীনতম কুরআনি পাণ্ডুলিপিগুলোর অন্যতম এবং গবেষকদের কাছে গুরুত্বপূর্ণ গবেষণার বিষয়। আছে ইস্তাম্বুলের তোপকাপি পাণ্ডুলিপির মতো বড় আকারের প্রাচীন মুসহাফও। সংযত দৃষ্টিতে পড়লে দেখা যায়, এসব নথির পাঠ আজকের তিলাওয়াত করা কুরআনের সাথে ঘনিষ্ঠভাবে মেলে। লেখায় ছোটখাটো যে বৈশিষ্ট্য আছে, তা যেকোনো পাণ্ডুলিপির ধারায় বিশেষজ্ঞরা নিয়মিতই পরীক্ষা করেন। মুসলিমরা বাড়িয়ে না বলে এই মিলকে তুলে ধরেন এভাবে: এটা সেই বর্ণনার সাথে সামঞ্জস্যপূর্ণ যে কুরআনের পাঠ খুব শুরুতেই যত্নের সাথে প্রমিত করা হয়েছিল।',
        },
      },
      {
        heading: { en: 'Mass transmission (tawatur)', bn: 'ব্যাপক বর্ণনাধারা (তাওয়াতুর)' },
        body: {
          en: 'Alongside manuscripts stands a different kind of evidence: continuous mass transmission. In every generation from the first, the full Quran has been memorised and publicly recited by very large numbers of people across dispersed regions, each learning from many teachers. Scholars call this tawatur — transmission so broad and independent that coordinated error or alteration becomes implausible. It is the same everyday logic by which we trust widely and independently transmitted facts, applied to a recited text that communities have openly checked against one another for fourteen centuries.',
          bn: 'পাণ্ডুলিপির পাশাপাশি আছে আরেক ধরনের প্রমাণ: অবিচ্ছিন্ন ব্যাপক বর্ণনাধারা। প্রথম প্রজন্ম থেকে প্রতিটি প্রজন্মে দূর-দূরান্তের নানা অঞ্চলে অগণিত মানুষ পুরো কুরআন মুখস্থ করেছেন, প্রকাশ্যে তিলাওয়াত করেছেন, আর প্রত্যেকে শিখেছেন বহু শিক্ষকের কাছ থেকে। আলিমগণ একে বলেন তাওয়াতুর: এমন ব্যাপক ও পরস্পর-নিরপেক্ষ বর্ণনা, যেখানে সবাই মিলে একই ভুল করা বা পাঠ বদলে ফেলা অবিশ্বাস্য হয়ে দাঁড়ায়। বহু মানুষের কাছ থেকে আলাদা আলাদাভাবে আসা খবর আমরা রোজকার জীবনে যে যুক্তিতে বিশ্বাস করি, এটাও সেই যুক্তি। এখানে তা খাটানো হচ্ছে এমন এক তিলাওয়াতের উপর, যা চৌদ্দ শতাব্দী ধরে মুসলিম সমাজগুলো প্রকাশ্যে একে অন্যের সাথে মিলিয়ে দেখেছে।',
        },
      },
      {
        heading: { en: 'Early non-Muslim attestations of the Prophet ﷺ', bn: 'নবী ﷺ সম্পর্কে প্রাথমিক অমুসলিম সাক্ষ্য' },
        body: {
          en: 'The Prophet Muhammad (peace be upon him) is among the most firmly attested figures of late antiquity. Beyond the rich Muslim sources, seventh-century non-Muslim writings — Greek, Syriac and Armenian texts, some composed within years or decades of his lifetime — mention the Arabian prophet and the rapid rise of his community. Academic historians, whatever their view of his message, affirm his historical existence and his preaching of monotheism in Arabia. Islam’s case rests on the character and content of his message, but it begins from an unusually solid historical footing.',
          bn: 'নবী মুহাম্মাদ (তাঁর প্রতি শান্তি) প্রাচীন যুগের শেষ পর্বের সবচেয়ে মজবুতভাবে প্রমাণিত ব্যক্তিদের একজন। সমৃদ্ধ মুসলিম সূত্রের বাইরেও সপ্তম শতকের অমুসলিম লেখায় আরবের এই নবী আর তাঁর অনুসারীদের দ্রুত উত্থানের কথা আছে। এসব লেখা গ্রিক, সিরিয়াক ও আর্মেনীয় ভাষায়, এর কিছু তাঁর জীবদ্দশার কয়েক বছর বা কয়েক দশকের মধ্যেই রচিত। একাডেমিক ঐতিহাসিকরা তাঁর বার্তা নিয়ে যে মতই রাখুন, তাঁর ঐতিহাসিক অস্তিত্ব এবং আরবে একত্ববাদের দাওয়াত দেওয়ার কথা তাঁরা স্বীকার করেন। ইসলামের মূল যুক্তি অবশ্য তাঁর বার্তার চরিত্র ও বিষয়বস্তুর উপর দাঁড়িয়ে। তবে সেই যুক্তির শুরুটা এক অসাধারণ মজবুত ঐতিহাসিক ভিত্তির উপর।',
        },
      },
    ],
  },
  {
    id: 'signs-in-creation',
    emoji: '🌠',
    kind: 'article',
    title: { en: 'Signs in Creation', bn: 'সৃষ্টির নিদর্শনসমূহ' },
    summary: {
      en: 'A reflection (tadabbur) on order, balance, conscience and the Quran’s invitation to ponder.',
      bn: 'শৃঙ্খলা, ভারসাম্য, বিবেক আর কুরআনের ভেবে দেখার আহ্বান নিয়ে এক তাদাব্বুর।',
    },
    points: [
      {
        heading: { en: 'An invitation to reflect', bn: 'ভেবে দেখার আহ্বান' },
        body: {
          en: 'Again and again the Quran does not demand blind acceptance but invites careful thought about what we already see: "Indeed, in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding — who remember God standing, sitting and lying on their sides, and reflect upon the creation of the heavens and the earth" (Quran 3:190–191). This is offered as reasoned reflection (tadabbur), not as a scientific proof — an invitation to look at the world with an open and thoughtful heart.',
          bn: 'কুরআন বারবার অন্ধভাবে মেনে নিতে বলে না। বরং যা আমরা চোখের সামনেই দেখি, তা নিয়ে গভীরভাবে ভাবতে ডাকে: "নিশ্চয়ই আকাশমণ্ডলী ও পৃথিবীর সৃষ্টিতে এবং রাত ও দিনের পরিবর্তনে জ্ঞানীদের জন্য নিদর্শন রয়েছে—যারা দাঁড়িয়ে, বসে ও শায়িত অবস্থায় আল্লাহকে স্মরণ করে এবং আকাশমণ্ডলী ও পৃথিবীর সৃষ্টি নিয়ে চিন্তা করে" (কুরআন ৩:১৯০–১৯১)। এটা যুক্তি দিয়ে ভাবনা (তাদাব্বুর), কোনো বৈজ্ঞানিক প্রমাণ নয়। খোলা ও চিন্তাশীল মন নিয়ে জগৎটাকে দেখার আমন্ত্রণ।',
        },
      },
      {
        heading: { en: 'Order and balance', bn: 'শৃঙ্খলা ও ভারসাম্য' },
        body: {
          en: 'The cosmos runs with a steadiness we depend on without noticing — a settled order that makes life and understanding possible at all. The Quran points to this poise as something to marvel at: "the sun and the moon [move] by precise calculation… and the sky He raised and imposed the balance" (Quran 55:5–7). Rather than making a technical claim, Islam asks us to notice how much depends on a fine, sustained equilibrium, and to read that reliability as a sign of a wise and deliberate Sustainer rather than sheer accident.',
          bn: 'মহাবিশ্ব এমন এক স্থিরতায় চলে, যার উপর আমরা টেরই না পেয়ে ভরসা করি। এই সুস্থির শৃঙ্খলা না থাকলে জীবন বা কোনো কিছু বোঝা, কিছুই সম্ভব হতো না। কুরআন এই ভারসাম্যকে দেখায় বিস্ময়ের বিষয় হিসেবে: "সূর্য ও চন্দ্র সুনির্দিষ্ট হিসাবে চলে… আর আকাশকে তিনি উঁচু করেছেন এবং স্থাপন করেছেন ভারসাম্য" (কুরআন ৫৫:৫–৭)। ইসলাম এখানে কোনো কারিগরি দাবি করছে না। শুধু খেয়াল করতে বলছে, কত কিছু নির্ভর করে এক সূক্ষ্ম ও টানা ভারসাম্যের উপর। আর এই নির্ভরযোগ্যতাকে নিছক দুর্ঘটনা না ভেবে এক প্রজ্ঞাময় ও সুবিবেচক প্রতিপালকের নিদর্শন হিসেবে দেখতে বলছে।',
        },
      },
      {
        heading: { en: 'Signs within ourselves', bn: 'আমাদের নিজেদের ভেতরের নিদর্শন' },
        body: {
          en: 'The Quran turns our gaze inward as much as outward: "And on the earth are signs for the certain in faith, and in yourselves. Then will you not see?" (Quran 51:20–21). Islam points to the wonder of our own existence and to the moral voice we carry — the inner sense that justice, honesty and compassion are truly good and cruelty truly wrong. This conscience, felt across cultures, is offered as a quiet sign pointing beyond ourselves to the One who placed it there.',
          bn: 'কুরআন আমাদের চোখ যেমন বাইরে ফেরায়, তেমনি ভেতরেও ফেরায়: "আর পৃথিবীতে নিশ্চিত বিশ্বাসীদের জন্য নিদর্শন রয়েছে, এবং তোমাদের নিজেদের মধ্যেও। তবু কি তোমরা দেখবে না?" (কুরআন ৫১:২০–২১)। ইসলাম মনোযোগ টানে আমাদের নিজেদের অস্তিত্বের বিস্ময়ের দিকে, আর আমাদের ভেতরের নৈতিক কণ্ঠের দিকে। ভেতরের সেই বোধ বলে, ন্যায়, সততা আর দয়া সত্যিই ভালো, নিষ্ঠুরতা সত্যিই অন্যায়। সব সংস্কৃতির মানুষ এই বিবেক অনুভব করে। এটা এক নীরব নিদর্শন, যা আমাদের ছাড়িয়ে ইশারা করে তাঁর দিকে, যিনি এটা আমাদের ভেতরে রেখেছেন।',
        },
      },
      {
        heading: { en: 'Reading the signs with humility', bn: 'বিনয়ের সাথে নিদর্শন পাঠ' },
        body: {
          en: 'The Quran promises that honest reflection will keep revealing meaning: "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth" (Quran 41:53). Islam treats this as an ongoing invitation, not a closed argument or a set of specific scientific claims to defend. The signs are read with humility: they do not force belief, but they gently draw an open heart toward gratitude and toward the Source of it all.',
          bn: 'কুরআন প্রতিশ্রুতি দেয়, সৎ মনে ভাবতে থাকলে নতুন নতুন অর্থ খুলতেই থাকবে: "আমি তাদের দেখাব আমার নিদর্শনসমূহ দিগন্তে ও তাদের নিজেদের মধ্যে, যতক্ষণ না তাদের কাছে স্পষ্ট হয় যে এটিই সত্য" (কুরআন ৪১:৫৩)। ইসলাম একে দেখে এক চলমান আমন্ত্রণ হিসেবে। এটা কোনো বন্ধ হয়ে যাওয়া তর্ক নয়, কিংবা আঁকড়ে ধরে রাখার মতো কিছু নির্দিষ্ট বৈজ্ঞানিক দাবির তালিকাও নয়। নিদর্শনগুলো পড়তে হয় বিনয়ের সাথে। এগুলো জোর করে বিশ্বাস করায় না। বরং খোলা মনকে আলতো করে টেনে নেয় শুকরিয়ার দিকে, আর সবকিছুর উৎসের দিকে।',
        },
      },
    ],
  },
  {
    id: 'message-of-all-prophets',
    emoji: '📜',
    kind: 'article',
    title: { en: 'The Message of All Prophets', bn: 'সকল নবীর বার্তা' },
    summary: {
      en: 'One call across every prophet from Adam to Muhammad ﷺ — worship God alone and live justly.',
      bn: 'আদম থেকে মুহাম্মাদ ﷺ পর্যন্ত সব নবীর একই ডাক: কেবল আল্লাহর ইবাদত করো, ন্যায়ের পথে চলো।',
    },
    points: [
      {
        heading: { en: 'One message, many messengers', bn: 'এক বার্তা, বহু রাসুল' },
        body: {
          en: 'Islam teaches that God did not leave any people without guidance, and that every prophet carried the same essential call: "And We certainly sent into every nation a messenger, [saying]: Worship God and avoid false gods" (Quran 16:36). From Adam to the final Prophet, the core was never a new religion each time but one continuous message — turn to the one true God, and reject worshipping anything besides Him.',
          bn: 'ইসলাম শেখায়, আল্লাহ কোনো জাতিকে হিদায়াত ছাড়া ছেড়ে দেননি, আর প্রত্যেক নবী একই মূল আহ্বান নিয়ে এসেছেন: "আর আমি প্রত্যেক জাতির মধ্যে একজন রাসূল পাঠিয়েছি এই [বার্তাসহ]: তোমরা আল্লাহর ইবাদত করো এবং তাগুত (মিথ্যা উপাস্য) বর্জন করো" (কুরআন ১৬:৩৬)। আদম থেকে শেষ নবী পর্যন্ত মূল কথা কখনো প্রতিবার নতুন কোনো ধর্ম ছিল না। ছিল একটিই অবিচ্ছিন্ন বার্তা: এক সত্য আল্লাহর দিকে ফেরো, আর তাঁকে ছাড়া অন্য কিছুর ইবাদত বর্জন করো।',
        },
      },
      {
        heading: { en: 'Worship God alone', bn: 'কেবল আল্লাহর ইবাদত' },
        body: {
          en: 'The Quran makes this unity of purpose explicit: "And We sent not before you any messenger except that We revealed to him that there is no deity except Me, so worship Me" (Quran 21:25). Whatever differences there were in law and practice suited to each time and people, the heart of every prophetic mission — Noah, Abraham, Moses, Jesus and Muhammad (peace be upon them all) — was pure devotion to the one God. Islam presents itself not as breaking from this line but as its completion.',
          bn: 'কুরআন উদ্দেশ্যের এই ঐক্য স্পষ্ট করে বলে দিয়েছে: "আমি তোমার পূর্বে এমন কোনো রাসূল পাঠাইনি, যাঁর প্রতি আমি এই ওহি করিনি যে, আমি ছাড়া কোনো ইলাহ নেই, সুতরাং আমারই ইবাদত করো" (কুরআন ২১:২৫)। প্রতিটি যুগ ও জাতির উপযোগী বিধান আর আমলে যত পার্থক্যই থাকুক, নূহ, ইব্রাহিম, মূসা, ঈসা ও মুহাম্মাদ (তাঁদের সকলের প্রতি শান্তি), প্রত্যেকের নবুয়তের প্রাণ ছিল এক আল্লাহর প্রতি খাঁটি আনুগত্য। ইসলাম নিজেকে এই ধারা থেকে বিচ্ছিন্ন কিছু মনে করে না, বরং এরই পূর্ণতা মনে করে।',
        },
      },
      {
        heading: { en: 'A brotherhood of prophets', bn: 'নবীদের ভ্রাতৃত্ব' },
        body: {
          en: 'Because the message is one, Islam honours all the prophets and asks believers to make no distinction between them (Quran 2:285). The Prophet Muhammad (peace be upon him) described the prophets as brothers of one family with a single faith. This is why loving and respecting Moses, Jesus and the others (peace be upon them) is not outside Islam but part of it — they are seen as fellow bearers of the same light, each confirming those before him.',
          bn: 'বার্তা যেহেতু এক, ইসলাম সব নবীকে সম্মান করে এবং মুমিনদের বলে তাঁদের মধ্যে কোনো পার্থক্য না করতে (কুরআন ২:২৮৫)। নবী মুহাম্মাদ (তাঁর প্রতি শান্তি) নবীদের বলেছেন একই পরিবারের ভাই, যাঁদের দ্বীন এক। তাই মূসা, ঈসা ও অন্যান্য নবী (তাঁদের প্রতি শান্তি)-কে ভালোবাসা ও সম্মান করা ইসলামের বাইরের কিছু নয়, ইসলামেরই অংশ। মুসলিমরা তাঁদের দেখেন একই আলোর বাহক হিসেবে, যাঁদের প্রত্যেকে আগের নবীদের সত্যায়ন করেছেন।',
        },
      },
      {
        heading: { en: 'Meeting the prophets', bn: 'নবীদের সাথে পরিচয়' },
        body: {
          en: 'This shared call comes alive in the individual stories of the prophets — their patience, trust and steadfast devotion to God through hardship. The Prophets module of this app introduces many of them and the one message they carried, so that the continuity described here can be seen in the lives that lived it.',
          bn: 'নবীদের আলাদা আলাদা কাহিনিতে এই অভিন্ন আহ্বান জীবন্ত হয়ে ওঠে: কষ্টের মধ্যেও তাঁদের সবর, তাওয়াক্কুল আর আল্লাহর প্রতি অটল নিষ্ঠায়। এই অ্যাপের নবীগণ (Prophets) অংশে তাঁদের অনেকের পরিচয় আছে, আছে তাঁদের বয়ে আনা সেই এক বার্তার কথাও। সেখানে এখানে বলা ধারাবাহিকতা দেখা যাবে সেই মানুষগুলোর জীবনে, যাঁরা তা নিজেরা যাপন করেছেন।',
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
      bn: 'আন্তরিক প্রশ্নের জবাব ইসলামের অবস্থান থেকে: শ্রদ্ধার সাথে, প্রশ্নকে বিকৃত না করে।',
    },
    qa: [
      {
        q: { en: 'How can I be sure God exists?', bn: 'আমি কীভাবে নিশ্চিত হব যে আল্লাহ আছেন?' },
        a: {
          en: 'Islam does not claim you must reach mathematical certainty before believing. Instead it invites you to weigh several converging pointers together — the fact that the universe began and is finely ordered, the widely shared human sense of a Creator and of objective right and wrong, and reflection on the Quran itself. For many people these build reasonable confidence rather than a forced proof. Sincere reflection, honest questions, and (in the Islamic view) turning to God and asking for guidance are all encouraged as part of the search.',
          bn: 'ইসলাম দাবি করে না যে ঈমান আনার আগে আপনাকে অঙ্কের মতো নিশ্চিত হতে হবে। বরং আপনাকে ডাকে কয়েকটি ইঙ্গিত একসাথে মিলিয়ে দেখতে, যেগুলো একই দিকে নির্দেশ করে: মহাবিশ্বের শুরু আছে, আর তা সূক্ষ্মভাবে সাজানো; স্রষ্টা আছেন এবং ভালো-মন্দ সত্যিই আছে, এমন বোধ প্রায় সব মানুষের মধ্যে; আর খোদ কুরআন নিয়ে চিন্তা। অনেকের কাছে এসব মিলে জোর করে মানানো কোনো প্রমাণ নয়, বরং যুক্তিসংগত আস্থা তৈরি করে। এই খোঁজের পথে আন্তরিক চিন্তা, সৎ প্রশ্ন, আর (ইসলামের দৃষ্টিতে) আল্লাহর দিকে ফিরে হিদায়াত চাওয়া, সবই উৎসাহিত।',
        },
      },
      {
        q: { en: 'Why is there suffering if God is merciful?', bn: 'আল্লাহ দয়াময় হলে দুঃখ-কষ্ট কেন?' },
        a: {
          en: 'This is one of the most sincere and human of questions, and Islam does not brush it aside. It teaches that this life is a temporary test, not the final destination, and that much suffering flows from the freedom that also makes love and goodness real. Other hardships carry wisdom we may not fully perceive, can draw people toward patience, humility and compassion, and — crucially — are set against a just and merciful hereafter in which wrongs are addressed and hardship borne with faith is not wasted. Islam does not claim to answer every particular "why," but holds that suffering does not contradict a God who is both merciful and just.',
          bn: 'এটি মানুষের সবচেয়ে আন্তরিক প্রশ্নগুলোর একটি, আর ইসলাম একে এড়িয়ে যায় না। ইসলাম শেখায়, এই জীবন এক সাময়িক পরীক্ষা, শেষ গন্তব্য নয়। অনেক কষ্ট আসে সেই স্বাধীনতা থেকে, যে স্বাধীনতা আছে বলেই ভালোবাসা ও ভালো কাজ সত্যিকারের হয়। অন্য কিছু কষ্টের পেছনে এমন হিকমত থাকে, যা আমরা পুরোপুরি বুঝতে না-ও পারি। এসব কষ্ট মানুষকে সবর, বিনয় ও মমতার দিকে টেনে নিতে পারে। আর সবচেয়ে বড় কথা, এর ওপারে আছে ন্যায় ও রহমতে ভরা আখিরাত, যেখানে সব অন্যায়ের বিচার হবে, আর ঈমানের সাথে সয়ে যাওয়া কোনো কষ্টই বৃথা যাবে না। ইসলাম দাবি করে না যে প্রতিটি আলাদা "কেন"-র উত্তর তার কাছে আছে। তবে তার কথা হলো, কষ্টের অস্তিত্ব এমন আল্লাহর সাথে সাংঘর্ষিক নয়, যিনি একই সাথে দয়াময় ও ন্যায়বান।',
        },
      },
      {
        q: { en: 'Isn’t religion a cause of conflict?', bn: 'ধর্ম কি সংঘাতের কারণ নয়?' },
        a: {
          en: 'Conflicts have many roots — power, land, resources, identity and injustice — and religion is sometimes invoked in them, honestly or as a pretext. Islam distinguishes between its teachings and the misuse of its name: it commands justice even toward those one dislikes (Quran 5:8), forbids compulsion in faith (Quran 2:256), and upholds the sanctity of innocent life. When people act cruelly in religion’s name, the fair response is to ask whether they are following its actual teachings, not to assume the teachings themselves require cruelty. Islam calls its followers to be a source of peace, mercy and justice.',
          bn: 'সংঘাতের শিকড় অনেক: ক্ষমতা, ভূমি, সম্পদ, পরিচয় আর অবিচার। কখনো কখনো এতে ধর্মের নাম টানা হয়, কেউ সৎভাবে টানে, কেউ অজুহাত হিসেবে। ইসলাম তার শিক্ষা আর তার নামের অপব্যবহারকে আলাদা করে দেখে। ইসলাম অপছন্দের মানুষের প্রতিও ন্যায় করতে বলে (কুরআন ৫:৮), দ্বীনের ব্যাপারে জবরদস্তি নিষেধ করে (কুরআন ২:২৫৬), এবং নিরপরাধ প্রাণকে পবিত্র মনে করে। কেউ ধর্মের নামে নিষ্ঠুরতা করলে ন্যায্য কাজ হলো প্রশ্ন করা: সে কি আসলে ধর্মের শিক্ষা মানছে? ধরে নেওয়া ঠিক নয় যে শিক্ষাটাই নিষ্ঠুরতা চায়। ইসলাম তার অনুসারীদের ডাকে শান্তি, রহমত ও ন্যায়ের উৎস হতে।',
        },
      },
      {
        q: { en: 'Is Islam compatible with reason and science?', bn: 'ইসলাম কি যুক্তি ও বিজ্ঞানের সাথে সঙ্গতিপূর্ণ?' },
        a: {
          en: 'Islam repeatedly urges people to observe the natural world, reflect and reason, and the pursuit of knowledge is highly valued in its tradition. It sees the Quran and the created world as coming from the same source, so genuine truth about nature is not feared. Importantly, Muslims are cautioned against forcing modern scientific claims into scripture or treating the Quran as a science textbook — its purpose is moral and spiritual guidance. On its own terms, science studies how the physical world works, while religion addresses meaning, purpose and morality; Islam regards these as complementary rather than in conflict.',
          bn: 'ইসলাম বারবার মানুষকে প্রকৃতি দেখতে, ভাবতে ও যুক্তি খাটাতে তাগিদ দেয়, আর ইসলামি ঐতিহ্যে জ্ঞানের খোঁজ অত্যন্ত মর্যাদাপূর্ণ। ইসলামের দৃষ্টিতে কুরআন আর সৃষ্টিজগৎ, দুটোই এক উৎস থেকে এসেছে। তাই প্রকৃতি সম্পর্কে সত্যিকারের কোনো সত্যকে ভয় পাওয়ার কিছু নেই। তবে একটা জরুরি সতর্কতাও আছে: আধুনিক বৈজ্ঞানিক দাবিকে জোর করে কুরআনে ঢোকানো, কিংবা কুরআনকে বিজ্ঞানের পাঠ্যবই বানানো ঠিক নয়। কুরআনের উদ্দেশ্য নৈতিক ও আত্মিক হিদায়াত। বিজ্ঞান নিজের পরিসরে খোঁজে বস্তুজগৎ কীভাবে চলে, আর ধর্ম কথা বলে জীবনের অর্থ, উদ্দেশ্য ও নৈতিকতা নিয়ে। ইসলাম এ দুটোকে পরস্পরবিরোধী নয়, বরং একে অপরের পরিপূরক মনে করে।',
        },
      },
      {
        q: { en: 'What about people who never heard the message?', bn: 'যারা কখনো এই বার্তা শোনেনি তাদের কী হবে?' },
        a: {
          en: 'Islam teaches that God is perfectly just and never wrongs anyone, and that people are only held responsible according to what genuinely reached them and their capacity to respond (Quran 17:15 — "We would not punish until We had sent a messenger"). The precise fate of those who never received a clear message is treated by scholars as ultimately in the hands of a just and merciful God, who judges each person fairly and knows their circumstances. Muslims are taught to trust in that justice and mercy rather than to pronounce on individuals.',
          bn: 'ইসলাম শেখায়, আল্লাহ পরিপূর্ণ ন্যায়বান, তিনি কারও প্রতি জুলুম করেন না। মানুষকে দায়ী করা হয় কেবল ততটুকুর জন্য, যা সত্যিই তার কাছে পৌঁছেছে, এবং তার সাড়া দেওয়ার সামর্থ্য অনুযায়ী। কুরআন বলে: "আমি রাসূল না পাঠানো পর্যন্ত শাস্তি দিই না" (কুরআন ১৭:১৫)। যাদের কাছে কখনো স্পষ্ট বার্তা পৌঁছায়নি, তাদের পরিণতি ঠিক কী হবে, আলিমগণ তা শেষ পর্যন্ত ন্যায়বান ও দয়াময় আল্লাহর হাতেই ছেড়ে দেন। তিনি প্রত্যেকের অবস্থা জানেন, প্রত্যেকের প্রতি ন্যায্য বিচার করেন। মুসলিমদের শেখানো হয়, নির্দিষ্ট কোনো মানুষ সম্পর্কে রায় না দিয়ে আল্লাহর সেই ন্যায় ও রহমতের উপর ভরসা রাখতে।',
        },
      },
      {
        q: { en: 'Why does Islam have laws about daily life?', bn: 'ইসলামে দৈনন্দিন জীবন নিয়ে বিধান কেন?' },
        a: {
          en: 'Islam sees faith as touching all of life, not just private worship, so its guidance covers ethics, family, food, finance and community. Rather than restrictions for their own sake, these are understood as a framework meant to protect what matters — life, dignity, family, property and faith — and to cultivate discipline, gratitude and care for others. Many rulings come with stated purposes and allow for genuine need and ease. The aim is a balanced, meaningful life, and the details are studied with qualified scholars.',
          bn: 'ইসলামের দৃষ্টিতে ঈমান শুধু ব্যক্তিগত ইবাদতে সীমাবদ্ধ নয়, পুরো জীবনকে ছুঁয়ে যায়। তাই এর হিদায়াত নৈতিকতা, পরিবার, খাবার, অর্থ-লেনদেন আর সমাজজীবন, সবকিছুর কথা বলে। এসব বিধান নিষেধের জন্য নিষেধ নয়। বরং এগুলো এমন এক কাঠামো, যার কাজ জরুরি জিনিসগুলো রক্ষা করা: জীবন, মর্যাদা, পরিবার, সম্পদ ও দ্বীন। সেই সাথে মানুষের মধ্যে শৃঙ্খলা, শুকরিয়া আর অন্যের প্রতি যত্ন গড়ে তোলা। অনেক বিধানের উদ্দেশ্য স্পষ্ট করে বলা আছে, আর সত্যিকারের প্রয়োজনে ছাড় ও সহজতার সুযোগও আছে। লক্ষ্য একটি ভারসাম্যপূর্ণ ও অর্থবহ জীবন। খুঁটিনাটি শিখতে হয় যোগ্য আলিমদের কাছ থেকে।',
        },
      },
      {
        q: { en: 'What is the goal of da‘wah — isn’t belief personal?', bn: 'দাওয়াহর লক্ষ্য কী? বিশ্বাস কি ব্যক্তিগত বিষয় নয়?' },
        a: {
          en: 'Belief is indeed personal, and Islam insists it cannot be forced: "There shall be no compulsion in religion" (Quran 2:256). Da‘wah, at its best, is simply sharing what one finds true and beneficial, and answering questions honestly — much as people share any conviction they value. Its goal is to inform and invite, respectfully and without coercion, leaving the response entirely to the other person. Sincere da‘wah listens as much as it speaks, respects the dignity of the listener, and never demeans anyone for believing differently.',
          bn: 'বিশ্বাস সত্যিই ব্যক্তিগত, আর ইসলাম জোর দিয়ে বলে যে তা চাপিয়ে দেওয়া যায় না: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। সবচেয়ে সুন্দর রূপে দাওয়াহ মানে শুধু এটুকু: যা নিজের কাছে সত্য ও কল্যাণকর মনে হয়, তা অন্যকে জানানো, আর প্রশ্নের সৎ উত্তর দেওয়া। ঠিক যেমন মানুষ নিজের প্রিয় যেকোনো বিশ্বাসের কথা অন্যকে বলে। এর লক্ষ্য জানানো ও দাওয়াত দেওয়া, শ্রদ্ধার সাথে, কোনো চাপ ছাড়া। সাড়া দেবেন কি না, সেটা পুরোপুরি অপরজনের সিদ্ধান্ত। আন্তরিক দাওয়াহ যতটা বলে, ততটাই শোনে। শ্রোতার মর্যাদার খেয়াল রাখে, আর ভিন্ন বিশ্বাসের জন্য কাউকে কখনো ছোট করে না।',
        },
      },
      {
        q: { en: 'Aren’t all religions basically the same?', bn: 'সব ধর্ম কি মূলত একই নয়?' },
        a: {
          en: 'Religions genuinely share much — a call to compassion, humility and meaning — and Islam honours that common ground and the sincerity of people who seek God. At the same time, they make different claims about the nature of God, the purpose of life and how we are saved, and these differences are real, not trivial. Islam respects the questioner and the shared values, while holding that truth about God matters and that its own account of pure monotheism is the one to weigh carefully.',
          bn: 'ধর্মগুলোর মধ্যে সত্যিই অনেক মিল আছে: দয়া, বিনয় আর জীবনের অর্থের দিকে আহ্বান। ইসলাম এই অভিন্ন ভিত্তিকে সম্মান করে, সম্মান করে আল্লাহকে খোঁজা মানুষদের আন্তরিকতাকেও। তবে একই সাথে, স্রষ্টার স্বরূপ, জীবনের উদ্দেশ্য আর মুক্তির পথ নিয়ে ধর্মগুলোর দাবি আলাদা। এই পার্থক্যগুলো বাস্তব, তুচ্ছ নয়। ইসলাম প্রশ্নকারী আর অভিন্ন মূল্যবোধ, দুটোকেই সম্মান করে। তবে তার কথা হলো, স্রষ্টা সম্পর্কে সত্য জানা গুরুত্বপূর্ণ, আর খাঁটি একত্ববাদ নিয়ে ইসলামের যে বক্তব্য, সেটাই যত্ন করে ভেবে দেখার মতো।',
        },
      },
      {
        q: { en: 'Why does Islam say it is the final and complete religion?', bn: 'ইসলাম কেন বলে যে তা চূড়ান্ত ও পূর্ণাঙ্গ ধর্ম?' },
        a: {
          en: 'Islam teaches that God sent prophets to every people, and that this same guidance was completed and preserved in its final form through Muhammad (peace be upon him): "This day I have perfected for you your religion" (Quran 5:3). "Final" means no further prophet is needed because the core message — worship the one God and live justly — is now complete and safeguarded, not that earlier prophets were false. It is an invitation to a message believed to be intact, offered without compulsion (Quran 2:256).',
          bn: 'ইসলাম শেখায়, আল্লাহ প্রত্যেক জাতির কাছে নবী পাঠিয়েছেন, আর সেই একই হিদায়াত মুহাম্মাদ (তাঁর প্রতি শান্তি)-এর মাধ্যমে চূড়ান্ত রূপে পূর্ণ ও সংরক্ষিত হয়েছে: "আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম" (কুরআন ৫:৩)। "চূড়ান্ত" মানে আর কোনো নবীর দরকার নেই, কারণ মূল বার্তা এখন পূর্ণ ও সুরক্ষিত: এক আল্লাহর ইবাদত করো, ন্যায়ের পথে চলো। এর মানে এই নয় যে আগের নবীরা মিথ্যা ছিলেন। এটা এমন এক বার্তার দিকে দাওয়াত, যা অক্ষত আছে বলে মুসলিমরা বিশ্বাস করেন, আর এ দাওয়াতে কোনো জবরদস্তি নেই (কুরআন ২:২৫৬)।',
        },
      },
      {
        q: { en: 'What does Islam say about earlier scriptures and prophets?', bn: 'পূর্ববর্তী কিতাব ও নবীদের সম্পর্কে ইসলাম কী বলে?' },
        a: {
          en: 'Islam requires belief in all of God’s prophets — including Abraham, Moses and Jesus (peace be upon them) — and honours the original revelations given to them, such as the Torah and the Gospel, as having been true guidance from God. Muslims believe the final revelation, the Quran, confirms the core truth those prophets taught and serves as the preserved standard. This is a stance of deep respect for the prophetic tradition, not rejection of it.',
          bn: 'ইসলামে আল্লাহর সব নবীর প্রতি ঈমান আনা আবশ্যক, যাঁদের মধ্যে আছেন ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি)। তাঁদের উপর নাজিল হওয়া মূল কিতাব, যেমন তাওরাত ও ইনজিল, আল্লাহর পক্ষ থেকে সত্যিকারের হিদায়াত ছিল বলে ইসলাম সেগুলোকে সম্মান করে। মুসলিমরা বিশ্বাস করেন, শেষ ওহি কুরআন সেই নবীদের শেখানো মূল সত্যকে সত্যায়ন করে, আর সংরক্ষিত মানদণ্ড হিসেবে কাজ করে। এটা নবুয়তের ধারার প্রতি গভীর শ্রদ্ধার অবস্থান, তা অস্বীকার করার নয়।',
        },
      },
      {
        q: { en: 'Isn’t faith just blind belief?', bn: 'ঈমান কি নিছক অন্ধ বিশ্বাস নয়?' },
        a: {
          en: 'In Islam faith (iman) is not meant to be blind. The Quran repeatedly appeals to reason, evidence and reflection — inviting people to observe nature, weigh arguments and think ("Do they not reflect…?" recurs throughout). Faith is trust built on grounds one has considered, and it grows through knowledge and sincerity. Certainly it also involves trust beyond what can be fully proven, as most deep human commitments do — but it is invited to begin with honest thinking, not the switching off of the mind.',
          bn: 'ইসলামে ঈমান অন্ধ হওয়ার কথা নয়। কুরআন বারবার যুক্তি, প্রমাণ আর চিন্তার কাছে আবেদন করে। মানুষকে ডাকে প্রকৃতি দেখতে, যুক্তি যাচাই করতে, ভাবতে। "তারা কি চিন্তা করে না?" কথাটা কুরআনে বারবার এসেছে। ঈমান এমন আস্থা, যা ভেবেচিন্তে দেখা ভিত্তির উপর দাঁড়ায়, আর জ্ঞান ও আন্তরিকতার সাথে বাড়ে। হ্যাঁ, এতে এমন আস্থাও থাকে যা পুরোপুরি প্রমাণ করা যায় না, যেমন মানুষের বেশিরভাগ গভীর অঙ্গীকারেই থাকে। কিন্তু এর শুরুটা হওয়ার কথা সৎ চিন্তা দিয়ে, মন বন্ধ করে দিয়ে নয়।',
        },
      },
      {
        q: { en: 'What about free will and the problem of evil?', bn: 'স্বাধীন ইচ্ছা আর মন্দের অস্তিত্বের প্রশ্নে ইসলাম কী বলে?' },
        a: {
          en: 'Islam affirms that God gives human beings real moral choice, and that this life is a meaningful test (Quran 67:2). Much suffering flows from the freedom to do right or wrong, which is what makes goodness meaningful. Other hardships, Islam teaches, carry wisdom we may not fully see, can be a means of growth and mercy, and are set against a just accounting and reward in the hereafter where wrongs are addressed. It does not claim every "why" is answered here, but that evil does not defeat a wise and just God.',
          bn: 'ইসলাম বলে, আল্লাহ মানুষকে সত্যিকারের নৈতিক বেছে নেওয়ার ক্ষমতা দিয়েছেন, আর এই জীবন এক অর্থবহ পরীক্ষা (কুরআন ৬৭:২)। অনেক কষ্ট আসে ভালো বা মন্দ করার এই স্বাধীনতা থেকেই, আর এই স্বাধীনতাই ভালো কাজকে অর্থবহ করে। ইসলাম শেখায়, অন্য কিছু কষ্টের পেছনে এমন হিকমত থাকে যা আমরা পুরোপুরি দেখতে না-ও পারি। সেগুলো মানুষের বেড়ে ওঠার আর রহমতের উপলক্ষ হতে পারে। আর এসবের ওপারে আছে আখিরাতের ন্যায্য হিসাব ও প্রতিদান, যেখানে সব অন্যায়ের বিচার হবে। ইসলাম দাবি করে না যে প্রতিটি "কেন"-র উত্তর এই দুনিয়াতেই মিলবে। তার কথা হলো, মন্দ এক প্রজ্ঞাময় ও ন্যায়বান আল্লাহকে হারাতে পারে না।',
        },
      },
      {
        q: { en: 'Why the Quran and not another book?', bn: 'অন্য কোনো গ্রন্থ নয়, কুরআন কেন?' },
        a: {
          en: 'Muslims point to a combination of features they invite others to examine together: its remarkable preservation in memory and text, its open and unmet literary challenge, its inner consistency across twenty-three years, its rational and moral coherence, and the character of the unlettered man who conveyed it. No single point is treated as a knock-down proof; rather, taken together they are offered as reasonable grounds to read the Quran seriously and judge for oneself.',
          bn: 'মুসলিমরা কয়েকটি বৈশিষ্ট্য একসাথে তুলে ধরেন, আর অন্যদের সেগুলো মিলিয়ে যাচাই করে দেখতে বলেন: স্মৃতিতে ও লেখায় এর অসাধারণ সংরক্ষণ; এর প্রকাশ্য সাহিত্যিক চ্যালেঞ্জ, যার জবাব আজও কেউ দিতে পারেনি; তেইশ বছর জুড়ে এর ভেতরের সামঞ্জস্য; এর যৌক্তিক ও নৈতিক সংগতি; আর যে নিরক্ষর মানুষটি এটি পৌঁছে দিয়েছেন, তাঁর চরিত্র। কোনো একটি বিষয়কেই একাই সব প্রশ্ন মিটিয়ে দেওয়া প্রমাণ বলা হয় না। বরং সব মিলিয়ে এগুলো এক যুক্তিসংগত কারণ: কুরআন মন দিয়ে পড়ুন, তারপর নিজেই বিচার করুন।',
        },
      },
      {
        q: { en: 'Why does God allow disbelief to exist?', bn: 'আল্লাহ অবিশ্বাসকে টিকে থাকতে দেন কেন?' },
        a: {
          en: 'Because, in the Islamic view, God willed a world of genuine choice rather than compelled conformity. Faith has value precisely because it can be freely given: "And say: The truth is from your Lord, so whoever wills — let him believe; and whoever wills — let him disbelieve" (Quran 18:29). The Quran even reminds the Prophet that he cannot force hearts: "Would you then compel the people until they become believers?" (Quran 10:99). God could have created beings without choice, but a freely chosen love of truth is more meaningful than an automatic one. Disbelief existing is thus part of the same freedom that makes belief significant — and judgement on hearts belongs to God alone, not to us.',
          bn: 'কারণ ইসলামের দৃষ্টিতে আল্লাহ চেয়েছেন এমন এক জগৎ, যেখানে মানুষ সত্যিই বেছে নিতে পারে, যেখানে সবাইকে জোর করে এক ছাঁচে ফেলা হয় না। ঈমানের মূল্য ঠিক এখানেই যে তা স্বেচ্ছায় আসে: "বলো: সত্য তোমাদের রবের পক্ষ থেকে; সুতরাং যার ইচ্ছা সে ঈমান আনুক, আর যার ইচ্ছা সে অবিশ্বাস করুক" (কুরআন ১৮:২৯)। কুরআন এমনকি নবীকেও মনে করিয়ে দেয়, তিনি জোর করে কারও অন্তর বদলাতে পারবেন না: "তবে কি তুমি মানুষকে বাধ্য করবে, যতক্ষণ না তারা মুমিন হয়?" (কুরআন ১০:৯৯)। আল্লাহ চাইলে বেছে নেওয়ার ক্ষমতাহীন সৃষ্টি বানাতে পারতেন। কিন্তু নিজে বেছে নেওয়া সত্যের ভালোবাসা যন্ত্রের মতো আপনা-আপনি আসা ভালোবাসার চেয়ে অনেক বেশি অর্থবহ। তাই অবিশ্বাসের অস্তিত্বও সেই একই স্বাধীনতার অংশ, যে স্বাধীনতা ঈমানকে মূল্যবান করে। আর অন্তরের বিচার কেবল আল্লাহর, আমাদের নয়।',
        },
      },
      {
        q: { en: 'Do the good deeds of non-Muslims count?', bn: 'অমুসলিমদের ভালো কাজের কি কোনো মূল্য আছে?' },
        a: {
          en: 'Islam affirms without hesitation that God is perfectly just and that no good is ever ignored by Him: "whoever does an atom’s weight of good will see it" (Quran 99:7). Scholars explain that sincere kindness, honesty and charity are genuinely good whoever performs them, that God rewards good in ways of His choosing in this world and judges every person with complete fairness — taking into account what truly reached them and their sincerity. The fullest reward of the hereafter is tied, in Islamic teaching, to faith in God; yet Muslims are taught to honour goodness wherever they see it, to leave final judgement of individuals entirely to God, and to trust that "your Lord does not wrong anyone" (Quran 18:49).',
          bn: 'ইসলাম দ্বিধাহীনভাবে বলে, আল্লাহ পরিপূর্ণ ন্যায়বান, কোনো ভালো কাজই তাঁর কাছে উপেক্ষিত হয় না: "কেউ অণু পরিমাণ ভালো করলে তা দেখবে" (কুরআন ৯৯:৭)। আলিমগণ ব্যাখ্যা করেন, আন্তরিক দয়া, সততা ও দান যে-ই করুক, তা সত্যিই ভালো। আল্লাহ এই দুনিয়ায় নিজের পছন্দমতো উপায়ে ভালো কাজের প্রতিদান দেন। আর প্রত্যেক মানুষের বিচার করেন পরিপূর্ণ ইনসাফের সাথে: কার কাছে সত্যিই কী পৌঁছেছে, তার আন্তরিকতা কতটা, সব বিবেচনা করে। ইসলামি শিক্ষায় আখিরাতের পূর্ণ প্রতিদান আল্লাহর প্রতি ঈমানের সাথে যুক্ত। তবু মুসলিমদের শেখানো হয়, ভালো কাজ যেখানেই দেখুন, তার কদর করতে; কোনো মানুষের চূড়ান্ত বিচার পুরোপুরি আল্লাহর হাতে ছেড়ে দিতে; আর ভরসা রাখতে যে "তোমার রব কারও প্রতি অবিচার করেন না" (কুরআন ১৮:৪৯)।',
        },
      },
      {
        q: { en: 'Why Arabic — can I only connect with God in Arabic?', bn: 'আরবি কেন? আমি কি কেবল আরবিতেই আল্লাহর সাথে সম্পর্ক গড়তে পারি?' },
        a: {
          en: 'No — God understands every language and every heart, and personal supplication (dua) may be made in any language, at any time. The Quran states that every messenger was sent in his own people’s tongue (Quran 14:4); Arabic is the language the final revelation happened to come in, so it is preserved and recited in its original words rather than only in translation — which is also why one text unites worshippers of every nationality in prayer. Muslims are encouraged to learn the meaning through translations and study in their own language, and new Muslims learn the short Arabic portions of the ritual prayer gradually. The connection of the heart is never restricted to Arabic.',
          bn: 'না। আল্লাহ সব ভাষা বোঝেন, সব অন্তরের কথা জানেন। ব্যক্তিগত দুআ যেকোনো ভাষায়, যেকোনো সময় করা যায়। কুরআন বলে, প্রত্যেক রাসূলকে তাঁর নিজ জাতির ভাষায় পাঠানো হয়েছে (কুরআন ১৪:৪)। শেষ ওহি যে ভাষায় এসেছে, তা আরবি। তাই তা শুধু অনুবাদে নয়, মূল শব্দেই সংরক্ষিত আছে এবং তিলাওয়াত করা হয়। এ কারণেই একই পাঠ সব দেশের মুসল্লিদের নামাজে এক করে দেয়। মুসলিমদের উৎসাহ দেওয়া হয় নিজের ভাষায় অনুবাদ পড়ে ও অধ্যয়ন করে কুরআনের অর্থ জানতে। আর নতুন মুসলিমরা নামাজের ছোট ছোট আরবি অংশগুলো ধীরে ধীরে শেখেন। অন্তরের সম্পর্ক কখনোই আরবিতে সীমাবদ্ধ নয়।',
        },
      },
      {
        q: { en: 'Is Islam fatalistic about effort and ambition?', bn: 'প্রচেষ্টা ও উচ্চাকাঙ্ক্ষা নিয়ে ইসলাম কি নিয়তিবাদী?' },
        a: {
          en: 'No. Belief in divine decree (qadar) is often mistaken for fatalism, but mainstream Islam explicitly rejects using destiny as an excuse for passivity. The Quran ties outcomes to striving — "man will only have that for which he strives" (Quran 53:39) — and a famous prophetic teaching counsels a man to tie his camel first and then trust in God. Work, learning, planning, excellence and honest ambition are praised in Islamic teaching; trust in God (tawakkul) comes after one’s best effort, not instead of it. What qadar adds is peace of mind: having genuinely tried, a believer is freed from crushing anxiety over results that were never in their hands.',
          bn: 'না। তাকদিরে (কদর) বিশ্বাসকে অনেকে নিয়তিবাদ ভেবে ভুল করেন। কিন্তু মূলধারার ইসলাম ভাগ্যের দোহাই দিয়ে হাত গুটিয়ে বসে থাকাকে স্পষ্টভাবে নাকচ করে। কুরআন ফলাফলকে চেষ্টার সাথে জুড়ে দিয়েছে: "মানুষ কেবল তা-ই পায় যার জন্য সে চেষ্টা করে" (কুরআন ৫৩:৩৯)। নবীর এক প্রসিদ্ধ শিক্ষায় এক ব্যক্তিকে বলা হয়েছে, আগে উট বাঁধো, তারপর আল্লাহর উপর ভরসা করো। কাজ, শেখা, পরিকল্পনা, কাজে উৎকর্ষ আর সৎ উচ্চাকাঙ্ক্ষা ইসলামি শিক্ষায় প্রশংসিত। আল্লাহর উপর ভরসা (তাওয়াক্কুল) আসে নিজের সর্বোচ্চ চেষ্টার পরে, চেষ্টার বদলে নয়। তাকদিরে বিশ্বাস যা যোগ করে, তা হলো মনের শান্তি। সত্যিকারের চেষ্টা করার পর মুমিন সেই ফলাফলের দুশ্চিন্তায় পিষ্ট হয় না, যা কখনোই তার হাতে ছিল না।',
        },
      },
      {
        q: { en: 'If Islam is true, why are some Muslims bad examples?', bn: 'ইসলাম যদি সত্য হয়, তাহলে কিছু মুসলিমের আচরণ এত খারাপ কেন?' },
        a: {
          en: 'This is a fair and painful observation, and Islam asks us to separate the message from the messenger. A teaching is not disproved by those who fail to live up to it, any more than medicine is discredited by a patient who ignores the prescription. The Quran holds each soul responsible for itself (Quran 53:38–39) and repeatedly rebukes those who preach good yet neglect it (Quran 2:44). Muslims are not taught that believers are sinless — only that the standard they fall short of is a true one. The honest test of Islam is what it actually teaches and the example of the Prophet (peace be upon him), not the worst behaviour of some who carry its name. It is also worth meeting the many Muslims whose faith makes them kinder, more just and more generous, before judging the whole by a few.',
          bn: 'এটা ন্যায্য এবং বেদনাদায়ক একটি পর্যবেক্ষণ। ইসলাম আমাদের বলে বার্তা আর বার্তার বাহককে আলাদা করে দেখতে। কেউ শিক্ষা অনুযায়ী চলতে না পারলে সেই শিক্ষা ভুল প্রমাণিত হয় না, ঠিক যেমন রোগী ব্যবস্থাপত্র না মানলে ওষুধ অকেজো প্রমাণিত হয় না। কুরআন প্রত্যেককে নিজের কাজের জন্য দায়ী করে (কুরআন ৫৩:৩৮–৩৯), আর যারা অন্যকে ভালো কাজের উপদেশ দেয় অথচ নিজে তা করে না, তাদের বারবার তিরস্কার করে (কুরআন ২:৪৪)। মুসলিমদের শেখানো হয় না যে মুমিনরা নিষ্পাপ। শেখানো হয় শুধু এটুকু: যে মানদণ্ডে তারা পিছিয়ে পড়ে, সেই মানদণ্ড সত্য। ইসলামকে সৎভাবে যাচাই করতে হলে দেখতে হবে ইসলাম আসলে কী শেখায় আর নবী (তাঁর প্রতি শান্তি)-এর আদর্শ কী, ইসলামের নাম বহনকারী কিছু মানুষের সবচেয়ে খারাপ আচরণ নয়। আর অল্প কয়েকজনকে দেখে পুরোটা বিচার করার আগে সেই অসংখ্য মুসলিমের সাথেও পরিচিত হওয়া দরকার, ঈমান যাদের আরও দয়ালু, আরও ন্যায়পরায়ণ, আরও উদার করেছে।',
        },
      },
      {
        q: { en: 'How do I know which religion — or which sect — is correct?', bn: 'কোন ধর্ম, বা কোন ফিরকা, সঠিক, তা আমি কীভাবে বুঝব?' },
        a: {
          en: 'Islam invites you to sincerely seek, to reason, and to ask God for guidance rather than to choose blindly. For weighing between religions, it points to examinable questions: which account of God is coherent and free of contradiction, which scripture is preserved intact, and which message reasonably fits the world and the moral sense we find in ourselves. For questions within Islam, the mainstream Sunni approach is to hold to the Quran and the authentic teaching of the Prophet (peace be upon him) as understood by the broad body of Muslims across the generations, rather than to follow narrow or novel factions. Differences of scholarly opinion on the details of practice have long existed within accepted limits and are studied with qualified teachers. Above all, a sincere seeker is encouraged to keep learning, to ask honest questions, and to pray for truth — trusting that God guides the one who genuinely seeks Him.',
          bn: 'ইসলাম আপনাকে ডাকে অন্ধভাবে বেছে না নিয়ে আন্তরিকভাবে খুঁজতে, যুক্তি দিয়ে ভাবতে, আর আল্লাহর কাছে হিদায়াত চাইতে। ধর্মগুলোর মধ্যে তুলনা করতে ইসলাম এমন কিছু প্রশ্নের দিকে ইঙ্গিত করে, যা যাচাই করা যায়: স্রষ্টা সম্পর্কে কোন বিবরণ সুসংগত ও স্ববিরোধমুক্ত? কোন কিতাব অক্ষতভাবে সংরক্ষিত? কোন বার্তা এই জগৎ আর আমাদের ভেতরের নৈতিক বোধের সাথে যুক্তিসংগতভাবে মেলে? ইসলামের ভেতরের প্রশ্নে মূলধারার সুন্নি পন্থা হলো কুরআন আর নবী (তাঁর প্রতি শান্তি)-এর সহিহ শিক্ষা আঁকড়ে ধরা, যেভাবে যুগ যুগ ধরে মুসলিমদের বৃহত্তর জামাত তা বুঝে এসেছে। সংকীর্ণ বা নতুন গজিয়ে ওঠা দলের অনুসরণ নয়। আমলের খুঁটিনাটিতে আলিমদের মতভেদ বহু আগে থেকেই গ্রহণযোগ্য সীমার মধ্যে আছে, আর তা শিখতে হয় যোগ্য উস্তাদের কাছে। সবচেয়ে বড় কথা, আন্তরিক সত্যসন্ধানীকে উৎসাহ দেওয়া হয় শেখা চালিয়ে যেতে, সৎ প্রশ্ন করতে, আর সত্যের জন্য দুআ করতে। ভরসা রাখতে হবে যে, যে সত্যিই আল্লাহকে খোঁজে, আল্লাহ তাকে পথ দেখান।',
        },
      },
      {
        q: { en: 'Does Islam oppress women?', bn: 'ইসলাম কি নারীকে নিপীড়ন করে?' },
        a: {
          en: 'Islam distinguishes sharply between its teachings and the cultural practices sometimes carried out in its name, which it does not endorse. As teaching, Islam affirms that men and women are equal in their humanity, spiritual worth and accountability before God: "whoever does righteousness, whether male or female, while being a believer — We will surely cause them to live a good life" (Quran 16:97). In its own historical context it established rights that were far-reaching: a woman’s own right to own and inherit property and to keep her wealth after marriage, to consent to her marriage, to seek knowledge (the Prophet said seeking knowledge is an obligation on every Muslim, male and female), to run a business, and to be treated with kindness — "the best of you are the best to their women." Men and women share the same core duties of faith and worship. Islam assigns some complementary roles and responsibilities, which it frames as balanced rather than hierarchical in worth. Where women are genuinely wronged, the fair question is whether the culture or the individual is departing from these teachings — for Islam itself commands honour, justice and gentleness toward women.',
          bn: 'ইসলাম তার শিক্ষা আর তার নামে কখনো কখনো চলা সাংস্কৃতিক প্রথাকে স্পষ্টভাবে আলাদা করে দেখে, আর সেসব প্রথা অনুমোদন করে না। শিক্ষার দিক থেকে ইসলাম বলে, নারী ও পুরুষ মানুষ হিসেবে, আত্মিক মর্যাদায় এবং আল্লাহর কাছে জবাবদিহিতে সমান: "যে সৎকর্ম করে, সে পুরুষ হোক বা নারী, আর সে মুমিন—আমি অবশ্যই তাকে উত্তম জীবন দান করব" (কুরআন ১৬:৯৭)। নিজের ঐতিহাসিক প্রেক্ষাপটে ইসলাম সুদূরপ্রসারী অধিকার প্রতিষ্ঠা করেছিল। নারী নিজে সম্পত্তির মালিক হতে ও উত্তরাধিকার পেতে পারেন, বিয়ের পরও নিজের সম্পদ নিজের কাছে রাখতে পারেন। নিজের বিয়েতে সম্মতি দেওয়ার অধিকার তাঁর। জ্ঞান অর্জনের অধিকারও তাঁর (নবী বলেছেন, জ্ঞান অর্জন প্রত্যেক মুসলিম নারী-পুরুষের উপর ফরজ)। তাঁর ব্যবসা চালানোর অধিকার আছে, আছে সদয় আচরণ পাওয়ার অধিকার: "তোমাদের মধ্যে সেই উত্তম, যে তার নারীদের প্রতি উত্তম।" ঈমান ও ইবাদতের মূল দায়িত্ব নারী-পুরুষ সবার এক। ইসলাম কিছু ভূমিকা ও দায়িত্ব ভাগ করে দিয়েছে, যা একে অন্যের পরিপূরক। ইসলাম এই ভাগকে দেখে ভারসাম্য হিসেবে, মর্যাদায় উঁচু-নিচু হিসেবে নয়। যেখানে নারীরা সত্যিই অন্যায়ের শিকার, সেখানে ন্যায্য প্রশ্ন হলো: সমাজের রীতি বা ব্যক্তি কি এই শিক্ষা থেকে সরে যাচ্ছে? কারণ ইসলাম নিজেই নারীর প্রতি সম্মান, ন্যায় আর কোমলতার নির্দেশ দেয়।',
        },
      },
      {
        q: { en: 'What happens to someone who sincerely never heard of Islam?', bn: 'যে মানুষ সত্যিই কখনো ইসলামের কথা শোনেনি, তার কী হবে?' },
        a: {
          en: 'Islam grounds its answer in the perfect justice of God, who "does not wrong anyone" (Quran 18:49) and does not hold people to account for a message that never genuinely reached them: "We would not punish until We had sent a messenger" (Quran 17:15). Scholars discuss such people under the category of ahl al-fatrah — those living without a clear prophetic message — and the widely held view is that their case rests entirely with God, who judges each person with complete fairness according to their sincerity and the light that actually reached them. A common scholarly position is that God will deal with them justly and mercifully, in a manner He knows best. Muslims are therefore taught not to pronounce the fate of any individual, but to trust that no sincere soul is ever wronged by a God who is both perfectly just and boundlessly merciful.',
          bn: 'ইসলাম এর উত্তর দাঁড় করায় আল্লাহর পরিপূর্ণ ন্যায়ের উপর। তিনি "কারও প্রতি অবিচার করেন না" (কুরআন ১৮:৪৯), আর যে বার্তা সত্যিই কারও কাছে পৌঁছায়নি, তার জন্য তাকে দায়ী করেন না: "আমি রাসূল না পাঠানো পর্যন্ত শাস্তি দিই না" (কুরআন ১৭:১৫)। আলিমগণ এমন মানুষদের নিয়ে আলোচনা করেন আহলুল ফাতরাহ নামে, অর্থাৎ যারা স্পষ্ট কোনো নবুয়তি বার্তা ছাড়াই জীবন কাটিয়েছে। ব্যাপকভাবে প্রচলিত মত হলো, তাদের বিষয়টি পুরোপুরি আল্লাহর হাতে। তিনি প্রত্যেকের বিচার করবেন পরিপূর্ণ ইনসাফের সাথে, তার আন্তরিকতা আর তার কাছে আসলে যতটুকু আলো পৌঁছেছে, সেই অনুযায়ী। আলিমদের একটি প্রচলিত অবস্থান হলো, আল্লাহ তাদের সাথে ন্যায় ও রহমতের আচরণ করবেন, যেভাবে তিনিই সবচেয়ে ভালো জানেন। তাই মুসলিমদের শেখানো হয়, কোনো নির্দিষ্ট মানুষের পরিণতি ঘোষণা না করতে। বরং ভরসা রাখতে যে, যিনি পরিপূর্ণ ন্যায়বান ও অসীম দয়াময়, সেই আল্লাহর কাছে কোনো আন্তরিক মানুষ কখনো অবিচারের শিকার হয় না।',
        },
      },
    ],
  },
  {
    id: 'objections',
    emoji: '🧩',
    kind: 'qa',
    noteKey: 'whyislam_objections_note',
    qaLabel: { en: 'Objection', bn: 'আপত্তি' },
    title: { en: 'Common Objections & Responses', bn: 'সাধারণ আপত্তি ও জবাব' },
    summary: {
      en: 'Sincere objections stated fairly, then answered with the classical, reasoned Islamic response.',
      bn: 'আন্তরিক আপত্তিগুলো আগে ন্যায্যভাবে তুলে ধরা, তারপর ধ্রুপদী ও যুক্তিনির্ভর ইসলামি জবাব।',
    },
    qa: [
      {
        q: { en: 'Isn’t the Quran just a product of its time and culture?', bn: 'কুরআন কি নিছক তার যুগ ও সংস্কৃতির ফসল নয়?' },
        a: {
          en: 'The objection: the Quran arose in seventh-century Arabia, speaks Arabic, and addresses that society’s concerns, so perhaps it merely reflects its human setting. Response: any message must reach a people in their own language and context — "We did not send any messenger except in the language of his people, to make things clear to them" (Quran 14:4). Speaking within a context is what communication requires; it does not by itself show human authorship. What is notable is that the Quran also challenges its own society (for example condemning female infanticide and tribal pride) and states universal principles and claims — its preservation and open literary challenge — whose force is not tied to that culture. The cultural clothing of a message does not settle the truth of its content; the real question is whether its origin is best explained by its milieu alone, and Muslims argue it is not.',
          bn: 'আপত্তি: কুরআন এসেছে সপ্তম শতকের আরবে, এর ভাষা আরবি, আর এটি সেই সমাজের সমস্যা নিয়ে কথা বলে। তাহলে হয়তো এটি তার মানবিক পরিবেশেরই প্রতিফলন মাত্র। জবাব: যেকোনো বার্তাকে মানুষের কাছে পৌঁছাতে হয় তাদের নিজের ভাষায়, তাদের নিজের প্রেক্ষাপটে: "আমি প্রত্যেক রাসূলকে তার সম্প্রদায়ের ভাষাতেই পাঠিয়েছি, যাতে সে তাদের কাছে স্পষ্ট করে দেয়" (কুরআন ১৪:৪)। প্রেক্ষাপটের ভেতরে থেকে কথা বলা যোগাযোগেরই দাবি; শুধু এটা দিয়ে প্রমাণ হয় না যে এর রচয়িতা মানুষ। লক্ষ করার বিষয় হলো, কুরআন নিজের সমাজকেও চ্যালেঞ্জ করেছে, যেমন কন্যাশিশু হত্যা আর গোত্রীয় অহংকারের নিন্দা করেছে। সেই সাথে এমন সর্বজনীন নীতি ও দাবি তুলে ধরেছে, যেমন এর সংরক্ষণ আর প্রকাশ্য সাহিত্যিক চ্যালেঞ্জ, যার জোর ওই সংস্কৃতির সাথে বাঁধা নয়। কোনো বার্তার সাংস্কৃতিক পোশাক দিয়ে তার বিষয়বস্তুর সত্য-মিথ্যা ঠিক হয় না। আসল প্রশ্ন হলো, শুধু পরিবেশ দিয়েই কি এর উৎসের সবচেয়ে ভালো ব্যাখ্যা দেওয়া যায়? মুসলিমদের যুক্তি, যায় না।',
        },
      },
      {
        q: { en: 'How do we know the Quran wasn’t changed over time?', bn: 'আমরা কীভাবে জানি কুরআন সময়ের সাথে বদলে যায়নি?' },
        a: {
          en: 'The objection: old texts often get altered, so how can today’s Quran match the original? Response: the Quran was transmitted in two mutually reinforcing ways — mass memorisation by very large numbers in every generation, and a written text standardised early in the community. These two streams constantly check one another: a copyist’s slip is caught by the memorisers, and a memory lapse by the manuscripts. Early surviving manuscripts correspond closely to the text recited today, and the recited Quran is remarkably uniform across the world, which anyone can verify. For Muslims this fulfils the promise, "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian" (Quran 15:9). The claim is offered as something open to examination rather than mere assertion.',
          bn: 'আপত্তি: পুরোনো লেখা প্রায়ই বদলে যায়। তাহলে আজকের কুরআন যে মূলের সাথে মেলে, তা কীভাবে নিশ্চিত হব? জবাব: কুরআন দুই পথে প্রজন্ম থেকে প্রজন্মে এসেছে, আর এই দুই পথ একে অপরকে মজবুত করে। এক, প্রতি প্রজন্মে অগণিত মানুষের মুখস্থ। দুই, শুরুর দিকেই উম্মাহর মধ্যে প্রমিত করা লিখিত পাঠ। এই দুই ধারা সবসময় একে অন্যকে যাচাই করে। লিপিকারের ভুল ধরে ফেলেন হাফিজরা, আর স্মৃতির ভুল ধরা পড়ে পাণ্ডুলিপিতে। টিকে থাকা প্রাচীন পাণ্ডুলিপি আজকের তিলাওয়াতের সাথে ঘনিষ্ঠভাবে মেলে, আর সারা বিশ্বে তিলাওয়াত করা কুরআন বিস্ময়করভাবে এক, যা যে কেউ যাচাই করে দেখতে পারেন। মুসলিমদের কাছে এটা সেই প্রতিশ্রুতির পূরণ: "নিশ্চয়ই আমিই এই উপদেশ অবতীর্ণ করেছি এবং আমিই এর সংরক্ষক" (কুরআন ১৫:৯)। এই দাবি শুধু মুখের কথা নয়, যাচাই করে দেখার জন্য খোলা।',
        },
      },
      {
        q: { en: 'Why should revelation be needed at all — isn’t reason enough?', bn: 'ওহির দরকারই বা কেন? যুক্তিই কি যথেষ্ট নয়?' },
        a: {
          en: 'The objection: if God gave us reason, why send prophets and scripture? Response: Islam values reason highly and builds much of its case on it — but it holds that reason has limits. Reason can point toward a Creator and broad moral principles, yet thoughtful people reasonably disagree about the specifics of life’s purpose, how to relate to God, and matters of the unseen such as the afterlife. Revelation is understood not as a replacement for reason but as its complement: reliable guidance on what reason alone cannot settle, and confirmation of what it can. Just as sound judgement still benefits from trustworthy expert knowledge, revelation offers an anchor against human bias and uncertainty. Reason and revelation are presented as partners, not rivals.',
          bn: 'আপত্তি: আল্লাহ যদি আমাদের বুদ্ধি দিয়েই থাকেন, তাহলে নবী আর কিতাব পাঠানোর দরকার কী? জবাব: ইসলাম যুক্তিকে খুব মূল্য দেয়, নিজের বক্তব্যের অনেকটাই যুক্তির উপর দাঁড় করায়। তবে ইসলামের মতে যুক্তির একটা সীমা আছে। যুক্তি স্রষ্টার দিকে এবং মোটা দাগের নৈতিক নীতির দিকে ইঙ্গিত দিতে পারে। কিন্তু জীবনের উদ্দেশ্যের খুঁটিনাটি, আল্লাহর সাথে কেমন সম্পর্ক রাখতে হবে, আর আখিরাতের মতো গায়েবের বিষয় নিয়ে চিন্তাশীল মানুষও যুক্তিসংগতভাবেই দ্বিমত করেন। তাই ওহি যুক্তির বিকল্প নয়, বরং পরিপূরক। যুক্তি একা যা মীমাংসা করতে পারে না, ওহি সেখানে নির্ভরযোগ্য পথ দেখায়; আর যা পারে, তা সত্যায়ন করে। সুবিবেচক মানুষও যেমন নির্ভরযোগ্য বিশেষজ্ঞের জ্ঞান থেকে উপকৃত হন, তেমনি ওহি মানুষের পক্ষপাত আর অনিশ্চয়তার মাঝে এক নোঙর হয়ে থাকে। যুক্তি আর ওহি তাই সহযোগী, প্রতিদ্বন্দ্বী নয়।',
        },
      },
      {
        q: { en: 'Isn’t morality possible without religion?', bn: 'ধর্ম ছাড়া কি নৈতিকতা সম্ভব নয়?' },
        a: {
          en: 'The objection: many non-religious people are clearly good, so ethics does not require God. Response: Islam fully agrees that people can behave morally without professing a religion — indeed it teaches that the moral sense (fitrah) is God-given and shared by all humans. The classical argument was never "unbelievers cannot be good." It concerns something deeper: the ultimate grounding of moral obligation — what makes justice truly binding and cruelty truly wrong, beyond personal taste or social convention. Islam holds that objective moral facts are best explained and secured if they rest on a wise, just Creator who is their source. So the real question is not who is capable of acting morally, but what best accounts for morality’s authority.',
          bn: 'আপত্তি: অনেক ধর্মহীন মানুষ স্পষ্টতই ভালো মানুষ, কাজেই নৈতিকতার জন্য আল্লাহর দরকার নেই। জবাব: ইসলাম পুরোপুরি একমত যে কোনো ধর্ম না মেনেও মানুষ নৈতিক আচরণ করতে পারে। বরং ইসলাম শেখায়, নৈতিক বোধ (ফিতরাহ) আল্লাহর দেওয়া, আর তা সব মানুষের মধ্যেই আছে। ধ্রুপদী যুক্তি কখনোই এ কথা বলেনি যে "অবিশ্বাসীরা ভালো হতে পারে না"। প্রশ্নটা আরও গভীর: নৈতিক দায়ের চূড়ান্ত ভিত্তি কী? ব্যক্তিগত রুচি বা সামাজিক রীতির বাইরে কোন জিনিস ন্যায়কে সত্যিই অবশ্যপালনীয় আর নিষ্ঠুরতাকে সত্যিই অন্যায় বানায়? ইসলামের কথা হলো, বস্তুনিষ্ঠ নৈতিক সত্যের সবচেয়ে ভালো ব্যাখ্যা ও সবচেয়ে মজবুত ভিত্তি মেলে, যদি এর উৎস হন এক প্রজ্ঞাময় ও ন্যায়বান স্রষ্টা। তাই আসল প্রশ্ন এটা নয় যে কে নৈতিক আচরণ করতে পারে। আসল প্রশ্ন হলো, নৈতিকতার কর্তৃত্বের সবচেয়ে ভালো ব্যাখ্যা কী।',
        },
      },
      {
        q: { en: 'What about the contradictions people claim to find?', bn: 'মানুষ যেসব স্ববিরোধ খুঁজে পাওয়ার দাবি করে, সেগুলোর কী জবাব?' },
        a: {
          en: 'The objection: critics point to verses that appear to conflict. Response: Muslim scholarship has engaged apparent tensions for centuries with careful tools — the surrounding context, the precise Arabic, the circumstances of revelation, and the way general and specific statements relate. Many claimed contradictions dissolve once a verse is read in its full context rather than in isolation. The Quran itself welcomes this scrutiny: "Then do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction" (Quran 4:82). This is offered as an invitation to study carefully — ideally with qualified scholars — not as a claim that every reader will instantly resolve every verse unaided.',
          bn: 'আপত্তি: সমালোচকরা কিছু আয়াত দেখান, যেগুলো পরস্পরবিরোধী মনে হয়। জবাব: মুসলিম আলিমগণ শত শত বছর ধরে এমন আপাত বিরোধ নিয়ে কাজ করেছেন, যত্নের সাথে কিছু উপায় খাটিয়ে: আগে-পরের প্রসঙ্গ, আরবি শব্দের সূক্ষ্ম অর্থ, নাজিলের প্রেক্ষাপট, আর সাধারণ ও নির্দিষ্ট বক্তব্যের মধ্যে সম্পর্ক। কোনো আয়াত বিচ্ছিন্নভাবে না পড়ে পুরো প্রসঙ্গে পড়লে দাবি করা অনেক বিরোধই মিলিয়ে যায়। কুরআন নিজেই এই যাচাইকে স্বাগত জানায়: "তবে কি তারা কুরআন নিয়ে চিন্তা করে না? যদি তা আল্লাহ ছাড়া অন্য কারও কাছ থেকে হতো, তবে তারা এতে অনেক অসঙ্গতি পেত" (কুরআন ৪:৮২)। এটা মনোযোগ দিয়ে অধ্যয়নের আমন্ত্রণ, সম্ভব হলে যোগ্য আলিমদের কাছে বসে। এ দাবি নয় যে প্রত্যেক পাঠক কারও সাহায্য ছাড়াই সাথে সাথে প্রতিটি আয়াতের সমাধান পেয়ে যাবেন।',
        },
      },
      {
        q: { en: 'Why is Islam’s view of God more coherent than the alternatives?', bn: 'অন্যান্য ধারণার তুলনায় আল্লাহ সম্পর্কে ইসলামের ধারণা কেন বেশি সুসংগত?' },
        a: {
          en: 'The objection: every religion claims its concept of God is best. Response: Islam offers this as its reasoned case, not as a slight against others. Its concept of God is pure, undivided oneness (tawhid): one eternal Being, unlike creation, not composed of parts, not incarnate, worshipped directly without any intermediary — "There is nothing like unto Him" (Quran 42:11), summarised in Surah al-Ikhlas (Quran 112). Islam argues this is maximally simple and free of internal tension, keeping the Absolute unlimited and non-composite, and it holds transcendence and mercy together. It also reasons that a single ultimate source best explains the unified order of the universe (Quran 21:22). Muslims present this coherence for others to weigh, while honouring the sincerity of those who see God differently.',
          bn: 'আপত্তি: প্রত্যেক ধর্মই দাবি করে, স্রষ্টা সম্পর্কে তার ধারণাই শ্রেষ্ঠ। জবাব: ইসলাম এটা তুলে ধরে নিজের যুক্তিনির্ভর বক্তব্য হিসেবে, অন্যদের ছোট করার জন্য নয়। ইসলামে আল্লাহর ধারণা হলো খাঁটি, অবিভক্ত একত্ব (তাওহিদ)। তিনি এক, চিরন্তন সত্তা; সৃষ্টির মতো নন; অংশ দিয়ে গঠিত নন; কোনো দেহে অবতীর্ণ নন; কোনো মধ্যস্থতা ছাড়াই সরাসরি তাঁর ইবাদত করা হয়। "তাঁর সদৃশ কিছুই নেই" (কুরআন ৪২:১১), আর এর সারকথা সূরা আল-ইখলাসে (কুরআন ১১২)। ইসলামের যুক্তি হলো, এই ধারণা সবচেয়ে সরল এবং ভেতরের টানাপোড়েন থেকে মুক্ত। এতে পরম সত্তা থাকেন সীমাহীন ও অখণ্ড, আর তাঁর সৃষ্টির ঊর্ধ্বে থাকা ও তাঁর রহমত, দুটোই একসাথে ধরা থাকে। ইসলাম এ-ও বলে যে মহাবিশ্বের এক ও অভিন্ন শৃঙ্খলার সবচেয়ে ভালো ব্যাখ্যা একক চূড়ান্ত উৎস (কুরআন ২১:২২)। মুসলিমরা এই সংগতি অন্যদের সামনে রাখেন বিচার করে দেখার জন্য, আর যাঁরা স্রষ্টাকে ভিন্নভাবে দেখেন, তাঁদের আন্তরিকতাকেও সম্মান করেন।',
        },
      },
    ],
  },
  {
    id: 'misconceptions',
    emoji: '💡',
    kind: 'qa',
    noteKey: 'whyislam_misconceptions_note',
    qaLabel: { en: 'Misconception', bn: 'ভুল ধারণা' },
    title: { en: 'Common Misconceptions', bn: 'সাধারণ ভুল ধারণা' },
    summary: {
      en: 'Sincere misconceptions clarified fairly and respectfully — with historical nuance, not attacks.',
      bn: 'আন্তরিক ভুল ধারণাগুলোর ন্যায্য ও শ্রদ্ধাপূর্ণ জবাব: ঐতিহাসিক প্রেক্ষাপটসহ, আক্রমণ ছাড়া।',
    },
    qa: [
      {
        q: { en: '“Islam was spread by the sword.”', bn: '"ইসলাম তরবারির জোরে ছড়িয়েছে।"' },
        a: {
          en: 'The image of Islam forced on people at swordpoint is widespread, but it sits uneasily with both the Quran and the historical record. The Quran states plainly, "There shall be no compulsion in religion" (Quran 2:256), and a faith imposed by force would be hollow in a religion that prizes sincere conviction of the heart. Historians note that in many lands Islam became the majority faith only gradually, over centuries — often long after those regions came under Muslim rule — and some of the largest Muslim populations today, such as in Indonesia and much of South and West Africa, were never conquered by Arab armies at all, but came to Islam largely through trade, scholarship and example. Empires of that era, Muslim and non-Muslim alike, did expand by conquest; but a change of ruler is not a change of heart, and Islam locates real faith in free choice, never coercion.',
          bn: 'তরবারির মুখে মানুষকে জোর করে মুসলিম বানানোর ছবিটা খুব প্রচলিত। কিন্তু কুরআন বা ইতিহাস, কোনোটার সাথেই তা খাপ খায় না। কুরআন স্পষ্ট বলে, "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। যে ধর্ম অন্তরের খাঁটি বিশ্বাসকে মূল্য দেয়, সেখানে জোর করে চাপানো বিশ্বাস ফাঁপা ছাড়া কিছু নয়। ঐতিহাসিকরা দেখিয়েছেন, অনেক অঞ্চলে ইসলাম সংখ্যাগরিষ্ঠের ধর্ম হয়েছে ধীরে ধীরে, শত শত বছর ধরে, প্রায়ই সেই অঞ্চল মুসলিম শাসনে আসার অনেক পরে। আর আজকের সবচেয়ে বড় কিছু মুসলিম জনগোষ্ঠী, যেমন ইন্দোনেশিয়া এবং দক্ষিণ ও পশ্চিম আফ্রিকার বড় অংশ, কখনো আরব বাহিনীর হাতে বিজিতই হয়নি। সেখানে মানুষ ইসলামে এসেছে মূলত ব্যবসা-বাণিজ্য, জ্ঞানচর্চা আর মুসলিমদের আদর্শ দেখে। সে যুগের সাম্রাজ্যগুলো, মুসলিম হোক বা অমুসলিম, যুদ্ধজয়ের মাধ্যমেই বিস্তৃত হয়েছে, এ কথা ঠিক। কিন্তু শাসক বদলালেই মন বদলায় না। ইসলামের কাছে প্রকৃত ঈমান মানে স্বাধীনভাবে বেছে নেওয়া, কখনোই জবরদস্তি নয়।',
        },
      },
      {
        q: { en: '“Muslims worship a different god — even a ‘moon god.’”', bn: '"মুসলিমরা ভিন্ন এক ঈশ্বরের, এমনকি এক ‘চাঁদ-দেবতার’ উপাসনা করে।"' },
        a: {
          en: 'Some believe Muslims worship a separate deity, occasionally even a "moon god." In truth, "Allah" is simply the Arabic word for God — the very word Arabic-speaking Jews and Christians use for the God of Abraham. Islam worships the one Creator of Adam, Noah, Abraham, Moses and Jesus (peace be upon them), affirming pure monotheism: "Say, He is Allah, [who is] One" (Quran 112:1). The crescent sometimes seen on mosques is a later cultural emblem, not an object of worship; Islam explicitly forbids worshipping the sun, moon or any created thing: "Do not prostrate to the sun or to the moon, but prostrate to Allah, who created them" (Quran 41:37). The God of Islam is the same one God of the earlier prophets — described without any partner, image or likeness.',
          bn: 'কেউ কেউ মনে করেন, মুসলিমরা আলাদা কোনো দেবতার উপাসনা করে, কেউ কেউ তো এমনকি "চাঁদ-দেবতার" কথাও বলেন। আসলে "আল্লাহ" হলো ঈশ্বর বোঝানোর আরবি শব্দ। আরবিভাষী ইহুদি ও খ্রিষ্টানরাও ইব্রাহিমের ঈশ্বরকে ঠিক এই শব্দেই ডাকেন। ইসলাম আদম, নূহ, ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি)-এর সেই এক স্রষ্টারই ইবাদত করে, আর খাঁটি একত্ববাদের ঘোষণা দেয়: "বলো, তিনিই আল্লাহ, এক" (কুরআন ১১২:১)। কোনো কোনো মসজিদে যে অর্ধচন্দ্র দেখা যায়, তা পরবর্তীকালের একটি সাংস্কৃতিক প্রতীক মাত্র, উপাসনার বস্তু নয়। ইসলাম সূর্য, চাঁদ বা যেকোনো সৃষ্ট বস্তুর উপাসনা স্পষ্টভাবে নিষেধ করে: "সূর্য ও চাঁদকে সিজদা কোরো না, বরং সিজদা করো আল্লাহকে, যিনি এদের সৃষ্টি করেছেন" (কুরআন ৪১:৩৭)। ইসলামের আল্লাহ আগের নবীদেরই সেই এক ও অদ্বিতীয় স্রষ্টা, যাঁর কোনো শরিক নেই, কোনো প্রতিমা নেই, কোনো সদৃশ নেই।',
        },
      },
      {
        q: { en: '“Islam is anti-science and hostile to reason.”', bn: '"ইসলাম বিজ্ঞানবিরোধী ও যুক্তির প্রতি বৈরী।"' },
        a: {
          en: 'Islam is sometimes imagined as opposed to reason and science, yet its scripture repeatedly urges observation and thought, and its history tells a different story. The Quran calls people again and again to reflect on the natural world, and the early Muslim world became a major centre of learning — advancing mathematics, medicine, astronomy and philosophy, and preserving and building upon the knowledge of earlier peoples, in a period often described as a golden age of scholarship. Muslims are cautioned only against two things: treating scripture as a science textbook, and imagining that describing how the world works removes the deeper question of why it exists at all. Islam sees the book of revelation and the book of nature as coming from the same Author, so honest inquiry is welcomed rather than feared.',
          bn: 'অনেকে ভাবেন ইসলাম যুক্তি ও বিজ্ঞানের বিরোধী। অথচ এর কিতাব বারবার পর্যবেক্ষণ ও চিন্তার তাগিদ দেয়, আর এর ইতিহাসও বলে ভিন্ন কথা। কুরআন বারবার মানুষকে প্রকৃতি নিয়ে ভাবতে ডাকে। আর প্রথম যুগের মুসলিম বিশ্ব হয়ে উঠেছিল জ্ঞানচর্চার এক বড় কেন্দ্র। গণিত, চিকিৎসা, জ্যোতির্বিজ্ঞান ও দর্শনে সেখানে অগ্রগতি হয়েছে; আগের জাতিগুলোর জ্ঞান সংরক্ষিত হয়েছে, তার উপর নতুন জ্ঞান গড়ে উঠেছে। এই সময়টাকে প্রায়ই জ্ঞানচর্চার স্বর্ণযুগ বলা হয়। মুসলিমদের সতর্ক করা হয় শুধু দুটি বিষয়ে। এক, কুরআনকে বিজ্ঞানের পাঠ্যবই মনে করা। দুই, এই ভাবা যে জগৎ কীভাবে চলে তা ব্যাখ্যা করলেই জগৎ কেন আছে, সেই গভীর প্রশ্নটা মিটে যায়। ইসলামের দৃষ্টিতে ওহির কিতাব আর প্রকৃতির কিতাব, দুটোরই রচয়িতা এক। তাই সৎ অনুসন্ধানকে ইসলাম ভয় পায় না, স্বাগত জানায়।',
        },
      },
      {
        q: { en: '“Jihad just means holy war.”', bn: '"জিহাদ মানেই ধর্মযুদ্ধ।"' },
        a: {
          en: 'In popular usage "jihad" is often equated with "holy war," but the Arabic word simply means striving or struggle in the path of God, and its meaning is far broader. It includes the daily inner struggle against one’s own selfishness and wrongdoing — which the tradition stresses as the most important struggle of all — as well as striving through knowledge, patience, charity and just, truthful speech. It does encompass the ethics of legitimate self-defence, but hedged about with strict limits: non-combatants, women, children and the elderly are protected, even crops and trees are not to be needlessly destroyed, treaties must be honoured, and aggression is forbidden — "and do not transgress. Indeed, Allah does not like transgressors" (Quran 2:190). Reducing jihad to "holy war" — still less to terrorism, which Islam condemns — misses both the word’s primary spiritual meaning and the restraint its ethics demand.',
          bn: 'সাধারণ কথাবার্তায় "জিহাদ"-কে প্রায়ই "ধর্মযুদ্ধ" বলে ধরে নেওয়া হয়। কিন্তু আরবি শব্দটির অর্থ আল্লাহর পথে চেষ্টা বা সংগ্রাম, আর এর পরিধি অনেক বড়। এর মধ্যে আছে নিজের স্বার্থপরতা ও গুনাহের বিরুদ্ধে প্রতিদিনের ভেতরের লড়াই, যাকে ইসলামি ঐতিহ্য সবচেয়ে গুরুত্বপূর্ণ সংগ্রাম বলে জোর দেয়। আছে জ্ঞান, সবর, দান আর ন্যায্য ও সত্য কথার মাধ্যমে চেষ্টা। বৈধ আত্মরক্ষার নীতিও এর অন্তর্ভুক্ত, তবে কঠোর সীমার মধ্যে। যুদ্ধে অংশ নেয় না এমন মানুষ, নারী, শিশু ও বৃদ্ধরা নিরাপদ। এমনকি ফসল ও গাছপালাও অকারণে নষ্ট করা যাবে না। চুক্তি রক্ষা করতে হবে, আর আগ্রাসন নিষিদ্ধ: "এবং সীমা লঙ্ঘন কোরো না। নিশ্চয়ই আল্লাহ সীমালঙ্ঘনকারীদের পছন্দ করেন না" (কুরআন ২:১৯০)। জিহাদকে শুধু "ধর্মযুদ্ধ" বলে ছোট করে ফেললে শব্দটির মূল আত্মিক অর্থ হারিয়ে যায়, হারিয়ে যায় এর নীতিমালা যে সংযম দাবি করে, সেটাও। আর একে সন্ত্রাসের সাথে মেলানো তো আরও বড় ভুল, কারণ ইসলাম সন্ত্রাসের নিন্দা করে।',
        },
      },
      {
        q: { en: '“Islam is a monolithic, foreign religion.”', bn: '"ইসলাম এক ছাঁচে ঢালা একটি বিদেশি ধর্ম।"' },
        a: {
          en: 'Islam is sometimes pictured as a single uniform bloc, or as belonging to one region or people. In reality Muslims are extraordinarily diverse — the large majority are not Arab — and the faith is lived across almost every nation, language and culture on earth, from West Africa to Southeast Asia. Within an agreed core of belief there has always been a rich internal tradition of scholarship and reasoned difference over the details of practice, studied with qualified teachers. And far from being foreign to any place, Islam teaches that it is the original message of all the prophets from Adam onward, addressed to all people: "And We have not sent you except as a mercy to the worlds" (Quran 21:107). It is best understood not as one culture’s possession but as a universal message that many cultures have made their own.',
          bn: 'অনেকে ইসলামকে ভাবেন এক ছাঁচে ঢালা একটি গোষ্ঠী, কিংবা কোনো এক অঞ্চল বা এক জাতির ধর্ম। বাস্তবে মুসলিমরা অসাধারণ রকম বৈচিত্র্যময়, তাঁদের বেশিরভাগই আরব নন। পশ্চিম আফ্রিকা থেকে দক্ষিণ-পূর্ব এশিয়া পর্যন্ত পৃথিবীর প্রায় প্রতিটি দেশ, ভাষা ও সংস্কৃতির মানুষ এই দ্বীন মেনে চলে। আকিদার সর্বসম্মত মূল বিষয়গুলোর ভেতরে থেকেও আমলের খুঁটিনাটিতে জ্ঞানচর্চা ও যুক্তিনির্ভর মতভেদের এক সমৃদ্ধ ঐতিহ্য সবসময়ই ছিল, যা যোগ্য উস্তাদের কাছে শিখতে হয়। আর কোনো দেশের কাছেই ইসলাম বিদেশি নয়। ইসলাম শেখায়, এটি আদম থেকে শুরু করে সব নবীর মূল বার্তা, যা সব মানুষের জন্য: "আমি আপনাকে কেবল বিশ্বজগতের জন্য রহমতরূপেই পাঠিয়েছি" (কুরআন ২১:১০৭)। তাই ইসলামকে কোনো এক সংস্কৃতির সম্পত্তি না ভেবে এমন এক সর্বজনীন বার্তা হিসেবে বোঝাই ঠিক, যাকে বহু সংস্কৃতি আপন করে নিয়েছে।',
        },
      },
    ],
  },
  {
    id: 'comparative',
    emoji: '🪟',
    kind: 'article',
    noteKey: 'whyislam_comparative_note',
    title: { en: 'Comparative Theology (respectful)', bn: 'তুলনামূলক ধর্মতত্ত্ব (শ্রদ্ধাপূর্ণ)' },
    summary: {
      en: 'What Islam affirms about God, prophets and scripture — and its reasoning — set beside broad alternatives, respectfully.',
      bn: 'আল্লাহ, নবী ও কিতাব সম্পর্কে ইসলাম কী বলে এবং কেন বলে, তা প্রধান বিকল্প ধারণাগুলোর পাশে রেখে শ্রদ্ধার সাথে তুলে ধরা।',
    },
    points: [
      {
        heading: { en: 'The nature of God', bn: 'ঈশ্বরের স্বরূপ' },
        body: {
          en: 'Islam affirms strict oneness: God is one, without partner, parts or incarnation, and is worshipped directly with no intermediary. Its reasoning is that this preserves God’s uniqueness and transcendence most fully — "There is nothing like unto Him" (Quran 42:11). Many traditions share belief in a single God, which Islam recognises as valuable common ground; its distinctive emphasis is that oneness remains completely undivided and that devotion is offered to God alone.',
          bn: 'ইসলাম কঠোরভাবে একত্বে বিশ্বাস করে: আল্লাহ এক; তাঁর কোনো শরিক নেই, তিনি অংশে বিভক্ত নন, কোনো দেহে অবতীর্ণ হন না; আর কোনো মধ্যস্থতা ছাড়াই সরাসরি তাঁর ইবাদত করা হয়। ইসলামের যুক্তি হলো, এভাবেই আল্লাহর অনন্যতা ও সৃষ্টির ঊর্ধ্বে থাকা সবচেয়ে পূর্ণভাবে রক্ষা পায়: "তাঁর সদৃশ কিছুই নেই" (কুরআন ৪২:১১)। অনেক ধর্মীয় ঐতিহ্যই এক স্রষ্টায় বিশ্বাস করে, আর ইসলাম একে মূল্যবান অভিন্ন ভিত্তি হিসেবে স্বীকার করে। ইসলামের বিশেষ জোর হলো, এই একত্ব পুরোপুরি অবিভক্ত, আর ইবাদত কেবল আল্লাহরই প্রাপ্য।',
        },
      },
      {
        heading: { en: 'The line of prophets', bn: 'নবীদের ধারা' },
        body: {
          en: 'Islam affirms a single, continuous chain of prophets carrying one essential message, and it honours figures also revered in Jewish and Christian tradition — Abraham, Moses and Jesus (peace be upon them). Its reasoning is that this unifies human religious history under one purpose and presents Islam as a continuation and completion rather than a break. On this basis the Quran invites shared principles: "Come to a word that is equitable between us and you" (Quran 3:64).',
          bn: 'ইসলামের বিশ্বাস, নবীদের একটিই অবিচ্ছিন্ন ধারা আছে, যাঁরা সবাই একই মূল বার্তা বহন করেছেন। ইহুদি ও খ্রিষ্টান ঐতিহ্যে যাঁরা শ্রদ্ধেয়, যেমন ইব্রাহিম, মূসা ও ঈসা (তাঁদের প্রতি শান্তি), ইসলাম তাঁদেরও সম্মান করে। ইসলামের যুক্তি হলো, এতে মানুষের পুরো ধর্মীয় ইতিহাস এক উদ্দেশ্যের সূত্রে গাঁথা হয়, আর ইসলাম দাঁড়ায় বিচ্ছেদ হিসেবে নয়, বরং ধারাবাহিকতা ও পূর্ণতা হিসেবে। এই ভিত্তিতেই কুরআন অভিন্ন নীতির দিকে আহ্বান জানায়: "এসো এমন এক কথায় যা আমাদের ও তোমাদের মধ্যে অভিন্ন" (কুরআন ৩:৬৪)।',
        },
      },
      {
        heading: { en: 'Scripture and revelation', bn: 'কিতাব ও ওহি' },
        body: {
          en: 'Islam affirms that God sent guidance repeatedly through history and that the Quran is the final, preserved reference which confirms the truth of what came before it — "confirming that which preceded it and as a criterion over it" (Quran 5:48). Its reasoning is that this accounts for both continuity with earlier faith and the value of a safeguarded final standard that later generations can rely upon directly.',
          bn: 'ইসলাম বিশ্বাস করে, আল্লাহ ইতিহাস জুড়ে বারবার হিদায়াত পাঠিয়েছেন, আর কুরআন হলো সেই চূড়ান্ত ও সংরক্ষিত মানদণ্ড, যা আগের কিতাবগুলোর সত্যকে সত্যায়ন করে: "পূর্ববর্তী কিতাবের সত্যায়নকারী ও তার উপর তত্ত্বাবধায়ক" (কুরআন ৫:৪৮)। ইসলামের যুক্তি হলো, এতে দুটো দিকেরই ব্যাখ্যা মেলে: আগের ঈমানের সাথে ধারাবাহিকতা, আর এমন এক সুরক্ষিত চূড়ান্ত মানদণ্ডের মূল্য, যার উপর পরের প্রজন্মগুলো সরাসরি ভরসা করতে পারে।',
        },
      },
      {
        heading: { en: 'Relationship with God and accountability', bn: 'আল্লাহর সাথে সম্পর্ক ও জবাবদিহিতা' },
        body: {
          en: 'Islam affirms direct accountability to a merciful God: each person is answerable for their own deeds, no one bears inherited guilt, and forgiveness is sought directly through sincere repentance without any required intermediary. Its reasoning is that this keeps both personal responsibility and God’s accessibility fully intact. This is described here as Islam’s own reasoned position, stated factually and without disparaging how others understand these matters.',
          bn: 'ইসলামে মানুষ দয়াময় আল্লাহর কাছে সরাসরি জবাবদিহি করে। প্রত্যেকে নিজের আমলের জন্য দায়ী; কেউ জন্মসূত্রে পাওয়া কোনো গুনাহের বোঝা বয় না; আর ক্ষমা চাইতে হয় সরাসরি, আন্তরিক তওবার মাধ্যমে, কোনো মধ্যস্থতাকারী ছাড়াই। ইসলামের যুক্তি হলো, এতে ব্যক্তির নিজের দায়িত্বও পুরোপুরি বজায় থাকে, আবার আল্লাহর কাছে পৌঁছানোর পথও থাকে সবার জন্য খোলা। এখানে এটি ইসলামের নিজস্ব যুক্তিনির্ভর অবস্থান হিসেবেই তুলে ধরা হলো, তথ্যনিষ্ঠভাবে, অন্যরা এসব বিষয় যেভাবে বোঝেন তা ছোট না করে।',
        },
      },
      {
        heading: { en: 'A note on respect', bn: 'শ্রদ্ধা নিয়ে একটি কথা' },
        body: {
          en: 'These are Islam’s reasoned affirmations, offered for honest comparison of ideas about God — not verdicts about the worth of any people. Islam commands its followers to treat those of other faiths with justice and courtesy (Quran 5:8, 60:8) and to leave belief a free choice (Quran 2:256). Comparing concepts respectfully, and befriending and honouring people across differences, are meant to go together.',
          bn: 'এগুলো ইসলামের যুক্তিনির্ভর বিশ্বাস, যা তুলে ধরা হয়েছে স্রষ্টা সম্পর্কে বিভিন্ন ধারণার সৎ তুলনার জন্য, কোনো মানুষের মূল্য নিয়ে রায় দেওয়ার জন্য নয়। ইসলাম তার অনুসারীদের নির্দেশ দেয় অন্য ধর্মের মানুষের সাথে ন্যায় ও সৌজন্যের আচরণ করতে (কুরআন ৫:৮, ৬০:৮), এবং বিশ্বাসের ব্যাপারটি মানুষের স্বাধীন সিদ্ধান্তে ছেড়ে দিতে (কুরআন ২:২৫৬)। শ্রদ্ধার সাথে ধারণার তুলনা করা, আর মতভেদ সত্ত্বেও মানুষের সাথে বন্ধুত্ব ও সম্মানের সম্পর্ক রাখা, এ দুটো একসাথে চলার কথা।',
        },
      },
    ],
  },
  {
    id: 'dialogue',
    emoji: '🕊️',
    kind: 'article',
    noteKey: 'whyislam_dialogue_note',
    title: { en: 'Principles of Respectful Dialogue (Adab of Da‘wah)', bn: 'শ্রদ্ধাপূর্ণ সংলাপের নীতি (দাওয়াহর আদব)' },
    summary: {
      en: 'How Islam teaches its followers to share and discuss faith — with wisdom, gentleness and no compulsion.',
      bn: 'ইসলাম তার অনুসারীদের কীভাবে ঈমানের কথা অন্যকে জানাতে ও তা নিয়ে আলোচনা করতে শেখায়: প্রজ্ঞা আর কোমলতার সাথে, কোনো জবরদস্তি ছাড়া।',
    },
    points: [
      {
        heading: { en: 'Invite with wisdom and good speech', bn: 'প্রজ্ঞা ও সুন্দর কথায় দাওয়াত' },
        body: {
          en: 'The Quran sets the tone for sharing faith: "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best" (Quran 16:125). Dialogue should be gracious, thoughtful and suited to the listener — persuasion through beauty of character and clarity, never through insult or pressure.',
          bn: 'ঈমানের কথা অন্যকে কীভাবে বলতে হবে, তার সুর কুরআনই বেঁধে দিয়েছে: "তোমার রবের পথে আহ্বান করো প্রজ্ঞা ও সদুপদেশের মাধ্যমে, এবং তাদের সাথে বিতর্ক করো উত্তম পন্থায়" (কুরআন ১৬:১২৫)। আলোচনা হবে ভদ্র, ভেবেচিন্তে, আর শ্রোতার উপযোগী করে। মানুষকে কাছে টানতে হবে সুন্দর চরিত্র আর পরিষ্কার কথা দিয়ে, কখনো অপমান বা চাপ দিয়ে নয়।',
        },
      },
      {
        heading: { en: 'Seek common ground, avoid hostility', bn: 'মিলের জায়গা খুঁজুন, শত্রুতা এড়িয়ে চলুন' },
        body: {
          en: 'When speaking with the People of the Book, the Quran counsels courtesy and shared values: "And do not argue with the People of the Scripture except in a way that is best… and say, We believe in that which was revealed to us and revealed to you; our God and your God is one" (Quran 29:46). Dialogue begins from what is held in common, not from antagonism.',
          bn: 'আহলে কিতাবের সাথে কথা বলার বেলায় কুরআন ভদ্রতা বজায় রাখতে আর দুই পক্ষের অভিন্ন মূল্যবোধের দিকে নজর দিতে বলে: "আহলে কিতাবের সাথে উত্তম পন্থা ছাড়া বিতর্ক করো না… আর বলো, আমরা ঈমান এনেছি আমাদের প্রতি ও তোমাদের প্রতি যা অবতীর্ণ হয়েছে তাতে; আমাদের ইলাহ ও তোমাদের ইলাহ এক" (কুরআন ২৯:৪৬)। আলোচনা শুরু হবে মিলের জায়গা থেকে, বিরোধ থেকে নয়।',
        },
      },
      {
        heading: { en: 'No compulsion — convey, do not coerce', bn: 'জবরদস্তি নয়: পৌঁছে দিন, চাপিয়ে দেবেন না' },
        body: {
          en: 'A core principle is that faith cannot be forced: "There shall be no compulsion in religion" (Quran 2:256). The purpose of da‘wah is only to convey a message clearly and sincerely; the response belongs entirely to the other person and, ultimately, to God. Pressuring, manipulating or shaming anyone contradicts this principle.',
          bn: 'একটি মূল নীতি হলো, ঈমান জোর করে চাপিয়ে দেওয়া যায় না: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। দাওয়াহর কাজ শুধু বার্তাটা পরিষ্কারভাবে, আন্তরিকতার সাথে পৌঁছে দেওয়া। সাড়া দেওয়া না দেওয়া পুরোপুরি সেই মানুষের ব্যাপার, আর শেষ পর্যন্ত আল্লাহর হাতে। কাউকে চাপ দেওয়া, কৌশলে প্রভাবিত করা বা লজ্জায় ফেলা এই নীতির বিরোধী।',
        },
      },
      {
        heading: { en: 'Gentleness, patience and humility', bn: 'কোমলতা, ধৈর্য ও বিনয়' },
        body: {
          en: 'Character carries the message. The Quran reminds the Prophet that his gentleness drew people in: "And by the mercy of Allah you were lenient with them. Had you been rude and harsh-hearted, they would have dispersed from around you" (Quran 3:159). Sincere dialogue listens as much as it speaks, stays patient under disagreement, keeps good manners, and never mocks or belittles anyone for believing differently.',
          bn: 'চরিত্রই বার্তাকে মানুষের কাছে বয়ে নিয়ে যায়। কুরআন নবীকে মনে করিয়ে দেয়, তাঁর কোমলতাই মানুষকে কাছে টেনেছিল: "আল্লাহর রহমতেই তুমি তাদের প্রতি কোমল হয়েছিলে। যদি তুমি রূঢ় ও কঠোরহৃদয় হতে, তবে তারা তোমার আশপাশ থেকে সরে যেত" (কুরআন ৩:১৫৯)। আন্তরিক আলোচনায় মানুষ যতটা বলে, ততটাই শোনে। মতের অমিল হলেও ধৈর্য হারায় না, ভদ্রতা ছাড়ে না। আর ভিন্ন বিশ্বাসের কারণে কাউকে কখনো উপহাস করে না, ছোট করে না।',
        },
      },
    ],
  },
  {
    id: 'stories',
    emoji: '🌟',
    kind: 'article',
    noteKey: 'whyislam_stories_note',
    title: { en: 'Stories of Those Who Embraced Islam', bn: 'যাঁরা ইসলাম গ্রহণ করেছেন তাঁদের কথা' },
    summary: {
      en: 'A general, respectful note on the many people through history who came to Islam after study and reflection.',
      bn: 'ইতিহাস জুড়ে যাঁরা পড়াশোনা আর চিন্তাভাবনার পর ইসলামে এসেছেন, তাঁদের নিয়ে সাধারণ ও শ্রদ্ধাপূর্ণ কিছু কথা।',
    },
    points: [
      {
        heading: { en: 'A long and varied history', bn: 'দীর্ঘ ও বৈচিত্র্যময় ইতিহাস' },
        body: {
          en: 'From the first generation in Makkah to the present day, people of every background — scholars and tradespeople, rulers and travellers, scientists, writers and thinkers — have embraced Islam. Many did so not by upbringing or circumstance but after a period of questioning, reading and honest comparison. Whole societies historically came to Islam gradually, often through the character and dealings of Muslims they encountered as much as through argument.',
          bn: 'মক্কার প্রথম প্রজন্ম থেকে আজ পর্যন্ত সব ধরনের মানুষ ইসলাম গ্রহণ করেছেন: আলিম ও ব্যবসায়ী, শাসক ও পর্যটক, বিজ্ঞানী, লেখক ও চিন্তাবিদ। তাঁদের অনেকে জন্মসূত্রে বা পরিস্থিতির কারণে নয়, বরং প্রশ্ন করে, পড়াশোনা করে আর সৎভাবে তুলনা করে তবেই ইসলামে এসেছেন। ইতিহাসে গোটা সমাজও ধীরে ধীরে ইসলামে এসেছে। প্রায়ই তা যতটা যুক্তিতর্কের কারণে, ততটাই আশপাশের মুসলিমদের চরিত্র আর লেনদেন দেখে।',
        },
      },
      {
        heading: { en: 'What draws people, in their own words', bn: 'মানুষকে কী টানে: তাঁদের নিজেদের কথায়' },
        body: {
          en: 'Those who describe their journeys commonly mention a few recurring things: the clarity and simplicity of tawhid — one God, addressed directly; the Quran’s effect on them as readers; the coherence of Islam’s answers about purpose, morality and the hereafter; and the discipline and warmth of Muslim worship and community. These are general patterns rather than claims about any particular individual, and the accounts are best read first-hand.',
          bn: 'যাঁরা নিজেদের ইসলামে আসার গল্প বলেছেন, তাঁদের কথায় ঘুরেফিরে কয়েকটি বিষয় আসে। তাওহিদের স্বচ্ছতা ও সরলতা: আল্লাহ এক, তাঁকে সরাসরি ডাকা যায়। পাঠক হিসেবে কুরআন তাঁদের মনে যে ছাপ ফেলেছে। জীবনের উদ্দেশ্য, নৈতিকতা ও পরকাল নিয়ে ইসলামের উত্তরগুলোর সংগতি। আর মুসলিমদের ইবাদতের নিয়মানুবর্তিতা ও সমাজের আন্তরিকতা। এগুলো সাধারণ ধারা, কোনো নির্দিষ্ট ব্যক্তির ব্যাপারে দাবি নয়। এসব বিবরণ তাঁদের নিজেদের লেখা থেকে পড়াই সবচেয়ে ভালো।',
        },
      },
      {
        heading: { en: 'Where to read such accounts', bn: 'এমন বিবরণ কোথায় পড়বেন' },
        body: {
          en: 'First-person accounts of embracing Islam — from converts of many nationalities and professions — are published by several of the reputable platforms listed in the Further Study section, such as the da‘wah institutes and new-Muslim support organisations. Reading them directly, in the person’s own words, is more valuable and more reliable than any summary here. Every journey is personal; these stories are shared to inform, never to pressure.',
          bn: 'নানা দেশ ও পেশার নওমুসলিমরা নিজের ভাষায় ইসলাম গ্রহণের অভিজ্ঞতা লিখেছেন। "আরও অধ্যয়ন" অংশে দেওয়া কয়েকটি নির্ভরযোগ্য প্ল্যাটফর্ম, যেমন দাওয়াহ প্রতিষ্ঠান ও নওমুসলিমদের সহায়তাকারী সংস্থাগুলো, এমন বিবরণ প্রকাশ করে। সেগুলো সরাসরি, তাঁদের নিজেদের ভাষায় পড়া এখানকার যেকোনো সারসংক্ষেপের চেয়ে বেশি মূল্যবান ও নির্ভরযোগ্য। প্রত্যেকের পথচলা একান্ত নিজের। এই গল্পগুলো দেওয়া হয়েছে জানানোর জন্য, চাপ দেওয়ার জন্য কখনোই নয়।',
        },
      },
    ],
  },
  {
    id: 'glossary',
    emoji: '📔',
    kind: 'glossary',
    noteKey: 'whyislam_glossary_note',
    title: { en: 'Glossary of Key Terms', bn: 'মূল পরিভাষার শব্দকোষ' },
    summary: {
      en: 'One-line introductions to twenty-three key terms of Islamic belief and practice.',
      bn: 'ইসলামি বিশ্বাস ও আমলের তেইশটি মূল পরিভাষার এক-লাইনের পরিচিতি।',
    },
    terms: [
      { term: 'Tawhid', bnTerm: 'তাওহিদ',
        en: 'The oneness of God — that God alone is Lord, alone is worshipped, and is unique in His names and attributes.',
        bn: 'আল্লাহর একত্ব—একমাত্র তিনিই রব, ইবাদত কেবল তাঁরই প্রাপ্য, আর নিজের নাম ও গুণাবলিতে তিনি অনন্য।' },
      { term: 'Shirk', bnTerm: 'শিরক',
        en: 'Associating partners with God in worship or His unique attributes — the opposite of tawhid.',
        bn: 'ইবাদতে বা আল্লাহর একান্ত গুণাবলিতে কাউকে তাঁর শরিক করা—তাওহিদের ঠিক উল্টো।' },
      { term: 'Iman', bnTerm: 'ঈমান',
        en: 'Faith — conviction of the heart, professed by the tongue and expressed in action.',
        bn: 'ঈমান—অন্তরের দৃঢ় বিশ্বাস, মুখের স্বীকারোক্তি আর আমলে তার প্রকাশ।' },
      { term: 'Islam', bnTerm: 'ইসলাম',
        en: 'Willing submission to the one God — the name of the religion, from the same root as salam (peace).',
        bn: 'এক আল্লাহর কাছে স্বেচ্ছায় আত্মসমর্পণ—এ দ্বীনের নাম, যা সালাম (শান্তি) শব্দের একই মূল থেকে এসেছে।' },
      { term: 'Ihsan', bnTerm: 'ইহসান',
        en: 'Excellence in faith — worshipping God as though you see Him, knowing that He sees you.',
        bn: 'ঈমানের উৎকর্ষ—এমনভাবে আল্লাহর ইবাদত করা যেন আপনি তাঁকে দেখছেন, আর মনে রাখা যে তিনি আপনাকে দেখছেন।' },
      { term: 'Fitrah', bnTerm: 'ফিতরাহ',
        en: 'The innate natural disposition upon which every person is created, inclined to recognise the Creator.',
        bn: 'যে জন্মগত স্বভাব নিয়ে প্রত্যেক মানুষকে সৃষ্টি করা হয়েছে, যা আপনা থেকেই স্রষ্টাকে চিনতে চায়।' },
      { term: 'Wahy', bnTerm: 'ওহি',
        en: 'Divine revelation — God’s communication of guidance to His prophets.',
        bn: 'ঐশী প্রত্যাদেশ—নবীদের কাছে আল্লাহর হিদায়াত প্রেরণ।' },
      { term: 'Nubuwwah', bnTerm: 'নবুয়ত',
        en: 'Prophethood — the office of being chosen by God to receive and convey His guidance.',
        bn: 'নবুয়ত—আল্লাহর হিদায়াত গ্রহণ ও পৌঁছে দিতে তাঁর মনোনীত হওয়ার মর্যাদা।' },
      { term: 'Risalah', bnTerm: 'রিসালাত',
        en: 'Messengership — the mission of conveying God’s revealed message to a people.',
        bn: 'রিসালাত—কোনো জাতির কাছে আল্লাহর নাজিল করা বার্তা পৌঁছে দেওয়ার দায়িত্ব।' },
      { term: 'Qadar', bnTerm: 'কদর',
        en: 'Divine decree — God’s complete knowledge and ordainment of all things, alongside real human choice.',
        bn: 'তাকদির—সব কিছু সম্পর্কে আল্লাহর পূর্ণ জ্ঞান ও নির্ধারণ; তার পাশাপাশি মানুষের নিজের পছন্দ বেছে নেওয়ার সত্যিকারের সুযোগও আছে।' },
      { term: 'Akhirah', bnTerm: 'আখিরাত',
        en: 'The hereafter — the everlasting life after death, with just accounting, reward and recompense.',
        bn: 'পরকাল—মৃত্যুর পরের চিরস্থায়ী জীবন, যেখানে ন্যায্য হিসাব হবে, প্রতিদান ও প্রতিফল মিলবে।' },
      { term: 'Shahada', bnTerm: 'শাহাদাহ',
        en: 'The testimony of faith: there is no god but God, and Muhammad is the Messenger of God.',
        bn: 'ঈমানের সাক্ষ্য: আল্লাহ ছাড়া কোনো উপাস্য নেই, এবং মুহাম্মাদ আল্লাহর রাসুল।' },
      { term: 'Sunnah', bnTerm: 'সুন্নাহ',
        en: 'The teachings, practice and example of the Prophet ﷺ, the lived model of the Quran’s guidance.',
        bn: 'নবী ﷺ-এর শিক্ষা, আমল ও আদর্শ—কুরআনের হিদায়াতের জীবন্ত নমুনা।' },
      { term: 'Ummah', bnTerm: 'উম্মাহ',
        en: 'The worldwide community of Muslims, bound by faith across nations and languages.',
        bn: 'বিশ্বব্যাপী মুসলিম সম্প্রদায়, জাতি ও ভাষার সীমা পেরিয়ে ঈমানে আবদ্ধ।' },
      { term: 'Da‘wah', bnTerm: 'দাওয়াহ',
        en: 'Inviting to God’s way — sharing and explaining Islam with wisdom, good speech and no compulsion.',
        bn: 'আল্লাহর পথে আহ্বান—প্রজ্ঞা আর সুন্দর কথায়, কোনো জবরদস্তি ছাড়া ইসলামের কথা জানানো ও বুঝিয়ে বলা।' },
      { term: 'Halal', bnTerm: 'হালাল',
        en: 'Permissible — that which God has allowed in food, earnings and conduct.',
        bn: 'বৈধ—খাদ্য, উপার্জন ও আচরণে আল্লাহ যা অনুমোদন করেছেন।' },
      { term: 'Haram', bnTerm: 'হারাম',
        en: 'Forbidden — that which God has prohibited, avoided out of obedience and care.',
        bn: 'নিষিদ্ধ—আল্লাহ যা নিষেধ করেছেন; আনুগত্য আর সাবধানতা থেকে মুমিন তা এড়িয়ে চলে।' },
      { term: 'Sabr', bnTerm: 'সবর',
        en: 'Patient perseverance — steadfastness in hardship, in obedience, and against temptation.',
        bn: 'ধৈর্য ও অবিচলতা—বিপদে, আল্লাহর আনুগত্যে আর প্রলোভনের মুখে অটল থাকা।' },
      { term: 'Shukr', bnTerm: 'শুকর',
        en: 'Gratitude — recognising God’s blessings and responding with thanks in heart, word and deed.',
        bn: 'কৃতজ্ঞতা—আল্লাহর নিয়ামত চিনতে পারা, আর অন্তর, মুখ ও কাজ দিয়ে তার শোকর আদায় করা।' },
      { term: 'Tazkiyah', bnTerm: 'তাযকিয়াহ',
        en: 'Purification of the soul — cultivating good character and cleansing the heart of harmful traits.',
        bn: 'আত্মার পরিশুদ্ধি—উত্তম চরিত্র গঠন ও হৃদয়কে ক্ষতিকর স্বভাব থেকে পরিচ্ছন্ন করা।' },
      { term: 'Barakah', bnTerm: 'বরকত',
        en: 'Divine blessing — a God-given increase and benefit in something, often beyond its outward measure.',
        bn: 'আল্লাহর দেওয়া কল্যাণ—কোনো কিছুতে আল্লাহ যে বাড়তি উপকার ও প্রাচুর্য দেন, যা অনেক সময় তার বাহ্যিক পরিমাণকে ছাড়িয়ে যায়।' },
      { term: 'Rizq', bnTerm: 'রিজিক',
        en: 'Provision — all sustenance that God provides, including wealth, food, knowledge and wellbeing.',
        bn: 'রিজিক—আল্লাহ যা কিছু দিয়ে বান্দাকে বাঁচিয়ে রাখেন, তার সবই: সম্পদ, খাবার, জ্ঞান ও সুস্থতা।' },
      { term: 'Amanah', bnTerm: 'আমানত',
        en: 'Trust — a responsibility placed in one’s care, to be honoured faithfully toward God and people.',
        bn: 'আমানত—কারও হাতে সোপর্দ করা দায়িত্ব, যা আল্লাহ ও মানুষের প্রতি বিশ্বস্ততার সাথে রক্ষা করতে হয়।' },
    ],
  },
  {
    id: 'embrace',
    emoji: '🌷',
    kind: 'embrace',
    title: { en: 'How Does Someone Embrace Islam?', bn: 'কেউ কীভাবে ইসলাম গ্রহণ করে?' },
    summary: {
      en: 'A gentle, informational explanation of the Shahada and what becoming a Muslim involves.',
      bn: 'শাহাদাহ কী, আর মুসলিম হওয়া বলতে কী বোঝায়: কোমল ভাষায় তথ্যভিত্তিক একটি ব্যাখ্যা।',
    },
    shahada: {
      arabic: 'لا إله إلا الله محمد رسول الله',
      translit: 'La ilaha illa Allah, Muhammadun rasul Allah',
      en: 'There is no god but God, and Muhammad is the Messenger of God.',
      bn: 'আল্লাহ ছাড়া কোনো উপাস্য নেই, এবং মুহাম্মাদ আল্লাহর রাসুল।',
    },
    points: [
      {
        heading: { en: 'The testimony of faith (Shahada)', bn: 'ঈমানের সাক্ষ্য (শাহাদাহ)' },
        body: {
          en: 'Entering Islam centres on a simple declaration of faith called the Shahada: bearing witness that there is no god but the one God, and that Muhammad is His Messenger. It is a short statement, but it expresses the heart of Islam — pure monotheism and acceptance of the final prophet — and is said with sincere conviction, not merely as words.',
          bn: 'ইসলামে প্রবেশের মূল কথা হলো ঈমানের একটি সহজ ঘোষণা, যার নাম শাহাদাহ। এতে সাক্ষ্য দেওয়া হয় যে এক আল্লাহ ছাড়া কোনো উপাস্য নেই, আর মুহাম্মাদ তাঁর রাসূল। বাক্যটি ছোট, কিন্তু এতেই ইসলামের মর্মকথা: খাঁটি একত্ববাদ আর সর্বশেষ নবীকে মেনে নেওয়া। এটা নিছক মুখের কথা নয়, অন্তরের আন্তরিক বিশ্বাস নিয়ে বলার কথা।',
        },
      },
      {
        heading: { en: 'What it means', bn: 'এর অর্থ' },
        body: {
          en: 'To say the Shahada with understanding is to acknowledge one Creator alone as worthy of worship, and to accept the guidance brought by Muhammad (peace be upon him) as continuing the message of all the prophets. It is less a change of label than a turning of the heart toward God — the beginning of a relationship rather than the end of a checklist.',
          bn: 'বুঝেশুনে শাহাদাহ বলার মানে হলো, এক স্রষ্টাকেই একমাত্র ইবাদতের যোগ্য বলে স্বীকার করা, আর মুহাম্মাদ (তাঁর প্রতি শান্তি)-এর আনা হিদায়াতকে সব নবীর বার্তারই ধারাবাহিকতা হিসেবে মেনে নেওয়া। এটা শুধু পরিচয়ের নাম বদলানো নয়, বরং অন্তরকে আল্লাহর দিকে ফেরানো। এখানে কোনো তালিকা শেষ হয় না, শুরু হয় একটি সম্পর্ক।',
        },
      },
      {
        heading: { en: 'Sincerity matters more than perfection', bn: 'পূর্ণতার চেয়ে আন্তরিকতা বেশি গুরুত্বপূর্ণ' },
        body: {
          en: 'No one is expected to know everything or to practise perfectly from the first day. What matters is sincere conviction and a willingness to learn and grow. Prayer, character and other aspects of practice can be learned step by step, at a humane pace, ideally with the support of a knowledgeable and welcoming community.',
          bn: 'প্রথম দিন থেকেই কেউ সব জানবে বা নিখুঁতভাবে আমল করবে, এমন আশা কেউ করে না। আসল কথা হলো আন্তরিক বিশ্বাস, আর শেখার ও এগিয়ে যাওয়ার আগ্রহ। নামাজ, চরিত্র আর আমলের অন্যান্য দিক ধাপে ধাপে, সহনীয় গতিতে শেখা যায়। সবচেয়ে ভালো হয়, যদি পাশে থাকে জ্ঞানী ও আন্তরিক একটি মুসলিম সমাজ, যারা সাদরে কাছে টেনে নেয়।',
        },
      },
      {
        heading: { en: 'A free and personal choice', bn: 'এক স্বাধীন ও ব্যক্তিগত সিদ্ধান্ত' },
        body: {
          en: 'Islam is clear that faith cannot be forced or rushed: "There shall be no compulsion in religion" (Quran 2:256). This explanation is offered purely for information and reflection. Anyone genuinely exploring these ideas is encouraged to keep learning, ask sincere questions, and consult knowledgeable, trustworthy people — and to decide freely, in their own time.',
          bn: 'ইসলাম স্পষ্ট বলে, ঈমান জোর করে বা তাড়াহুড়ো করে চাপিয়ে দেওয়া যায় না: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। এই ব্যাখ্যা কেবল জানার আর ভাবার জন্য দেওয়া হলো। কেউ যদি সত্যিই এসব নিয়ে ভাবেন, তাঁর প্রতি পরামর্শ: শেখা চালিয়ে যান, মন খুলে প্রশ্ন করুন, জ্ঞানী ও বিশ্বস্ত মানুষের সাথে কথা বলুন। তারপর নিজের সময় নিয়ে, স্বাধীনভাবে সিদ্ধান্ত নিন।',
        },
      },
    ],
  },
  {
    id: 'next-steps',
    emoji: '🚶',
    kind: 'article',
    noteKey: 'whyislam_next_note',
    title: { en: 'Where to Go From Here', bn: 'এখান থেকে কোথায় যাবেন' },
    summary: {
      en: 'Gentle, pressure-free next steps for anyone who would like to keep exploring.',
      bn: 'যাঁরা আরও জানতে চান, তাঁদের জন্য কোনো চাপ ছাড়া, কোমলভাবে পরের কয়েকটি ধাপ।',
    },
    points: [
      {
        heading: { en: 'Keep learning at your own pace', bn: 'নিজের গতিতে শেখা চালিয়ে যান' },
        body: {
          en: 'There is no hurry and no pressure. Faith, in Islam, is a free and personal matter — "There shall be no compulsion in religion" (Quran 2:256). Take whatever time you need to read, reflect and ask questions, and let understanding grow gently rather than all at once.',
          bn: 'কোনো তাড়া নেই, কোনো চাপ নেই। ইসলামে ঈমান একান্ত স্বাধীন ও ব্যক্তিগত বিষয়: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। পড়তে, ভাবতে আর প্রশ্ন করতে যত সময় লাগে, নিন। বোঝাপড়া একবারে নয়, ধীরে ধীরে গড়ে উঠুক।',
        },
      },
      {
        heading: { en: 'Read the Quran — its words and its meaning', bn: 'কুরআন পড়ুন—এর শব্দ ও অর্থ' },
        body: {
          en: 'A natural next step is to read the Quran itself. You can begin with a translation in your own language to meet its message directly, and, if you wish, gradually learn to read the Arabic script over time. This app’s Quran module lets you read word by word with translation, so you can start wherever feels comfortable.',
          bn: 'পরের স্বাভাবিক ধাপ হলো সরাসরি কুরআন পড়া। নিজের ভাষার অনুবাদ দিয়ে শুরু করতে পারেন, তাতে এর বার্তার সাথে সরাসরি পরিচয় হবে। চাইলে সময়ের সাথে ধীরে ধীরে আরবি পড়াও শিখে নিতে পারেন। এই অ্যাপের কুরআন মডিউলে অনুবাদসহ শব্দে শব্দে পড়া যায়, তাই যেখান থেকে স্বস্তি লাগে, সেখান থেকেই শুরু করুন।',
        },
      },
      {
        heading: { en: 'Explore the Prophets and Seerah', bn: 'নবীগণ ও সিরাত সম্পর্কে জানুন' },
        body: {
          en: 'To understand the message, it helps to know the messengers. This app includes a Prophets module on the lives and lessons of the prophets, and a Seerah timeline of the life of Muhammad (peace be upon him). Reading these can bring the ideas in this section to life through real people and events.',
          bn: 'বার্তা বুঝতে হলে বার্তাবাহকদের জানা কাজে দেয়। এই অ্যাপে আছে "নবী ও রাসূলগণ" মডিউল, যেখানে নবীদের জীবন ও শিক্ষার কথা আছে, আর আছে মুহাম্মাদ (তাঁর প্রতি শান্তি)-এর জীবনের সিরাত টাইমলাইন। এগুলো পড়লে এই অংশের কথাগুলো বাস্তব মানুষ ও ঘটনার ভেতর দিয়ে প্রাণ পায়।',
        },
      },
      {
        heading: { en: 'Visit a mosque or meet Muslims', bn: 'মসজিদে যান বা মুসলিমদের সাথে দেখা করুন' },
        body: {
          en: 'Ideas are best met alongside people. Many mosques and Islamic centres warmly welcome visitors and sincere questions, and simply getting to know Muslims in your own community can offer a fuller, kinder picture than reading alone. There is no obligation involved — just an open door if you would like to learn more.',
          bn: 'কোনো ধারণা সবচেয়ে ভালো বোঝা যায় মানুষের সান্নিধ্যে। অনেক মসজিদ ও ইসলামিক সেন্টার অতিথি আর তাঁদের আন্তরিক প্রশ্নকে সাদরে গ্রহণ করে। নিজের এলাকার মুসলিমদের সাথে শুধু পরিচিত হলেও কেবল বই পড়ার চেয়ে আরও পূর্ণ ও কোমল একটি ছবি পাওয়া যায়। এতে কোনো বাধ্যবাধকতা নেই। আরও জানতে চাইলে দরজা খোলা, এটুকুই।',
        },
      },
      {
        heading: { en: 'Ask questions — sincerely and respectfully', bn: 'প্রশ্ন করুন—আন্তরিকভাবে ও শ্রদ্ধার সাথে' },
        body: {
          en: 'Honest questions are welcome, not unwelcome. If something is unclear or troubling, seek it out rather than setting it aside — the Common Questions and Common Objections sections here are a good place to start, and knowledgeable, trustworthy people are glad to help. Sincere seeking, in the Islamic view, is itself part of the path.',
          bn: 'সৎ প্রশ্নে কোনো দোষ নেই, বরং তা স্বাগত। কোনো বিষয় অস্পষ্ট লাগলে বা মনে খটকা জাগালে তা সরিয়ে না রেখে উত্তর খুঁজুন। এখানকার "সাধারণ প্রশ্নাবলি" ও "সাধারণ আপত্তি ও জবাব" অংশ দিয়ে শুরু করা যায়, আর জ্ঞানী ও বিশ্বস্ত মানুষেরা সানন্দে সাহায্য করেন। ইসলামের দৃষ্টিতে আন্তরিকভাবে খোঁজাটাই পথের অংশ।',
        },
      },
      {
        heading: { en: 'Go deeper with Further Study', bn: '"আরও অধ্যয়ন" অংশে আরও গভীরে যান' },
        body: {
          en: 'When you are ready for more, the Further Study section of this module lists reputable, mainstream resources — articles, courses, lectures and Q&A from qualified teachers — where you can explore any topic in greater depth, in your own time and on your own terms.',
          bn: 'আরও জানতে প্রস্তুত হলে এই মডিউলের "আরও অধ্যয়ন" অংশটি দেখুন। সেখানে যোগ্য শিক্ষকদের প্রবন্ধ, কোর্স, বক্তৃতা ও প্রশ্নোত্তরের মতো নির্ভরযোগ্য, মূলধারার উৎসের তালিকা আছে। নিজের সময়ে, নিজের মতো করে যেকোনো বিষয় আরও গভীরে জানতে পারবেন।',
        },
      },
    ],
  },
  /* ── NEW: Misconceptions & Comparative Topics ─────────────────────────── */
  {
    id: 'misconceptions-women',
    emoji: '👩',
    kind: 'article',
    noteKey: 'whyislam_misconceptions_note',
    title: { en: 'Misconceptions: Women in Islam', bn: 'ভুল ধারণা: ইসলামে নারী' },
    summary: {
      en: 'Four common misconceptions about women\'s status, rights and role in Islam — stated fairly, then clarified.',
      bn: 'ইসলামে নারীর মর্যাদা, অধিকার ও ভূমিকা নিয়ে চারটি প্রচলিত ভুল ধারণা: প্রথমে ন্যায্যভাবে তুলে ধরা, তারপর বিষয়টি পরিষ্কার করা।',
    },
    points: [
      {
        heading: { en: '"Islam forbids women from education or work"', bn: '"ইসলাম নারীকে পড়াশোনা বা কাজ করতে দেয় না"' },
        body: {
          en: 'The misconception: women in Islam are confined to domesticity, barred from learning and public life. The clarification: the Prophet (peace be upon him) stated explicitly, "Seeking knowledge is an obligation upon every Muslim" — a hadith applying equally to women and men. Early Islamic history is filled with women scholars; Aisha (may God be pleased with her) was among the foremost scholars of her generation, from whom thousands of hadith were transmitted and to whom senior companions referred their questions. Nothing in the primary sources prohibits women from education, scholarship, running a business, or professional work. Restrictions on women found in various Muslim-majority societies are cultural practices, not Quranic obligations.',
          bn: 'ভুল ধারণা: ইসলামে নারীরা ঘরের চার দেয়ালে বন্দি, পড়াশোনা ও সমাজজীবন থেকে বঞ্চিত। বাস্তবতা: নবী (তাঁর প্রতি শান্তি) স্পষ্ট বলেছেন, "জ্ঞান অন্বেষণ প্রত্যেক মুসলিমের উপর ফরজ"। এই হাদিস নারী-পুরুষ সবার জন্য সমানভাবে প্রযোজ্য। ইসলামের প্রথম যুগের ইতিহাস নারী আলিমে ভরা। আয়িশা (আল্লাহ তাঁর প্রতি সন্তুষ্ট হোন) ছিলেন তাঁর প্রজন্মের শীর্ষ আলিমদের একজন। তাঁর কাছ থেকে হাজার হাজার হাদিস বর্ণিত হয়েছে, আর বড় বড় সাহাবিরাও তাঁর কাছে প্রশ্ন নিয়ে আসতেন। মূল উৎসগুলোর কোথাও নারীকে শিক্ষা, জ্ঞানচর্চা, ব্যবসা বা পেশাগত কাজ থেকে নিষেধ করা হয়নি। বিভিন্ন মুসলিমপ্রধান সমাজে নারীর উপর যেসব বিধিনিষেধ দেখা যায়, সেগুলো সাংস্কৃতিক প্রথা, কুরআনের বিধান নয়।',
        },
      },
      {
        heading: { en: '"The hijab is forced oppression"', bn: '"হিজাব জোর করে চাপানো নিপীড়ন"' },
        body: {
          en: 'The misconception: modesty covering in Islam is an imposition that oppresses women and denies them identity. The clarification: Muslim women who practice hijab overwhelmingly describe it as an expression of faith and identity — a personal choice from conviction, not coercion. Islam teaches that a person\'s worth lies in character and piety, not physical appearance (Quran 49:13), and modesty is an ideal commended to both men and women. The Quran first instructs men to lower their gaze (Quran 24:30) before addressing women\'s dress (Quran 24:31). Compulsion in faith is forbidden (Quran 2:256). Where covering is physically forced upon a woman against her will, that is a cultural or political imposition that Islamic ethics itself does not sanction.',
          bn: 'ভুল ধারণা: ইসলামে শালীন পোশাক নারীর উপর চাপিয়ে দেওয়া একটি বোঝা, যা তাকে দমিয়ে রাখে এবং তার নিজস্ব পরিচয় কেড়ে নেয়। বাস্তবতা: যে মুসলিম নারীরা হিজাব পরেন, তাঁদের বেশিরভাগই একে ঈমান ও নিজের পরিচয়ের প্রকাশ বলে মনে করেন। এটা বিশ্বাস থেকে নেওয়া নিজের সিদ্ধান্ত, জবরদস্তি নয়। ইসলাম শেখায়, মানুষের মূল্য তার চরিত্র ও তাকওয়ায়, চেহারায় নয় (কুরআন ৪৯:১৩)। আর শালীনতা নারী-পুরুষ দুজনের জন্যই প্রশংসনীয় আদর্শ। নারীর পোশাকের কথা বলার আগে (কুরআন ২৪:৩১) কুরআন প্রথমে পুরুষদের দৃষ্টি নত রাখতে বলেছে (কুরআন ২৪:৩০)। ঈমানে জবরদস্তি নিষিদ্ধ (কুরআন ২:২৫৬)। কোথাও যদি কোনো নারীকে তার ইচ্ছার বিরুদ্ধে জোর খাটিয়ে পর্দা করানো হয়, তা সাংস্কৃতিক বা রাজনৈতিক চাপ। ইসলামি নৈতিকতা নিজেই তা সমর্থন করে না।',
        },
      },
      {
        heading: { en: '"Women\'s testimony counts half of a man\'s"', bn: '"নারীর সাক্ষ্য পুরুষের অর্ধেক মাত্র"' },
        body: {
          en: 'The misconception: a Quranic instruction about two female witnesses in one financial contract proves Islam regards women as half as reliable or intelligent as men. The clarification: the verse (Quran 2:282) addresses one specific type of written commercial contract. Classical scholars explain the context as a practical arrangement for a society where women were less frequently involved in certain financial dealings — so that one could remind the other if needed. Elsewhere the Quran uses "witnesses" without gender qualification (Quran 65:2). Women\'s testimony is accepted without restriction in numerous legal contexts; Aisha\'s narrations alone form a large part of the entire hadith corpus. The verse describes a context-specific arrangement, not a statement about women\'s general worth or intellectual capacity.',
          bn: 'ভুল ধারণা: একটি আর্থিক চুক্তিতে দুজন নারী সাক্ষী রাখার যে নির্দেশ কুরআনে আছে, তা প্রমাণ করে যে ইসলাম নারীকে পুরুষের তুলনায় অর্ধেক বিশ্বস্ত বা অর্ধেক বুদ্ধিমান মনে করে। বাস্তবতা: আয়াতটি (কুরআন ২:২৮২) এক বিশেষ ধরনের লিখিত ব্যবসায়িক চুক্তির কথা বলছে। ধ্রুপদী আলিমগণ এর প্রেক্ষাপট এভাবে ব্যাখ্যা করেছেন: সে সমাজে কিছু আর্থিক লেনদেনে নারীরা কম জড়িত থাকতেন, তাই এটি ছিল একটি ব্যবহারিক ব্যবস্থা, যাতে দরকার হলে একজন অন্যজনকে মনে করিয়ে দিতে পারেন। কুরআনের অন্য জায়গায় নারী-পুরুষ উল্লেখ না করেই শুধু "সাক্ষী" বলা হয়েছে (কুরআন ৬৫:২)। বহু আইনি ক্ষেত্রে নারীর সাক্ষ্য কোনো শর্ত ছাড়াই গ্রহণযোগ্য। শুধু আয়িশার বর্ণনাই গোটা হাদিস ভান্ডারের বড় একটি অংশ। আয়াতটি একটি নির্দিষ্ট প্রেক্ষাপটের ব্যবস্থা, নারীর সাধারণ মর্যাদা বা বুদ্ধির ব্যাপারে কোনো রায় নয়।',
        },
      },
      {
        heading: { en: '"Islamic inheritance is unfair to women"', bn: '"ইসলামের উত্তরাধিকার আইন নারীর প্রতি অবিচার করে"' },
        body: {
          en: 'The misconception: because the Quran in many cases gives a daughter half the share of a son, Islam treats women as lesser. The clarification: Islamic inheritance law cannot be read in isolation. A man carries the full financial obligation to maintain his wife and children; a woman has no such mandatory obligation — her inheritance remains entirely her own. When these complementary duties are factored in, scholars note the total financial provision for a woman in an Islamic family system can be greater than her male counterpart\'s once all obligations are calculated. The system is designed as complementary in function, not hierarchical in worth. Muslim scholars continue to discuss how these principles apply in modern contexts where economic roles have changed.',
          bn: 'ভুল ধারণা: কুরআন অনেক ক্ষেত্রে মেয়েকে ছেলের অর্ধেক অংশ দেয়, তাই ইসলাম নারীকে ছোট করে দেখে। বাস্তবতা: ইসলামের উত্তরাধিকার আইনকে আলাদা করে পড়লে চলবে না। স্ত্রী-সন্তানের ভরণপোষণের পুরো আর্থিক দায়িত্ব পুরুষের। নারীর উপর এমন কোনো বাধ্যতামূলক দায় নেই; তার উত্তরাধিকার পুরোটাই তার নিজের। আলিমগণ দেখান, এই পরস্পর-পরিপূরক দায়িত্বগুলো হিসাবে ধরলে এবং সব দায়দেনা মিটিয়ে দেখলে, ইসলামি পারিবারিক ব্যবস্থায় একজন নারীর মোট আর্থিক প্রাপ্তি তার পুরুষ প্রতিপক্ষের চেয়ে বেশিও হতে পারে। ব্যবস্থাটি সাজানো হয়েছে কাজের দিক থেকে একে অপরের পরিপূরক হিসেবে, মর্যাদায় উঁচু-নিচু হিসেবে নয়। অর্থনৈতিক ভূমিকা যেখানে বদলে গেছে, এমন আধুনিক প্রেক্ষাপটে এই নীতিগুলো কীভাবে প্রয়োগ হবে, তা নিয়ে মুসলিম আলিমদের আলোচনা আজও চলছে।',
        },
      },
    ],
  },
  {
    id: 'misconceptions-jihad',
    emoji: '⚔️',
    kind: 'article',
    noteKey: 'whyislam_misconceptions_note',
    title: { en: 'Misconceptions: The Meaning of Jihad', bn: 'ভুল ধারণা: জিহাদের প্রকৃত অর্থ' },
    summary: {
      en: 'What jihad actually means in Islamic teaching — internal, communal and defensive — and what it does not mean.',
      bn: 'ইসলামি শিক্ষায় জিহাদ আসলে কী বোঝায়: অন্তরের সংগ্রাম, সমাজের জন্য সংগ্রাম ও আত্মরক্ষা। আর কী বোঝায় না।',
    },
    points: [
      {
        heading: { en: 'The word "jihad" means striving, not "holy war"', bn: '"জিহাদ" শব্দের অর্থ প্রচেষ্টা, "ধর্মযুদ্ধ" নয়' },
        body: {
          en: 'The Arabic word jihad means earnest striving or exertion toward a good goal. In Islamic literature it encompasses the internal struggle against sin and moral failure (called the "greater jihad" in a widely cited hadith tradition), the effort to be a just and upright person, the work of building a just community, and — in very specific regulated circumstances — lawful defense. The common reduction of jihad to "holy war" represents one narrow historical application while overlooking its broad and primary meanings in Islamic teaching.',
          bn: 'আরবি শব্দ জিহাদের অর্থ কোনো ভালো লক্ষ্যের জন্য আপ্রাণ চেষ্টা বা পরিশ্রম। ইসলামি সাহিত্যে এর মধ্যে পড়ে গুনাহ ও নৈতিক দুর্বলতার বিরুদ্ধে অন্তরের সংগ্রাম (বহুল উদ্ধৃত একটি হাদিসের বর্ণনায় একে বলা হয়েছে "বৃহত্তর জিহাদ"), ন্যায়পরায়ণ ও সৎ মানুষ হওয়ার চেষ্টা, ন্যায়ভিত্তিক সমাজ গড়ার কাজ, আর অত্যন্ত নির্দিষ্ট ও নিয়মে বাঁধা পরিস্থিতিতে বৈধ আত্মরক্ষা। জিহাদকে কেবল "ধর্মযুদ্ধ" বলে ধরে নেওয়ার যে চল, তা ইতিহাসের একটি সংকীর্ণ প্রয়োগকেই সব মনে করে, আর ইসলামি শিক্ষায় এর ব্যাপক ও মূল অর্থগুলো উপেক্ষা করে।',
        },
      },
      {
        heading: { en: 'Islam forbids targeting civilians and aggression', bn: 'ইসলামে বেসামরিক মানুষকে আঘাত করা ও আগ্রাসন নিষিদ্ধ' },
        body: {
          en: 'The Quran places strict limits on any use of force: "Fight in the way of God those who fight you, but do not transgress — indeed, God does not love transgressors" (Quran 2:190). Islamic law forbids killing civilians, destroying crops and places of worship, or harming those who seek peace. Targeting non-combatants is explicitly prohibited in the primary sources. Those who invoke Islam to justify terrorism are condemned by the overwhelming majority of mainstream Muslim scholars worldwide, who affirm that such acts violate the foundational principles of Islamic law. The religion\'s own sources do not support what violent extremists claim in its name.',
          bn: 'কুরআন যেকোনো শক্তি প্রয়োগে কঠোর সীমা বেঁধে দিয়েছে: "আল্লাহর পথে তাদের বিরুদ্ধে লড়াই করো যারা তোমাদের বিরুদ্ধে লড়াই করে, কিন্তু সীমা অতিক্রম করো না—নিশ্চয়ই আল্লাহ সীমা লঙ্ঘনকারীদের ভালোবাসেন না" (কুরআন ২:১৯০)। ইসলামি আইনে বেসামরিক মানুষ হত্যা, ফসল ও উপাসনালয় ধ্বংস, কিংবা যারা শান্তি চায় তাদের ক্ষতি করা নিষিদ্ধ। যারা যুদ্ধে অংশ নেয়নি, তাদের আঘাত করা মূল উৎসগুলোতে সুস্পষ্টভাবে নিষেধ। সন্ত্রাসকে বৈধ করতে যারা ইসলামের নাম ব্যবহার করে, সারা বিশ্বের মূলধারার মুসলিম আলিমদের বিপুল সংখ্যাগরিষ্ঠ অংশ তাদের নিন্দা করেন। তাঁরা দৃঢ়ভাবে বলেন, এসব কাজ ইসলামি আইনের মৌলিক নীতির লঙ্ঘন। সহিংস চরমপন্থীরা ইসলামের নামে যা দাবি করে, ইসলামের নিজের উৎসগুলো তা সমর্থন করে না।',
        },
      },
      {
        heading: { en: 'Defensive military jihad has precise conditions', bn: 'প্রতিরক্ষামূলক সামরিক জিহাদের সুনির্দিষ্ট শর্ত রয়েছে' },
        body: {
          en: 'Classical Islamic scholars set strict conditions for armed defense: it must be authorised by a legitimate authority, pursued only against active combatants, and conducted within clear ethical limits. Extensive rules in classical fiqh (jurisprudence) protect civilians, prisoners and the environment. The early Makkan period — when the Prophet and companions endured severe persecution without fighting back — shows that even grave injustice was met first with patience, migration and dialogue.',
          bn: 'ধ্রুপদী ইসলামি আলিমগণ সশস্ত্র প্রতিরক্ষার জন্য কঠোর শর্ত বেঁধে দিয়েছেন: বৈধ কর্তৃপক্ষের অনুমোদন থাকতে হবে, লড়াই চলবে কেবল সক্রিয় যোদ্ধাদের বিরুদ্ধে, আর তা হবে স্পষ্ট নৈতিক সীমার ভেতরে। ধ্রুপদী ফিকহে (আইনশাস্ত্র) বেসামরিক মানুষ, বন্দি ও পরিবেশ রক্ষায় বিস্তারিত বিধান আছে। মক্কার প্রথম যুগে নবী ও সাহাবিরা ভয়াবহ নির্যাতন সয়েছেন, কিন্তু পাল্টা লড়াই করেননি। এ থেকে বোঝা যায়, গুরুতর অন্যায়ের জবাবেও প্রথমে এসেছে ধৈর্য, হিজরত আর সংলাপ।',
        },
      },
      {
        heading: { en: 'The greater jihad is the inner struggle', bn: 'বৃহত্তর জিহাদ হলো অভ্যন্তরীণ সংগ্রাম' },
        body: {
          en: 'A hadith attributed to the Prophet on returning from a battle spoke of moving from the "lesser jihad" of armed defense to the "greater jihad" — the struggle against one\'s own lower self (nafs). This internal jihad — against arrogance, dishonesty, anger and selfishness — sits at the heart of Islam\'s spiritual tradition. Persisting in worship when it is hard, resisting temptation, standing against injustice with calm words, or working honestly for knowledge — all of this is jihad in the Islamic sense.',
          bn: 'একটি যুদ্ধ থেকে ফেরার সময়ের কথা বলে নবীর নামে বর্ণিত একটি হাদিস: সশস্ত্র প্রতিরক্ষার "ক্ষুদ্রতর জিহাদ" থেকে এবার "বৃহত্তর জিহাদের" দিকে ফেরা, অর্থাৎ নিজের নফসের বিরুদ্ধে সংগ্রাম। অহংকার, অসততা, রাগ ও স্বার্থপরতার বিরুদ্ধে এই অন্তরের জিহাদই ইসলামের আধ্যাত্মিক ঐতিহ্যের কেন্দ্রে। কষ্ট হলেও ইবাদতে লেগে থাকা, প্রলোভন ঠেকানো, শান্ত কথায় অন্যায়ের প্রতিবাদ করা, কিংবা সততার সাথে জ্ঞানের জন্য খাটা: এর সবই ইসলামি অর্থে জিহাদ।',
        },
      },
    ],
  },
  {
    id: 'misconceptions-apostasy-slavery',
    emoji: '🔓',
    kind: 'article',
    noteKey: 'whyislam_misconceptions_note',
    title: { en: 'Misconceptions: Apostasy & Slavery in Islamic History', bn: 'ভুল ধারণা: ধর্মত্যাগ ও ইসলামের ইতিহাসে দাসপ্রথা' },
    summary: {
      en: 'Careful, honest engagement with two frequently raised issues — presented with nuance and mainstream scholarly context.',
      bn: 'বারবার ওঠা দুটি প্রশ্ন নিয়ে সতর্ক ও সৎ আলোচনা, সূক্ষ্ম দিকগুলো আর মূলধারার আলিমদের প্রেক্ষাপটসহ।',
    },
    points: [
      {
        heading: { en: 'Does the Quran prescribe death for leaving Islam?', bn: 'কুরআন কি ইসলাম ছেড়ে যাওয়ার জন্য মৃত্যুদণ্ড নির্ধারণ করে?' },
        body: {
          en: 'This is genuinely contested within Islamic jurisprudence and deserves honest engagement. The Quran itself does not prescribe a worldly death penalty for apostasy; its treatment focuses on spiritual accountability and divine judgment: "Whoever disbelieves in God after having believed… upon them is wrath from God" (Quran 16:106). The verse speaks of divine consequence, not a court sentence. The hadith often cited for a death penalty was understood by many classical scholars in its historical context as addressing treasonous rebellion against the Muslim state — not private change of belief. A respected body of contemporary scholars argues there is no Quranic basis for executing someone solely for peacefully leaving the faith. The foundational Quranic principle stands: "There is no compulsion in religion" (Quran 2:256). This is presented honestly as an area of genuine scholarly discussion.',
          bn: 'ইসলামি ফিকহে এটি সত্যিই একটি মতভেদের বিষয়, তাই সৎভাবে আলোচনা করা দরকার। কুরআন নিজে ধর্মত্যাগের জন্য কোনো দুনিয়াবি মৃত্যুদণ্ড নির্ধারণ করেনি। কুরআনের আলোচনা আধ্যাত্মিক জবাবদিহি আর আল্লাহর বিচার নিয়ে: "যে কেউ বিশ্বাসী হওয়ার পর আল্লাহকে অস্বীকার করে… তাদের উপর আল্লাহর ক্রোধ" (কুরআন ১৬:১০৬)। আয়াতটি আল্লাহর দেওয়া পরিণতির কথা বলছে, আদালতের রায়ের কথা নয়। মৃত্যুদণ্ডের পক্ষে প্রায়ই যে হাদিসটি উদ্ধৃত হয়, বহু ধ্রুপদী আলিম ঐতিহাসিক প্রেক্ষাপটে তা বুঝেছেন মুসলিম রাষ্ট্রের বিরুদ্ধে বিশ্বাসঘাতকতামূলক বিদ্রোহের প্রসঙ্গ হিসেবে, ব্যক্তিগতভাবে বিশ্বাস বদলানোর প্রসঙ্গ হিসেবে নয়। সমকালীন সম্মানিত আলিমদের একটি উল্লেখযোগ্য অংশের যুক্তি হলো, কেউ শুধু শান্তিপূর্ণভাবে ধর্ম ছেড়ে দিলে তাকে মৃত্যুদণ্ড দেওয়ার কোনো ভিত্তি কুরআনে নেই। কুরআনের মৌলিক নীতি অটুট: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। বিষয়টি এখানে সৎভাবেই তুলে ধরা হলো আলিমদের মধ্যে চলমান প্রকৃত আলোচনার একটি ক্ষেত্র হিসেবে।',
        },
      },
      {
        heading: { en: 'Freedom of conscience in Islamic teaching', bn: 'ইসলামি শিক্ষায় বিবেকের স্বাধীনতা' },
        body: {
          en: 'The Quran is unambiguous: "There shall be no compulsion in religion — the right course has become distinct from wrong" (Quran 2:256). Scholars universally interpret this as affirming that faith must be freely chosen, not forced. The Prophet\'s mission is described as conveying, not compelling: "Your duty is only to convey the message" (Quran 3:20). In Medina the Prophet signed agreements guaranteeing religious freedom for different communities. The Quran explicitly accepts that some will not believe despite the message, and that God alone judges hearts (Quran 10:99). Islam holds that God values genuine faith born of free conviction — which by definition cannot be coerced.',
          bn: 'কুরআনের কথা দ্ব্যর্থহীন: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই—সঠিক পথ ভুল পথ থেকে স্পষ্ট হয়ে গেছে" (কুরআন ২:২৫৬)। আলিমগণ একবাক্যে এর ব্যাখ্যা করেন এভাবে: ঈমান স্বাধীনভাবে বেছে নেওয়ার বিষয়, জোর করে চাপানোর নয়। কুরআন নবীর দায়িত্ব বলেছে পৌঁছে দেওয়া, বাধ্য করা নয়: "তোমার কর্তব্য কেবল বার্তা পৌঁছানো" (কুরআন ৩:২০)। মদিনায় নবী বিভিন্ন সম্প্রদায়ের ধর্মীয় স্বাধীনতার নিশ্চয়তা দিয়ে চুক্তি করেছিলেন। কুরআন স্পষ্টভাবে মেনে নেয় যে বার্তা পৌঁছানোর পরও কেউ কেউ ঈমান আনবে না, আর মানুষের অন্তরের বিচার কেবল আল্লাহই করেন (কুরআন ১০:৯৯)। ইসলামের বিশ্বাস, আল্লাহর কাছে মূল্য সেই খাঁটি ঈমানের, যা স্বাধীন বিশ্বাস থেকে জন্মায়। আর এমন ঈমান স্বভাবতই জোর করে আদায় করা যায় না।',
        },
      },
      {
        heading: { en: 'Slavery in Islamic history: the honest picture', bn: 'ইসলামের ইতিহাসে দাসপ্রথা: সৎ চিত্র' },
        body: {
          en: 'Islam did not abolish slavery by immediate decree in 7th-century Arabia — a fact sometimes raised as an objection. The honest response is that Islam took a structured approach to a practice that was universal and deeply embedded. It imposed strict moral obligations on how enslaved people must be treated; declared freeing enslaved persons one of the highest acts and an expiation for sins; placed legal limits on enslavement; and gave enslaved people rights and dignity unknown in contemporaneous societies. The Prophet (peace be upon him) freed enslaved people and commended their freedom repeatedly. The direction of Islamic teaching pointed strongly toward abolition. Historical Muslim societies often fell short of these ideals — and that failure is criticised from within Islamic ethics itself. The institution was wrong; Islam\'s contribution was to push conditions toward justice within its historical constraints and create the moral principles that later Muslim abolitionists drew upon.',
          bn: 'ইসলাম ৭ম শতকের আরবে এক ঘোষণায় দাসপ্রথা তুলে দেয়নি। এ কথাটি মাঝে মাঝে আপত্তি হিসেবে তোলা হয়। সৎ উত্তর হলো, যে প্রথা তখন সর্বত্র প্রচলিত আর সমাজের গভীরে গাঁথা, ইসলাম তার মোকাবেলা করেছে ধাপে ধাপে, পরিকল্পিতভাবে। দাস-দাসীদের সাথে কেমন আচরণ করতে হবে, সে বিষয়ে কঠোর নৈতিক দায়িত্ব চাপিয়েছে। দাসমুক্তিকে সর্বোচ্চ নেক আমলের একটি এবং গুনাহের কাফফারা ঘোষণা করেছে। দাস বানানোর উপর আইনি সীমা টেনেছে। আর দাসদের এমন অধিকার ও মর্যাদা দিয়েছে, যা সে যুগের অন্য সমাজে অজানা ছিল। নবী (তাঁর প্রতি শান্তি) নিজে দাস মুক্ত করেছেন এবং বারবার মুক্ত করতে উৎসাহ দিয়েছেন। ইসলামি শিক্ষার গতি ছিল স্পষ্টভাবে দাসপ্রথা বিলোপের দিকে। ইতিহাসের মুসলিম সমাজগুলো প্রায়ই এই আদর্শ রক্ষা করতে পারেনি, আর সেই ব্যর্থতার সমালোচনা ইসলামি নৈতিকতার ভেতর থেকেই উঠে আসে। প্রথাটি অন্যায় ছিল। ইসলামের অবদান হলো, সে যুগের সীমাবদ্ধতার মধ্যেও অবস্থাকে ন্যায়ের দিকে ঠেলে দেওয়া, আর এমন নৈতিক নীতি তৈরি করা, যার উপর ভর করে পরে মুসলিম বিলোপবাদীরা দাসপ্রথার বিরুদ্ধে দাঁড়িয়েছেন।',
        },
      },
      {
        heading: { en: 'The Islamic abolition case', bn: 'দাসপ্রথা বিলোপে ইসলামের যুক্তি' },
        body: {
          en: 'Within Islamic thought, the strongest arguments against slavery draw from its own principles: all human beings are created equal in dignity (Quran 49:13); the Quran praises freeing enslaved people as one of the highest acts of charity (Quran 90:13); the Prophet warned that God will be the adversary of anyone who wrongs those in their authority; and the maqasid al-shari\'a (objectives of Islamic law) include the protection of human dignity and life. When 19th-century Muslim reformers argued for abolition, they drew on these very principles. Today, the overwhelming global consensus among Muslim scholars is that all forms of slavery and human trafficking are absolutely prohibited in Islam.',
          bn: 'ইসলামি চিন্তায় দাসপ্রথার বিরুদ্ধে সবচেয়ে জোরালো যুক্তিগুলো এসেছে ইসলামের নিজের নীতি থেকে। সব মানুষ সমান মর্যাদা নিয়ে সৃষ্ট (কুরআন ৪৯:১৩)। কুরআন দাসমুক্তিকে সর্বোচ্চ দানের একটি বলে প্রশংসা করেছে (কুরআন ৯০:১৩)। নবী সতর্ক করেছেন, কেউ তার অধীনস্থদের উপর জুলুম করলে আল্লাহ নিজে তার প্রতিপক্ষ হবেন। আর মাকাসিদ আল-শরিয়া (ইসলামি আইনের উদ্দেশ্য)-র মধ্যে আছে মানুষের মর্যাদা ও জীবন রক্ষা। ১৯শ শতকের মুসলিম সংস্কারকরা যখন দাসপ্রথা বিলোপের পক্ষে কথা বলেছেন, তখন ঠিক এই নীতিগুলোকেই ভিত্তি করেছেন। আজ বিশ্বের মুসলিম আলিমরা প্রায় একবাক্যে বলেন: সব ধরনের দাসত্ব ও মানব পাচার ইসলামে সম্পূর্ণ নিষিদ্ধ।',
        },
      },
    ],
  },
  {
    id: 'misconceptions-science',
    emoji: '🔭',
    kind: 'article',
    noteKey: 'whyislam_misconceptions_note',
    title: { en: 'Misconceptions: Islam and Science', bn: 'ভুল ধারণা: ইসলাম ও বিজ্ঞান' },
    summary: {
      en: 'Does Islam oppose science? What is the Islamic view of rational inquiry — and what occurred in the Islamic Golden Age?',
      bn: 'ইসলাম কি বিজ্ঞানের বিরোধী? যুক্তি দিয়ে অনুসন্ধান নিয়ে ইসলামের দৃষ্টিভঙ্গি কী, আর ইসলামের স্বর্ণযুগে কী ঘটেছিল?',
    },
    points: [
      {
        heading: { en: 'The Quran commands knowledge-seeking', bn: 'কুরআন জ্ঞান-অন্বেষণের নির্দেশ দেয়' },
        body: {
          en: 'The very first word of revelation was "Read" (Quran 96:1). The Quran invites investigation of the natural world repeatedly: "Do they not look into the realm of the heavens and the earth and everything that God has created?" (Quran 7:185). The Prophet declared seeking knowledge an obligation on every Muslim and taught "wisdom is the lost property of the believer — wherever they find it, they take it." In Islamic epistemology, the book of nature and the Book of God are complementary: studying creation is an act of recognising the Creator\'s signs.',
          bn: 'ওহির একেবারে প্রথম শব্দটিই ছিল "পড়ো" (কুরআন ৯৬:১)। কুরআন বারবার প্রকৃতিজগৎ নিয়ে অনুসন্ধানের ডাক দেয়: "তারা কি আকাশ ও পৃথিবীর রাজত্বে এবং আল্লাহর সৃষ্ট সব কিছুতে দৃষ্টি দেয় না?" (কুরআন ৭:১৮৫)। নবী জ্ঞান অন্বেষণকে প্রত্যেক মুসলিমের উপর ফরজ ঘোষণা করেছেন এবং শিখিয়েছেন: "জ্ঞান হলো মুমিনের হারানো সম্পদ—যেখানেই পায়, তুলে নেয়।" ইসলামি জ্ঞানতত্ত্বে প্রকৃতির বই আর আল্লাহর কিতাব একে অপরের পরিপূরক। সৃষ্টিকে জানা মানে স্রষ্টার নিদর্শন চিনে নেওয়া।',
        },
      },
      {
        heading: { en: 'The Islamic Golden Age of science', bn: 'বিজ্ঞানে ইসলামের স্বর্ণযুগ' },
        body: {
          en: 'Between approximately the 8th and 13th centuries, Muslim scholars produced foundational contributions across mathematics, astronomy, optics, medicine, chemistry and geography. Al-Khwarizmi gave algebra to the world (the word "algorithm" derives from his name). Ibn al-Haytham developed experimental optics and early forms of the scientific method. Ibn Sina (Avicenna) wrote the Canon of Medicine, used in European universities for centuries. Al-Biruni calculated the Earth\'s circumference with remarkable accuracy. These scholars worked explicitly within an Islamic framework that considered knowledge of the natural world an act of worship — refuting any claim that Islamic faith is inherently anti-intellectual.',
          bn: 'মোটামুটি ৮ম থেকে ১৩শ শতক পর্যন্ত মুসলিম পণ্ডিতগণ গণিত, জ্যোতির্বিদ্যা, আলোকবিজ্ঞান, চিকিৎসা, রসায়ন ও ভূগোলে ভিত্তিমূলক অবদান রেখেছেন। আল-খোয়ারিজমি বিশ্বকে দিয়েছেন বীজগণিত ("অ্যালগরিদম" শব্দটি এসেছে তাঁর নাম থেকে)। ইবনুল হাইসাম গড়ে তোলেন পরীক্ষানির্ভর আলোকবিজ্ঞান এবং বৈজ্ঞানিক পদ্ধতির প্রাথমিক রূপ। ইবনে সিনা লিখেছেন "আল-কানুন", যা শত শত বছর ধরে ইউরোপের বিশ্ববিদ্যালয়ে পড়ানো হয়েছে। আল-বিরুনি বিস্ময়কর নির্ভুলতায় পৃথিবীর পরিধি হিসাব করেছিলেন। এই পণ্ডিতেরা সচেতনভাবেই ইসলামি চিন্তার কাঠামোর ভেতরে কাজ করেছেন, যেখানে প্রকৃতিজগৎকে জানাও ইবাদত বলে গণ্য হতো। ইসলামি ঈমান স্বভাবগতভাবেই জ্ঞানবিমুখ, এমন যেকোনো দাবি এতেই খণ্ডিত হয়ে যায়।',
        },
      },
      {
        heading: { en: 'Islam does not conflict with established science', bn: 'প্রতিষ্ঠিত বিজ্ঞানের সাথে ইসলামের কোনো বিরোধ নেই' },
        body: {
          en: 'Islam has no institutional history of opposing scientific investigation — no equivalent of the Galileo affair. The Quran does not claim to be a science textbook; it is guidance for moral and spiritual life. When science establishes findings about the natural world, the mainstream scholarly position in Islam is that empirical investigation belongs to the domain the Quran encourages. Apparent tensions between Quranic verses and science usually dissolve on careful reading, since the Quran is primarily addressing spiritual and ethical matters, not technical cosmology. Where a scholar finds a specific passage challenging, the tradition has extensive tools: context, metaphor, and apparent vs. intended meaning.',
          bn: 'বৈজ্ঞানিক অনুসন্ধানের বিরোধিতা করার কোনো প্রাতিষ্ঠানিক ইতিহাস ইসলামে নেই; গ্যালিলিওর ঘটনার মতো কিছু এখানে ঘটেনি। কুরআন বিজ্ঞানের পাঠ্যবই হওয়ার দাবি করে না; এটি নৈতিক ও আধ্যাত্মিক জীবনের হিদায়াত। বিজ্ঞান যখন প্রকৃতিজগৎ সম্পর্কে কোনো সিদ্ধান্তে পৌঁছায়, তখন ইসলামের মূলধারার আলিমদের অবস্থান হলো: পর্যবেক্ষণ ও পরীক্ষানির্ভর অনুসন্ধান সেই ক্ষেত্রেরই অংশ, যাকে কুরআন উৎসাহ দেয়। কুরআনের আয়াত আর বিজ্ঞানের মধ্যে যে আপাত বিরোধ চোখে পড়ে, মনোযোগ দিয়ে পড়লে সাধারণত তা মিটে যায়। কারণ কুরআনের মূল আলোচ্য আধ্যাত্মিক ও নৈতিক বিষয়, মহাবিশ্বের কারিগরি বিবরণ নয়। কোনো আলিমের কাছে নির্দিষ্ট কোনো অংশ কঠিন মনে হলে, ঐতিহ্যে ব্যাখ্যার অনেক উপায় আছে: প্রসঙ্গ, রূপক, আর বাহ্যিক অর্থ বনাম উদ্দিষ্ট অর্থ।',
        },
      },
      {
        heading: { en: 'A caution on "Quran and science" claims', bn: '"কুরআন ও বিজ্ঞান" দাবি সম্পর্কে একটি সতর্কতা' },
        body: {
          en: 'Some popular presentations claim the Quran predicted specific modern scientific discoveries. These claims warrant care. The Quran does use rich descriptions of creation that resonate with a thoughtful reader. However, responsible Muslim scholarship cautions against forcing modern scientific terminology onto Quranic verses that the first audience understood differently, or making claims dependent entirely on a particular modern translation. The stronger argument is not "the Quran predicted science X" but that the Quran consistently commends observation, reflection on creation, and the pursuit of knowledge — and that this orientation produced a civilisation that led global science for centuries.',
          bn: 'কিছু জনপ্রিয় উপস্থাপনায় দাবি করা হয়, কুরআন নির্দিষ্ট কিছু আধুনিক বৈজ্ঞানিক আবিষ্কারের কথা আগেই বলে দিয়েছে। এসব দাবিতে সাবধান থাকা দরকার। এ কথা ঠিক, কুরআনে সৃষ্টির এমন সমৃদ্ধ বর্ণনা আছে, যা চিন্তাশীল পাঠকের মনে দাগ কাটে। তবে দায়িত্বশীল মুসলিম আলিমরা সাবধান করেন: যে আয়াত প্রথম শ্রোতারা অন্যভাবে বুঝেছিলেন, তার উপর জোর করে আধুনিক বৈজ্ঞানিক পরিভাষা চাপানো ঠিক নয়। কোনো একটি আধুনিক অনুবাদের উপর পুরোপুরি নির্ভর করে দাবি তোলাও ঠিক নয়। জোরালো যুক্তিটা এই নয় যে "কুরআন অমুক বৈজ্ঞানিক তথ্য আগেই বলেছে"। আসল যুক্তি হলো, কুরআন বারবার পর্যবেক্ষণ, সৃষ্টি নিয়ে চিন্তা আর জ্ঞানের সাধনার প্রশংসা করে। আর এই মানসিকতাই এমন এক সভ্যতা গড়েছিল, যা শত শত বছর বিশ্বের বিজ্ঞানে নেতৃত্ব দিয়েছে।',
        },
      },
    ],
  },
  {
    id: 'rational-tawhid',
    emoji: '🧠',
    kind: 'article',
    title: { en: 'Rational Arguments for Tawhid', bn: 'তাওহিদের যুক্তিসংগত প্রমাণ' },
    summary: {
      en: 'The kalam cosmological argument, fine-tuning, the moral argument, and the unity of natural law — each a reasoned pointer, not a coercive proof.',
      bn: 'কালাম সৃষ্টিতাত্ত্বিক যুক্তি, সূক্ষ্ম সমন্বয়, নৈতিক যুক্তি আর প্রাকৃতিক নিয়মের ঐক্য। প্রতিটিই যুক্তিনির্ভর ইঙ্গিত, জোর করে মানানোর প্রমাণ নয়।',
    },
    points: [
      {
        heading: { en: 'The Kalam cosmological argument', bn: 'কালাম সৃষ্টিতাত্ত্বিক যুক্তি' },
        body: {
          en: 'Formulated by Muslim theologians (mutakallimun) such as al-Ghazali: (1) Whatever begins to exist has a cause; (2) the universe began to exist; (3) therefore the universe has a cause. That cause must itself be uncaused (to avoid an infinite regress that explains nothing), immensely powerful, and timeless and spaceless — existing outside the universe it produced. The Quran voices the same reflection: "Were they created by nothing? Or were they themselves the creators?" (Quran 52:35). The argument points toward a first cause; tawhid makes the further claim that this cause is one and unique, on the grounds of coherence and the unity of natural law.',
          bn: 'মুসলিম কালামশাস্ত্রবিদগণ (মুতাকাল্লিমুন), যেমন ইমাম গাজ্জালি, যুক্তিটি এভাবে সাজিয়েছেন: (১) যার অস্তিত্বের শুরু আছে, তার একটা কারণ আছে; (২) মহাবিশ্বের অস্তিত্বের শুরু আছে; (৩) কাজেই মহাবিশ্বের একটা কারণ আছে। সেই কারণ নিজে আর কোনো কারণের ফল হতে পারে না, নইলে কারণের পেছনে কারণের এক অন্তহীন সারি তৈরি হয়, যা কিছুই ব্যাখ্যা করে না। সেই কারণকে হতে হবে অসীম ক্ষমতাবান, কাল ও স্থানের ঊর্ধ্বে, নিজের সৃষ্ট মহাবিশ্বের বাইরে। কুরআনেও একই ভাবনার প্রতিধ্বনি: "তারা কি স্রষ্টা ছাড়াই সৃষ্টি হয়েছে? নাকি তারাই স্রষ্টা?" (কুরআন ৫২:৩৫)। যুক্তিটি একটি প্রথম কারণের দিকে ইঙ্গিত করে। তাওহিদ আরও এক ধাপ এগিয়ে বলে, এই কারণ এক ও অনন্য; এর ভিত্তি যুক্তির সংগতি আর প্রাকৃতিক নিয়মের ঐক্য।',
        },
      },
      {
        heading: { en: 'Fine-tuning and the teleological argument', bn: 'সূক্ষ্ম সমন্বয় ও উদ্দেশ্যভিত্তিক যুক্তি' },
        body: {
          en: 'The universe shows remarkable fine-tuning: the values of fundamental constants — gravitational force, the strong nuclear force, the cosmological constant — are set within a narrow range within which stars, chemistry and life are possible. A tiny change in any of them would produce a universe in which atoms cannot form or stars cannot burn. Muslim scholars point to this as a sign of intentional precision rather than blind chance. The Quran invites this reflection: "And on the earth are signs for those who are certain — and in yourselves. Do you not see?" (Quran 51:20–21). This is a philosophical pointer, not a substitute for scientific inquiry; careful thinkers treat it as raising the prior probability of a Designer.',
          bn: 'মহাবিশ্বে আশ্চর্য রকমের সূক্ষ্ম সমন্বয় দেখা যায়। মৌলিক ধ্রুবকগুলোর মান, যেমন মহাকর্ষ বল, সবল নিউক্লীয় বল, মহাজাগতিক ধ্রুবক, এমন সরু একটি সীমার মধ্যে বাঁধা, যার ভেতরেই কেবল নক্ষত্র, রাসায়নিক বিক্রিয়া আর প্রাণ সম্ভব। এর যেকোনো একটিতে সামান্য হেরফের হলেই এমন মহাবিশ্ব হতো, যেখানে পরমাণু গঠিত হতে পারত না, কিংবা নক্ষত্র জ্বলতে পারত না। মুসলিম আলিমগণ একে অন্ধ দৈবচক্রের নয়, পরিকল্পিত নিখুঁততার নিদর্শন হিসেবে দেখান। কুরআন এ নিয়ে ভাবতে ডাকে: "পৃথিবীতে নিশ্চিত বিশ্বাসীদের জন্য নিদর্শন আছে—এবং তোমাদের নিজেদের মধ্যেও। তবে কি তোমরা দেখবে না?" (কুরআন ৫১:২০–২১)। এটি একটি দার্শনিক ইঙ্গিত, বৈজ্ঞানিক অনুসন্ধানের বিকল্প নয়। সতর্ক চিন্তাবিদরা একে দেখেন এভাবে: এতে একজন মহাপরিকল্পক থাকার সম্ভাবনা আরও জোরালো হয়।',
        },
      },
      {
        heading: { en: 'The moral argument', bn: 'নৈতিক যুক্তি' },
        body: {
          en: 'Most people share the deep conviction that some acts — cruelty to innocents, betrayal, injustice — are not merely disliked but genuinely wrong, independent of what any society decides. If objective moral facts exist, they seem to require grounding: a universe of purely physical processes has no mechanism to generate binding moral obligations. Islamic thought holds that objective moral truths are grounded in the character and will of the one God, who is perfectly just, and who embedded this moral knowledge in the fitrah (human nature). This argument does not deny that non-believers can be moral; it asks where the binding force of "you ought not" ultimately comes from.',
          bn: 'বেশিরভাগ মানুষ মনেপ্রাণে বিশ্বাস করে যে কিছু কাজ, যেমন নিরীহ মানুষের উপর নিষ্ঠুরতা, বিশ্বাসঘাতকতা, অবিচার, শুধু অপছন্দের নয়, সত্যিই অন্যায়। কোনো সমাজ কী সিদ্ধান্ত নিল, তার উপর এটা নির্ভর করে না। বস্তুনিষ্ঠ নৈতিক সত্য যদি সত্যিই থাকে, তাহলে মনে হয় তার একটা ভিত্তি দরকার। নিছক জড় প্রক্রিয়ায় চলা মহাবিশ্বে এমন কোনো ব্যবস্থা নেই, যা মানুষের উপর নৈতিক দায় চাপাতে পারে। ইসলামি চিন্তা বলে, বস্তুনিষ্ঠ নৈতিক সত্যের ভিত্তি এক আল্লাহর গুণ ও ইচ্ছা, যিনি পরিপূর্ণ ন্যায়বান। তিনিই এই নৈতিক জ্ঞান মানুষের ফিতরাহ (মানব প্রকৃতি)-তে গেঁথে দিয়েছেন। এই যুক্তি বলে না যে অবিশ্বাসীরা নৈতিক হতে পারে না। এর প্রশ্ন হলো: "এটা করা উচিত নয়" কথাটার বাধ্য করার জোর শেষ পর্যন্ত কোথা থেকে আসে?',
        },
      },
      {
        heading: { en: 'The unity of natural law points to one Lawgiver', bn: 'প্রাকৃতিক নিয়মের ঐক্য এক বিধানদাতার দিকে ইঙ্গিত করে' },
        body: {
          en: 'Scientists work on the verified assumption that the universe obeys a single consistent set of laws from one galaxy to the next, from a particle to a star. This mathematical unity of nature is, philosophically, remarkable: why should the universe be comprehensible at all? Einstein expressed wonder at "the comprehensibility of the universe." Islamic theology offers an answer: "Had there been within the heavens and the earth gods besides God, they both would have been corrupted" (Quran 21:22). One lawgiver produces one consistent law-system. The remarkable coherence of nature is precisely what one would expect under a single omnipotent Creator, and not what one would expect from competing powers or from pure chance.',
          bn: 'বিজ্ঞানীরা কাজ করেন একটি যাচাই করা অনুমানের উপর: এক ছায়াপথ থেকে আরেক ছায়াপথ, একটি কণা থেকে একটি নক্ষত্র, সবখানে মহাবিশ্ব একই সুসংগত নিয়ম মেনে চলে। দর্শনের দৃষ্টিতে প্রকৃতির এই গাণিতিক ঐক্য বিস্ময়কর: মহাবিশ্বকে আদৌ বোঝা যাবে কেন? আইনস্টাইন "মহাবিশ্বের বোধগম্যতা" নিয়ে বিস্ময় প্রকাশ করেছিলেন। ইসলামি ধর্মতত্ত্ব এর একটি উত্তর দেয়: "আকাশ ও পৃথিবীতে যদি আল্লাহ ছাড়া আরও উপাস্য থাকত, তবে উভয়ই বিশৃঙ্খল হয়ে যেত" (কুরআন ২১:২২)। বিধানদাতা একজন হলে নিয়মের ব্যবস্থাও হয় একটি, সুসংগত। প্রকৃতির এই অসাধারণ সংগতি ঠিক তেমনই, যেমনটা এক সর্বশক্তিমান স্রষ্টা থাকলে আশা করা যায়। প্রতিদ্বন্দ্বী একাধিক শক্তি বা নিছক দৈবচক্র থেকে এমনটা আশা করা যায় না।',
        },
      },
    ],
  },
  {
    id: 'proofs-prophethood',
    emoji: '📣',
    kind: 'article',
    title: { en: 'Evidences of Prophethood', bn: 'নবুয়তের প্রমাণসমূহ' },
    summary: {
      en: 'Fulfilled prophecies, the unlettered messenger, the civilisational transformation, and why the Prophet sought no worldly gain.',
      bn: 'পূর্ণ হওয়া ভবিষ্যদ্বাণী, নিরক্ষর রাসূল, এক সভ্যতার রূপান্তর, আর নবী কেন কোনো দুনিয়াবি লাভ চাননি।',
    },
    points: [
      {
        heading: { en: 'Fulfilled prophecies in the Quran and Sunnah', bn: 'কুরআন ও সুন্নাহতে পূর্ণ হওয়া ভবিষ্যদ্বাণী' },
        body: {
          en: 'Several statements made during the Prophet\'s lifetime can be historically verified. The Quran predicted that the Byzantine Empire, which had just suffered a major defeat by the Persians, would recover and be victorious within a few years (Quran 30:2–4) — which occurred within the stated timeframe. The Quran declared that the body of Pharaoh would be preserved as a sign for later generations (Quran 10:92); mummified Egyptian rulers are indeed preserved today. The Prophet foretold the conquest of Persia and Byzantine territories, and specific social developments that companions witnessed and recorded. Muslim scholars present these as evidence alongside the honest caveat that historical claims require careful scholarship and not every popular prophecy claim carries equal weight.',
          bn: 'নবীর জীবদ্দশায় বলা বেশ কিছু কথা ইতিহাস দিয়ে যাচাই করা যায়। বাইজেন্টাইন সাম্রাজ্য তখন সবেমাত্র পারসিকদের হাতে বড় পরাজয়ের মুখে পড়েছিল। কুরআন ভবিষ্যদ্বাণী করেছিল, কয়েক বছরের মধ্যেই তারা ঘুরে দাঁড়াবে ও বিজয়ী হবে (কুরআন ৩০:২–৪), আর বলা সময়ের মধ্যেই তা ঘটেছিল। কুরআন ঘোষণা করেছিল, ফেরাউনের দেহ পরবর্তী প্রজন্মের জন্য নিদর্শন হিসেবে সংরক্ষিত থাকবে (কুরআন ১০:৯২); মিশরের মমি করা শাসকদের দেহ আজও সত্যিই সংরক্ষিত আছে। নবী পারস্য ও বাইজেন্টাইন অঞ্চল জয়ের কথা এবং নির্দিষ্ট কিছু সামাজিক পরিবর্তনের কথা আগেই বলেছিলেন, যা সাহাবিরা নিজের চোখে দেখেছেন ও লিখে রেখেছেন। মুসলিম আলিমগণ এগুলো প্রমাণ হিসেবে পেশ করেন, তবে সৎভাবে এই সতর্কতাও যোগ করেন: ঐতিহাসিক দাবির জন্য যত্নশীল গবেষণা লাগে, আর প্রচলিত সব ভবিষ্যদ্বাণীর দাবি সমান ওজন রাখে না।',
        },
      },
      {
        heading: { en: 'The unlettered prophet and an inimitable text', bn: 'নিরক্ষর নবী ও অতুলনীয় গ্রন্থ' },
        body: {
          en: 'The Prophet (peace be upon him) is described as ummi — unable to read or write (Quran 7:157). He had no access to earlier scripture and received no rabbinical or scholarly education, yet he conveyed a text of remarkable literary mastery, thematic depth and internal coherence. His Arab contemporaries — master poets who had every reason to want to disprove it — acknowledged that the Quran did not fit any existing literary category. Their response was not "this is ordinary" but "this is either sorcery or divine." The Islamic argument: the content of the Quran cannot be explained by its carrier\'s natural resources.',
          bn: 'কুরআনে নবী (তাঁর প্রতি শান্তি)-কে উম্মি বলা হয়েছে, অর্থাৎ তিনি লিখতে-পড়তে জানতেন না (কুরআন ৭:১৫৭)। আগের কিতাবগুলো পড়ার সুযোগ তাঁর ছিল না, ইহুদি রাব্বি বা কোনো পণ্ডিতের কাছে তিনি শিক্ষাও নেননি। তবু তিনি এমন একটি গ্রন্থ পৌঁছে দিয়েছেন, যার সাহিত্যিক উৎকর্ষ, বিষয়ের গভীরতা আর ভেতরের সংগতি বিস্ময়কর। তাঁর সমকালীন আরবরা ছিল দক্ষ কবি, কুরআনকে ভুল প্রমাণ করার সব কারণই তাদের ছিল। তবু তারা স্বীকার করেছিল, কুরআন প্রচলিত কোনো সাহিত্যধারায় পড়ে না। তারা বলেনি "এ তো সাধারণ কথা"; বরং বলেছিল, "এ হয় জাদু, নয়তো আসমানি বাণী।" ইসলামি যুক্তি হলো: যিনি কুরআন বহন করে এনেছেন, তাঁর নিজস্ব স্বাভাবিক সামর্থ্য দিয়ে এর বিষয়বস্তুর ব্যাখ্যা মেলে না।',
        },
      },
      {
        heading: { en: 'The transformation of a civilisation', bn: 'এক সভ্যতার রূপান্তর' },
        body: {
          en: 'In approximately twenty-three years, beginning from a single person declaring his message, the Arabian peninsula was transformed: from fragmented warring tribes practising infanticide and extreme inequality, into a unified community whose legal and ethical system placed justice, knowledge and mercy at its centre. His earliest followers — educated, self-aware and entirely free to reject the message — gave up wealth, status and safety for a conviction they found compelling. Non-Muslim historians and modern academics alike acknowledge this social transformation as historically extraordinary. The scale and speed of this change are part of the Islamic case for the authenticity of his mission.',
          bn: 'মাত্র তেইশ বছরের মতো সময়ে, একজন মানুষের বার্তা ঘোষণা দিয়ে শুরু করে, গোটা আরব উপদ্বীপ বদলে গিয়েছিল। যেখানে ছিল খণ্ড খণ্ড যুদ্ধরত গোত্র, শিশুহত্যা আর চরম বৈষম্য, সেখানে গড়ে উঠল এক ঐক্যবদ্ধ সমাজ, যার আইন ও নৈতিকতার কেন্দ্রে ছিল ন্যায়, জ্ঞান আর রহমত। তাঁর প্রথম অনুসারীরা ছিলেন শিক্ষিত, সচেতন, আর বার্তা প্রত্যাখ্যান করার পূর্ণ স্বাধীনতা তাঁদের ছিল। তবু যে বিশ্বাসকে তাঁরা সত্য বলে মেনেছিলেন, তার জন্য তাঁরা সম্পদ, মর্যাদা ও নিরাপত্তা ছেড়ে দিয়েছিলেন। অমুসলিম ঐতিহাসিক আর আধুনিক গবেষক, দুই পক্ষই এই সামাজিক রূপান্তরকে ইতিহাসে অসাধারণ বলে স্বীকার করেন। এত বড় পরিবর্তন এত দ্রুত ঘটা, ইসলামের দৃষ্টিতে তাঁর রিসালাতের সত্যতার পক্ষে এটিও একটি প্রমাণ।',
        },
      },
      {
        heading: { en: 'He sought no worldly gain', bn: 'তিনি কোনো পার্থিব স্বার্থ চাননি' },
        body: {
          en: 'A sincere question when evaluating any claim is: what did the claimant gain from it? The Prophet (peace be upon him) endured thirteen years of persecution, boycott, exile and the deaths of loved ones before any worldly success arrived. When tribal leaders offered him wealth, kingship and status in exchange for withdrawing his message, he refused: "By God, if they placed the sun in my right hand and the moon in my left to make me abandon this matter, I would not abandon it until God makes it prevail or I perish in seeking it." The Quran also corrects the Prophet when needed (Quran 80:1–4, Quran 9:43) — something a self-serving author would not include. A person pursuing deception for personal gain does not typically sustain it at this cost.',
          bn: 'যেকোনো দাবি যাচাই করতে গেলে একটি আন্তরিক প্রশ্ন আসে: দাবিকারী এ থেকে কী পেয়েছেন? দুনিয়াবি কোনো সাফল্য আসার আগে নবী (তাঁর প্রতি শান্তি) তেরো বছর ধরে নির্যাতন, বয়কট, নির্বাসন আর প্রিয়জন হারানোর শোক সয়েছেন। গোত্রের নেতারা যখন দাওয়াত ছেড়ে দেওয়ার বিনিময়ে তাঁকে সম্পদ, রাজত্ব আর মর্যাদার প্রস্তাব দিল, তিনি তা ফিরিয়ে দিলেন: "আল্লাহর শপথ, তারা যদি আমার ডান হাতে সূর্য ও বাম হাতে চাঁদ রাখে এই বিষয় ছেড়ে দিতে, আমি ছেড়ে দেব না যতক্ষণ না আল্লাহ এটি বিজয়ী করেন বা আমি এতে মারা যাই।" কুরআন প্রয়োজনে নবীকেও সংশোধন করেছে (কুরআন ৮০:১–৪, কুরআন ৯:৪৩)। নিজের স্বার্থ খোঁজা কোনো রচয়িতা এমন কথা নিজের গ্রন্থে রাখত না। ব্যক্তিগত লাভের জন্য যে প্রতারণা করে, সে সাধারণত এত চড়া মূল্য দিয়ে তা টিকিয়ে রাখে না।',
        },
      },
    ],
  },
  {
    id: 'quran-divine-origin',
    emoji: '✨',
    kind: 'article',
    title: { en: "Evidences of the Quran's Divine Origin", bn: 'কুরআনের ঐশী উৎসের প্রমাণসমূহ' },
    summary: {
      en: 'Four mutually reinforcing evidences: linguistic inimitability (i\'jaz), preservation, internal consistency, and the standing challenge.',
      bn: 'একটি আরেকটিকে জোরালো করে এমন চারটি প্রমাণ: ভাষাগত অতুলনীয়তা (ইজাজ), সংরক্ষণ, ভেতরের সামঞ্জস্য, আর আজও খোলা চ্যালেঞ্জ।',
    },
    points: [
      {
        heading: { en: "Linguistic inimitability (i'jaz al-Quran)", bn: 'ভাষাগত অতুলনীয়তা (ইজাজুল কুরআন)' },
        body: {
          en: 'The Quran\'s Arabic occupies a unique place in Arabic literary tradition. Classical Arab critics and poets — many of whom were not Muslim and had every reason to want to disprove it — acknowledged its singular quality: it does not fit the known categories of poetry (it lacks the metrical patterns of Arab verse), nor of ordinary prose, nor of rhymed prose — its structural depth exceeds all these. The theologian al-Baqillani devoted substantial scholarly analysis to this; Ibn Khaldun noted it in his Muqaddimah. The term i\'jaz al-Quran refers to this inimitability — a level of expression not equalled in fourteen centuries despite many motivated attempts. This argument is offered to scholars of Arabic; translation-readers can appreciate its reputation but cannot fully assess the claim firsthand.',
          bn: 'আরবি সাহিত্যের ঐতিহ্যে কুরআনের আরবির স্থান অনন্য। ধ্রুপদী যুগের আরব সমালোচক ও কবিরা, যাঁদের অনেকে মুসলিম ছিলেন না এবং কুরআনকে ভুল প্রমাণ করার সব কারণই যাঁদের ছিল, তাঁরাও এর অনন্য গুণ স্বীকার করেছেন। এটি কবিতা নয় (আরবি কাব্যের ছন্দ এতে নেই), সাধারণ গদ্যও নয়, আবার ছন্দোবদ্ধ গদ্যও নয়; এর গঠনের গভীরতা এই সব ধারাকে ছাড়িয়ে যায়। ধর্মতাত্ত্বিক আল-বাকিল্লানি এ নিয়ে বিস্তারিত গবেষণা করেছেন; ইবনে খালদুন তাঁর মুকাদ্দিমায় এর উল্লেখ করেছেন। "ইজাজুল কুরআন" বলতে এই অতুলনীয়তাকেই বোঝায়: চৌদ্দ শতাব্দীতে অনেকে উঠেপড়ে চেষ্টা করেও এই মানের ভাষা তৈরি করতে পারেনি। যুক্তিটি মূলত আরবি ভাষার পণ্ডিতদের জন্য। যাঁরা অনুবাদে পড়েন, তাঁরা এর খ্যাতির কদর করতে পারেন, কিন্তু নিজে পুরোপুরি যাচাই করতে পারেন না।',
        },
      },
      {
        heading: { en: 'Internal consistency across twenty-three years', bn: 'তেইশ বছর জুড়ে অভ্যন্তরীণ সামঞ্জস্য' },
        body: {
          en: 'The Quran was revealed over approximately twenty-three years in widely varying circumstances — times of hardship and ease, war and peace, personal joy and grief. Despite this, it forms a thematically coherent whole: its theology, ethical commands, accounts of earlier prophets and legal principles are internally consistent. The Quran itself invites this test: "Do they not reflect upon the Quran? If it had been from other than God, they would have found within it much contradiction" (Quran 4:82). For a text produced under such varied human conditions to exhibit this level of coherence is offered as evidence of unified authorship beyond ordinary human capacity.',
          bn: 'কুরআন নাজিল হয়েছে প্রায় তেইশ বছর ধরে, একেবারে ভিন্ন ভিন্ন পরিস্থিতিতে: কষ্টে ও স্বস্তিতে, যুদ্ধে ও শান্তিতে, ব্যক্তিগত আনন্দ আর শোকের দিনে। তবু পুরো কুরআন বিষয়ের দিক থেকে একটি সুসংগত সমগ্র। এর আকিদা, নৈতিক আদেশ, আগের নবীদের বিবরণ আর আইনের নীতিগুলোর মধ্যে কোনো অসংগতি নেই। কুরআন নিজেই এই পরীক্ষার ডাক দেয়: "তারা কি কুরআন নিয়ে গভীরভাবে চিন্তা করে না? যদি এটি আল্লাহ ছাড়া কারো কাছ থেকে হতো, তবে তারা এতে অনেক বৈপরীত্য খুঁজে পেত" (কুরআন ৪:৮২)। এত ভিন্ন ভিন্ন মানবিক পরিস্থিতিতে আসা একটি গ্রন্থে এই মাত্রার সংগতি থাকাকে প্রমাণ হিসেবে পেশ করা হয় যে এর রচয়িতা একজনই, আর তিনি সাধারণ মানুষের সামর্থ্যের ঊর্ধ্বে।',
        },
      },
      {
        heading: { en: 'Dual preservation: memorisation and manuscript', bn: 'দুই পথে সংরক্ষণ: মুখস্থ ও পাণ্ডুলিপি' },
        body: {
          en: 'No other scripture in history has been preserved simultaneously in two independent ways: a continuous unbroken chain of memorisation by millions in every generation, and a written manuscript tradition. The two methods check each other — a single forger cannot corrupt both simultaneously across a worldwide, unconnected community. Early manuscripts — the Sana\'a parchments, the Topkapi codex, the Birmingham leaf — correspond closely to the text recited worldwide today. The Quran treats this as a divine guarantee: "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian" (Quran 15:9) — offered as an examinable claim, not mere assertion.',
          bn: 'ইতিহাসে আর কোনো কিতাব একসাথে দুটি স্বাধীন পথে সংরক্ষিত হয়নি: প্রতিটি প্রজন্মে লক্ষ লক্ষ মানুষের মুখস্থ করার অবিচ্ছিন্ন ধারা, আর লিখিত পাণ্ডুলিপির ঐতিহ্য। দুটি পদ্ধতি একে অপরকে যাচাই করে। সারা বিশ্বে ছড়িয়ে থাকা, পরস্পর বিচ্ছিন্ন একটি সমাজে কোনো একজন জালিয়াত একসাথে দুটিকেই বিকৃত করতে পারে না। প্রাচীন পাণ্ডুলিপিগুলো, যেমন সানআর চর্মপত্র, তোপকাপি কোডেক্স, বার্মিংহামের পাতা, আজ সারা বিশ্বে তিলাওয়াত করা পাঠের সাথে ঘনিষ্ঠভাবে মিলে যায়। কুরআন একে আল্লাহর দেওয়া নিশ্চয়তা হিসেবে তুলে ধরে: "নিশ্চয়ই আমিই এই উপদেশ অবতীর্ণ করেছি এবং আমিই এর সংরক্ষক" (কুরআন ১৫:৯)। এটি নিছক মুখের দাবি নয়, যাচাই করে দেখার মতো দাবি।',
        },
      },
      {
        heading: { en: 'The open challenge and fourteen centuries of silence', bn: 'উন্মুক্ত চ্যালেঞ্জ ও চৌদ্দ শতাব্দীর নীরবতা' },
        body: {
          en: 'The Quran issues a unique, open and unretracted challenge to produce a surah comparable in quality: "And if you are in doubt about what We have sent down upon Our Servant, then produce a surah the like thereof and call upon your witnesses other than God, if you should be truthful" (Quran 2:23). This challenge was issued to master poets and orators who had every motive to answer it. It was not met in the Prophet\'s lifetime. It has not been credibly met in fourteen centuries, despite many attempts. The challenge remains open. No one is compelled to accept this reasoning — but the absence of a successful response after fourteen centuries of motivated effort forms part of the cumulative case for the Quran\'s divine origin.',
          bn: 'কুরআন একটি অনন্য, খোলা চ্যালেঞ্জ দিয়েছে, যা কখনো ফিরিয়ে নেওয়া হয়নি: সমমানের একটি সূরা বানিয়ে আনো। "আমি আমার বান্দার প্রতি যা অবতীর্ণ করেছি তাতে যদি তোমরা সন্দেহে থাকো, তবে এর মতো একটি সূরা নিয়ে এসো এবং আল্লাহ ছাড়া তোমাদের সাক্ষীদের ডাকো, যদি তোমরা সত্যবাদী হও" (কুরআন ২:২৩)। এই চ্যালেঞ্জ দেওয়া হয়েছিল এমন শীর্ষ কবি ও বক্তাদের, যাদের এর জবাব দেওয়ার সব রকম তাগিদ ছিল। নবীর জীবদ্দশায় কেউ তা পারেনি। চৌদ্দ শতাব্দীতে বহু চেষ্টা হলেও বিশ্বাসযোগ্যভাবে কেউ পারেনি। চ্যালেঞ্জটি আজও খোলা। এই যুক্তি মানতে কাউকে বাধ্য করা হচ্ছে না। তবে চৌদ্দ শতাব্দী ধরে এত চেষ্টার পরও সফল জবাব না আসা কুরআনের ঐশী উৎসের পক্ষে জমে ওঠা প্রমাণগুলোর একটি।',
        },
      },
    ],
  },
  {
    id: 'knowledge-check',
    emoji: '📝',
    kind: 'qa',
    qaLabel: { en: 'Q', bn: 'প্র' },
    title: { en: 'Knowledge Check: Aqidah & Misconceptions', bn: 'জ্ঞান যাচাই: আকিদা ও ভুল ধারণা' },
    summary: {
      en: 'Eight questions reviewing key points from this module — expand each to reveal the answer.',
      bn: 'এই মডিউলের মূল বিষয়গুলো ঝালিয়ে নিতে আটটি প্রশ্ন। উত্তর দেখতে প্রতিটি প্রশ্ন খুলুন।',
    },
    qa: [
      {
        q: { en: 'What are the three dimensions of tawhid?', bn: 'তাওহিদের তিনটি দিক কী কী?' },
        a: {
          en: 'The three dimensions are: (1) Rububiyyah — God alone creates, sustains and governs all things; (2) Uluhiyyah — God alone deserves worship and devotion; and (3) Asma wa Sifat — God\'s names and attributes are affirmed exactly as He described Himself, without likening Him to any created being. Together they mean there is no partner, rival or equal to God in any respect.',
          bn: 'তিনটি দিক হলো: (১) রুবুবিয়্যাহ: সব কিছু সৃষ্টি, প্রতিপালন ও পরিচালনা কেবল আল্লাহই করেন; (২) উলুহিয়্যাহ: ইবাদত ও একনিষ্ঠ ভক্তি কেবল আল্লাহরই প্রাপ্য; (৩) আসমা ওয়া সিফাত: আল্লাহ নিজেকে যেভাবে বর্ণনা করেছেন, তাঁর নাম ও গুণাবলি ঠিক সেভাবেই মেনে নেওয়া, কোনো সৃষ্টির সাথে তুলনা না করে। সব মিলিয়ে কথা হলো, কোনো দিক থেকেই আল্লাহর কোনো শরিক, প্রতিদ্বন্দ্বী বা সমকক্ষ নেই।',
        },
      },
      {
        q: { en: 'What does the word "jihad" primarily mean in Islamic teaching — and what does it not mean?', bn: 'ইসলামি শিক্ষায় "জিহাদ" শব্দের মূল অর্থ কী, আর কী এর অর্থ নয়?' },
        a: {
          en: 'Jihad means earnest striving toward a good goal. In its broadest sense it includes the internal struggle against moral failings (the "greater jihad"), effort to be an upright person, and work to build a just community. It does not primarily mean "holy war." Any use of defensive force in Islam is tightly conditioned, requires legitimate authority, and absolutely forbids targeting civilians. The overwhelming majority of Muslim scholars worldwide condemn terrorism as a violation of Islamic law.',
          bn: 'জিহাদ মানে কোনো ভালো লক্ষ্যের জন্য আপ্রাণ চেষ্টা। ব্যাপক অর্থে এর মধ্যে পড়ে নৈতিক দুর্বলতার বিরুদ্ধে অন্তরের সংগ্রাম ("বৃহত্তর জিহাদ"), সৎ মানুষ হওয়ার চেষ্টা, আর ন্যায়ভিত্তিক সমাজ গড়ার কাজ। এর মূল অর্থ "ধর্মযুদ্ধ" নয়। ইসলামে আত্মরক্ষার জন্য শক্তি প্রয়োগও কঠোর শর্তে বাঁধা: বৈধ কর্তৃপক্ষের অনুমোদন লাগে, আর বেসামরিক মানুষকে নিশানা করা সম্পূর্ণ নিষিদ্ধ। সারা বিশ্বের মুসলিম আলিমদের বিপুল সংখ্যাগরিষ্ঠ অংশ সন্ত্রাসকে ইসলামি আইনের লঙ্ঘন বলে নিন্দা করেন।',
        },
      },
      {
        q: { en: 'What is the Kalam cosmological argument and how does the Quran relate to it?', bn: 'কালাম সৃষ্টিতাত্ত্বিক যুক্তি কী, আর কুরআনের সাথে এর সম্পর্ক কোথায়?' },
        a: {
          en: 'The Kalam argument: (1) Whatever begins to exist has a cause; (2) the universe began to exist; (3) therefore the universe has a cause — one that is itself uncaused, immensely powerful, and beyond time and space. The Quran voices the same reflection conversationally: "Were they created by nothing? Or were they themselves the creators?" (Quran 52:35). The argument points toward a first cause outside the universe; tawhid adds that this cause is one, not many.',
          bn: 'কালাম যুক্তি: (১) যার অস্তিত্বের শুরু আছে, তার একটা কারণ আছে; (২) মহাবিশ্বের অস্তিত্বের শুরু আছে; (৩) কাজেই মহাবিশ্বের একটা কারণ আছে, যে কারণ নিজে আর কোনো কারণের ফল নয়, অসীম ক্ষমতাবান, কাল ও স্থানের ঊর্ধ্বে। কুরআন একই ভাবনা তুলে ধরে সরাসরি প্রশ্নের ভঙ্গিতে: "তারা কি স্রষ্টা ছাড়াই সৃষ্টি হয়েছে? নাকি তারাই স্রষ্টা?" (কুরআন ৫২:৩৫)। যুক্তিটি মহাবিশ্বের বাইরের একটি প্রথম কারণের দিকে ইঙ্গিত করে; তাওহিদ এর সাথে যোগ করে, সেই কারণ এক, একাধিক নয়।',
        },
      },
      {
        q: { en: 'Does the Quran conflict with modern science? What is the mainstream Islamic scholarly position?', bn: 'কুরআন কি আধুনিক বিজ্ঞানের সাথে সাংঘর্ষিক? এ বিষয়ে মূলধারার আলিমদের অবস্থান কী?' },
        a: {
          en: 'The mainstream Islamic scholarly position is that the Quran and science address different domains: the Quran is guidance for moral and spiritual life, not a science textbook. Islam has no institutional history of opposing scientific inquiry — the Islamic Golden Age produced foundational advances across multiple sciences. Apparent tensions usually dissolve on careful reading since the Quran addresses spiritual matters, not technical cosmology. Responsible scholarship also cautions against overclaiming specific "scientific predictions" in the Quran.',
          bn: 'মূলধারার আলিমদের অবস্থান হলো, কুরআন আর বিজ্ঞান ভিন্ন ভিন্ন ক্ষেত্রের কথা বলে: কুরআন নৈতিক ও আধ্যাত্মিক জীবনের হিদায়াত, বিজ্ঞানের পাঠ্যবই নয়। বৈজ্ঞানিক অনুসন্ধানের বিরোধিতা করার কোনো প্রাতিষ্ঠানিক ইতিহাস ইসলামে নেই; বরং ইসলামের স্বর্ণযুগে বহু বিজ্ঞানে ভিত্তিমূলক অগ্রগতি হয়েছিল। আপাত বিরোধগুলো মনোযোগ দিয়ে পড়লে সাধারণত মিটে যায়, কারণ কুরআনের আলোচ্য আধ্যাত্মিক বিষয়, মহাবিশ্বের কারিগরি বিবরণ নয়। দায়িত্বশীল আলিমরা এ বিষয়েও সাবধান করেন: কুরআনে নির্দিষ্ট "বৈজ্ঞানিক ভবিষ্যদ্বাণী" আছে বলে বাড়িয়ে দাবি করা ঠিক নয়।',
        },
      },
      {
        q: { en: 'What does i\'jaz al-Quran mean and why is it significant?', bn: '"ইজাজুল কুরআন" মানে কী, আর এটি কেন গুরুত্বপূর্ণ?' },
        a: {
          en: 'I\'jaz al-Quran means the inimitability of the Quran — the claim that its Arabic is linguistically unique and has never been equalled. The Quran issues an open challenge to produce a comparable surah (Quran 2:23). Classical Arab literary experts, who had every reason to disprove it, acknowledged that the Quran does not fit existing literary categories. This challenge has not been credibly met in fourteen centuries. It forms one line of evidence for the Quran\'s divine origin, directed particularly to scholars of the Arabic language.',
          bn: '"ইজাজুল কুরআন" মানে কুরআনের অতুলনীয়তা। দাবিটি হলো, এর আরবি ভাষার দিক থেকে অনন্য, আর কেউ কখনো এর সমকক্ষ কিছু তৈরি করতে পারেনি। কুরআন সমমানের একটি সূরা বানিয়ে আনার খোলা চ্যালেঞ্জ দিয়েছে (কুরআন ২:২৩)। ধ্রুপদী যুগের আরব সাহিত্য-বিশেষজ্ঞরা, কুরআনকে ভুল প্রমাণ করার সব কারণ যাঁদের ছিল, তাঁরাও স্বীকার করেছেন যে কুরআন প্রচলিত কোনো সাহিত্যধারায় পড়ে না। চৌদ্দ শতাব্দীতে কেউ বিশ্বাসযোগ্যভাবে এই চ্যালেঞ্জের জবাব দিতে পারেনি। কুরআনের ঐশী উৎসের পক্ষে এটি একটি প্রমাণের ধারা, যা বিশেষ করে আরবি ভাষার পণ্ডিতদের উদ্দেশে।',
        },
      },
      {
        q: { en: 'What is the Islamic teaching on freedom of belief and conscience?', bn: 'বিশ্বাস ও বিবেকের স্বাধীনতা নিয়ে ইসলামের শিক্ষা কী?' },
        a: {
          en: 'The Quran is unambiguous: "There is no compulsion in religion" (Quran 2:256). The Prophet\'s role is described as conveying the message, not compelling belief: "Your duty is only to convey" (Quran 3:20). The Quran accepts that some will not believe and that God alone judges hearts (Quran 10:99). In Medina the Prophet signed agreements guaranteeing religious freedom for different communities. Islam holds that genuine faith must be freely chosen — by its very nature it cannot be coerced.',
          bn: 'কুরআনের কথা দ্ব্যর্থহীন: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (কুরআন ২:২৫৬)। কুরআন নবীর ভূমিকা বলেছে বার্তা পৌঁছে দেওয়া, বিশ্বাস চাপিয়ে দেওয়া নয়: "তোমার কর্তব্য কেবল পৌঁছানো" (কুরআন ৩:২০)। কুরআন মেনে নেয় যে কেউ কেউ ঈমান আনবে না, আর অন্তরের বিচার কেবল আল্লাহই করেন (কুরআন ১০:৯৯)। মদিনায় নবী বিভিন্ন সম্প্রদায়ের ধর্মীয় স্বাধীনতার নিশ্চয়তা দিয়ে চুক্তি করেছিলেন। ইসলামের কথা হলো, খাঁটি ঈমান স্বাধীনভাবেই বেছে নিতে হয়; স্বভাবগতভাবেই তা জোর করে আদায় করা যায় না।',
        },
      },
      {
        q: { en: 'Why did the Islamic Golden Age produce so much scientific progress?', bn: 'ইসলামের স্বর্ণযুগে এত বৈজ্ঞানিক অগ্রগতি হলো কেন?' },
        a: {
          en: 'Because the Islamic intellectual tradition treated the study of the natural world as a religious obligation. The Quran repeatedly commands observation and reflection on creation. The Prophet declared seeking knowledge a duty on every Muslim. This produced a civilisation of scholars — al-Khwarizmi (algebra), Ibn al-Haytham (optics), Ibn Sina (medicine), al-Biruni (geography) — who worked explicitly within a faith framework that regarded understanding God\'s creation as an act of worship. The Golden Age demonstrates that Islam and rigorous intellectual inquiry are not only compatible but historically produced each other.',
          bn: 'কারণ ইসলামি জ্ঞানচর্চার ঐতিহ্যে প্রকৃতিজগৎকে জানা ছিল একটি দ্বীনি দায়িত্ব। কুরআন বারবার সৃষ্টিকে দেখতে আর তা নিয়ে ভাবতে বলে। নবী জ্ঞান অন্বেষণকে প্রত্যেক মুসলিমের কর্তব্য ঘোষণা করেছেন। এর ফলে গড়ে ওঠে পণ্ডিতদের এক সভ্যতা: আল-খোয়ারিজমি (বীজগণিত), ইবনুল হাইসাম (আলোকবিজ্ঞান), ইবনে সিনা (চিকিৎসা), আল-বিরুনি (ভূগোল)। তাঁরা সচেতনভাবেই ঈমানের এমন কাঠামোর ভেতরে কাজ করেছেন, যেখানে আল্লাহর সৃষ্টিকে বোঝা ইবাদত হিসেবে গণ্য হতো। স্বর্ণযুগ দেখিয়ে দেয়, ইসলাম আর গভীর জ্ঞানচর্চা শুধু একসাথে চলতেই পারে না, ইতিহাসে একে অপরকে গড়েও তুলেছে।',
        },
      },
      {
        q: { en: 'What does Islam teach about the status of slavery today?', bn: 'আজকের দিনে দাসপ্রথার বিষয়ে ইসলাম কী শেখায়?' },
        a: {
          en: 'The overwhelming global consensus among Muslim scholars today is that all forms of slavery and human trafficking are absolutely prohibited in Islam. This conclusion is drawn from core Islamic principles: the Quran affirms the equal dignity of all human beings (Quran 49:13), praises freeing enslaved people as among the highest acts of charity (Quran 90:13), and the objectives of Islamic law (maqasid al-shari\'a) include the protection of human life and dignity. Though Islamic law in 7th-century Arabia did not abolish slavery by immediate decree, its moral trajectory pointed clearly toward abolition — and that trajectory is what modern Muslim scholars invoke.',
          bn: 'আজ বিশ্বের মুসলিম আলিমরা প্রায় একবাক্যে বলেন: সব ধরনের দাসত্ব ও মানব পাচার ইসলামে সম্পূর্ণ নিষিদ্ধ। এই সিদ্ধান্ত এসেছে ইসলামের মূল নীতিগুলো থেকে। কুরআন সব মানুষের সমান মর্যাদার কথা বলে (কুরআন ৪৯:১৩), দাসমুক্তিকে সর্বোচ্চ দানের একটি বলে প্রশংসা করে (কুরআন ৯০:১৩), আর মাকাসিদ আল-শরিয়া (ইসলামি আইনের উদ্দেশ্য)-র মধ্যে আছে মানুষের জীবন ও মর্যাদা রক্ষা। ৭ম শতকের আরবে ইসলামি আইন এক ঘোষণায় দাসপ্রথা তুলে দেয়নি ঠিকই, কিন্তু এর নৈতিক গতিপথ স্পষ্টভাবে বিলোপের দিকেই ছিল। আধুনিক মুসলিম আলিমরা সেই গতিপথের কথাই তুলে ধরেন।',
        },
      },
    ],
  },
  /* ── WAVE 2: Deeper Topics ──────────────────────────────────────────────── */
  {
    id: 'meaning-of-life',
    emoji: '🌱',
    kind: 'article',
    title: { en: 'The Meaning and Purpose of Life', bn: 'জীবনের অর্থ ও উদ্দেশ্য' },
    summary: {
      en: 'What Islam teaches about why we exist — rooted in the Quran and contrasted with secular alternatives.',
      bn: 'আমরা কেন আছি, এ নিয়ে ইসলাম কী শেখায়: কুরআনের ভিত্তিতে, ধর্মনিরপেক্ষ বিকল্পগুলোর সাথে তুলনা করে।',
    },
    points: [
      {
        heading: { en: 'The Quranic answer: worship and stewardship', bn: 'কুরআনের উত্তর: ইবাদত ও খিলাফত' },
        body: {
          en: 'The Quran states the purpose plainly: "I did not create jinn and humankind except to worship Me" (51:56). In Arabic, \'ibadah (worship) is far broader than the English word — it encompasses every conscious action done with awareness of God, not merely rituals. Alongside this, humans are called God\'s khalifah (vicegerent) on earth (2:30), entrusted with building it justly. Purpose is therefore both devotional and ethical: to orient the self toward God and to serve creation well.',
          bn: 'কুরআন উদ্দেশ্যটা সোজাসুজি বলে দিয়েছে: "আমি জিন ও মানবজাতিকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি" (৫১:৫৬)। আরবি \'ইবাদাহ\' শব্দের পরিধি সাধারণ \'উপাসনা\' শব্দের চেয়ে অনেক বড়। শুধু আনুষ্ঠানিক আমল নয়, আল্লাহকে মনে রেখে সজ্ঞানে করা প্রতিটি কাজই এর মধ্যে পড়ে। পাশাপাশি মানুষকে বলা হয়েছে পৃথিবীতে আল্লাহর খলিফা বা প্রতিনিধি (২:৩০), যার হাতে ন্যায়ের সাথে পৃথিবী গড়ার দায়িত্ব। তাই জীবনের উদ্দেশ্য দুই দিকেরই, ইবাদতের এবং নৈতিকতার: নিজেকে আল্লাহর দিকে ফেরানো, আর সৃষ্টির ভালোভাবে সেবা করা।',
        },
      },
      {
        heading: { en: 'A test with moral weight', bn: 'নৈতিক গুরুত্বসম্পন্ন পরীক্ষা' },
        body: {
          en: 'The Quran frames worldly life as a purposeful examination: "He who created death and life to test you as to which of you is best in deed" (67:2). Choices matter; actions carry weight. Surah al-Insan (76:2) describes humanity as created from a mixed drop and placed in trial — difficulty is not accidental but woven into the human story. This gives moral seriousness to every decision, however small.',
          bn: 'কুরআন দুনিয়ার জীবনকে একটি উদ্দেশ্যপূর্ণ পরীক্ষা হিসেবে তুলে ধরে: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন তোমাদের পরীক্ষা করতে — তোমাদের মধ্যে কর্মে কে উত্তম" (৬৭:২)। প্রতিটি সিদ্ধান্তের গুরুত্ব আছে, প্রতিটি আমলের ওজন আছে। সূরা আল-ইনসান (৭৬:২) বলছে, মানুষকে মিশ্র শুক্রবিন্দু থেকে সৃষ্টি করে পরীক্ষায় ফেলা হয়েছে। কষ্ট তাই হঠাৎ ঘটে যাওয়া দুর্ঘটনা নয়, মানুষের জীবনকাহিনিরই অংশ। এ কারণে ছোট-বড় প্রতিটি সিদ্ধান্তই নৈতিকভাবে গুরুত্বপূর্ণ হয়ে ওঠে।',
        },
      },
      {
        heading: { en: 'Contrasting the nihilist answer', bn: 'শূন্যবাদী উত্তরের সাথে তুলনা' },
        body: {
          en: 'Some secular philosophies conclude that life has no inherent meaning — we are products of blind evolutionary processes, and any purpose we adopt is self-constructed. Islam engages this honestly: on a purely materialist premise, meaninglessness does follow logically. Its counter is a theistic argument: if a wise Creator made the universe and human consciousness, then meaning is built into existence, not invented. The Quran invites reflection rather than mere assertion: "Will you not then reason?" (67:10).',
          bn: 'কিছু ধর্মনিরপেক্ষ দর্শন এই সিদ্ধান্তে পৌঁছায় যে জীবনের নিজস্ব কোনো অর্থ নেই। আমরা অন্ধ বিবর্তন প্রক্রিয়ার ফল, আর যে উদ্দেশ্যই আমরা গ্রহণ করি, তা নিজেদের বানানো। ইসলাম এর মুখোমুখি হয় সততার সাথে: শুধু বস্তুবাদী ভিত্তি থেকে শুরু করলে যুক্তির হিসাবে অর্থহীনতাই আসে। ইসলামের পাল্টা যুক্তি স্রষ্টায় বিশ্বাসের উপর দাঁড়ানো: একজন প্রজ্ঞাময় স্রষ্টা যদি মহাবিশ্ব আর মানুষের চেতনা সৃষ্টি করে থাকেন, তাহলে অর্থ অস্তিত্বের ভেতরেই গাঁথা, মানুষের বানানো নয়। কুরআন শুধু দাবি করে না, ভাবতে ডাকে: "তোমরা কি তবু চিন্তা করবে না?" (৬৭:১০)।',
        },
      },
      {
        heading: { en: 'Purpose made practical', bn: 'জীবনের উদ্দেশ্য, প্রতিদিনের কাজে' },
        body: {
          en: 'Islamic purpose is not abstract — it is expressed in daily life: prayer that anchors the self five times a day, honest work done as worship, kindness to neighbours as religious duty, and the pursuit of knowledge as an obligation. The Prophet ﷺ said: "A good word is charity." Purpose is not found by searching elsewhere but by acting well wherever one already stands.',
          bn: 'ইসলামে জীবনের উদ্দেশ্য বিমূর্ত কোনো ধারণা নয়, তা প্রকাশ পায় প্রতিদিনের জীবনে। দিনে পাঁচবার নামাজ মনকে স্থির রাখে, সৎভাবে করা কাজও হয়ে ওঠে ইবাদত, প্রতিবেশীর প্রতি সদয় হওয়া দ্বীনি দায়িত্ব, আর জ্ঞান অন্বেষণ ফরজ। নবী ﷺ বলেছেন: "একটি ভালো কথা সদকা।" উদ্দেশ্য খুঁজতে অন্য কোথাও যেতে হয় না; যেখানে আছেন, সেখানেই ভালো কাজ করার মধ্যে তা পাওয়া যায়।',
        },
      },
    ],
  },
  {
    id: 'morality-without-god',
    emoji: '⚖️',
    kind: 'article',
    title: { en: 'Morality and Its Foundation', bn: 'নৈতিকতা ও তার ভিত্তি' },
    summary: {
      en: 'Can objective morality exist without God? Islam\'s answer and how tawhid grounds ethical life.',
      bn: 'আল্লাহ ছাড়া কি বস্তুনিষ্ঠ নৈতিকতা থাকতে পারে? এ প্রশ্নে ইসলামের উত্তর, আর তাওহিদ কীভাবে নৈতিক জীবনের ভিত্তি গড়ে দেয়।',
    },
    points: [
      {
        heading: { en: 'The grounding problem', bn: 'ভিত্তির সমস্যা' },
        body: {
          en: 'Moral philosophy has long wrestled with a key question: if there is no God, what makes any action objectively right or wrong rather than merely preferred by custom? Secular answers — evolutionary pressure, social contract, utilitarian calculation — explain why humans develop moral codes, but face difficulty grounding those codes as genuinely binding beyond convention. Islam does not deny that non-believers can act with integrity; it raises the philosophical question of where, ultimately, the obligation to do so comes from.',
          bn: 'নৈতিক দর্শন বহুদিন ধরে একটি মূল প্রশ্ন নিয়ে হিমশিম খাচ্ছে: আল্লাহ যদি না থাকেন, তাহলে কোনো কাজ সত্যিকার অর্থে সঠিক বা ভুল হয় কীসের জোরে, নিছক প্রথাগত পছন্দ-অপছন্দের বাইরে? ধর্মনিরপেক্ষ উত্তরগুলো, যেমন বিবর্তনের চাপ, সামাজিক চুক্তি, উপযোগবাদী হিসাব, ব্যাখ্যা করতে পারে মানুষ কেন নৈতিক নিয়ম গড়ে তোলে। কিন্তু সেই নিয়মগুলো যে প্রথার বাইরেও সত্যিই মানতে বাধ্য, তার ভিত্তি দেখাতে গিয়ে সেগুলো সমস্যায় পড়ে। ইসলাম অস্বীকার করে না যে অবিশ্বাসীরা সততার সাথে চলতে পারে। ইসলাম দার্শনিক প্রশ্নটা তোলে: এভাবে চলার দায়টা শেষ পর্যন্ত আসে কোথা থেকে?',
        },
      },
      {
        heading: { en: 'Tawhid as the moral foundation', bn: 'নৈতিকতার ভিত্তি তাওহিদ' },
        body: {
          en: 'Islam grounds morality in tawhid: God is one, and He is just, merciful and wise by nature — not arbitrarily. Because moral qualities are attributes of the one Creator, they are not cultural inventions but realities woven into existence. Humans were created with a fitra (natural constitution) that recognises justice and kindness as good, and cruelty and deception as wrong. This is why, Islamic thinkers note, moral intuitions tend to converge across cultures — they reflect a shared human nature made by one Maker.',
          bn: 'ইসলাম নৈতিকতার ভিত্তি রাখে তাওহিদের উপর: আল্লাহ এক, আর তিনি স্বভাবগতভাবেই ন্যায়বান, দয়াময় ও প্রজ্ঞাময়, খেয়ালখুশিমতো নন। নৈতিক গুণগুলো যেহেতু এক স্রষ্টারই গুণ, তাই সেগুলো কোনো সংস্কৃতির বানানো নয়, অস্তিত্বের ভেতরেই গাঁথা বাস্তবতা। মানুষকে সৃষ্টি করা হয়েছে ফিতরা (জন্মগত স্বভাব) দিয়ে, যা ন্যায় আর দয়াকে ভালো বলে চেনে, নিষ্ঠুরতা আর প্রতারণাকে অন্যায় বলে চেনে। ইসলামি চিন্তাবিদরা বলেন, এ কারণেই নানা সংস্কৃতির মানুষের নৈতিক বোধ মোটামুটি এক জায়গায় এসে মেলে। কারণ সবার মধ্যে আছে একই মানব স্বভাব, যা একই স্রষ্টার তৈরি।',
        },
      },
      {
        heading: { en: 'Akhlaq: character as worship', bn: 'আখলাক: চরিত্রও ইবাদত' },
        body: {
          en: 'In Islamic ethics, akhlaq (noble character) is inseparable from iman (faith). The Prophet ﷺ said: "The most complete of believers in faith are those with the best character." Generosity, honesty, patience and compassion are not merely social duties but expressions of one\'s inner relationship with God. One who truly internalises tawhid is naturally moved toward humility, gratitude and fair treatment of others — ethics becomes an expression of theology, not a separate compartment.',
          bn: 'ইসলামি নৈতিকতায় আখলাক (উত্তম চরিত্র) ঈমান থেকে আলাদা করা যায় না। নবী ﷺ বলেছেন: "সবচেয়ে পরিপূর্ণ মুমিন সেই যার চরিত্র সর্বোত্তম।" দানশীলতা, সততা, ধৈর্য আর সহমর্মিতা শুধু সামাজিক দায়িত্ব নয়, আল্লাহর সাথে বান্দার অন্তরের সম্পর্কের প্রকাশ। যে সত্যিই তাওহিদকে অন্তরে ধারণ করে, সে আপনা থেকেই বিনয়, কৃতজ্ঞতা আর অন্যের প্রতি ন্যায্য আচরণের দিকে এগোয়। নৈতিকতা তখন আকিদারই প্রকাশ হয়ে ওঠে, আলাদা কোনো খোপ নয়।',
        },
      },
      {
        heading: { en: 'Accountability gives morality its teeth', bn: 'জবাবদিহিতা নৈতিকতাকে কার্যকর করে' },
        body: {
          en: 'A distinctive feature of Islamic ethics is the link between morality and accountability before God. It is not only that one should be honest — it is that one will be asked about one\'s honesty. In a world where the powerful often escape human consequences, Islam teaches that no action, however hidden, escapes divine record (99:7-8). This is not a fearful ethic but a deeply motivating one: integrity matters absolutely, not merely when others are watching.',
          bn: 'ইসলামি নৈতিকতার একটি বিশেষ দিক হলো, নৈতিকতাকে আল্লাহর কাছে জবাবদিহির সাথে জুড়ে দেওয়া। কথা শুধু এটুকু নয় যে সৎ থাকা উচিত; কথা হলো, আপনার সততা নিয়ে আপনাকে জিজ্ঞেস করা হবে। এই দুনিয়ায় ক্ষমতাবানরা প্রায়ই মানুষের বিচার এড়িয়ে যায়। কিন্তু ইসলাম শেখায়, কোনো কাজ, যত গোপনেই করা হোক, আল্লাহর খাতা থেকে বাদ পড়ে না (৯৯:৭-৮)। এটা ভয়ের নৈতিকতা নয়, বরং গভীর প্রেরণার: সততা সবসময়ই গুরুত্বপূর্ণ, শুধু অন্যরা দেখলেই নয়।',
        },
      },
    ],
  },
  {
    id: 'comparative-religion',
    emoji: '🕊️',
    kind: 'article',
    title: { en: 'Islam Among the Abrahamic Traditions', bn: 'আব্রাহামিক ঐতিহ্যগুলোর মধ্যে ইসলাম' },
    summary: {
      en: 'Shared roots with Judaism and Christianity, where Islam agrees, where it diverges, and why — respectfully presented.',
      bn: 'ইহুদি ও খ্রিস্টধর্মের সাথে অভিন্ন শিকড়, ইসলাম কোথায় একমত, কোথায় আলাদা, আর কেন — শ্রদ্ধার সাথে তুলে ধরা।',
    },
    points: [
      {
        heading: { en: 'Shared Abrahamic ground', bn: 'অভিন্ন আব্রাহামিক ভিত্তি' },
        body: {
          en: 'Islam, Judaism and Christianity share foundational commitments: monotheism, the authority of divine revelation, moral accountability, the reality of an afterlife, and the importance of Abraham (Ibrahim) as a patriarch of faith. The Quran honours the Torah and Gospel as divine guidance sent for their times and treats Moses and Jesus as major prophets worthy of deep respect. Islam regards itself as the restoration and completion of the same message these traditions preserve — a claim it offers openly for examination.',
          bn: 'ইসলাম, ইহুদি ধর্ম ও খ্রিস্টধর্মের কিছু মৌলিক বিশ্বাস অভিন্ন: একেশ্বরবাদ, আসমানি ওহির কর্তৃত্ব, নৈতিক জবাবদিহি, পরকালের বাস্তবতা, আর ঈমানের পিতৃপুরুষ হিসেবে ইব্রাহিম (আ.)-এর গুরুত্ব। কুরআন তাওরাত ও ইঞ্জিলকে নিজ নিজ যুগের জন্য পাঠানো আল্লাহর হিদায়াত হিসেবে সম্মান করে, আর মূসা ও ঈসা (আ.)-কে গভীর শ্রদ্ধার যোগ্য প্রধান নবী হিসেবে গণ্য করে। ইসলাম নিজেকে দেখে সেই একই বার্তার পুনরুদ্ধার ও পূর্ণতা হিসেবে, যা এই ঐতিহ্যগুলো ধরে রেখেছে। এই দাবি ইসলাম খোলাখুলি যাচাইয়ের জন্য সামনে রাখে।',
        },
      },
      {
        heading: { en: 'Islam and Judaism: significant alignment', bn: 'ইসলাম ও ইহুদি ধর্ম: উল্লেখযোগ্য মিল' },
        body: {
          en: 'Of the three traditions, Islam and Judaism share some of the closest theological ground. Both affirm an undivided, non-incarnate God; both have a framework of religious law governing daily life (halakha and sharia); both observe ritual purity and dietary rules; and both emphasise direct, personal repentance to God without a priestly intermediary. Classical Muslim scholars regularly noted these convergences as evidence that both traditions drew from the same prophetic wellspring.',
          bn: 'তিনটি ঐতিহ্যের মধ্যে ইসলাম আর ইহুদি ধর্মের ধর্মতাত্ত্বিক মিল সবচেয়ে বেশি। দুটিই এমন এক আল্লাহয় বিশ্বাস করে, যিনি অবিভাজ্য এবং কখনো মানবদেহ ধারণ করেন না। দুটিতেই দৈনন্দিন জীবন পরিচালনার জন্য ধর্মীয় আইনের কাঠামো আছে (হালাখা ও শরিয়া)। দুটিই পবিত্রতা ও খাদ্যের বিধান মেনে চলে। আর দুটিই কোনো পুরোহিতের মধ্যস্থতা ছাড়া সরাসরি আল্লাহর কাছে তওবার উপর জোর দেয়। ধ্রুপদী মুসলিম আলিমরা প্রায়ই এই মিলগুলোর কথা বলেছেন, এর প্রমাণ হিসেবে যে দুটি ঐতিহ্যই নবুয়তের একই উৎস থেকে এসেছে।',
        },
      },
      {
        heading: { en: 'Islam and Christianity: shared love, key divergences', bn: 'ইসলাম ও খ্রিস্টধর্ম: অভিন্ন ভালোবাসা, মূল পার্থক্য' },
        body: {
          en: 'Both Islam and Christianity revere Jesus (peace be upon him) deeply. The Quran affirms his virgin birth (3:47), his miracles, and his titles "Spirit of God" and "Word of God" (4:171). The divergence is on his nature: Christianity developed the doctrines of the Trinity and divine incarnation; Islam affirms Jesus as one of the greatest prophets but maintains that God does not become human and has no partners (112:1-4). Islamic scholarship sees this not as a rejection of Jesus but as preserving strict tawhid — the consistent message of all prophets including Jesus himself.',
          bn: 'ইসলাম ও খ্রিস্টধর্ম, দুটিই ঈসা (আ.)-কে গভীর শ্রদ্ধা করে। কুরআন তাঁর কুমারী মায়ের গর্ভে জন্ম (৩:৪৭), তাঁর মু\'জিজা, আর তাঁর "রূহুল্লাহ" ও "কালিমাতুল্লাহ" উপাধি (৪:১৭১) স্বীকার করে। পার্থক্য তাঁর সত্তা নিয়ে। খ্রিস্টধর্মে ত্রিত্ববাদ আর আল্লাহর মানবরূপ ধারণের মতবাদ গড়ে উঠেছে। ইসলাম ঈসা (আ.)-কে সর্বশ্রেষ্ঠ নবীদের একজন বলে মানে, কিন্তু দৃঢ়ভাবে বলে, আল্লাহ মানুষ হন না এবং তাঁর কোনো শরিক নেই (১১২:১-৪)। ইসলামি আলিমদের দৃষ্টিতে এটা ঈসাকে প্রত্যাখ্যান নয়, বরং খাঁটি তাওহিদকে রক্ষা করা। আর এটাই ছিল সব নবীর অভিন্ন বার্তা, ঈসার নিজেরও।',
        },
      },
      {
        heading: { en: 'Continuation, not rejection', bn: 'প্রত্যাখ্যান নয়, ধারাবাহিকতা' },
        body: {
          en: 'Islam\'s self-understanding is that it does not abolish earlier revelation but fulfils and completes it: "confirming that which preceded it" (5:48). Muslims are asked to hold the prophets of the Torah and Gospels in honour — "We make no distinction between any of His messengers" (2:285). An encounter with Islam need not feel like a repudiation of one\'s entire religious heritage, but a deepening of it — following Abraham\'s path of pure monotheism wherever it leads.',
          bn: 'ইসলামের নিজের বোঝাপড়া হলো, আগের ওহিকে সে বাতিল করে না, বরং পূর্ণতা দেয় ও সম্পূর্ণ করে: "পূর্ববর্তী কিতাবের সত্যায়নকারী" (৫:৪৮)। মুসলিমদের বলা হয়েছে তাওরাত ও ইঞ্জিলের নবীদের সম্মান করতে: "আমরা তাঁর রাসূলদের মধ্যে কোনো পার্থক্য করি না" (২:২৮৫)। তাই ইসলামের সাথে পরিচয় মানে নিজের পুরো ধর্মীয় ঐতিহ্যকে অস্বীকার করা, এমন মনে হওয়ার দরকার নেই। বরং তা সেই ঐতিহ্যকেই আরও গভীর করা: খাঁটি একত্ববাদের যে পথে ইব্রাহিম হেঁটেছেন, সে পথ যেখানে নিয়ে যায়, সেখানে চলা।',
        },
      },
    ],
  },
  {
    id: 'spread-of-islam',
    emoji: '🌍',
    kind: 'article',
    title: { en: 'How and Why Islam Spread', bn: 'ইসলাম কীভাবে ও কেন ছড়িয়েছিল' },
    summary: {
      en: 'A balanced account of the theological, social and historical factors behind Islam\'s rapid and sustained spread.',
      bn: 'ইসলামের দ্রুত ও টেকসই বিস্তারের পেছনে ধর্মতাত্ত্বিক, সামাজিক ও ঐতিহাসিক কারণগুলোর একটি ভারসাম্যপূর্ণ বিবরণ।',
    },
    points: [
      {
        heading: { en: 'The theological appeal of clarity', bn: 'স্পষ্ট আকিদার আকর্ষণ' },
        body: {
          en: 'Islam offered a theology of unusual clarity: one God, no intermediaries, no complex doctrinal hierarchy required for salvation, and a direct relationship between the worshipper and the Divine. In the 7th century this was striking in a region where polytheism offered little comfort and where Christianity\'s councils had produced sharp internal debates about the nature of Christ. Many early converts in Arabia, Persia, Syria and Egypt noted the simplicity and directness of the message as decisive in their acceptance.',
          bn: 'ইসলাম এমন এক আকিদা নিয়ে এসেছিল, যা অসাধারণ রকম স্পষ্ট: আল্লাহ এক, মাঝখানে কোনো মধ্যস্থতাকারী নেই, নাজাতের জন্য জটিল মতবাদের কোনো স্তরবিন্যাস মানতে হয় না, আর বান্দা ও আল্লাহর সম্পর্ক সরাসরি। ৭ম শতকে এটা ছিল নজরকাড়া। সে অঞ্চলে মূর্তিপূজা মানুষকে তেমন সান্ত্বনা দিতে পারত না, আর খ্রিস্টানদের ধর্মসভাগুলোতে ঈসার সত্তা নিয়ে তীব্র অভ্যন্তরীণ বিতর্ক চলছিল। আরব, পারস্য, সিরিয়া ও মিশরের প্রথম দিকের অনেক নওমুসলিম বলেছেন, এই বার্তার সরলতা আর সরাসরি ভাবই তাঁদের ইসলাম গ্রহণে নির্ণায়ক ছিল।',
        },
      },
      {
        heading: { en: 'Social justice and radical egalitarianism', bn: 'সামাজিক ন্যায় ও আমূল সাম্য' },
        body: {
          en: 'Islam\'s insistence on human equality was revolutionary in stratified societies. The Quran declared that no Arab has superiority over a non-Arab except in God-consciousness (49:13). Bilal, an Ethiopian former slave, became the first muezzin — a position of profound honour. Zakat institutionalised wealth redistribution as a pillar of faith, not optional charity. Freed slaves, poor merchants and tribal outcasts were among the earliest converts precisely because Islam offered them genuine equality, not merely the promise of it.',
          bn: 'শ্রেণিবিভক্ত সমাজে মানুষের সমতার উপর ইসলামের জোর ছিল বিপ্লবী। কুরআন ঘোষণা করেছে, তাকওয়া ছাড়া কোনো আরবের অনারবের উপর শ্রেষ্ঠত্ব নেই (৪৯:১৩)। ইথিওপিয়ার সাবেক দাস বিলাল হলেন প্রথম মুয়াজ্জিন, যা ছিল গভীর সম্মানের পদ। যাকাত সম্পদ পুনর্বণ্টনকে ঈমানের স্তম্ভ বানিয়ে দিল, ইচ্ছাধীন দান হিসেবে নয়। মুক্ত দাস, গরিব ব্যবসায়ী আর গোত্র থেকে বিতাড়িত মানুষেরা প্রথম দিকের মুসলিমদের মধ্যে ছিলেন ঠিক এ কারণেই: ইসলাম তাঁদের সত্যিকারের সমতা দিয়েছিল, শুধু তার প্রতিশ্রুতি নয়।',
        },
      },
      {
        heading: { en: 'Trade, scholarship and cultural vitality', bn: 'বাণিজ্য, পাণ্ডিত্য ও সাংস্কৃতিক প্রাণশক্তি' },
        body: {
          en: 'Islam spread along trade routes as much as through military campaigns — merchants from Mecca and Yemen carried the faith to East Africa, South and Southeast Asia, and sub-Saharan Africa centuries before any armies arrived there. The Islamic Golden Age (roughly 8th–13th centuries) produced breakthroughs in mathematics, medicine, astronomy and philosophy. The faith\'s emphasis on reading and intellectual inquiry made its centres of learning attractive to converts who valued scholarship.',
          bn: 'ইসলাম যতটা সামরিক অভিযানের পথে, ততটাই বাণিজ্যপথ ধরে ছড়িয়েছে। মক্কা ও ইয়েমেনের ব্যবসায়ীরা পূর্ব আফ্রিকা, দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া আর সাহারার দক্ষিণের আফ্রিকায় ইসলাম নিয়ে গিয়েছিলেন, সেখানে কোনো সেনাবাহিনী পৌঁছানোর বহু শতাব্দী আগে। ইসলামের স্বর্ণযুগে (মোটামুটি ৮ম-১৩শ শতাব্দী) গণিত, চিকিৎসা, জ্যোতির্বিদ্যা ও দর্শনে যুগান্তকারী অগ্রগতি হয়েছিল। পড়াশোনা আর জ্ঞানচর্চার উপর এই দ্বীনের জোর তার শিক্ষাকেন্দ্রগুলোকে জ্ঞানের কদর করা মানুষদের কাছে আকর্ষণীয় করে তুলেছিল, আর তাঁদের অনেকে ইসলাম গ্রহণ করেন।',
        },
      },
      {
        heading: { en: 'A balanced assessment', bn: 'একটি ভারসাম্যপূর্ণ মূল্যায়ন' },
        body: {
          en: 'Honest scholarship acknowledges that military conquest played a role in expanding early Islamic state frontiers, and that conversion under political rule was not always purely voluntary. At the same time, the historical record shows large-scale conversion happening over generations in places where no Islamic government existed — Indonesia, sub-Saharan West Africa, parts of China. The persistence of large non-Muslim communities within historic Islamic empires demonstrates that mass forced conversion was not the primary mechanism. Islam\'s spread was driven by a combination of spiritual appeal, social justice, intellectual culture and political conditions.',
          bn: 'সৎ গবেষণা স্বীকার করে যে প্রথম দিকের ইসলামি রাষ্ট্রের সীমানা বাড়াতে সামরিক বিজয়ের ভূমিকা ছিল, আর রাজনৈতিক শাসনের অধীনে ধর্মান্তর সবসময় পুরোপুরি স্বেচ্ছায় হয়নি। আবার ইতিহাস এটাও দেখায়, যেখানে কোনো ইসলামি সরকারই ছিল না, যেমন ইন্দোনেশিয়া, সাহারার দক্ষিণের পশ্চিম আফ্রিকা, চীনের কিছু অংশ, সেখানেও প্রজন্মের পর প্রজন্ম ধরে ব্যাপক হারে মানুষ ইসলাম গ্রহণ করেছে। ইতিহাসের ইসলামি সাম্রাজ্যগুলোর ভেতরে বড় বড় অমুসলিম সম্প্রদায় টিকে থাকাই প্রমাণ করে, গণহারে জোর করে ধর্মান্তর মূল পথ ছিল না। ইসলামের বিস্তারের পেছনে কয়েকটি জিনিস একসাথে কাজ করেছে: আধ্যাত্মিক আকর্ষণ, সামাজিক ন্যায়, জ্ঞানচর্চার সংস্কৃতি আর রাজনৈতিক পরিস্থিতি।',
        },
      },
    ],
  },
  {
    id: 'first-muslims',
    emoji: '⭐',
    kind: 'article',
    title: { en: 'The First Muslims: Diversity from the Start', bn: 'প্রথম মুসলিমরা: শুরু থেকে বৈচিত্র্য' },
    summary: {
      en: 'The stories of Bilal, Sumayyah, Suhayb and Salman — a freed slave, a martyred woman, a Byzantine merchant and a Persian seeker.',
      bn: 'বিলাল, সুমাইয়া, সুহাইব ও সালমানের গল্প: একজন মুক্ত দাস, একজন শহীদ নারী, একজন বাইজেন্টাইন বণিক আর সত্যের খোঁজে বের হওয়া এক পারস্যবাসী।',
    },
    points: [
      {
        heading: { en: 'Bilal ibn Rabah: dignity beyond origin', bn: 'বিলাল ইবন রাবাহ: বংশ নয়, ঈমানেই মর্যাদা' },
        body: {
          en: 'Bilal was an enslaved Abyssinian man whose master tortured him publicly — placing a boulder on his chest in the desert heat — to force him to recant Islam. His response, "Ahad, Ahad" (One, One), became one of the most celebrated testimonies of faith in Islamic history. Abu Bakr purchased and freed him. After the conquest of Mecca, the Prophet ﷺ personally asked Bilal to climb the Ka\'bah and give the call to prayer — a man once enslaved, now standing on Islam\'s holiest site calling all humanity to God. His story embodies Islam\'s claim that faith transcends origin.',
          bn: 'বিলাল ছিলেন হাবশার একজন ক্রীতদাস। ইসলাম ছাড়তে বাধ্য করার জন্য তাঁর মালিক তাঁকে প্রকাশ্যে নির্যাতন করত; মরুভূমির প্রচণ্ড গরমে তাঁর বুকের উপর ভারী পাথর চাপিয়ে দিত। তাঁর জবাব ছিল "আহাদ, আহাদ" (এক, এক), যা ইসলামের ইতিহাসে ঈমানের সবচেয়ে বিখ্যাত সাক্ষ্যগুলোর একটি হয়ে আছে। আবু বকর (রা.) তাঁকে কিনে মুক্ত করে দেন। মক্কা বিজয়ের পর নবী ﷺ নিজে বিলালকে কা\'বার উপরে উঠে আজান দিতে বলেন। যে মানুষ একসময় দাস ছিলেন, তিনিই তখন ইসলামের সবচেয়ে পবিত্র স্থানে দাঁড়িয়ে গোটা মানবজাতিকে আল্লাহর দিকে ডাকছেন। তাঁর জীবন ইসলামের এই কথারই জীবন্ত রূপ: ঈমান বংশ-পরিচয়ের ঊর্ধ্বে।',
        },
      },
      {
        heading: { en: 'Sumayyah bint Khayyat: the first martyr', bn: 'সুমাইয়া বিনত খাইয়াত: প্রথম শহীদ' },
        body: {
          en: 'Sumayyah was an elderly enslaved woman among the earliest converts in Mecca. Along with her husband Yasir and son Ammar, she endured severe torture at the hands of Abu Jahl for refusing to recant her faith. Traditional accounts record that she became Islam\'s first martyr. Her name was preserved with honour by the companions and has been invoked across fourteen centuries as a symbol of steadfastness — a reminder that the foundations of Islam were laid not only by nobles and scholars but by those whom society had most marginalised.',
          bn: 'সুমাইয়া ছিলেন একজন বয়স্ক দাসী। মক্কায় যাঁরা সবার আগে ইসলাম গ্রহণ করেছিলেন, তিনি তাঁদের একজন। স্বামী ইয়াসির ও ছেলে আম্মারের সাথে তিনিও ঈমান ছাড়তে অস্বীকার করায় আবু জাহলের হাতে ভয়াবহ নির্যাতন সয়েছেন। প্রচলিত বর্ণনা অনুযায়ী তিনিই ইসলামের প্রথম শহীদ। সাহাবিরা তাঁর নাম সম্মানের সাথে মনে রেখেছেন, আর চৌদ্দ শতাব্দী ধরে অবিচলতার প্রতীক হিসেবে তাঁর নাম উচ্চারিত হয়ে আসছে। তাঁর কথা মনে করিয়ে দেয়, ইসলামের ভিত গড়েছেন শুধু অভিজাত ও আলিমরাই নন, সমাজ যাঁদের সবচেয়ে বেশি কোণঠাসা করে রেখেছিল, তাঁরাও।',
        },
      },
      {
        heading: { en: 'Suhayb ar-Rumi: the Roman who gave everything', bn: 'সুহাইব আর-রুমি: সব বিলিয়ে দেওয়া সেই রোমান' },
        body: {
          en: 'Suhayb ibn Sinan, called "ar-Rumi" (the Roman/Byzantine), was enslaved as a child in Byzantine territory, later gained freedom and became a wealthy merchant in Mecca. When he sought to emigrate to Medina, the Quraysh demanded he leave behind all his earned wealth. He offered them everything in exchange for his freedom to follow his faith. When the Prophet ﷺ heard this, he greeted Suhayb warmly, expressing that his exchange was most profitable. His story illustrates that from the very beginning, Islam attracted converts from across ethnic and geographic boundaries.',
          bn: 'সুহাইব ইবন সিনানকে বলা হতো "আর-রুমি" (রোমান বা বাইজেন্টাইন)। শিশু বয়সে বাইজেন্টাইন এলাকায় তাঁকে দাস বানানো হয়; পরে তিনি মুক্তি পান এবং মক্কায় ধনী ব্যবসায়ী হয়ে ওঠেন। তিনি যখন মদিনায় হিজরত করতে চাইলেন, কুরাইশরা দাবি করল, তাঁর উপার্জিত সব সম্পদ রেখে যেতে হবে। ঈমান নিয়ে বাঁচার স্বাধীনতার বিনিময়ে তিনি সবকিছুই তাদের দিয়ে দিলেন। নবী ﷺ এ খবর শুনে সুহাইবকে আন্তরিকভাবে স্বাগত জানালেন এবং বললেন, তাঁর এই বেচাকেনা সবচেয়ে লাভজনক হয়েছে। তাঁর গল্প দেখায়, একেবারে শুরু থেকেই জাতি ও ভূগোলের সীমা পেরিয়ে নানা মানুষ ইসলামে এসেছেন।',
        },
      },
      {
        heading: { en: 'Salman al-Farisi: the long journey to truth', bn: 'সালমান আল-ফারিসি: সত্যের দীর্ঘ যাত্রা' },
        body: {
          en: 'Salman was born in Persia to a Zoroastrian family. His spiritual restlessness led him first to Christianity, where he served various priests and bishops across Persia, Iraq and Syria seeking the signs of the final prophet. A dying bishop directed him toward Arabia. He eventually reached Medina, recognised Muhammad ﷺ as the prophet he had been seeking, and became a close companion. He is credited with the strategic suggestion to dig a trench at the Battle of the Trench, drawing on Persian military tradition. The Prophet ﷺ described him as belonging to his own household — the deepest mark of spiritual kinship. Salman\'s journey is a timeless account of sincere seeking finding its destination.',
          bn: 'সালমানের জন্ম পারস্যে, এক জরথুস্ট্রীয় (অগ্নিপূজক) পরিবারে। আধ্যাত্মিক অস্থিরতা তাঁকে প্রথমে খ্রিস্টধর্মের দিকে নিয়ে যায়। শেষ নবীর নিদর্শনের খোঁজে তিনি পারস্য, ইরাক ও সিরিয়ায় নানা পাদ্রি ও বিশপের সেবা করেছেন। মৃত্যুশয্যায় এক বিশপ তাঁকে আরবের দিকে যেতে বলেন। অবশেষে তিনি মদিনায় পৌঁছান, মুহাম্মাদ ﷺ-কে সেই নবী হিসেবে চিনে নেন যাঁকে তিনি খুঁজছিলেন, এবং তাঁর ঘনিষ্ঠ সাহাবি হয়ে ওঠেন। খন্দকের যুদ্ধে পরিখা খোঁড়ার কৌশলগত পরামর্শটি তাঁরই বলে ধরা হয়, যা এসেছিল পারস্যের যুদ্ধরীতি থেকে। নবী ﷺ তাঁকে নিজের পরিবারের সদস্য বলে উল্লেখ করেছেন, যা আধ্যাত্মিক আত্মীয়তার সবচেয়ে গভীর স্বীকৃতি। সালমানের যাত্রা চিরকালের এক গল্প: আন্তরিক খোঁজ শেষ পর্যন্ত গন্তব্যে পৌঁছায়।',
        },
      },
    ],
  },
  {
    id: 'slavery-in-islamic-history',
    emoji: '⛓️',
    kind: 'article',
    title: { en: 'Slavery in Islamic History: Context and Reform', bn: 'ইসলামি ইতিহাসে দাসত্ব: প্রেক্ষাপট ও সংস্কার' },
    summary: {
      en: 'The 7th-century context, the legal paths Islam created toward freedom, its dignity provisions, and the modern scholarly consensus.',
      bn: '৭ম শতাব্দীর প্রেক্ষাপট, মুক্তির জন্য ইসলাম যেসব আইনি পথ খুলে দিয়েছিল, দাসদের মর্যাদা রক্ষার বিধান, আর আজকের আলিমদের ঐকমত্য।',
    },
    points: [
      {
        heading: { en: 'The world Islam was born into', bn: 'যে পৃথিবীতে ইসলামের আগমন' },
        body: {
          en: 'When the Quran was revealed in the 7th century, slavery was a global institution embedded in the economies of every major civilisation — Roman, Persian, Byzantine, Indian and Chinese. Immediate total abolition would have been unenforceable and would have left enslaved people without economic infrastructure to survive. This context does not excuse every feature of the historical practice, but it explains why Islam worked through the institution rather than instantly outlawing it — using law, incentive and moral re-framing to dismantle it systematically.',
          bn: '৭ম শতাব্দীতে কুরআন যখন নাজিল হয়, দাসপ্রথা তখন সারা বিশ্বের এক প্রতিষ্ঠান। রোমান, পারস্য, বাইজেন্টাইন, ভারতীয় ও চীনা, প্রতিটি বড় সভ্যতার অর্থনীতিতে তা গেঁথে ছিল। এক ধাক্কায় পুরোপুরি বিলোপ কার্যকর করা যেত না, আর তাতে দাসরা বেঁচে থাকার মতো কোনো অর্থনৈতিক অবলম্বন ছাড়াই পথে বসত। এই প্রেক্ষাপট ইতিহাসের সেই প্রথার সব দিককে বৈধতা দেয় না। তবে এটা বোঝায়, কেন ইসলাম প্রথাটিকে রাতারাতি নিষিদ্ধ না করে তার ভেতর থেকে কাজ করেছে: আইন, প্রণোদনা আর নৈতিক দৃষ্টিভঙ্গি বদলে দিয়ে ধাপে ধাপে তা ভেঙে দিয়েছে।',
        },
      },
      {
        heading: { en: 'Legal paths to freedom: kaffarah and mukataba', bn: 'মুক্তির আইনি পথ: কাফফারা ও মুকাতাবা' },
        body: {
          en: 'Islam created multiple legal mechanisms to reduce slavery. Kaffarah (expiation for sins such as breaking oaths or fasts) frequently required the freeing of a slave — making liberation a form of worship. Mukataba allowed an enslaved person to negotiate a written contract with their owner to purchase their own freedom in instalments, with the Quran directing owners not to withhold this opportunity (24:33). The Quran itself ranked freeing a slave among the highest acts of charity (90:13), and the Prophet ﷺ strongly encouraged manumission and practised it himself.',
          bn: 'দাসপ্রথা কমিয়ে আনতে ইসলাম একাধিক আইনি পথ তৈরি করেছিল। কাফফারা (কসম ভাঙা বা রোজা ভাঙার মতো গুনাহের প্রায়শ্চিত্ত) আদায়ে প্রায়ই একজন দাস মুক্ত করতে হতো; এভাবে দাসমুক্তি হয়ে উঠল এক ধরনের ইবাদত। মুকাতাবার মাধ্যমে একজন দাস মালিকের সাথে লিখিত চুক্তি করে কিস্তিতে নিজের মুক্তি কিনে নিতে পারত, আর কুরআন মালিকদের নির্দেশ দিয়েছে তাকে এই সুযোগ থেকে বঞ্চিত না করতে (২৪:৩৩)। কুরআন নিজেই দাসমুক্তিকে সর্বোচ্চ দানের কাজগুলোর মধ্যে স্থান দিয়েছে (৯০:১৩), আর নবী ﷺ দাসমুক্তিতে জোরালো উৎসাহ দিয়েছেন এবং নিজেও দাস মুক্ত করেছেন।',
        },
      },
      {
        heading: { en: 'Dignity provisions within the law', bn: 'আইনের মধ্যে মর্যাদার বিধান' },
        body: {
          en: 'Islamic law placed significant restrictions on the treatment of enslaved people. An owner who physically harmed a slave was required to free that person. Enslaved persons had legal rights — their marriages were valid, their children free, their testimony heard in certain cases. The Quran and hadith repeatedly framed the enslaved as full human beings equal before God, entitled to food, clothing and rest comparable to their owner\'s. This was a marked departure from Roman law which classified slaves as property with no rights at all.',
          bn: 'ইসলামি আইন দাসদের সাথে আচরণে উল্লেখযোগ্য বিধিনিষেধ আরোপ করেছিল। কোনো মালিক দাসকে শারীরিকভাবে আঘাত করলে তাকে সেই দাস মুক্ত করে দিতে হতো। দাসদের আইনি অধিকার ছিল: তাদের বিয়ে বৈধ, সন্তানেরা স্বাধীন, কিছু ক্ষেত্রে তাদের সাক্ষ্যও গ্রহণ করা হতো। কুরআন ও হাদিস বারবার দাসদের তুলে ধরেছে পূর্ণ মানুষ হিসেবে, আল্লাহর সামনে যারা সমান, আর যাদের প্রাপ্য মালিকের মতোই খাবার, পোশাক ও বিশ্রাম। রোমান আইনে দাস ছিল সম্পূর্ণ অধিকারহীন সম্পত্তি; সেই তুলনায় এটা ছিল বড় এক পরিবর্তন।',
        },
      },
      {
        heading: { en: 'The modern consensus: absolute prohibition', bn: 'আধুনিক ঐকমত্য: সম্পূর্ণ নিষেধ' },
        body: {
          en: 'Contemporary Muslim scholars and institutions — from Al-Azhar to independent researchers — have reached a consensus that slavery in all its forms is impermissible in Islam today. The reasoning draws on maqasid al-shariah (the higher objectives of Islamic law): protecting human life, dignity, intellect and lineage. The internal Quranic and Prophetic trajectory of restricting and incentivising abolition is treated as pointing unambiguously to full prohibition. Major Islamic bodies have issued formal statements to this effect. This is not a revision of Islam but the fulfilment of its own internal logic.',
          bn: 'আল-আজহার থেকে শুরু করে স্বাধীন গবেষক পর্যন্ত, আজকের মুসলিম আলিম ও প্রতিষ্ঠানগুলো এ বিষয়ে একমত যে সব ধরনের দাসপ্রথা আজ ইসলামে নাজায়েজ। এর যুক্তি আসে মাকাসিদ আল-শরিয়া (ইসলামি আইনের মহৎ উদ্দেশ্য) থেকে: মানুষের জীবন, মর্যাদা, বুদ্ধি ও বংশ রক্ষা। কুরআন ও নবীর শিক্ষায় দাসপ্রথাকে সীমিত করা আর মুক্তিতে উৎসাহ দেওয়ার যে ধারা, তাকে সম্পূর্ণ নিষেধের দিকেই দ্ব্যর্থহীন ইঙ্গিত হিসেবে দেখা হয়। বড় বড় ইসলামি সংস্থা এ বিষয়ে আনুষ্ঠানিক বিবৃতিও দিয়েছে। এটা ইসলামের কোনো সংশোধন নয়, বরং ইসলামের নিজের ভেতরের যুক্তিরই পূর্ণতা।',
        },
      },
    ],
  },
  {
    id: 'treatment-of-women',
    emoji: '🌸',
    kind: 'article',
    title: { en: 'Women in Islam: Elevation, Rights and Legacy', bn: 'ইসলামে নারী: মর্যাদা, অধিকার ও উত্তরাধিকার' },
    summary: {
      en: 'The Quranic elevation of women, their legal and spiritual rights, and the scholarly legacy of companions like Aisha and Umm Salamah.',
      bn: 'কুরআন নারীকে যে মর্যাদা দিয়েছে, নারীর আইনি ও আধ্যাত্মিক অধিকার, আর আয়িশা ও উম্মে সালামার মতো সাহাবিয়াদের জ্ঞানের উত্তরাধিকার।',
    },
    points: [
      {
        heading: { en: 'Spiritual equality and full personhood', bn: 'আধ্যাত্মিক সমতা ও পূর্ণ ব্যক্তিত্ব' },
        body: {
          en: 'The Quran affirmed women\'s full spiritual equality at a time when this was contested across cultures. "Muslim men and Muslim women, believing men and believing women… for them God has prepared forgiveness and a mighty reward" (33:35) — identical spiritual categories for both sexes. The Quran also states that each soul is accountable individually (6:164), that there is no inherited guilt by gender, and that Paradise is attained by deeds and sincerity. This was a significant doctrinal departure from traditions that placed women\'s spiritual status beneath men\'s.',
          bn: 'কুরআন নারীর পূর্ণ আধ্যাত্মিক সমতার কথা ঘোষণা করেছে এমন এক সময়ে, যখন নানা সংস্কৃতিতে এ নিয়ে বিতর্ক চলছিল। "মুসলিম পুরুষ ও মুসলিম নারী, মুমিন পুরুষ ও মুমিন নারী… তাদের জন্য আল্লাহ মাগফিরাত ও মহাপুরস্কার প্রস্তুত রেখেছেন" (৩৩:৩৫)। এখানে নারী ও পুরুষের আধ্যাত্মিক পরিচয়ের শ্রেণিগুলো হুবহু এক। কুরআন আরও বলে, প্রত্যেকে নিজের হিসাব নিজেই দেবে (৬:১৬৪); নারী বা পুরুষ হওয়ার কারণে কারও ঘাড়ে জন্মগত কোনো দোষ চাপে না; আর জান্নাত মেলে আমল ও ইখলাসের মাধ্যমে। যেসব ঐতিহ্যে নারীর আধ্যাত্মিক মর্যাদা পুরুষের নিচে রাখা হতো, তাদের থেকে আকিদার দিক দিয়ে এটা ছিল বড় এক পার্থক্য।',
        },
      },
      {
        heading: { en: 'Legal and economic rights established early', bn: 'শুরু থেকেই আইনি ও অর্থনৈতিক অধিকার' },
        body: {
          en: 'The Quran established women\'s rights to own property independently (4:32), to inherit (4:11-12), to retain their full mahr (dower) as personal property with no obligation to spend it on household expenses, and to initiate divorce through khul\' (4:128-130). These were legally codified rights at a time when European women would not have comparable property rights for over a millennium. The Prophet ﷺ said: "The best of you are those who are best to their wives."',
          bn: 'কুরআন নারীকে কয়েকটি অধিকার দিয়েছে: নিজের নামে স্বাধীনভাবে সম্পত্তির মালিক হওয়ার অধিকার (৪:৩২), উত্তরাধিকার পাওয়ার অধিকার (৪:১১-১২), পুরো মহর নিজের ব্যক্তিগত সম্পদ হিসেবে রাখার অধিকার (সংসারের খরচে তা ব্যয় করার কোনো বাধ্যবাধকতা তাঁর নেই), এবং খুলার মাধ্যমে নিজে থেকে বিবাহবিচ্ছেদ চাওয়ার অধিকার (৪:১২৮-১৩০)। এগুলো ছিল আইনে লিপিবদ্ধ অধিকার। অথচ ইউরোপের নারীরা এর কাছাকাছি সম্পত্তির অধিকার পেয়েছেন এক হাজার বছরেরও বেশি পরে। নবী ﷺ বলেছেন: "তোমাদের মধ্যে সর্বোত্তম সে, যে তার স্ত্রীর কাছে সর্বোত্তম।"',
        },
      },
      {
        heading: { en: 'Aisha and Umm Salamah: scholarship from the start', bn: 'আইশা ও উম্মে সালামা: শুরু থেকেই জ্ঞানচর্চা' },
        body: {
          en: 'Aisha bint Abi Bakr is among the most prolific transmitters of hadith in Islamic history — thousands of narrations trace to her, and she corrected senior male companions on points of jurisprudence. After the Prophet\'s death ﷺ she was sought from across the Islamic world as an authority on his practice. Umm Salamah challenged the Prophet ﷺ directly on whether Quranic address included women — her concern contributed to the revelation of 33:35, which explicitly names women. Both demonstrate that scholarship, critical inquiry and religious authority were available to Muslim women at the very origins of the tradition.',
          bn: 'ইসলামের ইতিহাসে সবচেয়ে বেশি হাদিস বর্ণনাকারীদের একজন আইশা বিনত আবি বকর। হাজার হাজার বর্ণনার সূত্র গিয়ে মিলেছে তাঁর কাছে। ফিকহের নানা বিষয়ে তিনি বড় বড় পুরুষ সাহাবির ভুলও শুধরে দিয়েছেন। নবীজির ইন্তেকালের পর তাঁর আমল ও সুন্নাহ জানতে মুসলিম বিশ্বের নানা প্রান্ত থেকে মানুষ আইশার কাছে আসত। উম্মে সালামা সরাসরি নবী ﷺ-কে প্রশ্ন করেছিলেন, কুরআনের সম্বোধনে নারীরাও আছেন কি না। ৩৩:৩৫ আয়াত নাজিলের পেছনে তাঁর এই প্রশ্নেরও ভূমিকা ছিল, আর সে আয়াতে নারীদের কথা আলাদা করে স্পষ্টভাবে বলা হয়েছে। দুজনের জীবনই দেখায়, এই ধারার একেবারে শুরু থেকেই জ্ঞানচর্চা, প্রশ্ন তোলা আর ধর্মীয় নেতৃত্বের পথ মুসলিম নারীদের জন্য খোলা ছিল।',
        },
      },
      {
        heading: { en: 'Contextualising witness and inheritance', bn: 'সাক্ষ্য ও উত্তরাধিকারের প্রেক্ষাপট' },
        body: {
          en: 'Verses on financial witness (2:282) and inheritance differentials (4:11) are frequently cited without context. On witness: the verse addresses commercial contracts in a society where most women did not participate in financial transactions; scholars note it permits a single woman\'s testimony as sufficient in contexts where she has relevant expertise. On inheritance: Islamic law grants women full personal ownership of their share while the male heir in the same scenario typically bears legal financial obligations to the family — the differential reflects assigned duties, not assigned worth. These remain areas of ongoing scholarly discussion.',
          bn: 'আর্থিক লেনদেনে সাক্ষ্য (২:২৮২) এবং উত্তরাধিকারে অংশের পার্থক্য (৪:১১) নিয়ে আয়াতগুলো প্রায়ই প্রেক্ষাপট ছাড়া উদ্ধৃত হয়। সাক্ষ্যের ব্যাপারে: আয়াতটি ব্যবসায়িক চুক্তি নিয়ে, আর সেই সমাজে বেশিরভাগ নারী আর্থিক লেনদেনে অংশ নিতেন না। আলিমরা এটাও উল্লেখ করেন, যে বিষয়ে কোনো নারীর সংশ্লিষ্ট অভিজ্ঞতা আছে, সেখানে একজন নারীর সাক্ষ্যই যথেষ্ট ধরা হয়। উত্তরাধিকারের ব্যাপারে: ইসলামি আইন নারীকে তাঁর অংশের পূর্ণ ব্যক্তিগত মালিকানা দেয়, অথচ একই ক্ষেত্রে পুরুষ উত্তরাধিকারীর ঘাড়ে সাধারণত পরিবারের খরচ জোগানোর আইনি দায় থাকে। তাই পার্থক্যটা দায়িত্বের, মর্যাদার নয়। এসব বিষয়ে আলিমদের আলোচনা এখনো চলছে।',
        },
      },
    ],
  },
  {
    id: 'treatment-of-children',
    emoji: '👶',
    kind: 'article',
    title: { en: 'Children\'s Rights in Islam', bn: 'ইসলামে শিশু অধিকার' },
    summary: {
      en: 'From the prohibition of infanticide to Islamic duties of care, naming, education and equal treatment of all children.',
      bn: 'শিশুহত্যা নিষিদ্ধ করা থেকে শুরু করে যত্ন, নাম রাখা, শিক্ষা ও সব সন্তানের সঙ্গে সমান আচরণ পর্যন্ত ইসলামের দেওয়া দায়িত্বগুলো।',
    },
    points: [
      {
        heading: { en: 'The abolition of infanticide', bn: 'শিশুহত্যার অবসান' },
        body: {
          en: 'Pre-Islamic Arabia practised the burial of infant girls alive — a custom rooted in economic fear and tribal shame. The Quran addressed this with stark directness: "And when the girl [who was] buried alive is asked — for what sin she was killed" (81:8-9) and "Do not kill your children out of fear of poverty" (17:31). This was among Islam\'s earliest moral reforms — a civilisational declaration that a child\'s life has absolute value regardless of sex. The same principle extends to a general prohibition of taking innocent life for economic reasons.',
          bn: 'ইসলাম-পূর্ব আরবে কন্যাশিশুকে জীবন্ত কবর দেওয়ার প্রথা ছিল। এর পেছনে ছিল অভাবের ভয় আর গোত্রের লজ্জা। কুরআন এর বিরুদ্ধে কথা বলেছে একেবারে সরাসরি: "যখন জীবন্ত কবর দেওয়া কন্যাকে জিজ্ঞেস করা হবে, কোন অপরাধে তাকে হত্যা করা হয়েছিল" (৮১:৮-৯), এবং "দারিদ্র্যের ভয়ে তোমাদের সন্তানদের হত্যা করো না" (১৭:৩১)। এটা ছিল ইসলামের প্রথম দিকের নৈতিক সংস্কারগুলোর একটি। সভ্যতার সামনে এ যেন এক ঘোষণা: ছেলে হোক বা মেয়ে, শিশুর জীবন অমূল্য। একই নীতি থেকে আসে আরও ব্যাপক এক নিষেধ: অর্থনৈতিক কারণে কোনো নিরপরাধ প্রাণ নেওয়া যাবে না।',
        },
      },
      {
        heading: { en: 'Rights at birth and in childhood', bn: 'জন্ম ও শৈশবের অধিকার' },
        body: {
          en: 'Islamic fiqh recognises rights that attach to a child from birth: the right to a good name (the Prophet ﷺ encouraged names of good meaning and discouraged names of poor association), the right to adequate nutrition and care, and the right to have their lineage acknowledged. The adhan is traditionally whispered in a newborn\'s ear — symbolically introducing the child to the divine presence from their first moments. These practices reflect a theology in which childhood is not a lesser state to be managed but a sacred stage of human development.',
          bn: 'ইসলামি ফিকহ জন্মের মুহূর্ত থেকেই শিশুর কিছু অধিকার স্বীকার করে: সুন্দর নাম পাওয়ার অধিকার (নবী ﷺ ভালো অর্থের নাম রাখতে উৎসাহ দিতেন, আর খারাপ অর্থবোধক নাম অপছন্দ করতেন), পর্যাপ্ত খাবার ও যত্ন পাওয়ার অধিকার, এবং নিজের বংশপরিচয়ের স্বীকৃতি পাওয়ার অধিকার। প্রচলিত রীতি অনুযায়ী নবজাতকের কানে আস্তে আজান দেওয়া হয়। প্রতীকী অর্থে এভাবে জীবনের প্রথম মুহূর্তেই শিশুকে আল্লাহর সঙ্গে পরিচয় করিয়ে দেওয়া হয়। এসব রীতি থেকে বোঝা যায়, ইসলামের দৃষ্টিতে শৈশব কোনোমতে সামলে নেওয়ার মতো তুচ্ছ অবস্থা নয়, বরং মানুষের বেড়ে ওঠার এক পবিত্র পর্যায়।',
        },
      },
      {
        heading: { en: 'Education and nurture as obligations', bn: 'শিক্ষা ও লালনপালন অবশ্য কর্তব্য' },
        body: {
          en: 'Providing children with education is an Islamic obligation, not an option. The first word revealed to the Prophet ﷺ was "Read" (Iqra — 96:1). Classical scholars emphasised that this obligation extended to daughters as much as sons — a historically significant stance. The Prophet ﷺ said: "It is obligatory for every Muslim to seek knowledge." Hadith literature also records the importance of play in childhood and warns against overburdening children. Good parenting is treated as an amanah (trust) for which the parent is accountable.',
          bn: 'সন্তানকে শিক্ষা দেওয়া ইসলামে অবশ্যপালনীয় দায়িত্ব, ইচ্ছাধীন কোনো বিষয় নয়। নবী ﷺ-এর ওপর নাজিল হওয়া প্রথম শব্দটিই ছিল "পড়ো" (ইকরা, ৯৬:১)। ধ্রুপদী যুগের আলিমরা জোর দিয়ে বলেছেন, এ দায়িত্ব ছেলেদের মতো মেয়েদের বেলায়ও সমানভাবে প্রযোজ্য। ইতিহাসের বিচারে এটা ছিল গুরুত্বপূর্ণ এক অবস্থান। নবী ﷺ বলেছেন: "জ্ঞান অর্জন করা প্রত্যেক মুসলিমের ওপর ফরজ।" হাদিসে শৈশবে খেলাধুলার গুরুত্বের কথাও আছে, আর শিশুর ওপর অতিরিক্ত বোঝা চাপানোর ব্যাপারে সতর্ক করা হয়েছে। সন্তানকে ভালোভাবে মানুষ করা এক আমানত, যার জন্য বাবা-মাকে জবাবদিহি করতে হবে।',
        },
      },
      {
        heading: { en: 'Fairness among children', bn: 'সন্তানদের মধ্যে ইনসাফ' },
        body: {
          en: 'The Prophet ﷺ instructed parents to treat all their children with fairness and equal affection. A hadith records a companion who gifted one son a sum of money and sought the Prophet\'s witness to the act. The Prophet ﷺ refused to witness it unless the same was given to all the children — a direct ruling against financial favouritism. The Prophet ﷺ is also recorded as kissing and showing tenderness to children publicly, demonstrating that warmth toward children is a prophetic virtue, not a weakness.',
          bn: 'নবী ﷺ বাবা-মাকে নির্দেশ দিয়েছেন সব সন্তানের সঙ্গে ইনসাফ করতে এবং সবাইকে সমান স্নেহ করতে। এক হাদিসে আছে, একজন সাহাবি তাঁর এক ছেলেকে কিছু অর্থ উপহার দিয়ে নবীজিকে এর সাক্ষী হতে অনুরোধ করেন। নবী ﷺ জানিয়ে দেন, সব সন্তানকে একই রকম না দিলে তিনি সাক্ষী হবেন না। আর্থিক পক্ষপাতের বিরুদ্ধে এটা সরাসরি এক ফয়সালা। বর্ণনায় আরও আছে, নবী ﷺ সবার সামনেই শিশুদের চুমু খেতেন, আদর করতেন। এতে বোঝা যায়, শিশুদের প্রতি মমতা নবীর গুণ, দুর্বলতা নয়।',
        },
      },
    ],
  },
  {
    id: 'treatment-of-non-muslims',
    emoji: '🤝',
    kind: 'article',
    title: { en: 'Non-Muslims in Islamic Society', bn: 'ইসলামি সমাজে অমুসলিমরা' },
    summary: {
      en: 'Quranic commands of justice for all, the Medina Constitution, the dhimmi framework in context, and modern scholarly positions.',
      bn: 'সবার প্রতি ন্যায়বিচারের কুরআনি নির্দেশ, মদিনা সনদ, প্রেক্ষাপটসহ জিম্মি ব্যবস্থা এবং আধুনিক আলিমদের অবস্থান।',
    },
    points: [
      {
        heading: { en: 'Quranic justice without exception', bn: 'কুরআনের ন্যায়বিচার: কোনো ব্যতিক্রম নেই' },
        body: {
          en: 'The Quran commands justice toward all people without qualification: "Let not the hatred of a people prevent you from being just. Be just — that is nearer to righteousness" (5:8). It explicitly permits friendship and kindness toward those who do not fight Muslims (60:8) and declares belief a matter of free conscience: "There is no compulsion in religion" (2:256). The Prophet ﷺ warned that he would argue against any Muslim who mistreated a non-Muslim under his protection on the Day of Judgement.',
          bn: 'কুরআন কোনো শর্ত ছাড়াই সব মানুষের প্রতি ন্যায়বিচারের আদেশ দেয়: "কোনো সম্প্রদায়ের প্রতি বিদ্বেষ যেন তোমাদের ন্যায়বিচার থেকে বিরত না রাখে। ন্যায়বিচার করো, এটাই তাকওয়ার বেশি নিকটবর্তী" (৫:৮)। যারা মুসলিমদের সঙ্গে যুদ্ধ করে না, তাদের সঙ্গে বন্ধুত্ব ও সদাচারের স্পষ্ট অনুমতি কুরআন দিয়েছে (৬০:৮)। আর ঈমানকে মানুষের বিবেকের স্বাধীন বিষয় বলে ঘোষণা করেছে: "দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই" (২:২৫৬)। নবীজি ﷺ সতর্ক করেছেন, মুসলিমদের আশ্রয়ে থাকা কোনো অমুসলিমের সঙ্গে যে মুসলিম অন্যায় আচরণ করবে, কিয়ামতের দিন তিনি নিজে তার বিরুদ্ধে বাদী হবেন।',
        },
      },
      {
        heading: { en: 'The Medina Constitution: a founding document', bn: 'মদিনা সনদ: এক ভিত্তিমূলক দলিল' },
        body: {
          en: 'Shortly after the Prophet\'s ﷺ migration to Medina, he established a written agreement — the "Constitution of Medina" — among Muslims, pagan Arabs and the Jewish tribes of the city. It recognised them all as one community for purposes of mutual defence, affirmed each group\'s right to its own religious practice and laws, and established that disputes would be resolved through justice and without favouritism. Historians regard this as one of the earliest written constitutional agreements in recorded history and evidence that the Prophetic model of governance was principled pluralism.',
          bn: 'মদিনায় হিজরতের কিছুদিন পরই নবী ﷺ মুসলিম, পৌত্তলিক আরব এবং শহরের ইহুদি গোত্রগুলোর মধ্যে একটি লিখিত চুক্তি করেন, যা "মদিনা সনদ" নামে পরিচিত। পারস্পরিক প্রতিরক্ষার প্রশ্নে এই চুক্তি সবাইকে এক জনগোষ্ঠী হিসেবে স্বীকৃতি দেয়। প্রত্যেক গোষ্ঠী নিজ নিজ ধর্ম পালন ও নিজস্ব আইন মানার অধিকার পায়। আর ঠিক হয়, বিরোধ মেটানো হবে ন্যায়ের ভিত্তিতে, কারও প্রতি পক্ষপাত না করে। ঐতিহাসিকরা একে লিখিত ইতিহাসের প্রাচীনতম সাংবিধানিক চুক্তিগুলোর একটি মনে করেন। এটা এ কথারও প্রমাণ যে নবীজির শাসনব্যবস্থা দাঁড়িয়ে ছিল নীতিনিষ্ঠ বহুত্ববাদের ওপর।',
        },
      },
      {
        heading: { en: 'The dhimmi framework: historical and contextual', bn: 'জিম্মি ব্যবস্থা: ইতিহাস ও প্রেক্ষাপট' },
        body: {
          en: 'In pre-modern Islamic states, non-Muslim permanent residents (dhimmis) paid a jizya (protection tax) in exchange for exemption from military service and the right to govern their own communities by their own religious law. Evaluated in historical context, this offered Jews and Christians protections and legal autonomy they typically lacked in contemporaneous European kingdoms. Medieval fiqh did impose some public limitations that modern scholarship critiques, and many contemporary scholars hold that those conditions no longer apply in modern states with constitutional equality.',
          bn: 'প্রাক-আধুনিক মুসলিম রাষ্ট্রগুলোতে অমুসলিম স্থায়ী বাসিন্দারা (জিম্মি) জিজিয়া (নিরাপত্তা কর) দিত। বিনিময়ে তারা সামরিক দায়িত্ব থেকে অব্যাহতি পেত, আর নিজেদের ধর্মীয় আইন অনুযায়ী নিজেদের সম্প্রদায় চালানোর অধিকার পেত। ইতিহাসের প্রেক্ষাপটে বিচার করলে, এ ব্যবস্থায় ইহুদি ও খ্রিস্টানরা যে নিরাপত্তা ও আইনি স্বায়ত্তশাসন পেত, একই সময়ের ইউরোপীয় রাজ্যগুলোতে সাধারণত তা পেত না। তবে মধ্যযুগের ফিকহে প্রকাশ্য জীবনে কিছু বিধিনিষেধও ছিল, যার সমালোচনা আধুনিক গবেষকেরা করেন। আর বহু সমকালীন আলিমের মতে, সাংবিধানিকভাবে সবার সমান অধিকারের আধুনিক রাষ্ট্রে সেসব শর্ত আর প্রযোজ্য নয়।',
        },
      },
      {
        heading: { en: 'The guest and the covenant of protection', bn: 'অতিথি ও সুরক্ষার অঙ্গীকার' },
        body: {
          en: 'The Prophet ﷺ said: "Whoever harms a person under treaty has harmed me." Islamic hospitality traditions emphasise welcoming guests without religious precondition, and Islamic law recognises that a non-Muslim under guarantee of safety is owed full protection of life, property and honour. The mistreatment of religious minorities is not a minor offence in Islamic ethics but a grave violation of prophetic instruction — the honour of the Muslim community is bound to how it treats its non-Muslim neighbours and guests.',
          bn: 'নবী ﷺ বলেছেন: "যে চুক্তিবদ্ধ কোনো ব্যক্তিকে কষ্ট দেয়, সে আমাকে কষ্ট দেয়।" ইসলামের আতিথেয়তার রীতি বলে, অতিথির ধর্ম যা-ই হোক, তাকে সাদরে গ্রহণ করতে হবে। ইসলামি আইনও মানে, নিরাপত্তার প্রতিশ্রুতি পাওয়া অমুসলিমের জান, মাল ও সম্মানের পূর্ণ সুরক্ষা তার প্রাপ্য। ইসলামি নৈতিকতায় ধর্মীয় সংখ্যালঘুদের সঙ্গে দুর্ব্যবহার ছোটখাটো অপরাধ নয়, বরং নবীজির নির্দেশের গুরুতর লঙ্ঘন। মুসলিম সমাজের সম্মান নির্ভর করে অমুসলিম প্রতিবেশী ও অতিথিদের সঙ্গে তার আচরণের ওপর।',
        },
      },
    ],
  },
  {
    id: 'wisdom-of-tests',
    emoji: '🌊',
    kind: 'article',
    title: { en: 'The Wisdom Behind Trials and Hardship', bn: 'পরীক্ষা ও কষ্টের পেছনের প্রজ্ঞা' },
    summary: {
      en: 'How Islam understands suffering — as purposeful test, as growth and as mercy — drawing on key Quranic verses and prophetic tradition.',
      bn: 'ইসলাম কষ্টকে কীভাবে দেখে: উদ্দেশ্যপূর্ণ পরীক্ষা, বেড়ে ওঠার সুযোগ ও রহমত হিসেবে। কুরআনের গুরুত্বপূর্ণ আয়াত ও হাদিসের আলোকে।',
    },
    points: [
      {
        heading: { en: 'Trials are part of the design', bn: 'পরীক্ষা সৃষ্টির পরিকল্পনারই অংশ' },
        body: {
          en: 'The Quran presents trials not as accidents but as a constitutive element of existence: "He who created death and life to test you as to which of you is best in deed" (67:2). Human moral quality cannot be revealed without real choices under real conditions — ease without difficulty reveals neither character nor resolve. Surah al-Ankabut opens: "Do people think they will be left to say \'we believe\' without being tested?" (29:2-3), and 21:35 states: "We test you with evil and good as trial." Hardship is built into the human story.',
          bn: 'কুরআন বলছে, পরীক্ষা কোনো দুর্ঘটনা নয়, বরং অস্তিত্বেরই মূল অংশ: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন তোমাদের পরীক্ষা করার জন্য, কে তোমাদের মধ্যে আমলে উত্তম" (৬৭:২)। বাস্তব পরিস্থিতিতে সত্যিকারের বাছাইয়ের সুযোগ না পেলে মানুষের নৈতিক গুণ প্রকাশ পায় না। কষ্ট ছাড়া শুধু আরামে চরিত্রও বোঝা যায় না, মনের জোরও না। সূরা আল-আনকাবুত শুরু হয় এভাবে: "মানুষ কি মনে করে, \'আমরা ঈমান এনেছি\' বললেই তাদের ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না?" (২৯:২-৩)। আর ২১:৩৫-এ আছে: "আমি তোমাদের মন্দ ও ভালো দিয়ে পরীক্ষা করি।" কষ্ট মানুষের জীবনকাহিনিরই অংশ।',
        },
      },
      {
        heading: { en: 'The response: sabr and gratitude', bn: 'জবাব: সবর ও শুকরিয়া' },
        body: {
          en: 'Islam prescribes a specific response to trials: sabr (patient perseverance) combined with trust in God\'s wisdom. "And give good news to the patient — those who, when disaster strikes them, say: Indeed, we belong to God and to Him we shall return. Those are the ones upon whom are blessings from their Lord and mercy" (2:155-157). Sabr is not passive resignation but an active, spiritually engaged endurance. The Prophet ﷺ said that the entire affair of the believer is remarkable — if good comes, they are grateful; if hardship, they are patient — and both are good for them.',
          bn: 'পরীক্ষার মুখে ইসলাম নির্দিষ্ট এক জবাব শেখায়: সবর, অর্থাৎ ধৈর্য ধরে অবিচল থাকা, সঙ্গে আল্লাহর হিকমতের ওপর ভরসা। "আর ধৈর্যশীলদের সুসংবাদ দাও, যারা বিপদে পড়লে বলে: নিশ্চয়ই আমরা আল্লাহরই এবং তাঁরই কাছে ফিরে যাব। তাদের ওপরই রয়েছে তাদের রবের পক্ষ থেকে বিশেষ অনুগ্রহ ও রহমত" (২:১৫৫-১৫৭)। সবর মানে হাল ছেড়ে বসে থাকা নয়, বরং ঈমান নিয়ে সজাগ থেকে সক্রিয়ভাবে টিকে থাকা। নবীজি ﷺ বলেছেন, মুমিনের সব ব্যাপারই বিস্ময়কর: ভালো কিছু হলে সে শুকরিয়া আদায় করে, কষ্ট এলে সবর করে, আর দুটোই তার জন্য কল্যাণকর।',
        },
      },
      {
        heading: { en: 'Hardship as purification and elevation', bn: 'কষ্ট: গুনাহ মাফ ও মর্যাদা বৃদ্ধির উপায়' },
        body: {
          en: 'The Prophet ﷺ taught that suffering can be a means of expiation and spiritual elevation. He is reported to have said that even the prick of a thorn can occasion forgiveness of sins for a patient believer, and that the most severely tested were the prophets, then those nearest to them in faith. This contextualises the apparent disparity of who suffers: righteous people enduring intense hardship is not evidence of God\'s absence but of their elevated rank. The hereafter provides the full accounting where every grief finds its compensation.',
          bn: 'নবী ﷺ শিখিয়েছেন, কষ্ট গুনাহের কাফফারা এবং আধ্যাত্মিক মর্যাদা বাড়ার উপায় হতে পারে। বর্ণিত আছে, তিনি বলেছেন, ধৈর্যশীল মুমিনের গায়ে একটা কাঁটা বিঁধলেও তার বিনিময়ে গুনাহ মাফ হতে পারে। তিনি আরও বলেছেন, সবচেয়ে কঠিন পরীক্ষা হয়েছে নবীদের, তারপর ঈমানে যারা তাঁদের সবচেয়ে কাছাকাছি। কে কষ্ট পায় আর কে পায় না, এই আপাত বৈষম্যকে এ কথা নতুন আলোয় দেখায়। নেককার মানুষ কঠিন কষ্ট ভোগ করছেন মানে আল্লাহ নেই, তা নয়; বরং এটা তাঁদের উঁচু মর্যাদার নিদর্শন। আর পূর্ণ হিসাব হবে আখিরাতে, যেখানে প্রতিটি দুঃখের বদলা মিলবে।',
        },
      },
      {
        heading: { en: 'The promise of ease with every hardship', bn: 'প্রতিটি কষ্টের সঙ্গে স্বস্তির প্রতিশ্রুতি' },
        body: {
          en: 'Surah al-Insan (76:2) describes humanity as placed in trial from its very origins — difficulty is not an anomaly. But Islamic theology pairs this with robust hope: "With hardship comes ease — indeed, with hardship comes ease" (94:5-6). Classical scholars noted that in Arabic, the word for "hardship" appears with the definite article both times, referring to the same hardship, while "ease" appears in indefinite form twice — meaning one hardship carries at least two eases alongside it. Difficulty is not the last word.',
          bn: 'সূরা আল-ইনসান (৭৬:২) জানায়, সৃষ্টির শুরু থেকেই মানুষকে পরীক্ষার মধ্যে রাখা হয়েছে। কাজেই কষ্ট কোনো ব্যতিক্রম নয়। তবে ইসলামি আকিদা এর পাশে রেখেছে দৃঢ় আশা: "নিশ্চয়ই কষ্টের সাথে আছে স্বস্তি, নিশ্চয়ই কষ্টের সাথে আছে স্বস্তি" (৯৪:৫-৬)। ধ্রুপদী আলিমরা লক্ষ করেছেন, আরবিতে "কষ্ট" শব্দটি দুবারই নির্দিষ্টবাচক \'আল\' সহ এসেছে, অর্থাৎ একই কষ্টের কথা বলা হচ্ছে; আর "স্বস্তি" দুবারই এসেছে অনির্দিষ্ট রূপে। মানে, একটি কষ্টের সঙ্গে অন্তত দুটি স্বস্তি থাকে। কষ্টই শেষ কথা নয়।',
        },
      },
    ],
  },
  {
    id: 'preservation-of-quran',
    emoji: '📜',
    kind: 'article',
    title: { en: 'How the Quran Was Preserved: A Deeper Look', bn: 'কুরআন কীভাবে সংরক্ষিত হলো: আরও গভীরে' },
    summary: {
      en: 'The mechanics of hafiz transmission, the Uthmanic compilation, how oral and written traditions checked each other, and what comparative manuscript evidence shows.',
      bn: 'হাফিজদের মাধ্যমে কুরআন পৌঁছানোর পদ্ধতি, উসমানি সংকলন, মৌখিক ও লিখিত ধারা কীভাবে একে অপরকে যাচাই করেছে, আর তুলনামূলক পাণ্ডুলিপির প্রমাণ কী বলে।',
    },
    points: [
      {
        heading: { en: 'The hafiz chain: controlled oral transmission', bn: 'হাফিজদের ধারা: নিয়ন্ত্রিত মৌখিক পরম্পরা' },
        body: {
          en: 'Memorisation of the Quran was systematised from the Prophet\'s ﷺ own lifetime. He received revelation, taught it to companions, and verified each person\'s recitation under his direct correction. After his death, the tradition of recitation with an unbroken authorisation chain (ijazah) developed rigorously: no student could recite the Quran in a formal teaching context without having memorised it under a certified teacher, who had in turn memorised it under one, ultimately tracing back to the Prophet ﷺ. This is not oral tradition in the folk sense — it is a precisely documented transmission chain.',
          bn: 'কুরআন মুখস্থ করার কাজটি নবী ﷺ-এর জীবদ্দশাতেই সুশৃঙ্খল রূপ পায়। তিনি ওহি পেতেন, সাহাবিদের শেখাতেন, আর প্রত্যেকের তিলাওয়াত নিজে শুনে শুধরে দিতেন। তাঁর ইন্তেকালের পর অবিচ্ছিন্ন সনদসহ (ইজাজাহ) তিলাওয়াত শেখানোর ধারা কঠোর নিয়মে গড়ে ওঠে। স্বীকৃত শিক্ষকের কাছে পুরো কুরআন মুখস্থ না করে কোনো ছাত্র আনুষ্ঠানিকভাবে কুরআন পড়াতে পারত না। সেই শিক্ষক আবার মুখস্থ করেছেন তাঁর স্বীকৃত শিক্ষকের কাছে; এভাবে ধারাটি গিয়ে পৌঁছেছে নবী ﷺ পর্যন্ত। কাজেই এটা লোকমুখে চলে আসা কথার মতো মৌখিক ঐতিহ্য নয়, বরং নিখুঁতভাবে নথিবদ্ধ এক বর্ণনাধারা।',
        },
      },
      {
        heading: { en: 'The Uthmanic compilation: method and care', bn: 'উসমানি সংকলন: পদ্ধতি ও যত্ন' },
        body: {
          en: 'The first complete written compilation was ordered by Caliph Abu Bakr (r.a.) after the Battle of Yamama (633 CE), when many huffaz were martyred. Zayd ibn Thabit — the Prophet\'s ﷺ chief scribe — led the task with rigorous standards: he accepted no written piece without two independent witnesses who had heard it directly from the Prophet ﷺ, and cross-checked everything against the living memory of companions. The compiled manuscript was later held by Hafsa bint Umar. Caliph Uthman (r.a.) commissioned standardised copies from this manuscript and asked that differing private copies be retired to prevent regional variation — a process documented in multiple hadith chains with named participants.',
          bn: 'প্রথম পূর্ণাঙ্গ লিখিত সংকলনের আদেশ দেন খলিফা আবু বকর (রা.), ইয়ামামার যুদ্ধের (৬৩৩ খ্রি.) পর, যখন বহু হাফিজ শহীদ হয়েছিলেন। কাজটির দায়িত্ব পান নবী ﷺ-এর প্রধান ওহি-লেখক যায়িদ ইবন সাবিত। তিনি কঠোর মানদণ্ড মেনে চলেন: নবী ﷺ-এর কাছ থেকে সরাসরি শুনেছেন এমন দুজন স্বতন্ত্র সাক্ষী না পেলে কোনো লিখিত অংশ তিনি গ্রহণ করেননি, আর সবকিছু সাহাবিদের জীবন্ত স্মৃতির সঙ্গে মিলিয়ে দেখেছেন। সংকলিত পাণ্ডুলিপিটি পরে হাফসা বিনত উমরের কাছে রাখা হয়। খলিফা উসমান (রা.) এই পাণ্ডুলিপি থেকে প্রমিত অনুলিপি তৈরি করান, আর অঞ্চলভেদে পাঠের পার্থক্য ঠেকাতে লোকজনের কাছে থাকা ভিন্ন ভিন্ন ব্যক্তিগত কপি তুলে নিতে বলেন। এই পুরো ঘটনার বিবরণ একাধিক হাদিস-সূত্রে অংশগ্রহণকারীদের নামসহ সংরক্ষিত আছে।',
        },
      },
      {
        heading: { en: 'Oral and written as mutual checks', bn: 'মৌখিক ও লিখিত ধারা: একে অপরের যাচাই' },
        body: {
          en: 'The dual preservation system — oral hafiz tradition alongside written manuscripts — provided cross-verification unique in the ancient world. If a manuscript was corrupted or destroyed, the living hafiz tradition would expose the discrepancy. If a memoriser\'s recitation deviated, the written record and other hafiz would correct it. Each medium constrained the other. Today, millions of people have memorised the Quran, and their unanimous agreement across every dialect and nationality is itself a form of evidence for textual stability.',
          bn: 'হাফিজদের মৌখিক পরম্পরা আর লিখিত পাণ্ডুলিপি পাশাপাশি থাকায় দুই দিক থেকে সংরক্ষণের এমন ব্যবস্থা দাঁড়িয়েছিল, যেখানে একে অপরকে যাচাই করার সুযোগ ছিল। প্রাচীন বিশ্বে এর তুলনা নেই। কোনো পাণ্ডুলিপিতে ভুল ঢুকলে বা তা নষ্ট হয়ে গেলে, জীবন্ত হাফিজরাই সেই গরমিল ধরিয়ে দিতেন। আবার কোনো হাফিজের তিলাওয়াতে ভুল হলে, লিখিত কপি আর অন্য হাফিজরা তা শুধরে দিতেন। একটি মাধ্যম অন্যটিকে বাঁধনে রাখত। আজ লাখ লাখ মানুষ কুরআন মুখস্থ করেছেন। ভাষা-উপভাষা আর জাতীয়তা যা-ই হোক, তাঁদের সবার পাঠ হুবহু এক। এই ঐকমত্যও এক ধরনের প্রমাণ যে কুরআনের পাঠ অপরিবর্তিত রয়েছে।',
        },
      },
      {
        heading: { en: 'Manuscript evidence and comparative context', bn: 'পাণ্ডুলিপির প্রমাণ ও তুলনামূলক প্রেক্ষাপট' },
        body: {
          en: 'Early Quran manuscripts — including the Sana\'a manuscripts discovered in Yemen in 1972 and the Birmingham Quran manuscript carbon-dated to within the Prophet\'s lifetime — show a text that corresponds closely to the Quran recited today. This stands in contrast to the textual history of other major scriptures, where manuscript traditions show more variation over time and the original oral transmitters are less clearly documented. Muslims point to this combination of unbroken hafiz chain and early manuscript agreement as the fulfilment of the Quran\'s own promise: "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian" (15:9).',
          bn: 'প্রাচীন কুরআনের পাণ্ডুলিপিগুলো আজকের তিলাওয়াত করা কুরআনের সঙ্গে প্রায় হুবহু মিলে যায়। এর মধ্যে আছে ১৯৭২ সালে ইয়েমেনে পাওয়া সানআ পাণ্ডুলিপি, এবং বার্মিংহাম কুরআন পাণ্ডুলিপি, কার্বন-ডেটিং অনুযায়ী যার সময়কাল নবীজির জীবদ্দশার মধ্যেই পড়ে। অন্যান্য প্রধান ধর্মগ্রন্থের ইতিহাস এর থেকে আলাদা। সেগুলোর পাণ্ডুলিপিতে সময়ের সঙ্গে বেশি পার্থক্য দেখা যায়, আর প্রথম দিকের মৌখিক বর্ণনাকারীদের পরিচয়ও তত স্পষ্টভাবে নথিবদ্ধ নেই। মুসলিমদের দৃষ্টিতে অবিচ্ছিন্ন হাফিজ-ধারা আর প্রাচীন পাণ্ডুলিপির এই মিল কুরআনের নিজেরই দেওয়া প্রতিশ্রুতির বাস্তব রূপ: "নিশ্চয়ই আমিই এই উপদেশ নাজিল করেছি, আর আমিই এর সংরক্ষক" (১৫:৯)।',
        },
      },
    ],
  },
  {
    id: 'hadith-methodology',
    emoji: '🔍',
    kind: 'article',
    title: { en: 'Hadith: Methodology and Scholarship', bn: 'হাদিস: পদ্ধতি ও গবেষণা' },
    summary: {
      en: 'What hadith are, how the isnad system works, the grading scale (sahih to mawdu\'), and the science of rijal criticism.',
      bn: 'হাদিস কী, ইসনাদ ব্যবস্থা কীভাবে কাজ করে, হাদিসের মানের স্তর (সহিহ থেকে মওজু পর্যন্ত), এবং বর্ণনাকারী যাচাইয়ের বিদ্যা রিজাল-শাস্ত্র।',
    },
    points: [
      {
        heading: { en: 'What is hadith?', bn: 'হাদিস কী?' },
        body: {
          en: 'Hadith (plural: ahadith) are recorded reports of the words, actions, approvals and characteristics of the Prophet Muhammad ﷺ. They form the second major source of Islamic guidance after the Quran and are essential for understanding how the Quran\'s principles were applied in practice. A hadith typically has two parts: the isnad (chain of narrators tracing the report back to its source) and the matn (the actual content of the report). The science of hadith developed to evaluate these two parts rigorously and independently.',
          bn: 'হাদিস (বহুবচনে আহাদিস) হলো নবী মুহাম্মাদ ﷺ-এর কথা, কাজ, অনুমোদন ও গুণাবলির সংরক্ষিত বিবরণ। কুরআনের পরে এটাই ইসলামি হিদায়াতের দ্বিতীয় প্রধান উৎস। কুরআনের নীতিগুলো বাস্তবে কীভাবে মানা হয়েছিল, তা বুঝতে হাদিস অপরিহার্য। একটি হাদিসের সাধারণত দুটি অংশ থাকে: ইসনাদ (বর্ণনাকারীদের ধারা, যা বর্ণনাটিকে তার উৎস পর্যন্ত পৌঁছে দেয়) এবং মতন (বর্ণনার মূল বক্তব্য)। এই দুটি অংশকে আলাদা আলাদাভাবে কঠোরভাবে যাচাই করতেই হাদিসশাস্ত্রের জন্ম।',
        },
      },
      {
        heading: { en: 'The isnad: a chain of named witnesses', bn: 'ইসনাদ: নাম-পরিচয়সহ সাক্ষীদের ধারা' },
        body: {
          en: 'Every classical hadith is transmitted through a named chain: "A told me that B told him that C said he heard the Prophet ﷺ say…" Each link in the chain is a historically identified individual whose biography was studied. Muslim scholars developed the science of \'ilm al-rijal (knowledge of narrators) — examining each narrator\'s memory, character, consistency, and whether they could have met the person they claimed to transmit from. This created one of the most extensive biographical databases in pre-modern scholarship, documenting tens of thousands of narrators.',
          bn: 'প্রতিটি ধ্রুপদী হাদিস এসেছে নাম-পরিচয়সহ এক ধারার মাধ্যমে: "ক আমাকে বলেছেন, খ তাঁকে বলেছেন, গ বলেছেন যে তিনি নবী ﷺ-কে বলতে শুনেছেন…" ধারার প্রতিটি কড়ি ইতিহাসে চিহ্নিত একজন মানুষ, যাঁর জীবনী খুঁটিয়ে দেখা হয়েছে। মুসলিম আলিমরা গড়ে তোলেন \'ইলমুর রিজাল\' (বর্ণনাকারীদের সম্পর্কে জ্ঞান)। এতে প্রত্যেক বর্ণনাকারীর স্মৃতিশক্তি, চরিত্র ও বর্ণনার ধারাবাহিকতা যাচাই করা হতো, আর দেখা হতো যাঁর কাছ থেকে তিনি বর্ণনা করছেন, তাঁর সঙ্গে আদৌ দেখা হওয়া সম্ভব ছিল কি না। এভাবে তৈরি হয় প্রাক-আধুনিক জ্ঞানচর্চার অন্যতম বৃহৎ জীবনী-ভান্ডার, যেখানে দশ হাজারেরও বেশি বর্ণনাকারীর তথ্য সংরক্ষিত।',
        },
      },
      {
        heading: { en: 'Grading: sahih, hasan, da\'if and mawdu\'', bn: 'মানের স্তর: সহিহ, হাসান, দঈফ ও মওজু' },
        body: {
          en: 'After evaluating the isnad and cross-checking the matn, scholars assigned grades. Sahih (sound): every narrator in the chain is reliable and met the next, the chain is unbroken, and the content does not contradict stronger reports. Hasan (good): slightly weaker in chain but still acceptable. Da\'if (weak): one or more narrators are problematic, and the report requires corroboration before action. Mawdu\' (fabricated): the report is assessed as invented — sometimes this was done to settle political disputes or promote sectarian views, and identifying forgeries was a major task of hadith scholars. A hadith\'s grade is not concealed but documented openly for scholars to assess.',
          bn: 'ইসনাদ পরখ করে এবং মতন মিলিয়ে দেখার পর আলিমরা হাদিসের মান নির্ধারণ করতেন। সহিহ (বিশুদ্ধ): ধারার প্রত্যেক বর্ণনাকারী নির্ভরযোগ্য, প্রত্যেকে পরের জনের সাক্ষাৎ পেয়েছেন, ধারায় কোনো ফাঁক নেই, আর বক্তব্য অধিকতর শক্তিশালী কোনো বর্ণনার বিপরীত নয়। হাসান (উত্তম): ধারা সামান্য দুর্বল, তবু গ্রহণযোগ্য। দঈফ (দুর্বল): এক বা একাধিক বর্ণনাকারীকে নিয়ে প্রশ্ন আছে; এর ওপর আমল করার আগে অন্য সূত্রের সমর্থন দরকার। মওজু (জাল): বর্ণনাটি বানানো বলে সাব্যস্ত। কখনো রাজনৈতিক বিরোধে জেতার জন্য বা দলীয় মত প্রচারের জন্য এমন জাল বর্ণনা তৈরি করা হতো, আর এই জালিয়াতি ধরা ছিল মুহাদ্দিসদের বড় এক কাজ। কোনো হাদিসের মান গোপন রাখা হয় না; আলিমদের যাচাইয়ের জন্য তা খোলাখুলি লিখে রাখা হয়।',
        },
      },
      {
        heading: { en: 'The great hadith scholars', bn: 'হাদিসশাস্ত্রের মহান ইমামগণ' },
        body: {
          en: 'The primary hadith collections recognised by Sunni scholarship were compiled in the 9th century. Imam al-Bukhari (d. 870 CE) is reported to have examined over 600,000 narrations and accepted roughly 7,275 as meeting his strict sahih criteria — including his habit of performing ablution and praying before assessing each narrator. Imam Muslim (d. 875 CE) produced a complementary collection. These two — together known as the Sahihayn — along with four other major collections (the Sunan of Abu Dawud, al-Tirmidhi, al-Nasa\'i and Ibn Majah) form the core reference corpus. The rigour these scholars applied represents a systematic approach to historical criticism that has no direct parallel in ancient scholarship.',
          bn: 'সুন্নি আলিমদের কাছে স্বীকৃত প্রধান হাদিস সংকলনগুলো রচিত হয় খ্রিস্টীয় ৯ম শতকে। বর্ণিত আছে, ইমাম আল-বুখারি (মৃ. ৮৭০ খ্রি.) ৬ লাখেরও বেশি বর্ণনা যাচাই করে প্রায় ৭,২৭৫টিকে তাঁর কঠোর সহিহ মানদণ্ডে উত্তীর্ণ বলে গ্রহণ করেন। প্রত্যেক বর্ণনাকারীকে যাচাই করার আগে অজু করে নামাজ পড়ে নেওয়া ছিল তাঁর অভ্যাস। ইমাম মুসলিম (মৃ. ৮৭৫ খ্রি.) এর পরিপূরক আরেকটি সংকলন তৈরি করেন। এ দুটিকে একসঙ্গে বলা হয় সহীহাইন। এর সঙ্গে আরও চারটি বড় সংকলন, অর্থাৎ আবু দাউদ, আল-তিরমিযি, আল-নাসাই ও ইবনে মাজার সুনান মিলে গড়ে উঠেছে হাদিসের মূল ভান্ডার। এই আলিমরা যে কঠোরতা দেখিয়েছেন, তা ঐতিহাসিক যাচাইয়ের এক সুশৃঙ্খল পদ্ধতি; প্রাচীন জ্ঞানচর্চায় এর সরাসরি কোনো তুলনা নেই।',
        },
      },
    ],
  },
  {
    id: 'pillars-of-islam',
    emoji: '🕌',
    kind: 'article',
    title: { en: 'The Five Pillars of Islam', bn: 'ইসলামের পাঁচ স্তম্ভ' },
    summary: {
      en: 'The five acts of worship that form the practical framework of a Muslim’s life: testimony, prayer, charity, fasting and pilgrimage.',
      bn: 'যে পাঁচটি ইবাদত একজন মুসলিমের জীবনের ব্যবহারিক কাঠামো গড়ে দেয়: শাহাদাহ, নামাজ, যাকাত, রোজা ও হজ।',
    },
    points: [
      {
        heading: { en: 'A structure built on five', bn: 'পাঁচটি খুঁটির ওপর দাঁড়ানো ঘর' },
        body: {
          en: 'In a well-known hadith reported by al-Bukhari and Muslim, the Prophet ﷺ said: "Islam is built upon five: to testify that there is no god but God and that Muhammad is the Messenger of God, to establish prayer, to give zakat, to fast Ramadan, and to make pilgrimage to the House for whoever is able." These pillars are not the whole of the religion, but its supporting framework — acts that translate inner faith into a rhythm of daily and yearly worship.',
          bn: 'বুখারি ও মুসলিমে বর্ণিত একটি প্রসিদ্ধ হাদিসে নবী ﷺ বলেছেন: "ইসলাম পাঁচটি বিষয়ের ওপর প্রতিষ্ঠিত: এই সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ আল্লাহর রাসূল, নামাজ কায়েম করা, যাকাত দেওয়া, রমজানের রোজা রাখা, এবং যার সামর্থ্য আছে তার জন্য বাইতুল্লাহর হজ করা।" এই স্তম্ভগুলোই পুরো দ্বীন নয়, বরং দ্বীনের ভার বহনকারী কাঠামো। এগুলো এমন আমল, যা অন্তরের ঈমানকে প্রতিদিনের ও প্রতি বছরের ইবাদতের নিয়মিত ছন্দে রূপ দেয়।',
        },
      },
      {
        heading: { en: 'Testimony and prayer', bn: 'সাক্ষ্য ও নামাজ' },
        body: {
          en: 'The first pillar is the shahada — sincerely bearing witness that God alone deserves worship and that Muhammad ﷺ is His messenger. It is the doorway to Islam and the meaning behind every other act. The second is salah, the five daily prayers, which anchor the day around remembrance of God. The Quran describes its purpose: "Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of God is greater" (29:45). Prayer is a direct, repeated connection between the worshipper and the Creator.',
          bn: 'প্রথম স্তম্ভ শাহাদাহ: আন্তরিকভাবে এই সাক্ষ্য দেওয়া যে কেবল আল্লাহই ইবাদতের যোগ্য, আর মুহাম্মাদ ﷺ তাঁর রাসূল। এটাই ইসলামে প্রবেশের দরজা, আর বাকি সব আমলের মর্ম এখানেই। দ্বিতীয় স্তম্ভ সালাত, অর্থাৎ পাঁচ ওয়াক্ত নামাজ, যা পুরো দিনটাকে আল্লাহর জিকিরের সঙ্গে বেঁধে রাখে। কুরআন এর উদ্দেশ্য জানিয়ে দেয়: "নিশ্চয়ই নামাজ অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে, আর আল্লাহর জিকিরই সবচেয়ে বড়" (২৯:৪৫)। নামাজ বান্দা ও স্রষ্টার মধ্যে সরাসরি সংযোগ, যা দিনে বারবার নতুন হয়।',
        },
      },
      {
        heading: { en: 'Charity, fasting and pilgrimage', bn: 'যাকাত, রোজা ও হজ' },
        body: {
          en: 'Zakat is an obligatory annual charity — a fixed small portion of accumulated wealth given to the poor and other eligible recipients, purifying wealth and binding the community: "Take from their wealth a charity by which you purify them" (9:103). Sawm, fasting the month of Ramadan from dawn to sunset, trains self-restraint and God-consciousness (2:183). Hajj, the pilgrimage to Mecca, is obligatory once in a lifetime for those with the physical and financial means (3:97). Together the pillars engage the tongue, body, wealth, appetite and a lifetime’s journey.',
          bn: 'যাকাত বছরে একবার আদায় করা ফরজ দান: জমানো সম্পদের নির্দিষ্ট ছোট একটি অংশ গরিব ও অন্যান্য হকদারদের দিতে হয়। এতে সম্পদ পবিত্র হয়, সমাজ একসূত্রে বাঁধা পড়ে: "তাদের সম্পদ থেকে সদকা গ্রহণ করো, যার মাধ্যমে তুমি তাদের পবিত্র করবে" (৯:১০৩)। সাওম, অর্থাৎ রমজান মাসে ভোর থেকে সূর্যাস্ত পর্যন্ত রোজা রাখা, আত্মসংযম ও তাকওয়া শেখায় (২:১৮৩)। আর মক্কায় হজ পালন করা শারীরিক ও আর্থিক সামর্থ্যবানদের ওপর জীবনে একবার ফরজ (৩:৯৭)। সব মিলিয়ে স্তম্ভগুলো কাজে লাগায় মুখের কথা, শরীর, সম্পদ, ক্ষুধা-তৃষ্ণা আর গোটা জীবনের সফরকে।',
        },
      },
    ],
  },
  {
    id: 'articles-of-faith',
    emoji: '🕋',
    kind: 'article',
    title: { en: 'The Six Articles of Faith (Iman)', bn: 'ঈমানের ছয় স্তম্ভ' },
    summary: {
      en: 'The six beliefs at the heart of a Muslim’s creed: God, His angels, His books, His messengers, the Last Day, and divine decree.',
      bn: 'একজন মুসলিমের আকিদার কেন্দ্রে থাকা ছয়টি বিশ্বাস: আল্লাহ, তাঁর ফেরেশতা, তাঁর কিতাব, তাঁর রাসুলগণ, শেষ দিবস ও তাকদির।',
    },
    points: [
      {
        heading: { en: 'What iman includes', bn: 'ঈমানে যা যা অন্তর্ভুক্ত' },
        body: {
          en: 'While the pillars of Islam describe outward practice, the articles of iman describe inner belief. The Quran lists them together: "The Messenger believes in what was revealed to him from his Lord, and so do the believers. Each one believes in God, His angels, His books and His messengers" (2:285); and: "Believe in God, His messengers, His books, His angels and the Last Day" (4:136). To these five, the prophetic teaching adds belief in the divine decree (qadar), completing the six.',
          bn: 'ইসলামের স্তম্ভগুলো যেখানে বাইরের আমলের কথা বলে, ঈমানের স্তম্ভগুলো সেখানে অন্তরের বিশ্বাসের কথা বলে। কুরআন এগুলো একসঙ্গে উল্লেখ করেছে: "রাসূল ঈমান এনেছেন তাঁর রবের পক্ষ থেকে তাঁর ওপর যা নাজিল হয়েছে তার প্রতি, আর মুমিনরাও। প্রত্যেকেই ঈমান এনেছে আল্লাহ, তাঁর ফেরেশতাগণ, তাঁর কিতাবসমূহ ও তাঁর রাসূলগণের প্রতি" (২:২৮৫); এবং: "ঈমান আনো আল্লাহ, তাঁর রাসূলগণ, তাঁর কিতাবসমূহ, তাঁর ফেরেশতাগণ ও শেষ দিবসের প্রতি" (৪:১৩৬)। এই পাঁচটির সঙ্গে হাদিসে যুক্ত হয়েছে তাকদিরের প্রতি বিশ্বাস; এতে ছয়টি পূর্ণ হয়।',
        },
      },
      {
        heading: { en: 'One unified worldview', bn: 'একটি সংহত বিশ্বদৃষ্টি' },
        body: {
          en: 'The six articles fit together into a coherent picture. Belief in one God (tawhid) is the foundation; the angels are His unseen servants; the books are His guidance revealed across history (the scrolls of Abraham, the Torah, Psalms, Gospel and finally the Quran); the messengers are the humans He chose to deliver that guidance; the Last Day is the accounting where justice is completed; and qadar is the recognition that all of this unfolds within God’s knowledge and will. Each belief supports and explains the others.',
          bn: 'ছয়টি স্তম্ভ মিলে একটি সুসংগত ছবি তৈরি হয়। ভিত্তি হলো এক আল্লাহর প্রতি বিশ্বাস (তাওহিদ)। ফেরেশতারা তাঁর অদৃশ্য বান্দা। কিতাবগুলো ইতিহাসের নানা সময়ে নাজিল হওয়া তাঁর হিদায়াত (ইবরাহিমের সহিফা, তাওরাত, যাবুর, ইঞ্জিল এবং সবশেষে কুরআন)। রাসূলগণ সেই হিদায়াত পৌঁছে দেওয়ার জন্য তাঁর বাছাই করা মানুষ। শেষ দিবস হিসাবের দিন, যেদিন ন্যায়বিচার পূর্ণ হবে। আর তাকদির মানে এই স্বীকৃতি যে এসব কিছুই ঘটে আল্লাহর জ্ঞান ও ইচ্ছার ভেতরে। প্রতিটি বিশ্বাস অন্যগুলোকে শক্তি জোগায়, অন্যগুলোর অর্থ স্পষ্ট করে।',
        },
      },
      {
        heading: { en: 'Belief that shapes character', bn: 'যে বিশ্বাস চরিত্র গড়ে' },
        body: {
          en: 'These are not abstract propositions but convictions meant to shape how a person lives. Belief in the angels who record deeds encourages honesty in private; belief in the messengers gives a moral pattern to follow; belief in the Last Day frames every choice within a longer horizon of accountability and hope; and belief in qadar brings calm trust in times of both blessing and hardship. In the famous hadith of Gabriel, the Prophet ﷺ defined faith precisely by these articles — belief that then flowers into worship and good character.',
          bn: 'এগুলো নিছক তাত্ত্বিক কথা নয়, বরং এমন দৃঢ় বিশ্বাস যা মানুষের জীবনযাপন গড়ে দেয়। আমল লিখে রাখা ফেরেশতাদের প্রতি বিশ্বাস মানুষকে নির্জনেও সৎ থাকতে উৎসাহ দেয়। রাসূলগণের প্রতি বিশ্বাস অনুসরণ করার মতো নৈতিক আদর্শ দেয়। শেষ দিবসের প্রতি বিশ্বাস প্রতিটি সিদ্ধান্তকে জবাবদিহি ও আশার দীর্ঘ দিগন্তে দেখতে শেখায়। আর তাকদিরের প্রতি বিশ্বাস নেয়ামতে ও বিপদে, দুই সময়েই মনে শান্ত ভরসা এনে দেয়। জিবরিলের প্রসিদ্ধ হাদিসে নবী ﷺ ঠিক এই স্তম্ভগুলো দিয়েই ঈমানের সংজ্ঞা দিয়েছেন। এই বিশ্বাসই পরে ফুটে ওঠে ইবাদতে ও উত্তম চরিত্রে।',
        },
      },
    ],
  },
  {
    id: 'jesus-in-islam',
    emoji: '🕊️',
    kind: 'article',
    title: { en: 'Jesus (Isa) in Islam', bn: 'ইসলামে ঈসা (যিশু)' },
    summary: {
      en: 'The honoured place of Jesus as a mighty prophet and Messiah in Islam — what Muslims affirm about him, and where the Islamic view differs.',
      bn: 'ইসলামে মহান নবী ও মসিহ হিসেবে ঈসার সম্মানিত মর্যাদা: মুসলিমরা তাঁর সম্পর্কে কী বিশ্বাস করেন, আর কোথায় ইসলামের দৃষ্টিভঙ্গি আলাদা।',
    },
    points: [
      {
        heading: { en: 'A deeply honoured prophet', bn: 'গভীরভাবে সম্মানিত এক নবী' },
        body: {
          en: 'Jesus — Isa ibn Maryam — holds a place of great honour in Islam. He is named the Messiah (al-Masih), a "word" from God and a spirit from Him, and one of the mightiest of the messengers. The Quran affirms his miraculous birth to the Virgin Mary without a father: "the angels said: O Mary, God gives you good tidings of a word from Him, whose name will be the Messiah, Jesus, son of Mary, distinguished in this world and the Hereafter" (3:45). Mary herself is honoured as the greatest of women, with an entire chapter of the Quran named after her.',
          bn: 'ঈসা ইবন মারইয়াম ইসলামে অত্যন্ত সম্মানিত। কুরআন তাঁকে বলেছে মসিহ (আল-মাসিহ), আল্লাহর পক্ষ থেকে এক "কালিমা" এবং তাঁর পক্ষ থেকে এক রুহ। তিনি শ্রেষ্ঠ রাসূলদের একজন। কুরআন নিশ্চিত করে যে পিতা ছাড়াই কুমারী মারইয়ামের গর্ভে তাঁর অলৌকিক জন্ম হয়েছিল: "ফেরেশতারা বলল: হে মারইয়াম, আল্লাহ তোমাকে তাঁর পক্ষ থেকে একটি কালিমার সুসংবাদ দিচ্ছেন, যাঁর নাম হবে মসিহ, মারইয়ামের পুত্র ঈসা, দুনিয়া ও আখিরাতে সম্মানিত" (৩:৪৫)। মারইয়াম নিজেও নারীদের মধ্যে শ্রেষ্ঠ হিসেবে সম্মানিত; কুরআনের একটি পূর্ণ সূরা তাঁর নামে।',
        },
      },
      {
        heading: { en: 'A servant and messenger, not divine', bn: 'আল্লাহর বান্দা ও রাসূল, উপাস্য নন' },
        body: {
          en: 'Where the Islamic view differs from Christian doctrine is on the nature of Jesus. Islam holds that he was a human prophet — a servant of God raised to deliver God’s message — not God, nor the son of God. The Quran presents his own words as an infant: "Indeed, I am the servant of God. He has given me the Scripture and made me a prophet" (19:30). And it draws a direct comparison to Adam, who had no parents at all: "The example of Jesus before God is like that of Adam. He created him from dust, then said to him, Be, and he was" (3:59). A miraculous birth, Islam teaches, points to God’s power, not to divinity in the created being.',
          bn: 'ইসলামের দৃষ্টিভঙ্গি খ্রিস্টান মতবাদ থেকে আলাদা হয়ে যায় ঈসার সত্তা নিয়ে। ইসলামের বিশ্বাস, তিনি ছিলেন মানুষ নবী, আল্লাহর এক বান্দা, যাঁকে আল্লাহর বাণী পৌঁছাতে পাঠানো হয়েছিল। তিনি আল্লাহ নন, আল্লাহর পুত্রও নন। কুরআন শিশু অবস্থায় তাঁর নিজের মুখের কথা তুলে ধরেছে: "নিশ্চয়ই আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং নবী বানিয়েছেন" (১৯:৩০)। আর কুরআন সরাসরি তাঁর তুলনা টেনেছে আদমের সঙ্গে, যাঁর বাবা-মা কেউই ছিলেন না: "আল্লাহর কাছে ঈসার দৃষ্টান্ত আদমের মতো। তিনি তাঁকে মাটি থেকে সৃষ্টি করলেন, তারপর বললেন, হও, আর সে হয়ে গেল" (৩:৫৯)। ইসলাম শেখায়, অলৌকিক জন্ম আল্লাহর কুদরতের প্রমাণ, সৃষ্ট সত্তার ঈশ্বরত্বের নয়।',
        },
      },
      {
        heading: { en: 'Common ground and continuity', bn: 'অভিন্ন ভিত্তি ও ধারাবাহিকতা' },
        body: {
          en: 'For Muslims, Jesus is not a rival figure but a beloved brother in the single chain of prophets carrying one message: worship God alone. He performed miracles by God’s permission, was given a scripture (the Injil/Gospel), and called his people to righteousness. Islam holds that he was not crucified but raised by God, and Islamic tradition speaks of his return before the end of time. To believe in Jesus — truly and rightly — is in fact a requirement of being Muslim. This shared reverence is often a meaningful bridge in conversation between Muslims and Christians.',
          bn: 'মুসলিমদের কাছে ঈসা কোনো প্রতিপক্ষ নন, বরং নবীদের সেই একই ধারার প্রিয় এক ভাই, যাঁরা সবাই একই বার্তা বহন করেছেন: কেবল আল্লাহর ইবাদত করো। তিনি আল্লাহর অনুমতিতে মুজিজা দেখিয়েছেন, তাঁকে কিতাব (ইঞ্জিল) দেওয়া হয়েছিল, আর তিনি তাঁর জাতিকে সৎপথে ডেকেছিলেন। ইসলামের বিশ্বাস, তাঁকে ক্রুশবিদ্ধ করা হয়নি, বরং আল্লাহ তাঁকে নিজের কাছে তুলে নিয়েছেন; আর হাদিসে কিয়ামতের আগে তাঁর ফিরে আসার কথা আছে। আসলে ঈসার প্রতি সঠিকভাবে ঈমান আনা মুসলিম হওয়ারই শর্ত। এই অভিন্ন শ্রদ্ধা মুসলিম ও খ্রিস্টানদের আলাপে প্রায়ই অর্থবহ এক সেতু হয়ে ওঠে।',
        },
      },
    ],
  },
  {
    id: 'angels-in-islam',
    emoji: '🕊',
    kind: 'article',
    title: { en: 'Belief in the Angels', bn: 'ফেরেশতায় বিশ্বাস' },
    summary: {
      en: 'Who the angels are in Islam, what they do, and why belief in the unseen is part of a coherent worldview.',
      bn: 'ইসলামে ফেরেশতারা কারা, তারা কী করে, আর অদৃশ্যে বিশ্বাস কেন একটি সুসংগত বিশ্বদৃষ্টির অংশ।',
    },
    points: [
      {
        heading: { en: 'Beings of light and pure obedience', bn: 'নূরের সৃষ্টি, খাঁটি আনুগত্য' },
        body: {
          en: 'Angels (mala’ika) are a class of beings created by God from light, existing in the unseen realm. Unlike humans, they have no free will to disobey; they act only as God commands: "They do not disobey God in what He commands them, and they do what they are commanded" (66:6). They are not gods, nor God’s children, nor objects of worship — they are honoured servants. The Quran describes them with varying forms and powers: "Praise be to God, Originator of the heavens and earth, who made the angels messengers with wings — two, three or four" (35:1).',
          bn: 'ফেরেশতারা (মালাইকা) আল্লাহর এক শ্রেণির সৃষ্টি; তিনি তাদের নূর থেকে সৃষ্টি করেছেন, আর তারা থাকে অদৃশ্য জগতে। মানুষের মতো নাফরমানি করার স্বাধীন ইচ্ছা তাদের নেই; তারা কেবল আল্লাহর হুকুম মেনে চলে: "আল্লাহ তাদের যা আদেশ করেন, তাতে তারা অবাধ্য হয় না, আর তাদের যা আদেশ করা হয়, তা-ই করে" (৬৬:৬)। তারা উপাস্য নয়, আল্লাহর সন্তান নয়, ইবাদতের পাত্রও নয়। তারা আল্লাহর সম্মানিত বান্দা। কুরআন তাদের নানা আকৃতি ও শক্তির কথা বলে: "সমস্ত প্রশংসা আল্লাহর, আসমান ও জমিনের স্রষ্টা, যিনি ফেরেশতাদের বার্তাবাহক করেছেন দুই, তিন ও চার পাখাবিশিষ্ট" (৩৫:১)।',
        },
      },
      {
        heading: { en: 'Their roles in creation', bn: 'সৃষ্টিতে তাদের ভূমিকা' },
        body: {
          en: 'The Quran and authentic tradition describe angels carrying out many appointed tasks: Gabriel (Jibril) conveyed revelation to the prophets; angels record every human deed; some are entrusted with natural phenomena by God’s command; others will be present at death and at the resurrection. Belief in the angels reminds a person that the seen world is not the whole of reality, and that our lives unfold within a larger order of purpose and accountability that we do not fully perceive.',
          bn: 'কুরআন ও সহিহ হাদিসে ফেরেশতাদের নানা নির্ধারিত দায়িত্বের কথা আছে: জিবরিল নবীদের কাছে ওহি পৌঁছে দিতেন; ফেরেশতারা মানুষের প্রতিটি আমল লিখে রাখে; কেউ কেউ আল্লাহর হুকুমে প্রকৃতির নানা কাজের দায়িত্বে আছে; আবার কেউ মৃত্যুর সময় ও পুনরুত্থানের দিন উপস্থিত থাকবে। ফেরেশতাদের প্রতি বিশ্বাস মানুষকে মনে করিয়ে দেয়, চোখে দেখা জগৎই সব নয়। আমাদের জীবন চলছে উদ্দেশ্য ও জবাবদিহির এক বৃহত্তর বিধানের ভেতরে, যা আমরা পুরোপুরি টের পাই না।',
        },
      },
      {
        heading: { en: 'Believing in the unseen', bn: 'অদৃশ্যে বিশ্বাস' },
        body: {
          en: 'A modern reader may ask why one should accept beings that cannot be observed. Islam’s answer is that belief in the angels is part of trusting a truthful source — the revelation whose overall case one has reason to accept — rather than a leap in the dark. It is also reasonable in principle: a Creator of the vast unseen dimensions of the universe may well have created orders of life beyond human sight. What Islam asks is intellectual humility about a reality larger than the visible, not blind credulity.',
          bn: 'আধুনিক কোনো পাঠক প্রশ্ন করতে পারেন: যাদের দেখা যায় না, তাদের অস্তিত্ব মেনে নেব কেন? ইসলামের উত্তর হলো, ফেরেশতাদের প্রতি বিশ্বাস অন্ধকারে ঝাঁপ দেওয়া নয়। এটা এক সত্যবাদী উৎসের ওপর আস্থারই অংশ, অর্থাৎ সেই ওহির ওপর, যার সামগ্রিক দাবি মেনে নেওয়ার যুক্তিসংগত কারণ আছে। নীতিগতভাবেও কথাটা যুক্তিসংগত: মহাবিশ্বের বিশাল অদৃশ্য জগৎ যিনি সৃষ্টি করেছেন, তিনি মানুষের দৃষ্টির বাইরেও নানা প্রাণ সৃষ্টি করে থাকতে পারেন। ইসলাম চায় দৃশ্যমানের চেয়ে বড় বাস্তবতার সামনে বুদ্ধির বিনয়, অন্ধ বিশ্বাস নয়।',
        },
      },
    ],
  },
  {
    id: 'meaning-of-worship',
    emoji: '🤲',
    kind: 'article',
    title: { en: 'What Worship (Ibadah) Really Means', bn: 'ইবাদত আসলে কী' },
    summary: {
      en: 'Why Islam frames the purpose of life as worship — and how that word means far more than ritual alone.',
      bn: 'ইসলাম কেন জীবনের উদ্দেশ্যকে ইবাদত বলে, আর এই শব্দটি কেন নিছক আনুষ্ঠানিক উপাসনার চেয়ে অনেক বেশি কিছু বোঝায়।',
    },
    points: [
      {
        heading: { en: 'The stated purpose of creation', bn: 'সৃষ্টির ঘোষিত উদ্দেশ্য' },
        body: {
          en: 'The Quran states the purpose of human existence directly: "I did not create the jinn and mankind except to worship Me" (51:56). At first hearing this can sound narrow — as if life were only rituals. But the Arabic word ‘ibadah is far wider than ceremony. Its root carries the sense of loving devotion, humble service and willing submission to the One who deserves it. To be created "for worship" is to be created for a relationship of grateful, purposeful living oriented toward God.',
          bn: 'কুরআন মানুষের অস্তিত্বের উদ্দেশ্য সরাসরি জানিয়ে দেয়: "আমি জিন ও মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি" (৫১:৫৬)। প্রথমবার শুনলে কথাটা সংকীর্ণ মনে হতে পারে, যেন জীবন মানেই শুধু কিছু আনুষ্ঠানিকতা। কিন্তু আরবি \'ইবাদত\' শব্দটি আনুষ্ঠানিক উপাসনার চেয়ে অনেক ব্যাপক। এর মূলে আছে ভালোবাসাভরা আনুগত্য, বিনয়ী সেবা, আর যিনি এর হকদার তাঁর কাছে স্বেচ্ছায় নিজেকে সঁপে দেওয়া। কাজেই "ইবাদতের জন্য" সৃষ্টি হওয়া মানে আল্লাহমুখী এক কৃতজ্ঞ, উদ্দেশ্যপূর্ণ জীবনের সম্পর্কের জন্য সৃষ্টি হওয়া।',
        },
      },
      {
        heading: { en: 'All of life as worship', bn: 'গোটা জীবনই ইবাদত' },
        body: {
          en: 'In Islam, formal acts like prayer and fasting are the core of worship, but they are not its limit. Any permissible act done sincerely for God’s sake becomes worship: honest work, kindness to parents, a smile, removing harm from a road, seeking knowledge, feeding one’s family. The Prophet ﷺ taught that even the morsel of food a person places in their spouse’s mouth is rewarded. The believer is invited to make the whole of ordinary life meaningful by orienting its intention toward God: "Say, my prayer, my rites, my living and my dying are for God, Lord of the worlds" (6:162).',
          bn: 'ইসলামে নামাজ-রোজার মতো আনুষ্ঠানিক আমল ইবাদতের মূল, কিন্তু ইবাদত এখানেই শেষ নয়। আল্লাহর সন্তুষ্টির জন্য আন্তরিকভাবে করা যেকোনো হালাল কাজই ইবাদত হয়ে যায়: সৎ পরিশ্রম, বাবা-মায়ের সঙ্গে সদাচরণ, একটু হাসিমুখ, রাস্তা থেকে কষ্টদায়ক জিনিস সরানো, জ্ঞান অর্জন, পরিবারের মুখে খাবার তুলে দেওয়া। নবী ﷺ শিখিয়েছেন, স্ত্রীর মুখে তুলে দেওয়া এক লোকমা খাবারেও সওয়াব আছে। মুমিনকে ডাকা হচ্ছে, নিয়তকে আল্লাহমুখী করে সাধারণ জীবনের পুরোটাকেই অর্থবহ করে তুলতে: "বলো, আমার নামাজ, আমার কুরবানি, আমার জীবন ও আমার মৃত্যু জগতসমূহের রব আল্লাহরই জন্য" (৬:১৬২)।',
        },
      },
      {
        heading: { en: 'Freedom in serving God alone', bn: 'কেবল আল্লাহর বান্দা হওয়াতেই স্বাধীনতা' },
        body: {
          en: 'Islam presents worship of God not as bondage but as liberation. Every human being serves something — wealth, status, desire, the opinions of others, an ideology. Islam teaches that to consciously serve the Creator alone is to be freed from servitude to all these lesser masters, each of which is unstable and ultimately unsatisfying. In the daily prayer the believer says, "You alone we worship, and You alone we ask for help" (1:5) — a declaration that anchors dignity and freedom in devotion to the One rather than the many.',
          bn: 'ইসলামের দৃষ্টিতে আল্লাহর ইবাদত শৃঙ্খল নয়, মুক্তি। প্রত্যেক মানুষই কোনো না কোনো কিছুর গোলামি করে: টাকা-পয়সা, পদমর্যাদা, প্রবৃত্তি, লোকে কী বলবে, কিংবা কোনো মতাদর্শ। ইসলাম শেখায়, জেনে-বুঝে কেবল স্রষ্টার বান্দা হওয়া মানে এই সব ছোট ছোট প্রভুর গোলামি থেকে মুক্তি পাওয়া। এদের প্রত্যেকটিই অস্থির, আর শেষ পর্যন্ত কোনোটিই মনকে তৃপ্ত করতে পারে না। প্রতিদিনের নামাজে মুমিন বলে: "আমরা কেবল তোমারই ইবাদত করি, আর কেবল তোমারই কাছে সাহায্য চাই" (১:৫)। এই ঘোষণা মানুষের মর্যাদা ও স্বাধীনতাকে বেঁধে দেয় বহুর প্রতি নয়, এক আল্লাহর প্রতি নিবেদনে।',
        },
      },
    ],
  },
  {
    id: 'sin-and-repentance',
    emoji: '🪷',
    kind: 'article',
    title: { en: 'Sin, Mercy and Repentance (Tawbah)', bn: 'গুনাহ, রহমত ও তওবা' },
    summary: {
      en: 'How Islam understands sin, why there is no despair, and the direct path of returning to God without any intermediary.',
      bn: 'ইসলাম গুনাহকে কীভাবে দেখে, কেন হতাশার কোনো জায়গা নেই, আর কোনো মধ্যস্থতাকারী ছাড়াই সরাসরি আল্লাহর দিকে ফেরার পথ।',
    },
    points: [
      {
        heading: { en: 'No inherited sin', bn: 'জন্মগত কোনো গুনাহ নেই' },
        body: {
          en: 'Islam teaches that every person is born in a state of natural purity (fitrah), not carrying the guilt of anyone else’s sin. Adam and Eve’s lapse in the garden was their own, they repented, and God forgave them; it is not inherited by their descendants. "No bearer of burdens shall bear the burden of another" (the Quran repeats this principle in several places). Sin, in Islam, is a real wrong that harms the soul, but it is something a person does — not a condition they are born condemned in. This shapes a hopeful view of the human being.',
          bn: 'ইসলাম শেখায়, প্রত্যেক মানুষ জন্মায় স্বভাবগত পবিত্রতা (ফিতরাহ) নিয়ে; অন্য কারও গুনাহের দায় তার ঘাড়ে থাকে না। জান্নাতে আদম ও হাওয়ার ভুল ছিল তাঁদের নিজেদের। তাঁরা তওবা করেছিলেন, আর আল্লাহ তাঁদের মাফ করে দিয়েছিলেন। সে ভুল বংশধরদের ওপর উত্তরাধিকারসূত্রে বর্তায় না। "কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না" (কুরআনে এই নীতি একাধিক জায়গায় এসেছে)। ইসলামে গুনাহ সত্যিকারের অন্যায়, যা আত্মার ক্ষতি করে; তবে তা মানুষের নিজের করা কাজ, জন্ম থেকে দণ্ডিত হয়ে থাকার কোনো অবস্থা নয়। এ থেকেই মানুষ সম্পর্কে এক আশাভরা দৃষ্টিভঙ্গি তৈরি হয়।',
        },
      },
      {
        heading: { en: 'The door of mercy never closes', bn: 'রহমতের দরজা কখনো বন্ধ হয় না' },
        body: {
          en: 'The Quran’s message to the sinner is overwhelmingly one of hope. "Say: O My servants who have transgressed against themselves, do not despair of the mercy of God. Indeed, God forgives all sins. He is the Forgiving, the Merciful" (39:53). God is described as loving those who turn back to Him: "Indeed, God loves those who are constantly repentant" (2:222). Sincere repentance — tawbah — has recognised conditions: to stop the wrong, to feel genuine regret, to resolve not to return, and, where a person was wronged, to make it right. God’s mercy, the Quran insists, outweighs His wrath.',
          bn: 'গুনাহগারের প্রতি কুরআনের বার্তায় আশাই সবচেয়ে প্রবল। "বলো: হে আমার বান্দারা, যারা নিজেদের ওপর সীমালঙ্ঘন করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না। নিশ্চয়ই আল্লাহ সব গুনাহ মাফ করে দেন। তিনি ক্ষমাশীল, পরম দয়ালু" (৩৯:৫৩)। কুরআন বলছে, যারা তাঁর দিকে ফিরে আসে, আল্লাহ তাদের ভালোবাসেন: "নিশ্চয়ই আল্লাহ বেশি বেশি তওবাকারীদের ভালোবাসেন" (২:২২২)। খাঁটি তওবার কিছু স্বীকৃত শর্ত আছে: গুনাহের কাজটি ছেড়ে দেওয়া, সত্যিকারের অনুতপ্ত হওয়া, আর কখনো ফিরে না যাওয়ার দৃঢ় সংকল্প করা, এবং কারও হক নষ্ট হয়ে থাকলে তা ফিরিয়ে দেওয়া। কুরআন জোর দিয়ে জানায়, আল্লাহর রহমত তাঁর ক্রোধের চেয়ে বড়।',
        },
      },
      {
        heading: { en: 'A direct return, no intermediary', bn: 'সরাসরি ফেরা, মাঝখানে কেউ নেই' },
        body: {
          en: 'In Islam a person repents to God directly. There is no priest to confess to, no ritual of absolution required, and no need for anyone to bear the punishment on one’s behalf. At any moment — in prayer, in private, in a whisper of the heart — a person can turn back to God and ask forgiveness. "And whoever does a wrong or wrongs himself but then seeks forgiveness of God will find God Forgiving and Merciful" (4:110). This directness reflects tawhid itself: the same One who is worshipped without intermediary is also the One who forgives without intermediary.',
          bn: 'ইসলামে মানুষ সরাসরি আল্লাহর কাছে তওবা করে। কোনো পুরোহিতের কাছে গিয়ে গুনাহ স্বীকার করতে হয় না, গুনাহ মাফের কোনো অনুষ্ঠান লাগে না, আর নিজের হয়ে অন্য কাউকে শাস্তি বহন করারও প্রয়োজন নেই। নামাজে, নির্জনে, কিংবা মনে মনে নীরবে, যেকোনো মুহূর্তে মানুষ আল্লাহর দিকে ফিরে মাফ চাইতে পারে। "আর যে মন্দ কাজ করে বা নিজের ওপর জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে ক্ষমাশীল ও দয়ালু পাবে" (৪:১১০)। এই সরাসরি সম্পর্ক তাওহিদেরই প্রতিফলন: যাঁর ইবাদত হয় কোনো মধ্যস্থতা ছাড়া, মাফও করেন তিনি কোনো মধ্যস্থতা ছাড়া।',
        },
      },
    ],
  },
  {
    id: 'salah-prayer',
    emoji: '🧎',
    kind: 'article',
    title: { en: 'Prayer (Salah) in Islam', bn: 'ইসলামে নামাজ (সালাত)' },
    summary: {
      en: 'The meaning of the five daily prayers, what they involve, and the inner purpose behind the outward form.',
      bn: 'পাঁচ ওয়াক্ত নামাজের তাৎপর্য, নামাজে কী কী থাকে, আর বাইরের রূপের পেছনে ভেতরের উদ্দেশ্য।',
    },
    points: [
      {
        heading: { en: 'A rhythm of remembrance', bn: 'জিকিরের এক ছন্দ' },
        body: {
          en: 'Salah is the formal prayer performed five times a day — at dawn, midday, afternoon, sunset and night. Rather than a single weekly service, Islam distributes worship across the whole day, so that a person never drifts far from the remembrance of God before returning to it. The Quran ties prayer to God’s own instruction to Moses: "Indeed, I am God. There is no deity except Me, so worship Me and establish prayer for My remembrance" (20:14). It is the first act a Muslim will be asked about on the Day of Judgment.',
          bn: 'সালাত হলো দিনে পাঁচবার আদায় করা নির্ধারিত নামাজ: ভোরে, দুপুরে, বিকেলে, সূর্যাস্তে ও রাতে। সপ্তাহে একবারের কোনো উপাসনার বদলে ইসলাম ইবাদতকে ছড়িয়ে দিয়েছে সারা দিনজুড়ে, যাতে আল্লাহর জিকির থেকে মানুষ খুব দূরে সরে যাওয়ার আগেই আবার ফিরে আসে। কুরআন নামাজকে যুক্ত করেছে মুসার প্রতি আল্লাহর নিজের নির্দেশের সঙ্গে: "নিশ্চয়ই আমিই আল্লাহ। আমি ছাড়া কোনো উপাস্য নেই, সুতরাং আমার ইবাদত করো এবং আমার স্মরণে নামাজ কায়েম করো" (২০:১৪)। কিয়ামতের দিন মুসলিমকে সবার আগে নামাজের হিসাবই জিজ্ঞেস করা হবে।',
        },
      },
      {
        heading: { en: 'What the prayer involves', bn: 'নামাজে কী থাকে' },
        body: {
          en: 'A Muslim prepares for prayer with wudu (a simple washing) and faces the Kaaba in Mecca, uniting worshippers worldwide toward a single point. The prayer weaves together standing, bowing and prostrating — postures of humility — with recitation of the Quran, glorification and supplication. The lowest posture, prostration with the forehead on the ground, expresses the heart of worship: the created being at its most humble before the Creator. The whole body, the tongue and the mind are engaged together, so that worship is not merely felt but enacted.',
          bn: 'নামাজের আগে মুসলিম অজু করে নেয়, তারপর মক্কার কাবার দিকে মুখ করে দাঁড়ায়। এভাবে সারা বিশ্বের মুসল্লিরা একই কেন্দ্রের দিকে মুখ করে এক হয়ে যায়। নামাজে দাঁড়ানো, রুকু ও সিজদার মতো বিনয়ের ভঙ্গির সঙ্গে গাঁথা থাকে কুরআন তিলাওয়াত, তাসবিহ ও দোয়া। সবচেয়ে নিচু ভঙ্গি হলো মাটিতে কপাল রেখে সিজদা। এতেই ইবাদতের মর্ম ফুটে ওঠে: স্রষ্টার সামনে সৃষ্টি তার সবচেয়ে বিনীত অবস্থায়। শরীর, মুখ আর মন একসঙ্গে যুক্ত থাকে, ফলে ইবাদত শুধু অনুভবে থাকে না, কাজেও রূপ পায়।',
        },
      },
      {
        heading: { en: 'Form serving the heart', bn: 'বাইরের রূপ, অন্তরের জন্য' },
        body: {
          en: 'Some ask why worship needs a fixed form at all. Islam’s answer is that the outward discipline is meant to cultivate an inner state, and to protect worship from being reduced to fleeting moods. Done with presence of heart, prayer is meant to restrain a person from wrongdoing: "Establish prayer; indeed, prayer prohibits immorality and wrongdoing" (29:45). It is not a favour done to God, who needs nothing, but a gift to the worshipper — a daily reset of perspective, humility and connection that steadies the soul amid the pressures of life.',
          bn: 'কেউ কেউ প্রশ্ন করেন, ইবাদতের জন্য আদৌ নির্দিষ্ট কোনো রূপ লাগবে কেন? ইসলামের উত্তর: বাইরের এই নিয়মানুবর্তিতার উদ্দেশ্য ভেতরে একটা অবস্থা গড়ে তোলা, আর ইবাদতকে ক্ষণিকের মেজাজের হাতে ছেড়ে না দেওয়া। মন হাজির রেখে নামাজ পড়লে তা মানুষকে অন্যায় থেকে ফিরিয়ে রাখে: "নামাজ কায়েম করো; নিশ্চয়ই নামাজ অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে" (২৯:৪৫)। নামাজ পড়ে আল্লাহর প্রতি কোনো অনুগ্রহ করা হয় না; তিনি কোনো কিছুর মুখাপেক্ষী নন। বরং এটা নামাজির জন্য এক উপহার: প্রতিদিন নতুন করে জীবনকে দেখার চোখ, বিনয় আর আল্লাহর সঙ্গে সংযোগ ফিরে পাওয়া, যা জীবনের চাপের মধ্যে মনকে স্থির রাখে।',
        },
      },
    ],
  },
  {
    id: 'sawm-fasting',
    emoji: '🌙',
    kind: 'article',
    title: { en: 'Fasting and Ramadan (Sawm)', bn: 'রোজা ও রমজান (সাওম)' },
    summary: {
      en: 'Why Muslims fast the month of Ramadan, what the fast involves, and the spiritual and social purposes behind it.',
      bn: 'মুসলিমরা কেন রমজান মাসে রোজা রাখেন, রোজায় কী কী করতে হয়, আর এর পেছনের আধ্যাত্মিক ও সামাজিক উদ্দেশ্য।',
    },
    points: [
      {
        heading: { en: 'An ancient act of devotion', bn: 'ইবাদতের এক প্রাচীন রূপ' },
        body: {
          en: 'Fasting is one of the oldest forms of worship, practised in many faith traditions. The Quran presents it as a continuation of that heritage: "O you who believe, fasting is prescribed for you as it was prescribed for those before you, that you may become God-conscious" (2:183). During Ramadan — the month in which the Quran began to be revealed — Muslims abstain from food, drink and marital relations from dawn until sunset, then break the fast each evening, often in the company of family and community.',
          bn: 'রোজা ইবাদতের সবচেয়ে পুরোনো রূপগুলোর একটি; বহু ধর্মের ঐতিহ্যে এর চর্চা আছে। কুরআন রোজাকে সেই ধারারই ধারাবাহিকতা হিসেবে তুলে ধরে: "হে ঈমানদারগণ, তোমাদের ওপর রোজা ফরজ করা হয়েছে, যেমন ফরজ করা হয়েছিল তোমাদের পূর্ববর্তীদের ওপর, যাতে তোমরা আল্লাহভীরু হও" (২:১৮৩)। রমজান সেই মাস, যে মাসে কুরআন নাজিল হওয়া শুরু হয়। এ মাসে মুসলিমরা ভোর থেকে সূর্যাস্ত পর্যন্ত খাবার, পানীয় ও স্বামী-স্ত্রীর মিলন থেকে বিরত থাকেন। প্রতি সন্ধ্যায় তাঁরা ইফতার করেন, প্রায়ই পরিবার ও আশপাশের মানুষের সঙ্গে মিলে।',
        },
      },
      {
        heading: { en: 'Training the soul', bn: 'আত্মার প্রশিক্ষণ' },
        body: {
          en: 'The stated aim of fasting is taqwa — God-consciousness and self-restraint. By voluntarily setting aside even lawful food and drink for God’s sake, a person strengthens their will over their appetites and learns that they are more than their desires. Fasting is not only of the stomach: the tradition teaches that a fasting person should also guard the tongue, the eyes and the temper. In this way Ramadan becomes an annual month of intensive spiritual training — more prayer, more Quran, more charity — that aims to reset a person’s character for the year ahead.',
          bn: 'রোজার ঘোষিত লক্ষ্য তাকওয়া: আল্লাহ-সচেতনতা ও আত্মসংযম। আল্লাহর জন্য স্বেচ্ছায় হালাল খাবার-পানীয়ও ছেড়ে দিয়ে মানুষ প্রবৃত্তির ওপর নিজের ইচ্ছাশক্তিকে মজবুত করে, আর বুঝতে শেখে যে সে কেবল তার চাহিদার সমষ্টি নয়। রোজা শুধু পেটের নয়। ইসলামের শিক্ষা হলো, রোজাদারকে মুখ, চোখ ও রাগও সংযত রাখতে হবে। এভাবে রমজান হয়ে ওঠে প্রতি বছরের এক নিবিড় আধ্যাত্মিক প্রশিক্ষণের মাস: বেশি নামাজ, বেশি কুরআন, বেশি দান। লক্ষ্য হলো, সামনের বছরের জন্য মানুষের চরিত্রকে নতুন করে গুছিয়ে নেওয়া।',
        },
      },
      {
        heading: { en: 'Empathy and community', bn: 'সহমর্মিতা ও সামাজিক বন্ধন' },
        body: {
          en: 'Fasting also has a deeply social dimension. Feeling genuine hunger and thirst awakens empathy for the poor who face them without choice, prompting increased generosity — Ramadan is the year’s peak season of charity for many Muslims. Because the whole community fasts together and gathers to break the fast and pray at night, the month strengthens bonds of family and neighbourhood. Islam does not command harm to the body: the sick, travellers, the pregnant, the elderly and others are exempted (2:185), for the goal is devotion and mercy, not hardship for its own sake.',
          bn: 'রোজার গভীর এক সামাজিক দিকও আছে। নিজে সত্যিকারের ক্ষুধা-তৃষ্ণা টের পেলে সেই গরিবদের প্রতি সহমর্মিতা জাগে, যাদের নিরুপায় হয়ে এভাবেই দিন কাটাতে হয়। ফলে দানের হাত খুলে যায়; বহু মুসলিমের কাছে রমজানই বছরের সবচেয়ে বেশি দান-সদকার মৌসুম। পুরো সমাজ একসঙ্গে রোজা রাখে, ইফতারে আর রাতের নামাজে একত্র হয়; তাই এ মাস পরিবার ও প্রতিবেশীর বন্ধন মজবুত করে। ইসলাম শরীরের ক্ষতি করতে বলে না: অসুস্থ, মুসাফির, গর্ভবতী, বয়োবৃদ্ধ ও আরও কয়েক শ্রেণির মানুষকে ছাড় দেওয়া হয়েছে (২:১৮৫)। কারণ লক্ষ্য হলো ইবাদত ও রহমত, কষ্টের জন্য কষ্ট নয়।',
        },
      },
    ],
  },
  {
    id: 'quran-and-earlier-scriptures',
    emoji: '📖',
    kind: 'article',
    title: { en: 'The Quran and Earlier Scriptures', bn: 'কুরআন ও পূর্ববর্তী কিতাবসমূহ' },
    summary: {
      en: 'How Islam relates the Quran to the Torah, Psalms and Gospel — affirming their divine origin while explaining the Quran’s distinct role.',
      bn: 'তাওরাত, যাবুর ও ইঞ্জিলের সঙ্গে কুরআনের সম্পর্ক ইসলাম কীভাবে দেখে: সেগুলোর আসমানি উৎস স্বীকার করে, আবার কুরআনের আলাদা ভূমিকাও ব্যাখ্যা করে।',
    },
    points: [
      {
        heading: { en: 'Belief in the revealed books', bn: 'নাজিলকৃত কিতাবসমূহে বিশ্বাস' },
        body: {
          en: 'A Muslim is required to believe not only in the Quran but in the earlier scriptures God revealed: the scrolls of Abraham, the Torah (Tawrat) given to Moses, the Psalms (Zabur) given to David, and the Gospel (Injil) given to Jesus. The Quran speaks of them with reverence as light and guidance in their time: "Indeed, We sent down the Torah, in which was guidance and light" (5:44), and describes the Gospel likewise (5:46). Rejecting these earlier revelations is not the Islamic position; honouring them is part of the faith.',
          bn: 'একজন মুসলিমকে শুধু কুরআনে নয়, আল্লাহর নাজিল করা আগের কিতাবগুলোর প্রতিও ঈমান আনতে হয়: ইবরাহিমের সহিফা, মুসাকে দেওয়া তাওরাত, দাউদকে দেওয়া যাবুর এবং ঈসাকে দেওয়া ইঞ্জিল। কুরআন এগুলোর কথা বলে শ্রদ্ধার সঙ্গে, নিজ নিজ যুগের আলো ও হিদায়াত হিসেবে: "নিশ্চয়ই আমি তাওরাত নাজিল করেছি, যাতে ছিল হিদায়াত ও আলো" (৫:৪৪); ইঞ্জিলের কথাও একইভাবে বলেছে (৫:৪৬)। আগের এসব ওহিকে অস্বীকার করা ইসলামের অবস্থান নয়; বরং এগুলোকে সম্মান করা ঈমানেরই অংশ।',
        },
      },
      {
        heading: { en: 'Confirming and guarding', bn: 'সত্যায়ন ও তত্ত্বাবধান' },
        body: {
          en: 'The Quran describes itself as both confirming the truth in earlier scriptures and serving as a criterion over them: "And We revealed to you the Book in truth, confirming that which preceded it of the Scripture and as a guardian over it" (5:48). On this view the essential message — worship the one God, live justly, prepare for the hereafter — is one continuous truth across all the prophets. Where later human transmission introduced additions or alterations, the Quran comes to restore and settle the original message, not to abolish it.',
          bn: 'কুরআন নিজেকে আগের কিতাবগুলোর সত্যের সত্যায়নকারী বলে, আবার সেগুলোর ওপর মানদণ্ডও বলে: "আর আমি তোমার প্রতি সত্যসহ কিতাব নাজিল করেছি, যা এর আগের কিতাবের সত্যায়নকারী এবং তার তত্ত্বাবধায়ক" (৫:৪৮)। এই দৃষ্টিতে মূল বার্তা সব নবীর মধ্য দিয়ে একই অবিচ্ছিন্ন সত্য: এক আল্লাহর ইবাদত করো, ন্যায়ের পথে চলো, আখিরাতের প্রস্তুতি নাও। পরে মানুষের হাতে বর্ণনার ধারায় যেখানে সংযোজন বা পরিবর্তন ঢুকেছে, সেখানে কুরআন এসেছে মূল বার্তাকে আবার প্রতিষ্ঠা করতে ও চূড়ান্ত মীমাংসা দিতে, বাতিল করতে নয়।',
        },
      },
      {
        heading: { en: 'One family of faith', bn: 'ঈমানের এক পরিবার' },
        body: {
          en: 'Because of this shared lineage, Muslims are taught to address the People of the Book — Jews and Christians — with a recognition of common roots. The Quran instructs the believers to say: "We believe in what has been revealed to us and revealed to you; our God and your God is one, and to Him we submit" (a principle expressed in 29:46). Belief in "no distinction between any of His messengers" (2:285) means a Muslim reveres Moses and Jesus alongside Muhammad ﷺ. The Quran, in this framing, is not a new religion but the final chapter of a very old one.',
          bn: 'এই অভিন্ন ধারার কারণে মুসলিমদের শেখানো হয়, আহলে কিতাব অর্থাৎ ইহুদি ও খ্রিস্টানদের সঙ্গে কথা বলতে হবে অভিন্ন শিকড়ের কথা মনে রেখে। কুরআন মুমিনদের বলতে শেখায়: "আমরা ঈমান এনেছি আমাদের প্রতি যা নাজিল হয়েছে এবং তোমাদের প্রতি যা নাজিল হয়েছে তার ওপর; আমাদের ইলাহ ও তোমাদের ইলাহ একই, আর আমরা তাঁরই কাছে আত্মসমর্পিত" (এই নীতি এসেছে ২৯:৪৬-এ)। "তাঁর রাসূলদের কারও মধ্যে আমরা পার্থক্য করি না" (২:২৮৫), এই বিশ্বাসের অর্থ হলো, একজন মুসলিম মুহাম্মাদ ﷺ-এর পাশাপাশি মুসা ও ঈসাকেও শ্রদ্ধা করে। এই দৃষ্টিতে কুরআন কোনো নতুন ধর্ম নয়, বরং অতি প্রাচীন এক দ্বীনের শেষ অধ্যায়।',
        },
      },
    ],
  },
  {
    id: 'zakat-charity',
    emoji: '💰',
    kind: 'article',
    title: { en: 'Zakat and Charity', bn: 'যাকাত ও দান' },
    summary: {
      en: 'The third pillar of Islam: an obligatory purifying charity on wealth, alongside a wider culture of voluntary giving.',
      bn: 'ইসলামের তৃতীয় স্তম্ভ: সম্পদকে পবিত্র করার ফরজ দান, সঙ্গে স্বেচ্ছায় দান-সদকার এক ব্যাপক সংস্কৃতি।',
    },
    points: [
      {
        heading: { en: 'A right of the poor, not a favour', bn: 'গরিবের হক, অনুগ্রহ নয়' },
        body: {
          en: 'Zakat is an annual obligation on Muslims whose wealth reaches a minimum threshold (nisab) and has been held for a full year. The standard rate on cash, gold and trade goods is 2.5%. It is not viewed as an optional donation but as a due share that the wealthy owe: "and those in whose wealth is a recognised right for the beggar and the deprived" (a theme of 70:24-25). The Quran repeatedly pairs it with prayer — "establish prayer and give zakat" (2:110) — linking devotion to God with responsibility toward people.',
          bn: 'যেসব মুসলিমের সম্পদ নির্দিষ্ট ন্যূনতম পরিমাণে (নিসাব) পৌঁছে এবং পুরো এক বছর হাতে থাকে, তাঁদের ওপর প্রতি বছর যাকাত ফরজ। নগদ অর্থ, সোনা ও ব্যবসার পণ্যের ওপর সাধারণ হার ২.৫%। এটা ইচ্ছাধীন কোনো দান নয়, বরং ধনীর কাছে গরিবের পাওনা এক নির্ধারিত অংশ: "আর যাদের সম্পদে প্রার্থী ও বঞ্চিতের নির্ধারিত হক আছে" (৭০:২৪-২৫-এর ভাব)। কুরআন বারবার যাকাতকে নামাজের সঙ্গে উল্লেখ করেছে, "নামাজ কায়েম করো ও যাকাত দাও" (২:১১০)। এভাবে আল্লাহর ইবাদতকে জুড়ে দিয়েছে মানুষের প্রতি দায়িত্বের সঙ্গে।',
        },
      },
      {
        heading: { en: 'Where it goes', bn: 'যাকাত কার কাছে যায়' },
        body: {
          en: 'The Quran specifies eight categories of eligible recipients: "Charity is only for the poor and the needy, those who collect it, those whose hearts are to be reconciled, for freeing captives, for those in debt, for the cause of God, and for the stranded traveller" (9:60). This makes zakat a structured system of wealth circulation, not scattered almsgiving — a yearly transfer that reaches the vulnerable and prevents wealth from pooling only among the rich.',
          bn: 'কুরআন যাকাতের হকদারদের আটটি শ্রেণি নির্দিষ্ট করে দিয়েছে: "সদকা তো কেবল গরিব ও অভাবীদের জন্য, যারা তা আদায়ের কাজে নিয়োজিত তাদের জন্য, যাদের মন জয় করা প্রয়োজন তাদের জন্য, দাসমুক্তির জন্য, ঋণগ্রস্তদের জন্য, আল্লাহর পথে এবং বিপদগ্রস্ত মুসাফিরের জন্য" (৯:৬০)। এতে যাকাত এলোমেলো দান-খয়রাত না থেকে সম্পদ বণ্টনের এক সুশৃঙ্খল ব্যবস্থা হয়ে ওঠে। প্রতি বছর এর মাধ্যমে সম্পদ পৌঁছে যায় দুর্বলদের হাতে, আর তা শুধু ধনীদের মধ্যেই জমে থাকতে পারে না।',
        },
      },
      {
        heading: { en: 'Purifying the giver', bn: 'দাতাকে পবিত্র করা' },
        body: {
          en: 'The word zakat means both "purification" and "growth". The Quran says: "Take from their wealth a charity by which you purify them and cause them to grow" (9:103). Giving loosens the grip of greed on the heart and reminds the believer that wealth is a trust from God, not an achievement to hoard. Beyond obligatory zakat, Islam strongly encourages sadaqa — voluntary charity of any amount, including a kind word or a smile — and promises that God multiplies what is given (2:261).',
          bn: 'যাকাত শব্দের অর্থ একই সঙ্গে "পবিত্রতা" ও "বৃদ্ধি"। কুরআন বলছে: "তাদের সম্পদ থেকে সদকা গ্রহণ করো, যার মাধ্যমে তুমি তাদের পবিত্র করবে এবং বাড়িয়ে তুলবে" (৯:১০৩)। দান করলে অন্তরে লোভের বাঁধন আলগা হয়, আর মুমিনের মনে পড়ে যে সম্পদ আল্লাহর দেওয়া আমানত, জমিয়ে রাখার মতো নিজের কৃতিত্ব নয়। ফরজ যাকাতের বাইরেও ইসলাম সদকার প্রতি জোরালো উৎসাহ দেয়। সদকা মানে যেকোনো পরিমাণের স্বেচ্ছায় দান; একটি ভালো কথা বা একটু হাসিও সদকা। আর আল্লাহ প্রতিশ্রুতি দিয়েছেন, যা দান করা হয় তা তিনি বহুগুণে বাড়িয়ে দেন (২:২৬১)।',
        },
      },
    ],
  },
  {
    id: 'hajj-pilgrimage',
    emoji: '🕋',
    kind: 'article',
    title: { en: 'Hajj: The Pilgrimage', bn: 'হজ: বাইতুল্লাহর সফর' },
    summary: {
      en: 'The fifth pillar: a once-in-a-lifetime pilgrimage to Mecca for those able, retracing the legacy of Abraham and uniting the ummah.',
      bn: 'পঞ্চম স্তম্ভ: সামর্থ্যবানদের জন্য জীবনে একবার মক্কায় হজ, যেখানে ইবরাহিমের স্মৃতির পথ ধরে হাঁটা হয় আর গোটা উম্মাহ এক হয়।',
    },
    points: [
      {
        heading: { en: 'An obligation for the able', bn: 'সামর্থ্যবানের জন্য ফরজ' },
        body: {
          en: 'Hajj is obligatory once in a lifetime for every adult Muslim who has the physical health and financial means to make the journey without neglecting their dependants: "Pilgrimage to the House is a duty owed to God by people who are able to undertake it" (3:97). Performed in the month of Dhul-Hijjah, it gathers millions from every nation at the same time, in the same simple garments, performing the same rites — a living picture of human equality before God.',
          bn: 'হজ জীবনে একবার ফরজ প্রত্যেক প্রাপ্তবয়স্ক মুসলিমের ওপর, যাঁর শারীরিক সুস্থতা ও আর্থিক সামর্থ্য আছে এবং যিনি পোষ্যদের অবহেলা না করে সফর করতে পারেন: "যে মানুষ সেখানে পৌঁছাতে সক্ষম, তাদের ওপর আল্লাহর জন্য বাইতুল্লাহর হজ কর্তব্য" (৩:৯৭)। জিলহজ মাসে আদায় করা এই ইবাদতে সব দেশের লাখ লাখ মানুষ একই সময়ে জড়ো হন, একই সাদামাটা পোশাকে, একই আমল পালন করেন। আল্লাহর সামনে মানুষের সমতার এ যেন এক জীবন্ত ছবি।',
        },
      },
      {
        heading: { en: 'Retracing Abraham’s legacy', bn: 'ইবরাহিমের স্মৃতির পথ ধরে' },
        body: {
          en: 'The rites of Hajj re-enact events from the life of Prophet Abraham (Ibrahim) and his family: the circling of the Kaaba he and his son Ishmael raised, the hurried walk between Safa and Marwa recalling Hagar’s search for water for her infant, and the stoning of pillars symbolising rejection of temptation. The Quran records Abraham’s call: "Proclaim the pilgrimage to all people; they will come to you on foot and on every lean camel from every distant pass" (22:27). Standing at Arafat is the climax — a day of prayer, repentance and seeking God’s forgiveness.',
          bn: 'হজের আমলগুলোতে নবী ইবরাহিম ও তাঁর পরিবারের জীবনের ঘটনাগুলো নতুন করে ফিরে আসে: কাবার তাওয়াফ, যে কাবা তিনি ও তাঁর পুত্র ইসমাইল নির্মাণ করেছিলেন; সাফা ও মারওয়ার মাঝে দ্রুত হাঁটা, যা মনে করিয়ে দেয় শিশুপুত্রের জন্য পানির খোঁজে হাজেরার ছোটাছুটি; আর স্তম্ভে পাথর মারা, যা প্রলোভন ঝেড়ে ফেলার প্রতীক। কুরআনে ইবরাহিমের সেই আহ্বানের কথা আছে: "মানুষের মাঝে হজের ঘোষণা দাও; তারা তোমার কাছে আসবে পায়ে হেঁটে এবং দূরদূরান্তের পথ পেরিয়ে আসা শীর্ণ উটে চড়ে" (২২:২৭)। হজের চূড়ান্ত মুহূর্ত আরাফাতে অবস্থান: দোয়া, তওবা আর আল্লাহর কাছে মাফ চাওয়ার দিন।',
        },
      },
      {
        heading: { en: 'The inner journey', bn: 'অন্তরের যাত্রা' },
        body: {
          en: 'Hajj is meant to transform, not merely to be completed. The Quran reminds pilgrims that outward ritual is empty without inner sincerity: "Their meat will not reach God, nor their blood, but what reaches Him is your God-consciousness" (22:37). It teaches that the best provision for the journey — and for life — is taqwa (2:197). Pilgrims often describe returning home renewed, their past forgiven, resolved to live more honestly. It is both a physical journey to a sacred place and a rehearsal for standing before God on the Last Day.',
          bn: 'হজ শুধু আদায় করে ফেলার বিষয় নয়; এর উদ্দেশ্য মানুষকে বদলে দেওয়া। কুরআন হাজিদের মনে করিয়ে দেয়, ভেতরের ইখলাস ছাড়া বাইরের আমল শূন্য: "তাদের গোশত আল্লাহর কাছে পৌঁছে না, তাদের রক্তও নয়, বরং তাঁর কাছে পৌঁছে তোমাদের তাকওয়া" (২২:৩৭)। কুরআন আরও শেখায়, এই সফরের, এবং গোটা জীবনের, সবচেয়ে উত্তম পাথেয় হলো তাকওয়া (২:১৯৭)। হাজিরা প্রায়ই বলেন, তাঁরা নতুন মানুষ হয়ে ঘরে ফেরেন: অতীতের গুনাহ মাফ হয়েছে, সামনে আরও সৎভাবে চলার সংকল্প। হজ একদিকে এক পবিত্র স্থানে সশরীরে সফর, অন্যদিকে শেষ দিবসে আল্লাহর সামনে দাঁড়ানোর এক মহড়া।',
        },
      },
    ],
  },
  {
    id: 'the-day-of-judgment',
    emoji: '⚖️',
    kind: 'article',
    title: { en: 'The Day of Judgment', bn: 'বিচার দিবস' },
    summary: {
      en: 'The belief that every life will be resurrected and held to account, where perfect justice is finally established.',
      bn: 'এই বিশ্বাস যে প্রত্যেক মানুষকে আবার জীবিত করে হিসাব নেওয়া হবে, আর সেদিন অবশেষে পূর্ণ ন্যায়বিচার প্রতিষ্ঠিত হবে।',
    },
    points: [
      {
        heading: { en: 'Why there must be a reckoning', bn: 'কেন হিসাব হতেই হবে' },
        body: {
          en: 'A core Islamic belief is that this life is not the whole story. The oppressor who dies untouched and the victim who dies unavenged both point to a justice that this world leaves unfinished. Islam answers that God, being perfectly just, will resurrect all people and settle every account: "Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection" (3:185). The certainty of that day gives moral weight to every choice and hope to those who suffer wrongly.',
          bn: 'ইসলামি বিশ্বাসের একটি মূল কথা হলো, এই জীবনেই গল্প শেষ নয়। যে জালিম কোনো শাস্তি না পেয়েই মারা যায়, আর যে মজলুম কোনো বিচার না পেয়েই মারা যায়, দুজনই এমন এক ন্যায়বিচারের দিকে ইঙ্গিত করে, যা এই দুনিয়ায় অসম্পূর্ণ থেকে যায়। ইসলামের জবাব: আল্লাহ পরম ন্যায়বান, তাই তিনি সব মানুষকে আবার জীবিত করবেন এবং প্রত্যেকের হিসাব চুকিয়ে দেবেন: "প্রতিটি প্রাণ মৃত্যুর স্বাদ গ্রহণ করবে, আর কিয়ামতের দিনই তোমাদের পূর্ণ প্রতিদান দেওয়া হবে" (৩:১৮৫)। সেই দিনের নিশ্চয়তা প্রতিটি সিদ্ধান্তকে নৈতিক গুরুত্ব দেয়, আর অন্যায়ভাবে কষ্ট পাওয়া মানুষকে দেয় আশা।',
        },
      },
      {
        heading: { en: 'A perfectly fair scale', bn: 'নিখুঁত ন্যায়ের দাঁড়িপাল্লা' },
        body: {
          en: 'The Quran describes a judgment of absolute precision, where nothing is overlooked and no one is wronged: "We shall set up scales of justice for the Day of Resurrection, so that no soul will be treated unjustly in the least; even if it is the weight of a mustard seed, We will bring it forth" (21:47). And: "Whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it" (99:7-8). On that day even one’s own limbs will testify to the truth (36:65).',
          bn: 'কুরআন এমন এক বিচারের কথা বলে, যা পুরোপুরি নিখুঁত: কিছুই বাদ পড়বে না, কারও প্রতি অবিচার হবে না। "আমি কিয়ামতের দিনের জন্য ন্যায়ের দাঁড়িপাল্লা স্থাপন করব, ফলে কোনো প্রাণের প্রতি সামান্যতম অবিচার করা হবে না; এমনকি তা সরিষা দানার ওজন সমান হলেও আমি তা উপস্থিত করব" (২১:৪৭)। আরও আছে: "যে অণু পরিমাণ ভালো করে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করে সে তা দেখবে" (৯৯:৭-৮)। সেদিন মানুষের নিজের হাত-পা পর্যন্ত সত্যের সাক্ষ্য দেবে (৩৬:৬৫)।',
        },
      },
      {
        heading: { en: 'Between fear and hope', bn: 'ভয় ও আশার মাঝে' },
        body: {
          en: 'Belief in the Last Day is not meant to produce despair but a balanced life lived between fear of falling short and hope in God’s vast mercy. The reckoning is real, but the Quran presents God as "the Most Merciful of the merciful", who forgives readily those who turn to Him. This belief steadies the believer: comfort is not the ultimate goal, and hardship is not the final word. Every good deed counts, every wrong can be repented, and the account will be closed with perfect fairness.',
          bn: 'শেষ দিবসের প্রতি বিশ্বাসের উদ্দেশ্য হতাশা তৈরি করা নয়, বরং ভারসাম্যপূর্ণ এক জীবন: একদিকে নিজের ঘাটতির ভয়, অন্যদিকে আল্লাহর অসীম রহমতের আশা। হিসাব সত্যি সত্যিই হবে, তবে কুরআন আল্লাহর পরিচয় দেয় "দয়ালুদের মধ্যে সবচেয়ে বড় দয়ালু" হিসেবে, যিনি তাঁর দিকে ফিরে আসা মানুষকে সহজেই মাফ করে দেন। এই বিশ্বাস মুমিনকে স্থির রাখে: আরাম-আয়েশ চূড়ান্ত লক্ষ্য নয়, আর কষ্টও শেষ কথা নয়। প্রতিটি নেক আমল হিসাবে উঠবে, প্রতিটি ভুলের জন্য তওবা করা যায়, আর হিসাবের খাতা বন্ধ হবে পূর্ণ ইনসাফের সঙ্গে।',
        },
      },
    ],
  },
  {
    id: 'human-dignity-and-brotherhood',
    emoji: '🤝',
    kind: 'article',
    title: { en: 'Human Dignity and Brotherhood', bn: 'মানবিক মর্যাদা ও ভ্রাতৃত্ব' },
    summary: {
      en: 'Islam’s teaching that all humans share one origin and inherent dignity, and that differences are meant for mutual knowing, not ranking.',
      bn: 'ইসলামের শিক্ষা: সব মানুষের উৎস এক, সবার মধ্যেই আছে জন্মগত মর্যাদা; আর মানুষে মানুষে পার্থক্য একে অপরকে চেনার জন্য, ছোট-বড় মাপার জন্য নয়।',
    },
    points: [
      {
        heading: { en: 'Honoured by their Creator', bn: 'স্রষ্টার দেওয়া সম্মান' },
        body: {
          en: 'The Quran grants dignity to every human being as such, not as a reward earned: "We have certainly honoured the children of Adam" (17:70). This honour is rooted in being God’s creation, entrusted with reason and moral responsibility. It underlies Islamic teachings on the sanctity of life, the rights of the poor, prisoners and the vulnerable, and the prohibition of humiliating or mocking others. Dignity is not granted by the state or earned by status — it is a given of being human.',
          bn: 'কুরআন প্রত্যেক মানুষকে মর্যাদা দিয়েছে মানুষ হিসেবেই, অর্জিত পুরস্কার হিসেবে নয়: "নিশ্চয়ই আমি আদম সন্তানদের সম্মানিত করেছি" (১৭:৭০)। এই সম্মানের মূল হলো, মানুষ আল্লাহর সৃষ্টি, যাকে বিবেক-বুদ্ধি ও নৈতিক দায়িত্ব দেওয়া হয়েছে। এর ওপরই দাঁড়িয়ে আছে ইসলামের নানা শিক্ষা: জীবনের পবিত্রতা; গরিব, বন্দি ও দুর্বলদের হক; আর কাউকে অপমান বা উপহাস করার নিষেধ। মর্যাদা রাষ্ট্রের দান নয়, পদ-পদবি দিয়েও অর্জন করতে হয় না। মানুষ হয়ে জন্মানোর সঙ্গেই তা পাওয়া।',
        },
      },
      {
        heading: { en: 'One family, no superior race', bn: 'এক পরিবার, কোনো শ্রেষ্ঠ জাতি নেই' },
        body: {
          en: 'Islam teaches that all people descend from a single pair, so differences of colour, tribe and nation are signs of God’s creativity, not grounds for hierarchy: "O mankind, We created you from a male and a female and made you peoples and tribes that you may know one another. The most noble of you in the sight of God is the most righteous" (49:13). In his farewell sermon the Prophet ﷺ declared that no Arab is superior to a non-Arab, nor white over black, except by God-consciousness — an early, explicit rejection of racism.',
          bn: 'ইসলাম শেখায়, সব মানুষ একই দম্পতির বংশধর। তাই গায়ের রং, গোত্র আর জাতির পার্থক্য আল্লাহর সৃষ্টিকুশলতার নিদর্শন, কাউকে ওপরে-নিচে রাখার ভিত্তি নয়: "হে মানুষ, আমি তোমাদের এক পুরুষ ও এক নারী থেকে সৃষ্টি করেছি এবং তোমাদের নানা জাতি ও গোত্রে বিভক্ত করেছি যেন তোমরা একে অপরকে চিনতে পারো। আল্লাহর দৃষ্টিতে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে-ই যে সবচেয়ে বেশি মুত্তাকি" (৪৯:১৩)। বিদায় হজের ভাষণে নবী ﷺ ঘোষণা দেন, অনারবের ওপর আরবের, কৃষ্ণাঙ্গের ওপর শ্বেতাঙ্গের কোনো শ্রেষ্ঠত্ব নেই; শ্রেষ্ঠত্ব কেবল তাকওয়ায়। বর্ণবাদের বিরুদ্ধে এ ছিল একেবারে শুরুর দিকের, স্পষ্ট এক প্রত্যাখ্যান।',
        },
      },
      {
        heading: { en: 'The sanctity of a single life', bn: 'একটি প্রাণের পবিত্রতা' },
        body: {
          en: 'The value Islam places on human life is captured in a striking verse addressed to the Children of Israel: "Whoever kills a soul — unless for murder or corruption in the land — it is as if he had killed all mankind; and whoever saves one, it is as if he had saved all mankind" (5:32). Brotherhood in Islam therefore extends beyond fellow believers to a shared human family owed justice, mercy and protection. Faith is not measured only by ritual, but by how one treats other people.',
          bn: 'মানুষের জীবনকে ইসলাম কতটা মূল্য দেয়, তা ধরা পড়ে বনি ইসরাইলকে উদ্দেশ করে বলা এক মর্মস্পর্শী আয়াতে: "যে ব্যক্তি কোনো প্রাণ হত্যা করল, হত্যার বদলে কিংবা জমিনে বিপর্যয় সৃষ্টির কারণ ছাড়া, সে যেন সমগ্র মানবজাতিকে হত্যা করল; আর যে একজনকে বাঁচাল, সে যেন সমগ্র মানবজাতিকে বাঁচাল" (৫:৩২)। তাই ইসলামে ভ্রাতৃত্ব শুধু মুমিনদের মধ্যে সীমাবদ্ধ নয়; তা বিস্তৃত গোটা মানব পরিবারে, যারা সবাই ন্যায়, দয়া ও সুরক্ষার হকদার। ঈমান কেবল আনুষ্ঠানিক ইবাদত দিয়ে মাপা হয় না, মাপা হয় মানুষের সঙ্গে আচরণ দিয়েও।',
        },
      },
    ],
  },
  {
    id: 'wealth-and-ethics',
    emoji: '💼',
    kind: 'article',
    title: { en: 'Wealth and Ethics', bn: 'সম্পদ ও নৈতিকতা' },
    summary: {
      en: 'How Islam treats earning and spending as moral acts — permitting honest enterprise while forbidding exploitation, fraud and interest.',
      bn: 'ইসলাম উপার্জন ও খরচকে কীভাবে নৈতিক কাজ হিসেবে দেখে: সৎ ব্যবসার অনুমতি দেয়, কিন্তু শোষণ, প্রতারণা ও সুদ নিষিদ্ধ করে।',
    },
    points: [
      {
        heading: { en: 'Wealth is a trust, not an end', bn: 'সম্পদ এক আমানত, লক্ষ্য নয়' },
        body: {
          en: 'Islam does not condemn wealth or trade; it honours honest enterprise and considers a truthful merchant praiseworthy. What it rejects is treating wealth as life’s ultimate purpose. Property is a trust from God, to be earned lawfully and spent responsibly — neither hoarded selfishly nor squandered wastefully. This frames every transaction as a moral act with consequences beyond profit and loss, answerable to God as well as to the market.',
          bn: 'ইসলাম সম্পদ বা ব্যবসাকে খারাপ বলে না; বরং সৎ ব্যবসাকে সম্মান করে, আর সত্যবাদী ব্যবসায়ীকে প্রশংসার যোগ্য মনে করে। ইসলাম যা মানে না, তা হলো সম্পদকে জীবনের চূড়ান্ত লক্ষ্য বানানো। সম্পদ আল্লাহর দেওয়া আমানত। তা উপার্জন করতে হবে হালাল পথে, খরচ করতে হবে দায়িত্ব নিয়ে; স্বার্থপরের মতো জমিয়ে রাখা যাবে না, অপচয় করে উড়িয়েও দেওয়া যাবে না। ফলে প্রতিটি লেনদেন হয়ে ওঠে এক নৈতিক কাজ, যার পরিণাম লাভ-ক্ষতির হিসাবের চেয়ে বড়। এর জবাব দিতে হয় বাজারের কাছে তো বটেই, আল্লাহর কাছেও।',
        },
      },
      {
        heading: { en: 'No wealth by wrongdoing', bn: 'অন্যায় পথে সম্পদ নয়' },
        body: {
          en: 'The Quran draws firm lines around how wealth may change hands: "Do not consume one another’s wealth unjustly" (2:188), and instead: "let it be trade by mutual consent" (4:29). Fraud in weights and measures is condemned outright — "Woe to those who give short measure, who demand full measure from others but give less themselves" (83:1-3) — and honesty is commanded: "Give full measure when you measure, and weigh with an even balance" (17:35). Bribery, theft, deception and exploitation are all forms of consuming wealth unjustly.',
          bn: 'সম্পদ কীভাবে এক হাত থেকে আরেক হাতে যেতে পারে, তা নিয়ে কুরআন স্পষ্ট সীমা টেনে দিয়েছে: "তোমরা একে অপরের সম্পদ অন্যায়ভাবে গ্রাস করো না" (২:১৮৮); বরং "পারস্পরিক সম্মতিতে ব্যবসা হোক" (৪:২৯)। ওজন ও মাপে ঠকানোকে সরাসরি নিন্দা করা হয়েছে: "দুর্ভোগ তাদের জন্য যারা মাপে কম দেয়; যারা অন্যের কাছ থেকে নেওয়ার সময় পুরো মাপে নেয়, কিন্তু নিজেরা দেওয়ার সময় কম দেয়" (৮৩:১-৩)। আর সততার আদেশ এসেছে: "মাপার সময় পূর্ণ মাপ দাও, আর সঠিক দাঁড়িপাল্লায় ওজন করো" (১৭:৩৫)। ঘুষ, চুরি, প্রতারণা ও শোষণ, সবই অন্যায়ভাবে সম্পদ গ্রাস করার নানা রূপ।',
        },
      },
      {
        heading: { en: 'The prohibition of interest (riba)', bn: 'সুদ (রিবা) নিষিদ্ধ' },
        body: {
          en: 'A distinctive feature of Islamic ethics is the prohibition of riba — lending money to be repaid with a guaranteed increase regardless of the borrower’s outcome. The Quran states plainly: "God has permitted trade and forbidden interest" (2:275). The concern is that interest lets the lender profit risklessly from another’s need, concentrating wealth and burdening the poor. In its place Islam encourages profit-and-loss partnership, honest trade, interest-free loans (qard hasan) and charity — a model where wealth grows through shared risk and real productivity rather than debt.',
          bn: 'ইসলামি নৈতিকতার একটি আলাদা বৈশিষ্ট্য হলো রিবা নিষিদ্ধ করা। রিবা মানে এমন শর্তে টাকা ধার দেওয়া যে, ঋণগ্রহীতার লাভ হোক বা লোকসান, নির্দিষ্ট বাড়তি অঙ্কসহ টাকা ফেরত দিতেই হবে। কুরআন স্পষ্ট বলেছে: "আল্লাহ ব্যবসা হালাল করেছেন ও সুদ হারাম করেছেন" (২:২৭৫)। আপত্তির কারণ হলো, সুদে ঋণদাতা কোনো ঝুঁকি ছাড়াই অন্যের অভাব থেকে মুনাফা তোলে; এতে সম্পদ অল্প কিছু হাতে জমে, আর গরিবের ঘাড়ে বোঝা চাপে। এর বদলে ইসলাম উৎসাহ দেয় লাভ-ক্ষতি ভাগাভাগির অংশীদারিত্বে, সৎ ব্যবসায়, সুদমুক্ত ঋণে (কর্জে হাসানা) এবং দানে। এই ব্যবস্থায় সম্পদ বাড়ে ঋণের জোরে নয়, যৌথ ঝুঁকি আর সত্যিকারের উৎপাদনের মাধ্যমে।',
        },
      },
    ],
  },
  {
    id: 'the-mosque-and-community',
    emoji: '🕌',
    kind: 'article',
    title: { en: 'The Mosque and Community', bn: 'মসজিদ ও সমাজ' },
    summary: {
      en: 'The role of the mosque as a house of worship and a hub of community life, and Islam’s strong emphasis on unity and congregation.',
      bn: 'ইবাদতের ঘর এবং সমাজজীবনের কেন্দ্র হিসেবে মসজিদের ভূমিকা, আর ঐক্য ও জামাতের ওপর ইসলামের জোরালো তাগিদ।',
    },
    points: [
      {
        heading: { en: 'A house built on devotion', bn: 'ইবাদতের ভিতে গড়া ঘর' },
        body: {
          en: 'The mosque (masjid, literally "place of prostration") is first a house of worship, where the community gathers for the five daily prayers and the Friday congregation. The Quran ties its upkeep to sincere faith: "The mosques of God are only maintained by those who believe in God and the Last Day, establish prayer and give zakat, and fear none but God" (9:18). It describes them as places "which God has permitted to be raised, that His name be remembered therein" (24:36) — spaces oriented wholly toward the remembrance of God.',
          bn: 'মসজিদ (আক্ষরিক অর্থে "সিজদার স্থান") সবার আগে ইবাদতের ঘর, যেখানে মুসল্লিরা পাঁচ ওয়াক্ত নামাজ ও জুমার জামাতে একত্র হন। কুরআন মসজিদ আবাদ রাখাকে খাঁটি ঈমানের সঙ্গে যুক্ত করেছে: "আল্লাহর মসজিদ কেবল তারাই আবাদ করে যারা আল্লাহ ও শেষ দিবসে বিশ্বাস করে, নামাজ কায়েম করে ও যাকাত দেয়, এবং আল্লাহ ছাড়া কাউকে ভয় করে না" (৯:১৮)। কুরআন মসজিদের পরিচয় দিয়েছে এমন ঘর হিসেবে, "যেগুলোকে উঁচু করার এবং যেখানে তাঁর নাম স্মরণ করার অনুমতি আল্লাহ দিয়েছেন" (২৪:৩৬)। অর্থাৎ মসজিদ পুরোপুরি আল্লাহর জিকিরের জন্য নিবেদিত জায়গা।',
        },
      },
      {
        heading: { en: 'More than a prayer hall', bn: 'কেবল নামাজের ঘর নয়' },
        body: {
          en: 'From the earliest days in Medina, the Prophet’s mosque was also the community’s centre — a place of learning, counsel, welcome for travellers, care for the needy and shared decision-making. Mosques historically grew into schools, libraries and charitable hubs. This reflects Islam’s refusal to divide life into "sacred" and "secular": worship, knowledge and social responsibility belong together. The congregational prayer, shoulder to shoulder and in rows regardless of rank, quietly trains equality, punctuality and belonging.',
          bn: 'মদিনার একেবারে শুরুর দিন থেকেই নবীজির মসজিদ ছিল সমাজেরও কেন্দ্র: সেখানে শিক্ষা হতো, পরামর্শ হতো, মুসাফিরদের আশ্রয় মিলত, অভাবীদের দেখাশোনা হতো, আর সবাই মিলে সিদ্ধান্ত নেওয়া হতো। ইতিহাসে মসজিদ থেকেই গড়ে উঠেছে শিক্ষাকেন্দ্র, গ্রন্থাগার আর দাতব্য প্রতিষ্ঠান। এর পেছনে আছে ইসলামের এক মৌলিক অবস্থান: জীবনকে "ধর্মীয়" আর "জাগতিক" দুই ভাগে ভাগ করা যায় না; ইবাদত, জ্ঞান ও সামাজিক দায়িত্ব একসঙ্গেই চলে। জামাতের নামাজে পদমর্যাদা যা-ই হোক, সবাই কাঁধে কাঁধ মিলিয়ে কাতারে দাঁড়ায়। এই নামাজ নীরবে শেখায় সমতা, সময়ানুবর্তিতা আর একসঙ্গে থাকার অনুভূতি।',
        },
      },
      {
        heading: { en: 'One rope, held together', bn: 'আল্লাহর রশি, সবাই মিলে ধরা' },
        body: {
          en: 'Islam places great weight on unity and warns against needless division: "Hold firmly to the rope of God all together and do not become divided" (3:103), and "The believers are but brothers, so make peace between your brothers" (49:10). The community (ummah) is meant to function like a single body — when one part hurts, the rest feels it. The mosque is where this ideal is practised in miniature: strangers become neighbours, and worship of God is joined to responsibility for one another.',
          bn: 'ইসলাম ঐক্যের ওপর বিরাট গুরুত্ব দেয়, আর অকারণ বিভেদ থেকে সাবধান করে: "তোমরা সকলে আল্লাহর রশি দৃঢ়ভাবে ধরো এবং বিভক্ত হয়ো না" (৩:১০৩), এবং "মুমিনরা তো পরস্পর ভাই, সুতরাং তোমাদের ভাইদের মধ্যে শান্তি স্থাপন করো" (৪৯:১০)। উম্মাহর থাকার কথা এক দেহের মতো: শরীরের এক অংশে ব্যথা হলে বাকি শরীরও তা টের পায়। মসজিদে এই আদর্শের চর্চা হয় ছোট পরিসরে। সেখানে অচেনা মানুষ প্রতিবেশী হয়ে ওঠে, আর আল্লাহর ইবাদত জুড়ে যায় একে অপরের প্রতি দায়িত্বের সঙ্গে।',
        },
      },
    ],
  },
  {
    id: 'the-beautiful-names-of-god',
    emoji: '✨',
    kind: 'article',
    title: { en: 'The Beautiful Names of God', bn: 'আল্লাহর সুন্দর নামসমূহ' },
    summary: {
      en: 'How Muslims come to know God through His revealed names and attributes — the Merciful, the Just, the Near — and what they mean for daily life.',
      bn: 'আল্লাহর নাজিল করা নাম ও গুণাবলির মাধ্যমে মুসলিমরা কীভাবে তাঁকে চেনে (পরম দয়াময়, ন্যায়বিচারক, নিকটবর্তী), আর দৈনন্দিন জীবনে এসব নামের তাৎপর্য কী।',
    },
    points: [
      {
        heading: { en: 'Knowing God through His names', bn: 'নামের মাধ্যমে আল্লাহকে চেনা' },
        body: {
          en: 'Islam teaches that God cannot be fully grasped by human minds, but He has made Himself known through beautiful names and attributes revealed in the Quran: "To God belong the most beautiful names, so call upon Him by them" (7:180). A well-known tradition mentions ninety-nine such names. They are not separate gods or forces but descriptions of the One God — the Most Merciful, the All-Knowing, the Forgiving, the Just, the Provider — each a window onto who He is.',
          bn: 'ইসলাম শেখায়, মানুষের বুদ্ধি আল্লাহকে পুরোপুরি ধারণ করতে পারে না। তবে কুরআনে নাজিল করা সুন্দর নাম ও গুণাবলির মাধ্যমে তিনি নিজের পরিচয় দিয়েছেন: "আল্লাহর জন্যই রয়েছে সুন্দরতম নামসমূহ, সুতরাং সেগুলো দিয়ে তাঁকে ডাকো" (৭:১৮০)। একটি প্রসিদ্ধ হাদিসে এমন নিরানব্বইটি নামের কথা আছে। এগুলো আলাদা আলাদা উপাস্য বা শক্তি নয়, বরং এক আল্লাহরই পরিচয়: পরম দয়াময়, সর্বজ্ঞ, ক্ষমাশীল, ন্যায়বিচারক, রিযিকদাতা। প্রতিটি নাম যেন একেকটি জানালা, যা দিয়ে তাঁকে চেনা যায়।',
        },
      },
      {
        heading: { en: 'Mercy and majesty together', bn: 'রহমত ও মহিমা একসঙ্গে' },
        body: {
          en: 'The names present a balanced portrait: God is at once utterly transcendent and intimately near. One passage gathers many together: "He is God, other than whom there is no deity, Knower of the unseen and the witnessed; He is the Most Merciful. He is God, the Sovereign, the Pure, the Source of Peace, the Guardian of Faith, the Mighty, the Compeller, the Supreme... To Him belong the best names" (59:22-24). His mercy is emphasised most — every chapter but one opens by naming Him the Most Compassionate, the Most Merciful — yet His justice and majesty are never diminished.',
          bn: 'নামগুলো আল্লাহর এক ভারসাম্যপূর্ণ পরিচয় তুলে ধরে: তিনি একই সঙ্গে সবকিছুর বহু ঊর্ধ্বে, আবার বান্দার একেবারে কাছে। এক জায়গায় পরপর কয়েকটি আয়াতে অনেকগুলো নাম একসঙ্গে এসেছে: "তিনিই আল্লাহ, যিনি ছাড়া কোনো উপাস্য নেই, অদৃশ্য ও দৃশ্যের জ্ঞাতা; তিনি পরম দয়াময়। তিনিই আল্লাহ, অধিপতি, পবিত্র, শান্তির উৎস, নিরাপত্তাদাতা, পরাক্রমশালী, মহাপ্রতাপশালী, সর্বোচ্চ... সুন্দরতম নামসমূহ তাঁরই" (৫৯:২২-২৪)। সবচেয়ে বেশি জোর দেওয়া হয়েছে তাঁর রহমতের ওপর; একটি ছাড়া কুরআনের প্রতিটি সূরা শুরু হয় তাঁকে পরম করুণাময়, পরম দয়ালু বলে। তবু তাঁর ন্যায় ও মহিমা কখনো খাটো হয় না।',
        },
      },
      {
        heading: { en: 'Names that shape a life', bn: 'যে নাম জীবন গড়ে' },
        body: {
          en: 'Knowing God’s names is meant to transform the heart, not just inform the mind. Whoever truly knows God as the All-Seeing grows careful in private; as the Provider, learns contentment; as the Forgiving, never despairs of returning after sin; as the Just, refuses to wrong others. Muslims are also encouraged to reflect God’s qualities in a human measure — to be merciful because He is merciful, forgiving because He forgives. To "call upon Him by them" is to turn the names into supplication and, gradually, into character.',
          bn: 'আল্লাহর নাম জানার উদ্দেশ্য শুধু মাথায় তথ্য রাখা নয়, অন্তরকে বদলে দেওয়া। যে সত্যিই জানে আল্লাহ সবকিছু দেখেন, সে নির্জনেও সাবধান থাকে। যে জানে তিনিই রিযিকদাতা, সে অল্পে তুষ্ট থাকতে শেখে। যে জানে তিনি ক্ষমাশীল, সে গুনাহের পর ফিরে আসতে কখনো নিরাশ হয় না। যে জানে তিনি ন্যায়বিচারক, সে অন্যের প্রতি অন্যায় করতে রাজি হয় না। মুসলিমদের এটাও উৎসাহ দেওয়া হয়, মানুষের সাধ্যমতো আল্লাহর গুণগুলো নিজের মধ্যে ফুটিয়ে তুলতে: দয়ালু হও, কারণ তিনি দয়ালু; ক্ষমা করো, কারণ তিনি ক্ষমা করেন। "সেগুলো দিয়ে তাঁকে ডাকা" মানে নামগুলোকে দোয়ায় পরিণত করা, আর ধীরে ধীরে নিজের চরিত্রে।',
        },
      },
    ],
  },
  {
    id: 'seeking-knowledge-in-islam',
    emoji: '📖',
    kind: 'article',
    title: { en: 'Seeking Knowledge in Islam', bn: 'ইসলামে জ্ঞান অন্বেষণ' },
    summary: {
      en: 'Why Islam treats the pursuit of knowledge as an act of worship, from the first revealed word "Read" to a rich scholarly tradition.',
      bn: 'ইসলাম কেন জ্ঞান অর্জনকে ইবাদত মনে করে: প্রথম নাজিল হওয়া শব্দ "পড়ো" থেকে শুরু করে জ্ঞানচর্চার সমৃদ্ধ ঐতিহ্য পর্যন্ত।',
    },
    points: [
      {
        heading: { en: 'The first word was “Read”', bn: 'প্রথম শব্দ ছিল "পড়ো"' },
        body: {
          en: 'The very first words revealed to the Prophet ﷺ were a command to learn: "Read in the name of your Lord who created... who taught by the pen, taught man what he did not know" (96:1-5). It is striking that a faith should begin not with a ritual but with reading and the pen. The Quran repeatedly urges reflection on nature, history and the self, and asks: "Are those who know equal to those who do not know?" (39:9). The only prayer the Prophet ﷺ was told to ask for increase in was knowledge: "My Lord, increase me in knowledge" (20:114).',
          bn: 'নবী ﷺ-এর ওপর নাজিল হওয়া একেবারে প্রথম শব্দগুলোই ছিল শেখার আদেশ: "পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন... যিনি কলমের মাধ্যমে শিক্ষা দিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না" (৯৬:১-৫)। লক্ষ করার মতো ব্যাপার: একটি ধর্মের সূচনা কোনো আনুষ্ঠানিকতা দিয়ে নয়, হয়েছে পড়া আর কলম দিয়ে। কুরআন বারবার প্রকৃতি, ইতিহাস ও নিজের সত্তা নিয়ে ভাবতে বলে, আর প্রশ্ন রাখে: "যারা জানে ও যারা জানে না তারা কি সমান?" (৩৯:৯)। একমাত্র যে জিনিস বাড়িয়ে দেওয়ার জন্য দোয়া করতে নবী ﷺ-কে বলা হয়েছিল, তা হলো জ্ঞান: "হে আমার রব, আমার জ্ঞান বৃদ্ধি করো" (২০:১১৪)।',
        },
      },
      {
        heading: { en: 'Knowledge raises the believer', bn: 'জ্ঞান মুমিনের মর্যাদা বাড়ায়' },
        body: {
          en: 'The Quran links knowledge to both rank and reverence: "God will raise those who believe among you and those given knowledge, by many degrees" (58:11); and: "Of His servants, only those with knowledge truly fear God" (35:28) — meaning real knowledge deepens awe of the Creator rather than replacing it. The Prophet ﷺ taught that seeking knowledge is an obligation on every Muslim, and that a path to knowledge is a path made easier toward Paradise. Learning, sincerely pursued, is itself a form of worship.',
          bn: 'কুরআন জ্ঞানকে যুক্ত করেছে মর্যাদা ও আল্লাহভীতি দুটোর সঙ্গেই: "তোমাদের মধ্যে যারা ঈমান এনেছে ও যাদের জ্ঞান দেওয়া হয়েছে আল্লাহ তাদের বহু মর্যাদায় উন্নীত করবেন" (৫৮:১১); আর: "আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে যথার্থ ভয় করে" (৩৫:২৮)। অর্থাৎ সত্যিকারের জ্ঞান স্রষ্টার প্রতি ভয় ও বিস্ময়ের জায়গা দখল করে না, বরং তাকে আরও গভীর করে। নবী ﷺ শিখিয়েছেন, জ্ঞান অর্জন প্রত্যেক মুসলিমের ওপর ফরজ, আর যে জ্ঞানের পথে চলে, তার জন্য জান্নাতের পথ সহজ করে দেওয়া হয়। ইখলাসের সঙ্গে জ্ঞানচর্চা নিজেই এক ইবাদত।',
        },
      },
      {
        heading: { en: 'A civilisation of learning', bn: 'জ্ঞানের ওপর গড়া সভ্যতা' },
        body: {
          en: 'This ethos bore fruit in history. Inspired by the call to seek knowledge, Muslim societies built libraries, hospitals and centres of study, and made lasting contributions in mathematics, medicine, astronomy and other fields, often preserving and building on earlier Greek, Persian and Indian learning. In the Islamic view there is no conflict between studying God’s revealed words and studying His created world — both are ways of coming to know the same Creator, and both are pursued as a trust and a form of gratitude.',
          bn: 'এই মূল্যবোধ ইতিহাসে ফল দিয়েছে। জ্ঞান অর্জনের ডাকে অনুপ্রাণিত হয়ে মুসলিম সমাজ গড়ে তোলে গ্রন্থাগার, হাসপাতাল ও জ্ঞানচর্চার কেন্দ্র। গণিত, চিকিৎসাবিদ্যা, জ্যোতির্বিদ্যাসহ নানা ক্ষেত্রে তারা স্থায়ী অবদান রাখে, অনেক সময় আগের গ্রিক, পারসিক ও ভারতীয় জ্ঞান সংরক্ষণ করে তার ওপর নতুন কিছু গড়ে। ইসলামের দৃষ্টিতে আল্লাহর নাজিল করা বাণী পড়া আর তাঁর সৃষ্ট জগৎ নিয়ে গবেষণা করার মধ্যে কোনো বিরোধ নেই। দুটোই একই স্রষ্টাকে চেনার পথ, আর দুটোই চর্চা করা হয় আমানত হিসেবে, শুকরিয়ার অংশ হিসেবে।',
        },
      },
    ],
  },
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 'study',
    emoji: '🎓',
    kind: 'resources',
    title: { en: 'Further Study', bn: 'আরও অধ্যয়ন' },
    summary: {
      en: 'A short, curated list of reputable, mainstream da‘wah and aqidah resources.',
      bn: 'নির্ভরযোগ্য, মূলধারার দাওয়াহ ও আকিদা-বিষয়ক উৎসের ছোট একটি বাছাই করা তালিকা।',
    },
    resources: [
      { name: 'Yaqeen Institute', url: 'https://yaqeeninstitute.org', emoji: '🔬',
        en: 'Research-based articles and videos on faith, doubts and aqidah', bn: 'ঈমান, সংশয় ও আকিদা নিয়ে গবেষণাভিত্তিক প্রবন্ধ ও ভিডিও' },
      { name: 'Sapience Institute', url: 'https://sapienceinstitute.org', emoji: '💡',
        en: "Da‘wah and the intellectual case for God and Islam", bn: 'দাওয়াহ, এবং আল্লাহ ও ইসলামের পক্ষে বুদ্ধিবৃত্তিক যুক্তি' },
      { name: 'WhyIslam (ICNA)', url: 'https://www.whyislam.org', emoji: '🌱',
        en: 'Introductory articles and Q&A for those exploring Islam', bn: 'ইসলাম অন্বেষণকারীদের জন্য পরিচিতিমূলক প্রবন্ধ ও প্রশ্নোত্তর' },
      { name: 'iERA', url: 'https://iera.org', emoji: '🤝',
        en: 'Da‘wah training and accessible material on core beliefs', bn: 'দাওয়াহ প্রশিক্ষণ ও মূল বিশ্বাস নিয়ে সহজবোধ্য উপকরণ' },
      { name: 'SeekersGuidance', url: 'https://seekersguidance.org', emoji: '📚',
        en: 'Free structured courses in aqidah and the Islamic sciences', bn: 'আকিদা ও ইসলামি জ্ঞানের নানা শাখায় বিনামূল্যে ধাপে ধাপে সাজানো কোর্স' },
      { name: 'AlMaghrib Institute', url: 'https://www.almaghrib.org', emoji: '🎓',
        en: 'Seminars and courses on creed, seerah and the Quran', bn: 'আকিদা, সিরাহ ও কুরআন নিয়ে সেমিনার ও কোর্স' },
      { name: 'Qalam Institute', url: 'https://qalam.institute', emoji: '🎙️',
        en: 'Classes, podcasts and tafsir from qualified scholars', bn: 'যোগ্য আলিমদের ক্লাস, পডকাস্ট ও তাফসির' },
      { name: 'IslamQA', url: 'https://islamqa.info/en', emoji: '❓',
        en: 'Referenced answers on belief and practice by scholars', bn: 'আলিমদের রেফারেন্সসহ বিশ্বাস ও আমল বিষয়ক উত্তর' },
      { name: 'Bayyinah Institute', url: 'https://bayyinah.com', emoji: '📗',
        en: 'Quranic Arabic and Quran study courses and reflections', bn: 'কুরআনি আরবি ও কুরআন অধ্যয়নের কোর্স, সঙ্গে কুরআন নিয়ে ভাবনা' },
      { name: 'IslamHouse', url: 'https://islamhouse.com/en/', emoji: '🏠',
        en: 'Free introductory articles, books and audio in many languages', bn: 'বহু ভাষায় বিনামূল্যে পরিচিতিমূলক প্রবন্ধ, বই ও অডিও' },
      { name: 'Muslim Central', url: 'https://muslimcentral.com', emoji: '🎧',
        en: 'Large free audio library of lectures by mainstream scholars', bn: 'মূলধারার আলিমদের বক্তৃতার বিনামূল্যের বিশাল অডিও লাইব্রেরি' },
      { name: 'New Muslim Academy', url: 'https://www.newmuslimacademy.org', emoji: '🤝',
        en: 'Free classes and mentorship for those new to Islam', bn: 'ইসলামে নতুনদের জন্য বিনামূল্যে ক্লাস ও ব্যক্তিগত দিকনির্দেশনা' },
      { name: 'IslamReligion.com', url: 'https://www.islamreligion.com', emoji: '🌍',
        en: 'Introductory articles and answers for those exploring Islam, in many languages', bn: 'ইসলাম অন্বেষণকারীদের জন্য বহু ভাষায় পরিচিতিমূলক প্রবন্ধ ও উত্তর' },
      { name: 'AboutIslam', url: 'https://aboutislam.net', emoji: '📰',
        en: 'Articles and Q&A on faith, ethics and everyday questions', bn: 'বিশ্বাস, নৈতিকতা ও দৈনন্দিন প্রশ্ন নিয়ে প্রবন্ধ ও প্রশ্নোত্তর' },
      { name: 'GainPeace', url: 'https://www.gainpeace.com', emoji: '☮️',
        en: 'Da‘wah outreach explaining Islam’s core beliefs clearly and calmly', bn: 'ইসলামের মূল বিশ্বাসগুলো স্পষ্ট ও শান্তভাবে বুঝিয়ে দেওয়া দাওয়াহ উদ্যোগ' },
    ],
  },
];
