/**
 * Tadabbur long-form articles — surah 58.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "58:1": {
    "sections": [
      {
        "h": {
          "en": "Heard Before It Is Told",
          "bn": "কাহিনির আগেই শোনার খবর"
        },
        "p": [
          {
            "en": "Qad sami'a Allahu qawla allati tujadiluka fi zawjiha: Allah has heard the words of the woman who argues with you about her husband. The surah does not open with a command, an oath or a call to the believers. It opens with the report that a hearing has already taken place, in the past tense, introduced by qad. At-Tabari reads the sentence as Allah addressing His Prophet ﷺ directly: Allah has heard, O Muhammad, the words of the woman who was arguing with the Messenger of Allah ﷺ about her husband.",
            "bn": "কাদ সামি‘আল্লাহু কাওলাল্লাতী তুজাদিলুকা ফী যাওজিহা: যে নারী তার স্বামীর বিষয়ে তোমার সঙ্গে বাদানুবাদ করছে, আল্লাহ তার কথা শুনেছেন। সূরাটি কোনো আদেশ, কসম বা মুমিনদের প্রতি ডাক দিয়ে শুরু হয়নি। শুরু হয়েছে একটি খবর দিয়ে: শোনা আগেই হয়ে গেছে। ক্রিয়াটি অতীতকালের, তার আগে বসেছে কাদ। তাবারীর মতে এখানে আল্লাহ সরাসরি তাঁর নবী ﷺ-কে বলছেন: হে মুহাম্মাদ, যে নারী তার স্বামীর ব্যাপারে আল্লাহর রাসূল ﷺ-এর সঙ্গে তর্ক করছিল, আল্লাহ তার কথা শুনেছেন।"
          },
          {
            "en": "Al-Qurtubi records that the surah is Madinan in the view of all, with two exceptions he names: a report from 'Ata' that its first ten verses are Madinan and the rest Makkan, and al-Kalbi's view that only the verse on secret conversations came down in Makkah. He also notes two recitations of the opening, with the dal of qad merged into the sin and with it pronounced clearly. The rulings that follow in 58:2 to 58:4 are another verse's ground; this article stays with the hearing.",
            "bn": "কুরতুবী লেখেন, সবার মতেই সূরাটি মাদানী। তবে দুটি ব্যতিক্রম তিনি উল্লেখ করেন। আতা থেকে এক বর্ণনা আছে যে প্রথম দশটি আয়াত মাদানী আর বাকিগুলো মক্কী। আর কালবীর মতে কেবল গোপন পরামর্শের আয়াতটি মক্কায় নাজিল হয়েছে। শুরুর শব্দ দুটির দুই রকম কিরাআতের কথাও তিনি বলেন: কাদ-এর দাল সীনের সঙ্গে মিশিয়ে, আবার আলাদা স্পষ্ট করে। ৫৮:২ থেকে ৫৮:৪ আয়াতে যে বিধান আসছে, তা অন্য আয়াতের আলোচনার বিষয়। এ লেখা থাকবে শোনার কথাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Woman of the Ansar",
          "bn": "আনসারের এক নারী"
        },
        "p": [
          {
            "en": "At-Tabari says the woman who argued was from the Ansar, and that scholars differed over her name and lineage: Khawla bint Tha'labah, Khuwayla bint Tha'labah, Khuwayla bint Khuwaylid, Khuwayla bint as-Samit, or Khuwayla bint ad-Dulayj. Her husband was Aws ibn as-Samit. Her arguing, he explains, was her going back to the Prophet ﷺ over her husband's affair and his words to her, you are to me like my mother's back. That, he adds, is what the interpreters said, and the reports support one another.",
            "bn": "তাবারী বলেন, যে নারী তর্ক করেছিলেন তিনি আনসারদের একজন। তাঁর নাম ও বংশ নিয়ে আলেমদের মতভেদ আছে। কেউ বলেন খাওলাহ বিনত সা‘লাবাহ, কেউ খুওয়াইলাহ বিনত সা‘লাবাহ, কেউ খুওয়াইলাহ বিনত খুওয়াইলিদ, কেউ খুওয়াইলাহ বিনতুস সামিত, কেউ খুওয়াইলাহ বিনতুদ দুলাইজ। তাঁর স্বামী আওস ইবনুস সামিত। তাবারী ব্যাখ্যা করেন, তাঁর তর্ক মানে স্বামীর ব্যাপারটা নিয়ে বারবার নবী ﷺ-এর কাছে ফিরে আসা। স্বামী তাঁকে বলেছিলেন: তুমি আমার কাছে আমার মায়ের পিঠের মতো। তাবারী যোগ করেন, তাফসীরকারেরা এ কথাই বলেছেন, আর বর্ণনাগুলো একে অন্যকে সমর্থন করে।"
          },
          {
            "en": "Al-Qurtubi gives Khawla bint Tha'labah, notes that some said bint Hakim and some that her name was Jamila, and judges Khawla the more correct. Her husband, he says, was Aws ibn as-Samit, brother of 'Ubadah ibn as-Samit. He relays an-Nahhas: the people of tafsir agree she was Khawla and her husband Aws, and the differing lineages are no contradiction, since a person may be named after a father, a mother or a grandfather. The Muyassar names the same pair; as-Sa'di names neither.",
            "bn": "কুরতুবী নাম দেন খাওলাহ বিনত সা‘লাবাহ। তিনি জানান, কেউ বলেছেন বিনত হাকীম, কেউ বলেছেন তাঁর নাম জামীলাহ। তবে তাঁর বিচারে খাওলাহই বেশি সঠিক। স্বামী আওস ইবনুস সামিত, যিনি উবাদাহ ইবনুস সামিত (রাঃ)-এর ভাই। কুরতুবী নাহহাসের কথাও আনেন: তাফসীরবিদেরা একমত যে তিনি খাওলাহ আর তাঁর স্বামী আওস। বংশের ভিন্নতা কোনো বৈপরীত্য নয়, কারণ মানুষকে কখনো বাবার নামে, কখনো মায়ের নামে, কখনো দাদার নামে ডাকা হয়। মুয়াসসারও এই দুজনের নামই বলে। সা’দী কারও নাম নেন না।"
          },
          {
            "en": "How did she speak of him? In a report at-Tabari carries from Muhammad ibn Ka'b al-Qurazi, her husband regrets his words; when she urges him to ask the Prophet ﷺ he says he is too shy, so she asks to go, and he tells her to ask. Before the Prophet ﷺ she calls Aws the father of her children and the dearest of people to her; al-Baghawi has the same words. The verse describes one household's trouble as these sources tell it, and licenses nothing against any living person.",
            "bn": "স্বামীর কথা তিনি কীভাবে বলেছিলেন? মুহাম্মাদ ইবন কা‘ব আল-কুরাযী থেকে তাবারী যে বর্ণনা আনেন, তাতে স্বামী নিজের কথার জন্য অনুতপ্ত হন। স্ত্রী তাঁকে নবী ﷺ-এর কাছে গিয়ে জিজ্ঞেস করতে বলেন, কিন্তু তাঁর লজ্জা লাগে। তখন স্ত্রী নিজে যেতে চান, আর স্বামী বলেন, যাও, জিজ্ঞেস করো। নবী ﷺ-এর সামনে তিনি আওসকে বলেন তাঁর সন্তানদের বাবা, মানুষের মধ্যে তাঁর সবচেয়ে প্রিয়জন। বাগাভীর বর্ণনাতেও একই কথা আছে। আয়াতটি এই সূত্রগুলোর ভাষ্যে এক পরিবারের সংকটের বর্ণনা দেয়। কোনো জীবিত মানুষের বিরুদ্ধে কিছু করার অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wording Ibn Majah Kept",
          "bn": "ইবন মাজাহর সংকলনে তাঁর কথা"
        },
        "p": [
          {
            "en": "The narration that names her and preserves her words comes through 'Urwah ibn az-Zubayr from 'A'ishah, who was in the same house. At-Tabari, Ibn Kathir and al-Qurtubi all carry it, and al-Qurtubi says Ibn Majah recorded it in his Sunan. What follows is Sunan Ibn Majah 2063 in full, rendered closely from the Arabic, except that the closing citation of the verse is summarised rather than repeated.",
            "bn": "যে বর্ণনায় তাঁর নাম আছে আর তাঁর নিজের কথাগুলো রক্ষা পেয়েছে, সেটি এসেছে উরওয়াহ ইবনুয যুবাইর থেকে, তিনি শুনেছেন আয়িশাহ (রাঃ) থেকে। আয়িশাহ (রাঃ) তখন একই ঘরে ছিলেন। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই বর্ণনাটি এনেছেন। কুরতুবী বলেন, ইবন মাজাহ তাঁর সুনানে এটি সংকলন করেছেন। নিচে সুনান ইবন মাজাহ ২০৬৩ পুরোটাই দেওয়া হলো, আরবি মূলের কাছাকাছি থেকে। শুধু শেষে আয়াতের উদ্ধৃতিটুকু আবার না লিখে সংক্ষেপে বলা হয়েছে।"
          },
          {
            "en": "'A'ishah said: \"Blessed is He Whose hearing encompasses all things. I was hearing the words of Khawlah bint Tha'labah, and some of them were hidden from me, while she complained of her husband to the Messenger of Allah ﷺ, saying: 'O Messenger of Allah, he consumed my youth and I bore him child after child, until, when I grew old and my childbearing ended, he declared zihar on me. O Allah, I complain to You.' She had not left when Jibril came down with these verses.\" The opening of 58:1 follows, to and complains to Allah.",
            "bn": "আয়িশাহ (রাঃ) বলেন: \"বরকতময় তিনি, যাঁর শ্রবণ সবকিছুকে ঘিরে আছে। আমি খাওলাহ বিনত সা‘লাবাহর কথা শুনছিলাম, কিন্তু কিছু কথা আমার কাছে অস্পষ্ট থেকে যাচ্ছিল। তিনি আল্লাহর রাসূল ﷺ-এর কাছে স্বামীর বিরুদ্ধে অভিযোগ করছিলেন আর বলছিলেন: হে আল্লাহর রাসূল, সে আমার যৌবন খেয়ে ফেলেছে, আমি তার জন্য একের পর এক সন্তান জন্ম দিয়েছি। যখন আমার বয়স বেড়ে গেল আর সন্তান হওয়া বন্ধ হলো, তখন সে আমার সঙ্গে জিহার করল। হে আল্লাহ, আমি আপনার কাছে ফরিয়াদ করছি। তিনি সেখান থেকে সরেননি, এর মধ্যেই জিবরাঈল (আঃ) এই আয়াতগুলো নিয়ে নেমে এলেন।\" এরপর ৫৮:১ আয়াতের শুরু থেকে 'আল্লাহর কাছে ফরিয়াদ জানাচ্ছে' পর্যন্ত উদ্ধৃত হয়েছে।"
          },
          {
            "en": "Ibn Majah recorded it without a grading of his own, and none is added here. Ibn Kathir gives a shorter wording through Imam Ahmad that does not name her: praise be to Allah, Whose hearing takes in all voices; the woman who disputed came to the Prophet ﷺ while I was in a corner of the house, not hearing what she said. He notes that al-Bukhari cites this in the Book of Tawhid without a chain, and that an-Nasa'i and Ibn Majah record it too.",
            "bn": "ইবন মাজাহ বর্ণনাটির কোনো মান নিজে উল্লেখ করেননি, এখানেও কোনো মান যোগ করা হয়নি। ইবন কাসীর ইমাম আহমাদের সূত্রে আরও ছোট একটি ভাষ্য আনেন, যাতে নারীর নাম নেই: সব প্রশংসা আল্লাহর, যাঁর শ্রবণ সব আওয়াজকে ধারণ করে। তর্ককারিণী নবী ﷺ-এর কাছে এলেন। আমি ছিলাম ঘরের এক কোণে, তিনি কী বলছেন শুনতে পাচ্ছিলাম না। ইবন কাসীর জানান, বুখারী কিতাবুত তাওহিদে এটি সনদ ছাড়া উল্লেখ করেছেন। নাসাঈ ও ইবন মাজাহও এটি সংকলন করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "She Kept Coming Back",
          "bn": "তিনি বারবার ফিরে আসেন"
        },
        "p": [
          {
            "en": "Al-Baghawi glosses tujadiluka with three verbs: she disputes with you, converses with you, and comes back to you about her husband. Ma'arif al-Qur'an defines mujadalah as pleading one's case persistently and convincingly. As-Sa'di says she complained of her state and his to Allah and to the Messenger ﷺ, repeated it, and said it again and again. At-Tabari mentions that in the reading of 'Abdullah ibn Mas'ud the word is tuhawiruka, she converses with you, and al-Qurtubi also notes the reading tuhawiruka.",
            "bn": "বাগাভী তুজাদিলুকা শব্দের ব্যাখ্যা দেন তিনটি ক্রিয়া দিয়ে: সে তোমার সঙ্গে বিতর্ক করে, কথা চালায়, আর স্বামীর ব্যাপারে বারবার তোমার কাছে ফিরে আসে। মাআরিফুল কুরআনের সংজ্ঞায় মুজাদালাহ মানে নিজের বিষয়টি নাছোড়ভাবে ও যুক্তি দিয়ে তুলে ধরা। সা’দী বলেন, তিনি নিজের ও স্বামীর অবস্থার কথা আল্লাহর কাছে আর রাসূল ﷺ-এর কাছে জানিয়েছেন, বারবার বলেছেন, একই কথা ঘুরিয়ে ফিরিয়ে বলেছেন। তাবারী উল্লেখ করেন, আবদুল্লাহ ইবন মাসঊদ (রাঃ)-এর কিরাআতে শব্দটি তুহাবিরুকা, অর্থাৎ সে তোমার সঙ্গে কথা চালাচ্ছে। কুরতুবীও তুহাবিরুকা কিরাআতের কথা বলেন।"
          },
          {
            "en": "What was she answering? In the report from Muhammad ibn Ka'b al-Qurazi, the Prophet ﷺ says: I see only that you have become forbidden to him. She replies, do not say that, O Prophet of Allah, by Allah he did not mention divorce, and she goes back to him many times. Al-Baghawi's telling adds his words, and I have not been commanded anything concerning your affair. Ma'arif al-Qur'an explains that no revelation had yet come on the question, so he answered by the custom then known.",
            "bn": "তিনি কোন কথার জবাব দিচ্ছিলেন? মুহাম্মাদ ইবন কা‘ব আল-কুরাযীর বর্ণনায় নবী ﷺ বলেন: আমি তো দেখছি, তুমি তার জন্য হারাম হয়ে গেছ। তিনি বলেন, হে আল্লাহর নবী, এমন বলবেন না। আল্লাহর কসম, সে তালাকের কথা মুখে আনেনি। এভাবে তিনি বহুবার নবী ﷺ-এর কাছে কথা ফিরিয়ে আনেন। বাগাভীর বর্ণনায় নবী ﷺ-এর আরেকটি কথা আছে: তোমার বিষয়ে আমাকে এখনো কিছু আদেশ করা হয়নি। মাআরিফুল কুরআন ব্যাখ্যা করে, প্রশ্নটি নিয়ে তখনো কোনো ওহি আসেনি। তাই তিনি তখনকার প্রচলিত রীতি অনুযায়ী উত্তর দিয়েছিলেন।"
          },
          {
            "en": "Her point, that he had not said divorce, appears in al-Baghawi and al-Qurtubi as well. A report at-Tabari carries from Ibn 'Abbas explains why the question was open: the zihar of the Jahiliyyah had counted as divorce, and Aws ibn as-Samit was the first to pronounce it in Islam. She feared it would be a divorce and said, if we part, we perish. Al-Baghawi likewise calls it the first zihar in Islam. She was arguing a case that had no ruling yet.",
            "bn": "তালাক শব্দটি তিনি উচ্চারণ করেননি, এই যুক্তি বাগাভী ও কুরতুবীর বর্ণনাতেও আছে। প্রশ্নটা কেন খোলা ছিল, তাবারী ইবন আব্বাস (রাঃ) থেকে আনা এক বর্ণনায় তা বোঝা যায়। জাহিলিয়াতের জিহার তালাক বলে গণ্য হতো, আর ইসলামে প্রথম জিহার করেন আওস ইবনুস সামিত। স্ত্রী আশঙ্কা করেছিলেন এটা তালাক হয়ে যাবে। তিনি বলেছিলেন, আমরা আলাদা হলে ধ্বংস হয়ে যাব। বাগাভীও একে ইসলামের প্রথম জিহার বলেছেন। অর্থাৎ তিনি এমন এক বিষয়ে তর্ক করছিলেন, যার বিধান তখনো আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Her Complaint Turned Upward",
          "bn": "ফরিয়াদ গেল আল্লাহর দরবারে"
        },
        "p": [
          {
            "en": "Wa tashtaki ila Allah: and she complains to Allah. At-Tabari explains that the woman who argued was complaining to Allah of the grief that had come upon her from her husband's zihar, and asking Him for relief. The Muyassar says she was imploring Allah to lift her distress. Al-Qurtubi adds a note on the word itself: shaka and ishtaka carry one meaning. The verse gives her two addressees in one sentence, the Prophet ﷺ with whom she argues and Allah to whom she complains.",
            "bn": "ওয়া তাশতাকী ইলাল্লাহ: আর সে আল্লাহর কাছে ফরিয়াদ জানাচ্ছে। তাবারী ব্যাখ্যা করেন, স্বামীর জিহারের কারণে যে দুশ্চিন্তা তাঁর উপর নেমে এসেছিল, তর্ককারিণী তা আল্লাহর কাছে জানাচ্ছিলেন, আর তাঁর কাছে মুক্তির পথ চাইছিলেন। মুয়াসসার বলে, তিনি নিজের কষ্ট দূর করার জন্য আল্লাহর কাছে কাকুতি-মিনতি করছিলেন। কুরতুবী শব্দটি নিয়েও একটি কথা বলেন: শাকা আর ইশতাকা একই অর্থের। এক বাক্যেই আয়াতটি তাঁর কথার দুজন শ্রোতার উল্লেখ করে: নবী ﷺ, যাঁর সঙ্গে তিনি তর্ক করছেন, আর আল্লাহ, যাঁর কাছে তিনি ফরিয়াদ করছেন।"
          },
          {
            "en": "The reports give her complaint in her own voice. In al-Baghawi's telling, which he gives without a chain, each time she heard the same answer she cried out that she complained to Allah of her need and her hardship, and said: I have small children; if I leave them with him they will be lost, and if I keep them with me they will go hungry. Then she raised her head to the sky: O Allah, I complain to You; O Allah, send down a ruling on the tongue of Your Prophet.",
            "bn": "বর্ণনাগুলোতে তাঁর ফরিয়াদ এসেছে তাঁর নিজের ভাষায়। বাগাভী সনদ ছাড়াই ঘটনাটি বলেন। তাঁর বর্ণনায়, প্রতিবার একই উত্তর শুনে তিনি চিৎকার করে উঠতেন: আমার অভাব আর আমার কষ্টের কথা আমি আল্লাহর কাছে জানাই। তিনি বলতেন, আমার ছোট ছোট বাচ্চা আছে। ওদের তার কাছে রেখে দিলে ওরা হারিয়ে যাবে, আর আমার কাছে রাখলে ওরা না খেয়ে থাকবে। তারপর আকাশের দিকে মাথা তুলে বলতেন: হে আল্লাহ, আমি আপনার কাছে ফরিয়াদ করছি। হে আল্লাহ, আপনার নবীর মুখ দিয়ে বিধান নাজিল করুন।"
          },
          {
            "en": "At-Tabari's report from al-Qurazi has a similar prayer: O Allah, I complain to You today of the hardship of my state, my loneliness, and how hard parting from him is for me. Al-Qurtubi relays from al-Hasan that she asked how revelation could come on everything and be withheld on this; when he said it was as he had told her, she said: to Allah I complain, not to His Messenger. Ma'arif al-Qur'an reads the opening of the surah as an honour to this woman and a consolation: Allah was listening while she pleaded.",
            "bn": "কুরাযী থেকে তাবারীর বর্ণনাতেও প্রায় একই দোয়া আছে: হে আল্লাহ, আজ আমি আপনার কাছে আমার কঠিন অবস্থা, আমার একাকিত্ব আর তার থেকে আলাদা হওয়ার কষ্টের কথা জানাচ্ছি। কুরতুবী হাসান থেকে বর্ণনা করেন, তিনি জানতে চেয়েছিলেন, সব বিষয়ে ওহি আসে, তবে এ বিষয়ে কেন আটকে আছে? নবী ﷺ বললেন, আমি তোমাকে যা বলেছি, বিষয়টা তা-ই। তখন তিনি বললেন: আমি আল্লাহর কাছেই ফরিয়াদ করছি, তাঁর রাসূলের কাছে নয়। মাআরিফুল কুরআন সূরার এই শুরুকে দেখে এই নারীর প্রতি সম্মান আর সান্ত্বনা হিসেবে। তিনি যখন নিজের কথা বলছিলেন, আল্লাহ তখন শুনছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Voices, One Listener",
          "bn": "দুই কণ্ঠ, এক শ্রোতা"
        },
        "p": [
          {
            "en": "Wa Allahu yasma'u tahawurakuma: and Allah hears the exchange between the two of you. At-Tabari names the two: the Messenger of Allah ﷺ and the woman who argued, Khawla bint Tha'labah. Al-Baghawi glosses the word as your going back and forth in speech; the Muyassar as your speaking to each other and replying; as-Sa'di as your conversation between yourselves. So the dual takes in both sides. She argues with him, she complains to Allah, and Allah hears the whole exchange, his answers as well as her pleas.",
            "bn": "ওয়াল্লাহু ইয়াসমা‘উ তাহাউরাকুমা: আর আল্লাহ তোমাদের দুজনের কথোপকথন শুনছেন। তাবারী দুজনের নাম বলেন: আল্লাহর রাসূল ﷺ আর তর্ককারিণী খাওলাহ বিনত সা‘লাবাহ। বাগাভীর ব্যাখ্যায় শব্দটির মানে দুজনের মধ্যে কথা আদান-প্রদান। মুয়াসসারের ভাষায় একে অপরকে বলা ও জবাব দেওয়া। সা’দীর ভাষায় নিজেদের মধ্যে কথাবার্তা। অর্থাৎ দ্বিবচনটি দুই পক্ষকেই ধরে। তিনি নবী ﷺ-এর সঙ্গে তর্ক করছেন, আল্লাহর কাছে ফরিয়াদ করছেন, আর আল্লাহ পুরো কথোপকথনটাই শুনছেন। নবী ﷺ-এর উত্তরও, নারীর অনুনয়ও।"
          },
          {
            "en": "Al-Baghawi, and at-Tabari in a report from Abu al-'Aliyah, set the scene in the room. 'A'ishah was washing one side of the Prophet's ﷺ head, then moved to the other. When revelation began she told the woman to cut her talk short, or in at-Tabari's report signalled her to be quiet: could she not see the face of the Messenger of Allah ﷺ? When revelation came to him, they say, something like sleep would take him. When it ended he said, call your husband, and recited the verses to him.",
            "bn": "বাগাভী, আর আবুল আলিয়াহ থেকে এক বর্ণনায় তাবারী, ঘরের দৃশ্যটা তুলে ধরেন। আয়িশাহ (রাঃ) নবী ﷺ-এর মাথার এক পাশ ধুয়ে দিচ্ছিলেন, তারপর অন্য পাশে গেলেন। ওহি শুরু হলে তিনি নারীকে কথা থামাতে বললেন, তাবারীর বর্ণনায় ইশারায় চুপ করতে বললেন: আল্লাহর রাসূল ﷺ-এর চেহারা দেখছ না? তাঁরা বলেন, ওহি নাজিলের সময় তাঁকে ঘুমের মতো একটা অবস্থা ঘিরে ধরত। ওহি শেষ হলে তিনি বললেন, তোমার স্বামীকে ডেকে আনো। তারপর আয়াতগুলো তাকে পড়ে শোনালেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing and Seeing, Glossed",
          "bn": "সামী‘ ও বাসীর: তাফসীরের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Inna Allaha sami'un basir: indeed Allah is Hearing, Seeing. At-Tabari reads both names against the scene: hearing what the two say in answer to each other, and the rest of His creatures' speech; seeing what they do and what all His servants do. Al-Baghawi brings the names closer to her: hearing what she confides to Him and implores Him for, seeing whoever complains to Him. The Muyassar widens them: hearing every word, seeing everything, with nothing hidden from Him.",
            "bn": "ইন্নাল্লাহা সামী‘উন বাসীর: নিশ্চয়ই আল্লাহ সর্বশ্রোতা, সর্বদ্রষ্টা। তাবারী দুটি নামকে এই দৃশ্যের সঙ্গে মিলিয়ে পড়েন। তাঁরা দুজন একে অপরকে যা বলছেন, আর তাঁর সৃষ্টির বাকি সব কথা, তিনি শোনেন। তাঁরা যা করেন, আর তাঁর সব বান্দা যা করে, তিনি দেখেন। বাগাভী নাম দুটিকে নারীর আরও কাছে নিয়ে আসেন: তিনি গোপনে আল্লাহকে যা বলছেন আর যে কাকুতি জানাচ্ছেন, আল্লাহ তা শোনেন। আর যে তাঁর কাছে ফরিয়াদ করে, তাকে তিনি দেখেন। মুয়াসসার পরিসর বড় করে: তিনি প্রতিটি কথা শোনেন, সবকিছু দেখেন, কিছুই তাঁর কাছে গোপন থাকে না।"
          },
          {
            "en": "As-Sa'di writes that He hears all voices at all times, however varied the needs, and sees the creeping of the black ant on the solid rock in the dark night. This, he says, tells of the perfection of His hearing and seeing and their reach over small matters and great. He then draws a further point from the verse: within it is a hint that Allah would remove her complaint and lift her trial, which is why He went on to state her ruling, and others' in general terms.",
            "bn": "সা’দী লেখেন, সব সময় সব আওয়াজ তিনি শোনেন, প্রয়োজন যত রকমেরই হোক। অন্ধকার রাতে নিরেট পাথরের উপর কালো পিঁপড়ার হেঁটে যাওয়াও তিনি দেখেন। সা’দীর ভাষায়, এ থেকে বোঝা যায় তাঁর শোনা ও দেখা কত পূর্ণ, ছোট-বড় সব বিষয়েই তা পৌঁছে যায়। তারপর তিনি আয়াত থেকে আরেকটি কথা বের করেন: এর ভেতরেই ইঙ্গিত আছে যে আল্লাহ তাঁর ফরিয়াদের কারণ দূর করবেন, তাঁর বিপদ তুলে নেবেন। এ জন্যই আল্লাহ এরপর তাঁর বিধান জানিয়ে দিলেন, সাধারণভাবে অন্যদের বিধানও।"
          },
          {
            "en": "Al-Qurtubi treats the names as attributes. Hearing and seeing, he writes, are two attributes like knowledge, power, life and will, attributes of the Essence which the Creator has always possessed. He relays al-Hakim Abu 'Abdullah on as-Sami': He perceives the sounds that creatures perceive with their ears, without having an ear, meaning that no sound is hidden from Him. 'A'ishah's own opening, praise to Him Whose hearing takes in all voices, says the same in a single breath.",
            "bn": "কুরতুবী নাম দুটিকে সিফাত হিসেবে আলোচনা করেন। তিনি লেখেন, শোনা ও দেখা দুটি সিফাত, যেমন জ্ঞান, ক্ষমতা, জীবন ও ইচ্ছা। এগুলো সত্তাগত সিফাত, স্রষ্টা সব সময়ই এগুলোর অধিকারী। আস-সামী‘ নামের ব্যাখ্যায় তিনি হাকিম আবূ আবদুল্লাহর কথা আনেন: সৃষ্টি কান দিয়ে যে আওয়াজ ধরে, তিনি তা ধরেন কান ছাড়াই। অর্থাৎ কোনো আওয়াজ তাঁর কাছে গোপন থাকে না। আয়িশাহ (রাঃ)-এর মুখের প্রথম কথাটিও তা-ই বলে: প্রশংসা তাঁর, যাঁর শ্রবণ সব আওয়াজকে ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "When 'Umar Stood Still",
          "bn": "যেদিন উমর (রাঃ) দাঁড়িয়ে রইলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir carries, through Ibn Abi Hatim from Abu Yazid, that Khawla bint Tha'labah stopped 'Umar while he walked with people. He stood, leaned his head towards her and listened until she had finished. A man asked whether he had held back the men of Quraysh for this old woman. 'Umar said: this is a woman whose complaint Allah heard from above seven heavens. Ibn Kathir himself notes that the chain is broken between Abu Yazid and 'Umar, though it is narrated by another route.",
            "bn": "ইবন কাসীর ইবন আবী হাতিমের সূত্রে আবূ ইয়াযীদ থেকে বর্ণনা করেন, উমর (রাঃ) লোকজনের সঙ্গে হাঁটছিলেন, তখন খাওলাহ বিনত সা‘লাবাহ তাঁকে থামালেন। তিনি দাঁড়ালেন, মাথা তাঁর দিকে ঝুঁকিয়ে কথা শেষ হওয়া পর্যন্ত শুনলেন। একজন জিজ্ঞেস করল, এই বৃদ্ধার জন্য আপনি কুরাইশের লোকদের আটকে রাখলেন? উমর (রাঃ) বললেন: ইনি সেই নারী, যাঁর ফরিয়াদ আল্লাহ সাতটি আসমানের উপর থেকে শুনেছেন। ইবন কাসীর নিজেই জানান, আবূ ইয়াযীদ ও উমর (রাঃ)-এর মাঝে সনদ বিচ্ছিন্ন, যদিও অন্য সূত্রেও এটি বর্ণিত হয়েছে।"
          },
          {
            "en": "Al-Qurtubi gives a version without a chain, in which she admonishes 'Umar and he answers: does the Lord of the worlds hear her words, and 'Umar not hear them? Whatever weight such reports bear, the verse itself is plain. One woman's words, spoken partly out of earshot of the person beside her, are the first thing this surah reports, and they are reported as heard. The question the verse leaves with its reader is where their own complaint is taken, and who is listening.",
            "bn": "কুরতুবী সনদ ছাড়া একটি ভাষ্য আনেন। তাতে তিনি উমর (রাঃ)-কে উপদেশ দেন, আর উমর (রাঃ) বলেন: জগতসমূহের রব তাঁর কথা শুনবেন, আর উমর শুনবে না? এসব বর্ণনার ওজন যা-ই হোক, আয়াতটি নিজে পরিষ্কার। পাশে বসা মানুষটিও যাঁর সব কথা ধরতে পারেননি, সেই এক নারীর কথাই এ সূরার প্রথম খবর। আর সে খবর হলো, তাঁর কথা শোনা হয়েছে। পাঠকের জন্য আয়াতটি একটি প্রশ্ন রেখে যায়: নিজের ফরিয়াদ আমি কোথায় নিয়ে যাই, আর কে তা শুনছেন?"
          }
        ]
      }
    ]
  },
  "58:7": {
    "sections": [
      {
        "h": {
          "en": "The Eye of the Heart",
          "bn": "দেখা যখন অন্তরের চোখে"
        },
        "p": [
          {
            "en": "A-lam tara anna Allaha ya'lamu ma fi as-samawati wa ma fi al-ard: have you not seen that Allah knows what is in the heavens and what is on the earth? At-Tabari takes the question as addressed to the Prophet ﷺ and glosses the seeing as looking with the eye of the heart, so that he sees that nothing in the heavens or the earth, small or great, is hidden from Allah. The Muyassar renders the opening as have you not known. Al-Qurtubi adds that no secret and no open matter is hidden from Him.",
            "bn": "আলাম তারা আন্নাল্লাহা ইয়া'লামু মা ফিস-সামাওয়াতি ওয়া মা ফিল-আরদ: তুমি কি দেখোনি, আসমানে যা আছে আর যমীনে যা আছে, আল্লাহ সব জানেন? তাবারীর মতে প্রশ্নটি নবী ﷺ-এর প্রতি। আর এখানে দেখা মানে অন্তরের চোখে দেখা, যাতে তিনি দেখতে পান, আসমান-যমীনের ছোট-বড় কোনো কিছুই আল্লাহর কাছে লুকানো নয়। মুয়াসসার শুরুটার অর্থ করে এভাবে: তুমি কি জানো না? কুরতুবী যোগ করেন, গোপন বা প্রকাশ্য কোনো বিষয়ই তাঁর কাছে অজানা থাকে না।"
          },
          {
            "en": "At-Tabari then draws out the argument the question carries: how could the deeds of these disbelievers, and their disobedience to their Lord, be hidden from One who has this attribute? The verse comes straight after 58:6, where Allah raises them all and informs them of what they did. Ibn Kathir, in the abridged English, explains that verse as Allah recording and keeping every deed although they themselves forgot. Ma'arif al-Qur'an adds that a person forgets such deeds because he treats them as trivial. Verse 58:7 then brings that knowledge into a single room.",
            "bn": "প্রশ্নটির ভেতরে যে যুক্তি আছে, তাবারী তা খুলে দেখান: যাঁর গুণ এমন, তাঁর কাছে এই কাফিরদের আমল আর রবের প্রতি তাদের নাফরমানি কী করে লুকানো থাকবে? আয়াতটি এসেছে ঠিক ৫৮:৬ আয়াতের পরে। সেখানে আল্লাহ তাদের সবাইকে উঠাবেন আর তারা কী করেছিল তা জানিয়ে দেবেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ সে আয়াতের ব্যাখ্যায় বলে, তারা ভুলে গেলেও আল্লাহ প্রতিটি আমল লিখে সংরক্ষণ করেছেন। মাআরিফুল কুরআন যোগ করে, মানুষ এমন কাজ ভুলে যায় কারণ সে সেগুলোকে তুচ্ছ মনে করে। ৫৮:৭ আয়াত সেই জ্ঞানকে নিয়ে আসে একটি ঘরের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Najwa, Glossed Four Ways",
          "bn": "নাজওয়ার চার রকম ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Ma yakunu min najwa thalathatin: there is no najwa of three. Ibn Kathir glosses najwa thalatha as the secret of three. Al-Baghawi gives the confidential talk of three, and explains it as anything a man confides to his two companions; then, under it is said, he offers a second reading: there are no three people conferring, each confiding in the others, but He is their fourth in knowledge. The Muyassar puts it as three of His creation holding a secret conversation among themselves.",
            "bn": "মা ইয়াকূনু মিন নাজওয়া ছালাছাতিন: তিনজনের এমন কোনো নাজওয়া হয় না। ইবন কাসীর নাজওয়া ছালাছাহ-র অর্থ করেন তিনজনের গোপন কথা। বাগাভী বলেন তিনজনের কানে কানে আলাপ, অর্থাৎ একজন মানুষ তার দুই সঙ্গীকে গোপনে যা বলে। তারপর 'বলা হয়' কথাটি দিয়ে তিনি দ্বিতীয় একটি অর্থ আনেন: এমন তিনজন পরামর্শকারী নেই, যারা একে অন্যের সঙ্গে চুপিচুপি কথা বলে, অথচ জ্ঞানে তিনি তাদের চতুর্থ নন। মুয়াসসারের ভাষায়, তাঁর সৃষ্টির তিনজন নিজেদের মধ্যে গোপন আলাপ করে।"
          },
          {
            "en": "Al-Qurtubi works through the word itself. Najwa, he says, is sirar, confidential speech, and it is a verbal noun; a verbal noun can be used to describe people, so one says qawmun najwa, people in confidential talk, as in 17:47: wa idh hum najwa, and when they confer in private. He then records two definitions. One says that every confidential exchange is najwa. The other says that najwa is what three people say in seclusion while keeping something hidden among themselves, and that sirar is what passes between two.",
            "bn": "কুরতুবী শব্দটি নিয়েই আলোচনা করেন। তিনি বলেন, নাজওয়া মানে সিরার, অর্থাৎ গোপন কথা, আর এটি একটি মাসদার বা ক্রিয়াবাচক বিশেষ্য। মাসদার দিয়ে মানুষের বর্ণনাও দেওয়া যায়। তাই বলা হয় কাওমুন নাজওয়া, মানে গোপন আলাপে থাকা লোকজন। ১৭:৪৭ আয়াতে যেমন এসেছে: ওয়া ইয হুম নাজওয়া, আর যখন তারা গোপনে পরামর্শ করে। তারপর তিনি দুটি সংজ্ঞা উল্লেখ করেন। একটি মতে, যেকোনো গোপন কথাই নাজওয়া। অন্য মতে, তিনজন নিভৃতে বসে কিছু লুকিয়ে যে কথা বলে, সেটাই নাজওয়া, আর দুজনের মধ্যে যা হয় তা সিরার।"
          },
          {
            "en": "A third explanation al-Qurtubi gives under it is said: najwa comes from najwa in the sense of raised ground. People who confer withdraw with their secret the way a piece of high ground stands apart from what surrounds it. The meaning, he continues, is that Allah's hearing encompasses every speech, and he points back to the surah's opening: Allah heard the disputing of the woman whose husband had pronounced zihar on her. That opening at 58:1 has its own article.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে তৃতীয় একটি ব্যাখ্যাও দেন। নাজওয়া এসেছে নাজওয়াহ থেকে, যার অর্থ উঁচু জমি। উঁচু জমি যেমন আশপাশ থেকে আলাদা হয়ে দাঁড়িয়ে থাকে, পরামর্শকারীরাও তেমনি নিজেদের গোপন কথা নিয়ে আলাদা হয়ে যায়। তিনি বলেন, এর অর্থ হলো আল্লাহর শোনা প্রতিটি কথাকে ঘিরে আছে। তারপর তিনি সূরার শুরুর দিকে ফিরিয়ে দেন: যে নারীর স্বামী তার সঙ্গে জিহার করেছিল, তার বাদানুবাদ আল্লাহ শুনেছেন। ৫৮:১ আয়াতের সেই শুরুটা নিয়ে আলাদা প্রবন্ধ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three, Five, and Every Count",
          "bn": "তিন, পাঁচ আর সব সংখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari walks through the clauses one at a time. There is no najwa of three of His creation but He is their fourth, hearing their secret and their confidential talk, with nothing of their secrets hidden from Him. Nor of five but He is their sixth in the same way. Wa la adna min dhalika, nor fewer than that, he explains as fewer than three; wa la akthar, nor more, as more than five. Illa huwa ma'ahum, but He is with them when they confer, ayna ma kanu, in whatever spot and place they are.",
            "bn": "তাবারী বাক্যগুলো একটা একটা করে খোলেন। তাঁর সৃষ্টির তিনজনের এমন কোনো নাজওয়া নেই, যেখানে তিনি চতুর্থ নন। তিনি তাদের গোপন কথা আর কানাকানি শোনেন, তাদের কোনো রহস্যই তাঁর কাছে লুকানো নয়। পাঁচজনেরও এমন নাজওয়া নেই, যেখানে তিনি একইভাবে ষষ্ঠ নন। ওয়া লা আদনা মিন যালিকা, এর চেয়ে কম নয়, তাঁর ব্যাখ্যায় মানে তিনজনের কম। ওয়া লা আকছার, বেশিও নয়, মানে পাঁচজনের বেশি। ইল্লা হুয়া মা'আহুম, তারা পরামর্শ করলে তিনি তাদের সঙ্গে আছেন, আইনা মা কানূ, যে জায়গায়, যে স্থানেই তারা থাকুক।"
          },
          {
            "en": "Why name three and five at all? Al-Qurtubi reports al-Farra': the number itself is not the aim. What Allah intended, and He knows best, is that He is with every number, few or many, knowing what they say in secret and aloud, with nothing hidden from Him; for that reason the verse was content to name some numbers and not others. The two counts stand for every count, and the closing pair, fewer and more, leaves no gathering outside the clause.",
            "bn": "তিনজন আর পাঁচজনের কথাই বা আলাদা করে কেন? কুরতুবী ফাররার মত উদ্ধৃত করেন: সংখ্যাটাই এখানে উদ্দেশ্য নয়। আল্লাহর উদ্দেশ্য, আর তিনিই ভালো জানেন, এটা বোঝানো যে কম হোক বা বেশি, প্রতিটি সংখ্যার সঙ্গেই তিনি আছেন। তারা গোপনে বা প্রকাশ্যে যা বলে তিনি জানেন, কিছুই তাঁর কাছে লুকানো নয়। এ কারণেই আয়াতটি কয়েকটি সংখ্যার নাম নিয়েই থেমেছে, সবগুলোর নয়। দুটি সংখ্যা তাই সব সংখ্যার প্রতিনিধি। আর শেষের জোড়া কথা, কম আর বেশি, কোনো বৈঠককেই বাক্যের বাইরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Readers Voiced It",
          "bn": "কারীরা যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "The commentators also record how the verse was read. At-Tabari says the readers of the great cities read ma yakunu with the masculine ya', except Abu Ja'far, who read ma takunu with the feminine ta'; he holds that the ya' is correct, because the authorities agree on it and it is sound Arabic. Al-Qurtubi and al-Baghawi give the reasons on each side: the ya' because a word stands between the verb and najwa, the ta' because najwa is feminine. Al-Qurtubi names al-A'raj, Abu Haywa and 'Isa alongside Abu Ja'far.",
            "bn": "আয়াতটি কীভাবে পড়া হয়েছে, মুফাসসিরগণ তাও লিখে রেখেছেন। তাবারী বলেন, বড় বড় শহরের কারীরা মা ইয়াকূনু পড়েছেন পুংলিঙ্গের ইয়া দিয়ে। ব্যতিক্রম কেবল আবু জা'ফর, তিনি পড়েছেন মা তাকূনু, স্ত্রীলিঙ্গের তা দিয়ে। তাবারীর মতে ইয়া-ই সঠিক, কারণ নির্ভরযোগ্য কারীরা এতে একমত আর আরবিতেও তা শুদ্ধ। দুই পক্ষের কারণ দেন কুরতুবী ও বাগাভী। ইয়া, কারণ ক্রিয়া আর নাজওয়ার মাঝে একটি শব্দ আছে। তা, কারণ নাজওয়া শব্দটি স্ত্রীলিঙ্গ। কুরতুবী আবু জা'ফরের সঙ্গে আ'রাজ, আবু হাইওয়া ও ঈসার নামও উল্লেখ করেন।"
          },
          {
            "en": "Then wa la akthara. Al-Qurtubi says most read it with a fatha on the final ra', following the wording, while its grammatical place is genitive. Al-Baghawi reports that Ya'qub read wa la aktharu in the nominative, on the place the phrase had before min entered it; al-Qurtubi lists Sallam, Ya'qub, Abu al-'Aliya, Nasr and 'Isa for that reading, and adds that az-Zuhri and 'Ikrima read akbar, greater, with a ba'. He also cites az-Zamakhshari for Ibn Abi 'Abla's thalathatan and khamsatan in the accusative, as a circumstantial phrase with they confer understood.",
            "bn": "এরপর ওয়া লা আকছারা। কুরতুবী বলেন, অধিকাংশ কারী শব্দের রূপ অনুসরণ করে শেষের রা-তে যবর দিয়ে পড়েছেন, যদিও ব্যাকরণে এর অবস্থান যের-এর। বাগাভী জানান, ইয়াকুব পড়েছেন ওয়া লা আকছারু, পেশ দিয়ে। কারণ 'মিন' যুক্ত হওয়ার আগে বাক্যে শব্দটির অবস্থান ছিল সেটাই। কুরতুবী এই পাঠের জন্য সাল্লাম, ইয়াকুব, আবুল আলিয়া, নাসর ও ঈসার নাম দেন। তিনি আরও বলেন, যুহরী ও ইকরিমা পড়েছেন আকবার, অর্থাৎ বড়, বা দিয়ে। যামাখশারীর বরাতে তিনি ইবন আবী আবলার পাঠও আনেন: ছালাছাতান ও খামসাতান, যবর দিয়ে, হাল হিসেবে, যেখানে 'তারা পরামর্শ করে' কথাটি উহ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "With Them, in Their Words",
          "bn": "‘তাদের সঙ্গে’, তাঁদের ভাষায়"
        },
        "p": [
          {
            "en": "Illa huwa ma'ahum ayna ma kanu: but He is with them wherever they are. Ibn Kathir explains the clause as Allah looking upon them and hearing their speech, their secret and their confidential talk. He then reports that more than one scholar has recorded a consensus that what this verse means is the with-ness of Allah's knowledge. There is no doubt, he says, that this is meant; but His hearing, too, encompasses them along with His knowledge, and His sight penetrates them, so that nothing of their affairs is absent from Him.",
            "bn": "ইল্লা হুয়া মা'আহুম আইনা মা কানূ: তারা যেখানেই থাকুক, তিনি তাদের সঙ্গে আছেন। ইবন কাসীর এর ব্যাখ্যায় বলেন, আল্লাহ তাদের দেখছেন, তাদের কথা, তাদের গোপন কথা আর কানাকানি শুনছেন। তারপর তিনি জানান, একজনের বেশি আলেম ইজমা উল্লেখ করেছেন যে এ আয়াতে উদ্দেশ্য আল্লাহর জ্ঞানের সঙ্গ, অর্থাৎ জ্ঞানের মাধ্যমে সঙ্গে থাকা। তিনি বলেন, এটাই যে উদ্দেশ্য তাতে কোনো সন্দেহ নেই। তবে জ্ঞানের সঙ্গে তাঁর শোনাও তাদের ঘিরে আছে, আর তাঁর দৃষ্টি তাদের ভেদ করে যায়। ফলে তাদের কোনো বিষয়ই তাঁর অগোচরে থাকে না।"
          },
          {
            "en": "At-Tabari says that by He is their fourth is meant that He witnesses them by His knowledge, while He is upon His Throne, and he gives a chain to ad-Dahhak, who said of the verse: He is above the Throne and His knowledge is with them. As-Sa'di states that the with-ness meant here is the with-ness of knowledge, and of encompassing what they conferred about and kept hidden among themselves. The Muyassar has their fourth by His knowledge and His encompassing, and with them by His knowledge in whatever place they are. Al-Baghawi writes their fourth in knowledge.",
            "bn": "তাবারী বলেন, 'তিনি তাদের চতুর্থ' কথার অর্থ, তিনি তাঁর জ্ঞান দিয়ে তাদের প্রত্যক্ষ করছেন, আর তিনি আছেন তাঁর আরশের উপর। এর সমর্থনে তিনি সনদসহ দাহহাকের কথা আনেন। দাহহাক এই আয়াত সম্পর্কে বলেছেন: তিনি আরশের উপরে, আর তাঁর জ্ঞান তাদের সঙ্গে। সা'দী বলেন, এখানে সঙ্গে থাকা মানে জ্ঞানের সঙ্গ। তারা যা নিয়ে পরামর্শ করেছে আর নিজেদের মধ্যে লুকিয়ে রেখেছে, সবকিছু তাঁর জ্ঞানের বেষ্টনীতে। মুয়াসসারের ভাষায়, তিনি তাঁর জ্ঞান ও বেষ্টনে তাদের চতুর্থ, আর যেখানেই থাকুক, জ্ঞান দিয়ে তাদের সঙ্গে। বাগাভী লেখেন, জ্ঞানে তিনি তাদের চতুর্থ।"
          },
          {
            "en": "Al-Qurtubi explains He is their fourth as He knows and hears their najwa, and offers as evidence that the verse opens with knowledge and then closes with knowledge. He adds, under it is said, that Allah is with them by His knowledge wherever they are, without departing or moving. This article reports these readings in the commentators' own terms and adds nothing of its own to them. The same words, ayna ma, wherever, return at 57:4: and He is with you wherever you are.",
            "bn": "কুরতুবী 'তিনি তাদের চতুর্থ'-এর ব্যাখ্যা দেন এভাবে: তিনি তাদের নাজওয়া জানেন ও শোনেন। প্রমাণ হিসেবে বলেন, আয়াতটি শুরু হয়েছে জ্ঞান দিয়ে, শেষও হয়েছে জ্ঞান দিয়ে। 'বলা হয়' কথাটি দিয়ে তিনি আরও আনেন: তারা যেখানেই থাকুক, আল্লাহ তাঁর জ্ঞান দিয়ে তাদের সঙ্গে আছেন, কোনো সরে যাওয়া বা স্থানান্তর ছাড়াই। এই প্রবন্ধ এসব ব্যাখ্যা মুফাসসিরদের নিজেদের ভাষাতেই তুলে ধরছে, নিজের পক্ষ থেকে কিছু যোগ করছে না। আইনা মা, যেখানেই, এই একই শব্দ আবার এসেছে ৫৭:৪ আয়াতে: তোমরা যেখানেই থাকো, তিনি তোমাদের সঙ্গে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Opened and Sealed With Knowing",
          "bn": "জ্ঞানে শুরু, জ্ঞানেই সমাপ্তি"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a remark of Imam Ahmad: He opened the verse with knowledge and closed it with knowledge. The opening is ya'lamu, He knows what is in the heavens and the earth; the close is inna Allaha bi-kulli shay'in 'alim, Allah is Knowing of all things. Al-Qurtubi, as seen above, uses the same frame as his evidence for reading their fourth as knowing and hearing. As-Sa'di ties the close to the with-ness directly: for this reason, he writes, Allah said that He is Knowing of all things.",
            "bn": "ইবন কাসীর তাঁর ব্যাখ্যা শেষ করেন ইমাম আহমাদের একটি মন্তব্য দিয়ে: তিনি আয়াতটি শুরু করেছেন জ্ঞান দিয়ে, শেষও করেছেন জ্ঞান দিয়ে। শুরুতে আছে ইয়া'লামু, আসমান-যমীনে যা আছে তিনি জানেন। শেষে আছে ইন্নাল্লাহা বিকুল্লি শাইয়িন আলীম, আল্লাহ সব বিষয়ে জানেন। আগেই দেখা গেছে, 'তাদের চতুর্থ' মানে জানা ও শোনা, এ কথার প্রমাণ হিসেবে কুরতুবীও এই কাঠামোই ব্যবহার করেন। সা'দী শেষ বাক্যটিকে সরাসরি সঙ্গে থাকার অর্থের সঙ্গে জোড়েন। তিনি লেখেন, এ কারণেই আল্লাহ বলেছেন, তিনি সব বিষয়ে জানেন।"
          },
          {
            "en": "At-Tabari spells out what the closing 'alim takes in: Allah knows their najwa and their secrets, the hidden side of their deeds, and every other affair of theirs and of His servants. Ibn Kathir adds a second witness to the room. His messengers, he says, also write down what the conferrers say, alongside Allah's knowledge and hearing, and he cites 9:78, do they not know that Allah knows their secret and their najwa, and that Allah is the Knower of the unseen, and 43:80, or do they think We do not hear their secret and their najwa? Yes, and Our messengers with them are writing.",
            "bn": "শেষের 'আলীম' শব্দটি কী কী ধারণ করে, তাবারী তা খুলে বলেন: আল্লাহ তাদের নাজওয়া আর গোপন কথা জানেন, তাদের আমলের লুকানো দিক জানেন, তাদের আর তাঁর বান্দাদের অন্য সব বিষয়ও জানেন। ইবন কাসীর সেই ঘরে আরেক সাক্ষীর কথা যোগ করেন। তিনি বলেন, আল্লাহর জ্ঞান ও শোনার পাশাপাশি তাঁর প্রেরিত দূতেরাও পরামর্শকারীদের কথা লিখে রাখেন। এর সমর্থনে তিনি আনেন ৯:৭৮: তারা কি জানে না, আল্লাহ তাদের গোপন কথা ও নাজওয়া জানেন, আর আল্লাহ অদৃশ্যের মহাজ্ঞানী? আর ৪৩:৮০: তারা কি ভাবে, আমি তাদের গোপন কথা ও নাজওয়া শুনি না? অবশ্যই শুনি, আর আমার দূতেরা তাদের কাছে থেকে লিখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Whispering Came First",
          "bn": "প্রথমে কাদের কানাকানি"
        },
        "p": [
          {
            "en": "Of the commentaries fetched for this verse, only al-Qurtubi names an occasion, and he gives two reports without deciding between them. Ibn Abbas (RA) said it came down about a group of hypocrites who had done something in secret, so Allah let it be known that this was not hidden from Him. Qatadah and Mujahid said it came down about the Jews. Both reports are kept here as reports, with their names, and neither is preferred. The other commentaries fetched give no occasion for it.",
            "bn": "এই আয়াতের জন্য যেসব তাফসীর সংগ্রহ করা হয়েছে, তার মধ্যে কেবল কুরতুবী নাযিলের প্রেক্ষাপট বলেন। তিনি দুটি বর্ণনা আনেন, কোনোটিকে বেছে নেন না। ইবন আব্বাস (রাঃ) বলেছেন, আয়াতটি নাযিল হয়েছে একদল মুনাফিক সম্পর্কে, যারা গোপনে কিছু একটা করেছিল। তখন আল্লাহ জানিয়ে দিলেন, তা তাঁর কাছে লুকানো নয়। কাতাদাহ ও মুজাহিদ বলেছেন, আয়াতটি নাযিল হয়েছে ইহুদিদের সম্পর্কে। দুটি বর্ণনাই এখানে বর্ণনা হিসেবে, বর্ণনাকারীর নামসহ রাখা হলো, কোনোটিকে প্রাধান্য দেওয়া হয়নি। বাকি তাফসীরগুলো এর কোনো প্রেক্ষাপট উল্লেখ করে না।"
          },
          {
            "en": "This needs saying plainly. These reports describe particular people in Madinah in the time of the Prophet ﷺ, and the verse describes what the text describes. It licenses nothing against any living person or community, Jewish or otherwise, and it gives no one the right to call a neighbour a hypocrite or to suspect a gathering of plotting. The verse's own address is to whoever is in the room, and that includes the reader. Its warning is aimed first at one's own private talk.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এই বর্ণনাগুলো নবী ﷺ-এর যুগে মদীনার নির্দিষ্ট কিছু মানুষের কথা বলে। আর আয়াতটি ঠিক ততটুকুই বর্ণনা করে, যতটুকু তার ভাষায় আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে, ইহুদি হোক বা অন্য কেউ, এ আয়াত কোনো অনুমতি দেয় না। প্রতিবেশীকে মুনাফিক বলার বা কোনো বৈঠককে ষড়যন্ত্র বলে সন্দেহ করার অধিকারও কাউকে দেয় না। আয়াতটির কথা ঘরে যে আছে তার প্রতি, আর পাঠকও সেই ঘরেরই একজন। এর সতর্কবাণী সবার আগে নিজের গোপন আলাপের জন্য।"
          },
          {
            "en": "The verses that follow carry the theme in their own words. 58:8 speaks of those who were forbidden secret counsel and then returned to it, conferring in sin, aggression and disobedience to the Messenger, and greeting the Prophet ﷺ with words Allah had not greeted him with. 58:9 turns to the believers: when you confer privately, do not confer in sin, aggression and disobedience to the Messenger, but in righteousness and taqwa. 58:10 says that such najwa is only from Shaytan, to grieve the believers, though he cannot harm them except by Allah's permission.",
            "bn": "পরের আয়াতগুলো নিজেদের ভাষাতেই প্রসঙ্গটা এগিয়ে নেয়। ৫৮:৮ আয়াত বলে তাদের কথা, যাদের গোপন পরামর্শ থেকে নিষেধ করা হয়েছিল, তবু তারা আবার তাতেই ফিরে গেছে। তারা গুনাহ, সীমালঙ্ঘন আর রাসূলের নাফরমানি নিয়ে কানাকানি করে, আর নবী ﷺ-কে এমন ভাষায় সালাম দেয়, যে ভাষায় আল্লাহ তাঁকে সালাম দেননি। ৫৮:৯ আয়াত মুমিনদের দিকে ফেরে: গোপনে পরামর্শ করলে গুনাহ, সীমালঙ্ঘন আর রাসূলের নাফরমানির পরামর্শ কোরো না, নেকি আর তাকওয়ার পরামর্শ করো। ৫৮:১০ আয়াত বলে, এমন নাজওয়া শয়তানের কাজ, মুমিনদের দুঃখ দেওয়ার জন্য। তবে আল্লাহর অনুমতি ছাড়া সে তাদের কোনো ক্ষতি করতে পারে না।"
          },
          {
            "en": "On hadith, none of the commentaries fetched for this verse attaches one to it, so none is quoted here. What the passage gives the believers is a direction for their private talk rather than a ban on it: 58:9 does not tell them to stop conferring, it tells them what to confer about. In the commentators' words, the fourth in a room of three is His knowing and His hearing, and no closed door is closed to them.",
            "bn": "হাদীসের ব্যাপারে: এই আয়াতের জন্য সংগৃহীত কোনো তাফসীরই এর সঙ্গে একটি হাদীসও যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। এই অংশ মুমিনদের গোপন আলাপ নিষেধ করে না, বরং তার দিক ঠিক করে দেয়। ৫৮:৯ আয়াত তাদের পরামর্শ থামাতে বলে না, বলে কী নিয়ে পরামর্শ করতে হবে। মুফাসসিরদের ভাষায়, তিনজনের ঘরের সেই চতুর্থজন মানে তাঁর জানা আর তাঁর শোনা। কোনো বন্ধ দরজাই তার সামনে বন্ধ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Told Back on the Day",
          "bn": "সেদিন সব খুলে বলা হবে"
        },
        "p": [
          {
            "en": "Thumma yunabbi'uhum bima 'amilu yawma al-qiyamah: then He will inform them of what they did, on the Day of Resurrection. At-Tabari explains that He will tell these conferrers, and others besides them, of the deeds they did, both what He loves and what angers Him. The Muyassar says He will inform them of the good and evil they did and requite them for it; al-Qurtubi, of the good and the bad. The verb is the same one 58:6 used, fa-yunabbi'uhum.",
            "bn": "ছুম্মা ইউনাব্বিউহুম বিমা 'আমিলূ ইয়াওমাল কিয়ামাহ: তারপর কিয়ামতের দিন তিনি তাদের জানিয়ে দেবেন তারা কী করেছিল। তাবারীর ব্যাখ্যায়, তিনি এই পরামর্শকারীদের আর অন্যদেরও জানাবেন তাদের আমলের কথা, যা তিনি ভালোবাসেন আর যাতে তিনি অসন্তুষ্ট হন, দুটোই। মুয়াসসার বলে, তারা যে ভালো-মন্দ করেছে তিনি তা জানাবেন আর তার প্রতিদান দেবেন। কুরতুবীর ভাষায়, ভালো ও মন্দ দুটোই। ক্রিয়াটি সেই একই, যা ৫৮:৬ আয়াতে এসেছে: ফা-ইউনাব্বিউহুম।"
          },
          {
            "en": "The surah keeps najwa in view after this. 58:12 asks the believers to give charity before consulting the Messenger in private, and 58:13 lifts that while keeping prayer, zakah and obedience in place. The surah closes at 58:22 on believers who hold no affection for those who oppose Allah and His Messenger, even close kin. Those verses have their own articles. This one leaves a simpler question: what is said in the rooms one sits in, since all of it will be told back.",
            "bn": "এরপরও সূরাটি নাজওয়ার প্রসঙ্গ ছাড়ে না। ৫৮:১২ আয়াত মুমিনদের বলে, রাসূলের সঙ্গে একান্তে কথা বলার আগে সদকা দিতে। ৫৮:১৩ আয়াত সে বাধ্যবাধকতা তুলে নেয়, তবে নামায, যাকাত আর আনুগত্য বহাল রাখে। আর সূরাটি শেষ হয় ৫৮:২২ আয়াতে সেই মুমিনদের কথায়, যারা আল্লাহ ও তাঁর রাসূলের বিরোধীদের ভালোবাসে না, তারা আপন আত্মীয় হলেও। সেসব আয়াত নিয়ে আলাদা প্রবন্ধ আছে। এই আয়াত রেখে যায় সহজ একটি প্রশ্ন: যেসব ঘরে আপনি বসেন, সেখানে কী বলা হয়? কারণ সবই একদিন খুলে বলা হবে।"
          }
        ]
      }
    ]
  },
  "58:13": {
    "sections": [
      {
        "h": {
          "en": "A Question Where a Command Stood",
          "bn": "হুকুমের জায়গায় একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse before this one gave a command: when you consult the Messenger privately, present a charity before your consultation, and if you find nothing, Allah is Forgiving and Merciful (58:12). Then 58:13 opens with a question, a-ashfaqtum, were you afraid? Al-Qurtubi classes it as a question whose meaning is taqrir, a question that brings the listener to acknowledge something. Ibn Kathir states plainly what follows from the verse: Allah lifted the obligation of that charity from them. The word he uses is naskh, abrogation.",
            "bn": "আগের আয়াতে একটি হুকুম ছিল: রাসূলের সঙ্গে একান্তে পরামর্শ করতে চাইলে তার আগে সদাকা দাও, আর কিছু না পেলে আল্লাহ ক্ষমাশীল, দয়ালু (৫৮:১২)। এরপর ৫৮:১৩ শুরু হয় একটি প্রশ্ন দিয়ে: আ-আশফাকতুম, তোমরা কি ভয় পেয়ে গেলে? কুরতুবী একে এমন প্রশ্ন বলেন যার অর্থ তাকরীর, মানে শ্রোতাকে দিয়ে একটা কথা স্বীকার করিয়ে নেওয়া। ইবন কাসীর আয়াতের ফলটা সোজাসুজি বলে দেন: আল্লাহ তাদের উপর থেকে ওই সদাকার বাধ্যবাধকতা তুলে নিলেন। এর জন্য তিনি যে শব্দ ব্যবহার করেন তা নাসখ, অর্থাৎ রহিত করা।"
          },
          {
            "en": "Why the command had come is reported in the commentaries on the pair. Ibn Kathir carries a report from Ali ibn Abi Talhah from Ibn Abbas that the Muslims asked the Messenger so many questions that it became burdensome for him, and Allah wished to lighten the load on His Prophet. Ma'arif al-Qur'an, discussing 58:12 and 58:13 together, adds that some hypocrites sought private audiences in order to hurt the sincere Muslims.",
            "bn": "হুকুমটি কেন এসেছিল, দুই আয়াতের একসঙ্গে আলোচনায় তার বর্ণনা আছে। ইবন কাসীর আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন: মুসলমানেরা রাসূলুল্লাহ ﷺ-কে এত বেশি প্রশ্ন করতেন যে তাঁর জন্য তা কষ্টকর হয়ে উঠেছিল। আল্লাহ তখন তাঁর নবীর বোঝা হালকা করতে চাইলেন। মাআরিফুল কুরআন ৫৮:১২ ও ৫৮:১৩ একসঙ্গে আলোচনা করে আরও বলে, কিছু মুনাফিক একান্ত সাক্ষাৎ চাইত খাঁটি মুসলমানদের কষ্ট দেওয়ার উদ্দেশ্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear of Want, or of Permanence",
          "bn": "অভাবের ভয়, নাকি বিধান টিকে থাকার"
        },
        "p": [
          {
            "en": "At-Tabari begins with the word. The root meaning of ishfaq in the speech of the Arabs, he says, is fear and wariness, and here it means: did you fear that presenting the charity would bring want and poverty? The Muyassar gives the same sense in a line: did you fear poverty if you gave charity before consulting the Messenger of Allah?",
            "bn": "তাবারী শুরু করেন শব্দটি দিয়ে। তাঁর কথায়, আরবদের ভাষায় ইশফাকের মূল অর্থ ভয় ও সতর্কতা। এখানে এর মানে: সদাকা আগে দিলে অভাব আর দারিদ্র্য আসবে, তোমরা কি এই ভয় পেলে? মুয়াসসার একই অর্থ ছোট্ট করে বলে: আল্লাহর রাসূলের সঙ্গে একান্তে কথা বলার আগে সদাকা দিলে গরিব হয়ে যাবে, তোমরা কি এই ভয় করলে?"
          },
          {
            "en": "Ibn Abbas is reported with a sharper word. Al-Qurtubi and al-Baghawi both carry from him a-bakhiltum, were you miserly with the charity? Al-Baghawi glosses the meaning as fear of want and need if you gave. Al-Qurtubi sets beside it 'it was said: you feared', defines ishfaq as fear of something disliked, and joins all three senses: you feared, you were miserly, and it weighed on you. Ibn Kathir reads the fear differently: were you afraid that this duty of charity before consulting the Messenger would continue to bind you?",
            "bn": "ইবন আব্বাস (রাঃ)-এর নামে আরও তীক্ষ্ণ একটি শব্দ এসেছে। কুরতুবী ও বাগাভী দুজনেই তাঁর থেকে আনেন: আ-বাখিলতুম, তোমরা কি সদাকা দিতে কৃপণতা করলে? বাগাভী অর্থটা খুলে বলেন: দান করলে অভাব আর টানাটানিতে পড়বে, এই ভয়। কুরতুবী এর পাশে রাখেন 'বলা হয়েছে: তোমরা ভয় পেলে', আর ইশফাকের সংজ্ঞা দেন অপছন্দনীয় কিছুর ভয় হিসেবে। তারপর তিনটি অর্থ জুড়ে দেন: তোমরা ভয় পেলে, কৃপণতা করলে, আর কাজটা তোমাদের কাছে ভারী লাগল। ইবন কাসীর ভয়টাকে পড়েন অন্যভাবে: রাসূলের সঙ্গে কথা বলার আগে সদাকার এই বিধান তোমাদের উপর বহাল থেকে যাবে, তোমরা কি এই ভয় পেলে?"
          }
        ]
      },
      {
        "h": {
          "en": "Ten Nights or a Single Hour",
          "bn": "দশ রাত, নাকি এক ঘণ্টা"
        },
        "p": [
          {
            "en": "How long did the rule stand? The commentaries give several answers, each under a name. Al-Qurtubi and al-Baghawi both report Muqatil ibn Hayyan: it lasted ten nights and was then abrogated. Al-Kalbi appears in both books, but not in the same words: in al-Qurtubi he says it lasted only a single night, in al-Baghawi only an hour of the day. Al-Qurtubi then reports Ibn Abbas, that only an hour of the day remained before it was abrogated, and says Qatadah said the same.",
            "bn": "বিধানটি কতদিন বহাল ছিল? তাফসীরগুলো কয়েকটি উত্তর দেয়, প্রতিটি কারও না কারও নামে। কুরতুবী ও বাগাভী দুজনেই মুকাতিল ইবন হাইয়ানের কথা আনেন: এটি দশটি রাত বহাল ছিল, তারপর রহিত হয়। কালবীর নাম দুই কিতাবেই আছে, তবে একই কথায় নয়। কুরতুবীতে তিনি বলেন, এটি ছিল মাত্র এক রাত, আর বাগাভীতে বলেন, দিনের মাত্র এক ঘণ্টা। এরপর কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন যে, রহিত হওয়ার আগে দিনের মাত্র এক ঘণ্টা বাকি ছিল। তিনি বলেন, কাতাদাও একই কথা বলেছেন।"
          },
          {
            "en": "Ibn Kathir has Qatadah too, through Ma'mar: the verse was abrogated, and it was nothing but an hour of a day. He also records, through Abd ar-Razzaq, that Mujahid said Ali said nobody acted on it but him until it was abrogated, with a narrator adding: 'and I reckon he said: it was only an hour.' Al-Qurtubi closes his list with wallahu a'lam, Allah knows best. The figures differ, and they are left differing here.",
            "bn": "ইবন কাসীরও মা'মারের সূত্রে কাতাদার কথা আনেন: আয়াতটি রহিত, আর তা ছিল দিনের এক ঘণ্টা মাত্র। আব্দুর রাযযাকের সূত্রে তিনি এটাও লিপিবদ্ধ করেন যে, মুজাহিদ বলেছেন, আলী (রাঃ) বলেছেন: রহিত হওয়া পর্যন্ত আমি ছাড়া কেউ এর উপর আমল করেনি। সঙ্গে একজন বর্ণনাকারী যোগ করেন, 'আমার ধারণা, তিনি এটাও বলেছেন: তা ছিল মাত্র এক ঘণ্টা।' কুরতুবী তাঁর তালিকা শেষ করেন ওয়াল্লাহু আ'লাম বলে, অর্থাৎ আল্লাহই ভালো জানেন। সংখ্যাগুলো আলাদা, এখানেও সেগুলো আলাদাই থাকছে।"
          },
          {
            "en": "The reports also differ on what lifted the rule. Ibn Kathir carries from Ikrimah and al-Hasan al-Basri that it was abrogated by the verse after it, namely this verse. From Ibn Abbas, through al-Awfi, he carries that the Muslims used to give charity before consulting, and when zakah was revealed this was abrogated; al-Qurtubi likewise says the obligation of zakah abrogated this charity. Qatadah and Muqatil ibn Hayyan, in Ibn Kathir's report, name the relief as the closing words of 58:12: if you find nothing.",
            "bn": "বিধানটি কিসে উঠে গেল, তা নিয়েও বর্ণনা ভিন্ন। ইবন কাসীর ইকরিমা ও হাসান বসরীর কথা আনেন: পরের আয়াত, মানে এই আয়াতটিই একে রহিত করেছে। আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে তিনি আনেন, মুসলমানেরা পরামর্শের আগে সদাকা দিতেন, তারপর যাকাতের হুকুম নাজিল হলে এটি রহিত হয়ে যায়। কুরতুবীও বলেন, যাকাত ফরজ হওয়ায় এই সদাকা রহিত হয়েছে। আর ইবন কাসীরের বর্ণনায় কাতাদা ও মুকাতিল ইবন হাইয়ান ছাড়ের কথাটি দেখান ৫৮:১২ আয়াতের শেষ অংশে: যদি তোমরা কিছু না পাও।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Reported of Ali",
          "bn": "আলী (রাঃ) সম্পর্কে বর্ণনা"
        },
        "p": [
          {
            "en": "Ibn Kathir introduces the best-known report with a cautious phrase, qad qila, it has been said: that nobody acted on this verse before its abrogation except Ali ibn Abi Talib. He then gives Mujahid's account through Ibn Abi Najih. They were forbidden to consult the Prophet privately until they gave charity, and only Ali consulted him; he presented a dinar in charity, consulted the Prophet and asked him about ten matters, and then the concession was revealed.",
            "bn": "সবচেয়ে পরিচিত বর্ণনাটি ইবন কাসীর শুরু করেন সাবধানী এক শব্দে: কাদ কীলা, বলা হয়েছে। কথাটা হলো, রহিত হওয়ার আগে আলী ইবন আবী তালিব (রাঃ) ছাড়া কেউ এ আয়াতের উপর আমল করেননি। তারপর তিনি ইবন আবী নাজীহের সূত্রে মুজাহিদের বর্ণনা দেন। সদাকা না দেওয়া পর্যন্ত নবী ﷺ-এর সঙ্গে একান্তে কথা বলতে তাদের নিষেধ করা হয়েছিল। তখন কেবল আলী (রাঃ) তাঁর সঙ্গে একান্তে কথা বলেন। তিনি একটি দীনার সদাকা দিলেন, তারপর নবী ﷺ-এর সঙ্গে কথা বলে তাঁকে দশটি বিষয়ে প্রশ্ন করলেন। এরপর ছাড়ের আয়াত নাজিল হলো।"
          },
          {
            "en": "Through Layth ibn Abi Sulaym, also from Mujahid, Ibn Kathir reports Ali saying: there is a verse in the Book of Allah that nobody acted on before me and nobody will act on after me. I had a dinar and changed it for ten dirhams, and whenever I consulted the Messenger of Allah privately I gave a dirham in charity. Ma'arif al-Qur'an, in its combined note, likewise says Ali was the first to act on it, with a dinar. These are reports the tafsirs carry; no grading is given for them here.",
            "bn": "লাইস ইবন আবী সুলাইমের সূত্রে, এটিও মুজাহিদ থেকে, ইবন কাসীর আলী (রাঃ)-এর এই উক্তি আনেন: আল্লাহর কিতাবে একটি আয়াত আছে, যার উপর আমার আগে কেউ আমল করেনি, আমার পরেও কেউ করবে না। আমার কাছে একটি দীনার ছিল, সেটা ভাঙিয়ে দশটি দিরহাম নিলাম। রাসূলুল্লাহ ﷺ-এর সঙ্গে যখনই একান্তে কথা বলতাম, এক দিরহাম সদাকা দিতাম। মাআরিফুল কুরআনও তার যৌথ আলোচনায় বলে, আলী (রাঃ)-ই প্রথম এর উপর আমল করেন, একটি দীনার দিয়ে। এগুলো তাফসীরে আনা বর্ণনা, এখানে এগুলোর কোনো মান উল্লেখ করা হচ্ছে না।"
          },
          {
            "en": "Ali, in at-Tirmidhi: \"When (the following) was revealed: 'O you who believe! When you consult the Messenger in private, spend something in charity before your private consultation.' The Prophet said to me: 'What do you think? A dinar?' I said: 'They will not be able to.' He said: 'Then half a Dinar?' I said: 'They will not be able.' He said: 'Then how much?' I said: 'A barley corn.' He said: 'You made it too little.'\" He said: \"So the Ayah was revealed: 'Are you afraid of spending in charity before your private consultation?'\" He said: \"It was about my case for which Allah lightened the burden upon this Ummah.\"",
            "bn": "তিরমিযীর বর্ণনায় আলী (রাঃ) বলেন: \"যখন নাজিল হলো, 'হে মুমিনগণ, তোমরা যখন রাসূলের সঙ্গে একান্তে পরামর্শ করো, তখন পরামর্শের আগে কিছু সদাকা দাও', নবী ﷺ আমাকে বললেন: 'তোমার কী মত? এক দীনার?' আমি বললাম: 'তারা তা পারবে না।' তিনি বললেন: 'তাহলে আধা দীনার?' আমি বললাম: 'তারা পারবে না।' তিনি বললেন: 'তাহলে কত?' আমি বললাম: 'একটি যব।' তিনি বললেন: 'তুমি তো খুব কম ধরলে।'\" আলী (রাঃ) বলেন: \"তখন নাজিল হলো: 'পরামর্শের আগে সদাকা দিতে কি তোমরা ভয় পেয়ে গেলে?'\" তিনি আরও বলেন: \"আমার ব্যাপারেই আল্লাহ এই উম্মতের বোঝা হালকা করেছেন।\""
          },
          {
            "en": "At-Tirmidhi (3300) grades it hasan gharib, adding that it is known only through this route, and explains sha'irah, the barley-corn, as the weight of a barley-grain of gold. Ibn Kathir cites that grading as at-Tirmidhi's and gives the same narration through Ibn Jarir and Abu Ya'la. The collector's verdict stands as he gave it: hasan, with the qualification gharib, and nothing stronger. The quranx English prints barely corn; it is corrected to barley here.",
            "bn": "তিরমিযী (৩৩০০) এর মান দিয়েছেন হাসান গরীব, সঙ্গে বলেছেন, কেবল এই সূত্রেই এটি জানা যায়। শা'ঈরা, অর্থাৎ যব, শব্দের অর্থও তিনি বলে দেন: সোনার একটি যবের দানার ওজন। ইবন কাসীর এই মানকে তিরমিযীর বলেই উল্লেখ করেন, আর একই বর্ণনা ইবন জারীর ও আবূ ইয়া'লার সূত্রেও আনেন। সংকলক যে রায় দিয়েছেন, তা সেভাবেই থাকবে: হাসান, সঙ্গে গরীব শর্ত, এর চেয়ে জোরালো কিছু নয়। কুরআনএক্স-এর ইংরেজিতে ‘barely corn’ ছাপা আছে; এখানে তা ‘barley’ করে নেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Qurtubi Weighs It Differently",
          "bn": "কুরতুবীর ভিন্ন বিচার"
        },
        "p": [
          {
            "en": "Al-Qurtubi mentions what is narrated from Ali only to set it aside. \"What is narrated from Ali is weak,\" he writes, \"because Allah the Exalted said fa-idh lam taf'alu, since you did not, and this indicates that nobody gave anything in charity.\" He also reads the address as aimed at those who had something to give, and draws a principle of law from the passage: it shows that a ruling may be abrogated before it has been acted upon.",
            "bn": "আলী (রাঃ) থেকে বর্ণিত কথাটি কুরতুবী উল্লেখ করেন কেবল তা নাকচ করার জন্য। তিনি লেখেন, \"আলী (রাঃ) থেকে যা বর্ণিত, তা দুর্বল, কারণ আল্লাহ তা'আলা বলেছেন ফা-ইয লাম তাফ'আলূ, যেহেতু তোমরা করোনি। এ থেকে বোঝা যায়, কেউ কোনো কিছুই সদাকা দেয়নি।\" তাঁর মতে সম্বোধনটা তাদের প্রতি, যাদের দেওয়ার মতো কিছু ছিল। এই অংশ থেকে তিনি ফিকহের একটি মূলনীতিও বের করেন: কোনো বিধানের উপর আমল হওয়ার আগেই তা রহিত হতে পারে।"
          },
          {
            "en": "Here the sources genuinely part. Ibn Kathir and Ma'arif al-Qur'an report that Ali acted on the verse; al-Qurtubi, on the strength of the verse's own wording, judges what is narrated from Ali weak. This article takes no side between them. One detail can be stated without taking a side: the at-Tirmidhi wording quoted above concerns the amount and the lightening of the burden, and does not itself say that Ali gave anything.",
            "bn": "এখানে উৎসগুলো সত্যিই আলাদা পথে গেছে। ইবন কাসীর ও মাআরিফুল কুরআন বর্ণনা করে যে আলী (রাঃ) আয়াতের উপর আমল করেছিলেন। কুরতুবী আয়াতের নিজের শব্দের ভিত্তিতে আলী (রাঃ) থেকে বর্ণিত কথাকে দুর্বল বলেন। এই লেখা তাদের মধ্যে কোনো পক্ষ নিচ্ছে না। তবে পক্ষ না নিয়েও একটা কথা বলা যায়: উপরে উদ্ধৃত তিরমিযীর বর্ণনাটি পরিমাণ আর বোঝা হালকা হওয়ার কথা বলে। আলী (রাঃ) কিছু দিয়েছিলেন, এমন কথা তার শব্দে নেই।"
          },
          {
            "en": "The reports also speak of the many who did not give. Ibn Abbas, in Ibn Kathir's report, says that many people held back and stopped asking, and that Allah then widened things for them and did not constrict. Ma'arif al-Qur'an says most of the Companions were unable to act on it because of financial constraints. The texts say this and no more. These verses describe a particular moment in the Prophet's community, and they license nothing against any Companion, nor against any living person or community.",
            "bn": "যারা দেয়নি, সেই অনেকের কথাও বর্ণনাগুলোতে আছে। ইবন কাসীরের বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, অনেক মানুষ বিরত থাকলেন আর প্রশ্ন করা বন্ধ করলেন, তারপর আল্লাহ তাদের জন্য প্রশস্ত করে দিলেন, সংকীর্ণ করলেন না। মাআরিফুল কুরআন বলে, আর্থিক টানাটানির কারণে অধিকাংশ সাহাবী এর উপর আমল করতে পারেননি। গ্রন্থগুলো এটুকুই বলে, এর বেশি নয়। এ আয়াতগুলো নবী ﷺ-এর সমাজের একটি বিশেষ মুহূর্তের কথা বলে। কোনো সাহাবীর বিরুদ্ধে, কিংবা আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Wa-Taba Allahu Alaykum",
          "bn": "ওয়া তাবাল্লাহু আলাইকুমের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Wa taba Allahu 'alaykum: and Allah has turned to you. The commentators say what this turning consisted of. For al-Qurtubi it means that Allah abrogated that ruling. Al-Baghawi explains it as: He overlooked it for you and did not punish you for leaving the charity. He records another reading in which the 'and' is merely connective, so that the sense becomes: if you do not, Allah has turned to you and abrogated the charity. The Muyassar joins two ideas: Allah turned to you, and granted you a concession not to do it.",
            "bn": "ওয়া তাবাল্লাহু আলাইকুম: আর আল্লাহ তোমাদের দিকে ফিরেছেন। এই ফেরার মানে কী, তাফসীরকারেরা তা বলে দেন। কুরতুবীর কাছে এর অর্থ, আল্লাহ ওই বিধান রহিত করলেন। বাগাভীর ব্যাখ্যা: তিনি তোমাদের বেলায় বিষয়টি উপেক্ষা করলেন, সদাকা না দেওয়ার জন্য তোমাদের শাস্তি দিলেন না। তিনি আরেকটি পাঠও উল্লেখ করেন, যেখানে 'ওয়া' অব্যয়টি কেবল সংযোগের কাজ করে। তখন অর্থ দাঁড়ায়: যদি তোমরা না করো, আল্লাহ তোমাদের দিকে ফিরেছেন এবং সদাকার বিধান রহিত করেছেন। মুয়াসসার দুটি ভাবকে জুড়ে দেয়: আল্লাহ তোমাদের দিকে ফিরলেন, আর না করার অনুমতি দিলেন।"
          },
          {
            "en": "As-Sa'di takes the clause step by step. 'Since you did not' means that presenting the charity did not come easily to you, and that alone, he says, would not suffice, because a command does not depend on being easy for the servant; this is why Allah qualified it with 'and Allah has turned to you', meaning He pardoned you for it. At-Tabari paraphrases the clause as Allah granting them tawbah for leaving the charity. The article adds no charge of its own.",
            "bn": "সা'দী বাক্যটিকে ধাপে ধাপে খোলেন। 'যেহেতু তোমরা করোনি' মানে, সদাকা আগে দেওয়া তোমাদের কাছে সহজ ঠেকেনি। তাঁর মতে শুধু এটুকু যথেষ্ট হতো না, কারণ কোনো হুকুম বান্দার কাছে সহজ হতেই হবে, এমন শর্ত নেই। তাই আল্লাহ এর সঙ্গে জুড়ে দিলেন 'আর আল্লাহ তোমাদের দিকে ফিরেছেন', অর্থাৎ তিনি তোমাদের তা মাফ করে দিলেন। তাবারী বাক্যটির ব্যাখ্যা দেন এভাবে: সদাকা ছেড়ে দেওয়ার ব্যাপারে আল্লাহ তোমাদের তওবা দান করলেন। এই লেখা নিজে থেকে কোনো অভিযোগ যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Zakah and Obedience",
          "bn": "নামাজ, যাকাত আর আনুগত্য"
        },
        "p": [
          {
            "en": "Then come the commands, in the verse's order: fa-aqimu as-salah, so establish the prayer; wa atu az-zakah, and give the zakah; wa ati'u Allaha wa rasulah, and obey Allah and His Messenger. At-Tabari reads the first two as the obligations Allah had made binding on them and had not lifted, and obedience as obedience in what He commanded and what He forbade. Qatadah, in at-Tabari's chain, calls prayer and zakah two binding obligations in which nobody has any way back, and says this verse abrogated the earlier charity.",
            "bn": "তারপর আসে হুকুমগুলো, আয়াতের নিজের ক্রমে: ফা-আকীমুস সালাহ, তাই নামাজ কায়েম করো; ওয়া আতুয যাকাহ, আর যাকাত দাও; ওয়া আতী'উল্লাহা ওয়া রাসূলাহ, আর আল্লাহ ও তাঁর রাসূলের আনুগত্য করো। তাবারী প্রথম দুটিকে পড়েন সেই ফরজ হিসেবে, যা আল্লাহ তাদের উপর বাধ্যতামূলক করেছেন এবং তুলে নেননি। আর আনুগত্য মানে তাঁর আদেশ ও নিষেধ দুটোতেই আনুগত্য। তাবারীর সনদে কাতাদা নামাজ ও যাকাতকে বলেন দুটি অবশ্যপালনীয় ফরজ, যা থেকে কারও ফিরে যাওয়ার সুযোগ নেই। তিনি আরও বলেন, এই আয়াত আগের সদাকার বিধান রহিত করেছে।"
          },
          {
            "en": "As-Sa'di gives each command its weight: the prayer established with its pillars, conditions and limits, and the obligatory zakah paid from your wealth to those entitled to it. These two, he says, are the mothers of bodily and financial worship, and whoever performs them as the law requires has fulfilled the rights of Allah and of His servants. Obedience he calls the most comprehensive of commands: following what Allah and His Messenger order, avoiding what they forbid and believing what they told. Al-Qurtubi divides it: obey Allah in His obligations, and His Messenger in his sunnah.",
            "bn": "সা'দী প্রতিটি হুকুমকে তার ওজন দেন। নামাজ কায়েম হবে তার রুকন, শর্ত আর সব সীমাসহ। যাকাত হলো ফরজ যাকাত, যা সম্পদ থেকে হকদারদের কাছে পৌঁছে দিতে হয়। তাঁর মতে এ দুটি শারীরিক ও আর্থিক ইবাদতের মূল। যে এ দুটি শরীয়তের নিয়মমতো আদায় করে, সে আল্লাহর হক ও বান্দার হক দুটোই আদায় করল। আনুগত্যকে তিনি বলেন সবচেয়ে ব্যাপক হুকুম: আদেশ মানা, নিষেধ থেকে দূরে থাকা, আর আল্লাহ ও রাসূল যা জানিয়েছেন তা সত্য বলে মেনে নেওয়া। কুরতুবী আনুগত্যকে দুই ভাগে বলেন: আল্লাহর আনুগত্য তাঁর ফরজগুলোতে, রাসূলের আনুগত্য তাঁর সুন্নাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Courtesy That Was Never Lifted",
          "bn": "যে আদব রহিত হয়নি"
        },
        "p": [
          {
            "en": "As-Sa'di draws the clearest line between what changed and what did not. Allah, seeing the believers' apprehension and the hardship of the charities at every consultation, made the matter easy and did not take them to task for leaving it. But reverence and respect for the Messenger remained as they were, unabrogated, because the charity was legislated for the sake of something else and was not an aim in itself. The aim, he says, was courtesy towards the Messenger and honouring him.",
            "bn": "কী বদলাল আর কী বদলাল না, সা'দী তার মধ্যে সবচেয়ে স্পষ্ট রেখা টানেন। প্রতিটি পরামর্শের সময় সদাকার যে কষ্ট, আর মুমিনদের যে শঙ্কা, আল্লাহ তা দেখে বিষয়টি সহজ করে দিলেন, সদাকা না দেওয়ার জন্য তাদের পাকড়াও করলেন না। কিন্তু রাসূলের প্রতি সম্মান আর শ্রদ্ধা যেমন ছিল তেমনই রইল, তা রহিত হয়নি। কারণ সদাকার বিধানটি ছিল অন্য কিছুর জন্য, নিজেই লক্ষ্য ছিল না। তাঁর কথায়, আসল লক্ষ্য ছিল রাসূলের সঙ্গে আদব রক্ষা আর তাঁকে মর্যাদা দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an, in its combined note, makes a related point in its own way. The ordinance was repealed, it says, yet it achieved its basic purpose. The Muslims, out of sincere love, avoided protracted audiences with the Prophet so that he would not be inconvenienced, while the hypocrites avoided them for fear of being recognised and exposed.",
            "bn": "মাআরিফুল কুরআন তার যৌথ আলোচনায় নিজের ভঙ্গিতে কাছাকাছি একটি কথা বলে। বিধানটি রহিত হয়েছে, তবু তার মূল উদ্দেশ্য পূরণ হয়েছে। মুসলমানেরা খাঁটি ভালোবাসা থেকে নবী ﷺ-এর সঙ্গে দীর্ঘ একান্ত সাক্ষাৎ এড়িয়ে চলতেন, যাতে তাঁর কোনো কষ্ট না হয়। আর মুনাফিকরা তা এড়িয়ে চলত ধরা পড়ে যাওয়ার আর মুখোশ খুলে যাওয়ার ভয়ে।"
          },
          {
            "en": "The verse ends: wallahu khabirun bima ta'malun, and Allah is aware of what you do. At-Tabari explains that Allah has full knowledge of their deeds and counts them, in order to repay them; the Muyassar says He will recompense them. As-Sa'di adds that Allah knows not only the deeds but the manner in which they were done, and repays according to His knowledge of what is in their hearts, which is why the measure is sincerity and excellence. The duties that remain are weighed by Him who sees how they are done.",
            "bn": "আয়াতটি শেষ হয়: ওয়াল্লাহু খাবীরুম বিমা তা'মালূন, তোমরা যা করো আল্লাহ তার পূর্ণ খবর রাখেন। তাবারী ব্যাখ্যা করেন, আল্লাহ তাদের আমল সম্পর্কে পুরোপুরি জানেন এবং সেগুলো গুনে রাখেন, যাতে তার প্রতিদান দেন। মুয়াসসার বলে, তিনি সেগুলোর প্রতিদান দেবেন। সা'দী যোগ করেন, আল্লাহ শুধু আমল নয়, কীভাবে তা করা হয়েছে তাও জানেন, আর অন্তরে যা আছে সে জ্ঞান অনুযায়ী প্রতিদান দেন। তাই মাপকাঠি হলো ইখলাস আর ইহসান। যে দায়িত্বগুলো রয়ে গেল, সেগুলো যিনি মাপেন, তিনি দেখেন কীভাবে তা পালন করা হচ্ছে।"
          }
        ]
      }
    ]
  },
  "58:22": {
    "sections": [
      {
        "h": {
          "en": "Written a Second Time",
          "bn": "দ্বিতীয়বার লিখে দেওয়া"
        },
        "p": [
          {
            "en": "Kataba Allahu la-aghlibanna ana wa rusuli: Allah has written, I will surely prevail, I and My messengers. That is 58:21, and the next verse uses the same verb again: ula'ika kataba fi qulubihim al-iman, those are the ones in whose hearts He has written faith. Ibn Kathir, on the earlier verse, explains the first writing as a decree in the First Book that nothing can resist or change. The second writing is set down inside particular people. The surah closes by moving from a decree about victory to the hearts that carry it.",
            "bn": "কাতাবাল্লাহু লাআগলিবান্না আনা ওয়া রুসুলী: আল্লাহ লিখে দিয়েছেন, অবশ্যই আমি ও আমার রাসূলগণ বিজয়ী হব। এটি ৫৮:২১ আয়াত। ঠিক পরের আয়াতে একই ক্রিয়া আবার আসে: উলাইকা কাতাবা ফী কুলূবিহিমুল ঈমান, এরাই তারা, যাদের অন্তরে তিনি ঈমান লিখে দিয়েছেন। আগের আয়াতের ব্যাখ্যায় ইবন কাসীর প্রথম লেখাটিকে বলেন প্রথম কিতাবে লেখা এমন ফয়সালা, যা কেউ ঠেকাতে বা বদলাতে পারে না। দ্বিতীয় লেখাটি বসে নির্দিষ্ট কিছু মানুষের ভেতরে। বিজয়ের ফয়সালা থেকে সূরাটি শেষ হয় সেই অন্তরগুলোর কথায়, যারা এ বিজয় বহন করে।"
          },
          {
            "en": "The verses before it draw the other side. In 58:20 those who yuhadduna Allah and His Messenger will be among the most humbled, and 58:19 has already named a party of Satan. At-Tabari reads this verse as Allah telling His Prophet about the people of 58:14, those who took as allies a people with whom Allah is angry: they are not people of faith in Allah and the Last Day, and that is why they took such allies. Ma'arif al-Qur'an says the same in other words. The preceding verses dealt with hypocrites in close friendship with unbelievers, and this one describes sincere believers.",
            "bn": "আগের আয়াতগুলো অন্য পক্ষের ছবি আঁকে। ৫৮:২০ আয়াতে যারা আল্লাহ ও তাঁর রাসূলের বিরুদ্ধাচরণ করে, তারা সবচেয়ে লাঞ্ছিতদের দলে। ৫৮:১৯ আয়াত আগেই শয়তানের দলের নাম নিয়েছে। তাবারীর পাঠে আল্লাহ এ আয়াতে তাঁর নবীকে ৫৮:১৪ আয়াতের লোকদের কথা জানাচ্ছেন, যারা এমন সম্প্রদায়কে বন্ধু বানিয়েছিল যাদের উপর আল্লাহ ক্রুদ্ধ। তারা আল্লাহ ও আখিরাতে ঈমানদার নয়, তাই এমন বন্ধু বেছে নিয়েছে। মাআরিফুল কুরআনও অন্য ভাষায় একই কথা বলে। আগের আয়াতগুলো ছিল কাফিরদের সঙ্গে গভীর বন্ধুত্বে জড়ানো মুনাফিকদের নিয়ে, আর এ আয়াত আঁকে খাঁটি মুমিনদের ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Things That Do Not Meet",
          "bn": "যে দুটি জিনিস একসঙ্গে থাকে না"
        },
        "p": [
          {
            "en": "La tajidu qawman: you will not find a people. At-Tabari supplies the addressee: you will not find, O Muhammad, a people who affirm Allah and acknowledge the Last Day and who yet yuwadduna man hadda Allaha wa rasulahu. He glosses hadda as setting oneself against Allah and His Messenger, splitting from them, and going against Allah's command and prohibition. Qatada, in a chain at-Tabari gives, says more briefly: whoever shows enmity to Allah and His Messenger. It is the same verb that 58:20 used for those who will be among the most humbled.",
            "bn": "লা তাজিদু কাওমান: তুমি এমন কোনো সম্প্রদায় পাবে না। কাকে বলা হচ্ছে, তাবারী তা খুলে দেন: হে মুহাম্মাদ, তুমি এমন লোক পাবে না, যারা আল্লাহকে সত্য বলে মানে, আখিরাতকে স্বীকার করে, আবার ইউওয়াদ্দূনা মান হাদ্দাল্লাহা ওয়া রাসূলাহু। হাদ্দা শব্দের অর্থ তিনি করেন আল্লাহ ও তাঁর রাসূলের বিরুদ্ধে দাঁড়ানো, তাঁদের থেকে আলাদা পথ ধরা, আল্লাহর আদেশ-নিষেধ অমান্য করা। তাবারীর দেওয়া সনদে কাতাদা আরও ছোট করে বলেন: যে আল্লাহ ও তাঁর রাসূলের সঙ্গে শত্রুতা করে। ৫৮:২০ আয়াতে সবচেয়ে লাঞ্ছিতদের বেলায় এই ক্রিয়াই এসেছিল।"
          },
          {
            "en": "What is the muwaddah the verse rules out? Al-Qurtubi and the Muyassar both gloss yuwadduna as to love and to take as allies. Al-Baghawi says Allah is telling us that the believers' faith is spoiled by muwaddah towards those who disbelieve. As-Sa'di reads the sentence as saying that these two things do not come together: a servant is not truly a believer unless he acts on what faith requires, loving and siding with those who hold to it, and holding aversion and enmity towards those who do not, even the person closest to him. A faith that is only claimed, he adds, needs a proof to confirm it.",
            "bn": "আয়াত যে মুওয়াদ্দাহ নাকচ করে, তা আসলে কী? কুরতুবী ও মুয়াসসার দুজনেই ইউওয়াদ্দূনা-র অর্থ করেন ভালোবাসা আর বন্ধু ও সহায় হিসেবে গ্রহণ করা। বাগাভী বলেন, আল্লাহ জানিয়ে দিচ্ছেন, কুফরকারীদের প্রতি মুওয়াদ্দাহ মুমিনের ঈমান নষ্ট করে। সা'দীর পাঠে বাক্যটির কথা হলো, এ দুটি জিনিস একসঙ্গে থাকে না। বান্দা সত্যিকার মুমিন হয় তখনই, যখন সে ঈমানের দাবি মেনে চলে। যারা ঈমান ধরে রাখে, সে তাদের ভালোবাসে, তাদের পাশে থাকে। যারা ধরে রাখে না, তাদের প্রতি সে বিরাগ ও শত্রুতা রাখে, হোক সে তার সবচেয়ে কাছের মানুষ। তিনি যোগ করেন, শুধু মুখের দাবির ঈমানের জন্য তা সত্য প্রমাণ করার মতো দলিল লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Names the Reports Attach",
          "bn": "বর্ণনাগুলো যাঁদের নাম জোড়ে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that Sa'id ibn 'Abd al-'Aziz and others said the verse came down about Abu 'Ubayda ibn al-Jarrah when he killed his father at Badr. He links to it 'Umar's remark, when he left the succession to consultation, that had Abu 'Ubayda been alive he would have appointed him. Then, under the words it was said, he maps the verse's list onto names: fathers for Abu 'Ubayda; sons for Abu Bakr, who meant to kill his son 'Abd al-Rahman that day; brothers for Mus'ab ibn 'Umayr; kin for 'Umar, Hamza, 'Ali and 'Ubayda ibn al-Harith.",
            "bn": "ইবন কাসীর জানান, সাঈদ ইবন আব্দুল আযীয ও অন্যরা বলেছেন, আয়াতটি নাজিল হয়েছিল আবু উবাইদা ইবনুল জাররাহ (রাঃ)-কে নিয়ে, যখন তিনি বদরের দিন নিজের বাবাকে হত্যা করেন। এর সঙ্গে তিনি জোড়েন উমর (রাঃ)-এর একটি কথা। খিলাফতের বিষয় পরামর্শসভার হাতে ছেড়ে যাওয়ার সময় তিনি বলেছিলেন, আবু উবাইদা বেঁচে থাকলে তাঁকেই খলীফা বানাতাম। এরপর 'বলা হয়' কথাটি দিয়ে ইবন কাসীর আয়াতের তালিকাটি নামের সঙ্গে মেলান। বাবার কথা আবু উবাইদা (রাঃ)-র বেলায়। ছেলের কথা আবু বকর (রাঃ)-এর বেলায়, যিনি সেদিন ছেলে আব্দুর রহমানকে হত্যা করতে চেয়েছিলেন। ভাইয়ের কথা মুসআব ইবন উমাইর (রাঃ)-এর বেলায়। আর গোষ্ঠীর কথা উমর, হামযা, আলী ও উবাইদা ইবনুল হারিস (রাঃ)-এর বেলায়।"
          },
          {
            "en": "In Ibn Kathir's list Mus'ab killed his brother 'Ubayd ibn 'Umayr, 'Umar killed a relative, and Hamza, 'Ali and 'Ubayda killed 'Utba, Shayba and al-Walid ibn 'Utba, all at Badr, and he ends with: Allah knows best. Al-Baghawi gives a version through Muqatil ibn Hayyan, from Murra al-Hamdani, from Ibn Mas'ud. In it Abu 'Ubayda killed his father 'Abdullah ibn al-Jarrah at Uhud, Mus'ab killed his brother at Uhud, and the relative 'Umar killed at Badr is named as his maternal uncle, al-'As ibn Hisham ibn al-Mughira.",
            "bn": "ইবন কাসীরের তালিকায় মুসআব (রাঃ) হত্যা করেন ভাই উবাইদ ইবন উমাইরকে, উমর (রাঃ) হত্যা করেন এক আত্মীয়কে, আর হামযা, আলী ও উবাইদা (রাঃ) হত্যা করেন উতবা, শাইবা ও ওয়ালীদ ইবন উতবাকে। সবই বদরের দিন। শেষে তিনি বলেন: আল্লাহই ভালো জানেন। বাগাভী একটি বর্ণনা আনেন মুকাতিল ইবন হাইয়ান থেকে, তিনি মুররা আল-হামদানী থেকে, তিনি ইবন মাসউদ (রাঃ) থেকে। এ বর্ণনায় আবু উবাইদা (রাঃ) বাবা আব্দুল্লাহ ইবনুল জাররাহকে হত্যা করেন উহুদের দিন। মুসআব (রাঃ)-ও ভাইকে হত্যা করেন উহুদে। আর উমর (রাঃ) বদরে যে আত্মীয়কে হত্যা করেন, তাঁর নাম আসে মামা আস ইবন হিশাম ইবনুল মুগীরা হিসেবে।"
          },
          {
            "en": "The same chain in al-Baghawi has Abu Bakr challenge his son to single combat at Badr and ask to be in the first wave, and the Prophet ﷺ answering: matti'na bi-nafsika, let us keep enjoying your company, Abu Bakr. Al-Qurtubi gives the Abu 'Ubayda account from Ibn Mas'ud at Uhud, noting that Badr is also said, and adds that al-Jarrah kept placing himself in his son's path while Abu 'Ubayda kept turning aside, until he went for him. Ma'arif al-Qur'an retells this from al-Qurtubi, placing it at Uhud and calling the turning aside a mark of respect.",
            "bn": "বাগাভীর একই সনদে আছে, আবু বকর (রাঃ) বদরের দিন ছেলেকে দ্বন্দ্বযুদ্ধে ডাকেন এবং প্রথম দলে থাকার অনুমতি চান। নবী ﷺ জবাব দেন: মাত্তি'না বিনাফসিকা, হে আবু বকর, আমাদের তোমার সঙ্গ উপভোগ করতে দাও। কুরতুবী আবু উবাইদা (রাঃ)-র ঘটনাটি আনেন ইবন মাসউদ (রাঃ) থেকে, উহুদের দিনের বলে, আর জানান যে বদরের কথাও বলা হয়। তিনি যোগ করেন, জাররাহ বারবার ছেলের সামনে এসে দাঁড়াত আর আবু উবাইদা (রাঃ) বারবার সরে যেতেন। শেষে তিনি তার দিকে এগিয়ে যান। মাআরিফুল কুরআন কুরতুবী থেকে ঘটনাটি নতুন করে বলে, উহুদে স্থাপন করে, আর সরে যাওয়াটিকে বলে সম্মানের প্রকাশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Uhud, Badr, or Neither",
          "bn": "উহুদ, বদর, নাকি কোনোটিই নয়"
        },
        "p": [
          {
            "en": "Set side by side, the reports do not agree. Abu 'Ubayda's father died at Badr for Sa'id ibn 'Abd al-'Aziz in Ibn Kathir, and at Uhud in the report from Ibn Mas'ud that al-Baghawi and al-Qurtubi give. Al-Qurtubi then quotes al-Waqidi: that is what the people of al-Sham say, but he asked men of Banu al-Harith ibn Fihr, and they said the father died before Islam. Abu Bakr's son is 'Abd al-Rahman in Ibn Kathir and 'Abdullah in al-Qurtubi, who adds the words you are to me as hearing and sight. Mus'ab's brother falls at Badr in Ibn Kathir and al-Qurtubi, at Uhud in al-Baghawi.",
            "bn": "পাশাপাশি রাখলে বর্ণনাগুলো মেলে না। ইবন কাসীরে সাঈদ ইবন আব্দুল আযীযের মতে আবু উবাইদা (রাঃ)-র বাবা মারা যায় বদরে। বাগাভী ও কুরতুবী ইবন মাসউদ (রাঃ) থেকে যে বর্ণনা আনেন, তাতে মারা যায় উহুদে। এরপর কুরতুবী ওয়াকিদীর কথা উদ্ধৃত করেন: শামের লোকেরা এমনই বলে, কিন্তু তিনি বনু হারিস ইবন ফিহরের কয়েকজনকে জিজ্ঞেস করেছিলেন, তারা বলেছে ইসলামের আগেই তার বাবা মারা গিয়েছিল। আবু বকর (রাঃ)-এর ছেলের নাম ইবন কাসীরে আব্দুর রহমান, কুরতুবীতে আব্দুল্লাহ। কুরতুবী সেখানে নবী ﷺ-এর এ কথাও যোগ করেন: আমার কাছে তুমি কান ও চোখের মতো। মুসআব (রাঃ)-এর ভাই ইবন কাসীর ও কুরতুবীতে নিহত হয় বদরে, বাগাভীতে উহুদে।"
          },
          {
            "en": "A different occasion stands beside all of these. Al-Baghawi and al-Qurtubi both record, under it was said, that the verse came down about Hatib ibn Abi Balta'a when he wrote to the people of Makkah, al-Qurtubi adding that the letter concerned the Prophet's march in the year of the conquest; both defer the story to Surat al-Mumtahina. None of the tafsirs consulted here attaches to this verse a hadith with a collector's grading. What they give are attributions to early authorities, several under it was said, and this article reports them as the commentators' reports and nothing firmer.",
            "bn": "এসবের পাশে দাঁড়িয়ে আছে সম্পূর্ণ আলাদা এক উপলক্ষ। বাগাভী ও কুরতুবী দুজনেই 'বলা হয়' দিয়ে উল্লেখ করেন, আয়াতটি নাজিল হয়েছিল হাতিব ইবন আবী বালতাআ (রাঃ)-কে নিয়ে, যখন তিনি মক্কাবাসীর কাছে চিঠি লিখেছিলেন। কুরতুবী যোগ করেন, চিঠিটি ছিল মক্কা বিজয়ের বছর নবী ﷺ-এর অভিযানের খবর নিয়ে। দুজনেই ঘটনাটির বিস্তারিত রেখে দেন সূরা মুমতাহিনার জন্য। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে সংকলকের মান-নির্ণয়সহ কোনো হাদিস জোড়েনি। তারা যা দেয় তা হলো প্রথম যুগের ব্যক্তিদের নামে বর্ণনা, যার কয়েকটি 'বলা হয়' দিয়ে। এ প্রবন্ধ সেগুলোকে তাফসীরকারদের বর্ণনা হিসেবেই উল্লেখ করে, এর চেয়ে বেশি দৃঢ় কিছু হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Rather, Be Gentle With Him",
          "bn": "বরং তার সঙ্গে কোমল থাকো"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his list with a report from al-Suddi that the words even if they were their fathers came down about 'Abdullah, son of 'Abdullah ibn Ubayy. He asked the Prophet ﷺ for what was left of his drink, hoping it would purify his father's heart, and carried it home. His father answered with a crude insult. The son came back angry and asked whether he was permitted to kill his father. The Prophet ﷺ replied: bal tarfuqu bihi wa tuhsinu ilayhi, rather, be gentle with him and treat him well. Ma'arif al-Qur'an, retelling it, says simply that he stopped him.",
            "bn": "কুরতুবী তাঁর তালিকা শুরু করেন সুদ্দীর একটি বর্ণনা দিয়ে। তাতে আছে, 'যদিও তারা তাদের বাবা হয়' অংশটি নাজিল হয়েছিল আব্দুল্লাহ ইবন আব্দুল্লাহ ইবন উবাই (রাঃ)-কে নিয়ে। তিনি নবী ﷺ-এর পান করা পানির অবশিষ্টটুকু চেয়ে নেন, এই আশায় যে এতে তাঁর বাবার অন্তর পবিত্র হবে। তা নিয়ে তিনি বাবার কাছে যান। বাবা জবাব দেয় কুৎসিত এক অপমান দিয়ে। ছেলে রেগে ফিরে আসেন এবং জানতে চান, বাবাকে হত্যার অনুমতি কি তাঁকে দেওয়া হবে না? নবী ﷺ বলেন: বাল তারফুকু বিহী ওয়া তুহসিনু ইলাইহি, বরং তার সঙ্গে কোমল থাকো, তার প্রতি সদাচার করো। মাআরিফুল কুরআন ঘটনাটি নতুন করে বলে শুধু এটুকু জানায় যে নবী ﷺ তাঁকে থামিয়ে দেন।"
          },
          {
            "en": "Next comes Ibn Jurayj, who begins with I was told: Abu Quhafa abused the Prophet ﷺ, and his son Abu Bakr struck him so hard that he fell on his face. When Abu Bakr told the Prophet ﷺ, he asked, did you do that? Do not go back to it. Abu Bakr swore that had a sword been near him he would have killed him. Ma'arif says only that the Prophet advised him not to do it again. In three of these reports, the drink, Badr and this slap, the Prophet's word holds the Companion back from his own relative.",
            "bn": "এরপর আসে ইবন জুরাইজের বর্ণনা, যা তিনি শুরু করেন 'আমাকে জানানো হয়েছে' বলে। আবু কুহাফা নবী ﷺ-কে গালি দেয়, আর তার ছেলে আবু বকর (রাঃ) তাকে এমন জোরে আঘাত করেন যে সে মুখ থুবড়ে পড়ে যায়। আবু বকর (রাঃ) নবী ﷺ-কে ঘটনাটি জানালে তিনি বলেন: তুমি কি এমন করেছ? আর কখনো এমন করো না। আবু বকর (রাঃ) কসম করে বলেন, তলোয়ার কাছে থাকলে তিনি তাকে হত্যাই করতেন। মাআরিফুল কুরআন শুধু জানায় যে নবী ﷺ তাঁকে আবার এমন না করার উপদেশ দেন। পানির ঘটনা, বদরের ঘটনা আর এই চড়ের ঘটনা, এ তিনটি বর্ণনাতেই নবী ﷺ-এর কথা সাহাবীকে নিজের আত্মীয়ের বিরুদ্ধে এগোতে দেয় না।"
          },
          {
            "en": "This needs saying plainly. The verse describes believers in the Prophet's lifetime, and the commentators attach it to what they report some of them did on a battlefield or in his presence. It licenses nothing against any living person or community: no harm to a parent, no shunning of a relative, and no naming of any present-day group as those who oppose Allah and His Messenger. None of the tafsirs consulted here on this verse gives a ruling on how to treat relatives of another faith, and this article gives none either.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নবী ﷺ-এর জীবদ্দশার মুমিনদের বর্ণনা দেয়। তাফসীরকারেরা একে জোড়েন যুদ্ধের ময়দানে বা তাঁর সামনে কয়েকজন সাহাবীর কাজের বর্ণনার সঙ্গে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। বাবা-মায়ের ক্ষতি করার অনুমতি দেয় না, কোনো আত্মীয়কে বয়কট করার অনুমতি দেয় না, আজকের কোনো দলকে আল্লাহ ও তাঁর রাসূলের বিরোধী বলে চিহ্নিত করার অনুমতিও দেয় না। ভিন্ন ধর্মের আত্মীয়দের সঙ্গে আচরণ নিয়ে সংগৃহীত কোনো তাফসীর এ আয়াতের অধীনে বিধান দেয়নি, এ প্রবন্ধও কোনো বিধান দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Far They Carried It",
          "bn": "আলেমরা কত দূর টেনেছেন"
        },
        "p": [
          {
            "en": "Some early scholars read the verse beyond the battlefield. Al-Qurtubi reports, through Ashhab, that Malik drew from it: do not sit with the Qadariyya, and hold them as enemies for Allah's sake. Al-Qurtubi adds that all people of injustice and aggression fall within that meaning. Ibn Kathir has Sufyan, and al-Qurtubi al-Thawri, saying that people held it came down about whoever keeps company with the ruler, and al-Qurtubi tells of 'Abd al-'Aziz ibn Abi Dawud, who met al-Mansur in the circuit of the Ka'ba, fled once he recognised him, and recited this verse.",
            "bn": "প্রথম যুগের কোনো কোনো আলেম আয়াতটিকে যুদ্ধের ময়দানের বাইরেও পড়েছেন। কুরতুবী আশহাবের মাধ্যমে জানান, ইমাম মালিক এ আয়াত থেকে বলেছেন: কাদারিয়াদের সঙ্গে বসো না, আল্লাহর জন্য তাদের সঙ্গে শত্রুতা রাখো। কুরতুবী যোগ করেন, অন্যায় ও সীমালঙ্ঘনে লিপ্ত সব মানুষই এ অর্থের ভেতরে পড়ে। ইবন কাসীরে সুফইয়ান আর কুরতুবীতে সাওরী বলেন, লোকেরা মনে করত আয়াতটি নাজিল হয়েছে শাসকের সঙ্গে ওঠাবসা করা মানুষদের নিয়ে। কুরতুবী আরও বলেন, আব্দুল আযীয ইবন আবী দাউদ তাওয়াফের সময় মানসূরের দেখা পান। চিনতে পেরেই তিনি সরে পড়েন আর এ আয়াত তিলাওয়াত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an marks where the line sits. Many jurists, it says, apply the rule to Muslims who transgress the Shari'ah or turn from it in practice: no muwalah, intimate friendship, with them. But muwasah, sympathy, mu'amalat, dealings, and mudarah, cordiality, are a different matter, to the degree of necessity. A prayer follows, given by Ibn Kathir from al-Hasan, who names no Companion: O Allah, give no wrongdoer a favour over me, for I found in what You revealed to me: la tajidu qawman. Ma'arif, citing al-Qurtubi, explains that kindness binds a noble person to repay it with love.",
            "bn": "সীমারেখাটা কোথায়, মাআরিফুল কুরআন তা দেখিয়ে দেয়। তার ভাষ্যে, অনেক ফকীহ এ বিধান সেই মুসলমানদের বেলায়ও খাটান, যারা শরীয়ত লঙ্ঘন করে বা বাস্তব জীবনে তা থেকে মুখ ফিরিয়ে নেয়: তাদের সঙ্গে মুওয়ালাত, অর্থাৎ অন্তরঙ্গ বন্ধুত্ব নয়। তবে মুওয়াসাত বা সহমর্মিতা, মুআমালাত বা লেনদেন, আর মুদারাত বা ভদ্র ব্যবহার আলাদা ব্যাপার, প্রয়োজনের মাত্রা পর্যন্ত। এরপর আসে একটি দোয়া, যা ইবন কাসীর আনেন হাসান থেকে, আর হাসান কোনো সাহাবীর নাম নেন না: হে আল্লাহ, কোনো পাপাচারীর অনুগ্রহ যেন আমার উপর না থাকে, কারণ আমার প্রতি আপনার নাজিল করা বাণীতে আমি পেয়েছি, লা তাজিদু কাওমান। কুরতুবীর বরাতে মাআরিফুল কুরআনের ব্যাখ্যা হলো, দয়া পেলে ভদ্র মানুষ ভালোবাসা দিয়ে তা শোধ করতে নিজেকে বাধ্য মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith Inscribed, Strength Given",
          "bn": "অন্তরে গাঁথা ঈমান, পাশে শক্তি"
        },
        "p": [
          {
            "en": "Kataba fi qulubihim al-iman. At-Tabari takes it as He decreed faith for their hearts, with fi standing for li. As-Sa'di: He traced it, fixed it and planted it, so that it does not shake. Ibn Kathir: He wrote happiness for them and made faith beautiful to their inner sight. Al-Qurtubi lists created, fixed, from al-Rabi' ibn Anas, made, and gathered, from katiba, a massed troop, so that they are not people who believe in part and reject part. He prefers the common reading kataba to the passive kutiba of Abu al-'Aliya and Zirr ibn Hubaysh, since wa ayyadahum follows.",
            "bn": "কাতাবা ফী কুলূবিহিমুল ঈমান। তাবারী এর অর্থ নেন, তিনি তাদের অন্তরের জন্য ঈমানের ফয়সালা করে দিয়েছেন। এখানে 'ফী' বসেছে 'লি'-র অর্থে। সা'দী বলেন, তিনি ঈমানকে এঁকে দিয়েছেন, মজবুত করেছেন, রোপণ করেছেন, তাই তা টলে না। ইবন কাসীর বলেন, তিনি তাদের জন্য সৌভাগ্য লিখে দিয়েছেন এবং তাদের অন্তর্দৃষ্টিতে ঈমানকে সুন্দর করে তুলেছেন। কুরতুবী কয়েকটি অর্থ সাজান: সৃষ্টি করেছেন; মজবুত করেছেন, রবী' ইবন আনাস থেকে; বানিয়ে দিয়েছেন; আর জড়ো করেছেন, কাতীবা বা সংঘবদ্ধ বাহিনী শব্দ থেকে। অর্থাৎ তারা কিছু মানে আর কিছু অস্বীকার করে, এমন লোক নয়। আবুল আলিয়া ও যির ইবন হুবাইশ পড়েছেন কর্মবাচ্যে, কুতিবা। কুরতুবী সাধারণ পাঠ কাতাবা-কেই ভালো বলেন, কারণ পরেই আছে ওয়া আইয়াদাহুম।"
          },
          {
            "en": "Wa ayyadahum bi-ruhin minhu: and He supported them with a ruh from Him. The commentators do not settle on one meaning. At-Tabari: proof, light and guidance from Him. The Muyassar: His help and backing against their enemy in this world. As-Sa'di: His revelation, aid and supply. Ibn Kathir has Ibn 'Abbas: He strengthened them. Al-Baghawi gathers more: help, al-Hasan saying it is called ruh because their cause lives by it; faith, from al-Suddi; the Qur'an and its proof, from al-Rabi', citing 42:52; mercy; and Jibril (AS). Al-Qurtubi lists much the same. Ma'arif al-Qur'an gives a light entering the heart, or the Qur'an and its arguments.",
            "bn": "ওয়া আইয়াদাহুম বিরূহিম মিনহু: আর তিনি নিজের পক্ষ থেকে এক রূহ দিয়ে তাদের শক্তি জুগিয়েছেন। তাফসীরকারেরা একটি অর্থে স্থির হন না। তাবারীর মতে, তাঁর পক্ষ থেকে দলিল, নূর ও হিদায়াত। মুয়াসসারের মতে, দুনিয়ায় শত্রুর বিরুদ্ধে তাঁর সাহায্য ও সমর্থন। সা'দীর মতে, তাঁর ওহি, সহায়তা ও জোগান। ইবন কাসীর আনেন ইবন আব্বাস (রাঃ)-এর কথা: তিনি তাদের শক্তিশালী করেছেন। বাগাভী আরও অর্থ জড়ো করেন। এক অর্থ সাহায্য, আর হাসান বলেন, একে রূহ বলা হয়েছে কারণ এতেই তাদের কাজ প্রাণ পায়। আরেক অর্থ ঈমান, সুদ্দী থেকে। আরেক অর্থ কুরআন ও তার দলিল, রবী' থেকে, ৪২:৫২ আয়াতের উদ্ধৃতিসহ। আরও আছে রহমত, আর জিবরীল (আঃ)। কুরতুবীর তালিকাও প্রায় একই। মাআরিফুল কুরআন বলে, অন্তরে প্রবেশ করা এক নূর, অথবা কুরআন ও তার যুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleasure That Runs Both Ways",
          "bn": "দুই দিক থেকে সন্তুষ্টি"
        },
        "p": [
          {
            "en": "Radiya Allahu 'anhum wa radu 'anhu. At-Tabari: Allah is pleased with them for their obedience to Him in this world, and they are pleased with Him in the next for His bringing them into the Garden. Al-Qurtubi: He accepted their deeds, and they rejoiced in what He gave them. As-Sa'di: His pleasure settles on them and He is never displeased with them again. Ibn Kathir calls the phrase a beautiful secret: because they grew angry with their kin and clans for Allah's sake, Allah gave them His pleasure in exchange, and made them pleased with Him.",
            "bn": "রাদিয়াল্লাহু আনহুম ওয়া রাদূ আনহু। তাবারী বলেন, দুনিয়ায় তারা আল্লাহর আনুগত্য করেছে বলে তিনি তাদের উপর সন্তুষ্ট। আর আখিরাতে তিনি তাদের জান্নাতে নিয়ে যাবেন বলে তারাও তাঁর উপর সন্তুষ্ট। কুরতুবীর মতে, তিনি তাদের আমল কবুল করেছেন, আর তিনি যা দিয়েছেন তাতে তারা খুশি হয়েছে। সা'দী বলেন, তাঁর সন্তুষ্টি তাদের উপর নেমে আসে, এরপর তিনি আর কখনো তাদের উপর অসন্তুষ্ট হন না। ইবন কাসীর বলেন, এ বাক্যে এক চমৎকার রহস্য আছে। আল্লাহর জন্য তারা নিজেদের আত্মীয় ও গোষ্ঠীর উপর রাগ করেছিল। বিনিময়ে আল্লাহ তাদের দিলেন নিজের সন্তুষ্টি, আর তাদেরও নিজের উপর সন্তুষ্ট করে দিলেন।"
          },
          {
            "en": "Ula'ika hizbu Allah. At-Tabari glosses it as Allah's troops and His allies, and al-muflihun as those who endure and succeed in reaching what they sought. Ibn Kathir: His servants and the people of His honour, set against the party of Satan in 58:19. The Muyassar: His allies. Al-Qurtubi closes with a report Sa'id ibn Abi Sa'id al-Jurjani gives from some of his teachers, in which Dawud (AS) is told who Allah's party are: lowered eyes, pure hearts, clean hands. The title is given by qualities. It is the name of no present-day party or movement, and it licenses nothing for or against any.",
            "bn": "উলাইকা হিযবুল্লাহ। তাবারী এর অর্থ করেন আল্লাহর বাহিনী ও তাঁর বন্ধু। আর আল-মুফলিহূন মানে যারা অবিচল থাকে এবং যা চেয়েছিল তা পেয়ে সফল হয়। ইবন কাসীর বলেন, এরা তাঁর বান্দা, তাঁর সম্মানের মানুষ। এদের বিপরীতে আছে ৫৮:১৯ আয়াতের শয়তানের দল। মুয়াসসারে আছে: তাঁর বন্ধুরা। কুরতুবী শেষ করেন সাঈদ ইবন আবী সাঈদ আল-জুরজানীর একটি বর্ণনা দিয়ে, যা তিনি তাঁর কয়েকজন শিক্ষক থেকে বর্ণনা করেছেন। তাতে দাউদ (আঃ)-কে জানানো হয় আল্লাহর দল কারা: যাদের চোখ নত, অন্তর পবিত্র, হাত পরিষ্কার। এ উপাধি মেলে গুণ দিয়ে। এটা আজকের কোনো দল বা আন্দোলনের নাম নয়। কারও পক্ষে বা বিপক্ষে কিছু করার ছাড়পত্রও এতে নেই।"
          }
        ]
      }
    ]
  }
});
