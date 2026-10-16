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
            "bn": "আগের আয়াতটি বাদ দিয়ে এ আয়াত পড়লে এর প্রথম শব্দটি শূন্যে ভাসে। কায়্যিমান, অর্থাৎ সোজা, তখন কিছুরই বর্ণনা দেয় না। দুটি আয়াত একসঙ্গে পড়ুন, শব্দটি জায়গামতো বসে যায়। আগের আয়াতে আল্লাহর প্রশংসা এসেছে, যিনি তাঁর বান্দার প্রতি কিতাব নাজিল করেছেন আর তাতে কোনো বক্রতা রাখেননি। এই শব্দ সেই বাক্যটি পূর্ণ করে। কিতাব কী নয় তা বলার পর কুরআন এবার স্পষ্ট করে বলে কিতাব কী। তাবারী দুই অংশকে একটি বাক্য হিসেবে জোড়েন: তিনি কিতাব নাজিল করেছেন সোজা ও খাঁটি করে, তাতে কোনো বক্রতা নেই।"
          },
          {
            "en": "The placement matters. Before the surah turns to its warning and its stories, it settles the standing of the Book that carries them. What comes in these opening verses is a warning and a good tiding, and after them the surah moves to correct a grave claim made about Allah. All of it rests on this: the Book that delivers the message is itself without flaw. A crooked measure cannot straighten anything. So the Qur'an fixes the measure first, and only then puts it to use.",
            "bn": "শব্দটা কোথায় বসেছে, সেটাও গুরুত্বপূর্ণ। সতর্কবাণী আর কাহিনিগুলোতে যাওয়ার আগে সূরাটি ঠিক করে দেয়, এসব যে কিতাবে আসছে তার মর্যাদা কী। শুরুর এই আয়াতগুলোতে আছে সতর্কবাণী আর সুসংবাদ। এরপর সূরাটি আল্লাহ সম্পর্কে করা এক গুরুতর দাবি শুধরে দিতে এগোয়। সবকিছুর ভিত্তি একটাই: যে কিতাব বার্তাটা পৌঁছে দিচ্ছে, তা নিজেই নিখুঁত। বাঁকা মাপকাঠি দিয়ে কিছু সোজা করা যায় না। তাই কুরআন আগে মাপকাঠিটা ঠিক করে নেয়, তারপর সেটা কাজে লাগায়।"
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
            "bn": "বক্রতা তো আগেই নাকচ করা হয়েছে, তাহলে কায়্যিম শব্দটি নতুন কী যোগ করে? তাফসীরকারদের মতে, 'বক্রতা নেই' কথাটার যে ইতিবাচক রূপ, এই শব্দ সেটাই। ইবন কাসীর সোজাসুজি অর্থ করেন মুসতাকীম, অর্থাৎ সোজা। বাগভীও তা-ই বলেন, সঙ্গে ইবন আব্বাসের ব্যাখ্যা আনেন: এর মানে ভারসাম্যপূর্ণ ও ন্যায়নিষ্ঠ। মুয়াসসার একই কথা খুলে বলে: এমন কিতাব, যাতে কোনো গরমিল নেই, কোনো স্ববিরোধ নেই। কোনো কিছুকে সোজা বললে শুধু এটুকু বোঝায় না যে তা বাঁকা নয়। বোঝায়, তার নিজেরই একটা সঠিক রেখা আছে, আর সে তা ধরে আছে।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the structure out. The earlier phrase ruled out crookedness in a negative, eliminating form; qayyim then fortifies that same meaning positively, for what is straight can carry no tilt to any side. Al-Qurtubi records ad-Dahhak's fine reading that straight here means straight in wisdom, with no error, no corruption, and no contradiction anywhere in it. The negation cleared the ground; this word builds on it. The Book is not merely innocent of distortion. It is actively, deliberately upright.",
            "bn": "মাআরিফুল কুরআন এই গঠনটা খুলে দেখায়। আগের বাক্যাংশ বক্রতাকে বাদ দিয়েছিল 'না' বলে। কায়্যিম সেই একই অর্থ পাকা করে 'হ্যাঁ' বলে, কারণ যা সোজা, তা কোনো দিকে হেলে থাকতে পারে না। কুরতুবী দাহহাকের একটি সুন্দর ব্যাখ্যা আনেন: এখানে সোজা মানে হিকমতে সোজা, যাতে কোথাও কোনো ভুল নেই, বিকৃতি নেই, স্ববিরোধ নেই। নাকচের কথাটা জমি পরিষ্কার করেছিল, এই শব্দ সেখানে ঘর তোলে। কিতাব শুধু বিকৃতি থেকে মুক্তই নয়। আল্লাহ একে জেনে-বুঝে, ইচ্ছা করেই সোজা করে বানিয়েছেন।"
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
            "bn": "কুরতুবী ব্যাকরণের দিকটা দেখান: কায়্যিমান শব্দটি মানসুব, 'হাল' হিসেবে এসেছে। অর্থাৎ নাজিল হওয়া কিতাব কেমন, সেটা বলছে। তিনি কাতাদার কথা আনেন: শব্দগুলো স্বাভাবিক ক্রমেই আছে, কোনোটা আগে-পিছে সরানো হয়নি। তাই অর্থ দাঁড়ায়: তিনি তাতে কোনো বক্রতা রাখেননি, বরং একে সোজা করেছেন। বাগভীও কাতাদা থেকে একই কথা আনেন এবং একে ৪:৮২ আয়াতের সঙ্গে মেলান: কিতাবটি আল্লাহ ছাড়া অন্য কারও কাছ থেকে এলে তারা এতে অনেক গরমিল পেত।"
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
          "bn": "কিতাবের সতর্কবাণী"
        },
        "p": [
          {
            "en": "Now the verse states the Book's first task: to warn of a severe punishment. At-Tabari explains that the object of the verb is left unspoken and understood, as if it read, to warn you of a punishment; he likens it to 3:175, where Allah frightens His enemies with an unspoken you. Ibn Kathir names who is warned: those who oppose the Messenger, deny him, and refuse to believe. The threat is not vague menace. It is directed, aimed at a settled choice to turn away.",
            "bn": "এবার আয়াত কিতাবের প্রথম কাজের কথা বলে: কঠিন শাস্তির ব্যাপারে সতর্ক করা। তাবারী বলেন, কাকে সতর্ক করা হবে, সেটা এখানে বলা নেই; বোঝা যায় বলেই উহ্য রাখা হয়েছে। কথাটা যেন এমন: তোমাদের শাস্তির ব্যাপারে সতর্ক করার জন্য। তিনি এর তুলনা দেন ৩:১৭৫ আয়াতের সঙ্গে, যেখানেও 'তোমাদের' শব্দটি উহ্য রেখে তাঁর শত্রুদের দিয়ে ভয় দেখানোর কথা এসেছে। ইবন কাসীর বলে দেন কাদের সতর্ক করা হচ্ছে: যারা রাসূলের বিরোধিতা করে, তাঁকে মিথ্যাবাদী বলে, আর ঈমান আনতে রাজি হয় না। এই হুমকি ঝাপসা ভয় দেখানো নয়। এর নিশানা স্পষ্ট: মুখ ফিরিয়ে নেওয়ার পাকা সিদ্ধান্ত।"
          },
          {
            "en": "At-Tabari gathers the words the early authorities used for this punishment: present chastisement, ruin at hand, overpowering force. Ibn Kathir divides it in time, a punishment hastened in this world and held over for the next. As-Sa'di reads it as covering both, the reckoning of this life and the reckoning of the Hereafter. The Book does not merely mention that danger exists. It sounds the alarm, so that whoever hears has been told before the day the warning speaks of arrives.",
            "bn": "এই শাস্তি বোঝাতে পূর্বসূরিরা যেসব শব্দ ব্যবহার করেছেন, তাবারী সেগুলো একসঙ্গে এনেছেন: নগদ আজাব, সামনে দাঁড়ানো ধ্বংস, দমিয়ে দেওয়া শক্তি। ইবন কাসীর একে সময় দিয়ে ভাগ করেন: কিছু শাস্তি দুনিয়াতেই আগাম আসে, কিছু তোলা থাকে আখিরাতের জন্য। সা'দীর মতে দুটোই এর মধ্যে আছে: এ জীবনের হিসাব, আখিরাতের হিসাবও। কিতাব শুধু জানিয়ে দেয় না যে বিপদ আছে। রীতিমতো বিপদের ঘণ্টা বাজায়, যাতে সতর্কবাণীর সেই দিন আসার আগেই শ্রোতা খবরটা পেয়ে যায়।"
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
            "bn": "শাস্তি কোথা থেকে আসবে, আয়াত তা ঠিক করে বলে দেয়: তাঁর কাছ থেকে, মিন লাদুনহু। তাবারী ও কুরতুবী দুজনেই এর অর্থ করেন: আল্লাহর কাছ থেকে, সরাসরি তাঁর পক্ষ থেকে। ইবন কাসীর বুঝিয়ে দেন কথাটা কেন এত ভারী: আল্লাহ যেভাবে শাস্তি দেন, কেউ সেভাবে দিতে পারে না; তিনি যেভাবে বাঁধেন, কেউ সেভাবে বাঁধতে পারে না। হুমকির ওজন নির্ভর করে, হুমকিটা কে দিচ্ছে তার উপর। শাস্তি তাঁর কাছ থেকে আসবে, মানে তাঁর উপরে নালিশ জানানোর কোনো জায়গা নেই। তিনি যাকে জবাবদিহিতে ডাকেন, তাকে আড়াল করার মতো কোনো শক্তি নেই। তাঁর পাকড়াও ঠেকানোর কোনো উপায়ও নেই।"
          },
          {
            "en": "As-Sa'di turns the warning over and finds mercy in it. That Allah frightens His servants away from what would harm and destroy them is itself a kindness. Sa'di reads it beside 39:16, where Allah says of the Fire that by it He frightens His servants, and then calls, O My servants, so fear Me. Setting a heavy penalty on defiance, naming it, and marking the roads that lead to it: this is how a guardian warns those in his care. The alarm is not cruelty; it is being told in time.",
            "bn": "সা'দী সতর্কবাণীটাকে অন্য দিক থেকে দেখেন, আর তার ভেতরে রহমত খুঁজে পান। যা বান্দাদের ক্ষতি করবে, ধ্বংস করবে, তা থেকে আল্লাহ তাদের ভয় দেখিয়ে দূরে রাখেন। এটাই তো দয়া। সা'দী একে ৩৯:১৬ আয়াতের পাশে রেখে পড়েন। সেখানে আল্লাহ জাহান্নামের কথা বলে জানান, এ দিয়ে তিনি তাঁর বান্দাদের ভয় দেখান। তারপর ডাক দেন: হে আমার বান্দারা, আমাকে ভয় করো। নাফরমানির জন্য কঠিন সাজা ঠিক করে রাখা, সাজার কথা খোলাখুলি বলে দেওয়া, আর কোন কোন পথ সেদিকে যায় তা চিনিয়ে দেওয়া: অভিভাবক তাঁর দায়িত্বে থাকা মানুষদের এভাবেই সাবধান করেন। এই সতর্কসংকেত নিষ্ঠুরতা নয়। এ হলো সময় থাকতে জানিয়ে দেওয়া।"
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
            "bn": "সা'দী বর্ণনাটা খুঁটিয়ে পড়েন। তাঁর মতে এখানে মু'মিন তারা, আল্লাহ, তাঁর রাসূলগণ ও তাঁর কিতাবসমূহের উপর যাদের ঈমান পূর্ণতায় পৌঁছেছে, ফলে সেই ঈমান তাদের কাছে নেক আমল দাবি করে। সেই আমল ফরজও হতে পারে, মুস্তাহাবও, তবে তাতে দুটি জিনিস থাকতে হয়: আল্লাহর জন্য ইখলাস আর রাসূলের অনুসরণ। কাজেই নিজেকে মু'মিন বলে দাবি করলেই কেউ এই সুসংবাদের ভাগীদার হয়ে যায় না। সুসংবাদ সেই ঈমানের জন্য, যা আমলে নেমেছে, আর সেই আমলের জন্য, যা কিতাবের দেখানো পথে করা হয়।"
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
            "bn": "মু'মিনদের যে উত্তম প্রতিফলের ওয়াদা দেওয়া হয়েছে, তা কী? তাফসীরকারেরা একমত: জান্নাত। তাবারী একে বলেন প্রচুর প্রতিদান, অর্থাৎ মুত্তাকীদের জন্য ওয়াদা করা জান্নাত। কুরতুবী ও বাগভী দুজনেই সোজাসুজি জান্নাতের নাম নেন। কুরতুবী আরও বলেন, উত্তম প্রতিফল হলো সেই মহা প্রতিদান, যা জান্নাতে পৌঁছে দেয়। ইবন কাসীরের ভাষায়, আল্লাহর কাছে এক সুন্দর প্রতিদান। 'উত্তম' শব্দটি এখানে খুব অর্থবহ। ওয়াদাটা শুধু কোনোমতে বেঁচে যাওয়ার নয়; এমন প্রতিদানের, যা নিজেই সুন্দর।"
          },
          {
            "en": "As-Sa'di lingers on that word, hasan, good. To describe the reward as good, he says, shows that nothing in it is spoiled or clouded in any way; were there any flaw or grief mixed into it, its goodness would not be complete. He sets its summit at winning Allah's pleasure and entering the Garden, in which is what no eye has seen, no ear has heard, and no heart has imagined. The reward answers the punishment: the threat is severe without relief, and the promise is good without a shadow.",
            "bn": "সা'দী এই শব্দটিতে একটু থামেন: হাসান, অর্থাৎ উত্তম। তিনি বলেন, প্রতিদানকে উত্তম বলার মানে, এতে কোনোভাবেই কোনো খুঁত বা মলিনতা নেই। সামান্য ত্রুটি বা দুঃখ মিশে থাকলে এর উত্তমতা পূর্ণ হতো না। এর সর্বোচ্চ রূপ তিনি দেখান আল্লাহর সন্তুষ্টি পাওয়া আর জান্নাতে প্রবেশ করায়, যেখানে আছে এমন কিছু, যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, কোনো অন্তর কল্পনাও করেনি। প্রতিদান আর শাস্তি মুখোমুখি দাঁড়ায়: হুমকি কঠিন, তাতে কোনো ছাড় নেই; ওয়াদা উত্তম, তাতে কোনো ছায়া নেই।"
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
            "bn": "দুটি কাজ পাশাপাশি রাখলেই আয়াতের গড়নটা চোখে পড়ে। একই সোজা কিতাব ভয়ও দেখায়, সুখবরও দেয়, আর দুটোই বলে একই শ্রোতাকে। কিতাব আগে থেকে মানুষকে দুই ভাগ করে রাখে না যে একদলকে শুধু ভয় দেখাবে, আরেক দলকে শুধু সান্ত্বনা দেবে। কঠিন শাস্তি আর উত্তম প্রতিফল, দুটোই সে প্রত্যেক পাঠকের সামনে রাখে। তারপর প্রত্যেকে নিজেই ঠিক করে, সে কোন দিকে হাঁটছে। সা'দীর কথাটা এখানে আবার মনে পড়ে: সতর্কবাণীও যত্নেরই অংশ, কারণ তা আসে এমন সময়ে, যখন শোনার সময় এখনো আছে।"
          },
          {
            "en": "No sound hadith comes down expounding this verse in particular; the commentators read it by its wording and its neighbours, not by a narration. What the collections do preserve, at the surah's head, is the reported virtue of its opening. Muslim records from Abu ad-Darda that the Prophet ﷺ said whoever memorises the first ten verses of Surat al-Kahf will be protected from the Dajjal. That is a merit of the opening ten as a body, of which this verse is one, not a comment on its meaning; it is sound, and it is reported as a virtue rather than as tafsir.",
            "bn": "এই আয়াতটির বিশেষ ব্যাখ্যায় কোনো সহীহ হাদিস বর্ণিত হয়নি। তাফসীরকারেরা আয়াতটি বুঝেছেন এর শব্দ আর আশপাশের আয়াত দেখে, কোনো বর্ণনার ভিত্তিতে নয়। তবে হাদিসের কিতাবগুলোতে সূরার শুরুর অংশের ফজিলতের কথা আছে। মুসলিম আবু দারদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে সূরা কাহাফের প্রথম দশ আয়াত মুখস্থ করবে, সে দাজ্জাল থেকে রক্ষা পাবে। এটা পুরো প্রথম দশ আয়াতের ফজিলত, যার একটি এই আয়াত; এর অর্থের ব্যাখ্যা নয়। হাদিসটি সহীহ, তবে এসেছে ফজিলত হিসেবে, তাফসীর হিসেবে নয়।"
          },
          {
            "en": "So the verse leaves the reader with a straight edge in hand. A true measure is useful only to someone willing to be measured by it. The Book has been made upright on purpose, and one of its offices, on Ma'arif al-Qur'an's reading, is to keep upright those who hold to it. The honest question is not whether the Qur'an is straight but whether I will let it straighten me, or quietly bend its plain warning and its plain promise until they fit the life I had already decided to live.",
            "bn": "তাই আয়াতটি পাঠকের হাতে একটি সোজা মাপকাঠি তুলে দিয়ে যায়। সঠিক মাপকাঠি কাজে লাগে শুধু তারই, যে নিজেকে তা দিয়ে মাপতে রাজি। আল্লাহ কিতাবটিকে জেনে-বুঝেই সোজা করে বানিয়েছেন। আর মাআরিফুল কুরআনের ব্যাখ্যায়, এর একটি কাজ হলো যারা একে আঁকড়ে ধরে, তাদের সোজা রাখা। তাই আসল প্রশ্নটা এ নয় যে কুরআন সোজা কি না। প্রশ্ন হলো, আমি কি কুরআনকে আমাকে সোজা করতে দেব? নাকি এর স্পষ্ট সতর্কবাণী আর স্পষ্ট ওয়াদাকে চুপচাপ বাঁকিয়ে নেব, যতক্ষণ না তা আমার আগে থেকে বেছে রাখা জীবনের সঙ্গে খাপ খায়?"
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
            "bn": "ঠিক আগের আয়াতে, ১৮:৬-এ, দেখা যায় নবী ﷺ তাঁর কওমের ঈমান না আনার দুঃখে নিজেকে প্রায় শেষ করে ফেলছেন। এই আয়াত সেই দুঃখের জবাব। তবে এটা যতটা সান্ত্বনা, তার চেয়ে বেশি ব্যাখ্যা: যমীনের উপর যা কিছু আছে, আমি সেগুলোকে তার শোভা বানিয়েছি, যাতে তাদের পরীক্ষা করি, আমলে তাদের মধ্যে কে সবচেয়ে ভালো। তাদের মুখ ফিরিয়ে নেওয়া কোনো রহস্য নয়। শোভাকে যে কাজের জন্য রাখা হয়েছে, সে ঠিক সেই কাজটাই করছে।"
          },
          {
            "en": "The very next verse, 18:8, closes the frame before it can be misread: and We will make what is upon it a barren ground. The commentators read the two together, and they belong together. The adornment is real, it was given deliberately, and it has an expiry date printed underneath it. Almost everything the surah goes on to narrate sits inside that pair of sentences.",
            "bn": "ঠিক পরের আয়াত, ১৮:৮, কেউ ভুল বোঝার আগেই কাঠামোটা পূর্ণ করে দেয়: আর এর উপর যা কিছু আছে, আমি অবশ্যই তা উদ্ভিদশূন্য শুকনো মাটি বানিয়ে দেব। তাফসীরকারেরা দুটি আয়াত একসঙ্গে পড়েন, আর সত্যিই এ দুটো একসঙ্গে থাকার কথা। শোভা সত্যি, আল্লাহ তা জেনে-বুঝেই দিয়েছেন, আর তার তলায় মেয়াদ শেষের তারিখও লেখা আছে। সূরাটি এরপর যত কাহিনি বলে, তার প্রায় সবই এই দুই বাক্যের ভেতরে ধরা।"
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
            "bn": "আরবিতে আছে 'যীনাতান লাহা', অর্থাৎ তার জন্য শোভা। সর্বনামটি স্ত্রীলিঙ্গ, আর তা ফিরে যায় যমীনের দিকে। এ সৌন্দর্য যমীনের পোশাক, আমাদের নয়। মানুষ সারাজীবন যা পাওয়ার জন্য পাল্লা দেয়, তার সবই এমন এক গ্রহের গয়না, যা আমরা কেবল পার হয়ে যাচ্ছি। আর গয়না যার গায়ে, পরীক্ষা তার নয়। 'যীনাহ' শব্দটি এই সূরাতেই আরও দুবার এসেছে, ১৮:২৮ ও ১৮:৪৬ আয়াতে। দুবারই তা এমন কিছুর নাম, যার দিকে মানুষ হয়তো একটু বেশিক্ষণ তাকিয়ে থাকে।"
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
            "bn": "পরীক্ষাটি হলো 'আইয়ুহুম আহসানু আমালা': আমলে তাদের মধ্যে কে সবচেয়ে ভালো। এখানে শব্দটি 'আহসান', সবচেয়ে ভালো; 'আকছার', সবচেয়ে বেশি, নয়। কুরআনে একই পরীক্ষার কথা এসেছে তিন জায়গায়: ১১:৭, ১৮:৭ ও ৬৭:২। তিন জায়গাতেই মাপকাঠি আমলের মান। শুধু এখানে আছে 'আইয়ুহুম', তাদের মধ্যে কে; বাকি দুটিতে 'আইয়ুকুম', তোমাদের মধ্যে কে। কোথাও কাউকে বলা হয়নি যে আমলের সংখ্যা মাপা হবে।"
          },
          {
            "en": "Where the same phrase occurs in 67:2, Ibn Kathir transmits al-Fudayl ibn Iyad's gloss on it: the best deed is the most sincere and the most correct. Sincere means done for Allah alone; correct means done the way the Sunnah taught it. Two conditions, and a deed that satisfies only one of them fails the description. That is a demanding standard, and it is also a liberating one, because it is available to someone with very little to give.",
            "bn": "৬৭:২ আয়াতেও একই কথা এসেছে, আর সেখানে ইবনে কাসীর ফুদাইল ইবনে ইয়াযের ব্যাখ্যা বর্ণনা করেন: সবচেয়ে ভালো আমল হলো যা সবচেয়ে খাঁটি আর সবচেয়ে সঠিক। খাঁটি মানে শুধু আল্লাহর জন্য করা। সঠিক মানে সুন্নাহ যেভাবে শিখিয়েছে, সেভাবে করা। শর্ত দুটি। যে আমলে এর একটি মাত্র পূরণ হয়, তা এই বর্ণনায় পড়ে না। মানদণ্ডটা কঠিন, আবার মুক্তিরও। কারণ যার দেওয়ার মতো খুব সামান্যই আছে, সেও এ মান ছুঁতে পারে।"
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
            "bn": "এই কাঠামোর পর সূরাটি চারটি কাহিনি বলে, যেগুলো শুরু হয় ১৮:৯, ১৮:৩২, ১৮:৬০ ও ১৮:৮৩ আয়াতে। কাহিনিগুলো একবার গুনে দেখা ভালো: গুহার যুবকেরা; দুটি বাগান পাওয়া সেই লোক; মূসা (আঃ), যিনি সফর করেছিলেন আল্লাহর এমন এক বান্দার সঙ্গে, যাঁকে আল্লাহ রহমত ও জ্ঞান দিয়েছিলেন; আর যুলকারনাইন। চারটি কাহিনির প্রতিটিতে একজন মানুষকে দাঁড় করানো হয়েছে দুনিয়ার কোনো এক শোভার পাশে: ঈমান ও নিরাপত্তা, সম্পদ, জ্ঞান, আর ক্ষমতা।"
          },
          {
            "en": "The surah pauses after the second of them and returns to the frame in three steps. 18:44 gives the verdict that authority belongs to Allah, the Truth, who is best in reward and best in outcome. 18:45 turns the world's green growth into dry remnants scattered by the wind. 18:46 then names wealth and children as the adornment of this life and declares the enduring good deeds better in reward and better in hope.",
            "bn": "দ্বিতীয় কাহিনির পর সূরাটি থেমে তিন ধাপে আবার কাঠামোয় ফিরে আসে। ১৮:৪৪ আয়াত রায় দেয়: কর্তৃত্ব শুধু সত্য আল্লাহর, প্রতিদানেও তিনি শ্রেষ্ঠ, পরিণামেও শ্রেষ্ঠ। ১৮:৪৫ আয়াত দুনিয়ার সবুজ ফসলকে বানিয়ে দেয় শুকনো খড়কুটো, যা বাতাসে উড়ে যায়। তারপর ১৮:৪৬ আয়াত বলে, ধন-সম্পদ আর সন্তান এ দুনিয়ার জীবনের শোভা, আর স্থায়ী নেক আমলই প্রতিদানে উত্তম, আশার দিক থেকেও উত্তম।"
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
            "bn": "এখানে কোথাও দুনিয়ার সৌন্দর্যকে ফাঁদ বা গুনাহ বলা হয়নি। একে বলা হয়েছে 'যীনাহ', শোভা, আর আল্লাহ বলছেন, তিনিই তা বানিয়েছেন। পরীক্ষার প্রশ্নপত্র তো পরীক্ষার্থীর শত্রু নয়। আয়াত উপভোগ নিষেধ করে না। নিষেধ করে একটা গোলমাল: দুটির মধ্যে কোনটার নম্বর দেওয়া হচ্ছে, তা গুলিয়ে ফেলা। আর গুলিয়ে ফেলা খুব সহজ, কারণ শোভা চোখে পড়ে, আমল পড়ে না।"
          },
          {
            "en": "The same surah states the failure case plainly. 18:103 asks whether we should be told about the greatest losers in deeds, and 18:104 answers: those whose effort in the life of this world was lost while they thought they were doing well. That is what a life fails at when it is graded by the ornament. The practical instruction from this verse is narrow and doable: take one deed you already perform and improve its quality rather than its frequency.",
            "bn": "ব্যর্থ হলে কেমন দেখায়, একই সূরা তা সোজাসুজি বলে দেয়। ১৮:১০৩ আয়াত জিজ্ঞেস করে, আমলের দিক থেকে সবচেয়ে ক্ষতিগ্রস্ত কারা, তা কি আমাদের জানানো হবে? ১৮:১০৪ আয়াত উত্তর দেয়: তারাই, দুনিয়ার জীবনে যাদের সব চেষ্টা বৃথা গেছে, অথচ তারা ভাবত, তারা ভালো কাজই করছে। শোভা দিয়ে মাপা জীবন এখানেই ব্যর্থ হয়। এই আয়াত থেকে কাজের কথাটা ছোট, আর করাও সম্ভব: আপনি এখন যে আমলগুলো করেন, তার একটি বেছে নিন, আর সেটা বেশি বার নয়, আরও ভালোভাবে করুন।"
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
            "bn": "তাবারী দরজার মতটাকেই প্রাধান্য দেন, কিংবা দরজার সামনের সেই জায়গা যেখানে দরজা বন্ধ হয়। কারণ দরজা বন্ধ করা হয়, আরবিতে ইউসাদ, যেমন ১০৪:৮ আয়াতে আছে: ইন্নাহা আলাইহিম মু'সাদাহ। ইবন কাসীরও এ মতকে সঠিক বলেন এবং একই আয়াত আনেন। বাগাভী একটা আপত্তির জবাব দেন: গুহার তো দরজা থাকে না। তাঁর উত্তর, এখানে দরজার জায়গাটাই বোঝানো হয়েছে। তাবারী ও ইবন কাসীরে ইবন জুরাইজ বলেন, কুকুরটি তাদের দরজা আগলে রাখছিল। ইবন কাসীরের মতে এটাই কুকুরের স্বভাব। সা'দী যোগ করেন, পাহারা দিতে দিতে কুকুরটিকেও ঘুম পেয়ে বসে, আর তার সামনের পা দুটো প্রবেশপথে মেলাই থেকে যায়।"
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
            "bn": "কেউ কেউ এটাকে কুকুরই মানেননি। তাবারী বর্ণনা করেন, কারও মতে সে ছিল একজন মানুষ, এক বাবুর্চি, যে তাদের পিছু নিয়েছিল। কুরতুবী একদলের কথা লেখেন, যাদের মতে সে যুবকদেরই একজন, গুহার মুখে বসে পাহারা দিচ্ছিল। আর বাগাভীতে ইবন জুরাইজ বলেন, সেটা ছিল সিংহ। বাগাভী প্রথম মতটিকে, অর্থাৎ সত্যিকারের কুকুর, বেশি সঠিক বলেন। কুরতুবীর উদ্ধৃতিতে ইবন আতিয়্যা জবাব দেন, সামনের পা মেলে দেওয়া তো কুকুরেরই ভঙ্গি। প্রমাণ হিসেবে আসে নবী ﷺ-এর বাণী, যা বুখারীর ৮২২ নম্বর হাদিসে আনাস ইবন মালিক (রাঃ) থেকে এসেছে: সিজদায় সোজা হয়ে থাকো, আর তোমাদের কেউ যেন (সিজদায়) কুকুরের মতো বাহু মাটিতে বিছিয়ে না দেয়।"
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
            "bn": "ইবন কাসীর এখানে শরীয়তের সঙ্গে যুক্ত একটা কথা যোগ করেন। তাঁর মতে কুকুরটি দরজার বাইরে বসে ছিল, কারণ সহীহ বর্ণনায় এসেছে, যে ঘরে কুকুর থাকে সেখানে ফেরেশতা প্রবেশ করেন না। তিনি যে হাদিসের দিকে ইঙ্গিত করেন, তা বুখারীর ৩২২৫ নম্বর হাদিস, আবূ তালহা (রাঃ) থেকে: আমি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছি, যে ঘরে কুকুর বা কোনো প্রাণীর ছবি থাকে, সেখানে (রহমতের) ফেরেশতা প্রবেশ করেন না। বন্ধনীর কথাটা ইংরেজি অনুবাদকের সংযোজন। হাদিসটিকে কুকুরের শোয়ার জায়গার সঙ্গে মেলানো ইবন কাসীরের নিজের যুক্তি। আয়াত শুধু এটুকুই বলে যে সে প্রবেশপথে শুয়ে ছিল।"
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
            "bn": "কুরতুবী একই ভাবনা আনেন কয়েকজন বক্তার পরম্পরায়। ইবন আতিয়্যা তাঁর পিতা থেকে বর্ণনা করেন, তিনি ৪৬৯ হিজরিতে মিসরে মিম্বরে দাঁড়িয়ে আবুল ফাদল জাওহারীকে বলতে শুনেছেন: যে নেককারদের ভালোবাসে, সে তাদের বরকতের ভাগ পায়। একটা কুকুর মর্যাদাবান মানুষদের ভালোবেসে তাদের সঙ্গ নিয়েছিল, আর আল্লাহ তাঁর কিতাবে তার কথা বলেছেন। কুরতুবীর মন্তব্য: নেককারদের সঙ্গের গুণে একটা কুকুর যদি এমন মর্যাদায় পৌঁছায়, তবে যে মুমিন তাওহিদে বিশ্বাসী আর আল্লাহর বন্ধুদের ভালোবাসে, তার অবস্থা কী হবে? এরপর তিনি একটি হাদিস আনেন, যাতে গুহার কোনো উল্লেখ নেই। আমলে পিছিয়ে থাকা মানুষের সান্ত্বনা হিসেবেই তিনি এটা এখানে রাখেন।"
          },
          {
            "en": "Bukhari 3688, from Anas (RA), translator's glosses left out: A man asked the Prophet ﷺ about the Hour saying, When will the Hour be? The Prophet ﷺ said, What have you prepared for it? The man said, Nothing, except that I love Allah and His Apostle. The Prophet ﷺ said, You will be with those whom you love. We had never been so glad as we were on hearing that saying of the Prophet Therefore, I love the Prophet, Abu Bakr and Umar, and I hope that I will be with them because of my love for them though my deeds are not similar to theirs.",
            "bn": "বুখারীর ৩৬৮৮ নম্বর হাদিস, আনাস (রাঃ) থেকে: এক ব্যক্তি নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করল, কিয়ামত কবে হবে? নবী ﷺ বললেন, তুমি এর জন্য কী প্রস্তুতি নিয়েছ? লোকটি বলল, কিছুই না, শুধু এটুকু যে আমি আল্লাহ ও তাঁর রাসূলকে ভালোবাসি। নবী ﷺ বললেন, তুমি যাদের ভালোবাস, তাদের সঙ্গেই থাকবে। আনাস বলেন, নবীর এ কথা শুনে আমরা যত খুশি হয়েছিলাম, তত খুশি আর কখনো হইনি। তাই আমি নবী ﷺ, আবূ বকর ও উমরকে ভালোবাসি। আশা রাখি, তাঁদের প্রতি এ ভালোবাসার কারণে আমি তাঁদের সঙ্গেই থাকব, যদিও আমার আমল তাঁদের আমলের মতো নয়।"
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
            "bn": "অন্যরা কারণ খুঁজেছেন দর্শকের চোখে যা পড়ত তার মধ্যে। বাগাভী মতগুলো মতভেদ হিসেবেই সাজান। কারও মতে জায়গাটার নির্জন ভয়াল পরিবেশ। কালবীর মতে তাদের খোলা চোখ, যেন জেগে থাকা কেউ এখনই কথা বলে উঠবে। কারও মতে লম্বা চুল আর নখ। আবার কারও মতে এমন এক ভীতি, যা দিয়ে আল্লাহ তাদের মানুষের চোখ থেকে আড়াল করে রেখেছিলেন। চুল আর নখের মতটিকে কুরতুবী দূরের কথা বলেন। কারণ ১৮:১৯ আয়াতে জেগে উঠে তারা ভেবেছিল, একদিন বা দিনের কিছু অংশ ঘুমিয়েছে। মাআরিফুল কুরআন যোগ করে, কুরআন বা হাদিস কোনোটিই কারণ নির্দিষ্ট করেনি, তাই আন্দাজ দিয়ে এ নিয়ে তর্ক অর্থহীন।"
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
          "bn": "ইনশাআল্লাহ ছাড়া 'কাল' নয়"
        },
        "p": [
          {
            "en": "And never say of anything, indeed I will do that tomorrow, except adding: if Allah wills. The prohibition is aimed at a habit so universal we barely hear ourselves doing it — announcing the future as if we owned it. The verse does not forbid planning; it forbids planning's arrogant grammar. Tomorrow may be spoken of, but only with its true owner acknowledged in the same breath.",
            "bn": "আর কোনো কাজের ব্যাপারে কখনো বোলো না, আমি আগামীকাল অবশ্যই এটা করব; তবে সঙ্গে বলো: যদি আল্লাহ চান। নিষেধটা এমন এক অভ্যাসের বিরুদ্ধে, যা এত সাধারণ যে নিজেরা করার সময় টেরও পাই না: ভবিষ্যতের কথা এমনভাবে বলা, যেন আমরাই তার মালিক। আয়াত পরিকল্পনা করতে নিষেধ করে না। নিষেধ করে পরিকল্পনার অহংকারী ভাষা। আগামীকালের কথা বলা যাবে, তবে একই নিঃশ্বাসে তার আসল মালিককে স্বীকার করে।"
          },
          {
            "en": "The exception phrase, insha'Allah, is not a verbal ornament or a polite hedge. Said with its meaning, it is a precise statement of reality: my intention is real, my ability is borrowed, and between the two stands a will that overrules mine, as 76:30 states — you do not will except that Allah wills. Every honest plan has that clause in it whether spoken or not; the verse asks that it be spoken.",
            "bn": "ব্যতিক্রমের এই বাক্য, ইনশাআল্লাহ, মুখের সাজ নয়, ভদ্রতার খাতিরে বলা কোনো আড়ালও নয়। অর্থ বুঝে বললে এটা বাস্তবতার নিখুঁত বর্ণনা: আমার নিয়ত সত্যি, আমার সামর্থ্য ধার করা, আর এ দুয়ের মাঝে আছে এমন এক ইচ্ছা, যা আমার ইচ্ছার উপরে। ৭৬:৩০ আয়াত সেটাই বলে: আল্লাহ না চাইলে তোমরা কিছুই চাইতে পারো না। প্রতিটি সৎ পরিকল্পনায় এই শর্তটি থাকেই, মুখে বলা হোক বা না হোক। আয়াত চায়, তা মুখে বলা হোক।"
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
            "bn": "সীরাত ও তাফসীরের কিতাবগুলো প্রেক্ষাপটটা এভাবে বর্ণনা করে। কুরাইশরা আহলে কিতাবের কাছ থেকে কয়েকটি প্রশ্ন জোগাড় করে, গুহার যুবকদের নিয়ে, যুলকারনাইনকে নিয়ে, আর সেগুলো নবী ﷺ-এর সামনে রাখে। তিনি বললেন, আগামীকাল তোমাদের উত্তর দেব, কিন্তু ইনশাআল্লাহ বললেন না। এরপর কিছুদিন ওহি আসা বন্ধ থাকে। বর্ণনাগুলো বলে, সময়টা ছিল কষ্টের, আর মক্কার লোকেরা তখন টিটকারিতে মেতে উঠেছিল। তারপর সূরা আল-কাহফ নাজিল হয় প্রশ্নগুলোর উত্তর নিয়ে, আর সঙ্গে এই নির্দেশ নিয়ে।"
          },
          {
            "en": "Read that way, the verses carry a tenderness alongside the rebuke. The Prophet ﷺ had not boasted; he had merely assumed a normal tomorrow. Even that assumption was corrected, in him and through him for us — and the correction arrived wrapped inside the very surah whose delay taught the lesson, so the Book's readers would never separate the rule from the experience that sealed it.",
            "bn": "এভাবে পড়লে আয়াতগুলোতে তিরস্কারের সঙ্গে কোমলতাও আছে। নবী ﷺ কোনো বড়াই করেননি। তিনি শুধু ধরে নিয়েছিলেন, আগামীকাল আর সব দিনের মতোই আসবে। সেই ধরে নেওয়াটুকুও শুধরে দেওয়া হলো, তাঁর নিজের বেলায়, আর তাঁর মাধ্যমে আমাদের সবার জন্য। সংশোধনটা এল সেই সূরার ভেতরেই, যার দেরিতে আসা শিক্ষাটা দিয়ে গেছে। যাতে কিতাবের পাঠকেরা নিয়মটাকে কখনো সেই অভিজ্ঞতা থেকে আলাদা করে না দেখে, যা নিয়মটাকে পাকা করে দিয়েছে।"
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
            "bn": "আর ভুলে গেলে তোমার রবকে স্মরণ করো। তাফসীরকারেরা বাক্যটিকে পরস্পর জড়িত দুই অর্থে নেন। এক, যখনই মনে পড়ে তখনই ইনশাআল্লাহ বলো, সময় পার হয়ে গেলেও; এটি পূর্বসূরিদের থেকে বর্ণিত একটি মত। দুই, আরও ব্যাপক অর্থে, প্রতিটি ভুলের স্থায়ী প্রতিকার হোক আল্লাহর জিকির। ভুলে যাওয়া অপরাধ নয়; অপরাধ হলো ভুলেই থেকে যাওয়া। ফেরার পথ সহজ: যে মুহূর্তে খেয়াল হয়, সে মুহূর্তেই আবার জিকিরে ফিরে আসা।"
          },
          {
            "en": "The verse then adds a du'a with a surprising reach: and say, perhaps my Lord will guide me to something nearer than this in rightness. Having surrendered tomorrow, the planner is taught to ask for a better plan than his own. The sentence assumes Allah's option is not merely to permit or block what we intend, but to substitute something closer to the good we were actually seeking.",
            "bn": "এরপর আয়াত এমন একটি দোয়া শেখায়, যার নাগাল অবাক করার মতো: আর বলো, আশা করি, আমার রব আমাকে এর চেয়েও সঠিক কোনো পথের দিশা দেবেন। আগামীকালকে আল্লাহর হাতে সঁপে দেওয়ার পর পরিকল্পনাকারীকে শেখানো হচ্ছে, নিজের পরিকল্পনার চেয়ে ভালো পরিকল্পনা চাইতে। বাক্যটি ধরে নেয়, আল্লাহ শুধু আমাদের ইচ্ছাকে হতে দেন বা আটকে দেন, তা নয়। তিনি এর জায়গায় এমন কিছুও দিতে পারেন, যা আমরা আসলে যে কল্যাণ খুঁজছিলাম, তার আরও কাছে।"
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
            "bn": "কয়েক পৃষ্ঠা পরে সূরা আল-কাহফ নিজেই এই শিক্ষাটা চোখের সামনে দেখিয়ে দেয়। দুই বাগানের মালিক বড়াই করতে করতে বাগানে ঢোকে আর বলে, আমার মনে হয় না এটা কখনো ধ্বংস হবে। ১৮:৩৯ আয়াতে তার মুমিন সঙ্গী তাকে শুধরে দেয়: তুমি যখন তোমার বাগানে ঢুকলে, তখন কেন বললে না, মা শা আল্লাহ, লা কুওয়াতা ইল্লা বিল্লাহ, আল্লাহ যা চেয়েছেন তা-ই হয়েছে, আল্লাহ ছাড়া কোনো শক্তি নেই? ১৮:৪২ আয়াতে পৌঁছাতেই বাগানগুলো শেষ। আর ওই কথাটার মধ্যেই সূরা ধরিয়ে দেয়, কেন এমন হলো।"
          },
          {
            "en": "68:17-18 tells the same story in miniature: owners of a garden swore they would surely harvest it in the morning, and made no exception — the commentators read the phrase as their failure to say if Allah wills — and by dawn the garden lay as if already harvested, black and bare. Twice, then, the Quran shows confident tomorrow-speech followed by a ruined garden. The pattern is not superstition; it is pedagogy about ownership.",
            "bn": "৬৮:১৭-১৮ আয়াত একই কাহিনি ছোট পরিসরে বলে। এক বাগানের মালিকেরা কসম খেয়েছিল, সকালেই তারা অবশ্যই বাগানের ফল তুলে নেবে, আর কোনো ব্যতিক্রম রাখেনি। তাফসীরকারেরা বলেন, এর মানে তারা ইনশাআল্লাহ বলেনি। ভোর হতেই বাগানটা এমন হয়ে গেল, যেন আগেই কেটে নেওয়া হয়েছে: কালো, ফাঁকা। কুরআন তাহলে দুবার দেখাল: আগামীকাল নিয়ে আত্মবিশ্বাসী কথা, তারপর ধ্বংস হওয়া বাগান। এটা কুসংস্কার নয়। আসল মালিক কে, তা শেখানোর পদ্ধতি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Phrase Does Inside",
          "bn": "কথাটি মনের ভেতরে যা করে"
        },
        "p": [
          {
            "en": "Said sincerely, insha'Allah works on the two diseases of planning. It deflates the arrogance of the successful planner, who is reminded mid-sentence that his coming victory requires permission. And it steadies the anxious one, who hears in his own words that outcomes were never his load to carry — his part is effort and honesty, and the result belongs to Someone who wills only with knowledge and wisdom.",
            "bn": "মন থেকে বললে ইনশাআল্লাহ পরিকল্পনার দুটি রোগের চিকিৎসা করে। সফল পরিকল্পনাকারীর অহংকার এতে চুপসে যায়; কথার মাঝখানেই তার মনে পড়ে, সামনের সাফল্যের জন্যও অনুমতি লাগবে। আর দুশ্চিন্তায় থাকা মানুষটি এতে স্থির হয়। নিজের মুখেই সে শোনে, ফলাফলের বোঝা কখনো তার কাঁধে ছিল না। তার কাজ চেষ্টা আর সততা; ফল তাঁর হাতে, যিনি ইচ্ছা করেন কেবল জ্ঞান আর হিকমতের সঙ্গে।"
          },
          {
            "en": "It also keeps speech truthful. A promise made with if Allah wills, sincerely meant, is a promise made within one's actual powers; a promise made without it claims a control no human has ever had. This is why the phrase, worn thin by casual use and sometimes even used to soften an intended refusal, deserves rescue: it is not filler, it is the most accurate thing a planner can say.",
            "bn": "এটা কথাকেও সত্য রাখে। মন থেকে ইনশাআল্লাহ বলে যে ওয়াদা করা হয়, তা মানুষের আসল সাধ্যের ভেতরের ওয়াদা। আর ইনশাআল্লাহ ছাড়া ওয়াদা এমন নিয়ন্ত্রণের দাবি করে, যা কোনো মানুষের কখনো ছিল না। এজন্যই কথাটিকে বাঁচানো দরকার। অবহেলায় বলতে বলতে এর ধার ক্ষয়ে গেছে, কখনো তো মনে মনে ঠিক করে রাখা 'না'-কে নরম করতেও এটা বলা হয়। অথচ এটা ফাঁকা বুলি নয়; একজন পরিকল্পনাকারী যা বলতে পারে, তার মধ্যে সবচেয়ে সঠিক কথা।"
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
            "bn": "আয়াতের শিক্ষা কাজে লাগালে দেখতে এমন হয়: খুঁটিয়ে পরিকল্পনা করুন। পরিকল্পনার কথা বলার সময় ইনশাআল্লাহ জুড়ে দিন, আর মন থেকে বলুন। পরিকল্পনা যতটা খাটুনি চায়, ততটা খাটুন। আর ফলাফলকে আলগা হাতে ধরুন। ফল যখন অন্যরকম হয়ে আসে, তখন ১৮:২৪ আয়াতের দোয়াটি পড়ুন: আশা করি, আমার রব আমাকে এর চেয়েও সঠিক কোনো পথের দিশা দেবেন। তারপর নিজের ছক ভেস্তে যাওয়ার শোক না করে খুঁজে দেখুন, আল্লাহ তার জায়গায় কী দিয়েছেন।"
          },
          {
            "en": "Kept over years, the habit rewires expectation itself. Interruptions stop reading as malfunctions of the universe; they become the moments where Allah's plan replaces yours — the exact contingency your daily insha'Allah has been rehearsing for. The believer's calendar stays full and his grip stays light, and the difference between him and the boasting gardener is a few words, said and meant.",
            "bn": "বছরের পর বছর ধরে রাখলে এ অভ্যাস প্রত্যাশাকেই নতুন করে গড়ে দেয়। বাধা এলে তখন আর মনে হয় না, দুনিয়ার কলকবজা বিগড়ে গেছে। বরং সেটা হয়ে ওঠে সেই মুহূর্ত, যখন আপনার পরিকল্পনার জায়গা নেয় আল্লাহর পরিকল্পনা। প্রতিদিনের ইনশাআল্লাহ দিয়ে আপনি এর জন্যই তো মহড়া দিয়ে আসছিলেন। মুমিনের কাজের তালিকা ভরা থাকে, কিন্তু মুঠো থাকে আলগা। তার সঙ্গে বড়াই করা ওই বাগানমালিকের পার্থক্য মাত্র কয়েকটি শব্দের, যা সে মুখে বলে আর মন থেকে মানে।"
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
            "en": "Al-Qurtubi's line about the weak and the strong faces back to 18:28. Ma'arif al-Qur'an, whose commentary groups 18:28 to 18:30, spends it on the background of that verse: men of standing asked for the poor believers to be moved out of the gathering. It does not treat the clauses of this verse separately. The question of compulsion is taken up in the article on 10:99, would you then compel people until they become believers, and is not repeated here.",
            "bn": "দুর্বল আর শক্তিশালী নিয়ে কুরতুবীর কথাটি ফিরে তাকায় ১৮:২৮ আয়াতের দিকে। মাআরিফুল কুরআন ১৮:২৮ থেকে ১৮:৩০ পর্যন্ত আয়াতগুলো একসঙ্গে আলোচনা করেছে, আর সেখানে পুরো আলোচনা ওই আয়াতের পটভূমি নিয়ে: প্রভাবশালী লোকেরা চেয়েছিল গরিব মুমিনদের মজলিস থেকে সরিয়ে দেওয়া হোক। এই আয়াতের বাক্যগুলো সেখানে আলাদা করে আলোচিত হয়নি। জবরদস্তির প্রশ্নটি এসেছে ১০:৯৯ আয়াতের আলোচনায়: তুমি কি মানুষকে জোর করবে যাতে তারা মুমিন হয়ে যায়? তাই এখানে তা আর দোহরানো হলো না।"
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
            "en": "Ibn Kathir, at-Tabari, al-Baghawi and al-Qurtubi attach a narration from Abu Sa'id al-Khudri on al-muhl. At-Tirmidhi records it at 2581 and says he knows it only through Rishdin ibn Sa'd, whose memory was criticised; the narration giving the suradiq four walls sits in the same chain, under the same remark, at 2584. None of the commentaries consulted here attaches to this verse a hadith that its collector graded sound, and this reading rests on none.",
            "bn": "ইবন কাসীর, তাবারী, বাগাভী ও কুরতুবী মুহল প্রসঙ্গে আবু সাঈদ খুদরী (রাঃ) থেকে একটি বর্ণনা আনেন। তিরমিযী ২৫৮১ নম্বরে তা বর্ণনা করে বলেন, রিশদীন ইবন সা'দ ছাড়া অন্য কোনো সূত্রে তিনি এটি জানেন না, আর স্মৃতিশক্তির কারণে রিশদীনের সমালোচনা করা হয়েছে। সুরাদিকের চারটি দেয়াল থাকার বর্ণনাও একই সনদে, একই মন্তব্যসহ, ২৫৮৪ নম্বরে আছে। সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে এমন কোনো হাদিস যুক্ত করেনি যাকে সংকলক সহীহ বলেছেন। এ লেখাও তেমন কোনো বর্ণনার উপর দাঁড়িয়ে নেই।"
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
            "en": "This needs saying plainly. The verse speaks only of what it names: a fire prepared for the wrongdoers, whom the commentators here gloss as the disbelievers, and a drink that brings no relief. It is a warning from Allah about the Hereafter. It licenses nothing against any living person or community. Nobody is appointed by it to name who belongs to the Fire, and it gives no warrant for harming anybody. Its own grammar leaves the answer with each hearer, and that is where the reader should leave it too.",
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
            "bn": "উলাইকা লাহুম জান্নাতু আদন: তাদের জন্য আছে স্থায়ী জান্নাত। তাবারীর মতে জান্নাতু আদন হলো আখিরাতে চিরকাল থাকার বাগান। কুরতুবী যোগ করেন, আদন মানে থিতু হয়ে থাকা, না নড়া। এই ধাতু ব্যবহার হয় সেই উটের বেলায়, যে ভালো চারণভূমি ছেড়ে কোথাও যায় না। একই ধাতু থেকে এসেছে খনির নাম, কারণ খনিতে মানুষ গ্রীষ্ম-শীত পড়ে থাকে। কুরতুবী তো একে জান্নাতের কেন্দ্রই বলেন, বাকি বাগানগুলো এর চারপাশ ঘিরে। 'তাদের' শব্দটা সোজা আগের আয়াতের মুমিনদের দিকে ইশারা করে, যাদের প্রতিদান নষ্ট না করার কথা আল্লাহ দিয়েছেন।"
          },
          {
            "en": "Tajri min tahtihimu al-anhar: rivers flow beneath them. Ibn Kathir and the Muyassar both gloss the phrase as flowing beneath their chambers and dwellings, not merely somewhere below. Ibn Kathir sets it against Pharaoh's boast in 43:51, that the rivers of Egypt ran beneath him; the believer is given for keeps what the tyrant claimed for a season. As-Sa'di pictures trees so many they shade whoever is under them, and rivers so many they run beneath those trees and lofty houses. The scene is not a distant view but a place you live inside.",
            "bn": "তাজরি মিন তাহতিহিমুল আনহার: তাদের নিচ দিয়ে বয়ে চলে নহর। ইবন কাসীর আর মুয়াসসার দুজনেই বলেন, নহর বইবে তাদের কক্ষ আর ঘরবাড়ির নিচ দিয়ে, শুধু নিচে কোথাও নয়। ইবন কাসীর এর পাশে রাখেন ৪৩:৫১ আয়াতে ফেরাউনের অহংকারী দাবি: মিসরের নদীগুলো তার নিচ দিয়ে বয়ে যায়। জালিম যা কিছুদিনের জন্য নিজের বলে দাবি করেছিল, মুমিন তা পায় চিরকালের জন্য। সাদির ছবিতে গাছ এত ঘন যে নিচে যে-ই থাকে, ছায়া পায়; আর নহর এত বেশি যে সেই গাছ আর উঁচু ঘরগুলোর নিচ দিয়ে বয়ে চলে। এ দূর থেকে দেখার দৃশ্য নয়, এ এমন জায়গা যার ভেতরে আপনি থাকবেন।"
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
          "bn": "হেলান দিয়ে নিশ্চিন্ত"
        },
        "p": [
          {
            "en": "Muttakiina fiha ala al-araik: reclining therein on couches. Ibn Kathir says the word muttakiin carries two readings, lying down or sitting with the legs folded, and he judges the second closer to what is meant here. The araik, he explains, are the plural of arika, a bed set under a canopy; at-Tabari and al-Qurtubi give the same, a couch within curtained drapes, and al-Qurtubi cites Ibn Abbas that they are beds of gold studded with pearl and ruby with the canopy over them. Qatada, through Abd al-Razzaq, reads the very word araik as those canopies.",
            "bn": "মুত্তাকিইনা ফিহা আলাল আরাইক: সেখানে তারা আসনে হেলান দিয়ে থাকবে। ইবন কাসীর বলেন, মুত্তাকিইন শব্দের দুটি ব্যাখ্যা আছে: শুয়ে থাকা, অথবা পা গুটিয়ে বসা। তাঁর মতে এখানে দ্বিতীয়টিই বেশি খাটে। তিনি বুঝিয়ে দেন, আরাইক হলো আরিকা শব্দের বহুবচন, মানে ছাউনির নিচে পাতা আসন। তাবারী আর কুরতুবীও একই কথা বলেন: পর্দাঘেরা জায়গায় রাখা আসন। কুরতুবী ইবন আব্বাসের বরাতে বলেন, এগুলো সোনার আসন, মুক্তা আর ইয়াকুতে খচিত, মাথার উপর ছাউনি টানানো। আর আবদুর রাযযাকের সূত্রে কাতাদা বলেন, আরাইক শব্দের মানেই ওই ছাউনিগুলো।"
          },
          {
            "en": "As-Sa'di reads the posture, not just the furniture. A couch, he says, is not even called an arika until it is dressed and made fine, and to lean upon it points to complete rest, the passing of fatigue, and servants moving about with whatever the soul desires. To sit propped and at ease is the body of someone who has arrived and has nothing left to guard against. That is the note the verse strikes here: not the striving of the earlier verses, where the Prophet is told to hold himself patient with the poor who call on their Lord, but the settled ease that the striving was for.",
            "bn": "সাদি কেবল আসবাব নয়, বসার ভঙ্গিটাও পড়েন। তিনি বলেন, আসন সাজিয়ে-গুছিয়ে সুন্দর না করা পর্যন্ত তাকে আরিকা বলাই হয় না। আর তাতে হেলান দেওয়া মানে পুরো আরাম, ক্লান্তি আর অবসাদ দূর হয়ে যাওয়া, আর মন যা চায় তা নিয়ে খাদিমদের আসা-যাওয়া। এভাবে ঠেস দিয়ে নিশ্চিন্তে বসে সেই মানুষ, যে পৌঁছে গেছে, যার আর কোনো কিছু থেকে সতর্ক থাকার দরকার নেই। এখানে আয়াতের সুর এটাই। আগের আয়াতগুলোর সেই সাধনা নয়, যেখানে নবী ﷺ-কে বলা হয়েছিল রবকে ডাকা গরিবদের সঙ্গে ধৈর্য ধরে থাকতে। বরং সেই থিতু প্রশান্তি, যার জন্যই ছিল এত সাধনা।"
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
            "bn": "ইউহাল্লাওনা শব্দের ব্যাখ্যায় কুরতুবী ঠিক এই অলংকার নিয়ে একটি সহীহ বর্ণনা আনেন। ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (হাদিস ২৫০) বর্ণনা করেন: আবু হুরায়রা (রাঃ) অজু করছিলেন, আবু হাযিম তাঁর পেছনে দাঁড়িয়ে। তিনি দেখলেন, আবু হুরায়রা হাত ধোয়া টেনে নিচ্ছেন বগল পর্যন্ত। জিজ্ঞেস করা হলে আবু হুরায়রা (রাঃ) বললেন, তিনি তাঁর প্রিয় নবী ﷺ-কে বলতে শুনেছেন, 'মুমিনের অলংকার সেখানেই পৌঁছবে যেখানে অজুর পানি পৌঁছয়।' সহীহ মুসলিমে থাকায় বর্ণনাটি সহীহ বলে গণ্য। শব্দগুলো তাঁরই, এখানে পুরোটা তুলে দেওয়া হলো।"
          },
          {
            "en": "The report ties the gold of the verse to a wet act done before dawn. The bracelets of 18:31 are not won by wishing for them; a companion lengthened his wudu because he had heard where the ornament would one day sit. It also fits what as-Sa'di drew from the open verb: the adornment is promised to believing men and women alike, though gold and silk are held back from men in this life. The wrist that will wear gold is the wrist that is washed for prayer now.",
            "bn": "বর্ণনাটি আয়াতের সোনাকে জুড়ে দেয় ভোর হওয়ার আগে পানিতে ভেজা একটা আমলের সঙ্গে। ১৮:৩১ আয়াতের কংকণ শুধু মনে মনে চাইলেই মেলে না। একজন সাহাবি অজু লম্বা করেছিলেন, কারণ তিনি শুনেছিলেন অলংকার একদিন কোথায় গিয়ে বসবে। খোলা ক্রিয়াটি থেকে সাদি যে কথা বের করেছিলেন, তার সঙ্গেও এটা মেলে: এই অলংকারের ওয়াদা মুমিন নারী-পুরুষ সবার জন্য, যদিও দুনিয়ায় পুরুষের জন্য সোনা আর রেশম নিষেধ। যে কব্জি একদিন সোনা পরবে, সেই কব্জিই আজ নামাজের জন্য ধোয়া হয়।"
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
            "bn": "মাআরিফুল কুরআন একটা ন্যায্য আপত্তির সরাসরি মোকাবিলা করে। অলংকার আর সোনা এ দুনিয়ায় পুরুষকে মানায় না। দুনিয়ার বিধান পুরুষের জন্য সোনার আংটি, এমনকি সোনার ঘড়ির চেইনও নিষেধ করেছে, রেশমি পোশাকও। তাহলে জান্নাতের পুরুষদের কেন কংকণ আর রেশমে সাজানো হবে? জবাব হলো, কোনটা সুন্দর, তা ঠিক করে প্রচলন; আর প্রচলন দেশে দেশে, যুগে যুগে আলাদা। এক দেশ যা দামি মনে করে, আরেক দেশ তাকে কুৎসিত ভাবে; এক শতক যা পছন্দ করে, পরের শতক হয়তো তাকে তুচ্ছ করে। সৌন্দর্য বস্তুর কোনো বাঁধাধরা নিয়ম নয়।"
          },
          {
            "en": "The deeper answer, Ma'arif says, is that the next life is a separate order of existence altogether, not to be measured by the rules and analogies of the world we know. In Paradise, ornament and silk are established as beauty for men, and nobody there finds it strange. The prohibition that binds a man now is a law of this world, not a verdict on the thing itself. This keeps the reward from being pulled down to the level of a luxury catalogue: it is not this world's finery scaled up, but a different world's ordinary.",
            "bn": "মাআরিফের মতে আরও গভীর জবাব হলো, আখিরাত পুরোপুরি আলাদা এক জগৎ। আমাদের চেনা দুনিয়ার নিয়ম আর উপমা দিয়ে তাকে মাপা যায় না। জান্নাতে অলংকার আর রেশমই পুরুষের সৌন্দর্য, সেখানে কারও কাছে তা অদ্ভুত লাগে না। যে নিষেধ আজ পুরুষকে বেঁধে রাখে, তা এ দুনিয়ার বিধান, জিনিসটা নিজে খারাপ বলে কোনো রায় নয়। এতে পুরস্কারটা বিলাসী পণ্যের তালিকার স্তরে নেমে আসে না। এ দুনিয়ার জৌলুসেরই বড় সংস্করণ নয়, এ আরেক জগতের সাধারণ জিনিস।"
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
            "bn": "নিমাস সাওয়াবু ওয়া হাসুনাত মুরতাফাকা: কতই না উত্তম পুরস্কার, আর কতই না উত্তম ঠাঁই। ইবন কাসীর একে পড়েন দুই আয়াত আগের আগুনের জবাব হিসেবে। সেখানেও ঠিক এই গড়নে শেষ হয়েছিল: বিসাশ শারাবু ওয়া সাআত মুরতাফাকা, কতই না নিকৃষ্ট পানীয়, আর কতই না খারাপ ঠাঁই। মুরতাফাকা মানে যেখানে মানুষ থিতু হয়, আরাম করে। এই একটা শব্দই বসানো হয়েছে দুবার: একবার মন্দ, একবার ভালো। ইবন কাসীর একই রকম জোড়া বৈপরীত্য দেখান সূরা ফুরকানের ২৫:৬৬ ও ২৫:৭৬ আয়াতে। সেখানেও জাহান্নাম আর জান্নাত, দুটোর বর্ণনাই শেষ হয় থাকার জায়গা নিয়ে নিজ নিজ রায়ে।"
          },
          {
            "en": "At-Tabari notices the grammar. The verb hasunat is feminine because it points to the araik, the couches just named. He adds that nima and bisa are placed in speech to carry praise or blame, not to report an action, which is why Arabic keeps them the same with a feminine subject or a plural one. The point is not a technicality: the fire's verse and the garden's verse are built as mirror images, syllable for syllable, so that the ear hears the choice of 18:29, believe or disbelieve, resolve into two facing ends.",
            "bn": "তাবারী ব্যাকরণটা খেয়াল করেন। হাসুনাত ক্রিয়াটি স্ত্রীলিঙ্গ, কারণ তা ইশারা করে আরাইকের দিকে, মানে এইমাত্র যে আসনগুলোর কথা এল। তিনি যোগ করেন, নিমা আর বিসা কথায় আসে প্রশংসা বা নিন্দা বোঝাতে, কোনো কাজের খবর দিতে নয়। এ জন্যই কর্তা স্ত্রীলিঙ্গ হোক বা বহুবচন, আরবিতে এ শব্দ দুটো বদলায় না। এটা নিছক ব্যাকরণের খুঁটিনাটি নয়। আগুনের আয়াত আর জান্নাতের আয়াত গড়া হয়েছে একে অপরের আয়নার মতো, ধ্বনিতে ধ্বনিতে মিলিয়ে, যাতে কানে ধরা পড়ে: ১৮:২৯ আয়াতের বাছাই, ঈমান না কুফর, গিয়ে ঠেকছে মুখোমুখি দুই পরিণতিতে।"
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
            "bn": "এই পুরস্কারকে সূরার অন্য জায়গায় বলা শোভা থেকে আলাদা করে দেখা দরকার। ১৮:৪৬ আয়াতে সম্পদ আর সন্তানকে বলা হয়েছে দুনিয়ার জীবনের শোভা, আর ১৮:৪৫ আয়াতে সেই জীবনকে তুলনা করা হয়েছে সবুজ গাছপালার সঙ্গে, বাতাস যাকে অল্প দিনেই উড়িয়ে নেয়। এখানকার সবুজ রেশম ঠিক উল্টো। এ ক্ষণস্থায়ী জীবনের শোভা নয়, আখিরাতের পুরস্কার। সাদি এ কথাটা বিস্তারিত বলেন: জান্নাতের সবচেয়ে নিচের স্তরের মানুষটিও নিজের রাজত্বে দুই হাজার বছর ঘুরে বেড়াবে, তবু যা পেয়েছে তার শেষ খুঁজে পাবে না। তারপরও সেই নিয়ামতের সৌন্দর্য বেড়েই চলবে, কখনো একঘেয়ে হয়ে থেমে যাবে না।"
          },
          {
            "en": "The verse ends on the couch and the settled ease, and then the surah turns. The next verse opens a parable of two men, one given two gardens of grapevines and the other not, and that story belongs to itself. Here the reward has been laid out in full: the residence, the rivers, the gold, the silk, the couch, and the one word that answers the fire. The invitation of these verses is not to admire the furniture but to read the closing line as a question. Two verses end with the same music and opposite meaning, and each reader is spending today writing toward one of them.",
            "bn": "আয়াত শেষ হয় আসন আর থিতু প্রশান্তিতে, তারপর সূরা মোড় নেয়। পরের আয়াতে শুরু হয় দুই ব্যক্তির উপমা: একজনকে দেওয়া হয়েছিল আঙুরের দুটি বাগান, অন্যজনকে নয়। সে কাহিনি আলাদা, তার কথা তার জায়গায়। এখানে পুরস্কারের পুরো ছবিটা মেলে ধরা হয়েছে: স্থায়ী নিবাস, নহর, সোনা, রেশম, আসন, আর সেই একটি শব্দ, যা আগুনের জবাব দেয়। এই আয়াতগুলো আসবাব দেখে মুগ্ধ হতে ডাকে না, ডাকে শেষ লাইনটাকে একটা প্রশ্ন হিসেবে পড়তে। দুটি আয়াত শেষ হয় একই সুরে, অথচ উল্টো অর্থে। আর প্রত্যেক পাঠক আজকের দিনটা দিয়ে এ দুটির কোনো একটির দিকেই নিজের গল্প লিখে চলেছেন।"
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
            "bn": "আল্লাহ তাঁর নবী ﷺ-কে বলছেন মানুষের সামনে দুই ব্যক্তির উপমা তুলে ধরতে (১৮:৩২)। একজনকে তিনি দিয়েছিলেন আঙুরের দুটি বাগান, চারপাশ খেজুরগাছে ঘেরা, মাঝখানে শস্যখেত। দুই বাগানই পুরো ফল দিত, আর মাঝ দিয়ে বয়ে যেত একটি নহর (১৮:৩৩)। লোকটির ছিল প্রাচুর্য, আর প্রাচুর্য প্রায়ই চুপচাপ যা করে, তা-ই করল। এ এক মাসাল, মানে গড়ে তোলা দৃষ্টান্ত। এর দুই চরিত্র বাস্তবের কোনো প্রতিবেশী নয় যে নাম ধরে তাদের বিচার করতে হবে; এরা দুই ধরনের মানুষ, যাদের সঙ্গে শ্রোতা নিজেকে মিলিয়ে দেখবে।"
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
            "bn": "‘তার সাথী তাকে বলল, কথা চালিয়ে যেতে যেতেই’ (১৮:৩৭)। তাবারী জানান, এই বক্তা সেই সাথী, ধনে-সন্তানে যে ধনী লোকটির চেয়ে কম ছিল, ১৮:৩৪-এর সেই মুমিনই। আর ‘কথা চালিয়ে যেতে যেতে’ কথাটার মানে তিনি সোজাসুজি বলেন: তাকে উদ্দেশ করে, তার সঙ্গে কথা বলতে বলতে। এ জবাব দূর থেকে চেঁচিয়ে বলা নয়। চলতি আলাপেই এক পক্ষের কথা, মুখোমুখি দেওয়া উত্তর, এমন লোককে, যে এইমাত্র ঘোষণা দিয়েছে তাকে কিছুই ছুঁতে পারবে না।"
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
            "bn": "জবাবটা শুরু হয় একটা প্রশ্ন দিয়ে, যা আসলে অভিযোগ: ‘তুমি কি তাঁকে অস্বীকার করছ, যিনি তোমাকে সৃষ্টি করেছেন...?’ (১৮:৩৭)। ইবন কাসীর একে বলেন ধিক্কার। তাঁর পাঠে মুমিন সাথী লোকটিকে উপদেশ দিচ্ছেন, ধমকও দিচ্ছেন, কারণ সে কুফরে পড়ে গেছে আর দম্ভ তাকে ধোঁকা দিয়েছে। আরবি ক্রিয়া ‘আকাফারতা’ নিরীহ কোনো ‘তুমি কি সন্দেহ করছ’ নয়। লোকটির সহজ নিশ্চয়তাকে শেষ পর্যন্ত টেনে নিলে যা দাঁড়ায়, শব্দটা সোজা তারই নাম ধরে।"
          },
          {
            "en": "What exactly had he denied? Ibn Kathir frames it as juhud, an outright denial of the very Lord who created him. At-Tabari and al-Muyassar tie it more narrowly to the man's words in 18:36: he doubted the Hour and doubted he would be raised, so the rebuke is aimed at that denial of being brought back as a new creation after he has become dust and bone. As-Sa'di gathers both, calling it a denial of God's blessing joined to a claim that no resurrection waits.",
            "bn": "সে ঠিক কী অস্বীকার করেছিল? ইবন কাসীর একে বলেন জুহূদ: যে রব তাকে সৃষ্টি করেছেন, সরাসরি তাঁকেই অস্বীকার। তাবারী আর মুয়াসসার একে আরও নির্দিষ্ট করে জুড়ে দেন ১৮:৩৬-এ বলা লোকটির কথার সঙ্গে। সে কিয়ামত নিয়ে সন্দেহ করেছিল, সন্দেহ করেছিল তাকে আবার ওঠানো হবে কি না। তাই ধমকের নিশানা ঠিক এই অস্বীকার: মাটি আর হাড় হয়ে যাওয়ার পর নতুন করে সৃষ্টি হয়ে ফিরে আসাকে অস্বীকার। সাদী দুটোকেই একসঙ্গে ধরেন: আল্লাহর নিয়ামত অস্বীকার, তার সঙ্গে এই দাবি যে কোনো পুনরুত্থান নেই।"
          },
          {
            "en": "So the charge has two faces the commentators keep together. One is ingratitude: as-Sa'di stresses that this is a man denying the very blessing that made him. The other is denial of the Hour, which is where 18:36 had left him. The believer does not separate the two, because in the man they are one movement: a heart so full of what it owns that it forgets the Giver and doubts it will ever answer for anything. That is the disbelief the question names.",
            "bn": "তাই অভিযোগের দুটি দিক, তাফসীরকারেরা যা একসঙ্গেই রাখেন। একটি অকৃতজ্ঞতা: সাদী জোর দিয়ে বলেন, যে নিয়ামত তাকে গড়েছে, লোকটি সেই নিয়ামতকেই অস্বীকার করছে। অন্যটি কিয়ামতের অস্বীকার, ১৮:৩৬ আয়াত তাকে যেখানে রেখে গিয়েছিল। মুমিন সাথী দুটোকে আলাদা করেন না, কারণ লোকটির ভেতরে এ দুটো একই টান। নিজের মালিকানায় মন এত ভরে গেছে যে দাতাকেই ভুলে গেছে, আর সন্দেহ করছে, কোনোদিন কোনো কিছুর জবাব দিতে হবে কি না। প্রশ্নটা এই কুফরেরই নাম ধরে ডাকে।"
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
            "bn": "‘...তারপর এক শুক্রবিন্দু থেকে’ (১৮:৩৭)। তাবারী একে পড়েন প্রত্যেক মানুষের নিজের দ্বিতীয় ধাপ হিসেবে: মাটি থেকে আদম (আঃ)-এর সৃষ্টির পর আল্লাহ তোমাকে বানিয়েছেন নারী-পুরুষের শুক্রবিন্দু থেকে। মুয়াসসারও একই কথা বলেন: মা-বাবা দুজনের ফোঁটা। ইবন কাসীরের ভাষা আরও কড়া: তুচ্ছ পানির নির্যাস। আয়াত এগোয় গোটা মানবজাতির মাটি থেকে মায়ের গর্ভে একজন মানুষের শুরুর সেই তরলে। এর কোনো উপাদান নিয়েই কেউ গর্ব করতে চাইবে না।"
          },
          {
            "en": "There is a deliberate descent in the two words. Dust and a drop are both humble, and set beside two rivered gardens they are almost nothing. Ma'arif al-Qur'an keeps the reader on this ground: worldly wealth is handed out by God to believer and disbeliever alike, even to snakes and scorpions and beasts, so it never marks a man as favoured. The drop he came from tells the truer story of his standing than the fruit he now counts ever could.",
            "bn": "শব্দ দুটো জেনেবুঝেই নিচের দিকে নামে। মাটি আর ফোঁটা, দুটোই সামান্য; নহর-বওয়া দুই বাগানের পাশে রাখলে প্রায় কিছুই না। মাআরিফুল কুরআন পাঠককে এই মাটিতেই দাঁড় করিয়ে রাখে: দুনিয়ার সম্পদ আল্লাহ মুমিন-কাফির সবাইকে দেন, এমনকি সাপ-বিছা আর পশুকেও; তাই সম্পদ কখনো কাউকে আল্লাহর প্রিয় বলে চিহ্নিত করে না। আজ যে ফল সে গুনছে, তার চেয়ে অনেক সত্যি করে তার আসল অবস্থান বলে দেয় সেই ফোঁটা, যা থেকে সে এসেছে।"
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
            "bn": "‘...তারপর তোমাকে মানুষ করে ঠিকঠাক গড়েছেন’ (১৮:৩৭)। তাবারী ও বাগাভীর মতে ‘সাওওয়াকা রাজুলা’ মানে, আল্লাহ তোমাকে মাপমতো গড়ে সুস্থ, সোজা মানুষ বানিয়েছেন, নারী নয়, পুরুষ করে। কুরতুবীও একই অর্থ বলেন: গড়নে-চেহারায় সুঠাম, অঙ্গপ্রত্যঙ্গে পূর্ণ করে বানিয়েছেন। যার শুরু মাটি আর এক ফোঁটা থেকে, সে এখন এমন এক মানুষ, যে বাগানে ঢুকে চারপাশে চোখ বুলিয়ে ভাবতে পারে গোটা দুনিয়াই তার।"
          },
          {
            "en": "As-Sa'di draws the argument out furthest. He reads the whole sequence as God moving the man from stage to stage: the favour of being brought into existence, then of being kept in it, blessing upon blessing, until He proportioned him a man complete in body and mind. And, as-Sa'di adds, it was by this same grace that the means of the man's wealth were made easy for him. His gardens did not come by his own strength; they came, like his very self, as a gift.",
            "bn": "সাদী যুক্তিটাকে সবচেয়ে দূর পর্যন্ত টানেন। তিনি গোটা ধারাটাকে পড়েন আল্লাহর হাতে ধাপে ধাপে মানুষটিকে এগিয়ে নেওয়া হিসেবে: প্রথমে অস্তিত্বে আনার নিয়ামত, তারপর সেই অস্তিত্বে ধরে রাখা, নিয়ামতের পর নিয়ামত, যতক্ষণ না তাকে দেহে-মনে পূর্ণ এক মানুষ করে গড়া হলো। আর সাদী যোগ করেন, এই একই অনুগ্রহেই লোকটির সম্পদের উপায়গুলো তার জন্য সহজ করা হয়েছিল। তার বাগান নিজের জোরে আসেনি; তার নিজের সত্তার মতোই, এসেছে দান হিসেবে।"
          },
          {
            "en": "This is why the origin is the answer to the boast. The man had said he was greater in wealth and mightier in men, as if he had built himself. The verse walks him back through the only true account of his making, in which he supplied nothing. As-Sa'di's conclusion is blunt: after all this, it does not befit you to disbelieve in the One who made you, to deny His gift, and to claim there is no resurrection to come.",
            "bn": "এ কারণেই তার শুরুটাই তার গর্বের জবাব। লোকটা বলেছিল সে ধনে বড়, জনবলে শক্তিশালী, যেন নিজেকে সে নিজেই বানিয়েছে। আয়াত তাকে ধাপে ধাপে ফিরিয়ে নিয়ে যায় তার সৃষ্টির একমাত্র সত্য বিবরণে, যেখানে তার নিজের কোনো অবদান নেই। সাদীর সিদ্ধান্ত সাফ: এত কিছুর পর যিনি তোমাকে গড়েছেন তাঁকে অস্বীকার করা, তাঁর দান অস্বীকার করা, আর পুনরুত্থান বলে কিছু নেই বলে দাবি করা তোমাকে মানায় না।"
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
            "bn": "সৃষ্টির এই ধাপগুলো সেই কিয়ামত নিয়েও একটা যুক্তি, যাতে লোকটা সন্দেহ করেছিল। কুরতুবী কথাটা ধারালোভাবে বলেন: মাটি আর ফোঁটা থেকে নিজের তৈরি হওয়াটা লোকটা সহজেই মেনে নেয়, অথচ এটা সেই পুনরুত্থানের চেয়েও বেশি বিস্ময়কর, যা সে অস্বীকার করছে। মুয়াসসারও এই কথোপকথন থেকে একই শিক্ষা নেন: যিনি প্রথমবার সৃষ্টি করতে পেরেছেন, তিনি আবারও তা ফিরিয়ে আনতে পারেন। তাবারীর মতে গোটা প্রশ্নটার নিশানাই এটা: যিনি তোমাকে বানিয়েছেন, পচে-গলে যাওয়ার পর তিনি তোমাকে আবার বানাবেন, তুমি কি তা অস্বীকার করতে পারো?"
          },
          {
            "en": "The logic is quiet but complete. A man who accepts the harder act has no ground to deny the easier one. He has watched a species raised from soil and a person assembled from a drop; a second making, on this reasoning, asks less, not more. This is why the believer answers a boast about wealth with a lesson about wombs and dust. The doubt of the Hour and the pride in the gardens share one root, and a single fact pulls up both.",
            "bn": "যুক্তিটা নীরব, তবু পূর্ণ। যে কঠিন কাজটা মেনে নেয়, সহজটাকে অস্বীকার করার কোনো ভিত্তি তার থাকে না। সে তো দেখেছে মাটি থেকে গোটা মানবজাতিকে দাঁড় করানো, এক ফোঁটা থেকে একজন মানুষকে গড়ে তোলা। এই যুক্তিতে দ্বিতীয়বার গড়া বেশি কিছু চায় না, বরং কম চায়। এ জন্যই মুমিন সাথী সম্পদের গর্বের জবাব দেন মাতৃগর্ভ আর মাটির কথা দিয়ে। কিয়ামতে সন্দেহ আর বাগানের অহংকার, দুটোর শিকড় এক, আর একটা সত্যই দুটোকে উপড়ে ফেলে।"
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
            "bn": "লোকটির নিশ্চয়তার তলায় ছিল একটা সরল ভুল, আর মাআরিফুল কুরআন সেটা ধরিয়ে দেয়। ধনী লোকটা ভেবেছিল, তার সম্পদ মানেই আল্লাহ তার প্রতি খুশি, আর পরকাল বলে কিছু থাকলে সেখানে কেবল আরও যোগ হবে। মুমিন সাথীর জবাব সম্পদ আর আল্লাহর সন্তুষ্টির মাঝের সুতোটাই কেটে দেয়। দুনিয়ার সুযোগ-সুবিধা গুনাহগার আর কাফিরের কাছেও নেককারের মতোই পৌঁছায়; এটা আল্লাহর খুশির কোনো সনদ নয়। আল্লাহর কাছে কার কী মর্যাদা, তা নির্ভর করে ঈমান আর আমলের ওপর, কার ফসল কত বেশি তার ওপর নয়।"
          },
          {
            "en": "It is worth saying plainly what this parable is and is not. It describes a coined example, a type of the proud and heedless heart, set down so that the listener can search for that heart in himself. It passes no verdict on any living person and licenses nothing against anyone rich, nor against any real neighbour or community. The arrogant man of the story is a mirror to look into, not a label to pin on someone else. That is the only use the verse invites.",
            "bn": "এই উপমা কী আর কী নয়, তা সোজাসুজি বলা দরকার। এটা এক গড়ে তোলা দৃষ্টান্ত, অহংকারী আর গাফেল মনের একটা নমুনা। রাখা হয়েছে, যাতে শ্রোতা সেই মনটাকে নিজের ভেতরে খুঁজে দেখে। এটা কোনো জীবিত মানুষের ওপর রায় দেয় না। কোনো ধনী মানুষ, কোনো বাস্তব প্রতিবেশী বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতিও দেয় না। কাহিনির অহংকারী লোকটা একটা আয়না, যাতে নিজের মুখ দেখতে হয়; অন্যের গায়ে সাঁটার লেবেল নয়। আয়াত এর এই একটাই ব্যবহার চায়।"
          },
          {
            "en": "No sound hadith attaches directly to this verse. The narrations the commentators cite here, the treasure of Paradise in 'no power except with Allah' and the counsel to say 'what Allah wills', belong to the phrases of 18:39 and are best left to their own place. What 18:37 leaves the reader is smaller and harder: a memory. Before the gardens, before the wealth and the men, there was dust and a drop, and Someone who shaped them into you. Hold that, and arrogance has nowhere left to stand.",
            "bn": "এই আয়াতের সঙ্গে সরাসরি জোড়া কোনো সহীহ হাদিস নেই। তাফসীরকারেরা এখানে দুটি বর্ণনা আনেন: ‘আল্লাহ ছাড়া কোনো শক্তি নেই’ বাক্যটি জান্নাতের গুপ্তধন, আর ‘আল্লাহ যা চেয়েছেন’ বলার উপদেশ। দুটোই ১৮:৩৯ আয়াতের বাক্যের সঙ্গে জড়িত, তাই সেগুলো সেখানেই থাক। ১৮:৩৭ পাঠকের হাতে যা রেখে যায়, তা ছোট, কিন্তু কঠিন: একটা স্মৃতি। বাগানের আগে, সম্পদ আর জনবলের আগে ছিল মাটি আর এক ফোঁটা, আর ছিলেন এমন একজন, যিনি সেগুলো দিয়ে আপনাকে গড়েছেন। এ কথা মনে ধরে রাখুন, অহংকার আর দাঁড়ানোর জায়গা পাবে না।"
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
          "bn": "এক রায় আর এক শোভার মাঝখানে"
        },
        "p": [
          {
            "en": "The parable arrives at a precise point. 18:32-44 tells of a man with two gardens who was certain his estate would never perish, and the account ends at 18:44 with the verdict that there the authority belongs to Allah, the Truth, who is best in reward and best in outcome. This verse comes directly after that verdict, and 18:46 comes directly after this one to name wealth and children as the adornment of the life of this world.",
            "bn": "উপমাটি এসেছে একেবারে মাপা জায়গায়। ১৮:৩২-৪৪ আয়াতে আছে দুই বাগানের মালিক এক লোকের কথা, যে নিশ্চিত ছিল তার সম্পত্তি কোনোদিন ধ্বংস হবে না। কাহিনি শেষ হয় ১৮:৪৪-এ এই রায়ে: সেখানে সব কর্তৃত্ব সত্য আল্লাহর, প্রতিদানেও তিনি শ্রেষ্ঠ, পরিণামেও শ্রেষ্ঠ। আমাদের আয়াত আসে ঠিক সেই রায়ের পরে। আর এর ঠিক পরেই আসে ১৮:৪৬, যেখানে সম্পদ আর সন্তানকে বলা হয়েছে দুনিয়ার জীবনের শোভা।"
          },
          {
            "en": "The order is a widening. First one man and one ruined estate; then the whole of worldly life compressed into a single image; then the two things people actually build their lives around. The parable is not dropped into the surah as general pessimism. It generalises a case the reader has just watched close, and hands its result straight to the verse that follows, which is where the alternative is finally named.",
            "bn": "ক্রমটা ধাপে ধাপে বড় হয়। প্রথমে একজন মানুষ আর তার ধ্বংস হওয়া সম্পত্তি। তারপর গোটা দুনিয়ার জীবন, একটিমাত্র ছবিতে গুটিয়ে আনা। তারপর সেই দুটি জিনিস, যাকে ঘিরে মানুষ সত্যিই জীবন সাজায়। উপমাটি সূরায় নিছক হতাশার কথা হিসেবে আসেনি। পাঠক এইমাত্র কাছ থেকে যে ঘটনা দেখল, উপমাটি সেটাকেই সবার জন্য সাধারণ করে, তারপর তার ফল সোজা তুলে দেয় পরের আয়াতের হাতে। সেখানেই অবশেষে বলা হয়, এর বদলে কী।"
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
            "bn": "ওয়াদরিব লাহুম: আয়াত শুরু হয় নবী ﷺ-কে দেওয়া এক আদেশ দিয়ে। 'দারাবা মাসালান' হলো উপমা দাঁড় করানোর জন্য কুরআনের নিজস্ব বাগ্‌ধারা। এরপর ছবিটা এগোয় তিন ধাপে। কামা-ইন আনযালনাহু মিনাস-সামা: যেমন পানি, যা আমি আকাশ থেকে নামিয়েছি। শব্দটা 'মা', মানে পানি; বেশির ভাগ অনুবাদে এটা 'বৃষ্টি' হয়ে আসে। ফাখতালাতা বিহি নাবাতুল-আরদ: তারপর তার সঙ্গে মিশে গেল মাটির উদ্ভিদ। তারপর ফা-আসবাহা হাশীমান তাযরূহুর-রিয়াহ: তা হয়ে গেল 'হাশীম', শুকনো, ভাঙাচোরা, যাকে বাতাস উড়িয়ে নেয়।"
          },
          {
            "en": "Ibn Kathir explains the mingling as the water mixing with the seeds in the ground so that they grow and turn out well. Hashim comes from a root for crushing something brittle; he glosses it as withered up, and tadhruhu as the winds tossing it right and left. And asbaha literally means it entered upon the morning. The collapse is given no season and no number of years. It is dated to the following morning.",
            "bn": "ইবনে কাসীর 'মিশে যাওয়া'-র ব্যাখ্যা করেন এভাবে: পানি মাটির ভেতরের বীজের সঙ্গে মেশে, ফলে বীজ গজায়, চারা সুন্দর হয়ে বেড়ে ওঠে। 'হাশীম' শব্দের ধাতুর মানে ভঙ্গুর কিছু গুঁড়িয়ে ফেলা; তিনি এর অর্থ করেন শুকিয়ে যাওয়া, আর 'তাযরূহু' মানে বাতাস তাকে ডানে-বাঁয়ে ছুড়ে ফেলে। আর 'আসবাহা'-র আক্ষরিক অর্থ, সকালে পৌঁছল। ধ্বংসের জন্য কোনো মৌসুম বা বছরের হিসাব দেওয়া হয়নি। তার দিন-তারিখ একটাই: পরের দিন সকাল।"
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
            "bn": "ঘটনাগুলো জুড়ে রেখেছে দুটি অব্যয়, দুটিই 'ফা': ফাখতালাতা আর ফা-আসবাহা। আরবিতে 'ফা' মানে সঙ্গে সঙ্গে পরের ঘটনা; 'সুম্মা' এমন নয়, তাতে মাঝখানে সময়ের ফাঁক থাকতে পারে। তাই গোটা উপমাটাই বলা হয়েছে দ্রুত লয়ে। এর পাশে রাখুন ৫৭:২০, যেখানে একই কাহিনি বলা হয়েছে দুবার 'সুম্মা' দিয়ে: তারপর তা শুকিয়ে যায়, আর তুমি দেখো তা হলুদ হয়ে গেছে, তারপর তা হয়ে যায় 'হুতাম'। সেখানে চোখকে হলুদ হতে দেখার সময় দেওয়া হয়; এখানে সবুজ সকাল হতেই খড়কুটো।"
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
            "bn": "ওয়া কানাল্লাহু 'আলা কুল্লি শাই'ইন মুক্তাদিরা: আর আল্লাহ সবকিছুর উপর পূর্ণ ক্ষমতাবান। 'মুক্তাদির' শব্দটি 'কাদির'-এর ধাতু থেকেই, তবে আরও জোরালো রূপ। উপমাটি খড়কুটোতেই থেমে যেতে পারত, পেছনে রেখে যেত সব বৃথা হওয়ার স্বাদ। তা না করে শেষ হয় ক্ষমতার কথায়। এই অংশের ব্যাখ্যায় ইবনে কাসীর সোজাসাপ্টা: এটা করার ক্ষমতাও তাঁর, ওটা করারও। পানি নামানোর ক্ষমতা, আর সেই পানিতে যা গজিয়েছিল তা শুকিয়ে দেওয়ার ক্ষমতাও।"
          },
          {
            "en": "That closing name also turns the parable toward resurrection, which is what the Quran usually does with dead and living earth. 35:9 says that He drives the clouds to a dead land and gives life by them to the earth after its lifelessness, and then states plainly: thus is the resurrection. Read with that ending in view, the scattering of the chaff is not the last event in the account. It is a demonstration by the One who is able to gather it again.",
            "bn": "শেষের এই নাম উপমাটিকে পুনরুত্থানের দিকেও ঘুরিয়ে দেয়। মরা মাটি আর জেগে ওঠা মাটির কথা এলে কুরআন সাধারণত তা-ই করে। ৩৫:৯ আয়াতে আছে, তিনি মেঘ চালিয়ে নেন মরা ভূমির দিকে, তারপর তা দিয়ে মাটিকে জীবিত করেন তার মৃত্যুর পর; তারপর সোজা বলা হয়েছে: পুনরুত্থানও এমনই। এই সমাপ্তি মাথায় রেখে পড়লে বোঝা যায়, খড়কুটো উড়ে যাওয়াই কাহিনির শেষ ঘটনা নয়। যিনি আবার সব জড়ো করতে পারেন, এ তাঁরই দেখানো এক নমুনা।"
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
            "bn": "আয়াত কাউকে চাষাবাদ ছেড়ে দিতে বলে না। পানি সত্যিই নামে, ফসল সত্যিই বাড়ে, আর উপমার সবুজকে কোথাও ভ্রম বলা হয়নি। শুধরে দেওয়া হয়েছে একটা হিসাব: এই সবুজ কত দিন থাকে। একটা বয়স পেরোলে প্রত্যেকেই একটা পুরো চক্র শেষ হতে দেখে ফেলেছে: কোনো চাকরি, কোনো বাড়ি, বন্ধুমহল, কিংবা নিজের শরীর, যা আগে অন্যভাবে চলত। উপমাটি চায়, সেই স্মৃতিকে আপনি কপালের দোষে ঘটা ব্যতিক্রম না ভেবে প্রমাণ হিসেবে ধরুন।"
          },
          {
            "en": "What follows in practice is priced attention. The green is worth enjoying and not worth building on, which 18:46 says next in the language of reward and hope. And the closing name is where a person actually stands when something of his is scattered: not in front of a random wind, but before the One who is Perfect in Ability, who sent the water down in the first place and is not diminished by either half of the cycle.",
            "bn": "বাস্তবে এর ফল হলো, কোন জিনিসে কতটা মন দেবেন, তার ঠিক দাম কষা। সবুজ উপভোগ করার মতো, কিন্তু তার ওপর ভিত গড়ার মতো নয়। পরের আয়াত ১৮:৪৬ ঠিক এ কথাই বলে, প্রতিদান আর আশার ভাষায়। আর নিজের কিছু উড়ে গেলে মানুষ আসলে কোথায় দাঁড়িয়ে থাকে, শেষের নামটিই তা বলে দেয়: কোনো এলোমেলো বাতাসের সামনে নয়, বরং সেই পূর্ণ ক্ষমতাবানের সামনে, যিনি পানিটা প্রথমে নামিয়েছিলেন, আর চক্রের কোনো অর্ধেকেই যাঁর কিছু কমে না।"
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
          "bn": "অলঙ্কারকে অলঙ্কারই বলা"
        },
        "p": [
          {
            "en": "Wealth and children are the adornment of the life of this world. The verse does not call them evils, distractions or illusions; it calls them zinah, adornment, and adornment is real. The Quran uses the same word in 18:7 for everything on the earth: We have made what is on it an adornment for it, to test which of them is best in deed. Beauty is admitted from the start; the question the word raises is one of function. Decoration beautifies a building — it does not hold the building up.",
            "bn": "ধন-সম্পদ আর সন্তান দুনিয়ার জীবনের অলঙ্কার। আয়াত এগুলোকে মন্দ বলে না, মন ভোলানোর জিনিস বা মরীচিকাও বলে না। বলে যীনাহ, মানে অলঙ্কার; আর অলঙ্কার সত্যিকারের জিনিস। ১৮:৭ আয়াতে কুরআন পৃথিবীর সবকিছুর জন্য এই শব্দই ব্যবহার করেছে: পৃথিবীর ওপর যা কিছু আছে, আমি তা তার অলঙ্কার বানিয়েছি, যাতে পরীক্ষা করি, আমলে তাদের মধ্যে কে শ্রেষ্ঠ। সৌন্দর্যকে শুরু থেকেই মেনে নেওয়া হয়েছে। শব্দটা প্রশ্ন তোলে তার কাজ নিয়ে: কারুকাজ দালানকে সুন্দর করে, কিন্তু দালানটাকে ধরে রাখে না।"
          },
          {
            "en": "Placement gives the verse its force. It comes soon after the parable of 18:32-44, where a man with two gardens boasted that he was greater in wealth and men, declared that his estate would never perish — and ended wringing his hands over its ruins. And immediately after our verse, 18:47 shows the Day when the mountains are set moving and the earth is left level and bare. Between a garden that perished and mountains that will, the verse asks what actually remains.",
            "bn": "আয়াতটির জোর আসে তার জায়গা থেকে। এর অল্প আগেই ১৮:৩২-৪৪ আয়াতের উপমা: দুই বাগানের মালিক গর্ব করেছিল, ধনে আর জনবলে সে বড়; ঘোষণা দিয়েছিল তার এই সম্পত্তি কোনোদিন ধ্বংস হবে না। শেষে সেই ধ্বংসস্তূপের সামনে সে আফসোসে হাত কচলাচ্ছিল। আর আমাদের আয়াতের ঠিক পরেই ১৮:৪৭ দেখায় সেই দিন, যেদিন পাহাড়গুলোকে চলমান করা হবে আর পৃথিবী পড়ে থাকবে খোলা সমতল ময়দান হয়ে। একটা বাগান ধ্বংস হয়ে গেছে, পাহাড়ও একদিন হবে। এ দুইয়ের মাঝখানে দাঁড়িয়ে আয়াত জিজ্ঞেস করে: আসলে টিকে থাকে কী?"
          }
        ]
      },
      {
        "h": {
          "en": "The Enduring Good Deeds",
          "bn": "যে নেক আমল টিকে থাকে"
        },
        "p": [
          {
            "en": "Against the adornment stands al-baqiyat as-salihat, the enduring righteous deeds — better with your Lord in reward, and better as ground for hope. Al-Tabari records early authorities who identified them with the phrases of dhikr — subhanallah, alhamdulillah, la ilaha illallah, Allahu akbar — and he concludes that the description rightly covers every righteous deed whose reward endures. The two readings agree in substance: dhikr is the readiest member of a class that also includes prayer, charity, and every act that outlives its own hour.",
            "bn": "অলঙ্কারের উল্টো দিকে দাঁড়িয়ে আছে আল-বাকিয়াতুস-সালিহাত, মানে স্থায়ী নেক আমল: তোমার রবের কাছে প্রতিদানে উত্তম, আশার ভিত হিসেবেও উত্তম। তাবারী প্রথম যুগের আলিমদের মত লিখে রেখেছেন, যাঁরা এগুলো বলতে জিকিরের বাক্যগুলো বুঝেছেন: সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার। আর তাঁর সিদ্ধান্ত, যে নেক আমলের প্রতিদান টিকে থাকে, এ বর্ণনা ঠিকভাবেই তার সবটাকে ধরে। দুই মত আসলে এক জায়গায় মেলে। এই শ্রেণির সবচেয়ে হাতের কাছের আমল জিকির, আর এই শ্রেণিতেই আছে নামাজ, দান-সদকা, আর এমন প্রতিটি কাজ, যা নিজের মুহূর্ত পেরিয়েও বেঁচে থাকে।"
          },
          {
            "en": "The grammar of the comparison is exact. Wealth and children are not called bad; the enduring deeds are called khayr, better — better thawaban, in reward, and better amalan, as a thing on which to pin hope. Hope is the telling word. People quietly rest their futures on portfolios and on heirs; the verse relocates hope to deposits that cannot be inherited away from their owner, devalued by any market, or buried alongside the one who earned them.",
            "bn": "তুলনার ব্যাকরণটা নিখুঁত। সম্পদ আর সন্তানকে মন্দ বলা হয়নি। স্থায়ী আমলগুলোকে বলা হয়েছে খাইর, উত্তম: সাওয়াবান, প্রতিদানে উত্তম; আর আমালান, আশা বাঁধার জিনিস হিসেবে উত্তম। আসল শব্দটা এই আশা। মানুষ চুপচাপ নিজের ভবিষ্যৎ বেঁধে রাখে বিনিয়োগ আর উত্তরাধিকারীদের ওপর। আয়াত আশাকে সরিয়ে রাখে এমন সঞ্চয়ে, যা মালিকের হাত থেকে উত্তরাধিকারে চলে যায় না, কোনো বাজারে যার দাম পড়ে না, আর যে কামিয়েছে তার সঙ্গে কবরে চাপা পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Deeds Endure",
          "bn": "আমল কেন টিকে থাকে"
        },
        "p": [
          {
            "en": "16:96 states the rule beneath this verse: what is with you runs out, and what is with Allah remains. Wealth is spent, devalued and inherited; children — the dearer adornment — grow into accountable selves of their own, and no parent carries a child's record, nor a child a parent's. But a deed done for Allah crosses the line of death intact. The same phrase returns in 19:76 with the same verdict: the enduring good deeds are better with your Lord in reward and better in final return.",
            "bn": "এই আয়াতের নিচের নিয়মটা বলা আছে ১৬:৯৬ আয়াতে: তোমাদের কাছে যা আছে তা ফুরিয়ে যায়, আর আল্লাহর কাছে যা আছে তা থেকে যায়। সম্পদ খরচ হয়, দাম হারায়, উত্তরাধিকারে অন্যের হাতে যায়। সন্তান, যে অলঙ্কার আরও প্রিয়, বড় হয়ে নিজেই নিজের হিসাবের জন্য দায়ী মানুষ হয়ে ওঠে। মা-বাবা সন্তানের আমলনামা বয়ে বেড়ান না, সন্তানও মা-বাবার নয়। কিন্তু আল্লাহর জন্য করা আমল মৃত্যুর সীমা পার হয়ে যায় অক্ষত। ১৯:৭৬ আয়াতে একই কথা ফিরে আসে একই রায় নিয়ে: স্থায়ী নেক আমল তোমার রবের কাছে প্রতিদানে উত্তম, শেষ পরিণামেও উত্তম।"
          },
          {
            "en": "The Prophet ﷺ pointed to the lightest members of this class. Al-Bukhari narrates: two phrases, light on the tongue, heavy on the scale, beloved to the Most Merciful — subhanallahi wa bihamdihi, subhanallahil-'azim. The contrast with adornment could hardly be sharper: the world's glitter is heavy to gather and weightless on the scale, while these words cost a single breath and go on weighing.",
            "bn": "নবী ﷺ এই শ্রেণির সবচেয়ে হালকা আমলগুলো দেখিয়ে দিয়েছেন। বুখারীর বর্ণনায় আছে, দুটি বাক্য জিহ্বায় হালকা, পাল্লায় ভারী, পরম দয়াময়ের কাছে প্রিয়। বাক্য দুটি হলো সুবহানাল্লাহি ওয়া বিহামদিহি, সুবহানাল্লাহিল-আযীম। অলঙ্কারের সঙ্গে এর চেয়ে বড় বৈপরীত্য আর হয় না। দুনিয়ার চাকচিক্য জোগাড় করতে কত খাটুনি, অথচ পাল্লায় তার কোনো ওজন নেই। আর এই বাক্যগুলোর দাম মাত্র একটা নিঃশ্বাস, অথচ পাল্লায় তাদের ওজন থেকেই যায়।"
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
            "bn": "সূরা কাহফ সাজানো হয়েছে কয়েকটি পরীক্ষাকে ঘিরে, সম্পদ তার একটি। এই অংশের ঠিক আগে ১৮:২৮ আয়াতে নবী ﷺ-কে বলা হয়েছে, যারা সকাল-সন্ধ্যা তাদের রবকে ডাকে, ধৈর্য ধরে নিজেকে তাদের সঙ্গে রাখতে; দুনিয়ার জীবনের অলঙ্কারের লোভে তাঁর চোখ যেন তাদের ছেড়ে অন্য দিকে না যায়। এখানেও সেই একই শব্দ, যীনাহ। সম্পদের পরীক্ষায় সূরাটির দাওয়াই শুরু হয় সঙ্গ দিয়ে: এমন মানুষের সঙ্গে বসুন, যাদের সম্পদ হলো জিকির।"
          },
          {
            "en": "3:14 lists what has been beautified for people — women and sons, heaped-up treasures of gold and silver, branded horses, cattle and tilth — and then says that with Allah is the best of returns. The Quran never pretends these things are unattractive; it out-bids them. 18:46 belongs to that same method: it grants the beauty of what you hold, then names something better in the only two currencies that survive the audit, reward and hope.",
            "bn": "৩:১৪ আয়াতে মানুষের চোখে যা কিছু সুন্দর করে দেওয়া হয়েছে তার তালিকা আছে: নারী, পুত্রসন্তান, স্তূপ করা সোনা-রুপা, চিহ্নিত ঘোড়া, গবাদিপশু আর খেত-খামার। তারপর বলা হয়েছে, উত্তম ঠিকানা আল্লাহরই কাছে। কুরআন কখনো ভান করে না যে এসব আকর্ষণীয় নয়; বরং এগুলোর চেয়ে বড় দর হাঁকে। ১৮:৪৬ একই পথে চলে। আপনার হাতে যা আছে তার সৌন্দর্য মেনে নেয়, তারপর এর চেয়ে উত্তম কিছুর নাম বলে, সেই দুই মুদ্রায়, যা শেষ হিসাবের পরেও টিকে থাকে: প্রতিদান আর আশা।"
          }
        ]
      },
      {
        "h": {
          "en": "Converting the Decoration",
          "bn": "অলঙ্কারকে আমলে বদলে নেওয়া"
        },
        "p": [
          {
            "en": "The verse is not an order to renounce; it is an order to rank — and ranked rightly, the adornment itself can be converted. Al-Bukhari narrates that a man's spending on his family, done seeking Allah's reward, is counted for him as charity. And Muslim narrates that when a person dies, his deeds end except three: ongoing charity, knowledge that benefits, and a righteous child who prays for him. Wealth and children, the two adornments of this verse, both appear there — transformed into enduring deeds.",
            "bn": "আয়াতটি সব ছেড়ে দেওয়ার হুকুম নয়, ঠিকভাবে সাজানোর হুকুম। আর ঠিকভাবে সাজালে অলঙ্কার নিজেই বদলে যেতে পারে। বুখারী বর্ণনা করেন, আল্লাহর কাছে প্রতিদানের আশায় কেউ পরিবারের জন্য খরচ করলে তা তার জন্য সদকা হিসেবে গণ্য হয়। আর মুসলিম বর্ণনা করেন, মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: সদকায়ে জারিয়া, উপকারী ইলম, আর নেক সন্তান, যে তার জন্য দোয়া করে। এই আয়াতের দুই অলঙ্কার, সম্পদ আর সন্তান, দুটোই সেখানে আছে, স্থায়ী আমলে বদলে গিয়ে।"
          },
          {
            "en": "So the daily practice this verse asks for is a transfer: keep converting the decoration into the durable. Close some minutes of each day with the phrases of dhikr the early commentators named; attach intention to the month's spending; teach a child something that will keep speaking after you have stopped. Then enjoy the adornment with a free heart — decoration is most pleasant, in a house or in a life, exactly when nothing essential has been made to rest on it.",
            "bn": "তাই এই আয়াত রোজকার যে অভ্যাস চায়, তা এক ধরনের স্থানান্তর: সাজসজ্জাকে বারবার টেকসই জিনিসে বদলে নিতে থাকুন। প্রতিদিন কয়েক মিনিট শেষ করুন সেই জিকিরগুলো দিয়ে, প্রথম যুগের মুফাসসিররা যেগুলোর কথা বলেছেন। মাসের খরচের সঙ্গে নিয়ত জুড়ে দিন। কোনো শিশুকে এমন কিছু শেখান, আপনি থেমে যাওয়ার পরেও যা কথা বলে যাবে। তারপর মুক্ত মনে অলঙ্কার উপভোগ করুন। ঘরে হোক বা জীবনে, কারুকাজ সবচেয়ে মধুর ঠিক তখনই, যখন জরুরি কোনো কিছুকে তার ওপর ভর দিয়ে দাঁড় করানো হয়নি।"
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
            "bn": "ইবন কাসীর গোটা আয়াতটিকেই এক ভর্ৎসনা হিসেবে পড়েন। আল্লাহ আদম-সন্তানদের সতর্ক করছেন, ইবলিস তাদের শত্রু, যেমন শত্রু ছিল তাদের আগে তাদের পিতার। আর তিরস্কার করছেন তাদের, যারা নিজের স্রষ্টার বিরুদ্ধে গিয়ে ইবলিসের অনুসরণ করে, অথচ সেই স্রষ্টা তাদের শূন্য থেকে গড়েছেন আর দয়া করে টিকিয়ে রেখেছেন। ইবন কাসীর যোগ করেন, ফেরেশতাদের সিজদা ছিল সম্মান ও মর্যাদার, ইবাদতের নয়। কাহফ এরপর যে প্রশ্নটা চেপে ধরে তা হলো: যাঁর কাছে সে এত ঋণী, তাঁকে অমান্য করে কোনো সৃষ্টি কেন ইবলিসকে সম্মান দেবে?"
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
            "bn": "অন্য মতটি এসেছে ইবন আব্বাসের সূত্রে। তাঁর বর্ণনায়, ইবলিস ছিল ফেরেশতাদের এমন এক গোত্রের, যাদের বলা হতো 'জ্বীন'; ফেরেশতাদের মধ্যে তারা সৃষ্টি হয়েছিল প্রখর লু-হাওয়ার আগুন থেকে, আর সে ছিল জান্নাতের এক রক্ষক। ইবন আব্বাস তো যুক্তি দেন, সে ফেরেশতাদের একজন না হলে সিজদার হুকুমের ভেতর তাকে ধরাই হতো না। তাবারী আরও একটি ব্যাখ্যা আনেন: কেউ বলেন, তাকে 'জ্বীন' বলা হয়েছে, কারণ এ ধরনের সত্তা মানুষের চোখ থেকে আড়ালে থাকে; আর কেউ বলেন, সে জান্নাতের পাহারাদার ছিল, তাই জান্নাতের নামেই তার এই নাম।"
          },
          {
            "en": "At-Tabari lines these views up without ruling between them, and Ibn Kathir sounds a caution: many of the fuller stories, that Iblis was a noble angel named Azazil, or that he ruled the lowest heaven, come from Israelite lore passed on only to be examined, and the Qur'an stands in no need of them. So the honest report is a disagreement left standing. What the verse fixes is not his species but his choice.",
            "bn": "তাবারী মতগুলো পাশাপাশি সাজিয়ে দেন, কোনটি ঠিক তা বলে দেন না। আর ইবন কাসীর সতর্ক করেন: বড় বড় কাহিনির অনেকগুলো, যেমন ইবলিস ছিল আজাজিল নামের এক সম্মানিত ফেরেশতা, কিংবা সে সবচেয়ে নিচের আসমান শাসন করত, এসেছে ইসরাইলি বর্ণনা থেকে। এসব কেবল যাচাই করে দেখার জন্য বলা হয়, আর কুরআনের এগুলোর কোনো প্রয়োজন নেই। তাই সৎভাবে বলতে গেলে, মতভেদটা মতভেদ হিসেবেই থেকে যায়। আয়াত তার জাত নিশ্চিত করে না, নিশ্চিত করে তার বেছে নেওয়া পথ।"
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
            "bn": "তারপর 'সে তার রবের হুকুম থেকে বেরিয়ে গেল।' তাবারী 'ফাসাকা' শব্দটিকে আরবি ভাষার সাধারণ অর্থেই নেন: সে বেরিয়ে গেল, যা আদেশ করা হয়েছিল তা থেকে সরে গেল, পাশ কাটিয়ে গেল। কথাটা বোঝাতে তিনি আরবদের রোজকার কথা টেনে আনেন। পাকা খেজুর খোসা ছেড়ে বেরিয়ে এলে আরবরা বলে খেজুরটি 'ফাসাকা' করেছে; ইঁদুর গর্ত থেকে বেরিয়ে ক্ষতি করতে ছুটলে বলে ইঁদুরটি 'ফাসাকা' করেছে। ইবন কাসীরও একই অর্থ দেন: ফিসক মানে বাইরে পা রাখা, আনুগত্যের সীমা ছেড়ে বেরিয়ে যাওয়া।"
          },
          {
            "en": "What he stepped out of was obedience, and its root was pride. At-Tabari's own opening names the sin as arrogance and as envy of Adam, and al-Muyassar says flatly that Iblis did not bow out of pride and jealousy. Mujahid, quoted by at-Tabari, pins the departure to the exact moment: he disobeyed in the matter of prostrating to Adam. As-Sa'di lets Iblis convict himself with words the Qur'an records elsewhere, 'Shall I bow to one You made from clay?' and 'I am better than he.'",
            "bn": "সে বেরিয়ে গিয়েছিল আনুগত্য থেকে, আর এর মূলে ছিল অহংকার। তাবারী শুরুতেই এই গুনাহের নাম বলে দেন: অহংকার আর আদমের প্রতি হিংসা। মুয়াসসারও সাফ বলে, ইবলিস অহংকার আর হিংসার কারণেই সিজদা করেনি। তাবারী মুজাহিদের যে কথা এনেছেন, তাতে বেরিয়ে যাওয়ার মুহূর্তটা একেবারে নির্দিষ্ট: আদমকে সিজদা করার ব্যাপারেই সে নাফরমানি করেছিল। আর সাদী ইবলিসকে তার নিজের মুখের কথাতেই দোষী করেন, যে কথা কুরআন অন্য জায়গায় উল্লেখ করেছে: 'যাকে তুমি মাটি দিয়ে গড়েছ, তাকে কি আমি সিজদা করব?' আর 'আমি তার চেয়ে উত্তম।'"
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
            "bn": "অস্বীকারের পেছনে যে উৎস কাজ করেছে, তার কথা এসেছে এক সহিহ হাদিসে। সহিহ মুসলিমে আয়িশা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: 'ফেরেশতাদের সৃষ্টি করা হয়েছে আলো থেকে, জ্বীনদের সৃষ্টি করা হয়েছে ধোঁয়াহীন আগুনের শিখা থেকে, আর আদমকে সৃষ্টি করা হয়েছে সেই জিনিস থেকে, যার বর্ণনা তোমাদের দেওয়া হয়েছে।' হাদিসটি সহিহ মুসলিমে আছে, তাই এটি সহিহ কি না, সে প্রশ্ন আর ওঠে না। কোন ধরনের সৃষ্টি কী দিয়ে তৈরি, হাদিসটি তা বলে দেয়।"
          },
          {
            "en": "Ibn Kathir cites this very hadith at 'he was of the jinn': Iblis was made from a smokeless flame while the angels were made from light, and 'when the need comes, every vessel spills what it holds.' His nature, kept hidden while he worshipped among the angels, betrayed him at the test. Yet notice what the hadith settles and what it does not. It fixes the material of each creation; it does not by itself decide the older dispute over whether Iblis was angel or jinn, which is why the commentators still weigh the clause so carefully.",
            "bn": "'সে ছিল জ্বীনদের একজন' কথাটির ব্যাখ্যায় ইবন কাসীর ঠিক এই হাদিসটিই আনেন: ইবলিসকে বানানো হয়েছিল ধোঁয়াহীন আগুনের শিখা থেকে, আর ফেরেশতাদের আলো থেকে; আর 'দরকারের সময় প্রতিটি পাত্র থেকে তা-ই উপচে পড়ে, যা তার ভেতরে আছে।' ফেরেশতাদের সঙ্গে ইবাদত করার দিনগুলোতে তার আসল স্বভাব ঢাকা ছিল; পরীক্ষা আসতেই সেই স্বভাবই তাকে ধরিয়ে দিল। তবে খেয়াল করুন, হাদিসটি কোন প্রশ্নের মীমাংসা করে আর কোনটির করে না। কে কী দিয়ে তৈরি, তা হাদিসটি ঠিক করে দেয়। কিন্তু ইবলিস ফেরেশতা ছিল না জ্বীন, সেই পুরোনো বিতর্ক হাদিসটি নিজে থেকে মেটায় না। এ কারণেই তাফসিরকারেরা আজও এই অংশটুকু এত সাবধানে বিচার করেন।"
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
            "bn": "আয়াত এরপর যোগ করে: 'আর তার বংশধরকে'। মাআরিফুল কুরআন এ শব্দ থেকে বোঝে, ইবলিসের বংশধর আছে, আছে অনুসারীদের বিরাট বাহিনী। সেই সঙ্গে জানায়, কোনো কোনো তাফসিরকার এখানে 'বংশধর' বলতে তার সহযোগীদের বোঝেন; তাই তার ঔরসজাত সন্তানই হতে হবে, এমন নয়। তাবারী দুই মতই পাশাপাশি রাখেন। কাতাদা বলেন, আদম-সন্তানদের মতোই তাদের বংশবৃদ্ধি হয়। আর ইবন যায়দ বলেন, আদম যেমন মানুষের পিতা, ইবলিস তেমনি জ্বীনদের পিতা; যত মানুষ জন্মায়, প্রত্যেকের সঙ্গে জোড়া বাঁধা থাকে একটি শয়তান।"
          },
          {
            "en": "Al-Qurtubi lays the debate out frankly. Some hold that Iblis has children from his loins; others say he has none, and that 'his offspring' are simply his helpers among the devils. Ibn Atiyya reads the plain sense as the whispering devils who push people toward wrong. Al-Qushayri draws it together: God has told us Iblis has followers and offspring who whisper to the children of Adam and are their enemies, but the manner of their reproduction is not fixed for us and waits upon a sound transmission.",
            "bn": "কুরতুবী বিতর্কটা খোলাখুলি তুলে ধরেন। কেউ বলেন, ইবলিসের ঔরসজাত সন্তান আছে; কেউ বলেন, নেই, 'তার বংশধর' মানে কেবল শয়তানদের মধ্যে তার সাহায্যকারীরা। ইবন আতিয়্যার মতে আয়াতের সোজা অর্থ হলো সেই শয়তানেরা, যারা কুমন্ত্রণা দিয়ে মানুষকে অন্যায়ের দিকে ঠেলে দেয়। কুশায়রি সব কথা এক জায়গায় আনেন: আল্লাহ আমাদের জানিয়েছেন, ইবলিসের অনুসারী ও বংশধর আছে, তারা আদম-সন্তানদের কুমন্ত্রণা দেয় এবং তাদের শত্রু। কিন্তু তাদের বংশবৃদ্ধি কীভাবে হয়, তা আমাদের নির্দিষ্ট করে জানানো হয়নি; এ বিষয়ে জানতে হলে সহিহ বর্ণনা লাগবে।"
          },
          {
            "en": "What is sound, al-Qurtubi and Ma'arif agree, is a hadith that Humaidi placed in his Combination of the Two Sahihs, from Salman: the Prophet, peace be upon him, told him not to be the first to enter the market or the last to leave it, for there the devil lays his eggs and hatches his brood. As for the named devils that some lists supply, Ibn Atiyya notes that they rest on chains that are not sound, except that Muslim records a devil of the prayer called Khinzab, and at-Tirmidhi mentions one of the ablution called al-Walahan.",
            "bn": "কুরতুবী আর মাআরিফ একমত যে এ বিষয়ে সহিহ হলো একটি হাদিস, যা হুমাইদি তাঁর 'দুই সহিহের সংকলন'-এ সালমান থেকে এনেছেন। নবী ﷺ তাঁকে বলেছিলেন, তিনি যেন বাজারে সবার আগে না ঢোকেন, আবার সবার শেষে না বেরোন; কারণ সেখানেই শয়তান ডিম পাড়ে আর বাচ্চা ফোটায়। আর কিছু তালিকায় শয়তানদের যে নামগুলো পাওয়া যায়, ইবন আতিয়্যা বলেন, সেগুলোর সনদ সহিহ নয়। ব্যতিক্রম কেবল দুটি: মুসলিম নামাজের এক শয়তানের কথা এনেছেন, যার নাম খিনজাব; আর তিরমিযী ওজুর এক শয়তানের কথা বলেছেন, যার নাম আল-ওয়ালাহান।"
          }
        ]
      },
      {
        "h": {
          "en": "An Enemy Taken as Guardian",
          "bn": "শত্রুকেই অভিভাবক বানানো"
        },
        "p": [
          {
            "en": "Now the verse wheels on its listener. Al-Qurtubi says God halts the disbelievers by way of reproach with the words 'will you then take him?' At-Tabari expands the charge: will you, children of Adam, befriend and obey the very one who scorned your father, envied him, and coaxed him out of the Garden into a narrow life on earth, while you turn from the Lord who honoured you, who had His angels bow to your father and poured on you gifts beyond counting? The question answers itself.",
            "bn": "এবার আয়াত সরাসরি শ্রোতার দিকে ফেরে। কুরতুবী বলেন, 'তবু কি তোমরা তাকে গ্রহণ করবে?' কথাটি দিয়ে আল্লাহ কাফিরদের ভর্ৎসনা করে থামিয়ে দেন। তাবারী অভিযোগটা খুলে বলেন: হে আদম-সন্তান, যে তোমাদের পিতাকে তুচ্ছ করেছে, তাঁকে হিংসা করেছে, ফুসলিয়ে জান্নাত থেকে বের করে দুনিয়ার কষ্টের জীবনে নামিয়ে এনেছে, তোমরা কি তাকেই বন্ধু বানাবে, তার কথা মানবে? আর মুখ ফিরিয়ে নেবে সেই রব থেকে, যিনি তোমাদের সম্মান দিয়েছেন, ফেরেশতাদের দিয়ে তোমাদের পিতাকে সিজদা করিয়েছেন, আর তোমাদের ওপর অগণিত নিয়ামত ঢেলে দিয়েছেন? প্রশ্নের মধ্যেই জবাব রয়ে গেছে।"
          },
          {
            "en": "As-Sa'di frames it as a choice between two guardianships. On one side stands Iblis, who commands nothing but indecency and wrong; on the other stands the Most Merciful, in whose guardianship lies every happiness, success and joy. The verse, he says, is itself a push to take Satan as an enemy, since no one but a wrongdoer would take his true enemy as a friend. He seals it with God's own word: 'Allah is the ally of those who believe; He brings them out of the darknesses into the light' (2:257).",
            "bn": "সাদীর কাছে এটা দুই অভিভাবকের মধ্যে একজনকে বেছে নেওয়ার প্রশ্ন। একদিকে ইবলিস, যে অশ্লীলতা আর অন্যায় ছাড়া আর কিছুর হুকুম দেয় না; অন্যদিকে পরম দয়াময়, যাঁর অভিভাবকত্বেই আছে সব সুখ, সফলতা আর আনন্দ। তিনি বলেন, আয়াতটি নিজেই শয়তানকে শত্রু হিসেবে গ্রহণ করার তাগিদ দেয়; কারণ জালিম ছাড়া কেউ নিজের আসল শত্রুকে বন্ধু বানায় না। শেষে তিনি আল্লাহর বাণী দিয়ে কথাটা পাকা করেন: 'আল্লাহ মুমিনদের অভিভাবক; তিনি তাদের অন্ধকার থেকে আলোর দিকে বের করে আনেন' (২:২৫৭)।"
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
            "bn": "'জালিমদের জন্য এ বিনিময় কতই না নিকৃষ্ট!' কাতাদার কথা তাবারী ও বাগভী দুজনেই এনেছেন; তিনি এখানে দেখেন একটা লোকসানের কারবার: রবের ইবাদত ছেড়ে ইবলিসের হুকুম মেনে তারা যা বদলে নিল, তা কতই না নিকৃষ্ট। কুরতুবীর ব্যাখ্যাও একই: আল্লাহর ইবাদতের জায়গায় শয়তানের ইবাদত বসানো কত নিকৃষ্ট! সাদী কথাটা আরও স্পষ্ট করে দেন: যে মানুষ নিজের আসল শত্রুকে অভিভাবক বানায় আর প্রশংসিত রক্ষককে ছেড়ে দেয়, তার চেয়ে বড় জুলুম আর নেই।"
          },
          {
            "en": "This needs saying plainly. The verse condemns a choice, not a class of living people. It describes the wrongdoers' exchange, the trading of the worship of God for obedience to His enemy, and it licenses nothing against any living person or community. Its summons is turned inward, on the reader's own loyalty; it is an invitation to see a bad bargain for what it is and to undo it while there is still time, not a warrant to judge anyone else's heart.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত নিন্দা করছে একটা বেছে নেওয়াকে, জীবিত কোনো মানুষের দলকে নয়। এখানে বলা হচ্ছে জালিমদের সেই বিনিময়ের কথা, যেখানে আল্লাহর ইবাদতের বদলে তাঁর শত্রুর আনুগত্য কেনা হয়। জীবিত কোনো ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। এর ডাক ভেতরের দিকে, পাঠকের নিজের আনুগত্যের দিকে। আয়াতটি ডাকে লোকসানের কারবারটাকে চিনে নিতে, আর সময় থাকতেই তা থেকে ফিরে আসতে; অন্য কারও অন্তরের বিচার করার সনদ এটি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Choice Left Open",
          "bn": "সিদ্ধান্ত আপনার হাতে"
        },
        "p": [
          {
            "en": "Al-Kahf keeps to one edge of the old story here. Not the drama of the fall but the choice of a master is what it sets before you: Iblis and his kind offered as protectors 'apart from Me,' with the decision left on your side of the line. As-Sa'di's reading holds the whole of it. Every happiness lies in the guardianship you were offered, and every loss in the one you were warned against, so the enemy named here is an enemy worth naming twice.",
            "bn": "পুরোনো কাহিনির পুরোটা নয়, সূরা কাহফ এখানে কেবল একটা দিক ধরে থাকে। পতনের নাটক নয়, বরং কাকে প্রভু বানাবেন, সেই প্রশ্নটাই আপনার সামনে রাখে: ইবলিস আর তার দলবলকে 'আমাকে বাদ দিয়ে' অভিভাবক বানানোর কথা তোলা হয়, আর সিদ্ধান্তটা ছেড়ে দেওয়া হয় আপনার ওপর। সাদীর ব্যাখ্যায় পুরো কথাটা ধরা আছে। যে অভিভাবকত্ব আপনাকে দেওয়া হয়েছিল, তাতেই সব সুখ; আর যার ব্যাপারে আপনাকে সাবধান করা হয়েছিল, তাতেই সব লোকসান। তাই এখানে যে শত্রুর নাম নেওয়া হলো, তার নাম বারবার নেওয়ার মতোই।"
          },
          {
            "en": "So the verse asks a plain thing. The enemy is named, the trade is priced, and the turning is left in your hands. It does not stop here to answer every claim Satan makes for himself; that comes in what follows. What it presses now is loyalty. You were made and are kept alive by One who honoured you, and you are courted by another who was your enemy from the first day and wishes only your ruin, and between those two the verse asks whom you will call your guardian.",
            "bn": "তাই আয়াতের দাবি খুব সোজা। শত্রুর নাম বলে দেওয়া হয়েছে, কারবারের দামও জানিয়ে দেওয়া হয়েছে, আর ফিরে আসার ভার রাখা হয়েছে আপনার হাতে। শয়তান নিজের পক্ষে যত দাবি করে, তার প্রতিটির জবাব দিতে আয়াত এখানে থামে না; সেটা আসবে পরের আয়াতগুলোতে। এখন আয়াতের জোর আনুগত্যের ওপর। একজন আপনাকে সৃষ্টি করেছেন, বাঁচিয়ে রাখছেন, সম্মান দিয়েছেন। আরেকজন আপনাকে টানছে, যে প্রথম দিন থেকেই আপনার শত্রু আর কেবল আপনার সর্বনাশ চায়। এই দুজনের মধ্যে কাকে আপনি অভিভাবক বলবেন, আয়াত সেটাই জিজ্ঞেস করে।"
          }
        ]
      }
    ]
  },
  "18:57": {
    "sections": [
      {
        "h": {
          "en": "The Question With No Answer",
          "bn": "যে প্রশ্নের জবাব নেই"
        },
        "p": [
          {
            "en": "Wa-man aẓlam mimman dhukkira bi-āyāti rabbihi fa-aʿraḍa ʿanhā: and who is more unjust than a person reminded of his Lord's signs who then turns away from them. At-Tabari opens by unfolding the rhetorical question: which of people is more given to turning aside, out of its place, than someone shown his Lord's proofs and arguments, guided by them to the road of rescue, who then turns from the very signs whose lesson leads to escape from ruin. The form is a question, but it functions as a verdict.",
            "bn": "ওয়া মান আযলামু মিম্মান যুক্কিরা বিআয়াতি রাব্বিহি ফাআরাদা আনহা: তার চেয়ে বড় যালিম আর কে, যাকে তার রবের আয়াত স্মরণ করিয়ে দেওয়া হলে সে তা থেকে মুখ ফিরিয়ে নেয়? তাবারী শুরুতেই এই আলংকারিক প্রশ্নটা খুলে বলেন। মানুষের মধ্যে এর চেয়ে বেশি অন্যায়ভাবে, বেঠিক জায়গায় মুখ ফেরায় কে? রব তাকে নিজের প্রমাণ ও দলিল দেখালেন, সেগুলো দিয়ে মুক্তির পথ চিনিয়ে দিলেন; অথচ সে মুখ ফিরিয়ে নিল ঠিক সেই আয়াতগুলো থেকে, যেগুলোর শিক্ষা মানুষকে ধ্বংস থেকে বাঁচায়। দেখতে প্রশ্ন, আসলে রায়।"
          },
          {
            "en": "As-Sa'di states the same judgement in the fullest terms. There is no greater wrong, he says, and no larger crime, than a servant reminded of Allah's signs, for whom truth was set apart from falsehood and guidance from misguidance, who was warned and made afraid and also drawn with hope, and who after all this turned away, took no lesson from what he was reminded of, and did not come back from the road he was on. The one described here is not the careless bystander; he is the one who was reached, and refused.",
            "bn": "সাদী একই রায় দেন আরও পূর্ণ ভাষায়। তিনি বলেন, এর চেয়ে বড় যুলুম নেই, বড় অপরাধও নেই: এক বান্দাকে আল্লাহর আয়াত স্মরণ করিয়ে দেওয়া হলো, তার সামনে সত্য আর মিথ্যা, হেদায়েত আর গোমরাহি আলাদা করে দেখানো হলো, তাকে ভয় দেখানো হলো, আশাও দেওয়া হলো। এত কিছুর পরও সে মুখ ফিরিয়ে নিল, যা মনে করিয়ে দেওয়া হলো তা থেকে কোনো শিক্ষা নিল না, যে পথে ছিল সে পথ থেকে ফিরেও এল না। এখানে যার কথা বলা হচ্ছে, সে পাশ দিয়ে চলে যাওয়া কোনো উদাসীন লোক নয়। ডাক তার কাছে পৌঁছেছিল, আর সে তা ফিরিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reminded, Then Turning Aside",
          "bn": "মনে করিয়ে দেওয়ার পরও মুখ ফেরানো"
        },
        "p": [
          {
            "en": "Ibn Kathir reads fa-aʿraḍa ʿanhā closely: he made himself forget the signs and turned from them, neither lending them an ear nor giving them a thought. Al-Baghawi glosses the reminding, dhukkira, as being admonished, waʿiẓa, and the turning as leaving the signs and not believing in them. Al-Muyassar keeps the plain line: he was admonished with his Lord's clear signs, and swung away from them toward his own falsehood. The wrong is not ignorance; it is a warned man walking off from what he was warned by.",
            "bn": "ইবন কাসীর ফাআরাদা আনহা কথাটা খুঁটিয়ে পড়েন: সে ইচ্ছে করে আয়াতগুলো ভুলে থাকল, সেগুলো থেকে সরে গেল; কান পেতে শুনল না, মনেও ঠাঁই দিল না। বাগাভী যুক্কিরা শব্দের অর্থ করেন উপদেশ দেওয়া, ওয়ুইযা; আর মুখ ফেরানোর অর্থ করেন আয়াত ছেড়ে দেওয়া, তাতে ঈমান না আনা। মুয়াসসার সোজা কথাতেই থাকে: রবের সুস্পষ্ট আয়াত দিয়ে তাকে উপদেশ দেওয়া হলো, আর সে সেগুলো থেকে ঘুরে নিজের বাতিলের দিকে চলে গেল। দোষটা অজ্ঞতা নয়। সাবধান করার পরও মানুষটা সেই সাবধানবাণী পেছনে ফেলে হেঁটে চলে যায়, যুলুম এটাই।"
          },
          {
            "en": "As-Sa'di draws the sharp edge out of this. Such a man, he says, is greater in wrong than the man who turned away without the signs ever reaching him. That second person is a wrongdoer too, yet his wrong is lighter, because a person who disobeys upon clear sight and knowledge is worse than a person who does not. The reminder does not lessen the guilt of turning away; it raises it. What was offered as mercy, once refused, becomes the weight of the account.",
            "bn": "সাদী এখান থেকে কথাটার ধার বের করে আনেন। তিনি বলেন, এমন মানুষ তার চেয়েও বড় যালিম, যে মুখ ফিরিয়েছে অথচ আয়াত তার কাছে কখনো পৌঁছায়নি। সেই দ্বিতীয়জনও যালিম, তবে তার যুলুম হালকা। কারণ যে স্পষ্ট দেখে, জেনেবুঝে নাফরমানি করে, সে না-জেনে নাফরমানি করা লোকের চেয়ে খারাপ। নসিহত মুখ ফেরানোর গুনাহ কমায় না, বরং বাড়িয়ে দেয়। যা রহমত হয়ে এসেছিল, ফিরিয়ে দিলে সেটাই হিসাবের পাল্লায় বোঝা হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What His Hands Sent Forth",
          "bn": "তার হাত যা আগে পাঠিয়েছে"
        },
        "p": [
          {
            "en": "Wa-nasiya mā qaddamat yadāh: and he forgot what his hands sent forth. Ibn Kathir, al-Baghawi and al-Muyassar all take this as the evil deeds and ugly acts he had done before. At-Tabari, citing Qatada, reads it the same way and adds the fatal clause: he forgot the destroying sins he had sent ahead, so he did not repent and did not turn back. The image is of a person's own record travelling in front of him, already written, while he behaves as though nothing awaits.",
            "bn": "ওয়া নাসিয়া মা কাদ্দামাত ইয়াদাহ: আর সে ভুলে গেল তার হাত যা আগে পাঠিয়েছে। ইবন কাসীর, বাগাভী আর মুয়াসসার সবাই একে ধরেন তার আগে করা মন্দ আমল আর কুৎসিত কাজ হিসেবে। তাবারী কাতাদার সূত্রে একই অর্থ করেন আর জুড়ে দেন মারাত্মক কথাটি: সে যে ধ্বংসকারী গুনাহগুলো আগে পাঠিয়েছিল তা ভুলে গেল, তাই তওবা করল না, ফিরেও এল না। ছবিটা এমন, মানুষের নিজের আমলনামা তার সামনে সামনে চলছে, আগেই লেখা হয়ে গেছে, অথচ সে এমনভাবে চলছে যেন সামনে কিছুই অপেক্ষা করছে না।"
          },
          {
            "en": "Al-Qurtubi records more than one reading and lets them stand together. On the first, nisyān here means abandonment, tark: he left off his disbelief and his sins and did not repent from them, so forgetting is treating them as done with. On the second, the meaning is that he forgot what he had stored up for himself, the punishment he would meet. Al-Qurtubi does not choose between them; he says the two senses are close. Both keep the deed and its owner tied together, whether the man forgets the sin or forgets its price.",
            "bn": "কুরতুবী এখানে একাধিক ব্যাখ্যা উল্লেখ করেন এবং সবগুলোকেই থাকতে দেন। প্রথম ব্যাখ্যায় নিসইয়ান মানে ছেড়ে রাখা, তারক: সে নিজের কুফর আর গুনাহগুলো ফেলে রাখল, সেগুলো থেকে তওবা করল না। অর্থাৎ ভুলে যাওয়া মানে সেগুলোকে চুকে-বুকে যাওয়া বলে ধরে নেওয়া। দ্বিতীয় ব্যাখ্যায় অর্থ হলো, নিজের জন্য সে যা জমিয়ে রেখেছিল, যে শাস্তির মুখোমুখি তাকে হতে হবে, তা সে ভুলে গেল। কুরতুবী কোনোটাকে বেছে নেন না; বলেন, দুই অর্থ কাছাকাছি। মানুষ গুনাহই ভুলুক বা তার দাম, দুই ব্যাখ্যাতেই কাজ আর কাজের মালিক এক সুতোয় বাঁধা থাকে।"
          },
          {
            "en": "No sound narration is fixed by the commentators to this verse itself. The nearest one belongs to the neighbouring āyah: Ma'arif al-Qur'an, on 18:54, cites a report it traces to Sahih Muslim from Anas (raḍiyallāhu ʿanhu), of a denier on the Day of Rising whose own limbs are made to testify against him once his mouth is sealed. It sits on the word about mankind's quarrelling in the earlier verse, not on 18:57, and is offered here only as it lights up the phrase about the record the hands send ahead.",
            "bn": "তাফসীরকারেরা সরাসরি এই আয়াতের সঙ্গে কোনো সহিহ বর্ণনা যুক্ত করেননি। সবচেয়ে কাছের বর্ণনাটি পাশের আয়াতের। মাআরিফুল কুরআন ১৮:৫৪ আয়াতের আলোচনায় আনাস (রাঃ)-এর একটি বর্ণনা আনে, যার সূত্র সহিহ মুসলিম পর্যন্ত পৌঁছায়: কিয়ামতের দিন এক অস্বীকারকারীর মুখে সিল মেরে দেওয়া হবে, তারপর তার নিজের অঙ্গপ্রত্যঙ্গই তার বিরুদ্ধে সাক্ষ্য দেবে। বর্ণনাটি এসেছে আগের আয়াতে মানুষের তর্ক করার স্বভাব নিয়ে যে কথা আছে তার ব্যাখ্যায়, ১৮:৫৭-এর ব্যাখ্যায় নয়। এখানে এটি আনা হলো কেবল এজন্য যে, হাত যা আগে পাঠায়, সেই কথাটা এতে আরও পরিষ্কার হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Coverings and a Heaviness",
          "bn": "অন্তরে আবরণ, কানে ভার"
        },
        "p": [
          {
            "en": "Innā jaʿalnā ʿalā qulūbihim akinnatan an yafqahūhu wa-fī ādhānihim waqrā: We placed over their hearts coverings, lest they understand it, and in their ears a heaviness. Ibn Kathir glosses akinnah as coverings and a veil, so that they will not grasp this Qur'an and its clear statement, and reads the waqr in the ears as a deafness of meaning, an abstract deafness to right guidance rather than a loss of hearing. At-Tabari matches this: a covering lest they understand what they are reminded of, and a heaviness in the ears lest they hear it.",
            "bn": "ইন্না জাআলনা আলা কুলুবিহিম আকিন্নাতান আন ইয়াফকাহুহু ওয়া ফি আযানিহিম ওয়াকরা: আমি তাদের অন্তরের ওপর আবরণ দিয়ে দিয়েছি, যাতে তারা তা বুঝতে না পারে, আর তাদের কানে দিয়েছি ভার। ইবন কাসীর আকিন্নার অর্থ করেন আবরণ ও পর্দা, যাতে তারা এই কুরআন আর তার সুস্পষ্ট বক্তব্য ধরতে না পারে। আর কানের ওয়াকরকে তিনি বোঝেন অর্থের ব্যাপারে বধিরতা হিসেবে: হেদায়েতের কথায় এক ভেতরের বধিরতা, কানে শুনতে না পাওয়া নয়। তাবারীর কথাও একই: অন্তরে আবরণ, যাতে যে উপদেশ দেওয়া হলো তা তারা না বোঝে; আর কানে ভার, যাতে তা না শোনে।"
          },
          {
            "en": "The other commentators keep the same sense. Al-Baghawi reads akinnah as coverings and the waqr as a deafness and a weight, and al-Muyassar spells out the effect: We placed coverings over their hearts so they did not understand the Qur'an nor perceive the good in it, and set in their ears something like deafness so they neither heard it nor were helped by it. What is being described is a shut door, working from the inside out: the message reaches the ear and the words are audible, but nothing of them passes through to the heart that could act on them.",
            "bn": "বাকি তাফসীরকারেরাও একই অর্থ ধরে রাখেন। বাগাভী আকিন্নার অর্থ করেন আবরণ, আর ওয়াকরের অর্থ বধিরতা ও ভার। মুয়াসসার এর ফলটা খুলে বলে: আমি তাদের অন্তরের ওপর আবরণ দিলাম, ফলে তারা কুরআন বুঝল না, তার কল্যাণও টের পেল না; আর তাদের কানে বধিরতার মতো কিছু রাখলাম, ফলে তারা তা শুনল না, তা থেকে উপকারও পেল না। এ যেন এক বন্ধ দরজা, যা বন্ধ হয়েছে ভেতর থেকে। বার্তা কানে পৌঁছায়, কথাগুলো শোনাও যায়, কিন্তু তার কিছুই অন্তর পর্যন্ত পৌঁছায় না, যে অন্তর তা নিয়ে আমল করতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Sealed After the Turning",
          "bn": "মুখ ফেরানোর পর সিল"
        },
        "p": [
          {
            "en": "The commentators do not read the coverings as arriving out of nowhere. As-Sa'di lays the order out: because of the man's turning from the signs, his forgetting of his sins, and his contentment with the state of evil while he knew it, Allah punished him by closing upon him the doors of guidance, setting over his heart firm coverings that stop it understanding the signs even when it hears them. The sealing, in his telling, is a consequence and a penalty for a turning the man did first, of his own will.",
            "bn": "তাফসীরকারেরা বলেন না যে আবরণ হঠাৎ কোথা থেকে এসে পড়েছে। সাদী ধাপগুলো সাজিয়ে দেন: মানুষটি আয়াত থেকে মুখ ফিরিয়েছে, নিজের গুনাহ ভুলে গেছে, আর জেনেবুঝেও মন্দ অবস্থায় সন্তুষ্ট থেকেছে। এ কারণেই আল্লাহ তাকে শাস্তি দিলেন: তার জন্য হেদায়েতের দরজাগুলো বন্ধ করে দিলেন, তার অন্তরের ওপর এমন মজবুত আবরণ দিলেন যে আয়াত শুনলেও সে বুঝতে পারে না। সাদীর ব্যাখ্যায় এই সিল একটা পরিণতি, একটা শাস্তি; আর তা এমন মুখ ফেরানোর জন্য, যা মানুষটি নিজের ইচ্ছায় আগেই করেছে।"
          },
          {
            "en": "The wording elsewhere carries the same causal weight. At-Tabari ends the verse by saying they will never hold to the truth, because Allah has set a seal, ṭabaʿa, upon their hearts and their hearing and their sight. Al-Qurtubi ties the coverings to the ears bi-sababi kufrihim, on account of their disbelief, and states it as We prevented faith from entering their hearts and their hearing. The classical reading keeps both truths in one frame: the sealing is Allah's act, and it answers a refusal that was the person's own. The verse holds that tension; it does not dissolve it, and neither should the reader.",
            "bn": "অন্য তাফসীরের ভাষাতেও একই কার্যকারণ স্পষ্ট। তাবারী আয়াতের ব্যাখ্যা শেষ করেন এই বলে যে, তারা কখনো সত্যকে আঁকড়ে ধরবে না, কারণ আল্লাহ তাদের অন্তর, কান আর চোখে সিল মেরে দিয়েছেন, তবাআ। কুরতুবী আবরণ আর কানের ভারকে জুড়ে দেন বিসাবাবি কুফরিহিম কথার সঙ্গে, অর্থাৎ তাদের কুফরের কারণে; আর বলেন, আমি তাদের অন্তর ও কানে ঈমান ঢুকতে দিইনি। প্রাচীন তাফসীর দুটো সত্যকেই একসঙ্গে ধরে রাখে: সিল মারা আল্লাহরই কাজ, আর তা মানুষটির নিজের প্রত্যাখ্যানের জবাব। আয়াত এই টানাপোড়েন রেখে দেয়, মিটিয়ে ফেলে না; পাঠকেরও তা মিটিয়ে ফেলা উচিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "About Whom It Was Said",
          "bn": "কাদের ব্যাপারে বলা হলো"
        },
        "p": [
          {
            "en": "Wa-in tadʿuhum ilā al-hudā fa-lan yahtadū idhan abadā: and if you call them to guidance, they will never be guided, then, ever. Two of the commentators narrow whom this describes. Al-Qurtubi says outright that it came down about particular, named people, qawm muʿayyanūn, and that the verse tells against the Qadariyya and their position. Al-Baghawi reads it the same way: this is about peoples of whom Allah knew that they would not believe. On these readings the finality is spoken over a known, hardened set, not turned into a rule that everyone who ever turns away is past reach.",
            "bn": "ওয়া ইন তাদউহুম ইলাল হুদা ফালান ইয়াহতাদু ইযান আবাদা: তুমি তাদের হেদায়েতের দিকে ডাকলেও তারা কক্ষনো হেদায়েত পাবে না, কখনোই না। এ কথা কাদের সম্পর্কে, দুজন তাফসীরকার তার পরিসর সীমিত করে দেন। কুরতুবী স্পষ্ট বলেন, আয়াতটি নাজিল হয়েছে নির্দিষ্ট, চিহ্নিত কিছু মানুষের ব্যাপারে, কাওমুন মুআইয়ানুন; আর এ আয়াত কাদারিয়া সম্প্রদায় ও তাদের মতের বিপক্ষে দলিল। বাগাভীও একইভাবে পড়েন: এ কথা সেই সব সম্প্রদায় সম্পর্কে, যাদের ব্যাপারে আল্লাহ জানতেন যে তারা ঈমান আনবে না। এই ব্যাখ্যায় চূড়ান্ত রায়টা দেওয়া হচ্ছে জানা, কঠিন হয়ে যাওয়া একটা দলের ওপর। কেউ একবার মুখ ফেরালেই চিরতরে নাগালের বাইরে চলে যায়, এমন কোনো সাধারণ নিয়ম এখানে বানানো হচ্ছে না।"
          },
          {
            "en": "As-Sa'di describes that hardened set from the inside. The person who might be hoped to answer the caller to guidance, he says, is someone who does not yet know; but these are people who saw and then went blind, who looked on the road of truth and left it and walked the road of misguidance, whom Allah requited by locking their hearts and sealing them. For their guidance there is no device and no path. The blindness the verse names is not the state of a man who has never been shown; it is the state of someone shown the road, who closed his eyes.",
            "bn": "সাদী সেই কঠিন হয়ে যাওয়া দলের ভেতরের অবস্থাটা দেখান। তিনি বলেন, হেদায়েতের দিকে ডাকলে সাড়া দেবে বলে আশা করা যায় তার কাছ থেকে, যে এখনো জানে না। কিন্তু এরা দেখেছিল, তারপর অন্ধ হয়ে গেছে। সত্যের পথ চোখের সামনে দেখেও তা ছেড়ে গোমরাহির পথে হেঁটেছে। তাই আল্লাহ তাদের অন্তরে তালা লাগিয়ে, সিল মেরে এর প্রতিফল দিয়েছেন। এদের হেদায়েতের কোনো কৌশল নেই, কোনো পথও নেই। আয়াত যে অন্ধত্বের কথা বলছে, তা কখনো পথ দেখেনি এমন মানুষের অবস্থা নয়; তা সেই মানুষের অবস্থা, যাকে পথ দেখানো হয়েছিল আর সে চোখ বন্ধ করে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word to the Caller",
          "bn": "দাওয়াতদাতার প্রতি"
        },
        "p": [
          {
            "en": "At-Tabari hears the last clause as speech aimed at the Prophet himself, upon whom be peace. If you, Muhammad, call these people who turn from Allah's signs when reminded of them to stand firm on the way of truth and to believe in Allah and in what you brought them from your Lord, they will never hold to it, and will never believe in what you call them to. The line is set as consolation: the caller who is refused has not failed at his errand, for the refusal is the hearers' hardness, not a fault in the call.",
            "bn": "তাবারীর মতে শেষ বাক্যটি সরাসরি নবী ﷺ-কে উদ্দেশ করে বলা। হে মুহাম্মদ, যারা আল্লাহর আয়াত দিয়ে উপদেশ পেলে মুখ ফিরিয়ে নেয়, তাদের তুমি যদি সত্যের পথে অটল থাকতে, আল্লাহর ওপর আর তোমার রবের কাছ থেকে তুমি যা এনেছ তার ওপর ঈমান আনতে ডাকো, তবু তারা তা আঁকড়ে ধরবে না, তুমি যেদিকে ডাকছ তাতে কখনো ঈমান আনবে না। কথাটা এসেছে সান্ত্বনা হিসেবে: যার ডাক ফিরিয়ে দেওয়া হলো, সে তার দায়িত্বে ব্যর্থ হয়নি; প্রত্যাখ্যানটা শ্রোতাদের অন্তরের কাঠিন্য, ডাকের কোনো ত্রুটি নয়।"
          },
          {
            "en": "As-Sa'di reads the whole verse, finally, as a warning turned toward the living. In it, he says, is a frightening of the one who leaves the truth after knowing it, that he may be shut off from it and left unable to reach it afterward, and this is among the strongest of deterrents and rebukes against such a thing. So the verse is not handed to the reader as a lens for sorting other people into the sealed and the saved. It is placed in front of him as a fear for his own turning, while turning is still a thing he can stop.",
            "bn": "শেষমেশ সাদী গোটা আয়াতটাকে পড়েন জীবিতদের জন্য সতর্কবাণী হিসেবে। তিনি বলেন, যে জেনেবুঝে সত্য ছেড়ে দেয়, এ আয়াত তাকে ভয় দেখায়: হয়তো তাকে সত্য থেকে আটকে দেওয়া হবে, পরে আর চাইলেও সে সেখানে পৌঁছাতে পারবে না। এমন কাজ থেকে ফেরানোর জন্য এটি সবচেয়ে কড়া হুঁশিয়ারি ও ধমকগুলোর একটি। তাই আয়াতটি পাঠকের হাতে এমন চশমা হিসেবে দেওয়া হয়নি, যা দিয়ে সে অন্যদের ভাগ করবে, কে সিলমারা আর কে নাজাতপ্রাপ্ত। আয়াতটি তার সামনে রাখা হয়েছে তার নিজের মুখ ফেরানোর ভয় হিসেবে, যতক্ষণ সেই মুখ ফেরানো থামানো তার সাধ্যে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Warning, Not a Warrant",
          "bn": "সতর্কবাণী, পরোয়ানা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a class, the most unjust, marked by an inward act: being reminded of Allah's signs and turning away, and the sealing that follows. It speaks of that class alone and licenses nothing against any living person or community. No reader is given a way to look at another and pronounce his heart covered or his ears sealed; that judgement belongs to the One who seals, and the commentators name it as His act, not as a warrant handed to men. Whoever uses the verse to write someone else off has taken a warning meant for himself and aimed it outward.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত একটা শ্রেণির বর্ণনা দেয়, সবচেয়ে বড় জালিমদের; তাদের চেনা যায় একটা ভেতরের কাজ দিয়ে: আল্লাহর আয়াত দিয়ে উপদেশ পেয়েও মুখ ফেরানো, আর তার পরে আসা সিল। আয়াত কেবল সেই শ্রেণির কথাই বলে; জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। কোনো পাঠককে এমন অধিকার দেওয়া হয়নি যে সে অন্যের দিকে তাকিয়ে বলবে, তার অন্তর ঢাকা পড়েছে বা কানে সিল পড়েছে। সেই রায় তাঁর, যিনি সিল মারেন; তাফসীরকারেরাও একে তাঁর কাজ বলেছেন, মানুষের হাতে দেওয়া পরোয়ানা বলেননি। যে এই আয়াত দিয়ে অন্য কাউকে বাতিলের খাতায় ফেলে দেয়, সে নিজের জন্য আসা সতর্কবাণী অন্যের দিকে তাক করেছে।"
          },
          {
            "en": "It also matters where the passage is standing. This is an āyah of judgement, and the sūra does not leave it there. The very next verse opens with your Lord, the Forgiving, the Owner of mercy, and turns the account toward a respite that has its own reflection to give; it is not for this page to spend. Ibn Kathir reads the two together, moving from the sealed hearts here to the forgiveness there. The reader made afraid by this verse is meant to carry that fear straight into the door the next verse opens, not to sit down inside the fear.",
            "bn": "এই অংশটি কোথায় দাঁড়িয়ে আছে, সেটাও গুরুত্বপূর্ণ। এটি বিচারের আয়াত, কিন্তু সূরা কথাটা এখানেই শেষ করে না। ঠিক পরের আয়াত শুরু হয় 'তোমার রব ক্ষমাশীল, দয়ার মালিক' দিয়ে, আর হিসাবের কথাকে নিয়ে যায় অবকাশের দিকে। সে আয়াতের নিজস্ব শিক্ষা আছে, এই পৃষ্ঠায় তা খরচ করার নয়। ইবন কাসীর দুই আয়াত একসঙ্গে পড়েন: এখানকার সিল মারা অন্তর থেকে সেখানকার ক্ষমায় চলে যান। এই আয়াত পড়ে যে পাঠক ভয় পেলেন, তাঁর কাজ সেই ভয় নিয়ে বসে থাকা নয়; সেই ভয় নিয়েই সোজা পরের আয়াতের খুলে দেওয়া দরজায় ঢুকে পড়া।"
          }
        ]
      }
    ]
  },
  "18:63": {
    "sections": [
      {
        "h": {
          "en": "At the Rock, a Fish Forgotten",
          "bn": "শিলার পাশে হারানো মাছ"
        },
        "p": [
          {
            "en": "The verse is spoken not by Musa (AS) but by his young companion, and it looks back at a place the two have already left behind. At-Tabari opens by naming the speaker plainly: the servant of Musa said to him, when Musa asked for their morning meal, do you recall the time we took shelter beside the rock? There, he admits, I forgot the fish. Al-Baghawi places that rock on the travelled road, which the early reports set below a named river, the very place the two had been journeying toward.",
            "bn": "এ আয়াতের কথাগুলো মূসা (আঃ)-এর নয়, তাঁর তরুণ সঙ্গীর। কথাটা ফিরে তাকায় এমন এক জায়গার দিকে, যা দুজন আগেই পেছনে ফেলে এসেছেন। তাবারী শুরুতেই বক্তাকে স্পষ্ট চিনিয়ে দেন: মূসা যখন সকালের খাবার চাইলেন, তখন তাঁর খাদেম বলল, আপনার কি মনে আছে, আমরা যখন ওই শিলার পাশে আশ্রয় নিয়েছিলাম? সেখানেই আমি মাছের কথা ভুলে গিয়েছিলাম, এই তার স্বীকারোক্তি। বাগভী সেই শিলাকে রাখেন তাঁদের চলার পথে; আদি বর্ণনায় জায়গাটা একটি নির্দিষ্ট নদীর নিচের দিকে, ঠিক সেখানে, যেদিকে দুজন যাচ্ছিলেন।"
          },
          {
            "en": "To feel the weight of the confession we must step back to the two verses before it. When the pair reached the junction of the two seas, they forgot their fish, and it slipped into the water and was gone (18:61). They pressed on, and only the following day did fatigue make Musa (AS) call for food (18:62). The fish had never been ordinary provision. It was the marker of a meeting Musa (AS) had set out to find, the sign that where the fish left them, there the servant of God would be waiting.",
            "bn": "স্বীকারোক্তির ভার বুঝতে হলে আমাদের ফিরতে হবে তার আগের দুই আয়াতে। দুজন যখন দুই সমুদ্রের মিলনস্থলে পৌঁছল, তারা তাদের মাছের কথা ভুলে গেল, আর সেটি পানিতে পিছলে হারিয়ে গেল (১৮:৬১)। তারা এগিয়ে চলল, আর পরের দিন ক্লান্তি এলে তবেই মূসা (আঃ) খাবার চাইলেন (১৮:৬২)। মাছটি কখনোই সাধারণ রসদ ছিল না। ছিল সেই সাক্ষাতের চিহ্ন, যা খুঁজতে মূসা (আঃ) বেরিয়েছিলেন। ইশারা এই যে, মাছ যেখানে তাদের ছেড়ে যাবে, সেখানেই অপেক্ষায় থাকবেন আল্লাহর সেই বান্দা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Marker They Carried",
          "bn": "সঙ্গে বয়ে নেওয়া নিশানা"
        },
        "p": [
          {
            "en": "Al-Muyassar tells the moment in its plainest form. The servant reminds Musa of the rock where they had rested, and confesses that he forgot to report what became of the fish: the dead fish had stirred with life, leapt into the sea and made itself a path in it, and its whole affair was a thing to marvel at. As-Sadi says the same of the ending, that once the fish slipped into the water and entered it, the event stood among the wonders. What they had carried as a lifeless, salted thing had moved on its own and vanished into the deep.",
            "bn": "মুয়াসসার মুহূর্তটাকে বলে একেবারে সাদামাটা ভাষায়। খাদেম মূসাকে সেই শিলার কথা মনে করিয়ে দেয় যেখানে তারা বিশ্রাম নিয়েছিল, আর স্বীকার করে যে মাছের কী হলো তা জানাতে সে ভুলে গেছে: মরা মাছটির ভেতরে প্রাণ ফিরে এসেছিল, সেটি সমুদ্রে লাফিয়ে পড়ে নিজের একটা পথ করে নিয়েছিল, আর তার গোটা ব্যাপারটাই ছিল বিস্ময়ের। সাদী শেষটা নিয়ে একই কথা বলেন, মাছ যখন পানিতে পিছলে ঢুকে গেল, ঘটনাটা তখন আশ্চর্যের কাতারে দাঁড়াল। প্রাণহীন লবণাক্ত যে জিনিস তারা বহন করছিল, তা নিজে থেকে নড়ে উঠে গভীর পানিতে মিলিয়ে গেল।"
          },
          {
            "en": "As-Sadi makes the purpose of the fish explicit. Musa (AS) had been given a promise from his Lord that the loss of the fish would mark the place he was seeking. So the fish in the basket was never food to lean on; it was a compass. As long as it lay dead and still, the road went on. The instant life returned to it and it took to the water, the appointed spot had been reached. The traveller was told to watch not a map but a sign, and to read his arrival in the disappearance of what he carried.",
            "bn": "সাদী মাছের উদ্দেশ্যটা খোলাসা করে দেন। মূসা (আঃ)-কে তাঁর রব কথা দিয়েছিলেন, যেখানে মাছটি হারাবে, সেটাই হবে তাঁর খোঁজা জায়গা। তাই ঝুড়ির মাছটি ভরসা করার মতো খাবার কখনোই ছিল না; সেটা ছিল কম্পাস। যতক্ষণ মাছটি মরা, নিশ্চল পড়ে ছিল, ততক্ষণ পথ চলা বাকি। যেই তাতে প্রাণ ফিরল আর সেটি পানিতে নেমে গেল, বোঝা গেল নির্ধারিত জায়গায় পৌঁছে গেছেন। মুসাফিরকে মানচিত্র দেখতে বলা হয়নি, বলা হয়েছিল একটা নিশানার দিকে নজর রাখতে। সঙ্গে বয়ে আনা জিনিসটি যেখানে হারিয়ে যাবে, সেখানেই তিনি বুঝবেন, পৌঁছে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration From Bukhari",
          "bn": "বুখারির একটি বর্ণনা"
        },
        "p": [
          {
            "en": "The whole episode rests on a sound narration. Said ibn Jubayr asked Ibn Abbas about the claim of Nawf al-Bikali that the Musa of this story was not the Musa of the Children of Israel. Ibn Abbas called the claim a lie and narrated, from Ubayy ibn Kab, that the Prophet (peace be upon him) told the account. Al-Bukhari recorded it in his Sahih, so it carries the collection's soundest grade. It is the primary source behind everything the commentators say about the fish, the rock and the meeting to come.",
            "bn": "গোটা ঘটনাটি দাঁড়িয়ে আছে একটি সহীহ বর্ণনার ওপর। নাওফ আল-বিকালী দাবি করেছিলেন, এ কাহিনির মূসা বনী ইসরাঈলের মূসা নন। সাঈদ ইবন জুবায়র এ দাবির ব্যাপারে ইবন আব্বাসকে জিজ্ঞেস করলেন। ইবন আব্বাস বললেন, এ দাবি মিথ্যা, তারপর উবাই ইবন কাব থেকে বর্ণনা করলেন যে নবী ﷺ নিজে ঘটনাটি বলেছেন। বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন, তাই এর মান সেই সংকলনের সর্বোচ্চ স্তরের। মাছ, শিলা আর সামনের সাক্ষাৎ নিয়ে তাফসীরকারেরা যা কিছু বলেন, তার মূল উৎস এই বর্ণনাই।"
          },
          {
            "en": "The words that bear on the sign run so. Allah told Musa to take a fish and put it in a basket; where he lost the fish, there the servant would be. Musa set out with his boy Yusha ibn Nun until they reached the rock, where they laid down their heads and slept. The fish stirred, left the basket, and fell into the sea, taking its way through it as in a tunnel; Allah held back the flow of the water over it until it stood like an arch. That is the portion of the hadith touching the fish and its path.",
            "bn": "হাদিসের যে অংশ এই নিশানার সঙ্গে জড়িত, তা এরকম। আল্লাহ মূসাকে বললেন একটি মাছ নিয়ে ঝুড়িতে রাখতে; যেখানে মাছটি হারাবে, সেখানেই পাওয়া যাবে সেই বান্দাকে। মূসা তাঁর খাদেম ইউশা ইবন নূনকে নিয়ে রওনা হলেন। শিলার কাছে পৌঁছে তাঁরা মাথা রেখে ঘুমিয়ে পড়লেন। মাছটি নড়ে উঠল, ঝুড়ি থেকে বেরিয়ে সমুদ্রে পড়ল, আর সুড়ঙ্গের মতো করে পানির ভেতর দিয়ে পথ করে নিল; আল্লাহ তার ওপর পানির স্রোত থামিয়ে রাখলেন, ফলে পানি খিলানের মতো দাঁড়িয়ে রইল। মাছ আর তার পথের কথা হাদিসের এটুকুতেই আছে।"
          },
          {
            "en": "The narration also settles who the unnamed companion was. It names him Yusha ibn Nun, the boy who travelled with Musa (AS), and this is the sound basis on which the commentators identify the servant of the verse. The same hadith shows that Musa (AS) was asleep when the fish went, so the departure into the sea was witnessed by the young man alone. That detail will matter for the next question the commentators raise: who exactly forgot, and what.",
            "bn": "আয়াতে যাঁর নাম নেই, সেই সঙ্গীটি কে ছিলেন, বর্ণনাটি সে প্রশ্নেরও মীমাংসা করে দেয়। এতে তাঁর নাম বলা হয়েছে ইউশা ইবন নূন, সেই তরুণ, যিনি মূসা (আঃ)-এর সঙ্গে সফর করছিলেন। এই সহীহ ভিত্তির ওপর দাঁড়িয়েই তাফসীরকারেরা আয়াতের খাদেমকে চিহ্নিত করেন। একই হাদিস থেকে জানা যায়, মাছটি যখন চলে যায়, তখন মূসা (আঃ) ঘুমিয়ে ছিলেন; তাই মাছের সমুদ্রে নেমে যাওয়া দেখেছিলেন কেবল ওই তরুণ। তাফসীরকারেরা পরে যে প্রশ্ন তোলেন, তাতে এই খুঁটিনাটিটা কাজে লাগবে: ঠিক কে ভুলেছিলেন, আর কী ভুলেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Spring at the Rock",
          "bn": "শিলার পাশে জীবনের ঝর্ণা"
        },
        "p": [
          {
            "en": "Ibn Kathir supplies the cause the bare verse leaves out. At the junction of the two seas, he reports, there was a spring called Ayn al-Hayat, the Spring of Life. The travellers slept beside it, and the fish felt the drops of that water and came back to life; it jumped from its vessel into the sea and swam off, leaving a track behind it. In another wording he records, the spring lay at the base of the rock itself, and its water touched nothing without giving it life.",
            "bn": "আয়াত শুধু ঘটনাটুকু বলে, কারণটা বলে না; ইবন কাসীর সেটা জুগিয়ে দেন। তিনি জানান, দুই সমুদ্রের মিলনস্থলে একটা ঝর্ণা ছিল, নাম আইনুল হায়াত, অর্থাৎ জীবনের ঝর্ণা। মুসাফির দুজন তার পাশে ঘুমিয়েছিলেন। সেই পানির ছিটে মাছের গায়ে লাগতেই সেটি প্রাণ ফিরে পেল, পাত্র থেকে লাফিয়ে সমুদ্রে পড়ে সাঁতরে চলে গেল, পেছনে রেখে গেল একটা রেখা। তাঁর আনা আরেক বর্ণনায় আছে, ঝর্ণাটি ছিল ঠিক শিলার গোড়ায়, আর তার পানি যা-ই ছুঁত, তাতেই প্রাণ এসে যেত।"
          },
          {
            "en": "Al-Qurtubi carries the same tradition, tracing it through a report in al-Bukhari from Ibn Abbas: the fish revived because the water of that spring reached it, water that never touched a thing without its coming alive. He cites at-Tirmidhi as well, where Sufyan noted that people say the rock has beside it the spring of life. A further account has Musa (AS) making ablution from the spring, so that a drop from his beard fell on the fish and it revived. Al-Qurtubi reports each strand and closes, as such reports deserve, with and God knows best.",
            "bn": "কুরতুবীও একই বর্ণনা এনেছেন, বুখারীতে ইবন আব্বাস থেকে আসা এক বর্ণনার সূত্র ধরে: সেই ঝর্ণার পানি গায়ে লাগায় মাছটি প্রাণ ফিরে পেয়েছিল; সে পানি যা-ই ছুঁত, তা-ই জীবিত হয়ে উঠত। তিনি তিরমিযীর কথাও আনেন, যেখানে সুফিয়ান বলেছেন, লোকে বলে ওই শিলার পাশেই জীবনের ঝর্ণা। আরেক বর্ণনায় আছে, মূসা (আঃ) সেই ঝর্ণার পানিতে অজু করছিলেন, তাঁর দাড়ি থেকে এক ফোঁটা পানি মাছের ওপর পড়ল, আর মাছটি বেঁচে উঠল। কুরতুবী প্রতিটি বর্ণনা উল্লেখ করেন, তারপর এমন বর্ণনার বেলায় যেমন বলা উচিত, শেষ করেন 'আল্লাহই ভালো জানেন' বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Forgetting Was It",
          "bn": "ভুলটা আসলে কার"
        },
        "p": [
          {
            "en": "The earlier verse says they forgot their fish (18:61), a plural that seems to lay the lapse on both men. The commentators read it more finely. Al-Baghawi explains that it was the servant who forgot, and forgot a specific thing: to tell Musa what had happened. When Yusha saw the fish take to the water, he rose meaning to catch up and report it, then it slipped his mind, and the two walked on until they had prayed the noon prayer of the following day. The forgetting was his, and its object was the telling.",
            "bn": "আগের আয়াত বলে তারা তাদের মাছের কথা ভুলে গেল (১৮:৬১), এমন এক বহুবচন যা যেন দোষটা দুজনের ঘাড়েই রাখে। তাফসীরকারেরা তা আরও সূক্ষ্মভাবে পড়েন। বাগভী বলেন, খাদেমই ভুলেছিল, আর ভুলেছিল একটা নির্দিষ্ট জিনিস: মূসাকে জানানো যে কী ঘটেছে। ইউশা যখন দেখল মাছ পানিতে নেমে গেল, সে উঠল মূসার নাগাল পেয়ে খবরটা দিতে, তারপর সেটা তার মন থেকে ফসকে গেল, আর দুজন এগিয়ে চলল পরের দিনের যোহরের নামাজ পড়া পর্যন্ত। ভুলটা ছিল তার, আর তার বিষয় ছিল জানানোটা।"
          },
          {
            "en": "Ibn Kathir and the Maarif al-Quran reconcile the plural with a familiar habit of speech. The forgetting is ascribed to both men though only the servant actually forgot, just as the Quran says pearl and coral come out of both seas (55:22) when, by one reading, they are drawn from only one of them. A thing shared by a pair can be spoken of as theirs even when it belongs to one. The verse does not fault Musa (AS); it uses the ordinary reach of language, and the tafsir keeps the distinction clear.",
            "bn": "ইবন কাসীর আর মাআরিফুল কুরআন বহুবচনটার ব্যাখ্যা দেন কথা বলার এক চেনা রীতি দিয়ে। আসলে ভুলেছিল কেবল খাদেম, তবু ভুলটা দুজনের নামে বলা হয়েছে। ঠিক যেমন কুরআন বলে, দুই সমুদ্র থেকেই মুক্তা আর প্রবাল বের হয় (৫৫:২২), অথচ এক ব্যাখ্যা অনুযায়ী তা তোলা হয় কেবল একটি থেকে। জোড়ার সঙ্গে জড়িত কোনো কিছু একজনের হলেও দুজনের বলে উল্লেখ করা যায়। আয়াত এখানে মূসা (আঃ)-এর দোষ ধরছে না; ভাষার স্বাভাবিক রীতিতেই কথা বলছে, আর তাফসীর পার্থক্যটা পরিষ্কার রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Only Satan Made Me Forget",
          "bn": "শয়তানই আমাকে ভুলিয়ে দিয়েছিল"
        },
        "p": [
          {
            "en": "The servant does not pass the lapse off lightly. He says none made me forget it but Satan, that I should mention it. At-Tabari works out the grammar: the clause that I should mention it is the object of the forgetting, so the sense is Satan made me forget to mention the fish. He notes that the reading of Ibn Masud sets the words in a slightly different order to the same effect. The confession is exact. The servant does not deny the failure; he traces it to its real source.",
            "bn": "খাদেম ভুলটাকে হালকা করে উড়িয়ে দেয় না। সে বলে: শয়তানই আমাকে ভুলিয়ে দিয়েছে, যে আমি এর কথা বলব। তাবারী ব্যাকরণটা খুলে দেখান: 'যে আমি এর কথা বলব', এই অংশটাই ভুলে যাওয়ার বিষয়; তাই অর্থ দাঁড়ায়, শয়তান আমাকে মাছের কথা বলতে ভুলিয়ে দিয়েছে। তিনি জানান, ইবন মাসউদের কিরাআতে শব্দগুলোর ক্রম একটু আলাদা, কিন্তু অর্থ একই। স্বীকারোক্তিটা একেবারে নিখুঁত। খাদেম ব্যর্থতা অস্বীকার করে না; তার আসল উৎসটা চিনিয়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi frames the whole sentence as the servant's apology to Musa for not reporting the matter sooner. As-Sadi reads it plainly too: Satan was the cause of the forgetting, and so he is named. There is an adab here worth pausing on. To name Satan is not to shrug the failure onto someone else and walk away; it is to recognise the enemy who works precisely through distraction and delay. The servant owns the forgetting as his own and, in the same breath, marks where the heedlessness came from.",
            "bn": "কুরতুবীর মতে গোটা বাক্যটা খাদেমের মাফ চাওয়া: বিষয়টা আগেই জানায়নি বলে সে মূসার কাছে ওজর পেশ করছে। সাদীও সোজাভাবে পড়েন: ভুলের কারণ ছিল শয়তান, তাই তার নাম নেওয়া হলো। এখানে একটু থেমে দেখার মতো একটা আদব আছে। শয়তানের নাম নেওয়া মানে দোষটা অন্যের ঘাড়ে চাপিয়ে সরে পড়া নয়; এর মানে সেই শত্রুকে চিনে নেওয়া, যে কাজ করে ঠিক অন্যমনস্কতা আর গড়িমসির ভেতর দিয়ে। খাদেম ভুলটাকে নিজের বলেই মেনে নেয়, আর একই নিঃশ্বাসে দেখিয়ে দেয় গাফিলতিটা কোথা থেকে এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Many Readings of Wonder",
          "bn": "বিস্ময় নিয়ে নানা পাঠ"
        },
        "p": [
          {
            "en": "And it took its course into the sea, ajaban, amazingly. Al-Qurtubi lays out several ways to read the last word. It may still be the servant speaking, saying the fish took its path as a wonder to the people who heard of it. Or the report ends at it took its path in the sea, and a fresh exclamation follows, how amazing this whole affair is. Or the words are God's own telling, either of Musa's amazement or of the fish. The point of wonder, he adds, is that a dead and half-eaten fish had come alive.",
            "bn": "আর সে বিস্ময়করভাবে সমুদ্রে নিজের পথ করে নিল, আজাবান। শেষ শব্দটা কয়েকভাবে পড়া যায়, কুরতুবী তা দেখিয়ে দেন। হতে পারে এটাও খাদেমের কথা: মাছটি এমনভাবে পথ করে নিল যে যারা শুনবে তারা অবাক হবে। কিংবা খাদেমের কথা শেষ হয়েছে 'সে সমুদ্রে নিজের পথ করে নিল' পর্যন্ত, তারপর নতুন করে বিস্ময়: কী আশ্চর্য এই গোটা ব্যাপার! অথবা কথাগুলো আল্লাহর নিজের বর্ণনা, হয় মূসার বিস্ময়ের, নয়তো মাছের। তিনি যোগ করেন, বিস্ময়টা এখানেই যে মরা, অর্ধেক খাওয়া একটা মাছ প্রাণ ফিরে পেয়েছিল।"
          },
          {
            "en": "At-Tabari gathers the same sense from the early authorities. Mujahid says Musa marvelled at the trace of the fish in the sea and the eddies where it vanished. Ibn Abbas says the fish's passage through the water was, to Musa, a wonder. Ibn Zayd asks what could be stranger than a fish long eaten from, then brought alive. Across these reports the amazement is fixed on Musa (AS) and his companion, while the path itself is the fish's; the wonder is in the eye that watched, not only in the swimmer.",
            "bn": "তাবারী প্রথম যুগের আলেমদের কথা থেকে একই অর্থ জড়ো করেন। মুজাহিদ বলেন, সমুদ্রে মাছের রেখা আর যে ঘূর্ণিতে সে মিলিয়ে গেল, তা দেখে মূসা অবাক হয়েছিলেন। ইবন আব্বাস বলেন, পানির ভেতর দিয়ে মাছের চলে যাওয়া মূসার কাছে ছিল এক বিস্ময়। ইবন যায়দ প্রশ্ন করেন, যে মাছ থেকে এতদিন ধরে খাওয়া হলো, সেটা জীবিত হয়ে ওঠার চেয়ে আশ্চর্য আর কী হতে পারে? এসব বর্ণনায় বিস্ময়টা মূসা (আঃ) আর তাঁর সঙ্গীর, আর পথটা মাছের। অর্থাৎ বিস্ময় কেবল সাঁতরে যাওয়া মাছে নয়, যে চোখ তা দেখেছে তাতেও।"
          },
          {
            "en": "Al-Baghawi records both attributions without settling between them. The words may be the servant's amazement at the fish leaping into the sea, or they may be Musa's own, ajaban read as if to say I marvel greatly at this. The commentators do not force a single answer, and neither should we. Whose wonder the verse voices, the servant's or the prophet's, is left open, and holding it open is truer to the text than tidying it into one speaker. What both agree on is that the sight was extraordinary.",
            "bn": "বাগভী দুটো মতই উল্লেখ করেন, কোনোটার পক্ষে রায় দেন না। কথাগুলো হতে পারে মাছকে সমুদ্রে লাফিয়ে পড়তে দেখে খাদেমের বিস্ময়; আবার হতে পারে মূসার নিজের কথা, যেন তিনি বলছেন, এতে আমি ভীষণ অবাক হয়েছি। তাফসীরকারেরা একটিমাত্র জবাব চাপিয়ে দেন না, আমাদেরও দেওয়া উচিত নয়। আয়াত কার বিস্ময়ের কথা বলছে, খাদেমের না নবীর, প্রশ্নটা খোলা রাখা হয়েছে। একজন বক্তার ঘাড়ে চাপিয়ে গুছিয়ে ফেলার চেয়ে প্রশ্নটা খোলা রাখাই আয়াতের প্রতি বেশি বিশ্বস্ত থাকা। দুই মতই যে বিষয়ে একমত, তা হলো দৃশ্যটা ছিল অসাধারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tunnel and a Wonder",
          "bn": "সুড়ঙ্গ আর বিস্ময়"
        },
        "p": [
          {
            "en": "The two words for the fish's path, saraban in the earlier verse (18:61) and ajaban here, do not pull against each other. The Maarif al-Quran explains that a sarab is a tunnel bored through a mountain or under a city; the water did not close over the fish but stayed open, like a passage held apart. The hadith in al-Bukhari shows the very same thing, the flow of the water held back until it stood over the fish like an arch. One image describes the path, the other the astonishment of seeing it.",
            "bn": "মাছের পথ বোঝাতে দুটি শব্দ এসেছে: আগের আয়াতে সারাবান (১৮:৬১), আর এখানে আজাবান। দুটোর মধ্যে কোনো বিরোধ নেই। মাআরিফুল কুরআন বোঝায়, সারাব মানে পাহাড় ফুঁড়ে বা শহরের নিচ দিয়ে খোঁড়া সুড়ঙ্গ; পানি মাছের ওপর বুজে যায়নি, খোলা থেকে গিয়েছিল, যেন দুপাশে সরিয়ে রাখা একটা পথ। বুখারীর হাদিসেও ঠিক এটাই আছে: পানির স্রোত থামিয়ে রাখা হলো, শেষে মাছের ওপর তা খিলানের মতো দাঁড়িয়ে গেল। একটা শব্দ পথটার বর্ণনা দেয়, অন্যটা সেই পথ দেখার বিস্ময়ের।"
          },
          {
            "en": "An early report gathers both words in a single line: for the fish it was a tunnel, and for Musa (AS) and his servant a wonder. The single event wore two faces. On one side lay the plain path of a swimming thing through the water; on the other stood a sign, that a lifeless fish had returned to life at the exact place where the meeting had been promised. The tunnel and the wonder are not rival descriptions but the same moment seen from below the surface and from the shore above it.",
            "bn": "প্রথম যুগের এক বর্ণনা দুটি শব্দকে এক বাক্যেই মিলিয়ে দেয়: মাছের জন্য তা ছিল সুড়ঙ্গ, আর মূসা (আঃ) ও তাঁর খাদেমের জন্য বিস্ময়। একই ঘটনার দুটি দিক। একদিকে পানির ভেতর দিয়ে সাঁতরে যাওয়া এক প্রাণীর সাধারণ পথ; অন্যদিকে এক নিদর্শন: প্রাণহীন মাছ প্রাণ ফিরে পেল ঠিক সেই জায়গায়, যেখানে সাক্ষাতের ওয়াদা ছিল। সুড়ঙ্গ আর বিস্ময় তাই পরস্পরবিরোধী বর্ণনা নয়; একই মুহূর্ত, একবার পানির নিচ থেকে দেখা, আরেকবার ওপরের তীর থেকে।"
          },
          {
            "en": "The lesson sits in the timing. The sign came while the two rested, and they walked a day beyond it before hunger turned them back. What a person is sent to find can arrive at the very hour he is least watchful, and leave no mark he notices until much later. The servant's honesty is the way out of that: he named the lapse plainly, I forgot, and here is where and why, and only then could they retrace their steps. To go back to the place where attention failed is the first move of every return.",
            "bn": "শিক্ষাটা লুকিয়ে আছে সময়ের মধ্যে। নিশানাটা এসেছিল যখন দুজন বিশ্রাম নিচ্ছিলেন, আর তাঁরা সেটা পেরিয়ে এক দিন হেঁটে চলে গেলেন; তারপর ক্ষুধা তাঁদের ফিরিয়ে আনল। মানুষ যা খুঁজতে বেরিয়েছে, তা আসতে পারে ঠিক সেই মুহূর্তে, যখন সে সবচেয়ে অসতর্ক; আর অনেক পরে না হওয়া পর্যন্ত সে তা টেরই পায় না। এ থেকে বেরোনোর পথ খাদেমের সততা: সে ভুলটা সোজাসুজি স্বীকার করল, আমি ভুলে গিয়েছিলাম, এই হলো কোথায় আর কেন। তবেই তাঁরা পায়ের চিহ্ন ধরে ফিরে যেতে পারলেন। যেখানে মনোযোগ ছুটে গিয়েছিল, সেখানে ফিরে যাওয়াই প্রতিটি ফেরার প্রথম ধাপ।"
          }
        ]
      }
    ]
  },
  "18:68": {
    "sections": [
      {
        "h": {
          "en": "Two Sentences, One Warning",
          "bn": "দুই বাক্য, এক সতর্কতা"
        },
        "p": [
          {
            "en": "Al-Khiḍr answers Mūsā's request to follow him with two sentences that belong together. The first is a verdict: innaka lan tastaṭīʿa maʿiya ṣabrā — indeed, you will never be able to be patient with me. The second, our verse, gives its reason: wa-kayfa taṣbiru ʿalā mā lam tuḥiṭ bihi khubrā — and how can you be patient over what you do not encompass in knowledge? The forecast comes first, then the ground beneath it. Read together, they state a principle before a single deed is done.",
            "bn": "মূসা (আঃ) অনুসরণের অনুমতি চাইলে খিযির (আঃ) এমন দুই বাক্যে জবাব দেন যা একসঙ্গে বোঝা দরকার। প্রথমটি রায়: ইন্নাকা লান তাসতাতীআ মাঈয়া সাবরা, অর্থাৎ আপনি কিছুতেই আমার সাথে ধৈর্য ধরতে পারবেন না। দ্বিতীয়টি, আমাদের এই আয়াত, তার কারণ দেয়: ওয়া কাইফা তাসবিরু আলা মা লাম তুহিত বিহি খুবরা, যে বিষয়ে আপনার জ্ঞান পৌঁছায়নি তার উপর ধৈর্য ধরবেন কীভাবে? আগে ভবিষ্যদ্বাণী, তারপর তার নিচের ভিত্তি। একটি কাজও শুরু হওয়ার আগেই দুই বাক্য মিলে একটা নীতি বলে দেয়।"
          },
          {
            "en": "As-Saʿdī draws the principle out plainly. How, he asks in gloss, can you be patient over a matter whose inside and outside you have not encompassed, whose intent and whose outcome you do not know? Patience, on this reading, is not simply a strength of temper that some have and others lack. It is tied to knowledge. Where the reason for a thing stays hidden, the will to bear it has nothing to grip, and even the most resolved person will give way.",
            "bn": "সাদী নীতিটা খোলাসা করে দেন। ব্যাখ্যায় তিনি প্রশ্ন করেন, যে বিষয়ের ভেতর-বাহির আপনি পুরো জানেন না, যার উদ্দেশ্য আর পরিণতি আপনার অজানা, তার ওপর ধৈর্য ধরবেন কীভাবে? এই ব্যাখ্যায় ধৈর্য কেবল মেজাজের জোর নয়, যা কারও থাকে আর কারও থাকে না। ধৈর্য জ্ঞানের সঙ্গে বাঁধা। কোনো কিছুর কারণ যখন আড়ালে থাকে, তখন তা সয়ে যাওয়ার মতো কোনো অবলম্বন মন খুঁজে পায় না। তখন সবচেয়ে দৃঢ় মানুষটিও ভেঙে পড়ে।"
          },
          {
            "en": "Notice what al-Khiḍr does not say. He does not call Mūsā weak, nor doubt his sincerity. He names a condition. The gap is not in Mūsā's resolve but in his information, and a resolve set over missing information is a bridge with no far bank. This is why the warning lands as kindness rather than insult. Al-Khiḍr is telling his companion, in advance and to his face, exactly where the coming days are going to test him.",
            "bn": "খেয়াল করুন, খিযির (আঃ) কী বলেন না। তিনি মূসা (আঃ)-কে দুর্বল বলেন না, তাঁর আন্তরিকতা নিয়েও সন্দেহ করেন না। তিনি কেবল একটা অবস্থার কথা বলেন। ঘাটতিটা মূসা (আঃ)-এর সংকল্পে নয়, তাঁর জানায়। আর না-জানার ওপর দাঁড় করানো সংকল্প এমন সেতুর মতো, যার ওপারে কোনো পাড় নেই। তাই সতর্কবাণীটা অপমান হয়ে নয়, দয়া হয়ে পৌঁছায়। খিযির (আঃ) সঙ্গীকে আগেভাগেই, মুখের ওপর বলে দিচ্ছেন, সামনের দিনগুলো ঠিক কোথায় তাঁকে পরীক্ষায় ফেলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Khubr Means",
          "bn": "খুবর শব্দের মানে"
        },
        "p": [
          {
            "en": "The verse turns on two words. Khubran, al-Baghawī and aṭ-Ṭabarī both gloss simply as ʿilman, knowledge. But the verb paired with it is tuḥiṭ, from iḥāṭa, to encircle a thing completely, to surround it on every side. Mūsā is not told that he knows nothing; he is told he has not encompassed this. A person can know a great deal about an event and still stand outside it, holding an edge and not the whole. That outside knowledge is exactly what will not carry him through what is coming.",
            "bn": "আয়াতটি ঘোরে দুটি শব্দের উপর। খুবরা শব্দের অর্থ বাগাভী ও তাবারী দুজনেই সোজা করে দেন ইলমান, অর্থাৎ জ্ঞান। কিন্তু এর সঙ্গী ক্রিয়া তুহিত, এসেছে ইহাতা থেকে, যার মানে কোনো কিছুকে পুরোপুরি ঘিরে ফেলা, চারদিক থেকে ঘেরা। মূসা (আঃ)-কে বলা হয়নি যে তিনি কিছুই জানেন না। বলা হয়েছে, তিনি এটিকে ঘিরে ধরতে পারেননি। কোনো ঘটনা সম্পর্কে অনেক কিছু জেনেও একজন তার বাইরে দাঁড়িয়ে থাকতে পারে, প্রান্ত ধরে, পুরোটা নয়। সেই বাইরের জ্ঞানই সামনের ধকল পার করাতে পারবে না।"
          },
          {
            "en": "Al-Qurṭubī sharpens the sense. The khabīr, he says, is the one who knows the hidden dimensions of matters, what is drawn out of them only by close testing. Khubr, then, is not passing acquaintance with a thing's face but inner knowledge of its reality — the kind that comes from having gone into it. As-Saʿdī had listed the same layers: the inward and the outward of a matter, its purpose, and where it will end. Mūsā carried none of these for al-Khiḍr's acts, and knew that he did not.",
            "bn": "কুরতুবী মানেটা আরও ধারালো করেন। তিনি বলেন, খাবীর সেই ব্যক্তি যে বিষয়গুলোর গোপন দিকগুলো জানে, যা কেবল খুঁটিয়ে পরখ করলেই বেরিয়ে আসে। তাহলে খুবর মানে কোনো জিনিসের চেহারার সঙ্গে ভাসা-ভাসা পরিচয় নয়, বরং তার আসল রূপের ভেতরের জ্ঞান, যা ভেতরে ঢুকলেই মেলে। সাদীও একই স্তরগুলো সাজিয়েছিলেন: বিষয়ের ভেতর ও বাহির, তার উদ্দেশ্য, আর কোথায় গিয়ে শেষ হবে। খিযির (আঃ)-এর কাজের বেলায় এর একটিও মূসা (আঃ)-এর কাছে ছিল না, আর তা যে নেই সেটাও তিনি জানতেন।"
          },
          {
            "en": "The distinction is not between ignorance and knowledge but between two reaches of knowledge. Mūsā held the ẓāhir, the face a thing turns to the world; al-Khiḍr had been shown the bāṭin, the reason folded inside it. A judge who sees only the face can be perfectly right about the face and perfectly wrong about the thing. That is the exact predicament the verse names, and it is the plight of anyone who looks at a purpose whose hidden half has not been shown to them.",
            "bn": "পার্থক্যটা অজ্ঞতা আর জ্ঞানের মধ্যে নয়; জ্ঞানের দুই রকম নাগালের মধ্যে। মূসা (আঃ)-এর কাছে ছিল জাহির, অর্থাৎ বাইরে থেকে যা দেখা যায়। খিযির (আঃ)-কে দেখানো হয়েছিল বাতিন, ভেতরে লুকানো কারণটা। যে বিচারক কেবল বাইরের চেহারা দেখেন, তিনি সেই চেহারা নিয়ে পুরোপুরি সঠিক হয়েও আসল ব্যাপারে পুরোপুরি ভুল হতে পারেন। আয়াত ঠিক এই সংকটটাই ধরিয়ে দেয়। কোনো কাজের উদ্দেশ্যের লুকানো অর্ধেকটা যাকে দেখানো হয়নি, সে-ই এই সংকটে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Gifts of Knowing",
          "bn": "জানার দুই দান"
        },
        "p": [
          {
            "en": "The abridged tafsīr of Ibn Kathīr frames the whole meeting on this point. Al-Khiḍr, it says, had been given knowledge that Allah had not given Mūsā, just as Mūsā had been given knowledge that Allah had not given al-Khiḍr. The scene is not a lesser man standing before a greater one. It is two servants, each handed a portion the other was not, meeting where those portions would rub against each other. What looks to Mūsā like a wrong is, to al-Khiḍr, a thing he alone has been shown.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত তাফসীর গোটা সাক্ষাৎটাকে এই কথার ওপরই দাঁড় করায়। সেখানে বলা হয়েছে, খিযির (আঃ)-কে আল্লাহ এমন জ্ঞান দিয়েছিলেন যা মূসা (আঃ)-কে দেননি, আবার মূসা (আঃ)-কে এমন জ্ঞান দিয়েছিলেন যা খিযির (আঃ)-কে দেননি। এখানে ছোট কেউ বড় কারও সামনে দাঁড়িয়ে নেই। এ দুই বান্দার সাক্ষাৎ, যাঁদের প্রত্যেকের হাতে এমন এক ভাগ, যা অন্যজন পাননি; আর এখানে এসে দুই ভাগে ঠোকাঠুকি লাগবে। মূসা (আঃ)-এর চোখে যা অন্যায়, খিযির (আঃ)-এর কাছে তা এমন কিছু, যা কেবল তাঁকেই দেখানো হয়েছে।"
          },
          {
            "en": "This is how al-Khiḍr himself put it, in the long narration Ubayy ibn Kaʿb reported from the Prophet ﷺ, recorded by al-Bukhārī. When Mūsā reached him, al-Khiḍr said: \"O Mūsā, I have some of the knowledge of Allah which Allah has taught me and which you do not know, and you have some of the knowledge of Allah which Allah has taught you and which I do not know.\" Then Mūsā asked to follow, and he answered with the two verses. The report is in Ṣaḥīḥ al-Bukhārī, sound; we take from it only these words, which bear directly on this verse.",
            "bn": "খিযির (আঃ) নিজেই কথাটা এভাবে বলেছিলেন। উবাই ইবন কাব (রাঃ) নবী ﷺ থেকে যে দীর্ঘ বর্ণনা এনেছেন, আর বুখারী যা সংকলন করেছেন, তাতে আছে: মূসা (আঃ) তাঁর কাছে পৌঁছালে খিযির (আঃ) বললেন, ‘হে মূসা, আল্লাহর জ্ঞানের এমন কিছু আমার কাছে আছে, যা আল্লাহ আমাকে শিখিয়েছেন, আপনি তা জানেন না; আর আল্লাহর জ্ঞানের এমন কিছু আপনার কাছে আছে, যা আল্লাহ আপনাকে শিখিয়েছেন, আমি তা জানি না।’ এরপর মূসা (আঃ) সঙ্গে থাকার অনুমতি চাইলেন, আর খিযির (আঃ) ওই দুই আয়াত দিয়ে জবাব দিলেন। বর্ণনাটি সহীহ বুখারীর, তাই সহীহ। আমরা এখান থেকে শুধু এই কথাগুলো নিচ্ছি, কারণ এগুলো সরাসরি এই আয়াতের সঙ্গে জড়িত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surface and the Cause",
          "bn": "বাইরের চেহারা, ভেতরের কারণ"
        },
        "p": [
          {
            "en": "Aṭ-Ṭabarī explains why the outward look will keep failing Mūsā. You judge, he has al-Khiḍr say, the rightness of the right-doer and the error of the wrong-doer by the outward that is before you, and by the reach of your own knowledge. But my acts fall without any outward proof, visible to your eye, of their rightness. The problem is not that Mūsā judges badly. He judges correctly by what he can see. The trouble is that what he can see is only the surface, and the surface here does not carry the reason.",
            "bn": "তাবারী বুঝিয়ে দেন কেন উপরের চেহারা মূসা (আঃ)-কে বারবার ধোঁকা দেবে। তিনি খিযির (আঃ)-এর মুখে বলান, আপনি সঠিক লোকের সঠিকতা আর ভুল লোকের ভুল বিচার করেন আপনার সামনের বাহ্যিক দিক দেখে, আর নিজের জ্ঞানের নাগাল দিয়ে। কিন্তু আমার কাজগুলো ঘটে এমনভাবে যে সেগুলোর সঠিকতার কোনো বাহ্যিক প্রমাণ আপনার চোখে ধরা পড়ে না। সমস্যাটা এই নয় যে মূসা (আঃ) খারাপ বিচার করেন। তিনি যা দেখতে পান তা দিয়ে সঠিক বিচারই করেন। মুশকিল হলো, তিনি যা দেখেন তা কেবল উপরের চেহারা, আর এখানে সেই চেহারা কারণটা বহন করে না।"
          },
          {
            "en": "And the reason lies out of reach in time. These acts, aṭ-Ṭabarī continues, begin for causes whose fruit comes later and not at once, and you have no knowledge of what will come of them, because it is unseen — and none encompasses the knowledge of the unseen. Here the two words of the verse close together: what Mūsā has not encompassed is precisely the hidden end of a present act. As-Saʿdī had said the same in fewer words: he does not know the matter's intent, nor where it will land.",
            "bn": "তার ওপর কারণটা সময়েরও নাগালের বাইরে। তাবারী বলে চলেন, এই কাজগুলো এমন কারণে শুরু হয়, যার ফল আসে পরে, সঙ্গে সঙ্গে নয়; আর সেগুলো থেকে কী হবে, আপনি জানেন না, কারণ তা গায়েব। আর গায়েবের জ্ঞান কেউ ঘিরে ধরতে পারে না। এখানে এসে আয়াতের দুই শব্দ এক হয়ে যায়: মূসা (আঃ) যা ঘিরে ধরতে পারেননি, তা হলো বর্তমান কাজের লুকানো পরিণতি। সাদী এ কথাই বলেছিলেন আরও অল্প কথায়: তিনি বিষয়ের উদ্দেশ্য জানেন না, শেষ পর্যন্ত তা কোথায় গিয়ে দাঁড়াবে তাও জানেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Silence Was Not Open",
          "bn": "চুপ থাকার পথ কেন ছিল না"
        },
        "p": [
          {
            "en": "Al-Qurṭubī adds a reason that runs the other way, and it matters. Prophets, he says, do not acquiesce to a thing that appears wrong, nor is it open to them to stay silent before it; you cannot, he has al-Khiḍr mean, hold your tongue in your usual way and by your usual judgment. So Mūsā's coming objection will not be a failure of composure. It will be the outward law itself, alive in a prophet, refusing to watch what looks like a wrong and say nothing. The patience breaks on a virtue, not a vice.",
            "bn": "কুরতুবী উল্টো দিক থেকে আরেকটা কারণ যোগ করেন, আর সেটা গুরুত্বপূর্ণ। তিনি বলেন, অন্যায় মনে হয় এমন কিছু নবীরা মেনে নেন না, তার সামনে চুপ থাকার সুযোগও তাঁদের নেই। খিযির (আঃ)-এর কথার মানে: আপনার চিরাচরিত অভ্যাস আর বিচারবোধ নিয়ে আপনি মুখ বন্ধ রাখতে পারবেন না। তাই মূসা (আঃ) সামনে যে আপত্তি তুলবেন, তা ধৈর্য হারানো নয়। তা হবে স্বয়ং বাহ্যিক শরিয়তের আওয়াজ, যা এক নবীর ভেতরে জীবন্ত, আর অন্যায়ের মতো দেখায় এমন কিছু দেখে চুপ থাকতে রাজি নয়। ধৈর্যটা ভাঙে একটা গুণের কারণে, কোনো দোষের কারণে নয়।"
          },
          {
            "en": "Maʿārif al-Qurʾān reads it the same way. The objections Mūsā would raise, it says, were triggered by the dictates of his mission as a prophet, whose charge is the outward law. It notes that to promise patience over what appears contrary to the sacred law would not normally be open to any scholar of the religion. Mūsā could give that promise only because Allah Himself had sent him to learn here, trusting that nothing truly counter to the law was afoot, even where he could not yet see how it was so.",
            "bn": "মাআরিফুল কুরআনের ব্যাখ্যাও একই। সেখানে বলা হয়েছে, মূসা (আঃ) যেসব আপত্তি তুলতেন, তার পেছনে ছিল নবী হিসেবে তাঁর দায়িত্বের দাবি, আর সেই দায়িত্ব হলো বাহ্যিক শরিয়ত। মাআরিফ এও বলে, শরিয়তবিরোধী মনে হয় এমন কিছুর ব্যাপারে ধৈর্য ধরার ওয়াদা দেওয়া সাধারণত দ্বীনের কোনো আলিমের জন্য জায়েজ নয়। মূসা (আঃ) সেই ওয়াদা দিতে পেরেছিলেন কেবল এজন্য যে আল্লাহ নিজেই তাঁকে এখানে শিখতে পাঠিয়েছিলেন। তাই তাঁর ভরসা ছিল, সত্যিকার শরিয়তবিরোধী কিছু এখানে ঘটছে না, যদিও কীভাবে, তা তখনো তিনি বুঝে উঠতে পারেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Law and the Hidden Errand",
          "bn": "শরিয়ত আর গোপন কাজ"
        },
        "p": [
          {
            "en": "What, then, were the two knowledges? Maʿārif al-Qurʾān quotes Abū Ḥayyān's al-Baḥr al-Muḥīṭ: the majority hold that al-Khiḍr's knowledge was a knowing of inner realities disclosed to him, while Mūsā's knowledge was of the rulings and verdicts that judge by the apparent. One knowledge reads the visible act against the fixed law; the other was shown the hidden errand a particular act was carrying. Both, the tafsīr insists, came from Allah alone — which is why their clash is only apparent, and not a real contradiction in what He teaches.",
            "bn": "তাহলে সেই দুই জ্ঞান কী ছিল? মাআরিফুল কুরআন আবু হাইয়ানের আল-বাহরুল মুহীত থেকে উদ্ধৃত করে: অধিকাংশ আলিমের মত, খিযির (আঃ)-এর জ্ঞান ছিল তাঁর সামনে খুলে দেওয়া ভেতরের বাস্তবতার জ্ঞান, আর মূসা (আঃ)-এর জ্ঞান ছিল বিধান ও ফয়সালার জ্ঞান, যা বাহ্যিক অবস্থা দেখে বিচার করে। এক জ্ঞান চোখে দেখা কাজকে মাপে অটল শরিয়তের মাপকাঠিতে; অন্য জ্ঞানের অধিকারীকে দেখানো হয়েছিল, নির্দিষ্ট একটি কাজের ভেতরে কোন গোপন উদ্দেশ্য লুকিয়ে আছে। তাফসীর জোর দিয়ে বলে, দুটোই এসেছে একমাত্র আল্লাহর কাছ থেকে। তাই এদের সংঘাত কেবল বাইরে থেকে দেখা সংঘাত; তিনি যা শেখান, তাতে সত্যিকারের কোনো বিরোধ নেই।"
          },
          {
            "en": "Qāḍī Thanāʾullāh, in Tafsīr Maẓharī, draws the line the tafsīr found most convincing. Some of what happens belongs not to the law given for people but to takwīn, the carrying out of Allah's decree in His creation — that this one be spared, that one taken. A rare servant may be appointed to such an errand, and a single act within it exempted, for him, from the general ruling. The scholars of the outward law, not shown the exemption, are right to keep calling the act unlawful. The two verdicts stand at different levels and do not meet.",
            "bn": "কাজি সানাউল্লাহ তাফসীরে মাযহারীতে যে সীমারেখা টানেন, তাফসীরটির কাছে সেটাই সবচেয়ে যুক্তিযুক্ত মনে হয়েছে। যা কিছু ঘটে, তার কিছু মানুষের জন্য দেওয়া শরিয়তের অংশ নয়, বরং তাকভীনের অংশ, অর্থাৎ সৃষ্টিজগতে আল্লাহর ফয়সালা কার্যকর হওয়া: এ বেঁচে যাক, ওকে তুলে নেওয়া হোক। বিরল কোনো বান্দাকে এমন কাজে নিযুক্ত করা হতে পারে, আর সেই কাজের ভেতরের কোনো একটি আমল কেবল তার জন্য সাধারণ বিধানের বাইরে রাখা হতে পারে। বাহ্যিক শরিয়তের আলিমদের এই ছাড় দেখানো হয়নি; তাই কাজটিকে তাঁরা নাজায়েজ বলে গেলে ঠিকই করেন। দুই রায় দুই আলাদা স্তরে দাঁড়িয়ে, একটি অন্যটির সঙ্গে সংঘাতে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Door That Closed",
          "bn": "যে দরজা বন্ধ হয়ে গেল"
        },
        "p": [
          {
            "en": "The tafsīr is careful to bolt a door here, and the care is deliberate. Because the exemption al-Khiḍr acted under could come only through revelation given to a prophet, Maʿārif al-Qurʾān warns that no later person may reason from his story to loosen the law. To take some non-prophet's inspiration or vision, set it beside al-Khiḍr's example, and on that basis call an unlawful thing lawful is, in the tafsīr's blunt words, a rebellion against the religion. The story explains a unique case; it licenses nothing for anyone who comes after.",
            "bn": "তাফসীরটি এখানে যত্ন করে একটা দরজা বন্ধ করে দেয়, আর এই যত্ন ইচ্ছাকৃত। খিযির (আঃ) যে ছাড়ের অধীনে কাজ করেছিলেন তা আসতে পারত কেবল নবীকে দেওয়া ওহির মধ্য দিয়ে। তাই মাআরিফুল কুরআন সতর্ক করে, পরবর্তী কোনো মানুষ যেন তাঁর কাহিনি থেকে যুক্তি টেনে শরিয়তকে ঢিলা না করে। কোনো অ-নবীর ইলহাম বা কাশফ নিয়ে তা খিযির (আঃ)-এর দৃষ্টান্তের পাশে রেখে সেই ভিত্তিতে নাজায়েজ জিনিসকে জায়েজ বলা, তাফসীরের সোজা কথায়, দ্বীনের বিরুদ্ধে বিদ্রোহ। কাহিনি এক ব্যতিক্রমী ঘটনা বোঝায়। পরে আসা কারও জন্য এটি কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Maʿārif grounds the warning in an exchange it reports from Ibn Abī Shayba. Najda al-Ḥarūrī wrote to Ibn ʿAbbās asking how al-Khiḍr could kill a boy when the Prophet ﷺ forbade killing children. Ibn ʿAbbās answered that if Najda had received the very knowledge al-Khiḍr received, the killing would have become lawful for him too — but that knowledge came only through a revelation given to a prophet, and no prophet comes after Muḥammad ﷺ. The door al-Khiḍr walked through was shut behind him, and this is the tafsīr's own reading of who may invoke him and who may not.",
            "bn": "মাআরিফ এই সতর্কবাণীর ভিত্তি হিসেবে ইবন আবি শাইবা থেকে বর্ণিত একটি চিঠি-চালাচালির কথা আনে। নাজদা আল-হারূরী ইবন আব্বাস (রাঃ)-কে লিখে জানতে চান, নবী ﷺ যখন শিশু হত্যা নিষেধ করেছেন, তখন খিযির (আঃ) কীভাবে এক বালককে হত্যা করলেন? ইবন আব্বাস (রাঃ) জবাব দেন, খিযির (আঃ) যে জ্ঞান পেয়েছিলেন, ঠিক সেই জ্ঞান যদি নাজদাও পেত, তবে হত্যাটা তার জন্যও জায়েজ হয়ে যেত। কিন্তু সেই জ্ঞান আসত কেবল নবীকে দেওয়া ওহির মাধ্যমে, আর মুহাম্মদ ﷺ-এর পরে আর কোনো নবী আসবেন না। খিযির (আঃ) যে দরজা দিয়ে গেছেন, তা তাঁর পেছনে বন্ধ হয়ে গেছে। কে খিযির (আঃ)-এর দৃষ্টান্ত দলিল হিসেবে টানতে পারে আর কে পারে না, এ বিষয়ে এটাই তাফসীরের নিজের ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Patient Over the Unseen",
          "bn": "গায়েবের সামনে ধৈর্য"
        },
        "p": [
          {
            "en": "Set the prophets aside for a moment and the principle is a mirror. Almost everything that tries a person has this shape: an event whose surface we can read and whose end is sealed from us. The illness, the closed door, the loss that seems senseless — we meet each the way Mūsā met al-Khiḍr's first act, judging by the only thing shown us and finding it wrong. Our objection, like his, is honest and even principled. It is simply outrun by a knowledge we were not given.",
            "bn": "নবীদের কথা এক মুহূর্তের জন্য সরিয়ে রাখুন, তখন দেখবেন নীতিটা আমাদেরই আয়না। মানুষকে যা কিছু পরীক্ষায় ফেলে, তার প্রায় সবকিছুর গড়ন এমন: ঘটনার বাইরের চেহারাটা আমরা পড়তে পারি, কিন্তু তার শেষটা আমাদের কাছে বন্ধ। অসুখ, বন্ধ হয়ে যাওয়া দরজা, অর্থহীন মনে হওয়া কোনো ক্ষতি; এসবের মুখোমুখি আমরা হই ঠিক যেভাবে মূসা (আঃ) খিযির (আঃ)-এর প্রথম কাজের মুখোমুখি হয়েছিলেন। যা দেখানো হয়েছে কেবল তা দিয়েই বিচার করি, আর তা অন্যায় মনে হয়। আমাদের আপত্তিও তাঁর মতোই সৎ, এমনকি নীতির ওপর দাঁড়ানো। শুধু এমন এক জ্ঞান তাকে ছাড়িয়ে যায়, যা আমাদের দেওয়া হয়নি।"
          },
          {
            "en": "What the verse asks is not that we pretend to see the reason, but that we grant it is there, held in a knowledge fuller than our own, and wait for it. Ibn Kathīr says al-Khiḍr knew the wisdom and the hidden benefit that Mūsā did not yet know. That is the whole distance patience is asked to cross: the gap between the surface we hold and the reality we do not. To bear that gap without demanding to close it first is where patience and trust become a single act.",
            "bn": "আয়াত চায় না যে আমরা কারণটা দেখতে পাওয়ার ভান করি। আয়াত চায়, আমরা মেনে নিই যে কারণটা আছে, আমাদের চেয়ে পূর্ণ এক জ্ঞানের কাছে রাখা আছে, আর তার জন্য অপেক্ষা করি। ইবন কাসীর বলেন, খিযির (আঃ) সেই হিকমত আর গোপন কল্যাণ জানতেন, যা মূসা (আঃ) তখনো জানতেন না। ধৈর্যকে ঠিক এই দূরত্বটুকুই পার হতে হয়: আমাদের হাতে থাকা বাইরের চেহারা আর হাতে না থাকা আসল বাস্তবতার মাঝের ফাঁক। আগে ফাঁকটা বুজিয়ে দেওয়ার দাবি না তুলে তা সয়ে যাওয়া, এখানেই ধৈর্য আর ভরসা এক হয়ে যায়।"
          },
          {
            "en": "None of this makes the waiting easy, and the verse does not pretend that it does; it opens with a question, not a command. But it moves the weight. The thing to settle is no longer whether I can explain what I am carrying, but whether I trust the Lord who assigned it. Patience, on the verse's own terms, is not the denial of my not-knowing. It is the decision to keep walking while the reason stays out of sight, on the strength of who holds it.",
            "bn": "এতে অপেক্ষা সহজ হয়ে যায় না, আয়াতও সহজ হওয়ার ভান করে না; আয়াত শুরুই হয় প্রশ্ন দিয়ে, হুকুম দিয়ে নয়। কিন্তু আয়াত ভারের জায়গাটা বদলে দেয়। প্রশ্ন আর এটা থাকে না যে আমি যা বইছি, তার ব্যাখ্যা দিতে পারি কি না; প্রশ্ন হয়, যে রব এই বোঝা দিয়েছেন, তাঁর ওপর ভরসা রাখি কি না। আয়াতের নিজের কথায়, ধৈর্য মানে আমার না-জানাকে অস্বীকার করা নয়। ধৈর্য মানে কারণটা চোখের আড়ালে থাকতেও হেঁটে চলার সিদ্ধান্ত, কারণ জানি সেই কারণ কার কাছে আছে।"
          }
        ]
      }
    ]
  },
  "18:77": {
    "sections": [
      {
        "h": {
          "en": "The Town That Refused",
          "bn": "যে জনপদ ফিরিয়ে দিল"
        },
        "p": [
          {
            "en": "After two trials at sea and on the road, the pair set out again, until they came to the people of a town and asked its people for food (18:77). At-Tabari reads istaṭʿamā plainly: they asked the townsfolk for food and to be taken in as guests, and were given neither. As-Sa'di glosses the same words as a request for hospitality that met with refusal. The Muyassar keeps to the surface: they sought food by way of a guest's welcome, and the town declined. Two prophets, worn from travel, are turned from the door.",
            "bn": "সমুদ্রে আর পথে দুটি পরীক্ষার পর দুজন আবার চলতে লাগলেন। চলতে চলতে এক জনপদে পৌঁছে তাঁরা সেখানকার লোকদের কাছে খাবার চাইলেন (১৮:৭৭)। তাবারী ইসতাত'আমা শব্দের সোজা অর্থ করেন: তাঁরা লোকদের কাছে খাবার চাইলেন, মেহমান হিসেবে থাকার জায়গাও চাইলেন, কিন্তু কোনোটাই পেলেন না। সা'দী একই শব্দের ব্যাখ্যা করেন মেহমানদারির আবেদন হিসেবে, যার জবাব এল প্রত্যাখ্যান। মুয়াসসার বাইরের অর্থেই থাকে: তাঁরা মেহমান হিসেবে খাবার চাইলেন, আর জনপদের লোকেরা দিতে অস্বীকার করল। পথের ক্লান্তিতে অবসন্ন দুজন নবীকে দরজা থেকে ফিরিয়ে দেওয়া হলো।"
          },
          {
            "en": "Where was this town? The commentators do not agree, and they say so openly. Al-Baghawi collects the names: Ibn Abbas said Antioch, Ibn Sirin said al-Ubulla, and it was reported from Abu Hurayra that it was a town in al-Andalus. Ma'arif al-Qur'an lists the same three reports and closes with, Allah knows best. At-Tabari, for his part, names al-Ayla. The disagreement is left standing, because nothing in the verse rests on the place. What the verse fixes is not the map but the conduct: a town that would not feed a stranger.",
            "bn": "এই জনপদ কোথায় ছিল? তাফসীরকারেরা একমত নন, আর সে কথা তাঁরা খোলাখুলিই বলেন। বাগভী নামগুলো একসঙ্গে এনেছেন: ইবন আব্বাস বলেছেন আন্তাকিয়া, ইবন সিরীন বলেছেন উবুল্লা, আর আবু হুরায়রা (রাঃ) থেকে বর্ণিত, সেটা ছিল আন্দালুসের এক জনপদ। মাআরিফুল কুরআনও এই তিনটি বর্ণনা এনে শেষে বলে, আল্লাহই ভালো জানেন। তাবারী আবার বলেন আইলা। মতভেদটা মেটানো হয়নি, কারণ আয়াতের কোনো কথাই জায়গাটার ওপর নির্ভর করে না। আয়াত মানচিত্র ঠিক করে দেয় না, ঠিক করে দেয় আচরণ: এমন এক জনপদ, যারা অচেনা মুসাফিরকে খেতে দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Meanness the Prophet Named",
          "bn": "নবীর মুখে কৃপণ জনপদ"
        },
        "p": [
          {
            "en": "The refusal is not a small thing. Qatada, cited by al-Baghawi and al-Qurtubi, said the worst of towns are those that will not host a guest nor grant the traveler his right. Al-Qurtubi draws an inference: that hospitality here was a duty owed, and that Moses and al-Khiḍr asked only for what was theirs to ask. In the narration preserved from Ubayy ibn Ka'b, the town is described with a single hard word — li'ām, mean and miserly. The verse does not soften it; it lets the meanness stand named.",
            "bn": "খাবার না দেওয়াটা ছোট ব্যাপার নয়। বাগভী ও কুরতুবী কাতাদার কথা এনেছেন: সবচেয়ে নিকৃষ্ট জনপদ সেটাই, যারা মেহমানকে আশ্রয় দেয় না, মুসাফিরের হকও দেয় না। কুরতুবী এ থেকে বের করেন, এখানে মেহমানদারি ছিল তাদের ওপর পাওনা এক দায়িত্ব, আর মূসা (আঃ) ও খিদর কেবল নিজেদের প্রাপ্যটুকুই চেয়েছিলেন। উবাই ইবন কা'ব থেকে আসা বর্ণনায় জনপদটির জন্য একটাই কড়া শব্দ: লিআম, অর্থাৎ কৃপণ ও হীন। আয়াত কথাটা নরম করে না; কৃপণতাকে তার নাম ধরেই রেখে দেয়।"
          },
          {
            "en": "This needs saying plainly, in both directions. The verse describes what one town did on one day, and its stinginess earns the Qur'an's plain report. It licenses nothing against any living town, people or place — no reader may take al-Ubulla or al-Ayla, or any modern city, as a people to think ill of. The mirror turns the other way instead. It asks whether my own door opens to the traveler and the stranger, or whether I too would let a guest pass hungry and call it prudence.",
            "bn": "কথাটা দুই দিক থেকেই সোজাসুজি বলা দরকার। আয়াত বলছে একটি জনপদ এক দিনে কী করেছিল, আর তাদের কৃপণতার কথা কুরআন খোলাখুলিই জানিয়ে দেয়। কিন্তু এ থেকে আজকের কোনো জনপদ, জাতি বা জায়গার বিরুদ্ধে কিছু বলার অনুমতি মেলে না। উবুল্লা বা আইলা, কিংবা আধুনিক কোনো শহরের মানুষকে খারাপ ভাবার অধিকার কোনো পাঠকের নেই। আয়নাটা বরং ঘুরে যায় নিজের দিকে। প্রশ্ন জাগে, আমার দরজা কি মুসাফির আর অচেনা মানুষের জন্য খোলে? নাকি আমিও মেহমানকে ক্ষুধার্ত ফিরিয়ে দিয়ে সেটাকে বিচক্ষণতা বলে চালাই?"
          }
        ]
      },
      {
        "h": {
          "en": "A Wall About to Fall",
          "bn": "পড়ো পড়ো এক দেয়াল"
        },
        "p": [
          {
            "en": "Then they found in the town a wall wanting to fall, so he set it straight (18:77). The Arabic gives the wall a will: yurīdu an yanqaḍḍa, it wants to collapse. At-Tabari explains yanqaḍḍa as to drop and cave in, the verb used when a house falls down, and the same root, he notes, is used of a star's plunge from the sky. The wall does not want anything, of course. The Qur'an lends it the language of intent only to say how near to falling it had come.",
            "bn": "তারপর তাঁরা সেই জনপদে এমন এক দেয়াল পেলেন, যা পড়ে যেতে চাইছিল; তখন তিনি সেটি সোজা করে দিলেন (১৮:৭৭)। আরবি বাক্যে দেয়ালের যেন নিজের ইচ্ছা আছে: ইউরীদু আন ইয়ানকাদ্দা, সে ভেঙে পড়তে চায়। তাবারী বলেন, ইয়ানকাদ্দা মানে ধসে পড়া; ঘর ভেঙে পড়লে এই ক্রিয়াই বলা হয়। তিনি আরও বলেন, আকাশ থেকে তারা খসে পড়ার বেলায়ও একই ধাতু ব্যবহার হয়। দেয়াল তো আসলে কিছু চায় না। কুরআন তাকে ইচ্ছার ভাষা দেয় শুধু এটুকু বোঝাতে যে দেয়ালটা পড়ে যাওয়ার কত কাছে এসে গিয়েছিল।"
          },
          {
            "en": "Al-Qurtubi treats this as a clear case of figurative speech in the Qur'an. The Prophet ﷺ himself, in the narration, glossed the wall as mā'il, leaning — and to al-Qurtubi that gloss is proof that the Qur'an speaks in majāz, figurative extension, which is the view of the majority. Any act that properly belongs to a living, speaking being, he says, becomes a borrowed image when it is pinned to a stone or a beast. It means the wall stood as a leaning man stands, on the very edge of going down.",
            "bn": "কুরতুবী একে কুরআনে রূপক ভাষার স্পষ্ট উদাহরণ মনে করেন। বর্ণনায় নবী ﷺ নিজেই দেয়ালটির ব্যাখ্যা দিয়েছেন মায়িল, অর্থাৎ হেলে পড়া। কুরতুবীর কাছে এই ব্যাখ্যাই প্রমাণ যে কুরআনে মাজায, মানে রূপক অর্থে কথা আছে, আর অধিকাংশ আলিমের মতও এটাই। তিনি বলেন, যে কাজ আসলে জীবিত ও কথা বলতে পারে এমন সত্তার, তা পাথর বা পশুর সঙ্গে জুড়লে সেটা ধার করা ছবি হয়ে যায়। অর্থাৎ দেয়ালটা দাঁড়িয়ে ছিল হেলে পড়া মানুষের মতো, পড়ে যাওয়ার একেবারে কিনারে।"
          },
          {
            "en": "Not every scholar accepted that reading, and al-Qurtubi records the disagreement rather than hiding it. Some, he reports — naming Abu Ishaq al-Isfarayini and Abu Bakr Muhammad ibn Dawud al-Asbahani — denied that there is any figurative speech in the Qur'an at all, holding that the speech of Allah is better carried on its literal sense. Al-Qurtubi does not force the question closed. He lays both positions side by side, which is the honest thing to do when the learned themselves divide.",
            "bn": "সব আলিম এই ব্যাখ্যা মানেননি, আর কুরতুবী মতভেদটা লুকাননি, লিখে রেখেছেন। তিনি নাম ধরে বলেন, আবু ইসহাক আল-ইসফারায়িনী ও আবু বকর মুহাম্মাদ ইবন দাউদ আল-আসবাহানীসহ কেউ কেউ মনে করতেন, কুরআনে রূপক ভাষা একেবারেই নেই; আল্লাহর কালামকে আক্ষরিক অর্থে নেওয়াই উত্তম। কুরতুবী জোর করে প্রশ্নটার মীমাংসা করেন না। তিনি দুই মতকেই পাশাপাশি রাখেন। আলিমরা নিজেরাই যেখানে দুই ভাগ, সেখানে এটাই সৎ কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "How He Set It Straight",
          "bn": "যেভাবে তিনি দাঁড় করালেন"
        },
        "p": [
          {
            "en": "How did al-Khiḍr restore it? Fa-aqāmahu, he set it up straight (18:77). At-Tabari and Ibn Kathir read this as returning the wall to an upright, sound state. As-Sa'di goes further and has him rebuild it new. Al-Baghawi gathers the reported details: Sa'id ibn Jubayr said al-Khiḍr wiped the wall with his hand and it stood; Ibn Abbas said he pulled it down and then sat rebuilding it; as-Suddi said he laid clay and raised the wall. The wordings differ; the deed is one.",
            "bn": "খিদর দেয়ালটা ঠিক করলেন কীভাবে? ফাআকামাহু, তিনি সেটি সোজা করে দাঁড় করালেন (১৮:৭৭)। তাবারী ও ইবন কাসীরের মতে এর মানে, দেয়ালটাকে আবার খাড়া ও মজবুত করে দেওয়া। সা'দী আরও এগিয়ে বলেন, তিনি দেয়ালটা নতুন করে গেঁথে দেন। বাগভী এ নিয়ে বর্ণিত খুঁটিনাটি একসঙ্গে এনেছেন: সাঈদ ইবন জুবায়র বলেছেন, খিদর হাত বুলিয়ে দিলেন আর দেয়াল দাঁড়িয়ে গেল; ইবন আব্বাস বলেছেন, তিনি দেয়ালটা ভেঙে ফেলে বসে বসে আবার গাঁথলেন; সুদ্দী বলেছেন, কাদা লেপে দেয়াল তুললেন। বর্ণনার ভাষা আলাদা, কাজটা একই।"
          },
          {
            "en": "The narration from Ubayy ibn Ka'b keeps the most vivid picture: al-Khiḍr set the wall up with his own hand, passing his hand over it until it stood. Ibn Kathir marks this as something extraordinary — a wall on the point of falling made upright by a touch. Al-Qurtubi passes on a further report from Wahb ibn Munabbih that the wall stood a hundred cubits high, a detail he records without leaning on it. However tall it was, the striking thing is what it cost the townsfolk: nothing at all.",
            "bn": "উবাই ইবন কা'ব থেকে আসা বর্ণনায় ছবিটা সবচেয়ে জীবন্ত: খিদর নিজ হাতে দেয়ালটা দাঁড় করালেন, হাত বুলাতে বুলাতে সেটা খাড়া হয়ে গেল। ইবন কাসীর একে অসাধারণ এক ঘটনা বলেছেন: পড়ো পড়ো দেয়াল কেবল হাতের ছোঁয়ায় সোজা হয়ে গেল। কুরতুবী ওয়াহব ইবন মুনাব্বিহ থেকে আরেকটি বর্ণনাও এনেছেন, দেয়ালটা নাকি ১০০ হাত উঁচু ছিল; তবে এই তথ্যের ওপর তিনি ভর দেননি। দেয়াল যত উঁচুই হোক, আসল চমকের কথা হলো, জনপদের লোকদের এতে কিছুই খরচ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Serving Those Who Refused",
          "bn": "যারা ফিরিয়ে দিল, তাদেরই সেবা"
        },
        "p": [
          {
            "en": "Hold the two scenes together, because the verse means them to be held. The same townsfolk who would not spare a meal now have their broken wall raised for them, free, by the very guest they turned away. Al-Khiḍr answers a refusal of bread with a work of repair. There is no scolding, no favor withdrawn, no settling of the score. The hands that were denied food do the town a kindness the town never asked for and would never repay.",
            "bn": "দুটো দৃশ্য পাশাপাশি রাখুন, কারণ আয়াত সেটাই চায়। যে জনপদের লোকেরা এক বেলা খাবারও দিল না, তাদেরই ভাঙা দেয়াল বিনা পয়সায় গেঁথে দিলেন সেই মেহমান, যাঁকে তারা ফিরিয়ে দিয়েছিল। রুটি না পাওয়ার জবাব খিদর দিলেন মেরামত করে দিয়ে। কোনো বকাঝকা নেই, কোনো অনুগ্রহ ফিরিয়ে নেওয়া নেই, শোধ তোলারও চেষ্টা নেই। যে হাত খাবার পায়নি, সেই হাতই জনপদের এমন উপকার করল, যা তারা কখনো চায়নি, কখনো শোধও করবে না।"
          },
          {
            "en": "This is the harder half of the story to live. It is easy to be generous to those who are generous back; the pull of fairness says withhold from those who withheld from you. The scene shows a servant of Allah who does not keep that account. His good is not a reply to their good, and so their refusal cannot switch it off. Whatever wisdom lay beneath the wall — and a wisdom did — the surface already teaches a way of carrying an insult.",
            "bn": "গল্পের এই অর্ধেকটা জীবনে মেনে চলাই কঠিন। যে উদার, তার সঙ্গে উদার হওয়া সহজ; ন্যায্যতার টান বলে, যে আমাকে দেয়নি, আমিও তাকে দেব না। এই দৃশ্যে দেখা যায় আল্লাহর এমন এক বান্দাকে, যিনি সেই হিসাব রাখেন না। তাঁর ভালো কাজ তাদের ভালোর জবাব ছিল না, তাই তাদের ফিরিয়ে দেওয়াও সেটা থামাতে পারেনি। দেয়ালের নিচে যে হিকমতই লুকানো থাকুক, আর সত্যিই একটা হিকমত ছিল, বাইরে যা দেখা যায় তা থেকেই শেখা যায় অপমান কীভাবে সয়ে নিতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "If You Wished, a Wage",
          "bn": "চাইলে মজুরি নিতে পারতেন"
        },
        "p": [
          {
            "en": "Then Moses speaks: if you wished, you could have taken a wage for it (18:77). It is the most reasonable sentence in the passage. They are hungry, the town has just refused them, and here is honest labor given away. Ibn Kathir spells out the logic: since they would not host us, you ought not to have worked for them for free. Al-Baghawi puts the same thought in Moses's mouth — you know we are starving and that these people gave us nothing, so you might have taken payment for your work.",
            "bn": "তারপর মূসা (আঃ) বললেন: আপনি চাইলে এর জন্য পারিশ্রমিক নিতে পারতেন (১৮:৭৭)। পুরো ঘটনায় এর চেয়ে যুক্তিসংগত কথা আর নেই। তাঁরা ক্ষুধার্ত, জনপদ এইমাত্র তাঁদের ফিরিয়ে দিয়েছে, অথচ সৎ পরিশ্রমটা বিনা পয়সায় দিয়ে দেওয়া হলো। ইবন কাসীর যুক্তিটা খুলে বলেন: ওরা যখন আমাদের মেহমানদারি করেনি, তখন ওদের জন্য বিনা মজুরিতে খাটা আপনার উচিত হয়নি। বাগভীও একই ভাবনা মূসা (আঃ)-এর মুখে দিয়েছেন: আপনি তো জানেন আমরা অভুক্ত, আর এরা আমাদের কিছুই দেয়নি; তাই কাজের বিনিময়ে মজুরি নিতে পারতেন।"
          },
          {
            "en": "At-Tabari records two ways of hearing the wage. On one reading, Moses means food: take a payment so that they feed us, since they have refused us hospitality. On the other, he means compensation for the labor itself, a fair return for setting the leaning wall right. Either way the instinct is the same — value was given and none was asked back, and Moses, seeing hunger and a fair day's work, wants the ledger balanced. It is exactly how sound human judgment reasons.",
            "bn": "তাবারী মজুরির কথাটার দুটি অর্থ উল্লেখ করেন। এক অর্থে মূসা (আঃ) খাবারের কথা বলছেন: কিছু পারিশ্রমিক নিন, যাতে ওরা আমাদের খাওয়ায়, কারণ ওরা তো মেহমানদারি করতে রাজি হয়নি। আরেক অর্থে তিনি বলছেন খোদ কাজের বিনিময়ের কথা, হেলে পড়া দেয়াল সোজা করার ন্যায্য প্রতিদান। যেটাই হোক, মনের টানটা একই: কাজ করে দেওয়া হলো অথচ বিনিময়ে কিছু চাওয়া হলো না। ক্ষুধা আর সারা দিনের সৎ খাটুনি দেখে মূসা (আঃ) হিসাবটা মেলাতে চান। সুস্থ মানুষের বিবেচনা ঠিক এভাবেই ভাবে।"
          },
          {
            "en": "Al-Qurtubi reads the wage from another angle. Moses's words, he says, show that hiring for a wage is lawful — it is the practice of prophets and of the righteous, not something beneath them. And he draws a fine distinction: this sentence came from Moses as an offer, a suggestion of what might be done, not as the sharp objection he had raised at the ship and the boy. Yet an offer, gently made, was still a speaking-out where he had promised silence.",
            "bn": "কুরতুবী মজুরির বিষয়টা দেখেন আরেক দিক থেকে। তিনি বলেন, মূসা (আঃ)-এর কথা থেকে বোঝা যায়, মজুরির বিনিময়ে কাজ করা বৈধ; এটা নবী ও নেককারদেরই রীতি, তাঁদের জন্য ছোট কাজ নয়। তিনি একটা সূক্ষ্ম পার্থক্যও দেখান: মূসা (আঃ)-এর এই কথাটা ছিল প্রস্তাব, কী করা যেত তার একটা পরামর্শ। নৌকা আর বালকের বেলায় যেমন কড়া আপত্তি তুলেছিলেন, এটা তেমন নয়। তবু নরম করে বলা প্রস্তাবও মুখ খোলাই, অথচ তিনি চুপ থাকার ওয়াদা করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Road Divided",
          "bn": "কেন পথ আলাদা হলো"
        },
        "p": [
          {
            "en": "At the ship and the boy, Moses had objected and then asked to be excused; after the boy he set his own terms: if I ask you about anything after this, then do not keep me with you (18:76). The wall is the after-this. His word about the wage, offer though it was, is the question that lands against the line he himself had drawn. In the next verse al-Khiḍr answers only, this is the parting between me and you (18:78). The road that two men walked together now divides.",
            "bn": "নৌকা ও বালকের বেলায় মূসা (আঃ) আপত্তি করেছিলেন, তারপর মাফ চেয়েছিলেন। বালকের ঘটনার পর তিনি নিজেই শর্ত দিলেন: এরপর যদি আমি আপনাকে কোনো বিষয়ে জিজ্ঞেস করি, তাহলে আর আমাকে সঙ্গে রাখবেন না (১৮:৭৬)। দেয়ালের ঘটনাই সেই 'এরপর'। মজুরি নিয়ে তাঁর কথাটা প্রস্তাব হলেও সেটাই ছিল সেই প্রশ্ন, যা তাঁর নিজের টেনে দেওয়া সীমা পেরিয়ে গেল। পরের আয়াতে খিদর শুধু বলেন, এখানেই আপনার সাথে আমার বিচ্ছেদ (১৮:৭৮)। দুজন যে পথ একসঙ্গে হেঁটেছিলেন, তা এবার দুই দিকে ভাগ হয়ে যায়।"
          },
          {
            "en": "Al-Qurtubi preserves a searching remark from Ibn Abbas about why this last time was the one that parted them. Moses's words at the ship and the boy, he said, were for the sake of Allah — protests against an apparent drowning and killing. His word at the wall was for himself, seeking a thing of this world, a wage and a meal. That, Ibn Abbas held, was the cause of the parting. The explanation al-Khiḍr promises is still to come; the tension here is not yet resolved, only named.",
            "bn": "কেন এই শেষবারেই দুজন আলাদা হয়ে গেলেন, এ নিয়ে ইবন আব্বাসের একটি গভীর কথা কুরতুবী সংরক্ষণ করেছেন। ইবন আব্বাস বলেছেন, নৌকা ও বালকের বেলায় মূসা (আঃ)-এর কথা ছিল আল্লাহর জন্য: বাহ্যত নৌকা ডুবিয়ে দেওয়া আর হত্যার বিরুদ্ধে প্রতিবাদ। দেয়ালের বেলায় তাঁর কথা ছিল নিজের জন্য, দুনিয়ার একটা জিনিস চাওয়া: মজুরি আর খাবার। ইবন আব্বাসের মতে এটাই ছিল বিচ্ছেদের কারণ। খিদর যে ব্যাখ্যার ওয়াদা দেন, তা এখনো আসেনি। এখানে টানাপোড়েনটা মেটেনি, শুধু তার নাম দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration and the Wish",
          "bn": "বর্ণনা ও এক আক্ষেপ"
        },
        "p": [
          {
            "en": "The whole journey is preserved in one long, sound narration in Sahih al-Bukhari, told by Ibn Abbas from Ubayy ibn Ka'b from the Prophet ﷺ. Its closing scene matches the verse: they came to a town whose people would not feed them or take them in, and found a wall about to collapse, which al-Khiḍr set upright with a pass of his hand; Moses said, if you had wished, you could have taken wages for it. Al-Bukhari places it among his sound reports.",
            "bn": "পুরো সফরের কাহিনি সহীহ বুখারীতে একটি দীর্ঘ, সহীহ বর্ণনায় সংরক্ষিত আছে। ইবন আব্বাস বর্ণনা করেছেন উবাই ইবন কা'ব থেকে, তিনি নবী ﷺ থেকে। এর শেষ দৃশ্য আয়াতের সঙ্গে মিলে যায়: তাঁরা এক জনপদে এলেন, যার লোকেরা তাঁদের খেতেও দিল না, আশ্রয়ও দিল না। সেখানে তাঁরা পড়ো পড়ো এক দেয়াল পেলেন, খিদর হাত বুলিয়ে সেটা সোজা করে দিলেন। মূসা (আঃ) বললেন, আপনি চাইলে এর জন্য মজুরি নিতে পারতেন। বুখারী বর্ণনাটি তাঁর সহীহ হাদিসগুলোর মধ্যেই রেখেছেন।"
          },
          {
            "en": "The narration ends on a wish from the Prophet ﷺ: may Allah have mercy on Moses — we would have wished that he had been patient, so that Allah might have told us more of their story. The parting is also a door closing on knowledge we do not get. Al-Khiḍr's next words promise the meaning behind the ship, the boy and the wall (18:78). That meaning belongs to the verses ahead. Here the lesson is the tension itself: service without reward, and a judgment made before the reason is known.",
            "bn": "বর্ণনাটি শেষ হয় নবী ﷺ-এর এক আক্ষেপে: আল্লাহ মূসার প্রতি রহম করুন, আমাদের মন চাইছিল তিনি যদি ধৈর্য ধরতেন, তাহলে আল্লাহ তাঁদের কাহিনির আরও কিছু আমাদের জানাতেন। তাই এই বিচ্ছেদের সঙ্গে সঙ্গে এমন এক জ্ঞানের দরজাও বন্ধ হয়ে যায়, যা আমাদের আর জানা হলো না। খিদরের পরের কথায় নৌকা, বালক আর দেয়ালের পেছনের অর্থ বলে দেওয়ার ওয়াদা আছে (১৮:৭৮)। সেই অর্থ সামনের আয়াতগুলোর বিষয়। এখানে শিক্ষাটা এই টানাপোড়েনেই: প্রতিদান ছাড়া সেবা, আর কারণ জানার আগেই রায় দিয়ে ফেলা।"
          }
        ]
      }
    ]
  },
  "18:82": {
    "sections": [
      {
        "h": {
          "en": "The Wall Speaks Last",
          "bn": "দেয়ালের কথা সবার শেষে"
        },
        "p": [
          {
            "en": "Two things al-Khidr did had already been explained: the damaged boat and the slain boy. The wall is the third and gentlest. It belonged to two orphan boys in the city, and beneath it lay a treasure kept for them, and their father, the verse says, had been righteous. Ibn Kathir notes first a point of language: the earlier verse called the place a qaryah, a town, and here al-madinah, a city, so the two words can name one place. The reveal matches the boat and the boy: what looked like unpaid labour had a reason underground.",
            "bn": "খিযিরের দুটি কাজের ব্যাখ্যা আগেই এসে গেছে, খুঁতযুক্ত করা নৌকা আর নিহত বালক। দেয়ালটি তৃতীয়, আর সবচেয়ে কোমল। তা ছিল শহরের দুই ইয়াতীম বালকের, আর তার নিচে ছিল তাদের জন্য রাখা এক ধন। আয়াত বলছে, তাদের বাবা ছিলেন এক সৎ ব্যক্তি। ইবন কাসীর প্রথমে ছোট্ট একটা ভাষার কথা ধরিয়ে দেন। আগের আয়াতে জায়গাটাকে বলা হয়েছিল কারইয়া, জনপদ, আর এখানে বলা হচ্ছে আল-মাদীনা, শহর। এতে বোঝা যায় দুটি শব্দ একই জায়গাকে বোঝাতে পারে। ব্যাখ্যাটা নৌকা আর বালকের মতোই। যা বিনা মজুরির খাটুনি মনে হয়েছিল, মাটির নিচে তার একটা কারণ ছিল।"
          },
          {
            "en": "The order matters. Musa (AS) had objected loudest to what he could see least, and al-Khidr saved the plainest of the three mercies for the end. A wall does not cry out or bleed; propping it back up seemed his most pointless act, the very act Musa (AS) thought at least deserved a wage. So the verse that clears it also ends the whole errand, closing with the words al-Khidr had opened with: that is the interpretation of that about which you could not have patience.",
            "bn": "ক্রমটা এখানে গুরুত্বপূর্ণ। যা তিনি সবচেয়ে কম দেখতে পাচ্ছিলেন, তাতেই মূসা (আঃ)-এর আপত্তি ছিল সবচেয়ে জোরালো। আর তিনটি রহমতের মধ্যে সবচেয়ে সাদাসিধেটা খিযির রেখে দিলেন শেষে। দেয়াল কাঁদে না, তার রক্তও ঝরে না। সেটা আবার দাঁড় করিয়ে দেওয়াকে মনে হয়েছিল তাঁর সবচেয়ে অর্থহীন কাজ; অথচ মূসা (আঃ) ভেবেছিলেন, অন্তত এই কাজের জন্য মজুরি পাওয়া উচিত। তাই যে আয়াতে এর ব্যাখ্যা আসে, সেই আয়াতেই গোটা সফরের ইতি। খিযির যে কথা দিয়ে শুরু করেছিলেন, শেষও করেন সেই কথাতেই: এ হলো সেই বিষয়ের ব্যাখ্যা, যাতে আপনি ধৈর্য ধরতে পারেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Lay Beneath",
          "bn": "নিচে যা লুকানো ছিল"
        },
        "p": [
          {
            "en": "The commentators split over the kanz, the treasure. Ikrimah and Qatadah, reported by at-Tabari, read it as buried wealth, and at-Tabari himself chose this: in Arab usage kanz names stored money, so the plain sense holds unless something forces it aside. Ibn Kathir agreed it fits the context, and al-Muyassar glosses it as gold and silver. Qatadah added a note at-Tabari preserves: such buried treasure was lawful for earlier peoples though later forbidden, for Allah permits and forbids as He wills across the nations. On this reading the mercy is ordinary and concrete, an inheritance kept safe.",
            "bn": "কানয, অর্থাৎ ধন নিয়ে তাফসীরকারেরা দুই ভাগ। তাবারীর বর্ণনায় ইকরিমা ও কাতাদা এটাকে পড়েন মাটিতে পোঁতা সম্পদ হিসেবে, আর তাবারী নিজেও এটাই বেছে নেন। আরবি ব্যবহারে কানয মানে জমানো টাকা, তাই সোজা অর্থটাই টেকে যতক্ষণ না অন্য কিছু তাকে সরাতে বাধ্য করে। ইবন কাসীর মানেন যে এটা প্রসঙ্গের সঙ্গে খাপ খায়, আর মুয়াসসার সরাসরি বলে সোনা-রুপা। কাতাদার একটা কথা তাবারী রেখে দিয়েছেন, এমন পোঁতা ধন আগের জাতিদের জন্য হালাল ছিল, পরে হারাম হয়েছে। কারণ আল্লাহ জাতিভেদে যা চান হালাল করেন, যা চান হারাম করেন। এ পাঠে রহমতটা সাদামাটা আর হাতে ধরা যায়, নিরাপদে রাখা এক উত্তরাধিকার।"
          },
          {
            "en": "The other reading makes the treasure knowledge. At-Tabari lines up Sa'id bin Jubayr, Mujahid and a report from Ibn Abbas that beneath the wall lay scrolls of knowledge, kanz of ilm. Al-Baghawi, al-Qurtubi and Ibn Kathir carry a fuller form: a solid tablet of gold, inscribed with lines of counsel. The wording they preserve runs, I marvel at one certain of death, how does he rejoice; certain of the reckoning, how is he heedless; certain of provision, how does he wear himself out; and it closes with the testimony that there is no god but Allah and Muhammad is His Messenger.",
            "bn": "অন্য ব্যাখ্যায় ধনটা হলো ইলম। তাবারী সাঈদ ইবন জুবাইর, মুজাহিদ আর ইবন আব্বাস থেকে বর্ণনা এনেছেন যে দেয়ালের নিচে ছিল ইলমের সহীফা, কানযু ইলম। বাগাভী, কুরতুবী আর ইবন কাসীর এর আরও পূর্ণ রূপ এনেছেন: নিরেট সোনার এক ফলক, তাতে খোদাই করা কয়েক লাইন উপদেশ। তাঁদের বর্ণনায় কথাগুলো এমন: অবাক লাগে সেই লোককে দেখে, যে মৃত্যুকে নিশ্চিত জানে, তবু আনন্দে মাতে কী করে; হিসাবকে নিশ্চিত জানে, তবু গাফেল থাকে কী করে; রিযিককে নিশ্চিত জানে, তবু নিজেকে খাটিয়ে ক্লান্ত করে কী করে। আর শেষে আছে এই সাক্ষ্য: আল্লাহ ছাড়া কোনো ইলাহ নেই, মুহাম্মাদ ﷺ তাঁর রাসূল।"
          },
          {
            "en": "Az-Zajjaj, cited by al-Baghawi, offers the bridge: kanz unqualified means wealth, yet it may be qualified to mean a treasure of knowledge, and this golden tablet gathered both at once. Ibn Kathir reasons the same way. Even if the report of the inscribed tablet is sound, he says, it does not contradict Ikrimah, for the tablet was gold and carried great wealth besides. So the two readings need not fight. The verse leaves the treasure unnamed, and the commentators, reading with and against each other, let it stay both a fortune and a word of wisdom kept in the dark for two boys.",
            "bn": "বাগাভী যাজ্জাজের যে কথা এনেছেন, তা দুই মতের মাঝে সেতু গড়ে দেয়। কানয শব্দ এমনি বললে সম্পদ বোঝায়, তবে সঙ্গে অন্য শব্দ জুড়ে দিলে ইলমের ধনও বোঝাতে পারে, আর এই সোনার ফলকে দুটোই একসঙ্গে ছিল। ইবন কাসীরের যুক্তিও একই রকম। তিনি বলেন, খোদাই করা ফলকের বর্ণনা সহীহ হলেও তা ইকরিমার কথার বিরোধী নয়, কারণ ফলকটা ছিল সোনার, আর সঙ্গে ছিল বিপুল সম্পদও। তাই দুই ব্যাখ্যার মধ্যে লড়াইয়ের দরকার নেই। আয়াত ধনটার নাম বলে না। তাফসীরকারেরা কখনো একে অন্যের সঙ্গে মিলে, কখনো দ্বিমত করে পড়েছেন, আর ধনটাকে দুটোই থাকতে দিয়েছেন: দুই বালকের জন্য অন্ধকারে লুকিয়ে রাখা সম্পদ, আবার প্রজ্ঞার কথাও।"
          }
        ]
      },
      {
        "h": {
          "en": "A Father's Long Shadow",
          "bn": "বাবার দীর্ঘ ছায়া"
        },
        "p": [
          {
            "en": "The verse gives one reason the treasure was guarded: their father had been righteous. Ibn Abbas, in at-Tabari and again in Ibn Kathir, draws the sharp edge of it. The boys were kept safe by their father's righteousness, he says, and no righteousness of their own is mentioned at all. The care came to them through him. Ibn Kathir builds on this that a righteous person's worship reaches his offspring, in this world and the next, and Sa'id bin Jubayr reports the same from Ibn Abbas. The children inherit not only the buried gold but the shelter their father earned.",
            "bn": "ধনটা কেন রক্ষা পেল, আয়াত তার একটা কারণই বলে: তাদের বাবা ছিলেন সৎ। তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাসের যে কথা এনেছেন, তাতে বিষয়টা আরও ধারালো হয়ে ওঠে। তিনি বলেন, বালক দুটো রক্ষা পেয়েছিল বাবার সততার কারণে; তাদের নিজেদের সততার কোনো উল্লেখই নেই। যত্নটা তাদের কাছে এসেছে বাবার হাত ধরে। এর ভিত্তিতে ইবন কাসীর বলেন, সৎ মানুষের ইবাদতের সুফল তার সন্তানদের কাছেও পৌঁছায়, দুনিয়াতেও, আখিরাতেও। সাঈদ ইবন জুবাইরও ইবন আব্বাস থেকে একই কথা বর্ণনা করেছেন। সন্তানেরা শুধু মাটিতে পোঁতা সোনাই পায় না, বাবার কামানো আশ্রয়ও উত্তরাধিকারে পায়।"
          },
          {
            "en": "How far back the righteous man stood is disputed, and the sources keep it a dispute. At-Tabari carries a narration that between the boys and the forefather who saved them lay seven fathers, and that he was a weaver. Al-Baghawi reports the same seven-generations figure as one view, and al-Qurtubi states as a rule that Allah guards the righteous man in seven of his descendants. None of them pins it down further, so the safest thing to say is what the texts say: the protecting righteousness reached from somewhere up the line, near or distant, and the boys themselves are never called righteous.",
            "bn": "সৎ লোকটি কত পুরুষ আগের, তা নিয়ে মতভেদ আছে, আর সূত্রগুলোও একে মতভেদ হিসেবেই রেখেছে। তাবারী একটি বর্ণনা এনেছেন যে বালকদের আর তাদের রক্ষাকারী সেই পূর্বপুরুষের মাঝে ৭ পুরুষের ব্যবধান ছিল, আর তিনি ছিলেন তাঁতি। বাগাভীও ৭ প্রজন্মের এই সংখ্যাটা একটি মত হিসেবে উল্লেখ করেছেন। কুরতুবী একে নিয়ম হিসেবেই বলেন: সৎ মানুষের খাতিরে আল্লাহ তার ৭ পুরুষ পর্যন্ত বংশধরকে হেফাজত করেন। এর বেশি কেউ নির্দিষ্ট করে বলেননি। তাই নিরাপদ কথা সেটাই, যা সূত্রে আছে: রক্ষাকারী সততা এসেছে বংশের ওপরের দিকের কোনো একজনের কাছ থেকে, তিনি কাছের হোন বা দূরের। আর বালকদের নিজেদের কোথাও সৎ বলা হয়নি।"
          },
          {
            "en": "The commentators widen the point past this one wall. Muhammad bin al-Munkadir, quoted by al-Baghawi and in Ma'arif al-Qur'an, held that Allah guards, by a servant's righteousness, his child and his child's child, his household, and even the homes clustered around his. Al-Baghawi adds Sa'id bin al-Musayyib, who said he would remember his children in prayer and lengthen the prayer for their sake. The reading turns a hidden treasure into a working principle: a person's obedience is not spent on himself alone. It banks a shelter that outlives him and falls over people he may never meet.",
            "bn": "তাফসীরকারেরা কথাটাকে এই এক দেয়ালের বাইরেও নিয়ে যান। বাগাভী ও মাআরিফুল কুরআন মুহাম্মাদ ইবন মুনকাদিরের কথা এনেছে: বান্দার সততার কারণে আল্লাহ তার সন্তান, সন্তানের সন্তান, তার পরিবার, এমনকি তার আশপাশের ঘরবাড়িকেও হেফাজত করেন। বাগাভী সাঈদ ইবনুল মুসাইয়িবের কথাও এনেছেন। তিনি বলতেন, নামাজে তিনি সন্তানদের কথা মনে করেন আর তাদের জন্য নামাজ লম্বা করেন। এভাবে লুকানো এক ধন হয়ে ওঠে কাজের এক নীতি: মানুষের আনুগত্য কেবল তার নিজের জন্য খরচ হয় না। তা এমন এক আশ্রয় জমা করে, যা তার পরেও টিকে থাকে আর এমন মানুষদের ছায়া দেয়, যাদের সঙ্গে হয়তো তার কখনো দেখাই হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Will It Was",
          "bn": "চাওয়াটা কার ছিল"
        },
        "p": [
          {
            "en": "Read the three explanations in a row and a pattern surfaces in the verbs. Of the boat al-Khidr says I intended to cause a defect in it. Of the boy he says we intended that their Lord would give them a better child. Of the wall he says your Lord intended that they reach maturity. Ma'arif al-Qur'an, following Tafsir Mazhari, lays this out as deliberate manners of speech: the plain harm of the boat he pins on himself, the mixed act he shares in a we, and the pure good of the wall he hands wholly to Allah.",
            "bn": "তিনটি ব্যাখ্যা পরপর পড়লে ক্রিয়াপদে একটা ধরন ফুটে ওঠে। নৌকা নিয়ে খিযির বলেন, আমি সেটাকে খুঁতযুক্ত করতে চাইলাম। বালক নিয়ে বলেন, আমরা চাইলাম তাদের প্রতিপালক তাদের বদলে ভালো সন্তান দিন। আর দেয়াল নিয়ে বলেন, তোমার প্রতিপালক চাইলেন তারা যৌবনে পৌঁছাক। তাফসীরে মাযহারীর অনুসরণে মাআরিফুল কুরআন একে সাজায় ইচ্ছাকৃত আদব হিসেবে। নৌকার সোজা ক্ষতিটা তিনি চাপান নিজের ঘাড়ে, মিশ্র কাজটায় শরিক হন আমরা বলে, আর দেয়ালের নিখাদ ভালোটা পুরোপুরি তুলে দেন আল্লাহর হাতে।"
          },
          {
            "en": "As-Sa'di reads the same manners and names the model behind them. Al-Khidr ascribed the boat's defect to himself, he says, and ascribed the good to Allah, exactly as Ibrahim (AS) said and when I am sick, it is He who cures me, keeping the sickness in his own mouth and the cure in Allah's. The jinn spoke the same way, we do not know whether evil is intended for those on earth or their Lord intends good, though all of it, as-Sa'di adds, runs by Allah's decree. The etiquette is not about who truly acts; it is about how a servant speaks of Him.",
            "bn": "সাদীও এই একই আদব দেখেন, আর এর পেছনের আদর্শটা কার, তা-ও বলে দেন। তিনি বলেন, খিযির নৌকার খুঁতের দায় নিজের ঘাড়ে নিয়েছেন, আর ভালোটার সম্পর্ক জুড়েছেন আল্লাহর সঙ্গে। ঠিক যেমন ইবরাহীম (আঃ) বলেছিলেন, আর যখন আমি অসুস্থ হই, তখন তিনিই আমাকে সুস্থ করেন; অসুখের কথা বলেছেন নিজের দিকে, আরোগ্যের কথা আল্লাহর দিকে। জিনেরাও একইভাবে বলেছিল, আমরা জানি না পৃথিবীবাসীর জন্য অমঙ্গল চাওয়া হয়েছে, নাকি তাদের প্রতিপালক তাদের কল্যাণ চেয়েছেন। যদিও সাদী যোগ করেন, এর সবই চলে আল্লাহর ফয়সালায়। এই আদব আসলে কে কাজটা করেন তা নিয়ে নয়; বান্দা তাঁর কথা কীভাবে বলে, তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not of My Own Accord",
          "bn": "নিজের পক্ষ থেকে করিনি"
        },
        "p": [
          {
            "en": "One clause has carried a long debate: I did it not of my own accord. Ibn Kathir reads it as evidence that al-Khidr was a prophet. The three acts came from Allah's mercy, and al-Khidr says he was only commanded to do them; read beside the earlier a servant to whom We had given mercy and taught knowledge from Us, this is proof, Ibn Kathir writes, for those who hold he was a prophet. Al-Qurtubi reports that many took him for a prophet, and cites al-Tha'labi's judgement that the sound view is that al-Khidr is a prophet, long-lived and veiled from sight.",
            "bn": "একটি বাক্যাংশ নিয়ে দীর্ঘ বিতর্ক চলেছে: এ আমি নিজের পক্ষ থেকে করিনি। ইবন কাসীরের কাছে এটা খিযির নবী হওয়ার প্রমাণ। তিনটি কাজই এসেছে আল্লাহর রহমত থেকে, আর খিযির বলছেন, এগুলো করার আদেশই কেবল তাঁকে দেওয়া হয়েছিল। আগে বলা হয়েছিল, এক বান্দা যাকে আমরা আমাদের কাছ থেকে রহমত দিয়েছি আর নিজের কাছ থেকে ইলম শিখিয়েছি। ইবন কাসীর লেখেন, সেই কথার পাশে রেখে পড়লে এটা তাঁদের পক্ষে দলিল, যাঁরা তাঁকে নবী মানেন। কুরতুবী জানান, অনেকেই তাঁকে নবী মনে করেছেন, আর সা'লাবীর রায় উদ্ধৃত করেন: সহীহ মত হলো, খিযির একজন নবী, দীর্ঘ আয়ু পেয়েছেন, আর মানুষের চোখের আড়ালে আছেন।"
          },
          {
            "en": "As-Sa'di reads the same clause the other way. The servant they met was not a prophet but a righteous man, he holds, for the Qur'an describes him with servanthood and with mercy and knowledge given, and never names messengership or prophethood. And I did it not of my own accord, he says, points to inspiration of the kind non-prophets receive, as when Allah says We inspired the mother of Musa and your Lord inspired the bee. Ibn Kathir himself records that many went to this view, that al-Khidr was a wali and not a prophet, and closes with Allah knows best.",
            "bn": "সাদী একই বাক্যাংশ বোঝেন উল্টোভাবে। তাঁর মতে, তাঁরা যাঁর দেখা পেয়েছিলেন, তিনি নবী নন, একজন সৎ বান্দা। কারণ কুরআন তাঁর পরিচয় দিয়েছে বান্দা বলে, আর বলেছে তাঁকে রহমত ও ইলম দেওয়া হয়েছিল; রিসালাত বা নবুয়তের কথা কোথাও বলেনি। সাদীর মতে, ‘এ আমি নিজের পক্ষ থেকে করিনি’ কথাটা ইঙ্গিত করে এমন ইলহামের দিকে, যা নবী নন এমন মানুষও পান। যেমন আল্লাহ বলেন, আমরা মূসার মায়ের অন্তরে ইলহাম করলাম, আর তোমার প্রতিপালক মৌমাছিকে ইলহাম করলেন। ইবন কাসীর নিজেও লিখেছেন, অনেকে এই মত নিয়েছেন যে খিযির ছিলেন ওলী, নবী নন। আর শেষে বলেছেন, আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Wearing Hardship",
          "bn": "কষ্টের পোশাকে রহমত"
        },
        "p": [
          {
            "en": "Two words gather the whole story: a mercy from your Lord. As-Sa'di says plainly that everything al-Khidr did was a mercy from Allah, placed on the hands of His servant. The point is not only that the wall hid gold. It is that three acts which looked like vandalism, killing and wasted toil were each a kindness the eye could not yet reach. As-Sa'di ends his long commentary on the story here: these were pure decree, run through a righteous servant so that people would see Allah's gentleness in what He ordains, and rest content even with the decrees they hate.",
            "bn": "দুটি শব্দেই গোটা কাহিনির সার: তোমার প্রতিপালকের রহমত। সাদী সোজাসুজি বলেন, খিযির যা কিছু করেছেন, সবই ছিল আল্লাহর রহমত, যা তিনি তাঁর বান্দার হাত দিয়ে ঘটিয়েছেন। কথাটা শুধু এই নয় যে দেয়ালের নিচে সোনা লুকানো ছিল। কথাটা হলো, যে তিনটি কাজ দেখতে লাগছিল ভাঙচুর, হত্যা আর বৃথা খাটুনির মতো, তার প্রতিটিই ছিল এমন দয়া, যেখানে চোখ তখনো পৌঁছাতে পারেনি। কাহিনির ওপর সাদীর দীর্ঘ আলোচনা এখানেই শেষ: এগুলো ছিল নিখাদ তাকদির, এক সৎ বান্দার হাত দিয়ে কার্যকর করা, যাতে মানুষ দেখে আল্লাহর ফয়সালার ভেতরেও তাঁর কোমলতা আছে, আর যে ফয়সালা তাদের অপছন্দ, তাতেও তারা সন্তুষ্ট থাকে।"
          },
          {
            "en": "At-Tabari draws the lesson outward to the Prophet's own moment. This whole account, he says, is instruction for Muhammad ﷺ, teaching him not to hasten the punishment of the deniers who mocked him. What the eye sees may look like ease left to the wrongdoer, just as al-Khidr's acts looked wrong to Musa (AS) while he did not yet know their ends. But they were sound and right in their outcome. The mercy hidden under the wall is the same mercy hidden inside a delay: surface and end are not the same thing, and only Allah sees both at once.",
            "bn": "তাবারী শিক্ষাটাকে নিয়ে যান নবীর নিজের সময়ে। তিনি বলেন, এই পুরো বর্ণনা মুহাম্মাদ ﷺ-এর জন্য শিক্ষা: যে অস্বীকারকারীরা তাঁকে বিদ্রূপ করত, তাদের শাস্তির জন্য যেন তিনি তাড়াহুড়ো না করেন। চোখে মনে হতে পারে, জালিমকে আরামে ছেড়ে রাখা হয়েছে, ঠিক যেমন খিযিরের কাজগুলো মূসা (আঃ)-এর কাছে ভুল মনে হয়েছিল, কারণ তখনো তিনি সেগুলোর পরিণাম জানতেন না। অথচ পরিণামের বিচারে সেগুলো ছিল সঠিক ও যথার্থ। দেয়ালের নিচে লুকানো রহমত আর দেরির ভেতরে লুকানো রহমত একই। বাইরের চেহারা আর শেষ পরিণাম এক জিনিস নয়, আর দুটোকে একসঙ্গে দেখেন কেবল আল্লাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant to Break the Law",
          "bn": "শরীয়ত ভাঙার কোনো ছাড়পত্র নেই"
        },
        "p": [
          {
            "en": "This is where the story is most often abused, so it needs saying plainly. Al-Khidr acted on knowledge given directly by Allah, and Musa (AS), holding the revealed law, was right to object at every step. Some later people twisted this into a claim that the law's general rulings bind only prophets and common people, while the friends of Allah and the elite stand freed from those texts and may act on whatever falls into their hearts. Al-Qurtubi records the claim only to bury it, quoting his teacher that this saying is heresy and disbelief, a denial of what is known of the sacred law.",
            "bn": "এখানেই কাহিনিটার সবচেয়ে বেশি অপব্যবহার হয়, তাই কথাটা সোজাসুজি বলা দরকার। খিযির কাজ করেছেন আল্লাহর সরাসরি দেওয়া ইলমের ভিত্তিতে, আর নাজিল হওয়া শরীয়ত যাঁর হাতে, সেই মূসা (আঃ) প্রতিবার আপত্তি তুলে ঠিকই করেছেন। পরে কিছু লোক একে বিকৃত করে দাবি তুলেছে: শরীয়তের সাধারণ বিধান কেবল নবী আর সাধারণ মানুষের জন্য; আল্লাহর ওলী আর খাস লোকেরা সেসব দলিল থেকে মুক্ত, তাদের অন্তরে যা আসে সে অনুযায়ী চলতে পারে। কুরতুবী দাবিটা তুলে ধরেছেন কেবল তা কবর দেওয়ার জন্য। তিনি তাঁর উস্তাদের কথা উদ্ধৃত করেন: এ কথা যিন্দিকি ও কুফর, শরীয়তের জানা বিষয়কে অস্বীকার করা।"
          },
          {
            "en": "The reason al-Qurtubi gives closes the door on any private licence. Allah's rulings, he says, are known only through His messengers, who carry His law to His creation; no one bypasses them by a feeling in the heart. Qatadah's note on the treasure runs the same way: what was lawful for earlier peoples was later forbidden, so even a practice Allah once permitted grants nothing to a later hand. Al-Khidr is no exception a person may cite for himself. And this verse condemns no living group. It reports two orphans, a buried inheritance and a righteous father, licensing nothing against anyone.",
            "bn": "কুরতুবী যে কারণ দেখান, তাতে ব্যক্তিগত ছাড়ের সব দরজা বন্ধ হয়ে যায়। তিনি বলেন, আল্লাহর বিধান জানা যায় কেবল তাঁর রাসূলদের মাধ্যমে, যাঁরা তাঁর শরীয়ত তাঁর সৃষ্টির কাছে পৌঁছে দেন। মনের কোনো অনুভূতি দিয়ে কেউ তাঁদের পাশ কাটাতে পারে না। ধন নিয়ে কাতাদার কথাও একই দিকে যায়: আগের জাতিদের জন্য যা হালাল ছিল, পরে তা হারাম হয়েছে। তাই আল্লাহ একসময় যা অনুমতি দিয়েছিলেন, তা-ও পরের কারও জন্য কোনো ছাড় তৈরি করে না। খিযিরকে কেউ নিজের পক্ষে ব্যতিক্রমের দলিল বানাতে পারে না। আর এই আয়াত জীবিত কোনো গোষ্ঠীকে দোষী করে না। আয়াতে আছে দুই ইয়াতীম, মাটির নিচে রাখা উত্তরাধিকার আর এক সৎ বাবার কথা; কারও বিরুদ্ধে কিছু বলার অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "How Firm the Reports Are",
          "bn": "বর্ণনাগুলো কতটা পোক্ত"
        },
        "p": [
          {
            "en": "It is worth being exact about what stands on solid ground. The picture of what the treasure was rests on differing reports, not on one settled sound narration. The detail that it was gold and silver is traced to Abu ad-Darda' and, in Ma'arif al-Qur'an, attributed to Tirmidhi and al-Hakim; the inscribed golden tablet is carried as a raised report through Uthman bin Affan in al-Qurtubi and al-Baghawi. Ibn Kathir treats even the tablet cautiously, writing even if it is authentic before reasoning from it. No sound hadith settles what the treasure held, so the readings stay as the commentators offer them.",
            "bn": "কোন কথা শক্ত ভিত্তির ওপর দাঁড়িয়ে আছে, তা এখানে ঠিকঠাক বলা দরকার। ধনটা কী ছিল, সে ছবি দাঁড়িয়ে আছে নানা রকম বর্ণনার ওপর, একটিমাত্র প্রতিষ্ঠিত সহীহ বর্ণনার ওপর নয়। সোনা-রুপা ছিল, এ কথা আবু দারদার সূত্রে এসেছে, আর মাআরিফুল কুরআন একে তিরমিযী ও হাকিমের বর্ণনা বলে উল্লেখ করেছে। খোদাই করা সোনার ফলকের কথা কুরতুবী ও বাগাভীতে উসমান ইবন আফফানের সূত্রে মারফূ বর্ণনা হিসেবে এসেছে। ইবন কাসীর ফলকের বর্ণনাটাও সাবধানে নিয়েছেন; এর ভিত্তিতে যুক্তি দেওয়ার আগে লিখেছেন, যদি সহীহ হয়। ধনে কী ছিল, তা কোনো সহীহ হাদিস চূড়ান্তভাবে বলে না। তাই ব্যাখ্যাগুলো তাফসীরকারেরা যেভাবে দিয়েছেন, সেভাবেই থাকে।"
          },
          {
            "en": "One quiet touch of language closes the verse. Al-Khidr had opened by promising the interpretation of what you could not have patience over, using the heavier form of the verb, tastati'; here at the end he says the lighter form, tasti'. Ibn Kathir reads the shorter word as fitting a matter now explained and eased, where the fuller word had matched a confusion still heavy and unresolved. What Musa (AS) could not bear in the dark he can bear once it is named, and the story lets its own wording lighten as the meaning at last comes clear.",
            "bn": "আয়াতটা শেষ হয় ভাষার এক নিঃশব্দ সূক্ষ্মতায়। খিযির শুরুতে ওয়াদা করেছিলেন, যে বিষয়ে আপনি ধৈর্য ধরতে পারেননি, তার ব্যাখ্যা দেবেন; সেখানে তিনি ক্রিয়ার ভারী রূপ তাসতাতি ব্যবহার করেছিলেন। আর এখানে শেষে বলেন হালকা রূপ, তাসতি। ইবন কাসীরের ব্যাখ্যায়, ছোট শব্দটা মানায় এমন বিষয়ের সঙ্গে, যা এখন খুলে বলা হয়েছে, সহজ হয়ে গেছে। আর পূর্ণ শব্দটা মিলেছিল তখনকার ভারী, অমীমাংসিত ধাঁধার সঙ্গে। অন্ধকারে মূসা (আঃ) যা সইতে পারেননি, তার নাম জানার পর তা সইতে পারেন। অর্থ যখন অবশেষে পরিষ্কার হয়, কাহিনির নিজের শব্দও তখন হালকা হয়ে আসে।"
          }
        ]
      }
    ]
  },
  "18:87": {
    "sections": [
      {
        "h": {
          "en": "A King Given the Means",
          "bn": "সব উপকরণ পাওয়া এক রাজা"
        },
        "p": [
          {
            "en": "After the account of al-Khidr, the surah turns to a new figure. People had asked about him, and the answer opens plainly: \"I will recite to you about him a report\" (18:83), then \"Indeed, We established him upon the earth, and We gave him from everything a way\" (18:84). As-Sa'di stops the reader before the imagination runs ahead. The means God gave Dhul-Qarnayn, he says, were not detailed by God or His Messenger, and no report conveys them in a way that yields knowledge; so the only course is silence about them, and to pay no heed to the tellers of Israelite tales.",
            "bn": "খিযিরের ঘটনার পর সূরা নতুন এক ব্যক্তির দিকে ফেরে। লোকেরা তাঁর কথা জিজ্ঞেস করেছিল, আর জবাব শুরু হয় সোজা কথায়, ‘আমি তার বিষয় তোমাদের নিকট কিছু বর্ণনা করব’ (১৮:৮৩), এরপর ‘আমি তাকে পৃথিবীতে আধিপত্য দান করেছিলাম আর তাকে সব রকমের উপায় উপাদান দিয়েছিলাম’ (১৮:৮৪)। সাদী পাঠকের কল্পনাকে আগেই থামিয়ে দেন। আল্লাহ যুলকারনাইনকে যেসব উপায় দিয়েছিলেন, তিনি বলেন, তা আল্লাহ বা তাঁর রাসূল খুলে বলেননি, আর কোনো নির্ভরযোগ্য বর্ণনাও তা জ্ঞান দেওয়ার মতো করে পৌঁছায়নি। তাই একমাত্র পথ হলো সে বিষয়ে চুপ থাকা, আর ইসরাইলি গল্পকারদের কথায় কান না দেওয়া।"
          },
          {
            "en": "What we do know in sum is enough. As-Sa'di reads the means as strong and many, inward and outward, by which Dhul-Qarnayn came to hold a great and ordered army, subdued his enemies, and found his way to the far reaches of the earth, its east and its west. On the words \"So he followed a way\" (18:85), Ibn Kathir gathers Ibn Abbas, Mujahid and Qatadah to a single sense: he followed the routes and landmarks of the earth. This is the picture the verses build, a man of real power on the move, and now moving west.",
            "bn": "মোটামুটি যা জানি, তা-ই যথেষ্ট। সাদীর মতে সেই উপায় ছিল শক্তিশালী ও অনেক, ভেতরের ও বাইরের। এর জোরেই যুলকারনাইন গড়ে তোলেন বিশাল ও সুশৃঙ্খল বাহিনী, শত্রুদের বশে আনেন, আর পৌঁছে যান পৃথিবীর দূর প্রান্তে, পূর্বে ও পশ্চিমে। ‘একবার সে এক রাস্তা ধরল’ (১৮:৮৫) কথাটির ব্যাখ্যায় ইবন কাসীর দেখান, ইবন আব্বাস, মুজাহিদ আর কাতাদা সবাই এক অর্থ বলেছেন: সে পৃথিবীর পথঘাট আর চিহ্ন ধরে এগিয়ে চলল। আয়াতগুলো এই ছবিই আঁকে: সত্যিকারের ক্ষমতার অধিকারী এক মানুষ পথে বেরিয়েছেন, আর এবার চলেছেন পশ্চিমে।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Setting of the Sun",
          "bn": "সূর্যাস্তের প্রান্তে"
        },
        "p": [
          {
            "en": "\"Until, when he reached the setting of the sun, he found it setting in a spring of murky water\" (18:86). Ibn Kathir handles the strange image with care. That Dhul-Qarnayn reached the place in the sky where the sun sets, he says, is impossible, and the storytellers' claim that he travelled so far west the sun set behind him is not true at all; most of it is drawn from the myths of the People of the Book and the fabrications of their heretics. What he saw was the sun as though it were setting in the ocean, the sight of anyone who stands on a shore at dusk.",
            "bn": "‘চলতে চলতে যখন সে সূর্যাস্তের স্থানে পৌঁছল, তখন সে সূর্যকে অস্বচ্ছ জলাশয়ে ডুবতে দেখল’ (১৮:৮৬)। এই অদ্ভুত ছবিটি ইবন কাসীর সামলান সতর্কতার সঙ্গে। যুলকারনাইন আকাশের যে জায়গায় সূর্য ডোবে সেখানে পৌঁছেছেন, এটা অসম্ভব, তিনি বলেন। আর গল্পকারদের দাবি যে তিনি এত দূর পশ্চিমে গিয়েছিলেন যে সূর্য তাঁর পেছনে ডুবল, তা মোটেই সত্য নয়। এর বেশির ভাগই আহলে কিতাবের কল্পকাহিনি আর তাদের বিভ্রান্তদের বানানো কথা। তিনি যা দেখেছিলেন তা হলো সূর্য যেন সাগরে ডুবছে, সন্ধ্যায় সাগরতীরে দাঁড়ানো যে কারও চোখেই যা ধরা পড়ে।"
          },
          {
            "en": "As-Sa'di and Ma'arif al-Qur'an give the same reason from two angles. For one who has water between himself and the western horizon, as-Sa'di notes, the sun appears to sink into the water itself though it stays high above. Ma'arif explains hami'ah as dark mud: water lying over black mud looks black, and an onlooker in open country, with no mountain or tree or building in view, feels the sun sinking into the land. And there \"he found near it a people,\" the point at which the choice that follows is set before him.",
            "bn": "সাদী আর মাআরিফুল কুরআন একই কারণ দেন দুই দিক থেকে। যার আর পশ্চিম দিগন্তের মাঝে পানি থাকে, সাদী বলেন, তার কাছে সূর্য যেন সেই পানিতেই ডুবছে মনে হয়, যদিও তা অনেক উঁচুতে। মাআরিফ ‘হামিআ’-কে ব্যাখ্যা করে কালো কাদা হিসেবে: কালো কাদার উপর জমে থাকা পানি কালো দেখায়, আর খোলা মাঠে দাঁড়ানো দর্শকের কাছে, সামনে যখন কোনো পাহাড় গাছ বা ঘরবাড়ি নেই, মনে হয় সূর্য মাটিতেই তলিয়ে যাচ্ছে। আর সেখানেই ‘সে একটি জাতির লোকেদের সাক্ষাৎ পেল’, যে মুহূর্তে তাঁর সামনে রাখা হয় পরের সিদ্ধান্তটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Punish, or Do Them Good",
          "bn": "শাস্তি, নাকি সদাচার"
        },
        "p": [
          {
            "en": "\"We said, O Dhul-Qarnayn, either you punish them or else adopt among them a way of goodness\" (18:86). Ibn Kathir reads this as real power placed in his hand together with a genuine choice: he could kill the men and take captives, or set them free, with or without ransom. As-Sa'di adds the ground for the choice. The people were, on the face of it, disbelievers or corrupt, or had something of that in them, for had they been believers who were not corrupt, no leave to punish them would have been given at all.",
            "bn": "‘আমি বললাম, হে যুলকারনাইন! তুমি তাদেরকে শাস্তি দিতে পার কিংবা তাদের সঙ্গে সদয় ব্যবহারও করতে পার’ (১৮:৮৬)। ইবন কাসীরের মতে, এখানে তাঁর হাতে সত্যিকারের ক্ষমতা দেওয়া হয়েছিল, সঙ্গে বেছে নেওয়ার সত্যিকারের এখতিয়ারও: তিনি চাইলে পুরুষদের হত্যা করে বাকিদের বন্দি করতে পারতেন, কিংবা মুক্তিপণ নিয়ে বা না নিয়ে ছেড়ে দিতে পারতেন। এই এখতিয়ার কেন দেওয়া হলো, সাদী তা-ও বলেন। বাহ্যত লোকগুলো ছিল কাফির কিংবা ফাসিক, অথবা তাদের মধ্যে এর কিছুটা ছিল। কারণ তারা যদি ফাসিক নয় এমন মুমিন হতো, তাহলে তাদের শাস্তি দেওয়ার অনুমতিই দেওয়া হতো না।"
          },
          {
            "en": "Ma'arif al-Qur'an reads his answer as the second option chosen with an order to it. He would first bring them toward faith through the message, good counsel and information; then he would punish those who stood by their disbelief and reward those who believed and did good. The verse before us is the first half of that ruling, the wrongdoer's portion. Its counterpart, the believer who does good and is met with the best (18:88), waits in the next line, and the surah lets him wait.",
            "bn": "মাআরিফুল কুরআনের মতে তিনি দ্বিতীয় পথটাই বেছে নিয়েছিলেন, তবে একটা ধাপ মেনে। প্রথমে তিনি দাওয়াত, ভালো উপদেশ আর সত্য জানিয়ে দেওয়ার মাধ্যমে তাদের ঈমানের দিকে আনবেন। তারপর যারা কুফরিতে অটল থাকবে তাদের শাস্তি দেবেন, আর যারা ঈমান আনবে ও নেক আমল করবে তাদের পুরস্কার দেবেন। আমাদের সামনের আয়াতটি সেই সিদ্ধান্তের প্রথম অর্ধেক, অন্যায়কারীর ভাগ। এর অন্য অর্ধেক, যে ঈমান আনে, নেক আমল করে আর উত্তম প্রতিদান পায় (১৮:৮৮), আছে পরের আয়াতে; সূরা তাকে সেখানেই অপেক্ষায় রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is the Wrongdoer",
          "bn": "অন্যায়কারী আসলে কে"
        },
        "p": [
          {
            "en": "\"He said, As for whoever wrongs, we will punish him\" (18:87). Here the commentators consulted for this verse speak with a single voice on who the wrongdoer is. Ibn Kathir reads man zalama as the person who persists in his disbelief and in associating others with his Lord. At-Tabari and al-Baghawi render it simply as whoever disbelieves. Al-Qurtubi has whoever stands firm upon disbelief among you. As-Sa'di glosses the wrong as being by disbelief. Al-Muyassar reads it as someone who wrongs himself by rejecting his Lord.",
            "bn": "‘সে বলল, যে ব্যক্তি যুলম করবে আমি তাকে অচিরেই শাস্তি দেব’ (১৮:৮৭)। অন্যায়কারী কে, এ প্রশ্নে এই আয়াতের জন্য দেখা তাফসীরগুলো এক সুরে কথা বলে। ইবন কাসীরের কাছে ‘মান যালামা’ মানে সেই ব্যক্তি, যে নিজের কুফরি আর রবের সঙ্গে শিরকে অটল থাকে। তাবারী আর বাগাভী সোজা বলেন, যে কুফরি করে। কুরতুবীর ভাষায়, তোমাদের মধ্যে যে কুফরির ওপর অনড় থাকে। সাদীর ব্যাখ্যায় যুলমটা হলো কুফরি। মুয়াসসার বলে, যে নিজের রবকে অস্বীকার করে নিজের ওপরই যুলম করে।"
          },
          {
            "en": "The point of that agreement matters. The wrong that draws the ruler's punishment is not a private slight against the king, nor injustice in the loose modern sense, but persistence in rejecting God after the call has reached the people. Al-Muyassar's phrase locates the first victim of the wrong inside the wrongdoer himself, the very soul that committed it. This is worth holding onto: the verse is not a warrant for a ruler to strike whoever crosses him, but a picture of judgment falling where truth was knowingly refused.",
            "bn": "এই ঐকমত্যের গুরুত্ব আছে। যে অন্যায়ের কারণে শাসক শাস্তি দেন, তা রাজার প্রতি ব্যক্তিগত অসম্মান নয়, আজকের ঢিলেঢালা অর্থে অবিচারও নয়। তা হলো দাওয়াত পৌঁছানোর পরও আল্লাহকে অস্বীকার করে যাওয়া। মুয়াসসারের কথায় দেখা যায়, এই অন্যায়ের প্রথম শিকার অন্যায়কারী নিজেই, তার সেই নফস, যে অন্যায়টা করেছে। কথাটা মনে রাখা দরকার: আয়াতটি শাসককে এই অনুমতি দেয় না যে তার বিরুদ্ধে যে-ই যাবে তাকেই সে আঘাত করবে। এ হলো এমন বিচারের ছবি, যা নেমে আসে সেখানে, যেখানে জেনেবুঝে সত্যকে ফিরিয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Punishment in This Life",
          "bn": "দুনিয়ায় এক শাস্তি"
        },
        "p": [
          {
            "en": "\"We will punish him\" is the first arm of the sentence, and it lands here, in the world. Qatadah, quoted by both at-Tabari and Ibn Kathir, reads the punishing as killing. Al-Muyassar puts it in a single word, that this chastisement is in this world. So the ruler, given the choice and the power, acts on the plainest reading of his charge: whoever persists in disbelief after the call is put to death. This is the worldly half, carried out by a hand that holds real authority.",
            "bn": "‘আমি তাকে শাস্তি দেব’, বাক্যের এই প্রথম অংশ কার্যকর হয় এখানেই, দুনিয়ায়। তাবারী আর ইবন কাসীর দুজনেই কাতাদার কথা উদ্ধৃত করেন; তাঁর মতে এই শাস্তি মানে হত্যা। মুয়াসসার এক কথায় বলে, এই আযাব দুনিয়ার। তাই এখতিয়ার আর ক্ষমতা পেয়ে শাসক তাঁর দায়িত্বের সবচেয়ে সরল অর্থ মেনে কাজ করেন: দাওয়াত পাওয়ার পরও যে কুফরিতে অটল থাকে, তাকে মৃত্যুদণ্ড দেওয়া হয়। এ হলো দুনিয়ার অর্ধেক, যা কার্যকর হয় সত্যিকারের কর্তৃত্ব যাঁর হাতে, তাঁর মাধ্যমে।"
          },
          {
            "en": "Ibn Kathir also passes on two further reports about the manner of it, and it is worth naming them as reports, not as certainties. As-Suddi held that Dhul-Qarnayn heated vessels of copper and cast the wrongdoers in until they melted; Wahb ibn Munabbih held that a darkness was set upon them that entered their mouths and homes. Ibn Kathir seals each with \"and Allah knows best.\" The verse itself commits to none of this detail. It says only that the wrongdoer will be punished, and leaves the how in the transmitters' hands.",
            "bn": "এর ধরন নিয়ে ইবন কাসীর আরও দুটি বর্ণনা এনেছেন। এগুলোকে বর্ণনা বলেই উল্লেখ করা উচিত, নিশ্চিত সত্য হিসেবে নয়। সুদ্দীর মতে, যুলকারনাইন তামার পাত্র গরম করে অন্যায়কারীদের তাতে ফেলতেন, যতক্ষণ না তারা গলে যেত। ওয়াহব ইবন মুনাব্বিহর মতে, তাদের ওপর এমন এক অন্ধকার চাপিয়ে দেওয়া হতো, যা তাদের মুখে আর ঘরে ঢুকে পড়ত। ইবন কাসীর দুটির শেষেই বলেন, ‘আল্লাহই ভালো জানেন।’ আয়াত নিজে এসব খুঁটিনাটির কোনোটাই বলে না। আয়াত শুধু বলে অন্যায়কারীকে শাস্তি দেওয়া হবে; কীভাবে, সে কথা বর্ণনাকারীদের হাতে ছেড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Terror Beyond the Worst",
          "bn": "সবচেয়ে খারাপের চেয়েও কঠিন"
        },
        "p": [
          {
            "en": "\"Then he will be returned to his Lord, and He will punish him with a terrible punishment\" (18:87). At-Tabari reads the word nukr as a mighty punishment, and names it: it is the chastisement of Hell. Al-Qurtubi keeps to the same, a severe punishment in Hell, and sets its time on the Day of Resurrection. Al-Muyassar too has a mighty punishment in the Fire of Hell. The ruler's sentence, in other words, is not the end of the account; it is returned to the One before whom every ruler stands.",
            "bn": "‘অতঃপর তাকে তার প্রতিপালকের কাছে ফিরিয়ে আনা হবে, তখন তিনি তাকে কঠিন আযাব দেবেন’ (১৮:৮৭)। তাবারী ‘নুকর’ শব্দটিকে পড়েন এক বিরাট শাস্তি হিসেবে, আর তা চিনিয়ে দেন: এ জাহান্নামের আযাব। কুরতুবীও একই কথায় থাকেন, জাহান্নামে এক কঠিন শাস্তি, আর এর সময় ঠিক করেন কিয়ামতের দিন। মুয়াসসারের কাছেও তা জাহান্নামের আগুনে এক বিরাট আযাব। অন্যভাবে বললে, শাসকের রায়ই হিসাবের শেষ নয়। তা ফিরিয়ে দেওয়া হয় সেই সত্তার কাছে, যাঁর সামনে প্রতিটি শাসককেই দাঁড়াতে হয়।"
          },
          {
            "en": "Al-Baghawi reads nukr as munkar, unheard-of, and draws a sharp measure from it: it means the Fire, and the Fire is more nukr than the killing. So the two punishments stand in order, the sword here and a worse thing there, each heavier than the last. As-Sa'di says the wrongdoer attains both penalties, of this world and of the Hereafter. Ibn Kathir sees in the whole line a proof: in it is the affirming of the Return and of reward and recompense, the truth on which the ruler's justice itself rests.",
            "bn": "বাগাভী ‘নুকর’-কে পড়েন ‘মুনকার’ অর্থে, অর্থাৎ যার কথা আগে কেউ শোনেনি, আর তা থেকে একটা স্পষ্ট তুলনা টানেন: এর মানে জাহান্নামের আগুন, আর আগুন হত্যার চেয়েও বেশি ‘নুকর’। তাই দুই শাস্তি আসে পরপর: এখানে তলোয়ার, আর সেখানে এর চেয়েও ভয়ংকর কিছু, পরেরটা আগেরটার চেয়ে ভারী। সাদী বলেন, অন্যায়কারী দুই শাস্তিই পায়, দুনিয়ার আর আখিরাতের। ইবন কাসীর পুরো আয়াতটিতে একটি প্রমাণ দেখেন: এতে আখিরাতে ফিরে যাওয়া আর প্রতিদান ও প্রতিফলের সত্যতা ঘোষণা আছে, আর এই সত্যের ওপরই শাসকের ন্যায়বিচারও দাঁড়িয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Was He a Prophet",
          "bn": "তিনি কি নবী ছিলেন"
        },
        "p": [
          {
            "en": "The Qur'an has God address him directly, \"We said, O Dhul-Qarnayn\" (18:86), and Ma'arif al-Qur'an lets that raise its question honestly. If Dhul-Qarnayn was a prophet, the address came by revelation and there is no difficulty. If his prophethood is not granted, then either he was addressed through a prophet of his time, some reports placing al-Khidr in his company, or the word for revelation is used here in its plain sense, as the Qur'an uses it of the mother of Musa (AS), who was certainly no prophet.",
            "bn": "কুরআনে আল্লাহ তাঁকে সরাসরি সম্বোধন করেছেন, ‘আমি বললাম, হে যুলকারনাইন’ (১৮:৮৬)। মাআরিফুল কুরআন এ থেকে ওঠা প্রশ্নটা খোলাখুলিই তোলে। যুলকারনাইন যদি নবী হয়ে থাকেন, তাহলে এই সম্বোধন এসেছে ওহির মাধ্যমে, এতে কোনো জটিলতা নেই। আর তাঁর নবুয়ত যদি মানা না হয়, তাহলে দুটি সম্ভাবনা। হয় তাঁর সময়ের কোনো নবীর মাধ্যমে তাঁকে সম্বোধন করা হয়েছিল; কিছু বর্ণনায় খিযিরকে তাঁর সঙ্গী বলা হয়েছে। নয়তো ওহি শব্দটা এখানে সাধারণ অর্থে এসেছে, যেমন কুরআন মূসা (আঃ)-এর মায়ের বেলায় শব্দটা ব্যবহার করেছে, অথচ তিনি নিশ্চয়ই নবী ছিলেন না।"
          },
          {
            "en": "Ma'arif then cites Abu Hayyan in al-Bahr al-Muhit against reading the matter too loosely. A command to punish and to kill, Abu Hayyan holds, cannot be issued except on the authority of revelation given to a prophet; it cannot rest on illumination or inspiration, nor on any lesser source. From this he concludes that either Dhul-Qarnayn was himself a prophet, or a prophet was present in his time through whom the command came. Ma'arif closes the discussion where careful scholarship does, with \"and Allah knows best,\" and takes no final side.",
            "bn": "বিষয়টাকে হালকাভাবে নেওয়া যে ঠিক নয়, তা বোঝাতে মাআরিফ এরপর আল-বাহরুল মুহীত থেকে আবু হাইয়ানের মত উদ্ধৃত করে। আবু হাইয়ানের মতে, শাস্তি দেওয়া বা হত্যার নির্দেশ নবীর কাছে আসা ওহি ছাড়া দেওয়া যায় না। কাশফ বা ইলহামের ওপর, কিংবা এর চেয়ে নিচু কোনো উৎসের ওপর এমন নির্দেশ দাঁড়াতে পারে না। তাই তাঁর সিদ্ধান্ত: হয় যুলকারনাইন নিজেই নবী ছিলেন, নয়তো তাঁর সময়ে কোনো নবী ছিলেন, যাঁর মাধ্যমে নির্দেশটা এসেছিল। সতর্ক আলিমরা যেখানে থামেন, মাআরিফও আলোচনাটা সেখানেই শেষ করে, ‘আল্লাহই ভালো জানেন’ বলে; চূড়ান্ত কোনো পক্ষ নেয় না।"
          },
          {
            "en": "As-Sa'di does not settle the prophethood either, but reads the closing verses as proof that Dhul-Qarnayn was among the righteous, God-befriended kings, just and knowing, since he met God's pleasure in dealing with each person as that person's case deserved. Both as-Sa'di and Ibn Kathir warn plainly against the Israelite tales that gathered around this figure. The commentators consulted here name him with no famous conqueror and pin him to no empire, and neither will we; the surah gives a title and a conduct, not a biography.",
            "bn": "সাদীও নবুয়তের প্রশ্নে চূড়ান্ত কিছু বলেন না। তবে শেষের আয়াতগুলো থেকে তিনি প্রমাণ করেন, যুলকারনাইন ছিলেন আল্লাহর ওলী, নেককার রাজাদের একজন, ন্যায়পরায়ণ ও জ্ঞানী। কারণ তিনি প্রত্যেক মানুষের সঙ্গে তার অবস্থা বুঝে আচরণ করে আল্লাহর সন্তুষ্টি অর্জন করেছিলেন। সাদী আর ইবন কাসীর দুজনেই এই ব্যক্তিকে ঘিরে জমে ওঠা ইসরাইলি গল্পের ব্যাপারে সোজাসুজি সতর্ক করেন। এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো তাঁকে কোনো বিখ্যাত বিজেতার সঙ্গে মেলায় না, কোনো সাম্রাজ্যের সঙ্গেও জুড়ে দেয় না; আমরাও তা করব না। সূরা দেয় একটি উপাধি আর একটি আচরণের ছবি, কোনো জীবনী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Justice Is Not a License",
          "bn": "ন্যায় কোনো ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both directions. The verse records a ruler, given authority and a choice by God, who punished those persisting in disbelief after the call and rewarded those who believed. As-Sa'di calls his conduct siyasa shar'iyya, governance by sacred law, and it is precisely this that earned him praise, for God granted him the success to meet His pleasure. The example runs through lawful, God-given authority acting within its bounds. It is no warrant for a private person to punish, and it passes no verdict on any living individual or community.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই দিক থেকেই। আয়াতে আছে এমন এক শাসকের কথা, যাঁকে আল্লাহ কর্তৃত্ব আর এখতিয়ার দিয়েছিলেন। দাওয়াত পৌঁছানোর পরও যারা কুফরিতে অটল ছিল, তিনি তাদের শাস্তি দিয়েছিলেন, আর যারা ঈমান এনেছিল তাদের পুরস্কৃত করেছিলেন। সাদী তাঁর এই আচরণকে বলেন সিয়াসাতে শারইয়া, অর্থাৎ শরিয়তভিত্তিক শাসন। ঠিক এ কারণেই তিনি প্রশংসা পেয়েছেন, কারণ আল্লাহ তাঁকে নিজের সন্তুষ্টি অর্জনের তাওফিক দিয়েছিলেন। এই দৃষ্টান্ত খাটে কেবল বৈধ, আল্লাহর দেওয়া কর্তৃত্বের বেলায়, যখন তা নিজের সীমার ভেতরে থাকে। কোনো সাধারণ মানুষ নিজে শাস্তি দেবে, এর অনুমতি এখানে নেই। আর জীবিত কোনো ব্যক্তি বা জনগোষ্ঠী সম্পর্কেও এ আয়াত কোনো রায় দেয় না।"
          },
          {
            "en": "No sound hadith is narrated specifically on this verse, so none is forced into it. On the wider theme of just rule, Sahih al-Bukhari records that the Prophet ﷺ named, among those whom Allah will shade on the Day when there is no shade but His, \"a just ruler\" — a general narration about justice, not a comment tied to Dhul-Qarnayn's words. So the verse leaves us with a standard, not a sword: correct wrong within your lawful bounds, warn before you judge, and remember that the final reckoning is returned to the Lord, to whom the ruler himself will be returned.",
            "bn": "এই আয়াতের উপর নির্দিষ্টভাবে কোনো সহিহ হাদিস বর্ণিত নেই, তাই জোর করে কোনোটি এতে বসানো হয়নি। ন্যায়শাসনের বিস্তৃত বিষয়ে সহিহ বুখারিতে এসেছে যে নবী ﷺ তাঁদের মধ্যে ‘ন্যায়পরায়ণ শাসক’-কে গণ্য করেছেন, যাঁদের আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। এটি ন্যায় নিয়ে এক সাধারণ বর্ণনা, যুলকারনাইনের কথার সঙ্গে বাঁধা কোনো মন্তব্য নয়। তাই আয়াত আমাদের হাতে দেয় একটি মানদণ্ড, তলোয়ার নয়: নিজের বৈধ সীমার ভেতরে অন্যায় শোধরান, বিচার করার আগে সতর্ক করুন, আর মনে রাখুন শেষ হিসাব ফিরিয়ে দেওয়া হয় সেই রবের কাছে, যাঁর কাছে শাসক নিজেও ফিরে যাবেন।"
          }
        ]
      }
    ]
  },
  "18:94": {
    "sections": [
      {
        "h": {
          "en": "The Plea from the Pass",
          "bn": "গিরিপথ থেকে আকুতি"
        },
        "p": [
          {
            "en": "The people beside the two mountain-walls could barely follow speech, as the previous verse says (18:93). al-Baghawi records that an interpreter spoke on their behalf, citing Ibn Mas'ud's reading, 'those below them said, O Dhul-Qarnayn.' al-Qurtubi identifies the speakers as a righteous nation of humankind. However their words reached him, they addressed him by the very title the Qur'an uses and set out a single, concrete fear.",
            "bn": "আগের আয়াতে বলা হয়েছে, দুই পাহাড়ের মাঝের এই জাতি কথাবার্তা তেমন বুঝত না (১৮:৯৩)। বাগভী বলেন, তাদের হয়ে একজন দোভাষী কথা বলেছিল, আর দলিল হিসেবে আনেন ইবন মাসঊদের কিরাআত: ‘তাদের নিচের লোকেরা বলল, হে যুলকারনায়ন।’ কুরতুবীর মতে যারা কথা বলছিল তারা ছিল মানুষের এক সৎ জাতি। কথা যেভাবেই তাঁর কাছে পৌঁছে থাকুক, তারা তাঁকে ডাকল কুরআনের দেওয়া সেই উপাধিতেই আর সামনে রাখল একটিমাত্র সুনির্দিষ্ট ভয়।"
          },
          {
            "en": "Their speech is a petition, not a lament. They name the harm plainly — Gog and Magog are corrupters in the land — and then propose the remedy: a barrier between themselves and the raiders. They do not ask him to fight their war or to rule over them. They ask for a wall, a lasting shield, and they offer to pay for it from their own wealth. The request is measured, practical and self-aware.",
            "bn": "তাদের কথা আরজি, বিলাপ নয়। তারা ক্ষতিটা সোজা করে বলে দেয়, ইয়াজূজ ও মাজূজ পৃথিবীতে বিপর্যয় ছড়াচ্ছে, আর তারপর সমাধানও পেশ করে: তাদের ও হামলাকারীদের মাঝে একটা বাঁধ। তারা তাঁকে তাদের হয়ে যুদ্ধ করতে বা তাদের শাসন করতে বলে না। তারা চায় একটা প্রাচীর, স্থায়ী এক আড়াল, আর নিজেদের সম্পদ থেকে তার দাম দিতে চায়। আবেদনটা মাপা, বাস্তব আর নিজেদের সীমা সম্পর্কে সচেতন।"
          },
          {
            "en": "al-Qurtubi notes that the appeal opens with courteous address, 'O Dhul-Qarnayn,' the manners of someone asking a favour rather than demanding a right. These people had watched this ruler pass through the earth and judged, rightly, that here was a man able to do what they could not. Their instinct was sound: bring the right need to the right person, and ask well.",
            "bn": "কুরতুবী বলেন, আবেদনটা শুরু হয় ভদ্র সম্বোধনে, ‘হে যুলকারনায়ন’। এ হলো অনুগ্রহ চাওয়ার আদব, অধিকার দাবি করার ভঙ্গি নয়। এই মানুষগুলো শাসকটিকে পৃথিবীজুড়ে চলতে দেখেছিল, আর ঠিকই বুঝেছিল, ইনি এমন কাজ পারেন, যা তারা নিজেরা পারে না। তাদের ভাবনা ঠিকই ছিল: সঠিক প্রয়োজন নিয়ে সঠিক মানুষের কাছে যাওয়া, আর সুন্দর করে চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Two Peoples Are",
          "bn": "দুই জাতি আসলে কারা"
        },
        "p": [
          {
            "en": "The verse names Gog and Magog but does not describe them; the commentators supply only what the sound sources allow. They are a human people, the progeny of Adam. al-Qurtubi cites a report from Abu Hurayrah that Nuh (AS) had sons, Sam, Ham and Yafith, and that Gog and Magog descend from the line of Yafith, as others do; al-Baghawi and the historians say the same. Ma'arif adds that the Qur'an's own words make all humankind after the Flood the progeny of Nuh (37:77).",
            "bn": "আয়াত ইয়াজূজ ও মাজূজের নাম নেয়, কিন্তু তাদের বর্ণনা দেয় না; তাফসিরকারেরা কেবল ততটুকু জোগান দেন যতটুকু নির্ভরযোগ্য সূত্র অনুমোদন করে। তারা মানুষেরই এক জাতি, আদম (আঃ)-এর বংশধর। কুরতুবী আবু হুরায়রা থেকে বর্ণনা আনেন যে নূহ (আঃ)-এর ছেলে ছিল সাম, হাম ও ইয়াফিস, আর ইয়াজূজ ও মাজূজ নেমে এসেছে ইয়াফিসের ধারা থেকে, যেমন আরও অনেকে। বাগভী ও ঐতিহাসিকেরাও একই কথা বলেন। মাআরিফ যোগ করে, কুরআনের নিজের কথাই প্লাবনের পরের সব মানুষকে নূহ (আঃ)-এর বংশধর বানিয়ে দেয় (৩৭:৭৭)।"
          },
          {
            "en": "al-Qurtubi records, then rejects, a stranger report. Ka'b said they sprang from soil mingled with a discharge of Adam, so that they are kin to us through the father alone. al-Qurtubi answers that the prophets have no such discharge, and that Gog and Magog are simply of the line of Yafith, as Muqatil and others held. It is worth keeping the exchange, because it shows the early commentators sifting their own material and setting aside what would not stand.",
            "bn": "কুরতুবী একটি অদ্ভুত বর্ণনা তুলে ধরেন, আর তারপর তা বাতিল করেন। কাব বলেছিলেন, আদম (আঃ)-এর এক স্খলনের সঙ্গে মাটি মিশে তারা জন্ম নেয়, তাই তারা কেবল বাবার দিক থেকে আমাদের আত্মীয়। কুরতুবী জবাব দেন, নবীদের এমন স্খলন হয় না, আর ইয়াজূজ ও মাজূজ কেবল ইয়াফিসের ধারার লোক, যেমন মুকাতিল ও অন্যরা বলেছেন। এই আলোচনাটা রাখা দরকার, কারণ তা দেখায় আদি তাফসিরকারেরা নিজেদের উপাদান যাচাই করে যা টেকে না তা সরিয়ে রাখতেন।"
          },
          {
            "en": "What the tafsir will not allow is turning them into legend. They are a nation of human beings with a known lineage, however far it has since scattered across the earth. Their full emergence is spoken of elsewhere as a sign near the Hour, but the verse in front of us is only the people's request for a barrier, and that is where this reading stays.",
            "bn": "তবে তাদের রূপকথার চরিত্র বানিয়ে ফেলার সুযোগ তাফসির দেয় না। তারা মানুষেরই এক জাতি, যাদের বংশধারা জানা, যদিও সেই বংশ এখন পৃথিবীর নানা দিকে ছড়িয়ে গেছে। কিয়ামতের কাছাকাছি সময়ের নিদর্শন হিসেবে তাদের পুরোপুরি বেরিয়ে আসার কথা অন্য জায়গায় এসেছে। কিন্তু আমাদের সামনের আয়াতে আছে কেবল ওই জাতির বাঁধ চাওয়ার আবেদন, তাই এই আলোচনাও সেখানেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shape of Their Corruption",
          "bn": "তাদের বিপর্যয়ের রূপ"
        },
        "p": [
          {
            "en": "The people call Gog and Magog 'corrupters in the land,' and the commentators differ over what the corruption was. as-Sa'di reads it as killing, the seizing of wealth and the like. al-Muyassar glosses it as the ruin of crops and offspring. al-Baghawi transmits from al-Kalbi that they would come out each spring, eat every green thing, carry off everything dry into their own country, and that the neighbouring people met from them severe harm and killing.",
            "bn": "লোকেরা ইয়াজূজ ও মাজূজকে বলেছে ‘পৃথিবীতে বিপর্যয় সৃষ্টিকারী’, তবে বিপর্যয়টা আসলে কী ছিল, তা নিয়ে তাফসিরকারদের মত আলাদা। সাদীর মতে তা হলো হত্যা, সম্পদ লুট আর এ জাতীয় কাজ। মুয়াসসার বলে, ফসল আর বংশ ধ্বংস করা। বাগভী কালবি থেকে বর্ণনা করেন, তারা প্রতি বসন্তে বেরিয়ে আসত, সবুজ যা পেত খেয়ে ফেলত, শুকনো যা পেত নিজেদের দেশে নিয়ে যেত, আর প্রতিবেশী জাতি তাদের হাতে ভয়ানক ক্ষতি আর হত্যার শিকার হতো।"
          },
          {
            "en": "al-Qurtubi widens the range further. Sa'id ibn Abd al-Aziz held that their corruption was the devouring of human beings; another group held it was not yet present but expected, that they would corrupt the land at their emergence, so the people sought to guard against it before it fell. al-Qurtubi lays these views side by side without deciding between them, and closes with the scholar's habit, 'and Allah knows best.'",
            "bn": "কুরতুবী পরিসরটা আরও বাড়ান। সাঈদ ইবন আবদুল আজিজের মত ছিল, তাদের বিপর্যয় ছিল মানুষ খেয়ে ফেলা; আরেক দল বলেন, তা তখনো ঘটেনি বরং আশঙ্কার বিষয় ছিল, বেরিয়ে এলে তারা পৃথিবীতে বিপর্যয় ছড়াবে, তাই লোকেরা তা নেমে আসার আগেই বাঁচার পথ খুঁজেছিল। কুরতুবী মতগুলো পাশাপাশি রাখেন, কোনোটির পক্ষে রায় না দিয়ে, আর শেষ করেন আলিমদের অভ্যাস অনুযায়ী, ‘আল্লাহই ভালো জানেন।’"
          },
          {
            "en": "Held together, the reports agree on the character of the threat even where they part on its detail: a people whose contact with their neighbours was raiding, plunder and bloodshed, a running wound rather than a single insult. That is what a barrier answers. It is not a grievance to be argued out in words, but a danger to be shut out with stone and iron.",
            "bn": "একসঙ্গে ধরলে বর্ণনাগুলো বিপদের চরিত্রে একমত, যদিও খুঁটিনাটিতে আলাদা: এমন এক জাতি যাদের সঙ্গে প্রতিবেশীর সম্পর্ক ছিল হামলা, লুট আর রক্তপাত, একটা চলমান ক্ষত, নিছক একবারের অপমান নয়। বাঁধ সেই বিপদেরই জবাব। এটা কথার লড়াইয়ে মীমাংসা করার অভিযোগ নয়, বরং পাথর আর লোহা দিয়ে আটকে দেওয়ার মতো এক বিপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Multitude Beyond Counting",
          "bn": "অগণিত এক জনস্রোত"
        },
        "p": [
          {
            "en": "A single sound narration bears directly on who these people are. al-Bukhari records from Abu Sa'id al-Khudri, and Muslim reports its like, that on the Day of Resurrection Allah will tell Adam to send forth the people of the Fire; of every thousand, the crushing majority are sent, and the Prophet said, 'from you but a lone soul, and from Gog and Magog a thousand.' The report is Bukhari's own, and sound.",
            "bn": "একটি সহিহ বর্ণনা সরাসরি বলে দেয় এই জাতি আসলে কারা। বুখারী আবু সাঈদ খুদরি থেকে বর্ণনা করেন, আর মুসলিমও তার অনুরূপ আনেন, কিয়ামতের দিন আল্লাহ আদম (আঃ)-কে বলবেন জাহান্নামের দল বের করে দিতে; প্রতি হাজারে বিপুল সংখ্যাগরিষ্ঠ অংশ পাঠানো হবে, আর নবী ﷺ বলেছেন, ‘তোমাদের থেকে কেবল একটি প্রাণ, আর ইয়াজূজ ও মাজূজ থেকে হাজার।’ বর্ণনাটি খোদ বুখারীর, আর সহিহ।"
          },
          {
            "en": "For our verse the hadith settles two things. Gog and Magog are a progeny of Adam, human as their neighbours were, and no myth; and their numbers are vast beyond reckoning. That second fact explains the scene at the pass. A lone people at a mountain gap could not stand against so great a multitude by their own hands, which is exactly why they sought a barrier rather than a battle.",
            "bn": "আমাদের আয়াতের জন্য হাদিসটি দুটি বিষয় মীমাংসা করে দেয়। ইয়াজূজ ও মাজূজ আদম (আঃ)-এর বংশধর, প্রতিবেশীদের মতোই মানুষ, কোনো রূপকথা নয়; আর তাদের সংখ্যা গুনে শেষ করার মতো নয়, অগণিত। এই দ্বিতীয় সত্যটাই গিরিপথের দৃশ্যটা বুঝিয়ে দেয়। পাহাড়ের ফাঁকে একলা এক জাতি নিজেদের হাতে এত বড় এক জনস্রোতের সামনে দাঁড়াতে পারত না, আর ঠিক সে কারণেই তারা যুদ্ধ নয়, একটা বাঁধ চেয়েছিল।"
          },
          {
            "en": "The fuller narrations — the wall breached, the surge across the land, the arrows loosed at the sky near the end of time — belong to Gog and Magog's release, not to this request for a barrier. They are reported soundly elsewhere, but they are another verse's business. Here the hadith serves only to fix the identity and the scale of the danger that the people have named.",
            "bn": "বাকি বিস্তারিত বর্ণনাগুলো, বাঁধ ভাঙা, জমিনজুড়ে ঢল, শেষ জমানার কাছে আকাশে তির ছোড়া, এসব ইয়াজূজ ও মাজূজের মুক্তির কথা, এই বাঁধ চাওয়ার আবেদনের নয়। এগুলো অন্যত্র সহিহভাবেই বর্ণিত, তবে তা অন্য এক আয়াতের প্রসঙ্গ। এখানে হাদিসটি কেবল সেই বিপদের পরিচয় আর মাত্রা নির্ধারণ করে, যে বিপদের নাম লোকেরা নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Tribute They Offered",
          "bn": "যে কর তারা সাধল"
        },
        "p": [
          {
            "en": "The people offer a 'kharj.' Ibn Kathir, through Ibn Jurayj from Ata from Ibn Abbas, glosses the word as a great reward: they meant to gather money among themselves and hand it to him, so that he would set a barrier between them and Gog and Magog. The offer is spontaneous and collective, a whole community pooling its wealth to buy its own protection.",
            "bn": "লোকেরা এক ‘খরজ’ দেওয়ার প্রস্তাব করে। ইবন জুরাইজ থেকে আতা হয়ে ইবন আব্বাসের সূত্রে ইবন কাসীর শব্দটির অর্থ বলেন বড় পারিশ্রমিক: তারা নিজেদের মধ্যে চাঁদা তুলে তাঁকে দিতে চেয়েছিল, যাতে তিনি তাদের আর ইয়াজূজ-মাজূজের মাঝে একটা বাঁধ গড়ে দেন। প্রস্তাবটা তাদের নিজেদের থেকেই এসেছিল, আর এসেছিল সবার পক্ষ থেকে: গোটা এক জনগোষ্ঠী নিজেদের সম্পদ এক করে নিজেদের নিরাপত্তা কিনতে চাইছে।"
          },
          {
            "en": "The word itself carries a fine distinction. al-Baghawi and al-Qurtubi note the reading 'kharaj' beside 'kharj,' and record Abu Amr's difference: kharj is what you give of your own accord, kharaj what is imposed on you; al-Azhari glosses kharaj as a levy, tribute or tax. Whichever reading is taken, the people are offering payment from their own wealth for a service to be rendered, a lawful transaction and not a bribe to bend a ruler.",
            "bn": "শব্দটার ভেতরেই একটা সূক্ষ্ম পার্থক্য আছে। বাগভী ও কুরতুবী ‘খরজ’-এর পাশাপাশি ‘খারাজ’ কিরাআতের কথাও বলেন, আর আবু আমরের করা পার্থক্যটা তুলে ধরেন: খরজ হলো যা মানুষ নিজের ইচ্ছায় দেয়, আর খারাজ হলো যা তার ওপর চাপিয়ে দেওয়া হয়। আজহারি খারাজের অর্থ বলেন কর, রাজস্ব বা খাজনা। যে কিরাআতই ধরা হোক, লোকেরা নিজেদের সম্পদ থেকে একটা কাজের বিনিময়ে দাম দিতে চাইছে। এটা বৈধ লেনদেন, শাসককে বাঁকানোর জন্য ঘুষ নয়।"
          },
          {
            "en": "as-Sa'di reads the offer as a quiet confession. By proposing to pay, the people admitted that they could not raise the barrier themselves, and recognised that this ruler could; so they set out the reason that drove them, the corruption in the land, and offered him wages to act. Their request is humble, exact, and honest about its own limits.",
            "bn": "সাদী এই প্রস্তাবকে পড়েন এক নীরব স্বীকারোক্তি হিসেবে। দাম দিতে চেয়ে লোকেরা মেনে নিল যে বাঁধটা তারা নিজেরা গড়তে পারবে না, আর বুঝল এই শাসক তা পারেন; তাই তারা যে কারণ তাদের তাড়িয়ে এনেছে তা খুলে বলল, পৃথিবীতে ছড়ানো বিপর্যয়, আর কাজটা করার জন্য তাঁকে পারিশ্রমিক সাধল। তাদের আবেদন বিনয়ী, মেপে বলা, আর নিজের সীমা নিয়ে সৎ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ruler Who Was Not Greedy",
          "bn": "লোভহীন এক শাসক"
        },
        "p": [
          {
            "en": "The request reaches a particular kind of ruler, and the next verse (18:95) records his answer; here we stay with what the appeal itself assumes. as-Sa'di describes Dhul-Qarnayn as a man neither greedy nor covetous of the world, and not a man to neglect the welfare of those under his hand. His aim was reform. The people, in choosing him, had read that character correctly.",
            "bn": "আবেদনটা পৌঁছায় বিশেষ ধরনের এক শাসকের কাছে, আর তাঁর জবাব আছে পরের আয়াতে (১৮:৯৫)। এখানে আমরা শুধু দেখব, আবেদনের ভেতরেই কী ধরে নেওয়া হয়েছে। সাদী যুলকারনায়নের পরিচয় দেন এভাবে: তিনি লোভী নন, দুনিয়ার প্রতি লালায়িতও নন, আর নিজের অধীন মানুষের কল্যাণে উদাসীন থাকার মানুষও নন। তাঁর লক্ষ্য ছিল সংশোধন। লোকেরা তাঁকে বেছে নিয়ে তাঁর এই চরিত্র ঠিকই চিনেছিল।"
          },
          {
            "en": "Ibn Kathir notes that he would answer them with kindness, righteousness and good intention. as-Sa'di supplies the ground of it: what his Lord had established him in was better for him than any tribute they could gather, and he thanked his Lord for that empowerment and ability. The strength a just ruler leans on is a trust he holds, not a prize he puts up for sale.",
            "bn": "ইবন কাসীর বলেন, তিনি তাদের জবাব দিতেন দয়া, সততা আর সৎ নিয়ত নিয়ে। সাদী তার ভিত্তিটা জোগান দেন: তাঁর রব তাঁকে যে সামর্থ্যে প্রতিষ্ঠিত করেছেন তা তাদের জড়ো করা যেকোনো করের চেয়ে তাঁর জন্য উত্তম, আর সেই ক্ষমতা ও সামর্থ্যের জন্য তিনি রবের শুকরিয়া আদায় করেছিলেন। ন্যায়পরায়ণ শাসক যে শক্তির ওপর ভর করেন, তা এক আমানত যা তিনি বহন করেন, বিক্রির জন্য তোলা কোনো পণ্য নয়।"
          },
          {
            "en": "So the verse points forward without yet arriving. It shows a people who have found the right protector, and a protector whose power comes from God; what he will answer them, and how he will build, are the work of the verses that follow. The request has already set the terms: a real need, met by God-given means in an upright hand.",
            "bn": "তাই আয়াত সামনের দিকে ইশারা করে, কিন্তু এখনো পৌঁছায় না। এটি দেখায় এমন এক জাতিকে যারা সঠিক রক্ষাকর্তা পেয়ে গেছে, আর এমন এক রক্ষাকর্তাকে যাঁর শক্তি আসে আল্লাহর কাছ থেকে; তিনি তাদের কী জবাব দেবেন আর কীভাবে গড়বেন, তা পরের আয়াতগুলোর কাজ। আবেদন এরই মধ্যে শর্ত ঠিক করে দিয়েছে: সত্যিকারের প্রয়োজন, আল্লাহর দেওয়া উপায়ে এক সৎ হাতে পূরণ হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming No Living Nation",
          "bn": "জীবিত কোনো জাতিকে নয়"
        },
        "p": [
          {
            "en": "This must be said plainly, in case the verse is misread. Gog and Magog are the scriptural people the tafsir describes, and their full emergence the Prophet placed among the signs of the Hour. The passage licenses nothing against any present-day nation, ethnicity or community. To take the name Gog and Magog and pin it on a living people is to misuse the verse, not to explain it.",
            "bn": "কথাটা সোজাসুজি বলে রাখা দরকার, যাতে কেউ আয়াতটা ভুল না বোঝে। ইয়াজূজ ও মাজূজ ওহিতে বর্ণিত সেই জাতি, তাফসিরে যাদের বিবরণ এসেছে; আর তাদের পুরোপুরি বেরিয়ে আসাকে নবী ﷺ কিয়ামতের নিদর্শনের মধ্যে গণ্য করেছেন। আজকের কোনো জাতি, নৃগোষ্ঠী বা সম্প্রদায়ের বিরুদ্ধে কিছু করার ছাড়পত্র এই আয়াত দেয় না। ইয়াজূজ ও মাজূজের নাম কোনো জীবিত জাতির গায়ে সেঁটে দেওয়া আয়াতের ব্যাখ্যা নয়, অপব্যবহার।"
          },
          {
            "en": "The commentators themselves guarded this line. Ma'arif relays that al-Alusi, in Ruh al-Ma'ani, sharply refuted those who identified the Tatars, or in later hands modern Russia or China, with Gog and Magog, calling it a flagrant error against the sound hadith, since their true emergence comes only after the descent of Isa (AS). Even al-Qurtubi, who thought the Tatars of his own day resembled them, said no more than that they resembled them, or might be their forerunners, never that they were the emergence itself.",
            "bn": "তাফসিরকারেরা নিজেরাই এই সীমা পাহারা দিয়েছেন। মাআরিফ জানায়, আলুসি তাঁর রূহুল মাআনিতে কড়া ভাষায় তাদের খণ্ডন করেছেন, যারা তাতারদের, কিংবা পরবর্তী কালে কেউ কেউ আধুনিক রাশিয়া বা চীনকে ইয়াজূজ ও মাজূজ বলে চিহ্নিত করেছিল। তিনি একে সহিহ হাদিসের বিরুদ্ধে স্পষ্ট ভুল বলেছেন, কারণ তাদের আসল আবির্ভাব হবে কেবল ঈসা (আঃ) নেমে আসার পরে। এমনকি কুরতুবী, যিনি নিজের যুগের তাতারদের এদের মতো মনে করতেন, তিনিও এর বেশি বলেননি যে তারা এদের মতো, কিংবা হয়তো এদের অগ্রদূত। তারাই যে সেই আবির্ভাব, এমন কথা তিনি কখনো বলেননি।"
          },
          {
            "en": "The early reports that tied a branch of them to peoples the commentators knew do not license the reverse move. A settled, living nation is not to be branded with this name and then treated as fair game. The verse speaks only of what it names; it hands no reader a warrant against any people now walking the earth.",
            "bn": "প্রথম যুগের কিছু বর্ণনা এদের একটা শাখাকে তাফসিরকারদের চেনা কয়েকটি জাতির সঙ্গে মিলিয়েছিল। কিন্তু তাতে উল্টো দিকে হাঁটার সুযোগ তৈরি হয় না। থিতু হয়ে বাস করা কোনো জীবিত জাতির গায়ে এই নামের তকমা লাগিয়ে তাদের ওপর যা খুশি করা চলে না। আয়াত যা বলার তা-ই বলে। আজ পৃথিবীতে বেঁচে থাকা কোনো জাতির বিরুদ্ধে কোনো পাঠকের হাতে সে ছাড়পত্র তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeking Shelter the Right Way",
          "bn": "আশ্রয় খোঁজার সঠিক উপায়"
        },
        "p": [
          {
            "en": "Read as it stands, the request is a small lesson in how to meet a danger. The people know their limits and say so. They name the threat exactly, instead of nursing it in silence. They seek out someone abler and upright, rather than despairing or lying down before it. And they offer to carry their fair share of the cost. Nothing here is passive, and nothing here is a bribe.",
            "bn": "আয়াতটা যেমন আছে তেমন পড়লেই দেখা যায়, এই আবেদন বিপদের মোকাবিলা করার এক ছোট্ট শিক্ষা। লোকেরা নিজেদের সীমাবদ্ধতা জানে, আর তা স্বীকারও করে। বিপদটা কী, তা তারা ঠিকঠাক খুলে বলে, চুপচাপ মনের ভেতর পুষে রাখে না। হতাশ হয়ে বা বিপদের কাছে হার মেনে বসে না থেকে তারা খুঁজে নেয় নিজেদের চেয়ে সক্ষম, সৎ একজনকে। আর খরচের ন্যায্য ভাগটা নিজেরাই বহন করতে চায়। এখানে হাত গুটিয়ে বসে থাকা নেই, ঘুষও নেই।"
          },
          {
            "en": "The barrier they ask for is a shared work: they bring the need and the funding, he brings the means God placed in his hand. Protection, in this scene, is neither magic nor a purchase; it is a just capability, sought by people humble enough to ask and honest enough to pay. The Qur'an lets that exchange stand as a model before it shows the wall rise.",
            "bn": "তারা যে প্রাচীর চায়, তা দুই পক্ষের মিলিত কাজ। তারা আনে প্রয়োজন আর খরচ, তিনি আনেন সেই উপায়, যা আল্লাহ তাঁর হাতে দিয়েছেন। এই দৃশ্যে নিরাপত্তা জাদুও নয়, টাকায় কেনা জিনিসও নয়। এ হলো ন্যায়ের পথে চালিত সামর্থ্য, আর তা চেয়ে নেয় এমন মানুষেরা, যাদের চাইবার বিনয় আছে, দাম চুকানোর সততাও আছে। প্রাচীর ওঠার দৃশ্য দেখানোর আগে কুরআন এই লেনদেনটাকে আদর্শ হিসেবে সামনে রেখে দেয়।"
          },
          {
            "en": "So the question the verse leaves with a reader is quiet and practical. When something presses that I cannot hold off alone, do I find the capable, upright help God has set within my reach, and carry my part of the load? Or do I sink into helplessness, or hunt for a shortcut to buy? The people between the mountains chose the harder, cleaner path.",
            "bn": "তাই আয়াতটা পাঠকের সামনে একটা শান্ত, বাস্তব প্রশ্ন রেখে যায়। যে বিপদ আমি একা ঠেকাতে পারি না, তা যখন চেপে বসে, তখন আল্লাহ আমার নাগালে যে সক্ষম ও সৎ সাহায্য রেখেছেন, আমি কি তা খুঁজে নিই, আর বোঝার নিজের ভাগটা কাঁধে তুলি? নাকি অসহায় হয়ে ভেঙে পড়ি, কিংবা টাকা দিয়ে কেনা যায় এমন কোনো সহজ রাস্তা খুঁজি? দুই পাহাড়ের মাঝের মানুষগুলো বেছে নিয়েছিল কঠিন, কিন্তু পরিচ্ছন্ন পথটাই।"
          }
        ]
      }
    ]
  },
  "18:99": {
    "sections": [
      {
        "h": {
          "en": "Where the Story Turns",
          "bn": "যেখানে গল্প মোড় নেয়"
        },
        "p": [
          {
            "en": "The account of Dhul-Qarnayn has just closed. In 18:98 he looked at the barrier of iron and molten copper he had raised and refused to call it his own triumph: \"This is a mercy from my Lord.\" In the same breath he set its expiry, \"but when the promise of my Lord comes, He will make it level,\" and affirmed that the promise is true. Al-Baghawi notes that the emergence of Gog and Magog, once that wall falls, is itself among the signs that the Hour has drawn near. Verse 99 walks straight through that opening, from a worldly protection destined to end toward the gathering that ends everything.",
            "bn": "যুলক্বারনায়নের কাহিনি এইমাত্র শেষ হলো। ১৮:৯৮ আয়াতে তিনি নিজের গড়া লোহা আর গলিত তামার প্রাচীরের দিকে তাকিয়ে একে নিজের বিজয় বলতে রাজি হননি। তিনি বললেন, ‘এ আমার রবের এক রহমত।’ পরক্ষণেই তিনি তার মেয়াদও বেঁধে দিলেন, ‘আমার রবের ওয়াদার সময় এলে তিনি একে মাটির সঙ্গে মিশিয়ে দেবেন,’ আর জানালেন সেই ওয়াদা সত্য। বাগাভী বলছেন, প্রাচীর ভেঙে পড়ার পর ইয়াজূজ-মা’জূজের বেরিয়ে আসাটাই কিয়ামত ঘনিয়ে আসার একটি নিদর্শন। ৯৯ নম্বর আয়াত ঠিক সেই খোলা দরজা দিয়েই এগিয়ে যায়, মেয়াদ-বাঁধা এক দুনিয়াবি নিরাপত্তা থেকে সেই সমাবেশের দিকে, যা সবকিছুর ইতি টানে।"
          },
          {
            "en": "So the surah does not linger on the engineering. The wall that could not be climbed or pierced was never the point; its guaranteed collapse was. At-Tabari reads the \"day\" of this verse as the day God's promise arrives, when He levels the mountains and scatters them and leaves the earth a bare, flat plain. The lens pulls back from one king's project to the whole of creation, and the tense shifts from a finished story to a certain future. What looked like the climax of a hero's journey turns out to be a doorway onto the Day.",
            "bn": "তাই সূরা প্রাচীর বানানোর কৌশল নিয়ে থেমে থাকে না। যে দেয়াল টপকানো বা ভেদ করা যেত না, সেটাই আসল কথা ছিল না। আসল কথা ছিল তার নিশ্চিত ভেঙে পড়া। তাবারী এই আয়াতের ‘সেদিন’-কে পড়েন আল্লাহর ওয়াদার সময় আসার দিন হিসেবে, যেদিন তিনি পাহাড়গুলোকে গুঁড়িয়ে উড়িয়ে দেবেন আর জমিনকে ছেড়ে দেবেন খোলা সমতল মাঠ করে। দৃষ্টি এক বাদশাহর কীর্তি থেকে সরে গোটা সৃষ্টির দিকে যায়, আর ভাষা একটি শেষ হওয়া গল্প থেকে বদলে যায় এক নিশ্চিত ভবিষ্যতে। যা এক বীরের যাত্রার চূড়া বলে মনে হচ্ছিল, তা আসলে সেই দিনের দিকে খোলা এক দরজা।"
          },
          {
            "en": "The pivot matters for how we read what came before. Dhul-Qarnayn's whole career — the reach to the setting and the rising of the sun, the justice he dealt out, the wall he sealed with copper — was a display of God-given power used well. And the surah lets none of it stand as an end in itself. The very moment his greatest work is described, its expiry is announced, and the next line is already speaking of the Hour. Power, even the most rightly used, is shown here holding the door for something larger than itself.",
            "bn": "আগের অংশটা কীভাবে পড়ব, তার জন্যও এই মোড়টা জরুরি। যুলক্বারনায়নের গোটা জীবন ছিল আল্লাহর দেওয়া শক্তির সঠিক ব্যবহারের নমুনা: সূর্যের অস্ত ও উদয়ের প্রান্ত পর্যন্ত পৌঁছানো, তাঁর ইনসাফ, তামা দিয়ে গাঁথা সেই প্রাচীর। তবু সূরা এর কোনোটিকেই শেষ লক্ষ্য হয়ে থাকতে দেয় না। তাঁর সবচেয়ে বড় কীর্তির কথা বলামাত্রই জানিয়ে দেওয়া হলো তার মেয়াদ, আর পরের কথাটাই কিয়ামত নিয়ে। শক্তি, তা যতই সঠিকভাবে ব্যবহার হোক, এখানে নিজের চেয়ে বড় এক ঘটনার দিকে পথ দেখিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Waves Are These",
          "bn": "এই ঢেউ কাদের"
        },
        "p": [
          {
            "en": "\"And We will leave them that day surging over one another.\" The commentators split on who \"them\" are, and the split is a real one. One reading keeps the pronoun on Gog and Magog: on the day the barrier opens, they pour out in such numbers that they surge one into another. Al-Muyassar takes this plainly, reading them as left \"mixed together, from their multitude.\" Ma'arif al-Qur'an calls it the obvious sense, this being their state as they hasten down from the heights. Ibn Kathir, citing as-Suddi, has them surging over mankind itself when they emerge, an event he places before the Day of Resurrection and after the Dajjal.",
            "bn": "‘আমি তাদেরকে সেদিন এমন অবস্থায় ছেড়ে দেব যে, তারা একদল আরেক দলের উপর তরঙ্গমালার মতো পড়বে।’ ‘তারা’ বলতে কারা, তা নিয়ে তাফসীরকারেরা দুই ভাগ হয়েছেন, আর মতভেদটা সত্যিকারের। এক ব্যাখ্যায় ‘তারা’ মানে ইয়াজূজ-মা’জূজ। প্রাচীর খুলে যাওয়ার দিন তারা এত বিপুল সংখ্যায় বেরিয়ে আসবে যে একে অন্যের সঙ্গে মিশে ঢেউয়ের মতো আছড়ে পড়বে। মুয়াসসার সোজা কথায় বলছেন, সংখ্যার আধিক্যে তারা একে অন্যের সঙ্গে মিশে থাকবে। মাআরিফুল কুরআন একেই স্পষ্ট অর্থ বলেছে: উঁচু জায়গা থেকে দ্রুত নেমে আসার সময় এটাই হবে তাদের অবস্থা। ইবন কাসীর সুদ্দীর সূত্রে বলেন, বেরিয়ে এসে তারা মানুষের উপরই আছড়ে পড়বে; এ ঘটনাকে তিনি রাখেন দাজ্জালের পরে, কিয়ামতের আগে।"
          },
          {
            "en": "The other reading moves the pronoun to all creation on the Day itself. At-Tabari's own gloss is this: God leaves His servants that day so that their jinn mix with their mankind. Ibn Kathir reports it from Ibn Abbas, \"the jinn and mankind, surging one into another,\" and from Ibn Zayd, who calls the verse the very beginning of the Resurrection. Al-Qurtubi lays out three views and ranks them: he finds the reading that they are Gog and Magog at the wall's completion the most apparent, calls the all-creation reading good because the Resurrection was just mentioned, and treats the \"surging loose in the world\" reading as the most far-fetched.",
            "bn": "অন্য ব্যাখ্যায় ‘তারা’ মানে কিয়ামতের দিনের গোটা সৃষ্টি। তাবারীর নিজের ব্যাখ্যা এই: সেদিন আল্লাহ তাঁর বান্দাদের এমনভাবে ছেড়ে দেবেন যে তাদের জিন মানুষের সঙ্গে মিশে যাবে। ইবন কাসীর এ মত আনেন ইবন আব্বাস (রাঃ)-এর সূত্রে, ‘জিন আর মানুষ একে অন্যের ভেতর ঢেউয়ের মতো আছড়ে পড়বে,’ আর ইবন যায়দের সূত্রে, যিনি এই আয়াতকে বলেন কিয়ামতের একেবারে শুরু। কুরতুবী তিনটি মত সাজিয়ে সেগুলোর মধ্যে তুলনা করেন। তাঁর কাছে সবচেয়ে স্পষ্ট মনে হয় এই ব্যাখ্যা যে, এরা ইয়াজূজ-মা’জূজ, প্রাচীরের কাজ শেষ হওয়ার সময়কার কথা। গোটা সৃষ্টির ব্যাখ্যাকে তিনি ভালো বলেন, কারণ ঠিক আগেই কিয়ামতের কথা এসেছে। আর ‘দুনিয়ায় ছড়িয়ে পড়া’র ব্যাখ্যাকে তিনি সবচেয়ে দূরের সম্ভাবনা মনে করেন।"
          },
          {
            "en": "As-Sa'di holds both without deciding. The pronoun may return to Gog and Magog, surging from their sheer numbers as in 21:96, or it may return to all creation gathered on the Day, surging from the terrors and the vast earthquakes; and he reads the verses that follow, the Horn and the gathering, as evidence for the second. It is not the reader's task to force one. Both readings are carried in the tafsir, resting on the same words, and the verse is wide enough to hold them together rather than one at the cost of the other.",
            "bn": "সাদী দুটো ব্যাখ্যাই রাখেন, কোনোটাকে চূড়ান্ত করেন না। ‘তারা’ হতে পারে ইয়াজূজ-মা’জূজ, যারা নিজেদের বিপুল সংখ্যার কারণে ঢেউয়ের মতো আছড়ে পড়বে, যেমন ২১:৯৬ আয়াতে এসেছে। আবার হতে পারে কিয়ামতের দিন জড়ো হওয়া গোটা সৃষ্টি, যারা ভয়ংকর আতঙ্ক আর প্রচণ্ড ভূমিকম্পে একে অন্যের উপর আছড়ে পড়বে। পরের আয়াতগুলোর শিঙ্গা আর সমাবেশকে তিনি দ্বিতীয় অর্থের পক্ষে দলিল মনে করেন। কোনো একটিকে জোর করে বেছে নেওয়া পাঠকের কাজ নয়। দুটো ব্যাখ্যাই তাফসীরে আছে, দুটোই একই শব্দের উপর দাঁড়ানো। আয়াতের পরিসর এত প্রশস্ত যে একটিকে বাদ না দিয়ে দুটোকেই সে ধারণ করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sea of People",
          "bn": "মানুষের সমুদ্র"
        },
        "p": [
          {
            "en": "The verb yamūj is the motion of the sea. Al-Baghawi explains it as entering one upon another \"like the waves of water,\" a crowd so dense with numbers that individuals lose their edges and merge. Al-Qurtubi presses the image further: the wave here is a borrowed picture for bewilderment and confusion, people churning against one another like those distracted by dread and fear, just as the sea's own swells collide. The word does not describe an orderly march but a mass that has lost its footing and moves only as it is pushed.",
            "bn": "‘ইয়ামূজ’ ক্রিয়াটি সমুদ্রের দোলা বোঝায়। বাগাভী এর ব্যাখ্যা করেন একে অন্যের ভেতর ঢুকে পড়া, ‘পানির ঢেউয়ের মতো।’ ভিড় এত ঘন যে আলাদা আলাদা মানুষকে আর চেনা যায় না, সবাই মিশে একাকার। কুরতুবী ছবিটাকে আরও এগিয়ে নেন। তাঁর মতে এখানে ঢেউ ধার করা এক উপমা, যা বোঝায় দিশেহারা ভাব আর বিভ্রান্তি। ভয় আর আতঙ্কে হতবুদ্ধি মানুষ একে অন্যের সঙ্গে ধাক্কা খাবে, ঠিক যেমন সমুদ্রের ঢেউ একে অন্যের গায়ে আছড়ে পড়ে। শব্দটি কোনো সুশৃঙ্খল মিছিলের ছবি আঁকে না। আঁকে এমন এক জনস্রোতের ছবি, যার পায়ের নিচের মাটি সরে গেছে, যে চলে কেবল ধাক্কা খেয়ে।"
          },
          {
            "en": "It is a precise word for a crowd stripped of the props that usually keep it in rank. On an ordinary day, people move by roads and names, by appointments and standing. This verse shows all of that gone: no lane holds, no rank keeps its place, and the multitude moves the way water moves, driven by a force outside itself. Whether the sea is Gog and Magog spilling from the broken wall or all of us assembled for the Day, the helplessness inside the picture is the same, and it is the point the metaphor was chosen to make.",
            "bn": "শব্দটা একেবারে মাপমতো। সাধারণত যেসব অবলম্বন ভিড়কে সারিতে বেঁধে রাখে, সেগুলো খসে পড়লে জনতার যে দশা হয়, এ তারই ছবি। সাধারণ দিনে মানুষ চলে রাস্তা ধরে, পরিচয় দিয়ে, সময়সূচি আর পদমর্যাদা মেনে। এই আয়াত দেখায়, সেসবের কিছুই আর নেই। কোনো সারি টেকে না, কোনো পদ নিজের জায়গায় থাকে না। জনস্রোত চলে পানির মতো, বাইরের কোনো শক্তির টানে। সমুদ্রটা ভাঙা প্রাচীর থেকে উপচে পড়া ইয়াজূজ-মা’জূজ হোক, কিংবা সেই দিনের জন্য জড়ো হওয়া আমরা সবাই, ছবির ভেতরের অসহায়ত্ব একই। আর এই অসহায়ত্ব বোঝাতেই উপমাটি বেছে নেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wall on a Timer",
          "bn": "মেয়াদ বেঁধে দেওয়া প্রাচীর"
        },
        "p": [
          {
            "en": "The wall's fall is not an accident of history but a scheduled event. Ibn Kathir, glossing the verses just before this one, records the hadith of Zaynab bint Jahsh (RA): the Prophet ﷺ woke alarmed and said, \"None has the right to be worshipped but Allah. Woe to the Arabs from an evil that has drawn near. Today a hole has been opened in the barrier of Gog and Magog like this,\" and he made a circle with his thumb and the finger next to it. Ibn Kathir grades it a sound hadith, recorded by both al-Bukhari and Muslim.",
            "bn": "প্রাচীরের পতন ইতিহাসের কোনো দুর্ঘটনা নয়, আগে থেকে ঠিক করে রাখা ঘটনা। ইবন কাসীর এর ঠিক আগের আয়াতগুলোর ব্যাখ্যায় যায়নাব বিনতে জাহশ (রাঃ)-এর হাদিসটি আনেন। নবী ﷺ ঘুম থেকে শঙ্কিত হয়ে জেগে উঠে বললেন, ‘আল্লাহ ছাড়া কোনো সত্য ইলাহ নেই। ঘনিয়ে আসা এক অনিষ্টের কারণে আরবদের জন্য দুর্ভোগ! আজ ইয়াজূজ-মা’জূজের প্রাচীরে এতটুকু ফুটো খুলে গেছে,’ এই বলে তিনি বুড়ো আঙুল আর তার পাশের আঙুল দিয়ে একটা বৃত্ত বানালেন। ইবন কাসীর একে সহিহ হাদিস বলেছেন, যা বুখারী ও মুসলিম দুজনেই বর্ণনা করেছেন।"
          },
          {
            "en": "Asked whether the righteous would perish along with the rest, the Prophet ﷺ answered, \"Yes, when the evil increases.\" The narration sits exactly where this verse sits, at the seam between a barrier that still holds and the day it gives way. Al-Baghawi's note lands here too: the emergence of Gog and Magog is a marker of the Hour's approach. The mercy Dhul-Qarnayn named in 18:98 was real, and it was always on loan; its scheduled expiry is one of the signs the passage now begins to unfold, and the hadith fixes it to a promise already given.",
            "bn": "নেককার মানুষেরাও কি বাকিদের সঙ্গে ধ্বংস হবে, এ প্রশ্নের জবাবে নবী ﷺ বললেন, ‘হ্যাঁ, যখন অনিষ্ট বেড়ে যাবে।’ এই আয়াত যেখানে দাঁড়িয়ে, বর্ণনাটিও ঠিক সেখানে: এখনো টিকে থাকা প্রাচীর আর তার ভেঙে পড়ার দিনের সন্ধিক্ষণে। বাগাভীর কথাও এখানে খাটে: ইয়াজূজ-মা’জূজের বেরিয়ে আসা কিয়ামত ঘনিয়ে আসার এক আলামত। ১৮:৯৮ আয়াতে যুলক্বারনায়ন যে রহমতের কথা বলেছিলেন, তা সত্যিই রহমত ছিল, তবে বরাবরই তা ছিল ধারে পাওয়া। তার বেঁধে দেওয়া মেয়াদ সেই নিদর্শনগুলোরই একটি, যা এই অংশ এবার একে একে খুলে দেখাতে শুরু করে। আর হাদিসটি একে জুড়ে দেয় আগেই দেওয়া এক ওয়াদার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horn and Its Bearer",
          "bn": "শিঙ্গা ও তার বাহক"
        },
        "p": [
          {
            "en": "\"And the Horn will be blown.\" The commentators are careful about the ṣūr. At-Tabari and Ibn Kathir both anchor it in the report that it is \"a horn that is blown into,\" and both name the one who blows it as the angel Israfil. Al-Muyassar states its purpose in a word: the Horn is blown \"for the resurrection.\" The verb here is passive, nufikha, it is blown, naming no hand at all, because the sound does not belong to any creature's initiative. It comes when God commands it and not a moment before.",
            "bn": "‘আর শিঙ্গায় ফুঁক দেওয়া হবে।’ ‘সূর’ নিয়ে তাফসীরকারেরা খুব সাবধানে কথা বলেন। তাবারী আর ইবন কাসীর দুজনেই নির্ভর করেন সেই বর্ণনার উপর, যেখানে বলা হয়েছে, এটা ‘একটা শিঙ্গা, যাতে ফুঁক দেওয়া হয়।’ দুজনেই বলেন, এতে ফুঁক দেবেন ফেরেশতা ইসরাফীল। মুয়াসসার এক কথায় এর উদ্দেশ্য বলে দেন: শিঙ্গায় ফুঁক দেওয়া হবে ‘পুনরুত্থানের জন্য।’ লক্ষ করুন, ক্রিয়াটি এখানে কর্মবাচ্যে, ‘নুফিখা,’ অর্থাৎ ফুঁক দেওয়া হবে; কারও হাতের নাম নেই। কারণ এই আওয়াজ কোনো সৃষ্টির নিজের ইচ্ছায় আসে না। আল্লাহ যখন হুকুম দেবেন, তখনই আসবে, এক মুহূর্ত আগেও নয়।"
          },
          {
            "en": "As-Sa'di draws the sequence out: when Israfil blows the Horn, God returns the souls to their bodies, then musters them for the standing of the Resurrection. The blast is the hinge between the surging of one world and the gathering of the next. At-Tabari relays further narrations describing the Horn and the several blasts sounded on it, but the wordings there carry no grading I am able to confirm on this verse, so I set them aside and keep to what the commentators plainly agree on: a horn, a named bearer, and a sound that raises the dead.",
            "bn": "সাদী ধাপগুলো খুলে বলেন: ইসরাফীল যখন শিঙ্গায় ফুঁক দেবেন, আল্লাহ রূহগুলো দেহে ফিরিয়ে দেবেন, তারপর কিয়ামতের ময়দানে দাঁড় করানোর জন্য সবাইকে জড়ো করবেন। এই ফুঁকই এক জগতের ঢেউ আর পরের জগতের সমাবেশের মাঝের সংযোগ। তাবারী শিঙ্গা আর তাতে দেওয়া কয়েকটি ফুঁকের বিবরণে আরও কিছু রেওয়ায়েত আনেন। কিন্তু সেসব বর্ণনার কোনো সহিহ-দুর্বল মান আমি এই আয়াতের ক্ষেত্রে নিশ্চিত করতে পারিনি। তাই সেগুলো সরিয়ে রেখে আমি কেবল সেটুকুই ধরছি, যাতে তাফসীরকারেরা স্পষ্টভাবে একমত: একটা শিঙ্গা, নির্দিষ্ট একজন বাহক, আর মৃতদের জাগিয়ে তোলা এক আওয়াজ।"
          }
        ]
      },
      {
        "h": {
          "en": "None Left Behind",
          "bn": "কেউ বাদ পড়বে না"
        },
        "p": [
          {
            "en": "\"And We will assemble them in one assembly.\" At-Tabari reads it flatly: We gathered the whole of creation, then, for the standing of the Reckoning. Ma'arif al-Qur'an specifies who is meant, the entire creation of humans and jinn who were charged with the Shariah, brought together on the plains of the Gathering. Ibn Kathir folds in two further verses to seal the point: that the first and the last are gathered \"for the appointed meeting of a known Day\" (56:49 and 56:50), and, from this same surah, \"We gathered them and left not one of them behind\" (18:47).",
            "bn": "‘অতঃপর আমরা সবাইকে একসঙ্গে একত্রিত করব।’ তাবারী এর সোজা অর্থ করেন: তখন আমরা গোটা সৃষ্টিকে হিসাবের জন্য দাঁড় করাতে জড়ো করলাম। কাদের কথা বলা হচ্ছে, মাআরিফুল কুরআন তা স্পষ্ট করে দেয়: শরীয়তের দায়িত্ব যাদের উপর ছিল, সেই সব মানুষ আর জিন, যাদের হাশরের ময়দানে একসঙ্গে আনা হবে। কথাটা পাকা করতে ইবন কাসীর আরও দুটি আয়াত জুড়ে দেন। একটিতে আছে, আগের ও পরের সবাইকে জড়ো করা হবে ‘এক নির্দিষ্ট দিনের নির্ধারিত সময়ে’ (৫৬:৪৯ ও ৫৬:৫০)। অন্যটি এই সূরারই: ‘আমরা তাদের জড়ো করলাম আর তাদের একজনকেও বাদ দিলাম না’ (১৮:৪৭)।"
          },
          {
            "en": "The doubled word, jamaʿnāhum jamʿan, gathered them a gathering, is the Arabic way of leaving no exceptions. As-Sa'di spells out the roster: the first and the last, the disbeliever and the believer, all mustered to be questioned, reckoned and repaid for their deeds. The surging that opened the verse was a crowd without order; the gathering that closes it is a crowd under total account. It is the same multitude, moved from chaos to standing, from no rank at all to a full and open record. What began as water finding no shape ends as a court in which everyone has a place.",
            "bn": "‘জামাআনাহুম জামআন’, অর্থাৎ জড়ো করলাম পুরোপুরি জড়ো করা। একই শব্দ দুবার এনে আরবি ভাষা বুঝিয়ে দেয়, কেউ বাদ যাবে না। সাদী তালিকাটা খুলে বলেন: আগের ও পরের, কাফির ও মুমিন, সবাইকে দাঁড় করানো হবে প্রশ্ন, হিসাব আর আমলের প্রতিদানের জন্য। আয়াতের শুরুর ঢেউ ছিল সারিহীন এক ভিড়। আয়াতের শেষের সমাবেশ এমন এক ভিড়, যার প্রত্যেকের পুরো হিসাব নেওয়া হবে। জনতা একই, শুধু বিশৃঙ্খলা থেকে এসে দাঁড়িয়েছে হিসাবের কাতারে, কোনো সারি না থাকা থেকে এসে দাঁড়িয়েছে খোলা, পূর্ণ এক আমলনামার সামনে। যা শুরু হয়েছিল আকারহীন পানির মতো, তা শেষ হয় এমন এক আদালতে, যেখানে প্রত্যেকের জায়গা নির্দিষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming No Nation",
          "bn": "কাউকে চিহ্নিত না করা"
        },
        "p": [
          {
            "en": "The tafsir treats Gog and Magog as a reality the Qur'an names, a people whose emergence is a fixed sign of the Hour. It does not treat the verse as a warrant to pin that name on any living nation, tribe or region. The commentators place the event in the unseen future, after the Dajjal and before the Resurrection, when the wall falls, and not on any map a reader could draw today. To read a modern people into the verse is to claim a knowledge the mufassirūn themselves withheld, and to turn a sign of the Hour into a charge against a neighbour.",
            "bn": "তাফসীরের দৃষ্টিতে ইয়াজূজ-মা’জূজ এক বাস্তবতা, কুরআন নিজেই যাদের নাম নিয়েছে। তারা এমন এক জাতি, যাদের বেরিয়ে আসা কিয়ামতের এক নির্ধারিত নিদর্শন। কিন্তু এই নাম আজকের কোনো জীবিত জাতি, গোত্র বা অঞ্চলের গায়ে সেঁটে দেওয়ার ছাড়পত্র হিসেবে তাফসীর আয়াতটিকে দেখে না। তাফসীরকারেরা ঘটনাটিকে রাখেন গায়েবের ভবিষ্যতে, দাজ্জালের পরে ও কিয়ামতের আগে, যখন প্রাচীর ভেঙে পড়বে। আজ কেউ যে মানচিত্র আঁকতে পারে, তার কোথাও নয়। আয়াতের ভেতরে আজকের কোনো জাতিকে খুঁজে পাওয়ার মানে এমন জ্ঞানের দাবি করা, যা তাফসীরকারেরা নিজেরাই দাবি করেননি। এতে কিয়ামতের এক নিদর্শন হয়ে দাঁড়ায় প্রতিবেশীর বিরুদ্ধে অভিযোগ।"
          },
          {
            "en": "What the verse asks of a reader is not identification but expectation. It names a certainty, not a target: a wall that will fall, a horn that will sound, a gathering none escapes. The right response is the Prophet's own, reported by Zaynab (RA), alarm turned toward his own state rather than suspicion turned outward, followed by the settling of his own account before the day its settling passes out of his hands. The verse points the reader inward, to the state he will be gathered in, not outward to a name he can pin on someone else.",
            "bn": "আয়াত পাঠকের কাছে কাউকে শনাক্ত করা চায় না, চায় সামনে যা আসছে তার অপেক্ষা। আয়াত একটি নিশ্চিত ঘটনার কথা বলে, কোনো নিশানার কথা নয়: প্রাচীর ভেঙে পড়বে, শিঙ্গা বাজবে, এমন সমাবেশ হবে যা থেকে কেউ রেহাই পাবে না। সঠিক জবাব সেটাই, যা নবী ﷺ নিজে দেখিয়েছেন, যায়নাব (রাঃ)-এর বর্ণনায়। তাঁর শঙ্কা বাইরের কারও প্রতি সন্দেহ হয়ে ছোটেনি, ফিরে গেছে নিজের অবস্থার দিকে। তারপর আসে নিজের হিসাব মিটিয়ে নেওয়া, সেই দিনের আগেই, যেদিন সে হিসাব আর নিজের হাতে থাকবে না। আয়াত পাঠকের দৃষ্টি ফেরায় ভেতরের দিকে: কোন অবস্থায় তাকে জড়ো করা হবে, সেদিকে। অন্যের গায়ে সাঁটার মতো কোনো নামের দিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Ending Leaves Us",
          "bn": "শেষটা যা রেখে যায়"
        },
        "p": [
          {
            "en": "Set beside its neighbours, the verse gains its edge. Within a few lines the surah will name \"the greatest losers in deeds,\" those whose effort in this life was wasted while they thought they were doing well (18:103 and 18:104). The Horn and the gathering are the setting in which that verdict is read out. Every wall a person raises for safety, and the barrier Dhul-Qarnayn built is the grandest example, is a mercy on a timer; and the verse quietly asks what will remain standing when the loaned things are levelled and the borrower is called.",
            "bn": "আশপাশের আয়াতগুলোর পাশে রেখে পড়লে এই আয়াতের ধার আরও স্পষ্ট হয়। কয়েক আয়াত পরেই সূরা উল্লেখ করবে ‘আমলের দিক থেকে সবচেয়ে ক্ষতিগ্রস্তদের’, যাদের দুনিয়ার সব চেষ্টা বিফলে গেছে, অথচ তারা ভাবত, তারা ভালোই করছে (১৮:১০৩ ও ১৮:১০৪)। শিঙ্গা আর সমাবেশই সেই মঞ্চ, যেখানে এই রায় পড়ে শোনানো হবে। নিরাপত্তার জন্য মানুষ যত দেয়াল তোলে, তার সবই মেয়াদ-বাঁধা রহমত; যুলক্বারনায়নের প্রাচীর তার সবচেয়ে বড় উদাহরণ। আয়াত চুপচাপ প্রশ্ন রেখে যায়: ধারে পাওয়া জিনিসগুলো যখন মাটির সঙ্গে মিশিয়ে দেওয়া হবে, আর ধার নেওয়া মানুষটিকে ডাকা হবে, তখন কী টিকে থাকবে?"
          },
          {
            "en": "The honest answer the passage points to is: only what was sent ahead. When the surging stops and the gathering forms, position, wealth and reputation are left in the crowd behind; what stands with a person is the deeds recorded to their account. So the reflection is not fear for its own sake but redirection. Build, work and protect, for Dhul-Qarnayn did all three and was praised for it; but lean, in the end, on the one thing the Horn does not scatter and the levelling does not touch, the record a servant sends before himself to the Day.",
            "bn": "এই অংশ যে খাঁটি জবাবের দিকে ইশারা করে তা হলো: কেবল যা আগে পাঠানো হয়েছে। ঢেউ থেমে গিয়ে যখন সমাবেশ গড়ে উঠবে, পদ, সম্পদ আর সুনাম পড়ে থাকবে পেছনের ভিড়ে। মানুষের পাশে দাঁড়াবে কেবল তার আমলনামায় লেখা আমল। তাই এই ভাবনার উদ্দেশ্য শুধু ভয় পাওয়া নয়, বরং জীবনের দিক ঠিক করে নেওয়া। গড়ুন, খাটুন, রক্ষা করুন; যুলক্বারনায়ন তিনটিই করেছেন, আর এর জন্য প্রশংসাও পেয়েছেন। তবে শেষ পর্যন্ত ভরসা রাখুন সেই একটি জিনিসের উপর, যা শিঙ্গার ফুঁকে ছড়িয়ে যায় না, আর সব সমান করে দেওয়ার দিনও যাকে ছুঁতে পারে না। সেটি হলো বান্দার আমলনামা, যা সে নিজের আগেই সেই দিনের দিকে পাঠিয়ে দেয়।"
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
          "bn": "সমুদ্র ও কালিমা"
        },
        "p": [
          {
            "en": "Surah al-Kahf closes with two verses that work as a pair. The first, 18:109, gives an image: say, if the sea were ink for the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted, even if We brought the like of it as replenishment. The surah has just spent its length on knowledge — the sleepers whose count only Allah knows, Musa (AS) schooled by a servant given knowledge from Allah, Dhul-Qarnayn's journeys — and now it prices all of it.",
            "bn": "সূরা আল-কাহফ শেষ হয় দুটি আয়াত দিয়ে, যারা জোড় বেঁধে একসঙ্গে কাজ করে। প্রথমটি, ১৮:১০৯, একটি ছবি আঁকে: বলো, আমার রবের কালিমা লেখার জন্য সমুদ্র যদি কালি হতো, তবে আমার রবের কালিমা শেষ হওয়ার আগেই সমুদ্র ফুরিয়ে যেত, যদিও আমি তার মতো আরও এনে জোগান দিতাম। এর আগে পুরো সূরাটাই জ্ঞান নিয়ে: গুহাবাসীরা, যাদের সংখ্যা কেবল আল্লাহই জানেন; মূসা (আঃ), যিনি শিখেছেন আল্লাহর কাছ থেকে জ্ঞান পাওয়া এক বান্দার কাছে; যুলকারনাইনের অভিযাত্রা। আর এখন সূরা সেই সব জ্ঞানকে তার আসল মাপে দাঁড় করায়।"
          },
          {
            "en": "The commentators read the words of my Lord as His knowledge, His decrees, His speech — that which He could say, without end. The image is built for a mind that cannot picture infinity but can picture the sea. Then the verse quietly doubles the impossible: even resupplied with another sea, and another, the ink side fails first. A parallel in 31:27 adds every tree on earth as pens and the sea replenished after it by seven more seas, with the same result: the words of Allah would not run out.",
            "bn": "মুফাসসিরগণ ‘আমার রবের কালিমা’ বলতে বোঝেন তাঁর জ্ঞান, তাঁর ফয়সালা, তাঁর কথা: যা তিনি বলতে পারেন, যার কোনো শেষ নেই। অসীমকে মানুষের মন কল্পনা করতে পারে না, কিন্তু সমুদ্র কল্পনা করতে পারে। ছবিটা সেই মনের জন্যই আঁকা। তারপর আয়াত চুপচাপ অসম্ভবকে দ্বিগুণ করে দেয়: আরেকটা সমুদ্র, তারপর আরও একটা এনে জোগান দিলেও আগে ফুরাবে কালিই। ৩১:২৭ আয়াতে একই রকম ছবি আছে, সেখানে আরও যোগ হয়েছে পৃথিবীর সব গাছ কলম হয়ে যাওয়া, আর সমুদ্রের পরে আরও সাত সমুদ্র কালির জোগান দেওয়া। ফল একই: আল্লাহর কালিমা ফুরাবে না।"
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
            "bn": "এরপর ১৮:১১০ আয়াত এক ঝটকায় অসীম থেকে নেমে আসে মানুষের কাছে; কুরআনে এত তীক্ষ্ণ মোড় কমই আছে: বলো, আমি কেবল তোমাদের মতোই একজন মানুষ, আমার কাছে ওহি পাঠানো হয় যে তোমাদের ইলাহ এক ইলাহ। যে সমুদ্র তাঁর কালিমা ধারণ করতে পারে না, তার কথা শোনার পর শ্রোতা ভাবতেই পারত, এমন রবের রাসূল নিশ্চয়ই মানুষের চেয়ে বেশি কিছু। আয়াত সেই ভাবনার পথ বন্ধ করে দেয়। নবী ﷺ পুরোপুরি আমাদেরই মতো মানুষ। তাঁকে আলাদা করেছে ওহি: খুলে দেওয়া একটি পথ, বদলে দেওয়া কোনো স্বভাব নয়।"
          },
          {
            "en": "The pairing is deliberate theology. Communities that lost their prophets' teaching drifted in one of two directions: deifying the messenger, or dismissing the message because the messenger was human. Setting the limitless words of 18:109 directly beside the mortal messenger of 18:110 blocks both roads at once. The greatness belongs to the One who speaks; the man who delivers the speech eats, sleeps and will die, and his humanity is not a flaw in the message but its proof of reach.",
            "bn": "এই জোড় বাঁধা ভেবেচিন্তেই, এর পেছনে আকীদার শিক্ষা আছে। যেসব জাতি তাদের নবীদের শিক্ষা হারিয়েছে, তারা দুই দিকের কোনো এক দিকে সরে গেছে: হয় রাসূলকে উপাস্য বানিয়েছে, নয়তো রাসূল মানুষ বলে তাঁর বার্তাকেই নাকচ করেছে। ১৮:১০৯ আয়াতের সীমাহীন কালিমার ঠিক পাশে ১৮:১১০ আয়াতের মরণশীল রাসূলকে রেখে কুরআন দুটি পথই একসঙ্গে বন্ধ করে দেয়। মহত্ত্ব তাঁরই, যিনি কথা বলেন। যে মানুষটি সেই কথা পৌঁছে দেন, তিনি খান, ঘুমান, একদিন মারাও যাবেন। তাঁর মানুষ হওয়া বার্তার কোনো খুঁত নয়, বরং এই বার্তা যে সবার নাগালে, তারই প্রমাণ।"
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
            "bn": "সূরার শেষ বাক্যটি যেন একটা নুসখা: যে তার রবের সাক্ষাৎ আশা করে, সে যেন নেক আমল করে এবং তার রবের ইবাদতে কাউকে শরীক না করে। ইবনে কাসীর এখান থেকে আমল কবুল হওয়ার দুটি শর্ত বের করেন। এক, আমলটি হতে হবে ‘সালিহ’, অর্থাৎ সঠিক: আল্লাহ তাঁর রাসূল ﷺ-এর মাধ্যমে যে বিধান দিয়েছেন, তার সঙ্গে মিল রেখে। দুই, তা হতে হবে খাঁটিভাবে কেবল আল্লাহর জন্য, তাতে আর কারও ভাগ থাকবে না। এই দুটির যেকোনো একটি না থাকলেই আমল বাতিল হয়ে যেতে পারে।"
          },
          {
            "en": "The phrase worth weighing is whoever hopes. The verse does not say whoever is certain of meeting his Lord, nor whoever fears. Hope is the workable minimum: if the meeting is even your aspiration, this is the road. The address thereby includes the struggling believer whose conviction flickers. What is asked of hope is not intensity of feeling but that it change what the hands do — righteous work — and what the heart serves — Allah without partner.",
            "bn": "যে কথাটা ভেবে দেখার মতো তা হলো ‘যে আশা করে’। আয়াত বলেনি, যে তার রবের সাক্ষাতে নিশ্চিত; এ-ও বলেনি, যে ভয় করে। আশাই এখানে ন্যূনতম শর্ত, যা দিয়ে কাজ চলে: সাক্ষাৎ যদি আপনার আকাঙ্ক্ষাটুকুও হয়, তবে পথ এটাই। তাই এই আহ্বানে সেই মুমিনও আছেন, যিনি নিজের সঙ্গে লড়ছেন, যাঁর বিশ্বাস মাঝে মাঝে কেঁপে ওঠে। আশার কাছে তীব্র আবেগ চাওয়া হচ্ছে না। চাওয়া হচ্ছে, আশা যেন হাতের কাজ বদলে দেয়, যাতে তা হয় নেক আমল; আর হৃদয়ের আনুগত্য বদলে দেয়, যাতে তা হয় কেবল শরীকহীন আল্লাহর জন্য।"
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
            "bn": "সূরার শেষে যে শিরক থেকে দূরে থাকতে বলা হয়েছে, তা কেবল মূর্তিপূজা নয়। মুসলিম আবু হুরাইরা (রাঃ) থেকে একটি হাদিসে কুদসী বর্ণনা করেছেন: আল্লাহ বলেন, ‘আমি অংশীদারদের অংশীদারিত্ব থেকে সম্পূর্ণ অমুখাপেক্ষী। যে এমন আমল করে, যাতে সে আমার সঙ্গে অন্য কাউকে শরীক করে, আমি তাকে ও তার শিরককে ছেড়ে দিই।’ পূর্ববর্তী আলিমগণ ১৮:১১০ আয়াতকে এই হাদিসের পাশে রেখে পড়েন। কেউ দেখছে জেনে আমলে যে বাড়তি চাকচিক্য আসে, সুনামের দিকে হেলে থাকা যে ইবাদত, সবই ইবাদতে শরীক করার মধ্যে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Majesty and a Doable Path",
          "bn": "মহিমা আর সাধ্যের পথ"
        },
        "p": [
          {
            "en": "The note this article expands observes that infinite majesty and a clear, doable path stand side by side. That adjacency is the lived instruction. Contemplating 18:109 alone can end in paralysis — what could my small deeds matter against words that outlast oceans? Contemplating 18:110 alone can shrink religion to a checklist. Read as one breath, the pair says: the One you serve is beyond all measure, and what He asks of you today is measurable — sound work, clean intention.",
            "bn": "এই লেখা যে নোট থেকে বিস্তারিত হয়েছে, সেখানে বলা হয়েছিল: অসীম মহিমা আর স্পষ্ট, সাধ্যের মধ্যে থাকা একটি পথ এখানে পাশাপাশি দাঁড়িয়ে। এই পাশাপাশি থাকাটাই জীবনে মেনে চলার শিক্ষা। শুধু ১৮:১০৯ নিয়ে ভাবলে মন অবশ হয়ে যেতে পারে: যে কালিমা সমুদ্রকেও ছাড়িয়ে যায়, তার সামনে আমার ছোট্ট আমলের কী-ই বা দাম? আবার শুধু ১৮:১১০ নিয়ে ভাবলে দ্বীন ছোট হয়ে টিক দেওয়ার একটা তালিকায় আটকে যেতে পারে। দুটো আয়াত এক নিঃশ্বাসে পড়লে কথাটা দাঁড়ায়: আপনি যাঁর ইবাদত করেন, তিনি সব মাপের ঊর্ধ্বে; আর আজ আপনার কাছে তিনি যা চান, তা মাপা যায়, সঠিক আমল আর খাঁটি নিয়ত।"
          },
          {
            "en": "A concrete practice follows the verse's own order. Before a deed, ask the first condition: is this how the Prophet ﷺ taught it? During and after it, ask the second: who was that for? The second audit stings more, and repeating it is itself the work. These are the closing lines of a surah recited weekly by many Muslims on Friday; the recitation returns the questions to the reader at a rhythm frequent enough that the answers cannot ossify.",
            "bn": "আয়াতের নিজের ক্রম ধরেই একটা বাস্তব অভ্যাস গড়ে নেওয়া যায়। আমলের আগে প্রথম শর্তটা নিজেকে জিজ্ঞেস করুন: নবী ﷺ কি এভাবেই শিখিয়েছেন? আমলের মাঝে ও পরে দ্বিতীয়টা: কাজটা কার জন্য ছিল? দ্বিতীয় হিসাবটাই বেশি গায়ে লাগে, আর বারবার এই হিসাব নেওয়াটাই আসল কাজ। এগুলো সেই সূরার শেষ আয়াত, যা বহু মুসলিম প্রতি শুক্রবার তিলাওয়াত করেন। ফলে প্রশ্নগুলো এত ঘনঘন পাঠকের কাছে ফিরে আসে যে উত্তরগুলো জমে পাথর হয়ে যাওয়ার সুযোগ পায় না।"
          }
        ]
      }
    ]
  }
});
