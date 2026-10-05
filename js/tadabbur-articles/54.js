/**
 * Tadabbur long-form articles — surah 54.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "54:1": {
    "sections": [
      {
        "h": {
          "en": "Recited at Both Eids",
          "bn": "দুই ঈদের নামাজের সূরা"
        },
        "p": [
          {
            "en": "Surah al-Qamar opens with four Arabic words: iqtarabati s-sa'atu wa-nshaqqa l-qamar, the Hour has drawn near, and the moon has split. Sahih Muslim preserves a report of how the Prophet ﷺ used this surah. 'Umar ibn al-Khattab asked Abu Waqid al-Laythi what the Messenger of Allah ﷺ used to recite at al-Adha and al-Fitr, and he said: he used to recite in them Qaf, wa-l-Qur'ani l-majid, and Iqtarabati s-sa'atu wa-nshaqqa l-qamar. Muslim gives it in his Sahih, with no separate grading of his own.",
            "bn": "সূরা আল-কামার শুরু হয় আরবি চারটি শব্দে: ইকতারাবাতিস সাআতু ওয়ানশাক্কাল কামার। কিয়ামত কাছে এসে গেছে, আর চাঁদ ফেটে গেছে। নবী ﷺ এ সূরা কোথায় পড়তেন, সহীহ মুসলিমে তার একটি বর্ণনা আছে। উমর ইবনুল খাত্তাব (রাঃ) আবু ওয়াকিদ আল-লাইসী (রাঃ)-কে জিজ্ঞেস করলেন, ঈদুল আযহা ও ঈদুল ফিতরে আল্লাহর রাসূল ﷺ কী পড়তেন। তিনি বললেন, দুই ঈদে তিনি পড়তেন কাফ, ওয়াল কুরআনিল মাজীদ, আর ইকতারাবাতিস সাআতু ওয়ানশাক্কাল কামার। ইমাম মুসলিম বর্ণনাটি তাঁর সহীহ গ্রন্থে এনেছেন, আলাদা কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "Ibn Kathir opens his commentary on the surah with this report and gives his own reason for the choice: the Prophet ﷺ recited the two surahs at great gatherings because they hold promise and warning, the beginning of creation and its return, tawhid, the affirmation of prophethood and other great aims. Ma'arif al-Qur'an points to the link with what comes before. Surah an-Najm closed on azifati l-azifa, the approaching has approached, in 53:57, and this surah opens on the same note, then follows it with one of its proofs.",
            "bn": "ইবন কাসীর এ সূরার তাফসীর শুরু করেন এই বর্ণনা দিয়েই, আর নিজের পক্ষ থেকে কারণটাও বলেন। বড় বড় সমাবেশে নবী ﷺ এ দুই সূরা পড়তেন, কেননা এগুলোতে আছে প্রতিশ্রুতি ও সতর্কবাণী, সৃষ্টির শুরু ও পুনরায় সৃষ্টি, তাওহীদ, নবুওয়াতের প্রমাণ এবং আরও বড় বড় উদ্দেশ্য। মাআরিফুল কুরআন আগের সূরার সঙ্গে সম্পর্কটা ধরিয়ে দেয়। সূরা আন-নাজম শেষ হয়েছিল আযিফাতিল আযিফা দিয়ে, অর্থাৎ আসন্ন বিষয়টি আসন্ন হয়েছে (৫৩:৫৭)। এ সূরা শুরু হয় সেই একই সুরে, তারপর তার পক্ষে একটি প্রমাণ সামনে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb of Closing In",
          "bn": "কাছে এসে পড়ার ক্রিয়া"
        },
        "p": [
          {
            "en": "At-Tabari explains the first verb: iqtarabat is on the pattern ifta'alat, from qurb, nearness, and it means that the Hour in which the Resurrection stands has drawn close. He reads the sentence as a warning from Allah to His servants that the Resurrection is near and the passing of this world is close, and as a command to make ready for its terrors before they fall upon people while they are heedless and distracted. Al-Qurtubi glosses iqtarabat simply as qarubat, it came near, like azifati l-azifa.",
            "bn": "প্রথম ক্রিয়াটি তাবারী খুলে বলেন। ইকতারাবাত শব্দটি ইফতাআলাত ছাঁচে গড়া, এসেছে কুরব থেকে, যার মানে নৈকট্য। অর্থ দাঁড়ায়: যে মুহূর্তে কিয়ামত কায়েম হবে, সেটি কাছে চলে এসেছে। তাবারীর মতে বাক্যটি বান্দাদের প্রতি আল্লাহর সতর্কবাণী। কিয়ামত কাছে, দুনিয়ার বিদায়ও কাছে। সেই সঙ্গে এটি একটি আদেশও: মানুষ যখন উদাসীন আর অন্যমনস্ক, তখন কিয়ামতের বিভীষিকা হঠাৎ ঘাড়ে এসে পড়ার আগেই প্রস্তুতি নাও। কুরতুবী ইকতারাবাতের অর্থ করেন সংক্ষেপে কারুবাত, কাছে এসেছে, ঠিক আযিফাতিল আযিফার মতো।"
          },
          {
            "en": "How can something announced so long ago be called near? Al-Qurtubi answers that it is near in relation to what has already passed, since most of the world's span is over. Ibn Kathir sets the verse beside two others spoken in the same voice: the command of Allah has come, so do not seek to hasten it, 16:1; and mankind's reckoning has drawn near while they turn away in heedlessness, 21:1. As-Sa'di adds the human side: the Hour's time has come, and still the deniers stayed in denial, unprepared for it.",
            "bn": "এত আগে ঘোষিত একটি বিষয়কে কাছে বলা হয় কীভাবে? কুরতুবীর জবাব: যা পেরিয়ে গেছে তার তুলনায় এটি কাছে, কারণ দুনিয়ার আয়ুর বেশির ভাগই ফুরিয়ে গেছে। ইবন কাসীর আয়াতটিকে একই সুরের আরও দুটি আয়াতের পাশে রাখেন। একটি ১৬:১, আল্লাহর আদেশ এসে গেছে, তাই তা নিয়ে তাড়াহুড়া কোরো না। অন্যটি ২১:১, মানুষের হিসাবের সময় কাছে এসে গেছে, অথচ তারা উদাসীন হয়ে মুখ ফিরিয়ে আছে। সাদী মানুষের দিকটা যোগ করেন। কিয়ামতের সময় হয়ে এসেছে, তবু অস্বীকারকারীরা অস্বীকারেই অটল থেকেছে, তার জন্য কোনো প্রস্তুতি নেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign Asked For",
          "bn": "চেয়ে নেওয়া নিদর্শন"
        },
        "p": [
          {
            "en": "Then the second clause, wa-nshaqqa l-qamar, and the moon split. At-Tabari says it means the moon was cleft, and that this was, as reported, in the time of the Messenger of Allah ﷺ while he was in Makkah, before his emigration to Madinah. The disbelievers of Makkah had asked him for a sign, and he showed them the splitting of the moon as proof of the truth of his words and the reality of his prophethood. When they saw it, at-Tabari continues, they turned away and denied, and said: a continuing magic; Muhammad has bewitched us.",
            "bn": "এরপর দ্বিতীয় অংশ, ওয়ানশাক্কাল কামার: আর চাঁদ ফেটে গেছে। তাবারী বলেন, এর মানে চাঁদ দুই ভাগ হয়ে গিয়েছিল। বর্ণনা অনুযায়ী ঘটনাটি ঘটেছিল আল্লাহর রাসূল ﷺ-এর জীবদ্দশায়, তিনি তখন মক্কায়, মদীনায় হিজরতের আগে। মক্কার কাফেররা তাঁর কাছে একটি নিদর্শন চেয়েছিল। তাঁর কথার সত্যতা আর নবুওয়াতের বাস্তবতার প্রমাণ হিসেবে তিনি তাদের চাঁদ ফেটে যাওয়া দেখালেন। তাবারী আরও বলেন, দেখার পর তারা মুখ ফিরিয়ে নিল, অস্বীকার করল, আর বলল: এ তো চলমান যাদু, মুহাম্মাদ আমাদের যাদু করেছে।"
          },
          {
            "en": "The other commentators fetched for this verse tell it in their own words. The Muyassar says the moon split into two halves when the disbelievers of Makkah asked the Prophet ﷺ for a sign, so he called on Allah, and Allah showed them that sign. As-Sa'di says that when the deniers asked him for something beyond the ordinary course of things to show his truthfulness, he pointed to the moon by Allah's leave, and it split into two halves, one on the mountain of Abu Qubays and one on Qu'ayqi'an, while the idolaters and others watched.",
            "bn": "এ আয়াতের অন্য তাফসীরকারেরাও নিজ নিজ ভাষায় ঘটনাটি বলেন। মুয়াসসার বলে, মক্কার কাফেররা যখন নবী ﷺ-এর কাছে নিদর্শন চাইল, তিনি আল্লাহর কাছে দোয়া করলেন, আর আল্লাহ তাদের সেই নিদর্শন দেখালেন। চাঁদ দুই টুকরো হয়ে গেল। সাদীর বর্ণনায়, অস্বীকারকারীরা তাঁর সত্যবাদিতার প্রমাণ হিসেবে স্বাভাবিক নিয়মের বাইরের কিছু দেখতে চেয়েছিল। তিনি আল্লাহর অনুমতিতে চাঁদের দিকে ইশারা করলেন। চাঁদ দুই খণ্ড হয়ে গেল, একটি খণ্ড আবু কুবাইস পাহাড়ের ওপর, অন্যটি কুআইকিআন পাহাড়ের ওপর। মুশরিকরা আর অন্যরা তখন তা নিজের চোখে দেখছিল।"
          },
          {
            "en": "As-Sa'di calls it a great sign in the upper world, which no creature could fake or conjure as an illusion. Al-Baghawi records from Muqatil that the moon split and then joined together again afterwards. At-Tabari carries a report from Ibn Mas'ud that they were with the Prophet ﷺ at Mina when it happened, and others that place it in Makkah; Ma'arif al-Qur'an's summary has him sitting at Mina in Makkah. Al-Qurtubi adds that it came at the Prophet's ﷺ request to Allah, at the time of the challenge.",
            "bn": "সাদী একে বলেন ঊর্ধ্বজগতের এক মহান নিদর্শন, যা কোনো সৃষ্টির পক্ষে নকল করা বা চোখের ভ্রম বানিয়ে দেখানো সম্ভব নয়। বাগাভী মুকাতিলের সূত্রে আনেন, চাঁদ ফেটে গিয়েছিল, পরে আবার জোড়া লেগে যায়। তাবারী ইবন মাসউদ (রাঃ)-এর একটি বর্ণনা আনেন যে ঘটনার সময় তাঁরা নবী ﷺ-এর সঙ্গে মিনায় ছিলেন। অন্য বর্ণনাগুলোতে জায়গাটি মক্কা। মাআরিফুল কুরআনের সারসংক্ষেপে তিনি তখন মক্কার মিনায় বসে ছিলেন। কুরতুবী যোগ করেন, চ্যালেঞ্জের মুহূর্তে নবী ﷺ আল্লাহর কাছে চেয়েছিলেন বলেই এ নিদর্শন এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Narrations from al-Bukhari",
          "bn": "বুখারীর দুটি বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Baghawi does not only paraphrase. He quotes, with al-Bukhari's own chains, two of the reports in the Sahih, and Ibn Kathir cites both as well. The first is from Ibn Mas'ud, in Sahih al-Bukhari, 4864: 'The moon split in the time of the Messenger of Allah ﷺ into two parts, one part above the mountain and one part below it, and the Messenger of Allah ﷺ said: Bear witness.' Being in al-Bukhari's Sahih, it carries no separate grading from its collector.",
            "bn": "বাগাভী শুধু নিজের ভাষায় ঘটনা বলেই থামেন না। ইমাম বুখারীর নিজস্ব সনদসহ তিনি সহীহ বুখারীর দুটি বর্ণনা উদ্ধৃত করেন, আর ইবন কাসীরও দুটোই আনেন। প্রথমটি ইবন মাসউদ (রাঃ)-এর, সহীহ বুখারী, ৪৮৬৪: 'আল্লাহর রাসূল ﷺ-এর যুগে চাঁদ ফেটে দুই ভাগ হয়ে গেল, একটি ভাগ পাহাড়ের ওপরে, আরেকটি তার নিচে। তখন আল্লাহর রাসূল ﷺ বললেন: তোমরা সাক্ষী থাকো।' বর্ণনাটি সহীহ বুখারীর অন্তর্ভুক্ত, সংকলক আলাদা করে এর কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "The second is from Anas ibn Malik, in Sahih al-Bukhari, 3868: 'The people of Makkah asked the Messenger of Allah ﷺ to show them a sign, so he showed them the moon in two halves, until they saw Hira' between them.' Al-Baghawi adds, from Shayban's route through Qatada, the wording that he showed them the splitting of the moon marratayn, a word al-Qurtubi and at-Tabari also carry. Ma'arif al-Qur'an, citing Bayan al-Qur'an, says that some reports speak of the miracle occurring twice, but the more authentic reports confirm it occurred once.",
            "bn": "দ্বিতীয়টি আনাস ইবন মালিক (রাঃ)-এর, সহীহ বুখারী, ৩৮৬৮: 'মক্কাবাসীরা আল্লাহর রাসূল ﷺ-এর কাছে চাইল, তিনি যেন তাদের একটি নিদর্শন দেখান। তখন তিনি তাদের চাঁদকে দুই খণ্ড করে দেখালেন, এমনকি তারা দুই খণ্ডের মাঝখানে হেরা পাহাড় দেখতে পেল।' বাগাভী কাতাদা থেকে শাইবানের সূত্রে আরেকটি ভাষ্যও আনেন, যেখানে আছে মাররাতাইন শব্দটি: তিনি তাদের চাঁদ ফাটা দেখিয়েছিলেন দুবার। কুরতুবী আর তাবারীর কাছেও শব্দটি আছে। মাআরিফুল কুরআন বায়ানুল কুরআনের বরাতে বলে, কিছু বর্ণনায় দুবারের কথা থাকলেও অধিকতর বিশুদ্ধ বর্ণনাগুলো একবারের কথাই নিশ্চিত করে।"
          },
          {
            "en": "Ibn Kathir goes further than citing. He says the splitting took place in the time of the Messenger of Allah ﷺ, as established in mutawatir hadiths with sound chains, and he calls it a matter agreed upon among the scholars and one of the dazzling miracles. He then gathers the reports Companion by Companion: Anas, Jubayr ibn Mut'im, Ibn 'Abbas, Ibn 'Umar and Ibn Mas'ud. Ma'arif al-Qur'an names at-Tahawi and Ibn Kathir as having called these reports mutawatir, transmitted by so many that their agreement on a falsehood is inconceivable.",
            "bn": "ইবন কাসীর শুধু উদ্ধৃতিতে থামেন না। তিনি বলেন, চাঁদ ফাটার ঘটনা নবী ﷺ-এর যুগেই ঘটেছিল, সহীহ সনদের মুতাওয়াতির হাদীসে তা প্রমাণিত। তাঁর ভাষায় এ বিষয়ে আলেমদের মধ্যে ঐকমত্য আছে, আর এটি ছিল উজ্জ্বল মুজিযাগুলোর একটি। এরপর তিনি সাহাবি ধরে ধরে বর্ণনাগুলো সাজান: আনাস, জুবাইর ইবন মুতইম, ইবন আব্বাস, ইবন উমর ও ইবন মাসউদ (রাঃ)। মাআরিফুল কুরআন জানায়, ইমাম তাহাবী আর ইবন কাসীর এসব বর্ণনাকে মুতাওয়াতির বলেছেন। অর্থাৎ এত বেশি মানুষ তা বর্ণনা করেছেন যে সবাই মিলে মিথ্যায় একমত হওয়া কল্পনাও করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Already Split, or Still to Come",
          "bn": "ঘটে গেছে, নাকি ঘটবে"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads wa-nshaqqa l-qamar as wa-qad inshaqqa l-qamar, and the moon has already split, and notes that Hudhayfa recited it that way, with qad added. This, he says, is the position of the majority of scholars, established in Sahih al-Bukhari and elsewhere from Ibn Mas'ud, Ibn 'Umar, Anas, Jubayr ibn Mut'im and Ibn 'Abbas. At-Tabari gathers the same view from the early authorities: Ibn 'Abbas said it had already passed, before the Hijra; Mujahid said they saw it split; Ibrahim and ad-Dahhak said it had passed, in Makkah.",
            "bn": "কুরতুবী ওয়ানশাক্কাল কামারকে পড়েন ওয়া কাদ ইনশাক্কাল কামার অর্থে, অর্থাৎ চাঁদ ইতিমধ্যে ফেটে গেছে। তিনি জানান, হুযায়ফা (রাঃ) আয়াতটি এভাবেই পড়তেন, কাদ শব্দটি যোগ করে। কুরতুবীর ভাষায় এটিই অধিকাংশ আলেমের মত, যা সহীহ বুখারী ও অন্যান্য গ্রন্থে ইবন মাসউদ, ইবন উমর, আনাস, জুবাইর ইবন মুতইম ও ইবন আব্বাস (রাঃ) থেকে প্রমাণিত। তাবারী প্রথম যুগের ব্যাখ্যাকারদের কাছ থেকে একই মত জড়ো করেন। ইবন আব্বাস (রাঃ) বলেছেন, ঘটনাটি ঘটে গেছে, হিজরতের আগে। মুজাহিদ বলেছেন, তারা চাঁদকে ফাটা অবস্থায় দেখেছে। ইবরাহীম ও দাহহাক বলেছেন, মক্কায় তা ঘটে গেছে।"
          },
          {
            "en": "Ibn Mas'ud's own words, cited by Ibn Kathir as in the Sahih and carried by at-Tabari through a chain of his own, are in Sahih al-Bukhari, 4825: 'Five things have passed: al-lizam, ar-Rum, al-batsha, the moon and the smoke.' It is the Companion's statement, not the Prophet's ﷺ. Al-Qurtubi then records the other side. A group said the splitting has not happened yet and is awaited: the rising of the Hour and the splitting of the moon have both drawn near, and when the Hour stands the sky will split, with the moon and all else in it. He names al-Qushayri as saying the same.",
            "bn": "ইবন মাসউদ (রাঃ)-এর নিজের কথাটি আছে সহীহ বুখারীতে, ৪৮২৫। ইবন কাসীর একে সহীহের বর্ণনা বলে উদ্ধৃত করেন, তাবারীও নিজের সনদে আনেন: 'পাঁচটি বিষয় ঘটে গেছে: লিযাম, রূম, বাতশা, চাঁদ আর ধোঁয়া।' এটি সাহাবির উক্তি, নবী ﷺ-এর বাণী নয়। এরপর কুরতুবী অন্য পক্ষের মতও তুলে ধরেন। একদল বলেছেন, চাঁদ এখনো ফাটেনি, ঘটনাটির অপেক্ষা চলছে। তাঁদের ব্যাখ্যায় কিয়ামত কায়েম হওয়া আর চাঁদ ফাটা দুটোই কাছে এসেছে। কিয়ামত যখন কায়েম হবে, তখন আকাশ ফেটে যাবে, সঙ্গে চাঁদসহ তাতে যা কিছু আছে সবই। কুরতুবী জানান, কুশাইরীও এ কথাই বলেছেন।"
          },
          {
            "en": "Al-Qurtubi adds that al-Mawardi called this the majority view, reasoning that had the moon split, nobody would have remained who did not see it, since people are equal before signs. Al-Hasan said: the Hour has drawn near, and when it comes the moon will split, after the second blowing. Al-Qurtubi answers in his own name: reliable reports establish that the moon split in Makkah, it is the apparent sense of the revelation, and not everyone had to see it, because it was a sign by night. This article reports both sides and decides between neither.",
            "bn": "কুরতুবী আরও জানান, মাওয়ারদী এ মতকেই অধিকাংশের মত বলেছেন। তাঁর যুক্তি: চাঁদ সত্যিই ফেটে থাকলে এমন কেউ বাকি থাকত না যে তা দেখেনি, কারণ নিদর্শনের সামনে সব মানুষ সমান। হাসান বলেছেন, কিয়ামত কাছে এসেছে, আর তা যখন আসবে তখন দ্বিতীয় ফুঁৎকারের পর চাঁদ ফাটবে। কুরতুবী নিজের পক্ষ থেকে এর জবাব দেন। তাঁর মতে নির্ভরযোগ্য বর্ণনাকারীদের সূত্রে প্রমাণিত যে মক্কায় চাঁদ ফেটেছিল, আর এটিই আয়াতের বাহ্যিক অর্থ। সবার দেখা জরুরি ছিল না, কারণ নিদর্শনটি ছিল রাতের। এ লেখা দুই পক্ষের কথাই তুলে ধরে, কোনো পক্ষে রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Readings al-Qurtubi Lists",
          "bn": "কুরতুবীর তালিকায় আরও ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Al-Qurtubi lists two further readings, both introduced with qila, it has been said, and neither given a named holder. In one, wa-nshaqqa l-qamar means the matter became clear and plain, since the Arabs use the moon as a byword for whatever is evident, and he cites a line of poetry for it. In the other, the splitting is the darkness splitting away from the moon as it rises within the night, just as the dawn is called falaq because the darkness is cloven from it.",
            "bn": "কুরতুবী আরও দুটি ব্যাখ্যার উল্লেখ করেন, দুটোই শুরু হয় কীলা দিয়ে, অর্থাৎ 'বলা হয়েছে'। কোনোটির সঙ্গেই কারও নাম নেই। প্রথম ব্যাখ্যায় ওয়ানশাক্কাল কামার মানে বিষয়টি পরিষ্কার হয়ে গেছে। আরবরা যে কোনো স্পষ্ট জিনিসের উপমা দেয় চাঁদ দিয়ে, আর এর পক্ষে তিনি একটি কবিতার চরণ আনেন। দ্বিতীয় ব্যাখ্যায় ফেটে যাওয়া মানে রাতের ভেতর চাঁদ ওঠার সময় তার চারপাশ থেকে অন্ধকার সরে যাওয়া। ঠিক যেমন ভোরকে ফালাক বলা হয়, কারণ অন্ধকার চিরে ভোর বেরিয়ে আসে।"
          },
          {
            "en": "He also records a point about word order. Ibn Kaysan said the verse is a case of fronting and delay, so that its sense is: the moon split, and the Hour drew near. Al-Qurtubi recalls al-Farra's rule, given earlier at 53:8, that when two verbs are close in meaning you may put either one first. Alongside all of these, al-Qurtubi's own position stays as he states it in his own name: that the moon split in Makkah, and that this is the apparent sense of the text. The reader is given the whole range of what was said.",
            "bn": "শব্দের ক্রম নিয়েও তিনি একটি কথা উল্লেখ করেন। ইবন কাইসান বলেছেন, আয়াতে আগের কথা পরে আর পরের কথা আগে এসেছে। তাঁর মতে অর্থটা এমন: চাঁদ ফেটেছে, আর কিয়ামত কাছে এসেছে। কুরতুবী এখানে ফাররার একটি নিয়ম মনে করিয়ে দেন, যা ৫৩:৮ আয়াতের আলোচনায় আগেই এসেছে। দুটি ক্রিয়ার অর্থ কাছাকাছি হলে যেকোনোটিকে আগে আনা যায়। এসব ব্যাখ্যার পাশাপাশি কুরতুবী নিজের নামে যে মত দেন, তা অপরিবর্তিত থাকে: মক্কায় চাঁদ ফেটেছিল, আর আয়াতের বাহ্যিক অর্থ এটাই। পাঠকের সামনে থাকল আলেমদের বক্তব্যের পুরো পরিসর।"
          }
        ]
      },
      {
        "h": {
          "en": "Ask the Travellers",
          "bn": "মুসাফিরদের জিজ্ঞেস করো"
        },
        "p": [
          {
            "en": "What did the people who saw it say? At-Tabari and al-Baghawi each carry, with his own chain, a report from Masruq from Ibn Mas'ud: the moon split in the time of the Messenger of Allah ﷺ, and Quraysh said, this is the magic of Ibn Abi Kabsha; he has bewitched you, so ask the travellers. They asked them, and the travellers said: yes, we saw it. The report ends: then Allah revealed iqtarabati s-sa'atu wa-nshaqqa l-qamar. Neither commentator grades it in the text fetched.",
            "bn": "যারা নিজের চোখে দেখেছিল, তারা কী বলেছিল? তাবারী ও বাগাভী দুজনেই নিজ নিজ সনদে মাসরূকের মাধ্যমে ইবন মাসউদ (রাঃ)-এর একটি বর্ণনা আনেন। আল্লাহর রাসূল ﷺ-এর যুগে চাঁদ ফেটে গেল। কুরাইশরা বলল, এ ইবন আবী কাবশার যাদু, সে তোমাদের যাদু করেছে, মুসাফিরদের জিজ্ঞেস করো। তারা মুসাফিরদের জিজ্ঞেস করল। মুসাফিররা বলল: হ্যাঁ, আমরাও দেখেছি। বর্ণনার শেষে আছে, তখন আল্লাহ নাযিল করলেন ইকতারাবাতিস সাআতু ওয়ানশাক্কাল কামার। যে পাঠ হাতে আছে, তাতে দুজনের কেউই বর্ণনাটির মান উল্লেখ করেননি।"
          },
          {
            "en": "Jubayr ibn Mut'im's report, which Ibn Kathir cites from Imam Ahmad, gives the same exchange more briefly: they said, Muhammad has bewitched us, then said, if he has bewitched us, he cannot bewitch all the people. The next verse, 54:2, records the outcome: if they see a sign, they turn away and say, a continuing magic. That verse has its own place. What 54:1 to 54:3 describe is one group's response to one sign at one time. The verses license nothing against any living person or community.",
            "bn": "জুবাইর ইবন মুতইম (রাঃ)-এর বর্ণনা, যা ইবন কাসীর ইমাম আহমাদের সূত্রে আনেন, একই কথোপকথন আরও সংক্ষেপে তুলে ধরে। তারা বলল, মুহাম্মাদ আমাদের যাদু করেছে। পরে বলল, আমাদের যাদু করলেও সব মানুষকে তো সে যাদু করতে পারবে না। পরের আয়াত ৫৪:২ জানিয়ে দেয় পরিণতি কী হয়েছিল: নিদর্শন দেখলে তারা মুখ ফিরিয়ে নেয় আর বলে, এ তো চলমান যাদু। সে আয়াতের আলোচনা তার নিজের জায়গায়। ৫৪:১ থেকে ৫৪:৩ পর্যন্ত আয়াতগুলো একটি নিদর্শনের সামনে এক সময়ের একটি দলের প্রতিক্রিয়ার বর্ণনা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াতগুলো কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Today the Training Ground",
          "bn": "আজ প্রস্তুতির মাঠ"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both preserve a Friday sermon given by Hudhayfa at al-Mada'in, told by Abu 'Abd ar-Rahman as-Sulami, who attended it with his father. Hudhayfa recited the verse and said: the Hour has drawn near, the moon has split, the world has announced its departure; today is the training ground, and tomorrow the race. The son asked his father whether people would be racing tomorrow. His father answered: my son, you are ignorant; it is only the race in deeds. These are Hudhayfa's words, not a hadith of the Prophet ﷺ.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই মাদায়েনে হুযায়ফা (রাঃ)-এর একটি জুমার খুতবা সংরক্ষণ করেছেন। বর্ণনা করেছেন আবু আবদির রহমান আস-সুলামী, যিনি বাবার সঙ্গে সেখানে উপস্থিত ছিলেন। হুযায়ফা (রাঃ) আয়াতটি তিলাওয়াত করে বললেন: কিয়ামত কাছে এসে গেছে, চাঁদ ফেটে গেছে, দুনিয়া বিদায়ের ঘোষণা দিয়েছে। আজ প্রস্তুতির মাঠ, কাল দৌড়। ছেলে বাবাকে জিজ্ঞেস করল, কাল কি তাহলে মানুষ দৌড় প্রতিযোগিতায় নামবে? বাবা বললেন: বাবা, তুমি অবুঝ, এ তো কেবল আমলের দৌড়। এগুলো হুযায়ফা (রাঃ)-এর কথা, নবী ﷺ-এর হাদীস নয়।"
          },
          {
            "en": "The next Friday Hudhayfa repeated it and added the ending: the final point is the Fire, and the winner is whoever is first to reach the Garden. The sermon makes at-Tabari's reading of the verse concrete: news that the Hour is near is a command to get ready now. As-Sa'di's note supplies the other half of the picture. The deniers had been shown great signs, the kind on which human beings believe, and still they stayed unprepared. Nearness, on its own, makes no one ready. The training is what the verse asks for.",
            "bn": "পরের জুমায় হুযায়ফা (রাঃ) একই কথা আবার বললেন, আর শেষে যোগ করলেন: শেষ সীমা জাহান্নাম, আর বিজয়ী সে, যে সবার আগে জান্নাতে পৌঁছায়। তাবারী আয়াতটিকে যেভাবে পড়েছেন, খুতবাটি তাকে চোখের সামনে এনে দেয়। কিয়ামত কাছে, এ খবরের মানেই হলো এখনই প্রস্তুত হও। সাদীর কথায় ছবির বাকি অর্ধেকটা পাওয়া যায়। অস্বীকারকারীদের এমন সব বড় নিদর্শন দেখানো হয়েছিল, যা দেখে মানুষ ঈমান আনে। তবু তারা অপ্রস্তুতই রয়ে গেল। কিয়ামত শুধু কাছে এলেই কেউ প্রস্তুত হয়ে যায় না। আয়াত চায় সেই প্রস্তুতিটাই।"
          }
        ]
      }
    ]
  },
  "54:17": {
    "sections": [
      {
        "h": {
          "en": "A Refrain, Four Times",
          "bn": "একটি ধ্রুবপদ, চারবার"
        },
        "p": [
          {
            "en": "Surah al-Qamar tells one story repeatedly with different names in it. Nuh's people deny and the waters of the sky and the earth meet over them; Aad deny and a screaming wind carries them off; Thamud deny and a single blast leaves them like the dry twigs of a pen; the people of Lut deny and a storm of stones falls. After each of these four accounts, one line returns unchanged, at 54:17, 54:22, 54:32 and 54:40 — and We have certainly made the Quran easy for remembrance, so is there any who will remember.",
            "bn": "সূরা আল-কামার একই গল্প বারবার বলে, কেবল নামগুলো বদলে যায়। নূহের জাতি অস্বীকার করে আর আসমান ও যমীনের পানি তাদের ওপর মিলিত হয়; আদ অস্বীকার করে আর এক গর্জনকারী ঝড় তাদের উড়িয়ে নেয়; সামূদ অস্বীকার করে আর একটিমাত্র বিকট আওয়াজ তাদের খোঁয়াড়ের শুকনো খড়কুটোর মতো করে ফেলে; লূতের জাতি অস্বীকার করে আর পাথরের ঝড় নেমে আসে। এই চারটি বিবরণের প্রতিটির পরে একই পঙক্তি অপরিবর্তিতভাবে ফিরে আসে — 54:17, 54:22, 54:32 ও 54:40 আয়াতে — আমি কুরআনকে উপদেশ গ্রহণের জন্য সহজ করে দিয়েছি, উপদেশ গ্রহণ করার কেউ আছে কি।"
          },
          {
            "en": "The fifth people, Pharaoh's, are dealt with in 54:41-42 and do not receive the refrain; the surah turns instead to the listeners in Makkah. The closing question by itself, fahal min muddakir, appears twice more — at 54:15 after the ark, and at 54:51 near the end — six times in one surah. Counting them is the quickest way to feel what the surah is doing to its hearer.",
            "bn": "পঞ্চম জাতি, অর্থাৎ ফিরআউনের লোকদের কথা আসে 54:41-42 আয়াতে, আর তারা এই ধ্রুবপদটি পায় না; সূরাটি বরং মক্কার শ্রোতাদের দিকে ফিরে যায়। শেষের প্রশ্নটি একা — ফাহাল মিম মুদ্দাকির — আরও দুবার আসে: 54:15 আয়াতে নৌকার পরে, আর 54:51 আয়াতে শেষের কাছে — এক সূরাতেই ছয়বার। এগুলো গুনে দেখাই দ্রুততম উপায়, সূরাটি তার শ্রোতার সাথে কী করছে তা অনুভব করার।"
          }
        ]
      },
      {
        "h": {
          "en": "Easy for What",
          "bn": "কীসের জন্য সহজ"
        },
        "p": [
          {
            "en": "The claim is precise. Not that the Quran is easy, full stop — a Book carrying law, the unseen and sustained argument is not shallow. It is made easy lidh-dhikr, for remembrance. as-Sa'di divides the ease in two: the wording is eased for recitation and memorisation, and the meanings are eased for understanding and reflection. Neither half promises that mastery of the sciences costs nothing.",
            "bn": "দাবিটি নিখুঁতভাবে নির্দিষ্ট। কথাটি এই নয় যে কুরআন এমনিতেই সহজ — যে কিতাব বিধান, গায়েব ও দীর্ঘ যুক্তি বহন করে তা অগভীর নয়। একে সহজ করা হয়েছে লিয্‌যিকর, অর্থাৎ স্মরণের জন্য। আস-সা'দী এই সহজতাকে দুই ভাগে ভাগ করেন: শব্দগুলো সহজ করা হয়েছে তিলাওয়াত ও মুখস্থ করার জন্য, আর অর্থগুলো সহজ করা হয়েছে বোঝা ও চিন্তা করার জন্য। এর কোনো ভাগই প্রতিশ্রুতি দেয় না যে কুরআনের শাস্ত্রগুলোতে দক্ষতা অর্জন বিনা পরিশ্রমে হবে।"
          },
          {
            "en": "The evidence is unusual for a claim made about a book. Children who speak no Arabic hold the entire text in memory. Blind men have carried it complete. No other book of that length is memorised whole by ordinary people in large numbers, and it has gone on happening for fourteen centuries in every language community that Islam reached.",
            "bn": "একটি কিতাব সম্পর্কে করা দাবির তুলনায় এর প্রমাণটি অস্বাভাবিক। যেসব শিশু আরবি বলতেই পারে না, তারাও পুরো পাঠটি স্মৃতিতে ধরে রাখে। অন্ধ মানুষেরা এটি সম্পূর্ণ বয়ে নিয়েছেন। এই দৈর্ঘ্যের অন্য কোনো বই সাধারণ মানুষ এত বিপুল সংখ্যায় পুরোটা মুখস্থ করে না, আর ইসলাম যে ভাষাগোষ্ঠীতেই পৌঁছেছে সেখানেই চৌদ্দ শতাব্দী ধরে এটি ঘটে চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Different Easing",
          "bn": "ভিন্ন এক সহজীকরণ"
        },
        "p": [
          {
            "en": "Two other verses use the same verb about the Quran and mean something else by it. 44:58 says We have only eased it in your tongue, that they might be reminded. 19:97 says We have only eased it in your tongue so that you may give good tidings by it to the righteous and warn by it a hostile people. Both ease it in the Prophet's ﷺ tongue — in his language, for delivery.",
            "bn": "আরও দুটি আয়াত কুরআন সম্পর্কে একই ক্রিয়া ব্যবহার করে, কিন্তু অর্থ করে ভিন্ন কিছু। 44:58 বলে, আমি তো একে তোমার ভাষায় সহজ করে দিয়েছি, যাতে তারা উপদেশ গ্রহণ করে। 19:97 বলে, আমি একে তোমার ভাষায় সহজ করেছি, যাতে তুমি এর দ্বারা মুত্তাকীদের সুসংবাদ দিতে পার আর ঝগড়াটে এক সম্প্রদায়কে সতর্ক করতে পার। দুটিই একে সহজ করে নবী ﷺ-এর জিহ্বায় — তাঁর ভাষায়, পৌঁছে দেওয়ার জন্য।"
          },
          {
            "en": "This verse eases it in the hearer instead. There the object of the easing is a messenger's speech; here it is a listener's memory and understanding. Put together, the three describe a complete transmission — a message placed into a language people already spoke, and then made to stay in them. None of the three is a claim that the Quran is simple. All three are claims about access.",
            "bn": "এই আয়াত বরং একে সহজ করে শ্রোতার ভেতরে। সেখানে সহজ করার লক্ষ্য একজন রাসূলের বাচন; এখানে লক্ষ্য একজন শ্রোতার স্মৃতি ও বোধ। একসাথে রাখলে তিনটি আয়াত একটি পূর্ণাঙ্গ হস্তান্তরের বর্ণনা দেয় — এমন এক ভাষায় বার্তা রাখা যা মানুষ আগে থেকেই বলত, আর তারপর তা তাদের ভেতরে গেঁথে দেওয়া। তিনটির কোনোটিই এই দাবি করে না যে কুরআন সরল। তিনটিই দাবি করে নাগাল পাওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Muddakir",
          "bn": "মুদ্দাকির শব্দটি"
        },
        "p": [
          {
            "en": "The verse is seven words in Arabic, and the last of them repays attention. Muddakir comes from the root of dhikr, remembrance. Its original form was mudhtakir; the grammarians describe how the ta assimilated into the dhal, producing a doubled dal and the compact muddakir that we recite. The word ended up shorter and easier on the tongue than the form it came from.",
            "bn": "আয়াতটি আরবিতে সাতটি শব্দ, আর তার শেষ শব্দটি মনোযোগের প্রতিদান দেয়। মুদ্দাকির এসেছে যিকর অর্থাৎ স্মরণের ধাতু থেকে। এর মূল রূপ ছিল মুয্‌তাকির; ব্যাকরণবিদরা বর্ণনা করেন কীভাবে 'তা' অক্ষরটি 'যাল'-এর সাথে মিশে যায়, ফলে তৈরি হয় দ্বিত্ব 'দাল' আর আমাদের তিলাওয়াত করা সংহত রূপ মুদ্দাকির। শব্দটি শেষ পর্যন্ত যে রূপ থেকে এসেছে তার চেয়ে ছোট ও জিহ্বায় সহজ হয়ে দাঁড়িয়েছে।"
          },
          {
            "en": "There is a quiet demonstration in that. A verse announcing that the Book has been made easy chooses, for its final word, one that Arabic itself has smoothed. And the word is a participle rather than a verb — is there any rememberer — so the question asks after a kind of person, not a single act performed once.",
            "bn": "এর ভেতরে একটি নীরব প্রমাণ আছে। যে আয়াত ঘোষণা করছে কিতাবকে সহজ করা হয়েছে, সেটিই তার শেষ শব্দ হিসেবে বেছে নেয় এমন একটি শব্দ, যাকে আরবি ভাষা নিজেই মসৃণ করে নিয়েছে। আর শব্দটি ক্রিয়া নয়, ইসমে ফাইল — অর্থাৎ 'স্মরণকারী কেউ আছে কি' — তাই প্রশ্নটি খোঁজ করে এক ধরনের মানুষের, একবার করে ফেলা কোনো কাজের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Is There Any",
          "bn": "কেউ কি আছে"
        },
        "p": [
          {
            "en": "The question is left open on purpose. It names nobody, excludes nobody, and is never answered inside the surah. Ibn Kathir preserves a remark of the early scholar Matar al-Warraq on this verse: is there any seeker of knowledge, that he may be helped in it? He read the question not as a complaint about people but as an offer left standing.",
            "bn": "প্রশ্নটি ইচ্ছাকৃতভাবেই খোলা রাখা হয়েছে। এটি কারও নাম নেয় না, কাউকে বাদ দেয় না, আর সূরার ভেতরে কখনো এর উত্তর দেওয়া হয় না। ইবনে কাসীর এই আয়াত সম্পর্কে প্রাচীন যুগের আলিম মাতার আল-ওয়াররাকের একটি উক্তি সংরক্ষণ করেছেন: জ্ঞানের কোনো অন্বেষক আছে কি, যাকে এতে সাহায্য করা হবে? তিনি প্রশ্নটিকে মানুষ সম্পর্কে অভিযোগ হিসেবে নয়, বরং খোলা রেখে দেওয়া এক প্রস্তাব হিসেবে পড়েছেন।"
          },
          {
            "en": "as-Sa'di reads it the same way — that whoever turns towards this Book is helped towards what he turned for. That reframes the whole line. The ease is not merely a description of a text sitting on a shelf; it is a promise attached to the act of approaching it. The one who never begins never finds out whether the promise was true.",
            "bn": "আস-সা'দীও একইভাবে পড়েন — যে-ই এই কিতাবের দিকে ফেরে, সে যার জন্য ফিরেছে সেদিকে তাকে সাহায্য করা হয়। এতে গোটা পঙক্তির অর্থ নতুন করে দাঁড়ায়। এই সহজতা কেবল তাকে তুলে রাখা এক পাঠের বর্ণনা নয়; এটি সেই কিতাবের দিকে এগিয়ে যাওয়ার কাজের সাথে যুক্ত এক প্রতিশ্রুতি। যে কখনো শুরুই করে না, সে কখনো জানতে পারে না প্রতিশ্রুতিটি সত্য ছিল কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Offer",
          "bn": "প্রস্তাবটি গ্রহণ করা"
        },
        "p": [
          {
            "en": "Practically, the verse argues for small and constant over large and rare. A few lines memorised properly, a portion read with the meaning in front of you, one verse carried into the day. The placement matters here too: the refrain arrives four times in the middle of accounts of nations that were warned and did not remember, offered each time as the way out that they declined to take.",
            "bn": "বাস্তবে আয়াতটি বড় ও কদাচিৎ-এর বদলে ছোট ও নিয়মিতের পক্ষে যুক্তি দেয়। কয়েকটি পঙক্তি ঠিকভাবে মুখস্থ করা, অর্থ সামনে রেখে এক অংশ পড়া, একটি আয়াত দিনের ভেতর বয়ে নিয়ে যাওয়া। এখানে অবস্থানটিও গুরুত্বপূর্ণ: ধ্রুবপদটি চারবার আসে এমন সব জাতির বিবরণের মাঝখানে, যাদের সতর্ক করা হয়েছিল কিন্তু তারা স্মরণ করেনি — প্রতিবারই এটি পেশ করা হয় সেই বেরিয়ে আসার পথ হিসেবে, যা তারা নিতে অস্বীকার করেছিল।"
          }
        ]
      }
    ]
  }
});
