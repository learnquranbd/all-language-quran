/**
 * Tadabbur long-form articles — surah 111.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "111:2": {
    "sections": [
      {
        "h": {
          "en": "Six Words, One Man",
          "bn": "ছয় শব্দ, একজন মানুষ"
        },
        "p": [
          {
            "en": "Ma aghna 'anhu maluhu wa ma kasab: his wealth did not avail him, nor what he earned. The verse has six Arabic words: ma, aghna, 'anhu, maluhu, wa-ma and kasab. Maluhu is his wealth, and kasab is a past verb, he earned or gained. Aghna 'anhu is the hinge, and al-Qurtubi explains it by what it failed to do: what he gathered of wealth did not push the punishment of Allah away from him. At-Tabari pairs the same two ideas, availing him and warding off the displeasure of Allah.",
            "bn": "মা আগনা আনহু মালুহু ওয়া মা কাসাব: তার ধন-সম্পদ তার কোনো কাজে আসেনি, আর সে যা অর্জন করেছিল তাও না। আয়াতে আরবি শব্দ ছয়টি: মা, আগনা, আনহু, মালুহু, ওয়া-মা আর কাসাব। মালুহু মানে তার সম্পদ, আর কাসাব অতীতকালের ক্রিয়া, সে উপার্জন করেছিল। আসল ভার বহন করে আগনা আনহু। কুরতুবী এর ব্যাখ্যা দেন যা হয়নি তা দিয়ে: সে যে সম্পদ জমিয়েছিল, তা আল্লাহর আযাব তার উপর থেকে সরাতে পারেনি। তাবারীও একই দুটি কথা পাশাপাশি রাখেন: তার কাজে আসা, আর তার উপর থেকে আল্লাহর অসন্তোষ ঠেকানো।"
          },
          {
            "en": "The man is the one named in 111:1, Abu Lahab, whom Ibn Kathir describes as one of the uncles of the Messenger of Allah ﷺ who often caused him harm. The verse sits between 111:1, which calls down ruin on his hands and on him, and 111:3 to 111:5, which turn to what awaits him and his wife. This article stays with the middle verse and names the neighbours only to place it. Its subject is narrow: two things a man of standing would have called his strength, and the flat statement that neither held.",
            "bn": "লোকটি সেই ব্যক্তি, যার নাম এসেছে ১১১:১ আয়াতে: আবু লাহাব। ইবন কাসীর তাকে রাসূলুল্লাহ ﷺ-এর চাচাদের একজন বলে পরিচয় দেন, যে প্রায়ই তাঁকে কষ্ট দিত। আয়াতটির আগে ১১১:১, যেখানে তার দুই হাত আর তার নিজের ধ্বংস কামনা করা হয়েছে। পরে ১১১:৩ থেকে ১১১:৫, যেখানে কথা গেছে তার আর তার স্ত্রীর পরিণতির দিকে। এই লেখা মাঝের আয়াতটিতেই থাকবে। পাশের আয়াতগুলোর নাম আসবে শুধু জায়গাটা চেনাতে। বিষয় তাই সরু: প্রভাবশালী একজন মানুষ যে দুটি জিনিসকে নিজের শক্তি ভাবত, আর সোজা ঘোষণা যে কোনোটাই টেকেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Denial or Question",
          "bn": "অস্বীকার, নাকি প্রশ্ন"
        },
        "p": [
          {
            "en": "The first ma can be read two ways, and al-Qurtubi names both without choosing. It may be a negation: his wealth did not avail him. Or it may be a question: what thing did his wealth avail him? At-Tabari writes his paraphrase in the question form: what thing did his wealth avail him, and what did it ward off of Allah's displeasure towards him? Al-Baghawi gives the negation first, glossing it as ma yughni, it does not avail, and then, under the words it is said, the question: what thing will his wealth avail him?",
            "bn": "প্রথম মা দুইভাবে পড়া যায়, আর কুরতুবী দুটোরই উল্লেখ করেন, কোনোটিকে বেছে নেন না। হতে পারে এটি না-বাচক: তার সম্পদ তার কাজে আসেনি। আবার হতে পারে প্রশ্ন: তার সম্পদ তার কী কাজে এসেছে? তাবারী নিজের ব্যাখ্যা লেখেন প্রশ্নের আকারে: তার সম্পদ তার কী উপকার করেছে, আর তার উপর আল্লাহর যে অসন্তোষ, তার কতটুকু ঠেকিয়েছে? বাগাভী আগে না-বাচক অর্থটি দেন, ব্যাখ্যা করেন মা ইউগনী দিয়ে, অর্থাৎ কাজে আসে না। তারপর 'বলা হয়' কথাটি দিয়ে প্রশ্নের অর্থ আনেন: তার সম্পদ তার কী কাজে আসবে?"
          },
          {
            "en": "The second ma, in wa ma kasab, also carries two readings in al-Qurtubi. It may mean that which, so the verse speaks of the things he earned; or, joined to the verb, it may stand for the act itself, so that the sense is his wealth and his earning did not avail him. Al-Qurtubi also reports that al-A'mash read wa ma iktasab, from a longer form of the same root, and narrated that reading from Ibn Mas'ud; the recited text reads kasab. On every reading he lists, the sentence arrives at the same empty hand.",
            "bn": "ওয়া মা কাসাব-এর দ্বিতীয় মা নিয়েও কুরতুবী দুটি সম্ভাবনার কথা বলেন। এর অর্থ হতে পারে 'যা', তখন আয়াত বলছে সে যেসব জিনিস উপার্জন করেছিল তার কথা। আবার ক্রিয়ার সঙ্গে মিলে এটি কাজটিকেই বোঝাতে পারে, তখন অর্থ দাঁড়ায়: তার সম্পদ আর তার উপার্জন তার কাজে আসেনি। কুরতুবী আরও জানান, আ'মাশ পড়তেন ওয়া মা ইকতাসাব, একই ধাতুর একটু লম্বা রূপে, আর এই পাঠ তিনি বর্ণনা করতেন ইবন মাসউদ (রাঃ) থেকে। তিলাওয়াতের পাঠে আছে কাসাব। কুরতুবীর বলা যে পাঠই ধরা হোক, বাক্য শেষে হাত খালিই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Kasab Takes In",
          "bn": "কাসাব শব্দের পরিধি"
        },
        "p": [
          {
            "en": "What did he earn? The most widely carried answer is his children. Ibn Kathir says that Ibn 'Abbas and others took wa ma kasab to mean his children, and that the like is reported from 'A'isha, Mujahid, 'Ata', al-Hasan and Ibn Sirin. 'Ata' appears there only as a name in that list; no words of his own are given. At-Tabari makes the reading his own, they are his children, adds that this is what the people of interpretation said, and gives Mujahid by several chains: his children are of his earning.",
            "bn": "সে কী উপার্জন করেছিল? সবচেয়ে বেশি যে উত্তর বর্ণিত হয়েছে, তা হলো তার সন্তান। ইবন কাসীর বলেন, ইবন আব্বাস (রাঃ) ও অন্যরা ওয়া মা কাসাব-এর অর্থ নিয়েছেন তার সন্তান। আয়েশা (রাঃ), মুজাহিদ, আতা, হাসান আর ইবন সীরীন থেকেও একই কথা বর্ণিত। আতার নাম সেখানে শুধু তালিকায় আছে, তাঁর নিজের কোনো বাক্য উদ্ধৃত হয়নি। তাবারী এই অর্থকেই নিজের মত হিসেবে নেন: তারা তার সন্তান। তিনি যোগ করেন, তাফসীরকারেরা এ কথাই বলেছেন। তারপর কয়েকটি সনদে মুজাহিদের উক্তি আনেন: তার সন্তানেরা তার উপার্জনেরই অংশ।"
          },
          {
            "en": "Not every commentator leads with children. Al-Qurtubi opens with a different pair: what he gathered of wealth, and what he earned of standing, the word jah, rank among people; only then does he bring Mujahid's view of children. Ma'arif al-Qur'an gives two meanings: the profits that came to him from investing his wealth in trade, or his children. Al-Baghawi brings children with the words it is said. The Muyassar folds the gloss into its paraphrase, his wealth and his children. As-Sa'di leaves it as what he earned, unspecified.",
            "bn": "সব তাফসীরকার সন্তান দিয়ে শুরু করেন না। কুরতুবী শুরু করেন অন্য এক জোড়া দিয়ে: সে যে সম্পদ জমিয়েছিল, আর যে প্রভাব অর্জন করেছিল। এখানে শব্দটি জাহ, মানুষের মাঝে মর্যাদা। এর পরেই তিনি সন্তান-বিষয়ক মুজাহিদের মত আনেন। মাআরিফুল কুরআন দুটি অর্থ দেয়: ব্যবসায় সম্পদ খাটিয়ে সে যে মুনাফা পেয়েছিল, অথবা তার সন্তান। বাগাভী সন্তানের অর্থটি আনেন 'বলা হয়' কথাটি দিয়ে। মুয়াসসার ব্যাখ্যাটি অনুবাদের ভেতরেই মিশিয়ে দেয়: তার সম্পদ আর তার সন্তান। সা'দী কথাটি রেখে দেন যেমন আছে: সে যা উপার্জন করেছিল, আলাদা করে কিছু চিহ্নিত না করে।"
          },
          {
            "en": "At-Tabari also carries two reports in which Ibn 'Abbas stepped between Abu Lahab's sons as they quarrelled. In one, through an unnamed man of Banu Makhzum, he says: these are of what he earned. The other, through Abu al-Tufayl, notes that his sight had gone by then, and al-Qurtubi carries it too. The commentators bring these scenes for one purpose, to show how the word kasab was understood by the generation that heard it. They are evidence about a word's meaning among men of that time, and they say nothing about anyone born since.",
            "bn": "তাবারী আরও দুটি বর্ণনা আনেন, যেখানে ইবন আব্বাস (রাঃ) আবু লাহাবের ছেলেদের ঝগড়ার মাঝে গিয়ে দাঁড়িয়েছিলেন। একটি বর্ণনায়, যা এসেছে বনু মাখযূমের এক নাম-না-জানা লোকের মাধ্যমে, তিনি বলেন: এরা তার উপার্জনের অংশ। অন্যটি এসেছে আবুত তুফাইলের সূত্রে। তাতে বলা আছে, ততদিনে তাঁর দৃষ্টিশক্তি চলে গিয়েছিল। কুরতুবীও এ বর্ণনাটি আনেন। এসব দৃশ্য তাফসীরকারেরা আনেন একটিমাত্র উদ্দেশ্যে: যে প্রজন্ম আয়াতটি শুনেছিল, তারা কাসাব শব্দটি কীভাবে বুঝত, তা দেখাতে। এগুলো সে যুগের মানুষের মধ্যে একটি শব্দের অর্থের সাক্ষ্য। পরে জন্ম নেওয়া কারও ব্যাপারে এগুলো কিছুই বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Child Counted as Earning",
          "bn": "সন্তানও যখন উপার্জন"
        },
        "p": [
          {
            "en": "Why would earning mean children? Al-Qurtubi and al-Baghawi answer with a saying of the Prophet ﷺ from 'A'isha, and al-Qurtubi says Abu Dawud recorded it. Sunan Abu Dawud 3528, in the English of the page we fetched, reads in full: Narrated Aisha, Ummul Mu'minin: The aunt of Umarah ibn Umayr asked Aisha: I have an orphan in my guardianship. May I enjoy from his property? She said: The Messenger of Allah (ﷺ) said: The pleasantest things a man enjoys come from what he earns, and his child comes from what he earns.",
            "bn": "উপার্জন মানে সন্তান হবে কেন? কুরতুবী আর বাগাভী এর জবাবে আয়েশা (রাঃ) থেকে নবী ﷺ-এর একটি বাণী আনেন। কুরতুবী বলেন, আবু দাউদ এটি বর্ণনা করেছেন। আমরা যে পাতা খুলে দেখেছি, সেখানে সুনানে আবু দাউদ ৩৫২৮-এর পুরো ইংরেজি পাঠের বাংলা দাঁড়ায় এমন: উম্মুল মু'মিনীন আয়েশা (রাঃ) থেকে বর্ণিত। উমারা ইবন উমাইরের ফুফু আয়েশাকে জিজ্ঞেস করলেন: আমার তত্ত্বাবধানে এক এতিম আছে। আমি কি তার সম্পদ থেকে ভোগ করতে পারি? তিনি বললেন: রাসূলুল্লাহ ﷺ বলেছেন: মানুষ যা ভোগ করে, তার মধ্যে সবচেয়ে উত্তম হলো তার নিজের উপার্জন, আর তার সন্তানও তার উপার্জন থেকে।"
          },
          {
            "en": "Three things need saying about it. It is a general narration about a parent's share in a child's means, not attached to this verse; the commentators cite it only to show that the language counts a child as a man's earning. The page shows no grading from Abu Dawud, and none is added here. And its wording differs slightly from the form al-Qurtubi and al-Baghawi quote, so the page's English is given as it stands. Ma'arif al-Qur'an quotes the same saying through al-Qurtubi and draws the same linguistic point from it.",
            "bn": "এ নিয়ে তিনটি কথা বলা দরকার। এটি একটি সাধারণ বর্ণনা, সন্তানের সম্পদে মা-বাবার অংশ নিয়ে, এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়। তাফসীরকারেরা এটি আনেন শুধু এটুকু দেখাতে যে আরবি ভাষায় সন্তানকে মানুষের উপার্জন বলা হয়। পাতায় আবু দাউদের দেওয়া কোনো মান উল্লেখ নেই, এখানেও কিছু যোগ করা হয়নি। আর কুরতুবী ও বাগাভী যে রূপে বাণীটি উদ্ধৃত করেন, তার সঙ্গে এর শব্দে সামান্য পার্থক্য আছে। তাই পাতার ইংরেজি যেমন আছে তেমনই দেওয়া হলো। মাআরিফুল কুরআনও কুরতুবীর সূত্রে একই বাণী এনে একই ভাষাগত কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ransomed With Wealth and Sons",
          "bn": "সম্পদ ও সন্তান দিয়ে মুক্তিপণ"
        },
        "p": [
          {
            "en": "Several commentators attach a report to this verse. In the English abridgement of Ibn Kathir it reads: It has been mentioned from Ibn Mas'ud that when the Messenger of Allah ﷺ called his people to faith, Abu Lahab said, \"Even if what my nephew says is true, I will ransom myself (i.e., save myself) from the painful torment on the Day of Judgement with my wealth and my children.\" Thus, Allah revealed this verse. The Arabic text of Ibn Kathir opens the report with dhukira, it has been mentioned, and gives no chain for it.",
            "bn": "কয়েকজন তাফসীরকার এ আয়াতের সঙ্গে একটি বর্ণনা জুড়ে দেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আছে: ইবন মাসউদ (রাঃ) থেকে উল্লেখ করা হয়েছে, রাসূলুল্লাহ ﷺ যখন নিজের লোকদের ঈমানের দিকে ডাকলেন, আবু লাহাব বলল: আমার ভাতিজা যা বলছে তা সত্য হলেও কিয়ামতের দিন আমি আমার সম্পদ আর সন্তান দিয়ে নিজেকে যন্ত্রণাদায়ক আযাব থেকে ছাড়িয়ে নেব। তখন আল্লাহ এ আয়াত নাযিল করলেন। ইবন কাসীরের আরবি পাঠে বর্ণনাটি শুরু হয় যুকিরা দিয়ে, অর্থাৎ উল্লেখ করা হয়েছে। এর কোনো সনদ তিনি দেন না।"
          },
          {
            "en": "The others carry the same scene with small differences. Al-Baghawi gives it on the authority of Ibn Mas'ud, set when the Prophet ﷺ called his near relatives to Allah, and in his wording Abu Lahab offers himself, his wealth and his children as ransom. Al-Qurtubi gives it on the authority of Ibn 'Abbas, set when the Prophet ﷺ warned his clan of the Fire. Ma'arif al-Qur'an also gives it from Ibn 'Abbas. None of the four, Ibn Kathir included, supplies a chain or a grading, so it is offered here as a report they carry.",
            "bn": "অন্যরাও একই দৃশ্য আনেন, সামান্য পার্থক্যসহ। বাগাভী এটি আনেন ইবন মাসউদ (রাঃ)-এর বরাতে। তাঁর বর্ণনায় নবী ﷺ নিজের নিকটাত্মীয়দের আল্লাহর দিকে ডাকছিলেন, আর আবু লাহাব নিজেকে, নিজের সম্পদ আর সন্তানকে মুক্তিপণ হিসেবে দেওয়ার কথা বলে। কুরতুবী আনেন ইবন আব্বাস (রাঃ)-এর বরাতে, যখন নবী ﷺ নিজের গোত্রকে জাহান্নামের ব্যাপারে সতর্ক করছিলেন। মাআরিফুল কুরআনও এটি আনে ইবন আব্বাস (রাঃ) থেকে। ইবন কাসীরসহ এই চারটি উৎসের কোনোটিই সনদ বা মান উল্লেখ করেনি। তাই বর্ণনাটি এখানে রাখা হলো তাঁদের বহন করা বর্ণনা হিসেবেই।"
          },
          {
            "en": "The scene on as-Safa, which the commentators place behind the whole surah, is a different matter: al-Bukhari records it from Ibn 'Abbas, and it is told in this series under 26:214. In the Arabic of Sahih al-Bukhari 4770, the revelation it reports runs from 111:1 into this very verse. That narration is too long to quote whole here, and it is not clipped. The ransom report, by contrast, speaks to this verse's two nouns directly: it names wealth and children as the very things he meant to buy his safety with.",
            "bn": "সাফা পাহাড়ের দৃশ্য, যাকে তাফসীরকারেরা পুরো সূরার পটভূমি ধরেন, ভিন্ন ব্যাপার। বুখারী তা ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন, আর এই ধারায় তা বলা হয়েছে ২৬:২১৪ আয়াতের আলোচনায়। সহীহ বুখারী ৪৭৭০-এর আরবি পাঠে বর্ণিত নাযিলের অংশ ১১১:১ থেকে শুরু হয়ে ঠিক এই আয়াত পর্যন্ত যায়। বর্ণনাটি এত দীর্ঘ যে এখানে পুরোটা উদ্ধৃত করা যায় না, আর কেটে ছোট করাও হয়নি। মুক্তিপণের বর্ণনাটি বরং এ আয়াতের দুই শব্দের সঙ্গে সরাসরি কথা বলে: সম্পদ আর সন্তান, ঠিক যা দিয়ে সে নিজের নিরাপত্তা কিনতে চেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Then, Now or Hereafter",
          "bn": "তখন, এখন, না পরকালে"
        },
        "p": [
          {
            "en": "Aghna is a past verb, and the commentators do not agree on where the failure it reports takes place. Ma'arif al-Qur'an reads it of this world: when the Divine torment seized him here, neither his wealth nor his children benefited him. The Muyassar turns it to the future: they will not ward off anything of Allah's punishment from him when it comes down on him. As-Sa'di keeps the past: it did not ward off anything of Allah's punishment when that came down on him, and he says the wealth had made him overstep.",
            "bn": "আগনা অতীতকালের ক্রিয়া। কিন্তু এই ব্যর্থতা কোথায় ঘটে, তা নিয়ে তাফসীরকারেরা একমত নন। মাআরিফুল কুরআন একে দুনিয়ার কথা হিসেবে পড়ে: এখানে যখন আল্লাহর আযাব তাকে ধরল, তখন তার সম্পদ বা সন্তান কোনোটাই তার উপকারে আসেনি। মুয়াসসার একে ভবিষ্যতের দিকে ঘুরিয়ে দেয়: আল্লাহর আযাব যখন তার উপর নামবে, এ দুটি তার উপর থেকে কিছুই ঠেকাতে পারবে না। সা'দী অতীতকালই রাখেন: আযাব যখন নামল, তখন সম্পদ তার উপর থেকে কিছুই ঠেকায়নি। তিনি এও বলেন, এই সম্পদই তাকে সীমালঙ্ঘনে ঠেলে দিয়েছিল।"
          },
          {
            "en": "Al-Baghawi glosses the past verb with a present-tense form, ma yughni, it does not avail. Ibn Kathir's report sets Abu Lahab's own boast on the Day of Judgement, and al-Qurtubi speaks of the punishment of Allah without naming a time. The difference is real, and this article keeps it without choosing a side. Whichever time is in view, the claim each of them makes is the same: what he relied on did not stand between him and the punishment of Allah, whenever that punishment reached him.",
            "bn": "বাগাভী অতীতের ক্রিয়াটিকে বর্তমানকাল দিয়ে ব্যাখ্যা করেন: মা ইউগনী, অর্থাৎ কাজে আসে না। ইবন কাসীরের বর্ণনায় আবু লাহাবের নিজের দম্ভটা ছিল কিয়ামতের দিন নিয়ে। আর কুরতুবী সময়ের নাম না নিয়েই আল্লাহর আযাবের কথা বলেন। মতপার্থক্যটা সত্যিকারের, আর এই লেখা কোনো পক্ষ না নিয়ে সেটি রেখে দিচ্ছে। যে সময়ই ধরা হোক, প্রত্যেকের কথার সারাংশ এক: সে যার উপর ভরসা করেছিল, তা তার আর আল্লাহর আযাবের মাঝে আড়াল হয়ে দাঁড়াতে পারেনি, সেই আযাব যখনই তার কাছে পৌঁছাক।"
          }
        ]
      },
      {
        "h": {
          "en": "That Man and No Other",
          "bn": "শুধু সেই লোকটি"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse concerns one man, Abu Lahab, who lived and died in the Prophet's own time, and it describes what the text describes. It licenses nothing against any living person or community. It gives no ground for any statement about his descendants, his relatives, or any family or clan today, the Prophet's own clan included. The reports above about his sons are carried by the commentators as evidence for the meaning of one word; they are not a judgement on anyone born since, and this article passes none.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একজন মানুষকে নিয়ে, আবু লাহাব, যে নবী ﷺ-এর নিজের যুগেই বেঁচে ছিল ও মারা গিয়েছিল। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। তার বংশধর, আত্মীয়স্বজন, কিংবা আজকের কোনো পরিবার বা গোত্র, নবী ﷺ-এর নিজের গোত্রসহ, কারও ব্যাপারে কোনো মন্তব্যের ভিত্তি এ আয়াত দেয় না। তার ছেলেদের নিয়ে উপরের বর্ণনাগুলো তাফসীরকারেরা এনেছেন একটি শব্দের অর্থের প্রমাণ হিসেবে। পরে জন্ম নেওয়া কারও উপর সেগুলো কোনো রায় নয়, আর এই লেখাও কোনো রায় দেয় না।"
          },
          {
            "en": "What the sources say of him is theirs, and it is reported as theirs. Ibn Kathir describes a man who hated and scorned the Prophet ﷺ and his religion and often caused him harm; Ma'arif al-Qur'an calls him an inveterate enemy and persecutor. The article adds nothing to that, and it does not tell his story from memory. 111:3 to 111:5, which speak of his end and of his wife, belong to their own pages. Here the subject is narrower: two possessions, and what they could not do.",
            "bn": "উৎসগুলো তার ব্যাপারে যা বলে, তা তাদেরই কথা, আর তাদের কথা হিসেবেই এখানে আনা হয়েছে। ইবন কাসীর এমন এক লোকের বর্ণনা দেন, যে নবী ﷺ আর তাঁর দ্বীনকে ঘৃণা ও অবজ্ঞা করত এবং প্রায়ই তাঁকে কষ্ট দিত। মাআরিফুল কুরআন তাকে বলে চরম শত্রু ও নির্যাতনকারী। এই লেখা এর সঙ্গে কিছু যোগ করে না, স্মৃতি থেকে তার কাহিনিও বলে না। ১১১:৩ থেকে ১১১:৫ তার পরিণতি আর তার স্ত্রীর কথা বলে, সেগুলোর আলোচনা সেগুলোর নিজের জায়গায়। এখানে বিষয় আরও সরু: দুটি সম্পদ, আর যা তারা করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaning on the Wrong Wall",
          "bn": "ভুল দেয়ালে হেলান"
        },
        "p": [
          {
            "en": "Set the glosses side by side and a picture forms: wealth, children, profit, standing. These are the things a person of any age reaches for when asked what makes them safe. Ma'arif al-Qur'an says Allah had granted Abu Lahab abundant wealth and many children, and that these led him to be ungrateful, proud and arrogant. As-Sa'di says his wealth made him overstep. The verse does not mock the possessions. It tells what they could not do for a man who had leaned his whole weight on them.",
            "bn": "ব্যাখ্যাগুলো পাশাপাশি রাখলে একটা ছবি ফুটে ওঠে: সম্পদ, সন্তান, মুনাফা, মর্যাদা। যেকোনো যুগের মানুষকে যদি জিজ্ঞেস করা হয় কিসে সে নিরাপদ, সে এগুলোর দিকেই হাত বাড়ায়। মাআরিফুল কুরআন বলে, আল্লাহ আবু লাহাবকে প্রচুর সম্পদ আর অনেক সন্তান দিয়েছিলেন, আর এ দুটিই তাকে অকৃতজ্ঞ, দাম্ভিক ও অহংকারী করে তোলে। সা'দী বলেন, তার সম্পদ তাকে সীমালঙ্ঘনে ঠেলে দিয়েছিল। আয়াত এসব জিনিসকে বিদ্রূপ করে না। বলে দেয়, যে মানুষ এগুলোর উপর নিজের পুরো ভার ছেড়ে দিয়েছিল, তার জন্য এগুলো কী করতে পারেনি।"
          },
          {
            "en": "Nothing here makes wealth or children a fault. The very narration the commentators bring counts a child among a man's earnings and sets it beside the best of what he enjoys. The failure the verse names is reliance: treating money and family as a wall that will hold when Allah's judgement comes. The ransom report gives that reliance a voice, the voice of a man sure that whatever the warning, he could pay his way out of it. The verse is the answer to that sentence.",
            "bn": "এখানে সম্পদ বা সন্তানকে দোষের কিছু বলা হয়নি। তাফসীরকারেরা যে বর্ণনাটি আনেন, সেটিই সন্তানকে মানুষের উপার্জনের মধ্যে গণ্য করে, আর তার ভোগ করা সবচেয়ে উত্তম জিনিসের পাশে রাখে। আয়াত যে ব্যর্থতার কথা বলে, তা হলো ভরসা রাখার ভুল। টাকা আর পরিবারকে এমন দেয়াল ভাবা, যা আল্লাহর ফয়সালা এলেও টিকে থাকবে। মুক্তিপণের বর্ণনা এই ভরসাকে মুখের ভাষা দেয়। সেই লোকের ভাষা, যে নিশ্চিত ছিল, সতর্কবাণী যা-ই হোক, টাকা দিয়ে সে বেরিয়ে আসতে পারবে। আয়াতটি সেই বাক্যেরই জবাব।"
          },
          {
            "en": "So the verse turns back on its reader. I will not be asked to ransom myself with money, but I may still be counting on it, or on my children, my name or the people who owe me favours, to stand in for what only faith and deeds can carry. The article on 26:214 in this series, where the Prophet ﷺ begins his warning with his own kin, makes the same point from the other side: nearness by blood is no shield. The question this verse leaves is not about a man long gone. It is about what I am building on, and whether it will hold.",
            "bn": "তাই আয়াতটি পাঠকের দিকেই ফিরে আসে। টাকা দিয়ে নিজেকে ছাড়িয়ে নেওয়ার প্রস্তাব আমাকে হয়তো কখনো দিতে হবে না। তবু হয়তো আমি মনে মনে টাকার উপর, সন্তানের উপর, নিজের নামের উপর, কিংবা যারা আমার কাছে ঋণী তাদের উপর ভরসা করে বসে আছি, যেন এগুলো সেই ভার বইবে, যা কেবল ঈমান আর আমল বইতে পারে। এই ধারায় ২৬:২১৪ আয়াতের আলোচনা, যেখানে নবী ﷺ নিজের আত্মীয়দের দিয়েই সতর্ক করা শুরু করেন, একই কথা বলে উল্টো দিক থেকে: রক্তের সম্পর্ক কোনো ঢাল নয়। এ আয়াতের রেখে যাওয়া প্রশ্ন বহু আগে চলে যাওয়া কোনো লোককে নিয়ে নয়। প্রশ্নটা হলো, আমি কিসের উপর ঘর তুলছি, আর তা টিকবে কি না।"
          }
        ]
      }
    ]
  }
});
