/**
 * Tadabbur long-form articles — surah 35.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "35:1": {
    "sections": [
      {
        "h": {
          "en": "The First Word, Fatir",
          "bn": "প্রথম শব্দ, ফাতির"
        },
        "p": [
          {
            "en": "The surah is named for its first real word after the praise: Fatir. Al-Qurtubi explains that al-fatir is al-khaliq, the Creator, but he reaches that meaning through the root. Al-fatr, he says, is the splitting open of a thing: fatartuhu fa-infatara, I split it and it split apart. He cites the camel whose eye-tooth breaks through the gum, and a sword with a crack running down its blade. Fatr is also al-ibtida and al-ikhtira, the beginning of something and its invention from nothing at all.",
            "bn": "সূরাটির নাম এসেছে প্রশংসার পরের প্রথম আসল শব্দ থেকে: ফাতির। কুরতুবী বলেন, আল-ফাতির মানে আল-খালিক, স্রষ্টা, তবে তিনি অর্থে পৌঁছান ধাতুর পথ ধরে। তাঁর মতে আল-ফাতর হলো কোনো জিনিসকে চিরে খুলে ফেলা: ফাতারতুহু ফানফাতারা, আমি তা চিরলাম আর তা চিরে গেল। উদাহরণ দেন সেই উটের, যার দাঁত মাড়ি ভেদ করে বেরিয়ে আসে, আর সেই তরবারির, যার ফলায় ফাটল নেমে গেছে। ফাতর আবার আল-ইবতিদা ও আল-ইখতিরা, অর্থাৎ শূন্য থেকে কোনো কিছুর সূচনা করা আর তা উদ্ভাবন করা।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi both preserve why the word once puzzled even Ibn Abbas. He said he did not know what Fatir as-samawati wa-l-ard meant until two Bedouin came to him quarrelling over a well, and he heard one of them say, ana fatartuha, I started it, I began it. The live speech of the desert carried the sense the scholar had been missing. Ibn Abbas then glossed the name as badi as-samawat, the Originator who brings things about with no earlier model to follow.",
            "bn": "কুরতুবী আর ইবন কাসীর দুজনেই বলেন, এই শব্দ একসময় খোদ ইবন আব্বাসকেও ভাবিয়েছিল। তিনি বলতেন, ফাতিরুস সামাওয়াতি ওয়াল আরদ মানে কী তা তিনি জানতেন না, যতক্ষণ না দুই বেদুইন একটি কূপ নিয়ে ঝগড়া করতে করতে তাঁর কাছে এল। তাদের একজনকে তিনি বলতে শুনলেন, আনা ফাতারতুহা, অর্থাৎ আমিই এটি শুরু করেছি, আমিই এর গোড়াপত্তন করেছি। মরুভূমির জীবন্ত কথাই আলিমের কাছে সেই অর্থ এনে দিল, যা এতদিন অধরা ছিল। এরপর ইবন আব্বাস নামটির ব্যাখ্যা দেন বাদীউস সামাওয়াত হিসেবে, যিনি আগের কোনো নমুনা ছাড়াই অস্তিত্বে আনেন।"
          },
          {
            "en": "Ad-Dahhak adds that wherever Fatir as-samawati wa-l-ard occurs in the Qur'an it means the Creator of the heavens and the earth. Al-Baghawi presses the force further: their Maker who originated them with no earlier pattern to copy. And al-Qurtubi draws the quiet conclusion the opening wants you to reach: the God who had the power to begin a thing has the power to bring it back. A name chosen for the very start of things is already pointing past this life, toward the return.",
            "bn": "আদ-দাহহাক যোগ করেন, কুরআনে যেখানেই ফাতিরুস সামাওয়াতি ওয়াল আরদ এসেছে, সেখানেই এর মানে আকাশমণ্ডলী ও পৃথিবীর স্রষ্টা। বাগাভী অর্থটা আরও জোর দিয়ে বলেন: এগুলোর নির্মাতা, যিনি দেখে নেওয়ার মতো আগের কোনো নকশা ছাড়াই এদের সূচনা করেছেন। আর কুরতুবী শান্তভাবে সেই উপসংহারে পৌঁছান, যেখানে সূরার এই শুরুটা পাঠককে নিয়ে যেতে চায়: যে আল্লাহ কোনো কিছু শুরু করতে পেরেছেন, তিনি তা ফিরিয়েও আনতে পারেন। সবকিছুর একেবারে শুরুর জন্য বেছে নেওয়া এই নাম আগে থেকেই এই জীবন পেরিয়ে প্রত্যাবর্তনের দিকে ইশারা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Praise Opens Here",
          "bn": "প্রশংসা দিয়েই শুরু কেন"
        },
        "p": [
          {
            "en": "Before the name comes the praise itself: al-hamdu lillah. At-Tabari reads it as the complete thanks owed to the God who alone deserves worship, beside whom nothing else has any right to it. The surah does not open by arguing that its Lord exists; it opens by giving Him His due. Praise is set down first, as a settled fact, and only afterwards does the verse say what He has done to earn it: the heavens, the earth, and the angels take their place as grounds for a word already spoken.",
            "bn": "নামের আগে আসে প্রশংসা নিজেই: আলহামদু লিল্লাহ। তাবারীর ব্যাখ্যায় এ হলো সেই পরিপূর্ণ শোকর, যা কেবল আল্লাহরই প্রাপ্য। ইবাদত পাওয়ার যোগ্য একমাত্র তিনিই, তিনি ছাড়া আর কারও এতে কোনো হক নেই। সূরাটি রবের অস্তিত্ব নিয়ে তর্ক করে শুরু হয় না; শুরু হয় তাঁর প্রাপ্যটুকু তাঁকে দিয়ে। প্রশংসা আগে আসে, মীমাংসিত সত্য হিসেবে। তারপর আয়াত বলে, কী কাজের জন্য তিনি এ প্রশংসার যোগ্য: আকাশ, পৃথিবী আর ফেরেশতারা আসে আগেই বলে ফেলা কথাটির কারণ হিসেবে।"
          },
          {
            "en": "As-Sa'di notes that here God praises His own noble, sacred self for creating the heavens and the earth and all they hold, because that act is proof of the perfection of His power, the reach of His dominion, the breadth of His mercy, the fineness of His wisdom, and the compass of His knowledge. Al-Muyassar gathers the same point: He is praised by attributes that are each of them attributes of perfection, and by His blessings, the seen and the hidden, those of religion and those of this world alike.",
            "bn": "সাদী লক্ষ করান, এখানে আল্লাহ নিজের মহান পবিত্র সত্তার প্রশংসা করেন আকাশমণ্ডলী, পৃথিবী আর এদের ভেতরের সব সৃষ্টির জন্য, কারণ এই সৃষ্টিই তাঁর ক্ষমতার পূর্ণতা, তাঁর রাজত্বের বিস্তার, তাঁর রহমতের ব্যাপকতা, তাঁর হিকমতের সূক্ষ্মতা আর তাঁর জ্ঞানের পরিধির প্রমাণ। মুয়াসসার একই কথা গুছিয়ে আনে: তাঁর প্রশংসা হয় তাঁর গুণাবলি দিয়ে, যার প্রতিটিই পূর্ণতার গুণ, আর তাঁর নিয়ামত দিয়ে, প্রকাশ্য ও গোপন, দ্বীনের ও দুনিয়ার সব নিয়ামত দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels Sent as Messengers",
          "bn": "ফেরেশতারা দূত হয়ে আসেন"
        },
        "p": [
          {
            "en": "Having mentioned creation, the verse turns to command: jail al-malaika rusula, who made the angels messengers. Ibn Kathir says this means messengers between Him and His prophets. At-Tabari widens it: He sends them to whichever of His servants He wills, with whatever command or prohibition He wills. Al-Qurtubi names the great envoys among them, Jibril, Mikail, Israfil, and the Angel of Death, and records Yahya ibn Sallam's reading that they are sent to the prophets, and as-Suddi's that they come to the servants bearing either mercy or punishment.",
            "bn": "সৃষ্টির কথা বলার পর আয়াত মোড় নেয় হুকুমের দিকে: জাইলুল মালাইকাতি রুসুলা, যিনি ফেরেশতাদের দূত বানিয়েছেন। ইবন কাসীর বলেন, অর্থাৎ তাঁর আর তাঁর নবীদের মাঝে দূত। তাবারী অর্থটা আরও বড় করে দেখেন: বান্দাদের মধ্যে যার কাছে ইচ্ছা, যে আদেশ বা নিষেধ দিয়ে ইচ্ছা, আল্লাহ তাঁদের পাঠান। কুরতুবী তাঁদের মধ্যকার বড় দূতদের নাম বলেন: জিবরীল, মিকাঈল, ইসরাফীল আর মালাকুল মাওত। তিনি ইয়াহইয়া ইবন সাল্লামের ব্যাখ্যাও আনেন যে তাঁদের পাঠানো হয় নবীদের কাছে, আর আস-সুদ্দীর ব্যাখ্যা যে তাঁরা বান্দাদের কাছে আসেন রহমত বা শাস্তি নিয়ে।"
          },
          {
            "en": "As-Sa'di distinguishes two kinds of errand. The angels carry out His decreed, creational commands in the running of the world, and they stand as intermediaries between Him and His servants in conveying His religious commands. Ma'arif al-Qur'an offers a further sense: the word rasul here may mark the angels as a link joining God to His whole creation, the prophets being the highest in that chain, so that revelation reaches them across this angelic bridge, and His mercy and His punishment reach the world along the very same route.",
            "bn": "সাদী দুই ধরনের দায়িত্ব আলাদা করে দেখান। ফেরেশতারা জগৎ পরিচালনায় আল্লাহর তাকদিরি হুকুম কার্যকর করেন, আবার তাঁর দ্বীনি হুকুম বান্দাদের কাছে পৌঁছে দিতে মাঝখানে মাধ্যম হয়ে দাঁড়ান। মাআরিফুল কুরআন আরেকটি অর্থের কথা বলে: এখানে রাসূল শব্দটি হয়তো বোঝায়, ফেরেশতারা আল্লাহ আর তাঁর গোটা সৃষ্টির মাঝে এক সংযোগ, আর সেই ধারায় সবার ওপরে নবীরা। ফেরেশতাদের এই সেতু বেয়েই নবীদের কাছে ওহি পৌঁছায়, আর ঠিক এই পথেই জগতে পৌঁছায় তাঁর রহমত ও শাস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "None of Them Disobeys",
          "bn": "একজনও অবাধ্য নয়"
        },
        "p": [
          {
            "en": "As-Sa'di draws attention to a small, exact thing in the wording. God says He made the angels messengers and excepts not a single one of them from that office. That silence, with no exception made, is itself proof of how completely they obey their Lord and submit to His command. He points to the description given elsewhere: they do not disobey God in what He commands them, and they do what they are commanded (66:6). Obedience without a gap in it is the angels' native state, not an effort they must keep up.",
            "bn": "সাদী শব্দের ভেতরের একটি ছোট কিন্তু নিখুঁত জিনিসের দিকে নজর দেন। আল্লাহ বলেন, তিনি ফেরেশতাদের দূত বানিয়েছেন, আর তাঁদের একজনকেও এই দায়িত্বের বাইরে রাখেননি। কোনো ব্যতিক্রমের কথা না বলা, এই চুপ থাকাটাই প্রমাণ করে, তাঁরা কত পুরোপুরি তাঁদের রবের আনুগত্য করেন, তাঁর হুকুমের সামনে মাথা নত করেন। সাদী অন্য আয়াতের বর্ণনার দিকে ইঙ্গিত করেন: আল্লাহ তাঁদের যা আদেশ করেন, তাতে তাঁরা তাঁর নাফরমানি করেন না, আর তাঁদের যা আদেশ করা হয় তা-ই করেন (৬৬:৬)। ফাঁকহীন আনুগত্যই ফেরেশতাদের সহজাত স্বভাব; এটা কষ্ট করে ধরে রাখার কিছু নয়।"
          },
          {
            "en": "This is worth sitting with, because it is the opposite of how obedience usually works in us. We weigh a command, bargain with it, delay, and keep a private clause of refusal held back in reserve. The angels given wings to fly His errands hold nothing back and waste no time. The verse is not scolding anyone here; it is simply showing what willing service looks like when it is pure, so that a reader can measure his own slow and conditional yes against a service that has neither flaw.",
            "bn": "কথাটা নিয়ে একটু থামা দরকার, কারণ আমাদের আনুগত্য সাধারণত চলে এর ঠিক উল্টোভাবে। হুকুম পেলে আমরা আগে মেপে দেখি, দরদাম করি, দেরি করি, আর মনের ভেতর না বলার একটা শর্ত লুকিয়ে রাখি। অথচ তাঁর কাজে উড়ে যাওয়ার জন্য যে ফেরেশতাদের ডানা দেওয়া হয়েছে, তাঁরা কিছুই ধরে রাখেন না, এক মুহূর্তও নষ্ট করেন না। আয়াত এখানে কাউকে ধমকাচ্ছে না। শুধু দেখিয়ে দিচ্ছে, মন থেকে করা খেদমত খাঁটি হলে কেমন হয়, যাতে পাঠক নিজের ধীর আর শর্তজুড়ে দেওয়া হ্যাঁ-কে এমন খেদমতের পাশে রেখে মাপতে পারেন, যাতে এ দুটি খুঁতের কোনোটিই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Wings, as They Were Told",
          "bn": "ডানা, যেমন বলা হয়েছে"
        },
        "p": [
          {
            "en": "Uli ajniha mathna wa-thulatha wa-ruba: possessing wings, in twos and threes and fours. Ibn Kathir explains that they fly with these wings to deliver swiftly whatever they are commanded to deliver. Qatada, cited by at-Tabari and al-Baghawi, reads the counts plainly: some angels have two wings, some three, and some four. Al-Qurtubi adds that with them they descend from the heaven to the earth and ascend back again, crossing in a single moment a distance that would otherwise take an age to travel.",
            "bn": "উলি আজনিহাতিন মাসনা ওয়া সুলাসা ওয়া রুবা: ডানাওয়ালা, দুই দুই, তিন তিন আর চার চার করে। ইবন কাসীর ব্যাখ্যা করেন, এই ডানা দিয়েই তাঁরা উড়ে গিয়ে যা আদেশ করা হয় তা দ্রুত পৌঁছে দেন। কাতাদা, যাঁকে তাবারী ও বাগাভী উদ্ধৃত করেন, সংখ্যাগুলো সোজা অর্থেই নেন: কারও দুটি ডানা, কারও তিনটি, কারও চারটি। কুরতুবী যোগ করেন, এই ডানায় তাঁরা আসমান থেকে জমিনে নামেন আর জমিন থেকে আসমানে ওঠেন, মুহূর্তে পাড়ি দেন এমন দূরত্ব, যা নইলে পেরোতে যুগ লেগে যেত।"
          },
          {
            "en": "How these wings are, the early scholars did not try to picture. They affirmed them exactly as the verse gives them, real wings, and left the manner of them to God, neither explaining them away as mere imagery nor drawing a diagram of what cannot be seen. The commentators report the counts and the speed; they do not describe feathers or colour. That restraint is itself a lesson: faith here accepts what is told on the authority of the Teller, without demanding that the unseen be reduced to something the eye could sketch.",
            "bn": "এই ডানা কেমন, আগের যুগের আলিমরা তার ছবি আঁকার চেষ্টা করেননি। আয়াত যেভাবে বলেছে, ঠিক সেভাবেই তাঁরা মেনে নিয়েছেন যে এগুলো সত্যিকারের ডানা, আর ধরনটা ছেড়ে দিয়েছেন আল্লাহর ওপর। একে নিছক রূপক বলে উড়িয়েও দেননি, আবার যা চোখে দেখা যায় না তার নকশাও আঁকেননি। তাফসিরকারেরা সংখ্যা আর গতির কথা বলেন; পালক বা রঙের বর্ণনা দেন না। এই সংযমও একটা শিক্ষা: ইমান এখানে যিনি খবর দিয়েছেন তাঁর কথার ওপর ভরসা করেই খবরটা মেনে নেয়। অদৃশ্যকে চোখে আঁকা যায় এমন কিছুতে নামিয়ে আনার দাবি তোলে না।"
          },
          {
            "en": "Ma'arif al-Qur'an cautions that the counts are not a limit but an example, since a sound report puts far more than four wings on a single angel. It even raises a second possibility, from Abu Hayyan: the words twos and threes and fours may describe the messengers rather than the wings, angels arriving in groups of such size, and here too the four is no ceiling, for the Qur'an itself speaks of angels coming in far greater number than any of these.",
            "bn": "মাআরিফুল কুরআন সতর্ক করে, এই সংখ্যাগুলো সীমা নয়, উদাহরণ মাত্র। কারণ সহিহ বর্ণনায় একজন ফেরেশতারই চারটির চেয়ে অনেক বেশি ডানার কথা এসেছে। আবু হাইয়ান থেকে সেখানে আরেকটি সম্ভাবনাও তোলা হয়েছে: দুই, তিন, চার শব্দগুলো হয়তো ডানার নয়, দূতদেরই বিবরণ, অর্থাৎ ফেরেশতারা এমন সংখ্যায় দলে দলে আসেন। এখানেও চার কোনো শেষ সীমা নয়, কারণ কুরআন নিজেই এর চেয়ে অনেক বেশি সংখ্যায় ফেরেশতা আসার কথা বলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Hundred Wings",
          "bn": "ছয়শ ডানা"
        },
        "p": [
          {
            "en": "The clearest evidence that the counts are illustrative comes in a report both Ibn Kathir and al-Qurtubi bring to the verse. Al-Bukhari records, on the authority of Ibn Mas'ud, that the Prophet ﷺ had seen Jibril (AS) having 600 wings (Bukhari 3232). The report sits in al-Bukhari's collection, into which its compiler admitted only sound narrations, and al-Qurtubi notes that the same wording is preserved in Sahih Muslim as well. From two wings to 600, the created ranks are vast beyond our counting.",
            "bn": "সংখ্যাগুলো যে কেবল উদাহরণ, তার স্পষ্টতম প্রমাণ আসে এমন এক বর্ণনায়, যা ইবন কাসীর ও কুরতুবী দুজনেই এই আয়াতের সঙ্গে আনেন। বুখারী ইবন মাসউদের সূত্রে বর্ণনা করেন, নবী ﷺ জিবরীল (আ)-কে ৬০০ ডানাসহ দেখেছিলেন (বুখারী ৩২৩২)। বর্ণনাটি আছে বুখারীর সেই সংকলনে, যাতে সংকলক কেবল সহিহ বর্ণনাই স্থান দিয়েছেন, আর কুরতুবী জানান একই শব্দ সহিহ মুসলিমেও সংরক্ষিত। দুই ডানা থেকে ৬০০, সৃষ্টির স্তর আমাদের গোনার বাইরে বিস্তৃত।"
          },
          {
            "en": "Al-Baghawi ties the same sighting to the words of Surah an-Najm, that the Prophet ﷺ saw of his Lord's greatest signs (53:18), and Ibn Mas'ud explained that what he saw there was Jibril (AS) in his true created form. The lesson the commentators draw is not arithmetic but awe: if a single created servant is built on this scale, the God who increases creation as He wills is beyond any total the mind can set. The wing-count is a door opening onto His power, not a figure to be tallied and closed.",
            "bn": "বাগাভী এই দেখাকে মিলিয়েছেন সূরা নাজমের আয়াতের সঙ্গে: নবী ﷺ তাঁর রবের সবচেয়ে বড় নিদর্শনগুলোর কিছু দেখেছিলেন (৫৩:১৮)। ইবন মাসউদ ব্যাখ্যা করেছেন, তিনি সেখানে দেখেছিলেন জিবরীল (আ)-কে, তাঁর আসল সৃষ্ট আকৃতিতে। তাফসিরকারেরা এখান থেকে অঙ্কের শিক্ষা নেন না, নেন বিস্ময়ের শিক্ষা: সৃষ্টির একজন বান্দাই যদি এত বিশাল হন, তবে যে আল্লাহ সৃষ্টিতে যা ইচ্ছা বাড়িয়ে দেন, মানুষের মন কোনো হিসাবেই তাঁর নাগাল পায় না। ডানার এই সংখ্যা তাঁর কুদরতের দিকে খুলে যাওয়া এক দরজা; গুনে শেষ করে খাতা বন্ধ করার অঙ্ক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Adds He Wills",
          "bn": "যা তিনি ইচ্ছেমতো বাড়ান"
        },
        "p": [
          {
            "en": "Then: yazidu fi-l-khalqi ma yasha, He increases in creation what He wills. The commentators do not settle on a single scope for the words, and this article keeps their difference open rather than choosing between them. On the first reading, carried by most of them according to al-Qurtubi and by al-Hasan, the increase is in the angels themselves, in wings beyond the two or three or four already named. As-Suddi puts it simply: He increases their wings and their creation however He wills.",
            "bn": "তারপর: ইয়াযিদু ফিল খালকি মা ইয়াশা, তিনি সৃষ্টিতে যা ইচ্ছা বাড়িয়ে দেন। কথাটা কতদূর পর্যন্ত গড়ায়, তা নিয়ে তাফসিরকারেরা এক মতে আসেননি। এই লেখাও কোনো একটি মত বেছে না নিয়ে তাঁদের মতভেদটা খোলা রাখছে। প্রথম মতটি, কুরতুবীর ভাষায়, বেশিরভাগ তাফসিরকারের, আর হাসান বসরিরও: এই বাড়তি ফেরেশতাদের নিজেদের মধ্যেই, আগে বলা দুই, তিন বা চার ডানার ওপর আরও ডানা। আস-সুদ্দী সোজা কথায় বলেন: তিনি তাঁদের ডানা আর তাঁদের গঠন যেমন ইচ্ছা বাড়িয়ে দেন।"
          },
          {
            "en": "On another reading the increase spills past the angels into creation at large. Az-Zuhri and Ibn Jurayj glossed it as beauty of voice; Ibn Kathir notes that al-Bukhari recorded this from az-Zuhri in al-Adab. Qatada read it as comeliness, loveliness in the eyes, a fine nose, sweetness in the mouth. Others named a handsome face, good handwriting, or the gift of intellect and discernment. Each reader points to a different place where God's added touch shows itself, and the verse's own words refuse to be narrowed to any single field.",
            "bn": "আরেক মতে এই বাড়তি ফেরেশতাদের ছাড়িয়ে গোটা সৃষ্টিতে ছড়িয়ে পড়ে। যুহরী ও ইবন জুরায়জ এর অর্থ করেছেন সুন্দর কণ্ঠ; ইবন কাসীর জানান, বুখারী যুহরী থেকে এটি আল-আদাবে বর্ণনা করেছেন। কাতাদার মতে এ হলো রূপের লাবণ্য: চোখের মাধুর্য, সুন্দর নাক, মুখের মিষ্টতা। অন্যরা বলেছেন সুন্দর চেহারা, সুন্দর হাতের লেখা, কিংবা বুদ্ধি ও বিবেচনার নিয়ামত। একেকজন একেক জায়গা দেখিয়ে দেন, যেখানে আল্লাহর বাড়তি ছোঁয়া ফুটে ওঠে; আর আয়াতের শব্দ নিজেই কোনো একটি ক্ষেত্রে আটকে থাকতে রাজি নয়।"
          },
          {
            "en": "Az-Zamakhshari, cited by al-Qurtubi, reads the verse as absolute, taking in every increase: tall stature, a balanced form, complete limbs, strength of grip, soundness of mind, sureness of judgment, courage of heart, generosity of soul, a ready and eloquent tongue. As-Sa'di lists much the same, adding beauty of voice and the pleasure of melody. Ma'arif al-Qur'an draws the moral: whatever excellence a person carries is a gift and a blessing from God, so the right response to any strength you find in yourself is gratitude.",
            "bn": "কুরতুবীর উদ্ধৃতিতে যামাখশারী আয়াতটিকে ব্যাপক অর্থে নেন, যাতে সব রকম বাড়তিই ধরা পড়ে: লম্বা গড়ন, সুষম দেহ, পূর্ণ অঙ্গপ্রত্যঙ্গ, হাতের জোর, বুদ্ধির স্বচ্ছতা, সঠিক বিচার, সাহসী হৃদয়, উদার মন, আর সাবলীল ও গুছিয়ে কথা বলার জবান। সাদীও প্রায় একই তালিকা দেন, সঙ্গে যোগ করেন সুন্দর কণ্ঠ আর সুরের আনন্দ। মাআরিফুল কুরআন এখান থেকে শিক্ষাটা বের করে আনে: মানুষের যত গুণ আর যোগ্যতা, সবই আল্লাহর দান ও নিয়ামত। তাই নিজের মধ্যে কোনো শক্তি দেখলে তার সঠিক জবাব হলো শোকর।"
          }
        ]
      },
      {
        "h": {
          "en": "Able Over Everything",
          "bn": "সব কিছুর উপর সক্ষম"
        },
        "p": [
          {
            "en": "The verse seals itself: inna Allaha ala kulli shayin qadir, indeed God is competent over all things. At-Tabari reads the close against the line just before it: He is able to add to His creation whatever He wills and to withhold from it whatever He wills, in the angels' wings and in everything else alike. As-Sa'di adds that His power reaches whatever He intends and nothing can resist it, and the raising of some creatures above others is just a single instance of a power that has no edge to it.",
            "bn": "আয়াত শেষ হয় একটি মোহর দিয়ে: ইন্নাল্লাহা আলা কুল্লি শাইয়িন কাদির, নিশ্চয় আল্লাহ সব কিছুর ওপর সক্ষম। তাবারী এই শেষ কথাটি পড়েন ঠিক আগের অংশের সঙ্গে মিলিয়ে: তিনি তাঁর সৃষ্টিতে যা ইচ্ছা বাড়াতে পারেন, যা ইচ্ছা আটকে রাখতে পারেন, ফেরেশতাদের ডানায়ও, বাকি সবকিছুতেও। সাদী যোগ করেন, তিনি যা চান তাঁর ক্ষমতা সেখানেই পৌঁছায়, কিছুই তা ঠেকাতে পারে না। কোনো সৃষ্টিকে অন্যদের ওপরে তুলে দেওয়া সেই সীমাহীন ক্ষমতার একটি নমুনা মাত্র।"
          },
          {
            "en": "So the verse arrives where it began. It opened with praise and closed with power, and between them it showed God splitting existence into being, sending angels out on wings, and adding to His own handiwork as He pleases. The quiet claim it lays on the reader is personal: the clearness of your mind, the ease in your voice, the steadiness of your hands were added to you, not achieved by you. The God who tore the heavens open from nothing, and who can bring them back, is the right address for your thanks.",
            "bn": "এভাবে আয়াত যেখান থেকে শুরু করেছিল, সেখানেই ফিরে আসে। শুরু প্রশংসায়, শেষ ক্ষমতায়। আর মাঝখানে দেখায়, আল্লাহ অস্তিত্বকে চিরে সৃষ্টিকে বের করে আনেন, ফেরেশতাদের ডানায় ভর করে পাঠান, আর নিজের হাতের কাজে যা ইচ্ছা যোগ করেন। পাঠকের কাছে আয়াতের নীরব দাবিটা একান্ত ব্যক্তিগত: আপনার মনের স্বচ্ছতা, কণ্ঠের সাবলীলতা, হাতের স্থিরতা আপনাকে বাড়তি দেওয়া হয়েছে; এগুলো আপনার নিজের অর্জন নয়। যে আল্লাহ শূন্য থেকে আকাশ চিরে বের করেছেন, আর যিনি তা আবার ফিরিয়ে আনতে পারেন, আপনার শোকরের ঠিক ঠিকানা তিনিই।"
          }
        ]
      }
    ]
  },
  "35:10": {
    "sections": [
      {
        "h": {
          "en": "Honour Sought From Idols",
          "bn": "প্রতিমার কাছে সম্মান খোঁজা"
        },
        "p": [
          {
            "en": "The verse opens on a condition: man kana yuridu al-'izzata, whoever wants honour. Just before it, 35:9 drives clouds to a dead land, revives the earth and closes with thus is the resurrection. At-Tabari explains why the honour clause belongs here. The verses before it rebuke and threaten the idolaters for worshipping idols, so this verse is best read as part of the same urging to leave that worship.",
            "bn": "আয়াতের শুরু একটা শর্ত দিয়ে: মান কানা ইউরীদুল ইযযাহ, যে সম্মান চায়। ঠিক আগের আয়াত ৩৫:৯ মেঘকে মৃত ভূমির দিকে নিয়ে যায়, মাটিকে আবার জীবিত করে, আর শেষ করে এই কথায়: এভাবেই পুনরুত্থান। সম্মানের কথাটা কেন এখানেই এল, তাবারী তার কারণ দেখান। আগের আয়াতগুলোতে আল্লাহ মুশরিকদের মূর্তিপূজার জন্য তিরস্কার করেছেন, ধমক দিয়েছেন, শাস্তির ভয় দেখিয়েছেন। তাই এ আয়াতকেও সেই ধারাতেই পড়া সংগত: ওই পূজা ছেড়ে দেওয়ার আহ্বান।"
          },
          {
            "en": "At-Tabari reports that the interpreters differed over the opening, and gives three readings. Mujahid: whoever wants honour by worshipping the gods, honour belongs to Allah entirely. Qatada: let him seek honour through obedience to Allah. Others, unnamed in his text: whoever wants to know whose honour is, every kind of it is Allah's. Al-Baghawi and al-Qurtubi give this third reading to the grammarian al-Farra'. At-Tabari's own choice: whoever wants honour, let him seek it through Allah, to whom it all belongs, and not through the gods and idols beneath Him.",
            "bn": "তাবারী জানান, শুরুর অংশের অর্থ নিয়ে মুফাসসিরদের মতভেদ আছে, এবং তিনি তিনটি ব্যাখ্যা তুলে ধরেন। মুজাহিদের মতে, যে দেব-দেবীর পূজা করে সম্মান পেতে চায়, সে জেনে রাখুক, সব সম্মান আল্লাহর। কাতাদার মতে, সে আল্লাহর আনুগত্যের মধ্য দিয়ে সম্মান খুঁজুক। আরেকদল, যাদের নাম তাবারী নেননি, বলেন: যে জানতে চায় সম্মান কার, তার জবাব হলো, সব রকমের সম্মানই আল্লাহর। বাগাভী ও কুরতুবী এই তৃতীয় ব্যাখ্যাকে ব্যাকরণবিদ ফাররার মত বলে উল্লেখ করেন। তাবারীর নিজের পছন্দ: সম্মান যে চায়, সে তা আল্লাহর কাছেই চাক, কারণ সবটুকুই তাঁর। তাঁর নিচের কোনো দেবতা বা মূর্তির কাছে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Honour Is Stored",
          "bn": "সম্মানের ভান্ডার কোথায়"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the clause as a promise. Whoever loves to be honoured in this world and the next should hold to obedience to Allah, and he will reach his aim, because Allah owns both worlds and all honour is His. He sets three verses beside it: 4:139, asking those who take disbelievers as allies instead of believers whether they seek honour with them; 10:65, telling the Prophet ﷺ not to grieve at their words, since all honour is Allah's; and 63:8, honour belongs to Allah, His Messenger and the believers.",
            "bn": "ইবন কাসীর কথাটিকে পড়েন একটি প্রতিশ্রুতি হিসেবে। দুনিয়া ও আখিরাতে যে সম্মানিত হতে ভালোবাসে, সে আল্লাহর আনুগত্য আঁকড়ে থাকুক, তাহলেই লক্ষ্যে পৌঁছবে। কারণ দুই জগতের মালিক আল্লাহ, আর সব সম্মান তাঁরই। পাশে তিনি তিনটি আয়াত রাখেন। ৪:১৩৯ আয়াত প্রশ্ন করে, যারা মুমিনদের বাদ দিয়ে কাফিরদের বন্ধু বানায়, তারা কি তাদের কাছে সম্মান খোঁজে? ১০:৬৫ আয়াত নবী ﷺ-কে বলে, ওদের কথায় দুঃখ পেয়ো না, সব সম্মান আল্লাহর। আর ৬৩:৮ আয়াত বলে, সম্মান আল্লাহর, তাঁর রসূলের ও মুমিনদের।"
          },
          {
            "en": "Al-Baghawi explains the turn of phrase with a common saying: whoever wants wealth, wealth belongs to so-and-so, meaning go and ask him for it. The disbelievers, he adds, worshipped idols seeking strength through them, as 19:81 says. Al-Qurtubi reads the article in al-'izzah two ways: as Allah's own honour, so the clause cuts off hope of sharing it, or as honour of every kind, so it shows the ambitious where honour is obtained. Whoever asks Allah for it truthfully, he says, with need and humility, finds it with Him.",
            "bn": "বাগাভী বাক্যের ধরনটা বোঝান একটা চলতি কথা দিয়ে। কেউ যদি বলে, যে সম্পদ চায়, সম্পদ তো অমুকের, তার মানে দাঁড়ায়: যাও, তার কাছে চাও। তিনি আরও বলেন, কাফিররা মূর্তিপূজা করত তাদের মাধ্যমে শক্তি পাওয়ার আশায়, যেমনটা ১৯:৮১ আয়াতে আছে। কুরতুবী আল-ইযযাহ শব্দের নির্দেশক অংশকে দুইভাবে পড়েন। এক, আল্লাহর নিজের সম্মান, যাতে অন্য কারও ভাগ বসানোর আশা নেই। দুই, সব ধরনের সম্মান, যাতে উচ্চাকাঙ্ক্ষী মানুষ জানে তা কোথায় মেলে। তাঁর কথায়, যে সত্যিকারভাবে, নিজের অভাব আর বিনয় নিয়ে আল্লাহর কাছে তা চায়, সে তাঁর কাছেই তা পায়।"
          },
          {
            "en": "Here al-Qurtubi quotes the Prophet ﷺ, without naming a source: whoever humbles himself for Allah, Allah raises him. Muslim records that meaning in his Sahih (Muslim 2588) from Abu Hurayrah (RA): the Messenger of Allah ﷺ said, charity does not lessen wealth, Allah increases a servant who pardons only in honour, and no one humbles himself for Allah except that Allah raises him. The Muyassar compresses the logic: whoever seeks honour through a created being, Allah humbles him, and whoever seeks it through the Creator, Allah honours him.",
            "bn": "এখানে কুরতুবী কোনো সূত্রের নাম না নিয়ে নবী ﷺ-এর কথা উদ্ধৃত করেন: যে আল্লাহর জন্য বিনয়ী হয়, আল্লাহ তাকে উঁচু করেন। এই অর্থের হাদীসটি মুসলিম তাঁর সহীহ গ্রন্থে (মুসলিম ২৫৮৮) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন। রসূলুল্লাহ ﷺ বলেছেন: সদকা সম্পদ কমায় না। ক্ষমা করার কারণে আল্লাহ বান্দার সম্মানই বাড়িয়ে দেন। আর যে কেউ আল্লাহর জন্য বিনয়ী হয়, আল্লাহ তাকে উঁচু করেন। মুয়াসসার পুরো যুক্তিটা এক বাক্যে বলে দেয়: যে সৃষ্টির মাধ্যমে সম্মান খোঁজে, আল্লাহ তাকে লাঞ্ছিত করেন। আর যে স্রষ্টার মাধ্যমে খোঁজে, আল্লাহ তাকে সম্মান দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Counts as Good Speech",
          "bn": "পবিত্র কথা কোনগুলো"
        },
        "p": [
          {
            "en": "Ilayhi yas'adu al-kalimu at-tayyib: to Him the good word ascends. The glosses overlap. Ibn Kathir: remembrance, recitation and supplication, which he says more than one of the early generations held. At-Tabari: the servant's remembrance of his Lord and his praise of Him. Al-Baghawi first names la ilaha illallah, then reports subhanallah, al-hamdu lillah, la ilaha illallah, Allahu akbar, and also the remembrance of Allah in general. Al-Qurtubi gives tawhid that comes from a sound belief, or praise and glorification of Allah.",
            "bn": "ইলাইহি ইয়াস'আদুল কালিমুত তাইয়িব: তাঁরই দিকে উঠে যায় পবিত্র কথা। পবিত্র কথার ব্যাখ্যাগুলো একটা আরেকটার কাছাকাছি। ইবন কাসীরের মতে এর মানে জিকির, তিলাওয়াত ও দোয়া, এবং তিনি জানান সালাফের একাধিক জন এ কথা বলেছেন। তাবারীর মতে, বান্দা তার রবকে যে স্মরণ করে আর তাঁর যে প্রশংসা করে, সেটাই। বাগাভী প্রথমে বলেন লা ইলাহা ইল্লাল্লাহ, তারপর আরেকটি মত আনেন: সুবহানাল্লাহ, আলহামদু লিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার। সাধারণভাবে আল্লাহর জিকিরের কথাও তিনি উল্লেখ করেন। কুরতুবীর মতে, খাঁটি বিশ্বাস থেকে বেরিয়ে আসা তাওহীদ, কিংবা আল্লাহর হামদ ও মহিমা বর্ণনা।"
          },
          {
            "en": "Two more glosses widen it. Al-Qurtubi reports from Shahr ibn Hawshab that the good word is the Qur'an. As-Sa'di lists recitation, tasbih, tahmid, tahlil and every fine, good word, which is raised to Allah and presented to Him, and Allah praises its speaker among the highest assembly. As for the ascent, al-Qurtubi notes that speech is not a body that moves upward. Its rising is a likeness for its acceptance, because the place of reward is above and the place of punishment below. Qatada, in al-Baghawi, says it plainly: Allah accepts the good word.",
            "bn": "আরও দুটি ব্যাখ্যা পরিসরটা বড় করে। কুরতুবী শাহর ইবন হাওশাব থেকে বর্ণনা করেন, পবিত্র কথা মানে কুরআন। সা'দী তালিকা দেন: তিলাওয়াত, তাসবীহ, তাহমীদ, তাহলীল এবং যে কোনো সুন্দর ও পবিত্র কথা। এগুলো আল্লাহর কাছে তুলে নেওয়া হয়, তাঁর সামনে পেশ করা হয়, আর ঊর্ধ্বজগতের সমাবেশে আল্লাহ বক্তার প্রশংসা করেন। ওঠার ব্যাপারটা নিয়ে কুরতুবী মনে করিয়ে দেন, কথা তো কোনো বস্তু নয় যে উপরে চলে যাবে। তার উঠে যাওয়া আসলে কবুল হওয়ার উপমা, কারণ প্রতিদানের জায়গা উপরে আর শাস্তির জায়গা নিচে। বাগাভীর বর্ণনায় কাতাদা সোজা কথায় বলেন: আল্লাহ পবিত্র কথা কবুল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Words Under a Wing",
          "bn": "ডানার নিচে পাঁচটি কথা"
        },
        "p": [
          {
            "en": "At-Tabari, Ibn Kathir and al-Baghawi each carry, with its chain, a report from 'Abdullah ibn Mas'ud (RA). When we tell you something, he said, we bring you its confirmation from the Book of Allah. When the Muslim servant says subhanallahi wa bihamdihi, al-hamdu lillah, la ilaha illallah, Allahu akbar, tabarakallah, an angel takes them under his wing and ascends with them to the heaven. He passes no gathering of angels but they ask forgiveness for the one who said them, until he brings them before the Most Merciful. Then Ibn Mas'ud recited this verse.",
            "bn": "তাবারী, ইবন কাসীর ও বাগাভী তিনজনই সনদসহ আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর একটি বর্ণনা এনেছেন। তিনি বলতেন, আমরা তোমাদের কোনো কথা বললে আল্লাহর কিতাব থেকে তার সমর্থনও দেখিয়ে দিই। মুসলিম বান্দা যখন বলে সুবহানাল্লাহি ওয়া বিহামদিহি, আলহামদু লিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার, তাবারাকাল্লাহ, তখন একজন ফেরেশতা কথাগুলো ডানার নিচে নিয়ে আসমানে উঠে যান। ফেরেশতাদের যে দলের পাশ দিয়েই যান, তারা বক্তার জন্য ক্ষমা চায়। শেষে তিনি কথাগুলো পরম দয়াময়ের সামনে পৌঁছে দেন। এরপর ইবন মাসউদ (রাঃ) এই আয়াত তিলাওয়াত করেন।"
          },
          {
            "en": "That report is the Companion's own statement, not words he attributes to the Prophet ﷺ. Ibn Kathir follows it with a saying of Ka'b al-Ahbar: subhanallah, al-hamdu lillah, la ilaha illallah and Allahu akbar hum around the Throne like bees, mentioning the one who said them, while the righteous deed is in the treasuries. Ibn Kathir calls the chain to Ka'b sound and says the saying has also been narrated from the Prophet ﷺ. He then cites a hadith of an-Nu'man ibn Bashir (RA) from Imam Ahmad, noting that Ibn Majah records it too.",
            "bn": "মনে রাখা দরকার, এটি সাহাবীর নিজের বক্তব্য। তিনি একে নবী ﷺ-এর কথা বলে উল্লেখ করেননি। এরপর ইবন কাসীর কা'ব আল-আহবারের একটি উক্তি আনেন: সুবহানাল্লাহ, আলহামদু লিল্লাহ, লা ইলাহা ইল্লাল্লাহ ও আল্লাহু আকবার আরশের চারপাশে মৌমাছির মতো গুঞ্জন করে, নিজেদের বক্তার কথা বলে। আর নেক আমল থাকে ভান্ডারে। ইবন কাসীর বলেন, কা'ব পর্যন্ত সনদটি সহীহ, আর কথাটি নবী ﷺ থেকেও বর্ণিত হয়েছে। তারপর তিনি ইমাম আহমাদ থেকে নু'মান ইবন বাশীর (রাঃ)-এর একটি হাদীস আনেন এবং জানান, ইবন মাজাহও এটি বর্ণনা করেছেন।"
          },
          {
            "en": "Ibn Majah's wording (Ibn Majah 3809), from an-Nu'man ibn Bashir (RA): the Messenger of Allah ﷺ said, among what you mention of the majesty of Allah are tasbih, tahlil and tahmid; they turn about the Throne with a hum like the hum of bees, reminding of the one who said them. Would one of you not love to have, or to go on having, something that reminds of him? Ibn Majah attaches no grading of his own, and his chain shows a doubt over whether 'Awn heard it from his father or his brother.",
            "bn": "ইবন মাজাহর ভাষ্য (ইবন মাজাহ ৩৮০৯), নু'মান ইবন বাশীর (রাঃ) থেকে: রসূলুল্লাহ ﷺ বলেছেন, তোমরা আল্লাহর মহিমার যে স্মরণ করো, তার মধ্যে আছে তাসবীহ, তাহলীল ও তাহমীদ। এগুলো আরশের চারপাশে ঘুরতে থাকে, মৌমাছির গুঞ্জনের মতো আওয়াজ তোলে, আর বক্তার কথা স্মরণ করিয়ে দেয়। তোমাদের কেউ কি চায় না যে তার এমন কিছু থাকুক, কিংবা সব সময় থেকে যাক, যা তার কথা স্মরণ করিয়ে দেবে? ইবন মাজাহ নিজে এর কোনো মান নির্ধারণ করেননি। তাঁর সনদেও একটা সংশয় দেখা যায়: আওন হাদীসটি তাঁর বাবার কাছ থেকে শুনেছেন, নাকি ভাইয়ের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Lifts Whom",
          "bn": "কে কাকে তুলে ধরে"
        },
        "p": [
          {
            "en": "Wal-'amalu as-salihu yarfa'uh: and the righteous deed raises it. Who raises whom is a genuine dispute. On the first reading the deed raises the good word. Ibn Kathir reports it from Ibn 'Abbas (RA) through 'Ali ibn Abi Talha, and from Mujahid, Abu al-'Aliyah, 'Ikrimah, Ibrahim an-Nakha'i, ad-Dahhak, as-Suddi and others; al-Baghawi adds Sa'id ibn Jubayr and al-Hasan and calls it the view of most commentators. At-Tabari reads it so in his own voice: the servant's obedience and fulfilled obligations raise his remembrance. Al-Hasan and Qatada state it as a rule: Allah accepts no word without a deed.",
            "bn": "ওয়াল আমালুস সালিহু ইয়ারফাউহ: আর নেক আমল তাকে উপরে তোলে। কে কাকে তোলে, এ নিয়ে সত্যিকারের মতভেদ আছে। প্রথম মতে আমলই পবিত্র কথাকে উপরে তোলে। ইবন কাসীর এ মত বর্ণনা করেন আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে, এবং মুজাহিদ, আবুল আলিয়া, ইকরিমা, ইবরাহীম নাখঈ, দাহহাক, সুদ্দী প্রমুখ থেকে। বাগাভী এদের সাথে সাঈদ ইবন জুবাইর ও হাসানের নাম যোগ করেন এবং বলেন, অধিকাংশ মুফাসসিরের মত এটাই। তাবারী নিজের ভাষাতেই এভাবে পড়েন: বান্দার আনুগত্য আর ফরজ আদায় তার জিকিরকে উপরে তোলে। হাসান ও কাতাদা একে নিয়মের আকারে বলেন: আমল ছাড়া আল্লাহ কোনো কথা কবুল করেন না।"
          },
          {
            "en": "The second reading reverses the pronoun: the good word raises the righteous deed, so no deed is accepted unless it issues from tawhid. Al-Baghawi gives this sense to al-Kalbi and Muqatil. Al-Qurtubi reports from Shahr ibn Hawshab that the good word is the Qur'an and the Qur'an raises the deed, though Ibn Kathir lists Shahr under the first reading. Ma'arif al-Qur'an records it as well: the remembrance of Allah adorns a deed and makes it acceptable. The third reading makes Allah the subject: the righteous deed, Allah raises it.",
            "bn": "দ্বিতীয় মতে সর্বনামের দিক উল্টে যায়: পবিত্র কথাই নেক আমলকে উপরে তোলে। তাই তাওহীদ থেকে না এলে কোনো আমল কবুল হয় না। বাগাভী এ অর্থ কালবী ও মুকাতিলের বলে উল্লেখ করেন। কুরতুবী শাহর ইবন হাওশাব থেকে বর্ণনা করেন, পবিত্র কথা হলো কুরআন, আর কুরআনই আমলকে উপরে তোলে। অথচ ইবন কাসীর শাহরকে প্রথম মতের লোকদের মধ্যে গুনেছেন। মাআরিফুল কুরআনও এ মত উল্লেখ করে: আল্লাহর জিকির আমলকে সুশোভিত করে আর কবুলের যোগ্য বানায়। তৃতীয় মতে কর্তা স্বয়ং আল্লাহ: নেক আমলকে আল্লাহ উপরে তোলেন।"
          },
          {
            "en": "Al-Baghawi reports the third reading with qila, it is said. Al-Qurtubi calls it the literal sense, since it is Allah who raises and lowers, and the other two permissible figures of speech. As-Sa'di opens with it, Allah raising the deed as the good word rises, and gives the first after it. Against these, al-Qurtubi quotes an-Nahhas judging the first soundest, for the standing of its holders and for grammar: had Allah or the word been the subject, al-'amal would be preferred in the accusative, and the readers recite it nominative. This article picks none.",
            "bn": "বাগাভী তৃতীয় মতটি আনেন 'কীলা', অর্থাৎ 'বলা হয়' দিয়ে। কুরতুবী একে আক্ষরিক অর্থ বলেন, কারণ আল্লাহই উঁচু করেন ও নিচু করেন। বাকি দুটি মত তাঁর মতে রূপক, তবে বৈধ। সা'দী শুরুই করেন এ মত দিয়ে: পবিত্র কথা যেমন ওঠে, আল্লাহ তেমনি আমলকেও নিজের দিকে তুলে নেন। প্রথম মতটি তিনি আনেন পরে। অন্যদিকে কুরতুবী নাহহাসের মত উদ্ধৃত করেন, প্রথম মতটিই সবচেয়ে শুদ্ধ। কারণ যাঁরা এ মত দিয়েছেন তাঁদের মর্যাদা উঁচু, আর আরবি ব্যাকরণও তার পক্ষে। কর্তা আল্লাহ বা পবিত্র কথা হলে আল-আমাল শব্দের শেষে যবর দিয়ে পড়াই উত্তম হতো, অথচ কারীরা পড়েন পেশ দিয়ে। এ লেখা কোনো মতকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Without Deeds",
          "bn": "আমলহীন মুখের কথা"
        },
        "p": [
          {
            "en": "The first reading raises a hard case: the person who speaks good words but neglects the obligations. Ibn 'Abbas, in at-Tabari's and Ibn Kathir's report, says his word is turned back onto his deed, which has the better claim on him. Al-Qurtubi quotes Ibn 'Atiyyah rejecting this as contrary to the belief of Ahl as-Sunnah and not sound from Ibn 'Abbas. The disobedient person who neglects obligations, when he remembers Allah, has it written and accepted, with his good deeds for him and his bad deeds against him; and the good word is itself a righteous deed.",
            "bn": "প্রথম মতটি একটা কঠিন প্রশ্ন সামনে আনে: যে ভালো কথা বলে অথচ ফরজ আদায় করে না, তার কী হবে? তাবারী ও ইবন কাসীরের বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, তার কথা তার আমলের উপরেই ফিরিয়ে দেওয়া হয়, কারণ আমলেরই তার উপর বেশি দাবি। কুরতুবী ইবন আতিয়্যার আপত্তি উদ্ধৃত করেন: এ কথা আহলুস সুন্নাহর আকীদার পরিপন্থী, আর ইবন আব্বাস (রাঃ) থেকে এর বর্ণনা সহীহ নয়। ফরজ ছেড়ে দেওয়া গুনাহগার মানুষও যখন আল্লাহর জিকির করে, তা তার জন্য লেখা হয়, কবুলও হয়। নেকি তার পক্ষে যায়, গুনাহ তার বিপক্ষে। আর পবিত্র কথা নিজেই তো একটা নেক আমল।"
          },
          {
            "en": "Ibn al-'Arabi, also in al-Qurtubi, splits the case. Where the deed is a condition of accepting the word, there is no acceptance without it; where it is not, the word is written for him, the bad deed against him, the two are weighed and Allah judges. Al-Qurtubi calls this careful, yet holds that the apparent sense makes the righteous deed a condition. Ma'arif al-Qur'an says no word is accepted without faith in the heart, but a believer who falls short does not lose his remembrance entirely. Both positions stand in the sources.",
            "bn": "কুরতুবীর বর্ণনায় ইবনুল আরাবী বিষয়টাকে দুই ভাগে ভাগ করেন। যেখানে আমল কথা কবুলের শর্ত, সেখানে আমল ছাড়া কবুল নেই। যেখানে শর্ত নয়, সেখানে কথাটা তার পক্ষে লেখা হয়, মন্দ আমল লেখা হয় বিপক্ষে, তারপর দুটো ওজন করা হয় আর আল্লাহ ফয়সালা করেন। কুরতুবী একে সূক্ষ্ম বিশ্লেষণ বলেন, তবু তাঁর মতে আয়াতের বাহ্যিক অর্থ হলো, নেক আমল পবিত্র কথা কবুলের শর্ত। মাআরিফুল কুরআন বলে, অন্তরে ঈমান না থাকলে কোনো কথাই কবুল হয় না, তবে যে মুমিন আমলে পিছিয়ে, তার জিকির একেবারে বৃথা যায় না। দুটো অবস্থানই সূত্রগুলোতে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Plot Evil",
          "bn": "যারা মন্দের চক্রান্ত করে"
        },
        "p": [
          {
            "en": "Wa-lladhina yamkuruna as-sayyi'at: and those who plot evil deeds. At-Tabari glosses the verb as earning. On who they are, the reports divide. Mujahid, Sa'id ibn Jubayr and Shahr ibn Hawshab, in Ibn Kathir, say they are those who show off with their deeds, deceiving people into thinking they obey Allah. Qatada, in at-Tabari, says the people of shirk, and Ibn Kathir gives the same to 'Abd ar-Rahman ibn Zayd. Abu al-'Aliyah, in al-Baghawi and al-Qurtubi, names those who plotted against the Prophet ﷺ in Dar an-Nadwah, citing 8:30.",
            "bn": "ওয়াল্লাযীনা ইয়ামকুরূনাস সাইয়িআত: আর যারা মন্দ কাজের চক্রান্ত করে। তাবারী ক্রিয়াটির অর্থ করেন অর্জন করা। এরা কারা, তা নিয়ে বর্ণনা ভিন্ন ভিন্ন। ইবন কাসীরের বর্ণনায় মুজাহিদ, সাঈদ ইবন জুবাইর ও শাহর ইবন হাওশাব বলেন, এরা আমল দেখিয়ে বেড়ানো লোক, যারা মানুষকে ধোঁকা দেয় যেন তারা আল্লাহর আনুগত্যে আছে। তাবারীর বর্ণনায় কাতাদা বলেন, এরা মুশরিক। ইবন কাসীর একই মত আবদুর রহমান ইবন যায়দের বলে উল্লেখ করেন। বাগাভী ও কুরতুবীর বর্ণনায় আবুল আলিয়া বলেন, এরা সেই লোকেরা যারা দারুন নাদওয়ায় বসে নবী ﷺ-এর বিরুদ্ধে চক্রান্ত করেছিল। প্রমাণ হিসেবে তিনি ৮:৩০ আয়াত আনেন।"
          },
          {
            "en": "Al-Kalbi, in al-Baghawi, says those who do evil deeds, and Muqatil says shirk. Ibn Kathir concludes the verse is general, with the idolaters included first of all. This needs saying plainly. The verse describes what it describes: the schemers of its own time and a kind of conduct. It licenses nothing against any living person or community, and gives no reader the right to brand anyone a show-off or a plotter. Its warning faces whoever reads it.",
            "bn": "বাগাভীর বর্ণনায় কালবী বলেন, এরা মন্দ কাজ করে এমন লোক। মুকাতিল বলেন, এখানে শিরকের কথা বলা হয়েছে। ইবন কাসীর সিদ্ধান্ত দেন, আয়াতটি ব্যাপক, আর মুশরিকরা এর মধ্যে সবার আগে পড়ে। কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, ঠিক ততটুকুই করে: নিজের যুগের চক্রান্তকারীদের কথা, আর এক ধরনের আচরণের কথা। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কাউকে লোক দেখানো বা চক্রান্তকারী বলে দাগিয়ে দেওয়ার অধিকারও কোনো পাঠককে দেয় না। এর সতর্কবাণী প্রথমে পাঠকের নিজের দিকেই ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Plot That Goes Dead",
          "bn": "যে চক্রান্ত নিষ্ফল হয়"
        },
        "p": [
          {
            "en": "Wa makru ula'ika huwa yabur: and the plotting of those, it perishes. Al-Qurtubi gives the root: bara yaburu, to perish and become void, as a market that goes slack is said to have barat. Qatada, in at-Tabari, says it spoils. At-Tabari: their work perishes and goes, because it was not for Allah and so did not benefit its doer. Ibn Zayd: it did not profit them, and it harmed them. Al-Baghawi places the ruin in the Hereafter. Ibn Kathir says it is exposed soon to people of insight.",
            "bn": "ওয়া মাকরু উলাইকা হুয়া ইয়াবূর: আর ওদের চক্রান্ত, তা-ই ধ্বংস হয়। কুরতুবী শব্দমূল ব্যাখ্যা করেন: বারা ইয়াবূরু মানে ধ্বংস হওয়া, বাতিল হয়ে যাওয়া। বাজার মন্দা হলে আরবরা বলে, বাজার 'বারাত'। তাবারীর বর্ণনায় কাতাদা বলেন, এর মানে নষ্ট হয়ে যায়। তাবারী বলেন, তাদের আমল ধ্বংস হয়ে মিলিয়ে যায়, কারণ তা আল্লাহর জন্য ছিল না, তাই কর্তার কোনো কাজে আসেনি। ইবন যায়দ বলেন, তা তাদের কোনো উপকার করেনি, বরং ক্ষতি করেছে। বাগাভী এই ধ্বংসকে আখিরাতের সাথে যুক্ত করেন। ইবন কাসীর বলেন, দূরদৃষ্টিসম্পন্ন মানুষের কাছে তা শিগগিরই ধরা পড়ে যায়।"
          },
          {
            "en": "Ibn Kathir explains why: no servant hides a secret but Allah shows it on his face and in slips of his tongue, and the show-off deceives no one for long except the dull. As-Sa'di draws the two halves together. Good words and deeds rise to Allah, and He raises and honours their doer. Evil deeds work the opposite way: their doer wants to rise by them, plots and schemes, and it comes back on him, so he gains only lowering. His plot perishes, being falsehood plotted for falsehood.",
            "bn": "কারণটাও ইবন কাসীর বলে দেন: বান্দা যে গোপন কথাই লুকায়, আল্লাহ তা তার চেহারায় আর বেফাঁস কথায় প্রকাশ করে দেন। লোক দেখানো মানুষ বোকা ছাড়া কাউকে বেশি দিন ধোঁকা দিতে পারে না। সা'দী আয়াতের দুই অংশ মিলিয়ে দেখান। পবিত্র কথা আর নেক আমল আল্লাহর দিকে ওঠে, আর আল্লাহ তার কর্তাকে উঁচু করেন, সম্মান দেন। মন্দ কাজ চলে উল্টো পথে। কর্তা তা দিয়ে উঁচু হতে চায়, চক্রান্ত করে, ফন্দি আঁটে, শেষে সবই তার উপর ফিরে আসে। তাতে তার কেবল অপমানই বাড়ে। তার চক্রান্ত ধ্বংস হয়, কারণ তা বাতিলের পক্ষে বাতিল দিয়ে করা চক্রান্ত।"
          },
          {
            "en": "35:11 follows at once: Allah created you from dust, then from a drop. The surah opened at 35:1 with praise of the Originator, who made the angels messengers with wings. 35:15 calls all people the ones in need of Allah, the Free of need; 35:18 says no soul bears another's burden; and 35:28 says that of His servants only those who know truly fear Him. Each has its own article. This article ends where the verse does: honour is sought from its Owner.",
            "bn": "ঠিক পরে ৩৫:১১ আয়াত বলে, আল্লাহ তোমাদের সৃষ্টি করেছেন মাটি থেকে, তারপর শুক্রবিন্দু থেকে। সূরার শুরুতে ৩৫:১ আয়াতে স্রষ্টার প্রশংসা, যিনি ডানাওয়ালা ফেরেশতাদের দূত বানিয়েছেন। ৩৫:১৫ আয়াত বলে, সব মানুষ আল্লাহর মুখাপেক্ষী, আর তিনি অভাবমুক্ত। ৩৫:১৮ আয়াত বলে, কেউ কারও বোঝা বইবে না। ৩৫:২৮ আয়াত বলে, বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে সত্যিকারভাবে ভয় করে। প্রত্যেকটির আলাদা লেখা আছে। এ লেখা শেষ হয় আয়াতের সাথেই: সম্মান চাইতে হয় তার মালিকের কাছে।"
          }
        ]
      }
    ]
  },
  "35:15": {
    "sections": [
      {
        "h": {
          "en": "Addressed to Everyone Alive",
          "bn": "জীবিত প্রত্যেকের উদ্দেশে"
        },
        "p": [
          {
            "en": "The verse opens with ya ayyuha an-nas, O mankind, and as-Sa'di reads the address at its full width: Allah speaks to all people and tells them of their condition and their description. No group is set apart, believers or others. The verse also comes straight after two that describe those invoked besides Allah: they do not own even the thin skin of a date stone (35:13), and if called they do not hear, and if they heard they would not answer (35:14).",
            "bn": "আয়াতের শুরু ইয়া আইয়ুহান নাস, হে মানুষ। সা'দী এই ডাককে পুরো বিস্তারে পড়েন: আল্লাহ এখানে সব মানুষকে সম্বোধন করছেন, আর তাদের জানিয়ে দিচ্ছেন তাদের আসল অবস্থা ও পরিচয়। মুমিন হোক বা অন্য কেউ, কাউকে আলাদা করে রাখা হয়নি। আয়াতটি এসেছে এমন দুটি আয়াতের ঠিক পরে, যেগুলো আল্লাহ ছাড়া অন্য যাদের ডাকা হয় তাদের কথা বলে। খেজুরের আঁটির পাতলা আবরণটুকুরও তারা মালিক নয় (৩৫:১৩)। ডাকলে তারা শোনে না, আর শুনলেও সাড়া দিতে পারে না (৩৫:১৪)।"
          },
          {
            "en": "Against that backdrop the verse turns to the one doing the calling. The invoked ones were shown to be powerless; now the caller is told that he, too, is needy, and needy of one address only. In ten Arabic words the verse states two facts, one about the listener and one about Allah, and leaves no third party standing between them. Everything the commentators say unfolds those two facts: what it means to be faqir, and what it means that the One you need is Ghani and Hamid.",
            "bn": "এই পটভূমিতে আয়াতটি এবার ফেরে যে ডাকছে তার দিকে। যাদের ডাকা হয়, তাদের অক্ষমতা আগেই দেখানো হয়েছে। এখন যারা ডাকে, তাদের বলা হচ্ছে: তোমরাও অভাবী, আর তোমাদের অভাব মেটানোর ঠিকানা একটাই। মাত্র দশটি আরবি শব্দে আয়াতটি দুটি সত্য জানায়। একটি শ্রোতার সম্পর্কে, অন্যটি আল্লাহর সম্পর্কে। এ দুয়ের মাঝখানে তৃতীয় কারও দাঁড়ানোর জায়গা রাখে না। তাফসীরকারেরা যা বলেছেন, সবই এই দুই সত্যের ব্যাখ্যা: ফকীর হওয়ার মানে কী, আর যাঁর কাছে আপনার প্রয়োজন, তিনি গানী ও হামীদ হওয়ার মানে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Merely Some of the Poor",
          "bn": "কিছু অভাবীর একজন নয়"
        },
        "p": [
          {
            "en": "Antumu al-fuqara'u ila Allah: you are the poor towards Allah. Al-Qurtubi quotes al-Zamakhshari, who asks why al-fuqara' carries the definite article. His answer: it shows people that, because their need of Him is so intense, they are the very kind called poor, even though every creature, human or not, needs Him. Had the word been indefinite, he says, the sense would only have been that you are some among the poor. The article does not narrow the circle; it deepens the description.",
            "bn": "আনতুমুল ফুকারাউ ইলাল্লাহ: তোমরাই আল্লাহর প্রতি অভাবী। কুরতুবী এখানে যামাখশারীর একটি প্রশ্ন উদ্ধৃত করেন: ফুকারা শব্দে নির্দিষ্টবাচক আল কেন? যামাখশারীর জবাব, আল্লাহর প্রতি মানুষের অভাব এত তীব্র যে তারাই যেন অভাবী জাতটার আসল নমুনা। অথচ মানুষ হোক বা অন্য কিছু, সব সৃষ্টিই তাঁর মুখাপেক্ষী। তিনি বলেন, শব্দটা অনির্দিষ্ট থাকলে অর্থ দাঁড়াত কেবল এটুকু: তোমরা অভাবীদের কয়েকজন। তাই এই আল গণ্ডিকে ছোট করে না, বর্ণনাটাকে গভীর করে।"
          },
          {
            "en": "Why single out human beings when everything needs Him? Al-Zamakhshari's reason is that poverty follows weakness, and the weaker the needy one, the poorer he is. Allah has testified to human weakness, he adds, and he cites two verses: wa khuliqa al-insanu da'ifa, man was created weak (4:28), and Allah is the One who created you from weakness (30:54). That second verse goes on to trace a life from weakness to strength, and then back to weakness and grey hair.",
            "bn": "সবকিছুই যখন তাঁর মুখাপেক্ষী, তখন আলাদা করে মানুষের কথা কেন? যামাখশারীর যুক্তি হলো, অভাব আসে দুর্বলতার পিছু পিছু। যে যত দুর্বল, সে তত বেশি অভাবী। আর মানুষের দুর্বলতার সাক্ষ্য আল্লাহ নিজেই দিয়েছেন। এখানে তিনি দুটি আয়াত আনেন। একটি ওয়া খুলিকাল ইনসানু দাঈফা, মানুষকে সৃষ্টি করা হয়েছে দুর্বল করে (৪:২৮)। অন্যটি, আল্লাহ তিনিই, যিনি তোমাদের সৃষ্টি করেছেন দুর্বলতা থেকে (৩০:৫৪)। ওই আয়াত এরপর গোটা জীবনের ছবি আঁকে: দুর্বলতা থেকে শক্তি, তারপর আবার দুর্বলতা আর বার্ধক্য।"
          },
          {
            "en": "Al-Baghawi is brief. He glosses ila Allah as towards the bounty of Allah, and defines the faqir simply as al-muhtaj, the one in need. Al-Qurtubi's own gloss is close: those in need of Him for your continued existence and in all your states. On these readings the word reaches well beyond empty pockets. What a person lacks is the ability to go on existing, and to manage any of his states, without Him, whatever he happens to own.",
            "bn": "বাগাভী অল্প কথায় সারেন। তাঁর মতে ইলাল্লাহ মানে আল্লাহর অনুগ্রহের দিকে, আর ফকীর মানে কেবল মুহতাজ, অর্থাৎ যার প্রয়োজন আছে। কুরতুবীর নিজের ব্যাখ্যাও কাছাকাছি: তোমাদের টিকে থাকায় আর তোমাদের সব অবস্থায় তোমরা তাঁর মুখাপেক্ষী। এই ব্যাখ্যাগুলোতে শব্দটি খালি পকেটের অনেক বাইরে চলে যায়। মানুষের হাতে যা-ই থাকুক, তাঁকে ছাড়া টিকে থাকার ক্ষমতা তার নেই। নিজের কোনো একটা অবস্থাও সে নিজে সামলাতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "In Every Movement and Stillness",
          "bn": "প্রতিটি নড়াচড়া ও স্থিরতায়"
        },
        "p": [
          {
            "en": "Ibn Kathir begins with the frame of the whole verse: Allah tells of His being free of need of everything besides Him, and of the need of all creatures for Him and their humility before Him. On the phrase itself he says they need Him in every movement and every stillness, while He is free of need of them in His very essence. The Muyassar puts the same thing in terms of time: you need Allah in everything, and cannot do without Him for the blink of an eye.",
            "bn": "ইবন কাসীর শুরু করেন গোটা আয়াতের কাঠামো দিয়ে। আল্লাহ জানাচ্ছেন, তিনি নিজে আর সবকিছু থেকে অমুখাপেক্ষী, আর সব সৃষ্টি তাঁর মুখাপেক্ষী, তাঁর সামনে বিনীত। মূল বাক্যটির ব্যাখ্যায় তিনি বলেন, প্রতিটি নড়াচড়ায় আর প্রতিটি স্থির থাকায় তারা তাঁর মুখাপেক্ষী। অথচ তিনি সত্তাগতভাবেই তাদের থেকে অমুখাপেক্ষী। মুয়াসসার একই কথা বলে সময়ের হিসাবে: সবকিছুতে তোমরা আল্লাহর মুখাপেক্ষী। চোখের এক পলকের জন্যও তাঁকে ছাড়া তোমাদের চলে না।"
          },
          {
            "en": "At-Tabari turns the description into a summons. You are people of need and poverty towards your Lord, he paraphrases, so worship Him, and hasten towards what pleases Him; He will enrich you out of your poverty, and your needs will be met with Him. In his reading the verse is more than a statement of fact. Need is named so that it can be carried to the right door, and the first half of the verse holds an instruction folded inside a description.",
            "bn": "তাবারী বর্ণনাটিকে বানিয়ে দেন একটি ডাক। তাঁর ভাষ্যে কথাটা এমন: তোমরা তোমাদের রবের প্রতি অভাব ও প্রয়োজনের মানুষ। তাই তাঁরই ইবাদত করো, তাঁর সন্তুষ্টির দিকে ছুটে যাও। তিনি তোমাদের অভাব দূর করে দেবেন, তাঁর কাছেই তোমাদের প্রয়োজন পূরণ হবে। তাবারীর পাঠে আয়াতটি শুধু একটা তথ্য জানায় না। অভাবের নাম নেওয়া হয়েছে, যাতে মানুষ তা নিয়ে ঠিক দরজায় যায়। আয়াতের প্রথম অর্ধেকে তাই বর্ণনার ভেতরেই ভাঁজ করা আছে একটি নির্দেশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Need Counted Item by Item",
          "bn": "এক এক করে অভাবের হিসাব"
        },
        "p": [
          {
            "en": "As-Sa'di gives the fullest account. People are poor towards Allah in every respect, he writes, and he names the respects in turn. They are poor in being brought into existence, for without His bringing them into being they would not exist. They are poor in being equipped with faculties, organs and limbs, without which they would be ready for no work at all. They are poor in being supplied with food, provision and blessings outward and inward, none of which would reach them but for His favour, kindness and easing of affairs.",
            "bn": "সবচেয়ে বিস্তারিত হিসাব দেন সা'দী। তিনি লেখেন, মানুষ সব দিক থেকেই আল্লাহর প্রতি অভাবী, তারপর এক এক করে দিকগুলো গোনান। অস্তিত্বে আসার জন্য তারা তাঁর মুখাপেক্ষী; তিনি অস্তিত্ব না দিলে তারা থাকতই না। শক্তি, অঙ্গপ্রত্যঙ্গ আর হাত-পা দিয়ে সাজিয়ে দেওয়ার জন্য তারা তাঁর মুখাপেক্ষী; সেগুলো ছাড়া কোনো কাজের জন্যই তারা তৈরি হতো না। খাবার, রিযিক আর প্রকাশ্য ও গোপন নিয়ামতের জোগানের জন্যও তারা তাঁর মুখাপেক্ষী। তাঁর অনুগ্রহ, দয়া আর কাজ সহজ করে দেওয়া না থাকলে এর কিছুই তাদের কাছে পৌঁছাত না।"
          },
          {
            "en": "They are poor, he continues, in having harms turned away, hardships pushed back and distress lifted; without that, hardship would simply go on. They are poor towards Him in their nurture, in every kind of upbringing and ordering of their affairs. And they are poor towards Him in their devotion to Him as God, their love of Him, their worship and their sincerity in it. Had He not granted them success in that, they would perish, and their souls, hearts and states would be ruined.",
            "bn": "তিনি আরও বলেন, বিপদ সরিয়ে দেওয়া, কষ্ট ঠেকিয়ে রাখা আর দুশ্চিন্তা দূর করার জন্যও তারা তাঁর মুখাপেক্ষী। তিনি তা না করলে কষ্ট লেগেই থাকত। লালন-পালনে, নানা রকম যত্ন আর কাজের ব্যবস্থাপনায় তারা তাঁর মুখাপেক্ষী। তাঁকে ইলাহ হিসেবে মানা, তাঁকে ভালোবাসা, তাঁর ইবাদত করা আর সেই ইবাদতে ইখলাস রাখার বেলাতেও তারা তাঁর মুখাপেক্ষী। এর তাওফীক তিনি না দিলে তারা ধ্বংস হয়ে যেত। তাদের রুহ, অন্তর আর জীবনের হাল সব নষ্ট হয়ে যেত।"
          },
          {
            "en": "The last item is knowledge: they are poor towards Him in being taught what they do not know and in acting on what sets them right. Without His teaching they would not learn, and without His granting success they would not become sound. Then as-Sa'di gathers the list into a single claim. They are poor towards Him in their very essence, in every sense and from every angle, whether or not they feel some kinds of that poverty. Need, on this account, does not wait to be felt.",
            "bn": "শেষ দিকটি জ্ঞানের। যা তারা জানে না তা শেখার জন্য, আর যা তাদের ভালো করে সে অনুযায়ী আমল করার জন্য তারা তাঁর মুখাপেক্ষী। তিনি না শেখালে তারা শিখত না, তিনি তাওফীক না দিলে তারা শুধরাত না। এরপর সা'দী গোটা তালিকাকে এক কথায় বেঁধে দেন: মানুষ সত্তাগতভাবেই তাঁর মুখাপেক্ষী, সব অর্থে আর সব বিবেচনায়। এই অভাবের কোনো কোনো রূপ তারা টের পাক বা না পাক, তাতে কিছু বদলায় না। অভাব তাই অনুভূত হওয়ার অপেক্ষায় বসে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping One's Need in Sight",
          "bn": "নিজের অভাব চোখে রাখা"
        },
        "p": [
          {
            "en": "Here as-Sa'di draws the distinction that turns the verse into a way of living. Everyone is needy, but the one granted success, al-muwaffaq, is the one who keeps witnessing his own poverty in every state of his religion and his worldly life. He humbles himself before Allah, asks Him not to leave him to himself for the blink of an eye, and asks for help in all his affairs, carrying this awareness with him at every moment.",
            "bn": "এখানে সা'দী এমন একটি পার্থক্য দেখান, যা আয়াতটিকে জীবনযাপনের পথ বানিয়ে দেয়। অভাবী তো সবাই। কিন্তু যাকে তাওফীক দেওয়া হয়েছে, সেই মুওয়াফফাক হলো ওই ব্যক্তি, যে দীন ও দুনিয়ার প্রতিটি অবস্থায় নিজের অভাব চোখের সামনে দেখতে থাকে। সে আল্লাহর সামনে নিজেকে ছোট করে, কাকুতি জানায়। চোখের এক পলকের জন্যও যেন তাকে নিজের হাতে ছেড়ে দেওয়া না হয়, এই দুআ করে। সব কাজে তাঁর সাহায্য চায়, আর এই বোধ প্রতিটি মুহূর্তে সঙ্গে রাখে।"
          },
          {
            "en": "Such a person, as-Sa'di says, is the more deserving of complete help from his Lord and God, who is more merciful to him than a mother to her child. Reading the verse makes no one needier; the need was already total. What changes is whether it is seen. With as-Sa'di, the honest admission of dependence is not a weakness to hide but the very posture in which full help is most fitting.",
            "bn": "সা'দী বলেন, এমন মানুষই তার রব ও ইলাহর কাছ থেকে পূর্ণ সাহায্যের বেশি উপযুক্ত। আর সেই রব তার প্রতি সন্তানের প্রতি মায়ের চেয়েও বেশি দয়ালু। আয়াত পড়লে কেউ নতুন করে বেশি অভাবী হয়ে যায় না, অভাব তো আগে থেকেই পুরোপুরি ছিল। বদলায় শুধু এটুকু: সেই অভাব চোখে পড়ে কি না। সা'দীর চোখে নিজের নির্ভরতা খোলাখুলি মেনে নেওয়া লুকানোর মতো দুর্বলতা নয়। বরং ঠিক এই অবস্থাতেই পূর্ণ সাহায্য সবচেয়ে মানানসই।"
          }
        ]
      },
      {
        "h": {
          "en": "Free of Every Need",
          "bn": "সকল প্রয়োজনের ঊর্ধ্বে"
        },
        "p": [
          {
            "en": "Wallahu huwa al-ghaniyy: and Allah, He is the Free of need. At-Tabari spells out what He is free of: your worship of Him and your service, and every other thing, whether from you or from anyone else. Ibn Kathir reads the phrase as a statement of uniqueness: He alone is singular in being free of need, with no partner in it. Al-Baghawi says He is free of need of His creation.",
            "bn": "ওয়াল্লাহু হুওয়াল গানিয়্য: আর আল্লাহ, তিনিই অমুখাপেক্ষী। তিনি কিসের মুখাপেক্ষী নন, তাবারী তা খুলে বলেন: তোমাদের ইবাদত আর সেবার, এবং তোমাদের বা অন্য কারও কাছ থেকে আসা অন্য যেকোনো কিছুর। ইবন কাসীর বাক্যটিকে পড়েন একচ্ছত্রতার ঘোষণা হিসেবে: অমুখাপেক্ষিতায় তিনি একা, এতে তাঁর কোনো শরীক নেই। বাগাভী বলেন, তিনি তাঁর সৃষ্টির মুখাপেক্ষী নন।"
          },
          {
            "en": "As-Sa'di defines al-Ghaniyy as the One who has complete richness from every aspect. He does not need what His creation needs, and lacks nothing that creatures lack, because His attributes are perfect, all of them attributes of perfection and qualities of majesty. Then he adds a line that changes the angle: part of His richness is that He made creation rich, in this world and the next. On this reading His freedom from need is also the source of whatever richness anyone else has.",
            "bn": "সা'দী আল-গানিয়্যের সংজ্ঞা দেন এভাবে: যাঁর আছে সব দিক থেকে পূর্ণ অমুখাপেক্ষিতা। সৃষ্টির যা লাগে, তাঁর তা লাগে না। সৃষ্টি যার অভাবে ভোগে, তিনি তার কোনো কিছুর অভাবী নন। কারণ তাঁর গুণাবলি পূর্ণ, সবই পূর্ণতা ও মহিমার গুণ। তারপর সা'দী এমন একটা কথা যোগ করেন, যা দৃষ্টিকোণটাই বদলে দেয়: তাঁর অমুখাপেক্ষিতারই একটা দিক হলো, তিনি দুনিয়া ও আখিরাতে সৃষ্টিকে সচ্ছল করেছেন। এই পাঠে তাঁর অভাবহীনতাই অন্য সবার যা কিছু সচ্ছলতা, তার উৎস।"
          },
          {
            "en": "Al-Qurtubi adds two notes on the wording. The little word huwa, He, between Allah and al-Ghaniyy, can be taken as an extra word with no grammatical position of its own, or as the subject of a new clause. And where al-fuqara'u meets ila, two hamzas come together; softening the second, al-Khalil judged, is the best of the ways, though softening the first alone, softening both, or pronouncing both in full is also permitted.",
            "bn": "শব্দগঠন নিয়ে কুরতুবী দুটি টীকা যোগ করেন। আল্লাহ আর আল-গানিয়্যের মাঝখানের ছোট্ট শব্দ হুওয়া, অর্থাৎ তিনি, দুইভাবে ধরা যায়। এক, অতিরিক্ত শব্দ হিসেবে, ব্যাকরণে যার আলাদা কোনো অবস্থান নেই। দুই, নতুন বাক্যের উদ্দেশ্য হিসেবে। আর আল-ফুকারাউ যেখানে ইলা-র সঙ্গে মেশে, সেখানে দুটি হামযা পাশাপাশি আসে। খলীলের মতে দ্বিতীয়টিকে হালকা করে পড়াই সবচেয়ে উত্তম। তবে শুধু প্রথমটি হালকা করা, দুটিই হালকা করা, কিংবা দুটিই পূর্ণ উচ্চারণে পড়াও বৈধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Rich and Worthy of Praise",
          "bn": "ধনী, আবার প্রশংসার যোগ্য"
        },
        "p": [
          {
            "en": "Al-Zamakhshari, as al-Qurtubi quotes him, asks a second question: the poor have been set against the Rich, so what does al-Hamid add? His answer starts from ordinary life. Not every rich person benefits others through his wealth; that happens only when the rich one is generous and gives. When he gives, those he gives to praise him, and he has earned their praise. So al-Hamid is named to show that Allah is the Rich whose richness benefits His creation, the Generous who bestows on them and deserves their praise.",
            "bn": "কুরতুবীর উদ্ধৃতিতে যামাখশারী দ্বিতীয় একটি প্রশ্ন তোলেন: অভাবীদের বিপরীতে তো গানী এসেই গেছে, তাহলে হামীদ কী যোগ করে? জবাব তিনি শুরু করেন রোজকার অভিজ্ঞতা থেকে। প্রত্যেক ধনী তার সম্পদ দিয়ে অন্যের উপকার করে না। তা হয় কেবল তখন, যখন সে দানশীল আর দানও করে। দান করলে যারা পায়, তারা তার প্রশংসা করে, আর সে সেই প্রশংসার হকদার হয়। তাই হামীদ নামটি আনা হয়েছে এটা বোঝাতে যে, আল্লাহ এমন ধনী, যাঁর ঐশ্বর্যে সৃষ্টির উপকার হয়। তিনি দাতা, অনুগ্রহকারী, আর সেই অনুগ্রহের জন্য সৃষ্টির প্রশংসা পাওয়ার যোগ্য।"
          },
          {
            "en": "Others read the name through blessings too. At-Tabari explains al-Hamid as He who is praised for His blessings, since every blessing upon you and upon others is from Him, so to Him belong praise and thanks in every state. Al-Baghawi says He is praised for His kindness to them. The Muyassar joins two sides: He is praiseworthy in His essence, His names and His attributes, and praised for His blessings, since every blessing people have comes from Him.",
            "bn": "অন্যরাও নামটিকে নিয়ামতের আলোয় পড়েন। তাবারীর ব্যাখ্যায় হামীদ তিনি, যাঁর প্রশংসা করা হয় তাঁর নিয়ামতের জন্য। কারণ তোমাদের ওপর আর অন্যদের ওপর যত নিয়ামত, সবই তাঁর কাছ থেকে। তাই সব অবস্থায় প্রশংসা ও শুকরিয়া তাঁরই প্রাপ্য। বাগাভী বলেন, সৃষ্টির প্রতি তাঁর দয়ার জন্য তিনি প্রশংসিত। মুয়াসসার দুটি দিক একসঙ্গে ধরে। তিনি নিজ সত্তায়, নামে ও গুণে প্রশংসার যোগ্য। আবার নিয়ামতের জন্যও প্রশংসিত, কারণ মানুষের কাছে যত নিয়ামত আছে, সবই তাঁর দেওয়া।"
          },
          {
            "en": "Ibn Kathir widens it to everything: He is praiseworthy in all that He does and says, all that He decrees and all that He legislates. As-Sa'di walks the same ground: praiseworthy in His essence; in His names, because they are the most beautiful; in His attributes, because they are the highest; in His acts, because they are favour, kindness, justice, wisdom and mercy; and in His commands and prohibitions. Then he folds the two names into each other: He is the Praiseworthy in His richness, the Rich in His praise.",
            "bn": "ইবন কাসীর একে সবকিছুতে ছড়িয়ে দেন: তিনি যা করেন, যা বলেন, যা নির্ধারণ করেন আর যা বিধান দেন, সবকিছুতেই প্রশংসার যোগ্য। সা'দীও একই পথে হাঁটেন। তিনি প্রশংসিত নিজ সত্তায়। প্রশংসিত তাঁর নামে, কারণ সেগুলো সবচেয়ে সুন্দর। তাঁর গুণে, কারণ সেগুলো সবচেয়ে উঁচু। তাঁর কাজে, কারণ সেগুলো অনুগ্রহ, দয়া, ন্যায়, প্রজ্ঞা ও রহমত। আর তাঁর আদেশ-নিষেধেও। শেষে সা'দী নাম দুটিকে একটির ভেতরে আরেকটি গেঁথে দেন: অমুখাপেক্ষিতায় তিনি প্রশংসিত, আর প্রশংসায় তিনি অমুখাপেক্ষী।"
          }
        ]
      },
      {
        "h": {
          "en": "Replaceable at His Will",
          "bn": "তিনি চাইলেই বদলে দেন"
        },
        "p": [
          {
            "en": "The next two verses carry the proof. In 35:16, if He wills He can remove you and bring a new creation, and 35:17 adds that this is not difficult for Allah. Ibn Kathir, in the abridged English text that takes these verses together, explains that if He wanted He could destroy you and bring forth another people, and that this is neither difficult nor impossible for Him. The sequence speaks for itself: those who could be replaced are the ones in need, and He who could replace them needs no one.",
            "bn": "পরের দুটি আয়াতে আসে প্রমাণ। ৩৫:১৬ বলে, তিনি চাইলে তোমাদের সরিয়ে দিয়ে নতুন সৃষ্টি আনতে পারেন। ৩৫:১৭ যোগ করে, এটা আল্লাহর জন্য কঠিন নয়। এই আয়াতগুলো একসঙ্গে নিয়ে ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ব্যাখ্যা করে: তিনি চাইলে তোমাদের ধ্বংস করে অন্য এক জাতিকে নিয়ে আসতে পারেন, আর এটা তাঁর জন্য কঠিনও নয়, অসম্ভবও নয়। ক্রমটাই সব বলে দেয়। যাদের বদলে ফেলা যায়, মুখাপেক্ষী তো তারাই। আর যিনি বদলে দিতে পারেন, তাঁর কারও প্রয়োজন নেই।"
          },
          {
            "en": "The neighbouring verses fill out the picture. The surah opened with praise, al-hamdu lillah, to the Originator of the heavens and the earth (35:1). It has just said that whoever wants honour should know that all honour belongs to Allah (35:10). It goes on to say that no bearer of burdens bears another's burden (35:18), and later that only those of His servants who have knowledge fear Allah (35:28). None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here.",
            "bn": "আশপাশের আয়াতগুলো ছবিটা পূর্ণ করে। সূরা শুরু হয়েছিল প্রশংসা দিয়ে, আলহামদু লিল্লাহ, আসমান ও যমীনের স্রষ্টার জন্য (৩৫:১)। একটু আগেই বলা হয়েছে, কেউ সম্মান চাইলে জেনে রাখুক, সব সম্মান আল্লাহরই (৩৫:১০)। সামনে বলা হবে, কোনো বোঝা বহনকারী অন্যের বোঝা বইবে না (৩৫:১৮)। আরও পরে আসবে, আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে ভয় করে (৩৫:২৮)। এই আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস উদ্ধৃত হলো না।"
          },
          {
            "en": "Put together, the sources give a reader two things to carry. The first is honesty: need is the truth of the human condition, in existence, provision, protection, worship and knowledge, whether felt or not. The second is direction: at-Tabari's reading sends that need to Allah in worship, and as-Sa'di holds out fuller help to whoever keeps it in sight. Because He whom we need is Hamid as well as Ghani, the admission costs nothing; He gives, and is praised for giving.",
            "bn": "সব মিলিয়ে উৎসগুলো পাঠকের হাতে দুটি জিনিস তুলে দেয়। প্রথমটি সততা: অস্তিত্ব, রিযিক, বিপদ থেকে রক্ষা, ইবাদত আর জ্ঞান, সবখানেই অভাবই মানুষের আসল অবস্থা, তা টের পাওয়া যাক বা না যাক। দ্বিতীয়টি দিকনির্দেশ: তাবারীর পাঠ সেই অভাবকে ইবাদতের পথে আল্লাহর কাছে পাঠায়। আর যে নিজের অভাব চোখে রাখে, সা'দী তার জন্য পূর্ণতর সাহায্যের আশা দেখান। যাঁর কাছে প্রয়োজন, তিনি শুধু গানী নন, হামীদও। তাই অভাব স্বীকার করায় কোনো ক্ষতি নেই। তিনি দেন, আর দেওয়ার জন্যই প্রশংসিত হন।"
          }
        ]
      }
    ]
  },
  "35:18": {
    "sections": [
      {
        "h": {
          "en": "Where Mankind Is Left Standing",
          "bn": "যেখানে মানুষ দাঁড়িয়ে থাকে"
        },
        "p": [
          {
            "en": "The surah has just stripped away every false support. The idols you call on do not own so much as the skin of a date-stone, and they cannot even hear you (35:13). You yourself are the poor one, wholly in need of God, while He alone is rich and praised (35:15). If He willed, He could remove you and bring a fresh creation in your place (35:16), and none of that is the least bit hard for Him (35:17). It is onto this cleared ground, with every prop knocked away, that the next verse sets down a single unshakable rule about who answers for what.",
            "bn": "সূরাটি এর মধ্যেই সব ভুয়া অবলম্বন সরিয়ে দিয়েছে। যাদের আপনি ডাকেন, সেই মূর্তিরা খেজুরের আঁটির পাতলা আবরণটুকুরও মালিক নয়, আপনার ডাক শোনার ক্ষমতাও তাদের নেই (৩৫:১৩)। আপনি নিজেই তো অভাবী, পুরোপুরি আল্লাহর মুখাপেক্ষী, আর তিনি একাই অভাবহীন ও প্রশংসিত (৩৫:১৫)। তিনি চাইলে আপনাকে সরিয়ে আপনার জায়গায় নতুন সৃষ্টি আনতে পারেন (৩৫:১৬), আর এর কোনোটিই তাঁর পক্ষে একটুও কঠিন নয় (৩৫:১৭)। ঠিক এই পরিষ্কার জমিনে, যখন সব অবলম্বন সরে গেছে, পরের আয়াত কে কিসের জবাব দেবে তা নিয়ে একটি অটল নিয়ম বসিয়ে দেয়।"
          },
          {
            "en": "The rule is the hinge of the whole argument. Having shown that no imagined partner can save you, the verse now says that no living person can save you either, not in the matter that will finally decide everything. Ibn Kathir reads the entire statement as set on the Day of Resurrection, when every account at last comes due. The warning the Prophet carries and the purity a person builds are both weighed on that Day, and they are weighed against no record but the person's own. Everything the surah has argued now narrows to that.",
            "bn": "এই নিয়মটাই গোটা যুক্তির মূল কব্জা। কল্পিত কোনো শরিক যে আপনাকে বাঁচাতে পারে না, তা দেখানোর পর আয়াত এবার বলছে, জীবিত কোনো মানুষও আপনাকে বাঁচাতে পারবে না, অন্তত যে বিষয়টি শেষ বিচারে সবকিছু ঠিক করে দেবে তাতে। ইবন কাসীর গোটা কথাটিকে কিয়ামতের দিনের সঙ্গে জড়িয়ে পড়েন, যেদিন প্রতিটি হিসাব চুকিয়ে দেওয়ার সময় আসে। নবী ﷺ যে সতর্কবাণী বয়ে আনেন আর মানুষ নিজের ভেতরে যে পবিত্রতা গড়ে, সেদিন দুটোরই ওজন হয়, আর ওজন হয় কেবল সেই মানুষের নিজের আমলনামার বিপরীতে। সূরা এতক্ষণ যা বলে এসেছে, সব এখন ওই এক বিন্দুতে এসে ঠেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Soul Bears Another",
          "bn": "কেউ কারো বোঝা বইবে না"
        },
        "p": [
          {
            "en": "Wa la taziru waziratun wizra ukhra: no bearer of burdens bears the burden of another. At-Tabari glosses it with the plain word for sin — no sinning soul carries the sin of another soul. He pauses on a fine point of the Arabic. The word for the laden one, muthqalah, is feminine, not because it speaks of women alone, but because it stands for nafs, the soul, a word that covers male and female together, just as the Qur'an says every soul shall taste death. The burden meant here is the dead weight of a person's own wrongdoing, and nothing else.",
            "bn": "ওয়ালা তাযিরু ওয়াযিরাতুন বিযরা উখরা: কোনো বোঝা বহনকারী অন্যের বোঝা বইবে না। তাবারী এর ব্যাখ্যায় সরাসরি গুনাহের কথাই বলেন: কোনো গুনাহগার প্রাণ অন্য প্রাণের গুনাহ বইবে না। তিনি আরবির একটি সূক্ষ্ম জায়গায় থামেন। ভারাক্রান্ত প্রাণকে বোঝাতে যে শব্দ, মুসকালা, তা স্ত্রীবাচক। এর কারণ এই নয় যে কথাটা কেবল নারীদের নিয়ে। শব্দটি দাঁড়িয়ে আছে নাফস, অর্থাৎ প্রাণের জায়গায়, যা পুরুষ ও নারী দুজনকেই বোঝায়; যেমন কুরআন বলে, প্রত্যেক প্রাণই মৃত্যুর স্বাদ নেবে। এখানে বোঝা মানে মানুষের নিজের অন্যায়ের ভার, আর কিছু নয়।"
          },
          {
            "en": "The next clause turns the principle into a picture. Wa in tad'u muthqalatun ila himliha: and if a soul weighed down by its sins calls out to another to carry part of that load, la yuhmal minhu shay'un, nothing of it will be carried. The Muyassar keeps the line bare and exact — a soul heavy with sins will look for somebody to lift them and finds nobody. The asking is real, and the refusal is total. Not a single particle of the weight slides from the back that earned it over to anyone else.",
            "bn": "পরের অংশটি নীতিকে ছবিতে বদলে দেয়। ওয়া ইন তাদউ মুসকালাতুন ইলা হিমলিহা: গুনাহের ভারে নুয়ে পড়া কোনো সত্তা যদি অন্যকে ডাকে সেই বোঝার কিছু অংশ বইতে, লা ইউহমাল মিনহু শাইউন, তার কিছুই বয়ে দেওয়া হবে না। মুয়াসসার কথাটি একদম সাদামাটা ও নিখুঁত রাখে, গুনাহে ভারী সত্তা কাউকে খুঁজবে ভার নামাতে, অথচ কাউকেই পাবে না। ডাকটা সত্যি, আর প্রত্যাখ্যানটা পুরোপুরি। যে পিঠ ভার কামিয়েছে তার থেকে ভারের একটি কণাও অন্য কারো কাছে সরে যায় না।"
          },
          {
            "en": "As-Sa'di draws out why this lands as such a shock. In this world a close friend stands by his friend and a relative helps his relative; we lean on each other as a matter of course. The Hereafter is not built on that pattern. There, he says, a servant will wish he held even the smallest claim against somebody, even against his own parents and kin, so that he might collect it as a good deed. The supports we trusted our whole lives are simply not standing there anymore.",
            "bn": "সাদী খুলে বলেন কেন কথাটা এত বড় ধাক্কা হয়ে আসে। এই দুনিয়ায় ঘনিষ্ঠ বন্ধু বন্ধুর পাশে দাঁড়ায়, আত্মীয় আত্মীয়কে সাহায্য করে, একে অন্যের উপর ভর দেওয়া আমাদের কাছে স্বাভাবিক। আখিরাত সেই ছাঁচে গড়া নয়। তিনি বলেন, সেদিন বান্দা চাইবে কারো উপর যদি তার সামান্যতম কোনো পাওনা থাকত, এমনকি নিজের বাবা-মা ও আত্মীয়দের উপরও, যাতে সে তা নেকি হিসেবে আদায় করে নিতে পারত। সারা জীবন যেসব অবলম্বনে ভরসা রেখেছি, সেগুলো সেদিন আর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Even One You Love",
          "bn": "কাছের মানুষও পারে না"
        },
        "p": [
          {
            "en": "Wa law kana dha qurba: even were he a near relative. The commentators refuse to let the phrase stay abstract. At-Tabari, al-Baghawi and the Muyassar all name who the relative might be — a father, a mother, a son, a brother. Al-Baghawi reports from Ibn Abbas the bare exchange of that Day: a parent meets his child and says, carry some of my sins for me, and the child answers, I cannot, what is already on me is enough for me. Nearness of blood buys nothing at all where the reckoning is strictly personal.",
            "bn": "ওয়া লাও কানা যা কুরবা: নিকটাত্মীয় হলেও। তাফসিরকারেরা এই কথাটিকে অস্পষ্ট থাকতে দিতে রাজি নন। তাবারী, বাগাভী ও মুয়াসসার সবাই বলে দেন আত্মীয়টি কে হতে পারে, বাবা, মা, ছেলে কিংবা ভাই। বাগাভী ইবন আব্বাস থেকে সেদিনের সাদাসিধা কথোপকথনটি আনেন: বাবা তার সন্তানের দেখা পেয়ে বলে, আমার কিছু গুনাহ তুমি বহন করো, আর সন্তান জবাব দেয়, পারব না, আমার উপর যা আছে তাই আমার জন্য যথেষ্ট। যেখানে হিসাব একান্ত ব্যক্তিগত, সেখানে রক্তের নৈকট্য কিছুই কিনে দিতে পারে না।"
          },
          {
            "en": "Al-Qurtubi gives the scene more voices. He relates from 'Ikrimah that a man will come to his father pleading: was I not dutiful to you, kind and good to you, while you see the state I am in now; grant me one good deed, or carry one sin away from me. The father answers, what you ask is a small thing, but I fear the very thing you fear, and he turns away. The same words pass between a man and his wife, and they meet the same refusal. Each voice is wholly taken up with its own survival.",
            "bn": "কুরতুবী দৃশ্যটিতে আরও কয়েকটি কণ্ঠ যোগ করেন। তিনি ইকরিমা থেকে আনেন, একজন মানুষ তার বাবার কাছে এসে মিনতি করবে: আমি কি তোমার অনুগত ছিলাম না, তোমার প্রতি সদয় ও ভালো ছিলাম না, অথচ আমি এখন কোন অবস্থায় আছি তা তো দেখছ; আমাকে একটি নেকি দাও, নয়তো একটি গুনাহ আমার থেকে সরিয়ে নাও। বাবা জবাব দেয়, তুমি যা চাইছ তা সামান্য, কিন্তু তুমি যা ভয় পাচ্ছ ঠিক তা-ই আমি ভয় পাই, আর সে মুখ ফিরিয়ে নেয়। একই কথা চলে স্বামী ও স্ত্রীর মধ্যে, আর একই প্রত্যাখ্যানে গিয়ে ঠেকে। প্রত্যেকেই কেবল নিজেকে বাঁচানোর চিন্তায় ডুবে আছে।"
          },
          {
            "en": "Al-Qurtubi adds a second picture, this one from al-Fudayl ibn 'Iyad, that cuts deeper still. A mother meets the child she bore and nursed and cradled, and pleads: was my womb not your shelter, my breast not your drink, my lap not your bed; my sins have crushed me, so carry just one of them away. And the child, who owed her everything, says: leave me be, mother, I am far too taken up with my own sin to help you. The verse lets the most tender bond in all creation break clean against it.",
            "bn": "কুরতুবী আরেকটি ছবি জুড়ে দেন, এবার আল-ফুদাইল ইবন ইয়াদ থেকে, যা আরও গভীরে কেটে বসে। মা তার গর্ভে ধরা, বুকের দুধ খাওয়ানো, কোলে বড় করা সন্তানের দেখা পেয়ে মিনতি করে: আমার পেট কি তোমার আশ্রয় ছিল না, আমার বুক কি তোমার পানীয় ছিল না, আমার কোল কি তোমার বিছানা ছিল না; গুনাহ আমাকে পিষে ফেলেছে, তাই এর একটি অন্তত সরিয়ে নাও। আর যে সন্তান তার কাছে সবকিছুর ঋণী, সে বলে: আমাকে ছাড়ো মা, নিজের গুনাহ নিয়েই আমি এত ব্যস্ত যে তোমাকে সাহায্য করার জো নেই। সৃষ্টির সবচেয়ে কোমল বাঁধনটাকেও আয়াত এর গায়ে এসে ভেঙে পড়তে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refrain of Justice",
          "bn": "ন্যায়ের পুনরাবৃত্ত সুর"
        },
        "p": [
          {
            "en": "This sentence is not spoken only here. The same words, la taziru waziratun wizra ukhra, recur across the Qur'an: at 6:164, at 17:15, at 39:7, and at 53:38. When a phrase comes back word for word in so many places, it is being laid down as a settled law and not a passing remark. The law is a pillar of divine justice: no soul is punished for a crime that is not its own, and no guilt is inherited, transferred, or borrowed from somebody else. Each person is made to stand squarely on his own record.",
            "bn": "এ কথাটি কেবল এখানেই বলা হয়নি। একই শব্দগুলো, লা তাযিরু ওয়াযিরাতুন বিযরা উখরা, কুরআনে বারবার ফিরে আসে: ৬:১৬৪, ১৭:১৫, ৩৯:৭ ও ৫৩:৩৮ আয়াতে। কোনো বাক্য যখন হুবহু এতগুলো জায়গায় ফিরে আসে, তখন তা পাশ কাটানো মন্তব্য নয়, বরং একটি স্থির বিধান হিসেবে বসিয়ে দেওয়া হয়। এ বিধান ঐশী ন্যায়ের একটি স্তম্ভ: কোনো সত্তাকে এমন অপরাধের শাস্তি দেওয়া হয় না যা তার নিজের নয়, আর কোনো গুনাহ উত্তরাধিকারসূত্রে পাওয়া যায় না, হস্তান্তর হয় না, কারো কাছ থেকে ধারও করা যায় না। প্রত্যেক মানুষকে সোজা নিজের আমলনামার উপর দাঁড় করানো হয়।"
          },
          {
            "en": "At 17:15 the same refrain sits beside its own mirror image: whoever is guided is guided only for himself, and whoever strays strays only against himself. Al-Qurtubi even reads this verse's word for self-purifying, tazakka, as being rightly guided for his own sake. So the rule hands out no licence against anybody. It does not let a man shrug off the people he has wronged or misled, and it does not brand any family or community as burdened by another's sin. It only refuses to shift a weight off the back that first earned it.",
            "bn": "১৭:১৫ আয়াতে একই কথার পাশে আছে তার আয়নার ছবি: যে সৎপথে চলে, সে নিজের জন্যই চলে; আর যে পথ হারায়, সে নিজেরই ক্ষতি করে। কুরতুবী তো এই আয়াতের তাযাক্কা শব্দটিকেও, যার মানে নিজেকে পরিশুদ্ধ করা, পড়েন নিজের কল্যাণে সৎপথ পাওয়া অর্থে। তাই এই নিয়ম কারো বিরুদ্ধে কোনো ছাড়পত্র দেয় না। কেউ যাদের ওপর অন্যায় করেছে বা যাদের বিপথে নিয়েছে, তাদের দায় ঝেড়ে ফেলার সুযোগ এ নিয়ম দেয় না। আবার কোনো পরিবার বা সম্প্রদায়কে অন্যের গুনাহে ভারী বলে দাগও দেয় না। এ নিয়ম কেবল একটি জিনিস মানে না: যে পিঠ ভারটা প্রথমে কামিয়েছে, সেখান থেকে ভার সরিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Burden and Intercession",
          "bn": "বোঝা ও সুপারিশ"
        },
        "p": [
          {
            "en": "A reader may wonder about 29:13, where those who lead others astray carry loads along with their own loads. Ma'arif al-Qur'an, citing Ruh al-Ma'ani, answers that there is no clash at all. Those who misguide others do bear a doubled weight — their own going astray, and the crime of dragging others down with them — so their burden becomes twofold. But this never lightens the load of the ones they misled; each of those still carries his own in full. Nobody's sin has been moved onto another's back. A fresh sin has simply been added to the misleader's account.",
            "bn": "কেউ হয়তো ২৯:১৩ আয়াত নিয়ে ভাবতে পারেন, যেখানে যারা অন্যদের বিপথে নেয় তারা নিজেদের বোঝার সঙ্গে আরও বোঝা বয়ে চলে। মাআরিফুল কুরআন রুহুল মাআনি উদ্ধৃত করে বলে, এতে কোনো সংঘাত নেই। যারা অন্যদের বিভ্রান্ত করে তারা দ্বিগুণ ভার বহন করে, নিজেদের পথভ্রষ্টতা আর অন্যদের টেনে নামানোর অপরাধ, তাই তাদের বোঝা দুই গুণ হয়ে যায়। কিন্তু এতে যাদের বিভ্রান্ত করা হলো তাদের বোঝা কখনো হালকা হয় না, তাদের প্রত্যেকে এখনো নিজের বোঝা পুরোটাই বয়ে চলে। কারো গুনাহ অন্যের পিঠে সরিয়ে দেওয়া হয়নি। শুধু বিভ্রান্তকারীর হিসাবে একটি নতুন গুনাহ যোগ হয়েছে।"
          },
          {
            "en": "Ma'arif is careful to add, on the authority of Ibn Kathir, that intercession is a wholly different matter. The verse shuts the door on a single thing only: a sinner offloading his own sins onto somebody else. It says nothing against the intercession God permits by His own leave, which is pure grace from Him and not a transfer of guilt. The same theme runs on: the Qur'an pictures a man fleeing from his brother on that Day (80:34), and 31:33 warns that no father will avail his son. In every case the dread is of being asked to carry what cannot be carried.",
            "bn": "মাআরিফুল কুরআন ইবন কাসীরের বরাতে সতর্কভাবে যোগ করে, সুপারিশ সম্পূর্ণ আলাদা বিষয়। আয়াত কেবল একটি দরজাই বন্ধ করে: গুনাহগার নিজের গুনাহ অন্য কারো ঘাড়ে চাপিয়ে দেওয়া। আল্লাহ নিজের অনুমতিতে যে সুপারিশের সুযোগ দেন, তার বিরুদ্ধে এটি কিছুই বলে না; সেটি তাঁর নিছক অনুগ্রহ, গুনাহ হস্তান্তর নয়। একই সুর চলতে থাকে: কুরআন ছবি আঁকে, সেদিন মানুষ তার ভাই থেকে পালাবে (৮০:৩৪), আর ৩১:৩৩ সতর্ক করে যে কোনো বাবা তার সন্তানের কোনো কাজে আসবে না। প্রতিটি ক্ষেত্রেই ভয় একটাই: যা বওয়া যায় না, তা বইতে বলা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart the Warning Reaches",
          "bn": "যে অন্তরে সতর্কতা পৌঁছায়"
        },
        "p": [
          {
            "en": "Innama tunthiru alladhina yakhshawna rabbahum bi'l-ghayb: you can only warn those who fear their Lord unseen. At-Tabari explains that the Prophet's warning takes hold in those who dread God's punishment though they have never once laid eyes on it, believing it purely on the strength of what he brought them; the sealed hearts draw nothing from it. Qatada glosses the fear plainly as the fear of the Fire. Al-Baghawi reads bi'l-ghayb as reverence for a Lord they have not seen. The warning is good seed, but only a prepared soil will take it in.",
            "bn": "ইন্নামা তুনযিরুল্লাযীনা ইয়াখশাওনা রাব্বাহুম বিলগাইব: তুমি কেবল তাদেরই সতর্ক করতে পারো যারা না দেখেই তাদের রবকে ভয় করে। তাবারী বলেন, নবীর সতর্কবাণী তাদের ভেতরেই গেঁথে বসে যারা আল্লাহর শাস্তিকে ভয় করে কখনো তা চোখে না দেখেই, কেবল তিনি যা এনেছেন তার জোরে বিশ্বাস করে; সিলমোহর পড়া অন্তরগুলো এ থেকে কিছুই পায় না। কাতাদা এই ভয়কে সোজা করে বলেন আগুনের ভয়। বাগাভীর মতে বিলগাইব মানে, যে রবকে তারা দেখেনি, তাঁর প্রতি সম্ভ্রম। সতর্কবাণী ভালো বীজ, কিন্তু কেবল তৈরি মাটিই তা গ্রহণ করবে।"
          },
          {
            "en": "As-Sa'di widens the circle. These are the people who fear God bi'l-ghayb, which he takes to mean in secret and in the open, when watched and when unwatched, so that their reverence never switches off the moment a room empties. They are also the people who establish the prayer with its proper limits and conditions and its inward stillness. He explains why the pairing holds: fear of God pushes a servant to do the very thing he dreads being punished for neglecting, and the prayer itself keeps calling him toward good and warning him off what is shameful.",
            "bn": "সাদী বৃত্তটাকে আরও বড় করেন। এরাই সেই মানুষ যারা আল্লাহকে বিলগাইব ভয় করে, যা তিনি বোঝেন গোপনে ও প্রকাশ্যে, কেউ দেখুক বা না দেখুক উভয় অবস্থায়, যাতে ঘর খালি হয়ে গেলেই তাদের সম্ভ্রম থেমে না যায়। এরাই আবার সেই মানুষ যারা নামাজকে তার যথাযথ সীমা, শর্ত ও ভেতরের প্রশান্তিসহ প্রতিষ্ঠা করে। তিনি বলেন কেন এ দুটি একসঙ্গে আসে: আল্লাহর ভয় বান্দাকে ঠেলে দেয় সেই কাজের দিকে, যা ছেড়ে দিলে শাস্তির আশঙ্কা সে করে, আর নামাজ নিজেই তাকে ভালোর দিকে ডাকতে থাকে, মন্দ থেকে সরিয়ে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing Him When Alone",
          "bn": "একা থাকার সময় ভয়"
        },
        "p": [
          {
            "en": "No sound report fixes a specific occasion of revelation to this verse, yet a hadith lights up its phrase about fearing the Lord unseen. In Sahih al-Bukhari it is narrated from Abu Huraira that the Prophet named seven whom God will shade on the Day when there is no shade but His. Among them is a man who gave charity so secretly that his left hand did not know what his right hand had spent, and a man who remembered God while entirely alone and his eyes then overflowed with tears. The hadith does not comment on this verse, yet it paints the very portrait the verse praises.",
            "bn": "কোনো সহিহ বর্ণনায় এই আয়াতের নির্দিষ্ট শানে নুযুল পাওয়া যায় না, তবে না দেখে রবকে ভয় করার কথাটির ওপর একটি হাদিস আলো ফেলে। সহিহ বুখারীতে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ এমন ৭ জনের কথা বলেছেন, যাদের আল্লাহ সেদিন নিজের ছায়ায় জায়গা দেবেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। তাদের একজন এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল। আরেকজন একেবারে একা আল্লাহর জিকির করে, আর তার দুচোখ পানিতে ভরে ওঠে। হাদিসটি এই আয়াতের ব্যাখ্যা দিতে আসেনি, তবু আয়াত যে মানুষের প্রশংসা করে, ঠিক তারই ছবি আঁকে।"
          },
          {
            "en": "Look at what both figures share: no audience at all. The giver hides his charity even from his own hand; the weeper is utterly alone with his Lord. These are deeds that purchase nothing in this world, no reputation and no word of thanks, which is exactly why they prove a fear of God that is real. That hidden reverence is what the verse means by fearing the Lord unseen, and it is just the kind of heart on which, as the verse has told us, the warning actually takes hold.",
            "bn": "দুজনের মিলটা দেখুন: কোনো দর্শক নেই। দানকারী নিজের হাত থেকেও দান লুকিয়ে রাখে; যে কাঁদে, সে একেবারে একা তার রবের সঙ্গে। এসব আমল দুনিয়ায় কিছুই এনে দেয় না, না সুনাম, না একটা ধন্যবাদ। ঠিক এ কারণেই এগুলো প্রমাণ করে, আল্লাহর ভয় এখানে সত্যিকারের। এই লুকানো সম্ভ্রমকেই আয়াত বলে না দেখে রবকে ভয় করা। আর আয়াত আগেই বলেছে, ঠিক এমন অন্তরেই সতর্কবাণী সত্যি সত্যি গেঁথে বসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Purified for Your Own Sake",
          "bn": "পরিশুদ্ধি কেবল নিজের জন্য"
        },
        "p": [
          {
            "en": "Wa man tazakka fa-innama yatazakka li-nafsih: whoever purifies himself does so only for his own soul. At-Tabari reads purifying as cleansing oneself of the filth of denial and sin by turning back to God, by faith, and by obedience; its reward is God's pleasure and rescue from the punishment prepared for the deniers. As-Sa'di fills in the content: scrubbing out show, pride, lying, cheating, treachery and hypocrisy, and putting on truthfulness, sincerity, humility, gentleness, and a chest kept clean of malice and envy. Every scrap of that labour, he says, comes back to the worker; none of it is lost.",
            "bn": "ওয়া মান তাযাক্কা ফাইন্নামা ইয়াতাযাক্কা লিনাফসিহ: যে নিজেকে পরিশুদ্ধ করে, সে তা করে কেবল নিজেরই জন্য। তাবারীর ব্যাখ্যায় পরিশুদ্ধি মানে আল্লাহর দিকে ফিরে এসে, ইমান আর আনুগত্যের মাধ্যমে কুফর ও গুনাহের ময়লা থেকে নিজেকে সাফ করা; এর প্রতিদান আল্লাহর সন্তুষ্টি, আর অস্বীকারকারীদের জন্য তৈরি শাস্তি থেকে মুক্তি। সাদী এর ভেতরের কাজগুলো খুলে বলেন: লোকদেখানো, অহংকার, মিথ্যা, ধোঁকা, বিশ্বাসঘাতকতা আর মুনাফিকি ঘষে তুলে ফেলা; আর তার জায়গায় সত্যবাদিতা, ইখলাস, বিনয়, কোমলতা এবং হিংসা-বিদ্বেষ থেকে সাফ একটি অন্তর গড়ে তোলা। তিনি বলেন, এই পরিশ্রমের প্রতিটি কণা ফিরে আসে যে করে তার কাছেই; কিছুই বৃথা যায় না।"
          },
          {
            "en": "Then the verse ends where everything ends: wa ila Allahi al-masir, and to God is the final destination. At-Tabari says this is the return of each of us, believing and denying, upright and corrupt alike, each to be repaid for whatever he sent ahead. As-Sa'di adds that God will reckon with His whole creation over all that they did, overlooking no deed however small or large. The sentence that opened by refusing to move your burden closes by promising that your own account, and only yours, is kept in full and is waiting there for you.",
            "bn": "এরপর আয়াত সেখানেই শেষ হয় যেখানে সবকিছু শেষ হয়: ওয়া ইলাল্লাহিল মাসীর, আর আল্লাহর দিকেই শেষ প্রত্যাবর্তন। তাবারী বলেন, এ হলো আমাদের প্রত্যেকের ফিরে যাওয়া, মুমিন ও অস্বীকারকারী, সৎ ও নষ্ট সবাই, প্রত্যেকে আগে যা পাঠিয়েছে তার প্রতিদান পাবে বলে। সাদী যোগ করেন, আল্লাহ তাঁর গোটা সৃষ্টির সঙ্গে তাদের সব কাজের হিসাব নেবেন, ছোট কি বড় কোনো আমলই বাদ পড়বে না। যে বাক্য শুরু হয়েছিল আপনার বোঝা না সরানোর অঙ্গীকার দিয়ে, তা শেষ হয় এই প্রতিশ্রুতিতে যে আপনার নিজের হিসাব, কেবল আপনারই, পুরোপুরি রাখা আছে আর সেখানে আপনার জন্য অপেক্ষা করছে।"
          }
        ]
      }
    ]
  },
  "35:28": {
    "sections": [
      {
        "h": {
          "en": "Colours in the Living",
          "bn": "প্রাণীজগতের রঙে রঙে"
        },
        "p": [
          {
            "en": "The verse finishes a survey that 35:27 began. There, rain comes down from the sky and brings out fruits of differing colours, and the mountains carry streaks of white and red in varying shades, and others jet black. Our verse carries the same survey into living things: wa-mina-n-nasi wad-dawabbi wal-an'ami mukhtalifun alwanuhu kadhalik, and among people, moving creatures and grazing livestock there are likewise differing colours. At-Tabari reads kadhalik as the link back: just as the fruits and the mountains differ in red, white, black, yellow and other colours.",
            "bn": "আগের আয়াত ৩৫:২৭ যে পর্যবেক্ষণ শুরু করেছিল, এ আয়াত তা শেষ করে। সেখানে আকাশ থেকে বৃষ্টি নামে, তা দিয়ে বেরোয় নানা রঙের ফল। পাহাড়ের গায়ে থাকে সাদা আর লাল ডোরা, প্রতিটির রং আবার নানা মাত্রার, আর কিছু একেবারে কুচকুচে কালো। আমাদের আয়াত সেই একই দৃষ্টি নিয়ে যায় প্রাণীর দিকে: ওয়া মিনান নাসি ওয়াদ দাওয়াব্বি ওয়াল আনআমি মুখতালিফুন আলওয়ানুহু কাযালিক, মানুষ, বিচরণশীল প্রাণী আর গবাদি পশুর মধ্যেও তেমনি রয়েছে নানা রং। তাবারী কাযালিক শব্দটিকে পেছনের সঙ্গে জোড়েন। তাঁর কথায়, ফল আর পাহাড় যেমন লাল, সাদা, কালো, হলুদ ও অন্যান্য রঙে ভিন্ন ভিন্ন, এরাও তেমন।"
          },
          {
            "en": "At-Tabari supports this with Qatada, who glossed each colour of 35:27 and then said: as the colours of these differ, so the colours of people, beasts and cattle differ likewise. Ad-Dahhak, in the same place, moves from the white, red and black tracks of the mountains straight to people: and so people differ in their colours. Ibn Kathir defines the terms. Ad-dawabb is everything that walks on legs, and the an'am are named after it as a particular case placed after the general one.",
            "bn": "এ ব্যাখ্যার পক্ষে তাবারী কাতাদার উক্তি আনেন। কাতাদা ৩৫:২৭ আয়াতের প্রতিটি রঙের অর্থ বলে শেষে বলেছেন: এগুলোর রং যেমন ভিন্ন, মানুষ, জীবজন্তু আর গবাদি পশুর রংও তেমনি ভিন্ন। একই জায়গায় দাহহাকের কথাও আছে। পাহাড়ের সাদা, লাল আর কালো পথরেখার কথা বলেই তিনি সোজা চলে যান মানুষে: মানুষও তেমনি নানা রঙের। শব্দগুলোর সংজ্ঞা দেন ইবন কাসীর। আদ-দাওয়াব্ব মানে পায়ে ভর দিয়ে চলা সব প্রাণী। আনআম তারই একটি বিশেষ অংশ, সাধারণের পরে বিশেষকে আলাদা করে বলা হয়েছে।"
          },
          {
            "en": "Ibn Kathir then describes the range among people, from peoples of deep darkness of skin to peoples of great fairness, with the Arabs in between, and cites 30:22, where the difference of tongues and colours is a sign for those who know. He adds that beasts and cattle differ in colour even within one species, and that a single animal may be piebald, carrying this colour and that. He closes the point with a line of praise: blessed is Allah, the best of creators. In his telling the colours are workmanship to be admired, and the praise is for their Maker.",
            "bn": "এরপর ইবন কাসীর মানুষের রঙের বিস্তার বর্ণনা করেন। একদিকে গাঢ় কালো গায়ের রঙের জাতি, অন্যদিকে খুব ফর্সা জাতি, আর মাঝামাঝি আরবরা। তিনি ৩০:২২ আয়াতও উদ্ধৃত করেন, যেখানে ভাষা ও বর্ণের বৈচিত্র্যকে জ্ঞানীদের জন্য নিদর্শন বলা হয়েছে। তিনি আরও বলেন, জীবজন্তু ও গবাদি পশুর রং এক প্রজাতির ভেতরেও আলাদা হয়। এমনকি একটি প্রাণীর গায়েই থাকতে পারে ছোপ ছোপ নানা রং। কথাটা তিনি শেষ করেন প্রশংসায়: সর্বোত্তম স্রষ্টা আল্লাহ কত বরকতময়! তাঁর বর্ণনায় রংগুলো দেখার মতো কারুকাজ, আর প্রশংসা তার কারিগরের।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Kadhalik Belongs",
          "bn": "কাযালিক কোন দিকের"
        },
        "p": [
          {
            "en": "Al-Baghawi pauses on a point of grammar. The pronoun in alwanuhu, its colours, is masculine, and he gives two explanations: it follows the word min, or it refers back to something left unsaid, so that the full sense is: and among people, beasts and cattle is that which is of differing colours. The Muyassar paraphrase supplies the same unspoken words. On kadhalik al-Baghawi writes: as the colours of the fruits and the mountains differ. Then he says the sentence is complete here, and that the next clause begins afresh.",
            "bn": "বাগাভী একটি ব্যাকরণের প্রশ্নে থামেন। আলওয়ানুহু, অর্থাৎ তার রং, এখানে সর্বনামটি পুংলিঙ্গ। তিনি এর দুটি কারণ দেখান। হয় এটি মিন শব্দের অনুসরণে এসেছে, নয়তো এটি ফিরে গেছে উহ্য একটি শব্দের দিকে। তখন পূর্ণ অর্থ দাঁড়ায়: মানুষ, জীবজন্তু আর গবাদি পশুর মধ্যে এমনও আছে যা নানা রঙের। মুয়াসসারের ব্যাখ্যাতেও এই উহ্য কথাটুকু জুড়ে দেওয়া আছে। কাযালিক সম্পর্কে বাগাভী লেখেন: ফল আর পাহাড়ের রং যেমন ভিন্ন। তারপর বলেন, বাক্য এখানেই শেষ, পরের অংশ শুরু হয়েছে নতুন করে।"
          },
          {
            "en": "Ma'arif al-Qur'an explains why translations put a full stop after kadhalik: according to the majority of commentators this is a place of pause, which ties the word to the colours before it. It then reports narrations that tie the word to the following sentence. On that reading, the way fruits, mountains, people and animals differ in colour, people likewise differ in degrees of awe of Allah, and each degree follows a degree of knowledge. Al-Qurtubi calls kadhalik the completion of the sentence, and his gloss reads: likewise the states of the servants differ in khashyah.",
            "bn": "অনুবাদে কাযালিকের পরে দাঁড়ি কেন বসে, মাআরিফুল কুরআন তা বুঝিয়ে বলে। অধিকাংশ তাফসীরকারের মতে এখানে ওয়াকফ, অর্থাৎ থামার জায়গা। তাতে শব্দটি আগের রঙের প্রসঙ্গের সঙ্গে যুক্ত হয়। তারপর সে এমন কিছু বর্ণনার কথা জানায়, যা শব্দটিকে পরের বাক্যের সঙ্গে জোড়ে। সে পাঠে অর্থ হয়: ফল, পাহাড়, মানুষ আর প্রাণী যেমন রঙে আলাদা, মানুষ তেমনি আল্লাহভীতির মাত্রায়ও আলাদা। আর ভয়ের প্রতিটি মাত্রা আসে জ্ঞানের মাত্রা অনুযায়ী। কুরতুবী কাযালিককে বাক্যের সমাপ্তি বলেন। তাঁর ব্যাখ্যা: তেমনি খাশইয়াহর ক্ষেত্রে বান্দাদের অবস্থাও ভিন্ন ভিন্ন।"
          },
          {
            "en": "Al-Qurtubi also carries a question from az-Zamakhshari about a reading reported from 'Umar ibn 'Abd al-'Aziz and related from Abu Hanifa: innama yakhsha-llahu min 'ibadihi-l-'ulama'a, with Allah as the subject and the scholars as the object. Az-Zamakhshari's answer is that khashyah in this reading is a metaphor. Its meaning is that Allah holds them in honour and esteem, as an awe-inspiring man is esteemed among people. The text recited in the mushaf has the scholars as the ones who fear and Allah as the One feared.",
            "bn": "কুরতুবী যামাখশারীর একটি প্রশ্নও উদ্ধৃত করেন। প্রশ্নটি এক পাঠ নিয়ে, যা উমর ইবন আবদুল আযীযের পাঠ বলে বর্ণিত এবং আবূ হানীফা থেকেও উল্লিখিত: ইন্নামা ইয়াখশাল্লাহু মিন ইবাদিহিল উলামাআ। এ পাঠে আল্লাহ কর্তা, আর আলিমরা কর্ম। যামাখশারীর জবাব হলো, এ পাঠে খাশইয়াহ শব্দটি রূপক। এর অর্থ, আল্লাহ তাঁদের সম্মান ও মর্যাদা দেন, যেমন সমাজে একজন সম্ভ্রম জাগানো মানুষকে সবাই সমীহ করে। মুসহাফে যে পাঠ তিলাওয়াত হয়, তাতে ভয় করেন আলিমরা, আর যাঁকে ভয় করা হয় তিনি আল্লাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Shades, One Origin",
          "bn": "এক মূল, বহু রং"
        },
        "p": [
          {
            "en": "As-Sa'di widens the observation. People, beasts and cattle differ in colour, description, voice and form, all of it visible to the eye, and all of it from one origin and one material. That disparity, he says, is a rational proof of the will of Allah, which singled out each thing with its colour and description, and of His power, which brought them into being so. It shows His wisdom and mercy as well, because the difference serves known benefits: knowing the ways, and people recognising one another.",
            "bn": "সা'দী পর্যবেক্ষণটা আরও বড় করে দেখান। মানুষ, জীবজন্তু আর গবাদি পশু রঙে, গুণে, কণ্ঠস্বরে ও গঠনে আলাদা। এসব চোখে দেখা যায়, অথচ সবার মূল এক, উপাদানও এক। তাঁর মতে এই পার্থক্য আল্লাহর ইচ্ছার একটি যৌক্তিক প্রমাণ। সেই ইচ্ছাই প্রত্যেককে আলাদা রং আর বৈশিষ্ট্য দিয়ে চিহ্নিত করেছে। এ তাঁর কুদরতেরও প্রমাণ, যিনি এদের এভাবে অস্তিত্বে এনেছেন। এতে তাঁর হিকমত ও রহমতও ধরা পড়ে, কারণ এই ভিন্নতার জানা উপকার আছে: পথঘাট চেনা যায়, মানুষ একে অপরকে চিনতে পারে।"
          },
          {
            "en": "He adds that the same variety proves the breadth of Allah's knowledge, and that He will raise those in the graves. Then comes his turn towards our clause. The heedless person looks at these things with a heedless look that brings no remembrance. The one who benefits is the one who fears Allah and grasps, by sound reflection, the wisdom in them. The Muyassar names the same object of knowledge: His power over all things, including the difference among these creatures although their cause is one, with reflection on the lessons they hold.",
            "bn": "তিনি আরও বলেন, এই বৈচিত্র্য আল্লাহর জ্ঞানের ব্যাপ্তিরও প্রমাণ, আর প্রমাণ যে তিনি কবরবাসীদের আবার জীবিত করবেন। তারপর তিনি আমাদের বাক্যাংশের দিকে ফেরেন। গাফিল মানুষ এসব দেখে গাফিলের চোখে, তাতে তার কোনো উপদেশ গ্রহণ হয় না। উপকার পান সেই ব্যক্তি, যিনি আল্লাহকে ভয় করেন এবং সঠিক চিন্তা দিয়ে এর ভেতরের হিকমত বোঝেন। মুয়াসসারও জ্ঞানের একই বিষয়ের নাম বলে: সব কিছুর উপর আল্লাহর কুদরত। এর মধ্যে আছে উৎস এক হওয়া সত্ত্বেও এসব সৃষ্টির ভিন্নতা, আর তাতে থাকা উপদেশ ও শিক্ষা নিয়ে ভাবা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Restriction in Innama",
          "bn": "ইন্নামার সীমারেখা"
        },
        "p": [
          {
            "en": "Then the turn: innama yakhsha-llaha min 'ibadihi-l-'ulama', only those of His servants who have knowledge fear Allah. Ma'arif al-Qur'an notes that innama expresses restriction, so the plain sense is that only the 'ulama' fear Allah. It then cites Ibn 'Atiyya and others, through Abu Hayyan's al-Bahr al-Muhit, for a second use of the particle: singling something out. On that view fear of Allah is a quality especially due from the 'ulama', and the verse does not imply that others have none of it.",
            "bn": "এরপর মোড়: ইন্নামা ইয়াখশাল্লাহা মিন ইবাদিহিল উলামা, আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে ভয় করে। মাআরিফুল কুরআন বলে, ইন্নামা শব্দটি সীমাবদ্ধতা বোঝায়। তাই সরল অর্থ হলো, কেবল উলামাই আল্লাহকে ভয় করেন। তারপর সে আবূ হাইয়ানের আল-বাহরুল মুহীত থেকে ইবন আতিয়্যা ও অন্যদের মত উদ্ধৃত করে। তাঁদের মতে এই অব্যয়ের আরেকটি কাজ আছে: কোনো কিছুকে বিশেষভাবে চিহ্নিত করা। এ মতে আল্লাহভীতি উলামার জন্য বিশেষভাবে অপরিহার্য গুণ। এর মানে এই নয় যে অন্যদের মধ্যে এ ভয় একেবারেই নেই।"
          },
          {
            "en": "Ibn Kathir reads the clause as fear in its full measure: only those who know Him fear Him as He deserves. The more complete the knowledge of the Supreme, the All-Powerful, the All-Knowing, described with every attribute of perfection and named with the most beautiful names, the greater the fear. At-Tabari makes the knowledge specific. The ones who fear Allah, and guard against His punishment by obeying Him, are those who know His power over whatever He wills. Whoever knows that is certain he will be punished for disobedience, and so he fears Him.",
            "bn": "ইবন কাসীর এ বাক্যে দেখেন পূর্ণ মাত্রার ভয়। যাঁরা তাঁকে চেনেন, কেবল তাঁরাই তাঁকে যথাযথ ভয় করেন। যিনি মহান, সর্বশক্তিমান, সর্বজ্ঞ, যাঁর আছে সব পূর্ণতার গুণ আর সুন্দরতম নাম, তাঁকে যত পূর্ণভাবে চেনা যায়, ভয় তত বড় হয়। তাবারী জ্ঞানের বিষয়টা নির্দিষ্ট করে দেন। আল্লাহকে ভয় করেন এবং আনুগত্যের মাধ্যমে তাঁর শাস্তি থেকে বাঁচেন তাঁরাই, যাঁরা জানেন তিনি যা চান তার সবকিছুর উপর তাঁর ক্ষমতা আছে। যে এটা জানে, সে নিশ্চিত হয় যে নাফরমানির শাস্তি তাকে পেতেই হবে। তাই সে তাঁকে ভয় করে।"
          },
          {
            "en": "As-Sa'di states it as a rule: whoever knows Allah better fears Him more, and that fear makes him hold back from sins and prepare to meet Him whom he fears. He calls this a proof of the virtue of knowledge, since it calls to fear, and the people of fear are the people of His honour, citing 98:8: that is for whoever fears his Lord. Ma'arif al-Qur'an sets the clause beside 35:18, where the warning benefits those who fear their Lord unseen; here the verse names who they are.",
            "bn": "সা'দী কথাটা নিয়মের মতো করে বলেন: যে আল্লাহকে যত বেশি জানে, সে তাঁকে তত বেশি ভয় করে। সেই ভয় তাকে গুনাহ থেকে বিরত রাখে, আর যাঁকে সে ভয় করে তাঁর সাক্ষাতের জন্য প্রস্তুত করে। তাঁর মতে এটা ইলমের মর্যাদার প্রমাণ, কারণ ইলম ভয়ের দিকে ডাকে। আর ভয়ের মানুষেরাই তাঁর সম্মানের মানুষ। এর সমর্থনে তিনি ৯৮:৮ আয়াত আনেন: এটা তার জন্য, যে তার রবকে ভয় করে। মাআরিফুল কুরআন বাক্যটিকে রাখে ৩৫:১৮ আয়াতের পাশে। সেখানে বলা হয়েছে, সতর্কবাণীতে উপকৃত হয় তারা, যারা না দেখে তাদের রবকে ভয় করে। এ আয়াত জানিয়ে দেয় তারা কারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Counts as 'Ulama",
          "bn": "উলামা বলতে কারা"
        },
        "p": [
          {
            "en": "The tafsirs bring several reports from Ibn 'Abbas (RA). Through 'Ali ibn Abi Talha, cited by at-Tabari, Ibn Kathir and al-Qurtubi: they are those who know that Allah has power over all things. Through 'Ikrima, in Ibn Kathir: the knower of ar-Rahman is he who associates nothing with Him, holds lawful what He made lawful and forbidden what He forbade, keeps His counsel, and is certain he will meet Him and be reckoned for his deeds. In al-Baghawi's report Allah's intent is: only those of My creation fear Me who know My compelling power, My might and My sovereignty.",
            "bn": "তাফসীরগুলো ইবন আব্বাস (রাঃ) থেকে কয়েকটি বর্ণনা আনে। আলী ইবন আবী তালহার সূত্রে, যা তাবারী, ইবন কাসীর ও কুরতুবী উদ্ধৃত করেছেন: তাঁরা সেই লোক, যাঁরা জানেন আল্লাহ সব কিছুর উপর ক্ষমতাবান। ইকরিমার সূত্রে, ইবন কাসীরের গ্রন্থে: রহমানকে যে চেনে, সে তাঁর সঙ্গে কিছুই শরীক করে না। তিনি যা হালাল করেছেন তা হালাল মানে, যা হারাম করেছেন তা হারাম মানে, তাঁর উপদেশ রক্ষা করে। আর সে নিশ্চিত থাকে যে তাঁর সঙ্গে সাক্ষাৎ হবে এবং আমলের হিসাব দিতে হবে। বাগাভীর বর্ণনায় আল্লাহর উদ্দেশ্য এই: আমার সৃষ্টির মধ্যে আমাকে ভয় করে কেবল তারাই, যারা আমার প্রবল ক্ষমতা, আমার মহিমা ও আমার রাজত্ব জানে।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the boundary: the 'ulama' here are those who know Allah's being and attributes and keep His power and His favours in view, and in the Qur'an's usage no one becomes an 'alim merely by knowing Arabic, grammar and rhetoric. Ibn Kathir records, from Sufyan ath-Thawri through a man who said it used to be said, that scholars are of three kinds: those who know Allah and His command, those who know Allah but not His command, and those who know His command but not Allah. The last kind knows the limits and duties and does not fear Allah.",
            "bn": "মাআরিফুল কুরআন সীমারেখাটা টেনে দেয়। এখানে উলামা মানে যাঁরা আল্লাহর সত্তা ও গুণাবলি জানেন, আর তাঁর কুদরত ও নিয়ামত সবসময় চোখের সামনে রাখেন। কুরআনের পরিভাষায় শুধু আরবি ভাষা, ব্যাকরণ আর অলংকারশাস্ত্র জানলেই কেউ আলিম হয় না। ইবন কাসীর সুফিয়ান সাওরী থেকে একজনের সূত্রে লিখেছেন, যিনি বলেছেন, আগে বলা হতো: আলিমরা তিনটি শ্রেণিতে বিভক্ত। একজন আল্লাহকেও জানেন, তাঁর বিধানও জানেন। একজন আল্লাহকে জানেন, কিন্তু তাঁর বিধান জানেন না। আরেকজন বিধান জানে, কিন্তু আল্লাহকে জানে না। এই শেষজন সীমা ও ফরযগুলো জানে, অথচ আল্লাহকে ভয় করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear as the Measure",
          "bn": "ভয়ই যখন মাপকাঠি"
        },
        "p": [
          {
            "en": "The early sayings the tafsirs gather all measure knowledge by fear. Ibn Mas'ud (RA), in Ibn Kathir: knowledge does not come from much narration, it comes from much fear. Fear of Allah suffices as knowledge, and being deluded about Him suffices as ignorance: al-Qurtubi gives this to Ibn Mas'ud, al-Baghawi to Masruq. Qatada, in at-Tabari: it used to be said, awe suffices as knowledge. Mujahid: the 'alim is only he who fears Allah. Ar-Rabi' ibn Anas: whoever does not fear Allah is no 'alim. When a man addressed ash-Sha'bi as scholar, he answered with Mujahid's words.",
            "bn": "তাফসীরগুলোতে সংকলিত সালাফের উক্তিগুলো সবই জ্ঞানকে মাপে ভয় দিয়ে। ইবন কাসীরের গ্রন্থে ইবন মাসঊদ (রাঃ): বেশি বর্ণনা থেকে ইলম আসে না, ইলম আসে বেশি ভয় থেকে। আল্লাহর ভয়ই ইলম হিসেবে যথেষ্ট, আর তাঁর ব্যাপারে ধোঁকায় পড়াই মূর্খতা হিসেবে যথেষ্ট: কুরতুবী এ কথা ইবন মাসঊদের বলে উল্লেখ করেন, বাগাভী মাসরুকের। তাবারীর গ্রন্থে কাতাদা: আগে বলা হতো, ভীতিই ইলম হিসেবে যথেষ্ট। মুজাহিদ বলেন, আলিম কেবল সে, যে আল্লাহকে ভয় করে। রবী' ইবন আনাস বলেন, যে আল্লাহকে ভয় করে না সে আলিম নয়। এক লোক শা'বীকে আলিম বলে সম্বোধন করলে তিনি জবাব দেন মুজাহিদের সেই কথাতেই।"
          },
          {
            "en": "None of this belittles learning. Ibn Kathir quotes Malik: knowledge is not much narration, it is a light Allah places in the heart. He then gives Ahmad ibn Salih al-Misri's explanation. Fear is not reached by much narration, but the knowledge Allah obliged people to follow, the Book, the Sunnah and what came from the Companions and the imams after them, is reached only by narration; the light means understanding that knowledge and grasping its meanings. Sa'id ibn Jubayr gives the practical test: fear is what stands between you and disobeying Allah.",
            "bn": "এর কোনোটিই ইলমকে ছোট করে না। ইবন কাসীর মালিকের উক্তি আনেন: বেশি বর্ণনার নাম ইলম নয়, ইলম এক আলো, যা আল্লাহ অন্তরে রেখে দেন। তারপর তিনি আহমাদ ইবন সালিহ আল-মিসরীর ব্যাখ্যা দেন। ভয় বেশি বর্ণনা দিয়ে অর্জিত হয় না। কিন্তু যে ইলম অনুসরণ করা আল্লাহ ফরয করেছেন, অর্থাৎ কিতাব, সুন্নাহ, আর সাহাবা ও তাঁদের পরের ইমামদের কাছ থেকে যা এসেছে, তা বর্ণনা ছাড়া পাওয়া যায় না। আলো মানে সেই ইলম বোঝা আর তার অর্থ ধরতে পারা। সাঈদ ইবন জুবাইর দেন হাতেকলমে পরীক্ষাটা: ভয় সেটাই, যা তোমার আর আল্লাহর নাফরমানির মাঝে আড়াল হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Most Knowing, Most Fearing",
          "bn": "সবচেয়ে বেশি জানা, সবচেয়ে বেশি ভয়"
        },
        "p": [
          {
            "en": "Al-Baghawi attaches a hadith to the verse, with his chain running through al-Bukhari, who records it in his Sahih (6101) from 'Aisha (RA): \"The Prophet ﷺ did something and allowed his people to do it, but some people refrained from doing it. When the Prophet ﷺ learned of that, he delivered a sermon, and after having sent Praises to Allah, he said, 'What is wrong with such people as refrain from doing a thing that I do? By Allah, I know Allah better than they, and I am more afraid of Him than they.'\"",
            "bn": "বাগাভী এ আয়াতের সঙ্গে একটি হাদীস যুক্ত করেন। তাঁর সনদ গেছে বুখারীর মধ্য দিয়ে, আর বুখারী তা তাঁর সহীহ গ্রন্থে (৬১০১) আয়েশা (রাঃ) থেকে বর্ণনা করেছেন: \"নবী ﷺ একটি কাজ করলেন এবং তাতে অনুমতি দিলেন। কিন্তু কিছু লোক তা থেকে দূরে রইল। খবরটি নবী ﷺ-এর কাছে পৌঁছলে তিনি খুতবা দিলেন। আল্লাহর প্রশংসা করে বললেন: লোকদের কী হলো যে আমি যে কাজ করি তা থেকে তারা দূরে থাকে? আল্লাহর কসম, আমি তাদের সবার চেয়ে আল্লাহকে বেশি জানি, আর তাদের সবার চেয়ে তাঁকে বেশি ভয় করি।\""
          },
          {
            "en": "The hadith joins the verse's two terms in one person: the most knowing of Allah is the most fearing of Him. It also shows what that fear is not. The people held back from something he had done and permitted, and he rebuked them for it; holding back beyond his example did not count as the greater fear. Al-Qurtubi also brings, through ad-Darimi from Makhul, a report that the Prophet ﷺ spoke of the scholar's rank over the worshipper and then recited this verse. He marks it mursal himself, a chain that skips the Companion, so it is not relied on here.",
            "bn": "হাদীসটি আয়াতের দুটি শব্দকে একজন মানুষের মধ্যে মিলিয়ে দেয়: যিনি আল্লাহকে সবচেয়ে বেশি জানেন, তিনিই তাঁকে সবচেয়ে বেশি ভয় করেন। ভয় কী নয়, সেটাও এতে বোঝা যায়। তিনি যা করেছেন এবং অনুমতি দিয়েছেন, লোকেরা তা থেকে দূরে রইল, আর তিনি এর জন্য তাদের তিরস্কার করলেন। তাঁর আদর্শ ছাড়িয়ে এড়িয়ে চলাকে বেশি ভয় বলে ধরা হয়নি। কুরতুবী দারিমীর সূত্রে মাকহূল থেকে আরেকটি বর্ণনা আনেন। তাতে আছে, নবী ﷺ আবিদের উপর আলিমের মর্যাদার কথা বলে এ আয়াত তিলাওয়াত করেন। কুরতুবী নিজেই একে মুরসাল বলেছেন, অর্থাৎ সনদে সাহাবীর নাম বাদ পড়েছে। তাই এখানে এর উপর ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Mighty, Forgiving",
          "bn": "পরাক্রম আর ক্ষমা"
        },
        "p": [
          {
            "en": "The verse closes: inna-llaha 'azizun ghafur, Allah is Mighty, Forgiving. At-Tabari: mighty in His vengeance on whoever disbelieves in Him, forgiving of the sins of whoever believes in Him and obeys Him. In the passage al-Qurtubi quotes from az-Zamakhshari, the two names give the reason fear is due: they point to the punishing and subduing of the disobedient and to the rewarding and pardoning of the obedient, and He who punishes and rewards has the right to be feared. As-Sa'di adds that His might is seen in creating these contrasting creatures.",
            "bn": "আয়াত শেষ হয়: ইন্নাল্লাহা আযীযুন গাফূর, আল্লাহ পরাক্রমশালী, ক্ষমাশীল। তাবারী বলেন: যে তাঁকে অস্বীকার করে তার থেকে প্রতিশোধ নেওয়ায় তিনি পরাক্রমশালী, আর যে ঈমান আনে ও আনুগত্য করে তার গুনাহ তিনি ক্ষমা করেন। কুরতুবী যামাখশারী থেকে যে অংশ উদ্ধৃত করেছেন, তাতে নাম দুটিকে ভয় আবশ্যক হওয়ার কারণ বলা হয়েছে। এগুলো জানিয়ে দেয়, তিনি নাফরমানদের শাস্তি দেন ও দমন করেন, আর অনুগতদের প্রতিদান দেন ও মাফ করেন। যিনি শাস্তিও দেন, প্রতিদানও দেন, ভয় পাওয়ার হক তাঁরই। সা'দী যোগ করেন, এই পরস্পরবিরোধী সৃষ্টিগুলো বানানোতেই তাঁর পরাক্রম দেখা যায়।"
          },
          {
            "en": "Ibn Kathir reports that al-Hasan al-Basri, after describing the 'alim as a person who fears ar-Rahman unseen, recited the verse through to these two names. Al-Qurtubi gives 'Ali (RA)'s description of the true faqih: he does not make people despair of Allah's mercy, nor give them licence in sins, nor make them feel safe from His punishment, nor leave the Qur'an for something else. The next verses, 35:29 and 35:30, describe those who recite Allah's Book, pray and spend, hoping for a trade that will never fail.",
            "bn": "ইবন কাসীর জানান, হাসান বসরী আলিমের পরিচয় দিয়েছিলেন এভাবে: যে না দেখে রহমানকে ভয় করে। তারপর তিনি এই দুই নাম পর্যন্ত আয়াতটি তিলাওয়াত করেন। কুরতুবী আলী (রাঃ)-এর মুখে প্রকৃত ফকীহর পরিচয় তুলে ধরেন। তিনি মানুষকে আল্লাহর রহমত থেকে নিরাশ করেন না, গুনাহের ছাড়ও দেন না। তাঁর আযাব থেকে তাদের নিশ্চিন্তও করেন না, আর কুরআন ছেড়ে অন্য কিছুর দিকে যান না। পরের আয়াত ৩৫:২৯ ও ৩৫:৩০ বলে তাদের কথা, যারা আল্লাহর কিতাব তিলাওয়াত করে, নামায কায়েম করে, দান করে, আর এমন ব্যবসার আশা রাখে যাতে কখনো লোকসান নেই।"
          }
        ]
      }
    ]
  },
  "35:29-30": {
    "sections": [
      {
        "h": {
          "en": "Three Acts and a Hope",
          "bn": "তিনটি কাজ ও একটি আশা"
        },
        "p": [
          {
            "en": "35:29 names three acts and then a posture. The acts are reciting the Book of Allah, establishing the prayer, and spending from what He has provided — that third one carrying a doubled manner, secretly and publicly, rather than counting as two. Then the posture: yarjuna, they hope for a trade that will never go dead. The hope is listed as part of what characterises them, not as a footnote to the deeds.",
            "bn": "তিনটি কাজের কথা বলে ৩৫:২৯ আয়াত, তারপর একটি মনোভাবের। কাজ তিনটি হলো: আল্লাহর কিতাব তিলাওয়াত করা, নামাজ কায়েম করা, আর তিনি যে রিজিক দিয়েছেন তা থেকে খরচ করা। তৃতীয়টির সঙ্গে দুটি ধরন জুড়ে আছে, গোপনে ও প্রকাশ্যে, তবু তা দুটি কাজ হিসেবে গোনা হয় না। তারপর মনোভাব: ইয়ারজূনা, তারা এমন এক ব্যবসার আশা রাখে যা কখনো অচল হবে না। এই আশাটাও এখানে তাদের পরিচয়েরই অংশ, আমলের পাশে কোনো পাদটীকা নয়।"
          },
          {
            "en": "Placement explains the choice of the first act. 35:28 has just said that among His servants it is only those who have knowledge who fear Allah. Then this verse opens with inna alladhina, indeed those who — and describes what such people do. The commentators read the join: having identified who truly fears Him, the passage names their practice, and it begins with the recitation through which the knowledge was got.",
            "bn": "প্রথম কাজটি কেন তিলাওয়াত, তা বোঝা যায় আয়াতের অবস্থান দেখলে। ঠিক আগে ৩৫:২৮ আয়াত বলেছে, তাঁর বান্দাদের মধ্যে কেবল জ্ঞানীরাই আল্লাহকে ভয় করে। তারপর এই আয়াত শুরু হয় ইন্নাল্লাযীনা দিয়ে, অর্থাৎ 'নিশ্চয় যারা', আর বলে দেয় এমন মানুষেরা কী করে। মুফাসসিরগণ দুই আয়াতের এই জোড়টা এভাবে পড়েন: কারা সত্যিই তাঁকে ভয় করে তা জানানোর পর আয়াত তাদের আমলের কথা বলে, আর শুরু করে সেই তিলাওয়াত দিয়ে, যার মাধ্যমেই তারা জ্ঞান পেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Trade That Will Not Go Dead",
          "bn": "যে ব্যবসা কখনো অচল হবে না"
        },
        "p": [
          {
            "en": "Tijara is trade, and lan tabur is an emphatic negation of the future. The verb comes from a root whose sense is ruin and idleness: bur land is ground that grows nothing, and merchandise described from this root is stock nobody will take. A merchant's real fear is not only theft. It is a warehouse of goods that have quietly stopped being worth anything. That is the fear the verse cancels.",
            "bn": "তিজারা মানে ব্যবসা। আর লান তাবূর হলো ভবিষ্যৎ নিয়ে জোর দিয়ে বলা 'না': এমনটা কখনোই হবে না। ক্রিয়াপদটির মূল ধাতুর অর্থ ধ্বংস আর অচল পড়ে থাকা। 'বূর' জমি হলো এমন জমি যেখানে কিছুই জন্মায় না, আর এই ধাতু দিয়ে যে পণ্যের কথা বলা হয়, তা এমন মাল যা কেউ নিতে চায় না। ব্যবসায়ীর আসল ভয় শুধু চুরি নয়। তার ভয়, গুদামভরা মাল একদিন চুপচাপ সব দাম হারিয়ে বসে থাকবে। আয়াতটি ঠিক এই ভয়টাই মুছে দেয়।"
          },
          {
            "en": "The same root turns up earlier in this very surah, applied to the opposite party. 35:10 says of those who plot evil deeds that their plotting, it is what goes to ruin — huwa yabur. Surah Fatir sets its two ledgers against each other using one word. The schemer's investment goes dead; the reciter's does not. That is not a coincidence of vocabulary but the surah making its argument twice with the same verb.",
            "bn": "এই ধাতু এই সূরাতেই আগে একবার এসেছে, তবে উল্টো দলের বেলায়। ৩৫:১০ আয়াত মন্দ চক্রান্তকারীদের সম্পর্কে বলে, তাদের চক্রান্তই ধ্বংস হয়ে যায়: হুয়া ইয়াবূর। একটিমাত্র শব্দ দিয়ে সূরা ফাতির দুই পক্ষের হিসাবের খাতা মুখোমুখি দাঁড় করায়। চক্রান্তকারীর বিনিয়োগ অচল হয়ে যায়, তিলাওয়াতকারীর হয় না। এটা শব্দের কাকতালীয় মিল নয়। একই ক্রিয়াপদ দিয়ে সূরাটি নিজের যুক্তিটা দুবার বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope on One Side, Guarantee on the Other",
          "bn": "একদিকে আশা, অন্যদিকে অঙ্গীকার"
        },
        "p": [
          {
            "en": "Notice who says what. The servants hope. The verse gives their posture as raja', not as certainty about their own acceptance — the modesty the classical scholars insist on regarding one's own deeds. Then 35:30 answers in the language of obligation: li yuwaffiyahum ujurahum, that He may pay them their wages in full. Wafa is discharging what is owed down to the last part of it. The servant hopes; Allah undertakes.",
            "bn": "খেয়াল করুন, কে কী বলছে। বান্দারা আশা করে। আয়াত তাদের অবস্থাকে বলেছে রাজা', অর্থাৎ আশা; নিজের আমল কবুল হবেই বলে নিশ্চিত হয়ে বসে থাকা নয়। নিজের আমলের ব্যাপারে এই বিনয়ের ওপরই পূর্বসূরি আলিমগণ জোর দিয়ে গেছেন। তারপর ৩৫:৩০ আয়াত জবাব দেয় দায় মেটানোর ভাষায়: লিইউওয়াফফিয়াহুম উজূরাহুম, যাতে তিনি তাদের পারিশ্রমিক পুরোপুরি দিয়ে দেন। ওয়াফা মানে যা পাওনা, তা শেষ কণাটি পর্যন্ত মিটিয়ে দেওয়া। বান্দা আশা করে, আর আল্লাহ দায়িত্ব নেন।"
          },
          {
            "en": "And two things are promised, not one. Full payment comes first, then wa yazidahum min fadlihi, and He will increase them from His bounty. The verse labels the second as fadl, the word for what is given beyond entitlement. Payment in full is justice and can be claimed; increase is bounty and cannot. Nothing in a servant's work generates the second half, which is why the verse names its source.",
            "bn": "ওয়াদাও একটি নয়, দুটি। প্রথমে পূর্ণ পারিশ্রমিক, তারপর ওয়া ইয়াযীদাহুম মিন ফাদলিহি: আর তিনি নিজ অনুগ্রহে তাদের আরও বাড়িয়ে দেবেন। দ্বিতীয়টিকে আয়াত বলেছে ফাদ্‌ল, অর্থাৎ প্রাপ্যের বাইরে যা দেওয়া হয়। পুরো পারিশ্রমিক হলো ইনসাফ, তা দাবি করা যায়। বাড়তিটা অনুগ্রহ, তা দাবি করা যায় না। বান্দার আমল থেকে এই দ্বিতীয় অংশটা আসে না, তাই আয়াত নিজেই বলে দেয় এর উৎস কোথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ghafur, Shakur",
          "bn": "গাফূর, শাকূর"
        },
        "p": [
          {
            "en": "The closing pair is not the one a reader expects after a passage on reward. Al-Ghafur covers the defects inside the deeds themselves — the recitation the mind wandered through, the prayer that was hurried, the charity mixed with a wish to be seen. Ash-Shakur is the One who appreciates the small and returns much for it. Between the two names, a flawed record can still trade.",
            "bn": "প্রতিদানের কথার পর পাঠক যে দুটি নাম আশা করেন, আয়াতের শেষে সেই দুটি আসে না। আল-গাফূর আমলের ভেতরের ত্রুটিগুলো ঢেকে দেন: যে তিলাওয়াতে মন অন্য কোথাও ঘুরে বেড়িয়েছে, যে নামাজ তাড়াহুড়ো করে পড়া হয়েছে, যে দানের সঙ্গে লোকে দেখুক এমন ইচ্ছা মিশে গেছে। আশ-শাকূর তিনি, যিনি অল্প আমলেরও কদর করেন এবং বিনিময়ে অনেক ফিরিয়ে দেন। এই দুই নামের ছায়ায় খুঁতওয়ালা খাতাও ব্যবসা চালিয়ে যেতে পারে।"
          },
          {
            "en": "Fatir is honest about that record a few verses later. 35:32 says We caused the Book to be inherited by those We chose from among Our servants, and then sorts them into one who wrongs himself, one who is moderate, and one foremost in good deeds by the permission of Allah — with all three counted among the chosen. The surah does not pretend that the people who recite and pray and give are a class of the faultless.",
            "bn": "কয়েক আয়াত পরেই সূরা ফাতির এই খাতার কথা খোলাখুলি স্বীকার করে। ৩৫:৩২ আয়াত বলে, আমি আমার বান্দাদের মধ্যে যাদের বেছে নিয়েছি, তাদের কিতাবের উত্তরাধিকারী করেছি। তারপর তাদের তিন ভাগ করে: কেউ নিজের ওপর জুলুম করে, কেউ মাঝামাঝি পথে চলে, আর কেউ আল্লাহর অনুমতিতে নেক কাজে সবার আগে। তিন দলই কিন্তু মনোনীতদের মধ্যে গণ্য। যারা তিলাওয়াত করে, নামাজ পড়ে আর দান করে, সূরাটি তাদের নির্ভুল মানুষের দল বলে ভান করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Secretly and Publicly",
          "bn": "গোপনে ও প্রকাশ্যে"
        },
        "p": [
          {
            "en": "Sirran wa 'alaniyatan names both manners and prefers neither. 2:271 makes the finer judgement: disclosing charity is good, but concealing it and giving it to the poor is better for you. There is no contradiction — this verse praises a life containing both, and that one rates them. The open gift builds a norm others can follow; the hidden one guards the giver's heart. 14:31 pairs the same two words with prayer and spending.",
            "bn": "সিররান ওয়া 'আলানিয়াতান দুটি ধরনেরই উল্লেখ করে, কোনোটিকে এগিয়ে রাখে না। সূক্ষ্ম বিচারটা দেয় ২:২৭১ আয়াত: দান প্রকাশ্যে করা ভালো, কিন্তু গোপনে দরিদ্রদের দেওয়া তোমাদের জন্য আরও উত্তম। এতে কোনো বিরোধ নেই। এই আয়াত এমন জীবনের প্রশংসা করে যেখানে দুটিই আছে, আর ওই আয়াত বলে দেয় দুটির মধ্যে কোনটি বেশি ভালো। প্রকাশ্য দান একটা রীতি গড়ে তোলে, যা দেখে অন্যরাও করে। গোপন দান দাতার অন্তরকে পাহারা দেয়। ১৪:৩১ আয়াতেও এই দুটি শব্দ নামাজ আর খরচের সঙ্গে জোড়া বেঁধে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It as a Ledger",
          "bn": "একে খাতা হিসেবে পড়া"
        },
        "p": [
          {
            "en": "The commercial language is deliberate and the Quran uses it elsewhere on purpose. 9:111 says Allah has purchased from the believers their lives and their properties in exchange for the Garden, and 61:10-11 opens with an offer of a transaction that saves from a painful punishment. What these share is that the price and the return are named in advance. A believer is not asked to give blindly; he is shown the terms and invited to accept them.",
            "bn": "ব্যবসার ভাষাটা এখানে ভেবেচিন্তেই আনা, আর কুরআন অন্য জায়গাতেও জেনেবুঝে এ ভাষা ব্যবহার করে। ৯:১১১ আয়াত বলে, আল্লাহ মুমিনদের কাছ থেকে তাদের জান ও মাল কিনে নিয়েছেন জান্নাতের বিনিময়ে। ৬১:১০-১১ আয়াত শুরু হয় এমন এক লেনদেনের প্রস্তাব দিয়ে, যা যন্ত্রণাদায়ক শাস্তি থেকে বাঁচায়। সবগুলোতে মিল একটাই: দাম কী আর বিনিময়ে কী মিলবে, তা আগেই বলে দেওয়া। মুমিনকে চোখ বুজে দিয়ে যেতে বলা হয় না। শর্তগুলো তার সামনে খুলে রেখে তাকে রাজি হতে ডাকা হয়।"
          },
          {
            "en": "Practically, the three acts are all small and repeatable, which is the point of listing these three rather than three heroic ones. A portion of the Book each day. The prayers kept at their times rather than gathered up at night. Something given regularly that nobody is told about, alongside what is given openly. This trade does not require large capital to open. It requires that the shop not stay shut.",
            "bn": "বাস্তব জীবনে তিনটি কাজই ছোট, আর বারবার করা যায়। বড় বড় বীরত্বের কাজ না এনে ঠিক এই তিনটির কথা বলার কারণও এটাই। প্রতিদিন কিতাবের কিছু অংশ। নামাজ যার যার ওয়াক্তে আদায় করা, রাতে একসঙ্গে জমিয়ে পড়া নয়। প্রকাশ্যে যা দেওয়া হয় তার পাশাপাশি নিয়মিত এমন কিছু দান, যার কথা কাউকে বলা হয় না। এই ব্যবসা খুলতে বড় পুঁজি লাগে না। লাগে শুধু এটুকু, দোকানটা যেন বন্ধ পড়ে না থাকে।"
          }
        ]
      }
    ]
  },
  "35:34": {
    "sections": [
      {
        "h": {
          "en": "The First Word They Speak",
          "bn": "প্রথম যে কথাটি তারা বলে"
        },
        "p": [
          {
            "en": "Just before this verse, the people of Paradise are shown entering gardens of perpetual residence, adorned with bracelets of gold and pearls, their garments of silk (35:33). It is a scene of pure reward. Then, in 35:34, they speak. What is the first sentence from the mouths of the saved? Not a word about the gold, not a sigh over the gates safely behind them. They begin with praise: al-hamdu lillah, all praise belongs to Allah. The reward is on their bodies; the first thing they reach for is His name.",
            "bn": "এই আয়াতের ঠিক আগে জান্নাতবাসীদের কথা এসেছে: তারা স্থায়ী জান্নাতে ঢুকছে, সোনা আর মুক্তার কঙ্কণে সাজানো, গায়ে রেশমের পোশাক (৩৫:৩৩)। পুরোটাই প্রতিদানের দৃশ্য। তারপর ৩৫:৩৪ আয়াতে তারা মুখ খোলে। মুক্তিপ্রাপ্তদের মুখে প্রথম বাক্যটি কী? সোনা নিয়ে একটি শব্দও নয়, নিরাপদে পেছনে পড়ে থাকা দরজা নিয়ে কোনো নিঃশ্বাসও নয়। তারা শুরু করে প্রশংসা দিয়ে: আলহামদু লিল্লাহ, যাবতীয় প্রশংসা আল্লাহর। প্রতিদান তাদের গায়ে, কিন্তু প্রথম যেটা তারা আঁকড়ে ধরে তা তাঁরই নাম।"
          },
          {
            "en": "Notice, too, what they praise Him for. Of everything now theirs, they single out one mercy: that He has removed from them al-hazan, the grief. The jewels go unmentioned; the sorrow that is gone gets the sentence. It is a telling choice. A person who has carried a weight for years feels its lifting more sharply than any new gift. The verse lets us hear joy from the inside, and the shape of that joy is relief.",
            "bn": "আরও খেয়াল করুন, কোন জিনিসের জন্য তারা তাঁর প্রশংসা করছে। এখন সবকিছুই তাদের, তবু তারা একটি দয়ার কথাই বেছে নেয়: তিনি তাদের থেকে আল-হাযান, অর্থাৎ দুঃখ, সরিয়ে দিয়েছেন। গয়নার কথা ওঠেই না; বাক্যটা জুড়ে আছে চলে যাওয়া দুঃখ। এই বেছে নেওয়াটা অনেক কিছু বলে। বছরের পর বছর যে মানুষ একটা বোঝা বয়ে বেড়িয়েছে, নতুন যেকোনো উপহারের চেয়ে সেই বোঝা নামার স্বস্তিটাই সে বেশি টের পায়। আয়াতটি ভেতর থেকে আনন্দটা শোনায়, আর সেই আনন্দের চেহারা হলো স্বস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grief That Is Lifted",
          "bn": "যে দুঃখ উঠে গেছে"
        },
        "p": [
          {
            "en": "What was this grief? Ibn Kathir reads al-hazan as the fear of everything a person dreads. Allah, he says, has pushed it away from them and relieved them of all they used to fear, the anxieties of this world and of the next alike. On his reading the word is deliberately wide. It is not a single named fear but the whole background hum of dread a believing life carries: the open questions, the unpaid debts of the soul, the quiet worry about how things will end. All of it, he says, is lifted at the threshold.",
            "bn": "এই দুঃখটা কী ছিল? ইবন কাসীরের মতে আল-হাযান হলো মানুষ যা কিছু ভয় পায়, তার সবকিছুর ভয়। তিনি বলেন, আল্লাহ সেই ভয় তাদের থেকে সরিয়ে দিয়েছেন; দুনিয়া আর আখিরাতের যত দুশ্চিন্তা তারা করত, সব থেকে তাদের মুক্ত করেছেন। তাঁর ব্যাখ্যায় শব্দটি ইচ্ছে করেই ব্যাপক। এটা নাম ধরে বলা কোনো একটা ভয় নয়। ঈমানদারের জীবনে সারাক্ষণ পেছনে যে চাপা ভয় লেগে থাকে, এটা তার পুরোটা: উত্তর না-মেলা প্রশ্নগুলো, অন্তরের শোধ না-হওয়া দেনা, শেষটা কেমন হবে সেই নীরব দুশ্চিন্তা। তিনি বলেন, এর সবটাই জান্নাতের দোরগোড়ায় পৌঁছেই উঠে যায়।"
          },
          {
            "en": "At-Tabari spreads the same word out into its parts. The fear of entering the Fire is grief, he writes; the dread of death is grief; even the dread of needing food is grief. He then makes a careful point about the verse's silence. When Allah reports that they praised Him for removing al-hazan, He did not restrict it to any single kind over another. They meant to take in every kind of grief together, and that is right, for whoever enters Paradise has no grief left after that.",
            "bn": "তাবারী একই শব্দকে ভেঙে তার অংশগুলো দেখান। তিনি লেখেন, জাহান্নামে ঢোকার ভয় দুঃখ; মৃত্যুর আতঙ্ক দুঃখ; এমনকি খাবারের অভাবের দুশ্চিন্তাও দুঃখ। তারপর আয়াতের নীরবতা নিয়ে তিনি একটা সূক্ষ্ম কথা বলেন। আল্লাহ যখন জানালেন যে আল-হাযান দূর করার জন্য তারা তাঁর প্রশংসা করেছে, তখন তিনি কথাটাকে কোনো এক ধরনের দুঃখে সীমিত করেননি। তারা সব রকম দুঃখ একসঙ্গে বোঝাতে চেয়েছে, আর সেটাই ঠিক, কারণ যে জান্নাতে ঢোকে তার এরপর আর কোনো দুঃখ বাকি থাকে না।"
          },
          {
            "en": "At-Tabari also preserves an early comment from Qatada: in the world these people worked and wore themselves out while living in fear and grief. That line quietly reframes the reward. The rest they now enjoy is measured against a life that was not restful. They were not strangers to worry; they prayed and gave and still lay awake. So when the grief lifts, it lifts from those who knew its full weight; the relief, not the finery, is what they praise.",
            "bn": "তাবারী কাতাদার একটি প্রাচীন মন্তব্যও বর্ণনা করেছেন: দুনিয়াতে এই মানুষগুলো খেটেছে, নিজেদের ক্লান্ত করেছে, আর দিন কাটিয়েছে ভয় ও দুঃখের মধ্যে। কথাটা চুপচাপ প্রতিদানের ছবিটাই বদলে দেয়। এখন তারা যে আরাম পাচ্ছে, তার মাপকাঠি এমন এক জীবন যেখানে আরাম ছিল না। দুশ্চিন্তা তাদের অচেনা ছিল না; তারা নামাজ পড়ত, দান করত, তবু রাতে ঘুম আসত না। তাই দুঃখ যখন উঠে যায়, তা উঠে যায় এমন মানুষদের কাঁধ থেকে, যারা এর পুরো ভার জানত। তারা প্রশংসা করে এই স্বস্তির জন্য, জাঁকজমকের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Catalogue of Sorrows",
          "bn": "দুঃখের ফিরিস্তি"
        },
        "p": [
          {
            "en": "Al-Baghawi gathers the early readings side by side, and the range is striking. Ibn Abbas took the grief to be the grief of the Fire; Qatada, the grief of death; Muqatil said they had grieved because they did not know what Allah would do with them. Ikrima named the grief of sins and the fear that their acts of obedience might be refused. Each commentator reached for the fear that weighs heaviest on a sincere heart, and the Qur'an's single word holds all of them without choosing.",
            "bn": "বাগভী পূর্বসূরিদের ব্যাখ্যাগুলো পাশাপাশি সাজিয়ে দেন, আর মতের বিস্তার দেখে অবাক হতে হয়। ইবন আব্বাসের মতে এ দুঃখ জাহান্নামের দুঃখ; কাতাদার মতে মৃত্যুর দুঃখ; মুকাতিল বলেন, তারা দুঃখে থাকত, কারণ জানত না আল্লাহ তাদের নিয়ে কী করবেন। ইকরিমা বলেন গুনাহের দুঃখের কথা, আর এই ভয়ের কথা যে তাদের আনুগত্যের আমল হয়তো কবুল হবে না। প্রত্যেক তাফসীরকার সেই ভয়টাই বেছে নিয়েছেন, যা একনিষ্ঠ অন্তরে সবচেয়ে ভারী হয়ে চেপে বসে। আর কুরআনের একটিমাত্র শব্দ কোনোটাকে বাদ না দিয়ে সবগুলোকেই ধারণ করে।"
          },
          {
            "en": "The list runs on. Al-Qasim spoke of the grief of blessings slipping away and a heart that keeps turning, the fear of how one ends up. Said ibn Jubayr, more plainly, named the daily grief over bread, the worry of making a living. Al-Baghawi closes the gathering with az-Zajjaj, who ties the thread together: Allah has removed from the people of Paradise every grief they ever carried, whether it belonged to their livelihood or to their life to come. The small worries and the large ones go out by the same door.",
            "bn": "তালিকা এখানেই শেষ নয়। কাসিম বলেছেন নিয়ামত হাতছাড়া হওয়ার দুঃখের কথা, আর বারবার ঘুরে যাওয়া অন্তরের কথা, অর্থাৎ শেষ পরিণতি কী হবে সেই ভয়। সাঈদ ইবন জুবাইর আরও সাদামাটা করে বলেছেন রুটি-রুজির রোজকার দুঃখের কথা, জীবিকা জোগানোর দুশ্চিন্তা। বাগভী এই আলোচনা শেষ করেন যাজ্জাজের কথা দিয়ে, যিনি সব সুতো এক জায়গায় বাঁধেন: জান্নাতবাসীরা কখনো যত দুঃখ বয়েছে, আল্লাহ তার সবই সরিয়ে দিয়েছেন, তা জীবিকার হোক বা আখিরাতের। ছোট দুশ্চিন্তা আর বড় দুশ্চিন্তা একই দরজা দিয়ে বেরিয়ে যায়।"
          },
          {
            "en": "One difference among the commentators is worth keeping as a difference. At-Tabari records a second view, that the grief meant is specifically the distress that overtakes the one who wronged himself while he waits at the Judgement; he judged the wider sense the stronger. Al-Qurtubi, citing ath-Thaalabi, leaned the other way, reading the verse against the three classes named earlier in 35:32 and calling that reading the sound one. The verse is rich enough to carry both.",
            "bn": "তাফসীরকারদের একটা মতপার্থক্য পার্থক্য হিসেবেই রাখা ভালো। তাবারী দ্বিতীয় একটি মত তুলে ধরেন: এখানে দুঃখ বলতে বিশেষভাবে সেই কষ্ট, যা হিসাবের অপেক্ষায় দাঁড়ানো অবস্থায় নিজের উপর জুলুমকারীকে পেয়ে বসে; তবে তিনি প্রশস্ত অর্থটাকেই বেশি জোরালো মনে করেন। কুরতুবী সালাবির বরাতে উল্টো দিকে ঝোঁকেন, আয়াতটিকে ৩৫:৩২ আয়াতে আগে বলা তিনটি শ্রেণির সঙ্গে মিলিয়ে পড়েন আর সেই পড়াকেই সহীহ বলেন। আয়াত দুই অর্থই বইতে যথেষ্ট প্রশস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Paradise Without a Shadow",
          "bn": "ছায়াহীন জান্নাত"
        },
        "p": [
          {
            "en": "As-Sadi draws out what the absence of grief actually means inside the Garden. When their bliss was complete and their pleasure perfected, he writes, they said this. And the grief that is gone, on his reading, covers every kind: no grief will reach them from any flaw in their beauty, none in their food or drink, none in their pleasures, none in their own bodies, and none from any fear that the stay might end. Every corner of worry that shadows pleasure here has simply been removed there.",
            "bn": "জান্নাতে দুঃখ না থাকার মানে আসলে কী, সা'দী তা খুলে বলেন। তিনি লেখেন, যখন তাদের নিয়ামত পূর্ণ হলো আর আনন্দ পরিপূর্ণ হলো, তখনই তারা এ কথা বলল। তাঁর ব্যাখ্যায়, যে দুঃখ চলে গেছে তা সব রকমের দুঃখ: তাদের সৌন্দর্যে কোনো খুঁত থেকে দুঃখ আসবে না, খাবার বা পানীয় থেকে নয়, ভোগের আনন্দ থেকে নয়, নিজেদের শরীর থেকে নয়, আর এই ভয় থেকেও নয় যে এই থাকা একদিন ফুরিয়ে যাবে। এখানে আনন্দের ওপর যত দুশ্চিন্তার ছায়া পড়ে, সেখানে তার সবটাই তুলে নেওয়া হয়েছে।"
          },
          {
            "en": "That last point carries real weight. Much of what spoils joy in this life is not the joy failing but the knowing it will end; the finest evening is edged with its own closing. As-Sadi presses exactly there: their bliss is one they see no limit to, and it keeps increasing for ever and ever. Grief needs a shadow to fall across, a sense of loss waiting ahead. Remove the ending, and you have removed the very thing that could have dimmed the light. So their praise is for comfort made permanent.",
            "bn": "শেষ কথাটার ওজন সত্যিই অনেক। এ দুনিয়ায় আনন্দ যে নষ্ট হয়, তা প্রায়ই আনন্দ কম পড়ার কারণে নয়, বরং একদিন তা ফুরাবে এটা জানা থাকার কারণে। সবচেয়ে সুন্দর সন্ধ্যাটার গায়েও লেগে থাকে তার শেষ হয়ে যাওয়ার ছোঁয়া। সা'দী ঠিক এ জায়গাতেই জোর দেন: তাদের নিয়ামতের কোনো সীমা তারা দেখে না, আর তা চিরকাল বেড়েই চলে। দুঃখ নামতে হলে একটা ছায়া লাগে, সামনে কোথাও অপেক্ষা করে থাকা কিছু হারানোর বোধ। শেষটাই যদি সরিয়ে নেওয়া হয়, তবে আলো ম্লান করার মতো আর কিছুই থাকে না। তাই তাদের প্রশংসা সেই আরামের জন্য, যা চিরস্থায়ী করে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Home Called Sorrow",
          "bn": "দুঃখের ঘর এই দুনিয়া"
        },
        "p": [
          {
            "en": "Maarif al-Quran turns the verse around to look at the life left behind. What is this sorrow, it asks, and answers that every sorrow is included. In this world, it says, nobody escapes it, not a king, not a prophet, not a saint; the wise have long called this world the house of sorrows. A believer, Imam al-Jassas adds, is never quite free of some concern while he lives here, and the Prophet himself said the world is a prison for the believer. This is why, in the accounts of his Companions, these great souls often appear sorrowful.",
            "bn": "মাআরিফুল কুরআন আয়াতটা ঘুরিয়ে তাকায় পেছনে ফেলে আসা জীবনের দিকে। এই দুঃখ কী, সে প্রশ্ন তোলে, আর জবাব দেয়: সব দুঃখই এর ভেতরে। এই দুনিয়ায়, সে বলে, কেউ এর হাত থেকে বাঁচে না, না কোনো বাদশাহ, না কোনো নবী, না কোনো ওলি; জ্ঞানীরা বহুকাল ধরে এই দুনিয়াকে দুঃখের ঘর বলে এসেছেন। ইমাম জাসসাস যোগ করেন, এখানে বেঁচে থাকতে থাকতে কোনো মুমিন কোনো-না-কোনো দুশ্চিন্তা থেকে পুরো মুক্ত থাকে না, আর নবী ﷺ নিজেই বলেছেন দুনিয়া মুমিনের জন্য কারাগার। এজন্যই সাহাবাদের (রাঃ) জীবনকথায় এই মহান মানুষদের প্রায়ই বিষণ্ন দেখা যায়।"
          },
          {
            "en": "Maarif then lays the sorrows out in order. There is the concern of this world and its endless anxieties; there is the concern of the Day of Resurrection; there is the concern of the reckoning of deeds; and there is the concern of the punishment of the Fire. From the people of Paradise, it says, Allah will lift all of these together. Read against that list, the single sentence of the saved becomes enormous. It is not relief from one bad season but release from the entire architecture of dread a believing life is built to carry.",
            "bn": "এরপর মাআরিফ দুঃখগুলো সাজিয়ে দেয় পরপর। আছে এই দুনিয়ার দুশ্চিন্তা আর তার অফুরান উদ্বেগ; আছে কিয়ামতের দিনের দুশ্চিন্তা; আছে আমলের হিসাবের দুশ্চিন্তা; আর আছে জাহান্নামের শাস্তির দুশ্চিন্তা। জান্নাতবাসীর থেকে, সে বলে, আল্লাহ এ সবকিছু একসঙ্গে তুলে নেবেন। এই তালিকার সামনে রেখে পড়লে মুক্তিপ্রাপ্তদের ওই একটিমাত্র বাক্য বিশাল হয়ে ওঠে। এটা কোনো একটা খারাপ সময় থেকে নিছক স্বস্তি নয়, বরং ঈমানি জীবন যে গোটা ভয়ের কাঠামো বইবার জন্য গড়া, তা থেকেই পুরো মুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names, One Rescue",
          "bn": "দুটি নাম, এক মুক্তি"
        },
        "p": [
          {
            "en": "Then comes the reason, stated in two of Allah's names: indeed our Lord is Ghafur, Forgiving, and Shakur, Appreciative. The saved do not credit their own record. They explain their arrival by what He is. Ibn Kathir carries the comment of Ibn Abbas and others, as compact as it is precise: He forgave them much of their sins, and He appreciated the little of their good deeds. Those two clauses are the whole mechanism of salvation folded into a line, and the people of Paradise know it well enough to say it first.",
            "bn": "তারপর আসে কারণটা, আল্লাহর দুটি নামে: নিশ্চয়ই আমাদের রব গাফূর, পরম ক্ষমাশীল, আর শাকূর, বড়ই কদরদানকারী। মুক্তিপ্রাপ্তরা নিজেদের আমলনামার কৃতিত্ব নেয় না। এখানে কীভাবে পৌঁছাল, তার কারণ তারা বলে আল্লাহর পরিচয় দিয়ে। ইবন কাসীর ইবন আব্বাস ও অন্যদের মন্তব্যটি উল্লেখ করেন, যা যতটা ছোট ততটাই নিখুঁত: তিনি তাদের অনেক গুনাহ মাফ করেছেন, আর তাদের সামান্য নেকিরও কদর করেছেন। মুক্তি কীভাবে আসে, তার পুরো রহস্য এই দুই বাক্যে এক লাইনে ধরা আছে। জান্নাতবাসীরা তা এত ভালো জানে যে সবার আগে এ কথাই বলে।"
          },
          {
            "en": "The Muyassar renders the pairing the same way: He is Ghafur in that He forgave us our slips, and Shakur in that He accepted our good deeds and multiplied them. Put the two names against the two human problems and they fit exactly. Our record has a debit side, the wrongs and the shortfalls, and His forgiveness covers it. Our record has a credit side, thin and uneven, and His appreciation does not merely accept it but enlarges it. The gap we could never close, He closes from both directions.",
            "bn": "মুয়াসসার জোড়াটা একইভাবে খোলে: তিনি গাফূর, কারণ আমাদের ভুলগুলো তিনি ক্ষমা করেছেন; আর শাকূর, কারণ আমাদের নেকি তিনি কবুল করেছেন এবং বহুগুণ বাড়িয়ে দিয়েছেন। দুটি নামকে মানুষের দুটি সমস্যার সামনে রাখুন, হুবহু মিলে যায়। আমাদের হিসাবের একটা দেনার দিক আছে, অন্যায় আর কমতিগুলো, আর তাঁর ক্ষমা তা ঢেকে দেয়। হিসাবের একটা পাওনার দিকও আছে, পাতলা আর এবড়োখেবড়ো, আর তাঁর কদর কেবল তা মেনে নেয় না, বাড়িয়ে তোলে। যে ফাঁক আমরা কখনো বন্ধ করতে পারতাম না, তিনি দুই দিক থেকেই তা বন্ধ করে দেন।"
          },
          {
            "en": "As-Sadi gives the pairing its most beautiful turn. By His forgiveness, he writes, they were saved from everything dreaded and feared; by His appreciation and bounty, they obtained everything desired and loved. Forgiveness clears away the terror; appreciation hands over the reward. He adds that Allah gave them of His bounty what their deeds, and even their wishes, had never reached. So the grief lifted in the first half of the verse and the two names in the second are one movement: the names are how the grief came to be lifted at all.",
            "bn": "এই জোড়ার সবচেয়ে সুন্দর ব্যাখ্যাটি দেন সা'দী। তিনি লেখেন, তাঁর ক্ষমার কারণে তারা রক্ষা পেয়েছে সব ভয় আর আশঙ্কা থেকে; আর তাঁর কদর ও অনুগ্রহে তারা পেয়েছে যা কিছু চাওয়ার আর ভালোবাসার। ক্ষমা আতঙ্ক দূর করে, কদর প্রতিদান হাতে তুলে দেয়। তিনি আরও বলেন, আল্লাহ নিজ অনুগ্রহে তাদের এমন কিছু দিয়েছেন, যেখানে তাদের আমল তো দূরের কথা, তাদের আশা-আকাঙ্ক্ষাও কখনো পৌঁছায়নি। তাই আয়াতের প্রথম অংশে দুঃখ দূর হওয়া আর দ্বিতীয় অংশের দুটি নাম আসলে একই কথার দুই দিক: এই দুই নামের গুণেই দুঃখটা আদৌ দূর হতে পেরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Carried by Deeds",
          "bn": "আমলের জোরে নয়"
        },
        "p": [
          {
            "en": "This is also where a well-known hadith belongs. Al-Bukhari records from Abu Hurayra that the Messenger of Allah said, The deeds of anyone of you will not save you. They asked, Not even you, Messenger of Allah? He said, Not even I, unless Allah bestows His mercy on me; so do good deeds properly and moderately, and seek help in worship morning and evening and part of the night, and keep to a middle, regular course, and you will reach your goal. The report stands in Bukhari's Sahih.",
            "bn": "এখানেই জায়গা পায় একটি সুপরিচিত হাদিস। বুখারী আবু হুরাইরা থেকে বর্ণনা করেন যে আল্লাহর রাসূল ﷺ বলেছেন, তোমাদের কারও আমল তাকে বাঁচাতে পারবে না। তারা জিজ্ঞেস করল, আপনিও নন, হে আল্লাহর রাসূল? তিনি বললেন, আমিও নই, যদি না আল্লাহ তাঁর রহমতে আমাকে ঢেকে নেন; তাই আমল করো ঠিকঠাক আর পরিমিতভাবে, সকাল-সন্ধ্যায় আর রাতের কিছু অংশে ইবাদতে সাহায্য চাও, মধ্যপন্থা ধরে রাখো, তাহলে লক্ষ্যে পৌঁছাবে। বর্ণনাটি বুখারীর সহীহে আছে।"
          },
          {
            "en": "The hadith guards the verse from a misreading. If forgiveness covered the shortfall and appreciation enlarged the little, then nobody walks into the Garden on the strength of his own account; mercy carries him the last distance, and more. Ibn Kathir makes the same point on the very next verse, where the saved say He settled us here out of His bounty (35:35): our deeds, he comments, are not equal to this. The two names are not a reward system but a rescue, and the people who speak them have understood that exactly.",
            "bn": "হাদিসটি আয়াতকে একটা ভুল বোঝা থেকে রক্ষা করে। ক্ষমা যদি কমতি ঢেকে দেয় আর কদর যদি সামান্যকে বাড়িয়ে তোলে, তাহলে কেউই নিজের আমলের জোরে হেঁটে জান্নাতে ঢোকে না। শেষ পথটুকু তাকে পার করে দেয় রহমত, আর দেয় তার চেয়েও বেশি। ইবন কাসীর ঠিক পরের আয়াতেও একই কথা বলেন, যেখানে মুক্তিপ্রাপ্তরা বলে, তিনিই নিজ অনুগ্রহে আমাদের এখানে থাকতে দিয়েছেন (৩৫:৩৫)। তাঁর মন্তব্য: আমাদের আমল এর সমান নয়। দুটি নাম কোনো পুরস্কারের হিসাব-ব্যবস্থা নয়, এ এক উদ্ধার। আর যারা এই নাম দুটি উচ্চারণ করে, তারা কথাটা ঠিক ঠিক বুঝেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Toward That Praise",
          "bn": "সেই প্রশংসার পথে"
        },
        "p": [
          {
            "en": "The verse right after completes the thought. He who settled us in the home of permanence out of His bounty, the saved go on; no fatigue touches us here, nor any weariness (35:35). The grief is gone and the tiredness with it, and the place is called the home that stays. What the earlier verses promised in gold and silk, this verse names from the inside: a rest that is secure because the Giver will not withdraw it.",
            "bn": "পরের আয়াতটি চিন্তাটা পূর্ণ করে। মুক্তিপ্রাপ্তরা বলতে থাকে: তিনিই নিজ অনুগ্রহে আমাদের স্থায়ী আবাসে জায়গা দিয়েছেন; এখানে কোনো কষ্ট আমাদের ছোঁয় না, কোনো ক্লান্তিও না (৩৫:৩৫)। দুঃখ চলে গেছে, সঙ্গে ক্লান্তিও, আর জায়গাটার নামই স্থায়ী ঘর। আগের আয়াতগুলো সোনা আর রেশমের ভাষায় যা ওয়াদা করেছিল, এই আয়াত তার ভেতরের রূপটা দেখায়: এমন বিশ্রাম যা নিরাপদ, কারণ যিনি দিয়েছেন তিনি তা কখনো ফিরিয়ে নেবেন না।"
          },
          {
            "en": "That leaves a question for anyone still in the home of sorrows. The griefs the commentators listed are our griefs now: the fear of how things end, the worry over bread, the dread of the reckoning, the quiet sense that our obedience is too thin to count. The verse does not pretend these are small. It tells us where they are finally answered, and whose two names answer them. The grief is real, but it is not the last word; the last word, for those who reach Him, is praise.",
            "bn": "যারা এখনো দুঃখের ঘরে আছে, তাদের সামনে তাহলে একটা প্রশ্ন থেকে যায়। তাফসীরকারেরা যে দুঃখগুলোর তালিকা দিয়েছেন, সেগুলো তো এখন আমাদেরই দুঃখ: শেষটা কেমন হবে সেই ভয়, রুটি-রুজির দুশ্চিন্তা, হিসাবের আতঙ্ক, আর এই চাপা অনুভূতি যে আমাদের আনুগত্য এত সামান্য যে গোনায় ধরার মতো নয়। আয়াত এগুলোকে ছোট করে দেখায় না। বরং বলে দেয়, শেষ পর্যন্ত এগুলোর জবাব কোথায় মেলে, আর কার দুটি নাম সেই জবাব দেয়। দুঃখ সত্যি, কিন্তু সেটাই শেষ কথা নয়। যারা তাঁর কাছে পৌঁছায়, তাদের শেষ কথা হলো প্রশংসা।"
          },
          {
            "en": "There is a way to live toward that sentence now. When relief comes in this life, a debt cleared, a fever broken, a fear that passes, the people of Paradise have shown us the first thing to say, and it is His name before our own comfort. And when the grief has not yet lifted, their words become a hope to hold: the same Lord who is Forgiving of our shortfall and Appreciative of our little is the One we are walking toward. The praise they will speak, we can begin rehearsing.",
            "bn": "ওই বাক্যটাকে সামনে রেখে এখন থেকেই জীবন কাটানোর একটা উপায় আছে। এই দুনিয়ায় যখন স্বস্তি আসে, কোনো দেনা শোধ হয়, জ্বর ছেড়ে যায়, কোনো ভয় কেটে যায়, তখন প্রথমে কী বলতে হয় তা জান্নাতবাসীরা দেখিয়ে দিয়েছে: নিজের আরামের কথার আগে তাঁর নাম। আর দুঃখ যখন এখনো কাটেনি, তখন তাদের কথাগুলোই আঁকড়ে ধরার মতো আশা হয়ে ওঠে: আমাদের কমতির বেলায় যিনি গাফূর আর আমাদের সামান্য আমলের বেলায় যিনি শাকূর, সেই রবের দিকেই আমরা হেঁটে চলেছি। যে প্রশংসা তারা সেদিন করবে, আমরা আজ থেকেই তার অনুশীলন শুরু করতে পারি।"
          }
        ]
      }
    ]
  },
  "35:42": {
    "sections": [
      {
        "h": {
          "en": "The Oath They Swore",
          "bn": "যে কসম তারা খেয়েছিল"
        },
        "p": [
          {
            "en": "The verse opens on a vow. Wa-aqsamu billahi jahda aymanihim: they swore by Allah with the utmost strength of their oaths. At-Tabari reads jahda aymanihim as the most emphatic oaths a person can take, swearing to the very limit and exhausting the force of the words. This was no passing remark made in the heat of a conversation. The idolaters of Makka bound themselves before Allah with the heaviest language their tongues could reach, pledging that their own conduct, once a guide appeared, would outstrip everyone who had gone before them.",
            "bn": "আয়াতটি শুরু হয় এক অঙ্গীকার দিয়ে। ওয়া আকসামু বিল্লাহি জাহদা আইমানিহিম: তারা আল্লাহর নামে সবচেয়ে শক্ত কসম খেল। তাবারী বলেন, জাহদা আইমানিহিম মানে একজন মানুষ যতটা জোরালো কসম খেতে পারে তার চূড়ান্ত রূপ, কথার সব জোর নিংড়ে শেষ সীমা পর্যন্ত কসম। এটা হালকা কোনো কথা ছিল না, আলাপের উত্তাপে বলে ফেলা কথা নয়। মক্কার মুশরিকরা নিজেদের জিভে যে ভারী ভাষা আনতে পারত তার সবটা দিয়ে আল্লাহর সামনে অঙ্গীকার করল যে পথপ্রদর্শক এলে তাদের নিজেদের চালচলন আগের সবাইকে ছাড়িয়ে যাবে।"
          },
          {
            "en": "As-Sa'di describes the same scene: an oath they laboured over, loaded with the most solemn wording. And the commentators are agreed on its timing. They made this pledge before Allah sent His Messenger, while they were still outside the whole affair. The content of the vow was bold: that if a warner ever reached them, they would walk the path of truth more readily, and accept what he brought more fully, than any of the nations that had passed away before them. They set themselves a standard and named it aloud.",
            "bn": "সা'দীও একই দৃশ্য আঁকেন: অনেক খেটেখুটে খাওয়া এক কসম, সবচেয়ে গুরুগম্ভীর শব্দে ভরা। আর এর সময় নিয়ে তাফসীরকারেরা একমত। আল্লাহ তাঁর রাসূল পাঠানোর আগেই তারা এই কসম খেয়েছিল, তখনো পুরো ব্যাপারটা থেকে তারা দূরে। কসমের কথাগুলো ছিল দুঃসাহসী: কোনো সতর্ককারী কখনো তাদের কাছে এলে, তাদের আগে গত হওয়া যেকোনো জাতির চেয়ে তারা আরও সহজে সত্যের পথ ধরবে, আর তিনি যা আনবেন তা আরও পুরোপুরি মেনে নেবে। নিজেদের জন্য একটা মাপকাঠি তারা নিজেরাই ঠিক করল, আর মুখ ফুটে তা ঘোষণাও করল।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Warner Came",
          "bn": "সতর্ককারী আসার আগে"
        },
        "p": [
          {
            "en": "Why did they swear such a thing? Al-Qurtubi and al-Baghawi give the setting. Word had reached the Arabs that the People of the Book, the Jews and the Christians, had been sent messengers and had denied them. The Arabs found this contemptible. Al-Baghawi reports that they said, may Allah curse the Jews and the Christians: messengers came to them and they called them liars. From that scorn grew their confidence. They were sure they would never fail as those earlier communities had failed.",
            "bn": "এমন কসম তারা কেন খেল? কুরতুবী আর বাগাভী এর পটভূমি দেন। আরবদের কানে এসেছিল যে আহলে কিতাব, অর্থাৎ ইহুদি ও খ্রিষ্টানদের কাছে রাসূল পাঠানো হয়েছিল, আর তারা তাঁদের অস্বীকার করেছিল। আরবদের কাছে এটা ছিল ঘৃণ্য। বাগাভী বলেন, তারা বলত, আল্লাহ ইহুদি-খ্রিষ্টানদের লানত করুন: তাদের কাছে রাসূলরা এলেন, আর তারা তাঁদের মিথ্যুক বলল। এই অবজ্ঞা থেকেই জন্ম নিল তাদের আত্মবিশ্বাস। তারা নিশ্চিত ছিল, আগের ওই সম্প্রদায়গুলো যেভাবে ব্যর্থ হয়েছে তারা কখনো সেভাবে ব্যর্থ হবে না।"
          },
          {
            "en": "Al-Qurtubi adds a further detail. The Arabs used to long for a messenger of their own, as the messengers had come among the Children of Israel. So the oath carried a real yearning inside it: give us what they were given, and watch how much better we will answer. Al-Qurtubi closes the thought with the turn the verse itself makes. When the very thing they had wished for arrived, a warner from among themselves, they shied away from him and would not believe. The longing and the refusal belonged to the same people.",
            "bn": "কুরতুবী আরেকটি কথা যোগ করেন। আরবরা নিজেদের মধ্য থেকে একজন রাসূলের আকাঙ্ক্ষা করত, যেমন বনী ইসরাইলের মধ্যে রাসূলরা এসেছিলেন। তাই কসমের ভেতরে লুকিয়ে ছিল সত্যিকারের এক আকুতি: তাদের যা দেওয়া হয়েছিল আমাদেরও তা দাও, দেখো আমরা কত ভালোভাবে সাড়া দিই। কুরতুবী আয়াতটির নিজের মোড় দিয়েই কথা শেষ করেন। যা তারা চেয়েছিল ঠিক সেটিই যখন এল, নিজেদের মধ্য থেকেই এক সতর্ককারী, তারা তাঁর কাছ থেকে পিছিয়ে গেল, বিশ্বাস করল না। আকাঙ্ক্ষা আর অস্বীকার, দুটোই ছিল একই লোকের।"
          },
          {
            "en": "There is a cruel symmetry here that al-Qurtubi's reading exposes. The Arabs had turned the failure of earlier nations into proof of their own superiority. They did not say, those people fell, so let us fear for ourselves; they said, those people fell, so we must be made of better stuff. Contempt for another's failure is a poor base for real obedience. The moment their turn came, the same weakness they had mocked surfaced in them, only louder, because they had sworn so loudly that it never would.",
            "bn": "কুরতুবীর ব্যাখ্যায় এখানে এক নির্মম মিল ধরা পড়ে। আগের জাতিগুলোর ব্যর্থতাকে আরবরা বানিয়ে নিয়েছিল নিজেদের শ্রেষ্ঠত্বের প্রমাণ। তারা বলেনি, ওরা পড়ে গেছে, তাই আমরা নিজেদের নিয়ে ভয় করি। বরং বলেছিল, ওরা পড়ে গেছে, তাই আমরা নিশ্চয়ই আরও ভালো মাটিতে গড়া। অন্যের ব্যর্থতাকে তুচ্ছ করার ওপর সত্যিকারের আনুগত্যের ভিত দাঁড়ায় না। যেই তাদের পালা এল, যে দুর্বলতা নিয়ে তারা ঠাট্টা করত সেটিই তাদের মধ্যে মাথা তুলল, আরও জোরে, কারণ তা কখনো হবে না বলে তারা এত জোরে কসম খেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided Past Which Peoples",
          "bn": "কাদের চেয়ে বেশি হেদায়েত"
        },
        "p": [
          {
            "en": "What did 'more guided than any of the nations' mean? Most of the commentators read it narrowly. Al-Muyassar, as-Sa'di and al-Baghawi all take the nations here to be the Jews and the Christians in particular, the communities the Arabs had just finished faulting. The sense is pointed: we will be better guided than the very people we scorned for wasting their guidance. On this reading the oath is a direct comparison against named predecessors, and that is exactly what makes its later collapse so bitter.",
            "bn": "'যেকোনো জাতির চেয়ে বেশি হেদায়েতপ্রাপ্ত' কথাটার মানে কী? বেশির ভাগ তাফসীরকার একে সীমিত অর্থে নেন। মুয়াসসার, সা'দী আর বাগাভী তিনজনই এখানে জাতি বলতে বিশেষভাবে ইহুদি ও খ্রিষ্টানদের বোঝেন, যাদের দোষ ধরা আরবরা সবে শেষ করেছিল। কথাটার ধার স্পষ্ট: হেদায়েত নষ্ট করার জন্য যাদের আমরা তুচ্ছ করেছি, তাদের চেয়েই আমরা বেশি হেদায়েত পাব। এই ব্যাখ্যায় কসমটা ছিল নির্দিষ্ট পূর্বসূরিদের সঙ্গে সরাসরি তুলনা, আর ঠিক এ কারণেই পরে এর ভেঙে পড়া এত তেতো।"
          },
          {
            "en": "Ibn Kathir records a wider reading. Citing ad-Dahhak and others, he takes 'any of the nations' to mean all of the communities to whom messengers had ever been sent, not the People of the Book alone. On this view the Arabs were measuring themselves against the whole record of humankind under prophecy and claiming to top it. The two readings do not cancel each other; they differ only in scope. Whether the boast was against the People of the Book or against every nation before them, it was a boast, and the warner would expose it.",
            "bn": "ইবন কাসীর আরও ব্যাপক একটি ব্যাখ্যা উল্লেখ করেন। দাহহাক ও অন্যদের বরাতে তিনি 'যেকোনো জাতি' বলতে বোঝেন এমন সব সম্প্রদায়কে, যাদের কাছে কখনো রাসূল পাঠানো হয়েছিল, শুধু আহলে কিতাবকে নয়। এই মতে আরবরা নিজেদের মাপছিল নবুয়তের আলো পাওয়া গোটা মানবজাতির ইতিহাসের সঙ্গে, আর দাবি করছিল সবাইকে ছাড়িয়ে যাবে। দুই ব্যাখ্যা একটি আরেকটিকে বাতিল করে না; পার্থক্য কেবল পরিধিতে। বড়াইটা আহলে কিতাবের সঙ্গে হোক বা তাদের আগের সব জাতির সঙ্গে, বড়াই তো বড়াই-ই, আর সতর্ককারী এসে তা ফাঁস করে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Warner Came",
          "bn": "যখন সতর্ককারী এলেন"
        },
        "p": [
          {
            "en": "Then came the hinge of the verse: falamma ja'ahum nadhir, but when a warner came to them. Ibn Kathir identifies the warner plainly as Muhammad, peace be upon him, carrying the clear Qur'an that had been revealed to him. And the result was not a little guidance, not even a neutral pause. Ma zadahum illa nufuran: it increased them in nothing but aversion. The very arrival that was supposed to make them the best-guided of all peoples moved them in the opposite direction instead. The thing they had sworn they would welcome, they turned and fled.",
            "bn": "তারপর আসে আয়াতের মোড়: ফালাম্মা জা-আহুম নাযীর, কিন্তু যখন তাদের কাছে সতর্ককারী এলেন। ইবন কাসীর সোজাসুজি বলেন, এই সতর্ককারী হলেন মুহাম্মদ ﷺ, যিনি তাঁর ওপর নাজিল হওয়া স্পষ্ট কুরআন নিয়ে এসেছিলেন। এতে তারা সামান্য হেদায়েতও পেল না, এমনকি যেমন ছিল তেমন থমকেও রইল না। মা যাদাহুম ইল্লা নুফূরা: এ তাদের বিমুখতা ছাড়া আর কিছুই বাড়াল না। যে আগমন তাদের সব জাতির মধ্যে সবচেয়ে বেশি হেদায়েতপ্রাপ্ত করার কথা ছিল, সেটাই তাদের ঠেলে দিল উল্টো দিকে। যা তারা সাদরে বরণ করবে বলে কসম খেয়েছিল, তা থেকেই তারা মুখ ফিরিয়ে পালাল।"
          },
          {
            "en": "The commentators weigh the word nufur. At-Tabari glosses it as aversion and flight together: the coming of the warner added to them not belief or the following of truth but a bolting away from it. Al-Baghawi reads it as a growing distance from guidance. As-Sa'di goes further still. They did not merely fail to become better than other nations; they did not even hold at the misguidance they already had. The warner's arrival drove them into fresh error, insolence and stubbornness, piled on top of the old.",
            "bn": "নুফূর শব্দটির অর্থ নিয়ে তাফসীরকারেরা ভেবেছেন। তাবারী এর অর্থ করেন বিমুখতা আর পালিয়ে যাওয়া, দুটো একসঙ্গে: সতর্ককারীর আগমন তাদের ঈমান বা সত্যের অনুসরণ বাড়ায়নি, বাড়িয়েছে সত্য থেকে ছিটকে পালানো। বাগাভীর মতে এর মানে হেদায়েত থেকে ক্রমে আরও দূরে সরে যাওয়া। সা'দী আরও এক ধাপ এগিয়ে যান। অন্য জাতির চেয়ে ভালো হতে না পারাই শুধু নয়, আগে যে গোমরাহিতে ছিল সেখানেও তারা থেমে থাকেনি। সতর্ককারীর আগমন তাদের ঠেলে দিল নতুন ভ্রান্তি, ঔদ্ধত্য আর গোঁয়ার্তুমির দিকে, পুরোনোগুলোর ওপর আরও স্তূপ হয়ে।"
          },
          {
            "en": "Notice what did not happen. The warner did not bring confusion, or a hard doctrine, or a demand they could not meet. He brought, in Ibn Kathir's words, the clear Qur'an. The clearer the call, the sharper their recoil. This is the frightening shape of nufur: it is not caused by a weak argument but provoked by its strength. When the truth is plain and still unwelcome, the problem has moved from the mind to the will, and no further evidence will fix a thing the heart has already decided to refuse.",
            "bn": "খেয়াল করুন, কী ঘটেনি। সতর্ককারী কোনো বিভ্রান্তি আনেননি, কঠিন কোনো মতবাদ আনেননি, তাদের সাধ্যের বাইরে কোনো দাবিও করেননি। ইবন কাসীরের ভাষায়, তিনি এনেছিলেন স্পষ্ট কুরআন। ডাক যত স্পষ্ট, তাদের পিছিয়ে যাওয়া তত তীব্র। নুফূরের ভয়ের দিকটা এখানেই: যুক্তি দুর্বল বলে এটা জন্মায় না, যুক্তি জোরালো বলেই জেগে ওঠে। সত্য পরিষ্কার, তবু মন তা চায় না: তখন সমস্যাটা আর বোঝার নয়, চাওয়ার। অন্তর যা ফিরিয়ে দেবে বলে ঠিক করে ফেলেছে, নতুন কোনো প্রমাণ দিয়ে তা আর সারানো যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes in Other Surahs",
          "bn": "অন্য সূরায় এর প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Ibn Kathir reads this verse against a pattern the Qur'an names elsewhere. In 6:156 and 6:157 Allah warns the Arabs not to excuse themselves by saying the Book was sent only to two communities before them, or to claim that had the Book come to them they would have been better guided than those communities. The answer there is the same as here: a clear proof has now come to you, so who does greater wrong than one who denies it? The excuse is retired before it can be made.",
            "bn": "ইবন কাসীর এ আয়াতকে পড়েন কুরআনেরই অন্যত্র বলা এক ছকের সঙ্গে মিলিয়ে। ৬:১৫৬ ও ৬:১৫৭ আয়াতে আল্লাহ আরবদের সতর্ক করেন, তারা যেন এই অজুহাত না দেয় যে কিতাব কেবল তাদের আগের দুই সম্প্রদায়ের ওপর নাজিল হয়েছিল, কিংবা এই দাবি না করে যে কিতাব তাদের কাছে এলে তারা ওই সম্প্রদায়গুলোর চেয়ে বেশি হেদায়েত পেত। সেখানকার জবাবও এখানকার মতোই: এখন তোমাদের কাছে স্পষ্ট প্রমাণ এসে গেছে, তাহলে যে তা অস্বীকার করে তার চেয়ে বড় জালিম আর কে? অজুহাতটা মুখে আসার আগেই বাতিল হয়ে গেছে।"
          },
          {
            "en": "The second echo is sharper still. In 37:167 to 37:170 Allah reports that the pagans used to say: if only we had a reminder from the men of old, we would surely be the sincere servants of Allah. The condition they set was exactly the Quraysh condition: give us what the earlier peoples were given and we will outdo them. Then the reminder came. Ibn Kathir finishes the citation in Allah's own words, but they disbelieved in it, so they will come to know. The verse before us watches that disbelief arrive on schedule.",
            "bn": "দ্বিতীয় প্রতিধ্বনিটি আরও ধারালো। ৩৭:১৬৭ থেকে ৩৭:১৭০ আয়াতে আল্লাহ জানান, মুশরিকরা বলত: পূর্ববর্তীদের মতো আমাদের কাছেও যদি কোনো উপদেশ আসত, আমরা অবশ্যই আল্লাহর একনিষ্ঠ বান্দা হতাম। তাদের শর্তটা হুবহু কুরাইশের শর্ত: আগের জাতিগুলোকে যা দেওয়া হয়েছিল আমাদের তা দাও, আমরা তাদের ছাড়িয়ে যাব। তারপর উপদেশ এল। ইবন কাসীর আল্লাহরই কথা দিয়ে উদ্ধৃতি শেষ করেন: কিন্তু তারা তা অস্বীকার করল, শীঘ্রই তারা জানতে পারবে। আর আমাদের সামনের আয়াতে দেখা যায়, সেই অস্বীকার ঠিক সময়মতোই এসে হাজির।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath and a Heart",
          "bn": "কসম আর অন্তর"
        },
        "p": [
          {
            "en": "No sound report ties a specific hadith to this verse, so what follows is a general principle, not a narration about it. In Sahih al-Bukhari, 'Umar ibn al-Khattab reports that the Prophet, peace be upon him, said: the reward of deeds depends upon the intentions, and every person shall have only what he intended. The oath in this verse was loud on the tongue. What Allah weighs is what sits beneath it. An intention sworn before witnesses can still be empty, and the day of testing reads the heart, not the volume of the vow.",
            "bn": "কোনো সহীহ বর্ণনা এ আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিসকে জুড়ে দেয় না, তাই যা আসছে তা একটি সাধারণ নীতি, এ আয়াত নিয়ে কোনো বর্ণনা নয়। সহীহ বুখারীতে উমর ইবনুল খাত্তাব (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: আমলের প্রতিদান নিয়তের উপর নির্ভর করে, আর প্রত্যেকে তা-ই পাবে যা সে নিয়ত করেছে। এ আয়াতের কসমটা জিভে ছিল জোরালো। আল্লাহ ওজন করেন তার নিচে যা থাকে তাকে। সাক্ষীদের সামনে খাওয়া কসমও ফাঁপা হতে পারে, আর পরীক্ষার দিন অন্তরকেই পড়ে, কসমের আওয়াজকে নয়।"
          },
          {
            "en": "This verse does not stand alone in the surah. A few lines earlier, in 35:38, Allah has already declared that He is the Knower of the unseen of the heavens and the earth, and that He knows what is within the breasts. So the empty oath is answered before it is sworn. A promise made to impress other people can fool other people; it cannot reach past the One who already sees what the breast is hiding. The gap between the sworn word and the true intention is exactly the gap He reads.",
            "bn": "এ আয়াত সূরার মধ্যে একা দাঁড়িয়ে নেই। কয়েক লাইন আগে, ৩৫:৩৮ আয়াতে আল্লাহ আগেই ঘোষণা করেছেন যে তিনি আসমান ও জমিনের গায়েবের জ্ঞানী, আর অন্তরে যা আছে তা-ও তিনি জানেন। তাই ফাঁপা কসমের জবাব কসম খাওয়ার আগেই দেওয়া হয়ে আছে। অন্যকে মুগ্ধ করতে দেওয়া প্রতিশ্রুতি অন্য মানুষকে ভোলাতে পারে, কিন্তু যিনি অন্তরের লুকানো জিনিস আগেই দেখেন সেই একমাত্র সত্তাকে ছাড়িয়ে যাওয়া যায় না। কসমের কথা আর আসল নিয়তের মাঝের ফাঁকটাই তিনি পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Others",
          "bn": "অন্যদের উপর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a particular people at a particular time: the idolaters who swore an oath and then broke it when the warner arrived. It records what they did. It is not a licence to level the charge of hypocrisy at any living person, community or faith, and it is not a weapon to wield against a neighbour whose promises you doubt. The Qur'an is holding up a mirror, and the only face it is safe to look for in that mirror is your own.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নির্দিষ্ট এক সময়ের নির্দিষ্ট এক দলের কথা বলে: সেই মুশরিকরা, যারা কসম খেয়েছিল আর সতর্ককারী এলে তা ভেঙেছিল। আয়াত শুধু জানিয়ে দেয় তারা কী করেছিল। এটা জীবিত কোনো মানুষ, সম্প্রদায় বা ধর্মের গায়ে মুনাফিকির অভিযোগ সাঁটার অনুমতি নয়, আর যার প্রতিশ্রুতিতে আপনার সন্দেহ, এমন কোনো প্রতিবেশীর বিরুদ্ধে চালানোর অস্ত্রও নয়। কুরআন একটা আয়না ধরে আছে, আর সেই আয়নায় নিরাপদে কেবল একটি চেহারাই খোঁজা যায়: আপনার নিজের।"
          },
          {
            "en": "And the mirror cuts both ways. If I may not use this verse to brand others, I also may not use it to comfort myself that I am not among them. The oath-breakers did not think of themselves as liars; they were sincere in the moment of swearing and only failed in the moment of testing. That is the ordinary shape of self-deception. The safe response is not to locate these people in history or across a border, but to ask where my own loud intentions have quietly gone unmet.",
            "bn": "আর এ আয়নার কথা দুই দিকেই খাটে। এ আয়াত দিয়ে আমি যদি অন্যদের দাগিয়ে দিতে না পারি, তবে নিজেকে এই সান্ত্বনাও দিতে পারি না যে আমি ওদের দলে নই। কসম ভঙ্গকারীরা নিজেদের মিথ্যুক ভাবত না; কসম খাওয়ার মুহূর্তে তারা আন্তরিকই ছিল, শুধু পরীক্ষার মুহূর্তে হেরে গিয়েছিল। আত্মপ্রবঞ্চনার চিরচেনা চেহারা এটাই। তাই নিরাপদ পথ এই লোকদের ইতিহাসের পাতায় বা সীমান্তের ওপারে খুঁজে বেড়ানো নয়, বরং নিজেকে জিজ্ঞেস করা: আমার নিজের জোরালো নিয়তগুলো কোথায় চুপচাপ অপূর্ণ রয়ে গেছে?"
          }
        ]
      },
      {
        "h": {
          "en": "The 'If Only' Mirror",
          "bn": "'সুযোগ পেলে'-র আয়না"
        },
        "p": [
          {
            "en": "Why did the promise collapse? The very next verse answers in a single word, istikbaran, out of arrogance. Ibn Kathir explains 35:43 to mean they were too proud to follow the signs of Allah, and he adds that their plotting of evil recoiled on no one but themselves, for the evil plot encompasses only its own author. Pride is what turned the sworn welcome into open flight. The same thing can happen quietly in a life that never swears a single public oath at all.",
            "bn": "প্রতিশ্রুতিটা ভেঙে পড়ল কেন? ঠিক পরের আয়াত এক শব্দেই জবাব দেয়: ইসতিকবারান, অহংকারের কারণে। ইবন কাসীর ৩৫:৪৩ আয়াতের ব্যাখ্যায় বলেন, আল্লাহর আয়াত মেনে চলতে তাদের অহংকারে বেধেছিল। তিনি আরও বলেন, তাদের কুচক্রান্ত আর কারও ওপর নয়, তাদের নিজেদের ওপরই ফিরে এসেছে, কারণ মন্দ চক্রান্ত তার রচয়িতাকেই ঘিরে ধরে। যাকে সাদরে বরণ করবে বলে কসম খেয়েছিল, অহংকারই তাদের তার কাছ থেকে খোলাখুলি পালাতে বাধ্য করল। প্রকাশ্যে একটিও কসম খায় না এমন জীবনেও একই ঘটনা চুপচাপ ঘটে যেতে পারে।"
          },
          {
            "en": "We all keep a ledger of future selves. When I am less busy I will pray on time. When the children are grown I will learn the Qur'an. When the debt is paid I will give freely. The verse does not scold the plan; it questions the deferral. An intention that waits for a perfect season is rarely tested, and an intention that is never tested can claim anything. The warning is not that I will be punished for a slip, but that the way of Allah does not change: guidance, once it reaches me, asks for an answer now.",
            "bn": "আমরা সবাই মনে মনে ভবিষ্যতের নিজেকে নিয়ে একটা হিসাবের খাতা রাখি। ব্যস্ততা কমলে সময়মতো নামাজ পড়ব। সন্তানরা বড় হলে কুরআন শিখব। ঋণ শোধ হলে খোলা হাতে দান করব। আয়াত পরিকল্পনাকে দোষ দেয় না, প্রশ্ন তোলে পিছিয়ে রাখা নিয়ে। যে নিয়ত নিখুঁত সময়ের অপেক্ষায় বসে থাকে, তার পরীক্ষা খুব কমই হয়। আর যে নিয়তের কখনো পরীক্ষা হয় না, সে যা খুশি দাবি করতে পারে। সতর্কবার্তাটা এই নয় যে এক পা হড়কালেই শাস্তি পাব, বরং এই যে আল্লাহর রীতি বদলায় না: হেদায়েত একবার কাছে পৌঁছালে তা এখনই জবাব চায়।"
          }
        ]
      }
    ]
  }
});
