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
  "40:31": {
    "sections": [
      {
        "h": {
          "en": "A Sentence Still Running",
          "bn": "বাক্যটা তখনো চলছে"
        },
        "p": [
          {
            "en": "This verse begins in the middle of a sentence. In 40:30 the man who believed, from Fir'awn's own family, tells his people: I fear for you the like of the day of the ahzab, the companies. Verse 31 says who those companies were, and it opens with the same word, mithla, like, carrying the thought straight on. Al-Baghawi shows the join by quoting both phrases as one: like the day of the ahzab, like the da'b of the people of Nuh. The speaker has not changed. These are still his words, and the Qur'an reports them as his.",
            "bn": "আয়াতটি শুরু হয় একটি বাক্যের মাঝখান থেকে। ৪০:৩০ আয়াতে ফিরআউনের পরিবারের সেই ঈমানদার মানুষটি নিজের জাতিকে বলেন: আমি তোমাদের জন্য আহযাবের, অর্থাৎ দলগুলোর দিনের মতো দিনের ভয় করছি। সেই দলগুলো কারা, ৩১ নম্বর আয়াত তা বলে দেয়। শুরুও হয় একই শব্দে, মিসলা, অর্থাৎ মতো। ভাবনাটা তাই সোজা এগিয়ে চলে। বাগাভী দুটি অংশ এক টানে উদ্ধৃত করে জোড়াটা দেখিয়ে দেন: আহযাবের দিনের মতো, নূহের জাতির দা'বের মতো। বক্তা বদলাননি। কথাগুলো তাঁরই, আর কুরআন সেগুলো তাঁর কথা হিসেবেই উদ্ধৃত করে।"
          },
          {
            "en": "At-Tabari frames the closing clause in the same terms: Allah, exalted be His mention, is relating what the believer of Fir'awn's family said to Fir'awn and his council. Fir'awn's court and Musa's refuge from the arrogant have their own articles at 40:24 and 40:27, and the man's last words, in 40:44, have theirs. Here he is in the middle of his case. He has already argued from reason in 40:28 and from the limits of their power in 40:29. Now he turns from argument to the record of nations that went before.",
            "bn": "শেষ বাক্যাংশটিকে তাবারীও এভাবেই দেখেন: আল্লাহ এখানে জানাচ্ছেন, ফিরআউনের পরিবারের ঈমানদার লোকটি ফিরআউন আর তার সভাসদদের কী বলেছিলেন। ফিরআউনের দরবার আর প্রত্যেক অহংকারী থেকে মূসা (আঃ)-এর আশ্রয় চাওয়া নিয়ে আলাদা লেখা আছে ৪০:২৪ ও ৪০:২৭ আয়াতে। মানুষটির শেষ কথাগুলো নিয়েও আছে, ৪০:৪৪ আয়াতে। এখানে তিনি নিজের বক্তব্যের মাঝপথে। ৪০:২৮ আয়াতে যুক্তি দিয়ে বুঝিয়েছেন, ৪০:২৯ আয়াতে মনে করিয়েছেন তাদের ক্ষমতারও সীমা আছে। এবার যুক্তি ছেড়ে তিনি ফিরে তাকান আগের জাতিগুলোর ইতিহাসের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Readings of Da'b",
          "bn": "দা'ব শব্দের পাঁচ পাঠ"
        },
        "p": [
          {
            "en": "Mithla da'bi qawmi Nuhin: like the da'b of the people of Nuh. At-Tabari says he has already explained the meaning of da'b earlier in his work, with its supporting evidence and the views of the interpreters, and does not repeat it here. He does carry two early reports on this verse. Through a chain ending in Ibn 'Abbas, the phrase means mithla hal, like the state of the people of Nuh. Ibn Zayd says mithla ma asabahum, like what befell them. The first looks at the condition they were in; the second at what came upon them.",
            "bn": "মিসলা দা'বি কাওমি নূহ: নূহের জাতির দা'বের মতো। তাবারী জানান, দা'ব শব্দের অর্থ তিনি তাঁর গ্রন্থের আগের অংশে প্রমাণসহ আর তাফসীরকারদের মতামতসহ ব্যাখ্যা করে এসেছেন, তাই এখানে আর পুনরাবৃত্তি করেন না। তবে এ আয়াতে তিনি দুটি প্রাচীন বর্ণনা আনেন। ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছানো এক সূত্রে অর্থ এসেছে মিসলা হাল, অর্থাৎ নূহের জাতির অবস্থার মতো। ইবন যায়দ বলেন মিসলা মা আসাবাহুম, অর্থাৎ তাদের উপর যা এসে পড়েছিল তার মতো। প্রথমটির নজর তাদের অবস্থার দিকে, দ্বিতীয়টির নজর তাদের উপর নেমে আসা পরিণতির দিকে।"
          },
          {
            "en": "At-Tabari's own paraphrase moves the word towards Allah's side. The man is saying, in his reading: He will do that to you and destroy you, like His sunna, His set practice, among the people of Nuh, 'Ad and Thamud, and His dealing with them. Da'b here is the way Allah acted with those nations, and the threat is that the same way of acting will meet Fir'awn's people. The pattern lies in the divine response, and the nations are the ground on which that response was seen.",
            "bn": "তাবারীর নিজের ব্যাখ্যা শব্দটিকে আল্লাহর দিকে টেনে নেয়। তাঁর পাঠে লোকটি যেন বলছেন: তিনি তোমাদের সঙ্গেও এমন করবেন, তোমাদের ধ্বংস করবেন, যেমন নূহ, ‘আদ ও সামূদের জাতির ব্যাপারে ছিল তাঁর সুন্নাহ, তাঁর বাঁধা নিয়ম, আর তাদের সঙ্গে তাঁর আচরণ। এখানে দা'ব মানে ওই জাতিগুলোর সঙ্গে আল্লাহর আচরণের ধারা। সতর্কবাণীটা হলো, সেই একই ধারা ফিরআউনের লোকদের কাছেও পৌঁছাবে। নকশাটা আল্লাহর জবাবের মধ্যে, আর জাতিগুলো সেই জবাব প্রকাশ পাওয়ার জায়গা।"
          },
          {
            "en": "Al-Muyassar and al-Baghawi place the word on the people's side instead. The Muyassar renders it 'adat, the custom, of the people of Nuh, 'Ad and Thamud and those after them in disbelief and denial, adding that Allah destroyed them because of it. Al-Baghawi is more specific about the habit: their custom of persisting in denial until the punishment came to them. In this reading da'b is a human habit, something done over and over until it defined a people, and the destruction is where that habit ended.",
            "bn": "মুয়াসসার আর বাগাভী শব্দটিকে রাখেন মানুষের দিকে। মুয়াসসারে এর অর্থ ‘আদাত, অর্থাৎ অভ্যাস: কুফর আর অস্বীকারে নূহ, ‘আদ, সামূদ ও তাদের পরবর্তীদের অভ্যাস। সঙ্গে যোগ করে, এ কারণেই আল্লাহ তাদের ধ্বংস করেছিলেন। বাগাভী অভ্যাসটাকে আরও নির্দিষ্ট করে বলেন: শাস্তি এসে পড়া পর্যন্ত অস্বীকারে অটল থাকার অভ্যাস। এই পাঠে দা'ব মানুষের অভ্যাস। বারবার করতে করতে যা একটা জাতির পরিচয় হয়ে যায়, আর সেই অভ্যাস যেখানে গিয়ে থেমেছে, সেটাই ধ্বংস।"
          },
          {
            "en": "As-Sa'di holds both sides in a single gloss. Mithla da'b, he writes, means like their custom in disbelief and denial, and the custom of Allah concerning them: punishment hastened in this world, before the Hereafter. Two customs meet in his reading. Theirs was to deny, and His was to answer that denial without waiting for the Last Day. The people of Nuh, 'Ad and Thamud thus show both halves of the pattern at once: what they kept doing, and what Allah did in return while they were still in this world.",
            "bn": "সা'দী এক ব্যাখ্যার মধ্যেই দুই দিক ধরে রাখেন। তাঁর মতে মিসলা দা'ব মানে কুফর আর অস্বীকারে তাদের অভ্যাসের মতো, আর তাদের ব্যাপারে আল্লাহর রীতির মতো। সেই রীতি হলো আখিরাতের আগে দুনিয়াতেই দ্রুত শাস্তি। তাঁর পাঠে দুটি অভ্যাস মুখোমুখি হয়। তাদের অভ্যাস ছিল অস্বীকার করা। আল্লাহর রীতি ছিল শেষ দিনের অপেক্ষা না করে সেই অস্বীকারের জবাব দেওয়া। নূহ, ‘আদ ও সামূদের জাতি তাই নকশার দুই অর্ধেকই একসঙ্গে দেখায়: তারা বারবার কী করত, আর দুনিয়ায় থাকতেই আল্লাহ তার জবাবে কী করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Habit, or His Way",
          "bn": "তাদের অভ্যাস, নাকি তাঁর রীতি"
        },
        "p": [
          {
            "en": "Set side by side, the fetched glosses place the weight differently. For at-Tabari, da'b is Allah's sunna and His dealing with the nations. For al-Muyassar and al-Baghawi, it is the nations' own custom of disbelief and of persisting in denial. As-Sa'di names both customs together. The report from Ibn 'Abbas speaks of their state, and Ibn Zayd of what befell them. These are different emphases, and the article reports them as such without choosing among them. Each reading stays inside the same sentence of warning.",
            "bn": "সংগৃহীত ব্যাখ্যাগুলো পাশাপাশি রাখলে দেখা যায়, ভারটা একেকজন একেক জায়গায় রাখেন। তাবারীর কাছে দা'ব হলো আল্লাহর সুন্নাহ, জাতিগুলোর সঙ্গে তাঁর আচরণ। মুয়াসসার আর বাগাভীর কাছে এটা জাতিগুলোর নিজেদের অভ্যাস, কুফরের আর অস্বীকারে অটল থাকার। সা'দী দুই অভ্যাসের কথাই একসঙ্গে বলেন। ইবন আব্বাস (রাঃ)-এর বর্ণনা বলে তাদের অবস্থার কথা, ইবন যায়দ বলেন তাদের উপর যা নেমেছিল তার কথা। এগুলো ভিন্ন ভিন্ন ঝোঁক। এ লেখা সেভাবেই তুলে ধরে, কোনোটিকে বেছে নেয় না। প্রতিটি পাঠই সতর্কবাণীর একই বাক্যের ভেতরে থাকে।"
          },
          {
            "en": "What the readings share matters more than where they part. None of them describes a sudden, unexplained blow. Whether the stress falls on the people's habit or on Allah's response, the word assumes repetition: something done again and again, and something answered in a settled way. That is why the man can use it as a warning. A habit can still be broken before it reaches its end, and a settled way of dealing can be avoided by those who leave the conduct that calls it down.",
            "bn": "কোথায় তাঁরা আলাদা হন, তার চেয়ে বড় কথা কোথায় তাঁরা এক। কোনো ব্যাখ্যাই হঠাৎ নেমে আসা কারণহীন আঘাতের কথা বলে না। জোরটা মানুষের অভ্যাসে পড়ুক বা আল্লাহর জবাবে, শব্দটার ভেতরেই আছে পুনরাবৃত্তি। একদিকে বারবার করা কাজ, অন্যদিকে বাঁধা নিয়মে তার জবাব। এ কারণেই লোকটি শব্দটাকে সতর্কবাণী হিসেবে ব্যবহার করতে পারেন। অভ্যাস শেষ পরিণতিতে পৌঁছানোর আগে ভাঙা যায়। আর যে আচরণ ওই নিয়মকে ডেকে আনে, তা ছেড়ে দিলে নিয়মের আওতা থেকেও বাঁচা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Peoples Named",
          "bn": "নাম ধরে তিন জাতি"
        },
        "p": [
          {
            "en": "The verse names three: the people of Nuh, then 'Ad, then Thamud. Ibn Kathir reads the list as a reminder of what happened to them: like the people of Nuh, 'Ad and Thamud and those after them of the denying nations, how the might of Allah came down on them, and no one turned it back from them and no one held it off. His abridged English renders the same point: they disbelieved the messengers, the punishment came, and there was no one to protect them or ward it off.",
            "bn": "আয়াতটি তিনটি জাতির নাম নেয়: নূহের জাতি, তারপর ‘আদ, তারপর সামূদ। ইবন কাসীর তালিকাটিকে পড়েন তাদের পরিণতির স্মারক হিসেবে। নূহ, ‘আদ, সামূদ আর তাদের পরের অস্বীকারকারী জাতিগুলোর মতো, যাদের উপর আল্লাহর আঘাত নেমে এসেছিল। কেউ তা ফেরাতে পারেনি, কেউ ঠেকাতেও পারেনি। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে: তারা রাসূলদের অস্বীকার করেছিল, শাস্তি এসেছিল, আর তাদের রক্ষা করার বা শাস্তি সরিয়ে দেওয়ার মতো কেউ ছিল না।"
          },
          {
            "en": "The fetched commentaries on this verse do not retell how each of the three was destroyed, and this article does not supply the details from elsewhere. The verse itself does not need them. It gives names and an order, and the phrase after them shows the list running forward in time. For the man's purpose, the names were enough. He was not telling stories to a court; he was pointing to an outcome that, in his words, had come before and could come again.",
            "bn": "এ আয়াতের যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো তিনটি জাতির প্রত্যেকে কীভাবে ধ্বংস হয়েছিল তা আবার বর্ণনা করে না। এ লেখাও অন্য কোথাও থেকে সেই বিবরণ এনে জোড়ে না। আয়াতের নিজেরও সেই বিবরণের দরকার পড়ে না। আয়াত দেয় নাম আর ক্রম, আর তাদের পরে কথাটা দেখায় তালিকাটা সময়ের সঙ্গে সামনে এগোচ্ছে। লোকটির উদ্দেশ্যের জন্য নামগুলোই যথেষ্ট ছিল। দরবারে তিনি গল্প শোনাচ্ছিলেন না। তিনি দেখাচ্ছিলেন এমন এক পরিণতি, যা তাঁর কথায় আগে এসেছিল, আবারও আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Came After",
          "bn": "যারা এল তাদের পরে"
        },
        "p": [
          {
            "en": "Wa-lladhina min ba'dihim: and those after them. At-Tabari is the only fetched commentator to name them. He says the phrase means the people of Ibrahim (AS) and the people of Lut (AS), and adds that they too are among the ahzab, the companies of 40:30. He then cites Qatada, who says of the same phrase simply: they are the ahzab. Qatada's gloss names no nation; it ties the phrase back to the word the man used one verse earlier, so that the companies and those after them are one group.",
            "bn": "ওয়াল্লাযীনা মিন বা'দিহিম: আর তাদের পরে যারা। সংগৃহীত তাফসীরকারদের মধ্যে কেবল তাবারীই তাদের নাম বলেন। তাঁর মতে এর অর্থ ইবরাহীম (আঃ)-এর জাতি আর লূত (আঃ)-এর জাতি। তিনি যোগ করেন, তারাও আহযাবের অন্তর্ভুক্ত, ৪০:৩০ আয়াতের সেই দলগুলোর। এরপর তিনি কাতাদার কথা আনেন। কাতাদা একই অংশ সম্পর্কে শুধু বলেন: তারাই আহযাব। কাতাদার ব্যাখ্যায় কোনো জাতির নাম নেই। তিনি অংশটিকে বেঁধে দেন এক আয়াত আগে লোকটির বলা শব্দের সঙ্গে, ফলে দলগুলো আর তাদের পরবর্তীরা একই গোষ্ঠী হয়ে যায়।"
          },
          {
            "en": "The others define the group by its conduct rather than by name. Ibn Kathir calls them the denying nations, al-umam al-mukadhdhiba, who came after the three. Al-Muyassar speaks of those who came after them in disbelief and denial. No other nation is named in the fetched texts on this verse, so none is added here. The open phrasing has its own effect: the list does not close with Thamud. It reaches as far as the habit of denial reaches, and the man leaves his listeners to ask whether they belong on it.",
            "bn": "বাকিরা এই দলটিকে চেনান নাম দিয়ে নয়, আচরণ দিয়ে। ইবন কাসীর তাদের বলেন অস্বীকারকারী জাতিসমূহ, আল-উমাম আল-মুকাযযিবা, যারা ওই তিনটি জাতির পরে এসেছিল। মুয়াসসার বলে, যারা কুফর আর অস্বীকারে তাদের পরে এসেছিল। এ আয়াতের সংগৃহীত তাফসীরে আর কোনো জাতির নাম নেই, তাই এখানেও যোগ করা হয়নি। খোলা কথাটার নিজস্ব একটা প্রভাব আছে। তালিকা সামূদে এসে থামে না। অস্বীকারের অভ্যাস যত দূর গেছে, তালিকাও তত দূর যায়। শ্রোতারা নিজেরাই সে তালিকায় পড়ে কি না, প্রশ্নটা লোকটি তাদের হাতেই ছেড়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Wrong He Intends",
          "bn": "জুলুম তাঁর ইচ্ছায় নেই"
        },
        "p": [
          {
            "en": "Wa ma-llahu yuridu zulman lil-'ibad: and Allah does not want wrong for the servants. At-Tabari explains the clause at length. Allah did not destroy these companies from among these nations as a wrong from Him to them, without a crime they had committed in what lay between them and Him, because He does not want wrong for His servants and does not will it. He destroyed them, says at-Tabari, for their crimes, their disbelief in Him and their opposing His command. The clause answers in advance anyone who would call the record unjust.",
            "bn": "ওয়া মাল্লাহু ইউরীদু যুলমান লিল-‘ইবাদ: আর আল্লাহ বান্দাদের উপর জুলুম চান না। তাবারী অংশটি বিস্তারিত ব্যাখ্যা করেন। এই জাতিগুলোর ওই দলগুলোকে আল্লাহ জুলুম করে ধ্বংস করেননি। তাঁর আর তাদের মাঝে তারা কোনো অপরাধ করেনি, অথচ ধ্বংস হলো, এমন নয়। কারণ তিনি নিজের বান্দাদের উপর জুলুম চান না, তা ইচ্ছাও করেন না। তাবারী বলেন, তিনি তাদের ধ্বংস করেছেন তাদের অপরাধের কারণে, তাঁর সঙ্গে কুফর আর তাঁর আদেশের বিরোধিতার কারণে। যে কেউ এই ইতিহাসকে অন্যায় বলতে চাইবে, বাক্যটি আগেভাগেই তার জবাব দিয়ে রাখে।"
          },
          {
            "en": "Three other fetched texts say the same in fewer words. Al-Muyassar: Allah does not want wrong for His servants, so as to punish them without a sin they had sinned; and it closes, exalted is Allah far above wrong and deficiency. As-Sa'di: so as to punish them without a sin they had sinned, or a crime they had committed before. Ibn Kathir: Allah destroyed them only for their sins, their denial of His messengers and their opposing His command, and so He carried out His decree among them.",
            "bn": "সংগৃহীত আরও তিনটি তাফসীর কম কথায় একই কথা বলে। মুয়াসসার বলে, আল্লাহ বান্দাদের উপর জুলুম চান না যে, তারা কোনো গুনাহ না করলেও তাদের শাস্তি দেবেন। শেষে যোগ করে, জুলুম আর অপূর্ণতা থেকে আল্লাহ বহু ঊর্ধ্বে। সা'দী বলেন, তারা কোনো গুনাহ করেনি বা আগে কোনো অপরাধ করেনি, অথচ তিনি শাস্তি দেবেন, এমন নয়। ইবন কাসীর বলেন, আল্লাহ তাদের ধ্বংস করেছেন কেবল তাদের গুনাহের কারণে, তাঁর রাসূলদের অস্বীকার আর তাঁর আদেশের বিরোধিতার কারণে। এভাবেই তিনি তাদের ব্যাপারে নিজের ফয়সালা কার্যকর করেছেন।"
          },
          {
            "en": "Al-Baghawi gives the clause a different angle. Wa ma-llahu yuridu zulman lil-'ibad means, in his gloss: He does not destroy them before the proof has been established against them. The others stress that no punishment came without sin; al-Baghawi stresses that none came before the case had been made. The two fit the verse's own setting, since the man is himself making the case to Fir'awn's court. The noun at the end is al-'ibad, the servants, wide enough to include the very peoples he has just named.",
            "bn": "বাগাভী অংশটিকে দেখেন আরেক দিক থেকে। তাঁর ব্যাখ্যায় এর মানে: তাদের বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হওয়ার আগে তিনি তাদের ধ্বংস করেন না। অন্যরা জোর দেন এই কথায় যে গুনাহ ছাড়া কোনো শাস্তি আসেনি। বাগাভী জোর দেন এই কথায় যে প্রমাণ পেশ হওয়ার আগে কোনো শাস্তি আসেনি। আয়াতের নিজের প্রেক্ষাপটে দুটি ব্যাখ্যাই খাপ খায়, কারণ লোকটি নিজেই ফিরআউনের দরবারে প্রমাণ পেশ করছেন। শেষ শব্দটি আল-‘ইবাদ, বান্দারা। শব্দটি এত প্রশস্ত যে এইমাত্র যে জাতিগুলোর নাম তিনি নিলেন, তারাও এর ভেতরে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sources Stop",
          "bn": "যেখানে উৎস থেমে যায়"
        },
        "p": [
          {
            "en": "Some of the usual sources say little or nothing here. The fetched text of al-Qurtubi carries no comment on this verse. Ma'arif al-Qur'an treats it inside a group of verses and spends its space on 40:28, on the man who concealed his faith, not on the nations named here. No fetched commentary attaches a hadith to this verse, so the article quotes none. No occasion of revelation is given for it either, and its setting is simply its place in the believer's speech.",
            "bn": "পরিচিত কিছু উৎস এখানে খুব কম বলে, কোনোটি কিছুই বলে না। কুরতুবীর সংগৃহীত পাঠে এ আয়াতের কোনো ব্যাখ্যা নেই। মাআরিফুল কুরআন আয়াতটিকে কয়েকটি আয়াতের দলের ভেতরে রেখে আলোচনা করে, আর পুরো জায়গাটা খরচ করে ৪০:২৮ আয়াতে, ঈমান গোপন রাখা মানুষটির প্রসঙ্গে, এখানে নাম নেওয়া জাতিগুলোর প্রসঙ্গে নয়। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস জোড়েনি, তাই এ লেখাও কোনো হাদীস উদ্ধৃত করে না। আয়াতটির কোনো শানে নুযূলও উল্লেখ নেই। এর প্রেক্ষাপট কেবল ঈমানদার লোকটির বক্তব্যের ভেতরে এর অবস্থান।"
          },
          {
            "en": "What remains is the shape of his argument, which the verse shows plainly. He stands inside the ruling house and speaks to a court that, by his own words in 40:29, holds power and the upper hand in the land. He sets no date and claims no authority of his own. He lays out a pattern and then a principle. The pattern: nations that kept to denial were taken. The principle: none of it was a wrong from Allah. Together they make a fair warning, because the outcome follows conduct.",
            "bn": "যা থাকে, তা তাঁর যুক্তির গড়ন, আর আয়াতটি সেটা স্পষ্ট দেখায়। তিনি দাঁড়িয়ে আছেন শাসক পরিবারের ভেতরে। কথা বলছেন এমন দরবারে, যাদের হাতে, ৪০:২৯ আয়াতে তাঁর নিজের কথায়, দেশের ক্ষমতা আর প্রাধান্য। তিনি কোনো দিনক্ষণ বেঁধে দেন না, নিজের কোনো কর্তৃত্বও দাবি করেন না। তিনি প্রথমে দেখান একটা ধারা, তারপর একটা নীতি। ধারাটা হলো, যে জাতিগুলো অস্বীকারে অটল ছিল, তারা ধ্বংস হয়েছে। নীতিটা হলো, তার কোনোটাই আল্লাহর জুলুম ছিল না। দুটি মিলে সতর্কবাণীটা ন্যায্য হয়ে ওঠে, কারণ পরিণতি আসে আচরণের পেছনে পেছনে।"
          }
        ]
      },
      {
        "h": {
          "en": "History Read as a Mirror",
          "bn": "আয়নায় পড়া ইতিহাস"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the people of Nuh, 'Ad, Thamud and those after them as the text describes them, as nations that denied and were punished for their own sins, and it licenses nothing against any living person or community. None of the fetched commentators turns these names into labels for a nation, a group or a neighbour of today. Who stands under Allah's judgement now is not the reader's to declare. The man in Fir'awn's court used the record to warn his own people, not to condemn strangers.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নূহের জাতি, ‘আদ, সামূদ আর তাদের পরবর্তীদের বর্ণনা দেয় ঠিক ততটুকু, যতটুকু কুরআনের ভাষ্যে আছে: তারা অস্বীকার করেছিল আর নিজেদের গুনাহের কারণে শাস্তি পেয়েছিল। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। সংগৃহীত তাফসীরকারদের কেউ এই নামগুলোকে আজকের কোনো জাতি, গোষ্ঠী বা প্রতিবেশীর গায়ে লাগানোর তকমা বানাননি। আজ কে আল্লাহর বিচারের আওতায়, তা ঘোষণা করা পাঠকের কাজ নয়। ফিরআউনের দরবারের মানুষটি ইতিহাস দিয়ে নিজের লোকদের সতর্ক করেছিলেন, অপরিচিতদের দোষী সাব্যস্ত করেননি।"
          },
          {
            "en": "Read that way, the verse turns towards the reader. If da'b is a habit, the question is which of one's own habits of refusal has been repeated long enough to become a pattern: a truth put off again, a warning explained away again. If da'b is Allah's settled way, the comfort and the warning are the same sentence: He wants no wrong for His servants, so nothing reaches them that their own conduct did not call for, and nothing comes before the proof has reached them.",
            "bn": "এভাবে পড়লে আয়াতটি পাঠকের দিকেই ফেরে। দা'ব যদি অভ্যাস হয়, তবে প্রশ্ন হলো, প্রত্যাখ্যানের আমার কোন অভ্যাসটা এত বার ফিরে এসেছে যে তা ধারা হয়ে গেছে। কোনো সত্যকে আবারও পিছিয়ে দেওয়া, কোনো সতর্কবাণীকে আবারও ব্যাখ্যা দিয়ে উড়িয়ে দেওয়া। আর দা'ব যদি আল্লাহর বাঁধা রীতি হয়, তবে সান্ত্বনা আর সতর্কবাণী একই বাক্যে। তিনি বান্দাদের উপর জুলুম চান না। তাই নিজের আচরণ যা ডেকে আনেনি, তেমন কিছু তাদের উপর আসে না। প্রমাণ পৌঁছানোর আগেও কিছু আসে না।"
          }
        ]
      }
    ]
  },
  "40:40": {
    "sections": [
      {
        "h": {
          "en": "Still His Plea",
          "bn": "তখনো তাঁরই আবেদন"
        },
        "p": [
          {
            "en": "This verse is not a new voice. It stands inside the plea of the man who believed, from Fir'awn's own family, between two of his addresses: ya qawmi in 40:39, where he tells his people that this worldly life is a passing enjoyment and the Hereafter is the home of settlement, and wa ya qawmi, which opens 40:41. The abridged English Ibn Kathir files 40:38 to 40:40 together under the heading 'More of what the Believer from Fir'awn's Family said'. The verse is his account of how that lasting home is reached.",
            "bn": "এ আয়াতে নতুন কোনো কণ্ঠ নেই। ফেরাউনের নিজের পরিবারের যে মানুষটি ঈমান এনেছিলেন, এটি তাঁরই আবেদনের অংশ। আয়াতটি বসে আছে তাঁর দুটি সম্বোধনের মাঝখানে। ৪০:৩৯ আয়াতে ইয়া কাওমি বলে তিনি জাতিকে জানিয়েছেন, দুনিয়ার জীবন ক্ষণিকের ভোগ, আর আখিরাতই স্থায়ী ঠিকানা। ৪০:৪১ আয়াত শুরু হয় ওয়া ইয়া কাওমি দিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪০:৩৮ থেকে ৪০:৪০ পর্যন্ত আয়াতগুলো এক শিরোনামে রেখেছে: ফেরাউন পরিবারের মু'মিন আরও যা বলেছিলেন। সেই স্থায়ী ঘরে কীভাবে পৌঁছানো যায়, এ আয়াত তারই বিবরণ।"
          },
          {
            "en": "The same abridged Ibn Kathir explains the verse before it in a way that leads straight here. This life, it says, is insignificant and fleeting and will soon pass away, while the Hereafter is the abode that will never end and from which there is no departure, and it will be either Paradise or Hell. Having said that the lasting home has two doors, the man now tells his people which deeds lead through which. The verse is the second half of an argument that began one verse earlier.",
            "bn": "ইবন কাসীরের ওই সংক্ষিপ্ত সংস্করণ আগের আয়াতের যে ব্যাখ্যা দেয়, তা সরাসরি এখানে এনে দাঁড় করায়। তাঁর ভাষায়, এ জীবন তুচ্ছ, ক্ষণস্থায়ী, শিগগিরই ফুরিয়ে যাবে। আখিরাত এমন ঠিকানা যা কখনো শেষ হবে না, সেখান থেকে কেউ আর সরে যাবে না, আর সেই ঠিকানা হয় জান্নাত, নয় জাহান্নাম। স্থায়ী ঘরের দুটি দরজা আছে, এ কথা বলার পর মানুষটি এবার জাতিকে জানাচ্ছেন কোন আমল কোন দরজায় নিয়ে যায়। একটি আয়াত আগে যে যুক্তি শুরু হয়েছিল, এ আয়াত তার দ্বিতীয় ভাগ।"
          },
          {
            "en": "Two framing details are worth recording as they stand. The same abridged Ibn Kathir introduces this particular verse with the words 'Allah says', so its own framing carries both the believer's heading and Allah's speech; the other fetched commentaries gloss the words without naming a speaker at all. The man has already pointed his people to the record of Nuh, 'Ad and Thamud in 40:31, and his plea ends in 40:44 by handing his affair to Allah. Between those, here, he states the rule of recompense.",
            "bn": "কাঠামোর দুটি খুঁটিনাটি যেমন আছে তেমনই লিখে রাখা ভালো। ইবন কাসীরের ওই সংক্ষিপ্ত সংস্করণ এই আয়াতটির আগে লিখেছে 'আল্লাহ বলেন'। ফলে তার নিজের কাঠামোয় মু'মিনের কথার শিরোনামও আছে, আল্লাহর বাণীর উল্লেখও আছে। সংগৃহীত বাকি তাফসীরগুলো আয়াতের শব্দ ব্যাখ্যা করে, বক্তার নাম নেয় না। এই মানুষটি ৪০:৩১ আয়াতে জাতিকে নূহ, আদ ও সামূদের ইতিহাস মনে করিয়ে দিয়েছেন, আর ৪০:৪৪ আয়াতে নিজের বিষয় আল্লাহর হাতে সঁপে দিয়ে আবেদন শেষ করেছেন। এ দুয়ের মাঝে, এখানে, তিনি প্রতিদানের নিয়মটা বলছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Like, With Nothing Added",
          "bn": "সমান বদলা, এক চুলও বেশি নয়"
        },
        "p": [
          {
            "en": "Man 'amila sayyi'atan fa-la yujza illa mithlaha: whoever does an evil deed is recompensed only with its like. The commentators read mithlaha with small but distinct emphases. Ibn Kathir, in Arabic, gives two words, wahidatan mithlaha, a single one like it, and the abridged English repeats: one like it. At-Tabari says Allah will recompense such a person in the Hereafter only with an evil like it, and explains what that means: that He punishes him for it. Al-Qurtubi names the like directly as the punishment, al-'adhab.",
            "bn": "মান আমিলা সাইয়িআতান ফালা ইউজযা ইল্লা মিসলাহা: যে মন্দ কাজ করে, তাকে বদলা দেওয়া হয় কেবল তার সমান। মিসলাহা শব্দটি তাফসীরকারেরা পড়েন ছোট ছোট, কিন্তু আলাদা জোর দিয়ে। আরবি তাফসীরে ইবন কাসীর দুটি শব্দ দেন: ওয়াহিদাতান মিসলাহা, ঠিক তার মতো একটিমাত্র। সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে। তাবারী বলেন, আখিরাতে আল্লাহ তাকে বদলা দেবেন শুধু ওই মন্দের মতো আরেক মন্দ দিয়ে। এর মানেও তিনি খুলে বলেন: আল্লাহ সেই কাজের জন্য তাকে শাস্তি দেবেন। কুরতুবী সমান জিনিসটার নাম সরাসরি বলে দেন: শাস্তি, আল-আযাব।"
          },
          {
            "en": "The Muyassar puts the measure in plain terms: a punishment equal to his disobedience. As-Sa'di explains the like through its effect on whoever receives it: he is repaid only with what harms and grieves him, because the recompense of an evil is evil. None of the fetched commentaries adds anything to the scale on this side. Whatever each says about the nature of the punishment, they agree on its size. It matches the deed, and the verse's own particle, illa, only, rules out anything beyond it.",
            "bn": "মুয়াসসার মাপটা বলে সাদা কথায়: তার নাফরমানির সমান শাস্তি। সা'দী সমান বদলাকে বোঝান যে পায় তার উপর তার প্রভাব দিয়ে। তাকে বদলা দেওয়া হবে কেবল এমন কিছু দিয়ে যা তাকে কষ্ট দেয়, দুঃখ দেয়, কারণ মন্দের প্রতিদান মন্দই। সংগৃহীত কোনো তাফসীর এ দিকের পাল্লায় বাড়তি কিছু যোগ করে না। শাস্তির ধরন নিয়ে যে যা-ই বলুন, এর পরিমাণে সবাই একমত। পরিমাণ কাজের সমান। আয়াতের নিজের শব্দ ইল্লা, অর্থাৎ কেবল, এর বেশি কিছুর পথ বন্ধ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Evil Is Meant",
          "bn": "কোন মন্দের কথা বলা হচ্ছে"
        },
        "p": [
          {
            "en": "What counts as the sayyi'a here? The fetched commentaries do not agree. At-Tabari reports from Qatada that the evil deed means shirk, setting up partners with Allah, and records the note that the sayyi'a, for Qatada, is shirk. Al-Qurtubi opens his comment the same way: whoever does an evil deed, meaning shirk, is recompensed only with its like, which is the punishment. On this reading the verse sets the believer's message against the idolatry of the court around him, and the recompense it describes is for that gravest of wrongs.",
            "bn": "এখানে সাইয়িআ বলতে কী বোঝায়? সংগৃহীত তাফসীরগুলো এ প্রশ্নে একমত নয়। তাবারী কাতাদা থেকে বর্ণনা করেন, মন্দ কাজ মানে শিরক, আল্লাহর সঙ্গে শরিক করা। সঙ্গে এ কথাও লিখে রাখেন যে কাতাদার কাছে সাইয়িআ মানেই শিরক। কুরতুবীও ব্যাখ্যা শুরু করেন একইভাবে: যে মন্দ কাজ করে, অর্থাৎ শিরক, তার বদলা কেবল তার সমান, আর সেটা হলো শাস্তি। এ পাঠে আয়াতটি মু'মিনের দাওয়াতকে দাঁড় করায় চারপাশের দরবারের মূর্তিপূজার বিপরীতে। আর যে বদলার কথা আয়াত বলে, তা সবচেয়ে বড় অন্যায়টির বদলা।"
          },
          {
            "en": "Others read the word more widely. At-Tabari's own gloss, before he quotes Qatada, is whoever acts in disobedience to Allah in this worldly life. The Muyassar speaks of whoever disobeys Allah in his life and turns aside from the path of guidance. As-Sa'di lists three things: shirk, fusuq or 'isyan, that is, idolatry, open sinfulness or disobedience. Both readings are kept here as they stand, with their names. The fetched texts set them side by side and do not settle between them, and neither does this article.",
            "bn": "অন্যরা শব্দটিকে পড়েন আরও বিস্তৃত অর্থে। কাতাদার কথা উদ্ধৃত করার আগে তাবারীর নিজের ব্যাখ্যা হলো: দুনিয়ার জীবনে যে আল্লাহর নাফরমানি করে। মুয়াসসার বলে সেই ব্যক্তির কথা, যে জীবনে আল্লাহর অবাধ্য হয়েছে আর হিদায়াতের পথ থেকে সরে গেছে। সা'দী তিনটি জিনিসের নাম নেন: শিরক, ফুসুক অথবা ইসইয়ান, অর্থাৎ শিরক, প্রকাশ্য গুনাহ অথবা নাফরমানি। দুটি পাঠই এখানে যেমন আছে তেমন রাখা হলো, যাঁর যাঁর নামসহ। সংগৃহীত তাফসীরগুলো দুটিকে পাশাপাশি রাখে, কোনোটির পক্ষে রায় দেয় না। এ লেখাও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Man or Woman, One Promise",
          "bn": "পুরুষ বা নারী, একই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Wa man 'amila salihan min dhakarin aw untha: and whoever does righteous work, whether male or female. The verse names both, and attaches to both the same condition and the same promise. The commentators restate the phrase rather than expand it. At-Tabari: whoever acts in obedience to Allah in this world, follows His command and keeps away from what He forbade, whether a man or a woman. The Muyassar: male or female. Neither draws any distinction between the two, and the verse itself draws none.",
            "bn": "ওয়া মান আমিলা সালিহান মিন যাকারিন আও উনসা: আর পুরুষ হোক বা নারী, যে নেক আমল করে। আয়াত দুজনেরই নাম নেয়, আর দুজনের সঙ্গেই জুড়ে দেয় একই শর্ত, একই প্রতিশ্রুতি। তাফসীরকারেরা কথাটা বাড়িয়ে বলেন না, নিজের ভাষায় আবার বলেন। তাবারী: দুনিয়াতে যে আল্লাহর আনুগত্য করে, তাঁর হুকুম মানে, আর যা থেকে তিনি নিষেধ করেছেন তা থেকে বিরত থাকে, সে পুরুষ হোক বা নারী। মুয়াসসার: পুরুষ হোক কিংবা নারী। দুজনের মধ্যে কেউ কোনো পার্থক্য টানেন না। আয়াত নিজেও টানে না।"
          },
          {
            "en": "What counts as righteous work? As-Sa'di widens it to three kinds: works of the heart, works of the limbs, and words of the tongue. Al-Qurtubi reports Ibn 'Abbas as saying that it means la ilaha illa Allah, the testimony that there is no god but Allah, and Qatada, through at-Tabari, glosses salihan simply as good, khayr. So the promise does not wait on grand deeds alone. And the reward that follows is given to whoever does such work, with no difference drawn between a man and a woman in what is asked or in what is given.",
            "bn": "নেক আমল কোনগুলো? সা'দী একে তিনটি ভাগে ছড়িয়ে দেন: অন্তরের আমল, অঙ্গপ্রত্যঙ্গের আমল আর মুখের কথা। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা বর্ণনা করেন যে এর মানে লা ইলাহা ইল্লাল্লাহ, আল্লাহ ছাড়া কোনো ইলাহ নেই, এই সাক্ষ্য। আর তাবারীর সূত্রে কাতাদা সালিহান শব্দের সোজা অর্থ করেন ভালো কাজ, খাইর। তাই প্রতিশ্রুতি শুধু বড় বড় আমলের অপেক্ষায় বসে থাকে না। আর পরে যে প্রতিদানের কথা আসে, তা দেওয়া হয় এমন আমল যে-ই করুক তাকে। কী চাওয়া হয় আর কী দেওয়া হয়, কোনোটাতেই পুরুষ ও নারীর মধ্যে পার্থক্য টানা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Condition of Faith",
          "bn": "ঈমানের শর্ত"
        },
        "p": [
          {
            "en": "Then comes a condition: wa huwa mu'min, while being a believer. The clause is short, and each commentator fills it a little differently. At-Tabari says it means a believer in Allah. The Muyassar adds a word: a believer in Allah who affirms His oneness. Al-Qurtubi places the faith in the heart and widens what it accepts: one who affirms with his heart Allah and the prophets. The three glosses build on one another rather than compete, and all three make faith the ground on which the righteous work stands.",
            "bn": "তারপর আসে একটি শর্ত: ওয়া হুয়া মু'মিন, আর সে মু'মিন। অংশটা ছোট, তবে প্রত্যেক তাফসীরকার একে একটু ভিন্নভাবে ভরে তোলেন। তাবারী বলেন, এর মানে আল্লাহর উপর ঈমান রাখে এমন ব্যক্তি। মুয়াসসার একটু যোগ করে: আল্লাহর উপর ঈমান রাখে এবং তাঁর একত্ব মানে। কুরতুবী ঈমানকে রাখেন অন্তরে, আর এর পরিসরও বাড়ান: যে অন্তর দিয়ে আল্লাহকে আর নবীদের সত্য বলে মেনে নেয়। তিনটি ব্যাখ্যা একে অন্যের সঙ্গে লড়ে না, একটার উপর আরেকটা গড়ে ওঠে। তিনটিতেই নেক আমল দাঁড়িয়ে থাকে ঈমানের ভিতের উপর।"
          },
          {
            "en": "In the setting, this matters. The man is speaking to a court whose king has just declared that he thinks Musa (AS) a liar, in 40:37, and he has already called them to follow him to the way of right conduct in 40:38. When he names the condition of faith, he is not adding a technicality. He is telling his listeners that what they do will be weighed together with whom they believe in. The verse holds work and faith together, and the fetched commentaries keep them together.",
            "bn": "প্রেক্ষাপটে এ শর্তের গুরুত্ব আছে। মানুষটি কথা বলছেন এমন এক দরবারে, যার রাজা ৪০:৩৭ আয়াতে এইমাত্র বলেছে, সে মূসা (আঃ)-কে মিথ্যাবাদী মনে করে। আর ৪০:৩৮ আয়াতে তিনি আগেই তাদের ডেকেছেন, তাঁর অনুসরণ করলে তিনি তাদের সঠিক পথ দেখাবেন। ঈমানের শর্তটা তাই নিছক নিয়মরক্ষা নয়। তিনি শ্রোতাদের বলছেন, তারা কী করে তা মাপা হবে তারা কার উপর ঈমান রাখে তার সঙ্গে মিলিয়ে। আয়াত আমল আর ঈমানকে একসঙ্গে বাঁধে, আর সংগৃহীত তাফসীরগুলোও দুটোকে আলাদা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Provision Past All Counting",
          "bn": "গোনার বাইরে রিজিক"
        },
        "p": [
          {
            "en": "Fa-ula'ika yadkhuluna al-jannata yurzaquna fiha bi-ghayri hisab: those will enter Paradise, provided for therein without hisab. The last word carries several glosses, and they are worth naming in turn. At-Tabari says Allah will provide for them in Paradise from its fruits and from its bliss and pleasures, without hisab, and then quotes Qatada with an oath: no, by Allah, there is no measuring vessel there and no scale. On this reading the phrase means without measure.",
            "bn": "ফাউলাইকা ইয়াদখুলূনাল জান্নাতা ইউরযাকূনা ফীহা বিগাইরি হিসাব: তারাই জান্নাতে প্রবেশ করবে, সেখানে তাদের রিজিক দেওয়া হবে বিনা হিসাবে। শেষ শব্দটির কয়েকটি ব্যাখ্যা আছে, একে একে নাম ধরে বলা দরকার। তাবারী বলেন, আল্লাহ জান্নাতে তাদের রিজিক দেবেন তার ফলমূল থেকে, তার নিয়ামত আর আনন্দ থেকে, বিনা হিসাবে। তারপর তিনি কাতাদার কসম খাওয়া কথাটি উদ্ধৃত করেন: না, আল্লাহর কসম, সেখানে মাপার পাত্রও নেই, দাঁড়িপাল্লাও নেই। এ পাঠে কথাটির মানে মাপজোখ ছাড়া।"
          },
          {
            "en": "Ibn Kathir reads it as a reward not fixed to the size of the deed: it is not measured out as a recompense; rather, Allah rewards abundantly, with a reward that has no ending and no running out. The abridged English has it that the reward cannot be enumerated, an immense reward without end. As-Sa'di uses a pair, bila haddin wa la 'add, without limit and without count, and adds that Allah gives them what their deeds do not reach.",
            "bn": "ইবন কাসীর একে পড়েন এমন প্রতিদান হিসেবে, যা আমলের মাপে বাঁধা নয়। তাঁর কথায়, এটা প্রতিদান হিসেবে মেপে দেওয়া হয় না। বরং আল্লাহ দেন অঢেল সওয়াব, যার শেষ নেই, যা কখনো ফুরায় না। সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, এ প্রতিদান গুনে শেষ করা যায় না, বিশাল আর অফুরান। সা'দী জোড়া শব্দে বলেন: বিলা হাদ্দিন ওয়ালা আদ্দ, সীমা ছাড়া, গোনা ছাড়া। সঙ্গে যোগ করেন, তাদের আমল যেখানে পৌঁছাতে পারে না, আল্লাহ তাদের সেটুকুও দেন।"
          },
          {
            "en": "Al-Baghawi reports a different angle from Muqatil: there is no taba'a, no consequence or claim, upon them in the good they are given in Paradise. Here hisab comes close to reckoning: what they receive carries no account to settle. The Muyassar keeps the verse's own words, saying Allah provides for them there from its fruits, bliss and pleasures without hisab. So the glosses run from without measure, to without limit or end, to without reckoning, and each is attributed above to whoever gives it.",
            "bn": "বাগাভী মুকাতিল থেকে ভিন্ন এক দিক তুলে আনেন: জান্নাতে তাদের যে কল্যাণ দেওয়া হবে, তার জন্য তাদের উপর কোনো তাবিআ নেই, কোনো দায় বা পাওনা নেই। এখানে হিসাব শব্দটা জবাবদিহির কাছাকাছি: যা তারা পাবে, তার কোনো হিসাব মেটাতে হবে না। মুয়াসসার আয়াতের নিজের শব্দই রেখে দেয়: আল্লাহ সেখানে তাদের ফলমূল, নিয়ামত আর আনন্দ থেকে বিনা হিসাবে রিজিক দেবেন। তাহলে ব্যাখ্যাগুলো চলে মাপজোখ ছাড়া থেকে সীমাহীন ও অফুরান হয়ে জবাবদিহিহীন পর্যন্ত। কোনটি কার, ওপরে নাম ধরে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Scales, Not One",
          "bn": "এক পাল্লা নয়, দুই পাল্লা"
        },
        "p": [
          {
            "en": "Set the two halves of the verse side by side. The evil deed is repaid illa mithlaha, only with its like. The good deed is answered bi-ghayri hisab, without account. The verse itself makes the contrast; the commentaries explain it from both ends. On the first side, Ibn Kathir's 'one like it' and the Muyassar's 'equal to his disobedience' describe a strict match. On the second, Ibn Kathir says the reward is not measured as a recompense, and as-Sa'di that it goes beyond what the deeds themselves reach.",
            "bn": "আয়াতের দুই অংশ পাশাপাশি রাখুন। মন্দ কাজের বদলা ইল্লা মিসলাহা, কেবল তার সমান। নেক কাজের জবাব বিগাইরি হিসাব, বিনা হিসাবে। এই বৈপরীত্য আয়াত নিজেই দেখায়, তাফসীরগুলো দুই প্রান্ত থেকে তা ব্যাখ্যা করে। প্রথম দিকে ইবন কাসীরের 'ঠিক তার মতো একটি' আর মুয়াসসারের 'নাফরমানির সমান' কথা দুটি কড়া মাপের ছবি আঁকে। দ্বিতীয় দিকে ইবন কাসীর বলেন, এ সওয়াব প্রতিদান হিসেবে মেপে দেওয়া হয় না। আর সা'দী বলেন, তা আমলের নাগাল ছাড়িয়ে যায়।"
          },
          {
            "en": "Put plainly, as these commentators frame it, wrongdoing meets exact justice and righteousness meets generosity. Nothing in either half is unjust: no one is punished beyond the deed, and no believer is held to the bare value of what they did. No fetched commentary attaches a hadith to this verse, so none is quoted here. Al-Qurtubi records a difference in reciting the verb: some read yudkhaluna, they will be admitted, among them the reciter Ibn Kathir, not the commentator, Abu 'Amr and Abu Bakr from 'Asim; the rest read yadkhuluna, they will enter.",
            "bn": "সোজা কথায়, এই তাফসীরকারদের উপস্থাপনায় অন্যায়ের সামনে দাঁড়ায় নিখুঁত ইনসাফ, আর নেকির সামনে দানশীলতা। কোনো দিকেই জুলুম নেই। কাউকে তার কাজের চেয়ে বেশি শাস্তি দেওয়া হয় না, আর কোনো মু'মিনকে তার আমলের নিছক দামে বেঁধে রাখা হয় না। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। কুরতুবী ক্রিয়াটির পাঠে একটি পার্থক্য লিখে রাখেন। কেউ পড়েন ইউদখালূনা, তাদের প্রবেশ করানো হবে। এঁদের মধ্যে আছেন কারী ইবন কাসীর (তাফসীরকার নন), আবু আমর এবং আসিমের সূত্রে আবু বকর। বাকিরা পড়েন ইয়াদখুলূনা, তারা প্রবেশ করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing Our Own Deeds",
          "bn": "নিজের আমল নিজে মাপা"
        },
        "p": [
          {
            "en": "The verse was spoken to Fir'awn's people, and it describes what the text describes: a rule of recompense set before a court that had turned away from Musa (AS). It licenses nothing against any living person or community. It does not tell a reader which of the people around them is headed for the punishment of mithlaha. The man who said it was pleading with his own people, hoping they would turn, and the verse keeps that tone: a warning offered, not a sentence passed.",
            "bn": "কথাটা বলা হয়েছিল ফেরাউনের জাতিকে, আর আয়াত ঠিক ততটুকুই বর্ণনা করে যতটুকু তার শব্দে আছে: মূসা (আঃ) থেকে মুখ ফিরিয়ে নেওয়া এক দরবারের সামনে প্রতিদানের নিয়ম। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। চারপাশের কোন মানুষ মিসলাহার শাস্তির দিকে যাচ্ছে, পাঠককে তা বলে দেয় না। যিনি কথাটা বলেছিলেন, তিনি নিজের জাতির কাছে আবেদন করছিলেন, আশা করছিলেন তারা ফিরে আসবে। আয়াতের সুরও তাই: রায় ঘোষণা নয়, সতর্ক করা।"
          },
          {
            "en": "Read against oneself, the verse asks two things. The first is honesty about wrong: it will be weighed exactly, so it should be repented of while repentance is still possible. The second is hope about good: righteous work done in faith, by a man or a woman, is met with what no one can measure. A small good deed is never wasted with such a Lord. The believer of Fir'awn's family set these two side by side for his people, and they still stand side by side for every reader.",
            "bn": "নিজের দিকে ফিরিয়ে পড়লে আয়াত দুটি জিনিস চায়। প্রথমটা অন্যায়ের ব্যাপারে সততা। তা মাপা হবে ঠিক ঠিক, তাই তওবার সুযোগ থাকতে থাকতেই তওবা করা দরকার। দ্বিতীয়টা নেকির ব্যাপারে আশা। পুরুষ হোক বা নারী, ঈমান নিয়ে করা নেক আমলের জবাবে আসে এমন কিছু, যা কেউ মাপতে পারে না। এমন রবের কাছে ছোট একটা নেক কাজও কখনো বৃথা যায় না। ফেরাউন পরিবারের মু'মিন এ দুটি কথা পাশাপাশি রেখেছিলেন তাঁর জাতির সামনে। প্রত্যেক পাঠকের সামনে আজও তা পাশাপাশিই আছে।"
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
  "40:51": {
    "sections": [
      {
        "h": {
          "en": "Out of the Fire's Dialogue",
          "bn": "আগুনের ভেতরের কথোপকথন থেকে"
        },
        "p": [
          {
            "en": "The verses before this one take place in the Fire. The weak plead with the arrogant in 40:47, the people of the Fire ask the keepers of Hell to pray for a lighter day in 40:49, and in 40:50 the keepers answer with a question: did your messengers not come to you with clear proofs? Then the speaker changes. Inna la-nansuru rusulana wa-alladhina amanu: indeed, We will surely help Our messengers and those who believe, in the life of this world and on the Day the witnesses stand.",
            "bn": "এর আগের আয়াতগুলোর দৃশ্য জাহান্নামের ভেতরে। ৪০:৪৭ আয়াতে দুর্বলেরা দাপটওয়ালাদের কাছে মিনতি করে। ৪০:৪৯ আয়াতে আগুনের বাসিন্দারা রক্ষীদের বলে, একটা দিনের শাস্তি কমানোর জন্য দু'আ কর। ৪০:৫০ আয়াতে রক্ষীরা জবাব দেয় প্রশ্ন দিয়ে: তোমাদের রসূলেরা কি স্পষ্ট প্রমাণ নিয়ে আসেননি? এরপর বক্তা বদলে যান। ইন্না লানানসুরু রুসুলানা ওয়াল্লাযীনা আমানূ: নিশ্চয়ই আমি আমার রসূলদের আর মু'মিনদের অবশ্যই সাহায্য করব, দুনিয়ার জীবনে, আর যেদিন সাক্ষীরা দাঁড়াবে সেদিনও।"
          },
          {
            "en": "As-Sa'di reads the link this way. Allah had just mentioned the punishment of Fir'awn's people in this world, in the barzakh and on the Day of Resurrection, and the dreadful state of the people of the Fire who cast off His messengers and fought them. Then He said: We will surely help Our messengers. The same messengers whom the keepers name as bringers of clear proofs are, in the next breath, the ones promised help.",
            "bn": "সা'দী সংযোগটা পড়েন এভাবে। আল্লাহ এইমাত্র ফেরাউনের লোকদের শাস্তির কথা বলেছেন, দুনিয়াতে, বারযাখে আর কিয়ামতের দিনে। বলেছেন জাহান্নামবাসীদের ভয়ংকর অবস্থার কথা, যারা তাঁর রসূলদের ছুড়ে ফেলেছিল আর তাঁদের বিরুদ্ধে লড়েছিল। তারপর তিনি বললেন: আমি অবশ্যই আমার রসূলদের সাহায্য করব। রক্ষীরা যে রসূলদের কথা তুলেছিল স্পষ্ট প্রমাণের বাহক হিসেবে, পরের নিঃশ্বাসেই তাঁরা হয়ে যান সাহায্যের ওয়াদা পাওয়া মানুষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Musa, Muhammad, or Every Messenger",
          "bn": "মূসা, মুহাম্মাদ, নাকি সব রসূল"
        },
        "p": [
          {
            "en": "Who is meant by Our messengers? Al-Qurtubi first gives a reading tied to the surrounding story: the messenger meant is Musa (AS), and those who believe refers to the believer who admonished, the man of Fir'awn's family whose plea fills the verses before. Then, with the words wa-qila, it is said, he records the wider view: the promise is general, covering all the messengers and all the believers.",
            "bn": "আমার রসূলেরা বলতে কারা? কুরতুবী প্রথমে আশপাশের কাহিনির সঙ্গে বাঁধা একটি ব্যাখ্যা দেন। এখানে রসূল মানে মূসা (আঃ)। আর মু'মিনেরা মানে সেই উপদেশদাতা মু'মিন, ফেরাউনের পরিবারের সেই মানুষ, যাঁর আবেদনে আগের আয়াতগুলো ভরা। তারপর 'বলা হয়' কথাটি দিয়ে তিনি আরও বিস্তৃত মতটি তুলে রাখেন: ওয়াদাটি সাধারণ, সব রসূল আর সব মু'মিন এর আওতায়।"
          },
          {
            "en": "At-Tabari offers a third angle. On one of his two readings, the plural is a way of speaking, and one person is meant: We will surely help Our messenger Muhammad ﷺ and those who believed in him. He says he has shown before that the Arabs voice a report in the plural while meaning one, when no particular person is set up as its subject. Ibn Kathir, summarising at-Tabari, puts the point slightly differently: the report comes out general while only some are meant, which he says the language allows.",
            "bn": "তাবারী দেখান তৃতীয় এক দিক। তাঁর দুই ব্যাখ্যার একটিতে বহুবচন কেবল বলার ধরন, উদ্দেশ্য একজন। অর্থ দাঁড়ায়: আমি অবশ্যই আমার রসূল মুহাম্মাদ ﷺ-কে আর তাঁর উপর ঈমান আনা মানুষদের সাহায্য করব। তিনি বলেন, আগেই তিনি দেখিয়েছেন যে আরবরা কোনো খবর বহুবচনে বলে অথচ বোঝায় একজনকে, যখন খবরের জন্য নির্দিষ্ট কাউকে সামনে দাঁড় করানো হয় না। ইবন কাসীর তাবারীর কথা সংক্ষেপে আনতে গিয়ে একটু ভিন্নভাবে বলেন: খবরটি সাধারণ শব্দে এসেছে, উদ্দেশ্য কিছু জন। তাঁর মতে ভাষায় এর অবকাশ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Objection at-Tabari Voices",
          "bn": "তাবারী যে আপত্তি তোলেন"
        },
        "p": [
          {
            "en": "At-Tabari does not pass over the hard question; he puts it in the mouth of an imagined questioner. What does We will surely help Our messengers mean, when we know that some of them were killed by their enemies and mutilated, like Sha'ya and Yahya ibn Zakariyya (AS)? Others were threatened with death by their own people, and the best of their state was to escape, like Ibrahim (AS), who left his land for al-Sham, and 'Isa (AS), who was raised to the heaven when his people wanted to kill him.",
            "bn": "কঠিন প্রশ্নটা তাবারী এড়িয়ে যান না। তিনি তা তুলে দেন এক কল্পিত প্রশ্নকারীর মুখে। আমি অবশ্যই আমার রসূলদের সাহায্য করব, এ কথার মানে কী? আমরা তো জানি, তাঁদের কাউকে কাউকে শত্রুরা হত্যা করেছে, বিকৃত করেছে, যেমন শা'ইয়া আর ইয়াহইয়া ইবন যাকারিয়া (আঃ)। আবার কারও কারও জাতি তাঁদের হত্যার ফন্দি এঁটেছিল। তাঁদের সবচেয়ে ভালো পরিণতি ছিল প্রাণ নিয়ে বেরিয়ে আসা। যেমন ইবরাহীম (আঃ), যিনি দেশ ছেড়ে শামে চলে যান। আর ঈসা (আঃ), যাঁকে আসমানে তুলে নেওয়া হয়, যখন তাঁর জাতি তাঁকে হত্যা করতে চেয়েছিল।"
          },
          {
            "en": "So where, the questioner asks, is the help Allah said He would give His messengers and the believers in this world, when His prophets suffered what they suffered and were not given victory over those who did it? Ibn Kathir reproduces the question from at-Tabari, naming Yahya, Zakariyya and Sha'ya among the killed. Ma'arif al-Qur'an raises the same possible doubt and answers it, as it says, by way of Ibn Kathir citing Ibn Jarir.",
            "bn": "প্রশ্নকারী তাই জানতে চান: আল্লাহ বলেছেন দুনিয়ার জীবনে তিনি তাঁর রসূল আর মু'মিনদের সাহায্য করবেন। অথচ তাঁর নবীদের উপর যা যা ঘটার ঘটেছে, যারা ঘটিয়েছে তাদের উপর তাঁদের বিজয় দেওয়া হয়নি। তাহলে সেই সাহায্য কোথায়? ইবন কাসীর প্রশ্নটি তাবারী থেকে হুবহু আনেন, আর নিহতদের মধ্যে নাম নেন ইয়াহইয়া, যাকারিয়া ও শা'ইয়ার। মাআরিফুল কুরআনও একই সম্ভাব্য সংশয় তোলে, আর নিজের ভাষায় তার জবাব দেয় ইবন কাসীরের মাধ্যমে ইবন জারীরের বরাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Before, During, After",
          "bn": "আগে, সময়ে, পরে: সাহায্যের রূপ"
        },
        "p": [
          {
            "en": "At-Tabari answers that the verse has two readings, and that the meaning of both is sound. On the first, help takes one of several forms. It may be raising the messengers and believers over those who denied, until they overpower them, as Allah did with Dawud and Sulayman (AS), giving them a kingdom with which they subdued every disbeliever, and as He did with Muhammad ﷺ by making him prevail over those of his people who denied him. That is help seen in the messenger's own lifetime and at his own hand.",
            "bn": "তাবারীর জবাব: আয়াতটির দুটি ব্যাখ্যা, আর দুটির অর্থই সঠিক। প্রথম ব্যাখ্যায় সাহায্য আসে কয়েক রূপের কোনো একটিতে। হতে পারে রসূল আর মু'মিনদের অস্বীকারকারীদের উপর উঁচু করে দেওয়া, যতক্ষণ না তাঁরা তাদের পরাস্ত করেন। যেমন আল্লাহ দাঊদ ও সুলাইমান (আঃ)-কে এমন রাজত্ব আর ক্ষমতা দেন, যা দিয়ে তাঁরা প্রত্যেক কাফিরকে দমন করেন। যেমন তিনি মুহাম্মাদ ﷺ-কে তাঁর জাতির অস্বীকারকারীদের উপর জয়ী করেন। এ সাহায্য রসূলের জীবদ্দশায়, তাঁর নিজের হাতেই দেখা যায়।"
          },
          {
            "en": "Or help may be Allah's own vengeance on those who opposed the messengers, destroying them and rescuing the messengers from among them. At-Tabari's examples are Nuh (AS), whose people were drowned while he was saved, and Musa (AS), when Fir'awn and his people were drowned and Musa was rescued together with those who believed in him. Here the messenger does not overpower his enemies. He is brought out, and the outcome is decided over them by Allah. At-Tabari treats this, too, as fulfilment of the same promise.",
            "bn": "অথবা সাহায্য হতে পারে রসূলদের বিরোধীদের উপর আল্লাহর নিজের প্রতিশোধ: তাদের ধ্বংস করা আর তাদের মাঝখান থেকে রসূলদের বাঁচিয়ে আনা। তাবারীর উদাহরণ নূহ (আঃ), যাঁর জাতি ডুবে গেল আর তিনি রক্ষা পেলেন। আর মূসা (আঃ), যখন ফেরাউন ও তার লোকেরা ডুবল আর মূসা রক্ষা পেলেন তাঁর উপর ঈমান আনা মানুষদের নিয়ে। এখানে রসূল নিজে শত্রুকে পরাস্ত করেন না। তাঁকে বের করে আনা হয়, আর তাদের ব্যাপারে ফয়সালা করেন আল্লাহ। তাবারীর চোখে এটাও একই ওয়াদার পূরণ।"
          },
          {
            "en": "The third form answers the objection directly: vengeance in this world on those who denied a messenger, after the messenger had died. At-Tabari's examples are Sha'ya, whose killers Allah avenged by setting others over them; Yahya (AS), whose killers Bukhtnassar was set upon; and 'Isa (AS), avenged on those who sought to kill him through the Romans. He supports this with as-Suddi: the prophets and believers were killed in this world and were still helped, because the community that did it did not pass away before Allah raised a people to avenge them.",
            "bn": "তৃতীয় রূপটি আপত্তির সরাসরি জবাব: রসূলের মৃত্যুর পর দুনিয়াতেই তাঁর অস্বীকারকারীদের থেকে প্রতিশোধ। তাবারীর উদাহরণ শা'ইয়া, যাঁর হত্যাকারীদের উপর আল্লাহ অন্যদের চাপিয়ে দিয়ে প্রতিশোধ নেন। ইয়াহইয়া (আঃ), যাঁর হত্যাকারীদের উপর বুখতনাসরকে চাপিয়ে দেওয়া হয়। আর ঈসা (আঃ), যাঁকে হত্যা করতে চাওয়া লোকদের থেকে রোমানদের দিয়ে প্রতিশোধ নেওয়া হয়। এর সমর্থনে তিনি আনেন সুদ্দীর কথা: নবী আর মু'মিনেরা দুনিয়াতে নিহত হয়েছেন, তবু তাঁরা সাহায্যপ্রাপ্ত। কারণ যে জাতি এমন করেছে, তারা বিদায় নেওয়ার আগেই আল্লাহ এমন লোক পাঠিয়েছেন যারা নিহতদের হয়ে প্রতিশোধ নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Proof, Dominance, or Vengeance",
          "bn": "দলিল, প্রাধান্য, নাকি প্রতিশোধ"
        },
        "p": [
          {
            "en": "The other commentators name the same forms with different weight. Al-Baghawi reports Ibn 'Abbas (RA): the help is by dominance and subduing. Ad-Dahhak: by the proof. A third view: by vengeance on the enemies, in this world and the next. Then al-Baghawi says all of that has happened to the prophets and believers. They are helped by proof against whoever opposed them; Allah has helped them by subduing their adversaries and destroying their enemies; and He helped them after they were killed by avenging them. So they are helped in one of these ways.",
            "bn": "অন্য তাফসীরকারেরা একই রূপগুলোর কথা বলেন, তবে ভিন্ন ভারে। বাগাভী ইবন আব্বাস (রাঃ) থেকে আনেন: সাহায্য মানে প্রাধান্য আর দমন। দাহহাক বলেন: দলিলের মাধ্যমে। তৃতীয় এক মত: শত্রুদের থেকে প্রতিশোধ, দুনিয়াতে ও আখিরাতে। তারপর বাগাভী বলেন, এর সবই নবী ও মু'মিনদের বেলায় ঘটেছে। বিরোধীদের বিরুদ্ধে তাঁরা দলিলে বিজয়ী। আল্লাহ তাঁদের সাহায্য করেছেন প্রতিপক্ষকে দমন করে, শত্রুদের ধ্বংস করে। আর নিহত হওয়ার পর সাহায্য করেছেন তাঁদের হয়ে প্রতিশোধ নিয়ে। তাই এগুলোর কোনো একটি পথে তাঁরা সাহায্যপ্রাপ্ত।"
          },
          {
            "en": "Al-Qurtubi, on the general reading, names two forms. In the view of Abu al-'Aliya, their help is the raising of their proofs and making them succeed. It is also said: by vengeance on their enemies. He then quotes as-Suddi in words close to at-Tabari's: no people ever killed a prophet, or believers calling to the truth, without Allah sending someone to avenge them, so they became helped in this world even though they were killed. As-Sa'di is the briefest: in this world, by proof, by clear evidence and by victory.",
            "bn": "কুরতুবী সাধারণ অর্থের ব্যাখ্যায় দুটি রূপের কথা বলেন। আবুল আলিয়ার মতে তাঁদের সাহায্য মানে তাঁদের দলিলকে উঁচু করা আর সফল করা। আবার বলা হয়: শত্রুদের থেকে প্রতিশোধ নেওয়া। তারপর তিনি সুদ্দীর কথা আনেন, তাবারীর বর্ণনার কাছাকাছি শব্দে: কোনো জাতি কখনো কোনো নবীকে বা হকের দিকে ডাকা মু'মিনদের হত্যা করলে আল্লাহ তাদের হয়ে প্রতিশোধ নেওয়ার কাউকে পাঠিয়েছেন। ফলে নিহত হয়েও তাঁরা দুনিয়াতে সাহায্যপ্রাপ্ত। সা'দীর কথা সবচেয়ে সংক্ষিপ্ত: দুনিয়াতে সাহায্য দলিলে, স্পষ্ট প্রমাণে আর বিজয়ে।"
          },
          {
            "en": "Ibn Kathir's summary of at-Tabari puts the vengeance answer most widely: help means taking their side against those who harmed them, whether in their presence, in their absence, or after their death. Ma'arif al-Qur'an, following that account, says this meaning applies to all prophets and believers without exception. The commentators differ, then, mostly in emphasis. Al-Baghawi and al-Qurtubi let proof stand beside force; at-Tabari lays out the historical forms; Ibn Kathir, as the next section shows, dwells on the long outcome.",
            "bn": "ইবন কাসীর তাবারীর যে সারকথা দেন, তাতে প্রতিশোধের জবাবটি সবচেয়ে বিস্তৃত: সাহায্য মানে যারা তাঁদের কষ্ট দিয়েছে তাদের বিরুদ্ধে তাঁদের পক্ষ নেওয়া, তাঁদের উপস্থিতিতে হোক, অনুপস্থিতিতে হোক, কিংবা মৃত্যুর পরে। মাআরিফুল কুরআন এ বিবরণ অনুসরণ করে বলে, এ অর্থ ব্যতিক্রম ছাড়াই সব নবী ও মু'মিনের বেলায় খাটে। তাফসীরকারদের পার্থক্য তাই মূলত জোরের জায়গায়। বাগাভী আর কুরতুবী শক্তির পাশাপাশি দলিলকেও জায়গা দেন। তাবারী সাজিয়ে দেন ইতিহাসের রূপগুলো। আর ইবন কাসীর, পরের অংশে দেখা যাবে, থামেন দীর্ঘ পরিণতির উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Allah's Way, Old and New",
          "bn": "আল্লাহর রীতি, পুরোনো ও নতুন"
        },
        "p": [
          {
            "en": "Ibn Kathir calls this help a sunnah of Allah in His creation, in ancient times and recent: He helps His believing servants in this world and gives them comfort against those who harmed them. That is why, he says, Allah destroyed the people of Nuh, 'Ad and Thamud, the people of ar-Rass, the people of Lut and the people of Madyan, and those like them who denied the messengers. He saved the believers among them without losing one, and punished the disbelievers without one escaping. He then quotes as-Suddi's version of the vengeance saying.",
            "bn": "ইবন কাসীর এ সাহায্যকে বলেন সৃষ্টির মধ্যে আল্লাহর এক সুন্নাত, পুরোনো কালেও, নতুন কালেও। তিনি দুনিয়াতে তাঁর মু'মিন বান্দাদের সাহায্য করেন, আর যারা তাদের কষ্ট দিয়েছে তাদের ব্যাপারে তাদের চোখ জুড়িয়ে দেন। ইবন কাসীর বলেন, এ কারণেই আল্লাহ ধ্বংস করেছেন নূহের জাতি, আদ ও সামূদ, আসহাবুর রাস, লূতের জাতি আর মাদইয়ানবাসীকে, আর রসূলদের অস্বীকারকারী তাদের মতো অন্যদের। তাদের মধ্য থেকে মু'মিনদের তিনি বাঁচিয়েছেন, একজনকেও হারাননি। কাফিরদের শাস্তি দিয়েছেন, একজনও ফসকে যায়নি। এরপর তিনি প্রতিশোধ বিষয়ে সুদ্দীর কথাটির নিজের বর্ণনা আনেন।"
          },
          {
            "en": "Then Ibn Kathir traces the promise in the life of the Prophet ﷺ. Allah made his word the highest, commanded him to emigrate to Madinah and gave him helpers there, granted him victory at Badr, and soon after opened Makkah to him, then Yemen, until the whole Arabian Peninsula came under him and people entered Allah's religion in crowds. Ma'arif al-Qur'an adds that those rounded up at the conquest of Makkah were set free by the Prophet ﷺ. After his death, his Companions carried the message east and west.",
            "bn": "এরপর ইবন কাসীর ওয়াদাটির পূরণ দেখান নবী ﷺ-এর জীবনে। আল্লাহ তাঁর কথাকে সবার উপরে রাখেন। তাঁকে মদীনায় হিজরতের হুকুম দেন, সেখানে দেন সাহায্যকারী আর সঙ্গী। বদরে তাঁকে বিজয় দেন। অল্প দিনের মধ্যে খুলে দেন মক্কা, তারপর ইয়ামান। শেষে গোটা আরব উপদ্বীপ তাঁর অধীনে আসে, আর মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করে। মাআরিফুল কুরআন যোগ করে, মক্কা বিজয়ের সময় যাদের ঘিরে আনা হয়েছিল, নবী ﷺ তাদের মুক্ত করে দেন। তাঁর ইন্তিকালের পর সাহাবিরা এ দাওয়াত পৌঁছে দেন পূর্বে ও পশ্চিমে।"
          },
          {
            "en": "Ibn Kathir closes the account with a line about time: this religion will remain standing, helped and manifest, until the Hour. Along the way he cites two narrations about Allah taking the side of His friends. They are general reports, not about this verse's occasion, and the first is long; since this series quotes a hadith only whole and from a page it has checked, neither is quoted here. No fetched commentary gives a sound hadith tied to the revelation of this verse.",
            "bn": "ইবন কাসীর বিবরণটি শেষ করেন সময়ের দিকে তাকিয়ে: এ দ্বীন কিয়ামত পর্যন্ত দাঁড়িয়ে থাকবে, সাহায্যপ্রাপ্ত ও প্রকাশ্য হয়ে। পথে তিনি দুটি বর্ণনা আনেন, যার বিষয় আল্লাহ তাঁর বন্ধুদের পক্ষ নেওয়া। এগুলো সাধারণ বর্ণনা, এ আয়াত নাজিলের প্রেক্ষাপট নিয়ে নয়, আর প্রথমটি বেশ দীর্ঘ। এ ধারাবাহিকে হাদীস উদ্ধৃত হয় কেবল পুরোটা, আর যাচাই করা পাতা থেকে। তাই এখানে কোনোটিই উদ্ধৃত হলো না। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াত নাজিলের সঙ্গে জোড়া কোনো সহীহ হাদীস দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Ashhad Are",
          "bn": "আশহাদ কারা"
        },
        "p": [
          {
            "en": "Wa-yawma yaqumu al-ashhad: and on the Day the witnesses stand. Al-Qurtubi says this means the Day of Resurrection, and then sets out who the witnesses are. Zayd ibn Aslam counts four: the angels, the prophets, the believers, and the bodies. Mujahid and as-Suddi say the witnesses are the angels, who testify for the prophets that they conveyed the message and against the nations that they denied it. Qatada says the angels and the prophets. Al-Qurtubi lists these views side by side and does not choose between them.",
            "bn": "ওয়া ইয়াওমা ইয়াকূমুল আশহাদ: আর যেদিন সাক্ষীরা দাঁড়াবে। কুরতুবী বলেন, এর মানে কিয়ামতের দিন। তারপর তিনি জানান সাক্ষী কারা। যায়দ ইবন আসলাম গোনেন চারটি দল: ফেরেশতা, নবী, মু'মিন আর দেহ। মুজাহিদ ও সুদ্দী বলেন, সাক্ষী হলেন ফেরেশতারা। তাঁরা নবীদের পক্ষে সাক্ষ্য দেবেন যে তাঁরা বার্তা পৌঁছে দিয়েছেন, আর জাতিগুলোর বিপক্ষে সাক্ষ্য দেবেন যে তারা অস্বীকার করেছে। কাতাদা বলেন, ফেরেশতা ও নবীরা। কুরতুবী মতগুলো পাশাপাশি রেখে দেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "The others each give one answer. Ibn Kathir cites only Mujahid: the witnesses are the angels. Al-Baghawi names the recording angels, al-hafaza, who stand to testify for the messengers that they conveyed and against the disbelievers that they denied. The Muyassar names three: on that Day the angels, the prophets and the believers bear witness against the nations that denied their messengers, testifying that the messengers delivered their Lord's messages and that the nations called them liars. So the fetched sources range from one group to four.",
            "bn": "অন্যরা প্রত্যেকে একটি করে জবাব দেন। ইবন কাসীর শুধু মুজাহিদের কথা আনেন: সাক্ষী হলেন ফেরেশতারা। বাগাভী নাম নেন আমল সংরক্ষণকারী ফেরেশতাদের, যাঁদের বলা হয় হাফাযা। তাঁরা দাঁড়াবেন রসূলদের পক্ষে সাক্ষ্য দিতে যে তাঁরা পৌঁছে দিয়েছেন, আর কাফিরদের বিপক্ষে যে তারা অস্বীকার করেছে। মুয়াসসার নাম নেয় তিনটি দলের: সেদিন ফেরেশতা, নবী আর মু'মিনেরা রসূল অস্বীকারকারী জাতিগুলোর বিরুদ্ধে সাক্ষ্য দেবেন। তাঁরা বলবেন, রসূলেরা রবের বার্তা পৌঁছে দিয়েছিলেন আর জাতিগুলো তাঁদের মিথ্যুক বলেছিল। দেখা তাফসীরগুলোতে তাই সাক্ষীর তালিকা একটি দল থেকে চারটি দল পর্যন্ত।"
          },
          {
            "en": "Al-Qurtubi also records the grammar of the word. Ashhad is said to be the plural of shahīd (شهيد), as ashraf is of sharif; az-Zajjaj makes it the plural of shāhid (شاهد), on the pattern of sahib and ashab. An-Nahhas objects that fa'il is not regularly gathered on af'al and is only accepted where heard. Al-Akhfash and al-Farra' allowed taqumu, with the feminine prefix, for the group. As for what the standing brings, Ibn Kathir says the help on that Day is greater, larger and more majestic.",
            "bn": "কুরতুবী শব্দটির ব্যাকরণও লিখে রাখেন। বলা হয়, আশহাদ হলো শাহীদ (شهيد) শব্দের বহুবচন, যেমন শারীফের বহুবচন আশরাফ। যাজ্জাজ একে শাহিদ (شاهد) শব্দের বহুবচন ধরেন, সাহিব থেকে আসহাবের ধাঁচে। নাহহাস আপত্তি করেন: ফা'ইল ওজনের শব্দ নিয়মিতভাবে আফ'আল ওজনে বহুবচন হয় না, যা শোনা গেছে কেবল তা-ই মেনে নেওয়া হয়। আখফাশ ও ফাররা দলবাচক স্ত্রীলিঙ্গ ধরে ইয়াকূমু-র বদলে তাকূমু পড়াও বৈধ বলেছেন। আর সেই দাঁড়ানোর দিনে কী মিলবে, সে বিষয়ে ইবন কাসীর বলেন, সেদিনের সাহায্য হবে আরও বড়, আরও ব্যাপক, আরও মহিমাময়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise, Not a Warrant",
          "bn": "ওয়াদা, অনুমতিপত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse, and the commentaries on it, describe what the text describes: messengers opposed, some of them killed, and peoples who denied them and were seized or avenged upon by Allah's decree. It licenses nothing against any living person or community. The vengeance the commentators speak of is Allah's act, by the means He chose; none of them turns it into a mandate for a reader. Whoever takes this verse as a reason to treat any people today as enemies has read into it something none of these sources says.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আর তার তাফসীর যা বর্ণনা করে, তা-ই বর্ণনা করে: রসূলদের বিরোধিতা হয়েছে, তাঁদের কেউ কেউ নিহত হয়েছেন, আর যে জাতিগুলো তাঁদের অস্বীকার করেছিল, আল্লাহর ফয়সালায় তারা পাকড়াও হয়েছে কিংবা তাদের থেকে প্রতিশোধ নেওয়া হয়েছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। তাফসীরকারেরা যে প্রতিশোধের কথা বলেন, তা আল্লাহর কাজ, তাঁরই বেছে নেওয়া উপায়ে। তাঁদের কেউ একে পাঠকের জন্য হুকুম বানাননি। কেউ যদি এ আয়াত দিয়ে আজকের কোনো জাতিকে শত্রু ঠাওরায়, সে এমন কথা পড়ল যা এই উৎসগুলোর কোনোটিই বলে না।"
          },
          {
            "en": "As-Sa'di's gloss also keeps the second half of the promise in view. In the Hereafter, he says, the help is a judgment: for the messengers and their followers, reward; for those who fought them, severe punishment. On his reading, then, the verdict belongs to that Day and to Allah. The man of Fir'awn's family had already shown the posture, handing his affair to Allah in 40:44. The promise does not ask the believer to settle the account. It asks him to keep faith while Allah settles it, now or on the Day the witnesses stand.",
            "bn": "সা'দীর ব্যাখ্যা ওয়াদার দ্বিতীয় অর্ধেকটাও চোখের সামনে রাখে। তিনি বলেন, আখিরাতে সাহায্য মানে ফয়সালা: রসূল আর তাঁদের অনুসারীদের জন্য সওয়াব, আর যারা তাঁদের বিরুদ্ধে লড়েছে তাদের জন্য কঠিন শাস্তি। তাঁর ব্যাখ্যা অনুযায়ী তাই রায় সেই দিনের, আর আল্লাহর। ফেরাউনের পরিবারের সেই মানুষটি এ ভঙ্গি আগেই দেখিয়েছিলেন, ৪০:৪৪ আয়াতে নিজের বিষয় আল্লাহর হাতে সঁপে দিয়ে। এ ওয়াদা মু'মিনকে হিসাব মেটাতে বলে না। বলে, আল্লাহ যখন হিসাব মেটাবেন, এখন হোক বা সাক্ষীদের দাঁড়ানোর দিনে, ততক্ষণ ঈমান ধরে রাখতে।"
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
  },
  "40:64": {
    "sections": [
      {
        "h": {
          "en": "The Opening Comes Back",
          "bn": "একই সূচনা আবার"
        },
        "p": [
          {
            "en": "Allahu lladhi ja'ala lakum: it is Allah who made for you. The words are not new here. 40:61 opens the same way and speaks of the night made for rest and the day made for seeing. Between them stands 40:62, which names who stands behind those gifts: your Lord, the Creator of all things, with no god but Him, and then asks how you are being turned away. Our verse returns to the same opening and lays out more of the evidence.",
            "bn": "আল্লাহুল্লাযী জাআলা লাকুম: আল্লাহ, যিনি তোমাদের জন্য বানিয়েছেন। এই কথাগুলো এ অংশে প্রথম আসেনি। এর আগে ৪০:৬১ ঠিক এভাবেই শুরু হয়েছে, সেখানে বিশ্রামের জন্য রাত আর দেখার জন্য দিনের কথা। মাঝখানে ৪০:৬২ সেই দানগুলোর পেছনের সত্তার পরিচয় দেয়। তিনি তোমাদের রব, সব কিছুর স্রষ্টা, তিনি ছাড়া কোনো ইলাহ নেই। তারপর প্রশ্ন করে, তবু তোমাদের কীভাবে সত্য থেকে ফিরিয়ে নেওয়া হচ্ছে? আমাদের আয়াত আবার সেই সূচনায় ফিরে আসে এবং আরও প্রমাণ সামনে রাখে।"
          },
          {
            "en": "Al-Qurtubi reads the return as deliberate. The verse, he says, adds to the emphasis of the making-known and of the proof: it makes Allah known and argues for Him again, through things no listener can miss. Just before this run of verses stands 40:60, already treated, where your Lord says call on Me and I will answer. What follows does not repeat the command. It shows who is being called, by pointing at the floor and ceiling of the listener's world.",
            "bn": "কুরতুবীর মতে এই ফিরে আসা ইচ্ছাকৃত। তিনি বলেন, আয়াতটি পরিচয় করানো আর প্রমাণ দেওয়ার জোর আরও বাড়িয়ে দেয়। আল্লাহকে আবার চেনানো হচ্ছে, আবার তাঁর পক্ষে যুক্তি দেওয়া হচ্ছে, এমন সব জিনিস দিয়ে যা কোনো শ্রোতার চোখ এড়ায় না। এই ধারার ঠিক আগে আছে ৪০:৬০, যার আলোচনা আগেই হয়েছে: তোমাদের রব বলেন, আমাকে ডাকো, আমি সাড়া দেব। পরের আয়াতগুলো সেই আদেশ আর দোহরায় না। বরং দেখিয়ে দেয়, যাঁকে ডাকতে বলা হচ্ছে তিনি কে। দেখায় শ্রোতার নিজের দুনিয়ার মেঝে আর ছাদের দিকে আঙুল তুলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ground That Stays Put",
          "bn": "যে মাটি নড়ে না"
        },
        "p": [
          {
            "en": "Al-arda qararan: the earth as a qarar, from the root q-r-r, to settle and stay. At-Tabari glosses it as a place you settle on and dwell above, the earth on whose back you live. Ibn Kathir makes it a mustaqarr, a place of settling, then adds images: a spread carpet and a cradle on which you live, move about and walk across its shoulders. He also says Allah anchored it with the mountains so that it would not sway with you.",
            "bn": "আল-আরদা কারারা: যমীনকে করেছেন কারার। শব্দটি ক-র-র ধাতু থেকে, যার অর্থ থিতু হওয়া, টিকে থাকা। তাবারীর ব্যাখ্যায় এ এমন জায়গা যার উপর তোমরা স্থির হয়ে থাকো আর বাস করো, যে মাটির পিঠে তোমাদের বসতি। ইবন কাসীর একে বলেন মুস্তাকার, থিতু হওয়ার স্থান। তারপর কয়েকটি ছবি যোগ করেন: বিছানো গালিচা, দোলনার মতো শয্যা, যার উপর তোমরা জীবন কাটাও, চলাফেরা করো, তার কাঁধে কাঁধে হাঁটো। তিনি আরও বলেন, আল্লাহ পাহাড় দিয়ে একে গেঁথে দিয়েছেন, যাতে তা তোমাদের নিয়ে দুলে না ওঠে।"
          },
          {
            "en": "As-Sa'di's gloss leans on stillness and use. Qarar, he says, means settled and at rest, made ready for all your needs, so that you can till it, plant it, build on it, travel across it and stay in it. The Muyassar says the same in fewer words: made for you to settle on, with living on it made easy. Al-Baghawi gives the shortest gloss of all, a single word, firash, a spread or bed laid out beneath you.",
            "bn": "সা'দীর ব্যাখ্যায় জোর পড়েছে স্থিরতা আর কাজে লাগার উপর। তাঁর মতে কারার মানে থেমে থাকা, শান্ত, তোমাদের সব প্রয়োজনের জন্য তৈরি করে রাখা। তাই তোমরা তাতে চাষ করতে পারো, গাছ লাগাতে পারো, ঘর তুলতে পারো, সফর করতে পারো, স্থায়ী হয়ে থাকতে পারো। মুয়াসসার অল্প কথায় একই কথা বলে: তোমাদের থিতু হওয়ার জন্য বানানো, আর তাতে বসবাস সহজ করে দেওয়া। বাগাভীর ব্যাখ্যা সবচেয়ে ছোট, একটিমাত্র শব্দ: ফিরাশ, অর্থাৎ পায়ের নিচে বিছিয়ে দেওয়া শয্যা।"
          },
          {
            "en": "Al-Qurtubi adds a dimension the others leave unstated. The earth is a place of settling for you, he writes, in your lifetime and after death. The ground that carries the living also receives the dead, and the verse names it among the gifts without dividing the two. These are the commentators' readings of a word, reported as theirs and not offered here as statements of natural science.",
            "bn": "কুরতুবী এমন একটি দিক যোগ করেন যা অন্যরা খুলে বলেননি। তিনি লেখেন, যমীন তোমাদের থিতু হওয়ার জায়গা, জীবদ্দশায়ও, মৃত্যুর পরেও। যে মাটি জীবিতদের বহন করে, মৃতদেরও সে-ই গ্রহণ করে। আয়াত এই দুইকে আলাদা না করেই যমীনকে নিয়ামতের তালিকায় রেখেছে। এগুলো একটি শব্দের ব্যাখ্যায় তাফসীরকারদের নিজস্ব বক্তব্য, তাঁদের নামেই বলা হলো। এ লেখা এগুলোকে প্রকৃতিবিজ্ঞানের দাবি হিসেবে পেশ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ceiling Kept Safe",
          "bn": "সুরক্ষিত এক ছাদ"
        },
        "p": [
          {
            "en": "Wa-s-sama'a bina'an: and the sky as a structure raised overhead. Ibn Kathir glosses it as a roof for the world, guarded. Al-Baghawi gives a picture: a roof like a dome. At-Tabari reads the noun through the verb behind it. Allah built the sky, he says, and raised it above you without pillars you can see, for your benefit and for the upkeep of your worldly life until you reach your appointed terms. On his reading the roof stays up as long as those beneath it must live.",
            "bn": "ওয়াস সামাআ বিনাআ: আর আকাশকে করেছেন মাথার উপরে তোলা এক নির্মাণ। ইবন কাসীরের ব্যাখ্যায় এ গোটা জগতের জন্য সুরক্ষিত ছাদ। বাগাভী একটা ছবি দেন: গম্বুজের মতো ছাদ। তাবারী শব্দটিকে বোঝেন তার পেছনের ক্রিয়া দিয়ে। তিনি বলেন, আল্লাহ আকাশ নির্মাণ করেছেন এবং তোমাদের উপরে তুলে ধরেছেন, এমন কোনো খুঁটি ছাড়া যা তোমরা দেখতে পাও। তা তোমাদের কল্যাণের জন্য, তোমাদের দুনিয়ার জীবন টিকিয়ে রাখার জন্য, যতদিন না তোমরা নির্ধারিত সময়ে পৌঁছাও। তাঁর পাঠে ছাদটি ততদিন দাঁড়িয়ে, যতদিন তার নিচের মানুষদের বাঁচার মেয়াদ।"
          },
          {
            "en": "As-Sa'di and the Muyassar both call the sky a roof for the earth, and both add what hangs from that roof. As-Sa'di says Allah placed in it lights and signs that you benefit from, by which people find their way in the darkness of land and sea. The Muyassar speaks of guiding signs spread across it. For them the sky is not only a cover but something to read, the place a traveller looks up at when the road below has gone dark.",
            "bn": "সা'দী আর মুয়াসসার দুজনেই আকাশকে বলেন যমীনের ছাদ, আর দুজনেই জানান সেই ছাদে কী ঝুলিয়ে রাখা আছে। সা'দী বলেন, আল্লাহ তাতে রেখেছেন আলো আর নিশানা, যা তোমাদের কাজে আসে। স্থল আর সাগরের অন্ধকারে মানুষ সেগুলো দেখে পথ খুঁজে পায়। মুয়াসসার বলে, আকাশজুড়ে ছড়িয়ে দেওয়া হয়েছে পথ দেখানো নিশানা। তাঁদের চোখে আকাশ শুধু আচ্ছাদন নয়, পড়ার মতো এক পাতাও। নিচের রাস্তা অন্ধকার হয়ে গেলে মুসাফির উপরের দিকেই তাকায়।"
          },
          {
            "en": "Ibn Kathir sets the verse beside 2:22, which also says alladhi ja'ala lakumu l-arda and wa-s-sama'a bina'an, though there the earth is called firash, a spread. He quotes it together with the command just before it, to worship your Lord who created you. The pairing is his point: the Maker who laid the floor and raised the roof is the Lord to be worshipped, and 2:22 ends by forbidding anyone to set up rivals to Him while they know.",
            "bn": "ইবন কাসীর এ আয়াতকে পাশাপাশি রাখেন ২:২২-এর সঙ্গে। সেখানেও আছে আল্লাযী জাআলা লাকুমুল আরদা আর ওয়াস সামাআ বিনাআ, তবে সেখানে যমীনকে বলা হয়েছে ফিরাশ, বিছানা। তিনি আয়াতটি উদ্ধৃত করেন তার ঠিক আগের আদেশসহ: তোমাদের রবের ইবাদাত করো, যিনি তোমাদের সৃষ্টি করেছেন। এই জোড়া মেলানোতেই তাঁর মূল কথা। যিনি মেঝে বিছিয়েছেন আর ছাদ তুলেছেন, ইবাদাত কেবল তাঁরই প্রাপ্য। আর ২:২২ শেষ হয় এই নিষেধে: জেনে-বুঝে কেউ যেন আল্লাহর সমকক্ষ দাঁড় না করায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Formed, Then Made Fair",
          "bn": "আকৃতি দিলেন, সুন্দর করলেন"
        },
        "p": [
          {
            "en": "Wa-sawwarakum fa-ahsana suwarakum: and He formed you and made your forms good. Two verbs follow one another: first the giving of a form at all, then the making of that form beautiful. At-Tabari keeps his gloss plain: He created you and made your creation good. Al-Baghawi reports the same wording from Muqatil. Ibn Kathir goes further. He created you, he says, in the best of shapes, and granted you the most complete of forms, in the finest stature.",
            "bn": "ওয়া সাওয়ারাকুম ফাআহসানা সুওয়ারাকুম: তিনি তোমাদের আকৃতি দিয়েছেন, তারপর তোমাদের আকৃতিকে সুন্দর করেছেন। দুটি ক্রিয়া পরপর এসেছে। প্রথমে আকৃতি দেওয়া, তারপর সেই আকৃতিকে সুন্দর করা। তাবারীর ব্যাখ্যা সাদামাটা: তিনি তোমাদের সৃষ্টি করেছেন এবং তোমাদের সৃষ্টিকে সুন্দর করেছেন। বাগাভী মুকাতিল থেকে হুবহু একই কথা বর্ণনা করেন। ইবন কাসীর আরেকটু এগোন। তাঁর ভাষায়, তিনি তোমাদের গড়েছেন সবচেয়ে সুন্দর গড়নে, দিয়েছেন সবচেয়ে পূর্ণাঙ্গ আকৃতি, সর্বোত্তম অবয়বে।"
          },
          {
            "en": "As-Sa'di ties the clause to another verse. Among all kinds of living creatures, he writes, none has a better form than the children of Adam, as Allah said: laqad khalaqna l-insana fi ahsani taqwim, We have certainly created man in the best of stature (95:4). The Muyassar, without naming that verse, closes its gloss with the same words: He created you in the most complete shape and the best taqwim. Ibn Kathir's gloss, quoted above, ends with that phrase as well.",
            "bn": "সা'দী এই অংশকে আরেকটি আয়াতের সঙ্গে জুড়ে দেন। তিনি লেখেন, প্রাণীজগতের কোনো শ্রেণিতেই আদমসন্তানের চেয়ে সুন্দর আকৃতি নেই। যেমন আল্লাহ বলেছেন: লাকাদ খালাকনাল ইনসানা ফী আহসানি তাকওয়ীম, নিশ্চয়ই আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে (৯৫:৪)। মুয়াসসার সে আয়াতের নাম নেয় না, তবে তার ব্যাখ্যাও শেষ হয় একই শব্দে: তিনি তোমাদের সৃষ্টি করেছেন সবচেয়ে পূর্ণাঙ্গ গড়নে, সর্বোত্তম তাকওয়ীমে। ইবন কাসীরের যে ব্যাখ্যা উপরে এসেছে, তার শেষেও আছে এই কথাটি।"
          },
          {
            "en": "Al-Qurtubi records a variant reading of the noun. Abu Razin and al-Ashhab al-'Uqayli read siwarakum, with an i in place of the u, and he cites al-Jawhari that siwar is a dialect form of suwar, the plural of sura, form. He supports it with a line of poetry describing young women whose eyes resemble those of the wild cattle of al-Khalsa' and whose forms are lovelier than theirs. The meaning does not change; the detail shows how closely the word was weighed.",
            "bn": "কুরতুবী শব্দটির একটি ভিন্ন পাঠ উল্লেখ করেন। আবু রাযীন আর আল-আশহাব আল-উকাইলী পড়েছেন সিওয়ারাকুম, স্বরধ্বনি উ-এর বদলে ই দিয়ে। তিনি জাওহারীর বরাতে বলেন, সুরা অর্থাৎ আকৃতি শব্দের বহুবচন সুওয়ার, আর সিওয়ার তারই একটি আঞ্চলিক রূপ। সমর্থনে তিনি একটি কবিতার চরণ আনেন। সেখানে তরুণীদের বর্ণনা: তাদের চোখ খালসার বুনো গরুর চোখের মতো, আর তাদের আকৃতি সেই পশুদের চেয়েও সুন্দর। অর্থ এতে বদলায় না। তবে বোঝা যায়, শব্দটিকে কত যত্ন নিয়ে ওজন করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Upright, With Hands Free",
          "bn": "সোজা দেহ, মুক্ত দুই হাত"
        },
        "p": [
          {
            "en": "What makes the form the best? Al-Baghawi cites Ibn 'Abbas: He created the son of Adam standing upright and balanced, eating and taking things with his hand, while every other creature takes with its mouth. Ma'arif al-Qur'an develops the thought. It speaks of the most distinct and best-balanced form among animals, of reason, and of hands and feet that let a person gather materials and make what he needs. It adds that a human eats with his hands, where animals graze and drink directly with their mouths.",
            "bn": "আকৃতিটি সর্বোত্তম কেন? বাগাভী ইবন আব্বাস (রাঃ)-এর বক্তব্য আনেন: আল্লাহ আদমসন্তানকে সৃষ্টি করেছেন সোজা হয়ে দাঁড়ানো, সুষম গড়নে। সে খায়, জিনিস ধরে নিজের হাতে। আর আদমসন্তান ছাড়া বাকি সবাই মুখ দিয়ে ধরে। মাআরিফুল কুরআন এই ভাবনাকে আরও বিস্তৃত করে। সেখানে আছে প্রাণীদের মধ্যে সবচেয়ে স্বতন্ত্র আর সবচেয়ে সুষম আকৃতির কথা, বুদ্ধির কথা, আর এমন হাত-পায়ের কথা যা দিয়ে মানুষ উপকরণ জোগাড় করে নিজের প্রয়োজনের জিনিস বানায়। সেখানে এ-ও আছে যে মানুষ খায় হাত দিয়ে, অথচ পশুরা চরে খায়, পান করে সরাসরি মুখ লাগিয়ে।"
          },
          {
            "en": "As-Sa'di turns the claim into an exercise. If you want to know the beauty of the human being and the perfection of Allah's wisdom in him, he says, look at him limb by limb. Can you find a single limb that would suit him or serve him if it were set anywhere other than where it is? Then look, he continues, at the inclination that hearts have towards one another. Do you find that in anything other than human beings?",
            "bn": "সা'দী দাবিটিকে একটি অনুশীলনে পরিণত করেন। তিনি বলেন, মানুষের সৌন্দর্য আর তার মধ্যে আল্লাহর হিকমতের পূর্ণতা যদি জানতে চান, তবে তাকে দেখুন এক অঙ্গ এক অঙ্গ করে। এমন একটি অঙ্গও কি খুঁজে পাবেন, যা নিজের জায়গা ছেড়ে অন্য কোথাও বসালে মানাত বা কাজে আসত? তারপর তিনি বলেন, এবার দেখুন মানুষের অন্তরগুলো একে অপরের দিকে কেমন ঝুঁকে থাকে। মানুষ ছাড়া আর কোথাও কি এমনটা পান?"
          },
          {
            "en": "He ends with what lies inside the form. Allah singled the human out, as-Sa'di writes, with intellect and faith, love and knowledge, which are the finest traits, fitting for the most beautiful of forms. On this reading the good form is not only a matter of stature. In his words the inward gifts are the traits that fit the outward shape, so the two belong together. The verse itself says only fa-ahsana suwarakum; the details are the commentators' unpacking of those two words.",
            "bn": "শেষে তিনি আসেন আকৃতির ভেতরের কথায়। সা'দী লেখেন, আল্লাহ মানুষকে বিশেষভাবে দিয়েছেন বুদ্ধি আর ঈমান, ভালোবাসা আর মারিফাত। এগুলোই সবচেয়ে উত্তম স্বভাব, সবচেয়ে সুন্দর আকৃতির সঙ্গে যা মানানসই। এই পাঠে সুন্দর আকৃতি মানে শুধু দেহের গড়ন নয়। তাঁর কথায় ভেতরের দানগুলোই বাইরের অবয়বের উপযুক্ত স্বভাব, তাই দুটো একসঙ্গেই মানায়। আয়াত নিজে শুধু বলে ফাআহসানা সুওয়ারাকুম। বাকি খুঁটিনাটি ওই দুটি শব্দের ভাঁজ খুলে তাফসীরকারদের ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Lawful, Pleasant, or Both",
          "bn": "হালাল, সুস্বাদু, নাকি দুটোই"
        },
        "p": [
          {
            "en": "Wa-razaqakum mina t-tayyibat: and He provided for you from the good things. What counts as tayyib? At-Tabari gives two descriptions side by side: He provided you from lawful provision, and from the pleasant things of food and drink. The Muyassar repeats his pairing almost word for word, lawful provision and delicious food and drink. Ibn Kathir's gloss is simpler and names only the category: food and drink in this world.",
            "bn": "ওয়া রাযাকাকুম মিনাত তাইয়্যিবাত: আর তিনি তোমাদের রিজিক দিয়েছেন পবিত্র ও ভালো জিনিস থেকে। তাইয়্যিব বলতে কী বোঝায়? তাবারী পাশাপাশি দুটি বর্ণনা দেন: তিনি তোমাদের রিজিক দিয়েছেন হালাল জীবিকা থেকে, আর সুস্বাদু খাবার ও পানীয় থেকে। মুয়াসসার প্রায় হুবহু তাঁর এই জোড়া কথাই বলে: হালাল রিজিক আর মজাদার খাবার-পানীয়। ইবন কাসীরের ব্যাখ্যা আরও সরল। তিনি কেবল শ্রেণিটির নাম বলেন: দুনিয়ার খাবার আর পানীয়।"
          },
          {
            "en": "As-Sa'di widens it. The phrase, he says, includes every good thing: food, drink, marriage, clothing, what is pleasing to see and to hear, and more, all the good things whose means Allah made easy for His servants. He adds the other side: Allah kept them from the foul things, al-khaba'ith, which are their opposite and harm bodies, hearts and religion. Al-Baghawi, introducing it with the words it is said, reports a different angle: provision other than the provision of animals.",
            "bn": "সা'দী অর্থটিকে আরও প্রশস্ত করেন। তাঁর মতে এর মধ্যে আছে সব ভালো জিনিস: খাবার, পানীয়, বিয়ে, পোশাক, চোখ জুড়ানো দৃশ্য, কান জুড়ানো শব্দ, আরও কত কী। এসব ভালো জিনিসের উপায় আল্লাহ বান্দাদের জন্য সহজ করে দিয়েছেন। তিনি অন্য দিকটাও বলেন: আল্লাহ তাদের দূরে রেখেছেন খাবাইস থেকে, অর্থাৎ নোংরা জিনিস থেকে, যা এসবের বিপরীত এবং দেহ, অন্তর ও দ্বীনের ক্ষতি করে। বাগাভী 'বলা হয়' কথাটি দিয়ে ভিন্ন একটি দিক আনেন: পশুদের রিজিক ছাড়া অন্য রিজিক।"
          },
          {
            "en": "So the fetched commentators read tayyibat in more than one direction: lawful, pleasant, broad enough to cover every good, or set apart from what animals eat. At-Tabari and the Muyassar hold lawful and pleasant together in one gloss, and the article leaves the word as wide as they do. Ma'arif al-Qur'an, on the human form, notes that people make their food taste good, mixing many ingredients and turning one fruit into many dishes. Read beside this verse, that is provision reaching well past bare need.",
            "bn": "তাহলে তাফসীরকারেরা তাইয়্যিবাতকে পড়েছেন কয়েক দিক থেকে। হালাল, সুস্বাদু, সব ভালো জিনিসকে ঘিরে রাখার মতো প্রশস্ত, কিংবা পশুর খাবার থেকে আলাদা। তাবারী আর মুয়াসসার হালাল আর সুস্বাদু দুটোকে এক ব্যাখ্যায় একসঙ্গে ধরে রাখেন। এ লেখাও শব্দটিকে ততটাই প্রশস্ত রাখছে। মাআরিফুল কুরআন মানুষের আকৃতির আলোচনায় লক্ষ করে, মানুষ খাবারকে স্বাদু করে খায়। নানা উপকরণ মেশায়, একটি ফল থেকে বানায় নানা পদ। এ আয়াতের পাশে রেখে পড়লে বোঝা যায়, রিজিক নিছক প্রয়োজনের সীমা ছাড়িয়ে অনেক দূর গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Abode, Dweller and Provision",
          "bn": "ঘর, ঘরের মানুষ, রিজিক"
        },
        "p": [
          {
            "en": "Ibn Kathir steps back from the list and names its shape. Allah mentions, he says, that He created the abode, the inhabitants and the provisions, and so He is the Creator and the Provider. The earth and sky are the house, the well-formed human beings are the people living in it, and the good things are what they live on. Then, once all this has been named, the verse says dhalikumu llahu rabbukum: that is Allah, your Lord.",
            "bn": "ইবন কাসীর তালিকা থেকে একটু পিছিয়ে দাঁড়িয়ে তার গড়নটা চিনিয়ে দেন। তিনি বলেন, আল্লাহ জানাচ্ছেন যে তিনি সৃষ্টি করেছেন ঘর, ঘরের বাসিন্দা আর তাদের রিজিক। অতএব তিনিই স্রষ্টা, তিনিই রিজিকদাতা। যমীন আর আকাশ হলো ঘর, সুন্দর আকৃতির মানুষেরা সেই ঘরের বাসিন্দা, আর পবিত্র জিনিসগুলো তাদের জীবিকা। এসবের নাম নেওয়া শেষ হলে আয়াত বলে: যালিকুমুল্লাহু রাব্বুকুম, তিনিই আল্লাহ, তোমাদের রব।"
          },
          {
            "en": "At-Tabari spells out what that sentence argues. He who did these things and gave you these favours, he says, is Allah, to whom alone divinity is fitting, and your Lord, for whom alone lordship is right; not something that neither benefits nor harms, neither creates nor provides. As-Sa'di describes Him as having arranged the affairs and favoured you with these gifts. No fetched tafsir attaches a hadith to this verse, so the article cites none.",
            "bn": "এই বাক্য কী যুক্তি দাঁড় করায়, তাবারী তা খুলে বলেন। তাঁর ভাষায়, যিনি এসব কাজ করেছেন আর তোমাদের এসব নিয়ামত দিয়েছেন, তিনিই আল্লাহ। ইলাহ হওয়া কেবল তাঁকেই সাজে। তিনিই তোমাদের রব, রুবুবিয়্যাত আর কারও জন্য খাটে না। এমন কিছু নয়, যা না উপকার করতে পারে, না ক্ষতি, না সৃষ্টি করতে পারে, না রিজিক দিতে। সা'দী তাঁকে বলেন সেই সত্তা, যিনি সব বিষয়ের ব্যবস্থা করেছেন আর তোমাদের এসব নিয়ামত দিয়েছেন। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এ লেখাও কোনো হাদীস আনছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Exalted, and Abounding in Good",
          "bn": "সুমহান, কল্যাণে ভরপুর"
        },
        "p": [
          {
            "en": "The verse closes with fa-tabaraka llahu rabbu l-'alamin. The fetched glosses of tabaraka run along two lines. Ibn Kathir: He is exalted, sanctified and far above all. As-Sa'di: He is magnified, and His good and His kindness are abundant. The Muyassar holds both together: His good, His favour and His blessing are many, and He is free of whatever does not befit Him. One line stresses His height above everything, the other the overflow of good that comes from Him.",
            "bn": "আয়াত শেষ হয় ফাতাবারাকাল্লাহু রাব্বুল আলামীন দিয়ে। তাবারাকা শব্দের যে ব্যাখ্যাগুলো সামনে আছে, সেগুলো দুই ধারায় চলে। ইবন কাসীর বলেন: তিনি সুউচ্চ, পবিত্র, সব কিছুর ঊর্ধ্বে। সা'দী বলেন: তিনি মহান, তাঁর কল্যাণ আর অনুগ্রহ প্রচুর। মুয়াসসার দুটোকে একসঙ্গে ধরে: তাঁর কল্যাণ, অনুগ্রহ আর বরকত অঢেল, আর যা তাঁর শান নয় তা থেকে তিনি পবিত্র। একটি ধারা জোর দেয় সব কিছুর উপরে তাঁর উচ্চতায়, অন্যটি তাঁর কাছ থেকে উপচে পড়া কল্যাণে।"
          },
          {
            "en": "Rabbu l-'alamin, Lord of the worlds, is glossed as well. At-Tabari reads it as the Owner of all creation, its jinn and its humans and every other kind of creature. As-Sa'di uses the sense of nurture: He raises and tends all the worlds with His favours. The verse began with lakum, for you, and ends with all the worlds. The gifts named for the listener sit inside a care that reaches every creature.",
            "bn": "রাব্বুল আলামীন, অর্থাৎ জগতসমূহের রব, এরও ব্যাখ্যা আছে। তাবারী একে পড়েন সমস্ত সৃষ্টির মালিক হিসেবে: জিন, মানুষ আর বাকি সব শ্রেণির সৃষ্টি। সা'দী নেন লালন-পালনের অর্থ: যিনি তাঁর নিয়ামত দিয়ে সব জগৎকে প্রতিপালন করেন, যত্নে বড় করে তোলেন। আয়াতের শুরু লাকুম দিয়ে, তোমাদের জন্য। আর শেষ সমস্ত জগতে গিয়ে। শ্রোতার জন্য যে দানগুলোর নাম নেওয়া হলো, সেগুলো এমন এক যত্নের ভেতরে আছে যা প্রতিটি সৃষ্টির কাছে পৌঁছে যায়।"
          },
          {
            "en": "A reader can carry this verse through an ordinary day. Notice the floor before standing on it, the ceiling before sleeping under it, your hands as you eat with them, and the meal itself. Ask, with as-Sa'di, whether any limb is out of place. Ask whether what you eat is lawful as well as pleasant. Then say what the verse says, that this is Allah, your Lord, and let the noticing become thanks to the One who gave it.",
            "bn": "একজন পাঠক এ আয়াতকে সঙ্গে নিয়ে একটা সাধারণ দিন কাটাতে পারেন। মেঝেতে পা রাখার আগে মেঝেটা খেয়াল করুন। ঘুমানোর আগে মাথার উপরের ছাদটা। খাওয়ার সময় নিজের হাত দুটো, আর খাবারটাও। সা'দীর মতো নিজেকে জিজ্ঞেস করুন, কোনো অঙ্গ কি বেমানান জায়গায় বসানো? জিজ্ঞেস করুন, যা খাচ্ছি তা কি সুস্বাদু হওয়ার পাশাপাশি হালালও? তারপর আয়াত যা বলে তা-ই বলুন: তিনিই আল্লাহ, আমার রব। আর এই খেয়াল করাটাই দাতার প্রতি শুকরিয়া হয়ে উঠুক।"
          }
        ]
      }
    ]
  },
  "40:67": {
    "sections": [
      {
        "h": {
          "en": "Whom the Submission Is To",
          "bn": "আত্মসমর্পণ কার কাছে"
        },
        "p": [
          {
            "en": "The verse before this one gave the Prophet ﷺ words to say: he has been forbidden to worship those his people call upon besides Allah, now that clear proofs have come to him, and he has been commanded to submit to the Lord of the worlds (40:66). Then comes Huwa alladhi khalaqakum: it is He who created you. At-Tabari reads the two as one speech. The Prophet ﷺ is told to alert the idolaters of his people to Allah's proofs of His oneness, and to say: I have been commanded to submit to the Lord of the worlds whose description is this.",
            "bn": "আগের আয়াতে নবী ﷺ-কে কয়েকটি কথা বলতে শেখানো হয়েছে। তাঁর রবের কাছ থেকে সুস্পষ্ট প্রমাণ আসার পর আল্লাহকে বাদ দিয়ে তাঁর কওম যাদের ডাকে, তাদের ইবাদত করতে তাঁকে নিষেধ করা হয়েছে। আর আদেশ দেওয়া হয়েছে বিশ্বজগতের প্রতিপালকের কাছে আত্মসমর্পণ করতে (৪০:৬৬)। তারপরই আসে হুয়াল্লাযী খালাকাকুম: তিনিই তোমাদের সৃষ্টি করেছেন। তাবারী দুটি আয়াতকে একই বক্তব্য হিসেবে পড়েন। তাঁর মতে নবী ﷺ-কে বলা হচ্ছে, নিজের কওমের মুশরিকদের সামনে আল্লাহর একত্বের প্রমাণগুলো তুলে ধরুন। বলুন, আমাকে আদেশ করা হয়েছে সেই রব্বুল আলামীনের কাছে আত্মসমর্পণ করতে, যাঁর পরিচয় এই।"
          },
          {
            "en": "So the list of stages that follows is not offered as a lesson in biology. It is the description of the One to whom submission is owed. As-Sa'di puts the logic in a single line: Allah settles this tawhid by showing that He is your creator and the One who moves your creation through its stages, so just as He created you alone, worship Him alone. Ibn Kathir's abridged English opens the passage the same way: Allah explains that no one apart from Him is deserving of worship, and then gives the stages as the evidence.",
            "bn": "কাজেই এরপর ধাপে ধাপে যে তালিকা আসছে, তা জীববিদ্যার পাঠ হিসেবে আসেনি। এ হলো সেই সত্তার পরিচয়, আত্মসমর্পণ যাঁর প্রাপ্য। সা'দী যুক্তিটা এক বাক্যে বলে দেন। আল্লাহ এই তাওহীদকে প্রতিষ্ঠা করছেন এ কথা দেখিয়ে যে তিনিই তোমাদের স্রষ্টা, তিনিই তোমাদের সৃষ্টিকে এক ধাপ থেকে আরেক ধাপে নিয়ে যান। তাই যেমন তিনি একাই তোমাদের সৃষ্টি করেছেন, তেমনি একমাত্র তাঁরই ইবাদত করো। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও আলোচনা শুরু করে একইভাবে: আল্লাহ জানিয়ে দিচ্ছেন, তিনি ছাড়া আর কেউ ইবাদতের যোগ্য নয়। তারপর প্রমাণ হিসেবে তুলে ধরেন এই ধাপগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Dust, a Drop, a Clinging Thing",
          "bn": "মাটি, ফোঁটা, ঝুলে থাকা টুকরো"
        },
        "p": [
          {
            "en": "Min turab: from dust. Three of the fetched commentators say whose creation this first stage describes. At-Tabari: He created your father Adam from dust. The Muyassar: He is Allah who created your father Adam from dust. As-Sa'di: that was by His creating your origin and your father, Adam (AS). The pronoun of khalaqakum is plural and takes in everyone, and as-Sa'di's word for Adam (AS) is asl, origin: the first stage of every listener, in his reading, is the creation of the one from whom all of them come.",
            "bn": "মিন তুরাব: মাটি থেকে। প্রথম ধাপটি কার সৃষ্টির কথা বলছে, তিনজন তাফসীরকার তা স্পষ্ট করে বলেন। তাবারী: তিনি তোমাদের পিতা আদমকে মাটি থেকে সৃষ্টি করেছেন। মুয়াসসার: তিনিই আল্লাহ, যিনি তোমাদের পিতা আদমকে মাটি থেকে সৃষ্টি করেছেন। সা'দী: এটা হয়েছে তোমাদের মূল ও তোমাদের পিতা আদম (আঃ)-কে সৃষ্টির মাধ্যমে। খালাকাকুম শব্দের সর্বনাম বহুবচন, সবাই এর মধ্যে পড়ে। আর আদম (আঃ)-কে সা'দী বলছেন আসল, মানে মূল। তাঁর পাঠে প্রত্যেক শ্রোতার প্রথম ধাপ হলো সেই একজনের সৃষ্টি, যাঁর থেকে সবার শুরু।"
          },
          {
            "en": "Thumma min nutfah: then from a nutfah. The Muyassar glosses it as al-mani, the seminal fluid, from which Allah brought you into being by His power. As-Sa'di marks the turn in the list: this is the beginning of the creation of the rest of humankind while in the mother's womb. He adds that by naming the beginning, the verse points to the stages after it: the 'alaqa, then the mudgha, then the bones, then the breathing in of the soul. Of those, only the first is named in this verse.",
            "bn": "সুম্মা মিন নুতফা: তারপর নুতফা থেকে। মুয়াসসার এর ব্যাখ্যা দেয় আল-মানী, অর্থাৎ বীর্য। আল্লাহ নিজের কুদরতে তা থেকেই তোমাদের অস্তিত্বে এনেছেন। তালিকার মোড় ঘোরার জায়গাটা সা'দী দেখিয়ে দেন। তাঁর মতে এখান থেকে শুরু হয় বাকি সব মানুষের সৃষ্টি, মায়ের পেটে থাকা অবস্থায়। তিনি আরও বলেন, শুরুটার নাম নিয়ে আয়াত পরের ধাপগুলোর দিকেও ইশারা করেছে: আলাকা, তারপর মুদগা, তারপর হাড়, তারপর রূহ ফুঁকে দেওয়া। এগুলোর মধ্যে এ আয়াতে নাম এসেছে শুধু প্রথমটির।"
          },
          {
            "en": "Thumma min 'alaqah: then from an 'alaqa. The Muyassar renders it as the stage of thick red blood, and Ibn Kathir's abridged English translates it as a clot, a piece of coagulated blood. At-Tabari says only that it came after you had been nutfahs. The fetched commentators stop at those glosses, and this article stops with them. It makes no claim of its own about what happens in the womb at each stage.",
            "bn": "সুম্মা মিন আলাকা: তারপর আলাকা থেকে। মুয়াসসার একে বলে গাঢ় লাল রক্তের ধাপ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অনুবাদ করে জমাট রক্ত, অর্থাৎ জমে যাওয়া রক্তের টুকরো। তাবারী শুধু এটুকু বলেন যে নুতফা হওয়ার পর এই ধাপ এসেছে। সংগৃহীত তাফসীরগুলো এই ব্যাখ্যাতেই থেমেছে, এ লেখাও সেখানেই থামছে। মায়ের পেটে কোন ধাপে কী ঘটে, সে বিষয়ে এ লেখা নিজের পক্ষ থেকে কোনো দাবি করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Child Standing for Many",
          "bn": "অনেকের হয়ে এক শিশু"
        },
        "p": [
          {
            "en": "Thumma yukhrijukum tiflan: then He brings you out as a child. At-Tabari: out of your mothers' bellies, small. The noun is singular, tifl, though the you is plural. Al-Baghawi and al-Qurtubi both gloss it as atfalan, children. Al-Qurtubi gives the reason for the singular: what is meant is each one of you, and the verse is content with the one because its purpose is to show the kind. Every reader of the verse was once that single child, brought out by Someone else.",
            "bn": "সুম্মা ইউখরিজুকুম তিফলান: তারপর তিনি তোমাদের বের করে আনেন শিশু হিসেবে। তাবারী বলেন, মায়েদের পেট থেকে, ছোট্ট অবস্থায়। তোমাদের কথাটা বহুবচন, অথচ তিফল শব্দটা একবচন। বাগাভী আর কুরতুবী দুজনেই এর ব্যাখ্যা দেন আতফালান, মানে শিশুরা। একবচন কেন, কুরতুবী তার কারণও বলেন। উদ্দেশ্য তোমাদের প্রত্যেকে, আর আয়াত একজনের কথা বলেই থেমেছে, কারণ লক্ষ্য হলো জাতটা দেখানো। আয়াতের প্রত্যেক পাঠক একসময় ছিল সেই একক শিশু, যাকে বের করে এনেছেন অন্য কেউ।"
          },
          {
            "en": "The verbs carry a quiet shift. The first stages are told with khalaqakum, a past tense: He created you. The bringing out is told with yukhrijukum, a present tense: He brings you out. The fetched commentators do not comment on the change, so it is noted here only as a feature of the wording. What they do stress is the agent. Ibn Kathir: He alone, with no partner, turns you through all these stages, and all of it comes about by His command, His management and His decree.",
            "bn": "ক্রিয়াগুলোর মধ্যে একটা নিঃশব্দ বদল আছে। প্রথম ধাপগুলো বলা হয়েছে খালাকাকুম দিয়ে, অতীত কালে: তিনি তোমাদের সৃষ্টি করেছেন। বের করে আনার কথা এসেছে ইউখরিজুকুম দিয়ে, বর্তমান কালে: তিনি তোমাদের বের করে আনেন। সংগৃহীত তাফসীরগুলো এই বদল নিয়ে কিছু বলেনি, তাই এখানে কেবল শব্দের একটা বৈশিষ্ট্য হিসেবেই কথাটা রাখা হলো। তাঁরা জোর দেন কর্তার উপর। ইবন কাসীর বলেন, শরীকবিহীন তিনি একাই তোমাদের এই সব ধাপের মধ্য দিয়ে ঘুরিয়ে আনেন। আর এর সবই ঘটে তাঁর আদেশে, তাঁর ব্যবস্থাপনায়, তাঁর তাকদীরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Full Strength, Then Grey Hair",
          "bn": "পূর্ণ শক্তি, তারপর পাকা চুল"
        },
        "p": [
          {
            "en": "Thumma li-tablughu ashuddakum: then that you reach your ashudd. The fetched glosses describe it from different sides. At-Tabari: your powers become complete and your youth reaches its full extent. Al-Qurtubi: the state in which strength comes together and reason is complete; he refers the fuller discussion back to Surat al-An'am. As-Sa'di: strength of mind and of body, and all its powers, outward and inward. The Muyassar says simply that your frame grows strong, until you become elders.",
            "bn": "সুম্মা লিতাবলুগূ আশুদ্দাকুম: তারপর যাতে তোমরা আশুদ্দে পৌঁছাও। সংগৃহীত ব্যাখ্যাগুলো একে দেখে ভিন্ন ভিন্ন দিক থেকে। তাবারী: তোমাদের সব শক্তি পূর্ণ হয়, আর যৌবন তার শেষ সীমায় পৌঁছায়। কুরতুবী: যে অবস্থায় শক্তি একত্র হয় আর বুদ্ধি পূর্ণতা পায়। বিস্তারিত আলোচনার জন্য তিনি সূরা আন'আমের দিকে ফিরিয়ে দেন। সা'দী: বুদ্ধি ও দেহের শক্তি, আর ভেতর-বাইরের সমস্ত সামর্থ্য। মুয়াসসার সোজা কথায় বলে, তোমাদের গড়ন মজবুত হয়, শেষে তোমরা বৃদ্ধ হও।"
          },
          {
            "en": "None of these texts fixes a number of years for ashudd in this verse, and al-Qurtubi's own discussion of it sits under another surah that was not fetched for this one. So the article names no age. What the glosses share is a picture of completion: strength and understanding at their fullest. The verse places that peak in the middle of the list rather than at its end, and at-Tabari closes the same sentence by saying that your creation is completed as elders.",
            "bn": "এ আয়াতে আশুদ্দের জন্য কোনো নির্দিষ্ট বয়স এই তাফসীরগুলোর কেউ ঠিক করে দেননি। কুরতুবীর নিজের আলোচনাটা আছে অন্য এক সূরায়, যা এ আয়াতের জন্য সংগ্রহ করা হয়নি। তাই এ লেখা কোনো বয়সের নাম বলছে না। ব্যাখ্যাগুলোর মিল একটা জায়গায়: পূর্ণতার ছবি, যেখানে শক্তি আর বোধ দুটোই সবচেয়ে বেশি। আয়াত এই চূড়াকে রেখেছে তালিকার মাঝখানে, শেষে নয়। আর তাবারী একই বাক্য শেষ করেন এ কথায় যে তোমাদের সৃষ্টির পূর্ণতা আসে বৃদ্ধ অবস্থায়।"
          },
          {
            "en": "Thumma li-takunu shuyukhan: then that you become elders. Al-Qurtubi records two vowelings of the plural. Shuyukh, with damma, is the reading of Nafi', Ibn Muhaysin, Hafs, Hisham, Ya'qub and Abu 'Amr; shiyukh, with kasra, is the reading of the rest, and both are plurals of abundance. A singular reading, shaykhan, is also reported, on the pattern of tiflan before it. In his lexical note he adds that a shaykh is a man who has passed forty years.",
            "bn": "সুম্মা লিতাকূনূ শুয়ূখান: তারপর যাতে তোমরা বৃদ্ধ হও। বহুবচন শব্দটির দুই রকম উচ্চারণ কুরতুবী উল্লেখ করেন। শীনে পেশ দিয়ে শুয়ূখ পড়েছেন নাফি', ইবন মুহাইসিন, হাফস, হিশাম, ইয়াকূব ও আবূ আমর। বাকিরা পড়েছেন শীনে যের দিয়ে, শিয়ূখ। দুটোই বহুসংখ্যা বোঝানো বহুবচন। একবচনে শাইখান পাঠও বর্ণিত আছে, আগের তিফলান শব্দের ধাঁচে। শব্দের আলোচনায় তিনি আরও বলেন, শাইখ হলো সে, যে চল্লিশ বছর পেরিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before Which Stage?",
          "bn": "কোন ধাপের আগে?"
        },
        "p": [
          {
            "en": "Wa minkum man yutawaffa min qablu: and among you is someone who is taken in death before. The verse does not say before what, and the commentators supply it differently. At-Tabari: before he reaches old age. Al-Baghawi: before he becomes a shaykh. Al-Qurtubi reports Mujahid with two possibilities side by side: before being a shaykh, or before all of these states, when the child comes out miscarried. As-Sa'di sets the line earlier in the list: before reaching ashudd, full strength.",
            "bn": "ওয়া মিনকুম মাই ইউতাওয়াফফা মিন কাবলু: আর তোমাদের কাউকে আগেই মৃত্যু দেওয়া হয়। কিসের আগে, আয়াত তা বলেনি। তাফসীরকারেরা শূন্যস্থানটা ভরেছেন ভিন্ন ভিন্নভাবে। তাবারী: বার্ধক্যে পৌঁছানোর আগে। বাগাভী: শাইখ হওয়ার আগে। কুরতুবী মুজাহিদের মত আনেন, যেখানে দুটি সম্ভাবনা পাশাপাশি রাখা: শাইখ হওয়ার আগে, অথবা এই সব অবস্থার আগেই, যখন শিশু গর্ভপাত হয়ে বেরিয়ে আসে। সা'দী সীমারেখা টানেন তালিকার আরও আগে: আশুদ্দে, মানে পূর্ণ শক্তিতে পৌঁছানোর আগে।"
          },
          {
            "en": "Ibn Kathir takes the widest view. Before, for him, begins before the child exists and comes out into this world, when the mother miscarries; and some of them die young, or as youths, or in middle age before old age. He supports it with 22:5: We settle in the wombs whom We will for a specified term. The Muyassar keeps the verse's own openness: and among you is someone who dies before that.",
            "bn": "ইবন কাসীরের দৃষ্টি সবচেয়ে বিস্তৃত। তাঁর কাছে এই আগে শুরু হয় শিশুর অস্তিত্বে আসা আর এই দুনিয়ায় বেরিয়ে আসার আগ থেকেই, যখন মা গর্ভপাতের শিকার হন। তারপর তাদের কেউ মারা যায় শৈশবে, কেউ যৌবনে, কেউ মাঝবয়সে, বার্ধক্যের আগে। এর সমর্থনে তিনি আনেন ২২:৫ আয়াত: আর আমি যাকে ইচ্ছা নির্দিষ্ট মেয়াদ পর্যন্ত গর্ভে স্থির রাখি। মুয়াসসার আয়াতের নিজস্ব খোলা ভাবটাই রেখে দেয়: তোমাদের কেউ এর আগেই মারা যায়।"
          },
          {
            "en": "These are not one reading in different words. One line is drawn at old age, another at full strength, and a third reaches back before birth. The article leaves them side by side and takes no position. What they share is the verse's own pause: in the middle of a list of stages, it stops to say that not everyone completes the list. A pregnancy that ended early, a child who died, a young person who never grew old: each falls under min qablu in at least one of these readings.",
            "bn": "এগুলো একই কথা ভিন্ন শব্দে বলা নয়। একজন সীমা টানেন বার্ধক্যে, আরেকজন পূর্ণ শক্তিতে, আর তৃতীয়জন পিছিয়ে যান জন্মেরও আগে। এ লেখা মতগুলো পাশাপাশি রেখে দিচ্ছে, কোনোটির পক্ষ নিচ্ছে না। তবে সবার মধ্যে একটা মিল আছে, আর তা আয়াতেরই থমকে দাঁড়ানো। ধাপের তালিকার মাঝপথে আয়াত থেমে জানিয়ে দেয়, সবাই তালিকা শেষ করে না। সময়ের আগে শেষ হয়ে যাওয়া গর্ভ, মারা যাওয়া শিশু, বুড়ো হওয়ার আগেই চলে যাওয়া তরুণ: এই মতগুলোর অন্তত একটিতে প্রত্যেকেই মিন কাবলুর মধ্যে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Later Nor Sooner",
          "bn": "দেরিতেও না, আগেও না"
        },
        "p": [
          {
            "en": "Wa li-tablughu ajalan musamma: and that you reach a named term. At-Tabari: an appointed time fixed for your lives, a limited term that you do not pass beyond and do not come before. Al-Baghawi adds jami'an, all of you, and says the meaning is the term of life until death. Al-Qurtubi reports Mujahid in a short phrase: death, for everyone. As-Sa'di and the Muyassar read it together with the stages: by these decreed stages you reach a named term, at which your lives end.",
            "bn": "ওয়া লিতাবলুগূ আজালাম মুসাম্মা: আর যাতে তোমরা নির্ধারিত এক মেয়াদে পৌঁছাও। তাবারী: তোমাদের জীবনের জন্য বেঁধে দেওয়া এক সময়, এক সীমিত মেয়াদ, যা তোমরা পেরিয়ে যেতে পারো না, যার আগেও পৌঁছাতে পারো না। বাগাভী জুড়ে দেন জামী'আন, মানে তোমরা সবাই। তাঁর মতে এর অর্থ জীবনের মেয়াদ, মৃত্যু পর্যন্ত। কুরতুবী মুজাহিদের কথা আনেন অল্প কথায়: সবার জন্য মৃত্যু। সা'দী আর মুয়াসসার একে পড়েন ধাপগুলোর সঙ্গে মিলিয়ে: তাকদীরে বাঁধা এই ধাপগুলো পেরিয়ে তোমরা এমন এক মেয়াদে পৌঁছাও, যেখানে তোমাদের আয়ু শেষ হয়।"
          },
          {
            "en": "Al-Qurtubi also names the grammar of the li in li-tablughu: it is lam al-'aqiba, the lam of outcome, which tells where a course ends. Read that way, the one who dies before old age and the one who reaches it are not under different rules. Both arrive at a term that was already named, the first sooner and the second later, and at-Tabari's gloss rules out the idea that either arrived early or late.",
            "bn": "লিতাবলুগূ শব্দের লাম নিয়েও কুরতুবী কথা বলেন। এটা লামুল আকিবা, পরিণতির লাম, যা জানায় পথ কোথায় গিয়ে শেষ হয়। এভাবে পড়লে বার্ধক্যের আগে যে মারা যায় আর যে বার্ধক্যে পৌঁছায়, দুজনের জন্য আলাদা নিয়ম নেই। দুজনেই পৌঁছায় আগে থেকে নাম দেওয়া এক মেয়াদে, একজন আগে, আরেকজন পরে। আর তাবারীর ব্যাখ্যা এই ধারণা নাকচ করে দেয় যে তাদের কেউ সময়ের আগে বা পরে পৌঁছেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Written Before the Breath",
          "bn": "রূহ ফুঁকে দেওয়ার আগেই লেখা"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it. One sound narration, which none of them links to the verse, speaks of the same 'alaqa and the same ajal. Al-Bukhari records it in his Sahih (3208) from 'Abdullah ibn Mas'ud: Allah's Messenger ﷺ, the true and truly inspired, said: \"(The matter of the Creation of) a human being is put together in the womb of the mother in forty days, and then he becomes a clot of thick blood for a similar period, and then a piece of flesh for a similar period.\"",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। একটি সহীহ বর্ণনা আছে, যা তাঁদের কেউ এ আয়াতের সঙ্গে জোড়েননি, তবে তাতে সেই একই আলাকা আর একই আজালের কথা আছে। বুখারী তাঁর সহীহ গ্রন্থে (৩২০৮) আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে এটি বর্ণনা করেছেন। সত্যবাদী ও সত্যায়িত রাসূলুল্লাহ ﷺ আমাদের বলেছেন: \"তোমাদের প্রত্যেকের সৃষ্টি তার মায়ের পেটে চল্লিশ দিন ধরে একত্র করা হয়। তারপর সমপরিমাণ সময় সে আলাকা অবস্থায় থাকে, তারপর সমপরিমাণ সময় মুদগা অবস্থায়।\""
          },
          {
            "en": "The narration continues: \"Then Allah sends an angel who is ordered to write four things. He is ordered to write down his (i.e. the new creature's) deeds, his livelihood, his (date of) death, and whether he will be blessed or wretched (in religion). Then the soul is breathed into him.\" The word rendered his date of death is ajalahu, his term, the same noun as the ajal of this verse. Al-Bukhari gives the report no grading beyond placing it in his Sahih.",
            "bn": "বর্ণনাটি এগিয়ে চলে: \"তারপর আল্লাহ একজন ফেরেশতা পাঠান, তাঁকে চারটি বিষয় লেখার আদেশ দেওয়া হয়। তাঁকে বলা হয়, লেখো তার আমল, তার রিযিক, তার আজাল, আর সে হতভাগা না সৌভাগ্যবান। তারপর তার মধ্যে রূহ ফুঁকে দেওয়া হয়।\" ইংরেজি অনুবাদে যে শব্দকে মৃত্যুর সময় বলা হয়েছে, আরবিতে তা আজালাহু, তার মেয়াদ। এ আয়াতের আজাল শব্দটিও ঠিক এটাই। বুখারী বর্ণনাটিকে তাঁর সহীহ গ্রন্থে রেখেছেন, এর বাইরে আলাদা কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "And it ends: \"So, a man amongst you may do (good deeds till there is only a cubit between him and Paradise and then what has been written for him decides his behavior and he starts doing (evil) deeds characteristic of the people of the (Hell) Fire. And similarly a man amongst you may do (evil) deeds till there is only a cubit between him and the (Hell) Fire, and then what has been written for him decides his behavior, and he starts doing deeds characteristic of the people of Paradise.\"",
            "bn": "আর বর্ণনাটি শেষ হয় এভাবে: \"তোমাদের মধ্যে কেউ আমল করতে থাকে, শেষে তার আর জান্নাতের মাঝে মাত্র এক হাতের ব্যবধান থাকে। তখন তার লেখা তাকে ছাড়িয়ে যায়, আর সে জাহান্নামীদের আমল করে বসে। আবার কেউ আমল করতে থাকে, শেষে তার আর জাহান্নামের মাঝে মাত্র এক হাতের ব্যবধান থাকে। তখন লেখা তাকে ছাড়িয়ে যায়, আর সে জান্নাতীদের আমল করে।\""
          }
        ]
      },
      {
        "h": {
          "en": "Why the Verse Ends on Reason",
          "bn": "শেষ কথা কেন বুঝে দেখা"
        },
        "p": [
          {
            "en": "Wa la'allakum ta'qilun: and perhaps you will use reason. Ibn Kathir reports Ibn Jurayj: that you may remember the resurrection. At-Tabari: so that you understand Allah's proofs against you through this and reflect on His signs, and know by them that no god but He did it. Al-Baghawi: so that you understand the oneness of your Lord and His power. Al-Qurtubi: so that you understand this, and know that there is no god besides Him.",
            "bn": "ওয়া লা'আল্লাকুম তা'কিলূন: আর যাতে তোমরা বুঝে দেখো। ইবন কাসীর ইবন জুরাইজের কথা আনেন: যাতে তোমরা পুনরুত্থানের কথা স্মরণ করো। তাবারী: যাতে এর মাধ্যমে তোমাদের সামনে রাখা আল্লাহর প্রমাণগুলো বোঝো, তাঁর নিদর্শন নিয়ে ভাবো, আর তা থেকে জানতে পারো যে তিনি ছাড়া কোনো ইলাহ এ কাজ করেনি। বাগাভী: যাতে তোমাদের রবের তাওহীদ ও কুদরত বুঝতে পারো। কুরতুবী: যাতে তোমরা এ বিষয়টি বোঝো, আর জানো যে তিনি ছাড়া কোনো ইলাহ নেই।"
          },
          {
            "en": "So two lines of reasoning run from the same list. Ibn Jurayj ties it to the resurrection; at-Tabari, al-Baghawi and al-Qurtubi tie it to tawhid and to Allah's power. The fetched texts give both, and the article keeps both without ranking them. Neither cancels the other, and a reader can hold them together: the list is evidence about who alone deserves worship, and, for Ibn Jurayj, a reminder of the resurrection.",
            "bn": "তাহলে একই তালিকা থেকে যুক্তির দুটি ধারা বের হয়। ইবন জুরাইজ একে জোড়েন পুনরুত্থানের সঙ্গে। তাবারী, বাগাভী আর কুরতুবী জোড়েন তাওহীদ আর আল্লাহর কুদরতের সঙ্গে। সংগৃহীত তাফসীরে দুটোই আছে, এ লেখাও দুটোই রাখছে, কোনোটিকে আগে-পিছে না করে। একটি অন্যটিকে বাতিল করে না, পাঠক দুটোকে একসঙ্গে ধরে রাখতে পারেন। তালিকাটি জানিয়ে দেয় ইবাদত একমাত্র কার প্রাপ্য। আর ইবন জুরাইজের ব্যাখ্যায় এটি পুনরুত্থানের স্মারক।"
          },
          {
            "en": "As-Sa'di turns the reasoning back on the reader. Understand your own states, he says, and you will know that He who moves you through these stages is perfect in power, that worship is fitting for none but Him, and that you are deficient in every respect. That last clause is the mirror the verse holds up. None of the stages was an achievement. Nobody made himself a child, or strong, or old, and nobody moves his own term, which at-Tabari says is neither passed nor reached early.",
            "bn": "সা'দী যুক্তিটা ঘুরিয়ে দেন পাঠকের দিকেই। তিনি বলেন, নিজের অবস্থাগুলো বুঝে দেখো, তাহলে জানবে যে যিনি তোমাদের এই ধাপগুলোর মধ্য দিয়ে নিয়ে যান, তাঁর কুদরত পরিপূর্ণ। ইবাদত তিনি ছাড়া আর কারও জন্য শোভা পায় না। আর তোমরা সব দিক থেকেই অপূর্ণ। শেষ কথাটিই আয়াতের ধরা আয়না। কোনো ধাপই কারও নিজের অর্জন নয়। কেউ নিজেকে শিশু বানায়নি, শক্তিশালী বা বৃদ্ধও বানায়নি। নিজের মেয়াদও কেউ সরাতে পারে না। তাবারীর ভাষায়, সেই মেয়াদ পেরোনো যায় না, তার আগে পৌঁছানোও যায় না।"
          }
        ]
      }
    ]
  },
  "40:78-79": {
    "sections": [
      {
        "h": {
          "en": "Comfort Right After Patience",
          "bn": "ধৈর্যের পরেই সান্ত্বনা"
        },
        "p": [
          {
            "en": "The verse before this one, 40:77, told the Prophet ﷺ to be patient, since Allah's promise is true. Then comes wa-laqad arsalna rusulan min qablik: and We have already sent messengers before you. Ibn Kathir opens his comment with the word musalliyan, consoling him, and al-Qurtubi says the same in his own phrasing: Allah comforted him again with what the messengers before him had met. At-Tabari makes the address explicit, O Muhammad, and adds that each of those messengers was sent to his own nation.",
            "bn": "এর আগের আয়াত ৪০:৭৭ নবী ﷺ-কে ধৈর্য ধরতে বলেছে, কারণ আল্লাহর ওয়াদা সত্য। তারপরই আসে ওয়া লাকাদ আরসালনা রুসুলান মিন কাবলিক: তোমার আগেও আমি রসূল পাঠিয়েছি। ইবন কাসীর তাঁর ব্যাখ্যা শুরু করেন মুসাল্লিয়ান শব্দ দিয়ে, অর্থাৎ তাঁকে সান্ত্বনা দিয়ে। কুরতুবীও নিজের ভাষায় একই কথা বলেন: আগের রসূলেরা যা কিছুর মুখোমুখি হয়েছিলেন, তা দিয়ে আল্লাহ তাঁকে আবারও সান্ত্বনা দিলেন। তাবারী সম্বোধনটা খুলে বলেন, হে মুহাম্মাদ। সঙ্গে যোগ করেন, ওই রসূলদের প্রত্যেককে পাঠানো হয়েছিল তাঁর নিজের উম্মতের কাছে।"
          },
          {
            "en": "As-Sa'di and the Muyassar fill in what the comfort rests on. Both say the messengers were many, calling them and patiently bearing the harm those peoples did them. So the verse is not first of all a lesson in history. It places one messenger, facing the rejection of his people, inside a long line of others who were rejected and who were patient.",
            "bn": "সান্ত্বনাটা কিসের উপর দাঁড়িয়ে, সা'দী আর মুয়াসসার তা ভরাট করে দেন। দুজনেই বলেন, রসূল ছিলেন অনেক। তাঁরা নিজ নিজ জাতিকে ডেকেছেন, আর তাদের দেওয়া কষ্ট ধৈর্যের সঙ্গে সয়েছেন। তাই আয়াতটি প্রথমত ইতিহাসের পাঠ নয়। নিজের জাতির প্রত্যাখ্যানের সামনে দাঁড়ানো একজন রসূলকে এটি বসিয়ে দেয় এমন রসূলদের দীর্ঘ সারিতে, যাঁরা প্রত্যাখ্যাত হয়েছিলেন আর ধৈর্য ধরেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stories Told, Stories Untold",
          "bn": "বলা কাহিনি, না-বলা কাহিনি"
        },
        "p": [
          {
            "en": "Minhum man qasasna 'alayk, wa-minhum man lam naqsus 'alayk: among them are those We have related to you, and among them are those We have not. Al-Baghawi says the related ones are those whose news is in the Qur'an. Al-Qurtubi adds what that news holds: what they met from their peoples. Ibn Kathir names the pattern: how their peoples called them liars, and how the outcome then went to the messengers. On this reading the stories are told for what they show about rejection and its end.",
            "bn": "মিনহুম মান কাসাসনা আলাইক, ওয়া মিনহুম মান লাম নাকসুস আলাইক: তাদের কারও কাহিনি তোমাকে শুনিয়েছি, কারও শোনাইনি। বাগাভী বলেন, যাদের কাহিনি শোনানো হয়েছে, তাদের খবর আছে কুরআনে। কুরতুবী জানান সেই খবরে কী আছে: নিজ নিজ জাতির কাছ থেকে তাঁরা কী পেয়েছিলেন। ইবন কাসীর ধরনটা চিনিয়ে দেন: তাঁদের জাতি কীভাবে তাঁদের মিথ্যাবাদী বলেছিল, আর শেষে পরিণতি কীভাবে রসূলদের পক্ষে গিয়েছিল। এ পাঠে কাহিনিগুলো শোনানো হয় প্রত্যাখ্যান আর তার পরিণতি দেখানোর জন্য।"
          },
          {
            "en": "Ibn Kathir notes that the same words come in Surat an-Nisa', and the matching wording there is 4:164: and messengers We have related to you before, and messengers We have not related to you. Of the untold, he says they are more than those mentioned by many multiples. As-Sa'di draws a different point from the same clause: all the messengers are under Allah's direction, and not one of them holds any part of the matter in his own hand.",
            "bn": "ইবন কাসীর মনে করিয়ে দেন, ঠিক এ কথাগুলো সূরা নিসাতেও এসেছে। সেখানে মিলে যাওয়া আয়াতটি ৪:১৬৪: আর এমন রসূল, যাদের কাহিনি আগে তোমাকে শুনিয়েছি, আর এমন রসূল, যাদের কাহিনি তোমাকে শোনাইনি। যাদের কথা বলা হয়নি, তাঁদের সম্পর্কে তিনি বলেন, তাঁরা উল্লিখিতদের চেয়ে বহু বহু গুণ বেশি। একই অংশ থেকে সা'দী অন্য একটি কথা বের করেন। সব রসূলই আল্লাহর পরিচালনার অধীন, বিষয়ের কোনো অংশই তাঁদের কারও নিজের হাতে নেই।"
          },
          {
            "en": "How many were they? At-Tabari records, with their chains, narrations that put a figure on the number. Their grading could not be confirmed in a hadith collection for this article, so the figures are left aside here. The verse itself does not count. It tells the Prophet ﷺ that some were related to him and some were not, and Ibn Kathir's many multiples is as far as the commentators fetched here go once those narrations are set aside.",
            "bn": "তাঁরা মোট কতজন? তাবারী সনদসহ কিছু বর্ণনা উল্লেখ করেছেন, যেগুলোতে একটা সংখ্যা দেওয়া আছে। এ লেখার জন্য কোনো হাদীসগ্রন্থে সেগুলোর মান যাচাই করা যায়নি, তাই সংখ্যাগুলো এখানে বাদ রাখা হলো। আয়াত নিজে কোনো গণনা দেয় না। নবী ﷺ-কে শুধু জানায়, কারও কাহিনি তাঁকে শোনানো হয়েছে, কারও হয়নি। ওই বর্ণনাগুলো সরিয়ে রাখলে এখানে পড়া তাফসীরগুলো ইবন কাসীরের ওই বহু বহু গুণ কথাটির বেশি এগোয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not of His Own Accord",
          "bn": "নিজের ইচ্ছায় নয়"
        },
        "p": [
          {
            "en": "Wa-ma kana li-rasulin an ya'tiya bi-ayatin illa bi-idhni-llah: it was not for any messenger to bring an aya except by Allah's leave. The word aya can mean a verse of scripture or a sign, and the commentators read it in different ways. Ibn Kathir takes it as a miracle, khariq lil-'adat, something that breaks the ordinary course, which Allah permits so that it points to the messenger's truthfulness. Al-Qurtubi adds the phrase min qibali nafsih: no messenger brings a sign on his own initiative.",
            "bn": "ওয়া মা কানা লিরাসূলিন আন ইয়াতিয়া বিআয়াতিন ইল্লা বিইযনিল্লাহ: আল্লাহর অনুমতি ছাড়া কোনো আয়াত নিয়ে আসা কোনো রসূলের কাজ ছিল না। আয়াত শব্দের অর্থ কিতাবের আয়াতও হতে পারে, নিদর্শনও হতে পারে। তাফসীরকারেরাও একে একাধিকভাবে পড়েছেন। ইবন কাসীর একে মুজিযা ধরেন, খারিকুন লিল-আদাত, অর্থাৎ যা স্বাভাবিক নিয়ম ভেঙে ঘটে। আল্লাহ এর অনুমতি দেন, যাতে তা রসূলের সত্যবাদিতার প্রমাণ হয়। কুরতুবী যোগ করেন মিন কিবালি নাফসিহ কথাটি: কোনো রসূল নিজ উদ্যোগে তা আনতে পারেন না।"
          },
          {
            "en": "As-Sa'di widens the word to signs that are heard and signs grasped by reason, al-ayat as-sam'iyya wal-'aqliyya. The Muyassar's wording is close to his: signs of the senses or of reason. Al-Baghawi glosses Allah's leave as His command and His will, and as-Sa'di as His will and His command. On none of these readings is a sign something the messenger can stage when asked. It arrives when and as Allah wills.",
            "bn": "সা'দী শব্দটিকে আরও প্রশস্ত করেন: শোনা নিদর্শন আর বুদ্ধি দিয়ে বোঝা নিদর্শন, আল-আয়াতুস সাময়িয়্যা ওয়াল আকলিয়্যা। মুয়াসসারের ভাষাও কাছাকাছি: ইন্দ্রিয়গ্রাহ্য নিদর্শন বা বুদ্ধিগ্রাহ্য নিদর্শন। বাগাভীর ব্যাখ্যায় আল্লাহর অনুমতি মানে তাঁর আদেশ আর তাঁর ইচ্ছা। সা'দীর ব্যাখ্যায় তাঁর ইচ্ছা আর তাঁর আদেশ। কোনো পাঠেই নিদর্শন এমন কিছু নয়, যা কেউ চাইলেই রসূল দেখিয়ে দিতে পারেন। তা আসে যখন আল্লাহ চান, আর যে রূপে চান।"
          },
          {
            "en": "At-Tabari ties the clause to what the Prophet ﷺ was being asked. As no earlier messenger was given a sign without permission, Allah tells him, so it was not given to you to bring your people the signs they ask you for without Our leave. As-Sa'di is sharper about the askers: proposing signs to the messengers, after Allah has already backed them with signs that show their truth, is wrongdoing, obstinacy and denial on the askers' part. On his reading the demand was never a search.",
            "bn": "নবী ﷺ-এর কাছে যা চাওয়া হচ্ছিল, তাবারী অংশটিকে তার সঙ্গে জুড়ে দেন। আগের কোনো রসূলকে অনুমতি ছাড়া নিদর্শন দেওয়া হয়নি। আল্লাহ তাঁকে বলছেন, তেমনি তোমার জাতি তোমার কাছে যেসব নিদর্শন চায়, আমার অনুমতি ছাড়া তা এনে দেওয়ার ভার তোমাকেও দেওয়া হয়নি। যারা চাইছিল, তাদের ব্যাপারে সা'দী আরও কড়া। তাঁর কথায়, রসূলদের সত্যতা প্রমাণকারী নিদর্শন দিয়ে আল্লাহ আগেই তাঁদের সাহায্য করেছেন। এরপরও নিজেদের পছন্দমতো নিদর্শন দাবি করা তাদের জুলুম, জেদ আর অস্বীকার। তাঁর পাঠে এ দাবি কখনো সত্য খোঁজা ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Command Arrives",
          "bn": "আদেশ যখন এসে পড়ে"
        },
        "p": [
          {
            "en": "Fa-idha ja'a amru-llah: so when the command of Allah comes. The commentators gloss it in several ways. Ibn Kathir: His punishment and retribution that encompass those who denied. The Muyassar: Allah's command with the punishment of the deniers. As-Sa'di: the decisive separation between the messengers and their enemies, and the fath, the opening. Al-Baghawi: His judgment between the prophets and the nations. Al-Qurtubi: the appointed time for their punishment, when Allah destroys them.",
            "bn": "ফাইযা জাআ আমরুল্লাহ: অতঃপর যখন আল্লাহর আদেশ আসে। তাফসীরকারেরা এর ব্যাখ্যা দেন কয়েকভাবে। ইবন কাসীর: তাঁর আযাব আর শাস্তি, যা মিথ্যা প্রতিপন্নকারীদের ঘিরে ফেলে। মুয়াসসার: মিথ্যা প্রতিপন্নকারীদের শাস্তি নিয়ে আসা আল্লাহর আদেশ। সা'দী: রসূল আর তাঁদের শত্রুদের মধ্যে চূড়ান্ত মীমাংসা, আর ফাতহ, অর্থাৎ বিজয়ের দুয়ার খুলে যাওয়া। বাগাভী: নবী আর উম্মতদের মধ্যে তাঁর ফয়সালা। কুরতুবী: তাদের শাস্তির নির্ধারিত সময়, যখন আল্লাহ তাদের ধ্বংস করেন।"
          },
          {
            "en": "Al-Qurtubi then adds two points. He explains the delay: it is for the sake of those among them whom Allah knows will accept Islam, and for the believers still in their loins. And he reports, with the word qila, it has been said, that the clause points to the killing at Badr. None of the texts fetched here names the Day of Resurrection as the meaning of the command, and al-Baghawi's judgment between prophets and nations does not say when. This article keeps the glosses as given and does not choose between them.",
            "bn": "কুরতুবী এরপর দুটি কথা যোগ করেন। দেরির কারণ তিনি ব্যাখ্যা করেন: তাদের মধ্যে যারা ইসলাম গ্রহণ করবে বলে আল্লাহ জানেন, আর তাদের ঔরসে যে মুমিনেরা এখনো আছে, তাদের জন্যই এ অবকাশ। আর কীলা, অর্থাৎ বলা হয়েছে, শব্দ দিয়ে তিনি উল্লেখ করেন যে অংশটি বদরের দিনের হত্যার দিকে ইঙ্গিত করে। এখানে পড়া কোনো তাফসীর আদেশের অর্থ হিসেবে কিয়ামতের দিনের নাম নেয় না। বাগাভীর নবী আর উম্মতদের মধ্যে ফয়সালার কথাও সময় বলে দেয় না। এ লেখা ব্যাখ্যাগুলো যেমন আছে তেমনই রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verdict That Lands Right",
          "bn": "যে রায় ঠিক জায়গায় পড়ে"
        },
        "p": [
          {
            "en": "Qudiya bil-haqq: it is decided in truth. At-Tabari reads bil-haqq as with justice, and says what that justice is: that Allah saves His messengers and those who believed with them. Ibn Kathir puts both sides together: the believers are saved and the disbelievers perish. The Muyassar calls it a just verdict between the messengers and those who denied them. As-Sa'di's phrase is that the truth decided falls in its proper place and agrees with what is right, by saving the messengers and their followers and destroying those who denied.",
            "bn": "কুদিয়া বিল-হাক্ক: সত্যের সঙ্গে ফয়সালা হয়ে যায়। তাবারী বিল-হাক্ক পড়েন ন্যায়ের সঙ্গে অর্থে, আর বলে দেন সেই ন্যায় কী: আল্লাহ তাঁর রসূলদের আর তাঁদের সঙ্গে যারা ঈমান এনেছিল তাদের রক্ষা করেন। ইবন কাসীর দুই দিক একসঙ্গে বলেন: মুমিনেরা বেঁচে যায়, কাফিররা ধ্বংস হয়। মুয়াসসার একে বলে রসূল আর তাঁদের মিথ্যা প্রতিপন্নকারীদের মধ্যে ন্যায্য রায়। সা'দীর ভাষায়, যে সত্য দিয়ে ফয়সালা হয়, তা ঠিক জায়গায় গিয়ে পড়ে আর সঠিকের সঙ্গে মিলে যায়। রসূল ও তাঁদের অনুসারীরা রক্ষা পান, মিথ্যা প্রতিপন্নকারীরা ধ্বংস হয়।"
          },
          {
            "en": "The verb is passive, qudiya, it is decided, and at-Tabari's gloss, in which Allah saves His messengers, makes plain whose decision it is. For someone who has just been told to be patient, this is the weight of the clause. The outcome does not hang on a messenger producing a sign on demand. It hangs on Allah's command, and when that command comes, the matter is settled, and it is settled in truth.",
            "bn": "ক্রিয়াটি কর্মবাচ্যে, কুদিয়া, ফয়সালা হয়ে যায়। তাবারীর ব্যাখ্যায় আল্লাহই তাঁর রসূলদের রক্ষা করেন, তাতে পরিষ্কার হয়ে যায় ফয়সালা কার। যাঁকে এইমাত্র ধৈর্য ধরতে বলা হয়েছে, তাঁর কাছে অংশটির ভার এখানেই। পরিণতি এ কথার উপর নির্ভর করে না যে রসূল চাওয়ামাত্র নিদর্শন দেখাতে পারবেন কি না। নির্ভর করে আল্লাহর আদেশের উপর। সেই আদেশ এলে বিষয়টির মীমাংসা হয়ে যায়, আর মীমাংসা হয় সত্যের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Stood on Falsehood",
          "bn": "যারা মিথ্যার উপর দাঁড়াল"
        },
        "p": [
          {
            "en": "Wa-khasira hunalika al-mubtilun: and there the mubtilun lose. Al-Qurtubi defines them as those who follow falsehood and shirk. At-Tabari: those who dealt in falsehood in their speech, lying and fabricating against Allah and claiming a partner for Him; he glosses khasira as halaka, perished. The Muyassar names the same two causes, their lying against Allah and their worship of others. As-Sa'di: those whose mark is falsehood, whose knowledge and deeds are false, and whose chosen goal is false. Hunalika, he says, means at the time of that decision.",
            "bn": "ওয়া খাসিরা হুনালিকাল মুবতিলূন: আর সেখানে মুবতিলূনরা ক্ষতিগ্রস্ত হয়। কুরতুবী তাদের সংজ্ঞা দেন: যারা বাতিল আর শিরকের অনুসরণ করে। তাবারী: যারা কথায় বাতিলের কারবার করেছে, আল্লাহর নামে মিথ্যা বলেছে, অপবাদ রটিয়েছে, আর তাঁর শরীক দাবি করেছে। খাসিরা শব্দের অর্থ তিনি করেন হালাকা, ধ্বংস হলো। মুয়াসসারও একই দুই কারণ বলে: আল্লাহর নামে মিথ্যা আর তাঁকে ছেড়ে অন্যের ইবাদত। সা'দী: যাদের পরিচয়ই বাতিল, যাদের জ্ঞান আর আমল বাতিল, যাদের লক্ষ্যও বাতিল। তাঁর মতে হুনালিকা মানে ওই ফয়সালার সময়ে।"
          },
          {
            "en": "As-Sa'di then turns the verse on its first hearers. Let those being addressed beware of persisting in their falsehood, he writes, lest they lose as the earlier ones lost, for they are no better than those, and they hold no written exemption in the scriptures. The warning faces the listener. It asks each hearer to look at what he himself stands on, not to look for someone else to fit the word.",
            "bn": "এরপর সা'দী আয়াতটি ঘুরিয়ে দেন তার প্রথম শ্রোতাদের দিকে। তিনি লেখেন, যাদের সম্বোধন করা হচ্ছে তারা যেন নিজেদের বাতিলে অটল থাকার ব্যাপারে সাবধান হয়। নইলে আগের লোকেরা যেমন ক্ষতিগ্রস্ত হয়েছে, তারাও তেমনি হবে। কারণ তারা ওদের চেয়ে ভালো নয়, আর আসমানি কিতাবে তাদের জন্য লেখা কোনো মুক্তিনামাও নেই। সতর্কবাণীটা শ্রোতার দিকেই তাক করা। প্রত্যেক শ্রোতাকে তা বলে নিজে কিসের উপর দাঁড়িয়ে আছে তা দেখতে। শব্দটা কার গায়ে খাটে, সেটা খুঁজতে চারপাশে তাকাতে বলে না।"
          },
          {
            "en": "This needs saying plainly. The verse describes what it describes: Allah's verdict on those who stood on falsehood against His messengers, and their loss when His command came. It licenses nothing against any living person or community. It gives nobody the authority to name a neighbour, a group or a people as al-mubtilun, or to treat them on that basis. The judgment in the verse belongs to Allah's command, and the verse keeps it there.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: যারা আল্লাহর রসূলদের বিরুদ্ধে বাতিলের উপর দাঁড়িয়েছিল তাদের উপর আল্লাহর রায়, আর তাঁর আদেশ আসার পর তাদের ক্ষতি। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। কোনো প্রতিবেশী, কোনো দল বা কোনো জাতিকে মুবতিলূন বলে চিহ্নিত করার, কিংবা সেই হিসেবে তাদের সঙ্গে আচরণ করার অধিকারও কাউকে দেয় না। আয়াতের রায় আল্লাহর আদেশের অধিকারে, আয়াত তা সেখানেই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Grazing Animals",
          "bn": "তারপর গবাদি পশুর কথা"
        },
        "p": [
          {
            "en": "The next verse begins a new thought: Allahu-lladhi ja'ala lakumu-l-an'am, it is Allah who made for you the an'am. None of the commentators fetched here explains the move from the messengers to the animals; each opens 40:79 on its own terms. Ibn Kathir and as-Sa'di both use the language of imtinan, Allah reminding His servants of a favour. At-Tabari reads the opening name as an argument: Allah, the one for whom alone godhood is fitting, said to those of Quraysh who associated partners with Him.",
            "bn": "পরের আয়াত শুরু করে নতুন এক কথা: আল্লাহুল্লাযী জাআলা লাকুমুল আনআম, আল্লাহই তোমাদের জন্য আনআম বানিয়েছেন। রসূলদের কথা থেকে পশুর কথায় কেন যাওয়া হলো, এখানে পড়া কোনো তাফসীর তা ব্যাখ্যা করে না। প্রত্যেকে ৪০:৭৯ আয়াতকে আলাদাভাবেই শুরু করে। ইবন কাসীর আর সা'দী দুজনেই ইমতিনানের ভাষা ব্যবহার করেন, অর্থাৎ আল্লাহ তাঁর বান্দাদের একটি অনুগ্রহের কথা মনে করিয়ে দিচ্ছেন। তাবারী শুরুর নামটিকে পড়েন যুক্তি হিসেবে: আল্লাহ, ইলাহ হওয়া কেবল যাঁরই সাজে। কথাটা বলা হচ্ছে কুরাইশের সেই লোকদের, যারা তাঁর সঙ্গে শরীক করত।"
          },
          {
            "en": "Ibn Kathir's abridged English heads the passage: the cattle are also a blessing from Allah and a sign from Him. That heading spans 40:79 to 40:81, and what the following verses add belongs to them. Here the verse names two uses only, li-tarkabu minha wa-minha ta'kulun: that you may ride some of them, and of some of them you eat. At-Tabari notes that the full sense is that you ride some and eat some, and the word some is left unsaid because the sentence already shows it.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অংশটির শিরোনাম দেয়: গবাদি পশুও আল্লাহর এক নিয়ামত এবং তাঁর এক নিদর্শন। সেই শিরোনাম ৪০:৭৯ থেকে ৪০:৮১ পর্যন্ত বিস্তৃত, আর পরের আয়াতগুলো যা যোগ করে তা সেগুলোরই আলোচনা। এ আয়াত শুধু দুটি কাজের নাম নেয়, লিতারকাবূ মিনহা ওয়া মিনহা তাকুলূন: যাতে তোমরা কিছুতে চড়ো, আর কিছু থেকে খাও। তাবারী বলেন, পূর্ণ অর্থ হলো কিছুতে চড়ো আর কিছু খাও। কিছু শব্দটা বলা হয়নি, কারণ বাক্যই তা বুঝিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Animals, Which Use",
          "bn": "কোন পশু, কোন কাজে"
        },
        "p": [
          {
            "en": "Which animals are meant? Ibn Kathir names three, camels, cattle and sheep, and cites 36:72: of them some they ride, and of them they eat. At-Tabari's list is wider: camels, cattle, sheep, horses and other animals that people keep for riding or for food. He then splits the verse. You ride means the horses and donkeys, and you eat means the camels, cattle and sheep. Al-Qurtubi reports from Abu Ishaq az-Zajjaj a narrower reading still: the an'am here are the camels.",
            "bn": "কোন পশুর কথা বলা হচ্ছে? ইবন কাসীর তিনটির নাম নেন: উট, গরু আর ছাগল-ভেড়া। সঙ্গে উদ্ধৃত করেন ৩৬:৭২: ওগুলোর কিছু তাদের বাহন, আর কিছু তারা খায়। তাবারীর তালিকা আরও বড়: উট, গরু, ছাগল-ভেড়া, ঘোড়া, আর মানুষ চড়া বা খাওয়ার জন্য যেসব পশু পালে। তারপর তিনি আয়াতটি ভাগ করে দেন। চড়ো মানে ঘোড়া আর গাধা, খাও মানে উট, গরু আর ছাগল-ভেড়া। কুরতুবী আবু ইসহাক যাজ্জাজ থেকে আরও সংকীর্ণ এক পাঠ উল্লেখ করেন: এখানে আনআম মানে উট।"
          },
          {
            "en": "Ibn Kathir's abridged English does not divide the animals that way. Camels, it says, may be ridden or eaten, their milk is drunk and they carry loads; cattle are eaten, milked and used to plough; sheep are eaten and milked. Al-Qurtubi records that those who forbade eating horses while permitting camels argued from this verse, since it says you eat of the an'am, while 16:8 speaks of horses, mules and donkeys for riding and does not mention eating. He refers the full discussion to Surat an-Nahl, and this article leaves the ruling there.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ পশুগুলোকে এভাবে ভাগ করে না। সেখানে বলা হয়েছে, উটে চড়াও যায়, উট খাওয়াও যায়। উটের দুধ পান করা হয়, আর দূরের সফরে উট বোঝা বয়। গরু খাওয়া হয়, তার দুধ পান করা হয়, আর তা দিয়ে জমি চাষ হয়। ছাগল-ভেড়া খাওয়া হয়, তার দুধও পান করা হয়। কুরতুবী জানান, যারা উট খাওয়া বৈধ মেনে ঘোড়া খাওয়া নিষেধ করেছেন, তারা এ আয়াত থেকে যুক্তি দিয়েছেন। কারণ আনআমের বেলায় বলা হয়েছে তোমরা খাও, আর ১৬:৮ আয়াতে ঘোড়া, খচ্চর আর গাধার কথা এসেছে চড়ার জন্য, খাওয়ার উল্লেখ নেই। পূর্ণ আলোচনার জন্য তিনি সূরা নাহলের দিকে ইঙ্গিত করেন। এ লেখাও বিধানটি সেখানেই রেখে দিচ্ছে।"
          },
          {
            "en": "As-Sa'di lists the favours inside the favour: riding and carrying, eating the meat and drinking the milk, warmth, and tools and goods made from wool, fur and hair. Al-Baghawi keeps to the verse's own hint with one word, ba'duha, some of them. The differences are kept as they are. At-Tabari divides riding and eating between different animals; Ibn Kathir lets the camel serve both; az-Zajjaj, as al-Qurtubi reports him, makes the camel the whole meaning of the word.",
            "bn": "সা'দী এক নিয়ামতের ভেতরের নিয়ামতগুলো গুনে দেখান: চড়া আর বোঝা বওয়া, গোশত খাওয়া আর দুধ পান করা, উষ্ণতা, আর পশম, লোম ও চুল দিয়ে বানানো সরঞ্জাম আর আসবাব। বাগাভী আয়াতের নিজের ইঙ্গিতেই থাকেন, একটি শব্দে: বা'দুহা, ওগুলোর কিছু। মতভেদগুলো যেমন আছে তেমনই রাখা হলো। তাবারী চড়া আর খাওয়াকে ভাগ করে দেন আলাদা আলাদা পশুর মধ্যে। ইবন কাসীরের কাছে উট দুই কাজেই লাগে। আর কুরতুবীর বর্ণনায় যাজ্জাজ শব্দটির পুরো অর্থই উটে সীমিত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience, Then Gratitude",
          "bn": "ধৈর্য, তারপর শুকরিয়া"
        },
        "p": [
          {
            "en": "No tafsir fetched for these verses attaches a hadith with a collector's grading to either of them, and none gives an occasion of revelation, so none is offered here. The two verses can still be held side by side without inventing a bridge. The first speaks of signs that come only by Allah's leave, and of a verdict that comes only by His command. The second speaks of animals He made, which people ride and eat every day.",
            "bn": "এখানে পড়া কোনো তাফসীর এ দুই আয়াতের কোনোটির সঙ্গে সংকলকের মানসহ কোনো হাদীস জুড়ে দেয়নি, শানে নুযূলও উল্লেখ করেনি। তাই এখানে তেমন কিছু আনা হলো না। তবু মনগড়া কোনো সেতু না বানিয়েই আয়াত দুটিকে পাশাপাশি রাখা যায়। প্রথম আয়াত বলে এমন নিদর্শনের কথা, যা আসে কেবল আল্লাহর অনুমতিতে, আর এমন ফয়সালার কথা, যা আসে কেবল তাঁর আদেশে। দ্বিতীয় আয়াত বলে তাঁর বানানো পশুর কথা, যার পিঠে মানুষ রোজ চড়ে আর যা রোজ খায়।"
          },
          {
            "en": "For a reader, that pairing is a fair place to stop. It is easy to wait for a sign on our own terms, or a verdict on our own timetable, and stop seeing the ordinary favours already given. The first verse, coming straight after the command to be patient, asks for patience about what Allah has not yet sent. The second, in the language of favour the commentators use, asks for gratitude for what He already has. And as-Sa'di's warning asks each reader to check what he stands on.",
            "bn": "পাঠকের জন্য থামার ভালো জায়গা এই জোড়াটাই। নিজের শর্তে নিদর্শনের অপেক্ষা করা, নিজের সময়সূচিতে ফয়সালার অপেক্ষা করা খুব সহজ। তাতে হাতে থাকা সাধারণ নিয়ামতগুলো চোখ থেকে সরে যায়। ধৈর্যের নির্দেশের ঠিক পরে আসা প্রথম আয়াত চায়, আল্লাহ যা এখনো পাঠাননি তার ব্যাপারে ধৈর্য। দ্বিতীয় আয়াত, তাফসীরকারদের অনুগ্রহের ভাষায়, চায় তিনি যা দিয়েই রেখেছেন তার শুকরিয়া। আর সা'দীর সতর্কবাণী প্রত্যেক পাঠককে বলে, নিজে কিসের উপর দাঁড়িয়ে আছেন তা যাচাই করে নিন।"
          }
        ]
      }
    ]
  }
});
