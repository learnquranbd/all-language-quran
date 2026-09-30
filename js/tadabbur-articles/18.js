/**
 * Tadabbur long-form articles — surah 18.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "18:2": {
    "sections": [
      {
        "h": {
          "en": "The Word That Answers",
          "bn": "যে শব্দ জবাব দেয়"
        },
        "p": [
          {
            "en": "Read this verse without the one before it, and its first word floats free. Qayyiman, straight, has nothing to describe. Read the two together and it locks into place. The verse before praised Allah for sending the Book down upon His Servant and putting no crookedness in it. This word completes that sentence. Having said what the Book is not, the Qur'an now says plainly what it is. At-Tabari joins the two as one statement: He sent the Book down upright and straight, with no crookedness in it.",
            "bn": "আগের আয়াতটি বাদ দিয়ে এ আয়াত পড়লে এর প্রথম শব্দটি শূন্যে ভাসে। কায়্যিমান, অর্থাৎ সোজা, তখন কিছুরই বর্ণনা দেয় না। দুটি আয়াত একসঙ্গে পড়ুন, শব্দটি জায়গামতো বসে যায়। আগের আয়াতে আল্লাহর প্রশংসা এসেছে, যিনি তাঁর বান্দার প্রতি কিতাব নাযিল করেছেন আর তাতে কোনো বক্রতা রাখেননি। এই শব্দ সেই বাক্যটি পূর্ণ করে। কিতাব কী নয় তা বলার পর কুরআন এবার স্পষ্ট করে বলে কিতাব কী। তাবারী দুই অংশকে একটি বাক্য হিসেবে জোড়েন: তিনি কিতাব নাযিল করেছেন সোজা ও খাঁটি করে, তাতে কোনো বক্রতা নেই।"
          },
          {
            "en": "The placement matters. Before the surah turns to its warning and its stories, it settles the standing of the Book that carries them. What comes in these opening verses is a warning and a good tiding, and after them the surah moves to correct a grave claim made about Allah. All of it rests on this: the Book that delivers the message is itself without flaw. A crooked measure cannot straighten anything. So the Qur'an fixes the measure first, and only then puts it to use.",
            "bn": "অবস্থানটাও গুরুত্বপূর্ণ। সূরা যখন তার সতর্কবাণী আর কাহিনিগুলোর দিকে মোড় নেয়, তার আগে সে ঠিক করে নেয় এসব যে কিতাব বহন করছে তার মর্যাদা কতটুকু। এই শুরুর আয়াতগুলোতে আসে একটি সতর্কবাণী আর একটি সুসংবাদ, এরপর সূরা আল্লাহ সম্পর্কে করা এক গুরুতর দাবির সংশোধনে যায়। সবকিছুর ভিত্তি এটাই: যে কিতাব বার্তা পৌঁছায়, সে নিজেই নিখুঁত। বাঁকা মাপকাঠি কোনো কিছু সোজা করতে পারে না। তাই কুরআন আগে মাপকাঠিটাই ঠিক করে, তারপর সেটাকে কাজে লাগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Merely Free of Crookedness",
          "bn": "শুধু বক্রতামুক্ত নয়"
        },
        "p": [
          {
            "en": "What does qayyim add, once crookedness has already been denied? The commentators read it as the positive twin of that denial. Ibn Kathir glosses it simply as mustaqim, straight. Al-Baghawi agrees, and adds Ibn Abbas's reading that it means balanced and just. Al-Muyassar spells the same idea out as a Book with no discrepancy and no contradiction in it. To call a thing straight says more than that it is not bent; it says the thing holds a true line of its own.",
            "bn": "বক্রতা তো আগেই অস্বীকার করা হয়েছে, তাহলে কায়্যিম শব্দটি নতুন কী যোগ করে? তাফসীরকারেরা একে সেই অস্বীকারেরই ইতিবাচক জোড়া হিসেবে পড়েন। ইবন কাসীর সোজাসাপ্টা অর্থ করেন মুসতাকীম, অর্থাৎ সোজা। বাগভী একমত হন, আর ইবন আব্বাসের পাঠ যোগ করেন যে এর মানে সুষম ও ন্যায়সংগত। মুয়াসসার একই কথা এভাবে খোলেন: এমন কিতাব যাতে কোনো গরমিল নেই, কোনো স্ববিরোধ নেই। কোনো জিনিসকে সোজা বলা মানে শুধু এটুকু নয় যে তা বাঁকা নয়; এর মানে জিনিসটা নিজের একটা খাঁটি রেখা ধরে রাখে।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the structure out. The earlier phrase ruled out crookedness in a negative, eliminating form; qayyim then fortifies that same meaning positively, for what is straight can carry no tilt to any side. Al-Qurtubi records ad-Dahhak's fine reading that straight here means straight in wisdom, with no error, no corruption, and no contradiction anywhere in it. The negation cleared the ground; this word builds on it. The Book is not merely innocent of distortion. It is actively, deliberately upright.",
            "bn": "মাআরিফুল কুরআন এই গড়নটা খুলে দেখায়। আগের বাক্যাংশ বক্রতাকে খারিজ করেছিল নেতিবাচকভাবে, বাদ দেওয়ার ভঙ্গিতে; কায়্যিম তখন সেই একই অর্থকে ইতিবাচকভাবে জোরদার করে, কারণ যা সোজা তা কোনো দিকে হেলতে পারে না। কুরতুবী দাহহাকের সুন্দর পাঠ তুলে ধরেন যে এখানে সোজা মানে হিকমতে সোজা, যাতে কোনো ভুল নেই, কোনো বিকৃতি নেই, কোথাও কোনো স্ববিরোধ নেই। অস্বীকার জমিটা পরিষ্কার করেছিল; এই শব্দ তার উপর গড়ে তোলে। কিতাব কেবল বিকৃতিমুক্ত নয়। এটি সক্রিয়ভাবে, ইচ্ছাকৃতভাবে সোজা।"
          }
        ]
      },
      {
        "h": {
          "en": "Straight, and Steadying Others",
          "bn": "নিজে সোজা, অন্যকেও সোজা রাখে"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes the grammar: qayyiman stands in the accusative as a circumstantial state, describing the Book that was sent down. He cites Qatada that the words run in their plain order, with nothing brought forward or held back, so the sense is: He put no crookedness in it, rather He made it straight. Al-Baghawi carries the same from Qatada and ties it to 4:82: had the Book been from other than Allah, they would have found in it much discrepancy.",
            "bn": "কুরতুবী ব্যাকরণের দিকটা ধরিয়ে দেন: কায়্যিমান এখানে হাল হিসেবে কর্মকারকে বসেছে, অর্থাৎ নাযিলকৃত কিতাবের অবস্থা বোঝাচ্ছে। তিনি কাতাদা থেকে উদ্ধৃত করেন যে শব্দগুলো তাদের স্বাভাবিক ক্রমেই চলছে, আগে-পরে কিছু সরানো হয়নি, তাই অর্থ দাঁড়ায়: তিনি তাতে কোনো বক্রতা রাখেননি, বরং একে সোজা করেছেন। বাগভীও কাতাদা থেকে একই কথা আনেন আর তা ৪:৮২ আয়াতের সঙ্গে জোড়েন: কিতাব যদি আল্লাহ ছাড়া অন্য কারও কাছ থেকে হতো, তবে তারা তাতে অনেক গরমিল পেত।"
          },
          {
            "en": "Two further readings widen the word. Al-Qurtubi and al-Baghawi both report, from al-Farra, that qayyim can mean standing guard over the earlier scriptures and confirming them. And Ma'arif al-Qur'an notes the second sense the root allows: qayyim also names a caretaker or guardian who keeps others upright. On that reading the Book is not only straight in itself; it steadies the people who hold to it, keeping them firm and guarding what is good for them. A straight edge is also a tool for straightening.",
            "bn": "আরও দুটি পাঠ শব্দটির পরিসর বাড়িয়ে দেয়। কুরতুবী ও বাগভী উভয়েই ফাররা থেকে বর্ণনা করেন যে কায়্যিম মানে হতে পারে আগের কিতাবগুলোর উপর পাহারাদার হয়ে দাঁড়ানো ও সেগুলোকে সত্যায়ন করা। আর মাআরিফুল কুরআন ধাতুটির আরেকটি অর্থ ধরিয়ে দেয়: কায়্যিম মানে তত্ত্বাবধায়ক বা অভিভাবকও, যে অন্যদের সোজা রাখে। এই পাঠে কিতাব শুধু নিজে সোজা নয়; যারা একে ধরে থাকে তাদেরও এটি দাঁড় করিয়ে রাখে, তাদের অটল রাখে আর তাদের কল্যাণ হেফাজত করে। সোজা মাপকাঠি নিজেই আবার সোজা করার হাতিয়ার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warning It Carries",
          "bn": "যে সতর্কবাণী এটি বহন করে"
        },
        "p": [
          {
            "en": "Now the verse states the Book's first task: to warn of a severe punishment. At-Tabari explains that the object of the verb is left unspoken and understood, as if it read, to warn you of a punishment; he likens it to 3:175, where Allah frightens His enemies with an unspoken you. Ibn Kathir names who is warned: those who oppose the Messenger, deny him, and refuse to believe. The threat is not vague menace. It is directed, aimed at a settled choice to turn away.",
            "bn": "এবার আয়াত কিতাবের প্রথম কাজটি বলে দেয়: কঠিন শাস্তি সম্পর্কে সতর্ক করা। তাবারী বলেন, ক্রিয়ার কর্মটি এখানে অনুক্ত, বোঝা যায় বলে ছেড়ে দেওয়া হয়েছে, যেন বলা হচ্ছে, তোমাদের শাস্তি সম্পর্কে সতর্ক করার জন্য; তিনি একে ৩:১৭৫ আয়াতের সঙ্গে মেলান, যেখানে আল্লাহ অনুক্ত তোমাদের দিয়ে তাঁর শত্রুদের ভয় দেখান। ইবন কাসীর বলে দেন কাকে সতর্ক করা হচ্ছে: যারা রাসূলের বিরোধিতা করে, তাঁকে মিথ্যা বলে, আর ঈমান আনতে অস্বীকার করে। এই হুমকি অস্পষ্ট ভীতি নয়। এটি নির্দিষ্ট, মুখ ফিরিয়ে নেওয়ার পাকা সিদ্ধান্তের দিকে তাক করা।"
          },
          {
            "en": "At-Tabari gathers the words the early authorities used for this punishment: present chastisement, ruin at hand, overpowering force. Ibn Kathir divides it in time, a punishment hastened in this world and held over for the next. As-Sa'di reads it as covering both, the reckoning of this life and the reckoning of the Hereafter. The Book does not merely mention that danger exists. It sounds the alarm, so that whoever hears has been told before the day the warning speaks of arrives.",
            "bn": "তাবারী এই শাস্তির জন্য পূর্বসূরিদের ব্যবহৃত শব্দগুলো একত্র করেন: হাতে-নাতে আসা আজাব, উপস্থিত ধ্বংস, দুমড়ে দেওয়া শক্তি। ইবন কাসীর একে সময়ের ভাগে ভাগ করেন, দুনিয়ায় ত্বরান্বিত এক শাস্তি আর আখিরাতের জন্য তুলে রাখা আরেক শাস্তি। সা'দী পড়েন যে তা দুটোকেই ধরে, এই জীবনের হিসাব আর আখিরাতের হিসাব। কিতাব কেবল এটুকু বলে না যে বিপদ আছে। এটি সাইরেন বাজায়, যাতে যে শোনে, সতর্কবাণী যে দিনের কথা বলছে সেই দিন আসার আগেই তাকে জানানো হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Punishment from Him",
          "bn": "তাঁরই কাছ থেকে শাস্তি"
        },
        "p": [
          {
            "en": "The verse locates the punishment precisely: from Him, min ladunhu. At-Tabari and al-Qurtubi both gloss the phrase as from Allah, from His very presence. Ibn Kathir draws out why the words matter: none punishes as Allah punishes, and none binds as firmly as He binds. A threat weighs only as much as the one who makes it. To say the punishment comes from Him is to say there is no appeal above Him, no power that can shelter the one He calls to account, and no measure by which His grasp is resisted.",
            "bn": "আয়াত শাস্তির উৎসটা নিখুঁতভাবে দেখিয়ে দেয়: তাঁর কাছ থেকে, মিন লাদুনহু। তাবারী ও কুরতুবী উভয়েই বাক্যাংশটির অর্থ করেন আল্লাহর কাছ থেকে, একেবারে তাঁর সন্নিধান থেকে। ইবন কাসীর খুলে বলেন কেন শব্দগুলো এত ভারী: আল্লাহ যেভাবে শাস্তি দেন কেউ সেভাবে দিতে পারে না, আর তিনি যেভাবে বাঁধেন কেউ সেভাবে বাঁধতে পারে না। কোনো হুমকির ওজন ততটুকুই, যতটা তার, যে হুমকি দেয়। শাস্তি তাঁর কাছ থেকে আসে বলার মানে হলো তাঁর উপরে কোনো আপিল নেই, এমন কোনো শক্তি নেই যা একজন জবাবদিহির মুখে-পড়া মানুষকে আড়াল দিতে পারে, আর এমন কোনো মাপ নেই যা দিয়ে তাঁর পাকড়াও ঠেকানো যায়।"
          },
          {
            "en": "As-Sa'di turns the warning over and finds mercy in it. That Allah frightens His servants away from what would harm and destroy them is itself a kindness. Sa'di reads it beside 39:16, where Allah says of the Fire that by it He frightens His servants, and then calls, O My servants, so fear Me. Setting a heavy penalty on defiance, naming it, and marking the roads that lead to it: this is how a guardian warns those in his care. The alarm is not cruelty; it is being told in time.",
            "bn": "সা'দী সতর্কবাণীটাকে উল্টে দেখেন আর তার ভেতরে রহমত খুঁজে পান। যা তাদের ক্ষতি করবে আর ধ্বংস করবে, তা থেকে আল্লাহ তাঁর বান্দাদের ভয় দেখান, এটাই তো এক দয়া। সা'দী একে ৩৯:১৬ আয়াতের পাশে রেখে পড়েন, যেখানে আল্লাহ জাহান্নাম প্রসঙ্গে বলেন যে এর দ্বারা তিনি তাঁর বান্দাদের ভয় দেখান, তারপর ডাকেন, হে আমার বান্দারা, আমাকে ভয় করো। নাফরমানির উপর কঠিন সাজা রাখা, তার নাম বলে দেওয়া, আর সেদিকে যাওয়ার পথগুলো চিনিয়ে দেওয়া: অভিভাবক এভাবেই তাঁর তত্ত্বাবধানে থাকাদের সতর্ক করেন। এই সাইরেন নিষ্ঠুরতা নয়; এটি সময়মতো জানিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News for the Faithful",
          "bn": "মু'মিনদের জন্য সুসংবাদ"
        },
        "p": [
          {
            "en": "The verse's second task balances the first: to give good news to the believers who do righteous deeds. At-Tabari reads the believers as those who affirm Allah and His Messenger, and reads their righteous deeds as doing what He commanded and leaving what He forbade. The good news is not offered to belief that stays in the chest alone. Faith is named, and then at once the deed that proves it. Ibn Kathir puts it the same way: those who believe in this Qur'an and confirm their faith with righteous action.",
            "bn": "আয়াতের দ্বিতীয় কাজটি প্রথমটির ভারসাম্য রাখে: যে মু'মিনরা নেক আমল করে তাদের সুসংবাদ দেওয়া। তাবারী মু'মিন বলতে বোঝেন তাদের, যারা আল্লাহ ও তাঁর রাসূলকে সত্য বলে মানে, আর তাদের নেক আমল বলতে বোঝেন আল্লাহ যা আদেশ করেছেন তা করা আর যা নিষেধ করেছেন তা ছাড়া। সুসংবাদ সেই ঈমানকে দেওয়া হয় না যা শুধু বুকের ভেতরে থেকে যায়। ঈমানের নাম আসে, আর সঙ্গে সঙ্গে আসে সেই আমল যা তা প্রমাণ করে। ইবন কাসীরও একইভাবে বলেন: যারা এই কুরআনে বিশ্বাস করে আর নেক আমল দিয়ে তাদের ঈমান দৃঢ় করে।"
          },
          {
            "en": "As-Sa'di reads the description closely. The believers here, he says, are those whose faith in Allah, His messengers, and His books has reached completeness, so that it obliges righteous works in them. Those works are the deeds, both obligatory and recommended, that join two things: sincerity toward Allah and following the Messenger. Good news is not, then, a blanket comfort for anyone who calls himself a believer. It is spoken to a faith that has gone to work, and to work done in the way the Book itself lays down.",
            "bn": "সা'দী বর্ণনাটা কাছ থেকে পড়েন। এখানকার মু'মিনরা, তিনি বলেন, তারা যাদের আল্লাহ, তাঁর রাসূলগণ আর তাঁর কিতাবসমূহের প্রতি ঈমান পূর্ণতায় পৌঁছেছে, ফলে তা তাদের ভেতরে নেক আমল ওয়াজিব করে দিয়েছে। সেই আমল হলো ফরজ ও মুস্তাহাব উভয় ধরনের কাজ, যা দুটি জিনিস একত্র করে: আল্লাহর জন্য ইখলাস আর রাসূলের অনুসরণ। তাই সুসংবাদ নিজেকে মু'মিন বলে ডাকা যেকোনো লোকের জন্য ঢালাও স্বস্তি নয়। এটি সেই ঈমানকে বলা হয় যা কাজে নেমেছে, আর কিতাব নিজে যেভাবে বলে দিয়েছে সেভাবে করা কাজকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Fair Reward Means",
          "bn": "উত্তম প্রতিফল মানে কী"
        },
        "p": [
          {
            "en": "What is the good reward the believers are promised? The commentators agree: it is Paradise. At-Tabari calls it an abundant recompense, the Garden promised to the God-fearing. Al-Qurtubi and al-Baghawi both name it plainly as the Garden, al-Qurtubi adding that the fair reward is the great recompense that leads there. Ibn Kathir calls it a beautiful reward with Allah. The word rendered fair or good is doing real work here; the promise is not bare survival but a reward described as lovely in itself.",
            "bn": "মু'মিনদের যে উত্তম প্রতিফলের ওয়াদা দেওয়া হয়েছে, তা কী? তাফসীরকারেরা একমত: তা জান্নাত। তাবারী একে বলেন প্রচুর প্রতিদান, মুত্তাকীদের কাছে ওয়াদা করা সেই বাগান। কুরতুবী ও বাগভী উভয়েই একে সোজাসুজি বাগান বলে নাম দেন, কুরতুবী যোগ করেন যে উত্তম প্রতিফল হলো সেই মহা প্রতিদান, যা জান্নাতের দিকে নিয়ে যায়। ইবন কাসীর একে বলেন আল্লাহর কাছে এক সুন্দর প্রতিদান। উত্তম বা ভালো অনুবাদ করা শব্দটি এখানে সত্যিকারের কাজ করছে; ওয়াদাটা নিছক টিকে থাকা নয়, বরং এমন প্রতিদান যা নিজেই সুন্দর বলে বর্ণিত।"
          },
          {
            "en": "As-Sa'di lingers on that word, hasan, good. To describe the reward as good, he says, shows that nothing in it is spoiled or clouded in any way; were there any flaw or grief mixed into it, its goodness would not be complete. He sets its summit at winning Allah's pleasure and entering the Garden, in which is what no eye has seen, no ear has heard, and no heart has imagined. The reward answers the punishment: the threat is severe without relief, and the promise is good without a shadow.",
            "bn": "সা'দী ওই শব্দটির উপরই থামেন, হাসান, অর্থাৎ উত্তম। প্রতিদানকে উত্তম বলার মানে, তিনি বলেন, এতে কোনোভাবেই কিছু নষ্ট বা মলিন নেই; এর সঙ্গে সামান্য ত্রুটি বা কষ্ট মেশানো থাকলে এর উত্তমতা পূর্ণ হতো না। এর চূড়া তিনি রাখেন আল্লাহর সন্তুষ্টি লাভ আর জান্নাতে প্রবেশে, যেখানে আছে এমন কিছু যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, কোনো অন্তর কল্পনাও করেনি। প্রতিদান শাস্তির জবাব দেয়: হুমকিটা কঠিন, স্বস্তিহীন, আর ওয়াদাটা উত্তম, ছায়াহীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Both Halves, One Reader",
          "bn": "দুই দিক, এক পাঠক"
        },
        "p": [
          {
            "en": "Set the two tasks side by side and the shape of the verse appears. The same straight Book warns and cheers, and it speaks both to the same listener. It does not sort the world in advance into those it only frightens and those it only comforts; it lays the severe punishment and the fair reward before every reader and lets each choose which half he is walking toward. As-Sa'di's point returns here: even the warning is an act of care, because it is offered while there is still time to heed it.",
            "bn": "দুটি কাজ পাশাপাশি রাখুন, আয়াতের গড়নটা ফুটে ওঠে। একই সোজা কিতাব ভয়ও দেখায়, সুসংবাদও দেয়, আর দুটোই বলে একই শ্রোতাকে। এটি দুনিয়াকে আগে থেকে ভাগ করে না যে এদের শুধু ভয় দেখাবে আর ওদের শুধু স্বস্তি দেবে; এটি কঠিন শাস্তি আর উত্তম প্রতিফল প্রত্যেক পাঠকের সামনে রাখে, আর প্রত্যেককে বেছে নিতে দেয় সে কোন অর্ধেকের দিকে হাঁটছে। সা'দীর কথাটা এখানে ফিরে আসে: সতর্কবাণীও এক যত্নের কাজ, কারণ এটি তখনই দেওয়া হয় যখন কান দেওয়ার সময় এখনো বাকি।"
          },
          {
            "en": "No sound hadith comes down expounding this verse in particular; the commentators read it by its wording and its neighbours, not by a narration. What the collections do preserve, at the surah's head, is the reported virtue of its opening. Muslim records from Abu ad-Darda that the Prophet ﷺ said whoever memorises the first ten verses of Surat al-Kahf will be protected from the Dajjal. That is a merit of the opening ten as a body, of which this verse is one, not a comment on its meaning; it is sound, and it is reported as a virtue rather than as tafsir.",
            "bn": "এই আয়াতটির নির্দিষ্ট ব্যাখ্যা দেয় এমন কোনো সহীহ হাদীস নেমে আসেনি; তাফসীরকারেরা একে পড়েন এর শব্দ আর পাশের আয়াতগুলো দিয়ে, কোনো বর্ণনা দিয়ে নয়। হাদীস সংকলনগুলো সূরার মাথায় যা সংরক্ষণ করেছে, তা হলো এর শুরুর অংশের বর্ণিত ফযীলত। মুসলিম আবু দারদা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, যে সূরা কাহাফের প্রথম দশটি আয়াত মুখস্থ করবে সে দাজ্জাল থেকে রক্ষা পাবে। এটি শুরুর দশটি আয়াতের সমষ্টিগত ফযীলত, যার একটি এই আয়াত, এর অর্থের উপর কোনো মন্তব্য নয়; এটি সহীহ, আর এটি ফযীলত হিসেবে বর্ণিত, তাফসীর হিসেবে নয়।"
          },
          {
            "en": "So the verse leaves the reader with a straight edge in hand. A true measure is useful only to someone willing to be measured by it. The Book has been made upright on purpose, and one of its offices, on Ma'arif al-Qur'an's reading, is to keep upright those who hold to it. The honest question is not whether the Qur'an is straight but whether I will let it straighten me, or quietly bend its plain warning and its plain promise until they fit the life I had already decided to live.",
            "bn": "তাই আয়াত পাঠকের হাতে একটি সোজা মাপকাঠি ধরিয়ে দিয়ে যায়। খাঁটি মাপকাঠি কেবল তারই কাজে লাগে, যে নিজেকে তা দিয়ে মাপতে রাজি। কিতাবকে ইচ্ছে করেই সোজা করা হয়েছে, আর মাআরিফুল কুরআনের পাঠে এর একটি কাজ হলো যারা একে ধরে থাকে তাদের সোজা রাখা। খাঁটি প্রশ্নটা এই নয় যে কুরআন সোজা কি না, বরং এই যে আমি কি একে আমাকে সোজা করতে দেব, নাকি চুপচাপ এর স্পষ্ট সতর্কবাণী আর স্পষ্ট ওয়াদাকে বাঁকিয়ে নেব যতক্ষণ না তা আগেই ঠিক করে ফেলা জীবনটার সঙ্গে খাপ খায়।"
          }
        ]
      }
    ]
  },
  "18:7": {
    "sections": [
      {
        "h": {
          "en": "The Verse That Frames a Surah",
          "bn": "যে আয়াত গোটা সূরাকে ধরে রাখে"
        },
        "p": [
          {
            "en": "The verse just before this one, 18:6, shows the Prophet ﷺ close to destroying himself with grief because his people will not believe. This verse is the answer given to that grief, and it is not a consolation so much as an explanation: We have made what is on the earth an adornment for it, so that We may test them as to which of them is best in deed. Their refusal is not a mystery. The adornment is doing exactly what it was placed there to do.",
            "bn": "ঠিক এর আগের আয়াত 18:6 দেখায়, নবী ﷺ তাঁর জাতির অবিশ্বাসের শোকে প্রায় নিজেকেই শেষ করে ফেলছেন। এই আয়াতটি সেই শোকের জবাব, আর তা সান্ত্বনার চেয়ে বেশি একটি ব্যাখ্যা: যমীনের উপর যা কিছু আছে আমি সেগুলোকে তার শোভা করেছি, যাতে আমি পরীক্ষা করতে পারি আমলের ক্ষেত্রে তাদের মধ্যে কারা উত্তম। তাদের প্রত্যাখ্যান কোনো রহস্য নয়। শোভাটিকে ঠিক যে কাজের জন্য রাখা হয়েছিল, সে তা-ই করছে।"
          },
          {
            "en": "The very next verse, 18:8, closes the frame before it can be misread: and We will make what is upon it a barren ground. The commentators read the two together, and they belong together. The adornment is real, it was given deliberately, and it has an expiry date printed underneath it. Almost everything the surah goes on to narrate sits inside that pair of sentences.",
            "bn": "ঠিক পরের আয়াত 18:8 ভুল বোঝার সুযোগ দেওয়ার আগেই কাঠামোটি বন্ধ করে দেয়: আর আমি অবশ্যই তার উপর যা আছে তা বৃক্ষলতাহীন শুকনো মাটিতে পরিণত করব। মুফাসসিরগণ দুটিকে একসঙ্গে পড়েন, আর দুটি একসঙ্গেই থাকার কথা। শোভাটি বাস্তব, তা ইচ্ছাকৃতভাবেই দেওয়া হয়েছে, আর তার নিচে মেয়াদ-উত্তীর্ণের তারিখটিও ছাপা আছে। সূরাটি এরপর যা কিছু বর্ণনা করে তার প্রায় সবই এই দুই বাক্যের ভেতরে বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adornment for the Earth",
          "bn": "যমীনের জন্য শোভা"
        },
        "p": [
          {
            "en": "The Arabic is zinatan laha, adornment for it, and the pronoun is feminine, pointing back to the earth. The beauty is the earth's dress, not ours. Everything people spend a life competing for is jewellery on a planet we are crossing, and the wearer is not the one being examined. The word zinah returns twice more in this same surah, at 18:28 and 18:46, and both times it names something a person might look at too long.",
            "bn": "আরবি শব্দবন্ধটি 'যীনাতান লাহা' — তার জন্য শোভা — আর সর্বনামটি স্ত্রীবাচক, যা ফিরে যায় যমীনের দিকে। সৌন্দর্যটি যমীনের পোশাক, আমাদের নয়। মানুষ যা কিছুর জন্য সারাজীবন প্রতিযোগিতা করে, তা আমরা যে গ্রহটি পার হয়ে যাচ্ছি তারই অলংকার — আর যে পরে আছে, পরীক্ষা তার নেওয়া হচ্ছে না। 'যীনাহ' শব্দটি এই সূরাতেই আরও দু'বার ফিরে আসে, 18:28 ও 18:46 আয়াতে, আর দু'বারই তা এমন কিছুর নাম বলে যার দিকে মানুষ হয়তো একটু বেশিক্ষণ তাকিয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Best, Not Most",
          "bn": "সর্বোত্তম, সর্বাধিক নয়"
        },
        "p": [
          {
            "en": "The test is ayyuhum ahsanu amalan: which of them is best in deed. The superlative is ahsan, best, and not akthar, most. The same test appears in three places in the Quran — 11:7, 18:7 and 67:2 — and in all three the measure is quality; only here is it ayyuhum, which of them, the other two reading ayyukum, which of you. Nowhere is a person told that the count is what will be weighed.",
            "bn": "পরীক্ষাটি হলো 'আইয়ুহুম আহসানু আমালা' — আমলের ক্ষেত্রে তাদের মধ্যে কারা উত্তম। অতিশয়ার্থক শব্দটি 'আহসান' — সর্বোত্তম, 'আকছার' — সর্বাধিক নয়। একই পরীক্ষার কথা কুরআনের তিনটি জায়গায় এসেছে — 11:7, 18:7 ও 67:2 — আর তিন জায়গাতেই মাপকাঠি হলো গুণগত মান; কেবল এখানেই তা 'আইয়ুহুম' — তাদের মধ্যে কারা — বাকি দুটিতে 'আইয়ুকুম', অর্থাৎ তোমাদের মধ্যে কারা। কোথাও কাউকে বলা হয়নি যে সংখ্যাটিই ওজন করা হবে।"
          },
          {
            "en": "Where the same phrase occurs in 67:2, Ibn Kathir transmits al-Fudayl ibn Iyad's gloss on it: the best deed is the most sincere and the most correct. Sincere means done for Allah alone; correct means done the way the Sunnah taught it. Two conditions, and a deed that satisfies only one of them fails the description. That is a demanding standard, and it is also a liberating one, because it is available to someone with very little to give.",
            "bn": "67:2 আয়াতে একই শব্দবন্ধ যেখানে এসেছে, সেখানে ইবনে কাসীর ফুদাইল ইবনে ইয়ায-এর ব্যাখ্যাটি বর্ণনা করেন: সর্বোত্তম আমল হলো সবচেয়ে নিষ্ঠাপূর্ণ ও সবচেয়ে শুদ্ধ আমল। নিষ্ঠাপূর্ণ মানে কেবল আল্লাহর জন্য করা; শুদ্ধ মানে সুন্নাহ যেভাবে শিখিয়েছে সেভাবে করা। দুটি শর্ত, আর যে আমল কেবল একটি পূরণ করে তা এই বর্ণনায় পড়ে না। মানদণ্ডটি কঠিন, আবার মুক্তিদায়কও — কারণ যার দেওয়ার মতো সামান্যই আছে, তার নাগালেও এটি রয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Stories, One Frame",
          "bn": "চারটি কাহিনি, একটি কাঠামো"
        },
        "p": [
          {
            "en": "After this frame the surah tells four narratives, beginning at 18:9, 18:32, 18:60 and 18:83, and it is worth counting them: the companions of the cave; the man given two gardens; Musa (AS) travelling with a servant whom Allah had given mercy and knowledge; and Dhul-Qarnayn. Each of the four sets a person beside something the world adorns — faith and safety, wealth, knowledge, and power.",
            "bn": "এই কাঠামোটির পর সূরাটি চারটি কাহিনি বলে, যেগুলোর শুরু 18:9, 18:32, 18:60 ও 18:83 আয়াতে — আর সেগুলো গুনে দেখা দরকার: গুহার অধিবাসীরা; যাকে দুটি বাগান দেওয়া হয়েছিল সেই ব্যক্তি; মূসা (আঃ) ও তাঁর সফরসঙ্গী সেই বান্দা যাঁকে আল্লাহ রহমত ও জ্ঞান দিয়েছিলেন; এবং যুলকারনাইন। চারটির প্রতিটিই একজন মানুষকে দাঁড় করায় দুনিয়া যা দিয়ে সাজায় তার পাশে — ঈমান ও নিরাপত্তা, সম্পদ, জ্ঞান, ও ক্ষমতা।"
          },
          {
            "en": "The surah pauses after the second of them and returns to the frame in three steps. 18:44 gives the verdict that authority belongs to Allah, the Truth, who is best in reward and best in outcome. 18:45 turns the world's green growth into dry remnants scattered by the wind. 18:46 then names wealth and children as the adornment of this life and declares the enduring good deeds better in reward and better in hope.",
            "bn": "দ্বিতীয় কাহিনিটির পর সূরাটি থামে এবং তিন ধাপে কাঠামোটিতে ফিরে আসে। 18:44 আয়াত রায় দেয় যে যাবতীয় কর্তৃত্ব সেই সত্যিকার আল্লাহরই, যিনি পুরস্কারে শ্রেষ্ঠ ও পরিণামে শ্রেষ্ঠ। 18:45 আয়াত দুনিয়ার সবুজ ফসলকে বাতাসে উড়ে যাওয়া শুকনো খড়কুটোয় পরিণত করে। এরপর 18:46 আয়াত ধন-সম্পদ ও সন্তানাদিকে এ জীবনের শোভা বলে নাম দেয় এবং ঘোষণা করে যে স্থায়ী সৎকাজই পুরস্কারে উত্তম ও আকাঙ্ক্ষায় উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ornament Is Not the Enemy",
          "bn": "শোভা শত্রু নয়"
        },
        "p": [
          {
            "en": "Nothing here calls the world's beauty a trap or a sin. It is called zinah, ornament, and Allah says He made it. An exam paper is not the student's enemy. What the verse rules out is not enjoyment but confusion about which of the two is being marked — and the confusion is easy, because the ornament is visible and the deed is not.",
            "bn": "এখানে কোথাও দুনিয়ার সৌন্দর্যকে ফাঁদ বা পাপ বলা হয়নি। তাকে বলা হয়েছে 'যীনাহ' — শোভা, আর আল্লাহ বলছেন তিনিই তা বানিয়েছেন। পরীক্ষার প্রশ্নপত্র পরীক্ষার্থীর শত্রু নয়। আয়াতটি যা বাদ দেয় তা উপভোগ নয়, বরং এই বিভ্রান্তি — দুটির মধ্যে কোনটির মূল্যায়ন হচ্ছে। আর বিভ্রান্তিটি সহজ, কারণ শোভা চোখে দেখা যায় আর আমল যায় না।"
          },
          {
            "en": "The same surah states the failure case plainly. 18:103 asks whether we should be told about the greatest losers in deeds, and 18:104 answers: those whose effort in the life of this world was lost while they thought they were doing well. That is what a life fails at when it is graded by the ornament. The practical instruction from this verse is narrow and doable: take one deed you already perform and improve its quality rather than its frequency.",
            "bn": "একই সূরা ব্যর্থতার ঘটনাটিও স্পষ্ট করে বলে। 18:103 আয়াত জিজ্ঞেস করে, আমলের দিক থেকে সবচেয়ে ক্ষতিগ্রস্তদের কথা কি আমাদের জানানো হবে; আর 18:104 আয়াত উত্তর দেয়: তারা সেই লোক, দুনিয়ার জীবনে যাদের চেষ্টা ব্যর্থ হয়ে গেছে অথচ তারা ভাবছিল তারা ভালোই করছে। শোভা দিয়ে মাপলে একটি জীবন এখানেই ব্যর্থ হয়। এই আয়াত থেকে ব্যবহারিক নির্দেশনাটি সংকীর্ণ ও করণীয়: আপনি ইতিমধ্যেই করেন এমন একটি আমল নিন এবং তার সংখ্যা নয়, মান বাড়ান।"
          }
        ]
      }
    ]
  },
  "18:18": {
    "sections": [
      {
        "h": {
          "en": "Eyes Open in Deep Sleep",
          "bn": "খোলা চোখে গভীর ঘুম"
        },
        "p": [
          {
            "en": "Wa tahsabuhum ayqazan wa hum ruqud: and you would think them awake, while they were asleep. At-Tabari glosses ayqaz as the plural of yaqiz, the alert, and ruqud as the plural of raqid, a sleeper. The verse before kept the sun off the cave; this verse takes the reader inside it. Why they looked awake, the verse does not say. Al-Qurtubi reports the commentators as saying their eyes were open while they slept, and records a second view: they turned so often that they seemed like a restless man lying awake.",
            "bn": "ওয়া তাহসাবুহুম আইকাযান ওয়া হুম রুকূদ: তুমি তাদের জাগ্রত ভাবতে, অথচ তারা ঘুমিয়ে ছিল। তাবারী বলেন, আইকায শব্দটি ইয়াকিযের বহুবচন, অর্থাৎ সজাগ। আর রুকূদ হলো রাকিদের বহুবচন, মানে ঘুমন্ত। আগের আয়াত সূর্যকে গুহা থেকে সরিয়ে রেখেছিল, এ আয়াত পাঠককে নিয়ে যায় গুহার ভেতরে। তাদের কেন জাগ্রত মনে হতো, আয়াত নিজে তা বলেনি। কুরতুবী তাফসীরকারদের কথা আনেন: ঘুমের মধ্যেও তাদের চোখ খোলা ছিল। সঙ্গে আরেকটি মতও রাখেন। তারা এত ঘন ঘন পাশ ফিরত যে বিছানায় ছটফট করা জেগে থাকা মানুষের মতো দেখাত।"
          },
          {
            "en": "Al-Baghawi traces the likeness to open eyes and breathing without speech. As-Sa'di, citing the commentators, gives the reason: the eyes were left open so that they would not spoil. Ibn Kathir reports from some scholars that the eyelids did not close so that decay would not hasten to the eyes, which last longer open to the air, and he mentions the wolf, said to sleep with one eye shut and one open. Ma'arif al-Qur'an adds that their bodies showed none of the slackness or slowed breathing of sleep, and calls it a karamah that kept attackers and thieves away.",
            "bn": "বাগাভীর মতে এ সাদৃশ্যের কারণ খোলা চোখ, আর কথা ছাড়াই শ্বাস চলতে থাকা। সা'দী তাফসীরকারদের বরাতে কারণটা বলেন: চোখ খোলা রাখা হয়েছিল, যাতে তা নষ্ট না হয়। ইবন কাসীর কিছু আলেমের কথা আনেন: চোখের পাতা বন্ধ হয়নি, যাতে চোখে দ্রুত পচন না ধরে। বাতাসের সংস্পর্শে খোলা থাকলে চোখ বেশি দিন টেকে। তিনি নেকড়ের কথাও তোলেন, যে নাকি একটা চোখ বন্ধ আর একটা খোলা রেখে ঘুমায়। মাআরিফুল কুরআন যোগ করে, তাদের শরীরে ঘুমের ঢিলেঢালা ভাব বা শ্বাসের ধীর গতি কিছুই ছিল না। একে সে কারামত বলে, যা হামলাকারী আর চোরকে দূরে রাখত।"
          }
        ]
      },
      {
        "h": {
          "en": "Turned Over by His Care",
          "bn": "তাঁর যত্নে পাশ বদল"
        },
        "p": [
          {
            "en": "Wa nuqallibuhum dhat al-yamini wa dhat ash-shimal: and We turned them to the right and to the left. At-Tabari explains it as turning the youths in their sleep, once onto the right side and once onto the left. For the reason, at-Tabari and Ibn Kathir both carry the word of Ibn Abbas: had they not been turned, the earth would have consumed them. How often is left to reports that differ: twice a year from Abu Hurayrah in al-Qurtubi and al-Baghawi, once a year from Ibn Abbas in al-Baghawi, once every seven years from Mujahid in al-Qurtubi. The verse fixes none of them.",
            "bn": "ওয়া নুকাল্লিবুহুম যাতাল ইয়ামীনি ওয়া যাতাশ শিমাল: আর আমি তাদের ডানে ও বামে পাশ ফেরাতাম। তাবারীর ব্যাখ্যায়, ঘুমের মধ্যে যুবকদের একবার ডান কাতে, একবার বাম কাতে ফেরানো হতো। কেন, তার জবাবে তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাসের কথা আনেন: পাশ ফেরানো না হলে মাটি তাদের খেয়ে ফেলত। কত দিন পরপর, সে বিষয়ে বর্ণনাগুলো মেলে না। কুরতুবী ও বাগাভীতে আবূ হুরায়রা থেকে আছে বছরে দুবার। বাগাভীতে ইবন আব্বাস থেকে বছরে একবার। কুরতুবীতে মুজাহিদ থেকে প্রতি ৭ বছরে একবার। আয়াত এর কোনোটিই নির্দিষ্ট করেনি।"
          },
          {
            "en": "Al-Qurtubi notes that the plain sense of the commentators makes the turning Allah's own act, while allowing that an angel may have done it at His command, the act then being ascribed to Him. As-Sa'di draws the finer point. The earth by its nature eats the bodies that lie against it, so Allah turned them just enough to keep them whole. He could have kept them without any turning at all, as-Sa'di says, but He is wise, and willed that His way in creation run on, with causes tied to their effects. The Muyassar gathers it in one phrase: We tended them with care.",
            "bn": "কুরতুবী লক্ষ করেন, তাফসীরকারদের কথার বাহ্যিক অর্থে পাশ ফেরানো ছিল আল্লাহর নিজের কাজ। তবে তিনি এও মানেন যে তাঁর হুকুমে কোনো ফেরেশতা কাজটা করে থাকতে পারেন, আর তখন কাজটা আল্লাহর দিকেই সম্পর্কিত হয়। সা'দী আরও সূক্ষ্ম কথাটা বলেন। মাটির স্বভাবই হলো গায়ে লেগে থাকা দেহকে খেয়ে ফেলা। তাই আল্লাহ তাদের ঠিক ততটুকু ফিরিয়েছেন, যতটুকুতে দেহ অক্ষত থাকে। সা'দী বলেন, পাশ না ফিরিয়েও তিনি তাদের রক্ষা করতে পারতেন। কিন্তু তিনি হাকীম। তিনি চেয়েছেন সৃষ্টিজগতে তাঁর নিয়ম চালু থাকুক, কারণের সঙ্গে ফল বাঁধা থাকুক। মুয়াসসার একটা কথায় পুরোটা ধরে: আমি যত্নের সঙ্গে তাদের দেখাশোনা করতাম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dog Across the Entrance",
          "bn": "গুহামুখে শুয়ে থাকা কুকুর"
        },
        "p": [
          {
            "en": "Wa kalbuhum basitun dhira'ayhi bil-wasid: and their dog stretched its forelegs at the wasid. What the wasid is, the early authorities differ. At-Tabari lists three views: the open ground before the cave, from Ibn Abbas, Sa'id ibn Jubayr, Mujahid, Qatadah and ad-Dahhak; the bare earth, from Sa'id ibn Jubayr and others; and the door, through Ikrimah from Ibn Abbas. Al-Qurtubi adds the view of Ata: the threshold. He also notes that basit describes the past scene as though present, not a deed the dog was doing.",
            "bn": "ওয়া কালবুহুম বাসিতুন যিরাআইহি বিল-ওয়াসীদ: আর তাদের কুকুরটি ওয়াসীদে সামনের পা দুটো মেলে ছিল। ওয়াসীদ কী, তা নিয়ে পূর্বসূরিদের মতভেদ আছে। তাবারী তিনটি মত আনেন। এক, গুহার সামনের খোলা জায়গা, এ কথা ইবন আব্বাস, সাঈদ ইবন জুবাইর, মুজাহিদ, কাতাদা ও দাহহাকের। দুই, খালি মাটি, সাঈদ ইবন জুবাইর ও আরও কয়েকজন থেকে। তিন, দরজা, ইকরিমার সূত্রে ইবন আব্বাস থেকে। কুরতুবী আতার মতও যোগ করেন: দরজার চৌকাঠ। তিনি আরও দেখান, বাসিত শব্দটি অতীতের দৃশ্যকে বর্তমানের মতো তুলে ধরে। কুকুরটি তখন কী করছিল, তার খবর দেওয়া এর উদ্দেশ্য নয়।"
          },
          {
            "en": "At-Tabari prefers the door, or the space before it where it shuts, since a door is closed, yusad, as in innaha alayhim mu'sadah in 104:8. Ibn Kathir calls this view correct and cites the same verse. Al-Baghawi answers an objection, that a cave has no door, by taking it as the place where a door would stand. Ibn Jurayj, in at-Tabari and Ibn Kathir, says the dog was keeping the door for them, and Ibn Kathir calls that a dog's nature. As-Sa'di adds that sleep took the dog too, while it stood guard, its forelegs still stretched at the entrance.",
            "bn": "তাবারী দরজার মতটাকেই প্রাধান্য দেন, কিংবা দরজার সামনের সেই জায়গা যেখানে দরজা বন্ধ হয়। কারণ দরজাকে বলা হয় ইউসাদ, বন্ধ করা হয়, যেমন ১০৪:৮ আয়াতে ইন্নাহা আলাইহিম মু'সাদাহ। ইবন কাসীরও এ মতকে সঠিক বলেন এবং একই আয়াত আনেন। বাগাভী একটা আপত্তির জবাব দেন: গুহার তো দরজা থাকে না। তাঁর উত্তর, এখানে দরজার জায়গাটাই বোঝানো হয়েছে। তাবারী ও ইবন কাসীরে ইবন জুরাইজ বলেন, কুকুরটি তাদের দরজা আগলে রাখছিল। ইবন কাসীরের মতে এটাই কুকুরের স্বভাব। সা'দী যোগ করেন, পাহারা দিতে দিতে কুকুরটিকেও ঘুম পেয়ে বসে, আর তার সামনের পা দুটো প্রবেশপথে মেলাই থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Names No One Needs",
          "bn": "যে নাম জানার দরকার নেই"
        },
        "p": [
          {
            "en": "Here the commentaries fill with details the verse does not give, and they are reports, not facts. Al-Baghawi and al-Qurtubi list names for the dog attributed to early figures: Qitmir to Ibn Abbas, Rayyan to Ali, and others to al-Awza'i, Ka'b and more. For its colour al-Baghawi gives yellow from Muqatil, a yellow verging on red from al-Qurazi, and the colour of stone from others. Al-Qurtubi relays Ka'b's tale that the dog spoke to the youths. Such material is of the kind called Isra'iliyyat, and the Qur'an gives none of it.",
            "bn": "এখানে এসে তাফসীরের পাতায় এমন সব খুঁটিনাটি ঢুকে পড়ে, যা আয়াতে নেই। এগুলো বর্ণনা মাত্র, প্রতিষ্ঠিত তথ্য নয়। বাগাভী ও কুরতুবী কুকুরটির কয়েকটি নাম তুলে ধরেন, প্রতিটি কোনো না কোনো পূর্বসূরির নামে: ইবন আব্বাসের নামে কিতমীর, আলীর নামে রাইয়ান, আর আওযাঈ, কা'ব প্রমুখের নামে আরও কয়েকটি। রং নিয়ে বাগাভী আনেন মুকাতিলের মতে হলুদ, কুরাযীর মতে লালচে হলুদ, আর অন্যদের মতে পাথরের রং। কুরতুবী কা'বের সেই কাহিনিও বলেন, যেখানে কুকুরটি যুবকদের সঙ্গে কথা বলেছিল। এ ধরনের বর্ণনাকে ইসরাঈলিয়্যাত বলা হয়। কুরআন এর কিছুই জানায়নি।"
          },
          {
            "en": "The scholars who record these reports also weigh them. Al-Qurtubi, summing up the colours gathered by ath-Tha'labi, says that whatever colour you name, you will have hit on someone's view. Ibn Kathir is sharper: the views on its colour have no substance, no use, no evidence and no need, and are among what is forbidden, because they rest on guessing at the unseen, rajm bil-ghayb. That is the very phrase the Qur'an uses in 18:22 for those who guess at the sleepers' number, and the number belongs to that verse, not to this.",
            "bn": "যে আলেমরা এসব বর্ণনা লিখে রেখেছেন, তাঁরাই এগুলোর ওজনও মেপেছেন। সা'লাবীর সংগ্রহ করা রঙের তালিকার সারকথা কুরতুবী বলেন এভাবে: যে রঙের নামই বলুন, কারও না কারও মতের সঙ্গে মিলে যাবে। ইবন কাসীর আরও কড়া। তাঁর ভাষায়, কুকুরের রং নিয়ে এসব মতের কোনো সারবস্তু নেই, কোনো উপকার নেই, কোনো দলীল নেই, কোনো প্রয়োজনও নেই। বরং এগুলো নিষিদ্ধ জিনিসের মধ্যে পড়ে, কারণ এর ভিত্তি অদৃশ্য নিয়ে আন্দাজ, রাজমুম বিল-গাইব। ঠিক এই কথাটাই কুরআন ১৮:২২ আয়াতে ব্যবহার করেছে, যারা ঘুমন্তদের সংখ্যা আন্দাজ করে তাদের বেলায়। সংখ্যার প্রশ্ন সেই আয়াতের, এ আয়াতের নয়।"
          },
          {
            "en": "A few denied it was a dog at all. At-Tabari reports some who took it for a man, a cook who followed them; al-Qurtubi, a group who made it one of the youths keeping lookout; al-Baghawi, Ibn Jurayj saying it was a lion. Al-Baghawi calls a real dog the sounder view. Ibn Atiyyah, in al-Qurtubi, answers that stretched forearms are a dog's posture, citing the Prophet's words, which Bukhari 822 gives from Anas ibn Malik (RA): Be straight in the prostrations and none of you should put his forearms on the ground (in the prostration) like a dog.",
            "bn": "কেউ কেউ এটাকে কুকুরই মানেননি। তাবারী বর্ণনা করেন, কারও মতে সে ছিল একজন মানুষ, এক বাবুর্চি, যে তাদের পিছু নিয়েছিল। কুরতুবী একদলের কথা লেখেন, যাদের মতে সে যুবকদেরই একজন, গুহার মুখে বসে পাহারা দিচ্ছিল। আর বাগাভীতে ইবন জুরাইজ বলেন, সেটা ছিল সিংহ। বাগাভী প্রথম মতটিকে, অর্থাৎ সত্যিকারের কুকুর, বেশি সঠিক বলেন। কুরতুবীর উদ্ধৃতিতে ইবন আতিয়্যা জবাব দেন, সামনের পা মেলে দেওয়া তো কুকুরেরই ভঙ্গি। প্রমাণ হিসেবে আসে নবী ﷺ-এর বাণী, যা বুখারীর ৮২২ নম্বর হাদীসে আনাস ইবন মালিক (রাঃ) থেকে এসেছে: সিজদায় সোজা হয়ে থাকো, আর তোমাদের কেউ যেন (সিজদায়) কুকুরের মতো বাহু মাটিতে বিছিয়ে না দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Lay Outside",
          "bn": "কুকুরটি কেন বাইরে"
        },
        "p": [
          {
            "en": "Ibn Kathir adds a detail tied to the law. The dog sat outside the door, he says, because the angels do not enter a house in which there is a dog, as is reported in the Sahih. The narration he points to is Bukhari 3225, from Abu Talhah (RA): I heard Allah's Messenger ﷺ saying: Angels (of Mercy) do not enter a house wherein there is a dog or a picture of a living creature (a human being or an animal). The bracketed words are the English translator's. Linking the hadith to where this dog lay is Ibn Kathir's reasoning; the verse says only that it lay at the entrance.",
            "bn": "ইবন কাসীর এখানে শরীয়তের সঙ্গে যুক্ত একটা কথা যোগ করেন। তাঁর মতে কুকুরটি দরজার বাইরে বসে ছিল, কারণ সহীহ বর্ণনায় এসেছে, যে ঘরে কুকুর থাকে সেখানে ফেরেশতা প্রবেশ করেন না। তিনি যে হাদীসের দিকে ইঙ্গিত করেন, তা বুখারীর ৩২২৫ নম্বর হাদীস, আবূ তালহা (রাঃ) থেকে: আমি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছি, যে ঘরে কুকুর বা কোনো প্রাণীর ছবি থাকে, সেখানে (রহমতের) ফেরেশতা প্রবেশ করেন না। বন্ধনীর কথাটা ইংরেজি অনুবাদকের সংযোজন। হাদীসটিকে কুকুরের শোয়ার জায়গার সঙ্গে মেলানো ইবন কাসীরের নিজের যুক্তি। আয়াত শুধু এটুকুই বলে যে সে প্রবেশপথে শুয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Lifted by Its Company",
          "bn": "সঙ্গের বরকতে উঁচু মর্যাদা"
        },
        "p": [
          {
            "en": "Ibn Kathir then draws the lesson that has made this dog famous. Their blessing, he writes, took in their dog as well, so that what befell them befell it: the same sleep, in the same state. This, he says, is the benefit of keeping the company of good people, since this dog came to have a mention, a story and a standing. Nothing in the animal changed. What changed was whom it stayed beside, and that was enough for it to be named in the Book of Allah.",
            "bn": "এরপর ইবন কাসীর সেই শিক্ষাটা বের করে আনেন, যার কারণে এ কুকুর এত পরিচিত। তিনি লেখেন, যুবকদের বরকত তাদের কুকুরকেও ঘিরে নিয়েছিল। তাদের যা হয়েছিল, কুকুরেরও তা-ই হয়েছে: একই ঘুম, একই অবস্থায়। তাঁর ভাষায়, এটাই নেককারদের সঙ্গে থাকার উপকার। এ কারণেই কুকুরটির চর্চা হয়, তার কাহিনি আছে, তার একটা মর্যাদা আছে। প্রাণীটির নিজের মধ্যে কিছুই বদলায়নি। বদলেছে শুধু সে কাদের পাশে ছিল। আর আল্লাহর কিতাবে তার উল্লেখ আসার জন্য সেটুকুই যথেষ্ট ছিল।"
          },
          {
            "en": "Al-Qurtubi carries the thought through a chain of preachers. Ibn Atiyyah reports from his father that he heard Abu al-Fadl al-Jawhari say from the pulpit in Egypt, in the year 469: whoever loves the people of good gains from their blessing; a dog loved people of virtue and kept their company, and Allah mentioned it in His Book. Al-Qurtubi comments: if a dog reached that rank by the company of the righteous, what then of believers who affirm Allah's oneness and love His friends? He then brings a narration that does not mention the cave, as comfort for those who fall short in deeds.",
            "bn": "কুরতুবী একই ভাবনা আনেন কয়েকজন বক্তার পরম্পরায়। ইবন আতিয়্যা তাঁর পিতা থেকে বর্ণনা করেন, তিনি ৪৬৯ হিজরিতে মিসরের জামে মসজিদের মিম্বর থেকে আবুল ফাদল জাওহারীকে বলতে শুনেছেন: যে নেককারদের ভালোবাসে, সে তাদের বরকতের ভাগ পায়। একটা কুকুর মর্যাদাবান মানুষদের ভালোবেসে তাদের সঙ্গ নিয়েছিল, আর আল্লাহ তাঁর কিতাবে তার কথা বলেছেন। কুরতুবীর মন্তব্য: নেককারদের সঙ্গের গুণে একটা কুকুর যদি এমন মর্যাদায় পৌঁছায়, তবে যে মুমিন তাওহীদে বিশ্বাসী আর আল্লাহর বন্ধুদের ভালোবাসে, তার অবস্থা কী হবে? এরপর তিনি একটি হাদীস আনেন, যাতে গুহার কোনো উল্লেখ নেই। আমলে পিছিয়ে থাকা মানুষের সান্ত্বনা হিসেবেই তিনি এটা এখানে রাখেন।"
          },
          {
            "en": "Bukhari 3688, from Anas (RA), translator's glosses left out: A man asked the Prophet ﷺ about the Hour saying, When will the Hour be? The Prophet ﷺ said, What have you prepared for it? The man said, Nothing, except that I love Allah and His Apostle. The Prophet ﷺ said, You will be with those whom you love. We had never been so glad as we were on hearing that saying of the Prophet Therefore, I love the Prophet, Abu Bakr and Umar, and I hope that I will be with them because of my love for them though my deeds are not similar to theirs.",
            "bn": "বুখারীর ৩৬৮৮ নম্বর হাদীস, আনাস (রাঃ) থেকে: এক ব্যক্তি নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করল, কিয়ামত কবে হবে? নবী ﷺ বললেন, তুমি এর জন্য কী প্রস্তুতি নিয়েছ? লোকটি বলল, কিছুই না, শুধু এটুকু যে আমি আল্লাহ ও তাঁর রাসূলকে ভালোবাসি। নবী ﷺ বললেন, তুমি যাদের ভালোবাস, তাদের সঙ্গেই থাকবে। আনাস বলেন, নবীর এ কথা শুনে আমরা যত খুশি হয়েছিলাম, তত খুশি আর কখনো হইনি। তাই আমি নবী ﷺ, আবূ বকর ও উমরকে ভালোবাসি। আশা রাখি, তাঁদের প্রতি এ ভালোবাসার কারণে আমি তাঁদের সঙ্গেই থাকব, যদিও আমার আমল তাঁদের আমলের মতো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Awe That Stood Guard",
          "bn": "পাহারায় দাঁড়ানো ভীতি"
        },
        "p": [
          {
            "en": "Law ittala'ta alayhim la-wallayta minhum firaran wa la-muli'ta minhum ru'ba: had you looked in on them, you would have turned from them in flight and been filled with terror of them. At-Tabari explains the terror by the awe, haybah, that Allah had clothed them in, so that no one would reach them and no hand touch them until the decree reached its term and His power woke them, a sign that His promise is true, as 18:21 goes on to say. Ibn Kathir says much the same. As-Sa'di calls it their protection from people, as the turning was their protection from the earth.",
            "bn": "লাউ ইত্তালা'তা আলাইহিম লাওয়াল্লাইতা মিনহুম ফিরারান ওয়া লামুলি'তা মিনহুম রু'বা: তুমি উঁকি দিয়ে তাদের দেখলে পেছন ফিরে পালাতে, আর তাদের ভয়ে তোমার মন আতঙ্কে ভরে যেত। তাবারীর ব্যাখ্যায় এ আতঙ্কের কারণ সেই গাম্ভীর্য, হাইবাহ, যা আল্লাহ তাদের গায়ে পরিয়ে দিয়েছিলেন। উদ্দেশ্য ছিল, কেউ যেন তাদের কাছে পৌঁছাতে না পারে, কোনো হাত যেন তাদের ছুঁতে না পারে, যতক্ষণ না নির্ধারিত সময় পূর্ণ হয় আর তাঁর কুদরত তাদের জাগিয়ে তোলে। এটা হবে এ কথার নিদর্শন যে তাঁর ওয়াদা সত্য, যা ১৮:২১ আয়াতে সামনে আসছে। ইবন কাসীরও প্রায় একই কথা বলেন। সা'দীর মতে পাশ ফেরানো ছিল মাটি থেকে তাদের রক্ষা, আর এই ভীতি মানুষ থেকে রক্ষা।"
          },
          {
            "en": "Others looked for the cause in what an onlooker would see, and al-Baghawi lists the views as a disagreement: the wildness of the place; their open eyes, in al-Kalbi's words like a waking man about to speak; their long hair and nails; or a terror by which Allah simply kept them from sight. Al-Qurtubi calls the hair and nails view far-fetched, since on waking they guessed they had stayed a day or part of a day, in 18:19. Ma'arif al-Qur'an adds that neither the Qur'an nor the hadith fixes the cause, so arguing over it with conjecture is futile.",
            "bn": "অন্যরা কারণ খুঁজেছেন দর্শকের চোখে যা পড়ত তার মধ্যে। বাগাভী মতগুলো মতভেদ হিসেবেই সাজান। কারও মতে জায়গাটার নির্জন ভয়াল পরিবেশ। কালবীর মতে তাদের খোলা চোখ, যেন জেগে থাকা কেউ এখনই কথা বলে উঠবে। কারও মতে লম্বা চুল আর নখ। আবার কারও মতে এমন এক ভীতি, যা দিয়ে আল্লাহ তাদের মানুষের চোখ থেকে আড়াল করে রেখেছিলেন। চুল আর নখের মতটিকে কুরতুবী দূরের কথা বলেন। কারণ ১৮:১৯ আয়াতে জেগে উঠে তারা ভেবেছিল, একদিন বা দিনের কিছু অংশ ঘুমিয়েছে। মাআরিফুল কুরআন যোগ করে, কুরআন বা হাদীস কোনোটিই কারণ নির্দিষ্ট করেনি, তাই আন্দাজ দিয়ে এ নিয়ে তর্ক অর্থহীন।"
          },
          {
            "en": "Who is the you of the verse? At-Tabari and al-Baghawi read it as the Prophet ﷺ; the Muyassar and as-Sa'di as any onlooker; Ma'arif al-Qur'an as people at large. The sources keep both readings. Al-Baghawi and Ma'arif al-Qur'an also carry a report that Ibn Abbas, on a campaign with Mu'awiyah towards the Byzantines, advised against looking into the cave, reciting this verse and saying that one better than Mu'awiyah had been kept from it. Neither source grades the report, and nothing in it is taken here to fix where the cave lies.",
            "bn": "আয়াতের তুমি আসলে কে? তাবারী ও বাগাভীর মতে নবী ﷺ। মুয়াসসার ও সা'দীর মতে যে কোনো দর্শক। মাআরিফুল কুরআনের মতে সাধারণ মানুষ। সূত্রগুলো দুটি পাঠই রেখে দিয়েছে। বাগাভী ও মাআরিফুল কুরআন একটি বর্ণনাও আনে। মুআবিয়ার সঙ্গে রোমানদের দিকে এক অভিযানে ইবন আব্বাস ছিলেন। মুআবিয়া গুহার ভেতরে তাকাতে চাইলে তিনি নিষেধ করেন, এই আয়াত তিলাওয়াত করেন, আর বলেন, মুআবিয়ার চেয়ে উত্তম একজনকে তা দেখা থেকে বিরত রাখা হয়েছিল। কোনো সূত্রই বর্ণনাটির মান যাচাই করে বলেনি। গুহা কোথায়, তা এ বর্ণনা থেকে এখানে নির্ধারণ করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept by an Unseen Hand",
          "bn": "অদেখা হাতের হেফাজত"
        },
        "p": [
          {
            "en": "Step back and the verse is a portrait of protection. The youths did one thing: they left their people and took refuge in the cave, trusting their Lord to spread His mercy over them, as 18:16 has them say. Everything after that was His. Their eyes were kept, their bodies turned, a dog lay at the door, and awe stood guard over all of it. They slept through every part of it and knew none of it. Much of the care that keeps a believer is like that: real, constant and unseen.",
            "bn": "একটু দূরে দাঁড়িয়ে দেখলে পুরো আয়াতটাই হেফাজতের ছবি। যুবকেরা করেছিল একটা কাজ: নিজের জাতিকে ছেড়ে গুহায় আশ্রয় নিয়েছিল, এই ভরসায় যে তাদের রব তাদের উপর রহমত ছড়িয়ে দেবেন, যেমন ১৮:১৬ আয়াতে তারা বলেছিল। এরপরের সবটুকু ছিল আল্লাহর। তাদের চোখ রক্ষা পেল, দেহ পাশ ফিরল, দরজায় কুকুর শুয়ে রইল, আর সবকিছুর উপর ভীতি পাহারা দিল। তারা এর পুরোটা ঘুমিয়ে কাটাল, কিছুই টের পেল না। মুমিনকে যে যত্ন আগলে রাখে, তার অনেকটাই এমন: সত্যি, সারাক্ষণের, আর চোখের আড়ালে।"
          },
          {
            "en": "And the dog is the verse's quiet lesson in company. It did nothing a dog does not do; it stayed near people who had given themselves to Allah, and the commentators saw it honoured for that. The question turns back on the reader. Whose door do I lie beside, and whose blessing might reach me there? Who is better, or worse, for lying beside mine? The verse does not ask me to guess at names or numbers. It asks me to trust the Guardian, and to choose my company well.",
            "bn": "আর কুকুরটি এ আয়াতে সঙ্গ নিয়ে এক নীরব শিক্ষা। কুকুর যা করে, তার বাইরে সে কিছুই করেনি। শুধু আল্লাহর কাছে নিজেদের সঁপে দেওয়া মানুষগুলোর কাছাকাছি থেকেছে, আর তাফসীরকারেরা দেখেছেন, এর জন্যই সে সম্মান পেয়েছে। প্রশ্নটা এবার পাঠকের দিকে ফেরে। আমি কার দরজার পাশে শুয়ে আছি, আর সেখানে কার বরকত আমার কাছে পৌঁছাতে পারে? আমার দরজার পাশে থেকে কে ভালো হচ্ছে, কে খারাপ? নাম বা সংখ্যা আন্দাজ করতে আয়াত আমাকে ডাকে না। ডাকে রক্ষাকারীর উপর ভরসা রাখতে, আর সঙ্গী বেছে নিতে সাবধানে।"
          }
        ]
      }
    ]
  },
  "18:23-24": {
    "sections": [
      {
        "h": {
          "en": "Never Say Tomorrow Plainly",
          "bn": "নিছক কাল করব নয়"
        },
        "p": [
          {
            "en": "And never say of anything, indeed I will do that tomorrow, except adding: if Allah wills. The prohibition is aimed at a habit so universal we barely hear ourselves doing it — announcing the future as if we owned it. The verse does not forbid planning; it forbids planning's arrogant grammar. Tomorrow may be spoken of, but only with its true owner acknowledged in the same breath.",
            "bn": "আর কোনো বিষয়ে কখনো বোলো না, আমি আগামীকাল নিশ্চয়ই তা করব — এ কথা না যোগ করে: যদি আল্লাহ চান। নিষেধটি এমন এক অভ্যাসের দিকে তাক করা, যা এতই সর্বজনীন যে নিজের মুখে তা শুনতেই পাই না — ভবিষ্যৎ ঘোষণা করা এমনভাবে যেন তার মালিক আমরাই। আয়াতটি পরিকল্পনা নিষেধ করে না; নিষেধ করে পরিকল্পনার অহংকারী ভাষাভঙ্গি। আগামীকালের কথা বলা যাবে, তবে কেবল একই নিঃশ্বাসে তার প্রকৃত মালিককে স্বীকার করে।"
          },
          {
            "en": "The exception phrase, insha'Allah, is not a verbal ornament or a polite hedge. Said with its meaning, it is a precise statement of reality: my intention is real, my ability is borrowed, and between the two stands a will that overrules mine, as 76:30 states — you do not will except that Allah wills. Every honest plan has that clause in it whether spoken or not; the verse asks that it be spoken.",
            "bn": "ব্যতিক্রম-বাক্যটি — ইনশাআল্লাহ — কোনো মৌখিক অলংকার বা ভদ্রতার রাখঢাক নয়। অর্থসহ বললে এটি বাস্তবতার এক নিখুঁত বিবৃতি: আমার সংকল্প সত্য, আমার সামর্থ্য ধার করা, আর দুয়ের মাঝখানে দাঁড়িয়ে এমন এক ইচ্ছা যা আমারটির ওপরে — যেমন 76:30 বলে: তোমরা ইচ্ছা করো না, আল্লাহ ইচ্ছা না করলে। প্রতিটি সৎ পরিকল্পনায় ধারাটি এমনিতেই আছে, বলা হোক বা না হোক; আয়াতটি চায় তা বলা হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Related",
          "bn": "বর্ণিত প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "The books of sira and tafsir relate the setting: Quraysh, prompted by questions gathered from the People of the Book — about the young men of the cave, about Dhul-Qarnayn — put them to the Prophet ﷺ, and he said, I will answer you tomorrow, without saying if Allah wills. The revelation then withheld itself for a period the narrations describe as painful, while Makkah gloated, before Surah al-Kahf came down with the answers — and with this instruction.",
            "bn": "সীরাত ও তাফসীরের কিতাবসমূহ প্রেক্ষাপটটি বর্ণনা করে: আহলে কিতাবের কাছ থেকে সংগ্রহ করা প্রশ্ন নিয়ে — গুহার যুবকদের সম্পর্কে, যুলকারনাইন সম্পর্কে — কুরাইশরা তা নবী ﷺ-এর সামনে রাখে, আর তিনি বলেন, আগামীকাল তোমাদের উত্তর দেব — ইনশাআল্লাহ না বলে। এরপর ওহী কিছুকাল থেমে থাকে — বর্ণনাগুলো সময়টিকে বেদনাদায়ক বলে বর্ণনা করে — মক্কা যখন বিদ্রূপে মেতে, তখন সূরা আল-কাহফ নাযিল হয় উত্তরগুলো নিয়ে — এবং এই নির্দেশ নিয়ে।"
          },
          {
            "en": "Read that way, the verses carry a tenderness alongside the rebuke. The Prophet ﷺ had not boasted; he had merely assumed a normal tomorrow. Even that assumption was corrected, in him and through him for us — and the correction arrived wrapped inside the very surah whose delay taught the lesson, so the Book's readers would never separate the rule from the experience that sealed it.",
            "bn": "এভাবে পড়লে আয়াতগুলো তিরস্কারের পাশাপাশি এক কোমলতাও বহন করে। নবী ﷺ অহংকার করেননি; কেবল একটি স্বাভাবিক আগামীকাল ধরে নিয়েছিলেন। সেই অনুমানটুকুও সংশোধিত হলো — তাঁর মধ্যে, এবং তাঁর মাধ্যমে আমাদের জন্য — আর সংশোধনটি এলো ঠিক সেই সূরার ভেতরে মোড়া হয়ে, যার বিলম্বই শিক্ষাটি দিয়েছিল; যাতে কিতাবের পাঠকেরা নিয়মটিকে কখনো আলাদা করতে না পারে সেই অভিজ্ঞতা থেকে, যা তাতে সিলমোহর দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "When You Forget",
          "bn": "ভুলে গেলে"
        },
        "p": [
          {
            "en": "And remember your Lord when you forget. The commentators take the clause in two connected ways: say if Allah wills when you remember, even after the moment has passed — an opinion related from the early authorities — and, more broadly, let remembrance be the standing repair for every lapse. Forgetting is not the crime; staying forgetful is. The door back is simply dhikr, resumed the instant you notice.",
            "bn": "আর ভুলে গেলে তোমার রবকে স্মরণ করো। মুফাসসিরগণ বাক্যটিকে দুটি সংযুক্ত অর্থে নেন: মনে পড়লেই ইনশাআল্লাহ বলো, মুহূর্তটি পেরিয়ে গেলেও — প্রাথমিক ইমামদের থেকে বর্ণিত একটি মত — আর ব্যাপকতর অর্থে: স্মরণকেই প্রতিটি ত্রুটির স্থায়ী মেরামত হতে দাও। ভুলে যাওয়া অপরাধ নয়; ভুলে থাকাটাই। ফেরার দরজা কেবল যিকির — খেয়াল হওয়ামাত্র আবার শুরু করা।"
          },
          {
            "en": "The verse then adds a du'a with a surprising reach: and say, perhaps my Lord will guide me to something nearer than this in rightness. Having surrendered tomorrow, the planner is taught to ask for a better plan than his own. The sentence assumes Allah's option is not merely to permit or block what we intend, but to substitute something closer to the good we were actually seeking.",
            "bn": "আয়াতটি এরপর যোগ করে বিস্ময়কর নাগালের একটি দোয়া: আর বলো, আশা করি আমার রব আমাকে এর চেয়েও সঠিকতার নিকটতর কিছুর দিকে পথ দেখাবেন। আগামীকাল সমর্পণ করার পর পরিকল্পনাকারীকে শেখানো হয় নিজের চেয়ে ভালো পরিকল্পনা চাইতে। বাক্যটি ধরেই নেয়: আল্লাহর হাতে বিকল্প কেবল আমাদের সংকল্পকে অনুমতি দেওয়া বা আটকানো নয় — বরং তার জায়গায় এমন কিছু বসানো, যা আমরা আসলে যে কল্যাণ খুঁজছিলাম তার আরও কাছের।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Gardens, Two Speeches",
          "bn": "দুই বাগান, দুই উক্তি"
        },
        "p": [
          {
            "en": "Surah al-Kahf itself stages the lesson a few pages on. The man of the two gardens walks in boasting, saying he does not think this will ever perish, and 18:39 records the correction his believing companion offers: when you entered your garden, why did you not say — ma sha Allah, la quwwata illa billah — what Allah willed; there is no power except in Allah? The gardens are gone by 18:42, and the speech is the surah's diagnosis of why.",
            "bn": "সূরা আল-কাহফ নিজেই কয়েক পৃষ্ঠা পরে শিক্ষাটি মঞ্চস্থ করে। দুই বাগানের মালিক গর্ব করে ঢুকে বলে, সে মনে করে না এসব কখনো ধ্বংস হবে; আর 18:39 লিপিবদ্ধ করে তার মুমিন সঙ্গীর সংশোধন: তুমি যখন তোমার বাগানে ঢুকলে, তখন কেন বললে না — মা শা আল্লাহ, লা কুওয়াতা ইল্লা বিল্লাহ — আল্লাহ যা চেয়েছেন তাই; আল্লাহ ছাড়া কোনো শক্তি নেই? 18:42 নাগাদ বাগানগুলো শেষ, আর ওই উক্তিটিই সূরার দেওয়া রোগনির্ণয় — কেন।"
          },
          {
            "en": "68:17-18 tells the same story in miniature: owners of a garden swore they would surely harvest it in the morning, and made no exception — the commentators read the phrase as their failure to say if Allah wills — and by dawn the garden lay as if already harvested, black and bare. Twice, then, the Quran shows confident tomorrow-speech followed by a ruined garden. The pattern is not superstition; it is pedagogy about ownership.",
            "bn": "68:17-18 একই কাহিনি ক্ষুদ্রাকারে বলে: এক বাগানের মালিকরা শপথ করেছিল সকালেই তারা অবশ্যই ফল পেড়ে নেবে, আর কোনো ব্যতিক্রম রাখেনি — মুফাসসিরগণ বাক্যাংশটি পড়েন তাদের ইনশাআল্লাহ না বলার ব্যর্থতা হিসেবে — এবং ভোর নাগাদ বাগানটি পড়ে রইল যেন কাটাই হয়ে যাওয়া, কালো ও শূন্য। তাহলে দুবার কুরআন দেখায়: আত্মবিশ্বাসী আগামীকালের বুলি, তারপর ধ্বংস হওয়া বাগান। ধরনটি কুসংস্কার নয়; মালিকানা সম্পর্কে শিক্ষাদান।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Phrase Does Inside",
          "bn": "বাক্যটি ভেতরে যা করে"
        },
        "p": [
          {
            "en": "Said sincerely, insha'Allah works on the two diseases of planning. It deflates the arrogance of the successful planner, who is reminded mid-sentence that his coming victory requires permission. And it steadies the anxious one, who hears in his own words that outcomes were never his load to carry — his part is effort and honesty, and the result belongs to Someone who wills only with knowledge and wisdom.",
            "bn": "আন্তরিকভাবে বললে ইনশাআল্লাহ পরিকল্পনার দুই ব্যাধির ওপর কাজ করে। এটি সফল পরিকল্পনাকারীর অহংকারের হাওয়া ছেড়ে দেয় — বাক্যের মাঝপথেই তাকে মনে করিয়ে দেওয়া হয়, তার আসন্ন বিজয়ের জন্য অনুমতি লাগে। আর এটি উদ্বিগ্নজনকে স্থির করে — সে নিজের কথাতেই শোনে, ফলাফল কখনোই তার বহনের বোঝা ছিল না; তার অংশ প্রচেষ্টা ও সততা, আর ফল তাঁর, যিনি কেবল জ্ঞান ও হিকমত সহকারেই ইচ্ছা করেন।"
          },
          {
            "en": "It also keeps speech truthful. A promise made with if Allah wills, sincerely meant, is a promise made within one's actual powers; a promise made without it claims a control no human has ever had. This is why the phrase, worn thin by casual use and sometimes even used to soften an intended refusal, deserves rescue: it is not filler, it is the most accurate thing a planner can say.",
            "bn": "এটি কথাকেও সত্যনিষ্ঠ রাখে। আন্তরিকভাবে ইনশাআল্লাহ বলে করা প্রতিশ্রুতি মানুষের প্রকৃত সামর্থ্যের ভেতরের প্রতিশ্রুতি; আর তা ছাড়া করা প্রতিশ্রুতি এমন নিয়ন্ত্রণের দাবি, যা কোনো মানুষের কখনো ছিল না। এ জন্যই বাক্যটি — হালকা ব্যবহারে ক্ষয়ে যাওয়া, কখনো এমনকি ভেতরে ভেতরে ঠিক করা প্রত্যাখ্যানকে নরম করতেও ব্যবহৃত — উদ্ধারের দাবিদার: এটি ফাঁকা বুলি নয়, একজন পরিকল্পনাকারীর মুখে সবচেয়ে নির্ভুল কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Planning Like a Believer",
          "bn": "মুমিনের মতো পরিকল্পনা"
        },
        "p": [
          {
            "en": "The verse's discipline, practiced, looks like this: plan thoroughly, speak of the plan with the exception attached and meant, work as hard as the plan deserves, and hold the outcome loosely. When the outcome arrives changed, reach for the du'a of 18:24 — perhaps my Lord will guide me to something nearer than this in rightness — and look for the substitution instead of mourning the script.",
            "bn": "চর্চায় আয়াতের অনুশাসনটি দেখতে এমন: পুঙ্খানুপুঙ্খ পরিকল্পনা করুন, পরিকল্পনার কথা বলুন ব্যতিক্রম-বাক্যটি যুক্ত করে ও অর্থসহ, পরিকল্পনা যতটা দাবি করে ততটা পরিশ্রম করুন, আর ফলাফলকে ধরুন আলগা হাতে। ফল যখন বদলে এসে পৌঁছায়, 18:24 আয়াতের দোয়ায় হাত বাড়ান — আশা করি আমার রব আমাকে এর চেয়েও সঠিকতার নিকটতর কিছুর দিকে পথ দেখাবেন — এবং চিত্রনাট্যের শোক না করে প্রতিস্থাপনটি খুঁজুন।"
          },
          {
            "en": "Kept over years, the habit rewires expectation itself. Interruptions stop reading as malfunctions of the universe; they become the moments where Allah's plan replaces yours — the exact contingency your daily insha'Allah has been rehearsing for. The believer's calendar stays full and his grip stays light, and the difference between him and the boasting gardener is a few words, said and meant.",
            "bn": "বছরের পর বছর ধরে রাখলে অভ্যাসটি প্রত্যাশার তারই নতুন করে গাঁথে। বিঘ্নগুলো আর মহাবিশ্বের যন্ত্রবিভ্রাট বলে পড়া হয় না; সেগুলো হয়ে ওঠে সেই মুহূর্ত, যখন আপনার পরিকল্পনার জায়গা নেয় আল্লাহর পরিকল্পনা — ঠিক সেই সম্ভাবনা, যার মহড়া আপনার প্রতিদিনের ইনশাআল্লাহ দিয়ে আসছিল। মুমিনের সূচি ভরাই থাকে, মুঠো থাকে হালকা — আর তার সঙ্গে গর্বিত বাগানমালিকের পার্থক্য কয়েকটি শব্দ, বলা ও অন্তরে ধারণ করা।"
          }
        ]
      }
    ]
  },
  "18:29": {
    "sections": [
      {
        "h": {
          "en": "Spoken to the Heedless",
          "bn": "উদাসীনদের উদ্দেশে বলা"
        },
        "p": [
          {
            "en": "Wa-quli l-haqqu min rabbikum: and say, the truth is from your Lord. The verse opens with and, because it picks up a conversation already under way. In 18:27 the Prophet ﷺ is told to recite what has been revealed to him, since nobody can change His words. In 18:28 he is told to keep himself patient with those who call on their Lord morning and evening, and not to obey the man whose heart has been made heedless of remembrance. This verse is what he is then told to say.",
            "bn": "ওয়া কুলিল হাক্কু মির রাব্বিকুম: আর বলে দাও, সত্য তোমাদের রবের কাছ থেকে। আয়াতের শুরু 'আর' দিয়ে, কারণ আলাপটা আগেই শুরু হয়ে গেছে। ১৮:২৭ আয়াতে নবী ﷺ-কে বলা হয়েছে, তাঁর কাছে যা ওহি করা হয়েছে তা পড়ে শোনাতে, কেননা আল্লাহর কথা কেউ বদলাতে পারে না। ১৮:২৮ আয়াতে বলা হয়েছে, যারা সকাল-সন্ধ্যা তাদের রবকে ডাকে, ধৈর্য ধরে তাদের সঙ্গে থাকতে, আর যার অন্তর জিকির থেকে গাফিল করে দেওয়া হয়েছে তার কথা না মানতে। তারপর তাঁকে যা বলতে বলা হচ্ছে, সেটাই এই আয়াত।"
          },
          {
            "en": "At-Tabari reads the verse as addressed to exactly those people. His paraphrase runs: say, O Muhammad, to those whose hearts We have made heedless of Our remembrance and who followed their desires, the truth is from your Lord; enabling and forsaking are His, guidance and misguidance are in His hand, nothing of that is mine, and I will not drive away, to suit your desires, anyone who follows the truth. Al-Baghawi and al-Qurtubi give the same reading, down to the words: I will not drive away the believers for your whims.",
            "bn": "তাবারীর পাঠে আয়াতটি ঠিক ওই লোকদের উদ্দেশেই বলা। তাঁর ব্যাখ্যা এরকম: হে মুহাম্মাদ, যাদের অন্তর আমি আমার জিকির থেকে গাফিল করে দিয়েছি আর যারা নিজেদের খেয়ালখুশির পেছনে চলেছে, তাদের বলো, সত্য তোমাদের রবের কাছ থেকে। তাওফিক দেওয়া আর সাহায্য তুলে নেওয়া তাঁরই কাজ, হিদায়াত আর গোমরাহি তাঁর হাতে, এর কিছুই আমার হাতে নেই। তোমাদের মন রাখতে যে সত্যের অনুসারী, তাকে আমি তাড়িয়ে দেব না। বাগাভী আর কুরতুবীও একই কথা বলেন, প্রায় হুবহু: তোমাদের খেয়ালের জন্য আমি মুমিনদের তাড়িয়ে দেব না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Made Clear First",
          "bn": "আগে পথ পরিষ্কার করা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the opening clause as a statement that the matter has already been settled in the open. Guidance has been distinguished from error, right conduct from waywardness, and the marks of the people of happiness from those of the people of misery, all through what Allah made clear on the tongue of His Messenger. Once that is plain and no ambiguity remains, he says, nothing is left except to walk one of the two roads, according to whether the servant is granted success or not.",
            "bn": "সা'দীর মতে আয়াতের প্রথম বাক্যটি জানিয়ে দেয় যে বিষয়টি আগেই খোলাখুলি মীমাংসা হয়ে গেছে। হিদায়াতকে গোমরাহি থেকে আলাদা করা হয়েছে, সঠিক পথকে ভুল পথ থেকে। সৌভাগ্যবানদের লক্ষণ আর হতভাগাদের লক্ষণও বলে দেওয়া হয়েছে। এসবই আল্লাহ স্পষ্ট করেছেন তাঁর রাসূলের মুখে। তিনি বলেন, যখন সব পরিষ্কার হয়ে যায় আর কোনো সংশয় বাকি থাকে না, তখন দুই পথের যেকোনো একটি ধরা ছাড়া আর কিছু থাকে না। কে কোনটা ধরবে, তা নির্ভর করে বান্দা তাওফিক পায় কি পায় না তার উপর।"
          },
          {
            "en": "He then states both sides of human agency together. Allah has given the servant a will by which he is able to believe or disbelieve, to do good or evil. Whoever believes has been guided to what is right; whoever disbelieves has had the proof established against him, and he is not compelled to faith. Here as-Sa'di cites 2:256: there is no compulsion in religion; right conduct has been made distinct from error. The order of the verse fits his reading. The truth is declared first, and the choice is named after it.",
            "bn": "এরপর তিনি মানুষের ইচ্ছার দুটি দিক একসঙ্গে বলেন। আল্লাহ বান্দাকে এমন ইচ্ছাশক্তি দিয়েছেন, যা দিয়ে সে ঈমান আনতেও পারে, কুফরিও করতে পারে, ভালোও করতে পারে, মন্দও। যে ঈমান আনে, সে সঠিক পথের তাওফিক পেয়েছে। যে কুফরি করে, তার বিরুদ্ধে প্রমাণ দাঁড়িয়ে গেছে, আর তাকে জোর করে ঈমানে আনা হচ্ছে না। এখানে সা'দী ২:২৫৬ আয়াত উদ্ধৃত করেন: দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই, সঠিক পথ ভুল পথ থেকে আলাদা হয়ে গেছে। আয়াতের সাজানোও তাঁর পাঠের সঙ্গে মেলে। আগে সত্যের ঘোষণা, তারপর বেছে নেওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Command That Carries Warning",
          "bn": "আদেশের ভেতরে হুঁশিয়ারি"
        },
        "p": [
          {
            "en": "Fa-man sha'a fa-l-yu'min wa-man sha'a fa-l-yakfur: so whoever wills, let him believe, and whoever wills, let him disbelieve. Ibn Kathir names what kind of speech this is: it belongs to threat and severe warning, which is why Allah follows it at once with We have prepared. At-Tabari says the same in stronger terms. This is not Allah releasing disbelief to whoever wills it and faith to whoever wants it; it is only threat and warning, and the proof is what comes next, We have prepared for the wrongdoers a fire.",
            "bn": "ফামান শা-আ ফালইউ'মিন, ওয়া মান শা-আ ফালইয়াকফুর: কাজেই যার ইচ্ছা ঈমান আনুক, আর যার ইচ্ছা কুফরি করুক। এটা কোন ধরনের কথা, ইবন কাসীর তা নাম ধরে বলেন: এটা হুমকি আর কঠোর সতর্কবাণীর অন্তর্ভুক্ত। সেজন্যই আল্লাহ সঙ্গে সঙ্গে বলেন, আমি প্রস্তুত করে রেখেছি। তাবারী একই কথা বলেন আরও জোর দিয়ে। এর অর্থ এই নয় যে আল্লাহ যে চায় তার জন্য কুফরি আর যে চায় তার জন্য ঈমান খোলা ছেড়ে দিয়েছেন। এটা শুধুই হুমকি ও সতর্কবাণী, আর তার প্রমাণ পরের কথাটাই: আমি যালিমদের জন্য আগুন প্রস্তুত করে রেখেছি।"
          },
          {
            "en": "At-Tabari brings two early voices in support. Mujahid calls the clause a warning from Allah, adding in Allah's voice that such a person does not escape Him. Ibn Zayd sets it beside do what you will in 41:40 and says of both: all of this is warning; it is not humouring, not coaxing, and not handing the matter over. Al-Baghawi draws the same comparison with 41:40. Al-Qurtubi is just as direct: this is no concession and no free option between faith and disbelief, only a threat.",
            "bn": "তাবারী এর পক্ষে প্রথম যুগের দুজনের কথা আনেন। মুজাহিদ বাক্যটিকে বলেন আল্লাহর পক্ষ থেকে সতর্কবাণী, আর আল্লাহর জবানে যোগ করেন, এমন লোক তাঁর হাত থেকে পালাতে পারবে না। ইবন যায়দ এ বাক্যকে ৪১:৪০ আয়াতের 'যা ইচ্ছা করো' কথাটির পাশে রেখে দুটো সম্পর্কেই বলেন: এসবই সতর্কবাণী। এতে মন রাখা নেই, তোষামোদ নেই, বিষয়টা মানুষের হাতে ছেড়ে দেওয়াও নেই। বাগাভীও ৪১:৪০ আয়াতের সঙ্গে একই তুলনা টানেন। কুরতুবীর কথাও সরাসরি: এটা কোনো ছাড় নয়, ঈমান আর কুফরির মধ্যে যেকোনোটা বেছে নেওয়ার খোলা অনুমতিও নয়, এটা কেবল হুমকি।"
          },
          {
            "en": "Al-Qurtubi then spells the threat out as a pair: if you disbelieve, the Fire has been prepared for you, and if you believe, Paradise is yours. As-Sa'di, who had just said that nobody is compelled to faith, adds that the clause contains no permission for both courses; it is a threat and warning to whoever chooses disbelief after the full explanation. So the commentators hold two things at once. There is no coercion, and there is no endorsement.",
            "bn": "এরপর কুরতুবী হুমকিটা জোড়া কথায় খুলে বলেন: কুফরি করলে তোমাদের জন্য আগুন প্রস্তুত, আর ঈমান আনলে তোমাদের জন্য জান্নাত। সা'দী একটু আগেই বলেছেন, কাউকে জোর করে ঈমানে আনা হয় না। তিনিও যোগ করেন, এ বাক্যে দুই পথের কোনোটারই অনুমতি দেওয়া হয়নি। পূর্ণ ব্যাখ্যার পরেও যে কুফরি বেছে নেয়, এটা তার জন্য হুমকি ও সতর্কবাণী। তাফসীরকারেরা তাই দুটো কথা একসঙ্গে ধরে রাখেন। জবরদস্তি নেই, আবার সমর্থনও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Will Held Within His",
          "bn": "তাঁর ইচ্ছার ভেতরে বান্দার ইচ্ছা"
        },
        "p": [
          {
            "en": "At-Tabari and al-Baghawi both record a different line from Ibn Abbas: whoever Allah willed faith for believed, and whoever Allah willed disbelief for disbelieved; and that, he says, is the meaning of you do not will unless Allah wills, which al-Baghawi locates at 76:30. At-Tabari and al-Qurtubi paraphrase the same way: Allah guides whom He wills and he believes, and leaves astray whom He wills. Al-Qurtubi adds that Allah grants the truth to whom He wills even if he is weak, and withholds it from whom He wills even if he is strong and rich.",
            "bn": "তাবারী ও বাগাভী দুজনেই ইবন আব্বাস (রাঃ) থেকে ভিন্ন দিকের একটি ব্যাখ্যা বর্ণনা করেন: আল্লাহ যার জন্য ঈমান চেয়েছেন সে ঈমান এনেছে, আর যার জন্য কুফরি চেয়েছেন সে কুফরি করেছে। তাঁর মতে এটাই 'আল্লাহ না চাইলে তোমরা কিছুই চাইতে পারো না' কথাটির অর্থ, বাগাভী যার উৎস দেখান ৭৬:৩০ আয়াত। তাবারী ও কুরতুবীর নিজেদের ব্যাখ্যাও এদিকেই যায়: আল্লাহ যাকে চান হিদায়াত দেন, ফলে সে ঈমান আনে, আর যাকে চান পথভ্রষ্ট হতে দেন। কুরতুবী যোগ করেন, আল্লাহ যাকে চান সত্য দান করেন, সে দুর্বল হলেও। আর যাকে চান তা থেকে বঞ্চিত করেন, সে শক্তিশালী ও ধনী হলেও।"
          },
          {
            "en": "These do not read as rival positions. As-Sa'di holds both at once: the servant walks his road according to whether he is granted success, and he has been given a will by which he is able to believe or not. At-Tabari follows the Ibn Abbas report at once with his statement that the clause is a threat, so the report does not empty the choice of meaning. The choice is real enough to be warned about, and guidance remains something to ask for.",
            "bn": "এ ব্যাখ্যাগুলো পরস্পরবিরোধী নয়। সা'দী দুটো কথা একসঙ্গে ধরে রাখেন: বান্দা তার পথে চলে সে তাওফিক পায় কি না তার উপর, আবার তাকে এমন ইচ্ছাশক্তিও দেওয়া হয়েছে যা দিয়ে সে ঈমান আনতে পারে, না-ও আনতে পারে। তাবারী ইবন আব্বাস (রাঃ)-এর বর্ণনার ঠিক পরেই বলেন, বাক্যটি হুমকি। কাজেই ওই বর্ণনা বেছে নেওয়াকে অর্থহীন করে না। বেছে নেওয়ার ব্যাপারটা এতটাই সত্যি যে তার জন্য সতর্ক করা হয়, আর হিদায়াত এমন জিনিস যা তবুও চেয়ে নিতে হয়।"
          },
          {
            "en": "Al-Qurtubi's line about the weak and the strong faces back to 18:28. Ma'arif al-Qur'an, whose commentary groups 18:28 to 18:30, spends it on the background of that verse: men of standing asked for the poor believers to be moved out of the gathering. It does not treat the clauses of this verse separately. The question of compulsion is taken up in the shipped reading of 10:99, would you then compel people until they become believers, and is not repeated here.",
            "bn": "দুর্বল আর শক্তিশালী নিয়ে কুরতুবীর কথাটি ফিরে তাকায় ১৮:২৮ আয়াতের দিকে। মাআরিফুল কুরআন ১৮:২৮ থেকে ১৮:৩০ পর্যন্ত আয়াতগুলো একসঙ্গে আলোচনা করেছে, আর সেখানে পুরো আলোচনা ওই আয়াতের পটভূমি নিয়ে: প্রভাবশালী লোকেরা চেয়েছিল গরিব মুমিনদের মজলিস থেকে সরিয়ে দেওয়া হোক। এই আয়াতের বাক্যগুলো সেখানে আলাদা করে আলোচিত হয়নি। জবরদস্তির প্রশ্নটি নিয়ে আলোচনা আছে ১০:৯৯ আয়াতের প্রকাশিত পাঠে: তুমি কি মানুষকে জোর করবে যাতে তারা মুমিন হয়ে যায়? এখানে তা আর দোহরানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Walls With No Way Out",
          "bn": "যে দেয়ালে বেরোনোর পথ নেই"
        },
        "p": [
          {
            "en": "Inna a'tadna li-z-zalimina naran: We have prepared for the wrongdoers a fire. At-Tabari glosses a'tadna as a'dadna, We have made ready, and Ibn Kathir as arsadna, We have held in readiness. Who are the wrongdoers here? At-Tabari says those who disbelieved in their Lord, and cites Ibn Zayd: the disbelievers. Ibn Kathir: those who disbelieve in Allah, His Messenger and His Book. Al-Baghawi and al-Qurtubi also gloss it as the disbelievers. As-Sa'di reads it wider, as wrongdoing through disbelief, sinfulness and disobedience. The others tie the word here to disbelief.",
            "bn": "ইন্না আ'তাদনা লিযযালিমীনা নারান: আমি যালিমদের জন্য আগুন প্রস্তুত করে রেখেছি। তাবারী আ'তাদনা-র অর্থ করেন আ'দাদনা, অর্থাৎ তৈরি করে রেখেছি। ইবন কাসীর বলেন আরসাদনা, অর্থাৎ অপেক্ষায় রেখে দিয়েছি। এখানে যালিম কারা? তাবারী বলেন, যারা তাদের রবকে অস্বীকার করেছে, আর ইবন যায়দের কথা আনেন: কাফিররা। ইবন কাসীরের মতে, যারা আল্লাহ, তাঁর রাসূল ও তাঁর কিতাবকে অস্বীকার করে। বাগাভী ও কুরতুবীও অর্থ করেন কাফিররা। সা'দী অর্থটা বড় করে পড়েন: কুফরি, পাপাচার আর নাফরমানি দিয়ে যারা যুলম করে। বাকিরা এখানে শব্দটিকে কুফরির সঙ্গেই বেঁধে রাখেন।"
          },
          {
            "en": "Ahata bihim suradiquha: its suradiq encloses them. At-Tabari explains the word from ordinary life. A suradiq is the screen that goes round a pavilion, and the Fire's, as it has been said, is a wall of fire circling them like a tent's enclosure. From Ibn Abbas, in at-Tabari and Ibn Kathir: a wall of fire. Ibn Kathir, the Muyassar and as-Sa'di all gloss it as the Fire's wall, and as-Sa'di draws the consequence: there is no opening, no path and no escape from it. Al-Qurtubi gives the same gloss from Ibn al-A'rabi.",
            "bn": "আহাতা বিহিম সুরাদিকুহা: তার সুরাদিক তাদের ঘিরে রাখবে। তাবারী শব্দটা বোঝান দৈনন্দিন জীবন থেকে। সুরাদিক হলো তাঁবুর চারপাশ ঘিরে থাকা পর্দা। আর আগুনের সুরাদিক সম্পর্কে বলা হয়েছে, তা আগুনের এক দেয়াল, যা তাঁবুর বেষ্টনীর মতো তাদের ঘিরে থাকে। তাবারী ও ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন: আগুনের দেয়াল। ইবন কাসীর, মুয়াসসার ও সা'দী সবাই এর অর্থ করেন আগুনের প্রাচীর। সা'দী এর ফলটাও বলে দেন: সেখান থেকে বেরোনোর কোনো ফাঁক নেই, রাস্তা নেই, রেহাই নেই। কুরতুবীও ইবনুল আ'রাবী থেকে একই অর্থ আনেন।"
          },
          {
            "en": "Al-Kalbi, in al-Baghawi and al-Qurtubi, describes a neck that comes out of the Fire and closes round the disbelievers like a pen. Another, reported in at-Tabari from Ma'mar and in al-Qurtubi from Qatada, makes it smoke that surrounds the disbelievers on the Day of Resurrection, the shade of three columns in 77:30. Al-Qurtubi concludes that the suradiq is what rises over the disbelievers, whether smoke or fire. The readings differ in the picture, and agree on the point: what surrounds them leaves no way out.",
            "bn": "বাগাভী ও কুরতুবী কালবী থেকে আনেন, আগুন থেকে একটা গলার মতো অংশ বেরিয়ে এসে খোঁয়াড়ের মতো কাফিরদের ঘিরে ফেলবে। আরেকটি ব্যাখ্যা তাবারী আনেন মা'মার থেকে, আর কুরতুবী কাতাদা থেকে: কিয়ামতের দিন কাফিরদের ঘিরে থাকা ধোঁয়া, ৭৭:৩০ আয়াতে বলা তিনটি শাখাওয়ালা ছায়া। কুরতুবীর সিদ্ধান্ত, সুরাদিক হলো কাফিরদের উপর ছেয়ে থাকা ধোঁয়া বা আগুন। ছবিটা ব্যাখ্যাভেদে আলাদা, কিন্তু মূল কথায় সবাই এক: যা তাদের ঘিরে রাখবে, তা থেকে বেরোনোর পথ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cry for Water Answered",
          "bn": "পানির ফরিয়াদের জবাব"
        },
        "p": [
          {
            "en": "Wa-in yastaghithu yughathu bi-ma'in ka-l-muhl: and if they cry for relief, they are relieved with water like al-muhl. At-Tabari says they ask for water out of the severity of their thirst. On al-muhl he records a disagreement: whatever is melted until it runs, from Qatada's report that Ibn Mas'ud melted gold and silver and said nothing in this world is nearer to it; pus and black blood, from Mujahid; thick water like the dregs of oil, from Ibn Abbas; and what has reached the limit of its heat, from Sa'id ibn Jubayr.",
            "bn": "ওয়া ইন ইয়াসতাগীসূ ইউগাসূ বিমা-ইন কালমুহল: আর তারা ফরিয়াদ করলে তাদের ফরিয়াদের জবাব দেওয়া হবে মুহলের মতো পানি দিয়ে। তাবারী বলেন, প্রচণ্ড পিপাসায় তারা পানি চাইবে। মুহল কী, তা নিয়ে তিনি মতভেদ উল্লেখ করেন। কাতাদার বর্ণনায় আছে, ইবন মাসউদ (রাঃ) সোনা-রুপা গলিয়ে বলেছিলেন, দুনিয়ায় মুহলের সবচেয়ে কাছাকাছি জিনিস এটাই। সে হিসেবে মুহল হলো যা গলে তরল হয়ে যায়। মুজাহিদের মতে পুঁজ আর কালো রক্ত। ইবন আব্বাস (রাঃ)-এর মতে তেলের তলানির মতো ঘন পানি। আর সাঈদ ইবন জুবাইরের মতে যার উত্তাপ চরমে পৌঁছেছে।"
          },
          {
            "en": "At-Tabari judges that these differ in wording but are close in meaning, since whatever has been melted has reached its utmost heat. Ibn Kathir says none of them rules out another, and al-Qurtubi calls them close. Yashwi l-wujuh, it scorches the faces: from its heat, says al-Baghawi. Then the bitter turn. The Muyassar says this drink does not quench their thirst but increases it, and as-Sa'di says that what was sought to put out the thirst and lift some of the punishment becomes an addition to it.",
            "bn": "তাবারীর বিচারে কথাগুলোর শব্দ আলাদা, অর্থ কাছাকাছি, কারণ যা গলানো হয়েছে তার উত্তাপ চূড়ান্তে পৌঁছেছে। ইবন কাসীর বলেন, কোনোটাই অন্যটাকে বাতিল করে না, আর কুরতুবী এগুলোকে কাছাকাছি অর্থের বলেন। ইয়াশউইল উজূহ, তা মুখমণ্ডল ঝলসে দেবে: বাগাভীর ব্যাখ্যায়, তার উত্তাপের কারণে। তারপর তিক্ত মোড়টা। মুয়াসসার বলে, এ পানীয় তাদের পিপাসা মেটায় না, বরং বাড়িয়ে দেয়। সা'দী বলেন, যা চাওয়া হয়েছিল পিপাসা নেভাতে আর শাস্তি কিছুটা হালকা করতে, সেটাই শাস্তিকে আরও বাড়িয়ে তোলে।"
          },
          {
            "en": "Ibn Kathir, at-Tabari, al-Baghawi and al-Qurtubi attach a narration from Abu Sa'id al-Khudri on al-muhl. At-Tirmidhi records it at 2581 and says he knows it only through Rishdin ibn Sa'd, whose memory was criticised; the narration giving the suradiq four walls sits in the same chain, under the same remark, at 2584. None of the fetched commentaries attaches to this verse a hadith that its collector graded sound, and this reading rests on none.",
            "bn": "ইবন কাসীর, তাবারী, বাগাভী ও কুরতুবী মুহল প্রসঙ্গে আবু সাঈদ খুদরী (রাঃ) থেকে একটি বর্ণনা আনেন। তিরমিযী ২৫৮১ নম্বরে তা বর্ণনা করে বলেন, রিশদীন ইবন সা'দ ছাড়া অন্য কোনো সূত্রে তিনি এটি জানেন না, আর স্মৃতিশক্তির কারণে রিশদীনের সমালোচনা করা হয়েছে। সুরাদিকের চারটি দেয়াল থাকার বর্ণনাও একই সনদে, একই মন্তব্যসহ, ২৫৮৪ নম্বরে আছে। সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে এমন কোনো হাদীস যুক্ত করেনি যাকে সংকলক সহীহ বলেছেন। এ লেখাও তেমন কোনো বর্ণনার উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "An Evil Place to Lean",
          "bn": "হেলান দেওয়ার নিকৃষ্ট জায়গা"
        },
        "p": [
          {
            "en": "Bi'sa sh-sharabu wa-sa'at murtafaqa: wretched is the drink, and evil is the resting place. At-Tabari explains murtafaq from Arabic usage as a muttaka', a place to lean, from resting on the elbow, the mirfaq. Mujahid took it as a place of gathering, and at-Tabari answers him directly: I do not know irtifaq in the sense of gathering in the speech of the Arabs. Al-Baghawi and al-Qurtubi list further glosses: a dwelling from Ibn Abbas, an abode from Ata, a sitting place from al-Qutabi. As-Sa'di: there is no ease in it at all.",
            "bn": "বি'সাশ শারাবু ওয়া সা-আত মুরতাফাকা: কত নিকৃষ্ট পানীয়, আর কত মন্দ বিশ্রামের জায়গা! তাবারী আরবদের ভাষা থেকে মুরতাফাক বোঝান: মুত্তাকা, অর্থাৎ হেলান দেওয়ার জায়গা, কনুইয়ের উপর ভর দেওয়া থেকে, আরবিতে যাকে বলে মিরফাক। মুজাহিদ এর অর্থ করেছিলেন একত্র হওয়ার জায়গা। তাবারী সরাসরি তার জবাব দেন: আরবদের কথায় ইরতিফাক শব্দ একত্র হওয়া অর্থে ব্যবহৃত হয় বলে আমার জানা নেই। বাগাভী ও কুরতুবী আরও কয়েকটি অর্থ উল্লেখ করেন: ইবন আব্বাস (রাঃ)-এর মতে বাসস্থান, আতার মতে থাকার জায়গা, কুতাবীর মতে বসার জায়গা। সা'দীর কথায়, সেখানে কোনো আরামই নেই।"
          },
          {
            "en": "The word returns two verses later. 18:31 closes its description of the believers' gardens with ni'ma th-thawabu wa-hasunat murtafaqa: excellent is the reward, and good is the resting place. The same noun ends both descriptions, and the verdict is reversed. Between them, 18:30 promises that Allah does not let the reward of anyone who did good work be lost. Al-Qurtubi's pair, the Fire if you disbelieve and Paradise if you believe, is laid out by the verses themselves, side by side.",
            "bn": "শব্দটি ফিরে আসে দুই আয়াত পরে। ১৮:৩১ আয়াত মুমিনদের জান্নাতের বর্ণনা শেষ করে এভাবে: নি'মাস সাওয়াবু ওয়া হাসুনাত মুরতাফাকা, কত উত্তম প্রতিদান, আর কত সুন্দর বিশ্রামের জায়গা! দুই বর্ণনার শেষে একই শব্দ, রায় শুধু উল্টো। মাঝখানে ১৮:৩০ আয়াত কথা দেয়, যে ভালোভাবে আমল করে, আল্লাহ তার প্রতিদান নষ্ট করেন না। কুফরি করলে আগুন, ঈমান আনলে জান্নাত: কুরতুবী যে জোড়া কথা বলেছিলেন, আয়াতগুলো নিজেরাই তা পাশাপাশি সাজিয়ে দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Left With You",
          "bn": "জবাবের ভার আপনার হাতে"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a fire prepared for the wrongdoers, whom the commentators here gloss as the disbelievers, and a drink that brings no relief. It is a warning from Allah about the Hereafter. It licenses nothing against any living person or community. Nobody is appointed by it to name who belongs to the Fire, and it gives no warrant for harming anybody. Its own grammar leaves the answer with each hearer, and that is where the reader should leave it too.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঠিক ততটুকুই বর্ণনা করে, যতটুকু পাঠে আছে: যালিমদের জন্য প্রস্তুত আগুন, এখানে তাফসীরকারেরা যাদের অর্থ করেছেন কাফির, আর এমন পানীয় যাতে কোনো স্বস্তি নেই। এটা আখিরাত সম্পর্কে আল্লাহর সতর্কবাণী। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কে জাহান্নামি, তা ঠিক করে দেওয়ার দায়িত্ব এ আয়াত কাউকে দেয়নি, কাউকে কষ্ট দেওয়ার কোনো ছাড়ও দেয়নি। আয়াতের নিজের ভাষাই জবাবের ভার প্রত্যেক শ্রোতার হাতে রেখে দেয়। পাঠকেরও উচিত সেখানেই রেখে দেওয়া।"
          },
          {
            "en": "What remains is the turn on the reader. The truth was offered without coercion: said, set out plainly, and left. That is a kind of respect, and it is also a weight, because nobody else will carry the answer. The Prophet ﷺ was told not to trade his poor companions for the approval of the powerful, and to say the truth and leave the answer with the hearers. The reader is told something harder: that the absence of pressure is not the absence of consequence, and that the choice is being made every day.",
            "bn": "বাকি থাকে পাঠকের দিকে ফিরে তাকানো। সত্যটা সামনে রাখা হয়েছে জবরদস্তি ছাড়া: বলা হয়েছে, খুলে বোঝানো হয়েছে, তারপর ছেড়ে দেওয়া হয়েছে। এতে সম্মান আছে, আবার ভারও আছে, কেননা জবাবের বোঝা অন্য কেউ বইবে না। নবী ﷺ-কে বলা হয়েছিল, ক্ষমতাবানদের খুশি করতে গরিব সাথিদের ছেড়ে দেবেন না, বরং সত্যটা বলে দিয়ে জবাবের ভার শ্রোতাদের উপর ছেড়ে দেবেন। পাঠককে বলা হচ্ছে আরও কঠিন কথা: চাপ নেই মানে পরিণাম নেই, এমন নয়। আর বেছে নেওয়ার কাজটা চলছে প্রতিদিন।"
          }
        ]
      }
    ]
  },
  "18:31": {
    "sections": [
      {
        "h": {
          "en": "Named After the Punishment",
          "bn": "শাস্তির পিঠেই এই নাম"
        },
        "p": [
          {
            "en": "Ulaika lahum jannatu adn: those will have gardens of perpetual residence. At-Tabari reads jannat adn as gardens of lasting stay in the next life, and al-Qurtubi adds that adn means to settle and stay put, from a root used of a camel that will not leave good pasture; the same root names a mine, where people stay through summer and winter. Al-Qurtubi even calls this garden the heart of Paradise, with the rest of the gardens ringed around it. The word 'those' points straight back to the believers of the verse before, whose reward Allah promised not to waste.",
            "bn": "উলাইকা লাহুম জান্নাতু আদন: তাদের জন্য আছে স্থায়ী জান্নাত। তাবারী জান্নাতু আদনকে বোঝেন আখিরাতে চিরস্থায়ী বসবাসের বাগান হিসেবে। কুরতুবী যোগ করেন, আদন মানে থিতু হওয়া, না নড়া। শব্দটির মূল ব্যবহার হয় সেই উটের বেলায় যে ভালো চারণভূমি ছেড়ে যায় না। এই মূল থেকেই আসে খনির নাম, যেখানে মানুষ গ্রীষ্ম-শীত জুড়ে থেকে যায়। কুরতুবী তো একে বলেন জান্নাতের কেন্দ্র, আর বাকি বাগানগুলো তাকে ঘিরে আছে। 'তাদের' শব্দটা সোজা আগের আয়াতের মুমিনদের দিকেই ইশারা করে, যাদের প্রতিদান আল্লাহ নষ্ট না করার কথা দিয়েছেন।"
          },
          {
            "en": "Tajri min tahtihimu al-anhar: rivers flow beneath them. Ibn Kathir and the Muyassar both gloss the phrase as flowing beneath their chambers and dwellings, not merely somewhere below. Ibn Kathir sets it against Pharaoh's boast in 43:51, that the rivers of Egypt ran beneath him; the believer is given for keeps what the tyrant claimed for a season. As-Sa'di pictures trees so many they shade whoever is under them, and rivers so many they run beneath those trees and lofty houses. The scene is not a distant view but a place you live inside.",
            "bn": "তাজরি মিন তাহতিহিমুল আনহার: তাদের নিচ দিয়ে বয়ে চলে ঝর্ণা। ইবন কাসীর আর মুয়াসসার দুজনেই একে বোঝেন তাদের কক্ষ ও বাসস্থানের নিচ দিয়ে বয়ে চলা হিসেবে, শুধু নিচের কোথাও নয়। ইবন কাসীর একে দাঁড় করান ৪৩:৫১ আয়াতে ফিরআউনের গর্বের বিপরীতে, যেখানে সে বলেছিল মিসরের নদী তার নিচ দিয়ে বয়ে যায়। অত্যাচারী যা কিছুদিনের জন্য দাবি করেছিল, মুমিনকে তা দেওয়া হয় চিরকালের জন্য। সাদি আঁকেন এমন ঘন গাছপালা যা নিচে থাকা সবাইকে ছায়া দেয়, আর এত ঝর্ণা যে তা সেই গাছ আর উঁচু ঘরগুলোর নিচ দিয়ে বয়ে যায়। এ কোনো দূরের দৃশ্য নয়, এ এমন এক জায়গা যার ভেতরে আপনি থাকেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Gold on the Wrists",
          "bn": "কব্জিতে সোনার কংকণ"
        },
        "p": [
          {
            "en": "Yuhallawna fiha min asawira min dhahab: they will be adorned therein with bracelets of gold. At-Tabari notes that asawir is the plural of iswar, and that the verb is that of adorning, of being decked out. Al-Qurtubi points out that the Qur'an distributes the detail across places: here the bracelets are of gold, in 22:23 and 35:33 gold and pearl are named together, and in 76:21 the bracelets are of silver. He reports the mufassirun saying that since kings of this world wore bracelets and crowns, Allah made the like of it the wear of the people of the Garden.",
            "bn": "ইউহাল্লাওনা ফিহা মিন আসাবিরা মিন যাহাব: সেখানে তাদের অলংকৃত করা হবে সোনার কংকণে। তাবারী বলেন, আসাবির হলো ইসওয়ার শব্দের বহুবচন, আর ক্রিয়াটি সাজিয়ে দেওয়ার, অলংকৃত করার। কুরতুবী ধরিয়ে দেন, কুরআন এই বিবরণ ছড়িয়ে দিয়েছে নানা জায়গায়। এখানে কংকণ সোনার, ২২:২৩ ও ৩৫:৩৩ আয়াতে সোনা আর মুক্তা একসঙ্গে এসেছে, আর ৭৬:২১ আয়াতে কংকণ রুপার। তিনি তাফসীরকারদের বরাতে বলেন, দুনিয়ার বাদশাহরা যেহেতু কংকণ আর মুকুট পরত, আল্লাহ তেমনটাই বানিয়ে দিলেন জান্নাতবাসীদের পরিধান।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi both carry a report from Saeed ibn Jubayr that each of them is adorned with three bracelets: one of gold, one of silver, and one of pearl and ruby. This is offered as a scholar's reading, not as the plain words of the verse, which name only gold; al-Qurtubi treats the several metals as the Qur'an's own distribution across its verses rather than a single wrist bearing all three at once. As-Sa'di draws a quiet conclusion from the open verb yuhallawna: because it is left unrestricted, this adorning is for the believing men and women alike, as the sound reports confirm.",
            "bn": "বাগাভী আর কুরতুবী দুজনেই সাঈদ ইবন জুবায়রের একটি বর্ণনা আনেন, যেখানে বলা হয় প্রত্যেককে অলংকৃত করা হবে তিনটি কংকণে: একটি সোনার, একটি রুপার, আর একটি মুক্তা ও ইয়াকুতের। এটা একজন আলিমের পাঠ হিসেবে পেশ করা, আয়াতের সোজা শব্দ হিসেবে নয়, কারণ আয়াত কেবল সোনার কথাই বলে। কুরতুবী এই কয়েক ধাতুকে ধরেন কুরআনের নিজের নানা আয়াতে ছড়ানো বিবরণ হিসেবে, একই কব্জিতে একসঙ্গে তিনটি নয়। সাদি ইউহাল্লাওনা ক্রিয়াটির খোলা রূপ থেকে চুপচাপ একটা সিদ্ধান্ত টানেন। যেহেতু এতে কোনো শর্ত জোড়া হয়নি, এই অলংকরণ মুমিন নারী-পুরুষ উভয়ের জন্যই, সহীহ বর্ণনাগুলোও যা নিশ্চিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fine Silk and Heavy Brocade",
          "bn": "সূক্ষ্ম রেশম আর মোটা দিবাজ"
        },
        "p": [
          {
            "en": "Wa yalbasuna thiyaban khudran min sundusin wa istabraq: and they will wear green garments of sundus and istabraq. The commentators agree on the pairing. Ibn Kathir says sundus is a fine, thin cloth, like a shirt and its kind, while istabraq is thick brocade with a sheen on it. At-Tabari has sundus as the thin of the dibaj and istabraq as what is thick and heavy of it; al-Qurtubi, citing al-Kisai, calls sundus the delicate and slender, and istabraq, on Ikrima's word, the thickened. The one heavy word and the one fine word together cover the whole range of silk.",
            "bn": "ওয়া ইয়ালবাসুনা সিয়াবান খুদরান মিন সুনদুসিন ওয়া ইসতাবরাক: তারা পরবে সুনদুস আর ইসতাবরাকের সবুজ পোশাক। এই জোড়ার ব্যাখ্যায় তাফসীরকারেরা একমত। ইবন কাসীর বলেন, সুনদুস হলো সূক্ষ্ম পাতলা কাপড়, জামা ও তার মতো জিনিস; আর ইসতাবরাক হলো চকচকে মোটা দিবাজ। তাবারীর কাছে সুনদুস দিবাজের পাতলা অংশ, আর ইসতাবরাক তার মোটা ও ভারী অংশ। কুরতুবী কিসাঈর বরাতে সুনদুসকে বলেন সূক্ষ্ম ও পাতলা, আর ইকরিমার কথায় ইসতাবরাককে মোটা। একটা ভারী শব্দ আর একটা সূক্ষ্ম শব্দ মিলে রেশমের গোটা পরিসরকেই ধরে ফেলে।"
          },
          {
            "en": "Al-Baghawi adds a point worth holding onto. When he calls istabraq the thick of the brocade, he explains that thickness in the garments of Paradise means their firmness and perfection, not the coarseness that thick cloth carries here. Al-Qurtubi asks why green alone is named among colours and answers that green agrees with the eye: white scatters and strains the sight, black is disliked, and green sits between them and gathers the light. So the one colour, the fine weave and the heavy weave are not idle detail; each is chosen for how it meets the one who wears and sees it.",
            "bn": "বাগাভী একটা কথা যোগ করেন যা মনে রাখার মতো। ইসতাবরাককে দিবাজের মোটা অংশ বলার সময় তিনি বুঝিয়ে দেন, জান্নাতের পোশাকে মোটা হওয়ার মানে তার মজবুতি আর পূর্ণতা, দুনিয়ার মোটা কাপড়ের খসখসে ভাব নয়। কুরতুবী জিজ্ঞেস করেন, রঙের মধ্যে কেন কেবল সবুজের কথা এল, আর জবাব দেন যে সবুজ চোখের সঙ্গে মেলে। সাদা দৃষ্টি ছড়িয়ে দেয় আর কষ্ট দেয়, কালো অপছন্দের, আর সবুজ এ দুইয়ের মাঝখানে থেকে আলোকে জড়ো করে। তাই এই একটি রঙ, সূক্ষ্ম বুনন আর মোটা বুনন কোনো অকারণ বিবরণ নয়। প্রতিটি বাছা হয়েছে পরিধানকারী ও দর্শকের কথা ভেবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reclining, Not Restless",
          "bn": "হেলান দেওয়া, অস্থির নয়"
        },
        "p": [
          {
            "en": "Muttakiina fiha ala al-araik: reclining therein on couches. Ibn Kathir says the word muttakiin carries two readings, lying down or sitting with the legs folded, and he judges the second closer to what is meant here. The araik, he explains, are the plural of arika, a bed set under a canopy; at-Tabari and al-Qurtubi give the same, a couch within curtained drapes, and al-Qurtubi cites Ibn Abbas that they are beds of gold studded with pearl and ruby with the canopy over them. Qatada, through Abd al-Razzaq, reads the very word araik as those canopies.",
            "bn": "মুত্তাকিইনা ফিহা আলাল আরাইক: সেখানে তারা আসনে হেলান দিয়ে থাকবে। ইবন কাসীর বলেন, মুত্তাকিইন শব্দে দুটি পাঠ আছে, শুয়ে থাকা অথবা পা গুটিয়ে বসা; আর এখানে যা বোঝানো হচ্ছে তার কাছাকাছি তিনি ধরেন দ্বিতীয়টিকে। আরাইক, তিনি বুঝিয়ে দেন, আরিকা শব্দের বহুবচন, পর্দাঘেরা ছাউনির নিচে পাতা আসন। তাবারী আর কুরতুবীও একই কথা বলেন, পর্দার ভেতরে রাখা আসন। কুরতুবী ইবন আব্বাসের বরাতে বলেন, এগুলো সোনার আসন, মুক্তা আর ইয়াকুতে খচিত, উপরে ছাউনি টানানো। কাতাদা আবদুর রাযযাকের সূত্রে আরাইক শব্দটাকেই পড়েন সেই ছাউনি হিসেবে।"
          },
          {
            "en": "As-Sa'di reads the posture, not just the furniture. A couch, he says, is not even called an arika until it is dressed and made fine, and to lean upon it points to complete rest, the passing of fatigue, and servants moving about with whatever the soul desires. To sit propped and at ease is the body of someone who has arrived and has nothing left to guard against. That is the note the verse strikes here: not the striving of the earlier verses, where the Prophet is told to hold himself patient with the poor who call on their Lord, but the settled ease that the striving was for.",
            "bn": "সাদি কেবল আসবাব নয়, বসার ভঙ্গিটাও পড়েন। তিনি বলেন, একটা আসনকে আরিকা বলাই হয় না যতক্ষণ না তা সাজানো আর সুন্দর করা হয়। আর তাতে হেলান দেওয়া ইশারা করে পূর্ণ প্রশান্তির দিকে, ক্লান্তি ও অবসাদের চলে যাওয়ার দিকে, আর মন যা চায় তা নিয়ে খাদিমদের ছোটাছুটির দিকে। ঠেস দিয়ে নিশ্চিন্তে বসা সেই মানুষের ভঙ্গি, যে পৌঁছে গেছে আর যার আর কিছু পাহারা দেওয়ার নেই। আয়াত এখানে সেই সুরটাই ধরায়। আগের আয়াতগুলোর সেই সংগ্রাম নয়, যেখানে নবী ﷺ-কে বলা হয়েছিল রবকে ডাকা গরিবদের সঙ্গে ধৈর্য ধরে থাকতে, বরং সেই থিতু প্রশান্তি, যার জন্যই ছিল সংগ্রামটা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Water Reached",
          "bn": "যেখানে পানি পৌঁছেছিল"
        },
        "p": [
          {
            "en": "Under the word yuhallawna, al-Qurtubi reaches for a sound report about that same adorning. Muslim records, in his Sahih (hadith 250), that Abu Hazim stood behind Abu Huraira as he made ablution and saw him extend the washing of his arm up to the armpit. Asked about it, Abu Huraira said he had heard his beloved Prophet say, 'In the believer, the adornment will reach as far as the ablution reaches.' Being in Sahih Muslim, the report is graded sound; its wording is his and is quoted here whole.",
            "bn": "ইউহাল্লাওনা শব্দের নিচে কুরতুবী সেই অলংকরণ নিয়েই একটি সহীহ বর্ণনা টেনে আনেন। মুসলিম তাঁর সহীহতে (হাদীস ২৫০) বর্ণনা করেন, আবু হাযিম আবু হুরায়রা (রাঃ)-এর পেছনে দাঁড়িয়ে ছিলেন যখন তিনি অজু করছিলেন, আর দেখলেন তিনি হাত ধোয়া বাড়িয়ে নিচ্ছেন বগল পর্যন্ত। এ নিয়ে জিজ্ঞেস করা হলে আবু হুরায়রা (রাঃ) বললেন, তিনি তাঁর প্রিয় নবী ﷺ-কে বলতে শুনেছেন, 'মুমিনের অলংকার সেখানেই পৌঁছবে যেখানে অজুর পানি পৌঁছয়।' সহীহ মুসলিমে থাকায় বর্ণনাটি সহীহ বলে গণ্য; এর শব্দগুলো তাঁরই, আর এখানে তা পুরোটা উদ্ধৃত।"
          },
          {
            "en": "The report ties the gold of the verse to a wet act done before dawn. The bracelets of 18:31 are not won by wishing for them; a companion lengthened his wudu because he had heard where the ornament would one day sit. It also fits what as-Sa'di drew from the open verb: the adornment is promised to believing men and women alike, though gold and silk are held back from men in this life. The wrist that will wear gold is the wrist that is washed for prayer now.",
            "bn": "বর্ণনাটি আয়াতের সোনাকে বেঁধে দেয় ভোরের আগে করা এক ভেজা কাজের সঙ্গে। ১৮:৩১ আয়াতের কংকণ কেবল কামনা করে পাওয়া যায় না; একজন সাহাবি অজু লম্বা করেছিলেন কারণ তিনি শুনেছিলেন অলংকার একদিন কোথায় বসবে। এটা সাদির খোলা ক্রিয়া থেকে টানা কথাটার সঙ্গেও মেলে: এই অলংকার মুমিন নারী-পুরুষ উভয়ের জন্যই ওয়াদা করা, যদিও দুনিয়ায় পুরুষের জন্য সোনা আর রেশম আটকানো। যে কব্জি সোনা পরবে, সেই কব্জিই এখন নামাজের জন্য ধোয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Universe With Other Rules",
          "bn": "আলাদা নিয়মের এক জগৎ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an meets an honest objection head on. Ornaments and gold do not suit men here, and the law of this world forbids a man even a gold ring or a gold watch-chain, and forbids him silk clothing too. So why are the men of the Garden decked in bracelets and silk? Its answer is that what counts as beauty is set by custom, and custom differs from land to land and age to age: what one place prizes another finds ugly, and what one century admires the next may scorn. Beauty is not a fixed law of matter.",
            "bn": "মাআরিফুল কুরআন একটা সৎ আপত্তির মুখোমুখি হয় সরাসরি। অলংকার আর সোনা এখানে পুরুষকে মানায় না, আর দুনিয়ার আইন পুরুষের জন্য এমনকি সোনার আংটি বা সোনার ঘড়ির চেইনও নিষেধ করে, রেশমি পোশাকও নিষেধ করে। তাহলে জান্নাতের পুরুষদের কেন কংকণ আর রেশমে সাজানো হবে? এর জবাব হলো, কোনটা সৌন্দর্য তা ঠিক করে দেয় প্রচলন, আর প্রচলন দেশভেদে যুগভেদে বদলায়। এক জায়গা যা মূল্য দেয়, আরেক জায়গা তাকে কুৎসিত মনে করে; এক শতক যা পছন্দ করে, পরের শতক তাকে হয়তো তুচ্ছ ভাবে। সৌন্দর্য বস্তুর কোনো বাঁধা নিয়ম নয়।"
          },
          {
            "en": "The deeper answer, Ma'arif says, is that the next life is a separate order of existence altogether, not to be measured by the rules and analogies of the world we know. In Paradise, ornament and silk are established as beauty for men, and nobody there finds it strange. The prohibition that binds a man now is a law of this world, not a verdict on the thing itself. This keeps the reward from being pulled down to the level of a luxury catalogue: it is not this world's finery scaled up, but a different world's ordinary.",
            "bn": "আরও গভীর জবাব, মাআরিফ বলে, হলো এই যে আখিরাত পুরোপুরি আলাদা এক অস্তিত্বের ব্যবস্থা, আমাদের চেনা দুনিয়ার নিয়ম আর উপমা দিয়ে যাকে মাপা যায় না। জান্নাতে অলংকার আর রেশম পুরুষের জন্য সৌন্দর্য হিসেবেই প্রতিষ্ঠিত, আর সেখানে কারও কাছে তা অদ্ভুত লাগে না। যে নিষেধ এখন পুরুষকে বাঁধে, তা দুনিয়ার আইন, জিনিসটার নিজের উপর কোনো রায় নয়। এটা পুরস্কারকে বিলাসদ্রব্যের তালিকার স্তরে নামতে দেয় না। এ দুনিয়ার জৌলুসকে বড় করে দেখানো নয়, বরং আরেক জগতের সাধারণ জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Answers Back",
          "bn": "যে শব্দ পাল্টা জবাব দেয়"
        },
        "p": [
          {
            "en": "Nima al-thawabu wa hasunat murtafaqa: excellent is the reward, and good is the resting place. Ibn Kathir reads this as the deliberate answer to the fire two verses back, where the same closing shape ran bisa al-sharabu wa saat murtafaqa, wretched is the drink and evil is the resting place. The one word murtafaqa, the place where one settles and takes ease, is set down twice: once evil, once good. Ibn Kathir points to the same paired contrast of Paradise and Hell in 25:66 and 25:76 of Surat al-Furqan, where each is closed with its own verdict on the place of rest.",
            "bn": "নিমাস সাওয়াবু ওয়া হাসুনাত মুরতাফাকা: কতই না উত্তম পুরস্কার, আর কতই না উত্তম ঠাঁই। ইবন কাসীর একে পড়েন দুই আয়াত আগের আগুনের জবাব হিসেবে, যেখানে ঠিক এই শেষ গড়নেই এসেছিল বিসাশ শারাবু ওয়া সাআত মুরতাফাকা, কতই না নিকৃষ্ট পানীয়, আর কতই না খারাপ ঠাঁই। মুরতাফাকা শব্দটাই, মানে যেখানে মানুষ থিতু হয় আর আরাম নেয়, বসানো হয়েছে দুবার: একবার খারাপ, একবার ভালো। ইবন কাসীর একই জোড়া বিপরীত ইশারা করেন সূরা ফুরকানের ২৫:৬৬ ও ২৫:৭৬ আয়াতে, যেখানে জান্নাত আর জাহান্নাম প্রতিটি শেষ হয় নিজের ঠাঁই নিয়ে নিজের রায়ে।"
          },
          {
            "en": "At-Tabari notices the grammar. The verb hasunat is feminine because it points to the araik, the couches just named. He adds that nima and bisa are placed in speech to carry praise or blame, not to report an action, which is why Arabic keeps them the same with a feminine subject or a plural one. The point is not a technicality: the fire's verse and the garden's verse are built as mirror images, syllable for syllable, so that the ear hears the choice of 18:29, believe or disbelieve, resolve into two facing ends.",
            "bn": "তাবারী ব্যাকরণটা খেয়াল করেন। হাসুনাত ক্রিয়াটি স্ত্রীবাচক, কারণ তা ইশারা করে আরাইকের দিকে, এইমাত্র নাম নেওয়া আসনগুলোর দিকে। তিনি যোগ করেন, নিমা আর বিসা কথায় বসানো হয় প্রশংসা বা নিন্দা বহন করতে, কোনো কাজ জানাতে নয়। এ জন্যই আরবি এদের স্ত্রীবাচক কর্তার সঙ্গে বা বহুবচন কর্তার সঙ্গে একই রাখে। কথাটা কোনো নিছক নিয়মের কথা নয়। আগুনের আয়াত আর জান্নাতের আয়াত গড়া হয়েছে একে অপরের আয়না করে, অক্ষরে অক্ষরে, যাতে কান শুনতে পায় ১৮:২৯ আয়াতের সেই বাছাই, ঈমান আনা কি অস্বীকার করা, মিলিয়ে যাচ্ছে মুখোমুখি দুই পরিণতিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adornment That Does Not Fade",
          "bn": "যে শোভা মলিন হয় না"
        },
        "p": [
          {
            "en": "It is worth keeping this reward apart from the adornment named elsewhere in the surah. In 18:46, wealth and children are called the adornment of the worldly life, and in 18:45 that life is likened to green growth the wind soon scatters. The green silk here is the opposite case. It is not the zina of a life that fades but the reward of the next, and as-Sa'di dwells on this: the least of Paradise's people would travel his kingdom two thousand years and never reach the end of what he was given, and even then the bliss keeps increasing in its beauty and never settles into sameness.",
            "bn": "এই পুরস্কারকে সূরার অন্য জায়গায় নাম নেওয়া শোভা থেকে আলাদা রাখা দরকার। ১৮:৪৬ আয়াতে সম্পদ আর সন্তানকে বলা হয়েছে দুনিয়ার জীবনের শোভা, আর ১৮:৪৫ আয়াতে সে জীবনকে তুলনা করা হয়েছে সবুজ ফসলের সঙ্গে, যাকে বাতাস অচিরেই উড়িয়ে নেয়। এখানকার সবুজ রেশম তার উল্টো। এ মিলিয়ে যাওয়া জীবনের শোভা নয়, এ আখিরাতের পুরস্কার। সাদি এ নিয়ে থামেন: জান্নাতের সবচেয়ে নিচু মানুষটিও তার রাজত্বে দুই হাজার বছর ঘুরবে আর যা পেয়েছে তার শেষ পাবে না, আর তখনও সেই নিয়ামত সৌন্দর্যে বেড়েই চলবে, কখনো একঘেয়ে হয়ে থামবে না।"
          },
          {
            "en": "The verse ends on the couch and the settled ease, and then the surah turns. The next verse opens a parable of two men, one given two gardens of grapevines and the other not, and that story belongs to itself. Here the reward has been laid out in full: the residence, the rivers, the gold, the silk, the couch, and the one word that answers the fire. The invitation of these verses is not to admire the furniture but to read the closing line as a question. Two verses end with the same music and opposite meaning, and each reader is spending today writing toward one of them.",
            "bn": "আয়াত শেষ হয় আসন আর থিতু প্রশান্তিতে, তারপর সূরা মোড় নেয়। পরের আয়াত খোলে দুই ব্যক্তির উপমা দিয়ে, যাদের একজনকে দেওয়া হয়েছিল আঙুরের দুই বাগান আর অন্যজনকে নয়, আর সে কাহিনি তার নিজের। এখানে পুরস্কার পুরোটা মেলে ধরা হয়েছে: বসবাস, ঝর্ণা, সোনা, রেশম, আসন, আর সেই একটি শব্দ যা আগুনের জবাব দেয়। এই আয়াতগুলোর ডাক আসবাব দেখে মুগ্ধ হওয়ার নয়, বরং শেষ লাইনটাকে একটা প্রশ্ন হিসেবে পড়ার। দুই আয়াত শেষ হয় একই সুরে অথচ উল্টো অর্থে, আর প্রতিটি পাঠক আজকের দিনটা খরচ করছে এদের কোনো একটির দিকে লিখতে লিখতে।"
          }
        ]
      }
    ]
  },
  "18:37": {
    "sections": [
      {
        "h": {
          "en": "Two Men in a Parable",
          "bn": "উপমার দুই মানুষ"
        },
        "p": [
          {
            "en": "Allah tells His Prophet ﷺ to set before the people the example of two men (18:32). To one He gave two gardens of grapevines ringed with palms and sown with crops between them; each garden yielded its fruit in full and a river ran through them (18:33). The man had abundance, and abundance did the quiet work it so often does. This is a mathal, a coined example, and its two figures are not real neighbours to be named and judged; they are types the listener is meant to weigh himself against.",
            "bn": "আল্লাহ তাঁর নবী ﷺ-কে বলছেন মানুষের সামনে দুই ব্যক্তির উপমা তুলে ধরতে (১৮:৩২)। একজনকে তিনি দিয়েছিলেন আঙুরের দুই বাগান, চারপাশে খেজুরগাছ আর মাঝখানে শষ্যক্ষেত; দুই বাগানই পুরোপুরি ফল দিত, আর তার ভেতর দিয়ে বইত ঝর্ণাধারা (১৮:৩৩)। লোকটির ছিল প্রাচুর্য, আর প্রাচুর্য যা করে থাকে চুপচাপ সেই কাজটাই করল। এ এক মাসাল, গড়ে তোলা দৃষ্টান্ত। এর দুই চরিত্র বাস্তব কোনো প্রতিবেশী নয় যাদের নাম ধরে বিচার করতে হবে; এরা এমন দুই ধরন, যাদের সঙ্গে শ্রোতা নিজেকে মিলিয়ে দেখবে।"
          },
          {
            "en": "So he said to his companion, in the middle of talking with him, 'I am greater than you in wealth and mightier in men' (18:34). He entered his garden wronging his own soul and said he did not think it would ever perish (18:35). Then he went further: 'I do not think the Hour will come, and even if I am returned to my Lord I will surely find something better than this' (18:36). Wealth had grown into a settled certainty that nothing would end and no reckoning waited.",
            "bn": "তাই সে কথার মাঝেই তার সাথীকে বলল, ‘আমি ধনে তোমার চেয়ে বড়, জনবলে তোমার চেয়ে শক্তিশালী’ (১৮:৩৪)। নিজের উপর জুলুম করা অবস্থায় সে বাগানে ঢুকল আর বলল, এটা কোনোদিন ধ্বংস হবে বলে সে মনে করে না (১৮:৩৫)। এরপর সে আরও এক ধাপ গেল: ‘আমি মনে করি না কিয়ামাত আসবে, আর যদি রবের কাছে ফেরানোও হই, তবু এর চেয়ে ভালো কিছুই পাব’ (১৮:৩৬)। সম্পদ ততক্ষণে তার মনে পাকা এক বিশ্বাসে দাঁড়িয়ে গেছে, কিছুই শেষ হবে না, কোনো হিসাবও অপেক্ষা করছে না।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the exchange as an argument. The rich man's case was that his fortune proved God's favour, and that if there were any life to come it would only hand him more. The poorer man's whole reply, running through the verses that follow, dismantles that case. Our verse is where it begins, and it begins not with the man's wealth but with his body: with the plain fact of where he came from, which he had somehow managed to forget while counting his vines.",
            "bn": "মাআরিফুল কুরআন এই কথোপকথনকে একটি তর্ক হিসেবে পড়ে। ধনী লোকটির যুক্তি ছিল, তার সম্পদই প্রমাণ করে আল্লাহ তার প্রতি সন্তুষ্ট, আর পরকাল বলে কিছু থাকলে সেখানে তাকে আরও বেশিই দেওয়া হবে। গরিব সাথীর গোটা জবাব, যা পরের আয়াতগুলো জুড়ে চলে, এই যুক্তিটাকেই ভেঙে দেয়। আমাদের আয়াত সেই জবাবের শুরু। আর শুরুটা লোকটির সম্পদ দিয়ে নয়, তার শরীর দিয়ে; সে কোথা থেকে এসেছে সেই সাদামাটা সত্যটা দিয়ে, আঙুর গুনতে গুনতে যা সে কোনোভাবে ভুলে বসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Poorer Man Answers",
          "bn": "গরিব সাথীর জবাব"
        },
        "p": [
          {
            "en": "'His companion said to him, while he was conversing with him' (18:37). At-Tabari identifies this speaker as the companion who was less than the rich man in wealth and children, the same believer of 18:34, and glosses 'while conversing with him' simply as addressing and speaking to him. The reply is not shouted across a distance; it is one side of a conversation already under way, an answer given face to face to a man who has just declared himself untouchable.",
            "bn": "‘তার সাথী তাকে বলল, কথা চালিয়ে যেতে যেতেই’ (১৮:৩৭)। তাবারী এই বক্তাকে চেনান সেই সাথী হিসেবে, যে ধনে-সন্তানে ধনী লোকটির চেয়ে কম ছিল, ১৮:৩৪-এর সেই বিশ্বাসীই। আর ‘কথা চালিয়ে যেতে যেতে’ কথাটার অর্থ তিনি সোজা করেই দেন: তাকে সম্বোধন করে, তার সঙ্গে কথা বলতে বলতে। এ জবাব দূর থেকে চেঁচিয়ে বলা নয়। এ এক চলমান আলাপেরই একটা দিক, নিজেকে অটুট ঘোষণা করা লোকটির মুখোমুখি দাঁড়িয়ে দেওয়া উত্তর।"
          },
          {
            "en": "Al-Qurtubi notes that the commentators disputed the believer's name, some saying Yahudha and some Tamlikha, and he does not settle it. The Qur'an itself leaves him unnamed, and that is fitting: the point is not who he was but what he said. What matters is that a man with less in his hands saw more clearly, and that the poorer in vines was still able to remember how a person is made.",
            "bn": "কুরতুবী জানান, বিশ্বাসী লোকটির নাম নিয়ে তাফসীরকারদের মতভেদ আছে; কেউ বলেন ইয়াহূযা, কেউ তামলীখা, আর তিনি বিষয়টা মীমাংসা করেন না। কুরআন নিজে তাকে নামহীন রেখে দিয়েছে, আর সেটাই মানানসই: কথা তো এই নয় যে সে কে ছিল, কথা হলো সে কী বলল। আসল ব্যাপার হলো, হাতে কম থাকা মানুষটাই বেশি পরিষ্কার দেখল, আর আঙুরে যে গরিব সেই-ই মনে রাখতে পারল, মানুষ আসলে কীভাবে তৈরি হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question That Rebukes",
          "bn": "যে প্রশ্ন ধমক দেয়"
        },
        "p": [
          {
            "en": "The reply opens as a question that is really a charge: 'Have you disbelieved in Him who created you...?' (18:37). Ibn Kathir calls this a denunciation, and reads the believer as admonishing and rebuking his companion for the disbelief he had fallen into and the conceit that had deceived him. The Arabic verb akfarta is not a neutral 'do you doubt'; it names what the man's easy certainty amounts to when it is followed all the way to its end.",
            "bn": "জবাবটা শুরু হয় এমন এক প্রশ্ন দিয়ে, যা আসলে এক অভিযোগ: ‘তুমি কি তাঁকে অস্বীকার করছ, যিনি তোমাকে সৃষ্টি করেছেন...?’ (১৮:৩৭)। ইবন কাসীর একে বলেন ধিক্কার, আর বিশ্বাসী লোকটিকে পড়েন এমন একজন হিসেবে, যে তার সাথীকে তিরস্কার করছে সেই কুফরের জন্য যাতে সে পড়েছিল, আর যে দম্ভ তাকে ধোঁকা দিয়েছিল তার জন্য। আরবি শব্দ ‘আকাফারতা’ নিছক ‘তুমি কি সন্দেহ করছ’ নয়; লোকটির সহজ নিশ্চয়তা শেষ পর্যন্ত টেনে নিলে যা দাঁড়ায়, শব্দটা তারই নাম দেয়।"
          },
          {
            "en": "What exactly had he denied? Ibn Kathir frames it as juhud, an outright denial of the very Lord who created him. At-Tabari and al-Muyassar tie it more narrowly to the man's words in 18:36: he doubted the Hour and doubted he would be raised, so the rebuke is aimed at that denial of being brought back as a new creation after he has become dust and bone. As-Sa'di gathers both, calling it a denial of God's blessing joined to a claim that no resurrection waits.",
            "bn": "সে ঠিক কী অস্বীকার করেছিল? ইবন কাসীর একে বলেন জুহূদ, যিনি তাকে সৃষ্টি করেছেন সেই রবেরই খোলা অস্বীকার। তাবারী আর মুয়াসসার একে আরও সরু করে বাঁধেন ১৮:৩৬-এ বলা লোকটির কথার সঙ্গে: সে কিয়ামাতে সন্দেহ করেছিল, আর সন্দেহ করেছিল তাকে আবার ওঠানো হবে কি না। তাই ধমকটা লক্ষ্য করছে সেই অস্বীকারকেই, মাটি আর হাড় হয়ে যাওয়ার পর নতুন সৃষ্টি হয়ে ফিরে আসার অস্বীকার। সাদী দুটোকেই এক করে ধরেন: আল্লাহর নিয়ামত অস্বীকার, সঙ্গে জুড়ে এই দাবি যে কোনো পুনরুত্থান নেই।"
          },
          {
            "en": "So the charge has two faces the commentators keep together. One is ingratitude: as-Sa'di stresses that this is a man denying the very blessing that made him. The other is denial of the Hour, which is where 18:36 had left him. The believer does not separate the two, because in the man they are one movement: a heart so full of what it owns that it forgets the Giver and doubts it will ever answer for anything. That is the disbelief the question names.",
            "bn": "তাই অভিযোগের দুটি মুখ, যা তাফসীরকারেরা একসঙ্গেই রাখেন। একটি হলো অকৃতজ্ঞতা: সাদী জোর দিয়ে বলেন, এ এমন এক মানুষ যে তাকে-গড়া নিয়ামতকেই অস্বীকার করছে। অন্যটি কিয়ামাতের অস্বীকার, ১৮:৩৬ যেখানে তাকে রেখে গিয়েছিল। বিশ্বাসী সাথী দুটোকে আলাদা করেন না, কারণ লোকটির ভেতরে এ দুটো এক চলাফেরা। মন এত ভরে গেছে নিজের মালিকানায় যে দাতাকে ভুলে গেছে, আর সন্দেহ করছে কোনোদিন কোনো কিছুর জবাব দিতে হবে কি না। এই কুফরের দিকেই প্রশ্নটা আঙুল তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Made First From Dust",
          "bn": "প্রথমে মাটি থেকে"
        },
        "p": [
          {
            "en": "'...who created you from dust' (18:37). At-Tabari, Ibn Kathir and al-Baghawi all read this first stage as the creation of Adam (AS): God made your origin, your father, from dust. Ibn Kathir spells it out: He began the creation of man from clay, meaning Adam (AS), and then made his offspring from an extract of lowly water. The 'you' addressed here reaches back past the man's own beginning to the beginning of his whole kind, drawn up out of the ground.",
            "bn": "‘...যিনি তোমাকে মাটি থেকে সৃষ্টি করেছেন’ (১৮:৩৭)। তাবারী, ইবন কাসীর ও বাগাভী সবাই এই প্রথম ধাপটাকে পড়েন আদম (আঃ)-এর সৃষ্টি হিসেবে: আল্লাহ তোমার মূল, তোমার পিতাকে মাটি থেকে বানিয়েছেন। ইবন কাসীর তা খুলে বলেন, তিনি মানুষের সৃষ্টি শুরু করেছেন কাদামাটি থেকে, অর্থাৎ আদম (আঃ)-কে, তারপর তাঁর বংশধরদের বানিয়েছেন এক তুচ্ছ পানির নির্যাস থেকে। এখানে যে ‘তুমি’-কে সম্বোধন, তা লোকটির নিজের শুরু ছাড়িয়ে পিছিয়ে যায় তার গোটা জাতের শুরুতে, মাটি থেকে তুলে আনা।"
          },
          {
            "en": "The choice of turab, plain dust, is part of the rebuke. A man boasting of gardens and men is reminded that the soil beneath his roots and the substance he is made from are one and the same. Ibn Kathir's point is that this is knowledge no one can honestly refuse: every creature knows within itself that it once was nothing and then came to be, and that its coming-to-be was owed not to itself but to its Creator. To grant that origin and still be arrogant is incoherent.",
            "bn": "তুরাব, নিছক মাটি, এই শব্দটাও ধমকের অংশ। বাগান আর জনবল নিয়ে গর্ব করা লোকটিকে মনে করিয়ে দেওয়া হচ্ছে, তার শিকড়ের নিচের মাটি আর যে উপাদানে সে নিজে গড়া, দুটোই একই মাটি। ইবন কাসীরের কথা হলো, এ এমন জ্ঞান যা সৎভাবে কেউ অস্বীকার করতে পারে না: প্রতিটি সৃষ্টিই নিজের ভেতরে জানে যে একদিন সে কিছুই ছিল না, তারপর হয়েছে; আর এই হওয়া তার নিজের হাতে নয়, তার স্রষ্টার হাতে। এই শুরুটা মেনে নিয়েও অহংকার করা অসংগত।"
          }
        ]
      },
      {
        "h": {
          "en": "Then a Lowly Drop",
          "bn": "তারপর এক তুচ্ছ ফোঁটা"
        },
        "p": [
          {
            "en": "'...then from a sperm-drop' (18:37). At-Tabari reads this as the second stage in the individual man: after Adam (AS) from dust, God originated you from the nutfa of the man and the woman. Al-Muyassar says the same, the drop of the two parents. Ibn Kathir's phrase for it is starker still, an extract of despised water. The verse moves from the dust of the species to the fluid of one person's own conception, and neither material is anything a man would choose to boast from.",
            "bn": "‘...তারপর এক শুক্রবিন্দু থেকে’ (১৮:৩৭)। তাবারী একে পড়েন ব্যক্তি-মানুষের দ্বিতীয় ধাপ হিসেবে: মাটি থেকে আদম (আঃ)-এর পর, আল্লাহ তোমাকে সৃষ্টি করেছেন পুরুষ ও নারীর শুক্রবিন্দু থেকে। মুয়াসসারও একই কথা বলেন, দুই পিতা-মাতার ফোঁটা। ইবন কাসীরের ভাষা আরও কড়া, তুচ্ছ পানির নির্যাস। আয়াত এগোয় জাতির মাটি থেকে একজন মানুষের নিজের গর্ভধারণের তরলে, আর এর কোনো উপাদানই এমন নয় যা থেকে কেউ গর্ব করতে চাইবে।"
          },
          {
            "en": "There is a deliberate descent in the two words. Dust and a drop are both humble, and set beside two rivered gardens they are almost nothing. Ma'arif al-Qur'an keeps the reader on this ground: worldly wealth is handed out by God to believer and disbeliever alike, even to snakes and scorpions and beasts, so it never marks a man as favoured. The drop he came from tells the truer story of his standing than the fruit he now counts ever could.",
            "bn": "দুই শব্দের ভেতরে একটা ইচ্ছাকৃত নেমে যাওয়া আছে। মাটি আর ফোঁটা দুটোই তুচ্ছ, আর দুই ঝর্ণা-ভেজা বাগানের পাশে রাখলে প্রায় কিছুই নয়। মাআরিফুল কুরআন পাঠককে এই জমিনেই ধরে রাখে: দুনিয়ার সম্পদ আল্লাহ মুমিন-কাফির নির্বিশেষে বিলিয়ে দেন, এমনকি সাপ-বিছা আর পশুকেও; তাই তা কখনো কাউকে প্রিয়পাত্র বলে দাগিয়ে দেয় না। যে ফোঁটা থেকে সে এসেছে, তার মর্যাদার আসল গল্পটা সেই ফোঁটাই বলে, আজ সে যে ফল গুনছে তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Shaped Into a Man",
          "bn": "মানুষ করে গড়া"
        },
        "p": [
          {
            "en": "'...then proportioned you a man' (18:37). At-Tabari and al-Baghawi read sawwaka rajulan as God balancing you into a sound, upright human being, a male and not a female. Al-Qurtubi adds the same sense: made you even in stature and form, whole in your limbs. What began as dust and a drop is now a person who can walk into a garden, look about him, and imagine he owns the world.",
            "bn": "‘...তারপর তোমাকে মানুষ করে ঠিকঠাক গড়েছেন’ (১৮:৩৭)। তাবারী ও বাগাভী ‘সাওওয়াকা রাজুলা’ পড়েন এভাবে: আল্লাহ তোমাকে সুঠাম, সোজা এক মানুষে ভারসাম্য দিয়েছেন, নারী নয়, পুরুষ করে। কুরতুবীও একই অর্থ যোগ করেন: গড়ন আর অবয়বে সমান, অঙ্গপ্রত্যঙ্গে পূর্ণ করে বানিয়েছেন। যা শুরু হয়েছিল মাটি আর এক ফোঁটা হিসেবে, তা এখন এমন এক মানুষ, যে বাগানে ঢুকে চারপাশে চোখ বুলিয়ে ভাবতে পারে গোটা দুনিয়া তারই।"
          },
          {
            "en": "As-Sa'di draws the argument out furthest. He reads the whole sequence as God moving the man from stage to stage: the favour of being brought into existence, then of being kept in it, blessing upon blessing, until He proportioned him a man complete in body and mind. And, as-Sa'di adds, it was by this same grace that the means of the man's wealth were made easy for him. His gardens did not come by his own strength; they came, like his very self, as a gift.",
            "bn": "সাদী যুক্তিটাকে সবচেয়ে দূর পর্যন্ত টানেন। তিনি গোটা ধারাটাকে পড়েন আল্লাহর হাতে ধাপে ধাপে মানুষটিকে এগিয়ে নেওয়া হিসেবে: প্রথমে অস্তিত্বে আনার নিয়ামত, তারপর সেই অস্তিত্বে ধরে রাখা, নিয়ামতের পর নিয়ামত, যতক্ষণ না তাকে দেহে-মনে পূর্ণ এক মানুষ করে গড়া হলো। আর সাদী যোগ করেন, এই একই অনুগ্রহেই লোকটির সম্পদের উপায়গুলো তার জন্য সহজ করা হয়েছিল। তার বাগান নিজের জোরে আসেনি; তার নিজের সত্তার মতোই, এসেছে দান হিসেবে।"
          },
          {
            "en": "This is why the origin is the answer to the boast. The man had said he was greater in wealth and mightier in men, as if he had built himself. The verse walks him back through the only true account of his making, in which he supplied nothing. As-Sa'di's conclusion is blunt: after all this, it does not befit you to disbelieve in the One who made you, to deny His gift, and to claim there is no resurrection to come.",
            "bn": "এ কারণেই তার শুরুটাই তার গর্বের জবাব। লোকটা বলেছিল সে ধনে বড়, জনবলে শক্তিশালী, যেন সে নিজেকে নিজে বানিয়েছে। আয়াত তাকে হাঁটিয়ে ফিরিয়ে নেয় তার গড়ে ওঠার একমাত্র সত্য বিবরণে, যেখানে সে কিছুই জোগায়নি। সাদীর সিদ্ধান্ত সাফ: এতকিছুর পর তোমাকে-গড়া সেই সত্তাকে অস্বীকার করা, তাঁর দান অস্বীকার করা, আর কোনো পুনরুত্থান নেই বলে দাবি করা তোমাকে মানায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Harder Than Bringing Back",
          "bn": "ফিরিয়ে আনা সহজতর"
        },
        "p": [
          {
            "en": "The creation sequence is also an argument about the Hour the man had doubted. Al-Qurtubi puts it sharply: what the man readily admits, that he was made from dust and a drop, is a more wondrous thing than the resurrection he denies. Al-Muyassar draws the same lesson from the exchange, that the One who was able to begin the creation is able to bring it back. At-Tabari reads the whole question as aimed at exactly this: can you deny that He who made you will remake you after you decay?",
            "bn": "এই সৃষ্টি-ধারা লোকটির সন্দেহ-করা কিয়ামাত নিয়েও এক যুক্তি। কুরতুবী কথাটা ধারালোভাবে বলেন: লোকটা যা সহজেই মানছে, মাটি আর ফোঁটা থেকে তার তৈরি হওয়া, তা তো সেই পুনরুত্থানের চেয়ে বেশি বিস্ময়কর, যা সে অস্বীকার করছে। মুয়াসসার এই কথোপকথন থেকে একই শিক্ষা টানেন, যিনি সৃষ্টি শুরু করতে পেরেছেন, তিনি তা আবার ফিরিয়ে আনতেও পারেন। তাবারী গোটা প্রশ্নটাকেই এই দিকে লক্ষ্য করা হিসেবে পড়েন: যিনি তোমাকে বানিয়েছেন, ক্ষয়ে যাওয়ার পর তিনি তোমাকে আবার বানাবেন, এ কি তুমি অস্বীকার করতে পারো?"
          },
          {
            "en": "The logic is quiet but complete. A man who accepts the harder act has no ground to deny the easier one. He has watched a species raised from soil and a person assembled from a drop; a second making, on this reasoning, asks less, not more. This is why the believer answers a boast about wealth with a lesson about wombs and dust. The doubt of the Hour and the pride in the gardens share one root, and a single fact pulls up both.",
            "bn": "যুক্তিটা নীরব, তবু পূর্ণ। যে মানুষ কঠিনতর কাজটা মেনে নেয়, সহজতরটা অস্বীকার করার জমি তার থাকে না। সে তো দেখেছে মাটি থেকে একটা জাতকে ওঠানো, আর এক ফোঁটা থেকে একটা মানুষ জোড়া লাগানো; এই হিসাবে দ্বিতীয়বার গড়া বেশি নয়, বরং কম চায়। এ জন্যই বিশ্বাসী সাথী সম্পদের গর্বের জবাব দেন গর্ভ আর মাটির পাঠ দিয়ে। কিয়ামাতের সন্দেহ আর বাগানের অহংকার, দুইয়েরই শিকড় এক, আর একটা সত্যই দুটোকে উপড়ে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Wealth Never Proves",
          "bn": "সম্পদ যা কখনো প্রমাণ করে না"
        },
        "p": [
          {
            "en": "Underneath the man's certainty lay a simple error, and Ma'arif al-Qur'an names it. The rich man reasoned that his fortune must mean God was pleased with him, and that any life to come would only add to it. The believer's reply cuts the tie between wealth and favour. Worldly benefit reaches the sinful and the disbelieving as readily as the righteous; it is no certificate of approval. Standing before God turns on faith and deeds, not on the size of a man's harvest.",
            "bn": "লোকটির নিশ্চয়তার তলায় ছিল এক সরল ভুল, আর মাআরিফুল কুরআন সেটার নাম ধরে দেয়। ধনী লোকটা ভেবেছিল, তার সম্পদ মানেই আল্লাহ তার প্রতি খুশি, আর পরকাল বলে কিছু থাকলে সেখানে কেবল আরও যোগ হবে। বিশ্বাসী সাথীর জবাব সম্পদ আর সন্তুষ্টির মধ্যেকার সুতোটাই কেটে দেয়। দুনিয়ার সুবিধা পাপী আর কাফিরের কাছেও নেককারের মতোই পৌঁছায়; এ কোনো সন্তুষ্টির সনদ নয়। আল্লাহর সামনে দাঁড়ানোটা নির্ভর করে ঈমান আর আমলের ওপর, মানুষের ফসলের পরিমাণের ওপর নয়।"
          },
          {
            "en": "It is worth saying plainly what this parable is and is not. It describes a coined example, a type of the proud and heedless heart, set down so that the listener can search for that heart in himself. It passes no verdict on any living person and licenses nothing against anyone rich, nor against any real neighbour or community. The arrogant man of the story is a mirror to look into, not a label to pin on someone else. That is the only use the verse invites.",
            "bn": "এই উপমা কী আর কী নয়, তা সোজাসুজি বলা দরকার। এটা এক গড়ে-তোলা দৃষ্টান্ত, অহংকারী আর উদাসীন মনের একটা ধরন, রাখা হয়েছে যাতে শ্রোতা সেই মনটাকে নিজের ভেতরে খুঁজে দেখে। এ কোনো জীবিত মানুষের ওপর রায় দেয় না, আর কোনো ধনী মানুষ, কোনো বাস্তব প্রতিবেশী বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। কাহিনির অহংকারী লোকটা এক আয়না, তাকিয়ে দেখার জন্য; অন্য কারও গায়ে সাঁটার লেবেল নয়। আয়াত কেবল এই ব্যবহারটুকুই ডেকে আনে।"
          },
          {
            "en": "No sound hadith attaches directly to this verse. The narrations the commentators cite here, the treasure of Paradise in 'no power except with Allah' and the counsel to say 'what Allah wills', belong to the phrases of 18:39 and are best left to their own place. What 18:37 leaves the reader is smaller and harder: a memory. Before the gardens, before the wealth and the men, there was dust and a drop, and Someone who shaped them into you. Hold that, and arrogance has nowhere left to stand.",
            "bn": "এই আয়াতের সঙ্গে সরাসরি কোনো সহীহ হাদীস জোড়া নেই। তাফসীরকারেরা এখানে যে বর্ণনাগুলো আনেন, ‘আল্লাহ ছাড়া কোনো শক্তি নেই’ কথাটির জান্নাতের গুপ্তধন আর ‘আল্লাহ যা চেয়েছেন’ বলার উপদেশ, সেগুলো ১৮:৩৯-এর বাক্যাংশের সঙ্গে জড়িত, আর সেগুলো তাদের নিজ জায়গাতেই থাক। ১৮:৩৭ পাঠকের হাতে যা রেখে যায়, তা ছোট আর কঠিন: একটা স্মৃতি। বাগানের আগে, সম্পদ আর জনবলের আগে ছিল মাটি আর এক ফোঁটা, আর ছিলেন এমন কেউ যিনি সেগুলো দিয়ে তোমাকে গড়েছেন। এটা ধরে রাখো, অহংকারের দাঁড়ানোর আর কোনো জায়গা থাকে না।"
          }
        ]
      }
    ]
  },
  "18:45": {
    "sections": [
      {
        "h": {
          "en": "Between a Verdict and an Adornment",
          "bn": "একটি রায় ও একটি শোভার মাঝখানে"
        },
        "p": [
          {
            "en": "The parable arrives at a precise point. 18:32-44 tells of a man with two gardens who was certain his estate would never perish, and the account ends at 18:44 with the verdict that there the authority belongs to Allah, the Truth, who is best in reward and best in outcome. This verse comes directly after that verdict, and 18:46 comes directly after this one to name wealth and children as the adornment of the life of this world.",
            "bn": "উপমাটি আসে একটি সুনির্দিষ্ট জায়গায়। 18:32-44 বলে দুটি বাগানের মালিক এক ব্যক্তির কথা, যে নিশ্চিত ছিল তার সম্পত্তি কখনো ধ্বংস হবে না; আর বর্ণনাটি শেষ হয় 18:44-এ এই রায় দিয়ে যে সেখানে যাবতীয় কর্তৃত্ব সত্যিকার আল্লাহরই, যিনি পুরস্কারে শ্রেষ্ঠ এবং পরিণামেও শ্রেষ্ঠ। আমাদের এই আয়াতটি আসে সেই রায়ের ঠিক পরেই, আর এর ঠিক পরেই আসে 18:46, যা ধন-সম্পদ ও সন্তানকে দুনিয়ার জীবনের শোভা বলে নাম দেয়।"
          },
          {
            "en": "The order is a widening. First one man and one ruined estate; then the whole of worldly life compressed into a single image; then the two things people actually build their lives around. The parable is not dropped into the surah as general pessimism. It generalises a case the reader has just watched close, and hands its result straight to the verse that follows, which is where the alternative is finally named.",
            "bn": "এই ক্রম একটি ক্রমপ্রসারণ। প্রথমে একজন মানুষ ও একটি ধ্বংস হওয়া সম্পত্তি; তারপর গোটা পার্থিব জীবন একটিমাত্র চিত্রে সংকুচিত; তারপর সেই দুটি জিনিস যেগুলোকে ঘিরে মানুষ আসলে জীবন গড়ে। উপমাটি সূরায় সাধারণ হতাশা হিসেবে ছুড়ে দেওয়া হয়নি। এটি সাধারণীকরণ করে এমন একটি ঘটনাকে যার সমাপ্তি পাঠক সদ্য দেখেছে, আর তার ফলাফল সরাসরি তুলে দেয় পরের আয়াতের হাতে — যেখানে অবশেষে বিকল্পটির নাম বলা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Water, Mingling, Chaff",
          "bn": "পানি, মিশে যাওয়া, খড়কুটো"
        },
        "p": [
          {
            "en": "Wadrib lahum — the verse opens with an imperative to the Prophet ﷺ, and daraba mathalan is the Quran's own idiom for setting up a similitude. Then the image runs in three stages. Kama'in anzalnahu minas-sama, like water We sent down from the sky — the noun is ma', water, which most renderings carry over as rain. Fakhtalata bihi nabatul-ard, so the vegetation of the earth mingled with it. Then fa-asbaha hashiman tadhruhur-riyah — it became hashim, dry and broken, which the winds scatter.",
            "bn": "ওয়াদরিব লাহুম — আয়াতটি শুরু হয় নবী ﷺ-কে দেওয়া একটি নির্দেশ দিয়ে; আর 'দারাবা মাসালান' উপমা দাঁড় করানোর জন্য কুরআনের নিজস্ব বাগ্‌ধারা। এরপর চিত্রটি চলে তিন ধাপে। কামা-ইন আনযালনাহু মিনাস-সামা — সেই পানির মতো যা আমি আকাশ থেকে নামিয়েছি; শব্দটি 'মা' — পানি, যদিও অধিকাংশ অনুবাদে তা 'বৃষ্টি' হয়ে আসে। ফাখতালাতা বিহি নাবাতুল-আরদ — এরপর যমীনের উদ্ভিদ তার সঙ্গে মিশে গেল। তারপর ফা-আসবাহা হাশীমান তাযরূহুর-রিয়াহ — তা হয়ে গেল 'হাশীম', শুকনো ও ভাঙা, যাকে বাতাস উড়িয়ে নিয়ে যায়।"
          },
          {
            "en": "Ibn Kathir explains the mingling as the water mixing with the seeds in the ground so that they grow and turn out well. Hashim comes from a root for crushing something brittle; he glosses it as withered up, and tadhruhu as the winds tossing it right and left. And asbaha literally means it entered upon the morning. The collapse is given no season and no number of years. It is dated to the following morning.",
            "bn": "ইবনে কাসীর 'মিশে যাওয়া'-র ব্যাখ্যা করেন এভাবে: পানি মাটির ভেতরের বীজের সঙ্গে মিশে যায়, ফলে সেগুলো গজিয়ে ওঠে ও ভালোভাবে বেড়ে ওঠে। 'হাশীম' এসেছে এমন ধাতু থেকে যার অর্থ ভঙ্গুর কিছু গুঁড়িয়ে দেওয়া; তিনি এর অর্থ করেন শুকিয়ে যাওয়া, আর 'তাযরূহু'-এর অর্থ করেন বাতাসের ডানে-বাঁয়ে ছুড়ে ফেলা। আর 'আসবাহা'-র আক্ষরিক অর্থ, সকালে উপনীত হলো। ধ্বংসের জন্য কোনো ঋতু বা বছরের সংখ্যা বেঁধে দেওয়া হয়নি। তার তারিখ পরদিন সকাল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Tense of the Fall",
          "bn": "পতনের কাল"
        },
        "p": [
          {
            "en": "Two particles carry the sequence, and both are fa: fakhtalata and fa-asbaha. In Arabic fa means immediate succession, unlike thumma, which allows a gap. So the parable is told in the tense of speed. Set it beside 57:20, which tells the same story using thumma twice — then it dries, and you see it turned yellow, then it becomes hutam. There the eye is allowed to watch the yellowing; here the green is chaff by morning.",
            "bn": "ধারাবাহিকতাটি বহন করে দুটি অব্যয়, আর দুটিই 'ফা': ফাখতালাতা এবং ফা-আসবাহা। আরবিতে 'ফা' মানে অব্যবহিত অনুক্রম — 'সুম্মা'-র মতো নয়, যা ফাঁক খুলে দেয়। তাই উপমাটি বলা হয়েছে দ্রুততার কালে। এর পাশে রাখুন 57:20, যা একই কাহিনি বলে দুইবার 'সুম্মা' ব্যবহার করে — তারপর তা শুকিয়ে যায়, আর তুমি তা হলুদ হয়ে যেতে দেখো, তারপর তা হয়ে যায় 'হুতাম'। সেখানে চোখকে হলুদ হওয়া দেখার সুযোগ দেওয়া হয়; এখানে সবুজ সকালেই খড়কুটো।"
          },
          {
            "en": "Ibn Kathir sets this verse beside three others: 10:24, where the earth takes on its adornment and its people suppose they have power over it before the command comes by night or by day; 39:21, where crops of varying colours dry and yellow and become debris; and 57:20. He also quotes the words Muslim narrates from Abu Sa'id al-Khudri (RA), that this world is sweet and green, and that Allah has appointed you successors in it to see how you will act.",
            "bn": "ইবনে কাসীর এই আয়াতের পাশে রাখেন আরও তিনটি আয়াত: 10:24, যেখানে যমীন নিজের শোভা ধারণ করে আর তার অধিবাসীরা মনে করে তারাই এর উপর ক্ষমতাবান, তারপর রাতে বা দিনে আমার আদেশ এসে পড়ে; 39:21, যেখানে নানা রঙের ফসল শুকিয়ে হলুদ হয়ে যায় ও চূর্ণবিচূর্ণ হয়; আর 57:20। তিনি আরও উদ্ধৃত করেন মুসলিমে আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণিত সেই কথাগুলো: এই দুনিয়া মিষ্টি ও সবুজ, আর আল্লাহ তোমাদের এতে প্রতিনিধি বানিয়েছেন — দেখবেন তোমরা কেমন আমল করো।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ending That Is Not Melancholy",
          "bn": "যে সমাপ্তি বিষাদের নয়"
        },
        "p": [
          {
            "en": "Wa kanallahu 'ala kulli shay'in muqtadira — and Allah is ever, over all things, Perfect in Ability. Muqtadir is an intensive form built on the same root as qadir. The parable could have ended on the chaff and left a taste of futility behind it. Instead it ends on power, and Ibn Kathir's gloss on the clause is blunt: He has the power to do this and that — to send the water down, and to dry up what it raised.",
            "bn": "ওয়া কানাল্লাহু 'আলা কুল্লি শাই'ইন মুক্তাদিরা — আর আল্লাহ সবকিছুর উপর পূর্ণ ক্ষমতাবান। 'মুক্তাদির' গঠিত হয়েছে 'কাদির'-এর একই ধাতু থেকে, তবে এটি জোরদার রূপ। উপমাটি খড়কুটোতেই শেষ হতে পারত এবং পেছনে রেখে যেতে পারত নিরর্থকতার স্বাদ। তার বদলে তা শেষ হয় ক্ষমতার কথায়; আর এই বাক্যাংশ নিয়ে ইবনে কাসীরের ব্যাখ্যা সরাসরি: এটি করার ক্ষমতাও তাঁর, ওটি করারও — পানি নামিয়ে দেওয়ার, আর যা উঠেছিল তা শুকিয়ে দেওয়ার।"
          },
          {
            "en": "That closing name also turns the parable toward resurrection, which is what the Quran usually does with dead and living earth. 35:9 says that He drives the clouds to a dead land and gives life by them to the earth after its lifelessness, and then states plainly: thus is the resurrection. Read with that ending in view, the scattering of the chaff is not the last event in the account. It is a demonstration by the One who is able to gather it again.",
            "bn": "শেষের এই নামটি উপমাটিকে পুনরুত্থানের দিকেও ঘুরিয়ে দেয় — মৃত ও জীবিত যমীন নিয়ে কুরআন সাধারণত এটিই করে। 35:9 বলে, তিনি মেঘকে মৃত ভূখণ্ডের দিকে চালিয়ে নেন এবং তা দিয়ে যমীনকে তার মৃত্যুর পর জীবিত করেন; তারপর স্পষ্ট করে বলে: এভাবেই পুনরুত্থান। এই সমাপ্তি সামনে রেখে পড়লে খড়কুটোর উড়ে যাওয়াই হিসাবের শেষ ঘটনা নয়। তা এমন এক সত্তার প্রদর্শনী, যিনি তা আবার একত্র করতেও সক্ষম।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Your Own Memory",
          "bn": "নিজের স্মৃতিকে পড়া"
        },
        "p": [
          {
            "en": "The verse does not tell anyone to stop planting. Water is sent down, growth is real, and the greenness in the parable is never called an illusion — what is corrected is the estimate of how long it lasts. Anyone past a certain age has already watched one full cycle complete: a job, a house, a circle of friends, a body that used to work differently. The parable asks you to treat that memory as evidence rather than as an unlucky exception.",
            "bn": "আয়াতটি কাউকে চাষ বন্ধ করতে বলে না। পানি নামানো হয়, বৃদ্ধি বাস্তব, আর উপমার সবুজকে কখনো ভ্রান্তি বলা হয়নি — সংশোধন করা হয় একটি হিসাব: তা কতদিন টেকে। একটি বয়স পেরোনো যে কেউ ইতোমধ্যেই একটি পূর্ণ চক্র শেষ হতে দেখেছে: একটি চাকরি, একটি বাড়ি, বন্ধুদের একটি বৃত্ত, এমন একটি শরীর যা আগে অন্যভাবে চলত। উপমাটি চায়, আপনি সেই স্মৃতিকে দুর্ভাগ্যজনক ব্যতিক্রম হিসেবে নয়, প্রমাণ হিসেবে পড়ুন।"
          },
          {
            "en": "What follows in practice is priced attention. The green is worth enjoying and not worth building on, which 18:46 says next in the language of reward and hope. And the closing name is where a person actually stands when something of his is scattered: not in front of a random wind, but before the One who is Perfect in Ability, who sent the water down in the first place and is not diminished by either half of the cycle.",
            "bn": "এর ব্যবহারিক ফল হলো মনোযোগের সঠিক মূল্য নির্ধারণ। সবুজ উপভোগের যোগ্য, কিন্তু তার উপর গড়ে তোলার যোগ্য নয় — পরের আয়াত 18:46 এ কথাটিই বলে পুরস্কার ও আকাঙ্ক্ষার ভাষায়। আর শেষের নামটিই সেই জায়গা, যেখানে মানুষ প্রকৃতপক্ষে দাঁড়িয়ে থাকে যখন তার কিছু উড়ে যায়: কোনো এলোমেলো বাতাসের সামনে নয়, বরং সেই পূর্ণ ক্ষমতাবান সত্তার সামনে, যিনি প্রথমে পানিটি নামিয়েছিলেন এবং যিনি এই চক্রের কোনো অর্ধেকেই কমে যান না।"
          }
        ]
      }
    ]
  },
  "18:46": {
    "sections": [
      {
        "h": {
          "en": "Adornment, Named Honestly",
          "bn": "অলঙ্কার, সৎ নামে ডাকা"
        },
        "p": [
          {
            "en": "Wealth and children are the adornment of the life of this world. The verse does not call them evils, distractions or illusions; it calls them zinah, adornment, and adornment is real. The Quran uses the same word in 18:7 for everything on the earth: We have made what is on it an adornment for it, to test which of them is best in deed. Beauty is admitted from the start; the question the word raises is one of function. Decoration beautifies a building — it does not hold the building up.",
            "bn": "ধন-সম্পদ ও সন্তান-সন্ততি দুনিয়ার জীবনের অলঙ্কার। আয়াতটি এগুলোকে অনিষ্ট, বিভ্রান্তি বা মরীচিকা বলে না; বলে যীনাহ — অলঙ্কার — আর অলঙ্কার বাস্তব জিনিস। কুরআন একই শব্দ ব্যবহার করেছে 18:7 আয়াতে পৃথিবীর বুকের সবকিছুর জন্য: এর ওপর যা আছে আমি তা এর অলঙ্কার বানিয়েছি — পরীক্ষা করতে, কর্মে কে তাদের মধ্যে শ্রেষ্ঠ। সৌন্দর্য গোড়া থেকেই স্বীকৃত; শব্দটি যে প্রশ্ন তোলে তা ভূমিকার প্রশ্ন। কারুকাজ দালানকে সুন্দর করে — দালানটিকে সে ধরে রাখে না।"
          },
          {
            "en": "Placement gives the verse its force. It comes soon after the parable of 18:32-44, where a man with two gardens boasted that he was greater in wealth and men, declared that his estate would never perish — and ended wringing his hands over its ruins. And immediately after our verse, 18:47 shows the Day when the mountains are set moving and the earth is left level and bare. Between a garden that perished and mountains that will, the verse asks what actually remains.",
            "bn": "অবস্থানই আয়াতটিকে তার জোর দেয়। এটি আসে 18:32-44 আয়াতের উপমার অল্প পরেই, যেখানে দুই বাগানের মালিক গর্ব করেছিল যে সম্পদে ও লোকবলে সে বড়, ঘোষণা করেছিল তার এই সম্পত্তি কখনো ধ্বংস হবে না — আর শেষ করেছিল তার ধ্বংসস্তূপের ওপর দুহাত মোচড়াতে মোচড়াতে। আর আমাদের আয়াতটির ঠিক পরেই 18:47 দেখায় সেই দিন, যেদিন পাহাড়গুলোকে চলমান করা হবে আর পৃথিবী পড়ে থাকবে সমতল, অনাবৃত। যে বাগান ধ্বংস হলো আর যে পাহাড় হবে — এই দুইয়ের মাঝখানে দাঁড়িয়ে আয়াতটি জিজ্ঞেস করে: আসলে টিকে থাকে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Enduring Good Deeds",
          "bn": "স্থায়ী সৎকর্মসমূহ"
        },
        "p": [
          {
            "en": "Against the adornment stands al-baqiyat as-salihat, the enduring righteous deeds — better with your Lord in reward, and better as ground for hope. Al-Tabari records early authorities who identified them with the phrases of dhikr — subhanallah, alhamdulillah, la ilaha illallah, Allahu akbar — and he concludes that the description rightly covers every righteous deed whose reward endures. The two readings agree in substance: dhikr is the readiest member of a class that also includes prayer, charity, and every act that outlives its own hour.",
            "bn": "অলঙ্কারের মুখোমুখি দাঁড়িয়ে আল-বাকিয়াতুস-সালিহাত — স্থায়ী সৎকর্মসমূহ — তোমার প্রভুর কাছে প্রতিদানে উত্তম, আর আশার ভিত্তি হিসেবেও উত্তম। আত-তাবারী প্রাথমিক যুগের সেই ইমামদের বক্তব্য লিপিবদ্ধ করেছেন, যাঁরা এগুলোকে চিহ্নিত করেছেন যিকরের বাক্যগুলো দিয়ে — সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার — আর তিনি সিদ্ধান্তে পৌঁছেছেন: বর্ণনাটি যথার্থভাবে ঢেকে নেয় এমন প্রতিটি সৎকর্মকে, যার প্রতিদান স্থায়ী। দুটি পাঠ মর্মে একমত: যিকর সেই শ্রেণির সবচেয়ে হাতের-কাছের সদস্য, যে শ্রেণিতে আরও আছে নামায, দান, এবং নিজের প্রহরকে ছাড়িয়ে বেঁচে থাকা প্রতিটি কাজ।"
          },
          {
            "en": "The grammar of the comparison is exact. Wealth and children are not called bad; the enduring deeds are called khayr, better — better thawaban, in reward, and better amalan, as a thing on which to pin hope. Hope is the telling word. People quietly rest their futures on portfolios and on heirs; the verse relocates hope to deposits that cannot be inherited away from their owner, devalued by any market, or buried alongside the one who earned them.",
            "bn": "তুলনাটির ব্যাকরণ নিখুঁত। ধন-সম্পদ ও সন্তানদের মন্দ বলা হয়নি; স্থায়ী কর্মগুলোকে বলা হয়েছে খাইর — উত্তম: সাওয়াবান, প্রতিদানে উত্তম, আর আমালান — আশা বাঁধার বস্তু হিসেবে উত্তম। আশা-ই এখানে তাৎপর্যময় শব্দ। মানুষ নীরবে নিজের ভবিষ্যৎ রেখে দেয় বিনিয়োগ-খাতায় আর উত্তরাধিকারীদের হাতে; আয়াতটি আশাকে সরিয়ে রাখে এমন আমানতে — যা মালিকের হাতছাড়া হয়ে কারও উত্তরাধিকারে যায় না, কোনো বাজারে যার দর পড়ে না, আর উপার্জনকারীর সঙ্গে যা কবরে চাপা পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Deeds Endure",
          "bn": "কর্ম কেন টিকে থাকে"
        },
        "p": [
          {
            "en": "16:96 states the rule beneath this verse: what is with you runs out, and what is with Allah remains. Wealth is spent, devalued and inherited; children — the dearer adornment — grow into accountable selves of their own, and no parent carries a child's record, nor a child a parent's. But a deed done for Allah crosses the line of death intact. The same phrase returns in 19:76 with the same verdict: the enduring good deeds are better with your Lord in reward and better in final return.",
            "bn": "16:96 আয়াতে এই আয়াতের নিচের নিয়মটি বলা আছে: তোমাদের কাছে যা আছে তা ফুরিয়ে যায়, আর আল্লাহর কাছে যা আছে তা থেকে যায়। সম্পদ খরচ হয়, দর হারায়, উত্তরাধিকারে চলে যায়; সন্তানেরা — অধিক প্রিয় অলঙ্কারটি — বেড়ে উঠে নিজেরাই জবাবদিহিমুখী সত্তা হয়ে যায়; কোনো মা-বাবা সন্তানের আমলনামা বহন করে না, কোনো সন্তানও মা-বাবার। কিন্তু আল্লাহর জন্য করা কাজ মৃত্যুর সীমারেখা পার হয় অক্ষত অবস্থায়। একই শব্দবন্ধ 19:76 আয়াতে ফিরে আসে একই রায় নিয়ে: স্থায়ী সৎকর্মগুলো তোমার প্রভুর কাছে প্রতিদানে উত্তম, আর চূড়ান্ত প্রাপ্তিতেও উত্তম।"
          },
          {
            "en": "The Prophet ﷺ pointed to the lightest members of this class. Al-Bukhari narrates: two phrases, light on the tongue, heavy on the scale, beloved to the Most Merciful — subhanallahi wa bihamdihi, subhanallahil-'azim. The contrast with adornment could hardly be sharper: the world's glitter is heavy to gather and weightless on the scale, while these words cost a single breath and go on weighing.",
            "bn": "নবী ﷺ এই শ্রেণির সবচেয়ে হালকা সদস্যদের দেখিয়ে দিয়েছেন। আল-বুখারী বর্ণনা করেন: দুটি বাক্য — জিহ্বায় হালকা, পাল্লায় ভারী, পরম দয়াময়ের কাছে প্রিয় — সুবহানাল্লাহি ওয়া বিহামদিহি, সুবহানাল্লাহিল-আযীম। অলঙ্কারের সঙ্গে বৈপরীত্য এর চেয়ে তীক্ষ্ণ আর হয় না: দুনিয়ার ঝলমলে জিনিস জোগাড় করা ভারী, অথচ পাল্লায় ভরশূন্য; আর এই শব্দগুলোর দাম একটিমাত্র নিঃশ্বাস — কিন্তু সেগুলোর ওজন চলতেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kahf and the Trial of Wealth",
          "bn": "কাহফ ও সম্পদের পরীক্ষা"
        },
        "p": [
          {
            "en": "Surah al-Kahf is built around trials, and wealth is one of them. Just before this passage, in 18:28 the Prophet ﷺ is told to keep himself patient alongside those who call on their Lord morning and evening, and not to let his eyes pass beyond them out of desire for the adornment of worldly life — the same word, zinah, again. The surah's remedy for the money-trial begins with company: sit with people whose wealth is remembrance.",
            "bn": "সূরা আল-কাহফ গড়ে উঠেছে পরীক্ষাগুলো ঘিরে, আর সম্পদ তারই একটি। এই অনুচ্ছেদের ঠিক আগে, 18:28 আয়াতে নবী ﷺ-কে বলা হয়েছে — যারা সকাল-সন্ধ্যায় তাদের প্রভুকে ডাকে তাদের সঙ্গে নিজেকে ধৈর্যের সাথে ধরে রাখতে, আর দুনিয়ার জীবনের অলঙ্কারের লোভে চোখ যেন তাদের ছাড়িয়ে না যায় — সেই একই শব্দ, যীনাহ, আবারও। সম্পদের পরীক্ষার জন্য সূরাটির প্রতিকার শুরু হয় সঙ্গ দিয়ে: এমন মানুষদের সাথে বসো, যাদের ধন হলো স্মরণ।"
          },
          {
            "en": "3:14 lists what has been beautified for people — women and sons, heaped-up treasures of gold and silver, branded horses, cattle and tilth — and then says that with Allah is the best of returns. The Quran never pretends these things are unattractive; it out-bids them. 18:46 belongs to that same method: it grants the beauty of what you hold, then names something better in the only two currencies that survive the audit, reward and hope.",
            "bn": "3:14 আয়াতে তালিকা দেওয়া আছে মানুষের জন্য যা কিছু সুশোভিত করা হয়েছে — নারী ও পুত্রসন্তান, স্তূপীকৃত সোনা-রুপার ভান্ডার, চিহ্নিত ঘোড়া, গবাদিপশু ও ক্ষেত-খামার — তারপর বলা হয়েছে: আল্লাহর কাছেই আছে উত্তম প্রত্যাবর্তনস্থল। কুরআন কখনো ভান করে না যে এসব আকর্ষণীয় নয়; বরং সে এগুলোর চেয়ে বড় দর হাঁকে। 18:46 সেই একই পদ্ধতির অন্তর্গত: তোমার হাতে যা আছে তার সৌন্দর্য মেনে নেয়, তারপর নাম করে এর চেয়ে উত্তম কিছুর — কেবল যে দুটি মুদ্রা শেষ হিসাব পার হয়ে টেকে সেই দুটিতে: প্রতিদান আর আশা।"
          }
        ]
      },
      {
        "h": {
          "en": "Converting the Decoration",
          "bn": "অলঙ্কারকে রূপান্তর করা"
        },
        "p": [
          {
            "en": "The verse is not an order to renounce; it is an order to rank — and ranked rightly, the adornment itself can be converted. Al-Bukhari narrates that a man's spending on his family, done seeking Allah's reward, is counted for him as charity. And Muslim narrates that when a person dies, his deeds end except three: ongoing charity, knowledge that benefits, and a righteous child who prays for him. Wealth and children, the two adornments of this verse, both appear there — transformed into enduring deeds.",
            "bn": "আয়াতটি ত্যাগের আদেশ নয়; ক্রম নির্ধারণের আদেশ — আর ঠিকভাবে ক্রম সাজালে অলঙ্কার নিজেই রূপান্তরযোগ্য। আল-বুখারী বর্ণনা করেন, আল্লাহর প্রতিদানের আশায় করা হলে পরিবারের জন্য একজন মানুষের খরচও তার জন্য দান হিসেবে গণ্য হয়। আর মুসলিম বর্ণনা করেন, মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: চলমান দান, উপকারে আসা জ্ঞান, আর নেককার সন্তান যে তার জন্য দোয়া করে। এই আয়াতের দুই অলঙ্কার — সম্পদ ও সন্তান — দুটিই সেখানে হাজির: স্থায়ী কর্মে রূপান্তরিত হয়ে।"
          },
          {
            "en": "So the daily practice this verse asks for is a transfer: keep converting the decoration into the durable. Close some minutes of each day with the phrases of dhikr the early commentators named; attach intention to the month's spending; teach a child something that will keep speaking after you have stopped. Then enjoy the adornment with a free heart — decoration is most pleasant, in a house or in a life, exactly when nothing essential has been made to rest on it.",
            "bn": "তাহলে এই আয়াত যে দৈনিক অনুশীলন চায় তা এক স্থানান্তর: সাজসজ্জাকে টেকসইয়ে রূপান্তর করতে থাকো। দিনের কিছু মিনিট শেষ করুন প্রাথমিক যুগের মুফাসসিরদের নাম-করা যিকরের বাক্যগুলো দিয়ে; মাসের খরচের সঙ্গে নিয়ত জুড়ে দিন; একটি শিশুকে এমন কিছু শেখান, আপনার থেমে যাওয়ার পরেও যা কথা বলে যাবে। তারপর মুক্ত হৃদয়ে অলঙ্কার উপভোগ করুন — ঘরে হোক বা জীবনে, কারুকাজ সবচেয়ে মধুর ঠিক তখনই, যখন অত্যাবশ্যক কোনো কিছুকে তার ওপর ভর দিয়ে দাঁড় করানো হয়নি।"
          }
        ]
      }
    ]
  },
  "18:50": {
    "sections": [
      {
        "h": {
          "en": "Told Again, Aimed Anew",
          "bn": "আবার বলা, নতুন লক্ষ্য"
        },
        "p": [
          {
            "en": "The prostration to Adam is told across several surahs, and by al-Kahf its outline is already familiar. At-Tabari opens the verse not as fresh narration but as a reminder aimed at the idolaters: it recalls how Iblis envied their father and grew proud when told to bow, and it warns that he carries the same enmity toward them. So the surah's weight here does not fall on the old scene. It falls on the question that the scene is dragged forward to ask a living listener.",
            "bn": "আদমকে সিজদার ঘটনা কুরআনের কয়েকটি সূরায় এসেছে, তাই কাহফে পৌঁছে এর রূপরেখা আগে থেকেই চেনা। তাবারী এই আয়াতকে নতুন কোনো কাহিনি হিসেবে শুরু করেন না, বরং মুশরিকদের উদ্দেশে এক স্মরণ হিসেবে। এতে মনে করিয়ে দেওয়া হয়, সিজদার হুকুম পেয়ে ইবলিস কীভাবে তাদের পিতাকে হিংসা করেছিল আর অহংকারে ফুলে উঠেছিল, আর সতর্ক করা হয় যে তাদের প্রতিও তার সেই একই শত্রুতা। তাই সূরার ভার এখানে পুরোনো দৃশ্যের ওপর পড়ে না। পড়ে সেই প্রশ্নের ওপর, যে প্রশ্ন করার জন্যই দৃশ্যটাকে টেনে আনা হয়েছে জীবিত এক শ্রোতার সামনে।"
          },
          {
            "en": "Ibn Kathir reads the whole verse as a rebuke. God warns the children of Adam of the enmity of Iblis toward them and toward their father before them, and reproaches those who follow him against the very Creator who made them from nothing and sustains them by His kindness. The bow the angels made, Ibn Kathir adds, was a prostration of honour and respect, not of worship. What al-Kahf then presses is why a creature would honour Iblis and defy the One so owed.",
            "bn": "ইবন কাসীর গোটা আয়াতটিকেই এক ভর্ৎসনা হিসেবে পড়েন। আল্লাহ আদম-সন্তানদের সতর্ক করছেন তাদের প্রতি ও তাদের আগে তাদের পিতার প্রতি ইবলিসের শত্রুতা নিয়ে, আর তিরস্কার করছেন তাদের, যারা নিজের স্রষ্টার বিরুদ্ধে গিয়ে তার অনুসরণ করে। সেই স্রষ্টা শূন্য থেকে তাদের গড়েছেন আর দয়া করে লালন করছেন। ইবন কাসীর যোগ করেন, ফেরেশতাদের সিজদা ছিল সম্মান ও মর্যাদার, ইবাদতের নয়। কাহফ তখন যা সামনে আনে তা হলো : কেন কোনো সৃষ্টি ইবলিসকে সম্মান দেবে আর যাঁর কাছে সে একমাত্র ঋণী তাঁকেই অমান্য করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Was He of the Jinn?",
          "bn": "সে কি জ্বীনদের একজন?"
        },
        "p": [
          {
            "en": "The clause 'he was of the jinn' split the commentators, and the split is worth keeping open. Al-Hasan al-Basri held that Iblis was never an angel, not for the blink of an eye, but was the origin of the jinn just as Adam is the origin of mankind. Ibn Kathir reports this from al-Hasan through Ibn Jarir with a sound chain, and both at-Tabari and al-Baghawi carry the same saying. On this reading, the exception in 'they prostrated, except Iblis' marks out a being of a different make from the very start.",
            "bn": "'সে ছিল জ্বীনদের অন্তর্ভুক্ত।' এই টুকরোটি নিয়ে তাফসিরকারদের মত ভাগ হয়ে গেছে, আর সেই ভাগটা খোলা রাখাই ঠিক। হাসান বসরি বলেন, ইবলিস চোখের পলকের জন্যও কখনো ফেরেশতা ছিল না; বরং আদম যেমন মানবজাতির মূল, তেমনি সে জ্বীনদের মূল। ইবন কাসীর এ কথা হাসান থেকে ইবন জারিরের সূত্রে সহিহ সনদে বর্ণনা করেন, আর তাবারী ও বাগভী দুজনেও একই বক্তব্য আনেন। এই পাঠে ব্যতিক্রমটি, অর্থাৎ 'তারা সিজদা করল, ইবলিস ছাড়া', এমন এক সত্তাকে আলাদা করে দেখায় যে গোড়া থেকেই ভিন্ন গড়নের।"
          },
          {
            "en": "The other side runs through Ibn Abbas. In reports he transmits, Iblis belonged to a clan of angels called 'the jinn,' created from the fire of the scorching wind among the angels, and he was a keeper of the Garden; Ibn Abbas even argues that had he not been of the angels, he would not have been included in the command to prostrate. At-Tabari gathers a further gloss: some said he was called 'of the jinn' because such beings conceal themselves from human sight, and some because he guarded the Garden and was named after it.",
            "bn": "অন্য পক্ষটি এসেছে ইবন আব্বাসের সূত্রে। তাঁর বর্ণনায়, ইবলিস ছিল ফেরেশতাদের এমন এক গোত্রের, যাদের বলা হতো 'জ্বীন', যারা ফেরেশতাদের মধ্যে সৃষ্টি হয়েছিল প্রখর লু-হাওয়ার আগুন থেকে; আর সে ছিল জান্নাতের এক রক্ষক। ইবন আব্বাস তো যুক্তি দেন, সে ফেরেশতাদের না হলে সিজদার হুকুমের ভেতর তাকে ধরাই হতো না। তাবারী আরও একটি ব্যাখ্যা জড়ো করেন : কেউ বলেন তাকে 'জ্বীন' বলা হয়েছে কারণ এ ধরনের সত্তা মানুষের চোখ থেকে নিজেকে আড়াল করে, আর কেউ বলেন সে জান্নাতের রক্ষক ছিল বলে তার নামেই এই নিসবত।"
          },
          {
            "en": "At-Tabari lines these views up without ruling between them, and Ibn Kathir sounds a caution: many of the fuller stories, that Iblis was a noble angel named Azazil, or that he ruled the lowest heaven, come from Israelite lore passed on only to be examined, and the Qur'an stands in no need of them. So the honest report is a disagreement left standing. What the verse fixes is not his species but his choice.",
            "bn": "তাবারী মতগুলো পাশাপাশি সাজিয়ে দেন, কোনটি সঠিক তা বলেন না; আর ইবন কাসীর একটা সতর্কবাণী শোনান। বড় বড় কাহিনির অনেকটাই, যেমন ইবলিস ছিল আজাজিল নামের এক মহান ফেরেশতা, কিংবা সে সর্বনিম্ন আসমানের শাসক ছিল, এসব এসেছে ইসরাইলি বর্ণনা থেকে, যা কেবল যাচাইয়ের জন্যই বলা হয়; কুরআনের এসবের কোনো দরকার নেই। তাই খাঁটি রিপোর্ট হলো, মতভেদটা মতভেদ হিসেবেই থাক। আয়াত যা নিশ্চিত করে তা তার প্রজাতি নয়, তার পছন্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "Departing the Command",
          "bn": "হুকুম থেকে বেরিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "Then 'he departed from the command of his Lord.' At-Tabari takes the verb fasaqa in its plain Arabic weight: he went out, swerved and turned aside from what he was ordered. He reaches for ordinary speech to show it, the way Arabs say a ripe date has fasaqa when it slips from its skin, or a mouse has fasaqa when it bolts from its hole to do damage. Ibn Kathir gives the same sense: fisq is a stepping outside, a walking clear of the bounds of obedience.",
            "bn": "তারপর 'সে তার রবের হুকুম থেকে বেরিয়ে গেল।' তাবারী ফাসাকা শব্দটিকে তার সাদামাটা আরবি ওজনেই নেন : সে বেরিয়ে গেল, হুকুম থেকে সরে গেল, ফিরে গেল। এটা বোঝাতে তিনি সাধারণ কথা টেনে আনেন। আরবরা বলে, পাকা খেজুর 'ফাসাকা' করেছে যখন তা খোসা ছেড়ে বেরোয়, কিংবা ইঁদুর 'ফাসাকা' করেছে যখন সে গর্ত ছেড়ে ক্ষতি করতে ছোটে। ইবন কাসীর একই অর্থ দেন : ফিসক মানে বাইরে পা রাখা, আনুগত্যের সীমা ছেড়ে হেঁটে যাওয়া।"
          },
          {
            "en": "What he stepped out of was obedience, and its root was pride. At-Tabari's own opening names the sin as arrogance and as envy of Adam, and al-Muyassar says flatly that Iblis did not bow out of pride and jealousy. Mujahid, quoted by at-Tabari, pins the departure to the exact moment: he disobeyed in the matter of prostrating to Adam. As-Sa'di lets Iblis convict himself with words the Qur'an records elsewhere, 'Shall I bow to one You made from clay?' and 'I am better than he.'",
            "bn": "যে জিনিস থেকে সে বেরিয়ে গেল তা হলো আনুগত্য, আর তার মূলে অহংকার। তাবারীর নিজের শুরুতেই এই গুনাহকে বলা হয় অহংকার আর আদমের প্রতি হিংসা, আর মুয়াসসার সাফ বলে দেয়, ইবলিস অহংকার আর হিংসার কারণেই সিজদা করেনি। তাবারীর উদ্ধৃত মুজাহিদ এই বেরিয়ে যাওয়াকে ঠিক মুহূর্তটির সঙ্গে বেঁধে দেন : সে আদমকে সিজদার ব্যাপারেই নাফরমানি করেছিল। সাদী ইবলিসকে তার নিজের কথাতেই দোষী সাব্যস্ত করেন, যে কথা কুরআন অন্যত্র রাখে : 'যাকে তুমি মাটি দিয়ে গড়েছ এমন একজনকে কি আমি সিজদা করব?' আর 'আমি তার চেয়ে উত্তম।'"
          }
        ]
      },
      {
        "h": {
          "en": "Light and Smokeless Fire",
          "bn": "আলো ও ধোঁয়াহীন আগুন"
        },
        "p": [
          {
            "en": "The origin behind the refusal is set down in a sound hadith. In Sahih Muslim, Aisha (may Allah be pleased with her) reports that the Prophet, peace be upon him, said: 'The angels were created from light, the jinn were created from a smokeless flame of fire, and Adam was created from what has been described to you.' The report stands in Muslim's Sahih, so its soundness is settled. It names the raw stuff of each kind of creature.",
            "bn": "অস্বীকারের পেছনের উৎসটা এক সহিহ হাদিসে বলা আছে। সহিহ মুসলিমে আয়িশা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন : 'ফেরেশতাদের সৃষ্টি করা হয়েছে আলো থেকে, জ্বীনদের সৃষ্টি করা হয়েছে ধোঁয়াহীন আগুনের শিখা থেকে, আর আদমকে সৃষ্টি করা হয়েছে যা তোমাদের কাছে বর্ণনা করা হয়েছে তা থেকে।' হাদিসটি মুসলিমের সহিহ গ্রন্থে আছে, তাই এর সহিহ হওয়া নিয়ে সংশয় নেই। এটি প্রতিটি সৃষ্টির মূল উপাদানের নাম বলে দেয়।"
          },
          {
            "en": "Ibn Kathir cites this very hadith at 'he was of the jinn': Iblis was made from a smokeless flame while the angels were made from light, and 'when the need comes, every vessel spills what it holds.' His nature, kept hidden while he worshipped among the angels, betrayed him at the test. Yet notice what the hadith settles and what it does not. It fixes the material of each creation; it does not by itself decide the older dispute over whether Iblis was angel or jinn, which is why the commentators still weigh the clause so carefully.",
            "bn": "ইবন কাসীর ঠিক 'সে ছিল জ্বীনদের অন্তর্ভুক্ত' কথাটির নিচে এই হাদিসটিই টানেন : ইবলিসকে গড়া হয়েছিল ধোঁয়াহীন শিখা থেকে, আর ফেরেশতাদের আলো থেকে, আর 'দরকারের সময় প্রতিটি পাত্র তার ভেতরের জিনিস উগরে দেয়।' ফেরেশতাদের সঙ্গে ইবাদত করার সময় তার আসল স্বভাব ঢাকা ছিল, পরীক্ষার মুখে সেটাই তাকে ধরিয়ে দিল। তবে খেয়াল করুন, হাদিসটি কী মীমাংসা করে আর কী করে না। এটি প্রতিটি সৃষ্টির উপাদান ঠিক করে দেয়; ইবলিস ফেরেশতা না জ্বীন সেই পুরোনো তর্ক নিজে থেকে মেটায় না। এ কারণেই তাফসিরকারেরা আজও কথাটির ওজন এত যত্ন করে করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Did Iblis Have Offspring?",
          "bn": "ইবলিসের কি বংশধর ছিল?"
        },
        "p": [
          {
            "en": "'And his offspring,' the verse adds. Ma'arif al-Quran reads the word to show that Iblis has descendants and a host of followers, and notes that some commentators take 'progeny' here to mean his accomplices, so offspring from his loins is not strictly required. At-Tabari carries both readings side by side: Qatada says they breed as the children of Adam breed, while Ibn Zayd calls Iblis the father of the jinn as Adam is the father of mankind, with a devil paired to every human born.",
            "bn": "'আর তার বংশধরকে' — আয়াত যোগ করে। মাআরিফুল কুরআন শব্দটি থেকে বোঝে যে ইবলিসের বংশধর আছে, আছে অনুসারীদের এক দল; আর জানায় যে কোনো কোনো তাফসিরকার এখানে 'বংশধর' মানে নেন তার সহযোগীরা, তাই তার ঔরসজাত সন্তান হওয়া অপরিহার্য নয়। তাবারী দুই পাঠই পাশাপাশি রাখেন : কাতাদা বলেন তারা আদম-সন্তানদের মতোই বংশবৃদ্ধি করে, আর ইবন যায়দ ইবলিসকে বলেন জ্বীনদের পিতা, যেমন আদম মানবজাতির পিতা, আর জন্ম নেওয়া প্রতিটি মানুষের সঙ্গে জোড়া থাকে এক শয়তান।"
          },
          {
            "en": "Al-Qurtubi lays the debate out frankly. Some hold that Iblis has children from his loins; others say he has none, and that 'his offspring' are simply his helpers among the devils. Ibn Atiyya reads the plain sense as the whispering devils who push people toward wrong. Al-Qushayri draws it together: God has told us Iblis has followers and offspring who whisper to the children of Adam and are their enemies, but the manner of their reproduction is not fixed for us and waits upon a sound transmission.",
            "bn": "কুরতুবী বিতর্কটা খোলাখুলি তুলে ধরেন। কেউ বলেন ইবলিসের ঔরসজাত সন্তান আছে, কেউ বলেন কিছুই নেই, আর 'তার বংশধর' মানে কেবল শয়তানদের মধ্যে তার সহযোগীরা। ইবন আতিয়্যা সাদামাটা অর্থ নেন সেই কুমন্ত্রণাদাতা শয়তানদের, যারা মানুষকে খারাপের দিকে ঠেলে দেয়। কুশায়রি সবটা একত্র করেন : আল্লাহ আমাদের জানিয়েছেন ইবলিসের অনুসারী ও বংশধর আছে, যারা আদম-সন্তানদের কানে ফিসফিস করে আর তাদের শত্রু; তবে তাদের বংশবৃদ্ধির ধরন আমাদের কাছে নির্ধারিত নয়, তা নির্ভর করে কোনো সহিহ বর্ণনার ওপর।"
          },
          {
            "en": "What is sound, al-Qurtubi and Ma'arif agree, is a hadith that Humaidi placed in his Combination of the Two Sahihs, from Salman: the Prophet, peace be upon him, told him not to be the first to enter the market or the last to leave it, for there the devil lays his eggs and hatches his brood. As for the named devils that some lists supply, Ibn Atiyya notes that they rest on chains that are not sound, except that Muslim records a devil of the prayer called Khinzab, and at-Tirmidhi mentions one of the ablution called al-Walahan.",
            "bn": "যা সহিহ, তা নিয়ে কুরতুবী আর মাআরিফ একমত : হুমাইদি তাঁর 'দুই সহিহের সংকলন'-এ সালমান থেকে যে হাদিস এনেছেন। নবী ﷺ তাঁকে বলেছিলেন, বাজারে প্রথম ঢোকা লোকও যেন না হন, শেষে বেরোনো লোকও না; কারণ সেখানেই শয়তান তার ডিম পাড়ে আর বাচ্চা ফোটায়। আর কিছু তালিকায় শয়তানদের যে নাম দেওয়া হয়, ইবন আতিয়্যা বলেন সেগুলো সহিহ সনদে দাঁড়ায় না, কেবল মুসলিম নামাজের একটি শয়তানের কথা বলেন যার নাম খিনজাব, আর তিরমিযী ওজুর একটি শয়তানের কথা আনেন যার নাম আল-ওয়ালাহান।"
          }
        ]
      },
      {
        "h": {
          "en": "An Enemy Taken as Guardian",
          "bn": "শত্রুকে বানানো অভিভাবক"
        },
        "p": [
          {
            "en": "Now the verse wheels on its listener. Al-Qurtubi says God halts the disbelievers by way of reproach with the words 'will you then take him?' At-Tabari expands the charge: will you, children of Adam, befriend and obey the very one who scorned your father, envied him, and coaxed him out of the Garden into a narrow life on earth, while you turn from the Lord who honoured you, who had His angels bow to your father and poured on you gifts beyond counting? The question answers itself.",
            "bn": "এবার আয়াত ঘুরে দাঁড়ায় তার শ্রোতার দিকে। কুরতুবী বলেন, আল্লাহ 'তাহলে তোমরা কি তাকে গ্রহণ করবে?' এই কথায় অস্বীকারকারীদের ভর্ৎসনার সুরে থামিয়ে দেন। তাবারী অভিযোগটা খুলে বলেন : তোমরা কি, হে আদম-সন্তান, সেই একজনকেই বন্ধু বানাবে আর তার হুকুম মানবে, যে তোমাদের পিতাকে তুচ্ছ করেছে, তাঁকে হিংসা করেছে, আর ফুসলিয়ে জান্নাত থেকে দুনিয়ার সংকীর্ণ জীবনে নামিয়েছে; অথচ মুখ ফেরাবে সেই রবের কাছ থেকে, যিনি তোমাদের সম্মান দিয়েছেন, তোমাদের পিতাকে ফেরেশতাদের দিয়ে সিজদা করিয়েছেন, আর তোমাদের ওপর ঢেলে দিয়েছেন অগণিত নিয়ামত? প্রশ্নটাই নিজের জবাব।"
          },
          {
            "en": "As-Sa'di frames it as a choice between two guardianships. On one side stands Iblis, who commands nothing but indecency and wrong; on the other stands the Most Merciful, in whose guardianship lies every happiness, success and joy. The verse, he says, is itself a push to take Satan as an enemy, since no one but a wrongdoer would take his true enemy as a friend. He seals it with God's own word: 'Allah is the ally of those who believe; He brings them out of the darknesses into the light' (2:257).",
            "bn": "সাদী একে দাঁড় করান দুই অভিভাবকত্বের মাঝে এক পছন্দ হিসেবে। একদিকে ইবলিস, যে অশ্লীলতা আর অন্যায় ছাড়া কিছুরই হুকুম দেয় না; অন্যদিকে পরম দয়াময়, যাঁর অভিভাবকত্বেই আছে সমস্ত সুখ, সফলতা আর আনন্দ। আয়াতটি নিজেই, তিনি বলেন, শয়তানকে শত্রু হিসেবে নেওয়ার একটি তাগিদ; কারণ জালিম ছাড়া আর কেউ নিজের আসল শত্রুকে বন্ধু বানায় না। তিনি এতে সিলমোহর দেন আল্লাহর নিজের কথায় : 'আল্লাহ মুমিনদের অভিভাবক; তিনি তাদের অন্ধকার থেকে আলোর দিকে বের করে আনেন' (২:২৫৭)।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wretched Exchange",
          "bn": "নিকৃষ্ট বিনিময়"
        },
        "p": [
          {
            "en": "'Wretched, for the wrongdoers, as an exchange.' Qatada, quoted by both at-Tabari and al-Baghawi, reads it as the ruin of a trade: wretched is what they took in exchange when they obeyed Iblis in place of worshipping their Lord. Al-Qurtubi glosses it the same way, wretched is the worship of Satan set in the place of the worship of God. As-Sa'di drives the point home: no injustice is greater than a man who takes his real enemy for a guardian and abandons the praiseworthy Protector.",
            "bn": "'জালিমদের জন্য বিনিময় হিসেবে তা কতই না নিকৃষ্ট।' তাবারী ও বাগভী দুজনের উদ্ধৃত কাতাদা একে পড়েন এক কারবারের সর্বনাশ হিসেবে : নিকৃষ্ট সেই জিনিস যা তারা বিনিময়ে নিল, যখন রবের ইবাদত ছেড়ে তারা ইবলিসের হুকুম মানল। কুরতুবী একইভাবে ব্যাখ্যা করেন, নিকৃষ্ট হলো আল্লাহর ইবাদতের জায়গায় বসানো শয়তানের ইবাদত। সাদী কথাটা গেঁথে দেন : তার চেয়ে বড় জুলুম আর নেই, যে তার আসল শত্রুকে অভিভাবক বানায় আর প্রশংসিত রক্ষককে ছেড়ে দেয়।"
          },
          {
            "en": "This needs saying plainly. The verse condemns a choice, not a class of living people. It describes the wrongdoers' exchange, the trading of the worship of God for obedience to His enemy, and it licenses nothing against any living person or community. Its summons is turned inward, on the reader's own loyalty; it is an invitation to see a bad bargain for what it is and to undo it while there is still time, not a warrant to judge anyone else's heart.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত একটি পছন্দকে নিন্দা করে, জীবিত কোনো মানুষের দলকে নয়। এটি জালিমদের সেই বিনিময়ের বর্ণনা দেয়, যেখানে আল্লাহর ইবাদত বেচে তাঁর শত্রুর আনুগত্য কেনা হয়; আর জীবিত কোনো ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এর ডাক ভেতরের দিকে ফেরানো, পাঠকের নিজের আনুগত্যের দিকে। এ হলো এক লোকসানি কারবারকে চিনে নিয়ে সময় থাকতে তা ভেঙে ফেলার আহ্বান, অন্য কারও অন্তরের বিচার করার সনদ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Choice Left Open",
          "bn": "খোলা রাখা এক পছন্দ"
        },
        "p": [
          {
            "en": "Al-Kahf keeps to one edge of the old story here. Not the drama of the fall but the choice of a master is what it sets before you: Iblis and his kind offered as protectors 'apart from Me,' with the decision left on your side of the line. As-Sa'di's reading holds the whole of it. Every happiness lies in the guardianship you were offered, and every loss in the one you were warned against, so the enemy named here is an enemy worth naming twice.",
            "bn": "কাহফ এখানে পুরোনো কাহিনির একটি প্রান্তেই থাকে। পতনের নাটক নয়, বরং কোন প্রভুকে বাছবেন সেই পছন্দটাই সে আপনার সামনে রাখে : ইবলিস আর তার দলকে 'আমাকে বাদ দিয়ে' অভিভাবক হিসেবে দেখানো হচ্ছে, আর সিদ্ধান্তটা রেখে দেওয়া হচ্ছে আপনার দিকেই। সাদীর পাঠ পুরোটা ধরে রাখে। যে অভিভাবকত্ব আপনাকে দেওয়া হয়েছিল তাতেই সমস্ত সুখ, আর যেটির বিরুদ্ধে সতর্ক করা হয়েছিল তাতেই সমস্ত লোকসান; তাই এখানে যে শত্রুর নাম বলা হলো, সে এমন শত্রু যার নাম বারবার বলা দরকার।"
          },
          {
            "en": "So the verse asks a plain thing. The enemy is named, the trade is priced, and the turning is left in your hands. It does not stop here to answer every claim Satan makes for himself; that comes in what follows. What it presses now is loyalty. You were made and are kept alive by One who honoured you, and you are courted by another who was your enemy from the first day and wishes only your ruin, and between those two the verse asks whom you will call your guardian.",
            "bn": "তাই আয়াত সোজা একটা জিনিস চায়। শত্রুকে নাম ধরে বলা হয়েছে, কারবারের দাম বেঁধে দেওয়া হয়েছে, আর ফেরাটা রাখা হয়েছে আপনার হাতে। শয়তান নিজের সম্পর্কে যেসব দাবি করে তার প্রতিটির জবাব দিতে আয়াত এখানে থামে না; সেটা আসে পরের অংশে। এখন যা সে সামনে আনে তা হলো আনুগত্য। আপনাকে গড়েছেন আর বাঁচিয়ে রাখছেন এমন একজন, যিনি আপনাকে সম্মান দিয়েছেন; আর আপনাকে টানছে আরেকজন, যে প্রথম দিন থেকেই আপনার শত্রু আর কেবল আপনার সর্বনাশ চায়। এই দুইয়ের মাঝে আয়াত জিজ্ঞেস করে, কাকে আপনি অভিভাবক বলবেন।"
          }
        ]
      }
    ]
  },
  "18:109-110": {
    "sections": [
      {
        "h": {
          "en": "The Sea and the Words",
          "bn": "সমুদ্র ও কালিমাসমূহ"
        },
        "p": [
          {
            "en": "Surah al-Kahf closes with two verses that work as a pair. The first, 18:109, gives an image: say, if the sea were ink for the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted, even if We brought the like of it as replenishment. The surah has just spent its length on knowledge — the sleepers whose count only Allah knows, Musa (AS) schooled by a servant given knowledge from Allah, Dhul-Qarnayn's journeys — and now it prices all of it.",
            "bn": "সূরা আল-কাহফ শেষ হয় এমন দুটি আয়াতে যারা জোড়ায় কাজ করে। প্রথমটি, 18:109, একটি চিত্র দেয়: বলো, আমার রবের কালিমাসমূহ লেখার জন্য সমুদ্র যদি কালি হতো, তবে আমার রবের কালিমা শেষ হওয়ার আগেই সমুদ্র ফুরিয়ে যেত — যদিও আমি তার মতো আরও এনে জোগান দিতাম। সূরাটি তার গোটা দৈর্ঘ্য জ্ঞান নিয়েই কাটিয়েছে — গুহাবাসীরা, যাদের সংখ্যা কেবল আল্লাহই জানেন; মূসা (আঃ), যিনি শিক্ষা নেন আল্লাহর দেওয়া জ্ঞানপ্রাপ্ত এক বান্দার কাছে; যুলকারনাইনের অভিযাত্রা — আর এখন সে এই সবকিছুর দাম নির্ধারণ করে।"
          },
          {
            "en": "The commentators read the words of my Lord as His knowledge, His decrees, His speech — that which He could say, without end. The image is built for a mind that cannot picture infinity but can picture the sea. Then the verse quietly doubles the impossible: even resupplied with another sea, and another, the ink side fails first. A parallel in 31:27 adds every tree on earth as pens and the sea replenished after it by seven more seas, with the same result: the words of Allah would not run out.",
            "bn": "মুফাসসিরগণ 'আমার রবের কালিমা'-কে পড়েন তাঁর জ্ঞান, তাঁর ফয়সালা, তাঁর বাণী অর্থে — যা তিনি বলতে পারতেন, অন্তহীনভাবে। চিত্রটি এমন মনের জন্য গড়া, যে অসীম কল্পনা করতে পারে না কিন্তু সমুদ্র কল্পনা করতে পারে। তারপর আয়াতটি নীরবে অসম্ভবকে দ্বিগুণ করে: আরেকটি সমুদ্র, তারপর আরেকটি দিয়ে জোগান দিলেও, কালির দিকটাই আগে হারবে। 31:27 আয়াতের সমান্তরাল চিত্রটি এতে যোগ করে পৃথিবীর সব গাছ কলম হিসেবে আর সমুদ্র — যার পরে আরও সাত সমুদ্র জোগান দেয় — ফলাফল একই: আল্লাহর কালিমা ফুরাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Only a Man Like You",
          "bn": "কেবল তোমাদের মতো একজন মানুষ"
        },
        "p": [
          {
            "en": "Then 18:110 executes one of the sharpest descents in the Quran: say, I am only a man like you, to whom it is revealed that your God is one God. After an ocean that cannot carry His words, the listener might expect the messenger of such a Lord to be more than human. The verse forbids the thought. The Prophet ﷺ shares our nature entirely; what distinguishes him is wahy, revelation — a channel opened, not a nature changed.",
            "bn": "এরপর 18:110 কুরআনের অন্যতম তীক্ষ্ণ অবতরণ ঘটায়: বলো, আমি কেবল তোমাদের মতোই একজন মানুষ, আমার কাছে ওহী করা হয় যে তোমাদের ইলাহ এক ইলাহ। যে সমুদ্র তাঁর কালিমা বইতে পারে না, তার পরে শ্রোতা ভাবতেই পারত — এমন রবের রাসূল নিশ্চয়ই মানুষের চেয়ে বেশি কিছু। আয়াতটি সেই ভাবনা নিষেধ করে। নবী ﷺ আমাদের প্রকৃতির পুরোপুরি অংশীদার; তাঁকে যা আলাদা করে তা ওহী — একটি খুলে দেওয়া প্রণালী, বদলে দেওয়া প্রকৃতি নয়।"
          },
          {
            "en": "The pairing is deliberate theology. Communities that lost their prophets' teaching drifted in one of two directions: deifying the messenger, or dismissing the message because the messenger was human. Setting the limitless words of 18:109 directly beside the mortal messenger of 18:110 blocks both roads at once. The greatness belongs to the One who speaks; the man who delivers the speech eats, sleeps and will die, and his humanity is not a flaw in the message but its proof of reach.",
            "bn": "এই জোড়বাঁধা এক সুচিন্তিত আকীদা-শিক্ষা। যেসব জাতি তাদের নবীদের শিক্ষা হারিয়েছে, তারা দুই দিকের কোনো এক দিকে ভেসে গেছে: হয় বার্তাবাহককে উপাস্য বানিয়েছে, নয়তো বার্তাবাহক মানুষ বলে বার্তাকেই নাকচ করেছে। 18:109 আয়াতের সীমাহীন কালিমাকে 18:110 আয়াতের মরণশীল বার্তাবাহকের ঠিক পাশে বসানো দুটি পথই একসঙ্গে বন্ধ করে দেয়। মহত্ত্ব তাঁরই, যিনি বলেন; যিনি বাণী পৌঁছে দেন সেই মানুষটি খান, ঘুমান এবং মারা যাবেন — আর তাঁর মানবত্ব বার্তার কোনো খুঁত নয়, বরং তা সবার নাগালে পৌঁছানোর প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Conditions",
          "bn": "দুটি শর্ত"
        },
        "p": [
          {
            "en": "The surah's final sentence is a recipe: whoever hopes for the meeting with his Lord, let him do righteous work and associate none in the worship of his Lord. Ibn Kathir draws from this the two conditions of an accepted deed. It must be salih, sound — conforming to what Allah legislated through His Messenger ﷺ — and it must be sincerely for Allah alone, with no partner given a share of it. A deed can fail on either count independently.",
            "bn": "সূরার শেষ বাক্যটি একটি নুসখা: যে তার রবের সাক্ষাতের আশা রাখে, সে যেন সৎকর্ম করে এবং তার রবের ইবাদতে কাউকে শরীক না করে। ইবনে কাসীর এখান থেকে কবুল হওয়া আমলের দুটি শর্ত বের করেন। কাজটিকে হতে হবে 'সালিহ' — নির্ভুল, অর্থাৎ আল্লাহ তাঁর রাসূল ﷺ-এর মাধ্যমে যা বিধিবদ্ধ করেছেন তার অনুগামী — এবং হতে হবে একনিষ্ঠভাবে কেবল আল্লাহর জন্য, যাতে কোনো শরীকের ভাগ নেই। যেকোনো একটি শর্তে আলাদাভাবেই একটি আমল বাতিল হতে পারে।"
          },
          {
            "en": "The phrase worth weighing is whoever hopes. The verse does not say whoever is certain of meeting his Lord, nor whoever fears. Hope is the workable minimum: if the meeting is even your aspiration, this is the road. The address thereby includes the struggling believer whose conviction flickers. What is asked of hope is not intensity of feeling but that it change what the hands do — righteous work — and what the heart serves — Allah without partner.",
            "bn": "যে বাক্যাংশটি ওজন করার মতো তা হলো — 'যে আশা রাখে'। আয়াতটি বলে না, যে তার রবের সাক্ষাতে নিশ্চিত; বলেও না, যে ভয় করে। আশাই কার্যকর ন্যূনতম: সাক্ষাৎ যদি তোমার আকাঙ্ক্ষাও হয়, তবে এই সেই পথ। সম্বোধনটি তাই সেই সংগ্রামরত মুমিনকেও ধরে, যার প্রত্যয় কাঁপে। আশার কাছে যা চাওয়া হয়েছে তা অনুভূতির তীব্রতা নয়; চাওয়া হয়েছে — সে বদলে দিক হাত যা করে — সৎকর্ম — আর হৃদয় যার দাসত্ব করে — শরীকবিহীন আল্লাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quiet Threat to Sincerity",
          "bn": "ইখলাসের নীরব শত্রু"
        },
        "p": [
          {
            "en": "The shirk excluded at the surah's close is not only the worship of idols. Muslim narrates the hadith qudsi from Abu Hurayrah (RA): Allah says, I am the most self-sufficient of all partners; whoever does a deed in which he associates another with Me, I abandon him and his association. The classical scholars read 18:110 alongside this: the polish a deed acquires when it is being watched, the worship angled toward reputation, falls under association in worship.",
            "bn": "সূরার শেষে যে শিরক বর্জনের কথা, তা কেবল মূর্তিপূজা নয়। মুসলিম আবু হুরাইরা (রাঃ) থেকে হাদীসে কুদসী বর্ণনা করেন: আল্লাহ বলেন, শরীকদের মধ্যে আমিই শিরক থেকে সবচেয়ে অমুখাপেক্ষী; যে এমন আমল করে যাতে সে আমার সঙ্গে অন্য কাউকে শরীক করে, আমি তাকে ও তার শিরককে ছেড়ে দিই। ধ্রুপদী আলিমগণ 18:110 আয়াতকে এর পাশে রেখে পড়েন: দেখা হচ্ছে জেনে আমলে যে বাড়তি চাকচিক্য আসে, সুনামের দিকে হেলানো যে ইবাদত — তা ইবাদতে শরীক করারই অন্তর্ভুক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Majesty and a Doable Path",
          "bn": "মহিমা এবং এক সাধ্যের পথ"
        },
        "p": [
          {
            "en": "The note this article expands observes that infinite majesty and a clear, doable path stand side by side. That adjacency is the lived instruction. Contemplating 18:109 alone can end in paralysis — what could my small deeds matter against words that outlast oceans? Contemplating 18:110 alone can shrink religion to a checklist. Read as one breath, the pair says: the One you serve is beyond all measure, and what He asks of you today is measurable — sound work, clean intention.",
            "bn": "এই লেখা যে নোটের বিস্তার, তা লক্ষ করে: অসীম মহিমা আর একটি স্পষ্ট, সাধ্যের পথ পাশাপাশি দাঁড়িয়ে। এই পাশাপাশি-থাকাটাই যাপনের নির্দেশ। শুধু 18:109 নিয়ে ভাবলে তা অসাড়তায় শেষ হতে পারে — সমুদ্রকেও ছাড়িয়ে যাওয়া কালিমার সামনে আমার ছোট আমলের কী-ই বা মূল্য? আবার শুধু 18:110 নিয়ে ভাবলে দ্বীন সংকুচিত হতে পারে এক তালিকায়। এক নিঃশ্বাসে পড়লে জোড়াটি বলে: যাঁর দাসত্ব করছ তিনি সব পরিমাপের ঊর্ধ্বে, আর আজ তোমার কাছে তাঁর চাওয়াটুকু মাপা যায় — নির্ভুল কাজ, পরিচ্ছন্ন নিয়ত।"
          },
          {
            "en": "A concrete practice follows the verse's own order. Before a deed, ask the first condition: is this how the Prophet ﷺ taught it? During and after it, ask the second: who was that for? The second audit stings more, and repeating it is itself the work. These are the closing lines of a surah recited weekly by many Muslims on Friday; the recitation returns the questions to the reader at a rhythm frequent enough that the answers cannot ossify.",
            "bn": "একটি বাস্তব অভ্যাস আয়াতের নিজস্ব ক্রমই অনুসরণ করে। আমলের আগে প্রথম শর্তটি জিজ্ঞেস করো: নবী ﷺ কি এভাবেই তা শিখিয়েছেন? আমলের মধ্যে ও পরে দ্বিতীয়টি: ওটা কার জন্য ছিল? দ্বিতীয় হিসাব-নিরীক্ষাটি বেশি বেঁধে, আর তার পুনরাবৃত্তিই আসল কাজ। এগুলো সেই সূরার সমাপ্তি-পঙক্তি, যা বহু মুসলিম প্রতি জুমুআয় সাপ্তাহিকভাবে তিলাওয়াত করে; তিলাওয়াত প্রশ্নগুলোকে পাঠকের কাছে এমন ঘনঘন ফিরিয়ে আনে যে উত্তরগুলো জমে শক্ত হয়ে যেতে পারে না।"
          }
        ]
      }
    ]
  }
});
