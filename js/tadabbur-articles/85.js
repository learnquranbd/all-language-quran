/**
 * Tadabbur long-form articles — surah 85.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "85:10": {
    "sections": [
      {
        "h": {
          "en": "Eight Words, Then Six",
          "bn": "আট শব্দ, তারপর ছয়"
        },
        "p": [
          {
            "en": "Inna alladhina fatanu al-mu'minina wa-l-mu'minati thumma lam yatubu fa-lahum 'adhabu jahannama wa-lahum 'adhabu al-hariq: indeed, those who put the believing men and believing women to fitnah, then did not repent, for them is the punishment of Hell, and for them is the punishment of burning. The verse is fourteen Arabic words. The first eight name a deed and a condition. The last six give the outcome in two matching halves of three words each, lahum 'adhab and lahum 'adhab, so that two punishments stand side by side.",
            "bn": "ইন্নাল্লাযীনা ফাতানুল মু'মিনীনা ওয়াল মু'মিনাতি সুম্মা লাম ইয়াতূবূ ফালাহুম 'আযাবু জাহান্নামা ওয়ালাহুম 'আযাবুল হারীক: যারা মুমিন পুরুষ ও মুমিন নারীদের ফিতনায় ফেলেছে, তারপর তওবা করেনি, তাদের জন্য আছে জাহান্নামের শাস্তি, আর তাদের জন্য আছে দগ্ধ হওয়ার শাস্তি। আয়াতটি চৌদ্দটি আরবি শব্দের। প্রথম আটটি শব্দে একটি কাজ আর একটি শর্ত। শেষ ছয়টি শব্দে পরিণাম, দুটি জোড়া অংশে, প্রতিটিতে তিনটি করে শব্দ: লাহুম 'আযাব, আবার লাহুম 'আযাব। ফলে দুটি শাস্তি পাশাপাশি দাঁড়িয়ে যায়।"
          },
          {
            "en": "The verse comes straight after the passage on the Companions of the Ditch, 85:4 to 85:9, which this entry does not retell. Those verses describe the fire, the ones who sat beside it as witnesses to what they were doing, and the single grievance they held against the believers: that they believed in Allah, the Mighty, the Praiseworthy. Verse 85:10 turns from that scene to a ruling. The sections below set out what the commentators say about its three parts: the deed, the condition, and the two punishments.",
            "bn": "আয়াতটি এসেছে আসহাবুল উখদূদ বা গর্তওয়ালাদের প্রসঙ্গের ঠিক পরে, ৮৫:৪ থেকে ৮৫:৯ আয়াতে। সেই কাহিনি এখানে আবার বলা হবে না। ওই আয়াতগুলোতে আছে আগুনের কথা, আগুনের পাশে বসে থাকা লোকদের কথা, যারা নিজেদের কাজের সাক্ষী ছিল। আর আছে মুমিনদের বিরুদ্ধে তাদের একমাত্র আপত্তির কথা: তাঁরা মহাপরাক্রমশালী, প্রশংসিত আল্লাহর উপর ঈমান এনেছিলেন। ৮৫:১০ আয়াত সেই দৃশ্য থেকে সরে এসে একটি বিধান শোনায়। নিচের অংশগুলোতে আয়াতের তিনটি ভাগ নিয়ে তাফসীরকারদের কথা তুলে ধরা হলো: কাজটি, শর্তটি, আর দুটি শাস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Burned, Tormented, Put to Trial",
          "bn": "পুড়িয়েছে, নির্যাতন করেছে, পরীক্ষায় ফেলেছে"
        },
        "p": [
          {
            "en": "At-Tabari explains fatanu as ibtalaw: they put the believing men and women to trial over their faith in Allah by tormenting them and burning them with fire. He adds that the people of interpretation said much the same, and gives their words with chains. From Ibn 'Abbas: they burned the believing men and believing women. From Qatadah: they burned them with fire. From ad-Dahhak and from Ibn Abza: they burned them. From Mujahid the word is different: 'adhdhabu, they tormented. At-Tabari's own wording keeps both, torment and burning, side by side.",
            "bn": "তাবারী ফাতানূর ব্যাখ্যা দেন ইবতালাও দিয়ে: আল্লাহর উপর ঈমানের কারণে তারা মুমিন পুরুষ ও নারীদের পরীক্ষায় ফেলেছে, তাঁদের নির্যাতন করে আর আগুনে পুড়িয়ে। তিনি জানান, ব্যাখ্যাকারেরা প্রায় এ কথাই বলেছেন, আর সনদসহ তাঁদের কথা তুলে দেন। ইবন আব্বাস থেকে: তারা মুমিন পুরুষ ও মুমিন নারীদের পুড়িয়েছে। কাতাদাহ থেকে: তাঁদের আগুনে পুড়িয়েছে। দাহহাক আর ইবন আবযা থেকে: তাঁদের পুড়িয়েছে। মুজাহিদ থেকে আসা শব্দটি আলাদা: 'আযযাবূ, তারা নির্যাতন করেছে। তাবারীর নিজের ব্যাখ্যায় দুটোই পাশাপাশি আছে, নির্যাতন আর পোড়ানো।"
          },
          {
            "en": "Ibn Kathir gives a single gloss, harraqu, they burned, and names those who said it: Ibn 'Abbas, Mujahid, Qatadah, ad-Dahhak and Ibn Abza. So Mujahid appears in Ibn Kathir's list for burning, while at-Tabari's chain from Mujahid reports tormenting. The two do not clash, but they are not the same word. Al-Baghawi joins them: 'adhdhabu wa-ahraqu, they tormented and burned. The Muyassar says they burned them with fire to turn them away from Allah's religion. Ma'arif al-Qur'an translates fatanu as persecuted, a broader English word that leaves the means unstated, though its commentary goes on to speak of the fire pit.",
            "bn": "ইবন কাসীর একটিই অর্থ দেন, হাররাকূ, তারা পুড়িয়েছে। কারা এ কথা বলেছেন, তাও জানান: ইবন আব্বাস, মুজাহিদ, কাতাদাহ, দাহহাক ও ইবন আবযা। অর্থাৎ ইবন কাসীরের তালিকায় মুজাহিদের নাম পোড়ানোর পক্ষে, অথচ তাবারীর সনদে মুজাহিদের কথা নির্যাতন। দুটি কথার মধ্যে বিরোধ নেই, তবে শব্দ এক নয়। বাগাভী দুটোকে একসঙ্গে বলেন: 'আযযাবূ ওয়া আহরাকূ, নির্যাতন করেছে আর পুড়িয়েছে। মুয়াসসার বলে, আল্লাহর দ্বীন থেকে ফেরাতে তারা তাঁদের আগুনে পুড়িয়েছে। মাআরিফুল কুরআন ফাতানূর ইংরেজি করেছে persecuted, অর্থাৎ নিপীড়ন করেছে। ইংরেজি শব্দটির পরিসর বড়, উপায়ের কথা তাতে নেই, যদিও তার ব্যাখ্যা পরে আগুনের গর্তের কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Coin in the Furnace",
          "bn": "চুল্লিতে ফেলা দিনার"
        },
        "p": [
          {
            "en": "Al-Qurtubi also reads fatanu as they burned them with fire, and then shows where that sense sits in Arabic usage. The Arabs say fatana so-and-so the dirham or the dinar when he puts it into the furnace to see how good it is, and such a coin is called maftun. The goldsmith is called al-fattan, and so is Shaytan. Wariq fatin means burnt silver. A harra, a tract of black stone, is also called fatin, as though its stones had been burned by fire, because of their blackness.",
            "bn": "কুরতুবীও ফাতানূর অর্থ করেন, তাঁদের আগুনে পুড়িয়েছে। তারপর দেখান, আরবদের মুখের ভাষায় এই অর্থ কোথায় বসে আছে। কেউ দিরহাম বা দিনার কতটা খাঁটি তা দেখতে চুল্লিতে ঢোকালে আরবরা বলে, ফাতানা ফুলানুন। এমন মুদ্রাকে বলে মাফতূন। স্বর্ণকারকে বলা হয় আল-ফাত্তান, শয়তানকেও তাই বলা হয়। ওয়ারিক ফাতীন মানে পোড়া রুপা। কালো পাথরে ঢাকা এলাকা, যাকে হাররা বলে, সেটাকেও ফাতীন বলা হয়। পাথরগুলো এত কালো যে মনে হয় আগুনে পোড়ানো।"
          },
          {
            "en": "Al-Baghawi makes the same link more briefly: one says fatantu al-shay' when one has burned the thing. As a parallel he cites 51:13, yawma hum 'ala al-nari yuftanun, where the same verb is used of people over the Fire. With al-Qurtubi's coin and furnace in mind, the verb in 85:10 holds testing and burning together: a metal is tried by fire, and in this passage people were tried over their faith by fire. The commentators keep both senses in view and do not drop either.",
            "bn": "বাগাভী একই সম্পর্ক দেখান আরও ছোট করে: কোনো জিনিস পুড়িয়ে ফেললে বলা হয় ফাতানতুশ শাই'। এর নজির হিসেবে তিনি আনেন ৫১:১৩ আয়াত, ইয়াওমা হুম 'আলান নারি ইউফতানূন। সেখানে একই ক্রিয়া এসেছে আগুনের উপর থাকা মানুষদের প্রসঙ্গে। কুরতুবীর মুদ্রা আর চুল্লির ছবি মাথায় রাখলে ৮৫:১০ আয়াতের ক্রিয়ায় পরীক্ষা আর পোড়ানো একসঙ্গে ধরা দেয়। ধাতুকে যাচাই করা হয় আগুনে। আর এই প্রসঙ্গে মানুষকে তাদের ঈমানের জন্য পরীক্ষা করা হয়েছিল আগুন দিয়েই। তাফসীরকারেরা দুটি অর্থই সামনে রাখেন, কোনোটি বাদ দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read Within Its Setting",
          "bn": "প্রসঙ্গের ভেতরে পড়া"
        },
        "p": [
          {
            "en": "The verse names both al-mu'minin and al-mu'minat, believing men and believing women. Several commentators read it directly against the scene before it. Al-Qurtubi says the persecutors did not repent despite the signs and clear proofs Allah had shown the tyrant king and his people at the hands of the boy, whose story belongs to 85:4 onward. Al-Baghawi's second report ties the burning to the ditch itself. Ma'arif says the verse describes the torment of the wrongdoers who burned the Muslims in the fire pit only on account of their faith.",
            "bn": "আয়াতটি আল-মু'মিনীন ও আল-মু'মিনাত, মুমিন পুরুষ ও মুমিন নারী, দুই দলের নামই নিয়েছে। কয়েকজন তাফসীরকার আয়াতটি পড়েন ঠিক আগের দৃশ্যের সঙ্গে মিলিয়ে। কুরতুবী বলেন, অত্যাচারী জালিম রাজা আর তার লোকদের আল্লাহ সেই বালকের হাতে অনেক নিদর্শন ও স্পষ্ট প্রমাণ দেখিয়েছিলেন, তবু তারা তওবা করেনি। বালকের কাহিনি ৮৫:৪ আয়াত থেকে শুরু হওয়া অংশের বিষয়। বাগাভীর দ্বিতীয় বর্ণনা পোড়ানোর শাস্তিকে সরাসরি গর্তের সঙ্গে জোড়ে। মাআরিফুল কুরআন বলে, যারা শুধু ঈমানের কারণে মুসলিমদের আগুনের গর্তে পুড়িয়েছিল, আয়াতটি সেই জালিমদের শাস্তির বর্ণনা।"
          },
          {
            "en": "At-Tabari, as-Sa'di and the Muyassar comment on the verse without naming the ditch, and none of the fetched texts carries the verse over to any other persecutors by name. The one wider point drawn comes from Ma'arif, and it concerns the condition rather than the deed: the clause then did not repent, it says, invites people to repent. So the verse is read in its setting, and what is opened outward is its offer of repentance. The next two sections take that condition, and the remark it drew, in turn.",
            "bn": "তাবারী, সা'দী ও মুয়াসসার এ আয়াতের ব্যাখ্যায় গর্তের নাম নেননি। সংগ্রহ করা কোনো তাফসীরই আয়াতটিকে নাম ধরে অন্য কোনো নির্যাতনকারীর উপর টেনে নেয়নি। বড় পরিসরের একটিমাত্র কথা এসেছে মাআরিফুল কুরআন থেকে, আর তা কাজ নিয়ে নয়, শর্ত নিয়ে। তার মতে, তারপর তওবা করেনি কথাটি মানুষকে তওবার দিকে ডাকে। তাই আয়াতটি পড়া হয় তার প্রসঙ্গের ভেতরেই, আর বাইরের দিকে খুলে দেওয়া হয় কেবল তওবার প্রস্তাবটি। পরের দুটি অংশে সেই শর্ত আর তা নিয়ে আসা একটি মন্তব্যের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Then They Did Not Repent",
          "bn": "তারপর তারা ফিরে আসেনি"
        },
        "p": [
          {
            "en": "Thumma lam yatubu stands between the deed and the outcome. Ibn Kathir explains it as two things left undone: they did not desist from what they did, and they did not regret what they had done before. At-Tabari names what the repentance would have been from: their disbelief, and what they did to the believing men and women because of their faith in Allah. Al-Qurtubi calls it repentance from their ugly deed, which they withheld despite the signs they had been shown. Ibn Kathir's pair, stopping and regret, sets out what repentance would have asked of them.",
            "bn": "সুম্মা লাম ইয়াতূবূ বসে আছে কাজ আর পরিণামের মাঝখানে। ইবন কাসীর এর ব্যাখ্যায় দুটি না-করা কাজের কথা বলেন: যা করছিল তা থেকে তারা থামেনি, আর আগে যা করেছে তার জন্য অনুতপ্ত হয়নি। তাবারী বলে দেন কিসের থেকে তওবা করার কথা ছিল। এক, তাদের কুফর। দুই, আল্লাহর উপর ঈমান আনার কারণে মুমিন পুরুষ ও নারীদের সঙ্গে তারা যা করেছে। কুরতুবীর ভাষায় এটি তাদের জঘন্য কাজ থেকে তওবা। এত নিদর্শন দেখানোর পরও তারা সেই তওবা করেনি। ইবন কাসীরের জোড়া কথা, থামা আর অনুতাপ, দেখিয়ে দেয় তওবা তাদের কাছে কী চাইত।"
          },
          {
            "en": "As-Sa'di frames the whole verse before he quotes it: then He promised them, threatened them, and offered them repentance. His verb, 'arada, is to lay something before someone, for them to take up or refuse. In his reading the verse does not only pronounce; it proposes. Ma'arif al-Qur'an calls thumma lam yatubu a restrictive phrase attached to both punishments, so that the torment is for those who did not repent of their deed and did not make tawbah. On both readings the threat is tied to a condition, and the condition is the one part of the verse that the persecutors themselves could still change.",
            "bn": "সা'দী আয়াতটি উদ্ধৃত করার আগেই পুরোটার একটা কাঠামো দিয়ে দেন: তারপর আল্লাহ তাদের ওয়াদা দিলেন, সতর্ক করলেন, আর তাদের সামনে তওবা পেশ করলেন। তাঁর ক্রিয়াটি 'আরাদা, মানে কারও সামনে কিছু পেশ করা, যাতে সে তা নিতে বা ফিরিয়ে দিতে পারে। তাঁর পাঠে আয়াতটি শুধু রায় শোনায় না, প্রস্তাবও দেয়। মাআরিফুল কুরআন সুম্মা লাম ইয়াতূবূকে বলে সীমা টেনে দেওয়া একটি অংশ, যা দুটি শাস্তির সঙ্গেই জুড়ে আছে। অর্থাৎ শাস্তি তাদের জন্য, যারা নিজেদের কাজ থেকে তওবা করেনি। দুই পাঠেই হুমকিটা একটা শর্তে বাঁধা। আর আয়াতের এই শর্তটুকুই নির্যাতনকারীরা নিজেরা তখনো বদলাতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hasan Sees Generosity",
          "bn": "হাসান বসরীর চোখে দানশীলতা"
        },
        "p": [
          {
            "en": "Three of the fetched commentaries quote one sentence from al-Hasan on this condition. In Ibn Kathir's Arabic it is al-Hasan al-Basri: look at this generosity and munificence, al-karam wa-l-jud; they killed His awliya', His close friends, and He calls them to repentance and forgiveness. As-Sa'di gives it with a fuller description of those killed and a shorter ending: they killed His friends and the people of obedience to Him, and He calls them to repentance. Neither adds a comment of his own to the remark.",
            "bn": "সংগ্রহ করা তিনটি তাফসীর এই শর্ত নিয়ে হাসানের একটি কথা উদ্ধৃত করেছে। ইবন কাসীরের আরবি তাফসীরে কথাটি হাসান বসরীর: এই দয়া আর দানশীলতার দিকে তাকিয়ে দেখো, আল-কারাম ওয়াল জূদ। তারা তাঁর আউলিয়া, তাঁর প্রিয় বান্দাদের হত্যা করেছে, আর তিনি তাদের ডাকছেন তওবা ও মাগফিরাতের দিকে। সা'দী কথাটি আনেন নিহতদের আরও পূর্ণ পরিচয় দিয়ে, তবে শেষটা ছোট করে: তারা তাঁর প্রিয় বান্দাদের আর তাঁর আনুগত্যকারীদের হত্যা করেছে, আর তিনি তাদের তওবার দিকে ডাকছেন। দুজনের কেউ এর সঙ্গে নিজের মন্তব্য যোগ করেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an cites the remark from Ibn Kathir, attributing it to Hasan, in these words: they burned Allah's friends alive, yet He invites them towards repentance and forgiveness. The versions differ in small ways, killed in two and burned in the third, with forgiveness named in two and not in the third, and each is reported here as its source gives it. All three keep the point al-Hasan drew: the people who did this are still the people the verse calls back. The variants are small, but anyone quoting the remark should know which wording comes from where.",
            "bn": "মাআরিফুল কুরআন কথাটি ইবন কাসীর থেকে উদ্ধৃত করেছে, হাসানের নামে, এই ভাষায়: তারা আল্লাহর প্রিয় বান্দাদের জীবন্ত পুড়িয়েছে, তবু তিনি তাদের তওবা ও মাগফিরাতের দিকে ডাকছেন। তিন ভাষ্যে ছোটখাটো পার্থক্য আছে। দুটিতে হত্যা, তৃতীয়টিতে পোড়ানো। দুটিতে মাগফিরাতের উল্লেখ আছে, তৃতীয়টিতে নেই। এখানে প্রতিটি ভাষ্য তার উৎসে যেমন আছে তেমনই তুলে দেওয়া হলো। তিনটিতেই হাসানের মূল কথাটি অটুট: যারা এই কাজ করেছে, আয়াত এখনো তাদেরকেই ফিরে আসতে ডাকছে। পার্থক্যগুলো ছোট, তবু কথাটি উদ্ধৃত করতে চাইলে কোন ভাষ্য কোথা থেকে এসেছে, তা জানা থাকা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Hell, and the Burning",
          "bn": "জাহান্নাম, তারপর দহন"
        },
        "p": [
          {
            "en": "Why name two punishments? At-Tabari answers by time: the punishment of Jahannam is in the hereafter, and the punishment of al-hariq is in this world, and he reports the same from al-Rabi'. On his reading, then, the two halves of the verse point to two different times. Al-Qurtubi's first view is close: Hell for their disbelief, and the burning in this world for their burning the believers with fire, which he says was reported earlier from Ibn 'Abbas. Al-Baghawi first gives Hell for their disbelief and the burning for what they burned of the believers.",
            "bn": "দুটি শাস্তির কথা আলাদা করে কেন? তাবারী উত্তর দেন সময় দিয়ে: জাহান্নামের শাস্তি আখিরাতে, আর হারীক বা দহনের শাস্তি দুনিয়াতে। রাবী থেকেও তিনি একই কথা বর্ণনা করেন। তাঁর পাঠে তাহলে আয়াতের দুই অংশ দুই ভিন্ন সময়ের দিকে ইঙ্গিত করে। কুরতুবীর প্রথম মত এর কাছাকাছি: জাহান্নাম তাদের কুফরের জন্য, আর দুনিয়ার দহন মুমিনদের আগুনে পোড়ানোর জন্য। তিনি জানান, এ কথা ইবন আব্বাস থেকে আগেই বর্ণিত হয়েছে। বাগাভীও প্রথমে বলেন, জাহান্নাম তাদের কুফরের কারণে, আর দহন মুমিনদের পোড়ানোর কারণে।"
          },
          {
            "en": "Al-Baghawi then adds a report from al-Rabi' ibn Anas and al-Kalbi: in this world Allah burned them with the very fire they had used on the believers, which rose up to them out of the ditch. Ma'arif al-Qur'an also mentions a worldly reading, as narrated in some reports, and relays from Tafsir Mazhari that the fire spread through the city and burned those who had been watching. Its first reading, though, treats the second sentence as explaining and emphasising the first: eternal torment of fire in Hell.",
            "bn": "এরপর বাগাভী রাবী ইবন আনাস ও কালবীর একটি বর্ণনা আনেন: যে আগুনে তারা মুমিনদের পুড়িয়েছিল, দুনিয়াতেই আল্লাহ সেই আগুন দিয়ে তাদের পুড়িয়েছেন। আগুন গর্ত থেকে উঠে তাদের কাছে পৌঁছে গিয়েছিল। মাআরিফুল কুরআনও কিছু বর্ণনার বরাতে দুনিয়ার শাস্তির একটি পাঠ উল্লেখ করে। তাফসীরে মাযহারী থেকে সে জানায়, আগুন শহরজুড়ে ছড়িয়ে পড়ে আর যারা দাঁড়িয়ে দেখছিল তাদের পুড়িয়ে দেয়। তবে তার প্রথম পাঠে দ্বিতীয় বাক্যটি প্রথমটিরই ব্যাখ্যা ও জোর: জাহান্নামের আগুনে চিরস্থায়ী শাস্তি।"
          },
          {
            "en": "Al-Qurtubi records more views under it was said. In one, the burning is in the hereafter too, a punishment added to the one for disbelief, because they burned the believers. In another, al-Hariq is one of the names of Jahannam, like al-Sa'ir; the Fire has levels and kinds, and several names. He adds that it is as though they are punished in Jahannam with zamharir, its bitter cold, and then with the burning: the first by its cold, the second by its heat. Ibn Kathir gives no timing but states a principle: the recompense is of the same kind as the deed.",
            "bn": "কুরতুবী 'বলা হয়েছে' বলে আরও কয়েকটি মত আনেন। একটি মতে দহনও আখিরাতে, কুফরের শাস্তির উপর বাড়তি শাস্তি, কারণ তারা মুমিনদের পুড়িয়েছিল। আরেক মতে আল-হারীক জাহান্নামেরই একটি নাম, যেমন আস-সা'ঈর। আগুনের নানা স্তর আর নানা ধরন আছে, তার নামও অনেক। তিনি আরও বলেন, যেন জাহান্নামে তাদের প্রথমে যামহারীর, অর্থাৎ তীব্র ঠান্ডা দিয়ে শাস্তি দেওয়া হবে, তারপর দহন দিয়ে। প্রথমটি তার শীতলতার শাস্তি, দ্বিতীয়টি তার উত্তাপের। ইবন কাসীর সময়ের কথা বলেন না, বলেন একটি নীতির কথা: প্রতিদান হয় কাজের ধরন অনুযায়ী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ruling, Not a Map",
          "bn": "বিধান, কোনো মানচিত্র নয়"
        },
        "p": [
          {
            "en": "As-Sa'di and the Muyassar gloss al-hariq as the severe, scorching punishment, and the Muyassar places Hell in the hereafter. Between them the commentators give several answers on one fire or two, and this article chooses none. One thing must be said plainly. The verse describes what the text describes: a condemned group that persecuted believing men and women, and the punishment named for them if they did not repent. It licenses nothing against any living person or community, and gives no warrant for assigning anyone's fate today.",
            "bn": "সা'দী ও মুয়াসসার আল-হারীকের অর্থ করেন কঠিন, দগ্ধ করা শাস্তি। মুয়াসসার জাহান্নামকে রাখে আখিরাতে। আগুন একটি না দুটি, এ নিয়ে তাফসীরকারেরা মিলে কয়েক রকম উত্তর দিয়েছেন। এই লেখা কোনোটিকেই বেছে নিচ্ছে না। একটি কথা অবশ্য সোজাসুজি বলা দরকার। আয়াতটি শুধু ততটুকুই বর্ণনা করে, যতটুকু তার ভাষায় আছে: একটি নিন্দিত দল, যারা মুমিন পুরুষ ও নারীদের উপর নির্যাতন চালিয়েছিল, আর তওবা না করলে তাদের জন্য নির্ধারিত শাস্তি। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো কিছুরই অনুমতি দেয় না। আজকের কারও পরিণাম ঠিক করে দেওয়ার অধিকারও কাউকে দেয় না।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it. The long narration of the boy and the king that Ibn Kathir brings belongs with 85:4, where his commentary on the story begins, and it is left there. It is not repeated here even in summary, so that this entry stays with the ruling rather than the story. Nor does any of them apply the verse to a later conflict or to a people of a later age. The verse that follows, 85:11, has its own entry, and nothing of it is drawn forward here.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর আয়াতটির সঙ্গে কোনো হাদীস জোড়েনি। বালক ও রাজার যে দীর্ঘ বর্ণনা ইবন কাসীর এনেছেন, তা ৮৫:৪ আয়াতের আলোচনার অংশ, কারণ কাহিনির ব্যাখ্যা তিনি সেখান থেকেই শুরু করেন। তাই বর্ণনাটি সেখানেই থাকল। সংক্ষেপেও তা এখানে আনা হয়নি, যাতে এই আলোচনা কাহিনির বদলে বিধানের উপরই থাকে। কোনো তাফসীর আয়াতটিকে পরবর্তী কোনো সংঘাত বা পরের যুগের কোনো জাতির উপর প্রয়োগও করেনি। পরের আয়াত ৮৫:১১-এর আলোচনা তার নিজের জায়গায়, এখানে সেখান থেকে কিছু টেনে আনা হয়নি।"
          },
          {
            "en": "What the verse asks of a reader is narrower and harder than finding the persecutors in the world. Between the gravest deed in this passage and its punishment stand three words, thumma lam yatubu, and al-Hasan saw generosity in them. A reader can ask whether any harm they have done to another person's faith, by pressure or mockery, large or small, has been met with what Ibn Kathir names: stopping, and regret for what has passed. That question belongs to the reader alone.",
            "bn": "আয়াতটি পাঠকের কাছে যা চায়, তা দুনিয়ায় নির্যাতনকারী খুঁজে বের করার চেয়ে সরু পথ, কঠিনও। এই অংশের সবচেয়ে বড় অন্যায় আর তার শাস্তির মাঝে দাঁড়িয়ে আছে তিনটি শব্দ, সুম্মা লাম ইয়াতূবূ। হাসান এর মধ্যেই দানশীলতা দেখেছিলেন। পাঠক নিজেকে জিজ্ঞেস করতে পারেন: চাপ দিয়ে বা ঠাট্টা করে, বড় হোক বা ছোট, অন্য কারও ঈমানের যে ক্ষতি আমি করেছি, তার বেলায় কি ইবন কাসীরের বলা দুটি কাজ করেছি? থেমেছি, আর যা হয়ে গেছে তার জন্য অনুতপ্ত হয়েছি? এ প্রশ্ন শুধু পাঠকের নিজের।"
          }
        ]
      }
    ]
  },
  "85:14": {
    "sections": [
      {
        "h": {
          "en": "Two Names, Three Words",
          "bn": "দুটি নাম, তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Wa huwa al-Ghafur al-Wadud. Three words, two of them names. Both names are built on the same Arabic pattern, fa'ul, the intensive form: not one who forgave once but the Forgiving, not one who felt affection once but the Affectionate. The verse spends nothing on explanation. It sets the two names side by side and leaves their neighbours in the surah to do the arguing.",
            "bn": "ওয়া হুয়াল গাফূরুল ওয়াদূদ। তিনটি শব্দ, তার দুটিই নাম। দুটি নামই আরবির একই ওজনে গড়া — 'ফাঊল', অর্থাৎ মুবালাগার রূপ: একবার ক্ষমা করেছেন এমন নন, বরং ক্ষমাশীল; একবার ভালোবেসেছেন এমন নন, বরং প্রেমময়। আয়াতটি ব্যাখ্যায় এক বিন্দুও খরচ করে না। এটি নাম দুটিকে পাশাপাশি বসিয়ে দেয়, আর যুক্তির কাজটুকু ছেড়ে দেয় সূরার প্রতিবেশী আয়াতগুলোর ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stands on Either Side",
          "bn": "দুই পাশে যা দাঁড়িয়ে আছে"
        },
        "p": [
          {
            "en": "85:12 says the seizing of your Lord is severe. 85:13 says it is He who originates and repeats. Then comes our verse, and after it 85:15 calls Him the honourable Owner of the Throne, and 85:16 says He is the doer of whatever He intends. Read in order, the run refuses to let mercy and might be separated: the verses that promise a severe reckoning are the verses that name Him forgiving and loving.",
            "bn": "85:12 বলে, তোমার প্রতিপালকের পাকড়াও অবশ্যই কঠিন। 85:13 বলে, তিনিই প্রথমবার সৃষ্টি করেন এবং আবার ফিরিয়ে আনেন। এরপর আসে আমাদের আয়াতটি, আর তার পরে 85:15 তাঁকে বলে আরশের অধিপতি, মহা সম্মানিত, এবং 85:16 বলে, তিনি যা চান তাই করেন। ক্রম অনুসারে পড়লে এই ধারাটি রহমত ও শক্তিকে আলাদা করতে দেয় না: যে আয়াতগুলো কঠিন হিসাবের প্রতিশ্রুতি দেয়, সেই আয়াতগুলোই তাঁকে ক্ষমাশীল ও প্রেমময় বলে ডাকে।"
          },
          {
            "en": "Ibn Kathir notes that the last word of 85:15 has been recited in two ways — as a description of the Lord and as a description of the Throne — and that both meanings are sound. But the point of the sequence is not softening. Al-Ghafur al-Wadud is being said by a Lord who has just described His own grip as severe, so the forgiveness on offer is not weakness and cannot be mistaken for it.",
            "bn": "ইবনে কাসীর উল্লেখ করেন যে 85:15-এর শেষ শব্দটি দুই কিরাআতে পড়া হয়েছে — একবার প্রতিপালকের বিশেষণ হিসেবে, আরেকবার আরশের বিশেষণ হিসেবে — এবং দুটি অর্থই সঠিক। তবে এই ক্রমের উদ্দেশ্য কোমল করে দেওয়া নয়। 'আল-গাফূরুল ওয়াদূদ' কথাটি বলছেন এমন এক প্রতিপালক, যিনি এইমাত্র নিজের পাকড়াওকে কঠিন বলে বর্ণনা করেছেন; ফলে যে ক্ষমা এখানে দেওয়া হচ্ছে তা দুর্বলতা নয়, আর দুর্বলতা বলে ভুলও করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Surah Was Standing",
          "bn": "সূরাটি তখন কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "The context is the worst thing in the surah. 85:4-7 describe the companions of the trench, a fire fed with fuel, and men seated at its edge witnessing what was being done to the believers. 85:8 states the entirety of the believers' offence: nothing was held against them except that they believed in Allah, the Exalted in Might, the Praiseworthy. These names are spoken over a burning ditch.",
            "bn": "প্রেক্ষাপটটি এই সূরার সবচেয়ে ভয়ংকর ঘটনা। 85:4-7 বর্ণনা করে গর্তওয়ালাদের কথা, ইন্ধনে ভরা আগুনের কথা, আর গর্তের কিনারায় বসে মু'মিনদের সঙ্গে যা করা হচ্ছিল তা দেখতে থাকা লোকদের কথা। 85:8 মু'মিনদের গোটা 'অপরাধ'টুকু বলে দেয়: তাদের বিরুদ্ধে আর কিছুই ছিল না, কেবল এটুকুই যে তারা মহাপরাক্রান্ত, প্রশংসিত আল্লাহর প্রতি ঈমান এনেছিল। এই নামগুলো উচ্চারিত হচ্ছে একটি জ্বলন্ত গর্তের ওপরে দাঁড়িয়ে।"
          },
          {
            "en": "And 85:10 has already said something almost unbearable. Those who persecuted the believing men and the believing women and then did not repent will have the punishment of Hell and the punishment of the Burning Fire. The condition sits inside the sentence: and then did not repent. Repentance is left open even to these people, and four verses later the door they were left is named — al-Ghafur al-Wadud.",
            "bn": "আর 85:10 এর আগেই এমন একটি কথা বলে ফেলেছে যা প্রায় অসহনীয়। যারা মু'মিন পুরুষ ও মু'মিন নারীদের ওপর নির্যাতন চালিয়েছে, অতঃপর তওবা করেনি, তাদের জন্য রয়েছে জাহান্নামের শাস্তি এবং দগ্ধ হওয়ার শাস্তি। শর্তটি বাক্যের ভেতরেই বসে আছে: অতঃপর তওবা করেনি। এদের জন্যও তওবার পথ খোলা রাখা হয়েছে, আর চার আয়াত পরে সেই খোলা দরজাটির নাম বলে দেওয়া হয় — আল-গাফূরুল ওয়াদূদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Twice in the Whole Quran",
          "bn": "গোটা কুরআনে দুইবার"
        },
        "p": [
          {
            "en": "Al-Wadud occurs in two places in the entire Quran, and both attach it to turning back. Here it follows a verse that made repentance the hinge. In 11:90 it is Shu'ayb (AS) speaking to his people: ask forgiveness of your Lord, then repent to Him; indeed my Lord is Merciful and Wadud. The name is not scattered through the Book. Both times it is spoken where somebody is being invited back.",
            "bn": "গোটা কুরআনে 'আল-ওয়াদূদ' নামটি এসেছে দুটি জায়গায়, আর দুবারই তা যুক্ত হয়েছে ফিরে আসার সঙ্গে। এখানে এটি এসেছে এমন এক আয়াতের পরে, যা তওবাকেই মূল কব্জা বানিয়েছে। আর 11:90-এ এটি বলছেন শুআইব (আঃ), তাঁর সম্প্রদায়কে: তোমরা তোমাদের প্রতিপালকের কাছে ক্ষমা চাও, অতঃপর তাঁরই দিকে ফিরে এসো; নিশ্চয়ই আমার প্রতিপালক পরম দয়ালু, ওয়াদূদ। নামটি কিতাবজুড়ে ছড়িয়ে নেই। দুবারই এটি উচ্চারিত হয়েছে সেখানে, যেখানে কাউকে ফিরে আসার আহ্বান জানানো হচ্ছে।"
          },
          {
            "en": "As for what wudd is, Ibn Kathir reports the gloss of Ibn Abbas (RA) that al-Wadud means al-Habib, the Loving; and he explains al-Ghafur here to mean that He forgives the sin of whoever repents to Him and humbles himself before Him, whatever that sin may be. Put those two together and the pairing is the whole content of the verse. The pardon is not issued coldly, at a distance, by an offended party.",
            "bn": "'উদ্‌দ' বলতে কী বোঝায়, সে সম্পর্কে ইবনে কাসীর ইবনে আব্বাস (রাঃ)-এর ব্যাখ্যা উদ্ধৃত করেন: 'আল-ওয়াদূদ' অর্থ 'আল-হাবীব', অর্থাৎ ভালোবাসেন যিনি। আর 'আল-গাফূর' সম্পর্কে তিনি বলেন, যে-ই তাঁর কাছে তওবা করে এবং তাঁর সামনে বিনীত হয়, তিনি তার গুনাহ ক্ষমা করে দেন — সেই গুনাহ যা-ই হোক না কেন। দুটিকে পাশাপাশি রাখলে এই জোড়াই আয়াতটির পুরো বক্তব্য। ক্ষমাটি কোনো ক্ষুব্ধ পক্ষের তরফ থেকে দূরত্ব রেখে, ঠান্ডা গলায় দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones It Was Sent To",
          "bn": "যাদের কাছে এটি পাঠানো হয়েছিল"
        },
        "p": [
          {
            "en": "Surah al-Burooj came down in Makkah, to a small community being hurt for what it believed, and the story of the trench is told to them about people hurt before them who did not give way. Muslim narrates from Suhayb (RA) the long account of the boy and the king that the commentators read alongside these verses. What the surah offers such a community is not rescue in the next line. It offers 85:11, and then these names.",
            "bn": "সূরা আল-বুরূজ নাযিল হয়েছিল মক্কায়, এমন একটি ছোট সমাজের উদ্দেশে যারা নিজেদের বিশ্বাসের কারণে নির্যাতিত হচ্ছিল; আর গর্তের ঘটনাটি তাদের শোনানো হচ্ছে এমন কিছু মানুষ সম্পর্কে, যারা তাদের আগে নির্যাতিত হয়েও নতি স্বীকার করেনি। মুসলিম সুহাইব (রাঃ) থেকে বালক ও বাদশাহর দীর্ঘ ঘটনাটি বর্ণনা করেন, যা মুফাসসিরগণ এই আয়াতগুলোর পাশে রেখে পড়েন। এমন একটি সমাজকে সূরাটি পরের পঙ্‌ক্তিতেই উদ্ধারের প্রতিশ্রুতি দেয় না। এটি দেয় 85:11, আর তারপর এই নামগুলো।"
          },
          {
            "en": "That order is worth sitting with. The believers are promised gardens, the persecutors are promised a severe seizing, and then, before the surah moves on, Allah names Himself forgiving and affectionate. A reader who arrives here carrying an old failure is being told two things at once: that the reckoning is entirely real, and that the One conducting it holds His returning servants dear.",
            "bn": "এই ক্রমটির সঙ্গে কিছুক্ষণ বসে থাকা দরকার। মু'মিনদের প্রতিশ্রুতি দেওয়া হয় জান্নাতের, নির্যাতনকারীদের প্রতিশ্রুতি দেওয়া হয় কঠিন পাকড়াওয়ের, আর তারপর সূরাটি সামনে এগোনোর আগেই আল্লাহ নিজেকে ক্ষমাশীল ও প্রেমময় বলে পরিচয় দেন। যে পাঠক পুরোনো কোনো ব্যর্থতা বুকে নিয়ে এখানে এসে পৌঁছান, তাঁকে একসঙ্গে দুটি কথা বলা হচ্ছে: হিসাব সম্পূর্ণ বাস্তব, আর যিনি সেই হিসাব নিচ্ছেন তিনি ফিরে আসা বান্দাদের ভালোবাসেন।"
          }
        ]
      }
    ]
  }
});
