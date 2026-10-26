/**
 * Tadabbur long-form articles — surah 103.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "103:1-3": {
    "sections": [
      {
        "h": {
          "en": "One Word, Many Spans of Time",
          "bn": "এক শব্দে সময়ের নানা মাপ"
        },
        "p": [
          {
            "en": "Wal-'asr: by al-'Asr. The surah's oath is a single word, and the word is wide. At-Tabari opens by noting that the people of interpretation differed over it. Some said it is an oath by ad-dahr, time at large. From Ibn Abbas he reports that al-'asr is one of the hours of the day, and from al-Hasan that it is al-'ashiyy, the late part of the day. His own conclusion takes in all of it: al-'asr is a name for time, covering the late afternoon, the night and the day, and since Allah singled out no one meaning, everything the name covers falls within the oath.",
            "bn": "ওয়াল আসর: আসরের শপথ। সূরার শপথ মাত্র একটি শব্দে, কিন্তু শব্দটির পরিধি অনেক বড়। তাবারী শুরুতেই জানান, তাফসীরবিদেরা এর অর্থ নিয়ে মতভেদ করেছেন। কারও মতে এটি দাহরের শপথ, মানে গোটা কালের। ইবন আব্বাস থেকে তিনি বর্ণনা করেন, আসর দিনের একটি সময়। হাসান থেকে বর্ণনা করেন, এটি আশিয়্য, অর্থাৎ দিনের শেষভাগ। তাবারীর নিজের সিদ্ধান্ত সবগুলোকেই ধারণ করে। আসর কালের একটি নাম। দিনের শেষভাগ, রাত ও দিন সবই এর মধ্যে পড়ে। আল্লাহ কোনো একটি অর্থকে আলাদা করে নির্দিষ্ট করেননি, তাই নামটি যা কিছু বোঝায়, সবই শপথের আওতায়।"
          },
          {
            "en": "Al-Qurtubi lays out the full range. Al-'asr is ad-dahr, said Ibn Abbas and others. It is said to be the night and the day, called the two 'asrs, a dual that also names morning and evening. Al-Hasan and Qatada took it as the 'ashiyy, between the sun's decline from noon and its setting, and Qatada is also reported as saying the last hour of the day. Muqatil took it as an oath by the 'Asr prayer, the middle prayer, because it is the best of the prayers. Others said it means the age of the Prophet ﷺ, honoured by the renewal of prophethood within it.",
            "bn": "কুরতুবী অর্থগুলোর পুরো তালিকা দেন। ইবন আব্বাস ও অন্যরা বলেছেন, আসর মানে দাহর, অর্থাৎ কাল। কেউ বলেছেন রাত ও দিন, যাদের একসঙ্গে বলা হয় দুই আসর। দুই আসর কথাটি সকাল ও বিকেল অর্থেও আসে। হাসান ও কাতাদার মতে এটি আশিয়্য, মানে সূর্য মাথার উপর থেকে হেলে পড়া থেকে অস্ত যাওয়া পর্যন্ত সময়। কাতাদা থেকে এও বর্ণিত যে এটি দিনের শেষ প্রহর। মুকাতিলের মতে এ শপথ আসরের নামাজের, যা মধ্যবর্তী নামাজ, কারণ এটিই সর্বশ্রেষ্ঠ নামাজ। আবার কেউ বলেছেন, এর অর্থ নবী ﷺ-এর যুগ, যে যুগ মর্যাদা পেয়েছে নবুওয়াতের নবায়নে।"
          },
          {
            "en": "Al-Baghawi adds Ibn Kaysan, for whom the night and the day are the two 'asrs, and both he and al-Qurtubi record the view that the meaning is by the Lord of al-'Asr. Ibn Kathir defines al-'asr as the time in which the movements of the children of Adam take place, good and evil. He cites Malik, from Zayd ibn Aslam, that it is the evening, and calls the first view the well-known one. The commentators hold these meanings side by side, and this article does not choose among them.",
            "bn": "বাগাভী যোগ করেন ইবন কায়সানের মত: রাত ও দিনকেই বলা হয় দুই আসর। তিনি ও কুরতুবী দুজনেই আরেকটি মত উল্লেখ করেন, অর্থাৎ আসরের রবের শপথ। ইবন কাসীরের সংজ্ঞায় আসর সেই সময়, যার ভেতরে আদমসন্তানের ভালো-মন্দ সব নড়াচড়া ঘটে। ইমাম মালিক যায়দ ইবন আসলাম থেকে বর্ণনা করেন, এটি বিকেলবেলা। ইবন কাসীর বলেন, প্রথম মতটিই প্রসিদ্ধ। তাফসীরকারেরা এই অর্থগুলো পাশাপাশি রেখেছেন। এ লেখাও তাদের কোনো একটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Hours Are Sworn By",
          "bn": "ঘণ্টাগুলোর শপথ কেন"
        },
        "p": [
          {
            "en": "Why swear by this? Al-Qurtubi says Allah swore by it for the alert it carries in the turning and changing of states, and for the evidence in them of the Maker. Al-Baghawi, under it is said, gives a shorter reason: there is a lesson in it for whoever looks. The Muyassar points to the wonders of divine power in time that show His greatness, then adds a ruling the reader should not miss: a servant may swear only by Allah, for swearing by anything other than Allah is shirk. The oath by time is His, not a pattern for His servants.",
            "bn": "সময়ের শপথ কেন? কুরতুবী বলেন, অবস্থার পালাবদলে যে সতর্কবার্তা আছে, আর তাতে স্রষ্টার যে প্রমাণ আছে, সে জন্যই আল্লাহ এর শপথ করেছেন। বাগাভী 'বলা হয়' কথাটি দিয়ে আরও ছোট একটি কারণ দেন: যে তাকায়, তার জন্য এতে শিক্ষা আছে। মুয়াসসার বলে, কালের মধ্যে আল্লাহর কুদরতের এমন বিস্ময় আছে, যা তাঁর মহত্ত্বের দিকে ইশারা করে। সঙ্গে একটি বিধানও জানিয়ে দেয়, যা পাঠকের চোখ এড়ানো উচিত নয়। বান্দা আল্লাহ ছাড়া আর কারও নামে কসম করতে পারে না, কারণ আল্লাহ ছাড়া অন্য কিছুর কসম শিরক। কালের শপথ আল্লাহর, বান্দার অনুকরণের জিনিস নয়।"
          },
          {
            "en": "As-Sa'di's gloss is one line, and it aims the oath at its answer: al-'asr is the night and the day, the setting of the servants' actions and deeds. Ibn Kathir's definition meets his, since the movements of the children of Adam, good and evil, happen within it. Read together, the hours in which people act are called as witness in the case about how they acted. Ma'arif al-Qur'an offers a further link: time as history, whose record of the rise and decline of individuals and nations, it says, bears out the surah's verdict on those who abandon these four qualities.",
            "bn": "সা'দীর ব্যাখ্যা মাত্র এক লাইনের, আর তা শপথকে সোজা তার জবাবের দিকে নিয়ে যায়: আসর মানে রাত ও দিন, যেখানে বান্দারা তাদের সব কাজকর্ম করে। ইবন কাসীরের সংজ্ঞাও একই জায়গায় এসে মেলে, কারণ আদমসন্তানের ভালো-মন্দ সব নড়াচড়া এর ভেতরেই ঘটে। দুটো একসঙ্গে পড়লে দাঁড়ায়, মানুষ যে সময়ে কাজ করে, সেই সময়কেই সাক্ষী ডাকা হচ্ছে তারা কেমন কাজ করল সেই মামলায়। মাআরিফুল কুরআন আরেকটি যোগসূত্র দেখায়, ইতিহাস অর্থে কাল। তার মতে ব্যক্তি ও জাতির উত্থান-পতনের ইতিহাস সাক্ষ্য দেয়, যারা এই চারটি গুণ ছেড়েছে, তারা বড় ক্ষতির শিকার হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Capital That Melts",
          "bn": "গলে যাওয়া পুঁজি"
        },
        "p": [
          {
            "en": "Inna l-insana la-fi khusr: man is surely in loss. Al-Qurtubi calls this the answer to the oath. At-Tabari glosses khusr as ruin and diminishing, Ibn Kathir as loss and destruction, the Muyassar as ruin and decrease. Al-Qurtubi collects further senses: being cheated in a bargain; ruin, according to al-Akhfash; punishment, according to al-Farra', who cites 65:9, and the end of its affair was loss; evil, according to Ibn Zayd; and decrease. He closes by saying the meanings are close to one another.",
            "bn": "ইন্নাল ইনসানা লাফী খুসর: মানুষ অবশ্যই ক্ষতির মধ্যে। কুরতুবী বলেন, এটিই শপথের জবাব। তাবারী খুসরের অর্থ করেন ধ্বংস ও ঘাটতি। ইবন কাসীর বলেন লোকসান ও বিনাশ, আর মুয়াসসার বলে ধ্বংস ও ঘাটতি। কুরতুবী আরও কয়েকটি অর্থ জড়ো করেন। একটি হলো কেনাবেচায় ঠকে যাওয়া। আখফাশের মতে ধ্বংস। ফাররার মতে শাস্তি, আর তিনি প্রমাণ হিসেবে আনেন ৬৫:৯ আয়াত, 'তার কাজের পরিণাম ছিল ক্ষতি'। ইবন যায়দের মতে অনিষ্ট। কেউ বলেছেন ঘাটতি। শেষে কুরতুবী বলেন, অর্থগুলো একটি আরেকটির কাছাকাছি।"
          },
          {
            "en": "Al-Baghawi defines the loss through capital: khusran is the going of a person's capital in the ruin of his self and his lifespan through sins, and those two, he says, are his greatest capital. Ma'arif al-Qur'an builds on the same image. Hours, days and years pass, abilities fade, and a person is like the owner of great wealth from which a portion is taken every day without his consent. It tells of an old scholar who said he learned this verse's meaning from an ice-seller, whose whole stock melts if he is careless for a moment.",
            "bn": "বাগাভী ক্ষতির সংজ্ঞা দেন পুঁজির ভাষায়। খুসরান মানে গুনাহের পথে নিজের সত্তা আর আয়ু ধ্বংস করে মানুষের পুঁজি হারিয়ে ফেলা। তাঁর মতে এই দুটিই মানুষের সবচেয়ে বড় পুঁজি। মাআরিফুল কুরআন একই ছবিকে আরও বড় করে আঁকে। ঘণ্টা, দিন, বছর পেরিয়ে যায়, সামর্থ্য ফিকে হয়ে আসে। মানুষ যেন বিপুল সম্পদের মালিক, যার অনুমতি ছাড়াই রোজ সেখান থেকে একটু একটু করে নিয়ে যাওয়া হচ্ছে। সেখানে এক পুরোনো আলেমের কথা আছে, যিনি বলেছিলেন এ আয়াতের অর্থ তিনি শিখেছেন এক বরফ বিক্রেতার কাছে। মুহূর্তের অবহেলায় লোকটির গোটা পুঁজি গলে পানি হয়ে যায়।"
          },
          {
            "en": "Ma'arif supports the image with a saying of the Prophet ﷺ, quoted without its collection. Muslim records it in his Sahih (223), from Abu Malik al-Ash'ari: 'Purification is half of faith. Al-hamdu lillah fills the scale, and subhan Allah and al-hamdu lillah fill what is between the heavens and the earth. Prayer is light, charity is proof, patience is brightness, and the Qur'an is a proof for you or against you. All people set out in the morning selling their souls, and so free them or ruin them.' It is a general narration, not one about this surah.",
            "bn": "মাআরিফুল কুরআন ছবিটির পক্ষে নবী ﷺ-এর একটি বাণী আনে, তবে কোন গ্রন্থের তা বলে না। ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (২২৩) আবু মালিক আশআরী (রাঃ) থেকে এটি বর্ণনা করেছেন: 'পবিত্রতা ঈমানের অর্ধেক। আলহামদু লিল্লাহ পাল্লা ভরে দেয়। সুবহানাল্লাহ ও আলহামদু লিল্লাহ আসমান ও জমিনের মাঝখানটা ভরে দেয়। নামাজ আলো, সদকা প্রমাণ, সবর দীপ্তি, আর কুরআন তোমার পক্ষে অথবা বিপক্ষে দলিল। সব মানুষ সকালে বের হয় নিজেকে বিক্রি করতে, তারপর কেউ নিজেকে মুক্ত করে, কেউ ধ্বংস করে।' এটি সাধারণ বর্ণনা, এ সূরা সম্পর্কে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Loss Is It",
          "bn": "ক্ষতিটা কার"
        },
        "p": [
          {
            "en": "Who is al-insan here? The commentators record a real difference. Al-Qurtubi gives, from Ibn Abbas in the narration of Abu Salih, that the disbeliever is meant, and through ad-Dahhak, again from Ibn Abbas, a report naming particular polytheists of Makkah. Al-Baghawi gives the disbeliever reading under it is said, with a reason: the believers are excepted, which shows who is in loss. Against this, al-Qurtubi records that al-insan means humankind, and in his comment on the exception he calls that the sound view, since the word means people.",
            "bn": "এখানে আল-ইনসান কে? এ নিয়ে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে। কুরতুবী আবু সালিহের বর্ণনায় ইবন আব্বাস থেকে আনেন যে এখানে কাফির উদ্দেশ্য। দাহহাকের সূত্রে, সেটিও ইবন আব্বাস থেকে, এমন বর্ণনা আনেন যাতে মক্কার কয়েকজন নির্দিষ্ট মুশরিকের নাম আছে। বাগাভী 'বলা হয়' দিয়ে কাফির-অর্থটি আনেন এবং কারণও দেন: মুমিনদের বাদ রাখা হয়েছে, তাতেই বোঝা যায় ক্ষতিগ্রস্ত কারা। অন্যদিকে কুরতুবী এ মতও উল্লেখ করেন যে আল-ইনসান মানে গোটা মানবজাতি। ব্যতিক্রমের আলোচনায় গিয়ে তিনি এটিকেই সঠিক মত বলেন, কারণ শব্দটির অর্থ মানুষ।"
          },
          {
            "en": "At-Tabari argues the same from grammar: the believers could be excepted from al-insan only because the word carries a plural sense, not a single person. Ibn Kathir says Allah excepted them from the human genus, and as-Sa'di says every human being is a loser, though loss has grades, from the absolute loss of one who forfeits this world and the next to loss in some respects only. Al-Qurtubi and al-Baghawi add, from Ibrahim, that long life brings decline except for believers, whose earlier deeds keep being written, and both compare 95:4 to 95:6.",
            "bn": "তাবারী ব্যাকরণ দিয়ে একই কথা বলেন: আল-ইনসান থেকে মুমিনদের বাদ দেওয়া গেছে, কারণ শব্দটি এখানে বহুবচনের অর্থ বহন করে, একজন ব্যক্তির নয়। ইবন কাসীর বলেন, মানবজাতির ভেতর থেকে আল্লাহ তাদের আলাদা করেছেন। সা'দী বলেন, প্রত্যেক মানুষই ক্ষতিগ্রস্ত, তবে ক্ষতির স্তর আছে। কেউ দুনিয়া ও আখিরাত দুটোই হারিয়ে পুরোপুরি ক্ষতিগ্রস্ত, কেউ কোনো কোনো দিক থেকে। কুরতুবী ও বাগাভী ইবরাহীম থেকে আরেকটি দিক আনেন: দীর্ঘ আয়ু মানুষকে দুর্বল করে, তবে মুমিনরা ব্যতিক্রম, যৌবনের আমলের সওয়াব তাদের জন্য লেখা হতেই থাকে। দুজনেই একে তুলনা করেন ৯৫:৪ থেকে ৯৫:৬ আয়াতের সঙ্গে।"
          },
          {
            "en": "Where the loss is read as the disbeliever's, or tied to named opponents of the Prophet ﷺ in Makkah, the verse describes what the text describes: a state of loss before Allah. It licenses nothing against any living person or community. The general reading does not hand readers a verdict to pass on others either. The exception is phrased in things a person can only check in himself, and the remedy the surah names is mutual counsel, not judgment passed on outsiders.",
            "bn": "যেখানে ক্ষতিকে কাফিরের ক্ষতি ধরা হয়েছে, বা মক্কায় নবী ﷺ-এর নির্দিষ্ট কিছু বিরোধীর সঙ্গে জুড়ে দেওয়া হয়েছে, সেখানে আয়াত শুধু তা-ই বর্ণনা করে, যা পাঠে আছে: আল্লাহর কাছে এক ক্ষতিগ্রস্ত অবস্থা। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। সাধারণ অর্থটিও পাঠকের হাতে অন্যের উপর রায় দেওয়ার অধিকার তুলে দেয় না। ব্যতিক্রমের শর্তগুলো এমন, যা মানুষ কেবল নিজের ভেতরেই যাচাই করতে পারে। আর সূরা যে প্রতিকারের কথা বলে, তা পরস্পরকে উপদেশ দেওয়া, বাইরের কারও বিচার করা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Completing Self, Then Others",
          "bn": "নিজেকে পূর্ণ করা, তারপর অন্যকে"
        },
        "p": [
          {
            "en": "Illa lladhina amanu wa 'amilu s-salihat: except those who believed and did righteous deeds. At-Tabari glosses belief as affirming Allah and His oneness and acknowledging the duty to obey Him, and the deeds as fulfilling the obligations laid on them and avoiding the sins forbidden them. Ibn Kathir assigns each to its organ: belief in the heart, deeds with the limbs. As-Sa'di adds that belief cannot exist without knowledge, and that righteous action covers all good, outward and inward, owed to Allah or to His servants, obligatory or recommended.",
            "bn": "ইল্লাল্লাযীনা আমানূ ওয়া আমিলুস সালিহাত: তবে তারা নয়, যারা ঈমান এনেছে ও সৎকাজ করেছে। তাবারীর ব্যাখ্যায় ঈমান মানে আল্লাহকে সত্য বলে মানা, তাঁর একত্বে বিশ্বাস রাখা এবং আনুগত্যের দায় স্বীকার করা। আর সৎকাজ মানে তাঁর দেওয়া ফরজগুলো আদায় করা আর নিষিদ্ধ গুনাহ থেকে দূরে থাকা। ইবন কাসীর দুটিকে দুই জায়গায় রাখেন: ঈমান অন্তরে, আমল অঙ্গপ্রত্যঙ্গে। সা'দী যোগ করেন, ইলম ছাড়া ঈমান হয় না। আর সৎকাজের মধ্যে পড়ে সব ধরনের ভালো কাজ, প্রকাশ্য ও গোপন, আল্লাহর হক বা বান্দার হক, ফরজ কিংবা মুস্তাহাব।"
          },
          {
            "en": "Then tawasaw, which al-Qurtubi and al-Baghawi explain as advising one another, al-Qurtubi adding urging one another on. As-Sa'di states the surah's design in one sentence: by the first two a person completes himself, by the last two he completes others, and by completing all four he is saved from loss and wins the great profit. Ma'arif al-Qur'an, citing Ibn Kathir, makes the same division and draws a hard conclusion: whoever ignores the faith and conduct of his own wife, children and family is blocking his own way to salvation, however pious he may be.",
            "bn": "তারপর তাওয়াসাও। কুরতুবী ও বাগাভীর ব্যাখ্যায় এর অর্থ একে অপরকে উপদেশ দেওয়া, আর কুরতুবী সঙ্গে যোগ করেন একে অপরকে উৎসাহ দেওয়া। সা'দী এক বাক্যে গোটা সূরার নকশা বলে দেন: প্রথম দুটি দিয়ে মানুষ নিজেকে পূর্ণ করে, শেষ দুটি দিয়ে অন্যকে। চারটিই পূর্ণ করলে সে ক্ষতি থেকে বেঁচে যায় এবং বিরাট লাভ অর্জন করে। মাআরিফুল কুরআন ইবন কাসীরের বরাতে একই ভাগ করে, তারপর কঠিন একটি সিদ্ধান্তে পৌঁছায়। যে নিজের স্ত্রী, সন্তান ও পরিবারের ঈমান-আমলের দিকে চোখ বুজে থাকে, সে যত বড় পরহেজগারই হোক, নিজের নাজাতের পথ নিজেই আটকে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth Against Doubt, Patience Against Desire",
          "bn": "সংশয়ের জবাবে সত্য, প্রবৃত্তির জবাবে সবর"
        },
        "p": [
          {
            "en": "Wa tawasaw bil-haqq: and they urged each other to the truth. At-Tabari explains it as urging each other to hold to acting on what Allah revealed in His Book, His command and the avoidance of what He forbade, and reports from Qatada and al-Hasan that al-haqq is the Book of Allah. Al-Qurtubi adds, from Ibn Abbas through ad-Dahhak, that it is tawhid, and from as-Suddi that the Truth here is Allah. Al-Baghawi gives Muqatil: faith and tawhid. Ibn Kathir says it is performing acts of obedience and leaving the forbidden; as-Sa'di, that it is faith and righteous deeds.",
            "bn": "ওয়া তাওয়াসাও বিল হাক্ক: আর তারা একে অপরকে সত্যের উপদেশ দিয়েছে। তাবারীর ব্যাখ্যায় এর মানে, আল্লাহ তাঁর কিতাবে যা নাজিল করেছেন, অর্থাৎ তাঁর আদেশ পালন আর নিষেধ থেকে দূরে থাকা, তার উপর অটল থাকতে পরস্পরকে উপদেশ দেওয়া। কাতাদা ও হাসান থেকে তিনি বর্ণনা করেন, হক মানে আল্লাহর কিতাব। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস থেকে আনেন, হক মানে তাওহীদ, আর সুদ্দী থেকে আনেন, এখানে হক স্বয়ং আল্লাহ। বাগাভী মুকাতিলের মত দেন: ঈমান ও তাওহীদ। ইবন কাসীরের মতে হক মানে আনুগত্যের কাজ আদায় আর হারাম বর্জন। সা'দীর মতে ঈমান ও সৎকাজ।"
          },
          {
            "en": "Wa tawasaw bis-sabr: and they urged one another to patience. At-Tabari reads it as patience in acting on obedience to Allah, and reports from Qatada and al-Hasan that patience is obedience to Allah. Al-Qurtubi has patience upon obedience and patience away from sins; al-Baghawi, patience in carrying out the obligations and establishing Allah's command. As-Sa'di names three: upon obedience to Allah, away from disobeying Him, and under His painful decrees. The English abridgement of Ibn Kathir gives a pointed reading: patience with the plots and harms of those who hurt people for commanding good and forbidding evil.",
            "bn": "ওয়া তাওয়াসাও বিস সাবর: আর তারা একে অপরকে সবরের উপদেশ দিয়েছে। তাবারী বলেন, আল্লাহর আনুগত্যের কাজে টিকে থাকার সবর। কাতাদা ও হাসান থেকে তিনি বর্ণনা করেন, সবর মানে আল্লাহর আনুগত্য। কুরতুবীর মতে আনুগত্যের উপর সবর আর গুনাহ থেকে বিরত থাকার সবর। বাগাভীর মতে ফরজ আদায় ও আল্লাহর বিধান কায়েমের পথে সবর। সা'দী তিনটি দিক বলেন: আল্লাহর আনুগত্যে, তাঁর নাফরমানি থেকে দূরে থাকায়, আর তাঁর কষ্টদায়ক তাকদিরে। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণে আরও নির্দিষ্ট একটি অর্থ আছে। ভালো কাজের আদেশ ও মন্দ কাজে নিষেধের কারণে যারা মানুষকে কষ্ট দেয়, তাদের চক্রান্ত ও আঘাতে সবর।"
          },
          {
            "en": "Ma'arif al-Qur'an reports from Ibn Taymiyya, in one of his monographs, that two things usually keep people from faith and good deeds: doubts about the true faith, and selfish desires that pull a person toward wrong even when he knows better. On this account, urging to truth answers the doubts and urging to patience answers the desires. Ma'arif also gives a second pairing: truth as correct faith and good deeds, patience as abstaining from all sins, so that the two clauses together become enjoining good and forbidding evil.",
            "bn": "মাআরিফুল কুরআন ইবন তাইমিয়ার একটি পুস্তিকা থেকে উদ্ধৃত করে যে মানুষকে ঈমান ও সৎকাজ থেকে সাধারণত দুটি জিনিস আটকায়। একটি হলো সত্য দ্বীন নিয়ে সংশয়। অন্যটি প্রবৃত্তির কামনা, যা মানুষ জেনেবুঝেও তাকে ভুল পথে টেনে নেয়। এই ব্যাখ্যায় সত্যের উপদেশ সংশয়ের জবাব, আর সবরের উপদেশ প্রবৃত্তির জবাব। মাআরিফ আরেকটি জোড়ও দেখায়: হক মানে সঠিক আকিদা ও সৎকাজ, সবর মানে সব গুনাহ থেকে বিরত থাকা। তখন দুটি বাক্য মিলে দাঁড়ায় সৎকাজের আদেশ আর অসৎকাজে নিষেধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited Before They Parted",
          "bn": "বিদায়ের আগে সূরাটি পাঠ"
        },
        "p": [
          {
            "en": "The surah's standing comes through reports, and they should be read as reports. Ibn Kathir writes that at-Tabarani recorded, through Hammad ibn Salamah from Thabit, from 'Abdullah ibn Hisn Abi Madinah, that when two men among the Companions of the Messenger of Allah ﷺ met, they would not part until one had recited Surat al-'Asr to the other to its end, and then one greeted the other with peace. Ma'arif al-Qur'an gives the report from at-Tabarani, naming the narrator 'Ubaidullah ibn Hisn. Neither states a grading.",
            "bn": "সূরাটির মর্যাদার কথা এসেছে কিছু বর্ণনার মাধ্যমে, আর সেগুলোকে বর্ণনা হিসেবেই পড়া উচিত। ইবন কাসীর লেখেন, তাবারানী হাম্মাদ ইবন সালামা থেকে, তিনি সাবিত থেকে, তিনি আবদুল্লাহ ইবন হিসন আবু মাদীনা থেকে বর্ণনা করেছেন: রাসূলুল্লাহ ﷺ-এর সাহাবিদের মধ্যে দুজনের দেখা হলে, একজন অপরজনকে সূরা আসর শেষ পর্যন্ত পড়ে না শোনানো পর্যন্ত তাঁরা আলাদা হতেন না। তারপর একজন অপরজনকে সালাম দিতেন। মাআরিফুল কুরআনও তাবারানীর বরাতে বর্ণনাটি দেয়, তবে বর্ণনাকারীর নাম লেখে উবায়দুল্লাহ ইবন হিসন। দুটি গ্রন্থের কোনোটিই এর মান উল্লেখ করেনি।"
          },
          {
            "en": "Ibn Kathir adds ash-Shafi'i's saying, in his wording: if people reflected on this surah, it would suffice them. He also records, introduced with they mentioned, that 'Amr ibn al-'As, before his Islam, described the surah to Musaylimah as short and eloquent; Musaylimah produced a rhyme about a hyrax, and 'Amr told him, by Allah, you know that I know you are lying. The story concerns one man's false claim and licenses nothing against any living person. Beyond a report al-Qurtubi calls sound, naming the 'Asr prayer as the middle prayer, none of the commentaries consulted attaches a graded hadith to these verses.",
            "bn": "ইবন কাসীর ইমাম শাফিঈর কথাটিও আনেন, তাঁর ভাষায়: মানুষ যদি এই সূরা নিয়ে চিন্তা করত, তবে এটিই তাদের জন্য যথেষ্ট হতো। 'তারা উল্লেখ করেছেন' বলে তিনি আরেকটি ঘটনাও আনেন। ইসলাম গ্রহণের আগে আমর ইবনুল আস মুসাইলিমার কাছে সূরাটিকে সংক্ষিপ্ত ও অলংকারপূর্ণ বলে বর্ণনা করেন। মুসাইলিমা জবাবে বিড়ালসদৃশ ছোট এক প্রাণী নিয়ে ছড়া বানায়, আর আমর তাকে বলেন, আল্লাহর কসম, তুমি জানো যে আমি জানি তুমি মিথ্যা বলছ। ঘটনাটি এক ব্যক্তির মিথ্যা দাবির, জীবিত কারও বিরুদ্ধে এটি কোনো অনুমতি দেয় না। আসরের নামাজই মধ্যবর্তী নামাজ, এ কথার একটি বর্ণনাকে কুরতুবী সহীহ বলেন। এর বাইরে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতগুলোর সঙ্গে মান-নির্ধারিত কোনো হাদীস জুড়ে দেয়নি।"
          }
        ]
      }
    ]
  }
});
