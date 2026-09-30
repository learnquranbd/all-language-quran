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
