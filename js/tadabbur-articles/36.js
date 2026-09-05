/**
 * Tadabbur long-form articles — surah 36.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "36:36": {
    "sections": [
      {
        "h": {
          "en": "The Answer to a Question",
          "bn": "একটি প্রশ্নের জবাব"
        },
        "p": [
          {
            "en": "The verses before this one are an argument from the ground up. 36:33 offers the dead earth as a sign: We gave it life and brought grain out of it, and from that they eat. 36:34 adds gardens of date palms and grapevines with springs made to burst forth in them. 36:35 states the purpose — that they may eat of its fruit, and their hands did not make it — and then asks: will they not then be grateful?",
            "bn": "এর আগের আয়াতগুলো একেবারে মাটি থেকে গড়ে তোলা একটি যুক্তি। 36:33 আয়াত মৃত যমীনকে নিদর্শন হিসেবে পেশ করে: আমি তাকে জীবন দিয়েছি এবং তা থেকে শস্য বের করেছি, আর তা থেকেই তারা খায়। 36:34 আয়াত যোগ করে খেজুর ও আঙুরের বাগান, আর তার মধ্যে উৎসারিত করা ঝর্ণা। 36:35 আয়াত উদ্দেশ্যটি বলে — যাতে তারা তার ফল খেতে পারে, আর তা তাদের হাত বানায়নি — এবং তারপর প্রশ্ন করে: তবু কি তারা কৃতজ্ঞতা প্রকাশ করবে না?"
          }
        ]
      },
      {
        "h": {
          "en": "Azwaj",
          "bn": "আযওয়াজ"
        },
        "p": [
          {
            "en": "This verse answers that question with a word rather than a rebuttal: subhana alladhi khalaqa al-azwaja kullaha. Azwaj is the plural of zawj, and Arabic uses zawj for one of a pair, the counterpart — each of two is the zawj of the other, so the word carries a relationship rather than a quantity. Kullaha, all of them, then shuts the door on exceptions. The One being glorified is glorified for a pattern, not for a list of items.",
            "bn": "এই আয়াত সেই প্রশ্নের জবাব দেয় পাল্টা যুক্তি দিয়ে নয়, একটি শব্দ দিয়ে: সুবহানাল্লাযী খালাকাল আযওয়াজা কুল্লাহা। 'আযওয়াজ' হলো 'যাওজ'-এর বহুবচন, আর আরবিতে 'যাওজ' মানে জোড়ার একটি, অর্থাৎ প্রতিরূপ — দুইয়ের প্রত্যেকেই অপরটির যাওজ; ফলে শব্দটি সংখ্যা নয়, একটি সম্পর্ক বহন করে। এরপর 'কুল্লাহা' অর্থাৎ 'সবগুলোই' ব্যতিক্রমের দরজা বন্ধ করে দেয়। যাঁর পবিত্রতা ঘোষণা করা হচ্ছে, তা করা হচ্ছে একটি নকশার জন্য, জিনিসের কোনো তালিকার জন্য নয়।"
          },
          {
            "en": "The Quran states the same rule elsewhere in its widest form. 51:49 says that of every thing We created two mates, and the clause of purpose attached to it is about the hearer taking something in, not about being informed. 13:3 applies it to one visible class: from all the fruits He made in the earth two mates. The pairing is presented each time as something to be noticed and used, and each time the noticing is expected to end somewhere other than in a catalogue.",
            "bn": "কুরআন একই নীতিকে অন্যত্র তার সবচেয়ে ব্যাপক রূপে বলে। 51:49 আয়াত বলে, প্রতিটি বস্তুকে আমি জোড়ায় জোড়ায় সৃষ্টি করেছি — আর তার সাথে জুড়ে দেওয়া উদ্দেশ্য-বাক্যটি শ্রোতার কিছু গ্রহণ করা নিয়ে, তথ্য পাওয়া নিয়ে নয়। 13:3 আয়াত তা প্রয়োগ করে দৃশ্যমান একটি শ্রেণিতে: সব ফলের মধ্যেই তিনি যমীনে জোড়া সৃষ্টি করেছেন। প্রতিবারই জোড়া বিষয়টিকে পেশ করা হয় লক্ষ করার ও কাজে লাগানোর মতো কিছু হিসেবে, আর প্রতিবারই আশা করা হয় যে সেই লক্ষ করাটি তালিকা ছাড়া অন্য কোথাও গিয়ে শেষ হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Columns in Plain Sight",
          "bn": "চোখের সামনের দুটি স্তম্ভ"
        },
        "p": [
          {
            "en": "The verse then lists three sources, and the first two are handed to the audience already opened. Mimma tunbitu al-ard, from what the earth grows, is exactly the material of 36:33 and 36:34 — the grain, the palms, the vines. The listener does not have to accept a claim about somewhere else; he has been standing in the evidence for three verses, and the verse simply gives the standing thing a name.",
            "bn": "এরপর আয়াতটি তিনটি উৎসের তালিকা দেয়, আর প্রথম দুটি শ্রোতার হাতে তুলে দেওয়া হয় আগে থেকেই খুলে রেখে। 'মিম্মা তুনবিতুল আরদ' — যমীন যা উৎপন্ন করে — ঠিক সেই উপকরণই যা 36:33 ও 36:34 আয়াতে ছিল: শস্য, খেজুরগাছ, আঙুরলতা। শ্রোতাকে অন্য কোথাকার কোনো দাবি মেনে নিতে হয় না; তিনটি আয়াত ধরে সে প্রমাণের ভেতরেই দাঁড়িয়ে আছে, আর আয়াতটি কেবল সেই দাঁড়িয়ে থাকা জিনিসটির একটি নাম দেয়।"
          },
          {
            "en": "Wa min anfusihim, and from themselves, turns the argument on the audience. Ibn Kathir glosses it as their being made male and female, and the Quran says as much directly: 53:45 speaks of the two mates, the male and the female, and 75:39 says He made of him the two mates, male and female. So the second source is not observed at a distance. The one being invited to glorify is himself half of an instance.",
            "bn": "'ওয়া মিন আনফুসিহিম' — আর তাদের নিজেদের মধ্য থেকে — যুক্তিটিকে শ্রোতার নিজের দিকেই ফিরিয়ে দেয়। ইবনে কাসীর এর ব্যাখ্যা করেন তাদের পুরুষ ও নারী হিসেবে সৃষ্টি হওয়া দিয়ে, আর কুরআন কথাটি সরাসরিও বলে: 53:45 আয়াত বলে তিনিই জোড়া সৃষ্টি করেন — পুরুষ ও নারী, আর 75:39 আয়াত বলে তিনি তা থেকে জুড়ি বানিয়েছেন, পুরুষ ও নারী। সুতরাং দ্বিতীয় উৎসটি দূর থেকে দেখা কিছু নয়। যাকে পবিত্রতা ঘোষণার আহ্বান জানানো হচ্ছে, সে নিজেই একটি দৃষ্টান্তের অর্ধেক।"
          }
        ]
      },
      {
        "h": {
          "en": "And From What They Do Not Know",
          "bn": "আর যা তারা জানে না"
        },
        "p": [
          {
            "en": "The third item is wa mimma la ya'lamun, and from what they do not know. It is placed in the same grammatical slot as the first two, as though it were a third region of creation, and Ibn Kathir glosses it as kinds of creation of which they know nothing. But read the wording closely. The ignorance is ascribed to the audience by a verb — la ya'lamun, they do not know — not to the things by an adjective.",
            "bn": "তৃতীয় বিষয়টি হলো 'ওয়া মিম্মা লা ইয়া'লামুন' — আর যা তারা জানে না। এটিকে বসানো হয়েছে প্রথম দুটির মতো একই ব্যাকরণগত জায়গায়, যেন এটি সৃষ্টির তৃতীয় একটি এলাকা; আর ইবনে কাসীর এর ব্যাখ্যা করেন এমন সব সৃষ্টি হিসেবে যাদের সম্পর্কে তারা কিছুই জানে না। কিন্তু শব্দচয়নটি মনোযোগ দিয়ে পড়ুন। অজ্ঞতাটি একটি ক্রিয়াপদ দিয়ে শ্রোতাদের উপর আরোপ করা হয়েছে — 'লা ইয়া'লামুন', তারা জানে না — বিশেষণ দিয়ে বস্তুগুলোর উপর নয়।"
          },
          {
            "en": "That is a real difference. The verse does not say there are pairs which are unknowable; it says there are pairs you do not know about. So the third item is not a gap left in the sentence for someone to fill in later and claim a point. It is a statement about the knowers, written into a declaration of glory by the One who does not share the limitation, and it stands whatever the state of anyone's learning.",
            "bn": "এটি সত্যিকারের একটি পার্থক্য। আয়াত বলে না যে এমন জোড়া আছে যা জানা অসম্ভব; বলে যে এমন জোড়া আছে যেগুলো সম্পর্কে তোমরা জানো না। সুতরাং তৃতীয় বিষয়টি বাক্যের ভেতরে ফেলে রাখা এমন কোনো ফাঁক নয় যা পরে কেউ ভরাট করে কৃতিত্ব দাবি করবে। এটি জ্ঞানীদের সম্পর্কে একটি বিবৃতি, যা মহিমার ঘোষণার ভেতরে লিখে দিয়েছেন তিনি, যাঁর মধ্যে সেই সীমাবদ্ধতা নেই — আর কারও জ্ঞানের অবস্থা যেমনই হোক, কথাটি দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Category That Only Widens",
          "bn": "যে শ্রেণিটি কেবল প্রশস্ত হয়"
        },
        "p": [
          {
            "en": "Whatever anyone comes to know moves out of the third item and into one of the first two, and yet the third does not shrink by the transfer. It was never a list with a length, and the more of creation a person learns to name, the wider the unnamed remainder opens in front of him. 17:44 does the same work with a different subject: there is not a thing that does not exalt Him with praise — but you do not understand their exalting.",
            "bn": "কেউ যা-ই জানতে পারুক, তা তৃতীয় বিষয়টি থেকে সরে গিয়ে প্রথম দুটির একটিতে ঢুকে পড়ে; তবু এই স্থানান্তরে তৃতীয়টি ছোট হয় না। এটি কখনোই দৈর্ঘ্যওয়ালা কোনো তালিকা ছিল না, আর সৃষ্টির যত বেশি জিনিসকে মানুষ নাম দিতে শেখে, নাম না-পাওয়া অবশিষ্টটুকু তার সামনে তত প্রশস্ত হয়ে খোলে। 17:44 আয়াত ভিন্ন বিষয় নিয়ে একই কাজ করে: এমন কোনো বস্তু নেই যা প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করে না — কিন্তু তোমরা তাদের সেই তাসবীহ বোঝো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Begins With Subhan",
          "bn": "কেন শুরু হয় 'সুবহান' দিয়ে"
        },
        "p": [
          {
            "en": "Subhana is glorification: a declaration that He is far above every deficiency. The verse puts it first, before any of the three sources, so the conclusion is spoken before the evidence. That order is why the third source can be admitted without embarrassment. A person whose response to creation is an inventory needs the inventory finished; a person whose response is tasbih does not, and can say aloud that part of the list is closed to him.",
            "bn": "'সুবহানা' মানে পবিত্রতা ঘোষণা: এই ঘোষণা যে তিনি সব ত্রুটির অনেক ঊর্ধ্বে। আয়াতটি একে বসায় সবার আগে, তিনটি উৎসের কোনোটির আগেই — ফলে সিদ্ধান্তটি বলা হয় প্রমাণের আগে। এই ক্রমটির কারণেই তৃতীয় উৎসটিকে কোনো অস্বস্তি ছাড়াই স্বীকার করে নেওয়া যায়। সৃষ্টির প্রতি যার প্রতিক্রিয়া একটি তালিকা, তার সেই তালিকা সম্পূর্ণ হওয়া দরকার; যার প্রতিক্রিয়া তাসবীহ, তার তা দরকার নেই — সে মুখ ফুটে বলতে পারে যে তালিকার একটি অংশ তার কাছে বন্ধ।"
          }
        ]
      }
    ]
  },
  "36:82": {
    "sections": [
      {
        "h": {
          "en": "The Close of Ya-Sin's Argument",
          "bn": "ইয়াসীনের যুক্তির সমাপ্তি"
        },
        "p": [
          {
            "en": "This verse is the summit of the argument that closes Surah Ya-Sin. 36:77-79 sets the scene: man, created from a drop, stands disputing with his Maker, striking a parable and forgetting his own creation — who will give life to bones when they have crumbled? The books of tafsir relate that a denier of resurrection came to the Prophet ﷺ crushing an old bone and scattering its dust as he asked exactly that.",
            "bn": "এই আয়াতটি সূরা ইয়াসীনের সমাপ্তি-যুক্তির চূড়া। 36:77-79 দৃশ্যটি সাজায়: এক বিন্দু থেকে সৃষ্ট মানুষ নিজের স্রষ্টার সঙ্গে বিতর্কে দাঁড়িয়ে, উপমা ছুড়ছে আর নিজের সৃষ্টির কথাই ভুলে গেছে — হাড়গুলো চূর্ণ হয়ে গেলে কে সেগুলোকে জীবন দেবে? তাফসীরের কিতাবসমূহ বর্ণনা করে, পুনরুত্থান-অস্বীকারকারী এক ব্যক্তি নবী ﷺ-এর কাছে এসেছিল একটি পুরোনো হাড় গুঁড়িয়ে তার ধুলো ছড়াতে ছড়াতে, ঠিক এই প্রশ্নটিই করতে করতে।"
          },
          {
            "en": "The answer given is a method as much as a reply: say, He will give them life who produced them the first time, and He is Knowing of all creation. Restoring is not harder than originating — and the Originator has already been demonstrated by every body in the room. From there the surah widens the evidence, fire from the green tree, the creation of the heavens, until it arrives at this verse's summary of His power.",
            "bn": "প্রদত্ত উত্তরটি জবাব যতটা, পদ্ধতিও ততটাই: বলুন, তিনিই সেগুলোকে জীবন দেবেন যিনি প্রথমবার সেগুলো সৃষ্টি করেছেন, আর তিনি সকল সৃষ্টি সম্পর্কে সম্যক জ্ঞাত। ফিরিয়ে আনা প্রথমবার বানানোর চেয়ে কঠিন নয় — আর প্রথম নির্মাতার প্রমাণ তো ঘরের প্রতিটি দেহই দিয়ে রেখেছে। সেখান থেকে সূরাটি প্রমাণ আরও প্রশস্ত করে — সবুজ গাছ থেকে আগুন, আসমানসমূহের সৃষ্টি — যতক্ষণ না পৌঁছায় তাঁর ক্ষমতার এই আয়াত-সারাংশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kun fa-Yakun",
          "bn": "কুন ফা-ইয়াকুন"
        },
        "p": [
          {
            "en": "Innama amruhu — His command is only — when He intends a thing, that He says to it: Be, and it is. The restriction particle innama does the work: this is the whole of it. No struggle, no materials gathered, no interval in which the outcome hangs uncertain. The commentators are careful on one point: the wording does not mean He needs speech as a tool, the way we need hands; it expresses how completely reality answers His intent — instantly, without resistance or delay.",
            "bn": "ইন্নামা আমরুহু — তাঁর ব্যাপার তো কেবল এই — তিনি যখন কিছু করতে চান, তখন তাকে বলেন: হও, আর তা হয়ে যায়। সীমাবদ্ধকরণ শব্দ ইন্নামা-ই কাজটি করে: এটুকুই সব। কোনো সংগ্রাম নেই, কোনো উপকরণ জোগাড় নেই, এমন কোনো বিরতি নেই যাতে ফলাফল অনিশ্চিত ঝুলে থাকে। মুফাসসিরগণ একটি বিষয়ে সতর্ক: এই ভাষার অর্থ এই নয় যে হাতিয়ার হিসেবে তাঁর বাক্যের প্রয়োজন, যেমন আমাদের হাতের প্রয়োজন; এটি প্রকাশ করে বাস্তবতা তাঁর ইচ্ছায় কত সম্পূর্ণভাবে সাড়া দেয় — তাৎক্ষণিক, কোনো প্রতিরোধ বা বিলম্ব ছাড়া।"
          },
          {
            "en": "Between His will and its object there is nothing that could intervene: no rival power, as 2:163 has already established there is none, no shortage, no fatigue — the same freedom from weariness 2:255 attaches to His preserving of the heavens and the earth. Difficulty is a relation between a task and limited strength. Where strength has no limit, the category of difficult simply does not apply.",
            "bn": "তাঁর ইচ্ছা ও তার লক্ষ্যবস্তুর মাঝখানে হস্তক্ষেপ করার মতো কিছুই নেই: কোনো প্রতিদ্বন্দ্বী শক্তি নেই — 2:163 আগেই প্রতিষ্ঠা করেছে যে নেই — কোনো ঘাটতি নেই, কোনো ক্লান্তি নেই — সেই একই ক্লান্তিহীনতা যা 2:255 যুক্ত করে আসমান-যমীনের রক্ষণাবেক্ষণে। কঠিন হওয়া হলো কাজ ও সীমিত শক্তির মধ্যকার এক সম্পর্ক। যেখানে শক্তির কোনো সীমা নেই, সেখানে কঠিনের শ্রেণিটিই আর প্রযোজ্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else the Word Sounds",
          "bn": "আর যেখানে বাণীটি ধ্বনিত"
        },
        "p": [
          {
            "en": "Kun fa-yakun recurs across the Quran, and its placements are a study in themselves. 2:117 attaches it to the origination of the heavens and the earth. 3:47 answers Maryam's astonishment at bearing a child untouched; 3:59 levels Isa (AS) and Adam (AS) — created from dust, then Be, and he was; 19:35 refuses the notion of a son for Allah by it; 40:68 attaches it to giving life and dealing death.",
            "bn": "কুন ফা-ইয়াকুন কুরআনজুড়ে ফিরে ফিরে আসে, আর এর অবস্থানগুলো নিজেই এক অধ্যয়নের বিষয়। 2:117 একে যুক্ত করে আসমান-যমীনের সূচনার সঙ্গে। 3:47 উত্তর দেয় মারইয়ামের বিস্ময়ের — স্পর্শ ছাড়া সন্তান ধারণের প্রশ্নে; 3:59 ঈসা (আঃ) ও আদম (আঃ)-কে সমান করে দেয় — মাটি থেকে সৃষ্টি, তারপর হও, আর তিনি হয়ে গেলেন; 19:35 এরই জোরে আল্লাহর পুত্রের ধারণা প্রত্যাখ্যান করে; 40:68 একে যুক্ত করে জীবন দান ও মৃত্যু ঘটানোর সঙ্গে।"
          },
          {
            "en": "The pattern is consistent: the phrase appears precisely where human beings say impossible — a universe from nothing, a child without a father, the dead raised. Each time the Quran declines to argue the impossibility on our terms and instead corrects the frame: you are measuring by the strength of creatures. Measured by His command, none of these cases is even distinct from the others; all are one word.",
            "bn": "ধরনটি সামঞ্জস্যপূর্ণ: বাক্যাংশটি আসে ঠিক সেখানে, যেখানে মানুষ বলে অসম্ভব — শূন্য থেকে মহাবিশ্ব, পিতা ছাড়া সন্তান, মৃতের পুনরুত্থান। প্রতিবার কুরআন আমাদের শর্তে অসম্ভবতা নিয়ে তর্ক করতে অস্বীকার করে এবং বরং কাঠামোটাই সংশোধন করে: তোমরা মাপছ সৃষ্টির শক্তি দিয়ে। তাঁর নির্দেশ দিয়ে মাপলে এই ঘটনাগুলোর কোনোটি অন্যগুলো থেকে আলাদাও নয়; সবই একটিমাত্র কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Kingdom in His Hand",
          "bn": "তাঁর হাতে সব রাজত্ব"
        },
        "p": [
          {
            "en": "The surah's final verse, 36:83, completes the thought: so exalted is He in whose hand is the malakut — the dominion, the inner sovereignty — of every thing, and to Him you will be returned. Power alone might only awe us; the return makes it personal. The One whose word suffices for anything is also the One before whom every life ends up standing, so His effortless power is not a spectacle but our destination.",
            "bn": "সূরার শেষ আয়াত 36:83 ভাবনাটি সম্পূর্ণ করে: অতএব পবিত্র ও মহান তিনি, যাঁর হাতে প্রতিটি জিনিসের মালাকূত — কর্তৃত্ব, অন্তর্গত সার্বভৌমত্ব — আর তাঁরই কাছে তোমাদের ফিরিয়ে নেওয়া হবে। কেবল ক্ষমতা হয়তো আমাদের শুধু স্তম্ভিতই করত; প্রত্যাবর্তন একে ব্যক্তিগত করে তোলে। যাঁর একটি কথাই যেকোনো কিছুর জন্য যথেষ্ট, তিনিই সেই সত্তা যাঁর সামনে প্রতিটি জীবন শেষ পর্যন্ত দাঁড়ায় — তাই তাঁর অনায়াস ক্ষমতা কোনো প্রদর্শনী নয়, আমাদের গন্তব্য।"
          },
          {
            "en": "Ya-Sin thus closes by joining the two certainties the surah argued from its opening scenes: He can, and we will return. Resurrection stops being a puzzle about scattered bones — the surah has dissolved that with the first creation, the green tree and the word Be — and becomes instead a scheduled appointment with the Owner of everything, for which the only sensible preparation is deeds.",
            "bn": "ইয়াসীন তাই শেষ হয় দুটি নিশ্চয়তাকে জুড়ে দিয়ে, যেগুলোর পক্ষে সূরাটি তার শুরুর দৃশ্যগুলো থেকে যুক্তি সাজিয়েছে: তিনি পারেন, আর আমরা ফিরব। পুনরুত্থান তখন আর ছড়ানো হাড় নিয়ে কোনো ধাঁধা থাকে না — প্রথম সৃষ্টি, সবুজ গাছ আর হও শব্দটি দিয়ে সূরা তা গলিয়ে দিয়েছে — বরং হয়ে ওঠে সবকিছুর মালিকের সঙ্গে এক নির্ধারিত সাক্ষাৎ, যার একমাত্র বুদ্ধিমান প্রস্তুতি আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Effortless for Him, Weighty for Us",
          "bn": "তাঁর জন্য সহজ, আমাদের জন্য গুরুভার"
        },
        "p": [
          {
            "en": "Hold the two scales apart and the verse becomes practical. On His side, nothing is heavy: not your provision, not the guidance of a hardened relative, not the mending of what looks finished. On our side, deeds are weighed and days are counted precisely because outcomes are not ours to speak into being. We were given effort, patience and du'a — the creaturely instruments — and He kept Be for Himself.",
            "bn": "দুটি পাল্লা আলাদা করে ধরুন — আয়াতটি ব্যবহারিক হয়ে ওঠে। তাঁর দিকে কিছুই ভারী নয়: আপনার রিযিক নয়, কঠিন হয়ে যাওয়া কোনো আত্মীয়ের হিদায়াত নয়, শেষ দেখানো কোনো কিছুর জোড়া লাগাও নয়। আমাদের দিকে আমল ওজন করা হয় আর দিন গোনা হয় ঠিক এ কারণেই যে, ফলাফল মুখের কথায় ঘটিয়ে ফেলা আমাদের কাজ নয়। আমাদের দেওয়া হয়েছে প্রচেষ্টা, ধৈর্য ও দোয়া — সৃষ্টির হাতিয়ার — আর হও তিনি রেখেছেন নিজের জন্য।"
          },
          {
            "en": "This division answers both despair and presumption. Despair says the situation is impossible; the verse replies that impossible describes your strength, not His command. Presumption says it will happen because I have arranged it; 18:23-24 has already corrected that grammar — nothing happens except by His will. Between the two corrections stands the believer: working as if effort matters, asking as if only He decides, because both are true.",
            "bn": "এই ভাগাভাগি হতাশা ও দাম্ভিকতা দুটিরই জবাব দেয়। হতাশা বলে পরিস্থিতি অসম্ভব; আয়াত উত্তর দেয়: অসম্ভব শব্দটি তোমার শক্তির বর্ণনা, তাঁর নির্দেশের নয়। দাম্ভিকতা বলে এটি ঘটবেই কারণ আমি সব সাজিয়ে রেখেছি; 18:23-24 আগেই সেই ভাষাভঙ্গি সংশোধন করেছে — তাঁর ইচ্ছা ছাড়া কিছুই ঘটে না। দুই সংশোধনের মাঝখানে দাঁড়িয়ে মুমিন: কাজ করে যেন প্রচেষ্টার মূল্য আছে, চায় যেন সিদ্ধান্ত কেবল তাঁরই — কারণ দুটিই সত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Boldly",
          "bn": "সাহস করে চাওয়া"
        },
        "p": [
          {
            "en": "The practical fruit is boldness in du'a. People trim their prayers to what seems achievable, as if sparing Allah embarrassment; the verse exposes the courtesy as bad theology. Ask for the whole need — the cure, the reconciliation, the guidance of the person everyone has given up on — because the One being asked does not scale His answers to plausibility. He says Be.",
            "bn": "ব্যবহারিক ফল — দোয়ায় সাহস। মানুষ নিজের প্রার্থনা ছেঁটে নেয় যা অর্জনযোগ্য মনে হয় তাতে, যেন আল্লাহকে বিব্রত হওয়া থেকে বাঁচাচ্ছে; আয়াতটি এই সৌজন্যকে ভুল আকীদা বলে উন্মোচন করে। পুরো প্রয়োজনটাই চান — আরোগ্য, মীমাংসা, সেই মানুষটির হিদায়াত যার আশা সবাই ছেড়ে দিয়েছে — কারণ যাঁর কাছে চাওয়া হচ্ছে তিনি নিজের জবাব সম্ভাব্যতার মাপে ছোট করেন না। তিনি বলেন: হও।"
          },
          {
            "en": "And let the same word steady you when His decree runs against your wishes. What He willed happened by a word, and what He withheld was withheld with the same total ease — meaning neither was an accident, an oversight or a failure of resources. The heart that absorbs 36:82 stops negotiating with imagined obstacles and deals directly, in trust and asking, with the One whose command is only Be, and it is.",
            "bn": "আর তাঁর ফয়সালা যখন আপনার ইচ্ছার বিপরীতে চলে, তখন একই শব্দকে আপনাকে স্থির রাখতে দিন। তিনি যা চেয়েছেন তা ঘটেছে এক কথায়, আর যা আটকে রেখেছেন তা আটকানো হয়েছে সেই একই পূর্ণ অনায়াসে — অর্থাৎ কোনোটিই দুর্ঘটনা নয়, অসাবধানতা নয়, সামর্থ্যের ঘাটতিও নয়। যে হৃদয় 36:82 আত্মস্থ করে, সে কাল্পনিক বাধার সঙ্গে দর-কষাকষি থামিয়ে দেয় এবং ভরসা ও চাওয়া নিয়ে সরাসরি লেনদেন করে তাঁর সঙ্গে — যাঁর নির্দেশ কেবল: হও, আর তা হয়ে যায়।"
          }
        ]
      }
    ]
  }
});
