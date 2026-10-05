/**
 * Tadabbur long-form articles — surah 84.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "84:6": {
    "sections": [
      {
        "h": {
          "en": "A Root Used Once",
          "bn": "একবারই ব্যবহৃত এক ধাতু"
        },
        "p": [
          {
            "en": "Ya ayyuha al-insanu innaka kadihun ila rabbika kadhan famulaqih. The root of kadh occurs nowhere else in the Quran, and at its single appearance it occurs twice inside the one verse: kadihun, the active participle, and kadhan, the cognate accusative that Arabic sets after a verb or participle to intensify it by repeating its own noun. One appearance, and it is doubled on arrival.",
            "bn": "ইয়া আইয়ুহাল ইনসানু ইন্নাকা কাদিহুন ইলা রাব্বিকা কাদহান ফামুলাকীহ। 'কাদহ' শব্দের ধাতুটি গোটা কুরআনে আর কোথাও আসেনি, আর এই একটিমাত্র জায়গায় তা একই আয়াতের ভেতরে দুইবার এসেছে: 'কাদিহুন' — ইসমে ফা'ইল, আর 'কাদহান' — মাফ'উলে মুতলাক, যা আরবিতে ক্রিয়া বা ইসমে ফা'ইলের পরে বসে তারই মাসদার পুনরাবৃত্তি করে অর্থকে জোরালো করে। একবারই এসেছে, আর আসার সঙ্গে সঙ্গেই দ্বিগুণ হয়ে এসেছে।"
          },
          {
            "en": "The lexicographers gloss kadh as labour that costs the labourer, effort pressed to the point where it leaves its mark on the one who makes it. That is why translations reach for phrases like great exertion and hard striving. The commentators add a caution the word itself carries: kadh says nothing about what the effort is for. It covers work done for good and work done for evil with equal accuracy.",
            "bn": "অভিধানকারগণ 'কাদহ'-এর ব্যাখ্যা করেন এমন পরিশ্রম হিসেবে যা পরিশ্রমকারীর নিজের ওপরই মূল্য আদায় করে — এমন সাধনা যা যিনি করেন তাঁর গায়ে দাগ রেখে যায়। এ কারণেই অনুবাদে 'কঠোর সাধনা' বা 'বহু কষ্ট' জাতীয় শব্দ ব্যবহৃত হয়। মুফাসসিরগণ শব্দটির ভেতরকার একটি সতর্কতাও যোগ করেন: 'কাদহ' এ কথা বলে না যে পরিশ্রমটি কীসের জন্য। ভালো কাজের পরিশ্রম আর মন্দ কাজের পরিশ্রম — দুটোকেই শব্দটি সমান নির্ভুলভাবে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Singular, and Everyone",
          "bn": "একবচন, অথচ সবাই"
        },
        "p": [
          {
            "en": "The address is worth looking at closely. Ya ayyuha al-insan puts the definite article on insan, which in Arabic can take in the whole species, while innaka, rabbika and the participle are all singular. So the sentence speaks to humankind as such and grammatically buttonholes one person at the same time. The commentators say plainly that the man addressed here takes in the believer and the disbeliever together.",
            "bn": "সম্বোধনটির দিকে একটু মনোযোগ দিয়ে তাকানো দরকার। 'ইয়া আইয়ুহাল ইনসান'-এ 'ইনসান' শব্দে আলিফ-লাম যুক্ত, যা আরবিতে গোটা প্রজাতিকে ধরতে পারে; অথচ 'ইন্নাকা', 'রাব্বিকা' এবং ইসমে ফা'ইল — সবই একবচন। ফলে বাক্যটি একই সঙ্গে সমগ্র মানবজাতিকে সম্বোধন করে এবং ব্যাকরণগতভাবে একজন মানুষকে আলাদা করে ধরে ফেলে। মুফাসসিরগণ স্পষ্ট করেই বলেন, এখানে সম্বোধিত 'মানুষ' শব্দটির ভেতরে মু'মিন ও কাফির উভয়েই শামিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Address Falls",
          "bn": "সম্বোধনটি যেখানে এসে পড়ে"
        },
        "p": [
          {
            "en": "84:1 describes the sky splitting, and 84:2 says it listened to its Lord, and it must. 84:3-4 describe the earth stretched out and emptied of what was inside it, and 84:5 says the same clause over again, this time of the earth: it listened to its Lord, and it must. Two creatures are named, and of each the identical words are used. Neither is asked for a decision.",
            "bn": "84:1 বর্ণনা করে আসমান ফেটে যাওয়ার কথা, আর 84:2 বলে — সে তার প্রতিপালকের নির্দেশ শুনল, আর তার তা-ই করণীয়। 84:3-4 বর্ণনা করে যমীনকে বিছিয়ে দেওয়ার এবং তার ভেতরে যা ছিল তা বের করে খালি হয়ে যাওয়ার কথা, আর 84:5 ঠিক সেই একই বাক্য আবার বলে, এবার যমীন সম্পর্কে — সে তার প্রতিপালকের নির্দেশ শুনল, আর তার তা-ই করণীয়। দুটি সৃষ্টির নাম আসে, আর দুটির ক্ষেত্রেই হুবহু একই শব্দ ব্যবহৃত হয়। কারও কাছেই কোনো সিদ্ধান্ত চাওয়া হয় না।"
          },
          {
            "en": "84:6 is where the sentence turns, and the turn is the point. After two things that simply comply, the surah stops describing and starts addressing: O man. The one creature on the scene of whom it was not said that it listened and had to is the creature now spoken to directly — and what is said to him is not that he must obey, but that he is already on his way.",
            "bn": "84:6 হলো সেই মোড়, আর মোড়টিই আসল কথা। দুটি সৃষ্টি নিছক আনুগত্য করে, তারপর সূরাটি বর্ণনা থামিয়ে সম্বোধন শুরু করে: হে মানুষ! এই দৃশ্যে যে একমাত্র সৃষ্টির সম্পর্কে বলা হয়নি যে সে শুনল এবং তার তা-ই করণীয়, তাকেই এখন সরাসরি সম্বোধন করা হচ্ছে — আর তাকে বলা হচ্ছে না যে তোমাকে মানতেই হবে; বলা হচ্ছে, তুমি ইতিমধ্যেই পথ চলছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom You Will Meet",
          "bn": "কার সাক্ষাৎ পাবে"
        },
        "p": [
          {
            "en": "The verse ends on a pronoun, famulaqih, and the commentators differ over what it points at. Ibn Kathir gives the reading that you will meet your work, whatever it was, good or evil; then he reports that others refer the pronoun back to your Lord, so the sense is you will meet Him. He does not choose between them. He observes that the two are connected, since the deed is met where its Judge is.",
            "bn": "আয়াতটি শেষ হয় একটি সর্বনাম দিয়ে — 'ফামুলাকীহ' — আর সেটি কোন দিকে ইঙ্গিত করে তা নিয়ে মুফাসসিরগণের মতভেদ আছে। ইবনে কাসীর প্রথমে সেই পাঠটি দেন যে তুমি তোমার আমলের সাক্ষাৎ পাবে, তা ভালো হোক বা মন্দ; এরপর জানান, অন্যরা সর্বনামটিকে 'তোমার প্রতিপালক'-এর দিকে ফিরিয়ে দেন, অর্থাৎ তুমি তাঁর সাক্ষাৎ পাবে। তিনি দুটির কোনো একটিকে বেছে নেন না। তিনি লক্ষ করেন, দুটি অর্থ পরস্পরের সঙ্গে যুক্ত — কারণ আমলের সাক্ষাৎ সেখানেই ঘটে যেখানে তার বিচারক থাকেন।"
          },
          {
            "en": "This is why the translations in this app part company at the last word: one ends on you will meet it, and the Bengali ends on you will attain His meeting. Neither is a slip. Both sit inside the classical reading of the verse, and the ambiguity is not a flaw in the Arabic but its economy — a single attached pronoun holding the deed and the One it is carried to.",
            "bn": "এ কারণেই এই অ্যাপের অনুবাদ দুটি শেষ শব্দে এসে আলাদা হয়ে যায়: একটি শেষ হয় 'তুমি তার সাক্ষাৎ পাবে' দিয়ে, আর বাংলাটি শেষ হয় 'তুমি তাঁর সাক্ষাৎ লাভ করবে' দিয়ে। কোনোটিই ভুল নয়। দুটিই আয়াতটির শাস্ত্রীয় ব্যাখ্যার ভেতরেই পড়ে, আর এই দ্ব্যর্থতা আরবির ত্রুটি নয়, বরং তার মিতব্যয়িতা — একটিমাত্র সর্বনাম একসঙ্গে ধরে রাখে আমলকে এবং যাঁর কাছে তা নিয়ে যাওয়া হচ্ছে তাঁকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reckoning It Opens Onto",
          "bn": "যে হিসাবের দিকে এটি খোলে"
        },
        "p": [
          {
            "en": "84:7-9 give the first outcome: whoever is given his record in his right hand will be reckoned with easily and go back to his people glad. 84:10-12 give the other: a record handed from behind the back, a cry for destruction, a blaze. So the meeting announced in our verse is specified within a few lines, and it is specified as the handing over of a written account.",
            "bn": "84:7-9 প্রথম পরিণতিটি জানায়: যার আমলনামা তার ডান হাতে দেওয়া হবে, তার হিসাব সহজভাবেই নেওয়া হবে এবং সে আনন্দিত হয়ে তার স্বজনদের কাছে ফিরে যাবে। 84:10-12 জানায় অন্যটি: পিঠের পেছন দিক থেকে হাতে দেওয়া আমলনামা, ধ্বংসের আর্তনাদ, আর জ্বলন্ত আগুন। অর্থাৎ আমাদের আয়াতে ঘোষিত সেই সাক্ষাৎ কয়েক পঙ্‌ক্তির ভেতরেই নির্দিষ্ট হয়ে যায়, আর নির্দিষ্ট হয় একটি লিখিত হিসাব হাতে তুলে দেওয়ার রূপে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Aishah (RA) that when she heard the Prophet ﷺ say that whoever is called to account is destroyed, she asked him about the easy reckoning of 84:8. He answered that this is only the presentation, and that whoever is closely examined in the reckoning is destroyed. Easy, in that verse, means passed over — not that the account itself was light.",
            "bn": "বুখারী ও মুসলিম উভয়েই আয়েশা (রাঃ) থেকে বর্ণনা করেন যে, তিনি যখন নবী ﷺ-কে বলতে শুনলেন — যার হিসাব নেওয়া হবে সে ধ্বংস হয়ে যাবে — তখন তিনি 84:8-এর সহজ হিসাব সম্পর্কে প্রশ্ন করলেন। নবী ﷺ উত্তরে বলেন, ওটি কেবল পেশ করা মাত্র; আর হিসাবের সময় যার সঙ্গে কড়াকড়ি করা হবে, সে ধ্বংস হয়ে যাবে। ওই আয়াতে 'সহজ' মানে ছেড়ে দেওয়া — আমলনামা হালকা ছিল, তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Variable",
          "bn": "একমাত্র যেটি বদলায়"
        },
        "p": [
          {
            "en": "Nothing in this verse asks whether you will exert yourself. It reports that you already are, and it names the direction the exertion is running in. Since the toil is not optional and the meeting is not optional, exactly one thing is left open, which is what the toil is spent on. Everyone alive is a kadih; people differ only in what they are wearing themselves out for.",
            "bn": "এই আয়াত এ কথা জিজ্ঞেস করে না যে তুমি পরিশ্রম করবে কি না। এটি জানায় যে তুমি ইতিমধ্যেই করছ, এবং সেই পরিশ্রম কোন দিকে ছুটছে তারও নাম বলে দেয়। যেহেতু পরিশ্রম ঐচ্ছিক নয় এবং সাক্ষাৎও ঐচ্ছিক নয়, তাই খোলা থাকে ঠিক একটি জিনিস — পরিশ্রমটি কীসের পেছনে ব্যয় হচ্ছে। জীবিত প্রত্যেকেই একজন 'কাদিহ'; মানুষে মানুষে পার্থক্য কেবল এখানেই যে সে নিজেকে কীসের জন্য ক্ষয় করছে।"
          }
        ]
      }
    ]
  },
  "84:21": {
    "sections": [
      {
        "h": {
          "en": "Six Words, One Sign",
          "bn": "ছয় শব্দ, এক চিহ্ন"
        },
        "p": [
          {
            "en": "Wa-idha quri'a 'alayhimu al-Qur'anu la yasjudun: and when the Qur'an is recited to them, they do not prostrate. The verse is six Arabic words, and the text carries the sign of a sajdah at its end, marking it as a place of prostration in the mushaf. It does not stand alone. It continues the question opened in 84:20, fa-ma lahum la yu'minun, so what is the matter with them that they do not believe. Ibn Kathir and the Muyassar both read the two verses as one sentence: what is wrong with them that, when the Qur'an is recited to them, they do not prostrate?",
            "bn": "ওয়া ইযা কুরিআ আলাইহিমুল কুরআনু লা ইয়াসজুদূন: আর যখন তাদের সামনে কুরআন পড়া হয়, তারা সিজদা করে না। আরবিতে আয়াতটি ছয়টি শব্দের। এর শেষে সাজদাহর চিহ্ন বসানো, অর্থাৎ মুসহাফে এটি সিজদার একটি জায়গা। আয়াতটি একা দাঁড়িয়ে নেই। ৮৪:২০ আয়াতে যে প্রশ্ন শুরু হয়েছিল, ফামা লাহুম লা ইউমিনূন, তাদের কী হলো যে তারা ঈমান আনে না, এ আয়াত সেটাকেই এগিয়ে নেয়। ইবন কাসীর আর মুয়াসসার দুই আয়াতকে একটি বাক্য হিসেবেই পড়েন: তাদের কী হয়েছে যে তাদের সামনে কুরআন পড়া হলে তারা সিজদা করে না?"
          },
          {
            "en": "Two features of the wording are visible on the page. The verb quri'a is passive: it names no reciter, only the fact that the words were read out to them. And the verb and its subject share the same three root letters, q-r-', so the sentence says, almost literally, when the Recitation is recited. The plainness of the frame puts the weight on the last two words, la yasjudun. Whoever did the reading, and however it was done, the response the verse records is a refusal to bow.",
            "bn": "শব্দের গড়নে দুটো জিনিস চোখে পড়ে। কুরিআ ক্রিয়াটি কর্মবাচ্যে। কে পড়েছে তা বলা নেই, বলা আছে শুধু এটুকু যে বাণী তাদের সামনে পড়া হয়েছে। আবার ক্রিয়া আর তার কর্তা একই ধাতুর তিনটি অক্ষর থেকে এসেছে, ক-র-আ। ফলে বাক্যটি প্রায় আক্ষরিকভাবে বলছে: যখন তিলাওয়াতের বাণী তিলাওয়াত করা হয়। কাঠামো এত সাদামাটা বলেই সব ভার গিয়ে পড়ে শেষ দুই শব্দে, লা ইয়াসজুদূন। পড়েছে যে-ই হোক, যেভাবেই হোক, আয়াত যে সাড়াটা লিখে রাখে তা হলো মাথা নোয়াতে অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Words Were Read",
          "bn": "কার বাণী পড়া হলো"
        },
        "p": [
          {
            "en": "The commentators fetched for this verse name what was recited in slightly different terms. Ibn Kathir says it is the ayat of Allah and His speech, which is this Qur'an. At-Tabari says it is the Book of their Lord. Ma'arif al-Qur'an describes the Qur'an recited to them as replete with clear guidelines, and the Muyassar, opening on the verse before, says this came after the signs had been made clear to them. Each wording turns the verb a little: the first stresses that the speech is Allah's, the second that it comes from their own Lord, the third that it was clear enough to act on.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, সেগুলো পঠিত বাণীটির পরিচয় দেয় একটু ভিন্ন ভিন্ন ভাষায়। ইবন কাসীর বলেন, এ হলো আল্লাহর আয়াত ও তাঁর কালাম, অর্থাৎ এই কুরআন। তাবারী বলেন, তাদের রবের কিতাব। মাআরিফুল কুরআনের ভাষায়, স্পষ্ট নির্দেশনায় ভরা কুরআন। আর মুয়াসসার আগের আয়াত থেকে শুরু করে বলে, আয়াতগুলো তাদের কাছে স্পষ্ট করে দেওয়ার পরও এমন হয়েছে। প্রতিটি ভাষ্য ক্রিয়াটিকে একটু করে ঘুরিয়ে দেয়। কেউ জোর দেন, কালামটি আল্লাহর। কেউ জোর দেন, এটি এসেছে তাদের নিজেদেরই রবের কাছ থেকে। কেউ বলেন, এত স্পষ্ট যে মেনে চলা যেত।"
          },
          {
            "en": "Ma'arif al-Qur'an also reports a narrower reading of the word al-Qur'an here. Some Hanafi jurists, it says, take the definite article as pointing to something already known, so that the Qur'an in this sentence means this particular verse rather than the whole Book. Ma'arif calls this merely a possibility and, in its own judgement, far-fetched given the clear context. The reading matters for the legal question taken up below, and Ma'arif presents it as those jurists' argument rather than its own.",
            "bn": "মাআরিফুল কুরআন এখানে আল-কুরআন শব্দের আরও সংকীর্ণ একটি পাঠও উল্লেখ করে। তার বর্ণনায়, কিছু হানাফী ফকীহ নির্দিষ্টবাচক আল-কে আগে থেকে জানা কোনো কিছুর দিকে ইঙ্গিত হিসেবে ধরেন। তাহলে এ বাক্যে কুরআন মানে গোটা কিতাব নয়, বরং এই নির্দিষ্ট আয়াতটি। মাআরিফ একে নিছক একটি সম্ভাবনা বলে, আর নিজের বিচারে বলে, আয়াতের স্পষ্ট প্রসঙ্গ দেখলে এ পাঠ দূরবর্তী। সামনে যে ফিকহি প্রশ্ন আসছে, তাতে এ পাঠের ভূমিকা আছে। মাআরিফ একে ওই ফকীহদের যুক্তি হিসেবেই তুলে ধরে, নিজের মত হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bowing, or Yielding?",
          "bn": "মাথা নোয়ানো, না মেনে নেওয়া?"
        },
        "p": [
          {
            "en": "At-Tabari takes la yasjudun as la yakhda'una wa la yastakinun: they do not humble themselves and do not submit. He adds that he has already explained the meaning of sujud, with its evidence, earlier in his work and need not repeat it. As-Sa'di is close to him: they do not humble themselves before the Qur'an and do not yield to its commands and prohibitions. On these two readings the refusal the verse names is a refusal of the will. People hear the Book of their Lord and decline to be moved by it, and the verse holds that against them.",
            "bn": "তাবারী লা ইয়াসজুদূনের ব্যাখ্যা করেন লা ইয়াখদাঊনা ওয়ালা ইয়াসতাকীনূন দিয়ে: তারা বিনীত হয় না, নতি স্বীকার করে না। তিনি যোগ করেন, সুজূদের অর্থ তিনি আগেই প্রমাণসহ বুঝিয়ে দিয়েছেন, তাই আবার বলার দরকার নেই। সা'দীর ব্যাখ্যাও কাছাকাছি: তারা কুরআনের সামনে বিনীত হয় না, তার আদেশ-নিষেধের কাছে নিজেদের সঁপে দেয় না। এ দুই পাঠে আয়াত যে অস্বীকারের কথা বলছে, তা মূলত ইচ্ছার অস্বীকার। মানুষ নিজের রবের কিতাব শোনে, তবু তাতে নড়ে না। আয়াত এটাকেই তাদের বিরুদ্ধে দাঁড় করায়।"
          },
          {
            "en": "Other glosses stay closer to the body. Ibn Kathir says they do not prostrate out of reverence, honour and respect, i'zaman wa ikraman wa ihtiraman, so that the bow he has in mind is a physical act of veneration. The Muyassar joins the two sides: they do not prostrate to Allah, and they do not accept what the Qur'an brings. Al-Qurtubi opens his note with a third gloss, la yusallun, they do not pray. Al-Baghawi gives the same gloss and names the two men who held it, al-Kalbi and Muqatil.",
            "bn": "অন্য কিছু ব্যাখ্যা শরীরের কাজের আরও কাছে থাকে। ইবন কাসীর বলেন, তারা সম্মান, মর্যাদা আর শ্রদ্ধা জানিয়ে সিজদা করে না, ই'যামান ওয়া ইকরামান ওয়া ইহতিরামান। অর্থাৎ তাঁর চোখে এখানে সিজদা হলো ভক্তির এক শারীরিক প্রকাশ। মুয়াসসার দুই দিক একসঙ্গে ধরে: তারা আল্লাহকে সিজদা করে না, আর কুরআন যা নিয়ে এসেছে তা মেনে নেয় না। কুরতুবী তাঁর আলোচনা শুরু করেন তৃতীয় এক ব্যাখ্যা দিয়ে, লা ইউসাল্লূন, তারা নামাজ পড়ে না। বাগাভীও একই ব্যাখ্যা দেন, আর এর প্রবক্তা হিসেবে দুজনের নাম বলেন: কালবী ও মুকাতিল।"
          },
          {
            "en": "Al-Qurtubi has a further gloss, given as the reason for a view of Malik's taken up below: la yudh'inun wa la yuti'un, they do not yield and do not obey in acting on what the Qur'an requires of them. So the fetched sources hold several glosses side by side: a literal prostration of reverence, the ritual prayer, and humility, submission and obedience. Ma'arif al-Qur'an, as the next section shows, argues for one of these. This article reports that argument without adopting it, and leaves the glosses standing as the commentators left them.",
            "bn": "কুরতুবীর কাছে আরও একটি ব্যাখ্যা আছে। ইমাম মালিকের যে মত সামনে আসছে, তার কারণ হিসেবে তিনি এটি দেন: লা ইউয'ইনূনা ওয়ালা ইউতীঊন, কুরআন যা পালন করতে বলে, তাতে তারা নতি স্বীকার করে না, আনুগত্যও করে না। তাহলে যে তাফসীরগুলো দেখা হয়েছে, তাতে কয়েকটি ব্যাখ্যা পাশাপাশি রয়েছে। এক, ভক্তিভরে আক্ষরিক সিজদা। দুই, নামাজ। তিন, বিনয়, আত্মসমর্পণ ও আনুগত্য। পরের অংশে দেখা যাবে, মাআরিফুল কুরআন এগুলোর একটির পক্ষে যুক্তি দেয়। এ প্রবন্ধ সেই যুক্তি তুলে ধরে, কিন্তু গ্রহণ করে না। তাফসীরকারেরা ব্যাখ্যাগুলো যেভাবে রেখেছেন, সেভাবেই থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument From Scope",
          "bn": "পরিসর থেকে যুক্তি"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an gives the most developed argument in the fetched set. Sajdah or sujud, it says, literally denotes to bow, and it connotes obedience. Here, it holds, the word is not used in its technical sense but in the sense of bowing in submission, with respect, humbleness and humility. The reason it offers is the scope of the sentence. The verse does not command prostration at the recitation of one particular verse. It speaks of the Qur'an being recited, and so it is related, in Ma'arif's words, to the entire Qur'an.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার মধ্যে সবচেয়ে বিস্তারিত যুক্তি দেয় মাআরিফুল কুরআন। তার কথায়, সাজদাহ বা সুজূদের আক্ষরিক অর্থ ঝুঁকে পড়া, আর এর ভেতরে আনুগত্যের ভাব আছে। মাআরিফের মতে, এখানে শব্দটি পারিভাষিক অর্থে আসেনি। এসেছে সম্মান, বিনয় আর নম্রতা নিয়ে আত্মসমর্পণে মাথা নোয়ানোর অর্থে। কারণ হিসেবে মাআরিফ দেখায় বাক্যের পরিসর। আয়াতটি কোনো একটি নির্দিষ্ট আয়াত পড়ার সময় সিজদা করার হুকুম দিচ্ছে না। কথা হচ্ছে কুরআন পড়ার, তাই মাআরিফের ভাষায় এর সম্পর্ক গোটা কুরআনের সঙ্গে।"
          },
          {
            "en": "If the word meant the technical prostration, Ma'arif reasons, prostration would be due at every verse of the Qur'an, and it says that by unanimous agreement of the Ummah this is not the case, and neither the salaf nor the khalaf hold it. That is Ma'arif's report of consensus, given here as Ma'arif states it. The argument does not deny that prostration takes place at this verse. It separates two questions: what the verse blames the people of 84:20 for, and what a reader does on reaching the sign at its end.",
            "bn": "মাআরিফের যুক্তি হলো, শব্দটি যদি পারিভাষিক সিজদা বোঝাত, তাহলে কুরআনের প্রতিটি আয়াতেই সিজদা করা লাগত। আর মাআরিফ বলে, উম্মাহর সর্বসম্মত মত তা নয়। পূর্ববর্তী বা পরবর্তী কোনো আলেমই এমন বলেননি। ঐকমত্যের এ দাবি মাআরিফের নিজের, এখানে তার ভাষাতেই রাখা হলো। এ যুক্তি কিন্তু এই আয়াতে সিজদা হওয়াকে অস্বীকার করে না। বরং দুটো প্রশ্নকে আলাদা করে। এক, ৮৪:২০ আয়াতের লোকদের আয়াতটি কীসের জন্য দোষ দিচ্ছে। দুই, আয়াতের শেষের চিহ্নে পৌঁছে পাঠক কী করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Until I Meet Him",
          "bn": "তাঁর সঙ্গে দেখা হওয়া পর্যন্ত"
        },
        "p": [
          {
            "en": "That second question has evidence of its own, and the fetched tafsirs bring it. Al-Baghawi cites through al-Bukhari, and Ma'arif al-Qur'an also cites, the report of Abu Rafi'. In Sahih al-Bukhari (1078), in the English of the page, it reads: \"I offered the 'Isha' prayer behind Abu Huraira and he recited Idhas-Sama' Un-Shaqqat, and prostrated. I said, 'What is this?' Abu Huraira said, 'I prostrated behind Abul-Qasim and I will do the same till I meet him.'\" Al-Bukhari placed it in his Sahih.",
            "bn": "দ্বিতীয় প্রশ্নটির নিজস্ব দলিল আছে, আর তাফসীরগুলোই তা সামনে আনে। বাগাভী বুখারীর সূত্রে আবু রাফির বর্ণনা উদ্ধৃত করেন, মাআরিফুল কুরআনও এটি উল্লেখ করে। সহীহ বুখারীতে (১০৭৮) বর্ণনাটি এরকম: \"আমি আবু হুরায়রা (রাঃ)-এর সঙ্গে ইশার নামাজ পড়লাম। তিনি ইযাস সামাউন শাক্কাত পড়লেন এবং সিজদা করলেন। আমি বললাম, এটা কী? তিনি বললেন, আমি আবুল কাসিম ﷺ-এর পেছনে এতে সিজদা করেছি। তাঁর সঙ্গে সাক্ষাৎ হওয়া পর্যন্ত আমি এতে সিজদা করেই যাব।\" ইমাম বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন।"
          },
          {
            "en": "Al-Baghawi also cites, through at-Tirmidhi, the report of 'Ata' ibn Mina from Abu Hurayrah (RA), and Ma'arif mentions Muslim's narration of it. In Sahih Muslim (578c on the page) the English reads: \"We performed prostration along with the Messenger of Allah ﷺ (as he recited these verses:) 'When the heaven burst asunder' and 'Read in the name of Thy Lord'.\" The second surah named is al-'Alaq. Muslim placed the report in his Sahih, and at-Tirmidhi, recording the same words (573 and 574), graded the hadith of Abu Hurayrah hasan sahih.",
            "bn": "বাগাভী তিরমিযীর সূত্রে আবু হুরায়রা (রাঃ) থেকে আতা ইবন মীনার বর্ণনাও উদ্ধৃত করেন, আর মাআরিফ মুসলিমের বর্ণনার কথা বলে। সহীহ মুসলিমে (৫৭৮) শব্দগুলো এই: \"আমরা নবী ﷺ-এর সঙ্গে ইযাস সামাউন শাক্কাত আর ইকরা বিসমি রাব্বিকা-তে সিজদা করেছি।\" দ্বিতীয় যে সূরার নাম এসেছে, সেটি সূরা আলাক। ইমাম মুসলিম বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। ইমাম তিরমিযীও একই শব্দে বর্ণনা করেছেন (৫৭৩ ও ৫৭৪), আর আবু হুরায়রা (রাঃ)-এর এ হাদীসকে হাসান সহীহ বলেছেন।"
          },
          {
            "en": "Al-Qurtubi gives a third form, saying it is in the Sahih: Abu Hurayrah recited idha as-sama'u inshaqqat and prostrated in it, and when he finished he told them that the Messenger of Allah ﷺ had prostrated in it. The wording matches the first of the narrations Muslim gathers under number 578. None of these reports is a cause of revelation for the verse. They record what the Prophet ﷺ did when this surah was recited, and how Abu Hurayrah kept to it afterwards.",
            "bn": "কুরতুবী তৃতীয় একটি রূপ দেন, আর বলেন এটি সহীহ গ্রন্থে আছে: আবু হুরায়রা (রাঃ) ইযাস সামাউন শাক্কাত পড়লেন এবং এতে সিজদা করলেন। নামাজ শেষে তিনি তাদের জানালেন, রাসূলুল্লাহ ﷺ এতে সিজদা করেছিলেন। মুসলিম ৫৭৮ নম্বরের অধীনে যে বর্ণনাগুলো একত্র করেছেন, তার প্রথমটির সঙ্গে এ শব্দগুলো মিলে যায়। এগুলোর কোনোটিই আয়াত নাজিলের প্রেক্ষাপট নয়। এগুলো জানায়, এ সূরা পড়া হলে নবী ﷺ কী করতেন, আর পরে আবু হুরায়রা (রাঃ) কীভাবে তা আঁকড়ে ধরে ছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Jurists Part Ways",
          "bn": "ফকীহদের পথ যেখানে আলাদা"
        },
        "p": [
          {
            "en": "Whether and how the reader prostrates here is reported in two of the fetched tafsirs. Al-Qurtubi records that Malik said this is not one of the 'aza'im al-sujud, the emphasised places of prostration, with the reason already quoted: the meaning is that they do not yield and do not obey. He then quotes Ibn al-'Arabi: the sound view is that it is one of them; this is the report of the people of Madinah from Malik; and on it the Qur'an and the Sunnah support each other.",
            "bn": "এখানে পাঠক সিজদা করবেন কি না, করলে কীভাবে, এ প্রশ্নের আলোচনা আছে দুটি তাফসীরে। কুরতুবী লিখেছেন, ইমাম মালিক বলেছেন, এটি আযাইমুস সুজূদ, অর্থাৎ জোর দেওয়া সিজদার জায়গাগুলোর একটি নয়। কারণটি আগেই এসেছে: আয়াতের অর্থ, তারা নতি স্বীকার করে না, আনুগত্য করে না। এরপর কুরতুবী ইবনুল আরাবীর কথা উদ্ধৃত করেন। তাঁর মতে সঠিক কথা হলো, এটি সেগুলোরই একটি। মালিক থেকে মদীনাবাসীদের বর্ণনাও এটাই। আর এ বিষয়ে কুরআন ও সুন্নাহ একে অপরকে সমর্থন করে।"
          },
          {
            "en": "Ma'arif al-Qur'an says the narrations on this prostration differ, some indicating that it is an obligatory duty and others that it is not, and that the jurists differ as a result. It names Imam Abu Hanifah as holding that prostration at this verse is an obligatory duty, as at the other verses of the mufassal, and says he adduces the reports of Abu Rafi' and of Muslim given above. Relaying al-Qurtubi, it renders Ibn al-'Arabi's view as obligatory too. This article gives no ruling of its own; that belongs to the reader's own scholars.",
            "bn": "মাআরিফুল কুরআন বলে, এ সিজদা নিয়ে বর্ণনাগুলো ভিন্ন ভিন্ন। কিছু বর্ণনা ইঙ্গিত দেয় যে এটি অবশ্যপালনীয়, কিছু দেয় না। ফলে ফকীহদের মধ্যেও মতভেদ হয়েছে। মাআরিফ ইমাম আবু হানিফার নাম নিয়ে বলে, তাঁর মতে মুফাসসালের অন্য সিজদার আয়াতের মতো এ আয়াতেও সিজদা করা অবশ্যপালনীয়। মাআরিফের বর্ণনায়, তিনি দলিল হিসেবে আবু রাফির বর্ণনা আর মুসলিমের ওই বর্ণনা পেশ করেন। কুরতুবীর সূত্রে মাআরিফ ইবনুল আরাবীর মতকেও অবশ্যপালনীয় বলেই তুলে ধরে। এ প্রবন্ধ নিজে কোনো ফতোয়া দেয় না। সে দায়িত্ব পাঠকের নিজের আলেমদের।"
          },
          {
            "en": "Al-Qurtubi also preserves a personal note from Ibn al-'Arabi. When he led people in prayer, he said, he left this surah unrecited, because if he prostrated they would object, and if he did not, it would be a shortcoming on his part; so he avoided it except when praying alone. Ma'arif reads this as his wish not to split the community needlessly. The note shows that the question was a lived one, met in the prayer row as well as in the books.",
            "bn": "কুরতুবী ইবনুল আরাবীর একটি ব্যক্তিগত কথাও সংরক্ষণ করেছেন। তিনি বলেন, লোকদের নিয়ে ইমামতি করার সময় তিনি এ সূরা পড়া বাদ দিতেন। কারণ সিজদা করলে লোকেরা আপত্তি করত, আর না করলে তা হতো তাঁর নিজের ত্রুটি। তাই একা নামাজ পড়া ছাড়া তিনি সূরাটি এড়িয়ে চলতেন। মাআরিফ এর ব্যাখ্যা দেয় এভাবে: তিনি অকারণে জামাতে বিভেদ সৃষ্টি করতে চাননি। এ ঘটনা দেখায়, প্রশ্নটি শুধু বইয়ের পাতায় ছিল না। নামাজের কাতারেও মানুষকে এর মুখোমুখি হতে হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Describing, Not Judging",
          "bn": "বিবরণ আছে, বিচার নেই"
        },
        "p": [
          {
            "en": "The people this verse speaks of are named in the verse before it: those who do not believe, in 84:20. The verse describes what the text describes, a group who heard the Qur'an recited and would not bow, and it licenses nothing against any living person or community. It gives nobody a warrant to judge a neighbour's faith by whether he prostrates when a verse is recited, and this article passes no verdict on anyone's belief or on anyone's practice of prayer.",
            "bn": "এ আয়াত যাদের কথা বলছে, তাদের পরিচয় এসেছে আগের আয়াতে, ৮৪:২০-এ: যারা ঈমান আনে না। আয়াতটি শুধু তা-ই বর্ণনা করে যা পাঠে আছে। একদল লোক কুরআন পড়া শুনেছে, তবু মাথা নোয়ায়নি। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কেউ কোনো আয়াত শুনে সিজদা করল কি না, তা দেখে প্রতিবেশীর ঈমান মাপার অধিকারও কাউকে দেয় না। এ প্রবন্ধও কারও ঈমান বা নামাজের ধরন নিয়ে কোনো রায় দেয় না।"
          },
          {
            "en": "The point is sharper because the jurists themselves differ on this very prostration, as the previous section shows. A worshipper who does not prostrate here may be following a view like that which al-Qurtubi reports from Malik, that this is not among the emphasised places. What the next verses go on to say, about those who deny and about those who believe and do good, is ground for another reflection. This verse stops at the refusal and the question it raises.",
            "bn": "কথাটা আরও জরুরি, কারণ আগের অংশে দেখা গেছে, ঠিক এই সিজদা নিয়েই ফকীহদের মধ্যে মতভেদ আছে। কেউ এখানে সিজদা না করলে হতে পারে তিনি এমন কোনো মত মেনে চলছেন, যেমনটি কুরতুবী ইমাম মালিক থেকে বর্ণনা করেছেন: এটি জোর দেওয়া সিজদার জায়গাগুলোর মধ্যে পড়ে না। পরের আয়াতগুলো অস্বীকারকারীদের আর ঈমান এনে নেক আমল করা লোকদের নিয়ে যা বলে, তা অন্য এক ভাবনার বিষয়। এ আয়াত থেমে যায় অস্বীকার আর তা থেকে ওঠা প্রশ্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "When It Is Read to Me",
          "bn": "যখন আমার সামনে পড়া হয়"
        },
        "p": [
          {
            "en": "Read alone, the verse is a reproach. Read by someone who believes, it becomes a test in two parts, matching the glosses. There is the outward part: when the reader reaches the sign of prostration, does he bow, as Abu Hurayrah (RA) said he would until he met the Prophet ﷺ? And there is the inward part, the one at-Tabari and as-Sa'di put first: does the hearing humble him, and does it move him to act on what the Qur'an commands and forbids?",
            "bn": "আলাদা করে পড়লে আয়াতটি তিরস্কার। কিন্তু একজন মুমিন যখন পড়েন, তখন তা হয়ে যায় দুই ভাগের পরীক্ষা, ঠিক ব্যাখ্যাগুলোর মতোই। একটি বাইরের ভাগ। সিজদার চিহ্নে পৌঁছে পাঠক কি মাথা নোয়ান, যেমন আবু হুরায়রা (রাঃ) বলেছিলেন, নবী ﷺ-এর সঙ্গে দেখা হওয়া পর্যন্ত তিনি তা করে যাবেন? আরেকটি ভেতরের ভাগ, তাবারী আর সা'দী যেটাকে আগে রেখেছেন। শোনার পর কি মন বিনীত হয়? কুরআনের আদেশ-নিষেধ মেনে চলার দিকে কি তা তাকে ঠেলে দেয়?"
          },
          {
            "en": "The passive verb helps here. The verse does not ask who recited, how well, or in what setting; it asks only what happened in the hearers when the recitation reached them. The Qur'an is read to most believers far more often than they read it themselves: in prayer behind an imam, in gatherings, through a speaker. Each of those moments, on this verse's terms, is a question put to the listener, and the answer is given by what he does next.",
            "bn": "কর্মবাচ্যের ক্রিয়াটি এখানে কাজে আসে। কে পড়েছে, কত সুন্দর করে, কোথায় পড়েছে, আয়াত তা জিজ্ঞেস করে না। জিজ্ঞেস করে শুধু এটুকু: তিলাওয়াত পৌঁছানোর পর শ্রোতার ভেতরে কী ঘটল। বেশির ভাগ মুমিন নিজে যতবার কুরআন পড়েন, তার চেয়ে অনেক বেশিবার শোনেন। ইমামের পেছনে নামাজে, মজলিসে, স্পিকারে। এ আয়াতের হিসাবে প্রতিটি মুহূর্তই শ্রোতার কাছে একটি প্রশ্ন। আর উত্তর মেলে তিনি এরপর কী করেন, তা থেকে।"
          },
          {
            "en": "Abu Hurayrah's answer to Abu Rafi' has a shape worth keeping. He did not argue the point. He named what he had seen behind the Prophet ﷺ and said he would keep doing it until he met him. Whatever view a reader follows on the ruling, that is a picture of how a believer can hold an act of worship: received from someone who did it before him, kept without a break, and carried towards a meeting.",
            "bn": "আবু রাফির প্রশ্নে আবু হুরায়রা (রাঃ)-এর জবাবের ধরনটা মনে রাখার মতো। তিনি তর্কে যাননি। নবী ﷺ-এর পেছনে যা দেখেছেন, শুধু সেটুকু বলেছেন, আর বলেছেন তাঁর সঙ্গে দেখা হওয়া পর্যন্ত তা করে যাবেন। ফিকহি প্রশ্নে পাঠক যে মতই মানুন, এখানে ইবাদত ধরে রাখার একটি ছবি আছে। আগে যিনি করেছেন তাঁর কাছ থেকে পাওয়া, বিরতি ছাড়া ধরে রাখা, আর এক সাক্ষাতের দিকে বয়ে নিয়ে যাওয়া।"
          }
        ]
      }
    ]
  }
});
