/**
 * Tadabbur long-form articles — surah 104.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "104:1": {
    "sections": [
      {
        "h": {
          "en": "Woe, and to Whom",
          "bn": "দুর্ভোগ, আর কার জন্য"
        },
        "p": [
          {
            "en": "Surah al-Humazah opens with a sentence of four words: waylun li-kulli humazatin lumazah. Wayl is the Quran's word of ruin and woe, and here it is not aimed at a named enemy of the Prophet ﷺ but at a type. Li-kulli, to every, makes the address general and therefore inescapable: whoever fits the description is inside the verse, and no biography, tribe or era is exempted from it by the wording.",
            "bn": "সূরা আল-হুমাযাহ শুরু হয় চার শব্দের একটি বাক্য দিয়ে: 'ওয়াইলুল লিকুল্লি হুমাযাতিল লুমাযাহ'। 'ওয়াইল' কুরআনের ধ্বংস ও দুর্ভোগের শব্দ, আর এখানে তা নবী ﷺ-এর নামোল্লিখিত কোনো শত্রুর দিকে নয়, বরং একটি ধরনের দিকে তাক করা। 'লিকুল্লি' অর্থাৎ 'প্রত্যেকের জন্য' — সম্বোধনটিকে সাধারণ করে দেয়, তাই তা এড়ানোর উপায় থাকে না: যে-ই বর্ণনার সঙ্গে মেলে সে-ই আয়াতের ভেতরে, আর শব্দগুলো কোনো জীবনী, গোত্র বা যুগকে ছাড় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Humazah and Lumazah",
          "bn": "হুমাযাহ ও লুমাযাহ"
        },
        "p": [
          {
            "en": "Both words are built on the fu'alah pattern, which in Arabic names a person by a habit rather than by an incident. So the verse is not condemning someone who once made a cruel remark; it is describing a person for whom demeaning others has become a trade. That is why the surah moves straight from this to a man's occupation with his wealth: it is drawing a character, not prosecuting a single sentence spoken on a bad day.",
            "bn": "দুটি শব্দই গঠিত 'ফুআলাহ' ছাঁচে, যা আরবিতে কোনো মানুষকে চিহ্নিত করে একটি ঘটনা দিয়ে নয়, একটি অভ্যাস দিয়ে। তাই আয়াতটি এমন কাউকে দোষারোপ করছে না যে একবার নিষ্ঠুর কোনো মন্তব্য করে ফেলেছে; বরং বর্ণনা করছে এমন একজনকে, যার কাছে মানুষকে হেয় করাই একটি পেশা হয়ে দাঁড়িয়েছে। এ কারণেই সূরাটি এখান থেকে সরাসরি চলে যায় সম্পদ নিয়ে ওই লোকটির ব্যস্ততায়: এটি একটি চরিত্র আঁকছে, খারাপ দিনে বলা একটি বাক্যের বিচার করছে না।"
          },
          {
            "en": "How the two words divide is genuinely disputed, and it is honest to leave it disputed. Ibn Abbas (RA) glossed humazah lumazah together as one who reviles and disgraces people. Mujahid distinguished them by instrument: al-humazah with the hand and the eye, al-lumazah with the tongue. Other early authorities distinguish them by setting, one to the face and one behind the back — and they disagree about which is which. What they all agree on is the habit being condemned.",
            "bn": "শব্দ দুটির বিভাজন নিয়ে প্রকৃত মতভেদ আছে, আর তা মতভেদ হিসেবেই রেখে দেওয়া সৎ কাজ। ইবনে আব্বাস (রাঃ) 'হুমাযাহ লুমাযাহ'-কে একসঙ্গে ব্যাখ্যা করেছেন — যে মানুষকে গালমন্দ করে ও অপদস্থ করে। মুজাহিদ পার্থক্য করেছেন মাধ্যম দিয়ে: 'হুমাযাহ' হাত ও চোখ দিয়ে, আর 'লুমাযাহ' জিহ্বা দিয়ে। প্রাচীন অন্য বর্ণনাকারীরা পার্থক্য করেন প্রেক্ষাপট দিয়ে — একটি সামনাসামনি, অন্যটি পেছনে; আর কোনটি কোনটি তা নিয়েও তাঁরা একমত নন। তাঁরা সবাই যে বিষয়ে একমত, তা হলো নিন্দিত অভ্যাসটি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn to Wealth",
          "bn": "সম্পদের দিকে মোড়"
        },
        "p": [
          {
            "en": "104:2-3 then describe the same man: who gathered wealth and counted it, thinking that his wealth would make him last forever. Ibn Kathir quotes Muhammad ibn Ka'b on the counting: his wealth occupies his time in the day, going from this to that, and then when the night comes he sleeps like a rotting corpse. The surah joins contempt for people to obsession with money as one condition, because both are ways of ranking, and one of them is the ranking spoken aloud.",
            "bn": "এরপর 104:2-3 একই লোকটির বর্ণনা দেয়: যে সম্পদ জমা করে ও তা গুনে রাখে, আর মনে করে তার সম্পদ তাকে চিরস্থায়ী করে দেবে। গণনার প্রসঙ্গে ইবনে কাসীর মুহাম্মাদ ইবনে কা'বের কথা উদ্ধৃত করেন: তার সম্পদ দিনভর তার সময় দখল করে রাখে, এটা থেকে ওটায় ছোটায়; আর রাত এলে সে ঘুমায় পচা লাশের মতো। সূরাটি মানুষের প্রতি অবজ্ঞা আর অর্থের প্রতি আসক্তিকে একই অবস্থার দুই দিক হিসেবে জোড়া দেয় — কারণ দুটিই মর্যাদার ক্রম নির্ধারণের পদ্ধতি, আর তার একটি সেই ক্রমকে মুখে উচ্চারণ করে ফেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hutamah",
          "bn": "আল-হুতামাহ"
        },
        "p": [
          {
            "en": "104:4 refuses the calculation — kalla, no indeed — and says he will surely be flung into al-Hutamah. 104:5 asks what can make you know what it is, and 104:6-7 answer: the kindled fire of Allah, which mounts up over the hearts. Thabit al-Bunani said of that clause that it will burn them all the way to their hearts while they are still alive. The fire is aimed at the organ where contempt was manufactured, not at the tongue that delivered it.",
            "bn": "104:4 হিসাবটি নাকচ করে দেয় — 'কাল্লা', কক্ষনো না — আর বলে, তাকে অবশ্যই আল-হুতামায় নিক্ষেপ করা হবে। 104:5 জিজ্ঞেস করে, তুমি কি জান তা কী; আর 104:6-7 জবাব দেয়: আল্লাহর প্রজ্বলিত আগুন, যা হৃদয়ের ওপর গিয়ে চড়ে। সাবিত আল-বুনানী এই বাক্যাংশ সম্পর্কে বলেন, তা তাদের জীবন্ত অবস্থাতেই পুড়িয়ে হৃদয় পর্যন্ত পৌঁছে যাবে। আগুন তাক করা সেই অঙ্গটির দিকে, যেখানে অবজ্ঞা তৈরি হয়েছিল — যে জিহ্বা তা পৌঁছে দিয়েছিল তার দিকে নয়।"
          },
          {
            "en": "104:8-9 close the door: it is closed in upon them, in columns stretched forth. Al-Awfi reports from Ibn Abbas (RA) that there will be columns over them, chains on their necks, and the gates shut upon them. The name al-Hutamah is itself a description, from crushing, as Ibn Kathir notes: a fire that breaks whatever is put into it. A man who spent a life breaking other people's standing is placed inside something named for exactly that action.",
            "bn": "104:8-9 দরজা বন্ধ করে দেয়: তা তাদের ওপর পরিবেষ্টন করে রাখা হবে, উঁচু উঁচু স্তম্ভে। আওফী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, তাদের ওপরে থাকবে স্তম্ভ, ঘাড়ে থাকবে শিকল, আর দরজাগুলো তাদের ওপর বন্ধ করে দেওয়া হবে। 'আল-হুতামাহ' নামটি নিজেই একটি বর্ণনা, যা এসেছে চূর্ণ করা অর্থ থেকে — ইবনে কাসীর যেমন বলেন: এমন আগুন, যা তার ভেতরে যা রাখা হয় তাকেই ভেঙে ফেলে। যে মানুষ সারা জীবন অন্যের মর্যাদা ভেঙেছে, তাকে রাখা হয় ঠিক সেই কাজের নামে নামকরণ করা জিনিসটির ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Meets 49:11",
          "bn": "49:11-এর সঙ্গে যেখানে মিল"
        },
        "p": [
          {
            "en": "49:11 forbids the believers three things among themselves — ridicule, lamz, and shaming labels — and gives the reason that the one mocked may be better than the mocker. Surah al-Humazah is the same disease seen from the other end: not the act warned against inside a community, but the portrait of a person whose whole manner is made of it. One verse legislates; this surah shows what a life looks like when the legislation is ignored.",
            "bn": "49:11 মুমিনদের নিজেদের মধ্যে তিনটি জিনিস নিষেধ করে — উপহাস, 'লাময', আর অপমানজনক নামে ডাকা — আর কারণ হিসেবে বলে, যাকে উপহাস করা হচ্ছে সে উপহাসকারীর চেয়ে উত্তম হতে পারে। সূরা আল-হুমাযাহ একই রোগ, তবে অন্য প্রান্ত থেকে দেখা: সমাজের ভেতরে সতর্ক করা কোনো কাজ নয়, বরং এমন একজন মানুষের প্রতিকৃতি যার গোটা স্বভাবই তা দিয়ে গড়া। একটি আয়াত বিধান দেয়; আর এই সূরা দেখায়, বিধান উপেক্ষা করলে একটি জীবন দেখতে কেমন হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Test Before Speaking",
          "bn": "বলার আগের পরীক্ষা"
        },
        "p": [
          {
            "en": "Because the surah condemns a habit, the useful question is about frequency rather than severity. Not was that remark cruel, but how often do remarks like it leave me, and who is usually the target. Habits of speech are visible to everyone except their owner, which is why the honest check is to notice who goes quiet around you, and to count how many of your funny stories require somebody to be the fool in them.",
            "bn": "সূরাটি যেহেতু একটি অভ্যাসকে নিন্দা করে, তাই কাজের প্রশ্নটি তীব্রতা নিয়ে নয়, পুনরাবৃত্তি নিয়ে। প্রশ্ন এই নয় যে ওই মন্তব্যটি নিষ্ঠুর ছিল কি না, বরং এই যে — এমন মন্তব্য কত ঘন ঘন আমার মুখ থেকে বের হয়, আর সাধারণত লক্ষ্যবস্তু কে। কথার অভ্যাস তার মালিক ছাড়া সবাই দেখতে পায়; এ কারণেই সৎ যাচাই হলো লক্ষ করা — আপনার আশেপাশে কে চুপ হয়ে যায়, আর আপনার মজার গল্পগুলোর কতটিতে কাউকে না কাউকে বোকা সাজতে হয়।"
          },
          {
            "en": "The surah also removes the excuse that the wealth part is somebody else's problem. Counting is the shared verb: one man counts money, another counts the faults of people, and both are keeping a ledger that makes them feel taller. The correction is the same in both halves — spend some of what is being hoarded, and say aloud something true and good about a person you would normally reduce to a joke.",
            "bn": "সূরাটি এই অজুহাতও কেড়ে নেয় যে সম্পদের অংশটি অন্য কারও সমস্যা। 'গোনা' ক্রিয়াটি দুই জায়গাতেই অভিন্ন: একজন গোনে টাকা, আরেকজন গোনে মানুষের দোষ; দুজনই এমন খাতা রাখে যা তাদের নিজেকে বড় বোধ করায়। সংশোধনও দুই অর্ধেকে একই — যা জমানো হচ্ছে তার কিছু খরচ করুন, আর যাকে সাধারণত রসিকতার পাত্র বানাতেন তার সম্পর্কে সত্য ও ভালো একটি কথা মুখে বলুন।"
          }
        ]
      }
    ]
  },
  "104:8": {
    "sections": [
      {
        "h": {
          "en": "A Door Shut in Three Words",
          "bn": "তিন শব্দে বন্ধ দরজা"
        },
        "p": [
          {
            "en": "Innaha 'alayhim mu'sadah: indeed, it will be closed over them. The Arabic has three words. Innaha joins inna, indeed, to -ha, it; 'alayhim means upon them, or over them; and mu'sadah is the word the commentators gloss as shut, closed over, covering. The verse stands between 104:7, the fire that mounts up over the hearts, and 104:9, in columns stretched out. Those neighbours are named here only to place the verse; 104:9 has its own reading and is not treated in this article.",
            "bn": "ইন্নাহা আলাইহিম মু'সাদাহ: নিশ্চয়ই তা তাদের উপর বন্ধ করে দেওয়া হবে। আরবিতে শব্দ মাত্র তিনটি। ইন্নাহা গঠিত ইন্না (নিশ্চয়ই) আর -হা (তা) মিলে। আলাইহিম মানে তাদের উপর। আর মু'সাদাহ সেই শব্দ, তাফসীরকারেরা যার ব্যাখ্যা করেন বন্ধ, উপর থেকে ঢাকা, ঢেকে রাখা বলে। আয়াতটির আগে আছে ১০৪:৭, যে আগুন হৃদয় পর্যন্ত চড়ে যায়। পরে আছে ১০৪:৯, লম্বা লম্বা স্তম্ভে। প্রতিবেশী আয়াত দুটির কথা এখানে শুধু জায়গা চেনানোর জন্য। ১০৪:৯ আয়াতের নিজস্ব আলোচনা আছে, এ প্রবন্ধে তা ধরা হয়নি।"
          },
          {
            "en": "Short as it is, the verse carries the weight of the whole passage. From 104:4 the surah has been describing al-Hutamah: what it is, whose fire it is, how far it reaches. Here the description stops moving inward and closes. The commentators fetched for this verse spend nearly all their words on the single term mu'sadah, and they do not agree on exactly which picture it draws. That disagreement, and the small linguistic evidence they bring for it, is the matter of most of what follows.",
            "bn": "আয়াতটি ছোট, তবু গোটা অংশের ভার এর উপর। ১০৪:৪ থেকে সূরাটি আল-হুতামার বর্ণনা দিয়ে আসছে: সেটা কী, কার আগুন, কতদূর পৌঁছায়। এখানে এসে বর্ণনা আর ভেতরের দিকে এগোয় না, বন্ধ হয়ে যায়। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, সেগুলোর প্রায় সব কথাই মু'সাদাহ শব্দটিকে ঘিরে। শব্দটি ঠিক কোন ছবি আঁকে, তা নিয়ে তাঁরা পুরোপুরি একমত নন। সেই মতভেদ, আর তার পক্ষে তাঁরা ভাষার যে ছোট ছোট সাক্ষ্য আনেন, সেটাই সামনের বেশিরভাগ আলোচনার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Is, Who They Are",
          "bn": "কী সেটা, কারা তারা"
        },
        "p": [
          {
            "en": "At-Tabari settles both pronouns in a single sentence. Inna al-Hutamata allati wusifat sifatuha, he writes: the -ha is al-Hutamah, whose description has just been given in 104:4 to 104:7. And 'alayhim, upon them, he explains as upon these hammazin and lammazin, the people who mock and slander that 104:1 opened with. The Muyassar keeps the plain pronoun: it is closed over them. Ibn Kathir's English abridgement reads the verse in the same run, straight on from the fire that leaps up over the hearts.",
            "bn": "দুটো সর্বনামের মীমাংসা তাবারী এক বাক্যেই করে দেন। তিনি লেখেন, ইন্নাল হুতামাতাল্লাতী উসিফাত সিফাতুহা: অর্থাৎ -হা মানে আল-হুতামা, যার বর্ণনা এইমাত্র ১০৪:৪ থেকে ১০৪:৭ আয়াতে দেওয়া হলো। আর আলাইহিম, তাদের উপর, এর ব্যাখ্যায় তিনি বলেন, এই হাম্মাযীন ও লাম্মাযীনদের উপর, অর্থাৎ যারা খোঁটা দেয় আর আড়ালে নিন্দা করে, যাদের কথা দিয়ে ১০৪:১ শুরু হয়েছিল। মুয়াসসার সর্বনামটিকে সাদামাটাই রাখে: তা তাদের উপর বন্ধ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও আয়াতটিকে পড়ে একই ধারায়, হৃদয় পর্যন্ত চড়ে যাওয়া আগুনের ঠিক পরের কথা হিসেবে।"
          },
          {
            "en": "That reading keeps the surah in a single line. The woe of 104:1 falls on a character drawn in conduct: the mocker, the slanderer, the man of 104:2 and 104:3 who gathers wealth, counts it and supposes it will keep him forever. The fire is then named, described, and at last shut. The meaning of the name al-Hutamah, and its fit with a life spent breaking others, has already been drawn out in the shipped reflection on 104:1, so it is not rebuilt here. This verse adds only the closing.",
            "bn": "এভাবে পড়লে গোটা সূরা একটানা এক রেখায় চলে। ১০৪:১ আয়াতের ধ্বংসের ঘোষণা পড়েছে আচরণ দিয়ে আঁকা এক চরিত্রের উপর: যে খোঁটা দেয়, যে আড়ালে নিন্দা করে, আর ১০৪:২ ও ১০৪:৩ আয়াতের সেই লোক, যে সম্পদ জমায়, গুনে রাখে, আর ভাবে এই সম্পদই তাকে চিরকাল টিকিয়ে রাখবে। এরপর আগুনের নাম আসে, বর্ণনা আসে, শেষে আসে বন্ধ হয়ে যাওয়া। আল-হুতামা নামের অর্থ, আর অন্যকে ভেঙে দেওয়া জীবনের সঙ্গে তার মিল, ১০৪:১ আয়াতের প্রকাশিত আলোচনায় আগেই এসেছে। তাই এখানে তা আবার গড়া হলো না। এ আয়াত শুধু যোগ করে বন্ধ হওয়ার কথাটা।"
          }
        ]
      },
      {
        "h": {
          "en": "Closed Over, or Shut Fast",
          "bn": "উপর থেকে ঢাকা, নাকি তালাবদ্ধ"
        },
        "p": [
          {
            "en": "Two Arabic words carry most of the glossing. The first is mutbaqah, closed over or covered. At-Tabari gives it as his own explanation, and then lists those he says held the same: Ibn Abbas (RA) through Abu Malik, Atiyyah, al-Hasan, ad-Dahhak, Qatadah and Ibn Zayd, each quoted with the single word mutbaqah. Al-Qurtubi opens with the same gloss and credits it to al-Hasan and ad-Dahhak. The Arabic Ibn Kathir gives mutbaqah too, and says it was already explained under Surat al-Balad.",
            "bn": "ব্যাখ্যার বেশিরভাগ ভার বহন করে আরবি দুটি শব্দ। প্রথমটি মুতবাকাহ, অর্থাৎ উপর থেকে বন্ধ, ঢেকে দেওয়া। তাবারী এটিকে নিজের ব্যাখ্যা হিসেবে দেন, তারপর তাঁদের নাম আনেন যাঁরা তাঁর কথায় একই মত দিয়েছেন: আবু মালিকের সূত্রে ইবন আব্বাস (রাঃ), আতিয়্যা, আল-হাসান, যাহহাক, কাতাদা ও ইবন যায়দ। তাঁদের প্রত্যেকের কথা উদ্ধৃত হয়েছে ওই এক শব্দে, মুতবাকাহ। কুরতুবীও এই ব্যাখ্যা দিয়েই শুরু করেন এবং তা আল-হাসান ও যাহহাকের কথা বলে উল্লেখ করেন। আরবি ইবন কাসীরও মুতবাকাহ বলেন, আর জানান যে সূরা আল-বালাদে এর ব্যাখ্যা আগেই এসেছে।"
          },
          {
            "en": "The second word is mughlaqah, shut, as a door is shut. At-Tabari records it from Ibn Abbas (RA) as well, through a different chain: 'alayhim mughlaqah, shut upon them. Al-Qurtubi gives it as a further reading, introduced with qila, it has been said, and ties it to the speech of Quraysh, closing the note with the words: Mujahid said it. As-Sa'di uses mughlaqah alone. Al-Baghawi sets the two words side by side without choosing, mutbaqah mughlaqah, closed over and shut. Ibn Kathir's English abridgement renders the gloss as covering.",
            "bn": "দ্বিতীয় শব্দটি মুগলাকাহ, অর্থাৎ বন্ধ, যেভাবে দরজা বন্ধ করা হয়। তাবারী এটিও ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, তবে ভিন্ন এক সূত্রে: আলাইহিম মুগলাকাহ, তাদের উপর বন্ধ। কুরতুবী একে আনেন আরেকটি মত হিসেবে, 'কীলা' বা 'বলা হয়েছে' দিয়ে শুরু করে, আর একে কুরাইশের ভাষার সঙ্গে যুক্ত করেন। নোটটি তিনি শেষ করেন এই কথায়: মুজাহিদ এটি বলেছেন। সা'দী শুধু মুগলাকাহ শব্দটিই ব্যবহার করেন। বাগাভী কোনোটা বেছে না নিয়ে দুটি শব্দ পাশাপাশি রাখেন: মুতবাকাহ মুগলাকাহ, উপর থেকে ঢাকা এবং বন্ধ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ব্যাখ্যাটিকে অনুবাদ করে covering, অর্থাৎ ঢেকে রাখা।"
          },
          {
            "en": "The two glosses are close, and none of these commentators sets them against each other; but they are not the same picture. Mutbaqah draws something laid over the people inside, closing them in from above. Mughlaqah draws an exit that has been shut. This article does not choose between them. What is worth noticing is that Ibn Abbas (RA) appears in at-Tabari's list under both words, by two separate chains, so in at-Tabari's own record both readings reach back to a Companion.",
            "bn": "ব্যাখ্যা দুটি কাছাকাছি, আর এই তাফসীরকারদের কেউ একটিকে অন্যটির বিপরীতে দাঁড় করান না। তবু দুটো ছবি এক নয়। মুতবাকাহ আঁকে এমন কিছু, যা ভেতরের লোকদের উপর বিছিয়ে দেওয়া, উপর থেকে তাদের আটকে রাখে। মুগলাকাহ আঁকে বেরোনোর এমন পথ, যা বন্ধ করে দেওয়া হয়েছে। এ প্রবন্ধ এর কোনোটিকেই বেছে নেয় না। তবে লক্ষ করার মতো ব্যাপার হলো, তাবারীর তালিকায় ইবন আব্বাস (রাঃ)-এর নাম দুটো শব্দের নিচেই আছে, দুটি আলাদা সূত্রে। অর্থাৎ তাবারীর নিজের বর্ণনাতেই দুটো ব্যাখ্যা একজন সাহাবি পর্যন্ত পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Language of Doors",
          "bn": "দরজার ভাষা"
        },
        "p": [
          {
            "en": "The commentators also bring the evidence of ordinary speech. At-Tabari closes his list with Ibn Zayd, who after giving mutbaqah adds: the Arabs say awsada al-bab, meaning aghlaqa, he shut the door. Al-Qurtubi reports a second form of the verb from the people of Quraysh: asadtu al-bab, I shut the door. Both notes put the word in the doorway of a house before it is ever applied to the fire. That everyday sense is what lets the verse be heard as a door closing.",
            "bn": "তাফসীরকারেরা সাধারণ কথাবার্তার সাক্ষ্যও হাজির করেন। তাবারী তাঁর তালিকা শেষ করেন ইবন যায়দকে দিয়ে। মুতবাকাহ বলার পর ইবন যায়দ যোগ করেন: আরবরা বলে আওসাদাল বাবা, মানে আগলাকা, সে দরজা বন্ধ করল। কুরতুবী কুরাইশের লোকদের থেকে ক্রিয়াটির আরেকটি রূপ জানান: আসাদতুল বাবা, আমি দরজা বন্ধ করলাম। দুটো কথাই শব্দটিকে আগুনের প্রসঙ্গে আনার আগে ঘরের দরজায় দাঁড় করায়। প্রতিদিনের এই অর্থের কারণেই আয়াতটি কানে বাজে দরজা বন্ধ হওয়ার মতো।"
          },
          {
            "en": "Al-Qurtubi then cites a line of poetry by Ubaydullah ibn Qays ar-Ruqayyat. It speaks of a gazelle within a palace, if only we could enter, with the curtain mu'sad 'alayhi, closed over it. The pairing is the verse's own: the word for shut, joined to 'ala, over, with a pronoun for whoever is kept inside. In the poem the barrier keeps the speaker out; in the verse the same kind of barrier keeps those inside from leaving. The commentators let the parallel stand and draw no further lesson from it.",
            "bn": "এরপর কুরতুবী উবাইদুল্লাহ ইবন কাইস আর-রুকাইয়াতের একটি কবিতার চরণ উদ্ধৃত করেন। চরণটি এক প্রাসাদের ভেতরের এক হরিণীর কথা বলে, আহা, যদি আমরা ভেতরে ঢুকতে পারতাম! কিন্তু পর্দা তার উপর মু'সাদ আলাইহি, বন্ধ করে দেওয়া। জোড়টা আয়াতেরই: বন্ধ বোঝানোর শব্দ, তার সঙ্গে আলা, উপর, আর ভেতরে যে আটকে আছে তার জন্য একটি সর্বনাম। কবিতায় পর্দা বক্তাকে বাইরে আটকে রাখে। আয়াতে একই রকম বাধা ভেতরের লোকদের বেরোতে দেয় না। তাফসীরকারেরা মিলটা রেখে দেন, এর বেশি কোনো শিক্ষা টানেন না।"
          },
          {
            "en": "At-Tabari adds a note on how the word is pronounced. Wa-hiya tuhmaz wa-la tuhmaz, he says: it is read with the hamzah and without it, and both have been recited. So the word may be heard as mu'sadah, or with the glottal stop softened. He names no reciters for either and does not prefer one, and nothing in the fetched texts says the meaning changes between them. Both forms of the verb reported above, awsada and asada, keep the same sense of shutting.",
            "bn": "শব্দটির উচ্চারণ নিয়ে তাবারী একটি কথা যোগ করেন। ওয়া হিয়া তুহমাযু ওয়া লা তুহমায, তিনি বলেন: শব্দটি হামযাসহ পড়া হয়, হামযা ছাড়াও পড়া হয়, আর দুভাবেই তিলাওয়াত হয়েছে। অর্থাৎ শব্দটি শোনা যেতে পারে মু'সাদাহ হিসেবে, আবার হামযার ধাক্কা নরম করেও। কোন কারী কীভাবে পড়েছেন, তিনি তা বলেন না, কোনোটিকে প্রাধান্যও দেন না। আনা তাফসীরগুলোর কোথাও বলা নেই যে দুই উচ্চারণে অর্থ বদলায়। উপরে ক্রিয়াটির যে দুই রূপ এসেছে, আওসাদা ও আসাদা, দুটোতেই বন্ধ করার একই অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Carried, Not Graded Up",
          "bn": "যে বর্ণনা যেমন এসেছে"
        },
        "p": [
          {
            "en": "Ibn Kathir adds a report through Ibn Marduyah, with a chain running from Abu Salih to Abu Hurayrah (RA) and on to the Prophet ﷺ, in which the gloss on innaha 'alayhim mu'sadah is the same single word: mutbaqah. In the next breath Ibn Kathir records that Abu Bakr ibn Abi Shaybah narrated it through another chain as the words of Abu Salih himself, wa-lam yarfa'hu, without raising it to the Prophet ﷺ. Ibn Kathir gives no grading of his own.",
            "bn": "ইবন কাসীর ইবন মারদুয়াহর সূত্রে একটি বর্ণনা যোগ করেন। এর সনদ আবু সালিহ থেকে আবু হুরায়রা (রাঃ) হয়ে নবী ﷺ পর্যন্ত গেছে, আর তাতে ইন্নাহা আলাইহিম মু'সাদাহর ব্যাখ্যা সেই এক শব্দ: মুতবাকাহ। পরের বাক্যেই ইবন কাসীর জানান, আবু বকর ইবন আবী শাইবা অন্য এক সনদে এটি বর্ণনা করেছেন আবু সালিহের নিজের কথা হিসেবে, ওয়া লাম ইয়ারফা'হু, অর্থাৎ নবী ﷺ পর্যন্ত পৌঁছাননি। ইবন কাসীর নিজে এর কোনো মান নির্ণয় করেননি।"
          },
          {
            "en": "That report reaches Ibn Kathir through Ibn Marduyah, outside the hadith collections this article confirms against, so it is not quoted here as a hadith. No fetched tafsir attaches to this verse a narration from those collections. That is a sound outcome, not a gap to be filled. The gloss itself does not depend on the report, since at-Tabari has the word mutbaqah from Ibn Abbas (RA), Qatadah and the others without it.",
            "bn": "বর্ণনাটি ইবন কাসীরের কাছে এসেছে ইবন মারদুয়াহর মাধ্যমে, এ প্রবন্ধ যে হাদীস-সংকলনগুলোর সঙ্গে মিলিয়ে দেখে তার বাইরে থেকে। তাই এখানে একে হাদীস হিসেবে উদ্ধৃত করা হলো না। আনা তাফসীরগুলোর কোনোটিই ওই সংকলনগুলো থেকে কোনো বর্ণনা এ আয়াতের সঙ্গে জুড়ে দেয়নি। এটা একটা সঠিক ফলাফল, পূরণ করার মতো কোনো ফাঁক নয়। ব্যাখ্যাটি এ বর্ণনার উপর নির্ভরও করে না। কারণ মুতবাকাহ শব্দটি তাবারী এটি ছাড়াই পেয়েছেন ইবন আব্বাস (রাঃ), কাতাদা ও অন্যদের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heat With No Way Out",
          "bn": "তাপের ভেতর, বেরোনোর পথ নেই"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as the next step after 104:7. Wa-ma'a hadhihi al-hararah al-balighah, he writes: and along with this extreme heat, they are confined within it and have despaired of leaving it; that is why He said, innaha 'alayhim mu'sadah, meaning shut. On his reading the verse adds something to what came before. The fire has been described by what it does; this verse describes what it withholds, which is any way out. He says no more than that about the fire.",
            "bn": "সা'দী আয়াতটিকে পড়েন ১০৪:৭ আয়াতের পরের ধাপ হিসেবে। তিনি লেখেন, ওয়া মাআ হাযিহিল হারারাতিল বালিগাহ: এই তীব্র তাপের সঙ্গে সঙ্গে তারা সেখানে আটকে থাকবে, বেরোনোর আশা তারা হারিয়ে ফেলেছে। সে কারণেই আল্লাহ বলেছেন, ইন্নাহা আলাইহিম মু'সাদাহ, অর্থাৎ বন্ধ। তাঁর পাঠে আয়াতটি আগের কথার সঙ্গে নতুন কিছু যোগ করে। আগুন কী করে, তা আগে বলা হয়েছে। এ আয়াত বলে আগুন কী দেয় না, আর তা হলো বেরোনোর পথ। আগুন নিয়ে সা'দী এর বেশি কিছু বলেন না।"
          },
          {
            "en": "The Muyassar files this verse together with 104:9 and glosses both at once: it is closed over them, in long chains and fetters, so that they do not come out. The chains belong to its reading of the next verse, and are left there. Ma'arif al-Qur'an likewise groups 104:7 to 104:9, but its comment speaks only of the fire reaching the hearts, and it has nothing separate on this verse. So the reading of the closing comes from the Arabic commentators above.",
            "bn": "মুয়াসসার এ আয়াতকে ১০৪:৯ আয়াতের সঙ্গে এক করে দুটোর ব্যাখ্যা একসঙ্গে দেয়: তা তাদের উপর বন্ধ, লম্বা লম্বা শিকল আর বেড়ির মধ্যে, যাতে তারা বেরিয়ে আসতে না পারে। শিকলের কথাটা পরের আয়াতের পাঠের অংশ, তাই সেটা সেখানেই রাখা হলো। মাআরিফুল কুরআনও ১০৪:৭ থেকে ১০৪:৯ পর্যন্ত একসঙ্গে রাখে, তবে তার আলোচনা শুধু হৃদয় পর্যন্ত আগুন পৌঁছানো নিয়ে। এ আয়াত নিয়ে আলাদা কিছু সেখানে নেই। তাই বন্ধ হওয়ার ব্যাখ্যা আসে উপরের আরবি তাফসীরগুলো থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "An Echo From al-Balad",
          "bn": "সূরা আল-বালাদের প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Both Ibn Kathir and al-Qurtubi send the reader back to Surat al-Balad, and the English abridgement of Ibn Kathir names the verse: 90:20, 'alayhim narun mu'sadah, upon them is a fire closed over. The same two words meet there, 'alayhim and mu'sadah, at the close of another surah. Those commentators explained the word at that earlier point and here only point back to it. Their discussion at 90:20 was not among the texts fetched for this article, so it is not reported here, and that verse is left to its own reading.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই পাঠককে ফেরত পাঠান সূরা আল-বালাদে, আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আয়াতটির নম্বরও দেয়: ৯০:২০, আলাইহিম নারুম মু'সাদাহ, তাদের উপর থাকবে বন্ধ করে দেওয়া আগুন। সেখানেও এই দুটো শব্দ একসঙ্গে, আলাইহিম আর মু'সাদাহ, আরেকটি সূরার শেষে। এই তাফসীরকারেরা শব্দটির ব্যাখ্যা সেখানেই দিয়েছেন, এখানে শুধু সেদিকে ইশারা করেন। ৯০:২০ আয়াতে তাঁদের আলোচনা এ প্রবন্ধের জন্য আনা লেখার মধ্যে ছিল না। তাই তা এখানে জানানো হলো না, আর সে আয়াতকে তার নিজের আলোচনার জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "The translations in this app show how wide the word can be heard. The English renders the verse as closed down upon them, which sits near mutbaqah. The Bengali renders it as surrounding them from every side, an enclosure rather than a lid or a locked door. None of the fetched commentators uses the word surrounding, but each rendering keeps the sense that matters to all of them: those inside cannot get out. A reader comparing translations is meeting, in small, the same range the commentators recorded.",
            "bn": "এ অ্যাপের অনুবাদগুলো দেখায়, শব্দটিকে কত ভাবে শোনা যায়। ইংরেজি অনুবাদে আছে closed down upon them, উপর থেকে বন্ধ করে দেওয়া, যা মুতবাকাহর কাছাকাছি। বাংলা অনুবাদে আছে, তা তাদেরকে চতুর্দিক থেকে পরিবেষ্টন করে রাখবে, অর্থাৎ ঢাকনা বা তালাবদ্ধ দরজা নয়, চারদিকের ঘেরাও। আনা তাফসীরগুলোর কেউ পরিবেষ্টনের শব্দ ব্যবহার করেননি। তবু দুটো অনুবাদেই সেই অর্থটুকু আছে, যা সব তাফসীরকারের কাছেই মূল: ভেতরের লোকেরা বেরোতে পারে না। অনুবাদ মিলিয়ে পড়া পাঠক ছোট পরিসরে সেই বিস্তারই দেখেন, যা তাফসীরকারেরা লিপিবদ্ধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Target List",
          "bn": "ছবি আঁকা, নিশানা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes, a fire closed over those whom 104:1 to 104:3 portray by their conduct, and it licenses nothing against any living person or community. It names no tribe, no faction and no neighbour. At-Tabari's 'alayhim points to the mockers and slanderers of the opening verse, a description of deeds, and the article passes no verdict on anyone's end. Judgement over any soul belongs to Allah, and not to a reader of this verse.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: এমন আগুন, যা তাদের উপর বন্ধ, ১০৪:১ থেকে ১০৪:৩ আয়াত যাদের ছবি এঁকেছে তাদের আচরণ দিয়ে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি এ আয়াত দেয় না। এতে কোনো গোত্র, দল বা প্রতিবেশীর নাম নেই। তাবারীর ব্যাখ্যায় আলাইহিম ইঙ্গিত করে প্রথম আয়াতের খোঁটাদাতা আর নিন্দুকদের দিকে, আর সেটা কাজের বর্ণনা। কারও পরিণতি নিয়ে এ প্রবন্ধ কোনো রায় দেয় না। কোনো মানুষের ব্যাপারে ফয়সালা আল্লাহর, এ আয়াতের পাঠকের নয়।"
          },
          {
            "en": "There is a sharper reason for restraint. The conduct the surah condemns is the mocking look and the slanderous word. A reader who takes this verse and fastens it on a rival, a relative or a group has done with the tongue the very thing 104:1 opened against. The verse is easy to aim outward and hard to aim inward, and only the inward aim fits the surah. The question it leaves is not who is inside, but whether the reader recognises any of the portrait.",
            "bn": "সংযমের পেছনে আরও তীক্ষ্ণ একটা কারণ আছে। সূরাটি যে আচরণের নিন্দা করে, তা হলো খোঁটা দেওয়া দৃষ্টি আর অপবাদের কথা। কোনো পাঠক যদি এ আয়াত তুলে কোনো প্রতিদ্বন্দ্বী, আত্মীয় বা দলের গায়ে সেঁটে দেয়, তবে ১০৪:১ আয়াত যার বিরুদ্ধে শুরু হয়েছিল, জিহ্বা দিয়ে সে ঠিক সেই কাজটাই করল। আয়াতটিকে বাইরের দিকে তাক করা সহজ, নিজের দিকে ফেরানো কঠিন। অথচ সূরার সঙ্গে মেলে কেবল নিজের দিকে ফেরানো। আয়াত যে প্রশ্ন রেখে যায় তা এই নয় যে ভেতরে কারা। প্রশ্ন হলো, ছবিটার কোনো অংশে পাঠক নিজেকে চিনতে পারেন কি না।"
          },
          {
            "en": "Read that way, the image of a shut door turns back on the reader's present. The man of 104:3 thought his wealth would keep him forever; the surah's answer ends here, with a door that does not open. Every habit the portrait describes is still, for the reader, a door that can be walked through the other way: a remark withdrawn, a name restored, wealth spent rather than counted. The verse speaks of a closing. The reader, while reading it, is still among doors that open.",
            "bn": "এভাবে পড়লে বন্ধ দরজার ছবিটা পাঠকের বর্তমানের দিকে ফিরে আসে। ১০৪:৩ আয়াতের লোকটি ভেবেছিল তার সম্পদ তাকে চিরকাল টিকিয়ে রাখবে। সূরার জবাব শেষ হয় এখানে, এমন এক দরজায়, যা আর খোলে না। ছবিতে যে অভ্যাসগুলোর কথা আছে, পাঠকের জন্য সেগুলোর প্রতিটি এখনো এমন দরজা, যা দিয়ে উল্টো দিকে হেঁটে বেরোনো যায়: ফিরিয়ে নেওয়া একটা কথা, ফিরিয়ে দেওয়া কারও সুনাম, গুনে না রেখে খরচ করা সম্পদ। আয়াতটি বন্ধ হওয়ার কথা বলে। আর পাঠক, যতক্ষণ তা পড়ছেন, ততক্ষণ এখনো খোলা দরজার মাঝেই আছেন।"
          }
        ]
      }
    ]
  }
});
