/**
 * Tadabbur long-form articles — surah 110.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "110:3": {
    "sections": [
      {
        "h": {
          "en": "After the Help Has Come",
          "bn": "সাহায্য এসে যাওয়ার পর"
        },
        "p": [
          {
            "en": "Fa-sabbih bi-hamdi rabbika wa-staghfirhu, innahu kana tawwaba: then glorify your Lord with His praise and seek His forgiveness; indeed He is ever turning in acceptance of repentance. Seven Arabic words close Surah an-Nasr. The opening fa- ties them to the two verses before: 110:1, when the help of Allah and the conquest come, and 110:2, and you see the people entering the religion of Allah in crowds. The first two verses describe an arrival. The third says what to do once it has arrived.",
            "bn": "ফাসাব্বিহ বিহামদি রাব্বিকা ওয়াসতাগফিরহু, ইন্নাহু কানা তাওয়াবা: তখন তোমার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো এবং তাঁর কাছে ক্ষমা চাও; নিশ্চয়ই তিনি বারবার তওবা কবুলকারী। সূরা নাসর শেষ হয় এই সাতটি আরবি শব্দে। শুরুর 'ফা' অক্ষরটি এগুলোকে আগের দুই আয়াতের সঙ্গে বেঁধে দেয়। ১১০:১ বলে, যখন আল্লাহর সাহায্য ও বিজয় আসবে; ১১০:২ বলে, আর তুমি দেখবে মানুষ দলে দলে আল্লাহর দীনে প্রবেশ করছে। প্রথম দুই আয়াতে আছে কিছু একটা এসে পৌঁছানোর ছবি। তৃতীয়টি জানায়, পৌঁছে যাওয়ার পর কী করতে হবে।"
          },
          {
            "en": "The verse holds two commands and one reason: glorify with praise, seek forgiveness, for He is tawwab. It names no reward, no warning and no enemy, only a Lord addressed as yours. Al-Muyassar reads the whole as preparation: when that happens, make ready to meet your Lord by glorifying Him much with His praise and seeking His forgiveness much. The commentators fetched for this verse read the command against the moment it names, the hour of victory, and most of their pages turn on what that pairing meant.",
            "bn": "আয়াতে আদেশ দুটি, আর কারণ একটি। প্রশংসাসহ পবিত্রতা ঘোষণা, ক্ষমা প্রার্থনা, কেননা তিনি তাওয়াব। এখানে কোনো পুরস্কারের কথা নেই, সতর্কবাণী নেই, শত্রুর নামও নেই। আছেন শুধু একজন রব, যাঁকে বলা হচ্ছে 'তোমার রব'। মুয়াসসার পুরো আয়াতকে প্রস্তুতির নির্দেশ হিসেবে পড়ে: যখন এসব ঘটবে, তখন বেশি বেশি তাসবীহ ও হামদ আর বেশি বেশি ইস্তিগফারের মাধ্যমে রবের সঙ্গে সাক্ষাতের জন্য তৈরি হও। এ আয়াতের যেসব তাফসীর সামনে আছে, সেগুলো আদেশটিকে পড়ে বিজয়ের মুহূর্তের পাশে রেখে। তাদের আলোচনার বড় অংশই এই প্রশ্ন ঘিরে যে বিজয়ের সঙ্গে এই দুই আদেশের জোড় বাঁধার মানে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Glory Carried by Praise",
          "bn": "হামদের সঙ্গে তাসবীহ"
        },
        "p": [
          {
            "en": "At-Tabari glosses the first command in a line: glorify your Lord and magnify Him with His praise and thanks, for what He has fulfilled for you of His promise. Then he adds the reason the verse leaves unsaid: for you will then be joining Him, and tasting what the messengers before you tasted of death. He says the people of interpretation said the like. In his reading the praise answers a promise kept, and the same glorifying is a preparation for departure.",
            "bn": "তাবারী প্রথম আদেশের ব্যাখ্যা দেন এক লাইনে: তোমার রবের পবিত্রতা ঘোষণা করো, তাঁর প্রশংসা ও শোকর দিয়ে তাঁর মহিমা বর্ণনা করো, কেননা তিনি তোমাকে দেওয়া ওয়াদা পূরণ করেছেন। তারপর তিনি সেই কারণটি জুড়ে দেন, যা আয়াতে মুখে বলা হয়নি: তখন তুমি তাঁর কাছে চলে যাবে, আর তোমার আগের রাসূলেরা মৃত্যুর যে স্বাদ নিয়েছেন, তুমিও তা নেবে। তিনি বলেন, তাফসীরের আলেমরাও এমনই বলেছেন। তাঁর পাঠে প্রশংসা হলো রক্ষিত ওয়াদার জবাব। আর সেই একই তাসবীহ বিদায়ের প্রস্তুতিও।"
          },
          {
            "en": "Al-Qurtubi gives two readings. In the first, the command means: when you pray, do much of this; and it is said that sabbih here means pray, which he reports from Ibn 'Abbas. Bi-hamdi rabbika then means praising Him for the triumph and the conquest He gave you. In the second, tasbih is tanzih, declaring Him free of whatever is unfitting for Him, joined to your thanks, with istighfar as asking for forgiveness while keeping up remembrance. Al-Qurtubi says the first is the more apparent.",
            "bn": "কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটিতে আদেশের অর্থ: যখন নামায পড়বে, তখন এটি বেশি বেশি বলবে। বলা হয়েছে, এখানে 'সাব্বিহ' মানে নামায পড়ো, আর এ কথা তিনি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন। সে অনুযায়ী 'বিহামদি রাব্বিকা' মানে, তিনি যে জয় ও বিজয় দিয়েছেন তার জন্য তাঁর প্রশংসা করা। দ্বিতীয়টিতে তাসবীহ মানে তানযীহ: তাঁর জন্য যা শোভা পায় না, তা থেকে তাঁকে পবিত্র ঘোষণা করা, সঙ্গে শোকর। আর ইস্তিগফার হলো জিকির চালু রেখে মাগফিরাত চাওয়া। কুরতুবী বলেন, প্রথম ব্যাখ্যাটিই বেশি স্পষ্ট।"
          },
          {
            "en": "As-Sa'di frames the whole command as thanks: after the help and the conquest, Allah commanded His Messenger to thank his Lord for it, glorify Him with His praise and seek His forgiveness. Thanks carries a promise, and he quotes it, 14:7: if you are grateful, I will surely increase you. He reads in the verse a pointer that help for this religion would continue and grow through such thanks, and says it did, in the time of the rightly guided caliphs and after, until disobedience brought division.",
            "bn": "সা'দী পুরো আদেশটিকে দেখেন শোকর হিসেবে। সাহায্য ও বিজয় আসার পর আল্লাহ তাঁর রাসূলকে আদেশ দিলেন রবের শোকর আদায় করতে, প্রশংসাসহ তাঁর তাসবীহ পড়তে আর তাঁর কাছে ইস্তিগফার করতে। শোকরের সঙ্গে একটি ওয়াদা জড়ানো, আর সা'দী সেটি উদ্ধৃত করেন ১৪:৭ থেকে: তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের আরও দেব। তাঁর মতে আয়াতে একটি ইঙ্গিত আছে যে এমন শোকরের ফলে এই দীনের প্রতি সাহায্য অব্যাহত থাকবে ও বাড়বে। তিনি বলেন, তা-ই হয়েছে খুলাফায়ে রাশেদীনের যুগে এবং তার পরেও, যতক্ষণ না নাফরমানি বিভেদ ডেকে আনল।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Conquest Is Meant",
          "bn": "কোন বিজয়ের কথা বলা হলো"
        },
        "p": [
          {
            "en": "Ibn Kathir states that al-fath here is the conquest of Makkah, and calls it a single view. His reason is historical: the Arab tribes were holding back their Islam until Makkah fell, saying that if he prevailed over his own people he was a prophet. When Allah opened Makkah to him they entered the religion in crowds, and within two years the peninsula had gathered in faith. He supports this with al-Bukhari's report from 'Amr ibn Salama (Bukhari 4302) that at the conquest every people hurried to bring their Islam.",
            "bn": "ইবন কাসীর বলেন, এখানে 'আল-ফাতহ' মানে মক্কা বিজয়, আর এ ব্যাপারে মত একটিই। তাঁর কারণটি ইতিহাসের। আরবের গোত্রগুলো মক্কার পতন পর্যন্ত ইসলাম গ্রহণ ঝুলিয়ে রেখেছিল। তারা বলত, নিজের কওমের উপর জয়ী হলে বুঝব তিনি নবী। আল্লাহ যখন মক্কা তাঁর হাতে খুলে দিলেন, তারা দলে দলে দীনে ঢুকল, আর দুই বছর না যেতেই গোটা উপদ্বীপ ঈমানে একত্র হলো। এর সমর্থনে তিনি আমর ইবন সালামা থেকে বুখারীর বর্ণনা আনেন (বুখারী ৪৩০২): বিজয়ের সময় প্রত্যেক কওম ইসলাম নিয়ে ছুটে এসেছিল।"
          },
          {
            "en": "Al-Baghawi likewise glosses al-fath as the conquest of Makkah, and so does the fuller wording of 'A'isha's report in Muslim, discussed below. Yet one of at-Tabari's chains from Ibn 'Abbas records a different answer inside the same story: the men 'Umar questioned said the conquest meant the conquest of cities and palaces. Ibn Kathir's single view and that recorded answer are both kept here as the sources give them. On either reading, the verse ties its command not to a date but to a sign the Prophet ﷺ would see.",
            "bn": "বাগাভীও 'আল-ফাতহ'-এর অর্থ করেন মক্কা বিজয়। মুসলিমে আয়েশা (রাঃ)-এর বর্ণনার পূর্ণাঙ্গ ভাষ্যেও তা-ই আছে, যা সামনে আসছে। তবে ইবন আব্বাস (রাঃ) থেকে তাবারীর এক সনদে একই ঘটনার ভেতরে ভিন্ন একটি উত্তর পাওয়া যায়। উমর (রাঃ) যাঁদের জিজ্ঞেস করেছিলেন, তাঁরা বলেছিলেন, এ বিজয় হলো নগর ও প্রাসাদ জয়। ইবন কাসীরের 'একটিই মত' এবং বর্ণনায় আসা ওই উত্তর, দুটিই এখানে রাখা হলো যেভাবে সূত্রে আছে। যে অর্থই নেওয়া হোক, আয়াত তার আদেশকে কোনো তারিখের সঙ্গে বাঁধেনি। বেঁধেছে এমন এক আলামতের সঙ্গে, যা নবী ﷺ নিজ চোখে দেখবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Young Man Among Elders",
          "bn": "প্রবীণদের মাঝে এক তরুণ"
        },
        "p": [
          {
            "en": "Al-Bukhari records in his Sahih (Bukhari 4970) from Ibn 'Abbas (RA): \"'Umar used to bring me in with the elders of Badr, and it was as if one of them felt something in himself. He said: Why do you bring this one in with us when we have sons like him? 'Umar said: He is from where you know. One day he called them and brought me in with them, and I saw that he had called me that day only to show them.",
            "bn": "বুখারী তাঁর সহীহ গ্রন্থে (বুখারী ৪৯৭০) ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: \"উমর (রাঃ) আমাকে বদরের প্রবীণদের সঙ্গে বসাতেন। তাঁদের কারও কারও মনে যেন এতে খটকা লাগল। একজন বললেন, একে আমাদের সঙ্গে ঢোকান কেন, আমাদেরও তো এর মতো ছেলে আছে? উমর বললেন, সে কোথা থেকে এসেছে তা তো আপনারা জানেন। একদিন তিনি তাঁদের ডাকলেন এবং আমাকেও তাঁদের সঙ্গে বসালেন। আমি বুঝলাম, সেদিন আমাকে ডেকেছেন শুধু তাঁদের দেখানোর জন্য।"
          },
          {
            "en": "He said: What do you say about the words of Allah the Exalted, idha ja'a nasru Allahi wal-fath? Some of them said: We were commanded to praise Allah and seek His forgiveness when we are helped and given conquest. Others were silent and said nothing. Then he said to me: Is that what you say, Ibn 'Abbas? I said: No. He said: Then what do you say?",
            "bn": "তিনি বললেন, আল্লাহ তাআলার এই বাণী সম্পর্কে আপনারা কী বলেন: ইযা জাআ নাসরুল্লাহি ওয়াল ফাতহ? কেউ কেউ বললেন, আমাদের আদেশ দেওয়া হয়েছে, যখন আমরা সাহায্য পাব আর আমাদের বিজয় দেওয়া হবে, তখন যেন আল্লাহর প্রশংসা করি ও তাঁর কাছে ক্ষমা চাই। অন্যরা চুপ রইলেন, কিছুই বললেন না। তখন তিনি আমাকে বললেন, ইবন আব্বাস, তুমিও কি এ কথাই বলো? আমি বললাম, না। তিনি বললেন, তাহলে তুমি কী বলো?"
          },
          {
            "en": "I said: It is the term of the Messenger of Allah ﷺ, which He made known to him. He said: When the help of Allah and the conquest come, and that is the sign of your term, then glorify with the praise of your Lord and seek His forgiveness; indeed He is ever accepting of repentance. 'Umar said: I know nothing of it but what you say.\" The elders had restated the verse's plain command; Ibn 'Abbas read what the command signalled, and 'Umar agreed.",
            "bn": "আমি বললাম, এ হলো আল্লাহর রাসূল ﷺ-এর আয়ুর শেষ সময়, যা আল্লাহ তাঁকে জানিয়ে দিলেন। তিনি বললেন: যখন আল্লাহর সাহায্য ও বিজয় আসবে, আর সেটিই তোমার আয়ু ফুরানোর আলামত, তখন তোমার রবের প্রশংসাসহ তাসবীহ পড়ো এবং তাঁর কাছে ক্ষমা চাও; নিশ্চয়ই তিনি তওবা কবুলকারী। উমর বললেন, তুমি যা বলছ, এর বাইরে আমি এ সূরা থেকে কিছু জানি না।\" প্রবীণরা আয়াতের বাহ্যিক আদেশটিই আবার বলেছিলেন। ইবন আব্বাস (রাঃ) পড়েছেন আদেশটি কিসের ইঙ্গিত দিচ্ছে, আর উমর (রাঃ) তাতে সায় দিলেন।"
          },
          {
            "en": "Al-Baghawi, al-Qurtubi and Ibn Kathir all carry this report. At-Tabari gathers other chains to the same effect: Ibn 'Abbas reciting the surah up to wa-staghfirhu and saying, you will die; Mujahid on wa-staghfirhu innahu kana tawwaba: know that you will die at that; al-Dahhak calling the surah a sign of the death of the Messenger of Allah ﷺ. In at-Tabari's report through Qatada, Ibn 'Abbas calls the surah a mark and a limit that Allah set for His Prophet ﷺ, announcing his death to him.",
            "bn": "বাগাভী, কুরতুবী ও ইবন কাসীর তিনজনই এ বর্ণনা এনেছেন। তাবারী একই অর্থের আরও কয়েকটি সনদ জড়ো করেন। এক বর্ণনায় ইবন আব্বাস (রাঃ) সূরাটি 'ওয়াসতাগফিরহু' পর্যন্ত পড়ে বলেন, আপনি ইন্তেকাল করবেন। মুজাহিদ 'ওয়াসতাগফিরহু ইন্নাহু কানা তাওয়াবা' সম্পর্কে বলেন, জেনে রাখো, তখনই তোমার মৃত্যু হবে। দাহহাক বলেন, এ সূরা ছিল আল্লাহর রাসূল ﷺ-এর ইন্তেকালের নিদর্শন। কাতাদার সূত্রে তাবারীর বর্ণনায় ইবন আব্বাস বলেন, এ সূরা আল্লাহর ঠিক করে দেওয়া এক চিহ্ন ও সীমারেখা, যা দিয়ে তিনি তাঁর নবী ﷺ-কে তাঁর ইন্তেকালের খবর জানালেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Inside the Prayer",
          "bn": "নামাযের ভেতরে আয়াতটি"
        },
        "p": [
          {
            "en": "'A'isha (RA) describes what the Prophet ﷺ did with the verse. Al-Bukhari records (Bukhari 4968): \"The Messenger of Allah ﷺ used to say often in his bowing and his prostration: Subhanaka Allahumma rabbana wa bi-hamdika, Allahumma-ghfir li (Glory be to You, O Allah our Lord, and with Your praise; O Allah, forgive me), interpreting the Qur'an.\" Ibn Kathir, al-Baghawi, at-Tabari and al-Qurtubi all carry it, and as-Sa'di cites it. The abridged English Ibn Kathir explains the last phrase as showing the verse's implementation.",
            "bn": "নবী ﷺ আয়াতটি নিয়ে কী করেছিলেন, তা জানান আয়েশা (রাঃ)। বুখারী বর্ণনা করেন (বুখারী ৪৯৬৮): \"আল্লাহর রাসূল ﷺ তাঁর রুকু ও সিজদায় বেশি বেশি বলতেন: সুবহানাকা আল্লাহুম্মা রাব্বানা ওয়া বিহামদিকা, আল্লাহুম্মাগফির লী (হে আল্লাহ, আমাদের রব, তোমার পবিত্রতা ঘোষণা করি তোমার প্রশংসাসহ; হে আল্লাহ, আমাকে ক্ষমা করো)। এভাবে তিনি কুরআনের তাফসীর করতেন।\" ইবন কাসীর, বাগাভী, তাবারী ও কুরতুবী সবাই হাদীসটি এনেছেন, সা'দীও এর উল্লেখ করেছেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ শেষ কথাটির ব্যাখ্যা দেয় এভাবে: তিনি আয়াতটিকে আমলে রূপ দিয়ে দেখাতেন।"
          },
          {
            "en": "Al-Bukhari also records from her (Bukhari 4967): \"The Prophet ﷺ did not pray any prayer after idha ja'a nasru Allahi wal-fath was revealed to him without saying in it: Subhanaka rabbana wa bi-hamdika, Allahumma-ghfir li.\" Al-Qurtubi cites this wording and notes that it is al-Bukhari's. The verse's two commands, glory with praise and then a plea for forgiveness, became words said inside the prayer itself, in the positions of bowing and prostration.",
            "bn": "বুখারী তাঁর থেকে আরও বর্ণনা করেন (বুখারী ৪৯৬৭): \"ইযা জাআ নাসরুল্লাহি ওয়াল ফাতহ নাযিল হওয়ার পর নবী ﷺ এমন কোনো নামায পড়েননি, যাতে তিনি বলেননি: সুবহানাকা রাব্বানা ওয়া বিহামদিকা, আল্লাহুম্মাগফির লী।\" কুরতুবী এই ভাষ্যটি উদ্ধৃত করে বলেন, শব্দগুলো বুখারীর। আয়াতের দুই আদেশ, প্রশংসাসহ তাসবীহ আর তারপর ক্ষমা প্রার্থনা, এভাবে নামাযের ভেতরেই উচ্চারিত কথায় পরিণত হলো, রুকু আর সিজদার অবস্থায়।"
          },
          {
            "en": "Muslim records in his Sahih (Muslim 484) from 'A'isha: \"The Messenger of Allah ﷺ used to say often before he died: Subhanaka wa bi-hamdika, astaghfiruka wa atubu ilayk. I said: Messenger of Allah, what are these words I see you have begun to say? He said: A sign has been set for me in my community; when I saw it, I said them: idha ja'a nasru Allahi wal-fath, to the end of the surah.\" At-Tabari carries this chain. In a fuller wording, which al-Baghawi and al-Qurtubi cite from Muslim and Ibn Kathir traces to him, his Lord had told him he would see the sign.",
            "bn": "মুসলিম তাঁর সহীহ গ্রন্থে (মুসলিম ৪৮৪) আয়েশা (রাঃ) থেকে বর্ণনা করেন: \"আল্লাহর রাসূল ﷺ ইন্তেকালের আগে বেশি বেশি বলতেন: সুবহানাকা ওয়া বিহামদিকা, আসতাগফিরুকা ওয়া আতূবু ইলাইক। আমি বললাম, হে আল্লাহর রাসূল, এই যে নতুন কথাগুলো আপনাকে বলতে দেখছি, এগুলো কী? তিনি বললেন, আমার উম্মতের মধ্যে আমার জন্য একটি আলামত ঠিক করা হয়েছে। যখন তা দেখেছি, তখন থেকে এগুলো বলছি: ইযা জাআ নাসরুল্লাহি ওয়াল ফাতহ, সূরার শেষ পর্যন্ত।\" তাবারীও এই সনদে হাদীসটি এনেছেন। আরও পূর্ণাঙ্গ একটি ভাষ্য বাগাভী ও কুরতুবী মুসলিম থেকে উদ্ধৃত করেন, আর ইবন কাসীরও তা মুসলিমের বরাতে উল্লেখ করেন। সেখানে আছে, তাঁর রব তাঁকে আগেই জানিয়েছিলেন যে তিনি এ আলামত দেখবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiveness at the Summit",
          "bn": "সাফল্যের চূড়ায় ইস্তিগফার"
        },
        "p": [
          {
            "en": "Why would the Prophet ﷺ be commanded to seek forgiveness? Al-Qurtubi raises the question himself, and in the same passage calls him ma'sum, protected. His first answer: the Prophet ﷺ held himself short before the greatness of what Allah had blessed him with, and counted against himself any shortfall in giving that favour its due. He offers a second possibility: the command means stay attached to Him, asking, hoping and humble, aware of falling short, so as never to rest on the sight of one's own deeds.",
            "bn": "নবী ﷺ-কে ক্ষমা চাইতে আদেশ দেওয়া হলো কেন? প্রশ্নটি কুরতুবী নিজেই তোলেন, আর একই আলোচনায় তাঁকে বলেন মাসূম, অর্থাৎ সুরক্ষিত। তাঁর প্রথম উত্তর: আল্লাহ তাঁকে যে বিশাল নিয়ামত দিয়েছিলেন, তার সামনে নবী ﷺ নিজেকে ছোট মনে করতেন। সেই নিয়ামতের হক আদায়ে যেটুকু ঘাটতি থাকতে পারে, তা তিনি নিজের বিরুদ্ধেই ধরতেন। দ্বিতীয় একটি সম্ভাবনাও কুরতুবী দেখান। আদেশের অর্থ হতে পারে: তাঁর সঙ্গে লেগে থাকো, চেয়ে, আশা করে, বিনয়ের সঙ্গে, নিজের ঘাটতির কথা মনে রেখে, যাতে নিজের আমলের দিকে তাকিয়ে তৃপ্ত হয়ে না পড়ো।"
          },
          {
            "en": "He then lists further answers, each under it is said, without ranking them: that istighfar is worship owed for its own sake, done as devotion rather than to obtain forgiveness; that it alerts his community, so they never feel secure and abandon seeking forgiveness; and that wa-staghfirhu means seek forgiveness for your community. Al-Qurtubi adds a line of his own: if he, protected as he was, is commanded to seek forgiveness, what then of anyone else?",
            "bn": "এরপর তিনি 'বলা হয়েছে' দিয়ে আরও কয়েকটি উত্তর সাজান, কোনোটিকে কোনোটির উপর প্রাধান্য না দিয়ে। এক, ইস্তিগফার নিজেই এক ইবাদত, যা মাগফিরাত পাওয়ার জন্য নয়, বন্দেগি হিসেবেই আদায় করতে হয়। দুই, এটি তাঁর উম্মতের জন্য সতর্কবার্তা, যাতে তারা নিশ্চিন্ত হয়ে ইস্তিগফার ছেড়ে না দেয়। তিন, 'ওয়াসতাগফিরহু' মানে তোমার উম্মতের জন্য ক্ষমা চাও। কুরতুবী নিজের পক্ষ থেকে একটি কথা যোগ করেন: তিনি সুরক্ষিত হয়েও যদি ইস্তিগফারের আদেশ পান, তাহলে অন্যদের অবস্থা কী হওয়া উচিত?"
          },
          {
            "en": "Two more answers turn on completion. In al-Baghawi, al-Hasan says the Prophet ﷺ was told his term had drawn near, so he was commanded glorification and repentance, that his life be sealed with an increase in righteous deeds. As-Sa'di observes that excellent acts, such as the prayer and the Hajj, are sealed with istighfar; his was an excellent life, so the command signalled its close, to make ready to meet his Lord. The commentators set these answers side by side, and none is chosen here.",
            "bn": "আরও দুটি উত্তর পূর্ণতার সঙ্গে জড়িত। বাগাভীর বর্ণনায় হাসান বসরী বলেন, নবী ﷺ-কে জানানো হয়েছিল যে তাঁর সময় ঘনিয়ে এসেছে। তাই তাঁকে তাসবীহ ও তওবার আদেশ দেওয়া হলো, যাতে নেক আমলের বৃদ্ধি দিয়ে তাঁর জীবনের সমাপ্তি হয়। সা'দী লক্ষ করেন, নামায ও হজের মতো শ্রেষ্ঠ আমলগুলো শেষ হয় ইস্তিগফার দিয়ে। নবী ﷺ-এর জীবন ছিল শ্রেষ্ঠ জীবন। তাই এ আদেশ ইঙ্গিত দিল যে সে জীবন শেষের পথে, এখন রবের সঙ্গে সাক্ষাতের প্রস্তুতি নেওয়ার পালা। তাফসীরকারেরা এসব উত্তর পাশাপাশি রেখেছেন, এখানেও কোনোটি বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "He Is Ever Turning",
          "bn": "তাওয়াব: বারবার ফেরেন যিনি"
        },
        "p": [
          {
            "en": "Innahu kana tawwaba. At-Tabari explains: He is ever turning back to His servant who obeys, toward what He loves; and the pronoun in innahu refers to Allah. Al-Muyassar gives tawwab as much-turning: He turns often toward those who glorify and seek forgiveness, turning to them, having mercy on them and accepting their repentance. Al-Qurtubi gives almost the same sentence. In both readings, the closing description is spoken about exactly the people who do what the verse has just asked.",
            "bn": "ইন্নাহু কানা তাওয়াবা। তাবারী ব্যাখ্যা করেন: তিনি তাঁর অনুগত বান্দার দিকে বারবার ফিরে আসেন, সেদিকে যা তিনি ভালোবাসেন। আর 'ইন্নাহু'-র সর্বনামটি আল্লাহকেই বোঝায়। মুয়াসসার তাওয়াবের অর্থ করে 'বেশি বেশি ফিরে আসেন যিনি'। যারা তাসবীহ পড়ে ও ক্ষমা চায়, তাদের দিকে তিনি বারবার ফেরেন, তাদের উপর রহম করেন, তাদের তওবা কবুল করেন। কুরতুবীর বাক্যও প্রায় হুবহু এক। দুই ব্যাখ্যাতেই শেষ বিশেষণটি ঠিক তাদের কথাই বলে, যারা আয়াতের এইমাত্র দেওয়া আদেশ পালন করে।"
          },
          {
            "en": "The verse asks for istighfar and answers with tawwab, a word from the same root as tawba, turning back in repentance. The Prophet's own words in Muslim's report join the two: astaghfiruka wa atubu ilayk, I seek Your forgiveness and turn to You. Ma'arif al-Qur'an draws the general counsel that when the approach of death is sensed, one should exert oneself greatly in tasbih and istighfar. The request and the welcome sit in one verse, a few words apart.",
            "bn": "আয়াত চায় ইস্তিগফার, আর উত্তরে আনে 'তাওয়াব' শব্দটি, যার মূল আর তওবার মূল একই: অনুতপ্ত হয়ে ফিরে আসা। মুসলিমের বর্ণনায় নবী ﷺ-এর নিজের কথায় দুটি একসঙ্গে এসেছে: আসতাগফিরুকা ওয়া আতূবু ইলাইক, আমি তোমার কাছে ক্ষমা চাই এবং তোমার দিকে ফিরে আসি। মাআরিফুল কুরআন এ থেকে একটি সাধারণ উপদেশ টানে: মৃত্যু কাছে এসেছে বলে অনুভব হলে মানুষের উচিত তাসবীহ ও ইস্তিগফারে খুব বেশি মনোযোগী হওয়া। চাওয়া আর সাদর গ্রহণ, দুটিই একই আয়াতে, কয়েকটি শব্দের ব্যবধানে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Surah Came Down",
          "bn": "সূরাটি কখন নাযিল হলো"
        },
        "p": [
          {
            "en": "The reports on when the surah came down differ, and they are given here as recorded. Ibn Kathir cites an-Nasa'i: Ibn 'Abbas asked 'Ubaydullah ibn 'Abdullah ibn 'Utbah which surah was revealed last; he named this surah, and Ibn 'Abbas said he had spoken truly. At-Tabari records from 'Ata' ibn Yasar that it came down whole in Madinah after the conquest of Makkah. Al-Qurtubi, under it is said, places it at Mina in the Farewell Hajj, and reports from Ibn 'Umar that 5:3 came down after it.",
            "bn": "সূরাটি কখন নাযিল হয়েছিল, সে বিষয়ে বর্ণনাগুলো এক নয়। এখানে সেগুলো রাখা হলো যেভাবে বর্ণিত। ইবন কাসীর নাসাঈর বরাতে আনেন: ইবন আব্বাস (রাঃ) উবায়দুল্লাহ ইবন আবদুল্লাহ ইবন উতবাকে জিজ্ঞেস করলেন, সর্বশেষ নাযিল হওয়া সূরা কোনটি। তিনি এই সূরার নাম বললেন, আর ইবন আব্বাস বললেন, তুমি ঠিক বলেছ। তাবারী আতা ইবন ইয়াসার থেকে বর্ণনা করেন, পুরো সূরাটি মদীনায় নাযিল হয়েছিল মক্কা বিজয়ের পর। কুরতুবী 'বলা হয়েছে' বলে এর স্থান দেন বিদায় হজে মিনায়, আর ইবন উমর (রাঃ) থেকে বর্ণনা করেন যে এরপর নাযিল হয় ৫:৩।"
          },
          {
            "en": "On how long the Prophet ﷺ lived afterwards, Qatada, in at-Tabari and al-Baghawi, says two years; Muqatil, in al-Qurtubi, says sixty days; Ibn 'Umar's report gives eighty days after this surah and 5:3. No fetched commentary attaches a hadith about another name for the surah. Several reports describe his response: Ibn Kathir cites Ibn 'Abbas that he then took up the hardest striving for the Hereafter he had ever shown. The verse meets success with more worship, not less.",
            "bn": "এরপর নবী ﷺ কতদিন জীবিত ছিলেন, তা নিয়েও ভিন্নতা আছে। তাবারী ও বাগাভীতে কাতাদা বলেন দুই বছর। কুরতুবীতে মুকাতিল বলেন ষাট দিন। ইবন উমর (রাঃ)-এর বর্ণনায় এ সূরা ও ৫:৩ নাযিলের পর আশি দিন। সূরার অন্য কোনো নাম নিয়ে কোনো হাদীস সামনে থাকা তাফসীরগুলোর কোনোটি এই আয়াতের সঙ্গে যুক্ত করেনি। তবে তাঁর সাড়া কেমন ছিল, তা একাধিক বর্ণনায় এসেছে। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন, এরপর তিনি আখিরাতের জন্য এত কঠোর সাধনায় লেগে গেলেন, যা আগে কখনো দেখা যায়নি। আয়াতটি সাফল্যের জবাব দেয় কম নয়, আরও বেশি ইবাদত দিয়ে।"
          }
        ]
      }
    ]
  }
});
