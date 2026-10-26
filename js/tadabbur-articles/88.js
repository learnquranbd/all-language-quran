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
          "bn": "খবর দিয়ে শুরু এক সূরা"
        },
        "p": [
          {
            "en": "Hal ataka hadithu al-ghashiya: has the news of the Overwhelming reached you? The verse has 4 Arabic words. Hal opens a question; ataka is has it come to you; hadithu is the news or account of; and al-ghashiya is that which covers over. The verse opens Surat al-Ghashiya, and the surah takes its name from this last word. Al-Qurtubi records that the surah is Makkan by the statement of all, with 26 verses; Ibn Kathir and al-Baghawi also call it Makkan.",
            "bn": "হাল আতাকা হাদিসুল গাশিয়াহ: আচ্ছন্নকারীর খবর কি আপনার কাছে পৌঁছেছে? আরবিতে আয়াতটি মাত্র ৪ শব্দের। হাল দিয়ে প্রশ্ন শুরু হয়। আতাকা মানে তোমার কাছে এসেছে কি। হাদিসু মানে খবর বা বৃত্তান্ত। আর আল-গাশিয়াহ মানে যা ঢেকে ফেলে। এ আয়াত দিয়েই সূরা গাশিয়াহর শুরু, আর সূরার নামও এসেছে এই শেষ শব্দটি থেকে। কুরতুবী লিখেছেন, সবার মতেই সূরাটি মাক্কী, আর এর আয়াত ২৬টি। ইবন কাসীর ও বাগাভীও সূরাটির শুরুতে একে মাক্কী বলেছেন।"
          },
          {
            "en": "The verse names something and then holds it back. Nothing inside these words says what the Overwhelming is; the listener is given a title and a question, and waits. The verse that follows, 88:2, begins to describe faces on that Day, and it has its own entry. This article stays with this verse: what the commentators consulted for this verse say about the question, about the news and about the name al-ghashiya, and why the surah was heard so often in the Prophet's prayers ﷺ.",
            "bn": "আয়াতটি একটা নাম বলে, তারপর থেমে যায়। আচ্ছন্নকারী আসলে কী, এই শব্দগুলোর ভেতরে তার কোনো বিবরণ নেই। শ্রোতার হাতে থাকে শুধু একটা নাম আর একটা প্রশ্ন, বাকিটার জন্য তাকে অপেক্ষা করতে হয়। পরের আয়াত ৮৮:২ সেদিনের কিছু মুখের বর্ণনা শুরু করে, তার আলোচনা আলাদা আছে। এ লেখা এ আয়াতেই থাকবে। দেখা হবে, এ আয়াতের জন্য খুঁজে আনা তাফসীরগুলো প্রশ্নটি, খবর শব্দটি আর আল-গাশিয়াহ নামটি নিয়ে কী বলে। আর দেখা হবে, নবী ﷺ-এর সালাতে সূরাটি কেন এত বেশি শোনা যেত।"
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
            "en": "The commentators do not hear the opening hal in a single way. Al-Qurtubi reports from Qutrub that hal here carries the meaning of qad, the particle that marks a thing as having truly happened, and compares hal ata 'ala al-insan in 76:1. On that reading he paraphrases: qad ja'aka ya Muhammad, the news of the Overwhelming has come to you, O Muhammad. Al-Baghawi's gloss, the shortest of the texts consulted here, takes the same line: qad ataka hadithu al-qiyama, the news of the Resurrection has come to you.",
            "bn": "শুরুর হাল শব্দটিকে তাফসীরকারেরা একভাবে শোনেননি। কুরতুবী কুতরুব থেকে বর্ণনা করেন, এখানে হাল এসেছে কাদ অর্থে। কাদ সেই শব্দ, যা বোঝায় ঘটনাটা সত্যিই ঘটে গেছে। তুলনা হিসেবে তিনি ৭৬:১ আয়াতের হাল আতা আলাল ইনসান উল্লেখ করেন। এ পাঠ ধরে তিনি অর্থ করেন: কাদ জাআকা ইয়া মুহাম্মাদ, হে মুহাম্মাদ, আচ্ছন্নকারীর খবর তোমার কাছে এসে গেছে। দেখা তাফসীরগুলোর মধ্যে বাগাভীর ব্যাখ্যা সবচেয়ে ছোট, তিনিও একই পথে যান: কাদ আতাকা হাদিসুল কিয়ামাহ, কিয়ামতের খবর তোমার কাছে এসেছে।"
          },
          {
            "en": "Others keep the form of a question. The Muyassar writes: has there come to you, ayyuha ar-rasul, O Messenger, the news of the Resurrection, and leaves it a question. At-Tabari keeps the words as Allah's address to His Prophet ﷺ, hal ataka ya Muhammad, and moves straight on to what the news is. The same opening, with al-junud, the hosts, in place of al-ghashiya, stands at 85:17, and that entry sets out how the commentators heard the question there.",
            "bn": "অন্যরা প্রশ্নের রূপটাই রেখে দেন। মুয়াসসার লেখে: আইয়ুহার রাসূল, হে রাসূল, কিয়ামতের খবর কি তোমার কাছে এসেছে? প্রশ্নটাকে প্রশ্ন হিসেবেই সেখানে রাখা হয়েছে। তাবারী শব্দগুলোকে নবী ﷺ-এর প্রতি আল্লাহর সম্বোধন হিসেবে পড়েন, হাল আতাকা ইয়া মুহাম্মাদ, তারপর সোজা চলে যান খবরটা কী, সেই আলোচনায়। একই শুরু ৮৫:১৭ আয়াতেও আছে, সেখানে আল-গাশিয়াহর জায়গায় আল-জুনূদ, অর্থাৎ বাহিনী। সেখানে তাফসীরকারেরা প্রশ্নটা কীভাবে শুনেছেন, তা ওই আয়াতের আলোচনায় পাওয়া যাবে।"
          },
          {
            "en": "Al-Qurtubi records two further readings. Under 'it is said', hal ataka means: this was not part of your knowledge, nor of your people's. Ibn Abbas, he reports, said it had not come to him before in the detail given here. And al-Kalbi held that the words came out as a question to the Messenger ﷺ with the sense: if the news of the Overwhelming had not come to you, it has now come. The texts consulted here thus give an affirmation, a question, and a question that answers itself. All are kept, and none is chosen here.",
            "bn": "কুরতুবী আরও দুটি পাঠ উল্লেখ করেন। প্রথমটি তিনি আনেন 'বলা হয়' দিয়ে: হাল আতাকার অর্থ, এ বিষয় তোমার জানা ছিল না, তোমার কওমেরও না। তিনি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এখানে যত বিস্তারিতভাবে এসেছে, খবরটা আগে সেভাবে তাঁর কাছে আসেনি। আর কালবীর মত হলো, কথাটা রাসূল ﷺ-এর প্রতি প্রশ্নের আকারে এসেছে, অর্থ এই: আচ্ছন্নকারীর খবর যদি তোমার কাছে না এসে থাকে, তবে এখন এসে গেল। দেখা তাফসীরগুলোতে তাহলে তিনটি রূপ মেলে: নিশ্চিত ঘোষণা, প্রশ্ন, আর এমন প্রশ্ন যা নিজেই নিজের উত্তর। তিনটিই এখানে রাখা হলো, কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Hadith as a Report",
          "bn": "হাদিস মানে এখানে খবর"
        },
        "p": [
          {
            "en": "The third word is hadith. A reader who knows it mainly as the name for reports of the Prophet ﷺ should hear it here in the plain sense at-Tabari gives: hadithu al-ghashiya, ya'ni qissatuha wa khabaruha, that is, its story and its report. The Muyassar puts khabar, report, in its place in a plain paraphrase. Al-Baghawi keeps the word hadith as it stands and adds only what the news is about, the Resurrection. The question, then, is whether an account has reached the one addressed.",
            "bn": "তৃতীয় শব্দ হাদিস। নবী ﷺ-এর বাণীর বর্ণনা হিসেবেই শব্দটা আমাদের বেশি চেনা। কিন্তু এখানে তাবারী এর সাধারণ অর্থটা দেন: হাদিসুল গাশিয়াহ, ইয়া'নী কিসসাতুহা ওয়া খাবারুহা, অর্থাৎ তার কাহিনি ও তার খবর। মুয়াসসার সহজ ভাষায় অর্থ করতে গিয়ে শব্দটির জায়গায় খাবার, মানে খবর, বসিয়েছে। বাগাভী হাদিস শব্দটি যেমন আছে তেমনই রাখেন, শুধু জুড়ে দেন খবরটা কিসের, কিয়ামতের। তাহলে প্রশ্নটা হলো: যাকে সম্বোধন করা হচ্ছে, ঘটনার বিবরণ কি তার কাছে পৌঁছেছে?"
          },
          {
            "en": "A report is about something the hearer has not seen. It is believed or doubted on the strength of whoever brings it, and this one comes from Allah to His Messenger ﷺ. As-Sa'di does not stop on the single word. He reads the verse as the opening of a description: Allah mentions the states of the Day of Resurrection and its overwhelming terrors, how it covers all creatures with its hardships, how they are repaid for their deeds, and how they are separated into two groups, a group in the Garden and a group in the Blaze.",
            "bn": "খবর মানে এমন কিছুর বিবরণ, যা শ্রোতা নিজের চোখে দেখেনি। খবরটা বিশ্বাস করা হবে, না সন্দেহ, তা নির্ভর করে খবরটা কে আনল তার উপর। আর এ খবর এসেছে আল্লাহর কাছ থেকে, তাঁর রাসূল ﷺ-এর কাছে। সা'দী একটি শব্দ নিয়ে আটকে থাকেন না। তিনি আয়াতটিকে পড়েন এক বিবরণের শুরু হিসেবে: আল্লাহ এখানে কিয়ামতের দিনের অবস্থা আর তার প্রচণ্ড বিভীষিকার কথা বলছেন। সেদিনের কাঠিন্য সব সৃষ্টিকে ঢেকে ফেলবে, মানুষ নিজের আমলের প্রতিদান পাবে, আর সবাই ভাগ হয়ে যাবে দুই দলে: একদল জান্নাতে, একদল জ্বলন্ত আগুনে।"
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
            "en": "Al-ghashiya is the one that covers, comes down over, envelops. The commentators consulted here name two things it may be, and give several ways of putting each. The first, and the most widely held, is the Day of Resurrection. Ibn Kathir writes that al-ghashiya is one of the names of the Day of Resurrection, citing Ibn Abbas, Qatada and Ibn Zayd, because it covers the people and takes them all in: taghsha an-nas wa ta'ummuhum. Al-Qurtubi says this is the view of most of the commentators.",
            "bn": "আল-গাশিয়াহ মানে যা ঢেকে দেয়, উপর থেকে নেমে এসে ঘিরে ফেলে। দেখা তাফসীরগুলো এর দুটি অর্থ বলে, আর প্রতিটি কয়েকভাবে প্রকাশ করে। প্রথমটি কিয়ামতের দিন, আর এ মতই সবচেয়ে বেশি প্রচলিত। ইবন কাসীর লেখেন, আল-গাশিয়াহ কিয়ামতের দিনের নামগুলোর একটি; এ কথা তিনি আনেন ইবন আব্বাস (রাঃ), কাতাদা ও ইবন যায়দের সূত্রে। নামটির কারণ, সেদিন মানুষকে ঢেকে ফেলবে, সবাইকে একসঙ্গে ঘিরে নেবে: তাগশান নাসা ওয়া তাউম্মুহুম। কুরতুবী বলেন, অধিকাংশ তাফসীরকারের মত এটাই।"
          },
          {
            "en": "At-Tabari begins by saying the people of interpretation differed over the meaning of al-ghashiya. His first group holds that it is the Resurrection, which covers people with terrors. He gives Ibn Abbas: al-ghashiya is one of the names of the Day of Resurrection, which Allah made great and warned His servants of. He gives Qatada, briefly: al-ghashiya is the Hour, as-sa'a. And through a second chain to Ibn Abbas he gives the same single word: the Hour.",
            "bn": "তাবারী শুরুতেই বলেন, আল-গাশিয়াহর অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। তাঁর বর্ণনায় প্রথম দলের মত: এটা কিয়ামত, যা মানুষকে বিভীষিকা দিয়ে ঢেকে দেবে। তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: আল-গাশিয়াহ কিয়ামতের দিনের নামগুলোর একটি; আল্লাহ সে দিনকে মহান করে তুলে ধরেছেন আর তাঁর বান্দাদের সে দিন সম্পর্কে সাবধান করেছেন। কাতাদার কথাও আনেন, সংক্ষেপে: আল-গাশিয়াহ হলো আস-সাআহ, অর্থাৎ সেই মহাক্ষণ। আর ইবন আব্বাস (রাঃ) থেকে আরেকটি সনদেও তিনি একই এক শব্দের উত্তর আনেন: সেই মহাক্ষণ।"
          },
          {
            "en": "The shorter glosses agree on the Day and differ only on what it covers. Al-Qurtubi has the Resurrection covering all creatures with its terrors and its alarms, bi-ahwaliha wa afza'iha. Al-Baghawi has it covering everything with terrors. The Muyassar has it covering the people with its terrors. People, creatures, everything: the object widens from text to text, but each describes the same Day arriving over all who meet it.",
            "bn": "ছোট ব্যাখ্যাগুলো দিনটির ব্যাপারে একমত, পার্থক্য শুধু সে কাকে ঢেকে ফেলে তাতে। কুরতুবীর ভাষায়, কিয়ামত সব সৃষ্টিকে ঢেকে ফেলবে তার বিভীষিকা আর আতঙ্ক দিয়ে: বি-আহওয়ালিহা ওয়া আফযাইহা। বাগাভী বলেন, সে বিভীষিকা দিয়ে সবকিছু ঢেকে ফেলবে। মুয়াসসার বলে, সে মানুষকে ঢেকে ফেলবে তার বিভীষিকা দিয়ে। মানুষ, সৃষ্টিকুল, সবকিছু: এক তাফসীর থেকে আরেক তাফসীরে পরিধি বাড়তে থাকে। তবু সবাই একই দিনের কথা বলেন, যে দিন যাদের সামনে আসবে, তাদের সবাইকে ঘিরে ফেলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fire Over the Faces",
          "bn": "মুখের উপর ছেয়ে যাওয়া আগুন"
        },
        "p": [
          {
            "en": "The second reading makes al-ghashiya the Fire. At-Tabari, after his first group, writes that others said: rather, al-ghashiya is the Fire, which covers the faces of the disbelievers, and he cites Sa'id: ghashiyat an-nar, the covering of the Fire. Al-Qurtubi names Sa'id ibn Jubayr and Muhammad ibn Ka'b for this reading, says that Abu Salih narrated it from Ibn Abbas, and gives its proof from the Qur'an: wa taghsha wujuhahum an-nar, and the Fire will cover their faces, in 14:50.",
            "bn": "দ্বিতীয় পাঠে আল-গাশিয়াহ মানে আগুন। প্রথম দলের পর তাবারী লেখেন, অন্যরা বলেছেন: বরং আল-গাশিয়াহ হলো সেই আগুন, যা কাফিরদের মুখ ঢেকে ফেলবে। এর পক্ষে তিনি সাঈদের কথা আনেন: গাশিয়াতুন নার, আগুনের আবরণ। কুরতুবী এ মতের জন্য সাঈদ ইবন জুবাইর ও মুহাম্মাদ ইবন কা'বের নাম বলেন। তিনি জানান, আবু সালিহ এ কথা ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন। আর কুরআন থেকে এর দলিল দেন ১৪:৫০ আয়াত: ওয়া তাগশা উজূহাহুমুন নার, আর আগুন তাদের মুখ ঢেকে ফেলবে।"
          },
          {
            "en": "Ibn Abbas therefore stands behind both readings in the texts consulted here. At-Tabari has him on the Day of Resurrection and on the Hour; al-Qurtubi's report through Abu Salih has him on the Fire. At-Tabari sets out the two readings as a difference among the people of interpretation, and al-Qurtubi records both. The article does not weigh the chains against each other. It reports each as the commentator gives it, with his name attached.",
            "bn": "দেখা তাফসীরগুলোতে তাই দুই পাঠের পেছনেই ইবন আব্বাস (রাঃ)-এর নাম আছে। তাবারীর বর্ণনায় তিনি কিয়ামতের দিন আর সেই মহাক্ষণের কথা বলেছেন। কুরতুবীর আনা আবু সালিহের বর্ণনায় তিনি বলেছেন আগুনের কথা। তাবারী দুটি পাঠকে তাফসীরকারদের মতভেদ হিসেবে সাজিয়েছেন, আর কুরতুবী দুটিই উল্লেখ করেছেন। এ লেখা সনদগুলো মেপে কোনোটিকে অন্যটির উপরে রাখছে না। যে তাফসীরকার যেভাবে এনেছেন, তাঁর নামসহ সেভাবেই রাখা হলো।"
          },
          {
            "en": "Al-Qurtubi adds three more readings, each under 'it is said'. One: it covers creation. Another: what is meant is the second blowing, for the raising of the dead, because it covers all creatures. A third reverses the direction of the verb: al-ghashiya are the people of the Fire, who come down upon it, yaghshawnaha, and plunge into it. On that reading the covering is done to the Fire by those who enter it, rather than done by the Fire to them.",
            "bn": "কুরতুবী 'বলা হয়' দিয়ে আরও তিনটি পাঠ আনেন। একটি: এটা সৃষ্টিকে ঢেকে ফেলবে। আরেকটি: এখানে উদ্দেশ্য পুনরুত্থানের দ্বিতীয় ফুঁৎকার, কারণ তা সব সৃষ্টিকে ঢেকে ফেলবে। তৃতীয় পাঠে ঢেকে ফেলার দিকটাই উল্টে যায়। আল-গাশিয়াহ তখন জাহান্নামের অধিবাসীরা, যারা আগুনের উপর গিয়ে পড়বে, ইয়াগশাওনাহা, আর তাতে ঝাঁপিয়ে পড়বে। এ পাঠে আগুন কাউকে ঢাকছে না, বরং যারা তাতে ঢুকছে তারাই আগুনকে ছেয়ে ফেলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept as Wide as Revealed",
          "bn": "যতটা ব্যাপক নাজিল, ততটাই রাখা"
        },
        "p": [
          {
            "en": "At-Tabari closes the difference with a judgement of his own. The right thing to say, he writes, is that Allah said to His Prophet ﷺ hal ataka hadithu al-ghashiya and did not tell us whether He meant the covering of the Resurrection or the covering of the Fire. Both are a ghashiya. The one covers people with trial, terrors and distress; the other covers the disbelievers with scorching of the face, with flame and with molten brass. So, he concludes, no statement is sounder than to say as Allah said, and to keep the report as general as He kept it.",
            "bn": "মতভেদের শেষে তাবারী নিজের সিদ্ধান্ত জানান। তিনি লেখেন, সঠিক কথা হলো: আল্লাহ তাঁর নবী ﷺ-কে বলেছেন হাল আতাকা হাদিসুল গাশিয়াহ, কিন্তু আমাদের জানাননি তিনি কিয়ামতের আবরণ বুঝিয়েছেন, নাকি আগুনের আবরণ। দুটিই গাশিয়াহ। একটি মানুষকে ঢেকে ফেলে বিপদ, বিভীষিকা আর দুঃখকষ্ট দিয়ে। অন্যটি কাফিরদের ঢেকে ফেলে মুখ ঝলসানো তাপে, আগুনের শিখায় আর গলিত তামায়। তাই তাঁর সিদ্ধান্ত: আল্লাহ যেভাবে বলেছেন, সেভাবে বলার চেয়ে সঠিক কথা আর নেই। আল্লাহ খবরটা যতটা ব্যাপক রেখেছেন, ততটা ব্যাপকই রাখতে হবে।"
          },
          {
            "en": "That is at-Tabari's own position, and it is reported here as his. It is not a ruling over the others: al-Qurtubi gives the Resurrection as the view of most commentators, the Muyassar and al-Baghawi write only the Resurrection, and as-Sa'di reads the passage as the states of that Day. Each gloss stays with its name. What at-Tabari's sentence offers a reader is a discipline rather than a verdict: where the revealed word is left wide, he declines to make it narrower than it was given.",
            "bn": "এটা তাবারীর নিজস্ব অবস্থান, আর এখানে তাঁর নামেই তা উল্লেখ করা হলো। অন্যদের উপর এটা কোনো রায় নয়। কুরতুবী কিয়ামতকেই অধিকাংশের মত বলেছেন। মুয়াসসার আর বাগাভী শুধু কিয়ামতের কথাই লিখেছেন। সা'দী পুরো অংশটাকে সেই দিনের অবস্থার বর্ণনা হিসেবে পড়েছেন। প্রতিটি ব্যাখ্যা যার, তার নামেই থাকল। তাবারীর বাক্যটা পাঠককে কোনো রায় দেয় না, দেয় এক ধরনের সংযম। আল্লাহ যে শব্দ ব্যাপক রেখে নাজিল করেছেন, তাবারী তাকে তার চেয়ে সংকীর্ণ করতে রাজি নন।"
          }
        ]
      },
      {
        "h": {
          "en": "On Fridays and Both Eids",
          "bn": "জুমায় আর দুই ঈদে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with how it was recited. He recalls, as already mentioned, the report of an-Nu'man ibn Bashir (RA) that the Messenger of Allah ﷺ used to recite al-A'la and al-Ghashiya in the 'Id prayer and on Friday. He then gives Imam Malik's report that ad-Dahhak ibn Qays asked an-Nu'man what the Prophet ﷺ recited on Friday along with Surat al-Jumu'a, and that he answered: hal ataka hadithu al-ghashiya. He names Abu Dawud, an-Nasa'i, Muslim and Ibn Majah as recording it.",
            "bn": "ইবন কাসীর সূরাটির শুরুতেই বলেন, এটি কখন পড়া হতো। তিনি মনে করিয়ে দেন, আগেই নুমান ইবন বাশীর (রাঃ)-এর বর্ণনা এসেছে: রাসূলুল্লাহ ﷺ ঈদের সালাতে আর জুমার দিনে সূরা আ'লা ও সূরা গাশিয়াহ পড়তেন। তারপর তিনি ইমাম মালিকের বর্ণনা আনেন। দাহহাক ইবন কায়স নুমানকে জিজ্ঞেস করেছিলেন, জুমার দিনে সূরা জুমুআর সঙ্গে নবী ﷺ আর কী পড়তেন। তিনি উত্তর দিয়েছিলেন: হাল আতাকা হাদিসুল গাশিয়াহ। ইবন কাসীর জানান, আবু দাউদ, নাসাঈ, মুসলিম ও ইবন মাজাহ এটি বর্ণনা করেছেন।"
          },
          {
            "en": "Both reports stand in Sahih Muslim under the number 878, and Muslim placed them in his Sahih. In the English of 878a on the page: \"Nu'man b. Bashir reported that the Messenger of Allah (ﷺ) used to recite on two 'Ids and in Friday prayer: 'Glorify The name of Thy Lord, the Most High' (Surah lxxxvii.), and: 'Has there come to thee the news of the overwhelming event' (lxxxviii.). And when the 'Id and Jumu'a combined on a day he recited these two (surah) in both the prayers.\"",
            "bn": "দুটি বর্ণনাই সহীহ মুসলিমে ৮৭৮ নম্বরের অধীনে আছে, আর মুসলিম এগুলোকে তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন। পাতায় ৮৭৮a-এর ইংরেজির অর্থ এই: \"নুমান ইবন বাশীর বর্ণনা করেন, রাসূলুল্লাহ ﷺ দুই ঈদে আর জুমার সালাতে পড়তেন 'তোমার সুমহান রবের নামের পবিত্রতা ঘোষণা করো' (সূরা ৮৭) এবং 'আচ্ছন্নকারী ঘটনার খবর কি তোমার কাছে এসেছে' (সূরা ৮৮)। আর ঈদ ও জুমা একই দিনে পড়লে তিনি দুই সালাতেই এ দুটি সূরা পড়তেন।\""
          },
          {
            "en": "Under the same number, 878c on the page reads: \"Dahhak b. Qais wrote to Nu'man b. Bashir asking him what the Messenger of Allah (ﷺ) recited on Friday besides Surah Jumu'a He said that he recited: 'Has there reached...' (Surah lxxxviii, ).\" The surah, then, was not a rare recitation. It was heard by a gathered congregation week after week, and again on the two days of festival, so that the opening question was put to the worshippers again and again.",
            "bn": "একই নম্বরের অধীনে পাতায় ৮৭৮c-এর ইংরেজির অর্থ এই: \"দাহহাক ইবন কায়স নুমান ইবন বাশীরকে চিঠি লিখে জানতে চাইলেন, জুমার দিনে সূরা জুমুআর পাশাপাশি রাসূলুল্লাহ ﷺ কী পড়তেন। তিনি বললেন, তিনি পড়তেন: 'হাল আতাকা...' (সূরা ৮৮)।\" অর্থাৎ সূরাটি কালেভদ্রে পড়া কোনো সূরা ছিল না। জামাতে সমবেত মানুষ সপ্তাহের পর সপ্তাহ তা শুনত, আবার শুনত দুই ঈদের দিনে। ফলে শুরুর প্রশ্নটা মুসল্লিদের সামনে বারবার এসে দাঁড়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Has It Reached You?",
          "bn": "আপনার কাছে কি পৌঁছেছে?"
        },
        "p": [
          {
            "en": "None of the commentators consulted here gives an occasion of revelation for this verse. What they give instead is a question and a range of answers, and the reader can take it personally without choosing among them. Has the news reached me? Al-Qurtubi's report from Ibn Abbas, that the news had not come before in this detail, describes what the surah does: it supplies the detail. Whoever has recited the surah has received the report. Whether it has arrived, in the sense of changing anything, is the part the verse leaves to the one who hears it.",
            "bn": "দেখা তাফসীরগুলোর কোনোটিই এ আয়াত নাজিলের কোনো উপলক্ষ উল্লেখ করেনি। তার বদলে তারা দিয়েছে একটা প্রশ্ন আর তার কয়েক রকম উত্তর। কোনোটিকে বেছে না নিয়েও পাঠক প্রশ্নটাকে নিজের করে নিতে পারেন: খবরটা কি আমার কাছে পৌঁছেছে? কুরতুবী ইবন আব্বাস (রাঃ) থেকে আনেন, এই বিস্তারিত বিবরণে খবরটা আগে আসেনি। সূরাটি ঠিক সেই কাজটাই করে, বিবরণটা এনে দেয়। যিনি সূরাটি পড়েছেন, খবর তাঁর হাতে এসে গেছে। কিন্তু খবরটা সত্যিই পৌঁছাল কি না, মানে জীবনে কিছু বদলাল কি না, সে প্রশ্ন আয়াত শ্রোতার কাছেই রেখে দেয়।"
          },
          {
            "en": "Two cautions belong here. The verse names a Day that covers everyone, and the readings that mention the Fire over the faces of disbelievers speak only of what they name; they give no licence to assign any living person to either group. And the question is not a riddle to be solved before moving on. In the Prophet's practice ﷺ it came back on Fridays and on both Eids, and a reader can answer it each time in the sense al-Qurtubi and al-Baghawi read in it, with qad: it has come.",
            "bn": "এখানে দুটি সতর্কতা দরকার। আয়াতটি এমন এক দিনের কথা বলে, যা সবাইকে ঢেকে ফেলবে। যে পাঠগুলোতে কাফিরদের মুখের উপর আগুনের কথা আছে, সেগুলো আয়াতের বর্ণনাটুকুই তুলে ধরে। কোনো জীবিত মানুষকে এ দলে বা ও দলে ফেলার অনুমতি সেগুলো কাউকে দেয় না। আর প্রশ্নটা এমন কোনো ধাঁধা নয়, যার সমাধান করে সামনে এগিয়ে যেতে হবে। নবী ﷺ-এর নিয়মিত আমলে জুমায় আর দুই ঈদে প্রশ্নটা বারবার ফিরে আসত। কুরতুবী ও বাগাভী কাদ শব্দ ধরে আয়াতটির যে অর্থ করেছেন, পাঠক প্রতিবার সেই অর্থে উত্তর দিতে পারেন: এসে গেছে।"
          }
        ]
      }
    ]
  },
  "88:12": {
    "sections": [
      {
        "h": {
          "en": "Three Words in the Garden",
          "bn": "জান্নাতের ভেতরে তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Fiha 'aynun jariyah: in it is a flowing spring. The verse has three Arabic words, and its first word, fiha, in it, also stands inside the verse before it (88:11) and opens the verse after it (88:13). At-Tabari says what the pronoun points back to: in the lofty Garden there is a flowing spring. That Garden is the Garden named in 88:10, fi jannatin 'aliyah, a Garden set high, and the people in it are the faces of 88:8 and 88:9, glad on that Day and content with their striving.",
            "bn": "ফীহা আইনুন জারিয়াহ: সেখানে আছে বয়ে চলা ঝর্ণা। আরবিতে আয়াতটি মাত্র তিনটি শব্দের। প্রথম শব্দ ফীহা, মানে সেখানে। এই শব্দটি আগের আয়াতের (৮৮:১১) ভেতরেও আছে, পরের আয়াতও (৮৮:১৩) শুরু হয়েছে এ দিয়েই। 'সেখানে' বলতে কোথায়, তাবারী তা খুলে বলেন: উঁচু জান্নাতে আছে এক বয়ে চলা ঝর্ণা। এ সেই জান্নাত, ৮৮:১০ আয়াতে যার নাম এসেছে ফী জান্নাতিন আলিয়াহ, উঁচু জান্নাত। আর সেখানে যারা থাকবে, তারা ৮৮:৮ ও ৮৮:৯ আয়াতের সেই মুখগুলো, যারা সেদিন আনন্দে উজ্জ্বল, নিজেদের চেষ্টা-সাধনায় সন্তুষ্ট।"
          },
          {
            "en": "The Muyassar explains 88:9 to 88:16 as one passage, and its wording makes the sequence plain. The faces of the believers on the Day of Resurrection are in blessing; content in the Hereafter with their striving in the world through acts of obedience; in a Garden high in place and in rank, where not a single idle word is heard; and in it a spring whose waters gush. The list goes on in the verses that follow, and those belong to their own pages. This one stops at the water.",
            "bn": "মুয়াসসার ৮৮:৯ থেকে ৮৮:১৬ পর্যন্ত আয়াতগুলোকে এক টানে ব্যাখ্যা করে, আর তার ভাষায় ধারাটা পরিষ্কার হয়ে যায়। কিয়ামতের দিন মুমিনদের মুখ থাকবে নিয়ামতে ভরা। দুনিয়ায় আনুগত্যের কাজে যে চেষ্টা করেছে, আখিরাতে তা নিয়ে তারা সন্তুষ্ট। তারা থাকবে এমন জান্নাতে, যার অবস্থান উঁচু, মর্যাদাও উঁচু। সেখানে একটিও অনর্থক কথা কানে আসবে না। আর সেখানে আছে এক ঝর্ণা, যার পানি উছলে পড়ছে। তালিকা চলতে থাকে পরের আয়াতগুলোতে, সেগুলোর আলোচনা তাদের নিজেদের পাতায়। এ আয়াত থামে পানির কাছে এসে।"
          },
          {
            "en": "The shape of the verse is plain in the Arabic. Fiha comes first, then an indefinite noun, then an adjective that agrees with it: 'aynun jariyah. The verse after it, 88:13, has the same three-word shape, which is why the two are heard as items of a single list. This page keeps to the first item. The ear hears where before it hears what, and the commentators, as the next sections show, spend almost all of their few words on the what.",
            "bn": "আরবিতে আয়াতের গড়ন সহজেই চোখে পড়ে। প্রথমে ফীহা, তারপর একটি অনির্দিষ্ট বিশেষ্য, তারপর তার সঙ্গে মিল রেখে একটি বিশেষণ: আইনুন জারিয়াহ। পরের আয়াত ৮৮:১৩-এর গড়নও হুবহু একই, তিনটি শব্দের। তাই দুটিকে একই তালিকার অংশ বলে শোনায়। এ লেখা প্রথমটিতেই থাকবে। কান আগে শোনে কোথায়, তারপর শোনে কী। আর পরের অংশগুলোতে দেখা যাবে, তাফসীরকারেরা তাঁদের অল্প কথার প্রায় সবটুকুই খরচ করেছেন ওই 'কী'-এর পেছনে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Spring Standing for Many",
          "bn": "এক ঝর্ণায় বহু ঝর্ণা"
        },
        "p": [
          {
            "en": "'Ayn is a single noun in the singular: a spring. Ibn Kathir stops on its form. The word is indefinite in an affirmative statement, he says, and what is meant by it is not one spring alone; it is a genus. Its meaning, in his words, is that in it are flowing springs, 'uyun jariyat. The abridged English of his commentary carries the same point: the verse does not mean there is only one spring, and the word refers to springs collectively.",
            "bn": "আইন শব্দটি একবচন, মানে একটি ঝর্ণা। ইবন কাসীর শব্দের গড়নটা লক্ষ করেন। তিনি বলেন, ইতিবাচক বাক্যে শব্দটি এসেছে অনির্দিষ্ট রূপে, আর এর দ্বারা একটিমাত্র ঝর্ণা বোঝানো উদ্দেশ্য নয়। এটি জাতিবাচক। তাঁর ভাষায় অর্থ দাঁড়ায়: সেখানে আছে বহু বয়ে চলা ঝর্ণা, উয়ূন জারিয়াত। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: আয়াতের উদ্দেশ্য এ নয় যে ঝর্ণা মাত্র একটি, শব্দটি সব ঝর্ণাকে একসঙ্গে বোঝায়।"
          },
          {
            "en": "Al-Qurtubi reaches the same reading by another path. He notes that it has already been stated, in Surat al-Insan, that the Garden has springs, and so 'ayn here carries the sense of 'uyun, springs; he closes the remark with and Allah knows best. As-Sa'di uses the grammarian's term: this is an ism jins, a noun that names a kind, so the verse speaks of the flowing springs. Three commentators, three routes, and one result: the singular names the kind.",
            "bn": "কুরতুবী একই অর্থে পৌঁছান ভিন্ন পথে। তিনি মনে করিয়ে দেন, সূরা আল-ইনসানে আগেই এসেছে যে জান্নাতে বহু ঝর্ণা আছে। তাই এখানে আইন মানে উয়ূন, অর্থাৎ ঝর্ণাসমূহ। কথাটা তিনি শেষ করেন 'আল্লাহই ভালো জানেন' বলে। সা'দী ব্যবহার করেন ব্যাকরণের পরিভাষা: এটি ইসমে জিনস, এমন বিশেষ্য যা একটা জাতের নাম। কাজেই আয়াতটি বলছে বয়ে চলা ঝর্ণাগুলোর কথা। তিনজন তাফসীরকার, তিন রকম পথ, ফল একই: একবচন শব্দটি এখানে গোটা জাতের নাম।"
          },
          {
            "en": "At-Tabari and the Muyassar keep the singular as the verse has it, a flowing spring, without stopping on its number; neither argues for one spring against many. No commentary consulted for this verse names a particular spring of Paradise, or ties this word to any spring named elsewhere in the Qur'an. That silence is worth keeping. The page reports the reading the commentators give and does not add a name that none of them added.",
            "bn": "তাবারী ও মুয়াসসার আয়াতের মতো করেই একবচন রেখে দেন, বলেন এক বয়ে চলা ঝর্ণা। সংখ্যা নিয়ে তাঁরা থামেন না। একটি না বহু, এ নিয়ে কোনো পক্ষও নেন না। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, তার কোনোটিই জান্নাতের নির্দিষ্ট কোনো ঝর্ণার নাম বলে না। কুরআনের অন্য কোথাও নাম পাওয়া কোনো ঝর্ণার সঙ্গেও এ শব্দকে জুড়ে দেয় না। এই নীরবতা রক্ষা করার মতো। তাফসীরকারেরা যা বলেছেন, এ লেখা শুধু সেটুকুই জানায়। যে নাম তাঁদের কেউ যোগ করেননি, সে নাম এখানেও যোগ হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Running Without a Channel",
          "bn": "নালা ছাড়াই বয়ে চলা"
        },
        "p": [
          {
            "en": "Jariyah means running or flowing, and each commentator says how. Ibn Kathir glosses it with one word, sarihah, which the abridged English renders as flowing freely. At-Tabari adds where it runs: fi ghayri ukhdud, in no furrow, without a trench cut for it. An ukhdud is a channel dug into the ground, and his phrase says that this spring runs without one. The Muyassar describes its waters with the verb tatadaffaq, pouring and gushing forth.",
            "bn": "জারিয়াহ মানে বয়ে চলা, প্রবাহিত। কীভাবে বয়ে চলে, তা প্রত্যেক তাফসীরকার নিজের মতো বলেন। ইবন কাসীর একটিমাত্র শব্দে অর্থ দেন: সারিহাহ। সংক্ষিপ্ত ইংরেজি সংস্করণ এর অনুবাদ করেছে অবাধে বয়ে চলা। তাবারী যোগ করেন, কোথায় বয়: ফী গাইরি উখদূদ, কোনো খাদ ছাড়া। উখদূদ হলো মাটিতে খুঁড়ে বানানো নালা। তাবারীর কথার অর্থ, এ ঝর্ণা বয়ে চলে কোনো নালা ছাড়াই। মুয়াসসার এর পানির বর্ণনায় ব্যবহার করে তাতাদাফফাক ক্রিয়া, যার মানে উছলে উছলে বেরিয়ে আসা।"
          },
          {
            "en": "Al-Qurtubi gathers several of these strands into one sentence. The spring flows, he says, with water pouring forth, and with kinds of delicious drinks, on the face of the ground, without a furrow. He shares the words ghayr ukhdud, without a furrow, with at-Tabari, so two of the commentators agree that the flow is on the surface and needs no dug course. Among the texts consulted, al-Qurtubi alone adds that what flows includes drinks of many kinds and not water only.",
            "bn": "কুরতুবী এসব সুতো একটি বাক্যে গেঁথে ফেলেন। তিনি বলেন, ঝর্ণা বয়ে চলে উছলে পড়া পানি নিয়ে, সঙ্গে নানা রকম সুস্বাদু পানীয় নিয়ে, মাটির উপর দিয়ে, কোনো খাদ ছাড়া। গাইরি উখদূদ, খাদ ছাড়া, এ কথাটি তাঁর আর তাবারীর দুজনেরই। অর্থাৎ দুজন তাফসীরকার একমত যে প্রবাহটা মাটির উপরে, খুঁড়ে বানানো পথের দরকার তার নেই। যত লেখা দেখা হয়েছে, তার মধ্যে কেবল কুরতুবীই যোগ করেন যে বয়ে চলে শুধু পানি নয়, নানা জাতের পানীয়ও।"
          },
          {
            "en": "These are not rival readings. One names the freedom of the flow, one the absence of a channel, one the gushing, one the variety of what flows. Read side by side, they make jariyah fuller without making it say more than the commentators say. Where one of them adds a detail the others do not give, the detail is his, and it is reported here as his: attributed by name, and not chosen over the rest.",
            "bn": "এগুলো পরস্পরবিরোধী ব্যাখ্যা নয়। একজন বলেন প্রবাহের মুক্তির কথা, একজন নালা না থাকার কথা, একজন উছলে ওঠার কথা, আরেকজন যা বয়ে চলে তার বৈচিত্র্যের কথা। পাশাপাশি পড়লে জারিয়াহ শব্দটা ভরাট হয়ে ওঠে, অথচ তাফসীরকারেরা যা বলেছেন তার বাইরে যায় না। কেউ যদি এমন কিছু যোগ করেন যা অন্যরা বলেননি, সে কথা তাঁরই। এখানে তা তাঁর নামেই জানানো হয়েছে, অন্যদের কথার উপরে তাকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Springs Opened at Will",
          "bn": "ইচ্ছেমতো খুলে দেওয়া ঝর্ণা"
        },
        "p": [
          {
            "en": "As-Sa'di's short note turns from the water to the people. In it, he says, are the flowing springs which they cause to burst forth and which they direct however they wish and wherever they want. Yufajjirunaha: they make them gush. Yusarrifunaha: they turn them this way and that. The phrase gives the people of the Garden a part in the flowing, as those who open the springs and send them where they choose. It is his gloss; none of the other commentators consulted for this verse states it.",
            "bn": "সা'দীর ছোট্ট টীকা পানি থেকে চোখ ফেরায় মানুষের দিকে। তিনি বলেন, সেখানে আছে বয়ে চলা ঝর্ণাগুলো, যেগুলো তারা নিজেরাই ফুটিয়ে তোলে, আর যেমন খুশি, যেদিকে খুশি ঘুরিয়ে নেয়। ইউফাজ্জিরূনাহা: তারা সেগুলো উৎসারিত করে। ইউসাররিফূনাহা: তারা সেগুলো এদিক-ওদিক ঘুরিয়ে দেয়। এ কথায় জান্নাতবাসীরা প্রবাহের অংশীদার। তারাই ঝর্ণা খুলে দেয়, তারাই ঠিক করে পানি কোন দিকে যাবে। এ ব্যাখ্যা সা'দীর নিজের। এ আয়াতের জন্য দেখা অন্য কোনো তাফসীরে কথাটা নেই।"
          },
          {
            "en": "Set beside at-Tabari's in no furrow, the note makes a quiet pair. In this world a spring has to be found, a channel has to be cut, and water goes only where the ground lets it go. The commentators describe the spring of this verse in other terms: on the surface, free of a trench and, in as-Sa'di's words, directed at will. The page goes no further than their words. What that flowing is like belongs to the unseen, and the verse gives it three words.",
            "bn": "তাবারীর 'কোনো খাদ ছাড়া' কথাটির পাশে রাখলে সা'দীর টীকাটি তার সঙ্গে নিঃশব্দে জোড়া বাঁধে। এই দুনিয়ায় ঝর্ণা আগে খুঁজে পেতে হয়, তারপর নালা কাটতে হয়। মাটি যেদিকে যেতে দেয়, পানি কেবল সেদিকেই যায়। এ আয়াতের ঝর্ণাকে তাফসীরকারেরা বর্ণনা করেন অন্যভাবে: মাটির উপর দিয়ে বয়, খাদের দরকার নেই, আর সা'দীর ভাষায় ইচ্ছেমতো ঘোরানো যায়। তাঁদের কথার বাইরে এ লেখা যাবে না। সেই প্রবাহ দেখতে কেমন, তা গায়েবের বিষয়। আয়াত তার জন্য দিয়েছে তিনটি শব্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Springs, One Surah",
          "bn": "এক সূরায় দুই ঝর্ণা"
        },
        "p": [
          {
            "en": "The noun 'ayn has already appeared once in this surah. In 88:5 the faces of the other group are given drink min 'aynin aniyah, which the translation used in this app renders as from a boiling spring. The abridged English of Ibn Kathir opens its comment on 88:8 by saying that after mentioning the situation of the wretched, Allah turns to those who will be happy. The surah uses the same noun for both springs, and the word that follows it, aniyah in one verse and jariyah in the other, tells the two apart.",
            "bn": "আইন শব্দটি এ সূরায় আগেও একবার এসেছে। ৮৮:৫ আয়াতে অন্য দলের মুখগুলোকে পান করানো হবে মিন আইনিন আনিয়াহ থেকে। এই অ্যাপে ব্যবহৃত বাংলা অনুবাদে এর অর্থ টগবগে ফুটন্ত ঝর্ণা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮৮:৮ আয়াতের আলোচনা শুরু করে এ কথা দিয়ে: হতভাগাদের অবস্থা বলার পর আল্লাহ এবার সৌভাগ্যবানদের কথা বলছেন। দুই ঝর্ণার জন্য সূরাটি একই শব্দ ব্যবহার করেছে। পার্থক্য গড়ে দিয়েছে পরের শব্দটি: এক আয়াতে আনিয়াহ, অন্য আয়াতে জারিয়াহ।"
          },
          {
            "en": "Both verses speak only of what they name: two outcomes on the Day the surah calls al-ghashiya. Neither licenses assigning any living person or community to either spring. The people of the Garden are named by their state, faces glad and content with their striving, not by any label a reader could fasten on a neighbour, and the other group is likewise described, not named. The passage speaks to the one reading it, about his or her own striving, and that is where its weight is meant to fall.",
            "bn": "দুই আয়াতেই আছে কেবল বর্ণনা: যে দিনকে সূরাটি আল-গাশিয়াহ বলেছে, সেদিনের দুই পরিণতির ছবি। জীবিত কোনো মানুষ বা সম্প্রদায়কে এ দুই ঝর্ণার কোনো একটির সঙ্গে জুড়ে দেওয়ার অনুমতি কোনো আয়াতই দেয় না। জান্নাতবাসীদের পরিচয় এসেছে তাদের অবস্থা দিয়ে: আনন্দে উজ্জ্বল মুখ, নিজের চেষ্টায় সন্তুষ্ট। এমন কোনো তকমা দিয়ে নয়, যা পাঠক প্রতিবেশীর গায়ে লাগিয়ে দিতে পারেন। অন্য দলেরও শুধু বর্ণনা আছে, নাম নেই। আয়াতগুলো কথা বলে পাঠকের সঙ্গে, তাঁর নিজের চেষ্টা নিয়ে। ভারটা পড়ার কথা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Brief Notes, Deliberate Silence",
          "bn": "সংক্ষিপ্ত টীকা, সচেতন নীরবতা"
        },
        "p": [
          {
            "en": "On this verse the commentators are brief. Al-Baghawi's entry for it restates the verse and adds nothing; his neighbouring entries, on 88:11 and 88:13, were checked, and neither holds a note on 88:12. Ma'arif al-Qur'an groups 88:11 to 88:13, but its comment there is wholly on the absence of idle talk. At-Tabari and as-Sa'di give one sentence each, al-Qurtubi a few short ones. The fullest note, Ibn Kathir's, is a few lines on the singular noun and the flowing.",
            "bn": "এ আয়াতে তাফসীরকারেরা সংক্ষিপ্ত। বাগাভীর লেখায় এ আয়াতের জায়গায় শুধু আয়াতটিই আছে, বাড়তি কিছু নেই। পাশের দুই জায়গা, ৮৮:১১ ও ৮৮:১৩ আয়াতে তাঁর লেখাও দেখা হয়েছে, কোনোটিতে ৮৮:১২ নিয়ে কিছু নেই। মাআরিফুল কুরআন ৮৮:১১ থেকে ৮৮:১৩ একসঙ্গে ধরেছে, কিন্তু সেখানকার আলোচনা পুরোটাই অনর্থক কথা না থাকা নিয়ে। তাবারী আর সা'দী দেন একটি করে বাক্য, কুরতুবী কয়েকটি ছোট বাক্য। সবচেয়ে বিস্তারিত টীকা ইবন কাসীরের, সেটিও একবচন শব্দ আর প্রবাহ নিয়ে কয়েক লাইন মাত্র।"
          },
          {
            "en": "Ibn Kathir closes those lines with one saying attributed to the Prophet ﷺ, which he carries through the chain of Ibn Abi Hatim from Abu Hurayrah. He gives it no grading, and it was not confirmed on a hadith page for this article, so it is left aside and nothing here rests on it. No commentary consulted here attaches a graded hadith to this verse, and none gives an occasion of revelation for it. That is a correct outcome, not a gap waiting to be filled.",
            "bn": "ইবন কাসীর এই কয়েক লাইন শেষ করেন নবী ﷺ-এর নামে বর্ণিত একটি কথা দিয়ে। কথাটি তিনি এনেছেন ইবন আবী হাতিমের সনদে, আবু হুরায়রা (রাঃ) থেকে। তিনি এর কোনো মান উল্লেখ করেননি, আর এ লেখার জন্য কোনো হাদিসের পাতায় তা যাচাইও করা যায়নি। তাই একে পাশে সরিয়ে রাখা হলো, এখানকার কোনো কথা এর উপর দাঁড়িয়ে নেই। দেখা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে মান উল্লেখ করা কোনো হাদিস জুড়ে দেয়নি, নাজিলের কোনো প্রেক্ষাপটও কেউ বলেননি। এটা কোনো ফাঁক নয় যে ভরাট করতে হবে; এটাই সঠিক ফল।"
          },
          {
            "en": "The restraint matters because the subject is the unseen. A reader may want more: where the water comes from, what it tastes like, where it runs. The commentators, who had studied far more than most readers ever will, chose to say little here, and the page follows them. What is written is what the verse and the texts consulted here say. Anything beyond that would be description from imagination, and a promise of Allah is not the place to supply it.",
            "bn": "এই সংযম জরুরি, কারণ বিষয়টা গায়েবের। পাঠক আরও জানতে চাইতে পারেন: পানি আসে কোথা থেকে, স্বাদ কেমন, বয়ে যায় কোন দিকে। তাফসীরকারেরা আমাদের বেশিরভাগের চেয়ে অনেক বেশি পড়েছেন, তবু এখানে তাঁরা কম বলাই বেছে নিয়েছেন। এ লেখাও তাঁদের পথে চলে। এখানে যা লেখা, তা আয়াত আর দেখা তাফসীরের কথা। এর বাইরে যা কিছু, তা হবে কল্পনার বর্ণনা। আর আল্লাহর প্রতিশ্রুতিতে কল্পনা জুড়ে দেওয়ার জায়গা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Contentment Tied to Striving",
          "bn": "চেষ্টার সঙ্গে বাঁধা সন্তুষ্টি"
        },
        "p": [
          {
            "en": "The flowing spring is not given on its own. It belongs to people already described in 88:9, li-sa'yiha radiyah, content with their striving. The Muyassar spells out which striving: their striving in the world through acts of obedience, which leaves them content in the Hereafter. The abridged English of Ibn Kathir quotes Sufyan on the same verse: they will be pleased with their deeds. The spring is part of what that contentment finds, and the passage keeps the two in one breath.",
            "bn": "বয়ে চলা ঝর্ণার কথা আলাদা করে আসেনি। এটি তাদের জন্য, যাদের বর্ণনা আগেই এসেছে ৮৮:৯ আয়াতে: লিসা'ইহা রাদিয়াহ, নিজেদের চেষ্টা-সাধনায় সন্তুষ্ট। কোন চেষ্টা, মুয়াসসার তা খুলে বলে: দুনিয়ায় আনুগত্যের কাজে তাদের চেষ্টা, যার কারণে আখিরাতে তারা সন্তুষ্ট। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একই আয়াতে সুফিয়ানের কথা আনে: তারা নিজেদের আমলে খুশি থাকবে। ঝর্ণা সেই সন্তুষ্টিরই অংশ। আয়াতগুলো দুটি কথাকে একই নিঃশ্বাসে বলে যায়।"
          },
          {
            "en": "That link is where the verse turns towards the reader. Nobody reaches the spring by picturing it. What lies in a person's hands is the striving the passage names: the fast that leaves the mouth dry, the prayer kept when it was hard, the help given when it cost something. The passage does not set out a price for each blessing, and this page does not either. It only keeps the order the verses keep, with the striving first and the contentment after it.",
            "bn": "এই বাঁধনেই আয়াতটি পাঠকের দিকে ফেরে। ঝর্ণার ছবি কল্পনা করে কেউ সেখানে পৌঁছায় না। মানুষের হাতে আছে সেই চেষ্টা, যার কথা আয়াতগুলো বলে: যে রোজায় মুখ শুকিয়ে যায়, কষ্টের সময়েও যে নামাজ ছাড়া হয়নি, নিজের কিছু খুইয়েও যে সাহায্য করা হয়েছে। কোন নিয়ামতের বিনিময়ে কোন আমল, এমন কোনো দামের তালিকা আয়াতগুলো দেয় না, এ লেখাও দেবে না। এ লেখা শুধু আয়াতের ক্রমটা ধরে রাখে: আগে চেষ্টা, তারপর সন্তুষ্টি।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying Three Words Home",
          "bn": "তিনটি শব্দ সঙ্গে নিয়ে ফেরা"
        },
        "p": [
          {
            "en": "Most readers meet this verse with water close at hand. A tap runs, a bottle sits on the desk, and the glass is filled without a thought. The verse can sharpen the thanks owed for that ordinary water. A glass drunk with alhamdulillah can be one small act of the obedience the passage asks for, and a reminder that the water within reach is a gift from Allah, as is everything the verse promises in three words.",
            "bn": "বেশিরভাগ পাঠক এ আয়াত পড়েন হাতের কাছে পানি রেখে। কল খুললেই পানি পড়ে, টেবিলে বোতল রাখা থাকে, না ভেবেই গ্লাস ভরে নেওয়া হয়। এই সাধারণ পানির জন্য যে শোকর পাওনা, আয়াতটি তা আরও সজাগ করে দিতে পারে। আলহামদুলিল্লাহ বলে এক গ্লাস পানি পান করাও হতে পারে সেই আনুগত্যের একটা ছোট্ট আমল, যার কথা আয়াতগুলো বলে। সেই সঙ্গে মনে পড়ে, হাতের কাছের পানিটুকু আল্লাহর দান, ঠিক যেমন তিনটি শব্দে প্রতিশ্রুত সবকিছুই তাঁর দান।"
          },
          {
            "en": "Three practices follow from the page. Recite 88:8 to 88:12 slowly once, and pause on each fiha. When picturing the Garden, keep to what the verses say and leave the rest to Allah, who knows it. And choose one act of obedience this week that costs some effort, because that is the striving the passage ties to contentment. The spring is promised; the striving is the part placed in the reader's hands, today.",
            "bn": "এ লেখা থেকে তিনটি কাজ বেরিয়ে আসে। একবার ধীরে ধীরে ৮৮:৮ থেকে ৮৮:১২ পর্যন্ত তিলাওয়াত করুন, আর প্রতিটি ফীহা-তে একটু থামুন। জান্নাতের কথা ভাবার সময় আয়াত যতটুকু বলে ততটুকুতে থাকুন, বাকিটা আল্লাহর উপর ছেড়ে দিন, তিনিই জানেন। আর এ সপ্তাহে আনুগত্যের এমন একটা কাজ বেছে নিন, যাতে কিছুটা কষ্ট লাগে। কারণ আয়াতগুলো এই চেষ্টার সঙ্গেই সন্তুষ্টিকে বেঁধেছে। ঝর্ণার প্রতিশ্রুতি দেওয়া হয়ে গেছে। চেষ্টার ভার আজ পাঠকের হাতে।"
          }
        ]
      }
    ]
  },
  "88:17-20": {
    "sections": [
      {
        "h": {
          "en": "From News to Sight",
          "bn": "খবর থেকে চোখের দেখায়"
        },
        "p": [
          {
            "en": "Surah al-Ghashiyah opens in 88:1 with news: has the report of the Overwhelming reached you? Everything up to 88:16 is unseen, the Fire and then a Garden, where 88:12 sets a flowing spring and the list ends on carpets spread out. Then 88:17 turns to something any listener could check: a-fa-la yanzuruna ila-l-ibili kayfa khuliqat, do they not look at the camels, how they were created? The sky, the mountains and the earth follow, one to a verse, in the same mould.",
            "bn": "সূরা গাশিয়া শুরু হয় একটা খবর দিয়ে। ৮৮:১ জিজ্ঞেস করে: আচ্ছন্নকারী সেই ঘটনার খবর কি আপনার কাছে পৌঁছেছে? ৮৮:১৬ পর্যন্ত যা আসে, তার সবই অদেখা: আগুন, তারপর জান্নাত। সেখানে ৮৮:১২ রেখেছে প্রবহমান ঝরনা, আর তালিকা থামে বিছানো গালিচায়। এরপর ৮৮:১৭ ফেরে এমন কিছুর দিকে, যা যে কোনো শ্রোতা নিজেই যাচাই করতে পারে: আফালা ইয়ানযুরূনা ইলাল ইবিলি কাইফা খুলিকাত, তারা কি উটের দিকে তাকায় না, কীভাবে তাকে সৃষ্টি করা হয়েছে? তারপর একই ছাঁচে, এক আয়াতে একটি করে, আসে আকাশ, পাহাড় আর জমিন।"
          },
          {
            "en": "At-Tabari reads the verse as spoken to those who denied Allah's power over what this surah had just described, the punishment prepared for His enemies and the bliss prepared for His friends. Let them look at the camel, he paraphrases, how He created it, subjected it, and made it take up its load while kneeling and then rise with it. He who created that, he says, finds it no hard thing to create what He described in the Garden and the Fire.",
            "bn": "তাবারীর পাঠে আয়াতটি বলা হয়েছে তাদের উদ্দেশে, যারা অস্বীকার করত যে এই সূরা এইমাত্র যা বর্ণনা করল তার উপর আল্লাহর ক্ষমতা আছে: শত্রুদের জন্য তৈরি শাস্তি আর বন্ধুদের জন্য তৈরি নিয়ামত। তাবারীর ভাষ্যে কথাটা দাঁড়ায় এমন: তারা উটের দিকে তাকাক। তিনি কীভাবে তাকে সৃষ্টি করলেন, বশ মানালেন, বসা অবস্থায় বোঝা নিতে আর তা নিয়ে উঠে দাঁড়াতে শেখালেন। তাবারী বলেন, যিনি এটা সৃষ্টি করেছেন, জান্নাত ও জাহান্নামে যা বর্ণনা করেছেন তা সৃষ্টি করা তাঁর জন্য মোটেই কঠিন নয়।"
          },
          {
            "en": "At-Tabari then gives a report from Qatada: when Allah described what is in the Garden, the people of misguidance wondered at it, and Allah revealed this verse; the camel, Qatada adds, was part of the Arabs' living and of what they owned. It is a Successor's explanation, carried as the commentators carry it, and is not presented here as an established occasion of revelation.",
            "bn": "এরপর তাবারী কাতাদার একটি বর্ণনা আনেন। আল্লাহ যখন জান্নাতের বিবরণ দিলেন, পথভ্রষ্টরা তাতে অবাক হল, আর আল্লাহ এ আয়াত নাযিল করলেন। কাতাদা যোগ করেন, উট ছিল আরবদের জীবিকা আর সম্পদের অংশ। এটি একজন তাবেঈর ব্যাখ্যা। তাফসীরকারেরা যেভাবে এনেছেন সেভাবেই এখানে রাখা হল, প্রতিষ্ঠিত শানে নুযূল হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked of Those Who Denied",
          "bn": "প্রশ্নটা অস্বীকারকারীদের কাছে"
        },
        "p": [
          {
            "en": "The Muyassar names them plainly: the disbelievers who deny. As-Sa'di widens the circle, reading the verse as an urging both to those who did not believe the Messenger ﷺ and to other people, to reflect on Allah's creatures that point to His oneness. Ma'arif al-Qur'an makes the denial concrete: they rejected the Hereafter because a body decayed to bones could not, they thought, be put together and raised, and Allah turned their attention, for their guidance, to a few of His signs.",
            "bn": "মুয়াসসার সোজাসুজি নাম বলে: অস্বীকারকারী কাফিররা। সা'দী বৃত্তটা বড় করেন। তাঁর পাঠে আয়াতটি তাগিদ দেয় তাদেরকে, যারা রাসূল ﷺ-কে বিশ্বাস করেনি, আর তাদের বাইরের মানুষকেও, যেন তারা আল্লাহর সেই সৃষ্টিগুলো নিয়ে ভাবে যা তাঁর একত্বের দিকে ইশারা করে। মাআরিফুল কুরআন অস্বীকারটাকে স্পষ্ট করে দেয়। তারা আখিরাত মানত না, কারণ তাদের ধারণায় পচে হাড় হয়ে যাওয়া দেহ আবার জোড়া লাগিয়ে ওঠানো যায় না। তাদের হিদায়াতের জন্যই আল্লাহ তাদের দৃষ্টি ফেরালেন তাঁর কয়েকটি নিদর্শনের দিকে।"
          },
          {
            "en": "This is a description, and it should be read as one. The verses speak of people in the Prophet's time who heard of the Garden and the Fire and refused them, and the commentators name them by what they did. Nothing here licenses contempt for, or any action against, any living person or community. 88:22 itself says that even the Prophet ﷺ is not a controller over them. What the verses do with deniers is invite them to look.",
            "bn": "এটি একটি বর্ণনা, আর বর্ণনা হিসেবেই একে পড়তে হবে। আয়াতগুলো নবী ﷺ-এর যুগের সেই লোকদের কথা বলে, যারা জান্নাত ও জাহান্নামের কথা শুনে তা প্রত্যাখ্যান করেছিল। তাফসীরকারেরা তাদের পরিচয় দেন তাদের কাজ দিয়েই। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়কে তুচ্ছ করার, বা তাদের বিরুদ্ধে কিছু করার কোনো অনুমতি এখানে নেই। ৮৮:২২ নিজেই জানিয়ে দেয়, স্বয়ং নবী ﷺ-ও তাদের উপর জবরদস্তিকারী নন। অস্বীকারকারীদের প্রতি এ আয়াতগুলো যা করে, তা হল তাকিয়ে দেখার আমন্ত্রণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Camel Comes First",
          "bn": "উট কেন সবার আগে"
        },
        "p": [
          {
            "en": "Ibn Kathir calls the camel a wondrous creation with a strange build: extremely strong and hardy, yet it yields to a heavy load and lets a weak leader lead it; it is eaten, its hair is used and its milk is drunk. They were alerted by it, he says, because the camel was the commonest of the Arabs' beasts. Al-Qurtubi gives the same reason for its place: camels were plentiful among the Arabs, and they had not seen elephants.",
            "bn": "ইবন কাসীর উটকে বলেন বিস্ময়কর সৃষ্টি, যার গড়ন অদ্ভুত। শক্তি আর সহ্যক্ষমতায় সে চূড়ান্ত, তবু ভারী বোঝার নিচে নরম হয়ে যায়, দুর্বল চালকের হাতেও চলে। তার গোশত খাওয়া হয়, পশম কাজে লাগে, দুধ পান করা হয়। ইবন কাসীর বলেন, উট দিয়েই তাদের সজাগ করা হয়েছে, কারণ আরবদের পশুর মধ্যে উটই ছিল সবচেয়ে বেশি। উট কেন আগে, তার একই কারণ দেন কুরতুবী: আরবদের মধ্যে উট ছিল প্রচুর, আর হাতি তারা দেখেনি।"
          },
          {
            "en": "Al-Qurtubi then names the wonder. Allah alerted them to a great creature that He had made submissive to a small creature, who leads it, makes it kneel and makes it rise, and loads the heavy burden on it while it kneels, so that it rises under the weight; nothing else among the animals, he says, does that. A great creature subjected to a small creature, in his reading, points them to His oneness and the greatness of His power.",
            "bn": "এরপর কুরতুবী বিস্ময়টার নাম বলেন। আল্লাহ তাদের দৃষ্টি দিলেন এক বিশাল সৃষ্টির দিকে, যাকে তিনি বশ করে দিয়েছেন ছোট্ট এক সৃষ্টির হাতে। ছোটজন তাকে টেনে নেয়, বসায়, ওঠায়। বসা অবস্থায় তার পিঠে ভারী বোঝা চাপায়, আর সে সেই ভার নিয়ে উঠে দাঁড়ায়। কুরতুবী বলেন, আর কোনো প্রাণী এমনটা করে না। তাঁর পাঠে ছোটর হাতে বড়র এই বশ্যতা তাদের দেখিয়ে দেয় আল্লাহর একত্ব আর তাঁর ক্ষমতার বিশালতা।"
          },
          {
            "en": "Al-Baghawi lists what others said. Muqatil said they had never seen a beast greater than it, and only a rare few had seen an elephant; al-Kalbi said it rises with its load while kneeling. Al-Hasan, told that the elephant was the greater wonder, answered that the Arabs were far from the elephant, whose back is not ridden, whose flesh is not eaten and whose milk is not drawn, while the camel eats date-stones and fodder and gives milk.",
            "bn": "বাগাভী অন্যদের মতগুলো সাজিয়ে দেন। মুকাতিল বলেন, উটের চেয়ে বড় কোনো পশু তারা কখনো দেখেনি, আর হাতি দেখেছিল তাদের মধ্যে হাতে গোনা কয়েকজন। কালবী বলেন, উট বসা অবস্থায় বোঝা নিয়ে উঠে দাঁড়ায়। হাসানকে বলা হয়েছিল, হাতিই তো বড় বিস্ময়। তিনি জবাব দেন, হাতি আরবদের থেকে অনেক দূরের জিনিস। তার পিঠে চড়া যায় না, গোশত খাওয়া যায় না, দুধ দোহানো যায় না। আর উট খেজুরের আঁটি আর শুকনো ঘাস খেয়ে দুধ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ships of the Dry Land",
          "bn": "শুকনো ডাঙার জাহাজ"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds that when Allah willed camels to be the ships of the dry land, He made them patient under thirst, so that the gap between their waterings can reach the tenth day and beyond, and made them graze on whatever grows in the wilds and waterless tracts, which other beasts will not graze. He also cites al-Mawardi: a herd animal serves in four ways, for milk, riding, eating and carrying, and the camel combines all four.",
            "bn": "কুরতুবী যোগ করেন, আল্লাহ যখন চাইলেন উট হবে শুকনো ডাঙার জাহাজ, তখন তাকে পিপাসা সইবার ধৈর্য দিলেন। দুই বার পানি খাওয়ার মাঝের ফাঁক দশম দিন ছাড়িয়েও যেতে পারে। আর তাকে এমন সব কিছু চরে খেতে দিলেন যা মরুভূমি আর পানিহীন প্রান্তরে জন্মায়, অথচ অন্য পশু তা মুখে তোলে না। তিনি মাওয়ার্দীর কথাও আনেন: গৃহপালিত পশু কাজে লাগে চারটি উপায়ে, দুধ, সওয়ারি, গোশত আর বোঝা বহন। উট এই চারটিকেই একসাথে ধারণ করে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the four signs as suited to desert Arabs on the move. Of the camel it says that even a poor Bedouin can keep so large an animal, since let loose it finds its own food, with a long neck for high branches; that it kneels so riders can mount without a ladder, carries large loads, travels through the night, and is so obedient that a little child can lead it.",
            "bn": "মাআরিফুল কুরআনের পাঠে চারটি নিদর্শন বেছে নেওয়া হয়েছে মরুর পথচলা আরবদের অবস্থার সাথে মিলিয়ে। উট সম্পর্কে সেখানে বলা হয়েছে, এত বড় প্রাণী গরিব বেদুইনও পুষতে পারে, কারণ ছেড়ে দিলে সে নিজের খাবার নিজেই জোগাড় করে, আর লম্বা গলায় উঁচু ডাল পর্যন্ত নাগাল পায়। সে বসে পড়ে, ফলে সওয়ারির সিঁড়ি লাগে না। বড় বোঝা বয়, সারা রাত পথ চলে। আর এতই বাধ্য যে ছোট একটা শিশুও তাকে টেনে নিয়ে যেতে পারে।"
          },
          {
            "en": "Al-Qurtubi records al-Qushayri's view that the camel came first, that had something else come first it would have been just as sound, and that this is not a place to seek some particular wisdom. Another explanation, which al-Qurtubi gives from Qatada and Muqatil, ties the camel to 88:13: told of raised couches, they asked how they would climb them, and were shown a camel that kneels to be loaded and then rises, as those couches lower and rise.",
            "bn": "কুরতুবী কুশাইরীর মত উল্লেখ করেন: উট আগে এসেছে, অন্য কিছু আগে এলেও তা সমান সঠিক হত, আর এটা এমন জায়গা নয় যেখানে বিশেষ কোনো হিকমত খুঁজতে হবে। আরেকটি ব্যাখ্যা কুরতুবী আনেন কাতাদা ও মুকাতিলের সূত্রে, যা উটকে ৮৮:১৩-এর সাথে জুড়ে দেয়। উঁচু আসনের কথা শুনে তারা জিজ্ঞেস করেছিল, ওতে চড়ব কীভাবে? তখন তাদের দেখানো হল উট, যে বোঝা নিতে বসে পড়ে, তারপর উঠে দাঁড়ায়। সেই আসনগুলোও তেমনি নিচু হয়, তারপর আবার ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Camels, or Rain Clouds?",
          "bn": "উট, না কি বৃষ্টির মেঘ?"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a second reading of al-ibil itself, with its critics. Al-Mubarrad said it means great masses of cloud here. Ath-Tha'labi mentioned clouds as something said and added that he found no basis for it in the books of the imams. Al-Qurtubi answers that al-Asma'i reported it from Abu 'Amr: whoever reads the word light, al-ibil, means the camel, and whoever reads it doubled, al-ibill, means the clouds that carry water and rain.",
            "bn": "কুরতুবী আল-ইবিল শব্দটিরই আরেকটি পাঠ উল্লেখ করেন, সমালোচনাসহ। মুবাররাদ বলেছেন, এখানে এর অর্থ মেঘের বিশাল খণ্ড। সা'লাবী মেঘের কথাটা 'বলা হয়' হিসেবে এনে যোগ করেছেন, ইমামদের কিতাবে এর কোনো ভিত্তি তিনি পাননি। কুরতুবী জবাব দেন, আসমাঈ এটি আবূ আমরের সূত্রে বর্ণনা করেছেন: যে শব্দটি হালকা করে পড়ে, আল-ইবিল, সে উট বোঝায়। আর যে তাশদীদ দিয়ে পড়ে, আল-ইবিল্ল, সে বোঝায় পানি আর বৃষ্টি বয়ে আনা মেঘ।"
          },
          {
            "en": "Al-Mawardi, also in al-Qurtubi, sets the two views side by side. The first, which he calls the more apparent and better known, is the camels of the herds; the second is the clouds, meant for the signs of His power in them and their benefit to all creatures. The article reports both and leaves the weighing to the scholars. Al-Qurtubi adds that al-ibil has no singular from its own letters and is treated as feminine, and its plural is abal.",
            "bn": "কুরতুবীর তাফসীরেই মাওয়ার্দী দুটি মত পাশাপাশি রাখেন। প্রথমটি, যাকে তিনি বেশি স্পষ্ট ও বেশি প্রসিদ্ধ বলেন, তা হল পালের উট। দ্বিতীয়টি মেঘ, যার উদ্দেশ্য মেঘের ভেতরে আল্লাহর ক্ষমতার নিদর্শন আর সব সৃষ্টির জন্য তার উপকার। এই লেখা দুটি মতই তুলে ধরে, কোনটি ভারী, সে বিচার আলিমদের হাতেই ছেড়ে দেয়। কুরতুবী আরও জানান, আল-ইবিল শব্দের নিজস্ব অক্ষর থেকে কোনো একবচন নেই, শব্দটি স্ত্রীলিঙ্গ ধরা হয়, আর এর বহুবচন আবাল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sky Raised, Mountains Set",
          "bn": "উঁচু আকাশ, গাঁথা পাহাড়"
        },
        "p": [
          {
            "en": "For 88:18, Ibn Kathir explains rufi'at as how Allah raised it from the earth in this immense raising, and sets beside it 50:6: have they not looked at the sky above them, how We built it and adorned it, and it has no rifts? Al-Baghawi glosses it as raised from the earth without pillars, so that nothing reaches it; al-Qurtubi gives both glosses. At-Tabari asks them to see who raised it: He who told them what He has prepared for His friends and His enemies.",
            "bn": "৮৮:১৮-এর রুফিআত শব্দের ব্যাখ্যায় ইবন কাসীর বলেন, আল্লাহ কীভাবে একে জমিন থেকে এত বিশাল উচ্চতায় তুলেছেন। পাশে তিনি রাখেন ৫০:৬: তারা কি তাদের উপরের আকাশের দিকে তাকায় না, আমি কীভাবে তা বানিয়েছি, সাজিয়েছি, আর তাতে কোনো ফাটল নেই? বাগাভীর ব্যাখ্যায় আকাশ জমিন থেকে তোলা হয়েছে খুঁটি ছাড়া, ফলে কোনো কিছু তার নাগাল পায় না। কুরতুবীও দুটি ব্যাখ্যাই দেন। তাবারী বলেন, তারা দেখুক কে একে তুলেছেন: তিনিই, যিনি জানিয়েছেন বন্ধুদের ও শত্রুদের জন্য কী তৈরি রেখেছেন।"
          },
          {
            "en": "For 88:19, at-Tabari explains nusibat as set up standing, not toppling to spread flat on the earth, fixed and never leaving their place. Ibn Kathir says they were made firm and anchored so that the earth would not sway with its people, with benefits and minerals placed in them; al-Qurtubi cites 21:31 for the same. Qatada, in at-Tabari, adds a climber's picture: you climb a hard mountain most of the day and at its top find gushing springs and hanging fruit that no hand planted.",
            "bn": "৮৮:১৯-এর নুসিবাত শব্দের ব্যাখ্যায় তাবারী বলেন, পাহাড়কে দাঁড় করিয়ে রাখা হয়েছে। সে ধসে পড়ে জমিনে ছড়িয়ে যায় না, নিজের জায়গায় অটল থাকে, কখনো সরে না। ইবন কাসীর বলেন, পাহাড়কে মজবুত করে গেড়ে দেওয়া হয়েছে যেন জমিন তার বাসিন্দাদের নিয়ে দুলে না ওঠে, আর তার ভেতরে রাখা হয়েছে নানা উপকার ও খনিজ। কুরতুবী একই কথায় ২১:৩১ উদ্ধৃত করেন। তাবারীর তাফসীরে কাতাদা যোগ করেন এক আরোহীর ছবি: সারা দিন শক্ত পাহাড় বেয়ে উঠে চূড়ায় পৌঁছে আপনি পাবেন উপচে পড়া ঝরনা আর ঝুলে থাকা ফল, যা কোনো হাত লাগায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Earth Was Spread",
          "bn": "জমিন যেভাবে বিছানো হল"
        },
        "p": [
          {
            "en": "For 88:20 the glosses agree. At-Tabari says sutihat means spread out, noting that a mountain is called musattah when its top is level. Ibn Kathir says spread, extended and made smooth; the Muyassar, spread out and made level. As-Sa'di says stretched wide and made easy, so that creatures can settle on it, plough and plant it, build on it and travel its roads. Qatada, in at-Tabari, draws the point: is not He who created this able to create what He wills in the Garden?",
            "bn": "৮৮:২০-এর ব্যাখ্যায় সবাই একমত। তাবারী বলেন, সুতিহাত মানে বিছিয়ে দেওয়া হয়েছে। তিনি শব্দের ব্যবহারও দেখান: যে পাহাড়ের চূড়া সমতল, তাকে বলা হয় মুসাত্তাহ। ইবন কাসীর বলেন, বিছানো, প্রসারিত আর মসৃণ করা। মুয়াসসার বলে, বিছিয়ে সমান করে দেওয়া। সা'দী বলেন, জমিনকে বহু দূর পর্যন্ত মেলে দেওয়া হয়েছে আর সহজ করা হয়েছে, যেন সৃষ্টিজীব তার পিঠে থিতু হতে পারে, চাষ করতে ও গাছ লাগাতে পারে, ঘর বানাতে আর পথ চলতে পারে। তাবারীর তাফসীরে কাতাদা কথাটা টেনে আনেন: যিনি এটা সৃষ্টি করেছেন, তিনি কি জান্নাতে যা ইচ্ছা সৃষ্টি করতে সক্ষম নন?"
          },
          {
            "en": "As-Sa'di raises the question of shape in his own name. Its being spread out, he writes, does not conflict with its being a round sphere, which he says transmitted texts, reason, sense and observation all indicate; spreading conflicts with roundness only in a very small body, while one as vast as the earth is round and spread at once. That is as-Sa'di's discussion. The verse, and the other commentators here, speak of the earth only as spread out.",
            "bn": "আকৃতির প্রশ্নটা সা'দী তোলেন নিজের নামে। তিনি লেখেন, জমিন বিছানো হওয়ার সাথে গোলাকার হওয়ার কোনো বিরোধ নেই। তাঁর মতে বর্ণনা, যুক্তি, ইন্দ্রিয় আর পর্যবেক্ষণ সবই এর গোলাকার হওয়ার দিকে ইঙ্গিত করে। খুব ছোট কোনো বস্তুকে বিছালে তবেই তার গোলভাব আর থাকে না। জমিনের মতো বিশাল বস্তু একই সাথে গোলও, বিছানোও। এটি সা'দীর নিজস্ব আলোচনা। আয়াতটি আর এখানে আনা অন্য তাফসীরকারেরা জমিনের কথা বলেন কেবল বিছানো হিসেবেই।"
          },
          {
            "en": "Al-Qurtubi also records how the verbs were read. Anas (RA) reported praying behind Ali (RA), who read khalaqtu, rafa'tu, nasabtu, satahtu, in the first person, the pronoun referring to Allah and the object understood: I created it, and so on. Al-Qurtubi names Ibn as-Samayfa' and Abu al-'Aliya as reading likewise, and al-Hasan and others as reading suttihat with a doubled t, while the body of reciters read sutihat.",
            "bn": "ক্রিয়াগুলো কীভাবে পড়া হয়েছে, কুরতুবী তাও লিখে রাখেন। আনাস (রাঃ) বলেন, তিনি আলী (রাঃ)-এর পেছনে নামায পড়েছিলেন, আর আলী (রাঃ) পড়েছিলেন খালাকতু, রাফা'তু, নাসাবতু, সাতাহতু, উত্তম পুরুষে। সর্বনাম আল্লাহর দিকে ফেরে, কর্ম উহ্য: আমি তাকে সৃষ্টি করেছি, এভাবে বাকিগুলোও। কুরতুবী জানান, ইবনুস সামাইফা' ও আবুল আলিয়াও এভাবে পড়তেন। হাসান ও আরও কয়েকজন পড়েছেন সুত্তিহাত, ত্বা-তে তাশদীদ দিয়ে। আর কারীদের সাধারণ জামাআত পড়েছেন সুতিহাত।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Rider Sees",
          "bn": "সওয়ারির চোখে যা পড়ে"
        },
        "p": [
          {
            "en": "Ibn Kathir says the Bedouin is directed to reason from what he witnesses: the camel he rides, the sky over his head, the mountain facing him and the earth beneath him, all pointing to their Maker as the Lord, the Creator and Owner, the God besides whom none deserves worship. Al-Baghawi gives Ibn 'Abbas (RA), through 'Ata': could anyone but Me create the like of the camel, raise the like of the sky, set up the like of the mountains, or spread the like of the earth?",
            "bn": "ইবন কাসীর বলেন, বেদুইনকে বলা হচ্ছে নিজের চোখে যা দেখে তা থেকে যুক্তি টানতে: যে উটে সে চড়ে, মাথার উপরের আকাশ, সামনের পাহাড়, পায়ের নিচের জমিন। সবই দেখিয়ে দেয় এগুলোর স্রষ্টা রব, সৃষ্টিকর্তা ও মালিক, আর তিনিই সেই ইলাহ যিনি ছাড়া কেউ ইবাদতের যোগ্য নয়। বাগাভী আতার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: আমি ছাড়া কেউ কি উটের মতো সৃষ্টি করতে পারে, আকাশের মতো কিছু তুলতে পারে, পাহাড়ের মতো কিছু দাঁড় করাতে পারে, কিংবা জমিনের মতো কিছু বিছাতে পারে?"
          },
          {
            "en": "Ibn Kathir then attaches a hadith, saying these are the very things the bedouin Dimam ibn Tha'laba swore by, and that Muslim recorded it. In Sahih Muslim (12), Anas ibn Malik (RA) relates that they had been forbidden to ask the Prophet ﷺ about things, and were glad when a sensible man of the desert came to ask while they listened. Such a man came and said the Prophet's messenger had told them that Allah had sent him, and was told: \"He told the truth.\"",
            "bn": "এরপর ইবন কাসীর একটি হাদীস জুড়ে দেন। তিনি বলেন, বেদুইন দিমাম ইবন সা'লাবা ঠিক এই জিনিসগুলোরই কসম খেয়েছিলেন, আর মুসলিম হাদীসটি বর্ণনা করেছেন। সহীহ মুসলিমে (১২) আনাস ইবন মালিক (রাঃ) জানান, নবী ﷺ-কে নানা বিষয়ে প্রশ্ন করতে তাঁদের নিষেধ করা হয়েছিল। তাই মরুভূমির কোনো বুদ্ধিমান লোক এসে প্রশ্ন করলে আর তাঁরা বসে শুনলে তাঁদের ভালো লাগত। এমন একজন এসে বলল, আপনার দূত আমাদের জানিয়েছেন যে আল্লাহ আপনাকে পাঠিয়েছেন। নবী ﷺ বললেন: \"সে সত্য বলেছে।\""
          },
          {
            "en": "The exchange then runs, in the English rendering of Muslim: \"He said: Who created the heaven? He replied: Allah. He said: Who created the earth? He replied: Allah. He said: Who raised these mountains and who created in them whatever is created there? He replied: Allah. Upon this he remarked: By Him Who created the heaven and created the earth and raised mountains thereupon, has Allah sent you? He said: Yes.\" He asked in the same way about prayer, zakat, the Ramadan fast and Hajj. Muslim gives it no separate grading.",
            "bn": "এরপর কথোপকথনটা চলে এভাবে: \"সে বলল, আকাশ কে সৃষ্টি করেছেন? তিনি বললেন, আল্লাহ। সে বলল, জমিন কে সৃষ্টি করেছেন? তিনি বললেন, আল্লাহ। সে বলল, এই পাহাড়গুলো কে দাঁড় করিয়েছেন, আর এগুলোর মধ্যে যা কিছু রেখেছেন তা কে রেখেছেন? তিনি বললেন, আল্লাহ। তখন সে বলল, যিনি আকাশ সৃষ্টি করেছেন, জমিন সৃষ্টি করেছেন আর এই পাহাড়গুলো দাঁড় করিয়েছেন, তাঁর কসম, আল্লাহই কি আপনাকে পাঠিয়েছেন? তিনি বললেন, হ্যাঁ।\" এরপর সে একইভাবে নামায, যাকাত, রমযানের রোযা আর হজ সম্পর্কে জিজ্ঞেস করে। মুসলিম এর জন্য আলাদা কোনো মান উল্লেখ করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Only One Who Reminds",
          "bn": "কেবল একজন উপদেশদাতা"
        },
        "p": [
          {
            "en": "Then 88:21 and 88:22 turn to the Prophet ﷺ: so remind, you are only one who reminds; you are not a controller over them. Ibn Kathir paraphrases it as remind people with what you were sent with, and sets beside it 13:40: your duty is only to convey, and on Us is the reckoning. He reports Ibn 'Abbas (RA), Mujahid and others: you are not a dictator over them, meaning you cannot create faith in their hearts. The looking itself is left to each listener.",
            "bn": "এরপর ৮৮:২১ ও ৮৮:২২ ফেরে নবী ﷺ-এর দিকে: কাজেই উপদেশ দিন, আপনি তো কেবল একজন উপদেশদাতা; আপনি তাদের উপর জবরদস্তিকারী নন। ইবন কাসীরের ব্যাখ্যায় এর অর্থ, যা নিয়ে আপনাকে পাঠানো হয়েছে তা দিয়ে মানুষকে স্মরণ করিয়ে দিন। পাশে তিনি রাখেন ১৩:৪০: আপনার দায়িত্ব কেবল পৌঁছে দেওয়া, আর হিসাব নেওয়া আমার কাজ। তিনি ইবন আব্বাস (রাঃ), মুজাহিদ ও অন্যদের কথা আনেন: আপনি তাদের উপর স্বেচ্ছাচারী শাসক নন, অর্থাৎ তাদের অন্তরে ঈমান সৃষ্টি করা আপনার সাধ্যে নেই। তাকিয়ে দেখার কাজটা তাই প্রত্যেক শ্রোতার নিজের।"
          }
        ]
      }
    ]
  }
});
