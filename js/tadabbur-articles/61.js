/**
 * Tadabbur long-form articles — surah 61.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "61:2": {
    "sections": [
      {
        "h": {
          "en": "A Question That Cuts",
          "bn": "যে প্রশ্ন বিঁধে যায়"
        },
        "p": [
          {
            "en": "Ya ayyuha-lladhina amanu, lima taquluna ma la taf'alun: O you who have believed, why do you say what you do not do? Surah as-Saff opens with everything in the heavens and the earth glorifying Allah, then turns straight to the believers with a question. At-Tabari glosses the address as you who have believed Allah and His Messenger, and the question as: why do you say a word that you do not confirm by action, so that your deeds run against your words?",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ, লিমা তাকূলূনা মা লা তাফআলূন: হে মুমিনগণ, তোমরা যা কর না তা কেন বল? সূরা আস-সাফ শুরু হয় এই ঘোষণা দিয়ে যে আসমান ও যমীনে যা কিছু আছে সবই আল্লাহর মহিমা ঘোষণা করে। তারপরই সূরাটি সোজা মুমিনদের দিকে ফিরে একটি প্রশ্ন রাখে। তাবারী সম্বোধনের ব্যাখ্যা দেন: যারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনেছ। আর প্রশ্নটা তাঁর ভাষায় এমন: যে কথা তোমরা কাজ দিয়ে সত্য করে দেখাও না, তা কেন বল? এতে তো তোমাদের আমল তোমাদের কথার উল্টো পথে চলে।"
          },
          {
            "en": "Al-Qurtubi names the form of the question: it is asked by way of denial and rebuke, against a person who says of himself some good that he does not do. He then divides the fault by time. If the claim is about the past, it is a lie; if it is about the future, it is a broken promise; and both, he says, are blameworthy. The Muyassar reads the verse in the same two directions, why do you make a promise or say something and then not carry it out, and calls it a rebuke of anyone whose deed contradicts his word.",
            "bn": "কুরতুবী প্রশ্নটির ধরন চিনিয়ে দেন। এ প্রশ্ন অস্বীকার ও তিরস্কারের, তার বিরুদ্ধে যে নিজের সম্পর্কে এমন ভালো কাজের কথা বলে যা সে করে না। তারপর তিনি দোষটিকে সময় দিয়ে দুই ভাগ করেন। দাবিটা অতীতের হলে সেটা মিথ্যা, আর ভবিষ্যতের হলে সেটা ওয়াদা ভঙ্গ। তাঁর মতে দুটোই নিন্দনীয়। মুয়াসসারও আয়াতটি এই দুই দিক থেকেই পড়ে: তোমরা কেন ওয়াদা কর, কিংবা কোনো কথা বল, অথচ তা পূরণ কর না? মুয়াসসারের ভাষায় এটি তার প্রতি ভর্ৎসনা, যার কাজ তার কথার বিপরীত।"
          }
        ]
      },
      {
        "h": {
          "en": "Great in Hatefulness",
          "bn": "আল্লাহর কাছে চরম অপছন্দের"
        },
        "p": [
          {
            "en": "The next verse gives the weight: kabura maqtan 'inda-llahi an taqulu ma la taf'alun, greatly hateful in the sight of Allah is it that you say what you do not do. At-Tabari restates it plainly: your saying what you do not do has become great in hatefulness with your Lord. Ma'arif al-Qur'an renders it severely hateful in Allah's sight. The clause ma la taf'alun is repeated word for word, so that 61:3 hands the question of 61:2 back to the listener as a verdict.",
            "bn": "পরের আয়াত কথাটির ভার জানিয়ে দেয়: কাবুরা মাকতান ইনদাল্লাহি আন তাকূলূ মা লা তাফআলূন, তোমরা যা কর না তা বলা আল্লাহর দৃষ্টিতে বড়ই ঘৃণার। তাবারী কথাটা সহজ করে আবার বলেন: তোমরা যা কর না তা বলা তোমাদের রবের কাছে ঘৃণার দিক থেকে বিরাট হয়ে গেছে। মাআরিফুল কুরআন এর অর্থ করে, আল্লাহর দৃষ্টিতে কঠিন ঘৃণার কাজ। মা লা তাফআলূন অংশটি হুবহু ফিরে এসেছে। ফলে ৬১:২ আয়াতে যা ছিল প্রশ্ন, ৬১:৩ আয়াতে তা-ই শ্রোতার সামনে ফিরে আসে রায় হয়ে।"
          },
          {
            "en": "Ma'arif al-Qur'an draws a ruling from the words what you do not do. To claim that one will do something while having no real intention of doing it is, it says, a major sin and a cause of Allah's wrath, and 61:3 applies to exactly that case. Where the intention is genuine but the claim leans wholly on one's own strength, it calls the claim reprehensible, since it does not suit the station of servanthood. Its counsel is plain: there is no need to announce the deed; if the occasion comes, do it, and if a promise must be made, say If Allah wills.",
            "bn": "মা লা তাফআলূন, যা তোমরা কর না, এই কথা থেকে মাআরিফুল কুরআন একটি বিধান বের করে। করার কোনো সত্যিকার নিয়ত ছাড়াই কোনো কাজ করব বলে দাবি করা তার মতে কবীরা গুনাহ এবং আল্লাহর ক্রোধ ডেকে আনার কারণ। ৬১:৩ আয়াত ঠিক এই অবস্থার কথাই বলে। আর নিয়ত খাঁটি, কিন্তু দাবির পুরো ভরসা নিজের শক্তির উপর, সে ক্ষেত্রে দাবিটিকে সে মাকরূহ বলে, কারণ এটা বান্দার মর্যাদার সঙ্গে মানায় না। তার পরামর্শ সোজা। কাজের ঘোষণা দেওয়ার দরকারই নেই, সুযোগ এলে করে ফেলুন। আর ওয়াদা যদি করতেই হয়, তবে ইনশাআল্লাহ বলুন।"
          }
        ]
      },
      {
        "h": {
          "en": "If We Knew the Dearest Deed",
          "bn": "প্রিয়তম আমলটি জানতে পারলে"
        },
        "p": [
          {
            "en": "At-Tabari says plainly that the people of interpretation differed over why this verse came down. The first view, in his words, is that it was sent as a reproach from Allah to some believers who wished to know the best of deeds; Allah told them, and once they knew it they fell short. He gives it from Ibn 'Abbas (RA): before fighting was prescribed, people said they wished Allah would show them the deed He loves most. When it was prescribed, some disliked it and found it hard, and the verse came down.",
            "bn": "তাবারী খোলাখুলি বলেন, এ আয়াত কেন নাযিল হলো তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। তাঁর ভাষায় প্রথম মত হলো, কিছু মুমিন জানতে চেয়েছিলেন সবচেয়ে উত্তম আমল কোনটি। আল্লাহ তাদের জানিয়ে দিলেন, আর জানার পর তারা পিছিয়ে পড়লেন। তখন আল্লাহর পক্ষ থেকে ভর্ৎসনা হিসেবে আয়াতটি আসে। এ মত তিনি আনেন ইবন আব্বাস (রাঃ) থেকে। জিহাদ ফরয হওয়ার আগে লোকেরা বলতেন, আল্লাহ যদি আমাদের জানিয়ে দিতেন তাঁর কাছে সবচেয়ে প্রিয় আমল কোনটি! জিহাদ ফরয হলে কিছু লোকের কাছে তা অপছন্দ ও কঠিন ঠেকল, আর তখন আয়াতটি নাযিল হলো।"
          },
          {
            "en": "A second chain from Ibn 'Abbas (RA), also in at-Tabari, carries no hesitation at all: people said that if they knew the deed Allah loves most they would do it, and He revealed these verses up to bunyanun marsus, showing them that deed. From Mujahid, at-Tabari names the speakers as a group of the Ansar that included 'Abdullah ibn Rawaha (RA). When the verse came, Ibn Rawaha said: I will stay bound to Allah's path until I die. He was killed a martyr.",
            "bn": "তাবারীতেই ইবন আব্বাস (রাঃ) থেকে আরেকটি সূত্র আছে, যেখানে পিছিয়ে পড়ার কোনো কথা নেই। লোকেরা বলেছিলেন, আল্লাহর কাছে সবচেয়ে প্রিয় আমল কোনটি জানলে আমরা তা করতাম। আল্লাহ বুনয়ানুম মারসূস পর্যন্ত আয়াতগুলো নাযিল করে তাদের সেই আমলের সন্ধান দিলেন। মুজাহিদ থেকে তাবারী বক্তাদের পরিচয়ও দেন: আনসারদের একটি দল, যাদের মধ্যে ছিলেন আবদুল্লাহ ইবন রাওয়াহা (রাঃ)। আয়াত নাযিল হলে ইবন রাওয়াহা বললেন, মৃত্যু পর্যন্ত আমি আল্লাহর পথে আটকে থাকব। পরে তিনি শহীদ হন।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Salam's Gathering",
          "bn": "ইবন সালামের সেই মজলিস"
        },
        "p": [
          {
            "en": "At-Tirmidhi records the gathering from 'Abdullah ibn Salam (RA): \"A group of us Companions of the Messenger of Allah sat talking, and we said: 'If we knew which deed was most beloved to Allah then we would do it.' So Allah, Most High, revealed: Whatsoever is in the heavens and whatsoever is on the earth glorifies Allah. And He is Almighty, the All-Wise. O you who believe! Why do you say that which you do not do?\" Ibn Salam said: \"So the Messenger of Allah recited it to us.\"",
            "bn": "তিরমিযী আবদুল্লাহ ইবন সালাম (রাঃ) থেকে মজলিসটির কথা বর্ণনা করেন: \"রসূলুল্লাহ ﷺ-এর সাহাবীদের একটি দল আমরা বসে আলাপ করছিলাম। আমরা বললাম, আল্লাহর কাছে কোন আমল সবচেয়ে প্রিয় তা যদি জানতাম, তবে তা-ই করতাম। তখন মহান আল্লাহ নাযিল করলেন: আসমানে যা আছে আর যমীনে যা আছে সবই আল্লাহর মহিমা ঘোষণা করে, তিনি মহাপরাক্রান্ত, প্রজ্ঞাময়। হে মুমিনগণ, তোমরা যা কর না তা কেন বল?\" ইবন সালাম বলেন: \"তারপর রসূলুল্লাহ ﷺ আমাদের তা পড়ে শোনালেন।\""
          },
          {
            "en": "The report then runs down its chain, each narrator saying that the one before him recited the surah to them. At-Tirmidhi attaches no grade to it; he notes only that the narrator Muhammad ibn Kathir was contradicted over its chain from al-Awza'i. Al-Qurtubi gives the same report from ad-Darimi's Musnad, and Ibn Kathir a related wording from Imam Ahmad. Al-Qurtubi also quotes Ibn al-'Arabi, who calls the report of their wish a hadith with no harm in it, la ba'sa bihi.",
            "bn": "এরপর বর্ণনাটি তার সনদ ধরে নিচে নেমে আসে। প্রত্যেক বর্ণনাকারী বলেন, তাঁর আগের জন সূরাটি তাঁদের পড়ে শুনিয়েছিলেন। তিরমিযী এর কোনো মান উল্লেখ করেননি। তিনি শুধু জানান, আওযাঈ থেকে এর সনদ বর্ণনায় মুহাম্মাদ ইবন কাসীরের সঙ্গে অন্যদের মতভেদ হয়েছে। কুরতুবী একই বর্ণনা আনেন দারিমীর মুসনাদ থেকে, আর ইবন কাসীর ইমাম আহমাদ থেকে কাছাকাছি আরেকটি ভাষ্য দেন। কুরতুবী ইবনুল আরাবীর কথাও উদ্ধৃত করেন। তাঁর মতে তাদের সেই আকাঙ্ক্ষার বর্ণনাটি এমন হাদীস যাতে কোনো সমস্যা নেই, লা বা'সা বিহি।"
          },
          {
            "en": "Other reports tie the falling short to Uhud. Al-Baghawi gives it from the exegetes in general: Allah revealed that He loves those who fight in His cause in a row, they were tested with it at Uhud, and they turned back. Ibn Kathir has the same from Muqatil ibn Hayyan, al-Qurtubi from al-Kalbi, and both al-Baghawi and al-Qurtubi from Muhammad ibn Ka'b, in whose version the pledge was made after the news of the reward of the martyrs of Badr. Ma'arif al-Qur'an, for its part, holds that the Companions in these reports meant what they said and their intention was genuine.",
            "bn": "অন্য কিছু বর্ণনা পিছিয়ে পড়ার ঘটনাটিকে উহুদের সঙ্গে জুড়ে দেয়। বাগাভী তা আনেন তাফসীরকারদের সাধারণ বক্তব্য হিসেবে: আল্লাহ নাযিল করলেন যে তিনি তাদের ভালোবাসেন যারা সারিবদ্ধ হয়ে তাঁর পথে লড়াই করে। উহুদের দিন এ দিয়েই তাদের পরীক্ষা হলো, আর তারা পিঠ ফিরিয়ে নিল। ইবন কাসীর একই কথা আনেন মুকাতিল ইবন হাইয়ান থেকে, কুরতুবী কালবী থেকে, আর বাগাভী ও কুরতুবী দুজনেই মুহাম্মাদ ইবন কা'ব থেকে। তাঁর বর্ণনায় অঙ্গীকারটি এসেছিল বদরের শহীদদের পুরস্কারের খবর শোনার পর। অন্যদিকে মাআরিফুল কুরআনের মত হলো, এসব বর্ণনার সাহাবীরা মন থেকেই কথাটা বলেছিলেন, তাদের নিয়ত ছিল খাঁটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Claiming a Deed Not Done",
          "bn": "না করা কাজের দাবি"
        },
        "p": [
          {
            "en": "At-Tabari's second view is that the verse rebuked some of the Companions of the Messenger ﷺ, one of whom would boast of a good deed he had not done, saying I did this and that. From Qatada he relates: I was told it concerned fighting; a man would say I fought and I did, when he had not, and Allah admonished them with the severest admonition. Al-Baghawi gives it from Qatada and ad-Dahhak: I fought, I thrust, I struck, when he had not. Al-Qurtubi has it from Mihran and ad-Dahhak.",
            "bn": "তাবারীর দ্বিতীয় মত হলো, আয়াতটি রসূলুল্লাহ ﷺ-এর কিছু সাহাবীকে ভর্ৎসনা করেছে। তাদের কেউ কেউ এমন ভালো কাজের বড়াই করতেন যা তিনি করেননি, বলতেন, আমি এটা করেছি, ওটা করেছি। কাতাদা থেকে তিনি বর্ণনা করেন: আমি শুনেছি এটা জিহাদ নিয়ে। কেউ বলত, আমি লড়েছি, এটা করেছি, অথচ সে তা করেনি। আল্লাহ তাদের সবচেয়ে কঠিন উপদেশ দিলেন। বাগাভী তা আনেন কাতাদা ও দাহহাক থেকে: আমি লড়েছি, বর্শা চালিয়েছি, আঘাত করেছি, অথচ কিছুই করেনি। কুরতুবী একই কথা আনেন মিহরান ও দাহহাক থেকে।"
          },
          {
            "en": "Al-Qurtubi adds a story from Suhayb (RA). A man had harmed the Muslims at Badr, and Suhayb killed him. Another man told the Prophet ﷺ, I killed so-and-so, and the Prophet ﷺ was glad. 'Umar ibn al-Khattab and 'Abd ar-Rahman ibn 'Awf (RA) said to Suhayb that the other man had falsely claimed the killing. Suhayb told the Prophet ﷺ, who asked, Is that so, Abu Yahya? He said, Yes, by Allah. Al-Qurtubi says the verse then came down about the false claimant.",
            "bn": "কুরতুবী সুহাইব (রাঃ) থেকে একটি ঘটনাও আনেন। বদরের দিন এক লোক মুসলিমদের খুব কষ্ট দিয়েছিল, আর সুহাইব তাকে হত্যা করেন। আরেকজন এসে নবী ﷺ-কে বলল, অমুককে আমি মেরেছি। শুনে নবী ﷺ খুশি হলেন। উমার ইবনুল খাত্তাব ও আবদুর রহমান ইবন আওফ (রাঃ) সুহাইবকে বললেন, ওই লোকটি মিথ্যা করে হত্যার কৃতিত্ব নিজের নামে নিয়েছে। সুহাইব নবী ﷺ-কে জানালে তিনি জিজ্ঞেস করলেন, আবু ইয়াহইয়া, ব্যাপারটা কি এমনই? তিনি বললেন, আল্লাহর কসম, হ্যাঁ। কুরতুবী বলেন, তখন মিথ্যা দাবিদারের ব্যাপারে আয়াতটি নাযিল হয়।"
          },
          {
            "en": "A last report, from Ibn Zayd in both al-Baghawi and al-Qurtubi, places the verse among the hypocrites. In al-Qurtubi's wording they told the Prophet ﷺ and his Companions that if they went out to fight, they would go out and fight with them; when the believers went out, they drew back. These are the commentators' reports, and none is chosen here. The verse describes what the text describes and licenses nothing against any living person or community.",
            "bn": "শেষ বর্ণনাটি ইবন যায়দের, বাগাভী ও কুরতুবী দুজনেই তা এনেছেন। এতে আয়াতটি মুনাফিকদের প্রসঙ্গে। কুরতুবীর ভাষায় তারা নবী ﷺ ও তাঁর সাহাবীদের বলত, তোমরা যুদ্ধে বের হলে আমরাও তোমাদের সঙ্গে বের হব, লড়াই করব। কিন্তু মুমিনরা যখন বের হলেন, তারা পিছিয়ে রইল। এগুলো তাফসীরকারদের বর্ণনা, এখানে কোনোটিকেই বেছে নেওয়া হয়নি। আয়াতটি শুধু তা-ই বর্ণনা করে যা পাঠে আছে। আজকের কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুরই অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Promise Binds",
          "bn": "ওয়াদা যে দায় চাপায়"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a rebuke of anyone who makes a promise, or says something, and does not keep it. That is why, he says, some of the early scholars took it as proof that keeping a promise is binding without condition, whether or not breaking it costs the other person anything. They also cited a hadith from the two Sahihs, which al-Bukhari records in his Sahih from Abu Hurayrah (RA): \"The signs of a hypocrite are three: whenever he speaks, he lies; whenever he promises, he breaks it; and whenever he is trusted, he betrays.\"",
            "bn": "ইবন কাসীর আয়াতটিকে পড়েন তাদের প্রতি ভর্ৎসনা হিসেবে, যারা ওয়াদা করে বা কোনো কথা দেয়, অথচ তা রাখে না। তাঁর মতে এ কারণেই সালাফের কিছু আলেম এ আয়াত দিয়ে প্রমাণ করেছেন যে ওয়াদা রক্ষা করা নিঃশর্তভাবে ওয়াজিব, ওয়াদা ভাঙলে যাকে কথা দেওয়া হয়েছে তার কোনো ক্ষতি হোক বা না হোক। তাঁরা দুই সহীহ গ্রন্থের একটি হাদীসও দলিল হিসেবে আনেন। বুখারী তাঁর সহীহ গ্রন্থে আবু হুরায়রা (রাঃ) থেকে তা বর্ণনা করেছেন: \"মুনাফিকের আলামত তিনটি: যখন কথা বলে, মিথ্যা বলে; যখন ওয়াদা করে, তা ভঙ্গ করে; আর যখন তার কাছে আমানত রাখা হয়, খিয়ানত করে।\""
          },
          {
            "en": "Al-Qurtubi goes further: the verse obliges anyone who binds himself to an act of obedience to fulfil it. He quotes Ibn al-'Arabi on vows. A vow made purely to draw near to Allah, such as I owe Allah a prayer or a fast, must be kept by consensus. A vow hung on a condition, such as if my absent one returns I will give charity, is disputed: Malik and Abu Hanifa hold it binding, and ash-Shafi'i in one of his statements does not. Ibn al-'Arabi takes the verse's general wording as his proof.",
            "bn": "কুরতুবী আরও এগিয়ে বলেন, আনুগত্যের কোনো কাজ যে নিজের উপর বাধ্যতামূলক করে নেয়, এ আয়াত তার উপর তা পূরণ করা ওয়াজিব করে দেয়। মানত প্রসঙ্গে তিনি ইবনুল আরাবীর কথা উদ্ধৃত করেন। শুধু আল্লাহর নৈকট্যের জন্য করা মানত, যেমন আল্লাহর জন্য আমার উপর একটি নামায বা একটি রোযা, তা পূরণ করা সর্বসম্মতভাবে জরুরি। আর শর্তের সঙ্গে ঝুলিয়ে রাখা মানত, যেমন আমার প্রবাসী মানুষটি ফিরে এলে সদকা করব, তা নিয়ে মতভেদ আছে। মালিক ও আবু হানীফার মতে তা পালন করতে হবে, আর শাফিঈর এক বক্তব্য অনুযায়ী করতে হবে না। ইবনুল আরাবী আয়াতের ব্যাপক ভাষাকেই নিজের দলিল ধরেন।"
          },
          {
            "en": "On promises, Ibn al-'Arabi says a promise tied to a cause, such as if you marry I will help you with a dinar, binds by the jurists' consensus, and of a bare promise he says the correct view to him is that it must be kept in every case unless there is an excuse. Al-Qurtubi then quotes Malik, who did not see a bare promise of a gift as binding, and explains: a judge does not enforce it, but in noble character, yes. He cites 2:177 on those who keep their covenants, and 19:54, where Isma'il (AS) was true to his promise.",
            "bn": "ওয়াদা প্রসঙ্গে ইবনুল আরাবী বলেন, কোনো কারণের সঙ্গে বাঁধা ওয়াদা, যেমন তুমি বিয়ে করলে এক দীনার দিয়ে সাহায্য করব, ফকীহদের সর্বসম্মতিতে পালনীয়। আর নিছক ওয়াদা সম্পর্কে তাঁর কথা, তাঁর কাছে সঠিক মত হলো ওযর না থাকলে সব অবস্থায় তা রক্ষা করতে হবে। এরপর কুরতুবী মালিকের মত আনেন। কাউকে কিছু দান করার নিছক ওয়াদাকে মালিক বাধ্যতামূলক মনে করতেন না। কুরতুবী এর ব্যাখ্যা দেন: বিচারক তা আদায় করতে বাধ্য করবেন না, তবে উত্তম চরিত্রের দাবি হলো তা রাখা। তিনি উল্লেখ করেন ২:১৭৭, যেখানে অঙ্গীকার রক্ষাকারীদের কথা আছে, আর ১৯:৫৪, যেখানে ইসমাঈল (আঃ) ওয়াদায় সত্যবাদী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Preacher and His Gap",
          "bn": "বক্তা ও তার ফাঁক"
        },
        "p": [
          {
            "en": "Does the verse reach the one who urges others to good? The commentators answer differently. As-Sa'di's gloss includes him: why do you speak of good and urge it, perhaps even praising yourselves for it, while you do not do it, and forbid evil, perhaps declaring yourselves clear of it, while you are stained by it? Al-Qurtubi reports a man named al-Muthanna who said three verses kept him from preaching to people: 2:44, 11:88 and this one. He also tells of an early scholar who, asked to narrate, fell silent.",
            "bn": "অন্যকে ভালো কাজের দিকে যে ডাকে, আয়াতটি কি তার বেলাতেও খাটে? তাফসীরকারদের উত্তর এক নয়। সা'দীর ব্যাখ্যায় সে-ও এর ভেতরে পড়ে। তাঁর ভাষায়: তোমরা ভালো কাজের কথা বল, তাতে উৎসাহ দাও, হয়তো এ নিয়ে নিজেদের প্রশংসাও কর, অথচ নিজেরা তা কর না। মন্দ থেকে নিষেধ কর, হয়তো নিজেদের তা থেকে পবিত্রও দাবি কর, অথচ তাতেই তোমরা মাখামাখি। কুরতুবী মুসান্না নামের একজনের কথা আনেন, যিনি বলেছিলেন তিনটি আয়াত তাকে মানুষের সামনে ওয়াজ করা থেকে বিরত রেখেছে: ২:৪৪, ১১:৮৮ আর এই আয়াত। তিনি পূর্বসূরিদের একজনের কথাও বলেন, যাঁকে হাদীস শোনাতে বলা হলে তিনি চুপ করে ছিলেন।"
          },
          {
            "en": "Asked again, that scholar replied: do you want me to say what I do not do, and so hasten the hatred of Allah? Ma'arif al-Qur'an draws the line elsewhere. It holds that these verses concern a claim, da'wa, to do something without intending it, and not a preacher's call, da'wah, to a deed he himself neglects. That case, it says, has its own verses, such as 2:44, which shames preachers who do not practise and tells them to preach to themselves with greater force.",
            "bn": "আবার অনুরোধ করা হলে তিনি বললেন, তোমরা কি চাও আমি এমন কথা বলি যা নিজে করি না, আর এভাবে আল্লাহর ঘৃণা তাড়াতাড়ি ডেকে আনি? মাআরিফুল কুরআন সীমারেখা টানে অন্য জায়গায়। তার মতে এ আয়াতগুলো দাবি নিয়ে, অর্থাৎ নিয়ত ছাড়াই কিছু করব বলে ঘোষণা দেওয়া। যে বক্তা নিজে যা করে না তার দিকে অন্যকে ডাকে, তার ব্যাপারটা আলাদা। সে বিষয়ে আছে অন্য আয়াত, যেমন ২:৪৪। ওই আয়াত আমলহীন বক্তাদের লজ্জা দেয় এবং বলে, অন্যকে উপদেশ দেওয়ার সময় নিজেকে আরও জোর দিয়ে উপদেশ দাও।"
          },
          {
            "en": "Even so, Ma'arif al-Qur'an adds, none of this means that someone lax in good deeds should stop urging them on others, or that someone in a sin should stop forbidding it. Doing a good deed is one virtue and calling to it is another; leaving one does not require leaving the second. Through the blessing of preaching, it says, the preacher may come to do the deed himself. Where the neglected deed is obligatory or a stressed sunnah, he must keep feeling remorse for leaving it.",
            "bn": "তবু মাআরিফুল কুরআন যোগ করে, এর মানে এই নয় যে নেক আমলে যে ঢিলেমি করে, সে অন্যকে সে আমলের কথা বলা ছেড়ে দেবে। কিংবা কোনো গুনাহে যে জড়িয়ে আছে, সে অন্যকে তা থেকে নিষেধ করা বন্ধ করবে। নেক কাজ করা এক নেকি, আর তার দিকে ডাকা আরেক নেকি। একটি ছেড়ে দিলে অন্যটিও ছাড়তে হবে, এমন কোনো কথা নেই। তার মতে উপদেশ দেওয়ার বরকতে বক্তা নিজেও একদিন আমলটি করার তাওফীক পেতে পারে। তবে বাদ পড়া আমলটি ওয়াজিব বা সুন্নাতে মুয়াক্কাদা হলে তা ছেড়ে দেওয়ার জন্য তাকে বারবার অনুতপ্ত হতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Words That Wait for Deeds",
          "bn": "কথা থাকুক কাজের অপেক্ষায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi records one more reading, from Sufyan ibn 'Uyayna: why do you say what is not in your hands, when you do not know whether you will do it or not? On that reading the reproach falls on the speaking itself, and it meets Ma'arif al-Qur'an's counsel to leave the deed unannounced, or to tie it to If Allah wills. Between the two stands Ibn Rawaha (RA) in at-Tabari's report, whose answer to the verse was a pledge he then kept with his life.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যা আনেন সুফইয়ান ইবন উয়াইনা থেকে: যা তোমাদের হাতে নেই, তা কেন বল, যখন তোমরা জানই না যে তা করবে কি করবে না? এই ব্যাখ্যায় তিরস্কারটা পড়ে বলার উপরেই। আর এখানে এসে তা মিলে যায় মাআরিফুল কুরআনের পরামর্শের সঙ্গে: কাজের ঘোষণা না দেওয়া, কিংবা ইনশাআল্লাহর সঙ্গে বেঁধে দেওয়া। এ দুইয়ের মাঝখানে দাঁড়িয়ে আছেন তাবারীর বর্ণনার ইবন রাওয়াহা (রাঃ)। আয়াতের জবাবে তিনি একটি অঙ্গীকার করেছিলেন, আর জীবন দিয়ে সেটি রক্ষা করেছিলেন।"
          },
          {
            "en": "Two verses on, 61:4 names what Allah loves: those who fight in His cause in a row, as if they were a structure firmly joined; Ibn Kathir relays Ibn 'Abbas (RA) that its parts are cemented so it does not move. At 61:14 the surah closes by calling the believers to be helpers of Allah, as the disciples answered 'Isa (AS). Between the question and that call, the verse leaves the reader one test before each promise: will I do this?",
            "bn": "দুই আয়াত পরে ৬১:৪ জানিয়ে দেয় আল্লাহ কাদের ভালোবাসেন: যারা তাঁর পথে সারিবদ্ধ হয়ে লড়াই করে, যেন তারা মজবুতভাবে জোড়া লাগানো এক প্রাচীর। ইবন কাসীর ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: এর অংশগুলো একটির সঙ্গে আরেকটি গাঁথা, তাই তা নড়ে না। ৬১:১৪ আয়াতে সূরাটি শেষ হয় মুমিনদের আল্লাহর সাহায্যকারী হওয়ার ডাক দিয়ে, যেমন হাওয়ারীরা ঈসা (আঃ)-এর ডাকে সাড়া দিয়েছিলেন। প্রশ্ন আর ডাকের মাঝখানে আয়াতটি পাঠকের হাতে একটি পরীক্ষা রেখে যায়। প্রতিটি ওয়াদার আগে নিজেকে জিজ্ঞেস করুন: আমি কি এটা সত্যিই করব?"
          }
        ]
      }
    ]
  },
  "61:14": {
    "sections": [
      {
        "h": {
          "en": "Where the Surah Ends",
          "bn": "যেখানে সূরাটি থামে"
        },
        "p": [
          {
            "en": "Ya ayyuha alladhina amanu kunu ansar Allah: O you who believe, be supporters of Allah. This is the last verse of as-Saff. The surah opened by rebuking those who say what they do not do (61:2), and just before this verse it offered a transaction: believe, strive with your wealth and your lives, and receive forgiveness, gardens and a victory near at hand (61:10 to 61:13). Al-Baghawi marks the turn in a single clause: then Allah urged them to support the religion and to strive against those who oppose it.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ কূনূ আনসারাল্লাহ: হে মুমিনগণ, তোমরা আল্লাহর সাহায্যকারী হও। সূরা আস-সফের এটিই শেষ আয়াত। সূরার শুরুতে তিরস্কার ছিল তাদের প্রতি, যারা মুখে যা বলে কাজে তা করে না (৬১:২)। এ আয়াতের ঠিক আগে এসেছিল এক ব্যবসার প্রস্তাব: ঈমান আনো, জান ও মাল দিয়ে জিহাদ কর, তবেই মিলবে মাগফিরাত, জান্নাত আর আসন্ন বিজয় (৬১:১০ থেকে ৬১:১৩)। বাগাভী মোড়টা ধরিয়ে দেন এক বাক্যে: এরপর আল্লাহ তাদের উদ্বুদ্ধ করলেন দীনের সাহায্যে আর বিরোধীদের বিরুদ্ধে জিহাদে।"
          },
          {
            "en": "Al-Qurtubi reads the verse as a reinforcement of the command to strive: be the disciples of your Prophet, so that Allah gives you the upper hand over those who oppose you, as He gave it to the disciples of Isa (AS). He records two views of who is speaking. On one, a word is understood before the command: say to them, O Muhammad, be supporters of Allah. On the other, the address begins directly from Allah: be supporters, as the companions of Isa (AS) were.",
            "bn": "কুরতুবীর চোখে আয়াতটি জিহাদের নির্দেশকে আরও জোরালো করে। অর্থ দাঁড়ায়: তোমরা নিজেদের নবীর হাওয়ারী হয়ে যাও, যাতে আল্লাহ বিরোধীদের উপর তোমাদের বিজয়ী করেন, যেমন বিজয়ী করেছিলেন ঈসা (আঃ)-এর হাওয়ারীদের। কে বলছেন, এ নিয়ে তিনি দুটি মত উল্লেখ করেন। এক মতে নির্দেশের আগে একটি কথা উহ্য আছে: হে মুহাম্মাদ, তাদের বলুন, আল্লাহর সাহায্যকারী হও। অন্য মতে সম্বোধনটা সরাসরি আল্লাহর পক্ষ থেকে: সাহায্যকারী হও, যেমন হয়েছিলেন ঈসা (আঃ)-এর সঙ্গীরা।"
          },
          {
            "en": "The phrase itself has two readings. At-Tabari reports that most readers of Medina and Basra read ansaran, with tanwin, so the sense is helpers for Allah, while most readers of Kufa read ansara Allah, joining the noun to the Name; he judges both well known and sound in meaning. Al-Qurtubi notes that Abu 'Ubayda preferred the joined form to match the disciples' own reply, nahnu ansaru Allah, and glosses it: be supporters of Allah's religion.",
            "bn": "শব্দবন্ধটির দুটি কিরাআত আছে। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী তানবীনসহ পড়েছেন আনসারান, তাতে অর্থ হয় আল্লাহর জন্য সাহায্যকারী। কূফার অধিকাংশ কারী পড়েছেন আনসারাল্লাহ, বিশেষ্যটিকে সরাসরি আল্লাহর নামের সঙ্গে যুক্ত করে। তাঁর রায়: দুটিই সুপরিচিত, দুটিরই অর্থ সঠিক। কুরতুবী জানান, আবু উবাইদা যুক্ত রূপটি পছন্দ করেছেন, কারণ হাওয়ারীদের নিজেদের জবাবও ছিল নাহনু আনসারুল্লাহ। এর অর্থ তিনি করেন: আল্লাহর দীনের সাহায্যকারী হও।"
          }
        ]
      },
      {
        "h": {
          "en": "Supporters of His Religion",
          "bn": "তাঁর দীনের পাশে দাঁড়ানো"
        },
        "p": [
          {
            "en": "What does it mean to support Allah? The commentators answer by naming what is supported. The Muyassar glosses ansar Allah as supporters of Allah's religion. Ibn Kathir widens the scope: Allah commands the believers to be His supporters in all their states, in their words and deeds, with their selves and their wealth, and to respond to Allah and His Messenger as the disciples responded to Isa (AS). As-Sa'di also says by words and deeds, and spells it out: upholding Allah's religion, being keen to establish it among others, and striving with body and wealth against whoever resists it.",
            "bn": "আল্লাহর সাহায্য করার মানে কী? তাফসীরকারেরা জবাব দেন, কীসের সাহায্য, সেটা বলে দিয়ে। মুয়াসসার আনসারাল্লাহর অর্থ করে আল্লাহর দীনের সাহায্যকারী। ইবন কাসীর পরিধিটা আরও বড় করেন। তাঁর কথায়, আল্লাহ মুমিনদের নির্দেশ দিচ্ছেন সব অবস্থায় তাঁর সাহায্যকারী হতে, কথায় ও কাজে, জান ও মাল দিয়ে। আর আল্লাহ ও তাঁর রাসূলের ডাকে সাড়া দিতে, যেভাবে হাওয়ারীরা সাড়া দিয়েছিলেন ঈসা (আঃ)-এর ডাকে। সা'দীও বলেন কথায় ও কাজে, তারপর খুলে বলেন এর ভেতরে কী আছে: আল্লাহর দীন কায়েম রাখা, অন্যদের মাঝেও তা প্রতিষ্ঠার আগ্রহ রাখা, আর যে এর বিরোধিতা করে তার বিরুদ্ধে শরীর ও সম্পদ দিয়ে জিহাদ করা।"
          },
          {
            "en": "As-Sa'di's list then reaches past the battlefield. Supporting Allah's religion includes answering whoever supports falsehood with what he claims is knowledge: refuting his argument, establishing the proof against him and warning people of him. It includes learning the Book of Allah and the Sunnah of His Messenger and urging others to it, and enjoining what is right and forbidding what is wrong. Read this way, the command reaches the one who studies and the one who teaches, not only the one who stands in a line of battle.",
            "bn": "সা'দীর তালিকা এরপর যুদ্ধের ময়দান ছাড়িয়ে যায়। কেউ জ্ঞানের দাবি তুলে বাতিলের পক্ষ নিলে তার জবাব দেওয়াও আল্লাহর দীনের সাহায্য। তার যুক্তি খণ্ডন করা, তার বিরুদ্ধে দলিল দাঁড় করানো, মানুষকে তার ব্যাপারে সতর্ক করা, সবই এর অংশ। আল্লাহর কিতাব আর রাসূলের সুন্নাহ শেখা, অন্যকে শিখতে উৎসাহ দেওয়া, সৎকাজের আদেশ আর অসৎকাজে নিষেধ, এগুলোও তাঁর তালিকায় আছে। এভাবে পড়লে নির্দেশটা শুধু রণাঙ্গনের মানুষের জন্য নয়। যে শেখে আর যে শেখায়, তার কাছেও একই ডাক পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "With Allah or Towards Him",
          "bn": "আল্লাহর সঙ্গে, নাকি তাঁর দিকে"
        },
        "p": [
          {
            "en": "Then comes the comparison: kama qala Isa ibn Maryam lil-hawariyyin man ansari ila Allah, as Isa son of Maryam said to the disciples, who are my supporters ila Allah? The small word ila carries two readings. Al-Baghawi and al-Qurtubi take it as with: who will support me together with Allah. Al-Qurtubi backs this from Arabic usage, citing the saying al-dhawdu ila al-dhawdi ibil, a few camels with a few make a herd, where ila means with. He then gives a second view: who will support me in what brings one near to Allah.",
            "bn": "এরপর আসে তুলনা: কামা কালা ঈসাবনু মারইয়ামা লিলহাওয়ারিয়্যীনা মান আনসারী ইলাল্লাহ, যেমন মারইয়ামের পুত্র ঈসা হাওয়ারীদের বলেছিলেন, ইলাল্লাহ কে আমার সাহায্যকারী? ছোট্ট শব্দ ইলা এখানে দুই অর্থে বোঝা হয়েছে। বাগাভী আর কুরতুবী এর অর্থ নেন সঙ্গে: আল্লাহর সঙ্গে মিলে কে আমাকে সাহায্য করবে? কুরতুবী আরবদের ব্যবহার থেকে এর পক্ষে প্রমাণ দেন। প্রবাদ আছে, আয-যাওদু ইলায যাওদি ইবিল, কয়েকটি উটের সঙ্গে আরও কয়েকটি মিললে পাল হয়। সেখানেও ইলা মানে সঙ্গে। এরপর তিনি দ্বিতীয় একটি মত দেন: যা আল্লাহর নৈকট্যে পৌঁছে দেয়, সেই কাজে কে আমার সাহায্যকারী?"
          },
          {
            "en": "Others follow the direction in the word. The Muyassar has: who among you will take up supporting and helping me in what brings near to Allah. Ibn Kathir: who will aid me in calling to Allah. At-Tabari's paraphrase turns on Allah's own help: who among you are my supporters towards Allah's support of me. Mujahid, in at-Tabari, gives the plainest gloss: who will follow me to Allah. Al-Qurtubi refers back to Al Imran, where the same question and the same answer appear at 3:52, there after Isa (AS) sensed disbelief among his people.",
            "bn": "অন্যরা শব্দটির দিকনির্দেশক অর্থ ধরে রাখেন। মুয়াসসারের ভাষায়: তোমাদের মধ্যে কে আমার সাহায্য ও সহযোগিতার ভার নেবে সেই কাজে, যা আল্লাহর নৈকট্যে নিয়ে যায়? ইবন কাসীরের ভাষায়: আল্লাহর দিকে দাওয়াতের কাজে কে আমাকে সাহায্য করবে? তাবারীর ব্যাখ্যা ঘোরে আল্লাহর নিজের সাহায্যকে ঘিরে: আমার প্রতি আল্লাহর সাহায্যের পথে তোমাদের কে আমার সাহায্যকারী হবে? তাবারীর বর্ণনায় মুজাহিদের ব্যাখ্যা সবচেয়ে সরল: আল্লাহর দিকে কে আমার অনুসরণ করবে? কুরতুবী পাঠককে ফিরিয়ে দেন সূরা আলে ইমরানে। সেখানে ৩:৫২ আয়াতে একই প্রশ্ন, একই জবাব। সেখানে প্রসঙ্গ ছিল, ঈসা (আঃ) তাঁর লোকদের মধ্যে কুফর টের পেয়েছিলেন।"
          },
          {
            "en": "The disciples answered without hesitation: nahnu ansaru Allah, we are Allah's supporters. As-Sa'di pictures the moment: the disciples hastened forward. At-Tabari glosses their reply: supporters of Allah upon the truth He sent His prophets with. Ibn Kathir: we are your supporters in what you were sent with, and we will stand by you in it. For this reason, he adds, Isa (AS) sent them out as callers to people in the lands of Sham, among the Israelites and the Greeks.",
            "bn": "হাওয়ারীরা দ্বিধা ছাড়াই জবাব দিলেন: নাহনু আনসারুল্লাহ, আমরাই আল্লাহর সাহায্যকারী। সা'দী মুহূর্তটার ছবি আঁকেন এভাবে: হাওয়ারীরা আগ বাড়িয়ে ছুটে এলেন। তাবারী তাঁদের জবাবের ব্যাখ্যা দেন: আল্লাহ তাঁর নবীদের যে সত্য দিয়ে পাঠিয়েছেন, সেই সত্যের উপর আমরা আল্লাহর সাহায্যকারী। ইবন কাসীরের ভাষায় জবাবটা ছিল: আপনাকে যা দিয়ে পাঠানো হয়েছে, তাতে আমরা আপনার সাহায্যকারী, আপনার পাশে আছি। তিনি যোগ করেন, এ কারণেই ঈসা (আঃ) তাঁদের দাঈ বানিয়ে পাঠিয়েছিলেন শামের ভূখণ্ডে, বনী ইসরাঈল ও গ্রিকদের মাঝে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why They Were Called Hawariyyun",
          "bn": "হাওয়ারী নামের পেছনে"
        },
        "p": [
          {
            "en": "Who were the hawariyyun? Ma'arif al-Qur'an, citing Ruh al-Ma'ani from al-Azhari, defines a hawari as a sincere friend free of any kind of adulteration, and says this is why those who believed in Isa (AS) bore the name; they were twelve in number. Al-Qurtubi calls the hawariyyun the elect of the messengers and Isa's chosen ones, twelve men, and reports from Ibn 'Abbas that they were the first of the Children of Israel to believe in him.",
            "bn": "হাওয়ারী কারা ছিলেন? মাআরিফুল কুরআন রূহুল মাআনীর বরাতে আযহারীর ব্যাখ্যা আনে: হাওয়ারী মানে এমন খাঁটি বন্ধু, যার মধ্যে কোনো ভেজাল নেই। এ কারণেই ঈসা (আঃ)-এর প্রতি ঈমান আনা লোকদের এই নাম, আর তাঁরা ছিলেন ১২ জন। কুরতুবী হাওয়ারীদের বলেন রাসূলদের বিশেষ ঘনিষ্ঠজন, ঈসা (আঃ)-এর বাছাই করা বারোজন মানুষ। ইবন আব্বাস (রাঃ)-এর বরাতে তিনি জানান, বনী ইসরাঈলের মধ্যে তাঁরাই সবার আগে তাঁর প্রতি ঈমান এনেছিলেন।"
          },
          {
            "en": "Other reports explain the name by a trade. At-Tabari has Ibn 'Abbas say they were named for the whiteness of their clothes and were fishermen, and ad-Dahhak say the word means washers in Nabataean. Al-Qurtubi relates from Muqatil that Allah told Isa (AS) to go to the river where the fullers worked and ask them for support; they answered, we will support you, then believed him and helped him.",
            "bn": "কিছু বর্ণনা নামটির ব্যাখ্যা দেয় পেশা দিয়ে। তাবারীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, সাদা পোশাকের কারণে তাঁদের এই নাম, আর তাঁরা ছিলেন মাছ শিকারি। দাহহাক বলেন, নাবাতী ভাষায় হাওয়ারী মানে ধোপা। কুরতুবী মুকাতিলের বরাতে আনেন: আল্লাহ ঈসা (আঃ)-কে বললেন, নদীর যে ঘাটে কাপড় ধোয়ার লোকেরা কাজ করে, সেখানে গিয়ে তাদের কাছে সাহায্য চাও। তিনি গেলেন, প্রশ্ন করলেন। তারা বলল, আমরা আপনাকে সাহায্য করব। তারপর তাঁকে সত্য বলে মানল, সাহায্যও করল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Earned at al-'Aqaba",
          "bn": "আকাবায় পাওয়া এক নাম"
        },
        "p": [
          {
            "en": "Ibn Kathir sets a parallel beside the disciples. In the days of Hajj, he writes, the Messenger of Allah ﷺ used to ask who would shelter him until he conveyed his Lord's message, for Quraysh had prevented him. Ibn Kathir names no collection for that wording. A report of the same scene is in at-Tirmidhi (2925), from Jabir: the Prophet ﷺ would present himself at the standing place and say, \"Is there no man who will carry me to his people? For Quraysh have prevented me from conveying the speech of my Lord.\" At-Tirmidhi grades it gharib sahih.",
            "bn": "হাওয়ারীদের পাশে ইবন কাসীর একটি সমান্তরাল ছবি রাখেন। তিনি লেখেন, হজের দিনগুলোতে আল্লাহর রাসূল ﷺ জিজ্ঞেস করতেন, কে তাঁকে আশ্রয় দেবে যাতে তিনি রবের বার্তা পৌঁছাতে পারেন, কারণ কুরাইশ তাঁকে বাধা দিয়েছে। এই শব্দগুলোর জন্য ইবন কাসীর কোনো হাদিসগ্রন্থের নাম বলেননি। একই দৃশ্যের একটি বর্ণনা আছে তিরমিযীতে (২৯২৫), জাবির (রাঃ) থেকে। নবী ﷺ মাওকিফে নিজেকে মানুষের সামনে পেশ করতেন আর বলতেন: \"এমন কেউ কি নেই, যে আমাকে তার কওমের কাছে নিয়ে যাবে? কারণ কুরাইশ আমাকে আমার রবের কালাম পৌঁছাতে বাধা দিয়েছে।\" তিরমিযী একে গরীব সহীহ বলেছেন।"
          },
          {
            "en": "Then, Ibn Kathir continues, Allah brought him the Aws and the Khazraj of Medina. They pledged to him, stood by him, and accepted the condition that they would protect him from everyone, the black and the red, if he emigrated to them; when he came with his Companions, they kept what they had promised Allah. That is why Allah and His Messenger named them al-Ansar, the Supporters, and the name became theirs. At-Tabari carries Qatada's comment on the verse: Allah had supporters from this community who strove for His Book and His right.",
            "bn": "ইবন কাসীর বলে চলেন, এরপর আল্লাহ তাঁর জন্য মদীনার আওস ও খাযরাজকে এনে দিলেন। তারা তাঁর হাতে বাইআত করল, তাঁর পাশে দাঁড়াল। শর্ত মেনে নিল, তিনি হিজরত করে এলে কালো-লাল নির্বিশেষে সবার হাত থেকে তাঁকে রক্ষা করবে। সঙ্গীদের নিয়ে তিনি যখন এলেন, আল্লাহর সঙ্গে করা অঙ্গীকার তারা পূরণ করল। এ কারণেই আল্লাহ ও তাঁর রাসূল তাদের নাম দিলেন আনসার, সাহায্যকারী দল। নামটা তাদের পরিচয় হয়ে গেল। তাবারী এ আয়াতে কাতাদার মন্তব্য আনেন: এই উম্মতের মধ্যেও আল্লাহর সাহায্যকারী ছিল, যারা তাঁর কিতাব ও তাঁর হকের জন্য জিহাদ করেছে।"
          },
          {
            "en": "Qatada's reports in at-Tabari add numbers and names. In one he says seventy men came and pledged at al-'Aqaba, supported him and sheltered him until Allah made His religion prevail; in another line the count is seventy-two. Al-Qurtubi gives Ma'mar's version, seventy men who pledged on the night of al-'Aqaba. Yet a separate report from Qatada in at-Tabari says the disciples of this community were all from Quraysh and names twelve, among them Abu Bakr, 'Umar and 'Ali. The two reports point the word at different men, and neither commentator settles it.",
            "bn": "তাবারীতে কাতাদার বর্ণনাগুলো সংখ্যা আর নামও যোগ করে। একটিতে তিনি বলেন, সত্তরজন লোক এসে আকাবায় বাইআত করেছিল। তারা তাঁকে সাহায্য করেছিল, আশ্রয় দিয়েছিল, যতক্ষণ না আল্লাহ তাঁর দীনকে বিজয়ী করলেন। আরেক জায়গায় সংখ্যাটা বাহাত্তর। কুরতুবী আনেন মা'মারের ভাষ্য: সত্তরজন, যারা আকাবার রাতে বাইআত করেছিল। অথচ তাবারীতেই কাতাদার আরেক বর্ণনা বলে, এই উম্মতের হাওয়ারীরা সবাই ছিলেন কুরাইশের, আর সেখানে ১২ জনের নাম আছে, যাঁদের মধ্যে আবু বকর, উমর ও আলী (রাঃ)। দুই বর্ণনায় শব্দটি দুই ভিন্ন দলের দিকে ইঙ্গিত করে, আর দুই তাফসীরকারের কেউই এর মীমাংসা করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Divided Over Him",
          "bn": "তাঁকে ঘিরে দুই ভাগ"
        },
        "p": [
          {
            "en": "Fa-amanat ta'ifatun min bani Isra'il wa kafarat ta'ifa: a faction of the Children of Israel believed and a faction disbelieved. At-Tabari keeps to the plain sense: a faction believed in Isa (AS) and a faction of them disbelieved in him. As-Sa'di ties the belief to the call of Isa (AS) and the disciples; the others would not yield to it. Al-Qurtubi places both factions in the time of Isa (AS) and says they divided after he was raised to heaven.",
            "bn": "ফাআমানাত তাইফাতুম মিম বানী ইসরাঈলা ওয়া কাফারাত তাইফাহ: বনী ইসরাঈলের একদল ঈমান আনল, আরেক দল কুফরি করল। তাবারী সরল অর্থেই থাকেন: একদল ঈসা (আঃ)-এর প্রতি ঈমান আনল, আরেক দল তাঁকে অস্বীকার করল। সা'দী ঈমানকে জুড়ে দেন ঈসা (আঃ) ও হাওয়ারীদের দাওয়াতের সঙ্গে। অন্যরা সেই দাওয়াতের কাছে মাথা নোয়ায়নি। কুরতুবী দুই দলকেই রাখেন ঈসা (আঃ)-এর যুগে, আর বলেন, তাঁকে আসমানে তুলে নেওয়ার পর তারা বিভক্ত হয়ে পড়ে।"
          },
          {
            "en": "Ibn Kathir describes the division further. One faction was guided by what Isa (AS) brought; another went astray, denied his prophethood and cast grave slanders at him and his mother; and a faction among his followers went to excess about him, raising him above the prophethood Allah gave him, and split into sects. A report from Ibn 'Abbas, carried by at-Tabari, al-Baghawi and Ibn Kathir, says that after he was raised his people split into three: one said he was God, one said he was the son of God, and one said he was Allah's servant and messenger, and these were the believers.",
            "bn": "ইবন কাসীর বিভক্তিটা আরও খুলে বলেন। একদল ঈসা (আঃ)-এর আনা হিদায়াত গ্রহণ করল। আরেক দল পথ হারাল। তারা তাঁর নবুওয়াত অস্বীকার করল, তাঁর ও তাঁর মায়ের নামে জঘন্য অপবাদ রটাল। আর তাঁর অনুসারীদের মধ্যে একদল তাঁকে নিয়ে বাড়াবাড়ি করল। আল্লাহ তাঁকে যে নবুওয়াত দিয়েছিলেন, তারা তাঁকে তুলে দিল তারও উপরে, তারপর নানা উপদলে ভাগ হয়ে গেল। তাবারী, বাগাভী ও ইবন কাসীর ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন। তাঁকে তুলে নেওয়ার পর তাঁর লোকেরা তিনটি দলে ভাগ হয়। একটি দল বলল, তিনি ছিলেন স্বয়ং আল্লাহ। আরেক দল বলল, আল্লাহর পুত্র। তৃতীয় দল বলল, তিনি আল্লাহর বান্দা ও রাসূল। এরাই ছিল মুমিন।"
          }
        ]
      },
      {
        "h": {
          "en": "When and How They Prevailed",
          "bn": "বিজয় কখন, কীভাবে"
        },
        "p": [
          {
            "en": "Fa-ayyadna alladhina amanu 'ala 'aduwwihim fa-asbahu zahirin: so We supported those who believed against their enemy, and they became dominant. Mujahid, in at-Tabari, glosses ayyadna as qawwayna, We strengthened; as-Sa'di as We strengthened them and helped them. For zahirin al-Baghawi gives exalted and prevailing, and al-Qurtubi derives it from zahartu 'ala al-ha'it, I climbed up onto the wall: they rose above. The harder question is when they prevailed, and by what.",
            "bn": "ফাআইয়াদনাল্লাযীনা আমানূ আলা আদুওয়্যিহিম ফাআসবাহূ যাহিরীন: তখন যারা ঈমান এনেছিল, তাদের আমি শত্রুর বিরুদ্ধে শক্তি দিলাম, ফলে তারা বিজয়ী হলো। তাবারীর বর্ণনায় মুজাহিদ আইয়াদনার অর্থ করেন কাওয়াইনা, আমি শক্তিশালী করলাম। সা'দীর ভাষায়: আমি তাদের শক্তি দিলাম, সাহায্য করলাম। যাহিরীনের অর্থ বাগাভী দেন উচ্চে আসীন ও প্রবল। কুরতুবী শব্দটির মূল খোঁজেন আরবদের কথায়: যাহারতু আলাল হাইত, আমি দেয়ালের উপরে উঠলাম। অর্থাৎ তারা উপরে উঠে গেল। কঠিন প্রশ্নটা হলো, তারা বিজয়ী হলো কখন, আর কীসের জোরে।"
          },
          {
            "en": "In the Ibn 'Abbas report, the two disbelieving factions overcame the believing faction, and Islam remained obscured until Allah sent Muhammad ﷺ; then the believing faction prevailed. At-Tabari's own reading follows it: Allah strengthened the believers among the Children of Israel through Muhammad's ﷺ confirming that Isa (AS) is the servant of Allah and His Messenger. Ibrahim, in at-Tabari, says their proof became manifest. The Muyassar and Ibn Kathir also place the victory at the sending of Muhammad ﷺ. Ma'arif al-Qur'an, from Mazhari, reads those who believed as the followers of Isa (AS), triumphing through the Final Messenger ﷺ.",
            "bn": "ইবন আব্বাস (রাঃ)-এর বর্ণনায় কুফরি করা দুই দল মুমিন দলটিকে পরাস্ত করে। আল্লাহ মুহাম্মাদ ﷺ-কে পাঠানো পর্যন্ত ইসলাম চাপা পড়ে থাকে। তারপর মুমিন দলটি বিজয়ী হয়। তাবারীর নিজের ব্যাখ্যাও এ পথে চলে। মুহাম্মাদ ﷺ সাক্ষ্য দিলেন যে ঈসা (আঃ) আল্লাহর বান্দা ও রাসূল, আর এর মাধ্যমেই আল্লাহ বনী ইসরাঈলের মুমিনদের শক্তি দিলেন। তাবারীর বর্ণনায় ইবরাহীম বলেন, তাদের দলিল তখন স্পষ্ট হয়ে উঠল। মুয়াসসার ও ইবন কাসীরও বিজয়টাকে রাখেন মুহাম্মাদ ﷺ-এর আগমনের সময়ে। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, এখানে মুমিন বলতে ঈসা (আঃ)-এর অনুসারীরা, যারা শেষ নবী ﷺ-এর মাধ্যমে বিজয় পেল।"
          },
          {
            "en": "Others keep the victory in the time of Isa (AS). Mujahid, in al-Qurtubi, says they were supported in their own day against those who disbelieved in him. Al-Qurtubi also records a view that the support is for the Muslims now, over the two errant factions, because Isa (AS) did not fight anyone and his companions' religion after him had no fighting. Zayd ibn 'Ali and Qatada say they prevailed by argument and proof. Ma'arif notes, from Ruh al-Ma'ani, that his religion is commonly held to have had no jihad, and allows only that believers may have defended themselves.",
            "bn": "অন্যরা বিজয়টাকে রাখেন ঈসা (আঃ)-এর যুগেই। কুরতুবীর বর্ণনায় মুজাহিদ বলেন, যারা ঈসা (আঃ)-কে অস্বীকার করেছিল, তাদের বিরুদ্ধে মুমিনদের সাহায্য করা হয়েছিল তাদের নিজেদের সময়েই। কুরতুবী আরেকটি মতও আনেন: সাহায্যটা এখনকার মুসলিমদের জন্য, পথভ্রষ্ট দুই দলের বিরুদ্ধে। কারণ ঈসা (আঃ) কারও সঙ্গে যুদ্ধ করেননি, তাঁর পরে তাঁর সঙ্গীদের দীনেও যুদ্ধ ছিল না। যায়দ ইবন আলী ও কাতাদা বলেন, তারা বিজয়ী হয়েছিল যুক্তি ও প্রমাণের জোরে। মাআরিফুল কুরআন রূহুল মাআনীর বরাতে জানায়, প্রচলিত মত হলো তাঁর দীনে জিহাদের বিধান ছিল না। বড়জোর এটুকু সম্ভব যে মুমিনরা আত্মরক্ষা করতে বাধ্য হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Licence Against Anyone",
          "bn": "কারও বিরুদ্ধে ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes two factions in the time of Isa (AS), and what Allah did for the faction that believed. It licenses nothing against any living person or community, whether Christians, Jews or anyone else. Several of the commentators read the victory as the victory of a proof: a testimony to who Isa (AS) truly was, a servant of Allah and His messenger, honoured here as a prophet whose call was answered. And the command it gives the believer is to support, to call and to learn, not to carry an old quarrel into the present.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঈসা (আঃ)-এর যুগের দুই দলের কথা বলে, আর বলে ঈমান আনা দলটির জন্য আল্লাহ কী করেছিলেন। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না, খ্রিস্টান হোক, ইহুদি হোক বা অন্য কেউ। কয়েকজন তাফসীরকার এই বিজয়কে পড়েছেন দলিলের বিজয় হিসেবে। ঈসা (আঃ) আসলে কে ছিলেন, তার সাক্ষ্য: আল্লাহর বান্দা ও রাসূল, এমন এক নবী, যাঁর ডাকে সাড়া মিলেছিল। মুমিনকে আয়াতটি নির্দেশ দেয় সাহায্য করতে, দাওয়াত দিতে আর শিখতে। পুরোনো কোনো বিবাদ বর্তমানে টেনে আনতে নয়।"
          },
          {
            "en": "The surah that began with saying what you do not do ends here, with a question that waits for a deed. Ibn Kathir closes his commentary by saying the community of Muhammad ﷺ will remain upon the truth, prevailing, until Allah's command comes, and he refers to sound hadiths without quoting them here. As-Sa'di closes with an address: so you, community of Muhammad, be supporters of Allah and callers to His religion, and He will help you as He helped those before you, and give you the upper hand over your enemy.",
            "bn": "যে সূরা শুরু হয়েছিল না-করা কথা মুখে বলার তিরস্কার দিয়ে, তা শেষ হলো এমন এক প্রশ্নে, যার জবাব চায় কাজ। ইবন কাসীর তাঁর তাফসীর শেষ করেন এই বলে যে মুহাম্মাদ ﷺ-এর উম্মত আল্লাহর আদেশ আসা পর্যন্ত সত্যের উপর বিজয়ী থাকবে। এ প্রসঙ্গে তিনি সহীহ হাদিসের কথা বলেন, তবে কোনো হাদিস উদ্ধৃত করেন না। সা'দী শেষ করেন সম্বোধন দিয়ে: হে মুহাম্মাদের উম্মত, তোমরা আল্লাহর সাহায্যকারী হও, তাঁর দীনের দাঈ হও। তিনি তোমাদের সাহায্য করবেন, যেমন সাহায্য করেছিলেন তোমাদের পূর্ববর্তীদের, আর শত্রুর উপর তোমাদের বিজয়ী করবেন।"
          }
        ]
      }
    ]
  }
});
