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
  }
});
