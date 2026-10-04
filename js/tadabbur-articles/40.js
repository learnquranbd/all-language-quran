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
  "40:8": {
    "sections": [
      {
        "h": {
          "en": "The Throne-Bearers Keep Asking",
          "bn": "আরশবাহীদের দোয়া থামে না"
        },
        "p": [
          {
            "en": "This verse has no opening of its own. It carries on a prayer begun in 40:7, where those who bear the Throne and those around it glorify their Lord with praise, believe in Him, and ask forgiveness for those who have believed. Their words begin, Rabbana, Our Lord, You have encompassed all things in mercy and knowledge, and they ask Him to forgive those who repented and followed His way and to shield them from the punishment of the Blaze. At-Tabari frames 40:8 in the same terms: Allah telling of His angels' supplication for the people of faith among His servants.",
            "bn": "এ আয়াতের নিজস্ব কোনো শুরু নেই। ৪০:৭ আয়াতে যে দোয়া শুরু হয়েছে, এটা তারই ধারাবাহিকতা। সেখানে আরশ বহনকারীরা আর তার চারপাশে যারা আছে, তারা প্রশংসার সঙ্গে রবের তাসবীহ করে, তাঁর প্রতি ঈমান রাখে, আর মু'মিনদের জন্য ইস্তিগফার করে। তাদের কথা শুরু হয় রাব্বানা দিয়ে: হে আমাদের রব, তোমার রহমত ও জ্ঞান সবকিছুকে ঘিরে রেখেছে। তারপর তারা চায়, যারা তওবা করেছে আর তোমার পথ ধরেছে তাদের মাফ করো, জাহান্নামের আযাব থেকে বাঁচাও। তাবারীও ৪০:৮ আয়াতকে এভাবেই দেখেন: আল্লাহ জানাচ্ছেন, তাঁর ফেরেশতারা তাঁর মু'মিন বান্দাদের জন্য কী দোয়া করে।"
          },
          {
            "en": "So the speakers are angels, and the people prayed for are on earth and know nothing of it. The verse calls on Rabbana a second time and ties its request to the previous one with a single wa, and. The earlier request was rescue, keeping them from the Fire; this one is admission, bringing them in. Ma'arif al-Qur'an lists the angels' requests in that order: that Allah forgive the believers, save them from Jahannam, and admit them to the everlasting gardens. The prayer moves from what they should be spared to where they should arrive.",
            "bn": "তাহলে কথা বলছেন ফেরেশতারা, আর যাদের জন্য দোয়া হচ্ছে তারা দুনিয়ায়, কিছুই জানে না। আয়াতটি আবার রাব্বানা বলে ডাকে, আর একটিমাত্র ওয়া, অর্থাৎ 'এবং' দিয়ে নতুন আবেদনকে আগের আবেদনের সঙ্গে জুড়ে দেয়। আগেরটা ছিল উদ্ধার, আগুন থেকে দূরে রাখা। এটা প্রবেশ, ভেতরে নিয়ে যাওয়া। মাআরিফুল কুরআন ফেরেশতাদের চাওয়াগুলো এই ক্রমেই সাজায়: আল্লাহ যেন মু'মিনদের মাফ করেন, জাহান্নাম থেকে বাঁচান, আর চিরস্থায়ী জান্নাতে প্রবেশ করান। দোয়াটা কী থেকে রেহাই, সেখান থেকে এগিয়ে যায় কোথায় পৌঁছানো, সেদিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens Named for Staying",
          "bn": "থেকে যাওয়ার বাগান"
        },
        "p": [
          {
            "en": "Jannat 'adn. At-Tabari glosses the phrase as basatin iqama, gardens of residence, places to stay. Ma'arif al-Qur'an renders it the everlasting gardens of Jannah, and the English abridgement of Ibn Kathir writes 'Adn with the gloss Eternal. On these readings 'adn describes the gardens by their permanence: what the angels ask for is not a visit but a home. The Muyassar repeats the phrase without a gloss, and as-Sa'di's comment passes straight on to the promise that follows it.",
            "bn": "জান্নাতে আদন। তাবারী এর ব্যাখ্যা দেন বাসাতীনু ইকামা, অর্থাৎ বসবাসের বাগান, যেখানে মানুষ থেকে যায়। মাআরিফুল কুরআন একে বলে জান্নাতের চিরস্থায়ী বাগান। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও আদন শব্দের পাশে লিখে দেয় চিরস্থায়ী। এই পাঠ অনুযায়ী আদন শব্দটি বাগানগুলোর পরিচয় দেয় তাদের স্থায়িত্ব দিয়ে। ফেরেশতারা কিছুক্ষণের ঘুরে আসা চাইছেন না, চাইছেন স্থায়ী ঘর। মুয়াসসার শব্দটি ব্যাখ্যা ছাড়াই রেখে দেয়, আর সা'দী সরাসরি চলে যান পরের অংশের ওয়াদার কথায়।"
          },
          {
            "en": "Al-Qurtubi opens with a different gloss. Under the word yurwa, it is narrated, he reports that Umar ibn al-Khattab asked Ka'b al-Ahbar what jannat 'adn are, and Ka'b answered: palaces of gold in Paradise, entered by the prophets, the truthful, the martyrs and the just leaders. On this reading the name points to one particular, exalted part of Paradise rather than to Paradise described by its permanence. Both glosses stand in the fetched sources. Al-Qurtubi gives the report only as narrated, and the answer in it is Ka'b's, not a saying of the Prophet ﷺ.",
            "bn": "কুরতুবী শুরু করেন অন্য এক ব্যাখ্যা দিয়ে। 'বর্ণিত আছে' কথাটি দিয়ে তিনি জানান, উমর ইবনুল খাত্তাব (রাঃ) কা'ব আল-আহবারকে জিজ্ঞেস করেছিলেন, জান্নাতে আদন কী? কা'ব বললেন: জান্নাতের ভেতর সোনার প্রাসাদ, যেখানে প্রবেশ করবেন নবীগণ, সিদ্দীকগণ, শহীদগণ আর ন্যায়পরায়ণ শাসকগণ। এই পাঠে নামটি স্থায়িত্বের বর্ণনা নয়, জান্নাতের একটি নির্দিষ্ট উঁচু অংশের নাম। সংগ্রহ করা তাফসীরে দুটো ব্যাখ্যাই আছে। কুরতুবী বর্ণনাটি আনেন শুধু 'বর্ণিত আছে' বলে, আর এতে উত্তরটা কা'বের, নবী ﷺ-এর বাণী নয়।"
          },
          {
            "en": "Allati wa'adtahum: which You have promised them. As-Sa'di says where the promise was given, on the tongues of Your messengers. At-Tabari says to whom, explaining it as the gardens You promised the people who turn back to obedience to You that You would admit them. So the angels are not asking for something unheard of. They ask Allah for what He has already said He will give, and they ask for it all the same. The promise does not make the prayer unnecessary; it is what the prayer stands on.",
            "bn": "আল্লাতী ওয়াআদতাহুম: যার ওয়াদা তুমি তাদের দিয়েছ। সা'দী বলেন, এ ওয়াদা এসেছে তোমার রাসূলদের মুখে। তাবারী বলেন কাদের জন্য: তোমার আনুগত্যের দিকে যারা ফিরে আসে, তাদের তুমি এ বাগানে প্রবেশ করানোর ওয়াদা দিয়েছ। তাহলে ফেরেশতারা অজানা কিছু চাইছেন না। আল্লাহ যা দেবেন বলে আগেই জানিয়েছেন, তাঁরা সেটাই চাইছেন, আর তবুও চাইছেন। ওয়াদা থাকায় দোয়ার প্রয়োজন ফুরিয়ে যায় না। বরং দোয়া দাঁড়িয়ে থাকে সেই ওয়াদার উপরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Was Righteous Among Them",
          "bn": "তাদের মধ্যে যারা নেককার"
        },
        "p": [
          {
            "en": "Then the request widens: wa man salaha min aba'ihim wa azwajihim wa dhurriyyatihim, and whoever was righteous among their fathers, their spouses and their offspring. Al-Qurtubi parses man as accusative, joined to the pronoun hum in adkhilhum: admit them, and admit whoever was righteous. At-Tabari gives the same parsing and allows a second, joining it to the hum of wa'adtahum, so that the relatives fall within the promise itself. On either parsing they are not an afterthought tacked on. They are brought in beside the believers within one sentence.",
            "bn": "এরপর দোয়ার পরিধি বাড়ে: ওয়া মান সালাহা মিন আবাইহিম ওয়া আযওয়াজিহিম ওয়া যুররিয়্যাতিহিম, আর তাদের বাপ-দাদা, স্বামী-স্ত্রী ও সন্তানদের মধ্যে যারা নেককার। কুরতুবী বলেন, এখানে মান শব্দটি যবরযুক্ত, আদখিলহুম-এর হুম সর্বনামের সঙ্গে যুক্ত। অর্থাৎ তাদের প্রবেশ করাও, আর যারা নেককার তাদেরও। তাবারীও এই ব্যাখ্যা দেন, তবে আরেকটির সুযোগ রাখেন: শব্দটি ওয়াআদতাহুম-এর হুম-এর সঙ্গেও যুক্ত হতে পারে। তখন আত্মীয়রা ওয়াদার ভেতরেই পড়ে যায়। যেভাবেই পড়া হোক, তারা পরে জুড়ে দেওয়া কোনো বাড়তি অংশ নয়। একই বাক্যে মু'মিনদের পাশাপাশি তাদেরও ভেতরে আনা হচ্ছে।"
          },
          {
            "en": "What does salaha require of them? Al-Qurtubi says righteous through faith. The Muyassar and as-Sa'di say through faith and righteous action. At-Tabari explains it as those who did, in this world, the righteous deeds for which You are pleased with them. Ma'arif al-Qur'an makes the condition that they left the world holding to their iman, and concludes that faith is the basic condition of salvation, with other good deeds coming after it. The wording differs, but none of the fetched commentators reads the phrase as bringing in a relative who did not have faith.",
            "bn": "সালাহা শব্দটি তাদের কাছে কী দাবি করে? কুরতুবী বলেন, ঈমানের মাধ্যমে নেককার। মুয়াসসার ও সা'দী বলেন, ঈমান ও নেক আমলের মাধ্যমে। তাবারীর ব্যাখ্যা: দুনিয়ায় যারা এমন নেক আমল করেছে, যাতে তুমি তাদের উপর সন্তুষ্ট হও। মাআরিফুল কুরআন শর্ত রাখে, তারা যেন ঈমানের উপর থেকে দুনিয়া ছেড়েছে। সেখান থেকে সিদ্ধান্ত টানে: নাজাতের মূল শর্ত ঈমান, অন্য নেক আমল আসে তার পরে। ভাষা আলাদা, কিন্তু সংগ্রহ করা কোনো তাফসীরই এ কথাকে ঈমানহীন কোনো আত্মীয়কে ভেতরে আনার অর্থে পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Own Faith, a Raised Rank",
          "bn": "নিজের ঈমান, উঁচু মর্যাদা"
        },
        "p": [
          {
            "en": "Their own faith is the condition. What grace adds, in these commentaries, is the place. Ibn Kathir explains the request as: gather them together, so that their eyes are cooled by meeting in neighbouring dwellings. At-Tabari, after defining the righteous, adds under the words it is mentioned that a man's parents, child and wife enter Paradise with him even if they did not do deeds like his, by the grace of Allah's mercy towards him. Ma'arif al-Qur'an says the same of relatives of a lower rank: Allah lets them be with the believer so that his happiness is complete.",
            "bn": "শর্ত তাদের নিজেদের ঈমান। এই তাফসীরগুলোর মতে অনুগ্রহ যা যোগ করে, তা হলো জায়গা। ইবন কাসীর দোয়াটির ব্যাখ্যা দেন এভাবে: তাদের একত্র করে দাও, পাশাপাশি ঘরে মিলিত হয়ে যেন তাদের চোখ জুড়ায়। তাবারী নেককারদের পরিচয় দেওয়ার পর 'উল্লেখ আছে' বলে যোগ করেন: মানুষের বাবা-মা, সন্তান ও স্ত্রী তার সঙ্গে জান্নাতে প্রবেশ করবে, যদিও তারা তার মতো আমল করেনি। এটা তার প্রতি আল্লাহর রহমতের অনুগ্রহ। নিচু স্তরের আত্মীয়দের ব্যাপারে মাআরিফুল কুরআনও একই কথা বলে: আল্লাহ তাদের মু'মিনের সঙ্গে রাখবেন, যাতে তার আনন্দ পূর্ণ হয়।"
          },
          {
            "en": "Ibn Kathir supports this with 52:21: And those who believed and whose offspring followed them in faith, We will join their offspring to them, and We will not deprive them of anything of their deeds. He explains it: We made all of them equal in rank so that their eyes would be cooled. We did not lower the higher to meet the lower; We raised whoever had fewer deeds to match whoever had more, as a favour and a grace from Us. Al-Qurtubi and Ma'arif al-Qur'an also set 52:21 beside this verse.",
            "bn": "ইবন কাসীর এর সমর্থনে আনেন ৫২:২১ আয়াত: যারা ঈমান এনেছে আর তাদের সন্তানেরা ঈমানের সঙ্গে তাদের অনুসরণ করেছে, আমি তাদের সন্তানদের তাদের সঙ্গে মিলিয়ে দেব, আর তাদের আমল থেকে কিছুই কমাব না। তাঁর ব্যাখ্যা: আমি সবাইকে সমান মর্যাদায় তুলেছি, যাতে তাদের চোখ জুড়ায়। উঁচু জনকে নামিয়ে নিচু জনের সমান করিনি। বরং কম আমলের মানুষকে তুলে বেশি আমলের মানুষের সমান করেছি, আমার পক্ষ থেকে অনুগ্রহ ও দান হিসেবে। কুরতুবী আর মাআরিফুল কুরআনও ৫২:২১ আয়াতকে এ আয়াতের পাশে রাখে।"
          },
          {
            "en": "Al-Qurtubi also points back to a parallel already treated in Surat ar-Ra'd. That is 13:23, where the same words recur: gardens of perpetual residence, which they will enter along with whoever was righteous among their fathers, their spouses and their offspring, and the angels will come in to them from every gate. There the reunion is told as what will happen; here the angels ask for it. Both verses keep the same qualifier, whoever was righteous. And 52:21 names the link from the other side: offspring who followed them in faith.",
            "bn": "কুরতুবী সূরা রা'দের এক সমান্তরাল আয়াতের দিকেও ইঙ্গিত করেন, যার আলোচনা আগে হয়ে গেছে। সেটা ১৩:২৩ আয়াত, যেখানে প্রায় একই কথা আবার এসেছে: চিরস্থায়ী জান্নাত, তারা তাতে প্রবেশ করবে, আর তাদের বাপ-দাদা, স্বামী-স্ত্রী ও সন্তানদের মধ্যে যারা নেককার তারাও। আর ফেরেশতারা প্রতিটি দরজা দিয়ে তাদের কাছে আসবে। সেখানে মিলনের কথা বলা হয়েছে যা ঘটবে তা হিসেবে, আর এখানে ফেরেশতারা তা চেয়ে নিচ্ছেন। দুই আয়াতেই শর্ত একই: যারা নেককার। আর ৫২:২১ আয়াত বন্ধনটা দেখায় অন্য দিক থেকে: যে সন্তানেরা ঈমানের সঙ্গে তাদের অনুসরণ করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "I Worked for Them Too",
          "bn": "আমার আমল ওদের জন্যও ছিল"
        },
        "p": [
          {
            "en": "Four of the fetched commentators carry a saying of Sa'id ibn Jubayr on this verse. At-Tabari gives it with its chain, ending: from Sa'id, who said: A man enters Paradise and says, Where is my father, where is my mother, where is my child, where is my wife? It is said: They did not do deeds like yours. He says: I used to work for myself and for them. It is said: Admit them into Paradise. Then Sa'id recited the verse: gardens of perpetual residence which You have promised them, and whoever was righteous among their fathers, their spouses and their offspring.",
            "bn": "সংগ্রহ করা তাফসীরের চারটিতে এ আয়াত প্রসঙ্গে সাঈদ ইবন জুবাইরের একটি কথা আছে। তাবারী তা সনদসহ আনেন, শেষ অংশ এরকম: সাঈদ বলেন, একজন মানুষ জান্নাতে প্রবেশ করে জিজ্ঞেস করবে, আমার বাবা কোথায়, আমার মা কোথায়, আমার সন্তান কোথায়, আমার স্ত্রী কোথায়? বলা হবে, তারা তোমার মতো আমল করেনি। সে বলবে, আমি তো আমল করতাম আমার জন্য আর তাদের জন্যও। তখন বলা হবে, তাদের জান্নাতে প্রবেশ করাও। তারপর সাঈদ আয়াতটি পড়লেন: চিরস্থায়ী জান্নাত, যার ওয়াদা তুমি তাদের দিয়েছ, আর তাদের বাপ-দাদা, স্বামী-স্ত্রী ও সন্তানদের মধ্যে যারা নেককার।"
          },
          {
            "en": "Al-Baghawi, al-Qurtubi and Ibn Kathir give the same scene with different lists. Al-Qurtubi's man asks also after his grandfather and his grandchildren; Ibn Kathir's asks after his brother, and in his version the relatives are joined to him in his degree. In every one of these texts the words are Sa'id's own, not attributed to the Prophet ﷺ. Ma'arif al-Qur'an reports that the author of Tafsir Mazhari held this mawquf report to carry the force of a marfu' one, and to show that the righteousness required here is faith. That is Mazhari's judgement, given as his.",
            "bn": "বাগাভী, কুরতুবী ও ইবন কাসীর একই দৃশ্য আনেন, তবে তালিকা ভিন্ন। কুরতুবীর বর্ণনায় মানুষটি দাদা আর নাতি-নাতনির খোঁজও করে। ইবন কাসীরের বর্ণনায় সে ভাইয়ের খোঁজ করে, আর আত্মীয়দের তার মর্যাদার স্তরে তুলে আনা হয়। এর প্রতিটি পাঠে কথাগুলো সাঈদের নিজের, নবী ﷺ-এর দিকে সম্বন্ধিত নয়। মাআরিফুল কুরআন জানায়, তাফসীরে মাযহারীর লেখক এই মাওকূফ বর্ণনাকে মারফূ বর্ণনার সমান শক্তির মনে করেছেন। তাঁর মতে এটা স্পষ্ট করে যে এখানে যে নেককারির শর্ত, তা হলো ঈমান। এটা মাযহারীর নিজের মূল্যায়ন, তাঁর নামেই উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Behind, Beside and After",
          "bn": "পেছনে, পাশে, সামনে"
        },
        "p": [
          {
            "en": "The three words map a family in three directions. Aba', fathers, reaches back; Ma'arif al-Qur'an takes it as fathers and forefathers, and al-Qurtubi's version of Sa'id's report names a grandfather. Azwaj, spouses, stands alongside. Dhurriyyat, offspring, reaches forward, and the word is plural. The request admits no one on the strength of kinship alone: each of the three is governed by the single qualifier, whoever was righteous. What the verse sets out is a family meeting again, with every member present on the same terms.",
            "bn": "তিনটি শব্দ পরিবারকে তিন দিকে মেলে ধরে। আবা, অর্থাৎ পিতৃপুরুষ, পেছনের দিকে যায়। মাআরিফুল কুরআন একে বাবা ও পূর্বপুরুষ অর্থে নেয়, আর সাঈদের কথার কুরতুবী-বর্ণিত পাঠে দাদার নামও আছে। আযওয়াজ, অর্থাৎ স্বামী-স্ত্রী, পাশে দাঁড়িয়ে। যুররিয়্যাত, অর্থাৎ সন্তান-সন্ততি, সামনের দিকে যায়, আর শব্দটি বহুবচন। শুধু রক্তের সম্পর্কের জোরে এ দোয়া কাউকে ভেতরে আনে না। তিন দলের প্রত্যেকটির উপরেই একটি শর্ত: যারা নেককার। আয়াতটি দেখায় একটি পরিবারের আবার মিলিত হওয়া, যেখানে প্রত্যেক সদস্য আসছে একই শর্তে।"
          },
          {
            "en": "As-Sa'di glosses azwajihim broadly: their wives, and the husbands of the women, and their companions and comrades. On his reading the word covers spouses on both sides, a woman's husband as much as a man's wife, and reaches further to close companions. The verse itself says nothing more about spouses than that the righteous among them are included; it describes a family reunited and stops there. Ibn Kathir names the purpose of the gathering by the joy it brings: that their eyes be cooled by being together again.",
            "bn": "সা'দী আযওয়াজিহিম শব্দের ব্যাখ্যা দেন ব্যাপক অর্থে: তাদের স্ত্রীরা, নারীদের স্বামীরা, আর তাদের সঙ্গী ও সাথিরা। তাঁর পাঠে শব্দটি দুই দিকের দাম্পত্যকেই ধরে। পুরুষের স্ত্রী যেমন, নারীর স্বামীও তেমন। আরও এগিয়ে ঘনিষ্ঠ সঙ্গীদের পর্যন্ত পৌঁছায়। স্বামী-স্ত্রী নিয়ে আয়াত নিজে এর বেশি কিছু বলে না যে তাদের মধ্যে নেককারেরা অন্তর্ভুক্ত। একটি পরিবারের মিলনের ছবি দিয়ে সে থেমে যায়। ইবন কাসীর এই একত্র হওয়ার উদ্দেশ্য বলেন তার আনন্দ দিয়ে: আবার একসঙ্গে হয়ে যেন তাদের চোখ জুড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking the Mighty, the Wise",
          "bn": "পরাক্রমশালী প্রজ্ঞাময়ের কাছে চাওয়া"
        },
        "p": [
          {
            "en": "The request closes on two names: innaka anta al-'Aziz al-Hakim, it is You who are the Mighty, the Wise. At-Tabari reads them as mighty in His vengeance on His enemies and wise in His governing of His creation. Ibn Kathir explains: You whom none resists or overcomes, for what You will comes to be and what You do not will does not; wise in Your words and Your deeds, in what You legislate and what You decree. The Muyassar glosses al-'Aziz as He who subdues all things, and al-Hakim as wise in His governing and His making.",
            "bn": "আবেদন শেষ হয় দুটি নামে: ইন্নাকা আনতাল আযীযুল হাকীম, তুমিই মহাপরাক্রমশালী, প্রজ্ঞাময়। তাবারীর পাঠে: শত্রুদের থেকে প্রতিশোধ নেওয়ায় তিনি পরাক্রমশালী, সৃষ্টির ব্যবস্থাপনায় প্রজ্ঞাময়। ইবন কাসীরের ব্যাখ্যা: কেউ তাঁকে বাধা দিতে পারে না, পরাস্তও করতে পারে না। তুমি যা চাও তা-ই হয়, যা চাও না তা হয় না। তোমার কথায় ও কাজে, তোমার শরীয়তে ও তাকদীরে তুমি প্রজ্ঞাময়। মুয়াসসার আযীয অর্থ করে সবকিছুর উপর প্রবল, আর হাকীম অর্থ করে ব্যবস্থাপনা ও সৃষ্টিতে প্রজ্ঞাবান।"
          },
          {
            "en": "As-Sa'di ties both names to what has just been asked. By Your might, he paraphrases, You forgive their sins, lift from them what they fear and bring them through to every good. Al-Hakim, he says, puts things in their right places, and he gives the angels' reasoning in their own voice: we do not ask You, our Lord, for something Your wisdom requires otherwise; forgiveness for the believers is part of Your wisdom, which You made known on the tongues of Your messengers and which Your favour calls for. On his reading the names are not an ornament at the end of the request. They are its grounds.",
            "bn": "সা'দী দুটি নামকেই সদ্য চাওয়া বিষয়ের সঙ্গে জুড়ে দেন। তাঁর ভাষায়: তোমার পরাক্রম দিয়েই তুমি তাদের গুনাহ মাফ করো, যে ভয় তারা পায় তা দূর করো, আর সব কল্যাণে পৌঁছে দাও। হাকীম তিনি, যিনি প্রতিটি জিনিসকে তার ঠিক জায়গায় রাখেন। এরপর সা'দী ফেরেশতাদের যুক্তি তাদের মুখেই তুলে ধরেন: হে রব, তোমার প্রজ্ঞা যার উল্টোটা দাবি করে, এমন কিছু আমরা তোমার কাছে চাইছি না। মু'মিনদের মাগফিরাত তো তোমার প্রজ্ঞারই অংশ, যা তুমি রাসূলদের মুখে জানিয়েছ আর তোমার অনুগ্রহ যা দাবি করে। তাঁর পাঠে নাম দুটি দোয়ার শেষে সাজসজ্জা নয়। এগুলোই দোয়ার ভিত্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayed For Without Knowing",
          "bn": "অজান্তে কারও দোয়ায়"
        },
        "p": [
          {
            "en": "Ibn Kathir and Ma'arif al-Qur'an both report a remark of Mutarrif ibn Abdullah ibn ash-Shikhkhir. The most sincere of Allah's servants towards the believers, he said, are the angels; then he recited this verse, Our Lord, and admit them to gardens of perpetual residence which You have promised them. And the most treacherous of Allah's servants towards the believers, he said, are the devils. Ma'arif al-Qur'an adds that the angels pray in this way either because Allah has appointed them to it or because it is their nature to keep praying for His good servants.",
            "bn": "ইবন কাসীর ও মাআরিফুল কুরআন দুটোতেই মুতাররিফ ইবন আবদুল্লাহ ইবনুশ শিখখীরের একটি কথা আছে। তিনি বলেন, আল্লাহর বান্দাদের মধ্যে মু'মিনদের সবচেয়ে বেশি কল্যাণকামী হলো ফেরেশতারা। তারপর তিনি এ আয়াত পড়েন: হে আমাদের রব, তাদের প্রবেশ করাও চিরস্থায়ী জান্নাতে, যার ওয়াদা তুমি তাদের দিয়েছ। আর তিনি বলেন, আল্লাহর বান্দাদের মধ্যে মু'মিনদের সঙ্গে সবচেয়ে বড় প্রতারক হলো শয়তানরা। মাআরিফুল কুরআন যোগ করে, ফেরেশতারা এভাবে দোয়া করেন হয়তো আল্লাহ তাঁদের এ কাজে নিযুক্ত করেছেন বলে, নয়তো আল্লাহর নেক বান্দাদের জন্য দোয়া করে যাওয়াই তাঁদের স্বভাব বলে।"
          },
          {
            "en": "On the passage as a whole, Ibn Kathir brings a hadith from Sahih Muslim about the angels and one believer's prayer for another. It is not attached to this verse in particular. In Muslim's wording, Umm ad-Darda' reported that her husband heard the Messenger of Allah ﷺ say: Whoever supplicates for his brother in his absence, the angel entrusted with him says: Amin, and for you the like. Muslim placed it in his Sahih, and that placement is his own grading of it as sound (Sahih Muslim 2732b).",
            "bn": "পুরো অংশটি প্রসঙ্গে ইবন কাসীর সহীহ মুসলিম থেকে একটি হাদীস আনেন, ফেরেশতা আর এক মু'মিনের জন্য আরেক মু'মিনের দোয়া নিয়ে। হাদীসটি বিশেষ করে এ আয়াতের সঙ্গে যুক্ত নয়। মুসলিমের ভাষ্যে, উম্মুদ দারদা বর্ণনা করেন, তাঁর স্বামী রাসূলুল্লাহ ﷺ-কে বলতে শুনেছেন: যে তার ভাইয়ের অনুপস্থিতিতে তার জন্য দোয়া করে, তার জন্য নিযুক্ত ফেরেশতা বলেন: আমীন, আর তোমার জন্যও অনুরূপ। মুসলিম হাদীসটি তাঁর সহীহ গ্রন্থে রেখেছেন, আর সেখানে রাখাটাই তাঁর নিজের পক্ষ থেকে একে সহীহ গণ্য করা (সহীহ মুসলিম 2732b)।"
          },
          {
            "en": "The verse leaves a picture more than a rule. Unheard and unseen, a prayer is being made for believers and for the righteous of their families, named by relation: fathers, spouses, offspring. The hadith shows the same movement on earth, where a believer's prayer for someone who cannot hear it draws an angel's Amin back onto the one praying. A reader can join in from below, asking for parents, spouse and children what the angels ask from above. The Throne-bearers still have one more request to make in the next verse, and it is left for its own place.",
            "bn": "আয়াতটি কোনো বিধানের চেয়ে বেশি একটি ছবি রেখে যায়। কেউ শুনছে না, কেউ দেখছে না, তবু মু'মিনদের জন্য আর তাদের পরিবারের নেককারদের জন্য দোয়া চলছে। সম্পর্ক ধরে ধরে নাম আসছে: পিতৃপুরুষ, স্বামী-স্ত্রী, সন্তান। হাদীসটি দুনিয়াতেও একই ধারা দেখায়। যে শুনতে পাচ্ছে না, তার জন্য এক মু'মিনের দোয়া ফেরেশতার আমীন হয়ে দোয়াকারীর কাছেই ফিরে আসে। পাঠক নিচে থেকে এতে শরিক হতে পারেন। ফেরেশতারা উপরে যা চাইছেন, বাবা-মা, জীবনসঙ্গী আর সন্তানদের জন্য তিনিও তা-ই চাইতে পারেন। আরশবাহীদের আরও একটি আবেদন আছে পরের আয়াতে, সেটা তার নিজের জায়গার জন্য রইল।"
          }
        ]
      }
    ]
  },
  "40:15": {
    "sections": [
      {
        "h": {
          "en": "After the Call to Sincerity",
          "bn": "ইখলাসের ডাকের ঠিক পরে"
        },
        "p": [
          {
            "en": "Rafi' ad-darajat, dhu al-'arsh, yulqi ar-ruha min amrihi 'ala man yasha'u min 'ibadihi li-yundhira yawm at-talaq. The verse opens with no verb and no named subject. It simply goes on describing Him whom 40:14 has just told the believers to call upon, keeping their religion sincere for Him, even if the disbelievers dislike it. At-Tabari supplies the missing subject: He is the Exalted in degrees. He reads rafi' in the nominative, as the start of a new sentence, and adds that the accusative, tied back to 'so call upon Allah', would also have been correct.",
            "bn": "রাফীউদ দারাজাতি যুল আরশি, ইউলকির রূহা মিন আমরিহী আলা মাই ইয়াশাউ মিন ইবাদিহী লিইউনযিরা ইয়াওমাত তালাক। আয়াতের শুরুতে কোনো ক্রিয়া নেই, কর্তার নামও নেই। ৪০:১৪ আয়াতে মুমিনদের বলা হয়েছে, কাফিররা অপছন্দ করলেও দ্বীনকে আল্লাহর জন্য খাঁটি রেখে তাঁকে ডাকো। এ আয়াত সেই সত্তারই পরিচয় দিয়ে চলে। উহ্য কর্তাটি তাবারী নিজেই বসিয়ে দেন: তিনিই সুউচ্চ মর্যাদার অধিকারী। তাঁর মতে রাফী শব্দটি পেশযুক্ত, নতুন বাক্যের শুরু। সঙ্গে তিনি বলেন, 'অতএব আল্লাহকে ডাকো' কথাটির সঙ্গে জুড়ে যবরযুক্ত পড়লেও তা শুদ্ধ হতো।"
          },
          {
            "en": "Al-Qurtubi makes the same grammatical point, placing dhu al-'arsh on an implied subject, and reports al-Akhfash allowing the accusative as a phrase of praise. As-Sa'di gives the reason for the placement. Having commanded sincere worship, Allah now mentions something of His majesty and perfection that requires worship to be made sincere for Him. The order of the verse then follows of itself: who He is, what He sends down, upon whom, and why. This article takes those four in turn and returns to sincerity at the end.",
            "bn": "কুরতুবীও একই ব্যাকরণের কথা বলেন। তাঁর মতে যুল আরশের আগে একটি উদ্দেশ্য উহ্য আছে। তিনি আখফাশের মতও আনেন: প্রশংসার অর্থে যবরযুক্ত পড়াও চলে। আয়াতটি কেন ঠিক এখানে, সে কারণ দেখান সা'দী। খাঁটি ইবাদতের হুকুম দেওয়ার পর আল্লাহ নিজের মহিমা ও পূর্ণতার এমন কিছু উল্লেখ করছেন, যা দাবি করে ইবাদত শুধু তাঁরই জন্য হোক। এরপর আয়াতের ক্রম আপনা থেকেই সাজানো: তিনি কে, কী নাযিল করেন, কার উপর, আর কেন। এ লেখা এই চারটি দিক একে একে দেখবে, তারপর শেষে আবার ইখলাসে ফিরবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Exalted, or Raiser of Ranks",
          "bn": "নিজে সুউচ্চ, নাকি মর্যাদাদাতা"
        },
        "p": [
          {
            "en": "Rafi' ad-darajat is where the commentators divide most clearly. Al-Qurtubi's first gloss is rafi' as-sifat: exalted in attributes. Ibn Abbas, al-Kalbi and Sa'id ibn Jubayr, as he reports them, took the degrees to be the seven heavens. On the first reading, al-Qurtubi says, the name belongs among the attributes of the Essence. It means that none is higher in standing than He, and that He alone deserves every degree and kind of praise. He credits that explanation to al-Halimi.",
            "bn": "রাফীউদ দারাজাত নিয়েই তাফসীরকারদের মতভেদ সবচেয়ে স্পষ্ট। কুরতুবীর প্রথম ব্যাখ্যা: রাফীউস সিফাত, অর্থাৎ গুণাবলিতে সুউচ্চ। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ), কালবী ও সাঈদ ইবন জুবাইর দারাজাত বলতে সাতটি আসমান বুঝেছেন। কুরতুবী বলেন, প্রথম ব্যাখ্যা অনুযায়ী নামটি আল্লাহর সত্তাগত গুণের অন্তর্ভুক্ত। এর মানে, মর্যাদায় তাঁর চেয়ে উঁচু কেউ নেই। প্রশংসার সব স্তর আর সব ধরনের একমাত্র হকদার তিনিই। এ ব্যাখ্যা তিনি হালীমীর বলে উল্লেখ করেন।"
          },
          {
            "en": "Yahya ibn Sallam reads it the other way, and al-Qurtubi spells out the grammar. The degrees are those of His allies, raised in Paradise, so the adjective rafi' carries the sense of the active participle rafi': not the Raised, but the Raiser. Al-Baghawi gives only this reading: the Raiser of the degrees of the prophets and the friends of Allah in Paradise. Ma'arif al-Qur'an reports both. Some, it says, take darajat as attributes of perfection, most exalted; others read Him as raising the ranks of believers who fear Him, citing 6:83 and 3:163.",
            "bn": "ইয়াহইয়া ইবন সাল্লাম পড়েছেন উল্টো দিক থেকে, আর কুরতুবী তার ব্যাকরণ খুলে বলেন। এখানে দারাজাত হলো জান্নাতে তাঁর প্রিয় বান্দাদের মর্যাদার স্তর। তাই রাফী শব্দটি এখানে কর্তৃবাচক অর্থে: যাঁকে উঁচু করা হয় তিনি নন, যিনি উঁচু করেন তিনি। বাগাভী শুধু এই ব্যাখ্যাটিই দেন: জান্নাতে নবী ও আওলিয়াদের মর্যাদা যিনি বাড়ান। মাআরিফুল কুরআন দুটি মতই আনে। কেউ দারাজাত বলতে পূর্ণতার সর্বোচ্চ গুণাবলি বুঝেছেন। আবার কেউ পড়েছেন, তিনি সেই মুমিনদের মর্যাদা বাড়ান যাদের অন্তরে তাঁর ভয় আছে। প্রমাণ হিসেবে আনা হয়েছে ৬:৮৩ ও ৩:১৬৩।"
          },
          {
            "en": "Al-Muyassar and as-Sa'di keep to the first direction. Al-Muyassar describes Him as the Most High, whose degrees are exalted with an elevation by which He is distinct from His creation and His standing is raised. As-Sa'di uses almost the same words and adds that His attributes are majestic and His Essence lofty. Ibn Kathir, in the Arabic text fetched for this verse, speaks of His greatness and grandeur and the height of His Throne. Both readings stand in the sources, each with its names behind it, and this article does not choose between them.",
            "bn": "আল-মুয়াসসার ও সা'দী প্রথম পথেই থাকেন। মুয়াসসারের ভাষায় তিনি সর্বোচ্চ, তাঁর মর্যাদা এমন উঁচু যে তা দিয়ে তিনি সৃষ্টি থেকে আলাদা, আর তাঁর মহিমাও তাতে সমুন্নত। সা'দী প্রায় একই কথা বলেন, সঙ্গে যোগ করেন যে তাঁর গুণাবলি মহান, তাঁর সত্তা সমুচ্চ। এ আয়াতের জন্য আনা ইবন কাসীরের আরবি পাঠে আছে তাঁর মহত্ত্ব, গৌরব আর তাঁর আরশের উচ্চতার কথা। উৎসগুলোতে দুটি ব্যাখ্যাই আছে, প্রতিটির পেছনে আছে নির্দিষ্ট নাম। এ লেখা দুটির মধ্যে কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Throne in Their Words",
          "bn": "তাফসীরকারদের ভাষায় আরশ"
        },
        "p": [
          {
            "en": "On dhu al-'arsh the commentators use few words, and this article keeps to theirs. At-Tabari glosses it as the Owner of the sarir, the throne, that encompasses what is beneath it. Al-Qurtubi and al-Baghawi both say: its Creator and its Owner. Al-Qurtubi adds at once that this is not because He has any need of it. Al-Muyassar calls Him the Possessor of the mighty Throne. As-Sa'di describes Him as the Most High who rose over the Throne and has it as His own, and connects it with the exaltation of His degrees.",
            "bn": "যুল আরশ নিয়ে তাফসীরকারেরা অল্প কথা বলেন, আর এ লেখা তাঁদের কথার মধ্যেই থাকে। তাবারী এর ব্যাখ্যা করেন: সেই সারীর বা সিংহাসনের অধিপতি, যা তার নিচের সবকিছুকে ঘিরে রেখেছে। কুরতুবী ও বাগাভী দুজনেই বলেন: তিনি এর স্রষ্টা ও মালিক। কুরতুবী সঙ্গে সঙ্গে যোগ করেন, এর মানে এই নয় যে তিনি আরশের মুখাপেক্ষী। মুয়াসসার তাঁকে বলেন মহান আরশের অধিকারী। সা'দীর বর্ণনায় তিনি সেই সর্বোচ্চ সত্তা, যিনি আরশে ইসতিওয়া করেছেন এবং আরশ একান্তই তাঁর। তাঁর মর্যাদার উচ্চতার সঙ্গেও সা'দী একে মিলিয়ে দেখেন।"
          },
          {
            "en": "Al-Qurtubi records a second line under 'it is said'. The Arabs say thulla 'arshu fulan, someone's throne has been toppled, meaning his rule and his power are gone. On that usage dhu al-'arsh points to the permanence of His dominion and authority. Ibn Kathir speaks of His mighty Throne raised high above all His creation like a roof, and pairs the verse with 70:3 and 70:4, where the angels and the Ruh ascend to Him in a day whose measure is fifty thousand years. These are the sources' words; the article adds no account of its own.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি ব্যাখ্যা আনেন। আরবরা বলে, সুল্লা আরশু ফুলান: অমুকের সিংহাসন উল্টে গেছে, অর্থাৎ তার রাজত্ব ও প্রতাপ শেষ। এ ব্যবহার ধরলে যুল আরশ বোঝায় তাঁর রাজত্ব ও কর্তৃত্ব চিরস্থায়ী। ইবন কাসীর বলেন, তাঁর মহান আরশ গোটা সৃষ্টির উপরে ছাদের মতো সমুন্নত। এর সঙ্গে তিনি মিলিয়ে দেখান ৭০:৩ ও ৭০:৪, যেখানে ফেরেশতারা ও রূহ তাঁর দিকে উঠে যায় এমন এক দিনে, যার পরিমাণ পঞ্চাশ হাজার বছর। এগুলো উৎসেরই কথা। এ লেখা নিজের পক্ষ থেকে কোনো বিবরণ যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Ruh, Several Glosses",
          "bn": "এক রূহ, নানা ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Yulqi ar-ruha: He casts the ruh, the spirit. At-Tabari first glosses the clause plainly, He sends down revelation from His command, and then states that the people of interpretation differed over what ruh means here. Qatada said: revelation, from His command. Ad-Dahhak said: the Book, which He sends down on whom He wills. As-Suddi said: prophethood, upon whom He wills. Ibn Zayd's answer is the fullest, and at-Tabari quotes it at length, with the verses Ibn Zayd recited while he explained it.",
            "bn": "ইউলকির রূহা: তিনি রূহ নিক্ষেপ করেন, অর্থাৎ নাযিল করেন। তাবারী প্রথমে বাক্যটির সোজা ব্যাখ্যা দেন: তিনি নিজের হুকুম থেকে ওহি নাযিল করেন। তারপর জানান, এখানে রূহের অর্থ নিয়ে ব্যাখ্যাকারদের মধ্যে মতভেদ আছে। কাতাদা বলেছেন: তাঁর হুকুম থেকে আসা ওহি। যাহহাক বলেছেন: কিতাব, যা তিনি যার উপর চান নাযিল করেন। সুদ্দী বলেছেন: নবুওয়াত, যাকে তিনি চান তাকে দেন। সবচেয়ে বিস্তারিত উত্তর ইবন যায়দের। তাবারী তা লম্বা করে উদ্ধৃত করেন, ব্যাখ্যার সময় ইবন যায়দ যে আয়াতগুলো পড়েছিলেন সেগুলোসহ।"
          },
          {
            "en": "Ibn Zayd recited 42:52, 'thus We have revealed to you a ruh of Our command', and said: this Qur'an is the ruh; Allah revealed it to Jibril (AS), and Jibril is a ruh who brought it down to the Prophet ﷺ. Then he recited 26:193, 'the trustworthy Ruh brought it down'. The books Allah sent down to His prophets, he said, are the ruh, by which they warn of the Day of Meeting. At-Tabari then settles the matter in one sentence: these sayings are close in meaning, even if the words of those who said them differ.",
            "bn": "ইবন যায়দ পড়লেন ৪২:৫২: 'এভাবে আমি তোমার প্রতি আমার হুকুমের এক রূহ ওহি করেছি।' তারপর বললেন, এই কুরআনই রূহ। আল্লাহ তা জিবরীল (আঃ)-এর কাছে ওহি করেছেন, আর জিবরীল নিজেও রূহ, যিনি তা নিয়ে নবী ﷺ-এর কাছে নেমে এসেছেন। এরপর তিনি পড়লেন ২৬:১৯৩: 'বিশ্বস্ত রূহ তা নিয়ে অবতরণ করেছে।' তাঁর কথায়, আল্লাহ নবীদের উপর যত কিতাব নাযিল করেছেন সবই রূহ, যা দিয়ে তাঁরা সাক্ষাতের দিন সম্পর্কে সতর্ক করেন। তাবারী একটিমাত্র বাক্যে বিষয়টির ইতি টানেন: এই মতগুলোর অর্থ কাছাকাছি, যদিও বক্তাদের শব্দ ভিন্ন।"
          },
          {
            "en": "Al-Qurtubi gives revelation and prophethood as his gloss, reports Ibn Zayd's 'the Qur'an', and adds under 'it is said' that the ruh is Jibril, citing 26:193 and 16:102. Ibn Kathir pairs the verse with 16:2 and with 26:192 to 26:194, without stopping on a single gloss. On why it is called ruh, al-Qurtubi and al-Baghawi agree: people come alive by it as bodies live by their spirits, al-Qurtubi adding, alive from the death of disbelief. As-Sa'di says revelation is to souls and hearts what spirits are to bodies; without it the heart neither comes right nor prospers.",
            "bn": "কুরতুবী নিজে রূহের ব্যাখ্যা দেন ওহি ও নবুওয়াত। ইবন যায়দের 'কুরআন' ব্যাখ্যাটিও আনেন। তারপর 'বলা হয়' দিয়ে যোগ করেন, রূহ মানে জিবরীল, আর প্রমাণ হিসেবে আনেন ২৬:১৯৩ ও ১৬:১০২। ইবন কাসীর আয়াতটিকে মিলিয়ে দেখান ১৬:২ এবং ২৬:১৯২ থেকে ২৬:১৯৪ আয়াতের সঙ্গে, কোনো একক ব্যাখ্যায় থামেন না। একে রূহ কেন বলা হলো, এ প্রশ্নে কুরতুবী ও বাগাভী একমত: দেহ যেমন রূহ দিয়ে বাঁচে, মানুষ তেমনি এ দিয়ে বেঁচে ওঠে। কুরতুবী যোগ করেন, বেঁচে ওঠে কুফরের মৃত্যু থেকে। সা'দী বলেন, দেহের কাছে রূহ যা, প্রাণ ও অন্তরের কাছে ওহি তা-ই। ওহি ছাড়া অন্তর না ঠিক থাকে, না সফল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "By His Command, His Choice",
          "bn": "তাঁর হুকুমে, তাঁর বাছাইয়ে"
        },
        "p": [
          {
            "en": "Min amrihi, of His command, receives three glosses. Al-Baghawi reports Ibn Abbas: from His decree. Then, under 'it is said': from His word. And from Muqatil: by His command. Al-Qurtubi lists the same three, explaining the last as min standing in for bi, the preposition of means. As-Sa'di reads amr as His command in which lie the benefit and welfare of His servants. None of these writers sets any gloss against another, and this article leaves the three side by side as they leave them.",
            "bn": "মিন আমরিহী, তাঁর হুকুম থেকে: এর তিনটি ব্যাখ্যা পাওয়া যায়। বাগাভী ইবন আব্বাস (রাঃ)-এর মত আনেন: তাঁর ফায়সালা থেকে। তারপর 'বলা হয়' দিয়ে: তাঁর বাণী থেকে। আর মুকাতিলের মত: তাঁর হুকুমে। কুরতুবীও এই তিনটি মত আনেন। শেষটির ব্যাখ্যায় বলেন, এখানে মিন অব্যয়টি বি-র অর্থে, অর্থাৎ মাধ্যম বোঝাতে। সা'দীর কাছে আমর মানে তাঁর সেই হুকুম, যাতে বান্দাদের উপকার ও কল্যাণ নিহিত। এঁদের কেউ এক ব্যাখ্যাকে আরেকটির বিপরীতে দাঁড় করান না। এ লেখাও তিনটিকে তেমনি পাশাপাশি রেখে দেয়।"
          },
          {
            "en": "'Ala man yasha'u min 'ibadihi: upon whom He wills of His servants. Al-Qurtubi says these are the prophets. He wills that they be prophets, and nobody else has any will in the matter. As-Sa'di calls them the messengers whom Allah favoured and singled out for His revelation and for calling His servants. Al-Muyassar places the whole clause under mercy: it is from His mercy to His servants that He sends them messengers and casts to them the revelation by which they live, so that they see their affairs with clear sight.",
            "bn": "আলা মাই ইয়াশাউ মিন ইবাদিহী: নিজের বান্দাদের মধ্যে যার উপর তিনি চান। কুরতুবী বলেন, এঁরা নবীগণ। তাঁরা নবী হবেন, এটা তিনিই চান, এতে আর কারও কোনো ইচ্ছা খাটে না। সা'দী তাঁদের বলেন সেই রাসূলগণ, যাঁদের আল্লাহ মর্যাদা দিয়েছেন এবং নিজের ওহি ও বান্দাদের দাওয়াতের জন্য বিশেষভাবে বেছে নিয়েছেন। মুয়াসসার পুরো বাক্যটিকে রহমতের অধীনে রাখে। বান্দাদের প্রতি তাঁর রহমত থেকেই তিনি তাদের কাছে রাসূল পাঠান, তাঁদের উপর এমন ওহি নাযিল করেন যা দিয়ে মানুষ বেঁচে থাকে, যাতে নিজেদের ব্যাপারে তারা পরিষ্কার দৃষ্টি পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Carries the Warning",
          "bn": "সতর্কবাণীর বাহক কে"
        },
        "p": [
          {
            "en": "Li-yundhira: so that he may warn. Al-Qurtubi gives two possible subjects. The messenger is sent to warn of the Day of Resurrection, so the verb refers back to him; or, it is said, Allah warns creation of that Day by sending the messengers. At-Tabari takes the first: the servant on whom the ruh is cast warns those Allah commands him to warn, of the punishment of a day on which the people of heaven and the people of earth meet. Al-Baghawi agrees: that the Prophet may warn by the revelation.",
            "bn": "লিইউনযিরা: যাতে সে সতর্ক করে। কুরতুবী এর কর্তা নিয়ে দুটি সম্ভাবনা দেখান। রাসূলকে পাঠানো হয় কিয়ামতের দিন সম্পর্কে সতর্ক করতে, তাই ক্রিয়াটি তাঁর দিকেই ফেরে। অথবা, 'বলা হয়', আল্লাহ নিজেই রাসূল পাঠিয়ে সৃষ্টিকে সেদিন সম্পর্কে সতর্ক করেন। তাবারী প্রথমটি নেন। যার উপর রূহ নাযিল হয়, সেই বান্দা আল্লাহর হুকুমে মানুষকে সেই দিনের আযাব সম্পর্কে সতর্ক করে, যেদিন আসমানের বাসিন্দা ও জমিনের বাসিন্দারা মিলিত হবে। বাগাভীও তা-ই বলেন: যাতে নবী ওহি দিয়ে সতর্ক করেন।"
          },
          {
            "en": "There is also a reading with ta', li-tundhira, 'so that you may warn', addressed to the Prophet ﷺ. Al-Qurtubi attributes it to Ibn Abbas, al-Hasan and Ibn as-Samayfa'; al-Baghawi attributes it to Ya'qub. As-Sa'di explains what the warning is for. It makes servants fear that Day and urges them to prepare for it with the means that save them from what it holds. The point of sending messengers at all, he says, is the happiness of servants in their religion, their world and their hereafter, and the removal of misery from them in all three.",
            "bn": "তা দিয়ে আরেকটি কিরাআতও আছে: লিতুনযিরা, 'যাতে তুমি সতর্ক করো', নবী ﷺ-কে সম্বোধন করে। কুরতুবী এ কিরাআত ইবন আব্বাস (রাঃ), হাসান ও ইবনুস সামাইফার বলে উল্লেখ করেন। বাগাভী একে ইয়াকূবের কিরাআত বলেন। সতর্কবাণীর উদ্দেশ্য কী, সা'দী তা ব্যাখ্যা করেন। এটা বান্দাদের মনে সেই দিনের ভয় জাগায়, আর সেদিনের বিপদ থেকে বাঁচার উপায় দিয়ে প্রস্তুতি নিতে তাগিদ দেয়। তাঁর মতে, রাসূল পাঠানোর মূল লক্ষ্যই হলো দ্বীন, দুনিয়া ও আখিরাতে বান্দাদের সৌভাগ্য, আর এই তিনটি ক্ষেত্রেই তাদের দুর্ভাগ্য দূর করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Meets Whom That Day",
          "bn": "সেদিন কে কার মুখোমুখি"
        },
        "p": [
          {
            "en": "Yawm at-talaq, the Day of Meeting. At-Tabari and Ibn Kathir both report, through 'Ali ibn Abi Talhah, that Ibn Abbas called it a name of the Day of Resurrection, a Day Allah has made great and warned His servants of. As to who meets whom, the early authorities answered in several ways. Qatada, as-Suddi, Bilal ibn Sa'd and Sufyan ibn 'Uyaynah, as Ibn Kathir lists them, said the people of heaven and the people of earth meet. At-Tabari gives this from Qatada and as-Suddi, and al-Qurtubi from Ibn Abbas and Qatada.",
            "bn": "ইয়াওমুত তালাক, সাক্ষাতের দিন। তাবারী ও ইবন কাসীর দুজনেই আলী ইবন আবী তালহার সূত্রে বর্ণনা করেন, ইবন আব্বাস (রাঃ) একে কিয়ামতের দিনের নামগুলোর একটি বলেছেন। এ দিনকে আল্লাহ মহা গুরুত্ব দিয়েছেন এবং বান্দাদের এ নিয়ে সতর্ক করেছেন। সেদিন কে কার সঙ্গে মিলিত হবে, এ প্রশ্নে পূর্বসূরিরা নানা উত্তর দিয়েছেন। ইবন কাসীরের তালিকায় কাতাদা, সুদ্দী, বিলাল ইবন সা'দ ও সুফিয়ান ইবন উয়াইনা বলেছেন: আসমানের বাসিন্দা ও জমিনের বাসিন্দারা মিলিত হবে। তাবারী এ মত আনেন কাতাদা ও সুদ্দী থেকে, কুরতুবী আনেন ইবন আব্বাস (রাঃ) ও কাতাদা থেকে।"
          },
          {
            "en": "Qatada also said: the Creator and the created. Al-Qurtubi adds Abu al-'Aliyah and Muqatil to this, and al-Baghawi names Muqatil with Qatada. Ibn Jurayj reports from Ibn Abbas that Adam (AS) meets the last of his descendants. Ibn Zayd says the servants meet one another. Al-Muyassar says the first and the last generations meet, and al-Qurtubi reports that meaning from Ibn Abbas, adding that they meet on a single plain. Maymun ibn Mihran said the wrongdoer and the wronged meet, and al-Baghawi's report of him adds the disputants.",
            "bn": "কাতাদা আরও বলেছেন: স্রষ্টা ও সৃষ্টি মিলিত হবে। কুরতুবী এ মতের সঙ্গে আবুল আলিয়া ও মুকাতিলের নাম যোগ করেন, বাগাভী কাতাদার সঙ্গে মুকাতিলের নাম আনেন। ইবন জুরাইজ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, সেদিন আদম (আঃ) তাঁর শেষ বংশধরের মুখোমুখি হবেন। ইবন যায়দ বলেন, বান্দারা পরস্পর মিলিত হবে। মুয়াসসার বলে, আগের ও পরের সব প্রজন্ম মিলিত হবে। কুরতুবী এ অর্থ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করে যোগ করেন, তারা একই প্রান্তরে জড়ো হবে। মাইমূন ইবন মিহরান বলেছেন, জালিম ও মজলুম মুখোমুখি হবে। বাগাভীর বর্ণনায় তাঁর কথায় বিবাদী পক্ষগুলোর কথাও আছে।"
          },
          {
            "en": "Other glosses come under 'it is said': the worshippers and those they worshipped, in al-Qurtubi and al-Baghawi; each person meeting the recompense of his deed, in al-Qurtubi, or meeting the deed itself, in al-Baghawi. As-Sa'di gathers several: the Creator and the created, the created with each other, and those who acted with their deeds and their recompense. Ibn Kathir says it may be held to include all of this, and every doer meeting what he did of good and evil. Al-Qurtubi's verdict is shorter: all of it is sound in meaning.",
            "bn": "'বলা হয়' দিয়ে আরও কিছু ব্যাখ্যা আসে। কুরতুবী ও বাগাভীতে আছে: ইবাদতকারীরা ও যাদের তারা ইবাদত করত, তারা মুখোমুখি হবে। কুরতুবীতে আছে, প্রত্যেকে নিজের আমলের প্রতিফল পাবে। বাগাভীতে আছে, প্রত্যেকে নিজের আমলের সঙ্গেই মিলিত হবে। সা'দী কয়েকটি একসঙ্গে জুড়ে দেন: স্রষ্টা ও সৃষ্টি, সৃষ্টিরা পরস্পর, আর আমলকারীরা তাদের আমল ও প্রতিদানের সঙ্গে। ইবন কাসীর বলেন, বলা যায় কিয়ামতের দিন এর সবকিছুকেই ধারণ করে, আর প্রত্যেক আমলকারী ভালো-মন্দ যা করেছে তার মুখোমুখি হবে। কুরতুবীর রায় আরও সংক্ষিপ্ত: সবগুলোর অর্থই সঠিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Degrees Raised by Sincerity",
          "bn": "ইখলাসে যার মর্যাদা বাড়ে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is cited here, and they report no occasion of revelation for it. What as-Sa'di does give is a thread back to the verse before. Allah's degrees are so high, he writes, that He is approached only by the pure, purified deed, which is sincerity; and sincerity is what raises the degrees of those who have it, brings them near to Him and sets them above His creation. In his explanation the word degrees thus appears twice, once for the Lord and once for the sincere.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। আয়াতটির শানে নুযূলও তারা উল্লেখ করেনি। তবে সা'দী আগের আয়াতের সঙ্গে একটা যোগসূত্র দেখান। তিনি লেখেন, আল্লাহর মর্যাদা এত উঁচু যে পবিত্র ও পরিশুদ্ধ আমল ছাড়া তাঁর নৈকট্য পাওয়া যায় না, আর সেই আমল হলো ইখলাস। ইখলাসই তার অধিকারীদের মর্যাদা বাড়ায়, তাদের আল্লাহর কাছে নিয়ে যায়, সৃষ্টির উপরে স্থান দেয়। ফলে তাঁর ব্যাখ্যায় মর্যাদা শব্দটি আসে দুবার: একবার রবের জন্য, আরেকবার মুখলিস বান্দার জন্য।"
          },
          {
            "en": "Read in that order, the verse answers the command of 40:14 from both ends. The One called upon is above every degree and owns the Throne. He does not leave His servants to guess, but casts the ruh, whichever gloss of it one follows, upon those He chooses, so that a warning reaches them before the Meeting. What the reader can take from it is practical. The warning has arrived and the Meeting has not, and the time in between is the time for worship kept for Him alone, and for settling with others what would otherwise be settled on that Day.",
            "bn": "এই ক্রমে পড়লে আয়াতটি ৪০:১৪-এর হুকুমের জবাব দেয় দুই দিক থেকে। যাঁকে ডাকা হচ্ছে, তিনি সব মর্যাদার ঊর্ধ্বে, আরশের অধিপতি। তিনি বান্দাদের অনুমানের উপর ছেড়ে দেন না। রূহের যে ব্যাখ্যাই ধরা হোক, তিনি তা নাযিল করেন নিজের বাছাই করা বান্দাদের উপর, যাতে সাক্ষাতের আগেই সতর্কবাণী পৌঁছে যায়। পাঠকের জন্য শিক্ষাটা হাতে-কলমে। সতর্কবাণী এসে গেছে, সাক্ষাৎ এখনো আসেনি। মাঝের এই সময়টুকুই একমাত্র তাঁর জন্য ইবাদত খাঁটি করার সময়, আর মানুষের সঙ্গে সেই হিসাব মিটিয়ে নেওয়ার সময়, যা নইলে সেদিন মেটাতে হবে।"
          }
        ]
      }
    ]
  },
  "40:24": {
    "sections": [
      {
        "h": {
          "en": "Signs Sent, and to Whom",
          "bn": "নিদর্শন গেল কার কাছে"
        },
        "p": [
          {
            "en": "This verse finishes a sentence that 40:23 begins: and We certainly sent Musa (AS) with Our signs and a clear authority. Verse 40:24 supplies the destination and the response in seven Arabic words: to Fir'awn, Haman and Qarun, and they said, a sorcerer, a liar. The abridged English Ibn Kathir glosses the authority as proof and evidence. Read together, the two verses set a full delivery of proof beside a reply of two nouns, with nothing in between, and that bareness is what the passage asks us to notice.",
            "bn": "এ আয়াত একটা বাক্যের শেষাংশ। শুরুটা ৪০:২৩ আয়াতে: আমি মূসা (আঃ)-কে পাঠিয়েছিলাম আমার নিদর্শন আর সুস্পষ্ট প্রমাণ দিয়ে। কার কাছে পাঠানো হলো আর তারা কী জবাব দিল, ৪০:২৪ আয়াত তা বলে দেয় আরবির মাত্র সাতটি শব্দে: ফিরআউন, হামান ও কারূনের কাছে, আর তারা বলল, যাদুকর, মিথ্যুক। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ সুলতান শব্দের ব্যাখ্যা দেয় দলিল ও প্রমাণ। দুই আয়াত পাশাপাশি পড়লে দেখা যায়, একদিকে প্রমাণের পুরো ভান্ডার, অন্যদিকে দুটি বিশেষ্যের জবাব। মাঝখানে আর কিছু নেই। এই শূন্যতাটুকুই খেয়াল করতে বলে আয়াতগুলো।"
          },
          {
            "en": "Why tell this story here? The verses just before ask whether the listeners have travelled through the land and seen the end of those before them, whose messengers came with clear proofs, who disbelieved and were seized (40:21 and 40:22). The abridged Ibn Kathir opens the Musa passage as Allah consoling His Prophet ﷺ for his people's disbelief and giving him glad tidings of a good end, as happened to Musa. Ma'arif al-Qur'an reads these sections the same way: comfort for a Prophet saddened by mounting hostility.",
            "bn": "গল্পটা এখানে কেন? ঠিক আগের আয়াত দুটি জিজ্ঞেস করে, শ্রোতারা কি পৃথিবীতে ঘুরে দেখেনি তাদের পূর্ববর্তীদের পরিণাম? তাদের রসূলরা স্পষ্ট প্রমাণ নিয়ে এসেছিলেন, তারা অস্বীকার করেছিল, তাই আল্লাহ তাদের পাকড়াও করেছিলেন (৪০:২১ ও ৪০:২২)। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ মূসা (আঃ)-এর এই অংশটি শুরু করে এভাবে: নিজের কওমের অবিশ্বাসে আল্লাহ তাঁর নবী ﷺ-কে সান্ত্বনা দিচ্ছেন, আর মূসা (আঃ)-এর মতো শুভ পরিণামের সুসংবাদ দিচ্ছেন। মাআরিফুল কুরআনও এ অংশকে একইভাবে পড়ে। বিরোধিতা বেড়ে চলায় নবী ﷺ ব্যথিত ছিলেন, এ কাহিনি তাঁর জন্য সান্ত্বনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Sovereign, Minister, Man of Treasure",
          "bn": "রাজা, মন্ত্রী আর ধনকুবের"
        },
        "p": [
          {
            "en": "The commentators identify the three briefly and in nearly the same words. Of Fir'awn, Ibn Kathir's Arabic says he was the king of the Copts in the land of Egypt; the Muyassar calls him simply the king of Egypt. Of Haman, Ibn Kathir says he was his minister, wazir, in his kingdom, and the Muyassar, al-Qurtubi and as-Sa'di all use the same word. The abridged English renders the role as adviser. None of the texts fetched for this verse says more about him than that, and this article does not either.",
            "bn": "তিনজনের পরিচয় তাফসীরকারেরা দেন সংক্ষেপে, প্রায় একই ভাষায়। ফিরআউন সম্পর্কে ইবন কাসীরের আরবি তাফসীর বলে, সে ছিল মিসর দেশে কিবতীদের রাজা। মুয়াসসার শুধু বলে, মিসরের রাজা। হামান সম্পর্কে ইবন কাসীর বলেন, সে ছিল তার রাজ্যে তার মন্ত্রী, ওয়াযীর। মুয়াসসার, কুরতুবী আর সা'দী সবাই একই শব্দ ব্যবহার করেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ পদটির অনুবাদ করে উপদেষ্টা। এ আয়াতের জন্য যে তাফসীরগুলো পড়া হয়েছে, তার কোনোটিই হামান সম্পর্কে এর বেশি কিছু বলে না। এ লেখাও বলবে না।"
          },
          {
            "en": "Qarun is described from two angles. Ibn Kathir says he had more wealth and trade than anyone of his time; the Muyassar and al-Qurtubi call him the owner of wealth and treasures. As-Sa'di instead places him by lineage: he was of Musa's own people, and he transgressed against them with his wealth. As-Sa'di's phrase, kana min qawmi Musa fa-bagha 'alayhim, is the wording of 28:76, where the Qur'an opens Qarun's own story, and that verse already has its own Tadabbur entry.",
            "bn": "কারূনকে দেখা হয় দুই দিক থেকে। ইবন কাসীর বলেন, তার যুগে সম্পদ আর ব্যবসায় তার চেয়ে বড় কেউ ছিল না। মুয়াসসার ও কুরতুবী তাকে বলেন ধনসম্পদ আর গুপ্তধনের মালিক। সা'দী অবশ্য তার পরিচয় দেন বংশ দিয়ে। সে ছিল মূসা (আঃ)-এর নিজের কওমের লোক, তারপর সম্পদের জোরে নিজের লোকদের উপরই বাড়াবাড়ি করেছিল। সা'দীর বাক্যটি, কানা মিন কাওমি মূসা ফাবাগা আলাইহিম, হুবহু ২৮:৭৬ আয়াতের ভাষা। সেখানে কুরআন কারূনের নিজের কাহিনি শুরু করে, আর সে আয়াতের তাদাব্বুর আলাদাভাবে আছে।"
          },
          {
            "en": "So the reply came from inside as well as outside. Two of the three ruled Egypt, and the third, on as-Sa'di's account, belonged to the very people Musa (AS) had come to deliver. The Qur'an names the same three men together again in 29:39, where they grow arrogant in the land after Musa came to them with clear proofs; that verse, too, is treated separately. The interest here is narrower: not what each man held, but what all three said.",
            "bn": "অর্থাৎ প্রত্যাখ্যান এসেছিল বাইরে থেকেও, ভেতর থেকেও। তিনজনের দুজন মিসর শাসন করত। তৃতীয়জন, সা'দীর বর্ণনা অনুযায়ী, ছিল সেই কওমেরই লোক, যাদের উদ্ধার করতে মূসা (আঃ) এসেছিলেন। ২৯:৩৯ আয়াতে কুরআন এই তিনজনের নাম আবার একসঙ্গে নেয়। সেখানে মূসা (আঃ) স্পষ্ট প্রমাণ নিয়ে আসার পর তারা দেশে অহংকার করে। সে আয়াতের আলোচনাও আলাদা। এখানে আমাদের নজর আরও সরু: কার হাতে কী ছিল তা নয়, তিনজন মিলে কী বলেছিল সেটা।"
          }
        ]
      },
      {
        "h": {
          "en": "Singled Out by Name",
          "bn": "নাম ধরে আলাদা করা"
        },
        "p": [
          {
            "en": "Why name three men when Musa (AS) was sent to a whole people? Al-Qurtubi raises the point and answers it: He singled them out by mention because the management of the hostility to Musa turned on them, madar at-tadbir. Fir'awn was the king, Haman the minister, Qarun the owner of wealth and treasures. On this reading the verse does not name the whole of Egypt. It names the three men on whom, as al-Qurtubi sees it, the planning against Musa depended.",
            "bn": "মূসা (আঃ)-কে তো পাঠানো হয়েছিল গোটা এক জাতির কাছে, তাহলে তিনজনের নাম কেন? কুরতুবী প্রশ্নটা তোলেন, জবাবও দেন। আল্লাহ বিশেষ করে তাদের নাম নিয়েছেন, কারণ মূসা (আঃ)-এর সঙ্গে শত্রুতার সব পরিকল্পনা ঘুরত তাদের ঘিরেই। তাঁর ভাষায়, মাদারুত তাদবীর। ফিরআউন রাজা, হামান মন্ত্রী, কারূন ধনসম্পদ আর গুপ্তধনের মালিক। এ ব্যাখ্যায় আয়াতটি পুরো মিসরের নাম নিচ্ছে না। নাম নিচ্ছে সেই তিনজনের, কুরতুবীর মতে মূসা (আঃ)-এর বিরুদ্ধে সব ফন্দি যাদের উপর নির্ভর করত।"
          },
          {
            "en": "Al-Qurtubi adds a second remark about Qarun, whose place beside a king and his minister might look odd. Allah joined him with the other two, he says, because his work in disbelief and denial was like their work. Rank and role differed; the deed was the same. The verb that follows, fa-qalu, they said, is plural, and the verse gives the two words to all three without telling us who spoke them first.",
            "bn": "কারূন সম্পর্কে কুরতুবী আরেকটি কথা যোগ করেন। এক রাজা আর তার মন্ত্রীর পাশে তার জায়গাটা খানিক বেমানান মনে হতে পারে। কুরতুবী বলেন, আল্লাহ তাকে ওই দুজনের সঙ্গে জুড়ে দিয়েছেন, কারণ কুফর আর অস্বীকারে তার আমল ছিল তাদের আমলের মতোই। পদ আর ভূমিকা আলাদা, কাজ একই। এরপর যে ক্রিয়াটি আসে, ফাকালূ, অর্থাৎ তারা বলল, সেটা বহুবচন। শব্দ দুটি আয়াত তিনজনের মুখেই তুলে দেয়। কে আগে বলেছিল, তা জানায় না।"
          },
          {
            "en": "The other commentators look at the same three from the side of their response rather than their function. As-Sa'di says simply that all of them rejected him with the harshest rejection. The Muyassar joins the identification to the stance: they denied his message and grew arrogant, and said of him that he was a sorcerer and a liar. These readings do not conflict with al-Qurtubi's; they complete it, one explaining why the three are named, the other what they did.",
            "bn": "অন্য তাফসীরকারেরা এই তিনজনকে দেখেন তাদের ভূমিকার দিক থেকে নয়, তাদের প্রতিক্রিয়ার দিক থেকে। সা'দী সোজা বলেন, তারা সবাই তাঁকে সবচেয়ে কঠোরভাবে প্রত্যাখ্যান করেছিল। মুয়াসসার পরিচয়ের সঙ্গে অবস্থানটাও জুড়ে দেয়। তারা তাঁর রিসালাত অস্বীকার করল, অহংকার করল, আর তাঁর সম্পর্কে বলল, সে যাদুকর, মিথ্যুক। এসব ব্যাখ্যা কুরতুবীর কথার বিরোধী নয়, বরং তার পরিপূরক। একটি বলে তিনজনের নাম কেন এল, অন্যটি বলে তারা কী করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words Instead of an Answer",
          "bn": "জবাবের বদলে দুটি শব্দ"
        },
        "p": [
          {
            "en": "Sahirun kadhdhab: a sorcerer, a liar. At-Tabari glosses each word in turn. Sahir: one who works magic on the staff, so that whoever looks at it sees a serpent moving. He ties the word to a particular sign the accusers had witnessed. Kadhdhab: one who lies about Allah, claiming that He sent him to people as a messenger. So the first word explains away the sign and the second explains away the message, and between them the whole mission is accounted for without being believed.",
            "bn": "সাহিরুন কাযযাব: যাদুকর, মিথ্যুক। তাবারী শব্দ দুটির ব্যাখ্যা দেন একটি একটি করে। সাহির মানে, যে লাঠির উপর যাদু করে, ফলে যে-ই তাকায় সে দেখে একটা সাপ ছুটে বেড়াচ্ছে। অর্থাৎ শব্দটিকে তিনি বাঁধেন অভিযোগকারীদের চোখে দেখা একটি নির্দিষ্ট নিদর্শনের সঙ্গে। কাযযাব মানে, যে আল্লাহর নামে মিথ্যা বলে, দাবি করে যে আল্লাহ তাকে মানুষের কাছে রসূল করে পাঠিয়েছেন। প্রথম শব্দে নিদর্শনটা ব্যাখ্যা করে উড়িয়ে দেওয়া হলো, দ্বিতীয় শব্দে বার্তাটা। দুইয়ে মিলে পুরো রিসালাতের একটা হিসাব দাঁড়িয়ে গেল, বিশ্বাস না করেই।"
          },
          {
            "en": "Ibn Kathir's Arabic widens the first word. They belied him, he says, and made him out to be a sorcerer, mumakhriq and mumawwih, a trickster and one who dresses falsehood up to look true, and a liar in claiming that Allah had sent him. The abridged English adds madman to the list, though the verse itself has only the two words. The Muyassar frames their reply as a question they threw back at him: how could he claim to have been sent to people as a messenger?",
            "bn": "ইবন কাসীরের আরবি তাফসীর প্রথম শব্দটিকে আরও বিস্তৃত করে। তিনি বলেন, তারা তাঁকে মিথ্যাবাদী ঠাওরাল, বানিয়ে দিল যাদুকর, মুমাখরিক ও মুমাওয়িহ, অর্থাৎ ভেলকিবাজ আর মিথ্যাকে সত্যের রং মাখিয়ে দেখানো লোক। আর আল্লাহ তাঁকে পাঠিয়েছেন, এ দাবিতে তাঁকে বলল মিথ্যুক। সংক্ষিপ্ত ইংরেজি সংস্করণ তালিকায় পাগল শব্দটাও যোগ করে, যদিও আয়াতে আছে কেবল দুটি শব্দ। মুয়াসসার তাদের জবাবকে সাজায় একটা পাল্টা প্রশ্ন হিসেবে: সে কী করে দাবি করে যে তাকে মানুষের কাছে রসূল করে পাঠানো হয়েছে?"
          },
          {
            "en": "The second word is the intensive form. The accusers did not say kadhib, someone who has lied, but kadhdhab, a liar through and through. The charge is not that Musa (AS) slipped once; it casts him as a liar by nature, and once that is believed the case is closed before any sign is examined. That is what makes a label more efficient than an argument. It is a verdict on the person, issued before his evidence is heard.",
            "bn": "দ্বিতীয় শব্দটি আধিক্যবাচক রূপ। তারা কাযিব বলেনি, যার মানে যে একবার মিথ্যা বলেছে। বলেছে কাযযাব, আগাগোড়া মিথ্যুক। অভিযোগটা এমন নয় যে মূসা (আঃ) একবার ভুল বলে ফেলেছেন। তাঁকে বানানো হলো স্বভাবগত মিথ্যুক। এ কথা একবার মেনে নিলে কোনো নিদর্শন পরীক্ষা করার আগেই মামলা শেষ। যুক্তির চেয়ে তকমা এ কারণেই বেশি কাজের। প্রমাণ শোনার আগেই মানুষটার বিরুদ্ধে রায় দিয়ে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Renaming What Could Not Be Met",
          "bn": "ঠেকাতে না পেরে নতুন নাম"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the motive in a single clause: when they were unable to counter him, they carried the miracles over to sorcery, hamalu al-mu'jizat 'ala as-sihr. In his account the label came after the failure, not before it. They had been shown signs, and they could neither match them nor refute them, so they reclassified them. The proof stayed exactly as it was. Only its name changed, and under the new name it no longer demanded anything of them.",
            "bn": "কুরতুবী কারণটা বলেন এক বাক্যে: যখন তারা তাঁর মোকাবিলা করতে অক্ষম হলো, তখন মুজিযাগুলোকে যাদু বলে চালিয়ে দিল। তাঁর ভাষায়, হামালুল মুজিযাতি আলাস সিহর। অর্থাৎ তাঁর বর্ণনায় তকমাটা এসেছে ব্যর্থতার পরে, আগে নয়। তাদের নিদর্শন দেখানো হয়েছিল। তার সমকক্ষ কিছু তারা আনতে পারেনি, খণ্ডনও করতে পারেনি। তাই নিদর্শনগুলোকে অন্য খাতে ফেলে দিল। প্রমাণ যেমন ছিল তেমনই রইল, বদলাল শুধু তার নাম। আর নতুন নামে সেটা তাদের কাছে আর কিছুই দাবি করল না।"
          },
          {
            "en": "The Muyassar names the stance behind the words: they denied his message and grew arrogant. That pairing is worth holding on to. A sorcerer may be feared or even admired, but he never has to be obeyed, and a liar may simply be ignored. Both words turn a messenger, who must be followed, into a performer or a fraud, who may safely be set aside. So the accusation is less a mistake about the facts than a way of staying above the message.",
            "bn": "কথাগুলোর পেছনের মনোভাবটা মুয়াসসার নাম ধরে বলে দেয়: তারা তাঁর রিসালাত অস্বীকার করল আর অহংকার করল। এই জোড়াটা মনে রাখার মতো। যাদুকরকে ভয় পাওয়া যায়, তারিফও করা যায়, কিন্তু তার আনুগত্য করতে হয় না। মিথ্যুককে তো সোজা উপেক্ষা করলেই চলে। দুটি শব্দই রসূলকে, যাঁর অনুসরণ করা ফরজ, বানিয়ে দেয় এক খেলোয়াড় বা এক প্রতারক, যাকে নিশ্চিন্তে পাশে সরিয়ে রাখা যায়। তাই অভিযোগটা তথ্যের ভুল যতটা, তার চেয়ে বেশি বার্তার উপরে নিজেকে বসিয়ে রাখার কৌশল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Charge Every Messenger Heard",
          "bn": "প্রত্যেক রসূলের শোনা অভিযোগ"
        },
        "p": [
          {
            "en": "Ibn Kathir does not treat the accusation as peculiar to Fir'awn's court. He sets beside it 51:52 and 51:53: likewise, no messenger came to those before them but they said, a sorcerer or a madman. Have they handed this down to one another? Rather, they are a transgressing people. In that passage the Qur'an observes that the same words recur among generations that never met, and asks pointedly whether they had bequeathed them to each other.",
            "bn": "ইবন কাসীর এ অভিযোগকে শুধু ফিরআউনের দরবারের বিষয় মনে করেন না। এর পাশে তিনি রাখেন ৫১:৫২ ও ৫১:৫৩ আয়াত: এভাবেই, তাদের আগের লোকদের কাছে যে রসূলই এসেছেন, তারা বলেছে, যাদুকর, নয়তো পাগল। তারা কি একে অপরকে এ কথার ওসিয়ত করে গেছে? না, আসলে তারা সীমালঙ্ঘনকারী সম্প্রদায়। সে জায়গায় কুরআন লক্ষ করে, যে প্রজন্মগুলোর কখনো দেখা হয়নি, তাদের মুখেও একই কথা ঘুরে ফিরে আসে। তারপর তীক্ষ্ণ প্রশ্ন করে, তারা কি এ কথা উত্তরাধিকার হিসেবে একে অপরকে দিয়ে গেছে?"
          },
          {
            "en": "The answer 51:53 gives is not collusion but a shared condition: they are a people who transgress, taghun. Read beside that verse, 40:24 becomes one instance of a pattern, and this is the kind of consolation Ibn Kathir and Ma'arif al-Qur'an find in the whole passage. A messenger called a sorcerer and a liar has not failed; he has been received the way messengers are received. No tafsir fetched for this verse attaches a hadith to it, so this article cites none.",
            "bn": "৫১:৫৩ আয়াতের জবাব কোনো যোগসাজশের কথা বলে না, বলে এক অভিন্ন অবস্থার কথা: তারা সীমালঙ্ঘনকারী জাতি, তাগূন। ওই আয়াতের পাশে রাখলে ৪০:২৪ হয়ে যায় একই ধারার আরেকটি দৃষ্টান্ত। ইবন কাসীর আর মাআরিফুল কুরআন পুরো অংশটিতে এ ধরনের সান্ত্বনাই খুঁজে পান। যে রসূলকে যাদুকর আর মিথ্যুক বলা হলো, তিনি ব্যর্থ হননি। রসূলদের যেভাবে গ্রহণ করা হয়, তাঁকেও সেভাবেই করা হয়েছে। এ আয়াতের জন্য পড়া কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এ লেখাও কোনো হাদীস উদ্ধৃত করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Word Returns",
          "bn": "শব্দটি যেখানে ফিরে আসে"
        },
        "p": [
          {
            "en": "The word kadhdhab does not leave the surah. A few verses on, in 40:28, a believing man of Fir'awn's own family, who had kept his faith hidden, answers the court: if he is a liar, his lie is upon him, and if he is truthful, some of what he warns you of will strike you. Indeed, Allah does not guide whoever is a transgressor, a liar, musrifun kadhdhab. The word once thrown at Musa (AS) now stands in a believer's sentence, attached to whoever transgresses.",
            "bn": "কাযযাব শব্দটি সূরা থেকে হারিয়ে যায় না। কয়েক আয়াত পরে, ৪০:২৮ আয়াতে, ফিরআউনের নিজের পরিবারের এক মুমিন, যিনি ঈমান গোপন রেখেছিলেন, দরবারকে জবাব দেন। সে যদি মিথ্যুক হয়, তার মিথ্যার দায় তার নিজের। আর যদি সত্যবাদী হয়, তাহলে যে শাস্তির ভয় সে দেখাচ্ছে, তার কিছু না কিছু তোমাদের উপর আসবেই। নিশ্চয়ই আল্লাহ সীমালঙ্ঘনকারী মিথ্যুককে, মুসরিফুন কাযযাব, পথ দেখান না। যে শব্দ একদিন মূসা (আঃ)-এর দিকে ছোড়া হয়েছিল, এবার তা দাঁড়াল এক মুমিনের বাক্যে, জুড়ে গেল সীমালঙ্ঘনকারীর সঙ্গে।"
          },
          {
            "en": "What follows the label is harsher. When he brought them the truth, they said: kill the sons of those who believed with him (40:25), and Fir'awn asks to be left to kill Musa himself (40:26). Those verses, and Musa's answer to them, belong to their own entries; the believer's later stand in 40:44 is covered already. Here it is enough to see the order of events: first a word that cancels the message, then plans against the people who accepted it.",
            "bn": "তকমার পর যা আসে, তা আরও কঠিন। মূসা (আঃ) যখন সত্য নিয়ে এলেন, তারা বলল, তাঁর সঙ্গে যারা ঈমান এনেছে তাদের ছেলেদের হত্যা কর (৪০:২৫)। আর ফিরআউন চাইল, তাকে ছেড়ে দেওয়া হোক, সে নিজেই মূসা (আঃ)-কে হত্যা করবে (৪০:২৬)। সেসব আয়াত আর তার জবাবে মূসা (আঃ)-এর কথা নিজ নিজ জায়গায় আলোচিত হবে। ৪০:৪৪ আয়াতে ওই মুমিনের শেষ অবস্থানও আগেই আলোচিত হয়েছে। এখানে শুধু ঘটনার ক্রমটা দেখাই যথেষ্ট। প্রথমে একটা শব্দ, যা বার্তাকে বাতিল করে দেয়। তারপর যারা বার্তা মেনে নিল, তাদের বিরুদ্ধে ষড়যন্ত্র।"
          }
        ]
      },
      {
        "h": {
          "en": "Read Against Ourselves, Not Others",
          "bn": "অন্যের নয়, নিজের দিকে আয়না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports what three particular men in one story said to one prophet, and it names them because the Qur'an names them. It describes what the text describes and licenses nothing against any living person or community: not a nation or its descendants, not ministers or officials, not the wealthy as a class, and not anyone a reader happens to dislike. Fir'awn, Haman and Qarun stand condemned by their own words in the text, and no one living inherits that verdict from this verse.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে নির্দিষ্ট তিনজন মানুষ একজন নবীকে কী বলেছিল, তা জানায়। তাদের নাম আসে, কারণ কুরআন তাদের নাম নিয়েছে। পাঠ যা বর্ণনা করে, আয়াত শুধু সেটুকুই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে সে কোনো অনুমতি দেয় না। কোনো জাতি বা তার বংশধরদের বিরুদ্ধে নয়, মন্ত্রী বা কর্মকর্তাদের বিরুদ্ধে নয়, ধনীদের গোটা শ্রেণির বিরুদ্ধে নয়, পাঠকের অপছন্দের কারও বিরুদ্ধেও নয়। ফিরআউন, হামান আর কারূন পাঠের ভেতরে নিজেদের কথাতেই দোষী সাব্যস্ত। আজকের কোনো জীবিত মানুষ এ আয়াত থেকে সেই রায়ের উত্তরাধিকারী হয় না।"
          },
          {
            "en": "The useful question points inward. On al-Qurtubi's account the accusers did not lack evidence; they lacked an answer to it. The same move is open to anyone. When something true arrives that would cost us to accept, it is easier to file it under a name, naivety, an agenda, someone's propaganda, than to weigh it. The label lets us stop listening while still feeling that we have judged, and that feeling is exactly what makes it hard to notice.",
            "bn": "কাজের প্রশ্নটা তাই নিজের দিকে ফেরে। কুরতুবীর বর্ণনায় অভিযোগকারীদের প্রমাণের অভাব ছিল না, অভাব ছিল তার জবাবের। এ কৌশল যে কারও হাতের কাছেই থাকে। এমন কোনো সত্য যখন আসে, যা মানতে গেলে আমাদের কিছু ছাড়তে হবে, তখন সেটা ওজন করার চেয়ে একটা নামের খোপে ফেলে দেওয়া সহজ। সরলতা, কারও এজেন্ডা, কারও প্রচারণা। তকমা লাগালে শোনা বন্ধ করা যায়, অথচ মনে হয় বিচার করেই রায় দিলাম। এই মনে হওয়াটাই ব্যাপারটাকে চোখে পড়তে দেয় না।"
          },
          {
            "en": "So the verse asks two things of its reader. Be slow to put a label on a person before you have weighed what he brings, especially when what he brings is inconvenient. And if you are given such a label for saying what is true, remember 51:52: it has been said before, to better people than us, and the messengers who heard it went on delivering what they had been sent with.",
            "bn": "তাই আয়াতটি পাঠকের কাছে দুটি জিনিস চায়। কেউ কী নিয়ে এসেছে তা ওজন করার আগে তার গায়ে তকমা লাগাতে তাড়াহুড়া করবেন না, বিশেষ করে যখন তার আনা কথাটা আপনার জন্য অস্বস্তিকর। আর সত্য বলার জন্য যদি আপনার গায়েই এমন তকমা লাগে, ৫১:৫২ আয়াতের কথা মনে রাখুন। এ কথা আগেও বলা হয়েছে, আমাদের চেয়ে অনেক উত্তম মানুষদের। আর যে রসূলেরা তা শুনেছিলেন, তাঁরা যা নিয়ে প্রেরিত হয়েছিলেন, তা পৌঁছে দেওয়া থামাননি।"
          }
        ]
      }
    ]
  },
  "40:27": {
    "sections": [
      {
        "h": {
          "en": "After 'Leave Me to Kill Musa'",
          "bn": "হত্যার হুমকির জবাবে"
        },
        "p": [
          {
            "en": "The preceding verse ends on a threat. Fir'awn tells his people: leave me to kill Musa, and let him call upon his Lord. He gives reasons: he fears Musa will change their religion or make corruption appear in the land (40:26). Verse 40:27 is the reply, thirteen Arabic words long. The passage on 40:24 showed the same court renaming Musa (AS) a sorcerer and a liar; here the man so named speaks for himself, and what he says is a single act of refuge.",
            "bn": "আগের আয়াতটি শেষ হয়েছে এক হুমকিতে। ফিরআউন তার লোকদের বলে: আমাকে ছেড়ে দাও, মূসাকে হত্যা করি, ডাকুক সে তার রবকে। কারণও সে দেখায়। তার আশঙ্কা, মূসা তাদের দীন বদলে দেবেন অথবা দেশে ফাসাদ ছড়াবেন (৪০:২৬)। ৪০:২৭ আয়াত তারই জবাব, আরবিতে মাত্র তেরোটি শব্দ। ৪০:২৪ আয়াতের আলোচনায় দেখা গেছে, এই দরবারই মূসা (আঃ)-কে যাদুকর আর মিথ্যুক বলে নাম দিয়েছিল। এবার যাঁকে ওই নাম দেওয়া হলো, তিনি নিজেই কথা বলছেন। আর তাঁর পুরো কথাটাই আশ্রয় নেওয়ার ঘোষণা।"
          },
          {
            "en": "The commentators tie the reply tightly to the threat. Al-Qurtubi and al-Baghawi open with the same circumstance: when Fir'awn threatened him with killing. Ibn Kathir puts it as the moment Fir'awn's words, leave me to kill Musa, reached him. As-Sa'di calls the threat a hideous saying that Fir'awn's tughyan, his overreaching, drove him to, and says Fir'awn leaned in it on his own strength and power. Then he uses the same verb for Musa (AS): he answered seeking help from his Lord.",
            "bn": "তাফসীরকারেরা জবাবটিকে হুমকির সঙ্গে শক্ত করে জুড়ে দেন। কুরতুবী আর বাগাভী দুজনেই শুরু করেন একই প্রেক্ষাপট দিয়ে: ফিরআউন যখন তাঁকে হত্যার হুমকি দিল। ইবন কাসীরের ভাষায়, 'আমাকে ছেড়ে দাও, মূসাকে হত্যা করি' কথাটা যখন তাঁর কানে পৌঁছাল। সা'দী হুমকিটিকে বলেন এক জঘন্য উক্তি, যার পেছনে ছিল ফিরআউনের তুগইয়ান, অর্থাৎ সীমা ছাড়িয়ে যাওয়া। তাঁর মতে ফিরআউন এ কথায় ভর করেছিল নিজের শক্তি আর ক্ষমতার উপর। তারপর মূসা (আঃ)-এর বেলায় তিনি একই ক্রিয়া ব্যবহার করেন: তিনি জবাব দিলেন নিজের রবের সাহায্য চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Refuge Already Taken",
          "bn": "আশ্রয় নেওয়া হয়ে গেছে"
        },
        "p": [
          {
            "en": "Inni 'udhtu: indeed, I have taken refuge. The verb belongs with the familiar a'udhu, I seek refuge, but here it stands in the perfect form, as something already done. The commentators restate it with another perfect verb. At-Tabari and the Muyassar both write istajartu, I have sought protection. Ibn Kathir joins the two verbs: istajartu billah wa 'udhtu bihi, I sought Allah's protection and took refuge in Him, and he adds what the refuge is from: Fir'awn's evil and the evil of those like him.",
            "bn": "ইন্নী উযতু: নিশ্চয় আমি আশ্রয় নিয়েছি। ক্রিয়াটি পরিচিত আঊযু, অর্থাৎ আমি আশ্রয় চাই, তারই পরিবারের। তবে এখানে তা অতীত কালে, যেন কাজটা আগেই সারা হয়ে গেছে। তাফসীরকারেরাও অতীত কালের আরেকটি ক্রিয়া দিয়ে কথাটা খুলে বলেন। তাবারী আর মুয়াসসার দুজনেই লেখেন ইসতাজারতু: আমি সুরক্ষা চেয়ে নিয়েছি। ইবন কাসীর দুটি ক্রিয়া একসঙ্গে আনেন: আমি আল্লাহর সুরক্ষা চেয়েছি, তাঁরই আশ্রয় নিয়েছি। কিসের থেকে আশ্রয়, সেটাও তিনি জুড়ে দেন: ফিরআউনের অনিষ্ট আর তার মতো লোকদের অনিষ্ট থেকে।"
          },
          {
            "en": "As-Sa'di chooses a different word. He glosses the verb as imtana'tu bi-rububiyyatihi: I made myself secure by His lordship. Then he describes that lordship: the rububiyya by which He manages all affairs. The gloss locates the refuge in a particular attribute. Musa (AS) does not take shelter in an abstract idea of God; he takes it in the One who arranges every matter. If that lordship governs all affairs, then the affair of the court where the threat was spoken lies inside it as well.",
            "bn": "সা'দী বেছে নেন অন্য একটি শব্দ। তিনি ক্রিয়াটির ব্যাখ্যা করেন ইমতানা'তু বি-রুবূবিয়্যাতিহী দিয়ে: তাঁর রুবূবিয়্যাতের আড়ালে আমি নিজেকে সুরক্ষিত করে নিয়েছি। এরপর সেই রুবূবিয়্যাতের পরিচয় দেন: যার দ্বারা তিনি সব বিষয়ের ব্যবস্থাপনা করেন। এ ব্যাখ্যা আশ্রয়টাকে বেঁধে দেয় আল্লাহর একটি নির্দিষ্ট গুণের সঙ্গে। মূসা (আঃ) আল্লাহ সম্পর্কে কোনো বিমূর্ত ধারণার আড়াল খোঁজেননি। আশ্রয় নিয়েছেন তাঁর কাছে, যিনি প্রতিটি বিষয় সাজিয়ে দেন। সব বিষয় যদি তাঁরই ব্যবস্থাপনায় থাকে, তবে যে দরবারে হুমকিটা উচ্চারিত হলো, সেটাও তার বাইরে নয়।"
          },
          {
            "en": "Read in its own form, the sentence reports a refuge already made, not requested. It is not a petition addressed to Fir'awn, and it is not an appeal to his mercy; the verse gives him nothing to grant or withhold. Fir'awn had said, let him call upon his Lord, as though the call would make no difference. Musa's answer takes him at his word. The call has been made, and the verse records no other reply from Musa (AS) in this exchange.",
            "bn": "নিজের গঠনেই তাই বাক্যটি এমন এক আশ্রয়ের খবর দেয়, যা নেওয়া হয়ে গেছে, এখনো চাওয়া হচ্ছে না। এটা ফিরআউনের কাছে কোনো আবেদন নয়, তার দয়ার কাছে মিনতিও নয়। দেওয়ার বা না দেওয়ার মতো কিছুই আয়াতটি তার হাতে রাখেনি। ফিরআউন বলেছিল, ডাকুক সে তার রবকে, যেন ডাকলে কিছুই আসে যায় না। মূসা (আঃ)-এর জবাব তার কথাটাকেই ধরে নেয়। ডাকা হয়ে গেছে। আর এই কথোপকথনে মূসা (আঃ)-এর আর কোনো জবাব আয়াতে লেখা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "My Lord, and Yours Too",
          "bn": "আমার রব, তোমাদেরও রব"
        },
        "p": [
          {
            "en": "Bi-rabbi wa rabbikum: in my Lord and your Lord. Who is the you? At-Tabari answers directly: Musa said this to Fir'awn and his council, and he inserts an address into his paraphrase, ayyuha al-qawm, O people. The Muyassar has the same two elements: spoken to Fir'awn and his council, with ayyuha al-qawm. Ibn Kathir writes ayyuha al-mukhatabun, you who are being addressed, which the abridged English renders as those who were being addressed here. None of the fetched texts makes the you anyone other than that court.",
            "bn": "বি-রাব্বী ওয়া রাব্বিকুম: আমার রব ও তোমাদের রবের কাছে। এই তোমরা কারা? তাবারী সরাসরি জবাব দেন: মূসা কথাটা বলেছিলেন ফিরআউন আর তার পারিষদদের উদ্দেশে। নিজের ব্যাখ্যায় তিনি একটা সম্বোধনও বসিয়ে দেন: আইয়ুহাল কাওম, হে লোকসকল। মুয়াসসারেও একই দুটি কথা আছে: ফিরআউন ও তার পারিষদদের উদ্দেশে বলা, সঙ্গে আইয়ুহাল কাওম। ইবন কাসীর লেখেন আইয়ুহাল মুখাতাবূন, অর্থাৎ যাদের সম্বোধন করা হচ্ছে, তোমরা। সংক্ষিপ্ত ইংরেজি সংস্করণ এটাকে বলে, এখানে যাদের সম্বোধন করা হচ্ছিল তারা। সংগৃহীত কোনো তাফসীরই এই তোমরা বলতে ওই দরবারের বাইরের কাউকে বোঝায়নি।"
          },
          {
            "en": "Why add and your Lord at all? None of the fetched commentators states a reason, and none is invented for them here. What can be noted is what the wording does. Musa (AS) names Allah, in front of the man threatening him, as the Lord of that man's own audience. Elsewhere the Qur'an records Fir'awn telling his people, I am your lord most high (79:24). Read beside that, the phrase quietly returns a title to its owner. This is a reflection on the wording, not a commentator's claim.",
            "bn": "তাহলে 'তোমাদের রব' কথাটা যোগ করার কারণ কী? সংগৃহীত তাফসীরকারদের কেউ কারণ বলেননি, আর এ লেখাও তাঁদের নামে কোনো কারণ বানিয়ে দেবে না। বলা যায় শুধু এটুকু, শব্দগুলো নিজেরা কী করছে। যে লোক হুমকি দিচ্ছে, তারই সামনে মূসা (আঃ) আল্লাহকে বলছেন তার শ্রোতাদের রব। কুরআন অন্য জায়গায় জানায়, ফিরআউন তার লোকদের বলেছিল: আমিই তোমাদের সর্বোচ্চ রব (৭৯:২৪)। সেটা পাশে রেখে পড়লে বাক্যাংশটি চুপচাপ উপাধিটা তার আসল মালিকের কাছে ফিরিয়ে দেয়। এটা শব্দ নিয়ে এ লেখার চিন্তা, কোনো তাফসীরকারের বক্তব্য নয়।"
          },
          {
            "en": "The same words occur once more. In 44:20 Musa (AS) says, wa inni 'udhtu bi-rabbi wa rabbikum an tarjumun: and I have taken refuge in my Lord and your Lord lest you stone me. There the danger named is stoning; here it is every arrogant one who does not believe in the Day of Account. The refuge, the Lord and the inclusion of the listeners under that Lord are the same in both places, so the phrase is no accident of a single scene.",
            "bn": "হুবহু এই শব্দগুলো আরেকবার এসেছে। ৪৪:২০ আয়াতে মূসা (আঃ) বলেন: ওয়া ইন্নী উযতু বি-রাব্বী ওয়া রাব্বিকুম আন তারজুমূন, অর্থাৎ তোমরা যেন আমাকে পাথর মেরে হত্যা করতে না পারো, সেজন্য আমি আমার রব ও তোমাদের রবের আশ্রয় নিয়েছি। সেখানে বিপদটা পাথর মারার। এখানে বিপদ হলো সেই প্রত্যেক অহংকারী, যে হিসাবের দিনে ঈমান রাখে না। দুই জায়গাতেই আশ্রয় এক, রবও এক। শ্রোতাদের সেই রবের অধীন বলে উল্লেখ করাটাও দুই জায়গায় একই। এই পুনরাবৃত্তি জানিয়ে দেয়, কথাটা কোনো একটি দৃশ্যের আকস্মিক উক্তি ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Proud One, Not One Man",
          "bn": "একজন নয়, প্রত্যেক অহংকারী"
        },
        "p": [
          {
            "en": "Min kulli mutakabbir: from every arrogant person. Each commentator defines the arrogance by what it refuses. For Ibn Kathir the mutakabbir is arrogant against the truth, and a mujrim, a criminal; the abridged English gives from every evildoer. At-Tabari says he is arrogant against Allah, too proud to affirm His oneness, to acknowledge His divinity and to obey Him. Al-Qurtubi calls him muta'azzim 'an al-iman billah, holding himself too great to believe in Allah. The Muyassar: too proud for Allah's oneness and for obedience to Him.",
            "bn": "মিন কুল্লি মুতাকাব্বির: প্রত্যেক অহংকারী থেকে। প্রত্যেক তাফসীরকার অহংকারের সংজ্ঞা দেন, সে কী মানতে অস্বীকার করে তা দিয়ে। ইবন কাসীরের কাছে মুতাকাব্বির হলো সত্যের বিরুদ্ধে অহংকারী, আর মুজরিম, অপরাধী। সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, প্রত্যেক অনিষ্টকারী থেকে। তাবারীর মতে সে আল্লাহর বিরুদ্ধে অহংকারী। তাঁর একত্ব মেনে নিতে, তাঁর ইলাহ হওয়া স্বীকার করতে আর তাঁর আনুগত্য করতে তার অহংকারে বাধে। কুরতুবী তাকে বলেন মুতাআযযিম আনিল ঈমানি বিল্লাহ, যে নিজেকে আল্লাহর উপর ঈমান আনার চেয়ে বড় মনে করে। মুয়াসসারের ভাষায়: আল্লাহর একত্ব আর তাঁর আনুগত্যের ব্যাপারে দাম্ভিক।"
          },
          {
            "en": "Is the phrase general, or aimed at Fir'awn? None of the fetched texts narrows it to him alone, and two of them say outright that it reaches beyond him. Ibn Kathir has Musa (AS) seek refuge from Fir'awn's evil and the evil of those like him, min sharrihi wa sharri amthalihi. As-Sa'di writes that Fir'awn and others enter under it, yadkhulu fihi Fir'awn wa ghayruhu. At-Tabari, al-Qurtubi and the Muyassar keep the general wording, every arrogant person, though at-Tabari and the Muyassar place the words in front of Fir'awn and his council.",
            "bn": "কথাটা কি সবার জন্য, নাকি ফিরআউনকে লক্ষ্য করে? সংগৃহীত কোনো তাফসীর একে শুধু তার মধ্যে সীমিত করেনি। দুটি তাফসীর তো সোজাসুজি বলেছে, কথাটা তাকে ছাড়িয়েও যায়। ইবন কাসীরের ভাষায় মূসা (আঃ) আশ্রয় নিয়েছেন ফিরআউনের অনিষ্ট আর তার মতো লোকদের অনিষ্ট থেকে: মিন শাররিহী ওয়া শাররি আমসালিহী। সা'দী লেখেন, এর মধ্যে ফিরআউনও পড়ে, অন্যরাও পড়ে: ইয়াদখুলু ফীহি ফিরআউনু ওয়া গাইরুহু। তাবারী, কুরতুবী আর মুয়াসসার সাধারণ শব্দটাই রেখে দেন, প্রত্যেক অহংকারী। তবে তাবারী ও মুয়াসসার জানিয়ে দেন, কথাটা বলা হয়েছিল ফিরআউন আর তার পারিষদদের সামনে।"
          },
          {
            "en": "So the occasion is one man's threat, and the words reach past him. The verse never names Fir'awn at all. Musa (AS) answers a named man with an unnamed description, and the description fits the man in front of him without being confined to him. That is how Ibn Kathir's amthalihi, those like him, can stand in the gloss. A refuge taken from a kind of evil is not tied to one lifetime, which is why a reader centuries later can take the same words on his own tongue.",
            "bn": "উপলক্ষ তাই একজন মানুষের হুমকি, কিন্তু কথাটা তাকে পেরিয়ে যায়। আয়াতে ফিরআউনের নামই নেই। নাম ধরে যে হুমকি দিল, মূসা (আঃ) তার জবাব দিলেন নামহীন এক বর্ণনা দিয়ে। বর্ণনাটা সামনে দাঁড়ানো লোকটির সঙ্গে মিলে যায়, অথচ তার মধ্যেই আটকে থাকে না। এ কারণেই ইবন কাসীরের ব্যাখ্যায় 'তার মতো লোকেরা' কথাটা জায়গা পায়। এক ধরনের অনিষ্ট থেকে নেওয়া আশ্রয় কোনো এক জীবনকালের সঙ্গে বাঁধা নয়। সেজন্যই শতাব্দী পরের একজন পাঠকও একই শব্দগুলো নিজের মুখে নিতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Without a Day of Reckoning",
          "bn": "হিসাবের দিন অস্বীকার করলে"
        },
        "p": [
          {
            "en": "The arrogant one is described a second time: la yu'minu bi-yawm al-hisab, who does not believe in the Day of Account. The Muyassar defines the Day as one on which Allah brings His creation to account. At-Tabari adds what the account produces: on that Day Allah rewards the one who did good for his good, and the one who did evil for the evil he did. Al-Qurtubi treats the clause as the arrogant one's defining trait: wa sifatuhu annahu la yu'minu bi-yawm al-hisab, and his description is that he does not believe in it.",
            "bn": "অহংকারীর দ্বিতীয় একটি বর্ণনা আসে: লা ইউমিনু বি-ইয়াওমিল হিসাব, যে হিসাবের দিনে ঈমান রাখে না। মুয়াসসার দিনটির সংজ্ঞা দেয় এভাবে: যেদিন আল্লাহ তাঁর সৃষ্টির হিসাব নেবেন। তাবারী জুড়ে দেন, সেই হিসাবের ফল কী। সেদিন আল্লাহ সৎকর্মশীলকে তার সৎকাজের প্রতিদান দেবেন, আর মন্দকারীকে দেবেন তার মন্দের প্রতিফল। কুরতুবী বাক্যাংশটিকে অহংকারীর মূল পরিচয় হিসেবে দেখেন: ওয়া সিফাতুহু আন্নাহু লা ইউমিনু বি-ইয়াওমিল হিসাব। অর্থাৎ তার বৈশিষ্ট্যই হলো, সে হিসাবের দিনে বিশ্বাস করে না।"
          },
          {
            "en": "At-Tabari then asks the question a reader might ask: why did Musa (AS) single out, in his refuge, those who do not believe in the Day of Account? His answer is a short piece of moral reasoning. Whoever does not believe in that Day is not hoping for reward for doing good, and is not afraid of punishment for doing wrong or for the ugly acts he commits. Nothing inside him holds him back. That, says at-Tabari, is why Musa's plea for protection was from this class of people in particular.",
            "bn": "এরপর তাবারী সেই প্রশ্নটা তোলেন, যা পাঠকের মনেও আসতে পারে। আশ্রয় চাওয়ার সময় মূসা (আঃ) বিশেষ করে হিসাবের দিনে অবিশ্বাসীদের কথা কেন বললেন? তাঁর জবাব ছোট্ট একটা নৈতিক যুক্তি। যে ওই দিনে বিশ্বাস করে না, সে ভালো কাজের প্রতিদানের আশা রাখে না। মন্দ কাজের শাস্তিরও ভয় করে না, নিজের কদর্য কাজকর্মের পরিণামেরও না। ভেতর থেকে তাকে থামানোর কিছুই থাকে না। তাবারী বলেন, এ কারণেই মূসা (আঃ)-এর সুরক্ষা প্রার্থনা ছিল বিশেষভাবে এই শ্রেণির মানুষ থেকে।"
          },
          {
            "en": "As-Sa'di joins the two descriptions into one cause. The arrogance and the disbelief in the Day together carry such a person to evil and corruption, ash-sharr wal-fasad. Set beside 40:26, his word lands precisely. Fasad is what Fir'awn claimed to fear from Musa: or that he will make corruption appear in the land. Since as-Sa'di also says Fir'awn falls under the description, the charge of fasad turns back on the man who made it. The link to 40:26 is this article's observation; the two statements are as-Sa'di's.",
            "bn": "সা'দী দুটি বর্ণনাকে একটি কারণে জুড়ে দেন। অহংকার আর হিসাবের দিনে অবিশ্বাস মিলে এমন মানুষকে ঠেলে নিয়ে যায় অনিষ্ট আর ফাসাদের দিকে: আশ-শাররু ওয়াল ফাসাদ। ৪০:২৬ আয়াতের পাশে রাখলে তাঁর শব্দটা একেবারে জায়গামতো বসে। ফাসাদই তো সেই জিনিস, যা মূসা (আঃ)-এর কাছ থেকে আসবে বলে ফিরআউন ভয় দেখিয়েছিল: অথবা সে দেশে ফাসাদ ছড়াবে। সা'দী এটাও বলেছেন যে ফিরআউন এই বর্ণনার মধ্যে পড়ে। ফলে ফাসাদের অভিযোগটা ফিরে যায় অভিযোগকারীর নিজের দিকেই। ৪০:২৬ আয়াতের সঙ্গে এই যোগসূত্র এ লেখার পর্যবেক্ষণ, আর কথা দুটি সা'দীর।"
          }
        ]
      },
      {
        "h": {
          "en": "His Answer, in Their Words",
          "bn": "তাফসীরের ভাষায় তাঁর জবাব"
        },
        "p": [
          {
            "en": "What do the texts say about Musa (AS) himself in this moment? They describe an act, and they describe it with verbs of turning to Allah: istajartu, 'udhtu, imtana'tu, and as-Sa'di's musta'inan bi-rabbihi, seeking help from his Lord. Al-Qurtubi and al-Baghawi set the threat and the refuge side by side and say nothing more. None of the fetched commentaries on this verse adds a description of his inner state, and this article keeps to what they say rather than supplying a feeling the texts do not name.",
            "bn": "এই মুহূর্তে মূসা (আঃ) সম্পর্কে তাফসীরগুলো কী বলে? তারা বর্ণনা করে একটি কাজের, আর সেটা করে আল্লাহর দিকে ফেরার ক্রিয়াগুলো দিয়ে: ইসতাজারতু, উযতু, ইমতানা'তু। সঙ্গে সা'দীর মুসতাঈনান বি-রাব্বিহী, নিজের রবের সাহায্য চেয়ে। কুরতুবী আর বাগাভী হুমকি আর আশ্রয় পাশাপাশি রেখে দেন, এর বেশি কিছু বলেন না। এ আয়াতে সংগৃহীত কোনো তাফসীর তাঁর মনের অবস্থার আলাদা কোনো বিবরণ দেয়নি। তাই তাফসীর যে অনুভূতির নাম নেয়নি, এ লেখাও তা নিজে থেকে জুড়ে দেবে না। যা বলা হয়েছে, সেখানেই থামবে।"
          },
          {
            "en": "As-Sa'di does say what followed. Allah, by His lutf, His gentle care, kept Musa (AS) safe from every arrogant one who does not believe in the Day of Account, and arranged means through which the harm of Fir'awn and his council was turned away from him. He counts among those means the believing man whom the next verse introduces; that man's words belong to 40:28 and are left there. Ma'arif al-Qur'an and the abridged Ibn Kathir add the frame: the whole account was told to console the Prophet ﷺ over his own people's denial.",
            "bn": "এরপর কী ঘটল, সা'দী তা বলেন। আল্লাহ তাঁর লুতফ, অর্থাৎ সূক্ষ্ম যত্ন দিয়ে মূসা (আঃ)-কে হিসাবের দিনে অবিশ্বাসী প্রত্যেক অহংকারী থেকে রক্ষা করলেন। এমন সব উপায়ও তৈরি করে দিলেন, যার মাধ্যমে ফিরআউন আর তার পারিষদদের অনিষ্ট তাঁর উপর থেকে সরে গেল। এই উপায়গুলোর মধ্যে সা'দী গণনা করেন সেই মুমিন লোকটিকে, যাঁর পরিচয় দেয় পরের আয়াত। তাঁর কথাগুলো ৪০:২৮ আয়াতের, সেখানেই থাকুক। মাআরিফুল কুরআন আর সংক্ষিপ্ত ইংরেজি ইবন কাসীর পুরো কাহিনির একটি প্রেক্ষাপট দেয়: নিজের কওমের অস্বীকারে নবী ﷺ-কে সান্ত্বনা দিতেই এ বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "When He Feared a People",
          "bn": "কোনো কওমের অনিষ্টের আশঙ্কা হলে"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a narration introduced by wa li-hadha, and for this reason: from Abu Musa, that the Messenger of Allah ﷺ had a prayer of refuge for when he feared a people. The article quotes one collection's wording whole, as it appears on the fetched page of Sunan Abu Dawud (1537): Narrated AbuMusa al-Ash'ari: When the Prophet (ﷺ) feared a (group of) people, he would say: \"O Allah, we make Thee our shield against them, and take refuge in Thee from their evils.\" The Arabic: Allahumma inna naj'aluka fi nuhurihim wa na'udhu bika min shururihim.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন একটি বর্ণনা দিয়ে, যার শুরুতে লেখেন ওয়া লিহাযা, অর্থাৎ এ কারণেই। আবূ মূসা (রাঃ) থেকে বর্ণিত, আল্লাহর রাসূল ﷺ কোনো কওমের অনিষ্টের আশঙ্কা করলে আশ্রয় চেয়ে ছোট্ট একটি দোয়া পড়তেন। এ লেখা একটি সংকলনের পূর্ণ ভাষ্য উদ্ধৃত করছে, সুনান আবু দাউদের (১৫৩৭) যে পাতা দেখা হয়েছে, সেখানে যেমন আছে: আবূ মূসা আশআরী (রাঃ) বলেন, নবী ﷺ কোনো দলের ব্যাপারে আশঙ্কা করলে বলতেন: হে আল্লাহ, আমরা তোমাকে তাদের মোকাবিলায় ঢাল বানাচ্ছি, আর তাদের অনিষ্ট থেকে তোমার আশ্রয় চাইছি। আরবি: আল্লাহুম্মা ইন্না নাজআলুকা ফী নুহূরিহিম, ওয়া নাঊযু বিকা মিন শুরূরিহিম।"
          },
          {
            "en": "Three cautions go with it. The fetched page shows no grading by Abu Dawud himself, and this article adds none. The wording Ibn Kathir gives in his tafsir differs in order and in one verb, nadra'u bika, so the two are not blended here. And the narration is general: it records what the Prophet ﷺ used to say when he feared a people, not anything said about this verse. It is Ibn Kathir who places it beside Musa's refuge, and the shared shape is plain: refuge in Allah from their evil.",
            "bn": "এর সঙ্গে তিনটি সতর্কতা। যে পাতা দেখা হয়েছে, সেখানে আবু দাউদের নিজের দেওয়া কোনো মান উল্লেখ নেই, এ লেখাও কোনো মান যোগ করছে না। ইবন কাসীর তাঁর তাফসীরে যে ভাষ্য দিয়েছেন, তাতে বাক্যের ক্রম আলাদা, একটি ক্রিয়াও আলাদা: নাদরাউ বিকা। তাই দুটিকে এখানে মেশানো হয়নি। আর বর্ণনাটি সাধারণ। কোনো কওমের ভয় হলে নবী ﷺ কী বলতেন, তার বিবরণ এটা, এ আয়াত সম্পর্কে কিছু নয়। মূসা (আঃ)-এর আশ্রয়ের পাশে একে রেখেছেন ইবন কাসীর। আর দুটির মিল চোখে পড়ার মতো: তাদের অনিষ্ট থেকে আল্লাহর আশ্রয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Description, Not a Verdict",
          "bn": "বর্ণনা, কারও উপর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes Fir'awn's court, and the arrogant who do not believe in the Day of Account, as the text describes them, and it licenses nothing against any living person or community. The fetched commentators define the mutakabbir by his stance towards the truth, towards Allah's oneness and towards the reckoning; none of them turns the phrase into a label for a nation, a ruler or a group of today. Seeking refuge from a kind of evil is a prayer, not a judgment on whoever one happens to fear.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ফিরআউনের দরবার আর হিসাবের দিনে অবিশ্বাসী অহংকারীদের বর্ণনা দেয় ঠিক ততটুকু, যতটুকু কুরআনের ভাষ্যে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। সংগৃহীত তাফসীরকারেরা মুতাকাব্বিরের সংজ্ঞা দেন সত্য, আল্লাহর একত্ব আর হিসাবের দিনের প্রতি তার মনোভাব দিয়ে। তাঁদের কেউ এ শব্দটিকে আজকের কোনো জাতি, শাসক বা গোষ্ঠীর গায়ে লাগানোর তকমা বানাননি। কোনো অনিষ্ট থেকে আশ্রয় চাওয়া একটি দোয়া। যাকে ভয় লাগছে, তার উপর রায় দেওয়া নয়।"
          },
          {
            "en": "The definitions also work as a mirror. Arrogant against the truth, says Ibn Kathir; too proud to obey, says at-Tabari, and living as if there were no reward to hope for and no punishment to fear. A reader can take Musa's refuge from that quality in others and still find traces of it at home: a truth resisted because it would cost face, a wrong done because no one is watching. The verse offers the remedy in its own order: refuge in the Lord of all, and belief in the Day of Account.",
            "bn": "সংজ্ঞাগুলো একটা আয়নার কাজও করে। ইবন কাসীর বলেন, সত্যের বিরুদ্ধে অহংকারী। তাবারী বলেন, আনুগত্যে যার অহংকারে বাধে, যে এমনভাবে চলে যেন আশা করার মতো কোনো প্রতিদান নেই, ভয় করার মতো কোনো শাস্তিও নেই। অন্যের এই স্বভাব থেকে মূসা (আঃ)-এর মতো আশ্রয় চাওয়া যায়, আবার নিজের ঘরেও এর ছাপ খুঁজে পাওয়া যায়। মান যাবে বলে কোনো সত্য না মানা, কেউ দেখছে না বলে কোনো অন্যায় করে ফেলা। আয়াতটি প্রতিকারও দেয় নিজের ক্রমে: সবার রবের আশ্রয়, আর হিসাবের দিনের উপর ঈমান।"
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
