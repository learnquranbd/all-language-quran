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
  "50:23": {
    "sections": [
      {
        "h": {
          "en": "Six Words at the Gathering",
          "bn": "হাশরের মাঠে ছয়টি শব্দ"
        },
        "p": [
          {
            "en": "Wa qala qarinuhu hadha ma ladayya 'atid: and his companion will say, this is what is with me, ready. The verse has six Arabic words, and it arrives at a precise moment in the scene. Just before it, 50:21 says that every soul will come with a driver and a witness, and 50:22 tells a person that the cover over him has been lifted and his sight is sharp today. Now the companion who came with him speaks, and what he says is short.",
            "bn": "ওয়া কালা কারীনুহু হাযা মা লাদাইয়া আতীদ: আর তার সঙ্গী বলবে, এই যে আমার কাছে যা আছে, প্রস্তুত। আরবীতে আয়াতটি মাত্র ছয়টি শব্দের। দৃশ্যের ঠিক একটা নির্দিষ্ট মুহূর্তে এর আগমন। এর আগে ৫০:২১ বলেছে, প্রত্যেক প্রাণ আসবে একজন চালক আর একজন সাক্ষী সঙ্গে নিয়ে। তারপর ৫০:২২ মানুষটিকে জানিয়েছে, তার চোখের পর্দা সরিয়ে দেওয়া হয়েছে, আজ তার দৃষ্টি তীক্ষ্ণ। এবার কথা বলে সেই সঙ্গী, যে তার সঙ্গে এসেছে। তার কথা খুব সংক্ষিপ্ত।"
          },
          {
            "en": "The English abridgement of Ibn Kathir heads this passage with the words: the angel will bear witness. That is the verse's work in the surah, testimony given at the moment of arrival. This article stays with these six words. What follows in 50:24 and after belongs to its own verses and is not developed here. The verse raises two questions, and the commentators answer each of them in several ways: who is the companion, and what exactly is it that he has ready?",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এই অংশের শিরোনাম দিয়েছে: ফেরেশতা সাক্ষ্য দেবে। সূরার ভেতরে আয়াতটির কাজ এটাই, হাজির হওয়ার মুহূর্তে সাক্ষ্য। এ লেখা এই ছয়টি শব্দের মধ্যেই থাকবে। ৫০:২৪ ও তার পরের আয়াতগুলোর আলোচনা তাদের নিজেদের জায়গায়, এখানে তা টানা হবে না। আয়াতটি দুটি প্রশ্ন তোলে, আর তাফসীরকারেরা দুটিরই জবাব দেন নানাভাবে। সঙ্গীটি কে? আর তার কাছে প্রস্তুত জিনিসটা আসলে কী?"
          }
        ]
      },
      {
        "h": {
          "en": "The Angel Set Over Him",
          "bn": "যে ফেরেশতা তার দায়িত্বে"
        },
        "p": [
          {
            "en": "Most of the fetched commentators identify the qarin as an angel. At-Tabari reports from Qatadah, on this verse, a single word: the angel. Al-Qurtubi gives the angel entrusted with the person, al-malak al-muwakkal bihi, as the saying of al-Hasan, Qatadah and ad-Dahhak, and al-Baghawi opens with the same phrase. The Muyassar is more specific: the writing angel who is a witness against him. Ibn Kathir says Allah is telling of the angel entrusted with the deeds of the son of Adam, who will testify against him on the Day of Resurrection to what he did.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার বেশিরভাগই কারীন বলতে ফেরেশতা বোঝায়। তাবারী এ আয়াতে কাতাদা থেকে একটিমাত্র শব্দ বর্ণনা করেন: ফেরেশতা। কুরতুবী বলেন, সে হলো মানুষটির দায়িত্বে নিযুক্ত ফেরেশতা, আল-মালাকুল মুওয়াক্কালু বিহী। এটাকে তিনি হাসান, কাতাদা ও দাহহাকের মত বলে উল্লেখ করেন। বাগাভীও শুরু করেন ঠিক এই কথা দিয়ে। মুয়াসসার আরও নির্দিষ্ট করে বলে: সেই লেখক ফেরেশতা, যে তার বিরুদ্ধে সাক্ষী। ইবন কাসীর বলেন, আল্লাহ এখানে সেই ফেরেশতার খবর দিচ্ছেন যাকে আদমসন্তানের আমলের দায়িত্ব দেওয়া হয়েছে। কিয়ামতের দিন সে তার কৃতকর্মের ব্যাপারে তার বিরুদ্ধে সাক্ষ্য দেবে।"
          },
          {
            "en": "As-Sa'di widens the angel's charge. The companion, he says, is from the angels whom Allah entrusted with guarding the person and guarding his deeds; he brings him on the Day of Resurrection, brings his deeds, and speaks. Ma'arif al-Qur'an calls the qarin the recording angel who accompanies a person all the time, and recalls that two angels record deeds. On its reading the two are given different tasks on the Day: one drives people to the place of gathering, and the other carries the record of deeds and speaks these words.",
            "bn": "সা'দী ফেরেশতার দায়িত্বকে আরও বিস্তৃত করে দেখেন। তাঁর মতে এই সঙ্গী সেই ফেরেশতাদের একজন, যাদের আল্লাহ মানুষটিকে হেফাজত করার এবং তার আমল সংরক্ষণের ভার দিয়েছেন। কিয়ামতের দিন সে তাকে হাজির করবে, তার আমলও হাজির করবে, তারপর এ কথা বলবে। মাআরিফুল কুরআনের মতে কারীন সেই লেখক ফেরেশতা, যে সব সময় মানুষের সঙ্গে থাকে। সেখানে মনে করিয়ে দেওয়া হয়েছে, আমল লেখেন দুজন ফেরেশতা। সেদিন দুজনের কাজ হবে আলাদা। একজন মানুষকে হাঁকিয়ে নেবে হাশরের মাঠের দিকে। অন্যজন বহন করবে আমলনামা, আর এই কথাগুলো বলবে সে-ই।"
          }
        ]
      },
      {
        "h": {
          "en": "Driver, Witness, or Both",
          "bn": "চালক, সাক্ষী, নাকি দুজনই"
        },
        "p": [
          {
            "en": "A second line of reports makes the speaker the driver. At-Tabari cites Ibn Zayd: this is his driver, who was entrusted with him, and Ibn Zayd then recited 50:21, every soul will come with a driver and a witness. Ibn Kathir brings Mujahid to the same effect: these are the words of the driving angel, who says, this is the son of Adam You entrusted to me; I have brought him. On this reading the companion is the escort whose duty was to deliver the person, and he announces that the duty is done.",
            "bn": "আরেক ধারার বর্ণনায় বক্তা হলো চালক ফেরেশতা। তাবারী ইবন যায়দের কথা উদ্ধৃত করেন: এ তার চালক, যাকে তার দায়িত্ব দেওয়া হয়েছিল। এরপর ইবন যায়দ তিলাওয়াত করেন ৫০:২১, প্রত্যেক প্রাণ আসবে একজন চালক আর একজন সাক্ষী নিয়ে। ইবন কাসীর মুজাহিদ থেকে একই অর্থের কথা আনেন: এ হলো হাঁকিয়ে আনা ফেরেশতার কথা। সে বলবে, এই সেই আদমসন্তান, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, আমি তাকে হাজির করেছি। এ ব্যাখ্যায় সঙ্গী হলো সেই পাহারাদার, যার কাজ ছিল মানুষটিকে পৌঁছে দেওয়া। কাজ শেষ, সে তা-ই ঘোষণা করছে।"
          },
          {
            "en": "At-Tabari's own gloss names both figures: the companion of this person, who comes on the Day of Resurrection with a driver and a witness alongside him. Ibn Kathir reports that Ibn Jarir, that is at-Tabari, chose to make the word cover both the driver and the witness, and adds that this view has a sound direction and strength. Ma'arif al-Qur'an reports the same of Ibn Jarir, next to its own reading that the speaker is the witness. These are different identifications, and this article sets them side by side without choosing among them.",
            "bn": "তাবারীর নিজের ব্যাখ্যায় দুজনেরই উল্লেখ আছে: এই মানুষটির সঙ্গী, যে কিয়ামতের দিন আসবে সঙ্গে চালক ও সাক্ষী নিয়ে। ইবন কাসীর জানান, ইবন জারীর, অর্থাৎ তাবারী, শব্দটিকে চালক ও সাক্ষী দুজনের জন্যই ব্যাপক ধরেছেন। ইবন কাসীর সঙ্গে এও বলেন, এ মতের পেছনে যুক্তি আছে, জোরও আছে। মাআরিফুল কুরআনও ইবন জারীরের এই মত উল্লেখ করে, যদিও তার নিজের ব্যাখ্যায় বক্তা হলো সাক্ষী ফেরেশতা। পরিচয় নিয়ে এগুলো ভিন্ন ভিন্ন মত। এ লেখা এগুলোকে পাশাপাশি রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          },
          {
            "en": "What the readings share is the voice of a commission completed. In Mujahid's wording, as Ibn Kathir, al-Qurtubi and al-Baghawi all give it, the companion says: this is the one You entrusted to me, wakkaltani. As-Sa'di has him say: I have brought what I was set over. In at-Tabari, Ibn Zayd calls the driver the one who was entrusted with him. Whoever the companion is, he speaks as an appointed agent reporting back to the One who appointed him.",
            "bn": "সব ব্যাখ্যায় একটা জিনিস মেলে: দায়িত্ব শেষ করে জবাবদিহির সুর। ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই মুজাহিদের যে ভাষ্য আনেন, তাতে সঙ্গী বলে: এই সেই মানুষ, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, ওয়াক্কালতানী। সা'দীর ভাষ্যে সে বলে: যার ভার আমাকে দেওয়া হয়েছিল, তা আমি হাজির করেছি। তাবারী ইবন যায়দের যে বর্ণনা আনেন, তাতে চালক সেই, যাকে মানুষটির দায়িত্ব দেওয়া হয়েছিল। সঙ্গী যে-ই হোক, সে কথা বলে নিযুক্ত প্রতিনিধির মতো, যিনি নিয়োগ দিয়েছেন তাঁর কাছে হিসাব বুঝিয়ে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report That Names Shaytan",
          "bn": "যে বর্ণনায় শয়তানের কথা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records something further. After giving Mujahid's reading, in which the companion brings the person and the register of his deeds, he adds: and from Mujahid also, his companion is the one assigned to him from among the devils. So a single authority is reported with both identifications, and al-Qurtubi preserves the second without weighing it. This matters because the same word, qarinuhu, returns four verses later, in 50:27, where the companion says: our Lord, I did not make him transgress.",
            "bn": "কুরতুবী আরও একটি কথা লিখে রাখেন। মুজাহিদের যে ব্যাখ্যায় সঙ্গী মানুষটিকে আর তার আমলের খাতা হাজির করে, তা উল্লেখ করার পর তিনি যোগ করেন: মুজাহিদ থেকে এও বর্ণিত, তার সঙ্গী হলো শয়তানদের মধ্য থেকে তার জন্য নিযুক্ত করা সঙ্গী। তাহলে একই ব্যক্তি থেকে দুই রকম পরিচয়ই বর্ণিত হয়েছে। দ্বিতীয়টিকে কুরতুবী কোনো মূল্যায়ন ছাড়াই রেখে দেন। কথাটা গুরুত্বপূর্ণ, কারণ কারীনুহু শব্দটি চারটি আয়াত পরে ৫০:২৭-এ আবার আসে। সেখানে সঙ্গী বলে: হে আমাদের রব, আমি তাকে সীমালঙ্ঘনে ঠেলে দিইনি।"
          },
          {
            "en": "Ibn Kathir's English abridgement, on 50:27, says that companion is the devil entrusted to every man, according to 'Abdullah ibn 'Abbas, Mujahid, Qatadah and several others. By that reading, two companions stand in view within a few verses: an angel who speaks in 50:23 and a devil who speaks in 50:27. Apart from the report al-Qurtubi preserves, every commentary fetched on 50:23 speaks of an angel here. This article records both reports as they stand and does not decide which companion speaks in this verse.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫০:২৭-এর আলোচনায় বলে, সেখানকার সঙ্গী হলো সেই শয়তান, যাকে প্রত্যেক মানুষের সঙ্গে লাগিয়ে দেওয়া হয়েছে। এ মত আবদুল্লাহ ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও আরও অনেকের। এ পাঠ ধরলে অল্প কয়েক আয়াতের মধ্যে দুজন সঙ্গী চোখে পড়ে: ৫০:২৩-এ কথা বলে একজন ফেরেশতা, আর ৫০:২৭-এ একজন শয়তান। কুরতুবীর রেখে দেওয়া ওই বর্ণনাটি বাদ দিলে, ৫০:২৩-এর যত তাফসীর দেখা হয়েছে, সবগুলোই এখানে ফেরেশতার কথা বলে। এ লেখা দুটি বর্ণনাই যেমন আছে তেমন রাখছে। এ আয়াতে কোন সঙ্গী কথা বলছে, সে ফয়সালা এখানে করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Record or the Man",
          "bn": "আমলনামা, নাকি মানুষটি নিজে"
        },
        "p": [
          {
            "en": "The second question is the phrase ma ladayya, what is with me. Several readings make it the record. Al-Qurtubi glosses it as what I have of the writing of his deeds, prepared and preserved. The Muyassar gives what I have of the register of his deeds, diwan 'amalih. Ma'arif al-Qur'an translates with a bracket: this is what I have with me, ready to be presented as his record of deeds. At-Tabari's gloss leaves the object unnamed: this which is with me is prepared and kept.",
            "bn": "দ্বিতীয় প্রশ্ন মা লাদাইয়া কথাটি নিয়ে, অর্থাৎ আমার কাছে যা আছে। কয়েকটি ব্যাখ্যায় এর মানে আমলনামা। কুরতুবীর ব্যাখ্যা: তার আমলের যে লিখিত হিসাব আমার কাছে আছে, তা প্রস্তুত ও সংরক্ষিত। মুয়াসসার বলে: তার আমলের দফতর, দীওয়ানু আমালিহ, যা আমার কাছে আছে। মাআরিফুল কুরআন বন্ধনী দিয়ে অনুবাদ করে: আমার কাছে যা আছে, তা প্রস্তুত, তার আমলনামা হিসেবে পেশ করার জন্য। তাবারীর ব্যাখ্যায় জিনিসটির নাম নেই: আমার কাছে যা আছে, তা প্রস্তুত ও সংরক্ষিত।"
          },
          {
            "en": "Mujahid's report reads it as the person. In Ibn Kathir's wording the driver says: this is the son of Adam You entrusted to me; I have brought him. Al-Qurtubi and al-Baghawi give Mujahid with an addition: I have brought him, and brought the register of his deeds. Al-Baghawi also records a view, introduced with it is said, that ma here carries the sense of man, who, the word used for persons. As-Sa'di holds both together: I have brought what I was set over, guarding him and guarding his deeds.",
            "bn": "মুজাহিদের বর্ণনায় এর মানে মানুষটি নিজে। ইবন কাসীরের ভাষায় চালক বলবে: এই সেই আদমসন্তান, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, আমি তাকে হাজির করেছি। কুরতুবী ও বাগাভী মুজাহিদের কথা আনেন একটু বাড়তি অংশসহ: আমি তাকে হাজির করেছি, তার আমলের দফতরও হাজির করেছি। বাগাভী আরেকটি মতও উল্লেখ করেন, 'বলা হয়' দিয়ে শুরু করে: এখানে মা শব্দটি মান অর্থে, অর্থাৎ যে, যা ব্যক্তির জন্য ব্যবহৃত হয়। সা'দী দুটোকে একসঙ্গে ধরেন: যার ভার আমাকে দেওয়া হয়েছিল, তাকে আর তার আমলকে হেফাজত করা, তা আমি হাজির করেছি।"
          },
          {
            "en": "Al-Qurtubi adds a further reading under it is said, with no name attached: the meaning is, this is what I have of punishment, present. It sits apart from the others, and he gives it without comment. So the phrase has been read as a record, as a person, as both, and as punishment made ready. The texts fetched for this verse do not settle the matter, and this article does not settle it either.",
            "bn": "কুরতুবী 'বলা হয়' দিয়ে আরও একটি ব্যাখ্যা যোগ করেন, কারও নাম ছাড়া: অর্থ হলো, আমার কাছে যে শাস্তি আছে, তা হাজির। ব্যাখ্যাটি বাকিগুলো থেকে আলাদা, আর তিনি এ নিয়ে কোনো মন্তব্য করেন না। তাহলে কথাটির পাঠ দাঁড়াল চার রকম: আমলনামা, মানুষটি, দুটোই একসঙ্গে, আর প্রস্তুত শাস্তি। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, সেগুলো বিষয়টির মীমাংসা করে না। এ লেখাও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added, Nothing Missing",
          "bn": "বাড়তিও নেই, ঘাটতিও নেই"
        },
        "p": [
          {
            "en": "'Atid is the verse's last word, and the commentators gloss it with words of readiness. Al-Baghawi has mu'add muhdar, prepared and brought forward. The Muyassar has prepared, preserved and present. Ibn Kathir has mu'tad muhdar, then adds the phrase that gives the word its weight: bila ziyadah wa la nuqsan, without addition and without deficit. His English abridgement renders it as prepared and completed without addition or deletion. Nothing has been slipped in to make the account heavier, and nothing has fallen out to make it lighter.",
            "bn": "আতীদ আয়াতের শেষ শব্দ। তাফসীরকারেরা এর ব্যাখ্যা দেন প্রস্তুতির শব্দ দিয়ে। বাগাভী বলেন মুআদ্দ মুহদার, অর্থাৎ তৈরি করা এবং সামনে হাজির। মুয়াসসার বলে: প্রস্তুত, সংরক্ষিত, উপস্থিত। ইবন কাসীর বলেন মু'তাদ মুহদার, তারপর এমন একটি কথা যোগ করেন যা শব্দটিকে ভারী করে তোলে: বিলা যিয়াদাতিন ওয়া লা নুকসান, কিছু বাড়তি নেই, কিছু ঘাটতিও নেই। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: প্রস্তুত ও পূর্ণাঙ্গ, কিছু যোগও হয়নি, বাদও পড়েনি। হিসাব ভারী করতে কিছু ঢোকানো হয়নি, হালকা করতে কিছু খসেও পড়েনি।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari, reads 'atid of the person rather than a page: the person he has taken hold of, whom the driver and the guardian, al-hafiz, brought along together. That gloss keeps the person between his escorts at the moment of handing over. The other glosses keep to the record. Either way the word describes something finished, held ready, waiting only to be presented. The companion is not still gathering evidence when he speaks. Whatever he holds, the gathering was done before the Day began.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ আতীদ শব্দটিকে কাগজ নয়, মানুষটির ওপর প্রয়োগ করেন: যাকে সে ধরে এনেছে, যাকে চালক আর হাফিয, অর্থাৎ রক্ষক, দুজনে মিলে সঙ্গে করে নিয়ে এসেছে। এ ব্যাখ্যায় হস্তান্তরের মুহূর্তে মানুষটি থাকে তার দুই প্রহরীর মাঝখানে। বাকি ব্যাখ্যাগুলো আমলনামার দিকেই থাকে। যেভাবেই পড়া হোক, শব্দটি এমন কিছুর কথা বলে যা সম্পূর্ণ, প্রস্তুত, শুধু পেশ করার অপেক্ষায়। কথা বলার সময় সঙ্গী আর প্রমাণ জোগাড় করছে না। তার হাতে যা-ই থাকুক, জোগাড়ের কাজ সেদিন শুরুর আগেই শেষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Texts Stop",
          "bn": "তাফসীর যেখানে থেমে যায়"
        },
        "p": [
          {
            "en": "This is a scene from the unseen, and the article claims nothing about it beyond what the fetched tafsirs say. Who the companion is, what the record looks like and how it is handed over are known to us only through these words and the explanations quoted above. No fetched commentary attaches a hadith to this verse. Ibn Kathir's English abridgement does quote a narration from Imam Ahmad within the passage, but it is placed on the verses about those thrown into the Fire, not on 50:23, so it is not used here.",
            "bn": "এ দৃশ্য গায়েবের জগতের। ওপরে যেসব তাফসীর উদ্ধৃত হয়েছে, তার বাইরে এ লেখা এ নিয়ে কিছুই দাবি করে না। সঙ্গী কে, আমলনামা দেখতে কেমন, কীভাবে তা হস্তান্তর হয়, এসব আমরা জানি শুধু এই শব্দগুলো আর উদ্ধৃত ব্যাখ্যাগুলোর মাধ্যমে। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে এ অংশের ভেতরে ইমাম আহমাদের একটি বর্ণনা আছে ঠিকই। তবে সেটি রাখা হয়েছে জাহান্নামে নিক্ষিপ্তদের আয়াতগুলোর সঙ্গে, ৫০:২৩-এর সঙ্গে নয়। তাই এখানে তা আনা হয়নি।"
          },
          {
            "en": "As-Sa'di describes the man in this verse as hadha al-mukadhdhib al-mu'rid, this denier who turned away, and the verses after it pass sentence on a described type. That is what the text describes, on that Day, by Allah's own judgment. It licenses nothing against any living person or community, and gives no reader the place of the companion who testifies. The verse is better read as a mirror. In 50:21 every soul comes with a driver and a witness, and every soul includes the reader.",
            "bn": "সা'দী এ আয়াতের মানুষটিকে বলেছেন হাযাল মুকাযযিবুল মু'রিদ, অর্থাৎ এই অস্বীকারকারী, যে মুখ ফিরিয়ে নিয়েছিল। পরের আয়াতগুলো এমন বৈশিষ্ট্যের মানুষের ওপর রায় শোনায়। সেটা সেদিনের কথা, আল্লাহর নিজের বিচারে, যেমন আয়াতে বলা আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কোনো পাঠককে সাক্ষ্যদাতা সঙ্গীর আসনেও বসায় না। আয়াতটি বরং আয়না হিসেবে পড়াই ভালো। ৫০:২১ বলছে, প্রত্যেক প্রাণ আসবে চালক আর সাক্ষী নিয়ে। সেই প্রত্যেকের মধ্যে পাঠকও আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Filling the File Today",
          "bn": "আজকের পাতা আজই"
        },
        "p": [
          {
            "en": "Read from this side of the Day, the verse turns a future scene into a present fact. On most of the readings above, something is being kept now, by a companion who is with the person, and it will be presented without addition and without deficit. That cuts both ways. Nothing good will be lost from it, however small or unseen by others. Nothing hidden will be missing from it either. The question the verse leaves is not really about the angel. It is about what is being handed to him, day by day.",
            "bn": "দুনিয়ার এই পাড় থেকে পড়লে আয়াতটি ভবিষ্যতের একটি দৃশ্যকে বর্তমানের সত্যে পরিণত করে। ওপরের বেশিরভাগ ব্যাখ্যা অনুযায়ী, কিছু একটা এখনই সংরক্ষিত হচ্ছে, মানুষের সঙ্গে থাকা এক সঙ্গীর হাতে। আর তা পেশ হবে কোনো বাড়তি বা ঘাটতি ছাড়া। কথাটা দুই দিকেই খাটে। কোনো নেক আমল সেখান থেকে হারাবে না, যত ছোটই হোক, যত লোকচক্ষুর আড়ালেই হোক। আবার লুকানো কিছুও সেখান থেকে বাদ পড়বে না। আয়াতটি তাই আসলে ফেরেশতাকে নিয়ে প্রশ্ন রেখে যায় না। প্রশ্ন রেখে যায়, দিনের পর দিন আমরা তার হাতে কী তুলে দিচ্ছি।"
          },
          {
            "en": "A practical habit follows from this. Before sleep, ask what today added to the file: words spoken, duties met or missed, kindness given or held back. What was wrong can still be met with tawbah and with repair while the record is open, and what was good can be quietly continued tomorrow. Readiness is the companion's word in the verse, and it can become the reader's word too: to live so that whatever is presented, by whichever companion, is something a person would be content to see.",
            "bn": "এখান থেকে একটা সহজ অভ্যাস তৈরি হয়। ঘুমানোর আগে নিজেকে জিজ্ঞেস করুন, আজ খাতায় কী যোগ হলো। কোন কথা বলেছি, কোন দায়িত্ব পালন করেছি বা এড়িয়ে গেছি, কোথায় দয়া দেখিয়েছি আর কোথায় হাত গুটিয়ে রেখেছি। খাতা যতক্ষণ খোলা, ভুলের জবাব তওবা দিয়ে আর ক্ষতিপূরণ দিয়ে দেওয়া যায়। আর ভালো যা হয়েছে, কাল চুপচাপ তা চালিয়ে যাওয়া যায়। আয়াতে প্রস্তুতি সঙ্গীর শব্দ, তা পাঠকেরও শব্দ হয়ে উঠতে পারে। এমনভাবে বাঁচা, যাতে যে-ই পেশ করুক, যা পেশ হবে তা দেখে মানুষ খুশি হতে পারে।"
          },
          {
            "en": "The companion's own conduct offers a second lesson. He returns what he was given charge of, complete, and says so plainly. Each of us has been handed things to keep in the same way: a family, a task at work, a promise, a secret, a portion of wealth. The verse pictures a trust delivered without addition and without deficit. That is a fair measure for our own trusts as well, long before anyone asks us to account for them.",
            "bn": "সঙ্গীর নিজের আচরণেও আরেকটা শিক্ষা আছে। যার দায়িত্ব তাকে দেওয়া হয়েছিল, তা সে পুরোপুরি ফিরিয়ে দেয়, আর সোজাসুজি তা বলেও দেয়। আমাদের প্রত্যেকের হাতেও এভাবে কিছু না কিছু আমানত রাখা আছে: পরিবার, কাজের দায়িত্ব, কোনো ওয়াদা, কারও গোপন কথা, কিছু সম্পদ। আয়াতটি এমন এক আমানতের ছবি আঁকে, যা ফেরত যায় কোনো বাড়তি বা ঘাটতি ছাড়া। কেউ হিসাব চাওয়ার অনেক আগেই নিজের আমানতগুলোকে এই মাপকাঠিতে মেপে দেখা যায়।"
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
