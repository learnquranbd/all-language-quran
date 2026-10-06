/**
 * Tadabbur long-form articles — surah 88.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "88:1": {
    "sections": [
      {
        "h": {
          "en": "A Surah That Opens on News",
          "bn": "খবর দিয়ে শুরু এক সূরা"
        },
        "p": [
          {
            "en": "Hal ataka hadithu al-ghashiya: has the news of the Overwhelming reached you? The verse has 4 Arabic words. Hal opens a question; ataka is has it come to you; hadithu is the news or account of; and al-ghashiya is that which covers over. The verse opens Surat al-Ghashiya, and the surah takes its name from this last word. Al-Qurtubi records that the surah is Makkan by the statement of all, with 26 verses; Ibn Kathir and al-Baghawi also call it Makkan.",
            "bn": "হাল আতাকা হাদীসুল গাশিয়াহ: আচ্ছন্নকারীর খবর কি আপনার কাছে পৌঁছেছে? আরবিতে আয়াতটি মাত্র ৪ শব্দের। হাল দিয়ে প্রশ্ন শুরু হয়। আতাকা মানে তোমার কাছে এসেছে কি। হাদীসু মানে খবর বা বৃত্তান্ত। আর আল-গাশিয়াহ মানে যা ঢেকে ফেলে। এ আয়াত দিয়েই সূরা গাশিয়াহর শুরু, আর সূরার নামও এসেছে এই শেষ শব্দটি থেকে। কুরতুবী লিখেছেন, সবার মতেই সূরাটি মাক্কী, আর এর আয়াত ২৬টি। ইবন কাসীর ও বাগাভীও সূরাটির শুরুতে একে মাক্কী বলেছেন।"
          },
          {
            "en": "The verse names something and then holds it back. Nothing inside these words says what the Overwhelming is; the listener is given a title and a question, and waits. The verse that follows, 88:2, begins to describe faces on that Day, and it has its own entry. This article stays with this verse: what the commentators fetched for this verse say about the question, about the news and about the name al-ghashiya, and why the surah was heard so often in the Prophet's prayers ﷺ.",
            "bn": "আয়াতটি একটা নাম বলে, তারপর থেমে যায়। আচ্ছন্নকারী আসলে কী, এই শব্দগুলোর ভেতরে তার কোনো বিবরণ নেই। শ্রোতার হাতে থাকে শুধু একটা নাম আর একটা প্রশ্ন, বাকিটার জন্য তাকে অপেক্ষা করতে হয়। পরের আয়াত, ৮৮:২, সেদিনের কিছু মুখের বর্ণনা শুরু করে। সে আয়াতের আলাদা আলোচনা আছে। এ লেখা থাকবে এ আয়াতের কাছেই। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, সেগুলো প্রশ্নটি নিয়ে, খবর শব্দটি নিয়ে আর আল-গাশিয়াহ নামটি নিয়ে কী বলে, আর নবী ﷺ-এর সালাতে কেন সূরাটি এত বেশি শোনা যেত, সেটাই দেখার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hal Ataka, Heard Three Ways",
          "bn": "হাল আতাকা: তিন রকম শোনা"
        },
        "p": [
          {
            "en": "The commentators do not hear the opening hal in a single way. Al-Qurtubi reports from Qutrub that hal here carries the meaning of qad, the particle that marks a thing as having truly happened, and compares hal ata 'ala al-insan in 76:1. On that reading he paraphrases: qad ja'aka ya Muhammad, the news of the Overwhelming has come to you, O Muhammad. Al-Baghawi's gloss, the shortest of the fetched texts, takes the same line: qad ataka hadithu al-qiyama, the news of the Resurrection has come to you.",
            "bn": "শুরুর হাল শব্দটিকে তাফসীরকারেরা একভাবে শোনেননি। কুরতুবী কুতরুব থেকে বর্ণনা করেন, এখানে হাল এসেছে কাদ অর্থে। কাদ সেই শব্দ, যা বোঝায় ঘটনাটা সত্যিই ঘটে গেছে। তুলনা হিসেবে তিনি ৭৬:১ আয়াতের হাল আতা আলাল ইনসান উল্লেখ করেন। এ পাঠ ধরে তিনি অর্থ করেন: কাদ জাআকা ইয়া মুহাম্মাদ, হে মুহাম্মাদ, আচ্ছন্নকারীর খবর তোমার কাছে এসে গেছে। দেখা তাফসীরগুলোর মধ্যে বাগাভীর ব্যাখ্যা সবচেয়ে ছোট, তিনিও একই পথে যান: কাদ আতাকা হাদীসুল কিয়ামাহ, কিয়ামতের খবর তোমার কাছে এসেছে।"
          },
          {
            "en": "Others keep the form of a question. The Muyassar writes: has there come to you, ayyuha ar-rasul, O Messenger, the news of the Resurrection, and leaves it a question. At-Tabari keeps the words as Allah's address to His Prophet ﷺ, hal ataka ya Muhammad, and moves straight on to what the news is. The same opening, with al-junud, the hosts, in place of al-ghashiya, stands at 85:17, and that entry sets out how the commentators heard the question there.",
            "bn": "অন্যরা প্রশ্নের রূপটাই রেখে দেন। মুয়াসসার লেখে: আইয়ুহার রাসূল, হে রাসূল, কিয়ামতের খবর কি তোমার কাছে এসেছে? প্রশ্নটাকে প্রশ্ন হিসেবেই সেখানে রাখা হয়েছে। তাবারী শব্দগুলোকে নবী ﷺ-এর প্রতি আল্লাহর সম্বোধন হিসেবে পড়েন, হাল আতাকা ইয়া মুহাম্মাদ, তারপর সোজা চলে যান খবরটা কী, সেই আলোচনায়। একই শুরু ৮৫:১৭ আয়াতেও আছে, সেখানে আল-গাশিয়াহর জায়গায় আল-জুনূদ, অর্থাৎ বাহিনী। সেখানে তাফসীরকারেরা প্রশ্নটা কীভাবে শুনেছেন, তা ওই আয়াতের আলোচনায় পাওয়া যাবে।"
          },
          {
            "en": "Al-Qurtubi records two further readings. Under 'it is said', hal ataka means: this was not part of your knowledge, nor of your people's. Ibn Abbas, he reports, said it had not come to him before in the detail given here. And al-Kalbi held that the words came out as a question to the Messenger ﷺ with the sense: if the news of the Overwhelming had not come to you, it has now come. The fetched texts thus give an affirmation, a question, and a question that answers itself. All are kept, and none is chosen here.",
            "bn": "কুরতুবী আরও দুটি পাঠ উল্লেখ করেন। 'বলা হয়' কথাটি দিয়ে তিনি আনেন যে হাল আতাকার অর্থ: এ বিষয় তোমার জানা ছিল না, তোমার কওমেরও না। তিনি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এখানে যে বিস্তারিত বিবরণ এসেছে, সেভাবে খবরটা আগে তাঁর কাছে আসেনি। আর কালবীর মত হলো, কথাটা রাসূল ﷺ-এর প্রতি প্রশ্নের আকারে এসেছে, অর্থ এই: আচ্ছন্নকারীর খবর যদি তোমার কাছে না এসে থাকে, তবে এখন এসে গেল। দেখা তাফসীরগুলোতে তাই তিনটি রূপ মেলে: নিশ্চিত বিবৃতি, প্রশ্ন, আর এমন প্রশ্ন যা নিজেই নিজের উত্তর দেয়। সবগুলোই এখানে রাখা হলো, কোনোটিকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Hadith as a Report",
          "bn": "হাদীস মানে এখানে খবর"
        },
        "p": [
          {
            "en": "The third word is hadith. A reader who knows it mainly as the name for reports of the Prophet ﷺ should hear it here in the plain sense at-Tabari gives: hadithu al-ghashiya, ya'ni qissatuha wa khabaruha, that is, its story and its report. The Muyassar puts khabar, report, in its place in a plain paraphrase. Al-Baghawi keeps the word hadith as it stands and adds only what the news is about, the Resurrection. The question, then, is whether an account has reached the one addressed.",
            "bn": "তৃতীয় শব্দ হাদীস। নবী ﷺ-এর বাণীর বর্ণনা হিসেবেই শব্দটা আমাদের বেশি চেনা। কিন্তু এখানে তাবারী এর সাধারণ অর্থটা দেন: হাদীসুল গাশিয়াহ, ইয়া'নী কিসসাতুহা ওয়া খাবারুহা, অর্থাৎ তার কাহিনি ও তার খবর। মুয়াসসার সহজ ভাষায় অর্থ করতে গিয়ে শব্দটির জায়গায় খাবার, মানে খবর, বসিয়েছে। বাগাভী হাদীস শব্দটি যেমন আছে তেমনই রাখেন, শুধু জুড়ে দেন খবরটা কিসের, কিয়ামতের। প্রশ্নটা তাহলে এই: একটা বৃত্তান্ত কি যাকে বলা হচ্ছে তার কাছে পৌঁছেছে?"
          },
          {
            "en": "A report is about something the hearer has not seen. It is believed or doubted on the strength of whoever brings it, and this one comes from Allah to His Messenger ﷺ. As-Sa'di does not stop on the single word. He reads the verse as the opening of a description: Allah mentions the states of the Day of Resurrection and its overwhelming terrors, how it covers all creatures with its hardships, how they are repaid for their deeds, and how they are separated into two groups, a group in the Garden and a group in the Blaze.",
            "bn": "খবর মানে এমন কিছুর বিবরণ, যা শ্রোতা নিজের চোখে দেখেনি। খবর বিশ্বাস হবে কি না, তা নির্ভর করে কে এনেছে তার উপর। আর এ খবর আল্লাহর কাছ থেকে তাঁর রাসূল ﷺ-এর কাছে এসেছে। সা'দী একটি শব্দে থামেন না। তিনি আয়াতটিকে এক বিবরণের সূচনা হিসেবে পড়েন। আল্লাহ এখানে কিয়ামতের দিনের অবস্থা আর তার প্রচণ্ড বিভীষিকার কথা বলছেন। সেদিন সব সৃষ্টিকে তার কাঠিন্য ঢেকে ফেলবে, মানুষ তাদের আমলের প্রতিদান পাবে, আর তারা ভাগ হয়ে যাবে দুই দলে: একদল জান্নাতে, একদল জ্বলন্ত আগুনে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Day That Covers All",
          "bn": "যে দিন সবাইকে ঢেকে ফেলে"
        },
        "p": [
          {
            "en": "Al-ghashiya is the one that covers, comes down over, envelops. The fetched commentators name two things it may be, and give several ways of putting each. The first, and the most widely held, is the Day of Resurrection. Ibn Kathir writes that al-ghashiya is one of the names of the Day of Resurrection, citing Ibn Abbas, Qatada and Ibn Zayd, because it covers the people and takes them all in: taghsha an-nas wa ta'ummuhum. Al-Qurtubi says this is the view of most of the commentators.",
            "bn": "আল-গাশিয়াহ মানে যা ঢেকে দেয়, উপর থেকে নেমে এসে ঘিরে ফেলে। দেখা তাফসীরগুলো এর দুটি অর্থ বলে, আর প্রতিটির কয়েক রকম বর্ণনা দেয়। প্রথম অর্থ, যা সবচেয়ে বেশি প্রচলিত, কিয়ামতের দিন। ইবন কাসীর লেখেন, আল-গাশিয়াহ কিয়ামতের দিনের নামগুলোর একটি। এ কথা তিনি ইবন আব্বাস (রাঃ), কাতাদা ও ইবন যায়দের সূত্রে আনেন। কারণ সেদিন মানুষকে ঢেকে ফেলবে, সবাইকে একসঙ্গে ঘিরে নেবে: তাগশান নাসা ওয়া তাউম্মুহুম। কুরতুবী বলেন, অধিকাংশ তাফসীরকারের মত এটাই।"
          },
          {
            "en": "At-Tabari begins by saying the people of interpretation differed over the meaning of al-ghashiya. His first group holds that it is the Resurrection, which covers people with terrors. He gives Ibn Abbas: al-ghashiya is one of the names of the Day of Resurrection, which Allah made great and warned His servants of. He gives Qatada, briefly: al-ghashiya is the Hour, as-sa'a. And through a second chain to Ibn Abbas he gives the same single word: the Hour.",
            "bn": "তাবারী শুরুতেই বলেন, আল-গাশিয়াহর অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। তাঁর বর্ণনায় প্রথম দলের মত: এটা কিয়ামত, যা মানুষকে বিভীষিকা দিয়ে ঢেকে দেবে। তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: আল-গাশিয়াহ কিয়ামতের দিনের নামগুলোর একটি। আল্লাহ সেদিনকে মহা গুরুত্ব দিয়েছেন আর তাঁর বান্দাদের সেদিন সম্পর্কে সতর্ক করেছেন। কাতাদার কথাও তিনি আনেন, সংক্ষেপে: আল-গাশিয়াহ হলো আস-সাআহ, অর্থাৎ সেই মহাক্ষণ। ইবন আব্বাস (রাঃ) পর্যন্ত আরেকটি সূত্রেও তিনি সেই একই এক শব্দের উত্তর দেন: সেই মহাক্ষণ।"
          },
          {
            "en": "The shorter glosses agree on the Day and differ only on what it covers. Al-Qurtubi has the Resurrection covering all creatures with its terrors and its alarms, bi-ahwaliha wa afza'iha. Al-Baghawi has it covering everything with terrors. The Muyassar has it covering the people with its terrors. People, creatures, everything: the object widens from text to text, but each describes the same Day arriving over all who meet it.",
            "bn": "ছোট ব্যাখ্যাগুলো দিনটির ব্যাপারে একমত, পার্থক্য শুধু সে কাকে ঢেকে ফেলে তাতে। কুরতুবীর ভাষায়, কিয়ামত সব সৃষ্টিকে ঢেকে ফেলবে তার বিভীষিকা আর আতঙ্ক দিয়ে: বি-আহওয়ালিহা ওয়া আফযাইহা। বাগাভী বলেন, সে বিভীষিকা দিয়ে সবকিছু ঢেকে ফেলবে। মুয়াসসার বলে, সে মানুষকে ঢেকে ফেলবে তার বিভীষিকা দিয়ে। মানুষ, সৃষ্টিকুল, সবকিছু: এক তাফসীর থেকে আরেক তাফসীরে পরিধি বাড়তে থাকে। তবু সবাই একই দিনের কথা বলেন, যা যাদের উপর আসবে তাদের সবাইকে ঘিরে ফেলবে, কেউ তার বাইরে থাকবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fire Over the Faces",
          "bn": "মুখের উপর ছেয়ে যাওয়া আগুন"
        },
        "p": [
          {
            "en": "The second reading makes al-ghashiya the Fire. At-Tabari, after his first group, writes that others said: rather, al-ghashiya is the Fire, which covers the faces of the disbelievers, and he cites Sa'id: ghashiyat an-nar, the covering of the Fire. Al-Qurtubi names Sa'id ibn Jubayr and Muhammad ibn Ka'b for this reading, says that Abu Salih narrated it from Ibn Abbas, and gives its proof from the Qur'an: wa taghsha wujuhahum an-nar, and the Fire will cover their faces, in 14:50.",
            "bn": "দ্বিতীয় পাঠে আল-গাশিয়াহ মানে আগুন। প্রথম দলের পর তাবারী লেখেন, অন্যরা বলেছেন: বরং আল-গাশিয়াহ হলো সেই আগুন, যা কাফিরদের মুখ ঢেকে ফেলবে। এর পক্ষে তিনি সাঈদের কথা আনেন: গাশিয়াতুন নার, আগুনের আবরণ। কুরতুবী এ মতের জন্য সাঈদ ইবন জুবাইর ও মুহাম্মাদ ইবন কা'বের নাম বলেন। তিনি জানান, আবু সালিহ এ কথা ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন। আর কুরআন থেকে এর দলিল দেন ১৪:৫০ আয়াত: ওয়া তাগশা উজূহাহুমুন নার, আর আগুন তাদের মুখ ঢেকে ফেলবে।"
          },
          {
            "en": "Ibn Abbas therefore stands behind both readings in the fetched texts. At-Tabari has him on the Day of Resurrection and on the Hour; al-Qurtubi's report through Abu Salih has him on the Fire. At-Tabari sets out the two readings as a difference among the people of interpretation, and al-Qurtubi records both. The article does not weigh the chains against each other. It reports each as the commentator gives it, with his name attached.",
            "bn": "দেখা তাফসীরগুলোতে তাই দুই পাঠের পেছনেই ইবন আব্বাস (রাঃ)-এর নাম আছে। তাবারীর বর্ণনায় তিনি কিয়ামতের দিন আর সেই মহাক্ষণের কথা বলেছেন। কুরতুবীর আনা আবু সালিহের বর্ণনায় তিনি বলেছেন আগুনের কথা। তাবারী দুটি পাঠকে তাফসীরকারদের মতভেদ হিসেবে সাজিয়েছেন, আর কুরতুবী দুটিই উল্লেখ করেছেন। এ লেখা বর্ণনাসূত্রগুলোর একটিকে আরেকটির চেয়ে ভারী বলছে না। যিনি যেভাবে এনেছেন, তাঁর নাম সহ সেভাবেই রাখা হলো।"
          },
          {
            "en": "Al-Qurtubi adds three more readings, each under 'it is said'. One: it covers creation. Another: what is meant is the second blowing, for the raising of the dead, because it covers all creatures. A third reverses the direction of the verb: al-ghashiya are the people of the Fire, who come down upon it, yaghshawnaha, and plunge into it. On that reading the covering is done to the Fire by those who enter it, rather than done by the Fire to them.",
            "bn": "কুরতুবী 'বলা হয়' দিয়ে আরও তিনটি পাঠ আনেন। একটি: এটা সৃষ্টিকে ঢেকে ফেলবে। আরেকটি: এখানে উদ্দেশ্য পুনরুত্থানের দ্বিতীয় ফুঁৎকার, কারণ তা সব সৃষ্টিকে ঢেকে ফেলবে। তৃতীয় পাঠে ঢেকে ফেলার দিকটাই উল্টে যায়। আল-গাশিয়াহ তখন জাহান্নামের অধিবাসীরা, যারা আগুনের উপর গিয়ে পড়বে, ইয়াগশাওনাহা, আর তাতে ঝাঁপিয়ে পড়বে। এ পাঠে আগুন কাউকে ঢাকছে না, বরং যারা তাতে ঢুকছে তারাই আগুনকে ছেয়ে ফেলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept as Wide as Revealed",
          "bn": "যতটা প্রশস্ত, ততটাই রাখা"
        },
        "p": [
          {
            "en": "At-Tabari closes the difference with a judgement of his own. The right thing to say, he writes, is that Allah said to His Prophet ﷺ hal ataka hadithu al-ghashiya and did not tell us whether He meant the covering of the Resurrection or the covering of the Fire. Both are a ghashiya. The one covers people with trial, terrors and distress; the other covers the disbelievers with scorching of the face, with flame and with molten brass. So, he concludes, no statement is sounder than to say as Allah said, and to keep the report as general as He kept it.",
            "bn": "মতভেদের শেষে তাবারী নিজের সিদ্ধান্ত জানান। তিনি লেখেন, সঠিক কথা হলো: আল্লাহ তাঁর নবী ﷺ-কে বলেছেন হাল আতাকা হাদীসুল গাশিয়াহ, কিন্তু আমাদের জানাননি তিনি কিয়ামতের আবরণ বুঝিয়েছেন, নাকি আগুনের আবরণ। দুটিই গাশিয়াহ। একটি মানুষকে ঢেকে ফেলে বিপদ, বিভীষিকা আর দুঃখকষ্ট দিয়ে। অন্যটি কাফিরদের ঢেকে ফেলে মুখ ঝলসানো তাপে, আগুনের শিখায় আর গলিত তামায়। তাই তাঁর উপসংহার, আল্লাহ যেভাবে বলেছেন সেভাবে বলার চেয়ে বিশুদ্ধ কোনো কথা নেই। আল্লাহ খবরটা যতটা ব্যাপক রেখেছেন, ততটা ব্যাপকই রাখতে হবে।"
          },
          {
            "en": "That is at-Tabari's own position, and it is reported here as his. It is not a ruling over the others: al-Qurtubi gives the Resurrection as the view of most commentators, the Muyassar and al-Baghawi write only the Resurrection, and as-Sa'di reads the passage as the states of that Day. Each gloss stays with its name. What at-Tabari's sentence offers a reader is a discipline rather than a verdict: where the revealed word is left wide, he declines to make it narrower than it was given.",
            "bn": "এটা তাবারীর নিজস্ব অবস্থান, আর এখানে তাঁর নামেই তা উল্লেখ করা হলো। অন্যদের উপর এটা কোনো রায় নয়। কুরতুবী কিয়ামতকেই অধিকাংশের মত বলেছেন। মুয়াসসার আর বাগাভী শুধু কিয়ামতের কথাই লিখেছেন। সা'দী পুরো অংশটাকে সেই দিনের অবস্থার বর্ণনা হিসেবে পড়েছেন। প্রতিটি ব্যাখ্যা যার, তার নামেই থাকল। তাবারীর বাক্যটা পাঠককে কোনো রায় দেয় না, দেয় এক ধরনের সংযম। আল্লাহর বাণী যেখানে কোনো শব্দকে প্রশস্ত রেখেছে, তিনি সেটাকে তার চেয়ে সংকীর্ণ করতে রাজি নন।"
          }
        ]
      },
      {
        "h": {
          "en": "On Fridays and Both Eids",
          "bn": "জুমায় আর দুই ঈদে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with how it was recited. He recalls, as already mentioned, the report of an-Nu'man ibn Bashir (RA) that the Messenger of Allah ﷺ used to recite al-A'la and al-Ghashiya in the 'Id prayer and on Friday. He then gives Imam Malik's report that ad-Dahhak ibn Qays asked an-Nu'man what the Prophet ﷺ recited on Friday along with Surat al-Jumu'a, and that he answered: hal ataka hadithu al-ghashiya. He names Abu Dawud, an-Nasa'i, Muslim and Ibn Majah as recording it.",
            "bn": "ইবন কাসীর সূরাটির শুরুতেই বলেন, এটি কখন পড়া হতো। তিনি মনে করিয়ে দেন, আগেই নুমান ইবন বাশীর (রাঃ)-এর বর্ণনা এসেছে: রাসূলুল্লাহ ﷺ ঈদের সালাতে আর জুমার দিনে সূরা আ'লা ও সূরা গাশিয়াহ পড়তেন। তারপর তিনি ইমাম মালিকের বর্ণনা আনেন। দাহহাক ইবন কায়স নুমানকে জিজ্ঞেস করেছিলেন, জুমার দিনে সূরা জুমুআর সঙ্গে নবী ﷺ আর কী পড়তেন। তিনি উত্তর দিয়েছিলেন: হাল আতাকা হাদীসুল গাশিয়াহ। ইবন কাসীর জানান, আবু দাউদ, নাসাঈ, মুসলিম ও ইবন মাজাহ এটি বর্ণনা করেছেন।"
          },
          {
            "en": "Both reports stand in Sahih Muslim under the number 878, and Muslim placed them in his Sahih. In the English of 878a on the page: \"Nu'man b. Bashir reported that the Messenger of Allah (ﷺ) used to recite on two 'Ids and in Friday prayer: 'Glorify The name of Thy Lord, the Most High' (Surah lxxxvii.), and: 'Has there come to thee the news of the overwhelming event' (lxxxviii.). And when the 'Id and Jumu'a combined on a day he recited these two (surah) in both the prayers.\"",
            "bn": "দুটি বর্ণনাই সহীহ মুসলিমে ৮৭৮ নম্বরের অধীনে আছে, আর মুসলিম এগুলোকে তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন। পাতায় ৮৭৮a-এর ইংরেজির অর্থ এই: \"নুমান ইবন বাশীর বর্ণনা করেন, রাসূলুল্লাহ ﷺ দুই ঈদে আর জুমার সালাতে পড়তেন 'তোমার সুমহান রবের নামের পবিত্রতা ঘোষণা করো' (সূরা ৮৭) এবং 'আচ্ছন্নকারী ঘটনার খবর কি তোমার কাছে এসেছে' (সূরা ৮৮)। আর ঈদ ও জুমা একই দিনে পড়লে তিনি দুই সালাতেই এ দুটি সূরা পড়তেন।\""
          },
          {
            "en": "Under the same number, 878c on the page reads: \"Dahhak b. Qais wrote to Nu'man b. Bashir asking him what the Messenger of Allah (ﷺ) recited on Friday besides Surah Jumu'a He said that he recited: 'Has there reached...' (Surah lxxxviii, ).\" The surah, then, was not a rare recitation. It was heard by a gathered congregation week after week, and again on the two days of festival, so that the opening question was put to the worshippers again and again.",
            "bn": "একই নম্বরের অধীনে পাতায় ৮৭৮c-এর ইংরেজির অর্থ এই: \"দাহহাক ইবন কায়স নুমান ইবন বাশীরকে চিঠি লিখে জানতে চাইলেন, জুমার দিনে সূরা জুমুআর পাশাপাশি রাসূলুল্লাহ ﷺ কী পড়তেন। তিনি বললেন, তিনি পড়তেন: 'হাল আতাকা...' (সূরা ৮৮)।\" অর্থাৎ সূরাটি কালেভদ্রে পড়া কোনো সূরা ছিল না। জামাতে সমবেত মানুষ সপ্তাহের পর সপ্তাহ তা শুনত, আবার শুনত দুই ঈদের দিনে। ফলে শুরুর প্রশ্নটা মুসল্লিদের সামনে বারবার এসে দাঁড়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Has It Reached You?",
          "bn": "তোমার কাছে কি পৌঁছেছে?"
        },
        "p": [
          {
            "en": "None of the fetched commentators gives an occasion of revelation for this verse. What they give instead is a question and a range of answers, and the reader can take it personally without choosing among them. Has the news reached me? Al-Qurtubi's report from Ibn Abbas, that the news had not come before in this detail, describes what the surah does: it supplies the detail. Whoever has recited the surah has received the report. Whether it has arrived, in the sense of changing anything, is the part the verse leaves to the one who hears it.",
            "bn": "দেখা তাফসীরগুলোর কোনোটিই এ আয়াতের নাযিলের কোনো উপলক্ষ উল্লেখ করেনি। তার বদলে তারা দিয়েছে একটা প্রশ্ন আর তার কয়েক রকম উত্তর। কোনোটিকে বেছে না নিয়েও পাঠক প্রশ্নটাকে নিজের করে নিতে পারেন: খবরটা কি আমার কাছে পৌঁছেছে? কুরতুবী ইবন আব্বাস (রাঃ) থেকে আনেন, এই বিস্তারিত বিবরণে খবরটা আগে আসেনি। সূরাটি ঠিক সেই কাজটাই করে, বিবরণটা এনে দেয়। যে সূরাটি পড়েছে, খবর তার হাতে এসে গেছে। কিন্তু খবরটা সত্যিই পৌঁছাল কি না, মানে জীবনে কিছু বদলাল কি না, সে প্রশ্ন আয়াত শ্রোতার কাছেই রেখে দেয়।"
          },
          {
            "en": "Two cautions belong here. The verse names a Day that covers everyone, and the readings that mention the Fire over the faces of disbelievers describe what the text describes; they give no licence to assign any living person to either group. And the question is not a riddle to be solved before moving on. In the Prophet's practice ﷺ it came back on Fridays and on both Eids, and a reader can answer it each time in the sense al-Qurtubi and al-Baghawi read in it, with qad: it has come.",
            "bn": "এখানে দুটি সতর্কতা দরকার। আয়াতটি এমন এক দিনের কথা বলে, যা সবাইকে ঢেকে ফেলবে। কাফিরদের মুখের উপর আগুনের কথা যে পাঠগুলোতে আছে, সেগুলো কেবল তা-ই বর্ণনা করে যা পাঠ্যে আছে। কোনো জীবিত মানুষকে এ দলে বা ও দলে ফেলার অনুমতি এ আয়াত কাউকে দেয় না। আর প্রশ্নটা এমন কোনো ধাঁধা নয়, যার সমাধান করে সামনে এগিয়ে যেতে হবে। নবী ﷺ-এর আমলে জুমায় আর দুই ঈদে প্রশ্নটা ফিরে ফিরে আসত। কুরতুবী ও বাগাভী কাদ শব্দ দিয়ে আয়াতটির যে অর্থ করেছেন, পাঠক প্রতিবার সেই অর্থেই উত্তর দিতে পারেন: এসে গেছে।"
          }
        ]
      }
    ]
  },
  "88:17-20": {
    "sections": [
      {
        "h": {
          "en": "From the Unseen to the Obvious",
          "bn": "অদৃশ্য থেকে চোখের সামনে"
        },
        "p": [
          {
            "en": "Surah al-Ghashiyah is Makkan and has twenty-six verses. It opens in 88:1 by asking whether the report of the Overwhelming has reached you, and then shows two sets of faces on that Day: the humbled and exhausted in 88:2-7, and the delighted in 88:8-16, whose description ends with carpets spread about. Everything so far is unseen. Then, with no transition at all, 88:17 turns the reader's head towards a camel.",
            "bn": "সূরা আল-গাশিয়াহ মক্কী, আয়াত সংখ্যা ছাব্বিশ। 88:1 আয়াতে এটি শুরু হয় এই প্রশ্ন দিয়ে যে আচ্ছন্নকারী সেই ঘটনার সংবাদ তোমার কাছে পৌঁছেছে কি না, তারপর সেদিনের দুই ধরনের মুখ দেখায়: 88:2-7 আয়াতে অবনত ও ক্লান্ত মুখ, আর 88:8-16 আয়াতে আনন্দিত মুখ, যাদের বর্ণনা শেষ হয় বিছানো মখমলে। এ পর্যন্ত সবই অদৃশ্য। এরপর কোনো ভূমিকা ছাড়াই 88:17 আয়াত পাঠকের মাথা ঘুরিয়ে দেয় একটি উটের দিকে।"
          },
          {
            "en": "The move is an argument, not a change of subject. The people first addressed denied the Day because they had never seen one. The verses answer by pointing at four things they had seen every day of their lives and asking them to look again. Nothing new is offered. What is asked for is attention to what was already there, and the claim underneath is that the world already carries the evidence for the Day it will end in.",
            "bn": "এই মোড় বিষয় বদল নয়, একটি যুক্তি। যাদের উদ্দেশে এটি প্রথম নাযিল হয়, তারা সেই দিনকে অস্বীকার করত কারণ তারা কখনো তা দেখেনি। আয়াতগুলো উত্তর দেয় এমন চারটি জিনিসের দিকে আঙুল তুলে, যা তারা জীবনের প্রতিটি দিন দেখেছে, আর বলে আবার তাকাও। নতুন কিছুই দেওয়া হচ্ছে না। যা চাওয়া হচ্ছে তা হলো যা ইতিমধ্যেই সামনে ছিল তার প্রতি মনোযোগ; আর এর নিচে দাবিটি হলো, যে দিনে জগৎ শেষ হবে তার প্রমাণ জগৎ নিজেই বহন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nazar, Not Merely Sight",
          "bn": "নাযার, কেবল দেখা নয়"
        },
        "p": [
          {
            "en": "Afala yanzurun — do they then not look? The verb nazara, taken with the preposition ila, is the looking that dwells on a thing and considers it, not the passive registering that lets a familiar object pass unread. The reproach sits in the opening particle. It is not that they lacked the sight; it is that the sight was spent without ever being used, on animals they owned and a sky they slept under.",
            "bn": "'আফালা ইয়ানযুরূন' — তবে কি তারা লক্ষ করে না? 'নাযারা' ক্রিয়াপদটি 'ইলা' অব্যয়ের সঙ্গে এলে বোঝায় সেই দেখা যা বস্তুটির ওপর থেমে থাকে ও চিন্তা করে, নিছক নিষ্ক্রিয় নজরে পড়া নয় — যে নজরে পরিচিত জিনিস অপঠিত থেকেই পাশ কাটিয়ে যায়। ভর্ৎসনাটি রয়েছে শুরুর অব্যয়ে। তাদের দৃষ্টিশক্তির অভাব ছিল না; বরং সেই দৃষ্টি ব্যয় হয়েছে অথচ কখনো কাজে লাগেনি — যে পশু তাদেরই ছিল আর যে আকাশের নিচে তারা ঘুমাত, তাদের ওপরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Questions, Four Passives",
          "bn": "চারটি প্রশ্ন, চারটি কর্মবাচ্য"
        },
        "p": [
          {
            "en": "Four things are named, one to a verse: the camels in 88:17, the sky in 88:18, the mountains in 88:19 and, last of all, the earth in 88:20 — each arriving in the same mould, kayfa, how, followed by a verb in the passive: khuliqat, created; rufi'at, raised; nusibat, set up; sutihat, spread out. Four times the question is put, and four times the doer of the action is left out of the clause.",
            "bn": "চারটি জিনিসের নাম নেওয়া হয়েছে, প্রতিটি আয়াতে একটি করে: 88:17 আয়াতে উট, 88:18 আয়াতে আকাশ, 88:19 আয়াতে পর্বতমালা এবং 88:20 আয়াতে যমীন। প্রতিটি আসে একই ছাঁচে — 'কাইফা', অর্থাৎ কীভাবে, তারপর একটি কর্মবাচ্য ক্রিয়া: 'খুলিকাত' — সৃষ্টি করা হয়েছে; 'রুফিআত' — উঁচু করা হয়েছে; 'নুসিবাত' — স্থাপন করা হয়েছে; 'সুতিহাত' — বিছিয়ে দেওয়া হয়েছে। চারবার প্রশ্নটি রাখা হয়, আর চারবারই কাজটি যিনি করেছেন তাঁকে বাক্যের বাইরে রাখা হয়।"
          },
          {
            "en": "That omission is the point. A passive verb states that something was done and declines to name who did it, so the listener has to supply the answer himself. And the question is kayfa, how, rather than what: the verses do not ask about the camel but about its making. The order also traces a single turn of the head — down at the mount beside you, up at the sky, across at the mountains, and down again at the ground under your feet.",
            "bn": "এই বাদ দেওয়াটাই মূল কথা। কর্মবাচ্য ক্রিয়া বলে যে কাজটি করা হয়েছে, কিন্তু কে করেছে তা বলতে অস্বীকার করে; ফলে উত্তরটি শ্রোতাকেই জোগাতে হয়। আর প্রশ্নটি 'কী' নয়, 'কাইফা' — কীভাবে: আয়াতগুলো উট সম্পর্কে জিজ্ঞেস করে না, জিজ্ঞেস করে তার নির্মাণ সম্পর্কে। ক্রমটিও মাথার একটি পূর্ণ ঘূর্ণন এঁকে দেয় — পাশে দাঁড়ানো বাহনের দিকে নিচে, তারপর আকাশের দিকে ওপরে, তারপর পর্বতমালার দিকে আড়াআড়ি, আর তারপর আবার পায়ের নিচের মাটির দিকে নিচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Camel Comes First",
          "bn": "উট কেন প্রথমে"
        },
        "p": [
          {
            "en": "The commentators explain the first item by the audience. The camel was the Arab's transport, his wealth, his milk, his wool and his measure of a man's standing; there was nothing he saw more often or thought about less. So the sequence begins with the most familiar object in the listener's world rather than the rarest. No journey and no expertise is required to begin. The evidence was tethered outside the tent.",
            "bn": "মুফাসসিরগণ প্রথম বস্তুটির ব্যাখ্যা দেন শ্রোতাদের দিয়ে। উট ছিল আরবের বাহন, তার সম্পদ, তার দুধ, তার পশম এবং মানুষের মর্যাদা মাপার মানদণ্ড; এর চেয়ে বেশি সে আর কিছু দেখত না, আবার এর চেয়ে কম সে আর কিছু নিয়ে ভাবতও না। তাই ক্রমটি শুরু হয় শ্রোতার জগতের বিরলতম বস্তু দিয়ে নয়, বরং সবচেয়ে পরিচিত বস্তু দিয়ে। শুরু করতে কোনো সফরও লাগে না, কোনো বিশেষজ্ঞতাও নয়। প্রমাণটি তাঁবুর বাইরেই বাঁধা ছিল।"
          },
          {
            "en": "The other three keep that character. The sky raised, the mountains set firm, the earth spread out: each is described exactly as it presents itself to a person standing in the open, which is what looking means. The verses do not hand out information the listener could not have gathered. They correct the way he was already gathering it, and the whole demand of the passage is that a familiar thing be seen once as made.",
            "bn": "বাকি তিনটিও একই চরিত্র ধরে রাখে। উঁচু করা আকাশ, দৃঢ়ভাবে স্থাপিত পর্বতমালা, বিছিয়ে দেওয়া যমীন: প্রতিটির বর্ণনা ঠিক সেভাবেই, যেভাবে খোলা জায়গায় দাঁড়ানো একজন মানুষের কাছে তা ধরা দেয় — আর তাকানো বলতে সেটিই বোঝায়। আয়াতগুলো এমন তথ্য দেয় না যা শ্রোতা নিজে সংগ্রহ করতে পারত না। বরং সে যেভাবে ইতিমধ্যেই সংগ্রহ করছিল সেই ধরনটিকে শুধরে দেয়; আর গোটা অংশের দাবি একটিই — পরিচিত একটি জিনিসকে অন্তত একবার নির্মিত হিসেবে দেখা হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Looking Is For",
          "bn": "এই দেখা কীসের জন্য"
        },
        "p": [
          {
            "en": "The passage that follows sets the limits of the whole enterprise. 88:21 tells the Prophet ﷺ to remind, and says he is only a reminder; 88:22 adds that he is not a controller over them. Nobody can do the looking on another person's behalf. And the surah then closes the circle it opened with: 88:25 says that to Us is their return, and 88:26 that upon Us is their reckoning — which is the Overwhelming of the first verse, argued for by four ordinary sights.",
            "bn": "এর পরের অংশটি গোটা কাজের সীমা নির্ধারণ করে দেয়। 88:21 আয়াত নবী ﷺ-কে উপদেশ দিতে বলে, আর বলে যে তিনি কেবল একজন উপদেশদাতা; 88:22 আয়াত যোগ করে যে তিনি তাদের ওপর জবরদস্তিকারী নন। কেউ অন্যের হয়ে তাকিয়ে দিতে পারে না। এরপর সূরাটি যে বৃত্ত দিয়ে শুরু হয়েছিল তা বন্ধ করে: 88:25 আয়াত বলে তাদের প্রত্যাবর্তন আমারই কাছে, আর 88:26 আয়াত বলে তাদের হিসাব নেওয়া আমারই কাজ — এটিই প্রথম আয়াতের সেই আচ্ছন্নকারী দিন, যার পক্ষে যুক্তি দিল চারটি সাধারণ দৃশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning It Into a Habit",
          "bn": "একে অভ্যাসে পরিণত করা"
        },
        "p": [
          {
            "en": "Muslim narrates from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ used to recite Surah al-A'la and Surah al-Ghashiyah in the two Eid prayers and in the Friday prayer. That means the largest regular gatherings of the community heard this fourfold command to look, over and over, in the middle of a normal week. It was never treated as an exercise for specialists.",
            "bn": "মুসলিম নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ দুই ঈদের নামাযে এবং জুমু'আর নামাযে সূরা আল-আ'লা ও সূরা আল-গাশিয়াহ পড়তেন। অর্থাৎ সম্প্রদায়ের সবচেয়ে বড় নিয়মিত সমাবেশগুলো একটি সাধারণ সপ্তাহের মাঝখানে বারবার শুনত তাকাবার এই চারমুখী নির্দেশ। একে কখনোই বিশেষজ্ঞদের অনুশীলন হিসেবে দেখা হয়নি।"
          },
          {
            "en": "The same practice is described elsewhere. 3:190-191 gives it to those of understanding, who remember Allah standing, sitting and lying down and reflect on the creation of the heavens and the earth; 2:164 lists the materials again for a people who use reason. Al-Ghashiyah keeps the version anyone can start today, because it asks for only one thing at a time: pick a single ordinary sight, stay with it past the moment of recognition, and let the question be how it was made.",
            "bn": "একই অনুশীলনের বর্ণনা অন্যত্রও আছে। 3:190-191 আয়াত এটি দেয় জ্ঞানবানদের, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে এবং আসমান ও যমীনের সৃষ্টি নিয়ে চিন্তা করে; 2:164 আয়াত বিবেকবান সম্প্রদায়ের জন্য সেই উপকরণগুলোই আবার সাজিয়ে দেয়। আল-গাশিয়াহ ধরে রাখে সেই সংস্করণটি, যা আজই যে কেউ শুরু করতে পারে, কারণ এটি একবারে একটির বেশি চায় না: একটি সাধারণ দৃশ্য বেছে নিন, চেনা হয়ে যাওয়ার মুহূর্তটির পরেও তার সঙ্গে থাকুন, আর প্রশ্নটি হোক — এটি কীভাবে বানানো হলো।"
          }
        ]
      }
    ]
  }
});
