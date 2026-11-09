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
  "88:4": {
    "sections": [
      {
        "h": {
          "en": "Three Words After the Weariness",
          "bn": "ক্লান্তির পরে তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Tasla naran hamiya: they will burn in a fire, intensely hot. The verse has three Arabic words. Tasla shares its root with sila', the burning of a fire, and al-Qurtubi glosses it: its burning and its heat strike them. Naran is a fire, left without the definite article. Hamiya is hot, heated through. The subject is the faces of 88:2, and at-Tabari paraphrases: these faces come down to a fire that has been heated, its heat grown intense. Al-Qurtubi on 88:2 and al-Baghawi on 88:3 both note that the faces stand for the people who own them.",
            "bn": "তাসলা নারান হামিয়া: তারা জ্বলবে আগুনে, প্রচণ্ড উত্তপ্ত আগুনে। আয়াতে আরবি শব্দ তিনটি। তাসলা এসেছে সেই ধাতু থেকে, যা থেকে এসেছে সিলা, মানে আগুনের দহন। কুরতুবী এর ব্যাখ্যা দেন এভাবে: আগুনের দহন আর তাপ তাদের গায়ে এসে লাগে। নারান মানে একটি আগুন, শব্দটিতে নির্দিষ্টবাচক আল নেই। হামিয়া মানে গরম, ভেতর পর্যন্ত তপ্ত। ক্রিয়ার কর্তা ৮৮:২ আয়াতের সেই মুখগুলো। তাবারীর ভাষায়: এই মুখগুলো গিয়ে নামবে এমন আগুনে, যাকে উত্তপ্ত করা হয়েছে আর যার তাপ তীব্র হয়ে উঠেছে। কুরতুবী ৮৮:২ আয়াতে এবং বাগাভী ৮৮:৩ আয়াতে মনে করিয়ে দেন, মুখ বলে এখানে বোঝানো হয়েছে মুখের মালিকদের।"
          },
          {
            "en": "The verse sits inside a short run. In 88:2 some faces are humbled on that Day; in 88:3 they are 'amilatun nasibah, labouring and weary; here they burn; in 88:5 they are given drink from a boiling spring, and 88:6 and 88:7 go on to their food. Then 88:8 turns to other faces, soft with bliss, which have their own entry. This article stays with 88:4 and with the three verses it cannot be read without: 88:2, 88:3 and 88:5.",
            "bn": "আয়াতটি ছোট একটা ধারার ভেতরে বসানো। ৮৮:২ আয়াতে সেদিন কিছু মুখ অবনত। ৮৮:৩ আয়াতে তারা আমিলাতুন নাসিবা, খেটে চলা আর ক্লান্ত। এখানে তারা জ্বলছে। ৮৮:৫ আয়াতে তাদের পান করানো হয় ফুটন্ত ঝরনা থেকে, আর ৮৮:৬ ও ৮৮:৭ আয়াতে আসে তাদের খাবারের কথা। এরপর ৮৮:৮ আয়াত ফেরে অন্য কিছু মুখের দিকে, যেগুলো সুখে কোমল। সেগুলোর আলোচনা আলাদা জায়গায়। এ লেখা থাকছে ৮৮:৪ আয়াতের সঙ্গে, আর সেই তিনটি আয়াতের সঙ্গে যেগুলো বাদ দিয়ে একে পড়া যায় না: ৮৮:২, ৮৮:৩ ও ৮৮:৫।"
          }
        ]
      },
      {
        "h": {
          "en": "Tasla or Tusla",
          "bn": "তাসলা, নাকি তুসলা"
        },
        "p": [
          {
            "en": "The first word is read in two ways, and the texts consulted name the readers differently. At-Tabari writes that the general body of the readers of Kufa read tasla, with a fatha on the ta', meaning that the faces burn. Abu 'Amr read tusla, with a damma, taking his lead from the verse that follows, tusqa min 'aynin aniya. At-Tabari then gives his judgement: these are two readings, both sound in meaning, and whichever of them the reciter reads, he is right.",
            "bn": "প্রথম শব্দটি দুইভাবে পড়া হয়, আর কারা কোনটা পড়েছেন, তা নিয়ে তাফসীরগুলোর বর্ণনায় নামের তফাত আছে। তাবারী লেখেন, কুফার কারীদের অধিকাংশ পড়েছেন তাসলা, তা অক্ষরে যবর দিয়ে। অর্থ: মুখগুলো জ্বলবে। আবু আমর পড়েছেন তুসলা, পেশ দিয়ে। পরের আয়াতের তুসকা মিন আইনিন আনিয়া শব্দটির দিকে তাকিয়েই তিনি এভাবে পড়েছেন। এরপর তাবারী নিজের রায় দেন: দুটোই কিরাআত, দুটোরই অর্থ সঠিক। কারী যেটাই পড়ুন, ঠিকই পড়লেন।"
          },
          {
            "en": "Al-Qurtubi names more readers: Abu 'Amr, Abu Bakr and Ya'qub read tusla with a damma, and the rest with a fatha. He adds that it was also read tussalla, with the lam doubled, names no reader for that, and refers back to his discussion in Surat al-Inshiqaq. Al-Baghawi gives the damma to the people of Basra and to Abu Bakr, again in view of tusqa, and the fatha to the others. Tasla is active in form: they burn. Tusla is passive, like tusqa beside it: the act is done to them.",
            "bn": "কুরতুবী আরও কয়েকজনের নাম দেন। আবু আমর, আবু বকর আর ইয়াকুব পড়েছেন তুসলা, পেশ দিয়ে, বাকিরা যবর দিয়ে। তিনি আরও জানান, তাশদীদসহ তুসাল্লা পাঠও আছে। এর কারীর নাম তিনি দেননি, শুধু সূরা ইনশিকাকে আগের আলোচনার দিকে ইঙ্গিত করেছেন। বাগাভীর বর্ণনায় পেশের পাঠ বসরার লোকদের আর আবু বকরের। এখানেও কারণ সেই তুসকা। বাকিরা পড়েছেন যবর দিয়ে। গঠনের দিক থেকে তাসলা কর্তৃবাচ্য: তারা জ্বলবে। তুসলা কর্মবাচ্য, পাশের তুসকার মতোই। কাজটা তাদের উপর ঘটানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Call a Fire Hot?",
          "bn": "আগুনকে গরম বলা কেন"
        },
        "p": [
          {
            "en": "The third word drew most of the comment. Ibn Kathir reports that Ibn Abbas, al-Hasan and Qatada said: hot, of intense heat. At-Tabari has a fire that has been heated, its heat grown fierce. Al-Baghawi gives from Ibn Abbas: it has been heated, and so it blazes against the enemies of Allah. Al-Qurtubi explains it as kindled and heated over a long stretch of time, and supports the word from ordinary speech: the day grew hot, the oven grew hot, and from al-Kisa'i, the heat of the sun grew fierce.",
            "bn": "সবচেয়ে বেশি আলোচনা হয়েছে তৃতীয় শব্দটি নিয়ে। ইবন কাসীর জানান, ইবন আব্বাস (রাঃ), হাসান আর কাতাদা বলেছেন: গরম, প্রচণ্ড তাপের। তাবারীর ব্যাখ্যায় এ আগুনকে উত্তপ্ত করা হয়েছে, তার তাপ ভীষণ হয়ে উঠেছে। বাগাভী ইবন আব্বাস (রাঃ) থেকে আনেন: একে তাতানো হয়েছে, তাই আল্লাহর শত্রুদের উপর তা দাউদাউ করে জ্বলছে। কুরতুবী বলেন, দীর্ঘ সময় ধরে একে জ্বালানো আর তাতানো হয়েছে। শব্দটির সমর্থনে তিনি আনেন রোজকার আরবি বুলি: দিন গরম হয়ে উঠল, চুলা তেতে উঠল। কিসাঈ থেকে আনেন: সূর্যের তাপ চড়ে গেল।"
          },
          {
            "en": "As-Sa'di adds one detail: its heat is intense, and it surrounds them from every side. The Muyassar writes of a fire fierce in its blaze that strikes them. Then al-Qurtubi relays a question from al-Mawardi. If it is asked why the fire is described as hot at all, when a fire is never anything but hot and heat is the least of its states, where is the force in so slight a description? Al-Mawardi answers that the meaning of hamiya here was disputed, and sets out four lines of explanation.",
            "bn": "সা'দী একটি কথা যোগ করেন: এর তাপ তীব্র, আর তা চারদিক থেকে তাদের ঘিরে রাখবে। মুয়াসসার লেখে, প্রচণ্ড শিখার এক আগুন তাদের গায়ে লাগবে। এরপর কুরতুবী মাওয়ার্দীর একটি প্রশ্ন তুলে আনেন। আগুন তো গরম ছাড়া কিছু হয় না, আর গরম হওয়াটা তার সবচেয়ে সামান্য অবস্থা। তাহলে এমন দুর্বল একটি বিশেষণে জোরটা কোথায়? মাওয়ার্দীর উত্তর, এখানে হামিয়া শব্দের অর্থ নিয়ে মতভেদ আছে। তারপর তিনি চারটি ব্যাখ্যা সাজিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Answers From al-Mawardi",
          "bn": "মাওয়ার্দীর চার জবাব"
        },
        "p": [
          {
            "en": "The first answer: hamiya means lasting in its heat. It is not like the fire of this world, whose heat ends when it is put out. Ma'arif al-Qur'an makes the same point: worldly fire's heat lessens or ends in time, while Hell's fire is everlasting and its heat neither lessens nor ends. The second answer reads hamiya from hima, a guarded preserve: the fire is a barrier against committing what is forbidden and violating what is sacred, and al-Mawardi supports this with a saying of the Prophet ﷺ, taken up below.",
            "bn": "প্রথম জবাব: হামিয়া মানে যার তাপ স্থায়ী। দুনিয়ার আগুনের মতো নয়, যার তাপ নিভিয়ে দিলেই শেষ। মাআরিফুল কুরআনও নিজের ভাষায় একই কথা বলে: দুনিয়ার আগুনের তাপ কোনো না কোনো সময় কমে আসে বা ফুরিয়ে যায়। জাহান্নামের আগুন চিরস্থায়ী, তার তাপ কমবেও না, ফুরাবেও না। দ্বিতীয় জবাবে হামিয়াকে পড়া হয়েছে হিমা থেকে, মানে সংরক্ষিত চারণভূমি। এ আগুন হারাম কাজে জড়ানো আর পবিত্র সীমা লঙ্ঘনের পথে এক বাধা। এর সমর্থনে মাওয়ার্দী নবী ﷺ-এর একটি বাণী আনেন। সে কথা একটু পরে আসছে।"
          },
          {
            "en": "The third answer: the fire guards itself, so that no one can bear to touch it or hope to handle it, as a lion guards its den. Al-Mawardi cites a line of an-Nabigha on the lion-like guardian, al-hami. The fourth: hamiya is the heat of rage and anger, the utmost in vengeance, not the heat of a substance, as a man is said to grow hot when he rages to take revenge. Allah, he says, made this meaning plain in 67:8: it almost bursts apart with rage. Al-Qurtubi lists the four and chooses none.",
            "bn": "তৃতীয় জবাব: আগুন নিজেকে আগলে রাখে। কেউ তাকে ছোঁয়ার কথা ভাবতেও পারে না, নাগাল পাওয়ার আশাও করতে পারে না, ঠিক যেমন সিংহ তার গুহা আগলে রাখে। মাওয়ার্দী এখানে নাবিগার একটি পঙ্‌ক্তি আনেন, সিংহের মতো পাহারাদার, আল-হামীকে নিয়ে। চতুর্থ জবাব: হামিয়া মানে রাগ আর ক্রোধের উত্তাপ, প্রতিশোধে চূড়ান্ত কঠোরতা। কোনো বস্তুর গরম নয়। প্রতিশোধ নিতে গিয়ে কেউ রেগে আগুন হলে আরবরা বলে, সে তেতে উঠেছে। তাঁর মতে আল্লাহ ৬৭:৮ আয়াতে এ অর্থ স্পষ্ট করেছেন: ক্রোধে তা যেন ফেটে পড়বে। কুরতুবী চারটি ব্যাখ্যাই তুলে ধরেন, কোনোটিকে বেছে নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Preserve of Allah",
          "bn": "আল্লাহর সংরক্ষিত সীমানা"
        },
        "p": [
          {
            "en": "The saying al-Mawardi points to stands in Sahih al-Bukhari, number 52, and al-Bukhari placed it in his Sahih. An-Nu'man ibn Bashir (RA) said he heard the Messenger of Allah ﷺ, and part of its English on the page reads: \"And whoever indulges in these suspicious things is like a shepherd who grazes (his animals) near the Hima (private pasture) of someone else and at any moment he is liable to get in it. (O people!) Beware! Every king has a Hima and the Hima of Allah on the earth is His illegal (forbidden) things.\"",
            "bn": "মাওয়ার্দী যে বাণীর দিকে ইঙ্গিত করেন, তা আছে সহীহ বুখারীতে, ৫২ নম্বরে। বুখারী একে তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন। নুমান ইবন বশীর (রাঃ) বলেন, তিনি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছেন। সেখানকার একটি অংশ এরকম: যে ব্যক্তি সন্দেহজনক বিষয়ে জড়িয়ে পড়ে, সে যেন সেই রাখাল, যে অন্যের সংরক্ষিত চারণভূমির পাশে পশু চরায়, আর যেকোনো মুহূর্তে তার ভেতরে ঢুকে পড়ার আশঙ্কা থাকে। সাবধান! প্রত্যেক রাজার একটি সংরক্ষিত এলাকা আছে, আর পৃথিবীতে আল্লাহর সংরক্ষিত এলাকা হলো তাঁর হারাম করা বিষয়গুলো।"
          },
          {
            "en": "This is a general narration and is not attached to the verse. The full hadith begins with the lawful and the unlawful being evident and ends with the heart; al-Mawardi uses only its picture of a guarded preserve to explain one sense of a word. None of the commentators consulted for 88:4 attaches a sound hadith to the verse itself, and none gives an occasion of revelation for it.",
            "bn": "বর্ণনাটি সাধারণ, আয়াতের সঙ্গে সরাসরি যুক্ত নয়। পুরো হাদীসটি শুরু হয় এ কথা দিয়ে যে হালাল স্পষ্ট, হারামও স্পষ্ট। শেষ হয় অন্তরের কথায়। মাওয়ার্দী এর থেকে শুধু সংরক্ষিত চারণভূমির ছবিটুকু নিয়েছেন, একটি শব্দের একটি অর্থ বোঝাতে। ৮৮:৪ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। শানে নুযূলও কেউ উল্লেখ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Spring Long on the Boil",
          "bn": "বহুকাল ধরে ফুটতে থাকা ঝরনা"
        },
        "p": [
          {
            "en": "The next verse, 88:5, continues: tusqa min 'aynin aniya, they are given drink from a spring that is aniya. Ibn Kathir explains: its heat and its boiling have reached their end, and names Ibn Abbas, Mujahid, al-Hasan and as-Suddi. At-Tabari paraphrases: a spring whose heat has come to its term and reached the limit of intensity. He gives Ibn Abbas: it is the spring whose moaning, anin, has gone on long. He gives al-Hasan: it has been cooking to its point since the day Allah created the world, or in another telling, the heavens and the earth.",
            "bn": "পরের আয়াত ৮৮:৫ বলছে: তুসকা মিন আইনিন আনিয়া, তাদের পান করানো হবে আনিয়া এক ঝরনা থেকে। ইবন কাসীরের ব্যাখ্যা: এর তাপ আর ফুটন্ত অবস্থা চূড়ান্তে পৌঁছেছে। এ মত তিনি দেন ইবন আব্বাস (রাঃ), মুজাহিদ, হাসান আর সুদ্দীর নামে। তাবারীর ভাষায়, এমন ঝরনা যার তাপ পূর্ণ মেয়াদে পৌঁছে তীব্রতার শেষ সীমা ছুঁয়েছে। তিনি ইবন আব্বাস (রাঃ) থেকে আনেন: এ সেই ঝরনা, যার গোঙানি, আনীন, দীর্ঘ হয়েছে। হাসান থেকে আনেন: আল্লাহ যেদিন দুনিয়া সৃষ্টি করেছেন, সেদিন থেকেই এর রান্না চূড়ান্তে পৌঁছেছে। আরেক বর্ণনায়: যেদিন আসমান ও জমিন সৃষ্টি করেছেন।"
          },
          {
            "en": "Mujahid, in at-Tabari, says it has reached its time and its drinking has fallen due. One view stands apart: Ibn Zayd read aniya as hadira, present and at hand. Al-Qurtubi derives the word from a root of delay, something held back until its heat is complete, and sets it beside hamimin an in 55:44. Al-Qurtubi and al-Baghawi both report from the commentators that a drop of it falling on the mountains of this world would melt them. As-Sa'di glosses it hot, intensely hot, and joins it to 18:29, on the water given to those who cry for relief.",
            "bn": "তাবারীর উদ্ধৃতিতে মুজাহিদ বলেন, এর সময় হয়ে গেছে, পান করার মেয়াদ এসে পড়েছে। একটি মত আলাদা পথে চলে। ইবন যায়দ আনিয়ার অর্থ করেছেন হাদিরা: হাজির, হাতের কাছে প্রস্তুত। কুরতুবী শব্দটির মূল খোঁজেন বিলম্ব অর্থের ধাতুতে। অর্থাৎ যা আটকে রাখা হয়েছে, যতক্ষণ না তাপ পূর্ণ হয়। তিনি একে পাশে রাখেন ৫৫:৪৪ আয়াতের হামীমিন আন কথাটির। কুরতুবী আর বাগাভী দুজনেই তাফসীরকারদের থেকে জানান, এর এক ফোঁটা দুনিয়ার পাহাড়ে পড়লে পাহাড় গলে যেত। সা'দী এর অর্থ করেন গরম, প্রচণ্ড গরম। তারপর একে মেলান ১৮:২৯ আয়াতের সঙ্গে, যেখানে ফরিয়াদকারীদের পানি দেওয়ার কথা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Toil in the Fire or Before?",
          "bn": "খাটুনি আগুনে, না আগুনের আগে"
        },
        "p": [
          {
            "en": "Who are these faces, and where did they grow weary? At-Tabari reads 'amila and nasiba of 88:3 both in the Fire. He gives Ibn Abbas: they labour and toil from the Fire; al-Hasan: it did not work for Allah in the world, so He set it to work in the Fire; Qatada: it was too proud in the world to obey Allah, so He set it to labour and toil in the Fire. Al-Qurtubi gives Qatada at greater length: dragging heavy chains, carrying shackles, standing barefoot and naked, on a day whose length is fifty thousand years.",
            "bn": "এই মুখগুলো কাদের, আর তারা ক্লান্ত হলো কোথায়? তাবারী ৮৮:৩ আয়াতের আমিলা আর নাসিবা দুটোকেই আগুনের ভেতরের অবস্থা হিসেবে পড়েন। ইবন আব্বাস (রাঃ) থেকে আনেন: আগুনের কারণে তারা খাটবে আর ক্লান্ত হবে। হাসান থেকে: দুনিয়ায় সে আল্লাহর জন্য কাজ করেনি, তাই আল্লাহ তাকে আগুনে খাটালেন। কাতাদা থেকে: দুনিয়ায় সে অহংকারে আল্লাহর আনুগত্য করেনি, তাই আল্লাহ তাকে আগুনে খাটিয়ে ক্লান্ত করলেন। কুরতুবী কাতাদার কথা আরও বিস্তারে দেন: ভারী শিকল টানা, বেড়ি বয়ে বেড়ানো, খালি পায়ে নগ্ন দাঁড়িয়ে থাকা, এমন এক দিনে যার দৈর্ঘ্য পঞ্চাশ হাজার বছর।"
          },
          {
            "en": "Al-Qurtubi also reports from al-Kalbi and others that they will be made to climb a mountain of iron in Hell, and says Ibn Abbas said it too; al-Baghawi gives the mountain to ad-Dahhak, and from Ibn Mas'ud: it wades through the Fire as camels wade through mud. As-Sa'di is plain: wearied in the punishment, dragged on their faces. Al-Qurtubi himself opens differently, though. This is in the world, he says, because the Hereafter is not an abode of work: faces that laboured and wearied in this world are humbled in the next. Ikrima and as-Suddi split the pair: labouring in the world in sins, wearied in the Fire.",
            "bn": "কুরতুবী কালবী ও অন্যদের থেকে আরও জানান, জাহান্নামে তাদের দিয়ে লোহার পাহাড়ে চড়ানো হবে। তাঁর ভাষ্যে ইবন আব্বাস (রাঃ)-ও এ কথা বলেছেন। বাগাভী পাহাড়ের কথাটি দেন দাহহাকের নামে। ইবন মাসঊদ (রাঃ) থেকে আনেন: কাদায় উট যেমন হাঁটে, সে তেমনি আগুনের ভেতর দিয়ে হাঁটবে। সা'দীর কথা সরল: শাস্তির ভেতরে ক্লান্ত, মুখের উপর ভর দিয়ে টেনে নেওয়া। তবে কুরতুবী নিজে শুরু করেন অন্যভাবে। তাঁর মতে এটি দুনিয়ার কথা, কারণ আখিরাত আমলের জায়গা নয়। দুনিয়ায় যে মুখ খেটে ক্লান্ত হয়েছে, আখিরাতে তা অবনত। ইকরিমা আর সুদ্দী জোড়াটা ভাগ করেন: দুনিয়ায় গুনাহের কাজে খাটুনি, আগুনে ক্লান্তি।"
          },
          {
            "en": "On the worldly reading, al-Qurtubi gives from Ibn Abbas, through ad-Dahhak, people who wore themselves out in disobedience and disbelief; al-Baghawi, through 'Ata', people who toiled on a religion other than Islam. Both name idol-worshippers and disbelievers among the People of the Book, such as monks. Sa'id ibn Jubayr and Zayd ibn Aslam held it, and Ibn Kathir reports that al-Bukhari cited Ibn Abbas: the Christians. As-Sa'di grants the reading is sound in meaning, deeds without faith, their condition, become scattered dust, but holds the first reading certainly correct: the verse is tied to 'that Day' and describes the people of the Fire as a whole.",
            "bn": "দুনিয়ার ব্যাখ্যায় কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: এরা সেই লোক, যারা গুনাহ আর কুফরির পথে নিজেদের ক্ষয় করেছে। বাগাভী আতার সূত্রে আনেন: যারা ইসলাম ছাড়া অন্য দীনের উপর খেটেছে। উদাহরণে দুজনেই মূর্তিপূজারি আর আহলে কিতাবের কাফিরদের কথা বলেন, যেমন সন্ন্যাসীরা। সাঈদ ইবন জুবায়র আর যায়দ ইবন আসলামও এ মত দিয়েছেন। ইবন কাসীর জানান, বুখারী ইবন আব্বাস (রাঃ)-এর কথা এনেছেন: খ্রিস্টানরা। সা'দী মানেন, অর্থের দিক থেকে এ ব্যাখ্যা ঠিক আছে। ঈমান হলো আমলের শর্ত, তা না থাকলে আমল উড়ন্ত ধুলোর মতো হয়ে যায়। তবু তাঁর মতে নিশ্চিত সঠিক প্রথম ব্যাখ্যাটিই। কারণ আয়াত বাঁধা আছে সেদিন শব্দের সঙ্গে, আর এখানে বলা হচ্ছে গোটা জাহান্নামবাসীর অবস্থা।"
          }
        ]
      },
      {
        "h": {
          "en": "Why 'Umar Wept",
          "bn": "উমর (রাঃ) কেন কাঁদলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir gives a report from al-Hafiz Abu Bakr al-Burqani, with his chain to Abu 'Imran al-Jawni. 'Umar ibn al-Khattab (RA) passed the monastery of a monk and called out to him, and the monk looked down from it. 'Umar looked at him and began to weep. He was asked: Commander of the Faithful, what makes you weep at this? He said: I remembered the words of Allah in His Book, 'amilatun nasibah, tasla naran hamiya, and that is what made me weep.",
            "bn": "ইবন কাসীর একটি বর্ণনা আনেন হাফিয আবু বকর বারকানী থেকে, যার সনদ গিয়ে পৌঁছেছে আবু ইমরান জাওনী পর্যন্ত। উমর ইবনুল খাত্তাব (রাঃ) এক সন্ন্যাসীর আশ্রমের পাশ দিয়ে যাচ্ছিলেন। তিনি সন্ন্যাসীকে ডাকলেন, সন্ন্যাসী উপর থেকে উঁকি দিল। উমর (রাঃ) তার দিকে তাকিয়ে রইলেন, আর কাঁদতে লাগলেন। তাঁকে জিজ্ঞেস করা হলো, আমীরুল মুমিনীন, এতে কাঁদার কী আছে? তিনি বললেন, আল্লাহর কিতাবে তাঁর বাণী মনে পড়ে গেল: আমিলাতুন নাসিবা, তাসলা নারান হামিয়া। সেটাই আমাকে কাঁদিয়েছে।"
          },
          {
            "en": "Al-Qurtubi relays it from al-Hasan in another form. When 'Umar came to Syria, an aged monk came to him, worn and shabby, dressed in black, and 'Umar wept on seeing him. He said: this poor man sought something and did not reach it, and hoped a hope and missed it; and he recited 88:2 and 88:3. Ma'arif al-Qur'an relays the same from al-Hasan al-Basri. None of these texts grades the report, and it is told of 'Umar, not raised to the Prophet ﷺ. What it records is tears and the word miskin, poor man: pity, not a verdict.",
            "bn": "কুরতুবী হাসান থেকে ঘটনাটি আনেন অন্য রূপে। উমর (রাঃ) যখন শামে এলেন, এক বৃদ্ধ সন্ন্যাসী তাঁর কাছে এল। জীর্ণ চেহারা, মলিন বেশ, গায়ে কালো পোশাক। তাকে দেখে উমর (রাঃ) কেঁদে ফেললেন। বললেন, এই বেচারা একটা জিনিস চেয়েছিল, পায়নি। একটা আশা করেছিল, তা ফসকে গেছে। তারপর তিনি তিলাওয়াত করলেন ৮৮:২ ও ৮৮:৩ আয়াত। মাআরিফুল কুরআনও হাসান বসরী থেকে একই ঘটনা আনে। এই তাফসীরগুলোর কোনোটিই বর্ণনাটির মান নিয়ে কিছু বলেনি। এটি উমর (রাঃ)-এর ঘটনা, নবী ﷺ-এর বাণী নয়। এতে যা ধরা আছে তা হলো চোখের পানি আর মিসকীন, বেচারা শব্দটি। এ করুণা, রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No Name Inside the Verse",
          "bn": "আয়াতে কারও নাম নেই"
        },
        "p": [
          {
            "en": "The verse names no community and no person. At-Tabari and the Muyassar speak of the faces of the disbelievers, and as-Sa'di of the people of the Fire as a whole. The monk belongs to one early reading of 88:3, held by named figures, and as-Sa'di sets it aside as the verse's meaning. On any reading, the verse describes what it describes on that Day. It licenses nothing against any living person or faith community, Christian or other, and no one may name another person as one of these faces. How any life ends is known to Allah alone.",
            "bn": "আয়াত কোনো সম্প্রদায় বা কোনো মানুষের নাম নেয়নি। তাবারী আর মুয়াসসার বলেন কাফিরদের মুখের কথা, সা'দী বলেন গোটা জাহান্নামবাসীর কথা। সন্ন্যাসীর প্রসঙ্গ ৮৮:৩ আয়াতের একটি প্রাচীন ব্যাখ্যার অংশ। কয়েকজন নির্দিষ্ট ব্যক্তি এ মত দিয়েছেন, আর সা'দী একে আয়াতের অর্থ হিসেবে মানেননি। যে ব্যাখ্যাই ধরুন, আয়াত শুধু সেদিনের সেই ছবি আঁকে, যা সে আঁকে। জীবিত কোনো মানুষ বা কোনো ধর্মীয় সম্প্রদায়ের বিরুদ্ধে, খ্রিস্টান হোক বা অন্য কেউ, এ আয়াত কিছুরই অনুমতি দেয় না। কাউকে আঙুল তুলে বলার অধিকার কারও নেই যে সে এই মুখগুলোর একজন। কার জীবন কীভাবে শেষ হবে, তা একমাত্র আল্লাহ জানেন।"
          },
          {
            "en": "Both readings turn the reader back on himself. On the first, al-Hasan and Qatada tie the toil in the Fire to what came before it: it did not work for Allah; it was too proud to obey Him. On the second, al-Qurtubi's report from Ibn Abbas says that Allah accepts only what was done purely for Him. Either way, the measure is not how tired a person grew, but for whom and on what terms. A Muslim reader hears the verse about his own prayer, his own fasting and his own daily labour.",
            "bn": "দুটো ব্যাখ্যাই পাঠককে ফিরিয়ে আনে তার নিজের দিকে। প্রথম ব্যাখ্যায় হাসান আর কাতাদা আগুনের খাটুনিকে বেঁধে দেন আগের জীবনের সঙ্গে। সে আল্লাহর জন্য কাজ করেনি, অহংকারে তাঁর আনুগত্য করেনি। দ্বিতীয় ব্যাখ্যায় কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহ শুধু সেটুকুই কবুল করেন যা খাঁটিভাবে তাঁর জন্য করা। দুই দিক থেকেই মাপকাঠি একটা। মানুষ কতটা ক্লান্ত হলো, সেটা নয়। কার জন্য খাটল, কোন শর্তে খাটল, সেটাই আসল। একজন মুসলিম পাঠক আয়াতটি শোনেন নিজের নামাজ, নিজের রোজা আর নিজের রোজকার পরিশ্রমের কথা ভেবে।"
          }
        ]
      }
    ]
  },
  "88:8": {
    "sections": [
      {
        "h": {
          "en": "Two Words Return, One Changes",
          "bn": "দুটি শব্দ ফেরে, একটি বদলায়"
        },
        "p": [
          {
            "en": "Wujuhun yawma'idhin na'imah: faces, that Day, glad with bliss. The verse has three Arabic words, and the first two are the very words that opened 88:2. There they led to faces bowed, toiling and worn, a scene with its own page. Here the same two words lead somewhere else, and only the third word has changed. Ibn Kathir describes the turn in one clause: having mentioned the state of the wretched, He follows it with mention of the happy.",
            "bn": "উজূহুই ইয়াওমাইযিন নাইমাহ: সেদিন কতক মুখ হবে সুখে উজ্জ্বল। আয়াতে আরবি শব্দ তিনটি, আর প্রথম দুটি হুবহু সেই শব্দ, যা দিয়ে ৮৮:২ শুরু হয়েছিল। সেখানে এ দুটি শব্দ নিয়ে গিয়েছিল নত, খেটে খেটে ক্লান্ত মুখের দিকে, যার আলোচনা আলাদা পাতায়। এখানে একই দুটি শব্দ অন্য দিকে নিয়ে যায়, বদলেছে শুধু তৃতীয় শব্দটি। ইবন কাসীর এই মোড় ঘোরাটা একটি বাক্যে বলেন: হতভাগাদের অবস্থা বলার পর আল্লাহ এবার ভাগ্যবানদের কথা আনলেন।"
          },
          {
            "en": "Al-Qurtubi notices what is missing between the two scenes. No 'and' stands before the second wujuh, yet he says a waw is implied: and faces, that Day, set apart from the faces that came before. He adds that the faces here are an expression for the selves. That note shapes what follows, because the next verse calls these faces content with their striving, and a face does not strive. The person strives, and the face is where that person's state is seen.",
            "bn": "দুই দৃশ্যের মাঝখানে কী অনুপস্থিত, কুরতুবী তা লক্ষ করেন। দ্বিতীয় উজূহ শব্দের আগে কোনো 'ওয়া' (এবং) নেই। তবু তাঁর মতে একটি ওয়া উহ্য আছে: আর সেদিন কতক মুখ। এতে আগের মুখগুলো থেকে এদের আলাদা করা হয়। তিনি আরও বলেন, এখানে মুখ বলে আসলে পুরো মানুষটিকেই বোঝানো হয়েছে। পরের আয়াত বুঝতে কথাটি কাজে লাগে। পরের আয়াত এই মুখগুলোকে বলে নিজের চেষ্টায় সন্তুষ্ট, অথচ মুখ তো চেষ্টা করে না। চেষ্টা করে মানুষ, আর তার অবস্থা ফুটে ওঠে মুখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bliss That Shows",
          "bn": "যে সুখ চেহারায় ফোটে"
        },
        "p": [
          {
            "en": "What does na'imah carry? At-Tabari reads it as faces blessed because Allah has given bliss to their people in His gardens, and he names who they are: the people of faith in Allah. Al-Qurtubi's first gloss is dhat ni'mah, possessed of blessing, and he too says these are the faces of the believers. He gives a reason for their glow: they were gladdened by what they saw of how their affair ended, and of their righteous work. Al-Baghawi relays Muqatil: in blessing and in honour.",
            "bn": "নাইমাহ শব্দে কী আছে? তাবারীর ব্যাখ্যায় এ মুখগুলো সুখী, কারণ আল্লাহ তাঁর জান্নাতে এদের অধিকারীদের নিয়ামত দিয়েছেন। এরা কারা, তাও তিনি বলে দেন: আল্লাহর প্রতি ঈমান আনা মানুষ। কুরতুবীর প্রথম ব্যাখ্যা যাতু নি'মাহ, অর্থাৎ নিয়ামতের অধিকারী। তাঁর মতেও এগুলো মুমিনদের মুখ। এই ঔজ্জ্বল্যের কারণও তিনি দেন: নিজেদের পরিণতি আর নিজেদের নেক আমল চোখের সামনে দেখে তারা আনন্দিত। বাগাভী মুকাতিলের কথা উদ্ধৃত করেন: নিয়ামত আর সম্মানের মধ্যে।"
          },
          {
            "en": "Ibn Kathir's gloss is that bliss is recognised in them, and he adds at once that they reached this only by their striving. The Muyassar says it plainly: the faces of the believers on the Day of Resurrection are possessed of blessing. As-Sa'di describes it more fully: the radiance of bliss has passed over them, so their bodies grew fresh, their faces shone, and their joy was complete. His phrase, nadrat an-na'im, is the Qur'an's own in 83:24: you will recognise in their faces the radiance of bliss.",
            "bn": "ইবন কাসীরের ব্যাখ্যা: তাদের মুখে নিয়ামতের ছাপ চেনা যায়। সঙ্গে সঙ্গে তিনি যোগ করেন, এ অবস্থা তারা পেয়েছে কেবল নিজেদের চেষ্টার কারণে। মুয়াসসার সোজা কথায় বলে: কিয়ামতের দিন মুমিনদের মুখ হবে নিয়ামতে ভরা। সা'দী ছবিটা আরও খুলে আঁকেন। নিয়ামতের সজীবতা তাদের উপর বয়ে গেছে, ফলে দেহ হয়েছে সতেজ, মুখ হয়েছে আলোকিত, আর আনন্দ পৌঁছেছে চূড়ান্ত সীমায়। তাঁর ব্যবহৃত শব্দবন্ধ নাদরাতান নাঈম কুরআনেরই ভাষা, ৮৩:২৪ আয়াতে: তুমি তাদের চেহারায় নিয়ামতের সজীবতা চিনতে পারবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Content With Which Striving?",
          "bn": "কোন চেষ্টায় সন্তুষ্টি?"
        },
        "p": [
          {
            "en": "Li-sa'yiha radiyah: with their striving, content. Two Arabic words, and the commentators ask what exactly the contentment looks at. At-Tabari gives the first answer as his own: content with the work they did in the world in obedience to their Lord. Then, under the words it is said, he records a second: content with the reward of their striving in the Hereafter. One reading looks back at the deed itself. The other looks at what the deed has brought.",
            "bn": "লিসা'ইহা রাদিয়াহ: নিজেদের চেষ্টা-সাধনায় সন্তুষ্ট। আরবিতে মাত্র দুটি শব্দ, অথচ তাফসীরকারেরা প্রশ্ন তোলেন, সন্তুষ্টিটা ঠিক কীসের প্রতি। তাবারী প্রথম উত্তরটি দেন নিজের কথা হিসেবে: দুনিয়ায় রবের আনুগত্যে যে আমল তারা করেছে, তাতে তারা সন্তুষ্ট। তারপর 'বলা হয়' কথাটি জুড়ে দিয়ে দ্বিতীয় একটি মত আনেন: আখিরাতে নিজেদের চেষ্টার প্রতিদান পেয়ে তারা সন্তুষ্ট। প্রথম মত পেছন ফিরে আমলটির দিকেই তাকায়। দ্বিতীয় মত তাকায় আমলটি যা এনে দিয়েছে তার দিকে।"
          },
          {
            "en": "Al-Qurtubi joins the two. Their striving is the work they did in the world, and they are content in the Hereafter when they have been given the Garden for their work. He then states the underlying sense: content with the reward of their striving. Al-Baghawi has almost the same two clauses, striving in the world and contentment in the Hereafter when the Garden was given. The Muyassar ties both ends together too: content in the Hereafter because of their striving in the world through acts of obedience.",
            "bn": "কুরতুবী দুটিকে এক করেন। তাদের চেষ্টা মানে দুনিয়ায় করা আমল। আর আখিরাতে সেই আমলের বিনিময়ে যখন জান্নাত দেওয়া হলো, তখন তারা সন্তুষ্ট। এরপর তিনি বাক্যের ভেতরের অর্থটা খুলে বলেন: নিজেদের চেষ্টার প্রতিদানে সন্তুষ্ট। বাগাভীর কথাও প্রায় হুবহু, দুটি অংশেই: চেষ্টা দুনিয়ায়, আর সন্তুষ্টি আখিরাতে, যখন জান্নাত দেওয়া হলো। মুয়াসসারও দুই প্রান্ত এক সুতোয় বাঁধে: দুনিয়ায় আনুগত্যের কাজে চেষ্টার কারণে আখিরাতে তারা সন্তুষ্ট।"
          },
          {
            "en": "Ibn Kathir quotes Sufyan: they are pleased with their deeds. As-Sa'di widens what the striving held: the righteous deeds the person sent ahead in the world, and kindness to the servants of Allah. Then he gives the reason for the contentment. The face found the reward of that striving stored up and multiplied, so it praised how things ended, and everything it had wished for came to it. In his gloss, striving includes the way a person treated other people.",
            "bn": "ইবন কাসীর সুফিয়ানের ছোট্ট একটি কথা উদ্ধৃত করেন: তারা নিজেদের আমলে খুশি। সা'দী চেষ্টার পরিধি আরও বাড়িয়ে দেন। এর মধ্যে আছে দুনিয়ায় আগেভাগে পাঠানো নেক আমল, আর আল্লাহর বান্দাদের প্রতি সদাচরণ। তারপর তিনি সন্তুষ্টির কারণ বলেন। সেই চেষ্টার প্রতিদান মানুষটি জমা পেয়েছে, তাও বহুগুণ বাড়িয়ে। তাই শেষ ফলটির সে প্রশংসা করেছে, আর যা কিছু চেয়েছিল সবই পেয়েছে। তাঁর ব্যাখ্যায় তাই চেষ্টার মধ্যে পড়ে মানুষের সঙ্গে আচরণও।"
          }
        ]
      },
      {
        "h": {
          "en": "The Giver and the Effort",
          "bn": "দাতা আর চেষ্টা"
        },
        "p": [
          {
            "en": "Two kinds of phrase sit side by side here. Ibn Kathir says the faces reached their bliss only by their striving, and al-Qurtubi and al-Baghawi say the Garden was given to them for their work. At-Tabari's gloss on 88:8 puts the Giver first: the faces are blessed by Allah's giving of bliss to their people in His gardens. Neither cancels the other: the verse names the striving, the gloss names the Giver, and the commentators quoted here hold both.",
            "bn": "এসব ব্যাখ্যায় দুই ধরনের কথা পাশাপাশি বসে আছে। ইবন কাসীর বলেন, এই মুখগুলো সুখ পেয়েছে কেবল নিজেদের চেষ্টার কারণে। কুরতুবী আর বাগাভী বলেন, আমলের বিনিময়ে তাদের জান্নাত দেওয়া হয়েছে। আবার ৮৮:৮ আয়াতের ব্যাখ্যায় তাবারী আগে আনেন দাতাকে: মুখগুলো সুখী, কারণ আল্লাহ তাঁর জান্নাতে এদের নিয়ামত দিয়েছেন। এক কথা অন্য কথাকে বাতিল করে না। আয়াত বলে চেষ্টার কথা, ব্যাখ্যা বলে দাতার কথা, আর এখানে উদ্ধৃত তাফসীরকারেরা দুটিকেই একসঙ্গে ধরে রাখেন।"
          },
          {
            "en": "A single line of contrast is enough, since 88:2 to 88:7 have their own page: 88:3 calls those faces labouring and worn out, and these are content with their striving. The commentators do not leave this striving vague. They tie it to obedience to the Lord, to righteous deeds, and, in as-Sa'di's words, to kindness to Allah's servants. Much of it is small and unseen: a prayer guarded when tired, a debt paid on time, patience with a hard relative. Is mine the kind I would want shown on my face?",
            "bn": "তুলনার জন্য একটি লাইনই যথেষ্ট, কারণ ৮৮:২ থেকে ৮৮:৭ আয়াতের আলোচনা আলাদা পাতায়। ৮৮:৩ আয়াত ওই মুখগুলোকে বলে খেটে খেটে ক্লান্ত, আর এগুলো নিজেদের চেষ্টায় সন্তুষ্ট। তাফসীরকারেরা এই চেষ্টাকে অস্পষ্ট রাখেন না। তাঁরা একে বাঁধেন রবের আনুগত্যের সঙ্গে, নেক আমলের সঙ্গে, আর সা'দীর ভাষায় আল্লাহর বান্দাদের প্রতি সদাচরণের সঙ্গে। এর বেশির ভাগই ছোট, চোখের আড়ালে: ক্লান্ত শরীরেও নামাজ রক্ষা করা, সময়মতো ঋণ শোধ করা, কঠিন স্বভাবের আত্মীয়ের সঙ্গে ধৈর্য ধরা। আমার চেষ্টা কি এমন, যা সেদিন চেহারায় ফুটে উঠুক বলে আমি চাইব?"
          }
        ]
      },
      {
        "h": {
          "en": "High in Place, High in Worth",
          "bn": "স্থানে উঁচু, মর্যাদায় উঁচু"
        },
        "p": [
          {
            "en": "Fi jannatin 'aliyah: in a Garden set high. At-Tabari keeps it short: the jannah is a garden, and 'aliyah means raised. Ibn Kathir adds brightness and safety: raised and resplendent, and they are secure in the high chambers, wording close to the end of 34:37, wa-hum fi al-ghurufati aminun. The adjective can point to height of place or to height of worth. Some commentators leave the word general; others separate the two senses or join them.",
            "bn": "ফী জান্নাতিন আলিয়াহ: উঁচু জান্নাতে। তাবারী সংক্ষেপে বলেন: জান্নাত মানে বাগান, আর আলিয়াহ মানে উঁচু। ইবন কাসীর এর সঙ্গে যোগ করেন দীপ্তি আর নিরাপত্তা: উঁচু ও ঝলমলে, আর তারা উঁচু প্রাসাদকক্ষে নিরাপদ। তাঁর এ কথাটি ৩৪:৩৭ আয়াতের শেষাংশের খুব কাছাকাছি: ওয়া হুম ফিল গুরুফাতি আমিনূন। আলিয়াহ বিশেষণটি স্থানের উচ্চতাও বোঝাতে পারে, মর্যাদার উচ্চতাও। কোনো কোনো তাফসীরকার শব্দটিকে সাধারণ অর্থে রেখে দেন, অন্যরা দুই অর্থ আলাদা করেন কিংবা একসঙ্গে বলেন।"
          },
          {
            "en": "Al-Qurtubi gives both senses. First, raised, because the Garden is above the heavens, as he had set out earlier in his commentary. Then, under the words it is said, high in worth, because in it is whatever souls desire and eyes delight in, wording taken from 43:71. The Muyassar makes no choice and joins both in one phrase: a Garden high in place and in standing. Al-Baghawi's entry for 88:10 only restates the verse, and adds nothing on the word.",
            "bn": "কুরতুবী দুটি অর্থই দেন। প্রথমে বলেন উঁচু, কারণ জান্নাত আসমানসমূহের উপরে, যেমনটা তিনি আগেই ব্যাখ্যা করেছেন। তারপর 'বলা হয়' কথাটি জুড়ে দিয়ে আনেন মর্যাদায় উঁচু অর্থটি, কারণ সেখানে আছে মন যা চায় আর চোখ যাতে তৃপ্তি পায়। এ ভাষা ৪৩:৭১ আয়াত থেকে নেওয়া। মুয়াসসার কোনোটি বেছে নেয় না, দুটিকে একটি শব্দবন্ধে বেঁধে দেয়: স্থানে ও মর্যাদায় উঁচু জান্নাত। ৮৮:১০ আয়াতে বাগাভীর ব্যাখ্যা শুধু আয়াতটিই আবার বলে, শব্দটি নিয়ে কিছু যোগ করে না।"
          },
          {
            "en": "As-Sa'di explains the height through place and dwellings. Its location is the highest 'Illiyyin, he says, and its dwellings are lofty, with chambers built above chambers, from which the people look out over the honour Allah has prepared for them; the image of chambers above chambers is the wording of 39:20. He also draws in 69:23, its clusters hanging near: the fruit is easy to reach in whatever posture they are in, with no tree to climb. Height, in his reading, never puts anything out of reach.",
            "bn": "সা'দী উচ্চতা ব্যাখ্যা করেন জায়গা আর বাসস্থান দিয়ে। তাঁর ভাষায়, জান্নাতের অবস্থান সর্বোচ্চ ইল্লিয়্যীনে। এর বাসস্থানগুলো উঁচু, কক্ষের উপর নির্মিত কক্ষ, যেখান থেকে জান্নাতবাসীরা আল্লাহর প্রস্তুত করে রাখা সম্মানের দিকে তাকিয়ে দেখে। কক্ষের উপর কক্ষের এই ছবি ৩৯:২০ আয়াতের ভাষা। তিনি ৬৯:২৩ আয়াতও টেনে আনেন: এর ফলের গুচ্ছ ঝুলে থাকবে নাগালের মধ্যে। যে অবস্থাতেই তারা থাকুক, ফল হাতের কাছে, গাছে চড়ার দরকার নেই। তাঁর ব্যাখ্যায় এই উচ্চতা কোনো কিছুকে নাগালের বাইরে নিয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is It That Hears?",
          "bn": "কে শোনে, কী শোনা যায়"
        },
        "p": [
          {
            "en": "La tasma'u fiha laghiyah: in it they hear no idle word, or, in another reading, no idle word is heard in it. At-Tabari reports how the readers differed. The general body of Kufan readers, and among the Madinans Abu Ja'far, read tasma'u with an open ta: the faces do not hear. Ibn Kathir the Makkan reader, Nafi' and Abu 'Amr, he says, read tusma'u, with its doer left unnamed and the verb made feminine to match laghiyah. The unnamed-doer form with ya he records from Ibn Muhaysin.",
            "bn": "লা তাসমাউ ফীহা লাগিয়াহ: সেখানে তারা কোনো অনর্থক কথা শুনবে না। অন্য এক কিরাআতে অর্থ দাঁড়ায়: সেখানে কোনো অনর্থক কথা শোনা যাবে না। কারীদের মধ্যে কী ভিন্নতা ছিল, তাবারী তা জানান। কূফার কারীদের অধিকাংশ, আর মদীনার কারীদের মধ্যে আবু জা'ফর, পড়েছেন তাসমাউ, তা-তে যবর দিয়ে। অর্থ: মুখগুলো শুনবে না। তাঁর বর্ণনায় মক্কার কারী ইবন কাসীর, নাফে' আর আবু আমর পড়েছেন তুসমাউ। এখানে শ্রোতার নাম নেই, আর লাগিয়াহ স্ত্রীলিঙ্গ বলে ক্রিয়াও স্ত্রীলিঙ্গ। শ্রোতার নাম ছাড়া ইয়া দিয়ে পড়ার রূপটি তিনি উল্লেখ করেন ইবন মুহাইসিন থেকে।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi assign the forms differently. Al-Qurtubi has Abu 'Amr and Ibn Kathir reading la yusma'u, with ya and the doer unnamed, and Nafi' the same but with ta, because laghiyah is feminine; the ya is allowed, he explains, because the phrase fiha stands between verb and noun. Al-Baghawi gives the ya to the readers of Makkah and Basrah, with laghiyatun as subject, and the ta form to Nafi'. For Ibn Kathir and Abu 'Amr, then, at-Tabari has ta where these two have ya.",
            "bn": "কুরতুবী আর বাগাভী রূপগুলো ভিন্নভাবে বণ্টন করেন। কুরতুবীর বর্ণনায় আবু আমর ও ইবন কাসীর পড়েছেন লা ইউসমাউ, ইয়া দিয়ে, শ্রোতার নাম ছাড়া। নাফে'-ও তাই পড়েছেন, তবে তা দিয়ে, কারণ লাগিয়াহ স্ত্রীলিঙ্গ। তিনি বলেন, ইয়া দিয়ে পড়া চলে, কারণ ক্রিয়া আর বিশেষ্যের মাঝে ফীহা শব্দটি দাঁড়িয়ে আছে। বাগাভী ইয়া-র কিরাআতটি দেন মক্কা ও বসরার কারীদের নামে, লাগিয়াতুন তখন কর্তা। আর তা-র রূপটি দেন নাফে'-কে। অর্থাৎ ইবন কাসীর ও আবু আমরের বেলায় তাবারী বলেন তা, আর এ দুজন বলেন ইয়া।"
          },
          {
            "en": "Both give the remaining readers tasma'u with an open ta and laghiyatan as object, but they differ on who is addressed. Al-Qurtubi takes it as said of the faces: the faces will not hear an idle word there. Al-Baghawi takes it as address to the Prophet ﷺ: you will not hear. At-Tabari, like al-Qurtubi, makes the faces, meaning their owners, the ones who hear. His verdict on the forms is generous: all are known readings, sound in meaning, and whichever a reader recites, he is right.",
            "bn": "বাকি কারীদের কিরাআত দুজনেই দেন তাসমাউ, তা-তে যবর, আর লাগিয়াতান কর্ম। তবে সম্বোধন কার প্রতি, তা নিয়ে তাঁরা ভিন্ন। কুরতুবীর মতে কথাটি মুখগুলো সম্পর্কে: সেখানে মুখগুলো কোনো অনর্থক কথা শুনবে না। বাগাভীর মতে এ সম্বোধন নবী ﷺ-এর প্রতি: তুমি শুনবে না। তাবারীও কুরতুবীর মতো শ্রোতা বানান মুখগুলোকে, অর্থাৎ মুখের অধিকারীদের। কিরাআতগুলো নিয়ে তাঁর রায় উদার: সবগুলোই পরিচিত কিরাআত, অর্থেও সঠিক। কারী যেটিই পড়ুন, তিনি ঠিক পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word the Garden Lacks",
          "bn": "যে কথা জান্নাতে নেই"
        },
        "p": [
          {
            "en": "What is the laghiyah that is never heard? At-Tabari says it is a word of laghw, and laghw is falsehood. The form names a word by what it carries, he explains, as Arabs call the man with a coat of mail dari' and the man with a horse faris. Some Kufans, he reports, read it as one who swears falsely. He grants that view a basis, but sets it aside because the interpreters among the Companions and Followers held otherwise, and no one may depart from what they agreed on.",
            "bn": "যে লাগিয়াহ কখনো কানে আসবে না, সেটা কী? তাবারী বলেন, লাগিয়াহ মানে লাগওয়ের কথা, আর লাগও মানে বাতিল, অসার মিথ্যা। তাঁর ব্যাখ্যায় শব্দটি কোনো কথাকে নাম দেয় তার ভেতরের জিনিস দিয়ে, আরবরা যেমন বর্মধারীকে বলে দারি', আর ঘোড়ার মালিককে বলে ফারিস। তিনি জানান, কূফার কিছু লোক এর অর্থ করেছেন মিথ্যা কসমকারী। তাবারী মতটির একটা ভিত্তি মানেন, কিন্তু গ্রহণ করেন না। কারণ সাহাবি ও তাবেঈ মুফাসসিরগণ এর বিপরীত মত দিয়েছেন, আর তাঁরা যে বিষয়ে একমত, তার বিরোধিতা কারও জন্য বৈধ নয়।"
          },
          {
            "en": "The early interpreters he cites name the content. From Ibn 'Abbas (RA): no harm and no falsehood. From Mujahid: abuse. From Qatada: neither falsehood nor anyone who abuses. Al-Qurtubi lists six views, and his report from Ibn 'Abbas (RA) differs in wording: lies, slander and disbelief in Allah. Qatada in his list: no falsehood and no sin. Mujahid: abuse. Al-Hasan: disobedience. Al-Farra': someone swearing a lying oath; al-Kalbi: no oath at all, true or false. Al-Farra' again: no idle word in their speech, since they speak only wisdom and praise of Allah.",
            "bn": "তাবারী যেসব প্রাচীন মুফাসসিরের কথা আনেন, তাঁরা বিষয়বস্তুর নাম বলেন। ইবন আব্বাস (রাঃ): কোনো কষ্টদায়ক কথা নয়, কোনো বাতিলও নয়। মুজাহিদ: গালি। কাতাদা: না বাতিল, না কোনো গালিদাতা। কুরতুবী ছয়টি মত গুনে দেন, আর তাঁর বর্ণনায় ইবন আব্বাস (রাঃ)-এর কথার ভাষা ভিন্ন: মিথ্যা, অপবাদ আর আল্লাহর সঙ্গে কুফরি। তাঁর তালিকায় কাতাদা: না বাতিল, না গুনাহ। মুজাহিদ: গালি। হাসান: নাফরমানি। ফাররা: মিথ্যা কসমকারী। কালবী: সত্য-মিথ্যা কোনো কসমই নয়। আবার ফাররা: তাদের কথায় কোনো অনর্থক শব্দ নেই, কারণ তারা কেবল হিকমতের কথা বলে আর আল্লাহর প্রশংসা করে।"
          },
          {
            "en": "Al-Qurtubi judges that last view the best, because it takes in all the others. As-Sa'di arrives at a similar place: not even a word of idle talk and falsehood is heard there, let alone forbidden speech. Their talk is good and beneficial, he says, full of the remembrance of Allah and His continuing favours, and of the courtesy companions show one another, talk that gladdens hearts and opens the chest. Ma'arif al-Qur'an lists words of disbelief, futile talk, obscene language, calumny and anything that hurts people's feelings.",
            "bn": "কুরতুবী শেষ মতটিকেই সবচেয়ে ভালো বলেন, কারণ এটি বাকি সবগুলোকে ধারণ করে। সা'দীও কাছাকাছি জায়গায় পৌঁছান। সেখানে অনর্থক বা বাতিল একটি কথাও শোনা যাবে না, হারাম কথা তো দূরের কথা। তাঁর বর্ণনায় জান্নাতবাসীদের কথা সুন্দর ও উপকারী। তাতে থাকে আল্লাহর জিকির, তাঁর অবিরাম নিয়ামতের আলোচনা, আর একসঙ্গে থাকা মানুষদের পরস্পরের প্রতি সুন্দর আদব। এমন কথা মনকে খুশি করে, বুক প্রশস্ত করে। মাআরিফুল কুরআন তালিকা দেয়: কুফরি কথা, অর্থহীন কথা, অশ্লীল ভাষা, অপবাদ, আর মানুষের মনে কষ্ট দেয় এমন যেকোনো কথা।"
          },
          {
            "en": "Ibn Kathir explains the verse through three others: 19:62, they hear no idle talk there, only peace; 52:23, no idle talk in it and no sin; and 56:25 and 56:26, which end on the words salaman salaman. Ma'arif al-Qur'an also cites 56:25 and draws from it that false accusation and absurd talk wound, which is why their absence is counted a blessing. The quiet of the Garden is not empty: in 19:62 and 56:26, peace fills it.",
            "bn": "ইবন কাসীর আয়াতটি বোঝান আরও তিনটি আয়াত দিয়ে। ১৯:৬২: সেখানে তারা কোনো অনর্থক কথা শুনবে না, শুধু সালাম। ৫২:২৩: সেখানে না আছে অনর্থক কথা, না গুনাহ। আর ৫৬:২৫ ও ৫৬:২৬, যার শেষ শব্দ সালামান সালামা। মাআরিফুল কুরআনও ৫৬:২৫ উদ্ধৃত করে, আর সেখান থেকে সিদ্ধান্ত টানে যে মিথ্যা অপবাদ আর অর্থহীন কথা মানুষকে আঘাত করে। এজন্যই এসব না থাকাকে জান্নাতবাসীদের জন্য নিয়ামত গণ্য করা হয়েছে। জান্নাতের এই নীরবতা ফাঁকা নয়। ১৯:৬২ আর ৫৬:২৬ বলছে, সেখানে ভরে থাকে সালাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Practising That Speech Now",
          "bn": "সেই ভাষার চর্চা এখনই"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for 88:8 to 88:11 attaches a hadith to these verses, so this page quotes none. The verses describe one outcome on the Day the surah calls al-ghashiyah, and like the scene before them they name a state, not a person or group a reader could point to. They license no judgement on any living person or community, in either direction. They speak to the one reading them, about his or her own face, own striving and own speech.",
            "bn": "৮৮:৮ থেকে ৮৮:১১ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতগুলোর সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এ পাতাও কোনো হাদিস উদ্ধৃত করছে না। আয়াতগুলো এমন এক দিনের একটি পরিণতির বর্ণনা, যাকে সূরাটি বলে আল-গাশিয়াহ। আগের দৃশ্যের মতো এখানেও আছে একটি অবস্থার কথা, এমন কোনো মানুষ বা দলের নাম নয়, যার দিকে পাঠক আঙুল তুলতে পারে। কোনো জীবিত মানুষ বা সম্প্রদায় সম্পর্কে, ভালো বা মন্দ, কোনো রায় দেওয়ার অনুমতি এ আয়াতগুলো দেয় না। এগুলো কথা বলে পাঠকের সঙ্গেই: তার নিজের মুখ, নিজের চেষ্টা আর নিজের কথা নিয়ে।"
          },
          {
            "en": "Three practices follow. Look at this week's striving with one question: will I be content with it on that Day? Choose one act of obedience, or one kindness to another of Allah's servants, that costs something, since that is the striving the commentators name. And begin now to keep the tongue and the ear from what the Garden will not hold: falsehood, abuse, careless oaths and talk that hurts. The speech of the Garden, remembrance and peace, can be practised long before it is reached.",
            "bn": "এখান থেকে তিনটি অনুশীলন আসে। এ সপ্তাহের চেষ্টাগুলোর দিকে একটি প্রশ্ন নিয়ে তাকান: সেদিন কি এতে আমি সন্তুষ্ট থাকব? এমন একটি আনুগত্যের কাজ, কিংবা আল্লাহর কোনো বান্দার প্রতি এমন একটি সদাচরণ বেছে নিন, যাতে কিছু খরচ হয়, কারণ তাফসীরকারেরা এই চেষ্টার কথাই বলেন। আর এখন থেকেই জিভ ও কানকে দূরে রাখুন সেসব থেকে, যার জায়গা জান্নাতে নেই: মিথ্যা, গালি, হেলাফেলার কসম আর কষ্ট দেওয়া কথা। জিকির আর সালাম, জান্নাতের এই ভাষা সেখানে পৌঁছানোর অনেক আগে থেকেই চর্চা করা যায়।"
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
  },
  "88:23": {
    "sections": [
      {
        "h": {
          "en": "Four Words After a Comfort",
          "bn": "সান্ত্বনার পরে চার শব্দ"
        },
        "p": [
          {
            "en": "Illa man tawalla wa kafara: except whoever turns away and disbelieves. These four Arabic words follow directly on 88:21 and 88:22, where the Prophet ﷺ is told: so remind, you are only one who reminds; you are not a controller over them. The surah moves from what can be seen to what the Messenger is charged with, and where that charge stops. This verse is the hinge between the charge and the closing lines on punishment, return and reckoning in 88:24 to 88:26.",
            "bn": "ইল্লা মান তাওয়াল্লা ওয়া কাফার: তবে যে মুখ ফিরিয়ে নেয় ও কুফরি করে। আরবিতে মাত্র চারটি শব্দ। এর ঠিক আগে ৮৮:২১ ও ৮৮:২২ আয়াতে নবী ﷺ-কে বলা হয়েছে: তুমি উপদেশ দাও, তুমি তো কেবল একজন উপদেশদাতা; তুমি তাদের ওপর জবরদস্তিকারী নও। সূরা এবার চোখে দেখার জিনিস ছেড়ে এসেছে রাসূলের দায়িত্বের কথায়, আর সেই দায়িত্ব কোথায় গিয়ে থামে সে কথায়। এই আয়াত সেই দায়িত্ব আর শেষের আয়াতগুলোর মাঝখানের কবজা। শেষের আয়াতগুলো, অর্থাৎ ৮৮:২৪ থেকে ৮৮:২৬, কথা বলে শাস্তি, ফিরে যাওয়া আর হিসাব নিয়ে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the close of the surah as comfort for the Prophet ﷺ: he is a preacher who must keep preaching and need not worry beyond that, for it is Allah who will call the unbelievers to account. Al-Baghawi glosses this verse as whoever turns away and disbelieves after the reminding, and the Muyassar as whoever turned from the reminder and the admonition and persisted in disbelief. On these glosses the verse does not describe someone who never heard anything. It describes a response to a reminder that actually arrived.",
            "bn": "মাআরিফুল কুরআনের চোখে সূরার এই শেষাংশ নবী ﷺ-এর জন্য সান্ত্বনা। তিনি একজন প্রচারক, প্রচার চালিয়ে যাওয়াই তাঁর কাজ, এর বাইরে দুশ্চিন্তার কিছু নেই। অবিশ্বাসীদের ডেকে হিসাব নেবেন আল্লাহ নিজে। বাগাভী আয়াতটির ব্যাখ্যা দেন এভাবে: উপদেশ পৌঁছানোর পরও যে মুখ ফিরিয়ে নেয় ও কুফরি করে। মুয়াসসার বলে: যে উপদেশ আর নসিহত থেকে মুখ ফিরিয়েছে এবং কুফরিতে অটল থেকেছে। এই ব্যাখ্যাগুলো ধরলে আয়াতটি এমন কারও কথা বলছে না, যে কখনো কিছু শোনেনি। বলছে এমন এক সাড়ার কথা, যা এসেছে সত্যিই পৌঁছে যাওয়া উপদেশের জবাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Except, or Rather But?",
          "bn": "ব্যতিক্রম, নাকি 'তবে'?"
        },
        "p": [
          {
            "en": "The first question is grammatical: what does illa, except, cut out, and from what? Al-Qurtubi and al-Baghawi both call it istithna' munqati', a disconnected exception, one whose excepted case does not belong to the group named before it. Each then restates the verse with lakin, but: but whoever turns away from the admonition and the reminding, in al-Qurtubi's words; but whoever turns away and disbelieves after the reminding, in al-Baghawi's. As-Sa'di and the Muyassar use the same lakin without naming the term.",
            "bn": "প্রথম প্রশ্নটা ব্যাকরণের। ইল্লা, অর্থাৎ 'তবে' বা 'ছাড়া', কাকে বাদ দিচ্ছে, আর কোন দল থেকে? কুরতুবী ও বাগাভী দুজনেই একে বলেন ইস্তিসনা মুনকাতি, বিচ্ছিন্ন ব্যতিক্রম। এমন ব্যতিক্রমে যাকে বাদ দেওয়া হয়, সে আগের দলের অংশই নয়। দুজনেই এরপর আয়াতটা নতুন করে বলেন 'লাকিন' দিয়ে, যার মানে 'কিন্তু'। কুরতুবীর ভাষায়: কিন্তু যে নসিহত আর উপদেশ থেকে মুখ ফিরিয়ে নেয়। বাগাভীর ভাষায়: কিন্তু উপদেশ পৌঁছানোর পর যে মুখ ফিরিয়ে নেয় ও কুফরি করে। সা'দী ও মুয়াসসারও পরিভাষার নাম না নিয়ে একই লাকিন ব্যবহার করেন।"
          },
          {
            "en": "On this reading the verse removes no one from the Prophet's ﷺ duty to remind, nor from the statement that he is no controller. It opens a new thought: as for the one who turns away, Allah will punish him. In his comment on the next verse, al-Qurtubi offers as evidence for this interpretation, dalil hadha at-ta'wil, the reading of Ibn Mas'ud (RA): illa man tawalla wa kafara fa-innahu yu'adhdhibuhu Allah, with an added fa-innahu, so that it runs, whoever turns away and disbelieves, Allah will punish him. Only then, under it is said, does he turn to the view that the exception is connected.",
            "bn": "এভাবে পড়লে আয়াতটি কাউকে নবী ﷺ-এর উপদেশ দেওয়ার দায়িত্ব থেকে বাদ দেয় না, 'তুমি জবরদস্তিকারী নও' কথাটা থেকেও না। বরং নতুন একটা কথা শুরু করে: আর যে মুখ ফিরিয়ে নেয়, আল্লাহ তাকে শাস্তি দেবেন। পরের আয়াতের আলোচনায় কুরতুবী এই ব্যাখ্যার দলিল হিসেবে ইবন মাসউদ (রাঃ)-এর কিরাআত আনেন: ইল্লা মান তাওয়াল্লা ওয়া কাফারা ফাইন্নাহু ইউআযযিবুহুল্লাহ। এখানে বাড়তি আছে 'ফাইন্নাহু', ফলে অর্থ দাঁড়ায়: যে মুখ ফিরিয়ে নেয় ও কুফরি করে, আল্লাহ অবশ্যই তাকে শাস্তি দেবেন। এর পরেই কেবল তিনি 'বলা হয়' কথাটি দিয়ে সেই মতের দিকে যান, যেখানে ব্যতিক্রমটি সংযুক্ত।"
          },
          {
            "en": "Al-Qurtubi also reports that Ibn 'Abbas (RA) and Qatada read ala in place of illa, an opening particle that calls for attention. Read that way, man becomes conditional, whoever, and its answer is the next verse: whoever turns away and disbelieves, Allah will punish him. The grammar changes, but on each of these readings the warning falls on whoever turns away.",
            "bn": "কুরতুবী আরও জানান, ইবন আব্বাস (রাঃ) ও কাতাদা ইল্লা-র জায়গায় পড়েছেন 'আলা', যা মনোযোগ টানতে বাক্যের শুরুতে বসে। এভাবে পড়লে 'মান' হয়ে যায় শর্তবাচক, অর্থাৎ 'যে-ই'। আর তার জবাব পরের আয়াত: যে-ই মুখ ফিরিয়ে নেয় ও কুফরি করে, আল্লাহ তাকে শাস্তি দেবেন। বাক্যের গঠন এতে বদলায়। কিন্তু এর কোনো পাঠেই সতর্কবাণী মুখ ফেরানো মানুষটির ওপর থেকে সরে না।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Leaves Two Roads",
          "bn": "তাবারীর রেখে যাওয়া দুই পথ"
        },
        "p": [
          {
            "en": "At-Tabari does not choose. The words, he says, point in two directions. In the first, the exception is taken from those the Prophet ﷺ was to remind: remind your people, O Muhammad, except whoever of them turns away from you, shuns the signs of Allah and so disbelieves. Illa then cuts someone out of the reminding, even though the reminded were never named in the verse. He compares it to saying: he went and called, except the one whose answer could not be hoped for, meaning he called the people except that one.",
            "bn": "তাবারী কোনো একটি বেছে নেন না। তাঁর ভাষায়, শব্দগুলো দুই দিকে যেতে পারে। প্রথম পথে ব্যতিক্রমটি নেওয়া হয়েছে তাদের মধ্য থেকে, যাদের উপদেশ দেওয়ার কথা নবী ﷺ-কে বলা হয়েছে। অর্থ দাঁড়ায়: হে মুহাম্মাদ, তোমার কওমকে উপদেশ দাও, তবে তাদের মধ্যে যে তোমার থেকে মুখ ফিরিয়ে নেয়, আল্লাহর আয়াত এড়িয়ে চলে আর এভাবে কুফরি করে, সে বাদে। তাহলে ইল্লা কাউকে উপদেশের আওতা থেকে বাদ দিচ্ছে, যদিও আয়াতে উপদেশপ্রাপ্তদের নাম আলাদা করে বলা হয়নি। তাবারী তুলনা দেন এমন এক কথার সঙ্গে: লোকটি গিয়ে ডাকল, তবে যার সাড়া দেওয়ার আশা নেই তাকে ছাড়া। মানে, সে সবাইকে ডাকল, শুধু ওই একজনকে বাদ দিয়ে।"
          },
          {
            "en": "In the second, the exception is cut off from what precedes: you are not a controller over them; but whoever turns away and disbelieves, Allah will punish him. At-Tabari then supplies a test. A disconnected exception is one with which inna sits well; if inna fits, the exception is disconnected, and if it does not, the exception is connected and sound, as in: the people travelled except Zayd. He sets out both roads and leaves them standing. The fa-innahu of Ibn Mas'ud's reading, as al-Qurtubi relays it, contains the very particle on which at-Tabari's test turns.",
            "bn": "দ্বিতীয় পথে ব্যতিক্রমটি আগের কথা থেকে বিচ্ছিন্ন। অর্থ: তুমি তাদের ওপর জবরদস্তিকারী নও; কিন্তু যে মুখ ফিরিয়ে নেয় ও কুফরি করে, আল্লাহ তাকে শাস্তি দেবেন। এরপর তাবারী একটা পরীক্ষাও বাতলে দেন। বিচ্ছিন্ন ব্যতিক্রমের সঙ্গে 'ইন্না' শব্দটি মানিয়ে যায়। মানিয়ে গেলে ব্যতিক্রমটি বিচ্ছিন্ন। না মানালে সেটি সংযুক্ত ও যথার্থ ব্যতিক্রম, যেমন: লোকেরা রওনা হলো, যায়দ ছাড়া। দুটি পথই তিনি তুলে ধরেন, কোনোটিকে বাতিল করেন না। লক্ষ করার মতো ব্যাপার হলো, কুরতুবীর উদ্ধৃত ইবন মাসউদ (রাঃ)-এর কিরাআতের 'ফাইন্নাহু'-তে ঠিক সেই শব্দটিই আছে, যার ওপর তাবারীর পরীক্ষা দাঁড়িয়ে।"
          },
          {
            "en": "Al-Qurtubi records a third attachment under it is said: the exception is connected, but to the words just before it. The meaning becomes: you are not set in control over them, except over whoever turns away and disbelieves, for over him you are given authority through jihad, and Allah will afterwards punish him with the greatest punishment. Al-Qurtubi adds that on this reckoning there is no abrogation in the verse. That remark leads to the question of 88:22.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে তৃতীয় আরেকটি সংযোগের কথা লেখেন। এ মতে ব্যতিক্রমটি সংযুক্ত, তবে ঠিক আগের কথাটির সঙ্গে। অর্থ দাঁড়ায়: তুমি তাদের ওপর কর্তৃত্বশীল নও, তবে যে মুখ ফিরিয়ে নেয় ও কুফরি করে তার ওপর ছাড়া। কারণ তার ওপর তোমাকে জিহাদের মাধ্যমে কর্তৃত্ব দেওয়া হয়েছে, আর এরপর আল্লাহ তাকে মহাশাস্তি দেবেন। কুরতুবী যোগ করেন, এই হিসাবে আয়াতে কোনো নাসখ বা রহিতকরণ নেই। এই মন্তব্য আমাদের নিয়ে যায় ৮৮:২২ আয়াতের প্রশ্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "Was the Controller Clause Lifted?",
          "bn": "'জবরদস্তিকারী নও' কি রহিত?"
        },
        "p": [
          {
            "en": "Lasta 'alayhim bi-musaytir: you are not a controller over them. At-Tabari glosses it as you are not set over them with power, nor a tyrant who drives them to what you want; leave them to Me and to My judgement. He reports from Ibn 'Abbas (RA) and Mujahid: not a tyrant, jabbar, and from Qatada: leave My servants to Me. Ibn Kathir adds from Ibn Zayd: it is not you who forces them to believe. As-Sa'di reads it as not appointed over their deeds; once you have done your part, no blame falls on you.",
            "bn": "লাসতা আলাইহিম বিমুসাইতির: তুমি তাদের ওপর জবরদস্তিকারী নও। তাবারী এর ব্যাখ্যা দেন এভাবে: তুমি তাদের ওপর ক্ষমতা দিয়ে বসানো কেউ নও, এমন জবরদস্তিকারীও নও যে নিজের ইচ্ছামতো তাদের চালাবে। তাদের আমার হাতে ছেড়ে দাও, আমার ফয়সালার হাতে। ইবন আব্বাস (রাঃ) ও মুজাহিদ থেকে তিনি বর্ণনা করেন: অর্থাৎ জাব্বার নও। কাতাদা থেকে: আমার বান্দাদের আমার কাছে সঁপে দাও। ইবন কাসীর যোগ করেন ইবন যায়দের কথা: তুমি এমন কেউ নও যে তাদের ঈমান আনতে বাধ্য করবে। সা'দীর পাঠে: তাদের আমলের দায়িত্ব দিয়ে তোমাকে পাঠানো হয়নি। নিজের কাজটুকু করে ফেললে এরপর তোমার ওপর আর কোনো দোষ নেই।"
          },
          {
            "en": "Whether this was later abrogated is where the sources part. At-Tabari, with his chain, reports Ibn Zayd: after this came the command to strive against the disbelievers and the hypocrites and be harsh with them (9:73, 66:9), and to sit in wait for them at every place of ambush (9:5), and it abrogated you are not a controller over them; but the reminding stands and was not abrogated, and he recites 51:55: and remind, for the reminder benefits the believers. Al-Qurtubi says on 88:22 that the verse of the sword then abrogated it, and al-Baghawi that the verse of fighting did.",
            "bn": "পরে এটি রহিত হয়েছে কি না, এখানে এসে সূত্রগুলো আলাদা হয়ে যায়। তাবারী নিজের সনদে ইবন যায়দের কথা আনেন: এর পরে এসেছে কাফির ও মুনাফিকদের বিরুদ্ধে জিহাদ করার এবং তাদের প্রতি কঠোর হওয়ার নির্দেশ, যে শব্দগুলো আছে ৯:৭৩ ও ৬৬:৯ আয়াতে। আরও এসেছে ৯:৫ আয়াতের নির্দেশ, প্রতিটি ঘাঁটিতে তাদের জন্য ওত পেতে বসার। এগুলো 'তুমি তাদের ওপর জবরদস্তিকারী নও' কথাটি রহিত করেছে। তবে উপদেশ দেওয়ার কাজটি, ইবন যায়দ যোগ করেন, যেমন ছিল তেমনই আছে, রহিত হয়নি। প্রমাণ হিসেবে তিনি ৫১:৫৫ পড়েন: আর উপদেশ দাও, কেননা উপদেশ মুমিনদের উপকারে আসে। কুরতুবী ৮৮:২২ আয়াতের আলোচনায় নিজেই বলেন, পরে তরবারির আয়াত একে রহিত করেছে। বাগাভী বলেন, কিতালের আয়াত একে রহিত করেছে।"
          },
          {
            "en": "Against this stands the connected reading al-Qurtubi records, which ends with no abrogation in the verse. At-Tabari relays Ibn Zayd's view without adding a verdict of his own, and Ibn Kathir and as-Sa'di do not mention abrogation at this verse. Both positions are in the sources, and this page does not decide between them. Even Ibn Zayd keeps one thing standing: whatever he held lifted, the duty to remind was not, and that duty is the command 88:21 opens with.",
            "bn": "এর বিপরীতে আছে কুরতুবীর লেখা সেই সংযুক্ত পাঠ, যার শেষ কথা: আয়াতে কোনো রহিতকরণ নেই। তাবারী ইবন যায়দের মত বর্ণনা করেন, নিজের কোনো রায় যোগ করেন না। আর ইবন কাসীর ও সা'দী এই আয়াতে রহিতকরণের কথা তোলেনই না। দুটি অবস্থানই সূত্রগুলোতে আছে, এই লেখা তাদের মধ্যে ফয়সালা করে না। তবে একটি জায়গায় ইবন যায়দও একমত। তাঁর মতে যা-ই রহিত হোক, উপদেশ দেওয়ার দায়িত্ব রহিত হয়নি। আর ৮৮:২১ আয়াত শুরুই হয়েছে সেই নির্দেশ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at a Hadith's End",
          "bn": "হাদীসের শেষে তিলাওয়াত"
        },
        "p": [
          {
            "en": "One sound narration is tied to this passage, though to 88:21 and 88:22 rather than to the exception itself. Muslim records it in his Sahih (Muslim 21), in the Book of Faith, from Jabir (RA): the Messenger of Allah ﷺ said: I have been commanded that I should fight against people till they declare that there is no god but Allah, and when they profess it that there is no god but Allah, their blood and riches are guaranteed protection on my behalf except where it is justified by law, and their affairs rest with Allah. Then he recited: innama anta mudhakkir, lasta 'alayhim bi-musaytir.",
            "bn": "একটি সহীহ বর্ণনা এই অংশের সঙ্গে যুক্ত, তবে ব্যতিক্রমের আয়াতটির সঙ্গে নয়, ৮৮:২১ ও ৮৮:২২ আয়াতের সঙ্গে। ইমাম মুসলিম তাঁর সহীহ গ্রন্থের ঈমান অধ্যায়ে (মুসলিম ২১) জাবির (রাঃ) থেকে এটি বর্ণনা করেছেন। রাসূলুল্লাহ ﷺ বলেছেন: আমাকে আদেশ দেওয়া হয়েছে মানুষের সঙ্গে লড়াই করতে, যতক্ষণ না তারা বলে, আল্লাহ ছাড়া কোনো ইলাহ নেই। যখন তারা বলে, আল্লাহ ছাড়া কোনো ইলাহ নেই, তখন তারা আমার কাছ থেকে নিজেদের রক্ত ও সম্পদ সুরক্ষিত করে নেয়, তবে এর ন্যায্য হক ছাড়া। আর তাদের হিসাব আল্লাহর ওপর। এরপর তিনি তিলাওয়াত করলেন: ইন্নামা আনতা মুযাক্কির, লাসতা আলাইহিম বিমুসাইতির।"
          },
          {
            "en": "At-Tabari and Ibn Kathir both place it under 88:22. At-Tabari gives it through several chains from Abu az-Zubayr from Jabir, and in one of them it is Abu az-Zubayr who says: then he recited. Ibn Kathir notes that Muslim, at-Tirmidhi and an-Nasa'i carry it with this addition of the verse, and that the hadith is found in both Sahihs from Abu Hurayra without mention of the verse. Its Arabic closes on hisabuhum 'ala Allah, their reckoning is upon Allah; the surah closes on 'alayna hisabahum, upon Us is their reckoning (88:26).",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই হাদীসটি এনেছেন ৮৮:২২ আয়াতের আলোচনায়। তাবারী একাধিক সনদে আবুয যুবাইরের মাধ্যমে জাবির (রাঃ) থেকে এটি বর্ণনা করেন। তার একটি সনদে 'এরপর তিনি তিলাওয়াত করলেন' কথাটি আবুয যুবাইরের নিজের। ইবন কাসীর জানান, মুসলিম, তিরমিযী ও নাসাঈ আয়াতের এই সংযোজনসহ হাদীসটি এনেছেন। আর বুখারী ও মুসলিম দুটিতেই হাদীসটি আছে আবু হুরায়রা (রাঃ) থেকে, তবে আয়াতের উল্লেখ ছাড়া। হাদীসের আরবি শেষ হয় 'হিসাবুহুম আলাল্লাহ' দিয়ে, তাদের হিসাব আল্লাহর ওপর। আর সূরা শেষ হয় 'আলাইনা হিসাবাহুম' দিয়ে, তাদের হিসাব নেওয়া আমারই দায়িত্ব (৮৮:২৬)।"
          },
          {
            "en": "The hadith is quoted as the collector and these commentators give it, a saying after which the verses were recited, and nothing further is built on it; quoting it licenses nothing against any living person or community. No narration in the fetched sources is attached to 88:23 itself. Ibn Kathir relays one at 88:24 from Ahmad alone, as he himself notes, with no grading; it is only mentioned here.",
            "bn": "হাদীসটি এখানে উদ্ধৃত হয়েছে ঠিক যেভাবে সংকলক আর এই মুফাসসিররা এনেছেন: এমন একটি বাণী হিসেবে, যার পরে আয়াতগুলো তিলাওয়াত করা হয়েছিল। এর ওপর আর কিছু দাঁড় করানো হয়নি। এটি উদ্ধৃত করা কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। সংগ্রহ করা সূত্রগুলোতে খোদ ৮৮:২৩ আয়াতের সঙ্গে কোনো বর্ণনা যুক্ত পাওয়া যায়নি। ইবন কাসীর ৮৮:২৪ আয়াতে ইমাম আহমাদ থেকে একটি বর্ণনা আনেন এবং জানান, কেবল আহমাদই এটি বর্ণনা করেছেন। সেখানে এর কোনো মান নির্ধারণ করা হয়নি। তাই এখানে শুধু এর উল্লেখটুকু থাকল, এর ওপর কিছু দাঁড় করানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Back Turned, Then Denial",
          "bn": "পিঠ ফেরানো, তারপর অস্বীকার"
        },
        "p": [
          {
            "en": "What do the two verbs cover? Ibn Kathir divides them between deed and belief: tawalla, he turned away from acting by its pillars; kafara, he disbelieved in the truth with his heart and his tongue. He sets beside it 75:31 and 75:32: so he neither affirmed the truth nor prayed, but he denied and turned away. There too the turning away stands next to a refusal that is both inward and outward, and the prayer left unprayed stands beside the truth left unaffirmed.",
            "bn": "ক্রিয়া দুটি কতটা জায়গা জুড়ে? ইবন কাসীর এদের ভাগ করেন আমল আর বিশ্বাসের মধ্যে। তাওয়াল্লা: সে তার রুকন অনুযায়ী আমল করা থেকে মুখ ফিরিয়ে নিয়েছে। কাফারা: সে অন্তর ও মুখ দিয়ে সত্যকে অস্বীকার করেছে। পাশে তিনি রাখেন ৭৫:৩১ ও ৭৫:৩২ আয়াত: সে সত্যকে মানেনি, নামাযও পড়েনি; বরং অস্বীকার করেছে ও মুখ ফিরিয়ে নিয়েছে। সেখানেও মুখ ফেরানোর পাশেই আছে এমন এক প্রত্যাখ্যান, যা ভেতরেরও, বাইরেরও। না-পড়া নামায সেখানে দাঁড়িয়ে আছে না-মানা সত্যের ঠিক পাশে।"
          },
          {
            "en": "The others place the turning a little differently. As-Sa'di: he turned from obedience and disbelieved in Allah. The Muyassar: he turned from the reminding and the admonition and persisted in his disbelief. Al-Qurtubi: he turned from the admonition and the reminding. Al-Baghawi: he turned away and disbelieved after the reminding. Read together, they make the turning a refusal of something offered: the pillars of practice, obedience, an admonition actually delivered. The verse names a response to what was offered, not a lineage, a land or a group.",
            "bn": "অন্যরা মুখ ফেরানোর জায়গাটা একটু ভিন্নভাবে দেখান। সা'দী: সে আনুগত্য থেকে মুখ ফিরিয়েছে আর আল্লাহর সঙ্গে কুফরি করেছে। মুয়াসসার: সে উপদেশ ও নসিহত থেকে মুখ ফিরিয়েছে এবং কুফরিতে অটল থেকেছে। কুরতুবী: সে নসিহত ও উপদেশ থেকে মুখ ফিরিয়েছে। বাগাভী: উপদেশ পৌঁছানোর পর সে মুখ ফিরিয়েছে ও কুফরি করেছে। সব মিলিয়ে পড়লে মুখ ফেরানো মানে যা সামনে রাখা হয়েছিল, তা ফিরিয়ে দেওয়া। সেটা হতে পারে আমলের রুকন, আনুগত্য, কিংবা সত্যিই পৌঁছে যাওয়া কোনো নসিহত। আয়াতটি নাম দেয় একটি সাড়ার, কোনো বংশ, দেশ বা দলের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Called the Greatest",
          "bn": "কেন সবচেয়ে বড় শাস্তি"
        },
        "p": [
          {
            "en": "The exception finds its answer in 88:24: then Allah will punish him with the greatest punishment. At-Tabari names it the punishment of Jahannam. As-Sa'di calls it severe and lasting, and the Muyassar the severe punishment in the Fire. Al-Qurtubi and al-Baghawi explain the word greatest by comparison: it is called the greater because those addressed had already been punished in this world with hunger, drought, captivity and killing. That describes what these two commentators say befell those addressed, and it licenses nothing against any living person or community.",
            "bn": "ব্যতিক্রমের জবাব আসে ৮৮:২৪ আয়াতে: আল্লাহ তাকে মহাশাস্তি দেবেন। তাবারী একে বলেন জাহান্নামের শাস্তি। সা'দী বলেন, কঠিন ও স্থায়ী। মুয়াসসার বলে, আগুনে কঠিন শাস্তি। কুরতুবী ও বাগাভী 'আকবার', অর্থাৎ সবচেয়ে বড়, শব্দটা বোঝান তুলনা দিয়ে। একে বড় বলা হয়েছে, কারণ যাদের সম্বোধন করা হয়েছিল তারা দুনিয়াতেই ক্ষুধা, দুর্ভিক্ষ, বন্দিত্ব আর হত্যার শাস্তি ভোগ করেছিল। এটা কেবল সেই বর্ণনা, যা এই দুই মুফাসসির সম্বোধিত লোকদের সম্পর্কে দেন। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটা কোনো কিছুর অনুমতি দেয় না।"
          },
          {
            "en": "Then 88:25 and 88:26 close the surah: indeed to Us is their return; then indeed upon Us is their reckoning. Ibn Kathir glosses the return as their place of return and their resort, and the reckoning as: We will reckon their deeds and requite them for them; if they did good they receive good, and if evil, evil. So the hand that punishes in 88:24 is not the reminder's. The passage that told the Prophet ﷺ he was no controller ends with two verses that put both the return and the reckoning with Allah.",
            "bn": "এরপর ৮৮:২৫ ও ৮৮:২৬ আয়াত দিয়ে সূরা শেষ হয়: নিশ্চয় আমার কাছেই তাদের ফিরে আসা; তারপর নিশ্চয় তাদের হিসাব নেওয়া আমারই দায়িত্ব। ইবন কাসীর ফিরে আসার ব্যাখ্যা দেন: তাদের ফেরার জায়গা, তাদের শেষ আশ্রয়। আর হিসাবের ব্যাখ্যা: আমি তাদের আমলের হিসাব নেব এবং সে অনুযায়ী প্রতিদান দেব। ভালো করলে ভালো পাবে, মন্দ করলে মন্দ। তাহলে ৮৮:২৪ আয়াতে শাস্তি যে হাতে, তা উপদেশদাতার হাত নয়। যে অংশটি নবী ﷺ-কে বলেছিল তিনি জবরদস্তিকারী নন, তা শেষ হয় এমন দুটি আয়াতে, যা ফিরে আসা আর হিসাব দুটোই রাখে আল্লাহর কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verdict Is Not Ours",
          "bn": "রায় আমাদের হাতে নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes one who turns away and disbelieves after a reminder has reached him, and it places his punishment, his return and his reckoning with Allah. It names no one, and it licenses nothing against any living person or community. No reader is made a judge of who has turned away, and no one is handed the punishment that the next verse reserves to Allah. The disagreement over abrogation set out above is reported as a difference among the commentators; this page draws no instruction from it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে এমন একজনকে, যার কাছে উপদেশ পৌঁছানোর পরও সে মুখ ফিরিয়ে নেয় ও কুফরি করে। আর তার শাস্তি, তার ফিরে যাওয়া, তার হিসাব, সবকিছু রাখে আল্লাহর কাছে। আয়াতটি কারও নাম নেয় না। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। কে মুখ ফিরিয়েছে, তার বিচারক কোনো পাঠককে বানানো হয়নি। পরের আয়াত যে শাস্তি আল্লাহর জন্য রেখেছে, তা কারও হাতে তুলে দেওয়া হয়নি। রহিতকরণ নিয়ে ওপরের মতভেদটি এখানে এসেছে মুফাসসিরদের মতপার্থক্য হিসেবে। এই লেখা তা থেকে কোনো নির্দেশ বের করে না।"
          },
          {
            "en": "What the verse does hand its reader is two roles. To whoever reminds: remind, speak clearly, and do not mistake yourself for the controller of other hearts. To whoever is reminded: the turning the verse describes begins with a back turned on a reminder that arrived. The surah that opened by asking whether the news had reached you (88:1) ends by telling everyone where they will return, and who will take the account.",
            "bn": "আয়াতটি পাঠকের হাতে যা তুলে দেয়, তা দুটি ভূমিকা। যিনি উপদেশ দেন, তাঁর জন্য: উপদেশ দিন, স্পষ্ট করে বলুন, কিন্তু নিজেকে অন্যের অন্তরের নিয়ন্ত্রক ভাববেন না। আর যাকে উপদেশ দেওয়া হয়, তার জন্য: আয়াত যে মুখ ফেরানোর কথা বলে, তার শুরু পৌঁছে যাওয়া কোনো উপদেশের দিকে পিঠ ফেরানো দিয়ে। যে সূরা শুরু হয়েছিল এই প্রশ্নে, তোমার কাছে কি সেই খবর পৌঁছেছে (৮৮:১), তা শেষ হয় সবাইকে জানিয়ে: কোথায় তারা ফিরবে, আর হিসাব নেবেন কে।"
          }
        ]
      }
    ]
  }
});
