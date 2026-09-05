/**
 * Tadabbur long-form articles — surah 50.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "50:16": {
    "sections": [
      {
        "h": {
          "en": "A Turn Inward in Surah Qaf",
          "bn": "সূরা কাফে ভেতরের দিকে মোড়"
        },
        "p": [
          {
            "en": "Surah Qaf answers people who found resurrection unbelievable: when we have become dust, they asked, is that a far-fetched return? The surah first points outward — 50:6-8 tell the doubter to look at the sky, how it was built without flaw, and at the earth and its growing pairs. Then, at this verse, the argument turns inward, from the horizons to the reader's own chest: We created man, and We know what his soul whispers to him.",
            "bn": "সূরা কাফ তাদের উত্তর দেয় যারা পুনরুত্থানকে অবিশ্বাস্য মনে করত: তারা প্রশ্ন করত, আমরা মাটি হয়ে গেলে সেই প্রত্যাবর্তন কি সুদূরপরাহত নয়? সূরাটি প্রথমে বাইরের দিকে ইশারা করে — 50:6-8 সন্দেহকারীকে বলে আকাশের দিকে তাকাতে, কীভাবে তা নিখুঁতভাবে নির্মিত, আর যমীন ও তার উদ্গত জোড়াগুলোর দিকে। তারপর এই আয়াতে যুক্তি ভেতরের দিকে মোড় নেয় — দিগন্ত থেকে পাঠকের নিজের বুকে: আমরা মানুষকে সৃষ্টি করেছি, এবং তার প্রাণ তাকে যা কুমন্ত্রণা দেয় তা আমরা জানি।"
          },
          {
            "en": "The logic is tight. The One who made a thing knows it through and through, so re-making it is no difficulty, and nothing inside it is hidden from Him. The verse joins creation and knowledge in a single breath so that neither can be believed without the other. Whoever accepts that Allah created him has already conceded that Allah knows him better than he knows himself.",
            "bn": "যুক্তিটি নিরেট। যিনি কোনো কিছু বানিয়েছেন তিনি তা আগাগোড়া জানেন; কাজেই তা পুনরায় বানানো তাঁর জন্য কঠিন নয়, আর তার ভেতরের কিছুই তাঁর কাছে গোপন নয়। আয়াতটি সৃষ্টি ও জ্ঞানকে এক নিঃশ্বাসে জুড়ে দেয়, যেন একটিকে না মেনে অন্যটি মানা না যায়। যে স্বীকার করে আল্লাহ তাকে সৃষ্টি করেছেন, সে আসলে মেনেই নিয়েছে যে আল্লাহ তাকে তার নিজের চেয়েও ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whisper of the Soul",
          "bn": "প্রাণের কুমন্ত্রণা"
        },
        "p": [
          {
            "en": "Tuwaswisu bihi nafsuhu — what his own soul whispers to him. Waswasah is the lowest register of inner speech: not a decision, not even a formed thought, but the murmur that passes through before a person has chosen anything. The verse claims knowledge at that depth. Plans never spoken, resentments never shown, hopes too embarrassing to admit — all of it lies open before Him at the stage where we ourselves barely notice it.",
            "bn": "তুওয়াসউইসু বিহি নাফসুহু — তার নিজের প্রাণ তাকে যা কুমন্ত্রণা দেয়। ওয়াসওয়াসা হলো ভেতরের কথার সবচেয়ে নিচু স্তর: কোনো সিদ্ধান্ত নয়, এমনকি গড়ে ওঠা কোনো ভাবনাও নয় — মানুষ কিছু বেছে নেওয়ার আগেই যে গুঞ্জন ভেতর দিয়ে বয়ে যায়, সেটিই। আয়াতটি সেই গভীরতার জ্ঞান দাবি করে। কখনো মুখে না আনা পরিকল্পনা, কখনো প্রকাশ না করা ক্ষোভ, স্বীকার করতে লজ্জা লাগে এমন আশা — সবই তাঁর সামনে খোলা, এমন স্তরে যেখানে আমরা নিজেরাও তা টেরই পাই না।"
          },
          {
            "en": "The Prophet ﷺ told his community something merciful about this same layer: Allah has overlooked for my ummah what their souls whisper, so long as they do not act on it or speak it. The report is agreed upon in al-Bukhari and Muslim. So the whisper is fully known but not held against us while it stays a whisper. Knowledge this complete, paired with pardon this wide, is the verse's first surprise.",
            "bn": "নবী ﷺ এই স্তরটি নিয়েই তাঁর উম্মতকে এক দয়ার্দ্র কথা বলেছেন: আল্লাহ আমার উম্মতের প্রাণ যা কুমন্ত্রণা দেয় তা উপেক্ষা করেছেন — যতক্ষণ না তারা সে অনুযায়ী কাজ করে বা মুখে বলে। বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। অর্থাৎ কুমন্ত্রণা পুরোপুরি জানা, কিন্তু যতক্ষণ তা কুমন্ত্রণাই থেকে যায় ততক্ষণ আমাদের বিরুদ্ধে ধরা হয় না। এমন পূর্ণ জ্ঞানের সঙ্গে এমন প্রশস্ত ক্ষমার জুটিই আয়াতের প্রথম বিস্ময়।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearer Than the Jugular Vein",
          "bn": "ঘাড়ের শিরার চেয়েও নিকটে"
        },
        "p": [
          {
            "en": "We are nearer to him than his habl al-warid, the vein of the neck that carries his life. The image is chosen for intimacy: nothing is closer to a person's survival than that vessel, and Allah declares Himself closer still. The commentators explain this as nearness of knowledge and power — He is above His Throne, exalted as He described Himself, yet nothing about His servant is distant from Him. Some also connect the nearness to the recording angels the next verse introduces.",
            "bn": "আমরা তার হাবলুল-ওয়ারীদের চেয়েও তার নিকটে — ঘাড়ের সেই শিরা, যা তার জীবন বহন করে। ঘনিষ্ঠতা বোঝাতেই এই উপমা: মানুষের বেঁচে থাকার সঙ্গে ওই রক্তনালীর চেয়ে ঘনিষ্ঠ আর কিছু নেই, অথচ আল্লাহ নিজেকে তার চেয়েও নিকটবর্তী ঘোষণা করেন। মুফাসসিরগণ এর ব্যাখ্যা করেন জ্ঞান ও ক্ষমতার নৈকট্য হিসেবে — তিনি তাঁর আরশের ওপরে, যেভাবে তিনি নিজের বর্ণনা দিয়েছেন সেভাবেই সমুন্নত; তবু তাঁর বান্দার কোনো কিছুই তাঁর থেকে দূরে নয়। কেউ কেউ এই নৈকট্যকে পরের আয়াতে আসা লেখক ফেরেশতাদের সঙ্গেও যুক্ত করেন।"
          },
          {
            "en": "The Quran states this nearness elsewhere without imagery: He is with you wherever you are, as 57:4 says, and when My servants ask about Me, I am near, as 2:186 says. Read together, the verses build one fact from three angles — there is no unobserved moment, and also no unaccompanied one. The same closeness that makes sin impossible to hide makes du'a impossible to lose.",
            "bn": "কুরআন এই নৈকট্য অন্যত্র উপমা ছাড়াই বলেছে: তোমরা যেখানেই থাকো তিনি তোমাদের সঙ্গে আছেন — যেমন 57:4 বলে; আর আমার বান্দারা আমার সম্পর্কে জিজ্ঞেস করলে, আমি তো নিকটেই — যেমন 2:186 বলে। একসঙ্গে পড়লে আয়াতগুলো তিন দিক থেকে একটিই সত্য দাঁড় করায় — নজরের বাইরে কোনো মুহূর্ত নেই, আবার সঙ্গীহীন কোনো মুহূর্তও নেই। যে নৈকট্যের কারণে গুনাহ লুকানো অসম্ভব, সেই একই নৈকট্যের কারণে দোয়া হারিয়ে যাওয়াও অসম্ভব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Watcher Standing Ready",
          "bn": "প্রস্তুত পর্যবেক্ষক"
        },
        "p": [
          {
            "en": "The passage does not stop at inner knowledge. The verses that follow, 50:17-18, describe two receivers seated on the right and the left, and declare that not a word is uttered without a watcher standing ready beside the speaker. Divine knowledge needed no scribes; the record is kept for our sake, so that on the Day of Judgment no one can claim the account was invented. Speech, the layer above the whisper, is written as it leaves the lips.",
            "bn": "অনুচ্ছেদটি ভেতরের জ্ঞানে থেমে থাকে না। পরের আয়াতগুলো, 50:17-18, ডানে ও বামে বসা দুই গ্রহণকারীর বর্ণনা দেয় এবং ঘোষণা করে যে এমন একটি শব্দও উচ্চারিত হয় না যার পাশে প্রস্তুত পর্যবেক্ষক নেই। আল্লাহর জ্ঞানের জন্য কোনো লেখকের দরকার ছিল না; নথিটি রাখা হয় আমাদেরই জন্য, যেন কিয়ামতের দিন কেউ দাবি করতে না পারে যে হিসাবটি বানানো। কথা — কুমন্ত্রণার ওপরের স্তরটি — ঠোঁট ছাড়ার সঙ্গে সঙ্গেই লেখা হয়ে যায়।"
          },
          {
            "en": "This ordering carries a practical mercy. Between the whisper, which is overlooked, and the spoken word, which is recorded, stands a checkpoint that belongs to us. The moment before speaking is the moment the verse trains us to notice. A believer who has absorbed 50:16 and 50:18 together develops a small habitual pause at exactly that border, because it is the border between what is forgiven freely and what enters the book.",
            "bn": "এই ক্রমবিন্যাসে এক ব্যবহারিক রহমত আছে। যে কুমন্ত্রণা উপেক্ষিত হয় আর যে উচ্চারিত শব্দ লিপিবদ্ধ হয় — এ দুয়ের মাঝখানে একটি তল্লাশিচৌকি আছে, যা আমাদের হাতে। কথা বলার আগের মুহূর্তটিই সেই মুহূর্ত, যা লক্ষ করতে আয়াতটি আমাদের প্রশিক্ষণ দেয়। যে মুমিন 50:16 ও 50:18 একসঙ্গে আত্মস্থ করেছে, ঠিক ওই সীমান্তে তার একটি ছোট অভ্যাসগত বিরতি তৈরি হয় — কারণ ওটাই সেই সীমান্ত, যার একপাশ বিনা হিসাবে ক্ষমা করা হয় আর অন্যপাশ খাতায় ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe and Comfort in One Verse",
          "bn": "এক আয়াতে ভয় ও সান্ত্বনা"
        },
        "p": [
          {
            "en": "The verse reads differently depending on the state of the one reading it. To a person contemplating a hidden wrong, it is pure awe: the plan is already known, nearer than the vein that feeds the brain. To a person carrying a grief no one around them understands, it is pure comfort: the ache never had to be explained, because the One nearest of all watched it form. Both readings are correct, and each of us needs both on different days.",
            "bn": "পাঠকের অবস্থাভেদে আয়াতটি ভিন্নভাবে ধরা দেয়। যে ব্যক্তি গোপন কোনো অন্যায়ের কথা ভাবছে, তার কাছে এটি নিখাদ ভয়: পরিকল্পনাটি আগেই জানা হয়ে গেছে — মস্তিষ্কে রক্ত পৌঁছানো শিরার চেয়েও নিকটে যিনি, তাঁর কাছে। আর যে ব্যক্তি এমন কষ্ট বইছে যা আশপাশের কেউ বোঝে না, তার কাছে এটি নিখাদ সান্ত্বনা: ব্যথাটা কখনো বুঝিয়ে বলার দরকারই ছিল না, কারণ সবার চেয়ে নিকটবর্তী সত্তা তা তৈরি হতে দেখেছেন। দুটি পাঠই সঠিক, আর ভিন্ন ভিন্ন দিনে আমাদের প্রত্যেকের দুটিই লাগে।"
          },
          {
            "en": "The lived shape of the verse is honesty in du'a. If He already knows the whisper, then polished wording and presentable versions of ourselves are unnecessary in front of Him; the prayer can start from the true state, however unimpressive. And in solitude, the verse replaces the feeling of being unobserved with the feeling of being accompanied — which restrains the hand from what is hidden and steadies the heart in what is hard.",
            "bn": "আয়াতটির জীবনরূপ হলো দোয়ায় সততা। তিনি যদি কুমন্ত্রণাটাই আগে থেকে জানেন, তবে তাঁর সামনে ঘষামাজা শব্দ আর নিজেদের পরিপাটি সংস্করণ অপ্রয়োজনীয়; দোয়া শুরু হতে পারে প্রকৃত অবস্থা থেকেই — তা যত সাদামাটাই হোক। আর নির্জনতায় আয়াতটি 'কেউ দেখছে না' অনুভূতির জায়গায় বসায় 'কেউ সঙ্গে আছেন' অনুভূতি — যা গোপন কাজ থেকে হাত টেনে রাখে এবং কঠিন সময়ে হৃদয়কে স্থির রাখে।"
          }
        ]
      }
    ]
  },
  "50:37": {
    "sections": [
      {
        "h": {
          "en": "What That Points Back To",
          "bn": "'এতে' বলতে কী বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "Inna fi dhalika la-dhikra, indeed in that is a reminder. The demonstrative points backwards, and 50:36 is what it points at: how many a generation We destroyed before them who were greater than them in striking power and had explored throughout the lands, and is there any place of escape? The reminder on offer is not an argument. It is a record, and the surah has just finished reading it out.",
            "bn": "'ইন্না ফী যালিকা লাযিকরা' — নিশ্চয়ই এতে উপদেশ রয়েছে। নির্দেশক শব্দটি পেছনের দিকে ইঙ্গিত করে, আর যেদিকে ইঙ্গিত করে তা হলো 50:36: তাদের আগে আমি কত প্রজন্মকে ধ্বংস করেছি, যারা শক্তিতে তাদের চেয়ে প্রবল ছিল আর দেশে দেশে চষে বেড়িয়েছিল — পালানোর কোনো জায়গা কি ছিল? যে উপদেশটি দেওয়া হচ্ছে তা কোনো যুক্তি নয়। এটি একটি নথি, আর সূরাটি সবে তা পড়ে শোনানো শেষ করেছে।"
          },
          {
            "en": "Just before that record stands 50:35, where those in the Garden have whatever they wish and with Us is more. Surah Qaf is arguing for the resurrection its opponents called a far-fetched return, and it argues by evidence: the sky, the earth, the interior of a man, and now the ruins of people who were stronger than the audience being addressed. Then it names the one condition under which evidence works at all.",
            "bn": "সেই নথিটির ঠিক আগে দাঁড়িয়ে আছে 50:35, যেখানে জান্নাতবাসীরা যা চাইবে তা-ই পাবে, আর আমার কাছে আরও আছে। সূরা কাফ সেই পুনরুত্থানের পক্ষে যুক্তি দিচ্ছে যাকে তার বিরোধীরা বলেছিল এক অসম্ভব প্রত্যাবর্তন; আর যুক্তি দিচ্ছে প্রমাণ দিয়ে: আকাশ, যমীন, মানুষের ভেতরটা, আর এখন সেই জাতিদের ধ্বংসাবশেষ যারা শ্রোতাদের চেয়ে শক্তিশালী ছিল। তারপরই সে বলে দেয়, প্রমাণ কেবল কোন একটি শর্তেই কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Has a Heart",
          "bn": "যার একটি অন্তর আছে"
        },
        "p": [
          {
            "en": "Liman kana lahu qalbun, for whoever has a heart. Every listener has one, so the phrase must mean something other than the organ, and the mufassirun say so directly. Al-Muyassar reads it as a heart with which he reasons. Tafsir Ahsanul Bayaan reads it as an awake and alert heart, one that reflects and takes in what is actually there. Having a heart, in this idiom, is a condition that some people fail.",
            "bn": "'লিমান কানা লাহু কলবুন' — যার একটি অন্তর আছে তার জন্য। প্রত্যেক শ্রোতারই তো একটি আছে, তাই কথাটির অর্থ নিশ্চয়ই দেহযন্ত্রটি নয়; আর মুফাসসিরগণ সরাসরি সে কথাই বলেন। তাফসীর মুয়াসসার এটিকে পড়ে এমন অন্তর হিসেবে যা দিয়ে সে বোঝে। তাফসীর আহসানুল বায়ান পড়ে জাগ্রত ও সচেতন অন্তর হিসেবে, যা চিন্তা করে এবং প্রকৃত ব্যাপারটি ধরে নেয়। এই বাগ্‌ধারায় 'অন্তর থাকা' এমন একটি শর্ত, যাতে কেউ কেউ উত্তীর্ণ হয় না।"
          },
          {
            "en": "22:46 states the same thing without the idiom: it is not the eyes that go blind, but the hearts within the breasts. That verse reaches its conclusion by asking whether they have not travelled the earth, which is the very activity 50:36 attributes to the destroyed generations, who had explored throughout the lands and still found no escape. Movement is not the qualification. The organ that has to be working is the one inside.",
            "bn": "22:46 একই কথা বলে বাগ্‌ধারা ছাড়াই: চোখ অন্ধ হয় না, বরং বুকের ভেতরের অন্তরগুলোই অন্ধ হয়। সেই আয়াত তার সিদ্ধান্তে পৌঁছায় এই প্রশ্ন করে যে তারা কি যমীনে ভ্রমণ করে না — আর সেই কাজটিই 50:36 ধ্বংসপ্রাপ্ত প্রজন্মগুলোর সম্পর্কে বলে, যারা দেশে দেশে চষে বেড়িয়েছিল তবু পালানোর জায়গা পায়নি। চলাফেরা যোগ্যতা নয়। যে যন্ত্রটি সচল থাকা দরকার, সেটি ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Casting the Hearing",
          "bn": "শ্রবণ নিক্ষেপ করা"
        },
        "p": [
          {
            "en": "The second condition is aw alqa as-sam', literally: or cast the hearing. Alqa is the verb used for throwing a thing down deliberately, the same verb 37:97 uses of throwing a man into a fire. The Quran does not say or heard, and it does not say or was listening. It says that a person takes his hearing and throws it at the speaker. Attention here is an act performed, not a state a listener happens to be in.",
            "bn": "দ্বিতীয় শর্তটি হলো 'আও আলকাস সাম' — আক্ষরিক অর্থে: অথবা শ্রবণ নিক্ষেপ করল। 'আলকা' সেই ক্রিয়া যা ইচ্ছাকৃতভাবে কিছু ছুঁড়ে ফেলা বোঝায়; 37:97-এ একজন মানুষকে আগুনে নিক্ষেপ করার ক্ষেত্রেও এই ক্রিয়াই ব্যবহৃত হয়েছে। কুরআন বলে না 'অথবা শুনল', বলে না 'অথবা শুনছিল'। বলে যে মানুষটি নিজের শ্রবণশক্তি নিয়ে বক্তার দিকে ছুঁড়ে দেয়। এখানে মনোযোগ একটি সম্পাদিত কাজ, শ্রোতার কোনো এমনি এমনি হয়ে যাওয়া অবস্থা নয়।"
          },
          {
            "en": "Al-Muyassar renders the phrase as inclining the ear, and the shift is worth keeping in view. Sound arrives at everyone in the room without anyone deciding anything; hearing directed at a particular speaker is a decision one of them makes. The verse is therefore not describing two levels of intelligence and setting a bar. It is describing two ways of being present, and both of them are open to anyone willing to do something.",
            "bn": "তাফসীর মুয়াসসার কথাটিকে অনুবাদ করে কান লাগানো হিসেবে, আর এই পরিবর্তনটি চোখে রাখার মতো। শব্দ ঘরের সবার কাছেই পৌঁছায়, তার জন্য কাউকে কিছু সিদ্ধান্ত নিতে হয় না; কিন্তু কোনো নির্দিষ্ট বক্তার দিকে শ্রবণ তাক করা তাদেরই একজনের নেওয়া সিদ্ধান্ত। তাই আয়াতটি দুই স্তরের বুদ্ধিমত্তার বর্ণনা দিয়ে কোনো মানদণ্ড বসাচ্ছে না। এটি উপস্থিত থাকার দুটি ধরনের বর্ণনা দিচ্ছে, আর দুটোই যে কারও জন্য খোলা, যদি সে কিছু করতে রাজি থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "And He Is Shahid",
          "bn": "আর সে শাহিদ"
        },
        "p": [
          {
            "en": "The clause that follows the listening is wa huwa shahid, and he is a witness, or present. The classical readings run in three directions and they do not exclude one another. Al-Muyassar takes it as being present with his heart, neither heedless nor distracted. The app's English follows that line, rendering the phrase as listening while he is present in mind. Others take shahid as being present at the recitation itself.",
            "bn": "শ্রবণের পরের বাক্যাংশটি হলো 'ওয়া হুয়া শাহিদ' — আর সে সাক্ষী, অথবা উপস্থিত। ধ্রুপদী ব্যাখ্যাগুলো তিন দিকে যায়, আর একটি অন্যটিকে বাতিল করে না। তাফসীর মুয়াসসার এটিকে বোঝে অন্তর দিয়ে উপস্থিত থাকা হিসেবে — উদাসীনও নয়, অন্যমনস্কও নয়। অ্যাপের ইংরেজি অনুবাদ সেই ধারাই অনুসরণ করে, কথাটিকে অনুবাদ করে 'মনে উপস্থিত থেকে শোনা' হিসেবে। কেউ কেউ 'শাহিদ' বলতে বোঝেন তিলাওয়াতের আসরে উপস্থিত থাকা।"
          },
          {
            "en": "A third reading takes the word in its ordinary sense of a witness, one who attests to the truth of what he is hearing. All three describe the same failure from different sides, a man whose ears are in the room while his attention is elsewhere. Tafsir Ahsanul Bayaan puts the reason bluntly: one who does not take in what is said might as well not have been there at all.",
            "bn": "তৃতীয় ব্যাখ্যাটি শব্দটিকে তার সাধারণ অর্থেই নেয় — সাক্ষী, অর্থাৎ যে শুনছে তার সত্যতার সাক্ষ্য দেয়। তিনটি ব্যাখ্যাই একই ব্যর্থতাকে ভিন্ন ভিন্ন দিক থেকে বর্ণনা করে: এমন এক মানুষ, যার কান ঘরের ভেতরে আর মনোযোগ অন্য কোথাও। তাফসীর আহসানুল বায়ান কারণটি সোজাসুজি বলে দেয়: যে কথাটাই বুঝল না, তার উপস্থিত থাকা আর না থাকা সমান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah's Other Heart",
          "bn": "সূরার আরেকটি অন্তর"
        },
        "p": [
          {
            "en": "Surah Qaf mentions the heart twice in this stretch, and the two places explain each other. At 50:33 the one entering the Garden is described as having feared ar-Rahman in the unseen and come with qalbin munib, a heart that keeps turning back. Four verses later, a heart that can receive a reminder is the qualification for benefiting from one. The returning heart and the receiving heart are the same organ described at two moments.",
            "bn": "সূরা কাফ এই অংশে অন্তরের কথা দুবার বলে, আর দুটি জায়গা পরস্পরকে ব্যাখ্যা করে। 50:33-এ জান্নাতে প্রবেশকারীর বর্ণনা এই যে সে না দেখে রহমানকে ভয় করেছে এবং এসেছে 'কলবিম মুনীব' নিয়ে — এমন অন্তর যা বারবার ফিরে আসে। চার আয়াত পরে, উপদেশ গ্রহণ করতে পারে এমন অন্তরই উপদেশ থেকে উপকৃত হওয়ার যোগ্যতা। ফিরে আসা অন্তর আর গ্রহণ করা অন্তর — একই যন্ত্র, দুই মুহূর্তে বর্ণিত।"
          },
          {
            "en": "The practical instruction sits in the verse's own verbs, and it is unusually concrete. Reminders are not scarce; presence is. Before reading, do the thing the verse names: throw your hearing at it, and be in the room. Two verses on, 50:39 tells the Prophet ﷺ to be patient with what they say and to glorify his Lord before the rising of the sun and before its setting, which is where a gathered attention gets spent.",
            "bn": "ব্যবহারিক নির্দেশটি আয়াতের নিজের ক্রিয়াপদগুলোতেই বসে আছে, আর তা অস্বাভাবিক রকম বাস্তব। উপদেশের অভাব নেই; অভাব উপস্থিতির। পড়ার আগে আয়াতটি যে কাজের নাম বলে সেটিই করুন: আপনার শ্রবণকে তার দিকে ছুঁড়ে দিন, আর ঘরের ভেতরে থাকুন। দুই আয়াত পরে 50:39 নবী ﷺ-কে বলে, তারা যা বলে তাতে ধৈর্য ধরতে এবং সূর্যোদয়ের আগে ও সূর্যাস্তের আগে প্রতিপালকের প্রশংসা ও পবিত্রতা ঘোষণা করতে — একত্র করা মনোযোগ সেখানেই ব্যয় হয়।"
          }
        ]
      }
    ]
  }
});
