/**
 * Tadabbur long-form articles — surah 62.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "62:1": {
    "sections": [
      {
        "h": {
          "en": "Yusabbihu, in the Present",
          "bn": "ইউসাব্বিহু: চলমান কালে"
        },
        "p": [
          {
            "en": "The surah opens with a verb, and the tense of that verb is the first thing to notice. 62:1 says yusabbihu, an imperfect form that reports something ongoing and unfinished. Several other surahs open with the same statement in the perfect: 57:1, 59:1 and 61:1 all begin sabbaha, it has glorified. 64:1 uses the imperfect, as here. The choice is not decorative.",
            "bn": "সূরাটি শুরু হয়েছে একটি ক্রিয়া দিয়ে, আর প্রথমেই খেয়াল করার বিষয় সেই ক্রিয়ার কাল। ৬২:১ বলছে ইউসাব্বিহু। এটি মুদারি রূপ, অর্থাৎ এমন কাল যা জানায় কাজটি চলছে, এখনো শেষ হয়নি। আরও কয়েকটি সূরা একই কথা দিয়ে শুরু হয়েছে, তবে মাজি বা অতীত রূপে: ৫৭:১, ৫৯:১ ও ৬১:১ তিনটিরই শুরু সাব্বাহা দিয়ে, অর্থাৎ তাসবীহ করেছে। ৬৪:১ এখানকার মতোই মুদারি রূপ নিয়েছে। এই বাছাই শুধু সৌন্দর্যের জন্য নয়।"
          },
          {
            "en": "Read as an ongoing present, the sentence describes something happening at the moment it is read and still happening after the reader has put the page down. Tasbih here is not an event that took place at creation and was recorded. It is the current condition of everything that exists, running whether or not any human being is awake to it.",
            "bn": "চলমান বর্তমান হিসেবে পড়লে বাক্যটি এমন কিছুর কথা বলছে, যা আপনি পড়ার মুহূর্তেও ঘটছে, আর পাতা বন্ধ করার পরেও ঘটতে থাকবে। এখানে তাসবীহ এমন কোনো ঘটনা নয়, যা সৃষ্টির সময় একবার ঘটেছিল আর লিখে রাখা হয়েছে। যা কিছু আছে, তার সবকিছুর এ হলো এই মুহূর্তের অবস্থা। কোনো মানুষ সে বিষয়ে সজাগ থাকুক বা না থাকুক, তা চলছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Whatever Is in Them",
          "bn": "আসমান ও যমীনে যা কিছু আছে"
        },
        "p": [
          {
            "en": "The subject is ma fi as-samawati wa ma fi al-ard, whatever is in the heavens and whatever is on the earth. Ma is the widest word available, sweeping in what has been named and catalogued along with everything that has not. 17:44 states the same thing and then adds the part that stops a reader: there is not a thing that does not exalt Him with praise, but you do not understand their exalting. The limitation named there is in us, not in them.",
            "bn": "বাক্যের কর্তা মা ফিস-সামাওয়াতি ওয়া মা ফিল-আরদ: আসমানে যা কিছু আছে আর যমীনে যা কিছু আছে। 'মা' এখানে সবচেয়ে ব্যাপক শব্দ। আমরা যেসবের নাম দিয়েছি, তালিকা করেছি, সেগুলো তো এর ভেতরে আছেই; যেসবের নাম কেউ জানে না, সেগুলোও আছে। ১৭:৪৪ আয়াতও একই কথা বলে, তারপর এমন একটি কথা যোগ করে যেখানে পাঠককে থামতে হয়: এমন কিছুই নেই যা তাঁর প্রশংসাসহ তাঁর তাসবীহ করে না, কিন্তু তোমরা তাদের তাসবীহ বুঝতে পার না। সেখানে যে সীমাবদ্ধতার কথা, তা আমাদের, তাদের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Names in Two Pairs",
          "bn": "দুই জোড়ায় চারটি নাম"
        },
        "p": [
          {
            "en": "Four names follow. Al-Malik is the Sovereign, the one whose command actually runs, not merely an owner of property. Al-Quddus is the utterly pure, free of every defect and every deficiency, and it belongs here more tightly than the others: to make tasbih of something is precisely to declare it free of imperfection, so this name states what the whole opening verb is doing.",
            "bn": "এরপর চারটি নাম। আল-মালিক মানে সার্বভৌম অধিপতি, যাঁর হুকুম সত্যিই চলে; তিনি শুধু কোনো সম্পত্তির মালিক নন। আল-কুদ্দূস মানে পরম পবিত্র, সব দোষ আর সব ঘাটতি থেকে মুক্ত। এই নামটি এখানে অন্যগুলোর চেয়েও বেশি মানানসই। কারণ কোনো কিছুর তাসবীহ করা মানেই তাকে সব অপূর্ণতা থেকে মুক্ত বলে ঘোষণা করা। শুরুর ক্রিয়াটি কী করছে, এই একটি নামেই তা বলা হয়ে যায়।"
          },
          {
            "en": "Then al-Aziz and al-Hakim, the Mighty and the Wise, a pair the Quran joins constantly. Might without wisdom would be raw force, and wisdom without might would be good judgement that cannot act. Held together they describe power that always knows what it is doing. Set the two pairs side by side and the verse gives a sovereignty that is pure and a strength that is wise, which is precisely the description that makes glorification the reasonable response rather than a required one.",
            "bn": "তারপর আল-আযীয ও আল-হাকীম, মহাপরাক্রমশালী ও প্রজ্ঞাময়। কুরআন এই দুটি নাম বারবার একসঙ্গে আনে। প্রজ্ঞা ছাড়া শক্তি হতো নিছক গায়ের জোর; আর শক্তি ছাড়া প্রজ্ঞা হতো এমন সুবিবেচনা, যা কিছুই করতে পারে না। দুটি মিলে এমন ক্ষমতার কথা বলে, যা সবসময় জানে সে কী করছে। দুই জোড়া পাশাপাশি রাখলে আয়াতে পাওয়া যায় পবিত্র এক সার্বভৌমত্ব আর প্রজ্ঞাময় এক শক্তি। ঠিক এই পরিচয়ের কারণেই তাসবীহ আর চাপিয়ে দেওয়া দায় থাকে না, হয়ে ওঠে যুক্তিসংগত সাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Why This Surah Starts Here",
          "bn": "সূরাটি কেন এখান থেকে শুরু"
        },
        "p": [
          {
            "en": "The verse is doing structural work. 62:2 moves straight to the Messenger sent among the unlettered, reciting the verses, purifying them and teaching them the Book and wisdom. 62:9 gives the Friday command: when the call is made for the prayer on the day of Jumu'ah, hurry to the remembrance of Allah and leave off trade. The surah is building toward a congregation.",
            "bn": "এ আয়াত সূরার কাঠামোতে একটা কাজ করছে। ৬২:২ সোজা চলে যায় সেই রাসূলের কথায়, যাঁকে নিরক্ষরদের মধ্যে পাঠানো হয়েছে। তিনি তাদের আয়াত পড়ে শোনান, তাদের পরিশুদ্ধ করেন, আর কিতাব ও হিকমত শেখান। ৬২:৯ দেয় জুমার হুকুম: জুমার দিন যখন নামাজের জন্য ডাকা হয়, তখন আল্লাহর জিকিরের দিকে দ্রুত চলো, আর কেনাবেচা ছেড়ে দাও। সূরাটি ধাপে ধাপে একটি জামাতের দিকে এগোচ্ছে।"
          },
          {
            "en": "And then 62:11 records what actually happened: when they saw a transaction or a diversion they rushed to it and left the Prophet ﷺ standing. Al-Bukhari narrates from Jabir ibn Abdullah (RA) that a caravan arrived while they were praying with the Prophet ﷺ and the people went out to it until twelve men were left. Set that against the opening verse and the surah's shape appears: the universe has not once broken off its worship, and a congregation broke off its own for a caravan.",
            "bn": "তারপর ৬২:১১ জানিয়ে দেয় বাস্তবে কী ঘটেছিল: তারা যখন ব্যবসা বা খেল-তামাশা দেখল, সেদিকে ছুটে গেল, আর নবী ﷺ-কে দাঁড়ানো অবস্থায় রেখে গেল। ইমাম বুখারী জাবির ইবনে আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেছেন: তাঁরা নবী ﷺ-এর সঙ্গে নামাজে ছিলেন, এমন সময় একটি বাণিজ্য-কাফেলা এসে পৌঁছাল। লোকজন সেদিকে বেরিয়ে গেল, শেষে রইলেন মাত্র বারোজন। এ ঘটনা শুরুর আয়াতের পাশে রাখলে সূরার নকশাটা স্পষ্ট হয়: গোটা জগৎ একবারের জন্যও তার ইবাদত থামায়নি, অথচ একটি জামাত একটা কাফেলার জন্য নিজের ইবাদত থামিয়ে দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining What Is Already Underway",
          "bn": "যা আগে থেকেই চলছে, তাতে শামিল হওয়া"
        },
        "p": [
          {
            "en": "24:41 makes the same point with an image: do you not see that Allah is exalted by whoever is in the heavens and the earth, and by the birds with wings spread, each one knowing its own prayer and its own way of exalting Him. Every creature has been assigned a form of worship and keeps to it. The human being is the one creature that has to choose, and is therefore the one that can be out of step.",
            "bn": "২৪:৪১ একই কথা বলে একটি ছবি এঁকে: তুমি কি দেখ না, আসমান ও যমীনে যারা আছে তারা আল্লাহর তাসবীহ করে, আর ডানা মেলে ওড়া পাখিরাও? প্রত্যেকেই জানে তার নিজের সালাত আর নিজের তাসবীহের ধরন। আল্লাহ প্রতিটি সৃষ্টিকে ইবাদতের একটা ধরন দিয়ে দিয়েছেন, আর সে তাতেই লেগে আছে। মানুষই একমাত্র সৃষ্টি, যাকে বেছে নিতে হয়। তাই কেবল মানুষই তাল হারাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Getting Back in Step",
          "bn": "আবার তালে ফেরা"
        },
        "p": [
          {
            "en": "The practical consequence is a change of posture rather than a new task. You are not starting the praise; you are rejoining it, and everything around you has been keeping the rhythm while you were away. Say subhan Allah on the walk to work and it is not an addition to the world's noise but a return to what the world is already saying. And when Friday comes, 62:9 asks for the one deliberate act the verse has been preparing: leave the trade, and go.",
            "bn": "এর বাস্তব ফল নতুন কোনো কাজ নয়, বরং মনোভাবের বদল। প্রশংসা আপনি শুরু করছেন না, আবার তাতে যোগ দিচ্ছেন। আপনি যখন দূরে ছিলেন, তখনও চারপাশের সবকিছু তাল ধরে রেখেছে। কাজে যাওয়ার পথে সুবহানাল্লাহ বললে আপনি দুনিয়ার কোলাহলে নতুন কিছু যোগ করছেন না। দুনিয়া যা আগে থেকেই বলে চলেছে, তাতেই ফিরে আসছেন। আর জুমার দিন এলে ৬২:৯ সেই একটি সজ্ঞান কাজ চায়, যার জন্য আয়াতটি এতক্ষণ প্রস্তুত করছিল: কেনাবেচা ছাড়ো, আর চলো।"
          }
        ]
      }
    ]
  },
  "62:8": {
    "sections": [
      {
        "h": {
          "en": "The Second Command to Say",
          "bn": "দ্বিতীয়বার 'বলো'"
        },
        "p": [
          {
            "en": "Surah al-Jumu'ah is Medinan and has eleven verses. Two of them open with qul, say: 62:6 and this one. In 62:6 the Prophet ﷺ is told to say to those who claimed to be the allies of Allah to the exclusion of everyone else that they should wish for death, if they are truthful. 62:7 records the outcome: they will never wish for it, because of what their own hands have sent ahead.",
            "bn": "সূরা আল-জুমু'আহ মাদানী, আয়াত এগারোটি। এর দুটি আয়াত শুরু হয়েছে 'কুল' (বলো) দিয়ে: ৬২:৬ আর এই আয়াত। ৬২:৬ আয়াতে আল্লাহ নবী ﷺ-কে বলেছেন, যারা দাবি করত অন্য সবাইকে বাদ দিয়ে কেবল তারাই আল্লাহর বন্ধু, তাদের বলতে: তোমরা সত্যবাদী হলে মৃত্যু কামনা করো। ৬২:৭ জানিয়ে দেয় পরিণতি: তারা কখনোই তা কামনা করবে না, কারণ তাদের নিজেদের হাত যা আগে পাঠিয়েছে।"
          },
          {
            "en": "Then comes the third move, and it is the one that closes the argument. The challenge was rhetorical; nobody was expected to take it up. So this verse drops the challenge and states the fact underneath it. You will not wish for death, and death is not waiting on your wish. The refusal changes nothing about the appointment, and the passage has gone in three steps from a debating point to a certainty.",
            "bn": "এরপর আসে তৃতীয় ধাপ, আর এটাই যুক্তির ইতি টানে। চ্যালেঞ্জটা ছিল কথার কথা; কেউ তা গ্রহণ করবে, এমন আশা ছিল না। তাই এই আয়াত চ্যালেঞ্জের কথা ছেড়ে তার নিচের আসল সত্যটা বলে দেয়: তোমরা মৃত্যু কামনা করবে না, আর মৃত্যুও তোমাদের কামনার অপেক্ষায় বসে নেই। কামনা না করলেও নির্ধারিত সাক্ষাতের কিছুই বদলায় না। এভাবে তিন ধাপে অংশটি তর্কের একটি যুক্তি থেকে পৌঁছে গেছে নিশ্চিত সত্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mulaqikum: Who Meets Whom",
          "bn": "মুলাকীকুম: কে কার মুখোমুখি হয়"
        },
        "p": [
          {
            "en": "Inna al-mawta alladhi tafirruna minhu fa-innahu mulaqikum. The key word is an active participle, and death is its subject: it is meeting you. The verse does not say that you will meet death, which would leave the initiative with the person and make the meeting sound like an arrival at the end of a road. Here the moving party is death, and the person is the one being closed in on, whichever way he happens to be facing.",
            "bn": "ইন্নাল মাওতাল্লাযী তাফিররূনা মিনহু ফাইন্নাহু মুলাকীকুম। মূল শব্দটি ইসমে ফায়েল (কর্তাবাচক রূপ), আর তার কর্তা মৃত্যু: মৃত্যুই তোমাদের সঙ্গে সাক্ষাৎ করতে আসছে। আয়াতটি বলছে না যে তোমরা মৃত্যুর সঙ্গে সাক্ষাৎ করবে। তা বললে উদ্যোগ থাকত মানুষের হাতে, আর সাক্ষাৎটাকে মনে হতো পথের শেষে গিয়ে পৌঁছানো। এখানে এগিয়ে আসছে মৃত্যু। মানুষ যেদিকেই মুখ করে থাকুক, মৃত্যু তার দিকে ক্রমেই ঘনিয়ে আসছে।"
          },
          {
            "en": "The sentence is built for emphasis. Inna opens it, the fleeing is tucked inside a relative clause that merely describes the death in question, and then fa-innahu picks the subject up again with a second inna before the participle. The running is acknowledged and passed over in a subordinate clause. Everything the sentence stresses sits on the other side of it.",
            "bn": "বাক্যটির গঠনই জোর দেওয়ার জন্য। শুরু 'ইন্না' দিয়ে। পালানোর কথাটা ঢুকে আছে 'আল্লাযী' দিয়ে শুরু হওয়া একটি ছোট অংশে, যার কাজ শুধু কোন মৃত্যুর কথা হচ্ছে তা চিনিয়ে দেওয়া। তারপর 'ফাইন্নাহু' দ্বিতীয় একটি 'ইন্না' দিয়ে কর্তাকে আবার তুলে আনে, আর এরপরই আসে মুলাকীকুম। দৌড়ানোর কথা স্বীকার করা হয়েছে ঠিকই, কিন্তু ওই অধীন অংশেই সেরে ফেলা হয়েছে। বাক্যের সব জোর পড়েছে সেই অংশের বাইরে, অন্য পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Firar, and the One Flight That Works",
          "bn": "ফিরার, আর যে পালানো সত্যিই কাজে দেয়"
        },
        "p": [
          {
            "en": "Tafirruna comes from firar, the word used for a man who breaks and runs from a battle line. The Quran does not say the impulse is contemptible; it says the direction is impossible, because there is no bearing on which the distance grows. 4:78 makes the same point with a different verb, adding that death will overtake you even inside towers of lofty construction, and 3:185 states the rule flatly: every soul will taste death.",
            "bn": "তাফিররূনা এসেছে 'ফিরার' থেকে। যুদ্ধের কাতার ভেঙে যে পালিয়ে যায়, তার বেলায় এই শব্দ বলা হয়। কুরআন বলছে না যে পালাতে চাওয়ার এই তাগিদটা ঘৃণ্য; বলছে, এই দিকে যাওয়াই অসম্ভব। কারণ এমন কোনো দিক নেই, যেদিকে গেলে দূরত্ব বাড়ে। ৪:৭৮ আয়াত অন্য একটি ক্রিয়া দিয়ে একই কথা বলে, আর যোগ করে: সুউচ্চ সুদৃঢ় দুর্গের ভেতরে থাকলেও মৃত্যু তোমাদের নাগাল পাবে। আর ৩:১৮৫ আয়াত নিয়মটা সোজাসুজি বলে দেয়: প্রত্যেক প্রাণকে মৃত্যুর স্বাদ নিতে হবে।"
          },
          {
            "en": "The same root is given one usable direction. 51:50 issues the command fa-firru ila Allah — flee to Allah, run to Him — the identical verb, pointed at the only destination that is not a dead end. Read together, the two verses do not tell a frightened person to stop running. They tell him he has been running the wrong way, which is a far easier correction than being told to stand still.",
            "bn": "একই ধাতুকে একটিমাত্র কাজের দিক দেওয়া হয়েছে। ৫১:৫০ আয়াতের আদেশ: ফাফিররূ ইলাল্লাহ, আল্লাহর দিকে পালাও, তাঁর দিকে ছুটে যাও। হুবহু একই ক্রিয়া, কিন্তু তাক করা একমাত্র সেই গন্তব্যের দিকে, যেটি কানাগলি নয়। দুটি আয়াত একসঙ্গে পড়লে দেখা যায়, ভয় পাওয়া মানুষকে এরা দৌড় থামাতে বলে না। বলে, সে এতদিন ভুল দিকে দৌড়াচ্ছিল। আর স্থির দাঁড়িয়ে থাকতে বলার চেয়ে এই সংশোধন মেনে নেওয়া অনেক সহজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Returned, Then Informed",
          "bn": "ফিরিয়ে নেওয়া, তারপর জানিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "Thumma turaddun — then you will be returned. The verb is passive; nobody arrives under his own power or at a time of his choosing. The destination is named by two of Allah's attributes rather than by a place: the Knower of the unseen and the witnessed. Between those two categories nothing about a human life is left over. What was performed in public and what was never told to anyone fall inside the same knowledge.",
            "bn": "সুম্মা তুরাদ্দূন: তারপর তোমাদের ফিরিয়ে নেওয়া হবে। ক্রিয়াটি কর্মবাচ্যে। কেউ নিজের জোরে সেখানে পৌঁছায় না, নিজের পছন্দের সময়েও না। গন্তব্যের পরিচয় কোনো জায়গার নামে নয়, আল্লাহর দুটি গুণে: তিনি অদৃশ্য ও দৃশ্য সবকিছুর জ্ঞানী। এই দুইয়ের বাইরে মানুষের জীবনের কিছুই বাকি থাকে না। যা প্রকাশ্যে করা হয়েছে, আর যা কখনো কাউকে বলা হয়নি, দুটোই একই জ্ঞানের ভেতরে।"
          },
          {
            "en": "Then fa-yunabbi'ukum, He will inform you. The verb belongs to naba', which in Arabic is not any piece of news but news of consequence, the kind that changes something for the one who hears it. And the object is bima kuntum ta'malun — kana with the imperfect, the construction for what was done habitually rather than once. The disclosure is not a list of incidents. It is a description of what a person had made into a practice.",
            "bn": "তারপর ফাইউনাব্বিউকুম: তিনি তোমাদের জানিয়ে দেবেন। ক্রিয়াটি এসেছে 'নাবা' থেকে। আরবিতে নাবা যেকোনো খবর নয়; এ হলো গুরুতর খবর, যা শুনলে শ্রোতার জন্য কিছু একটা বদলে যায়। আর কী জানাবেন? বিমা কুনতুম তা'মালূন। এখানে 'কানা'-র সঙ্গে মুদারি ক্রিয়া, যা দিয়ে বোঝায় এমন কাজ, যা একবার নয়, বরাবর করা হতো। তাই এই প্রকাশ কোনো ঘটনার তালিকা নয়। মানুষ যা নিজের অভ্যাস বানিয়ে নিয়েছিল, এ হলো তারই বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hinge of the Surah",
          "bn": "সূরার মোড়"
        },
        "p": [
          {
            "en": "This is not the surah's last verse; three more follow it. 62:9 gives the Friday command to leave off trade and proceed to the remembrance of Allah when the call is made; 62:10 sends the congregation back out to seek His bounty; 62:11 records the day a caravan arrived and the people broke away toward it. Placed where it is, the verse about fleeing death sits directly before the verses about leaving a sermon for a sale.",
            "bn": "এটি সূরার শেষ আয়াত নয়; এরপর আরও তিনটি আয়াত আছে। ৬২:৯ দেয় জুমার হুকুম: আযান হলে কেনাবেচা ছেড়ে আল্লাহর জিকিরের দিকে চলো। ৬২:১০ জামাতকে আবার বাইরে পাঠিয়ে দেয় তাঁর অনুগ্রহ তালাশ করতে। ৬২:১১ লিখে রাখে সেই দিনের কথা, যেদিন একটি বাণিজ্য-কাফেলা এসেছিল আর লোকেরা সেদিকে ছুটে গিয়েছিল। এই জায়গায় বসানোর ফলে মৃত্যু থেকে পালানোর আয়াতটি এসেছে ঠিক সেই আয়াতগুলোর আগে, যেগুলো বেচাকেনার জন্য খুতবা ছেড়ে চলে যাওয়ার কথা বলে।"
          },
          {
            "en": "The surah is therefore describing one habit at two strengths. A people who could not face the thought of death, and a congregation that could not sit through a sermon while trade waited outside, are avoiding the same thing by the same method: attending to whatever is nearer and louder. The severe case and the ordinary case are set three verses apart so that neither can be read as somebody else's problem.",
            "bn": "তাহলে সূরাটি একই অভ্যাসের দুই মাত্রার কথা বলছে। একদল মৃত্যুর কথা ভাবতেই পারত না। আরেক দল বাইরে ব্যবসা অপেক্ষা করছে বলে খুতবা শেষ হওয়া পর্যন্ত বসে থাকতে পারেনি। দুই দলই একই জিনিস এড়াচ্ছে, একই কৌশলে: যা কাছে আর যা বেশি সরব, সেদিকেই মন দিয়ে। কঠিন দৃষ্টান্ত আর সাধারণ দৃষ্টান্ত মাত্র তিন আয়াত দূরে রাখা হয়েছে, যাতে কেউ কোনোটিকেই অন্যের সমস্যা ভেবে পাশ কাটাতে না পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Appointment on the Calendar",
          "bn": "ক্যালেন্ডারে লেখা এক সাক্ষাৎ"
        },
        "p": [
          {
            "en": "What the verse asks for is not dread but arithmetic. If a meeting is certain and its date is withheld, the only rational response is to keep ready. The practical form is small: what would need settling tonight — a debt, a will, an apology withheld for years — and what is being postponed on the assumption of a runway nobody was promised.",
            "bn": "আয়াতটি আতঙ্ক চায় না, চায় হিসাব। কোনো সাক্ষাৎ যদি নিশ্চিত হয়, অথচ তারিখ জানা না থাকে, তাহলে বুদ্ধিমানের একমাত্র কাজ সবসময় তৈরি থাকা। এর বাস্তব রূপ খুব ছোট: আজ রাতেই কী মিটিয়ে ফেলা দরকার? একটা ঋণ, একটা অসিয়ত, বছরের পর বছর আটকে রাখা একটা মাফ চাওয়া। আর কোন কাজগুলো পিছিয়ে রাখছেন এই ভরসায় যে সামনে অনেক সময় পড়ে আছে, অথচ সে সময়ের কথা কাউকে দেওয়া হয়নি?"
          }
        ]
      }
    ]
  },
  "62:9": {
    "sections": [
      {
        "h": {
          "en": "When the Call Sounds",
          "bn": "যখন আযান হয়"
        },
        "p": [
          {
            "en": "The verse legislates a weekly interruption: when the call is made for the prayer on the day of Jumu'ah, proceed to the remembrance of Allah and leave the sale. The surah itself is named for this passage. Two commands, one positive and one negative, hang on one trigger — the adhan — and the example chosen for what must be dropped is not something sinful. It is trade: lawful, productive, praised elsewhere, and precisely therefore the real test.",
            "bn": "আয়াতটি সপ্তাহে একবার একটা বিরতির বিধান দিচ্ছে: জুমার দিন যখন নামাজের জন্য ডাকা হয়, তখন আল্লাহর জিকিরের দিকে চলো, আর বেচাকেনা ছেড়ে দাও। সূরাটির নামও এই অংশ থেকেই। একটি করণীয় আর একটি বর্জনীয়, দুটি আদেশই একটি সংকেতের সঙ্গে বাঁধা: আযান। আর কী ছাড়তে হবে, তার উদাহরণ হিসেবে আল্লাহ কোনো গুনাহের কাজ আনেননি। এনেছেন ব্যবসা, যা হালাল, উপকারী, অন্য জায়গায় প্রশংসিত। ঠিক এ কারণেই এটাই আসল পরীক্ষা।"
          },
          {
            "en": "The verse ends in the vocabulary of commerce it has just suspended: dhalikum khayrun lakum, that is better for you, if you only knew. To merchants it speaks as merchants — compare the two deals. What looks like an hour of lost margin is, on the true ledger, the better bargain. The clause in kuntum ta'lamun, if you only knew, quietly says that this arithmetic is exactly what people fail to know.",
            "bn": "আয়াতটি শেষ হয় সেই ব্যবসার ভাষাতেই, যা সে এইমাত্র থামিয়ে দিল: যালিকুম খাইরুল লাকুম, এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে। ব্যবসায়ীদের সঙ্গে আয়াত কথা বলছে ব্যবসায়ীর ভাষায়: দুটো সওদা মিলিয়ে দেখো। যাকে মনে হচ্ছে এক ঘণ্টার মুনাফা হাতছাড়া, আসল হিসাবের খাতায় সেটাই লাভের সওদা। আর ইন কুনতুম তা'লামুন, যদি তোমরা জানতে, কথাটি নীরবে জানিয়ে দেয়: এই হিসাবটাই মানুষ বোঝে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sa'y Is of the Heart",
          "bn": "সা'ঈ অন্তরের ব্যাপার"
        },
        "p": [
          {
            "en": "Fas'aw ila dhikrillah — the verb sa'a means to proceed with earnest purpose, and the commentators are careful about what it does not mean here: sprinting. The Prophet ﷺ, in the hadith agreed upon by al-Bukhari and Muslim, told believers to walk to prayer with tranquility and not to come running. So the hurry this verse commands is a hurry of intention and priority — the heart runs while the feet walk.",
            "bn": "ফাসআও ইলা জিকরিল্লাহ। সা'আ ক্রিয়ার অর্থ দৃঢ় উদ্দেশ্য নিয়ে এগিয়ে যাওয়া। মুফাসসিররা সাবধান করে দিয়েছেন, এখানে এর অর্থ দৌড়ানো নয়। বুখারী ও মুসলিমের সর্বসম্মত (মুত্তাফাকুন আলাইহি) হাদিসে নবী ﷺ মুমিনদের বলেছেন, নামাজে আসতে হবে ধীরস্থিরভাবে হেঁটে, দৌড়ে নয়। তাই এ আয়াত যে তাড়ার হুকুম দেয়, তা নিয়ত আর অগ্রাধিকারের তাড়া: মন দৌড়ায়, পা হাঁটে।"
          },
          {
            "en": "What the hurry displaces is procrastination dressed as busyness: one more customer, one more message, arriving at the sermon's end. Proceeding to the dhikr of Allah — which the commentators read as the khutbah and the prayer together — means arranging the day around the appointment rather than squeezing the appointment into the day. The verse's subject is not speed at the last minute but structure decided in advance.",
            "bn": "এই তাড়া যা হটিয়ে দেয়, তা হলো ব্যস্ততার পোশাক পরা টালবাহানা: আর একজন খদ্দের, আর একটা মেসেজ, তারপর খুতবা শেষ হওয়ার মুখে গিয়ে পৌঁছানো। মুফাসসিররা এখানে আল্লাহর জিকির বলতে খুতবা ও নামাজ দুটোই বোঝেন। সেদিকে যাওয়া মানে এই সাক্ষাৎকে ঘিরে দিন সাজানো; দিনের কোনো ফাঁকে সাক্ষাৎটা গুঁজে দেওয়া নয়। আয়াতের বিষয় শেষ মুহূর্তের দ্রুততা নয়, আগে থেকে ঠিক করে রাখা রুটিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Trade Stopped, Trade Restarted",
          "bn": "ব্যবসা থামে, আবার চলে"
        },
        "p": [
          {
            "en": "The next verse completes the system: when the prayer has ended, 62:10 says, disperse through the land and seek from the bounty of Allah — and remember Allah much, that you may succeed. The same voice that stopped commerce restarts it within a sentence of the prayer's close. Islam is not embarrassed by markets; it ranks them. Trade is bounty from Allah, sought lawfully all week, and set down for one summons.",
            "bn": "পরের আয়াত ব্যবস্থাটি পূর্ণ করে। ৬২:১০ বলছে: নামাজ শেষ হলে যমীনে ছড়িয়ে পড়ো, আল্লাহর অনুগ্রহ তালাশ করো, আর আল্লাহর জিকির বেশি বেশি করো, যাতে তোমরা সফল হও। যে কণ্ঠ ব্যবসা থামিয়েছিল, নামাজ শেষ হতেই এক বাক্যের মধ্যে সেই কণ্ঠই তা আবার চালু করে দেয়। ইসলাম বাজার নিয়ে লজ্জিত নয়; সে বাজারকে তার জায়গা দেখিয়ে দেয়। ব্যবসা আল্লাহরই অনুগ্রহ: সারা সপ্তাহ হালাল পথে তা খোঁজা যায়, আর একটি ডাকে তা নামিয়ে রাখতে হয়।"
          },
          {
            "en": "Notice also what travels back out with the traders: remember Allah much, that you may succeed. The dhikr commanded inside the mosque is carried into the marketplace, so the boundary the adhan drew was never between religion and work but between forgetting and remembering. 24:37 describes the finished product of this training: men whom neither trade nor sale distracts from the remembrance of Allah, the prayer, and the giving of zakat.",
            "bn": "আরও লক্ষ করুন, ব্যবসায়ীদের সঙ্গে কী বাইরে ফিরে যায়: আল্লাহর জিকির বেশি বেশি করো, যাতে তোমরা সফল হও। মসজিদের ভেতরে যে জিকিরের হুকুম, তা সঙ্গে করে বাজারে নিয়ে যাওয়া হয়। তার মানে আযান যে সীমারেখা টেনেছিল, তা কখনো দ্বীন আর কাজের মাঝে ছিল না; ছিল ভুলে থাকা আর মনে রাখার মাঝে। এই তারবিয়াতের পূর্ণ ফল কেমন হয়, ২৪:৩৭ তার ছবি আঁকে: এমন লোক, যাদের ব্যবসা-বাণিজ্য আর বেচাকেনা আল্লাহর জিকির, নামাজ কায়েম ও যাকাত আদায় থেকে গাফেল করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Caravan That Emptied the Mosque",
          "bn": "যে কাফেলা মসজিদ খালি করেছিল"
        },
        "p": [
          {
            "en": "The passage ends with an incident the sahih collections preserve. Jabir (RA) relates that while the Prophet ﷺ was delivering the khutbah on Jumu'ah, a trade caravan arrived; the people slipped out toward it until only twelve remained. Then 62:11 came down: when they saw trade or diversion they broke away to it and left you standing. Say: what is with Allah is better than diversion and trade, and Allah is the best of providers.",
            "bn": "অংশটি শেষ হয় এমন এক ঘটনা দিয়ে, যা সহীহ হাদিসগ্রন্থগুলো সংরক্ষণ করেছে। জাবির (রাঃ) বর্ণনা করেন: নবী ﷺ জুমার খুতবা দিচ্ছিলেন, এমন সময় একটি বাণিজ্য-কাফেলা এসে পৌঁছাল। লোকেরা চুপিসারে সেদিকে বেরিয়ে যেতে থাকল, শেষে মাত্র বারোজন রইলেন। তখন ৬২:১১ নাজিল হলো: তারা যখন ব্যবসা বা খেল-তামাশা দেখল, সেদিকে ছুটে গেল আর আপনাকে দাঁড়ানো অবস্থায় রেখে গেল। বলুন: আল্লাহর কাছে যা আছে, তা খেল-তামাশা ও ব্যবসার চেয়ে উত্তম, আর আল্লাহই শ্রেষ্ঠ রিযিকদাতা।"
          },
          {
            "en": "The verse does not disown the community; it re-teaches it, and the honesty of its preservation is itself instruction — the Quran recorded the early community's stumble so that every later congregation would recognise the pull of the caravan in its own forms. The closing title settles the anxiety underneath the whole passage: Allah is the best of providers. The fear of missing provision was always the argument for leaving; the verse answers that argument at its root.",
            "bn": "আয়াতটি সেই সমাজকে ত্যাগ করে না, বরং নতুন করে শিক্ষা দেয়। আর ঘটনাটি যে সততার সঙ্গে সংরক্ষিত হয়েছে, সেটাও এক শিক্ষা। কুরআন প্রথম যুগের মুসলিম সমাজের এই হোঁচট লিখে রেখেছে, যাতে পরের প্রতিটি জামাত কাফেলার টান যে রূপেই আসুক, চিনে নিতে পারে। শেষের গুণবাচক নামটি পুরো অংশের তলায় চাপা পড়ে থাকা দুশ্চিন্তার মীমাংসা করে দেয়: আল্লাহই শ্রেষ্ঠ রিযিকদাতা। রিযিক হাতছাড়া হওয়ার ভয়ই তো ছিল বেরিয়ে যাওয়ার আসল যুক্তি। আয়াত সেই যুক্তির জবাব দেয় একেবারে গোড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weekly Reset",
          "bn": "প্রতি সপ্তাহের নতুন শুরু"
        },
        "p": [
          {
            "en": "The Prophet ﷺ said, as Muslim relates, that the best day on which the sun rises is the day of Jumu'ah. The verse builds that rank into the week's structure: one hour in which every believer, whatever his trade, stands in the same rows for the same reminder. A community that keeps this appointment re-synchronises weekly — its wealth-seeking interrupted, its priorities re-declared aloud, its equality rehearsed in the standing lines.",
            "bn": "ইমাম মুসলিম বর্ণনা করেছেন, নবী ﷺ বলেছেন: যেসব দিনে সূর্য ওঠে, তার মধ্যে সেরা দিন জুমার দিন। আয়াতটি সেই মর্যাদাকে সপ্তাহের কাঠামোর ভেতরে গেঁথে দেয়। সপ্তাহে একটি ঘণ্টা, যখন প্রত্যেক মুমিন, তার পেশা যা-ই হোক, একই কাতারে দাঁড়ায় একই নসিহত শুনতে। যে সমাজ এই সাক্ষাৎ নিয়মিত রক্ষা করে, তারা প্রতি সপ্তাহে নিজেদের নতুন করে এক সুরে বেঁধে নেয়। সম্পদের পেছনে ছোটায় বিরতি পড়ে, অগ্রাধিকারগুলো আবার উচ্চস্বরে ঘোষণা হয়, আর কাতারে দাঁড়িয়ে সাম্যের অনুশীলন চলে।"
          },
          {
            "en": "The personal practice is to identify one's own caravan. For each person some particular busyness is hardest to put down when the call comes — a meeting, a shop hour, a feed refreshing itself. The verse asks that it be named honestly and set down deliberately, early rather than at the final minute, with the closing clause held in mind as a working belief: that is better for you, if you only knew.",
            "bn": "ব্যক্তিগত আমল হলো নিজের কাফেলাটি চিনে নেওয়া। প্রত্যেকেরই কোনো না কোনো ব্যস্ততা আছে, যা আযান এলে ছেড়ে ওঠা সবচেয়ে কঠিন: একটা মিটিং, দোকানের ব্যস্ত সময়, কিংবা মোবাইলের ফিড, যা নিজে নিজেই নতুন হতে থাকে। আয়াত চায়, সৎভাবে সেটার নাম নিন, আর জেনেবুঝে সেটা নামিয়ে রাখুন, শেষ মিনিটে নয়, আগেভাগেই। আর শেষ বাক্যাংশটি মনে রাখুন এমন বিশ্বাস হিসেবে, যার ওপর ভর করে চলা যায়: এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে।"
          }
        ]
      }
    ]
  }
});
