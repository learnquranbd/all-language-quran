/**
 * Tadabbur long-form articles — surah 56.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "56:60": {
    "sections": [
      {
        "h": {
          "en": "One Argument, Six Verses",
          "bn": "একটি যুক্তি, ছয় আয়াত"
        },
        "p": [
          {
            "en": "This verse is a step in an argument that begins at 56:57 and closes at 56:62. 56:57 states the thesis: We created you, so why do you not affirm the truth? 56:58 and 56:59 press it on the drop a man emits — is it you who creates it, or are We the Creator? Then death enters, and 56:62 closes: you have known the first creation, so will you not remember?",
            "bn": "এই আয়াতটি এমন এক যুক্তির ধাপ, যা শুরু হয় 56:57-এ আর শেষ হয় 56:62-এ। 56:57 মূল কথাটি রাখে: আমিই তোমাদের সৃষ্টি করেছি, তবে তোমরা সত্য মেনে নাও না কেন? 56:58 ও 56:59 সেটিকে চেপে ধরে মানুষের নির্গত শুক্রবিন্দুর প্রসঙ্গে — তোমরা কি তা সৃষ্টি কর, নাকি আমিই স্রষ্টা? এরপর আসে মৃত্যুর কথা, আর 56:62 শেষ করে: তোমরা প্রথম সৃষ্টি সম্পর্কে জেনেছ, তবু কি অনুধাবন করবে না?"
          },
          {
            "en": "56:63 then opens a fresh sign, the crops you sow, so the unit ends at 62. Reading the verse inside that unit changes it. It is not placed here as a meditation on mortality. It is the second exhibit in a case about who controls the beginning and the end of a life, offered to people who accepted the beginning and denied that there could be a second one.",
            "bn": "এরপর 56:63 নতুন একটি নিদর্শন শুরু করে — তোমরা যে ফসল বোনো, সেটির প্রসঙ্গ; তাই অংশটি ৬২ আয়াতেই শেষ। এই অংশের ভেতরে রেখে পড়লে আয়াতটির চেহারা বদলে যায়। এটি এখানে মৃত্যু নিয়ে ভাবনার জন্য বসানো হয়নি। এটি সেই মামলার দ্বিতীয় প্রমাণ, যার বিষয় হলো জীবনের শুরু ও শেষ কার হাতে — আর তা পেশ করা হয়েছে এমন মানুষদের সামনে, যারা শুরুটা মেনে নিয়েও দ্বিতীয় কোনো শুরুর সম্ভাবনা অস্বীকার করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "We Measured It Out",
          "bn": "আমিই তা মেপে দিয়েছি"
        },
        "p": [
          {
            "en": "Nahnu qaddarna baynakumu al-mawt. The pronoun nahnu is placed before the verb, and in Arabic that fronting restricts the act to the one named — the same pronoun that carried the challenge of 56:59, or are We the Creator. The verb is from qadar, to measure out an amount, rather than merely to permit or to schedule. What is claimed is not only that death happens but that its quantity was set.",
            "bn": "নাহনু কাদ্দারনা বাইনাকুমুল-মাউত। সর্বনাম 'নাহনু' বসানো হয়েছে ক্রিয়ার আগে, আর আরবিতে এই অগ্রবর্তন কাজটিকে কেবল উল্লিখিত সত্তার মধ্যেই সীমাবদ্ধ করে — এই একই সর্বনাম 56:59-এর চ্যালেঞ্জটিও বহন করেছিল: নাকি আমিই স্রষ্টা। ক্রিয়াপদটি এসেছে 'কাদার' থেকে, অর্থাৎ পরিমাণ মেপে দেওয়া; কেবল অনুমতি দেওয়া বা সময়সূচি ঠিক করা নয়। দাবিটি কেবল এই নয় যে মৃত্যু ঘটে, বরং এই যে তার পরিমাণ আগেই নির্ধারিত।"
          },
          {
            "en": "Baynakum, among you, is doing quiet work too. The decree is described as distributed across a population rather than fixed as one date for everybody. That is why the deaths around us arrive out of order, the old outliving the young, and why no pattern can be extracted from them. Each portion was measured separately, and the measuring was not published.",
            "bn": "'বাইনাকুম' অর্থাৎ 'তোমাদের মধ্যে' — এই শব্দটিও নীরবে কাজ করছে। ফয়সালাটিকে বর্ণনা করা হয়েছে একটি জনগোষ্ঠীর মধ্যে বণ্টিত হিসেবে, সবার জন্য একটিমাত্র তারিখ হিসেবে নয়। এ কারণেই আমাদের চারপাশের মৃত্যুগুলো ক্রম মেনে আসে না, বৃদ্ধ বেঁচে থাকেন তরুণের চেয়ে বেশি, আর এ কারণেই এর ভেতর থেকে কোনো নিয়ম বের করা যায় না। প্রতিটি ভাগ আলাদাভাবে মাপা হয়েছে, আর সেই মাপ প্রকাশ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Gets in Front",
          "bn": "কেউ আগে যেতে পারে না"
        },
        "p": [
          {
            "en": "Wa ma nahnu bimasbuqin. Masbuq is the passive participle of sabaqa, to get ahead of, to outstrip, to arrive first. So the clause denies that anything can get in front of Him in this matter — not by evading the appointment, not by bringing it forward, not by outrunning it. The image is a race in which one competitor cannot be overtaken.",
            "bn": "ওয়া মা নাহনু বিমাসবূক্বীন। 'মাসবূক' হলো 'সাবাকা' ক্রিয়ার কর্মবাচ্য বিশেষণ, যার অর্থ আগে বেড়ে যাওয়া, ছাড়িয়ে যাওয়া, আগে পৌঁছানো। অর্থাৎ বাক্যটি অস্বীকার করে যে এ বিষয়ে কেউ তাঁর আগে যেতে পারে — নির্ধারিত সময় এড়িয়ে নয়, তা এগিয়ে এনে নয়, তাকে ছাড়িয়ে দৌড়েও নয়। ছবিটি এমন এক দৌড়ের, যেখানে এক প্রতিযোগীকে কোনোভাবেই পেছনে ফেলা যায় না।"
          },
          {
            "en": "It is worth noticing what the clause does not say. It does not say death is unavoidable, which everyone already grants; the deniers in this passage had just insisted that death is the only certainty there is. It says that the One who set it cannot be forestalled. The subject of the sentence is not our helplessness. It is His unhindered reach.",
            "bn": "বাক্যটি যা বলে না, সেটিও লক্ষণীয়। এটি বলে না যে মৃত্যু অনিবার্য — সে কথা তো সবাই মানে; এই অংশের অস্বীকারকারীরা মাত্রই জোর দিয়ে বলেছিল, মৃত্যুই একমাত্র নিশ্চিত ব্যাপার। এটি বলে, যিনি তা নির্ধারণ করেছেন তাঁকে ঠেকানো যায় না। বাক্যটির বিষয়বস্তু আমাদের অসহায়ত্ব নয়; বিষয়বস্তু হলো তাঁর অবাধ নাগাল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence Crosses the Break",
          "bn": "বাক্যটি আয়াতের সীমা পেরোয়"
        },
        "p": [
          {
            "en": "The verse stops, but the sentence does not. 56:61 begins 'ala an nubaddila amthalakum wa nunshi'akum fi ma la ta'lamun, and that opening attaches directly to masbuqin: We cannot be prevented from changing your likenesses and bringing you into being in what you do not know. The claim about death is only the first half of a claim about replacement.",
            "bn": "আয়াতটি থামে, কিন্তু বাক্যটি থামে না। 56:61 শুরু হয় 'আলা আন নুবাদ্দিলা আমছালাকুম ওয়া নুনশিআকুম ফী মা লা তা'লামূন — আর এই সূচনা সরাসরি যুক্ত হয় 'মাসবূক্বীন'-এর সঙ্গে: তোমাদের সদৃশ সত্তাগুলো বদলে দেওয়া আর তোমরা যা জান না এমন রূপে তোমাদের সৃষ্টি করা থেকে আমাকে ঠেকানো যায় না। মৃত্যু সম্পর্কিত দাবিটি আসলে প্রতিস্থাপন সম্পর্কিত একটি দাবির প্রথমার্ধ মাত্র।"
          },
          {
            "en": "The commentators read that continuation in two ways: that one generation is exchanged for others like it, and that the same people are remade in a form they have no experience of. Either way death has become a hinge rather than a wall. The verse the deniers would have quoted against resurrection turns out, when its sentence is allowed to finish, to be an argument for it.",
            "bn": "মুফাসসিরগণ এই ধারাবাহিকতাকে দুভাবে পড়েন: এক প্রজন্মকে তাদেরই মতো অন্যদের দিয়ে বদলে দেওয়া, এবং সেই একই মানুষদেরই এমন এক রূপে নতুন করে গড়া যার কোনো অভিজ্ঞতা তাদের নেই। যেভাবেই পড়া হোক, মৃত্যু তখন দেয়াল নয়, কব্জা হয়ে ওঠে। যে আয়াতটিকে অস্বীকারকারীরা পুনরুত্থানের বিরুদ্ধে উদ্ধৃত করত, বাক্যটিকে শেষ হতে দিলে সেটিই হয়ে দাঁড়ায় পুনরুত্থানের পক্ষে যুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Closed and What Is Open",
          "bn": "যা বন্ধ আর যা খোলা"
        },
        "p": [
          {
            "en": "Two variables are on the table and the verse settles one of them. The length is measured out and cannot be argued with; 35:11 says the same thing from the other side, that no lifespan is extended or shortened except that it is in a register. Effort spent on that variable is spent on a closed account, however sincerely it is spent.",
            "bn": "টেবিলে দুটি চলক আছে, আর আয়াতটি তার একটির নিষ্পত্তি করে দেয়। আয়ু মেপে দেওয়া, তা নিয়ে তর্কের সুযোগ নেই; 35:11 অন্য দিক থেকে একই কথা বলে — কারও আয়ু বাড়ানো বা কমানো হয় না, তা কিতাবে লেখা থাকা ছাড়া। এই চলকের পেছনে ব্যয় করা প্রচেষ্টা যত আন্তরিকই হোক, তা ব্যয় হয় একটি বন্ধ হিসাবে।"
          },
          {
            "en": "The other variable is untouched by the decree. What is carried to the appointment was never fixed in advance, and the same passage that closes the first opens the second by asking whether we will remember. The certainty of the end is presented as clarifying rather than crushing: one question is answered for us so that our attention can go to the one that is not.",
            "bn": "অন্য চলকটিতে এই ফয়সালা হাত দেয়নি। সেই নির্ধারিত সাক্ষাতে কে কী নিয়ে যাবে, তা আগে থেকে ঠিক করা ছিল না; আর যে অংশটি প্রথম চলকটি বন্ধ করে দেয়, সেই অংশই 'তোমরা কি অনুধাবন করবে না' জিজ্ঞেস করে দ্বিতীয়টি খুলে দেয়। সমাপ্তির নিশ্চয়তাকে উপস্থাপন করা হয়েছে ভেঙে দেওয়ার বদলে স্পষ্ট করে দেওয়া কিছু হিসেবে: একটি প্রশ্নের উত্তর আমাদের হয়ে দিয়ে দেওয়া হয়েছে, যাতে মনোযোগ যেতে পারে সেই প্রশ্নটির দিকে যার উত্তর দেওয়া হয়নি।"
          }
        ]
      }
    ]
  }
});
