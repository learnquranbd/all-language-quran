/**
 * Tadabbur long-form articles — surah 10.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "10:5": {
    "sections": [
      {
        "h": {
          "en": "An Argument, Not an Almanac",
          "bn": "এটি পঞ্জিকা নয়, যুক্তি"
        },
        "p": [
          {
            "en": "Surah Yunus reaches this verse in the middle of a case about accountability. 10:3 states that your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter, and that no one intercedes except after His permission. 10:4 follows with the return: to Him is your return, all together. Then comes the sun and the moon, and 10:6 adds the alternation of night and day as signs for a people who fear Allah.",
            "bn": "সূরা ইউনুস এই আয়াতে পৌঁছায় জবাবদিহি নিয়ে একটি যুক্তির মাঝখানে। 10:3 আয়াত বলে, তোমাদের প্রতিপালক আল্লাহ, যিনি ছয় দিনে আসমানসমূহ ও যমীন সৃষ্টি করেছেন, তারপর আরশে সমুন্নত হয়েছেন এবং সব বিষয় পরিচালনা করছেন, আর তাঁর অনুমতির পরে ছাড়া কেউ সুপারিশ করে না। 10:4 আয়াত আসে প্রত্যাবর্তনের কথা নিয়ে: তোমাদের সকলের ফেরা তাঁরই কাছে। এরপর আসে সূর্য ও চন্দ্র, আর 10:6 আয়াত যোগ করে রাত ও দিনের পালাবদল — মুত্তাকীদের জন্য নিদর্শন।"
          },
          {
            "en": "So the sky is being entered as evidence in a hearing, not admired for its own sake. The point being argued is that a Lord who arranges the heavens is a Lord who will arrange a reckoning, and that the same precision which lets a farmer know when to plant will let a Day be appointed. Nothing in the passage encourages reading the verse as a piece of astronomy detached from that argument.",
            "bn": "অর্থাৎ আকাশকে এখানে আনা হচ্ছে একটি বিচারে সাক্ষ্য হিসেবে, নিজের সৌন্দর্যের জন্য প্রশংসিত হতে নয়। যে কথাটি প্রমাণ করা হচ্ছে তা হলো: যে প্রভু আসমান পরিচালনা করেন তিনিই হিসাব-নিকাশের ব্যবস্থা করবেন, আর যে নিখুঁত হিসাব একজন কৃষককে বলে দেয় কখন বীজ বুনতে হবে, সেই হিসাবেই একটি দিন নির্ধারিত হতে পারে। পুরো অংশের কোথাও আয়াতটিকে সেই যুক্তি থেকে বিচ্ছিন্ন করে জ্যোতির্বিদ্যার টুকরো হিসেবে পড়ার উৎসাহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Diya' and Nur",
          "bn": "যিয়া ও নূর"
        },
        "p": [
          {
            "en": "The sun is called diya' and the moon nur, and classical commentators treat the choice as deliberate. They take diya' as the stronger word, light that blazes from the thing itself and comes with burning; nur they take as the milder light by which things are seen. Elsewhere the Quran calls the sun a siraj, a lamp, at 25:61 and again at 71:16, where the same verse calls the moon nur — so the vocabulary is consistent across the Book.",
            "bn": "সূর্যকে বলা হয়েছে যিয়া আর চন্দ্রকে নূর, আর ক্লাসিক্যাল মুফাসসিরগণ এই শব্দচয়নকে উদ্দেশ্যপ্রণোদিত হিসেবেই দেখেন। তাঁরা যিয়াকে নেন শক্তিশালী শব্দ হিসেবে — এমন আলো যা বস্তুটি থেকেই জ্বলে ওঠে এবং দহনসহ আসে; আর নূরকে নেন মৃদু আলো হিসেবে, যার দ্বারা জিনিস দেখা যায়। অন্যত্র কুরআন সূর্যকে সিরাজ অর্থাৎ প্রদীপ বলে — 25:61 আয়াতে, আবার 71:16 আয়াতে, যেখানে একই আয়াত চন্দ্রকে নূর বলে। ফলে গোটা কিতাব জুড়ে শব্দব্যবহার সঙ্গতিপূর্ণ।"
          },
          {
            "en": "It is worth being careful about what this does not establish. The verse distinguishes two kinds of light by name; the Arabic says only nur, and where a translation calls the moon a derived or a reflected light that is the translator's interpretation and not a word in the verse. It makes no statement about the mechanism by which the moon comes to have its light, and a reader who presses it into saying more than that is adding to it rather than reading it.",
            "bn": "কী প্রতিষ্ঠিত হচ্ছে না, সে ব্যাপারে সতর্ক থাকা দরকার। আয়াতটি নাম দিয়ে দুই ধরনের আলোকে আলাদা করে; আরবিতে আছে কেবল 'নূর', আর কোনো অনুবাদ যদি চন্দ্রকে 'আহরিত' বা 'প্রতিফলিত' আলো বলে, তা অনুবাদকের ব্যাখ্যা — আয়াতের শব্দ নয়। চন্দ্র কোন প্রক্রিয়ায় তার আলো পায় সে বিষয়ে আয়াতটি কিছুই বলে না, আর যে পাঠক এর চেয়ে বেশি কথা বলাতে চাপ দেন তিনি আয়াতটি পড়ছেন না, তাতে যোগ করছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stations Measured Out",
          "bn": "মেপে দেওয়া মানযিল"
        },
        "p": [
          {
            "en": "Wa qaddarahu manazila — and He determined for it stations. The pronoun is singular, and most of the commentators refer it to the moon, the nearer of the two just mentioned, glossing manazil as the stations it passes through in the course of a month. The verb qaddara is from the root of qadar, measuring out. Nothing about the path is casual; it is portioned.",
            "bn": "ওয়া কাদ্দারাহু মানাযিলা — আর তিনি তার জন্য মানযিল নির্ধারণ করেছেন। সর্বনামটি একবচন, আর অধিকাংশ মুফাসসির একে ফিরিয়ে দেন চন্দ্রের দিকে — এইমাত্র উল্লেখ করা দুটির মধ্যে নিকটতরটি — এবং মানাযিলকে ব্যাখ্যা করেন সেই স্তরগুলো হিসেবে যেগুলো সে এক মাসের পথে অতিক্রম করে। কাদ্দারা ক্রিয়াপদটি এসেছে কাদার শব্দের ধাতু থেকে, যার অর্থ মেপে দেওয়া। এই পথের কোনো কিছুই আকস্মিক নয়; সবটাই মাপা।"
          },
          {
            "en": "36:39 gives the same image with a comparison attached: the moon has been measured out in phases until it returns looking like the old dried stalk of a date palm. That is a description anyone can verify by looking up for a month, and it is the reason this particular sign carries weight. It is not reported to us; it is repeated in front of us, on schedule, without an instrument being required.",
            "bn": "36:39 আয়াত একই ছবিকে একটি উপমাসহ দেয়: চন্দ্রের জন্য মানযিল নির্ধারিত হয়েছে, শেষ পর্যন্ত সে খেজুরগাছের পুরনো শুকনো ডাঁটার মতো হয়ে ফিরে আসে। এটি এমন বর্ণনা যা যে কেউ এক মাস আকাশের দিকে তাকিয়ে যাচাই করতে পারে, আর এ কারণেই এই নির্দিষ্ট নিদর্শনটির ওজন আছে। এটি আমাদের কাছে সংবাদ হিসেবে আসেনি; এটি আমাদের সামনে পুনরাবৃত্ত হয়, সময়মতো, কোনো যন্ত্রের প্রয়োজন ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Know the Count",
          "bn": "যাতে তোমরা গুনতে পার"
        },
        "p": [
          {
            "en": "The stated purpose is human reckoning: that you may know the number of years and the account. 17:12 uses almost the same phrase of the night and the day, and 6:96 says the sun and the moon are for calculation. When people asked the Prophet ﷺ about the crescent moons, the answer given in 2:189 was of a piece with all of this: they are measurements of time for the people and for hajj.",
            "bn": "ঘোষিত উদ্দেশ্যটি মানুষের হিসাব: যাতে তোমরা বছরের সংখ্যা ও হিসাব জানতে পার। 17:12 আয়াত প্রায় একই কথা বলে রাত ও দিন সম্পর্কে, আর 6:96 আয়াত বলে সূর্য ও চন্দ্র গণনার জন্য। মানুষ যখন নবী ﷺ-কে নতুন চাঁদ সম্পর্কে জিজ্ঞেস করেছিল, 2:189 আয়াতে যে উত্তর দেওয়া হলো তা এই সবকিছুরই সঙ্গে মেলে: সেগুলো মানুষের জন্য ও হজের জন্য সময় নির্ধারক।"
          },
          {
            "en": "There is a quiet mercy in this. The calendar that fixes fasting and hajj hangs on something every human being can see without owning anything. A shepherd and an astronomer look at the same crescent and both know the month has turned. A worship schedule built on the sky is a schedule that no one can be priced out of and no authority can privately hold.",
            "bn": "এর ভেতরে একটি নিঃশব্দ রহমত আছে। যে বর্ষপঞ্জি রোযা ও হজ নির্ধারণ করে, তা ঝুলে আছে এমন কিছুর ওপর যা প্রত্যেক মানুষ কোনো কিছুর মালিক না হয়েই দেখতে পায়। একজন রাখাল আর একজন জ্যোতির্বিদ একই বাঁকা চাঁদ দেখেন, আর দুজনেই বোঝেন মাস ঘুরে গেছে। আকাশের ওপর দাঁড়ানো ইবাদতের সময়সূচি এমন এক সূচি, যা থেকে কাউকে দামের কারণে বাদ দেওয়া যায় না এবং কোনো কর্তৃপক্ষ তা নিজের কব্জায় রাখতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Except in Truth",
          "bn": "সত্য ছাড়া নয়"
        },
        "p": [
          {
            "en": "Allah has not created that except bil-haqq, in truth. The clause rules out two readings at once: that the arrangement is accidental, and that it is decorative. 30:8 says the same of the heavens and the earth and adds a specified term to it. Purpose and expiry are stated together, and since 10:4 raised the question of the return this surah has been arguing for exactly that combination.",
            "bn": "আল্লাহ এসব সৃষ্টি করেননি বিল-হক্ব অর্থাৎ যথাযথভাবে ছাড়া। এই বাক্যাংশটি একসঙ্গে দুটি পাঠ বাতিল করে দেয়: এই বিন্যাস আকস্মিক, কিংবা এটি নিছক সাজসজ্জা। 30:8 আয়াত আসমানসমূহ ও যমীন সম্পর্কে একই কথা বলে এবং তার সঙ্গে একটি নির্দিষ্ট মেয়াদ যোগ করে। উদ্দেশ্য আর মেয়াদ একসঙ্গে বলা হয়েছে, আর 10:4 আয়াত থেকে সূরাটি ঠিক এই সমন্বয়ের পক্ষেই যুক্তি দিয়ে আসছে।"
          },
          {
            "en": "The closing verb is yufassilu, He lays the signs out in detail. The same verb ends 6:97 after the stars are named for guidance, there in the past tense — fassalna, We have detailed — and it returns in this exact form at 13:2, where the detailing is so that you may be certain of the meeting with your Lord. The signs, then, are not withheld and not obscure. They have been set out at length, and the variable the verse leaves open is the reader.",
            "bn": "শেষ ক্রিয়াপদটি ইউফাসসিলু — তিনি নিদর্শনগুলো বিশদভাবে বিন্যস্ত করেন। পথনির্দেশের জন্য নক্ষত্রের কথা বলার পর 6:97 আয়াত একই ধাতুর ক্রিয়া দিয়ে শেষ হয়, তবে সেখানে তা অতীত কালে — 'ফাসসালনা', আমি বিশদভাবে বর্ণনা করেছি — আর ঠিক এই রূপটিই ফিরে আসে 13:2 আয়াতে, যেখানে এই বিশদ বিন্যাস এ জন্য যে তোমরা যেন তোমাদের প্রতিপালকের সাক্ষাৎ সম্পর্কে নিশ্চিত হও। অর্থাৎ নিদর্শনগুলো আটকে রাখা হয়নি, অস্পষ্টও নয়। সেগুলো বিস্তারিতভাবে বিছিয়ে দেওয়া হয়েছে, আর আয়াতটি যে চলকটি খোলা রাখে তা হলো পাঠক।"
          }
        ]
      }
    ]
  },
  "10:24": {
    "sections": [
      {
        "h": {
          "en": "The Sentence It Explains",
          "bn": "যে বাক্যটির ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Surah Yunus has just put its readers on a ship. In 10:22 a good wind turns into a storm, the waves close in from every side, and the passengers call on Allah with sincere religion, promising that they will be among the thankful. 10:23 records what happens after the rescue: at once they transgress on the earth, and they are told that their wrongdoing is only against themselves, being the enjoyment of worldly life. That closing phrase is what this verse takes up and draws.",
            "bn": "সূরা ইউনুস কিছু আগেই তার পাঠককে একটি জাহাজে তুলে দিয়েছে। 10:22-এ অনুকূল বাতাস ঝড়ে বদলে যায়, চারদিক থেকে ঢেউ ঘিরে ধরে, আর আরোহীরা নিষ্ঠার সঙ্গে আল্লাহকে ডাকে এবং প্রতিশ্রুতি দেয় যে তারা কৃতজ্ঞদের অন্তর্ভুক্ত হবে। 10:23 বলে উদ্ধারের পর কী ঘটে: সঙ্গে সঙ্গেই তারা যমীনে সীমালঙ্ঘন শুরু করে, আর তাদের বলা হয় যে তাদের এই বাড়াবাড়ি কেবল নিজেদেরই বিরুদ্ধে, এ তো দুনিয়ার জীবনের সামান্য ভোগমাত্র। শেষের সেই কথাটিকেই এই আয়াত তুলে নিয়ে ছবিতে আঁকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Water, and Who Eats",
          "bn": "পানি, আর কে খায়"
        },
        "p": [
          {
            "en": "The comparison begins where the weight of it lies: not with a thing but with a process. The example of worldly life is like water We sent down from the sky, and the plants of the earth mingled with it — fakhtalata, an intermingling, growth pressing into growth until the ground is covered. Then a detail that is easy to read past: from it eat both the people and the livestock. The world genuinely feeds. The verse does not call it an illusion, and it is careful to say who is being fed.",
            "bn": "উপমাটি শুরু হয় সেখান থেকেই যেখানে এর মূল ভার: কোনো বস্তু নয়, বরং একটি প্রক্রিয়া। দুনিয়ার জীবনের দৃষ্টান্ত সেই পানির মতো যা আমি আকাশ থেকে নামিয়েছি, আর তার সংস্পর্শে যমীনের উদ্ভিদ মিশে গেছে — ফাখতালাতা, অর্থাৎ পরস্পরে জড়িয়ে যাওয়া, গাছের ভেতর গাছ ঠেলে ওঠা, যতক্ষণ না মাটি ঢেকে যায়। এরপর এমন একটি বিবরণ যা সহজেই চোখ এড়িয়ে যায়: তা থেকে খায় মানুষও, গবাদিপশুও। দুনিয়া সত্যিই খাওয়ায়। আয়াত একে মায়া বলে না, বরং যত্ন করে বলে দেয় কারা এতে প্রতিপালিত হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn at Hatta Idha",
          "bn": "'হাত্তা ইযা'-তে মোড়"
        },
        "p": [
          {
            "en": "The pivot is the word hatta, until. Until the earth has taken on its zukhruf — the word for gold-work and gilding, and the name of the forty-third surah — and has adorned itself, and its people supposed that they had power over it. Every clause in that run is a peak, not a decline. The commentators fix on the verb zanna: supposition, not knowledge. And qadirun is a participle of capability. What the owners get wrong is not that the field is beautiful but that it is theirs to command.",
            "bn": "মোড় ঘোরে 'হাত্তা' শব্দে — অর্থাৎ 'যতক্ষণ না', 'অবশেষে যখন'। যতক্ষণ না যমীন তার যুখরুফ ধারণ করে — শব্দটির অর্থ স্বর্ণালংকার বা সোনালি কারুকাজ, আর এ নামেই কুরআনের তেতাল্লিশতম সূরা — এবং নিজেকে শোভিত করে, আর তার মালিকেরা ভাবতে থাকে যে ওগুলো তাদের ক্ষমতার আওতায়। এই ধারাবাহিকতার প্রতিটি বাক্যাংশ উন্নতির চূড়া, পতনের নয়। মুফাসসিরগণ 'যান্না' ক্রিয়াপদটিতে থামেন: এটি ধারণা, জ্ঞান নয়। আর 'কাদিরূন' হলো সামর্থ্যের কর্তৃবাচক রূপ। মালিকদের ভুল এই নয় যে ক্ষেত সুন্দর, বরং এই যে ক্ষেত তাদের হুকুমের অধীন।"
          }
        ]
      },
      {
        "h": {
          "en": "By Night or by Day",
          "bn": "রাতে কিংবা দিনে"
        },
        "p": [
          {
            "en": "Then, in one clause, everything: there comes to it Our command by night or by day, and We make it a mown field, as if it had not flourished yesterday. Laylan aw naharan leaves no protected hour. Hasid is the cut crop, the harvest. And the closing four Arabic words say yesterday, not an age ago — the whole prosperous history of that field is denied in a breath, using a verb whose root carries the sense of dwelling in plenty.",
            "bn": "এরপর একটিমাত্র বাক্যাংশে সবকিছু: রাতে কিংবা দিনে তার ওপর আমার নির্দেশ এসে পড়ে, আর আমি তাকে কেটে ফেলা ফসলের মতো করে দিই, যেন গতকাল সেখানে কিছুই ছিল না। 'লাইলান আও নাহারান' কোনো নিরাপদ প্রহর অবশিষ্ট রাখে না। 'হাসীদ' মানে কাটা ফসল। আর শেষের চারটি আরবি শব্দ বলে 'গতকাল' — বহু যুগ আগে নয়; ওই ক্ষেতের গোটা সমৃদ্ধ ইতিহাস এক নিঃশ্বাসে অস্বীকার করা হয়, আর যে ক্রিয়াপদে তা বলা হয় তার মূলে আছে প্রাচুর্যের মধ্যে বসবাসের অর্থ।"
          },
          {
            "en": "Set the Quran's tellings of this parable side by side and the endings differ. 18:45 ends with dry remnants scattered by the winds. 57:20 ends with a crop that yellows and crumbles to chaff, a decline anyone can watch happening. This one ends with a command arriving overnight on a field still at its best. The picture is varied because loss is varied; what does not vary is that the green stage was never the whole of the story.",
            "bn": "কুরআনে এই উপমার বিভিন্ন বর্ণনা পাশাপাশি রাখলে দেখা যায়, শেষগুলো আলাদা। 18:45 শেষ হয় শুকনো খড়কুটোয়, যা বাতাস উড়িয়ে নেয়। 57:20 শেষ হয় হলুদ হয়ে যাওয়া আর গুঁড়ো হয়ে ভেঙে পড়া ফসলে — এমন ক্ষয় যা যে কেউ চোখের সামনে ঘটতে দেখতে পারে। আর এখানে শেষ হয় সবচেয়ে ভালো অবস্থায় থাকা ক্ষেতের ওপর রাতারাতি নেমে আসা এক নির্দেশে। ছবিটি বদলায়, কারণ ক্ষতির ধরনও বদলায়; যা বদলায় না তা হলো — সবুজ পর্যায়টিই কখনো পুরো গল্প ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "For a People Who Think",
          "bn": "চিন্তাশীল সম্প্রদায়ের জন্য"
        },
        "p": [
          {
            "en": "The verse closes by naming its audience: thus do We lay out the signs in detail for a people who reflect, yatafakkarun. Tafakkur is not admiration; it is working something out, taking what stands in front of you and drawing the conclusion from it. And the very next verse refuses to leave the reader standing in a ruined field. 10:25 says that Allah invites to Dar as-Salam, the Home of Peace, and guides whom He wills to a straight path.",
            "bn": "আয়াত শেষ হয় তার শ্রোতার পরিচয় দিয়ে: এভাবেই আমি নিদর্শনগুলো বিশদভাবে বর্ণনা করি সেই সম্প্রদায়ের জন্য যারা চিন্তা করে — 'ইয়াতাফাক্কারূন'। তাফাক্কুর মানে মুগ্ধ হয়ে তাকিয়ে থাকা নয়; এর অর্থ হিসাব মিলিয়ে নেওয়া — সামনে যা আছে তা থেকে সিদ্ধান্তে পৌঁছানো। আর ঠিক পরের আয়াতটি পাঠককে ধ্বংস হওয়া ক্ষেতের মধ্যে ফেলে রাখতে রাজি নয়। 10:25 বলে, আল্লাহ দারুস সালাম তথা শান্তির নিবাসের দিকে আহ্বান করেন, আর যাকে চান সরল পথের দিকে পরিচালিত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Owning a Field That Turns",
          "bn": "যে ক্ষেত বদলে যায়, তার মালিকানা"
        },
        "p": [
          {
            "en": "The verse does not ask anyone to stop planting or to enjoy less. What it corrects is one sentence inside the owner's head: that he is qadir, in command, over what he holds. The practical form of that correction is to name the real Owner while the field is still green — at the promotion, at the new house, at the clear medical result — and not only after a loss. Gratitude spoken at the peak is precisely the sentence the people in this parable never said.",
            "bn": "আয়াত কাউকে চাষ বন্ধ করতে বা কম উপভোগ করতে বলে না। এটি সংশোধন করে মালিকের মাথার ভেতরের একটি বাক্য: সে ভাবে, তার হাতে যা আছে তার ওপর সে-ই 'কাদির', অর্থাৎ কর্তৃত্বশীল। এই সংশোধনের ব্যবহারিক রূপ হলো, ক্ষেত সবুজ থাকতেই প্রকৃত মালিকের নাম উচ্চারণ করা — পদোন্নতির সময়, নতুন ঘরের সময়, পরীক্ষার ভালো ফল আসার সময় — কেবল ক্ষতির পরে নয়। চূড়ায় দাঁড়িয়ে বলা কৃতজ্ঞতার কথাটিই এই উপমার মানুষগুলো কখনো বলেনি।"
          },
          {
            "en": "The second practice comes from 10:25. If a harvest can be taken overnight, then whatever has been moved out of the field and toward the Home of Peace is the only part of the crop that is secure. Wealth given away, a night prayer, a debt forgiven, a child taught — these are the transfers. The believer is not asked to look at the world with suspicion. He is asked to look at it accurately, and the verse's own closing word for that is thinking.",
            "bn": "দ্বিতীয় অনুশীলনটি আসে 10:25 থেকে। যদি ফসল রাতারাতি তুলে নেওয়া যায়, তবে ক্ষেত থেকে সরিয়ে শান্তির নিবাসের দিকে যা পাঠানো হয়েছে, কেবল সেটুকুই নিরাপদ। দান করা সম্পদ, রাতের নামায, মাফ করে দেওয়া ঋণ, শেখানো একটি সন্তান — এগুলোই সেই স্থানান্তর। মুমিনকে দুনিয়ার দিকে সন্দেহের চোখে তাকাতে বলা হয়নি। তাকে বলা হয়েছে সঠিকভাবে তাকাতে, আর আয়াত নিজেই সেই কাজটির নাম দিয়েছে — চিন্তা করা।"
          }
        ]
      }
    ]
  },
  "10:44": {
    "sections": [
      {
        "h": {
          "en": "The Question It Answers",
          "bn": "যে প্রশ্নের উত্তর এটি"
        },
        "p": [
          {
            "en": "The verse arrives as an answer to a difficulty the two verses before it create. In 10:42 the Prophet ﷺ is told that among them are those who listen to you, but can you make the deaf hear, even though they will not use reason? 10:43 repeats the shape for sight: among them are those who look at you, but can you guide the blind, even though they will not see? A listener might fairly ask how the deaf and the blind are to be held answerable.",
            "bn": "আয়াতটি আসে তার আগের দুটি আয়াতের তৈরি করা একটি সমস্যার উত্তর হিসেবে। 10:42 আয়াতে নবী ﷺ-কে বলা হয়, তাদের মধ্যে এমন কেউ আছে যে তোমার কথা শোনে — কিন্তু তুমি কি বধিরকে শোনাতে পারবে, তারা না বুঝলেও? 10:43 একই কাঠামো দৃষ্টির ক্ষেত্রে ফিরিয়ে আনে: তাদের মধ্যে এমন কেউ আছে যে তোমার দিকে তাকায় — কিন্তু তুমি কি অন্ধকে পথ দেখাতে পারবে, তারা না দেখলেও? একজন শ্রোতা ন্যায্যভাবেই জিজ্ঞেস করতে পারেন, বধির ও অন্ধকে কীভাবে জবাবদিহির আওতায় আনা যায়।"
          },
          {
            "en": "10:44 answers without softening anything. Allah does not wrong the people at all; rather, the people wrong themselves. The deafness described is not an affliction that arrived from outside, and the two earlier verses had each attached a clause saying so: they will not use reason, they will not see. Faculties in working order are being declined. 10:45 then closes the passage on the Day they are gathered, feeling they had stayed no longer than an hour.",
            "bn": "10:44 কিছুই নরম না করে উত্তর দেয়। আল্লাহ মানুষের প্রতি বিন্দুমাত্র যুলম করেন না; বরং মানুষ নিজেরাই নিজেদের প্রতি যুলম করে। বর্ণিত বধিরতা বাইরে থেকে আসা কোনো বিপদ নয়, আর আগের দুই আয়াতের প্রত্যেকটিতেই সে কথা বলা একটি বাক্যাংশ যুক্ত ছিল: তারা বুদ্ধি খাটাবে না, তারা দেখবে না। সচল ইন্দ্রিয়গুলোকেই প্রত্যাখ্যান করা হচ্ছে। এরপর 10:45 অংশটি শেষ করে সেই দিনের কথা দিয়ে, যেদিন তাদের একত্র করা হবে এবং মনে হবে তারা এক ঘণ্টার বেশি অবস্থান করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not by the Smallest Amount",
          "bn": "সামান্যতম পরিমাণেও নয়"
        },
        "p": [
          {
            "en": "Shay'an is the word that closes the first half, and it is doing exact work. An indefinite noun placed inside a negation produces total generality in Arabic: not a thing, not in the least, not by any amount however small. So the clause is not the broad assurance that Allah's justice is reliable. It rules out the smallest possible instance. 4:40 states the same guarantee with a different measure, that He does not wrong by the weight of an atom.",
            "bn": "'শাইআন' শব্দটি প্রথম অর্ধেকটি শেষ করে, আর তা নিখুঁত একটি কাজ করছে। আরবিতে নেতিবাচক বাক্যের ভেতরে বসানো অনির্দিষ্ট বিশেষ্য সম্পূর্ণ ব্যাপকতা তৈরি করে: কোনো কিছুই নয়, বিন্দুমাত্র নয়, যত ছোট পরিমাণই হোক তাতেও নয়। কাজেই বাক্যটি এই ঢালাও আশ্বাস নয় যে আল্লাহর ন্যায়বিচার নির্ভরযোগ্য। এটি সম্ভাব্য ক্ষুদ্রতম দৃষ্টান্তটিকেও বাতিল করে দেয়। 4:40 একই নিশ্চয়তা ভিন্ন এক মাপকাঠিতে বলে — তিনি অণু পরিমাণও যুলম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn in the Middle",
          "bn": "মাঝখানের মোড়"
        },
        "p": [
          {
            "en": "Then wa lakinna, which is not simply and. It is the particle of correction, withdrawing the impression the first clause might have left and redirecting it. The sentence also repeats an-nas, the people, on purpose: they are the object of the verb in the first half and its subject in the second. And the closing clause puts anfusahum, themselves, in front of the verb, a fronting Arabic uses for restriction. It is themselves, specifically, that they are wronging.",
            "bn": "এরপর আসে 'ওয়া লাকিন্না', যা নিছক 'এবং' নয়। এটি সংশোধনের অব্যয় — প্রথম বাক্যাংশ যে ধারণা রেখে যেতে পারত তা প্রত্যাহার করে নিয়ে দিক বদলে দেয়। বাক্যটি ইচ্ছাকৃতভাবে 'আন-নাস' অর্থাৎ 'মানুষ' শব্দটিও দুবার আনে: প্রথম অর্ধেকে তারা ক্রিয়ার কর্ম, দ্বিতীয় অর্ধেকে তারাই কর্তা। আর শেষ বাক্যাংশে 'আনফুসাহুম' অর্থাৎ 'নিজেদেরকে' শব্দটি ক্রিয়ার আগে বসানো হয়েছে — আরবিতে এই অগ্রবর্তন সীমাবদ্ধতা বোঝাতে ব্যবহৃত হয়। তারা যুলম করছে নিজেদের প্রতিই, বিশেষভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Zulm Is",
          "bn": "যুলম কী"
        },
        "p": [
          {
            "en": "The lexicographers define zulm as putting a thing somewhere other than its own place. That is why one word covers injustice, oppression and idolatry alike: each is something set down where it does not belong, a right in the wrong hands, a worship given to the wrong object, a life spent on the wrong claim. Muslim relates the hadith qudsi from Abu Dharr (RA) in which Allah says: O My servants, I have forbidden zulm upon Myself and have made it forbidden among you, so do not wrong one another.",
            "bn": "অভিধানবিদগণ যুলমের সংজ্ঞা দেন এভাবে: কোনো জিনিসকে তার নিজের জায়গা ছাড়া অন্য কোথাও রাখা। এ কারণেই একটিমাত্র শব্দ অবিচার, নিপীড়ন ও শিরক — সবই ধারণ করে: প্রতিটিই এমন কিছু যা ভুল জায়গায় রাখা হয়েছে — ভুল হাতে একটি অধিকার, ভুল বস্তুতে দেওয়া ইবাদত, ভুল দাবির পেছনে ব্যয় করা একটি জীবন। মুসলিম আবু যর (রাঃ) থেকে হাদীসে কুদসীটি বর্ণনা করেন, যাতে আল্লাহ বলেন: হে আমার বান্দারা, আমি যুলমকে নিজের ওপর হারাম করেছি এবং তোমাদের মধ্যেও তা হারাম করেছি, কাজেই তোমরা একে অপরের প্রতি যুলম করো না।"
          },
          {
            "en": "The hadith and the verse make two matching statements in the same order. First, that the possibility of injustice from Allah is closed; not merely restrained, but forbidden by Him upon Himself. Second, that the injustice actually in circulation is ours: the verse says people wrong themselves, and the hadith adds that they wrong one another. Nothing in either text denies that people wrong each other. What is denied is that any of it originates above.",
            "bn": "হাদীস ও আয়াত মিলে যাওয়া দুটি কথা একই ক্রমে বলে। প্রথমত, আল্লাহর পক্ষ থেকে অবিচারের সম্ভাবনার দরজা বন্ধ — কেবল সংযত নয়, বরং তিনি নিজেই তা নিজের ওপর হারাম করেছেন। দ্বিতীয়ত, বাস্তবে যে অবিচার চলছে তা আমাদেরই: আয়াত বলে মানুষ নিজেদের প্রতিই যুলম করে, আর হাদীস যোগ করে যে তারা একে অপরের প্রতিও তা করে। কোনো পাঠই এ কথা অস্বীকার করে না যে মানুষ একে অপরের প্রতি অন্যায় করে। যা অস্বীকার করা হয় তা হলো — এর কোনো কিছুরই উৎস ওপর থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refrain Across the Book",
          "bn": "কিতাবজুড়ে একটি ধুয়া"
        },
        "p": [
          {
            "en": "The second half of this verse is close to a refrain. 2:57 says of the Children of Israel, given shade and manna and quails, that they did not wrong Us but were wronging themselves. 9:70 says it of the destroyed nations after listing them by name, 16:33 of people waiting for the angels to come, 29:40 after cataloguing the storm and the blast and the swallowing earth and the drowning, and 30:9 of a people stronger than the Makkans who had built more than they had.",
            "bn": "এই আয়াতের দ্বিতীয় অর্ধেকটি প্রায় একটি ধুয়ার মতো। 2:57 বনী ইসরাঈল সম্পর্কে বলে — যাদের ছায়া, মান্না ও সালওয়া দেওয়া হয়েছিল — তারা আমার প্রতি যুলম করেনি, বরং নিজেদের প্রতিই যুলম করেছিল। 9:70 কথাটি বলে ধ্বংসপ্রাপ্ত জাতিগুলোর নাম ধরে ধরে উল্লেখ করার পর, 16:33 বলে তাদের সম্পর্কে যারা ফেরেশতাদের আসার অপেক্ষায় আছে, 29:40 বলে ঝটিকা, বজ্রধ্বনি, ভূগর্ভে প্রোথিত হওয়া ও ডুবে যাওয়ার তালিকা দেওয়ার পর, আর 30:9 বলে এমন এক জাতি সম্পর্কে যারা মক্কাবাসীদের চেয়ে শক্তিশালী ছিল এবং তাদের চেয়ে বেশি আবাদ করেছিল।"
          },
          {
            "en": "Set together, those verses show what the clause is for. It is attached to verdicts, to the moment a community's account is closed and the reader is tempted to ask whether the punishment was fair. The Quran does not argue the case afresh each time. It repeats one sentence, and the sentence assigns the cause to the party that had the faculties, the messengers and the time.",
            "bn": "একসঙ্গে রাখলে আয়াতগুলো দেখিয়ে দেয় বাক্যাংশটি কী কাজে লাগে। এটি যুক্ত হয় রায়ের সঙ্গে — সেই মুহূর্তে, যখন কোনো জাতির হিসাব চুকে যায় এবং পাঠকের মনে প্রশ্ন জাগতে চায় যে শাস্তিটি ন্যায্য ছিল কি না। কুরআন প্রতিবার নতুন করে যুক্তি সাজায় না। সে একটিমাত্র বাক্য পুনরাবৃত্তি করে, আর সেই বাক্য কারণটি চাপিয়ে দেয় সেই পক্ষের ওপর, যার কাছে ইন্দ্রিয় ছিল, রাসূলগণ এসেছিলেন এবং সময়ও ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Wronging Yourself",
          "bn": "নিজের প্রতি যুলম"
        },
        "p": [
          {
            "en": "The Quran also puts the phrase in the mouths of its best people. In 28:16 Musa (AS), after a blow that killed a man, says: my Lord, indeed I have wronged myself, so forgive me; and He forgave him, in the same verse. Nothing in that sentence blames the Egyptian, the Israelite, the crowd or the hour. Self-wronging named accurately turns out to be the opening move of repentance rather than an act of self-punishment.",
            "bn": "কুরআন কথাটি তার শ্রেষ্ঠ মানুষদের মুখেও বসিয়ে দেয়। 28:16 আয়াতে মূসা (আঃ), যে আঘাতে একজন মানুষ মারা গিয়েছিল তার পর, বলেন: হে আমার প্রতিপালক, আমি নিজের প্রতি যুলম করেছি, কাজেই আমাকে ক্ষমা করুন — আর একই আয়াতেই তিনি তাঁকে ক্ষমা করে দেন। এই বাক্যে মিসরীয়, ইসরাঈলী, ভিড় কিংবা সময় — কারও ওপরই দোষ চাপানো হয়নি। নিজের প্রতি যুলমকে সঠিকভাবে নাম দেওয়াটা দেখা যাচ্ছে আত্মনির্যাতন নয়, বরং তাওবার প্রথম পদক্ষেপ।"
          },
          {
            "en": "Read as a discipline, this verse redirects an instinct. When something goes badly the mind reaches for a cause outside itself: the timing, the people, the decree. 10:44 does not deny that others do wrong, and it is not a rule for assigning blame to victims. It removes exactly one candidate from the list, permanently and entirely, and what is left is a question a believer can act on, because the only conduct in the account that he controls is his own.",
            "bn": "সাধনা হিসেবে পড়লে এই আয়াত একটি সহজাত প্রবণতাকে ঘুরিয়ে দেয়। কিছু খারাপ হলে মন কারণ খোঁজে নিজের বাইরে: সময়, মানুষজন, তাকদীর। 10:44 এ কথা অস্বীকার করে না যে অন্যরা অন্যায় করে, আর এটি ক্ষতিগ্রস্তের ঘাড়ে দোষ চাপানোর নিয়মও নয়। এটি তালিকা থেকে ঠিক একটি সম্ভাবনাকে স্থায়ীভাবে ও সম্পূর্ণভাবে সরিয়ে দেয়; আর যা অবশিষ্ট থাকে তা এমন এক প্রশ্ন যা নিয়ে মুমিন কাজ করতে পারে, কারণ এই হিসাবের ভেতরে একমাত্র যে আচরণটি তার নিয়ন্ত্রণে, সেটি তার নিজেরই।"
          }
        ]
      }
    ]
  },
  "10:57": {
    "sections": [
      {
        "h": {
          "en": "Addressed to All People",
          "bn": "সব মানুষের প্রতি সম্বোধন"
        },
        "p": [
          {
            "en": "Surah Yunus circles one dispute: the people of Makkah demanded a different Quran, or that this one be changed, and the surah answers by describing what the Quran actually is. At this point the address widens beyond the disputers: ya ayyuhan-nas, O mankind. What follows is not an argument but an announcement of goods received — there has come to you an admonition from your Lord, a healing for what is in the breasts, and guidance and mercy for the believers.",
            "bn": "সূরা ইউনুস একটি বিতর্ককে ঘিরে ঘোরে: মক্কার লোকেরা দাবি করেছিল ভিন্ন এক কুরআন, নয়তো এটিকেই বদলে দেওয়া হোক; আর সূরাটি উত্তর দেয় কুরআন আসলে কী তা বর্ণনা করে। এই জায়গায় এসে সম্বোধন বিতর্ককারীদের ছাড়িয়ে প্রশস্ত হয়: 'ইয়া আইয়ুহান-নাস' — হে মানবজাতি। এরপর যা আসে তা কোনো যুক্তি নয়, বরং পৌঁছে যাওয়া নিয়ামতের ঘোষণা — তোমাদের কাছে এসেছে তোমাদের রবের পক্ষ থেকে উপদেশ, বক্ষে যা আছে তার নিরাময়, আর মুমিনদের জন্য হিদায়াত ও রহমত।"
          },
          {
            "en": "The phrase min rabbikum, from your Lord, carries the tone. What has arrived is not a book from a lawgiver to subjects but provision from the One who has been raising and sustaining you all along; rabb is the word of nurture. A summons from a ruler and a parcel from a caretaker are opened with different hands. The verse insists the Quran is the second kind of arrival, whatever its critics were calling it.",
            "bn": "'মিন রাব্বিকুম' — তোমাদের রবের পক্ষ থেকে — বাক্যাংশটিই সুরটা ঠিক করে দেয়। যা এসে পৌঁছেছে তা কোনো বিধানদাতার পক্ষ থেকে প্রজাদের প্রতি পাঠানো বই নয়, বরং তাঁর পাঠানো রসদ, যিনি এতদিন ধরে তোমাদের লালন ও প্রতিপালন করে আসছেন; 'রব' শব্দটিই পরিচর্যার শব্দ। শাসকের তলব আর অভিভাবকের পাঠানো উপহার — দুটি মানুষ খোলে ভিন্ন হাতে। আয়াতটি জোর দিয়ে বলে, কুরআন দ্বিতীয় ধরনের আগমন — সমালোচকেরা একে যা-ই বলুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Gifts in Order",
          "bn": "ক্রমানুসারে চারটি দান"
        },
        "p": [
          {
            "en": "The verse names four things: maw'izah, admonition; shifa' lima fis-sudur, healing for what is in the breasts; huda, guidance; rahmah, mercy. Commentators including as-Sa'di read the sequence as a course of treatment. Admonition confronts and warns, the way a physician names the disease. Healing then works on the inner faculties the disease had corrupted. Guidance sets the recovered patient walking on the right road, and mercy is the flourishing at the road's end.",
            "bn": "আয়াতটি চারটি জিনিসের নাম নেয়: 'মাওইযা' — উপদেশ; 'শিফাউল লিমা ফিস-সুদূর' — বক্ষে যা আছে তার নিরাময়; 'হুদা' — হিদায়াত; 'রহমাহ' — রহমত। আস-সা'দীসহ মুফাসসিরগণ এই ক্রমকে পড়েন একটি চিকিৎসা-পদ্ধতি হিসেবে। উপদেশ মুখোমুখি দাঁড় করায় ও সতর্ক করে — যেমন চিকিৎসক রোগের নাম বলেন। নিরাময় এরপর কাজ করে সেই ভেতরের শক্তিগুলোর ওপর, রোগ যেগুলোকে নষ্ট করেছিল। হিদায়াত সুস্থ রোগীকে সঠিক পথে হাঁটতে নামিয়ে দেয়, আর রহমত সেই পথের শেষের সমৃদ্ধি।"
          },
          {
            "en": "The distribution of the gifts is equally deliberate. The admonition is announced to all mankind, but the verse ends lil-mu'minin, for the believers — guidance and mercy reach the ones who accept the treatment. Medicine on the shelf heals nobody. The Quran's benefit, the verse implies, is not automatic in a house where the book is present; it is conditional on the patient actually taking what was sent.",
            "bn": "দানগুলোর বণ্টনও সমান পরিকল্পিত। উপদেশ ঘোষিত হয়েছে গোটা মানবজাতির উদ্দেশে, কিন্তু আয়াত শেষ হয় 'লিল-মুমিনীন' — মুমিনদের জন্য; হিদায়াত ও রহমত তাদের কাছেই পৌঁছায়, যারা চিকিৎসাটি গ্রহণ করে। তাকের ওপর রাখা ওষুধ কাউকে সারায় না। আয়াতের ইঙ্গিত: যে ঘরে কিতাবটি আছে সেখানে এর উপকার আপনাআপনি আসে না; শর্ত হলো — রোগীকে সত্যিই খেতে হবে যা পাঠানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Breasts Carry",
          "bn": "বক্ষ যা বহন করে"
        },
        "p": [
          {
            "en": "The healing is located precisely: lima fis-sudur, for what is in the breasts. The mufassirun name the diseases that live there — doubt about the truth, hypocrisy, envy, and the restless attachment to desires. As-Sa'di sums the classes into two: shubuhat, the confusions that sicken conviction, and shahawat, the appetites that sicken the will. The Quran treats the first with clear proofs and the second by making the Hereafter vivid and the world's price honest.",
            "bn": "নিরাময়ের ঠিকানা সুনির্দিষ্ট: 'লিমা ফিস-সুদূর' — বক্ষে যা আছে তার জন্য। মুফাসসিরগণ সেখানে বাস করা ব্যাধিগুলোর নাম নেন — সত্য নিয়ে সন্দেহ, নিফাক, হিংসা, আর কামনার অস্থির আসক্তি। আস-সা'দী শ্রেণিগুলোকে দুই ভাগে গুছিয়ে আনেন: 'শুবুহাত' — যে বিভ্রান্তিগুলো প্রত্যয়কে রোগগ্রস্ত করে, আর 'শাহাওয়াত' — যে প্রবৃত্তিগুলো ইচ্ছাশক্তিকে রোগগ্রস্ত করে। কুরআন প্রথমটির চিকিৎসা করে স্পষ্ট প্রমাণ দিয়ে, আর দ্বিতীয়টির — আখিরাতকে জীবন্ত করে আর দুনিয়ার দাম সততার সঙ্গে জানিয়ে।"
          },
          {
            "en": "The claim recurs in 17:82, We send down of the Quran that which is healing and mercy for the believers, though it increases the wrongdoers only in loss. The same rain grows the garden and floods the ruin; the difference is in the ground. Reading these two verses together guards against a superstition and a despair alike — the Quran is not a charm that works regardless of the heart, nor a text too lofty to reach one.",
            "bn": "দাবিটি আবার আসে 17:82 আয়াতে: আমি কুরআনে এমন কিছু নাযিল করি যা মুমিনদের জন্য নিরাময় ও রহমত, যদিও তা জালিমদের ক্ষতিই কেবল বাড়ায়। একই বৃষ্টি বাগান ফলায় আর ধ্বংসস্তূপ ভাসায়; পার্থক্য মাটিতে। এই দুটি আয়াত মিলিয়ে পড়া একইসঙ্গে একটি কুসংস্কার ও একটি হতাশা থেকে বাঁচায় — কুরআন এমন কোনো কবচ নয় যা হৃদয়ের অবস্থা নির্বিশেষে কাজ করে, আবার এমন উঁচু কোনো গ্রন্থও নয় যা কারও নাগালে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than What They Amass",
          "bn": "তারা যা জমায় তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "The next verse presses the point into economics. In 10:58, say: in the bounty of Allah and in His mercy — in that let them rejoice; it is better than what they gather. Early commentators read the bounty and the mercy here as Islam and the Quran. The verse thus stages a comparison people rarely make out loud: on one side everything a lifetime can accumulate, on the other the revelation lying on the shelf, and it ranks the second higher.",
            "bn": "পরের আয়াতটি কথাটিকে অর্থনীতির ভাষায় চেপে ধরে। 10:58 আয়াতে: বলো, আল্লাহর অনুগ্রহে ও তাঁর রহমতে — এতেই তারা আনন্দিত হোক; তারা যা জমা করে এর চেয়ে এটি উত্তম। প্রাচীন মুফাসসিরগণ এখানকার অনুগ্রহ ও রহমতকে পড়েছেন ইসলাম ও কুরআন অর্থে। আয়াতটি এভাবে এমন এক তুলনা মঞ্চে তোলে, যা মানুষ কমই মুখ ফুটে করে: এক পাশে গোটা জীবনে যা জমানো যায় তার সবটা, অন্য পাশে তাকের ওপর পড়ে থাকা ওহী — এবং দ্বিতীয়টিকে সে উপরে স্থান দেয়।"
          },
          {
            "en": "Rejoicing is commanded, which is worth noticing. Gratitude for the Quran is not meant to stay at solemn respect; it is meant to reach the register of joy that people otherwise reserve for windfalls. A believer who would celebrate an inheritance but has never once felt lucky about owning revelation has, by the measure of 10:58, priced the two backwards.",
            "bn": "আনন্দ করার আদেশ দেওয়া হয়েছে — এটি লক্ষ করার মতো। কুরআনের জন্য কৃতজ্ঞতা কেবল গম্ভীর সম্মানে থেমে থাকার কথা নয়; তার পৌঁছানোর কথা সেই আনন্দের স্তরে, যা মানুষ সাধারণত অপ্রত্যাশিত প্রাপ্তির জন্য তুলে রাখে। যে মুমিন উত্তরাধিকার পেলে উৎসব করত, অথচ ওহীর মালিক হওয়ায় একবারও নিজেকে ভাগ্যবান ভাবেনি — 10:58 আয়াতের মাপকাঠিতে সে দুটির দাম উল্টো করে ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Cure",
          "bn": "নিরাময় গ্রহণ করা"
        },
        "p": [
          {
            "en": "The lived form of this verse is a change in how one approaches the book. A person reads differently when reading for a condition: the anxious reader watching for verses on decree and provision, the doubting reader for the arguments, the hardened reader for the passages that describe hearts like his own. The note behind this article says it directly — when we come to it as a cure, we discover it was sent for exactly what ails us.",
            "bn": "এই আয়াতের যাপিত রূপ হলো কিতাবটির কাছে যাওয়ার ভঙ্গিতে একটি পরিবর্তন। নিজের অসুখ সামনে রেখে পড়লে মানুষ অন্যভাবে পড়ে: উদ্বিগ্ন পাঠক খোঁজে তাকদীর ও রিযিকের আয়াত, সন্দেহগ্রস্ত পাঠক খোঁজে যুক্তিগুলো, কঠিন-হৃদয় পাঠক খোঁজে সেই অংশগুলো, যা তার নিজের মতো হৃদয়ের বর্ণনা দেয়। এই লেখার পেছনের নোটটি সরাসরিই বলে — নিরাময় হিসেবে এর কাছে গেলে আমরা আবিষ্কার করি, এটি পাঠানো হয়েছিল ঠিক আমাদের অসুখের জন্যই।"
          },
          {
            "en": "Treatment also implies dosage and regularity. No one expects medicine taken once a year, on an occasion, to hold a chronic condition at bay. A small daily portion read with the question what is this saying to my present state does more of the verse's work than a long recitation performed while the mind is elsewhere. The four gifts are already in the book; the reader's part is to keep the appointment.",
            "bn": "চিকিৎসা মানেই মাত্রা ও নিয়মানুবর্তিতা। বছরে একবার, কোনো উপলক্ষে খাওয়া ওষুধ দীর্ঘস্থায়ী রোগ ঠেকিয়ে রাখবে — এমনটা কেউ আশা করে না। 'এটি আমার বর্তমান অবস্থাকে কী বলছে' — এই প্রশ্ন নিয়ে পড়া ছোট্ট দৈনিক অংশ, মন অন্যত্র রেখে করা দীর্ঘ তিলাওয়াতের চেয়ে আয়াতটির কাজ বেশি করে। চারটি দান কিতাবে আগে থেকেই আছে; পাঠকের কাজ কেবল সাক্ষাতের সময়টা রক্ষা করা।"
          }
        ]
      }
    ]
  },
  "10:62-64": {
    "sections": [
      {
        "h": {
          "en": "Who His Allies Are",
          "bn": "তাঁর বন্ধু কারা"
        },
        "p": [
          {
            "en": "Unquestionably, the awliya of Allah — no fear will be upon them, nor will they grieve. The word wali carries closeness and alliance, and around it whole mythologies have grown: sainthood as a special caste, marked by wonders and reached by secrets. So 10:63 immediately defines the term and closes the mythology: those who believed and used to fear Allah. Faith and taqwa — the definition contains nothing else.",
            "bn": "জেনে রাখো, আল্লাহর আওলিয়া — তাদের কোনো ভয় নেই, তারা দুঃখিতও হবে না। ওয়ালী শব্দটি বহন করে নৈকট্য ও মৈত্রী, আর একে ঘিরে গড়ে উঠেছে আস্ত সব কল্পকথা: বিশেষ এক শ্রেণি হিসেবে বুযুর্গি, যার চিহ্ন অলৌকিকতা আর পথ গোপন রহস্য। তাই 10:63 সঙ্গে সঙ্গেই শব্দটির সংজ্ঞা দিয়ে কল্পকথার দরজা বন্ধ করে: যারা ঈমান এনেছে এবং তাকওয়া অবলম্বন করত। ঈমান ও তাকওয়া — সংজ্ঞায় এছাড়া আর কিছুই নেই।"
          },
          {
            "en": "The definition is the most quoted thing the mufassirun say here, because it makes walaya open. No lineage is named, no order, no initiation, no miracle. Whoever believes and is mindful of Allah has a share of His alliance in exact proportion to those two qualities — and whoever claims the rank without them has only the claim.",
            "bn": "মুফাসসিরগণ এখানে যা বলেন তার মধ্যে এই সংজ্ঞাটিই সবচেয়ে বেশি উদ্ধৃত, কারণ এটি ওয়ালায়াকে সবার জন্য খোলা করে দেয়। কোনো বংশের নাম নেই, কোনো তরিকা নেই, কোনো দীক্ষা নেই, কোনো কারামত নেই। যে ঈমান আনে ও আল্লাহ-সচেতন থাকে, ঠিক সেই দুই গুণের অনুপাতেই তার তাঁর মৈত্রীর অংশ আছে — আর যে গুণ দুটি ছাড়া পদটি দাবি করে, তার আছে কেবল দাবিটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Fear, No Grief",
          "bn": "নেই ভয়, নেই দুঃখ"
        },
        "p": [
          {
            "en": "The commentators observe the pair's precision: khawf, fear, faces what may come; huzn, grief, faces what has passed. Between them they cover every direction from which sorrow enters a life. The verse does not promise that Allah's allies feel nothing — the prophets themselves knew fear and sadness — but that neither will settle on them as a final state, and that on the Day it matters most, both are lifted entirely.",
            "bn": "মুফাসসিরগণ জোড়াটির সূক্ষ্মতা লক্ষ করেন: খাওফ — ভয় — মুখ করে থাকে যা আসতে পারে তার দিকে; হুযন — দুঃখ — যা চলে গেছে তার দিকে। দুয়ে মিলে জীবনে বেদনা ঢোকার প্রতিটি দিক ঢেকে ফেলে। আয়াতটি প্রতিশ্রুতি দেয় না যে আল্লাহর বন্ধুরা কিছুই অনুভব করেন না — নবীরাও (আঃ) ভয় ও বিষণ্নতা জেনেছেন — বরং এই যে, কোনোটিই তাদের ওপর চূড়ান্ত অবস্থা হয়ে বসবে না, আর যে দিনটিতে সবচেয়ে বেশি দরকার, সেদিন দুটিই সম্পূর্ণ তুলে নেওয়া হবে।"
          },
          {
            "en": "Their security has an unusual source. It does not come from wealth, walls or numbers, but from the two inward qualities of 10:63, and that is why it cannot be confiscated. Everything the world secures, the world can also seize; what faith and taqwa secure sits beyond reach, which is the whole advantage of being allied to the One whom nothing escapes and nothing defeats.",
            "bn": "তাদের নিরাপত্তার উৎসটি অস্বাভাবিক। তা আসে না সম্পদ, প্রাচীর বা সংখ্যা থেকে — আসে 10:63 আয়াতের দুটি অন্তর্গত গুণ থেকে। সে জন্যই তা বাজেয়াপ্ত করা যায় না। দুনিয়া যা কিছু নিরাপদ করে, দুনিয়া তা কেড়েও নিতে পারে; ঈমান ও তাকওয়া যা নিরাপদ করে তা নাগালের বাইরে — আর এটিই সেই সত্তার মিত্র হওয়ার পুরো সুবিধা, যাঁর থেকে কিছুই পালায় না এবং যাঁকে কিছুই পরাজিত করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News in Both Lives",
          "bn": "উভয় জীবনে সুসংবাদ"
        },
        "p": [
          {
            "en": "For them is good news in the life of this world and in the Hereafter. The Prophet ﷺ explained the worldly share: the righteous dream a Muslim sees or that is seen about him — related in the sound collections as what remains of the tidings of prophethood. Muslim also relates that when a man does good and people praise him for it, that is the immediate glad tidings of the believer.",
            "bn": "তাদের জন্য সুসংবাদ দুনিয়ার জীবনে ও আখিরাতে। দুনিয়ার অংশটির ব্যাখ্যা নবী ﷺ নিজে দিয়েছেন: সেই ভালো স্বপ্ন যা একজন মুসলিম দেখে বা তার সম্পর্কে দেখা হয় — বিশুদ্ধ সংকলনগুলোতে বর্ণিত, নবুওয়াতের সুসংবাদসমূহের যা অবশিষ্ট আছে তা হিসেবে। মুসলিম আরও বর্ণনা করেন: মানুষ যখন ভালো কাজ করে এবং লোকে তার জন্য তার প্রশংসা করে, তা মুমিনের আগাম সুসংবাদ।"
          },
          {
            "en": "The commentators add the third and greatest instalment: the tidings the angels bring at death, described in 41:30 — those who said our Lord is Allah and stood firm, upon them the angels descend: do not fear and do not grieve, and receive the good news of the Garden you were promised. The same two words, fear and grief, cancelled at the exact moment humans dread most.",
            "bn": "মুফাসসিরগণ যোগ করেন তৃতীয় ও সর্বশ্রেষ্ঠ কিস্তিটি: মৃত্যুর সময় ফেরেশতাদের আনা সুসংবাদ, যার বর্ণনা 41:30 আয়াতে — যারা বলেছে আমাদের রব আল্লাহ, তারপর অবিচল থেকেছে, তাদের ওপর ফেরেশতারা নেমে আসে: ভয় কোরো না, দুঃখও কোরো না, আর সেই জান্নাতের সুসংবাদ নাও যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছিল। সেই একই দুটি শব্দ — ভয় ও দুঃখ — বাতিল হয়ে যায় ঠিক সেই মুহূর্তে, মানুষ যাকে সবচেয়ে বেশি ভয় পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Words That Do Not Change",
          "bn": "যে বাণী বদলায় না"
        },
        "p": [
          {
            "en": "Then the guarantee: no change is there in the words of Allah — that is the great attainment. Promises fail for two reasons, deceit or inability, and both are impossible for Him. The verse fixes the promise's reliability to His own nature: His words do not change because He does not change His word, as 50:29 says — the word will not be altered with Me.",
            "bn": "তারপর নিশ্চয়তা: আল্লাহর বাণীসমূহে কোনো পরিবর্তন নেই — এটিই মহাসাফল্য। প্রতিশ্রুতি ভাঙে দুটি কারণে — প্রতারণা অথবা অক্ষমতা — এবং দুটিই তাঁর ক্ষেত্রে অসম্ভব। আয়াতটি প্রতিশ্রুতির নির্ভরযোগ্যতাকে বেঁধে দেয় তাঁর নিজের সত্তার সঙ্গে: তাঁর বাণী বদলায় না, কারণ তিনি নিজের কথা বদলান না — যেমন 50:29 বলে: আমার কাছে কথা রদবদল হয় না।"
          },
          {
            "en": "Al-fawz al-'azim, the great attainment, is the Quran's settled name for the best possible outcome. Attaching it here teaches proportion: the triumph is not the dream, nor the people's praise, but the standing itself — to be someone Allah calls His ally, guarded from fear and grief by a promise that cannot be revised in either world.",
            "bn": "আল-ফাওযুল আযীম — মহাসাফল্য — সর্বোত্তম সম্ভাব্য পরিণতির জন্য কুরআনের নির্ধারিত নাম। এখানে তা যুক্ত করা শেখায় অনুপাতবোধ: বিজয় স্বপ্নটি নয়, লোকের প্রশংসাও নয়, বরং মর্যাদাটিই — এমন কেউ হওয়া যাকে আল্লাহ নিজের মিত্র বলেন, এমন এক প্রতিশ্রুতিতে ভয় ও দুঃখ থেকে সুরক্ষিত, যা দুই জগতের কোনোটিতেই সংশোধিত হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Into Walaya",
          "bn": "ওয়ালায়ার পথ"
        },
        "p": [
          {
            "en": "Al-Bukhari relates the hadith qudsi that maps the road: whoever shows enmity to a wali of Mine, I have declared war upon him; My servant draws near to Me with nothing more beloved to Me than what I have made obligatory upon him, and he keeps drawing near with voluntary acts until I love him. The order is the point — the obligations first, then the extras, and love at the end of a long ordinary road.",
            "bn": "আল-বুখারী সেই হাদীসে কুদসী বর্ণনা করেন যা পথের মানচিত্র এঁকে দেয়: যে আমার কোনো ওয়ালীর সঙ্গে শত্রুতা করে, আমি তার বিরুদ্ধে যুদ্ধ ঘোষণা করলাম; আমার বান্দা আমার নৈকট্য লাভ করে এমন কিছু দিয়ে নয় যা আমার কাছে তার ওপর ফরয করা বিষয়ের চেয়ে প্রিয়তর, আর সে নফল আমল দিয়ে নৈকট্য বাড়াতেই থাকে যতক্ষণ না আমি তাকে ভালোবাসি। ক্রমটিই মূল কথা — আগে ফরযগুলো, তারপর অতিরিক্ত, আর ভালোবাসা এক দীর্ঘ সাদামাটা পথের শেষে।"
          },
          {
            "en": "Nothing in that road is exotic. Prayers on time, honest earnings, dues paid, then the gentle accumulation of voluntary prayer, fasting, charity and remembrance. The hadith continues that when Allah loves the servant, He is the hearing with which he hears and the seeing with which he sees, and if he asks, He gives him — the lived meaning of having Allah as one's wali.",
            "bn": "এই পথের কোনো কিছুই অলৌকিক নয়। সময়মতো নামায, হালাল উপার্জন, প্রাপ্য আদায় — তারপর নফল নামায, রোযা, সদকা ও যিকিরের ধীর সঞ্চয়। হাদীসটি আরও বলে: আল্লাহ যখন বান্দাকে ভালোবাসেন, তিনি হয়ে যান সেই শ্রবণ যা দিয়ে সে শোনে, সেই দৃষ্টি যা দিয়ে সে দেখে, আর সে চাইলে তিনি তাকে দেন — আল্লাহকে নিজের ওয়ালী হিসেবে পাওয়ার জীবন্ত অর্থ এটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Measuring by the Right Scale",
          "bn": "সঠিক মানদণ্ডে মাপা"
        },
        "p": [
          {
            "en": "These verses re-calibrate two judgments. About others: rank in Allah's sight tracks faith and taqwa, not fame, wealth or titles — so the unnoticed woman of consistent prayer may outrank the celebrated. About ourselves: anxiety about the future and grief over the past are, among much else, signals showing where our security is currently invested, and in what.",
            "bn": "এই আয়াতগুলো দুটি বিচারকে নতুন করে মাপে। অন্যদের সম্পর্কে: আল্লাহর কাছে মর্যাদা চলে ঈমান ও তাকওয়ার পথ ধরে — খ্যাতি, সম্পদ বা উপাধির পথে নয় — তাই নিয়মিত নামাযের সেই অনালোচিত নারী বিখ্যাতজনকে ছাড়িয়ে যেতে পারেন। নিজেদের সম্পর্কে: ভবিষ্যতের দুশ্চিন্তা আর অতীতের দুঃখ, আরও অনেক কিছুর সঙ্গে, সংকেত দেয় আমাদের নিরাপত্তা এই মুহূর্তে কোথায় বিনিয়োগ করা — আর কীসে।"
          },
          {
            "en": "The response the passage invites is to move the investment. Strengthen the two qualifying qualities — belief, examined and fed; taqwa, practiced in small daily refusals — and the promised freedoms follow at their own pace, in this life as tranquillity and in the next completely. That is the trade 10:64 calls the great attainment, offered without change to anyone willing to be His ally on His terms.",
            "bn": "অংশটি যে সাড়ার আমন্ত্রণ জানায় তা হলো বিনিয়োগটাই সরিয়ে নেওয়া। যোগ্যতা নির্ধারণকারী দুই গুণকে মজবুত করুন — ঈমান, যাচাই করা ও পুষ্ট করা; তাকওয়া, ছোট ছোট দৈনিক প্রত্যাখ্যানে চর্চিত — আর প্রতিশ্রুত মুক্তিগুলো আসবে নিজেদের গতিতে: এই জীবনে প্রশান্তি হয়ে, পরের জীবনে সম্পূর্ণরূপে। এই বিনিময়কেই 10:64 বলে মহাসাফল্য — অপরিবর্তিতভাবে দেওয়া প্রত্যেককে, যে তাঁর শর্তে তাঁর মিত্র হতে রাজি।"
          }
        ]
      }
    ]
  }
});
