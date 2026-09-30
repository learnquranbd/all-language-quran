/**
 * Tadabbur long-form articles — surah 22.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "22:5": {
    "sections": [
      {
        "h": {
          "en": "The Argument's Spine",
          "bn": "যুক্তির মেরুদণ্ড"
        },
        "p": [
          {
            "en": "The verse begins where the doubt begins. O people, if you should be in doubt about the Resurrection — and then it answers not with a threat but with evidence. As-Sa'di reads the whole ayah as two rational proofs set before the eyes, each pointing decisively to the very thing doubted and lifting the doubt from the heart. The spine of the argument is a single move, repeated in two forms: the God who originated you is the God who will return you, and returning is no harder for Him than beginning.",
            "bn": "সন্দেহ যেখানে শুরু, আয়াতও শুরু সেখান থেকেই। হে মানুষ, পুনরুত্থানের ব্যাপারে তোমরা যদি সন্দিহান হও, তাহলে জবাব আসে কোনো হুমকি দিয়ে নয়, প্রমাণ দিয়ে। সাদী গোটা আয়াতটিকে পড়েন চোখের সামনে রাখা দুই বুদ্ধিগ্রাহ্য প্রমাণ হিসেবে। প্রতিটি প্রমাণ যে জিনিসে সন্দেহ ঠিক সেটির দিকেই নিশ্চিতভাবে ইশারা করে আর অন্তর থেকে সন্দেহ সরিয়ে দেয়। গোটা যুক্তির মেরুদণ্ড একটাই কথা, দুই রূপে বলা: যিনি আপনাকে প্রথমবার সৃষ্টি করেছেন, তিনিই আপনাকে ফিরিয়ে আনবেন। আর ফিরিয়ে আনা তাঁর কাছে শুরু করার চেয়ে কঠিন কিছু নয়।"
          },
          {
            "en": "At-Tabari calls this an ihtijaj, a rebuttal aimed at the man of the earlier verses who disputes about Allah without knowledge. The reasoning is i'tibar, the taking of a lesson: from the first making of Adam, and of every child after him, you may know that the God able to do that cannot be unable to restore you once you have perished. Ibn Kathir says it as plainly. When Allah mentioned the denier of the raising, He mentioned the proof of His power over it, drawn from what can be seen of the way He begins creation.",
            "bn": "তাবারী এটিকে বলেন ইহতিজাজ, একটি খণ্ডন, যা লক্ষ্য করে আগের আয়াতের সেই লোকটিকে যে জ্ঞান ছাড়াই আল্লাহ নিয়ে বিতর্ক করে। এখানকার যুক্তি হলো ইতিবার, অর্থাৎ শিক্ষা নেওয়া। আদমের প্রথম সৃষ্টি আর তারপর প্রতিটি শিশুর সৃষ্টি থেকেই আপনি বুঝতে পারেন, যিনি এটা করতে পারেন, মৃত্যুর পর আপনাকে ফিরিয়ে আনা তাঁর অসাধ্য নয়। ইবন কাসীর একই কথা সোজাসুজি বলেন। আল্লাহ যখন পুনরুত্থান অস্বীকারকারীর কথা তুললেন, তখন তিনি তুললেন সেই ক্ষমতার প্রমাণও, যা তাঁর সৃষ্টি শুরু করার ধরনের মধ্যেই চোখে দেখা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Dust to Drop",
          "bn": "মাটি থেকে শুক্রবিন্দু"
        },
        "p": [
          {
            "en": "The first stage is turab, dust. Ibn Kathir, al-Baghawi and the Muyassar all read We created you from dust as pointing first to Adam, fashioned from dust and the root of the human line. Al-Baghawi then reads the next words of the descendants: then from a sperm-drop. The nutfah, he explains, is the semen, and the word is built from the sense of a little water, which is why it names something so slight. With these two words the verse sets the whole human story between a handful of earth and a passing drop.",
            "bn": "প্রথম ধাপ তুরাব, অর্থাৎ মাটি। ইবন কাসীর, বাগাভী আর মুয়াসসার সবাই আমি তোমাদের মাটি থেকে সৃষ্টি করেছি কথাটিকে প্রথমে বোঝেন আদমের দিকে ইশারা হিসেবে, যাঁকে মাটি থেকে গড়া হয়েছিল আর যিনি মানবগোষ্ঠীর মূল। এরপর বাগাভী পরের কথাগুলোকে বোঝেন বংশধরদের কথা হিসেবে: অতঃপর এক শুক্রবিন্দু থেকে। নুতফা মানে বীর্য, আর শব্দটির গোড়ায় আছে অল্প পানির অর্থ। এ কারণেই এত সামান্য জিনিসকে এই নামে ডাকা হয়। এই দুই শব্দ দিয়ে আয়াতটি গোটা মানবজীবনকে এক মুঠো মাটি আর এক ফোঁটা পানির মাঝখানে বসিয়ে দেয়।"
          },
          {
            "en": "As-Sa'di marks a careful boundary. The making from dust is the making of Adam, the father of mankind; the drop is where the shaping of each person begins. Ibn Kathir catches the same shift, glossing the drop as the offspring drawn from a despised fluid. So the verse is not saying you were personally kneaded from clay. It is saying your kind was begun from earth, and you yourself from something the eye would barely notice, and that from these unpromising beginnings a hearing, seeing, reasoning person was in fact produced.",
            "bn": "সাদী একটা সূক্ষ্ম সীমারেখা টানেন। মাটি থেকে সৃষ্টি মানে মানবজাতির পিতা আদমের সৃষ্টি, আর শুক্রবিন্দু হলো যেখান থেকে প্রত্যেক মানুষের গড়ন শুরু হয়। ইবন কাসীরও এই পরিবর্তনটা ধরেন, যখন তিনি শুক্রবিন্দুকে ব্যাখ্যা করেন তুচ্ছ পানি থেকে টেনে আনা বংশধর হিসেবে। তাই আয়াতটি বলছে না যে আপনাকে ব্যক্তিগতভাবে কাদা থেকে মাখা হয়েছিল। এটি বলছে, আপনার জাতের শুরু মাটি থেকে, আর আপনার নিজের শুরু এমন কিছু থেকে যা চোখে প্রায় ধরাই পড়ে না। অথচ এই নগণ্য শুরু থেকেই সত্যি সত্যি তৈরি হলো এক শোনা, দেখা, ভাবতে-পারা মানুষ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Clot, Then a Lump",
          "bn": "জমাট রক্ত, মাংসপিণ্ড"
        },
        "p": [
          {
            "en": "Then from a clinging clot. As-Sa'di describes the drop turning, by Allah's leave, into red blood. Al-Baghawi defines the 'alaqah as thick congealed blood and traces the sequence: the drop becomes thick blood, then the blood becomes flesh. Al-Qurtubi adds that 'alaq is the deep-red, fresh blood, and the Muyassar keeps the same picture. None of the commentators reach past what the word itself carries. The clot is named for a single plain quality, that it clings and congeals, and the verse lets that be enough.",
            "bn": "অতঃপর এক জমাট রক্ত থেকে। সাদী বলেন, আল্লাহর হুকুমে সেই শুক্রবিন্দু লাল রক্তে বদলে যায়। বাগাভী আলাকার সংজ্ঞা দেন ঘন জমাট রক্ত হিসেবে, আর ধাপগুলো সাজান: বিন্দু হয় ঘন রক্ত, তারপর রক্ত হয় মাংস। কুরতুবী যোগ করেন, আলাক হলো গাঢ় লাল টাটকা রক্ত, আর মুয়াসসারও সেই একই ছবিতে থাকে। কোনো তাফসীরকারই শব্দটা যা বহন করে তার বাইরে যান না। জমাট রক্তের নাম রাখা হয়েছে তার একটা সাদামাটা গুণ থেকে, সে আঁকড়ে ধরে আর জমে যায়। আয়াত এটুকুকেই যথেষ্ট থাকতে দেয়।"
          },
          {
            "en": "Then from a lump of flesh. Every source gives the same homely image: the mudghah is a little piece of flesh, the size of what is chewed in a mouthful. Al-Qurtubi links it to the Prophet's ﷺ well-known words that in the body there is a mudghah. Ibn Kathir describes a piece of meat with no form or delineation, which then begins to be shaped, so that a head, hands, a chest, a belly and legs are drawn out of it. The lump has no features yet; it is the raw material the shaping will work on.",
            "bn": "অতঃপর এক মাংসপিণ্ড থেকে। প্রতিটি সূত্র একই ঘরোয়া ছবি দেয়: মুদগা হলো ছোট্ট এক টুকরো মাংস, এক গ্রাসে যতটা চিবানো যায় ততটুকু। কুরতুবী একে জুড়ে দেন নবী ﷺ-এর সেই সুপরিচিত কথার সঙ্গে যে শরীরের ভেতর একটি মুদগা আছে। ইবন কাসীর বর্ণনা করেন এমন এক টুকরো গোশত, যাতে কোনো আকার বা রেখা নেই, তারপর তাতে গড়ন শুরু হয়, আর তা থেকে টেনে বের করা হয় মাথা, দুই হাত, বুক, পেট আর পা। পিণ্ডটির তখনো কোনো বৈশিষ্ট্য নেই। এটি সেই কাঁচামাল, যার উপর গড়নের কাজ চলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Formed and Unformed",
          "bn": "পূর্ণ ও অপূর্ণ আকৃতি"
        },
        "p": [
          {
            "en": "Formed and unformed — mukhallaqah wa ghayr mukhallaqah. At-Tabari records that the commentators divided over the phrase, and states his preference: the formed is what has been given a complete shape, and the unformed is the lump the womb casts out before its shaping is finished, before any soul is breathed in. Al-Farra', cited by al-Qurtubi, reads it the same way: the formed is complete in creation, the unformed is the miscarried. Qatadah, in at-Tabari, gives it in two words: complete and not complete.",
            "bn": "পূর্ণ আকৃতি আর অপূর্ণ আকৃতি, মুখাল্লাকা ওয়া গাইরু মুখাল্লাকা। তাবারী লিখে রাখেন, এই শব্দ নিয়ে তাফসীরকারেরা ভাগ হয়ে গেছেন, আর নিজের পছন্দের মতটা জানান: পূর্ণ মানে যাকে পুরো আকার দেওয়া হয়েছে, আর অপূর্ণ মানে সেই পিণ্ড যাকে গর্ভাশয় আকার পাওয়ার আগেই, রূহ ফুঁকে দেওয়ার আগেই বের করে ফেলে। কুরতুবীর উদ্ধৃত ফাররা একইভাবে পড়েন: পূর্ণ হলো যার সৃষ্টি সম্পূর্ণ, আর অপূর্ণ হলো গর্ভপাত হওয়া পিণ্ড। তাবারীতে কাতাদা দুই শব্দে বলেন: সম্পূর্ণ আর অসম্পূর্ণ।"
          },
          {
            "en": "Others read the pair differently. Mujahid, quoted by at-Tabari, Ibn Kathir and al-Baghawi, applies both words to the miscarried foetus, the siqt, whether it had taken shape or not. Ibn Zaid, in al-Qurtubi, says the formed is that in which Allah has made a head, hands and legs, while the unformed has nothing made in it. Ibn al-A'rabi has it that the formed has had its shaping begun, while the unformed is not yet given a figure. Ma'arif al-Qur'an reports another view: a foetus of sound, proportionate limbs is formed, a deformed foetus unformed.",
            "bn": "অন্যরা এই জোড়াটাকে পড়েন ভিন্নভাবে। তাবারী, ইবন কাসীর ও বাগাভীর উদ্ধৃত মুজাহিদ দুই শব্দকেই খাটান গর্ভপাত হওয়া ভ্রূণ, অর্থাৎ সিকতের উপর, আকার নিক বা না নিক। কুরতুবীতে ইবন যাইদ বলেন, পূর্ণ হলো সেটি যাতে আল্লাহ মাথা, হাত ও পা বানিয়েছেন, আর অপূর্ণ হলো সেটি যাতে কিছুই বানানো হয়নি। ইবনুল আরাবীর কথা হলো, পূর্ণ মানে যার গড়ন শুরু হয়ে গেছে, আর অপূর্ণকে এখনো কোনো অবয়ব দেওয়া হয়নি। মাআরিফুল কুরআন আরেকটি মত জানায়: সুস্থ ও সুসামঞ্জস্য অঙ্গের ভ্রূণ পূর্ণ, আর বিকৃত অঙ্গের ভ্রূণ অপূর্ণ।"
          },
          {
            "en": "Al-Qurtubi cites Ibn al-'Arabi drawing the readings together. Traced to the word's root, the drop, the clot and the lump are all formed, since each is a creation of Allah. But if shaping means the fashioning that is the end of the process, as in then We produced it as another creature, then the meaning is as Ibn Zaid said. Either way the phrase serves the same argument. It names two possible ends of a single lump, the born and the unborn, and lays both in the hand that says to make it clear to you.",
            "bn": "কুরতুবী ইবনুল আরাবীকে উদ্ধৃত করে মতগুলোকে এক জায়গায় আনেন। শব্দের মূলে ফিরে গেলে শুক্রবিন্দু, জমাট রক্ত আর পিণ্ড সবই পূর্ণ, কারণ প্রতিটিই আল্লাহর সৃষ্টি। কিন্তু গড়ন বলতে যদি বোঝাই সেই চূড়ান্ত রূপদান, যেমন অতঃপর আমি তাকে আরেক সৃষ্টিরূপে দাঁড় করালাম, তাহলে অর্থ দাঁড়ায় ইবন যাইদের কথামতোই। যেভাবেই পড়ুন, শব্দ দুটি সেই একই যুক্তির কাজে লাগে। এরা একটিমাত্র পিণ্ডের দুটি সম্ভাব্য পরিণতির নাম, জন্ম নেওয়া আর জন্ম না নেওয়া। দুটোকেই রাখা হয় সেই হাতে, যিনি বলেন তোমাদের কাছে স্পষ্ট করে দেওয়ার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angel and the Womb",
          "bn": "ফেরেশতা ও গর্ভাশয়"
        },
        "p": [
          {
            "en": "That We may make it clear to you. Al-Baghawi reads the clause as the point of the whole sequence: to show the perfection of Our power and wisdom in ordering the stages of your creation, so that from His power over the first making you reason to His power over the remaking. This is the a-fortiori spine again, now named in the verse itself. To fill in the stages, every commentator reaches for a single hadith, which they treat as the plain commentary on these words.",
            "bn": "তোমাদের কাছে স্পষ্ট করে দেওয়ার জন্য। বাগাভী এই কথাটুকুকে ধরেন গোটা ধারার মূল বক্তব্য হিসেবে: তোমাদের সৃষ্টির ধাপগুলো সাজানোয় আমার ক্ষমতা ও প্রজ্ঞার পূর্ণতা দেখানো, যাতে প্রথম সৃষ্টির উপর তাঁর ক্ষমতা দেখে তোমরা পুনঃসৃষ্টির উপর তাঁর ক্ষমতার দিকে যুক্তি টানতে পার। এটাই আবার সেই মেরুদণ্ড, তবে এবার আয়াতের ভেতরেই নাম ধরে বলা। ধাপগুলো ভরে দিতে প্রতিটি তাফসীরকার হাত বাড়ান একটিমাত্র হাদীসের দিকে, যাকে তাঁরা এই কথাগুলোর সাদামাটা ব্যাখ্যা হিসেবেই গণ্য করেন।"
          },
          {
            "en": "It is recorded in the two Sahihs, and in al-Bukhari as hadith 3208, on the authority of Ibn Mas'ud, that the Messenger of Allah ﷺ, the truthful and trusted, said: \"The creation of each of you is gathered in his mother's womb in forty days, then he becomes a clot of thick blood for a similar period, then a piece of flesh for a similar period. Then Allah sends an angel who is ordered to write four things: his deeds, his livelihood, his term of life, and whether he will be wretched or blessed. Then the soul is breathed into him.\"",
            "bn": "এটি লিপিবদ্ধ আছে দুই সহীহতে, আর বুখারীতে ৩২০৮ নম্বর হাদীস হিসেবে, ইবন মাসঊদের সূত্রে। রাসূলুল্লাহ ﷺ, যিনি সত্যবাদী ও সত্যায়িত, বলেছেন: তোমাদের প্রত্যেকের সৃষ্টি তার মায়ের পেটে চল্লিশ দিন একত্র করা হয়, তারপর সে অনুরূপ সময়ে জমাট রক্ত হয়, তারপর অনুরূপ সময়ে এক টুকরো মাংস হয়। তারপর আল্লাহ একজন ফেরেশতা পাঠান, যাকে চারটি কথা লেখার নির্দেশ দেওয়া হয়: তার আমল, তার রিযিক, তার আয়ু, আর সে হতভাগা হবে না সৌভাগ্যবান। তারপর তাতে রূহ ফুঁকে দেওয়া হয়।"
          },
          {
            "en": "And We settle in the wombs whom We will for a specified term. At-Tabari reads this of the child for whom a set span of life has been written: We keep him in the womb until his time, so it does not cast him out, and he stays till the term is complete. Al-Qurtubi notes the scholars' agreement that the soul is breathed in only after the fourth month passes into the fifth. He adds a caution: the shaping ascribed to the angel is a secondary cause, for the real creating belongs to Allah alone, who elsewhere says He formed you and gave you your best form.",
            "bn": "আর আমি যাকে ইচ্ছা করি তাকে এক নির্দিষ্ট কাল পর্যন্ত গর্ভাশয়ে রাখি। তাবারী একে পড়েন সেই ভ্রূণের কথা হিসেবে যার জন্য নির্দিষ্ট মেয়াদ পর্যন্ত জীবন লেখা হয়েছে: আমি তাকে তার সময় পর্যন্ত মায়ের গর্ভে রাখি, তাই তা তাকে ফেলে দেয় না, আর সে মেয়াদ পূর্ণ হওয়া পর্যন্ত থেকে যায়। কুরতুবী মনে করিয়ে দেন আলিমদের ঐকমত্য যে রূহ ফুঁকে দেওয়া হয় কেবল চতুর্থ মাস পেরিয়ে পঞ্চম মাসে ঢুকলে। তিনি সাবধানে যোগ করেন, ফেরেশতার দিকে আরোপ করা গড়ন আসলে গৌণ কারণমাত্র, কারণ প্রকৃত সৃষ্টি কেবল আল্লাহরই, যিনি অন্যত্র বলেন তিনিই তোমাদের আকৃতি দিয়েছেন আর সুন্দর আকৃতি দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Child, Strength, Decline",
          "bn": "শিশু, শক্তি, বার্ধক্য"
        },
        "p": [
          {
            "en": "Then We bring you out as a child. Ibn Kathir dwells on the word weak: weak in body, in hearing and sight, in the senses, in grip and in mind. Then Allah gives him strength little by little, and softens his parents toward him through the hours of night and the ends of day. Then that you may reach your maturity: as-Sa'di, Ibn Kathir and al-Qurtubi all gloss ashudd as the completion of strength and of intellect. Ma'arif adds that ashudd is a plural, the faculties all arriving at their peak together, in the prime of youth.",
            "bn": "অতঃপর আমি তোমাদের শিশুরূপে বের করে আনি। ইবন কাসীর দুর্বল শব্দটার উপর থামেন: দেহে দুর্বল, শোনায় ও দেখায় দুর্বল, ইন্দ্রিয়ে দুর্বল, ধরায় আর বুদ্ধিতে দুর্বল। তারপর আল্লাহ তাকে একটু একটু করে শক্তি দেন, আর রাতের প্রহরে ও দিনের প্রান্তে বাবা-মায়ের মন তার দিকে নরম করে দেন। এরপর যাতে তোমরা তোমাদের পূর্ণ শক্তিতে পৌঁছাও: সাদী, ইবন কাসীর আর কুরতুবী সবাই আশুদ্দকে বোঝেন শক্তি ও বুদ্ধির পূর্ণতা হিসেবে। মাআরিফ যোগ করে, আশুদ্দ একটি বহুবচন, সব শক্তি একসঙ্গে তাদের চূড়ায় পৌঁছায়, যৌবনের ভরা সময়ে।"
          },
          {
            "en": "And among you is he who is taken in death before he reaches that strength, say as-Sa'di and al-Baghawi; and among you is he who is returned to the most decrepit age. Ibn Kathir describes senility and old age, the failing of strength, mind and understanding, the slow slide into dotage, so that, in the verse's words, he knows nothing after having had knowledge. As-Sa'di draws a whole life from it: a man's strength stands hedged between two weaknesses, childhood at the start and old age at the close, both the work of the same hand.",
            "bn": "আর তোমাদের কেউ সেই শক্তিতে পৌঁছানোর আগেই মৃত্যুবরণ করে, বলেন সাদী আর বাগাভী; আর তোমাদের কাউকে ফিরিয়ে দেওয়া হয় নিকৃষ্টতম বয়সে। ইবন কাসীর একে বর্ণনা করেন বার্ধক্য আর জরা হিসেবে, শক্তি, বুদ্ধি আর বোঝার ক্ষমতার ক্ষয়, ধীরে ধীরে ভীমরতির দিকে নেমে যাওয়া, যাতে আয়াতের কথাতেই জ্ঞান লাভের পরেও সে আর কিছু জানে না। সাদী এ থেকে গোটা জীবনের ছাঁচ এঁকে দেন: মানুষের শক্তি দাঁড়িয়ে থাকে দুই দুর্বলতার বেড়ার মাঝে, শুরুতে শৈশবের দুর্বলতা আর শেষে বার্ধক্যের দুর্বলতা, দুটোই একই হাতের কাজ।"
          },
          {
            "en": "Both al-Qurtubi and Ma'arif al-Qur'an note here a prayer of the Prophet ﷺ, cited from an-Nasa'i on the authority of Sa'd: that he used to seek Allah's refuge from miserliness, from cowardice, and from being returned to the most decrepit age. That the man given knowledge should be led out of it again is no defeat in the argument; it is another turn of the same wheel. The God who can lift a person from a drop to full mind, then let that mind ebb, holds the whole arc, and can begin it once more.",
            "bn": "কুরতুবী আর মাআরিফুল কুরআন এখানে নবী ﷺ-এর একটি দোয়ার কথা জানায়, যা তারা নাসাঈ থেকে সাদের সূত্রে উদ্ধৃত করে: তিনি আল্লাহর কাছে আশ্রয় চাইতেন কৃপণতা থেকে, ভীরুতা থেকে, আর নিকৃষ্টতম বয়সে ফিরিয়ে দেওয়া থেকে। যাকে জ্ঞান দেওয়া হলো তাকে আবার সেই জ্ঞান থেকে বের করে আনা যুক্তির কোনো পরাজয় নয়। এ সেই একই চাকার আরেক পাক। যিনি এক ফোঁটা থেকে একজনকে পূর্ণ বুদ্ধিতে তুলতে পারেন, আর তারপর সেই বুদ্ধিকে নেমে যেতে দেন, গোটা বাঁকটাই তাঁর হাতে, আর তিনি তা আবার নতুন করে শুরুও করতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dead Earth Quickened",
          "bn": "মৃত মাটির জেগে ওঠা"
        },
        "p": [
          {
            "en": "And you see the earth barren. Ibn Kathir names this openly as another proof of Allah's power to give life to the dead, as He revives the dead and barren earth where nothing grows. He gathers the early readers: Qatadah calls the barren ground dusty and crumbled, and as-Suddi calls it simply dead. Ibn Jurayj, in al-Qurtubi, glosses hamidah as land that puts forth nothing. As-Sa'di counts this the second of the verse's two rational proofs, the giving of life to the earth after its death.",
            "bn": "আর তুমি ভূমিকে দেখ শুষ্ক, মৃত। ইবন কাসীর একে খোলাখুলি বলেন আল্লাহর মৃতকে জীবন দেওয়ার ক্ষমতার আরেকটি প্রমাণ, যেমন তিনি জীবন দেন সেই মৃত শুষ্ক জমিকে যাতে কিছুই জন্মায় না। তিনি সালাফের কথা একত্র করেন: কাতাদা এই শুকনো জমিকে বলেন ধুলোময় ও চূর্ণ, আর সুদ্দী বলেন কেবল মৃত। কুরতুবীতে ইবন জুরাইজ হামিদাকে বোঝান এমন জমি হিসেবে যা কিছুই উদগত করে না। সাদী একে গণ্য করেন আয়াতের দুই বুদ্ধিগ্রাহ্য প্রমাণের দ্বিতীয়টি, অর্থাৎ মৃত্যুর পর মাটিকে জীবন দান।"
          },
          {
            "en": "But when We send down upon it rain, it quivers and swells and grows of every beautiful kind. At-Tabari reads it quivers as the ground stirring with growth, for soil rises when its plants push up, and that rising is its stir; it swells he reads as increase, the rain known in the swelling. Al-Qurtubi notes a fine grammatical point: because the verse ends by saying the earth put forth, the quivering and swelling belong to the earth itself, not only the plants. Bahij, says Qatadah, means beautiful, a growth that delights whoever looks on it.",
            "bn": "কিন্তু আমি যখন তার উপর পানি বর্ষণ করি, তখন তা নড়ে ওঠে, ফুলে ওঠে আর সব রকম সুন্দর জিনিস উদগত করে। তাবারী নড়ে ওঠে পড়েন জমির উদ্ভিদে সাড়া দেওয়া হিসেবে, কারণ গাছপালা ঠেলে উঠলে মাটি উঁচু হয়, আর সেই ওঠাই তার নড়া; আর ফুলে ওঠে তিনি বোঝেন বৃদ্ধি হিসেবে, বৃষ্টির চিহ্ন ফুটে ওঠে জমির ফুলে ওঠায়। কুরতুবী একটি সূক্ষ্ম ব্যাকরণগত কথা ধরেন: যেহেতু আয়াত শেষ হয় জমি উদগত করল বলে, তাই নড়া আর ফোলা মাটিরই, কেবল গাছের নয়। বাহীজ, বলেন কাতাদা, মানে সুন্দর, এমন সবুজ যা দেখলেই যে-কেউ মুগ্ধ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Proofs You Can See",
          "bn": "চোখে দেখা দুই প্রমাণ"
        },
        "p": [
          {
            "en": "The two proofs share a single feature, and it is the feature that makes the argument work. Neither is fetched from the unseen. The verse says you see twice over: you see the human stages around you, and you see the earth. As-Sa'di calls them two decisive proofs, each witnessed, together establishing all the passage claims. The whole movement is istidlal, reasoning from the plainly seen to the thing denied. It is why the passage can close, in the next verse, with the verdict Ibn Kathir names: that is because Allah is the Truth, and it is He who gives life to the dead.",
            "bn": "দুই প্রমাণের একটা মিল আছে, আর সেই মিলটাই যুক্তিটাকে খাটায়। কোনোটাই অদেখা থেকে টেনে আনা নয়। আয়াত দুবার বলে তুমি দেখ: চারপাশে ঘটতে থাকা মানুষের ধাপগুলো তুমি দেখ, আর মাটিকেও তুমি দেখ। সাদী এদের বলেন দুটি চূড়ান্ত প্রমাণ, দুটোই চোখে দেখা, আর একসঙ্গে এরা আয়াতের সব দাবি প্রতিষ্ঠা করে। পুরো চলাটাই ইসতিদলাল, স্পষ্ট দেখা জিনিস থেকে অস্বীকৃত জিনিসের দিকে যুক্তি টানা। এ জন্যই পরের আয়াতে অনুচ্ছেদটি শেষ হতে পারে ইবন কাসীরের বলা রায় দিয়ে: এসব এ কারণে যে আল্লাহই সত্য, আর তিনিই মৃতকে জীবন দেন।"
          },
          {
            "en": "A word of care is owed the reader. This verse and its neighbour speak of pregnancy and of the foetus that does not come to term, and the classical jurists, al-Qurtubi at length, built rulings from these very stages. But the work of the ayah here is not medical or legal instruction. It holds up the making of every human being as a sign, to answer a doubt about being raised, not to tell anyone what to do with a body or a pregnancy. In the end it leaves you not with a rule but with a question about your Maker.",
            "bn": "পাঠকের প্রতি একটুখানি সতর্ক কথা বলা দরকার। এই আয়াত আর তার প্রতিবেশী আয়াত গর্ভধারণ আর যে ভ্রূণ পূর্ণ মেয়াদে আসে না তার কথা বলে, আর ফিকহের ইমামরা, তাদের মধ্যে কুরতুবী দীর্ঘভাবে, এই ধাপগুলো থেকেই নানা বিধান বের করেছেন। কিন্তু এখানে আয়াতের কাজ কোনো চিকিৎসা বা আইনি নির্দেশ নয়। এটি প্রতিটি মানুষের সৃষ্টিকে এক নিদর্শন হিসেবে তুলে ধরে, আর তা করে পুনরুত্থানের সন্দেহের জবাব দিতে, কাউকে শরীর বা গর্ভ নিয়ে কী করতে হবে তা বলতে নয়। শেষ পর্যন্ত এটি আপনাকে কোনো বিধান নয়, বরং আপনার স্রষ্টাকে নিয়ে একটা প্রশ্ন হাতে ধরিয়ে দেয়।"
          }
        ]
      }
    ]
  },
  "22:7": {
    "sections": [
      {
        "h": {
          "en": "A Conclusion, Not an Opening",
          "bn": "এটি সিদ্ধান্ত, সূচনা নয়"
        },
        "p": [
          {
            "en": "This verse does not begin a sentence; it continues one. 22:5 addresses people who are in doubt about the resurrection and lays before them two things they had all watched happen: a human being made by stages, and dry ground that quivers and swells and grows every beautiful kind once rain falls on it. 22:6 then draws the conclusion with dhalika bi-anna, that is because, and 22:7 carries the same particle forward.",
            "bn": "এই আয়াতটি নতুন কোনো বাক্য শুরু করে না; আগের বাক্যটিই এগিয়ে নিয়ে যায়। 22:5 তাদের সম্বোধন করে যারা পুনরুত্থান নিয়ে সন্দিহান, আর তাদের সামনে এমন দুটি জিনিস রাখে যা তারা সবাই ঘটতে দেখেছে: ধাপে ধাপে মানুষের সৃষ্টি, আর শুকনো জমি — যা বৃষ্টি পড়লে প্রাণচঞ্চল হয়, স্ফীত হয় এবং সব রকম নয়নজুড়ানো উদ্ভিদ উৎপন্ন করে। এরপর 22:6 'যালিকা বি-আন্না' অর্থাৎ 'এ কারণে যে' দিয়ে সিদ্ধান্ত টানে, আর 22:7 সেই একই শব্দটিকে বহন করে নিয়ে যায়।"
          },
          {
            "en": "Count the clauses hanging on that particle and there are five. 22:6 gives three: that Allah is al-Haqq, the Real; that He gives life to the dead; that He is competent over all things. 22:7 adds the remaining two: that the Hour is coming, no doubt about it, and that Allah resurrects whoever is in the graves. The Hour is not simply asserted here. It is concluded from evidence the listener has already granted.",
            "bn": "সেই শব্দটির সঙ্গে যুক্ত বাক্যাংশগুলো গুনলে পাওয়া যায় পাঁচটি। 22:6 দেয় তিনটি: আল্লাহ-ই আল-হক্ব, প্রকৃত সত্য; তিনিই মৃতকে জীবিত করেন; তিনি সব বিষয়ে ক্ষমতাবান। 22:7 যোগ করে বাকি দুটি: কিয়ামত আসছে, এতে কোনো সন্দেহ নেই; আর কবরে যে আছে আল্লাহ তাকে পুনরুত্থিত করবেন। কিয়ামতের কথা এখানে কেবল ঘোষণা করা হচ্ছে না। শ্রোতা ইতিমধ্যেই যে প্রমাণ মেনে নিয়েছে, সেখান থেকেই এটি সিদ্ধান্ত হিসেবে টানা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Atiyah: Already on the Way",
          "bn": "আতিয়াহ: ইতিমধ্যেই পথে"
        },
        "p": [
          {
            "en": "The Arabic does not use a future verb for the Hour. It uses an active participle, atiyah, one that is coming — the form used of a traveller already on the road rather than of a journey being planned. The same participle describes the Hour in 15:85, in 20:15 and in 40:59, and 40:59 is almost this verse's twin: indeed the Hour is coming, no doubt about it, but most of the people do not believe.",
            "bn": "আরবিতে কিয়ামতের জন্য ভবিষ্যৎকালের ক্রিয়া ব্যবহার করা হয়নি। ব্যবহার করা হয়েছে কর্তৃবাচক বিশেষণ 'আতিয়াহ' — যে আসছে; এই রূপটি এমন পথিকের বেলায় ব্যবহৃত হয় যে ইতিমধ্যেই পথে নেমে পড়েছে, পরিকল্পনাধীন কোনো সফরের বেলায় নয়। একই রূপে কিয়ামতকে বর্ণনা করা হয়েছে 15:85, 20:15 ও 40:59-এ; আর 40:59 তো প্রায় এই আয়াতেরই যমজ: নিশ্চয় কিয়ামত আসছে, এতে কোনো সন্দেহ নেই, কিন্তু অধিকাংশ মানুষ বিশ্বাস করে না।"
          },
          {
            "en": "The surah had already put its reader inside that arrival. 22:1 calls people to fear their Lord because the convulsion of the Hour is a terrible thing, and 22:2 describes a nursing mother distracted from the child she was nursing. By the time the argument of 22:5 is made and this conclusion drawn, the Hour has been shown first and proved afterwards.",
            "bn": "সূরাটি আগেই তার পাঠককে সেই আগমনের ভেতরে বসিয়ে দিয়েছে। 22:1 মানুষকে তাদের প্রতিপালককে ভয় করতে বলে, কারণ কিয়ামতের প্রকম্পন এক ভয়ংকর ব্যাপার; আর 22:2 বর্ণনা করে সেই দুগ্ধদাত্রী মাকে, যে তার দুধপান করানো শিশুর কথা ভুলে যায়। 22:5-এর যুক্তি পেশ হওয়া ও এখানে সিদ্ধান্ত টানার আগেই কিয়ামত দেখানো হয়ে গেছে, প্রমাণ এসেছে তার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Doubt Was Named",
          "bn": "সন্দেহের নাম যেখানে বলা হয়েছিল"
        },
        "p": [
          {
            "en": "The passage opens and closes on one root. 22:5 begins by addressing whoever is in rayb about the resurrection, and 22:7 ends the argument with la rayba fiha, no doubt about it. The evidence sits between the two. The verse is not reporting that everyone has been persuaded: 22:55 says plainly that those who disbelieve will not cease to be in doubt of it until the Hour comes upon them unexpectedly.",
            "bn": "অনুচ্ছেদটি শুরু ও শেষ হয় একই শব্দমূলে। 22:5 শুরু হয় তাদের সম্বোধন করে যারা পুনরুত্থান নিয়ে 'রাইব'-এ আছে, আর 22:7 যুক্তিটি শেষ করে 'লা রায়বা ফীহা' দিয়ে — এতে কোনো সন্দেহ নেই। প্রমাণ বসে আছে এই দুইয়ের মাঝখানে। আয়াতটি এ কথা জানাচ্ছে না যে সবাই বিশ্বাস করে ফেলেছে: 22:55 স্পষ্ট বলে, যারা কুফরি করে তারা এ বিষয়ে সন্দেহে থাকতেই থাকবে, যতক্ষণ না আকস্মিকভাবে কিয়ামত তাদের ওপর এসে পড়ে।"
          },
          {
            "en": "What is denied is a ground for doubt in the thing itself, not the existence of doubters. The very next verse shows the distinction is deliberate: 22:8 turns to the man who disputes about Allah with no knowledge, no guidance and no illuminating book. Doubt of that kind is not a position the verse has failed to answer. It is a posture, and the surah names it for what it is and moves on.",
            "bn": "যা অস্বীকার করা হচ্ছে তা হলো বিষয়টির ভেতরে সন্দেহের কোনো ভিত্তি থাকা — সন্দেহপোষণকারীদের অস্তিত্ব নয়। ঠিক পরের আয়াতটিই দেখায় এই পার্থক্যটি ইচ্ছাকৃত: 22:8 ফিরে যায় সেই মানুষের দিকে, যে জ্ঞান, পথনির্দেশ ও আলোকদানকারী কিতাব ছাড়াই আল্লাহ সম্পর্কে বিতর্ক করে। এ ধরনের সন্দেহ এমন কোনো অবস্থান নয় যার জবাব আয়াতটি দিতে ব্যর্থ হয়েছে। এটি একটি ভঙ্গি, আর সূরা তার আসল নামটি বলে দিয়ে এগিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Is in the Graves",
          "bn": "যারা কবরে আছে"
        },
        "p": [
          {
            "en": "22:6 had said He gives life to al-mawta, the dead. 22:7 says something narrower and more personal: Allah raises man fi al-qubur, whoever is in the graves. Man is the Arabic relative used of persons rather than of things, so the sentence keeps the one raised a someone. Nothing here suggests a general renewal of life in which individuals are lost. A grave holds a particular person, and it is that person who is named.",
            "bn": "22:6 বলেছিল, তিনি 'আল-মাওতা' অর্থাৎ মৃতদের জীবিত করেন। 22:7 বলে আরও সংকীর্ণ ও আরও ব্যক্তিগত একটি কথা: আল্লাহ পুনরুত্থিত করবেন 'মান ফিল-কুবূর' — কবরে যে আছে তাকে। আরবিতে 'মান' সেই সম্বন্ধবাচক শব্দ যা বস্তুর নয়, ব্যক্তির বেলায় ব্যবহৃত হয়; ফলে বাক্যটি পুনরুত্থিত ব্যক্তিকে 'কেউ একজন' হিসেবেই রাখে। এখানে এমন কোনো সাধারণ প্রাণসঞ্চারের ইঙ্গিত নেই যেখানে ব্যক্তি হারিয়ে যায়। কবরে থাকে নির্দিষ্ট একজন মানুষ, আর তার কথাই বলা হচ্ছে।"
          },
          {
            "en": "The same surah says it a third way. 22:66 lists the sequence as already half-completed: He is the One who gave you life, then causes you to die, then gives you life. Two of those three have happened to every reader. 100:9 asks whether man does not know that a day comes when what is in the graves is scattered out.",
            "bn": "একই সূরা কথাটি তৃতীয়বার অন্যভাবে বলে। 22:66 এই ক্রমটিকে এমনভাবে পেশ করে যার অর্ধেক ইতিমধ্যেই সম্পন্ন: তিনিই তোমাদের জীবন দিয়েছেন, তারপর মৃত্যু ঘটাবেন, তারপর আবার জীবিত করবেন। এই তিনটির দুটি প্রত্যেক পাঠকের ক্ষেত্রেই ঘটে গেছে। 100:9 জিজ্ঞেস করে, মানুষ কি জানে না যে এমন দিন আসে যেদিন কবরে যা আছে তা বের করে ছড়িয়ে দেওয়া হবে?"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Date Is Hidden",
          "bn": "তারিখটি কেন গোপন"
        },
        "p": [
          {
            "en": "20:15 adds the reason the date is kept hidden: the Hour is coming, and, He says, I almost conceal it, so that every soul may be recompensed for what it strives for. A published date would turn preparation into a deadline, and deadlines are met late. Concealment spreads readiness across a whole life instead of concentrating it into a final week that nobody has been promised in the first place.",
            "bn": "20:15 জানায় তারিখটি কেন গোপন রাখা হয়েছে: কিয়ামত আসছে — আমি তা প্রায় গোপনই রাখি — যাতে প্রত্যেক প্রাণ তার প্রচেষ্টা অনুযায়ী প্রতিদান পায়। তারিখ ঘোষিত হলে প্রস্তুতি হয়ে যেত সময়সীমা, আর সময়সীমার কাজ মানুষ শেষ মুহূর্তেই করে। গোপন রাখা প্রস্তুতিকে সারা জীবনজুড়ে ছড়িয়ে দেয়, শেষ একটি সপ্তাহে জমা করে না — যে সপ্তাহটি পাওয়ার প্রতিশ্রুতি কাউকে দেওয়াই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Toward It",
          "bn": "সেদিকে মুখ করে বাঁচা"
        },
        "p": [
          {
            "en": "The practical effect of the verse falls on the deeds nobody saw. If the raising is of persons out of graves, then the unwitnessed portion of a life is not lost material. A kindness with no audience, a temptation refused in private, a debt quietly repaid — all of it has been recorded by the One who is bringing the record with Him. Little else in ordinary experience gives that kind of weight to hidden work.",
            "bn": "আয়াতটির ব্যবহারিক প্রভাব পড়ে সেই আমলগুলোর ওপর যা কেউ দেখেনি। পুনরুত্থান যদি কবর থেকে ব্যক্তিদের ওঠানো হয়, তবে জীবনের যে অংশ কেউ দেখেনি তা হারিয়ে যাওয়া উপকরণ নয়। দর্শকহীন একটি অনুগ্রহ, নির্জনে প্রত্যাখ্যান করা একটি প্রলোভন, নীরবে শোধ করা একটি ঋণ — সবই লিপিবদ্ধ করেছেন তিনি, যিনি সেই লিপি সঙ্গে নিয়েই আসছেন। সাধারণ অভিজ্ঞতায় আর কোনো কিছুই গোপন কাজকে এমন ওজন দেয় না।"
          },
          {
            "en": "It also sets a limit on grief. Those in the graves are described as being raised, not as having ended, so a loss is a separation with a term attached rather than a disappearance. Read 22:7 slowly at a graveside and its two clauses do exactly what the surah intends them to do: the Hour is coming and no doubt is in it, and the One bringing it raises whoever is lying there.",
            "bn": "এটি শোকেরও একটি সীমা টেনে দেয়। কবরে যারা আছে তাদের বর্ণনা করা হয়েছে পুনরুত্থিতদের হিসেবে, শেষ হয়ে যাওয়াদের হিসেবে নয়; তাই কোনো মৃত্যু হলো মেয়াদসহ এক বিচ্ছেদ, নিশ্চিহ্ন হয়ে যাওয়া নয়। কবরের পাশে দাঁড়িয়ে 22:7 ধীরে পড়ুন, তখন এর দুটি বাক্যাংশ ঠিক সেই কাজটিই করে যা সূরা চেয়েছিল: কিয়ামত আসছে, তাতে কোনো সন্দেহ নেই, আর যিনি তা আনছেন তিনিই সেখানে শায়িত ব্যক্তিকে ওঠাবেন।"
          }
        ]
      }
    ]
  },
  "22:18": {
    "sections": [
      {
        "h": {
          "en": "A Look with the Heart",
          "bn": "অন্তর দিয়ে এক দেখা"
        },
        "p": [
          {
            "en": "Alam tara — do you not see? Al-Qurtubi says this is the sight of the heart: have you not seen with your heart and mind. Al-Baghawi reads it as alam ta'lam, do you not know, and adds that it can mean read this with your heart. The Muyassar hears it addressed first to the Messenger himself. So the command is not to catch a scene with the eye but to take in, and hold, a truth the eye could never assemble at once.",
            "bn": "আলাম তারা: তুমি কি দেখ না? কুরতুবী বলেন, এটা অন্তরের দেখা, অর্থাৎ তুমি কি তোমার অন্তর ও বিবেক দিয়ে দেখনি। বাগাভী পড়েন আলাম তা'লাম, অর্থাৎ তুমি কি জান না, আর জুড়ে দেন যে এর মানে হতে পারে অন্তর দিয়ে একে পড়া। মুয়াসসারের কানে ডাকটা প্রথমে যায় রসূল ﷺ-এর কাছেই। তাই হুকুমটা চোখ দিয়ে কোনো দৃশ্য ধরার নয়, বরং এমন এক সত্য মনে ধরে রাখার, যা চোখ কখনো একসাথে গুছিয়ে নিতে পারে না।"
          },
          {
            "en": "What follows is not one more sign to reason from. It is the whole of things named in a single breath, and the claim laid on them is one act: they prostrate. Before a word is said about people, the verse has gathered the heavens, the earth, and the great bodies of the sky into one posture before one Lord. The heart is asked to see itself inside that crowd, and to notice that almost all of it is already down.",
            "bn": "এরপর যা আসে তা যুক্তি টানার আরেকটা নিদর্শন নয়। এক নিঃশ্বাসে গোটা সৃষ্টির নাম, আর তাদের উপর চাপানো দাবি একটাই: তারা সেজদা করে। মানুষের কথা তোলার আগেই আয়াতটি আকাশ, জমিন আর আকাশের বড় বড় বস্তুকে এক রবের সামনে এক ভঙ্গিতে জড়ো করে ফেলেছে। অন্তরকে বলা হচ্ছে নিজেকে ওই ভিড়ের ভেতর দাঁড়ানো দেখতে, আর খেয়াল করতে যে সেই ভিড়ের প্রায় সবটাই আগে থেকে নত হয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whole World Listed",
          "bn": "গোটা দুনিয়ার তালিকা"
        },
        "p": [
          {
            "en": "To Allah prostrates whoever is in the heavens and whoever is on the earth. Ibn Kathir reads the first as the angels through the reaches of the heavens, and the second as every living thing in every direction — people, jinn, beasts and birds. He sets beside it the wider word of the Qur'an, that there is not a thing but glorifies His praise (17:44). The count is not a sample. It is meant to leave nothing standing outside the sentence.",
            "bn": "আল্লাহকে সেজদা করে যারা আকাশে আছে আর যারা জমিনে আছে। ইবন কাসীর প্রথমটিকে বোঝেন আকাশের নানা প্রান্তের ফেরেশতা হিসেবে, আর দ্বিতীয়টিকে সব দিকের সব জীব হিসেবে: মানুষ, জিন, জীবজন্তু আর পাখি। এর পাশে তিনি রাখেন কুরআনের আরও ব্যাপক কথা, এমন কোনো কিছুই নেই যা তাঁর প্রশংসায় তাসবীহ পড়ে না (১৭:৪৪)। এই গণনা কোনো নমুনা নয়। এর উদ্দেশ্য এই বাক্যের বাইরে কিছুকেই দাঁড়িয়ে থাকতে না দেওয়া।"
          },
          {
            "en": "Then three are named that need not have been: the sun, the moon, the stars. Ibn Kathir explains they are singled out because they had been worshipped instead of Allah, so the verse makes plain that they too prostrate to their Creator, ruled and pressed into service. He recalls the command elsewhere: do not prostrate to the sun or the moon, but to Allah who created them (41:37). The idols of the sky are put back in the ranks of the servants.",
            "bn": "এরপর নাম নেওয়া হয় এমন তিনটির, যাদের নাম আলাদা করে না বললেও চলত: সূর্য, চন্দ্র আর তারা। ইবন কাসীর বলেন, এদের আলাদা করে তোলা হয়েছে কারণ আল্লাহকে বাদ দিয়ে এদের পূজা করা হতো। তাই আয়াত স্পষ্ট করে দেয় যে এরাও নিজেদের স্রষ্টাকেই সেজদা করে, এরা শাসিত আর কাজে নিয়োজিত। তিনি অন্য জায়গার হুকুম মনে করিয়ে দেন: সূর্য বা চন্দ্রকে সেজদা কোরো না, বরং সেজদা করো সেই আল্লাহকে যিনি এদের সৃষ্টি করেছেন (৪১:৩৭)। আকাশের মূর্তিগুলোকে আবার বান্দার কাতারে দাঁড় করিয়ে দেওয়া হয়।"
          },
          {
            "en": "After the sky come the mountains, the trees, and the moving creatures. Ibn Kathir glosses ad-dawabb as the animals, all of them. The Muyassar takes the whole line in a single breath and reads the posture into it: all of this bows to Allah humbly and compliant, brought low and made to yield. Nothing on the list is asked for its consent, and nothing is treated as too small or too solid to be counted among those who prostrate. The sentence keeps its promise to leave nothing out.",
            "bn": "আকাশের পর আসে পাহাড়, গাছপালা আর চলমান প্রাণীরা। ইবন কাসীর 'আদ-দাওয়াব্ব' বোঝান জীবজন্তু বলে, তাদের সবাইকে। মুয়াসসার গোটা লাইনটাকে এক নিঃশ্বাসে নেন আর তার ভেতরে ভঙ্গিটা পড়ে নেন: এই সবকিছু বিনীতভাবে, অনুগত হয়ে আল্লাহকে সেজদা করে, নত আর বশীভূত হয়ে। তালিকার কারও কাছে তার সম্মতি চাওয়া হয় না, আর কোনো কিছুকে সেজদাকারীদের গণনায় তোলার জন্য বড্ড ছোট বা বড্ড কঠিন বলে বাদ দেওয়া হয় না। বাক্যটা কিছু বাদ না রাখার কথা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways of Bowing",
          "bn": "দুই রকম সেজদা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an lays out two kinds of submission hidden in one word. The first is the submission of creation itself. By an inbuilt guidance, the whole universe and everything in it is held under the will of its Maker; this bowing is pre-determined, involuntary and instinctive. No created being escapes it, believer or denier, living or dead, mineral or plant. On this level the sun and the disbeliever are in the very same posture.",
            "bn": "মাআরিফুল কুরআন একটি শব্দের ভেতরে লুকানো দুই রকম আত্মসমর্পণ খুলে ধরে। প্রথমটি খোদ সৃষ্টির আত্মসমর্পণ। ভেতরে গেঁথে দেওয়া এক পরিচালনার গুণে গোটা বিশ্ব আর তার ভেতরের সবকিছু তাদের স্রষ্টার ইচ্ছার অধীন; এই মাথা নত করা পূর্বনির্ধারিত, বাধ্যতামূলক আর সহজাত। কোনো সৃষ্টিই এর থেকে রেহাই পায় না, সে মুমিন হোক বা অস্বীকারকারী, জীবিত হোক বা মৃত, খনিজ হোক বা উদ্ভিদ। এই স্তরে সূর্য আর অস্বীকারকারী ঠিক একই ভঙ্গিতে দাঁড়ানো।"
          },
          {
            "en": "Ibn Kathir names the same double edge from the other side. Everything, he says, prostrates to Allah's greatness willingly or unwillingly, each in the manner that belongs to it alone. Then the verse turns: and many of the people. Of these Ibn Kathir writes that they prostrate willingly, choosing it, worshipping by it. The Muyassar names them plainly — these are the believers, who bow to Allah in obedience and by their own choice. The word has not changed, but under it a second, freer act has appeared.",
            "bn": "ইবন কাসীর একই দুই ধার নাম দেন অন্য দিক থেকে। তিনি বলেন, সবকিছুই আল্লাহর মহত্ত্বের কাছে সেজদা করে, স্বেচ্ছায় হোক বা অনিচ্ছায়, প্রত্যেকে তার নিজস্ব ধরনে। তারপর আয়াত মোড় নেয়: আর মানুষের মধ্যে অনেকে। এদের সম্পর্কে ইবন কাসীর লেখেন, এরা স্বেচ্ছায় সেজদা করে, বেছে নিয়ে, তা দিয়ে ইবাদত করে। মুয়াসসার এদের সোজা কথায় নাম দেন, এরা মুমিন, যারা আনুগত্যে আর নিজের পছন্দে আল্লাহকে সেজদা করে। শব্দটা বদলায়নি, কিন্তু তার নিচে দ্বিতীয় এক স্বাধীন কাজ দেখা দিয়েছে।"
          },
          {
            "en": "So one word, sujud, carries two loads at once. The first the whole of creation shares and cannot refuse; it is simply what it means to be made. The second belongs to those who could withhold it and do not. Ma'arif draws the line exactly here: it is at the level of willing homage that a believer is marked off from one who denies. Everything else on the list bows by nature. Man alone bows, or refuses to bow, by a choice that is his to make.",
            "bn": "তাই একটি শব্দ, সুজুদ, একসাথে দুটি বোঝা বয়ে নেয়। প্রথমটি গোটা সৃষ্টি ভাগ করে নেয় আর তা ঠেকাতে পারে না; সৃষ্ট হওয়ার অর্থই তো এই। দ্বিতীয়টি তাদের, যারা তা ঠেকিয়ে রাখতে পারত কিন্তু রাখে না। মাআরিফ ঠিক এখানেই দাগ টানে: স্বেচ্ছায় নত হওয়ার স্তরেই মুমিন আলাদা হয়ে যায় অস্বীকারকারী থেকে। তালিকার বাকি সবকিছু নত হয় স্বভাবের টানে। কেবল মানুষই নত হয়, নয়তো নত হতে অস্বীকার করে, এমন এক পছন্দে যা তার নিজেরই হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Mountain Bows",
          "bn": "পাহাড় কীভাবে সেজদা করে"
        },
        "p": [
          {
            "en": "But how does a mountain, a star, a tree prostrate at all? The commentators do not answer with one voice. One reading points to the shadows. Mujahid, quoted by al-Baghawi, says their prostration is the shifting of their shadows. Ibn Kathir says the same of the mountains and the trees: their bowing is the leaning of their shade to the right and the left, and he reads it against the verse in an-Nahl about all shadows falling prostrate to Allah (16:48). On this view the sujud is something you can watch move across the ground.",
            "bn": "কিন্তু পাহাড়, তারা বা গাছ আদৌ কীভাবে সেজদা করে? তাফসীরকারেরা এক সুরে জবাব দেন না। একটি পাঠ আঙুল তোলে ছায়ার দিকে। বাগাভীর উদ্ধৃত মুজাহিদ বলেন, এদের সেজদা হলো এদের ছায়ার সরে যাওয়া। ইবন কাসীর পাহাড় আর গাছ নিয়ে একই কথা বলেন: এদের নত হওয়া মানে ডানে ও বাঁয়ে এদের ছায়ার হেলে পড়া, আর তিনি একে মিলিয়ে পড়েন সূরা নাহলের সেই আয়াতের সাথে যেখানে সব ছায়া আল্লাহকে সেজদায় লুটিয়ে পড়ে (১৬:৪৮)। এই পাঠে সুজুদ এমন কিছু যা মাটির উপর সরে যেতে আপনি দেখতে পান।"
          },
          {
            "en": "A second reading takes sujud to mean obedience. Al-Baghawi says there is no inanimate thing that is not obedient to Allah, humbled before Him and glorifying Him: He reported the heavens and earth saying we come willingly (41:11), said some stones fall down in fear of Allah (2:74), and said there is not a thing but glorifies His praise (17:44). Al-Baghawi calls this a good position, in keeping with Ahl as-Sunnah. Ma'arif presses further, holding that every created thing has some measure of intent, so its homage is real and willing.",
            "bn": "দ্বিতীয় একটি পাঠ সুজুদকে বোঝে আনুগত্য অর্থে। বাগাভী বলেন, এমন কোনো জড় বস্তু নেই যে আল্লাহর অনুগত নয়, তাঁর সামনে বিনীত নয়, তাঁর তাসবীহ পড়ে না। যেমন তিনি জানিয়েছেন আকাশ ও জমিন বলেছিল, আমরা স্বেচ্ছায় এলাম (৪১:১১), আর পাথর নিয়ে বলেছেন যে কিছু পাথর আল্লাহর ভয়ে গড়িয়ে পড়ে (২:৭৪), আর বলেছেন এমন কিছুই নেই যা তাঁর প্রশংসায় তাসবীহ পড়ে না (১৭:৪৪)। বাগাভী একে বলেন একটি ভালো অভিমত, যা আহলে সুন্নাহর সাথে মেলে। মাআরিফ আরও এক ধাপ এগিয়ে বলে, প্রতিটি সৃষ্ট বস্তুর ভেতরেই কিছুটা ইচ্ছাশক্তি আছে, তাই তাদের এই নতি সত্যিকারের আর স্বেচ্ছায়।"
          },
          {
            "en": "A third reading is frankly literal. Abu al-'Aliya, cited by al-Qurtubi and Ibn Kathir, says every star, sun and moon falls prostrate to Allah as it sets, and does not turn away until it is given leave. Al-Qushayri notes this came in a chained report about the sun, so it is a true prostration, one needing life and understanding in the thing that bows. Ibn Kathir holds the matter open: each thing prostrates in the manner particular to it, a mode left, at last, to Allah. The three readings are left standing side by side.",
            "bn": "তৃতীয় একটি পাঠ খোলাখুলি আক্ষরিক। কুরতুবী আর ইবন কাসীরের উদ্ধৃত আবুল আলিয়া বলেন, প্রতিটি তারা, সূর্য আর চন্দ্র ডুবে যাওয়ার সময় আল্লাহকে সেজদায় লুটিয়ে পড়ে, আর অনুমতি না পাওয়া পর্যন্ত ফেরে না। কুশাইরী মনে করিয়ে দেন যে সূর্য নিয়ে এটি এসেছে এক সনদযুক্ত বর্ণনায়, তাই এটি সত্যিকারের সেজদা, যাতে সেজদাকারীর ভেতরে প্রাণ আর বোধ থাকা লাগে। ইবন কাসীর বিষয়টা খোলা রাখেন: প্রতিটি জিনিস সেজদা করে তার নিজস্ব ধরনে, যে ধরন শেষমেশ আল্লাহর কাছেই সোপর্দ। তিনটি পাঠ পাশাপাশি দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse You Bow At",
          "bn": "যে আয়াতে সেজদা"
        },
        "p": [
          {
            "en": "There is a mark in the mushaf at the end of this verse: the sajdah sign, ۩. It tells the reciter that this is a verse of recitation-prostration, one of the places where the reader, and those listening, put their foreheads to the ground on reaching it. Surah al-Hajj is unusual in carrying such a mark, and this is one of its two. The verse does not only speak about prostration; it asks for one. The subject of the sentence becomes, for a moment, the person reciting it.",
            "bn": "এই আয়াতের শেষে মুসহাফে একটি চিহ্ন আছে: সেজদার চিহ্ন, ۩। এটি তিলাওয়াতকারীকে জানায় যে এটি একটি সেজদার আয়াত, সেই জায়গাগুলোর একটি যেখানে পৌঁছে পাঠক আর শ্রোতারা কপাল মাটিতে ঠেকায়। সূরা হজ্জ এমন চিহ্ন বহন করার দিক থেকে ব্যতিক্রম, আর এটি তার দুটি সেজদার একটি। আয়াতটি কেবল সেজদা নিয়ে বলে না; একটি সেজদাও চেয়ে নেয়। বাক্যের কর্তা এক মুহূর্তের জন্য হয়ে ওঠে সে-ই, যে আয়াতটি পড়ছে।"
          },
          {
            "en": "On the prostration of recitation itself there is a sound narration. Muslim records from Abu Hurayrah that the Messenger of Allah ﷺ said: when the son of Adam recites the verse of prostration and prostrates, Satan withdraws weeping and says, Woe to me, the son of Adam was commanded to prostrate and he prostrated, so Paradise is his; and I was commanded to prostrate and I refused, so mine is the Fire. The hadith sets the two halves of the verse into two figures: the one who bows, and the one who would not.",
            "bn": "খোদ তিলাওয়াতের সেজদা নিয়ে একটি সহীহ বর্ণনা আছে। মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে রসূলুল্লাহ ﷺ বলেছেন: আদম সন্তান যখন সেজদার আয়াত পড়ে সেজদা করে, তখন শয়তান কাঁদতে কাঁদতে সরে গিয়ে বলে, হায় আমার সর্বনাশ, আদম সন্তানকে সেজদার হুকুম দেওয়া হলো, সে সেজদা করল, তাই জান্নাত তার; আর আমাকে সেজদার হুকুম দেওয়া হলো, আমি অস্বীকার করলাম, তাই আগুন আমার। হাদীসটি আয়াতের দুই ভাগকে দুটি চরিত্রে বসিয়ে দেয়: একজন যে নত হয়, আরেকজন যে হবে না।"
          },
          {
            "en": "One further claim needs care. Ibn Kathir gathers reports that Surah al-Hajj was favoured above the rest of the Qur'an with two prostrations, but he reports their weakness honestly. At-Tirmidhi graded one of them not strong; Abu Dawud recorded another in his Marasil as a broken chain and said it does not stand. What is firmer is the practice: it is related that 'Umar performed the two prostrations of al-Hajj while at al-Jabiya. So the sajdah here rests on the mushaf's own mark and on deed, not on a chain that the critics let pass.",
            "bn": "আরও একটি দাবি নিয়ে সতর্ক হওয়া দরকার। ইবন কাসীর এমন কিছু বর্ণনা জড়ো করেন যে সূরা হজ্জকে গোটা কুরআনের উপর দুটি সেজদা দিয়ে বিশেষ মর্যাদা দেওয়া হয়েছে, তবে তিনি এদের দুর্বলতা সততার সাথেই জানান। তিরমিযী এর একটিকে 'শক্তিশালী নয়' বলেছেন; আবু দাউদ তাঁর মারাসীলে আরেকটি এনেছেন ছিন্ন সনদ হিসেবে আর বলেছেন এটি টেকে না। বরং বেশি মজবুত হলো আমল: বর্ণিত আছে যে উমর (রাঃ) জাবিয়ায় থাকাকালে হজ্জ সূরার দুটি সেজদা আদায় করেছিলেন। তাই এখানকার সেজদা দাঁড়িয়ে আছে মুসহাফের নিজের চিহ্ন আর আমলের উপর, সমালোচকদের ছেড়ে দেওয়া কোনো সনদের উপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Punishment with a Cause",
          "bn": "শাস্তির পেছনে কারণ"
        },
        "p": [
          {
            "en": "The verse does not end in peace. And upon many the punishment has been justified. Ibn Kathir says these are the ones who held back from prostration, refused it, and grew arrogant. Al-Baghawi names them the disbelievers, for their disbelief and their leaving of the sujud — and then adds a strange, exact point: even in their disbelief, their shadows still prostrate to Allah. The refusal is only ever the refusal of the second, willing bow. The first bow, the bow of being a creature, none on earth has ever managed to withhold.",
            "bn": "আয়াত শান্তিতে শেষ হয় না। আর অনেকের উপর শাস্তি সাব্যস্ত হয়ে গেছে। ইবন কাসীর বলেন, এরা তারাই যারা সেজদা থেকে পিছিয়ে থেকেছে, তা অস্বীকার করেছে আর অহংকার করেছে। বাগাভী এদের নাম দেন কাফির, তাদের কুফরের আর সেজদা ছেড়ে দেওয়ার কারণে। এরপর তিনি এক অদ্ভুত সূক্ষ্ম কথা জোড়েন: কুফরের ভেতরেও এদের ছায়া কিন্তু আল্লাহকে সেজদা করেই চলে। অস্বীকারটা সবসময় কেবল দ্বিতীয় সেই স্বেচ্ছার সেজদার অস্বীকার। প্রথম সেজদা, সৃষ্টি হওয়ার সেজদা, দুনিয়ায় কেউ কোনোদিন ঠেকিয়ে রাখতে পারেনি।"
          },
          {
            "en": "The grammar itself carries this. Al-Qurtubi notes that 'many' here is read in the nominative, though al-Kisa'i and al-Farra' allowed the accusative; the nominative was chosen because the sense is a fresh statement, and many refused to prostrate, so the roll of those who bow closes at many of the people. On another reading it stays joined, if sujud means submission to God's ordering of strength and weakness, health and sickness, which takes in all things. Ibn Abbas, as Ibn al-Anbari relays, read it as many in the Garden and many with the punishment due.",
            "bn": "ব্যাকরণ নিজেই এটা বহন করে। কুরতুবী বলেন, এখানে 'কাসীর' শব্দটি পড়া হয় রাফা অবস্থায়, যদিও কিসাঈ আর ফাররা নাসব জায়েয বলেছেন; রাফা বেছে নেওয়া হয়েছে কারণ অর্থটা এক নতুন বাক্য, আর অনেকে সেজদা করতে অস্বীকার করেছে, তাই সেজদাকারীদের তালিকা 'মানুষের মধ্যে অনেকে'-তে গিয়ে শেষ হয়। আরেক পাঠে এটি জোড়া থেকে যায়, যদি সুজুদ মানে ধরা হয় শক্তি ও দুর্বলতা, সুস্থতা ও অসুস্থতার ব্যাপারে আল্লাহর ব্যবস্থাপনার কাছে নতি, যা সবকিছুকে ঢেকে নেয়। ইবন আব্বাস (রাঃ), ইবনুল আম্বারীর বর্ণনায়, একে পড়েছেন এভাবে, অনেকে জান্নাতে আর অনেকের উপর শাস্তি সাব্যস্ত।"
          },
          {
            "en": "This last stroke needs saying plainly. The verse names a group by one thing only: their own refusal of the God they were made to worship, and it hands their reckoning to Him and to the Day He judges (22:17). It gives no reader a verdict to carry against his neighbour, no warrant to name this person or that community among the condemned. Whom the punishment has overtaken is known to Allah, not assigned by us.",
            "bn": "এই শেষ টানটা সোজাসুজি বলা দরকার। আয়াত একটি দলকে চেনায় কেবল একটি জিনিস দিয়ে: যে আল্লাহর ইবাদতের জন্য তারা সৃষ্ট, তাঁকেই তাদের অস্বীকার করা। আর তাদের হিসাব সে তুলে দেয় আল্লাহর হাতে আর সেই দিনের হাতে যেদিন তিনি ফয়সালা করবেন (২২:১৭)। এটি কোনো পাঠককে তার প্রতিবেশীর বিরুদ্ধে বয়ে নেওয়ার রায় দেয় না, এই লোক বা ওই সম্প্রদায়কে শাস্তিপ্রাপ্তদের নাম দেওয়ার কোনো অধিকার দেয় না। কার উপর শাস্তি নেমে এসেছে তা আল্লাহই জানেন, আমরা তা ঠিক করে দিই না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Allah Abases",
          "bn": "আল্লাহ যাকে লাঞ্ছিত করেন"
        },
        "p": [
          {
            "en": "And whom Allah abases, none can honour. At-Tabari reads it so: whom Allah abases and leaves wretched, none can grant him the honour of felicity, for every affair is in Allah's hand — He grants success to whom He wills, and forsakes whom He wills. Al-Qurtubi says whoever He abases through wretchedness and disbelief, none can lift the disgrace from him; Ibn Abbas warns that whoever holds the worship of Allah in contempt ends in the Fire.",
            "bn": "আর আল্লাহ যাকে লাঞ্ছিত করেন, তাকে কেউ সম্মানিত করতে পারে না। তাবারী এভাবে পড়েন: আল্লাহ যাকে লাঞ্ছিত করে হতভাগা রাখেন, কেউ তাকে সৌভাগ্যের সম্মান দিতে পারে না, কারণ সব ব্যাপারই আল্লাহর হাতে। তিনি যাকে চান আনুগত্যের তাওফীক দেন, আর যাকে চান ছেড়ে দেন। কুরতুবী বলেন, যাকে তিনি হতভাগ্য আর কুফর দিয়ে লাঞ্ছিত করেন, তার থেকে সেই লাঞ্ছনা কেউ সরাতে পারে না; আর ইবন আব্বাস (রাঃ) সাবধান করেন যে আল্লাহর ইবাদতকে যে তুচ্ছ করে, তার শেষ ঠিকানা আগুন।"
          },
          {
            "en": "Then the seal: indeed, Allah does what He wills. At-Tabari draws the whole weight of it — Allah does with His creation as He wills, abasing whom He wills and honouring whom He wills, because the creation is His and the command is His, and He is not questioned about what He does while they are questioned (21:23). Al-Baghawi puts it shortest: felicity and wretchedness both run by His will. The verse that began by asking me to look ends by settling every rank in the single hand that made the list.",
            "bn": "তারপর সিলমোহর: নিশ্চয়ই আল্লাহ যা চান তাই করেন। তাবারী এর গোটা ভার টেনে আনেন: আল্লাহ তাঁর সৃষ্টির সাথে যা চান তাই করেন, যাকে চান লাঞ্ছিত করেন আর যাকে চান সম্মানিত করেন, কারণ সৃষ্টি তাঁরই আর হুকুম তাঁরই, তিনি যা করেন সে সম্পর্কে তাঁকে প্রশ্ন করা হয় না, বরং তাদেরকেই প্রশ্ন করা হয় (২১:২৩)। বাগাভী সবচেয়ে সংক্ষেপে বলেন: সৌভাগ্য আর দুর্ভাগ্য দুটোই তাঁর ইচ্ছায় চলে। যে আয়াত শুরু হয়েছিল আমাকে তাকিয়ে দেখতে বলে, তা শেষ হয় প্রতিটি মর্যাদাকে সেই এক হাতে সঁপে দিয়ে, যে হাত তালিকাটা বানিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Bow Left",
          "bn": "বাকি একটি সেজদা"
        },
        "p": [
          {
            "en": "So stand inside the list a last time. The sun sets into its prostration; the mountain lays down its shadow; the beast bows in the way given to it. Not one of them was asked. The scene ends on a will that does as it wills, and the only point of choice in it is the human one: the second bow, the bow of worship, that many give and many refuse. It is the one thing on this list that is left to me, and this is the verse that asks for it, forehead to the ground, the moment I recite it.",
            "bn": "তাই শেষবারের মতো তালিকার ভেতর দাঁড়ান। সূর্য তার সেজদায় ডুবে যায়; পাহাড় নিজের ছায়া নামিয়ে দেয়; জীবজন্তু তাকে দেওয়া ধরনে নত হয়। এদের কাউকে জিজ্ঞেস করা হয়নি। দৃশ্যটা শেষ হয় এমন এক ইচ্ছায় যা যা চায় তাই করে, আর এর গোটাটার ভেতর পছন্দের একমাত্র বিন্দু সেই মানুষেরটা: দ্বিতীয় সেজদা, ইবাদতের সেজদা, যা অনেকে দেয় আর অনেকে অস্বীকার করে। এই বিশাল তালিকায় ওই একটি জিনিসই আমার হাতে বাকি থাকে, আর এই আয়াতটাই তা চেয়ে নেয়, কপাল মাটিতে ঠেকিয়ে, যে মুহূর্তে আমি তা তিলাওয়াত করি।"
          }
        ]
      }
    ]
  },
  "22:23": {
    "sections": [
      {
        "h": {
          "en": "The Answer to the Fire",
          "bn": "আগুনের দেওয়া জবাব"
        },
        "p": [
          {
            "en": "Four verses before this, the sūrah drew two adversaries who disputed about their Lord, and it settled the first of them first. For those who disbelieved, garments were cut from fire, scalding water was poured over their heads, and iron maces waited (22:19 to 22:22). Ibn Kathir and al-Qurtubi both read this verse as the deliberate turn to the second adversary: once the state of the people of the Fire had been described, Allah describes the state of the people of the Garden. The sentence is built as a reply.",
            "bn": "এ আয়াতের চারটি আয়াত আগে সূরাটি এঁকেছিল বিবাদের দুই পক্ষকে, যারা নিজেদের রবকে নিয়ে ঝগড়ায় নেমেছিল, আর প্রথম পক্ষের ফয়সালা দিয়েছিল আগে। যারা কুফরি করল, তাদের জন্য কাটা হলো আগুনের পোশাক, মাথার উপর ঢালা হলো ফুটন্ত পানি, অপেক্ষায় রইল লোহার মুগুর (২২:১৯ থেকে ২২:২২)। ইবন কাসীর ও কুরতুবী দুজনেই এ আয়াতকে পড়েন দ্বিতীয় পক্ষের দিকে ইচ্ছাকৃত মোড় হিসেবে। জাহান্নামীদের অবস্থা বলা শেষ হতেই আল্লাহ ধরেন জান্নাতীদের কথা। বাক্যটা গড়াই হয়েছে জবাবের ঢঙে।"
          },
          {
            "en": "A word of care belongs here, at the single point where the two sides touch. The verse tells what belief and its reward are, and what disbelief and its end are; it hands no reader a weapon against any living person or community. No person on earth is assigned to either group by this āyah. The weight of the passage is not on the fire it leaves behind but on the garden it now opens, and that is where the rest of these lines will stay.",
            "bn": "এখানে একটু সতর্ক কথা বলা দরকার, ঠিক সেই জায়গায় যেখানে দুই পক্ষ পরস্পরকে ছোঁয়। আয়াত বলে দেয় ঈমান কী আর তার প্রতিদান কী, আর কুফর কী আর তার পরিণতি কী; কোনো পাঠকের হাতে জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে অস্ত্র তুলে দেয় না। এ আয়াত দিয়ে দুনিয়ার কাউকে এ দুই দলের কোনোটিতে বসিয়ে দেওয়া যায় না। আয়াতের ভার পেছনে ফেলে আসা আগুনে নয়, সামনে খুলে দেওয়া বাগানে, আর বাকি কথাগুলো সেখানেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Admitted by Allah Himself",
          "bn": "আল্লাহ নিজ হাতে ঢোকান"
        },
        "p": [
          {
            "en": "Inna Allāha yudkhilu: indeed, Allah will admit. At-Tabari unfolds who is meant: those who believed in Allah and His Messenger and obeyed the two of them through the righteous deeds Allah commanded, and He admits them to everlasting gardens. Belief is never left standing alone in the verse; it is bound to ʿamilū al-ṣāliḥāt, and did righteous deeds. The reward is not earned as wages are earned, for the verb is His, He admits, yet neither is it promised to a bare claim of faith that never moved a hand.",
            "bn": "ইন্নাল্লাহা ইউদখিলু: নিশ্চয় আল্লাহ প্রবেশ করাবেন। তাবারী খুলে দেন কাদের কথা বলা হচ্ছে: যারা আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান এনেছে আর আল্লাহর আদেশ করা সৎকাজের মধ্য দিয়ে দুজনের আনুগত্য করেছে, তাদের তিনি ঢোকাবেন চিরস্থায়ী জান্নাতে। আয়াতে ঈমানকে কখনো একা দাঁড়াতে দেওয়া হয় না; তাকে বাঁধা হয়েছে ‘আমিলুস সালিহাত’, অর্থাৎ সৎকাজ করার সঙ্গে। প্রতিদান মজুরির মতো অর্জন করা নয়, কারণ ক্রিয়াটি তাঁরই, তিনিই ঢোকান, তবু তা এমন ফাঁকা ঈমানের প্রতিশ্রুতিও নয় যা কখনো একটা হাতও নাড়ায়নি।"
          },
          {
            "en": "As-Sa'di draws the boundary tighter. This description, he says, is true of none but the Muslims, who believed in all the Books and all the Messengers rather than some and not others. The point matters, because the same sūrah has just listed many communities who dispute about God (22:17). The Garden here is not thrown open to every party in that dispute; it is named for a faith that accepted the whole of what God sent, and then lived it.",
            "bn": "সাদী সীমাটা আরও টেনে দেন। এ বর্ণনা, তিনি বলেন, মুসলিমরা ছাড়া আর কারও বেলায় খাটে না, যারা সব কিতাব আর সব রাসূলের প্রতি ঈমান এনেছে, কারও কারও প্রতি নয়। কথাটা জরুরি, কারণ এই সূরাই একটু আগে আল্লাহকে নিয়ে বিবাদে জড়ানো বহু জনগোষ্ঠীর তালিকা দিয়েছে (২২:১৭)। এখানে জান্নাত সেই বিবাদের প্রতিটি পক্ষের জন্য খুলে দেওয়া হয়নি; এর নাম লেখা হয়েছে এমন ঈমানের জন্য যা আল্লাহর পাঠানো সবটুকু মেনে নিয়েছে, তারপর তা মেনে চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens the Rivers Cross",
          "bn": "যে বাগানে নদী বয়"
        },
        "p": [
          {
            "en": "Jannātin tajrī min taḥtihā al-anhār: gardens beneath which the rivers run. Ibn Kathir will not let the phrase stay flat. The rivers, he says, cut through the garden's every quarter and side, beneath its trees and beneath its palaces, and the people there turn them wherever and however they wish. The water is no fixed canal to be admired from a bank; it answers to those who live among it. Al-Muyassar adds that this is a bliss whose delight does not end.",
            "bn": "জান্নাতিন তাজরী মিন তাহতিহাল আনহার: এমন বাগান যার নিচ দিয়ে বয় নদী। ইবন কাসীর কথাটাকে সমতল থাকতে দেন না। নদীগুলো, তিনি বলেন, বাগানের প্রতিটি কোণ আর দিক ভেদ করে বয়ে যায়, গাছের নিচ দিয়ে আর প্রাসাদের নিচ দিয়ে, আর সেখানকার মানুষ সেগুলোকে যেদিকে আর যেভাবে চায় ঘুরিয়ে নেয়। পানি কোনো বাঁধা খাল নয় যা তীরে দাঁড়িয়ে দেখতে হয়; তা মেনে চলে যারা তার মাঝে বাস করে তাদের ইচ্ছাকে। মুয়াসসার যোগ করেন, এ এমন সুখ যার আনন্দ ফুরায় না।"
          },
          {
            "en": "As-Sa'di reads the single word gardens as a container for far more than trees. Under it he gathers the kinds of delicious food the gardens hold, and he names the flowing rivers by their kinds: rivers of water, of milk, of honey, and of wine. So the opening clause is not only scenery. It is the first of a series of gifts the verse will pile up, and the tafsir hears in gardens an invitation to imagine the table, not merely the view from beside it.",
            "bn": "সাদী একটিমাত্র শব্দ ‘জান্নাত’ পড়েন গাছের চেয়ে অনেক বেশি কিছুর আধার হিসেবে। এর নিচে তিনি জড়ো করেন বাগানভরা নানা স্বাদের খাবার, আর প্রবাহিত নদীগুলোকে তিনি চেনান তাদের রকম ধরে: পানির নদী, দুধের, মধুর আর শরাবের। তাই শুরুর কথাটা কেবল দৃশ্য নয়। এটি আয়াত যে উপহারের স্তূপ গড়ে তুলবে তার প্রথমটি, আর তাফসির ‘জান্নাত’ শব্দে শোনে খাবারের টেবিলটা কল্পনা করার ডাক, শুধু তার পাশ থেকে দৃশ্য দেখার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bracelets on the Believer's Arm",
          "bn": "হাতে সোনা ও মুক্তা"
        },
        "p": [
          {
            "en": "Yuḥallawna fīhā min asāwira min dhahabin wa-luʾluʾā: they are adorned there with bracelets of gold and pearl. Ibn Kathir places the bracelets on their arms, and he links the adornment to a report he calls agreed upon, that the jewellery of the believer will reach as far as the water of his wuḍūʾ once reached. Al-Qurtubi notes that asāwir is the plural of siwār, a bracelet, and pauses on the fact that kings of this world wore bracelets and crowns as marks of rank.",
            "bn": "ইউহাল্লাওনা ফীহা মিন আসাওয়িরা মিন যাহাবিন ওয়া লু'লু'আ: সেখানে তাদের সাজানো হবে সোনা আর মুক্তার কাঁকনে। ইবন কাসীর কাঁকনগুলো রাখেন তাদের হাতে, আর এই সাজকে জোড়েন এমন এক বর্ণনার সঙ্গে যাকে তিনি সর্বসম্মত বলেন: মু'মিনের গয়না সেখানে পৌঁছাবে যেখানে দুনিয়ায় তার অজুর পানি পৌঁছাত। কুরতুবী মনে করিয়ে দেন, ‘আসাওয়ির’ হলো ‘সিওয়ার’ অর্থাৎ কাঁকনের বহুবচন, আর থেমে যান এই ভেবে যে দুনিয়ার বাদশাহরা পদমর্যাদার চিহ্ন হিসেবে কাঁকন আর মুকুট পরত।"
          },
          {
            "en": "From that, al-Qurtubi passes on the commentators' picture: no dweller of the Garden is without three bracelets on the hand, one of gold, one of silver, and one of pearl. He reconciles the verses, for this āyah and Sūrah Fāṭir name gold, while Sūrah al-Insān names silver (76:21). Both as-Sa'di and al-Muyassar are careful to say the adornment is for the men and the women alike; the gold is not the women's share and the silver the men's, a division al-Qurtubi weighs and rejects as unsupported by the text.",
            "bn": "সেখান থেকে কুরতুবী তুলে ধরেন তাফসিরকারদের আঁকা ছবি: জান্নাতের কেউই বাদ যাবে না, প্রত্যেকের হাতে থাকবে তিনটি কাঁকন, একটি সোনার, একটি রুপার আর একটি মুক্তার। তিনি আয়াতগুলো মিলিয়ে দেন, কারণ এই আয়াত আর সূরা ফাতির বলে সোনার কথা, আর সূরা ইনসান বলে রুপার কথা (৭৬:২১)। সাদী আর মুয়াসসার দুজনেই খেয়াল রাখেন যে এ সাজ পুরুষ আর নারী উভয়ের জন্য; সোনা কেবল নারীর ভাগ আর রুপা পুরুষের, এমন ভাগাভাগি কুরতুবী বিচার করে বাতিল করেন, কারণ আয়াত তা সমর্থন করে না।"
          },
          {
            "en": "There is even a small matter of reading here. At-Tabari and al-Baghawi both record that the word for pearl, wa-luʾluʾā, was recited in two ways, one placing it in the accusative and one in the genitive, and that the reciters differed over the extra alif written in the codices. At-Tabari's verdict is that both are well-known, sound readings carried by scholars of recitation, identical in meaning, so a reader is correct with either. The difference touches the grammar, never the pearl itself.",
            "bn": "এখানে ছোট্ট একটা কিরাআতের ব্যাপারও আছে। তাবারী আর বাগভী দুজনেই লিখে রাখেন যে মুক্তার শব্দ ‘লু'লু'আ’ দুইভাবে পড়া হয়েছে, একটিতে তা নাসব অবস্থায় আর একটিতে জর অবস্থায়, আর মুসহাফে লেখা বাড়তি আলিফ নিয়ে ক্বারীরা মতভেদ করেছেন। তাবারীর রায়, দুটোই প্রসিদ্ধ ও বিশুদ্ধ পড়া, ক্বারী আলিমদের বহন করা, অর্থে অভিন্ন, তাই পাঠক যেটিতেই পড়ুক ঠিক আছে। তফাতটা ব্যাকরণে, মুক্তায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Men Wear Bracelets",
          "bn": "পুরুষের হাতে কেন কাঁকন"
        },
        "p": [
          {
            "en": "A reader may stumble on the picture of grown men wearing bracelets, since in this world they are counted as women's ornament. Ma'arif al-Qur'an meets the objection head on. Down the ages, it says, monarchs have decked themselves in costly jewellery, crowns and bracelets as emblems of might and wealth; the bracelet on a king's arm signals rank, not vanity. So when men are admitted to the Garden wearing bracelets, they wear them exactly as a crown is worn, as a token of honour and of favour from God.",
            "bn": "বড় বড় পুরুষের হাতে কাঁকনের ছবি দেখে পাঠক থমকে যেতে পারেন, কারণ দুনিয়ায় এটি নারীর গয়না বলে গণ্য। মাআরিফুল কুরআন এ আপত্তির মুখোমুখি হয় সোজাসুজি। যুগে যুগে, সে বলে, বাদশাহরা নিজেদের সাজিয়েছে দামি গয়না, মুকুট আর কাঁকনে, ক্ষমতা আর ঐশ্বর্যের প্রতীক হিসেবে; বাদশাহর হাতের কাঁকন অহংকার নয়, পদমর্যাদার ইশারা। তাই পুরুষরা যখন কাঁকন পরে জান্নাতে ঢোকে, তারা তা পরে ঠিক যেমন মুকুট পরা হয়, সম্মান আর আল্লাহর অনুগ্রহের নিশানা হিসেবে।"
          },
          {
            "en": "Ma'arif fastens the point to a remembered event. Surāqah ibn Mālik (raḍiyallāhu ʿanhu) once rode out to seize the Prophet ﷺ on the road to Madinah, and his horse sank in the sand; when he begged for rescue and was freed by the Prophet's prayer, he was promised the bracelets of the emperor of Persia. Later, under the caliphate of ʿUmar (raḍiyallāhu ʿanhu), Persia fell, the emperor's bracelets reached Madinah among the spoils, and Surāqah came forward and received them. A king's bracelets, once a distant promise, laid in a Bedouin's hands.",
            "bn": "মাআরিফ কথাটা গেঁথে দেয় এক স্মরণীয় ঘটনায়। সুরাকা ইবন মালিক (রাঃ) একবার মদীনার পথে নবী ﷺ-কে ধরতে ছুটে বেরিয়েছিলেন, আর তাঁর ঘোড়া বালিতে দেবে গেল; তিনি যখন উদ্ধার চাইলেন আর নবী ﷺ-এর দোয়ায় মুক্তি পেলেন, তখন তাঁকে ওয়াদা করা হলো পারস্য-সম্রাটের কাঁকনের। পরে, উমর (রাঃ)-এর খিলাফতকালে, পারস্য পড়ল, গনিমতের মধ্যে সম্রাটের সেই কাঁকন এসে পৌঁছাল মদীনায়, আর সুরাকা এগিয়ে এসে তা গ্রহণ করলেন। বাদশাহর কাঁকন, একদিনের দূর ওয়াদা, এসে পড়ল এক বেদুইনের হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Garments Woven of Silk",
          "bn": "রেশমে গড়া পোশাক"
        },
        "p": [
          {
            "en": "Wa-libāsuhum fīhā ḥarīr: and their garment there is silk. At-Tabari reads libās closely as the clothing that lies against the skin, so the silk is not an outer show but what touches the body. Ibn Kathir names its kinds, sundus and istabraq, fine and heavy silk shot with gold, and he sets the picture directly against the garments cut from fire that the disbelievers wear. He cites the promise elsewhere that they are clothed in green silk and given a pure drink (76:21 and 76:22).",
            "bn": "ওয়া লিবাসুহুম ফীহা হারীর: আর সেখানে তাদের পোশাক রেশমের। তাবারী ‘লিবাস’ শব্দটা পড়েন নিবিড়ভাবে, যে কাপড় গায়ের চামড়ার সঙ্গে লাগে, তাই রেশমটা বাইরের দেখানো সাজ নয়, বরং যা শরীর ছোঁয়। ইবন কাসীর এর রকম চেনান, ‘সুন্দুস’ আর ‘ইসতাবরাক’, সোনায় বোনা পাতলা আর মোটা রেশম, আর ছবিটা তিনি সোজা দাঁড় করান কাফিরদের গায়ে চড়ানো আগুনের পোশাকের বিপরীতে। তিনি অন্য জায়গার সেই ওয়াদা টানেন যে তাদের পরানো হবে সবুজ রেশম আর দেওয়া হবে পবিত্র পানীয় (৭৬:২১ ও ৭৬:২২)।"
          },
          {
            "en": "Al-Qurtubi widens libās past the shirt. Everything they wear and use, he says, their bedding and their clothes and their hangings, is silk, and it is far finer than anything of the kind in this world. Ma'arif al-Qur'an presses the same warning against imagining it too cheaply: the silk of the Garden and the silk we know share only their name, for in quality there is no comparison between the two. The word is borrowed from earth only because we have no other word to reach for.",
            "bn": "কুরতুবী ‘লিবাস’-কে জামার সীমা ছাড়িয়ে বড় করেন। তারা যা কিছু পরে আর ব্যবহার করে, তিনি বলেন, তাদের বিছানা, পোশাক আর পর্দা, সবই রেশমের, আর দুনিয়ার এ জাতীয় যেকোনো কিছুর চেয়ে তা বহু গুণ সূক্ষ্ম। মাআরিফুল কুরআন একই সতর্কতা জোর দিয়ে বলে, একে যেন সস্তা করে না ভাবি: জান্নাতের রেশম আর আমাদের চেনা রেশমে কেবল নামটাই এক, গুণে দুইয়ের কোনো তুলনা নেই। শব্দটা দুনিয়া থেকে ধার নেওয়া, কারণ আমাদের হাতে আর কোনো শব্দ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Forbidden Here, Worn There",
          "bn": "এখানে নিষিদ্ধ, ওখানে প্রাপ্য"
        },
        "p": [
          {
            "en": "Al-Baghawi points to the sharp edge of the gift: the silk given so freely there is the very cloth whose wearing was forbidden to men here. The clearest word on this is a report Ḥudhayfah (raḍiyallāhu ʿanhu) carried. In Ṣaḥīḥ al-Bukhari (5426), by way of ʿAbd al-Raḥmān ibn Abī Laylā, the Prophet ﷺ said: \"Do not wear silk or brocade, and do not drink in vessels of gold and silver, nor eat from plates of them, for they are for the disbelievers in this world and for you in the Hereafter.\" Bukhari entered it among the sound reports of his Ṣaḥīḥ.",
            "bn": "বাগভী উপহারটির ধারালো কিনারা দেখিয়ে দেন: যে রেশম সেখানে এত অবাধে দেওয়া হয়, এখানে পুরুষের জন্য তা পরাই ছিল নিষিদ্ধ। এ নিয়ে স্পষ্টতম কথা হুযাইফা (রাঃ)-এর বহন করা এক বর্ণনায়। সহীহ বুখারীতে (৫৪২৬), আব্দুর রহমান ইবন আবি লাইলার সূত্রে, নবী ﷺ বলেছেন: ‘তোমরা রেশম আর মোটা রেশমি কাপড় পরো না, সোনা-রুপার পাত্রে পান কোরো না, আর সেগুলোর থালায় খেয়ো না, কারণ এসব দুনিয়ায় কাফিরদের জন্য আর আখিরাতে তোমাদের জন্য।’ বুখারী একে রেখেছেন তাঁর সহীহ বর্ণনার সংকলনে।"
          },
          {
            "en": "Read the last clause slowly, because it carries the whole reversal. The gold and silk are handed to the disbelievers as their portion in this brief world; they are held back from the believers here and kept for them there. Al-Baghawi and al-Qurtubi both carry a further report, from Abū Saʿīd al-Khudrī (raḍiyallāhu ʿanhu), that whoever wore silk in this world will not wear it in the next, and even if he enters the Garden its people will wear it while he does not. What is taken now is not lost; it is deferred to a better hand.",
            "bn": "শেষ বাক্যটা ধীরে পড়ুন, কারণ পুরো উল্টে যাওয়াটা এতেই ধরা। সোনা আর রেশম কাফিরদের হাতে তুলে দেওয়া হয় এ ছোট্ট দুনিয়ায় তাদের ভাগ হিসেবে; ঈমানদারের কাছ থেকে এখানে তা ঠেকিয়ে রাখা হয়, আর জমা রাখা হয় সেখানকার জন্য। বাগভী আর কুরতুবী দুজনেই আরও একটি বর্ণনা আনেন, আবু সাঈদ খুদরী (রাঃ)-এর সূত্রে, যে দুনিয়ায় রেশম পরেছে সে আখিরাতে তা পরবে না, আর জান্নাতে ঢুকলেও এর অধিবাসীরা তা পরবে অথচ সে পরবে না। এখন যা কেড়ে নেওয়া হলো তা হারিয়ে যায় না; তা তুলে রাখা হয় আরও ভালো হাতের জন্য।"
          },
          {
            "en": "A hard question follows, and al-Qurtubi does not dodge it. If a man is admitted to the Garden yet denied its silk, will he not grieve, when the Garden is no place for grief? Ma'arif al-Qur'an relays al-Qurtubi's answer. The people of the Garden are set at different ranks according to how they stood with God, and everyone knows the differences exist; yet Allah fills their hearts with such contentment that none aches over what another has. The deprivation is real, but it wounds nobody, because no wound is left in that place.",
            "bn": "একটা কঠিন প্রশ্ন এরপর আসে, আর কুরতুবী তা এড়িয়ে যান না। কেউ যদি জান্নাতে ঢুকেও তার রেশম থেকে বঞ্চিত থাকে, তবে সে কি কষ্ট পাবে না, অথচ জান্নাত তো কষ্টের জায়গা নয়? মাআরিফুল কুরআন কুরতুবীর জবাবটা তুলে ধরে। জান্নাতিদের বসানো হবে নানা স্তরে, যে যেমন আল্লাহর কাছে দাঁড়িয়েছিল সেই অনুযায়ী, আর সবাই জানবে যে এই তফাত আছে; তবু আল্লাহ তাদের অন্তর এমন প্রশান্তিতে ভরে দেবেন যে অন্যের কী আছে তা নিয়ে কারও মনে জ্বলুনি থাকবে না। বঞ্চনাটা সত্যি, কিন্তু তা কাউকে আঘাত করে না, কারণ ওখানে কোনো ক্ষত রাখাই হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Silk Is For",
          "bn": "রেশম কীসের জন্য"
        },
        "p": [
          {
            "en": "Notice what the verse chose to name. Not abstractions, but gold, pearl, silk, running water, the ease that this world reserves for its kings, the very goods a person spends a life reaching for. The reward is spoken in the currency the reader already trusts, so that the trade can be weighed honestly. Everything you strain toward here is offered there, without the striving, and offered besides to people who often had little of it in this life at all.",
            "bn": "খেয়াল করুন আয়াত কী কী নাম নিল। কোনো বিমূর্ত ধারণা নয়, বরং সোনা, মুক্তা, রেশম, বয়ে চলা পানি, বাদশাহদের জন্য এ দুনিয়া যে আরাম তুলে রাখে সেই আরাম, ঠিক যেসব জিনিসের পেছনে মানুষ সারা জীবন ছোটে। প্রতিদান বলা হলো সেই মুদ্রায় যা পাঠক আগে থেকেই বিশ্বাস করে, যাতে দরটা সৎভাবে মাপা যায়। এখানে আপনি যা পেতে গতর খাটান, তার সবই সেখানে দেওয়া হয়, খাটাখাটনি ছাড়াই, আর দেওয়া হয় এমন মানুষদের যাদের অনেকের এ জীবনে এসবের প্রায় কিছুই ছিল না।"
          },
          {
            "en": "And it is given, not sold. The verb stayed with God from the first word, Allah admits, so no person buys the Garden with gold he never had. What the verse asks of a person is exactly what its opening names: that he believe, and that his belief reach his hands as good deeds. Then the arithmetic of this life inverts. The comfort withheld from you for your faith, and the comfort you let go for its sake, is not spent; it is being kept, in a better world, by Him who withheld it.",
            "bn": "আর তা দেওয়া হয়, বিক্রি করা হয় না। ক্রিয়াটি প্রথম শব্দ থেকেই আল্লাহর কাছে রইল, আল্লাহ ঢোকান, তাই যে সোনা কারও কখনো ছিল না তা দিয়ে কেউ জান্নাত কিনে নেয় না। আয়াত মানুষের কাছে ঠিক তা-ই চায় যা তার শুরুতে নাম নিয়েছে: সে ঈমান আনুক, আর তার ঈমান হাতে পৌঁছে সৎকাজ হয়ে উঠুক। তখন এ জীবনের হিসাবটা উল্টে যায়। ঈমানের জন্য আপনার কাছ থেকে ঠেকিয়ে রাখা আরাম, আর তার খাতিরে আপনার ছেড়ে দেওয়া আরাম, খরচ হয়ে যায় না; তা তুলে রাখা হয়, আরও ভালো এক জগতে, যিনি ঠেকিয়ে রেখেছিলেন তাঁরই হাতে।"
          }
        ]
      }
    ]
  },
  "22:26": {
    "sections": [
      {
        "h": {
          "en": "A Rebuke Folded In",
          "bn": "স্মরণে লুকানো তিরস্কার"
        },
        "p": [
          {
            "en": "The verse just before this one warned those who bar people from al-Masjid al-Ḥarām and try to twist the sacred precinct to wrongdoing. Then, without pause, Allah turns to how that very House began. Ibn Kathir reads the opening as a reproach and a rebuke to those of Quraysh who worshipped others beside Allah, and set up partners with Him, in the one place that from its first day was founded on tawḥīd, the worship of Allah alone with no partner or associate. The idols they had planted stood on ground given to Ibrāhīm for the opposite purpose.",
            "bn": "এর ঠিক আগের আয়াতটি সতর্ক করেছিল তাদের, যারা মানুষকে মাসজিদুল হারামে যেতে বাধা দেয় আর পবিত্র চত্বরকে অন্যায়ের দিকে বাঁকাতে চায়। এরপর কোনো বিরতি ছাড়াই আল্লাহ ফিরে তাকান, কীভাবে সেই গৃহের সূচনা হয়েছিল সেদিকে। ইবন কাসীর আয়াতের শুরুটাকে পড়েন কুরাইশের সেই লোকদের প্রতি তিরস্কার ও ধমক হিসেবে, যারা আল্লাহর পাশে অন্যদের ইবাদত করত, তাঁর সাথে শরিক দাঁড় করাত, সেই একটিমাত্র জায়গায় যা প্রথম দিন থেকেই দাঁড়িয়ে ছিল তাওহীদের উপর, কোনো শরিক ছাড়া কেবল আল্লাহর ইবাদতের উপর। তাদের গাড়া মূর্তিগুলো দাঁড়িয়ে ছিল সেই জমিনে, যা ইবরাহীমকে দেওয়া হয়েছিল ঠিক উল্টো কাজের জন্য।"
          },
          {
            "en": "Al-Qurtubi hears the same charge inside the words. He finds in the verse a reproach against the idol-worshippers who dwelt at the House: this was the condition laid on your father before you and on those after him, and you did not keep it, but associated others with Allah instead. So the remembrance is no idle nostalgia. It sets the founding covenant of the place directly beside what its later keepers had made of it, and lets the distance between the two do the accusing.",
            "bn": "কুরতুবী শব্দগুলোর ভেতরে শোনেন একই অভিযোগ। তিনি আয়াতে খুঁজে পান গৃহের বাসিন্দা মূর্তিপূজকদের প্রতি এক তিরস্কার: এই তো ছিল তোমাদের আগে তোমাদের পিতার উপর আর তাঁর পরে যারা এসেছে তাদের উপর রাখা শর্ত, আর তোমরা তা রক্ষা করোনি, বরং আল্লাহর সাথে অন্যদের শরিক করেছ। তাই এই স্মরণ নিছক মন-কেমন নয়। এটি জায়গাটির গোড়ার অঙ্গীকারকে ঠিক পাশে বসিয়ে দেয় তার পরের রক্ষকেরা একে যা বানিয়েছিল তার, আর দুইয়ের মাঝের ব্যবধানকেই অভিযোগের ভার বইতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Settles",
          "bn": "যে ক্রিয়া বসত দেয়"
        },
        "p": [
          {
            "en": "The verb bawwaʾnā carries the whole picture of a place made ready for someone. At-Tabari glosses it as waṭṭaʾnā, We levelled and prepared the site of the House for him. Al-Baghawi gathers the readings side by side: Ibn ʿAbbās said it means \"We made it\"; another said \"We made it clear\"; az-Zajjāj, \"We made the site of the House a settled place for Ibrāhīm\"; Muqātil ibn Ḥayyān, \"We readied it.\" Ma'arif al-Qur'an adds that the word literally means to assign someone a place in which to reside.",
            "bn": "বাউওয়া'না ক্রিয়াটি বহন করে কারও জন্য তৈরি করে রাখা এক জায়গার গোটা ছবি। তাবারী এর অর্থ করেন ওয়াত্তা'না, অর্থাৎ আমি গৃহের জায়গাটি তার জন্য সমতল করে প্রস্তুত করে দিয়েছিলাম। বাগাভী পাঠগুলো পাশাপাশি সাজান: ইবন আব্বাস বলেন এর মানে \"আমি তা বানিয়েছি\"; কেউ বলেন \"আমি তা স্পষ্ট করে দিয়েছি\"; যাজ্জাজ বলেন, \"গৃহের জায়গাটিকে আমি ইবরাহীমের জন্য নির্ধারিত বসতে পরিণত করেছি\"; মুকাতিল ইবন হাইয়ান বলেন, \"আমি তা প্রস্তুত করে দিয়েছি।\" মাআরিফুল কুরআন যোগ করে, শব্দটির আসল অর্থ কাউকে বসবাসের একটি জায়গা নির্দিষ্ট করে দেওয়া।"
          },
          {
            "en": "Al-Qurtubi notes a grammatical nicety. One says bawwaʾtuhu a dwelling, or bawwaʾtu lahu, and the lām in \"for Ibrāhīm\" is there for emphasis, on al-Farrāʾ's reading, just as one says makkantuka and makkantu laka for the same sense. As-Sa'di draws the meaning together: Allah readied the place for him, settled him upon it, and made a portion of his offspring among its dwellers. The Muyassar adds the detail that fixes the scene, that He pointed out the site of the House to Ibrāhīm when it was not [then] known.",
            "bn": "কুরতুবী একটি ব্যাকরণের সূক্ষ্মতা ধরিয়ে দেন। বলা হয় বাউওয়া'তুহু কোনো বাসস্থান, কিংবা বাউওয়া'তু লাহু, আর \"ইবরাহীমের জন্য\" কথায় লাম-টি এসেছে জোর দেওয়ার জন্য, ফাররার পাঠ অনুসারে, যেমন একই অর্থে বলা হয় মাক্কানতুকা ও মাক্কানতু লাকা। সা'দী অর্থটাকে এক করে টানেন: আল্লাহ জায়গাটি তার জন্য প্রস্তুত করলেন, তাকে সেখানে বসালেন, আর তার বংশধরদের একটি অংশকে করলেন সেখানকার বাসিন্দা। মুয়াসসার সেই খুঁটিনাটিটি যোগ করে যা দৃশ্যটাকে থিতু করে, তিনি ইবরাহীমকে গৃহের জায়গা চিনিয়ে দিলেন, যখন তা জানা ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "First Builder or Restorer",
          "bn": "প্রথম নির্মাতা নাকি পুনর্নির্মাতা"
        },
        "p": [
          {
            "en": "Here the commentators divide, and the verse's own words, \"the site of the House,\" are what they divide over. Ibn Kathir reports that many scholars took this verse as evidence that Ibrāhīm was the first to build the House and that it had not been built before his time. Against them stand the reports gathered by at-Tabari and others, that the House already had a place, and foundations, before Ibrāhīm ever arrived. Both readings work from the same phrase; what separates them is whether Ibrāhīm began the House or raised it again on ground already marked.",
            "bn": "এখানে তাফসীরকারেরা ভাগ হয়ে যান, আর আয়াতের নিজের কথা \"গৃহের জায়গা\" নিয়েই তাঁদের ভাগ। ইবন কাসীর জানান, অনেক আলিম এই আয়াতকে দলিল ধরেছেন যে ইবরাহীমই প্রথম গৃহ নির্মাণ করেন, তাঁর আগে তা গড়া হয়নি। তাঁদের বিপরীতে দাঁড়ায় তাবারী ও অন্যদের জড়ো করা বর্ণনাগুলো, যে ইবরাহীম আসার আগেই গৃহের একটি জায়গা ছিল, ভিতও ছিল। দুই পাঠই একই কথা থেকে চলে; তফাত কেবল এই, ইবরাহীম কি গৃহের সূচনা করলেন, নাকি আগে থেকে চিহ্নিত জমিনে তা আবার তুলে দাঁড় করালেন।"
          },
          {
            "en": "On the first side, Ibn Kathir sets out the case. Those who held Ibrāhīm to be the first builder lean on the Prophet's own answer that al-Masjid al-Ḥarām was the first mosque set upon the earth, which the next section quotes in full, and on the verse, \"Indeed, the first House appointed for mankind was that at Bakkah, blessed\" (3:96). Read this way, the opening means that Allah guided Ibrāhīm to the site, entrusted it to him, and granted him leave to build it, the language throughout being of showing and handing over, not of finding a ruin.",
            "bn": "প্রথম পক্ষে ইবন কাসীর যুক্তি সাজান। যাঁরা ইবরাহীমকে প্রথম নির্মাতা মানেন, তাঁরা ভর করেন নবী ﷺ-এর সেই জবাবের উপর যে মাসজিদুল হারামই জমিনে স্থাপিত প্রথম মসজিদ, যা পরের অংশে পুরো উদ্ধৃত হবে, আর ভর করেন এই আয়াতের উপর, \"নিশ্চয় মানুষের জন্য নির্ধারিত প্রথম গৃহ হলো বাক্কায়, বরকতময়\" (৩:৯৬)। এভাবে পড়লে শুরুর কথার অর্থ, আল্লাহ ইবরাহীমকে জায়গাটি চিনিয়ে দিলেন, তা তাঁর হাতে সঁপে দিলেন আর নির্মাণের অনুমতি দিলেন; পুরো ভাষাটাই দেখানো ও তুলে দেওয়ার, কোনো ধ্বংসাবশেষ খুঁজে পাওয়ার নয়।"
          },
          {
            "en": "On the other side, at-Tabari cites Qatadah that Allah set the House down in the time of Ādam, when Ādam was sent to the earth, and that Ādam and the prophets after him made ṭawāf around it. Ma'arif al-Qur'an argues the same from the wording: \"the site of the House\" hints that the House pre-existed Ibrāhīm, its first foundations laid about Ādam's time, and that in the Flood of Nūḥ's day its upper structure was taken away while the foundations stayed intact. Al-Qurtubi's version is that it had been effaced by the Flood, and Ibrāhīm was shown its base to build upon. This article does not settle between the two.",
            "bn": "অন্য পক্ষে তাবারী কাতাদার সূত্রে আনেন যে আল্লাহ গৃহটি নামিয়ে দিয়েছিলেন আদমের সময়, যখন আদমকে জমিনে পাঠানো হয়, আর আদম ও তাঁর পরের নবীরা তার চারপাশে তাওয়াফ করতেন। মাআরিফুল কুরআন একই কথা টানে শব্দ থেকেই: \"গৃহের জায়গা\" ইঙ্গিত দেয় গৃহ ইবরাহীমের আগেই ছিল, তার প্রথম ভিত গাঁথা হয়েছিল আদমের সময়ের কাছাকাছি, আর নূহের যুগের প্লাবনে তার উপরের কাঠামো সরে গেলেও ভিত অক্ষত থেকে যায়। কুরতুবীর বর্ণনায় প্লাবনে তা মুছে গিয়েছিল, আর ইবরাহীমকে তার ভিত দেখিয়ে দেওয়া হয়েছিল যেন তার উপর গড়েন। এই লেখা দুইয়ের মাঝে কোনো মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sign on the Ground",
          "bn": "জমিনে পাঠানো নিদর্শন"
        },
        "p": [
          {
            "en": "The reports that place a foundation before Ibrāhīm also describe how he found it, since the ground itself had been lost. At-Tabari relates from as-Suddī that when Allah charged Ibrāhīm and Ismāʿīl to purify His House, Ibrāhīm came to Mecca; the two took up picks, not knowing where the House was. So Allah sent a wind called al-Khajūj, with two wings and a head like a serpent, and it swept away what lay around the Kaaba down to the foundation of the first House, and they followed it with the picks, digging, until they set the foundation in place.",
            "bn": "যে বর্ণনাগুলো ইবরাহীমের আগে একটি ভিত রাখে, সেগুলোই আবার বলে তিনি কীভাবে তা খুঁজে পেলেন, কারণ জায়গাটাই হারিয়ে গিয়েছিল। তাবারী সুদ্দীর সূত্রে আনেন যে আল্লাহ যখন ইবরাহীম ও ইসমাঈলকে তাঁর গৃহ পবিত্র করার দায়িত্ব দিলেন, ইবরাহীম মক্কায় এলেন; দুজনে কোদাল হাতে নিলেন, অথচ জানতেন না গৃহ কোথায়। তখন আল্লাহ পাঠালেন খাজূজ নামের এক বাতাস, যার দুটি ডানা আর সাপের মতো মাথা, আর তা কা'বার চারপাশের সব উড়িয়ে নিয়ে গেল প্রথম গৃহের ভিত পর্যন্ত, আর তাঁরা কোদাল নিয়ে তার পিছু পিছু খুঁড়তে খুঁড়তে ভিত বসিয়ে দিলেন।"
          },
          {
            "en": "Al-Baghawi tells it more briefly. The Kaaba, he says, had been raised up to heaven at the time of the Flood; then, when commanded to build, Ibrāhīm did not know where, so Allah sent a khajūj wind that swept clear for him what was around the House down to the foundation. Al-Qurtubi's telling matches this: a wind uncovered the foundation of Ādam, and Ibrāhīm arranged his courses upon it. These are reports of the unseen, passed on as the early generations told them, not matters this article can confirm.",
            "bn": "বাগাভী আরও সংক্ষেপে বলেন। তাঁর মতে কা'বা প্লাবনের সময় আসমানে তুলে নেওয়া হয়েছিল; তারপর নির্মাণের নির্দেশ পেয়ে ইবরাহীম জানতেন না কোথায় গড়বেন, তাই আল্লাহ পাঠালেন খাজূজ বাতাস, যা তাঁর জন্য গৃহের চারপাশের সব সরিয়ে ভিত পর্যন্ত পরিষ্কার করে দিল। কুরতুবীর বর্ণনাও এর সাথে মেলে: এক বাতাস আদমের ভিত উন্মুক্ত করে দিল, আর ইবরাহীম তার উপর তাঁর গাঁথুনি সাজালেন। এসব গায়েবের বর্ণনা, আর তাফসীরকারেরা তা আগের যুগ যেভাবে বলেছে সেভাবেই তুলে ধরেন, এমন কিছু হিসেবে নয় যা এই লেখা নিজে যাচাই করতে পারে।"
          },
          {
            "en": "Al-Baghawi records a second account, from al-Kalbī, that Allah sent a cloud the size of the House, which came and stood facing the site; in it was a head that spoke, \"O Ibrāhīm, build to my measure,\" and he built upon it. Al-Baghawi sets this beside the wind report without ruling between them. Whatever the mechanism, every version agrees on one note: Ibrāhīm did not survey the land and choose a promising spot. The place was shown to him, and his part was to obey the showing.",
            "bn": "বাগাভী দ্বিতীয় আরেকটি বর্ণনা তুলে ধরেন, কালবীর সূত্রে, যে আল্লাহ গৃহের মাপের একটি মেঘ পাঠালেন, তা এসে জায়গাটির মুখোমুখি দাঁড়াল; তার ভেতরে ছিল একটি মাথা, যা বলল, \"হে ইবরাহীম, আমার মাপে গড়ো,\" আর তিনি তার উপর গড়লেন। বাগাভী এটিকে বাতাসের বর্ণনার পাশে রাখেন, দুইয়ের মাঝে কোনো ফয়সালা না দিয়ে। কৌশল যা-ই হোক, প্রতিটি বর্ণনায় একটি কথা এক: ইবরাহীম জমি জরিপ করে কোনো সম্ভাবনাময় জায়গা বেছে নেননি। জায়গাটা তাঁকে দেখিয়ে দেওয়া হয়েছিল, আর তাঁর কাজ ছিল সেই দেখানো মেনে নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oldest House of Worship",
          "bn": "সবচেয়ে পুরনো ইবাদতগৃহ"
        },
        "p": [
          {
            "en": "Ibn Kathir grounds the first-builder view in a report from Abu Dharr that he says is recorded in the two Ṣaḥīḥs. In the wording of Sahih al-Bukhari (no. 3366): \"I said, 'O Allah's Messenger, which mosque was first built on the surface of the earth?' He said, 'Al-Masjid al-Ḥarām.' I said, 'Which was built next?' He replied, 'The mosque of al-Aqṣā.' I said, 'What was the period between the two?' He said, 'Forty years.' He added, 'Wherever the prayer time becomes due, perform the prayer there, for the best thing is to do so.'\" Its place in al-Bukhari makes it sound.",
            "bn": "ইবন কাসীর প্রথম-নির্মাতার মতটির ভিত রাখেন আবূ যার থেকে বর্ণিত এমন এক হাদীসে, যাকে তিনি বলেন দুই সহীহে সংকলিত। সহীহ বুখারীর ভাষায় (নং ৩৩৬৬): \"আমি বললাম, 'হে আল্লাহর রাসূল, জমিনের বুকে সবার প্রথমে কোন মসজিদ গড়া হয়েছিল?' তিনি বললেন, 'মাসজিদুল হারাম।' আমি বললাম, 'এরপর কোনটি?' তিনি বললেন, 'মাসজিদুল আকসা।' আমি বললাম, 'দুইয়ের মাঝে ব্যবধান কত ছিল?' তিনি বললেন, 'চল্লিশ বছর।' তিনি আরও বললেন, 'এরপর যেখানেই নামাযের সময় হয়ে যায় সেখানেই নামায পড়ে নিও, কারণ তাতেই কল্যাণ।'\" বুখারীতে থাকায় এটি সহীহ।"
          },
          {
            "en": "The hadith and the verse \"the first House appointed for mankind was that at Bakkah\" (3:96) say together that this precinct is the oldest place set apart for worship on earth. Whichever side of the dispute you take, what the verse presses does not change. The ground was consecrated to the worship of Allah alone from its first day, so to plant idols in it, as Quraysh had done, was to betray the very meaning of the place. Ibn Kathir puts it plainly: the spot was founded, from the outset, on tawḥīd.",
            "bn": "হাদীসটি আর \"মানুষের জন্য নির্ধারিত প্রথম গৃহ বাক্কায়\" (৩:৯৬) আয়াতটি একসাথে বলে, এই চত্বরই জমিনে ইবাদতের জন্য আলাদা করা সবচেয়ে পুরনো জায়গা। বিতর্কের যে পক্ষই নিন, আয়াত যা চেপে ধরে তা বদলায় না। জায়গাটি প্রথম দিন থেকেই কেবল আল্লাহর ইবাদতের জন্য পবিত্র করা ছিল, তাই সেখানে মূর্তি গেড়ে দেওয়া, কুরাইশ যা করেছিল, ছিল জায়গাটির মূল অর্থের সাথেই বিশ্বাসঘাতকতা। ইবন কাসীর সোজাসুজি বলেন: জায়গাটির গোড়াপত্তন হয়েছিল একদম শুরু থেকে তাওহীদের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Associate Nothing First",
          "bn": "সবার আগে শিরকের নিষেধ"
        },
        "p": [
          {
            "en": "The first thing said to the builder is not a plan for the walls but a creed: do not associate anything with Me. Ibn Kathir glosses it, build it upon My name alone. As-Sa'di reads it as an order to keep his deeds pure for Allah and to raise the House on Allah's name. The order of the words is the lesson. Before \"purify,\" before the worshippers are even named, comes the clearing of the heart, that nothing stand beside Allah. The building begins in tawḥīd, and only then in stone.",
            "bn": "নির্মাতাকে প্রথম যে কথাটা বলা হয়, তা দেয়ালের নকশা নয়, একটি আকীদা: আমার সাথে কিছুকে শরিক কোরো না। ইবন কাসীর এর অর্থ করেন, কেবল আমার নামেই একে গড়ো। সা'দী একে পড়েন এই নির্দেশ হিসেবে যে তিনি যেন তাঁর আমল আল্লাহর জন্য খাঁটি রাখেন আর আল্লাহর নামে গৃহ তোলেন। শব্দের এই ক্রমটাই শিক্ষা। \"পবিত্র করো\"-র আগে, এমনকি ইবাদতকারীদের নাম নেওয়ারও আগে আসে অন্তর খালি করার কথা, যেন আল্লাহর পাশে কিছু না দাঁড়ায়। নির্মাণের শুরু তাওহীদে, তারপরই কেবল পাথরে।"
          },
          {
            "en": "Al-Qurtubi records a dispute over who is being addressed. The majority, and the sounder view, is that \"do not associate\" is spoken to Ibrāhīm; ʿIkrimah read it with a yāʾ, \"that he not associate,\" carrying it as a report of what was said to him. A group held the address to be to the Prophet Muhammad ﷺ. Ma'arif al-Qur'an observes that Ibrāhīm could not himself have fallen into shirk, having already suffered at the idolaters' hands when they accused him of breaking their idols, so the warning reaches past him to people at large.",
            "bn": "কুরতুবী তুলে ধরেন, সম্বোধনটি কার প্রতি তা নিয়ে মতভেদ। অধিকাংশের মত, আর অধিকতর সহীহ মত, \"শরিক কোরো না\" কথাটি ইবরাহীমকে বলা; ইকরিমা একে ইয়া দিয়ে পড়েছেন, \"যেন সে শরিক না করে,\" তাঁকে যা বলা হয়েছিল তার বর্ণনা হিসেবে। একটি দল মনে করেছেন সম্বোধন নবী মুহাম্মদ ﷺ-এর প্রতি। মাআরিফুল কুরআন লক্ষ করে, ইবরাহীম নিজে তো শিরকে পড়তে পারতেন না, মূর্তিপূজকরা তাঁকে তাদের মূর্তি ভাঙার দায়ে অভিযুক্ত করে যখন কষ্ট দিয়েছিল তিনি তা সয়েছিলেন, তাই সতর্কবাণীটি তাঁকে ছাড়িয়ে গিয়ে পৌঁছায় সাধারণ মানুষের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Purifying Means",
          "bn": "পবিত্র রাখার অর্থ"
        },
        "p": [
          {
            "en": "The second command, \"purify My House,\" the commentators read first of all as an inward cleansing. Mujāhid and Qatadah, cited by both at-Tabari and Ibn Kathir, say it means purify it from shirk. Qatadah adds, from shirk and the worship of idols; and ʿUbayd ibn ʿUmayr, quoted by at-Tabari, glosses it as from blights and doubts. Al-Qurtubi ties the sense to another verse, \"so shun the filth of idols\" (22:30), noting that the tribes of Jurhum and the Amalekites had set idols at the House and around it before Ibrāhīm built, so purifying it meant emptying it of those.",
            "bn": "দ্বিতীয় নির্দেশ \"আমার গৃহ পবিত্র করো,\" তাফসীরকারেরা সবার আগে পড়েন ভেতরের পরিচ্ছন্নতা হিসেবে। মুজাহিদ ও কাতাদা, যাঁদের তাবারী ও ইবন কাসীর দুজনেই উদ্ধৃত করেন, বলেন এর মানে একে শিরক থেকে পবিত্র করা। কাতাদা যোগ করেন, শিরক ও মূর্তিপূজা থেকে; আর উবাইদ ইবন উমাইর, তাবারীর উদ্ধৃতিতে, এর অর্থ করেন নানা বিপদ ও সংশয় থেকে। কুরতুবী অর্থটাকে বাঁধেন আরেক আয়াতের সাথে, \"সুতরাং মূর্তিদের অপবিত্রতা বর্জন করো\" (২২:৩০), আর জানান যে জুরহুম ও আমালিকা গোত্র ইবরাহীমের নির্মাণের আগে গৃহে ও তার চারপাশে মূর্তি বসিয়েছিল, তাই একে পবিত্র করা মানে সেগুলো থেকে খালি করা।"
          },
          {
            "en": "As-Sa'di widens the sense: purify it from shirk and disobedience, and from filth and grime as well. Al-Qurtubi makes it general, taking in unbelief, innovations, and every impurity and blood. Ma'arif al-Qur'an offers a second reading, that the command reaches the coming generations too, to keep the place clear of unbelief and shirk and also to attend to its outward cleanliness and purity. So the two senses stand together, in order: first the House is emptied of every rival to Allah, and then it is kept clean, in body as in creed, for those who come to it to worship.",
            "bn": "সা'দী অর্থটাকে আরও প্রশস্ত করেন: একে পবিত্র করো শিরক ও নাফরমানি থেকে, আর ময়লা ও আবর্জনা থেকেও। কুরতুবী একে সাধারণ ধরেন, যাতে ঢোকে কুফর, বিদআত আর সব ধরনের অপবিত্রতা ও রক্ত। মাআরিফুল কুরআন দ্বিতীয় একটি পাঠ দেয়, যে নির্দেশটি পরের প্রজন্মের কাছেও পৌঁছায়, জায়গাটিকে কুফর ও শিরক থেকে মুক্ত রাখতে আর তার বাইরের পরিচ্ছন্নতা ও পবিত্রতারও যত্ন নিতে। তাই দুটি অর্থ পাশাপাশি দাঁড়ায়, ক্রম মেনে: আগে গৃহকে খালি করা হয় আল্লাহর প্রতিটি শরিক থেকে, তারপর তা পরিষ্কার রাখা হয়, দেহে যেমন আকীদায় তেমন, তাদের জন্য যারা ইবাদত করতে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Circle and Bow",
          "bn": "যারা তাওয়াফ করে ও রুকু করে"
        },
        "p": [
          {
            "en": "The House is purified for four named kinds of worshipper: aṭ-ṭāʾifīn, those who circle it; al-qāʾimīn, those who stand; ar-rukkaʿ, those who bow; and as-sujūd, those who prostrate. At-Tabari, on the authority of ʿAṭāʾ and Qatadah, glosses \"those who stand\" as those standing in their prayer, and reports from Ibn Zayd that standing, bowing and prostrating all describe the worshipper at prayer, while the ṭāʾif is he who circles the House. Ibn Kathir notes that ṭawāf is the act of worship most particular to the House, performed at no other spot on earth.",
            "bn": "গৃহকে পবিত্র করা হয় চারটি ধরনের ইবাদতকারীর জন্য: আত-তাইফীন, যারা তাওয়াফ করে; আল-কাইমীন, যারা দাঁড়ায়; আর-রুক্কা, যারা রুকু করে; আর আস-সুজূদ, যারা সিজদা করে। তাবারী, আতা ও কাতাদার সূত্রে, \"যারা দাঁড়ায়\" কথার অর্থ করেন নামাযে দাঁড়ানো লোক, আর ইবন যাইদ থেকে আনেন যে দাঁড়ানো, রুকু ও সিজদাকারী হলো নামাযি মানুষ, আর তাইফ হলো সে-ই যে গৃহের চারপাশে ঘোরে। ইবন কাসীর জানান, তাওয়াফই গৃহের জন্য সবচেয়ে নির্দিষ্ট ইবাদত, জমিনের আর কোথাও তা করা হয় না।"
          },
          {
            "en": "Ibn Kathir adds that ṭawāf and prayer are named together because neither is prescribed except in relation to the House: the ṭawāf around it, the prayer offered facing it in most cases. As-Sa'di notes that ṭawāf is set first here because it belongs to this House alone. The parallel command given to Ibrāhīm and Ismāʿīl, \"purify My House for those who circle, and those in iʿtikāf, and those who bow and prostrate\" (2:125), which Ibn Kathir quotes, lists the same worshippers, with those keeping iʿtikāf standing where this verse names those who stand.",
            "bn": "ইবন কাসীর যোগ করেন, তাওয়াফ আর নামায একসাথে নাম নেওয়া হয়েছে কারণ দুটোর কোনোটাই গৃহ ছাড়া নির্ধারিত নয়: তাওয়াফ তার চারপাশে, আর নামায বেশির ভাগ সময় তার দিকে মুখ করে। সা'দী লক্ষ করেন, এখানে তাওয়াফকে আগে রাখা হয়েছে কারণ তা কেবল এই গৃহেরই। ইবরাহীম ও ইসমাঈলকে দেওয়া সমান্তরাল নির্দেশ, \"আমার গৃহ পবিত্র করো তাওয়াফকারী, ইতিকাফকারী আর রুকু ও সিজদাকারীদের জন্য\" (২:১২৫), যা ইবন কাসীর উদ্ধৃত করেন, একই ইবাদতকারীদের নাম নেয়, তবে এই আয়াতে যেখানে দাঁড়ানো লোকদের কথা, সেখানে ইতিকাফকারীদের কথা।"
          },
          {
            "en": "Read the sequence whole and the verse's argument stands clear. The site is shown; the first word is tawḥīd; the House is purified of every rival; and only then are the worshippers named. The place exists for one thing, the worship of the One, and its worshippers are described not by rank or lineage but by what they do with their bodies before Allah: circling, standing, bowing, laying the face on the ground. To crowd such a place with idols, as the generations before the Prophet ﷺ had done, was to turn its whole reason for being upside down.",
            "bn": "ক্রমটা পুরো পড়ুন, আয়াতের যুক্তি পরিষ্কার হয়ে যায়। জায়গা দেখানো হয়; প্রথম কথা তাওহীদ; গৃহকে প্রতিটি শরিক থেকে পবিত্র করা হয়; আর কেবল তখনই ইবাদতকারীদের নাম নেওয়া হয়। জায়গাটির অস্তিত্ব একটি কাজের জন্য, এক আল্লাহর ইবাদত, আর তার ইবাদতকারীদের চেনানো হয় পদ বা বংশ দিয়ে নয়, আল্লাহর সামনে তারা দেহ দিয়ে যা করে তা দিয়ে: তাওয়াফ, দাঁড়ানো, রুকু, মাটিতে মুখ রাখা। এমন এক জায়গা মূর্তিতে ভরিয়ে দেওয়া, নবী ﷺ-এর আগের প্রজন্মগুলো যা করেছিল, ছিল তার গোটা উদ্দেশ্যকে উল্টে দেওয়া।"
          }
        ]
      }
    ]
  },
  "22:35": {
    "sections": [
      {
        "h": {
          "en": "Who the Tidings Are For",
          "bn": "সুসংবাদ কাদের জন্য"
        },
        "p": [
          {
            "en": "The verse just before this one ends with a command: give good tidings to the humble, al-mukhbitīn. It is a warm word, but a vague one on its own, and the listener is left asking who exactly is meant. At-Tabari answers by pointing straight ahead: he says this verse is the description of the mukhbitīn, so the good tidings and the people who receive them arrive in the same breath. Allah names a reward and then, rather than leaving us to guess, spells out the character He is rewarding.",
            "bn": "ঠিক এর আগের আয়াত শেষ হয় একটা নির্দেশে: সুসংবাদ দাও বিনীতদের, আল-মুখবিতীনদের। কথাটা মধুর, কিন্তু একা দাঁড়ালে অস্পষ্ট, আর শ্রোতা জিজ্ঞেস করে বসে ঠিক কাদের কথা বলা হচ্ছে। তাবারী উত্তর দেন সামনের দিকে আঙুল তুলে। তিনি বলেন, এ আয়াতটাই সেই মুখবিতীনদের পরিচয়। ফলে সুসংবাদ আর যারা তা পায়, দুটো আসে একসঙ্গে এক নিঃশ্বাসে। আল্লাহ একটা পুরস্কারের নাম বলেন, তারপর আমাদের আন্দাজে ছেড়ে না দিয়ে খুলে বলেন তিনি কোন চরিত্রকে পুরস্কার দিচ্ছেন।"
          },
          {
            "en": "What does the humble word itself carry? Ibn Kathir, in the abridged commentary, gathers the early readings. Mujahid glossed the mukhbitīn as those who find contentment in their faith. Ath-Thawri added a second layer: those content in their faith who also accept the decree of Allah and submit to Him. Ibn Kathir then makes a quiet methodological choice. He says it is better to interpret the word by what comes immediately after it, and lets this verse define the humble rather than reaching for an outside gloss.",
            "bn": "বিনীত শব্দটা নিজে কী বহন করে? সংক্ষিপ্ত তাফসীরে ইবন কাসীর প্রথম যুগের পাঠগুলো জড়ো করেন। মুজাহিদ মুখবিতীনের অর্থ করেন যারা তাদের ঈমানে প্রশান্তি পায়। সাওরী এর সঙ্গে দ্বিতীয় একটা স্তর যোগ করেন: যারা ঈমানে প্রশান্ত থেকে আল্লাহর ফয়সালাও মেনে নেয় আর তাঁর কাছে আত্মসমর্পণ করে। এরপর ইবন কাসীর একটা নীরব পদ্ধতিগত সিদ্ধান্ত নেন। তিনি বলেন, শব্দটার অর্থ ঠিক পরে যা আসে তা দিয়ে করাই ভালো, আর বাইরের কোনো ব্যাখ্যা না খুঁজে এই আয়াতকেই বিনীতের সংজ্ঞা হতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Marks, Not Four Slogans",
          "bn": "চার চিহ্ন, চার স্লোগান নয়"
        },
        "p": [
          {
            "en": "The Muyassar sums up the whole verse before parsing it. When Allah alone is mentioned they fear His punishment and are wary of crossing Him; when hardship strikes they bear it in hope of reward; they perform the prayer in full; and they spend from what He has provided, in what is due and in what is recommended. Four marks, and not one of them is a slogan but a thing a person either does or does not do.",
            "bn": "মুয়াসসার আয়াতটা বিশ্লেষণের আগে গোটাটার সার টেনে দেন। কেবল আল্লাহর নাম উচ্চারিত হলে এরা তাঁর শাস্তিকে ভয় পায় আর তাঁকে অমান্য করতে সতর্ক থাকে। বিপদ এলে পুরস্কারের আশায় তা সয়ে নেয়। নামায পুরোপুরি আদায় করে। আর তিনি যা দিয়েছেন তা থেকে খরচ করে, যা ওয়াজিব আর যা মুস্তাহাব দুই ক্ষেত্রেই। চারটি চিহ্ন, একটাও নিছক স্লোগান নয়, বরং এমন কিছু যা মানুষ হয় করে, নয় করে না।"
          },
          {
            "en": "The sequence rewards attention. The verse starts with the heart, moves to the nerves that hold under pain, then to the body kept in prayer, and only last to the wealth let go from the hand. It travels from the most hidden thing a person owns to the most public. You cannot fake the first and you cannot hide the last. A religion that lived only in the trembling and never reached the spending would be half a religion; so would a charity with no fear of God underneath it. The verse refuses to let us pick.",
            "bn": "ক্রমটা মনোযোগের দাবি রাখে। আয়াত শুরু হয় অন্তর দিয়ে, এগোয় ব্যথার মুখে অটল থাকা স্নায়ুর দিকে, তারপর নামাযে ধরে রাখা দেহ, আর সবশেষে হাত থেকে ছেড়ে দেওয়া সম্পদ। এটা চলে মানুষের সবচেয়ে গোপন সম্পদ থেকে সবচেয়ে প্রকাশ্যের দিকে। প্রথমটা আপনি বানিয়ে দেখাতে পারবেন না, শেষটা লুকাতে পারবেন না। যে দ্বীন কেবল কম্পনে বাঁচে অথচ খরচ পর্যন্ত পৌঁছায় না, তা অর্ধেক দ্বীন। তলায় আল্লাহভীতি নেই এমন দানও তাই। আয়াত আমাদের বেছে নিতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Heart Trembles",
          "bn": "যখন অন্তর কেঁপে ওঠে"
        },
        "p": [
          {
            "en": "The first mark is a movement inside: when Allah is mentioned, their hearts wajilat. Ibn Kathir reads the word plainly as fear: their hearts are afraid of Him. Al-Qurtubi says they feared and grew wary of ever opposing Him, and he traces the trembling back to a cause. It comes, he says, from the strength of their certainty and their constant sense of their Lord, as though they were standing in front of Him. The quake is not nerves; it is what happens to a heart that has taken God seriously.",
            "bn": "প্রথম চিহ্নটা ভেতরের এক নড়াচড়া: আল্লাহর নাম উচ্চারিত হলে এদের অন্তর ওয়াজিলাত। ইবন কাসীর শব্দটার সোজা অর্থ করেন ভয়: এদের অন্তর তাঁকে ভয় পায়। কুরতুবী বলেন, এরা ভয় পেত আর তাঁকে অমান্য করতে সতর্ক থাকত, আর সেই কম্পনের কারণটাও তিনি ধরিয়ে দেন। তাঁর মতে এটা আসে এদের ইয়াকীনের জোর থেকে আর রবকে সারাক্ষণ অনুভব করা থেকে, যেন এরা তাঁর সামনেই দাঁড়িয়ে আছে। এ কাঁপুনি স্নায়ুর দুর্বলতা নয়, এ হলো সেই অন্তরের অবস্থা যে আল্লাহকে সত্যিই গুরুত্ব দিয়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an weighs the exact word and hears more than fright in it. Wajal, it says, is a feeling of awe inspired by something majestic and sublime, describing the pious who are overwhelmed with awe whenever Allah's name is spoken near them. So there is a shade of difference among the commentators: Ibn Kathir and al-Qurtubi press the note of fear and wariness, while Ma'arif hears awe before greatness. The two are not rivals. Awe of what is majestic and fear of crossing it are one response seen from two sides.",
            "bn": "মাআরিফুল কুরআন শব্দটা মেপে দেখে আর তাতে নিছক ভীতির চেয়ে বেশি কিছু শোনে। এটা বলে, ওয়াজাল হলো মহান ও সমুন্নত কিছুর সামনে জেগে ওঠা এক শ্রদ্ধামিশ্রিত ভয়, যা বোঝায় সেই মুত্তাকীদের অবস্থা যারা সামনে আল্লাহর নাম উচ্চারিত হলেই শ্রদ্ধায় অভিভূত হয়। তাই তাফসীরকারদের মধ্যে একটা সূক্ষ্ম পার্থক্য থাকে। ইবন কাসীর আর কুরতুবী ভয় ও সতর্কতার সুরে জোর দেন, আর মাআরিফ শোনে মহত্ত্বের সামনে শ্রদ্ধা। দুটো প্রতিপক্ষ নয়। মহানের সামনে শ্রদ্ধা আর তাঁকে অমান্য করার ভয়, এক প্রতিক্রিয়ারই দুই পিঠ।"
          },
          {
            "en": "At-Tabari preserves a line from Ibn Zayd that turns the mark into a test you can apply. Of the phrase their hearts tremble he says simply: their hearts do not harden. That is the quiet failure the verse is measuring against. A hardened heart hears the name of God and registers nothing, the way a callus feels no touch. As-Sa'di draws the consequence out further still: because they trembled and feared Allah alone, they left the forbidden things. The trembling was not a mood that came and went. It changed what their hands would and would not do.",
            "bn": "তাবারী ইবন যায়দের একটা কথা রেখে দেন, যা এই চিহ্নকে এমন এক পরীক্ষায় বদলে দেয় যা আপনি নিজের উপর প্রয়োগ করতে পারেন। এদের অন্তর কেঁপে ওঠে কথাটা নিয়ে তিনি শুধু বলেন: এদের অন্তর শক্ত হয় না। এটাই সেই নীরব ব্যর্থতা, যার বিপরীতে আয়াত মাপছে। শক্ত অন্তর আল্লাহর নাম শোনে অথচ কিছুই টের পায় না, যেমন কড়া পড়া চামড়া স্পর্শ বোঝে না। সাদী পরিণতিটা আরও টেনে বের করেন: কেবল আল্লাহকে ভয় পেয়ে কেঁপে উঠত বলে এরা হারাম কাজ ছেড়ে দিয়েছিল। কাঁপুনি এমন কোনো মেজাজ ছিল না যা এসে চলে যেত। এটা বদলে দিয়েছিল এদের হাত কী করবে আর কী করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe, or Only Noise",
          "bn": "শ্রদ্ধা, নাকি নিছক আওয়াজ"
        },
        "p": [
          {
            "en": "Al-Qurtubi hears this verse echo across the Qur'an and lines up its sisters. It matches, he says, the opening of Sūrah al-Anfāl: the believers are only those whose hearts tremble when Allah is mentioned, and whose faith grows when His verses are recited, and who rely on their Lord (8:2). It matches too the description in 39:23, where the skins of those who fear their Lord shiver at the finest of speech, then their skins and hearts soften to the remembrance of Allah. The same heart is being drawn again and again: it trembles, and then it softens.",
            "bn": "কুরতুবী এ আয়াতের প্রতিধ্বনি শোনেন কুরআনের নানা জায়গায় আর এর ভাইবোন আয়াতগুলো সাজিয়ে দেন। তিনি বলেন, এটা মেলে সূরা আল-আনফালের শুরুর সঙ্গে: মু'মিন তো তারাই, আল্লাহর নাম উচ্চারিত হলে যাদের অন্তর কেঁপে ওঠে, তাঁর আয়াত পড়া হলে যাদের ঈমান বাড়ে, আর যারা রবের উপর ভরসা রাখে (৮:২)। মেলে ৩৯:২৩ আয়াতের বর্ণনার সঙ্গেও, যেখানে সর্বোত্তম বাণীতে রবভীরুদের চামড়া শিউরে ওঠে, তারপর তাদের চামড়া আর অন্তর আল্লাহর স্মরণে নরম হয়ে যায়। একই অন্তরকে বারবার আঁকা হচ্ছে। সে কাঁপে, তারপর নরম হয়।"
          },
          {
            "en": "Then al-Qurtubi turns sharp. This, he says, is the state of those who truly know Allah and fear His power, not what the ignorant crowd does when they shriek and roar and bray like donkeys and then call it ecstasy and reverence. To anyone who performs such a display he puts a blunt sentence: you have not reached the rank of the Messenger of Allah ﷺ or his Companions in knowing and fearing Allah, whose state under admonition was to understand from Allah and weep out of fear of Him. Real awe, he insists, is quiet and comprehending, not loud and staged.",
            "bn": "তারপর কুরতুবী তীক্ষ্ণ হয়ে ওঠেন। তিনি বলেন, এটা তাদের অবস্থা যারা আল্লাহকে সত্যিই চেনে আর তাঁর ক্ষমতাকে ভয় করে। এটা সেই মূর্খ ভিড়ের কাণ্ড নয়, যারা চিৎকার করে, গর্জায়, গাধার মতো আওয়াজ তোলে, তারপর তাকে বলে ওয়াজদ আর খুশু। এমন প্রদর্শনী যে করে তার উদ্দেশে তিনি একটা সোজা কথা বলেন: আল্লাহকে চেনায় আর ভয় করায় তুমি রাসূলুল্লাহ ﷺ বা তাঁর সাহাবীদের স্তরে পৌঁছাওনি, উপদেশের মুখে যাঁদের অবস্থা ছিল আল্লাহর কথা বোঝা আর তাঁর ভয়ে কাঁদা। প্রকৃত শ্রদ্ধা নিরিবিলি আর বোধসম্পন্ন, উচ্চকিত আর সাজানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Heart That Weeps Alone",
          "bn": "নির্জনে কাঁদে যে অন্তর"
        },
        "p": [
          {
            "en": "A hadith in Sahih al-Bukhari paints this inner state in a face. Abu Hurayra reported that the Prophet ﷺ said: Allah will shade seven on the Day when there is no shade but His — a just ruler; a youth raised worshipping his Lord; a man whose heart is attached to the mosques; two who love one another for Allah's sake, meeting and parting on that; a man who, called by a woman of rank and beauty, says, I fear Allah; a man whose charity is so hidden his left hand knows not what his right gave; and a man who remembers Allah alone and his eyes flood with tears.",
            "bn": "সহীহ বুখারীর একটা হাদীস এই ভেতরের অবস্থাটাকে একটা মুখে এঁকে দেয়। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: ৭ জনকে আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া নেই, ন্যায়পরায়ণ শাসক; যে যুবক রবের ইবাদতে বেড়ে উঠেছে; যার অন্তর মসজিদের সঙ্গে বাঁধা; যে দুজন আল্লাহর জন্য পরস্পরকে ভালোবাসে, তারই উপর মেলে আর বিদায় নেয়; যে পুরুষকে সম্মান আর সৌন্দর্যের নারী ডাকে, অথচ সে বলে, আমি আল্লাহকে ভয় করি; যার দান এত গোপন যে তার বাঁ হাত জানে না ডান হাত কী দিল; আর যে নির্জনে আল্লাহকে স্মরণ করে আর তার চোখ অশ্রুতে উপচে পড়ে।"
          },
          {
            "en": "The last of the seven is this verse made visible: a man remembers Allah alone, with nobody watching, and his eyes spill over. That is the trembling heart of 22:35 caught in a single image, and its being alone is the whole point. No audience, no performance, nothing of the shrieking al-Qurtubi condemned. The awe is real precisely because there is no one to perform it for. What the verse calls a quaking heart, the hadith shows as tears shed in private.",
            "bn": "৭ জনের শেষজন এই আয়াতটাকেই চোখের সামনে এনে দেয়: একজন মানুষ একা আল্লাহকে স্মরণ করে, কেউ দেখছে না, আর তার চোখ উপচে পড়ে। এটাই ২২:৩৫-এর সেই কম্পিত অন্তর, একটা ছবিতে ধরা, আর তার একা থাকাটাই আসল কথা। কোনো দর্শক নেই, প্রদর্শনী নেই, কুরতুবীর নিন্দা করা সেই চিৎকারের কিছুই নেই। শ্রদ্ধা ঠিক এজন্যই খাঁটি যে দেখানোর জন্য কেউ নেই। আয়াত যাকে বলে কেঁপে ওঠা অন্তর, হাদীস তাকে দেখায় নির্জনে ঝরা অশ্রু হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience That Does Not Sour",
          "bn": "যে ধৈর্যে তিক্ততা নেই"
        },
        "p": [
          {
            "en": "The second mark is patience over what strikes them. Al-Baghawi reads it as the affliction of trial and calamity, the ordinary blows of a life. At-Tabari widens the frame: it is the hardship met in Allah's cause and the harm that reaches a person for His sake, not only misfortune in general but the cost of standing where He wants you to stand. Both readings leave the believer somewhere painful. The verse does not promise the humble a life without wounds; it promises them a certain way of carrying the wounds.",
            "bn": "দ্বিতীয় চিহ্ন হলো তাদের উপর যা আঘাত করে তাতে ধৈর্য। বাগাভী এর অর্থ করেন পরীক্ষা আর বিপর্যয়ের কষ্ট, জীবনের সাধারণ ঘা। তাবারী কাঠামোটা আরও চওড়া করেন: এটা আল্লাহর পথে পাওয়া কষ্ট আর তাঁর জন্য যে ক্ষতি একজনের কাছে পৌঁছায়, কেবল সাধারণ দুর্ভাগ্য নয়, বরং তিনি যেখানে দাঁড় করাতে চান সেখানে দাঁড়ানোর মূল্য। দুটো পাঠই মু'মিনকে কোনো এক যন্ত্রণার জায়গায় রেখে দেয়। আয়াত বিনীতদের ক্ষতহীন জীবনের ওয়াদা দেয় না, ওয়াদা দেয় ক্ষত বয়ে নেওয়ার একটা বিশেষ ধরনের।"
          },
          {
            "en": "As-Sa'di names the quality that makes their patience patience. No displeasure escapes them over any of it, he writes; they do not sour or complain against the decree, but bear it seeking the Face of their Lord, counting on His reward and awaiting His recompense. That is the hinge. Endurance alone can be mere grim teeth. What lifts theirs is the direction it faces: toward Allah, for His sake, in expectation of Him. The pain is the same pain anyone feels; the intention underneath it is what the verse counts.",
            "bn": "সাদী সেই গুণটার নাম বলেন যা তাদের ধৈর্যকে সত্যিকার ধৈর্য করে তোলে। তিনি লেখেন, এর কোনো কিছু নিয়েই তাদের মধ্যে বিরক্তি জাগে না। তারা ফয়সালার বিরুদ্ধে তিক্ত হয় না বা অভিযোগ করে না, বরং রবের সন্তুষ্টির খোঁজে তা সয়ে নেয়, তাঁর প্রতিদানের হিসাব রেখে আর তাঁর পুরস্কারের অপেক্ষায়। এটাই মোড়। শুধু সহ্য করা কেবল দাঁতে দাঁত চাপা হতে পারে। এদেরটাকে উঁচু করে তোলে তার মুখ কোন দিকে: আল্লাহর দিকে, তাঁর জন্য, তাঁরই আশায়। ব্যথা যে কারও অনুভব করা ব্যথাই, কিন্তু আয়াত যা গোনে তা হলো তার তলার নিয়ত।"
          },
          {
            "en": "Ibn Kathir sets beside the verse a stark line from al-Hasan al-Basri, who swore by Allah: you will be patient, or you will perish. It sounds severe until you see it is only honest. Trouble is not optional in this life, so patience is not a refinement added on top of faith; it is the difference between a faith that survives the trouble and one that breaks under it. The humble are not those to whom nothing happens. They are those who, when it happens, do not let it undo them.",
            "bn": "ইবন কাসীর আয়াতের পাশে রাখেন হাসান বসরীর একটা কঠোর কথা, যিনি আল্লাহর কসম খেয়ে বলেন: হয় তুমি ধৈর্য ধরবে, নয় ধ্বংস হবে। কথাটা কঠিন শোনায়, যতক্ষণ না দেখেন এটা নিছক সত্যি। এ জীবনে বিপদ ঐচ্ছিক কিছু নয়, তাই ধৈর্য ঈমানের উপর জুড়ে দেওয়া কোনো বাড়তি সৌন্দর্য নয়। এটা সেই ঈমান আর এই ঈমানের পার্থক্য, যার একটা বিপদ পেরিয়ে টিকে যায় আর অন্যটা তার নিচে ভেঙে পড়ে। বিনীতরা এমন কেউ নয় যাদের কিছুই ঘটে না। এরা তারাই, যাদের যখন ঘটে তখন তা এদের ভেঙে ফেলতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Kept Standing",
          "bn": "খাড়া রাখা নামায"
        },
        "p": [
          {
            "en": "The third mark is not that they pray but that they keep the prayer standing, and the wording matters. Al-Baghawi reads it as those who establish the prayer in its appointed times, so the mark includes when, not only whether. Ibn Kathir glosses it as those who discharge the right of Allah in the obligatory duties He has laid on them. The prayer, on his reading, is a debt owed and paid on time, not a favour done to God when the mood is right.",
            "bn": "তৃতীয় চিহ্ন এই নয় যে এরা নামায পড়ে, বরং এরা নামাযকে খাড়া রাখে, আর শব্দটা গুরুত্বপূর্ণ। বাগাভী এর অর্থ করেন যারা নামাযকে তার নির্ধারিত সময়ে কায়েম করে, তাই চিহ্নের মধ্যে ঢুকে পড়ে কখন, শুধু পড়ে কি না তা নয়। ইবন কাসীর এর ব্যাখ্যা করেন যারা আল্লাহ তাদের উপর যে ফরযগুলো চাপিয়েছেন তাতে তাঁর হক আদায় করে। তাঁর পাঠে নামায হলো একটা ঋণ, সময়মতো শোধ করা, মেজাজ ঠিক থাকলে আল্লাহকে করা কোনো অনুগ্রহ নয়।"
          },
          {
            "en": "As-Sa'di lingers on the word iqāma, to keep upright. The establishers, he says, are those who made the prayer standing, straight and complete, performing both its obligatory parts and its recommended ones, and both its outward servitude and its inward. That last pairing is the whole of it. A prayer can stand perfectly upright in its outward form, every posture correct, and be lying down inside, the heart absent from the first word to the last. To keep it standing is to hold the body and the heart in it at once.",
            "bn": "সাদী থামেন ইকামা শব্দে, যার মানে খাড়া রাখা। তিনি বলেন, কায়েমকারীরা তারাই যারা নামাযকে দাঁড় করানো, সোজা আর পূর্ণ করেছে, এর ফরয অংশ আর মুস্তাহাব অংশ দুটোই আদায় করে, আর এর বাইরের দাসত্ব আর ভেতরের দাসত্ব দুটোই। শেষ জোড়াটাই আসল কথা। নামায বাইরের গড়নে পুরোপুরি সোজা দাঁড়িয়ে থাকতে পারে, প্রতিটা ভঙ্গি নিখুঁত, অথচ ভেতরে শুয়ে থাকতে পারে, প্রথম শব্দ থেকে শেষ শব্দ পর্যন্ত অন্তর অনুপস্থিত। খাড়া রাখা মানে দেহ আর অন্তর দুটোকেই একসঙ্গে তার ভেতরে ধরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Small Part of the Gift",
          "bn": "উপহারের ছোট্ট অংশ"
        },
        "p": [
          {
            "en": "The fourth mark reaches the hand: and from what We have provided them, they spend. Al-Baghawi reads the spending simply as giving in charity. At-Tabari and the Muyassar fill it in: it is spending in what is due, the zakāh, the maintenance of dependents and of everyone whose upkeep is a duty, and giving in the path of Allah, with the Muyassar adding the recommended charities on top. So the mark is wide. It covers the fixed obligation and the free gift, the family at home and the stranger in need.",
            "bn": "চতুর্থ চিহ্ন হাত পর্যন্ত পৌঁছায়: আর আমি তাদের যা দিয়েছি তা থেকে তারা খরচ করে। বাগাভী খরচটার অর্থ সোজা করেন দান করা। তাবারী আর মুয়াসসার তা ভরে দেন: এটা ওয়াজিব খাতে খরচ, যাকাত, পোষ্যদের আর যাদের ভরণপোষণ কর্তব্য তাদের সবার খরচ, আর আল্লাহর পথে দেওয়া, তার উপর মুয়াসসার যোগ করেন মুস্তাহাব দানগুলো। তাই চিহ্নটা চওড়া। এতে ঢোকে নির্ধারিত ফরয আর স্বাধীন দান, ঘরের পরিবার আর অভাবী অপরিচিত, দুটোই।"
          },
          {
            "en": "As-Sa'di catches a single word doing quiet work. The verse says from what We provided, not all of what We provided, and that little preposition, he notes, tells you how light the command is. What you are asked to give is a small portion of what Allah gave you first, a gift you had no power to obtain except that He made it easy and provided it. Nothing in your hand was yours before it was His; giving from it only returns a fraction of a loan.",
            "bn": "সাদী একটা শব্দকে নীরবে কাজ করতে দেখেন। আয়াত বলে আমি যা দিয়েছি তা থেকে, আমি যা দিয়েছি তার সবটা নয়, আর ছোট্ট এই অব্যয়টা, তিনি বলেন, ধরিয়ে দেয় নির্দেশটা কত হালকা। আপনাকে দিতে বলা হচ্ছে আল্লাহ প্রথমে আপনাকে যা দিয়েছেন তার সামান্য একটা অংশ, এমন এক উপহার যা পাওয়ার সামর্থ্য আপনার ছিল না, তিনি সহজ করে জোগান দিয়েছেন বলেই তা এসেছে। আপনার হাতের কিছুই আপনার হওয়ার আগে তাঁর ছিল না। তা থেকে দেওয়া কেবল একটা ধারের ছোট্ট ভগ্নাংশ ফেরত দেওয়া।"
          },
          {
            "en": "As-Sa'di ends on a promise rather than a demand. O you who are provided from the bounty of Allah, he writes, spend from what Allah has provided you, and Allah will provide for you and increase you from His bounty. Read the four marks back together and they are one life, not four errands: a heart that trembles at His name, patience that keeps its footing, a prayer held upright, a hand that opens. This is the humble person Allah promised good tidings to, and the tidings, as-Sa'di reminds us, keep coming even as we give.",
            "bn": "সাদী শেষ করেন দাবির বদলে একটা ওয়াদায়, আর গোটা আয়াতের জন্য তা মানানসই সমাপ্তি। তিনি লেখেন, হে আল্লাহর অনুগ্রহে রিযকপ্রাপ্ত মানুষ, আল্লাহ তোমাকে যা দিয়েছেন তা থেকে খরচ করো, আল্লাহ তোমাকে দেবেন আর তাঁর অনুগ্রহে বাড়িয়ে দেবেন। চারটি চিহ্নকে আবার একসঙ্গে পড়ুন, এরা একটাই জীবন, চারটি আলাদা ফরমায়েশ নয়। তাঁর নামে কেঁপে ওঠা অন্তর, পা টিকিয়ে রাখা ধৈর্য, খাড়া রাখা নামায, খুলে যাওয়া হাত: এই সেই বিনীত মানুষ যাকে আল্লাহ সুসংবাদের ওয়াদা দিলেন। আর সুসংবাদ, সাদী মনে করিয়ে দেন, দেওয়ার সময়েও আসতেই থাকে।"
          }
        ]
      }
    ]
  },
  "22:40": {
    "sections": [
      {
        "h": {
          "en": "A Crime Named Plainly",
          "bn": "স্পষ্ট করে বলা অপরাধ"
        },
        "p": [
          {
            "en": "The verse before opened a door: permission to fight, given to those fought against, because they were wronged (22:39). Now the wronged are named — those evicted from their homes without right. At-Tabari identifies them as the believers whom the disbelievers of Quraysh drove out of Makkah, torturing some over their faith in Allah and His Messenger, reviling and threatening them until they left. Their treatment was without right, he says, because the persecutors stood on falsehood and the believers on the truth.",
            "bn": "এর ঠিক আগের আয়াতটি একটা দরজা খুলে দিয়েছিল: যাদের বিরুদ্ধে যুদ্ধ করা হয় তাদের যুদ্ধের অনুমতি, কারণ তাদের উপর অন্যায় করা হয়েছে (২২:৩৯)। এবার সেই নির্যাতিতদের পরিচয় দেওয়া হচ্ছে। এরা তারাই, যাদের অন্যায়ভাবে ঘর থেকে বের করে দেওয়া হয়েছে। তাবারী বলেন, এরা সেই মু'মিন যাদের কুরাইশের কাফিররা মক্কা থেকে তাড়িয়ে দিয়েছিল। আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান আনার কারণে কাউকে তারা নির্যাতন করেছে, গালি দিয়েছে, ভয় দেখিয়েছে, শেষে বের হয়ে যেতে বাধ্য করেছে। তাবারীর মতে এটা ছিল অন্যায়, কারণ নির্যাতনকারীরা ছিল বাতিলের উপর আর মু'মিনরা হকের উপর।"
          },
          {
            "en": "What was the charge? The verse answers with a startling exception: only because they say, our Lord is Allah. Ibn Kathir, reading al-Awfi from Ibn Abbas, says they were driven from Makkah to Madinah unjustly, meaning Muhammad ﷺ and his Companions. They had wronged their people in nothing, he explains, except that they worshipped Allah alone with no partner. In the idolaters' eyes this was the gravest sin; in the matter itself it was no sin at all.",
            "bn": "অপরাধটা কী ছিল? আয়াত জবাব দেয় এক চমকে দেওয়া ব্যতিক্রম দিয়ে: শুধু এ কথা বলার কারণে যে, আমাদের রব আল্লাহ। ইবন কাসীর আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে বলেন, তাদের অন্যায়ভাবে মক্কা থেকে মদীনায় বের করা হয়েছিল, অর্থাৎ মুহাম্মাদ ﷺ ও তাঁর সাহাবীদের। তিনি ব্যাখ্যা করেন, নিজের গোত্রের প্রতি তাদের কোনো অন্যায় ছিল না, কোনো অপরাধ ছিল না, শুধু এটুকু যে তারা শরিকহীন এক আল্লাহর ইবাদত করত। মুশরিকদের চোখে এটাই ছিল সবচেয়ে বড় গুনাহ। অথচ প্রকৃত বিচারে এটা কোনো গুনাহই নয়।"
          },
          {
            "en": "That the crime should be belief is not new. Ibn Kathir sets this verse beside two others: they drive out the Messenger and you because you believe in Allah your Lord (60:1), and, of the People of the Ditch, they resented them for nothing but that they believed in Allah (85:8). A faith that costs a person their home is a thread that runs through the whole Book. Here it is named plainly, so the reader will not mistake the aggressor for the aggrieved.",
            "bn": "অপরাধ যে আসলে ঈমান, এ কথা নতুন নয়। ইবন কাসীর এ আয়াতের পাশে আরও দুটি আয়াত রাখেন: তারা রাসূল ও তোমাদের বের করে দেয় এ কারণে যে তোমরা তোমাদের রব আল্লাহর প্রতি ঈমান আন (৬০:১), আর গর্তের অধিবাসীদের প্রসঙ্গে, তারা এদের উপর শুধু এ কারণেই ক্ষুব্ধ ছিল যে তারা আল্লাহর প্রতি ঈমান এনেছিল (৮৫:৮)। যে ঈমানের দাম একজনকে নিজের ঘর দিয়ে চোকাতে হয়, তা গোটা কিতাব জুড়ে বয়ে চলা এক সুতো। এখানে স্পষ্ট করে নাম ধরা হয়েছে, যাতে পাঠক আগ্রাসীকে নির্যাতিত বলে ভুল না করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Permission, Not a License",
          "bn": "অনুমতি, সনদ নয়"
        },
        "p": [
          {
            "en": "This permission had been long withheld. Al-Qurtubi relates from Ibn al-Arabi that before the pledge of Aqabah the Messenger ﷺ was not allowed war and no blood was lawful to him; for roughly a decade he was commanded only to call people to Allah, to bear patiently the harm done to him, and to turn away from the ignorant. When Quraysh grew defiant, rejected his call and tortured those who believed, only then did Allah permit His Messenger to fight and to defend himself against those who had wronged him.",
            "bn": "এই অনুমতি বহুদিন আটকে রাখা হয়েছিল। কুরতুবী ইবনুল আরাবীর সূত্রে জানান, আকাবার বাইআতের আগে রাসূল ﷺ-কে যুদ্ধের অনুমতি দেওয়া হয়নি, কোনো রক্ত তাঁর জন্য হালাল ছিল না। প্রায় দশ বছর তাঁকে শুধু আল্লাহর দিকে ডাকতে, কষ্টে ধৈর্য ধরতে আর মূর্খদের এড়িয়ে চলতে বলা হয়েছিল। কুরাইশ যখন সীমা ছাড়িয়ে গেল, তাঁর ডাক প্রত্যাখ্যান করল আর যারা ঈমান আনল তাদের নির্যাতন করল, তখনই আল্লাহ তাঁর রাসূলকে যুদ্ধের আর নিজের উপর অন্যায়কারীদের বিরুদ্ধে প্রতিরোধের অনুমতি দিলেন।"
          },
          {
            "en": "A sound report fixes the moment. At-Tirmidhi records from Ibn Abbas that when the Prophet ﷺ was expelled from Makkah, Abu Bakr said, they have driven out their Prophet, they are surely doomed; so Allah revealed, permission to fight is given to those who are fought against, because they were wronged (22:39); and Abu Bakr said, then I knew there would be fighting. At-Tirmidhi graded it a hasan hadith. It is attached to the permission verse, the immediate setting of the eviction described here.",
            "bn": "একটি সহীহ বর্ণনা মুহূর্তটাকে ধরে রাখে। তিরমিযী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ-কে যখন মক্কা থেকে বের করে দেওয়া হলো, আবু বকর (রাঃ) বললেন, এরা এদের নবীকে বের করে দিল, এরা তো ধ্বংস হবেই। তখন আল্লাহ নাযিল করলেন, যাদের বিরুদ্ধে যুদ্ধ করা হয় তাদের অনুমতি দেওয়া হলো, কারণ তাদের উপর অন্যায় করা হয়েছে (২২:৩৯)। আবু বকর (রাঃ) বললেন, তখন বুঝলাম যুদ্ধ হবে। তিরমিযী একে হাসান হাদীস বলেছেন। এটি অনুমতির আয়াতের সঙ্গে যুক্ত, যা এখানে বর্ণিত বহিষ্কারের প্রেক্ষাপট।"
          },
          {
            "en": "This needs saying plainly. The verse describes a wrongful eviction and a permission to those driven out to defend themselves and seek redress; it licenses nothing against any living person or community. Its frame is the frame the text gives it: the right of the wronged not to be crushed for their belief. Read as a warrant for aggression it is turned inside out, for it was revealed to answer aggression, not to begin it. The permission is defensive, and the verse keeps it there.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি এক অন্যায় বহিষ্কারের বর্ণনা দেয় আর যাদের তাড়ানো হয়েছে তাদের আত্মরক্ষা ও ন্যায় ফিরে পাওয়ার অনুমতি দেয়। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আয়াতের কাঠামো সেটাই যা তার নিজের বক্তব্যে আছে: নির্যাতিতের হক, বিশ্বাসের কারণে তাকে যেন পিষে ফেলা না হয়। একে আগ্রাসনের সনদ ভাবলে তা উল্টে যায়, কারণ এ নাযিল হয়েছিল আগ্রাসনের জবাবে, আগ্রাসন শুরু করতে নয়। অনুমতিটা প্রতিরক্ষামূলক, আয়াত তাকে সেখানেই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Answers for the Pushing",
          "bn": "ঠেলার দায় কার"
        },
        "p": [
          {
            "en": "The words without right are not decoration. At-Tabari stresses that the expulsion was wrongful precisely because the ones expelling stood on falsehood. The exception that follows, only because they say our Lord is Allah, the grammarians call a disjoined exception. Sibawayh reads it so; al-Farra and az-Zajjaj allow it to stand in place of the earlier phrase, as if to say they were driven out for nothing but their saying our Lord is Allah. As-Sa'di puts it sharply: if declaring the oneness of Allah is a sin, that was their sin.",
            "bn": "অন্যায়ভাবে কথাটা এখানে সাজসজ্জা নয়। তাবারী জোর দিয়ে বলেন, বহিষ্কার অন্যায় ছিল ঠিক এ কারণেই যে যারা বের করছিল তারা ছিল বাতিলের উপর। এরপরের ব্যতিক্রম, শুধু এ কথা বলার কারণে যে আমাদের রব আল্লাহ, ব্যাকরণবিদদের ভাষায় বিচ্ছিন্ন ব্যতিক্রম। সীবাওয়াইহ এভাবেই পড়েন। ফাররা ও যাজ্জাজ মেনে নেন যে এটি আগের অংশের জায়গায় বসতে পারে, যেন বলা হচ্ছে, শুধু আমাদের রব আল্লাহ বলার কারণেই তাদের তাড়ানো হলো। সা'দী কথাটা তীক্ষ্ণ করে বলেন: আল্লাহর একত্ব ঘোষণা যদি অপরাধ হয়, তবে এটাই ছিল তাদের অপরাধ।"
          },
          {
            "en": "Al-Qurtubi draws a point of law from the wording. Because Allah ascribes the driving out to the disbelievers, the verse shows that a deed forced from someone under compulsion is charged to whoever compelled it, since the sentence means to fix the blame. He sets it beside the words when the disbelievers drove him out (9:40), where the same reasoning holds. Whoever is pushed does not answer for the pushing.",
            "bn": "কুরতুবী শব্দচয়ন থেকে একটি ফিকহি বিষয় টানেন। আল্লাহ যেহেতু বের করে দেওয়ার কাজটি কাফিরদের দিকে আরোপ করেছেন, আয়াত দেখায় যে জোরপূর্বক কারও কাছ থেকে আদায় করা কাজের দায় বর্তায় সেই ব্যক্তির উপর যে জোর করেছে, কারণ বাক্যের উদ্দেশ্যই হলো দোষটা নির্ধারণ করা। তিনি এর পাশে রাখেন, যখন কাফিররা তাঁকে বের করে দিয়েছিল (৯:৪০), যেখানে একই যুক্তি খাটে। যাকে ঠেলে বের করা হয়, ঠেলার জবাব তাকে দিতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Back by Another",
          "bn": "মানুষ দিয়ে মানুষ ঠেকানো"
        },
        "p": [
          {
            "en": "Then the verse lifts from one persecuted community to a law that holds the world together: were it not that Allah checks people, some by means of others. Ibn Kathir reads it directly, were it not that He repels one people by another and restrains the evil of some against others by the circumstances He creates and decrees, the earth would be corrupted and the strong would destroy the weak. The permission just granted is one instance of a far wider mercy.",
            "bn": "এরপর আয়াত এক নির্যাতিত জনগোষ্ঠী থেকে উঠে গিয়ে এমন এক বিধানে পৌঁছায় যা গোটা দুনিয়াকে ধরে রাখে: আল্লাহ যদি মানুষদের এক দলকে দিয়ে অন্য দলকে প্রতিহত না করতেন। ইবন কাসীর সরাসরি পড়েন, তিনি যদি এক দলকে দিয়ে অন্য দলকে না ঠেকাতেন আর নিজের সৃষ্ট ও নির্ধারিত নানা উপলক্ষে কিছু মানুষের অনিষ্ট অন্যদের থেকে না সরাতেন, তবে যমীন বিপর্যস্ত হতো আর শক্তিশালী দুর্বলকে ধ্বংস করে দিত। মাত্র দেওয়া অনুমতিটা এই বিশাল রহমতেরই একটা নমুনা।"
          },
          {
            "en": "At-Tabari gathers the readings the early authorities gave. Ibn Jurayj: Allah repelling the idolaters by the Muslims. Ibn Zayd: were it not for fighting and jihad. A report from Ali, carried by many of his and Ibn Masud's companions, that Allah repels by the Prophet's Companions those who came after them. Mujahid: Allah repelling a man's wrong by the testimony of upright witnesses and the justice of rulers. Each names a different way the same restraining hand works.",
            "bn": "তাবারী পূর্বসূরিদের দেওয়া পাঠগুলো একত্র করেন। ইবন জুরাইজ: মুসলিমদের দিয়ে আল্লাহর মুশরিকদের প্রতিহত করা। ইবন যাইদ: যুদ্ধ ও জিহাদ না থাকলে। আলী (রাঃ) থেকে বর্ণনা, যা তাঁর ও ইবন মাসঊদের বহু সঙ্গী বহন করেছেন, আল্লাহ রাসূলের সাহাবীদের দিয়ে তাঁদের পরের তাবিঈদের রক্ষা করেন। মুজাহিদ: ন্যায়পরায়ণ সাক্ষীদের সাক্ষ্য দিয়ে আর শাসকদের ইনসাফ দিয়ে এক মানুষের অন্যায় ঠেকানো। প্রত্যেকে সেই একই প্রতিরোধী হাতের ভিন্ন এক পথ চিনিয়ে দেন।"
          },
          {
            "en": "At-Tabari's own choice is not to narrow it. The soundest view, he says, is that Allah restrains people by means of each other in all these ways at once: the ruler who keeps his subjects from wronging each other, the accepted witness who keeps a right from being lost, the believers who hold back the idolaters. He left the expression general, since nothing in reason or report confines it to a single sort. As-Sa'di reads it alongside the twin verse, were it not that Allah checks people, some by others, the earth would be corrupted (2:251).",
            "bn": "তাবারীর নিজের পছন্দ একে সংকুচিত না করা। তাঁর মতে সবচেয়ে সঠিক কথা হলো, আল্লাহ এই সব পথেই একসঙ্গে মানুষকে দিয়ে মানুষকে ঠেকান: যে শাসক প্রজাদের পরস্পরের উপর জুলুম থেকে বিরত রাখেন, যে গ্রহণযোগ্য সাক্ষী কারও হক নষ্ট হতে দেন না, যে মু'মিনরা মুশরিকদের ঠেকিয়ে রাখেন। আল্লাহ কথাটা ব্যাপক রেখেছেন, কারণ বুদ্ধি বা বর্ণনায় এমন কিছু নেই যা একে এক প্রকারে বেঁধে ফেলে। সা'দী একে যমজ আয়াতের সঙ্গে পড়েন, আল্লাহ মানুষদের এক দলকে দিয়ে অন্য দলকে প্রতিহত না করলে যমীন বিপর্যস্ত হতো (২:২৫১)।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Names, One Loss",
          "bn": "চার নাম, এক ক্ষতি"
        },
        "p": [
          {
            "en": "Had that restraint failed, the verse says, there would have been demolished monasteries, churches, synagogues and mosques. Sawami, most held, are the small cells of monks and hermits, so Ibn Abbas, Mujahid, Abu al-Aliyah, Ikrimah and ad-Dahhak. Qatadah read them instead as the worship-places of the Sabians, and in another report of the Magians; Muqatil bin Hayyan as wayside houses. Al-Qurtubi describes the sawmaa as a tall, sharp-topped building, once special to Christian monks, later lending its name to the Muslim minaret.",
            "bn": "সেই প্রতিরোধ ব্যর্থ হলে, আয়াত বলে, বিধ্বস্ত হয়ে যেত সন্ন্যাসীদের কুঠুরি, গির্জা, ইয়াহূদীদের উপাসনালয় আর মাসজিদ। তাফসীরকারেরা প্রতিটি নাম নির্ধারণে খেটেছেন। অধিকাংশের মতে সাওয়ামি হলো সন্ন্যাসী ও বৈরাগীদের ছোট কুঠুরি, যেমন ইবন আব্বাস (রাঃ), মুজাহিদ, আবুল আলিয়া, ইকরিমা ও দাহহাক বলেন। কাতাদা একে বরং সাবিঈদের উপাসনাস্থল পড়েন, আর অন্য এক বর্ণনায় মাজুসিদের। মুকাতিল বিন হাইয়ান পড়েন পথের ধারের ঘর। কুরতুবী সাওমাআকে বর্ণনা করেন উঁচু, সরু-মাথা ভবন হিসেবে, যা একসময় খ্রিষ্টান সন্ন্যাসীদের নির্দিষ্ট ছিল, পরে মুসলিমদের মিনারকে এ নাম দেয়।"
          },
          {
            "en": "Biya, the second word, the majority took as the churches of the Christians, larger and holding more worshippers, so Abu al-Aliyah, Qatadah and ad-Dahhak; Mujahid, by another chain, read them as synagogues. Salawat drew the widest disagreement: al-Awfi from Ibn Abbas glossed it as churches, Ikrimah and Qatadah as Jewish synagogues, which they called saluta in Hebrew, Abu al-Aliyah as Sabian worship-places, and Mujahid as roadside places of prayer for the People of the Book and Muslims alike. Al-Qurtubi counts nearly ten variant readings of the word.",
            "bn": "দ্বিতীয় শব্দ বিয়া, অধিকাংশে নিয়েছেন খ্রিষ্টানদের গির্জা হিসেবে, কুঠুরির চেয়ে বড় আর বেশি মানুষ ধরে, যেমন আবুল আলিয়া, কাতাদা ও দাহহাক বলেন। মুজাহিদ আরেক সূত্রে একে ইয়াহূদীদের উপাসনালয় পড়েন। সালাওয়াত নিয়ে মতভেদ সবচেয়ে বেশি: আওফী ইবন আব্বাস (রাঃ) থেকে একে গির্জা বলেন, ইকরিমা ও কাতাদা ইয়াহূদীদের উপাসনালয়, যাকে তারা ইবরানিতে সালুতা বলে, আবুল আলিয়া সাবিঈদের উপাসনাস্থল, আর মুজাহিদ পথের ধারে আহলে কিতাব ও মুসলিম উভয়ের নামাযের জায়গা। কুরতুবী এ শব্দের প্রায় দশটি ভিন্ন পাঠ গোনেন।"
          },
          {
            "en": "Faced with the tangle, Ibn Jarir at-Tabari settled on the plainest alignment: the monasteries of the monks, the churches of the Christians, the synagogues of the Jews, and the mosques of the Muslims, because that is the established usage of the Arabs. Khusayf saw the four names as a deliberate division of the nations' houses of worship along just those lines. Ibn Atiyyah judged that the point is rather an emphatic sweep across every place of worship, the names shared among the nations except biaa, which in Arabic belongs to the Christians alone.",
            "bn": "এই জটে পড়ে ইবন জারীর তাবারী সবচেয়ে সরল বিন্যাসে থিতু হন: সন্ন্যাসীদের কুঠুরি, খ্রিষ্টানদের গির্জা, ইয়াহূদীদের উপাসনালয় আর মুসলিমদের মাসজিদ, কারণ আরবদের প্রচলিত ব্যবহার এটাই। খুসাইফ এই চারটি নামকে দেখেন জাতিগুলোর উপাসনাস্থলের ইচ্ছাকৃত বিভাজন হিসেবে, ঠিক এই রেখায়। ইবন আতিয়া মনে করেন, উদ্দেশ্য বরং প্রতিটি ইবাদতের ঘরকে জোর দিয়ে ঢেলে বলা। নামগুলো জাতিগুলোর মধ্যে ভাগ করা, কেবল বিআ ছাড়া, যা আরবিতে শুধু খ্রিষ্টানদেরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Walls Not Our Own",
          "bn": "যে দেয়াল আমাদের নয়"
        },
        "p": [
          {
            "en": "One feature of the list is easy to pass over: three of the four houses are not the Muslims' own, and they are named first. Al-Qurtubi asks why the sanctuaries of the People of the Book come before the mosques, and answers that they are older in construction, and the mosques placed last for their nearness to the remembrance of God. The verse counts a monk's cell, a church and a synagogue among the losses Allah's restraining hand prevents.",
            "bn": "তালিকার একটা দিক সহজেই চোখ এড়িয়ে যায়, অথচ থেমে ভাবার মতো: চারটি ঘরের তিনটিই মুসলিমদের নিজের নয়, আর সেগুলোরই নাম আগে। কুরতুবী প্রশ্ন তোলেন, আহলে কিতাবের উপাসনাস্থল কেন মাসজিদের আগে এলো, আর জবাব দেন যে সেগুলো নির্মাণে প্রাচীন, আর মাসজিদকে শেষে রাখা হয়েছে আল্লাহর স্মরণের সঙ্গে তার নৈকট্যের কারণে। আয়াত এক সন্ন্যাসীর কুঠুরি, একটি গির্জা আর একটি উপাসনালয়কেও সেই ক্ষতির মধ্যে গোনে, যা আল্লাহর প্রতিরোধী হাত ঠেকিয়ে দেয়।"
          },
          {
            "en": "The mufassirun drew consequences from this. Ibn Khuwayz Mindad, cited by al-Qurtubi, held that the verse forbids demolishing the churches and synagogues of the protected non-Muslims under the covenant, since these stand in place of the homes and property whose safety was guaranteed them, though on his view they may not build new ones or enlarge the old. What is found in enemy territory, he adds, is another matter. The reading is his, set down here as he set it down.",
            "bn": "তাফসীরকারেরা এখান থেকে সিদ্ধান্ত টেনেছেন। কুরতুবীর উদ্ধৃত ইবন খুওয়াইয মিনদাদের মত, আয়াতটি চুক্তির অধীনে বসবাসকারী অমুসলিম যিম্মিদের গির্জা ও উপাসনালয় ভাঙা নিষেধ করে, কারণ এগুলো তাদের সেই ঘরবাড়ি ও সম্পদের জায়গায় দাঁড়িয়ে যার নিরাপত্তা তাদের দেওয়া হয়েছে, যদিও তাঁর মতে তারা নতুন করে বানাতে বা পুরোনোটা বড় করতে পারবে না। শত্রুভূমিতে যা পাওয়া যায়, তিনি যোগ করেন, তার হুকুম আলাদা। এই পাঠটা তাঁর, যেভাবে তিনি বলেছেন সেভাবেই এখানে রাখা হলো।"
          },
          {
            "en": "The protection, as the commentators frame it, has a boundary. Ma'arif al-Quran, following al-Qurtubi, takes the honoured houses to be those of religions founded on prophethood and revelation in their true period, not the sanctuaries of creeds never built on a prophet's call. Yet the disagreement is real and left standing: Qatadah, as we saw, read the sawami and salawat as Sabian, and the early authorities did not agree on which walls the verse gathers. What they share is that the walls at stake shelter the worship of God.",
            "bn": "তাফসীরকারদের বর্ণনায় এই সুরক্ষার একটা সীমা আছে। মাআরিফুল কুরআন কুরতুবীকে অনুসরণ করে বোঝে, সম্মানিত ঘরগুলো সেই ধর্মগুলোর যেগুলো নবুওয়াত ও ওহীর উপর গড়া, তাদের সত্যের যুগে; নবীর ডাকে না গড়া মতের উপাসনাস্থল নয়। তবু মতভেদটা সত্যি আর তা রেখে দেওয়া হয়েছে: কাতাদা, আগেই দেখা গেছে, সাওয়ামি ও সালাওয়াতকে সাবিঈদের পড়েছেন, আর কোন দেয়ালগুলো আয়াত ধরে সে নিয়ে পূর্বসূরিরা এক সুরে বলেননি। তাঁরা যেখানে একমত, তা হলো: প্রশ্নবিদ্ধ দেয়ালগুলো আল্লাহর ইবাদতকেই আশ্রয় দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Given to the Helper",
          "bn": "সাহায্যকারীকে দেওয়া সাহায্য"
        },
        "p": [
          {
            "en": "The verse turns from the houses to the ones who defend them: and Allah will surely help those who help Him. The commentators are careful about what this means. Al-Qurtubi glosses it as whoever helps His religion and His Prophet; as-Sa'di as whoever rises to aid His cause sincerely, so that the word of Allah be uppermost; at-Tabari as whoever fights in His way for the same end. To help Allah is to stand for what He revealed, not to add to Him who needs nothing.",
            "bn": "আয়াত ঘরগুলো থেকে ঘুরে সেই মানুষদের দিকে যায় যারা এগুলো রক্ষা করে: আল্লাহ অবশ্যই তাকে সাহায্য করবেন যে তাঁকে সাহায্য করে। আল্লাহকে সাহায্য করা মানে কী, তাফসীরকারেরা সে বিষয়ে সতর্ক। কুরতুবী একে ব্যাখ্যা করেন, যে তাঁর দ্বীন ও তাঁর নবীকে সাহায্য করে। সা'দী বলেন, যে খাঁটি নিয়তে তাঁর দ্বীনকে সাহায্য করতে দাঁড়ায়, তাঁর পথে লড়ে যেন আল্লাহর বাণী সর্বোচ্চ থাকে। তাবারী বলেন, যে একই লক্ষ্যে তাঁর পথে যুদ্ধ করে। আল্লাহকে সাহায্য করা মানে তিনি যা নাযিল করেছেন তার পক্ষে দাঁড়ানো, যিনি কিছুরই মুখাপেক্ষী নন তাঁতে কিছু যোগ করা নয়।"
          },
          {
            "en": "And the promise rests on a name: indeed, Allah is strong and mighty. Ibn Kathir reads it as reassurance. By His strength He created all things and set their measure; by His might no power overcomes Him; and whoever is helped by the Strong, the Mighty is helped indeed, and his enemy overpowered. Al-Khattabi, in al-Qurtubi, glosses the Strong as the fully able and the Mighty as beyond all reach. The helper who leans on such a support does not lean on his own numbers.",
            "bn": "আর প্রতিশ্রুতিটা দাঁড়িয়ে আছে এক নামের উপর: নিশ্চয়ই আল্লাহ শক্তিমান, পরাক্রমশালী। ইবন কাসীর একে পড়েন আশ্বাস হিসেবে। নিজ শক্তিতে তিনি সব কিছু সৃষ্টি করে তার পরিমাপ ঠিক করে দিয়েছেন, নিজ পরাক্রমে কোনো শক্তি তাঁকে হারাতে পারে না, আর শক্তিমান পরাক্রমশালী যাকে সাহায্য করেন সে সত্যিই সাহায্যপ্রাপ্ত আর তার শত্রু পরাভূত। কুরতুবীতে খাত্তাবী শক্তিমানকে পূর্ণ সক্ষম আর পরাক্রমশালীকে নাগালের বাইরে বলে ব্যাখ্যা করেন। এমন অবলম্বনে যে ভর দেয়, সে নিজের সংখ্যায় ভর দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where His Name Lives",
          "bn": "যেখানে তাঁর নাম বেঁচে থাকে"
        },
        "p": [
          {
            "en": "One clause has been waiting: houses in which the name of Allah is mentioned much. The grammarians note that the description sits closest to the mosques and may belong to them alone, though ad-Dahhak held that in all four the name of Allah is remembered much, and at-Tabari allowed the phrase to reach back over the whole list. As-Sa'di reads it as the life inside the walls: prayers established, the Books of Allah recited, His name invoked in every kind of remembrance. The stone is not the point; the remembrance is.",
            "bn": "একটি অংশ এতক্ষণ অপেক্ষায় ছিল: যেসব ঘরে আল্লাহর নাম অধিক স্মরণ করা হয়। ব্যাকরণবিদেরা বলেন, বিশেষণটি মাসজিদের সবচেয়ে কাছে বসে, হয়তো একে ঘিরেই। তবে দাহহাক মনে করেন চারটিতেই আল্লাহর নাম বেশি স্মরণ করা হয়, আর তাবারী কথাটাকে গোটা তালিকার উপর ফিরে যেতে দেন। সা'দী একে পড়েন দেয়ালের ভেতরের প্রাণ হিসেবে: নামায কায়িম হয়, আল্লাহর কিতাব তিলাওয়াত হয়, নানা রকম যিকিরে তাঁর নাম নেওয়া হয়। পাথর আসল কথা নয়, স্মরণটাই আসল।"
          },
          {
            "en": "So the verse guards not buildings but the memory of God kept alive in them, and it guards that memory through people willing to stand for it. That reframes the reader's place. The standing of any house where God is remembered is a trust carried by someone, and to be among those by whom Allah repels the aggressor is no accident of history but a station to be sought. When His name is being crowded out of a place or a life, the verse leaves a single question: which side of that restraining hand you are on.",
            "bn": "তাই আয়াত ইমারত নয়, বরং তার ভেতরে বাঁচিয়ে রাখা আল্লাহর স্মরণকে পাহারা দেয়, আর সে স্মরণকে পাহারা দেয় এর পক্ষে দাঁড়াতে রাজি মানুষদের দিয়ে। এতে পাঠকের জায়গাটা নতুন করে সাজে। যেখানে আল্লাহকে স্মরণ করা হয় এমন যেকোনো ঘরের টিকে থাকা কারও কাঁধে রাখা এক আমানত। আল্লাহ যাদের দিয়ে আগ্রাসীকে ঠেকান তাদের একজন হওয়া ইতিহাসের কোনো দুর্ঘটনা নয়, বরং খোঁজার মতো এক মর্যাদা। তাঁর নাম যখন কোনো জায়গা বা কোনো জীবন থেকে চাপা পড়ে যাচ্ছে, আয়াত রেখে যায় শুধু এই প্রশ্ন: সেই প্রতিরোধী হাতের কোন পাশে আপনি আছেন।"
          }
        ]
      }
    ]
  },
  "22:46": {
    "sections": [
      {
        "h": {
          "en": "A Question Asked over Ruins",
          "bn": "ধ্বংসস্তূপের ওপর দাঁড়িয়ে এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Hajj has just consoled the Prophet ﷺ with a roll call of history. If they deny you, says 22:42-44, so before them did the people of Nuh (AS), Ad and Thamud, the people of Ibrahim (AS) and of Lut (AS), and the dwellers of Madyan; and Musa (AS) was denied too. Then 22:45 shows what remains of such nations: towns fallen in on their roofs, wells abandoned mid-use, lofty palaces standing empty.",
            "bn": "সূরা আল-হাজ্জ সবেমাত্র ইতিহাসের নাম-ডাকা তালিকা দিয়ে নবী ﷺ-কে সান্ত্বনা দিয়েছে। 22:42-44 আয়াতগুলো বলে: তারা যদি আপনাকে অস্বীকার করে, তবে তাদের আগে অস্বীকার করেছিল নূহ (আঃ)-এর জাতি, আদ ও সামূদ, ইবরাহীম (আঃ)-এর জাতি ও লূত (আঃ)-এর জাতি, আর মাদইয়ানের অধিবাসীরা; মূসা (আঃ)-কেও অস্বীকার করা হয়েছিল। তারপর 22:45 আয়াত দেখায় এমন জাতিগুলোর কী অবশিষ্ট থাকে: ছাদের ওপর ভেঙে পড়া জনপদ, ব্যবহারের মাঝপথে পরিত্যক্ত কুয়ো, খালি দাঁড়িয়ে থাকা সুউচ্চ প্রাসাদ।"
          },
          {
            "en": "Against that backdrop 22:46 asks its question: have they not traveled through the land, so that they might come to have hearts with which to reason, or ears with which to hear? And then the correction that gives the verse its fame: for indeed it is not the eyes that go blind, but the hearts within the chests that go blind. The ruins were never the lesson; the lesson was what the ruins failed to produce inside the people passing them.",
            "bn": "সেই পটভূমিতে 22:46 আয়াত তার প্রশ্ন রাখে: তারা কি দেশ-দেশান্তরে ভ্রমণ করেনি, যাতে তাদের এমন হৃদয় হতো যা দিয়ে বোঝা যায়, বা এমন কান যা দিয়ে শোনা যায়? তারপর আসে সেই সংশোধন, যা আয়াতটিকে বিখ্যাত করেছে: প্রকৃতপক্ষে চোখ অন্ধ হয় না, বরং অন্ধ হয় বুকের ভেতরের হৃদয়গুলো। ধ্বংসস্তূপ কখনোই শিক্ষা ছিল না; শিক্ষা ছিল তা, যা ধ্বংসস্তূপ তাদের পাশ দিয়ে যাওয়া মানুষদের ভেতরে জাগাতে ব্যর্থ হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Organ That Reasons",
          "bn": "যে অঙ্গ দিয়ে বোঝা হয়"
        },
        "p": [
          {
            "en": "The wording deserves a slow reading: hearts with which to reason. In the Quran's language, aql — reasoning — is an activity of the qalb, the heart, and the chest is where guidance or blindness settles. So 7:179 speaks of people who have hearts with which they do not understand, and 47:24 asks whether there are locks upon hearts that stop the Quran being pondered. Understanding, in this vocabulary, is not cold computation; it is comprehension joined to love, fear and willingness — the work of a whole person.",
            "bn": "শব্দবিন্যাসটি ধীরে পড়ার দাবি রাখে: এমন হৃদয় যা দিয়ে বোঝা যায়। কুরআনের ভাষায় আকল — বুদ্ধি খাটানো — কলবের, হৃদয়ের কাজ, আর হিদায়াত বা অন্ধত্ব থিতু হয় বুকে। তাই 7:179 আয়াত বলে এমন মানুষদের কথা, যাদের হৃদয় আছে কিন্তু তা দিয়ে বোঝে না, আর 47:24 আয়াত জিজ্ঞেস করে, হৃদয়ের ওপর কি তালা পড়ে আছে, যা কুরআন নিয়ে গভীর চিন্তা আটকে দেয়। এই শব্দভাণ্ডারে বোঝা মানে শীতল হিসাব-নিকাশ নয়; তা হলো ভালোবাসা, ভয় ও সম্মতির সাথে যুক্ত উপলব্ধি — গোটা মানুষটির কাজ।"
          },
          {
            "en": "The commentators pause over the phrase the hearts within the chests. Everyone knows where hearts are; the addition is emphasis, pressing home that the blindness which destroys a person is internal, seated where no physician of eyes can reach it. The Prophet ﷺ pointed to the same address. Muslim relates from Abu Hurayrah (RA) that he said taqwa is here, gesturing to his chest three times. The decisive organ of a human life sits behind the ribs, not behind the eyes.",
            "bn": "মুফাসসিরগণ থামেন বুকের ভেতরের হৃদয়গুলো — এই কথাটির ওপর। হৃদয় কোথায় থাকে সবাই জানে; এই সংযোজন জোর দেওয়ার জন্য — গেঁথে দেওয়ার জন্য যে মানুষকে ধ্বংসকারী অন্ধত্ব ভেতরের জিনিস, যেখানে চোখের কোনো চিকিৎসক পৌঁছাতে পারে না। নবী ﷺ একই ঠিকানার দিকেই ইশারা করেছেন। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, তিনি তিনবার নিজের বুকের দিকে ইঙ্গিত করে বলেছিলেন — তাকওয়া এখানে। মানবজীবনের নির্ণায়ক অঙ্গটি বসে আছে পাঁজরের পেছনে, চোখের পেছনে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing Everything, Perceiving Nothing",
          "bn": "সব দেখা, কিছুই উপলব্ধি না করা"
        },
        "p": [
          {
            "en": "The first audience of this verse had seen plenty. Their caravans passed the territory of ruined nations; of the people of Lut (AS) the Quran says in 37:137-138 that you pass by them in the morning and by night. The evidence was on their trade routes, under their feet, in their poetry. What was missing was never optical data. That is the verse's uncomfortable precision: it refuses the excuse of ignorance by pointing out how much has already been seen to no effect.",
            "bn": "এই আয়াতের প্রথম শ্রোতারা দেখেছিল অনেক কিছুই। তাদের কাফেলা ধ্বংসপ্রাপ্ত জাতিগুলোর এলাকা পেরিয়ে যেত; লূত (আঃ)-এর জাতি সম্পর্কে কুরআন 37:137-138 আয়াতে বলে — তোমরা তো সকালে ও রাতে তাদের পাশ দিয়েই চলাচল করো। প্রমাণ ছিল তাদের বাণিজ্যপথে, পায়ের নিচে, কবিতায়। যা অনুপস্থিত ছিল তা কখনোই চোখের তথ্য নয়। এটাই আয়াতের অস্বস্তিকর নিখুঁততা: কতটা দেখা হয়ে গেছে অথচ কোনো ফল হয়নি — তা দেখিয়ে দিয়ে এটি অজ্ঞতার অজুহাত নাকচ করে দেয়।"
          },
          {
            "en": "Our condition sharpens the point rather than escaping it. No generation has seen more than ours — every ruin photographed, every disaster streamed, every grave of every empire documented. If sight alone produced wisdom, this would be the wisest age in history. The verse explains why it is not automatic: images land on the eye, but conclusions are drawn in the chest, and a chest can decline the work while the eyes go on consuming.",
            "bn": "আমাদের অবস্থা এই কথাকে এড়ায় না, বরং আরও ধারালো করে। কোনো প্রজন্ম আমাদের চেয়ে বেশি দেখেনি — প্রতিটি ধ্বংসস্তূপের ছবি তোলা, প্রতিটি দুর্যোগ সরাসরি সম্প্রচারিত, প্রতিটি সাম্রাজ্যের প্রতিটি কবর নথিবদ্ধ। শুধু দেখা-ই যদি প্রজ্ঞা আনত, এটিই হতো ইতিহাসের জ্ঞানীতম যুগ। কেন তা আপনাআপনি হয় না, আয়াতটি ব্যাখ্যা করে: ছবি নামে চোখে, কিন্তু সিদ্ধান্ত টানা হয় বুকে — আর চোখ ভোগ করে যেতে থাকলেও বুক সেই কাজটি প্রত্যাখ্যান করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Travel as an Instruction",
          "bn": "নির্দেশ হিসেবে ভ্রমণ"
        },
        "p": [
          {
            "en": "Siru fil-ard, travel through the land, is a repeated Quranic command, and it usually comes with an assignment attached: 6:11 says travel, then observe how the end was for those who denied. This is close to an empirical method — go, look at outcomes, draw the conclusion. The Quran is unafraid of evidence; it demands the field trip. What it adds, and what our verse insists on, is that the observer bring the one instrument that actually registers such evidence: a living heart.",
            "bn": "সীরু ফিল-আরদ — দেশ-দেশান্তরে ভ্রমণ করো — কুরআনের এক পুনরাবৃত্ত আদেশ, আর সাধারণত এর সাথে একটি কাজও জুড়ে দেওয়া থাকে: 6:11 আয়াত বলে, ভ্রমণ করো, তারপর দেখো অস্বীকারকারীদের পরিণাম কেমন হয়েছিল। এ প্রায় এক পরীক্ষামূলক পদ্ধতি — যাও, ফলাফল দেখো, সিদ্ধান্ত টানো। কুরআন প্রমাণকে ভয় পায় না; সে মাঠপর্যায়ের সফরই দাবি করে। সে যা যোগ করে — এবং আমাদের আয়াত যাতে জোর দেয় — তা হলো: পর্যবেক্ষক যেন সেই একটিমাত্র যন্ত্র সাথে আনে, যা এমন প্রমাণ আসলেই ধরতে পারে — একটি জীবন্ত হৃদয়।"
          },
          {
            "en": "What separates such travel from tourism is the question carried along. A tourist asks how a place looks; the traveler this verse describes asks what a place proves. The same journey, the same stones, the same museum can be either. One returns with photographs; the other returns with a changed reading of his own city, his own habits, his own unexamined confidence that catastrophe is something that happens to other civilizations.",
            "bn": "এমন ভ্রমণকে পর্যটন থেকে যা আলাদা করে, তা হলো সাথে বহন করা প্রশ্নটি। পর্যটক জিজ্ঞেস করে, জায়গাটা দেখতে কেমন; এই আয়াতে বর্ণিত মুসাফির জিজ্ঞেস করে, জায়গাটা কী প্রমাণ করে। একই সফর, একই পাথর, একই জাদুঘর — দুটোর যেকোনোটি হতে পারে। একজন ফেরে ছবি নিয়ে; অন্যজন ফেরে নিজের শহর, নিজের অভ্যাস আর নিজের সেই অপরীক্ষিত আত্মবিশ্বাসের বদলে-যাওয়া পাঠ নিয়ে — যে আত্মবিশ্বাস বলে, বিপর্যয় তো কেবল অন্য সভ্যতার বেলায় ঘটে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Hearts Go Blind",
          "bn": "হৃদয় কীভাবে অন্ধ হয়"
        },
        "p": [
          {
            "en": "Heart-blindness, in the Quran's diagnosis, is acquired rather than inborn. In 83:14 the covering on hearts is rust, and its stated cause is what they used to earn — deed after deed, refusal after refusal, each one a layer. In 47:24 the image is locks. Nobody wakes up with a blind heart; it is sealed shut gradually, by choices, which is exactly why the verse treats blindness as blameworthy rather than as misfortune.",
            "bn": "কুরআনের রোগনির্ণয়ে হৃদয়ের অন্ধত্ব জন্মগত নয়, অর্জিত। 83:14 আয়াতে হৃদয়ের ওপরের আবরণটি মরিচা, আর তার ঘোষিত কারণ — তারা যা অর্জন করত; আমলের পর আমল, প্রত্যাখ্যানের পর প্রত্যাখ্যান — প্রতিটি এক-একটি স্তর। 47:24 আয়াতে চিত্রটি তালার। কেউ অন্ধ হৃদয় নিয়ে ঘুম থেকে ওঠে না; তা ধীরে ধীরে, নিজের বাছাইয়ের হাতে বন্ধ হয়ে যায় — আর ঠিক এ কারণেই আয়াতটি অন্ধত্বকে দুর্ভাগ্য নয়, দোষ হিসেবে গণ্য করে।"
          },
          {
            "en": "The same diagnosis carries the cure, because whatever is acquired can be counteracted. The Quran names its own function in 38:29 — a blessed Book sent down so that its verses may be pondered and people of understanding take reminder. Pondering is the heart's physiotherapy: unhurried reading, honest self-application, remembrance that scrapes the rust before it sets. And 57:16 calls to believers with a question that assumes hearts can still answer: has the time not come for hearts to humble themselves to the remembrance of Allah?",
            "bn": "একই রোগনির্ণয় নিরাময়ও বহন করে, কারণ যা অর্জিত তা প্রতিহতও করা যায়। কুরআন নিজের কাজের কথা নিজেই বলেছে 38:29 আয়াতে — এক বরকতময় কিতাব, নাযিল করা হয়েছে যেন এর আয়াতগুলো নিয়ে গভীরভাবে ভাবা হয় আর বোধসম্পন্নরা উপদেশ নেয়। তাদাব্বুর হৃদয়ের ফিজিওথেরাপি: তাড়াহুড়োহীন পাঠ, নিজের ওপর সৎ প্রয়োগ, আর এমন স্মরণ যা মরিচা জমে যাওয়ার আগেই ঘষে তোলে। আর 57:16 আয়াত মুমিনদের ডাকে এমন এক প্রশ্নে, যা ধরেই নেয় হৃদয় এখনো সাড়া দিতে পারে: আল্লাহর স্মরণে হৃদয় বিনম্র হওয়ার সময় কি এখনো আসেনি?"
          }
        ]
      },
      {
        "h": {
          "en": "The Next Journey",
          "bn": "পরবর্তী সফর"
        },
        "p": [
          {
            "en": "The verse leaves each reader with a portable test. On the next journey — or the next news report, the next hospital corridor, the next walk past an abandoned house — notice whether anything reaches the chest. Seeing was never the assignment; everyone manages that. The assignment is to let what the eyes deliver be weighed where verdicts are made, until the sight of an ending produces a question about one's own. Eyes receive the world. Only hearts read it.",
            "bn": "আয়াতটি প্রতিটি পাঠকের হাতে একটি বহনযোগ্য পরীক্ষা তুলে দেয়। পরবর্তী সফরে — বা পরবর্তী সংবাদ প্রতিবেদনে, হাসপাতালের পরবর্তী করিডোরে, পরিত্যক্ত কোনো বাড়ির পাশ দিয়ে পরবর্তী হাঁটায় — খেয়াল করো, কিছু কি বুকে পৌঁছায়। দেখা কখনোই দায়িত্ব ছিল না; ওটা সবাই পারে। দায়িত্ব হলো — চোখ যা পৌঁছে দেয়, তা ওজন হতে দেওয়া সেখানে, যেখানে রায় লেখা হয়; যতক্ষণ না কোনো সমাপ্তির দৃশ্য নিজের সমাপ্তি নিয়ে প্রশ্ন জাগায়। চোখ পৃথিবীকে গ্রহণ করে। পড়ে কেবল হৃদয়।"
          }
        ]
      }
    ]
  },
  "22:53": {
    "sections": [
      {
        "h": {
          "en": "When the Whisper Lands",
          "bn": "যখন কুমন্ত্রণা এসে পড়ে"
        },
        "p": [
          {
            "en": "The verse before this one draws a line that runs through every prophet. Allah says He sent no messenger or nabi before Muhammad except that, when he tamanna, Satan cast something into his umniyya, whereupon Allah nullifies what Satan casts and makes His own verses firm (22:52). Ma'arif al-Qur'an reads tamanna here as qara'a, to recite, so umniyya means his recitation, an explanation it calls plain and straightforward and traces to many commentators. Ibn Kathir records the same reading from al-Baghawi and most exegetes, and preserves a second: Ibn Abbas glossed it as when he spoke or wished.",
            "bn": "এর আগের আয়াতটি এমন এক রেখা টানে যা প্রতিটি নবীর জীবনে চলে গেছে। আল্লাহ বলছেন, মুহাম্মদ ﷺ-এর আগে তিনি এমন কোনো রসূল বা নবী পাঠাননি যে, তিনি যখন তামান্না করেছেন তখনই শয়তান তাঁর উমনিয়াহর মধ্যে কিছু নিক্ষেপ করেছে, এরপর আল্লাহ শয়তানের নিক্ষিপ্ত জিনিস মুছে দেন আর নিজের আয়াতগুলোকে সুপ্রতিষ্ঠিত করেন (২২:৫২)। মাআরিফুল কুরআন এখানে তামান্না অর্থ নেয় ‘কারাআ’, অর্থাৎ তিলাওয়াত করা, তাই উমনিয়াহ মানে তাঁর তিলাওয়াত। এ ব্যাখ্যাকে সে সহজ ও সোজাসাপ্টা বলে এবং বহু তাফসীরকারের দিকে সম্বন্ধ করে। ইবন কাসীর বাগাভী ও অধিকাংশ মুফাসসিরের কাছ থেকে একই পাঠ তুলে ধরেন, আর একটি দ্বিতীয় অর্থও রাখেন: ইবন আব্বাস এর ব্যাখ্যা দেন যখন তিনি কথা বলতেন বা কিছু কামনা করতেন।"
          },
          {
            "en": "Then 22:53 states the purpose behind letting the casting happen at all: so that Allah may make what Satan throws in a trial. Ibn Kathir explains the naskh of the previous verse by its root meaning in Arabic, izala and raf', to remove and lift away; on the authority of Ibn Abbas he adds that Allah cancels out what Satan cast. Nothing false is left standing in the revelation. What remains is the deliberate design named in our verse: the discarded whisper is turned into a test, and a test always has its subjects.",
            "bn": "এরপর ২২:৫৩ আয়াত জানিয়ে দেয়, এই নিক্ষেপ ঘটতে দেওয়ার পেছনে উদ্দেশ্য কী। যাতে আল্লাহ শয়তানের নিক্ষিপ্ত জিনিসকে এক পরীক্ষায় পরিণত করতে পারেন। আগের আয়াতের নাসখ শব্দটি ইবন কাসীর আরবি ভাষায় এর মূল অর্থ দিয়ে বোঝান, ইযালা ও রফ’, অর্থাৎ মুছে ফেলা ও সরিয়ে দেওয়া। ইবন আব্বাসের সূত্রে তিনি যোগ করেন, আল্লাহ শয়তানের নিক্ষিপ্ত জিনিসকে বাতিল করে দেন। ওহীর মধ্যে মিথ্যা কিছুই টিকে থাকে না। যা থেকে যায় তা হলো আয়াতে বলা সেই সুপরিকল্পিত ব্যবস্থা: ফেলে দেওয়া কুমন্ত্রণাকেই এক পরীক্ষায় বদলে দেওয়া হয়, আর পরীক্ষার সবসময় কোনো না কোনো পরীক্ষার্থী থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Test, Not an Accident",
          "bn": "পরীক্ষা, দুর্ঘটনা নয়"
        },
        "p": [
          {
            "en": "The opening word li-yajala carries the lam of purpose: this is why the casting is permitted. At-Tabari reads the fitna as an ikhtibar, a testing by which Allah tries those in whose hearts is disease, and he specifies that disease as nifaq, the doubt about the truthfulness of Allah's Messenger and the reality of what he brings. Al-Muyassar agrees in a single line that the whole episode was made an ikhtibar, a trial. Al-Qurtubi takes fitna in a neighbouring sense, as dalala, the misguidance into which such a heart is led.",
            "bn": "শুরুর শব্দ লিইয়াজআলা বহন করে উদ্দেশ্যের লাম: এ কারণেই নিক্ষেপ ঘটতে দেওয়া হয়। তাবারী ফিতনাকে পড়েন ইখতিবার অর্থে, অর্থাৎ এমন এক পরীক্ষা যা দিয়ে আল্লাহ তাদের যাচাই করেন যাদের অন্তরে রোগ আছে। আর সেই রোগকে তিনি নির্দিষ্ট করেন নিফাক হিসেবে, অর্থাৎ আল্লাহর রসূলের সত্যতা আর তিনি যা নিয়ে এসেছেন তার বাস্তবতা নিয়ে সন্দেহ। মুয়াসসার এক লাইনে একই কথা বলে, গোটা ঘটনাকে বানানো হয়েছিল ইখতিবার, এক পরীক্ষা। কুরতুবী ফিতনাকে কাছাকাছি এক অর্থে নেন, দালালাহ, অর্থাৎ যে বিভ্রান্তির দিকে এমন অন্তর ঠেলে যায়।"
          },
          {
            "en": "As-Sadi sets the design out plainly. What Satan casts becomes a fitna for two kinds of people whom, he says, Allah does not concern Himself with. The suggestion is not aimed at harming the truth, which Allah has already made firm; it is allowed so that the inner state of each heart is drawn out into the open. A trial does not create what it finds in a person. It exposes it. The same words fall on every ear, and only then does it become clear which hearts were sound all along and which were not.",
            "bn": "সা’দী পুরো পরিকল্পনাটা খোলাখুলি সাজিয়ে দেন। শয়তান যা নিক্ষেপ করে তা হয়ে ওঠে দুই ধরনের মানুষের জন্য ফিতনা, যাদের নিয়ে, তাঁর ভাষায়, আল্লাহ মাথা ঘামান না। এই কুমন্ত্রণার লক্ষ্য সত্যের ক্ষতি করা নয়, কারণ আল্লাহ তো তা আগেই সুপ্রতিষ্ঠিত করে রেখেছেন। এটি ঘটতে দেওয়া হয় যাতে প্রতিটি অন্তরের ভেতরের অবস্থা বাইরে বেরিয়ে আসে। পরীক্ষা মানুষের ভেতরে যা পায় তা সে বানায় না, শুধু ফাঁস করে দেয়। একই কথা এসে পড়ে সব কানে, আর তখনই স্পষ্ট হয় কোন অন্তরগুলো গোড়া থেকেই সুস্থ ছিল আর কোনগুলো ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Story the Scholars Refused",
          "bn": "যে কাহিনি আলিমরা মানেননি"
        },
        "p": [
          {
            "en": "Many books of tafsir attach an incident-narration to the previous verse, known as the hadith of the gharaniq. It must be handled exactly as the scholars of hadith handled it. Ibn Kathir reports these narrations and then states flatly that they all come through mursal and broken chains, and that he does not consider any of them authentic. He notes that al-Bayhaqi weighed their chains in Dala'il an-Nubuwwa, and that the versions carried by Ibn Ishaq's Sira and by Musa ibn Uqba are likewise cut off from the Prophet. And Allah knows best, he closes.",
            "bn": "অনেক তাফসীরগ্রন্থ আগের আয়াতের সঙ্গে একটি ঘটনা-বর্ণনা জুড়ে দেয়, যা গারানীক-এর হাদীস নামে পরিচিত। এটিকে ঠিক সেভাবেই সামলাতে হবে যেভাবে হাদীসের আলিমরা সামলেছেন। ইবন কাসীর এই বর্ণনাগুলো তুলে ধরেন, তারপর সাফ বলে দেন যে এগুলো সবই এসেছে মুরসাল ও বিচ্ছিন্ন সনদে, আর এর একটিকেও তিনি সহীহ বলে মানেন না। তিনি জানান, বায়হাকী তাঁর দালাইলুন নুবুওয়াহতে এগুলোর সনদ যাচাই করেছেন, আর ইবন ইসহাকের সীরাত ও মূসা ইবন উকবার আনা বর্ণনাগুলোও একইভাবে নবী পর্যন্ত পৌঁছায় না। শেষে তিনি বলেন, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Al-Qurtubi is blunter still. What some have attributed to the Prophet in this story, he says, is a lie against him, for it would amount to exalting the idols, and that can never be ascribed to the prophets. Ma'arif al-Qur'an reports that the incident is not established by authentic sources, and that some scholars judged it a fabrication planted by heretics and enemies of Islam. To weave it into the commentary and then labour to answer the doubts it raises, Ma'arif adds, is a futile and thoroughly undesirable exercise.",
            "bn": "কুরতুবী আরও সোজাসুজি কথা বলেন। এই কাহিনিতে নবী ﷺ-এর নামে যা কিছু আরোপ করা হয়েছে, তা তাঁর বিরুদ্ধে মিথ্যা, কারণ তাতে মূর্তিগুলোকে মহিমান্বিত করা হয়, আর নবীদের প্রতি এমন কথা কখনোই আরোপ করা চলে না। মাআরিফুল কুরআন জানায়, ঘটনাটি কোনো নির্ভরযোগ্য সূত্রে প্রমাণিত নয়, আর কিছু আলিম একে ইসলামের শত্রু ও ধর্মদ্রোহীদের বানানো জিনিস বলে রায় দিয়েছেন। একে তাফসীরের অংশ বানিয়ে তারপর তা থেকে জন্ম নেওয়া সন্দেহগুলোর জবাব খুঁজতে বসা, মাআরিফের ভাষায়, এক অর্থহীন ও সম্পূর্ণ অবাঞ্ছিত কসরত।"
          },
          {
            "en": "This article therefore rests no part of its meaning on that story and does not repeat its words. The plain reading stands without it. Satan's suggestions and objections come against the message, Allah clears the revelation of them, and what remains is a firm text and a test for hearts. That is the sense Ma'arif calls clear and straightforward and traces to many commentators, including Abu Hayyan. A sound verse never needs a doubtful tale to hold it up.",
            "bn": "তাই এই লেখা তার অর্থের কোনো অংশ ওই কাহিনির উপর দাঁড় করায় না, আর এর শব্দগুলোও পুনরাবৃত্তি করে না। সহজ পাঠটি এই কাহিনি ছাড়াই দাঁড়িয়ে থাকে। শয়তানের কুমন্ত্রণা ও আপত্তি বার্তার বিরুদ্ধে আসে, আল্লাহ ওহীকে তা থেকে পরিষ্কার করে দেন, আর যা থেকে যায় তা এক সুপ্রতিষ্ঠিত পাঠ এবং অন্তরের জন্য এক পরীক্ষা। এই অর্থকেই মাআরিফুল কুরআন সহজ ও সোজাসাপ্টা বলে এবং আবু হাইয়ানসহ বহু তাফসীরকারের দিকে সম্বন্ধ করে। সহীহ আয়াতের জন্য কোনো সন্দেহজনক কিসসার ঠেকনা কখনো লাগে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mat and the Heart",
          "bn": "চাটাই আর অন্তর"
        },
        "p": [
          {
            "en": "The Qur'an's picture of a trial that sorts hearts has a striking parallel in a hadith recorded in Sahih Muslim, narrated by Hudhayfa ibn al-Yaman. The Prophet said that trials are presented to hearts like a reed mat woven stick by stick. Any heart that soaks a trial in has a black mark placed on it, and any heart that rejects it has a white mark placed on it. The report sits in Muslim's Sahih, and its wording turns the abstract sorting of our verse into something you can almost watch being woven.",
            "bn": "অন্তর বাছাই করে দেয় এমন এক পরীক্ষার যে ছবি কুরআন আঁকে, তার এক চমকপ্রদ মিল আছে সহীহ মুসলিমে রক্ষিত এক হাদীসে, যা বর্ণনা করেছেন হুযাইফা ইবনুল ইয়ামান (রাঃ)। নবী ﷺ বলেছেন, অন্তরের সামনে পরীক্ষাগুলো এমনভাবে পেশ করা হয় যেমন চাটাই বোনা হয় একটি একটি কাঠি দিয়ে। যে অন্তর কোনো পরীক্ষা শুষে নেয় তার গায়ে বসে যায় কালো দাগ, আর যে অন্তর তা প্রত্যাখ্যান করে তার গায়ে বসে সাদা দাগ। বর্ণনাটি আছে মুসলিমের সহীহতে, আর এর ভাষা আয়াতের বিমূর্ত বাছাইকে চোখে দেখার মতো এক ছবিতে বদলে দেয়।"
          },
          {
            "en": "The result, the hadith goes on, is two kinds of hearts. One is white like a smooth stone, and no fitna can harm it for as long as the heavens and the earth endure. The other is black and overturned, like a vessel tipped upside down, recognising no good and rejecting no evil except whatever its own desire has soaked into it. That is 22:53 drawn small: the same trials, presented to everyone alike, and two outcomes settled entirely by the heart that takes them in.",
            "bn": "হাদীসটি এরপর বলে, শেষমেশ দাঁড়ায় দুই ধরনের অন্তর। একটি মসৃণ পাথরের মতো সাদা, যতদিন আসমান ও জমিন টিকে থাকে ততদিন কোনো ফিতনা তার ক্ষতি করতে পারে না। আরেকটি কালো ও উল্টানো, উপুড় করে রাখা পাত্রের মতো, যা ভালোকে ভালো বলে চেনে না আর মন্দকে মন্দ বলে ফেরায় না, কেবল নিজের প্রবৃত্তি যা শুষিয়ে দিয়েছে সেটুকু ছাড়া। এ যেন ২২:৫৩ আয়াতটিই ছোট করে আঁকা: একই পরীক্ষা, সবার সামনে সমানভাবে পেশ করা, আর দুই পরিণতি পুরোপুরি ঠিক করে দেয় যে অন্তর তা গ্রহণ করে সেটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart With a Sickness",
          "bn": "রোগে ভোগা অন্তর"
        },
        "p": [
          {
            "en": "The verse names two groups, and the first is those in whose hearts is disease. Ibn Kathir glosses the disease as doubt, shirk, disbelief and hypocrisy, the state of people who were pleased by the whisper and imagined it was truly from Allah. Ibn Jurayj, quoted by both Ibn Kathir and at-Tabari, identifies this first group as the hypocrites. At-Tabari had already fixed the disease as nifaq, the doubt about the Messenger's truthfulness, and al-Qurtubi names it as shirk and hypocrisy together. The label points to a divided, uncertain heart.",
            "bn": "আয়াত দুই দলের নাম করে, প্রথম দল হলো যাদের অন্তরে রোগ আছে। ইবন কাসীর এই রোগের ব্যাখ্যা দেন সন্দেহ, শিরক, কুফর ও নিফাক হিসেবে, অর্থাৎ সেই মানুষদের অবস্থা যারা কুমন্ত্রণায় খুশি হয়েছিল আর ভেবেছিল তা সত্যিই আল্লাহর পক্ষ থেকে। ইবন জুরাইজ, যাঁকে ইবন কাসীর ও তাবারী উভয়েই উদ্ধৃত করেন, এই প্রথম দলকে চিহ্নিত করেন মুনাফিক হিসেবে। তাবারী আগেই রোগটিকে নির্দিষ্ট করেছিলেন নিফাক হিসেবে, অর্থাৎ রসূলের সত্যতা নিয়ে সন্দেহ, আর কুরতুবী একে বলেন শিরক ও নিফাক একসঙ্গে। নামটাই এক দোদুল্যমান, অনিশ্চিত অন্তরের দিকে ইশারা করে।"
          },
          {
            "en": "As-Sadi describes how such a heart works with unusual precision. Its disease is weakness, a faith that is not complete and a conviction that is not firm, so that the slightest passing doubt leaves its mark. When a heart like this hears what Satan casts, misgiving and uncertainty move into it, and the whisper has become a trial for it. Notice where the fault lies. It was never in the strength of the objection, which Allah had already stripped of any truth, but in the thinness of the faith it happened to meet.",
            "bn": "সা’দী অস্বাভাবিক নিখুঁতভাবে বোঝান এমন অন্তর কীভাবে কাজ করে। এর রোগ হলো দুর্বলতা, এমন ঈমান যা পূর্ণ নয় আর এমন প্রত্যয় যা দৃঢ় নয়, ফলে সামান্যতম সন্দেহ এসে পড়লেও তা দাগ রেখে যায়। এমন অন্তর যখন শয়তানের নিক্ষিপ্ত জিনিস শোনে, তখন সংশয় আর অনিশ্চয়তা তার ভেতরে ঢুকে বসে, আর কুমন্ত্রণা তার জন্য হয়ে যায় এক পরীক্ষা। দোষটা কোথায়, খেয়াল করুন। আপত্তির জোরে কখনোই নয়, কারণ আল্লাহ তো তা থেকে সত্যটুকু আগেই সরিয়ে নিয়েছেন। দোষ ছিল যে ঈমানের সঙ্গে তার দেখা হলো তার পাতলা হওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart Turned to Stone",
          "bn": "পাথর হয়ে যাওয়া অন্তর"
        },
        "p": [
          {
            "en": "The second group is those whose hearts are hardened. Ibn Jurayj, again in at-Tabari, describes hearts grown hard against faith in Allah, hearts that will not soften and will not relent, and he identifies them as the idolaters. Al-Muyassar reads the same way: the hard-hearted among the mushrikun whom no rebuke moves. Al-Qurtubi says their hearts do not soften to the command of Allah, and as-Sadi calls them coarse hearts that no warning or reminder touches, hearts that take nothing in from Allah or His Messenger because of their hardness.",
            "bn": "দ্বিতীয় দল হলো যাদের অন্তর কঠিন হয়ে গেছে। ইবন জুরাইজ, আবারও তাবারীর বরাতে, বর্ণনা করেন এমন অন্তর যা আল্লাহর প্রতি ঈমানের বিরুদ্ধে শক্ত হয়ে গেছে, যে অন্তর নরম হয় না আর ফেরে না, আর তিনি তাদের চিহ্নিত করেন মুশরিক হিসেবে। মুয়াসসারও একই পথে পড়ে: মুশরিকদের মধ্যে সেই কঠিন-হৃদয়রা যাদের কোনো ধমক নাড়ায় না। কুরতুবী বলেন, তাদের অন্তর আল্লাহর হুকুমের সামনে নরম হয় না, আর সা’দী তাদের বলেন রুক্ষ অন্তর, যাকে কোনো সতর্কবাণী বা নসিহত স্পর্শ করে না, যে অন্তর কাঠিন্যের কারণে আল্লাহ বা তাঁর রসূলের কাছ থেকে কিছুই গ্রহণ করে না।"
          },
          {
            "en": "The two groups fail in opposite ways, and as-Sadi draws the line cleanly. Where the sick heart caves in and begins to doubt, the hard heart does the reverse: it seizes the very same whisper and turns it into a proof for its own falsehood, argues by it, and sets itself in open opposition to Allah and His Messenger. One is dragged down by weakness, the other digs in out of pride. One disagreement is worth keeping: Muqatil ibn Hayyan, cited by Ibn Kathir, read the hardened here as the Jews rather than the idolaters.",
            "bn": "দুই দল উল্টো পথে ব্যর্থ হয়, আর সা’দী রেখাটা পরিষ্কার করে টানেন। রোগা অন্তর যেখানে ভেঙে পড়ে সন্দেহ করতে শুরু করে, শক্ত অন্তর সেখানে করে ঠিক উল্টোটা। সেই একই কুমন্ত্রণাকে সে আঁকড়ে ধরে নিজের বাতিলের পক্ষে প্রমাণ বানায়, তা দিয়ে তর্ক করে, আর আল্লাহ ও তাঁর রসূলের বিরুদ্ধে খোলাখুলি দাঁড়িয়ে যায়। একজনকে দুর্বলতা টেনে নামায়, আরেকজন অহংকারে গেঁড়ে বসে। একটি মতভেদ ধরে রাখা দরকার: ইবন কাসীরের উদ্ধৃত মুকাতিল ইবন হাইয়ান এখানকার কঠিন-হৃদয়দের মুশরিক নয়, বরং ইহুদি বলে পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Far From the Truth",
          "bn": "সত্য থেকে বহু দূরে"
        },
        "p": [
          {
            "en": "The verse ends with a verdict: and indeed the wrongdoers are in far-off dissension. Ibn Kathir reads shiqaq baid as misguidance, opposition and stubbornness, a state far from truth and from what is right. Al-Qurtubi glosses the wrongdoers as the disbelievers, caught in opposition, disobedience and dissension against Allah and His Messenger. At-Tabari names the mushrikun of the Prophet's people, standing against Allah's command and far from the truth. Al-Muyassar gathers both earlier groups: the wrongdoers among them are in severe enmity toward Allah and His Messenger.",
            "bn": "আয়াত শেষ হয় এক রায় দিয়ে: আর অন্যায়কারীরা নিশ্চিতভাবেই বহুদূরের মতভেদে লিপ্ত। ইবন কাসীর শিকাক বাঈদ পড়েন বিভ্রান্তি, বিরোধিতা ও একগুঁয়েমি হিসেবে, এমন এক অবস্থা যা সত্য ও ন্যায় থেকে বহু দূরে। কুরতুবী অন্যায়কারীদের ব্যাখ্যা দেন কাফির হিসেবে, যারা আল্লাহ ও তাঁর রসূলের বিরুদ্ধে বিরোধিতা, নাফরমানি ও দ্বন্দ্বে আটকে আছে। তাবারী নাম করেন নবীর কওমের মুশরিকদের, যারা আল্লাহর হুকুমের বিরুদ্ধে দাঁড়িয়ে সত্য থেকে বহু দূরে সরে আছে। মুয়াসসার দুই দলকেই একত্র করে: তাদের মধ্যকার অন্যায়কারীরা আল্লাহ ও তাঁর রসূলের প্রতি তীব্র শত্রুতায় লিপ্ত।"
          },
          {
            "en": "One thing must be said plainly, in both languages. This verse describes wrongdoers, the diseased and the hardened who take a whisper and make a weapon of it, and it licenses nothing against any living person or community. It is a diagnosis of a spiritual condition that the text names, not a charge to be pinned on some group of people today. The readings of Ibn Jurayj and Muqatil describe hearts in the past; they are not warrants against a neighbour. The mirror the verse holds up is turned, first of all, on the reader's own heart.",
            "bn": "একটি কথা সোজাসুজি বলা দরকার, দুই ভাষাতেই। এই আয়াত অন্যায়কারীদের বর্ণনা দেয়, সেই রোগা ও শক্ত অন্তরদের যারা কুমন্ত্রণাকে অস্ত্র বানায়, আর এটি কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এটি এক আত্মিক অবস্থার নির্ণয়, যা আয়াত নাম ধরে বলে, আজকের কোনো দলের ঘাড়ে চাপানোর অভিযোগ নয়। ইবন জুরাইজ ও মুকাতিলের পাঠ অতীতের কিছু অন্তরের বর্ণনা, প্রতিবেশীর বিরুদ্ধে কোনো সনদ নয়। আয়াত যে আয়নাটি তুলে ধরে, তা সবার আগে ফেরানো পাঠকের নিজের অন্তরের দিকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy for the Third Heart",
          "bn": "তৃতীয় অন্তরের জন্য রহমত"
        },
        "p": [
          {
            "en": "As-Sadi points out a third group that the verse implies by contrast. The very casting that becomes a fitna for the diseased and the hardened is, for the believers, a mercy. The next verse names them: those given knowledge, who come to know that it is the truth from their Lord, believe in it, and whose hearts submit to it in humility (22:54). What wounds the weak heart heals the sound one. The same storm that topples a rotted tree only drives the living tree's roots deeper into the ground.",
            "bn": "সা’দী এমন একটি তৃতীয় দলের দিকে ইশারা করেন যাদের আয়াত বৈপরীত্যের মধ্য দিয়ে বোঝায়। যে নিক্ষেপ রোগা ও শক্ত অন্তরের জন্য ফিতনা হয়ে ওঠে, সেই একই জিনিস ঈমানদারদের জন্য হয় রহমত। পরের আয়াত তাদের নাম করে: যাদের জ্ঞান দেওয়া হয়েছে, যারা জেনে নেয় এটি তাদের রবের পক্ষ থেকে আসা সত্য, তাতে বিশ্বাস আনে, আর যাদের অন্তর নম্রতাভরে তার কাছে নত হয় (২২:৫৪)। যা দুর্বল অন্তরকে আহত করে, তা-ই সুস্থ অন্তরকে সারিয়ে তোলে। যে ঝড় পচে যাওয়া গাছকে উপড়ে ফেলে, সেই ঝড়ই জ্যান্ত গাছের শিকড় আরও গভীরে বসিয়ে দেয়।"
          },
          {
            "en": "So the verse leaves the reader with a task rather than a fright. Doubts will keep coming; the Prophet said as much of every heart, and no one can stop the reed mat from being woven stick by stick. What can be tended is the heart it is woven onto. Keep it soft enough to be moved by a reminder and firm enough not to be swept off by a clever objection, and the next trial that reaches you will pass over you as the fitna passed over the white heart, leaving no harm behind.",
            "bn": "তাই আয়াত পাঠকের হাতে ভয় নয়, একটি কাজ তুলে দেয়। সন্দেহ আসতেই থাকবে, নবী ﷺ প্রতিটি অন্তরের বেলায় তা-ই বলেছেন, আর চাটাই একটি একটি কাঠিতে বোনা হওয়া কেউ ঠেকাতে পারে না। যা যত্ন করা যায় তা হলো যে অন্তরের উপর তা বোনা হচ্ছে সেটি। অন্তরটাকে এতটা নরম রাখুন যাতে এক নসিহতে তা নড়ে ওঠে, আর এতটা দৃঢ় রাখুন যাতে চালাক কোনো আপত্তি তাকে ভাসিয়ে নিতে না পারে। তাহলে পরের যে পরীক্ষা আপনার কাছে আসবে তা আপনার উপর দিয়ে পার হয়ে যাবে যেভাবে ফিতনা সাদা অন্তরের উপর দিয়ে গিয়েছিল, কোনো ক্ষতি রেখে না গিয়ে।"
          }
        ]
      }
    ]
  },
  "22:58": {
    "sections": [
      {
        "h": {
          "en": "Two Verbs, One Line",
          "bn": "দুই ক্রিয়া, এক লাইন"
        },
        "p": [
          {
            "en": "Wa'lladhīna hājarū fī sabīli-llāhi thumma qutilū aw mātū: and those who emigrated in the cause of Allah, then were killed or died. At-Tabari reads the opening as those who parted from their homelands and their clans, leaving all of that for the pleasure of Allah, His obedience, and the struggle against His enemies, then were killed or died while in that very state. Everything in the verse turns on the small word that joins the two verbs: killed, or died.",
            "bn": "ওয়াল্লাযীনা হা-জারূ ফী সাবীলিল্লা-হি ছুম্মা কুতিলূ আও মা-তূ: আর যারা আল্লাহর পথে হিজরাত করেছে, অতঃপর নিহত হয়েছে কিংবা মারা গেছে। তাবারী আয়াতের শুরুটা এভাবে পড়েন, যারা নিজেদের দেশ ও গোত্র ছেড়ে দিয়েছে, আল্লাহর সন্তুষ্টি, তাঁর আনুগত্য আর তাঁর শত্রুদের বিরুদ্ধে জিহাদের জন্য সে সব ত্যাগ করেছে, তারপর সেই অবস্থাতেই নিহত হয়েছে বা মারা গেছে। গোটা আয়াতের ভার ছোট্ট একটি শব্দের ওপর, যা দুই ক্রিয়াকে জোড়া দেয়: নিহত, অথবা মৃত।"
          },
          {
            "en": "The whole weight rests on that or. Ibn Kathir spells it out: then they are killed, meaning in Jihad, or they die, meaning they pass away without being involved in any fighting. Al-Muyassar keeps the same two doors open: whoever among them was killed while fighting the disbelievers, and whoever died without fighting. The verse will not let the second man's death be counted as a smaller thing than the first man's.",
            "bn": "গোটা ভার ওই 'অথবা'-এর ওপর। ইবন কাসীর খুলে বলেন, অতঃপর নিহত হয়েছে মানে জিহাদে, কিংবা মারা গেছে মানে কোনো যুদ্ধ ছাড়াই স্বাভাবিকভাবে মৃত্যুবরণ করেছে। মুয়াসসারও একই দুটি দরজা খোলা রাখেন: তাদের মধ্যে যে কাফিরদের সঙ্গে যুদ্ধ করতে গিয়ে নিহত হয়েছে, আর যে যুদ্ধ ছাড়াই মারা গেছে। আয়াতটি দ্বিতীয় জনের মৃত্যুকে প্রথম জনের চেয়ে ছোট করে গুনতে রাজি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Leaving Costs",
          "bn": "যা ছেড়ে আসতে হয়"
        },
        "p": [
          {
            "en": "Before either death, there is the leaving. Ibn Kathir describes it as leaving behind homelands, families and friends, leaving his own country for the sake of Allah and His Messenger to support His religion. As-Sa'di calls the whole verse a great glad tiding for the believer who emigrated in Allah's cause, who went out from his home, his homeland, his children and his wealth, seeking the Face of Allah and the victory of His religion.",
            "bn": "দুই মৃত্যুর আগে আছে সেই বেরিয়ে পড়া। ইবন কাসীর একে বর্ণনা করেন এভাবে, দেশ, পরিবার আর বন্ধুদের পেছনে ফেলে আসা, আল্লাহ ও তাঁর রাসূল ﷺ-এর জন্য এবং তাঁর দ্বীনকে সাহায্য করতে নিজের দেশ ছেড়ে বেরিয়ে যাওয়া। সাদী গোটা আয়াতটিকে বলেন এক বিরাট সুসংবাদ সেই মানুষের জন্য, যে আল্লাহর পথে হিজরাত করেছে, আল্লাহর সন্তুষ্টি আর তাঁর দ্বীনের জয়ের আশায় ঘর, দেশ, সন্তান আর সম্পদ ছেড়ে বেরিয়ে গেছে।"
          },
          {
            "en": "Al-Baghawi puts the same act in plain words: they parted from their homelands and their tribes in obedience to Allah and in seeking His pleasure. Notice that the setting-out itself is the deed being weighed. Before a single blow is struck, before a single day of the journey has passed, the leaving is already written on the record. It is the act the believer can actually choose, and Allah has fixed His promise to it.",
            "bn": "বাগাভী একই কাজটিকে সোজা কথায় রাখেন: তারা আল্লাহর আনুগত্যে আর তাঁর সন্তুষ্টির খোঁজে নিজেদের দেশ ও গোত্র ছেড়ে এসেছে। খেয়াল করুন, বেরিয়ে পড়াটাই এখানে ওজন করা হচ্ছে। একটি আঘাত পড়ার আগেই, যাত্রার একটি দিন পার হওয়ার আগেই, সেই ত্যাগটা খাতায় লেখা হয়ে গেছে। এ কাজটাই বান্দা সত্যিকারভাবে বেছে নিতে পারে, আর আল্লাহ তাঁর প্রতিশ্রুতি বেঁধে দিয়েছেন এর সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bed and the Battlefield",
          "bn": "বিছানা আর যুদ্ধক্ষেত্র"
        },
        "p": [
          {
            "en": "Now the two deaths, side by side. Ibn Kathir reads them as killed in Jihad, or dying a natural death, ḥatfa anfihi, passing away on his bed without any fighting. He anchors the reading in another verse, 4:100: and whoever leaves his home as an emigrant unto Allah and His Messenger, and death then overtakes him, his reward is surely incumbent upon Allah. The man whom plain death overtakes on the road is named in the Book beside the man struck down in battle.",
            "bn": "এবার দুই মৃত্যু, পাশাপাশি। ইবন কাসীর পড়েন, জিহাদে নিহত হওয়া, অথবা স্বাভাবিক মৃত্যু, হাতফা আনফিহি, কোনো যুদ্ধ ছাড়াই বিছানায় মৃত্যুবরণ করা। তিনি এ পাঠকে বাঁধেন আরেক আয়াতে, ৪:১০০-এ: আর যে আল্লাহ ও তাঁর রাসূল ﷺ-এর দিকে হিজরাতকারী হয়ে ঘর থেকে বের হয়, অতঃপর মৃত্যু তাকে পেয়ে বসে, তার প্রতিদান আল্লাহর জিম্মায় অবধারিত হয়ে যায়। পথের মধ্যে যাকে নিছক মৃত্যু পেয়ে বসে, কিতাব তাকে যুদ্ধে নিহত জনের পাশেই নাম দেয়।"
          },
          {
            "en": "As-Sa'di states the equation directly: his reward has become due upon Allah, whether he died on his bed or was killed while striving in Allah's cause. The man who never reached the fighting, who took ill on the road and died in obscurity, is not left outside the promise. The verse was built precisely to hold him. His unfinished journey is not counted as a failed attempt.",
            "bn": "সাদী হিসাবটা সরাসরি বলে দেন: তার প্রতিদান আল্লাহর ওপর অবধারিত হয়ে গেছে, সে বিছানায় মরুক বা আল্লাহর পথে জিহাদ করতে গিয়ে নিহত হোক। যে মানুষ যুদ্ধ পর্যন্ত পৌঁছাতেই পারল না, পথের মধ্যে অসুস্থ হয়ে অখ্যাত অবস্থায় মারা গেল, সে প্রতিশ্রুতির বাইরে পড়ে থাকে না। আয়াতটি তো ঠিক তাকে ধরে রাখতেই গড়া। তার অসমাপ্ত যাত্রাকে ব্যর্থ যাত্রা বলে পড়া হয় না।"
          },
          {
            "en": "Ma'arif al-Qur'an sums the point for the ordinary reader: those who left hearth and home in the cause of Allah and were killed, or died a natural death, will most certainly be rewarded; and if they did not benefit from it in this world, their reward waits for them in the Hereafter. Nothing about the reward is made to depend on how the life happened to end.",
            "bn": "মাআরিফুল কুরআন সাধারণ পাঠকের জন্য কথাটা গুছিয়ে দেয়: যারা আল্লাহর পথে ঘরবাড়ি ছেড়ে এসেছে আর নিহত হয়েছে, কিংবা স্বাভাবিকভাবে মারা গেছে, তারা নিশ্চিতভাবেই প্রতিদান পাবে। দুনিয়াতে যদি তারা এর ফল না-ও পায়, আখিরাতে তাদের প্রতিদান অপেক্ষা করছে। প্রতিদানের কোনো কিছুই এর ওপর নির্ভর করানো হয়নি যে জীবনটা শেষ পর্যন্ত কীভাবে ফুরাল।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Companions Argued",
          "bn": "সাহাবিরা কেন তর্ক করলেন"
        },
        "p": [
          {
            "en": "At-Tabari reports an occasion for the verse. It came down, he says, about a group of the Companions of the Messenger of Allah ﷺ who differed over the ruling on one who dies in Allah's path: some said the killed among them and the one who died are equal, while others said the killed is the more excellent. So Allah sent this verse down to His Prophet ﷺ, teaching them that the one who dies in His cause and the one killed in it stand equal in the reward with Him.",
            "bn": "তাবারী আয়াতটির একটি শানে-নুযূল বর্ণনা করেন। তিনি বলেন, এটি নাযিল হয়েছিল রাসূলুল্লাহ ﷺ-এর একদল সাহাবির ব্যাপারে, যাঁরা আল্লাহর পথে মৃত্যুবরণকারীর বিধান নিয়ে মতভেদ করেছিলেন। কেউ বললেন, তাদের নিহত জন আর মৃত জন সমান; কেউ বললেন, নিহত জনই বেশি মর্যাদাবান। তখন আল্লাহ তাঁর নবী ﷺ-এর ওপর এ আয়াত নাযিল করেন, তাঁদের শেখাতে যে তাঁর পথে মৃত ও নিহত উভয়ে তাঁর কাছে প্রতিদানে সমান।"
          },
          {
            "en": "Al-Qurtubi names the occasion more closely. When Uthman ibn Maz'un (RA) and Abu Salama ibn Abd al-Asad (RA) died at Medina, some people said that a man killed in Allah's path is better than a man who died a natural death; so this verse came down making the two equal, and declaring that Allah provides all of them a good provision. He notes that the emigrants who died and were killed are singled out here as an honour raised above the rest of the dead.",
            "bn": "কুরতুবী উপলক্ষটি আরও কাছ থেকে নাম ধরে বলেন। মদীনায় যখন উসমান ইবন মাযঊন (রাঃ) আর আবু সালামা ইবন আবদুল আসাদ (রাঃ) মারা যান, তখন কিছু লোক বলল, আল্লাহর পথে নিহত জন স্বাভাবিকভাবে মৃত জনের চেয়ে উত্তম। তখন এ আয়াত নাযিল হয়ে দুজনকে সমান করে দেয়, আর ঘোষণা করে যে আল্লাহ তাদের সবাইকেই উৎকৃষ্ট রিযক দেবেন। তিনি বলেন, হিজরতকারীদের মধ্যে যারা মারা গেছে ও নিহত হয়েছে, তাদের এখানে আলাদা করে বলা হয়েছে বাকি মৃতদের ওপর সম্মান দিতে।"
          },
          {
            "en": "Al-Qurtubi keeps the disagreement open rather than closing it. The apparent sense of the Shariah, he says, shows the killed has a special merit, and he cites the Prophet's ﷺ answer, when asked which struggle is best, that it is the one whose blood is shed and whose horse is hamstrung. Yet others held the two fully equal, arguing from this very verse and from 4:100. The verse settles that both are within the promise; it does not erase every difference of rank between them.",
            "bn": "কুরতুবী মতভেদটি বন্ধ না করে খোলা রাখেন। তিনি বলেন, শরীয়তের বাহ্যিক অর্থ দেখায় যে নিহত জনের একটি বিশেষ মর্যাদা আছে; আর তিনি উদ্ধৃত করেন নবী ﷺ-এর সেই জবাব, কোন জিহাদ সর্বোত্তম জিজ্ঞেস করা হলে তিনি বলেছিলেন, যার রক্ত ঝরানো হয় আর যার ঘোড়া কাটা পড়ে। তবু অন্যরা দুজনকে পুরোপুরি সমান ধরেছেন, এই আয়াত আর ৪:১০০ থেকেই দলিল নিয়ে। আয়াত মীমাংসা করে দেয় যে দুজনই প্রতিশ্রুতির ভেতরে; কিন্তু তাদের মধ্যেকার সব মর্যাদাভেদ মুছে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Good Provision",
          "bn": "উৎকৃষ্ট রিযক"
        },
        "p": [
          {
            "en": "Rizqan ḥasanan: a good provision. At-Tabari reads the good as the generous, the noble, and the good provision itself as the abundant reward. Ibn Kathir gives it as Allah granting them, from His bounty and His provision in Paradise, that which will bring joy to their eyes. The word is not vague comfort; the commentators fill it with a definite thing, the reward of the Garden.",
            "bn": "রিযক়ান হাসানান: এক উৎকৃষ্ট রিযক। তাবারী 'হাসান'-কে পড়েন সম্মানিত, মহৎ অর্থে, আর উৎকৃষ্ট রিযককেই ধরেন প্রচুর প্রতিদান হিসেবে। ইবন কাসীর একে দেন এভাবে, আল্লাহ তাঁর অনুগ্রহ থেকে আর জান্নাতে তাঁর রিযক থেকে তাদের এমন কিছু দেবেন যাতে তাদের চোখ জুড়িয়ে যাবে। শব্দটি কোনো অস্পষ্ট সান্ত্বনা নয়; তাফসীরকারেরা একে ভরে দেন একটি নির্দিষ্ট জিনিস দিয়ে, জান্নাতের প্রতিদান।"
          },
          {
            "en": "As-Sa'di locates the provision in two stages. There is the good provision in the Barzakh, the interval after death, and then on the Day of Resurrection by entering the Paradise that gathers rest and fragrance, goodness and kindness, and the delight of both heart and body. Al-Muyassar names it as the Paradise and its bliss that neither is cut off nor passes away. The promised provision is not thin; it is the fullest thing there is.",
            "bn": "সাদী রিযকটিকে দুই পর্যায়ে রাখেন। আছে বারযাখে, অর্থাৎ মৃত্যুর পরের অন্তর্বর্তী সময়ে উৎকৃষ্ট রিযক, তারপর কিয়ামতের দিনে সেই জান্নাতে প্রবেশ, যেখানে জমা হয় প্রশান্তি আর সুবাস, কল্যাণ আর অনুগ্রহ, এবং অন্তর ও দেহ দুয়েরই আনন্দ। মুয়াসসার একে নাম দেন সেই জান্নাত আর তার নিয়ামত হিসেবে, যা কখনো ফুরায় না, কখনো মুছে যায় না। প্রতিশ্রুত রিযক পাতলা কিছু নয়; যা কিছু আছে তার মধ্যে সবচেয়ে পূর্ণ জিনিসটাই।"
          },
          {
            "en": "Al-Baghawi adds a further reading: it is said that this good provision is what another verse names, they are rather alive with their Lord, being provided for (3:169). If that is the sense, then for the slain the provision has already begun; it is not held back for a distant Day alone. The dead of Allah's road are eating at His table now.",
            "bn": "বাগাভী আরও একটি পাঠ যোগ করেন: বলা হয়েছে, এই উৎকৃষ্ট রিযক সেটাই যাকে আরেক আয়াত নাম দেয়, বরং তারা তাদের রবের কাছে জীবিত, তাদের রিযক দেওয়া হচ্ছে (৩:১৬৯)। অর্থ যদি এটাই হয়, তবে নিহতদের জন্য রিযক এখনই শুরু হয়ে গেছে; তা শুধু দূরের কোনো দিনের জন্য আটকে রাখা নেই। আল্লাহর পথের মৃতরা এখনই তাঁর দস্তরখানে আহার করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "She Died at the Journey's End",
          "bn": "যাত্রার শেষে তাঁর মৃত্যু"
        },
        "p": [
          {
            "en": "For the point that the one who merely dies is included, al-Qurtubi reaches for a sound narration, the hadith of Umm Haram (RA). Bukhari records from Anas (RA) that the Messenger of Allah ﷺ used to visit Umm Haram bint Milhan, wife of Ubada ibn as-Samit (RA). Once he slept in her house and woke smiling. He told her he had been shown people of his community as fighters in Allah's cause riding upon this sea, like kings upon thrones.",
            "bn": "যে জন কেবল মারা যায় সেও যে এর অন্তর্ভুক্ত, এ কথার জন্য কুরতুবী ধরেন একটি সহীহ বর্ণনা, উম্মে হারাম (রাঃ)-এর হাদীস। বুখারী আনাস (রাঃ) থেকে বর্ণনা করেন যে রাসূলুল্লাহ ﷺ উম্মে হারাম বিনতে মিলহান (রাঃ)-এর কাছে যেতেন, যিনি ছিলেন উবাদা ইবন সামিত (রাঃ)-এর স্ত্রী। একদিন তিনি তাঁর ঘরে ঘুমিয়ে হাসতে হাসতে জেগে ওঠেন। তিনি তাঁকে জানান, তাঁকে দেখানো হয়েছে তাঁর উম্মতের কিছু মানুষকে, আল্লাহর পথে যোদ্ধা হিসেবে, এই সমুদ্রে সওয়ার, যেন সিংহাসনে বসা রাজা।"
          },
          {
            "en": "She asked him to pray that Allah make her one of them, and he prayed for her; then he told her, You are among the first ones. Bukhari's narration closes: she sailed the sea in the time of Mu'awiya (RA), and when she came out of the sea and dismounted, she fell from her riding animal and died. She was not killed in battle. She died on the way home, and the Prophet's ﷺ promise had already set her among the fighters. The report is Bukhari's, and it is sound.",
            "bn": "তিনি নবী ﷺ-কে অনুরোধ করলেন দোয়া করতে যেন আল্লাহ তাঁকেও তাদের একজন করেন, আর তিনি তাঁর জন্য দোয়া করলেন; তারপর বললেন, তুমি প্রথম দলের একজন। বুখারীর বর্ণনা শেষ হয় এভাবে, মুয়াবিয়া (রাঃ)-এর সময়ে তিনি সমুদ্রপথে অভিযানে যান, আর সমুদ্র থেকে বেরিয়ে নামার সময় বাহন থেকে পড়ে গিয়ে মারা যান। তিনি যুদ্ধে নিহত হননি। ফেরার পথে মারা গেছেন, আর নবী ﷺ-এর প্রতিশ্রুতি আগেই তাঁকে যোদ্ধাদের কাতারে বসিয়ে দিয়েছিল। বর্ণনাটি বুখারীর, আর তা সহীহ।"
          },
          {
            "en": "This is the verse walking on the ground. The promise did not wait for a sword; it did not require that death come the dramatic way. She set out for Allah's cause and died undramatically, thrown from a mount on solid land, and the word already given to her held. The manner of her death changed nothing about where she stood.",
            "bn": "এ যেন আয়াতটি মাটিতে নেমে হাঁটছে। প্রতিশ্রুতি তরবারির অপেক্ষা করেনি; মৃত্যু নাটকীয় পথে আসতে হবে, এমন শর্তও রাখেনি। তিনি আল্লাহর পথে বেরিয়েছিলেন আর মারা গেলেন অতি সাধারণভাবে, শক্ত মাটিতে বাহন থেকে ছিটকে পড়ে। তাঁকে আগে দেওয়া কথাটাই টিকে রইল। মৃত্যুর ধরন তাঁর অবস্থান নিয়ে কিছুই বদলায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Provider Behind the Promise",
          "bn": "রিযকদাতা যিনি"
        },
        "p": [
          {
            "en": "Wa-inna-llaha lahuwa khayru r-rāziqīn: and indeed Allah, He is the best of providers. At-Tabari reads it as Allah being the best of those who spread His bounty over the people of His obedience and honour them. The closing clause answers a fear buried inside the whole act of emigration, the quiet worry that leaving home and wealth behind means walking into ruin.",
            "bn": "ওয়া ইন্নাল্লা-হা লাহুওয়া খাইরুর রা-যিক়ীন: আর নিশ্চয়ই আল্লাহ, তিনিই সর্বোত্তম রিযকদাতা। তাবারী একে পড়েন এভাবে, আল্লাহই সেই সত্তা যিনি তাঁর আনুগত্যকারীদের ওপর নিজের অনুগ্রহ বিছিয়ে দেন আর তাদের সম্মানিত করেন, আর এতে তিনিই সবার সেরা। শেষ বাক্যটি জবাব দেয় হিজরাতের গোটা কাজের ভেতরে লুকিয়ে থাকা এক ভয়কে, সেই চাপা দুশ্চিন্তাকে যে ঘর আর সম্পদ ফেলে গেলে বুঝি নিঃস্ব হয়ে পড়তে হবে।"
          },
          {
            "en": "As-Sa'di raises a second sense of the good provision alongside the reward of the Garden. The emigrant's provision in this world, he says, is itself guaranteed, wide and good; so let nobody imagine that leaving his home and his property will end him in poverty and need, for his Provider is the best of providers. The fear is named, and then it is answered.",
            "bn": "সাদী জান্নাতের প্রতিদানের পাশাপাশি উৎকৃষ্ট রিযকের আরেকটি অর্থ তুলে ধরেন। তিনি বলেন, হিজরতকারীর দুনিয়ার রিযকও নিশ্চিত করা আছে, প্রশস্ত ও উত্তম; তাই কেউ যেন না ভাবে যে ঘর আর সম্পদ ছেড়ে এসেছে বলে সে গরিব আর মুখাপেক্ষী হয়ে পড়বে, কারণ যিনি তাকে রিযক দেন তিনিই সর্বোত্তম রিযকদাতা। ভয়টাকে নাম ধরে বলা হয়, তারপর তার জবাব দেওয়া হয়।"
          },
          {
            "en": "And it happened exactly so, as-Sa'di adds. The early emigrants left their homes, their children and their wealth to support the religion of Allah, and stayed only a little while before Allah opened the lands to them and gave them the upper hand, until they were among the wealthiest of people. The promise did not stay a distant hope; it proved itself within their own lifetimes.",
            "bn": "আর হয়েছেও ঠিক তাই, সাদী যোগ করেন। প্রথম যুগের হিজরতকারীরা আল্লাহর দ্বীনকে সাহায্য করতে ঘর, সন্তান আর সম্পদ ছেড়ে এসেছিলেন, আর অল্প কিছুকাল পরেই আল্লাহ তাদের জন্য দেশ-জনপদ খুলে দিলেন, তাদের হাতে কর্তৃত্ব দিলেন, যতক্ষণ না তারা মানুষের মধ্যে সবচেয়ে ধনী হয়ে উঠলেন। প্রতিশ্রুতি দূরের কোনো আশা হয়ে থাকল না; তাদের নিজেদের জীবনেই তা প্রমাণিত হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Already Counts",
          "bn": "পথই যেখানে গোনা হয়"
        },
        "p": [
          {
            "en": "The mercy in this verse is that it refuses to make the reward hostage to the manner of the death. A believer cannot choose whether he falls in battle or slips away in his sleep. That much is out of his hands. What he can choose is the road he sets out on, and it is to the setting-out that Allah has bound the promise.",
            "bn": "এ আয়াতের রহমত এখানে যে, এটি প্রতিদানকে মৃত্যুর ধরনের কাছে বন্দি করতে রাজি নয়। বান্দা বেছে নিতে পারে না সে যুদ্ধে শহীদ হবে নাকি ঘুমের মধ্যে চলে যাবে। এটুকু তার হাতের বাইরে। সে যা বেছে নিতে পারে তা হলো যে পথে সে বেরিয়ে পড়ে, আর আল্লাহ তাঁর প্রতিশ্রুতি বেঁধেছেন সেই বেরিয়ে পড়ার সঙ্গেই।"
          },
          {
            "en": "So the weight is lifted off the ending and set on the intention and the leaving. 4:100 said it without hedging: once a man leaves his home as an emigrant to Allah and His Messenger and death overtakes him, his reward is surely incumbent upon Allah. For the believer who serves and then dies quietly, mid-task, his work unfinished, this verse was written. The ending he could not choose does not shrink what he was owed. The road counted.",
            "bn": "তাই ভারটা শেষ থেকে তুলে নিয়ে রাখা হয় নিয়ত আর বেরিয়ে পড়ার ওপর। ৪:১০০ কোনো রাখঢাক ছাড়াই বলে দিয়েছে, একবার কেউ আল্লাহ ও তাঁর রাসূলের দিকে হিজরাতকারী হয়ে ঘর ছাড়লে আর মৃত্যু তাকে পেয়ে বসলে, তার প্রতিদান আল্লাহর জিম্মায় অবধারিত। যে বান্দা খেদমত করে, তারপর কাজের মাঝপথে চুপচাপ মারা যায়, কাজ অসমাপ্ত রেখে, এ আয়াত তারই জন্য লেখা। যে শেষটা সে বেছে নিতে পারেনি, তা তার প্রাপ্য ছোট করে না। পথটাই গোনা হয়েছে।"
          }
        ]
      }
    ]
  },
  "22:65": {
    "sections": [
      {
        "h": {
          "en": "The Look It Asks For",
          "bn": "যে দেখা আয়াত চায়"
        },
        "p": [
          {
            "en": "The verse opens with alam tara, do you not see. at-Tabari reads it as a direct address to the reader, do you not see, O people. But it is not asking after eyesight alone. as-Sa'di glosses the opening as seeing with your eye and your heart the overflowing favour of your Lord and His wide-open hands. The question expects an answer already in hand: of course you see it. Its work is to move the seen thing from the edge of your attention to the centre of it, and then to ask what you will do now that you have looked.",
            "bn": "আয়াত শুরু হয় আলাম তারা দিয়ে, তুমি কি দেখ না। তাবারী একে পাঠকের প্রতি সরাসরি সম্বোধন হিসেবে পড়েন, তোমরা কি দেখ না, হে মানুষ। কিন্তু এখানে শুধু চোখের দেখা চাওয়া হচ্ছে না। সা'দী এই শুরুটার ব্যাখ্যা দেন এভাবে: চোখ আর অন্তর দিয়ে দেখা তোমার রবের উপচে পড়া নিয়ামত আর তাঁর প্রশস্ত দানের হাত। প্রশ্নটার জবাব আগে থেকেই জানা: অবশ্যই তুমি দেখছ। এর কাজ হলো দেখা জিনিসটাকে মনোযোগের কিনার থেকে টেনে মাঝখানে আনা, তারপর জিজ্ঞেস করা, দেখে ফেলার পর এবার তুমি কী করবে।"
          },
          {
            "en": "This is the last of a run of such questions in the surah. A few lines earlier the same words open on rain and the greening earth (22:63). Here they open on things nearer still: the ground beneath the reader, the animals, the ships, the sky overhead. al-Qurtubi says the verse mentions yet another favour, telling that Allah subjected for His servants the things they need. The register is not the proof of a distant Maker so much as a tallying of gifts already resting in the hand, gifts so familiar the eye slides past them.",
            "bn": "সূরার ভেতরে এমন প্রশ্নের একটা ধারা চলছে, এটি তার শেষটি। কয়েক লাইন আগে ঠিক এই কথাগুলোই শুরু হয়েছিল বৃষ্টি আর সবুজ হয়ে ওঠা জমিন নিয়ে (২২:৬৩)। এখানে শুরু হচ্ছে আরও কাছের জিনিস নিয়ে: পাঠকের পায়ের নিচের মাটি, পশু, নৌযান, মাথার উপরের আকাশ। কুরতুবী বলেন, আয়াতটি আরেকটি নিয়ামতের কথা তোলে, জানায় যে আল্লাহ তাঁর বান্দাদের জন্য তাদের প্রয়োজনের জিনিসগুলো বশ করে দিয়েছেন। এখানে সুর কোনো দূরের স্রষ্টার প্রমাণ নয় বরং হাতে থাকা নিয়ামতের হিসাব মেলানো, এমন নিয়ামত যা এত চেনা যে চোখ এড়িয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bent to Your Use",
          "bn": "তোমার কাজে লাগানো"
        },
        "p": [
          {
            "en": "Sakhkhara lakum ma fi l-ard, He subjected to you whatever is on the earth. at-Tabari lists it first as the beasts and cattle, all of it yours to turn to your needs. as-Sa'di widens the catalogue: the animals for riding, carrying, labour, food and every kind of benefit; the trees and their fruit for nourishment; man set over their planting and their yield; and the earth's minerals, which he digs out and puts to use. Ibn Kathir keeps the same sweep briefly, animal and inanimate thing and crop and fruit, and al-Muyassar adds that all of it is made low for your riding, your food and your every use.",
            "bn": "সাখখারা লাকুম মা ফিল আরদ, পৃথিবীতে যা কিছু আছে সব তিনি তোমাদের বশ করে দিয়েছেন। তাবারী প্রথমে গুনে দেন পশু আর গবাদি, সবই তোমাদের, প্রয়োজনে যেমন খুশি খাটাও। সা'দী তালিকাটা আরও বড় করেন: চড়ার, বওয়ার, খাটানোর, খাওয়ার আর নানা কাজের পশু; খাবারের জন্য গাছ আর তার ফল; গাছ লাগানো আর ফলানোর উপর মানুষকে ক্ষমতা দেওয়া হয়েছে; আর মাটির খনিজ, যা সে খুঁড়ে বের করে কাজে লাগায়। ইবন কাসীর একই ব্যাপ্তি সংক্ষেপে ধরেন, পশু, জড় বস্তু, ফসল আর ফল। মুয়াসসার যোগ করেন, সব কিছু নিচু করে দেওয়া হয়েছে তোমাদের চড়া, খাওয়া আর যাবতীয় কাজের জন্য।"
          },
          {
            "en": "But in what sense is a mountain or a bird subjected to a man? Ma'arif al-Qur'an meets the objection: rivers, beasts and birds plainly do not obey a man's orders. Its answer is that to place a thing at someone's service is itself a kind of subjection, and here the word taskhir carries the meaning to serve. The things the verse names are, at every moment, working in man's service by the command of Allah, not by any word man speaks. Ibn Kathir ties the line to 45:13, that He subjected all in the heavens and earth, from Him, out of His grace and favour.",
            "bn": "কিন্তু পাহাড় বা পাখি কোন অর্থে মানুষের বশ? মাআরিফুল কুরআন সোজাসুজি প্রশ্নটার মুখোমুখি হয়: নদী, পশু, পাখি আর এমন হাজারো জিনিস তো স্পষ্টতই মানুষের হুকুম মানে না। এর জবাব হলো, কোনো জিনিসকে কারও সেবায় লাগিয়ে রাখাটাও এক ধরনের বশীকরণ, আর এখানে তাসখীর শব্দটি বহন করছে সেবা করার অর্থ। আয়াত যে জিনিসগুলোর নাম নেয়, সেগুলো প্রতি মুহূর্তে মানুষের সেবায় খেটে চলছে আল্লাহর হুকুমে, মানুষের কোনো কথায় নয়। ইবন কাসীর গোটা কথাটাকে জুড়ে দেন ৪৫:১৩ আয়াতের সঙ্গে, আল্লাহ আকাশ ও পৃথিবীর সব কিছু বশ করে দিয়েছেন, তাঁর পক্ষ থেকে, অর্থাৎ তাঁর অনুগ্রহ আর দয়া থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Keeps the Command",
          "bn": "হুকুম কার হাতে"
        },
        "p": [
          {
            "en": "Ma'arif draws a mercy out of the arrangement itself. It was well within Allah's power to hand man the controls of these things. But had He done so, Ma'arif reasons, man himself would have been the loser, because human natures and wants and needs differ. If one person ordered a river to turn one way and another ordered it the opposite, the result would be sheer chaos. So Allah has kept the command of these things with Himself alone, while the benefit of them flows to human beings. The gift is fully real; the steering wheel is simply not handed over, and that withholding is part of the kindness.",
            "bn": "মাআরিফ এই বন্দোবস্তের ভেতর থেকেই এক রহমত টেনে বের করে। এসব জিনিসের আসল লাগাম মানুষের হাতে তুলে দেওয়া আল্লাহর সাধ্যের মধ্যেই ছিল। কিন্তু তা করলে, মাআরিফ যুক্তি দেয়, মানুষ নিজেই ক্ষতিগ্রস্ত হতো, কারণ মানুষের স্বভাব, চাওয়া আর প্রয়োজন একেকজনের একেক রকম। একজন যদি নদীকে হুকুম দিত এক দিকে ঘুরতে আর অন্যজন উল্টো দিকে, ফল হতো নিছক বিশৃঙ্খলা আর গোলমাল। তাই আল্লাহ এসব জিনিসের হুকুম কেবল নিজের হাতে রেখে দিয়েছেন, আর এগুলোর ফায়দা গড়িয়ে যায় মানুষের দিকে। দানটা পুরোপুরি সত্যি; লাগামটা শুধু তুলে দেওয়া হয়নি, আর সেই না-দেওয়াটাও দয়ার অংশ।"
          },
          {
            "en": "This fits how the mufassirun read the ships. al-Muyassar says He made the sea-going vessels run by His power and His command, to carry you and your goods to whatever lands and places you wish. The service is dependable precisely because He who directs it does not tire, does not forget, and quarrels with no rival will. To be served while another and wiser hand keeps the controls is, on this reading, safer than to hold them yourself. The mercy is not only in the gift but in who was trusted to run it.",
            "bn": "নৌযান নিয়ে তাফসীরকারদের পড়াও এর সঙ্গে মেলে। মুয়াসসার বলেন, তিনি সমুদ্রগামী জাহাজগুলোকে চালান তাঁর কুদরত আর হুকুমে, যাতে তোমাদের আর তোমাদের পণ্য বয়ে নেয় যে দেশ আর জায়গায় তোমরা চাও। সেবাটা ভরসাযোগ্য ঠিক এ কারণেই যে, যিনি তা পরিচালনা করছেন তিনি ক্লান্ত হন না, ভোলেন না, আর কোনো প্রতিদ্বন্দ্বী ইচ্ছার সঙ্গে তাঁর ঝগড়া নেই। সেবা পাওয়া অথচ লাগামটা থাকে আরেকটি বিজ্ঞতর হাতে, এই পড়ায় সেটা নিজে লাগাম ধরার চেয়ে নিরাপদ। রহমত কেবল দানের মধ্যে নয়, কার হাতে তা চালানোর ভার, তার মধ্যেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Ships on a Heaving Sea",
          "bn": "উত্তাল সাগরে নৌযান"
        },
        "p": [
          {
            "en": "Wa-l-fulka tajri fi l-bahri bi-amrih, and the ships that run in the sea by His command. Ibn Kathir paints the picture: in the raging sea with its clashing waves, the ships run with their people on a fair wind, gently and steadily, carrying whatever they wish of trade and goods from land to land and region to region, bringing what is here over to there and what is there over to here, whatever people need and seek and want. as-Sa'di adds that from the sea itself you draw the ornaments you wear. And bi-amrih, at-Tabari says, means by His power and by His making the ships yield to you.",
            "bn": "ওয়াল ফুলকা তাজরী ফিল বাহরি বিআমরিহ, আর নৌযানগুলো সমুদ্রে চলে তাঁর হুকুমে। ইবন কাসীর ছবিটা এঁকে দেন: উত্তাল সাগরে যেখানে ঢেউয়ে ঢেউয়ে ধাক্কা লাগে, সেখানে জাহাজ তার আরোহীদের নিয়ে চলে অনুকূল বাতাসে, নরম আর স্থির গতিতে, বয়ে নেয় তারা যা চায় সেই ব্যবসা আর পণ্য, এক দেশ থেকে আরেক দেশে, এক অঞ্চল থেকে আরেক অঞ্চলে, এখানকার জিনিস ওখানে আর ওখানকার জিনিস এখানে, মানুষের যা দরকার আর যা চায় সব। সা'দী যোগ করেন, সাগর থেকেই তোমরা তোলো যে গয়না তোমরা পরো। আর বিআমরিহ, তাবারী বলেন, মানে তাঁর কুদরতে আর জাহাজকে তোমাদের বশ করে দেওয়ায়।"
          },
          {
            "en": "There is an old reading-difference worth naming here, not because it changes the meaning but because the mufassirun themselves record it. at-Tabari and al-Qurtubi both note that the general reading of the reciters of the great cities is al-fulka in the accusative, tied to whatever is on the earth, so that the ships too stand among the subjected things. al-A'raj was reported to have read al-fulku in the nominative, as the start of a fresh sentence. at-Tabari settles on the accusative, following what he calls the consensus of the reciters, and al-Qurtubi reports the two readings side by side.",
            "bn": "এখানে একটা পুরনো কিরাআতের ভিন্নতা উল্লেখ করার মতো, অর্থ বদলায় বলে নয়, বরং তাফসীরকারেরা নিজেরাই তা লিখে রেখেছেন বলে। তাবারী আর কুরতুবী দুজনেই জানান, বড় বড় শহরের কারীদের সাধারণ পড়া হলো আল-ফুলকা নাসব দিয়ে, যা যুক্ত হয় পৃথিবীতে যা আছে তার সঙ্গে, ফলে নৌযানও বশ করা জিনিসের কাতারে দাঁড়ায়। আ'রাজ থেকে বর্ণিত যে তিনি পড়তেন আল-ফুলকু রফ দিয়ে, নতুন এক বাক্যের শুরু হিসেবে। তাবারী নাসবের পড়াতেই স্থির হন, যাকে তিনি বলেন কারীদের ইজমা, আর কুরতুবী দুটি পড়া পাশাপাশি তুলে ধরেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ceiling Overhead",
          "bn": "মাথার উপরের ছাদ"
        },
        "p": [
          {
            "en": "Wa-yumsiku l-sama'a an taqa'a 'ala l-ard, and He holds the sky back from falling upon the earth. at-Tabari reads an taqa'a as meaning that it not fall, and says Allah holds the sky by His power so that it does not come down. al-Qurtubi records the phrasings the grammarians reached for: out of aversion that it fall, or in the wording of the Kufans, so that it may not fall. He adds a striking gloss on the holding itself: His holding it is His creating stillness within it, state after state, moment upon moment, a thing renewed and not a thing left standing on its own.",
            "bn": "ওয়া ইউমসিকুস সামাআ আন তাকাআ আলাল আরদ, আর তিনি আকাশকে ধরে রাখেন যাতে তা পৃথিবীর উপর ভেঙে না পড়ে। তাবারী আন তাকাআ পড়েন এই অর্থে যে তা যেন না পড়ে, আর বলেন আল্লাহ আকাশকে তাঁর কুদরতে ধরে রাখেন যাতে তা নেমে না আসে। কুরতুবী ব্যাকরণবিদদের বলা ভাষাগুলো তুলে ধরেন: পড়ে যাওয়াটা অপছন্দ করে, অথবা কূফীদের ভাষায়, যাতে তা না পড়ে। তিনি ধরে রাখা নিয়ে একটা তীক্ষ্ণ ব্যাখ্যা যোগ করেন: তাঁর ধরে রাখা মানে তার ভেতরে স্থিরতা সৃষ্টি করা, অবস্থার পর অবস্থা, মুহূর্তের পর মুহূর্তে, নতুন করে দেওয়া এক জিনিস, নিজে নিজে দাঁড়িয়ে থাকা কিছু নয়।"
          },
          {
            "en": "as-Sa'di and Ibn Kathir press the mercy inside the line. Were it not for His mercy and His power, as-Sa'di says, the sky would fall upon the earth and everything on it would perish; and he reaches for 35:41, that Allah holds the heavens and earth lest they cease, and none could hold them after Him. Ibn Kathir says the same: had He willed, He could let the sky fall, and whoever was under it would die, but by His gentleness and mercy and power He holds it. The classical readings stay here; they do not turn the line into a claim about how the heavens are physically built.",
            "bn": "সা'দী আর ইবন কাসীর কথাটার ভেতরের রহমতটা চেপে ধরেন। তাঁর দয়া আর কুদরত না থাকলে, সা'দী বলেন, আকাশ পৃথিবীর উপর পড়ে যেত, তার উপরের সব কিছু ধ্বংস হতো আর তার মধ্যেকার সবাই মারা পড়ত। তিনি টেনে আনেন ৩৫:৪১ আয়াত, আল্লাহ আকাশ আর পৃথিবীকে ধরে রাখেন যাতে তারা সরে না যায়, আর সরে গেলে তাঁর পরে কেউ তাদের ধরে রাখতে পারত না। ইবন কাসীরও একই কথা বলেন: তিনি চাইলে আকাশকে পড়ার অনুমতি দিতে পারতেন, আর তার নিচে যে থাকত সে মরত, কিন্তু তাঁর কোমলতা, দয়া আর কুদরতে তিনি তা ধরে রাখেন। ক্লাসিক তাফসীর এখানেই থামে; কথাটাকে আকাশ কীভাবে গঠিত তার কোনো দাবিতে বদলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Except by His Leave",
          "bn": "কেবল তাঁর অনুমতিতে"
        },
        "p": [
          {
            "en": "Illa bi-idhnih, except by His leave. The qualifier does not soften the holding; it dates it. al-Qurtubi reads it as except by Allah's leave to the sky to fall, so that it will fall by His leave, that is, by His will. In other words, the sky is held now, and it will come down only when He permits it, on the Day He has appointed. The restraint is not a standing law that runs on its own; it is a decision He keeps making, one He can one day unmake. What holds the ceiling up is a permission, and the permission is His.",
            "bn": "ইল্লা বিইযনিহ, কেবল তাঁর অনুমতিতে। শর্তটা ধরে রাখাকে হালকা করে না; বরং তার একটা সময় বেঁধে দেয়। কুরতুবী পড়েন, কেবল আল্লাহর অনুমতিতে আকাশের পড়ে যাওয়া, যাতে তা পড়বে তাঁর অনুমতিতেই, অর্থাৎ তাঁর ইচ্ছায়। সোজা কথায়, আকাশ এখন ধরে রাখা, আর তা নেমে আসবে কেবল তখন যখন তিনি অনুমতি দেবেন, তাঁর ঠিক করা সেই দিনে। এই আটকে রাখা কোনো নিজে চলা বাঁধা আইন নয়; এ এক সিদ্ধান্ত যা তিনি বারবার নিচ্ছেন, আর একদিন তা তুলেও নিতে পারেন। ছাদটাকে যা ধরে রাখে তা এক অনুমতি, আর অনুমতিটা তাঁর।"
          },
          {
            "en": "It is worth marking what the mufassirun do not do with this clause. They do not read it as a description of physical forces, and they do not treat by His leave as a gap waiting for a later theory to fill. They keep it exactly where the verse keeps it: as evidence that the sky's staying up is not automatic but permitted, and that the permission belongs to Allah alone. That is the whole weight the tafsir lays on the word, and for the verse's own argument it is enough, because the point was never mechanics but mercy.",
            "bn": "এই অংশ নিয়ে তাফসীরকারেরা যা করেন না, সেটাও খেয়াল করার মতো। তাঁরা একে কোনো বস্তুগত শক্তির বর্ণনা হিসেবে পড়েন না, আর তাঁর অনুমতিতে কথাটাকে পরের কোনো তত্ত্ব দিয়ে ভরাট করার ফাঁক হিসেবেও দেখেন না। তাঁরা একে ঠিক সেখানেই রাখেন যেখানে আয়াত রাখে: প্রমাণ হিসেবে যে আকাশের টিকে থাকা আপনাআপনি নয় বরং অনুমতিসাপেক্ষ, আর সেই অনুমতি কেবল আল্লাহরই। শব্দটার উপর তাফসীর এইটুকুই ভার দেয়, আর আয়াতের নিজের যুক্তির জন্য এটাই যথেষ্ট, কারণ কথাটা কখনো যন্ত্রকৌশল নিয়ে ছিল না, ছিল দয়া নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kinder Than a Mother",
          "bn": "মায়ের চেয়ে বেশি দয়াবান"
        },
        "p": [
          {
            "en": "The verse seals all of this with inna llaha bi-n-nasi la-ra'ufun rahim, indeed Allah is, to people, Kind and Merciful. at-Tabari joins the ending straight to what came before: out of His ra'fa and His rahma He holds the sky from falling and He subjected for them all that the verse described, as a favour poured out upon them. as-Sa'di goes further still: He is more merciful to them than their own parents are, and than they are to themselves; He wants good for them while they want harm and hurt for their own souls; and of His mercy is that He subjected for them the things He subjected.",
            "bn": "আয়াত এই সবটা সিল করে দেয় ইন্নাল্লাহা বিন্নাসি লারাউফুন রাহীম দিয়ে, নিশ্চয় আল্লাহ মানুষের প্রতি বড়ই স্নেহশীল, বড়ই দয়াবান। তাবারী শেষটাকে সরাসরি আগের কথার সঙ্গে জুড়ে দেন: তাঁর রাফাত আর রহমত থেকেই তিনি আকাশকে পড়া থেকে ধরে রাখেন আর আয়াত যা বর্ণনা করল সবই তাদের জন্য বশ করে দিয়েছেন, তাদের উপর ঢেলে দেওয়া এক অনুগ্রহ হিসেবে। সা'দী আরও এগিয়ে যান: তিনি তাদের প্রতি তাদের নিজের বাবা-মায়ের চেয়েও বেশি দয়ালু, তাদের নিজেদের চেয়েও বেশি; তিনি তাদের জন্য কল্যাণ চান আর তারা নিজেরাই নিজেদের জন্য চায় ক্ষতি আর কষ্ট; আর তাঁর দয়ারই অংশ যে তিনি যা বশ করেছেন তা তাদের জন্য বশ করেছেন।"
          },
          {
            "en": "Ibn Kathir hears something sharper. Kind to people, he says, even with their wrongdoing; he sets beside it 13:6, your Lord forgives people despite it, though He is severe in punishment. On mercy that outreaches a parent's, the plainest sound report is Bukhari's, from Umar (RA): captives were brought before the Prophet, and a woman among them, her breast heavy with milk, would snatch any child she found and nurse it. He asked, Do you think this woman would throw her child into the fire? They said no, not while she could help it. He said, Allah is more merciful to His servants than this woman to her child.",
            "bn": "ইবন কাসীর শব্দটার ভেতরে আরও তীক্ষ্ণ কিছু শোনেন। মানুষের প্রতি স্নেহশীল, তিনি বলেন, তাদের নাফরমানি সত্ত্বেও, আর পাশে রাখেন ১৩:৬ আয়াত, তোমার রব মানুষের প্রতি ক্ষমাশীল তাদের সীমালঙ্ঘন সত্ত্বেও, যদিও তোমার রব শাস্তিদানেও কঠোর। বাবা-মায়ের দয়াকেও ছাড়িয়ে যাওয়া সেই রহমত নিয়ে সবচেয়ে স্পষ্ট সহীহ বর্ণনা বুখারীর সংকলনে, উমার ইবনুল খাত্তাব (রাঃ) থেকে: নবী ﷺ-এর সামনে কিছু বন্দি আনা হলো, তাদের মধ্যে এক মহিলা, বুক দুধে ভরা, বন্দিদের মধ্যে যে শিশুকেই পেত তুলে নিয়ে বুকে চেপে দুধ খাওয়াত। নবী ﷺ জিজ্ঞেস করলেন, তোমরা কি মনে কর এই মহিলা তার সন্তানকে আগুনে ছুঁড়ে ফেলবে? তারা বলল, না, যতক্ষণ না ফেলার সাধ্য তার থাকে। তিনি বললেন, আল্লাহ তাঁর বান্দাদের প্রতি এই মহিলার নিজের সন্তানের প্রতি যে দয়া, তার চেয়েও বেশি দয়ালু।"
          }
        ]
      },
      {
        "h": {
          "en": "From Use to Worship",
          "bn": "ব্যবহার থেকে ইবাদতে"
        },
        "p": [
          {
            "en": "Set the pieces in the order the verse sets them and the argument stands plain. Earth subjected, ships running, a sky held up, and then the reason for all of it: because He is Kind, Merciful. The subjection is not neutral machinery; each item is offered as evidence of a kindness. Ma'arif's point returns here with weight: the command stays with Allah and the benefit comes to you, which means every working thing around you is a gift you never steered into place. as-Sa'di names the whole list, once more, as an instance of His mercy poured out.",
            "bn": "টুকরোগুলো আয়াত যে ক্রমে সাজায় সেই ক্রমে সাজান, যুক্তিটা পরিষ্কার হয়ে দাঁড়ায়। মাটি বশ করা, নৌযান চলছে, আকাশ ধরে রাখা, তারপর এই সবটার কারণ: কারণ তিনি স্নেহশীল, দয়াবান। এই বশীকরণ কোনো নিরপেক্ষ যন্ত্র নয়; প্রতিটি জিনিস তুলে ধরা হয় এক দয়ার প্রমাণ হিসেবে। মাআরিফের কথাটা এখানে ভার নিয়ে ফেরে: হুকুম থাকে আল্লাহর হাতে আর ফায়দা আসে তোমার কাছে, মানে তোমার চারপাশে যা কিছু কাজ করছে তার প্রতিটি এমন এক দান যা তুমি কখনো নিজে বসিয়ে দাওনি। সা'দী গোটা তালিকাটাকে আরেকবার নাম দেন তাঁর ঢেলে দেওয়া দয়ার এক নমুনা বলে।"
          },
          {
            "en": "The next verse turns the screw: He is the One who gave you life, then will cause you to die, then will give you life again, and yet man is deeply ungrateful (22:66). The kindness of this verse is set directly against the ingratitude of the one after it. So the seen thing the opening asked about was never meant to end in the seeing. To notice the earth bent to your use, the ship carried safe across the waves, the sky held up one more day, and then to name the One behind them all and turn to Him, that is what the look was always for.",
            "bn": "পরের আয়াত পেঁচটা আরও শক্ত করে: তিনিই তোমাদের জীবন দিয়েছেন, তারপর মৃত্যু ঘটাবেন, তারপর আবার জীবন দেবেন, তবু মানুষ বড়ই অকৃতজ্ঞ (২২:৬৬)। এই আয়াতের দয়াকে ঠিক পরের আয়াতের অকৃতজ্ঞতার মুখোমুখি রাখা হয়েছে। তাই শুরুর প্রশ্ন যে দেখা জিনিসটার কথা তুলেছিল, তা কখনো শুধু দেখাতেই শেষ হওয়ার কথা ছিল না। মাটি তোমার কাজে লেগে আছে, নৌযান ঢেউ পেরিয়ে নিরাপদে বয়ে নিচ্ছে, আকাশ আরও একটা দিন ধরে রাখা, এসব খেয়াল করা, তারপর এসবের পেছনে যিনি তাঁর নাম নেওয়া আর তাঁর দিকে ফেরা, দেখাটা চিরকাল এর জন্যই ছিল।"
          }
        ]
      }
    ]
  },
  "22:73": {
    "sections": [
      {
        "h": {
          "en": "Stop and Listen",
          "bn": "থামো এবং শোনো"
        },
        "p": [
          {
            "en": "The parable does not slip into the argument; it interrupts it. O people, a parable is struck, so listen to it. The Quran rarely halts to demand attention before an example, and here the demand is an imperative. Its placement explains the urgency: 22:71 has just described people calling on what Allah sent down no authority for and of which they have no knowledge, and 22:72 has described their faces when His verses are recited.",
            "bn": "উপমাটি যুক্তির ভেতরে চুপিসারে ঢোকে না; বরং যুক্তিকে থামিয়ে দেয়। হে মানুষ, একটি দৃষ্টান্ত পেশ করা হচ্ছে, মনোযোগ দিয়ে তা শোনো। কুরআন খুব কমই কোনো উদাহরণের আগে থেমে মনোযোগ দাবি করে, আর এখানে দাবিটি এসেছে আদেশের রূপে। এর অবস্থানই তাড়ার কারণ বুঝিয়ে দেয়: 22:71 এইমাত্র বর্ণনা করেছে সেই মানুষদের, যারা এমন কিছুকে ডাকে যার সমর্থনে আল্লাহ কোনো দলিল নামাননি এবং যে সম্পর্কে তাদের কোনো জ্ঞান নেই; আর 22:72 বর্ণনা করেছে তাঁর আয়াত তিলাওয়াতের সময় তাদের চেহারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Things They Cannot Do",
          "bn": "দুটি কাজ যা তারা পারে না"
        },
        "p": [
          {
            "en": "Count what the verse actually denies them and it is two things. First, those you call on besides Allah will never create a fly, even if they gathered together for it. Second, if the fly should snatch something from them, they could not recover it back from it. The verse does not claim the false gods are inert or imaginary. It measures them against one insect, twice, and they fail on both sides.",
            "bn": "আয়াতটি আসলে তাদের কাছ থেকে কী কী অস্বীকার করছে তা গুনলে পাওয়া যায় দুটি। এক, আল্লাহ ছাড়া তোমরা যাদের ডাকো তারা কখনোই একটি মাছি সৃষ্টি করতে পারবে না, এ জন্য সবাই একত্র হলেও নয়। দুই, মাছি যদি তাদের কাছ থেকে কিছু ছিনিয়ে নেয়, তবে তারা তার কাছ থেকে তা উদ্ধার করতে পারবে না। আয়াতটি এ দাবি করছে না যে মিথ্যা উপাস্যরা নিষ্ক্রিয় বা কাল্পনিক। এটি তাদের একটি পোকার মানদণ্ডে দুবার মেপে দেখায়, আর দুদিকেই তারা ব্যর্থ হয়।"
          },
          {
            "en": "The order is exact. The first inability concerns making, the second concerns keeping, and the second is the more humiliating of the two. Something that cannot create might still be able to defend what it already has; these cannot. Ibn Kathir notes the setting the image assumes: the fly settles on the good and perfumed thing placed before the idol, takes what it wants, and nothing there can take it back.",
            "bn": "ক্রমটি সুনির্দিষ্ট। প্রথম অক্ষমতা সৃষ্টি করা নিয়ে, দ্বিতীয়টি নিজের জিনিস ধরে রাখা নিয়ে; আর দ্বিতীয়টিই বেশি লজ্জাকর। যে সৃষ্টি করতে পারে না, সে অন্তত তার হাতে যা আছে তা রক্ষা করতে পারত; এরা তা-ও পারে না। ইবনে কাসীর চিত্রটির অনুমিত প্রেক্ষাপট উল্লেখ করেন: মূর্তির সামনে রাখা উত্তম ও সুগন্ধিমাখা বস্তুর ওপর মাছি বসে, যা চায় নিয়ে যায়, আর সেখানকার কোনো কিছুই তা ফিরিয়ে আনতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Example Is Small",
          "bn": "উদাহরণটি এত ছোট কেন"
        },
        "p": [
          {
            "en": "The smallness is the argument. 2:26 states the principle openly: Allah is not shy to strike a parable of a mosquito or of what is smaller than it. A god that fails against the largest predator has at least been tested honestly. One that fails against a fly has been measured at the very bottom of the scale, and found wanting there.",
            "bn": "ছোট হওয়াটাই এখানে যুক্তি। 2:26 নীতিটি খোলাখুলি বলে দেয়: আল্লাহ মশা বা তার চেয়েও ক্ষুদ্র কোনো কিছুর দৃষ্টান্ত দিতে লজ্জা করেন না। যে উপাস্য সবচেয়ে বড় হিংস্র প্রাণীর সামনে ব্যর্থ হয়, তাকে অন্তত সৎভাবে পরীক্ষা করা হয়েছে। যে একটি মাছির কাছে হেরে যায়, তাকে মাপা হয়েছে মাপকাঠির একেবারে নিচের প্রান্তে, আর সেখানেও সে অক্ষম প্রমাণিত হয়েছে।"
          },
          {
            "en": "Ibn Kathir cites in this place a report of Abu Hurayrah (RA) recorded in the two Sahihs, in which the Prophet ﷺ conveyed that Allah says: who does more wrong than one who goes to create as I create? Then let them create an ant, or let them create a grain of barley. The challenge is set at exactly the level the verse sets it, and in all the centuries since it has never been taken up.",
            "bn": "ইবনে কাসীর এই স্থানে আবু হুরায়রা (রাঃ)-এর একটি বর্ণনা উল্লেখ করেন, যা দুই সহীহ গ্রন্থে সংকলিত; সেখানে নবী ﷺ জানান যে আল্লাহ বলেন: তার চেয়ে বড় জালিম কে, যে আমার সৃষ্টির মতো সৃষ্টি করতে যায়? তবে তারা একটি পিঁপড়া সৃষ্টি করুক, কিংবা একটি যবের দানা সৃষ্টি করুক। চ্যালেঞ্জটি ঠিক সেই মাপেই রাখা হয়েছে যে মাপে আয়াতটি রেখেছে, আর এত শতাব্দীতেও কেউ তা গ্রহণ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Weak Are Seeker and Sought",
          "bn": "যে খোঁজে আর যাকে খোঁজা হয়, দুজনই দুর্বল"
        },
        "p": [
          {
            "en": "The verse closes on da'ufa at-talibu wal-matlub, weak are the seeker and the sought. The Arabic does not say which is which, and the commentators divide. Ibn Kathir reports Ibn Abbas (RA) reading the seeker as the idol and the sought as the fly, a reading Ibn Jarir at-Tabari preferred and which Ibn Kathir says the context supports. As-Suddi and others read the seeker as the worshipper and the sought as the object of his worship.",
            "bn": "আয়াতটি শেষ হয় 'দ্বাউফাত-তালিবু ওয়াল-মাতলূব' দিয়ে — যে খোঁজে আর যাকে খোঁজা হয়, দুজনই দুর্বল। আরবি বলে দেয় না কে কোনটি, আর মুফাসসিরগণ এখানে দ্বিধাবিভক্ত। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে 'তালিব' হলো মূর্তি আর 'মাতলূব' হলো মাছি; ইবনে জারীর আত-তাবারী এই পাঠটিই পছন্দ করেছেন, আর ইবনে কাসীর বলেন প্রসঙ্গও তা-ই সমর্থন করে। আস-সুদ্দী ও অন্যরা পড়েন, 'তালিব' হলো উপাসক আর 'মাতলূব' তার উপাস্য।"
          },
          {
            "en": "Translators follow one reading or the other, which is why renderings of this clause differ. The two do not compete over the verdict, only over which pair of weaknesses is on display. Either the object of worship is too weak to retrieve a stolen drop, or the worshipper is too weak to have chosen well. The word matlub does not occur anywhere else in the Quran.",
            "bn": "অনুবাদকরা কেউ এক পাঠ, কেউ অন্য পাঠ অনুসরণ করেন; এ কারণেই এই বাক্যাংশের অনুবাদগুলো আলাদা হয়। দুটি পাঠ রায় নিয়ে বিরোধ করে না, কেবল কোন জোড়ার দুর্বলতা দেখানো হচ্ছে তা নিয়েই ভিন্নমত। হয় উপাস্য এতই দুর্বল যে ছিনিয়ে নেওয়া এক বিন্দুও ফেরাতে পারে না, নয়তো উপাসক এতই দুর্বল যে ভালোভাবে বেছে নিতে পারেনি। 'মাতলূব' শব্দটি কুরআনে আর কোথাও আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verdict Next Door",
          "bn": "পাশের আয়াতেই রায়"
        },
        "p": [
          {
            "en": "22:74 says what the parable was for: they have not appraised Allah with the appraisal due to Him; indeed Allah is Powerful, Exalted in Might. Ibn Kathir explains it as their failure to recognise His might and power when they set beside Him what cannot even fend off a fly. The same sentence appears in 6:91 against those who said Allah revealed nothing to any human being, and again in 39:67.",
            "bn": "22:74 বলে দেয় উপমাটি কীসের জন্য ছিল: তারা আল্লাহর যথাযোগ্য মর্যাদা দেয়নি; নিশ্চয়ই আল্লাহ শক্তিমান, মহাপরাক্রমশালী। ইবনে কাসীর এর ব্যাখ্যায় বলেন, তারা তাঁর শক্তি ও ক্ষমতা চিনতে পারেনি, তাই তাঁর পাশে এমন কিছুকে বসিয়েছে যা একটি মাছিকেও ঠেকাতে পারে না। একই বাক্য এসেছে 6:91-এ তাদের বিরুদ্ধে যারা বলেছিল আল্লাহ কোনো মানুষের ওপর কিছুই নাযিল করেননি, আর এসেছে 39:67-এও।"
          },
          {
            "en": "This reframes the whole example. What is being diagnosed is not superstition about statues; it is an estimate of Allah that has been allowed to shrink until something else could plausibly stand next to Him. Correcting it is therefore not mainly a matter of despising the idol. It is a matter of enlarging what one believes about Allah until nothing available is even a candidate for the comparison.",
            "bn": "এতে গোটা উদাহরণটির কাঠামোই বদলে যায়। এখানে রোগ নির্ণয় করা হচ্ছে মূর্তি নিয়ে কুসংস্কারের নয়; বরং আল্লাহ সম্পর্কে এমন এক ধারণার, যা ছোট হতে হতে এমন জায়গায় পৌঁছেছে যে অন্য কিছুকে তাঁর পাশে বসানো সম্ভব মনে হয়েছে। তাই এর সংশোধন মূলত মূর্তিকে তুচ্ছ জ্ঞান করা নয়। বরং আল্লাহ সম্পর্কে নিজের ধারণাকে এতটা বড় করা, যতক্ষণ না তুলনার জন্য কোনো প্রতিদ্বন্দ্বীই আর অবশিষ্ট থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Running the Test",
          "bn": "পরীক্ষাটি চালানো"
        },
        "p": [
          {
            "en": "Applied honestly, the parable is a test of fear as much as of worship. Ask what you would not risk displeasing, what you check before you check the prayer times, whose disapproval quietly reorganises a decision. Then put the verse's question to that thing: could it make a fly, and could it get one back. The answer is known before the question finishes, which is why so small a creature was chosen.",
            "bn": "সততার সঙ্গে প্রয়োগ করলে উপমাটি ইবাদতের যতটা, ভয়েরও ততটাই পরীক্ষা। নিজেকে জিজ্ঞেস করুন: কাকে অসন্তুষ্ট করার ঝুঁকি আপনি নেন না, নামাযের সময়সূচি দেখার আগে আপনি কী দেখেন, কার অসম্মতি নিঃশব্দে আপনার সিদ্ধান্ত বদলে দেয়। এরপর সেই জিনিসটির কাছে আয়াতের প্রশ্নটি রাখুন: এটি কি একটি মাছি বানাতে পারবে, আর একটি মাছির কাছ থেকে কিছু ফেরাতে পারবে? প্রশ্ন শেষ হওয়ার আগেই উত্তর জানা হয়ে যায় — এত ক্ষুদ্র একটি প্রাণী বেছে নেওয়ার কারণ এটিই।"
          },
          {
            "en": "The relief in this is real rather than rhetorical. Powers that frighten people — an employer, a market, a hostile crowd, a reputation — are placed by the verse on the losing side of a contest with an insect. Nothing in it asks a reader to pretend those powers are harmless. It asks him to price them correctly, and to keep the awe he was spending on them for the One actually owed it.",
            "bn": "এতে যে স্বস্তি, তা কেবল কথার কথা নয়, সত্যিকারের। যেসব শক্তি মানুষকে ভয় দেখায় — চাকরিদাতা, বাজার, বৈরী জনতা, সুনাম — আয়াতটি সেগুলোকে বসিয়ে দেয় একটি পোকার সঙ্গে প্রতিযোগিতায় পরাজিত পক্ষে। আয়াতটি পাঠককে এ ভান করতে বলে না যে ওই শক্তিগুলো নিরীহ। এটি বলে সেগুলোর দাম ঠিকভাবে নির্ধারণ করতে, আর সেগুলোর পেছনে যে সম্ভ্রম ব্যয় হচ্ছিল তা জমিয়ে রাখতে তাঁরই জন্য, যিনি প্রকৃতপক্ষে তার হকদার।"
          }
        ]
      }
    ]
  }
});
