/**
 * Tadabbur long-form articles — surah 40.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "40:3": {
    "sections": [
      {
        "h": {
          "en": "Four Descriptions, One Name",
          "bn": "চারটি বিশেষণ, একটি নাম"
        },
        "p": [
          {
            "en": "Surah Ghafir opens with Ha-Mim, and then 40:2 states that the revelation of the Book is from Allah, al-'Aziz al-'Alim, the Exalted in Might, the Knowing. This verse does not begin a new sentence. Its words continue in the genitive case, still describing that same Name: ghafir adh-dhanb, qabil at-tawb, shadid al-'iqab, dhi at-tawl. Four descriptions in a row, hung on one Name, before the verse stops and states two things on its own — there is no deity except Him, and to Him is the destination.",
            "bn": "সূরা গাফির শুরু হয় হা-মীম দিয়ে, এরপর 40:2 আয়াতে বলা হয় যে এই কিতাব নাযিল হয়েছে আল্লাহর পক্ষ থেকে, যিনি আল-'আযীয ও আল-'আলীম — মহাপরাক্রমশালী, সর্বজ্ঞ। আলোচ্য আয়াতটি নতুন কোনো বাক্য শুরু করে না। এর শব্দগুলো জার অবস্থাতেই চলতে থাকে, সেই একই নামেরই বিশেষণ হিসেবে: গাফির আয-যানব, ক্বাবিল আত-তাওব, শাদীদুল 'ইক্বাব, যিত-তাওল। একের পর এক চারটি বিশেষণ, একটিমাত্র নামের সঙ্গে যুক্ত; তারপর আয়াত থামে এবং নিজের মতো করে দুটি কথা বলে — তিনি ছাড়া কোনো ইলাহ নেই, আর প্রত্যাবর্তন তাঁরই কাছে।"
          },
          {
            "en": "The order is not decorative. Two descriptions of mercy come first, then one of severity, then one of open-handed giving, and only after all four does the declaration of oneness and of the final return arrive. A reader who takes any one of the four on its own has not read the verse. The surah is named Ghafir, Forgiver, after the first of them; the Book placed the name of forgiveness on a surah whose whole argument is with people who dispute the signs of Allah.",
            "bn": "এই ক্রম নিছক অলংকার নয়। প্রথমে আসে রহমতের দুটি বিশেষণ, তারপর কঠোরতার একটি, তারপর মুক্তহস্ত দানের একটি; আর এই চারটির পরেই কেবল আসে একত্ববাদের ও চূড়ান্ত প্রত্যাবর্তনের ঘোষণা। যে পাঠক এই চারটির যেকোনো একটিকে আলাদা করে নেয়, সে আসলে আয়াতটি পড়েনি। সূরাটির নাম গাফির — ক্ষমাকারী — রাখা হয়েছে এদের প্রথমটি থেকেই; অর্থাৎ কুরআন ক্ষমার নামটি বসিয়েছে এমন এক সূরার ওপর, যার পুরো বিতর্কই আল্লাহর আয়াত নিয়ে ঝগড়াকারী লোকদের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sin Named as a Genus",
          "bn": "পাপ শ্রেণিগতভাবে উল্লিখিত"
        },
        "p": [
          {
            "en": "Ghafir adh-dhanb — forgiver of sin. The Arabic noun is singular and carries the definite article, which in Arabic makes it cover the whole class rather than one instance: not this sin or that one, but sin as such. Then qabil at-tawb, and here too the wording is larger than it looks. At-tawb is the verbal noun, the act of turning back itself, rather than at-tawbah, a single completed repentance. Both words are built wider than any particular case a reader might be measuring himself against.",
            "bn": "গাফির আয-যানব — পাপ ক্ষমাকারী। আরবি বিশেষ্যটি একবচন এবং তাতে নির্দিষ্টতাবাচক 'আল' যুক্ত, যা আরবিতে একটি নির্দিষ্ট ঘটনা নয় বরং গোটা শ্রেণিকে বোঝায়: এই পাপ বা ওই পাপ নয়, বরং পাপ নামের জিনিসটিই। এরপর ক্বাবিল আত-তাওব, আর এখানেও শব্দচয়ন দেখতে যতটা ছোট মনে হয় তার চেয়ে বড়। 'আত-তাওব' হলো ক্রিয়াবাচক বিশেষ্য — ফিরে আসার কাজটিই; 'আত-তাওবাহ' নয়, অর্থাৎ একটি সম্পন্ন তওবা নয়। দুটি শব্দই পাঠক নিজেকে যে নির্দিষ্ট ঘটনার মাপে মাপছে, তার চেয়ে চওড়া করে গড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Severe in Punishment",
          "bn": "শাস্তিদানে কঠোর"
        },
        "p": [
          {
            "en": "Shadid al-'iqab stands third, and nothing in the verse softens it. 'Iqab is punishment that comes as a consequence; the root carries the sense of following after, so it trails the deed rather than falling arbitrarily. Placing it directly after two statements of mercy is the point of the verse. The same pairing is made explicit in 15:49-50, where the Prophet ﷺ is told to inform the servants that He is the Forgiving, the Merciful, and that His punishment is the painful punishment.",
            "bn": "শাদীদুল 'ইক্বাব আসে তৃতীয়ে, আর আয়াতের কোনো কিছুই একে নরম করে না। 'ইক্বাব' হলো এমন শাস্তি যা পরিণাম হিসেবে আসে; মূল ধাতুটি 'পেছনে অনুসরণ করা' অর্থ বহন করে, তাই তা এলোপাতাড়ি পড়ে না, বরং কাজটির পিছু পিছু আসে। রহমতের দুটি ঘোষণার ঠিক পরেই একে বসানোই আয়াতটির মূল বক্তব্য। ঠিক এই জোড়টি স্পষ্ট করে বলা হয়েছে 15:49-50 আয়াতে, যেখানে নবী ﷺ-কে বলা হয়েছে বান্দাদের জানিয়ে দিতে যে তিনিই ক্ষমাশীল, দয়ালু, আর তাঁর শাস্তিই যন্ত্রণাদায়ক শাস্তি।"
          },
          {
            "en": "Read inside its surah, this is not an abstract balance. 40:4 says that none disputes the signs of Allah except those who disbelieve; 40:5 recalls the nations that plotted against their messengers and were seized; 40:56 describes those who dispute without any authority as having nothing in their breasts but a pride they will never reach. The severity in this verse has an address. It is aimed at the man who hears the argument, understands it, and argues anyway.",
            "bn": "নিজ সূরার ভেতরে পড়লে এটি কোনো বিমূর্ত ভারসাম্য নয়। 40:4 আয়াতে বলা হয়, কাফিররা ছাড়া কেউ আল্লাহর আয়াত নিয়ে ঝগড়া করে না; 40:5 আয়াতে স্মরণ করানো হয় সেই জাতিগুলোর কথা যারা নিজেদের রাসূলদের বিরুদ্ধে ষড়যন্ত্র করেছিল এবং পাকড়াও হয়েছিল; 40:56 আয়াতে বলা হয়, যারা কোনো দলিল ছাড়াই ঝগড়া করে তাদের বুকে অহংকার ছাড়া কিছুই নেই, যে অহংকারের নাগাল তারা কখনো পাবে না। এই আয়াতের কঠোরতার একটি ঠিকানা আছে। এটি তার উদ্দেশে, যে যুক্তিটি শোনে, বোঝে, তবু ঝগড়া চালিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Dhi at-Tawl",
          "bn": "যিত-তাওল"
        },
        "p": [
          {
            "en": "The fourth description is the one translations struggle with: dhi at-tawl, owner of at-tawl. The word means means, capacity, the reach to give — the same word appears in 4:25 for a man who cannot find the means to marry. So the name does not merely say that Allah is generous; it says the generosity is backed. Forgiveness offered by someone with nothing to spare is a wish. Here the pardon in the first two descriptions, and every gift that follows it, comes from a treasury that is not being depleted.",
            "bn": "চতুর্থ বিশেষণটি নিয়েই অনুবাদকরা সবচেয়ে বেশি হিমশিম খান: যিত-তাওল — 'তাওল'-এর অধিকারী। শব্দটির অর্থ সামর্থ্য, ক্ষমতা, দেওয়ার নাগাল — ঠিক এই শব্দটিই এসেছে 4:25 আয়াতে সেই লোকের প্রসঙ্গে যার বিবাহের সামর্থ্য নেই। তাই নামটি কেবল এটুকু বলে না যে আল্লাহ দানশীল; এটি বলে যে সেই দানশীলতার পেছনে ভাণ্ডার আছে। যার নিজেরই কিছু উদ্বৃত্ত নেই, তার দেওয়া ক্ষমা কেবল একটি শুভকামনা। এখানে প্রথম দুই বিশেষণের ক্ষমা এবং তার পরের প্রতিটি দান আসে এমন এক ভাণ্ডার থেকে যা ফুরিয়ে যাচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered in the Same Surah",
          "bn": "একই সূরার ভেতরেই উত্তর"
        },
        "p": [
          {
            "en": "A few verses later the names are put to work by creatures who never sinned. In 40:7 those who carry the Throne and those around it glorify their Lord and ask forgiveness for the believers, praying that the One whose mercy and knowledge encompass all things forgive those who have repented and followed His way. Later the surah hands the servant his own instruction in 40:60, where your Lord says: call upon Me, I will respond to you. The names in this verse are not offered for admiration; they are offered for use.",
            "bn": "কয়েক আয়াত পরেই এই নামগুলোকে কাজে লাগায় এমন সৃষ্টি যারা কখনো পাপই করেনি। 40:7 আয়াতে আরশ বহনকারীরা ও তার চারপাশের ফেরেশতারা তাদের প্রতিপালকের পবিত্রতা ঘোষণা করে এবং মুমিনদের জন্য ক্ষমা প্রার্থনা করে, এই বলে যে যাঁর রহমত ও জ্ঞান সবকিছুকে পরিব্যাপ্ত করে আছে তিনি যেন তাদের ক্ষমা করেন যারা তওবা করেছে ও তাঁর পথ অনুসরণ করেছে। এরপর সূরাটি বান্দাকেও তার নিজের নির্দেশ দেয় 40:60 আয়াতে, যেখানে তোমার প্রতিপালক বলেন: আমাকে ডাকো, আমি সাড়া দেব। এই আয়াতের নামগুলো মুগ্ধ হওয়ার জন্য নয়; ব্যবহারের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Half Alone",
          "bn": "কোনো অর্ধেকই একা নয়"
        },
        "p": [
          {
            "en": "Held together, the verse rules out two familiar ways of living. One is the confidence that treats forgiveness as automatic and warning as rhetoric; the other is the despair that reaches shadid al-'iqab and stops reading. At-Tirmidhi relates that the Prophet ﷺ came to a youth who was dying and asked how he found himself, and the young man said that he hoped in Allah and feared his sins; the Prophet ﷺ said that these two do not gather in a servant's heart at such a moment except that Allah gives him what he hopes for and secures him from what he fears. At-Tirmidhi notes the report as hasan gharib.",
            "bn": "একসঙ্গে ধরলে আয়াতটি জীবনযাপনের দুটি পরিচিত ধরনকে বাতিল করে দেয়। একটি হলো সেই আত্মবিশ্বাস যা ক্ষমাকে স্বয়ংক্রিয় আর সতর্কবাণীকে নিছক কথার কারুকাজ মনে করে; অন্যটি সেই হতাশা যা শাদীদুল 'ইক্বাব পর্যন্ত পৌঁছে পড়া থামিয়ে দেয়। তিরমিযী বর্ণনা করেন, নবী ﷺ মৃত্যুশয্যায় থাকা এক যুবকের কাছে গিয়ে জিজ্ঞেস করেন সে নিজেকে কেমন পাচ্ছে; যুবকটি বলে, সে আল্লাহর কাছে আশা রাখে এবং নিজের পাপকে ভয় করে। নবী ﷺ বলেন, এমন মুহূর্তে বান্দার অন্তরে এ দুটি একত্র হলে আল্লাহ তাকে তার আশা করা জিনিস দেন এবং যা সে ভয় করে তা থেকে নিরাপদ রাখেন। তিরমিযী বর্ণনাটিকে হাসান গরীব হিসেবে উল্লেখ করেছেন।"
          }
        ]
      }
    ]
  },
  "40:44": {
    "sections": [
      {
        "h": {
          "en": "A Man the Surah Will Not Name",
          "bn": "সূরা যাঁর নাম বলে না"
        },
        "p": [
          {
            "en": "40:28 introduces him as a believing man from the family of Pharaoh who was concealing his faith. That is the whole of his identification; the Quran gives him no name, and the reports about who he was do not agree, so this article calls him what the verse calls him. His speech begins there, is cut across twice by Pharaoh, resumes at 40:38, and ends with the words of 40:44.",
            "bn": "40:28 তাঁকে পরিচয় করিয়ে দেয় ফেরাউনের পরিবারের এক মুমিন ব্যক্তি হিসেবে, যিনি তাঁর ঈমান গোপন রাখতেন। এটুকুই তাঁর গোটা পরিচয়; কুরআন তাঁর কোনো নাম দেয় না, আর তিনি কে ছিলেন সে বিষয়ে বর্ণনাগুলো একমত নয় — তাই এই আলোচনা তাঁকে সেই নামেই ডাকে যে নামে আয়াতটি ডাকে। তাঁর বক্তব্য সেখান থেকে শুরু হয়, দুবার ফেরাউনের কথায় ছেদ পড়ে, 40:38-এ আবার শুরু হয়, আর শেষ হয় 40:44-এর কথাগুলোয়।"
          },
          {
            "en": "The surah has already prepared the ground for a hidden believer. 40:19 says that Allah knows the treachery of the eyes and what the breasts conceal, and 40:20 names Him as-Sami' al-Basir, the Hearing, the Seeing. Nine verses later a man appears whose faith is inside his breast and nowhere else. The reader has been told, before ever meeting him, that the concealment was never concealment from Allah.",
            "bn": "সূরাটি একজন গোপন মুমিনের জন্য আগেই জমি তৈরি করে রেখেছে। 40:19 বলে, আল্লাহ চোখের অন্যায় দৃষ্টি জানেন এবং বুক যা গোপন করে তাও জানেন; আর 40:20 তাঁকে নাম দেয় আস-সামী' আল-বাসীর — সর্বশ্রোতা, সর্বদ্রষ্টা। নয় আয়াত পরে এমন একজন মানুষ আসেন যাঁর ঈমান কেবল তাঁর বুকের ভেতরেই, আর কোথাও নয়। পাঠককে তাঁর সঙ্গে পরিচয়ের আগেই জানিয়ে দেওয়া হয়েছে যে গোপন করাটা কখনোই আল্লাহর কাছ থেকে গোপন করা ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything He Said First",
          "bn": "তার আগে তিনি যা যা বললেন"
        },
        "p": [
          {
            "en": "His handing over of the matter is the last thing he says, not the first. Before it he makes a legal argument in 40:28: if the man is lying, his lie is on him, and if he is truthful, some of what he warns you of will strike you. He warns from history in 40:30-31, from the Day of Calling in 40:32, and in 40:39 he weighs this life's enjoyment against the home of permanent settlement.",
            "bn": "বিষয়টি সোপর্দ করা তাঁর শেষ কথা, প্রথম কথা নয়। তার আগে তিনি 40:28-এ একটি যুক্তিনিষ্ঠ আইনি কথা বলেন: লোকটি যদি মিথ্যাবাদী হয়, তার মিথ্যার দায় তারই; আর যদি সত্যবাদী হয়, সে যা সতর্ক করছে তার কিছু না কিছু তোমাদের উপর পড়বেই। তিনি 40:30-31-এ ইতিহাস থেকে সতর্ক করেন, 40:32-এ পরস্পরকে ডাকাডাকির দিন থেকে সতর্ক করেন, আর 40:39-এ দুনিয়ার ভোগকে চিরস্থায়ী আবাসের বিপরীতে ওজন করেন।"
          },
          {
            "en": "In 40:41 he puts the sharpest line of the whole address: how is it that I invite you to salvation while you invite me to the Fire? And by 40:38 the man who had been concealing his faith is saying follow me, I will guide you to the way of right conduct. Whatever tafwid means in 40:44, it is plainly what a person does after speaking, and not what he does instead of speaking.",
            "bn": "40:41-এ তিনি গোটা ভাষণের সবচেয়ে ধারালো বাক্যটি রাখেন: কী আশ্চর্য! আমি তোমাদের ডাকছি মুক্তির দিকে, আর তোমরা আমাকে ডাকছ আগুনের দিকে। আর 40:38-এ এসে যিনি এতদিন ঈমান গোপন রাখছিলেন, তিনিই বলছেন — আমার অনুসরণ করো, আমি তোমাদের সঠিক পথ দেখাব। 40:44-এ 'তাফউয়ীদ' যা-ই অর্থ করুক, এটি স্পষ্টতই সেই কাজ যা মানুষ কথা বলার পরে করে, কথা বলার বদলে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb Used Only Here",
          "bn": "যে ক্রিয়া কেবল এখানেই"
        },
        "p": [
          {
            "en": "Wa ufawwidu amri ila Allah. The verb comes from a root that occurs in the whole Quran exactly once, in this sentence. Tafwid is not quite tawakkul. To rely on someone is to lean your weight on him; to make tafwid of a matter is to hand the matter itself across, so that the deciding is no longer yours at all. He does not say I trust Allah about my case. He says I am transferring my case.",
            "bn": "'ওয়া উফাউয়িদু আমরী ইলাল্লাহ'। ক্রিয়াপদটি এমন এক মূল থেকে এসেছে যা গোটা কুরআনে ঠিক একবারই আসে, এই বাক্যটিতেই। 'তাফউয়ীদ' পুরোপুরি 'তাওয়াক্কুল' নয়। কারও উপর ভরসা করা মানে তার উপর নিজের ভার হেলিয়ে দেওয়া; আর কোনো বিষয়ের তাফউয়ীদ করা মানে বিষয়টিকেই হস্তান্তর করে দেওয়া, যাতে সিদ্ধান্তটি আর আপনার হাতে না থাকে। তিনি বলছেন না, আমার ব্যাপারে আমি আল্লাহকে বিশ্বাস করি। তিনি বলছেন, আমি আমার ব্যাপারটি হস্তান্তর করছি।"
          },
          {
            "en": "The verb stands in the imperfect, the tense of what is going on now, and the object is amri, my affair, definite and possessive: his own case, which at that moment means his life. He is standing before a court that has just been discussing killing a man for saying my Lord is Allah. The sentence is not a doctrine being taught to students. It is a transfer being executed in front of the people it is protecting him from.",
            "bn": "ক্রিয়াপদটি অসমাপিকা কালে, অর্থাৎ এখন যা ঘটছে তার কাল; আর কর্মপদ 'আমরী' — আমার ব্যাপার, নির্দিষ্ট ও সম্বন্ধযুক্ত: তাঁর নিজের বিষয়, যা সেই মুহূর্তে তাঁর জীবনই। তিনি দাঁড়িয়ে আছেন এমন এক দরবারে, যেখানে একটু আগেই আলোচনা হচ্ছিল 'আমার প্রতিপালক আল্লাহ' বলার অপরাধে একজনকে হত্যা করা নিয়ে। বাক্যটি ছাত্রদের শেখানো কোনো তত্ত্ব নয়। এটি একটি হস্তান্তর, যা কার্যকর করা হচ্ছে ঠিক সেই লোকদের সামনেই যাদের থেকে এটি তাঁকে রক্ষা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Basir, of All the Names",
          "bn": "সব নামের মধ্যে বাসীর"
        },
        "p": [
          {
            "en": "The closing clause chooses one name: inna Allaha basirun bil-ibad, indeed Allah is Seeing of the servants. Not Powerful, not Protecting, though either would have fitted a man in danger. Seeing. His fear was the specific fear of the hidden dissenter, that he could be removed quietly and nobody would ever learn what had been done to him or why. The name answers the fear that was actually in the room.",
            "bn": "শেষ বাক্যাংশটি একটি নামই বেছে নেয়: 'ইন্নাল্লাহা বাসীরুম বিল-ইবাদ' — নিশ্চয়ই আল্লাহ বান্দাদের দেখেন। শক্তিমান নয়, রক্ষাকারীও নয় — যদিও বিপদগ্রস্ত একজনের জন্য দুটিই মানানসই হতো। বরং দ্রষ্টা। তাঁর ভয়টি ছিল গোপন ভিন্নমতাবলম্বীর নির্দিষ্ট ভয়: তাঁকে নিঃশব্দে সরিয়ে দেওয়া যেতে পারে, আর কেউ কোনোদিন জানবে না তাঁর সঙ্গে কী করা হলো বা কেন। নামটি সেই ভয়েরই উত্তর দেয় যা সত্যিই ঘরে উপস্থিত ছিল।"
          },
          {
            "en": "Al-ibad carries the definite article and no possessive, so the sight named covers everyone in the hall, the man speaking and the men deciding what to do with him alike. Al-Muyassar reads the clause as Allah being aware of the states of the servants and of the recompense they deserve, with nothing of it hidden from Him. That is exactly why one short clause can reassure one party and warn the other in the same breath.",
            "bn": "'আল-ইবাদ' শব্দটিতে নির্দিষ্টতাবাচক উপসর্গ আছে, কোনো সম্বন্ধপদ নেই; ফলে যে দৃষ্টির কথা বলা হলো তা ঘরের সবাইকেই ঢেকে নেয় — যিনি বলছেন তাঁকেও, আর যারা তাঁর ব্যাপারে সিদ্ধান্ত নিচ্ছে তাদেরও। তাফসীর মুয়াসসার বাক্যাংশটি পড়ে এভাবে: আল্লাহ বান্দাদের অবস্থা এবং তারা যে প্রতিফল পাওয়ার যোগ্য তা সবই জানেন, তার কিছুই তাঁর কাছে গোপন নয়। ঠিক এ কারণেই একটি ছোট বাক্যাংশ একই নিঃশ্বাসে এক পক্ষকে আশ্বস্ত করে আর অন্য পক্ষকে সতর্ক করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Next Verse",
          "bn": "পরবর্তী আয়াত"
        },
        "p": [
          {
            "en": "40:45 follows immediately and opens with the fa of consequence: so Allah protected him from the evils they plotted, and the people of Pharaoh were enveloped by the worst of punishment. The order in the text is the order of the claim. He handed the matter over, and the next sentence in the Book is Allah taking it. What the verse does not do is describe the rescue; the protection is reported and the narrative moves straight on.",
            "bn": "40:45 আসে ঠিক পরেই, আর শুরু হয় পরিণতিবাচক 'ফা' দিয়ে: অতঃপর আল্লাহ তাঁকে তাদের ষড়যন্ত্রের অনিষ্ট থেকে রক্ষা করলেন, আর ফেরাউনের লোকদের ঘিরে ফেলল নিকৃষ্ট শাস্তি। পাঠে যে ক্রম, দাবিতেও সেই ক্রম। তিনি বিষয়টি সোপর্দ করলেন, আর কিতাবের পরের বাক্যেই আল্লাহ তা গ্রহণ করলেন। আয়াতটি যা করে না তা হলো উদ্ধারের বর্ণনা দেওয়া; রক্ষার কথা জানিয়ে বর্ণনা সোজা এগিয়ে যায়।"
          },
          {
            "en": "Read as a method, the passage puts tafwid where it belongs. 3:159 sets the same sequence as a command to the Prophet ﷺ: consult them in the matter, and when you have resolved, then rely upon Allah. Reliance comes after the deciding and not in place of it. The believer of Pharaoh's people did the speaking that was his to do, kept none of the outcome, and named his reason for that: the One now holding the matter can see.",
            "bn": "পদ্ধতি হিসেবে পড়লে অংশটি 'তাফউয়ীদ'-কে তার যথাস্থানে বসিয়ে দেয়। 3:159 নবী ﷺ-এর প্রতি আদেশ হিসেবে একই ক্রম স্থাপন করে: কাজে তাদের সঙ্গে পরামর্শ করো, আর যখন সংকল্প করে ফেলো তখন আল্লাহর উপর ভরসা করো। ভরসা আসে সিদ্ধান্তের পরে, সিদ্ধান্তের বদলে নয়। ফেরাউনের গোত্রের সেই মুমিন নিজের দায়িত্বের কথাটুকু বললেন, ফলাফলের কিছুই নিজের কাছে রাখলেন না, আর তার কারণটিরও নাম দিলেন: এখন যিনি বিষয়টি ধরে আছেন, তিনি দেখতে পান।"
          }
        ]
      }
    ]
  },
  "40:60": {
    "sections": [
      {
        "h": {
          "en": "An Invitation With a Promise",
          "bn": "প্রতিশ্রুতিসহ এক আমন্ত্রণ"
        },
        "p": [
          {
            "en": "Your Lord has said: call upon Me, I will respond to you. The sentence is an imperative followed by a commitment, and both come from Allah Himself — the verse frames it as His own announcement. Nowhere does it restrict the subject matter, the language, the time of day or the rank of the asker. The door described here has no receptionist and no appointment book, and the promise attached to it is unconditional in its wording: I will respond.",
            "bn": "তোমাদের রব বলেছেন: আমাকে ডাকো, আমি তোমাদের ডাকে সাড়া দেব। বাক্যটি একটি আদেশ, তার পরে একটি অঙ্গীকার — এবং দুটিই স্বয়ং আল্লাহর পক্ষ থেকে; আয়াতটি একে তাঁর নিজের ঘোষণা হিসেবেই উপস্থাপন করে। কোথাও এটি বিষয়বস্তু, ভাষা, দিনের সময় বা প্রার্থনাকারীর মর্যাদা সীমিত করেনি। এখানে যে দরজার বর্ণনা, তার কোনো দারোয়ান নেই, সাক্ষাতের কোনো খাতাও নেই; আর তার সঙ্গে যুক্ত প্রতিশ্রুতি শব্দের দিক থেকে নিঃশর্ত: আমি সাড়া দেব।"
          },
          {
            "en": "The same assurance appears in 2:186 with an added intimacy: when My servants ask you about Me, I am near, answering the call of the caller when he calls. There the Prophet ﷺ is not even instructed to say — say to them — as in other answers; the reply comes direct. Between the two verses, du'a is established not as a ritual gamble but as a standing arrangement announced by the One who keeps it.",
            "bn": "একই আশ্বাস 2:186 আয়াতে এসেছে বাড়তি ঘনিষ্ঠতা নিয়ে: আমার বান্দারা যখন আমার সম্পর্কে তোমাকে জিজ্ঞেস করে — আমি তো নিকটেই, আহ্বানকারী যখন ডাকে তার ডাকে সাড়া দিই। সেখানে অন্যান্য উত্তরের মতো নবী ﷺ-কে 'তাদের বলে দাও' পর্যন্ত বলা হয়নি; জবাব আসে সরাসরি। এই দুই আয়াত মিলে দোয়া প্রতিষ্ঠিত হয় কোনো আচারিক জুয়া হিসেবে নয়, বরং এক স্থায়ী ব্যবস্থা হিসেবে — যিনি তা রক্ষা করেন তিনিই তা ঘোষণা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When Calling Is Named Worship",
          "bn": "ডাকাকে যখন ইবাদত বলা হলো"
        },
        "p": [
          {
            "en": "The second half of the verse performs a quiet substitution that the commentators dwell on. It began with call upon Me, but the warning reads: those who are too arrogant for My worship — ibadati — will enter Hell debased. Calling was renamed worship mid-verse. The Prophet ﷺ made the equation explicit: du'a is worship, as narrated by an-Nu'man ibn Bashir (RA) in the collection of at-Tirmidhi, and he then recited this very verse.",
            "bn": "আয়াতের দ্বিতীয়ার্ধে এমন এক নীরব প্রতিস্থাপন ঘটে, যার ওপর মুফাসসিরগণ দীর্ঘক্ষণ থামেন। শুরুটা ছিল 'আমাকে ডাকো' দিয়ে, কিন্তু সতর্কবাণীতে লেখা: যারা আমার ইবাদতের ব্যাপারে অহংকার করে — 'ইবাদাতী' — তারা লাঞ্ছিত হয়ে জাহান্নামে ঢুকবে। আয়াতের মাঝপথেই ডাকার নতুন নাম হয়ে গেল ইবাদত। নবী ﷺ সমীকরণটি স্পষ্ট করে দিয়েছেন: দোয়াই ইবাদত — নু'মান ইবনে বাশীর (রাঃ)-এর বর্ণনায়, তিরমিযীর সংকলনে; এরপর তিনি এই আয়াতটিই তিলাওয়াত করেন।"
          },
          {
            "en": "The renaming changes what asking means. If du'a is worship, then the act of asking honors Allah regardless of whether the request is granted in the form imagined — the asker has already succeeded in the primary transaction. It also explains why the verse treats not asking so severely. Prayer is where creatureliness is confessed; refusing it is not independence but a false claim of self-sufficiency.",
            "bn": "এই নামবদল চাওয়ার অর্থটাই পাল্টে দেয়। দোয়া যদি ইবাদত হয়, তবে চাওয়ার কাজটিই আল্লাহর সম্মান — অনুরোধটি কল্পিত রূপে মঞ্জুর হোক বা না হোক; মূল লেনদেনে প্রার্থনাকারী আগেই সফল। এতে এটাও বোঝা যায়, না-চাওয়াকে আয়াতটি কেন এত কঠোরভাবে নিয়েছে। দোয়াই সেই জায়গা যেখানে বান্দা নিজের মুখাপেক্ষিতা স্বীকার করে; তা অস্বীকার করা স্বাধীনতা নয়, বরং আত্মনির্ভরতার এক মিথ্যা দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Arrogance of Not Asking",
          "bn": "না চাওয়ার অহংকার"
        },
        "p": [
          {
            "en": "The threatened party in this verse is unusual. It is not the murderer or the thief but the one too proud to ask — alladhina yastakbiruna an ibadati. The word dakhirin, humbled and small, completes the reversal: whoever refuses to lower himself before Allah will be lowered by force. Pride aimed at the Creator is the original sin of Iblis, and this verse locates a trace of it in something as ordinary as never raising one's hands.",
            "bn": "এই আয়াতে যাকে শাসানো হয়েছে, সে এক অস্বাভাবিক পক্ষ। খুনি বা চোর নয় — বরং সেই ব্যক্তি, চাইতে যার অহংকার লাগে: 'আল্লাযীনা ইয়াসতাকবিরূনা আন ইবাদাতী'। 'দাখিরীন' শব্দটি — অপদস্থ ও ক্ষুদ্র — উল্টে যাওয়াটি সম্পূর্ণ করে: যে আল্লাহর সামনে নিজেকে নত করতে অস্বীকার করে, তাকে জোর করেই নত করা হবে। স্রষ্টার প্রতি অহংকারই ইবলিসের আদি পাপ, আর এই আয়াত তার একটি চিহ্ন খুঁজে পায় এমন সাধারণ এক ব্যাপারে — কখনো হাত না তোলায়।"
          },
          {
            "en": "Few people announce that they are above praying. The arrogance the verse describes usually wears working clothes: I handle my own problems; I only turn to Him when things get truly desperate; asking for small things is beneath the seriousness of religion. Against that last thought stands the breadth of the Prophet's ﷺ own practice, which included seeking Allah's help in matters great and small alike. The verse dismantles the tiered system where Allah is reserved for emergencies.",
            "bn": "খুব কম মানুষই ঘোষণা দেয় যে দোয়া তার মর্যাদার নিচে। আয়াতে বর্ণিত অহংকার সাধারণত কাজের পোশাক পরে আসে: আমার সমস্যা আমি নিজেই সামলাই; সত্যিকারের মরিয়া অবস্থায় পড়লে তবেই তাঁর দিকে ফিরি; ছোটখাটো জিনিস চাওয়া দ্বীনের গাম্ভীর্যের সঙ্গে মানায় না। এই শেষ ভাবনাটির বিপরীতে দাঁড়িয়ে আছে নবী ﷺ-এর নিজের অনুশীলনের ব্যাপ্তি — ছোট-বড় সব বিষয়েই তিনি আল্লাহর সাহায্য চাইতেন। আয়াতটি সেই স্তরভিত্তিক ব্যবস্থা ভেঙে দেয়, যেখানে আল্লাহ কেবল জরুরি অবস্থার জন্য তোলা থাকেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Response Arrives",
          "bn": "সাড়া যেভাবে আসে"
        },
        "p": [
          {
            "en": "The promise I will respond raises an honest question: everyone has prayed for things that did not happen. The Prophet ﷺ addressed exactly this. In the hadith recorded by Muslim — whose core is agreed upon in al-Bukhari and Muslim — he said the servant continues to be answered so long as he does not pray for sin or the cutting of family ties, and so long as he does not grow impatient, saying: I prayed and prayed and saw no answer, and so he abandons du'a.",
            "bn": "'আমি সাড়া দেব' প্রতিশ্রুতিটি একটি সৎ প্রশ্ন তোলে: সবাই এমন কিছু চেয়েছে যা ঘটেনি। নবী ﷺ ঠিক এই প্রশ্নেরই জবাব দিয়েছেন। মুসলিমে বর্ণিত হাদীসে (যার মূল অংশ বুখারী ও মুসলিমে ঐকমত্যে আছে) তিনি বলেছেন, বান্দার ডাকে সাড়া দেওয়া হতে থাকে যতক্ষণ সে গুনাহ বা আত্মীয়তা ছিন্ন করার দোয়া না করে, আর যতক্ষণ সে অধৈর্য হয়ে না বলে: দোয়া করলাম, করেই গেলাম, কোনো জবাব দেখলাম না — আর এভাবে দোয়াই ছেড়ে দেয়।"
          },
          {
            "en": "So the promise stands, but the response is defined by the Responder, not the asker. The classical scholars, reading the texts together, describe the answer as certain in reality even when invisible in form — and they note that the only way to lose is the way the hadith names: quitting. The verse's demand is persistence; the timetable and the shape of the answer were never handed over to us.",
            "bn": "অতএব প্রতিশ্রুতি বহাল আছে, তবে সাড়ার সংজ্ঞা নির্ধারণ করেন সাড়াদাতা — প্রার্থনাকারী নয়। ধ্রুপদী আলিমগণ, নুসূসগুলো মিলিয়ে পড়ে, জবাবকে বর্ণনা করেছেন বাস্তবে সুনিশ্চিত বলে — যদিও রূপে তা অদৃশ্য থাকতে পারে; আর তাঁরা লক্ষ করেন, হারার একটিই পথ, যা হাদীসেই বলা আছে: ছেড়ে দেওয়া। আয়াতের দাবি অধ্যবসায়; সময়সূচি আর জবাবের আকৃতি কখনোই আমাদের হাতে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Building the Habit of Asking",
          "bn": "চাওয়ার অভ্যাস গড়া"
        },
        "p": [
          {
            "en": "The verse's practice is embarrassingly available: ask, often, about everything. Before the interview and inside the traffic jam; for the sick relative and for the misplaced key. The surah of the ibad ar-Rahman ends by saying in 25:77 that Allah would not concern Himself with people were it not for their du'a — calling on Him is presented there as the very thing that gives a person weight with his Lord.",
            "bn": "এই আয়াতের অনুশীলনটি লজ্জাজনক রকমের সহজলভ্য: চাও, বারবার, সবকিছু নিয়ে। সাক্ষাৎকারের আগে এবং যানজটের ভেতরে; অসুস্থ আত্মীয়ের জন্য এবং হারিয়ে ফেলা চাবির জন্যও। ইবাদুর রহমানের সূরাটি শেষ হয় 25:77 আয়াতে এই বলে যে তোমাদের দোয়া না থাকলে আল্লাহ তোমাদের পরোয়াই করতেন না — তাঁকে ডাকাকেই সেখানে দেখানো হয়েছে সেই জিনিস হিসেবে, যা মানুষকে তার রবের কাছে ওজন দেয়।"
          },
          {
            "en": "A useful discipline is to notice the moments of reflexive self-reliance — reaching for the phone, the plan, the contact — and to insert one sentence to Allah first. Not instead of the means; before them. That small reordering is the whole difference between the one this verse invites and the one it warns. The invitation stays open for a lifetime, and it was issued by the only One who never tires of being asked.",
            "bn": "একটি কার্যকর অভ্যাস হলো প্রতিবর্তী আত্মনির্ভরতার মুহূর্তগুলো খেয়াল করা — ফোন, পরিকল্পনা বা পরিচিতজনের দিকে হাত বাড়ানোর মুহূর্ত — এবং সবার আগে আল্লাহর উদ্দেশে একটি বাক্য ঢুকিয়ে দেওয়া। উপায়-উপকরণের বদলে নয়; তার আগে। এই ছোট্ট ক্রমবদলই সেই পুরো পার্থক্য — এই আয়াত যাকে আমন্ত্রণ জানায় আর যাকে সতর্ক করে, তাদের মধ্যে। আমন্ত্রণটি সারা জীবনের জন্য খোলা, আর তা জারি করেছেন একমাত্র সেই সত্তা, যাঁর কাছে চাইতে চাইতে তিনি কখনো বিরক্ত হন না।"
          }
        ]
      }
    ]
  }
});
