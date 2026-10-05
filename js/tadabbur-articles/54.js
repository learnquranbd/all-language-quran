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
  "54:7": {
    "sections": [
      {
        "h": {
          "en": "A Sentence Across Three Verses",
          "bn": "তিনটি আয়াত জুড়ে এক বাক্য"
        },
        "p": [
          {
            "en": "Khushsha'an absaruhum yakhrujuna mina l-ajdathi ka-annahum jaradun muntashir: their eyes humbled, they come out of the graves as though they were locusts spreading. The verse does not open a new sentence. It completes a picture begun in 54:6, where the Prophet ﷺ is told to turn away from the deniers on the day the caller calls to a terrible thing, and it runs on into 54:8, where they hasten towards that caller. Ibn Kathir, in the abridged English, reads the three verses as a single passage about the terrible end that awaits the disbelievers.",
            "bn": "খুশশাআন আবসারুহুম ইয়াখরুজূনা মিনাল আজদাসি কাআন্নাহুম জারাদুম মুনতাশির: অবনত চোখে তারা কবর থেকে বেরিয়ে আসবে, যেন ছড়িয়ে পড়া পঙ্গপাল। আয়াতটি নতুন কোনো বাক্য শুরু করে না। ছবিটা শুরু হয়েছে ৫৪:৬ আয়াতে। সেখানে নবী ﷺ-কে বলা হয়েছে অস্বীকারকারীদের থেকে মুখ ফিরিয়ে নিতে, সেই দিনের অপেক্ষায় যেদিন আহ্বানকারী এক ভয়াবহ জিনিসের দিকে ডাকবেন। আর ছবিটা গড়িয়ে গেছে ৫৪:৮ পর্যন্ত, যেখানে তারা সেই আহ্বানকারীর দিকে ছুটে যায়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ তিনটি আয়াতকে একসঙ্গে পড়ে: কাফিরদের জন্য অপেক্ষমাণ ভয়াবহ পরিণতির একটিমাত্র বর্ণনা হিসেবে।"
          },
          {
            "en": "Al-Qurtubi shows how tightly the words are bound together. Khushsha'an is in the accusative as a hal, a word describing the state of someone, and he offers two anchors for it. If it describes the pronoun in 'anhum, from them, near the start of 54:6, then pausing after 'anhum is poor, because the description would be cut off from the people it describes. If it describes the subject of yakhrujuna, they come out, the pause after 'anhum is allowed. On both readings the lowered eyes belong to the people the passage has been speaking about.",
            "bn": "শব্দগুলো যে কতটা আঁটসাঁট করে বাঁধা, কুরতুবী তা দেখান। খুশশাআন শব্দটি নসব অবস্থায় আছে হাল হিসেবে, অর্থাৎ কারও তখনকার অবস্থা বোঝাতে। এর সম্পর্ক কার সঙ্গে, সে বিষয়ে তিনি দুটি সম্ভাবনা দেখান। শব্দটি যদি ৫৪:৬ আয়াতের শুরুর দিকের আনহুম, অর্থাৎ তাদের থেকে, এর সর্বনামের অবস্থা হয়, তবে আনহুম-এ থামা ভালো নয়। কারণ তাতে বর্ণনাটা যাদের বর্ণনা, তাদের থেকেই কেটে যায়। আর শব্দটি যদি ইয়াখরুজূনা, অর্থাৎ তারা বেরিয়ে আসবে, এর কর্তার অবস্থা হয়, তবে আনহুম-এ থামা চলে। দুই পাঠেই নত চোখগুলো সেই লোকদেরই, যাদের কথা এ অংশ জুড়ে চলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes Lowered in Abasement",
          "bn": "লাঞ্ছনায় নুয়ে পড়া চোখ"
        },
        "p": [
          {
            "en": "What does khushsha' mean when it is said of eyes? At-Tabari answers: abased are their eyes, humbled, with no injury in them. The lowering is a state of disgrace, then, and not damage to sight. He adds that the people of interpretation said the same, and gives Qatada's words through his chain: abased are their eyes. Ibn Kathir, in the Arabic, uses the same gloss, dhalilatun absaruhum, and al-Muyassar opens with it too. The core meaning is settled among them without dispute.",
            "bn": "চোখের বেলায় খুশূ মানে কী? তাবারীর উত্তর: তাদের চোখ লাঞ্ছিত, অবনত, অথচ চোখে কোনো আঘাত নেই। অর্থাৎ চোখ নুয়ে পড়েছে অপমানের অবস্থায়, দৃষ্টিশক্তির কোনো ক্ষতিতে নয়। তিনি যোগ করেন, তাফসীরকারেরাও এ কথাই বলেছেন। নিজের সনদে তিনি কাতাদার কথা আনেন: তাদের চোখ লাঞ্ছিত। ইবন কাসীর আরবিতে একই ব্যাখ্যা দেন, যালীলাতান আবসারুহুম, আর মুয়াসসারও শুরু করে এ কথা দিয়েই। মূল অর্থে তাঁদের মধ্যে কোনো মতভেদ নেই।"
          },
          {
            "en": "Al-Qurtubi defines the word from the language. Khushu' in the eye is submission and abasement. People say khasha'a and ikhtasha'a when someone has been humbled, and khasha'a bi-basarihi means he lowered his gaze. Both senses meet in this verse: the eyes are cast down, and the casting down is a sign of disgrace. Al-Baghawi glosses the phrase as abased and submissive at the sight of the punishment, which ties the lowered eyes to what those eyes are now seeing.",
            "bn": "কুরতুবী শব্দটির অর্থ বের করেন ভাষা থেকে। চোখের খুশূ মানে নতি আর লাঞ্ছনা। কেউ অপমানিত হলে আরবরা বলে খাশাআ বা ইখতাশাআ। আর খাশাআ বিবাসারিহি মানে সে দৃষ্টি নামিয়ে নিল। এ আয়াতে দুটো অর্থই মিলেছে: চোখ নিচের দিকে নামানো, আর সেই নামানোটাই অপমানের চিহ্ন। বাগাভী শব্দগুচ্ছটির ব্যাখ্যা দেন এভাবে: আযাব দেখে লাঞ্ছিত ও নতজানু। এতে নত চোখের সম্পর্ক জুড়ে যায় সেই চোখ তখন যা দেখছে তার সঙ্গে।"
          },
          {
            "en": "As-Sa'di looks inward for the cause. Their eyes are humbled, he says, from the terror and fright that has reached their hearts, so that the hearts submitted and were abased, and the eyes were lowered because of it. Al-Baghawi locates the cause in what the eyes see, as-Sa'di in what the heart already feels. Ibn Kathir's abridged English puts it in a phrase: their eyes will be covered with disgrace. Every gloss turns on that same word, and none of them softens it.",
            "bn": "সা'দী কারণটা খোঁজেন ভেতরে। তাঁর মতে, যে আতঙ্ক আর ভয় তাদের অন্তরে পৌঁছেছে, তাতেই অন্তর নত ও লাঞ্ছিত হয়েছে, আর সে কারণেই চোখ নুয়ে পড়েছে। বাগাভী কারণ খোঁজেন চোখ যা দেখছে তাতে, সা'দী অন্তর যা অনুভব করছে তাতে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ কথাটা বলে এক বাক্যে: তাদের চোখ অপমানে ঢাকা থাকবে। সব ব্যাখ্যাই ঘুরেছে এই একই শব্দকে ঘিরে, আর কোনো ব্যাখ্যাই এর ধার কমায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Verse Names the Eyes",
          "bn": "আয়াত কেন চোখের নাম নেয়"
        },
        "p": [
          {
            "en": "The whole person is abased on that Day, so why does the verse speak only of the eyes? At-Tabari raises the question himself. Allah described the eyes with khushu' rather than the rest of their bodies, he says, while meaning all of their bodies, because the trace of every abased person's abasement, and of every mighty person's might, shows in his eyes rather than in the rest of his body. That is why the eyes were singled out for the description.",
            "bn": "সেদিন তো পুরো মানুষটাই লাঞ্ছিত, তবে আয়াত শুধু চোখের কথা বলে কেন? প্রশ্নটা তাবারী নিজেই তোলেন। তাঁর উত্তর: আল্লাহ খুশূর বিশেষণ দিয়েছেন চোখকে, শরীরের বাকি অংশকে নয়, যদিও উদ্দেশ্য তাদের গোটা শরীর। কারণ প্রত্যেক লাঞ্ছিত মানুষের লাঞ্ছনার ছাপ, আর প্রত্যেক মর্যাদাবান মানুষের মর্যাদার ছাপ, ধরা পড়ে তার চোখে, শরীরের অন্য কোথাও নয়। এ কারণেই বর্ণনার জন্য চোখকে আলাদা করে বেছে নেওয়া হয়েছে।"
          },
          {
            "en": "Al-Qurtubi gives the same reason in nearly the same words: the trace of might and of abasement shows in a person's gaze. He then sets the verse beside two others that speak the same way. Absaruha khashi'a, their eyes humbled, is 79:9. Khashi'ina mina dh-dhulli yanzuruna min tarfin khafiyy, humbled by abasement, looking with a furtive glance, is 42:45. Al-Qurtubi quotes both without numbers; the keys given here were checked against the text of the mushaf.",
            "bn": "কুরতুবীও প্রায় একই ভাষায় একই কারণ দেন: মর্যাদা আর লাঞ্ছনার ছাপ ফুটে ওঠে মানুষের দৃষ্টিতে। তারপর তিনি আয়াতটিকে আরও দুটি আয়াতের পাশে রাখেন, যেগুলো একই ভঙ্গিতে কথা বলে। আবসারুহা খাশিআহ, তাদের চোখ অবনত, এটি ৭৯:৯ আয়াত। খাশিঈনা মিনায যুল্লি ইয়ানযুরূনা মিন তারফিন খাফিয়্যি, অপমানে অবনত হয়ে আড়চোখে তাকাবে, এটি ৪২:৪৫ আয়াত। কুরতুবী দুটিই উদ্ধৃত করেছেন আয়াত নম্বর ছাড়া। এখানে দেওয়া নম্বরগুলো মুসহাফের পাঠের সঙ্গে মিলিয়ে দেখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Khushsha'an or Khashi'an",
          "bn": "খুশশাআন, নাকি খাশিআন"
        },
        "p": [
          {
            "en": "The first word has come down in more than a single form. At-Tabari reports that the readers of Madina generally read khushsha'an, with damma on the kha' and a doubled shin, a plural meaning khashi', humbled. Most readers of Kufa and some of Basra read khashi'an, with an alif, in the singular, following the reading of 'Abd Allah, which had khashi'atan absaruhum. Al-Baghawi names those who read khashi'an as Abu 'Amr, Ya'qub, Hamza and al-Kisa'i; al-Qurtubi names Hamza, al-Kisa'i and Abu 'Amr.",
            "bn": "প্রথম শব্দটি একাধিক রূপে পৌঁছেছে। তাবারী জানান, মদীনার কারীরা সাধারণভাবে পড়েছেন খুশশাআন, খা-তে পেশ আর শীন-এ তাশদীদ দিয়ে। এটি বহুবচন, অর্থ খাশি, অর্থাৎ অবনত। কুফার অধিকাংশ কারী আর বসরার কয়েকজন পড়েছেন খাশিআন, আলিফসহ, একবচনে। তাঁরা অনুসরণ করেছেন আবদুল্লাহর পাঠ, যেখানে ছিল খাশিআতান আবসারুহুম। বাগাভী খাশিআন পাঠকারী হিসেবে নাম দেন আবু আমর, ইয়াকুব, হামযা ও কিসাঈর। কুরতুবী নাম দেন হামযা, কিসাঈ ও আবু আমরের।"
          },
          {
            "en": "Why may the word be singular when the eyes are many? The rule the three commentators give is that an adjective placed before a plural noun may be singular or plural, masculine or feminine. Al-Baghawi shows it with ordinary speech: you may say you passed men hasan, hasana or hisan of face. All three cite a line of verse, which al-Qurtubi attributes to al-Harith ibn Daws al-Iyadi, where hasanun stays singular before awjuhuhum, their faces. Whatever the form, the meaning holds: the eyes are lowered.",
            "bn": "চোখ তো অনেক, তবু শব্দটি একবচনে আসে কীভাবে? তিন তাফসীরকারই যে নিয়ম দেন তা হলো, বহুবচন বিশেষ্যের আগে বিশেষণ বসলে তা একবচন বা বহুবচন, পুংলিঙ্গ বা স্ত্রীলিঙ্গ, যেকোনোটা হতে পারে। বাগাভী সাধারণ কথাবার্তা দিয়ে বোঝান: সুন্দর চেহারার লোকদের পাশ দিয়ে গেলাম, এ কথায় হাসান, হাসানা বা হিসান, তিনটিই বলা চলে। তিনজনই একটি কবিতার চরণ উদ্ধৃত করেন, যেখানে আওজুহুহুম, অর্থাৎ তাদের চেহারা, এর আগে হাসানুন একবচনেই থাকে। কুরতুবী চরণটিকে হারিস ইবন দাওস আল-ইয়াদীর বলে উল্লেখ করেন। রূপ যা-ই হোক, অর্থ একই থাকে: চোখগুলো অবনত।"
          }
        ]
      },
      {
        "h": {
          "en": "Pouring Out of the Ajdath",
          "bn": "আজদাস থেকে বেরিয়ে আসা"
        },
        "p": [
          {
            "en": "Yakhrujuna mina l-ajdath: they come out of the ajdath. At-Tabari and al-Qurtubi both explain the word as a plural whose singular is jadath, and both give its meaning as the graves. Ibn Kathir, as-Sa'di, al-Baghawi and al-Muyassar say the same in a word: the graves. The commentators add nothing to the scene of emergence itself beyond what the verse states, and this article follows them in that restraint. What they do discuss at length is the comparison that ends the verse.",
            "bn": "ইয়াখরুজূনা মিনাল আজদাস: তারা আজদাস থেকে বেরিয়ে আসবে। তাবারী ও কুরতুবী দুজনেই বলেন, শব্দটি বহুবচন, এর একবচন জাদাস, আর অর্থ কবরসমূহ। ইবন কাসীর, সা'দী, বাগাভী ও মুয়াসসারও এক কথায় একই অর্থ দেন: কবর। বেরিয়ে আসার দৃশ্যে আয়াত যা বলেছে, তার বাইরে তাফসীরকারেরা কিছুই যোগ করেননি। এ লেখাও সেই সংযম মেনে চলে। তাঁরা বিস্তারিত আলোচনা করেছেন আয়াতের শেষের উপমাটি নিয়ে।"
          },
          {
            "en": "Ka-annahum jaradun muntashir: as though they were locusts spreading. At-Tabari reads the likeness as one of movement: they come out of their graves as if, in their spreading and their hastening to the place of reckoning, they were spreading locusts. Ibn Kathir, in the Arabic, joins speed to purpose: in their spreading and the swiftness of their going to the place of reckoning, in answer to the caller, they are like locusts spread across the horizons. Al-Muyassar has nearly the same words, and adds that they hasten to what they were called to.",
            "bn": "কাআন্নাহুম জারাদুম মুনতাশির: যেন তারা ছড়িয়ে পড়া পঙ্গপাল। তাবারী উপমাটিকে দেখেন চলার ছবি হিসেবে। কবর থেকে তারা এমনভাবে বেরিয়ে আসবে, যেন ছড়িয়ে পড়ায় আর হিসাবের স্থানের দিকে ছোটায় তারা ছড়িয়ে পড়া পঙ্গপাল। ইবন কাসীর আরবিতে গতির সঙ্গে লক্ষ্যও জুড়ে দেন। আহ্বানকারীর ডাকে সাড়া দিয়ে হিসাবের স্থানের দিকে তারা যে দ্রুত ছড়িয়ে যায়, তাতে তারা দিগন্তজুড়ে ছড়ানো পঙ্গপালের মতো। মুয়াসসারের কথাও প্রায় একই, সঙ্গে যোগ করে: যেদিকে তাদের ডাকা হয়েছে, সেদিকে তারা ছুটে চলেছে।"
          },
          {
            "en": "As-Sa'di draws a different feature out of the same image. They are like locusts, he says, because of how many they are and how they surge against each other: locusts scattered over the earth, multiplied beyond measure. Ibn Kathir's abridged English holds both features together, speaking of people gathering towards the area of reckoning in haste and in crowds. Speed and direction on one side, sheer number and crowding on the other: the commentators find more than a single likeness folded into the plain words jaradun muntashir.",
            "bn": "একই উপমা থেকে সা'দী বের করেন আরেকটি দিক। তাঁর মতে তারা পঙ্গপালের মতো, কারণ তারা সংখ্যায় অগণিত, আর একে অপরের গায়ে উপচে পড়ছে। যেন জমিনজুড়ে ছড়িয়ে থাকা অসংখ্য পঙ্গপাল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ দুটো দিকই একসঙ্গে ধরে রাখে: মানুষ দলে দলে, তাড়াহুড়ো করে হিসাবের স্থানের দিকে জড়ো হচ্ছে। একদিকে গতি আর লক্ষ্য, অন্যদিকে বিপুল সংখ্যা আর ভিড়। জারাদুম মুনতাশির, এই সাদামাটা শব্দ দুটির ভেতরে তাফসীরকারেরা একাধিক মিল খুঁজে পান।"
          }
        ]
      },
      {
        "h": {
          "en": "Moths, Then Locusts?",
          "bn": "আগে পতঙ্গ, তারপর পঙ্গপাল?"
        },
        "p": [
          {
            "en": "Elsewhere the Qur'an uses a different insect for the same Day: yawma yakunu n-nasu ka-l-farashi l-mabthuth, the day people will be like scattered moths, in 101:4. Al-Qurtubi sets that verse beside this one and asks how the two images fit. His answer is that they are two descriptions at two different times. The first is at the moment of coming out of the graves: they come out terrified, not knowing where to turn, entering into each other, like scattered moths with no direction to aim for.",
            "bn": "একই দিনের বর্ণনায় কুরআন অন্য জায়গায় আরেক পতঙ্গের নাম নিয়েছে: ইয়াওমা ইয়াকূনুন নাসু কাল ফারাশিল মাবসূস, যেদিন মানুষ হবে বিক্ষিপ্ত পতঙ্গের মতো, ১০১:৪ আয়াতে। কুরতুবী সেই আয়াতকে এ আয়াতের পাশে রেখে প্রশ্ন করেন, দুটি ছবি মেলে কীভাবে। তাঁর উত্তর: এ দুটি দুই ভিন্ন সময়ের দুই বর্ণনা। প্রথমটি কবর থেকে বেরোনোর মুহূর্তের। তারা বেরিয়ে আসে আতঙ্কিত হয়ে, কোন দিকে যাবে জানে না, একে অপরের মধ্যে ঢুকে পড়ে। তখন তারা বিক্ষিপ্ত পতঙ্গের মতো, যাদের যাওয়ার কোনো নির্দিষ্ট দিক নেই।"
          },
          {
            "en": "The second time, in al-Qurtubi's account, comes when they hear the caller. Then they make for him, and they become like spreading locusts, because locusts have a direction they aim for. He quotes the verse running straight on into muhti'ina ila d-da'i, hastening towards the caller, at the start of 54:8. On his reading, the locust image here is the moment after the confusion: a crowd that has heard the call and now streams towards it, no longer milling about. For him the moths and the locusts are two stages of the same rising.",
            "bn": "কুরতুবীর বর্ণনায় দ্বিতীয় সময়টি আসে যখন তারা আহ্বানকারীর ডাক শোনে। তখন তারা তাঁর দিকে রওনা হয়, আর হয়ে যায় ছড়িয়ে পড়া পঙ্গপালের মতো। কারণ পঙ্গপালের যাওয়ার একটা নির্দিষ্ট দিক থাকে। আয়াতটি উদ্ধৃত করতে গিয়ে তিনি না থেমে সোজা চলে যান ৫৪:৮ আয়াতের শুরুতে: মুহতিঈনা ইলাদ দাঈ, আহ্বানকারীর দিকে ছুটে চলা। তাঁর পাঠে এখানকার পঙ্গপালের ছবিটি বিভ্রান্তির পরের মুহূর্ত। ভিড়টা ডাক শুনে ফেলেছে, এখন আর এলোমেলো ঘুরছে না, সেই দিকে স্রোতের মতো এগোচ্ছে। তাঁর কাছে পতঙ্গ আর পঙ্গপাল তাই একই পুনরুত্থানের দুটি ধাপ।"
          },
          {
            "en": "Al-Baghawi reads the same comparison the other way. Jaradun muntashir, he says, means scattered and bewildered, and he cites 101:4 as a parallel, not as an earlier stage. The meaning, in his words, is that they come out terrified, none of them having a direction to aim for, like locusts that have no direction, mixed into each other. So al-Qurtubi's locusts have a direction and al-Baghawi's have none. Both readings are given here as they stand; the article takes no side between them.",
            "bn": "বাগাভী একই উপমা পড়েন উল্টো দিক থেকে। তাঁর মতে জারাদুম মুনতাশির মানে বিক্ষিপ্ত ও দিশেহারা। ১০১:৪ আয়াতকে তিনি এর সমতুল্য হিসেবে আনেন, আগের কোনো ধাপ হিসেবে নয়। তাঁর ভাষায় অর্থ হলো, তারা আতঙ্কিত হয়ে বেরিয়ে আসবে, তাদের কারও যাওয়ার নির্দিষ্ট দিক থাকবে না। যেমন পঙ্গপালের কোনো দিক থাকে না, একে অপরের সঙ্গে মিশে থাকে। তাহলে কুরতুবীর পঙ্গপালের দিক আছে, বাগাভীর পঙ্গপালের নেই। দুটি পাঠই এখানে যেমন আছে তেমন রাখা হলো। এ লেখা কোনো পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Deniers in This Scene",
          "bn": "এ দৃশ্যের অস্বীকারকারীরা"
        },
        "p": [
          {
            "en": "Who are the people whose eyes are lowered here? Ibn Kathir's abridged English names them through the turn of 54:6: the Prophet ﷺ is told to turn away from those who, when they see a miracle, deny it and call it continuous magic, and to wait for the day the caller calls them to the Recompense and its horrors. Al-Muyassar carries the sentence into 54:8 and closes it on their own words: the disbelievers say, this is a hard day, intense in its terror.",
            "bn": "এখানে যাদের চোখ নত, তারা কারা? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫৪:৬ আয়াতের মুখ ফেরানোর নির্দেশ দিয়েই তাদের চিনিয়ে দেয়। নবী ﷺ-কে বলা হয়েছে তাদের থেকে মুখ ফিরিয়ে নিতে, যারা মুজিযা দেখলে অস্বীকার করে আর বলে এ তো চলমান যাদু। আর অপেক্ষা করতে সেই দিনের, যেদিন আহ্বানকারী তাদের ডাকবেন প্রতিদান আর তার বিভীষিকার দিকে। মুয়াসসার বাক্যটিকে টেনে নিয়ে যায় ৫৪:৮ পর্যন্ত, আর শেষ করে তাদের নিজেদের কথায়: কাফিররা বলবে, এ এক কঠিন দিন, ভয়ংকর তার বিভীষিকা।"
          },
          {
            "en": "Ibn Kathir explains that hard day as terrible, horrifying and distressful, and supports it with 74:9 and 74:10: that Day will be a hard day, far from easy for the disbelievers. This must be said plainly. The verse describes what the text describes: a scene on the Day of Resurrection, and the deniers the passage has named. It licenses nothing against any living person or community. It gives nobody the right to look at a neighbour and assign him lowered eyes and a place in that crowd.",
            "bn": "ইবন কাসীর সেই কঠিন দিনের ব্যাখ্যা দেন ভয়াবহ, আতঙ্কজনক ও যন্ত্রণাদায়ক দিন হিসেবে। সমর্থনে আনেন ৭৪:৯ ও ৭৪:১০ আয়াত: সেদিন হবে এক কঠিন দিন, কাফিরদের জন্য মোটেই সহজ নয়। কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে ঠিক তা-ই, যা পাঠে আছে: কিয়ামতের দিনের একটি দৃশ্য, আর এ অংশে যে অস্বীকারকারীদের কথা এসেছে তারা। আজ জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। প্রতিবেশীর দিকে তাকিয়ে তাকে নত চোখ আর ওই ভিড়ে জায়গা বরাদ্দ করে দেওয়ার অধিকার এ আয়াত কাউকে দেয়নি।"
          },
          {
            "en": "None of the eight commentaries read for this verse attaches a hadith to it, so no narration is quoted here. Nor do they give an occasion of revelation for it; the verse is read as the continuation of 54:6. Ma'arif al-Qur'an, in the English section that covers this group of verses, comments only on 54:3, every matter reaching its settled end, and says nothing particular on this verse. The commentators who do speak have been allowed to say no more than they said.",
            "bn": "এ আয়াতের জন্য যে আটটি তাফসীর পড়া হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত করা হয়নি। আয়াতটির কোনো শানে নুযূলও তাঁরা দেননি। তাঁরা একে পড়েছেন ৫৪:৬ আয়াতের ধারাবাহিকতা হিসেবে। মাআরিফুল কুরআনের ইংরেজি অংশটি এই আয়াতগুচ্ছ জুড়ে থাকলেও তাতে আলোচনা কেবল ৫৪:৩ আয়াত নিয়ে, প্রতিটি বিষয় তার নির্ধারিত পরিণতিতে পৌঁছানোর কথা। এ আয়াত নিয়ে আলাদা কিছু সেখানে নেই। যে তাফসীরকারেরা কথা বলেছেন, তাঁদের কথার বাইরে এখানে কিছু যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gaze Chosen While Choosing Lasts",
          "bn": "বেছে নেওয়ার সময়েই দৃষ্টি নামানো"
        },
        "p": [
          {
            "en": "Al-Qurtubi's gloss holds a quiet contrast. Khasha'a bi-basarihi means he lowered his gaze, and a person can do that today by choice, in humility before Allah, or have it done to him on that Day by abasement. At-Tabari's observation cuts both ways as well: might and abasement both show in the eyes. The verse invites a plain question. What do my eyes carry now, and what would I want them to carry when there is nothing left to choose?",
            "bn": "কুরতুবীর ব্যাখ্যার ভেতরে একটা নীরব বৈপরীত্য আছে। খাশাআ বিবাসারিহি মানে সে দৃষ্টি নামিয়ে নিল। মানুষ আজ নিজের ইচ্ছায়, আল্লাহর সামনে বিনয় নিয়ে চোখ নামাতে পারে। আবার সেদিন লাঞ্ছনার কারণে তার চোখ নামিয়ে দেওয়া হতে পারে। তাবারীর পর্যবেক্ষণও দুদিকেই খাটে: মর্যাদা আর লাঞ্ছনা দুটোই ধরা পড়ে চোখে। আয়াতটি একটা সরল প্রশ্ন সামনে রাখে। আমার চোখ আজ কী বহন করছে? আর যখন বেছে নেওয়ার কিছুই থাকবে না, তখন চোখ কী বহন করুক বলে আমি চাই?"
          },
          {
            "en": "The direction of the crowd matters too. Whether its locusts have a goal, as al-Qurtubi says, or none, as al-Baghawi says, on that Day nobody sets his own course; Ibn Kathir's English adds, on 54:8, that they hasten without being able to hesitate or slow down. The verses just before, 54:4 and 54:5, say that warnings full of deterrence had already reached the deniers and did not avail them. For the reader, the call that matters is whichever call can still be answered freely, today.",
            "bn": "ভিড়ের দিকটাও ভাবার মতো। কুরতুবীর কথামতো পঙ্গপালের লক্ষ্য থাকুক, বা বাগাভীর কথামতো না থাকুক, সেদিন কেউ নিজের পথ নিজে ঠিক করবে না। ইবন কাসীরের ইংরেজি সংস্করণ ৫৪:৮ আয়াতের আলোচনায় যোগ করে, তারা ছুটবে থামার বা ধীরে চলার কোনো উপায় ছাড়াই। ঠিক আগের ৫৪:৪ ও ৫৪:৫ আয়াত বলে, সাবধান করার মতো সংবাদ অস্বীকারকারীদের কাছে আগেই পৌঁছেছিল, কিন্তু সতর্কবাণী তাদের কোনো কাজে আসেনি। পাঠকের জন্য আসল ডাক তাই সেটিই, যাতে আজও স্বাধীনভাবে সাড়া দেওয়া যায়।"
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
  },
  "54:27": {
    "sections": [
      {
        "h": {
          "en": "After the Threat, a Sign",
          "bn": "হুমকির পরে নিদর্শন"
        },
        "p": [
          {
            "en": "Four verses earlier the account of Thamud opened in three Arabic words: kadhdhabat thamudu bi-n-nudhur, Thamud denied the warnings (54:23). They asked whether they should follow a single man from among themselves, and they called him an insolent liar (54:24, 54:25). Then came the reply: they will know tomorrow who the insolent liar is (54:26). The abridged Ibn Kathir reads that line as a warning, a threat and a sure promise. Our verse follows directly as Allah's next word: inna mursilu n-naqati fitnatan lahum fa-rtaqibhum wa-stabir.",
            "bn": "চারটি আয়াত আগে সামূদের কাহিনি শুরু হয়েছিল আরবি তিনটি শব্দে: কাযযাবাত সামূদু বিন-নুযুর, সামূদ সতর্কবাণী অস্বীকার করেছিল (৫৪:২৩)। তারা প্রশ্ন তুলেছিল, নিজেদেরই একজন মানুষের পেছনে চলবে কেন? তাঁকে তারা বলেছিল দাম্ভিক মিথ্যুক (৫৪:২৪, ৫৪:২৫)। তারপর জবাব এল: কাল তারা জানবে আসল দাম্ভিক মিথ্যুক কে (৫৪:২৬)। সংক্ষিপ্ত ইবন কাসীর এ বাক্যে দেখেন সতর্কবাণী, হুমকি আর নিশ্চিত প্রতিশ্রুতি। আমাদের আয়াত ঠিক এর পরেই আল্লাহর পরবর্তী কথা হয়ে আসে: ইন্না মুরসিলুন-নাকাতি ফিতনাতাল লাহুম ফারতাকিবহুম ওয়াসতাবির।"
          },
          {
            "en": "The verse is seven Arabic words long. Ma'arif al-Qur'an, writing on the whole passage, notes that the stories of these destroyed nations are told in detail on several occasions elsewhere in the Qur'an and are condensed here, each closing with the refrain asking how Allah's punishment and warnings were. So the verse does not retell the she-camel's story. It holds one moment: the sign announced, its purpose named, and two commands to the prophet. What followed, the water divided and the hamstringing, belongs to 54:28 and 54:29.",
            "bn": "আয়াতটি আরবিতে মাত্র সাতটি শব্দের। মাআরিফুল কুরআন পুরো অংশটির আলোচনায় বলে, ধ্বংস হয়ে যাওয়া এই জাতিগুলোর কাহিনি কুরআনের অন্য জায়গায় একাধিকবার বিস্তারিত এসেছে, আর এখানে এসেছে সংক্ষেপে। প্রতিটির শেষে ফিরে আসে একই প্রশ্ন: কেমন ছিল আমার শাস্তি আর সতর্কবাণী? তাই এ আয়াত উষ্ট্রীর পুরো কাহিনি আবার শোনায় না। এটি ধরে রাখে একটিমাত্র মুহূর্ত। নিদর্শনের ঘোষণা, তার উদ্দেশ্য, আর নবীকে দেওয়া দুটি আদেশ। এরপর যা ঘটেছে, পানির ভাগ আর উষ্ট্রীর পা কেটে ফেলা, তা আছে ৫৪:২৮ ও ৫৪:২৯ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sending Meant Bringing Out",
          "bn": "পাঠানো মানে বের করে আনা"
        },
        "p": [
          {
            "en": "Mursilu n-naqati: senders of the she-camel, rendered here as We are sending. The commentators gloss the word with others of the same shape. At-Tabari has ba'ithu, those who raise her up; al-Muyassar has mukhriju, those who bring her out; al-Qurtubi has mukhrijuha, and al-Baghawi joins both, ba'ithuha wa-mukhrijuha. Sending, in their reading, meant bringing her out. At-Tabari says from where: she was the she-camel Thamud had asked Salih (AS) for, from the hadbah, the high rocky ground, out of which they had asked him to raise her.",
            "bn": "মুরসিলুন-নাকাতি: উষ্ট্রীর প্রেরক, বাংলায় বলা যায় আমি উষ্ট্রী পাঠাচ্ছি। তাফসীরকারেরা শব্দটির ব্যাখ্যা দেন একই গড়নের অন্য শব্দে। তাবারী বলেন বাইসূ, অর্থাৎ যারা তাকে উঠিয়ে আনবে। মুয়াসসার বলে মুখরিজূ, যারা বের করে আনবে। কুরতুবী বলেন মুখরিজূহা, আর বাগাভী দুটোকেই একসঙ্গে রাখেন: বাইসূহা ওয়া মুখরিজূহা। তাঁদের পাঠে পাঠানো মানে তাকে বের করে আনা। কোথা থেকে, তাবারী তা-ও বলেন। সামূদ সালিহ (আঃ)-এর কাছে এই উষ্ট্রীই চেয়েছিল, হাদবা থেকে, অর্থাৎ উঁচু পাথুরে ভূমি থেকে। সেখান থেকেই তাকে বের করে আনার দাবি তারা তুলেছিল।"
          },
          {
            "en": "Each commentator adds a line on that request. At-Tabari calls her a sign for them, and a proof for Salih (AS) of the reality of his prophethood and the truth of his word. Al-Baghawi says they were being obstinate with him (ta'annatu), asking him to bring out of a rock a red she-camel, heavy with young. Ibn Kathir says Allah brought out for them a great she-camel, heavy with young, from a solid rock, in accordance with what they had asked, so that she would be Allah's proof against them.",
            "bn": "সেই দাবি নিয়ে প্রত্যেক তাফসীরকার একটা করে কথা যোগ করেন। তাবারীর ভাষায় উষ্ট্রী ছিল তাদের জন্য নিদর্শন, আর সালিহ (আঃ)-এর পক্ষে প্রমাণ যে তাঁর নবুওয়াত সত্য, তাঁর কথাও সত্য। বাগাভী বলেন, তারা তাঁর সঙ্গে জেদ ধরেছিল (তাআন্নাতূ)। দাবি ছিল, পাথরের ভেতর থেকে লাল রঙের এক গর্ভবতী উষ্ট্রী বের করে আনতে হবে। ইবন কাসীর বলেন, তারা যেমন চেয়েছিল ঠিক তেমনি আল্লাহ নিরেট পাথর থেকে তাদের জন্য বিশাল এক গর্ভবতী উষ্ট্রী বের করে আনলেন, যাতে সে তাদের বিরুদ্ধে আল্লাহর প্রমাণ হয়ে থাকে।"
          },
          {
            "en": "Al-Qurtubi adds a narration introduced only with fa-ruwiya, it is narrated: that Salih (AS) prayed two rak'ahs and made supplication, and the rock they had specified split open and a she-camel came out. He gives no chain and no grading for it, so it is reported here as he frames it, a narration and nothing firmer. The fuller account of the emergence and the terms at the well is in the article on 26:155, a verse the abridged Ibn Kathir cites in this same passage.",
            "bn": "কুরতুবী একটি বর্ণনা আনেন শুধু 'ফারুবিয়া', অর্থাৎ 'বর্ণিত আছে' বলে। বর্ণনাটি হলো, সালিহ (আঃ) দুই রাকআত নামাজ পড়ে দোয়া করলেন। তখন তাদের ঠিক করে দেওয়া পাথরটি ফেটে গেল, আর বেরিয়ে এল একটি উষ্ট্রী। কুরতুবী এর কোনো সনদ দেননি, মানও বলেননি। তাই এখানে বর্ণনাটি তিনি যেভাবে এনেছেন সেভাবেই রাখা হলো, এর বেশি জোর দিয়ে নয়। উষ্ট্রীর বের হয়ে আসা আর কূপের পালার পুরো বিবরণ আছে ২৬:১৫৫ আয়াতের প্রবন্ধে। সংক্ষিপ্ত ইবন কাসীর এই একই আলোচনায় সে আয়াতটি উদ্ধৃত করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Glosses for Fitna",
          "bn": "ফিতনার ছয় ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Fitnatan lahum: a trial for them. Every commentator fetched for this verse glosses the word from the same family of meaning. Ibn Kathir and al-Muyassar say ikhtibaran lahum, as a testing of them, and al-Qurtubi says ikhtibaran too. Al-Baghawi says mihnatan wa-ikhtibaran, an ordeal and a testing. As-Sa'di says ikhtibaran minhu lahum wa-imtihanan, a testing from Him for them and an examination. At-Tabari says ibtila'an lahum wa-ikhtibaran, a trial for them and a testing. On this word the six agree, and none of them reads it any other way here.",
            "bn": "ফিতনাতাল লাহুম: তাদের জন্য পরীক্ষা। এ আয়াতের জন্য যে কয়টি তাফসীর পড়া হয়েছে, সবগুলোই শব্দটির ব্যাখ্যা দেয় একই অর্থের ঘর থেকে। ইবন কাসীর আর মুয়াসসার বলেন ইখতিবারান লাহুম, তাদের যাচাই করার জন্য। কুরতুবীও বলেন ইখতিবারান। বাগাভী বলেন মিহনাতান ওয়া ইখতিবারান, কঠিন পরীক্ষা ও যাচাই। সা'দী বলেন ইখতিবারান মিনহু লাহুম ওয়া ইমতিহানান, তাঁর পক্ষ থেকে তাদের যাচাই ও পরীক্ষা। তাবারী বলেন ইবতিলাআন লাহুম ওয়া ইখতিবারান, তাদের জন্য পরীক্ষা ও যাচাই। এ শব্দে ছয়টি তাফসীরই একমত। এখানে কেউ একে অন্য কোনো অর্থে পড়েননি।"
          },
          {
            "en": "At-Tabari spells out what was being tested, as a question with two sides. Once the she-camel was sent, would they believe in Allah, follow Salih (AS) and accept the tawhid he called them to? Or would they call him a liar and disbelieve in Allah? The sign does not settle that question; it puts it to them. Al-Qurtubi adds a note of grammar that points the same way: fitnatan is a maf'ul lahu, an object of purpose. The she-camel was sent for the sake of the testing.",
            "bn": "কী যাচাই হচ্ছিল, তাবারী তা খুলে বলেন দুই দিকের এক প্রশ্নে। উষ্ট্রী পাঠানোর পর তারা কি আল্লাহর উপর ঈমান আনবে, সালিহ (আঃ)-এর অনুসরণ করবে, আর তিনি যে তাওহীদের দিকে ডাকছেন তা মেনে নেবে? নাকি তাঁকে মিথ্যুক বলবে আর আল্লাহকে অস্বীকার করবে? নিদর্শন প্রশ্নের মীমাংসা করে না, প্রশ্নটা তাদের সামনে রাখে। কুরতুবী ব্যাকরণের একটা কথা যোগ করেন, যা একই দিকে ইঙ্গিত করে। ফিতনাতান শব্দটি মাফঊল লাহু, অর্থাৎ উদ্দেশ্য বোঝানো কর্ম। উষ্ট্রী পাঠানো হয়েছিল পরীক্ষারই জন্য।"
          },
          {
            "en": "Whose she-camel was she? The verse says only an-naqah, the she-camel. At-Tabari, explaining the commands that follow, names her naqat Allah: wait, he has Allah tell Salih (AS), and see what they will do with Allah's she-camel. The possessive is his wording on this verse, and it is reported here as his phrase rather than the verse's. It fits his reading of the test, since what they did to her would show what they did with a sign that belonged to Allah.",
            "bn": "উষ্ট্রীটি কার? আয়াতে আছে শুধু আন-নাকা, উষ্ট্রীটি। পরের আদেশগুলোর ব্যাখ্যায় তাবারী তাকে বলেন নাকাতুল্লাহ, আল্লাহর উষ্ট্রী। তাঁর ভাষ্যে আল্লাহ সালিহ (আঃ)-কে বলছেন, অপেক্ষা করো, দেখো তারা আল্লাহর উষ্ট্রীর সঙ্গে কী করে। এই সম্বন্ধটি এ আয়াতে তাবারীর নিজের শব্দ, তাই এখানে আয়াতের কথা হিসেবে নয়, তাঁর কথা হিসেবেই রাখা হলো। পরীক্ষা নিয়ে তাঁর পাঠের সঙ্গে কথাটা মিলে যায়। উষ্ট্রীর সঙ্গে তারা কী করে, তাতেই বোঝা যাবে আল্লাহর নিদর্শনের সঙ্গে তারা কী করল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gift Was the Exam",
          "bn": "নিয়ামতটাই ছিল পরীক্ষা"
        },
        "p": [
          {
            "en": "As-Sa'di brings out something the others leave implicit. Allah sent the she-camel, he writes, as one of the greatest blessings upon them (min akbar an-ni'am 'alayhim): a sign among the signs of Allah, and a blessing from whose udder they drew milk enough for all of them. Then he moves straight to the verse's word: fitnatan lahum, a testing from Him for them. In his reading the gift and the trial are not two different things. The very creature that fed them was the examination they were sitting.",
            "bn": "অন্যরা যা ইঙ্গিতে রেখে দেন, সা'দী তা সামনে আনেন। তিনি লেখেন, আল্লাহ উষ্ট্রীটি পাঠিয়েছিলেন তাদের উপর সবচেয়ে বড় নিয়ামতগুলোর একটি হিসেবে (মিন আকবারিন নিআমি আলাইহিম)। সে ছিল আল্লাহর নিদর্শনগুলোর একটি, আবার এমন এক নিয়ামত, যার ওলান থেকে তারা সবাই পেট ভরে দুধ দোহন করত। এর পরপরই তিনি আসেন আয়াতের শব্দে: ফিতনাতাল লাহুম, তাঁর পক্ষ থেকে তাদের যাচাই। তাঁর পাঠে নিয়ামত আর পরীক্ষা আলাদা দুটি জিনিস নয়। যে প্রাণী তাদের খাওয়াচ্ছিল, সে-ই ছিল তাদের পরীক্ষার খাতা।"
          },
          {
            "en": "That is worth sitting with. We tend to file blessings and trials in separate drawers, the first to be enjoyed and the second to be endured. As-Sa'di's sentence joins them. A gift is also a question about what its receiver will do with it. Thamud asked for a wonder, received it as they had described it, and the wonder became the measure of them. The verse does not say the test was heavy. It says only that it was a test, and that their response would be watched.",
            "bn": "কথাটা নিয়ে একটু থামা দরকার। আমরা সাধারণত নিয়ামত আর পরীক্ষাকে দুই আলাদা তাকে তুলে রাখি। প্রথমটা উপভোগের জন্য, দ্বিতীয়টা সহ্য করার জন্য। সা'দীর বাক্য দুটোকে এক করে দেয়। প্রতিটি দানই আসলে প্রশ্নও: যে পেল, সে এটা দিয়ে কী করবে? সামূদ এক আশ্চর্য নিদর্শন চেয়েছিল, যেমনটা বলেছিল তেমনটাই পেয়েছিল। আর সেই নিদর্শনই হয়ে গেল তাদের মাপার দাঁড়িপাল্লা। আয়াত বলে না যে পরীক্ষাটা ভারী ছিল। শুধু বলে, এটা পরীক্ষা, আর তাদের আচরণের দিকে নজর রাখা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Watching for Which Outcome",
          "bn": "নজর কোন পরিণতির দিকে"
        },
        "p": [
          {
            "en": "Fa-rtaqibhum: so watch them. Ibn Kathir says the command is addressed to Allah's servant and messenger Salih (AS), and at-Tabari and al-Muyassar also name him as the person spoken to. At-Tabari renders the verb with two of his own, intazirhum wa-tabassar, wait for them and look closely at what they will do with her. Al-Qurtubi says wait for what they do, and al-Baghawi says wait for what they are going to do. For these three the watching is fixed on the people's conduct toward the sign.",
            "bn": "ফারতাকিবহুম: তাই তাদের লক্ষ্য করো। ইবন কাসীর বলেন, আদেশটি আল্লাহর বান্দা ও রাসূল সালিহ (আঃ)-কে। তাবারী আর মুয়াসসারও তাঁকেই সম্বোধিত বলে উল্লেখ করেন। তাবারী ক্রিয়াটির অর্থ বলেন নিজের দুটি ক্রিয়া দিয়ে: ইনতাযিরহুম ওয়া তাবাসসার, তাদের জন্য অপেক্ষা করো, আর ভালো করে দেখো উষ্ট্রীর সঙ্গে তারা কী করে। কুরতুবী বলেন, তারা কী করে তার অপেক্ষা করো। বাগাভীও বলেন, তারা কী করতে যাচ্ছে তার অপেক্ষা করো। এই তিনজনের পাঠে নজর থাকে নিদর্শনের প্রতি মানুষের আচরণের দিকে।"
          },
          {
            "en": "Al-Muyassar points the watching elsewhere: wait, O Salih, for the punishment that will come down upon them. Ibn Kathir keeps it open: wait for what their affair will come to. As-Sa'di holds both readings and joins them with aw, or: watch for what will befall them, or watch whether they will believe or disbelieve. So one reading watches the people's choice, and another watches the end that Allah will bring. The commentators record both, and this article keeps them both without choosing between them.",
            "bn": "মুয়াসসার নজরটা অন্য দিকে ঘোরায়: হে সালিহ, তাদের উপর যে আযাব নেমে আসবে তার অপেক্ষা করো। ইবন কাসীর কথাটা খোলা রাখেন: তাদের ব্যাপারটা শেষে কোথায় গিয়ে দাঁড়ায়, তার অপেক্ষা করো। সা'দী দুই পাঠই রাখেন, আর 'আও' বা 'অথবা' দিয়ে জুড়ে দেন। তাদের উপর কী নেমে আসে তা লক্ষ্য করো, অথবা লক্ষ্য করো তারা ঈমান আনে নাকি কুফরি করে। তাহলে একটি পাঠ দেখে মানুষের বেছে নেওয়া পথ, আরেক পাঠ দেখে আল্লাহ যে পরিণতি আনবেন। তাফসীরকারেরা দুটোই লিখে রেখেছেন। এ প্রবন্ধও কোনোটাকে বেছে না নিয়ে দুটোই রাখল।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Without a Stated Object",
          "bn": "যে ধৈর্যের বিষয় বলা নেই"
        },
        "p": [
          {
            "en": "Wa-stabir: and be patient. The verse names no object for the patience, and the commentators supply different ones. At-Tabari reads it as patience in the watching itself: be patient in waiting on them, and do not hasten. Al-Baghawi gives the same first, patience in watching them, and then adds, under wa-qila, it is said, patience over the harm that reaches you. Al-Qurtubi takes that second reading as the meaning: be patient with their harm (adhahum). Al-Muyassar joins two fronts: be patient in calling them, and with their harm to you.",
            "bn": "ওয়াসতাবির: আর ধৈর্য ধরো। কিসের উপর ধৈর্য, আয়াত তা বলেনি। তাফসীরকারেরা ভিন্ন ভিন্ন বিষয় বসান। তাবারী একে পড়েন অপেক্ষার ভেতরের ধৈর্য হিসেবে: তাদের অপেক্ষায় ধৈর্য ধরো, তাড়াহুড়া কোরো না। বাগাভীও প্রথমে একই কথা বলেন, তাদের লক্ষ্য করার ধৈর্য। তারপর 'ওয়া কীলা', অর্থাৎ 'বলা হয়' দিয়ে যোগ করেন, তোমার উপর যে কষ্ট আসে তাতে ধৈর্য। কুরতুবী এই দ্বিতীয় পাঠটিকেই অর্থ হিসেবে নেন: তাদের দেওয়া কষ্টে (আযাহুম) ধৈর্য ধরো। মুয়াসসার দুটি দিক একসঙ্গে রাখে: তাদের দাওয়াত দেওয়ায় ধৈর্য, আর তোমাকে দেওয়া তাদের কষ্টে ধৈর্য।"
          },
          {
            "en": "As-Sa'di keeps the patience on the work itself: be patient in your calling them. Ibn Kathir widens it into a promise: be patient with them, for the final outcome is yours, and victory is yours, in this world and the Hereafter. Laid side by side, the readings name four places where patience is asked for: in waiting without hurrying, in bearing harm, in going on with the call, and in trusting the end. Each commentator names the front he sees; the verse's single word, left without an object, leaves room for them all.",
            "bn": "সা'দী ধৈর্যকে রাখেন কাজের উপরেই: তাদের দাওয়াত দিয়ে যাওয়ায় ধৈর্য ধরো। ইবন কাসীর একে প্রতিশ্রুতিতে বিস্তৃত করেন: তাদের ব্যাপারে ধৈর্য ধরো, কেননা শেষ পরিণতি তোমারই, বিজয়ও তোমার, দুনিয়াতে আর আখিরাতে। পাঠগুলো পাশাপাশি রাখলে ধৈর্যের চারটি জায়গা চোখে পড়ে। তাড়াহুড়া না করে অপেক্ষা, কষ্ট সহ্য করা, দাওয়াত চালিয়ে যাওয়া, আর পরিণতির উপর আস্থা। প্রত্যেক তাফসীরকার যে দিকটা দেখেছেন, সেটার নাম বলেছেন। আয়াতের একটিমাত্র শব্দ, বিষয় না বলে, সবগুলোর জন্যই জায়গা খোলা রেখেছে।"
          },
          {
            "en": "Two commentators stop on the form of the word. At-Tabari notes that in wa-stabir the original letter was ta, which was turned into ta', and that the verb is the ifta'ala pattern built from sabr, patience. Al-Qurtubi gives the reason for the change: the ta became ta' to agree with the sad in itbaq, a quality of articulation that the two letters share. The shift is a matter of pronunciation. Neither commentator draws a further meaning from it, and this article does not add any.",
            "bn": "দুজন তাফসীরকার শব্দটির গড়ন নিয়ে থামেন। তাবারী বলেন, ওয়াসতাবির শব্দে মূল হরফ ছিল তা (ت), যা বদলে ত্বা (ط) হয়েছে। ক্রিয়াটি সবর বা ধৈর্য থেকে ইফতাআলা ছাঁচে গড়া। বদলের কারণ বলেন কুরতুবী: সোয়াদের সঙ্গে ইতবাকে মিল রাখতে তা হয়েছে ত্বা। ইতবাক উচ্চারণের এমন এক গুণ, যা দুই হরফেই আছে। বদলটা উচ্চারণের ব্যাপার। দুজনের কেউই এ থেকে বাড়তি কোনো অর্থ বের করেননি, এ প্রবন্ধও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Closed Story, Not a Label",
          "bn": "শেষ হওয়া কাহিনি, কারও তকমা নয়"
        },
        "p": [
          {
            "en": "This must be said plainly. Thamud are a people the Qur'an describes as having denied their messenger and been destroyed; 54:31 tells of the single blast that ended them. The verse describes only what the text describes: a sign sent to one ancient people, a test set before them, and commands given to their prophet. It licenses nothing against any living person or community. It is no verdict on anyone alive today, no ground for calling any group Thamud, and no warrant to despise a single living soul.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। কুরআনের বর্ণনায় সামূদ এমন এক জাতি, যারা তাদের রাসূলকে অস্বীকার করেছিল এবং ধ্বংস হয়ে গিয়েছিল। ৫৪:৩১ আয়াত বলে সেই একটিমাত্র গর্জনের কথা, যা তাদের শেষ করে দিয়েছিল। এ আয়াত কেবল ততটুকুই বলে, যতটুকু কুরআনের ভাষ্যে আছে। প্রাচীন এক জাতির কাছে পাঠানো নিদর্শন, তাদের সামনে রাখা পরীক্ষা, আর তাদের নবীকে দেওয়া আদেশ। আজ জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। এটি আজকের কারও উপর রায় নয়, কোনো দলকে সামূদ বলে ডাকার ভিত্তি নয়, কোনো জীবিত মানুষকে তুচ্ছ করার ছাড়পত্রও নয়।"
          },
          {
            "en": "Nor does the verse place Thamud on a modern map. The commentators fetched for it speak of a rock and of the high rocky ground they had pointed to, and go no further; this article stops where they stop. None of them attaches a hadith to this verse, so none is quoted here. And nothing in the verse or its glosses points to any fault in Salih (AS). He is the one addressed, commanded to watch and to be patient, with the promise, in Ibn Kathir's words, that the final outcome is his.",
            "bn": "আয়াতটি সামূদকে আজকের কোনো মানচিত্রেও বসায় না। এর জন্য যে তাফসীরগুলো পড়া হয়েছে, সেগুলো একটি পাথর আর তাদের দেখিয়ে দেওয়া উঁচু পাথুরে ভূমির কথা বলে, এর বেশি যায় না। এ প্রবন্ধও সেখানেই থামছে। কোনো তাফসীরকার এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেননি, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। আর আয়াতে বা তার ব্যাখ্যায় সালিহ (আঃ)-এর কোনো ত্রুটির ইঙ্গিত নেই। তিনিই সম্বোধিত। তাঁকে বলা হয়েছে লক্ষ্য রাখতে আর ধৈর্য ধরতে, সঙ্গে ইবন কাসীরের ভাষায় এই প্রতিশ্রুতি যে শেষ পরিণতি তাঁরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Waiting Well, Not Forcing",
          "bn": "জোর নয়, সুন্দর অপেক্ষা"
        },
        "p": [
          {
            "en": "What the verse asked of its first hearer it asks, in smaller measure, of anyone who calls others to the good. Salih (AS) had delivered his message and been called a liar for it. He was not told to argue harder or to bring the punishment nearer. He was told, in at-Tabari's words, to wait and not hasten, and in the words of others to bear the harm and keep calling. The result belonged to Allah. What was left in human hands was the watching, the patience and the call.",
            "bn": "প্রথম শ্রোতার কাছে আয়াত যা চেয়েছিল, ছোট পরিসরে তা চায় প্রত্যেকের কাছে, যে মানুষকে ভালোর দিকে ডাকে। সালিহ (আঃ) বার্তা পৌঁছে দিয়েছিলেন, আর তার জবাবে তাঁকে মিথ্যুক বলা হয়েছিল। তাঁকে আরও জোরে তর্ক করতে বলা হয়নি, আযাব কাছে টেনে আনতেও বলা হয়নি। তাবারীর ভাষায় তাঁকে বলা হয়েছিল অপেক্ষা করতে, তাড়াহুড়া না করতে। অন্যদের ভাষায় কষ্ট সইতে আর দাওয়াত চালিয়ে যেতে। ফল ছিল আল্লাহর হাতে। মানুষের হাতে বাকি ছিল শুধু লক্ষ্য রাখা, ধৈর্য আর দাওয়াত।"
          },
          {
            "en": "For the reader there are two questions here. The first is about gifts: what did I ask for, receive, and fail to recognise as a test of what I would do with it? The second is about the people I hope will change. Can I keep watching with patience, without forcing the outcome and without giving up on them? Thamud failed their test, as the next two verses show. The verse that sets that test before them also shows a prophet told to wait well, and that waiting is what the reader is invited to learn.",
            "bn": "পাঠকের জন্য এখানে দুটি প্রশ্ন। প্রথমটি নিয়ামত নিয়ে: কী চেয়েছিলাম, পেয়েছিলাম, অথচ বুঝিনি যে এটা দিয়ে আমি কী করি তারই পরীক্ষা চলছে? দ্বিতীয়টি সেই মানুষদের নিয়ে, যাদের বদলে যাওয়ার আশা করি। ফল জোর করে না চাপিয়ে, আবার তাদের থেকে হাল না ছেড়ে, আমি কি ধৈর্য ধরে লক্ষ্য রাখতে পারি? সামূদ তাদের পরীক্ষায় ব্যর্থ হয়েছিল, পরের দুই আয়াতে তা স্পষ্ট। যে আয়াত তাদের সামনে সেই পরীক্ষা রাখে, সেই আয়াতই দেখায় একজন নবীকে, যাঁকে বলা হয়েছে সুন্দরভাবে অপেক্ষা করতে। পাঠককে ডাকা হচ্ছে সেই অপেক্ষাটাই শিখতে।"
          }
        ]
      }
    ]
  }
});
