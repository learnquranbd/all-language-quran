/**
 * Tadabbur long-form articles — surah 48.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "48:4": {
    "sections": [
      {
        "h": {
          "en": "A Treaty Named a Conquest",
          "bn": "যে চুক্তির নাম বিজয়"
        },
        "p": [
          {
            "en": "Huwa alladhi anzala as-sakinata fi qulubi al-mu'minin: it is He who sent down the sakinah into the hearts of the believers, that they might increase in faith along with their faith. Before it, 48:1 announces a clear conquest given to the Prophet ﷺ; 48:2 adds forgiveness, a completed favour and guidance; 48:3 promises a mighty aid. Ma'arif al-Qur'an marks the turn here: the first three verses speak of favours to the Prophet ﷺ, and verses 4 to 7 of favours to those who were with him.",
            "bn": "হুওয়াল্লাযী আনযালাস সাকীনাতা ফী কুলূবিল মু'মিনীন: তিনিই মু'মিনদের অন্তরে সাকীনা নাযিল করেছেন, যাতে তাদের ঈমানের সঙ্গে ঈমান আরও বাড়ে। এর আগে ৪৮:১ নবী ﷺ-কে দেওয়া স্পষ্ট বিজয়ের ঘোষণা দেয়। ৪৮:২ তার সঙ্গে যোগ করে মাগফিরাত, পূর্ণ নি'মাত আর হিদায়াত। ৪৮:৩ প্রবল সাহায্যের কথা দেয়। মাআরিফুল কুরআন এখানে মোড়টা চিনিয়ে দেয়। প্রথম তিনটি আয়াতে নবী ﷺ-এর প্রতি অনুগ্রহের কথা, আর ৪ থেকে ৭ নম্বর আয়াতে তাঁর সঙ্গীদের প্রতি অনুগ্রহের কথা।"
          },
          {
            "en": "The commentaries that name the setting agree. Al-Muyassar places the sending down on the day of al-Hudaybiyyah: the hearts became still, and certainty took root in them. Ibn Kathir names the Companions of that day, who answered Allah and His Messenger and submitted to their ruling. Al-Baghawi cites al-Kalbi: this concerns Hudaybiyyah, when Allah confirmed His Messenger's vision in truth, the opening words of 48:27. As-Sa'di names what they carried: conditions agreed with the polytheists that outwardly looked like a humiliation, terms souls can hardly bear.",
            "bn": "যেসব তাফসীর প্রেক্ষাপটের কথা বলে, সেগুলো এ ব্যাপারে একমত। মুয়াসসার বলে, সাকীনা নেমেছিল হুদাইবিয়ার দিনে। অন্তরগুলো স্থির হয়েছিল, ইয়াকীন সেখানে শিকড় গেড়েছিল। ইবন কাসীর বলেন সেদিনের সাহাবীদের (রাঃ) কথা, যাঁরা আল্লাহ ও তাঁর রাসূলের ডাকে সাড়া দিয়েছিলেন এবং তাঁদের ফয়সালা মাথা পেতে নিয়েছিলেন। বাগাভী কালবী থেকে আনেন: এ আয়াত হুদাইবিয়া নিয়ে, যখন আল্লাহ তাঁর রাসূলের স্বপ্নকে সত্য করে দেখালেন। কথাগুলো ৪৮:২৭-এর শুরুর অংশ। তাঁদের কী বইতে হয়েছিল, সা'দী তা বলেন। মুশরিকদের সঙ্গে এমন শর্ত ঠিক হয়েছিল, যা বাইরে থেকে অপমানের মতো দেখাত। এমন শর্তে মন সহজে ধৈর্য ধরতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Was It Truly a Victory?",
          "bn": "সত্যিই কি এটা বিজয়?"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, but two narrations in Sahih al-Bukhari, the collection al-Bukhari limited to reports he judged sound, bear on its setting. In the first (3182), Abu Wa'il recalls Sahl ibn Hunayf at Siffin telling the people to blame themselves: at Hudaybiyyah, had they been called to fight, they would have fought. Then he told them what 'Umar had said that day.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। তবে সহীহ বুখারীর দুটি বর্ণনা এর প্রেক্ষাপটের সঙ্গে জড়িত। বুখারী এ গ্রন্থে কেবল সেসব বর্ণনাই রেখেছেন, যেগুলোকে তিনি সহীহ মনে করেছেন। প্রথমটিতে (৩১৮২) আবু ওয়াইল জানান, সিফফীনে সাহল ইবন হুনাইফ (রাঃ) লোকদের বলেছিলেন, নিজেদের দোষ খোঁজো। হুদাইবিয়ার দিন লড়াইয়ের ডাক পেলে তাঁরা লড়তেন। তারপর তিনি শোনান, উমর (রাঃ) সেদিন কী বলেছিলেন।"
          },
          {
            "en": "This portion of the longer narration reads, in its English rendering: \"'Umar bin al-Khattab came and said, 'O Allah's Messenger ﷺ! Aren't we in the right and our opponents in the wrong?' Allah's Messenger ﷺ said, 'Yes.' 'Umar said, 'Aren't our killed persons in Paradise and theirs in Hell?' He said, 'Yes.' 'Umar said, 'Then why should we accept hard terms in matters concerning our religion? Shall we return before Allah judges between us and them?' Allah's Messenger ﷺ said, 'O Ibn al-Khattab! I am the Messenger of Allah and Allah will never degrade me.'\"",
            "bn": "দীর্ঘ বর্ণনাটির এই অংশে আছে: উমর ইবনুল খাত্তাব (রাঃ) এসে বললেন, হে আল্লাহর রাসূল, আমরা কি হকের উপর নই, আর তারা কি বাতিলের উপর নয়? রাসূলুল্লাহ ﷺ বললেন, অবশ্যই। উমর (রাঃ) বললেন, আমাদের নিহতরা কি জান্নাতে নয়, আর তাদের নিহতরা জাহান্নামে? তিনি বললেন, অবশ্যই। উমর (রাঃ) বললেন, তাহলে দ্বীনের ব্যাপারে আমরা এমন হীন শর্ত মেনে নেব কেন? আল্লাহ আমাদের আর তাদের মধ্যে ফয়সালা করার আগেই কি ফিরে যাব? রাসূলুল্লাহ ﷺ বললেন, হে ইবনুল খাত্তাব, আমি আল্লাহর রাসূল, আর আল্লাহ কখনো আমাকে ব্যর্থ হতে দেবেন না।"
          },
          {
            "en": "It goes on: 'Umar went to Abu Bakr, who gave him the same answer. \"Then Surat al-Fath was revealed and Allah's Messenger ﷺ recited it to the end in front of 'Umar. On that 'Umar asked, 'O Allah's Messenger ﷺ! Was it a victory?' Allah's Messenger ﷺ said, 'Yes.'\" The report concerns the surah as a whole, not this verse alone. It is given here as the narration gives it: the questions are 'Umar's, and the blame is Sahl's own words to his hearers.",
            "bn": "বর্ণনা এগিয়ে চলে। উমর (রাঃ) আবু বকর (রাঃ)-এর কাছে গেলেন, তিনিও একই জবাব দিলেন। এরপর সূরা ফাতহ নাযিল হলো, আর রাসূলুল্লাহ ﷺ উমর (রাঃ)-কে সূরাটি শেষ পর্যন্ত পড়ে শোনালেন। উমর (রাঃ) জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, এটা কি বিজয়? তিনি বললেন, হ্যাঁ। বর্ণনাটি গোটা সূরা নিয়ে, শুধু এ আয়াত নিয়ে নয়। এখানে তা রাখা হলো যেভাবে বর্ণনায় এসেছে। প্রশ্নগুলো উমর (রাঃ)-এর, আর নিজেদের দোষ খোঁজার কথাটা সাহল (রাঃ)-এর, তাঁর শ্রোতাদের উদ্দেশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Stillness, Mercy, Gravity",
          "bn": "স্থিরতা, রহমত, গাম্ভীর্য"
        },
        "p": [
          {
            "en": "The commentaries give several words for sakinah. Ibn Kathir explains anzala as-sakinah as \"made tranquillity\", ja'ala at-tuma'ninah, a saying of Ibn 'Abbas, from whom mercy, ar-rahmah, is also reported. At-Tabari gives that second report with its chain, through 'Ali ibn Abi Talhah: as-sakinah is mercy. Ibn Kathir then cites Qatadah: al-waqar, gravity or composure, in the hearts of the believers. The abridged English Ibn Kathir renders Qatadah's word as grace; the Arabic has waqar.",
            "bn": "সাকীনার অর্থ বোঝাতে তাফসীরগুলো কয়েকটি শব্দ আনে। ইবন কাসীর আনযালাস সাকীনার ব্যাখ্যা দেন 'প্রশান্তি দান করলেন' বলে, আর জানান এটা ইবন আব্বাস (রাঃ)-এর কথা। ইবন আব্বাস (রাঃ) থেকে এর অর্থ রহমতও বর্ণিত। তাবারী এই দ্বিতীয় বর্ণনাটি সনদসহ আনেন আলী ইবন আবী তালহার সূত্রে: সাকীনা মানে রহমত। এরপর ইবন কাসীর কাতাদার কথা আনেন: মু'মিনদের অন্তরে ওয়াকার, অর্থাৎ গাম্ভীর্য ও স্থিরতা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে কাতাদার শব্দটির অনুবাদ grace, অথচ আরবিতে আছে ওয়াকার।"
          },
          {
            "en": "At-Tabari's own reading is that Allah sent down stillness and tranquillity, as-sukun wa-t-tuma'ninah, into the hearts of those who believe in Allah and His Messenger. He notes that the disagreement over what sakinah means, with the correct view and its evidence, was set out earlier in his work, and he declines to repeat it here. Al-Qurtubi gives the same pair, stillness and tranquillity. Al-Baghawi gives tranquillity and gravity, so that their souls would not be alarmed by what came upon them.",
            "bn": "তাবারীর নিজের ব্যাখ্যা হলো, যারা আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান এনেছে, আল্লাহ তাদের অন্তরে সুকূন ও তুমা'নীনা, অর্থাৎ স্থিরতা ও প্রশান্তি নাযিল করেছেন। তিনি জানান, সাকীনার অর্থ নিয়ে মতভেদ আর তার মধ্যে সঠিক মত, প্রমাণসহ, তাঁর গ্রন্থে আগেই আলোচিত হয়েছে, তাই এখানে আর পুনরাবৃত্তি করেন না। কুরতুবীও একই জোড়া দেন: স্থিরতা ও প্রশান্তি। বাগাভী বলেন প্রশান্তি ও গাম্ভীর্য, যাতে যা কিছু তাদের উপর এসে পড়ে, তাতে তাদের মন অস্থির না হয়।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report a general rule from Ibn 'Abbas: every sakinah in the Qur'an is tranquillity except the one in al-Baqarah. That surah uses the word only at 2:248, where the ark comes to the people with a sakinah from their Lord in it, as the sign of a king's authority. Neither commentator says here what the word means there instead, and this article does not guess. For the verse at hand, the rule and the glosses meet: tranquillity, with mercy and gravity beside it.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই ইবন আব্বাস (রাঃ) থেকে একটি সাধারণ নিয়ম বর্ণনা করেন: কুরআনে যত জায়গায় সাকীনা এসেছে, সবখানে অর্থ প্রশান্তি, শুধু সূরা বাকারারটি ছাড়া। ওই সূরায় শব্দটি আছে কেবল ২:২৪৮-এ। সেখানে এক বাদশাহর কর্তৃত্বের নিদর্শন হিসেবে সিন্দুক আসে, যার ভেতরে তাদের রবের পক্ষ থেকে সাকীনা। সেখানে তাহলে অর্থ কী, দুই তাফসীরকারের কেউ এখানে তা বলেননি। এ লেখাও অনুমান করবে না। আমাদের আয়াতের বেলায় নিয়ম আর ব্যাখ্যাগুলো এক জায়গায় মেলে: প্রশান্তি, সঙ্গে রহমত আর গাম্ভীর্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Heart Bound Firm",
          "bn": "বেঁধে রাখা অন্তর"
        },
        "p": [
          {
            "en": "As-Sa'di widens the word. Sakinah, he says, is stillness, tranquillity and steadfastness, ath-thabat, when distressing trials descend, the kind that unsettle hearts, disturb minds and weaken souls. Among Allah's favours to His servant then is that He makes him firm, binds his heart and sends sakinah down upon him. The servant meets those hardships with a steady heart and a settled soul, ready to carry out Allah's command in that very state, and so his faith increases and his certainty becomes complete.",
            "bn": "সা'দী শব্দটির পরিধি বাড়ান। তাঁর মতে সাকীনা হলো স্থিরতা, প্রশান্তি আর সাবাত বা অটলতা, যখন অস্থির করে দেওয়া পরীক্ষা নেমে আসে। এমন পরীক্ষা অন্তরকে এলোমেলো করে, বুদ্ধিকে ঘাবড়ে দেয়, মনকে দুর্বল করে ফেলে। সে সময় বান্দার প্রতি আল্লাহর অনুগ্রহ হলো, তিনি তাকে অবিচল রাখেন, তার অন্তর বেঁধে দেন, তার উপর সাকীনা নাযিল করেন। তখন বান্দা ওই কষ্টগুলোর মুখোমুখি হয় স্থির অন্তর আর শান্ত মন নিয়ে, আর সেই অবস্থাতেই আল্লাহর হুকুম পালনে প্রস্তুত থাকে। এভাবেই তার ঈমান বাড়ে আর ইয়াকীন পূর্ণ হয়।"
          },
          {
            "en": "He applies this to the Companions: when the terms went as they did, and they bore them with patience and resolved themselves to them, they increased in faith along with their faith. Ibn Kathir has the same sequence: when their hearts were at rest with it and settled, Allah increased their faith. In neither account does the treaty change. The hard terms come first, then the acceptance, then the increase: a change inside the people, not in the paper they had signed.",
            "bn": "তারপর তিনি কথাটা সাহাবীদের (রাঃ) উপর প্রয়োগ করেন। রাসূল ﷺ আর মুশরিকদের মধ্যে যে শর্তগুলো ঠিক হওয়ার, তা ঠিক হয়ে গেল। তাঁরা সেগুলোর উপর সবর করলেন, মনকে সেগুলোর জন্য তৈরি করে নিলেন, আর তাতেই তাঁদের ঈমানের সঙ্গে ঈমান বাড়ল। ইবন কাসীরের বর্ণনাতেও একই ক্রম। যখন তাঁদের অন্তর তাতে প্রশান্ত ও স্থির হলো, আল্লাহ তাঁদের ঈমান বাড়িয়ে দিলেন। দুই বর্ণনার কোনোটিতেই চুক্তি বদলায় না। আগে কঠিন শর্ত, তারপর মেনে নেওয়া, তারপর বৃদ্ধি। বদলটা মানুষের ভেতরে, সই করা কাগজে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Duty Laid Upon Another",
          "bn": "এক ফরযের উপর আরেক ফরয"
        },
        "p": [
          {
            "en": "Li-yazdadu imanan ma'a imanihim: that they might increase in faith along with their faith. At-Tabari reads the increase through obligations: they would add faith in the duties Allah newly laid on them, which had not been binding before, to their faith in the duties already binding. He says the people of interpretation said the same, and supports it with a report from Ibn 'Abbas through 'Ali ibn Abi Talhah, the chain that gave mercy as the meaning of sakinah.",
            "bn": "লিয়াযদাদূ ঈমানান মা'আ ঈমানিহিম: যাতে তাদের ঈমানের সঙ্গে ঈমান আরও বাড়ে। তাবারী এই বৃদ্ধিকে ফরযের আলোকে পড়েন। তাঁর ব্যাখ্যায়, আল্লাহ নতুন যেসব ফরয তাদের উপর চাপালেন, যা আগে তাদের উপর বাধ্যতামূলক ছিল না, সেগুলোর প্রতি বিশ্বাস তারা যোগ করবে আগের ফরযগুলোর প্রতি বিশ্বাসের সঙ্গে। তিনি জানান, তাফসীরবিদরাও এমনই বলেছেন। প্রমাণ হিসেবে আনেন ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা, আলী ইবন আবী তালহার সেই সূত্রেই, যে সূত্রে সাকীনার অর্থ রহমত এসেছিল।"
          },
          {
            "en": "In it, Ibn 'Abbas says that Allah sent His Prophet Muhammad ﷺ with the testimony that there is no god but Allah. When they affirmed it, He added the prayer; then fasting; then zakat; then the pilgrimage. Then He completed their religion, saying: \"This day I have perfected for you your religion and completed My favour upon you\", words from 5:3. Ibn 'Abbas closes by saying that the firmest, truest and most complete faith of the people of the earth and the heavens is that testimony.",
            "bn": "তাবারীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে পাঠালেন লা ইলাহা ইল্লাল্লাহর সাক্ষ্য দিয়ে। মানুষ যখন তা মেনে নিল, তিনি যোগ করলেন সালাত। সেটা মেনে নিলে সিয়াম, তারপর যাকাত, তারপর হজ্জ। এরপর তিনি তাদের দ্বীন পূর্ণ করলেন এবং বললেন: আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করলাম আর তোমাদের উপর আমার নি'মাত সম্পূর্ণ করলাম। কথাগুলো ৫:৩-এর। বর্ণনার শেষে ইবন আব্বাস (রাঃ) বলেন, আসমান ও যমীনের অধিবাসীদের ঈমানের মধ্যে সবচেয়ে মজবুত, সবচেয়ে সত্য ও সবচেয়ে পূর্ণ হলো লা ইলাহা ইল্লাল্লাহর সাক্ষ্য।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi give the report from Ibn 'Abbas with the duties in a different order. Al-Qurtubi has prayer, zakat, fasting, then the pilgrimage, and glosses the verse as affirming the laws of faith along with faith itself. Al-Baghawi has prayer, zakat, fasting, the pilgrimage, then jihad, until He completed their religion; each command affirmed added affirmation to affirmation. The three tellings share the shape, one command accepted and then another, and differ on the order. The article records the variants and builds no chronology from them.",
            "bn": "কুরতুবী ও বাগাভীও ইবন আব্বাস (রাঃ) থেকে বর্ণনাটি আনেন, তবে ফরযগুলোর ক্রম ভিন্ন। কুরতুবীর বর্ণনায় সালাত, যাকাত, সিয়াম, তারপর হজ্জ। তিনি আয়াতের ব্যাখ্যা দেন এভাবে: ঈমানের প্রতি বিশ্বাসের সঙ্গে ঈমানের বিধানগুলোর প্রতি বিশ্বাস। বাগাভীর বর্ণনায় সালাত, যাকাত, সিয়াম, হজ্জ, তারপর জিহাদ, যতক্ষণ না তিনি তাদের দ্বীন পূর্ণ করলেন। যখনই কোনো হুকুম এল আর তারা তা মেনে নিল, বিশ্বাসের উপর বিশ্বাস বাড়ল। তিনটি বর্ণনাই কাঠামোয় এক: একটি হুকুম মানা, তারপর আরেকটি। পার্থক্য কেবল ক্রমে। এ লেখা ভিন্নতাগুলো যেমন আছে তেমন রাখল, এগুলো থেকে কোনো সময়ক্রম দাঁড় করাল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear, Certainty and Following",
          "bn": "ভয়, ইয়াকীন আর অনুসরণ"
        },
        "p": [
          {
            "en": "The files name other things that grow as well. Al-Qurtubi reports ar-Rabi' ibn Anas: fear with their fear, khashyatan ma'a khashyatihim. He and al-Baghawi both report ad-Dahhak: certainty with their certainty. Al-Muyassar speaks of affirming Allah and following His Messenger, added to the affirming and following they already had. Across the files the verse's iman is filled in four ways: duties accepted, fear of Allah, certainty, and following the Messenger ﷺ. No commentator sets his reading against another's; they stand side by side.",
            "bn": "তাফসীরগুলোতে বৃদ্ধির আরও কিছু রূপের কথা আছে। কুরতুবী রাবী' ইবন আনাসের কথা আনেন: তাদের ভয়ের সঙ্গে আরও ভয়, অর্থাৎ আল্লাহভীতি। কুরতুবী ও বাগাভী দুজনেই দাহহাকের কথা আনেন: তাদের ইয়াকীনের সঙ্গে আরও ইয়াকীন। মুয়াসসার বলে আল্লাহকে সত্য বলে মানা আর তাঁর রাসূলকে অনুসরণ করার কথা, যা আগে থেকেই ছিল তার সঙ্গে আরও যোগ হওয়া। এভাবে তাফসীরগুলোতে আয়াতের ঈমান শব্দটি চারটি রূপে ধরা পড়ে: ফরয মেনে নেওয়া, আল্লাহর ভয়, ইয়াকীন আর রাসূল ﷺ-এর অনুসরণ। কোনো তাফসীরকার নিজের ব্যাখ্যাকে অন্যের বিপরীতে দাঁড় করাননি। ব্যাখ্যাগুলো পাশাপাশি থাকে।"
          },
          {
            "en": "Ibn Kathir adds how the verse was used. Al-Bukhari and other imams, he says, took it as evidence for tafadul al-iman fi al-qulub, that faith differs in degree in the hearts; the abridged English Ibn Kathir renders this as proof that faith increases and decreases. The article reports that use as Ibn Kathir gives it and goes no further into the debates around it. The verse's own wording is plain enough: imanan ma'a imanihim, faith added to the faith the believers already held.",
            "bn": "আয়াতটি কীভাবে প্রমাণ হিসেবে ব্যবহৃত হয়েছে, ইবন কাসীর তা জানান। তাঁর ভাষায়, বুখারী ও অন্য ইমামগণ এ আয়াত দিয়ে প্রমাণ করেছেন যে অন্তরে অন্তরে ঈমানের মাত্রায় তারতম্য আছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ কথাটিকে বলেছে, ঈমান বাড়ে ও কমে। ইবন কাসীর যেভাবে এই ব্যবহারের কথা বলেছেন, এ লেখা সেভাবেই তা জানাল, এর চারপাশের বিতর্কে আর গেল না। আয়াতের নিজের শব্দই যথেষ্ট স্পষ্ট: ঈমানান মা'আ ঈমানিহিম, মু'মিনদের কাছে আগে থেকে থাকা ঈমানের সঙ্গে আরও ঈমান।"
          }
        ]
      },
      {
        "h": {
          "en": "Hosts Held in Reserve",
          "bn": "যে বাহিনী অপেক্ষায় থাকে"
        },
        "p": [
          {
            "en": "Wa lillahi junudu as-samawati wal-ard: and to Allah belong the hosts of the heavens and the earth. Al-Qurtubi reports Ibn 'Abbas naming them: the angels, the jinn, the devils and humankind. As-Sa'di gives the scope: all of them are in His dominion, under His management and subjugation. At-Tabari and al-Muyassar point their use two ways: at-Tabari, helpers through whom He takes vengeance on whomever He wills of His enemies; al-Muyassar, hosts through whom He aids His believing servants.",
            "bn": "ওয়া লিল্লাহি জুনূদুস সামাওয়াতি ওয়াল আরদ: আসমান ও যমীনের বাহিনীসমূহ আল্লাহরই। কুরতুবী ইবন আব্বাস (রাঃ) থেকে তাদের নাম আনেন: ফেরেশতা, জিন, শয়তান আর মানুষ। সা'দী তালিকা না দিয়ে পরিধিটা বলেন: সবাই তাঁর রাজত্বে, তাঁর পরিচালনায় আর তাঁর পরাক্রমের অধীনে। তাবারী ও মুয়াসসার এই বাহিনীর কাজকে দেখেন দুই দিক থেকে। তাবারীর মতে তারা এমন সাহায্যকারী, যাদের দিয়ে তিনি শত্রুদের মধ্যে যাকে চান তার থেকে প্রতিশোধ নেন। মুয়াসসার বলে, তাদের দিয়ে তিনি তাঁর মু'মিন বান্দাদের সাহায্য করেন।"
          },
          {
            "en": "Why mention armies straight after a treaty? Ibn Kathir answers: had Allah willed, He would have taken victory over the disbelievers, and a single angel sent against them would have wiped them out. But He prescribed striving and fighting for His believing servants, for the far-reaching wisdom, decisive proof and conclusive evidence He has in that; and so He said: and Allah is ever Knowing, Wise. As-Sa'di reads it as a warning: let the polytheists not think that Allah will not aid His religion and His Prophet.",
            "bn": "চুক্তির কথার ঠিক পরেই বাহিনীর কথা কেন? ইবন কাসীর জবাব দেন। আল্লাহ বলছেন, তিনি চাইলে কাফিরদের উপর নিজেই জয়ী হতেন। তাদের বিরুদ্ধে একজন ফেরেশতা পাঠালেই তাদের নিশ্চিহ্ন করে দিতে পারত। কিন্তু তিনি তাঁর মু'মিন বান্দাদের জন্য জিহাদ ও লড়াইয়ের বিধান দিয়েছেন, কারণ তাতে তাঁর গভীর হিকমত, অকাট্য যুক্তি আর অখণ্ডনীয় প্রমাণ আছে। সেজন্যই বলেছেন, আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময়। সা'দী কথাটিকে সতর্কবাণী হিসেবে পড়েন: মুশরিকরা যেন না ভাবে, আল্লাহ তাঁর দ্বীন ও নবীকে সাহায্য করবেন না।"
          },
          {
            "en": "As-Sa'di continues: His wisdom requires that days pass in turn among people, and that the believers' victory be deferred to another time. On 'Aliman Hakima, at-Tabari says Allah has ever known what will be before it comes to be, and what His creation will do, and is wise in His management; al-Qurtubi, that He knows the states of His creation. 48:7 repeats the sentence about the hosts, closing with 'Azizan Hakima, Mighty and Wise. 9:40, on the cave, also speaks of unseen hosts; it has its own article.",
            "bn": "সা'দী আরও বলেন, তাঁর হিকমতের দাবি হলো, মানুষের মধ্যে দিনগুলো পালাক্রমে ঘোরে, আর মু'মিনদের বিজয় পিছিয়ে যায় অন্য কোনো সময়ে। আলীমান হাকীমা প্রসঙ্গে তাবারী বলেন, কী ঘটবে আর তাঁর সৃষ্টি কী করবে, ঘটার আগেই আল্লাহ সবসময় তা জানেন, আর নিজের পরিচালনায় তিনি প্রজ্ঞাময়। কুরতুবী বলেন, তিনি সৃষ্টির অবস্থা জানেন। ৪৮:৭ বাহিনীর বাক্যটি আবার বলে, শেষ করে আযীযান হাকীমা দিয়ে, মহাপরাক্রমশালী ও প্রজ্ঞাময়। গুহার ঘটনা নিয়ে ৯:৪০-ও না-দেখা বাহিনীর কথা বলে। সে আয়াত নিয়ে আলাদা লেখা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And What Is There for Us?",
          "bn": "আর আমাদের জন্য কী?"
        },
        "p": [
          {
            "en": "The second narration is Sahih al-Bukhari 4172, quoted whole: \"Narrated Anas bin Malik: regarding Allah's Statement: 'Verily! We have granted you (O, Muhammad) Manifest victory.' (48:1) It refers to the Al-Hudaibiya Pledge. And the companions of the Prophet ﷺ said (to the Prophet), 'Congratulations and happiness for you; but what reward shall we get?' So Allah revealed: 'That He may admit the believing men and women to gardens beneath which rivers flow.' (48:5)\" The Arabic ends with Shu'bah's note: Qatadah gave the explanation of 48:1 from Anas, the congratulation from 'Ikrimah.",
            "bn": "দ্বিতীয় বর্ণনাটি সহীহ বুখারীর ৪১৭২, পুরোটা এই: আনাস ইবন মালিক (রাঃ) থেকে বর্ণিত, ইন্না ফাতাহনা লাকা ফাতহান মুবীনা (৪৮:১) সম্পর্কে তিনি বলেন, এ হলো হুদাইবিয়া। নবী ﷺ-এর সাহাবীগণ বললেন, আপনার জন্য মুবারক হোক, শুভ হোক, কিন্তু আমাদের জন্য কী? তখন আল্লাহ নাযিল করলেন: যাতে তিনি মু'মিন পুরুষ ও মু'মিন নারীদের এমন জান্নাতে প্রবেশ করান, যার তলদেশে নদী বয়ে চলে (৪৮:৫)। আরবি পাঠের শেষে শু'বার একটি টীকা আছে। কাতাদা তাঁকে বলেছিলেন, ৪৮:১-এর ব্যাখ্যাটি আনাস (রাঃ) থেকে, আর মুবারকবাদের অংশটি ইকরিমা থেকে।"
          },
          {
            "en": "Ibn Kathir refers to this report under 48:5. Ma'arif al-Qur'an tells the question more widely: some at Hudaybiyyah congratulated the Prophet ﷺ and asked what there was for them, and verses 4 to 7 came in reply, naming Allah's favours on those present and at the Pledge of Ridwan. These came, it says, through their faith in and obedience to the Prophet ﷺ, and every believer whose faith and obedience are complete will receive the like. On that reading, before the gardens of 48:5 comes the calm.",
            "bn": "ইবন কাসীর ৪৮:৫-এর আলোচনায় এই বর্ণনার উল্লেখ করেন। মাআরিফুল কুরআন একই প্রশ্নের কথা বলে আরও বড় পরিসরে। হুদাইবিয়ায় উপস্থিত কয়েকজন নবী ﷺ-কে মুবারকবাদ দিয়ে জানতে চেয়েছিলেন, তাঁদের জন্য কী আছে। তার জবাবে ৪ থেকে ৭ নম্বর আয়াত নাযিল হয়, যেখানে সেদিন উপস্থিতদের আর বাই'আতে রিদওয়ানে অংশ নেওয়াদের প্রতি আল্লাহর অনুগ্রহের কথা। মাআরিফুল কুরআন বলে, এ অনুগ্রহ এসেছিল নবী ﷺ-এর প্রতি তাঁদের ঈমান ও আনুগত্যের কারণে। যার ঈমান ও আনুগত্য পূর্ণ, এমন প্রত্যেক মু'মিন একই রকম অনুগ্রহ পাবে। এ পাঠ অনুযায়ী ৪৮:৫-এর জান্নাতের আগে আসে প্রশান্তি।"
          },
          {
            "en": "48:6 then turns to the hypocrites and polytheists, men and women, who think evil of Allah; Ibn Kathir says they questioned the wisdom of His decisions and thought the Messenger and his Companions would be killed. The verse describes them as the text does and licenses nothing against any living person or community. Further on, 48:8 names the Prophet ﷺ witness, bringer of good news and warner; 48:17 and 48:18 record Allah's pleasure with those who pledged under the tree; 48:29 describes Muhammad ﷺ and those with him.",
            "bn": "এরপর ৪৮:৬ বলে মুনাফিক ও মুশরিক নারী-পুরুষদের কথা, যারা আল্লাহ সম্পর্কে মন্দ ধারণা পোষণ করে। ইবন কাসীর বলেন, তারা আল্লাহর ফয়সালার হিকমত নিয়ে প্রশ্ন তুলত আর ভাবত, রাসূল ও তাঁর সাহাবীরা নিহত হবেন। আয়াতটি কেবল সেই লোকদের বর্ণনা দেয়, যেভাবে কুরআন তাদের বর্ণনা করেছে। আজকের কোনো ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। সামনে ৪৮:৮ নবী ﷺ-কে সাক্ষী, সুসংবাদদাতা ও সতর্ককারী বলে। ৪৮:১৭ ও ৪৮:১৮ গাছের নিচে বাই'আতকারীদের প্রতি আল্লাহর সন্তুষ্টির কথা জানায়। ৪৮:২৯ মুহাম্মাদ ﷺ ও তাঁর সঙ্গীদের পরিচয় তুলে ধরে।"
          }
        ]
      }
    ]
  },
  "48:8": {
    "sections": [
      {
        "h": {
          "en": "After the Armies, a Messenger",
          "bn": "বাহিনীর কথার পর একজন রাসূল"
        },
        "p": [
          {
            "en": "The verse before this one closes a refrain heard twice in the surah's opening: to Allah belong the armies of the heavens and the earth, and Allah is Mighty and Wise (48:7). Then the speech turns, with no call and no pause: inna arsalnaka shahidan wa mubashshiran wa nadhira, We have sent you as a witness, a bringer of good tidings and a warner. It is five words in Arabic. The One to whom every army belongs names, in the next breath, the man He sent and what He sent him as.",
            "bn": "এর আগের আয়াতে সূরার শুরুর দিকের একটি কথা দ্বিতীয়বার এসেছে: আসমান ও জমিনের সব বাহিনী আল্লাহর, আর আল্লাহ মহাপরাক্রমশালী, প্রজ্ঞাময় (৪৮:৭)। এরপর কোনো সম্বোধন বা বিরতি ছাড়াই কথার মোড় ঘোরে: ইন্না আরসালনাকা শাহিদান ওয়া মুবাশশিরান ওয়া নাযীরা। আমি তোমাকে পাঠিয়েছি সাক্ষী, সুসংবাদদাতা ও সতর্ককারী করে। আরবিতে মাত্র পাঁচটি শব্দ। সব বাহিনী যাঁর, তিনিই পরের নিঃশ্বাসে জানিয়ে দেন কাকে পাঠিয়েছেন আর কী পরিচয়ে পাঠিয়েছেন।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the turn as deliberate. The preceding verses, it says, spoke of the favours Allah bestowed on the Prophet ﷺ and his community, especially on those who joined the pledge of Ridwan. The Bestower is Allah and the medium is the Prophet ﷺ, so this set of verses establishes his right and the community's duty to honour him, and it begins with three attributes. Ibn Kathir, commenting on 48:10, places that pledge under a tree at al-Hudaybiyyah. So the verse stands between the promise of 48:5, the threat of 48:6 and the pledge that follows.",
            "bn": "মাআরিফুল কুরআনের মতে এই মোড় ঘোরানো উদ্দেশ্যমূলক। আগের আয়াতগুলোতে নবী ﷺ ও তাঁর উম্মাহর উপর আল্লাহর অনুগ্রহের কথা এসেছে, বিশেষ করে যারা বাইআতে রিদওয়ানে শরিক ছিলেন তাদের উপর। অনুগ্রহ দেন আল্লাহ, আর মাধ্যম হলেন নবী ﷺ। তাই এই আয়াতগুলো তাঁর হক এবং তাঁকে সম্মান করার ব্যাপারে উম্মাহর দায়িত্ব প্রতিষ্ঠা করে, আর শুরু হয় তাঁর তিনটি গুণ দিয়ে। ইবন কাসীর ৪৮:১০ আয়াতের আলোচনায় এই বাইআতের জায়গা বলেন হুদাইবিয়ার একটি গাছের নিচে। ফলে আয়াতটির এক পাশে ৪৮:৫ আয়াতের প্রতিশ্রুতি আর ৪৮:৬ আয়াতের হুঁশিয়ারি, অন্য পাশে পরের বাইআত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Words, Unaddressed",
          "bn": "একই শব্দ, সম্বোধন ছাড়া"
        },
        "p": [
          {
            "en": "Ibn Kathir keeps his note on this verse short and sends the reader elsewhere: its explanation, he says, has already been given in Surat al-Ahzab. The words are indeed the same. At 33:45 they come after a call, ya ayyuha an-nabiyy, O Prophet; here at 48:8 there is no call at all, only the pronoun of the one sent. Al-Baghawi, at this point, sets the verse down and adds nothing to it, so he is not quoted below. The other commentators do something worth noticing: they supply the address the verse leaves unspoken.",
            "bn": "ইবন কাসীর এ আয়াতে খুব সংক্ষেপে কথা শেষ করে পাঠককে অন্য জায়গায় পাঠিয়ে দেন। তিনি বলেন, এর ব্যাখ্যা সূরা আহযাবে আগেই দেওয়া হয়েছে। শব্দগুলো আসলেই হুবহু এক। ৩৩:৪৫ আয়াতে সেগুলো আসে একটি সম্বোধনের পরে: ইয়া আইয়ুহান নাবিয়্যু, হে নবী। আর এখানে ৪৮:৮ আয়াতে কোনো সম্বোধনই নেই, আছে শুধু যাঁকে পাঠানো হয়েছে তাঁর সর্বনাম। বাগাভী এখানে আয়াতটি উল্লেখ করেই থেমে যান, কিছু যোগ করেন না। তাই নিচে তাঁর উদ্ধৃতি নেই। বাকি তাফসীরকারেরা লক্ষ করার মতো একটা কাজ করেন: আয়াত যে সম্বোধন উচ্চারণ করেনি, তাঁরা নিজেরাই তা বসিয়ে দেন।"
          },
          {
            "en": "At-Tabari opens by saying that Allah speaks here to His Prophet Muhammad ﷺ, and he places the name inside the verse itself: We have sent you, O Muhammad. The Muyassar inserts O Messenger after the first words, and as-Sa'di inserts O noble Messenger. Ibn Kathir too frames the verse as Allah's word to His Prophet Muhammad. None of them leaves the you without a face. The verb is in the past, a sending already done, and the three nouns that follow are what he was sent as.",
            "bn": "তাবারী শুরুতেই বলেন, আল্লাহ এখানে তাঁর নবী মুহাম্মাদ ﷺ-এর সঙ্গে কথা বলছেন। নামটা তিনি আয়াতের ভেতরেই বসিয়ে দেন: হে মুহাম্মাদ, আমি তোমাকে পাঠিয়েছি। মুয়াসসার প্রথম শব্দগুলোর পরে যোগ করে, হে রাসূল। সা'দী যোগ করেন, হে সম্মানিত রাসূল। ইবন কাসীরও আয়াতটিকে তাঁর নবী মুহাম্মাদের প্রতি আল্লাহর কথা হিসেবেই উপস্থাপন করেন। তাঁদের কেউই এই তুমিকে চেহারাহীন রাখেননি। ক্রিয়াটি অতীত কালের, অর্থাৎ পাঠানো হয়ে গেছে। পরের তিনটি বিশেষ্য বলে দেয়, তাঁকে কী হিসেবে পাঠানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Witness Over Which Circle?",
          "bn": "কোন পরিসরের সাক্ষী?"
        },
        "p": [
          {
            "en": "The first role is the one the commentators handle most, and they do not draw its circle at the same size. Ibn Kathir gives the widest: shahidan, he writes, means a witness 'ala al-khalq, over the creation. He follows it with the other two roles at the same pace, good tidings to the believers and warning to the disbelievers, and stops there. In his reading the witness stands over everyone the message reached, with no narrower group named.",
            "bn": "প্রথম ভূমিকাটি নিয়েই তাফসীরকারেরা সবচেয়ে বেশি কথা বলেন, কিন্তু এর পরিসর সবাই সমান করে আঁকেন না। সবচেয়ে বড় পরিসর দেন ইবন কাসীর। তাঁর মতে শাহিদান মানে আলাল খালক, সমগ্র সৃষ্টির উপর সাক্ষী। একই গতিতে তিনি বাকি দুটি ভূমিকাও বলে দেন: মুমিনদের জন্য সুসংবাদ, কাফিরদের জন্য সতর্কবাণী। এরপর থেমে যান। তাঁর পাঠে সাক্ষী দাঁড়িয়ে আছেন বার্তা যাদের কাছে পৌঁছেছে তাদের সবার উপর, আলাদা করে ছোট কোনো দলের নাম তিনি নেন না।"
          },
          {
            "en": "At-Tabari draws the circle around the Prophet's ﷺ own community: a witness 'ala ummatika, over your nation, bima ajabuka, as to how they answered you in what you called them to of the message I sent you with. The Muyassar also says over your nation, and names the ground of the witnessing as al-balagh, the conveying, glossing it as making plain to them what We sent you with. Al-Qurtubi opens his entry with the same reading from Qatada: over your nation, by the conveying.",
            "bn": "তাবারী পরিসরটা টানেন নবী ﷺ-এর নিজের উম্মাহকে ঘিরে। তাঁর ভাষায়, আলা উম্মাতিকা, তোমার উম্মাহর উপর সাক্ষী। কীসের সাক্ষী? বিমা আজাবূকা, যে বার্তা দিয়ে আমি তোমাকে পাঠিয়েছি, তার দিকে তুমি ডাকার পর তারা তোমাকে কী জবাব দিয়েছে। মুয়াসসারও বলে উম্মাহর উপর সাক্ষী, আর সাক্ষ্যের ভিত্তি হিসেবে বলে আল-বালাগ, অর্থাৎ পৌঁছে দেওয়া। ব্যাখ্যায় বলে, আমি যা দিয়ে পাঠিয়েছি তা তাদের সামনে স্পষ্ট করে দেওয়া। কুরতুবী তাঁর আলোচনা শুরু করেন কাতাদা থেকে একই পাঠ দিয়ে: উম্মাহর উপর, পৌঁছে দেওয়ার মাধ্যমে।"
          },
          {
            "en": "These are two readings, and the texts let them stand side by side. Ibn Kathir names the creation; at-Tabari, the Muyassar and Qatada as al-Qurtubi reports him name the Prophet's ﷺ nation. None of the commentaries consulted here argues against the other, and this article does not choose between them. What they share is that the witness is defined by what he carried: at-Tabari ties the testimony to a message delivered and the answer it received, and the Muyassar to the delivering itself.",
            "bn": "এ দুটি আলাদা পাঠ, আর তাফসীরের পাঠ্যগুলো দুটিকে পাশাপাশিই রেখেছে। ইবন কাসীর বলেন সমগ্র সৃষ্টির কথা। তাবারী, মুয়াসসার এবং কুরতুবীর বর্ণনায় কাতাদা বলেন নবী ﷺ-এর উম্মাহর কথা। এখানে সংগৃহীত কোনো তাফসীর অন্যটির বিরুদ্ধে যুক্তি দেয়নি, আর এই প্রবন্ধও কোনোটি বেছে নেয় না। দুই পাঠের মিল এক জায়গায়: সাক্ষীর পরিচয় তাঁর বহন করা বার্তা দিয়ে। তাবারী সাক্ষ্যকে বেঁধে দেন পৌঁছে দেওয়া বার্তা আর তার পাওয়া জবাবের সঙ্গে। মুয়াসসার বাঁধে পৌঁছে দেওয়ার কাজটির সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds, Claims and the Oneness",
          "bn": "আমল, দাবি ও তাওহিদের সাক্ষ্য"
        },
        "p": [
          {
            "en": "Al-Qurtubi then lists further readings, each introduced with qila, it was said. A witness over them by their deeds, of obedience or disobedience. Mubayyin, making plain to them what We sent you with. A witness over them on the Day of Resurrection. He then joins two of these rather than choosing: he is the witness of their deeds today, and the shahid over them on the Day of Resurrection. For this meaning he refers the reader back to his comments in Surat an-Nisa, where he reports it from Sa'id ibn Jubayr.",
            "bn": "এরপর কুরতুবী আরও কয়েকটি পাঠ তুলে ধরেন, প্রতিটির শুরুতে কীলা, অর্থাৎ বলা হয়েছে। প্রথমটি: তাদের আমলের সাক্ষী, আনুগত্যের হোক বা নাফরমানির। দ্বিতীয়টি: মুবাইয়িন, আমি যা দিয়ে পাঠিয়েছি তা তাদের সামনে স্পষ্টকারী। তৃতীয়টি: কিয়ামতের দিন তাদের উপর সাক্ষী। তারপর তিনি এর মধ্যে দুটি পাঠকে বেছে না নিয়ে জুড়ে দেন। আজ তিনি তাদের আমলের সাক্ষী, আর কিয়ামতের দিন তিনিই তাদের উপর শাহীদ। এই অর্থের জন্য তিনি পাঠককে সূরা নিসায় তাঁর আগের আলোচনায় ফিরিয়ে দেন, যেখানে তিনি এটি সাঈদ ইবন জুবাইর থেকে বর্ণনা করেছেন।"
          },
          {
            "en": "As-Sa'di widens the object of the witnessing in three directions. The Prophet ﷺ is a witness for his community of what they did, good and evil. He is a witness over sayings and questions, to which of them are true and which false. And he is a witness for Allah, testifying to His oneness and to His being alone in perfection from every aspect. In this reading the witness does not only report on what people did; he also testifies to what is true about Allah, and to which statements hold and which fall.",
            "bn": "সা'দী সাক্ষ্যের বিষয়কে তিনটি দিকে ছড়িয়ে দেন। নবী ﷺ তাঁর উম্মাহর ভালো-মন্দ সব কাজের সাক্ষী। নানা কথা ও মাসআলার মধ্যে কোনটি হক আর কোনটি বাতিল, তিনি তারও সাক্ষী। আর তিনি আল্লাহর পক্ষে সাক্ষী, তাঁর একত্বের এবং সব দিক থেকে পূর্ণতায় তাঁর একক হওয়ার। এ পাঠে সাক্ষী শুধু মানুষের কাজের খবরই দেন না। আল্লাহ সম্পর্কে যা সত্য, তার সাক্ষ্যও দেন। কোন কথা টেকে আর কোনটা টেকে না, সেটারও।"
          },
          {
            "en": "Ma'arif al-Qur'an ties the word to 4:41: how will it be when We bring from every community a witness, and bring you as a witness over these? Every prophet, it says, will testify that he delivered Allah's message to his own community, some of whom accepted and some rejected. It then reports two views. Al-Qurtubi, whom it cites on 4:41, holds that each prophet's testimony concerns the people of his own time, the Prophet's ﷺ included. Other scholars hold that the Prophet ﷺ will bear witness to the whole community's deeds, good and bad. Both are left in place here.",
            "bn": "মাআরিফুল কুরআন শব্দটিকে মিলিয়ে দেখে ৪:৪১ আয়াতের সঙ্গে: তখন কেমন হবে, যখন আমি প্রত্যেক উম্মত থেকে একজন সাক্ষী আনব, আর তোমাকে আনব এদের উপর সাক্ষী করে? মাআরিফ বলে, প্রত্যেক নবী সাক্ষ্য দেবেন যে তিনি নিজের উম্মতের কাছে আল্লাহর বার্তা পৌঁছে দিয়েছেন। কেউ তা মেনেছে, কেউ অস্বীকার করেছে। এরপর মাআরিফ দুটি মত উল্লেখ করে। মাআরিফের উদ্ধৃতিতে কুরতুবী ৪:৪১ আয়াতের আলোচনায় বলেন, প্রত্যেক নবীর সাক্ষ্য তাঁর নিজের যুগের মানুষদের বিষয়ে, নবী ﷺ-ও এর বাইরে নন। অন্য আলেমদের মতে নবী ﷺ গোটা উম্মাহর ভালো-মন্দ সব আমলের সাক্ষ্য দেবেন। এখানে দুটি মতই নিজ জায়গায় রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Falcon for Tomorrow's Hunt",
          "bn": "কালকের শিকারের বাজপাখি"
        },
        "p": [
          {
            "en": "Al-Qurtubi closes with a point of grammar that changes how the sending reads. The three words shahidan, mubashshiran and nadhiran are in the accusative, he says, as hal muqaddara: a state described in advance, which the subject will be in later. He illustrates it with an example that Sibawayh recorded: marartu bi-rajulin ma'ahu saqrun sa'idan bihi ghadan, I passed by a man with a falcon, hunting with it tomorrow. The man is not hunting yet. The falcon is with him for the hunt to come.",
            "bn": "কুরতুবী শেষ করেন ব্যাকরণের এমন একটি কথা দিয়ে, যা পাঠানোর বিষয়টিকে নতুন করে পড়তে শেখায়। তিনি বলেন, শাহিদান, মুবাশশিরান ও নাযীরান, এই তিনটি শব্দ যবরযুক্ত হয়েছে হাল মুকাদ্দারা হিসেবে। মানে এমন অবস্থা, যা আগেভাগে বলে রাখা হয়, আর কর্তা পরে সেই অবস্থায় পৌঁছায়। উদাহরণ হিসেবে তিনি সিবাওয়াইহের বর্ণিত একটি বাক্য আনেন: মারারতু বিরাজুলিন মাআহু সাকরুন সাইদান বিহি গাদান। আমি এমন এক লোকের পাশ দিয়ে গেলাম, যার সঙ্গে একটি বাজপাখি, কাল সে তা দিয়ে শিকার করবে। লোকটি এখনো শিকারে নামেনি। বাজপাখিটা তার সঙ্গে আছে সামনের শিকারের জন্য।"
          },
          {
            "en": "Applied to the verse, al-Qurtubi gives the meaning as: We sent you, your testimony on the Day of Resurrection already decreed. He adds a second example of the same pattern, I saw 'Amr standing tomorrow. Read this way, the witnessing of the Day was part of the sending from its first moment. The Messenger ﷺ did not become a witness at the end of his mission; he was sent as one, and the testimony was already in view when the first words of the message were delivered.",
            "bn": "আয়াতে এর প্রয়োগ দেখিয়ে কুরতুবী অর্থ দাঁড় করান এভাবে: আমি তোমাকে পাঠিয়েছি, কিয়ামতের দিন তোমার সাক্ষ্য আগে থেকেই নির্ধারিত রেখে। একই ধাঁচের আরেকটি উদাহরণও তিনি দেন: আমি আমরকে কাল দাঁড়ানো অবস্থায় দেখলাম। এভাবে পড়লে কিয়ামতের দিনের সাক্ষ্য পাঠানোর প্রথম মুহূর্ত থেকেই এর অংশ ছিল। দাওয়াতের শেষে গিয়ে রাসূল ﷺ সাক্ষী হননি। তাঁকে সাক্ষী হিসেবেই পাঠানো হয়েছিল। বার্তার প্রথম কথাগুলো যখন পৌঁছানো হচ্ছিল, সাক্ষ্যের দিনটি তখনই সামনে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News Hung on an Answer",
          "bn": "জবাবের সঙ্গে বাঁধা সুসংবাদ"
        },
        "p": [
          {
            "en": "The other two roles are glossed in pairs, and the pairs differ in where they put the line. Ibn Kathir divides by people: mubashshir to the believers, nadhir to the disbelievers. At-Tabari divides by response and writes both as conditions addressed to the same nation: a bringer of good tidings to them of Paradise if they answer you in what you called them to of ad-din al-qayyim, the upright religion, and a warner to them of Allah's punishment if they turn away from what you brought them from your Lord.",
            "bn": "বাকি দুটি ভূমিকার ব্যাখ্যা আসে জোড়ায় জোড়ায়, আর সীমারেখা কোথায় টানা হবে তা নিয়ে জোড়াগুলো আলাদা। ইবন কাসীর ভাগ করেন মানুষ ধরে: মুমিনদের জন্য মুবাশশির, কাফিরদের জন্য নাযীর। তাবারী ভাগ করেন জবাব ধরে। দুটিকেই তিনি লেখেন শর্ত হিসেবে, একই উম্মাহকে উদ্দেশ করে। তুমি তাদের যে দীনুল কাইয়্যিম, অর্থাৎ সরল সঠিক দীনের দিকে ডেকেছ, তাতে সাড়া দিলে তুমি তাদের জন্য জান্নাতের সুসংবাদদাতা। আর তোমার রবের কাছ থেকে যা এনেছ তা থেকে মুখ ফিরিয়ে নিলে তুমি তাদের জন্য আল্লাহর আযাবের সতর্ককারী।"
          },
          {
            "en": "The Muyassar sets the line at obedience: good tidings of Paradise to whoever obeys you, and a warning to whoever disobeys you of punishment, al-'ajil wa al-ajil, hastened and deferred. Al-Qurtubi, reporting Qatada and others, says the same in fewer words: good tidings of Paradise for whoever obeys him, a warning of the Fire for whoever disobeys. He refers the derivation of bishara and nidhara, the giving of glad news and of warning, back to his discussion in Surat al-Baqarah. Ma'arif al-Qur'an likewise pairs Paradise for the obedient with a warning to those who reject.",
            "bn": "মুয়াসসার সীমা টানে আনুগত্য দিয়ে। যে তোমার আনুগত্য করে, তার জন্য জান্নাতের সুসংবাদ। যে নাফরমানি করে, তার জন্য আযাবের সতর্কবাণী, আল-আজিল ওয়াল আজিল, শিগগির আসা আর পরে আসা। কুরতুবী কাতাদা ও অন্যদের সূত্রে একই কথা আরও কম শব্দে বলেন: আনুগত্যকারীর জন্য জান্নাতের সুসংবাদ, নাফরমানের জন্য জাহান্নামের সতর্কবাণী। বিশারা ও নিযারা, অর্থাৎ সুসংবাদ ও সতর্ক করা, এ দুটি শব্দের উৎপত্তির আলোচনার জন্য তিনি সূরা বাকারায় তাঁর আগের ব্যাখ্যায় ফিরিয়ে দেন। মাআরিফুল কুরআনও আনুগত্যশীলদের জন্য জান্নাত আর প্রত্যাখ্যানকারীদের জন্য সতর্কবাণীকে জোড়া বাঁধে।"
          },
          {
            "en": "As-Sa'di widens both. The good tidings cover reward in this world, in religion and in the Hereafter, for whoever obeys the Prophet ﷺ and obeys Allah; the warning covers punishment hastened and deferred for whoever disobeys Allah. Then he adds a point the others do not make: part of the completeness of good tidings and warning is to explain the deeds and the traits of character for which a person is given good news or warned. So the Prophet ﷺ is the one who makes clear good and evil, happiness and misery, truth and falsehood.",
            "bn": "সা'দী দুটিকেই আরও প্রশস্ত করেন। যে নবী ﷺ-এর আনুগত্য করে এবং আল্লাহর আনুগত্য করে, তার জন্য সুসংবাদ দুনিয়ার প্রতিদানের, দীনের প্রতিদানের এবং আখিরাতের প্রতিদানের। যে আল্লাহর নাফরমানি করে, তার জন্য সতর্কবাণী এখনকার ও পরের আযাবের। তারপর তিনি এমন একটি কথা যোগ করেন, যা অন্যরা বলেননি। সুসংবাদ ও সতর্কবাণী পূর্ণ হয় তখনই, যখন বলে দেওয়া হয় কোন আমল ও কোন চরিত্রের জন্য সুসংবাদ, আর কোনটির জন্য সতর্কবাণী। তাই নবী ﷺ-ই ভালো ও মন্দ, সৌভাগ্য ও দুর্ভাগ্য, হক ও বাতিলকে স্পষ্ট করে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent So That You Believe",
          "bn": "পাঠানো হয়েছে ঈমানের জন্য"
        },
        "p": [
          {
            "en": "The sentence does not end at nadhira. The Muyassar runs straight on into 48:9 in the same gloss: so that you believe in Allah and His Messenger, support Allah by supporting His religion, magnify Allah, and glorify Him at the start and end of the day. Ma'arif al-Qur'an says the purpose of sending the Messenger is indicated here, belief in Allah and His Messenger ﷺ. The three roles, then, are not titles held for their own sake; on these readings they are aimed at an answer from the people who hear them.",
            "bn": "বাক্যটা নাযীরা শব্দে এসে শেষ হয় না। মুয়াসসার একই ব্যাখ্যায় সরাসরি ৪৮:৯ আয়াতে চলে যায়: যাতে তোমরা আল্লাহ ও তাঁর রাসূলের উপর ঈমান আনো, আল্লাহর দীনকে সাহায্য করে আল্লাহকে সাহায্য করো, আল্লাহর মর্যাদা দাও, আর দিনের শুরু ও শেষে তাঁর পবিত্রতা ঘোষণা করো। মাআরিফুল কুরআন বলে, এখানে রাসূল পাঠানোর উদ্দেশ্য বলে দেওয়া হয়েছে: আল্লাহ ও তাঁর রাসূল ﷺ-এর উপর ঈমান। তাহলে তিনটি ভূমিকা নিছক উপাধি নয়। এসব পাঠ অনুযায়ী এগুলোর লক্ষ্য, যারা শোনে তাদের কাছ থেকে একটা জবাব।"
          },
          {
            "en": "Who the him refers to in the next verbs of 48:9 is a separate question. Ibn Kathir glosses tu'azziruhu as you honour him, from Ibn 'Abbas (RA) and others; Ma'arif al-Qur'an records that commentators differ over whether the first two pronouns refer to Allah or to the Messenger ﷺ, while the pronoun of glorifying refers to Allah alone. That belongs to 48:9 and is left there. None of the commentaries consulted for this verse attaches a hadith to it, and the reports Ibn Kathir gives nearby concern the pledge in 48:10.",
            "bn": "৪৮:৯ আয়াতের পরের ক্রিয়াগুলোতে 'তাঁকে' বলতে কাকে বোঝানো হয়েছে, সেটা আলাদা প্রশ্ন। ইবন কাসীর ইবন আব্বাস (রাঃ) ও আরও কয়েকজনের সূত্রে তুআযযিরূহুর অর্থ বলেন, তাঁকে সম্মান করো। মাআরিফুল কুরআন জানায়, প্রথম দুটি সর্বনাম আল্লাহকে বোঝায় নাকি রাসূল ﷺ-কে, তা নিয়ে তাফসীরকারদের মতভেদ আছে। তবে পবিত্রতা ঘোষণার সর্বনামটি শুধু আল্লাহকেই বোঝায়। আলোচনাটি ৪৮:৯ আয়াতের, তাই সেখানেই রইল। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি। কাছাকাছি ইবন কাসীর যে বর্ণনাগুলো আনেন, সেগুলো ৪৮:১০ আয়াতের বাইআত নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Before the Testimony",
          "bn": "সাক্ষ্যের সামনে দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "At-Tabari's phrase bima ajabuka, as to how they answered you, is the part of this verse that reaches furthest. The first hearers answered in their own way, and the surah goes on to speak of a pledge given at his hand (48:10). A reader who comes long after is in a similar place. The message has reached him, carried by the Messenger ﷺ who was sent, and the answer is still being given, in what he believes, in what he does, and in what he leaves undone.",
            "bn": "তাবারীর কথা বিমা আজাবূকা, তারা তোমাকে কী জবাব দিয়েছে, এ আয়াতের সবচেয়ে দূর পর্যন্ত পৌঁছানো অংশ। প্রথম শ্রোতারা নিজেদের মতো করে জবাব দিয়েছিলেন, আর সূরাটি সামনে গিয়ে তাঁর হাতে দেওয়া বাইআতের কথা বলে (৪৮:১০)। অনেক পরে আসা পাঠকের অবস্থাও কাছাকাছি। যাঁকে পাঠানো হয়েছিল সেই রাসূল ﷺ-এর হাত ধরে বার্তাটা তার কাছে পৌঁছে গেছে। আর জবাব দেওয়া এখনো চলছে, তার বিশ্বাসে, তার আমলে, আর যা সে করছে না তার মধ্যেও।"
          },
          {
            "en": "The other two roles keep that answer honest. A reader who takes only the good tidings forgets that the same mouth warned; a reader who hears only the warning forgets that the good tidings came first in the verse's order. As-Sa'di's point gives the practical step: the promise and the warning are complete only when the deeds and the traits they attach to are known. To learn what the Prophet ﷺ promised good news for, and what he warned against, is to begin answering the witness.",
            "bn": "বাকি দুটি ভূমিকা সেই জবাবকে সৎ রাখে। যে শুধু সুসংবাদটুকু নেয়, সে ভুলে যায় যে একই মুখ সতর্কও করেছিল। আর যে শুধু সতর্কবাণী শোনে, সে ভুলে যায় যে আয়াতের ক্রমে সুসংবাদ এসেছে আগে। সা'দীর কথা থেকে করণীয়টা বেরিয়ে আসে। কোন আমল আর কোন চরিত্রের সঙ্গে প্রতিশ্রুতি আর সতর্কবাণী জড়িত, তা জানা না গেলে সুসংবাদ ও সতর্কবাণী পূর্ণ হয় না। নবী ﷺ কীসের জন্য সুসংবাদ দিয়েছেন আর কীসের ব্যাপারে সতর্ক করেছেন, তা শেখার মধ্যেই সাক্ষীর প্রতি জবাবের শুরু।"
          }
        ]
      }
    ]
  },
  "48:10": {
    "sections": [
      {
        "h": {
          "en": "Hands Given Under Oath",
          "bn": "শপথে বাড়ানো হাত"
        },
        "p": [
          {
            "en": "Inna alladhina yubayi'unaka innama yubayi'una llah: those who pledge allegiance to you are pledging allegiance only to Allah. The verses just before set the frame. 48:8 sends the Prophet ﷺ as a witness, a bringer of good news and a warner, and 48:9 names the purpose: that people believe in Allah and His Messenger, support him and honour him. This verse turns to one act in which believers did exactly that, with their hands.",
            "bn": "ইন্নাল্লাযীনা ইউবায়ি'ঊনাকা ইন্নামা ইউবায়ি'ঊনাল্লাহ: যারা তোমার কাছে বাই'আত করে, তারা আসলে আল্লাহর কাছেই বাই'আত করে। আগের দুটি আয়াত প্রেক্ষাপট তৈরি করে রেখেছে। ৪৮:৮ আয়াতে নবী ﷺ-কে পাঠানো হয়েছে সাক্ষী, সুসংবাদদাতা ও সতর্ককারী হিসেবে। ৪৮:৯ আয়াত উদ্দেশ্যটা বলে দেয়: মানুষ যেন আল্লাহ ও তাঁর রাসূলের উপর ঈমান আনে, তাঁকে সাহায্য করে, সম্মান করে। এ আয়াত চলে আসে একটি ঘটনায়, যেখানে মু'মিনরা ঠিক এ কাজটাই করেছিলেন, নিজেদের হাত বাড়িয়ে।"
          },
          {
            "en": "At-Tabari names the occasion and the terms: those of your Companions who pledged to you at al-Hudaybiya that they would not flee when they met the enemy, nor turn their backs. He brings Mujahid's gloss, the day of al-Hudaybiya, and Qatada's: they are those who pledged on the day of al-Hudaybiya. Al-Qurtubi and as-Sa'di name it bay'at ar-ridwan, and al-Qurtubi notes that its account comes later in the surah. Ibn Kathir adds that it took place under a samura tree at al-Hudaybiya.",
            "bn": "তাবারী ঘটনা আর শর্ত দুটোই বলে দেন: তোমার সাহাবিদের মধ্যে যারা হুদায়বিয়ায় তোমার কাছে বাই'আত করেছিল যে শত্রুর মুখোমুখি হলে তারা পালাবে না, পিঠ দেখাবে না। তিনি মুজাহিদের ব্যাখ্যা আনেন: হুদায়বিয়ার দিন। কাতাদার ব্যাখ্যাও আনেন: এরা তারাই, যারা হুদায়বিয়ার দিন বাই'আত করেছিল। কুরতুবী ও সা'দী একে বলেন বাই'আতুর রিদওয়ান। কুরতুবী জানিয়ে রাখেন, এর বিস্তারিত বিবরণ এই সূরারই পরের অংশে আসছে। ইবন কাসীর যোগ করেন, বাই'আতটি হয়েছিল হুদায়বিয়ায় একটি সামুরা গাছের নিচে।"
          },
          {
            "en": "As-Sa'di calls it a special contract, one of whose requirements was that they would not flee, even if only a few of them remained. The story behind it, the rumour about 'Uthman (RA), the terms, the count of those present and the fate of the tree, is told in the article on 48:17 and 48:18. This article stays with the words of 48:10 and what they ask.",
            "bn": "সা'দী একে বলেন এক বিশেষ চুক্তি। তার একটি অপরিহার্য শর্ত ছিল, তারা পালাবে না, যদি তাদের অল্প কয়েকজনও বাকি থাকে। এর পেছনের কাহিনি, উসমান (রাঃ)-কে নিয়ে গুজব, বাই'আতের শর্ত, উপস্থিত লোকের সংখ্যা আর গাছটির পরিণতি, বলা আছে ৪৮:১৭ ও ৪৮:১৮ আয়াতের প্রবন্ধে। এ প্রবন্ধ থাকবে ৪৮:১০ আয়াতের শব্দগুলো আর সেগুলো আমাদের কাছে কী চায়, তার সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Pledging Him, Pledging Allah",
          "bn": "রাসূলের হাতে, আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "The particle innama, only, carries the claim: the pledge given to the Messenger ﷺ is in truth given to Allah. At-Tabari gives the reason: Allah guaranteed them Paradise for keeping faith with Him in it. Al-Qurtubi sets the verse beside 4:80: whoever obeys the Messenger has obeyed Allah. Ibn Kathir cites the same verse and says these words were spoken to honour, exalt and dignify the Messenger ﷺ.",
            "bn": "ইন্নামা শব্দটির অর্থ কেবল, আর পুরো দাবিটা এই শব্দেই: রাসূল ﷺ-এর কাছে দেওয়া বাই'আত আসলে আল্লাহর কাছেই দেওয়া। তাবারী কারণ বলেন: এ বাই'আত রক্ষা করলে আল্লাহ তাদের জন্য জান্নাতের জামিন হয়েছেন। কুরতুবী আয়াতটির পাশে রাখেন ৪:৮০ আয়াত: যে রাসূলের আনুগত্য করল, সে আল্লাহরই আনুগত্য করল। ইবন কাসীরও একই আয়াত আনেন। তাঁর মতে কথাটি বলা হয়েছে রাসূল ﷺ-এর মর্যাদা, মহত্ত্ব ও সম্মান বাড়ানোর জন্য।"
          },
          {
            "en": "Ibn Kathir then draws the conclusion: Allah Himself is taking the pledge, through His Messenger ﷺ. He sets beside it 9:111: Allah has purchased from the believers their lives and their wealth in exchange for Paradise. That verse closes: rejoice in your sale, bay'ikum, that you have contracted, baya'tum bihi, the very verb used here for pledging. Al-Baghawi: they pledge to Allah because they sold themselves to Him for Paradise. The Muyassar: they make the contract with Him, seeking His Paradise and His pleasure.",
            "bn": "এরপর ইবন কাসীর সিদ্ধান্ত টানেন: বাই'আত নিচ্ছেন আল্লাহ নিজেই, তাঁর রাসূল ﷺ-এর মাধ্যমে। পাশে রাখেন ৯:১১১ আয়াত: আল্লাহ মু'মিনদের কাছ থেকে তাদের জান ও মাল কিনে নিয়েছেন জান্নাতের বিনিময়ে। সে আয়াতের শেষে বলা হয়েছে: তোমরা যে বেচাকেনা (বাই'ইকুম) সম্পন্ন করেছ (বায়া'তুম বিহী), তাতে আনন্দিত হও। এখানে বাই'আত বোঝাতে যে ক্রিয়া এসেছে, সেখানেও ঠিক সেটিই। বাগাভী বলেন: তারা আল্লাহর কাছে বাই'আত করছে, কারণ জান্নাতের বিনিময়ে নিজেদেরকে তাঁর কাছে বিক্রি করে দিয়েছে। মুয়াসসার বলে: তারা তাঁর সঙ্গেই চুক্তি করে, তাঁর জান্নাত ও সন্তুষ্টির আশায়।"
          },
          {
            "en": "Ma'arif al-Qur'an reasons from purpose. The Companions pledged in order to act on Allah's command and win His pleasure, so placing their hands on the Prophet's hand ﷺ was tantamount to pledging at the hands of Allah. It adds that the parties placing their hands on each other is the traditional way of a pledge, though not a necessary condition of it.",
            "bn": "মাআরিফুল কুরআন যুক্তি দেয় উদ্দেশ্যের দিক থেকে। সাহাবিরা বাই'আত করেছিলেন আল্লাহর হুকুম মানতে আর তাঁর সন্তুষ্টি পেতে। তাই নবী ﷺ-এর হাতে হাত রাখা ছিল আল্লাহর হাতে বাই'আত করার শামিল। সেখানে এ কথাও আছে যে দুই পক্ষের পরস্পরের হাতে হাত রাখা বাই'আতের প্রচলিত রীতি, তবে তা শর্ত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stands Above the Hands",
          "bn": "হাতের উপরে যা আছে"
        },
        "p": [
          {
            "en": "Then yadu llahi fawqa aydihim: the hand of Allah is over their hands. At-Tabari sets out two lines of interpretation. In the first, the hand of Allah is over their hands at the pledge, because in pledging to His Prophet ﷺ they were pledging to Allah. In the second, the strength of Allah is above their strength in supporting His Messenger ﷺ, since what they had pledged was to support him against the enemy. He lists both and does not choose between them.",
            "bn": "তারপর ইয়াদুল্লাহি ফাওকা আইদীহিম: তাদের হাতের উপর আল্লাহর হাত। তাবারী এর ব্যাখ্যার দুটি ধারা তুলে ধরেন। প্রথমটিতে, বাই'আতের সময় তাদের হাতের উপর আল্লাহর হাত, কেননা নবী ﷺ-এর কাছে বাই'আত করে তারা আসলে আল্লাহর কাছেই বাই'আত করছিল। দ্বিতীয়টিতে, রাসূল ﷺ-কে সাহায্য করার ব্যাপারে আল্লাহর শক্তি তাদের শক্তির উপরে। কারণ তারা বাই'আত করেছিল শত্রুর বিরুদ্ধে তাঁকে সাহায্য করার উপরেই। তাবারী দুটোই উল্লেখ করেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "Al-Baghawi brings three earlier voices. Ibn 'Abbas: the hand of Allah, in keeping what He promised them of good, is above their hands. As-Suddi: they would take the hand of the Messenger of Allah ﷺ and pledge to him, and the hand of Allah was above their hands in the pledging. Al-Kalbi: Allah's favour upon them in guiding them is above what they did in pledging.",
            "bn": "বাগাভী আগের যুগের তিনজনের কথা আনেন। ইবন আব্বাস: তাদের জন্য যে কল্যাণের ওয়াদা আল্লাহ করেছেন, তা পূরণের ব্যাপারে আল্লাহর হাত তাদের হাতের উপরে। সুদ্দী: তারা রাসূলুল্লাহ ﷺ-এর হাত ধরে বাই'আত করছিল, আর বাই'আতের সেই মুহূর্তে আল্লাহর হাত ছিল তাদের হাতের উপর। কালবী: তারা বাই'আত করে যা করেছে, হিদায়াত দিয়ে আল্লাহ তাদের প্রতি যে অনুগ্রহ করেছেন তা তার চেয়ে বড়।"
          },
          {
            "en": "Al-Qurtubi records the range in other forms. It is said: His hand in reward is above their hands in fulfilment, and His hand in favouring them with guidance is above their hands in obedience. Ibn Kaysan: the strength and help of Allah are above their strength and help. Most of these readings hear a comparison in fawqa, above: what came from Allah, as reward, favour or help, exceeded what the pledgers brought.",
            "bn": "কুরতুবী একই বৈচিত্র্য লিপিবদ্ধ করেন অন্যভাবে। বলা হয়েছে: প্রতিদানে তাঁর হাত, ওয়াদা রক্ষায় তাদের হাতের উপরে। হিদায়াত দিয়ে অনুগ্রহে তাঁর হাত, আনুগত্যে তাদের হাতের উপরে। ইবন কায়সান বলেন: আল্লাহর শক্তি ও সাহায্য তাদের শক্তি ও সাহায্যের উপরে। এ ব্যাখ্যাগুলোর বেশির ভাগই ফাওকা, অর্থাৎ উপরে, শব্দটিতে একটা তুলনা দেখে। প্রতিদান হোক, অনুগ্রহ হোক বা সাহায্য, আল্লাহর কাছ থেকে যা এসেছে তা বাই'আতকারীদের দেওয়া জিনিসের চেয়ে বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen and Heard as They Swore",
          "bn": "শপথের মুহূর্তে তিনি দেখছিলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the phrase as presence: He is present with them, hearing their words and seeing where they stand, knowing what they hide and what they show. The Muyassar says nearly the same in nearly the same words. On this reading the stress falls on who was watching as their hands met, and on what He knew of the intentions behind each grip.",
            "bn": "ইবন কাসীর বাক্যটি পড়েন উপস্থিতির অর্থে: তিনি তাদের সঙ্গে আছেন, তাদের কথা শুনছেন, তাদের অবস্থান দেখছেন, তাদের ভেতর-বাহির সবই জানেন। মুয়াসসারও প্রায় হুবহু একই কথা বলে। এ পাঠে জোরটা পড়ে অন্য জায়গায়। হাতে হাত মেলানোর সময় কে দেখছিলেন, আর প্রতিটি হাতের পেছনের নিয়ত সম্পর্কে তিনি কী জানতেন, সেটাই মুখ্য।"
          },
          {
            "en": "As-Sa'di reads it as emphasis. The pledge was so firmly bound, he says, that Allah said the hand of Allah is over their hands: as though they had pledged to Allah and clasped His hand by that pledge. All of this, he adds, is to strengthen and reinforce it, and to move them to keep it. That is why, in his reading, the next words turn at once to whoever breaks it.",
            "bn": "সা'দী বাক্যটিকে দেখেন জোর দেওয়ার ভাষা হিসেবে। তাঁর কথায়, বাই'আতটা এত মজবুত ছিল যে আল্লাহ বললেন, তাদের হাতের উপর আল্লাহর হাত। যেন সেই বাই'আতের মাধ্যমে তারা আল্লাহর কাছেই বাই'আত করেছে, তাঁর সঙ্গে মুসাফাহা করেছে। তিনি যোগ করেন, এ সবই বাই'আতকে আরও পোক্ত ও শক্ত করার জন্য, আর তা রক্ষায় তাদের উদ্বুদ্ধ করার জন্য। এ কারণেই, তাঁর পাঠে, পরের কথাগুলো সঙ্গে সঙ্গে চলে যায় ভঙ্গকারীর দিকে।"
          },
          {
            "en": "Two of the works also treat the phrase as touching on Allah's attributes. The Muyassar says the verse affirms the attribute of the hand for Allah in a way befitting Him, without likening and without asking how. Ma'arif al-Qur'an places Allah's hand among the mutashabihat, whose true nature cannot be known to us and should not be probed. Both are reported as the two works state them. This article does not enter that question; it keeps to what the verse asks of whoever pledges.",
            "bn": "দুটি গ্রন্থ বাক্যটিকে আল্লাহর সিফাতের প্রসঙ্গেও আলোচনা করে। মুয়াসসার বলে, আয়াতটি আল্লাহর জন্য হাতের সিফাত সাব্যস্ত করে, তাঁর শানের উপযোগী রূপে, কোনো সাদৃশ্য ছাড়া, কেমন তা জিজ্ঞাসা ছাড়া। মাআরিফুল কুরআন আল্লাহর হাতকে রাখে মুতাশাবিহাতের মধ্যে। এর প্রকৃত স্বরূপ আমাদের জানা সম্ভব নয়, খোঁজাখুঁজি করাও উচিত নয়। দুটি বক্তব্যই এখানে দেওয়া হলো যেভাবে গ্রন্থ দুটিতে আছে। এ প্রবন্ধ সেই প্রশ্নে ঢুকছে না। যে বাই'আত করে, আয়াতটি তার কাছে কী চায়, প্রবন্ধ সেখানেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Broken Against Oneself",
          "bn": "ভাঙলে নিজেরই ক্ষতি"
        },
        "p": [
          {
            "en": "Fa-man nakatha fa-innama yankuthu 'ala nafsih: whoever breaks it breaks it only against himself. At-Tabari explains: whoever breaks his pledge to you, O Muhammad, failing to help you against your enemies and going against what he promised his Lord, harms none but himself, for he leaves those whom Allah promised Paradise for keeping it. As for the Messenger ﷺ, Allah would help him against his enemies whether a breaker broke it or kept it.",
            "bn": "ফামান নাকাসা ফাইন্নামা ইয়ানকুসু 'আলা নাফসিহ: যে তা ভঙ্গ করে, সে ভঙ্গ করে কেবল নিজের বিরুদ্ধেই। তাবারী ব্যাখ্যা করেন: হে মুহাম্মাদ, যে তোমার সঙ্গে করা বাই'আত ভেঙে দেয়, শত্রুর বিরুদ্ধে তোমাকে সাহায্য করে না, রবের কাছে দেওয়া কথার বিপরীতে চলে, সে নিজেকে ছাড়া কারও ক্ষতি করে না। কারণ বাই'আত রক্ষার বিনিময়ে যাদের জন্য আল্লাহ জান্নাতের ওয়াদা করেছেন, সে তাদের দল থেকে বেরিয়ে যায়। আর রাসূল ﷺ-এর বেলায়, কেউ ভাঙুক বা রাখুক, আল্লাহ শত্রুর বিরুদ্ধে তাঁকে সাহায্য করবেনই।"
          },
          {
            "en": "The others agree on where the harm lands. Ibn Kathir: its evil returns on the breaker, and Allah has no need of him. Al-Qurtubi: he has deprived himself of the reward and bound himself to the punishment. As-Sa'di: its ill consequence returns to him and its penalty reaches him. Ma'arif al-Qur'an adds that a pledge, once made, is binding and its violation unlawful, and the loss falls on the violator, not on Allah or His Messenger ﷺ.",
            "bn": "ক্ষতিটা কোথায় গিয়ে পড়ে, তা নিয়ে বাকিরাও একমত। ইবন কাসীর: এর কুফল ভঙ্গকারীর উপরেই ফিরে আসে, আর আল্লাহ তার মুখাপেক্ষী নন। কুরতুবী: সে নিজেকে সওয়াব থেকে বঞ্চিত করেছে আর শাস্তি নিজের ঘাড়ে চাপিয়েছে। সা'দী: এর কুফল তার দিকেই ফেরে, এর শাস্তি তার কাছেই পৌঁছায়। মাআরিফুল কুরআন যোগ করে: বাই'আত একবার সম্পন্ন হলে তা বাধ্যতামূলক, তা ভাঙা নাজায়েয। ক্ষতি ভঙ্গকারীর, আল্লাহ বা তাঁর রাসূল ﷺ-এর নয়।"
          },
          {
            "en": "The verse names no one who broke this pledge; it states a rule: whoever breaks. The verses after it, 48:11 and 48:12, turn to the bedouins who stayed behind, and are taken up in their own place. What the text says of breakers describes what it describes and licenses nothing against any living person or community. Its weight falls on the reader, who is asked whether his own word holds.",
            "bn": "আয়াতটি এমন কারও নাম বলে না যে এ বাই'আত ভেঙেছিল। এটি একটা নিয়ম বলে: যে ভাঙে। পরের দুটি আয়াত, ৪৮:১১ ও ৪৮:১২, কথা বলে সেই বেদুইনদের নিয়ে যারা পেছনে থেকে গিয়েছিল। সে আলোচনা তার নিজের জায়গায়। ভঙ্গকারী সম্পর্কে আয়াত যা বলে, তা কেবল সেটুকুই বর্ণনা করে। এতে আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি নেই। এর ভার পড়ে পাঠকের উপর। প্রশ্নটা তাকেই করা হচ্ছে: তার নিজের কথা কি টেকে?"
          }
        ]
      },
      {
        "h": {
          "en": "Fulfilled, and What It Earns",
          "bn": "পুরো রাখা, আর তার প্রতিদান"
        },
        "p": [
          {
            "en": "Wa man awfa bima 'ahada 'alayhu llah: and whoever fulfils what he has pledged to Allah. At-Tabari names its content: patience when meeting the enemy in Allah's way and support of His Prophet ﷺ against his enemies, made firm with binding oaths. Al-Qurtubi records two views of what is fulfilled: it is said, the pledge; and it is said, his faith. As-Sa'di: bringing it complete and in full measure. Al-Baghawi: standing firm on the pledge.",
            "bn": "ওয়া মান আওফা বিমা 'আহাদা 'আলাইহুল্লাহ: আর যে আল্লাহর সঙ্গে করা অঙ্গীকার পূর্ণ করে। অঙ্গীকারে কী ছিল, তাবারী তা বলেন: আল্লাহর পথে শত্রুর মুখোমুখি হলে ধৈর্য ধরা, আর শত্রুর বিরুদ্ধে তাঁর নবী ﷺ-কে সাহায্য করা, যা তারা পাকা করেছিল দৃঢ় কসম খেয়ে। কী পূর্ণ করা হচ্ছে, সে বিষয়ে কুরতুবী দুটি মত লিখেছেন: বলা হয়েছে, বাই'আত। আবার বলা হয়েছে, তার ঈমান। সা'দীর ব্যাখ্যায় আওফা মানে তা পূর্ণাঙ্গ ও ষোলো আনা আদায় করা। বাগাভী বলেন: বাই'আতের উপর অটল থাকা।"
          },
          {
            "en": "Al-Qurtubi notes two points of recitation. Hafs and az-Zuhri read 'alayhu, as in the text shown in this app; the rest read 'alayhi. Nafi', Ibn Kathir and Ibn 'Amir read fa-sa-nu'tihi, We will give him, the reading al-Farra' and Abu Mu'adh chose; the rest read fa-sa-yu'tihi, He will give him, chosen by Abu 'Ubayd and Abu Hatim because the name of Allah stands close by. Al-Baghawi puts it by region: Iraq read ya', the others nun.",
            "bn": "কুরতুবী এখানে কিরাআতের দুটি বিষয় উল্লেখ করেন। হাফস ও যুহরী পড়েছেন 'আলাইহু, এই অ্যাপে দেখানো পাঠেও তা-ই আছে। বাকিরা পড়েছেন 'আলাইহি। নাফি', ইবন কাসীর ও ইবন 'আমির পড়েছেন ফাসানু'তীহি, আমি তাকে দেব। ফাররা ও আবু মু'আয এ পাঠ বেছে নিয়েছেন। বাকিরা পড়েছেন ফাসাইউ'তীহি, তিনি তাকে দেবেন। আবু উবাইদ ও আবু হাতিম এটিই বেছে নিয়েছেন, কারণ আল্লাহর নাম কাছেই আছে। বাগাভী অঞ্চল ধরে বলেন: ইরাকের লোকেরা পড়েছেন ইয়া দিয়ে, বাকিরা নূন দিয়ে।"
          },
          {
            "en": "Then ajran 'aziman, a great reward. At-Tabari: Allah will give him a great recompense, which is that He admits him to Paradise as a reward for keeping what he pledged to Allah, and he cites Qatada: it is Paradise. Al-Baghawi and the Muyassar also name Paradise, al-Qurtubi places the reward in Paradise, and Ibn Kathir calls it an abundant recompense. As-Sa'di leaves the measure open: a reward whose greatness and worth are known only to Him who gives it.",
            "bn": "তারপর আজরান 'আযীমা, মহা পুরস্কার। তাবারী বলেন: আল্লাহ তাকে বিরাট প্রতিদান দেবেন। তা হলো, আল্লাহর সঙ্গে করা অঙ্গীকার রক্ষার পুরস্কার হিসেবে তাকে জান্নাতে প্রবেশ করাবেন। তিনি কাতাদার কথা আনেন: এ হলো জান্নাত। বাগাভী আর মুয়াসসারও জান্নাতের কথা বলে, কুরতুবী পুরস্কারটিকে রাখেন জান্নাতে, আর ইবন কাসীর বলেন প্রচুর সওয়াব। সা'দী পরিমাণটা খোলা রাখেন: এমন পুরস্কার, যার বিশালতা ও মূল্য তিনি ছাড়া কেউ জানে না যিনি তা দান করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Conquest al-Bara' Counted",
          "bn": "বারা যাকে বিজয় গুনতেন"
        },
        "p": [
          {
            "en": "The commentators gather many narrations about the pledge, and the reports that differ over its terms are set out in the article on 48:17 and 48:18. Two reports in Sahih al-Bukhari, a collection al-Bukhari limited to reports he judged sound, add to this verse's picture. The first (4150) is from al-Bara' ibn 'Azib (RA), and shows how a man who was there weighed the day.",
            "bn": "বাই'আত নিয়ে তাফসীরকারেরা অনেক বর্ণনা জড়ো করেছেন। বাই'আতের শর্ত নিয়ে যেসব বর্ণনায় মতভেদ আছে, সেগুলোর বিবরণ ৪৮:১৭ ও ৪৮:১৮ আয়াতের প্রবন্ধে। সহীহ বুখারীর দুটি বর্ণনা এ আয়াতের ছবিতে কিছু যোগ করে। ইমাম বুখারী এ গ্রন্থে কেবল সেসব বর্ণনা রেখেছেন যা তাঁর বিচারে সহীহ। প্রথমটি (৪১৫০) বারা ইবন আযিব (রাঃ)-এর। সেদিন যিনি উপস্থিত ছিলেন, দিনটাকে তিনি কীভাবে মূল্যায়ন করতেন, এতে তা বোঝা যায়।"
          },
          {
            "en": "Al-Bara' said: 'You count the conquest as the conquest of Makka, and the conquest of Makka was indeed a conquest. We count the conquest as the Pledge of Ridwan on the day of al-Hudaybiya. We were fourteen hundred with the Prophet ﷺ.' He names no verse, but the conquest he reckoned is the pledge this verse describes. The figure of fourteen hundred is his, as the report gives it.",
            "bn": "বারা (রাঃ) বলেন: 'তোমরা বিজয় বলতে মক্কা বিজয়কে গোনো। মক্কা বিজয় অবশ্যই বিজয় ছিল। কিন্তু আমরা বিজয় গুনি হুদায়বিয়ার দিনের বাই'আতুর রিদওয়ানকে। আমরা নবী ﷺ-এর সঙ্গে ছিলাম চৌদ্দশো জন।' তিনি কোনো আয়াতের নাম বলেননি। তবে যে বিজয় তিনি গুনতেন, তা সেই বাই'আতই যার বর্ণনা এ আয়াতে। চৌদ্দশো সংখ্যাটি তাঁর, বর্ণনায় যেভাবে আছে সেভাবেই।"
          },
          {
            "en": "He went on: 'Al-Hudaybiya is a well. We drew it dry and did not leave a drop in it. That reached the Prophet ﷺ, and he came to it and sat on its edge. Then he called for a vessel of water, made wudu, rinsed his mouth and supplicated, then poured it into the well. We left it for a short while, and then it gave us all we wanted, for ourselves and our mounts.' Al-Bukhari includes it in his Sahih.",
            "bn": "তিনি আরও বলেন: 'হুদায়বিয়া একটি কূপ। আমরা তার পানি তুলে তুলে শেষ করে ফেললাম, এক ফোঁটাও রাখলাম না। খবরটা নবী ﷺ-এর কাছে পৌঁছাল। তিনি এসে কূপের কিনারায় বসলেন। তারপর এক পাত্র পানি আনিয়ে ওযু করলেন, কুলি করলেন, দু'আ করলেন, তারপর পানিটা কূপে ঢেলে দিলেন। আমরা কিছুক্ষণ কূপটা ছেড়ে রাখলাম। তারপর আমরা আর আমাদের সওয়ারিরা যত চাইলাম, কূপ আমাদের তত পানি দিল।' ইমাম বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে এনেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hand Offered Twice",
          "bn": "দ্বিতীয়বার বাড়ানো হাত"
        },
        "p": [
          {
            "en": "The second report (2960) is from Salama ibn al-Akwa' (RA), as Yazid ibn Abi 'Ubayd relates it. Salama said: 'I pledged allegiance to the Prophet ﷺ, then turned aside to the shade of the tree. When the people had thinned, he said: Ibn al-Akwa', will you not pledge? I said: I have already pledged, O Messenger of Allah. He said: And again. So I pledged to him a second time.' Yazid said: 'I asked him: Abu Muslim, on what were you pledging that day? He said: Unto death.'",
            "bn": "দ্বিতীয় বর্ণনাটি (২৯৬০) সালামা ইবনুল আকওয়া' (রাঃ)-এর, ইয়াযীদ ইবন আবী উবাইদ যেভাবে বর্ণনা করেছেন। সালামা বলেন: 'আমি নবী ﷺ-এর কাছে বাই'আত করলাম, তারপর সরে গিয়ে গাছের ছায়ায় বসলাম। ভিড় যখন হালকা হয়ে এল, তিনি বললেন: ইবনুল আকওয়া', তুমি বাই'আত করবে না? আমি বললাম: হে আল্লাহর রাসূল, আমি তো বাই'আত করেছি। তিনি বললেন: আবারও। তখন আমি দ্বিতীয়বার তাঁর কাছে বাই'আত করলাম।' ইয়াযীদ বলেন: 'আমি তাঁকে জিজ্ঞেস করলাম, হে আবু মুসলিম, সেদিন আপনারা কিসের উপর বাই'আত করছিলেন? তিনি বললেন: মৃত্যুর উপর।'"
          },
          {
            "en": "Al-Bukhari includes it in his Sahih. The answer at its end, unto death, is Salama's own; the reports that give the terms differently are left to the article on 48:17 and 48:18. What the report adds here is the scene: a pledge given hand in hand, and a man asked to give his hand again though he already had. The report does not say why, and this article does not guess.",
            "bn": "ইমাম বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন। শেষের উত্তরটি, মৃত্যুর উপর, সালামার নিজের কথা। যেসব বর্ণনায় শর্তটা অন্যভাবে এসেছে, সেগুলো রইল ৪৮:১৭ ও ৪৮:১৮ আয়াতের প্রবন্ধে। এখানে বর্ণনাটি যা যোগ করে তা হলো দৃশ্যটি। হাতে হাত রেখে বাই'আত, আর একজনকে বলা হচ্ছে আবার হাত দিতে, যদিও তিনি আগেই দিয়েছেন। কেন, বর্ণনায় তা বলা নেই। এ প্রবন্ধও অনুমান করছে না।"
          },
          {
            "en": "The verse speaks of one pledge on one day under one tree, but its closing clauses are worded for anyone: whoever breaks, whoever fulfils. Al-Qurtubi's second view, that what is fulfilled may be a person's faith, widens them further. Whoever has borne witness to faith, or given his word for Allah's sake, can hear them as addressed to him: breaking harms the breaker, and keeping it whole earns a reward only its Giver can measure.",
            "bn": "আয়াতটি কথা বলে একটি দিনের, একটি গাছের নিচের একটি বাই'আত নিয়ে। কিন্তু শেষের বাক্য দুটি যে কারও জন্য প্রযোজ্য ভাষায় বলা: যে ভাঙে, যে পূর্ণ করে। কুরতুবীর দ্বিতীয় মত, যে পূর্ণ করার বিষয়টা মানুষের ঈমানও হতে পারে, কথাটাকে আরও প্রশস্ত করে। যিনি ঈমানের সাক্ষ্য দিয়েছেন, কিংবা আল্লাহর জন্য কাউকে কথা দিয়েছেন, তিনি বাক্য দুটি নিজের প্রতি বলা হিসেবে শুনতে পারেন। ভাঙার ক্ষতি ভঙ্গকারীর নিজের। আর পুরোপুরি রাখার পুরস্কার এমন, যার মাপ কেবল তার দাতাই জানেন।"
          }
        ]
      }
    ]
  },
  "48:16": {
    "sections": [
      {
        "h": {
          "en": "Shut Out, Then Called Again",
          "bn": "বাদ পড়া, তারপর নতুন ডাক"
        },
        "p": [
          {
            "en": "Qul li-l-mukhallafina mina l-a'rab: say to those of the bedouins who were left behind. At-Tabari reads it as Allah's word to His Prophet ﷺ: say, O Muhammad, to the bedouins left behind from marching with you. Al-Qurtubi names what they missed: these are the ones who stayed behind from al-Hudaybiya. The verse before has just told them, you will not follow us, when they asked to come along towards spoils. This verse does not take that refusal back. It speaks of a different summons, one still to come.",
            "bn": "কুল লিল-মুখাল্লাফীনা মিনাল আ'রাব: বেদুঈনদের মধ্যে যারা পেছনে রয়ে গিয়েছিল, তাদের বলুন। তাবারীর ব্যাখ্যায় এটি নবী ﷺ-এর প্রতি আল্লাহর নির্দেশ: হে মুহাম্মাদ, যে বেদুঈনরা আপনার সঙ্গে রওনা না হয়ে পিছিয়ে ছিল, তাদের বলুন। তারা কোন সফর বাদ দিয়েছিল, কুরতুবী তা স্পষ্ট করেন: এরা হুদায়বিয়া থেকে পিছিয়ে থাকা লোক। আগের আয়াতে গনীমতের দিকে যাওয়ার সময় তারা সঙ্গী হতে চেয়েছিল, আর তাদের বলা হয়েছিল, তোমরা আমাদের অনুসরণ করবে না। এ আয়াত সেই নিষেধ ফিরিয়ে নেয় না। এখানে কথা অন্য একটা ডাকের, যা এখনো আসেনি।"
          },
          {
            "en": "As-Sa'di frames the verse as a test. Allah had said that these bedouins hung back from striving in His way with an excuse that was no excuse, and wanted to go out only when there was no armed strength to meet and no fighting, purely for the spoils. So He said, testing them: you will be called to a people of great might. Ma'arif al-Qur'an reads it as consolation too. Not all who stayed behind were hypocrites, it says; some were sincere, and some later became so. Khaybar was closed to them, yet a harder call would come.",
            "bn": "সা'দী আয়াতটিকে দেখেন পরীক্ষা হিসেবে। আল্লাহ আগেই জানিয়েছেন, এই বেদুঈনরা তাঁর পথে সংগ্রাম থেকে পিছিয়ে থাকে, আর এমন অজুহাত দেখায় যা আসলে কোনো অজুহাতই নয়। যখন সামনে শক্তিশালী প্রতিপক্ষ নেই, লড়াই নেই, শুধু গনীমত আছে, তখনই তারা বের হতে চায়। তাই তাদের পরীক্ষা করতে আল্লাহ বললেন: তোমাদের ডাকা হবে প্রবল শক্তিধর এক জাতির দিকে। মাআরিফুল কুরআন এতে সান্ত্বনাও দেখে। তার কথায়, পিছিয়ে থাকা সবাই মুনাফিক ছিল না। কেউ ছিল খাঁটি মুসলিম, কেউ পরে খাঁটি হয়েছে। খায়বারের দরজা তাদের জন্য বন্ধ ছিল, কিন্তু এর চেয়ে কঠিন ডাক সামনে আসছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Might Measured on the Field",
          "bn": "শক্তির মাপ যুদ্ধের ময়দানে"
        },
        "p": [
          {
            "en": "Sa-tud'awna ila qawmin uli ba'sin shadid: you will be called to a people possessed of severe might. At-Tabari supplies the word the sentence leaves unsaid: called to the fighting of a people, uli ba's, with might in combat, shadid, severe. In his closing judgement he adds a second phrase for it, najda fi l-hurub, valour in wars. The Muyassar keeps to the same line: a people with severe might in fighting. The abridged English Ibn Kathir calls them people experienced at warfare.",
            "bn": "সাতুদ'আওনা ইলা কাওমিন উলী বা'সিন শাদীদ: তোমাদের ডাকা হবে প্রবল শক্তিধর এক জাতির দিকে। বাক্যে যে শব্দটা উহ্য, তাবারী তা জুড়ে দেন: এক জাতির সঙ্গে লড়াইয়ের দিকে ডাকা হবে। উলী বা'স মানে যুদ্ধে যাদের শক্তি আছে, আর শাদীদ মানে কঠিন। নিজের চূড়ান্ত মত দেওয়ার সময় তিনি আরেকটি কথা যোগ করেন: নাজদা ফিল হুরূব, অর্থাৎ যুদ্ধে সাহসিকতা। মুয়াসসারও একই কথা বলে: লড়াইয়ে কঠিন শক্তির অধিকারী এক জাতি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ তাদের বলে যুদ্ধে অভিজ্ঞ লোক।"
          },
          {
            "en": "The verb is passive: you will be called. The verse does not say who will do the calling, and that silence is where the commentators part ways, because whoever the caller is decides which war is meant. As-Sa'di fills it: the Messenger will call you, and those who stood in his place after him among the rightly guided caliphs and the imams. The verse itself names neither the caller nor the people.",
            "bn": "ক্রিয়াটি কর্মবাচ্যে: তোমাদের ডাকা হবে। কে ডাকবে, আয়াত তা বলে না। এই নীরবতার জায়গাতেই তাফসীরকারদের পথ আলাদা হয়ে যায়। কারণ ডাকদাতা কে, তার উপরই নির্ভর করে কোন যুদ্ধের কথা বলা হচ্ছে। সা'দী শূন্যস্থানটা পূরণ করেন এভাবে: রাসূল তোমাদের ডাকবেন, আর তাঁর পরে তাঁর স্থলাভিষিক্ত খুলাফায়ে রাশিদীন ও ইমামগণ ডাকবেন। আয়াত নিজে ডাকদাতার নামও বলে না, জাতিটির নামও না।"
          }
        ]
      },
      {
        "h": {
          "en": "From Hunayn to Persia and Rome",
          "bn": "হুনায়ন থেকে পারস্য ও রোম"
        },
        "p": [
          {
            "en": "Who are they? At-Tabari says the people of interpretation differed, and lists the camps with their chains. Some said the people of Persia: so from Ibn 'Abbas (RA) through 'Ata' ibn Abi Rabah, and from Mujahid. Others said Persia and Rome together: 'Abd ar-Rahman ibn Abi Layla, al-Hasan and Ibn Zayd. Others said Hawazin at Hunayn: Sa'id ibn Jubayr and 'Ikrima, who in one chain add Thaqif, while Qatada names Hawazin and Ghatafan on the day of Hunayn. Others said Banu Hanifa with Musaylima the liar, from az-Zuhri. Ka'b said Rome.",
            "bn": "এরা কারা? তাবারী বলেন, ব্যাখ্যাকারেরা এ নিয়ে মতভেদ করেছেন। তারপর তিনি সনদসহ প্রতিটি দলের কথা সাজান। কেউ বলেছেন পারস্যবাসী। আতা ইবন আবী রাবাহের সূত্রে ইবন আব্বাস (রাঃ) থেকে এবং মুজাহিদ থেকে এমনই এসেছে। কেউ বলেছেন পারস্য ও রোম দুটোই। এ মত আবদুর রহমান ইবন আবী লায়লা, হাসান ও ইবন যায়দের। কেউ বলেছেন হুনায়নের হাওয়াযিন। এ মত সাঈদ ইবন জুবায়র ও ইকরিমার, একটি সনদে তাঁরা সাকীফের নামও যোগ করেন। কাতাদা বলেন হুনায়নের দিনের হাওয়াযিন ও গাতাফান। যুহরীর মতে মিথ্যাবাদী মুসায়লিমার সঙ্গী বনু হানীফা। আর কা'ব বলেন রোম।"
          },
          {
            "en": "Ibn Kathir sets out the same field with a few additions. He reports Thaqif alone from ad-Dahhak, and two further reports from Mujahid: that they are the idol-worshippers, and that they are simply men of great might, with no particular group named. He notes that Banu Hanifa was also reported from Sa'id and 'Ikrima, which matches a chain in at-Tabari where the two of them used to add both Hawazin and Banu Hanifa. Al-Baghawi has az-Zuhri, Muqatil and a group saying Banu Hanifa, the people of al-Yamama, companions of Musaylima.",
            "bn": "ইবন কাসীরও একই মতগুলো সাজান, সঙ্গে কিছু সংযোজন। দাহহাক থেকে তিনি শুধু সাকীফের কথা আনেন। মুজাহিদ থেকে আরও দুটি বর্ণনা দেন: এক, এরা মূর্তিপূজারী; দুই, এরা কেবল প্রবল শক্তিধর লোক, কোনো নির্দিষ্ট দলের নাম তিনি নেননি। ইবন কাসীর জানান, সাঈদ ও ইকরিমা থেকে বনু হানীফার কথাও বর্ণিত আছে। তাবারীর এক সনদের সঙ্গে এটা মিলে যায়, যেখানে তাঁরা দুজন হাওয়াযিন ও বনু হানীফা দুটোই যোগ করতেন। বাগাভীর বর্ণনায় যুহরী, মুকাতিল ও আরও একদল বলেন: এরা বনু হানীফা, ইয়ামামার অধিবাসী, মুসায়লিমার দলবল।"
          },
          {
            "en": "One of at-Tabari's reports from Qatada describes the call as it came: they were called on the day of Hunayn to Hawazin and Thaqif, and some of them answered well and were eager to strive. That reading makes the Prophet ﷺ himself the caller, which al-Qurtubi will contest below. Every name on this list belongs to the first generations of Islam. The verse speaks of that summons in that time, and nothing in it is a warrant against any people or community alive today.",
            "bn": "কাতাদা থেকে তাবারীর একটি বর্ণনায় ডাকটা কীভাবে এসেছিল, তার ছবি আছে: হুনায়নের দিন তাদের হাওয়াযিন ও সাকীফের বিরুদ্ধে ডাকা হয়েছিল, আর তাদের কেউ কেউ ভালোভাবে সাড়া দিয়েছিল, সংগ্রামে আগ্রহী হয়েছিল। এই ব্যাখ্যায় ডাকদাতা স্বয়ং নবী ﷺ। কুরতুবী সামনে এর আপত্তি তুলবেন। তালিকার প্রতিটি নাম ইসলামের প্রথম যুগের। আয়াত বলছে সেই যুগের সেই ডাকের কথা। আজ বেঁচে থাকা কোনো জাতি বা সম্প্রদায়ের বিরুদ্ধে এতে কোনো অনুমতিপত্র নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "We Recited It, Not Knowing",
          "bn": "পড়তাম, কিন্তু জানতাম না"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives a recollection from Rafi' ibn Khadij (RA): by Allah, we used to recite this verse in times past, you will be called to a people of great might, and we did not know who they were, until Abu Bakr (RA) called us to fight Banu Hanifa, and then we knew it was them. Al-Baghawi has the same report in nearly the same words, and Ma'arif al-Qur'an repeats it. Neither tafsir gives it a chain or a grading. Al-Baghawi adds from Ibn Jurayj that 'Umar (RA) called them to fight Persia.",
            "bn": "কুরতুবী রাফি' ইবন খাদীজ (রাঃ)-এর একটি স্মৃতিচারণ আনেন: আল্লাহর কসম, আগে আমরা এ আয়াত পড়তাম, তোমাদের ডাকা হবে প্রবল শক্তিধর এক জাতির দিকে, কিন্তু জানতাম না তারা কারা। শেষে আবূ বকর (রাঃ) যখন আমাদের বনু হানীফার বিরুদ্ধে লড়াইয়ে ডাকলেন, তখন বুঝলাম এরাই সেই জাতি। বাগাভীতেও প্রায় একই ভাষায় বর্ণনাটি আছে, মাআরিফুল কুরআনও তা উদ্ধৃত করে। কোনো তাফসীরই এর সনদ বা মান উল্লেখ করেনি। বাগাভী ইবন জুরাইজ থেকে আরেকটি কথা যোগ করেন: উমার (রাঃ) তাদের পারস্যের বিরুদ্ধে লড়াইয়ে ডেকেছিলেন।"
          },
          {
            "en": "A last camp says the verse has not yet come to pass. At-Tabari gives this from Abu Hurayra (RA) through az-Zuhri, and al-Baghawi and al-Qurtubi repeat it. Al-Qurtubi answers in a single phrase: the apparent sense of the verse rejects it. Ibn Kathir has az-Zuhri saying the same, that those people have not come yet. He also relays narrators' explanations that match the verse to peoples of later times. Those are glosses by narrators, not the words of the verse, and this article leaves them aside.",
            "bn": "শেষ দলটি বলে, আয়াতের কথা এখনো ঘটেনি। তাবারী যুহরীর সূত্রে আবূ হুরায়রা (রাঃ) থেকে এ মত আনেন, বাগাভী ও কুরতুবীও তা উল্লেখ করেন। কুরতুবীর জবাব ছোট: আয়াতের বাহ্যিক অর্থই একে প্রত্যাখ্যান করে। ইবন কাসীর যুহরী থেকেও একই কথা আনেন যে, সেই জাতি এখনো আসেনি। পরবর্তী কালের কিছু জাতির সঙ্গে আয়াতটিকে মিলিয়ে দেওয়া কয়েকজন বর্ণনাকারীর ব্যাখ্যাও তিনি উদ্ধৃত করেন। সেগুলো বর্ণনাকারীদের নিজস্ব ব্যাখ্যা, আয়াতের শব্দ নয়। এ লেখা সেগুলো পাশে সরিয়ে রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Leaves Them Unnamed",
          "bn": "তাবারী নাম বসান না"
        },
        "p": [
          {
            "en": "At-Tabari's own verdict is a refusal to choose. The soundest thing to say, he writes, is that Allah told these bedouins they would be called to fight a people of might in combat and valour in wars, and no proof has been set for us, from report or from reason, that Hawazin are meant, or Banu Hanifa, or Persia, or Rome, or any particular people. It may be some of these; it may be others. No statement is sounder, he concludes, than to say what Allah said: they will be called to a people of great might.",
            "bn": "তাবারীর নিজের রায় হলো, কোনো একটিকে বেছে না নেওয়া। তিনি লেখেন, সবচেয়ে সঠিক কথা এটুকুই: আল্লাহ এই বেদুঈনদের জানিয়েছেন, তাদের এমন এক জাতির সঙ্গে লড়াইয়ে ডাকা হবে যারা যুদ্ধে শক্তিশালী ও সাহসী। কিন্তু হাওয়াযিন, বনু হানীফা, পারস্য, রোম বা নির্দিষ্ট কোনো জাতিকেই বোঝানো হয়েছে, এর পক্ষে কোনো বর্ণনা বা যুক্তির প্রমাণ আমাদের সামনে রাখা হয়নি। এদের কেউ হতে পারে, অন্য কেউও হতে পারে। তাঁর উপসংহার: আল্লাহ যা বলেছেন, তা-ই বলা ছাড়া এর চেয়ে সঠিক কোনো কথা নেই। অর্থাৎ, তাদের ডাকা হবে প্রবল শক্তিধর এক জাতির দিকে।"
          },
          {
            "en": "Ibn Kathir records the same position: Mujahid, in one report, named no group, Ibn Jurayj held this, and it is the choice of Ibn Jarir, that is at-Tabari. Al-Baghawi's report from Ibn Jurayj is different, since there 'Umar (RA) called them to Persia; the two books carry two reports under one name, and both are given here as found. Ma'arif al-Qur'an takes a third line: there is no conflict between the views at all, since the word qawm, people, could take in all these nations.",
            "bn": "ইবন কাসীরও একই অবস্থান উল্লেখ করেন। মুজাহিদ এক বর্ণনায় কোনো দলের নাম নেননি, ইবন জুরাইজ এ মত পোষণ করতেন, আর ইবন জারীর অর্থাৎ তাবারী এটাই গ্রহণ করেছেন। তবে বাগাভীতে ইবন জুরাইজের যে বর্ণনা, তা আলাদা। সেখানে উমার (রাঃ) তাদের পারস্যের বিরুদ্ধে ডেকেছিলেন। এক নামে দুই কিতাবে দুই রকম বর্ণনা এসেছে, আর এখানে দুটোই যেমন পাওয়া গেছে তেমন রাখা হলো। মাআরিফুল কুরআন তৃতীয় পথ ধরে। তার মতে মতগুলোর মধ্যে আদৌ কোনো বিরোধ নেই, কারণ কাওম অর্থাৎ জাতি শব্দটি এসব জাতিকেই ধারণ করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Case Made for Two Caliphs",
          "bn": "দুই খলীফার পক্ষে যুক্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws the sharpest conclusion. In this verse, he writes, is evidence that the leadership of Abu Bakr and 'Umar (RA) was valid, because Abu Bakr called these bedouins to fight Banu Hanifa and 'Umar called them to fight Persia and Rome. He rejects the Hunayn reading of 'Ikrima and Qatada for a stated reason: the caller cannot have been the Messenger ﷺ, since he had told them, you will never go out with me and never fight an enemy with me, the words of 9:83. It is known, he adds, that only those two called them after the Prophet ﷺ.",
            "bn": "কুরতুবী সবচেয়ে জোরালো সিদ্ধান্তটি টানেন। তিনি লেখেন, এ আয়াতে প্রমাণ আছে যে আবূ বকর ও উমার (রাঃ)-এর নেতৃত্ব বৈধ ছিল। কারণ আবূ বকর এই বেদুঈনদের বনু হানীফার বিরুদ্ধে ডেকেছিলেন, আর উমার ডেকেছিলেন পারস্য ও রোমের বিরুদ্ধে। ইকরিমা ও কাতাদার হুনায়ন-ব্যাখ্যা তিনি নাকচ করেন, কারণও বলে দেন। ডাকদাতা রাসূল ﷺ হতে পারেন না, কেননা তিনি তাদের বলে দিয়েছিলেন: তোমরা কখনো আমার সঙ্গে বের হবে না, আমার সঙ্গে কোনো শত্রুর বিরুদ্ধে লড়বে না। এটি ৯:৮৩ আয়াতের ভাষা। তিনি যোগ করেন, নবী ﷺ-এর পরে এই দুজন ছাড়া আর কেউ তাদের ডাকেননি, এটা জানা কথা।"
          },
          {
            "en": "Al-Qurtubi does not leave the other side unheard. He relays az-Zamakhshari: if the Hunayn view is soundly from Qatada, then never with me means, as long as you remain as you are, with sickness in your hearts and wavering in religion. Or, on Mujahid's view, the promise was that they would follow the Messenger ﷺ only as volunteers, with no share in the spoils. He closes with, and Allah knows best. Ma'arif al-Qur'an reports al-Qurtubi's conclusion, and argues that there is no proof the Prophet ﷺ called the bedouins to fight after Khaybar, nor was the foe at Hunayn so formidable.",
            "bn": "কুরতুবী অপর পক্ষের কথাও শোনান। তিনি যামাখশারীর বক্তব্য উদ্ধৃত করেন: হুনায়নের মতটি যদি কাতাদা থেকে সঠিকভাবে প্রমাণিত হয়, তবে কখনো আমার সঙ্গে নয় কথাটির অর্থ হবে, যতদিন তোমরা অন্তরের রোগ আর দ্বীনের ব্যাপারে দোদুল্যমানতা নিয়ে থাকবে। অথবা মুজাহিদের মত অনুযায়ী, কথা ছিল তারা রাসূল ﷺ-এর পেছনে যাবে কেবল স্বেচ্ছাসেবক হিসেবে, গনীমতে তাদের কোনো ভাগ থাকবে না। শেষে তিনি বলেন, আল্লাহই ভালো জানেন। মাআরিফুল কুরআন কুরতুবীর এই সিদ্ধান্ত উল্লেখ করে। তার যুক্তি, খায়বারের পরে নবী ﷺ বেদুঈনদের লড়াইয়ে ডেকেছিলেন, এমন কোনো প্রমাণ নেই, আর হুনায়নের প্রতিপক্ষও অতটা প্রবল ছিল না।"
          },
          {
            "en": "As-Sa'di reaches a similar point by another road: the verse shows the merit of the rightly guided caliphs who called people to strive against those of great might, and that obeying them in that was obligatory. Against all this stand Qatada's report in at-Tabari, in which the bedouins were called at Hunayn and some answered well, and at-Tabari's own refusal to fix the people at all. These are each scholar's arguments, reported as theirs. The article takes no side on who the caller was.",
            "bn": "সা'দী অন্য পথ ধরে কাছাকাছি জায়গায় পৌঁছান। তাঁর মতে আয়াতটি খুলাফায়ে রাশিদীনের মর্যাদা দেখায়, যাঁরা প্রবল শক্তিধরদের বিরুদ্ধে সংগ্রামে ডেকেছিলেন। আরও দেখায়, সে ব্যাপারে তাঁদের আনুগত্য করা ওয়াজিব ছিল। এর বিপরীতে আছে তাবারীতে কাতাদার বর্ণনা, যেখানে হুনায়নে বেদুঈনদের ডাকা হয়েছিল আর কেউ কেউ ভালোভাবে সাড়া দিয়েছিল। আছে তাবারীর নিজের অবস্থানও, তিনি জাতিটিকে নির্দিষ্টই করেননি। এগুলো প্রত্যেক আলিমের নিজস্ব যুক্তি, তাঁদের নামেই উল্লেখ করা হলো। ডাকদাতা কে ছিলেন, এ প্রশ্নে এ লেখা কোনো পক্ষ নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fighting, or Islam Without It",
          "bn": "লড়াই, নয়তো বিনা লড়াইয়ে ইসলাম"
        },
        "p": [
          {
            "en": "Tuqatilunahum aw yuslimun: you will fight them, or they will submit. At-Tabari glosses it: you will fight those you are called against, or they submit without war or fighting. Al-Qurtubi relays az-Zajjaj to the same effect, that the sense is, or they submit with no fighting. Ibn Kathir: or they enter your religion without a fight, by their own choice. Al-Qurtubi notes that yuslimun is joined to tuqatilunahum: one of the two will happen.",
            "bn": "তুকাতিলূনাহুম আও ইউসলিমূন: তোমরা তাদের সঙ্গে লড়বে, অথবা তারা আত্মসমর্পণ করবে। তাবারীর ব্যাখ্যা: যাদের বিরুদ্ধে তোমাদের ডাকা হবে, তাদের সঙ্গে তোমরা লড়বে, অথবা তারা যুদ্ধ-বিগ্রহ ছাড়াই আত্মসমর্পণ করবে। কুরতুবী যাজ্জাজের কথা উদ্ধৃত করেন, অর্থ একই: অথবা তারা বিনা লড়াইয়ে আত্মসমর্পণ করবে। ইবন কাসীর বলেন, অথবা তারা লড়াই ছাড়া নিজেদের ইচ্ছায় তোমাদের দ্বীনে প্রবেশ করবে। কুরতুবী লক্ষ করেন, ইউসলিমূন ক্রিয়াটি তুকাতিলূনাহুম-এর সঙ্গে যুক্ত: দুটি বিষয়ের যেকোনো একটি ঘটবে।"
          },
          {
            "en": "Al-Qurtubi gives the reading of Ubayy (RA), aw yuslimu, taking it to mean until they submit, as one says eat or you are full, meaning until you are full. At-Tabari cites the same wording from some readings, and notes that it goes against the copies of the Qur'an in the cities and the body of the reciters, and says reading with it is not permitted in his view. Al-Qurtubi calls the clause the rule for those from whom jizya is not taken, either fighting or Islam with no third, and relays az-Zajjaj: this concerns the idolaters, not the People of the Book.",
            "bn": "কুরতুবী উবাই (রাঃ)-এর কিরাআত আও ইউসলিমূ উল্লেখ করে এর অর্থ করেন, যতক্ষণ না তারা আত্মসমর্পণ করে। যেমন আরবিতে বলা হয়, খাও অথবা পেট ভরুক, মানে পেট না ভরা পর্যন্ত খাও। তাবারী কোনো কোনো কিরাআতে একই শব্দ পাওয়ার কথা বলেন, তবে জানান, এ পাঠ বিভিন্ন শহরের মুসহাফের বিপরীত, কারীদের সর্বসম্মত পাঠেরও বিপরীত, তাই তাঁর মতে এভাবে পড়া জায়েয নয়। কুরতুবী এ অংশকে বলেন তাদের বিধান, যাদের কাছ থেকে জিযিয়া নেওয়া হয় না: হয় লড়াই, নয় ইসলাম, তৃতীয় কোনো পথ নেই। তিনি যাজ্জাজের কথাও আনেন, এটা মুশরিকদের ব্যাপারে, আহলে কিতাবের ব্যাপারে নয়।"
          },
          {
            "en": "As-Sa'di reads it as a description of what happened: while those peoples were strong they would not pay jizya, so it was Islam or fighting; once worn down, they accepted either Islam or jizya. This needs saying plainly. The verse concerns one historical summons, to particular bedouin tribes, about wars the commentators place in the first generation of Islam. It licenses nothing against any person, people or community living today, and no one may carry its fight them into a present-day conflict. This article draws no ruling of its own from it.",
            "bn": "সা'দী একে দেখেন যা ঘটেছিল তার বিবরণ হিসেবে। সেই জাতিগুলো যতদিন শক্তিশালী ছিল, তারা জিযিয়া দিতে রাজি ছিল না, তাই হয় ইসলাম নয় লড়াই। শক্তি ক্ষয় হওয়ার পর তারা ইসলাম অথবা জিযিয়া মেনে নেয়। কথাটা সোজাসুজি বলা দরকার। আয়াতটি ইতিহাসের একটি নির্দিষ্ট ডাকের কথা বলছে। ডাক ছিল নির্দিষ্ট কিছু বেদুঈন গোত্রের প্রতি, আর তাফসীরকারেরা সেই যুদ্ধগুলোকে ইসলামের প্রথম যুগেই স্থাপন করেন। আজ জীবিত কোনো ব্যক্তি, জাতি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। এর তাদের সঙ্গে লড়বে কথাটি বর্তমানের কোনো সংঘাতে টেনে আনার অধিকার কারও নেই। এ লেখা আয়াত থেকে নিজের কোনো বিধান বের করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Old Turning Named",
          "bn": "পুরোনো মুখ ফেরানোর কথা"
        },
        "p": [
          {
            "en": "Fa-in tuti'u yu'tikumu llahu ajran hasana: if you obey, Allah will give you a good reward. Ibn Kathir explains obeying as answering, going out to strive, and fulfilling what is due from you in it. At-Tabari and the Muyassar name the good reward as Paradise. Al-Qurtubi widens it: spoils and victory in this world, and Paradise in the next. As-Sa'di calls it the reward that Allah and His Messenger ﷺ attached to striving in His way.",
            "bn": "ফা-ইন তুতীউ ইউ'তিকুমুল্লাহু আজরান হাসানা: যদি তোমরা আনুগত্য কর, আল্লাহ তোমাদের উত্তম প্রতিদান দেবেন। ইবন কাসীর আনুগত্যের ব্যাখ্যা দেন এভাবে: ডাকে সাড়া দেওয়া, সংগ্রামে বের হওয়া, আর তাতে নিজের উপর যা দায়িত্ব তা পালন করা। তাবারী ও মুয়াসসারের মতে উত্তম প্রতিদান হলো জান্নাত। কুরতুবী একে আরও বিস্তৃত করেন: দুনিয়ায় গনীমত ও বিজয়, আখিরাতে জান্নাত। সা'দী বলেন, এ সেই প্রতিদান যা আল্লাহ ও তাঁর রাসূল ﷺ তাঁর পথে সংগ্রামের সঙ্গে জুড়ে দিয়েছেন।"
          },
          {
            "en": "Wa in tatawallaw kama tawallaytum min qabl: and if you turn away as you turned away before. At-Tabari: as you disobeyed His command to march with the Messenger ﷺ to Makka. Ibn Kathir: at the time of al-Hudaybiya, when you were called and stayed behind; al-Baghawi and al-Qurtubi, the year of al-Hudaybiya. The punishment, say at-Tabari, al-Baghawi and al-Qurtubi, is the Fire. The old failure is named exactly, yet the call is still held out. No tafsir fetched for this verse attaches a sound hadith to it.",
            "bn": "ওয়া ইন তাতাওয়াল্লাও কামা তাওয়াল্লাইতুম মিন কাবল: আর যদি মুখ ফিরিয়ে নাও, যেমন আগে ফিরিয়েছিলে। তাবারী বলেন, যেমন রাসূল ﷺ-এর সঙ্গে মক্কার পথে রওনা হওয়ার আদেশ তোমরা অমান্য করেছিলে। ইবন কাসীরের ভাষায়, হুদায়বিয়ার সময়, যখন তোমাদের ডাকা হয়েছিল আর তোমরা পিছিয়ে ছিলে। বাগাভী ও কুরতুবী বলেন, হুদায়বিয়ার বছর। তাবারী, বাগাভী ও কুরতুবীর মতে শাস্তি হলো জাহান্নাম। পুরোনো ব্যর্থতার কথা হুবহু উল্লেখ হলো, তবু ডাকটা এখনো বাড়িয়ে ধরা আছে। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি।"
          },
          {
            "en": "Al-Baghawi ends with what the warning stirred: when this verse came down, the people with chronic ailments asked, how will it be for us, O Messenger of Allah? He gives it without a chain, and the answer is the next verse, 48:17, which has its own article. Ma'arif al-Qur'an, citing other works, says that from among the bedouins who stayed behind, Muzayna and Juhayna later fought alongside the Prophet ﷺ. A failure was named, a harder door was opened, and some walked through it.",
            "bn": "বাগাভী শেষ করেন এই সতর্কবাণী মানুষের মনে কী জাগিয়েছিল তা দিয়ে। আয়াতটি নাযিল হলে দীর্ঘস্থায়ী রোগে ভোগা লোকেরা জিজ্ঞেস করল, হে আল্লাহর রাসূল, আমাদের কী হবে? তিনি কোনো সনদ দেননি। এর জবাব পরের আয়াত ৪৮:১৭, যার নিজস্ব আলোচনা আলাদা আছে। মাআরিফুল কুরআন অন্য গ্রন্থের বরাতে জানায়, পিছিয়ে থাকা বেদুঈনদের মধ্য থেকে মুযায়না ও জুহায়না গোত্র পরে নবী ﷺ-এর সঙ্গে লড়াইয়ে অংশ নিয়েছিল। একটা ব্যর্থতার কথা বলা হলো, একটা কঠিন দরজা খোলা হলো, আর কেউ কেউ সেই দরজা দিয়ে হেঁটে গেল।"
          }
        ]
      }
    ]
  },
  "48:17-18": {
    "sections": [
      {
        "h": {
          "en": "Where Allah Lifted Blame",
          "bn": "যাদের উপর দোষ নেই"
        },
        "p": [
          {
            "en": "The verse before, 48:16, ends by warning the bedouins who had stayed behind: if you turn away as you turned away before, He will punish you with a painful punishment. Al-Qurtubi reports from Ibn 'Abbas (RA), without a chain, that the people of chronic disability then asked: how is it with us, O Messenger of Allah? So came laysa 'ala l-a'ma harajun: no blame on the blind, nor on the lame, nor on the sick. Ma'arif al-Qur'an repeats the account from al-Qurtubi.",
            "bn": "আগের আয়াত ৪৮:১৬ শেষ হয়েছে পিছিয়ে থাকা বেদুঈনদের প্রতি এক সতর্কবাণীতে: আগে যেমন মুখ ফিরিয়েছিলে, এবারও মুখ ফেরালে তিনি তোমাদের কষ্টদায়ক শাস্তি দেবেন। কুরতুবী সনদ ছাড়াই ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, তখন দীর্ঘস্থায়ী অক্ষমতায় ভোগা মানুষেরা জিজ্ঞেস করল, হে আল্লাহর রাসূল, আমাদের কী হবে? তখন নাজিল হলো লাইসা আলাল আ'মা হারাজ: অন্ধের উপর দোষ নেই, খোঁড়ার উপর নেই, রোগীর উপরও নেই। মাআরিফুল কুরআন কুরতুবী থেকে একই ঘটনা আনে।"
          },
          {
            "en": "At-Tabari glosses haraj as constraint: there is none on the blind, the lame or the sick who stay behind from jihad with the believers, because of the ailments that keep them from battle. Qatada says all of this concerns jihad; ad-Dahhak says fighting. The Muyassar says no sin, since they are unable. Ibn Kathir sorts the excuses: some last, like blindness and continuing lameness; some pass, like an illness of a few days, during which the sick person counts among the lastingly excused until he recovers.",
            "bn": "তাবারী হারাজের অর্থ করেন সংকীর্ণতা বা চাপ। অন্ধ, খোঁড়া বা অসুস্থ যদি মু'মিনদের সঙ্গে জিহাদে না গিয়ে পেছনে থাকে, তাদের উপর কোনো চাপ নেই, কারণ তাদের অসুখ-অক্ষমতাই তাদের যুদ্ধ থেকে আটকে রাখে। কাতাদা বলেন, এর সবটাই জিহাদ প্রসঙ্গে। দাহহাক বলেন, লড়াই প্রসঙ্গে। মুয়াসসার বলে, তাদের গুনাহ নেই, কারণ তারা অক্ষম। ইবন কাসীর ওজরগুলো ভাগ করেন। কিছু স্থায়ী, যেমন অন্ধত্ব আর স্থায়ী খোঁড়ামি। কিছু সাময়িক, যেমন কয়েক দিনের অসুখ। অসুখ যত দিন থাকে, রোগী সেরে ওঠা পর্যন্ত স্থায়ী ওজরওয়ালাদের মধ্যেই গণ্য হয়।"
          },
          {
            "en": "Al-Qurtubi also cites Muqatil: these were the chronically ill who stayed behind from al-Hudaybiya, whom Allah excused, and any of them who wished could go out to Khaybar. The verses before, 48:11 to 48:16, speak of bedouins who stayed behind with excuses; this verse sets the truly unable apart from them. Those verses, and the reports about Quraysh below, speak of those men at that time; they license nothing against any living person or community. This article reports what the commentators say and draws no ruling of its own.",
            "bn": "কুরতুবী মুকাতিলের কথাও আনেন: এরা ছিল দীর্ঘ রোগে ভোগা সেই মানুষেরা, যারা হুদায়বিয়ার সফরে যেতে পারেনি, আর আল্লাহ তাদের ওজর কবুল করেছেন। তাদের কেউ চাইলে খাইবারে যেতে পারত। আগের আয়াতগুলো, ৪৮:১১ থেকে ৪৮:১৬, অজুহাত দেখিয়ে পিছিয়ে থাকা বেদুঈনদের কথা বলে। এ আয়াত সত্যিকারের অক্ষমদের তাদের থেকে আলাদা করে দেয়। ওই আয়াতগুলো, আর নিচে কুরাইশ সম্পর্কে আসা বর্ণনাগুলো, সে সময়ের সেই মানুষদের কথাই বলে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি তারা দেয় না। এ লেখা তাফসীরকারদের কথা জানায় মাত্র, নিজে থেকে কোনো বিধান টানে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering the Call, or Turning",
          "bn": "ডাকে সাড়া, নাকি মুখ ফেরানো"
        },
        "p": [
          {
            "en": "Then the verse turns to everyone: wa man yuti'i llaha wa rasulahu yudkhilhu jannatin, whoever obeys Allah and His Messenger, He admits him to gardens beneath which rivers flow; wa man yatawalla yu'adhdhibhu, and whoever turns away, He punishes him. At-Tabari keeps it in context: obeying is answering the call to fight, turning away is staying behind, and the punishment is Jahannam on the Day of Resurrection. Ibn Kathir: turning away is shrinking from jihad to tend a livelihood, punished with humiliation here and the Fire hereafter. As-Sa'di widens it: all happiness lies in obeying Allah, all misery in disobeying Him.",
            "bn": "এরপর আয়াত সবার দিকে ফেরে: ওয়া মান ইউতি'ইল্লাহা ওয়া রাসূলাহু ইউদখিলহু জান্নাত, যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে, তিনি তাকে এমন বাগানে প্রবেশ করাবেন যার নিচ দিয়ে নদী বয়ে চলে। ওয়া মাই ইয়াতাওয়াল্লা ইউআযযিবহু, আর যে মুখ ফেরায়, তিনি তাকে শাস্তি দেবেন। তাবারী কথাটা প্রসঙ্গের ভেতরেই রাখেন। আনুগত্য মানে ডাক এলে লড়াইয়ে সাড়া দেওয়া, মুখ ফেরানো মানে পেছনে থেকে যাওয়া, আর শাস্তি কিয়ামতের দিন জাহান্নাম। ইবন কাসীরের মতে মুখ ফেরানো হলো জিহাদ থেকে সরে জীবিকায় মন দেওয়া। তার শাস্তি দুনিয়ায় অপমান, আখিরাতে আগুন। সা'দী একে সব আনুগত্যে ছড়িয়ে দেন: সব সৌভাগ্য আল্লাহর আনুগত্যে, সব দুর্ভাগ্য তাঁর নাফরমানিতে।"
          },
          {
            "en": "Two commentators record a difference in reading. Al-Qurtubi says Nafi' and Ibn 'Amir read nudkhilhu, We will admit him, with the nun of majesty, while the rest read yudkhilhu, He will admit him, the reading Abu 'Ubayd and Abu Hatim chose because the name of Allah comes first. Al-Baghawi says the people of Madina and Sham read nudkhilhu and nu'adhdhibhu, with the nun in both verbs, and the others read both with ya', because of wa man yuti'i llah. Al-Qurtubi names only the first verb; al-Baghawi names both.",
            "bn": "দুজন তাফসীরকার কিরাআতের একটি পার্থক্য উল্লেখ করেন। কুরতুবী বলেন, নাফি' ও ইবন আমির পড়েছেন নুদখিলহু, আমি তাকে প্রবেশ করাব, মর্যাদা বোঝানো 'নূন' দিয়ে। বাকিরা পড়েছেন ইউদখিলহু, তিনি তাকে প্রবেশ করাবেন। আবু উবাইদ ও আবু হাতিম এ পাঠটাই বেছে নিয়েছেন, কারণ বাক্যের শুরুতে আল্লাহর নাম এসেছে। বাগাভী বলেন, মদীনা ও শামের কারীরা দুটো ক্রিয়াই 'নূন' দিয়ে পড়েছেন, নুদখিলহু ও নুআযযিবহু। অন্যরা দুটোই পড়েছেন 'ইয়া' দিয়ে, ওয়া মাই ইউতি'ইল্লাহ কথাটার কারণে। কুরতুবী শুধু প্রথম ক্রিয়ার কথা বলেন, বাগাভী বলেন দুটোরই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rumour from Makka",
          "bn": "মক্কা থেকে আসা গুজব"
        },
        "p": [
          {
            "en": "Then 48:18: laqad radiya llahu 'ani l-mu'minina idh yubayi'unaka tahta sh-shajara, Allah was pleased with the believers when they pledged allegiance to you under the tree. At-Tabari, al-Qurtubi and the Muyassar name it bay'at ar-ridwan, given at al-Hudaybiya. As-Sa'di says it took that name from Allah's pleasure with the believers in it, and was also called the pledge of the people of the tree. At-Tabari gives the cause through Ibn Ishaq: the Prophet ﷺ first sent Khirash ibn Umayya to Quraysh, who hamstrung his camel and meant to kill him before he was let go.",
            "bn": "এরপর ৪৮:১৮: লাকাদ রাদিয়াল্লাহু আনিল মু'মিনীনা ইয ইউবায়ি'ঊনাকা তাহতাশ শাজারাহ, মু'মিনরা যখন গাছের নিচে আপনার হাতে বাই'আত করছিল, আল্লাহ তাদের উপর সন্তুষ্ট হয়েছেন। তাবারী, কুরতুবী ও মুয়াসসার একে বলেন বাই'আতুর রিদওয়ান, যা হয়েছিল হুদায়বিয়ায়। সা'দী বলেন, এতে মু'মিনদের উপর আল্লাহর সন্তুষ্টির কারণেই এ নাম, আর একে গাছওয়ালাদের বাই'আতও বলা হয়। ঘটনার কারণ তাবারী আনেন ইবন ইসহাকের সূত্রে। নবী ﷺ প্রথমে খিরাশ ইবন উমাইয়াকে কুরাইশের কাছে পাঠান। তারা তাঁর উট কেটে ফেলে, তাঁকেও মেরে ফেলতে চায়, পরে ছেড়ে দেয়।"
          },
          {
            "en": "He then called 'Umar (RA), who feared Quraysh for his life, with no clan in Makka to shield him, and named 'Uthman ibn 'Affan (RA) instead. 'Uthman told Quraysh that the Prophet ﷺ had come to visit the House, not for war. Offered the circuit of the House, he would not make it before the Messenger of Allah ﷺ did, and they held him back. Word came that he had been killed, and the Prophet ﷺ called the people to pledge. Al-Qurtubi adds that he struck his right hand on his left for 'Uthman, who thus counted as present. The report of his death proved false.",
            "bn": "তারপর তিনি উমর (রাঃ)-কে ডাকেন। উমর (রাঃ) বললেন, কুরাইশের হাতে প্রাণের ভয় আছে, মক্কায় তাঁকে রক্ষা করার মতো তাঁর গোত্রের কেউ নেই। তিনি উসমান ইবন আফফান (রাঃ)-এর নাম প্রস্তাব করলেন। উসমান (রাঃ) গিয়ে কুরাইশকে জানালেন, নবী ﷺ যুদ্ধ করতে আসেননি, এসেছেন বাইতুল্লাহর যিয়ারতে। কুরাইশ তাঁকে তাওয়াফের সুযোগ দিল। তিনি বললেন, আল্লাহর রাসূল ﷺ তাওয়াফ না করা পর্যন্ত তিনি করবেন না। কুরাইশ তাঁকে আটকে রাখল। খবর ছড়াল যে তাঁকে হত্যা করা হয়েছে, আর নবী ﷺ সবাইকে বাই'আতের ডাক দিলেন। কুরতুবী যোগ করেন, তিনি উসমানের পক্ষ থেকে নিজের ডান হাত বাম হাতের উপর রাখেন, ফলে উসমান উপস্থিতদের মধ্যেই গণ্য হলেন। পরে জানা গেল, হত্যার খবর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, or Not Fleeing",
          "bn": "মৃত্যু পর্যন্ত, নাকি না পালানো"
        },
        "p": [
          {
            "en": "On what they pledged, the reports differ. At-Tabari and al-Baghawi note that people used to say it was unto death. Jabir ibn 'Abdullah (RA) said no: it was that they would not flee, and al-Baghawi names Ma'qil ibn Yasar (RA) with him. Al-Qurtubi carries the other answer from Salama (RA), asked what they pledged at al-Hudaybiya: unto death. At-Tabari and al-Baghawi also report from Bukayr ibn al-Ashajj that when people pledged unto death, the Prophet ﷺ said: as far as you are able.",
            "bn": "তাঁরা কিসের উপর বাই'আত করেছিলেন, এ নিয়ে বর্ণনাগুলো আলাদা। তাবারী ও বাগাভী জানান, লোকে বলত বাই'আত হয়েছিল মৃত্যু পর্যন্ত লড়ার উপর। জাবির ইবন আবদুল্লাহ (রাঃ) বলতেন, তা নয়। বাই'আত ছিল না পালানোর উপর। বাগাভী তাঁর সঙ্গে মা'কিল ইবন ইয়াসার (রাঃ)-এর নামও বলেন। কুরতুবী উল্টো উত্তরটি আনেন সালামা (রাঃ) থেকে। হুদায়বিয়ার দিন কিসের উপর বাই'আত করেছিলেন, জিজ্ঞেস করা হলে তিনি বলেন, মৃত্যুর উপর। তাবারী ও বাগাভী বুকাইর ইবনুল আশাজ্জ থেকেও আনেন, লোকেরা মৃত্যুর উপর বাই'আত করলে নবী ﷺ বললেন: যতটুকু তোমাদের সাধ্যে কুলায়।"
          },
          {
            "en": "Al-Qurtubi quotes Jabir from Sahih Muslim, and at-Tabari carries the same report by his own chain. In Sahih Muslim (1856), Jabir (RA) said: 'We were 1,400 on the day of al-Hudaybiya. We pledged allegiance to him while 'Umar was holding his hand beneath the tree, and it was a samura.' And he said: 'We pledged to him that we would not flee, and we did not pledge to him unto death.' It is in Muslim's Sahih. No commentator here settles which account of the terms is right, and this article does not either.",
            "bn": "কুরতুবী জাবিরের বর্ণনাটি সহীহ মুসলিম থেকে উদ্ধৃত করেন, আর তাবারী একই বর্ণনা আনেন নিজের সনদে। সহীহ মুসলিমে (নং ১৮৫৬) জাবির (রাঃ) বলেন: 'হুদায়বিয়ার দিন আমরা ছিলাম ১,৪০০ জন। আমরা তাঁর হাতে বাই'আত করলাম, উমর তখন গাছের নিচে তাঁর হাত ধরে ছিলেন। গাছটা ছিল একটা সামুরা।' তিনি আরও বলেন: 'আমরা তাঁর কাছে বাই'আত করেছিলাম যে পালাব না। মৃত্যুর উপর বাই'আত করিনি।' হাদিসটি ইমাম মুসলিমের সহীহ গ্রন্থে আছে। শর্ত নিয়ে কোন বর্ণনাটি ঠিক, এখানে কোনো তাফসীরকার তা মীমাংসা করেননি, এ লেখাও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Many Hands",
          "bn": "কতগুলো হাত"
        },
        "p": [
          {
            "en": "The number comes in several figures, and at-Tabari sets out the differing counts without choosing between them. 1,400 is Jabir's figure in the report just quoted and in several of at-Tabari's chains, and it is the figure Ibn Kathir states. 1,500 is Qatada's figure in at-Tabari, and as-Sa'di says about 1,500. A figure of 1,525 is reported in at-Tabari from Ibn 'Abbas. 1,300 is the figure of 'Abdullah ibn Abi Awfa (RA), in at-Tabari, al-Qurtubi and al-Baghawi.",
            "bn": "সংখ্যাটা এসেছে কয়েক রকমে। তাবারী ভিন্ন ভিন্ন সংখ্যাগুলো উল্লেখ করেন, কোনোটিকে বেছে নেন না। ১,৪০০ জাবিরের সংখ্যা, এইমাত্র উদ্ধৃত বর্ণনায় এবং তাবারীর কয়েকটি সনদে। ইবন কাসীরও এ সংখ্যাই বলেন। ১,৫০০ তাবারীতে কাতাদার সংখ্যা, আর সা'দী বলেন প্রায় ১,৫০০। তাবারীতে ইবন আব্বাস (রাঃ) থেকে এসেছে ১,৫২৫। ১,৩০০ আবদুল্লাহ ইবন আবী আওফা (রাঃ)-এর সংখ্যা, যা তাবারী, কুরতুবী ও বাগাভী তিনজনই আনেন।"
          },
          {
            "en": "Jabir himself is reported with two figures. Al-Qurtubi and al-Baghawi have him, through Salim ibn Abi al-Ja'd, saying 1,500. At-Tabari reports that when Sa'id ibn al-Musayyib was told Jabir said 1,500, he answered that Jabir had forgotten: he had told him 1,400. Al-Qurtubi gives about 1,400, notes 1,500, and adds that other figures were given. The sources leave the count unsettled, and so does this article.",
            "bn": "জাবির (রাঃ) থেকেই দুই রকম সংখ্যা এসেছে। কুরতুবী ও বাগাভী সালিম ইবন আবিল জা'দের সূত্রে তাঁর মুখে ১,৫০০ উল্লেখ করেন। তাবারী জানান, সাঈদ ইবনুল মুসাইয়িবকে যখন বলা হলো জাবির ১,৫০০ বলেন, তিনি বললেন, জাবির ভুলে গেছেন, তাঁকে তিনি ১,৪০০ বলেছিলেন। কুরতুবী বলেন প্রায় ১,৪০০, ১,৫০০-এর কথাও আনেন, আর জানান যে অন্য সংখ্যাও বলা হয়েছে। উৎসগুলো সংখ্যাটা মীমাংসা করেনি, এ লেখাও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Tree Nobody Could Find",
          "bn": "যে গাছ আর খুঁজে মেলেনি"
        },
        "p": [
          {
            "en": "The verse says only tahta sh-shajara, under the tree. Ibn Kathir says it was a samura in the land of al-Hudaybiya; al-Baghawi and Jabir in Muslim's wording say a samura too, and at-Tabari has Salama (RA) recall the Prophet ﷺ beneath a samura when the call to pledge went out. Ma'arif al-Qur'an renders it as the gum-acacia. On what became of it, Ibn Kathir quotes al-Bukhari, and Ma'arif al-Qur'an cites the same report, which is in Sahih al-Bukhari (4163).",
            "bn": "আয়াত শুধু বলে তাহতাশ শাজারাহ, গাছের নিচে। ইবন কাসীর বলেন, সেটা ছিল হুদায়বিয়ার মাটিতে একটি সামুরা গাছ। বাগাভী এবং মুসলিমের বর্ণনায় জাবির (রাঃ)-ও বলেন সামুরা। তাবারীতে সালামা (রাঃ) স্মরণ করেন, বাই'আতের ডাক যখন এল, নবী ﷺ তখন একটি সামুরা গাছের নিচে। মাআরিফুল কুরআন ইংরেজিতে একে বাবলা জাতীয় গাছ বলে। গাছটার কী হলো, সে বিষয়ে ইবন কাসীর বুখারী থেকে উদ্ধৃতি দেন, মাআরিফুল কুরআনও একই বর্ণনা আনে। বর্ণনাটি আছে সহীহ বুখারীতে (নং ৪১৬৩)।"
          },
          {
            "en": "Tariq ibn 'Abd ar-Rahman said: 'I set out for Hajj and passed by people praying. I said: what is this mosque? They said: this is the tree where the Messenger of Allah ﷺ took the Pledge of Ridwan. So I went to Sa'id ibn al-Musayyib and told him, and Sa'id said: my father told me he was among those who pledged to the Messenger of Allah ﷺ under the tree. He said: when we went out the following year, we had forgotten it and could not find it. Then Sa'id said: the Companions of Muhammad ﷺ did not know it, and you know it, so you are the more knowing.'",
            "bn": "তারিক ইবন আবদুর রহমান বলেন: 'আমি হজে রওনা হলাম। পথে কিছু লোককে নামাজ পড়তে দেখলাম। জিজ্ঞেস করলাম, এটা কোন মসজিদ? তারা বলল, এ সেই গাছ, যেখানে আল্লাহর রাসূল ﷺ বাই'আতুর রিদওয়ান নিয়েছিলেন। আমি সাঈদ ইবনুল মুসাইয়িবের কাছে গিয়ে তাঁকে জানালাম। সাঈদ বললেন, আমার বাবা আমাকে বলেছেন, তিনি গাছের নিচে আল্লাহর রাসূল ﷺ-এর হাতে বাই'আতকারীদের একজন ছিলেন। তিনি বলেছেন, পরের বছর যখন আমরা বের হলাম, গাছটা ভুলে গিয়েছিলাম, আর খুঁজে পাইনি। তারপর সাঈদ বললেন, মুহাম্মাদ ﷺ-এর সাহাবীরা তা জানতেন না, আর তোমরা জানো। তাহলে তোমরাই বেশি জানো!'"
          },
          {
            "en": "Other reports tell the tree's fate differently. At-Tabari has one from Bukayr ibn al-Ashajj, under the words they claimed, that 'Umar (RA) passed the place after the tree had gone; people disputed where it had stood, and he told them to move on. In that report the samura had gone, taken by a flood or by something else. Al-Baghawi gives the 'Umar report as narrated. Ma'arif al-Qur'an says it is reported that 'Umar had the tree cut down, fearing later people might worship it. The accounts differ and are left as they stand.",
            "bn": "গাছটার পরিণতি নিয়ে অন্য বর্ণনাও আছে। তাবারী বুকাইর ইবনুল আশাজ্জের একটি বর্ণনা আনেন 'তারা দাবি করে' কথাটি জুড়ে। তাতে আছে, গাছটা চলে যাওয়ার পর উমর (রাঃ) সে জায়গা দিয়ে যাচ্ছিলেন। গাছ কোথায় ছিল তা নিয়ে লোকেরা মতভেদ করল, তিনি বললেন, চলো, এগিয়ে যাও। সে বর্ণনায় সামুরা গাছটা হারিয়ে গিয়েছিল, হয়তো বন্যায় ভেসে গেছে, নয়তো অন্য কোনো কারণে। বাগাভী উমরের ঘটনাটি 'বর্ণিত আছে' বলে আনেন। মাআরিফুল কুরআন অন্য কথা বলে: বর্ণিত আছে, পরের লোকেরা গাছটার পূজা শুরু করতে পারে এই ভয়ে উমর (রাঃ) সেটা কাটিয়ে ফেলেন। বর্ণনাগুলো আলাদা, আর সেগুলো যেমন আছে তেমনই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Known Hearts, Then Calm",
          "bn": "আগে অন্তর জানা, পরে প্রশান্তি"
        },
        "p": [
          {
            "en": "Fa-'alima ma fi qulubihim: so He knew what was in their hearts. Most commentators fill this with good: at-Tabari, sincere intention, keeping the pledge and patience; Ibn Kathir, truthfulness and loyalty, hearing and obeying; al-Qurtubi, from al-Farra', truthfulness and loyalty, and from Ibn Jurayj and Qatada, contentment with the pledge not to flee. He also records readings that find a weight there: Muqatil, a dislike of pledging unto death, so the sakina came down until they pledged; and it is said, sorrow at being turned back from the House, the Prophet's dream of entering it not yet fulfilled.",
            "bn": "ফা আলিমা মা ফী কুলূবিহিম: তাদের অন্তরে কী ছিল, তিনি তা জানতেন। বেশির ভাগ তাফসীরকার কথাটা ভালো দিয়েই ভরেন। তাবারীর মতে নিয়তের সততা, বাই'আত রক্ষা আর ধৈর্য। ইবন কাসীরের মতে সত্যবাদিতা আর বিশ্বস্ততা, শোনা আর মানা। কুরতুবী ফাররা থেকে আনেন সত্যবাদিতা ও বিশ্বস্ততা, আর ইবন জুরাইজ ও কাতাদা থেকে না পালানোর বাই'আতে সন্তুষ্টি। তিনি এমন মতও আনেন যা সেখানে একটা ভার দেখে। মুকাতিল বলেন, মৃত্যু পর্যন্ত লড়ার বাই'আতে তাদের অনীহা ছিল, তাই সাকীনা নামল, তারপর তারা বাই'আত করল। আরেক মতে, বাইতুল্লাহ থেকে ফিরিয়ে দেওয়ার দুঃখ, আর তাতে প্রবেশের যে স্বপ্ন নবী ﷺ দেখেছিলেন তা তখনও পূরণ না হওয়ার বেদনা।"
          },
          {
            "en": "As-Sa'di holds both: Allah knew their faith and sent the calm as thanks for it, and He knew their distress at the conditions the idolaters imposed and sent it to steady them. For fa-anzala s-sakinata 'alayhim, Ibn Kathir says settledness; at-Tabari adds firmness in their religion, and quotes Qatada, patience and dignity; al-Qurtubi says the soul at rest in the truth of the promise; al-Baghawi, tranquillity and contentment. The article on 48:4 traces the word across the Qur'an. The order here is plain: He knew the hearts, then He sent the calm.",
            "bn": "সা'দী দুটোই ধরেন। আল্লাহ তাদের ঈমান জানতেন, তার শুকরিয়া হিসেবে প্রশান্তি দিলেন। আবার মুশরিকদের চাপানো শর্তে তাদের অস্থিরতাও জানতেন, তাই তাদের দৃঢ় রাখতে প্রশান্তি দিলেন। ফা আনযালাস সাকীনাতা আলাইহিম, এর ব্যাখ্যায় ইবন কাসীর বলেন স্থিরতা। তাবারী যোগ করেন দীনের উপর অটল থাকা, আর কাতাদা থেকে আনেন ধৈর্য ও গাম্ভীর্য। কুরতুবীর মতে প্রতিশ্রুতির সত্যতায় মনের নিশ্চিন্ত হওয়া, বাগাভীর মতে প্রশান্তি ও সন্তুষ্টি। শব্দটা গোটা কুরআনে কোথায় কোথায় এসেছে, ৪৮:৪ আয়াতের লেখায় তা দেখানো হয়েছে। এখানে ক্রমটা স্পষ্ট: আগে তিনি অন্তর জানলেন, তারপর প্রশান্তি পাঠালেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Near Conquest as Reward",
          "bn": "পুরস্কার হিসেবে কাছের বিজয়"
        },
        "p": [
          {
            "en": "Wa-athabahum fathan qariba: and He rewarded them with a near conquest. At-Tabari reads it as recompense: in place of the spoils they had hoped to win from Makka, He gave them a near conquest, which, as was said, was Khaybar; he brings that from Ibn Abi Layla and Qatada. Al-Baghawi and the Muyassar also say Khaybar. As-Sa'di adds that only the people of al-Hudaybiya were present at Khaybar, so it and its spoils were theirs alone, as a reward.",
            "bn": "ওয়া আসাবাহুম ফাতহান কারীবা: আর পুরস্কার হিসেবে তিনি তাদের দিলেন কাছের এক বিজয়। তাবারী একে বিনিময় হিসেবে পড়েন। মক্কা থেকে যে গনীমত পাওয়ার আশা তারা করেছিল, তার বদলে তিনি দিলেন কাছের এক বিজয়, আর বলা হয়েছে সেটা খাইবার। এ মত তিনি আনেন ইবন আবী লাইলা ও কাতাদা থেকে। বাগাভী ও মুয়াসসারও বলেন খাইবার। সা'দী যোগ করেন, খাইবারে শুধু হুদায়বিয়ার লোকেরাই উপস্থিত ছিলেন। তাই খাইবার আর তার গনীমত কেবল তাদেরই প্রাপ্য হলো, প্রতিদান হিসেবে।"
          },
          {
            "en": "Al-Qurtubi records Khaybar from Qatada and Ibn Abi Layla, and then: it is said, the conquest of Makka. Ibn Kathir reads it more widely: the peace Allah brought about between them and their enemies, and the lasting good that followed, joined to the conquests of Khaybar and Makka and then of other lands. Ma'arif al-Qur'an states that the scholars agree on Khaybar. The difference stays recorded as it is, and the spoils promised in 48:19 and 48:20 are left to those verses.",
            "bn": "কুরতুবী কাতাদা ও ইবন আবী লাইলা থেকে খাইবারের কথা আনেন, তারপর বলেন: কারও মতে মক্কা বিজয়। ইবন কাসীর আরও বড় পরিসরে পড়েন। তাঁর মতে এর মধ্যে আছে সেই সন্ধি, যা আল্লাহ তাদের আর তাদের শত্রুদের মধ্যে ঘটালেন, তার পরে আসা স্থায়ী কল্যাণ, আর সেই সঙ্গে খাইবার ও মক্কা বিজয়, তারপর অন্যান্য অঞ্চলের বিজয়। মাআরিফুল কুরআন বলে, আলিমরা খাইবারের ব্যাপারে একমত। মতপার্থক্যটা যেমন আছে তেমনই রাখা হলো। ৪৮:১৯ ও ৪৮:২০ আয়াতে প্রতিশ্রুত গনীমতের আলোচনা সেই আয়াতগুলোর জন্য রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations on Those Who Pledged",
          "bn": "বাই'আতকারীদের নিয়ে দুটি হাদিস"
        },
        "p": [
          {
            "en": "Two narrations the commentators attach speak of those who pledged. Al-Baghawi brings the first through al-Bukhari's own chain, and Ma'arif al-Qur'an cites it. In Sahih al-Bukhari (4154), Jabir (RA) said: 'The Messenger of Allah ﷺ said to us on the day of al-Hudaybiya: You are the best of the people of the earth. And we were 1,400. If I could see today, I would show you the place of the tree.' Al-Bukhari includes it in his Sahih. Ma'arif al-Qur'an cites the second from Muslim, al-Baghawi brings it from Jabir by another chain, and al-Qurtubi states its sense.",
            "bn": "তাফসীরকারদের আনা দুটি বর্ণনা বাই'আতকারীদের কথা বলে। প্রথমটি বাগাভী আনেন খোদ বুখারীর সনদে, মাআরিফুল কুরআনও এটি উল্লেখ করে। সহীহ বুখারীতে (নং ৪১৫৪) জাবির (রাঃ) বলেন: 'হুদায়বিয়ার দিন আল্লাহর রাসূল ﷺ আমাদের বললেন: তোমরা পৃথিবীবাসীদের মধ্যে শ্রেষ্ঠ। আমরা তখন ছিলাম ১,৪০০ জন। আজ যদি আমি দেখতে পেতাম, তোমাদের গাছটার জায়গা দেখিয়ে দিতাম।' ইমাম বুখারী হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন। দ্বিতীয়টি মাআরিফুল কুরআন উল্লেখ করে মুসলিম থেকে, বাগাভী আনেন জাবির থেকে ভিন্ন এক সনদে, আর কুরতুবী তার মর্ম বলেন।"
          },
          {
            "en": "In Sahih Muslim (2496), Umm Mubashshir (RA) heard the Prophet ﷺ say in Hafsa's presence: 'None of the people of the tree, those who pledged beneath it, will enter the Fire, if Allah wills.' She said: 'Yes indeed, O Messenger of Allah,' and he rebuked her. Hafsa said: 'And there is none of you but will come to it' (19:71). The Prophet ﷺ said: 'Allah, Mighty and Majestic, has said: Then We will save those who were mindful, and leave the wrongdoers in it on their knees' (19:72). Muslim includes it in his Sahih.",
            "bn": "সহীহ মুসলিমে (নং ২৪৯৬) উম্মে মুবাশশির (রাঃ) বলেন, তিনি হাফসার উপস্থিতিতে নবী ﷺ-কে বলতে শুনেছেন: 'গাছওয়ালাদের মধ্যে, যারা তার নিচে বাই'আত করেছে, তাদের কেউ ইনশাআল্লাহ জাহান্নামে প্রবেশ করবে না।' তিনি বললেন, 'অবশ্যই করবে, হে আল্লাহর রাসূল।' নবী ﷺ তাঁকে ধমক দিলেন। হাফসা বললেন: 'তোমাদের প্রত্যেককেই তার কাছে পৌঁছাতে হবে' (১৯:৭১)। নবী ﷺ বললেন: 'আল্লাহ তা'আলা বলেছেন: তারপর আমি মুত্তাকীদের রক্ষা করব, আর জালিমদের সেখানে নতজানু অবস্থায় ফেলে রাখব' (১৯:৭২)। ইমাম মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন।"
          }
        ]
      }
    ]
  },
  "48:29": {
    "sections": [
      {
        "h": {
          "en": "Named in Full, Then Followed",
          "bn": "পুরো নামে ঘোষণা, তারপর সঙ্গীরা"
        },
        "p": [
          {
            "en": "Muhammadun rasulu llah: Muhammad is the Messenger of Allah. Ma'arif al-Qur'an notes that the Qur'an usually calls him by a title, and by his personal name only four times. Here it finds a reason. At al-Hudaybiyah the Quraysh objected to the words Messenger of Allah in the treaty and insisted on Muhammad son of Abdullah, and by Allah's command he accepted. Allah then joined the title to his name in His Book, to be written and recited so until the Day of Judgement.",
            "bn": "মুহাম্মাদুর রাসূলুল্লাহ: মুহাম্মাদ আল্লাহর রাসূল। মাআরিফুল কুরআন লক্ষ করে, কুরআন সাধারণত তাঁকে কোনো উপাধি ধরে ডাকে, ব্যক্তিগত নামে ডেকেছে মাত্র চারটি জায়গায়। এখানে নাম নেওয়ার একটা কারণও সে খুঁজে পায়। হুদাইবিয়ায় চুক্তি লেখার সময় কুরাইশরা 'আল্লাহর রাসূল' কথাটায় আপত্তি তোলে, জোর দেয় 'আবদুল্লাহর ছেলে মুহাম্মাদ' লিখতে। আল্লাহর নির্দেশে তিনি তা মেনে নেন। তারপর আল্লাহ নিজের কিতাবে তাঁর নামের সঙ্গে উপাধিটি জুড়ে দিলেন, কিয়ামত পর্যন্ত যা এভাবেই লেখা হবে, তিলাওয়াত হবে।"
          },
          {
            "en": "Then wa-lladhina ma'ahu: and those with him. Al-Baghawi reports from Ibn Abbas that the first sentence is complete at Messenger of Allah and the next begins afresh. Al-Qurtubi gives two parsings, with that stop and without it, and judges it likelier that the qualities that follow belong to the Companions as a whole; it is also said, he adds, that all the believers are meant. At-Tabari has his followers from among his Companions; as-Sa'di names the Emigrants and the Helpers. Ma'arif al-Qur'an says the first addressees were the people of al-Hudaybiyah, while the wording's generality takes in every Companion.",
            "bn": "তারপর ওয়াল্লাযীনা মাআহু: আর যারা তাঁর সঙ্গে আছে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, প্রথম বাক্যটি 'আল্লাহর রাসূল'-এ এসে শেষ, পরের বাক্য শুরু হয় নতুন করে। কুরতুবী দুই রকম বাক্যগঠন দেখান, একটিতে সেখানে থামতে হয়, অন্যটিতে নয়। তাঁর বিচারে বেশি সংগত হলো, পরের গুণগুলো সাহাবিদের সবার। তিনি এ-ও উল্লেখ করেন যে কারও মতে এখানে সব মুমিনই উদ্দেশ্য। তাবারীর ব্যাখ্যায় এরা তাঁর সাহাবিদের মধ্য থেকে তাঁর অনুসারীরা। সা'দী নাম ধরে বলেন মুহাজির আর আনসারের কথা। মাআরিফুল কুরআনের মতে প্রথম সম্বোধিত ছিলেন হুদাইবিয়ার লোকেরা, তবে শব্দের ব্যাপকতায় প্রত্যেক সাহাবিই এর ভেতরে পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Firm Outward, Soft Within",
          "bn": "বাইরে দৃঢ়, ভেতরে কোমল"
        },
        "p": [
          {
            "en": "Ashidda'u 'ala l-kuffari ruhama'u baynahum: firm against the disbelievers, merciful among themselves. At-Tabari glosses the first as hearts hardened against them and little mercy towards them, and the second as hearts tender towards each other, selves gentle and easy with each other. He cites Qatada: Allah put mercy into their hearts, each for the other. Al-Baghawi likens that mercy to a child's with a parent.",
            "bn": "আশিদ্দাউ আলাল কুফফারি রুহামাউ বাইনাহুম: কাফিরদের প্রতি দৃঢ়, নিজেদের মধ্যে দয়ালু। তাবারী প্রথম অংশের ব্যাখ্যা দেন এভাবে: তাদের প্রতি অন্তর শক্ত, দয়া সামান্য। দ্বিতীয় অংশের ব্যাখ্যায় বলেন, একে অপরের প্রতি তাদের মন নরম, আচরণে তারা পরস্পরের কাছে কোমল ও সহজ। সঙ্গে আনেন কাতাদার কথা: আল্লাহ তাদের অন্তরে একে অপরের জন্য দয়া ঢেলে দিয়েছেন। বাগাভী এই দয়াকে তুলনা করেন বাবার প্রতি সন্তানের টানের সঙ্গে।"
          },
          {
            "en": "Ibn Kathir sets the pair beside 5:54, humble towards the believers and mighty against the disbelievers, and 9:123, which commands fighting the disbelievers nearest and letting them find firmness. As-Sa'di explains the firmness by its outcome: their enemies were humbled and broken, and the Muslims overcame them. Of the mercy he says they loved one another like one body, each wanting for his brother what he wants for himself. That, he says, was their dealing with people; the bowing and prostrating that follow are their dealing with the Creator.",
            "bn": "ইবন কাসীর এই জোড়াকে রাখেন ৫:৫৪-এর পাশে, যেখানে আছে মুমিনদের প্রতি বিনয়ী আর কাফিরদের প্রতি কঠোর মানুষের কথা। রাখেন ৯:১২৩-এর পাশেও, যেখানে আদেশ এসেছে নিকটবর্তী কাফিরদের সঙ্গে লড়াই করার, আর তারা যেন তোমাদের মধ্যে দৃঢ়তা দেখতে পায়। সা'দী দৃঢ়তার ব্যাখ্যা দেন তার ফল দিয়ে: শত্রুরা নত হলো, ভেঙে পড়ল, মুসলিমরা তাদের উপর জয়ী হলো। দয়ার কথায় তিনি বলেন, তারা একই দেহের মতো পরস্পরকে ভালোবাসত, প্রত্যেকে ভাইয়ের জন্য তা-ই চাইত যা নিজের জন্য চায়। তাঁর মতে এ ছিল মানুষের সঙ্গে তাদের আচরণ। এরপর রুকূ-সিজদার যে কথা, তা স্রষ্টার সঙ্গে তাদের সম্পর্ক।"
          },
          {
            "en": "Ibn Kathir attaches here a saying of the Prophet ﷺ that he places in the Sahih. Its wording in Sahih Muslim (2586a), from an-Nu'man ibn Bashir, reads: The likeness of the believers in their mutual love, mercy and sympathy is the likeness of the body: when one part of it aches, the rest of the body joins it in sleeplessness and fever. Muslim recorded it in his Sahih, the collection he limited to narrations he judged sound.",
            "bn": "ইবন কাসীর এখানে নবী ﷺ-এর একটি বাণী জুড়ে দেন এবং বলেন, এটি সহীহ গ্রন্থে আছে। সহীহ মুসলিমে (২৫৮৬ক) নুমান ইবন বাশীর (রাঃ) থেকে এর ভাষ্য এমন: পারস্পরিক ভালোবাসা, দয়া আর সহমর্মিতায় মুমিনদের উদাহরণ একটি দেহের মতো। দেহের একটি অঙ্গ ব্যথা পেলে গোটা দেহ নির্ঘুম রাত আর জ্বরে তার সঙ্গী হয়। ইমাম মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন, যে গ্রন্থে তিনি শুধু সেসব বর্ণনা রেখেছেন যা তাঁর বিচারে বিশুদ্ধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Firmness Faced",
          "bn": "দৃঢ়তা ছিল কাদের মুখোমুখি"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the conduct of the Prophet's Companions towards those who were fighting them, in its own setting, and it licenses nothing against any living person or community. The firmness it names is not a general posture towards people of another faith. Ma'arif al-Qur'an makes the same point in its own terms: being hard against the unbelievers does not mean the Companions were never tender towards any non-believer. It means that where Allah and His Messenger enjoined firmness, they complied, without weighing kinship or friendship.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। যারা সাহাবিদের বিরুদ্ধে লড়ছিল, তাদের প্রতি নবী ﷺ-এর সাহাবিদের আচরণ কেমন ছিল, আয়াতটি তা-ই বলে, তার নিজের প্রেক্ষাপটে। আজকের কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। এখানে যে দৃঢ়তার কথা, তা অন্য ধর্মের মানুষের প্রতি কোনো সাধারণ মনোভাব নয়। মাআরিফুল কুরআনও নিজের ভাষায় একই কথা বলে। কাফিরদের প্রতি কঠোর হওয়ার মানে এই নয় যে সাহাবিরা কোনো অমুসলিমের প্রতি কখনো নরম হননি। মানে হলো, যেখানে আল্লাহ ও তাঁর রাসূল দৃঢ় হতে বলেছেন, সেখানে তাঁরা আত্মীয়তা বা বন্ধুত্বের হিসাব না করে তা মেনেছেন।"
          },
          {
            "en": "Ma'arif al-Qur'an then quotes 60:8: Allah does not forbid you, regarding those who have not fought you over religion or driven you from your homes, from doing good to them and dealing justly with them. It recalls many occasions on which the Prophet ﷺ and his Companions showed kindness to helpless and needy unbelievers, calls justice and fairness towards them the general injunction of Islam, and says that nothing which flouts justice is permitted even on the field of battle.",
            "bn": "এরপর মাআরিফুল কুরআন ৬০:৮ উদ্ধৃত করে: যারা দ্বীনের কারণে তোমাদের সঙ্গে লড়েনি এবং তোমাদের ঘরবাড়ি থেকে বের করে দেয়নি, তাদের প্রতি সদাচরণ আর ন্যায়বিচার করতে আল্লাহ তোমাদের নিষেধ করেন না। গ্রন্থটি মনে করিয়ে দেয়, অসহায় ও অভাবী অমুসলিমদের প্রতি নবী ﷺ ও সাহাবিদের দয়া দেখানোর ঘটনা অনেক। তাদের প্রতি ন্যায় ও ইনসাফকে সে ইসলামের সাধারণ বিধান বলে। আরও বলে, যুদ্ধের ময়দানেও ন্যায়ভঙ্গের কোনো কাজ জায়েজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bowing for Favour and Pleasure",
          "bn": "রুকূ-সিজদা, অনুগ্রহ আর সন্তুষ্টির খোঁজে"
        },
        "p": [
          {
            "en": "Tarahum rukka'an sujjadan: you see them bowing, prostrating. At-Tabari reads it as bowing at times and prostrating at times in their prayer; al-Qurtubi as a report of how much they prayed, and al-Baghawi adds that they kept it up. Ibn Kathir says it describes their many deeds and much prayer, the best of deeds, and their sincerity to Allah in it. As-Sa'di notes why these two postures are named: bowing and prostration are the greatest pillars of the prayer.",
            "bn": "তারাহুম রুক্কাআন সুজ্জাদা: তুমি তাদের দেখবে রুকূ করছে, সিজদা করছে। তাবারীর পাঠে এর মানে, নামাজে তারা কখনো রুকূতে, কখনো সিজদায়। কুরতুবী একে দেখেন তাদের নামাজের আধিক্যের খবর হিসেবে, আর বাগাভী যোগ করেন, তারা তাতে লেগে থাকত। ইবন কাসীর বলেন, এখানে তাদের অনেক আমল আর বেশি বেশি নামাজের বর্ণনা, যা সবচেয়ে উত্তম আমল, সেই সঙ্গে নামাজে আল্লাহর প্রতি তাদের ইখলাসেরও। সা'দী বলেন কেন এ দুটি ভঙ্গির নাম এল: রুকূ আর সিজদাই নামাজের সবচেয়ে বড় রুকন।"
          },
          {
            "en": "Yabtaghuna fadlan mina llahi wa ridwana: seeking bounty from Allah and His pleasure. At-Tabari makes the bounty His mercy in admitting them to His Garden, and the pleasure that their Lord be pleased with them. He says they seek it through their bowing and prostration, and also through their firmness and their mercy to one another, so in his reading the whole portrait is one search. Ibn Kathir calls His pleasure greater than the first, citing 9:72: and pleasure from Allah is greater.",
            "bn": "ইয়াবতাগূনা ফাদলাম মিনাল্লাহি ওয়া রিদওয়ানা: তারা আল্লাহর অনুগ্রহ আর সন্তুষ্টি খোঁজে। তাবারীর ব্যাখ্যায় অনুগ্রহ মানে আল্লাহর রহমত, যার বলে তিনি তাদের জান্নাতে প্রবেশ করাবেন। আর সন্তুষ্টি মানে, তাদের রব তাদের প্রতি সন্তুষ্ট হবেন। তিনি বলেন, এটা তারা খোঁজে রুকূ-সিজদা দিয়ে, আবার দৃঢ়তা আর পরস্পরের প্রতি দয়া দিয়েও। ফলে তাঁর পাঠে পুরো ছবিটাই একটিমাত্র খোঁজ। ইবন কাসীর ৯:৭২ উদ্ধৃত করে বলেন, আল্লাহর সন্তুষ্টি প্রথমটির চেয়ে বড়: আর আল্লাহর সন্তুষ্টিই সবচেয়ে বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Face Carries",
          "bn": "চেহারায় যা ফুটে ওঠে"
        },
        "p": [
          {
            "en": "Simahum fi wujuhihim min athari s-sujud: their mark is in their faces from the trace of prostration. At-Tabari records that the interpreters differed over what the mark is. Some placed it on the Day of Resurrection: Ibn Abbas, in al-'Awfi's report, said their prayer will show in their faces then; 'Atiyya said the places of prostration will be the whitest part of their faces; Muqatil ibn Hayyan said it is light; al-Hasan, whiteness. Others placed it in this world: Ibn Abbas, in 'Ali ibn Abi Talha's report, said it is the good bearing.",
            "bn": "সীমাহুম ফী উজূহিহিম মিন আসারিস সুজূদ: তাদের চিহ্ন তাদের চেহারায়, সিজদার প্রভাবে। তাবারী লিপিবদ্ধ করেন, এই চিহ্ন আসলে কী, তা নিয়ে ব্যাখ্যাকারদের মতভেদ আছে। একদল একে রেখেছেন কিয়ামতের দিনে। আওফীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, সেদিন তাদের নামাজ তাদের চেহারায় প্রকাশ পাবে। আতিয়্যা বলেন, সিজদার জায়গাগুলো হবে তাদের মুখের সবচেয়ে উজ্জ্বল অংশ। মুকাতিল ইবন হাইয়ানের মতে এটা নূর, হাসানের মতে শুভ্রতা। আরেক দল একে রেখেছেন দুনিয়ায়। আলী ইবন আবী তালহার বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, এটা সুন্দর চালচলন।"
          },
          {
            "en": "Mujahid said it is humility and lowliness. Asked by Mansur whether it was the mark between a man's eyes, he said such a mark may sit between the eyes of one harder of heart than stone, in al-Qurtubi's wording, or than Pharaoh, in Ibn Kathir's; al-Qurtubi's version calls it a light in their faces from humility. Shimr ibn 'Atiyya, and al-Hasan in one report, said it is the pallor of night prayer. Sa'id ibn Jubayr said the earth's dust and the moisture of ablution, 'Ikrima the trace of soil, and Malik, in al-Qurtubi through Ibn Wahb, what clings to their foreheads from the ground.",
            "bn": "মুজাহিদ বলেন, এটা বিনয় আর নম্রতা। মানসূর জানতে চাইলেন, এটা কি দুই চোখের মাঝখানের সেই দাগ? তিনি উত্তর দিলেন, এমন দাগ এমন লোকের দুই চোখের মাঝেও থাকতে পারে যার অন্তর পাথরের চেয়েও কঠিন। এ কুরতুবীর ভাষ্য, ইবন কাসীরের ভাষ্যে ফেরাউনের চেয়েও কঠিন। কুরতুবীর ভাষ্যে এটা বিনয় থেকে আসা তাদের মুখের নূর। শিমর ইবন আতিয়্যা, আর একটি বর্ণনায় হাসান, বলেন এটা রাতের নামাজে জাগার ফ্যাকাশে ভাব। সাঈদ ইবন জুবাইর বলেন মাটির ধুলা আর অজুর পানির ভেজা ছাপ, ইকরিমা বলেন মাটির দাগ। কুরতুবীতে ইবন ওয়াহবের সূত্রে ইমাম মালিকের মত: সিজদার সময় মাটি থেকে কপালে যা লেগে থাকে।"
          },
          {
            "en": "At-Tabari himself judged that Allah tied the mark to no single time, so it holds for both: in this world the trace of Islam, its humility, guidance and bearing; in the next, brightness of face and limbs from ablution and whiteness of faces from prostration. A line often heard here, whoever prays much at night has a fair face by day, is cited by Ma'arif al-Qur'an and al-Qurtubi from Ibn Majah as the Prophet's ﷺ. Ibn Kathir says the sound view is that it stops short of him, and al-Qurtubi quotes Ibn al-'Arabi that it entered the hadith by mistake. It is not used here as a hadith.",
            "bn": "তাবারী নিজে সিদ্ধান্ত দেন, আল্লাহ এই চিহ্নকে কোনো এক সময়ের সঙ্গে বেঁধে দেননি, তাই দুটোই এর অন্তর্ভুক্ত। দুনিয়ায় এটা ইসলামের ছাপ: তার বিনয়, সঠিক পথ আর চালচলন। আখিরাতে অজুর প্রভাবে মুখ আর হাত-পায়ের উজ্জ্বলতা, আর সিজদার প্রভাবে মুখের শুভ্রতা। এখানে একটা কথা প্রায়ই শোনা যায়: রাতে যে বেশি নামাজ পড়ে, দিনে তার চেহারা সুন্দর হয়। মাআরিফুল কুরআন আর কুরতুবী একে ইবন মাজাহর সূত্রে নবী ﷺ-এর বাণী হিসেবে আনেন। কিন্তু ইবন কাসীর বলেন, সঠিক মত হলো এটা নবী ﷺ পর্যন্ত পৌঁছায় না। আর কুরতুবী ইবনুল আরাবীর কথা আনেন যে এটা ভুলক্রমে হাদিসে ঢুকে গেছে। তাই এখানে একে হাদিস হিসেবে ব্যবহার করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Torah Likeness Ends",
          "bn": "তাওরাতের দৃষ্টান্ত কোথায় থামে"
        },
        "p": [
          {
            "en": "Dhalika mathaluhum fi t-Tawrah: that is their likeness in the Torah. Then wa-mathaluhum fi l-Injili ka-zar'in: and their likeness in the Gospel is as a crop. Where does the first likeness end? Ad-Dahhak and Qatada, in at-Tabari's reports, say the description so far is their likeness in the Torah and the crop is a second one, in the Gospel; al-Qurtubi gives this from Ibn Abbas and others, and as-Sa'di reads it the same way. Mujahid said their likeness in the Torah and the Gospel is one.",
            "bn": "যালিকা মাসালুহুম ফিত তাওরাহ: এ হলো তাওরাতে তাদের দৃষ্টান্ত। তারপর ওয়া মাসালুহুম ফিল ইনজীলি কাযারইন: আর ইঞ্জিলে তাদের দৃষ্টান্ত এক ফসলের মতো। প্রথম দৃষ্টান্তটা থামে কোথায়? তাবারীর বর্ণনায় দাহহাক আর কাতাদা বলেন, এ পর্যন্ত যা বলা হলো তা তাওরাতে তাদের দৃষ্টান্ত, আর ফসলের ছবিটা আলাদা, ইঞ্জিলের। কুরতুবী এ মত আনেন ইবন আব্বাস (রাঃ) ও অন্যদের থেকে, সা'দীও একইভাবে পড়েন। মুজাহিদ বলেন, তাওরাত আর ইঞ্জিলে তাদের দৃষ্টান্ত একটাই।"
          },
          {
            "en": "Al-Qurtubi relays al-Farra' that either reading works: stop at the Torah, or carry the first description into the Gospel too and begin the crop afresh. At-Tabari preferred two separate likenesses, arguing that had Mujahid's reading been meant, the crop would have come joined by an 'and'. Ma'arif al-Qur'an lists three possibilities, says most commentators prefer the first, and holds that the Torah and Gospel as they now stand cannot settle it.",
            "bn": "কুরতুবী ফাররার কথা আনেন: দুই পাঠই চলে। তাওরাতে থামা যায়। আবার প্রথম বর্ণনাকে ইঞ্জিল পর্যন্ত টেনে নিয়ে ফসলের ছবি নতুন করে শুরু করা যায়। তাবারী দুটি আলাদা দৃষ্টান্তকেই অগ্রাধিকার দেন। তাঁর যুক্তি, মুজাহিদের পাঠ উদ্দেশ্য হলে ফসলের উপমাটা 'ওয়া' (এবং) দিয়ে জোড়া লাগত। মাআরিফুল কুরআন তিনটি সম্ভাবনা তুলে ধরে, বলে বেশির ভাগ মুফাসসির প্রথমটি পছন্দ করেন, আর মনে করে তাওরাত ও ইঞ্জিলের বর্তমান রূপ দিয়ে এর মীমাংসা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Shoot Beside the Stalk",
          "bn": "কাণ্ডের পাশে কচি চারা"
        },
        "p": [
          {
            "en": "Ka-zar'in akhraja shat'ahu fa-azarahu fa-staghlaza fa-stawa 'ala suqih: like a crop that puts out its shoot, and the shoot strengthens it, so it thickens and stands on its stems. At-Tabari says the shat' is the offshoots, and the likeness fits because they entered Islam few and kept increasing, group after group, as shoot follows shoot from one root. He also reports 'Abdullah, teaching a man to recite at sunset, reaching this verse and saying: you are the crop, and your harvest has drawn near.",
            "bn": "কাযারইন আখরাজা শাতআহু ফাআযারাহু ফাসতাগলাযা ফাসতাওয়া আলা সূকিহ: যেন এক ফসল, যা কচি চারা বের করে, চারাটা তাকে শক্তি দেয়, তারপর তা মোটা হয়ে নিজের কাণ্ডে সোজা দাঁড়ায়। তাবারী বলেন, শাত মানে পাশ থেকে বেরোনো চারা। উপমাটা খাটে, কারণ তারা ইসলামে ঢুকেছিল অল্প সংখ্যায়, তারপর দলে দলে বাড়তেই থাকল, যেমন এক গোড়া থেকে একটার পর একটা চারা বের হয়। তিনি আবদুল্লাহর একটি ঘটনাও আনেন। সূর্যাস্তের সময় তিনি একজনকে কুরআন পড়াচ্ছিলেন, এই আয়াতে পৌঁছে বললেন: তোমরাই সেই ফসল, আর তোমাদের ফসল কাটার সময় ঘনিয়ে এসেছে।"
          },
          {
            "en": "Who is the crop and who the shoot? Al-Qurtubi, from ad-Dahhak and others: the crop is Muhammad ﷺ and the shoots his Companions, few and then many, weak and then strong. For Ibn Kathir the Companions supported and aided him as the shoot does the plant. As-Sa'di widens it: the younger and later convert caught up with the senior, earlier convert and helped him establish Allah's religion.",
            "bn": "ফসল কে, আর চারা কারা? কুরতুবী দাহহাক ও অন্যদের থেকে আনেন: ফসল হলেন মুহাম্মাদ ﷺ, আর চারা তাঁর সাহাবিরা। তারা ছিল অল্প, হলো অনেক; ছিল দুর্বল, হলো সবল। ইবন কাসীরের মতে চারা যেমন গাছকে মজবুত করে, সাহাবিরাও তেমনি তাঁকে সাহায্য আর সমর্থন দিয়েছেন। সা'দী ছবিটা আরও বড় করেন। বয়সে ছোট আর পরে ইসলাম গ্রহণকারী মানুষটি এগিয়ে থাকা প্রবীণের সঙ্গে মিলে গেছে, আল্লাহর দ্বীন কায়েমের কাজে তাঁর পাশে দাঁড়িয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Malik's Words, Reported as His",
          "bn": "ইমাম মালিকের কথা, তাঁর নামেই"
        },
        "p": [
          {
            "en": "Li-yaghiza bihimu l-kuffar: that He may enrage the disbelievers through them. At-Tabari and al-Qurtubi supply an unstated clause: Allah did this for Muhammad ﷺ and his Companions to enrage the disbelievers by them. On this clause the commentaries report a saying of Malik. Al-Qurtubi, citing al-Khatib, says a man who belittled the Companions was mentioned before Malik, who recited the verse and said: whoever wakes with rage in his heart against any of the Companions has been struck by this verse. Al-Baghawi has the saying too, and al-Qurtubi approves it.",
            "bn": "লিয়াগীযা বিহিমুল কুফফার: যাতে তাদের দিয়ে তিনি কাফিরদের ক্রুদ্ধ করেন। তাবারী আর কুরতুবী এখানে একটি না-বলা বাক্যাংশ ধরে নেন: আল্লাহ মুহাম্মাদ ﷺ ও তাঁর সাহাবিদের জন্য এমনটা করেছেন, যাতে তাদের দিয়ে কাফিরদের ক্রুদ্ধ করেন। এই অংশ প্রসঙ্গে তাফসীরগুলো ইমাম মালিকের একটি কথা বর্ণনা করে। কুরতুবী খতীবের সূত্রে জানান, মালিকের মজলিসে এমন এক লোকের কথা উঠল যে সাহাবিদের খাটো করত। মালিক আয়াতটি তিলাওয়াত করে বললেন: যার অন্তরে কোনো সাহাবির প্রতি ক্রোধ নিয়ে সকাল হয়, এই আয়াত তার উপর এসে পড়েছে। বাগাভীতেও কথাটি আছে, আর কুরতুবী একে সমর্থন করেন।"
          },
          {
            "en": "Ibn Kathir reports that Malik, in one narration from him, drew from the verse a judgment of unbelief on those who hate the Companions, and that a group of scholars agreed; the Muyassar states a similar conclusion. Ma'arif al-Qur'an reads Malik more narrowly: he did not say such a person becomes an unbeliever, only that the warning reaches him. These are those scholars' judgments, reported here as theirs, and this article applies them to no one.",
            "bn": "ইবন কাসীর জানান, মালিক এক বর্ণনা অনুযায়ী এ আয়াত থেকে সিদ্ধান্ত টেনেছেন যে যারা সাহাবিদের প্রতি বিদ্বেষ রাখে তারা কাফির, আর একদল আলেম তাঁর সঙ্গে একমত হয়েছেন। মুয়াসসারও প্রায় একই সিদ্ধান্ত দেয়। মাআরিফুল কুরআন মালিকের কথাকে আরও সীমিত অর্থে পড়ে। তার মতে মালিক বলেননি যে এমন লোক কাফির হয়ে যায়, শুধু বলেছেন আয়াতের সতর্কবাণী তার উপর বর্তায়। এগুলো ওই আলেমদের নিজস্ব সিদ্ধান্ত, এখানে তাঁদের নামেই বর্ণিত। এই লেখা তা কারও উপর প্রয়োগ করে না।"
          },
          {
            "en": "Al-Qurtubi attaches a saying of the Prophet ﷺ, confirmed in Sahih al-Bukhari (3673) from Abu Sa'id al-Khudri: Do not revile my Companions, for if any one of you spent gold equal to Uhud, it would not reach the mudd of one of them, nor half of it. Al-Bukhari placed it in his Sahih, among the narrations he judged sound.",
            "bn": "কুরতুবী এখানে নবী ﷺ-এর একটি হাদিস জুড়ে দেন। সহীহ বুখারীতে (৩৬৭৩) আবু সাঈদ খুদরী (রাঃ) থেকে হাদিসটি এভাবে এসেছে: আমার সাহাবিদের গালি দিয়ো না। তোমাদের কেউ যদি উহুদ পাহাড় সমান সোনাও খরচ করে, তবু তা তাঁদের কারও এক মুদ, এমনকি আধা মুদেরও সমান হবে না। ইমাম বুখারী হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন; সেখানে তিনি কেবল সেসব বর্ণনাই রেখেছেন, যেগুলো তাঁর বিচারে খাঁটি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Small Word: Minhum",
          "bn": "ছোট্ট একটি শব্দ: মিনহুম"
        },
        "p": [
          {
            "en": "Wa'ada llahu ... minhum maghfiratan wa ajran 'azima: Allah has promised those who believe and do righteous deeds, of them, forgiveness and a great reward. The small word min, of, carries a disagreement. Ibn Kathir says it explains the kind, li-bayan al-jins. Ma'arif al-Qur'an calls it explanatory by consensus, compares 22:30, shun the filth of the idols, and mentions a partitive reading, under which the promise reaches only some, which it attributes to a group it names and rejects as at odds with the context.",
            "bn": "ওয়াআদাল্লাহুল্লাযীনা আমানূ ওয়া আমিলুস সালিহাতি মিনহুম মাগফিরাতাও ওয়া আজরান আযীমা: তাদের মধ্যে যারা ঈমান আনে ও নেক আমল করে, আল্লাহ তাদের মাগফিরাত আর মহা প্রতিদানের ওয়াদা দিয়েছেন। ছোট্ট শব্দ 'মিন' (মধ্যে বা থেকে) নিয়ে মতভেদ আছে। ইবন কাসীর বলেন, শব্দটি এখানে শ্রেণি বোঝাতে এসেছে, লিবায়ানিল জিনস। মাআরিফুল কুরআনের মতে সবার ঐকমত্যে এটি ব্যাখ্যামূলক। সেখানে তুলনা টানা হয়েছে ২২:৩০-এর সঙ্গে: মূর্তির অপবিত্রতা থেকে বেঁচে থাকো। এক দলের ভিন্ন একটি ব্যাখ্যার কথাও গ্রন্থটি তোলে: 'মিন' অংশবাচক, তাই প্রতিশ্রুতি কেবল কিছু লোকের জন্য। দলটির নাম উল্লেখ করেই মাআরিফুল কুরআন এ মত নাকচ করে দেয়, কারণ প্রসঙ্গের সঙ্গে তা মেলে না।"
          },
          {
            "en": "Al-Qurtubi also calls it generic, with the same 22:30, adding that the Companions may be singled out by the promise as an honour though Allah promised forgiveness to all believers. He then gives a second answer: min only reinforces, as one says I cut a shirt from the cloth, meaning all of it. At-Tabari has minhum point to the shoots, those entering Islam after the first group until the Day of Resurrection; al-Baghawi relays this. Ibn Kathir and the Muyassar add that whoever follows the Companions' trace shares their standing, while the precedence stays theirs.",
            "bn": "কুরতুবীও একে শ্রেণিবাচক বলেন, একই ২২:৩০-এর উদাহরণ দিয়ে। সঙ্গে যোগ করেন, আল্লাহ সব মুমিনকেই মাগফিরাতের ওয়াদা দিয়েছেন; তবু সম্মান দেখাতে এখানে আলাদা করে সাহাবিদের নাম ধরে ওয়াদাটি আসতে পারে। এরপর তিনি দ্বিতীয় জবাব দেন: 'মিন' এখানে শুধু জোর দেয়। যেমন কেউ বলে, কাপড় থেকে একটা জামা কাটলাম, অর্থাৎ পুরো কাপড়টাই। তাবারীর মতে মিনহুম বোঝায় উপমার সেই নতুন চারাগুলোকে, অর্থাৎ প্রথম দলের পরে কিয়ামত পর্যন্ত যারা ইসলামে আসবে। বাগাভীও তাঁর এ মত উদ্ধৃত করেছেন। ইবন কাসীর আর মুয়াসসার যোগ করেন, যারা সাহাবিদের পদাঙ্ক অনুসরণ করে, তারাও তাঁদের মর্যাদার ভাগ পায়; তবে আগে থাকার মর্যাদা সাহাবিদেরই।"
          }
        ]
      }
    ]
  }
});
