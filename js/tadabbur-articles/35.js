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
            "bn": "সূরাটির নাম এসেছে প্রশংসার পরের প্রথম আসল শব্দ থেকে: ফাতির। কুরতুবী বলেন, আল-ফাতির মানে আল-খালিক, স্রষ্টা, তবে তিনি অর্থে পৌঁছান ধাতুর পথ ধরে। তাঁর মতে আল-ফাতর হলো কোনো জিনিসকে চিরে খুলে ফেলা: ফাতারতুহু ফানফাতারা, আমি তা চিরলাম আর তা চিরে গেল। উদাহরণ দেন সেই উটের, যার দাঁত মাড়ি ভেদ করে বেরিয়ে আসে, আর সেই তরবারির, যার ফলায় ফাটল নেমে গেছে। ফাতর আবার আল-ইবতিদা ও আল-ইখতিরা, অর্থাৎ শূন্য থেকে কোনো কিছুর সূচনা করা আর তা উদ্ভাবন করা।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi both preserve why the word once puzzled even Ibn Abbas. He said he did not know what Fatir as-samawati wa-l-ard meant until two Bedouin came to him quarrelling over a well, and he heard one of them say, ana fatartuha, I started it, I began it. The live speech of the desert carried the sense the scholar had been missing. Ibn Abbas then glossed the name as badi as-samawat, the Originator who brings things about with no earlier model to follow.",
            "bn": "কুরতুবী আর ইবন কাসীর দুজনেই বলেন, এই শব্দ একসময় খোদ ইবন আব্বাসকেও ভাবিয়েছিল। তিনি বলতেন, ফাতিরুস সামাওয়াতি ওয়াল আরদ মানে কী তা তিনি জানতেন না, যতক্ষণ না দুই বেদুইন একটি কূপ নিয়ে ঝগড়া করতে করতে তাঁর কাছে এল। তাদের একজনকে তিনি বলতে শুনলেন, আনা ফাতারতুহা, অর্থাৎ আমিই এটি শুরু করেছি, আমিই এর গোড়াপত্তন করেছি। মরুভূমির জীবন্ত কথাই আলিমের কাছে সেই অর্থ এনে দিল, যা এতদিন অধরা ছিল। এরপর ইবন আব্বাস নামটির ব্যাখ্যা দেন বাদীউস সামাওয়াত হিসেবে, যিনি আগের কোনো নমুনা ছাড়াই অস্তিত্বে আনেন।"
          },
          {
            "en": "Ad-Dahhak adds that wherever Fatir as-samawati wa-l-ard occurs in the Qur'an it means the Creator of the heavens and the earth. Al-Baghawi presses the force further: their Maker who originated them with no earlier pattern to copy. And al-Qurtubi draws the quiet conclusion the opening wants you to reach: the God who had the power to begin a thing has the power to bring it back. A name chosen for the very start of things is already pointing past this life, toward the return.",
            "bn": "আদ-দাহহাক যোগ করেন, কুরআনে যেখানেই ফাতিরুস সামাওয়াতি ওয়াল আরদ এসেছে, সেখানেই এর মানে আকাশমণ্ডলী ও পৃথিবীর স্রষ্টা। বাগাভী অর্থটিকে আরও চেপে ধরেন: তাদের নির্মাতা, যিনি নকল করার মতো আগের কোনো নকশা ছাড়াই তাদের সূচনা করেছেন। আর কুরতুবী চুপচাপ সেই সিদ্ধান্তটি টেনে আনেন, সূচনার এই শব্দ যেদিকে পাঠককে নিতে চায়: যে আল্লাহর কোনো কিছু শুরু করার ক্ষমতা ছিল, তাঁর তা ফিরিয়ে আনার ক্ষমতাও আছে। শুরুর জন্য বেছে নেওয়া এক নাম আগে থেকেই এই জীবনের ওপারে, প্রত্যাবর্তনের দিকে আঙুল তুলে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Praise Opens Here",
          "bn": "প্রশংসা দিয়েই শুরু কেন"
        },
        "p": [
          {
            "en": "Before the name comes the praise itself: al-hamdu lillah. At-Tabari reads it as the complete thanks owed to the God who alone deserves worship, beside whom nothing else has any right to it. The surah does not open by arguing that its Lord exists; it opens by giving Him His due. Praise is set down first, as a settled fact, and only afterwards does the verse say what He has done to earn it: the heavens, the earth, and the angels take their place as grounds for a word already spoken.",
            "bn": "নামের আগে আসে প্রশংসাটিই: আলহামদু লিল্লাহ। তাবারী একে পড়েন সেই পরিপূর্ণ কৃতজ্ঞতা হিসেবে, যা কেবল সেই আল্লাহরই প্রাপ্য, যিনি একাই ইবাদতের যোগ্য, যাঁকে ছাড়া আর কারও ওপর ইবাদতের কোনো হক নেই। সূরাটি তার রবের অস্তিত্ব প্রমাণের তর্ক দিয়ে শুরু হয় না; শুরু হয় তাঁকে তাঁর প্রাপ্য দিয়ে। প্রশংসা আগে বসিয়ে দেওয়া হয়, এক স্থির সত্য হিসেবে। তারপরই কেবল আয়াত বলে, এই প্রশংসা অর্জনে তিনি কী করেছেন: আকাশ, পৃথিবী আর ফেরেশতারা দাঁড়ায় আগেই উচ্চারিত এক শব্দের ভিত্তি হয়ে।"
          },
          {
            "en": "As-Sa'di notes that here God praises His own noble, sacred self for creating the heavens and the earth and all they hold, because that act is proof of the perfection of His power, the reach of His dominion, the breadth of His mercy, the fineness of His wisdom, and the compass of His knowledge. Al-Muyassar gathers the same point: He is praised by attributes that are each of them attributes of perfection, and by His blessings, the seen and the hidden, those of religion and those of this world alike.",
            "bn": "সাদী লক্ষ করান, এখানে আল্লাহ নিজের মহান পবিত্র সত্তার প্রশংসা করেন আকাশমণ্ডলী, পৃথিবী আর এদের ভেতরের সব সৃষ্টির জন্য, কারণ এই সৃষ্টিই তাঁর ক্ষমতার পূর্ণতা, তাঁর রাজত্বের বিস্তার, তাঁর রহমতের ব্যাপকতা, তাঁর হিকমতের সূক্ষ্মতা আর তাঁর জ্ঞানের পরিধির প্রমাণ। মুয়াসসার একই কথা গুছিয়ে আনে: তাঁর প্রশংসা হয় তাঁর গুণাবলি দিয়ে, যার প্রতিটিই পূর্ণতার গুণ, আর তাঁর নিয়ামত দিয়ে, প্রকাশ্য ও গোপন, দ্বীনের ও দুনিয়ার সব নিয়ামত দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels Sent as Messengers",
          "bn": "ফেরেশতারা দূত হয়ে আসেন"
        },
        "p": [
          {
            "en": "Having mentioned creation, the verse turns to command: jail al-malaika rusula, who made the angels messengers. Ibn Kathir says this means messengers between Him and His prophets. At-Tabari widens it: He sends them to whichever of His servants He wills, with whatever command or prohibition He wills. Al-Qurtubi names the great envoys among them, Jibril, Mikail, Israfil, and the Angel of Death, and records Yahya ibn Sallam's reading that they are sent to the prophets, and as-Suddi's that they come to the servants bearing either mercy or punishment.",
            "bn": "সৃষ্টির কথা বলার পর আয়াত মোড় নেয় হুকুমের দিকে: জাইলুল মালাইকাতি রুসুলা, যিনি ফেরেশতাদের দূত বানিয়েছেন। ইবন কাসীর বলেন, এর অর্থ তাঁর আর তাঁর নবীদের মাঝে দূত। তাবারী তা আরও বিস্তৃত করেন: তিনি তাদের পাঠান তাঁর বান্দাদের মধ্যে যাকে ইচ্ছে তার কাছে, যে আদেশ বা নিষেধ নিয়ে ইচ্ছে তা দিয়ে। কুরতুবী তাদের মধ্যকার বড় দূতদের নাম নেন, জিবরীল, মিকাঈল, ইসরাফীল আর মালাকুল মাওত, এবং তুলে ধরেন ইয়াহইয়া ইবন সাল্লামের পাঠ, যে তাঁদের নবীদের কাছে পাঠানো হয়, আর আস-সুদ্দীর পাঠ, যে তাঁরা বান্দাদের কাছে রহমত বা শাস্তি নিয়ে আসেন।"
          },
          {
            "en": "As-Sa'di distinguishes two kinds of errand. The angels carry out His decreed, creational commands in the running of the world, and they stand as intermediaries between Him and His servants in conveying His religious commands. Ma'arif al-Qur'an offers a further sense: the word rasul here may mark the angels as a link joining God to His whole creation, the prophets being the highest in that chain, so that revelation reaches them across this angelic bridge, and His mercy and His punishment reach the world along the very same route.",
            "bn": "সাদী দুই ধরনের দায়িত্বের ফারাক টানেন। ফেরেশতারা সৃষ্টি পরিচালনায় তাঁর তাকদিরি হুকুম কার্যকর করেন, আবার তাঁর দ্বীনি হুকুম পৌঁছে দিতে তাঁর আর বান্দাদের মাঝে মাধ্যম হয়ে দাঁড়ান। মাআরিফুল কুরআন আরেকটি অর্থ সামনে আনে: এখানে রাসুল শব্দটি হয়তো ফেরেশতাদের সেই সেতু হিসেবে চিহ্নিত করে, যা আল্লাহকে তাঁর গোটা সৃষ্টির সঙ্গে যুক্ত করে, যে শৃঙ্খলে নবীরাই সর্বোচ্চ। তাই ওহি তাঁদের কাছে পৌঁছায় এই ফেরেশতা-সেতু বেয়ে, আর একইভাবে তাঁর রহমত ও শাস্তিও পৌঁছায় জগতে।"
          }
        ]
      },
      {
        "h": {
          "en": "None of Them Disobeys",
          "bn": "একজনও অবাধ্য নয়"
        },
        "p": [
          {
            "en": "As-Sa'di draws attention to a small, exact thing in the wording. God says He made the angels messengers and excepts not a single one of them from that office. That silence, with no exception made, is itself proof of how completely they obey their Lord and submit to His command. He points to the description given elsewhere: they do not disobey God in what He commands them, and they do what they are commanded (66:6). Obedience without a gap in it is the angels' native state, not an effort they must keep up.",
            "bn": "সাদী শব্দচয়নের একটি ছোট অথচ নিখুঁত জিনিসের দিকে নজর টানেন। আল্লাহ বলেন, তিনি ফেরেশতাদের দূত বানিয়েছেন, আর তাদের একজনকেও এই দায়িত্ব থেকে বাদ রাখেন না। কোনো ব্যতিক্রম না রেখে এই নীরবতাই প্রমাণ, কত পূর্ণভাবে তাঁরা তাঁদের রবের আনুগত্য করেন আর তাঁর হুকুমের কাছে নত হন। সাদী অন্যত্রের বর্ণনার দিকে ইঙ্গিত করেন: তাঁরা যা আদেশ করা হয় তাতে আল্লাহর নাফরমানি করেন না, আর যা আদেশ করা হয় তা-ই করেন (৬৬:৬)। ফাঁকহীন আনুগত্যই ফেরেশতাদের সহজাত স্বভাব, কষ্ট করে ধরে রাখা কিছু নয়।"
          },
          {
            "en": "This is worth sitting with, because it is the opposite of how obedience usually works in us. We weigh a command, bargain with it, delay, and keep a private clause of refusal held back in reserve. The angels given wings to fly His errands hold nothing back and waste no time. The verse is not scolding anyone here; it is simply showing what willing service looks like when it is pure, so that a reader can measure his own slow and conditional yes against a service that has neither flaw.",
            "bn": "এটা নিয়ে একটু থামা দরকার, কারণ আমাদের ভেতরে আনুগত্য সাধারণত যেভাবে কাজ করে, এ তার উল্টো। আমরা হুকুম মেপে দেখি, তার সঙ্গে দরদাম করি, দেরি করি, আর অস্বীকারের একটা গোপন শর্ত হাতে রেখে দিই। অথচ তাঁর হুকুম উড়িয়ে নিয়ে যাওয়ার জন্য ডানা পাওয়া ফেরেশতারা কিছুই আটকে রাখেন না, এক মুহূর্তও নষ্ট করেন না। আয়াত এখানে কাউকে ধমক দিচ্ছে না; কেবল দেখিয়ে দিচ্ছে, খাঁটি হলে স্বেচ্ছাসেবা দেখতে কেমন হয়, যাতে পাঠক নিজের দেরিভরা শর্তসাপেক্ষ হ্যাঁ-টাকে এমন এক সেবার পাশে মেপে নিতে পারে, যাতে কোনো খুঁত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Wings, as They Were Told",
          "bn": "ডানা, যেমন বলা হয়েছে"
        },
        "p": [
          {
            "en": "Uli ajniha mathna wa-thulatha wa-ruba: possessing wings, in twos and threes and fours. Ibn Kathir explains that they fly with these wings to deliver swiftly whatever they are commanded to deliver. Qatada, cited by at-Tabari and al-Baghawi, reads the counts plainly: some angels have two wings, some three, and some four. Al-Qurtubi adds that with them they descend from the heaven to the earth and ascend back again, crossing in a single moment a distance that would otherwise take an age to travel.",
            "bn": "উলি আজনিহাতিন মাসনা ওয়া সুলাসা ওয়া রুবা: ডানাওয়ালা, দুই দুই, তিন তিন আর চার চার করে। ইবন কাসীর ব্যাখ্যা করেন, এই ডানা দিয়েই তাঁরা উড়ে গিয়ে যা আদেশ করা হয় তা দ্রুত পৌঁছে দেন। কাতাদা, যাঁকে তাবারী ও বাগাভী উদ্ধৃত করেন, সংখ্যাগুলো সোজা অর্থেই নেন: কারও দুটি ডানা, কারও তিনটি, কারও চারটি। কুরতুবী যোগ করেন, এই ডানায় তাঁরা আসমান থেকে জমিনে নামেন আর জমিন থেকে আসমানে ওঠেন, মুহূর্তে পাড়ি দেন এমন দূরত্ব, যা নইলে পেরোতে যুগ লেগে যেত।"
          },
          {
            "en": "How these wings are, the early scholars did not try to picture. They affirmed them exactly as the verse gives them, real wings, and left the manner of them to God, neither explaining them away as mere imagery nor drawing a diagram of what cannot be seen. The commentators report the counts and the speed; they do not describe feathers or colour. That restraint is itself a lesson: faith here accepts what is told on the authority of the Teller, without demanding that the unseen be reduced to something the eye could sketch.",
            "bn": "এই ডানা কেমন, আগের যুগের আলিমরা তার ছবি আঁকার চেষ্টা করেননি। আয়াত যেভাবে দিয়েছে ঠিক সেভাবেই তাঁরা তা মেনে নিয়েছেন, সত্যিকারের ডানা, আর কেমন তা ছেড়ে দিয়েছেন আল্লাহর ওপর। তাঁরা একে নিছক রূপক বলে উড়িয়েও দেননি, আবার যা চোখে দেখা যায় না তার নকশাও আঁকেননি। তাফসিরকারেরা সংখ্যা আর গতির কথা বলেন; পালক বা রঙের বর্ণনা দেন না। এই সংযমই এক শিক্ষা: এখানে ইমান যা জানানো হয়েছে তা জানানেওয়ালার কথায় মেনে নেয়, অদৃশ্যকে চোখে আঁকা যায় এমন কিছুতে নামিয়ে আনার দাবি না তুলে।"
          },
          {
            "en": "Ma'arif al-Qur'an cautions that the counts are not a limit but an example, since a sound report puts far more than four wings on a single angel. It even raises a second possibility, from Abu Hayyan: the words twos and threes and fours may describe the messengers rather than the wings, angels arriving in groups of such size, and here too the four is no ceiling, for the Qur'an itself speaks of angels coming in far greater number than any of these.",
            "bn": "মাআরিফুল কুরআন সতর্ক করে, এই সংখ্যাগুলো সীমা নয়, উদাহরণ, কারণ একটি সহিহ বর্ণনা একটিমাত্র ফেরেশতার গায়ে চারটির চেয়ে অনেক বেশি ডানা বসায়। এমনকি আবু হাইয়ান থেকে সে দ্বিতীয় একটি সম্ভাবনাও তোলে: দুই, তিন ও চার শব্দগুলো হয়তো ডানা নয়, দূতদেরই বর্ণনা করছে, অর্থাৎ ফেরেশতারা অত সংখ্যায় দলে দলে আসেন, আর এখানেও চারটি কোনো ঊর্ধ্বসীমা নয়, কেননা কুরআন নিজেই এগুলোর চেয়ে আরও অনেক বেশি সংখ্যায় ফেরেশতা আসার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Hundred Wings",
          "bn": "ছয়শ ডানা"
        },
        "p": [
          {
            "en": "The clearest evidence that the counts are illustrative comes in a report both Ibn Kathir and al-Qurtubi bring to the verse. Al-Bukhari records, on the authority of Ibn Mas'ud, that the Prophet ﷺ had seen Jibril (AS) having 600 wings (Bukhari 3232). The report sits in al-Bukhari's collection, into which its compiler admitted only sound narrations, and al-Qurtubi notes that the same wording is preserved in Sahih Muslim as well. From two wings to 600, the created ranks are vast beyond our counting.",
            "bn": "সংখ্যাগুলো যে কেবল উদাহরণ, তার স্পষ্টতম প্রমাণ আসে এমন এক বর্ণনায়, যা ইবন কাসীর ও কুরতুবী দুজনেই এই আয়াতের সঙ্গে আনেন। বুখারী ইবন মাসউদের সূত্রে বর্ণনা করেন, নবী ﷺ জিবরীল (আ)-কে ৬০০ ডানাসহ দেখেছিলেন (বুখারী ৩২৩২)। বর্ণনাটি আছে বুখারীর সেই সংকলনে, যাতে সংকলক কেবল সহিহ বর্ণনাই স্থান দিয়েছেন, আর কুরতুবী জানান একই শব্দ সহিহ মুসলিমেও সংরক্ষিত। দুই ডানা থেকে ৬০০, সৃষ্টির স্তর আমাদের গোনার বাইরে বিস্তৃত।"
          },
          {
            "en": "Al-Baghawi ties the same sighting to the words of Surah an-Najm, that the Prophet ﷺ saw of his Lord's greatest signs (53:18), and Ibn Mas'ud explained that what he saw there was Jibril (AS) in his true created form. The lesson the commentators draw is not arithmetic but awe: if a single created servant is built on this scale, the God who increases creation as He wills is beyond any total the mind can set. The wing-count is a door opening onto His power, not a figure to be tallied and closed.",
            "bn": "বাগাভী একই দর্শনকে জুড়ে দেন সূরা নাজমের বাণীর সঙ্গে, যে নবী ﷺ তাঁর রবের সবচেয়ে বড় নিদর্শনগুলোর কিছু দেখেছিলেন (৫৩:১৮), আর ইবন মাসউদ ব্যাখ্যা করেন যে তিনি সেখানে যা দেখেছিলেন তা ছিল জিবরীল (আ) তাঁর আসল সৃষ্ট আকৃতিতে। তাফসিরকারেরা এখান থেকে যে শিক্ষা টানেন তা হিসাব নয়, বিস্ময়: একটিমাত্র সৃষ্ট বান্দা যদি এই মাপে গড়া হয়, তবে যে আল্লাহ সৃষ্টিতে যা ইচ্ছে বাড়ান, তিনি মন যে কোনো হিসাব কষতে পারে তার সবকিছুর ঊর্ধ্বে। ডানার এই সংখ্যা তাঁর ক্ষমতার দিকে খুলে যাওয়া এক দরজা, গুনে ফেলে বন্ধ করে দেওয়ার কোনো অঙ্ক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Adds He Wills",
          "bn": "যা তিনি ইচ্ছেমতো বাড়ান"
        },
        "p": [
          {
            "en": "Then: yazidu fi-l-khalqi ma yasha, He increases in creation what He wills. The commentators do not settle on a single scope for the words, and this article keeps their difference open rather than choosing between them. On the first reading, carried by most of them according to al-Qurtubi and by al-Hasan, the increase is in the angels themselves, in wings beyond the two or three or four already named. As-Suddi puts it simply: He increases their wings and their creation however He wills.",
            "bn": "তারপর: ইয়াযিদু ফিল খালকি মা ইয়াশা, তিনি সৃষ্টিতে যা ইচ্ছে বাড়িয়ে দেন। এর পরিধি কতটুকু, তাফসিরকারেরা তা নিয়ে একমত হন না, আর এই লেখা তাঁদের মতভেদ খোলা রাখে, কোনো একটি বেছে নেয় না। প্রথম পাঠে, কুরতুবীর মতে যা তাঁদের বেশিরভাগ এবং হাসান বসরি বহন করেন, এই বৃদ্ধি ফেরেশতাদের নিজেদের মধ্যেই, আগে উল্লেখ করা দুটি, তিনটি বা চারটি ডানার ওপরে আরও ডানায়। আস-সুদ্দী সোজা করে বলেন: তিনি তাঁদের ডানা আর তাঁদের সৃষ্টি যা ইচ্ছে বাড়িয়ে দেন।"
          },
          {
            "en": "On another reading the increase spills past the angels into creation at large. Az-Zuhri and Ibn Jurayj glossed it as beauty of voice; Ibn Kathir notes that al-Bukhari recorded this from az-Zuhri in al-Adab. Qatada read it as comeliness, loveliness in the eyes, a fine nose, sweetness in the mouth. Others named a handsome face, good handwriting, or the gift of intellect and discernment. Each reader points to a different place where God's added touch shows itself, and the verse's own words refuse to be narrowed to any single field.",
            "bn": "আরেক পাঠে এই বৃদ্ধি ফেরেশতাদের ছাড়িয়ে গোটা সৃষ্টিতে গড়িয়ে পড়ে। যুহরী ও ইবন জুরায়জ একে ব্যাখ্যা করেন কণ্ঠের সৌন্দর্য হিসেবে; ইবন কাসীর জানান, বুখারী এটি যুহরী থেকে আল-আদাবে বর্ণনা করেছেন। কাতাদা পড়েন লাবণ্য হিসেবে, চোখের মাধুর্য, সুন্দর নাক, মুখের মিষ্টতা। আরও কেউ কেউ নাম নেন সুন্দর চেহারা, সুন্দর হাতের লেখা, কিংবা বুদ্ধি ও বিচারবোধের দানের। প্রত্যেক পাঠক ভিন্ন এক জায়গার দিকে আঙুল তোলেন, যেখানে আল্লাহর বাড়তি ছোঁয়া ফুটে ওঠে, আর আয়াতের নিজের শব্দই কোনো একটিমাত্র ক্ষেত্রে বাঁধা পড়তে রাজি নয়।"
          },
          {
            "en": "Az-Zamakhshari, cited by al-Qurtubi, reads the verse as absolute, taking in every increase: tall stature, a balanced form, complete limbs, strength of grip, soundness of mind, sureness of judgment, courage of heart, generosity of soul, a ready and eloquent tongue. As-Sa'di lists much the same, adding beauty of voice and the pleasure of melody. Ma'arif al-Qur'an draws the moral: whatever excellence a person carries is a gift and a blessing from God, so the right response to any strength you find in yourself is gratitude.",
            "bn": "যামাখশারী, যাঁকে কুরতুবী উদ্ধৃত করেন, আয়াতটিকে পড়েন নিরঙ্কুশ হিসেবে, যা সব রকম বৃদ্ধিকেই ধরে নেয়: লম্বা গড়ন, সুষম অবয়ব, পূর্ণ অঙ্গপ্রত্যঙ্গ, হাতের জোর, বুদ্ধির স্বচ্ছতা, বিচারের দৃঢ়তা, হৃদয়ের সাহস, মনের উদারতা, প্রস্তুত ও বাগ্মী জিহ্বা। সাদী প্রায় একই তালিকা দেন, সঙ্গে যোগ করেন কণ্ঠের সৌন্দর্য আর সুরের আনন্দ। মাআরিফুল কুরআন শিক্ষাটি টেনে আনে: মানুষের বহন করা যে কোনো উৎকর্ষই আল্লাহর দান ও নিয়ামত, তাই নিজের ভেতরে যে শক্তিই পান, তার সঠিক জবাব কৃতজ্ঞতা।"
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
            "bn": "আয়াত নিজেকে সিলমোহর করে: ইন্নাল্লাহা আলা কুল্লি শাইয়িন কাদির, নিশ্চয় আল্লাহ সব কিছুর ওপর সক্ষম। তাবারী এই সমাপ্তি পড়েন ঠিক তার আগের পঙক্তির আলোকে: তিনি তাঁর সৃষ্টিতে যা ইচ্ছে বাড়াতে আর যা ইচ্ছে আটকে রাখতে সক্ষম, ফেরেশতাদের ডানায় যেমন, তেমনি বাকি সবকিছুতেও। সাদী যোগ করেন, তাঁর ক্ষমতা যা-ই তিনি চান তাতেই পৌঁছায়, কোনো কিছুই তা ঠেকাতে পারে না, আর কিছু সৃষ্টিকে অন্যদের ওপরে তুলে ধরা সেই অসীম ক্ষমতার কেবল একটি নমুনা।"
          },
          {
            "en": "So the verse arrives where it began. It opened with praise and closed with power, and between them it showed God splitting existence into being, sending angels out on wings, and adding to His own handiwork as He pleases. The quiet claim it lays on the reader is personal: the clearness of your mind, the ease in your voice, the steadiness of your hands were added to you, not achieved by you. The God who tore the heavens open from nothing, and who can bring them back, is the right address for your thanks.",
            "bn": "তাই আয়াত যেখানে শুরু হয়েছিল, সেখানেই ফিরে আসে। শুরু হয়েছিল প্রশংসা দিয়ে, শেষ হয় ক্ষমতা দিয়ে, আর মাঝখানে দেখিয়ে দেয় আল্লাহকে অস্তিত্বকে চিরে সৃষ্টি করতে, ফেরেশতাদের ডানায় চড়িয়ে পাঠাতে, আর নিজের হাতের কাজে যা ইচ্ছে যোগ করতে। পাঠকের ওপর এটি যে নীরব দাবিটি রাখে তা ব্যক্তিগত: আপনার মনের স্বচ্ছতা, কণ্ঠের সহজতা, হাতের স্থিরতা আপনাকে যোগ করে দেওয়া হয়েছে, আপনি অর্জন করেননি। যে আল্লাহ শূন্য থেকে আকাশকে চিরে এনেছেন, আর যিনি তা ফিরিয়েও আনতে পারেন, আপনার কৃতজ্ঞতার সঠিক ঠিকানা তিনিই।"
          }
        ]
      }
    ]
  },
  "35:10": {
    "sections": [
      {
        "h": {
          "en": "A Desire Redirected",
          "bn": "চাওয়াটির দিক ঘুরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "The verse opens on a wanting already underway: man kana yuridu al-'izzata, whoever has been desiring honour. It does not tell him to stop. 'Izzah comes from a root meaning to be hard and unassailable, the standing nobody can break into, and the Quran never treats the appetite for it as a fault. It simply moves the address from the wanting to the supply.",
            "bn": "আয়াতটি শুরু হয় এমন এক আকাঙ্ক্ষা দিয়ে যা ইতিমধ্যেই চলছে: মান কানা ইউরীদুল-ইযযাতা — যে সম্মান চেয়ে আসছে। তাকে চাওয়া বন্ধ করতে বলা হয়নি। 'ইযযাত' শব্দের মূল অর্থ কঠিন ও দুর্ভেদ্য হওয়া — সেই মর্যাদা, যাতে কেউ সিঁধ কাটতে পারে না — আর কুরআন কখনো এই আকাঙ্ক্ষাকে দোষ বলে না। সে কেবল আলোচনাটিকে চাওয়া থেকে সরিয়ে নিয়ে যায় জোগানের উৎসের দিকে।"
          },
          {
            "en": "Fa-lillahi al-'izzatu jami'a — then to Allah belongs honour, all of it. Jami'an is the word that shuts the door: not most of it, not the larger share, the whole. A near-identical clause stands at 4:139, put to people who took disbelievers as allies instead of the believers and were asked whether they sought honour with them. Both verses answer a search by relocating the store, not by scolding the searcher.",
            "bn": "ফালিল্লাহিল-ইযযাতু জামী'আ — সমস্ত সম্মান আল্লাহরই। 'জামী'আন' শব্দটিই দরজা বন্ধ করে দেয়: বেশিরভাগ নয়, বড় অংশ নয়, পুরোটাই। প্রায় হুবহু একই বাক্য আছে 4:139 আয়াতে, যা বলা হয়েছে তাদের উদ্দেশে যারা মুমিনদের ছেড়ে কাফিরদের বন্ধুরূপে নিয়েছিল, আর জিজ্ঞেস করা হয়েছিল তারা কি তাদের কাছে সম্মান খোঁজে। দুটি আয়াতই অনুসন্ধানকারীকে ধমক না দিয়ে ভাণ্ডারের ঠিকানা বদলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "আয়াতটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "Surah Fatir has been building an argument about things that rise. 35:9, immediately before, describes the winds stirring clouds, the clouds driven to a dead land, the earth revived after its death, and closes: thus is the resurrection. 35:11, immediately after, traces a human being from dust to a drop, and says no lifespan is lengthened or shortened except that it is in a register.",
            "bn": "সূরা ফাতির ধারাবাহিকভাবে এমন সব জিনিস নিয়ে যুক্তি সাজাচ্ছে যেগুলো উপরে ওঠে। ঠিক আগের আয়াত 35:9 বর্ণনা করে বাতাস মেঘ সঞ্চার করছে, মেঘ চালিত হচ্ছে মৃত ভূখণ্ডের দিকে, মাটি মৃত্যুর পর আবার জীবন পাচ্ছে — আর শেষ হয় এই কথায়: এভাবেই ঘটবে পুনরুত্থান। ঠিক পরের আয়াত 35:11 মানুষকে ধুলা থেকে শুক্রবিন্দু পর্যন্ত অনুসরণ করে, আর বলে কারও আয়ু বাড়ানো বা কমানো হয় না, তা কিতাবে লেখা থাকা ছাড়া।"
          },
          {
            "en": "Between those two verses sits this one, and its subject is also a rising: words going up. The placement is doing work. A surah that has just lifted dead ground into life, and is about to show a lifetime written down in advance, uses the space between to name the one thing a person actually sends upward. Rain comes down; speech goes up.",
            "bn": "ঠিক এ দুটির মাঝখানে বসে আছে আলোচ্য আয়াতটি, আর এরও বিষয় উপরে ওঠা: কথার ঊর্ধ্বগমন। এই অবস্থানটি অর্থবহ। যে সূরা মাত্রই মৃত মাটিকে জীবনে তুলে ধরল এবং এখনই দেখাতে যাচ্ছে আগাম লিখে রাখা একটি আয়ুষ্কাল, সেই সূরা মাঝের এই জায়গাটুকু ব্যবহার করে বলে দেয় মানুষ আসলে কী উপরে পাঠাতে পারে। বৃষ্টি নেমে আসে; কথা উপরে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Good Speech Ascends",
          "bn": "পবিত্র কথা উপরে ওঠে"
        },
        "p": [
          {
            "en": "Ilayhi yas'adu al-kalimu at-tayyib. The phrase to Him is placed before the verb, and in Arabic that fronting restricts the destination: there is one address, and nothing travels anywhere else. Yas'adu is the plain verb for climbing. The commentators gloss al-kalim at-tayyib as the remembrance of Allah, the declaration of His oneness, recitation of the Quran and truthful speech — words that are wholesome rather than words that are clever.",
            "bn": "ইলাইহি ইয়াস'আদুল-কালিমুত-তাইয়িব। 'তাঁরই দিকে' কথাটি ক্রিয়াপদের আগে বসানো, আর আরবিতে এই অগ্রবর্তন গন্তব্যকে সীমাবদ্ধ করে দেয়: ঠিকানা একটিই, অন্য কোথাও কিছু যায় না। 'ইয়াস'আদু' হলো ওঠার সাধারণ ক্রিয়াপদ। মুফাসসিরগণ 'আল-কালিমুত-তাইয়িব'-এর ব্যাখ্যায় বলেন আল্লাহর যিকির, তাঁর একত্বের ঘোষণা, কুরআন তিলাওয়াত ও সত্যবাদী কথা — অর্থাৎ চতুর কথা নয়, পবিত্র কথা।"
          },
          {
            "en": "Tayyib repays attention, because it is the same adjective the Quran uses of lawful and wholesome food. Speech is being sorted the way food is sorted: by what it is made of, not by how it sounds. That excludes a great deal of impressive talk and admits a great deal of plain talk. What climbs is not eloquence. It is speech that is clean at the source.",
            "bn": "'তাইয়িব' শব্দটির দিকে মনোযোগ দেওয়া দরকার, কারণ কুরআন এই একই বিশেষণ ব্যবহার করে হালাল ও পবিত্র খাদ্যের ক্ষেত্রে। কথাকে বাছাই করা হচ্ছে ঠিক যেভাবে খাদ্য বাছাই করা হয়: তা কী দিয়ে তৈরি সেই বিচারে, শুনতে কেমন লাগে সেই বিচারে নয়। এতে বহু চমকপ্রদ কথা বাদ পড়ে যায় আর বহু সাদামাটা কথা ঠাঁই পায়। যা উপরে ওঠে তা বাগ্মিতা নয়; তা এমন কথা যার উৎসই পরিচ্ছন্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "And the Deed Raises It",
          "bn": "আর সৎকর্ম তা উঁচুতে তোলে"
        },
        "p": [
          {
            "en": "Wal-'amalu as-salihu yarfa'uh — and righteous work raises it. Read this way, the word rises and the deed lifts it higher, so that a claim made on the tongue is carried by a life. The commentators also record a second reading of the pronoun, in which the good word raises the righteous deed, since a deed is weighed by the intention declared over it.",
            "bn": "ওয়াল-'আমালুস-সালিহু ইয়ারফা'উহ — আর সৎকর্ম তা উঁচুতে তুলে ধরে। এভাবে পড়লে কথাটি ওঠে আর আমল তাকে আরও উঁচুতে তোলে, ফলে জিহ্বার দাবিটিকে বহন করে একটি জীবন। মুফাসসিরগণ সর্বনামটির আরেকটি পাঠও উল্লেখ করেন, যেখানে পবিত্র কথাই সৎকর্মকে উঁচুতে তোলে — কারণ আমল ওজন করা হয় তার উপর ঘোষিত নিয়ত দিয়ে।"
          },
          {
            "en": "Either way the two are tied together, and neither travels alone. The verse offers no third arrangement in which a person is raised for one without the other. That is its answer to the question it opened with. Honour with Allah is not applied for. It is deposited, a word and a deed at a time, in an account nobody else can reach.",
            "bn": "যেভাবেই পড়া হোক, দুটি পরস্পরে বাঁধা, আর কোনোটিই একা যাত্রা করে না। আয়াতটি এমন কোনো তৃতীয় ব্যবস্থা রাখে না যেখানে একটি ছাড়া অন্যটির জোরে কাউকে উঁচু করা হয়। শুরুতে তোলা প্রশ্নের উত্তর এটিই। আল্লাহর কাছে সম্মান আবেদন করে পাওয়া যায় না; তা জমা হয় এক-একটি কথা ও এক-একটি আমলে — এমন এক হিসাবে, যেখানে অন্য কারও হাত পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Plot That Goes Dead",
          "bn": "যে চক্রান্ত নিষ্ফল হয়"
        },
        "p": [
          {
            "en": "The second half turns to the opposite traffic. Those who plot evil deeds will have a severe punishment, and then, of their scheming: wa makru ula'ika huwa yaburu. The pronoun huwa stands between subject and verb, which in Arabic pins the claim down — their plotting, that is what goes to ruin. Bawar is the root behind bur land, ground that takes seed and returns nothing.",
            "bn": "আয়াতের দ্বিতীয়ার্ধ ঘুরে যায় বিপরীতমুখী চলাচলের দিকে। যারা মন্দ কাজের চক্রান্ত করে তাদের জন্য কঠিন শাস্তি, আর তারপর তাদের চক্রান্ত সম্পর্কে: ওয়া মাকরু উলাইকা হুওয়া ইয়াবূর। সর্বনাম 'হুওয়া' বসেছে কর্তা ও ক্রিয়ার মাঝখানে, যা আরবিতে কথাটিকে নির্দিষ্ট করে দেয় — তাদের চক্রান্ত, সেটিই নিষ্ফল হয়ে যায়। 'বাওয়ার' সেই মূল, যা থেকে আসে 'বূর' জমি — যে মাটি বীজ নেয় কিন্তু কিছুই ফেরত দেয় না।"
          },
          {
            "en": "Surah Fatir uses that root once more, at 35:29, of a trade that will never go dead. One surah, one verb, two ledgers. The schemer's investment is not merely punished later; it is described as unproductive now. And notice the geometry the verse has drawn in a few short clauses: what is wholesome climbs, and what is plotted stays on the ground and rots where it lies.",
            "bn": "সূরা ফাতির এই মূলটি আরও একবার ব্যবহার করে 35:29 আয়াতে — এমন এক ব্যবসার বর্ণনায় যা কখনো নিষ্ফল হবে না। একই সূরা, একই ক্রিয়াপদ, দুটি খতিয়ান। চক্রান্তকারীর বিনিয়োগ কেবল পরে শাস্তি পায় না; তাকে এখনই বলা হচ্ছে ফলহীন। আর কয়েকটি ছোট বাক্যে আয়াতটি যে জ্যামিতি এঁকেছে তা লক্ষ করুন: যা পবিত্র তা উপরে ওঠে, আর যা চক্রান্ত তা মাটিতেই পড়ে থেকে পচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour That Can Be Given",
          "bn": "যে সম্মান দান করা হয়"
        },
        "p": [
          {
            "en": "If honour belongs to Allah entirely, it is also His to hand over. 63:8 quotes the hypocrites boasting that on returning to Madinah the mightier would drive out the humbler, and answers that honour belongs to Allah, and to His Messenger, and to the believers — but the hypocrites do not know. There is no tension with this verse: what is His alone is exactly what He is free to give.",
            "bn": "সম্মান যদি সম্পূর্ণরূপে আল্লাহরই হয়, তবে তা দান করার অধিকারও তাঁরই। 63:8 আয়াতে মুনাফিকদের গর্ব উদ্ধৃত হয়েছে যে, মাদীনায় ফিরে গিয়ে সম্মানিতরা হীনদের বের করে দেবে; আর উত্তর আসে — সমস্ত সম্মান আল্লাহর, তাঁর রাসূলের এবং মুমিনদের, কিন্তু মুনাফিকরা তা জানে না। এই আয়াতের সঙ্গে এর কোনো বিরোধ নেই: যা কেবল তাঁরই, তা দেওয়ার স্বাধীনতাও কেবল তাঁরই।"
          },
          {
            "en": "So the question left standing is one of direction. A person can spend years assembling standing out of other people's opinions, which are borrowed, revisable and soon forgotten. The verse does not call that wicked; it says the supply is not there, because honour was never owned by those being asked for it. The other route costs nothing: a clean word, and a deed placed underneath it.",
            "bn": "তাই যে প্রশ্নটি টিকে থাকে তা দিকনির্দেশের প্রশ্ন। মানুষ বছরের পর বছর অন্যের মতামত জড়ো করে মর্যাদা গড়তে পারে — যে মতামত ধার করা, বদলে যাওয়ার মতো, আর দ্রুতই বিস্মৃত। আয়াতটি একে পাপ বলছে না; বলছে, সেখানে জোগানটাই নেই — কারণ যাদের কাছে চাওয়া হচ্ছে, সম্মান কখনো তাদের মালিকানায় ছিল না। অন্য পথে কোনো খরচ নেই: একটি পরিচ্ছন্ন কথা, আর তার নিচে রাখা একটি আমল।"
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
            "en": "The verse opens ya ayyuha an-nas, O mankind, which in this surah is not a change of subject but a return. 35:3 had already used the same address to ask whether there is any creator besides Allah who provides for you from the heaven and the earth. That question established where provision comes from. This verse takes the next step and states what that makes us, and it does so without exempting anyone in the room.",
            "bn": "আয়াতটি শুরু হয় 'ইয়া আইয়ুহান নাস' — হে মানুষ — দিয়ে, যা এই সূরায় প্রসঙ্গ বদল নয়, বরং প্রত্যাবর্তন। 35:3 আয়াত আগেই একই সম্বোধন ব্যবহার করে প্রশ্ন করেছিল, আল্লাহ ছাড়া আর কোনো স্রষ্টা আছে কি যে আকাশ ও যমীন থেকে তোমাদের রিযিক দেয়। সেই প্রশ্ন ঠিক করে দিয়েছিল রিযিক কোথা থেকে আসে। এই আয়াত পরের ধাপে গিয়ে বলে দেয় তাতে আমাদের পরিচয় কী দাঁড়ায়, আর তা বলে ঘরের কাউকেই বাদ না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "You Are the Poor Ones",
          "bn": "তোমরাই সেই অভাবীরা"
        },
        "p": [
          {
            "en": "The Arabic is stronger than most translations can be. It does not say you are poor; it says antumu al-fuqara, you are the poor ones, with the definite article, which in Arabic restricts the description to those named. Poverty before Allah is not a stage some people pass through and others avoid. It is being said here that this is the category human beings occupy, and the word chosen is the same one the Quran uses for the destitute who receive zakat.",
            "bn": "আরবি ভাষ্যটি বেশির ভাগ অনুবাদের চেয়ে জোরালো। এতে বলা হয়নি তোমরা দরিদ্র; বলা হয়েছে 'আনতুমুল ফুকারা' — তোমরাই সেই অভাবীরা, নির্দিষ্টতাবাচক 'আল' সহ, যা আরবিতে বর্ণনাটিকে উল্লিখিতদের মধ্যেই সীমাবদ্ধ করে দেয়। আল্লাহর সামনে অভাব এমন কোনো স্তর নয় যা কেউ পার হয়ে যায় আর কেউ এড়িয়ে চলে। এখানে বলা হচ্ছে, মানুষ এই শ্রেণিতেই পড়ে; আর যে শব্দটি বেছে নেওয়া হয়েছে, কুরআন সেটিই ব্যবহার করে যাকাত গ্রহণকারী নিঃস্বদের জন্য।"
          },
          {
            "en": "The neediness is then aimed: ila Allah, towards Allah. This is not a comment on income. A person can be needy of Allah while owning a great deal, and the whole surah has been arguing that the wealth itself arrives from Him, so possession changes nothing about the direction of dependence. What the preposition rules out is the idea that one could be self-sufficient in the one relationship that keeps a person in existence from breath to breath.",
            "bn": "এরপর সেই অভাবের লক্ষ্য নির্ধারিত হয়: 'ইলাল্লাহ' — আল্লাহর দিকে। এটি আয়-রোজগার নিয়ে মন্তব্য নয়। একজন মানুষ বিপুল সম্পদের মালিক হয়েও আল্লাহর মুখাপেক্ষী হতে পারে, আর গোটা সূরাই যুক্তি দিয়ে আসছে যে সেই সম্পদও তাঁর কাছ থেকেই আসে, ফলে মালিকানা নির্ভরতার অভিমুখ বদলায় না। অব্যয়টি যা বাতিল করে দেয় তা হলো এই ধারণা যে সেই একটিমাত্র সম্পর্কে কেউ স্বয়ংসম্পূর্ণ হতে পারে, যে সম্পর্ক মানুষকে নিঃশ্বাস থেকে নিঃশ্বাসে টিকিয়ে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "He Alone Is Free of Need",
          "bn": "একমাত্র তিনিই অভাবমুক্ত"
        },
        "p": [
          {
            "en": "The other half of the verse is built with the same care: wallahu huwa al-ghaniyy al-hamid. The pronoun huwa sitting between the subject and its description is the Arabic device for exclusivity, so the sense is that He, and no one else, is the Free of need. And al-Ghaniyy does not arrive alone. It is paired with al-Hamid, the Praiseworthy, which as-Sa'di notes closes off a misreading, since a creature can be rich and give nothing and earn no praise for it.",
            "bn": "আয়াতের অন্য অর্ধেকটিও একই যত্নে গড়া: 'ওয়াল্লাহু হুওয়াল গানিয়্যুল হামীদ'। কর্তা ও তার বর্ণনার মাঝখানে বসা সর্বনাম 'হুওয়া' আরবিতে একচ্ছত্রতা বোঝানোর কৌশল, ফলে অর্থ দাঁড়ায় — তিনিই, আর কেউ নয়, অভাবমুক্ত। আর 'আল-গানিয়্য' একা আসে না। এর সঙ্গে জোড়া লাগানো হয় 'আল-হামীদ' — প্রশংসিত; আস-সাদী উল্লেখ করেন যে এটি একটি ভুল পাঠের পথ বন্ধ করে দেয়, কারণ সৃষ্টির কেউ ধনী হয়েও কিছু না দিয়ে বসে থাকতে পারে এবং তাতে কোনো প্রশংসা অর্জন করে না।"
          },
          {
            "en": "Being needless and being praised are held together, which means His independence is not indifference. The Quran repeats the point wherever human behaviour might be mistaken for something He requires: 39:7 says that if you disbelieve, Allah is free of need of you, and yet does not approve disbelief for His servants; 29:6 says the one who strives strives for himself; 47:38 tells those who withhold from spending that Allah is the Free of need while they are the needy; 22:64 joins the same two names again.",
            "bn": "অভাবমুক্ত হওয়া আর প্রশংসিত হওয়া একসঙ্গে ধরা থাকে, অর্থাৎ তাঁর স্বনির্ভরতা উদাসীনতা নয়। মানুষের আচরণকে যেখানেই তাঁর প্রয়োজন বলে ভুল হতে পারে, কুরআন সেখানেই কথাটি আবার বলে: 39:7 আয়াত বলে, তোমরা কুফরি করলেও আল্লাহ তোমাদের মুখাপেক্ষী নন, তবু তিনি তাঁর বান্দাদের জন্য কুফরি পছন্দ করেন না; 29:6 আয়াত বলে, যে প্রচেষ্টা চালায় সে নিজের জন্যই চালায়; 47:38 আয়াত ব্যয়ে কার্পণ্যকারীদের বলে যে আল্লাহই অভাবমুক্ত আর তারাই মুখাপেক্ষী; 22:64 আয়াত আবার সেই একই দুটি নাম জোড়া লাগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proof Comes Immediately After",
          "bn": "প্রমাণ আসে ঠিক পরেই"
        },
        "p": [
          {
            "en": "The claim is not left as an assertion. The very next verse, 35:16, says that if He wills He can remove you and bring a new creation, and 35:17 adds that this is not difficult for Allah. That is the argument in two short lines: a party that can be replaced without cost to the other side is by definition the dependent party. Read in sequence, the three verses state a condition, prove it, and refuse to soften it.",
            "bn": "দাবিটিকে কেবল ঘোষণা হিসেবে ছেড়ে দেওয়া হয় না। ঠিক পরের আয়াত 35:16 বলে, তিনি ইচ্ছা করলে তোমাদের সরিয়ে দিয়ে নতুন সৃষ্টি আনতে পারেন, আর 35:17 আয়াত যোগ করে যে এটি আল্লাহর পক্ষে কঠিন নয়। দুটি ছোট বাক্যেই যুক্তিটি সম্পূর্ণ: যে পক্ষকে অন্য পক্ষের কোনো ক্ষতি ছাড়াই বদলে ফেলা যায়, সংজ্ঞা অনুসারে সেই পক্ষই নির্ভরশীল। ক্রম অনুসারে পড়লে তিনটি আয়াত একটি অবস্থা ঘোষণা করে, তা প্রমাণ করে, এবং তাকে নরম করতে অস্বীকার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Needle and the Sea",
          "bn": "সুই আর সমুদ্র"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Dharr (RA) a long hadith qudsi in which Allah tells His servants that they will never reach harming Him nor benefiting Him; that if the first and last of mankind and jinn were as pious as the most pious heart among them it would add nothing to His dominion; and that if all of them stood in one place and asked, and He gave each what he asked, it would decrease what He has only as a needle decreases the sea when dipped into it.",
            "bn": "মুসলিম আবু যর (রাঃ) থেকে একটি দীর্ঘ হাদীসে কুদসী বর্ণনা করেন, যেখানে আল্লাহ তাঁর বান্দাদের বলেন যে তারা কখনোই তাঁর ক্ষতি করার নাগালে পৌঁছাবে না, তাঁর উপকার করার নাগালেও নয়; আর মানুষ ও জিনের প্রথম থেকে শেষ পর্যন্ত সবাই যদি তাদের মধ্যেকার সবচেয়ে পরহেজগার অন্তরের মতো পরহেজগার হয়ে যেত, তাতে তাঁর রাজত্বে কিছুই বাড়ত না; আর তারা সবাই যদি এক জায়গায় দাঁড়িয়ে চাইত এবং তিনি প্রত্যেককে তার চাওয়া দিয়ে দিতেন, তাতে তাঁর কাছে যা আছে তা ততটুকুই কমত যতটুকু সমুদ্রে সুই ডোবালে সমুদ্র কমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking as the Natural Response",
          "bn": "চাওয়াই স্বাভাবিক জবাব"
        },
        "p": [
          {
            "en": "That last image is where the verse becomes practical. If your neediness is permanent and His supply is undiminished by giving, then asking is not an imposition on Him and restraint in asking is not good manners. 40:60 makes it a command with a promise attached, call upon Me and I will respond, and warns that those too proud for His worship will enter Hell humiliated. Pride is named as the opposite of du'a, which fits a verse whose whole content is what we are.",
            "bn": "শেষ উপমাটিতেই আয়াতটি ব্যবহারিক হয়ে ওঠে। আপনার অভাব যদি স্থায়ী হয় আর দেওয়ায় যদি তাঁর ভাণ্ডার না কমে, তবে চাওয়া তাঁর ওপর কোনো বোঝা নয়, আর চাওয়ায় সংযম কোনো ভদ্রতাও নয়। 40:60 আয়াত একে প্রতিশ্রুতিসহ আদেশে পরিণত করে — আমাকে ডাকো, আমি সাড়া দেব — এবং সতর্ক করে যে যারা অহংকারবশত তাঁর ইবাদত করে না তারা লাঞ্ছিত হয়ে জাহান্নামে ঢুকবে। অহংকারকেই দুআর বিপরীত হিসেবে নাম দেওয়া হয়েছে, আর তা এমন এক আয়াতের সঙ্গেই মানায় যার পুরো বিষয়বস্তু আমরা আসলে কী।"
          },
          {
            "en": "It also settles how we stand towards each other. If the description covers all of mankind without exception, then the differences between us are differences in what has been handed out, not in category. 2:186 keeps the door from ever being far, with Allah saying He is near and responds to the one who calls. The person who has accepted the first half of this verse has nowhere else to go with a need, and no reason to want anywhere else.",
            "bn": "এটি একে অপরের প্রতি আমাদের অবস্থানও ঠিক করে দেয়। বর্ণনাটি যদি ব্যতিক্রমহীনভাবে গোটা মানবজাতিকে ধরে, তবে আমাদের মধ্যেকার পার্থক্য কেবল কাকে কী দেওয়া হয়েছে তার পার্থক্য, শ্রেণির পার্থক্য নয়। 2:186 আয়াত দরজাটিকে কখনোই দূরে যেতে দেয় না, যেখানে আল্লাহ বলেন তিনি নিকটে আছেন এবং আহ্বানকারীর ডাকে সাড়া দেন। এই আয়াতের প্রথমার্ধটি যে মেনে নিয়েছে, তার প্রয়োজন নিয়ে আর কোথাও যাওয়ার জায়গা নেই, আর অন্য কোথাও যেতে চাওয়ার কারণও নেই।"
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
          "bn": "যেখানে মানুষ দাঁড়িয়ে থাকে"
        },
        "p": [
          {
            "en": "The surah has just stripped away every false support. The idols you call on do not own so much as the skin of a date-stone, and they cannot even hear you (35:13). You yourself are the poor one, wholly in need of God, while He alone is rich and praised (35:15). If He willed, He could remove you and bring a fresh creation in your place (35:16), and none of that is the least bit hard for Him (35:17). It is onto this cleared ground, with every prop knocked away, that the next verse sets down a single unshakable rule about who answers for what.",
            "bn": "সূরাটি এর মধ্যেই সব ভুয়া অবলম্বন সরিয়ে দিয়েছে। যাদের আপনি ডাকেন, সেই মূর্তিরা খেজুরের আঁটির পাতলা আবরণটুকুরও মালিক নয়, আপনার ডাক শোনার ক্ষমতাও তাদের নেই (৩৫:১৩)। আপনি নিজেই তো অভাবী, পুরোপুরি আল্লাহর মুখাপেক্ষী, আর তিনি একাই অভাবহীন ও প্রশংসিত (৩৫:১৫)। তিনি চাইলে আপনাকে সরিয়ে আপনার জায়গায় নতুন সৃষ্টি আনতে পারেন (৩৫:১৬), আর এর কোনোটিই তাঁর পক্ষে একটুও কঠিন নয় (৩৫:১৭)। ঠিক এই পরিষ্কার জমিনে, যখন সব অবলম্বন সরে গেছে, পরের আয়াত কে কিসের জবাব দেবে তা নিয়ে একটি অটল নিয়ম বসিয়ে দেয়।"
          },
          {
            "en": "The rule is the hinge of the whole argument. Having shown that no imagined partner can save you, the verse now says that no living person can save you either, not in the matter that will finally decide everything. Ibn Kathir reads the entire statement as set on the Day of Resurrection, when every account at last comes due. The warning the Prophet carries and the purity a person builds are both weighed on that Day, and they are weighed against no record but the person's own. Everything the surah has argued now narrows to that.",
            "bn": "এই নিয়মটাই গোটা যুক্তির মূল কব্জা। কল্পিত কোনো শরিক যে আপনাকে বাঁচাতে পারে না, তা দেখানোর পর আয়াত এবার বলছে, জীবিত কোনো মানুষও আপনাকে বাঁচাতে পারবে না, অন্তত যে বিষয়টি শেষ বিচারে সবকিছু ঠিক করে দেবে তাতে। ইবন কাসীর গোটা কথাটিকে কিয়ামতের দিনের সঙ্গে জড়িয়ে পড়েন, যেদিন প্রতিটি হিসাব চুকিয়ে দেওয়ার সময় আসে। নবী ﷺ যে সতর্কবাণী বয়ে আনেন আর মানুষ নিজের ভেতরে যে পবিত্রতা গড়ে, সেদিন দুটোরই ওজন হয়, আর ওজন হয় কেবল সেই মানুষের নিজের আমলনামার বিপরীতে। সূরা এতক্ষণ যা বলে এসেছে, সব এখন ওই এক বিন্দুতে এসে ঠেকে।"
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
            "bn": "ওয়ালা তাযিরু ওয়াযিরাতুন বিযরা উখরা: কোনো বোঝা বহনকারী অন্যের বোঝা বইবে না। তাবারী একে গুনাহের সোজা শব্দ দিয়ে বোঝান, এক পাপী সত্তা অন্য সত্তার পাপ বহন করে না। তিনি আরবির একটি সূক্ষ্ম জায়গায় থামেন। ভারাক্রান্ত সত্তাকে বোঝাতে যে শব্দ, মুসকালা, তা স্ত্রীবাচক। এর কারণ এই নয় যে কথাটা কেবল নারীদের নিয়ে, বরং শব্দটি দাঁড়িয়ে আছে নাফস তথা আত্মার জায়গায়, যে শব্দ পুরুষ ও নারী উভয়কেই ধরে, যেমন কুরআন বলে প্রতিটি সত্তাই মৃত্যুর স্বাদ নেবে। এখানে বোঝা মানে মানুষের নিজের অন্যায়ের মরা ভার, আর কিছু নয়।"
          },
          {
            "en": "The next clause turns the principle into a picture. Wa in tad'u muthqalatun ila himliha: and if a soul weighed down by its sins calls out to another to carry part of that load, la yuhmal minhu shay'un, nothing of it will be carried. The Muyassar keeps the line bare and exact — a soul heavy with sins will look for somebody to lift them and finds nobody. The asking is real, and the refusal is total. Not a single particle of the weight slides from the back that earned it over to anyone else.",
            "bn": "পরের অংশটি নীতিকে ছবিতে বদলে দেয়। ওয়া ইন তাদউ মুসকালাতুন ইলা হিমলিহা: গুনাহের ভারে নুয়ে পড়া কোনো সত্তা যদি অন্যকে ডাকে সেই বোঝার কিছু অংশ বইতে, লা ইউহমাল মিনহু শাইউন, তার কিছুই বয়ে দেওয়া হবে না। মুয়াসসার কথাটি একদম সাদামাটা ও নিখুঁত রাখে, গুনাহে ভারী সত্তা কাউকে খুঁজবে ভার নামাতে, অথচ কাউকেই পাবে না। ডাকটা সত্যি, আর প্রত্যাখ্যানটা পুরোপুরি। যে পিঠ ভার কামিয়েছে তার থেকে ভারের একটি কণাও অন্য কারো কাছে সরে যায় না।"
          },
          {
            "en": "As-Sa'di draws out why this lands as such a shock. In this world a close friend stands by his friend and a relative helps his relative; we lean on each other as a matter of course. The Hereafter is not built on that pattern. There, he says, a servant will wish he held even the smallest claim against somebody, even against his own parents and kin, so that he might collect it as a good deed. The supports we trusted our whole lives are simply not standing there anymore.",
            "bn": "সাদী খুলে বলেন কেন কথাটা এত বড় ধাক্কা হয়ে আসে। এই দুনিয়ায় ঘনিষ্ঠ বন্ধু বন্ধুর পাশে দাঁড়ায়, আত্মীয় আত্মীয়কে সাহায্য করে, একে অন্যের উপর ভর দেওয়া আমাদের কাছে স্বাভাবিক। আখিরাত সেই ছাঁচে গড়া নয়। তিনি বলেন, সেদিন বান্দা চাইবে কারো উপর যদি তার সামান্যতম কোনো পাওনা থাকত, এমনকি নিজের বাবা-মা ও আত্মীয়দের উপরও, যাতে সে তা নেকি হিসেবে আদায় করে নিতে পারত। সারা জীবন যেসব অবলম্বনে ভরসা রেখেছি, সেগুলো সেদিন আর দাঁড়িয়ে নেই।"
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
            "bn": "ওয়া লাও কানা যা কুরবা: নিকটাত্মীয় হলেও। তাফসিরকারেরা এই কথাটিকে অস্পষ্ট থাকতে দিতে রাজি নন। তাবারী, বাগাভী ও মুয়াসসার সবাই বলে দেন আত্মীয়টি কে হতে পারে, বাবা, মা, ছেলে কিংবা ভাই। বাগাভী ইবন আব্বাস থেকে সেদিনের সাদাসিধা কথোপকথনটি আনেন: বাবা তার সন্তানের দেখা পেয়ে বলে, আমার কিছু গুনাহ তুমি বহন করো, আর সন্তান জবাব দেয়, পারব না, আমার উপর যা আছে তাই আমার জন্য যথেষ্ট। যেখানে হিসাব একান্ত ব্যক্তিগত, সেখানে রক্তের নৈকট্য কিছুই কিনে দিতে পারে না।"
          },
          {
            "en": "Al-Qurtubi gives the scene more voices. He relates from 'Ikrimah that a man will come to his father pleading: was I not dutiful to you, kind and good to you, while you see the state I am in now; grant me one good deed, or carry one sin away from me. The father answers, what you ask is a small thing, but I fear the very thing you fear, and he turns away. The same words pass between a man and his wife, and they meet the same refusal. Each voice is wholly taken up with its own survival.",
            "bn": "কুরতুবী দৃশ্যটিকে আরও কণ্ঠ জুড়ে দেন। তিনি ইকরিমা থেকে আনেন, একজন মানুষ তার বাবার কাছে এসে মিনতি করবে: আমি কি তোমার অনুগত ছিলাম না, তোমার প্রতি সদয় ও ভালো ছিলাম না, অথচ আমি এখন কোন অবস্থায় আছি তা তো দেখছ; আমাকে একটি নেকি দাও, নয়তো একটি গুনাহ আমার থেকে সরিয়ে নাও। বাবা জবাব দেয়, তুমি যা চাইছ তা সামান্য, কিন্তু তুমি যা ভয় পাচ্ছ ঠিক তা-ই আমি ভয় পাই, আর সে মুখ ফিরিয়ে নেয়। একই কথা চলে স্বামী ও স্ত্রীর মধ্যে, আর একই প্রত্যাখ্যানে গিয়ে ঠেকে। প্রতিটি কণ্ঠই নিজের বাঁচা নিয়েই পুরোপুরি ব্যস্ত।"
          },
          {
            "en": "Al-Qurtubi adds a second picture, this one from al-Fudayl ibn 'Iyad, that cuts deeper still. A mother meets the child she bore and nursed and cradled, and pleads: was my womb not your shelter, my breast not your drink, my lap not your bed; my sins have crushed me, so carry just one of them away. And the child, who owed her everything, says: leave me be, mother, I am far too taken up with my own sin to help you. The verse lets the most tender bond in all creation break clean against it.",
            "bn": "কুরতুবী আরেকটি ছবি জুড়ে দেন, এবার আল-ফুদাইল ইবন ইয়াদ থেকে, যা আরও গভীরে কেটে বসে। মা তার গর্ভে ধরা, বুকের দুধ খাওয়ানো, কোলে বড় করা সন্তানের দেখা পেয়ে মিনতি করে: আমার পেট কি তোমার আশ্রয় ছিল না, আমার বুক কি তোমার পানীয় ছিল না, আমার কোল কি তোমার বিছানা ছিল না; গুনাহ আমাকে পিষে ফেলেছে, তাই এর একটি অন্তত সরিয়ে নাও। আর যে সন্তান তার কাছে সবকিছুর ঋণী, সে বলে: আমাকে ছাড়ো মা, নিজের গুনাহ নিয়েই আমি এত ব্যস্ত যে তোমাকে সাহায্য করার জো নেই। সৃষ্টির সবচেয়ে কোমল বাঁধনটাকেও আয়াত এর গায়ে এসে ভেঙে পড়তে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refrain of Justice",
          "bn": "ন্যায়ের পুনরাবৃত্ত সুর"
        },
        "p": [
          {
            "en": "This sentence is not spoken only here. The same words, la taziru waziratun wizra ukhra, recur across the Qur'an: at 6:164, at 17:15, at 39:7, and at 53:38. When a phrase comes back word for word in so many places, it is being laid down as a settled law and not a passing remark. The law is a pillar of divine justice: no soul is punished for a crime that is not its own, and no guilt is inherited, transferred, or borrowed from somebody else. Each person is made to stand squarely on his own record.",
            "bn": "এ কথাটি কেবল এখানেই বলা হয়নি। একই শব্দগুলো, লা তাযিরু ওয়াযিরাতুন বিযরা উখরা, কুরআনে বারবার ফিরে আসে: ৬:১৬৪, ১৭:১৫, ৩৯:৭ ও ৫৩:৩৮ আয়াতে। কোনো বাক্য যখন হুবহু এতগুলো জায়গায় ফিরে আসে, তখন তা পাশ কাটানো মন্তব্য নয়, বরং একটি স্থির বিধান হিসেবে বসিয়ে দেওয়া হয়। এ বিধান ঐশী ন্যায়ের একটি স্তম্ভ: কোনো সত্তাকে এমন অপরাধের শাস্তি দেওয়া হয় না যা তার নিজের নয়, আর কোনো গুনাহ উত্তরাধিকারসূত্রে পাওয়া যায় না, হস্তান্তর হয় না, কারো কাছ থেকে ধারও করা যায় না। প্রত্যেক মানুষকে সোজা নিজের আমলনামার উপর দাঁড় করানো হয়।"
          },
          {
            "en": "At 17:15 the same refrain sits beside its own mirror image: whoever is guided is guided only for himself, and whoever strays strays only against himself. Al-Qurtubi even reads this verse's word for self-purifying, tazakka, as being rightly guided for his own sake. So the rule hands out no licence against anybody. It does not let a man shrug off the people he has wronged or misled, and it does not brand any family or community as burdened by another's sin. It only refuses to shift a weight off the back that first earned it.",
            "bn": "১৭:১৫ আয়াতে একই পুনরাবৃত্ত সুর তার আয়নার প্রতিচ্ছবির পাশে বসে: যে সৎপথ পায় সে নিজের জন্যই পায়, আর যে পথ হারায় সে নিজের বিরুদ্ধেই হারায়। কুরতুবী তো এই আয়াতের নিজেকে পরিশুদ্ধ করার শব্দ, তাযাক্কা, কেই পড়েন নিজের কল্যাণে সৎপথ পাওয়া অর্থে। তাই এ নিয়ম কারো বিরুদ্ধে কোনো ছাড়পত্র দেয় না। যাকে কেউ অন্যায় করেছে বা বিপথে নিয়েছে, তাকে এড়িয়ে যাওয়ার অনুমতি এটি দেয় না, আর কোনো পরিবার বা সম্প্রদায়কে অন্যের গুনাহে ভারী বলে দাগিয়ে দেয় না। যে পিঠ ভার প্রথমে কামিয়েছে, তার থেকে ভার সরানোকেই কেবল এটি অস্বীকার করে।"
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
            "bn": "কেউ হয়তো ২৯:১৩ আয়াত নিয়ে ভাবতে পারেন, যেখানে যারা অন্যদের বিপথে নেয় তারা নিজেদের বোঝার সঙ্গে আরও বোঝা বয়ে চলে। মাআরিফুল কুরআন রুহুল মাআনি উদ্ধৃত করে বলে, এতে কোনো সংঘাত নেই। যারা অন্যদের বিভ্রান্ত করে তারা দ্বিগুণ ভার বহন করে, নিজেদের পথভ্রষ্টতা আর অন্যদের টেনে নামানোর অপরাধ, তাই তাদের বোঝা দুই গুণ হয়ে যায়। কিন্তু এতে যাদের বিভ্রান্ত করা হলো তাদের বোঝা কখনো হালকা হয় না, তাদের প্রত্যেকে এখনো নিজের বোঝা পুরোটাই বয়ে চলে। কারো গুনাহ অন্যের পিঠে সরিয়ে দেওয়া হয়নি। শুধু বিভ্রান্তকারীর হিসাবে একটি নতুন গুনাহ যোগ হয়েছে।"
          },
          {
            "en": "Ma'arif is careful to add, on the authority of Ibn Kathir, that intercession is a wholly different matter. The verse shuts the door on a single thing only: a sinner offloading his own sins onto somebody else. It says nothing against the intercession God permits by His own leave, which is pure grace from Him and not a transfer of guilt. The same theme runs on: the Qur'an pictures a man fleeing from his brother on that Day (80:34), and 31:33 warns that no father will avail his son. In every case the dread is of being asked to carry what cannot be carried.",
            "bn": "মাআরিফুল কুরআন ইবন কাসীরের বরাতে সতর্কভাবে যোগ করে, সুপারিশ সম্পূর্ণ আলাদা বিষয়। আয়াত কেবল একটি দরজাই বন্ধ করে: গুনাহগার নিজের গুনাহ অন্য কারো ঘাড়ে চাপিয়ে দেওয়া। আল্লাহ নিজের অনুমতিতে যে সুপারিশের সুযোগ দেন, তার বিরুদ্ধে এটি কিছুই বলে না; সেটি তাঁর নিছক অনুগ্রহ, গুনাহ হস্তান্তর নয়। একই সুর চলতে থাকে: কুরআন ছবি আঁকে, সেদিন মানুষ তার ভাই থেকে পালাবে (৮০:৩৪), আর ৩১:৩৩ সতর্ক করে যে কোনো বাবা তার সন্তানের কোনো কাজে আসবে না। প্রতিটি ক্ষেত্রেই ভয়টা হলো, যা বওয়া যায় না তা বইতে বলা হবে এই আশঙ্কা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart the Warning Reaches",
          "bn": "যে অন্তরে সতর্কতা পৌঁছায়"
        },
        "p": [
          {
            "en": "Innama tunthiru alladhina yakhshawna rabbahum bi'l-ghayb: you can only warn those who fear their Lord unseen. At-Tabari explains that the Prophet's warning takes hold in those who dread God's punishment though they have never once laid eyes on it, believing it purely on the strength of what he brought them; the sealed hearts draw nothing from it. Qatada glosses the fear plainly as the fear of the Fire. Al-Baghawi reads bi'l-ghayb as reverence for a Lord they have not seen. The warning is good seed, but only a prepared soil will take it in.",
            "bn": "ইন্নামা তুনযিরুল্লাযীনা ইয়াখশাওনা রাব্বাহুম বিলগাইব: তুমি কেবল তাদেরই সতর্ক করতে পারো যারা না দেখেই তাদের রবকে ভয় করে। তাবারী বলেন, নবীর সতর্কবাণী তাদের ভেতরেই গেঁথে বসে যারা আল্লাহর শাস্তিকে ভয় করে কখনো তা চোখে না দেখেই, কেবল তিনি যা এনেছেন তার জোরে বিশ্বাস করে; সিলমোহর পড়া অন্তরগুলো এ থেকে কিছুই পায় না। কাতাদা এই ভয়কে সোজা করে বলেন আগুনের ভয়। বাগাভী বিলগাইবকে পড়েন এমন রবকে সম্ভ্রম করা অর্থে যাকে তারা দেখেনি। সতর্কবাণী ভালো বীজ, কিন্তু কেবল তৈরি মাটিই তা গ্রহণ করবে।"
          },
          {
            "en": "As-Sa'di widens the circle. These are the people who fear God bi'l-ghayb, which he takes to mean in secret and in the open, when watched and when unwatched, so that their reverence never switches off the moment a room empties. They are also the people who establish the prayer with its proper limits and conditions and its inward stillness. He explains why the pairing holds: fear of God pushes a servant to do the very thing he dreads being punished for neglecting, and the prayer itself keeps calling him toward good and warning him off what is shameful.",
            "bn": "সাদী বৃত্তটাকে আরও বড় করেন। এরাই সেই মানুষ যারা আল্লাহকে বিলগাইব ভয় করে, যা তিনি বোঝেন গোপনে ও প্রকাশ্যে, কেউ দেখুক বা না দেখুক উভয় অবস্থায়, যাতে ঘর খালি হয়ে গেলেই তাদের সম্ভ্রম থেমে না যায়। এরাই আবার সেই মানুষ যারা নামাজকে তার যথাযথ সীমা, শর্ত ও ভেতরের প্রশান্তিসহ প্রতিষ্ঠা করে। তিনি বলেন কেন এ দুটি একসঙ্গে আসে: আল্লাহর ভয় বান্দাকে ঠেলে দেয় সেই কাজের দিকে, যা ছেড়ে দিলে শাস্তির আশঙ্কা সে করে, আর নামাজ নিজেই তাকে ভালোর দিকে ডাকতে থাকে, মন্দ থেকে সরিয়ে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing Him When Alone",
          "bn": "একা থাকার সময় ভয়"
        },
        "p": [
          {
            "en": "No sound report fixes a specific occasion of revelation to this verse, yet a hadith lights up its phrase about fearing the Lord unseen. In Sahih al-Bukhari it is narrated from Abu Huraira that the Prophet named seven whom God will shade on the Day when there is no shade but His. Among them is a man who gave charity so secretly that his left hand did not know what his right hand had spent, and a man who remembered God while entirely alone and his eyes then overflowed with tears. The hadith does not comment on this verse, yet it paints the very portrait the verse praises.",
            "bn": "কোনো সহিহ বর্ণনা এই আয়াতের সঙ্গে নির্দিষ্ট কোনো শানে নুযুল জুড়ে দেয় না, তবু একটি হাদিস তার না দেখে রবকে ভয় করা কথাটির উপর আলো ফেলে। সহিহ বুখারীতে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ এমন ৭ জনের কথা বলেছেন যাদের আল্লাহ সেদিন নিজের ছায়ায় আশ্রয় দেবেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। তাদের মধ্যে আছে এমন একজন, যে এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল, আর এমন একজন, যে একদম একা আল্লাহকে স্মরণ করে আর তার দুচোখ অশ্রুতে ভরে ওঠে। হাদিসটি এই আয়াতের ব্যাখ্যা নয়, তবু আয়াত যে ছবির প্রশংসা করে ঠিক সেই ছবিই আঁকে।"
          },
          {
            "en": "Look at what both figures share: no audience at all. The giver hides his charity even from his own hand; the weeper is utterly alone with his Lord. These are deeds that purchase nothing in this world, no reputation and no word of thanks, which is exactly why they prove a fear of God that is real. That hidden reverence is what the verse means by fearing the Lord unseen, and it is just the kind of heart on which, as the verse has told us, the warning actually takes hold.",
            "bn": "দেখুন উভয়ের মধ্যে কী মিল: কোনো দর্শক নেই। দানকারী তার দান নিজের হাত থেকেও লুকিয়ে রাখে; কান্নাকারী একেবারে একা তার রবের সঙ্গে। এগুলো এমন আমল যা দুনিয়ায় কিছুই কিনে দেয় না, কোনো সুনাম নয়, একটি ধন্যবাদের কথাও নয়, আর ঠিক এ কারণেই এগুলো প্রমাণ করে আল্লাহর এক সত্যিকারের ভয়। ওই লুকানো সম্ভ্রমকেই আয়াত বলে না দেখে রবকে ভয় করা, আর ঠিক এমন অন্তরেই, আয়াত যেমন আমাদের বলেছে, সতর্কবাণী সত্যিকারভাবে গেঁথে বসে।"
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
            "bn": "ওয়া মান তাযাক্কা ফাইন্নামা ইয়াতাযাক্কা লিনাফসিহ: যে নিজেকে পরিশুদ্ধ করে সে তা করে কেবল নিজের সত্তার জন্য। তাবারী পরিশুদ্ধিকে পড়েন আল্লাহর দিকে ফিরে এসে, ইমান ও আনুগত্যের মধ্য দিয়ে কুফর ও গুনাহের ময়লা থেকে নিজেকে পরিষ্কার করা অর্থে; এর প্রতিদান আল্লাহর সন্তুষ্টি আর অস্বীকারকারীদের জন্য তৈরি শাস্তি থেকে মুক্তি। সাদী এর ভেতরটা ভরে দেন: লোকদেখানো, অহংকার, মিথ্যা, ধোঁকা, বিশ্বাসঘাতকতা ও মুনাফিকি ঘষে তুলে ফেলা, আর সত্যবাদিতা, ইখলাস, বিনয়, কোমলতা এবং হিংসা-বিদ্বেষমুক্ত একটি বুক পরে নেওয়া। সেই পরিশ্রমের প্রতিটি কণা, তিনি বলেন, কর্মকারীর কাছেই ফিরে আসে; এর কিছুই হারায় না।"
          },
          {
            "en": "Then the verse ends where everything ends: wa ila Allahi al-masir, and to God is the final destination. At-Tabari says this is the return of each of us, believing and denying, upright and corrupt alike, each to be repaid for whatever he sent ahead. As-Sa'di adds that God will reckon with His whole creation over all that they did, overlooking no deed however small or large. The sentence that opened by refusing to move your burden closes by promising that your own account, and only yours, is kept in full and is waiting there for you.",
            "bn": "এরপর আয়াত সেখানেই শেষ হয় যেখানে সবকিছু শেষ হয়: ওয়া ইলাল্লাহিল মাসীর, আর আল্লাহর দিকেই শেষ প্রত্যাবর্তন। তাবারী বলেন, এ হলো আমাদের প্রত্যেকের ফিরে যাওয়া, মুমিন ও অস্বীকারকারী, সৎ ও নষ্ট সবাই, প্রত্যেকে আগে যা পাঠিয়েছে তার প্রতিদান পাবে বলে। সাদী যোগ করেন, আল্লাহ তাঁর গোটা সৃষ্টির সঙ্গে তাদের সব কাজের হিসাব নেবেন, ছোট কি বড় কোনো আমলই বাদ পড়বে না। যে বাক্য শুরু হয়েছিল আপনার বোঝা না সরানোর অঙ্গীকার দিয়ে, তা শেষ হয় এই প্রতিশ্রুতিতে যে আপনার নিজের হিসাব, কেবল আপনারই, পুরোপুরি রাখা আছে আর সেখানে আপনার জন্য অপেক্ষা করছে।"
          }
        ]
      }
    ]
  },
  "35:28": {
    "sections": [
      {
        "h": {
          "en": "A Tour of Colours",
          "bn": "রঙের এক পরিভ্রমণ"
        },
        "p": [
          {
            "en": "The sentence about the scholars arrives at the end of a naturalist's tour. In 35:27 the Quran points to water sent down from the sky and fruits of varying colours brought out by it, then to the mountains — streaks of white and red of different shades, and others raven-black, gharabib sud. Then 35:28 continues the survey into the living world: among people, moving creatures and livestock are likewise differing colours. Only after all this does the verse name who actually fears Allah.",
            "bn": "আলিমদের নিয়ে বাক্যটি আসে এক প্রকৃতি-পর্যবেক্ষকের পরিভ্রমণের শেষে। 35:27 আয়াতে কুরআন নির্দেশ করে আকাশ থেকে নামানো পানির দিকে, আর তা দিয়ে বের করা নানা রঙের ফলের দিকে; তারপর পাহাড়ের দিকে — বিচিত্র শেডের সাদা ও লাল রেখা, আর কিছু কুচকুচে কালো — 'গারাবীবু সূদ'। এরপর 35:28 জরিপটিকে প্রাণিজগতে টেনে নেয়: মানুষ, বিচরণশীল প্রাণী ও গবাদিপশুর মধ্যেও তেমনি ভিন্ন ভিন্ন রং। এই সবকিছুর পরেই কেবল আয়াতটি বলে, আসলে কারা আল্লাহকে ভয় করে।"
          },
          {
            "en": "The sequencing is an argument. Rain, pigment in fruit, mineral bands in rock, variation in skin and hide — these are objects of patient observation, the raw material of what would now be called geology, botany and biology. The verse walks the reader through data and then names the conclusion the data should produce in a sound heart: khashyah, awe of the One who made variety itself. Study of the world, pursued honestly, is presented as a road that ends at reverence.",
            "bn": "এই ক্রমবিন্যাস নিজেই একটি যুক্তি। বৃষ্টি, ফলের রঞ্জক, পাথরের খনিজ স্তররেখা, চামড়া ও লোমের বৈচিত্র্য — এগুলো ধৈর্যশীল পর্যবেক্ষণের বিষয়; যাকে আজ ভূতত্ত্ব, উদ্ভিদবিদ্যা ও জীববিজ্ঞান বলা হয়, তারই কাঁচামাল। আয়াতটি পাঠককে হাঁটিয়ে নেয় উপাত্তের ভেতর দিয়ে, তারপর নাম বলে দেয় সেই সিদ্ধান্তের, যা সুস্থ হৃদয়ে ওই উপাত্তের ফলে জন্মানোর কথা: 'খাশইয়া' — তাঁর প্রতি সম্ভ্রমমাখা ভয়, যিনি খোদ বৈচিত্র্যের স্রষ্টা। সততার সঙ্গে করা জগতের অধ্যয়নকে হাজির করা হয়েছে এমন এক পথ হিসেবে, যা শেষ হয় সম্ভ্রমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Only the Knowers Fear Him",
          "bn": "কেবল জ্ঞানীরাই তাঁকে ভয় করে"
        },
        "p": [
          {
            "en": "The key sentence reads: innama yakhshallaha min 'ibadihil-'ulama — it is only those with knowledge among His servants who fear Allah. Arabic grammar does double duty here. The particle innama restricts the statement, and the object, Allah, is placed before the subject. Read together the clause makes one claim with two edges: true khashyah of Allah is found only in those who know, and commentators add from the word order that such people reserve this fear for Him.",
            "bn": "মূল বাক্যটি হলো: 'ইন্নামা ইয়াখশাল্লাহা মিন ইবাদিহিল-উলামা' — তাঁর বান্দাদের মধ্যে কেবল জ্ঞানের অধিকারীরাই আল্লাহকে ভয় করে। আরবি ব্যাকরণ এখানে দ্বৈত কাজ করে। 'ইন্নামা' অব্যয়টি বক্তব্যকে সীমিত করে, আর কর্ম — আল্লাহ — বসানো হয়েছে কর্তার আগে। মিলিয়ে পড়লে বাক্যাংশটি দুই ধারওয়ালা একটিই দাবি করে: আল্লাহর প্রকৃত 'খাশইয়া' পাওয়া যায় কেবল জ্ঞানীদের মধ্যে; আর শব্দক্রম থেকে মুফাসসিরগণ যোগ করেন — এমন মানুষেরা এই ভয় কেবল তাঁর জন্যই তুলে রাখে।"
          },
          {
            "en": "Khashyah is not generic fright. The classical scholars distinguish it from khawf: khawf can be felt before anything threatening, while khashyah is awe proportioned to knowledge of the greatness of the one feared. That is why the verse can tie it to scholars by definition. You can startle anyone; you can only awe someone who has understood what stands before them. Fear of Allah, in this vocabulary, is a cognitive achievement before it is an emotion.",
            "bn": "'খাশইয়া' গড়পড়তা আতঙ্ক নয়। ধ্রুপদী আলিমগণ একে 'খাওফ' থেকে আলাদা করেন: 'খাওফ' যেকোনো ভীতিকর জিনিসের সামনে জাগতে পারে, কিন্তু 'খাশইয়া' এমন সম্ভ্রম — যার মাত্রা নির্ধারিত হয় ভয়ের পাত্রটির মহত্ত্ব সম্পর্কে জ্ঞান দিয়ে। এ কারণেই আয়াতটি একে সংজ্ঞাগতভাবেই আলিমদের সঙ্গে বাঁধতে পারে। চমকে দেওয়া যায় যে-কাউকে; কিন্তু সম্ভ্রমে অভিভূত করা যায় কেবল তাকে, যে বুঝেছে তার সামনে কে দাঁড়িয়ে। এই অভিধানে আল্লাহভীতি আবেগ হওয়ার আগে এক জ্ঞানগত অর্জন।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Counts as 'Ulama",
          "bn": "'উলামা' গণ্য হয় কারা"
        },
        "p": [
          {
            "en": "Ibn Kathir puts the equation plainly in his comment on this verse: those who fear Him most are those who know Him best. The knowledge that earns the title here is knowledge of Allah — of His names, His power, His justice — however it was acquired, whether from revelation or from reading His workmanship in mountains and wings. A saying passed down from Ibn Mas'ud (RA) draws the same line: knowledge is not abundance of narration; knowledge is khashyah.",
            "bn": "ইবনে কাসীর এই আয়াতের ব্যাখ্যায় সমীকরণটি সরলভাবে বলেন: তাঁকে সবচেয়ে বেশি ভয় করে তারাই, যারা তাঁকে সবচেয়ে ভালো জানে। এখানে যে জ্ঞান এই উপাধি এনে দেয় তা আল্লাহ-বিষয়ক জ্ঞান — তাঁর নামসমূহ, তাঁর ক্ষমতা, তাঁর ন্যায়বিচার সম্পর্কে — তা যেভাবেই অর্জিত হোক: ওহী থেকে, কিংবা পাহাড় ও ডানায় তাঁর কারিগরি পাঠ করে। ইবনে মাসউদ (রাঃ) থেকে চলে আসা একটি উক্তি একই রেখা টানে: জ্ঞান বর্ণনার প্রাচুর্য নয়; জ্ঞান হলো 'খাশইয়া'।"
          },
          {
            "en": "The living proof offered by the tradition is the most knowledgeable man of this ummah. Al-Bukhari narrates that the Prophet ﷺ, correcting people who wanted a harder regimen than his, said: I am the most knowing of Allah among you, and the most intense of you in khashyah of Him. Knowledge and awe rose together in him ﷺ and rise together generally; where an increase of learning produces arrogance or coldness instead, this verse says the thing acquired was not yet knowledge.",
            "bn": "ঐতিহ্য যে জীবন্ত প্রমাণ হাজির করে, তিনি এই উম্মতের সবচেয়ে জ্ঞানী মানুষটি। বুখারী বর্ণনা করেন: যারা তাঁর চেয়ে কঠোরতর সাধনপদ্ধতি চাইছিল তাদের শুধরে দিয়ে নবী ﷺ বলেন — তোমাদের মধ্যে আল্লাহ সম্পর্কে সবচেয়ে জ্ঞানী আমি, আর তাঁর 'খাশইয়া'-য়ও তোমাদের মধ্যে সবচেয়ে তীব্র আমি। জ্ঞান ও সম্ভ্রম তাঁর ﷺ মধ্যে একসঙ্গে বেড়েছে, আর সাধারণভাবে একসঙ্গেই বাড়ে; যেখানে শেখার বৃদ্ধি বদলে অহংকার বা শীতলতা জন্ম দেয়, সেখানে এই আয়াত বলে — যা অর্জিত হয়েছে তা এখনো জ্ঞান হয়ে ওঠেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Mighty, Forgiving",
          "bn": "পরাক্রমশালী, ক্ষমাশীল"
        },
        "p": [
          {
            "en": "The verse ends with a pairing of names: innallaha 'Azizun Ghafur — Allah is Mighty, Forgiving. Each name feeds one half of the scholar's heart. Al-'Aziz, the Overpowering whom nothing escapes, is the ground of the khashyah just described; al-Ghafur, the Forgiving, keeps that awe from collapsing into terror or despair. The same balance appears in 30:22, where the diversity of human tongues and colours is called a sign for those who know — knowledge again standing between wonder and worship.",
            "bn": "আয়াত শেষ হয় দুটি নামের জোড়ে: 'ইন্নাল্লাহা আযীযুন গাফূর' — আল্লাহ পরাক্রমশালী, ক্ষমাশীল। প্রতিটি নাম আলিমের হৃদয়ের এক-এক অর্ধেককে পুষ্টি দেয়। আল-আযীয — সেই মহাপরাক্রান্ত, যাঁর নাগাল থেকে কিছুই পালায় না — এইমাত্র বর্ণিত 'খাশইয়া'-র ভিত্তি; আর আল-গাফূর — ক্ষমাশীল — সেই সম্ভ্রমকে আতঙ্ক বা নৈরাশ্যে ধসে পড়া থেকে বাঁচান। একই ভারসাম্য দেখা যায় 30:22 আয়াতে, যেখানে মানুষের ভাষা ও রঙের বৈচিত্র্যকে বলা হয়েছে জ্ঞানীদের জন্য নিদর্শন — জ্ঞান আবারও দাঁড়িয়ে বিস্ময় ও ইবাদতের মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Study as a Road to Awe",
          "bn": "সম্ভ্রমের পথ হিসেবে অধ্যয়ন"
        },
        "p": [
          {
            "en": "The verse licenses something believers sometimes hesitate over: treating the study of nature as a religious act. The fruit chemist, the field geologist, the student of animal colouration are handling the very exhibits 35:27-28 lays out, and the verse assumes such attention can terminate in khashyah. The condition is remembering whose work is on the bench. Observation that stops at mechanism has read the middle of the argument and skipped its conclusion.",
            "bn": "আয়াতটি এমন কিছুর অনুমোদন দেয়, যা নিয়ে মুমিনরা কখনো কখনো দ্বিধায় থাকে: প্রকৃতির অধ্যয়নকে দ্বীনী আমল গণ্য করা। ফলের রসায়নবিদ, মাঠের ভূতত্ত্ববিদ, প্রাণীর রং-বিন্যাসের গবেষক — তারা নাড়াচাড়া করছে ঠিক সেই প্রদর্শবস্তুগুলোই, যা 35:27-28 সাজিয়ে রেখেছে; আর আয়াতটি ধরেই নেয়, এমন মনোযোগ 'খাশইয়া'-য় গিয়ে শেষ হতে পারে। শর্ত একটাই — মনে রাখা, গবেষণার টেবিলে কার কারিগরি শুয়ে আছে। যে পর্যবেক্ষণ কার্যকৌশলে থেমে যায়, সে যুক্তির মাঝখানটা পড়েছে, উপসংহারটা বাদ দিয়েছে।"
          },
          {
            "en": "The verse also hands every learner a diagnostic. The note behind this article states it without cushioning: knowledge that does not deepen reverence has missed its purpose. A season of study — religious or worldly — can be audited with one question: is Allah greater in my eyes than before it began? Where the answer is yes, degrees and titles are irrelevant and the verse's word 'ulama applies. Where it is no, the remedy is not less learning but learning reconnected to the One it describes.",
            "bn": "আয়াতটি প্রত্যেক শিক্ষার্থীর হাতে একটি নির্ণায়ক যন্ত্রও তুলে দেয়। এই লেখার পেছনের নোটটি কোনো গদি ছাড়াই তা বলে: যে জ্ঞান সম্ভ্রম গভীর করে না, তা নিজের উদ্দেশ্য হারিয়েছে। এক মৌসুমের পড়াশোনা — দ্বীনী হোক বা দুনিয়াবি — একটি প্রশ্নে নিরীক্ষা করা যায়: শুরুর আগের চেয়ে কি আল্লাহ এখন আমার চোখে মহত্তর? উত্তর হ্যাঁ হলে ডিগ্রি ও উপাধি অপ্রাসঙ্গিক — আয়াতের 'উলামা' শব্দটি প্রযোজ্য। উত্তর না হলে প্রতিকার কম শেখা নয়; বরং শেখাকে আবার তাঁর সঙ্গে জুড়ে দেওয়া, যাঁর বর্ণনা সে বহন করে।"
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
            "bn": "35:29 আয়াত তিনটি কাজের নাম নেয়, তারপর একটি মনোভাবের। কাজ তিনটি হলো আল্লাহর কিতাব তিলাওয়াত করা, নামায কায়েম করা, আর তিনি যা দিয়েছেন তা থেকে ব্যয় করা — তৃতীয়টির সঙ্গে দুই ধরনের পদ্ধতি জুড়ে আছে, গোপনে ও প্রকাশ্যে, কিন্তু তা দুটি কাজ হিসেবে গোনা হয় না। তারপর মনোভাবটি: ইয়ারজূনা — তারা এমন এক ব্যবসার আশা করে যা কখনো অচল হবে না। আশাটিকে তাদের পরিচয়ের অংশ হিসেবেই তালিকাভুক্ত করা হয়েছে, কাজের পাদটীকা হিসেবে নয়।"
          },
          {
            "en": "Placement explains the choice of the first act. 35:28 has just said that among His servants it is only those who have knowledge who fear Allah. Then this verse opens with inna alladhina, indeed those who — and describes what such people do. The commentators read the join: having identified who truly fears Him, the passage names their practice, and it begins with the recitation through which the knowledge was got.",
            "bn": "প্রথম কাজটি কেন বাছা হলো তা অবস্থানই ব্যাখ্যা করে। 35:28 আয়াত ঠিক আগে বলেছে, তাঁর বান্দাদের মধ্যে কেবল জ্ঞানীরাই আল্লাহকে ভয় করে। তারপর এই আয়াত শুরু হয় ইন্নাল্লাযীনা দিয়ে — নিশ্চয় তারা, যারা — এবং বর্ণনা করে এমন মানুষেরা কী করে। মুফাসসিরগণ সংযোগটি এভাবে পড়েন: কারা তাঁকে প্রকৃতপক্ষে ভয় করে তা চিহ্নিত করার পর অংশটি তাদের অনুশীলনের নাম নেয়, আর শুরু করে সেই তিলাওয়াত দিয়ে যার মাধ্যমে জ্ঞানটি অর্জিত হয়েছিল।"
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
            "bn": "তিজারা মানে ব্যবসা, আর লান তাবূর হলো ভবিষ্যতের জোরালো অস্বীকার। ক্রিয়াপদটি এমন ধাতু থেকে এসেছে যার অর্থ ধ্বংস ও অচলতা: 'বূর' জমি সেই জমি যাতে কিছুই জন্মায় না, আর এই ধাতু দিয়ে বর্ণিত পণ্য সেই পণ্য যা কেউ নেবে না। ব্যবসায়ীর প্রকৃত ভয় কেবল চুরি নয়। তার ভয় এমন এক গুদাম, যার মাল নীরবে মূল্যহীন হয়ে গেছে। আয়াতটি ঠিক সেই ভয়টিই বাতিল করে দেয়।"
          },
          {
            "en": "The same root turns up earlier in this very surah, applied to the opposite party. 35:10 says of those who plot evil deeds that their plotting, it is what goes to ruin — huwa yabur. Surah Fatir sets its two ledgers against each other using one word. The schemer's investment goes dead; the reciter's does not. That is not a coincidence of vocabulary but the surah making its argument twice with the same verb.",
            "bn": "একই ধাতু এই সূরার আগের অংশেই ফিরে আসে, বিপরীত পক্ষের ক্ষেত্রে প্রয়োগ হয়ে। 35:10 আয়াত মন্দ ষড়যন্ত্রকারীদের সম্পর্কে বলে যে তাদের ষড়যন্ত্র — সেটিই ধ্বংস হয়ে যায়, হুয়া ইয়াবূর। সূরা ফাতির তার দুটি খাতাকে একটিমাত্র শব্দ দিয়ে মুখোমুখি দাঁড় করায়। ষড়যন্ত্রকারীর বিনিয়োগ অচল হয়ে যায়; তিলাওয়াতকারীর হয় না। এটি শব্দের কাকতাল নয়, বরং একই ক্রিয়াপদ দিয়ে সূরাটির নিজের যুক্তি দুবার বলা।"
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
            "bn": "লক্ষ করুন কে কী বলে। বান্দারা আশা করে। আয়াতটি তাদের অবস্থান দেয় রাজা' হিসেবে — নিজেদের কবুল হওয়া সম্পর্কে নিশ্চয়তা হিসেবে নয়; নিজের আমল প্রসঙ্গে ক্লাসিক্যাল আলিমগণ ঠিক এই বিনয়ের ওপরই জোর দেন। তারপর 35:30 আয়াত জবাব দেয় দায়বদ্ধতার ভাষায়: লিইউওয়াফফিয়াহুম উজূরাহুম — যাতে তিনি তাদের পারিশ্রমিক পূর্ণ মাত্রায় পরিশোধ করেন। ওয়াফা মানে যা পাওনা তা শেষ কণা পর্যন্ত মিটিয়ে দেওয়া। বান্দা আশা করে; আল্লাহ দায়িত্ব নেন।"
          },
          {
            "en": "And two things are promised, not one. Full payment comes first, then wa yazidahum min fadlihi, and He will increase them from His bounty. The verse labels the second as fadl, the word for what is given beyond entitlement. Payment in full is justice and can be claimed; increase is bounty and cannot. Nothing in a servant's work generates the second half, which is why the verse names its source.",
            "bn": "আর প্রতিশ্রুতি দেওয়া হয় দুটি জিনিসের, একটির নয়। প্রথমে আসে পূর্ণ পরিশোধ, তারপর ওয়া ইয়াযীদাহুম মিন ফাদলিহি — আর তিনি নিজ অনুগ্রহ থেকে তাদের বাড়িয়ে দেবেন। আয়াতটি দ্বিতীয়টির নাম দেয় ফাদ্‌ল, যে শব্দটি প্রাপ্যের অতিরিক্ত দানের জন্য ব্যবহৃত হয়। পূর্ণ পরিশোধ ইনসাফ, তা দাবি করা যায়; বৃদ্ধি অনুগ্রহ, তা দাবি করা যায় না। বান্দার কাজের কোনো কিছুই দ্বিতীয় অর্ধেকটি তৈরি করে না, আর সেজন্যই বাক্যটি যত্ন করে তার উৎসের নাম বলে দেয়।"
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
            "bn": "প্রতিদান বিষয়ক একটি অংশের পর পাঠক যে জোড়াটি আশা করে, সমাপ্তির জোড়াটি সেটি নয়। আল-গাফূর ঢেকে দেন কাজগুলোর ভেতরের ত্রুটিগুলো — যে তিলাওয়াতের মধ্যে মন অন্যত্র ঘুরেছে, যে নামায তাড়াহুড়োয় পড়া হয়েছে, যে দানের সঙ্গে লোকে দেখুক এই ইচ্ছাটুকু মিশে গেছে। আশ-শাকূর তিনি, যিনি অল্পকে মূল্য দেন এবং তার বিনিময়ে অনেক ফিরিয়ে দেন। এই দুটি নামের মাঝখানে ত্রুটিপূর্ণ খাতাও ব্যবসা চালিয়ে যেতে পারে।"
          },
          {
            "en": "Fatir is honest about that record a few verses later. 35:32 says We caused the Book to be inherited by those We chose from among Our servants, and then sorts them into one who wrongs himself, one who is moderate, and one foremost in good deeds by the permission of Allah — with all three counted among the chosen. The surah does not pretend that the people who recite and pray and give are a class of the faultless.",
            "bn": "কয়েক আয়াত পরেই সূরা ফাতির সেই খাতা নিয়ে সৎ থাকে। 35:32 আয়াত বলে, আমি আমার বান্দাদের মধ্য থেকে যাদের মনোনীত করেছি তাদেরই কিতাবের উত্তরাধিকারী করেছি; তারপর তাদের ভাগ করে — কেউ নিজের প্রতি জুলুমকারী, কেউ মধ্যপন্থী, আর কেউ আল্লাহর অনুমতিক্রমে কল্যাণে অগ্রগামী — আর তিন দলকেই মনোনীতদের মধ্যে গণনা করা হয়। যারা তিলাওয়াত করে, নামায পড়ে আর দান করে, সূরাটি তাদের নিখুঁত মানুষের শ্রেণি হিসেবে দেখানোর ভান করে না।"
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
            "bn": "সিররান ওয়া 'আলানিয়াতান দুটি ধরনেরই নাম নেয় এবং এখানে কোনোটিকেই অগ্রাধিকার দেয় না। 2:271 আয়াত সূক্ষ্মতর রায়টি দেয়: দান প্রকাশ করা ভালো, কিন্তু তা গোপন রেখে দরিদ্রদের দেওয়া তোমাদের জন্য উত্তম। এতে বিরোধ নেই — এই আয়াতটি এমন জীবনের প্রশংসা করে যাতে দুটিই আছে, আর ওই আয়াতটি দুটির মধ্যে মান নির্ধারণ করে। প্রকাশ্য দান এমন রীতি গড়ে যা অন্যরা অনুসরণ করতে পারে; গোপন দান দাতার হৃদয়কে পাহারা দেয়। 14:31 আয়াতে একই দুটি শব্দ জোড়া লাগে নামায ও ব্যয়ের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It as a Ledger",
          "bn": "একে খাতা হিসেবে পড়া"
        },
        "p": [
          {
            "en": "The commercial language is deliberate and the Quran uses it elsewhere on purpose. 9:111 says Allah has purchased from the believers their lives and their properties in exchange for the Garden, and 61:10-11 opens with an offer of a transaction that saves from a painful punishment. What these share is that the price and the return are named in advance. A believer is not asked to give blindly; he is shown the terms and invited to accept them.",
            "bn": "বাণিজ্যিক ভাষাটি ইচ্ছাকৃত, আর কুরআন অন্যত্রও তা উদ্দেশ্য নিয়েই ব্যবহার করে। 9:111 আয়াত বলে, আল্লাহ মুমিনদের কাছ থেকে তাদের জীবন ও সম্পদ কিনে নিয়েছেন জান্নাতের বিনিময়ে; আর 61:10-11 আয়াত শুরু হয় এমন এক লেনদেনের প্রস্তাব দিয়ে যা যন্ত্রণাদায়ক শাস্তি থেকে রক্ষা করে। এগুলোর মিল এই যে দাম ও প্রতিদান আগেই বলে দেওয়া হয়। মুমিনকে অন্ধভাবে দিতে বলা হয় না; তাকে শর্তগুলো দেখিয়ে গ্রহণ করতে আহ্বান জানানো হয়।"
          },
          {
            "en": "Practically, the three acts are all small and repeatable, which is the point of listing these three rather than three heroic ones. A portion of the Book each day. The prayers kept at their times rather than gathered up at night. Something given regularly that nobody is told about, alongside what is given openly. This trade does not require large capital to open. It requires that the shop not stay shut.",
            "bn": "বাস্তবে তিনটি কাজই ছোট ও পুনরাবৃত্তিযোগ্য, আর বীরত্বপূর্ণ তিনটির বদলে এই তিনটিরই নাম নেওয়ার কারণ সেটাই। প্রতিদিন কিতাবের একটি অংশ। নামাযগুলো নিজ নিজ সময়ে রাখা, রাতে জমিয়ে না ফেলা। প্রকাশ্যে যা দেওয়া হয় তার পাশাপাশি নিয়মিত এমন কিছু দেওয়া যার কথা কাউকে বলা হয় না। এই ব্যবসা খুলতে বড় পুঁজি লাগে না। লাগে কেবল এটুকু যে দোকানটি যেন বন্ধ পড়ে না থাকে।"
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
            "bn": "এই আয়াতের ঠিক আগে জান্নাতবাসীদের কথা এসেছে: তারা স্থায়ী জান্নাতে ঢুকছে, সোনা আর মুক্তার কঙ্কণে সাজানো, গায়ে রেশমের পোশাক (৩৫:৩৩)। পুরোটাই প্রতিদানের দৃশ্য। তারপর ৩৫:৩৪ আয়াতে তারা মুখ খোলে। মুক্তিপ্রাপ্তদের মুখে প্রথম বাক্যটি কী? সোনা নিয়ে একটি শব্দও নয়, নিরাপদে পেছনে পড়ে থাকা দরজা নিয়ে কোনো নিঃশ্বাসও নয়। তারা শুরু করে প্রশংসা দিয়ে: আলহামদু লিল্লাহ, যাবতীয় প্রশংসা আল্লাহর। প্রতিদান তাদের গায়ে, কিন্তু প্রথম যেটা তারা আঁকড়ে ধরে তা তাঁরই নাম।"
          },
          {
            "en": "Notice, too, what they praise Him for. Of everything now theirs, they single out one mercy: that He has removed from them al-hazan, the grief. The jewels go unmentioned; the sorrow that is gone gets the sentence. It is a telling choice. A person who has carried a weight for years feels its lifting more sharply than any new gift. The verse lets us hear joy from the inside, and the shape of that joy is relief.",
            "bn": "আরও খেয়াল করুন, কোন জিনিসের জন্য তারা তাঁর প্রশংসা করছে। এখন সবকিছুই তাদের, তবু তারা একটি দয়ার কথা বেছে নেয়: তিনি তাদের থেকে আল-হাযান, দুঃখ, সরিয়ে দিয়েছেন। গয়নার নাম ওঠে না, যে দুঃখটা চলে গেছে সেটাই বাক্যটা পায়। এই বেছে নেওয়াটা অর্থবহ। বছরের পর বছর যে মানুষ একটা বোঝা বয়ে বেড়িয়েছে, নতুন যেকোনো উপহারের চেয়ে সেই বোঝা নামার স্বস্তিটাই সে বেশি টের পায়। আয়াতটি ভেতর থেকে আনন্দটা শোনায়, আর সেই আনন্দের চেহারা হলো স্বস্তি।"
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
            "bn": "এই দুঃখটা কী ছিল? ইবন কাসীর আল-হাযানকে পড়েন মানুষ যা কিছু ভয় পায় তার সব ভয় হিসেবে। তিনি বলেন, আল্লাহ তা তাদের থেকে ঠেলে সরিয়ে দিয়েছেন, দুনিয়া ও আখিরাতের যত দুশ্চিন্তা তারা বইত সবকিছু থেকে তাদের হালকা করে দিয়েছেন। তাঁর পড়ায় শব্দটি ইচ্ছে করেই প্রশস্ত। এটা কোনো নির্দিষ্ট একটামাত্র ভয় নয়, বরং ঈমানি জীবন যে চাপা ভয়ের গুনগুন সারাক্ষণ বয়ে বেড়ায় তার পুরোটা: খোলা প্রশ্নগুলো, অন্তরের না-শোধ দেনা, শেষটা কেমন হবে তা নিয়ে চুপচাপ দুশ্চিন্তা। সবটাই, তিনি বলেন, দুয়ারেই উঠে যায়।"
          },
          {
            "en": "At-Tabari spreads the same word out into its parts. The fear of entering the Fire is grief, he writes; the dread of death is grief; even the dread of needing food is grief. He then makes a careful point about the verse's silence. When Allah reports that they praised Him for removing al-hazan, He did not restrict it to any single kind over another. They meant to take in every kind of grief together, and that is right, for whoever enters Paradise has no grief left after that.",
            "bn": "তাবারী একই শব্দকে তার টুকরোগুলোয় ছড়িয়ে দেন। আগুনে ঢোকার ভয় একটা দুঃখ, তিনি লেখেন; মৃত্যুর আতঙ্ক একটা দুঃখ; এমনকি খাবারের প্রয়োজনের ভয়ও একটা দুঃখ। এরপর আয়াতের নীরবতা নিয়ে তিনি একটা সূক্ষ্ম কথা বলেন। আল্লাহ যখন জানান যে আল-হাযান দূর করায় তারা তাঁর প্রশংসা করেছে, তখন তিনি একে কোনো একরকমে সীমিত করেননি। তারা একসঙ্গে সব রকম দুঃখকেই বোঝাতে চেয়েছে, আর সেটাই ঠিক, কারণ যে একবার জান্নাতে ঢোকে তার আর কোনো দুঃখ বাকি থাকে না।"
          },
          {
            "en": "At-Tabari also preserves an early comment from Qatada: in the world these people worked and wore themselves out while living in fear and grief. That line quietly reframes the reward. The rest they now enjoy is measured against a life that was not restful. They were not strangers to worry; they prayed and gave and still lay awake. So when the grief lifts, it lifts from those who knew its full weight; the relief, not the finery, is what they praise.",
            "bn": "তাবারী কাতাদার একটি পুরোনো মন্তব্যও ধরে রাখেন: দুনিয়ায় এই মানুষগুলো খাটত, নিজেদের ক্লান্ত করত, আর থাকত ভয় ও দুঃখের ভেতর। কথাটা চুপিচুপি প্রতিদানের ছবিটা বদলে দেয়। এখন যে আরাম তারা পাচ্ছে, তা মাপা হচ্ছে এমন একটা জীবনের সঙ্গে যা আরামের ছিল না। দুশ্চিন্তা তাদের অচেনা ছিল না; তারা নামায পড়ত, দান করত, তবু রাত জেগে থাকত। তাই দুঃখ যখন ওঠে, তা ওঠে এমনদের থেকে যারা এর পুরো ভার জানত; স্বস্তিটাই, জাঁকজমক নয়, তাদের প্রশংসার জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "A Catalogue of Sorrows",
          "bn": "দুঃখের নানা তালিকা"
        },
        "p": [
          {
            "en": "Al-Baghawi gathers the early readings side by side, and the range is striking. Ibn Abbas took the grief to be the grief of the Fire; Qatada, the grief of death; Muqatil said they had grieved because they did not know what Allah would do with them. Ikrima named the grief of sins and the fear that their acts of obedience might be refused. Each commentator reached for the fear that weighs heaviest on a sincere heart, and the Qur'an's single word holds all of them without choosing.",
            "bn": "বাগভী পাশাপাশি সাজিয়ে দেন পুরোনো পড়াগুলো, আর এর ব্যাপ্তি চমকে দেয়। ইবন আব্বাস দুঃখটাকে ধরেছেন আগুনের দুঃখ হিসেবে; কাতাদা ধরেছেন মৃত্যুর দুঃখ; মুকাতিল বলেন, তারা দুঃখ করত কারণ জানত না আল্লাহ তাদের নিয়ে কী করবেন। ইকরিমা নাম দেন গুনাহের দুঃখ আর এই ভয় যে তাদের আনুগত্য হয়তো কবুল হবে না। প্রত্যেক তাফসীরকার সেই ভয়টাই বেছেছেন যা একটা আন্তরিক অন্তরে সবচেয়ে ভারী হয়ে বসে, আর কুরআনের একটিমাত্র শব্দ কোনোটাকে বাদ না দিয়ে সবগুলোকেই ধরে রাখে।"
          },
          {
            "en": "The list runs on. Al-Qasim spoke of the grief of blessings slipping away and a heart that keeps turning, the fear of how one ends up. Said ibn Jubayr, more plainly, named the daily grief over bread, the worry of making a living. Al-Baghawi closes the gathering with az-Zajjaj, who ties the thread together: Allah has removed from the people of Paradise every grief they ever carried, whether it belonged to their livelihood or to their life to come. The small worries and the large ones go out by the same door.",
            "bn": "তালিকা আরও চলে। কাসিম বলেন নিয়ামত হারিয়ে যাওয়ার দুঃখ, আর অন্তরের বারবার উল্টে যাওয়া, পরিণতি নিয়ে ভয়ের কথা। সাঈদ ইবন জুবাইর আরও সোজা কথায় নাম দেন রুটির রোজকার দুঃখ, জীবিকা জোগানোর দুশ্চিন্তা। বাগভী এই সমাবেশ শেষ করেন যাজ্জাজকে দিয়ে, যিনি সুতোটা বেঁধে দেন: জান্নাতবাসী যত দুঃখ কখনো বয়েছে আল্লাহ তা সব সরিয়ে দিয়েছেন, তা জীবিকার হোক বা পরকালের জীবনের হোক। ছোট দুশ্চিন্তা আর বড় দুশ্চিন্তা একই দরজা দিয়ে বেরিয়ে যায়।"
          },
          {
            "en": "One difference among the commentators is worth keeping as a difference. At-Tabari records a second view, that the grief meant is specifically the distress that overtakes the one who wronged himself while he waits at the Judgement; he judged the wider sense the stronger. Al-Qurtubi, citing ath-Thaalabi, leaned the other way, reading the verse against the three classes named earlier in 35:32 and calling that reading the sound one. The verse is rich enough to carry both.",
            "bn": "তাফসীরকারদের একটা মতপার্থক্য পার্থক্য হিসেবেই রাখা ভালো। তাবারী দ্বিতীয় একটি মত তুলে ধরেন: এখানে দুঃখ বলতে বিশেষভাবে সেই কষ্ট, যা হিসাবের অপেক্ষায় দাঁড়ানো অবস্থায় নিজের উপর জুলুমকারীকে পেয়ে বসে; তবে তিনি প্রশস্ত অর্থটাকেই বেশি জোরালো মনে করেন। কুরতুবী সালাবির বরাতে উল্টো দিকে ঝোঁকেন, আয়াতটিকে ৩৫:৩২ আয়াতে আগে বলা তিনটি শ্রেণির সঙ্গে মিলিয়ে পড়েন আর সেই পড়াকেই সহীহ বলেন। আয়াত দুই অর্থই বইতে যথেষ্ট প্রশস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Paradise Without a Shadow",
          "bn": "ছায়াহীন জান্নাত"
        },
        "p": [
          {
            "en": "As-Sadi draws out what the absence of grief actually means inside the Garden. When their bliss was complete and their pleasure perfected, he writes, they said this. And the grief that is gone, on his reading, covers every kind: no grief will reach them from any flaw in their beauty, none in their food or drink, none in their pleasures, none in their own bodies, and none from any fear that the stay might end. Every corner of worry that shadows pleasure here has simply been removed there.",
            "bn": "সা'দী খুলে বলেন জান্নাতের ভেতরে দুঃখ না থাকার মানে আসলে কী। তিনি লেখেন, যখন তাদের নিয়ামত পূর্ণ হলো আর আনন্দ পরিপূর্ণ হলো, তখন তারা এ কথা বলল। আর যে দুঃখ চলে গেছে, তাঁর পড়ায় তা সব রকমকেই ধরে: তাদের রূপে কোনো খুঁত থেকে দুঃখ পৌঁছাবে না, খাবার-পানীয়ে নয়, ভোগের আনন্দে নয়, নিজেদের শরীরে নয়, আর এই ভয় থেকেও নয় যে থাকাটা হয়তো ফুরিয়ে যাবে। এখানে যত দুশ্চিন্তা আনন্দের উপর ছায়া ফেলে, সেখানে তার সবটাই নিছক তুলে নেওয়া হয়েছে।"
          },
          {
            "en": "That last point carries real weight. Much of what spoils joy in this life is not the joy failing but the knowing it will end; the finest evening is edged with its own closing. As-Sadi presses exactly there: their bliss is one they see no limit to, and it keeps increasing for ever and ever. Grief needs a shadow to fall across, a sense of loss waiting ahead. Remove the ending, and you have removed the very thing that could have dimmed the light. So their praise is for comfort made permanent.",
            "bn": "শেষ কথাটার ওজন আছে সত্যিকারের। এই জীবনে আনন্দ যা নষ্ট করে তা অনেক সময় আনন্দের ব্যর্থতা নয়, বরং জানা যে এটা একদিন ফুরাবে; সবচেয়ে সুন্দর সন্ধ্যার কিনারেও তার শেষ লেগে থাকে। সা'দী ঠিক সেখানেই চাপ দেন: তাদের নিয়ামত এমন যার কোনো সীমা তারা দেখে না, আর তা বেড়েই চলে চিরকাল ধরে। দুঃখের দরকার একটা ছায়া যার উপর সে পড়বে, সামনে অপেক্ষারত কোনো হারানোর বোধ। শেষটা সরিয়ে দিন, আর যে জিনিস আলোটা ম্লান করতে পারত তা-ও সরে গেল। তাই তাদের প্রশংসা আরামকে স্থায়ী করার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Home Called Sorrow",
          "bn": "দুঃখের ঘর এই দুনিয়া"
        },
        "p": [
          {
            "en": "Maarif al-Quran turns the verse around to look at the life left behind. What is this sorrow, it asks, and answers that every sorrow is included. In this world, it says, nobody escapes it, not a king, not a prophet, not a saint; the wise have long called this world the house of sorrows. A believer, Imam al-Jassas adds, is never quite free of some concern while he lives here, and the Prophet himself said the world is a prison for the believer. This is why, in the accounts of his Companions, these great souls often appear sorrowful.",
            "bn": "মাআরিফুল কুরআন আয়াতটা ঘুরিয়ে তাকায় পেছনে ফেলে আসা জীবনের দিকে। এই দুঃখ কী, সে প্রশ্ন তোলে, আর জবাব দেয়: সব দুঃখই এর ভেতরে। এই দুনিয়ায়, সে বলে, কেউ এর হাত থেকে বাঁচে না, না কোনো বাদশাহ, না কোনো নবী, না কোনো ওলি; জ্ঞানীরা বহুকাল ধরে এই দুনিয়াকে দুঃখের ঘর বলে এসেছেন। ইমাম জাসসাস যোগ করেন, এখানে বেঁচে থাকতে থাকতে কোনো মুমিন কোনো-না-কোনো দুশ্চিন্তা থেকে পুরো মুক্ত থাকে না, আর নবী ﷺ নিজেই বলেছেন দুনিয়া মুমিনের জন্য কারাগার। এজন্যই সাহাবাদের (রাঃ) জীবনকথায় এই মহান মানুষদের প্রায়ই বিষণ্ন দেখা যায়।"
          },
          {
            "en": "Maarif then lays the sorrows out in order. There is the concern of this world and its endless anxieties; there is the concern of the Day of Resurrection; there is the concern of the reckoning of deeds; and there is the concern of the punishment of the Fire. From the people of Paradise, it says, Allah will lift all of these together. Read against that list, the single sentence of the saved becomes enormous. It is not relief from one bad season but release from the entire architecture of dread a believing life is built to carry.",
            "bn": "এরপর মাআরিফ দুঃখগুলো সাজিয়ে দেয় পরপর। আছে এই দুনিয়ার দুশ্চিন্তা আর তার অফুরান উদ্বেগ; আছে কিয়ামতের দিনের দুশ্চিন্তা; আছে আমলের হিসাবের দুশ্চিন্তা; আর আছে জাহান্নামের শাস্তির দুশ্চিন্তা। জান্নাতবাসীর থেকে, সে বলে, আল্লাহ এ সবকিছু একসঙ্গে তুলে নেবেন। এই তালিকার সামনে রেখে পড়লে মুক্তিপ্রাপ্তদের ওই একটিমাত্র বাক্য বিশাল হয়ে ওঠে। এটা কোনো একটা খারাপ সময় থেকে নিছক স্বস্তি নয়, বরং ঈমানি জীবন যে গোটা ভয়ের কাঠামো বইবার জন্য গড়া, তা থেকেই পুরো মুক্তি।"
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
            "bn": "তারপর আসে কারণটা, আল্লাহর দুটি নামে বলা: নিশ্চয়ই আমাদের রব গাফূর, পরম ক্ষমাশীল, আর শাকূর, বড়ই কদরদানকারী। মুক্তিপ্রাপ্তরা নিজেদের আমলনামাকে কৃতিত্ব দেয় না। তারা নিজেদের পৌঁছানোকে ব্যাখ্যা করে তিনি যা, তা দিয়ে। ইবন কাসীর ইবন আব্বাস ও অন্যদের মন্তব্যটি আনেন, যতটা সংক্ষিপ্ত ততটাই নিখুঁত: তিনি তাদের বহু গুনাহ ক্ষমা করেছেন, আর তাদের সামান্য নেকির কদর করেছেন। এই দুটি বাক্যেই মুক্তির গোটা কলকব্জা এক লাইনে ভাঁজ করা, আর জান্নাতবাসী তা এত ভালো জানে যে সবার আগে এটাই বলে।"
          },
          {
            "en": "The Muyassar renders the pairing the same way: He is Ghafur in that He forgave us our slips, and Shakur in that He accepted our good deeds and multiplied them. Put the two names against the two human problems and they fit exactly. Our record has a debit side, the wrongs and the shortfalls, and His forgiveness covers it. Our record has a credit side, thin and uneven, and His appreciation does not merely accept it but enlarges it. The gap we could never close, He closes from both directions.",
            "bn": "মুয়াসসার জোড়াটা একইভাবে খোলে: তিনি গাফূর, কারণ আমাদের ভুলগুলো তিনি ক্ষমা করেছেন; আর শাকূর, কারণ আমাদের নেকি তিনি কবুল করেছেন এবং বহুগুণ বাড়িয়ে দিয়েছেন। দুটি নামকে মানুষের দুটি সমস্যার সামনে রাখুন, হুবহু মিলে যায়। আমাদের হিসাবের একটা দেনার দিক আছে, অন্যায় আর কমতিগুলো, আর তাঁর ক্ষমা তা ঢেকে দেয়। হিসাবের একটা পাওনার দিকও আছে, পাতলা আর এবড়োখেবড়ো, আর তাঁর কদর কেবল তা মেনে নেয় না, বাড়িয়ে তোলে। যে ফাঁক আমরা কখনো বন্ধ করতে পারতাম না, তিনি দুই দিক থেকেই তা বন্ধ করে দেন।"
          },
          {
            "en": "As-Sadi gives the pairing its most beautiful turn. By His forgiveness, he writes, they were saved from everything dreaded and feared; by His appreciation and bounty, they obtained everything desired and loved. Forgiveness clears away the terror; appreciation hands over the reward. He adds that Allah gave them of His bounty what their deeds, and even their wishes, had never reached. So the grief lifted in the first half of the verse and the two names in the second are one movement: the names are how the grief came to be lifted at all.",
            "bn": "সা'দী জোড়াটাকে দেন তার সবচেয়ে সুন্দর মোড়। তিনি লেখেন, তাঁর ক্ষমায় তারা বেঁচে গেছে যা কিছু ভয়ের আর আতঙ্কের তার সব থেকে; আর তাঁর কদর ও অনুগ্রহে তারা পেয়েছে যা কিছু কাঙ্ক্ষিত আর প্রিয় তার সব। ক্ষমা সরিয়ে দেয় আতঙ্ক; কদর তুলে দেয় প্রতিদান। তিনি যোগ করেন, আল্লাহ তাদের নিজ অনুগ্রহ থেকে এমন কিছু দিয়েছেন যেখানে তাদের আমল, এমনকি তাদের আকাঙ্ক্ষাও কখনো পৌঁছায়নি। তাই আয়াতের প্রথম অংশে দুঃখ ওঠা আর দ্বিতীয় অংশে দুটি নাম, দুটোই একই গতি: এই নামগুলোর কারণেই দুঃখটা আদৌ উঠতে পেরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Carried by Deeds",
          "bn": "আমলে পৌঁছায় না"
        },
        "p": [
          {
            "en": "This is also where a well-known hadith belongs. Al-Bukhari records from Abu Hurayra that the Messenger of Allah said, The deeds of anyone of you will not save you. They asked, Not even you, Messenger of Allah? He said, Not even I, unless Allah bestows His mercy on me; so do good deeds properly and moderately, and seek help in worship morning and evening and part of the night, and keep to a middle, regular course, and you will reach your goal. The report stands in Bukhari's Sahih.",
            "bn": "এখানেই জায়গা পায় একটি সুপরিচিত হাদীস। বুখারী আবু হুরাইরা থেকে বর্ণনা করেন যে আল্লাহর রাসূল ﷺ বলেছেন, তোমাদের কারও আমল তাকে বাঁচাতে পারবে না। তারা জিজ্ঞেস করল, আপনিও নন, হে আল্লাহর রাসূল? তিনি বললেন, আমিও নই, যদি না আল্লাহ তাঁর রহমতে আমাকে ঢেকে নেন; তাই আমল করো ঠিকঠাক আর পরিমিতভাবে, সকাল-সন্ধ্যায় আর রাতের কিছু অংশে ইবাদতে সাহায্য চাও, মধ্যপন্থা ধরে রাখো, তাহলে লক্ষ্যে পৌঁছাবে। বর্ণনাটি বুখারীর সহীহে আছে।"
          },
          {
            "en": "The hadith guards the verse from a misreading. If forgiveness covered the shortfall and appreciation enlarged the little, then nobody walks into the Garden on the strength of his own account; mercy carries him the last distance, and more. Ibn Kathir makes the same point on the very next verse, where the saved say He settled us here out of His bounty (35:35): our deeds, he comments, are not equal to this. The two names are not a reward system but a rescue, and the people who speak them have understood that exactly.",
            "bn": "হাদীসটি আয়াতটিকে একটা ভুল পড়া থেকে বাঁচায়। ক্ষমা যদি কমতি ঢেকে দেয় আর কদর যদি সামান্যকে বাড়িয়ে তোলে, তবে কেউ নিজের আমলনামার জোরে জান্নাতে হেঁটে ঢোকে না; রহমতই শেষ দূরত্বটুকু তাকে বয়ে নেয়, আরও বেশি। ইবন কাসীর ঠিক পরের আয়াতেই একই কথা বলেন, যেখানে মুক্তিপ্রাপ্তরা বলে তিনি নিজ অনুগ্রহে আমাদের এখানে বসিয়েছেন (৩৫:৩৫): আমাদের আমল, তিনি মন্তব্য করেন, এর সমকক্ষ নয়। দুটি নাম কোনো পুরস্কার-ব্যবস্থা নয়, বরং এক উদ্ধার, আর যারা এ নাম বলে তারা সেটা ঠিক ঠিক বুঝেছে।"
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
            "bn": "এর পরের আয়াতটি চিন্তাটা পূর্ণ করে। মুক্তিপ্রাপ্তরা বলে চলে, যিনি নিজ অনুগ্রহে আমাদের স্থায়ী আবাসে বসিয়েছেন; এখানে কোনো ক্লেশ আমাদের স্পর্শ করে না, কোনো ক্লান্তিও নয় (৩৫:৩৫)। দুঃখ চলে গেছে, সঙ্গে ক্লান্তিও, আর জায়গাটার নামই স্থায়ী ঘর। আগের আয়াতগুলো সোনা আর রেশমে যা ওয়াদা করেছিল, এই আয়াত তা ভেতর থেকে নাম দেয়: এমন বিশ্রাম যা নিরাপদ, কারণ যিনি তা দিয়েছেন তিনি তা ফিরিয়ে নেবেন না।"
          },
          {
            "en": "That leaves a question for anyone still in the home of sorrows. The griefs the commentators listed are our griefs now: the fear of how things end, the worry over bread, the dread of the reckoning, the quiet sense that our obedience is too thin to count. The verse does not pretend these are small. It tells us where they are finally answered, and whose two names answer them. The grief is real, but it is not the last word; the last word, for those who reach Him, is praise.",
            "bn": "এতে দুঃখের ঘরে এখনো থাকা মানুষের জন্য একটা প্রশ্ন থেকে যায়। তাফসীরকারেরা যে দুঃখগুলোর তালিকা দিয়েছেন সেগুলো তো এখন আমাদেরই দুঃখ: শেষটা কেমন হবে তার ভয়, রুটির দুশ্চিন্তা, হিসাবের আতঙ্ক, আর এই চাপা বোধ যে আমাদের আনুগত্য গোনায় ধরার মতো যথেষ্ট নয়। আয়াত এগুলোকে ছোট বলে ভান করে না। সে বলে দেয় এগুলোর জবাব শেষমেশ কোথায় মেলে, আর তাঁর কোন দুটি নাম এর জবাব দেয়। দুঃখ সত্যি, কিন্তু সেটাই শেষ কথা নয়; যারা তাঁর কাছে পৌঁছায় তাদের জন্য শেষ কথা হলো প্রশংসা।"
          },
          {
            "en": "There is a way to live toward that sentence now. When relief comes in this life, a debt cleared, a fever broken, a fear that passes, the people of Paradise have shown us the first thing to say, and it is His name before our own comfort. And when the grief has not yet lifted, their words become a hope to hold: the same Lord who is Forgiving of our shortfall and Appreciative of our little is the One we are walking toward. The praise they will speak, we can begin rehearsing.",
            "bn": "ওই বাক্যটার পথে এখন থেকেই বাঁচার একটা উপায় আছে। এই জীবনে যখন স্বস্তি আসে, একটা দেনা শোধ হয়, জ্বর ছাড়ে, একটা ভয় কেটে যায়, জান্নাতবাসী দেখিয়ে দিয়েছে প্রথমে কী বলতে হয়, আর তা হলো নিজের আরামের আগে তাঁর নাম। আর দুঃখ যখন এখনো ওঠেনি, তাদের কথাগুলোই হয়ে ওঠে ধরে রাখার মতো এক আশা: আমাদের কমতির ব্যাপারে যিনি গাফূর আর আমাদের সামান্যের ব্যাপারে যিনি শাকূর, সেই একই রবের দিকেই আমরা হেঁটে চলেছি। যে প্রশংসা তারা বলবে, তা আমরা এখন থেকেই অনুশীলন করতে পারি।"
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
          "bn": "যে কসম তারা খেয়েছিল"
        },
        "p": [
          {
            "en": "The verse opens on a vow. Wa-aqsamu billahi jahda aymanihim: they swore by Allah with the utmost strength of their oaths. At-Tabari reads jahda aymanihim as the most emphatic oaths a person can take, swearing to the very limit and exhausting the force of the words. This was no passing remark made in the heat of a conversation. The idolaters of Makka bound themselves before Allah with the heaviest language their tongues could reach, pledging that their own conduct, once a guide appeared, would outstrip everyone who had gone before them.",
            "bn": "আয়াতটি শুরু হয় এক অঙ্গীকার দিয়ে। ওয়া আকসামু বিল্লাহি জাহদা আইমানিহিম: তারা আল্লাহর নামে সবচেয়ে শক্ত কসম খেল। তাবারী বলেন, জাহদা আইমানিহিম মানে একজন মানুষ যতটা জোরালো কসম খেতে পারে তার চূড়ান্ত রূপ, কথার সব জোর নিংড়ে শেষ সীমা পর্যন্ত কসম। এটা হালকা কোনো কথা ছিল না, আলাপের উত্তাপে বলে ফেলা কথা নয়। মক্কার মুশরিকরা নিজেদের জিভে যে ভারী ভাষা আনতে পারত তার সবটা দিয়ে আল্লাহর সামনে অঙ্গীকার করল যে পথপ্রদর্শক এলে তাদের নিজেদের চালচলন আগের সবাইকে ছাড়িয়ে যাবে।"
          },
          {
            "en": "As-Sa'di describes the same scene: an oath they laboured over, loaded with the most solemn wording. And the commentators are agreed on its timing. They made this pledge before Allah sent His Messenger, while they were still outside the whole affair. The content of the vow was bold: that if a warner ever reached them, they would walk the path of truth more readily, and accept what he brought more fully, than any of the nations that had passed away before them. They set themselves a standard and named it aloud.",
            "bn": "সা'দী একই দৃশ্য আঁকেন: এমন এক কসম যা নিয়ে তারা কসরত করেছিল, ভরা ছিল সবচেয়ে গুরুগম্ভীর ভাষায়। আর এর সময়কাল নিয়ে তাফসীরকারেরা একমত। আল্লাহ তাঁর রাসূল পাঠানোর আগেই তারা এই অঙ্গীকার করেছিল, তখনো তারা পুরো ব্যাপারটার বাইরে। অঙ্গীকারের কথাটা ছিল সাহসী: তাদের কাছে কখনো সতর্ককারী এলে তারা আগের বিদায় নেওয়া যেকোনো জাতির চেয়ে বেশি সহজে সত্যের পথ ধরবে, তাঁর আনা বার্তা আরও পুরোপুরি মেনে নেবে। তারা নিজেরাই এক মান ঠিক করে তা মুখে ঘোষণা করল।"
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
            "bn": "এমন কসম তারা কেন খেল? কুরতুবী আর বাগাভী এর পটভূমি দেন। আরবদের কানে এসেছিল যে আহলে কিতাব, অর্থাৎ ইহুদি ও খ্রিষ্টানদের কাছে রাসূল পাঠানো হয়েছিল, আর তারা তাঁদের অস্বীকার করেছিল। আরবদের কাছে এটা ছিল ঘৃণ্য। বাগাভী বলেন, তারা বলত, আল্লাহ ইহুদি-খ্রিষ্টানদের লানত করুন: তাদের কাছে রাসূলরা এলেন, আর তারা তাঁদের মিথ্যুক বলল। এই অবজ্ঞা থেকেই জন্ম নিল তাদের আত্মবিশ্বাস। তারা নিশ্চিত ছিল, আগের ওই সম্প্রদায়গুলো যেভাবে ব্যর্থ হয়েছে তারা কখনো সেভাবে ব্যর্থ হবে না।"
          },
          {
            "en": "Al-Qurtubi adds a further detail. The Arabs used to long for a messenger of their own, as the messengers had come among the Children of Israel. So the oath carried a real yearning inside it: give us what they were given, and watch how much better we will answer. Al-Qurtubi closes the thought with the turn the verse itself makes. When the very thing they had wished for arrived, a warner from among themselves, they shied away from him and would not believe. The longing and the refusal belonged to the same people.",
            "bn": "কুরতুবী আরেকটি কথা যোগ করেন। আরবরা নিজেদের মধ্য থেকে একজন রাসূলের আকাঙ্ক্ষা করত, যেমন বনী ইসরাইলের মধ্যে রাসূলরা এসেছিলেন। তাই কসমের ভেতরে লুকিয়ে ছিল সত্যিকারের এক আকুতি: তাদের যা দেওয়া হয়েছিল আমাদেরও তা দাও, দেখো আমরা কত ভালোভাবে সাড়া দিই। কুরতুবী আয়াতটির নিজের মোড় দিয়েই কথা শেষ করেন। যা তারা চেয়েছিল ঠিক সেটিই যখন এল, নিজেদের মধ্য থেকেই এক সতর্ককারী, তারা তাঁর কাছ থেকে পিছিয়ে গেল, বিশ্বাস করল না। আকাঙ্ক্ষা আর অস্বীকার, দুটোই ছিল একই লোকের।"
          },
          {
            "en": "There is a cruel symmetry here that al-Qurtubi's reading exposes. The Arabs had turned the failure of earlier nations into proof of their own superiority. They did not say, those people fell, so let us fear for ourselves; they said, those people fell, so we must be made of better stuff. Contempt for another's failure is a poor base for real obedience. The moment their turn came, the same weakness they had mocked surfaced in them, only louder, because they had sworn so loudly that it never would.",
            "bn": "কুরতুবীর পড়া এক নিষ্ঠুর প্রতিসাম্য ফাঁস করে। আরবরা আগের জাতিগুলোর ব্যর্থতাকে বানিয়ে নিয়েছিল নিজেদের শ্রেষ্ঠত্বের প্রমাণ। তারা বলেনি, ওরা পড়ে গেছে তাই নিজেদের নিয়ে ভয় করি; বরং বলেছিল, ওরা পড়ে গেছে তাই আমরা নিশ্চয়ই আরও ভালো উপাদানে গড়া। অন্যের ব্যর্থতাকে তুচ্ছ করা নিজের আনুগত্যের দুর্বল ভিত। যেই তাদের পালা এল, যে দুর্বলতাকে তারা বিদ্রূপ করেছিল সেটিই তাদের মধ্যে মাথা তুলল, বরং আরও জোরে, কারণ তারা এত জোরে কসম খেয়েছিল যে তা কখনো হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided Past Which Peoples",
          "bn": "কাদের চেয়ে বেশি হেদায়েত"
        },
        "p": [
          {
            "en": "What did 'more guided than any of the nations' mean? Most of the commentators read it narrowly. Al-Muyassar, as-Sa'di and al-Baghawi all take the nations here to be the Jews and the Christians in particular, the communities the Arabs had just finished faulting. The sense is pointed: we will be better guided than the very people we scorned for wasting their guidance. On this reading the oath is a direct comparison against named predecessors, and that is exactly what makes its later collapse so bitter.",
            "bn": "'যেকোনো জাতির চেয়ে বেশি হেদায়েতপ্রাপ্ত' কথাটার মানে কী? বেশির ভাগ তাফসীরকার একে সংকীর্ণ অর্থে পড়েন। মুয়াসসার, সা'দী আর বাগাভী এখানে জাতি বলতে বিশেষভাবে ইহুদি ও খ্রিষ্টানদেরই বোঝেন, যে সম্প্রদায়গুলোর দোষ ধরা তারা মাত্রই শেষ করেছিল। অর্থটা তীক্ষ্ণ: যাদের হেদায়েত নষ্ট করার জন্য আমরা তুচ্ছ করেছি, তাদের চেয়েই আমরা বেশি হেদায়েত পাব। এই পড়ায় কসমটা নামধরা পূর্বসূরিদের বিরুদ্ধে সরাসরি তুলনা, আর সে কারণেই এর পরের ভেঙে পড়া এত তেতো।"
          },
          {
            "en": "Ibn Kathir records a wider reading. Citing ad-Dahhak and others, he takes 'any of the nations' to mean all of the communities to whom messengers had ever been sent, not the People of the Book alone. On this view the Arabs were measuring themselves against the whole record of humankind under prophecy and claiming to top it. The two readings do not cancel each other; they differ only in scope. Whether the boast was against the People of the Book or against every nation before them, it was a boast, and the warner would expose it.",
            "bn": "ইবন কাসীর আরও বিস্তৃত এক পড়া তুলে ধরেন। দাহহাক ও অন্যদের উদ্ধৃত করে তিনি 'যেকোনো জাতি' বলতে বোঝেন সেই সব সম্প্রদায়কে যাদের কাছে কখনো রাসূল পাঠানো হয়েছিল, শুধু আহলে কিতাব নয়। এই দৃষ্টিতে আরবরা নিজেদের মাপছিল নবুয়তের অধীনে পুরো মানবজাতির ইতিহাসের সঙ্গে, আর দাবি করছিল যে তারা সবার উপরে থাকবে। দুই পড়া একটি আরেকটিকে কাটে না, কেবল পরিধিতে আলাদা। অহংকারটা আহলে কিতাবের বিরুদ্ধে হোক বা তাদের আগের প্রতিটি জাতির বিরুদ্ধে, ওটা অহংকারই ছিল, আর সতর্ককারী তা ফাঁস করে দিতেন।"
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
            "bn": "তারপর এল আয়াতের মোড়: ফালাম্মা জা-আহুম নাযীর, কিন্তু যখন তাদের কাছে সতর্ককারী এলেন। ইবন কাসীর সতর্ককারীকে সোজাসুজি চিহ্নিত করেন মুহাম্মদ ﷺ হিসেবে, যিনি তাঁর উপর নাজিল হওয়া স্পষ্ট কুরআন নিয়ে এসেছিলেন। ফল হলো সামান্য হেদায়েতও নয়, নিরপেক্ষ থমকে থাকাও নয়। মা যাদাহুম ইল্লা নুফূরা: এ তাদের ঘৃণা ছাড়া আর কিছুই বাড়াল না। যে আগমন তাদের সব জাতির মধ্যে সবচেয়ে বেশি হেদায়েতপ্রাপ্ত বানানোর কথা ছিল, তা উল্টো তাদের ঠেলে দিল বিপরীত দিকে। যা তারা বরণ করবে বলে কসম খেয়েছিল, তা থেকেই তারা মুখ ফিরিয়ে পালাল।"
          },
          {
            "en": "The commentators weigh the word nufur. At-Tabari glosses it as aversion and flight together: the coming of the warner added to them not belief or the following of truth but a bolting away from it. Al-Baghawi reads it as a growing distance from guidance. As-Sa'di goes further still. They did not merely fail to become better than other nations; they did not even hold at the misguidance they already had. The warner's arrival drove them into fresh error, insolence and stubbornness, piled on top of the old.",
            "bn": "নুফূর শব্দটি তাফসীরকারেরা ওজন করেন। তাবারী এর অর্থ করেন ঘৃণা ও পলায়ন একসঙ্গে: সতর্ককারীর আগমন তাদের মধ্যে ঈমান বা সত্যের অনুসরণ বাড়াল না, বরং তা থেকে ছিটকে পালানোই বাড়াল। বাগাভী একে পড়েন হেদায়েত থেকে ক্রমে দূরে সরে যাওয়া হিসেবে। সা'দী আরও এগিয়ে যান। তারা কেবল অন্য জাতির চেয়ে ভালো হতে পারল না তা নয়, আগে যে গোমরাহিতে ছিল সেখানেও থিতু রইল না। সতর্ককারীর আসা তাদের ঠেলে দিল নতুন ভ্রান্তি, ঔদ্ধত্য আর গোঁয়ার্তুমির দিকে, পুরোনোটার উপর আরও চাপিয়ে।"
          },
          {
            "en": "Notice what did not happen. The warner did not bring confusion, or a hard doctrine, or a demand they could not meet. He brought, in Ibn Kathir's words, the clear Qur'an. The clearer the call, the sharper their recoil. This is the frightening shape of nufur: it is not caused by a weak argument but provoked by its strength. When the truth is plain and still unwelcome, the problem has moved from the mind to the will, and no further evidence will fix a thing the heart has already decided to refuse.",
            "bn": "খেয়াল করুন কী ঘটেনি। সতর্ককারী কোনো বিভ্রান্তি আনেননি, কঠিন কোনো মতবাদ নয়, এমন কোনো দাবিও নয় যা তারা মেটাতে পারত না। ইবন কাসীরের ভাষায় তিনি এনেছিলেন স্পষ্ট কুরআন। ডাক যত স্পষ্ট হলো, তাদের পিছুহটা তত তীক্ষ্ণ। নুফূরের ভয়ানক চেহারাটা এই: দুর্বল যুক্তি একে জন্ম দেয় না, এর জোরই একে উসকে দেয়। সত্য যখন স্পষ্ট তবু অবাঞ্ছিত, তখন সমস্যা মন থেকে সরে গিয়ে ইচ্ছার ঘরে চলে গেছে, আর অন্তর যা প্রত্যাখ্যান করবে বলে ঠিক করে ফেলেছে তা আর কোনো প্রমাণে সারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes in Other Surahs",
          "bn": "অন্য সূরায় এর প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Ibn Kathir reads this verse against a pattern the Qur'an names elsewhere. In 6:156 and 6:157 Allah warns the Arabs not to excuse themselves by saying the Book was sent only to two communities before them, or to claim that had the Book come to them they would have been better guided than those communities. The answer there is the same as here: a clear proof has now come to you, so who does greater wrong than one who denies it? The excuse is retired before it can be made.",
            "bn": "ইবন কাসীর এ আয়াতকে পড়েন কুরআনেরই অন্যত্র বলা এক ছকের সঙ্গে মিলিয়ে। ৬:১৫৬ ও ৬:১৫৭ আয়াতে আল্লাহ আরবদের সতর্ক করেন, তারা যেন এই অজুহাত না দেয় যে কিতাব কেবল তাদের আগের দুই সম্প্রদায়ের উপর নাজিল হয়েছিল, কিংবা দাবি না করে যে কিতাব তাদের কাছে এলে তারা ওই সম্প্রদায়গুলোর চেয়ে বেশি হেদায়েত পেত। সেখানকার জবাবও এখানকার মতোই: এখন তোমাদের কাছে স্পষ্ট প্রমাণ এসে গেছে, তাহলে যে একজন তা অস্বীকার করে তার চেয়ে বড় জালিম আর কে? অজুহাতটা মুখে আসার আগেই বাতিল করে দেওয়া হয়।"
          },
          {
            "en": "The second echo is sharper still. In 37:167 to 37:170 Allah reports that the pagans used to say: if only we had a reminder from the men of old, we would surely be the sincere servants of Allah. The condition they set was exactly the Quraysh condition: give us what the earlier peoples were given and we will outdo them. Then the reminder came. Ibn Kathir finishes the citation in Allah's own words, but they disbelieved in it, so they will come to know. The verse before us watches that disbelief arrive on schedule.",
            "bn": "দ্বিতীয় প্রতিধ্বনিটি আরও ধারালো। ৩৭:১৬৭ থেকে ৩৭:১৭০ আয়াতে আল্লাহ জানান, মুশরিকরা বলত: পূর্বপুরুষদের মতো আমাদের কাছে যদি কোনো উপদেশগ্রন্থ থাকত, আমরা অবশ্যই আল্লাহর একনিষ্ঠ বান্দা হতাম। তারা যে শর্ত রেখেছিল তা হুবহু কুরাইশের শর্ত: আগের জাতিগুলোকে যা দেওয়া হয়েছিল আমাদের তা দাও, আমরা তাদের ছাড়িয়ে যাব। তারপর উপদেশ এল। ইবন কাসীর আল্লাহরই কথায় উদ্ধৃতি শেষ করেন, কিন্তু তারা তা অস্বীকার করল, শীঘ্রই তারা জানতে পারবে। আমাদের সামনের আয়াতটি সেই অস্বীকারকে ঠিক সময়মতো আসতে দেখে।"
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
            "bn": "কোনো সহীহ বর্ণনা এ আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিসকে জুড়ে দেয় না, তাই যা আসছে তা একটি সাধারণ নীতি, এ আয়াত নিয়ে কোনো বর্ণনা নয়। সহীহ বুখারীতে উমর ইবনুল খাত্তাব (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: আমলের প্রতিদান নিয়তের উপর নির্ভর করে, আর প্রত্যেকে তা-ই পাবে যা সে নিয়ত করেছে। এ আয়াতের কসমটা জিভে ছিল জোরালো। আল্লাহ ওজন করেন তার নিচে যা থাকে তাকে। সাক্ষীদের সামনে খাওয়া কসমও ফাঁপা হতে পারে, আর পরীক্ষার দিন অন্তরকেই পড়ে, কসমের আওয়াজকে নয়।"
          },
          {
            "en": "This verse does not stand alone in the surah. A few lines earlier, in 35:38, Allah has already declared that He is the Knower of the unseen of the heavens and the earth, and that He knows what is within the breasts. So the empty oath is answered before it is sworn. A promise made to impress other people can fool other people; it cannot reach past the One who already sees what the breast is hiding. The gap between the sworn word and the true intention is exactly the gap He reads.",
            "bn": "এ আয়াত সূরার মধ্যে একা দাঁড়িয়ে নেই। কয়েক লাইন আগে, ৩৫:৩৮ আয়াতে আল্লাহ আগেই ঘোষণা করেছেন যে তিনি আসমান ও জমিনের গায়েবের জ্ঞানী, আর অন্তরে যা আছে তা-ও তিনি জানেন। তাই ফাঁপা কসমের জবাব কসম খাওয়ার আগেই দেওয়া হয়ে আছে। অন্যকে মুগ্ধ করতে দেওয়া প্রতিশ্রুতি অন্য মানুষকে ভোলাতে পারে, কিন্তু যিনি অন্তরের লুকানো জিনিস আগেই দেখেন সেই একমাত্র সত্তাকে ছাড়িয়ে যাওয়া যায় না। কসমের কথা আর আসল নিয়তের মাঝের ফাঁকটাই তিনি পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Others",
          "bn": "অন্যদের উপর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The verse describes a particular people at a particular time: the idolaters who swore an oath and then broke it when the warner arrived. It records what they did. It is not a licence to level the charge of hypocrisy at any living person, community or faith, and it is not a weapon to wield against a neighbour whose promises you doubt. The Qur'an is holding up a mirror, and the only face it is safe to look for in that mirror is your own.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াতটি নির্দিষ্ট এক সময়ের নির্দিষ্ট এক দলের বর্ণনা দেয়: সেই মুশরিকরা, যারা কসম খেয়েছিল আর সতর্ককারী এলে তা ভেঙেছিল। আয়াত কেবল তারা যা করেছিল তা নথিভুক্ত করে। এটা জীবিত কোনো মানুষ, সম্প্রদায় বা ধর্মের গায়ে মুনাফিকির অভিযোগ সাঁটার অনুমতি নয়, আর যার প্রতিশ্রুতিতে আপনার সন্দেহ এমন কোনো প্রতিবেশীর বিরুদ্ধে চালানোর অস্ত্রও নয়। কুরআন এক আয়না ধরছে, আর সেই আয়নায় নিরাপদে কেবল একটি চেহারাই খোঁজা যায়, সেটি আপনার নিজের।"
          },
          {
            "en": "And the mirror cuts both ways. If I may not use this verse to brand others, I also may not use it to comfort myself that I am not among them. The oath-breakers did not think of themselves as liars; they were sincere in the moment of swearing and only failed in the moment of testing. That is the ordinary shape of self-deception. The safe response is not to locate these people in history or across a border, but to ask where my own loud intentions have quietly gone unmet.",
            "bn": "আয়নাটা দুই দিকেই কাটে। এ আয়াত দিয়ে আমি যদি অন্যদের দাগিয়ে দিতে না পারি, তবে নিজেকে এই সান্ত্বনা দিতেও পারি না যে আমি ওদের দলে নই। কসমভঙ্গকারীরা নিজেদের মিথ্যুক ভাবত না; কসম খাওয়ার মুহূর্তে তারা আন্তরিকই ছিল, কেবল পরীক্ষার মুহূর্তে হেরে গিয়েছিল। আত্মপ্রবঞ্চনার চিরচেনা চেহারা এটাই। নিরাপদ জবাব হলো এই লোকদের ইতিহাসে বা সীমান্তের ওপারে খুঁজে বের করা নয়, বরং জিজ্ঞেস করা, আমার নিজের জোরালো নিয়তগুলো কোথায় চুপচাপ অপূর্ণ রয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The 'If Only' Mirror",
          "bn": "'সুযোগ পেলে'-র আয়না"
        },
        "p": [
          {
            "en": "Why did the promise collapse? The very next verse answers in a single word, istikbaran, out of arrogance. Ibn Kathir explains 35:43 to mean they were too proud to follow the signs of Allah, and he adds that their plotting of evil recoiled on no one but themselves, for the evil plot encompasses only its own author. Pride is what turned the sworn welcome into open flight. The same thing can happen quietly in a life that never swears a single public oath at all.",
            "bn": "প্রতিশ্রুতিটা ভেঙে পড়ল কেন? ঠিক পরের আয়াত এক শব্দেই জবাব দেয়, ইসতিকবার, অর্থাৎ অহংকার। ইবন কাসীর ৩৫:৪৩ আয়াতের ব্যাখ্যায় বলেন, তারা আল্লাহর নিদর্শন মানতে বড় অহংকারী ছিল, আর যোগ করেন যে তাদের কুচক্রান্ত নিজেরা ছাড়া আর একজনের উপরও ফিরে আসেনি, কারণ মন্দ চক্রান্ত কেবল তার রচয়িতাকেই ঘিরে ধরে। অহংকারই কসম-করা বরণকে খোলা পালানোয় বদলে দিল। একই জিনিস চুপচাপ ঘটতে পারে এমন জীবনেও, যে জীবন প্রকাশ্যে কোনো কসমই খায় না।"
          },
          {
            "en": "We all keep a ledger of future selves. When I am less busy I will pray on time. When the children are grown I will learn the Qur'an. When the debt is paid I will give freely. The verse does not scold the plan; it questions the deferral. An intention that waits for a perfect season is rarely tested, and an intention that is never tested can claim anything. The warning is not that I will be punished for a slip, but that the way of Allah does not change: guidance, once it reaches me, asks for an answer now.",
            "bn": "আমরা সবাই ভবিষ্যতের এক-একটা নিজের হিসাব জমিয়ে রাখি। ব্যস্ততা কমলে সময়মতো নামাজ পড়ব। সন্তানরা বড় হলে কুরআন শিখব। ঋণ শোধ হলে খোলা হাতে দান করব। আয়াত পরিকল্পনাকে বকে না, প্রশ্ন তোলে পিছিয়ে দেওয়াটাকে নিয়ে। যে নিয়ত নিখুঁত মৌসুমের অপেক্ষায় বসে থাকে তা খুব কমই পরীক্ষিত হয়, আর যে নিয়ত কখনো পরীক্ষিত হয় না তা যা খুশি দাবি করতে পারে। সতর্কবার্তা এই নয় যে এক পা হড়কালেই শাস্তি পাব, বরং এই যে আল্লাহর রীতি বদলায় না: হেদায়েত একবার কাছে পৌঁছে গেলে এখনই জবাব চায়।"
          }
        ]
      }
    ]
  }
});
