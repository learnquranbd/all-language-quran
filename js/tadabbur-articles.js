/**
 * Long-form explanations for Tadabbur verses — keyed by the same ref the
 * module uses ("2:255", "3:26-27").
 *
 * TADABBUR_NOTES gives each verse a 59-word reflection, roughly three points
 * to ponder and a one-line takeaway. These are the full expositions behind
 * that: context of revelation where it is established, the language of the
 * verse, what the classical mufassirun draw from it, and how it is lived.
 *
 * Fetched by js/article-view.js only when a reader opens one — the Tadabbur
 * tab renders every card in a single pass, so this file must never load just
 * because the tab was opened. js/article-index.js says which verses have one.
 *
 * Conventions enforced by `npm test`: sections of {h:{en,bn}, p:[{en,bn}]},
 * bare verse references in the prose (the autolinker makes them tappable),
 * no HTML, no markdown, and every reference bounds-checked in both languages.
 */

const TADABBUR_ARTICLES = {
  '2:255': {
    sections: [
      {
        h: { en: "No God But He, the Living", bn: "তিনি ছাড়া কোনো ইলাহ নেই" },
        p: [
          {
            en: "The verse opens by clearing the ground: la ilaha illa Huwa, there is no god except He. Arabic negates first and affirms second, so the sentence empties the heart of every rival before it names the One who remains. Two names follow immediately, and the commentators treat them as the pillars the rest of the verse stands on: al-Hayy, the Ever-Living, whose life was never granted and will never end, and al-Qayyum, the Self-Subsisting who holds everything else in being.",
            bn: "আয়াতটি শুরু হয় জায়গা খালি করে দিয়ে: লা ইলাহা ইল্লা হুয়া — তিনি ছাড়া কোনো ইলাহ নেই। আরবি আগে অস্বীকার করে, পরে স্বীকার করে; ফলে বাক্যটি প্রথমে হৃদয় থেকে সব প্রতিদ্বন্দ্বী সরিয়ে দেয়, তারপর যিনি থাকেন তাঁর নাম নেয়। এরপরই আসে দুটি নাম, আর মুফাসসিরগণ এ দুটিকেই বাকি আয়াতের ভিত্তি হিসেবে দেখেন: আল-হাইয়্য — চিরঞ্জীব, যাঁর জীবন কারও দেওয়া নয় এবং যা কখনো শেষ হয় না; আর আল-কাইয়্যূম — স্বয়ংপ্রতিষ্ঠিত, যিনি অন্য সবকিছুকে ধরে রাখেন।",
          },
          {
            en: "Then comes a denial that sounds gentle and is enormous. Neither sinah nor nawm takes hold of Him: sinah is the drowsiness that arrives before sleep, nawm is sleep itself. The wording climbs from the smaller to the greater and rules out both. Every living thing we have ever met must stop and rest; the One described here does not pause, and so creation is never for a single moment left unattended while its Sustainer is not watching.",
            bn: "এরপর আসে এমন এক অস্বীকৃতি যা শুনতে কোমল কিন্তু অর্থে বিশাল। তাঁকে সিনাহ্‌ও স্পর্শ করে না, নাওম-ও নয়: সিনাহ্‌ হলো ঘুমের আগের তন্দ্রা, আর নাওম হলো ঘুম নিজেই। শব্দবিন্যাস ছোট থেকে বড়র দিকে উঠে যায় এবং দুটোকেই বাদ দেয়। আমরা যত প্রাণী চিনি, সবাইকে একসময় থামতে ও বিশ্রাম নিতে হয়; কিন্তু এখানে বর্ণিত সত্তা কখনো থামেন না, তাই সৃষ্টিজগৎ এক মুহূর্তের জন্যও এমন অবস্থায় পড়ে না যখন তার রক্ষক দেখছেন না।",
          },
        ],
      },
      {
        h: { en: "Ownership, Permission, Knowledge", bn: "মালিকানা, অনুমতি, জ্ঞান" },
        p: [
          {
            en: "To Him belongs whatever is in the heavens and whatever is on the earth. The Arabic particle ma, whatever, sweeps in what we have named and catalogued and everything we have not. Then a question shaped so that it answers itself: who is there that can intercede with Him except by His permission? The people first addressed by this verse believed their idols would speak on their behalf. The sentence removes that at the root without denying that intercession exists at all.",
            bn: "আসমানসমূহে যা কিছু আছে আর যমীনে যা কিছু আছে, সবই তাঁর। আরবি শব্দ 'মা' — অর্থাৎ 'যা কিছু' — আমাদের নামকরা ও তালিকাভুক্ত সবকিছুকে যেমন ধরে, তেমনি ধরে যা আমরা কখনো জানিনি। তারপর আসে এমন এক প্রশ্ন যা নিজেই নিজের উত্তর দেয়: তাঁর অনুমতি ছাড়া কে তাঁর কাছে সুপারিশ করতে পারে? এই আয়াত প্রথমে যাদের উদ্দেশে নাযিল হয়, তারা বিশ্বাস করত তাদের দেবমূর্তিরা তাদের পক্ষে কথা বলবে। বাক্যটি সেই বিশ্বাসকে গোড়া থেকে সরিয়ে দেয়, অথচ সুপারিশের অস্তিত্বকে একেবারে অস্বীকার করে না।",
          },
          {
            en: "What is left standing is intercession by permission, granted to whom He allows. Knowledge follows: He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. Read slowly, that clause describes every scholar, every specialist and every anxious planner. Whatever any of us knows is a portion that has been measured out, and it has been measured out by the One who holds the whole of it.",
            bn: "যা টিকে থাকে তা হলো অনুমতিসাপেক্ষ সুপারিশ — তিনি যাকে অনুমতি দেন কেবল তারই। এরপর আসে জ্ঞানের কথা: তাদের সামনে যা আছে ও পেছনে যা আছে সবই তিনি জানেন, আর তারা তাঁর জ্ঞানের কিছুই আয়ত্ত করতে পারে না, তিনি যতটুকু চান তা ছাড়া। ধীরে পড়লে বোঝা যায়, এই বাক্যটি প্রত্যেক আলিম, প্রত্যেক বিশেষজ্ঞ এবং প্রত্যেক উদ্বিগ্ন পরিকল্পনাকারীর বর্ণনা। আমরা যে যা-ই জানি, তা মেপে দেওয়া একটি অংশ — আর মেপে দিয়েছেন তিনিই, যাঁর কাছে পুরোটা আছে।",
          },
        ],
      },
      {
        h: { en: "The Kursi and the Guarding", bn: "কুরসী ও রক্ষণাবেক্ষণ" },
        p: [
          {
            en: "His Kursi extends over the heavens and the earth. The commentators differ over the word. A group of the early authorities relate that the Kursi is something other than the 'Arsh, the Throne, and far smaller than it; others read the word as an image of His knowledge or His sovereign command. The mainstream Sunni position is to affirm the word exactly as revealed, without asking how and without imagining a seat resembling the chair of a king.",
            bn: "তাঁর কুরসী আসমানসমূহ ও যমীনকে পরিব্যাপ্ত করে আছে। শব্দটি নিয়ে মুফাসসিরগণের মধ্যে মতভেদ আছে। প্রাচীন যুগের একদল বর্ণনাকারী বলেন, কুরসী আরশ থেকে আলাদা এবং তার তুলনায় বহু ছোট; আবার কেউ কেউ শব্দটিকে তাঁর জ্ঞান বা তাঁর কর্তৃত্বের রূপক হিসেবে পড়েন। আহলুস সুন্নাহর মূলধারার অবস্থান হলো: শব্দটি যেভাবে নাযিল হয়েছে ঠিক সেভাবেই স্বীকার করা, 'কীভাবে' প্রশ্ন না তোলা, এবং রাজার আসনের মতো কোনো চিত্র কল্পনা না করা।",
          },
          {
            en: "The clause that follows is the one people carry home with them: preserving them both does not weary Him. The verb carries the sense of being burdened by a heavy task. The verse then closes with al-'Aliyy al-'Azim, the Most High, the Most Great. Notice the order of the whole: majesty, then knowledge, then care, then the assurance that the care costs Him nothing at all. The reader is left feeling very small and entirely safe.",
            bn: "এরপরের বাক্যটিই মানুষ সবচেয়ে বেশি সঙ্গে নিয়ে ফেরে: এ দুটির রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। ক্রিয়াপদটি ভারী কাজের বোঝা বয়ে ক্লান্ত হওয়ার অর্থ বহন করে। আয়াত শেষ হয় আল-আলিয়্য ও আল-আযীম নামে — সর্বোচ্চ ও মহান। পুরো আয়াতের ক্রমটি লক্ষ করুন: মহিমা, তারপর জ্ঞান, তারপর রক্ষণাবেক্ষণ, আর শেষে এই আশ্বাস যে সেই রক্ষণাবেক্ষণে তাঁর কোনো ক্লান্তি নেই। পাঠক নিজেকে খুব ছোট, অথচ সম্পূর্ণ নিরাপদ বোধ করে।",
          },
        ],
      },
      {
        h: { en: "Where the Verse Sits", bn: "আয়াতটি কোথায় বসে আছে" },
        p: [
          {
            en: "No sound report fixes a particular occasion of revelation for this verse; like most of Surah al-Baqarah it is general, and it is honest to say so rather than invent an incident. Its placement, however, is clearly deliberate. The verse just before it, 2:254, tells the believers to spend from what they have been given before a day arrives in which there is no bargaining, no friendship and no intercession.",
            bn: "এই আয়াতের জন্য নির্দিষ্ট কোনো শানে নুযূল সহীহ সূত্রে প্রমাণিত নয়; সূরা আল-বাকারার অধিকাংশ অংশের মতো এটিও সাধারণ নির্দেশনা — কোনো ঘটনা বানিয়ে বলার চেয়ে কথাটি সরাসরি বলাই সৎ। তবে আয়াতটির অবস্থান স্পষ্টতই উদ্দেশ্যপ্রণোদিত। ঠিক আগের আয়াত 2:254-এ মুমিনদের বলা হয়েছে, তাদের যা দেওয়া হয়েছে তা থেকে ব্যয় করতে — এমন এক দিন আসার আগে, যেদিন কোনো বেচাকেনা থাকবে না, কোনো বন্ধুত্ব থাকবে না, কোনো সুপারিশও থাকবে না।",
          },
          {
            en: "Ayat al-Kursi then explains why that day works that way: because intercession belongs to His permission alone. The verse after it, 2:256, states that there is no compulsion in religion, since guidance has become clear from error. Placed side by side, the three verses move from what we owe, to who Allah is, to how faith must be entered. Reciting Ayat al-Kursi with its neighbours in view stops it drifting free as an isolated formula.",
            bn: "আয়াতুল কুরসী এরপর ব্যাখ্যা করে সেই দিনটি কেন এমন: কারণ সুপারিশ কেবল তাঁর অনুমতির অধীন। এর পরের আয়াত 2:256 বলে, দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই, কারণ হিদায়াত ভ্রান্তি থেকে স্পষ্ট হয়ে গেছে। পাশাপাশি রাখলে তিনটি আয়াত এগিয়ে যায় — আমাদের দায়িত্ব থেকে আল্লাহ কে সেই পরিচয়ে, আর সেখান থেকে ঈমান কীভাবে গ্রহণ করতে হয় সেই কথায়। প্রতিবেশী আয়াতগুলো সামনে রেখে পড়লে আয়াতুল কুরসী কেবল একটি বিচ্ছিন্ন বাক্যবন্ধ হয়ে ভেসে থাকে না।",
          },
        ],
      },
      {
        h: { en: "How It Was Used", bn: "এই আয়াতের ব্যবহার" },
        p: [
          {
            en: "Muslim narrates that the Prophet ﷺ asked Ubayy ibn Ka'b (RA) which verse of the Book of Allah he held to be greatest, and when Ubayy answered with Ayat al-Kursi the Prophet ﷺ struck him on the chest and congratulated him on his knowledge. The verse is not called greatest for its length. It is greatest because from beginning to end it has one subject and one only, which is Allah Himself.",
            bn: "মুসলিম বর্ণনা করেন, নবী ﷺ উবাই ইবনে কা'ব (রাঃ)-কে জিজ্ঞেস করেন, আল্লাহর কিতাবের কোন আয়াতটি তাঁর কাছে সবচেয়ে মহান। উবাই যখন আয়াতুল কুরসীর কথা বলেন, নবী ﷺ তাঁর বুকে মৃদু আঘাত করে তাঁকে এই জ্ঞানের জন্য অভিনন্দন জানান। আয়াতটিকে দৈর্ঘ্যের কারণে মহান বলা হয়নি। এটি মহান, কারণ শুরু থেকে শেষ পর্যন্ত এর বিষয়বস্তু একটিই — স্বয়ং আল্লাহ।",
          },
          {
            en: "Al-Bukhari relates the account of Abu Hurayrah (RA), left to guard the zakat stores of Ramadan, who caught a thief on three successive nights; on the last the thief bought his release by teaching him that whoever recites Ayat al-Kursi before sleeping has a guardian from Allah with him until morning, and the Prophet ﷺ confirmed that the words were true even though the one who spoke them was a devil. Reciting it after each obligatory prayer is reported from the Prophet ﷺ in the collection of an-Nasa'i.",
            bn: "ইমাম বুখারী আবু হুরাইরা (রাঃ)-এর ঘটনাটি বর্ণনা করেন, যেখানে তাঁকে রমযানের যাকাতের সম্পদ পাহারার দায়িত্ব দেওয়া হয়েছিল এবং তিনি টানা তিন রাত এক চোরকে ধরেন; শেষ রাতে চোরটি নিজের মুক্তির বিনিময়ে তাঁকে শেখায় যে ঘুমানোর আগে আয়াতুল কুরসী পড়লে সকাল পর্যন্ত আল্লাহর পক্ষ থেকে একজন রক্ষক থাকবে। নবী ﷺ নিশ্চিত করেন, কথাটি সত্য হলেও বক্তা ছিল একটি শয়তান। প্রতিটি ফরয নামাযের পর এটি পাঠ করার কথা নবী ﷺ থেকে নাসাঈর সংকলনে বর্ণিত হয়েছে।",
          },
        ],
      },
      {
        h: { en: "Carrying It Through the Day", bn: "দিনভর এটি বহন করা" },
        p: [
          {
            en: "The practical shape of this verse is small and repeatable: after every obligatory prayer, and again before sleep. What changes with practice is not the count but the attention. Read the clauses as statements about reality rather than as sounds to complete — He does not sleep, He is not wearied, He knows what lies ahead of you — and the verse begins to work on the particular worry that made you reach for it.",
            bn: "এই আয়াতের ব্যবহারিক রূপটি ছোট ও পুনরাবৃত্তিযোগ্য: প্রতিটি ফরয নামাযের পর, আর ঘুমানোর আগে। অভ্যাসের সঙ্গে যা বদলায় তা সংখ্যা নয়, মনোযোগ। বাক্যগুলোকে কেবল শেষ করার মতো শব্দ হিসেবে নয়, বাস্তবতা সম্পর্কে বিবৃতি হিসেবে পড়ুন — তিনি ঘুমান না, তিনি ক্লান্ত হন না, আপনার সামনে যা আছে তিনি তা জানেন — তখনই আয়াতটি সেই নির্দিষ্ট দুশ্চিন্তার ওপর কাজ শুরু করে, যার কারণে আপনি এটি ধরেছিলেন।",
          },
          {
            en: "It also disciplines hope. If nothing is guaranteed by any intercessor except by His permission, then contacts, reputations and favours are not where safety actually lies. And if He is never wearied by preserving the heavens and the earth, the matter you are carrying is not too much to hand over to Him tonight. Anxiety loses weight, not because the problem became smaller, but because the One in charge of it has been described accurately.",
            bn: "এটি আশাকেও শৃঙ্খলায় আনে। যদি তাঁর অনুমতি ছাড়া কোনো সুপারিশকারীই কিছু নিশ্চিত করতে না পারে, তবে পরিচিতি, সুনাম বা পক্ষপাত — এগুলোর কোনোটাই প্রকৃত নিরাপত্তার জায়গা নয়। আর আসমান-যমীনের রক্ষণাবেক্ষণ যদি তাঁকে ক্লান্ত না করে, তবে আজ রাতে আপনি যে বোঝাটি বইছেন, তা তাঁর হাতে তুলে দেওয়ার জন্য বেশি বড় নয়। দুশ্চিন্তার ওজন কমে — সমস্যা ছোট হয়ে গেছে বলে নয়, বরং যিনি সেটির দায়িত্বে আছেন তাঁকে যথাযথভাবে চেনা হয়েছে বলে।",
          },
        ],
      },
    ],
  },
  '2:286': {
    sections: [
      {
        h: { en: "Capacity, Not Cruelty", bn: "সাধ্য, নিষ্ঠুরতা নয়" },
        p: [
          {
            en: "The verse begins with a rule that governs the whole of the law: Allah does not burden a soul beyond its wus'. The word is worth pausing on. Wus' is not the utmost a person can manage before collapsing; it is the comfortable room a person has, the space within their capacity. The commentators point out that Allah could have used a word meaning maximum effort and did not. The obligations of Islam sit inside our range, not at its outer edge.",
            bn: "আয়াতটি শুরু হয় এমন এক নীতি দিয়ে যা গোটা শরীয়তকে পরিচালনা করে: আল্লাহ কোনো প্রাণকে তার 'উস'-এর বাইরে দায়িত্ব দেন না। শব্দটির ওপর একটু থামা দরকার। 'উস' মানে ভেঙে পড়ার আগমুহূর্ত পর্যন্ত সর্বোচ্চ চেষ্টা নয়; এর অর্থ মানুষের সামর্থ্যের ভেতরে যে স্বস্তির জায়গাটুকু থাকে, সেটুকু। মুফাসসিরগণ লক্ষ করেন, আল্লাহ চাইলে 'সর্বোচ্চ শক্তি' অর্থে শব্দ ব্যবহার করতে পারতেন, কিন্তু করেননি। ইসলামের দায়িত্বগুলো আমাদের সামর্থ্যের ভেতরে বসে আছে, তার শেষ প্রান্তে নয়।",
          },
          {
            en: "The next clause turns on a small grammatical shift that the commentators regularly note. For good it says laha ma kasabat, hers is what she earned; for evil, wa 'alayha ma iktasabat, against her is what she acquired. The second verb is a form that carries added effort. Good is written down as soon as it is earned; evil is recorded as something a person had to work at. The asymmetry is not an accident of style.",
            bn: "পরের বাক্যটি একটি ছোট ব্যাকরণগত পরিবর্তনের ওপর দাঁড়িয়ে, যা মুফাসসিরগণ প্রায়ই উল্লেখ করেন। কল্যাণ সম্পর্কে বলা হয়েছে 'লাহা মা কাসাবাত' — সে যা অর্জন করেছে তা তারই; আর মন্দ সম্পর্কে 'ওয়া আলাইহা মাক্‌তাসাবাত' — সে যা কামাই করেছে তা তার বিরুদ্ধে। দ্বিতীয় ক্রিয়াপদটি এমন এক গঠনে, যা বাড়তি প্রচেষ্টার অর্থ বহন করে। ভালো কাজ অর্জিত হওয়ামাত্র লেখা হয়; মন্দ কাজ লেখা হয় এমন কিছু হিসেবে যার জন্য মানুষকে পরিশ্রম করতে হয়েছে। এই অসমতা কেবল ভাষার কারুকাজ নয়।",
          },
        ],
      },
      {
        h: { en: "The Night the Weight Lifted", bn: "যে রাতে বোঝা নেমে গেল" },
        p: [
          {
            en: "This is one of the places where a sound occasion of revelation is preserved. Muslim narrates that when 2:284 came down, saying that Allah will call to account whatever the servants disclose or conceal within themselves, the companions found it heavy and came to the Prophet ﷺ saying that this was beyond their power. He told them not to answer as the People of the Book had answered, but to say: we hear and we obey.",
            bn: "এটি সেই কয়েকটি জায়গার একটি যেখানে সহীহ সূত্রে শানে নুযূল সংরক্ষিত আছে। মুসলিম বর্ণনা করেন, যখন 2:284 নাযিল হয় — অর্থাৎ বান্দারা নিজেদের ভেতরে যা প্রকাশ করে বা গোপন রাখে, আল্লাহ সবকিছুর হিসাব নেবেন — সাহাবীরা তা ভারী বোধ করেন এবং নবী ﷺ-এর কাছে এসে বলেন, এটি তাঁদের সাধ্যের বাইরে। নবী ﷺ তাঁদের বলেন, আহলে কিতাব যেভাবে জবাব দিয়েছিল সেভাবে বলো না; বরং বলো — আমরা শুনলাম এবং মানলাম।",
          },
          {
            en: "When they said it and their tongues submitted to it, this verse came down and lifted what they had feared. The same narration reports that as each request in the closing supplication was recited, the answer given was: I have done so. That is the emotional shape of the passage. A community expressed obedience before it received relief, and then relief arrived request by request. The verse is the last of Surah al-Baqarah, and it ends the longest surah on an answered prayer.",
            bn: "তাঁরা যখন তা বললেন এবং তাঁদের জিহ্বা তাতে নত হলো, তখন এই আয়াত নাযিল হয়ে তাঁদের ভয়টুকু তুলে নেয়। একই বর্ণনায় এসেছে, শেষাংশের দোয়ার প্রতিটি আবেদন পাঠ করা হলে জবাব আসে — আমি তা করে দিলাম। এটিই এই অংশের আবেগগত কাঠামো। একটি জাতি স্বস্তি পাওয়ার আগেই আনুগত্য ঘোষণা করেছিল, আর তারপর স্বস্তি এসেছিল আবেদন ধরে ধরে। আয়াতটি সূরা আল-বাকারার শেষ আয়াত, আর কুরআনের দীর্ঘতম সূরাটি শেষ হয় একটি কবুল হওয়া দোয়া দিয়ে।",
          },
        ],
      },
      {
        h: { en: "Five Requests in Order", bn: "ক্রমানুসারে পাঁচটি আবেদন" },
        p: [
          {
            en: "The supplication is carefully ordered. First, do not take us to task if we forget or fall into error, which asks for the two failures that are not deliberate. Then, do not place upon us an isr, a heavy binding burden such as was placed on those before us. Then, do not make us bear what we have no strength for. Notice that the servant asks for ease even after being told the law is already within capacity.",
            bn: "দোয়াটি অত্যন্ত সুবিন্যস্ত। প্রথমে: আমরা যদি ভুলে যাই বা ভুল করি, আমাদের পাকড়াও করবেন না — অর্থাৎ যে দুই ধরনের ত্রুটি ইচ্ছাকৃত নয়, সেগুলোর কথা। এরপর: আমাদের ওপর 'ইসর' চাপিয়ে দেবেন না — সেই ভারী, বাঁধনদায়ী বোঝা, যা আমাদের পূর্ববর্তীদের ওপর দেওয়া হয়েছিল। এরপর: আমাদের এমন কিছু বহন করাবেন না যার শক্তি আমাদের নেই। লক্ষ করুন, শরীয়ত সাধ্যের ভেতরেই আছে জানার পরও বান্দা স্বস্তির প্রার্থনা করছে।",
          },
          {
            en: "The last three words for mercy are not repetition. 'Afw is erasure, that the offence be wiped away as though it had not happened; maghfirah comes from covering, that it be veiled from exposure; rahmah is the mercy that gives after the debt is settled. The prayer ends by naming Allah our mawla, our protector and patron, and asking for help against those who reject faith. Weakness has been turned, sentence by sentence, into a claim on His care.",
            bn: "শেষের তিনটি শব্দ কেবল পুনরাবৃত্তি নয়। 'আফও মানে মুছে ফেলা — অপরাধটি যেন ঘটেইনি, এমনভাবে মিটিয়ে দেওয়া; মাগফিরাত এসেছে আবরণের অর্থ থেকে — অর্থাৎ তা ঢেকে রাখা, প্রকাশ না করা; আর রহমত হলো সেই দয়া, যা দেনা মিটে যাওয়ার পরও দান করে। দোয়াটি শেষ হয় আল্লাহকে 'মাওলা' — আমাদের অভিভাবক ও পৃষ্ঠপোষক — বলে ডেকে, আর অস্বীকারকারী সম্প্রদায়ের বিরুদ্ধে সাহায্য চেয়ে। বাক্যে বাক্যে দুর্বলতাকে বদলে দেওয়া হয়েছে তাঁর যত্নের ওপর এক দাবিতে।",
          },
        ],
      },
      {
        h: { en: "What the Commentators Draw", bn: "মুফাসসিরগণ যা গ্রহণ করেন" },
        p: [
          {
            en: "The majority of exegetes take the opening rule as a foundation of Islamic legal reasoning rather than a comforting sentiment. From it the jurists derive that inability removes obligation: the one who cannot stand prays sitting, the one who cannot fast makes up or feeds, the one under genuine compulsion is not held as the free actor is. Whole chapters of fiqh on concession and necessity rest on this single clause.",
            bn: "অধিকাংশ মুফাসসির আয়াতের সূচনা-নীতিটিকে কেবল সান্ত্বনার বাক্য নয়, বরং ইসলামী আইনচিন্তার একটি ভিত্তি হিসেবে গ্রহণ করেন। এখান থেকেই ফকীহগণ নীতি নেন যে অক্ষমতা দায়িত্ব রহিত করে: যে দাঁড়াতে পারে না সে বসে নামায পড়ে, যে রোযা রাখতে পারে না সে কাযা করে বা ফিদইয়া দেয়, আর যে প্রকৃত বাধ্যবাধকতার মধ্যে আছে তাকে স্বাধীন ব্যক্তির মতো ধরা হয় না। ছাড় ও প্রয়োজনের ওপর ফিকহের বহু অধ্যায় এই একটি বাক্যের ওপর দাঁড়িয়ে।",
          },
          {
            en: "They also read the verse against 2:284 rather than apart from it. The earlier verse establishes that Allah knows the inner life completely; this one clarifies that He does not punish the passing thought a person neither acted on nor settled into. Knowledge is total; accountability is measured. Holding both together is what keeps a believer honest without becoming paralysed by self-inspection.",
            bn: "তাঁরা আয়াতটিকে 2:284 থেকে বিচ্ছিন্ন করে নয়, বরং তার পাশে রেখে পড়েন। আগের আয়াত প্রতিষ্ঠা করে যে আল্লাহ অন্তরের সবকিছু পূর্ণরূপে জানেন; আর এই আয়াত স্পষ্ট করে যে ক্ষণিকের যে ভাবনা মানুষ কাজে রূপ দেয়নি বা মনে স্থায়ী করেনি, তার জন্য তিনি শাস্তি দেন না। জ্ঞান পূর্ণ; জবাবদিহি পরিমিত। এই দুটোকে একসঙ্গে ধরে রাখলেই মুমিন সৎ থাকে, অথচ আত্মপরীক্ষার ভারে অবশ হয়ে পড়ে না।",
          },
        ],
      },
      {
        h: { en: "In the Practice of the Prophet ﷺ", bn: "নবী ﷺ-এর আমলে" },
        p: [
          {
            en: "Al-Bukhari and Muslim both record that the Prophet ﷺ said whoever recites the last two verses of Surah al-Baqarah in a night, they will suffice him. Whatever the precise scope of that sufficiency, the practice it produced is clear: these verses became part of the believer's night, recited as protection and as the closing statement of the day. Many companions are reported to have kept them as a fixed habit before sleeping.",
            bn: "বুখারী ও মুসলিম উভয়েই বর্ণনা করেন, নবী ﷺ বলেছেন — যে ব্যক্তি কোনো রাতে সূরা আল-বাকারার শেষ দুই আয়াত পাঠ করবে, তা তার জন্য যথেষ্ট হবে। সেই 'যথেষ্ট' হওয়ার পরিধি যা-ই হোক, এর ফলে যে আমলটি গড়ে উঠেছে তা স্পষ্ট: এই আয়াতগুলো মুমিনের রাতের অংশ হয়ে যায় — নিরাপত্তা হিসেবে, আবার দিনের সমাপ্তি-ঘোষণা হিসেবেও। বহু সাহাবী থেকে বর্ণিত আছে, ঘুমানোর আগে তাঁরা এটিকে নিয়মিত অভ্যাসে পরিণত করেছিলেন।",
          },
          {
            en: "Muslim also narrates that these closing verses, together with al-Fatihah, were given to the Prophet ﷺ as two lights not given to any prophet before him. The wording matters for how a Muslim uses them. They are described as a gift and a light, not as an incantation. Recited without meaning they are still recitation; recited with meaning they are a conversation the believer has already been told was answered.",
            bn: "মুসলিম আরও বর্ণনা করেন যে সূরা ফাতিহা এবং এই শেষ আয়াতগুলো নবী ﷺ-কে দুটি নূর হিসেবে দেওয়া হয়েছিল, যা তাঁর আগে কোনো নবীকে দেওয়া হয়নি। শব্দচয়নটি গুরুত্বপূর্ণ, কারণ এটি ঠিক করে দেয় একজন মুসলিম এগুলো কীভাবে ব্যবহার করবে। এগুলোকে বলা হয়েছে উপহার ও আলো — কোনো মন্ত্র নয়। অর্থ না বুঝে পড়লেও তা তিলাওয়াত; কিন্তু অর্থ বুঝে পড়লে তা এমন এক কথোপকথন, যার জবাব দেওয়া হয়েছে বলে আমাদের আগেই জানানো হয়েছে।",
          },
        ],
      },
      {
        h: { en: "Living With Your Limits", bn: "নিজের সীমা নিয়ে বেঁচে থাকা" },
        p: [
          {
            en: "It helps to be exact about what the opening promise covers. It says that Allah does not impose religious obligation beyond capacity. It does not promise that life will never feel overwhelming, that grief will stay manageable, or that a person will never need help, rest or treatment. Reading it as a claim that no believer can ever be crushed by circumstances turns a mercy into a burden, which is the opposite of the verse's own direction.",
            bn: "আয়াতের শুরুর প্রতিশ্রুতিটি ঠিক কী কভার করে, সে বিষয়ে নির্ভুল হওয়া দরকার। এটি বলছে, আল্লাহ সাধ্যের অতিরিক্ত ধর্মীয় দায়িত্ব চাপান না। এটি প্রতিশ্রুতি দিচ্ছে না যে জীবন কখনো অসহনীয় মনে হবে না, শোক সবসময় সামলানোর মতো থাকবে, কিংবা মানুষের কখনো সাহায্য, বিশ্রাম বা চিকিৎসার দরকার হবে না। একে যদি এভাবে পড়া হয় যে কোনো মুমিন কখনো পরিস্থিতির চাপে ভেঙে পড়তে পারে না, তবে একটি রহমতকে বোঝায় পরিণত করা হয় — যা আয়াতের নিজের গতিরই বিপরীত।",
          },
          {
            en: "Used properly it does two things at once. When a duty feels impossible, it asks whether the duty is truly beyond capacity or merely beyond current habit, and the difference is usually clear on inspection. And when a person is genuinely at the end of their strength, it hands them a supplication that Allah Himself taught for exactly that moment, ending not in a complaint but in the words: You are our protector, so help us.",
            bn: "সঠিকভাবে ব্যবহার করলে এটি একসঙ্গে দুটি কাজ করে। যখন কোনো দায়িত্ব অসম্ভব মনে হয়, তখন এটি প্রশ্ন করে — দায়িত্বটি কি সত্যিই সাধ্যের বাইরে, নাকি কেবল বর্তমান অভ্যাসের বাইরে? একটু খতিয়ে দেখলে পার্থক্যটা সাধারণত পরিষ্কার হয়ে যায়। আর যখন কেউ সত্যিই নিজের শক্তির শেষ প্রান্তে পৌঁছে যায়, তখন এটি তার হাতে তুলে দেয় ঠিক সেই মুহূর্তের জন্য আল্লাহর শেখানো একটি দোয়া, যা অভিযোগে শেষ হয় না, শেষ হয় এই কথায় — আপনি আমাদের অভিভাবক, তাই আমাদের সাহায্য করুন।",
          },
        ],
      },
    ],
  },
  '2:152': {
    sections: [
      {
        h: { en: "An Exchange in Four Words", bn: "চার শব্দে এক বিনিময়" },
        p: [
          {
            en: "The Arabic is startlingly short: fadhkuruni adhkurkum. Remember Me, I will remember you. Both verbs come from the same root, dhikr, which covers mentioning with the tongue, recalling in the mind and keeping present in the heart. The Quran does not say worship Me and I will reward you, though that is true elsewhere. Here the same word is used on both sides, so the sentence reads as an exchange between two parties rather than a transaction.",
            bn: "আরবি বাক্যটি বিস্ময়করভাবে সংক্ষিপ্ত: ফাযকুরূনী আযকুরকুম। আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব। দুটি ক্রিয়াপদই এসেছে একই ধাতু 'যিকর' থেকে, যা একইসঙ্গে জিহ্বায় উচ্চারণ, মনে জাগরূক রাখা এবং হৃদয়ে উপস্থিত রাখা — সবকিছু বোঝায়। কুরআন এখানে বলেনি 'আমার ইবাদত করো, আমি প্রতিদান দেব', যদিও সে কথাও অন্যত্র সত্য। এখানে দুই পাশে একই শব্দ ব্যবহৃত হয়েছে, ফলে বাক্যটি লেনদেন নয়, বরং দুই পক্ষের মধ্যে এক বিনিময়ের মতো শোনায়।",
          },
          {
            en: "The second half sets up an opposition that is easy to miss in translation: washkuru li wa la takfurun. Be grateful to Me and do not be ungrateful. The opposite of shukr in Quranic Arabic is kufr, from a root meaning to cover something over. The farmer who buries a seed uses the same verb. Ingratitude, in this picture, is not loud denial. It is quietly covering a gift until it is no longer visible.",
            bn: "দ্বিতীয় অংশটি এমন এক বৈপরীত্য দাঁড় করায়, যা অনুবাদে সহজে হারিয়ে যায়: ওয়াশকুরূ লী ওয়ালা তাকফুরূন। আমার প্রতি কৃতজ্ঞ হও, আর অকৃতজ্ঞ হয়ো না। কুরআনি আরবিতে 'শুকর'-এর বিপরীত হলো 'কুফর', যার ধাতুগত অর্থ কোনো কিছু ঢেকে দেওয়া। যে কৃষক বীজ মাটিচাপা দেয়, সেও এই একই ক্রিয়াপদ ব্যবহার করে। এই চিত্রে অকৃতজ্ঞতা মানে উচ্চস্বরে অস্বীকার নয়; বরং নিঃশব্দে একটি নিয়ামতকে ঢেকে ফেলা, যতক্ষণ না তা আর চোখেই পড়ে না।",
          },
        ],
      },
      {
        h: { en: "The Verse Before and After", bn: "আগের ও পরের আয়াত" },
        p: [
          {
            en: "The verse is general in application, with no particular occasion of revelation attached to it, but its position in Surah al-Baqarah is instructive. It closes the long passage on the change of the qiblah, 2:142-152, in which the direction of prayer was turned from Jerusalem to the Sacred Mosque and the community was tested by the objections that followed. Remembrance is being commanded to a people who had just been unsettled publicly.",
            bn: "আয়াতটির প্রয়োগ সাধারণ, এর সঙ্গে নির্দিষ্ট কোনো শানে নুযূল যুক্ত নেই; তবে সূরা আল-বাকারায় এর অবস্থান শিক্ষণীয়। এটি কিবলা পরিবর্তনের দীর্ঘ অংশটি — 2:142-152 — শেষ করে, যেখানে নামাযের দিক বায়তুল মাকদিস থেকে মসজিদুল হারামের দিকে ঘুরিয়ে দেওয়া হয় এবং এর পরের আপত্তিগুলো দিয়ে সমাজটিকে পরীক্ষা করা হয়। অর্থাৎ স্মরণের আদেশ এমন এক জাতিকে দেওয়া হচ্ছে, যারা সবেমাত্র প্রকাশ্যে নাড়া খেয়েছে।",
          },
          {
            en: "The immediately preceding verse, 2:151, lists what Allah has already given them: a messenger from among themselves who recites His signs, purifies them and teaches them the Book and wisdom. So remember Me arrives as a response to a favour already itemised. The verse that follows, 2:153, tells them to seek help through patience and prayer. Remembrance is placed exactly between a gift received and a hardship expected.",
            bn: "ঠিক আগের আয়াত 2:151-এ তালিকাভুক্ত হয়েছে আল্লাহ তাঁদের ইতিমধ্যে কী দিয়েছেন: তাঁদের ভেতর থেকেই একজন রাসূল, যিনি তাঁদের কাছে তাঁর আয়াত পাঠ করেন, তাঁদের পরিশুদ্ধ করেন এবং কিতাব ও হিকমত শেখান। ফলে 'আমাকে স্মরণ করো' কথাটি আসে ইতিমধ্যে গুনে দেখানো এক অনুগ্রহের জবাব হিসেবে। এর পরের আয়াত 2:153 তাঁদের বলে ধৈর্য ও নামাযের মাধ্যমে সাহায্য চাইতে। অর্থাৎ স্মরণকে ঠিক বসানো হয়েছে প্রাপ্ত নিয়ামত আর প্রত্যাশিত কষ্টের মাঝখানে।",
          },
        ],
      },
      {
        h: { en: "What He Remembers Us With", bn: "তিনি কী দিয়ে স্মরণ করেন" },
        p: [
          {
            en: "The commentators are careful with the second half of the exchange. Allah's remembrance of a servant is not of the same kind as ours of Him; it is understood as befitting Him, and is explained as mention, favour, protection and reward. A hadith qudsi recorded by al-Bukhari and Muslim supplies the clearest gloss: Allah says He is as His servant expects of Him, that if the servant mentions Him within himself He mentions him within Himself, and if the servant mentions Him in a gathering He mentions him in a better gathering.",
            bn: "এই বিনিময়ের দ্বিতীয় অংশ নিয়ে মুফাসসিরগণ অত্যন্ত সতর্ক। আল্লাহর পক্ষ থেকে বান্দাকে স্মরণ করা আমাদের স্মরণের মতো নয়; একে তাঁর শানের উপযোগী অর্থে বোঝা হয় এবং ব্যাখ্যা করা হয় উল্লেখ, অনুগ্রহ, রক্ষা ও পুরস্কার হিসেবে। বুখারী ও মুসলিমে সংকলিত একটি হাদীসে কুদসী সবচেয়ে স্পষ্ট ব্যাখ্যা দেয়: আল্লাহ বলেন, বান্দা তাঁর সম্পর্কে যেমন ধারণা রাখে তিনি তেমনই; বান্দা যদি তাঁকে নিজের ভেতরে স্মরণ করে, তিনি তাকে নিজের কাছে স্মরণ করেন, আর বান্দা যদি কোনো মজলিসে তাঁকে স্মরণ করে, তিনি তাকে তার চেয়ে উত্তম মজলিসে স্মরণ করেন।",
          },
          {
            en: "That reading keeps the verse from becoming sentimental. The promise is not that a warm feeling follows every recitation. It is that a person who keeps Allah present is themselves kept present with Allah, and that this happens whether or not it is felt at the time. Many of the early scholars are reported to have said that dhikr done without any sweetness is still dhikr, and that the sweetness usually comes to those who continued anyway.",
            bn: "এই পাঠ আয়াতটিকে আবেগসর্বস্ব হয়ে পড়া থেকে বাঁচায়। প্রতিশ্রুতি এই নয় যে প্রতিটি তিলাওয়াতের পর একটি উষ্ণ অনুভূতি আসবে। প্রতিশ্রুতি হলো, যে ব্যক্তি আল্লাহকে উপস্থিত রাখে, সে নিজেও আল্লাহর কাছে উপস্থিত থাকে — সেই মুহূর্তে তা অনুভূত হোক বা না হোক। পূর্ববর্তী বহু আলিম থেকে বর্ণিত আছে, কোনো মাধুর্য ছাড়া করা যিকরও যিকরই; আর মাধুর্য সাধারণত তাদেরই কাছে আসে, যারা অনুভূতি না পেয়েও চালিয়ে গিয়েছিল।",
          },
        ],
      },
      {
        h: { en: "How It Was Practised", bn: "কীভাবে এটি চর্চিত হয়েছে" },
        p: [
          {
            en: "The Prophet ﷺ tied remembrance and gratitude together exactly as the verse does. Abu Dawud and an-Nasa'i report that he took Mu'adh ibn Jabal (RA) by the hand, told him he loved him, and instructed him not to leave the end of any prayer without saying: O Allah, help me to remember You, to thank You, and to worship You well. The three requests match the verse's two commands and add the means of fulfilling them.",
            bn: "নবী ﷺ স্মরণ ও কৃতজ্ঞতাকে ঠিক আয়াতের মতোই একসঙ্গে বেঁধেছেন। আবু দাউদ ও নাসাঈ বর্ণনা করেন, তিনি মু'আয ইবনে জাবাল (রাঃ)-এর হাত ধরে বলেন যে তিনি তাঁকে ভালোবাসেন, এবং নির্দেশ দেন যেন তিনি কোনো নামাযের শেষে এই দোয়া না বলে না যান: হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শোকর আদায় করতে এবং আপনার উত্তম ইবাদত করতে আমাকে সাহায্য করুন। তিনটি আবেদন আয়াতের দুটি আদেশের সঙ্গে মেলে এবং সেগুলো পালনের উপায়টিও যোগ করে।",
          },
          {
            en: "His own remembrance was constant rather than occasional. Aishah (RA) reported, as narrated in Muslim, that he used to remember Allah at all his times. The pattern preserved from him is not long isolated sessions but short phrases attached to ordinary actions: waking, dressing, eating, leaving the house, entering the mosque, seeing rain, and lying down again at night. Remembrance was threaded through the day rather than scheduled against it.",
            bn: "তাঁর নিজের যিকর ছিল অবিরাম, মাঝেমধ্যের নয়। আয়িশা (রাঃ) থেকে মুসলিমে বর্ণিত আছে, তিনি সর্বাবস্থায় আল্লাহকে স্মরণ করতেন। তাঁর থেকে সংরক্ষিত ধরনটি দীর্ঘ বিচ্ছিন্ন বৈঠক নয়, বরং সাধারণ কাজের সঙ্গে জুড়ে দেওয়া ছোট ছোট বাক্য: ঘুম থেকে ওঠা, পোশাক পরা, খাওয়া, ঘর থেকে বের হওয়া, মসজিদে ঢোকা, বৃষ্টি দেখা, আর রাতে আবার শুয়ে পড়া। যিকর দিনের বিরুদ্ধে সময় বরাদ্দ করে নয়, দিনের ভেতর দিয়েই বোনা ছিল।",
          },
        ],
      },
      {
        h: { en: "Gratitude That Names Things", bn: "যে কৃতজ্ঞতা নাম ধরে বলে" },
        p: [
          {
            en: "Gratitude in the Quran is more than a mood. The classical scholars describe it as having three parts: recognising the blessing as coming from Allah, expressing that with the tongue, and using the blessing in a way its Giver would approve. By that definition a person can feel thankful and still not be grateful, and a person can be grateful in the middle of a difficult week because the third part is an action rather than a feeling.",
            bn: "কুরআনে কৃতজ্ঞতা কেবল একটি মেজাজ নয়। ধ্রুপদী আলিমগণ একে তিন অংশে বর্ণনা করেন: নিয়ামতটিকে আল্লাহর পক্ষ থেকে এসেছে বলে স্বীকার করা, জিহ্বা দিয়ে তা প্রকাশ করা, এবং নিয়ামতটিকে এমনভাবে ব্যবহার করা যা এর দাতার পছন্দ। এই সংজ্ঞা অনুসারে একজন মানুষ কৃতজ্ঞ বোধ করেও প্রকৃত শোকরগুজার না হতে পারে; আবার কঠিন এক সপ্তাহের মাঝখানেও কেউ শোকরগুজার হতে পারে, কারণ তৃতীয় অংশটি অনুভূতি নয়, কাজ।",
          },
          {
            en: "This is where the verse becomes practical. Vague thankfulness fades quickly; named thankfulness does not. Naming three specific things at a fixed point in the day, saying alhamdulillah aloud when something ordinary goes right, and spending one blessing deliberately in obedience are all small enough to sustain. The verse warns against covering blessings over, and nothing uncovers a blessing faster than saying what it is.",
            bn: "এখানেই আয়াতটি ব্যবহারিক হয়ে ওঠে। অস্পষ্ট কৃতজ্ঞতা দ্রুত মিলিয়ে যায়; নাম ধরে বলা কৃতজ্ঞতা যায় না। দিনের নির্দিষ্ট একটি সময়ে তিনটি সুনির্দিষ্ট নিয়ামতের নাম বলা, সাধারণ কোনো কিছু ঠিকঠাক হলে মুখে 'আলহামদুলিল্লাহ' বলা, আর একটি নিয়ামতকে সচেতনভাবে আনুগত্যের কাজে ব্যয় করা — এগুলো এতটাই ছোট যে ধরে রাখা যায়। আয়াতটি নিয়ামত ঢেকে ফেলার বিরুদ্ধে সতর্ক করে, আর নিয়ামতের ঢাকনা সরানোর দ্রুততম উপায় হলো সেটির নাম উচ্চারণ করা।",
          },
        ],
      },
      {
        h: { en: "Keeping the Line Open", bn: "সংযোগটি খোলা রাখা" },
        p: [
          {
            en: "One reason this verse is loved is that it sets no minimum. There is no threshold of piety to cross before the exchange begins, no state of purity required for the tongue to move. A person returning after years away starts at the same place as anyone else: with a phrase. The verse's grammar makes remembrance the first move, which means the servant is never waiting for permission to begin.",
            bn: "এই আয়াতটি যে কারণে এত প্রিয়, তার একটি হলো এখানে কোনো ন্যূনতম শর্ত নেই। বিনিময় শুরু হওয়ার আগে পার হওয়ার মতো কোনো তাকওয়ার সীমারেখা নেই, জিহ্বা নড়ার জন্য কোনো বিশেষ পবিত্রতার অবস্থাও আবশ্যক নয়। বছরের পর বছর দূরে থেকে ফিরে আসা মানুষটি শুরু করে ঠিক সেখান থেকেই, যেখান থেকে আর সবাই শুরু করে: একটি বাক্য দিয়ে। আয়াতের ব্যাকরণ স্মরণকে প্রথম পদক্ষেপ বানিয়েছে, অর্থাৎ বান্দাকে শুরু করার জন্য কারও অনুমতির অপেক্ষায় বসে থাকতে হয় না।",
          },
          {
            en: "What sustains it in a modern week is usually anchoring rather than ambition. Tie a short phrase to something you already do without fail, such as unlocking a phone, waiting at a light or climbing stairs. Keep the morning and evening adhkar short enough that you will not abandon them when tired. The measure of success is not intensity on one day but the line staying open across ordinary ones.",
            bn: "আধুনিক জীবনে এটি টিকিয়ে রাখে সাধারণত উচ্চাকাঙ্ক্ষা নয়, বরং নোঙর। যে কাজটি আপনি প্রতিদিন নিশ্চিতভাবে করেন — ফোন আনলক করা, সিগন্যালে অপেক্ষা করা, সিঁড়ি ভাঙা — তার সঙ্গে একটি ছোট বাক্য বেঁধে দিন। সকাল-সন্ধ্যার যিকরকে এতটাই সংক্ষিপ্ত রাখুন যেন ক্লান্ত দিনেও তা ছেড়ে দিতে না হয়। সফলতার মাপকাঠি কোনো একদিনের প্রবলতা নয়, বরং সাধারণ দিনগুলোতে সংযোগটি খোলা থাকা।",
          },
        ],
      },
    ],
  },
  '2:186': {
    sections: [
      {
        h: { en: "An Answer Without a Messenger", bn: "মধ্যস্থতা ছাড়া উত্তর" },
        p: [
          {
            en: "The verse begins with a question being reported: and when My servants ask you about Me. Elsewhere in the Quran, when people put a question to the Prophet ﷺ, the answer opens with qul, say to them. Here that word is absent. The reply comes straight back: fa inni qarib, then indeed I am near. The commentators note the omission and read it as part of the meaning rather than a stylistic accident.",
            bn: "আয়াতটি শুরু হয় একটি প্রশ্নের বর্ণনা দিয়ে: আর যখন আমার বান্দারা আপনাকে আমার সম্পর্কে জিজ্ঞেস করে। কুরআনের অন্যত্র যখন মানুষ নবী ﷺ-কে কোনো প্রশ্ন করে, উত্তর শুরু হয় 'কুল' দিয়ে — অর্থাৎ 'বলে দিন'। এখানে সেই শব্দটি নেই। জবাব সরাসরি ফিরে আসে: ফা-ইন্নী কারীব — নিশ্চয়ই আমি নিকটেই আছি। মুফাসসিরগণ এই অনুপস্থিতি লক্ষ করেন এবং একে ভাষার আকস্মিকতা নয়, বরং অর্থেরই অংশ হিসেবে পড়েন।",
          },
          {
            en: "Two more details carry weight. Allah calls them 'ibadi, My servants, a term of belonging, before saying anything about their request. And He describes Himself as qarib, near, using an adjective rather than a verb, so nearness is stated as a permanent quality and not as something that happens when we call. The response clause follows: ujibu da'wata ad-da'i idha da'ani, I answer the call of the caller when he calls Me.",
            bn: "আরও দুটি বিষয় গুরুত্ব বহন করে। আল্লাহ প্রথমে তাদের বলেন 'ইবাদী' — আমার বান্দারা, যা সম্পর্ক ও আপনত্বের পরিভাষা — তাদের আবেদন সম্পর্কে কিছু বলার আগেই। আর তিনি নিজেকে বর্ণনা করেন 'কারীব' বলে, যা ক্রিয়াপদ নয়, বিশেষণ; ফলে নৈকট্য এখানে একটি স্থায়ী গুণ হিসেবে ঘোষিত, আমরা ডাকলে তবেই ঘটে এমন কিছু নয়। এরপর আসে সাড়া দেওয়ার বাক্য: উজীবু দা'ওয়াতাদ্‌ দা'ই ইযা দা'আন — আহ্বানকারী যখন আমাকে ডাকে, আমি তার ডাকে সাড়া দিই।",
          },
        ],
      },
      {
        h: { en: "Placed Inside Ramadan", bn: "রমযানের ভেতরে স্থাপিত" },
        p: [
          {
            en: "The setting is unmistakable. Verse 2:185 has just described Ramadan as the month in which the Quran was sent down and given the concession for the traveller and the ill. Verse 2:187 goes on to the rules of the nights of fasting. Between these two sits a verse about nearness and supplication, with nothing on its surface about fasting at all. The commentators treat this placement as the point: du'a belongs to the month.",
            bn: "প্রেক্ষাপটটি অস্পষ্ট নয়। ঠিক আগের আয়াত 2:185 রমযানকে বর্ণনা করেছে সেই মাস হিসেবে যাতে কুরআন নাযিল হয়েছে, এবং মুসাফির ও অসুস্থের জন্য ছাড় দিয়েছে। পরের আয়াত 2:187 রোযার রাতগুলোর বিধানে চলে যায়। এই দুইয়ের মাঝখানে বসে আছে নৈকট্য ও দোয়া সম্পর্কে একটি আয়াত, যার উপরিভাগে রোযার কোনো উল্লেখই নেই। মুফাসসিরগণ এই অবস্থানটিকেই মূল বার্তা হিসেবে দেখেন: দোয়া এই মাসেরই অঙ্গ।",
          },
          {
            en: "Several reports in the tafsir literature describe companions or a bedouin asking whether their Lord is near, so that they might whisper to Him, or far, so that they should call out. These reports vary in strength and are relayed through different chains, so it is safer to say that the verse answers a real and recurring human question than to fix it to one incident. Its wording is general and speaks to anyone who has wondered how far away God is.",
            bn: "তাফসীরের সাহিত্যে একাধিক বর্ণনায় এসেছে যে কিছু সাহাবী কিংবা এক বেদুইন জিজ্ঞেস করেছিলেন — আমাদের রব কি নিকটে, যাতে আমরা ফিসফিস করে বলি; নাকি দূরে, যাতে আমরা উচ্চস্বরে ডাকি? এই বর্ণনাগুলোর সনদ ও মান ভিন্ন ভিন্ন, তাই একে কোনো একটি ঘটনার সঙ্গে বেঁধে ফেলার চেয়ে বলা নিরাপদ যে আয়াতটি মানুষের এক বাস্তব ও বারবার ফিরে আসা প্রশ্নের জবাব দেয়। এর ভাষা সাধারণ, আর তা সেই সবার সঙ্গে কথা বলে যারা কখনো ভেবেছে — আল্লাহ ঠিক কতটা দূরে।",
          },
        ],
      },
      {
        h: { en: "What Response Means", bn: "সাড়া দেওয়ার অর্থ" },
        p: [
          {
            en: "The verse promises a response, and the commentators are careful not to flatten that into getting whatever is asked. A hadith in the Musnad of Ahmad, with a similar report in at-Tirmidhi, describes three possible outcomes for a supplication made without sin or severing of kinship: it is given, or it is stored for the hereafter, or an equivalent harm is turned away. On that reading no du'a is wasted, though not every du'a arrives in the shape it was posted.",
            bn: "আয়াতটি সাড়ার প্রতিশ্রুতি দেয়, আর মুফাসসিরগণ সতর্ক থাকেন যেন একে 'যা চাওয়া হয় তা-ই পাওয়া' অর্থে সংকুচিত না করা হয়। মুসনাদে আহমাদে বর্ণিত — এবং তিরমিযীতে কাছাকাছি ভাষায় আসা — একটি হাদীসে বলা হয়েছে, পাপ বা আত্মীয়তা ছিন্ন করার উদ্দেশ্য ছাড়া করা দোয়ার তিনটি সম্ভাব্য পরিণতি: তা দেওয়া হয়, কিংবা আখিরাতের জন্য জমা রাখা হয়, কিংবা সমপরিমাণ কোনো ক্ষতি সরিয়ে দেওয়া হয়। এই পাঠ অনুযায়ী কোনো দোয়াই বৃথা যায় না, যদিও প্রতিটি দোয়া ঠিক যে আকারে পাঠানো হয়েছিল সেই আকারে ফিরে আসে না।",
          },
          {
            en: "The verse then turns the direction around: falyastajibu li walyu'minu bi, so let them respond to Me and believe in Me, that they may be rightly guided. The same verb used for Allah answering the servant is now used for the servant answering Allah. Asking and obeying are placed on one continuum. The commentators generally read this as a condition of quality rather than eligibility: the more responsive the servant, the more the relationship works in both directions.",
            bn: "এরপর আয়াতটি দিক ঘুরিয়ে দেয়: ফাল-ইয়াস্তাজীবূ লী ওয়াল-ইউ'মিনূ বী — অতএব তারা আমার ডাকে সাড়া দিক ও আমার প্রতি ঈমান আনুক, যাতে তারা সঠিক পথ পায়। আল্লাহর সাড়া দেওয়ার জন্য যে ক্রিয়াপদ ব্যবহৃত হয়েছে, বান্দার সাড়া দেওয়ার জন্যও এখন সেই একই ক্রিয়াপদ। চাওয়া ও মানা একই ধারাবাহিকতায় বসানো হয়েছে। মুফাসসিরগণ সাধারণত একে যোগ্যতার শর্ত নয়, বরং গুণমানের শর্ত হিসেবে পড়েন: বান্দা যত বেশি সাড়া দেয়, সম্পর্কটি ততই দুই দিক থেকেই কাজ করে।",
          },
        ],
      },
      {
        h: { en: "How the Prophet ﷺ Asked", bn: "নবী ﷺ কীভাবে চাইতেন" },
        p: [
          {
            en: "The Prophet ﷺ called du'a the very substance of worship, in a report transmitted by at-Tirmidhi. His own supplications, preserved in large numbers, are marked by a few consistent habits: praising Allah before asking, sending salawat, using His names appropriate to the request, and asking for the small along with the great. A report in at-Tirmidhi, though of debated strength, has him teaching that a servant should ask Allah even for the strap of his sandal when it breaks.",
            bn: "তিরমিযীতে বর্ণিত এক হাদীসে নবী ﷺ দোয়াকে ইবাদতের মূল সারবস্তু বলেছেন। তাঁর নিজের দোয়াগুলো বিপুল সংখ্যায় সংরক্ষিত, আর সেগুলোতে কয়েকটি ধারাবাহিক অভ্যাস স্পষ্ট: চাওয়ার আগে আল্লাহর প্রশংসা করা, দরূদ পাঠ করা, আবেদনের সঙ্গে মানানসই তাঁর নামগুলো ব্যবহার করা, আর বড় জিনিসের পাশাপাশি ছোট জিনিসও চাওয়া। তিরমিযীর একটি বর্ণনায় — যার সনদের মান নিয়ে মতভেদ আছে — এসেছে, তিনি শিখিয়েছেন: বান্দা যেন জুতার ফিতা ছিঁড়ে গেলেও তা আল্লাহর কাছেই চায়।",
          },
          {
            en: "Certain times were emphasised in his practice. Al-Bukhari and Muslim record that Allah descends, in a manner befitting Him, in the last third of the night and calls out who is asking of Me that I may give him. Other reports single out the moment of prostration, the time between the adhan and the iqamah, and the last hour of Friday. None of these makes du'a exclusive to a slot; they mark hours when hearts are usually more awake.",
            bn: "তাঁর আমলে কিছু সময়কে বিশেষভাবে গুরুত্ব দেওয়া হয়েছে। বুখারী ও মুসলিমে বর্ণিত আছে, রাতের শেষ তৃতীয়াংশে আল্লাহ তাঁর শানের উপযোগী পদ্ধতিতে অবতরণ করেন এবং ডেকে বলেন — কে আছে আমার কাছে চাইবে, আমি তাকে দেব? অন্যান্য বর্ণনায় বিশেষভাবে উল্লেখ আছে সিজদার মুহূর্ত, আযান ও ইকামতের মধ্যবর্তী সময় এবং জুমার দিনের শেষ প্রহর। এর কোনোটিই দোয়াকে নির্দিষ্ট সময়ে সীমাবদ্ধ করে না; বরং এগুলো সেই সময়গুলো চিহ্নিত করে যখন হৃদয় সাধারণত বেশি জাগ্রত থাকে।",
          },
        ],
      },
      {
        h: { en: "When the Answer Is Slow", bn: "যখন উত্তর দেরিতে আসে" },
        p: [
          {
            en: "The hardest part of this verse is living in the gap between asking and receiving. The Prophet ﷺ addressed that gap directly, warning in a report in al-Bukhari and Muslim that a servant's supplication is answered so long as he is not hasty, and explaining haste as saying I called and I called and was not answered, and then giving up. The failure named there is abandoning the asking, not the delay itself.",
            bn: "এই আয়াতের সবচেয়ে কঠিন দিকটি হলো চাওয়া ও পাওয়ার মাঝখানের ফাঁকটুকুতে বেঁচে থাকা। নবী ﷺ সেই ফাঁকটির কথা সরাসরি বলেছেন। বুখারী ও মুসলিমে বর্ণিত এক হাদীসে তিনি সতর্ক করেন যে বান্দার দোয়া কবুল হতে থাকে যতক্ষণ না সে তাড়াহুড়া করে; আর তাড়াহুড়ার ব্যাখ্যায় বলেন — 'আমি ডাকলাম, ডাকলাম, সাড়া পেলাম না' বলে সে চাওয়া ছেড়ে দেয়। এখানে যে ব্যর্থতাটি চিহ্নিত করা হয়েছে তা দেরি নয়, বরং চাওয়া ছেড়ে দেওয়া।",
          },
          {
            en: "It is worth saying plainly what the verse does not say. It does not promise that a specific illness will lift, that a marriage will be restored, or that a result will land on a date we choose. It promises nearness and a hearing. For many people in long waits, that distinction is what makes the verse survivable: they are not being ignored, and the file is not closed, even when nothing visible has moved for a very long time.",
            bn: "আয়াতটি যা বলেনি, তা স্পষ্ট করে বলা দরকার। এটি প্রতিশ্রুতি দেয়নি যে কোনো নির্দিষ্ট রোগ সেরে যাবে, কোনো বিচ্ছিন্ন সংসার জোড়া লাগবে, কিংবা আমাদের বেছে নেওয়া তারিখে ফলাফল এসে হাজির হবে। এটি প্রতিশ্রুতি দেয় নৈকট্যের ও শোনার। দীর্ঘ অপেক্ষায় থাকা বহু মানুষের জন্য এই পার্থক্যটুকুই আয়াতটিকে বহনযোগ্য করে তোলে: তাদের উপেক্ষা করা হচ্ছে না, আর ফাইলটি বন্ধ হয়ে যায়নি — এমনকি যখন বহুদিন ধরে দৃশ্যমান কিছুই নড়েনি।",
          },
        ],
      },
      {
        h: { en: "Making It a Habit", bn: "একে অভ্যাসে পরিণত করা" },
        p: [
          {
            en: "In practice, the people who keep asking tend to be the ones who made asking small and specific. A short list carried in the head or the phone, three or four items named plainly in one's own language, revisited after a prayer rather than in a special session. Du'a in the mother tongue outside of prayer is agreed upon by the scholars, and honesty in wording usually does more for presence of heart than eloquence.",
            bn: "বাস্তবে যারা চাওয়া চালিয়ে যেতে পারে, তারা সাধারণত চাওয়াটিকে ছোট ও সুনির্দিষ্ট করে নিয়েছে। মাথায় বা ফোনে রাখা একটি ছোট তালিকা, নিজের ভাষায় স্পষ্ট করে বলা তিন-চারটি বিষয়, আর আলাদা কোনো আয়োজন নয় — নামাযের পরই একবার তা ফিরে দেখা। নামাযের বাইরে মাতৃভাষায় দোয়া করার বৈধতায় আলিমগণ একমত, আর শব্দের সৌন্দর্যের চেয়ে শব্দের সততাই সাধারণত হৃদয়ের উপস্থিতি বেশি বাড়ায়।",
          },
          {
            en: "The verse also quietly changes what asking is for. If nearness is the permanent fact and the response is guaranteed in some form, then du'a stops being a lottery ticket and becomes the way a servant stays in contact with the One in charge of the outcome. People who pray this way report that the asking itself steadies them, well before anything in the situation has changed.",
            bn: "আয়াতটি নিঃশব্দে বদলে দেয় চাওয়ার উদ্দেশ্যও। যদি নৈকট্যই স্থায়ী সত্য হয় এবং সাড়া কোনো না কোনো রূপে নিশ্চিত হয়, তবে দোয়া আর লটারির টিকিট থাকে না; বরং তা হয়ে ওঠে সেই পথ, যা দিয়ে বান্দা পরিণামের মালিকের সঙ্গে যোগাযোগ ধরে রাখে। যারা এভাবে দোয়া করেন, তাঁরা বলেন যে চাওয়াটাই তাঁদের স্থির করে দেয় — পরিস্থিতির কিছু বদলানোর অনেক আগেই।",
          },
        ],
      },
    ],
  },
  '2:216': {
    sections: [
      {
        h: { en: "A Command and an Admission", bn: "একটি আদেশ ও একটি স্বীকৃতি" },
        p: [
          {
            en: "The verse opens with kutiba 'alaykumul-qital, fighting has been prescribed for you. The same verb, kutiba, was used a few verses earlier for fasting in 2:183, so the wording places this among the ordained duties rather than among appeals. Then comes something unusual: wa huwa kurhun lakum, and it is disliked by you. Allah states the feeling of those He is commanding before He argues with it.",
            bn: "আয়াতটি শুরু হয় 'কুতিবা আলাইকুমুল কিতাল' দিয়ে — তোমাদের ওপর যুদ্ধ ফরয করা হয়েছে। এই একই ক্রিয়াপদ 'কুতিবা' কয়েক আয়াত আগে 2:183-এ রোযার ক্ষেত্রেও ব্যবহৃত হয়েছে, ফলে শব্দচয়ন একে আবেদনের কাতারে নয়, নির্ধারিত দায়িত্বের কাতারে বসায়। এরপর আসে অস্বাভাবিক একটি কথা: ওয়া হুয়া কুরহুন লাকুম — আর তা তোমাদের কাছে অপছন্দনীয়। আল্লাহ যাদের আদেশ দিচ্ছেন, তাদের অনুভূতিটি তিনি নিজেই বলে দেন, তা নিয়ে যুক্তি দেওয়ার আগেই।",
          },
          {
            en: "That admission is the door into the rest of the verse. Nobody is told that they should have enjoyed the prospect. Then the principle arrives in two balanced clauses: it may be that you dislike a thing and it is good for you, and it may be that you love a thing and it is bad for you. The particle 'asa speaks of what may be so, addressing our limited view rather than laying down a universal rule; the verse does not claim that everything disliked is secretly good.",
            bn: "এই স্বীকৃতিটিই বাকি আয়াতে প্রবেশের দরজা। কাউকে বলা হয়নি যে এই সম্ভাবনায় তাদের উৎফুল্ল হওয়া উচিত ছিল। এরপর নীতিটি আসে দুটি ভারসাম্যপূর্ণ বাক্যে: হতে পারে তোমরা এমন কিছু অপছন্দ করো যা তোমাদের জন্য কল্যাণকর, আর হতে পারে তোমরা এমন কিছু ভালোবাসো যা তোমাদের জন্য ক্ষতিকর। 'আসা' শব্দটি বলে — এমন হতেই পারে; এটি আমাদের সীমিত দৃষ্টিকে সম্বোধন করে, কোনো সর্বজনীন নিয়ম ঘোষণা করে না। আয়াত এ দাবি করে না যে অপছন্দের প্রতিটি জিনিসের ভেতরেই গোপন কল্যাণ লুকিয়ে আছে।",
          },
        ],
      },
      {
        h: { en: "Where It Was Revealed", bn: "কোন প্রেক্ষাপটে নাযিল" },
        p: [
          {
            en: "The verse belongs to the Madinan passages of Surah al-Baqarah dealing with the community's new and unwelcome reality of armed conflict. It sits shortly after 2:214, which asks whether people supposed they would enter the Garden without the trials that came upon those before them, and just before 2:217, which answers a question about fighting in the sacred month. The setting is a specific and serious obligation, not an abstract meditation on fate.",
            bn: "আয়াতটি সূরা আল-বাকারার সেই মাদানী অংশের অন্তর্ভুক্ত, যেখানে সদ্যগঠিত সমাজের সামনে সশস্ত্র সংঘাতের নতুন ও অনাকাঙ্ক্ষিত বাস্তবতা নিয়ে কথা বলা হয়েছে। এটি 2:214-এর কিছু পরে বসে, যেখানে প্রশ্ন করা হয়েছে — মানুষ কি ধরে নিয়েছে যে পূর্ববর্তীদের ওপর আসা পরীক্ষাগুলো ছাড়াই তারা জান্নাতে প্রবেশ করবে? আর ঠিক আগে বসে 2:217, যা পবিত্র মাসে যুদ্ধ সম্পর্কে একটি প্রশ্নের জবাব দেয়। প্রেক্ষাপটটি একটি সুনির্দিষ্ট ও গুরুতর দায়িত্ব, ভাগ্য নিয়ে বিমূর্ত ভাবনা নয়।",
          },
          {
            en: "Keeping that origin in view matters, because the closing principle is stated in fully general terms and has therefore travelled far beyond its original subject. That travel is legitimate: the Quran often states a universal rule at the end of a particular ruling. But a reader who forgets the setting can end up using the verse to explain away every disappointment, which is a heavier claim than the words make.",
            bn: "এই উৎসটি মনে রাখা জরুরি, কারণ আয়াতের শেষ নীতিটি সম্পূর্ণ সাধারণ ভাষায় বলা হয়েছে এবং সে কারণেই তা তার মূল বিষয়ের অনেক বাইরে ছড়িয়ে পড়েছে। এই বিস্তার বৈধ: কুরআন প্রায়ই কোনো নির্দিষ্ট বিধানের শেষে একটি সর্বজনীন নীতি ঘোষণা করে। কিন্তু প্রেক্ষাপট ভুলে যাওয়া পাঠক এই আয়াত দিয়ে প্রতিটি হতাশাকে ব্যাখ্যা করে উড়িয়ে দিতে পারেন, যা আয়াতের শব্দগুলোর চেয়ে অনেক ভারী দাবি।",
          },
        ],
      },
      {
        h: { en: "The Limits of Our Sight", bn: "আমাদের দৃষ্টির সীমা" },
        p: [
          {
            en: "The verse ends with wallahu ya'lamu wa antum la ta'lamun: and Allah knows while you do not know. The commentators generally read the whole verse as a correction of a specific error, which is judging outcomes by present feeling. Human preference works on visible, immediate information. Divine knowledge takes in what the same choice produces years later and in the hereafter. The two will not always agree, and when they do not, the verse says which is reliable.",
            bn: "আয়াত শেষ হয় 'ওয়াল্লাহু ইয়া'লামু ওয়া আনতুম লা তা'লামূন' দিয়ে — আল্লাহ জানেন, আর তোমরা জানো না। মুফাসসিরগণ সাধারণত পুরো আয়াতটিকে একটি নির্দিষ্ট ভুলের সংশোধন হিসেবে পড়েন: বর্তমান অনুভূতি দিয়ে পরিণতি বিচার করা। মানুষের পছন্দ কাজ করে দৃশ্যমান, তাৎক্ষণিক তথ্যের ওপর। আর আল্লাহর জ্ঞান ধরে রাখে সেই একই সিদ্ধান্ত বহু বছর পরে এবং আখিরাতে কী ফল দেবে তা-ও। এই দুটি সবসময় মিলবে না; আর যখন মেলে না, আয়াত বলে দেয় কোনটি নির্ভরযোগ্য।",
          },
          {
            en: "It is important to notice what this does not establish. The verse does not teach that hardship is always disguised benefit, nor that a person should stop preferring health to illness or safety to danger. It teaches that our ranking of possibilities is provisional. The commentators tend to draw from it a posture rather than an explanation: do what is right, prefer what is lawful, and do not build certainty on a forecast you are not equipped to make.",
            bn: "এটি যা প্রতিষ্ঠা করে না, তা লক্ষ করা জরুরি। আয়াতটি শেখায় না যে কষ্ট সবসময় ছদ্মবেশে কল্যাণ, কিংবা মানুষের উচিত অসুস্থতার চেয়ে সুস্থতা বা বিপদের চেয়ে নিরাপত্তা পছন্দ করা ছেড়ে দেওয়া। এটি শেখায় যে সম্ভাবনাগুলোর ব্যাপারে আমাদের ক্রমতালিকা সাময়িক। মুফাসসিরগণ এ থেকে সাধারণত একটি ব্যাখ্যা নয়, বরং একটি অবস্থান গ্রহণ করেন: যা সঠিক তা করো, যা বৈধ তা পছন্দ করো, আর এমন পূর্বাভাসের ওপর নিশ্চয়তা গড়ে তুলো না যা তৈরি করার যোগ্যতা তোমার নেই।",
          },
        ],
      },
      {
        h: { en: "Lived by the Companions", bn: "সাহাবীদের জীবনে" },
        p: [
          {
            en: "The generation who first heard this verse did not pretend to relish what it commanded. Their example is one of acting rightly while still disliking the task, which is a far more usable model than manufactured enthusiasm. The verse's honesty about kurh is what makes that possible: obedience is measured by what a person does, and feelings are allowed to lag behind without invalidating the deed.",
            bn: "যাঁরা প্রথম এই আয়াত শুনেছিলেন, তাঁরা ভান করেননি যে আদেশটি তাঁদের ভালো লাগছে। তাঁদের দৃষ্টান্ত হলো — অপছন্দ থাকা সত্ত্বেও সঠিক কাজটি করা; আর এই আদর্শ কৃত্রিম উদ্দীপনার চেয়ে অনেক বেশি ব্যবহারযোগ্য। 'কুরহ' সম্পর্কে আয়াতের এই সততাই তা সম্ভব করে: আনুগত্য মাপা হয় মানুষ কী করল তা দিয়ে, আর অনুভূতি পিছিয়ে থাকলেও কাজটি বাতিল হয়ে যায় না।",
          },
          {
            en: "Muslim narrates that when Umm Salamah (RA) lost her husband Abu Salamah (RA) she said the supplication the Prophet ﷺ had taught, asking Allah to reward her in her affliction and to replace it with something better, and she admitted she wondered who could possibly be better than Abu Salamah. She was later married to the Prophet ﷺ. She did not know at the time; that is the whole point of the account, and she did not claim to.",
            bn: "মুসলিম বর্ণনা করেন, উম্মে সালামা (রাঃ) যখন তাঁর স্বামী আবু সালামা (রাঃ)-কে হারান, তখন তিনি নবী ﷺ-এর শেখানো সেই দোয়াটি পড়েন — যাতে আল্লাহর কাছে বিপদের প্রতিদান এবং তার বদলে উত্তম কিছু চাওয়া হয়। তিনি স্বীকার করেন, তখন তাঁর মনে হয়েছিল আবু সালামার চেয়ে উত্তম আবার কে হতে পারে। পরে তিনি নবী ﷺ-এর স্ত্রী হন। সেই মুহূর্তে তিনি জানতেন না — গোটা ঘটনার মূল কথাই এটি, আর তিনি জানার দাবিও করেননি।",
          },
        ],
      },
      {
        h: { en: "Reading It in Real Pain", bn: "প্রকৃত কষ্টের মধ্যে এই আয়াত" },
        p: [
          {
            en: "This verse is often quoted to people in the middle of loss, and it can be quoted badly. Told to a grieving parent, it may sound like a claim that their child's death was good for them, which the verse does not say and which no one is in a position to say. What the verse asserts is the limit of our knowledge, and a limit on our knowledge is not a licence to speak confidently about someone else's calamity.",
            bn: "এই আয়াতটি প্রায়ই এমন মানুষকে শোনানো হয় যাঁরা ক্ষতির মাঝখানে আছেন — আর তা খারাপভাবেও শোনানো যায়। শোকগ্রস্ত কোনো বাবা-মাকে বললে তা এমন শোনাতে পারে যেন দাবি করা হচ্ছে সন্তানের মৃত্যু তাঁদের জন্য মঙ্গলজনক ছিল; আয়াত সে কথা বলে না, আর তেমন কথা বলার অবস্থানে কেউ নেই। আয়াত যা ঘোষণা করে তা হলো আমাদের জ্ঞানের সীমা — আর জ্ঞানের সীমা কখনো অন্যের বিপদ নিয়ে আত্মবিশ্বাসের সঙ্গে কথা বলার ছাড়পত্র নয়।",
          },
          {
            en: "Read in the first person it works quite differently. It gives permission to stop demanding an explanation as the price of continuing, and it leaves the future genuinely open rather than sealed by present appearances. The Quran nowhere asks a person to call a wound sweet. It asks them to keep going without concluding that the story has ended badly, when they are not the one who can see the end.",
            bn: "কিন্তু প্রথম পুরুষে, নিজের জন্য পড়লে এটি সম্পূর্ণ অন্যভাবে কাজ করে। এটি অনুমতি দেয় — এগিয়ে যাওয়ার শর্ত হিসেবে ব্যাখ্যা দাবি করা বন্ধ করার; আর ভবিষ্যৎকে বর্তমানের চেহারা দিয়ে সিল করে না দিয়ে সত্যিকার অর্থেই খোলা রাখে। কুরআন কোথাও কাউকে বলে না যে ক্ষতটিকে মিষ্টি বলো। বলা হয় — চলতে থাকো, আর সিদ্ধান্তে পৌঁছে যেয়ো না যে গল্পটি খারাপভাবে শেষ হয়েছে, যেখানে শেষটা দেখার ক্ষমতা তোমার নেই।",
          },
        ],
      },
      {
        h: { en: "Using It Well", bn: "একে সঠিকভাবে ব্যবহার" },
        p: [
          {
            en: "There is a decision-making use for this verse that costs nothing and often helps. Before a choice, do the work: gather the facts, take advice, weigh the lawful options, pray istikharah. Then act on the best available reading and hand the outcome over. The verse is not an argument for passivity; it is an argument against treating your own preference as knowledge, which is a different and more specific thing.",
            bn: "এই আয়াতের একটি সিদ্ধান্তগ্রহণমূলক ব্যবহার আছে, যার কোনো খরচ নেই অথচ প্রায়ই তা কাজে লাগে। কোনো সিদ্ধান্তের আগে কাজটুকু করুন: তথ্য সংগ্রহ করুন, পরামর্শ নিন, বৈধ বিকল্পগুলো ওজন করুন, ইস্তিখারা করুন। তারপর হাতে থাকা সর্বোত্তম বিবেচনার ভিত্তিতে কাজ করুন এবং পরিণতিটি সঁপে দিন। আয়াতটি নিষ্ক্রিয়তার পক্ষে যুক্তি নয়; এটি যুক্তি এই কথার বিরুদ্ধে যে নিজের পছন্দকে জ্ঞান বলে ধরে নেওয়া — আর এটি ভিন্ন ও অনেক সুনির্দিষ্ট একটি বিষয়।",
          },
          {
            en: "Afterwards, it changes how disappointment is carried. A rejected application, a refused proposal, a job that fell through: each can be recorded as a closed door whose reason is not yet available, rather than as proof of being unwanted. Many people find that keeping a short record of past turns they resented, and revisiting it a few years later, teaches this verse more convincingly than any amount of argument.",
            bn: "আর পরে, এটি বদলে দেয় হতাশা বহনের ধরন। প্রত্যাখ্যাত আবেদন, ভেঙে যাওয়া বিয়ের প্রস্তাব, হাতছাড়া হওয়া চাকরি — প্রতিটিকে অবাঞ্ছিত হওয়ার প্রমাণ হিসেবে নয়, বরং এমন এক বন্ধ দরজা হিসেবে লিখে রাখা যায় যার কারণ এখনো জানা যায়নি। বহু মানুষ দেখেন, অতীতে যে মোড়গুলোতে তাঁরা বিরক্ত হয়েছিলেন তার একটি ছোট তালিকা রেখে কয়েক বছর পরে তা আবার পড়লে, এই আয়াতটি যেকোনো যুক্তির চেয়ে বেশি বিশ্বাসযোগ্যভাবে বোঝা যায়।",
          },
        ],
      },
    ],
  },
  '3:159': {
    sections: [
      {
        h: { en: "Softness Called a Mercy", bn: "কোমলতাকে বলা হলো রহমত" },
        p: [
          {
            en: "The verse begins by tracing a character trait back to its source: fa bima rahmatin minallahi linta lahum, it is by a mercy from Allah that you were lenient with them. The Prophet's ﷺ gentleness is not presented as a natural temperament he happened to have, but as something granted. The verb linta comes from lin, softness, the word used for pliable material that does not break when pressure is applied to it.",
            bn: "আয়াতটি শুরু হয় একটি চারিত্রিক গুণকে তার উৎস পর্যন্ত টেনে নিয়ে গিয়ে: ফাবিমা রাহমাতিম মিনাল্লাহি লিনতা লাহুম — আল্লাহর পক্ষ থেকে রহমতের কারণেই আপনি তাদের প্রতি কোমল হয়েছেন। নবী ﷺ-এর কোমলতাকে তাঁর সহজাত স্বভাব হিসেবে নয়, বরং প্রদত্ত এক দান হিসেবে উপস্থাপন করা হয়েছে। 'লিনতা' ক্রিয়াপদটি এসেছে 'লীন' থেকে, যার অর্থ কোমলতা — সেই শব্দ, যা এমন নমনীয় বস্তুর জন্য ব্যবহৃত হয় যা চাপ পড়লে ভেঙে যায় না।",
          },
          {
            en: "Then the counterfactual: had you been fazzan ghalizal-qalb, they would have dispersed from around you. The two words are not synonyms. Fazz describes coarseness in speech and manner, what a person hears; ghaliz al-qalb is hardness of heart, what a person is. The verse names both the surface and the source, and the consequence of either is the same: infaddu, they would scatter away from you.",
            bn: "এরপর আসে বিপরীত সম্ভাবনার কথা: আপনি যদি 'ফায্‌য' ও 'গালীযুল কাল্‌ব' হতেন, তবে তারা আপনার চারপাশ থেকে সরে যেত। শব্দ দুটি সমার্থক নয়। 'ফায্‌য' বোঝায় কথায় ও আচরণে রুক্ষতা — অর্থাৎ মানুষ যা শোনে; আর 'গালীযুল কাল্‌ব' মানে হৃদয়ের কঠোরতা — অর্থাৎ মানুষ যা। আয়াত উপরিভাগ ও উৎস দুটোরই নাম নেয়, আর দুটোরই পরিণতি এক: 'ইনফাদ্দূ' — তারা আপনার চারপাশ থেকে ছত্রভঙ্গ হয়ে যেত।",
          },
        ],
      },
      {
        h: { en: "Spoken After Uhud", bn: "উহুদের পরে বলা কথা" },
        p: [
          {
            en: "This is one of the clearest contexts in the Quran. The verse lies inside the long treatment of the battle of Uhud in Surah Al Imran, roughly 3:121-179, where the Muslims suffered heavy loss after a group of archers left the position they had been ordered to hold. The people the Prophet ﷺ is told to be gentle with, pardon, and consult are the same people whose error had just cost the community dearly.",
            bn: "কুরআনে প্রেক্ষাপট সবচেয়ে স্পষ্ট যে কয়েকটি জায়গায়, এটি তার একটি। আয়াতটি সূরা আলে ইমরানে উহুদ যুদ্ধ নিয়ে দীর্ঘ আলোচনার ভেতরে — মোটামুটি 3:121-179-এর মধ্যে — অবস্থিত, যেখানে একদল তীরন্দাজ নির্ধারিত অবস্থান ছেড়ে যাওয়ার পর মুসলিমরা ভারী ক্ষতির মুখে পড়েন। নবী ﷺ-কে যাদের প্রতি কোমল হতে, যাদের ক্ষমা করতে ও যাদের সঙ্গে পরামর্শ করতে বলা হচ্ছে, তারা ঠিক সেই মানুষগুলোই যাদের ভুলের মূল্য সমাজটি সবেমাত্র দিয়েছে।",
          },
          {
            en: "That timing gives the command on consultation its edge. Going out from Madinah to meet the enemy had itself been the outcome of consultation, and the Prophet ﷺ had personally inclined otherwise. A defeat followed. The verse that comes after this episode does not withdraw the practice of shura; it commands it. Consultation is being established as a permanent method, not as a technique that is kept only while it produces the results people wanted.",
            bn: "এই সময়টিই পরামর্শের আদেশটিকে ধার দেয়। শত্রুর মোকাবিলায় মদীনা থেকে বেরিয়ে যাওয়াটাই ছিল পরামর্শেরই ফল, আর নবী ﷺ ব্যক্তিগতভাবে ভিন্ন মতের দিকে ঝুঁকেছিলেন। এরপর এলো পরাজয়। এই ঘটনার পরে নাযিল হওয়া আয়াতটি শূরার চর্চা তুলে নেয় না; বরং তার আদেশ দেয়। পরামর্শকে প্রতিষ্ঠিত করা হচ্ছে একটি স্থায়ী পদ্ধতি হিসেবে — এমন কোনো কৌশল হিসেবে নয়, যা কেবল ততক্ষণই রাখা হয় যতক্ষণ তা কাঙ্ক্ষিত ফল দেয়।",
          },
        ],
      },
      {
        h: { en: "Three Commands and a Turn", bn: "তিনটি আদেশ ও একটি মোড়" },
        p: [
          {
            en: "The instructions arrive in a deliberate order. Fa'fu 'anhum, pardon them, deals with what they owe you personally. Wastaghfir lahum, and seek forgiveness for them, deals with what they owe Allah, and it asks the wronged party to pray for the wrongdoer. Wa shawirhum fil-amr, and consult them in the matter, restores them to full standing. Pardon that stops short of restored trust is not what this sequence describes.",
            bn: "নির্দেশগুলো আসে সুচিন্তিত ক্রমে। 'ফা'ফু আনহুম' — তাদের ক্ষমা করে দিন — এটি তোমার প্রতি তাদের যে দায়, তার নিষ্পত্তি করে। 'ওয়াস্তাগফির লাহুম' — আর তাদের জন্য ক্ষমা প্রার্থনা করুন — এটি আল্লাহর প্রতি তাদের যে দায়, তা নিয়ে; আর এখানে ক্ষতিগ্রস্ত পক্ষকেই বলা হচ্ছে অপরাধীর জন্য দোয়া করতে। 'ওয়া শাবিরহুম ফিল আমর' — আর কাজে তাদের সঙ্গে পরামর্শ করুন — এটি তাদের পূর্ণ মর্যাদায় ফিরিয়ে আনে। যে ক্ষমা আস্থা ফিরিয়ে দেওয়ার আগেই থেমে যায়, এই ধারাবাহিকতা তার কথা বলছে না।",
          },
          {
            en: "Then the turn: fa idha 'azamta fatawakkal 'alallah, and when you have resolved, rely upon Allah. The commentators note the shift from consulting the many — shawirhum, consult them — to a resolve that is yours alone, 'azamta in the singular. Everyone is consulted; one person decides. Reliance is placed after the decision, not instead of it, which is why the classical scholars treat tawakkul as the companion of effort rather than its replacement. Allah loves those who rely upon Him, the verse concludes.",
            bn: "এরপর মোড়: ফা-ইযা 'আযামতা ফাতাওয়াক্কাল 'আলাল্লাহ — আর যখন আপনি সংকল্প করে ফেলবেন, তখন আল্লাহর ওপর ভরসা করুন। মুফাসসিরগণ লক্ষ করেন, 'শাবিরহুম' — অনেকের সঙ্গে পরামর্শ — থেকে ভাষা সরে যায় 'আযামতা'-য়, যে সংকল্প একার। পরামর্শ নেওয়া হয় সবার, সিদ্ধান্ত নেন একজন। ভরসা রাখা হয় সিদ্ধান্তের পরে — সিদ্ধান্তের বদলে নয়; এ কারণেই ধ্রুপদী আলিমগণ তাওয়াক্কুলকে চেষ্টার বিকল্প নয়, বরং সঙ্গী হিসেবে দেখেন। আয়াত শেষ হয় এই কথায় যে আল্লাহ ভরসাকারীদের ভালোবাসেন।",
          },
        ],
      },
      {
        h: { en: "How He ﷺ Consulted", bn: "তিনি ﷺ কীভাবে পরামর্শ করতেন" },
        p: [
          {
            en: "At-Tirmidhi reports from Abu Hurayrah (RA) that he never saw anyone consult his companions more than the Prophet ﷺ did. The seerah records bear this out. Ibn Ishaq's account, preserved by Ibn Hisham, describes Salman al-Farisi (RA) proposing a trench around Madinah, a tactic unknown to the Arabs, and the proposal being adopted. The defence of the city that year was built on advice taken from a man who was not an Arab at all.",
            bn: "তিরমিযী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে তিনি নবী ﷺ-এর চেয়ে বেশি সাহাবীদের সঙ্গে পরামর্শ করতে আর কাউকে দেখেননি। সীরাতের বিবরণও তা-ই বলে। ইবনে হিশামের মাধ্যমে সংরক্ষিত ইবনে ইসহাকের বর্ণনায় আছে, সালমান ফারসী (রাঃ) মদীনার চারপাশে পরিখা খননের প্রস্তাব দেন — যে কৌশল আরবদের অজানা ছিল — এবং প্রস্তাবটি গৃহীত হয়। সে বছর শহরের প্রতিরক্ষা দাঁড়িয়েছিল এমন একজনের পরামর্শের ওপর, যিনি আরবই ছিলেন না।",
          },
          {
            en: "Al-Bukhari relates that at Hudaybiyah, when the companions were slow to act after a treaty they found bitter, Umm Salamah (RA) advised the Prophet ﷺ to go out and perform the rites himself without addressing anyone, and that when he did so the people followed. Consultation in his practice was not limited to a council of the senior, and it was not a formality performed before a decision he had already fixed.",
            bn: "বুখারী বর্ণনা করেন, হুদায়বিয়ায় যখন সাহাবীরা তিক্ত মনে হওয়া এক সন্ধির পর কাজে এগোতে দেরি করছিলেন, তখন উম্মে সালামা (রাঃ) নবী ﷺ-কে পরামর্শ দেন যে তিনি যেন কাউকে কিছু না বলে নিজেই বেরিয়ে গিয়ে কাজগুলো সম্পন্ন করেন; আর তিনি তা করলে মানুষ তাঁকে অনুসরণ করে। তাঁর আমলে পরামর্শ কেবল প্রবীণদের পরিষদে সীমিত ছিল না, আর তা আগেই স্থির করা সিদ্ধান্তের আগে সেরে নেওয়া কোনো আনুষ্ঠানিকতাও ছিল না।",
          },
        ],
      },
      {
        h: { en: "What Scholars Take From It", bn: "আলিমগণ যা গ্রহণ করেন" },
        p: [
          {
            en: "The majority hold that al-amr, the matter, refers to affairs on which no revelation has settled the question, which is where judgement is genuinely needed. Some early authorities read the command as binding on the Prophet ﷺ himself, so that consultation was a duty rather than a courtesy even for the one receiving revelation. That reading is what later scholars leaned on when arguing that leadership without consultation departs from the prophetic pattern.",
            bn: "অধিকাংশ আলিমের মত হলো, 'আল-আমর' বলতে সেসব বিষয় বোঝানো হয়েছে যেগুলোর মীমাংসা ওহী করে দেয়নি — অর্থাৎ যেখানে প্রকৃতপক্ষে বিচারবুদ্ধির প্রয়োজন। প্রাচীন কিছু কর্তৃপক্ষ আদেশটিকে স্বয়ং নবী ﷺ-এর ওপর অবশ্যপালনীয় হিসেবে পড়েছেন, ফলে ওহীপ্রাপ্ত ব্যক্তির জন্যও পরামর্শ ছিল সৌজন্য নয়, কর্তব্য। পরবর্তী আলিমগণ এই পাঠের ওপরই ভর করেছেন যখন তাঁরা বলেছেন যে পরামর্শহীন নেতৃত্ব নববী রীতি থেকে সরে যায়।",
          },
          {
            en: "They also read the opening clause as an argument about method in calling people to Islam. If harshness would have emptied the space around the Prophet ﷺ himself, whose truthfulness was being confirmed by revelation, then no caller since has a stronger case for severity. Ibn Kathir and others relate the verse in connection with the wider Quranic instruction to invite with wisdom and good exhortation, as in 16:125.",
            bn: "তাঁরা আয়াতের প্রথম অংশটিকেও ইসলামের দাওয়াতের পদ্ধতি নিয়ে একটি যুক্তি হিসেবে পড়েন। কঠোরতা যদি স্বয়ং নবী ﷺ-এর চারপাশটাই খালি করে দিত — যাঁর সত্যবাদিতা ওহী দ্বারা নিশ্চিত হচ্ছিল — তবে তাঁর পরে কোনো দাঈর পক্ষেই রূঢ়তার পক্ষে শক্তিশালী যুক্তি থাকে না। ইবনে কাসীরসহ অন্যরা আয়াতটিকে কুরআনের বৃহত্তর নির্দেশনার সঙ্গে যুক্ত করেন — যেমন 16:125-এ হিকমত ও উত্তম উপদেশ দিয়ে আহ্বান করার কথা বলা হয়েছে।",
          },
        ],
      },
      {
        h: { en: "In Everyday Authority", bn: "দৈনন্দিন কর্তৃত্বে" },
        p: [
          {
            en: "Most people exercise authority somewhere: over a team, a classroom, a household, a volunteer group. The verse offers a usable sequence for the moment after something has gone wrong. Deal with the personal grievance first, so that the correction is not carrying resentment. Then bring the person back into the conversation rather than quietly writing them off. Then decide, and stop relitigating the decision in front of everyone.",
            bn: "প্রায় সবাই কোথাও না কোথাও কর্তৃত্ব চর্চা করে: কোনো দল, শ্রেণিকক্ষ, পরিবার কিংবা স্বেচ্ছাসেবী গোষ্ঠীর ওপর। কিছু একটা ভুল হয়ে যাওয়ার পরের মুহূর্তটির জন্য আয়াতটি একটি ব্যবহারযোগ্য ক্রম দেয়। আগে ব্যক্তিগত অভিযোগটি মিটিয়ে ফেলুন, যাতে সংশোধনের সঙ্গে ক্ষোভ মিশে না থাকে। তারপর মানুষটিকে নিঃশব্দে বাতিল করে না দিয়ে আলোচনায় ফিরিয়ে আনুন। এরপর সিদ্ধান্ত নিন, আর সবার সামনে বারবার সেই সিদ্ধান্তের বিচার খুলে বসবেন না।",
          },
          {
            en: "The verse also sets a diagnostic that is uncomfortable to apply honestly. If people around you go quiet, stop volunteering information, or leave, the verse suggests looking first at tone rather than at their commitment. And it locates gentleness in the right place: not as a personality type some are lucky to have, but as a mercy that can be asked for, practised, and lost through neglect.",
            bn: "আয়াতটি এমন একটি পরীক্ষাও দাঁড় করায়, যা সৎভাবে প্রয়োগ করা অস্বস্তিকর। আপনার চারপাশের মানুষ যদি চুপ হয়ে যায়, তথ্য দেওয়া বন্ধ করে দেয়, কিংবা সরে যায় — আয়াতটি ইঙ্গিত দেয়, তাদের নিষ্ঠার দিকে তাকানোর আগে নিজের কথার সুরের দিকে তাকাতে। আর এটি কোমলতাকে সঠিক জায়গায় বসায়: এটি কারও ভাগ্যক্রমে পাওয়া স্বভাব নয়, বরং এমন এক রহমত যা চাওয়া যায়, চর্চা করা যায়, এবং অবহেলায় হারিয়েও ফেলা যায়।",
          },
        ],
      },
    ],
  },
  '13:28': {
    sections: [
      {
        h: { en: "A Word for Settling", bn: "স্থির হওয়ার একটি শব্দ" },
        p: [
          {
            en: "The key term is itmi'nan, from a root used in classical Arabic for ground that is low and level, the kind of place where a traveller can finally put things down. The verse says hearts tatma'inn, come to rest, bi dhikrillah, through the remembrance of Allah. The image is not excitement or elation. It is the specific relief of something restless finally sitting still.",
            bn: "মূল শব্দটি 'ইতমিনান', যার ধাতুটি ধ্রুপদী আরবিতে ব্যবহৃত হয় নিচু ও সমতল ভূমির জন্য — এমন জায়গা যেখানে পথিক অবশেষে বোঝা নামিয়ে রাখতে পারে। আয়াত বলে, হৃদয় 'তাতমাইন্ন' — স্থির হয়, প্রশান্ত হয় — 'বিযিকরিল্লাহ', আল্লাহর স্মরণে। এই চিত্রকল্প উত্তেজনা বা উচ্ছ্বাসের নয়। এটি সেই নির্দিষ্ট স্বস্তি, যা অস্থির কোনো কিছু অবশেষে থিতু হলে আসে।",
          },
          {
            en: "The sentence is then said twice, and the second time it is reversed. First a description of a group: those who believe and whose hearts find rest in the remembrance of Allah. Then a general law introduced by ala, an alerting particle that Arabic uses to make a listener look up: unquestionably, it is in the remembrance of Allah that hearts find rest. The particular has become a rule about hearts as such.",
            bn: "এরপর কথাটি দুইবার বলা হয়, আর দ্বিতীয়বার ক্রম উল্টে যায়। প্রথমে একটি দলের বর্ণনা: যারা ঈমান এনেছে এবং যাদের হৃদয় আল্লাহর স্মরণে প্রশান্তি পায়। তারপর একটি সাধারণ বিধান, যা শুরু হয় 'আলা' দিয়ে — সতর্ককারী একটি অব্যয়, যা আরবিতে শ্রোতাকে মুখ তুলে তাকাতে বাধ্য করে: জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়। বিশেষ বর্ণনাটি হয়ে গেল হৃদয় সম্পর্কে এক সাধারণ নিয়ম।",
          },
        ],
      },
      {
        h: { en: "An Answer to a Demand", bn: "একটি দাবির জবাব" },
        p: [
          {
            en: "Surah ar-Ra'd is Makkan, and the verses around this one are dominated by the deniers' demand for a spectacular sign. Verse 13:27 quotes them asking why a sign has not been sent down to him from his Lord, and the reply given is that Allah lets go astray whom He wills and guides to Himself whoever turns to Him. This verse then completes the thought by describing what that turning feels like from inside.",
            bn: "সূরা আর-রা'দ মক্কী, আর এই আয়াতের আশেপাশের আয়াতগুলোতে প্রাধান্য পেয়েছে অস্বীকারকারীদের চমকপ্রদ নিদর্শনের দাবি। 13:27 আয়াতে তাদের প্রশ্ন উদ্ধৃত হয়েছে — তার রবের কাছ থেকে তার ওপর কোনো নিদর্শন নাযিল হয় না কেন? জবাবে বলা হয়, আল্লাহ যাকে চান পথভ্রষ্ট করেন, আর যে তাঁর দিকে ফিরে আসে তাকে নিজের দিকে পথ দেখান। এরপর এই আয়াত সেই ফিরে আসাটি ভেতর থেকে কেমন অনুভূত হয়, তা বর্ণনা করে ভাবনাটি পূর্ণ করে।",
          },
          {
            en: "The placement carries an argument. People asking for a miracle were being told that certainty does not actually arrive through spectacle. Hearts settle through remembrance, which is available to anyone at any hour and requires no display. The verse immediately following, 13:29, adds the outcome: for them is tuba, a word the commentators explain as blessedness and goodness of life, and a good place of return.",
            bn: "এই অবস্থানের ভেতরেই একটি যুক্তি আছে। যারা মুজিযা দাবি করছিল, তাদের বলা হচ্ছে যে নিশ্চয়তা আসলে দর্শনীয় চমক দিয়ে আসে না। হৃদয় প্রশান্ত হয় স্মরণে — যা যেকোনো মানুষের জন্য যেকোনো সময়ে সহজলভ্য এবং যার জন্য কোনো প্রদর্শনীর প্রয়োজন নেই। ঠিক পরের আয়াত 13:29 পরিণতিটুকু যোগ করে: তাদের জন্য রয়েছে 'তূবা' — মুফাসসিরগণ যে শব্দটিকে ব্যাখ্যা করেন কল্যাণ ও জীবনের সৌন্দর্য অর্থে — এবং উত্তম প্রত্যাবর্তনস্থল।",
          },
        ],
      },
      {
        h: { en: "Two Senses of Dhikr", bn: "যিকরের দুটি অর্থ" },
        p: [
          {
            en: "The commentators offer two readings of dhikrillah here, and most combine them rather than choosing. The first is the servant's remembrance of Allah: the phrases of tasbih and tahlil, the tongue and heart returning to His name. The second is the Quran itself, which Allah repeatedly calls a dhikr, as in 15:9 where He names it and undertakes its preservation. On that reading, hearts settle when the revealed word is present with them.",
            bn: "এখানে 'যিকরুল্লাহ'-র দুটি পাঠ মুফাসসিরগণ উপস্থাপন করেন, আর বেশিরভাগই একটি বেছে না নিয়ে দুটিকেই একসঙ্গে রাখেন। প্রথমটি হলো বান্দার পক্ষ থেকে আল্লাহর স্মরণ: তাসবীহ ও তাহলীলের বাক্যগুলো, জিহ্বা ও হৃদয়ের বারবার তাঁর নামে ফিরে আসা। দ্বিতীয়টি হলো স্বয়ং কুরআন, যাকে আল্লাহ বারবার 'যিকর' বলেছেন — যেমন 15:9-এ, যেখানে তিনি এর নাম দেন এবং এর সংরক্ষণের দায়িত্ব নেন। এই পাঠ অনুযায়ী, নাযিলকৃত বাণী সঙ্গে থাকলেই হৃদয় প্রশান্ত হয়।",
          },
          {
            en: "Both senses point at the same practice, which is why the combination is natural. Reciting the Quran is dhikr; the adhkar are drawn largely from the Quran and the sunnah; and the effect described is not a technique but a relationship being maintained. The commentators generally resist making this verse into a promise about mood, and read it instead as a statement about where the heart's stability is actually located.",
            bn: "দুটি অর্থই একই আমলের দিকে ইঙ্গিত করে, আর সে কারণেই সংযোগটি স্বাভাবিক। কুরআন তিলাওয়াত নিজেই যিকর; আর যিকরের বাক্যগুলোর বড় অংশ কুরআন ও সুন্নাহ থেকেই নেওয়া; আর যে ফলাফলের কথা বলা হয়েছে তা কোনো কৌশল নয়, বরং একটি সম্পর্ককে টিকিয়ে রাখা। মুফাসসিরগণ সাধারণত এই আয়াতকে মেজাজ সম্পর্কে প্রতিশ্রুতি বানানো থেকে বিরত থাকেন, বরং একে পড়েন হৃদয়ের স্থিরতা আসলে কোথায় অবস্থিত — সেই বিষয়ে একটি বিবৃতি হিসেবে।",
          },
        ],
      },
      {
        h: { en: "The Prophet ﷺ and Unsettled Hours", bn: "নবী ﷺ ও অস্থির প্রহর" },
        p: [
          {
            en: "Muslim records from Aishah (RA) that the Prophet ﷺ used to remember Allah at all his times, which describes a life in which dhikr was not reserved for crises. Al-Bukhari and Muslim also preserve the words he said at moments of distress, beginning with the declaration that there is no god but Allah, the Immense, the Forbearing, and continuing with His lordship over the Throne and the heavens and the earth.",
            bn: "মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ সর্বাবস্থায় আল্লাহকে স্মরণ করতেন — অর্থাৎ তাঁর জীবনে যিকর কেবল সংকটের জন্য তুলে রাখা ছিল না। বুখারী ও মুসলিমে সংকলিত আছে দুশ্চিন্তার মুহূর্তে তাঁর বলা বাক্যগুলোও, যা শুরু হয় এই ঘোষণা দিয়ে যে আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি মহান ও পরম সহনশীল — এবং এরপর আসে আরশ, আসমান ও যমীনের ওপর তাঁর প্রভুত্বের কথা।",
          },
          {
            en: "The pattern in those narrations is worth noticing. The remembrance taught for hard moments is largely made of statements about Allah rather than statements about the problem. The heart is being given something solid to stand on, not being talked out of its fear. That is closer to how this verse works than any idea of dhikr as a calming exercise performed for its own sake.",
            bn: "এই বর্ণনাগুলোর ধরনটি লক্ষ করার মতো। কঠিন মুহূর্তের জন্য শেখানো যিকরের বড় অংশই সমস্যা সম্পর্কে নয়, বরং আল্লাহ সম্পর্কে বিবৃতি দিয়ে গড়া। হৃদয়কে দাঁড়ানোর মতো শক্ত জমি দেওয়া হচ্ছে; তার ভয়কে যুক্তি দিয়ে ভুলিয়ে দেওয়া হচ্ছে না। যিকরকে নিছক মন শান্ত করার অনুশীলন ভাবার চেয়ে এই বোঝাপড়াটিই এই আয়াতের কাজের ধরনের অনেক কাছাকাছি।",
          },
        ],
      },
      {
        h: { en: "What Peace Is Not", bn: "প্রশান্তি যা নয়" },
        p: [
          {
            en: "Honesty about this verse requires saying what it does not claim. It does not say that a believer never feels anxious, that grief will not return, or that remembrance replaces medical care, counselling or sleep. The Prophet ﷺ himself grieved, and the Quran records the fear of prophets in moments of danger, as in 20:67 where Musa (AS) felt fear within himself. Distress is not evidence of a defective heart.",
            bn: "এই আয়াত নিয়ে সৎ থাকতে হলে বলতে হয়, এটি কী দাবি করে না। এটি বলে না যে মুমিন কখনো উদ্বিগ্ন হয় না, শোক আর ফিরে আসে না, কিংবা যিকর চিকিৎসা, পরামর্শ বা ঘুমের বিকল্প। স্বয়ং নবী ﷺ শোক করেছেন, আর কুরআন বিপদের মুহূর্তে নবীদের ভয়ের কথাও লিপিবদ্ধ করেছে — যেমন 20:67-এ মূসা (আঃ) নিজের ভেতরে ভয় অনুভব করেছিলেন। মানসিক কষ্ট কোনো ত্রুটিপূর্ণ হৃদয়ের প্রমাণ নয়।",
          },
          {
            en: "What the verse promises is a floor rather than a ceiling: a place the heart can return to that does not move when circumstances do. Many people describe it as the difference between a problem that fills the whole horizon and the same problem seen as one item inside a much larger reality. Nothing external has changed. What has changed is that the heart is no longer suspended in mid-air.",
            bn: "আয়াতটি যা প্রতিশ্রুতি দেয় তা ছাদ নয়, মেঝে: এমন একটি জায়গা যেখানে হৃদয় ফিরে আসতে পারে এবং যা পরিস্থিতি বদলালেও সরে যায় না। বহু মানুষ একে বর্ণনা করেন এভাবে — এক সমস্যা যখন গোটা দিগন্ত ঢেকে ফেলে, আর সেই একই সমস্যা যখন অনেক বড় এক বাস্তবতার ভেতরে একটি বিষয় মাত্র হিসেবে দেখা যায়, এই দুইয়ের পার্থক্য। বাইরের কিছুই বদলায়নি। যা বদলেছে তা হলো, হৃদয় আর শূন্যে ঝুলে নেই।",
          },
        ],
      },
      {
        h: { en: "Small and Repeated", bn: "ছোট ও পুনরাবৃত্ত" },
        p: [
          {
            en: "The practice this verse recommends is unimpressive by design. A few phrases repeated with attention will do more than an ambitious programme abandoned in a week. Subhanallah, alhamdulillah, la ilaha illallah, Allahu akbar, and astaghfirullah cover most of what a heart needs to say. Attaching them to fixed points, after prayers and before sleep, is what turns them from an idea into a habit.",
            bn: "এই আয়াত যে আমলের পরামর্শ দেয়, তা ইচ্ছাকৃতভাবেই দেখনদারিহীন। মনোযোগ দিয়ে পুনরাবৃত্ত কয়েকটি বাক্য এক সপ্তাহে ছেড়ে দেওয়া উচ্চাভিলাষী কর্মসূচির চেয়ে বেশি কাজ করবে। সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার আর আসতাগফিরুল্লাহ — হৃদয়ের বলার মতো প্রায় সবকিছুই এতে চলে আসে। নির্দিষ্ট সময়ের সঙ্গে — নামাযের পরে ও ঘুমানোর আগে — এগুলো বেঁধে দিলেই তা ধারণা থেকে অভ্যাসে পরিণত হয়।",
          },
          {
            en: "It also helps to notice where the heart currently goes for settling. For most people the honest answer is a screen, and the relief it gives lasts exactly as long as the scrolling does. The verse is not asking anyone to enjoy silence immediately. It is claiming that one of these two places actually holds weight, and it invites a person to test the claim over a few ordinary weeks.",
            bn: "হৃদয় এখন স্থির হওয়ার জন্য কোথায় যায়, তা লক্ষ করাও কাজে দেয়। বেশিরভাগ মানুষের সৎ উত্তর হলো একটি পর্দা, আর তা যে স্বস্তি দেয় তা ঠিক ততক্ষণই টেকে যতক্ষণ স্ক্রল চলে। আয়াতটি কাউকে বলছে না যে সঙ্গে সঙ্গে নীরবতা উপভোগ করতে হবে। এটি দাবি করছে যে এই দুই জায়গার একটিই কেবল ভার বইতে পারে — আর দাবিটি কয়েকটি সাধারণ সপ্তাহ ধরে যাচাই করে দেখার আমন্ত্রণ জানাচ্ছে।",
          },
        ],
      },
    ],
  },
  '24:35': {
    sections: [
      {
        h: { en: "Light and Its Similitude", bn: "নূর ও তার উপমা" },
        p: [
          {
            en: "The verse opens with a statement, Allahu nurus-samawati wal-ard, Allah is the Light of the heavens and the earth. The commentators most commonly explain this as meaning that He is the one who illuminates them and guides whoever is in them, since He is not a created light among lights. Then the second sentence changes register entirely: mathalu nurihi, the likeness of His light. From here on the verse is openly a similitude.",
            bn: "আয়াতটি শুরু হয় একটি ঘোষণা দিয়ে: আল্লাহু নূরুস সামাওয়াতি ওয়াল আরদ — আল্লাহ আসমান ও যমীনের নূর। মুফাসসিরগণ সবচেয়ে বেশি যে ব্যাখ্যা দেন তা হলো, তিনিই এগুলোকে আলোকিত করেন এবং এর ভেতরে যারা আছে তাদের পথ দেখান; কারণ তিনি আলোকসমূহের ভেতরে সৃষ্ট কোনো আলো নন। এরপর দ্বিতীয় বাক্যটি সুরটাই বদলে দেয়: মাসালু নূরিহি — তাঁর নূরের উপমা। এখান থেকেই আয়াতটি প্রকাশ্যে একটি উপমা।",
          },
          {
            en: "That distinction is doing real work. What is being pictured is the likeness of His light, not His essence, and the verse itself confirms the genre at the end: and Allah presents examples for the people. Sound exegesis stays inside that frame. Systems built on this verse that treat its objects as coded stages of an inner journey go well past what the Arabic supports, and the mainstream commentators did not read it that way.",
            bn: "এই পার্থক্যটি সত্যিকারের কাজ করছে। যা চিত্রিত হচ্ছে তা তাঁর নূরের উপমা — তাঁর সত্তা নয়; আর আয়াত নিজেই শেষে এই ধরনটি নিশ্চিত করে: আর আল্লাহ মানুষের জন্য উপমা পেশ করেন। সঠিক তাফসীর এই কাঠামোর ভেতরেই থাকে। এই আয়াতের বস্তুগুলোকে কোনো অন্তর্যাত্রার সাংকেতিক স্তর ধরে যেসব ব্যবস্থা গড়ে তোলা হয়েছে, তা আরবি ভাষা যা সমর্থন করে তার অনেক বাইরে চলে যায়; মূলধারার মুফাসসিরগণ একে সেভাবে পড়েননি।",
          },
        ],
      },
      {
        h: { en: "Niche, Lamp, Glass, Oil", bn: "তাক, প্রদীপ, কাঁচ, তেল" },
        p: [
          {
            en: "Each element is chosen for a reason. The mishkah is a recess in a wall with no opening through it, so light gathers instead of dispersing. Inside it is a misbah, a lamp, and the lamp sits in a zujajah, glass, described as though it were a brilliant star, since clear glass both protects the flame and multiplies it. Nothing here is decorative; every part improves the light.",
            bn: "প্রতিটি উপাদান একটি কারণেই বেছে নেওয়া। 'মিশকাত' হলো দেয়ালের এমন এক কুলুঙ্গি যার ভেতর দিয়ে কোনো ফাঁক নেই, ফলে আলো ছড়িয়ে না গিয়ে জমা হয়। তার ভেতরে থাকে 'মিসবাহ' — প্রদীপ; আর প্রদীপটি থাকে 'যুজাজাহ' — কাঁচের ভেতরে, যাকে বর্ণনা করা হয়েছে উজ্জ্বল তারার মতো, কারণ স্বচ্ছ কাঁচ একদিকে শিখাকে রক্ষা করে, অন্যদিকে তা বাড়িয়েও দেয়। এখানে কিছুই কেবল অলংকরণ নয়; প্রতিটি অংশই আলোকে উন্নত করে।",
          },
          {
            en: "The lamp is fed from a blessed olive tree, neither of the east nor of the west. The commentators explain this as a tree standing where the sun reaches it through the whole day, so its fruit ripens fully and its oil is of the finest grade. Then the striking clause: its oil almost gives light though no fire has touched it. Purity so complete that it is nearly luminous before it is even lit.",
            bn: "প্রদীপটিতে তেল আসে এক বরকতময় জয়তুন গাছ থেকে, যা পূর্বেরও নয় পশ্চিমেরও নয়। মুফাসসিরগণ ব্যাখ্যা করেন, এটি এমন এক গাছ যার ওপর সারাদিনই সূর্যের আলো পড়ে, ফলে তার ফল পূর্ণরূপে পাকে এবং তেল হয় সর্বোৎকৃষ্ট মানের। এরপর আসে চমকপ্রদ বাক্যটি: আগুন স্পর্শ না করলেও তার তেল যেন আলো দিতে চায়। এমন সম্পূর্ণ বিশুদ্ধতা, যা জ্বালানোর আগেই প্রায় আলোকিত।",
          },
        ],
      },
      {
        h: { en: "Light Upon Light", bn: "নূরের উপর নূর" },
        p: [
          {
            en: "Nurun 'ala nur, light upon light, gathers the whole image. The commentators most often read the similitude as describing the light of faith and guidance placed in the heart of the believer, and this reading is related from a number of the early authorities. Others apply it to the Quran, or to the Prophet ﷺ as the one through whom guidance reached people. These readings are complementary rather than competing.",
            bn: "'নূরুন আলা নূর' — নূরের ওপর নূর — গোটা চিত্রটিকে একত্র করে। মুফাসসিরগণ সবচেয়ে বেশি এই উপমাটিকে পড়েন মুমিনের হৃদয়ে স্থাপিত ঈমান ও হিদায়াতের আলোর বর্ণনা হিসেবে, আর এই পাঠটি প্রাচীন যুগের একাধিক কর্তৃপক্ষ থেকে বর্ণিত। কেউ কেউ একে প্রয়োগ করেন কুরআনের ওপর, কেউবা নবী ﷺ-এর ওপর, যাঁর মাধ্যমে হিদায়াত মানুষের কাছে পৌঁছেছে। এই পাঠগুলো পরস্পরবিরোধী নয়, বরং পরস্পরের পরিপূরক।",
          },
          {
            en: "The verse then removes any suggestion that the light can be seized: Allah guides to His light whom He wills. The commentators pair this with the many verses making guidance follow a person's turning, such as 29:69, so that divine choice and human effort are not set against each other. The closing words, and Allah is Knowing of all things, keep the giving of light within His knowledge rather than within our claims about who deserves it.",
            bn: "এরপর আয়াতটি এমন যেকোনো ইঙ্গিত সরিয়ে দেয় যে এই আলো ছিনিয়ে নেওয়া যায়: আল্লাহ যাকে চান তাঁর নূরের দিকে পথ দেখান। মুফাসসিরগণ এর সঙ্গে মেলান সেসব আয়াত, যেখানে হিদায়াত মানুষের ফিরে আসার পরে আসে — যেমন 29:69 — যাতে ঐশী ইচ্ছা ও মানবিক প্রচেষ্টাকে পরস্পরের বিরুদ্ধে দাঁড় করানো না হয়। শেষ বাক্যটি — আর আল্লাহ সবকিছু সম্পর্কে জ্ঞানী — আলো দান করাকে তাঁর জ্ঞানের ভেতরেই রাখে, কে তার যোগ্য সে বিষয়ে আমাদের দাবির ভেতরে নয়।",
          },
        ],
      },
      {
        h: { en: "Where the Lamp Is Kept", bn: "প্রদীপ যেখানে রাখা" },
        p: [
          {
            en: "The verses on either side explain what this image is doing in Surah an-Nur, a surah otherwise occupied with slander, evidence, modesty and the manners of entering homes. Immediately after, 24:36-37 describes houses which Allah has permitted to be raised and His name remembered in them, where men glorify Him morning and evening whom neither trade nor sale distracts from the remembrance of Allah.",
            bn: "দুই পাশের আয়াতগুলোই ব্যাখ্যা করে সূরা আন-নূরে এই চিত্রকল্পটি কী করছে — এমন এক সূরা, যার বাকি অংশ অপবাদ, সাক্ষ্য, শালীনতা ও ঘরে প্রবেশের আদব নিয়ে ব্যস্ত। ঠিক পরেই 24:36-37 বর্ণনা করে সেসব ঘরের কথা, যেগুলোকে উঁচু করতে ও যেখানে তাঁর নাম স্মরণ করতে আল্লাহ অনুমতি দিয়েছেন; সেখানে সকাল-সন্ধ্যা তাঁর মহিমা ঘোষণা করে এমন সব মানুষ, যাদের ব্যবসা বা কেনাবেচা আল্লাহর স্মরণ থেকে গাফিল করে না।",
          },
          {
            en: "Then come two contrasting parables, in 24:39-40: the deeds of the disbelievers as a mirage in a plain that a thirsty man takes for water, and as darknesses layered over one another in a deep sea, so that a man can hardly see his own hand. Placed together, the three images set out the choice the surah has been building toward: gathered light, or layered dark.",
            bn: "এরপর আসে দুটি বিপরীত উপমা, 24:39-40-এ: অস্বীকারকারীদের আমল যেন মরুপ্রান্তরে মরীচিকা, যাকে তৃষ্ণার্ত মানুষ পানি মনে করে; আর যেন গভীর সমুদ্রে একের ওপর এক জমা অন্ধকার, যেখানে মানুষ নিজের হাতটুকুও দেখতে পায় না। একসঙ্গে রাখলে এই তিনটি চিত্র সেই নির্বাচনটিই সামনে আনে, যার দিকে সূরাটি এগোচ্ছিল: জমা হওয়া আলো, নাকি স্তরে স্তরে অন্ধকার।",
          },
        ],
      },
      {
        h: { en: "The Prayer for Light", bn: "নূরের দোয়া" },
        p: [
          {
            en: "The most direct link between this verse and practice is a supplication preserved in al-Bukhari and Muslim, said by the Prophet ﷺ as he went out to the mosque: O Allah, place light in my heart, and light in my hearing, and light in my sight, and light on my right and on my left, and before me and behind me, and make light for me. The narrations list the limbs one by one.",
            bn: "এই আয়াত ও আমলের মধ্যে সবচেয়ে সরাসরি সংযোগ হলো বুখারী ও মুসলিমে সংরক্ষিত একটি দোয়া, যা নবী ﷺ মসজিদের দিকে বের হওয়ার সময় পড়তেন: হে আল্লাহ, আমার হৃদয়ে নূর দিন, আমার শ্রবণে নূর দিন, আমার দৃষ্টিতে নূর দিন, আমার ডানে ও বামে নূর দিন, আমার সামনে ও পেছনে নূর দিন, আর আমার জন্য নূর করে দিন। বর্ণনাগুলোতে অঙ্গপ্রত্যঙ্গের নাম একে একে উল্লেখ করা হয়েছে।",
          },
          {
            en: "The supplication treats light as something asked for repeatedly rather than acquired once. It also spreads it across the senses and directions, which fits the verse's picture of light gathered and multiplied rather than a single flame. A believer who says this on the way to fajr is doing with words exactly what the similitude does with images.",
            bn: "এই দোয়া নূরকে একবার অর্জন করে ফেলার মতো কিছু নয়, বরং বারবার চাওয়ার মতো কিছু হিসেবেই দেখে। আর এটি নূরকে ছড়িয়ে দেয় ইন্দ্রিয় ও দিকগুলোর ওপর, যা আয়াতের সেই চিত্রের সঙ্গে মেলে যেখানে আলো একটি একক শিখা নয়, বরং জমা হওয়া ও বহুগুণিত। যে মুমিন ফজরের পথে এই দোয়া পড়েন, তিনি শব্দ দিয়ে ঠিক তা-ই করছেন যা উপমাটি চিত্র দিয়ে করে।",
          },
        ],
      },
      {
        h: { en: "Keeping the Glass Clear", bn: "কাঁচটি স্বচ্ছ রাখা" },
        p: [
          {
            en: "Read as guidance in the heart, the parable suggests a few plain questions. Is there a source, meaning regular contact with the Quran, or is the lamp running on memory? Is the glass clear, meaning is what I do in private consistent with what I show, since anything that clouds the glass dims the same flame. Is the light gathered anywhere, or scattered across a hundred half-commitments.",
            bn: "হৃদয়ের হিদায়াত হিসেবে পড়লে এই উপমা কয়েকটি সরল প্রশ্ন সামনে আনে। কোনো উৎস কি আছে — অর্থাৎ কুরআনের সঙ্গে নিয়মিত সংযোগ — নাকি প্রদীপটি কেবল স্মৃতির ওপর চলছে? কাঁচটি কি স্বচ্ছ — অর্থাৎ আমি একান্তে যা করি তা কি আমি যা দেখাই তার সঙ্গে মেলে? কারণ যা কিছু কাঁচকে ঘোলা করে, তা একই শিখাকে ম্লান করে দেয়। আর আলো কি কোথাও জমা হচ্ছে, নাকি শতেক আধা-প্রতিশ্রুতিতে ছড়িয়ে যাচ্ছে?",
          },
          {
            en: "The most useful feature of the image is that light is not manufactured by the glass. The glass only keeps it safe and lets it through. That takes the weight off performance and puts it on maintenance, which is the ordinary work of prayer on time, recitation that continues, company that helps and sins left behind. Ask for the light in the words the Prophet ﷺ used, and keep the glass clean enough to hold it.",
            bn: "এই চিত্রকল্পের সবচেয়ে কাজের দিকটি হলো, আলো কাঁচ তৈরি করে না। কাঁচ কেবল তাকে নিরাপদ রাখে এবং তাকে পার হতে দেয়। এতে ভারটি সরে যায় কৃতিত্ব থেকে রক্ষণাবেক্ষণের দিকে — অর্থাৎ সময়মতো নামায, চালিয়ে যাওয়া তিলাওয়াত, সহায়ক সঙ্গ আর পেছনে ফেলে আসা পাপ, এই সাধারণ কাজগুলোর দিকে। নবী ﷺ যে শব্দে চেয়েছেন সেই শব্দেই নূর চান, আর কাঁচটি এতটা পরিষ্কার রাখুন যেন তা সেই নূর ধরে রাখতে পারে।",
          },
        ],
      },
    ],
  },
  '25:63': {
    sections: [
      {
        h: { en: "Servants of the Most Merciful", bn: "রহমানের বান্দারা" },
        p: [
          {
            en: "The verse opens a portrait that runs to the end of the surah, and the title it gives is deliberate: 'ibad ar-Rahman, the servants of the Most Merciful. Of all the divine names available, ar-Rahman is chosen, so the people about to be described are identified by their relation to mercy. Everything listed after this belongs under that heading, which is why the first item is about how they treat other people.",
            bn: "এই আয়াত দিয়ে শুরু হওয়া বর্ণনা সূরার শেষ পর্যন্ত চলে, আর এতে দেওয়া উপাধিটি উদ্দেশ্যপ্রণোদিত: 'ইবাদুর রহমান — পরম করুণাময়ের বান্দারা। আল্লাহর যত নাম ছিল, তার মধ্য থেকে বেছে নেওয়া হয়েছে 'আর-রহমান'; ফলে যাদের বর্ণনা এখন শুরু হচ্ছে, তাদের পরিচয় নির্ধারিত হচ্ছে রহমতের সঙ্গে তাদের সম্পর্ক দিয়ে। এর পরে তালিকাভুক্ত সবকিছুই এই শিরোনামের অধীন — আর সে কারণেই প্রথম বিষয়টি হলো তারা অন্য মানুষের সঙ্গে কেমন আচরণ করে।",
          },
          {
            en: "The first mark is physical: alladhina yamshuna 'alal-ardi hawnan, who walk upon the earth in hawn. The word means gentleness and ease, an unhurried and undemanding way of moving. The commentators are clear that it does not mean an affected slowness or a deliberately humble shuffle; several of the early scholars criticised putting on a show of humility in one's gait. What is described is the absence of swagger, not the performance of piety.",
            bn: "প্রথম চিহ্নটি শারীরিক: আল্লাযীনা ইয়ামশূনা 'আলাল আরদি হাওনা — যারা পৃথিবীতে চলে 'হাওন'-এর সঙ্গে। শব্দটির অর্থ কোমলতা ও স্বাচ্ছন্দ্য — তাড়াহুড়াহীন, দাবিহীন এক চলার ধরন। মুফাসসিরগণ স্পষ্ট করে বলেন, এর অর্থ কৃত্রিম মন্থরতা বা ইচ্ছাকৃত বিনয়ী পদক্ষেপ নয়; পূর্ববর্তী কয়েকজন আলিম চলার ভঙ্গিতে বিনয়ের প্রদর্শনীকে সমালোচনা করেছেন। এখানে বর্ণিত হচ্ছে দম্ভের অনুপস্থিতি, ধার্মিকতার অভিনয় নয়।",
          },
        ],
      },
      {
        h: { en: "The Word Jahil", bn: "'জাহিল' শব্দটি" },
        p: [
          {
            en: "The second half addresses provocation: wa idha khatabahumul-jahiluna qalu salama. When the jahilun address them, they say salam. Jahl in Quranic usage is not primarily a lack of information. It is the recklessness, arrogance and hot temper that the pre-Islamic period was named for. The jahil here is not someone who does not know a fact; he is someone behaving badly on purpose.",
            bn: "দ্বিতীয় অংশটি উসকানির প্রসঙ্গে: ওয়া ইযা খাতাবাহুমুল জাহিলূনা কালূ সালামা। জাহিলরা যখন তাদের সম্বোধন করে, তারা বলে 'সালাম'। কুরআনি ব্যবহারে 'জাহল' মূলত তথ্যের অভাব বোঝায় না। এটি বোঝায় সেই বেপরোয়া মনোভাব, অহংকার ও উগ্র মেজাজ, যার নামেই জাহিলিয়াতের যুগের নামকরণ। এখানে 'জাহিল' সেই ব্যক্তি নয় যে কোনো তথ্য জানে না; বরং সে-ই, যে জেনেবুঝে খারাপ আচরণ করছে।",
          },
          {
            en: "The response, qalu salama, is read by the commentators in more than one way, and the readings agree in substance. Some take it as the greeting of peace; the majority explain it as words free of harm and sin, a reply that closes the exchange without returning the insult. It is not surrender and not agreement. It is a refusal to hand over control of one's own speech to whoever happens to be shouting.",
            bn: "'কালূ সালামা' — এই জবাবটিকে মুফাসসিরগণ একাধিকভাবে পড়েন, আর পাঠগুলো মূল অর্থে একমত। কেউ একে নেন শান্তির অভিবাদন হিসেবে; অধিকাংশ ব্যাখ্যা করেন ক্ষতি ও পাপমুক্ত কথা হিসেবে — এমন উত্তর, যা অপমান ফিরিয়ে না দিয়েই কথোপকথনটি শেষ করে দেয়। এটি আত্মসমর্পণও নয়, সম্মতিও নয়। এটি হলো নিজের কথার নিয়ন্ত্রণ যে-কেউ চিৎকার করছে তার হাতে তুলে দিতে অস্বীকার করা।",
          },
        ],
      },
      {
        h: { en: "Answering Years of Mockery", bn: "বছরের পর বছর বিদ্রূপের জবাব" },
        p: [
          {
            en: "Surah al-Furqan is Makkan, and much of it records the taunting the Prophet ﷺ endured. In 25:41-42 the deniers are quoted asking whether this is the one Allah sent as a messenger, and claiming he almost turned them away from their gods. That is the atmosphere in which this description of the servants of the Most Merciful arrives, near the end of the surah, as the answer to everything the mockers have been saying.",
            bn: "সূরা আল-ফুরকান মক্কী, আর এর বড় অংশজুড়ে লিপিবদ্ধ আছে নবী ﷺ যে বিদ্রূপ সহ্য করেছেন তার বিবরণ। 25:41-42-এ অস্বীকারকারীদের কথা উদ্ধৃত হয়েছে — এ-ই কি সে, যাকে আল্লাহ রাসূল করে পাঠিয়েছেন? আর তারা দাবি করে, সে প্রায় তাদের দেবতাদের থেকে সরিয়েই দিচ্ছিল। এই আবহেই সূরার শেষভাগে এসে পৌঁছায় রহমানের বান্দাদের এই বর্ণনা — বিদ্রূপকারীরা এতদিন যা বলে আসছিল, তার জবাব হিসেবে।",
          },
          {
            en: "The list that follows interleaves character and worship rather than separating them. After this verse come those who pass the night in prostration and standing, those who fear the Fire, those who spend without extravagance or miserliness, and those who keep clear of shirk, murder and unlawful intimacy. The passage closes at 25:74 with their supplication for righteous families, and then with the reward promised for their patience.",
            bn: "এর পরের তালিকা চরিত্র ও ইবাদতকে আলাদা না করে পরস্পরের সঙ্গে গেঁথে দেয়। এই আয়াতের পরে আসে তাদের কথা, যারা রাত কাটায় সিজদায় ও দাঁড়িয়ে; যারা জাহান্নামকে ভয় করে; যারা অপচয় বা কৃপণতা ছাড়াই ব্যয় করে; আর যারা শিরক, হত্যা ও অবৈধ সম্পর্ক থেকে দূরে থাকে। অংশটি 25:74-এ শেষ হয় সৎ পরিবারের জন্য তাদের দোয়া দিয়ে, আর তারপর আসে তাদের ধৈর্যের প্রতিশ্রুত প্রতিদান।",
          },
        ],
      },
      {
        h: { en: "Strength Under Control", bn: "নিয়ন্ত্রিত শক্তি" },
        p: [
          {
            en: "The Prophet ﷺ embodied this before it was described. Anas ibn Malik (RA) reported, as recorded in al-Bukhari and Muslim, that he served him for years and was never rebuked with even a word of complaint about what he did or failed to do. Aishah (RA) is reported in the same collections to have said that he never struck anything with his hand, nor a woman, nor a servant, except when fighting in the path of Allah.",
            bn: "নবী ﷺ এই গুণটি বর্ণিত হওয়ার আগেই তা জীবনে ধারণ করেছিলেন। আনাস ইবনে মালিক (রাঃ) থেকে বুখারী ও মুসলিমে বর্ণিত আছে যে তিনি বছরের পর বছর তাঁর খিদমত করেছেন, অথচ তিনি যা করেছেন বা করেননি তার জন্য কখনো একটি অনুযোগের কথাও শোনেননি। আয়িশা (রাঃ) থেকে একই সংকলনে বর্ণিত আছে, তিনি আল্লাহর পথে যুদ্ধ ছাড়া কখনো নিজ হাতে কোনো কিছুতে আঘাত করেননি — কোনো নারীকে নয়, কোনো খাদিমকেও নয়।",
          },
          {
            en: "The restraint this verse praises is defined in the sunnah as power, not passivity. Al-Bukhari and Muslim record the Prophet ﷺ saying that the strong man is not the one who overcomes others in wrestling, but the one who controls himself when angry. Read alongside 25:63, that hadith settles the question of whether answering with peace is weakness: it names it as the harder feat of the two.",
            bn: "এই আয়াত যে সংযমের প্রশংসা করে, সুন্নাহতে তাকে নিষ্ক্রিয়তা নয়, শক্তি হিসেবেই সংজ্ঞায়িত করা হয়েছে। বুখারী ও মুসলিমে বর্ণিত আছে, নবী ﷺ বলেছেন — শক্তিশালী সে নয় যে কুস্তিতে অন্যকে হারায়, বরং সে-ই, যে রাগের সময় নিজেকে নিয়ন্ত্রণ করে। 25:63-এর পাশে রেখে পড়লে এই হাদীস মীমাংসা করে দেয় যে শান্তির কথা দিয়ে উত্তর দেওয়া দুর্বলতা কি না: এটি একে দুইয়ের মধ্যে কঠিনতর কীর্তি বলেই চিহ্নিত করে।",
          },
        ],
      },
      {
        h: { en: "Not the Same as Silence", bn: "নীরবতার সঙ্গে এক নয়" },
        p: [
          {
            en: "It is worth being precise about the limits. Answering with salam is about personal insult and pointless quarrel, not about staying quiet when someone is being wronged. The Quran commands standing up for justice even against oneself in 4:135, and the same servants described here are not passive people; the verses after this one show them praying at night and spending their wealth. Gentleness is a manner, not a policy of withdrawal.",
            bn: "সীমারেখা নিয়ে নির্ভুল হওয়া দরকার। 'সালাম' বলে উত্তর দেওয়ার কথাটি ব্যক্তিগত অপমান ও অর্থহীন ঝগড়া সম্পর্কে; কারও প্রতি অন্যায় হলে চুপ করে থাকা সম্পর্কে নয়। কুরআন 4:135-এ নিজের বিরুদ্ধে হলেও ন্যায়ের পক্ষে দাঁড়ানোর আদেশ দেয়; আর এখানে বর্ণিত বান্দারাও নিষ্ক্রিয় মানুষ নন — পরের আয়াতগুলো দেখায় তাঁরা রাতে নামায পড়েন ও সম্পদ ব্যয় করেন। কোমলতা একটি আচরণের ধরন, পিছিয়ে থাকার নীতি নয়।",
          },
          {
            en: "There is also a difference between a soft answer and a silent grudge. The verse describes something said, salaman, which means the exchange is closed out loud and then left. Carrying the argument internally for days while presenting a calm face is not what is being praised, and the servants described here are elsewhere in the surah shown asking Allah directly for what troubles them rather than storing it.",
            bn: "নরম উত্তর আর নীরব বিদ্বেষের মধ্যেও পার্থক্য আছে। আয়াতটি বর্ণনা করে এমন কিছু, যা বলা হয় — 'সালামা'; অর্থাৎ কথোপকথনটি প্রকাশ্যে শেষ করে দিয়ে সেখানেই ছেড়ে দেওয়া হয়। বাইরে শান্ত মুখ রেখে দিনের পর দিন ভেতরে তর্কটি বয়ে বেড়ানো এখানে প্রশংসিত হচ্ছে না; আর এখানে বর্ণিত বান্দাদের সূরার অন্যত্র দেখা যায় নিজেদের কষ্টের কথা জমিয়ে না রেখে সরাসরি আল্লাহর কাছেই বলতে।",
          },
        ],
      },
      {
        h: { en: "Where It Is Tested Now", bn: "এখন এর পরীক্ষা কোথায়" },
        p: [
          {
            en: "The modern equivalent of being addressed by the jahilun is mostly typed. A reply box invites the exact response the verse rules out, and it does so at a moment when nobody is watching to hold you steady. The practical form of salaman online is often no reply at all, or one sentence that ends the thread. Both are harder than they look and both leave the day intact.",
            bn: "আজকের দিনে 'জাহিলদের' সম্বোধনের সমতুল্য ঘটনা বেশিরভাগই টাইপ করা। একটি রিপ্লাই বক্স ঠিক সেই উত্তরটিই আহ্বান করে যা আয়াত নিষেধ করে, আর তা করে এমন এক মুহূর্তে যখন আপনাকে স্থির রাখার মতো কেউ তাকিয়ে নেই। অনলাইনে 'সালামা'-র ব্যবহারিক রূপ প্রায়ই কোনো উত্তর না দেওয়া, কিংবা এমন একটি বাক্য যা আলোচনাটি শেষ করে দেয়। দুটোই দেখতে যতটা সহজ ততটা নয়, আর দুটোই দিনটিকে অক্ষত রাখে।",
          },
          {
            en: "The first half of the verse is tested elsewhere: in traffic, in queues, in how a person speaks to staff who cannot answer back, in whether a title or salary changes the tone of voice. Walking gently on the earth is a small daily discipline with no audience. Taken together the two halves describe someone whose behaviour does not depend on who is in front of them, which is close to the whole of good character.",
            bn: "আয়াতের প্রথম অংশটির পরীক্ষা হয় অন্যত্র: রাস্তার যানজটে, লাইনে দাঁড়িয়ে, যেসব কর্মীর পাল্টা জবাব দেওয়ার সুযোগ নেই তাদের সঙ্গে কথা বলার ধরনে, আর পদমর্যাদা বা বেতন কণ্ঠস্বর বদলে দেয় কি না তাতে। মাটিতে নম্রভাবে চলা এমন এক ছোট দৈনন্দিন শৃঙ্খলা, যার কোনো দর্শক নেই। দুই অংশ একসঙ্গে এমন একজনকে বর্ণনা করে, যার আচরণ সামনে কে আছে তার ওপর নির্ভর করে না — আর এটিই প্রায় গোটা উত্তম চরিত্র।",
          },
        ],
      },
    ],
  },
  '39:53': {
    sections: [
      {
        h: { en: "He Still Says My Servants", bn: "তিনি এখনো বলেন 'আমার বান্দারা'" },
        p: [
          {
            en: "The verse begins with an instruction to announce it: qul, say. Then the address, ya 'ibadiya, O My servants. The people being addressed are then identified as alladhina asrafu 'ala anfusihim, those who have been excessive against themselves. Israf is going past the limit, spending beyond what one has. Yet the relationship word comes first. They are still called His servants before their record is mentioned.",
            bn: "আয়াতটি শুরু হয় ঘোষণার নির্দেশ দিয়ে: কুল — বলে দিন। এরপর সম্বোধন: ইয়া 'ইবাদিয়া — হে আমার বান্দারা। যাদের সম্বোধন করা হচ্ছে তাদের পরিচয় দেওয়া হয়েছে 'আল্লাযীনা আসরাফূ 'আলা আনফুসিহিম' — যারা নিজেদের ওপর সীমা ছাড়িয়েছে। 'ইসরাফ' মানে সীমা পেরিয়ে যাওয়া, সামর্থ্যের বাইরে ব্যয় করা। তবু সম্পর্কবাচক শব্দটিই আগে আসে। তাদের আমলনামার কথা ওঠার আগেই তাদের বলা হয় তাঁর বান্দা।",
          },
          {
            en: "The prohibition that follows is qunut, not the ordinary word for sadness. La taqnatu min rahmatillah: do not despair of the mercy of Allah, where qunut is the settled conviction that there is no way back. Then the reason: innallaha yaghfirudh-dhunuba jami'a, Allah forgives sins altogether. The word jami'an leaves no category outside. The verse closes with two names, al-Ghafur and ar-Rahim, forgiveness and mercy stated as attributes rather than as a one-time concession.",
            bn: "এরপরের নিষেধাজ্ঞায় ব্যবহৃত শব্দ 'কুনূত', দুঃখ বোঝানোর সাধারণ শব্দ নয়। লা তাকনাতূ মিন রাহমাতিল্লাহ — আল্লাহর রহমত থেকে নিরাশ হয়ো না; এখানে 'কুনূত' মানে এই স্থির বিশ্বাস যে ফেরার আর কোনো পথ নেই। এরপর কারণ: ইন্নাল্লাহা ইয়াগফিরুয্‌ যুনূবা জামী'আ — আল্লাহ সব পাপই ক্ষমা করেন। 'জামী'আন' শব্দটি কোনো শ্রেণিকেই বাইরে রাখে না। আয়াত শেষ হয় দুটি নামে — আল-গাফূর ও আর-রাহীম; ক্ষমা ও দয়াকে এককালীন ছাড় হিসেবে নয়, গুণ হিসেবেই ঘোষণা করা হয়।",
          },
        ],
      },
      {
        h: { en: "The Verses That Follow", bn: "পরের আয়াতগুলো" },
        p: [
          {
            en: "This verse is almost never quoted with its continuation, and the continuation is what keeps it accurate. Verse 39:54 commands: and turn back to your Lord and submit to Him before the punishment comes upon you, after which you will not be helped. Verse 39:55 adds: and follow the best of what was revealed to you from your Lord. The offer of complete forgiveness is followed immediately by the instruction to come back.",
            bn: "এই আয়াতটি প্রায় কখনোই এর পরবর্তী অংশসহ উদ্ধৃত হয় না, অথচ সেই পরবর্তী অংশই একে যথার্থ রাখে। 39:54 আয়াত আদেশ দেয়: তোমরা তোমাদের রবের দিকে ফিরে এসো এবং তাঁর কাছে আত্মসমর্পণ করো, সেই শাস্তি আসার আগেই — যার পরে তোমাদের সাহায্য করা হবে না। 39:55 যোগ করে: আর অনুসরণ করো তোমাদের রবের পক্ষ থেকে নাযিলকৃত সর্বোত্তম বাণীর। পূর্ণ ক্ষমার প্রস্তাবের পরপরই আসে ফিরে আসার নির্দেশ।",
          },
          {
            en: "The commentators are near-unanimous that this is how the promise is to be understood: forgiveness of all sins for the one who repents. That reading is required by the rest of the Quran, since 4:48 states that Allah does not forgive that partners be associated with Him while He forgives what is less than that for whom He wills, and shirk is forgiven when a person turns from it. The verse opens a door; it does not remove the need to walk through it.",
            bn: "মুফাসসিরগণ প্রায় সর্বসম্মতভাবে বলেন, প্রতিশ্রুতিটি এভাবেই বুঝতে হবে: যে তওবা করে তার সব পাপের ক্ষমা। কুরআনের বাকি অংশই এই পাঠকে আবশ্যক করে, কারণ 4:48 বলে যে আল্লাহ তাঁর সঙ্গে শরীক করাকে ক্ষমা করেন না, তবে এর চেয়ে কম যা তা যাকে চান ক্ষমা করেন — আর মানুষ শিরক থেকে ফিরে এলে তা ক্ষমা করা হয়। আয়াতটি দরজা খুলে দেয়; সেই দরজা দিয়ে হেঁটে যাওয়ার প্রয়োজনটুকু তুলে নেয় না।",
          },
        ],
      },
      {
        h: { en: "Sent Down for the Worst Cases", bn: "সবচেয়ে ভারী মামলার জন্য নাযিল" },
        p: [
          {
            en: "The commentators relate that this verse came down concerning people whose past was as bad as a past can be. Among the reports transmitted in the tafsir literature is one connected with Wahshi ibn Harb (RA), the man who killed Hamzah (RA) at Uhud, who feared that repentance was closed to someone like him. Reports of this kind vary in their chains, but they agree on the situation the verse addresses.",
            bn: "মুফাসসিরগণ বর্ণনা করেন, এই আয়াত নাযিল হয়েছিল এমন মানুষদের প্রসঙ্গে যাদের অতীত যতটা খারাপ হওয়া সম্ভব ততটাই খারাপ ছিল। তাফসীর সাহিত্যে বর্ণিত বিবরণগুলোর মধ্যে একটি যুক্ত ওয়াহশী ইবনে হারব (রাঃ)-এর সঙ্গে, যিনি উহুদে হামযা (রাঃ)-কে হত্যা করেছিলেন এবং আশঙ্কা করছিলেন যে তাঁর মতো কারও জন্য তওবার দরজা বন্ধ। এ ধরনের বর্ণনাগুলোর সনদে ভিন্নতা আছে, তবে আয়াতটি কোন পরিস্থিতির জবাব দিচ্ছে সে বিষয়ে সেগুলো একমত।",
          },
          {
            en: "That setting explains the tone. The verse is not addressed to people with a manageable list of small faults. It is addressed to those who have concluded that they are beyond the reach of forgiveness, and it is phrased so that the conclusion itself is what is forbidden. Despair is treated in this passage as a serious error about Allah rather than as a natural consequence of a bad record.",
            bn: "এই প্রেক্ষাপটই আয়াতের সুরটি ব্যাখ্যা করে। এটি এমন মানুষদের উদ্দেশে নয়, যাদের ছোটখাটো ত্রুটির তালিকা সামলানোর মতো। এটি তাদের উদ্দেশে, যারা সিদ্ধান্তে পৌঁছে গেছে যে ক্ষমার নাগালের বাইরে চলে গেছে; আর ভাষাটি এমনভাবে সাজানো যে সেই সিদ্ধান্তটিই নিষিদ্ধ করা হচ্ছে। এই অংশে নিরাশাকে খারাপ আমলনামার স্বাভাবিক পরিণতি নয়, বরং আল্লাহ সম্পর্কে একটি গুরুতর ভুল হিসেবে দেখা হয়েছে।",
          },
        ],
      },
      {
        h: { en: "The Man Who Killed a Hundred", bn: "একশো জনকে হত্যাকারী" },
        p: [
          {
            en: "Al-Bukhari and Muslim both record the account of a man from an earlier nation who had killed ninety-nine people and asked whether repentance was possible. A worshipper told him it was not, and the man killed him too, completing a hundred. He then asked a scholar, who told him that nobody stands between him and repentance, and directed him to a land where Allah is worshipped, telling him not to return to his own.",
            bn: "বুখারী ও মুসলিম উভয়েই পূর্ববর্তী এক জাতির সেই ব্যক্তির ঘটনা বর্ণনা করেন, যে নিরানব্বই জনকে হত্যা করে জিজ্ঞেস করেছিল তার তওবা সম্ভব কি না। এক ইবাদতগুজার তাকে বলে, না; সে তাকেও হত্যা করে সংখ্যাটি একশোতে পূর্ণ করে। এরপর সে এক আলিমকে জিজ্ঞেস করে, যিনি তাকে বলেন যে তার ও তার তওবার মাঝখানে কেউ দাঁড়াতে পারে না, এবং তাকে এমন এক জনপদের দিকে যেতে বলেন যেখানে আল্লাহর ইবাদত হয়, আর নিজের এলাকায় না ফিরতে বলেন।",
          },
          {
            en: "He died on the road before arriving, and the narration reports that he was judged to belong to the people of mercy because he had set out. Two things in that account are usually missed. The first is that the scholar's answer included a change of place and company, not only a feeling of regret. The second is that the man was still moving when he died, and that was enough.",
            bn: "পৌঁছানোর আগেই পথে তার মৃত্যু হয়, আর বর্ণনায় এসেছে যে সে রহমতের অধিকারীদের অন্তর্ভুক্ত বলে ফয়সালা হয় — কারণ সে রওনা দিয়েছিল। এই ঘটনার দুটি দিক সাধারণত চোখ এড়িয়ে যায়। প্রথমটি হলো, আলিমের পরামর্শে কেবল অনুশোচনার অনুভূতি ছিল না, ছিল স্থান ও সঙ্গ বদলানোর কথাও। দ্বিতীয়টি হলো, মৃত্যুর সময়ও সে চলার পথেই ছিল — আর সেটুকুই যথেষ্ট হয়েছিল।",
          },
        ],
      },
      {
        h: { en: "What Repentance Requires", bn: "তওবা যা দাবি করে" },
        p: [
          {
            en: "The classical scholars describe tawbah in plain terms: stopping the act, regretting it, and resolving not to return to it; and where a person's right has been violated, restoring it or seeking their pardon. Nothing in that list is designed to be crushing. It is meant to be doable, which is why it does not include feeling a certain intensity of remorse or being certain that one will never fall again.",
            bn: "ধ্রুপদী আলিমগণ তওবাকে সহজ ভাষায় বর্ণনা করেন: কাজটি বন্ধ করা, তার জন্য অনুতপ্ত হওয়া, এবং তাতে না ফেরার সংকল্প করা; আর যেখানে কারও অধিকার লঙ্ঘিত হয়েছে, তা ফিরিয়ে দেওয়া বা তার কাছে ক্ষমা চাওয়া। এই তালিকার কোনো কিছুই মানুষকে পিষে ফেলার জন্য নয়। এটি করার মতোই রাখা হয়েছে — সে কারণেই এতে নেই কোনো নির্দিষ্ট মাত্রার অনুশোচনা অনুভব করা, কিংবা আর কখনো পড়ে যাব না এমন নিশ্চয়তা।",
          },
          {
            en: "At-Tirmidhi reports a hadith qudsi in which Allah says that were a servant's sins to reach the clouds of the sky and he then sought forgiveness, He would forgive him. Alongside this, honesty requires saying that forgiveness of sin is not the same as removal of consequences. A debt still has to be paid, a harm still has to be repaired, and a legal or medical consequence does not disappear. What ends is the standing before Allah.",
            bn: "তিরমিযী একটি হাদীসে কুদসী বর্ণনা করেন, যেখানে আল্লাহ বলেন — বান্দার পাপ যদি আকাশের মেঘ পর্যন্ত পৌঁছে যায় এবং এরপর সে ক্ষমা চায়, তবে তিনি তাকে ক্ষমা করে দেবেন। এর পাশাপাশি সততার দাবি হলো এ কথাও বলা যে পাপের ক্ষমা আর পরিণতির অবসান এক নয়। ঋণ পরিশোধ করতেই হবে, ক্ষতি মেরামত করতেই হবে, আর আইনি বা শারীরিক পরিণাম আপনাআপনি মিলিয়ে যায় না। যা শেষ হয়ে যায় তা হলো আল্লাহর সামনে জবাবদিহির সেই দায়।",
          },
        ],
      },
      {
        h: { en: "For Someone Who Cannot Start", bn: "যে শুরু করতে পারছে না" },
        p: [
          {
            en: "Many people who know this verse still cannot use it, because shame is not argued away by information. The practical route reported from the scholars is usually the same as the one given to the man who killed a hundred: change the surroundings that make the sin easy, find people who are going where you want to go, and begin with the obligations rather than waiting to feel worthy of them.",
            bn: "যারা এই আয়াতটি জানেন, তাঁদের অনেকেই তবু একে কাজে লাগাতে পারেন না — কারণ লজ্জা তথ্য দিয়ে দূর হয় না। আলিমদের থেকে বর্ণিত ব্যবহারিক পথটি সাধারণত সেই একই, যা একশো জনকে হত্যাকারীকে দেওয়া হয়েছিল: যে পরিবেশ পাপকে সহজ করে তা বদলান, এমন মানুষদের খুঁজুন যারা আপনি যেদিকে যেতে চান সেদিকেই যাচ্ছেন, আর নিজেকে যোগ্য মনে হওয়ার অপেক্ষা না করে ফরযগুলো দিয়েই শুরু করুন।",
          },
          {
            en: "It is also worth being careful with the promise. This verse does not say that a person will feel forgiven, that the memory will stop returning, or that the past will become weightless. It says that Allah forgives all sins, and that despairing of that is itself forbidden. For a person who has been carrying something for years, the instruction is narrow and doable: stop concluding the case against yourself, and turn back.",
            bn: "প্রতিশ্রুতিটি নিয়েও সতর্ক থাকা দরকার। এই আয়াত বলেনি যে মানুষ ক্ষমাপ্রাপ্ত বলে অনুভব করবে, কিংবা স্মৃতিটি আর ফিরে আসবে না, কিংবা অতীত ভারহীন হয়ে যাবে। এটি বলে যে আল্লাহ সব পাপ ক্ষমা করেন, আর সে বিষয়ে নিরাশ হওয়াটাই নিষিদ্ধ। বছরের পর বছর কিছু বয়ে বেড়ানো মানুষের জন্য নির্দেশটি সংকীর্ণ ও করার মতো: নিজের বিরুদ্ধে রায় লিখে ফেলা বন্ধ করুন, আর ফিরে আসুন।",
          },
        ],
      },
    ],
  },
  '103:1-3': {
    sections: [
      {
        h: { en: "An Oath by Time", bn: "সময়ের শপথ" },
        p: [
          {
            en: "The surah opens with wal-'asr, by al-'Asr. The commentators offer several senses for the word: time as such, the age or era, and the late afternoon, which is also the name of a prayer. They differ, and it is better to hold the readings together than to pick one silently. What they share is duration: the oath is sworn by the very thing every human being is spending.",
            bn: "সূরাটি শুরু হয় 'ওয়াল আসর' দিয়ে — আসরের শপথ। শব্দটির একাধিক অর্থ মুফাসসিরগণ উপস্থাপন করেন: সময় সাধারণভাবে, যুগ বা কাল, এবং দিনের শেষভাগ — যা একটি নামাযেরও নাম। তাঁদের মধ্যে মতভেদ আছে, আর নিঃশব্দে একটি বেছে নেওয়ার চেয়ে পাঠগুলো একসঙ্গে ধরে রাখাই ভালো। যা সবগুলোতে অভিন্ন তা হলো ব্যাপ্তি: শপথ নেওয়া হচ্ছে ঠিক সেই জিনিসটির, প্রতিটি মানুষ যা ব্যয় করে চলেছে।",
          },
          {
            en: "Then the verdict: innal-insana lafi khusr. Khusr is a merchant's word. It is what happens when capital is depleted, when a trader ends the day holding less than he started with. Al-insan, the human being, is stated in the singular and with the definite article, so the claim is about humanity as such. The default position, the verse says, is running at a loss.",
            bn: "এরপর আসে রায়: ইন্নাল ইনসানা লাফী খুসর। 'খুসর' একটি ব্যবসায়িক শব্দ। মূলধন ক্ষয়ে গেলে যা ঘটে, দিনের শেষে ব্যবসায়ীর হাতে শুরুর চেয়ে কম থাকলে যা হয় — সেটিই খুসর। 'আল-ইনসান' শব্দটি এসেছে একবচনে ও নির্দিষ্টতাবাচক অব্যয়সহ, ফলে দাবিটি সমগ্র মানবজাতিকে নিয়ে। আয়াত বলছে, ডিফল্ট অবস্থাটাই হলো লোকসানে চলা।",
          },
        ],
      },
      {
        h: { en: "The Only Exception", bn: "একমাত্র ব্যতিক্রম" },
        p: [
          {
            en: "The third verse begins with illa, except, and then lists four things. Alladhina amanu, those who believed. Wa 'amilus-salihat, and did righteous deeds. Wa tawasaw bil-haqq, and enjoined one another to truth. Wa tawasaw bis-sabr, and enjoined one another to patience. Nothing else is added, and nothing on the list is optional, since they are joined by simple conjunction inside a single exception clause.",
            bn: "তৃতীয় আয়াত শুরু হয় 'ইল্লা' দিয়ে — অর্থাৎ 'ছাড়া' — এরপর চারটি জিনিসের তালিকা। আল্লাযীনা আমানূ — যারা ঈমান এনেছে। ওয়া 'আমিলুস সালিহাত — এবং সৎকাজ করেছে। ওয়া তাওয়াসাও বিল হাক্ক — এবং একে অপরকে সত্যের উপদেশ দিয়েছে। ওয়া তাওয়াসাও বিস সাবর — এবং একে অপরকে ধৈর্যের উপদেশ দিয়েছে। এর বাইরে কিছু যোগ করা হয়নি, আর তালিকার কোনোটিই ঐচ্ছিক নয় — কারণ একটিমাত্র ব্যতিক্রম-বাক্যের ভেতরে সেগুলো সরল সংযোজক দিয়ে যুক্ত।",
          },
          {
            en: "The verb tawasaw is a form that means doing something to one another, mutually. It is not enough to be advised, and not enough to advise. The commentators regularly point out the structure: the first two conditions are what a person does with themselves, and the last two are what they do with other people. A private religion of faith and good deeds does not meet the surah's own definition of escape from loss.",
            bn: "'তাওয়াসাও' ক্রিয়াপদটি এমন এক গঠনে, যা পারস্পরিকতা বোঝায় — একে অপরের প্রতি করা। কেবল উপদেশ পাওয়া যথেষ্ট নয়, কেবল উপদেশ দেওয়াও নয়। মুফাসসিরগণ নিয়মিত কাঠামোটি দেখান: প্রথম দুটি শর্ত মানুষ নিজের সঙ্গে যা করে, আর শেষ দুটি সে অন্যদের সঙ্গে যা করে। ঈমান ও সৎকর্মের একান্ত ব্যক্তিগত ধর্মচর্চা ক্ষতি থেকে মুক্তির ব্যাপারে সূরার নিজের সংজ্ঞাটিই পূরণ করে না।",
          },
        ],
      },
      {
        h: { en: "Its Neighbours in the Mushaf", bn: "মুসহাফে এর প্রতিবেশীরা" },
        p: [
          {
            en: "Surah al-'Asr is Makkan and sits between two surahs about misplaced investment. Before it, 102:1-2 opens Surah at-Takathur with the charge that rivalry in accumulation distracted people until they visited the graves. After it, Surah al-Humazah in 104:1-3 describes the one who gathers wealth and counts it, thinking his wealth has made him immortal. Al-'Asr stands between them and names what the capital actually is.",
            bn: "সূরা আল-আসর মক্কী, আর এর অবস্থান ভুল জায়গায় বিনিয়োগ নিয়ে দুটি সূরার মাঝখানে। এর আগে 102:1-2 দিয়ে সূরা আত-তাকাসুর শুরু হয় এই অভিযোগে যে সঞ্চয়ের প্রতিযোগিতা মানুষকে গাফিল করে রেখেছে, শেষে তারা কবরে গিয়ে পৌঁছেছে। এর পরে সূরা আল-হুমাযাহ 104:1-3-এ বর্ণনা করে সেই ব্যক্তিকে, যে সম্পদ জমায় ও গুনে রাখে এবং ভাবে তার সম্পদ তাকে চিরস্থায়ী করে দেবে। এই দুইয়ের মাঝখানে দাঁড়িয়ে আল-আসর জানিয়ে দেয় প্রকৃত মূলধনটি আসলে কী।",
          },
          {
            en: "Read in that sequence, the loss described is not a threat about the next life alone. It is a description of a life spent acquiring things that cannot be carried past the grave. The surah is only three verses, and it was revealed to a community that had very little; the diagnosis was never about the size of the holdings but about what the hours were being converted into.",
            bn: "এই ধারাবাহিকতায় পড়লে বোঝা যায়, বর্ণিত ক্ষতিটি কেবল পরকাল নিয়ে হুমকি নয়। এটি এমন এক জীবনের বর্ণনা, যা কাটে এমন সব জিনিস অর্জনে যা কবরের ওপারে বয়ে নেওয়া যায় না। সূরাটি মাত্র তিন আয়াতের, আর তা নাযিল হয়েছিল এমন এক সমাজে যাদের সম্পদ ছিল খুবই কম; রোগনির্ণয়টি কখনোই সম্পদের পরিমাণ নিয়ে ছিল না, ছিল ঘণ্টাগুলো কীসে রূপান্তরিত হচ্ছে তা নিয়ে।",
          },
        ],
      },
      {
        h: { en: "How It Was Valued", bn: "এর মূল্যায়ন" },
        p: [
          {
            en: "Ibn Kathir relates the statement of ash-Shafi'i that if people reflected on this surah it would be enough for them, a remark repeated in many later commentaries. The point being made is about completeness, not about replacing the rest of the Quran. The surah names belief, action, truth and endurance, and it is difficult to think of a religious duty that does not fall under one of those four headings.",
            bn: "ইবনে কাসীর ইমাম শাফিঈর সেই উক্তিটি বর্ণনা করেন যে মানুষ যদি এই সূরাটি নিয়ে চিন্তা করত, তবে এটিই তাদের জন্য যথেষ্ট হতো — যে কথাটি পরবর্তী বহু তাফসীরে পুনরাবৃত্ত হয়েছে। এখানে যে কথাটি বলা হচ্ছে তা পূর্ণতা সম্পর্কে, কুরআনের বাকি অংশের বিকল্প হওয়া সম্পর্কে নয়। সূরাটি নাম নেয় ঈমান, আমল, সত্য ও অবিচলতার — আর এমন কোনো ধর্মীয় দায়িত্ব ভাবা কঠিন, যা এই চারটি শিরোনামের কোনো একটির নিচে পড়ে না।",
          },
          {
            en: "At-Tabarani reports that when two of the companions met, they would not part until one recited Surah al-'Asr to the other and then gave the greeting of peace. Whatever the exact grading of that report, it describes a practice that fits the surah precisely: the third verse commands mutual reminder, so reciting it to one another is the surah being obeyed rather than merely recited.",
            bn: "তাবারানী বর্ণনা করেন, দুজন সাহাবী পরস্পরের সাক্ষাৎ পেলে ততক্ষণ আলাদা হতেন না যতক্ষণ না একজন অন্যজনকে সূরা আল-আসর পড়ে শোনাতেন এবং তারপর সালাম দিতেন। সেই বর্ণনার মান যা-ই হোক, এটি এমন এক আমলের বর্ণনা যা সূরাটির সঙ্গে হুবহু মেলে: তৃতীয় আয়াত পারস্পরিক উপদেশের আদেশ দেয়, তাই একে অপরকে তা পড়ে শোনানো মানে সূরাটি কেবল তিলাওয়াত নয়, তা পালন করা।",
          },
        ],
      },
      {
        h: { en: "The Clause People Skip", bn: "যে অংশটি মানুষ এড়িয়ে যায়" },
        p: [
          {
            en: "The two mutual clauses are the ones most often left out in practice, because they require other people and therefore friction. Enjoining truth means being the person who says the difficult thing kindly, and being the person who can hear it without ending the friendship. Both halves are rare. A community where nobody corrects anybody is usually described as peaceful right up until something breaks.",
            bn: "পারস্পরিক দুটি শর্তই বাস্তবে সবচেয়ে বেশি বাদ পড়ে, কারণ এগুলোর জন্য অন্য মানুষ লাগে — আর তাতে ঘর্ষণ তৈরি হয়। সত্যের উপদেশ দেওয়া মানে সেই ব্যক্তি হওয়া, যে কঠিন কথাটি ভদ্রভাবে বলতে পারে; আবার সেই ব্যক্তিও হওয়া, যে তা শুনে সম্পর্ক শেষ করে দেয় না। দুটোই বিরল। যে সমাজে কেউ কাউকে সংশোধন করে না, তাকে সাধারণত শান্তিপূর্ণ বলা হয় — ঠিক ততক্ষণ, যতক্ষণ না কিছু একটা ভেঙে পড়ে।",
          },
          {
            en: "Patience is placed last for a reason the commentators often note: truth-telling produces resistance, and the person who begins advising will need endurance more than the one who stays silent. Sabr in Quranic usage covers holding to obedience, holding back from what is forbidden, and holding steady under what cannot be changed. All three are needed by anyone who takes the third clause seriously.",
            bn: "ধৈর্যকে সবার শেষে রাখার একটি কারণ মুফাসসিরগণ প্রায়ই উল্লেখ করেন: সত্য বললে প্রতিরোধ আসে, আর যে উপদেশ দেওয়া শুরু করে তার অবিচলতার প্রয়োজন হয় নীরব থাকা মানুষটির চেয়ে বেশি। কুরআনি ব্যবহারে 'সবর' ধারণ করে আনুগত্যে অটল থাকা, নিষিদ্ধ থেকে নিজেকে ধরে রাখা, এবং যা বদলানো যায় না তার নিচে স্থির থাকা। যে তৃতীয় শর্তটিকে গুরুত্বের সঙ্গে নেয়, তার এই তিনটিই প্রয়োজন হয়।",
          },
        ],
      },
      {
        h: { en: "Three Verses, One Audit", bn: "তিন আয়াত, এক হিসাব" },
        p: [
          {
            en: "Used honestly, the surah is a weekly audit with four lines. Is there belief that is actually being fed, or only inherited. Is there action, meaning something specific done this week that would not have been done otherwise. Is there anyone I told the truth to when it was easier not to. Is there something I stayed with when I wanted to stop.",
            bn: "সততার সঙ্গে ব্যবহার করলে সূরাটি চার লাইনের এক সাপ্তাহিক হিসাব। ঈমান কি সত্যিই পুষ্ট হচ্ছে, নাকি কেবল উত্তরাধিকারসূত্রে পাওয়া? আমল কি আছে — অর্থাৎ এই সপ্তাহে সুনির্দিষ্ট এমন কিছু কি করা হয়েছে, যা না হলে হতো না? এমন কেউ কি আছে, যাকে চুপ থাকাই সহজ ছিল অথচ আমি সত্যটি বলেছি? আর এমন কিছু কি আছে, যা ছেড়ে দিতে ইচ্ছে করছিল তবু আমি ধরে রেখেছি?",
          },
          {
            en: "The last clause also suggests a structural fix rather than a resolution. Most people who keep the four qualities alive do so because of one or two relationships in which honesty is expected and reminders are normal. Choosing that company deliberately, and being useful in it rather than only supplied by it, is the most practical response this surah asks for.",
            bn: "শেষ শর্তটি কোনো সংকল্প নয়, বরং একটি কাঠামোগত সমাধানের ইঙ্গিত দেয়। যাঁরা এই চারটি গুণ জীবন্ত রাখেন, তাঁদের বেশিরভাগই তা পারেন এমন দু-একটি সম্পর্কের কারণে, যেখানে সততা প্রত্যাশিত এবং স্মরণ করিয়ে দেওয়া স্বাভাবিক। সেই সঙ্গটি সচেতনভাবে বেছে নেওয়া, আর সেখানে কেবল গ্রহীতা না থেকে নিজেও উপকারী হওয়া — এটাই এই সূরার চাওয়া সবচেয়ে ব্যবহারিক জবাব।",
          },
        ],
      },
    ],
  },
  '94:5-6': {
    sections: [
      {
        h: { en: "With, Not After", bn: "সাথে, পরে নয়" },
        p: [
          {
            en: "The wording is precise and often softened in translation. Fa inna ma'al-'usri yusra: so indeed, with hardship is ease. The preposition is ma'a, with, not ba'da, after. The Quran does use the other construction elsewhere, in 65:7, where Allah says He will bring about ease after hardship. Here the choice of ma'a places the relief alongside the difficulty rather than only at its conclusion.",
            bn: "শব্দচয়ন এখানে নির্ভুল, অথচ অনুবাদে প্রায়ই তা নরম হয়ে যায়। ফা-ইন্না মা'আল 'উসরি ইউসরা — নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি। ব্যবহৃত অব্যয়টি 'মা'আ' — অর্থাৎ 'সাথে', 'বা'দা' বা 'পরে' নয়। কুরআন অন্যত্র অন্য গঠনটিও ব্যবহার করেছে — 65:7-এ, যেখানে আল্লাহ বলেন তিনি কষ্টের পরে স্বস্তি এনে দেবেন। এখানে 'মা'আ' বেছে নেওয়ায় স্বস্তিটি কেবল কষ্টের শেষে নয়, বরং তার পাশেই স্থাপিত হয়।",
          },
          {
            en: "Then the sentence is repeated word for word. Arabic repetition of this kind functions as emphasis and as confirmation, closing off the possibility that the first statement was conditional or partial. The commentators treat the second occurrence as making the promise firm rather than as adding new information, which is why translations that render it identically are being faithful to the text.",
            bn: "এরপর বাক্যটি হুবহু পুনরাবৃত্ত হয়। আরবিতে এ ধরনের পুনরাবৃত্তি জোর দেওয়ার ও নিশ্চিত করার কাজ করে, আর প্রথম বাক্যটি শর্তসাপেক্ষ বা আংশিক ছিল — এমন সম্ভাবনা বন্ধ করে দেয়। মুফাসসিরগণ দ্বিতীয়বারের উল্লেখটিকে নতুন তথ্য যোগ করা নয়, বরং প্রতিশ্রুতিটিকে দৃঢ় করা হিসেবেই দেখেন; সে কারণেই যেসব অনুবাদ দুবার একই বাক্য রাখে, সেগুলোই মূল পাঠের প্রতি বিশ্বস্ত।",
          },
        ],
      },
      {
        h: { en: "One Hardship, Two Eases", bn: "এক কষ্ট, দুই স্বস্তি" },
        p: [
          {
            en: "There is a famous grammatical observation attached to these two verses. Al-'usr appears both times with the definite article, so classical usage takes the second mention to refer to the same hardship already named. Yusr appears both times without it, and an indefinite noun repeated is normally taken as a second, different instance. The conclusion drawn is that one hardship is met by two eases.",
            bn: "এই দুই আয়াতের সঙ্গে একটি বিখ্যাত ব্যাকরণগত পর্যবেক্ষণ জড়িয়ে আছে। 'আল-উসর' দুবারই এসেছে নির্দিষ্টতাবাচক অব্যয়সহ, ফলে ধ্রুপদী ব্যবহারে দ্বিতীয়বারের উল্লেখটিকে আগেই উল্লিখিত সেই একই কষ্ট বলে ধরা হয়। আর 'ইউসর' দুবারই এসেছে অনির্দিষ্টভাবে, আর অনির্দিষ্ট বিশেষ্য পুনরাবৃত্ত হলে সাধারণত তাকে দ্বিতীয় ও ভিন্ন একটি বিষয় ধরা হয়। এ থেকে যে সিদ্ধান্ত টানা হয় তা হলো: এক কষ্টের মোকাবিলায় দুটি স্বস্তি।",
          },
          {
            en: "This is relayed from 'Umar ibn al-Khattab (RA) and from al-Hasan al-Basri among the early generations, and it is repeated across the classical commentaries. It should be presented for what it is: an inference from the grammar of the two verses, held by a great many scholars, rather than a text with an independent chain of its own. Taken that way it is a sound and comforting observation without needing to be dressed as a hadith.",
            bn: "এটি পূর্ববর্তী প্রজন্মের মধ্যে উমর ইবনুল খাত্তাব (রাঃ) ও হাসান বসরী থেকে বর্ণিত, আর ধ্রুপদী তাফসীরগুলোতে বারবার পুনরাবৃত্ত হয়েছে। একে যা তা-ই বলে উপস্থাপন করা উচিত: দুই আয়াতের ব্যাকরণ থেকে টানা একটি সিদ্ধান্ত, যা বহু আলিম গ্রহণ করেছেন — স্বতন্ত্র সনদসম্পন্ন কোনো বর্ণনা নয়। এভাবে নিলে এটি একটি যথার্থ ও সান্ত্বনাদায়ক পর্যবেক্ষণ, যাকে হাদীসের পোশাক পরানোর প্রয়োজন নেই।",
          },
        ],
      },
      {
        h: { en: "Evidence Before Promise", bn: "প্রতিশ্রুতির আগে প্রমাণ" },
        p: [
          {
            en: "The promise does not arrive on its own. Surah ash-Sharh is Makkan and addressed to the Prophet ﷺ, and the four verses before it are a list of things already done for him. In 94:1-4 Allah asks whether He did not expand his breast, and remove from him his burden which had weighed down his back, and raise high his mention. Only after that record does the general promise follow.",
            bn: "প্রতিশ্রুতিটি একা আসে না। সূরা আশ-শারহ মক্কী এবং নবী ﷺ-কে উদ্দেশ করে নাযিল; এর আগের চারটি আয়াত তাঁর জন্য ইতিমধ্যে করা কাজগুলোর তালিকা। 94:1-4-এ আল্লাহ জিজ্ঞেস করেন, তিনি কি তাঁর বক্ষ প্রশস্ত করে দেননি? তাঁর পিঠ ভারী করে রাখা বোঝাটি কি নামিয়ে দেননি? আর তাঁর মর্যাদাকে কি উঁচু করেননি? এই বিবরণের পরেই কেবল আসে সাধারণ প্রতিশ্রুতিটি।",
          },
          {
            en: "The order matters for how the verses are used. This is not an abstract assurance offered to someone with no history. It is a conclusion drawn from a record: relief has already come before, in ways that were not visible in advance, so the pattern can be trusted again. Many people find the surah works best when read from its first verse rather than quoted from its fifth.",
            bn: "আয়াতগুলো কীভাবে ব্যবহার করা হবে, তার জন্য এই ক্রমটি গুরুত্বপূর্ণ। এটি কোনো ইতিহাসহীন মানুষকে দেওয়া বিমূর্ত আশ্বাস নয়। এটি একটি বিবরণ থেকে টানা সিদ্ধান্ত: স্বস্তি আগেও এসেছে, এমনভাবে যা আগে থেকে দেখা যায়নি; তাই ধরনটির ওপর আবারও ভরসা করা যায়। বহু মানুষ দেখেন, পঞ্চম আয়াত থেকে উদ্ধৃত করার চেয়ে সূরাটি প্রথম আয়াত থেকে পড়লেই তা সবচেয়ে ভালো কাজ করে।",
          },
        ],
      },
      {
        h: { en: "What Comes Next", bn: "এরপর যা আসে" },
        p: [
          {
            en: "The surah does not end at the promise. Verses 94:7-8 continue: so when you have finished, exert yourself, and to your Lord direct your longing. The commentators offer different applications of what is finished and what is then taken up, but the shape is agreed. Ease is not described as a reward that ends the work; it is the point at which the next effort begins.",
            bn: "সূরাটি প্রতিশ্রুতিতে শেষ হয় না। 94:7-8 আয়াত বলে চলে: অতএব যখন তুমি অবসর পাও, তখন কঠোর পরিশ্রম করো, আর তোমার রবের দিকেই আগ্রহ নিবদ্ধ করো। কোন কাজটি শেষ হলো আর এরপর কোনটি ধরা হবে, তার প্রয়োগে মুফাসসিরগণ ভিন্ন ভিন্ন ব্যাখ্যা দেন, তবে কাঠামোটি নিয়ে মতৈক্য আছে। স্বস্তিকে এমন পুরস্কার হিসেবে বর্ণনা করা হয়নি যা কাজ শেষ করে দেয়; এটি সেই বিন্দু, যেখান থেকে পরবর্তী পরিশ্রম শুরু হয়।",
          },
          {
            en: "That ending guards the verse against a passive reading. Being told that ease accompanies hardship is not being told to wait for conditions to improve. The same surah that promises relief closes by commanding exertion, which is why the classical scholars read tawakkul and effort as belonging together here in the same way as they do in 3:159.",
            bn: "এই সমাপ্তিটিই আয়াতটিকে নিষ্ক্রিয় পাঠ থেকে রক্ষা করে। কষ্টের সঙ্গেই স্বস্তি আছে — এ কথা শোনার অর্থ পরিস্থিতি ভালো হওয়ার অপেক্ষায় বসে থাকা নয়। যে সূরা স্বস্তির প্রতিশ্রুতি দেয়, সেই সূরাই শেষ হয় পরিশ্রমের আদেশ দিয়ে; সে কারণেই ধ্রুপদী আলিমগণ এখানে তাওয়াক্কুল ও চেষ্টাকে একসঙ্গেই পড়েন — ঠিক যেভাবে 3:159-এ পড়েন।",
          },
        ],
      },
      {
        h: { en: "What Is Not Promised", bn: "যা প্রতিশ্রুত নয়" },
        p: [
          {
            en: "Accuracy here is a kindness. The verses promise that ease accompanies hardship. They do not specify what form the ease will take, when it will be recognised, or that it will restore what was lost. A person who reads them as a guarantee that a diagnosis will reverse or a marriage will be saved may be left feeling that Allah broke a promise He did not make.",
            bn: "এখানে নির্ভুলতাই দয়া। আয়াত দুটি প্রতিশ্রুতি দেয় যে কষ্টের সঙ্গে স্বস্তি থাকে। এগুলো নির্দিষ্ট করে না যে স্বস্তিটি কোন রূপে আসবে, কখন তা চেনা যাবে, কিংবা যা হারিয়েছে তা ফিরিয়ে দেবে কি না। যিনি একে এই নিশ্চয়তা হিসেবে পড়েন যে রোগনির্ণয় উল্টে যাবে বা সংসারটি টিকে যাবে, তিনি শেষে অনুভব করতে পারেন যে আল্লাহ এমন এক প্রতিশ্রুতি ভেঙেছেন যা তিনি কখনো দেননি।",
          },
          {
            en: "Very often the ease that arrives first is internal: strength that was not there last month, help from an unexpected person, a night of sleep, a lightening of the fear even while the situation holds. The companions in the years of hardship in Makkah were not given quick relief, and the boycott in the valley lasted a long time before it ended. It did end.",
            bn: "অধিকাংশ সময় সবচেয়ে আগে যে স্বস্তি আসে তা ভেতরের: গত মাসে যে শক্তি ছিল না তা, অপ্রত্যাশিত কারও সাহায্য, একটি ঘুমের রাত, কিংবা পরিস্থিতি অপরিবর্তিত থাকা সত্ত্বেও ভয়ের ভার কিছুটা হালকা হওয়া। মক্কার কঠিন বছরগুলোতে সাহাবীদের দ্রুত মুক্তি দেওয়া হয়নি, আর উপত্যকার সেই বয়কট শেষ হওয়ার আগে বহুদিন টিকেছিল। তবু তা শেষ হয়েছিল।",
          },
        ],
      },
      {
        h: { en: "Holding On Meanwhile", bn: "ইতিমধ্যে ধরে রাখা" },
        p: [
          {
            en: "Muslim records the Prophet ﷺ saying that the affair of the believer is wholly good, and that this is for no one but the believer: if ease comes he is grateful and that is good for him, and if hardship comes he is patient and that is good for him. The hadith does not deny that the two states differ. It gives each of them a usable response.",
            bn: "মুসলিমে বর্ণিত আছে, নবী ﷺ বলেছেন — মুমিনের ব্যাপারটি পুরোটাই কল্যাণকর, আর এটি মুমিন ছাড়া আর কারও জন্য নয়: তার কাছে স্বস্তি এলে সে শোকর করে, আর তা তার জন্য কল্যাণকর; আর কষ্ট এলে সে ধৈর্য ধরে, আর তা-ও তার জন্য কল্যাণকর। হাদীসটি অস্বীকার করে না যে অবস্থা দুটি ভিন্ন। এটি প্রতিটির জন্য একটি ব্যবহারযোগ্য জবাব দেয়।",
          },
          {
            en: "Practically, hardship is usually survived in units smaller than the whole. A supplication transmitted from the Prophet ﷺ asks Allah to make what is difficult easy, since He alone makes the difficult easy when He wills. Alongside that, take the next required step only, keep the obligatory prayers even when they feel empty, tell one trustworthy person, and accept treatment and help without treating them as a failure of faith.",
            bn: "বাস্তবে কষ্ট সাধারণত পুরোটা একসঙ্গে নয়, ছোট ছোট অংশে পার হতে হয়। নবী ﷺ থেকে বর্ণিত একটি দোয়ায় আল্লাহর কাছে চাওয়া হয় যেন তিনি কঠিন বিষয়টিকে সহজ করে দেন, কারণ তিনি চাইলেই কেবল কঠিন সহজ হয়। এর পাশাপাশি কেবল পরবর্তী প্রয়োজনীয় পদক্ষেপটুকু নিন, শূন্য লাগলেও ফরয নামাযগুলো ধরে রাখুন, বিশ্বস্ত একজনকে কথাটি বলুন, আর চিকিৎসা ও সাহায্যকে ঈমানের ব্যর্থতা না ভেবে গ্রহণ করুন।",
          },
        ],
      },
    ],
  },
    '17:23-24': {
    sections: [
      {
        h: { en: "Decreed, Not Suggested", bn: "সুপারিশ নয়, ফয়সালা" },
        p: [
          {
            en: "The passage begins wa qada rabbuka, and your Lord has decreed. Qada is a decisive verb — a settled ruling, not advice offered for consideration. What it decrees is doubled: that you worship none but Him, and bil-walidayni ihsana, kindness to the two parents. Ihsan is more than duty; it is doing the good thing and doing it beautifully. The two commands share one verb, and no reader of the Arabic can separate them without breaking the sentence.",
            bn: "অংশটি শুরু হয় ওয়া ক্বাদা রাব্বুকা দিয়ে — আর তোমার রব ফয়সালা করেছেন। ক্বাদা একটি চূড়ান্ত ক্রিয়া — এটি স্থিরীকৃত সিদ্ধান্ত, বিবেচনার জন্য দেওয়া পরামর্শ নয়। যা ফয়সালা করা হয়েছে তা দ্বৈত: তোমরা তাঁকে ছাড়া কারো ইবাদত করবে না, আর বিল-ওয়ালিদাইনি ইহসানা — পিতামাতার সাথে সদাচরণ। ইহসান কেবল কর্তব্য নয়; এটি ভালো কাজটি করা এবং সুন্দরভাবে করা। দুটি আদেশ একটি ক্রিয়াই ভাগ করে নেয়, আর আরবি পাঠক বাক্য না ভেঙে দুটিকে আলাদা করতে পারেন না।",
          },
          {
            en: "These verses open a charter of conduct running to 17:39, sealed with the statement that this is from the wisdom your Lord revealed to you. Inside it come the prohibitions of killing children out of fear of poverty, of approaching adultery, of taking a life unjustly, of consuming an orphan's wealth, of short measure and of arrogance in walking. Parents are placed first, immediately after tawhid — before every social crime the passage names.",
            bn: "এই আয়াতগুলো দিয়েই শুরু হয় একটি আচরণ-সনদ, যা চলে 17:39 পর্যন্ত, যেখানে বলা হয় এসবই সেই হিকমত যা তোমার রব তোমার প্রতি ওহি করেছেন। সেই সনদের ভেতরে আছে দারিদ্র্যের ভয়ে সন্তান হত্যা, ব্যভিচারের কাছে যাওয়া, অন্যায়ভাবে প্রাণ নেওয়া, এতিমের সম্পদ ভক্ষণ, মাপে কম দেওয়া ও দম্ভভরে চলার নিষেধাজ্ঞা। এই তালিকায় পিতামাতাকে রাখা হয়েছে সবার আগে, তাওহীদের ঠিক পরেই — সনদে উল্লেখিত প্রতিটি সামাজিক অপরাধেরও আগে।",
          },
        ],
      },
      {
        h: { en: "The Weight of One Syllable", bn: "একটি ধ্বনির ভার" },
        p: [
          {
            en: "The verse then narrows to a specific season: imma yablughanna indaka al-kibara ahaduhuma aw kilahuma. If one of them, or both, reaches old age with you. Indaka means in your keeping — the moment when the direction of care has reversed. Ahaduhuma aw kilahuma, one or both, closes the loophole of a child attentive to one parent and cold to the other. The Arabic is precise about a situation families recognise at once.",
            bn: "এরপর আয়াত একটি নির্দিষ্ট সময়ের দিকে সংকুচিত হয়: ইম্মা ইয়াবলুগান্না ইনদাকাল-কিবারা আহাদুহুমা আও কিলাহুমা। যদি তাদের একজন কিংবা উভয়েই তোমার কাছে বার্ধক্যে পৌঁছে। ইনদাকা মানে তোমার তত্ত্বাবধানে — অর্থাৎ সেই মুহূর্ত যখন যত্নের দিক উল্টে গেছে। আহাদুহুমা আও কিলাহুমা, একজন বা উভয়ে — এই কথাটি সেই ফাঁকটি বন্ধ করে দেয় যেখানে সন্তান এক অভিভাবকের প্রতি যত্নশীল আর অন্যজনের প্রতি নিস্পৃহ। পরিবারগুলো যে অবস্থা সঙ্গে সঙ্গে চিনতে পারে, আরবি সেখানে অস্বাভাবিক রকম নিখুঁত।",
          },
          {
            en: "Then: fala taqul lahuma uffin. Do not say to them uff. Uff is not an insult or an argument. It is the small breath of irritation a tired person lets out — the click of the tongue, the sigh at a question asked for the fourth time. The Quran forbids the smallest audible sign of impatience, and the commentators reason from it that everything heavier is forbidden by necessity. Then wa la tanharhuma, do not rebuke or push them away, and qul lahuma qawlan karima, speak to them a noble word.",
            bn: "এরপর: ফালা তাক্বুল লাহুমা উফ্ফ। তাদের ‘উফ’ বলো না। উফ কোনো গালি নয়, তর্কও নয়। এটি ক্লান্ত মানুষের বেরিয়ে আসা বিরক্তির ছোট্ট নিঃশ্বাস — জিভের টক্ শব্দ, চতুর্থবার করা প্রশ্নে দীর্ঘশ্বাস। কুরআন অধৈর্যের ক্ষুদ্রতম শ্রবণযোগ্য চিহ্নটিও নিষেধ করে, আর মুফাসসিরগণ এখান থেকেই যুক্তি টানেন যে এর চেয়ে ভারী সবকিছু আপনাআপনিই নিষিদ্ধ। এরপর ওয়া লা তানহারহুমা, তাদের ধমক দিও না বা সরিয়ে দিও না, আর ক্বুল লাহুমা ক্বাওলান কারীমা, তাদের সাথে সম্মানজনক কথা বলো।",
          },
        ],
      },
      {
        h: { en: "The Wing of Humility", bn: "বিনয়ের ডানা" },
        p: [
          {
            en: "In 17:24 the image changes from speech to posture: wakhfid lahuma janaha adh-dhulli min ar-rahmah. Lower to them the wing of humility out of mercy. The picture is a bird drawing its wing down over what it shelters — the gesture of a parent bird, now asked of the grown child. Dhull here is not humiliation but the willing lowering of one's own standing. Min ar-rahmah names the motive: not obligation grudgingly met, but tenderness.",
            bn: "17:24 আয়াতে চিত্র বদলে কথা থেকে ভঙ্গিতে যায়: ওয়াখফিদ লাহুমা জানাহায-যুল্লি মিনার-রাহমাহ। দয়াবশত তাদের প্রতি বিনয়ের ডানা নত করো। ছবিটি এমন এক পাখির, যে নিজের ডানা নামিয়ে আশ্রিতকে ঢেকে রাখে — মা-বাবা পাখির ভঙ্গি, যা এখন বড় হয়ে ওঠা সন্তানের কাছে চাওয়া হচ্ছে। এখানে যুল্ল মানে অপমান নয়, বরং স্বেচ্ছায় নিজের অবস্থান নামিয়ে আনা। মিনার-রাহমাহ উদ্দেশ্যটির নাম বলে দেয়: গাঁইগুঁই করে পালন করা দায়িত্ব নয়, বরং কোমলতা।",
          },
          {
            en: "The order across the two verses is deliberate. First the tongue is disciplined, then the manner, then the heart is given the reason. It is possible to serve parents faultlessly and still make them feel like a burden; the wording closes that gap. What is being asked is not merely that the elderly be fed and housed, but that they not be made to feel small in the house of the child they raised.",
            bn: "দুই আয়াতজুড়ে ক্রমটি উদ্দেশ্যমূলক। প্রথমে জিহ্বাকে শৃঙ্খলিত করা হয়, তারপর আচরণকে, তারপর হৃদয়কে কারণটি জানানো হয়। নিখুঁতভাবে পিতামাতার সেবা করেও তাদের বোঝা মনে করানো সম্ভব; আয়াতের ভাষা সেই ফাঁকটি বন্ধ করে দেয়। এখানে কেবল এটুকু চাওয়া হচ্ছে না যে বৃদ্ধ মা-বাবা খাবার ও আশ্রয় পাবেন, বরং এটাও যে তাঁরা যে সন্তানকে বড় করেছেন তারই ঘরে যেন নিজেদের ছোট মনে না করেন।",
          },
        ],
      },
      {
        h: { en: "The Du'a That Closes It", bn: "যে দোয়া দিয়ে শেষ" },
        p: [
          {
            en: "The passage ends by handing the child words to say: rabbi irhamhuma kama rabbayani saghira. My Lord, have mercy on them as they raised me when I was small. The verb rabbayani, they raised me, echoes the name Rabb — the Lord who nurtures and brings to completion — a link the scholars have long heard in the wording. The child is asking the true Rabb to do for his parents what they, in their small human way, once did for him.",
            bn: "অংশটি শেষ হয় সন্তানের হাতে কিছু শব্দ তুলে দিয়ে: রাব্বির হামহুমা কামা রাব্বাইয়ানী সাগীরা। হে আমার রব, তাদের প্রতি দয়া করুন যেমন তারা আমাকে ছোটবেলায় লালন করেছেন। রাব্বাইয়ানী ক্রিয়াটি — তারা আমাকে লালন করেছেন — প্রতিধ্বনি তোলে রাব্ব নামের, যিনি লালন করে পূর্ণতায় পৌঁছান; শব্দচয়নের এই মিল আলিমগণ বহুদিন ধরেই লক্ষ করেছেন। সন্তান প্রকৃত রব-এর কাছে চাইছে যেন তিনি তার পিতামাতার জন্য তা-ই করেন, যা তাঁরা মানুষের সীমিত সামর্থ্যে একদিন তার জন্য করেছিলেন।",
          },
          {
            en: "Note what is asked for. Not their health, not their comfort, not long life — mercy, which is what they will need most and what no child can provide. This is also the part of the command that outlives them. When parents have died, the tongue and the manner are no longer in play, but the du'a is — one of the few things a person can still send. Prophetic teaching preserved in Sahih Muslim names the supplication of a righteous child among the deeds that continue after death.",
            bn: "লক্ষ্য করুন কী চাওয়া হচ্ছে। তাঁদের স্বাস্থ্য নয়, আরাম নয়, দীর্ঘ আয়ুও নয় — বরং রহমত, যা তাঁদের সবচেয়ে বেশি প্রয়োজন হবে এবং যা কোনো সন্তান দিতে পারে না। আদেশের এই অংশটিই তাঁদের মৃত্যুর পরেও টিকে থাকে। পিতামাতা চলে গেলে জিহ্বা আর আচরণের প্রশ্ন থাকে না, কিন্তু দোয়া থাকে, আর মানুষ তখনো যে অল্প কয়টি জিনিস পাঠাতে পারে এটি তার একটি। সহীহ মুসলিমে সংরক্ষিত নবীর ﷺ শিক্ষা নেক সন্তানের দোয়াকে সেই আমলগুলোর মধ্যে গণ্য করে যা মৃত্যুর পরও চলতে থাকে।",
          },
        ],
      },
      {
        h: { en: "When Home Is Hard", bn: "যখন ঘরটাই কঠিন" },
        p: [
          {
            en: "Nothing in the wording makes the command conditional on the parents being easy, fair, or even believing. That is the hardest thing about the verse and it should be said plainly rather than softened. But the Quran itself sets the limit elsewhere: in 31:15, where parents strive to make a child associate partners with Allah, the instruction is do not obey them in that — and in the same breath, accompany them in this world with kindness. Obedience in a command is refused; kind treatment continues.",
            bn: "আয়াতের ভাষায় এমন কিছু নেই যা আদেশটিকে পিতামাতার সহজ, ন্যায়পরায়ণ বা এমনকি ঈমানদার হওয়ার শর্তে বাঁধে। এটিই আয়াতের সবচেয়ে কঠিন দিক, আর একে নরম করে না বলে স্পষ্টভাবেই বলা উচিত। তবে সীমাটি কুরআন নিজেই অন্যত্র টেনে দেয়: 31:15 আয়াতে, যেখানে পিতামাতা সন্তানকে আল্লাহর সাথে শরিক করাতে জোর করেন, নির্দেশ হলো সে বিষয়ে তাদের কথা মেনো না — আর একই নিঃশ্বাসে, দুনিয়ায় তাদের সাথে সদ্ভাবে চলো। নির্দিষ্ট আদেশে আনুগত্য প্রত্যাখ্যান করা হয়; সদাচরণ চলতে থাকে।",
          },
          {
            en: "That distinction carries a great deal. Birr, kind treatment, is owed; ta'ah, obedience in a particular instruction, is not owed where it means disobeying Allah, and the scholars have never read ihsan as a duty to accept harm. A person estranged from a parent for real reasons is not outside the verse. Speech that stays civil, help that is real but bounded, and the du'a of 17:24 remain open even where daily closeness is not possible or not safe.",
            bn: "এই পার্থক্যটি অনেক কিছু বহন করে। বির্র বা সদাচরণ প্রাপ্য; কিন্তু তা‘আত অর্থাৎ নির্দিষ্ট নির্দেশে আনুগত্য সেখানে প্রাপ্য নয় যেখানে তা আল্লাহর অবাধ্যতা মানে, আর আলিমগণ কখনোই ইহসানকে ক্ষতি মেনে নেওয়ার দায়িত্ব হিসেবে পড়েননি। বাস্তব কারণে পিতামাতা থেকে দূরে থাকা মানুষটিও আয়াতের বাইরে নয়। ভদ্র থাকা কথা, সীমিত কিন্তু সত্যিকারের সাহায্য, আর 17:24 আয়াতের দোয়া — এসব খোলা থাকে তখনো, যখন প্রতিদিনের ঘনিষ্ঠতা সম্ভব নয় বা নিরাপদ নয়।",
          },
        ],
      },
      {
        h: { en: "In Practice, and Today", bn: "আমল ও আজকের জীবন" },
        p: [
          {
            en: "The Sunnah puts this duty very high. In Sahih al-Bukhari, asked which deed is most beloved to Allah, the Prophet ﷺ named prayer at its time, then kindness to parents, then striving in the way of Allah — parents ranked above the battlefield. A man seeking permission to go out and fight was asked whether his parents were living and told to strive in serving them. Sahih Muslim records the warning that one whose parents reach old age and who does not thereby enter Paradise has been brought low.",
            bn: "সুন্নাহ এই দায়িত্বকে অত্যন্ত উঁচুতে রাখে। সহীহ বুখারীতে আছে, কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয় জিজ্ঞেস করা হলে নবী ﷺ বলেন সময়মতো নামাজ, তারপর পিতামাতার সাথে সদাচরণ, তারপর আল্লাহর পথে সংগ্রাম — অর্থাৎ পিতামাতা রণাঙ্গনেরও ওপরে। এক ব্যক্তি যুদ্ধে যাওয়ার অনুমতি চাইতে এলে তাকে জিজ্ঞেস করা হয় তার পিতামাতা জীবিত কি না, এবং বলা হয় তাদের সেবাতেই সংগ্রাম করতে। আর সহীহ মুসলিম সেই সতর্কবাণী সংরক্ষণ করেছে যে যার পিতামাতা বার্ধক্যে পৌঁছেছে অথচ সে এর মাধ্যমে জান্নাতে প্রবেশ করতে পারল না, সে লাঞ্ছিত হলো।",
          },
          {
            en: "Lived out now, it is mostly small and unglamorous. It is answering the same question again without the sigh. It is not finishing their sentences, not correcting their memory before guests, not treating the phone call as an interruption. It is a visit not attached to an errand. And where distance, illness or history make more impossible, it is the sentence taught at the end of 17:24, said honestly, on a day when nothing else could be done.",
            bn: "আজকের জীবনে এর রূপ বেশিরভাগই ছোট ও জৌলুসহীন। এটি একই প্রশ্নের উত্তর আবার দেওয়া, দীর্ঘশ্বাস ছাড়াই। এটি তাঁদের বাক্য শেষ করে না দেওয়া, অতিথিদের সামনে তাঁদের স্মৃতি শুধরে না দেওয়া, ফোনকলটিকে বিঘ্ন মনে না করা। এটি এমন এক সাক্ষাৎ যার সাথে কোনো কাজ জুড়ে নেই। আর যেখানে দূরত্ব, অসুস্থতা বা অতীত ইতিহাস এর বেশি কিছু অসম্ভব করে তোলে, সেখানে এটি 17:24 আয়াতের শেষে শেখানো সেই বাক্যটি — আন্তরিকভাবে বলা, এমন এক দিনে যেদিন আর কিছুই করার ছিল না।",
          },
        ],
      },
    ],
  },

  '29:69': {
    sections: [
      {
        h: { en: "The Last Verse of the Surah", bn: "সূরার শেষ আয়াত" },
        p: [
          {
            en: "This is where Surah al-Ankabut ends, and the ending answers its beginning. The surah opens by asking whether people suppose they will be left to say we believe and not be tested, in 29:2 — the verb is yuftanun, from fitnah, the assaying of metal in fire. Sixty-seven verses later, after the histories of Nuh, Ibrahim, Lut and Shu'ayb (AS), the surah closes not with relief from testing but with a promise attached to effort.",
            bn: "এখানেই সূরা আল-আনকাবূত শেষ হয়, আর এই শেষটি তার শুরুর জবাব দেয়। সূরার সূচনা প্রশ্ন করে, মানুষ কি মনে করে তাদের ছেড়ে দেওয়া হবে এই বলার পর যে আমরা ঈমান এনেছি, অথচ তাদের পরীক্ষা করা হবে না — 29:2 আয়াতে; ক্রিয়াটি ইউফতানূন, ফিতনা থেকে, যার মূল ছবি আগুনে ধাতু যাচাই। সাতষট্টি আয়াত পরে, নূহ, ইবরাহীম, লূত ও শুআইব (আঃ)-এর ইতিহাসের পর, সূরাটি শেষ হয় পরীক্ষা থেকে অব্যাহতির প্রতিশ্রুতি দিয়ে নয়, বরং প্রচেষ্টার সাথে যুক্ত এক প্রতিশ্রুতি দিয়ে।",
          },
          {
            en: "The surah was addressed largely to believers under pressure in Mecca, which is why 29:56 tells them My earth is spacious, so worship Me — a verse the commentators connect to migration. Nothing in the closing verse names a single occasion, and no sound report fixes one; it reads as a general law. Placed at the end of a surah about trial, it functions as the conclusion of an argument rather than as an isolated encouragement.",
            bn: "সূরাটি মূলত মক্কায় চাপে থাকা মুমিনদের উদ্দেশ্যে, আর এ কারণেই 29:56 তাদের বলে, আমার পৃথিবী প্রশস্ত, অতএব আমারই ইবাদত করো — মুফাসসিরগণ এই আয়াতকে হিজরতের সাথে যুক্ত করেন। শেষ আয়াতটি কোনো নির্দিষ্ট ঘটনার নাম করে না, আর কোনো সহীহ বর্ণনাও কোনো উপলক্ষ নির্দিষ্ট করে না; এটি একটি সাধারণ বিধান হিসেবেই পড়া হয়। পরীক্ষা নিয়ে লেখা একটি সূরার শেষে বসে এটি বিচ্ছিন্ন উৎসাহবাক্য নয়, বরং একটি যুক্তির উপসংহার হিসেবে কাজ করে।",
          },
        ],
      },
      {
        h: { en: "Those Who Strive in Us", bn: "যারা আমাদের পথে সংগ্রাম করে" },
        p: [
          {
            en: "The subject is alladhina jahadu fina. Jahada comes from juhd, the exertion of one's capacity — the same root that gives ijtihad, the scholar's straining after a ruling, and jihad in all its senses. Nothing in the verb restricts it to fighting. It covers the effort of getting up for fajr, of learning a language you find difficult, of holding a marriage together, of keeping money clean when the shortcut is available.",
            bn: "বাক্যের কর্তা হলো আল্লাযীনা জাহাদূ ফীনা। জাহাদা এসেছে জুহদ থেকে, অর্থাৎ নিজের সামর্থ্য নিংড়ে দেওয়া — একই ধাতু থেকে ইজতিহাদ, অর্থাৎ ফয়সালা বের করতে আলিমের পরিশ্রম, আর জিহাদ তার সব অর্থে। ক্রিয়াটির কিছুই একে যুদ্ধে সীমাবদ্ধ করে না। এটি ফজরে ওঠার প্রচেষ্টা, কঠিন লাগা একটি ভাষা শেখার প্রচেষ্টা, বিয়েটিকে টিকিয়ে রাখার প্রচেষ্টা, আর সহজ পথ হাতের নাগালে থাকা সত্ত্বেও উপার্জন হালাল রাখার প্রচেষ্টা — সবই ধারণ করে।",
          },
          {
            en: "Then fina, in Us. The Arabic does not say ilayna, towards Us, nor lana, for Us, though both would have been available. Fi carries the sense of being inside a thing — striving within Allah's cause, on His terms, inside what He has made lawful. The commentators take this preposition as the filter on the whole promise: the same physical effort, spent for a name or a reputation, is not what the verse is describing.",
            bn: "এরপর ফীনা, অর্থাৎ আমাদের মধ্যে। আরবি বলেনি ইলাইনা, আমাদের দিকে; বলেনি লানা, আমাদের জন্য — যদিও দুটিই ব্যবহার করা যেত। ফী শব্দটি কোনো কিছুর ভেতরে থাকার অর্থ বহন করে — আল্লাহর পথের ভেতরে থেকে, তাঁর শর্তে, তিনি যা বৈধ করেছেন তার সীমার ভেতরে সংগ্রাম করা। মুফাসসিরগণ এই অব্যয়টিকেই পুরো প্রতিশ্রুতির ছাঁকনি হিসেবে ধরেন: একই দৈহিক পরিশ্রম যদি নাম বা সুনামের জন্য ব্যয় হয়, আয়াত তার কথা বলছে না।",
          },
        ],
      },
      {
        h: { en: "A Promise Under Oath", bn: "শপথের মতো দৃঢ় প্রতিশ্রুতি" },
        p: [
          {
            en: "Lanahdiyannahum is one of the most heavily emphasised constructions Arabic has: an opening lam of emphasis and a doubled nun of confirmation attached to the verb, the pattern used for a sworn undertaking. Rendered flatly it means We will guide them; rendered with its force it means We shall most certainly guide them. When a promise is built this way, the sentence is not offering a likelihood.",
            bn: "লানাহদিয়ান্নাহুম আরবির সবচেয়ে জোরালো গঠনগুলোর একটি: শুরুতে জোর দেওয়ার লাম, আর ক্রিয়ার শেষে দ্বিত্ব নূন — যে ছাঁচ ব্যবহৃত হয় শপথসদৃশ অঙ্গীকারে। সাদামাটাভাবে অনুবাদ করলে অর্থ দাঁড়ায়, আমরা তাদের পথ দেখাব; কিন্তু তার পূর্ণ ভার নিয়ে অনুবাদ করলে অর্থ হয়, আমরা অবশ্যই অবশ্যই তাদের পথ দেখাব। প্রতিশ্রুতি যখন এভাবে গাঁথা হয়, তখন বাক্যটি নিছক সম্ভাবনার কথা বলছে না।",
          },
          {
            en: "The order of the two halves is the point most often drawn from the verse. Striving is mentioned in the past tense, guidance in the future. Guidance is what follows action, not what has to arrive before it. This is the direct answer to the common posture of waiting: waiting to feel certain before praying, waiting for a settled heart before starting to learn, waiting for clarity before making the first honest change. The verse reverses the sequence.",
            bn: "আয়াত থেকে সবচেয়ে বেশি যা টানা হয় তা হলো দুই অংশের ক্রম। সংগ্রামের কথা অতীত কালে, হিদায়াতের কথা ভবিষ্যতে। হিদায়াত হলো তা-ই যা কাজের পরে আসে, কাজের আগে যা পৌঁছাতেই হবে তা নয়। এটি সেই পরিচিত অপেক্ষার সরাসরি জবাব: নামাজ শুরুর আগে নিশ্চিত অনুভূতির অপেক্ষা, শেখা শুরুর আগে স্থির অন্তরের অপেক্ষা, প্রথম সৎ পরিবর্তনটির আগে স্পষ্টতার অপেক্ষা। আয়াত এই ক্রমটিকেই উল্টে দেয়।",
          },
        ],
      },
      {
        h: { en: "Paths, in the Plural", bn: "পথসমূহ, বহুবচনে" },
        p: [
          {
            en: "What is promised is subulana, Our paths — plural, and possessive. This is worth setting beside 6:153, where the sirat mustaqim, the straight path, is singular and the other ways are warned against, and beside the daily request of 1:6, guide us to the straight path. The destination is one; the routes into it are many. Sabil in Arabic is a travelled way, a road worn by use, not an abstraction.",
            bn: "যা প্রতিশ্রুত তা হলো সুবুলানা, আমাদের পথসমূহ — বহুবচন, আর সম্বন্ধযুক্ত। একে পাশে রাখা দরকার 6:153 আয়াতের, যেখানে সিরাতে মুস্তাকীম বা সরল পথ একবচন এবং অন্য পথগুলো থেকে সতর্ক করা হয়েছে, আর 1:6 আয়াতের প্রতিদিনের প্রার্থনার পাশে — আমাদের সরল পথ দেখান। গন্তব্য এক; সেখানে পৌঁছার রাস্তা বহু। আরবিতে সাবীল মানে চলাচলের রাস্তা, ব্যবহারে ক্ষয়ে যাওয়া পথ — কোনো বিমূর্ত ধারণা নয়।",
          },
          {
            en: "The commentators read the plural generously: paths of knowledge, of worship, of earning, of service, opened to different people according to what they gave. It also implies that the guidance promised is not a single flash but a succession of openings. Act on the light you have and the next stretch of road becomes visible; act on that, and so on. Guidance in this verse is cumulative, and each instalment is earned by using the last one.",
            bn: "মুফাসসিরগণ বহুবচনটিকে উদারভাবে পড়েন: জ্ঞানের পথ, ইবাদতের পথ, উপার্জনের পথ, সেবার পথ — যে যা দিয়েছে সে অনুযায়ী ভিন্ন মানুষের জন্য খুলে যায়। এতে এ-ও বোঝায় যে প্রতিশ্রুত হিদায়াত একটিমাত্র ঝলক নয়, বরং পর পর খুলে যাওয়া দরজার ধারা। হাতে থাকা আলোয় আমল করো, রাস্তার পরের অংশটুকু দৃশ্যমান হবে; তাতে আমল করো, আবার তেমনই। এই আয়াতে হিদায়াত ক্রমসঞ্চিত, আর প্রতিটি কিস্তি অর্জিত হয় আগেরটি কাজে লাগানোর মধ্য দিয়ে।",
          },
        ],
      },
      {
        h: { en: "And Allah Is With the Muhsinin", bn: "আর আল্লাহ মুহসিনদের সাথে" },
        p: [
          {
            en: "The closing clause changes register: wa inna Allaha lama'a al-muhsinin. The commentators distinguish two kinds of withness in the Quran. There is the general one, by which Allah is with everyone through His knowledge — He is with you wherever you are. And there is the special one, promised to particular people, which carries help, protection and steadying. This second sense is what the verse ends on, and it is not offered to everyone who exerts himself.",
            bn: "শেষ বাক্যাংশে সুর বদলায়: ওয়া ইন্না আল্লাহা লামা‘আল-মুহসিনীন। মুফাসসিরগণ কুরআনে দুই ধরনের ‘সঙ্গে থাকা’ আলাদা করেন। একটি সাধারণ, যার মাধ্যমে আল্লাহ তাঁর জ্ঞানে সবার সাথেই আছেন — তোমরা যেখানেই থাকো তিনি তোমাদের সাথে। আর একটি বিশেষ, যা নির্দিষ্ট মানুষদের প্রতিশ্রুত, আর যা সাহায্য, সুরক্ষা ও স্থিরতা বহন করে। আয়াত শেষ হয় এই দ্বিতীয় অর্থেই, আর তা পরিশ্রমকারী প্রত্যেককে দেওয়া হয় না।",
          },
          {
            en: "It is offered to the muhsinin, those who practise ihsan — doing the right thing and doing it beautifully, with the awareness that Allah sees. So the verse binds two things that are often separated: strive, and strive well. Effort that is loud, resentful or careless is not what is being described. The last word of the surah is not a demand at all but a companionship, which is what a persecuted community reading this in Mecca most needed to hear.",
            bn: "তা দেওয়া হয় মুহসিনদের, যাঁরা ইহসান চর্চা করেন — সঠিক কাজটি করা এবং সুন্দরভাবে করা, এই সচেতনতা নিয়ে যে আল্লাহ দেখছেন। ফলে আয়াতটি প্রায়ই আলাদা করে ফেলা দুটি জিনিসকে একসাথে বাঁধে: সংগ্রাম করো, আর ভালোভাবে সংগ্রাম করো। উচ্চকিত, ক্ষুব্ধ কিংবা অযত্নের পরিশ্রমের কথা এখানে বলা হচ্ছে না। সূরার শেষ কথাটি আদৌ কোনো দাবি নয়, বরং সাহচর্য — মক্কায় নিপীড়িত এক সমাজের এটাই সবচেয়ে বেশি শোনার দরকার ছিল।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "The practical reading is unusually direct. Take the smallest obligation you already know and are avoiding, and do that one. The verse does not promise guidance to those who research it, discuss it, or intend it strongly; it promises guidance to those who strove. For most people the first striving is not dramatic — it is the prayer prayed on time instead of late, the debt repaid, the apology made, the page of Arabic learnt this week rather than next year.",
            bn: "বাস্তব প্রয়োগ অস্বাভাবিক রকম সোজা। আপনি ইতিমধ্যেই জানেন অথচ এড়িয়ে চলছেন এমন ক্ষুদ্রতম দায়িত্বটি নিন, আর সেটিই করুন। আয়াত তাদের হিদায়াতের প্রতিশ্রুতি দেয় না যারা এ নিয়ে গবেষণা করে, আলোচনা করে বা প্রবল ইচ্ছা পোষণ করে; প্রতিশ্রুতি তাদের জন্য যারা সংগ্রাম করেছে। বেশিরভাগ মানুষের প্রথম সংগ্রামটি নাটকীয় কিছু নয় — দেরিতে নয়, সময়মতো পড়া নামাজ; শোধ করা ঋণ; করা ক্ষমাপ্রার্থনা; আগামী বছর নয়, এই সপ্তাহে শেখা আরবির একটি পৃষ্ঠা।",
          },
          {
            en: "It also reframes a plateau. Long stretches where nothing seems to open are usually read as abandonment; the verse suggests reading them as a question about input. And the last clause guards against the opposite error, of measuring yourself by visible results. Being with the doers of good is stated in the present tense, with no condition about outcome. The company is granted while the striving is going on, not only when it has succeeded.",
            bn: "এটি স্থবিরতার সময়টিকেও নতুন করে দেখায়। দীর্ঘ সময় যখন কিছুই খুলছে বলে মনে হয় না, তখন সাধারণত তা পরিত্যক্ত হওয়ার লক্ষণ বলে পড়া হয়; আয়াত ইঙ্গিত দেয় একে বরং প্রশ্ন হিসেবে পড়তে — কী দিচ্ছি আমি? আর শেষ বাক্যাংশটি উল্টো ভুল থেকেও রক্ষা করে, অর্থাৎ দৃশ্যমান ফল দিয়ে নিজেকে মাপার ভুল থেকে। সৎকর্মশীলদের সাথে থাকার কথাটি বর্তমান কালে বলা, ফলাফল নিয়ে কোনো শর্ত ছাড়াই। সাহচর্য দেওয়া হয় সংগ্রাম চলাকালেই, কেবল সফল হওয়ার পরে নয়।",
          },
        ],
      },
    ],
  },
  '57:20': {
    sections: [
      {
        h: { en: "Know: an Order to Look", bn: "জেনে রাখো: তাকানোর আদেশ" },
        p: [
          {
            en: "The verse begins with a command, not a description: i'lamu, know. What follows is not offered for consideration but set down as information a person is required to hold. Annama al-hayat ad-dunya, that the life of this world is — and here the Arabic uses annama, the restrictive particle, so the sense is that worldly life is nothing but what the list names. The reader is being told to look at something he already sees, and to name it correctly.",
            bn: "আয়াত শুরু হয় একটি আদেশ দিয়ে, বর্ণনা দিয়ে নয়: ই‘লামূ — জেনে রাখো। এরপর যা আসে তা বিবেচনার জন্য পেশ করা হচ্ছে না, বরং এমন তথ্য হিসেবে রাখা হচ্ছে যা মানুষকে ধারণ করতেই হবে। আন্নামাল-হায়াতুদ-দুনইয়া, যে পার্থিব জীবন হলো — এখানে আরবি ব্যবহার করে আন্নামা, সীমাবদ্ধকারী অব্যয়; ফলে অর্থ দাঁড়ায়, পার্থিব জীবন এই তালিকার বাইরে আর কিছুই নয়। পাঠককে বলা হচ্ছে সে যা প্রতিদিন দেখছে তারই দিকে তাকাতে, আর তার নামটি ঠিকভাবে বলতে।",
          },
          {
            en: "Five words follow. La'ib, play. Lahw, diversion, the thing that distracts you from what matters. Zinah, adornment, surface decoration. Tafakhur baynakum, mutual boasting between you — the competitive display that needs an audience. And takathur fil-amwali wal-awlad, piling up more in wealth and children. None of the five is a sin in itself, and the verse does not call them sins. They are named as what the whole of a life amounts to when nothing beyond it is intended.",
            bn: "এরপর আসে পাঁচটি শব্দ। লা‘ইব, খেলা। লাহও, মনোযোগ সরানো আমোদ — যা তোমাকে গুরুত্বপূর্ণ বিষয় থেকে সরায়। যীনাহ, শোভা, বাহ্যিক সাজ। তাফাখুর বাইনাকুম, তোমাদের পারস্পরিক গর্ব — সেই প্রতিযোগিতামূলক প্রদর্শনী যার দর্শক লাগে। আর তাকাসুর ফিল-আমওয়ালি ওয়াল-আওলাদ, সম্পদ ও সন্তানে বেশি বেশি জমানো। এই পাঁচটির একটিও নিজে থেকে পাপ নয়, আর আয়াত এগুলোকে পাপ বলেও না। এগুলোর নাম নেওয়া হয়েছে এই অর্থে যে, এর বাইরে কিছুই উদ্দিষ্ট না থাকলে গোটা একটি জীবন এসবেই দাঁড়ায়।",
          },
        ],
      },
      {
        h: { en: "Five Words, One Lifetime", bn: "পাঁচ শব্দ, এক জীবন" },
        p: [
          {
            en: "The commentators often read the five in order, as the stages of a single life: a child plays, a youth is taken up with diversion, a young adult with appearance, a man in middle life with rank among his peers, and an older man with accumulating for his children. Read that way the verse is not a catalogue of vices but a biography — everyone's, compressed into one line, with the whole arc ending in the same place.",
            bn: "মুফাসসিরগণ প্রায়ই এই পাঁচটিকে ক্রমানুসারে পড়েন, একটি জীবনের ধাপ হিসেবে: শিশু খেলে, তরুণ আমোদে মজে, যুবক চেহারা-সাজে ব্যস্ত, মধ্যবয়সী নিজের মহলে মর্যাদা নিয়ে, আর প্রবীণ সন্তানদের জন্য জমাতে ব্যস্ত। এভাবে পড়লে আয়াতটি পাপের তালিকা নয়, বরং একটি জীবনী — সবারই জীবনী, এক পঙ্‌ক্তিতে সংকুচিত, আর গোটা যাত্রার শেষ একই জায়গায়।",
          },
          {
            en: "It is worth noticing what the list leaves out. Prayer, knowledge, justice, mercy, the raising of children in faith — none of these appear among the five, because none of them belongs to al-hayat ad-dunya in the sense meant here. The same actions can belong to either column depending on what they are for. A man may build wealth as takathur or as a trust; the verse gives no way of telling from the outside.",
            bn: "তালিকা থেকে কী বাদ পড়েছে, তা লক্ষ্য করার মতো। নামাজ, জ্ঞান, ন্যায়বিচার, দয়া, ঈমানের সাথে সন্তান গড়ে তোলা — এর কোনোটিই পাঁচটির মধ্যে নেই, কারণ এখানে যে অর্থে ‘আল-হায়াতুদ-দুনইয়া’ বলা হয়েছে, তার অন্তর্ভুক্ত এগুলো নয়। একই কাজ উদ্দেশ্যভেদে যেকোনো এক ঘরে পড়তে পারে। কেউ সম্পদ গড়তে পারে তাকাসুর হিসেবে, আবার আমানত হিসেবেও; বাইরে থেকে দেখে তা বোঝার কোনো উপায় আয়াত দেয় না।",
          },
        ],
      },
      {
        h: { en: "The Rain That Impressed the Farmers", bn: "যে বৃষ্টি কৃষকদের মুগ্ধ করেছিল" },
        p: [
          {
            en: "Then the image: like a ghayth, a rain that brings life, whose growth delights al-kuffar. Here the commentators make a point every student of Arabic should hear. Kafara means to cover, and al-kuffar in this verse is used in its root sense of the sowers, the tillers who cover seed with soil. The very word that elsewhere names those who cover the truth is used here for farmers standing in a green field, pleased with what has come up.",
            bn: "এরপর চিত্রটি: গায়সের মতো, প্রাণদায়ী এক বৃষ্টি, যার উদ্ভিদ আল-কুফ্ফারকে মুগ্ধ করে। এখানে মুফাসসিরগণ এমন একটি কথা বলেন যা আরবির প্রতিটি শিক্ষার্থীর শোনা দরকার। কাফারা মানে ঢেকে ফেলা, আর এই আয়াতে আল-কুফ্ফার ব্যবহৃত হয়েছে তার মূল অর্থে — বীজ বপনকারী, যারা মাটি দিয়ে বীজ ঢেকে দেয়। যে শব্দটি অন্যত্র সত্য-আচ্ছাদনকারীদের নাম, তা এখানে ব্যবহৃত হয়েছে সবুজ ক্ষেতে দাঁড়ানো, ফলন দেখে খুশি কৃষকদের জন্য।",
          },
          {
            en: "Then the collapse, in three quick verbs. Thumma yahiju, then it dries; fa-tarahu musfarran, and you see it turned yellow; thumma yakunu hutaman, then it becomes hutam, broken stalk and chaff. Notice that you are made to watch: tarahu, you see it. The parable does not describe destruction from outside but the ordinary, unremarkable yellowing that anyone who has walked past a field in late summer has already witnessed without drawing the conclusion.",
            bn: "এরপর ধস, তিনটি দ্রুত ক্রিয়ায়। সুম্মা ইয়াহীজু, তারপর তা শুকায়; ফাতারাহু মুসফাররান, আর তুমি দেখো তা হলুদ হয়ে গেছে; সুম্মা ইয়াকূনু হুতামা, তারপর তা হয়ে যায় হুতাম — ভাঙা খড় ও তুষ। লক্ষ্য করুন, তোমাকে দেখতে বাধ্য করা হচ্ছে: তারাহু, তুমি তা দেখো। উপমাটি বাইরে থেকে আসা ধ্বংসের বর্ণনা নয়, বরং সেই সাধারণ, চোখে না পড়া হলুদ হয়ে যাওয়ার বর্ণনা, যা গ্রীষ্মের শেষে ক্ষেতের পাশ দিয়ে হেঁটে যাওয়া প্রত্যেকেই দেখেছে অথচ সিদ্ধান্তে পৌঁছায়নি।",
          },
        ],
      },
      {
        h: { en: "Where It Sits in al-Hadid", bn: "আল-হাদীদে এর অবস্থান" },
        p: [
          {
            en: "Surah al-Hadid is largely about money and what a community does with it. It asks why believers do not spend in the way of Allah when to Allah belongs the inheritance of the heavens and the earth (57:10), and repeatedly invites a qard hasan, a goodly loan advanced to Allah Himself. In the middle of that argument comes 57:16, the famous question: has the time not come for the believers that their hearts should be humbled to the remembrance of Allah?",
            bn: "সূরা আল-হাদীদ মূলত সম্পদ এবং সমাজ তা নিয়ে কী করে, সে বিষয়ে। এটি প্রশ্ন করে, মুমিনরা কেন আল্লাহর পথে খরচ করে না, অথচ আসমান ও জমিনের উত্তরাধিকার আল্লাহরই (57:10), আর বারবার আহ্বান করে কর্জে হাসানা-র দিকে, অর্থাৎ স্বয়ং আল্লাহকে দেওয়া উত্তম ঋণের দিকে। সেই আলোচনার মাঝখানেই আসে 57:16, সেই বিখ্যাত প্রশ্ন: মুমিনদের জন্য কি সময় আসেনি যে তাদের অন্তর আল্লাহর স্মরণে বিনীত হবে?",
          },
          {
            en: "So the withering field is not a piece of general pessimism dropped into the surah. It is the argument for spending. And the verse that follows, 57:21, turns the whole passage outward: race towards forgiveness from your Lord and a garden whose breadth is like the breadth of the heaven and the earth. Competition is not forbidden; it is redirected. The same instinct that produced tafakhur and takathur is handed a field wide enough to be worth running in.",
            bn: "তাই শুকিয়ে যাওয়া ক্ষেতের ছবিটি সূরার ভেতরে ছুড়ে দেওয়া কোনো সাধারণ হতাশাবাদ নয়। এটি খরচ করার পক্ষে যুক্তি। আর পরের আয়াত 57:21 গোটা অংশটিকে বাইরের দিকে ঘুরিয়ে দেয়: তোমরা প্রতিযোগিতা করো তোমাদের রবের ক্ষমার দিকে ও এমন এক জান্নাতের দিকে যার প্রশস্ততা আসমান ও জমিনের প্রশস্ততার মতো। প্রতিযোগিতা নিষিদ্ধ নয়; তার দিক বদলে দেওয়া হয়েছে। যে প্রবৃত্তি তাফাখুর ও তাকাসুর তৈরি করেছিল, তাকে এমন এক ময়দান দেওয়া হলো যেখানে দৌড়ানোর মতো জায়গা আছে।",
          },
        ],
      },
      {
        h: { en: "Two Mercies Against One Punishment", bn: "এক শাস্তির বিপরীতে দুই রহমত" },
        p: [
          {
            en: "The second half of the verse sets the Hereafter beside all this: and in the Hereafter there is a severe punishment, and forgiveness from Allah, and ridwan. The balance is not even, and the imbalance is deliberate. One item of dread is named; two of mercy follow it, and the second, ridwan, His good pleasure, is what the commentators treat as the summit of everything promised — greater than the garden, because it is the Giver's approval rather than the gift.",
            bn: "আয়াতের দ্বিতীয়ার্ধ এসবের পাশে আখিরাতকে রাখে: আর আখিরাতে আছে কঠিন শাস্তি, আর আল্লাহর পক্ষ থেকে ক্ষমা ও রিদওয়ান। ভারসাম্যটি সমান নয়, আর এই অসমতা উদ্দেশ্যমূলক। ভয়ের একটি বিষয় উল্লেখ করা হলো; রহমতের দুটি তার পরে এলো, আর দ্বিতীয়টি — রিদওয়ান, তাঁর সন্তুষ্টি — মুফাসসিরদের কাছে প্রতিশ্রুত সবকিছুর শীর্ষবিন্দু; জান্নাতের চেয়েও বড়, কারণ এটি দান নয়, দাতার সন্তুষ্টি।",
          },
          {
            en: "The closing phrase is precise: wa ma al-hayat ad-dunya illa mata' al-ghurur. The world is not called ghurur, delusion; it is called mata' al-ghurur, the enjoyment of delusion — goods that deceive the one who takes them for the whole. Mata' is the word for provisions carried on a journey, useful and real. The Quran is not condemning the field, the rain or the crop. It is correcting an estimate of how long they last.",
            bn: "শেষ বাক্যাংশটি নিখুঁত: ওয়া মাল-হায়াতুদ-দুনইয়া ইল্লা মাতা‘উল-গুরূর। দুনিয়াকে গুরূর অর্থাৎ প্রতারণা বলা হয়নি; বলা হয়েছে মাতা‘উল-গুরূর, প্রতারণার ভোগ্যসামগ্রী — এমন সম্বল যা তাকেই ধোঁকা দেয় যে একে সবটুকু বলে ধরে নেয়। মাতা‘ শব্দটি সফরে বহন করা পাথেয়র জন্য ব্যবহৃত হয় — উপযোগী ও বাস্তব। কুরআন ক্ষেত, বৃষ্টি বা ফসলের নিন্দা করছে না। এটি কেবল শুধরে দিচ্ছে সেগুলো কতদিন টেকে সেই হিসাবটিকে।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "Lived honestly, this verse is not an argument for owning little. It is an argument for knowing what you are looking at. A useful test is the one the verse itself supplies: does this purchase, post or promotion still make sense if nobody sees it? Tafakhur needs an audience; takathur needs a comparison. Strip both away and much of what feels urgent turns out to have been about other people all along.",
            bn: "সৎভাবে বাঁচলে এই আয়াত কম মালিকানার পক্ষে যুক্তি নয়। এটি যুক্তি এই বিষয়ে যে তুমি কী দেখছ তা জানতে হবে। আয়াত নিজেই একটি কাজের পরীক্ষা দেয়: এই কেনাকাটা, এই পোস্ট বা এই পদোন্নতি কেউ না দেখলেও কি অর্থবহ থাকে? তাফাখুরের দর্শক লাগে; তাকাসুরের লাগে তুলনা। দুটোই সরিয়ে দিলে দেখা যায়, যা এত জরুরি মনে হচ্ছিল তার অনেকটাই আসলে অন্য মানুষদের নিয়েই ছিল।",
          },
          {
            en: "The surah's own answer is spending. Something given away has been moved out of the crop that yellows and into what 57:21 calls the race. In practice that is a fixed portion set aside before the month's spending rather than after it, a debt forgiven, fees paid quietly for someone else's child. And when a loss does come, the parable is already there to be used: the field was always going to turn. Grief at that is human. Surprise at it is what the verse is trying to remove.",
            bn: "সূরার নিজের উত্তর হলো খরচ করা। যা দান করা হলো তা হলুদ হয়ে যাওয়া ফসল থেকে সরিয়ে 57:21 যাকে দৌড় বলে তার ভেতরে রাখা হলো। বাস্তবে এর মানে মাসের খরচের পরে নয়, আগেই আলাদা করে রাখা একটি নির্দিষ্ট অংশ; মাফ করে দেওয়া একটি ঋণ; নীরবে দিয়ে দেওয়া অন্যের সন্তানের বেতন। আর যখন সত্যিই ক্ষতি আসে, উপমাটি ব্যবহারের জন্য প্রস্তুত: ক্ষেত তো হলুদ হতোই। তাতে দুঃখ পাওয়া মানুষেরই স্বভাব। কিন্তু বিস্মিত হওয়া — আয়াত ঠিক সেটিই সরিয়ে দিতে চায়।",
          },
        ],
      },
    ],
  },

  '59:21': {
    sections: [
      {
        h: { en: "A Sentence That Never Happened", bn: "যে বাক্য কখনো ঘটেনি" },
        p: [
          {
            en: "The verse opens with law, the Arabic particle for a condition contrary to fact — if We had sent down this Quran upon a mountain. Law tells the listener before the sentence finishes that this did not occur and will not. What follows is therefore not a warning about mountains. It is a thought experiment, and the Quran conducts it in order to measure something else entirely.",
            bn: "আয়াত শুরু হয় লাও দিয়ে, আরবির সেই অব্যয় যা এমন শর্ত বোঝায় যা বাস্তবে ঘটেনি — যদি আমরা এই কুরআন কোনো পাহাড়ের ওপর নাযিল করতাম। লাও শ্রোতাকে বাক্য শেষ হওয়ার আগেই জানিয়ে দেয় যে এটি ঘটেনি এবং ঘটবেও না। তাই এরপর যা আসে তা পাহাড় নিয়ে কোনো সতর্কবাণী নয়। এটি একটি চিন্তার পরীক্ষা, আর কুরআন তা চালায় সম্পূর্ণ ভিন্ন কিছু মাপার জন্য।",
          },
          {
            en: "The choice of a mountain is not decoration. In the Quran mountains are the standing image of immovability; 78:7 calls them awtad, pegs driven into the earth. The heaviest, least impressionable thing in creation is put forward as the test subject, so that what happens to it can be read as a lower bound rather than an exceptional case.",
            bn: "পাহাড় বেছে নেওয়া কেবল অলংকার নয়। কুরআনে পাহাড় অটলতার স্থায়ী প্রতীক; 78:7 আয়াতে এগুলোকে বলা হয়েছে আওতাদ, অর্থাৎ জমিনে গেঁথে দেওয়া গোঁজ। সৃষ্টির সবচেয়ে ভারী, সবচেয়ে কম প্রভাবিত হওয়া বস্তুটিকেই পরীক্ষার বিষয় করা হয়েছে, যাতে তার সাথে যা ঘটে তা ব্যতিক্রম নয়, বরং সর্বনিম্ন সীমা হিসেবে পড়া যায়।",
          },
        ],
      },
      {
        h: { en: "Humbled and Split Apart", bn: "বিনীত ও বিদীর্ণ" },
        p: [
          {
            en: "You would have seen it khashi'an mutasaddi'an. The first word is the one that matters most to a worshipper. Khashi' is from khushu', the inward stillness and lowering that 23:2 makes the mark of successful believers in their prayer. The mountain is described doing exactly what the believer is commanded to do when he stands in salah. The comparison is not between a mountain and a rock; it is between a mountain and you.",
            bn: "তুমি তাকে দেখতে খাশি‘আন মুতাসাদ্দি‘আন। প্রথম শব্দটিই একজন মুসল্লির জন্য সবচেয়ে গুরুত্বপূর্ণ। খাশি‘ এসেছে খুশূ‘ থেকে, সেই অন্তরের স্থিরতা ও নত হওয়া, যা 23:2 আয়াতে সফল মুমিনদের নামাজের চিহ্ন হিসেবে বলা হয়েছে। পাহাড়কে বর্ণনা করা হচ্ছে ঠিক সেই কাজ করতে দেখা যাচ্ছে যা মুমিনকে নামাজে দাঁড়িয়ে করতে বলা হয়েছে। তুলনাটি পাহাড় আর পাথরের মধ্যে নয়; তুলনাটি পাহাড় আর তোমার মধ্যে।",
          },
          {
            en: "Mutasaddi' comes from sad', a fissure — the word for a crack running through something solid. The form used carries the sense of splitting apart progressively, not shattering in an instant. And this is not without precedent in the Quran: in 7:143, when Allah manifested to the mountain for Musa (AS), it was made level and Musa fell down senseless. A mountain has come apart before, and the Quran is reminding a reader who knows that story.",
            bn: "মুতাসাদ্দি‘ এসেছে সাদ‘ থেকে, অর্থাৎ ফাটল — শক্ত কিছুর ভেতর দিয়ে চলে যাওয়া চিড়। ব্যবহৃত রূপটি ক্রমশ বিদীর্ণ হওয়ার অর্থ বহন করে, এক নিমেষে চূর্ণ হওয়ার নয়। আর কুরআনে এর নজিরও আছে: 7:143 আয়াতে, যখন আল্লাহ মূসা (আঃ)-এর জন্য পাহাড়ের প্রতি তাজাল্লি প্রকাশ করেন, তখন তা চূর্ণ-বিচূর্ণ হয়ে যায় এবং মূসা সংজ্ঞা হারিয়ে পড়ে যান। পাহাড় আগেও বিদীর্ণ হয়েছে, আর কুরআন সেই ঘটনা-জানা পাঠককেই মনে করিয়ে দিচ্ছে।",
          },
        ],
      },
      {
        h: { en: "Min Khashyat Allah", bn: "মিন খাশইয়াতিল্লাহ" },
        p: [
          {
            en: "The cause is given as min khashyat Allah, out of awe of Allah. Arabic distinguishes khashyah from khawf. Khawf is fear of a thing that may harm you; khashyah is the awe that comes from knowing what you stand before, and it grows with knowledge rather than with ignorance. That is why 35:28 says that it is only those of His servants who have knowledge who have khashyah of Allah.",
            bn: "কারণ হিসেবে বলা হয়েছে মিন খাশইয়াতিল্লাহ, আল্লাহর ভয়ে। আরবি খাশইয়াহ ও খাওফকে আলাদা করে। খাওফ হলো ক্ষতি করতে পারে এমন কিছুর ভয়; খাশইয়াহ হলো সেই বিস্ময়মিশ্রিত ভয় যা জন্মায় কার সামনে দাঁড়িয়ে আছ তা জানা থেকে, আর তা অজ্ঞতায় নয়, জ্ঞানে বাড়ে। এ কারণেই 35:28 বলে, আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে খাশইয়াহ করে।",
          },
          {
            en: "Read with that distinction, the verse stops being an accusation and becomes a diagnosis. The mountain would tremble because it would apprehend what had been placed on it. A heart that hears the same words and stays flat is not being called wicked; it is being shown that it has not yet grasped what it is holding. The remedy the verse implies is understanding, which is exactly what its second half goes on to ask for.",
            bn: "এই পার্থক্য মাথায় রেখে পড়লে আয়াতটি আর অভিযোগ থাকে না, রোগনির্ণয় হয়ে ওঠে। পাহাড় কাঁপত, কারণ তার ওপর কী রাখা হয়েছে তা সে উপলব্ধি করত। যে হৃদয় একই বাণী শুনেও নিস্তরঙ্গ থাকে, তাকে দুষ্ট বলা হচ্ছে না; তাকে দেখানো হচ্ছে যে সে যা ধারণ করছে তা এখনো ধরতে পারেনি। আয়াত যে প্রতিকারের ইঙ্গিত দেয় তা হলো উপলব্ধি — আর দ্বিতীয়ার্ধ ঠিক সেটিই চায়।",
          },
        ],
      },
      {
        h: { en: "Placed Between Two Mirrors", bn: "দুই আয়নার মাঝখানে" },
        p: [
          {
            en: "Surah al-Hashr takes its name from the gathering and expulsion of Banu Nadir, which the opening verses describe. But by 59:18 the surah has turned inward: fear Allah, and let every soul look at what it has sent ahead for tomorrow. Then 59:19 warns against being like those who forgot Allah, so He made them forget themselves — a line the commentators read as the exact description of a numb heart.",
            bn: "সূরা আল-হাশরের নাম এসেছে বনু নাযীরের সমবেত করা ও বহিষ্কারের ঘটনা থেকে, যা শুরুর আয়াতগুলোতে বর্ণিত। কিন্তু 59:18 আয়াতে পৌঁছে সূরাটি ভেতরের দিকে ঘুরে যায়: আল্লাহকে ভয় করো, আর প্রত্যেক ব্যক্তি যেন দেখে সে আগামীকালের জন্য কী পাঠিয়েছে। এরপর 59:19 সতর্ক করে তাদের মতো হওয়া থেকে যারা আল্লাহকে ভুলে গেছে, ফলে তিনি তাদের নিজেদেরই ভুলিয়ে দিয়েছেন — মুফাসসিরগণ এই বাক্যটিকে অসাড় হৃদয়ের নিখুঁত বর্ণনা হিসেবে পড়েন।",
          },
          {
            en: "Immediately after our verse come 59:22-24, the great passage of the divine names: He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed, the Sovereign, the Pure, the Source of peace. So 59:21 is the hinge. Behind it, look at your own heart; ahead of it, look at your Lord. No sound report attaches an occasion of revelation to this verse in particular; it is general, addressed to whoever is holding the Book.",
            bn: "আমাদের আয়াতের ঠিক পরেই আসে 59:22-24, আল্লাহর নামসমূহের সেই মহান অংশ: তিনিই আল্লাহ, যিনি ছাড়া কোনো উপাস্য নেই, গায়েব ও প্রকাশ্যের জ্ঞানী, বাদশাহ, পবিত্র, শান্তির উৎস। তাই 59:21 হলো কব্জা। এর পেছনে — নিজের হৃদয়ের দিকে তাকাও; সামনে — নিজের রবের দিকে তাকাও। এই আয়াতটির সাথে বিশেষভাবে কোনো সহীহ শানে নুযূল যুক্ত নেই; এটি সাধারণ, আর যে-ই কিতাবটি হাতে ধরেছে তার উদ্দেশ্যেই বলা।",
          },
        ],
      },
      {
        h: { en: "The Purpose Clause", bn: "উদ্দেশ্য-বাক্যাংশ" },
        p: [
          {
            en: "The verse does not end with the mountain. It adds: and these are the parables We set forth for people, la'allahum yatafakkarun, so that they may reflect. Amthal, parables, are stated here to have a function, and the function is thought. The mountain is not offered as a feeling to be produced on demand but as a comparison to be worked through until it changes an estimate.",
            bn: "আয়াত পাহাড় দিয়ে শেষ হয় না। এরপর যোগ হয়: আর এসব উপমা আমরা মানুষের জন্য পেশ করি, লা‘আল্লাহুম ইয়াতাফাক্কারূন, যাতে তারা চিন্তা করে। আমসাল বা উপমার এখানে একটি কাজ নির্ধারণ করা হয়েছে, আর সেই কাজ হলো চিন্তা। পাহাড়কে হাজির করা হয়নি চাহিদামতো তৈরি করা কোনো অনুভূতি হিসেবে, বরং এমন এক তুলনা হিসেবে যা ভেবে ভেবে এগোতে হয়, যতক্ষণ না তা কোনো হিসাব বদলে দেয়।",
          },
          {
            en: "This matters for how the verse should be used on oneself. It is not asking a reader to manufacture tears. Tafakkur is deliberate, slow and repeatable: pause on a line, ask who is speaking and to whom, and consider what would change if it were taken as literally true. The commentators treat this closing clause as the instruction manual for everything the surah has just said.",
            bn: "নিজের ওপর আয়াতটি কীভাবে প্রয়োগ করা হবে, এর জন্য কথাটি জরুরি। এটি পাঠককে কান্না বানাতে বলছে না। তাফাক্কুর ধীর, ইচ্ছাকৃত ও পুনরাবৃত্তিযোগ্য: একটি পঙ্‌ক্তিতে থামো, জিজ্ঞেস করো কে বলছেন এবং কাকে, আর ভাবো এটিকে আক্ষরিকভাবে সত্য ধরলে কী বদলাত। মুফাসসিরগণ এই শেষ বাক্যাংশটিকে সূরার এতক্ষণের সব কথার ব্যবহারবিধি হিসেবেই দেখেন।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "Most people meet this verse with a private embarrassment: they have read the Quran for years and felt very little. The verse itself is gentler than that reaction. It does not say a hard heart is beyond help; it says a mountain would respond, and then immediately hands the reader a method — reflect. The gap between the mountain and us is a gap in attention, and attention can be trained.",
            bn: "বেশিরভাগ মানুষ এই আয়াতের সামনে এক ধরনের ব্যক্তিগত লজ্জা নিয়ে দাঁড়ায়: বছরের পর বছর কুরআন পড়েও তারা খুব সামান্যই অনুভব করেছে। আয়াত নিজে অবশ্য সেই প্রতিক্রিয়ার চেয়ে অনেক নরম। এটি বলে না যে কঠিন হৃদয় নিরাময়ের বাইরে; এটি বলে পাহাড় সাড়া দিত, আর সঙ্গে সঙ্গেই পাঠকের হাতে একটি পদ্ধতি তুলে দেয় — চিন্তা করো। পাহাড় ও আমাদের মধ্যকার ফাঁকটি মনোযোগের ফাঁক, আর মনোযোগ অভ্যাসে গড়া যায়।",
          },
          {
            en: "Concretely: slow the pace. Read five verses with the translation instead of a page without it. Recite one passage in prayer for a week until the words stop passing unnoticed. Learn the meanings of the words you say most often, since a language-learner has an advantage here that a fluent reciter can lose. None of that guarantees a feeling, and the verse never promises one. What it asks for is that the Book be handled as what it is.",
            bn: "বাস্তবে: গতি কমান। এক পৃষ্ঠা অনুবাদ ছাড়া পড়ার বদলে পাঁচটি আয়াত অনুবাদসহ পড়ুন। এক সপ্তাহ ধরে নামাজে একই অংশ তিলাওয়াত করুন, যতক্ষণ না শব্দগুলো আর অলক্ষ্যে পেরিয়ে যায়। যে শব্দগুলো আপনি সবচেয়ে বেশি বলেন তার অর্থ শিখুন — এখানে ভাষা-শিক্ষার্থীর এমন এক সুবিধা আছে যা সাবলীল কারীও হারিয়ে ফেলতে পারেন। এর কোনোটিই কোনো অনুভূতির নিশ্চয়তা দেয় না, আর আয়াতও কখনো তা প্রতিশ্রুতি দেয়নি। এটি কেবল চায়, কিতাবটিকে যা তা হিসেবেই যেন ধরা হয়।",
          },
        ],
      },
    ],
  },

  '64:15': {
    sections: [
      {
        h: { en: "Nothing But a Trial", bn: "পরীক্ষা ছাড়া আর কিছু নয়" },
        p: [
          {
            en: "The verse is short and its first word is restrictive: innama amwalukum wa awladukum fitnah. Innama narrows a statement to one thing and excludes the rest, so the sense is that your wealth and your children are nothing but a fitnah. Then the counterweight: wa Allahu indahu ajrun azim, and Allah — with Him is a great reward. Two clauses, one naming what you hold and one naming what is held for you.",
            bn: "আয়াতটি ছোট, আর এর প্রথম শব্দটিই সীমাবদ্ধকারী: ইন্নামা আমওয়ালুকুম ওয়া আওলাদুকুম ফিতনাহ। ইন্নামা কোনো বক্তব্যকে একটি বিষয়ে সীমিত করে আর বাকি সব বাদ দেয়; তাই অর্থ দাঁড়ায়, তোমাদের সম্পদ ও তোমাদের সন্তান একটি ফিতনা ছাড়া আর কিছুই নয়। এরপর ভারসাম্য রক্ষাকারী অংশ: ওয়াল্লাহু ইনদাহু আজরুন আযীম, আর আল্লাহ — তাঁরই কাছে আছে মহাপুরস্কার। দুটি বাক্যাংশ: একটি বলে তুমি কী ধরে আছ, অন্যটি বলে তোমার জন্য কী ধরে রাখা হয়েছে।",
          },
          {
            en: "Fitnah is the word to slow down on. Its root sense is the assaying of gold — putting metal into fire to separate what is precious from what is mixed in with it. From there it comes to mean a test, and in some contexts a temptation or a civil strife. The fire in that image is not there to destroy the gold. It is there to find out what is gold.",
            bn: "ফিতনা শব্দটির ওপরই ধীরে যেতে হয়। এর মূল অর্থ সোনা যাচাই — ধাতুকে আগুনে দিয়ে মূল্যবান অংশ আর মেশানো অংশ আলাদা করা। সেখান থেকেই এর অর্থ দাঁড়ায় পরীক্ষা, আর কোনো কোনো প্রসঙ্গে প্রলোভন বা বিপর্যয়। সেই ছবিতে আগুন সোনাকে ধ্বংস করতে আসেনি। এসেছে বের করতে, কোনটি আসলে সোনা।",
          },
        ],
      },
      {
        h: { en: "The Verse Immediately Before", bn: "ঠিক আগের আয়াতটি" },
        p: [
          {
            en: "This verse cannot be read apart from 64:14, which precedes it: O you who believe, among your spouses and your children there are enemies to you, so beware of them. And then, in the same verse, the release — but if you pardon and overlook and forgive, then indeed Allah is Forgiving, Merciful. A hard sentence and a merciful one, side by side, before ours arrives to explain both.",
            bn: "এই আয়াতটিকে 64:14 থেকে আলাদা করে পড়া যায় না, যা এর ঠিক আগে: হে ঈমানদারগণ, তোমাদের স্ত্রী ও সন্তানদের মধ্যে কেউ কেউ তোমাদের শত্রু, অতএব তাদের ব্যাপারে সতর্ক থেকো। আর এরপর একই আয়াতে মুক্তি — তবে যদি তোমরা মার্জনা করো, উপেক্ষা করো ও ক্ষমা করো, তবে নিশ্চয়ই আল্লাহ ক্ষমাশীল, দয়ালু। একটি কঠিন বাক্য ও একটি দয়ার বাক্য পাশাপাশি, আর তারপর আমাদের আয়াতটি এসে দুটিকেই ব্যাখ্যা করে।",
          },
          {
            en: "A report from Ibn Abbas (RA), preserved in the Sunan collections, connects these two verses to men in Mecca who wanted to migrate and were held back by wives and children; when they later reached Medina and saw how much others had learned of the religion, they were minded to punish their families, and the verses came down. The report explains the pairing exactly: beware, and then pardon.",
            bn: "সুনান-গ্রন্থগুলোতে সংরক্ষিত ইবনে আব্বাস (রাঃ)-এর একটি বর্ণনা এই দুই আয়াতকে যুক্ত করে মক্কার সেই ব্যক্তিদের সাথে যারা হিজরত করতে চেয়েছিলেন কিন্তু স্ত্রী-সন্তানরা তাঁদের আটকে রেখেছিল; পরে মদিনায় পৌঁছে যখন তাঁরা দেখলেন অন্যরা দ্বীনের কত কিছু শিখে ফেলেছে, তখন তাঁরা পরিবারকে শাস্তি দিতে চাইলেন, আর তখনই আয়াতগুলো নাযিল হয়। বর্ণনাটি জোড়াটিকে নিখুঁতভাবে ব্যাখ্যা করে: সতর্ক থেকো, তারপর ক্ষমা করো।",
          },
        ],
      },
      {
        h: { en: "Not a Verdict on Family", bn: "পরিবারের বিরুদ্ধে রায় নয়" },
        p: [
          {
            en: "It would be a serious misreading to take fitnah as a low view of family. The Quran itself sets the other terms. In 18:46 wealth and children are called zinat al-hayat ad-dunya, the adornment of worldly life, before adding that the enduring good deeds are better with your Lord. And in 25:74 the servants of the Most Merciful are taught to ask for spouses and offspring as a coolness of the eyes.",
            bn: "ফিতনাকে পরিবারের প্রতি নিচু দৃষ্টিভঙ্গি হিসেবে নেওয়া হবে মারাত্মক ভুলপাঠ। কুরআন নিজেই অন্য পরিভাষাগুলো দেয়। 18:46 আয়াতে সম্পদ ও সন্তানকে বলা হয়েছে যীনাতুল-হায়াতিদ-দুনইয়া, পার্থিব জীবনের শোভা, আর তারপর যোগ করা হয়েছে যে স্থায়ী সৎকর্ম তোমার রবের কাছে উত্তম। আর 25:74 আয়াতে রহমানের বান্দাদের শেখানো হয়েছে স্ত্রী ও সন্তানদের চোখের শীতলতা হিসেবে প্রার্থনা করতে।",
          },
          {
            en: "So the same things are asked for as a blessing, described as an ornament, and named as a test. All three are true at once, and the third is what keeps the first two safe. The identical sentence appears again at 8:28, there placed after a warning against betraying trusts — and 63:9 states the danger plainly: let not your wealth or your children divert you from the remembrance of Allah.",
            bn: "অর্থাৎ একই জিনিস নিয়ামত হিসেবে চাওয়া হয়, শোভা হিসেবে বর্ণনা করা হয়, আর পরীক্ষা হিসেবে নাম দেওয়া হয়। তিনটিই একসাথে সত্য, আর তৃতীয়টিই প্রথম দুটিকে নিরাপদ রাখে। হুবহু একই বাক্য আবার আসে 8:28 আয়াতে, সেখানে আমানতের খিয়ানত নিয়ে সতর্কবাণীর পরে — আর 63:9 বিপদটি স্পষ্ট করে বলে: তোমাদের সম্পদ ও সন্তান যেন তোমাদের আল্লাহর স্মরণ থেকে উদাসীন না করে।",
          },
        ],
      },
      {
        h: { en: "What Is Kept With Him", bn: "যা তাঁর কাছে রাখা" },
        p: [
          {
            en: "The second half is built on a preposition: indahu, with Him. Wealth and children are described with the pronoun of possession, yours; the reward is described as located with Allah. That is a difference in security, not only in size. What is with you can be lost, spent, outlived or taken; what is with Him cannot. Ajr azim, a great reward, is left undescribed, which the commentators read as a sign of its scale.",
            bn: "দ্বিতীয়ার্ধটি একটি অব্যয়ের ওপর দাঁড়ানো: ইনদাহু, তাঁর কাছে। সম্পদ ও সন্তানকে বর্ণনা করা হয়েছে মালিকানার সর্বনাম দিয়ে — তোমাদের; আর পুরস্কারকে বর্ণনা করা হয়েছে আল্লাহর কাছে অবস্থিত হিসেবে। এটি কেবল আকারের নয়, নিরাপত্তারও পার্থক্য। তোমার কাছে যা আছে তা হারানো যায়, খরচ হয়ে যায়, তোমার আগেই ফুরিয়ে যায় বা কেড়ে নেওয়া হয়; তাঁর কাছে যা আছে তা নয়। আজরুন আযীম বা মহাপুরস্কারের কোনো বর্ণনা দেওয়া হয়নি, আর মুফাসসিরগণ একেই তার বিশালতার আলামত হিসেবে পড়েন।",
          },
          {
            en: "What follows keeps the demand realistic. 64:16 says fear Allah as much as you are able, and listen and obey and spend — a rare and merciful qualification, since the burden of family is not the same for every person. It then names the real obstacle: whoever is protected from the miserliness of his own soul, those are the successful. The problem was never the wealth. It was shuhh, the grasping inside the one who holds it.",
            bn: "এরপর যা আসে তা দাবিটিকে বাস্তবসম্মত রাখে। 64:16 বলে, তোমরা সাধ্যমতো আল্লাহকে ভয় করো, আর শোনো, মানো ও খরচ করো — এক বিরল ও দয়ালু শর্তারোপ, কারণ পরিবারের ভার প্রত্যেকের জন্য এক নয়। এরপর প্রকৃত বাধাটির নাম বলা হয়: যাকে তার নিজের নফসের কার্পণ্য থেকে রক্ষা করা হয়েছে, তারাই সফল। সমস্যা কখনোই সম্পদ ছিল না। সমস্যা ছিল শুহ্‌হ, অর্থাৎ যে ধরে আছে তার ভেতরের আঁকড়ে থাকা।",
          },
        ],
      },
      {
        h: { en: "What the Commentators Draw", bn: "মুফাসসিরগণ যা বের করেন" },
        p: [
          {
            en: "The majority hold that the enmity of 64:14 is not a permanent description of spouses and children but a description of what they can become when they pull a person away from obedience. The word used is a warning about a direction of travel, not a judgement on persons. This is why the verse ends with pardon rather than with separation, and why the commentators consistently read it as counselling patience within the family rather than escape from it.",
            bn: "অধিকাংশ মুফাসসির মনে করেন, 64:14 আয়াতের শত্রুতা স্ত্রী ও সন্তানদের স্থায়ী পরিচয় নয়, বরং তারা কী হয়ে উঠতে পারে তার বর্ণনা — যখন তারা কাউকে আনুগত্য থেকে টেনে সরায়। ব্যবহৃত শব্দটি ব্যক্তিদের সম্পর্কে রায় নয়, বরং যাত্রার দিক নিয়ে সতর্কবার্তা। এ কারণেই আয়াতটি বিচ্ছেদ দিয়ে নয়, ক্ষমা দিয়ে শেষ হয়, আর এ কারণেই মুফাসসিরগণ ধারাবাহিকভাবে একে পরিবার থেকে পালানোর নয়, পরিবারের ভেতরে ধৈর্য ধরার উপদেশ হিসেবেই পড়েন।",
          },
          {
            en: "They also note the direction of the test. It runs both ways: a parent may be tested through a child, and a child through a parent; a person may be tested by having wealth and equally by lacking it. Nothing in the verse says the test is failed by loving them. It is failed by choosing them over what Allah has kept with Him, and the verse names both sides so that the choice is at least a conscious one.",
            bn: "তাঁরা পরীক্ষার দিকটিও লক্ষ্য করেন। এটি দুদিকেই চলে: পিতামাতা সন্তানের মাধ্যমে পরীক্ষিত হতে পারেন, আবার সন্তানও পিতামাতার মাধ্যমে; কেউ সম্পদ থাকায় পরীক্ষিত হয়, কেউ আবার সমানভাবে সম্পদ না থাকায়। আয়াতের কোথাও বলা হয়নি যে তাদের ভালোবাসলেই পরীক্ষায় ব্যর্থ হওয়া যায়। ব্যর্থতা আসে আল্লাহ যা তাঁর কাছে রেখেছেন তার চেয়ে তাদের বেছে নিলে, আর আয়াত দুই দিকের নামই বলে দেয় যাতে বাছাইটি অন্তত সচেতন হয়।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "In practice the test rarely announces itself. It shows up as the job that pays more and takes the family's evenings, the school chosen for its name, the silence kept in front of a relative because an inheritance is pending. It shows up as a father who will argue about a school fee and not about a missed prayer. The verse asks only that these moments be recognised as the fire in which something is being assayed.",
            bn: "বাস্তবে পরীক্ষা খুব কমই নিজের নাম ঘোষণা করে। এটি আসে সেই চাকরি হয়ে যা বেশি আয় দেয় আর পরিবারের সন্ধ্যাগুলো কেড়ে নেয়; সেই স্কুল হয়ে যা নামের জন্য বাছা হয়; সেই নীরবতা হয়ে যা কোনো আত্মীয়ের সামনে রাখা হয় কারণ উত্তরাধিকার ঝুলে আছে। এটি আসে এমন বাবা হয়ে যিনি স্কুলের বেতন নিয়ে তর্ক করেন কিন্তু ছুটে যাওয়া নামাজ নিয়ে করেন না। আয়াত কেবল এটুকুই চায় যে এসব মুহূর্তকে সেই আগুন হিসেবে চেনা হোক, যেখানে কিছু একটা যাচাই হচ্ছে।",
          },
          {
            en: "The counterweight is deliberate use. Family becomes an investment rather than a distraction when it is turned towards what is with Allah: teaching a child to pray rather than only to succeed, keeping a household's income clean even when it costs, giving from what you would rather keep. And where 64:14 applies, where a family genuinely obstructs, the instruction is unusual and worth taking literally — pardon, overlook, forgive.",
            bn: "ভারসাম্যটি আসে সচেতন ব্যবহারের মধ্য দিয়ে। পরিবার তখনই বিক্ষেপ না হয়ে বিনিয়োগ হয়ে ওঠে যখন তাকে আল্লাহর কাছে যা আছে তার দিকে ঘোরানো হয়: সন্তানকে কেবল সফল হতে নয়, নামাজ পড়তে শেখানো; খরচ হলেও ঘরের আয় হালাল রাখা; যা রেখে দিতে ইচ্ছে করে তা থেকেই দেওয়া। আর যেখানে 64:14 সত্যিই প্রযোজ্য, যেখানে পরিবার সত্যিকারভাবে বাধা হয়ে দাঁড়ায়, সেখানে নির্দেশটি অস্বাভাবিক এবং আক্ষরিকভাবে নেওয়ার মতো — মার্জনা করো, উপেক্ষা করো, ক্ষমা করো।",
          },
        ],
      },
    ],
  },
  '3:26-27': {
    sections: [
      {
        h: { en: "A Du'a You Are Told to Say", bn: "যে দোয়া বলতে বলা হয়েছে" },
        p: [
          {
            en: "The passage begins with qul, say. That single word changes its status. This is not a description of Allah that a reader may admire; it is a script placed in the mouth, words the believer is instructed to use. Then Allahumma, the vocative form Arabic reserves for addressing Allah — not ya Allah but Allahumma, a heavier and more formal call. The verse is teaching not only what to believe about sovereignty but how to speak to its Owner.",
            bn: "অংশটি শুরু হয় কুল দিয়ে — বলো। এই একটি শব্দই এর মর্যাদা বদলে দেয়। এটি আল্লাহ সম্পর্কে এমন কোনো বর্ণনা নয় যা পাঠক কেবল প্রশংসা করবে; এটি মুখে তুলে দেওয়া একটি পাঠ, যে শব্দগুলো ব্যবহার করতে মুমিনকে নির্দেশ দেওয়া হয়েছে। এরপর আল্লাহুম্মা, আরবি যে সম্বোধনরূপটি কেবল আল্লাহর জন্যই রাখে — ইয়া আল্লাহ নয়, আল্লাহুম্মা, ভারী ও অধিকতর আনুষ্ঠানিক ডাক। আয়াত কেবল রাজত্ব সম্পর্কে কী বিশ্বাস করতে হবে তা শেখায় না, তার মালিকের সাথে কীভাবে কথা বলতে হবে তাও শেখায়।",
          },
          {
            en: "Malik al-mulk is the title given: Owner of all dominion. Malik is the possessor, mulk is kingship or dominion itself, so the phrase means the One who owns kingship — not a king among kings but the Owner of the very thing kings hold. Everything a ruler has, he has on loan from the One being addressed. That is established before a single request is made.",
            bn: "মালিকুল-মুলক — এই উপাধিটিই দেওয়া হয়েছে: সমস্ত রাজত্বের মালিক। মালিক অর্থ অধিকারী, আর মুলক অর্থ রাজত্ব নিজেই; তাই বাক্যাংশটির অর্থ, যিনি রাজত্বেরই মালিক — বাদশাহদের মধ্যে একজন বাদশাহ নন, বরং বাদশাহরা যা ধরে আছে তারই মালিক। শাসকের যা কিছু আছে, সবই যাঁকে সম্বোধন করা হচ্ছে তাঁর কাছ থেকে ধার নেওয়া। একটিও আবেদন করার আগেই এটি স্থির করে দেওয়া হয়।",
          },
        ],
      },
      {
        h: { en: "Given, and Torn Away", bn: "দেওয়া, আর ছিনিয়ে নেওয়া" },
        p: [
          {
            en: "Four movements follow in two pairs. Tu'ti al-mulka man tasha', You give dominion to whom You will; wa tanzi'u al-mulka mimman tasha', and You tear dominion away from whom You will. Nazaa is not a gentle taking. It is the verb for pulling something out by force, the way a stake is wrenched from the ground. The Arabic does not pretend that the fall of the powerful is quiet.",
            bn: "এরপর আসে দুই জোড়ায় চারটি গতি। তু’তিল-মুলকা মান তাশা, তুমি যাকে ইচ্ছা রাজত্ব দাও; ওয়া তানযি‘উল-মুলকা মিম্মান তাশা, আর যার কাছ থেকে ইচ্ছা রাজত্ব ছিনিয়ে নাও। নাযা‘আ কোনো কোমল নেওয়া নয়। এটি সেই ক্রিয়া যা বোঝায় জোর করে কিছু উপড়ে ফেলা, যেভাবে মাটি থেকে খুঁটি টেনে তোলা হয়। ক্ষমতাবানের পতন যে নিঃশব্দ, আরবি তা দাবি করে না।",
          },
          {
            en: "Then the pair that touches ordinary people: wa tu'izzu man tasha' wa tudhillu man tasha'. You give izzah to whom You will and dhillah to whom You will. Izzah is honour with strength in it — dignity that cannot be taken; dhillah is the state of being lowered. Four times the phrase man tasha', whomever You will, is repeated. The repetition removes any suggestion of a rule that could be worked out and exploited.",
            bn: "এরপর সেই জোড়া যা সাধারণ মানুষকে স্পর্শ করে: ওয়া তু‘ইয্যু মান তাশা ওয়া তুযিল্লু মান তাশা। তুমি যাকে ইচ্ছা ইয্‌যত দাও, আর যাকে ইচ্ছা যিল্লতি দাও। ইয্‌যত হলো শক্তিমিশ্রিত সম্মান — এমন মর্যাদা যা কেড়ে নেওয়া যায় না; আর যিল্লতি হলো নিচু করে দেওয়া অবস্থা। চারবার পুনরাবৃত্ত হলো মান তাশা — যাকে তুমি ইচ্ছা করো। এই পুনরাবৃত্তি এমন কোনো নিয়মের ইঙ্গিত মুছে দেয় যা হিসাব করে বের করে কাজে লাগানো যেত।",
          },
        ],
      },
      {
        h: { en: "In Your Hand Is the Good", bn: "কল্যাণ তোমারই হাতে" },
        p: [
          {
            en: "After four verbs, two of which describe removal and humbling, comes biyadika al-khayr — in Your hand is the good. Only good is ascribed. The commentators note this carefully: although the pairs include tearing away and abasing, the address does not attribute evil to Allah, and they take it as a lesson in the adab, the etiquette, of how He is spoken to and spoken of.",
            bn: "চারটি ক্রিয়ার পরে, যার দুটি ছিনিয়ে নেওয়া ও নিচু করার কথা বলে, আসে বিয়াদিকাল-খায়র — কল্যাণ তোমারই হাতে। কেবল কল্যাণকেই আরোপ করা হলো। মুফাসসিরগণ বিষয়টি বিশেষভাবে লক্ষ্য করেন: যদিও জোড়াগুলোর মধ্যে ছিনিয়ে নেওয়া ও অপদস্থ করা আছে, সম্বোধনটি আল্লাহর প্রতি অকল্যাণ আরোপ করে না; আর তাঁরা একে আদব-এর শিক্ষা হিসেবে নেন, অর্থাৎ তাঁর সাথে ও তাঁকে নিয়ে কীভাবে কথা বলতে হয় তার শিষ্টাচার।",
          },
          {
            en: "There is a second lesson underneath the etiquette. Losing rank, losing money, being brought low — from inside, none of these feels like khayr. The verse insists that the hand they come from holds only good, which shifts the question from what happened to what it is for. The clause closes innaka ala kulli shay'in qadir, You are over all things capable, sealing the address with power so that the confidence has something to rest on.",
            bn: "এই শিষ্টাচারের নিচে আরেকটি শিক্ষা আছে। মর্যাদা হারানো, অর্থ হারানো, নিচে নেমে যাওয়া — ভেতর থেকে এর কোনোটিই খায়র বলে মনে হয় না। আয়াত জোর দিয়ে বলে, যে হাত থেকে এগুলো আসে সেই হাতে কেবল কল্যাণই আছে; ফলে প্রশ্নটি ‘কী ঘটল’ থেকে সরে গিয়ে ‘কীসের জন্য ঘটল’ হয়ে যায়। বাক্যাংশটি শেষ হয় ইন্নাকা ‘আলা কুল্লি শাইয়িন কাদীর দিয়ে — তুমি সবকিছুর ওপর ক্ষমতাবান; ক্ষমতার ঘোষণা দিয়ে সম্বোধন সিলমোহর করা হয়, যাতে আস্থার দাঁড়ানোর জায়গা থাকে।",
          },
        ],
      },
      {
        h: { en: "Night, Day, Life, Death", bn: "রাত, দিন, জীবন, মৃত্যু" },
        p: [
          {
            en: "In 3:27 the same power is shown at a scale nobody disputes. Tuliju al-layla fin-nahar wa tuliju an-nahara fil-layl — You make the night enter into the day and the day enter into the night. Walaja means to slip inside gradually. This is not a switch being thrown; it is the slow lengthening of one at the expense of the other across a year, a change so gradual that no one can name the day it happened.",
            bn: "3:27 আয়াতে একই ক্ষমতা দেখানো হয় এমন মাপে যা নিয়ে কারো বিতর্ক নেই। তূলিজুল-লাইলা ফিন-নাহার ওয়া তূলিজুন-নাহারা ফিল-লাইল — তুমি রাতকে দিনে প্রবেশ করাও, আর দিনকে রাতে প্রবেশ করাও। ওয়ালাজা মানে ধীরে ধীরে ভেতরে ঢুকে পড়া। এটি সুইচ টিপে দেওয়া নয়; এটি সারা বছর ধরে একটির খরচে অন্যটির ধীর দীর্ঘায়ন — এমন ধীর পরিবর্তন যে কেউ বলতে পারে না কোন দিন তা ঘটল।",
          },
          {
            en: "Then: wa tukhriju al-hayya min al-mayyit wa tukhriju al-mayyita min al-hayy, You bring the living out of the dead and the dead out of the living — the same statement Allah makes of Himself in 6:95, where it is set beside the splitting of the seed. And the passage ends wa tarzuqu man tasha'u bighayri hisab, You provide for whom You will without reckoning. Bighayri hisab is not merely generosity; it means the provision is not audited by anything we would recognise as a scale.",
            bn: "এরপর: ওয়া তুখরিজুল-হাইয়া মিনাল-মাইয়িতি ওয়া তুখরিজুল-মাইয়িতা মিনাল-হাইয়, তুমি মৃত থেকে জীবিতকে বের করো আর জীবিত থেকে মৃতকে — একই কথা আল্লাহ নিজের সম্পর্কে বলেন 6:95 আয়াতে, যেখানে তা বীজ বিদীর্ণ করার পাশে রাখা হয়েছে। আর অংশটি শেষ হয় ওয়া তারযুকু মান তাশাউ বিগাইরি হিসাব দিয়ে — তুমি যাকে ইচ্ছা বেহিসাব রিজিক দাও। বিগাইরি হিসাব কেবল উদারতা নয়; এর মানে সেই রিজিক আমাদের চেনা কোনো মাপকাঠিতে যাচাই হয় না।",
          },
        ],
      },
      {
        h: { en: "Where It Sits, and Why", bn: "কোথায় বসেছে, আর কেন" },
        p: [
          {
            en: "The verses fall in a passage of Ali Imran addressed to a community negotiating its place among stronger neighbours. Just before, 3:25 pictures the day when every soul is paid in full for what it earned. Just after, 3:28 warns believers against taking disbelievers as allies in preference to believers. Between a reminder of final accounting and a caution about alliances stands a declaration that honour is not in the gift of anyone whose favour might be sought.",
            bn: "আয়াতগুলো আলে ইমরানের এমন এক অংশে পড়ে যা এমন এক সমাজকে সম্বোধন করছে, যে নিজের চেয়ে শক্তিশালী প্রতিবেশীদের মাঝে নিজের অবস্থান নিয়ে দর-কষাকষি করছে। ঠিক আগে, 3:25 সেই দিনের ছবি আঁকে যেদিন প্রত্যেককে তার উপার্জনের পূর্ণ প্রতিদান দেওয়া হবে। ঠিক পরে, 3:28 মুমিনদের সতর্ক করে মুমিনদের বাদ দিয়ে অবিশ্বাসীদের অভিভাবক বানানো থেকে। চূড়ান্ত হিসাবের স্মরণ আর মৈত্রীর সতর্কবার্তার মাঝখানে দাঁড়িয়ে আছে এই ঘোষণা যে, সম্মান তাদের দানের বিষয় নয় যাদের অনুগ্রহ চাওয়া হচ্ছে।",
          },
          {
            en: "That reading is confirmed elsewhere: 63:8 states that izzah belongs to Allah, to His Messenger and to the believers. No sound report fixes a specific occasion of revelation for 3:26-27, and the commentators do not need one; the verses read as a general instruction in how a believer is to understand power. The majority treat them as a du'a in form as well as content, since the passage is framed as direct address from beginning to end.",
            bn: "এই পাঠ অন্যত্রও নিশ্চিত হয়: 63:8 বলে, ইয্‌যত আল্লাহর, তাঁর রাসূলের ও মুমিনদের। 3:26-27 আয়াতের জন্য কোনো সহীহ বর্ণনা নির্দিষ্ট শানে নুযূল নির্ধারণ করে না, আর মুফাসসিরদের তার প্রয়োজনও নেই; আয়াতগুলো পড়া হয় ক্ষমতাকে মুমিন কীভাবে বুঝবে তার সাধারণ নির্দেশনা হিসেবে। অধিকাংশই এগুলোকে বিষয়বস্তুর পাশাপাশি রূপেও দোয়া হিসেবেই দেখেন, কারণ গোটা অংশটিই শুরু থেকে শেষ পর্যন্ত সরাসরি সম্বোধনে গাঁথা।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "Because it opens with qul, this is one of the passages most naturally taken up as a personal du'a — memorised, said after prayer, said before a decision that depends on someone else's approval. Reciting it is a way of putting a name to the fear underneath a request. Most anxiety about work, money and standing is anxiety about who holds these things, and the verse answers that question before you ask for anything.",
            bn: "কুল দিয়ে শুরু হওয়ায় এটি সেই অংশগুলোর একটি যা সবচেয়ে স্বাভাবিকভাবেই ব্যক্তিগত দোয়া হিসেবে গ্রহণ করা হয় — মুখস্থ করা, নামাজের পরে বলা, এমন কোনো সিদ্ধান্তের আগে বলা যা অন্য কারও অনুমোদনের ওপর নির্ভর করে। এটি পাঠ করা আসলে আবেদনের নিচে লুকিয়ে থাকা ভয়টির নাম ধরে ডাকার একটি উপায়। কাজ, অর্থ ও মর্যাদা নিয়ে বেশিরভাগ উদ্বেগ আসলে এই উদ্বেগ যে এগুলো কার হাতে; আর আয়াত কিছু চাওয়ার আগেই সেই প্রশ্নের জবাব দিয়ে দেয়।",
          },
          {
            en: "It also works in both directions of fortune. In a rise it is a check: what was given can be wrenched away, and the pairing is stated in one breath. In a fall it is a rope: the same hand holds both, and only good is in it. Practically, that means less negotiating with people over what is not theirs to grant, and less bitterness at those who seem to have been given more. Their portion came from where yours does.",
            bn: "ভাগ্যের দুই দিকেই এটি কাজ করে। উত্থানে এটি লাগাম: যা দেওয়া হয়েছে তা ছিনিয়েও নেওয়া যায়, আর জোড়াটি এক নিঃশ্বাসেই বলা হয়েছে। পতনে এটি দড়ি: একই হাত দুটোই ধরে আছে, আর সেই হাতে কেবল কল্যাণ। বাস্তবে এর মানে, যা দেওয়া মানুষের এখতিয়ারেই নেই তা নিয়ে মানুষের সাথে কম দর-কষাকষি, আর যাদের বেশি দেওয়া হয়েছে বলে মনে হয় তাদের প্রতি কম তিক্ততা। তাদের ভাগও সেখান থেকেই এসেছে যেখান থেকে তোমারটি আসে।",
          },
        ],
      },
    ],
  },

  '14:7': {
    sections: [
      {
        h: { en: "A Proclamation, Not a Remark", bn: "মন্তব্য নয়, ঘোষণা" },
        p: [
          {
            en: "The verse opens wa idh ta'adhdhana rabbukum, and when your Lord proclaimed. Ta'adhdhana is not the ordinary verb for saying. It comes from the root that gives adhan, the call announced aloud so that a whole town hears it. What follows is therefore public, formal and put on record — a declaration rather than an aside, and the Arabic tells you so before you reach the content.",
            bn: "আয়াত শুরু হয় ওয়া ইয্ তা’আয্‌যানা রাব্বুকুম দিয়ে — আর যখন তোমাদের রব ঘোষণা করলেন। তা’আয্‌যানা সাধারণ ‘বলা’ ক্রিয়া নয়। এটি এসেছে সেই ধাতু থেকে যা থেকে আযান — উচ্চস্বরে ঘোষিত সেই ডাক যা গোটা জনপদ শোনে। তাই এরপর যা আসে তা প্রকাশ্য, আনুষ্ঠানিক ও লিপিবদ্ধ — পাশ কাটানো মন্তব্য নয়, বরং ঘোষণা; আর বিষয়বস্তুতে পৌঁছার আগেই আরবি তা জানিয়ে দেয়।",
          },
          {
            en: "Then the content: la'in shakartum la'azidannakum. Both halves carry the emphatic lam, and the verb ends in the doubled nun of confirmation. This is the construction Arabic uses for a sworn undertaking; the plainest English that keeps its weight is if you are grateful, I shall most certainly increase you. Nothing about the promise is left provisional except the condition attached to it.",
            bn: "এরপর বিষয়বস্তু: লা’ইন শাকারতুম লা’আযীদান্নাকুম। দুই অংশেই আছে জোরদার লাম, আর ক্রিয়ার শেষে দ্বিত্ব নূন। আরবি এই গঠনটি ব্যবহার করে শপথসদৃশ অঙ্গীকারে; এর ভার ধরে রাখে এমন সহজতম অনুবাদ হলো, যদি তোমরা কৃতজ্ঞ হও, আমি অবশ্যই অবশ্যই তোমাদের বাড়িয়ে দেব। প্রতিশ্রুতির কিছুই অনিশ্চিত রাখা হয়নি, কেবল তার সাথে যুক্ত শর্তটি ছাড়া।",
          },
        ],
      },
      {
        h: { en: "The Object Left Open", bn: "যে বস্তুটি অনুক্ত" },
        p: [
          {
            en: "Read the promise again and notice what is missing. I shall increase you — in what? The Arabic gives no object. It does not say increase you in wealth, or in health, or in years. The commentators dwell on this omission: an unnamed object is an unlimited one, so the increase may come in provision, in strength, in knowledge, in ease of worship, in contentment with what is already there.",
            bn: "প্রতিশ্রুতিটি আবার পড়ুন, আর লক্ষ্য করুন কী অনুপস্থিত। আমি তোমাদের বাড়িয়ে দেব — কীসে? আরবি কোনো কর্ম দেয়নি। বলা হয়নি সম্পদে বাড়িয়ে দেব, বা স্বাস্থ্যে, বা আয়ুতে। মুফাসসিরগণ এই অনুক্ততার ওপরই থামেন: যে কর্মের নাম বলা হয়নি তা অসীম; তাই বৃদ্ধি আসতে পারে রিজিকে, শক্তিতে, জ্ঞানে, ইবাদতের সহজতায়, কিংবা যা ইতিমধ্যেই আছে তাতেই তৃপ্তিতে।",
          },
          {
            en: "This matters, because the verse is often quoted as though it promised more money to the thankful. It promises more, and leaves the currency to the Giver. A person whose income does not change but who stops resenting it has received exactly what was promised. Shukr in the Quran is not a mood; it is recognition of where a thing came from, expressed by the tongue, the heart and the use made of the gift.",
            bn: "কথাটি জরুরি, কারণ আয়াতটি প্রায়ই এমনভাবে উদ্ধৃত হয় যেন এটি কৃতজ্ঞদের বেশি অর্থের প্রতিশ্রুতি দিচ্ছে। এটি বেশি কিছুর প্রতিশ্রুতি দেয় বটে, তবে মুদ্রাটি কী হবে তা দাতার হাতেই রেখে দেয়। যার আয় বদলায়নি অথচ যে তা নিয়ে আর বিরক্ত নয়, সে ঠিক তা-ই পেয়েছে যা প্রতিশ্রুত ছিল। কুরআনে শুকর কোনো মেজাজ নয়; এটি স্বীকৃতি যে জিনিসটি কোথা থেকে এসেছে — যা প্রকাশ পায় জিহ্বায়, হৃদয়ে, আর দানটির ব্যবহারে।",
          },
        ],
      },
      {
        h: { en: "The Two Halves Are Not Symmetrical", bn: "দুই অংশ সমান নয়" },
        p: [
          {
            en: "The second half changes shape: wa la'in kafartum inna adhabi lashadid. If you are ungrateful, indeed My punishment is severe. Read the grammar closely. For gratitude, Allah says I shall increase you — first person, direct, with the servant as the object. For ingratitude, He does not say I shall punish you; He states that His punishment is severe. The threat is stated as an attribute, at one remove.",
            bn: "দ্বিতীয়ার্ধের গড়ন বদলে যায়: ওয়া লা’ইন কাফারতুম ইন্না ‘আযাবী লাশাদীদ। যদি তোমরা অকৃতজ্ঞ হও, নিশ্চয়ই আমার শাস্তি কঠিন। ব্যাকরণটি মনোযোগ দিয়ে পড়ুন। কৃতজ্ঞতার ক্ষেত্রে আল্লাহ বলেন, আমি তোমাদের বাড়িয়ে দেব — উত্তম পুরুষে, সরাসরি, বান্দাকে কর্ম করে। অকৃতজ্ঞতার ক্ষেত্রে তিনি বলেন না, আমি তোমাদের শাস্তি দেব; তিনি বলেন যে তাঁর শাস্তি কঠিন। হুমকিটি একটি গুণ হিসেবে বলা হয়েছে, এক ধাপ দূরত্ব রেখে।",
          },
          {
            en: "The verb chosen for ingratitude is worth holding on to as well: kafartum, from the root k-f-r, whose base meaning is to cover. Ingratitude in Arabic is a covering over of a blessing so that it is no longer visible as one. That is why kufr can mean both disbelief and thanklessness — they are the same act performed on different objects. Later in the surah, 14:34 says that if you tried to count the favour of Allah you could not enumerate it.",
            bn: "অকৃতজ্ঞতার জন্য বেছে নেওয়া ক্রিয়াটিও ধরে রাখার মতো: কাফারতুম, ক-ফ-র ধাতু থেকে, যার মূল অর্থ ঢেকে ফেলা। আরবিতে অকৃতজ্ঞতা মানে নিয়ামতকে এমনভাবে ঢেকে ফেলা যে তা আর নিয়ামত বলে চোখে পড়ে না। এ কারণেই কুফর শব্দটি অবিশ্বাস ও অকৃতজ্ঞতা দুটোই বোঝাতে পারে — ভিন্ন বস্তুর ওপর একই কাজ। সূরার পরের দিকে 14:34 বলে, আল্লাহর নিয়ামত গুনতে চাইলে তোমরা তা গুনে শেষ করতে পারবে না।",
          },
        ],
      },
      {
        h: { en: "Spoken to a Rescued People", bn: "উদ্ধারপ্রাপ্ত এক জাতিকে বলা" },
        p: [
          {
            en: "The declaration is not floating free. It sits inside the speech of Musa (AS) to his people. 14:5 records that Musa was sent with signs and told to bring his people out of darkness into light and to remind them of the days of Allah. 14:6 then names a specific day: remember when He saved you from the people of Pharaoh, who were inflicting the worst punishment on you.",
            bn: "ঘোষণাটি শূন্যে ভাসছে না। এটি বসে আছে মূসা (আঃ)-এর নিজ জাতির প্রতি বক্তব্যের ভেতরে। 14:5 জানায় যে মূসাকে নিদর্শনসহ পাঠানো হয়েছিল, আর বলা হয়েছিল তাঁর জাতিকে অন্ধকার থেকে আলোর দিকে বের করে আনতে এবং তাদের আল্লাহর দিনগুলোর কথা স্মরণ করিয়ে দিতে। এরপর 14:6 একটি নির্দিষ্ট দিনের নাম বলে: স্মরণ করো যখন তিনি তোমাদের ফিরআউনের লোকদের হাত থেকে রক্ষা করেছিলেন, যারা তোমাদের নিকৃষ্টতম শাস্তি দিচ্ছিল।",
          },
          {
            en: "So gratitude is taught here to people who had just been given something enormous and specific. That is the context the verse asks to be read in: not an abstract principle but the right response to a deliverance one has actually lived through. And 14:8 closes the door on any misunderstanding — Musa says, if you and everyone on earth are ungrateful, Allah is Free of need, Praiseworthy. The increase is entirely for the grateful. Nothing is added to Allah by it.",
            bn: "অর্থাৎ এখানে কৃতজ্ঞতা শেখানো হচ্ছে এমন মানুষদের, যাদের সবেমাত্র বিশাল ও নির্দিষ্ট কিছু দেওয়া হয়েছে। আয়াতটি এই প্রেক্ষাপটেই পড়তে বলে: কোনো বিমূর্ত নীতি নয়, বরং নিজে ভোগ করা এক উদ্ধারের যথাযথ জবাব। আর 14:8 যেকোনো ভুল বোঝাবুঝির দরজা বন্ধ করে দেয় — মূসা বলেন, তোমরা এবং পৃথিবীর সবাই যদি অকৃতজ্ঞ হও, আল্লাহ অভাবমুক্ত, প্রশংসিত। বৃদ্ধিটি পুরোপুরি কৃতজ্ঞদেরই জন্য। এতে আল্লাহর কিছুই বাড়ে না।",
          },
        ],
      },
      {
        h: { en: "Gratitude in Practice", bn: "কৃতজ্ঞতার আমল" },
        p: [
          {
            en: "The Sunnah gives this verse concrete form. Sahih al-Bukhari and Sahih Muslim record that the Prophet ﷺ would stand in prayer at night until his feet swelled, and when asked why, when his sins were forgiven, he answered: shall I not be a grateful servant? Gratitude there is not a feeling produced after a gift but a form of worship offered because of one.",
            bn: "সুন্নাহ এই আয়াতকে বাস্তব রূপ দেয়। সহীহ বুখারী ও সহীহ মুসলিমে আছে, নবী ﷺ রাতে এত দীর্ঘ নামাজে দাঁড়াতেন যে তাঁর পা ফুলে যেত; জিজ্ঞেস করা হলো, তাঁর গুনাহ তো ক্ষমা করা হয়েছে, তবু কেন? তিনি উত্তর দেন: আমি কি একজন কৃতজ্ঞ বান্দা হব না? সেখানে কৃতজ্ঞতা কোনো দান পাওয়ার পরের অনুভূতি নয়, বরং সেই দানের কারণেই পেশ করা ইবাদত।",
          },
          {
            en: "There is also a short du'a the Prophet ﷺ taught Mu'adh ibn Jabal (RA), telling him he loved him and instructing him not to leave it after any prayer: Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik — O Allah, help me to remember You, to thank You, and to worship You well. It is preserved in the Sunan collections and graded sound, and it makes the point that shukr itself is something we need help to do.",
            bn: "নবী ﷺ মু‘আয ইবনে জাবাল (রাঃ)-কে একটি ছোট দোয়াও শিখিয়েছিলেন, তাঁকে বলে যে তিনি তাঁকে ভালোবাসেন, আর নির্দেশ দেন যেন প্রতিটি নামাজের পর এটি না ছাড়েন: আল্লাহুম্মা আ‘ইন্নী ‘আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ‘ইবাদাতিক — হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শুকরিয়া আদায় করতে ও উত্তমরূপে আপনার ইবাদত করতে আমাকে সাহায্য করুন। এটি সুনান-গ্রন্থগুলোতে সংরক্ষিত ও নির্ভরযোগ্য, আর এটি বুঝিয়ে দেয় যে শুকর নিজেই এমন কিছু যা করতে আমাদের সাহায্য দরকার।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "The practical difficulty with gratitude is that blessings become invisible by being constant. Nobody thanks Allah for a working knee until it stops working. The verb kafara, to cover, describes that process exactly, and the remedy is simply to make the blessing visible again: name one thing out loud each day, and prefer the ones you have never named — eyesight, a functioning household, a name that is not feared.",
            bn: "কৃতজ্ঞতার বাস্তব সমস্যা হলো, নিয়ামত ধারাবাহিক হওয়ার কারণেই অদৃশ্য হয়ে যায়। হাঁটু কাজ করা বন্ধ না করা পর্যন্ত কেউ সচল হাঁটুর জন্য আল্লাহর শুকরিয়া করে না। কাফারা অর্থাৎ ঢেকে ফেলা ক্রিয়াটি ঠিক এই প্রক্রিয়াটিই বর্ণনা করে, আর প্রতিকার সহজ — নিয়ামতকে আবার দৃশ্যমান করা: প্রতিদিন একটি জিনিসের নাম উচ্চারণ করুন, আর সেগুলোকেই বেছে নিন যেগুলোর নাম আপনি কখনো নেননি — দৃষ্টিশক্তি, চলমান একটি সংসার, এমন একটি নাম যাকে কেউ ভয় পায় না।",
          },
          {
            en: "The fuller form is to thank with the thing itself. Wealth is thanked by spending some of it, knowledge by teaching it, health by using it in something worth doing, time by not wasting it on what leaves nothing behind. And gratitude is most useful precisely where it is least natural: in a narrow month, in illness, after a loss. That is where the promise of increase stops being decoration and starts doing work.",
            bn: "পূর্ণতর রূপ হলো জিনিসটি দিয়েই শুকরিয়া করা। সম্পদের শুকরিয়া তার কিছু খরচ করে, জ্ঞানের শুকরিয়া তা শিখিয়ে, স্বাস্থ্যের শুকরিয়া তা মূল্যবান কাজে লাগিয়ে, সময়ের শুকরিয়া তা এমন কিছুতে নষ্ট না করে যা কিছুই রেখে যায় না। আর কৃতজ্ঞতা সবচেয়ে বেশি কাজে লাগে ঠিক সেখানেই যেখানে তা সবচেয়ে কম স্বাভাবিক: টানাটানির মাসে, অসুস্থতায়, ক্ষতির পরে। সেখানেই বৃদ্ধির প্রতিশ্রুতি আর অলংকার থাকে না, কাজ করতে শুরু করে।",
          },
        ],
      },
    ],
  },

  '33:35': {
    sections: [
      {
        h: { en: "A Question That Was Answered", bn: "যে প্রশ্নের জবাব এসেছিল" },
        p: [
          {
            en: "This is one of the verses whose occasion of revelation is well attested. Umm Salamah (RA), a wife of the Prophet ﷺ, asked why women were not mentioned in the Quran as men were. The report is preserved in the collections of Ahmad and an-Nasa'i, and at-Tirmidhi records the same question from Umm 'Imarah al-Ansariyyah (RA), and this verse came down in reply — naming men and women explicitly, ten times over, in a single sentence.",
            bn: "এটি সেই আয়াতগুলোর একটি যার শানে নুযূল সুপ্রমাণিত। নবী ﷺ-এর স্ত্রী উম্মে সালামা (রাঃ) জিজ্ঞেস করেছিলেন, পুরুষদের মতো নারীদের কথা কুরআনে কেন উল্লেখ করা হয় না। বর্ণনাটি আহমাদ ও নাসাঈর সংকলনে সংরক্ষিত, আর তিরমিযীতে একই প্রশ্ন এসেছে উম্মে 'ইমারা আনসারিয়া (রাঃ)-এর সূত্রে; জবাবে এই আয়াতটি নাযিল হয় — একটি বাক্যেই দশবার করে পুরুষ ও নারীর নাম স্পষ্টভাবে উল্লেখ করে।",
          },
          {
            en: "That detail changes how the verse should be heard. Its repetitive structure is not accidental style; the doubling is the answer. Arabic can address a mixed group with the masculine plural alone, and the Quran often does. Here it deliberately does not, and the reason recorded is a question a woman asked out loud and had answered from above.",
            bn: "এই তথ্যটি আয়াতটি কীভাবে শোনা উচিত তা বদলে দেয়। এর পুনরাবৃত্ত গঠন কোনো আকস্মিক রচনাশৈলী নয়; জোড়া করে বলাটাই জবাব। আরবি মিশ্র শ্রোতাদের কেবল পুংলিঙ্গ বহুবচন দিয়েই সম্বোধন করতে পারে, আর কুরআন প্রায়ই তা করে। এখানে ইচ্ছাকৃতভাবে তা করা হয়নি, আর এর যে কারণ লিপিবদ্ধ আছে তা হলো এক নারীর উচ্চারিত প্রশ্ন, যার জবাব এসেছিল ওপর থেকে।",
          },
        ],
      },
      {
        h: { en: "Where It Sits in al-Ahzab", bn: "আল-আহযাবে এর অবস্থান" },
        p: [
          {
            en: "The verses just before it, 33:28-34, address the wives of the Prophet ﷺ directly and no one else: the choice offered between the world and Allah and His Messenger, the reminder that they are not like any other women, and the instruction to remember what is recited in their houses of the verses of Allah and wisdom. Then, without transition, the address opens out to every believing man and woman on earth.",
            bn: "ঠিক আগের আয়াতগুলো, 33:28-34, সরাসরি নবী ﷺ-এর স্ত্রীদেরই সম্বোধন করে, অন্য কাউকে নয়: দুনিয়া আর আল্লাহ ও তাঁর রাসূলের মধ্যে দেওয়া বেছে নেওয়ার সুযোগ, এই স্মরণ যে তাঁরা অন্য কোনো নারীর মতো নন, আর নির্দেশ যে তাঁদের ঘরে আল্লাহর যেসব আয়াত ও হিকমত পাঠ করা হয় তা যেন স্মরণে রাখেন। এরপর, কোনো সেতু ছাড়াই, সম্বোধন খুলে যায় পৃথিবীর প্রতিটি মুমিন পুরুষ ও নারীর দিকে।",
          },
          {
            en: "The verse that follows keeps the same breadth: 33:36 states that no believing man or woman has a choice in a matter once Allah and His Messenger have decided it. Al-Ahzab is a surah about the Battle of the Trench, about the Prophet's household, and about a community reordering its family law; in the middle of all that, the standard of worth is stated in terms that have nothing to do with rank, lineage or sex.",
            bn: "পরের আয়াতটিও একই প্রশস্ততা ধরে রাখে: 33:36 বলে, আল্লাহ ও তাঁর রাসূল কোনো বিষয়ে ফয়সালা করে দিলে কোনো মুমিন পুরুষ বা মুমিন নারীর সে বিষয়ে বেছে নেওয়ার অধিকার থাকে না। আল-আহযাব খন্দকের যুদ্ধ, নবী ﷺ-এর পরিবার, আর পারিবারিক বিধান নতুন করে সাজানো এক সমাজ নিয়ে লেখা সূরা; এই সবকিছুর মাঝখানে মূল্যের মাপকাঠি এমন ভাষায় বলা হলো যার সাথে পদমর্যাদা, বংশ বা লিঙ্গের কোনো সম্পর্ক নেই।",
          },
        ],
      },
      {
        h: { en: "The First Five Pairs", bn: "প্রথম পাঁচ জোড়া" },
        p: [
          {
            en: "The list begins al-muslimin wal-muslimat, then al-mu'minin wal-mu'minat. The order is not arbitrary. Islam is the outward act of submission; iman is the inward assent, and the commentators consistently read the pair in that order, matching the way the two are distinguished in the well-known hadith of Jibril recorded in the two Sahihs. You enter by the door of islam; iman is what fills the house.",
            bn: "তালিকা শুরু হয় আল-মুসলিমীন ওয়াল-মুসলিমাত দিয়ে, তারপর আল-মু’মিনীন ওয়াল-মু’মিনাত। ক্রমটি এলোমেলো নয়। ইসলাম হলো আত্মসমর্পণের বাহ্যিক কাজ; ঈমান হলো ভেতরের স্বীকৃতি, আর মুফাসসিরগণ ধারাবাহিকভাবে এই ক্রমেই জোড়াটি পড়েন — যেভাবে দুই সহীহ গ্রন্থে সংরক্ষিত জিবরীলের বিখ্যাত হাদীসে দুটিকে আলাদা করা হয়েছে। ইসলামের দরজা দিয়ে প্রবেশ; আর ঈমানই ঘরটি ভরে তোলে।",
          },
          {
            en: "Then al-qanitin, from qunut, sustained and willing obedience rather than a single act. Then as-sadiqin, the truthful — sidq covers truth in speech, in promise and in intention. Then as-sabirin, those who hold on: sabr in Arabic is restraint, staying at a post rather than merely enduring quietly. Each of the five is a practice that can be measured over time, not a status a person is born into.",
            bn: "এরপর আল-ক্বানিতীন, ক্বুনূত থেকে — অর্থাৎ একবারের কোনো কাজ নয়, বরং স্থায়ী ও স্বেচ্ছাপ্রণোদিত আনুগত্য। এরপর আস-সাদিকীন, সত্যবাদীরা — সিদক কথায়, প্রতিশ্রুতিতে ও নিয়তে সত্যকে ধারণ করে। এরপর আস-সাবিরীন, যারা ধরে থাকে: আরবিতে সবর মানে সংযম, নিজের জায়গায় অটল থাকা — কেবল নীরবে সহ্য করা নয়। এই পাঁচটির প্রতিটিই এমন চর্চা যা সময়ের সাথে মাপা যায়, জন্মসূত্রে পাওয়া কোনো পরিচয় নয়।",
          },
        ],
      },
      {
        h: { en: "The Second Five", bn: "পরের পাঁচ" },
        p: [
          {
            en: "The list continues al-khashi'in, the humble — khushu' again, the lowering of the self before Allah. Then al-mutasaddiqin, those who give sadaqah, and as-sa'imin, those who fast: two practices with bodies attached, one costing money and the other appetite. Then al-hafizina furujahum, those who guard their chastity, where the masculine carries the explicit object and the feminine follows it without repetition, as Arabic allows.",
            bn: "তালিকা চলতে থাকে আল-খাশি‘ঈন দিয়ে, অর্থাৎ বিনীতরা — আবারও খুশূ‘, আল্লাহর সামনে নিজেকে নত করা। এরপর আল-মুতাসাদ্দিকীন, যারা সদকা দেয়, আর আস-সাইমীন, যারা রোজা রাখে: দুটি চর্চা যার সাথে দেহ জড়িত — একটির খরচ অর্থ, অন্যটির খরচ ক্ষুধা। এরপর আল-হাফিযীনা ফুরূজাহুম, যারা নিজেদের সতীত্ব রক্ষা করে; এখানে পুংলিঙ্গ রূপটিই কর্মটি স্পষ্ট করে বহন করে, আর স্ত্রীলিঙ্গ রূপ পুনরাবৃত্তি ছাড়াই তা অনুসরণ করে — আরবি যেমন অনুমতি দেয়।",
          },
          {
            en: "The tenth pair is the only one given a qualifier: adh-dhakirina Allaha kathiran wadh-dhakirat, those who remember Allah much, and the women who do so. Kathiran, abundantly, is attached to no other item in the list. Sahih Muslim preserves a narration in which the Prophet ﷺ says the mufarridun have gone ahead, and identifies them using this very phrase — those who remember Allah much, men and women.",
            bn: "দশম জোড়াটিই একমাত্র, যার সাথে একটি বিশেষণ যুক্ত: আয্‌যাকিরীনাল্লাহা কাসীরাও ওয়ায্‌যাকিরাত, যারা আল্লাহকে বেশি বেশি স্মরণ করে, আর সেই নারীরাও। কাসীরান অর্থাৎ প্রচুর পরিমাণে — তালিকার আর কোনো বিষয়ের সাথে এটি যুক্ত নয়। সহীহ মুসলিমে সংরক্ষিত এক বর্ণনায় নবী ﷺ বলেন, মুফাররিদূনরা এগিয়ে গেছে, আর তাঁদের পরিচয় দেন ঠিক এই বাক্যাংশ দিয়েই — যারা আল্লাহকে বেশি বেশি স্মরণ করে, পুরুষ ও নারী।",
          },
        ],
      },
      {
        h: { en: "What the Commentators Draw", bn: "মুফাসসিরগণ যা বের করেন" },
        p: [
          {
            en: "The commentators note that every item on the list is an action or a settled disposition, and that not one of them depends on wealth, health, freedom, learning or public role. That is the point about equality the verse actually makes: not that men and women have identical duties in law, but that the road to forgiveness and reward is open on identical terms, and that terms are set by what a person does.",
            bn: "মুফাসসিরগণ লক্ষ্য করেন যে তালিকার প্রতিটি বিষয়ই হয় একটি কাজ, নয় একটি স্থিতিশীল স্বভাব; আর এর একটিও সম্পদ, স্বাস্থ্য, স্বাধীনতা, শিক্ষা বা প্রকাশ্য ভূমিকার ওপর নির্ভর করে না। সমতা নিয়ে আয়াতটি আসলে এই কথাই বলে: পুরুষ ও নারীর আইনগত দায়িত্ব অভিন্ন — তা নয়; বরং ক্ষমা ও পুরস্কারের পথ অভিন্ন শর্তে খোলা, আর শর্ত নির্ধারিত হয় মানুষ কী করে তা দিয়ে।",
          },
          {
            en: "The same principle is stated across the Quran in other words. 3:195 declares that Allah does not let the work of any worker among you be lost, male or female. 16:97 promises a good life and a better reward to whoever does righteousness, male or female, while a believer. And 4:124 says the same again. The commentators treat 33:35 as the fullest of these statements because it does not summarise; it enumerates.",
            bn: "একই নীতি কুরআনের নানা জায়গায় ভিন্ন ভাষায় বলা হয়েছে। 3:195 ঘোষণা করে, আল্লাহ তোমাদের কোনো কর্মীর কর্ম বিনষ্ট করেন না, পুরুষ হোক বা নারী। 16:97 প্রতিশ্রুতি দেয় উত্তম জীবন ও উত্তম প্রতিদানের, যে-ই সৎকর্ম করে — পুরুষ হোক বা নারী — মুমিন অবস্থায়। আর 4:124 আবার একই কথা বলে। মুফাসসিরগণ 33:35 আয়াতকে এসবের মধ্যে পূর্ণতম মনে করেন, কারণ এটি সংক্ষেপে বলে না; এটি গুনে গুনে বলে।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "Read as a checklist, the verse is unusually usable. Nine of the ten can be attempted this week by almost anyone: submitting in something you have been resisting, obeying in one specific matter, telling an inconvenient truth, holding your position under provocation, praying one prayer with attention, giving a small amount that you will notice, fasting one day, guarding the eyes as well as the body, and remembering Allah while doing something else entirely.",
            bn: "তালিকা হিসেবে পড়লে আয়াতটি অস্বাভাবিক রকম ব্যবহারযোগ্য। দশটির নয়টিই এই সপ্তাহেই প্রায় যে কেউ চেষ্টা করতে পারে: যে বিষয়ে আপনি বাধা দিয়ে আসছেন তাতে আত্মসমর্পণ, নির্দিষ্ট একটি বিষয়ে আনুগত্য, অস্বস্তিকর একটি সত্য বলা, উসকানির মুখেও নিজের জায়গায় অটল থাকা, একটি নামাজ মনোযোগসহ পড়া, এমন সামান্য কিছু দান করা যা টের পাওয়া যায়, একদিন রোজা রাখা, দেহের সাথে চোখেরও হেফাজত করা, আর সম্পূর্ণ অন্য কাজ করতে করতেও আল্লাহকে স্মরণ করা।",
          },
          {
            en: "The last of these is the one most available to people whose lives leave little room. Dhikr requires no schedule, no clothing, no company and no quiet room. That is worth saying in a verse revealed because a woman noticed she was not being named, since much of the work that fills a life — a household, care of the sick, a long shift — has no witnesses. The verse names both the worker and the wage.",
            bn: "এর শেষটিই সবচেয়ে সহজলভ্য তাদের জন্য, যাদের জীবনে ফাঁক খুব কম। যিকিরের জন্য সময়সূচি লাগে না, পোশাক লাগে না, সঙ্গী লাগে না, নিরিবিলি ঘরও লাগে না। এমন একটি আয়াতের প্রসঙ্গে কথাটি বলার মতো, যা নাযিল হয়েছিল কারণ এক নারী লক্ষ্য করেছিলেন তাঁর নাম নেওয়া হচ্ছে না — কেননা জীবন ভরে রাখা কাজের অনেকটাই, যেমন সংসার, রোগীর সেবা, দীর্ঘ এক শিফট, কোনো সাক্ষী রেখে যায় না। আয়াতটি কর্মীরও নাম বলে, মজুরিরও।",
          },
        ],
      },
    ],
  },
  '55:60': {
    sections: [
      {
        h: { en: "A Question Built to Deny", bn: "যে প্রশ্ন অস্বীকার করতেই গড়া" },
        p: [
          {
            en: "Hal jaza' al-ihsani illa al-ihsan. Five words in Arabic, and the shape of the sentence carries as much as the vocabulary. Hal is the interrogative particle, but paired with illa, except, it forms the construction Arabic uses for emphatic negation dressed as a question. The literal sense is: is the recompense of ihsan anything except ihsan? The intended sense is: there is nothing else it could be.",
            bn: "হাল জাযাউল-ইহসানি ইল্লাল-ইহসান। আরবিতে পাঁচটি শব্দ, আর বাক্যের গড়ন শব্দভান্ডারের সমানই ভার বহন করে। হাল একটি প্রশ্নবাচক অব্যয়, কিন্তু ইল্লা অর্থাৎ ‘ছাড়া’-র সাথে জোড়া লেগে এটি সেই গঠন তৈরি করে যা আরবি ব্যবহার করে প্রশ্নের পোশাকে জোরালো অস্বীকার প্রকাশে। আক্ষরিক অর্থ: ইহসানের প্রতিদান কি ইহসান ছাড়া আর কিছু? অভিপ্রেত অর্থ: এটি আর কিছুই হতে পারে না।",
          },
          {
            en: "A statement would have said the reward of good is good. The question does something a statement cannot: it hands the conclusion to the listener to draw. Nobody is being informed; everybody is being asked to admit what he already knows. That is why the line has travelled so far beyond its own surah, and why it works as an argument even with someone who does not accept the Book it comes from.",
            bn: "সাধারণ বিবৃতি হলে বলা হতো, ইহসানের প্রতিদান ইহসান। কিন্তু প্রশ্নটি এমন কিছু করে যা বিবৃতি পারে না: সিদ্ধান্তটি টানার ভার শ্রোতার হাতে তুলে দেয়। কাউকে জানানো হচ্ছে না; প্রত্যেককে বলা হচ্ছে সে যা আগে থেকেই জানে তা স্বীকার করতে। এ কারণেই কথাটি নিজের সূরার সীমা ছাড়িয়ে এত দূর গেছে, আর এ কারণেই এটি এমন কারও সাথেও যুক্তি হিসেবে কাজ করে যে এই কিতাবকেই মানে না।",
          },
        ],
      },
      {
        h: { en: "Jaza and Ihsan", bn: "জাযা ও ইহসান" },
        p: [
          {
            en: "Jaza is not a gift. It is requital — what is due back, an exact settling of accounts, the same root that gives the phrase jazak Allahu khayran. Putting jaza and ihsan in one sentence is already a claim: that goodness is not left to chance or to the generosity of whoever received it, but falls under a law of return.",
            bn: "জাযা কোনো উপহার নয়। এটি প্রতিদান — যা ফিরিয়ে দেওয়া প্রাপ্য, হিসাবের নিখুঁত নিষ্পত্তি; একই ধাতু থেকে এসেছে জাযাকাল্লাহু খাইরান বাক্যাংশটি। জাযা ও ইহসানকে এক বাক্যে বসানোই একটি দাবি: কল্যাণ সৌভাগ্যের হাতে বা গ্রহীতার উদারতার হাতে ছেড়ে দেওয়া হয়নি, বরং তা ফিরে আসার একটি বিধানের অধীন।",
          },
          {
            en: "Ihsan is from husn, beauty. It is not merely doing good but doing it well and completely, without the corners cut that nobody would have noticed. Both occurrences carry the definite article, al-ihsan, so the recompense is not merely something pleasant; it is of the same named kind as the deed. Beauty is repaid with beauty, and the sentence is closed at both ends by the same word.",
            bn: "ইহসান এসেছে হুসন থেকে, অর্থাৎ সৌন্দর্য। এটি কেবল ভালো কাজ করা নয়, বরং তা ভালোভাবে ও পূর্ণরূপে করা — কেউ টের পেত না এমন কোণগুলোও না কেটে। দুই জায়গাতেই নির্দিষ্টতাবাচক উপসর্গ আছে, আল-ইহসান; তাই প্রতিদান কেবল কোনো আনন্দদায়ক কিছু নয়, বরং কাজটির মতো একই নামের একই জাতের। সৌন্দর্যের প্রতিদান সৌন্দর্য, আর বাক্যটির দুই প্রান্তই বন্ধ হয়েছে একই শব্দ দিয়ে।",
          },
        ],
      },
      {
        h: { en: "Nobody Is Named", bn: "কারও নাম নেই" },
        p: [
          {
            en: "The verse names neither the one who does the ihsan nor the one who repays it. That silence is not a gap; the commentators read the line in more than one direction and the wording carries all of them. It is the servant's ihsan towards his Lord, answered by his Lord's ihsan towards him. It is also ihsan shown to people, whose return is guaranteed even when the people themselves do not provide it.",
            bn: "আয়াতে কারও নাম নেই — না যে ইহসান করে, না যে প্রতিদান দেয়। এই নীরবতা কোনো ফাঁক নয়; মুফাসসিরগণ পঙ্‌ক্তিটিকে একাধিক দিক থেকে পড়েন, আর শব্দগুলো সবগুলো অর্থই বহন করে। এটি রবের প্রতি বান্দার ইহসান, যার জবাবে আসে বান্দার প্রতি রবের ইহসান। এটি মানুষের প্রতি দেখানো ইহসানও, যার প্রতিদান নিশ্চিত — মানুষ নিজে তা না দিলেও।",
          },
          {
            en: "Set beside it 10:26: for those who did good is al-husna and more. Husna, the best, plus ziyadah, an addition beyond it. So the law of exact return is not a ceiling. Ihsan is repaid in kind as a minimum, and then something is added that the equation did not require. The verse before us states the floor; the promise elsewhere removes the roof.",
            bn: "এর পাশে রাখুন 10:26: যারা ইহসান করেছে তাদের জন্য আছে আল-হুসনা এবং আরও কিছু। হুসনা অর্থাৎ সর্বোত্তম, তার সাথে যিয়াদাহ অর্থাৎ তার ওপরে অতিরিক্ত। অর্থাৎ নিখুঁত প্রতিদানের বিধানটি কোনো সিলিং নয়। ইহসানের প্রতিদান অন্তত সমমানে ফিরে আসে, তারপর এমন কিছু যোগ হয় যা সমীকরণের দাবি ছিল না। আমাদের সামনের আয়াতটি মেঝে নির্ধারণ করে; অন্যত্রের প্রতিশ্রুতি ছাদটি সরিয়ে দেয়।",
          },
        ],
      },
      {
        h: { en: "The Seam Between Two Gardens", bn: "দুই জান্নাতের সংযোগস্থল" },
        p: [
          {
            en: "Surah ar-Rahman is built on a refrain — so which of the favours of your Lord will you two deny — repeated thirty-one times, and 55:61 is one of those repetitions, coming immediately after our line. The placement matters. From 55:46 the surah has been describing two gardens for the one who feared the standing before his Lord, with their branches, springs and fruits.",
            bn: "সূরা আর-রাহমান গাঁথা হয়েছে একটি ধুয়ার ওপর — অতএব তোমরা উভয়ে তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে — যা একত্রিশবার পুনরাবৃত্ত হয়েছে, আর 55:61 সেই পুনরাবৃত্তিগুলোরই একটি, যা আমাদের পঙ্‌ক্তির ঠিক পরেই আসে। অবস্থানটি গুরুত্বপূর্ণ। 55:46 থেকে সূরাটি বর্ণনা করে আসছে দুটি জান্নাত, যা সেই ব্যক্তির জন্য যে তার রবের সামনে দাঁড়ানোকে ভয় করেছে — তার শাখা, ঝর্ণা ও ফলসহ।",
          },
          {
            en: "Immediately after the refrain, 55:62 begins the second pair: and besides these two, two other gardens. So our verse sits exactly on the seam. It is not an isolated aphorism about kindness. It is the summary line that explains the entire passage of reward: everything described on either side of it is there because this rule holds. The gardens are the answer to the question the verse asks.",
            bn: "ধুয়াটির ঠিক পরেই 55:62 দ্বিতীয় জোড়াটি শুরু করে: আর এ দুটি ছাড়াও আরও দুটি জান্নাত। অর্থাৎ আমাদের আয়াতটি ঠিক সংযোগস্থলেই বসে আছে। এটি দয়া নিয়ে বিচ্ছিন্ন কোনো প্রবাদবাক্য নয়। এটি সেই সারসংক্ষেপ যা গোটা পুরস্কার-অংশটিকেই ব্যাখ্যা করে: এর দুই পাশে যা কিছু বর্ণিত, তা আছে কারণ এই বিধানটি সত্য। জান্নাতগুলোই সেই প্রশ্নের উত্তর যা আয়াতটি করছে।",
          },
        ],
      },
      {
        h: { en: "Ihsan in the Sunnah", bn: "সুন্নাহতে ইহসান" },
        p: [
          {
            en: "The word is given its definition in the hadith of Jibril, recorded in both Sahih al-Bukhari and Sahih Muslim: asked what ihsan is, the Prophet ﷺ answered that it is to worship Allah as though you see Him, and if you do not see Him, then He sees you. Ihsan is therefore not a level of effort but a level of awareness, and everything else follows from it.",
            bn: "শব্দটির সংজ্ঞা দেওয়া হয়েছে জিবরীলের হাদীসে, যা সহীহ বুখারী ও সহীহ মুসলিম উভয়েই সংরক্ষিত: ইহসান কী জিজ্ঞেস করা হলে নবী ﷺ উত্তর দেন, তা হলো আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ, আর যদি তুমি তাঁকে না দেখো, তবে তিনি তো তোমাকে দেখছেন। তাই ইহসান পরিশ্রমের কোনো স্তর নয়, বরং সচেতনতার স্তর, আর বাকি সবকিছু তা থেকেই আসে।",
          },
          {
            en: "Sahih Muslim also preserves the instruction that Allah has prescribed ihsan in everything — and the example given there is the slaughter of an animal, that the blade be sharpened and the creature spared distress. The scope is worth noticing. Ihsan is not reserved for prayer and charity. It is asked for in the most ordinary work a person does with his hands, including work that nobody will inspect.",
            bn: "সহীহ মুসলিম সেই নির্দেশও সংরক্ষণ করেছে যে আল্লাহ সবকিছুতেই ইহসান ফরজ করেছেন — আর সেখানে উদাহরণ দেওয়া হয়েছে পশু জবাইয়ের, যেন ছুরি ধারালো করা হয় এবং প্রাণীটি কষ্ট থেকে রেহাই পায়। পরিধিটি লক্ষ্য করার মতো। ইহসান কেবল নামাজ ও দানের জন্য বরাদ্দ নয়। এটি চাওয়া হয় মানুষের হাতে করা সবচেয়ে সাধারণ কাজেও, এমন কাজেও যা কেউ পরীক্ষা করে দেখবে না।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "The practical value of this verse shows up in the moment good is not returned — the favour forgotten, the help repaid with coldness, years of care met with a shrug. The verse does not deny that this happens; it relocates the debt. Because no repayer is named, the account is not with the person who benefited. Expecting return from them is what turns generosity bitter, and this line quietly removes the expectation.",
            bn: "এই আয়াতের বাস্তব মূল্য টের পাওয়া যায় ঠিক সেই মুহূর্তে যখন ভালোর প্রতিদান ফিরে আসে না — ভুলে যাওয়া উপকার, শীতলতা দিয়ে শোধ করা সাহায্য, বছরের পর বছর যত্নের জবাবে কাঁধ ঝাঁকানো। আয়াত অস্বীকার করে না যে এমন ঘটে; বরং ঋণের খাতাটি সরিয়ে দেয়। যেহেতু কোনো প্রতিদানদাতার নাম নেই, হিসাবটি সেই ব্যক্তির সাথে নয় যে উপকার পেয়েছে। তাদের কাছ থেকে ফেরত আশা করাই উদারতাকে তিক্ত করে তোলে, আর এই পঙ্‌ক্তি নীরবে সেই আশাটিই সরিয়ে নেয়।",
          },
          {
            en: "It also raises the standard of the work itself. If the return matches the kind, then a job half done returns half done, and quality is not a matter of who is watching. Concretely: finish the thing properly when nobody will check, answer the message you could ignore, sharpen the knife. And read the verse in reverse for a sharper test — if the reward of ihsan is ihsan, what is the reward of the other thing?",
            bn: "এটি কাজটির মানও উঁচু করে দেয়। প্রতিদান যদি জাতের সাথে মেলে, তবে আধা-করা কাজ আধা-করা হয়েই ফেরে, আর গুণমান কে দেখছে তার ওপর নির্ভর করে না। বাস্তবে: কেউ যাচাই করবে না জেনেও কাজটি ঠিকভাবে শেষ করুন; যে বার্তাটি উপেক্ষা করা যেত তার জবাব দিন; ছুরিটি ধার দিন। আর আয়াতটি উল্টো দিক থেকেও পড়ুন, তাতে পরীক্ষাটি আরও ধারালো হয় — ইহসানের প্রতিদান যদি ইহসান হয়, তবে তার উল্টোটির প্রতিদান কী?",
          },
        ],
      },
    ],
  },

  '9:40': {
    sections: [
      {
        h: { en: "An Argument Inside a Rebuke", bn: "তিরস্কারের ভেতরে এক যুক্তি" },
        p: [
          {
            en: "This verse is not a standalone piece of history. It arrives in the middle of the reproach over Tabuk. 9:38 asks believers what is the matter with them that when they are told to go forth in the way of Allah they cling heavily to the earth, and 9:39 warns that Allah will replace a people who do not respond. Then comes our verse, opening illa tansuruhu — if you do not help him.",
            bn: "এই আয়াতটি বিচ্ছিন্ন কোনো ইতিহাসের টুকরো নয়। এটি আসে তাবুক নিয়ে তিরস্কারের মাঝখানে। 9:38 মুমিনদের জিজ্ঞেস করে, তাদের কী হলো যে আল্লাহর পথে বেরিয়ে পড়তে বলা হলে তারা মাটির দিকে ভারী হয়ে ঝুঁকে পড়ে; আর 9:39 সতর্ক করে যে যারা সাড়া দেয় না আল্লাহ তাদের বদলে অন্য জাতি আনবেন। এরপর আসে আমাদের আয়াত, শুরু হয় ইল্লা তানসুরূহু দিয়ে — যদি তোমরা তাকে সাহায্য না করো।",
          },
          {
            en: "The logic is then complete: faqad nasarahu Allah, Allah has already helped him. The past tense is doing the work. The argument is not that Allah will manage without you but that He has, demonstrably, on an occasion everyone listening remembers. And 9:41 follows immediately with the command to go forth, light or heavy. The cave is being used as evidence in a live dispute, not recalled for its own sake.",
            bn: "এরপর যুক্তিটি পূর্ণ হয়: ফাক্বাদ নাসারাহুল্লাহ, আল্লাহ তো তাকে সাহায্য করেছেনই। কাজটি করছে অতীত কালই। যুক্তি এই নয় যে আল্লাহ তোমাদের ছাড়াই চালিয়ে নেবেন, বরং এই যে তিনি চালিয়ে নিয়েছেন — প্রমাণসহ, এমন এক ঘটনায় যা উপস্থিত সবাই মনে রেখেছে। আর 9:41 সঙ্গে সঙ্গেই আসে হালকা হোক বা ভারী, বেরিয়ে পড়ার আদেশ নিয়ে। গুহাকে ব্যবহার করা হচ্ছে চলমান এক বিতর্কে প্রমাণ হিসেবে, নিছক ঘটনার খাতিরে নয়।",
          },
        ],
      },
      {
        h: { en: "The Second of Two", bn: "দুজনের দ্বিতীয়জন" },
        p: [
          {
            en: "Idh akhrajahu alladhina kafaru — when those who disbelieved drove him out. The Quran describes the same plot in 8:30, where they schemed to imprison, kill or expel him. Then thaniya ithnayni, the second of two. Not one of two: the second, which places him in a pair and leaves the other member unnamed in the verse and universally identified in the tradition as Abu Bakr (RA).",
            bn: "ইয্ আখরাজাহুল্লাযীনা কাফারূ — যখন কাফিররা তাকে বের করে দিয়েছিল। কুরআন একই ষড়যন্ত্রের কথা বলে 8:30 আয়াতে, যেখানে তারা তাকে বন্দী করা, হত্যা করা বা বহিষ্কার করার পরিকল্পনা করেছিল। এরপর সানিয়াস্‌নাইন, দুজনের দ্বিতীয়জন। ‘দুজনের একজন’ নয়: দ্বিতীয়জন — যা তাঁকে একটি জোড়ার ভেতরে বসায়, আর জোড়ার অন্যজনের নাম আয়াতে নেই, তবে ঐতিহ্যে সর্বসম্মতভাবে তিনি আবু বকর (রাঃ)।",
          },
          {
            en: "Idh huma fil-ghar, when the two of them were in the cave. Sahih al-Bukhari records that they remained in the cave of Thawr for three nights while the search parties combed the roads. It also preserves Abu Bakr saying that he looked up and saw the feet of the pursuers, and told the Prophet ﷺ that if one of them merely looked down he would see them — and was answered: what do you think of two whose third is Allah?",
            bn: "ইয্ হুমা ফিল-গার, যখন তারা দুজন গুহায় ছিল। সহীহ বুখারী জানায় যে তাঁরা তিন রাত সাওর গুহায় ছিলেন, আর অনুসন্ধানকারী দলগুলো তখন পথঘাট চষে বেড়াচ্ছিল। বুখারী এ-ও সংরক্ষণ করেছে যে আবু বকর বলেছিলেন, তিনি ওপরে তাকিয়ে অনুসন্ধানকারীদের পা দেখেছিলেন, আর নবী ﷺ-কে বলেছিলেন, তাদের একজন যদি কেবল নিচের দিকে তাকাত তবে আমাদের দেখে ফেলত — জবাব এসেছিল: সেই দুজন সম্পর্কে তোমার কী ধারণা যাদের তৃতীয়জন আল্লাহ?",
          },
        ],
      },
      {
        h: { en: "Do Not Grieve", bn: "দুঃখ করো না" },
        p: [
          {
            en: "Idh yaqulu lisahibihi la tahzan. When he said to his companion, do not grieve. The word chosen is hazan, sorrow, not khawf, fear. Arabic had the other verb available and did not use it. Grief looks at what is about to be lost — a life, a mission, a city left behind — and the reassurance is aimed precisely there.",
            bn: "ইয্ ইয়াকূলু লিসাহিবিহি লা তাহযান। যখন সে তার সঙ্গীকে বলল, দুঃখ করো না। বেছে নেওয়া শব্দটি হুযন অর্থাৎ দুঃখ, খাওফ অর্থাৎ ভয় নয়। আরবির হাতে অন্য ক্রিয়াটিও ছিল, তবু তা ব্যবহার করা হয়নি। দুঃখ তাকায় যা হারাতে বসেছে তার দিকে — একটি জীবন, একটি দাওয়াত, পেছনে ফেলে আসা একটি শহর — আর আশ্বাসটি ঠিক সেদিকেই তাক করা।",
          },
          {
            en: "Sahib, companion, is the word the tradition takes as a permanent title. And then inna Allaha ma'ana — Allah is with us. Not with me. In a moment when one man could reasonably have claimed the protection for himself, the pronoun is plural. The whole theology of the verse turns on that syllable: the withness being invoked covers the frightened man as much as the one reassuring him.",
            bn: "সাহিব অর্থাৎ সঙ্গী — শব্দটিকে ঐতিহ্য একটি স্থায়ী উপাধি হিসেবেই নেয়। এরপর ইন্না আল্লাহা মা‘আনা — আল্লাহ আমাদের সাথে আছেন। ‘আমার সাথে’ নয়। এমন এক মুহূর্তে, যখন একজন মানুষ যুক্তিসঙ্গতভাবেই সুরক্ষাটিকে নিজের বলে দাবি করতে পারতেন, সেখানে সর্বনামটি বহুবচন। আয়াতের গোটা তত্ত্বটিই ওই এক ধ্বনির ওপর দাঁড়িয়ে: যে সঙ্গ ডাকা হচ্ছে তা ভীত মানুষটিকেও ততটাই ঢেকে রাখে যতটা ঢাকে আশ্বাসদাতাকে।",
          },
        ],
      },
      {
        h: { en: "The Sakinah Sent Down", bn: "নাযিলকৃত সাকীনাহ" },
        p: [
          {
            en: "Fa-anzala Allahu sakinatahu alayhi. The verb is anzala, sent down, the same verb used of revelation and of rain. Sakinah is stillness that settles — from the root that gives sakan, a dwelling, a place one comes to rest. It is not the absence of danger. It is composure supplied from outside while the danger is still standing at the mouth of the cave.",
            bn: "ফা-আনযালাল্লাহু সাকীনাতাহু ‘আলাইহ। ক্রিয়াটি আনযালা, অর্থাৎ নাযিল করলেন — একই ক্রিয়া যা ওহি ও বৃষ্টির জন্যও ব্যবহৃত হয়। সাকীনাহ হলো থিতিয়ে বসা স্থিরতা — সেই ধাতু থেকে যা থেকে সাকান, অর্থাৎ বাসস্থান, যেখানে মানুষ এসে বিশ্রাম নেয়। এটি বিপদের অনুপস্থিতি নয়। এটি বাইরে থেকে সরবরাহ করা প্রশান্তি, যখন বিপদ তখনো গুহামুখে দাঁড়িয়ে।",
          },
          {
            en: "The pronoun alayhi, upon him, has occupied the commentators. The majority hold that it refers to the Prophet ﷺ, as the pronouns before it do. A well-known second view, reported from Ibn Abbas (RA) among others, is that it refers to Abu Bakr (RA), since the Prophet ﷺ was already settled and it was his companion who was being told not to grieve. Both are held by respected authorities and the verse is read either way without dispute over its meaning.",
            bn: "‘আলাইহি অর্থাৎ ‘তার ওপর’ সর্বনামটি নিয়ে মুফাসসিরগণ আলোচনা করেছেন। অধিকাংশের মত, এটি নবী ﷺ-কে বোঝায়, যেমন এর আগের সর্বনামগুলো বোঝায়। সুপরিচিত দ্বিতীয় মত, যা ইবনে আব্বাস (রাঃ) প্রমুখ থেকে বর্ণিত, তা হলো এটি আবু বকর (রাঃ)-কে বোঝায়, কারণ নবী ﷺ তো আগে থেকেই স্থির ছিলেন, আর দুঃখ না করতে বলা হচ্ছিল তাঁর সঙ্গীকে। উভয় মতই সম্মানিত ইমামগণ ধারণ করেন, আর আয়াতের অর্থ নিয়ে বিতর্ক ছাড়াই দুভাবেই পড়া হয়।",
          },
        ],
      },
      {
        h: { en: "Armies You Did Not See", bn: "যে বাহিনী তোমরা দেখোনি" },
        p: [
          {
            en: "Wa ayyadahu bijunudin lam tarawha — and He supported him with armies you did not see. Ayyada is from ayd, strength; the sense is bracing something so it holds. The relative clause is addressed to the audience: you did not see them. The help that decided the outcome was invisible to the very people now being asked to march. Sakinah appears again in this surah at 9:26, and Surah al-Fath records it repeatedly, as at 48:4.",
            bn: "ওয়া আইয়্যাদাহু বিজুনূদিন লাম তারাওহা — আর তিনি তাকে এমন বাহিনী দিয়ে শক্তি জুগিয়েছেন যা তোমরা দেখোনি। আইয়্যাদা এসেছে আইদ অর্থাৎ শক্তি থেকে; ভাবটি হলো কিছু একটাকে ঠেস দিয়ে ধরে রাখা যাতে তা টেকে। সম্বন্ধবাচক অংশটি শ্রোতাদের উদ্দেশে: তোমরা তাদের দেখোনি। যে সাহায্য ফলাফল নির্ধারণ করেছিল তা অদৃশ্য ছিল ঠিক সেই মানুষদের কাছেই, যাদের এখন বেরিয়ে পড়তে বলা হচ্ছে। সাকীনাহ এই সূরাতেই আবার আসে 9:26 আয়াতে, আর সূরা আল-ফাতহে বারবার, যেমন 48:4 আয়াতে।",
          },
          {
            en: "The closing clause is built on a contrast of grammar that translation flattens. The word of those who disbelieved was made lowest — a verb, an event with a date. But the word of Allah, hiya al-ulya, it is the highest — a nominal sentence with no verb at all, which in Arabic states a permanent fact rather than an occurrence. One was brought down; the other simply is above, and always was.",
            bn: "শেষ বাক্যাংশটি এমন এক ব্যাকরণগত বৈসাদৃশ্যের ওপর গড়া, যা অনুবাদে চাপা পড়ে যায়। যারা কুফরি করেছে তাদের কথা নিচু করে দেওয়া হলো — একটি ক্রিয়া, তারিখওয়ালা একটি ঘটনা। কিন্তু আল্লাহর কথা, হিয়াল-উলইয়া, তা-ই সর্বোচ্চ — একটি নামবাচক বাক্য, যাতে কোনো ক্রিয়াই নেই; আরবিতে এমন বাক্য কোনো ঘটনা নয়, বরং স্থায়ী সত্য ঘোষণা করে। একটিকে নামিয়ে দেওয়া হলো; অন্যটি কেবল ওপরেই আছে, আর সবসময়ই ছিল।",
          },
        ],
      },
      {
        h: { en: "How It Is Lived", bn: "আজ যেভাবে এটি জীবনে আসে" },
        p: [
          {
            en: "The scene is deliberately stripped of everything people count on. Two men, no army, no city, no money, a search party outside and a rock ceiling above. What remains is one sentence, and it is a statement of fact rather than a plan: Allah is with us. The verse does not teach that danger is unreal. It teaches what a believer says while it is still real.",
            bn: "দৃশ্যটি থেকে ইচ্ছাকৃতভাবে সেসব কিছু সরিয়ে নেওয়া হয়েছে যার ওপর মানুষ ভরসা করে। দুজন মানুষ, কোনো বাহিনী নেই, শহর নেই, অর্থ নেই, বাইরে অনুসন্ধানকারী দল আর মাথার ওপর পাথরের ছাদ। যা টিকে থাকে তা একটি বাক্য, আর তা কোনো পরিকল্পনা নয়, বরং সত্যের ঘোষণা: আল্লাহ আমাদের সাথে আছেন। আয়াত শেখায় না যে বিপদ অবাস্তব। এটি শেখায় বিপদ বাস্তব থাকতে থাকতেই একজন মুমিন কী বলে।",
          },
          {
            en: "There is also something in it for whoever is the frightened one. The words were not addressed to a person of great composure; they were addressed to the man who was afraid, and the sakinah came down in that cave, not before it. In practice this verse belongs to the night before a hearing, the wait for a result, the hour after bad news — said in the plural, because the promise was made to two.",
            bn: "যে ভীত, তার জন্যও এখানে কিছু আছে। কথাগুলো বলা হয়নি অসীম ধৈর্যের কোনো মানুষকে; বলা হয়েছিল সেই মানুষটিকে যিনি ভয় পাচ্ছিলেন, আর সাকীনাহ নাযিল হয়েছিল সেই গুহার ভেতরেই, তার আগে নয়। বাস্তবে এই আয়াতটি শুনানির আগের রাতের, ফলাফলের অপেক্ষার, দুঃসংবাদের পরের প্রহরের — আর তা বলতে হয় বহুবচনেই, কারণ প্রতিশ্রুতিটি দেওয়া হয়েছিল দুজনকে।",
          },
        ],
      },
    ],
  },
'67:1-2': {
  sections: [
    {
      h: { en: "The Hand That Holds the Kingdom", bn: "যে হাতে রাজত্ব" },
      p: [
        {
          en: "Surah al-Mulk opens with tabaraka, a word of overflowing blessedness that the Quran uses only of Allah. Blessed is He in whose hand is al-mulk — not one kingdom among many, but dominion itself: ownership and command over everything that exists. The phrase in His hand places the whole of it under His disposal alone, and the clause that follows removes every limit: He is capable over all things. Nothing in the opening is shared out, delegated or negotiable.",
          bn: "সূরা আল-মুলক শুরু হয় 'তাবারাকা' শব্দ দিয়ে — উপচে পড়া বরকতের এমন এক শব্দ, যা কুরআন কেবল আল্লাহর জন্যই ব্যবহার করে। বরকতময় তিনি, যাঁর হাতে আল-মুলক — অনেক রাজ্যের মধ্যে একটি রাজ্য নয়, বরং স্বয়ং রাজত্ব: যা কিছু আছে সবকিছুর মালিকানা ও কর্তৃত্ব। 'তাঁর হাতে' কথাটি পুরোটাই কেবল তাঁর নিয়ন্ত্রণে রাখে, আর পরের বাক্যাংশ সব সীমা তুলে দেয়: তিনি সবকিছুর ওপর ক্ষমতাবান। এই সূচনায় কোনো কিছুই ভাগ করা, হস্তান্তরিত বা দর-কষাকষির নয়।",
        },
        {
          en: "Read slowly, the sentence reorders a person's map of power. Every throne, market, illness and opportunity sits inside a dominion held by one hand, and the Quran says elsewhere that He gives dominion to whom He wills and strips it from whom He wills, as 3:26 puts it. Whoever a matter actually depends on is the one worth turning to, and this verse names Him before anything else in the surah is said.",
          bn: "ধীরে পড়লে বাক্যটি মানুষের ক্ষমতার মানচিত্রটাই নতুন করে সাজিয়ে দেয়। প্রতিটি সিংহাসন, বাজার, অসুখ ও সুযোগ এমন এক রাজত্বের ভেতরে বসে আছে, যা একটি হাতে ধরা; আর কুরআন অন্যত্র বলে, তিনি যাকে চান রাজত্ব দেন এবং যার কাছ থেকে চান কেড়ে নেন — যেমন 3:26 বলে। কোনো বিষয় প্রকৃতপক্ষে যাঁর ওপর নির্ভর করে, তাঁর দিকেই ফেরা সার্থক; আর সূরার অন্য কিছু বলার আগেই এই আয়াত তাঁর নাম নেয়।",
        },
      ],
    },
    {
      h: { en: "Death Created, and Named First", bn: "মৃত্যু সৃষ্ট, এবং আগে উল্লেখিত" },
      p: [
        {
          en: "He who created death and life. Two details stop the attentive reader. First, death is created — it is not a mere absence or a failure of life, but something Allah made with intent, which means it arrives by design and on schedule, not by accident. Second, death is named before life. The commentators offer more than one reason, among them that nothing awakens a heart and drives it to act like the remembrance of death standing at the end of every plan.",
          bn: "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন। মনোযোগী পাঠক দুটি বিষয়ে থমকে দাঁড়ায়। প্রথমত, মৃত্যু সৃষ্ট — এটি নিছক অনুপস্থিতি বা জীবনের ব্যর্থতা নয়, বরং আল্লাহ উদ্দেশ্য নিয়েই তা বানিয়েছেন; অর্থাৎ মৃত্যু আসে পরিকল্পনা অনুযায়ী, নির্ধারিত সময়ে — দুর্ঘটনাবশত নয়। দ্বিতীয়ত, জীবনের আগে মৃত্যুর নাম এসেছে। মুফাসসিরগণ একাধিক কারণ বলেছেন; তার একটি হলো, প্রতিটি পরিকল্পনার শেষে দাঁড়িয়ে থাকা মৃত্যুর স্মরণের মতো আর কিছুই হৃদয়কে এমন জাগায় না ও কাজে নামায় না।",
        },
        {
          en: "Then comes the purpose clause: to test you as to which of you is best in deed. Life is not explained here as a reward, a punishment or an accident; it is an examination hall. A test implies an examiner who watches, a standard that is fixed, and a result that will be announced. That single clause is the surah's answer to the question every human being eventually asks about why any of this exists.",
          bn: "এরপর আসে উদ্দেশ্যবাচক অংশ: তোমাদের পরীক্ষা করার জন্য — কে তোমাদের মধ্যে কাজে সর্বোত্তম। জীবনকে এখানে পুরস্কার, শাস্তি বা দুর্ঘটনা হিসেবে ব্যাখ্যা করা হয়নি; এটি এক পরীক্ষার হল। পরীক্ষা মানেই আছেন এক পরীক্ষক যিনি দেখছেন, আছে এক স্থির মানদণ্ড, আর আছে এক ফল যা ঘোষিত হবে। এসবের অস্তিত্ব কেন — প্রতিটি মানুষ একদিন যে প্রশ্নটি করে, এই একটি বাক্যাংশই তার প্রতি সূরার উত্তর।",
        },
      ],
    },
    {
      h: { en: "Best in Deed, Not Most", bn: "সর্বোত্তম কাজ, সর্বাধিক নয়" },
      p: [
        {
          en: "The wording is ahsanu amala, best in deed — not akthara amala, most in deed. The early scholar Fudayl ibn Iyad explained best as the most sincere and the most correct: a deed done sincerely for Allah but not according to His guidance is not accepted, and a deed done correctly but for other than Allah is not accepted, until it is both. The verse grades quality, and quality has those two components.",
          bn: "শব্দটি হলো 'আহসানু আমালা' — কাজে সর্বোত্তম; 'আকসারা আমালা' — কাজে সর্বাধিক — নয়। প্রাথমিক যুগের আলিম ফুদাইল ইবনে ইয়াদ 'সর্বোত্তম'-এর ব্যাখ্যা করেছেন: সবচেয়ে ইখলাসপূর্ণ ও সবচেয়ে শুদ্ধ। যে কাজ আল্লাহর জন্য ইখলাসের সঙ্গে করা হলো কিন্তু তাঁর দেখানো পথে নয়, তা কবুল হয় না; আর যে কাজ শুদ্ধভাবে করা হলো কিন্তু আল্লাহ ছাড়া অন্য কারও জন্য, তা-ও কবুল হয় না — যতক্ষণ না দুটোই মেলে। আয়াতটি মান বিচার করে, আর মানের উপাদান ওই দুটিই।",
        },
        {
          en: "The same test formula appears twice more in the Quran. In 11:7 the creation of the heavens and the earth is for this trial of who is best in deed, and in 18:7 everything beautiful on the earth is called adornment placed there for the same examination. Wealth, ability and time are exam materials, not prizes. The question the verses keep asking is not how much passed through your hands but what you did with it.",
          bn: "একই পরীক্ষার বাক্যরীতি কুরআনে আরও দুবার এসেছে। 11:7 আয়াতে আসমান ও যমীনের সৃষ্টিকে বলা হয়েছে এই পরীক্ষার জন্য — কে কাজে সর্বোত্তম; আর 18:7 আয়াতে যমীনের ওপরের সব সৌন্দর্যকে বলা হয়েছে সাজসজ্জা, যা একই পরীক্ষার জন্যই রাখা। সম্পদ, সামর্থ্য ও সময় পরীক্ষার উপকরণ, পুরস্কার নয়। আয়াতগুলো বারবার যে প্রশ্ন করে তা এই নয় যে আপনার হাত দিয়ে কতটা গেল, বরং আপনি তা দিয়ে কী করলেন।",
        },
      ],
    },
    {
      h: { en: "The Mighty, the Forgiving", bn: "পরাক্রমশালী, ক্ষমাশীল" },
      p: [
        {
          en: "The verse seals with two names side by side: al-Aziz, the Mighty whose will cannot be resisted, and al-Ghafur, the Forgiving. The pairing is deliberate. A test set by the Mighty cannot be dodged, appealed against or outwitted, so the name warns. But a test set by the Forgiving expects that the examinee will stumble, and keeps a door open for the one who returns, so the same ending comforts.",
          bn: "আয়াতটি শেষ হয় পাশাপাশি দুটি নামে: আল-আযীয — পরাক্রমশালী, যাঁর ইচ্ছাকে প্রতিরোধ করা যায় না; আর আল-গাফূর — ক্ষমাশীল। এই জুটি ইচ্ছাকৃত। পরাক্রমশালীর নেওয়া পরীক্ষা এড়ানো যায় না, তার বিরুদ্ধে আপিল চলে না, তাঁকে ফাঁকিও দেওয়া যায় না — তাই নামটি সতর্ক করে। কিন্তু ক্ষমাশীলের নেওয়া পরীক্ষা ধরেই নেয় যে পরীক্ষার্থী হোঁচট খাবে, আর যে ফিরে আসে তার জন্য দরজা খোলা রাখে — তাই একই সমাপ্তি সান্ত্বনাও দেয়।",
        },
        {
          en: "This is the Quran's habitual balance between fear and hope. The One who announces in 39:53 that He forgives all sins for those who turn back is the same One who will read out the results of the test of life. Neither name cancels the other. A believer works carefully because the Examiner is Mighty, and keeps working after every failure because the Examiner is Forgiving.",
          bn: "এটাই ভয় ও আশার মধ্যে কুরআনের চিরাচরিত ভারসাম্য। যিনি 39:53 আয়াতে ঘোষণা করেন যে যারা ফিরে আসে তাদের সব গুনাহ তিনি ক্ষমা করেন, তিনিই জীবনের পরীক্ষার ফল পড়ে শোনাবেন। কোনো নামই অন্যটিকে বাতিল করে না। মুমিন সতর্ক হয়ে কাজ করে, কারণ পরীক্ষক পরাক্রমশালী; আর প্রতিটি ব্যর্থতার পরও কাজ চালিয়ে যায়, কারণ পরীক্ষক ক্ষমাশীল।",
        },
      ],
    },
    {
      h: { en: "A Surah That Pleads for Its Companion", bn: "যে সূরা সঙ্গীর পক্ষে সুপারিশ করে" },
      p: [
        {
          en: "The Prophet ﷺ said that a surah of thirty verses interceded for a man until he was forgiven, and named it: Blessed is He in whose hand is the dominion. The report is in the collection of at-Tirmidhi and others. It is also reported that the Prophet ﷺ would recite this surah before sleeping. The surah defends the one who keeps its company — and keeping its company means letting its opening verses set the terms of the day.",
          bn: "নবী ﷺ বলেছেন, ত্রিশ আয়াতের একটি সূরা এক ব্যক্তির জন্য সুপারিশ করেছে, যতক্ষণ না তাকে ক্ষমা করা হয়; আর তিনি সূরাটির নামও বলেছেন: বরকতময় তিনি, যাঁর হাতে রাজত্ব। বর্ণনাটি তিরমিযী ও অন্যান্যদের সংকলনে আছে। আরও বর্ণিত আছে যে নবী ﷺ ঘুমানোর আগে এই সূরা পাঠ করতেন। সূরাটি তার সঙ্গীর পক্ষে দাঁড়ায় — আর সঙ্গী হওয়া মানে এর সূচনার আয়াতগুলোকে দিনের শর্ত ঠিক করতে দেওয়া।",
        },
        {
          en: "Living these two verses means measuring days by quality rather than volume. Before a task, the two questions of Fudayl apply: is this for Allah, and is it done the way He taught? A small deed that passes both tests outweighs a large one that fails either. And when the day ends with shortfalls, the closing names take over: answerable to the Mighty, hopeful in the Forgiving, and back at work tomorrow.",
          bn: "এই দুই আয়াত নিয়ে বাঁচা মানে দিনগুলোকে পরিমাণ দিয়ে নয়, মান দিয়ে মাপা। কোনো কাজের আগে ফুদাইলের দুটি প্রশ্নই প্রযোজ্য: এটা কি আল্লাহর জন্য, আর এটা কি তাঁর শেখানো পদ্ধতিতে হচ্ছে? যে ছোট কাজ দুটি পরীক্ষাতেই উত্তীর্ণ, তা সেই বড় কাজের চেয়ে ভারী যা যেকোনো একটিতে ফেল করে। আর দিন যখন ঘাটতি নিয়ে শেষ হয়, তখন সমাপ্তির নাম দুটি দায়িত্ব নেয়: পরাক্রমশালীর কাছে জবাবদিহি, ক্ষমাশীলের কাছে আশা — এবং আগামীকাল আবার কাজে ফেরা।",
        },
      ],
    },
  ],
},
'50:16': {
  sections: [
    {
      h: { en: "A Turn Inward in Surah Qaf", bn: "সূরা কাফে ভেতরের দিকে মোড়" },
      p: [
        {
          en: "Surah Qaf answers people who found resurrection unbelievable: when we have become dust, they asked, is that a far-fetched return? The surah first points outward — 50:6-8 tell the doubter to look at the sky, how it was built without flaw, and at the earth and its growing pairs. Then, at this verse, the argument turns inward, from the horizons to the reader's own chest: We created man, and We know what his soul whispers to him.",
          bn: "সূরা কাফ তাদের উত্তর দেয় যারা পুনরুত্থানকে অবিশ্বাস্য মনে করত: তারা প্রশ্ন করত, আমরা মাটি হয়ে গেলে সেই প্রত্যাবর্তন কি সুদূরপরাহত নয়? সূরাটি প্রথমে বাইরের দিকে ইশারা করে — 50:6-8 সন্দেহকারীকে বলে আকাশের দিকে তাকাতে, কীভাবে তা নিখুঁতভাবে নির্মিত, আর যমীন ও তার উদ্গত জোড়াগুলোর দিকে। তারপর এই আয়াতে যুক্তি ভেতরের দিকে মোড় নেয় — দিগন্ত থেকে পাঠকের নিজের বুকে: আমরা মানুষকে সৃষ্টি করেছি, এবং তার প্রাণ তাকে যা কুমন্ত্রণা দেয় তা আমরা জানি।",
        },
        {
          en: "The logic is tight. The One who made a thing knows it through and through, so re-making it is no difficulty, and nothing inside it is hidden from Him. The verse joins creation and knowledge in a single breath so that neither can be believed without the other. Whoever accepts that Allah created him has already conceded that Allah knows him better than he knows himself.",
          bn: "যুক্তিটি নিরেট। যিনি কোনো কিছু বানিয়েছেন তিনি তা আগাগোড়া জানেন; কাজেই তা পুনরায় বানানো তাঁর জন্য কঠিন নয়, আর তার ভেতরের কিছুই তাঁর কাছে গোপন নয়। আয়াতটি সৃষ্টি ও জ্ঞানকে এক নিঃশ্বাসে জুড়ে দেয়, যেন একটিকে না মেনে অন্যটি মানা না যায়। যে স্বীকার করে আল্লাহ তাকে সৃষ্টি করেছেন, সে আসলে মেনেই নিয়েছে যে আল্লাহ তাকে তার নিজের চেয়েও ভালো জানেন।",
        },
      ],
    },
    {
      h: { en: "The Whisper of the Soul", bn: "প্রাণের কুমন্ত্রণা" },
      p: [
        {
          en: "Tuwaswisu bihi nafsuhu — what his own soul whispers to him. Waswasah is the lowest register of inner speech: not a decision, not even a formed thought, but the murmur that passes through before a person has chosen anything. The verse claims knowledge at that depth. Plans never spoken, resentments never shown, hopes too embarrassing to admit — all of it lies open before Him at the stage where we ourselves barely notice it.",
          bn: "তুওয়াসউইসু বিহি নাফসুহু — তার নিজের প্রাণ তাকে যা কুমন্ত্রণা দেয়। ওয়াসওয়াসা হলো ভেতরের কথার সবচেয়ে নিচু স্তর: কোনো সিদ্ধান্ত নয়, এমনকি গড়ে ওঠা কোনো ভাবনাও নয় — মানুষ কিছু বেছে নেওয়ার আগেই যে গুঞ্জন ভেতর দিয়ে বয়ে যায়, সেটিই। আয়াতটি সেই গভীরতার জ্ঞান দাবি করে। কখনো মুখে না আনা পরিকল্পনা, কখনো প্রকাশ না করা ক্ষোভ, স্বীকার করতে লজ্জা লাগে এমন আশা — সবই তাঁর সামনে খোলা, এমন স্তরে যেখানে আমরা নিজেরাও তা টেরই পাই না।",
        },
        {
          en: "The Prophet ﷺ told his community something merciful about this same layer: Allah has overlooked for my ummah what their souls whisper, so long as they do not act on it or speak it. The report is agreed upon in al-Bukhari and Muslim. So the whisper is fully known but not held against us while it stays a whisper. Knowledge this complete, paired with pardon this wide, is the verse's first surprise.",
          bn: "নবী ﷺ এই স্তরটি নিয়েই তাঁর উম্মতকে এক দয়ার্দ্র কথা বলেছেন: আল্লাহ আমার উম্মতের প্রাণ যা কুমন্ত্রণা দেয় তা উপেক্ষা করেছেন — যতক্ষণ না তারা সে অনুযায়ী কাজ করে বা মুখে বলে। বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। অর্থাৎ কুমন্ত্রণা পুরোপুরি জানা, কিন্তু যতক্ষণ তা কুমন্ত্রণাই থেকে যায় ততক্ষণ আমাদের বিরুদ্ধে ধরা হয় না। এমন পূর্ণ জ্ঞানের সঙ্গে এমন প্রশস্ত ক্ষমার জুটিই আয়াতের প্রথম বিস্ময়।",
        },
      ],
    },
    {
      h: { en: "Nearer Than the Jugular Vein", bn: "ঘাড়ের শিরার চেয়েও নিকটে" },
      p: [
        {
          en: "We are nearer to him than his habl al-warid, the vein of the neck that carries his life. The image is chosen for intimacy: nothing is closer to a person's survival than that vessel, and Allah declares Himself closer still. The commentators explain this as nearness of knowledge and power — He is above His Throne, exalted as He described Himself, yet nothing about His servant is distant from Him. Some also connect the nearness to the recording angels the next verse introduces.",
          bn: "আমরা তার হাবলুল-ওয়ারীদের চেয়েও তার নিকটে — ঘাড়ের সেই শিরা, যা তার জীবন বহন করে। ঘনিষ্ঠতা বোঝাতেই এই উপমা: মানুষের বেঁচে থাকার সঙ্গে ওই রক্তনালীর চেয়ে ঘনিষ্ঠ আর কিছু নেই, অথচ আল্লাহ নিজেকে তার চেয়েও নিকটবর্তী ঘোষণা করেন। মুফাসসিরগণ এর ব্যাখ্যা করেন জ্ঞান ও ক্ষমতার নৈকট্য হিসেবে — তিনি তাঁর আরশের ওপরে, যেভাবে তিনি নিজের বর্ণনা দিয়েছেন সেভাবেই সমুন্নত; তবু তাঁর বান্দার কোনো কিছুই তাঁর থেকে দূরে নয়। কেউ কেউ এই নৈকট্যকে পরের আয়াতে আসা লেখক ফেরেশতাদের সঙ্গেও যুক্ত করেন।",
        },
        {
          en: "The Quran states this nearness elsewhere without imagery: He is with you wherever you are, as 57:4 says, and when My servants ask about Me, I am near, as 2:186 says. Read together, the verses build one fact from three angles — there is no unobserved moment, and also no unaccompanied one. The same closeness that makes sin impossible to hide makes du'a impossible to lose.",
          bn: "কুরআন এই নৈকট্য অন্যত্র উপমা ছাড়াই বলেছে: তোমরা যেখানেই থাকো তিনি তোমাদের সঙ্গে আছেন — যেমন 57:4 বলে; আর আমার বান্দারা আমার সম্পর্কে জিজ্ঞেস করলে, আমি তো নিকটেই — যেমন 2:186 বলে। একসঙ্গে পড়লে আয়াতগুলো তিন দিক থেকে একটিই সত্য দাঁড় করায় — নজরের বাইরে কোনো মুহূর্ত নেই, আবার সঙ্গীহীন কোনো মুহূর্তও নেই। যে নৈকট্যের কারণে গুনাহ লুকানো অসম্ভব, সেই একই নৈকট্যের কারণে দোয়া হারিয়ে যাওয়াও অসম্ভব।",
        },
      ],
    },
    {
      h: { en: "The Watcher Standing Ready", bn: "প্রস্তুত পর্যবেক্ষক" },
      p: [
        {
          en: "The passage does not stop at inner knowledge. The verses that follow, 50:17-18, describe two receivers seated on the right and the left, and declare that not a word is uttered without a watcher standing ready beside the speaker. Divine knowledge needed no scribes; the record is kept for our sake, so that on the Day of Judgment no one can claim the account was invented. Speech, the layer above the whisper, is written as it leaves the lips.",
          bn: "অনুচ্ছেদটি ভেতরের জ্ঞানে থেমে থাকে না। পরের আয়াতগুলো, 50:17-18, ডানে ও বামে বসা দুই গ্রহণকারীর বর্ণনা দেয় এবং ঘোষণা করে যে এমন একটি শব্দও উচ্চারিত হয় না যার পাশে প্রস্তুত পর্যবেক্ষক নেই। আল্লাহর জ্ঞানের জন্য কোনো লেখকের দরকার ছিল না; নথিটি রাখা হয় আমাদেরই জন্য, যেন কিয়ামতের দিন কেউ দাবি করতে না পারে যে হিসাবটি বানানো। কথা — কুমন্ত্রণার ওপরের স্তরটি — ঠোঁট ছাড়ার সঙ্গে সঙ্গেই লেখা হয়ে যায়।",
        },
        {
          en: "This ordering carries a practical mercy. Between the whisper, which is overlooked, and the spoken word, which is recorded, stands a checkpoint that belongs to us. The moment before speaking is the moment the verse trains us to notice. A believer who has absorbed 50:16 and 50:18 together develops a small habitual pause at exactly that border, because it is the border between what is forgiven freely and what enters the book.",
          bn: "এই ক্রমবিন্যাসে এক ব্যবহারিক রহমত আছে। যে কুমন্ত্রণা উপেক্ষিত হয় আর যে উচ্চারিত শব্দ লিপিবদ্ধ হয় — এ দুয়ের মাঝখানে একটি তল্লাশিচৌকি আছে, যা আমাদের হাতে। কথা বলার আগের মুহূর্তটিই সেই মুহূর্ত, যা লক্ষ করতে আয়াতটি আমাদের প্রশিক্ষণ দেয়। যে মুমিন 50:16 ও 50:18 একসঙ্গে আত্মস্থ করেছে, ঠিক ওই সীমান্তে তার একটি ছোট অভ্যাসগত বিরতি তৈরি হয় — কারণ ওটাই সেই সীমান্ত, যার একপাশ বিনা হিসাবে ক্ষমা করা হয় আর অন্যপাশ খাতায় ওঠে।",
        },
      ],
    },
    {
      h: { en: "Awe and Comfort in One Verse", bn: "এক আয়াতে ভয় ও সান্ত্বনা" },
      p: [
        {
          en: "The verse reads differently depending on the state of the one reading it. To a person contemplating a hidden wrong, it is pure awe: the plan is already known, nearer than the vein that feeds the brain. To a person carrying a grief no one around them understands, it is pure comfort: the ache never had to be explained, because the One nearest of all watched it form. Both readings are correct, and each of us needs both on different days.",
          bn: "পাঠকের অবস্থাভেদে আয়াতটি ভিন্নভাবে ধরা দেয়। যে ব্যক্তি গোপন কোনো অন্যায়ের কথা ভাবছে, তার কাছে এটি নিখাদ ভয়: পরিকল্পনাটি আগেই জানা হয়ে গেছে — মস্তিষ্কে রক্ত পৌঁছানো শিরার চেয়েও নিকটে যিনি, তাঁর কাছে। আর যে ব্যক্তি এমন কষ্ট বইছে যা আশপাশের কেউ বোঝে না, তার কাছে এটি নিখাদ সান্ত্বনা: ব্যথাটা কখনো বুঝিয়ে বলার দরকারই ছিল না, কারণ সবার চেয়ে নিকটবর্তী সত্তা তা তৈরি হতে দেখেছেন। দুটি পাঠই সঠিক, আর ভিন্ন ভিন্ন দিনে আমাদের প্রত্যেকের দুটিই লাগে।",
        },
        {
          en: "The lived shape of the verse is honesty in du'a. If He already knows the whisper, then polished wording and presentable versions of ourselves are unnecessary in front of Him; the prayer can start from the true state, however unimpressive. And in solitude, the verse replaces the feeling of being unobserved with the feeling of being accompanied — which restrains the hand from what is hidden and steadies the heart in what is hard.",
          bn: "আয়াতটির জীবনরূপ হলো দোয়ায় সততা। তিনি যদি কুমন্ত্রণাটাই আগে থেকে জানেন, তবে তাঁর সামনে ঘষামাজা শব্দ আর নিজেদের পরিপাটি সংস্করণ অপ্রয়োজনীয়; দোয়া শুরু হতে পারে প্রকৃত অবস্থা থেকেই — তা যত সাদামাটাই হোক। আর নির্জনতায় আয়াতটি 'কেউ দেখছে না' অনুভূতির জায়গায় বসায় 'কেউ সঙ্গে আছেন' অনুভূতি — যা গোপন কাজ থেকে হাত টেনে রাখে এবং কঠিন সময়ে হৃদয়কে স্থির রাখে।",
        },
      ],
    },
  ],
},
'41:34': {
  sections: [
    {
      h: { en: "The Verse After the Call", bn: "আহ্বানের পরের আয়াত" },
      p: [
        {
          en: "Surah Fussilat was revealed in Makkah, in years when calling to Allah earned mockery and harm. The verse just before this one, 41:33, asks: who is better in speech than one who calls to Allah, does righteousness and says, I am of the Muslims? Then comes this verse, and the placement is the point. It is addressed first to the caller, telling him how to answer the hostility his calling will certainly attract.",
          bn: "সূরা ফুসসিলাত মক্কায় নাযিল হয় — এমন বছরগুলোতে, যখন আল্লাহর দিকে ডাকার পুরস্কার ছিল উপহাস ও নির্যাতন। ঠিক আগের আয়াত, 41:33, প্রশ্ন করে: কথায় তার চেয়ে উত্তম কে, যে আল্লাহর দিকে ডাকে, সৎকাজ করে এবং বলে — আমি মুসলিমদের একজন? তারপর আসে এই আয়াত, আর এই অবস্থানই মূল কথা। এটি প্রথমত সেই আহ্বানকারীকে সম্বোধন করে — তার ডাক যে শত্রুতা অবশ্যই টেনে আনবে, তার জবাব কীভাবে দিতে হবে তা শিখিয়ে।",
        },
        {
          en: "That context saves the verse from being read as soft advice for easy days. It was given to people who were being insulted for their faith, and it told them their conduct under insult was part of the call itself. An argument can be won and a listener lost; the verse aims at winning the person, not the exchange.",
          bn: "এই প্রেক্ষাপটই আয়াতটিকে সহজ দিনের নরম উপদেশ হিসেবে পড়া থেকে বাঁচায়। এটি দেওয়া হয়েছিল তাদের, যারা ঈমানের কারণে অপমানিত হচ্ছিল; আর এটি তাদের বলেছিল — অপমানের মুখে তাদের আচরণটাও দাওয়াতেরই অংশ। তর্কে জেতা যায়, অথচ শ্রোতাকে হারানো যায়; আয়াতটির লক্ষ্য মানুষটিকে জেতা, বাক্যবিনিময়টি নয়।",
        },
      ],
    },
    {
      h: { en: "Not Equal, and Not Merely Good", bn: "সমান নয়, কেবল ভালোও নয়" },
      p: [
        {
          en: "The verse opens with a flat statement: the good deed and the evil deed are not equal. That sounds obvious until its consequence lands — if they are not equal, then answering evil with equal evil is trading down, choosing the lesser currency. The command that follows raises the bar further: repel with that which is ahsan, better. Not merely with good, but with the better response available — patience where anger is deserved, a greeting where a slight was given.",
          bn: "আয়াতটি শুরু হয় এক সরাসরি ঘোষণায়: ভালো কাজ আর মন্দ কাজ সমান নয়। কথাটা সাধারণ শোনায়, যতক্ষণ না এর পরিণতিটা ধরা পড়ে — সমান না হলে, মন্দের জবাব সমান মন্দ দিয়ে দেওয়া মানে নিচু মুদ্রায় নেমে যাওয়া। এরপরের আদেশ মানদণ্ড আরও ওঠায়: প্রতিহত করো তা দিয়ে যা 'আহসান' — উত্তম। কেবল ভালো দিয়ে নয়, বরং সম্ভাব্য উত্তম জবাবটি দিয়ে — যেখানে রাগ প্রাপ্য সেখানে ধৈর্য, যেখানে খোঁচা দেওয়া হয়েছে সেখানে সালাম।",
        },
        {
          en: "The same instruction appears in 23:96, repel evil with that which is best, and in 13:22 the people of the final home are described as those who repel evil with good. Repetition across surahs marks this as method, not a one-off counsel. The Quran treats the gracious response as a tool that does work in the world — idfa, repel, is a verb of pushing something back, not of passively absorbing it.",
          bn: "একই নির্দেশ 23:96 আয়াতে আছে — মন্দকে প্রতিহত করো তা দিয়ে যা সর্বোত্তম; আর 13:22 আয়াতে শেষ আবাসের অধিকারীদের পরিচয় দেওয়া হয়েছে — তারা মন্দকে ভালো দিয়ে প্রতিহত করে। একাধিক সূরায় এই পুনরাবৃত্তি বুঝিয়ে দেয়, এটি একটি পদ্ধতি — একবারের উপদেশ নয়। কুরআন অনুগ্রহপূর্ণ জবাবকে দেখে এমন এক হাতিয়ার হিসেবে যা দুনিয়ায় সত্যিই কাজ করে — 'ইদফা', প্রতিহত করো, শব্দটি কিছু ঠেলে ফেরানোর ক্রিয়া, নীরবে সয়ে যাওয়ার নয়।",
        },
      ],
    },
    {
      h: { en: "The Enemy Becomes a Warm Friend", bn: "শত্রু হয়ে ওঠে অন্তরঙ্গ বন্ধু" },
      p: [
        {
          en: "Then the verse states the result: the one between whom and you is enmity will become as though he were a waliyy hamim, a devoted, warm friend. Hamim carries heat — the friend whose concern for you is warm to the touch, not polite distance. The little word kaanna, as though, is honest: the transformation can feel almost unbelievable, yet it happens. Hostility is often a fire waiting for fuel, and a better response starves it.",
          bn: "এরপর আয়াতটি ফল ঘোষণা করে: তোমার ও যার মধ্যে শত্রুতা, সে হয়ে যাবে যেন এক 'ওয়ালিইয়ুন হামীম' — নিবেদিতপ্রাণ, উষ্ণ বন্ধু। 'হামীম' শব্দে তাপ আছে — সেই বন্ধু, তোমার জন্য যার উদ্বেগ ছুঁলে উষ্ণ লাগে; ভদ্র দূরত্ব নয়। ছোট্ট শব্দ 'কাআন্না' — যেন — সৎ স্বীকারোক্তি: এই রূপান্তর প্রায় অবিশ্বাস্য মনে হতে পারে, তবু তা ঘটে। শত্রুতা প্রায়ই জ্বালানির অপেক্ষায় থাকা আগুন, আর উত্তম জবাব সেই জ্বালানি বন্ধ করে দেয়।",
        },
        {
          en: "Ibn Kathir and others record from the early commentators the plain reading of how this works: when a man wrongs you and you meet him with pardon and good, his own nature testifies against him, and the wrongdoer is turned. The verse does not promise that every enemy converts to friendship; it describes what the better response is capable of, and history and ordinary life both supply the examples.",
          bn: "ইবনে কাসীর ও অন্যরা প্রাথমিক মুফাসসিরদের থেকে এর কার্যপ্রণালীর সরল পাঠটি লিপিবদ্ধ করেছেন: কেউ তোমার ওপর অন্যায় করলে তুমি যখন তাকে ক্ষমা ও কল্যাণ দিয়ে বরণ করো, তখন তার নিজের স্বভাবই তার বিরুদ্ধে সাক্ষ্য দেয়, আর অন্যায়কারী ফিরে আসে। আয়াতটি প্রতিশ্রুতি দেয় না যে প্রতিটি শত্রুই বন্ধুতে পরিণত হবে; এটি বর্ণনা করে উত্তম জবাব কী করতে সক্ষম — আর ইতিহাস ও দৈনন্দিন জীবন, দুটোই তার উদাহরণ জোগায়।",
        },
      ],
    },
    {
      h: { en: "Who Can Actually Do This", bn: "কে আসলে এটা পারে" },
      p: [
        {
          en: "The next verse, 41:35, immediately manages expectations: none is granted this quality except those who are patient, and none is granted it except the owner of a great portion. The Quran itself certifies the difficulty. Answering a wound with something better runs against instinct, and the verse calls the capacity a grant — yulaqqaha, something a person is given to receive — and its holder someone with hazz azim, a great share of good.",
          bn: "পরের আয়াত, 41:35, সঙ্গে সঙ্গেই প্রত্যাশা ঠিক করে দেয়: এই গুণ কেবল তাদেরই দেওয়া হয় যারা ধৈর্যশীল, আর কেবল তাকেই দেওয়া হয় যে মহাভাগ্যের অধিকারী। কুরআন নিজেই কাজটির কাঠিন্য প্রত্যয়ন করে। আঘাতের জবাব উত্তম কিছু দিয়ে দেওয়া প্রবৃত্তির বিপরীতে চলে; আর আয়াতটি এই সামর্থ্যকে বলে এক দান — 'ইউলাক্কাহা', যা গ্রহণের জন্য মানুষকে দেওয়া হয় — এবং এর ধারককে বলে 'হাযযিন আযীম'-এর মালিক, কল্যাণের এক বিরাট অংশের অধিকারী।",
        },
        {
          en: "Then 41:36 adds the final piece: if a provocation from Shaytan provokes you, seek refuge in Allah. The sequence is a complete anatomy of the angry moment. The insult arrives; the instinct to strike back is named as the devil's nudge, not as justice; and the remedy is not gritted teeth but isti'adhah, stepping out of the exchange and into Allah's protection. The three verses together are a training program, not a slogan.",
          bn: "এরপর 41:36 শেষ টুকরোটি যোগ করে: শয়তানের পক্ষ থেকে কোনো প্ররোচনা তোমাকে উসকে দিলে আল্লাহর আশ্রয় চাও। এই ধারাবাহিকতা রাগের মুহূর্তের এক পূর্ণাঙ্গ ব্যবচ্ছেদ। অপমান আসে; পাল্টা আঘাতের প্রবৃত্তিকে চিহ্নিত করা হয় শয়তানের ঠেলা হিসেবে — ন্যায়বিচার হিসেবে নয়; আর প্রতিকার দাঁত কামড়ে সহ্য করা নয়, বরং 'ইস্তিআযা' — বাক্যবিনিময় থেকে বেরিয়ে আল্লাহর আশ্রয়ে ঢুকে পড়া। তিনটি আয়াত মিলে একটি প্রশিক্ষণ কর্মসূচি, কোনো স্লোগান নয়।",
        },
      ],
    },
    {
      h: { en: "Practicing the Better Answer", bn: "উত্তম জবাবের অনুশীলন" },
      p: [
        {
          en: "The verse becomes real in small collisions: the curt message, the relative who needles, the colleague who takes credit. Practice starts below heroism — replying to sarcasm with plain courtesy, returning a greeting with a better one as 4:86 teaches, praying quietly for the person who irritates you most. Each repetition weakens the reflex the verse calls Shaytan's provocation and strengthens the grant it calls patience.",
          bn: "আয়াতটি বাস্তব হয়ে ওঠে ছোট ছোট সংঘর্ষে: রুক্ষ বার্তা, খোঁচা দেওয়া আত্মীয়, কৃতিত্ব নিয়ে নেওয়া সহকর্মী। অনুশীলন শুরু হয় বীরত্বের অনেক নিচ থেকে — শ্লেষের জবাবে সাদাসিধা ভদ্রতা, সালামের জবাব আরও উত্তমভাবে ফেরানো যেমন 4:86 শেখায়, যে মানুষটি সবচেয়ে বিরক্ত করে তার জন্য নীরবে দোয়া করা। প্রতিটি পুনরাবৃত্তি সেই প্রতিবর্ত ক্রিয়াকে দুর্বল করে যাকে আয়াত বলে শয়তানের প্ররোচনা, আর সেই দানকে মজবুত করে যাকে বলে ধৈর্য।",
        },
        {
          en: "One caution keeps the practice honest: the verse is about personal graciousness, not about abandoning justice or enabling oppression; the Quran elsewhere affirms the right of the wronged. What it removes is retaliation as a habit of the tongue and heart in daily dealings. The believer who masters that exchange rate — paying in better coin than was received — walks around with the great portion 41:35 describes, and some former enemies as proof.",
          bn: "একটি সতর্কতা অনুশীলনটিকে সৎ রাখে: আয়াতটি ব্যক্তিগত মহানুভবতা নিয়ে — ন্যায়বিচার ছেড়ে দেওয়া বা জুলুমকে প্রশ্রয় দেওয়া নিয়ে নয়; কুরআন অন্যত্র মজলুমের অধিকার স্বীকার করেছে। এটি যা সরায় তা হলো দৈনন্দিন লেনদেনে জিহ্বা ও হৃদয়ের অভ্যাস হয়ে ওঠা প্রতিশোধ। যে মুমিন এই বিনিময় হার আয়ত্ত করে — যা পেয়েছে তার চেয়ে উত্তম মুদ্রায় শোধ করা — সে চলাফেরা করে 41:35 বর্ণিত সেই মহাভাগ্য নিয়ে, আর প্রমাণ হিসেবে সঙ্গে থাকে কিছু সাবেক শত্রু।",
        },
      ],
    },
  ],
},
'28:77': {
  sections: [
    {
      h: { en: "Advice Shouted at a Rich Man", bn: "এক ধনীকে দেওয়া উপদেশ" },
      p: [
        {
          en: "This verse is speech inside a story. Qarun was of the people of Musa (AS), and 28:76 says Allah gave him treasures whose very keys were a burden for a band of strong men. When he swaggered, his own people gave him the counsel preserved at the end of 28:76 and in this verse — do not exult, seek the Hereafter with what you were given, take your share of this world, do good, and do not work corruption. The Quran kept their words because the advice outgrew its occasion.",
          bn: "এই আয়াত একটি কাহিনির ভেতরের সংলাপ। কারুন ছিল মূসা (আঃ)-এর সম্প্রদায়ের লোক, আর 28:76 বলে, আল্লাহ তাকে এমন ধনভান্ডার দিয়েছিলেন যার চাবিগুলো বইতেই একদল বলবান লোকের কষ্ট হতো। সে যখন দম্ভ করল, তার নিজ সম্প্রদায়ের লোকেরাই তাকে সেই উপদেশ দিল যা 28:76-এর শেষাংশ ও এই আয়াত সংরক্ষণ করেছে — দম্ভ কোরো না, যা দেওয়া হয়েছে তা দিয়ে আখিরাত খোঁজো, দুনিয়ায় তোমার অংশ নাও, কল্যাণ করো, আর ফাসাদ কোরো না। কুরআন তাদের কথাগুলো রেখে দিয়েছে, কারণ উপদেশটি তার উপলক্ষ ছাড়িয়ে গেছে।",
        },
        {
          en: "Notice who is being addressed: not a poor man being consoled, but a wealthy man being warned. The verse assumes the wealth is real, lawful in origin — Allah gave it — and enormous. Its five clauses are therefore a complete policy for handling abundance, delivered at the moment abundance was going to a man's head.",
          bn: "লক্ষ করুন কাকে সম্বোধন করা হচ্ছে: সান্ত্বনা পাওয়া কোনো দরিদ্রকে নয়, বরং সতর্ক করা হচ্ছে এক ধনীকে। আয়াতটি ধরে নেয় সম্পদটি বাস্তব, উৎসে বৈধ — আল্লাহই দিয়েছেন — এবং বিপুল। তাই এর পাঁচটি বাক্যাংশ প্রাচুর্য সামলানোর এক পূর্ণাঙ্গ নীতিমালা — ঠিক সেই মুহূর্তে দেওয়া, যখন প্রাচুর্য একজন মানুষের মাথায় চড়ে বসছিল।",
        },
      ],
    },
    {
      h: { en: "Seek the Hereafter With It", bn: "তা দিয়ে আখিরাত খোঁজো" },
      p: [
        {
          en: "The first clause sets the direction: seek, with what Allah has given you, the home of the Hereafter. The preposition matters — not despite the wealth, and not after abandoning it, but with it, as a vehicle. Money becomes sadaqah, sponsorship of good, relief of debt, support of family; the same coins that anchored Qarun to the ground could have been fuel for the road. Wealth in this reading has no fixed moral character; its direction of travel decides everything.",
          bn: "প্রথম বাক্যাংশ দিক ঠিক করে দেয়: আল্লাহ তোমাকে যা দিয়েছেন তা দিয়ে আখিরাতের আবাস খোঁজো। এখানে 'দিয়ে' কথাটিই আসল — সম্পদ সত্ত্বেও নয়, সম্পদ ত্যাগ করেও নয়, বরং সম্পদ দিয়ে — বাহন হিসেবে। টাকা হয়ে ওঠে সাদাকা, কল্যাণকাজের পৃষ্ঠপোষকতা, ঋণমুক্তি, পরিবারের ভরণপোষণ; যে মুদ্রা কারুনকে মাটিতে গেঁথে রেখেছিল, তা-ই হতে পারত পথের জ্বালানি। এই পাঠে সম্পদের কোনো স্থির নৈতিক চরিত্র নেই; তার যাত্রার দিকই সব ঠিক করে দেয়।",
        },
        {
          en: "The Quran pairs this with its sober description of worldly life in 57:20 — play, adornment, boasting and rivalry in wealth and children — and with the balanced du'a of 2:201 for good in this world and good in the Hereafter. The Qarun verse is where those two threads meet: the world is not despised, but it is demoted to raw material for something permanent.",
          bn: "কুরআন এর সঙ্গে মিলিয়ে দেয় 57:20 আয়াতে দুনিয়ার জীবনের সংযত বর্ণনা — খেলা, সাজসজ্জা, অহংকার আর ধনসম্পদ ও সন্তানে প্রতিযোগিতা — এবং 2:201 আয়াতের ভারসাম্যপূর্ণ দোয়া: দুনিয়ায় কল্যাণ ও আখিরাতে কল্যাণ। কারুনের আয়াতটিই সেই জায়গা যেখানে সুতো দুটি মেলে: দুনিয়াকে ঘৃণা করা হয়নি, তবে তাকে নামিয়ে আনা হয়েছে স্থায়ী কিছুর কাঁচামালের স্তরে।",
        },
      ],
    },
    {
      h: { en: "Your Share of This World", bn: "দুনিয়ায় তোমার অংশ" },
      p: [
        {
          en: "Then a clause that surprises people who expect scripture to scorn the world: and do not forget your nasib, your share, of this world. The commentators read it in two ways, and both are found in the classical tafsir. One: enjoy what is lawful — food, family, rest — for renouncing Allah's permitted gifts is no virtue. The other: your true share of this world is what you send ahead of it, since only that remains yours.",
          bn: "তারপর এমন এক বাক্যাংশ, যা তাদের অবাক করে যারা ভাবে ধর্মগ্রন্থ দুনিয়াকে কেবল তুচ্ছই করবে: আর দুনিয়ায় তোমার 'নাসীব' — তোমার অংশ — ভুলে যেয়ো না। মুফাসসিরগণ এটি দুইভাবে পড়েছেন, আর দুটিই ধ্রুপদী তাফসীরে পাওয়া যায়। এক: বৈধ যা আছে তা উপভোগ করো — খাবার, পরিবার, বিশ্রাম — কারণ আল্লাহর অনুমোদিত নিয়ামত বর্জন কোনো পুণ্য নয়। দুই: দুনিয়ায় তোমার প্রকৃত অংশ তা-ই যা তুমি এখান থেকে আগে পাঠাও, কারণ কেবল সেটুকুই তোমার থেকে যায়।",
        },
        {
          en: "The two readings do not compete so much as guard against opposite failures. The first forbids a joyless, self-punishing religiosity that Islam never asked for. The second forbids letting the enjoyment become the point. A believer holds both: eating gratefully at the table, while knowing that of the whole banquet, only what was shared travels on.",
          bn: "পাঠ দুটি পরস্পরের প্রতিদ্বন্দ্বী নয়; বরং দুটি বিপরীত ব্যর্থতা থেকে পাহারা দেয়। প্রথমটি নিষেধ করে সেই আনন্দহীন, আত্মপীড়নমূলক ধার্মিকতা, যা ইসলাম কখনো চায়নি। দ্বিতীয়টি নিষেধ করে উপভোগকেই উদ্দেশ্য বানিয়ে ফেলা। মুমিন দুটোই ধরে রাখে: টেবিলে বসে কৃতজ্ঞচিত্তে খায়, আর জানে — গোটা ভোজসভার মধ্যে কেবল যা ভাগ করা হয়েছে, সেটুকুই সঙ্গে যাবে।",
        },
      ],
    },
    {
      h: { en: "Ihsan Answered With Ihsan", bn: "ইহসানের জবাবে ইহসান" },
      p: [
        {
          en: "The fourth clause gives generosity its logic: do good as Allah has done good to you. Ihsan toward others is presented as a response, not an initiative — you are not the origin of your wealth, so passing good along is simply matching the treatment you received. This cuts the root of Qarun's disease, which surfaces two verses later when he answers in 28:78 that he was given it all because of knowledge he had. The man who believes he generated his blessings will see no reason to share them.",
          bn: "চতুর্থ বাক্যাংশ দানশীলতার যুক্তি দেয়: কল্যাণ করো, যেমন আল্লাহ তোমার প্রতি কল্যাণ করেছেন। অন্যের প্রতি ইহসানকে এখানে দেখানো হয়েছে প্রতিদান হিসেবে, উদ্যোগ হিসেবে নয় — তোমার সম্পদের উৎস তুমি নও; কাজেই কল্যাণ এগিয়ে দেওয়া মানে কেবল যে আচরণ পেয়েছ তারই প্রতিফলন। এটিই কারুনের ব্যাধির মূল কেটে দেয় — যা দুই আয়াত পরে প্রকাশ পায়, যখন সে 28:78 আয়াতে জবাব দেয় যে এসব তাকে দেওয়া হয়েছে তার নিজের জ্ঞানের কারণে। যে মানুষ বিশ্বাস করে নিয়ামত সে নিজেই বানিয়েছে, সে তা ভাগ করার কোনো কারণ দেখবে না।",
        },
        {
          en: "The final clause closes the policy: do not seek corruption in the land, for Allah does not love the corrupters. Wealth is power, and power leaks into fasad easily — through arrogance, through crushing competitors, through buying what should not be for sale. The verse ends on Allah's love because that is the real ledger: Qarun had everything except it.",
          bn: "শেষ বাক্যাংশ নীতিমালাটি বন্ধ করে: যমীনে ফাসাদ খুঁজো না, কারণ আল্লাহ ফাসাদকারীদের ভালোবাসেন না। সম্পদ মানেই ক্ষমতা, আর ক্ষমতা সহজেই ফাসাদে গড়িয়ে পড়ে — ঔদ্ধত্যে, প্রতিদ্বন্দ্বীদের পিষে ফেলায়, যা বিক্রির জিনিস নয় তা কিনে নেওয়ায়। আয়াতটি শেষ হয় আল্লাহর ভালোবাসার কথায়, কারণ ওটাই আসল খাতা: কারুনের সবই ছিল — কেবল ওটা ছাড়া।",
        },
      ],
    },
    {
      h: { en: "How the Story Ends", bn: "কাহিনির পরিণতি" },
      p: [
        {
          en: "Qarun rejected the counsel. He came out before his people in his adornment, and those who desired the life of this world sighed that they wished for the like of what he was given. Then, as 28:81 recounts, Allah caused the earth to swallow him and his home, and no company defended him. By the next morning, 28:82 says, the same admirers were saying that provision is extended and withheld by Allah's decree, and that only His grace had spared them.",
          bn: "কারুন উপদেশটি প্রত্যাখ্যান করল। সে তার জাঁকজমক নিয়ে নিজের সম্প্রদায়ের সামনে বের হলো, আর যারা দুনিয়ার জীবন কামনা করত তারা আফসোস করে বলল — তাকে যা দেওয়া হয়েছে তেমনটি যদি আমাদেরও থাকত। তারপর, 28:81 যেমন বর্ণনা করে, আল্লাহ তাকে ও তার ঘরবাড়িকে মাটিতে ধসিয়ে দিলেন, আর কোনো দলই তাকে রক্ষা করল না। পরদিন সকালেই, 28:82 বলে, সেই মুগ্ধ লোকেরাই বলছিল — রিযিক আল্লাহর ফয়সালাতেই প্রশস্ত ও সংকুচিত হয়, আর কেবল তাঁর অনুগ্রহই আমাদের বাঁচিয়েছে।",
        },
        {
          en: "For readers who will never hold treasure-house keys, the verse still applies at every scale, because everyone has some given thing — income, skill, influence, time. The audit it suggests is concrete: what portion of each is currently seeking the Hereafter, what portion is lawful enjoyment, and what portion, if any, is quietly working harm. Qarun's people asked him those questions once; the verse asks its reader daily.",
          bn: "যে পাঠক কোনোদিন ধনভান্ডারের চাবি ধরবে না, তার জন্যও আয়াতটি প্রতিটি মাপে প্রযোজ্য, কারণ প্রত্যেকেরই কিছু-না-কিছু দেওয়া জিনিস আছে — আয়, দক্ষতা, প্রভাব, সময়। আয়াতটি যে হিসাব-নিরীক্ষার ইঙ্গিত দেয় তা সুনির্দিষ্ট: এর প্রতিটির কত অংশ এখন আখিরাত খুঁজছে, কত অংশ বৈধ উপভোগ, আর কত অংশ — যদি থাকে — নীরবে ক্ষতি করে চলেছে। কারুনের লোকেরা তাকে প্রশ্নগুলো একবারই করেছিল; আয়াতটি তার পাঠককে করে প্রতিদিন।",
        },
      ],
    },
  ],
},
'40:60': {
  sections: [
    {
      h: { en: "An Invitation With a Promise", bn: "প্রতিশ্রুতিসহ এক আমন্ত্রণ" },
      p: [
        {
          en: "Your Lord has said: call upon Me, I will respond to you. The sentence is an imperative followed by a commitment, and both come from Allah Himself — the verse frames it as His own announcement. Nowhere does it restrict the subject matter, the language, the time of day or the rank of the asker. The door described here has no receptionist and no appointment book, and the promise attached to it is unconditional in its wording: I will respond.",
          bn: "তোমাদের রব বলেছেন: আমাকে ডাকো, আমি তোমাদের ডাকে সাড়া দেব। বাক্যটি একটি আদেশ, তার পরে একটি অঙ্গীকার — এবং দুটিই স্বয়ং আল্লাহর পক্ষ থেকে; আয়াতটি একে তাঁর নিজের ঘোষণা হিসেবেই উপস্থাপন করে। কোথাও এটি বিষয়বস্তু, ভাষা, দিনের সময় বা প্রার্থনাকারীর মর্যাদা সীমিত করেনি। এখানে যে দরজার বর্ণনা, তার কোনো দারোয়ান নেই, সাক্ষাতের কোনো খাতাও নেই; আর তার সঙ্গে যুক্ত প্রতিশ্রুতি শব্দের দিক থেকে নিঃশর্ত: আমি সাড়া দেব।",
        },
        {
          en: "The same assurance appears in 2:186 with an added intimacy: when My servants ask you about Me, I am near, answering the call of the caller when he calls. There the Prophet ﷺ is not even instructed to say — say to them — as in other answers; the reply comes direct. Between the two verses, du'a is established not as a ritual gamble but as a standing arrangement announced by the One who keeps it.",
          bn: "একই আশ্বাস 2:186 আয়াতে এসেছে বাড়তি ঘনিষ্ঠতা নিয়ে: আমার বান্দারা যখন আমার সম্পর্কে তোমাকে জিজ্ঞেস করে — আমি তো নিকটেই, আহ্বানকারী যখন ডাকে তার ডাকে সাড়া দিই। সেখানে অন্যান্য উত্তরের মতো নবী ﷺ-কে 'তাদের বলে দাও' পর্যন্ত বলা হয়নি; জবাব আসে সরাসরি। এই দুই আয়াত মিলে দোয়া প্রতিষ্ঠিত হয় কোনো আচারিক জুয়া হিসেবে নয়, বরং এক স্থায়ী ব্যবস্থা হিসেবে — যিনি তা রক্ষা করেন তিনিই তা ঘোষণা করেছেন।",
        },
      ],
    },
    {
      h: { en: "When Calling Is Named Worship", bn: "ডাকাকে যখন ইবাদত বলা হলো" },
      p: [
        {
          en: "The second half of the verse performs a quiet substitution that the commentators dwell on. It began with call upon Me, but the warning reads: those who are too arrogant for My worship — ibadati — will enter Hell debased. Calling was renamed worship mid-verse. The Prophet ﷺ made the equation explicit: du'a is worship, as narrated by an-Nu'man ibn Bashir (RA) in the collection of at-Tirmidhi, and he then recited this very verse.",
          bn: "আয়াতের দ্বিতীয়ার্ধে এমন এক নীরব প্রতিস্থাপন ঘটে, যার ওপর মুফাসসিরগণ দীর্ঘক্ষণ থামেন। শুরুটা ছিল 'আমাকে ডাকো' দিয়ে, কিন্তু সতর্কবাণীতে লেখা: যারা আমার ইবাদতের ব্যাপারে অহংকার করে — 'ইবাদাতী' — তারা লাঞ্ছিত হয়ে জাহান্নামে ঢুকবে। আয়াতের মাঝপথেই ডাকার নতুন নাম হয়ে গেল ইবাদত। নবী ﷺ সমীকরণটি স্পষ্ট করে দিয়েছেন: দোয়াই ইবাদত — নু'মান ইবনে বাশীর (রাঃ)-এর বর্ণনায়, তিরমিযীর সংকলনে; এরপর তিনি এই আয়াতটিই তিলাওয়াত করেন।",
        },
        {
          en: "The renaming changes what asking means. If du'a is worship, then the act of asking honors Allah regardless of whether the request is granted in the form imagined — the asker has already succeeded in the primary transaction. It also explains why the verse treats not asking so severely. Prayer is where creatureliness is confessed; refusing it is not independence but a false claim of self-sufficiency.",
          bn: "এই নামবদল চাওয়ার অর্থটাই পাল্টে দেয়। দোয়া যদি ইবাদত হয়, তবে চাওয়ার কাজটিই আল্লাহর সম্মান — অনুরোধটি কল্পিত রূপে মঞ্জুর হোক বা না হোক; মূল লেনদেনে প্রার্থনাকারী আগেই সফল। এতে এটাও বোঝা যায়, না-চাওয়াকে আয়াতটি কেন এত কঠোরভাবে নিয়েছে। দোয়াই সেই জায়গা যেখানে বান্দা নিজের মুখাপেক্ষিতা স্বীকার করে; তা অস্বীকার করা স্বাধীনতা নয়, বরং আত্মনির্ভরতার এক মিথ্যা দাবি।",
        },
      ],
    },
    {
      h: { en: "The Arrogance of Not Asking", bn: "না চাওয়ার অহংকার" },
      p: [
        {
          en: "The threatened party in this verse is unusual. It is not the murderer or the thief but the one too proud to ask — alladhina yastakbiruna an ibadati. The word dakhirin, humbled and small, completes the reversal: whoever refuses to lower himself before Allah will be lowered by force. Pride aimed at the Creator is the original sin of Iblis, and this verse locates a trace of it in something as ordinary as never raising one's hands.",
          bn: "এই আয়াতে যাকে শাসানো হয়েছে, সে এক অস্বাভাবিক পক্ষ। খুনি বা চোর নয় — বরং সেই ব্যক্তি, চাইতে যার অহংকার লাগে: 'আল্লাযীনা ইয়াসতাকবিরূনা আন ইবাদাতী'। 'দাখিরীন' শব্দটি — অপদস্থ ও ক্ষুদ্র — উল্টে যাওয়াটি সম্পূর্ণ করে: যে আল্লাহর সামনে নিজেকে নত করতে অস্বীকার করে, তাকে জোর করেই নত করা হবে। স্রষ্টার প্রতি অহংকারই ইবলিসের আদি পাপ, আর এই আয়াত তার একটি চিহ্ন খুঁজে পায় এমন সাধারণ এক ব্যাপারে — কখনো হাত না তোলায়।",
        },
        {
          en: "Few people announce that they are above praying. The arrogance the verse describes usually wears working clothes: I handle my own problems; I only turn to Him when things get truly desperate; asking for small things is beneath the seriousness of religion. Against that last thought stands the breadth of the Prophet's ﷺ own practice, which included seeking Allah's help in matters great and small alike. The verse dismantles the tiered system where Allah is reserved for emergencies.",
          bn: "খুব কম মানুষই ঘোষণা দেয় যে দোয়া তার মর্যাদার নিচে। আয়াতে বর্ণিত অহংকার সাধারণত কাজের পোশাক পরে আসে: আমার সমস্যা আমি নিজেই সামলাই; সত্যিকারের মরিয়া অবস্থায় পড়লে তবেই তাঁর দিকে ফিরি; ছোটখাটো জিনিস চাওয়া দ্বীনের গাম্ভীর্যের সঙ্গে মানায় না। এই শেষ ভাবনাটির বিপরীতে দাঁড়িয়ে আছে নবী ﷺ-এর নিজের অনুশীলনের ব্যাপ্তি — ছোট-বড় সব বিষয়েই তিনি আল্লাহর সাহায্য চাইতেন। আয়াতটি সেই স্তরভিত্তিক ব্যবস্থা ভেঙে দেয়, যেখানে আল্লাহ কেবল জরুরি অবস্থার জন্য তোলা থাকেন।",
        },
      ],
    },
    {
      h: { en: "How the Response Arrives", bn: "সাড়া যেভাবে আসে" },
      p: [
        {
          en: "The promise I will respond raises an honest question: everyone has prayed for things that did not happen. The Prophet ﷺ addressed exactly this. In the hadith recorded by Muslim — whose core is agreed upon in al-Bukhari and Muslim — he said the servant continues to be answered so long as he does not pray for sin or the cutting of family ties, and so long as he does not grow impatient, saying: I prayed and prayed and saw no answer, and so he abandons du'a.",
          bn: "'আমি সাড়া দেব' প্রতিশ্রুতিটি একটি সৎ প্রশ্ন তোলে: সবাই এমন কিছু চেয়েছে যা ঘটেনি। নবী ﷺ ঠিক এই প্রশ্নেরই জবাব দিয়েছেন। মুসলিমে বর্ণিত হাদীসে (যার মূল অংশ বুখারী ও মুসলিমে ঐকমত্যে আছে) তিনি বলেছেন, বান্দার ডাকে সাড়া দেওয়া হতে থাকে যতক্ষণ সে গুনাহ বা আত্মীয়তা ছিন্ন করার দোয়া না করে, আর যতক্ষণ সে অধৈর্য হয়ে না বলে: দোয়া করলাম, করেই গেলাম, কোনো জবাব দেখলাম না — আর এভাবে দোয়াই ছেড়ে দেয়।",
        },
        {
          en: "So the promise stands, but the response is defined by the Responder, not the asker. The classical scholars, reading the texts together, describe the answer as certain in reality even when invisible in form — and they note that the only way to lose is the way the hadith names: quitting. The verse's demand is persistence; the timetable and the shape of the answer were never handed over to us.",
          bn: "অতএব প্রতিশ্রুতি বহাল আছে, তবে সাড়ার সংজ্ঞা নির্ধারণ করেন সাড়াদাতা — প্রার্থনাকারী নয়। ধ্রুপদী আলিমগণ, নুসূসগুলো মিলিয়ে পড়ে, জবাবকে বর্ণনা করেছেন বাস্তবে সুনিশ্চিত বলে — যদিও রূপে তা অদৃশ্য থাকতে পারে; আর তাঁরা লক্ষ করেন, হারার একটিই পথ, যা হাদীসেই বলা আছে: ছেড়ে দেওয়া। আয়াতের দাবি অধ্যবসায়; সময়সূচি আর জবাবের আকৃতি কখনোই আমাদের হাতে দেওয়া হয়নি।",
        },
      ],
    },
    {
      h: { en: "Building the Habit of Asking", bn: "চাওয়ার অভ্যাস গড়া" },
      p: [
        {
          en: "The verse's practice is embarrassingly available: ask, often, about everything. Before the interview and inside the traffic jam; for the sick relative and for the misplaced key. The surah of the ibad ar-Rahman ends by saying in 25:77 that Allah would not concern Himself with people were it not for their du'a — calling on Him is presented there as the very thing that gives a person weight with his Lord.",
          bn: "এই আয়াতের অনুশীলনটি লজ্জাজনক রকমের সহজলভ্য: চাও, বারবার, সবকিছু নিয়ে। সাক্ষাৎকারের আগে এবং যানজটের ভেতরে; অসুস্থ আত্মীয়ের জন্য এবং হারিয়ে ফেলা চাবির জন্যও। ইবাদুর রহমানের সূরাটি শেষ হয় 25:77 আয়াতে এই বলে যে তোমাদের দোয়া না থাকলে আল্লাহ তোমাদের পরোয়াই করতেন না — তাঁকে ডাকাকেই সেখানে দেখানো হয়েছে সেই জিনিস হিসেবে, যা মানুষকে তার রবের কাছে ওজন দেয়।",
        },
        {
          en: "A useful discipline is to notice the moments of reflexive self-reliance — reaching for the phone, the plan, the contact — and to insert one sentence to Allah first. Not instead of the means; before them. That small reordering is the whole difference between the one this verse invites and the one it warns. The invitation stays open for a lifetime, and it was issued by the only One who never tires of being asked.",
          bn: "একটি কার্যকর অভ্যাস হলো প্রতিবর্তী আত্মনির্ভরতার মুহূর্তগুলো খেয়াল করা — ফোন, পরিকল্পনা বা পরিচিতজনের দিকে হাত বাড়ানোর মুহূর্ত — এবং সবার আগে আল্লাহর উদ্দেশে একটি বাক্য ঢুকিয়ে দেওয়া। উপায়-উপকরণের বদলে নয়; তার আগে। এই ছোট্ট ক্রমবদলই সেই পুরো পার্থক্য — এই আয়াত যাকে আমন্ত্রণ জানায় আর যাকে সতর্ক করে, তাদের মধ্যে। আমন্ত্রণটি সারা জীবনের জন্য খোলা, আর তা জারি করেছেন একমাত্র সেই সত্তা, যাঁর কাছে চাইতে চাইতে তিনি কখনো বিরক্ত হন না।",
        },
      ],
    },
  ],
},
'2:45-46': {
  sections: [
    {
      h: { en: "Two Handholds for the Struggling", bn: "সংগ্রামীর জন্য দুটি অবলম্বন" },
      p: [
        {
          en: "Seek help through patience and prayer. The verb is ista'inu — ask for aid, the same root a Muslim recites in every unit of prayer: You alone we worship, You alone we ask for help. The verse names two instruments: sabr, which holds the self steady, and salah, which connects it upward. In its context the address falls within a long passage to the Children of Israel, who were being called to let go of status and follow the truth; the counsel is general because that struggle is.",
          bn: "ধৈর্য ও নামাযের মাধ্যমে সাহায্য চাও। ক্রিয়াপদটি 'ইসতাঈনূ' — সাহায্য প্রার্থনা করো; একই মূল থেকে মুসলিম প্রতি রাকাতে পড়ে: আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই সাহায্য চাই। আয়াতটি দুটি উপকরণের নাম নেয়: সবর, যা নিজেকে স্থির রাখে; আর সালাত, যা তাকে ঊর্ধ্বমুখে যুক্ত করে। প্রেক্ষাপটে সম্বোধনটি পড়েছে বনী ইসরাঈলের প্রতি এক দীর্ঘ অনুচ্ছেদের ভেতরে — যাদের ডাকা হচ্ছিল মর্যাদার মোহ ছেড়ে সত্য অনুসরণে; উপদেশটি সর্বজনীন, কারণ সেই সংগ্রামটাও সর্বজনীন।",
        },
        {
          en: "The same command returns in 2:153, this time addressed to the believers directly, with an addition: indeed Allah is with the patient. The Quran issuing one prescription twice, to two different audiences, marks it as the standing treatment for difficulty as such — not for one community's crisis. Whatever the weight is, these are the two hands offered for carrying it.",
          bn: "একই আদেশ 2:153 আয়াতে ফিরে আসে — এবার সরাসরি মুমিনদের সম্বোধন করে, একটি সংযোজনসহ: নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআন একই ব্যবস্থাপত্র দুবার, দুটি ভিন্ন শ্রোতাকে দিচ্ছে — এ থেকেই বোঝা যায়, এটি কোনো এক জাতির সংকটের ওষুধ নয়, বরং কষ্ট মাত্রেরই স্থায়ী চিকিৎসা। বোঝাটা যা-ই হোক, তা বইবার জন্য এই দুটিই বাড়িয়ে দেওয়া হাত।",
        },
      ],
    },
    {
      h: { en: "The Quran Admits It Is Heavy", bn: "কুরআন স্বীকার করে — এটা ভারী" },
      p: [
        {
          en: "Then comes a sentence of remarkable candor: and indeed it is kabirah — heavy, a big thing — except for the khashi'in. The Quran does not pretend that rising for prayer while anxious, tired or wronged is easy. It certifies the difficulty in the same breath as the command. That honesty matters pastorally: the person who finds prayer hard is not failing at some effortless thing; he is experiencing exactly what the Book said he would, and is being told where the lightness comes from.",
          bn: "তারপর আসে বিস্ময়কর রকমের অকপট একটি বাক্য: আর নিশ্চয়ই তা 'কাবীরা' — ভারী, বড় এক ব্যাপার — খুশূ অবলম্বনকারীরা ('খাশিঈন') ছাড়া সবার জন্য। কুরআন ভান করে না যে দুশ্চিন্তা, ক্লান্তি বা মজলুম অবস্থায় নামাযে দাঁড়ানো সহজ। আদেশের সঙ্গে একই নিঃশ্বাসে সে কাঠিন্যটাও প্রত্যয়ন করে। এই সততার এক সান্ত্বনার দিক আছে: নামায যার কঠিন লাগে, সে কোনো সহজ কাজে ব্যর্থ হচ্ছে না; কিতাব যা বলেছিল সে ঠিক তা-ই অনুভব করছে — আর তাকে বলে দেওয়া হচ্ছে, হালকা হওয়াটা আসে কোথা থেকে।",
        },
        {
          en: "Khushu' is the lowered, humbled attentiveness of a heart that knows before Whom it stands. The verse makes it the dividing line: the same prayer that is a burden to one person is a relief to another, and the difference is not in the prayer but in the state of the one praying. Weight, here, is a symptom to be read — heaviness in worship invites a question about the heart, not about the worship.",
          bn: "খুশূ হলো সেই অবনত, বিনীত মনোযোগ — যে হৃদয় জানে সে কার সামনে দাঁড়িয়েছে, তার মনোযোগ। আয়াতটি একেই বিভাজনরেখা বানায়: একই নামায একজনের কাছে বোঝা, আরেকজনের কাছে স্বস্তি; আর পার্থক্যটা নামাযে নয়, নামাযীর অবস্থায়। ভার এখানে এক উপসর্গ, যা পড়ে নিতে হয় — ইবাদতে ভারবোধ প্রশ্ন তোলে হৃদয় নিয়ে, ইবাদত নিয়ে নয়।",
        },
      ],
    },
    {
      h: { en: "What Makes It Light", bn: "যা একে হালকা করে" },
      p: [
        {
          en: "The next verse, 2:46, defines the khashi'in: those who think that they will meet their Lord and that to Him they will return. The verb is yazunnuna, ordinarily to suppose — but the commentators, at-Tabari among them, are explicit that zann here means certainty, yaqin, as it does in several places in the Quran. What lightens prayer is not technique but conviction: the settled knowledge that the meeting will happen and that every road ends at Him.",
          bn: "পরের আয়াত, 2:46, খাশিঈনদের সংজ্ঞা দেয়: যারা মনে করে যে তারা তাদের রবের সঙ্গে সাক্ষাৎ করবে এবং তাঁরই দিকে ফিরে যাবে। ক্রিয়াপদটি 'ইয়াযুন্নূনা' — সাধারণ অর্থে ধারণা করা; কিন্তু মুফাসসিরগণ — তাঁদের মধ্যে আত-তাবারীও — স্পষ্ট বলেছেন, এখানে 'যন' মানে নিশ্চিত বিশ্বাস, ইয়াকীন — কুরআনের আরও কয়েক জায়গায় যেমন। নামাযকে যা হালকা করে তা কোনো কৌশল নয়, প্রত্যয়: এই স্থির জ্ঞান যে সাক্ষাৎটি ঘটবেই, আর প্রতিটি পথ তাঁর কাছেই গিয়ে শেষ হয়।",
        },
        {
          en: "The logic is simple once stated. A person stands willingly, even eagerly, before someone he is certain he will answer to and hope in. If the meeting feels theoretical, the standing feels pointless, and pointless acts are always heavy. So the verse quietly diagnoses every season of heavy worship: the weight is proportional to the distance the return has drifted from the center of one's attention.",
          bn: "যুক্তিটি একবার বললেই সরল। মানুষ স্বেচ্ছায়, এমনকি আগ্রহ নিয়েই, তার সামনে দাঁড়ায় — যার কাছে সে নিশ্চিত জবাব দিতে হবে এবং যার কাছে তার আশা। সাক্ষাৎটি যদি কেবল তত্ত্ব মনে হয়, দাঁড়ানোটাও অর্থহীন মনে হয় — আর অর্থহীন কাজ সবসময়ই ভারী। তাই আয়াতটি নীরবে ভারী ইবাদতের প্রতিটি মৌসুমের রোগনির্ণয় করে দেয়: প্রত্যাবর্তনের কথাটি মনোযোগের কেন্দ্র থেকে যতটা দূরে সরে গেছে, ভারও ঠিক ততটা।",
        },
      ],
    },
    {
      h: { en: "The Prophet's Own Refuge", bn: "নবীজির নিজের আশ্রয়" },
      p: [
        {
          en: "The Prophet ﷺ lived this verse before teaching it. It is reported in the collection of Abu Dawud that when a matter distressed him, he would turn to prayer. He also said to Bilal (RA), in words preserved in the same collection: give us rest by it, O Bilal — the call to prayer announcing not another duty on a hard day, but the hard day's relief. Prayer in his practice was where pressure was taken, not where pressure accumulated.",
          bn: "নবী ﷺ এই আয়াত শেখানোর আগে নিজে তা যাপন করেছেন। আবু দাউদের সংকলনে বর্ণিত আছে, কোনো বিষয় তাঁকে পীড়িত করলে তিনি নামাযে ফিরতেন। একই সংকলনে সংরক্ষিত কথায় তিনি বিলাল (রাঃ)-কে বলেছেন: হে বিলাল, এর দ্বারা আমাদের প্রশান্তি দাও — আযান তখন কঠিন দিনে আরেকটি দায়িত্বের ঘোষণা নয়, বরং কঠিন দিনটিরই স্বস্তি। তাঁর অনুশীলনে নামায ছিল সেই জায়গা যেখানে চাপ নামিয়ে রাখা হয়, চাপ জমা করা নয়।",
        },
        {
          en: "That ordering is the verse's practical teaching: prayer as first response, not last resort. The common pattern is reversed — we exhaust the phone calls, the worrying and the planning, and pray when nothing is left. The verse and the Prophet's ﷺ example put the prayer at the front of the emergency, where the help is actually sought from the One who can give it, as 29:45 adds that prayer itself restrains and that the remembrance of Allah is greatest.",
          bn: "এই ক্রমটিই আয়াতের ব্যবহারিক শিক্ষা: নামায প্রথম প্রতিক্রিয়া, শেষ উপায় নয়। প্রচলিত ধরনটা উল্টো — আমরা ফোন, দুশ্চিন্তা আর পরিকল্পনা নিঃশেষ করি, আর কিছু বাকি না থাকলে দোয়ায় বসি। আয়াতটি এবং নবী ﷺ-এর দৃষ্টান্ত নামাযকে বসায় বিপদের সামনের সারিতে — যেখানে সাহায্য সত্যিই তাঁর কাছে চাওয়া হয়, যিনি তা দিতে পারেন; যেমন 29:45 যোগ করে যে নামায নিজেই মন্দ থেকে বিরত রাখে, আর আল্লাহর স্মরণই সর্বশ্রেষ্ঠ।",
        },
      ],
    },
    {
      h: { en: "Patience and Prayer, Woven", bn: "সবর ও সালাত, একসূত্রে" },
      p: [
        {
          en: "The two instruments reinforce each other. Patience keeps a person praying when answers are slow; prayer replenishes the patience that daily life spends. One works horizontally, absorbing what people and circumstances inflict; the other works vertically, drawing from what does not run out. The believer under pressure alternates between them the way a climber moves between two handholds — never releasing both at once.",
          bn: "উপকরণ দুটি পরস্পরকে শক্তি জোগায়। জবাব আসতে দেরি হলে সবর মানুষকে নামাযে টিকিয়ে রাখে; আর দৈনন্দিন জীবন যে সবর খরচ করে ফেলে, নামায তা আবার ভরে দেয়। একটি কাজ করে আনুভূমিকভাবে — মানুষ ও পরিস্থিতি যা চাপায় তা শুষে নিয়ে; অন্যটি উল্লম্বভাবে — যা ফুরায় না তা থেকে টেনে এনে। চাপে থাকা মুমিন এ দুয়ের মধ্যে পালা করে চলে — যেমন পর্বতারোহী দুটি অবলম্বনের মধ্যে চলে, কখনোই দুটো একসঙ্গে ছাড়ে না।",
        },
        {
          en: "Living the verse can begin the same week it is read. When the next difficulty announces itself, pray two rak'ahs before opening the laptop or making the calls, and name the difficulty to Allah inside them. Then practice one deliberate act of sabr in the same matter — a complaint withheld, a decision delayed until calm. Small as they are, these are the verse's own two handholds, offered to the khashi'in and to everyone still becoming one of them.",
          bn: "আয়াতটি যাপন শুরু হতে পারে পড়ার সপ্তাহেই। পরের কষ্টটি যখন জানান দেবে, ল্যাপটপ খোলা বা ফোন করার আগে দুই রাকাত পড়ুন, আর তার ভেতরেই কষ্টটির নাম ধরে আল্লাহকে বলুন। তারপর একই বিষয়ে একটি সচেতন সবরের কাজ করুন — একটি অভিযোগ চেপে রাখা, শান্ত না হওয়া পর্যন্ত একটি সিদ্ধান্ত মুলতবি রাখা। ছোট হলেও, এগুলোই আয়াতের নিজের দুটি অবলম্বন — খাশিঈনদের জন্য, আর তাদের একজন হয়ে ওঠার পথে থাকা প্রত্যেকের জন্য।",
        },
      ],
    },
  ],
},
'2:201': {
  sections: [
    {
      h: { en: "Two Kinds of Asking", bn: "দুই রকমের চাওয়া" },
      p: [
        {
          en: "The verse sits inside the passage on the rites of pilgrimage. After the command to remember Allah when the rites are done, 2:200 describes one kind of person: among the people is he who says, our Lord, give us in this world — and he has no share in the Hereafter. Then this verse presents the contrast: and among them is he who says, our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
          bn: "আয়াতটি বসে আছে হজের আহকাম-সংক্রান্ত অনুচ্ছেদের ভেতরে। আহকাম শেষ হলে আল্লাহকে স্মরণের নির্দেশের পর, 2:200 এক শ্রেণির মানুষের বর্ণনা দেয়: মানুষের মধ্যে কেউ বলে — হে আমাদের রব, আমাদের দুনিয়াতেই দিন; আখিরাতে তার কোনো অংশ নেই। তারপর এই আয়াত বৈপরীত্যটি তুলে ধরে: আর তাদের মধ্যে কেউ বলে — হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন।",
        },
        {
          en: "The difference between the two askers is not that one prays and the other does not — both are shown praying, at the same holy site, to the same Lord. The difference is the horizon of the request. One vocabulary ends at this world; the other spans both lives and adds a plea for safety. The verse after, 2:202, gives the verdict: those people will have a portion of what they earned, and Allah is swift in account.",
          bn: "দুই প্রার্থনাকারীর পার্থক্য এটা নয় যে একজন দোয়া করে আর অন্যজন করে না — দুজনকেই দেখানো হয়েছে দোয়ারত অবস্থায়, একই পবিত্র স্থানে, একই রবের কাছে। পার্থক্যটা চাওয়ার দিগন্তে। একজনের শব্দভান্ডার এই দুনিয়াতেই শেষ; অন্যজনেরটা দুই জীবন জুড়ে বিস্তৃত, সঙ্গে নিরাপত্তার আরজিও। পরের আয়াত, 2:202, রায় দেয়: তারা যা অর্জন করেছে তার অংশ তারা পাবে, আর আল্লাহ হিসাব গ্রহণে দ্রুত।",
        },
      ],
    },
    {
      h: { en: "The Breadth of Hasanah", bn: "হাসানার ব্যাপ্তি" },
      p: [
        {
          en: "The prayer's key word, hasanah, is deliberately broad — a good thing, unspecified. The commentators fill in examples without closing the list: in this world, well-being, a righteous spouse, beneficial knowledge, lawful provision; in the Hereafter, Paradise and what leads to it, with some noting that the ultimate hasanah there is Allah's pleasure. The openness is the craft of the du'a. It asks for the category of good and leaves the selection to the One who knows what is good for us.",
          bn: "দোয়াটির মূল শব্দ 'হাসানা' ইচ্ছাকৃতভাবেই ব্যাপক — কোনো কল্যাণ, অনির্দিষ্ট। মুফাসসিরগণ তালিকা বন্ধ না করেই উদাহরণ ভরে দেন: দুনিয়ায় — সুস্থতা, নেককার জীবনসঙ্গী, উপকারী জ্ঞান, হালাল রিযিক; আখিরাতে — জান্নাত ও যা তার দিকে নিয়ে যায়; কেউ কেউ বলেন, সেখানকার চূড়ান্ত হাসানা আল্লাহর সন্তুষ্টি। এই খোলা রাখাটাই দোয়াটির কারিগরি। এটি কল্যাণের শ্রেণিটি চায়, আর বাছাইয়ের ভার ছেড়ে দেয় তাঁর ওপর — আমাদের জন্য কোনটা ভালো, যিনি তা জানেন।",
        },
        {
          en: "Note also what the prayer does not do. It does not renounce the world — it asks for good in it, in harmony with the counsel given to Qarun in 28:77 not to forget one's share. And it does not assume that worldly good automatically continues into the next life; the second clause has to be asked for separately. The grammar itself teaches that the two goods are distinct requests with one Giver.",
          bn: "দোয়াটি কী করে না, সেটাও লক্ষণীয়। এটি দুনিয়া বর্জন করে না — বরং দুনিয়ার মধ্যেই কল্যাণ চায়; যেমন 28:77 আয়াতে কারুনকে দেওয়া উপদেশে নিজের অংশ না ভোলার কথা আছে, তারই সঙ্গে সঙ্গতি রেখে। আবার এটি ধরেও নেয় না যে দুনিয়ার কল্যাণ আপনাআপনি পরের জীবনে গড়াবে; দ্বিতীয় অংশটুকু আলাদা করে চাইতে হয়। ব্যাকরণটিই শিখিয়ে দেয় — কল্যাণ দুটি ভিন্ন ভিন্ন চাওয়া, কিন্তু দাতা একজনই।",
        },
      ],
    },
    {
      h: { en: "The Third Clause", bn: "তৃতীয় অংশ" },
      p: [
        {
          en: "The du'a could have stopped at two symmetrical requests, but it adds: and protect us from the punishment of the Fire. The addition concedes something humbling — that receiving good in both worlds does not by itself guarantee safety, and that the Fire is a real destination requiring a specific plea. Comfort in this life can even become material for heedlessness; the third clause is insurance against the success of the first.",
          bn: "দোয়াটি দুটি সুষম চাওয়াতেই থামতে পারত, কিন্তু যোগ করে: আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। এই সংযোজন এক বিনয়ী স্বীকারোক্তি বহন করে — দুই জগতে কল্যাণ পাওয়াটাই নিরাপত্তার নিশ্চয়তা নয়, আর জাহান্নাম এমন এক বাস্তব গন্তব্য যার জন্য সুনির্দিষ্ট আরজি লাগে। এ জীবনের স্বাচ্ছন্দ্য এমনকি গাফিলতির উপকরণও হয়ে উঠতে পারে; তৃতীয় অংশটি প্রথম অংশের সাফল্যের বিরুদ্ধেই এক বিমা।",
        },
        {
          en: "Ordering matters too. The prayer moves from the near to the far to the ultimate: today's needs, the eternal home, and deliverance from ruin. A person who repeats it attentively rehearses a complete worldview several times a day — engaged with this world, aimed at the next, and never presuming immunity from loss. Few sentences carry that much orientation in so few words.",
          bn: "ক্রমটাও অর্থবহ। দোয়াটি এগোয় নিকট থেকে দূরে, তারপর চূড়ান্তে: আজকের প্রয়োজন, চিরস্থায়ী আবাস, আর ধ্বংস থেকে মুক্তি। যে ব্যক্তি মনোযোগ দিয়ে এটি বারবার পড়ে, সে দিনে কয়েকবার একটি পূর্ণাঙ্গ জীবনদৃষ্টির মহড়া দেয় — দুনিয়ায় সক্রিয়, আখিরাতমুখী, আর ক্ষতি থেকে নিরাপদ ভাবার দুঃসাহসহীন। এত কম শব্দে এতটা দিকনির্দেশ বহন করা বাক্য বিরল।",
        },
      ],
    },
    {
      h: { en: "The Prophet's Most Frequent Du'a", bn: "নবীজির সবচেয়ে বেশি পড়া দোয়া" },
      p: [
        {
          en: "Anas ibn Malik (RA) reported that the most frequent supplication of the Prophet ﷺ was this very prayer: our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. The report is agreed upon in al-Bukhari and Muslim. Of everything he ﷺ could have made his daily refrain, he chose the du'a of balance — which is itself a commentary on what a well-aimed life asks for.",
          bn: "আনাস ইবনে মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ-এর সবচেয়ে বেশি পড়া দোয়া ছিল এটিই: হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে এসেছে। যা কিছু তিনি ﷺ তাঁর দৈনন্দিন আওড়ানো বাক্য বানাতে পারতেন, তার মধ্যে তিনি বেছে নিলেন ভারসাম্যের দোয়াটি — যা নিজেই এক ভাষ্য: সুনিশানা জীবন আসলে কী চায়।",
        },
        {
          en: "Muslim also narrates through Anas (RA) that the Prophet ﷺ visited a Muslim who had grown as frail as a chick, because he had asked Allah to advance his Hereafter punishment into this world. The Prophet ﷺ told him he could not bear that, and asked: why did you not say — and taught him this du'a. Then he prayed it for him and Allah cured him. The story fixes the prayer's character: it is the correction of extreme asking.",
          bn: "মুসলিম আরও বর্ণনা করেন আনাস (রাঃ)-এর সূত্রে: নবী ﷺ এমন এক মুসলিমকে দেখতে গেলেন, যে পাখির ছানার মতো দুর্বল হয়ে গিয়েছিল — কারণ সে আল্লাহর কাছে চেয়েছিল, তার আখিরাতের শাস্তি যেন দুনিয়াতেই এগিয়ে দেওয়া হয়। নবী ﷺ তাকে বললেন, সে তা বইতে পারবে না, এবং জিজ্ঞেস করলেন: তুমি কেন বললে না — এরপর তাকে এই দোয়াটি শেখালেন। তারপর তিনি তার জন্য তা পড়লেন এবং আল্লাহ তাকে সুস্থ করে দিলেন। ঘটনাটি দোয়াটির চরিত্র স্থির করে দেয়: এটি বাড়াবাড়ি চাওয়ার সংশোধন।",
        },
      ],
    },
    {
      h: { en: "Carrying the Balance", bn: "ভারসাম্য বহন করা" },
      p: [
        {
          en: "The prayer is short enough to say between two breaths, and Islam has placed it throughout the day — many Muslims say it in prostration, after prayers, and pilgrims say it between the Yemeni corner and the Black Stone during tawaf. Its frequency is the training: each repetition re-centers the compass, pulling the heart back from whichever extreme the day pushed it toward, worldliness or despair of the world.",
          bn: "দোয়াটি এতই ছোট যে দুই নিঃশ্বাসের ফাঁকে বলা যায়, আর ইসলাম একে ছড়িয়ে রেখেছে দিনজুড়ে — বহু মুসলিম এটি বলে সিজদায়, নামাযের পরে; আর হাজীরা তাওয়াফে রুকনে ইয়ামানী ও হাজরে আসওয়াদের মাঝখানে এটি পড়েন। এই পুনরাবৃত্তিই প্রশিক্ষণ: প্রতিবার পড়ায় দিকনির্ণয় যন্ত্রটি আবার কেন্দ্রে ফেরে — দিন হৃদয়কে যে প্রান্তেই ঠেলে থাকুক, দুনিয়াদারি হোক বা দুনিয়া নিয়ে হতাশা।",
        },
        {
          en: "A practical exercise makes it personal: occasionally unpack the word hasanah before saying it. Name, in your own mind, what good in this world would actually mean this month, and what good in the Hereafter you are working toward — then say the words with those meanings loaded. The du'a of the Prophet ﷺ was frequent but never mechanical, and one loaded recitation shapes a day more than many empty ones.",
          bn: "একটি ব্যবহারিক অনুশীলন একে ব্যক্তিগত করে তোলে: মাঝে মাঝে বলার আগে 'হাসানা' শব্দটি খুলে দেখুন। নিজের মনে ঠিক করুন — এই মাসে দুনিয়ার কল্যাণ মানে আসলে কী, আর আখিরাতের কোন কল্যাণের দিকে আপনি কাজ করছেন — তারপর সেই অর্থগুলো ভরে নিয়ে শব্দগুলো বলুন। নবী ﷺ-এর দোয়া ঘন ঘন ছিল, কিন্তু কখনো যান্ত্রিক ছিল না; আর অর্থভরা একটি পাঠ বহু ফাঁকা পাঠের চেয়ে দিনকে বেশি গড়ে দেয়।",
        },
      ],
    },
  ],
},
'3:133-134': {
  sections: [
    {
      h: { en: "A Race, Not a Stroll", bn: "দৌড়, পায়চারি নয়" },
      p: [
        {
          en: "Sari'u — race, hurry. The verse does not invite a leisurely drift toward forgiveness and Paradise; it commands the pace of people who fear missing something. And the order of the two prizes is exact: forgiveness first, then a Garden as wide as the heavens and the earth. The commentators note that maghfirah precedes Jannah because the soul must be cleared before it is honored — no one enters the Garden dragging unforgiven wrongs.",
          bn: "সারিঊ — দৌড়াও, তাড়াতাড়ি করো। আয়াতটি ক্ষমা ও জান্নাতের দিকে আয়েশি হাঁটার আমন্ত্রণ নয়; এটি আদেশ করে সেই গতির, যা কিছু হারিয়ে ফেলার ভয়ে থাকা মানুষের। আর পুরস্কার দুটির ক্রম একেবারে মাপা: আগে ক্ষমা, তারপর আসমান ও যমীনের মতো প্রশস্ত এক জান্নাত। মুফাসসিরগণ লক্ষ করেন, মাগফিরাত জান্নাতের আগে এসেছে, কারণ সম্মানিত হওয়ার আগে আত্মাকে পরিচ্ছন্ন হতে হয় — ক্ষমা-না-পাওয়া অন্যায় টেনে নিয়ে কেউ জান্নাতে ঢোকে না।",
        },
        {
          en: "The width like the heavens and the earth — stated again in 57:21 — is given so that no one fears the Garden filling up before he arrives. A race for limited seats breeds rivalry; this race has room for every runner, so the only competitor is one's own delay. The verse was revealed in the passage surrounding Uhud, to a community that had just learned how suddenly life can end and how urgent deeds therefore are.",
          bn: "আসমান ও যমীনের মতো প্রশস্ততা — যা 57:21 আয়াতেও এসেছে — বলা হয়েছে এই জন্য, যেন কেউ ভয় না পায় যে পৌঁছানোর আগেই জান্নাত ভরে যাবে। সীমিত আসনের দৌড় রেষারেষি জন্মায়; এই দৌড়ে প্রতিটি দৌড়বিদের জায়গা আছে, তাই একমাত্র প্রতিদ্বন্দ্বী নিজের দেরি। আয়াতটি নাযিল হয়েছে উহুদ-সংলগ্ন অনুচ্ছেদে — এমন এক সম্প্রদায়ের কাছে, যারা সবেমাত্র শিখেছে জীবন কত হঠাৎ শেষ হতে পারে, আর আমল তাই কতটা জরুরি।",
        },
      ],
    },
    {
      h: { en: "Spending in Ease and Hardship", bn: "সচ্ছলতা ও অনটনে ব্যয়" },
      p: [
        {
          en: "Then the verse describes whom the Garden was prepared for, and the first mark of the muttaqin is financial: those who spend in sarra and darra, in ease and in hardship. Giving from surplus is generosity; giving from shortage is trust. The pairing removes the most common exemption people grant themselves — I will give when things improve — by making hard times part of the definition, not an excused absence from it.",
          bn: "এরপর আয়াতটি বর্ণনা করে জান্নাত কাদের জন্য প্রস্তুত, আর মুত্তাকীদের প্রথম চিহ্নটি আর্থিক: যারা ব্যয় করে 'সাররা' ও 'দাররা'-য় — সচ্ছলতায় ও অনটনে। উদ্বৃত্ত থেকে দেওয়া দানশীলতা; ঘাটতি থেকে দেওয়া ভরসা। এই জোড়টি মানুষ নিজেকে যে ছাড়টি সবচেয়ে বেশি দেয় — অবস্থা ভালো হলে দেব — সেটিই তুলে নেয়; কঠিন সময়কে সংজ্ঞার অংশ বানিয়ে, সংজ্ঞা থেকে মাফ-পাওয়া অনুপস্থিতি নয়।",
        },
        {
          en: "Placing charity first in a list about self-mastery is itself instructive. Money is where intention meets measurable cost, so it serves as the entry-level test of sincerity: easier to monitor than anger, harder to fake than words. The one who passes it in both weathers has trained the reflex the rest of the verse requires — releasing what the self wants to hold.",
          bn: "আত্মসংযমের তালিকায় দানকে প্রথমে রাখাটাই শিক্ষণীয়। টাকা-পয়সাই সেই জায়গা যেখানে নিয়ত মাপা যায় এমন মূল্যের মুখোমুখি হয়; তাই এটি ইখলাসের প্রাথমিক পরীক্ষা: রাগের চেয়ে নজর রাখা সহজ, কথার চেয়ে জাল করা কঠিন। যে দুই আবহাওয়াতেই এতে উত্তীর্ণ, সে আয়াতের বাকি অংশের দরকারি প্রতিবর্তটাই রপ্ত করে ফেলেছে — নফস যা ধরে রাখতে চায় তা ছেড়ে দেওয়া।",
        },
      ],
    },
    {
      h: { en: "Swallowing the Rage", bn: "ক্রোধ গিলে ফেলা" },
      p: [
        {
          en: "Wal-kazimina al-ghayz — and those who swallow their rage. Kazm is the word for tying shut a waterskin filled to the brim; the image is of anger fully present, pressing against its container, and deliberately held. The verse does not praise people who feel nothing. It praises people who feel the heat and choose not to pour it out — a decision made in the exact seconds when pouring it out would feel most justified.",
          bn: "ওয়াল-কাযিমীনাল গায়য — আর যারা নিজেদের ক্রোধ গিলে ফেলে। 'কাযম' শব্দটি ব্যবহৃত হয় কানায় কানায় ভরা মশকের মুখ বেঁধে ফেলার অর্থে; চিত্রটি এমন ক্রোধের, যা পুরোপুরি উপস্থিত, পাত্রের গায়ে চাপ দিচ্ছে, তবু সজ্ঞানে ধরে রাখা। আয়াতটি তাদের প্রশংসা করে না যারা কিছুই অনুভব করে না। প্রশংসা করে তাদের, যারা উত্তাপ টের পায় তবু ঢেলে না দেওয়া বেছে নেয় — ঠিক সেই সেকেন্ডগুলোতে নেওয়া সিদ্ধান্ত, যখন ঢেলে দেওয়াটাই সবচেয়ে ন্যায্য মনে হয়।",
        },
        {
          en: "The Prophet ﷺ defined strength by this verse's standard: the strong man is not the one who overcomes others in wrestling, but the one who controls himself at the moment of anger — agreed upon in al-Bukhari and Muslim. And in the sunan collections he ﷺ promised that whoever restrains rage while able to act on it will be called before creation on the Day of Judgment and given his choice of reward. The ability to strike is part of the virtue; helplessness is not kazm.",
          bn: "নবী ﷺ শক্তির সংজ্ঞা দিয়েছেন এই আয়াতের মানদণ্ডেই: বলবান সে নয় যে কুস্তিতে অন্যদের হারায়, বরং সে-ই, যে রাগের মুহূর্তে নিজেকে সামলায় — বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। আর সুনান সংকলনগুলোতে তিনি ﷺ প্রতিশ্রুতি দিয়েছেন: যে ব্যক্তি প্রয়োগের ক্ষমতা থাকা সত্ত্বেও ক্রোধ সংবরণ করে, কিয়ামতের দিন তাকে সৃষ্টিকুলের সামনে ডেকে তার পুরস্কার বেছে নিতে দেওয়া হবে। আঘাত করার সামর্থ্যটাই গুণটির অংশ; অসহায়ত্ব 'কাযম' নয়।",
        },
      ],
    },
    {
      h: { en: "Pardon, Then Excellence", bn: "ক্ষমা, তারপর ইহসান" },
      p: [
        {
          en: "The sequence climbs. Swallowing rage is internal — the wrong is absorbed but perhaps not forgotten. The next rung, wal-afina an-nas, pardoning people, releases the claim itself: the account is closed, nothing is held for later. Then the verse seals with a higher rung still: and Allah loves the muhsinin, those who do excellence — who go beyond closing the account to answering the wrong with good, the practice 41:34 commands when it says repel with that which is better.",
          bn: "ধারাক্রমটি ওপরে ওঠে। ক্রোধ গিলে ফেলা অভ্যন্তরীণ ব্যাপার — অন্যায়টা হজম হলো, কিন্তু হয়তো ভোলা হলো না। পরের ধাপ, 'ওয়াল-আফীনা আনিন-নাস' — মানুষকে ক্ষমাকারীরা — দাবিটাই ছেড়ে দেয়: হিসাব বন্ধ, পরের জন্য কিছুই জমা নেই। তারপর আয়াতটি শেষ হয় আরও উঁচু এক ধাপে: আর আল্লাহ মুহসিনদের ভালোবাসেন — যারা হিসাব বন্ধ করেই থামে না, বরং অন্যায়ের জবাব দেয় কল্যাণ দিয়ে; সেই অনুশীলন, যার আদেশ 41:34 দেয় — প্রতিহত করো তা দিয়ে যা উত্তম।",
        },
        {
          en: "Read as a ladder, the verse is merciful to beginners. It does not demand warm feelings toward the offender on day one. It asks first for a shut mouth, then for a released claim, then — for those who can — for active good. Each rung is rewarded, and the top rung carries the Quran's highest incentive, stated as a fact rather than a promise: Allah loves the people who live there.",
          bn: "সিঁড়ি হিসেবে পড়লে আয়াতটি নবিসদের প্রতি দয়ালু। এটি প্রথম দিনেই অপরাধীর প্রতি উষ্ণ অনুভূতি দাবি করে না। এটি চায় প্রথমে বন্ধ মুখ, তারপর ছেড়ে দেওয়া দাবি, তারপর — যারা পারে তাদের জন্য — সক্রিয় কল্যাণ। প্রতিটি ধাপেরই প্রতিদান আছে, আর শীর্ষ ধাপটি বহন করে কুরআনের সর্বোচ্চ প্রণোদনা — প্রতিশ্রুতি হিসেবে নয়, ঘোষিত সত্য হিসেবে: যারা সেখানে বাস করে, আল্লাহ তাদের ভালোবাসেন।",
        },
      ],
    },
    {
      h: { en: "The Door That Stays Open", bn: "যে দরজা খোলা থাকে" },
      p: [
        {
          en: "The portrait continues into 3:135: the same muttaqin, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness for their sins — and who forgives sins except Allah — and do not knowingly persist. The people of the Garden are not sinless; they are quick to return. The passage thus protects its own readers from despair: falling does not disqualify a racer, but lying where one fell does.",
          bn: "চিত্রটি 3:135 পর্যন্ত গড়ায়: সেই মুত্তাকীরাই, যখন কোনো অশ্লীল কাজ করে ফেলে বা নিজেদের ওপর জুলুম করে, আল্লাহকে স্মরণ করে ও নিজেদের গুনাহের জন্য ক্ষমা চায় — আর আল্লাহ ছাড়া কে গুনাহ ক্ষমা করে — এবং জেনেশুনে তাতে লেগে থাকে না। জান্নাতের মানুষরা নিষ্পাপ নয়; তারা দ্রুত ফিরে আসে। অনুচ্ছেদটি এভাবে তার পাঠকদের হতাশা থেকেও বাঁচায়: পড়ে যাওয়া দৌড়বিদকে বাতিল করে না — পড়ে থাকাটাই করে।",
        },
        {
          en: "Living the verses means picking the rung within reach today. Set a small recurring charity that survives tight months. In the next flash of anger, buy ten seconds — the interval kazm actually occupies. Choose one old grievance and close its account. None of these is dramatic, which is exactly the verse's point: the race to a Garden wider than the heavens is run in increments this small.",
          bn: "আয়াতগুলো যাপন করা মানে আজ নাগালের মধ্যে থাকা ধাপটি বেছে নেওয়া। এমন একটি ছোট নিয়মিত সাদাকা চালু করুন, যা টানাটানির মাসেও টিকে থাকে। পরের বার রাগ ঝলসে উঠলে দশটি সেকেন্ড কিনে নিন — 'কাযম' আসলে ওই ব্যবধানটুকুই দখল করে। একটি পুরোনো ক্ষোভ বেছে নিয়ে তার হিসাব বন্ধ করুন। এগুলোর কোনোটিই নাটকীয় নয় — আর সেটাই আয়াতের মূল কথা: আসমানের চেয়ে প্রশস্ত জান্নাতের দৌড়টি দৌড়ানো হয় এত ছোট ছোট ধাপেই।",
        },
      ],
    },
  ],
},
'3:185': {
  sections: [
    {
      h: { en: "The Sentence No One Escapes", bn: "যে রায় কেউ এড়ায় না" },
      p: [
        {
          en: "Kullu nafsin dha'iqatu al-mawt — every soul will taste death. The subject is universal by construction: every soul, without exception for rank, piety or usefulness. Even the Prophet ﷺ is told elsewhere, in 39:30, indeed you will die and indeed they will die. The verb taste is deliberate. A taste is brief and passes; the verse names death as something undergone and gone through, not a wall but a doorway with something on the other side.",
          bn: "কুল্লু নাফসিন যাইকাতুল মাউত — প্রতিটি প্রাণ মৃত্যুর স্বাদ গ্রহণ করবে। গঠনগতভাবেই বিষয়টি সর্বজনীন: প্রতিটি প্রাণ — পদমর্যাদা, তাকওয়া বা প্রয়োজনীয়তার কোনো ব্যতিক্রম ছাড়া। এমনকি নবী ﷺ-কেও অন্যত্র, 39:30 আয়াতে, বলা হয়েছে: নিশ্চয়ই তুমি মরবে এবং নিশ্চয়ই তারাও মরবে। 'স্বাদ' ক্রিয়াটি ইচ্ছাকৃত। স্বাদ ক্ষণিকের, কেটে যায়; আয়াতটি মৃত্যুকে বলে এমন কিছু যা পার হয়ে যেতে হয় — দেয়াল নয়, বরং এক দরজা, যার ওপারে কিছু আছে।",
        },
        {
          en: "The verse stands in the aftermath of Uhud, where the community buried seventy of its best, and near the passage declaring in 3:169 that those killed in Allah's way are not to be thought of as dead but alive with their Lord, receiving provision. Against that backdrop the verse is not morbid; it levels the field. The martyr and the tyrant both taste death; what distinguishes them is everything that comes after the taste.",
          bn: "আয়াতটি দাঁড়িয়ে আছে উহুদের পরবর্তী সময়ে — যখন সম্প্রদায়টি তাদের শ্রেষ্ঠ সত্তরজনকে দাফন করেছে — এবং সেই অনুচ্ছেদের কাছেই, যেখানে 3:169 ঘোষণা করে: আল্লাহর পথে নিহতদের মৃত ভেবো না, বরং তারা জীবিত, তাদের রবের কাছে রিযিকপ্রাপ্ত। এই পটভূমিতে আয়াতটি বিষণ্ণতার নয়; এটি মাঠ সমতল করে। শহীদ ও জালিম — দুজনেই মৃত্যুর স্বাদ নেয়; তাদের আলাদা করে স্বাদের পরে যা আসে, তার সবটুকু।",
        },
      ],
    },
    {
      h: { en: "Wages Paid in Full — Later", bn: "মজুরি পূর্ণ পরিশোধ — পরে" },
      p: [
        {
          en: "And you will only be paid your wages in full on the Day of Resurrection. The word tuwaffawna means to be paid completely, with nothing withheld. The verse thereby explains this world's most troubling feature: accounts here never quite balance. The generous die unthanked, the cruel die comfortable, and the best deeds often cost the most. The Quran's answer is not that the ledger is wrong but that it has not been closed yet.",
          bn: "আর কিয়ামতের দিনেই কেবল তোমাদের মজুরি পূর্ণ মাত্রায় দেওয়া হবে। 'তুওয়াফফাওনা' শব্দের অর্থ পুরোপুরি পরিশোধ পাওয়া — কিছুই আটকে না রেখে। আয়াতটি এভাবে দুনিয়ার সবচেয়ে পীড়াদায়ক বৈশিষ্ট্যটির ব্যাখ্যা দেয়: এখানে হিসাব কখনোই ঠিকঠাক মেলে না। দানশীল মরে অকৃতজ্ঞতা নিয়ে, নিষ্ঠুর মরে আরামে, আর শ্রেষ্ঠ কাজগুলোর দামই প্রায়ই সবচেয়ে বেশি। কুরআনের জবাব এই নয় যে খাতাটা ভুল — বরং খাতাটা এখনো বন্ধ হয়নি।",
        },
        {
          en: "For the one wronged, this clause is patience with a date attached; for the one doing good in obscurity, it is a guarantee that nothing evaporates, in step with 99:7-8 — whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it. Partial payments may arrive in this life, but the verse relocates the settlement, and therefore the scorekeeping, to a Day that misses nothing.",
          bn: "মজলুমের জন্য এই অংশটি তারিখসহ ধৈর্য; আর যে নীরবে-নিভৃতে ভালো কাজ করে, তার জন্য নিশ্চয়তা — কিছুই উবে যায় না; 99:7-8 এর সঙ্গে তাল মিলিয়ে: যে অণু পরিমাণ ভালো করবে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করবে সে-ও তা দেখবে। আংশিক পরিশোধ এ জীবনেও আসতে পারে, কিন্তু আয়াতটি চূড়ান্ত নিষ্পত্তিকে — আর তাই হিসাব রাখাটাকেও — সরিয়ে নেয় এমন এক দিনে, যার নজর কিছুই এড়ায় না।",
        },
      ],
    },
    {
      h: { en: "Nudged Away From the Fire", bn: "আগুন থেকে সরিয়ে নেওয়া" },
      p: [
        {
          en: "Then the verse defines success, and the definition is worth reading slowly: whoever is zuhziha — drawn away, nudged aside — from the Fire and admitted to the Garden, he has attained the triumph. Zahzahah is removal by degrees, an inch at a time, as if the Fire's pull were close enough that escaping it is itself the headline. Success is stated in its minimum honest form: out of the Fire, into the Garden — that one has won, faza.",
          bn: "এরপর আয়াতটি সাফল্যের সংজ্ঞা দেয়, আর সংজ্ঞাটি ধীরে পড়ার মতো: যাকে আগুন থেকে 'যুহযিহা' — টেনে সরানো, একটু একটু করে সরিয়ে নেওয়া — হলো এবং জান্নাতে প্রবেশ করানো হলো, সে-ই সফলকাম। 'যাহযাহা' মানে ধাপে ধাপে সরানো, এক ইঞ্চি করে — যেন আগুনের টান এতই কাছে যে তা থেকে রেহাই পাওয়াটাই মূল শিরোনাম। সাফল্য বলা হয়েছে তার ন্যূনতম সৎ রূপে: আগুনের বাইরে, জান্নাতের ভেতরে — সে-ই জিতেছে, 'ফাযা'।",
        },
        {
          en: "Every other scoreboard is silently retired by that sentence. Wealth accumulated, positions reached, followers counted — none of them appear in the Quran's definition of the win. A person can lose every worldly contest and win absolutely, or sweep every worldly contest and lose absolutely. The verse hands its reader the only final metric and leaves him to re-rank his current pursuits against it.",
          bn: "ওই এক বাক্যেই অন্য সব স্কোরবোর্ড নীরবে অবসরে যায়। জমানো সম্পদ, ছোঁয়া পদ, গোনা অনুসারী — কুরআনের জয়ের সংজ্ঞায় এদের কেউ নেই। মানুষ দুনিয়ার প্রতিটি প্রতিযোগিতায় হেরেও চূড়ান্তভাবে জিততে পারে, আবার প্রতিটিতে জিতেও চূড়ান্তভাবে হারতে পারে। আয়াতটি পাঠকের হাতে একমাত্র চূড়ান্ত মাপকাঠিটি তুলে দেয়, আর তার বর্তমান ব্যস্ততাগুলোকে সেই মাপে নতুন করে সাজানোর ভার তাকে দিয়ে যায়।",
        },
      ],
    },
    {
      h: { en: "The Merchandise of Delusion", bn: "প্রতারণার পণ্য" },
      p: [
        {
          en: "The verse closes by naming the world: the life of this world is nothing but mata' al-ghurur, the enjoyment of delusion. Mata' is a trader's word — goods, provisions, the stock a traveler uses along the way. The world is real enjoyment; the verse does not deny that. The indictment is in the second word: ghurur, deception. The commentators, as-Sa'di among them, direct the charge at a specific error — the world deceives the one who takes it as the destination and lets it eclipse the Hereafter.",
          bn: "আয়াতটি শেষ হয় দুনিয়ার নাম ধরে: দুনিয়ার জীবন 'মাতাউল গুরূর' — প্রতারণার ভোগসামগ্রী — ছাড়া কিছু নয়। 'মাতা' ব্যবসায়ীর শব্দ — মালপত্র, রসদ, পথিক পথে যা ব্যবহার করে। দুনিয়া সত্যিকারের ভোগ্যবস্তু; আয়াত তা অস্বীকার করে না। অভিযোগটা দ্বিতীয় শব্দে: 'গুরূর' — ধোঁকা। মুফাসসিরগণ — তাঁদের মধ্যে আস-সা'দীও — অভিযোগটি তাক করেন একটি নির্দিষ্ট ভুলের দিকে: দুনিয়া তাকেই ধোঁকা দেয়, যে একে গন্তব্য ধরে নেয় এবং একে আখিরাত ঢেকে দিতে দেয়।",
        },
        {
          en: "The Quran elsewhere details the mechanism: 57:20 lists the world's phases — play, amusement, adornment, boasting, rivalry in wealth and children — then compares it to rain whose growth delights and then withers. The deception is not in the goods but in the packaging that whispers permanence. A traveler may use the provisions gladly; he is deceived only if he mistakes the roadside inn for home.",
          bn: "কুরআন অন্যত্র কৌশলটির খুঁটিনাটি দেয়: 57:20 দুনিয়ার পর্যায়গুলো গোনে — খেলা, কৌতুক, সাজসজ্জা, অহংকার, ধনসম্পদ ও সন্তানে প্রতিযোগিতা — তারপর একে তুলনা করে সেই বৃষ্টির সঙ্গে, যার ফলানো ফসল মুগ্ধ করে, তারপর শুকিয়ে যায়। ধোঁকাটা পণ্যে নয়, মোড়কে — যা ফিসফিস করে বলে: এ চিরস্থায়ী। পথিক রসদ সানন্দে ব্যবহার করতেই পারে; সে প্রতারিত কেবল তখনই, যখন পথের সরাইখানাকে সে বাড়ি বলে ভুল করে।",
        },
      ],
    },
    {
      h: { en: "Living With the End in View", bn: "শেষকে সামনে রেখে বাঁচা" },
      p: [
        {
          en: "The verse belongs to a family: 21:35 repeats that every soul tastes death and adds that We test you with evil and with good as a trial; 62:8 warns that the death you flee will meet you. The Quran keeps returning to mortality not to darken life but to focus it. Remembering the end works like a deadline works: it converts vague intentions into scheduled acts, and it drains urgency from things that will not matter at the settlement.",
          bn: "আয়াতটি একটি পরিবারের সদস্য: 21:35 আবার বলে প্রতিটি প্রাণ মৃত্যুর স্বাদ নেবে, আর যোগ করে — আমরা তোমাদের পরীক্ষা করি মন্দ ও ভালো দিয়ে, পরীক্ষারূপে; 62:8 সতর্ক করে — যে মৃত্যু থেকে পালাও তা তোমার সঙ্গে সাক্ষাৎ করবেই। কুরআন মরণশীলতায় বারবার ফেরে জীবনকে অন্ধকার করতে নয়, ফোকাসে আনতে। শেষের স্মরণ কাজ করে সময়সীমার মতো: এটি অস্পষ্ট নিয়তগুলোকে সূচিবদ্ধ কাজে বদলে দেয়, আর যেসব জিনিস চূড়ান্ত নিষ্পত্তিতে ধরা হবে না, সেগুলোর তাড়া নিঃশেষ করে দেয়।",
        },
        {
          en: "A concrete exercise: hold one current ambition up against the verse's three clauses. Will it survive the taste of death? Will it count when wages are paid in full? Does it move me an inch away from the Fire? Ambitions that pass may be pursued wholeheartedly; those that fail all three deserve, at minimum, less of the heart than they currently occupy. That periodic audit is this verse turned into a habit.",
          bn: "একটি সুনির্দিষ্ট অনুশীলন: বর্তমান কোনো একটি উচ্চাশাকে আয়াতের তিনটি অংশের সামনে ধরুন। এটি কি মৃত্যুর স্বাদের পরেও টিকবে? মজুরি পূর্ণ পরিশোধের দিন এটি কি গণনায় আসবে? এটি কি আমাকে আগুন থেকে এক ইঞ্চিও সরায়? যে উচ্চাশা উত্তীর্ণ হয়, তার পেছনে পূর্ণ মন দিয়েই ছোটা যায়; যা তিনটিতেই ফেল করে, তার প্রাপ্য অন্তত এটুকু — হৃদয়ে সে এখন যতটা জায়গা দখল করে আছে, তার চেয়ে কম। এই পর্যায়ক্রমিক নিরীক্ষাই আয়াতটি অভ্যাসে রূপান্তরিত হওয়া।",
        },
      ],
    },
  ],
},
'25:74': {
  sections: [
    {
      h: { en: "The Close of a Portrait", bn: "একটি প্রতিকৃতির সমাপ্তি" },
      p: [
        {
          en: "From 25:63 to the end of the surah, the Quran paints the ibad ar-Rahman, the servants of the Most Merciful: they walk on the earth with humility, answer the ignorant with peace, spend their nights in prostration, keep their spending between excess and stinginess, and avoid shirk, murder and zina. This verse is the last item of the portrait, and it is a du'a — as if to say the finishing feature of such people is what they ask for.",
          bn: "25:63 থেকে সূরার শেষ পর্যন্ত কুরআন আঁকে 'ইবাদুর রহমান'-দের — পরম দয়াময়ের বান্দাদের — প্রতিকৃতি: তারা যমীনে চলে বিনয়ের সঙ্গে, মূর্খদের জবাব দেয় শান্তির কথায়, রাত কাটায় সিজদায়, খরচ রাখে অপচয় ও কৃপণতার মাঝখানে, আর দূরে থাকে শিরক, হত্যা ও যিনা থেকে। এই আয়াতটি প্রতিকৃতির শেষ উপাদান, এবং এটি একটি দোয়া — যেন বলা হচ্ছে, এমন মানুষদের সমাপনী বৈশিষ্ট্য হলো তারা কী চায়, সেটিই।",
        },
        {
          en: "The placement teaches by sequence. Only after the portrait has covered a person's own humility, worship and restraint does it turn to the household. The servants of the Most Merciful get their own souls in order and then pray for their families — the du'a of this verse presupposes the eleven verses before it. Asking Allah for a righteous home is the overflow of a person working on himself, not a substitute for it.",
          bn: "এই অবস্থানটি ক্রম দিয়ে শেখায়। প্রতিকৃতিটি মানুষের নিজের বিনয়, ইবাদত ও সংযম সেরে নেওয়ার পরেই কেবল ঘরের দিকে ফেরে। পরম দয়াময়ের বান্দারা আগে নিজেদের আত্মা গুছিয়ে নেয়, তারপর পরিবারের জন্য দোয়া করে — এই আয়াতের দোয়াটি তার আগের এগারোটি আয়াতকে পূর্বশর্ত ধরে নেয়। নেককার সংসারের জন্য আল্লাহর কাছে চাওয়া হলো নিজেকে গড়ার কাজের উপচে পড়া অংশ — তার বিকল্প নয়।",
        },
      ],
    },
    {
      h: { en: "Coolness of the Eyes", bn: "চোখের শীতলতা" },
      p: [
        {
          en: "Our Lord, grant us from our spouses and our offspring qurrata a'yun — coolness of eyes. In Arabic idiom the cool eye is the settled, delighted eye; the expression names the deepest kind of contentment, the sight that makes the heart stand still with joy. Applied to family, it asks for spouses and children who are a source of rest when seen — and in the mouths of the ibad ar-Rahman, the commentators note, what cools the eye is seeing one's family upon obedience to Allah.",
          bn: "হে আমাদের রব, আমাদের স্ত্রীদের ও সন্তানদের থেকে আমাদের দিন 'কুররাতা আইয়ুন' — চোখের শীতলতা। আরবি বাগধারায় শীতল চোখ মানে স্থির, তৃপ্ত চোখ; অভিব্যক্তিটি গভীরতম পরিতৃপ্তির নাম — সেই দৃশ্য, যা দেখে হৃদয় আনন্দে থেমে যায়। পরিবারের ক্ষেত্রে এর অর্থ: এমন জীবনসঙ্গী ও সন্তান চাওয়া, যাদের দেখলেই প্রশান্তি আসে — আর ইবাদুর রহমানদের মুখে, মুফাসসিরগণ লক্ষ করেন, চোখ জুড়ায় নিজের পরিবারকে আল্লাহর আনুগত্যের ওপর দেখে।",
        },
        {
          en: "That reading keeps the prayer from collapsing into mere domestic comfort. Children can cool the eye by achievement, charm or income, and all of that fades or moves away. The coolness this du'a intends survives distance and even death, because it is anchored in where the family stands with Allah. It is the difference between enjoying one's family and being at rest about them.",
          bn: "এই পাঠটিই দোয়াটিকে নিছক সাংসারিক আরামে নেমে যাওয়া থেকে বাঁচায়। সন্তান চোখ জুড়াতে পারে কৃতিত্বে, লাবণ্যে বা উপার্জনে — আর এসবই ম্লান হয় বা দূরে সরে যায়। এই দোয়া যে শীতলতা চায় তা দূরত্ব, এমনকি মৃত্যুকেও পার হয়ে টেকে, কারণ তার নোঙর পরিবারটি আল্লাহর কাছে কোথায় দাঁড়িয়ে, সেখানে। পরিবারকে উপভোগ করা আর পরিবার নিয়ে নিশ্চিন্ত থাকা — এ দুয়ের পার্থক্যই এটি।",
        },
      ],
    },
    {
      h: { en: "Make Us an Imam", bn: "আমাদের ইমাম বানান" },
      p: [
        {
          en: "The second half startles with its ambition: and make us an imam for the muttaqin — a leader, a pattern, for the God-fearing. The commentators pause at the singular imam where a plural might be expected; among the explanations they offer is that the righteous are as one in their way, or that each asks to be an exemplar in his own right. Either way, the servants of the Most Merciful, described eleven verses earlier as walking humbly, here ask to be at the front.",
          bn: "দ্বিতীয় অংশটি তার উচ্চাশা দিয়ে চমকে দেয়: আর আমাদের বানান মুত্তাকীদের জন্য 'ইমাম' — আল্লাহভীরুদের নেতা, আদর্শ। যেখানে বহুবচন প্রত্যাশিত সেখানে একবচন 'ইমাম' নিয়ে মুফাসসিরগণ থামেন; তাঁদের দেওয়া ব্যাখ্যার মধ্যে আছে — নেককাররা তাদের পথে যেন একজনই, অথবা প্রত্যেকে নিজ নিজ জায়গায় আদর্শ হতে চায়। যেভাবেই হোক, এগারো আয়াত আগে যাদের পরিচয় ছিল বিনয়ে হাঁটা, সেই পরম দয়াময়ের বান্দারাই এখানে সামনের সারিতে দাঁড়াতে চাইছে।",
        },
        {
          en: "The two are not in tension, because the leadership requested is of a specific kind: being followed toward Allah. Ambition for wealth or office breeds rivalry; ambition to be an example in taqwa breeds accountability — a person who has asked Allah to make him a model has volunteered to be watched. The du'a also implies wanting others to be righteous, since one cannot be an imam for the muttaqin unless muttaqin exist to follow.",
          bn: "দুটির মধ্যে বিরোধ নেই, কারণ যে নেতৃত্ব চাওয়া হচ্ছে তা এক বিশেষ ধরনের: আল্লাহর দিকে অনুসৃত হওয়া। সম্পদ বা পদের উচ্চাশা জন্ম দেয় রেষারেষি; তাকওয়ায় আদর্শ হওয়ার উচ্চাশা জন্ম দেয় জবাবদিহি — যে ব্যক্তি আল্লাহর কাছে নিজেকে আদর্শ বানানোর দোয়া করেছে, সে স্বেচ্ছায় নজরদারিতে থাকতে রাজি হয়েছে। দোয়াটিতে অন্যদের নেককার হওয়ার কামনাও নিহিত, কারণ মুত্তাকী না থাকলে মুত্তাকীদের ইমাম হওয়া যায় না।",
        },
      ],
    },
    {
      h: { en: "A Prayer That Assumes Work", bn: "যে দোয়া শ্রম ধরে নেয়" },
      p: [
        {
          en: "Like all Quranic du'as, this one is the voiced half of an effort. The Quran commands in 66:6 to protect yourselves and your families from a Fire, and in 20:132 to enjoin prayer upon your family and be steadfast therein. A parent who prays this verse at night and neglects those commands by day is asking Allah to harvest a field no one planted. The du'a directs the work as much as it requests the outcome.",
          bn: "কুরআনের সব দোয়ার মতো এটিও একটি প্রচেষ্টার উচ্চারিত অর্ধেক। কুরআন 66:6 আয়াতে আদেশ করে — নিজেদের ও নিজেদের পরিবারকে আগুন থেকে বাঁচাও; আর 20:132 আয়াতে — তোমার পরিবারকে নামাযের আদেশ দাও এবং তাতে অবিচল থাকো। যে অভিভাবক রাতে এই আয়াত পড়ে দোয়া করে অথচ দিনে ওই আদেশগুলো অবহেলা করে, সে আল্লাহর কাছে এমন খেতের ফসল চাইছে যেখানে কেউ বীজই বোনেনি। দোয়াটি ফল যেমন চায়, তেমনি কাজের দিকও দেখিয়ে দেয়।",
        },
        {
          en: "There is also mercy in the fact that this is a du'a at all. Righteous children cannot be manufactured by parenting technique; hearts are in Allah's hand, and the prophets themselves show the limits — Nuh (AS) lost a son, as 11:42-46 recounts, while Ibrahim (AS) prayed in 37:100 for a righteous child and was granted one. The verse teaches the posture that fits such uncertainty: full effort, and the outcome asked from its true Owner.",
          bn: "এটি যে আদৌ একটি দোয়া, তার মধ্যেও রহমত আছে। নেককার সন্তান লালনপালনের কৌশলে বানানো যায় না; হৃদয় আল্লাহর হাতে, আর নবীরাই (আঃ) সীমাটা দেখিয়ে গেছেন — নূহ (আঃ) এক পুত্রকে হারিয়েছেন, যেমন 11:42-46 বর্ণনা করে; আর ইবরাহীম (আঃ) 37:100 আয়াতে নেক সন্তানের দোয়া করেছেন এবং পেয়েছেন। আয়াতটি শেখায় এমন অনিশ্চয়তার উপযুক্ত ভঙ্গিটি: পূর্ণ চেষ্টা, আর ফলাফল চাওয়া তার প্রকৃত মালিকের কাছে।",
        },
      ],
    },
    {
      h: { en: "The Reward Named Next", bn: "পরেই যে পুরস্কারের নাম" },
      p: [
        {
          en: "The passage does not leave the portrait unrewarded. The very next verse, 25:75, says: those will be rewarded with the highest chamber for their patience, and will be met there with greeting and peace. The mention of patience as the price is telling — everything in the portrait, from answering the ignorant gently to raising a family toward Allah, runs on sabr. Building a household that cools the eyes is slow work measured in years, and the Quran files it under patience, not luck.",
          bn: "অনুচ্ছেদটি প্রতিকৃতিকে পুরস্কারহীন রাখে না। ঠিক পরের আয়াত, 25:75, বলে: তাদের ধৈর্যের প্রতিদানে তাদের দেওয়া হবে সুউচ্চ কক্ষ, আর সেখানে তাদের বরণ করা হবে অভিবাদন ও সালামে। মূল্য হিসেবে ধৈর্যের উল্লেখটি অর্থবহ — প্রতিকৃতির সবকিছুই, মূর্খকে নম্র জবাব দেওয়া থেকে পরিবারকে আল্লাহর দিকে গড়ে তোলা পর্যন্ত, চলে সবরের ওপর। চোখ-জুড়ানো সংসার গড়া বছরের হিসাবে মাপা ধীর কাজ; কুরআন একে রাখে ধৈর্যের খাতায় — ভাগ্যের খাতায় নয়।",
        },
        {
          en: "To live the verse, say it — it is one of the Quran's given prayers, ready for daily use — and then be its first answer. The house moves toward what its members model, rarely toward what they merely announce. A parent praying for children who love prayer while the children watch him rush his own has set the du'a against his example; aligning the two is how the servants of the Most Merciful ask.",
          bn: "আয়াতটি যাপন করতে হলে এটি পড়ুন — এটি কুরআনের দেওয়া দোয়াগুলোর একটি, প্রতিদিন ব্যবহারের জন্য প্রস্তুত — তারপর নিজেই এর প্রথম উত্তর হয়ে উঠুন। সংসার এগোয় তার সদস্যরা যা করে দেখায় সেদিকে; যা কেবল মুখে ঘোষণা করে, সেদিকে কদাচিৎ। যে অভিভাবক নামায-ভালোবাসা সন্তানের জন্য দোয়া করে অথচ সন্তানরা দেখে সে নিজের নামায তাড়াহুড়ায় সারে, সে দোয়াটিকে নিজের দৃষ্টান্তের বিপক্ষে দাঁড় করিয়েছে; দুটিকে এক রেখায় আনাই পরম দয়াময়ের বান্দাদের চাওয়ার ধরন।",
        },
      ],
    },
  ],
},
'73:8': {
  sections: [
    {
      h: { en: "A Command in the Night Surah", bn: "রাতের সূরায় এক আদেশ" },
      p: [
        {
          en: "Surah al-Muzzammil opens by calling the Prophet ﷺ from his wrapped garments: stand the night, except a little, and recite the Quran with tartil — slow, measured recitation, as 73:1-4 lay out. The reason follows in 73:5: We will cast upon you a weighty word. The night training was preparation for carrying revelation. Within that program comes this verse: and remember the name of your Lord, and devote yourself to Him with complete devotion.",
          bn: "সূরা আল-মুযযাম্মিল শুরু হয় নবী ﷺ-কে তাঁর জড়ানো চাদর থেকে ডেকে: রাতে দাঁড়াও, সামান্য অংশ ছাড়া, আর কুরআন পড়ো তারতীলের সঙ্গে — ধীর, মাপা তিলাওয়াতে, যেমন 73:1-4 বিন্যাস করে দেয়। কারণটি আসে 73:5 আয়াতে: আমরা তোমার ওপর এক ভারী বাণী অর্পণ করব। রাতের এই প্রশিক্ষণ ছিল ওহী বহনের প্রস্তুতি। সেই কর্মসূচির ভেতরেই আসে এই আয়াত: আর তোমার রবের নাম স্মরণ করো, এবং সবকিছু ছেড়ে পূর্ণ একাগ্রতায় তাঁর প্রতি নিবিষ্ট হও।",
        },
        {
          en: "The verse right before it, 73:7, gives the reason the night was chosen: in the day you have prolonged occupation — sabhan tawila, a long swim through duties and people. The command to devote oneself is therefore not issued to someone with an empty calendar. It is issued precisely because the day is full, and it carves out the night as the time when the heart returns from its long swim to its Owner.",
          bn: "ঠিক আগের আয়াত, 73:7, রাতকে বেছে নেওয়ার কারণ দেয়: দিনে তোমার আছে দীর্ঘ ব্যস্ততা — 'সাবহান তাউয়ীলা', দায়িত্ব ও মানুষের ভেতর দিয়ে এক লম্বা সাঁতার। কাজেই নিবিষ্ট হওয়ার আদেশটি ফাঁকা সময়সূচির কাউকে দেওয়া হয়নি। এটি দেওয়া হয়েছে ঠিক এই কারণেই যে দিনটা ভরা — আর তা রাতকে আলাদা করে দেয় সেই সময় হিসেবে, যখন হৃদয় তার লম্বা সাঁতার শেষে তার মালিকের কাছে ফেরে।",
        },
      ],
    },
    {
      h: { en: "Remember the Name", bn: "নামটি স্মরণ করো" },
      p: [
        {
          en: "Remember the name of your Lord. Dhikr of the name covers the whole familiar range — tasbih, tahmid, takbir, recitation, du'a — but the phrasing also points at something specific: keeping Allah named in one's day, spoken and not merely assumed. A similar command in 76:25 sets the rhythm: remember the name of your Lord morning and evening. The tongue's habit builds the heart's orientation; what is never said tends, over time, to be less and less felt.",
          bn: "তোমার রবের নাম স্মরণ করো। নামের যিকর পরিচিত পুরো পরিসরটাই ধারণ করে — তাসবীহ, তাহমীদ, তাকবীর, তিলাওয়াত, দোয়া — তবে বাক্যরীতিটি একটি নির্দিষ্ট জিনিসের দিকেও ইশারা করে: দিনের মধ্যে আল্লাহকে নাম ধরে রাখা — উচ্চারিত, কেবল ধরে-নেওয়া নয়। 76:25 আয়াতের অনুরূপ আদেশ ছন্দটি বেঁধে দেয়: সকালে ও সন্ধ্যায় তোমার রবের নাম স্মরণ করো। জিহ্বার অভ্যাসই হৃদয়ের অভিমুখ গড়ে; যা কখনো বলা হয় না, সময়ের সঙ্গে তা কম কমই অনুভূত হতে থাকে।",
        },
        {
          en: "Placed before the command to devote, remembrance is the on-ramp into devotion. No one moves from a crowded day straight into full-hearted worship; the transition is made of small spoken acts of dhikr that gather the scattered attention piece by piece. The verse's order is therefore practical rather than decorative: first the name on the tongue, then the turning of the whole self toward the One named.",
          bn: "নিবিষ্ট হওয়ার আদেশের আগে বসানো স্মরণ হলো একাগ্রতায় ওঠার পথ। ভিড়ে ঠাসা দিন থেকে সরাসরি পূর্ণহৃদয় ইবাদতে কেউ পৌঁছায় না; এই উত্তরণ তৈরি হয় যিকরের ছোট ছোট উচ্চারিত কাজ দিয়ে, যা ছড়িয়ে পড়া মনোযোগকে টুকরো টুকরো করে কুড়িয়ে আনে। আয়াতের ক্রমটি তাই অলংকার নয়, ব্যবহারিক: আগে জিহ্বায় নাম, তারপর যাঁর নাম নেওয়া হলো তাঁর দিকে গোটা সত্তার ফেরা।",
        },
      ],
    },
    {
      h: { en: "Tabattul: Cutting Away", bn: "তাবাত্তুল: কেটে বেরিয়ে আসা" },
      p: [
        {
          en: "The key word is tabattal ilayhi tabtila. The root means to cut off, to sever; the commentators explain tabattul as cutting oneself away from everything else in order to be entirely for Allah — attention undivided, hope unshared. The verbal form doubles the emphasis: devote yourself with an utter devoting. Modern life has given the word an unexpected precision, since the thing most needing to be severed in our nights is a glowing screen of other claims on the heart.",
          bn: "মূল শব্দটি হলো 'তাবাত্তাল ইলাইহি তাবতীলা'। ধাতুটির অর্থ কেটে ফেলা, বিচ্ছিন্ন করা; মুফাসসিরগণ তাবাত্তুলের ব্যাখ্যা করেন — অন্য সবকিছু থেকে নিজেকে কেটে এনে সম্পূর্ণ আল্লাহর জন্য হয়ে যাওয়া: মনোযোগ অবিভক্ত, আশা ভাগহীন। ক্রিয়ার গঠনটি জোর দ্বিগুণ করে: নিবিষ্ট হও পূর্ণ নিবিষ্টতায়। আধুনিক জীবন শব্দটিকে এক অপ্রত্যাশিত নির্ভুলতা দিয়েছে — কারণ আমাদের রাতে যা সবচেয়ে বেশি কেটে ফেলা দরকার, তা হৃদয়ের ওপর অন্য দাবিদারদের এক জ্বলজ্বলে পর্দা।",
        },
        {
          en: "What tabattul is not, matters as much as what it is. It is devotion in worship, not withdrawal from life. The word describes the quality of the time given to Allah — whole, undistracted, severed from competing claims — not the abandonment of work, marriage or society, which the same surah's daytime swimming presupposes. A few minutes that are entirely His outweigh long hours of divided presence.",
          bn: "তাবাত্তুল কী নয় — সেটাও কী, তার সমান গুরুত্বপূর্ণ। এটি ইবাদতে একাগ্রতা, জীবন থেকে সরে যাওয়া নয়। শব্দটি আল্লাহকে দেওয়া সময়ের গুণমান বর্ণনা করে — অখণ্ড, অবিচলিত, প্রতিদ্বন্দ্বী দাবিগুলো থেকে ছিন্ন — কাজ, বিবাহ বা সমাজ ত্যাগ নয়; একই সূরার দিনের-সাঁতার তো সেসব ধরেই নেয়। যে কয়েক মিনিট সম্পূর্ণ তাঁর, তা ভাগ-হয়ে-থাকা দীর্ঘ ঘণ্টার চেয়ে ভারী।",
        },
      ],
    },
    {
      h: { en: "Devotion Without Monasticism", bn: "বৈরাগ্য ছাড়া একাগ্রতা" },
      p: [
        {
          en: "The Prophet ﷺ himself drew this line. Sa'd ibn Abi Waqqas (RA) reported that the Prophet ﷺ refused Uthman ibn Maz'un (RA) permission for tabattul — meaning, in that context, renouncing marriage for worship; the report is agreed upon in al-Bukhari and Muslim. So the same word the Quran commands in one sense, the Prophet ﷺ forbade in another. The commanded tabattul is of the heart's direction; the forbidden one is the amputation of lawful life.",
          bn: "নবী ﷺ নিজেই এই রেখাটি টেনে দিয়েছেন। সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) বর্ণনা করেন, নবী ﷺ উসমান ইবনে মাযঊন (রাঃ)-কে তাবাত্তুলের অনুমতি দেননি — সেই প্রসঙ্গে যার অর্থ ছিল ইবাদতের জন্য বিবাহ বর্জন; বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে এসেছে। অর্থাৎ যে শব্দ কুরআন এক অর্থে আদেশ করে, নবী ﷺ তা-ই আরেক অর্থে নিষেধ করেছেন। আদিষ্ট তাবাত্তুল হৃদয়ের অভিমুখের; নিষিদ্ধটি হলো বৈধ জীবনের অঙ্গচ্ছেদ।",
        },
        {
          en: "Islam's ideal is thus harder than a monastery: full presence in the world by day, full presence with Allah in the protected hours. The surah's addressee ﷺ led armies, judged disputes, raised a family — and stood at night until his feet swelled. The believer copies the shape at his own scale: engagement that does not swallow devotion, devotion that does not excuse disengagement.",
          bn: "ইসলামের আদর্শ তাই আশ্রম-জীবনের চেয়ে কঠিন: দিনে দুনিয়ায় পূর্ণ উপস্থিতি, সংরক্ষিত প্রহরে আল্লাহর সঙ্গে পূর্ণ উপস্থিতি। এই সূরার প্রাপক ﷺ সেনাদল পরিচালনা করেছেন, বিবাদের মীমাংসা করেছেন, সংসার গড়েছেন — আর রাতে দাঁড়িয়েছেন, যতক্ষণ না তাঁর পা ফুলে যেত। মুমিন নিজের মাপে সেই আকৃতিটাই নকল করে: এমন কর্মব্যস্ততা যা একাগ্রতাকে গিলে ফেলে না, এমন একাগ্রতা যা কর্মবিমুখতার অজুহাত হয় না।",
        },
      ],
    },
    {
      h: { en: "The Lightened Load, the Kept Core", bn: "হালকা হওয়া বোঝা, রয়ে যাওয়া মর্ম" },
      p: [
        {
          en: "The surah's last verse, 73:20, revealed later, lightened the night vigil: Allah knows you cannot count it precisely, so recite what is easy of the Quran, establish prayer, give zakah. The long compulsory standing became voluntary; the direction of the surah remained. What was never withdrawn is this verse's core — a daily severing of some real time for Allah alone, sized to capacity rather than to heroism.",
          bn: "সূরার শেষ আয়াত, 73:20, পরে নাযিল হয়ে রাতের জাগরণকে হালকা করে দেয়: আল্লাহ জানেন তোমরা এর নিখুঁত হিসাব রাখতে পারবে না, তাই কুরআনের যতটুকু সহজ ততটুকু পড়ো, নামায কায়েম করো, যাকাত দাও। দীর্ঘ বাধ্যতামূলক দাঁড়ানো ঐচ্ছিক হলো; সূরার অভিমুখ রয়ে গেল। যা কখনোই তুলে নেওয়া হয়নি তা এই আয়াতের মর্ম — প্রতিদিন খানিকটা প্রকৃত সময় কেবল আল্লাহর জন্য কেটে রাখা, বীরত্বের মাপে নয়, সামর্থ্যের মাপে।",
        },
        {
          en: "The Prophet ﷺ said the most beloved deeds to Allah are the most constant, even if small — agreed upon in al-Bukhari and Muslim. That principle turns this verse into a workable plan: choose a slot, guard it, and let nothing enter it. Ten severed minutes of Quran and dhikr every night, phone in another room, will do more for the heart over a year than occasional long vigils. Tabattul, practiced, is simply loyalty to that appointment.",
          bn: "নবী ﷺ বলেছেন, আল্লাহর কাছে সবচেয়ে প্রিয় আমল সেটিই যা সবচেয়ে নিয়মিত — ছোট হলেও; বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। এই নীতিই আয়াতটিকে একটি কার্যকর পরিকল্পনায় বদলে দেয়: একটি সময় বেছে নিন, পাহারা দিন, আর কিছুকেই তাতে ঢুকতে দেবেন না। প্রতি রাতে দশটি কেটে-রাখা মিনিট কুরআন ও যিকরের জন্য — ফোন অন্য ঘরে — এক বছরে হৃদয়ের জন্য যা করবে, মাঝেমধ্যের দীর্ঘ জাগরণ তা করবে না। অনুশীলনে তাবাত্তুল আসলে ওই সাক্ষাতের প্রতি বিশ্বস্ততারই নাম।",
        },
      ],
    },
  ],
},
'89:27-30': {
  sections: [
    {
      h: { en: "Where the Address Falls", bn: "সম্বোধনটি কোথায় পড়ে" },
      p: [
        {
          en: "Surah al-Fajr is a surah of hard scenes before this gentle ending. It parades the destroyed powers — Aad of the pillars, Thamud who carved the rocks, Pharaoh of the stakes — and then diagnoses man in 89:15-16: honored, he says my Lord has favored me; tried with less, he says my Lord has humiliated me. It shows inheritance devoured greedily and wealth loved with unbounded love, then the Day when Hell is brought and man remembers too late, as 89:23 describes.",
          bn: "সূরা আল-ফাজর এই কোমল সমাপ্তির আগে কঠিন দৃশ্যের সূরা। এটি সারিবদ্ধ করে দেখায় ধ্বংস হওয়া পরাক্রমগুলোকে — স্তম্ভের অধিকারী আদ, পাথর খোদাই করা সামূদ, কীলকের অধিকারী ফিরআউন — তারপর 89:15-16 আয়াতে মানুষের রোগনির্ণয় করে: সম্মানিত হলে সে বলে আমার রব আমাকে অনুগ্রহ করেছেন; সংকীর্ণতায় পরীক্ষিত হলে বলে আমার রব আমাকে অপমান করেছেন। এটি দেখায় গোগ্রাসে খাওয়া উত্তরাধিকার আর লোভভরে ভালোবাসা ধনসম্পদ; তারপর সেই দিন, যেদিন জাহান্নামকে আনা হবে আর মানুষ স্মরণ করবে — কিন্তু অনেক দেরিতে, যেমন 89:23 বর্ণনা করে।",
        },
        {
          en: "Against that dark background, the final verses turn with sudden tenderness to a single addressee: O soul at peace. The contrast is the message. The surah has shown souls that rattled with the rise and fall of fortune; now it addresses the one soul that stopped rattling. Everything before was the noise; this is the voice that the quiet soul finally hears.",
          bn: "সেই অন্ধকার পটভূমির বিপরীতে শেষ আয়াতগুলো হঠাৎ কোমলতায় ফেরে একটিমাত্র সম্বোধিতের দিকে: হে প্রশান্ত আত্মা। এই বৈপরীত্যই বার্তা। সূরাটি দেখিয়েছে সেসব আত্মাকে, ভাগ্যের ওঠানামায় যারা ঝনঝন করে কেঁপেছে; এখন সে সম্বোধন করছে সেই একটি আত্মাকে, যার কাঁপুনি থেমে গেছে। আগের সবকিছু ছিল কোলাহল; আর এটি সেই কণ্ঠস্বর, যা শান্ত আত্মা অবশেষে শুনতে পায়।",
        },
      ],
    },
    {
      h: { en: "The Soul at Peace", bn: "প্রশান্ত আত্মা" },
      p: [
        {
          en: "The Quran names three conditions of the human soul. There is the nafs ammarah bis-su, the soul that commands to evil, confessed in 12:53; the nafs lawwamah, the self-reproaching soul that Allah swears by in 75:2; and here the nafs mutma'innah, the soul at rest. Scholars have long read these as stations on one road: the same soul, disciplined and turned toward its Lord, moves from commanding evil, to blaming itself, to settling.",
          bn: "কুরআন মানব আত্মার তিনটি অবস্থার নাম নেয়। আছে 'নাফসে আম্মারা বিস-সূ' — মন্দের আদেশদাতা আত্মা, যার স্বীকারোক্তি 12:53 আয়াতে; 'নাফসে লাওয়ামা' — আত্মভর্ৎসনাকারী আত্মা, যার কসম আল্লাহ খেয়েছেন 75:2 আয়াতে; আর এখানে 'নাফসে মুতমাইন্না' — স্থির, প্রশান্ত আত্মা। আলিমগণ বহুকাল ধরে এগুলোকে পড়েছেন এক পথেরই স্টেশন হিসেবে: একই আত্মা, সংযত হয়ে ও তার রবের দিকে ফিরে, মন্দের আদেশ থেকে আত্মভর্ৎসনায়, সেখান থেকে স্থিরতায় পৌঁছায়।",
        },
        {
          en: "What the soul is at peace about is defined by the surah it ends: not at peace about outcomes, but about its Lord. Where 89:15-16 showed a soul whose verdict on Allah swung with its bank balance, the mutma'innah holds steady through both halves of that test. And the Quran states where such steadiness is manufactured: truly in the remembrance of Allah do hearts find rest, as 13:28 says. Tranquility is not a temperament; it is a relationship's fruit.",
          bn: "আত্মাটি কী বিষয়ে প্রশান্ত, তা সংজ্ঞায়িত করে সেই সূরাই, যার সমাপ্তিতে সে আছে: ফলাফল নিয়ে প্রশান্ত নয় — তার রব সম্পর্কে প্রশান্ত। 89:15-16 যেখানে দেখিয়েছে এমন আত্মা, আল্লাহ সম্পর্কে যার রায় ব্যাংক ব্যালেন্সের সঙ্গে দুলত, মুতমাইন্না সেখানে সেই পরীক্ষার দুই অর্ধেই অটল থাকে। আর এমন অটলতা কোথায় তৈরি হয় কুরআন তা বলে দিয়েছে: জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায় — যেমন 13:28 বলে। প্রশান্তি কোনো মেজাজ নয়; এটি এক সম্পর্কের ফল।",
        },
      ],
    },
    {
      h: { en: "Pleased and Pleasing", bn: "সন্তুষ্ট ও সন্তোষভাজন" },
      p: [
        {
          en: "Return to your Lord radiyatan mardiyyah — well-pleased, well-pleasing. The two words are a mirror: the soul is pleased with Allah, with what He decreed, gave and withheld; and Allah is pleased with the soul. The order within the verse repays attention. Being pleased with Him is the soul's own work in this life, done in the dark, through the unexplained losses; being pleased with by Him is the answer it receives at the return.",
          bn: "তোমার রবের দিকে ফিরে এসো 'রাদিয়াতান মারদিয়্যাহ' — সন্তুষ্ট হয়ে, সন্তোষভাজন হয়ে। শব্দ দুটি একটি আয়না: আত্মা আল্লাহর প্রতি সন্তুষ্ট — তাঁর ফয়সালায়, তাঁর দেওয়ায় ও না-দেওয়ায়; আর আল্লাহ সন্তুষ্ট সেই আত্মার প্রতি। আয়াতের ভেতরের ক্রমটি মনোযোগের দাম ফেরত দেয়। তাঁর প্রতি সন্তুষ্ট থাকা এই জীবনে আত্মার নিজের কাজ — অন্ধকারে, ব্যাখ্যাহীন ক্ষতির ভেতর দিয়ে করা; আর তাঁর সন্তোষভাজন হওয়া হলো প্রত্যাবর্তনের সময় পাওয়া তার উত্তর।",
        },
        {
          en: "The command irji'i, return, also quietly asserts something about home. One returns only to where one belongs; the wording treats the soul's presence in this world as a journey out, and its movement to Allah as the way back. Death, for the soul described here, is not eviction from its place but arrival at it.",
          bn: "'ইরজিঈ' — ফিরে এসো — আদেশটিও নীরবে ঠিকানা সম্পর্কে কিছু ঘোষণা করে। মানুষ কেবল সেখানেই ফেরে, যেখানে তার শিকড়; শব্দবিন্যাসটি আত্মার এই দুনিয়ায় থাকাকে দেখে বাইরে যাওয়া সফর হিসেবে, আর আল্লাহর দিকে তার যাত্রাকে ঘরে ফেরার পথ হিসেবে। এখানে বর্ণিত আত্মার জন্য মৃত্যু নিজের জায়গা থেকে উচ্ছেদ নয় — সেখানে পৌঁছানো।",
        },
      ],
    },
    {
      h: { en: "Among My Servants, Into My Garden", bn: "আমার বান্দাদের মাঝে, আমার জান্নাতে" },
      p: [
        {
          en: "The welcome has two doors, in order: enter among My servants, and enter My Garden. Company comes before place. Before the Garden is mentioned, the soul is folded into the fellowship of Allah's servants — the prophets, the truthful, the martyrs and the righteous whom 4:69 names as the best of companions. The sequence hints that who you are with is a deeper reward than where you are; Paradise is Paradise partly because of its residents.",
          bn: "অভ্যর্থনাটির দুটি দরজা, ক্রম অনুসারে: আমার বান্দাদের মধ্যে প্রবেশ করো, এবং আমার জান্নাতে প্রবেশ করো। স্থানের আগে সঙ্গ। জান্নাতের উল্লেখের আগেই আত্মাকে জড়িয়ে নেওয়া হয় আল্লাহর বান্দাদের সাহচর্যে — নবীগণ, সিদ্দীকগণ, শহীদগণ ও সালিহগণ, 4:69 যাঁদের নাম নিয়েছে শ্রেষ্ঠ সঙ্গী হিসেবে। এই ক্রম ইঙ্গিত দেয়: আপনি কাদের সঙ্গে আছেন, তা আপনি কোথায় আছেন তার চেয়ে গভীর পুরস্কার; জান্নাত আংশিকভাবে জান্নাত তার অধিবাসীদের কারণেই।",
        },
        {
          en: "Then the possessive: My Garden. Throughout the Quran, Paradise is described by its rivers and shade, but here, at the address to the quiet soul, Allah attaches it to Himself. The commentators hear in that single pronoun the highest honoring in the passage — the invitation is not to a reward warehouse but into what the Host calls His own. The verses are recited across the world at funerals; they were revealed as a destination to steer a life by.",
          bn: "তারপর সেই সম্বন্ধসূচক শব্দ: আমার জান্নাত। গোটা কুরআনে জান্নাতের বর্ণনা তার নদী ও ছায়া দিয়ে, কিন্তু এখানে, প্রশান্ত আত্মার প্রতি সম্বোধনে, আল্লাহ একে যুক্ত করেছেন নিজের সঙ্গে। মুফাসসিরগণ ওই একটিমাত্র সর্বনামে শোনেন অনুচ্ছেদটির সর্বোচ্চ সম্মাননা — আমন্ত্রণটি কোনো পুরস্কারের গুদামে নয়, বরং মেজবান যাকে নিজের বলে ডাকেন তার ভেতরে। আয়াতগুলো সারা বিশ্বে জানাযায় পড়া হয়; কিন্তু নাযিল হয়েছিল এমন এক গন্তব্য হিসেবে, যাকে সামনে রেখে জীবন চালাতে হয়।",
        },
      ],
    },
    {
      h: { en: "Becoming the Addressee", bn: "সম্বোধিত হয়ে ওঠা" },
      p: [
        {
          en: "The commentators mention that this address comes to the soul at death and at the Resurrection — the welcome spans the whole passage from this world to the next. Which raises the only question that matters to a living reader: how does a soul come to deserve that address? The surah has already shown the disqualifiers — reading Allah's favor and trial as approval and insult, devouring inheritance, loving wealth with unbounded love — and 13:28 has named the builder: remembrance.",
          bn: "মুফাসসিরগণ উল্লেখ করেন, এই সম্বোধন আত্মার কাছে আসে মৃত্যুর সময় এবং পুনরুত্থানে — অভ্যর্থনাটি এ জগৎ থেকে পরের জগৎ পর্যন্ত পুরো পথ জুড়ে। আর তাতেই জাগে জীবিত পাঠকের একমাত্র জরুরি প্রশ্ন: কোন আত্মা এই সম্বোধনের যোগ্য হয়? সূরাটি অযোগ্যতার লক্ষণগুলো আগেই দেখিয়েছে — আল্লাহর অনুগ্রহ ও পরীক্ষাকে অনুমোদন আর অপমান হিসেবে পড়া, উত্তরাধিকার গোগ্রাসে খাওয়া, সীমাহীন ভালোবাসায় সম্পদ ভালোবাসা — আর 13:28 নির্মাতার নাম বলে দিয়েছে: স্মরণ।",
        },
        {
          en: "So the practice is unglamorous and daily: dhikr that steadies the heart, and deliberate contentment rehearsed at each rise and fall — saying alhamdulillah in the ease without reading it as entitlement, and in the tightness without reading it as rejection. A soul trained for years to be pleased with Allah in both weathers is being shaped into the very description radiyah carries. The address at the end is simply the name of what it has become.",
          bn: "অতএব অনুশীলনটি জৌলুসহীন ও দৈনন্দিন: যে যিকর হৃদয় স্থির করে, আর প্রতিটি উত্থান-পতনে মহড়া দেওয়া সজ্ঞান সন্তুষ্টি — স্বাচ্ছন্দ্যে আলহামদুলিল্লাহ বলা, তাকে নিজের প্রাপ্য অধিকার না পড়ে; আর টানাটানিতেও তা বলা, তাকে প্রত্যাখ্যান না পড়ে। যে আত্মা বছরের পর বছর দুই আবহাওয়াতেই আল্লাহর প্রতি সন্তুষ্ট থাকার প্রশিক্ষণ নিয়েছে, সে গড়ে উঠছে ঠিক সেই বর্ণনায় — 'রাদিয়া' যা বহন করে। শেষের সম্বোধনটি আসলে সে যা হয়ে উঠেছে, তারই নাম।",
        },
      ],
    },
  ],
},
'3:190-191': {
  sections: [
    {
      h: { en: "Where the Surah Turns", bn: "সূরা যেখানে মোড় নেয়" },
      p: [
        {
          en: "These verses open the closing passage of Surah Al Imran, a surah spent largely in argument and aftermath: the long dialogue with the Christian delegation of Najran, the wound of Uhud and its lessons for a community under pressure. At 3:190 the register changes. The proofs are no longer quoted or debated; they are hung overhead. Whoever remained unmoved by every earlier argument still stands beneath the alternation of night and day, and that alone, the verse says, is sign enough.",
          bn: "এই আয়াতগুলো দিয়ে সূরা আলে ইমরানের সমাপ্তি অংশ শুরু হয় — এমন এক সূরা, যার বড় অংশ কেটেছে যুক্তিতর্ক ও তার পরিণতিতে: নাজরানের খ্রিস্টান প্রতিনিধি দলের সঙ্গে দীর্ঘ সংলাপ, উহুদের ক্ষত এবং চাপে থাকা একটি সম্প্রদায়ের জন্য তার শিক্ষা। 3:190-এ সুর বদলে যায়। প্রমাণ আর উদ্ধৃত বা বিতর্কিত হয় না; তা টাঙিয়ে দেওয়া হয় মাথার ওপরে। আগের সব যুক্তিতে যে অটল থেকেছে, সেও তো রাত-দিনের পালাবদলের নিচেই দাঁড়িয়ে — আর আয়াত বলছে, কেবল সেটুকুই যথেষ্ট নিদর্শন।",
        },
        {
          en: "The claim is precise. In the creation of the heavens and the earth and in the ikhtilaf, the turning about, of night and day there are ayat, signs. The Quran uses the same word for its own verses and for daybreak: both are communications from the same Author, and both can be passed over without being read. Then the verse names its audience — not everyone, but ulul-albab, those who reach the kernel of things and are not satisfied with husks.",
          bn: "দাবিটি সুনির্দিষ্ট। আসমান ও যমীনের সৃষ্টিতে এবং রাত-দিনের ইখতিলাফে — পালাবদলে — রয়েছে আয়াত, নিদর্শন। কুরআন নিজের বাক্যগুলোর জন্য আর ভোরের আলো ফোটার জন্য একই শব্দ ব্যবহার করে: দুটিই একই রচয়িতার বার্তা, আর দুটিই না পড়ে পার হয়ে যাওয়া সম্ভব। এরপর আয়াত তার শ্রোতাদের নাম নেয় — সবাই নয়, বরং উলুল আলবাব: যারা জিনিসের মর্মে পৌঁছায়, খোসায় সন্তুষ্ট থাকে না।",
        },
      ],
    },
    {
      h: { en: "The People of the Kernel", bn: "মর্মে পৌঁছানো মানুষ" },
      p: [
        {
          en: "Lubb in Arabic is the kernel of a nut, what remains when the husk is stripped away, and the commentators read ulul-albab accordingly: minds that press past the surface of things to what they actually mean. The description that follows in 3:191 gives these people two habits, joined in a single breath. They remember Allah standing, sitting and lying on their sides, and they reflect on the creation of the heavens and the earth. Dhikr and fikr, remembrance and thought, work as one act.",
          bn: "আরবিতে লুব্ব মানে বাদামের শাঁস — খোসা ছাড়ালে যা থাকে; মুফাসসিরগণ উলুল আলবাব শব্দটিকে সেভাবেই পড়েন: এমন মন, যা জিনিসের উপরিতল পেরিয়ে তার প্রকৃত অর্থে পৌঁছায়। 3:191-এ যে বর্ণনা আসে, তাতে এই মানুষদের দুটি অভ্যাস এক নিঃশ্বাসে জোড়া হয়েছে। তারা দাঁড়িয়ে, বসে ও কাত হয়ে শুয়ে আল্লাহকে স্মরণ করে, আর আসমান-যমীনের সৃষ্টি নিয়ে চিন্তা করে। যিকর ও ফিকর — স্মরণ ও চিন্তা — একটিই কাজ হয়ে চলে।",
        },
        {
          en: "The three postures cover a whole human life. Standing, sitting and lying down leave no state out: work, rest, health, illness, old age. The same three postures appear in 4:103, where believers are told to remember Allah after prayer in exactly these positions. Remembrance, in other words, is not confined to the prayer mat, and reflection is not confined to scholars. Whoever can still look up at the night sky owns the whole laboratory this verse describes.",
          bn: "এই তিন ভঙ্গি একটি মানবজীবনের পুরোটাই ঢেকে দেয়। দাঁড়ানো, বসা ও শোয়া কোনো অবস্থাকেই বাদ রাখে না: কাজ, বিশ্রাম, সুস্থতা, অসুস্থতা, বার্ধক্য। একই তিন ভঙ্গি 4:103-এও এসেছে, যেখানে মুমিনদের বলা হয়েছে নামাযের পর ঠিক এই অবস্থাগুলোতে আল্লাহকে স্মরণ করতে। অর্থাৎ স্মরণ জায়নামাযে সীমাবদ্ধ নয়, আর চিন্তা আলিমদের একচেটিয়া নয়। যে এখনো রাতের আকাশের দিকে তাকাতে পারে, এই আয়াতে বর্ণিত পুরো গবেষণাগারটিই তার।",
        },
      ],
    },
    {
      h: { en: "Thinking That Becomes Prayer", bn: "যে ভাবনা দোয়া হয়ে ওঠে" },
      p: [
        {
          en: "Their reflection does not stop at wonder; it issues in speech. Our Lord, You did not create this batilan — aimlessly, for nothing. The reasoning is compressed but complete: if the heavens are not pointless, then human life is not pointless, and if life is not pointless, it is heading toward a reckoning. So the very next words are a plea: glory be to You, protect us from the punishment of the Fire. Fear here is a conclusion drawn from evidence, not a mood.",
          bn: "তাদের চিন্তা বিস্ময়ে থেমে থাকে না; তা কথায় পরিণত হয়। হে আমাদের রব, আপনি এসব বাতিল — উদ্দেশ্যহীনভাবে, অনর্থক — সৃষ্টি করেননি। যুক্তিটি সংক্ষিপ্ত কিন্তু সম্পূর্ণ: আসমান যদি অর্থহীন না হয়, তবে মানবজীবনও অর্থহীন নয়; আর জীবন অর্থহীন না হলে তা এগোচ্ছে এক হিসাব-নিকাশের দিকে। তাই এর পরের কথাগুলোই একটি আকুতি: আপনি পবিত্র, আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। এখানে ভয় কোনো মেজাজ নয় — প্রমাণ থেকে টানা সিদ্ধান্ত।",
        },
        {
          en: "The prayer keeps going through 3:192-194: shame at the fate of wrongdoers, the confession that they heard a caller calling to faith and answered, the request that Allah grant what He promised through His messengers. And 3:195 records the response — their Lord answers them: I do not let the work of any worker among you be lost, male or female. A meditation that began with eyes on the sky ends with Allah Himself speaking back.",
          bn: "দোয়াটি 3:192-194 জুড়ে চলতে থাকে: জালিমদের পরিণতির লজ্জা, এই স্বীকারোক্তি যে তারা ঈমানের দিকে ডাকা এক আহ্বানকারীকে শুনে সাড়া দিয়েছে, আর এই প্রার্থনা যে আল্লাহ তাঁর রাসূলদের মাধ্যমে যা প্রতিশ্রুতি দিয়েছেন তা যেন দেন। আর 3:195-এ উত্তরটি লিপিবদ্ধ — তাদের রব তাদের ডাকে সাড়া দেন: তোমাদের কোনো আমলকারীর আমল আমি নষ্ট করি না, সে পুরুষ হোক বা নারী। আকাশের দিকে চোখ রেখে শুরু হওয়া ধ্যান শেষ হয় স্বয়ং আল্লাহর প্রত্যুত্তরে।",
        },
      ],
    },
    {
      h: { en: "The Night He Recited It", bn: "যে রাতে তিনি এটি তিলাওয়াত করেন" },
      p: [
        {
          en: "Al-Bukhari relates from Ibn Abbas (RA) that he spent a night in the house of his aunt Maymunah (RA), the wife of the Prophet ﷺ, deliberately watching how the Prophet ﷺ prayed at night. The Prophet ﷺ slept into the night, then woke, wiped the sleep from his face, and recited the closing verses of Surah Al Imran, these among them. Then he made ablution and stood in prayer.",
          bn: "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন: তিনি এক রাত তাঁর খালা, নবী ﷺ-এর স্ত্রী মাইমুনা (রাঃ)-এর ঘরে কাটান — ইচ্ছা করেই দেখার জন্য, নবী ﷺ রাতে কীভাবে নামায পড়েন। নবী ﷺ রাতের কিছু অংশ ঘুমালেন, তারপর জেগে উঠে মুখ থেকে ঘুমের রেশ মুছলেন এবং সূরা আলে ইমরানের শেষ আয়াতগুলো — এগুলোসহ — তিলাওয়াত করলেন। এরপর অযু করে নামাযে দাঁড়ালেন।",
        },
        {
          en: "The placement is instructive. These are verses he ﷺ reached for at the moment between sleep and standing, when the sky is dark and the heart is unguarded. The verse commends those who remember Allah lying on their sides, and here is the Prophet ﷺ doing exactly that, moving from recitation on his bedding to reflection to washing to prayer — the verse's whole sequence of remembrance, thought and worship, enacted before dawn.",
          bn: "এই অবস্থানটিই শিক্ষা। ঘুম আর দাঁড়ানোর মাঝের মুহূর্তে — যখন আকাশ অন্ধকার আর হৃদয় অরক্ষিত — তিনি ﷺ এই আয়াতগুলোর দিকেই হাত বাড়াতেন। আয়াত প্রশংসা করে তাদের, যারা কাত হয়ে শুয়েও আল্লাহকে স্মরণ করে — আর নবী ﷺ ঠিক তা-ই করছেন: বিছানায় তিলাওয়াত থেকে চিন্তা, চিন্তা থেকে অযু, অযু থেকে নামায — আয়াতের পুরো ধারাটি, স্মরণ, ভাবনা ও ইবাদত, ভোরের আগেই বাস্তবায়িত।",
        },
      ],
    },
    {
      h: { en: "Looking as an Act of Worship", bn: "দেখাও যখন ইবাদত" },
      p: [
        {
          en: "What this verse makes possible is a form of worship that requires no book in hand: looking, done properly. 2:164 lists the same materials — heavens, earth, night, day, rain, ships, winds — as signs for a people who use reason, and 41:53 promises that Allah will keep showing His signs in the horizons and in people's own selves. The created world is not scenery behind the religious life. For the people of understanding it is a text, read continually.",
          bn: "এই আয়াত এমন এক ইবাদত সম্ভব করে, যার জন্য হাতে কোনো কিতাব লাগে না: ঠিকভাবে তাকানো। 2:164 একই উপকরণের তালিকা দেয় — আসমান, যমীন, রাত, দিন, বৃষ্টি, জাহাজ, বাতাস — বুদ্ধি ব্যবহারকারী মানুষদের জন্য নিদর্শন হিসেবে; আর 41:53 প্রতিশ্রুতি দেয়, আল্লাহ দিগন্তে এবং মানুষের নিজেদের মধ্যে তাঁর নিদর্শন দেখাতে থাকবেন। সৃষ্টিজগৎ ধর্মীয় জীবনের পেছনের দৃশ্যপট নয়। বোধসম্পন্নদের জন্য এটি একটি পাঠ্য — যা অবিরাম পড়তে হয়।",
        },
        {
          en: "The practice, then, is deliberately small. Actually look at the sky you walk under; let the regularity of night and day register as maintenance, not accident; and when the thought arrives that none of this is aimless, finish the movement the way 3:191 finishes it — with speech to the One who made it, and with the request these people make: our Lord, You did not create this in vain, so protect us from the Fire.",
          bn: "অনুশীলনটি তাই ইচ্ছা করেই ছোট। যে আকাশের নিচে হাঁটছেন, সত্যিই তার দিকে তাকান; রাত-দিনের নিয়মিততাকে দুর্ঘটনা নয়, রক্ষণাবেক্ষণ হিসেবে মনে গেঁথে নিন; আর যখন এই ভাবনা আসে যে এসবের কিছুই উদ্দেশ্যহীন নয়, তখন 3:191 যেভাবে শেষ করে সেভাবেই গতিটি সম্পূর্ণ করুন — যিনি এসব বানিয়েছেন তাঁর সঙ্গে কথা বলে, আর এই মানুষদের প্রার্থনাটি দিয়ে: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি, তাই আমাদের আগুন থেকে রক্ষা করুন।",
        },
      ],
    },
  ],
},
'2:155-157': {
  sections: [
    {
      h: { en: "Testing Announced in Advance", bn: "আগেই ঘোষিত পরীক্ষা" },
      p: [
        {
          en: "The sentence begins with an emphasis translation can barely carry: wa la-nabluwannakum, We will most certainly test you. Nothing here is conditional. The verse was given to the believers of Madinah in the early years, when insecurity, shortage and death in Allah's path were near realities, and it does not promise them exemption. It promises them information: the tests are coming, they are from Him, and they have a stated shape and a stated exit.",
          bn: "বাক্যটি শুরু হয় এমন এক জোর দিয়ে, অনুবাদ যা কোনোমতে বহন করে: ওয়া লানাবলুওয়ান্নাকুম — আমি অবশ্যই অবশ্যই তোমাদের পরীক্ষা করব। এখানে কিছুই শর্তসাপেক্ষ নয়। আয়াতটি মদীনার প্রথম যুগের মুমিনদের দেওয়া হয়েছিল, যখন নিরাপত্তাহীনতা, অভাব আর আল্লাহর পথে মৃত্যু ছিল হাতের কাছের বাস্তবতা — আর এটি তাদের অব্যাহতির প্রতিশ্রুতি দেয় না। দেয় তথ্যের প্রতিশ্রুতি: পরীক্ষা আসছে, তা তাঁরই পক্ষ থেকে, আর তার একটি ঘোষিত রূপ ও ঘোষিত নিষ্ক্রমণপথ আছে।",
        },
        {
          en: "Its neighbours set the frame. 2:153 has just told the believers to seek help through patience and prayer, and 2:154 has forbidden them to call those killed in Allah's path dead. Then comes the testing verse. The order matters: the equipment is issued before the trial is announced. Patience is not improvised in the middle of grief; it is a discipline the surah has already prescribed before naming what it will be needed for.",
          bn: "প্রতিবেশী আয়াতগুলোই কাঠামো তৈরি করে। 2:153 এইমাত্র মুমিনদের বলেছে সবর ও নামাযের মাধ্যমে সাহায্য চাইতে, আর 2:154 নিষেধ করেছে আল্লাহর পথে নিহতদের মৃত বলতে। তারপর আসে পরীক্ষার আয়াত। এই ক্রমটি গুরুত্বপূর্ণ: পরীক্ষা ঘোষণার আগেই সরঞ্জাম বিতরণ করা হয়েছে। সবর শোকের মাঝখানে তাৎক্ষণিক বানানো জিনিস নয়; এটি এমন এক অনুশীলন, যা কীসের জন্য লাগবে তা বলার আগেই সূরা নির্ধারণ করে দিয়েছে।",
        },
      ],
    },
    {
      h: { en: "Something of Fear", bn: "সামান্য কিছু ভয়" },
      p: [
        {
          en: "The wording is merciful in a way easy to miss: bi-shay'in min al-khawf, with something of fear — a portion, not the whole. Commentators such as Ibn Kathir and as-Sa'di pause on this: whatever any believer faces, it is a measured fraction of what could be, sized to capacity. The list then names five doors through which loss enters a life: fear, hunger, loss of wealth, of lives, and of fruits — the harvests and earnings a person laboured over.",
          bn: "শব্দচয়নে এমন এক রহমত আছে যা সহজে চোখ এড়ায়: বি-শাইয়িম মিনাল খাওফ — ভয়ের কিছু অংশ দিয়ে; পুরোটা নয়, একটি ভাগ। ইবনে কাসীর ও আস-সা'দীর মতো মুফাসসিরগণ এখানে থামেন: কোনো মুমিন যা-ই মোকাবিলা করুক, তা যা হতে পারত তার একটি মাপা ভগ্নাংশ — সামর্থ্য অনুযায়ী মাপা। এরপর তালিকায় আসে জীবনে ক্ষতি ঢোকার পাঁচটি দরজা: ভয়, ক্ষুধা, সম্পদের ক্ষতি, প্রাণের ক্ষতি, আর ফল-ফসলের ক্ষতি — মানুষ যে ফসল ও উপার্জনের জন্য পরিশ্রম করেছে।",
        },
        {
          en: "At the end of the announcement stands a surprising word: wa bashshir as-sabirin, and give good news to the patient. Bushra is the vocabulary of victory and glad tidings, and here it is fastened to a list of losses. The verse is teaching a redefinition. For the patient, the trial is not only subtraction; it is the very ground on which the three gifts of 2:157 will be given, and so news of it can honestly be called good.",
          bn: "ঘোষণার শেষে দাঁড়িয়ে আছে এক বিস্ময়কর শব্দ: ওয়া বাশশিরিস সাবিরীন — আর ধৈর্যশীলদের সুসংবাদ দাও। বুশরা হলো বিজয় ও খুশখবরের শব্দভান্ডার, অথচ এখানে তা জোড়া হয়েছে ক্ষতির এক তালিকার সঙ্গে। আয়াতটি একটি নতুন সংজ্ঞা শেখাচ্ছে। ধৈর্যশীলের কাছে পরীক্ষা কেবল বিয়োগ নয়; এটিই সেই জমি, যার ওপর 2:157-এর তিনটি উপহার দেওয়া হবে — তাই এর খবরকে সত্যিই সুসংবাদ বলা চলে।",
        },
      ],
    },
    {
      h: { en: "What the Patient Say", bn: "ধৈর্যশীলরা যা বলে" },
      p: [
        {
          en: "2:156 defines the patient not by feeling less but by saying something true when struck: inna lillahi wa inna ilayhi raji'un — we belong to Allah, and to Him we return. The sentence contains two facts. We are His property, so what He reclaims was always His; and we are travelling toward Him, so no loss is final that ends where He is. Grief re-described this way still hurts, but it stops accusing.",
          bn: "2:156 ধৈর্যশীলদের সংজ্ঞা দেয় কম কষ্ট অনুভব করা দিয়ে নয়, বরং আঘাতের মুহূর্তে একটি সত্য কথা বলা দিয়ে: ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন — আমরা আল্লাহরই, আর তাঁরই দিকে ফিরে যাব। বাক্যটিতে দুটি সত্য আছে। আমরা তাঁর সম্পত্তি, তাই তিনি যা ফিরিয়ে নেন তা বরাবরই তাঁর ছিল; আর আমরা তাঁরই দিকে চলেছি, তাই যে ক্ষতির শেষ তাঁর কাছে, তা চূড়ান্ত নয়। এভাবে নতুন করে বর্ণিত শোক তবু ব্যথা দেয়, কিন্তু অভিযোগ করা থামিয়ে দেয়।",
        },
        {
          en: "The verse says idha asabat-hum musibah — when affliction strikes them, not some time afterwards. The Prophet ﷺ said, in the agreed-upon hadith, that patience is only at the first blow. The istirja is therefore meant to be ready before it is needed, kept close like a document one must produce at a checkpoint. Those who must first argue with the decree before accepting it have accepted something, but not quite what this verse describes.",
          bn: "আয়াত বলে: ইযা আসাবাতহুম মুসীবাহ — যখন বিপদ তাদের আঘাত করে; পরে কোনো এক সময়ে নয়। নবী ﷺ বুখারী-মুসলিমে একমত হাদীসে বলেছেন, সবর তো প্রথম আঘাতের সময়েই। তাই ইস্তিরজার বাক্যটি দরকারের আগেই প্রস্তুত রাখার জিনিস — চেকপোস্টে দেখাতে হয় এমন কাগজের মতো কাছে রাখা। যারা তাকদীর মেনে নেওয়ার আগে তার সঙ্গে তর্ক সেরে নেন, তারা কিছু একটা মেনেছেন ঠিকই — কিন্তু এই আয়াত যা বর্ণনা করে, ঠিক তা নয়।",
        },
      ],
    },
    {
      h: { en: "Umm Salamah's Exchange", bn: "উম্মে সালামার বিনিময়" },
      p: [
        {
          en: "Muslim relates from Umm Salamah (RA) that the Prophet ﷺ taught: no servant is struck by an affliction and says — inna lillahi wa inna ilayhi raji'un; O Allah, reward me in my affliction and give me better in its place — except that Allah rewards him and gives him better. When her husband Abu Salamah (RA) died, she said the words, while wondering who could possibly be better than him.",
          bn: "ইমাম মুসলিম উম্মে সালামা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ শিখিয়েছেন: কোনো বান্দা বিপদে পড়ে যদি বলে — ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন; হে আল্লাহ, আমার বিপদে আমাকে প্রতিদান দিন এবং এর বদলে উত্তম কিছু দিন — আল্লাহ তাকে প্রতিদান দেন এবং উত্তম বদল দেন। স্বামী আবু সালামা (রাঃ)-এর মৃত্যুর পর তিনি কথাগুলো বললেন — মনে মনে ভাবতে ভাবতে, আবু সালামার চেয়ে উত্তম আর কে হতে পারে।",
        },
        {
          en: "Then the Prophet ﷺ himself sent for her in marriage, and she would later tell the story as its own proof: Allah gave her better than Abu Salamah. The narration turns the verse from doctrine into biography. The promise attached to patience is not deferred entirely to the next life; sometimes the replacement arrives in this one, and arrives in a form the mourner could not have had the imagination to request.",
          bn: "এরপর স্বয়ং নবী ﷺ তাঁকে বিয়ের প্রস্তাব পাঠালেন, আর পরে তিনি ঘটনাটিকে তার নিজেরই প্রমাণ হিসেবে বলতেন: আল্লাহ তাঁকে আবু সালামার চেয়ে উত্তম দিয়েছেন। এই বর্ণনা আয়াতটিকে মতবাদ থেকে জীবনী বানিয়ে দেয়। সবরের সঙ্গে বাঁধা প্রতিশ্রুতি পুরোপুরি পরকালের জন্য স্থগিত নয়; কখনো কখনো বদলটি এই জীবনেই আসে — আর এমন রূপে আসে, যা চাওয়ার কল্পনাও শোকার্ত মানুষটির ছিল না।",
        },
      ],
    },
    {
      h: { en: "Salawat, Mercy, Guidance", bn: "সালাওয়াত, রহমত, হিদায়াত" },
      p: [
        {
          en: "2:157 names what descends on such people: salawat from their Lord, and mercy, and the declaration that they are the guided. That Allah should send salawat — His praise and commendation — upon a grieving servant is an extraordinary honour, and the commentators note that patience is here itself called guidance: it is those people, the verse says, who are the muhtadun. Losing rightly turns out to be one of the ways of being found.",
          bn: "2:157 বলে দেয় এমন মানুষদের ওপর কী নেমে আসে: তাদের রবের পক্ষ থেকে সালাওয়াত, রহমত, আর এই ঘোষণা যে তারাই হিদায়াতপ্রাপ্ত। শোকার্ত এক বান্দার ওপর আল্লাহ সালাওয়াত — তাঁর প্রশংসা ও স্বীকৃতি — পাঠাবেন, এ এক অসাধারণ সম্মান; আর মুফাসসিরগণ লক্ষ করেন, এখানে সবরকেই হিদায়াত বলা হয়েছে: আয়াত বলে, তারাই মুহতাদুন। দেখা যাচ্ছে, ঠিকভাবে হারাতে জানা আসলে পথ খুঁজে পাওয়ারই একটি উপায়।",
        },
        {
          en: "Other verses complete the picture. 39:10 promises the patient their reward without measure, the only deed given that open-ended wage, and 64:11, revealed about calamity, says that whoever believes in Allah, He guides his heart. The lived practice is unglamorous: learn the words now, say them at the first blow, ask for the replacement, and let the ownership statement do its slow work on the accusation grief wants to make.",
          bn: "অন্য আয়াতগুলো ছবিটি সম্পূর্ণ করে। 39:10 ধৈর্যশীলদের বেহিসাব প্রতিদানের প্রতিশ্রুতি দেয় — একমাত্র আমল যাকে এমন সীমাহীন মজুরি দেওয়া হয়েছে; আর বিপদ প্রসঙ্গে নাযিল হওয়া 64:11 বলে, যে আল্লাহর ওপর ঈমান আনে, তিনি তার হৃদয়কে পথ দেখান। বাস্তব অনুশীলনটি একেবারেই সাদামাটা: কথাগুলো এখনই শিখে নিন, প্রথম আঘাতেই বলুন, বদল চেয়ে নিন — আর মালিকানার ঘোষণাটিকে সুযোগ দিন, শোক যে অভিযোগ তুলতে চায় তার ওপর ধীরে ধীরে কাজ করার।",
        },
      ],
    },
  ],
},
'2:183': {
  sections: [
    {
      h: { en: "Written, As It Was Written", bn: "লেখা হলো, যেমন লেখা হয়েছিল" },
      p: [
        {
          en: "The verse uses the vocabulary of decree: kutiba alaykumus-siyam, fasting has been written upon you. In this same stretch of Surah al-Baqarah the identical verb prescribes just retribution in 2:178 and the bequest in 2:180. Fasting arrives with that weight — not a recommendation for the devout, but legislation for the whole community, addressed as you who believe. It was made obligatory in Madinah, in the second year after the hijrah.",
          bn: "আয়াতটি ফরমানের ভাষা ব্যবহার করে: কুতিবা আলাইকুমুস সিয়াম — তোমাদের ওপর রোযা লিখে দেওয়া হয়েছে। সূরা আল-বাকারার এই একই অংশে একই ক্রিয়াপদ 2:178-এ কিসাস এবং 2:180-এ অসিয়ত ফরয করেছে। রোযা সেই ওজন নিয়েই আসে — ধার্মিকদের জন্য পরামর্শ নয়, বরং গোটা সম্প্রদায়ের জন্য বিধান, যাদের সম্বোধন করা হয়েছে 'হে ঈমানদারগণ' বলে। এটি ফরয হয়েছিল মদীনায়, হিজরতের দ্বিতীয় বছরে।",
        },
        {
          en: "Then comes a clause that changes the mood of the command: kama kutiba alal-ladhina min qablikum, as it was written upon those before you. Communities before this ummah were also given fasting in some form; the Quran does not detail their forms, and the differing reports the commentators relate about them settle nothing. The point of the comparison is companionship in discipline: restraining the self for Allah's sake is not an innovation but an old, shared road.",
          bn: "এরপর আসে এমন এক বাক্যাংশ, যা আদেশের আবহ বদলে দেয়: কামা কুতিবা আলাল্লাযীনা মিন কাবলিকুম — যেমন লেখা হয়েছিল তোমাদের আগের লোকদের ওপর। এই উম্মতের আগের সম্প্রদায়গুলোকেও কোনো না কোনো রূপে রোযা দেওয়া হয়েছিল; কুরআন তাদের রূপগুলোর বিস্তারিত দেয়নি, আর মুফাসসিরগণ যে বিবরণগুলো এনেছেন সেগুলোও পরস্পর ভিন্ন — কোনোটিই চূড়ান্ত নয়। তুলনাটির মূল কথা হলো অনুশীলনে সঙ্গ: আল্লাহর জন্য নিজেকে সংযত করা কোনো নতুন উদ্ভাবন নয় — এক পুরোনো, ভাগাভাগি করা পথ।",
        },
      ],
    },
    {
      h: { en: "The Purpose Clause", bn: "উদ্দেশ্যের বাক্যাংশ" },
      p: [
        {
          en: "The verse ends by telling us what fasting is for: la'allakum tattaqun, that you may attain taqwa. Taqwa is guarding — placing something between yourself and what harms you. The training logic is plain. A person who can refuse permitted food, drink and marital relations from dawn to sunset, for no reason except that Allah said so, is building exactly the muscle needed to refuse what Allah forbade in the other eleven months.",
          bn: "আয়াত শেষ হয় রোযার উদ্দেশ্য জানিয়ে: লাআল্লাকুম তাত্তাকুন — যেন তোমরা তাকওয়া অর্জন করো। তাকওয়া মানে সুরক্ষা — নিজের ও ক্ষতিকর জিনিসের মাঝে কিছু একটা রাখা। প্রশিক্ষণের যুক্তিটি সরল। যে মানুষ ভোর থেকে সূর্যাস্ত পর্যন্ত হালাল খাবার, পানীয় ও দাম্পত্য সম্পর্ক ফিরিয়ে দিতে পারে — কেবল আল্লাহ বলেছেন বলে — সে ঠিক সেই পেশিই গড়ছে, যা বাকি এগারো মাসে আল্লাহর নিষিদ্ধ জিনিস ফিরিয়ে দিতে লাগবে।",
        },
        {
          en: "The commentators add a second mechanism: fasting narrows the routes of appetite. Hunger quietens the demands of the self, and with them much of what leads to sin. So the fast is aimed at the interior; the empty stomach is the instrument, not the achievement. A fast measured only in hours endured has been read at the level of the husk. The verse itself states the target, and the target is taqwa.",
          bn: "মুফাসসিরগণ দ্বিতীয় একটি প্রক্রিয়ার কথা যোগ করেন: রোযা প্রবৃত্তির পথগুলো সংকীর্ণ করে দেয়। ক্ষুধা নফসের দাবিগুলোকে শান্ত করে, আর সেই সঙ্গে গুনাহের দিকে টানে এমন অনেক কিছুকেও। তাই রোযার নিশানা অন্তর; খালি পেট হলো যন্ত্র, অর্জন নয়। যে রোযা কেবল সহ্য করা ঘণ্টা দিয়ে মাপা হয়, তা খোসার স্তরেই পড়া হয়েছে। আয়াত নিজেই লক্ষ্য বলে দিয়েছে — লক্ষ্য তাকওয়া।",
        },
      ],
    },
    {
      h: { en: "From Numbered Days to the Month", bn: "গোনা কয়েক দিন থেকে পুরো মাস" },
      p: [
        {
          en: "The legislation unfolds across the passage. 2:184 speaks of numbered days and records concessions; 2:185 then names the month and gives the reason for its choice: Ramadan, in which the Quran was sent down as guidance for mankind. The month of fasting is the month of revelation — the discipline of the body is tied to the arrival of the Book, as if an emptier vessel were being prepared to carry it.",
          bn: "বিধানটি ধাপে ধাপে খোলে। 2:184 বলে গোনা কয়েকটি দিনের কথা এবং ছাড়ের বিধান লিপিবদ্ধ করে; এরপর 2:185 মাসটির নাম নেয় এবং তা বেছে নেওয়ার কারণ জানায়: রমযান, যাতে মানবজাতির হিদায়াত হিসেবে কুরআন নাযিল হয়েছে। রোযার মাসই ওহীর মাস — দেহের সংযমকে বাঁধা হয়েছে কিতাব আগমনের সঙ্গে, যেন একটি অপেক্ষাকৃত খালি পাত্রকে তা বহনের জন্য প্রস্তুত করা হচ্ছে।",
        },
        {
          en: "The same verse insists twice on gentleness: whoever is ill or travelling may make up the days later, for Allah intends ease for you, and does not intend hardship for you. The command that trains restraint is itself restrained. Any presentation of fasting as competitive severity has left the text; the Lawgiver built the exemptions into the founding verses themselves, in the same breath as the obligation.",
          bn: "একই আয়াত দু'বার কোমলতার ওপর জোর দেয়: যে অসুস্থ বা সফরে আছে, সে পরে দিনগুলো পূরণ করবে — কারণ আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না। যে আদেশ সংযম শেখায়, সেই আদেশ নিজেই সংযত। রোযাকে প্রতিযোগিতামূলক কঠোরতা হিসেবে দেখানো মানেই মূল পাঠ থেকে সরে যাওয়া; বিধানদাতা ছাড়গুলো ভিত্তি-আয়াতের ভেতরেই রেখেছেন — ফরয করার সেই একই নিঃশ্বাসে।",
        },
      ],
    },
    {
      h: { en: "The Verse in the Middle", bn: "মাঝখানে বসানো আয়াতটি" },
      p: [
        {
          en: "Between the fasting legislation of 2:183-185 and the night regulations of 2:187 sits 2:186: when My servants ask you about Me, I am near; I answer the call of the caller when he calls. Commentators have long noticed the placement, and also what is missing from the verse: the usual instruction say does not appear between Allah and the asker. In the middle of hunger and rules stands the most intimate sentence of nearness in the surah.",
          bn: "2:183-185-এর রোযার বিধান আর 2:187-এর রাতের নিয়মকানুনের মাঝখানে বসে আছে 2:186: আমার বান্দারা যখন আমার সম্পর্কে তোমাকে জিজ্ঞেস করে — আমি তো নিকটেই; আহ্বানকারী যখন ডাকে, আমি তার ডাকে সাড়া দিই। মুফাসসিরগণ বহুকাল ধরে এই অবস্থানটি লক্ষ করেছেন, আর লক্ষ করেছেন আয়াতে কী নেই: আল্লাহ ও প্রশ্নকারীর মাঝে প্রচলিত 'বলো' নির্দেশটিই এখানে অনুপস্থিত। ক্ষুধা আর নিয়মের মাঝখানে দাঁড়িয়ে আছে সূরার সবচেয়ে অন্তরঙ্গ নৈকট্যের বাক্য।",
        },
        {
          en: "The arrangement teaches what the month is for. Fasting empties; du'a fills. A person weakened by the day's abstention is, precisely then, addressed by I am near. Whoever keeps Ramadan as a diet with rituals has missed the door the text itself placed mid-passage: the fasting person is being positioned, day after day, as a caller whom Allah has announced in advance that He answers.",
          bn: "এই বিন্যাসই শেখায় মাসটি কীসের জন্য। রোযা খালি করে; দোয়া পূর্ণ করে। দিনের সংযমে দুর্বল হয়ে পড়া মানুষটিকে ঠিক তখনই সম্বোধন করা হয়: আমি তো নিকটেই। যে রমযানকে কিছু আচারসহ ডায়েট বানিয়ে রাখে, সে মূল পাঠের মাঝখানে বসানো দরজাটিই হারিয়েছে: রোযাদারকে দিনের পর দিন এমন এক আহ্বানকারীর জায়গায় দাঁড় করানো হচ্ছে, যার ডাকে সাড়া দেওয়ার কথা আল্লাহ আগেই ঘোষণা করে রেখেছেন।",
        },
      ],
    },
    {
      h: { en: "A Fast That Changes Conduct", bn: "যে রোযা আচরণ বদলায়" },
      p: [
        {
          en: "The Prophet ﷺ tied the fast to behaviour in words al-Bukhari preserves: whoever does not give up false speech and acting upon it, Allah has no need of his giving up his food and his drink. And in the agreed-upon hadith, fasting is a shield, and the fasting person is told not to answer abuse in kind but to say: I am fasting. The fast extends from the stomach to the tongue and the temper.",
          bn: "নবী ﷺ রোযাকে আচরণের সঙ্গে বেঁধেছেন এমন কথায়, যা ইমাম বুখারী সংরক্ষণ করেছেন: যে মিথ্যা কথা ও সে অনুযায়ী আমল ছাড়ল না, তার খাবার ও পানীয় ছাড়ায় আল্লাহর কোনো প্রয়োজন নেই। আর বুখারী-মুসলিমে একমত হাদীসে রোযা এক ঢাল, এবং রোযাদারকে বলা হয়েছে গালাগালির জবাব একইভাবে না দিয়ে বলতে: আমি রোযাদার। রোযা পেট থেকে বিস্তৃত হয় জিভ ও মেজাজ পর্যন্ত।",
        },
        {
          en: "So the honest yearly measure is the one the verse itself installs: la'allakum tattaqun. Did the month leave more guarding behind — over speech, over earnings, over the eyes — than it found? The verse's opening comfort still stands: believers before us walked this same road, and it was written for them as it was written for us, because the goal at its end, taqwa, has never changed.",
          bn: "তাই বছরের সৎ মাপকাঠি সেটিই, যা আয়াত নিজে বসিয়ে দিয়েছে: লাআল্লাকুম তাত্তাকুন। মাসটি কি যাওয়ার সময় আগের চেয়ে বেশি সুরক্ষা রেখে গেল — কথায়, উপার্জনে, দৃষ্টিতে? আয়াতের শুরুর সান্ত্বনাটি এখনো দাঁড়িয়ে: আমাদের আগের মুমিনরাও এই একই পথে হেঁটেছেন, তাদের ওপরও লেখা হয়েছিল যেমন আমাদের ওপর লেখা হয়েছে — কারণ পথের শেষের লক্ষ্যটি, তাকওয়া, কখনো বদলায়নি।",
        },
      ],
    },
  ],
},
'16:90': {
  sections: [
    {
      h: { en: "Six Directions in One Sentence", bn: "এক বাক্যে ছয় দিক" },
      p: [
        {
          en: "The verse is built with an architecture you can hold in one hand: three commands, three prohibitions. Allah commands justice, ihsan, and giving to relatives; He forbids fahsha, munkar, and baghy. Then it closes by naming its own genre: ya'izukum la'allakum tadhakkarun — He admonishes you that you may be reminded. Not new information, the ending implies, but a reminder of what sound human nature already recognises and what daily life steadily wears away.",
          bn: "আয়াতটির গঠন এমন, যা এক হাতে ধরা যায়: তিনটি আদেশ, তিনটি নিষেধ। আল্লাহ আদেশ করেন ইনসাফ, ইহসান ও আত্মীয়দের দেওয়ার; নিষেধ করেন ফাহশা, মুনকার ও বাগীর। তারপর নিজের ধরনটি বলে দিয়ে শেষ হয়: ইয়াইযুকুম লাআল্লাকুম তাযাক্কারুন — তিনি তোমাদের উপদেশ দেন, যেন তোমরা স্মরণ করো। শেষাংশের ইঙ্গিত: এ নতুন তথ্য নয়, বরং তার স্মরণ, যা সুস্থ মানবপ্রকৃতি আগে থেকেই চেনে আর দৈনন্দিন জীবন ক্রমাগত ক্ষইয়ে ফেলে।",
        },
        {
          en: "Abdullah ibn Mas'ud (RA) called this the most comprehensive verse in the Quran for good and for evil. His judgement has been ratified by centuries of practice: across the Muslim world this verse is recited at the close of the Friday khutbah, so that whole congregations hear the whole of public and private morality, compressed to a sentence, week after week. Familiarity is the risk; the verse deserves to be heard slowly.",
          bn: "আবদুল্লাহ ইবনে মাসউদ (রাঃ) একে বলেছেন ভালো ও মন্দ বিষয়ে কুরআনের সবচেয়ে ব্যাপক আয়াত। শতাব্দীর পর শতাব্দীর আমল তাঁর এই রায়কে সিলমোহর দিয়েছে: গোটা মুসলিম বিশ্বে জুমার খুতবার শেষে এই আয়াতটি পড়া হয়, ফলে পুরো জামাত সপ্তাহের পর সপ্তাহ শোনে প্রকাশ্য ও ব্যক্তিগত নৈতিকতার সবটুকু — এক বাক্যে সংকুচিত। ঝুঁকিটা হলো অতিপরিচিতি; আয়াতটি ধীরে শোনার দাবি রাখে।",
        },
      ],
    },
    {
      h: { en: "Justice, Then More Than Justice", bn: "ইনসাফ, তারপর তারও বেশি" },
      p: [
        {
          en: "Adl is giving each party its due — in judgement, weight, speech and dealing. It is the floor beneath society, and other verses guard it fiercely: 4:58 commands judging between people with justice, and 4:135 demands it even against oneself. But the verse does not stop at the floor. It commands ihsan as well: excellence, doing more than is owed — forgiving where retaliation was allowed, giving where withholding was lawful, adding beauty where correctness would have sufficed.",
          bn: "আদল মানে প্রত্যেক পক্ষকে তার প্রাপ্য দেওয়া — বিচারে, ওজনে, কথায় ও লেনদেনে। এটি সমাজের নিচের মেঝে, আর অন্য আয়াতগুলো একে কঠোরভাবে পাহারা দেয়: 4:58 মানুষের মধ্যে ইনসাফের সঙ্গে বিচার করতে আদেশ করে, আর 4:135 তা দাবি করে এমনকি নিজের বিরুদ্ধেও। কিন্তু আয়াতটি মেঝেতে থামে না। সে ইহসানেরও আদেশ দেয়: উৎকর্ষ, প্রাপ্যের চেয়ে বেশি করা — প্রতিশোধ বৈধ হলেও ক্ষমা করা, না দেওয়া বৈধ হলেও দেওয়া, শুদ্ধতাই যথেষ্ট হতো সেখানে সৌন্দর্য যোগ করা।",
        },
        {
          en: "Then, from inside the wide field of ihsan, one duty is pulled out and named: giving to relatives. The commentators note the logic of the emphasis. Kin are the people easiest to wrong and hardest to escape; rights against us concentrate there, and so does our capacity for coldness. A person can be publicly generous and privately estranged; the verse blocks that arrangement by naming the relatives explicitly.",
          bn: "এরপর ইহসানের বিস্তৃত ময়দানের ভেতর থেকে একটি দায়িত্বকে টেনে বের করে নাম ধরে বলা হয়: আত্মীয়দের দেওয়া। মুফাসসিরগণ এই জোরের যুক্তিটি লক্ষ করেন। আত্মীয়রাই সেই মানুষ, যাদের প্রতি অন্যায় করা সবচেয়ে সহজ আর যাদের এড়ানো সবচেয়ে কঠিন; আমাদের ওপর হকও সেখানে জমা হয়, আমাদের শীতলতার ক্ষমতাও। মানুষ প্রকাশ্যে দানশীল হয়েও ঘরের ভেতরে বিচ্ছিন্ন থাকতে পারে; আয়াত আত্মীয়দের স্পষ্ট নাম নিয়ে সেই বন্দোবস্তটি আটকে দেয়।",
        },
      ],
    },
    {
      h: { en: "The Three Prohibitions", bn: "তিনটি নিষেধ" },
      p: [
        {
          en: "The forbidden triad also climbs. Fahsha is the shameless — conduct whose ugliness is felt before it is argued, with unlawful sexuality at its centre. Munkar is wider: whatever revealed law and sound nature together reject, done openly. Baghy is aggression — overstepping against people, their blood, property or honour, including the arrogance of oppression. Commentators observe that the list moves outward: from private corruption, to public wrong, to harm that lands directly on others.",
          bn: "নিষিদ্ধ ত্রয়ীও ধাপে ধাপে ওঠে। ফাহশা হলো নির্লজ্জতা — এমন আচরণ, যার কদর্যতা যুক্তির আগেই অনুভূত হয়; এর কেন্দ্রে অবৈধ যৌনতা। মুনকার আরও বিস্তৃত: প্রকাশ্যে করা এমন সবকিছু, যা ওহীর বিধান ও সুস্থ প্রকৃতি একসঙ্গে প্রত্যাখ্যান করে। বাগী হলো আগ্রাসন — মানুষের ওপর, তাদের রক্ত, সম্পদ বা সম্মানের ওপর সীমালঙ্ঘন, জুলুমের অহংকারসহ। মুফাসসিরগণ লক্ষ করেন, তালিকাটি ভেতর থেকে বাইরে এগোয়: ব্যক্তিগত কলুষতা থেকে প্রকাশ্য অন্যায়ে, সেখান থেকে সরাসরি অন্যের ওপর পড়া ক্ষতিতে।",
        },
        {
          en: "Setting the two triads side by side shows the method of the religion. It does not only prohibit; each vice faces a commanded opposite. Justice starves baghy, since oppression is exactly the refusal of others' due. Ihsan crowds out munkar, because a life occupied with doing more good than required has little room left for open wrong. And giving to relatives strengthens the near circle in which character is actually formed.",
          bn: "দুই ত্রয়ীকে পাশাপাশি রাখলে দ্বীনের পদ্ধতিটি দেখা যায়। সে কেবল নিষেধ করে না; প্রতিটি মন্দের মুখোমুখি রাখা হয়েছে একটি আদিষ্ট বিপরীতকে। ইনসাফ বাগীকে না খাইয়ে মারে, কারণ জুলুম তো অন্যের প্রাপ্য অস্বীকারেরই নাম। ইহসান মুনকারকে জায়গাছাড়া করে, কারণ প্রয়োজনের চেয়ে বেশি ভালো কাজে ব্যস্ত জীবনে প্রকাশ্য অন্যায়ের জায়গা কমই থাকে। আর আত্মীয়দের দেওয়া মজবুত করে সেই নিকট বৃত্তকে, যেখানে চরিত্র আসলে গড়ে ওঠে।",
        },
      ],
    },
    {
      h: { en: "The Verse in Its Surah", bn: "সূরার ভেতরে আয়াতটি" },
      p: [
        {
          en: "Surah an-Nahl has spent its length listing benefactions — rain, cattle, honey, the sea — and asking who could have given them. By 16:90 the argument turns from what Allah gives to what He asks. The very next verse, 16:91, commands keeping covenants once made, extending the same integrity from conduct to promises. Gratitude for the gifts and obedience in the commands are presented as one continuous response to the same Giver.",
          bn: "সূরা আন-নাহল তার দৈর্ঘ্য জুড়ে নিয়ামতের তালিকা করেছে — বৃষ্টি, গবাদি পশু, মধু, সমুদ্র — আর প্রশ্ন করেছে, এসব কে দিতে পারত। 16:90-এ এসে যুক্তিটি ঘুরে যায় — আল্লাহ কী দেন থেকে তিনি কী চান-এ। ঠিক পরের আয়াত 16:91 আদেশ করে কৃত অঙ্গীকার রক্ষা করতে — একই সততাকে আচরণ থেকে প্রতিশ্রুতিতে প্রসারিত করে। নিয়ামতের কৃতজ্ঞতা আর আদেশের আনুগত্য — দুটিকে উপস্থাপন করা হয়েছে একই দাতার প্রতি এক অবিচ্ছিন্ন সাড়া হিসেবে।",
        },
        {
          en: "The pairing with 5:8 is also worth carrying: there, believers are told not to let hatred of a people push them away from justice. Between them the two verses seal both exits. 16:90 commands justice as a standing order; 5:8 blocks the loophole of the enemy, as 4:135 blocks the loophole of the self and the family. There is no one left, friend or foe, toward whom injustice remains an option.",
          bn: "5:8-এর সঙ্গে জোড়টিও সঙ্গে রাখার মতো: সেখানে মুমিনদের বলা হয়েছে, কোনো জাতির প্রতি বিদ্বেষ যেন তাদের ইনসাফ থেকে সরিয়ে না দেয়। এই দুই আয়াত মিলে দুটো পালানোর পথই বন্ধ করে। 16:90 ইনসাফকে স্থায়ী আদেশ বানায়; 5:8 শত্রুর ফাঁকটি বন্ধ করে, যেমন 4:135 বন্ধ করে নিজের ও পরিবারের ফাঁক। বন্ধু হোক বা শত্রু — এমন কেউ বাকি থাকে না, যার প্রতি অবিচার আর কোনো বিকল্প হিসেবে টেকে।",
        },
      ],
    },
    {
      h: { en: "Living Inside the Verse", bn: "আয়াতটির ভেতরে বসবাস" },
      p: [
        {
          en: "Because the verse is a compass, its use is directional: locate yourself on it. Of the three commands — justice, excellence, giving to kin — one is usually the neglected one for a given person in a given season; of the three prohibitions, one is usually the live temptation. The verse rewards that specific self-audit far more than it rewards admiration. Hearing it weekly was meant to produce exactly this repeated, uncomfortable, useful check.",
          bn: "আয়াতটি যেহেতু একটি কম্পাস, এর ব্যবহারও দিকনির্ণয়ের: নিজেকে এর ওপর খুঁজে বের করুন। তিন আদেশের মধ্যে — ইনসাফ, উৎকর্ষ, আত্মীয়দের দেওয়া — নির্দিষ্ট মানুষের নির্দিষ্ট মৌসুমে সাধারণত একটি থাকে অবহেলিত; তিন নিষেধের মধ্যে একটি থাকে জীবন্ত প্রলোভন। মুগ্ধতার চেয়ে এই সুনির্দিষ্ট আত্মপরীক্ষাকেই আয়াত অনেক বেশি প্রতিদান দেয়। সাপ্তাহিক শোনার উদ্দেশ্যই ছিল ঠিক এই বারবার করা, অস্বস্তিকর, কাজের যাচাই।",
        },
        {
          en: "And the closing word sets the tone for how to hold it: ya'izukum, He admonishes you — the address of a counsellor who wants good for the one addressed, not a prosecutor building a case. The verse asks to be remembered, la'allakum tadhakkarun, because everything in it was already written into sound nature. Obedience here has the feel of coming back to something, not of being conscripted into something.",
          bn: "আর শেষ শব্দটি ঠিক করে দেয় একে কীভাবে ধরতে হবে: ইয়াইযুকুম — তিনি তোমাদের উপদেশ দেন; এ এমন উপদেষ্টার সম্বোধন, যিনি শ্রোতার কল্যাণ চান — মামলা সাজানো কৌঁসুলির নয়। আয়াত চায় তাকে স্মরণ করা হোক — লাআল্লাকুম তাযাক্কারুন — কারণ এর সবকিছু সুস্থ প্রকৃতিতে আগে থেকেই লেখা ছিল। এখানে আনুগত্যের অনুভূতি কোনো কিছুতে জোর করে ভর্তি হওয়ার নয় — কোনো কিছুর কাছে ফিরে আসার।",
        },
      ],
    },
  ],
},
'4:135': {
  sections: [
    {
      h: { en: "Standing Firm, for Allah", bn: "আল্লাহর জন্য অটল দাঁড়ানো" },
      p: [
        {
          en: "The verse does not ask believers to be occasionally fair. Kunu qawwamina bil-qist uses an intensive form: be ones who stand up for justice constantly, as a posture, not an episode. And it fixes the direction of the testimony: shuhada'a lillah, witnesses for Allah. Testimony in this verse is an act of worship before it is a legal procedure. The witness answers to Allah for what he says, not to the party who benefits from it.",
          bn: "আয়াতটি মুমিনদের মাঝে মাঝে ন্যায়পরায়ণ হতে বলে না। কুনু কাওয়ামীনা বিল-কিসত একটি জোরালো রূপ ব্যবহার করে: ইনসাফের জন্য সর্বদা দাঁড়িয়ে থাকা মানুষ হও — এ এক ভঙ্গি, কোনো বিচ্ছিন্ন ঘটনা নয়। আর সে সাক্ষ্যের অভিমুখও ঠিক করে দেয়: শুহাদাআ লিল্লাহ — আল্লাহর জন্য সাক্ষী। এই আয়াতে সাক্ষ্য আইনি প্রক্রিয়া হওয়ার আগে একটি ইবাদত। সাক্ষী তার কথার জবাব দেবে আল্লাহর কাছে — যে পক্ষ তাতে লাভবান হয় তার কাছে নয়।",
        },
        {
          en: "Then the verse names its price immediately: even against yourselves, or parents and near relatives. The order runs through the three strongest loyalties a person has, hardest first. Testifying against oneself means confessing, admitting liability, correcting one's own record when no one could have forced it. A religion that begins its justice at the speaker's own expense has located the problem accurately: the first court that corrupts testimony sits inside the witness.",
          bn: "এরপর আয়াত সঙ্গে সঙ্গে এর মূল্যটি বলে দেয়: এমনকি নিজেদের বিরুদ্ধে হলেও, কিংবা মাতা-পিতা ও নিকটাত্মীয়ের বিরুদ্ধে। ক্রমটি মানুষের তিনটি সবচেয়ে শক্ত আনুগত্যের ভেতর দিয়ে যায় — সবচেয়ে কঠিনটি আগে। নিজের বিরুদ্ধে সাক্ষ্য মানে স্বীকারোক্তি, দায় মেনে নেওয়া, কেউ বাধ্য করতে পারত না এমন মুহূর্তে নিজের হিসাব শুধরে নেওয়া। যে দ্বীন তার ইনসাফ শুরু করে বক্তার নিজের লোকসান দিয়ে, সে সমস্যাটিকে নির্ভুল জায়গায় শনাক্ত করেছে: সাক্ষ্যকে যে আদালত প্রথম দূষিত করে, তা বসে সাক্ষীর নিজের ভেতরে।",
        },
      ],
    },
    {
      h: { en: "The Rich and the Poor", bn: "ধনী ও দরিদ্র" },
      p: [
        {
          en: "Whether the person concerned is rich or poor, the verse says, Allah is closer to both. Two opposite temptations are being closed at once. Before the rich party stands the fear of power and the hope of favour; before the poor party stands sentiment, the urge to bend the finding out of pity. Both are forms of the same corruption — deciding the testimony by looking at the parties instead of at the truth.",
          bn: "সংশ্লিষ্ট ব্যক্তি ধনী হোক বা দরিদ্র — আয়াত বলে, আল্লাহ উভয়েরই অধিকতর নিকটবর্তী। এক ধাক্কায় দুটি বিপরীত প্রলোভন বন্ধ করা হচ্ছে। ধনী পক্ষের সামনে থাকে ক্ষমতার ভয় আর অনুগ্রহের আশা; দরিদ্র পক্ষের সামনে থাকে আবেগ — করুণার বশে সিদ্ধান্ত বাঁকিয়ে দেওয়ার তাড়না। দুটিই একই দুর্নীতির দুই রূপ — সত্যের দিকে না তাকিয়ে পক্ষদের দিকে তাকিয়ে সাক্ষ্য ঠিক করা।",
        },
        {
          en: "Allah is awla bihima: nearer to them both, more entitled concerning them, better aware of their true interests than the witness could be. The commentators draw the plain conclusion: care for the poor is commanded everywhere in the Book, but its instrument is charity and justice, never falsified testimony. 5:8 completes the frame from the other side — do not let hatred of a people push you away from justice. Love and hate are both told to stand down.",
          bn: "আল্লাহ আওলা বিহিমা: তিনি উভয়েরই অধিক নিকটে, উভয়ের ব্যাপারে অধিক হকদার, তাদের প্রকৃত কল্যাণ সম্পর্কে সাক্ষীর চেয়ে ভালো জানেন। মুফাসসিরগণ সরল সিদ্ধান্তটি টানেন: দরিদ্রের প্রতি যত্নের আদেশ কিতাবের সর্বত্র আছে, কিন্তু তার মাধ্যম দান ও ইনসাফ — মিথ্যা সাক্ষ্য কখনোই নয়। 5:8 অন্য দিক থেকে কাঠামোটি সম্পূর্ণ করে — কোনো জাতির প্রতি বিদ্বেষ যেন তোমাদের ইনসাফ থেকে সরিয়ে না দেয়। ভালোবাসা ও ঘৃণা — দুটিকেই সরে দাঁড়াতে বলা হয়েছে।",
        },
      ],
    },
    {
      h: { en: "Do Not Follow the Hawa", bn: "প্রবৃত্তির অনুসরণ নয়" },
      p: [
        {
          en: "The verse then names the engine of injustice: fala tattabi'ul-hawa an ta'dilu, do not follow inclination, lest you swerve from being just. Hawa is whatever the self wants before asking what is true. The verse does not treat unfairness as an information problem, solvable with better procedures alone. It treats it as a desire problem: the witness wanted something, and the testimony bent itself around the want.",
          bn: "এরপর আয়াত অবিচারের ইঞ্জিনটির নাম নেয়: ফালা তাত্তাবিউল হাওয়া আন তা'দিলু — প্রবৃত্তির অনুসরণ কোরো না, পাছে ইনসাফ থেকে সরে যাও। হাওয়া হলো তা-ই, যা সত্য কী তা জিজ্ঞেস করার আগেই নফস চেয়ে বসে। আয়াত অন্যায়কে তথ্যের সমস্যা হিসেবে দেখে না, যা কেবল ভালো পদ্ধতিতে সমাধানযোগ্য। দেখে বাসনার সমস্যা হিসেবে: সাক্ষী কিছু একটা চেয়েছিল, আর সাক্ষ্য সেই চাওয়ার চারপাশে নিজেকে বাঁকিয়ে নিয়েছে।",
        },
        {
          en: "Two escape routes are then sealed by name: wa in talwu aw tu'ridu — and if you twist or turn away. Ibn Abbas (RA) is related to have explained the pair: layy is distorting testimony with the tongue while appearing to testify, and i'rad is withholding it, declining to appear at all. Silence, the verse insists, is not neutrality; the concealed testimony is counted. And the sentence closes over both: Allah is fully aware of what you do.",
          bn: "এরপর দুটি পালানোর পথ নাম ধরে সিল করে দেওয়া হয়: ওয়া ইন তালউ আও তু'রিদু — আর যদি তোমরা বাঁকাও বা মুখ ফেরাও। ইবনে আব্বাস (রাঃ) থেকে এই জোড়ার ব্যাখ্যা বর্ণিত: লাইয় হলো সাক্ষ্য দেওয়ার ভান করে জিভ দিয়ে তা বিকৃত করা, আর ই'রায হলো তা চেপে রাখা — একেবারে হাজির না হওয়া। আয়াত জোর দিয়ে বলে, নীরবতা নিরপেক্ষতা নয়; গোপন করা সাক্ষ্যও হিসাবে ধরা হয়। আর বাক্যটি দুটির ওপরই বন্ধ হয়: তোমরা যা করো, আল্লাহ সে সম্পর্কে পূর্ণ অবগত।",
        },
      ],
    },
    {
      h: { en: "The Twin Verses", bn: "যমজ আয়াত" },
      p: [
        {
          en: "This verse has a twin in 5:8, and the two divide the terrain of bias between them. Here, in 4:135, the pressure comes from love — self, parents, kin, the wealthy patron, the pitiable poor. There, the pressure comes from hate: do not let enmity toward a people make you swerve; be just, that is nearer to taqwa. Between the two commands, no relationship is left through which injustice can enter lawfully.",
          bn: "এই আয়াতের এক যমজ আছে 5:8-এ, আর দুটি মিলে পক্ষপাতের ভূখণ্ড ভাগ করে নিয়েছে। এখানে, 4:135-এ, চাপ আসে ভালোবাসা থেকে — নিজ, মাতা-পিতা, আত্মীয়, ধনী পৃষ্ঠপোষক, করুণা-জাগানো দরিদ্র। সেখানে চাপ আসে ঘৃণা থেকে: কোনো জাতির প্রতি শত্রুতা যেন তোমাদের বিচ্যুত না করে; ইনসাফ করো, তা তাকওয়ার নিকটতর। এই দুই আদেশের মাঝে এমন কোনো সম্পর্ক অবশিষ্ট থাকে না, যার ভেতর দিয়ে অবিচার বৈধভাবে ঢুকতে পারে।",
        },
        {
          en: "The wider Quran keeps the same line. 4:58 commands rendering trusts to their people and judging with justice; 6:152 commands just speech even if it concerns a relative, inside a verse listing the core commandments; 16:90 opens its summary of the religion with justice itself. Justice in this Book is not one value among others; it is the ground on which the rest of them stand, owed before He who is closer to both parties than we are.",
          bn: "বৃহত্তর কুরআন একই রেখা ধরে রাখে। 4:58 আদেশ করে আমানত তার হকদারদের ফিরিয়ে দিতে ও ইনসাফের সঙ্গে বিচার করতে; 6:152 আদেশ করে ন্যায্য কথা বলতে, তা আত্মীয়ের ব্যাপারে হলেও — মৌলিক বিধানগুলোর তালিকাওয়ালা এক আয়াতের ভেতরে; আর 16:90 দ্বীনের সারসংক্ষেপ শুরুই করে ইনসাফ দিয়ে। এই কিতাবে ইনসাফ অন্য অনেক মূল্যবোধের একটি নয়; এ সেই জমি, যার ওপর বাকিগুলো দাঁড়ায় — আর তা প্রাপ্য তাঁর সামনে, যিনি উভয় পক্ষেরই আমাদের চেয়ে নিকটবর্তী।",
        },
      ],
    },
    {
      h: { en: "The Daily Witness Stand", bn: "প্রতিদিনের সাক্ষ্যের কাঠগড়া" },
      p: [
        {
          en: "Most people never testify in a courtroom, but everyone testifies daily. References given for a colleague, testimony in a family dispute, the account of a quarrel told to friends, a review written, an incident reported to a superior — each is a shahadah, and each meets this verse. The household cases are the hardest, exactly as the verse predicted by naming parents and kin: the truth that costs our own people something.",
          bn: "অধিকাংশ মানুষ কখনো আদালতের কাঠগড়ায় দাঁড়ায় না, কিন্তু প্রত্যেকেই প্রতিদিন সাক্ষ্য দেয়। সহকর্মীর জন্য দেওয়া সুপারিশ, পারিবারিক বিরোধে বক্তব্য, বন্ধুদের কাছে বলা ঝগড়ার বিবরণ, লেখা একটি রিভিউ, ঊর্ধ্বতনের কাছে জানানো কোনো ঘটনা — প্রতিটিই এক-একটি শাহাদাহ, আর প্রতিটিই এই আয়াতের মুখোমুখি হয়। ঘরের মামলাগুলোই সবচেয়ে কঠিন — ঠিক যেমনটা আয়াত মাতা-পিতা ও আত্মীয়ের নাম নিয়ে আগেই বলে রেখেছে: সেই সত্য, যার দাম দিতে হয় আমাদের নিজেদের লোকদের।",
        },
        {
          en: "The discipline it trains is admitting the truth against one's own side at the moment it costs. Saying: my son was at fault; I was wrong in that deal; our family owes this. The verse gives the reason such honesty is safe: Allah is closer to the one you fear for than you are, and His awareness covers the twist and the silence alike. Standing firm in justice is, finally, a statement about who is actually watching.",
          bn: "এটি যে অনুশীলন শেখায় তা হলো, যে মুহূর্তে মূল্য দিতে হয় ঠিক সেই মুহূর্তে নিজের পক্ষের বিরুদ্ধে সত্য স্বীকার করা। বলা: আমার ছেলেরই দোষ ছিল; ওই চুক্তিতে আমি ভুল করেছি; আমাদের পরিবারের এই দেনা আছে। এমন সততা কেন নিরাপদ, আয়াত তার কারণ দেয়: যার জন্য আপনি ভয় পাচ্ছেন, আল্লাহ তার আপনার চেয়েও নিকটবর্তী, আর তাঁর অবগতি বাঁকানো ও নীরবতা দুটিকেই ঢেকে রাখে। ইনসাফে অটল দাঁড়ানো শেষ পর্যন্ত এই ঘোষণারই নাম — আসলে কে দেখছেন।",
        },
      ],
    },
  ],
},
'5:32': {
  sections: [
    {
      h: { en: "Because of That", bn: "এ কারণেই" },
      p: [
        {
          en: "The verse begins mid-argument: min ajli dhalika, because of that. The reference is to the account just told in 5:27-31 — the two sons of Adam (AS), one of whom offered a sacrifice that was not accepted, envied his brother, and killed him. The Quran does not name the two men. What it records is the first unjust killing, the killer's regret, and then, because of that, a decree written upon the Children of Israel.",
          bn: "আয়াতটি শুরু হয় যুক্তির মাঝপথ থেকে: মিন আজলি যালিকা — এ কারণেই। ইঙ্গিতটি 5:27-31-এ সদ্য বলা ঘটনার দিকে — আদম (আঃ)-এর দুই পুত্র, যাদের একজনের কুরবানী কবুল হয়নি, সে ভাইকে হিংসা করল এবং তাকে হত্যা করল। কুরআন দুজনের নাম নেয়নি। যা লিপিবদ্ধ করেছে তা হলো প্রথম অন্যায় হত্যা, হত্যাকারীর অনুশোচনা, আর তারপর — এ কারণেই — বনী ইসরাঈলের ওপর লিখে দেওয়া এক বিধান।",
        },
        {
          en: "The sequencing is the teaching. Law is being traced to its origin story: because envy once talked a man into shedding his brother's blood, a written rule became necessary for those who came after. The decree was given to Bani Israil in their scripture, but the mufassirun are explicit that the value it protects is universal, which is why the Quran retells it here to the community of Muhammad ﷺ, for whom the story and the rule are equally binding lessons.",
          bn: "এই ক্রমটিই শিক্ষা। বিধানকে তার উৎস-কাহিনিতে ফিরিয়ে দেখানো হচ্ছে: হিংসা যেহেতু একবার এক মানুষকে ভাইয়ের রক্ত ঝরাতে রাজি করিয়েছিল, তাই পরবর্তীদের জন্য একটি লিখিত নিয়ম জরুরি হয়ে পড়ল। বিধানটি বনী ইসরাঈলকে তাদের কিতাবে দেওয়া হয়েছিল, কিন্তু মুফাসসিরগণ স্পষ্ট বলেন — এটি যে মূল্য রক্ষা করে তা সর্বজনীন; সে কারণেই কুরআন এখানে তা আবার শোনায় মুহাম্মাদ ﷺ-এর উম্মতকে, যাদের জন্য কাহিনি ও বিধান — দুটিই সমান বাধ্যতামূলক শিক্ষা।",
        },
      ],
    },
    {
      h: { en: "One Soul Weighed Against All", bn: "সব মানুষের সমান এক প্রাণ" },
      p: [
        {
          en: "The decree itself: whoever kills a soul — other than for a soul, or for corruption in the land — it is as if he had killed mankind entirely; and whoever saves one, it is as if he had saved mankind entirely. The commentators explain the arithmetic. The murderer has not only wronged one victim; he has violated the sanctity of human life as such, and a sanctity broken once is broken as a principle for everyone.",
          bn: "বিধানটি নিজে: যে কেউ একটি প্রাণ হত্যা করে — প্রাণের বদলা বা যমীনে ফাসাদের কারণ ছাড়া — সে যেন গোটা মানবজাতিকেই হত্যা করল; আর যে একটি প্রাণ বাঁচায়, সে যেন গোটা মানবজাতিকেই বাঁচাল। মুফাসসিরগণ এই পাটিগণিতের ব্যাখ্যা দেন। হত্যাকারী কেবল একজন শিকারের ওপর অন্যায় করেনি; সে মানবজীবনের পবিত্রতাকেই লঙ্ঘন করেছে — আর যে পবিত্রতা একবার ভাঙে, তা নীতিগতভাবে সবার জন্যই ভাঙে।",
        },
        {
          en: "The same scale works upward. Man ahyaha, whoever gives life to a soul — the commentators fill the phrase with rescue from drowning and fire, feeding, healing, sheltering, and refraining from a killing one had power to commit. No life is small on this scale, so no act of saving is small either. The person in front of you, one of billions, is weighed for this purpose as though humanity stood or fell with them.",
          bn: "একই পাল্লা ঊর্ধ্বমুখেও কাজ করে। মান আহইয়াহা — যে একটি প্রাণকে জীবন দেয় — মুফাসসিরগণ এই বাক্যাংশে ভরে দেন ডুবে যাওয়া ও আগুন থেকে উদ্ধার, খাওয়ানো, চিকিৎসা, আশ্রয় দেওয়া, আর ক্ষমতা থাকা সত্ত্বেও হত্যা থেকে বিরত থাকা। এই পাল্লায় কোনো প্রাণ ছোট নয়, তাই কোনো বাঁচানোও ছোট নয়। আপনার সামনের মানুষটি — শত কোটির একজন — এই হিসাবে এমনভাবে ওজন করা হয়, যেন মানবজাতি তার সঙ্গেই দাঁড়ায় বা পড়ে।",
        },
      ],
    },
    {
      h: { en: "The Verse's Own Exceptions", bn: "আয়াতের নিজস্ব ব্যতিক্রম" },
      p: [
        {
          en: "The verse carries its limits inside itself: other than for a soul, or for corruption in the land. Just retribution for murder, and the defence of society against those who make war on it, stand outside the equivalence — and the verse immediately following, 5:33, addresses exactly those who wage war upon Allah and His Messenger and spread corruption. The sanctity of life and the punishment of its violators are parts of one system, not contradictions.",
          bn: "আয়াত তার সীমা নিজের ভেতরেই বহন করে: প্রাণের বদলা বা যমীনে ফাসাদের কারণ ছাড়া। হত্যার ন্যায্য কিসাস, আর সমাজের বিরুদ্ধে যুদ্ধ ঘোষণাকারীদের থেকে সমাজের প্রতিরক্ষা — এ দুটি ওই সমীকরণের বাইরে; আর ঠিক পরের আয়াত 5:33 সম্বোধন করে তাদেরই, যারা আল্লাহ ও তাঁর রাসূলের বিরুদ্ধে যুদ্ধ করে ও ফাসাদ ছড়ায়। জীবনের পবিত্রতা এবং তার লঙ্ঘনকারীদের শাস্তি — দুটি একই ব্যবস্থার অংশ, পরস্পরবিরোধিতা নয়।",
        },
        {
          en: "Both exceptions belong to public justice, not private hands. Classical law placed retribution with authority and courts, with proof and the rights of the victim's family — never with the avenger in the street. Read whole, the verse therefore cuts in two directions at once: against the shedding of blood, and against the vigilante logic that answers blood privately, which is itself a door into the corruption the verse names.",
          bn: "দুটি ব্যতিক্রমই প্রকাশ্য বিচারব্যবস্থার এখতিয়ার, ব্যক্তিগত হাতের নয়। শাস্ত্রীয় ফিকহ কিসাসকে রেখেছে কর্তৃপক্ষ ও আদালতের হাতে — প্রমাণ ও নিহতের পরিবারের হকসহ; রাস্তার প্রতিশোধগ্রহণকারীর হাতে কখনোই নয়। তাই পুরোটা পড়লে আয়াত একসঙ্গে দুই দিকে কাটে: রক্তপাতের বিরুদ্ধে, আর সেই ব্যক্তিগত প্রতিশোধের যুক্তির বিরুদ্ধেও, যা রক্তের জবাব নিজ হাতে দেয় — কারণ সেটিই আয়াতে বলা ফাসাদের একটি দরজা।",
        },
      ],
    },
    {
      h: { en: "Then Many Committed Excess", bn: "তবু অনেকে সীমা ছাড়াল" },
      p: [
        {
          en: "The verse ends on a sober note: Our messengers came to them with clear proofs, then indeed many of them, after that, commit excesses in the land. Knowledge of the rule has never guaranteed obedience to it. The Prophet ﷺ said, in the agreed-upon hadith, that the first matter judged between people on the Day of Judgement is bloodshed — the crime this verse legislated against remains the first item on the final docket.",
          bn: "আয়াত শেষ হয় এক গম্ভীর সুরে: আমার রাসূলগণ তাদের কাছে স্পষ্ট প্রমাণ নিয়ে এসেছিল, তবুও এরপর তাদের অনেকে যমীনে বাড়াবাড়িই করে। নিয়ম জানা কখনোই তা মানার নিশ্চয়তা দেয়নি। নবী ﷺ বুখারী-মুসলিমে একমত হাদীসে বলেছেন, কিয়ামতের দিন মানুষের মধ্যে সর্বপ্রথম যে বিষয়ের ফয়সালা হবে তা রক্তপাত — এই আয়াত যে অপরাধের বিরুদ্ধে বিধান দিয়েছে, শেষ আদালতের তালিকায় সেটিই প্রথম।",
        },
        {
          en: "Other verses hold the same line. 17:33 forbids killing the soul Allah has made sacred except by right, and 6:151, listing the fundamental prohibitions, repeats the same command in almost the same words. The repetition is itself instruction, and the commentators read it as rank: after the rights of Allah Himself, the Book guards nothing more insistently than human blood.",
          bn: "অন্য আয়াতগুলোও একই রেখা ধরে রাখে। 17:33 নিষেধ করে সেই প্রাণ হত্যা করতে যা আল্লাহ পবিত্র করেছেন — ন্যায্য কারণ ছাড়া; আর মৌলিক নিষেধাজ্ঞাগুলোর তালিকাওয়ালা 6:151 প্রায় একই শব্দে একই আদেশের পুনরাবৃত্তি করে। এই পুনরাবৃত্তি নিজেই এক শিক্ষা, আর মুফাসসিরগণ একে মর্যাদার ক্রম হিসেবে পড়েন: স্বয়ং আল্লাহর হকের পরে এই কিতাব মানুষের রক্তের চেয়ে বেশি জোর দিয়ে আর কিছু পাহারা দেয় না।",
        },
      ],
    },
    {
      h: { en: "Saving Lives Is Open to Everyone", bn: "প্রাণ বাঁচানো সবার জন্য খোলা" },
      p: [
        {
          en: "The killing half of the verse concerns few people directly; the saving half concerns everyone. Feeding the hungry, funding treatment, pulling someone back from despair, learning rescue, giving blood, intervening against violence with word or hand — each falls under man ahyaha, and each is weighed at the verse's exchange rate. Whoever saves one life, it is as if he saved mankind entirely: an incentive structure aimed straight at ordinary days.",
          bn: "আয়াতের হত্যা-অংশ সরাসরি অল্প মানুষকেই স্পর্শ করে; বাঁচানোর অংশটি স্পর্শ করে সবাইকে। ক্ষুধার্তকে খাওয়ানো, চিকিৎসার খরচ দেওয়া, কাউকে হতাশা থেকে টেনে তোলা, উদ্ধারকাজ শেখা, রক্ত দেওয়া, কথায় বা হাতে সহিংসতার বিরুদ্ধে দাঁড়ানো — প্রতিটিই মান আহইয়াহার অধীনে পড়ে, আর প্রতিটিই আয়াতের বিনিময়-হারে ওজন হয়। যে একটি প্রাণ বাঁচাল, সে যেন গোটা মানবজাতিকে বাঁচাল: সাধারণ দিনগুলোর দিকে সরাসরি তাক করা এক প্রণোদনার কাঠামো।",
        },
        {
          en: "The verse also confronts indifference to distant suffering. Its arithmetic refuses the discount we apply to strangers: the far soul equals all of mankind exactly as the near one does. To live this verse is to let one individual matter enormously — because that is the valuation their Creator has published, and because the whole account began with one brother who decided that one life was expendable.",
          bn: "আয়াতটি দূরের কষ্টের প্রতি উদাসীনতাকেও মুখোমুখি দাঁড় করায়। এর পাটিগণিত অপরিচিতদের বেলায় আমরা যে ছাড় ধরি তা প্রত্যাখ্যান করে: দূরের প্রাণটিও ঠিক কাছের প্রাণের মতোই গোটা মানবজাতির সমান। এই আয়াত নিয়ে বাঁচা মানে একজন ব্যক্তিকে অসম্ভব রকম গুরুত্ব দিতে দেওয়া — কারণ এটিই তার স্রষ্টার প্রকাশিত মূল্যায়ন, আর কারণ পুরো হিসাবটাই শুরু হয়েছিল এমন এক ভাইকে দিয়ে, যে ঠিক করেছিল একটি প্রাণ ঝরে গেলে ক্ষতি নেই।",
        },
      ],
    },
  ],
},
'30:21': {
  sections: [
    {
      h: { en: "One Sign in a Series", bn: "ধারাবাহিক নিদর্শনের একটি" },
      p: [
        {
          en: "The verse belongs to a run of sentences in Surah ar-Rum that all begin the same way: wa min ayatihi, and among His signs. Creation from dust comes first, then this verse on spouses, then 30:22 on the heavens and the earth and the differing of tongues and colours, then sleep, lightning and rain in 30:23-24. Marriage is set in that company deliberately — listed among the sky and the languages of mankind as evidence of the same Maker.",
          bn: "আয়াতটি সূরা আর-রূমের এমন এক ধারাবাহিক বাক্যমালার অংশ, যার প্রতিটি শুরু হয় একইভাবে: ওয়া মিন আয়াতিহি — আর তাঁর নিদর্শনসমূহের মধ্যে। প্রথমে মাটি থেকে সৃষ্টি, তারপর স্বামী-স্ত্রী বিষয়ক এই আয়াত, তারপর 30:22-এ আসমান-যমীন এবং ভাষা ও বর্ণের ভিন্নতা, এরপর 30:23-24-এ ঘুম, বিদ্যুৎ ও বৃষ্টি। বিবাহকে ইচ্ছা করেই এই সারিতে বসানো হয়েছে — আকাশ আর মানবজাতির ভাষাগুলোর পাশে, একই নির্মাতার প্রমাণ হিসেবে তালিকাভুক্ত।",
        },
        {
          en: "That placement resists two errors at once. It refuses the shrinking of marriage into mere paperwork and economics, because the Quran files it with cosmic signs. And it refuses sentimentality, because signs are for study: the verse ends, as the sign-verses around it do, by naming its audience — li-qawmin yatafakkarun, for a people who reflect. What happens inside a home is presented as data about Allah, awaiting a reader.",
          bn: "এই অবস্থান একসঙ্গে দুটি ভুল ঠেকায়। এটি বিবাহকে নিছক কাগজপত্র আর অর্থনীতিতে সংকুচিত করতে দেয় না, কারণ কুরআন একে মহাজাগতিক নিদর্শনগুলোর সঙ্গে নথিভুক্ত করেছে। আবার ভাবালুতাও হতে দেয় না, কারণ নিদর্শন তো অধ্যয়নের বিষয়: আশপাশের নিদর্শন-আয়াতগুলোর মতোই এই আয়াতও শেষ হয় তার শ্রোতার নাম নিয়ে — লি-কাওমিন ইয়াতাফাক্কারুন, চিন্তাশীল মানুষদের জন্য। ঘরের ভেতরে যা ঘটে, তা উপস্থাপিত হয়েছে আল্লাহ সম্পর্কে তথ্য হিসেবে — এক পাঠকের অপেক্ষায়।",
        },
      ],
    },
    {
      h: { en: "From Your Own Selves", bn: "তোমাদেরই মধ্য থেকে" },
      p: [
        {
          en: "Khalaqa lakum min anfusikum azwajan — He created for you, from your own selves, spouses. Min anfusikum places likeness at the foundation: the spouse is of your own kind and nature, not an alien species to be managed. 4:1 grounds all of humanity in one soul and its mate created from it, and 7:189 repeats this verse's own logic: He made from it its mate, that he might find rest in her.",
          bn: "খালাকা লাকুম মিন আনফুসিকুম আযওয়াজা — তিনি তোমাদের জন্য তোমাদেরই মধ্য থেকে সঙ্গী সৃষ্টি করেছেন। মিন আনফুসিকুম ভিত্তিতেই সাদৃশ্য বসিয়ে দেয়: সঙ্গী আপনারই জাত ও প্রকৃতির, সামলে রাখার মতো কোনো ভিনগ্রহের প্রাণী নয়। 4:1 গোটা মানবজাতিকে দাঁড় করায় এক প্রাণ ও তা থেকে সৃষ্ট তার জোড়ার ওপর, আর 7:189 এই আয়াতেরই যুক্তি পুনরাবৃত্তি করে: তিনি তা থেকে তার জোড়া বানালেন, যেন সে তার কাছে প্রশান্তি পায়।",
        },
        {
          en: "The word sakan is the verse's centre: li-taskunu ilayha, that you may find stillness toward her. Sakan in Arabic is the quietening of what was in motion — the same root gives the words for dwelling and for tranquility. The stated purpose of marriage is not romance as spectacle but rest: a person and a place where the guard comes down. 2:187 gives the same fact its most compact image: they are a garment for you, and you are a garment for them.",
          bn: "সাকান শব্দটিই আয়াতের কেন্দ্র: লি-তাসকুনু ইলাইহা — যেন তোমরা তার কাছে স্থিরতা পাও। আরবিতে সাকান মানে চলমান কিছুর শান্ত হয়ে আসা — একই ধাতু থেকে এসেছে বাসস্থান ও প্রশান্তির শব্দগুলো। বিবাহের ঘোষিত উদ্দেশ্য প্রদর্শনযোগ্য রোমাঞ্চ নয়, বিশ্রাম: এমন এক মানুষ ও এমন এক জায়গা, যেখানে পাহারা নেমে আসে। 2:187 একই সত্যের সবচেয়ে সংহত চিত্রটি দেয়: তারা তোমাদের পোশাক, আর তোমরা তাদের পোশাক।",
        },
      ],
    },
    {
      h: { en: "Placed, Not Manufactured", bn: "স্থাপিত, বানানো নয়" },
      p: [
        {
          en: "Wa ja'ala baynakum mawaddatan wa rahmah — and He placed between you affection and mercy. The verb matters: placed. The bond that holds two former strangers together across decades is described as something Allah sets between them, not something they generate alone. Couples who have felt love arrive and settle without their own doing have felt what the verse describes. Gratitude, not self-congratulation, is the fitting response to what was placed.",
          bn: "ওয়া জাআলা বাইনাকুম মাওয়াদ্দাতাঁও ওয়া রাহমাহ — আর তিনি তোমাদের মধ্যে স্থাপন করেছেন ভালোবাসা ও রহমত। ক্রিয়াপদটিই গুরুত্বপূর্ণ: স্থাপন করেছেন। দুই সাবেক অপরিচিতকে যে বন্ধন দশকের পর দশক ধরে রাখে, তাকে বর্ণনা করা হয়েছে এমন কিছু হিসেবে যা আল্লাহ তাদের মাঝে বসিয়ে দেন — কেবল তারা নিজেরা যা উৎপাদন করে তা নয়। যে দম্পতিরা অনুভব করেছেন ভালোবাসা নিজে থেকে এসে থিতু হয়েছে, তারা আয়াতের বর্ণিত জিনিসটিই অনুভব করেছেন। যা স্থাপিত হয়েছে তার যোগ্য জবাব আত্মপ্রশংসা নয় — কৃতজ্ঞতা।",
        },
        {
          en: "The commentators weigh the two nouns. Mawaddah is warm, active love and desire; rahmah is tenderness and mercy — the impulse that serves, overlooks, and stays. Some explain that the pair covers the seasons of a marriage: mawaddah burning brightest in youth, rahmah deepening where age or hardship thins the first. A marriage held by mercy in the years when affection is tested is not failing; it is running on the second of its two engines.",
          bn: "মুফাসসিরগণ শব্দ দুটি ওজন করেন। মাওয়াদ্দাহ হলো উষ্ণ, সক্রিয় ভালোবাসা ও আকর্ষণ; রাহমাহ হলো কোমলতা ও দয়া — যে তাড়না সেবা করে, উপেক্ষা করে ক্ষমা করে, আর থেকে যায়। কেউ কেউ ব্যাখ্যা করেন, এই জোড়া দাম্পত্যের ঋতুগুলো ঢেকে দেয়: মাওয়াদ্দাহ যৌবনে সবচেয়ে উজ্জ্বল, আর বয়স বা কষ্ট প্রথমটিকে পাতলা করলে রাহমাহ গভীর হয়। ভালোবাসা পরীক্ষার বছরগুলোতে যে সংসার দয়ার জোরে টিকে থাকে, তা ব্যর্থ হচ্ছে না; তা চলছে তার দুই ইঞ্জিনের দ্বিতীয়টিতে।",
        },
      ],
    },
    {
      h: { en: "The Prophet's Household", bn: "নবীজির ঘর" },
      p: [
        {
          en: "The Prophet ﷺ lived this verse where it is hardest, in the unglamorous interior of a home. Aisha (RA) was asked what he ﷺ did inside his house and answered that he was in the service of his family, and when the prayer time came, he went out to it — al-Bukhari relates it. He ﷺ also said, in the sound hadith, that the best of you are the best to their families.",
          bn: "নবী ﷺ এই আয়াতটি সেখানেই যাপন করেছেন যেখানে তা সবচেয়ে কঠিন — ঘরের চাকচিক্যহীন অন্দরে। আয়েশা (রাঃ)-কে জিজ্ঞেস করা হয়েছিল, তিনি ﷺ ঘরের ভেতরে কী করতেন; তিনি উত্তর দেন, তিনি তাঁর পরিবারের কাজে লেগে থাকতেন, আর নামাযের সময় হলে বেরিয়ে যেতেন — ইমাম বুখারী তা বর্ণনা করেছেন। তিনি ﷺ সহীহ হাদীসে আরও বলেছেন, তোমাদের মধ্যে সেরা তারাই, যারা তাদের পরিবারের কাছে সেরা।",
        },
        {
          en: "These reports translate mawaddah and rahmah into verbs: service, patience, humour, presence. Tranquility is named in the verse as a purpose, which makes it a responsibility; each spouse is either building sukun for the other or eroding it. The question the verse hands a married reader is direct — is the guard able to come down around you? — and the Prophet's ﷺ example shows the answer is made of small domestic acts.",
          bn: "এই বর্ণনাগুলো মাওয়াদ্দাহ ও রাহমাহকে ক্রিয়াপদে অনুবাদ করে: সেবা, ধৈর্য, রসবোধ, উপস্থিতি। আয়াতে প্রশান্তিকে উদ্দেশ্য হিসেবে নাম দেওয়া হয়েছে — যা একে দায়িত্বও বানিয়ে দেয়; প্রতিটি স্বামী-স্ত্রী হয় অন্যজনের জন্য সুকুন গড়ছেন, নয় তা ক্ষইয়ে ফেলছেন। বিবাহিত পাঠকের হাতে আয়াত যে প্রশ্নটি তুলে দেয় তা সরাসরি — আপনার পাশে কি পাহারা নামিয়ে রাখা যায়? — আর নবী ﷺ-এর দৃষ্টান্ত দেখায়, উত্তরটি তৈরি হয় ঘরের ছোট ছোট কাজ দিয়ে।",
        },
      ],
    },
    {
      h: { en: "A Sign to Be Read", bn: "পাঠযোগ্য এক নিদর্শন" },
      p: [
        {
          en: "The closing clause turns the home into a place of tadabbur: for a people who reflect. The reflection the verse invites is specific. That likeness exists where difference was possible; that stillness exists where two selves could grind; that affection and mercy arrived without being manufactured — each points past itself to the One who placed it. A believer who has known rest in a spouse has been handed a private proof of Allah's mercy.",
          bn: "শেষ বাক্যাংশটি ঘরকে তাদাব্বুরের জায়গা বানিয়ে দেয়: চিন্তাশীল মানুষদের জন্য। আয়াত যে চিন্তার আমন্ত্রণ জানায় তা সুনির্দিষ্ট। ভিন্নতা সম্ভব ছিল, অথচ সাদৃশ্য আছে; দুটি সত্তার ঘষা লাগতে পারত, অথচ স্থিরতা আছে; ভালোবাসা ও দয়া কারখানায় তৈরি না হয়েও এসে পৌঁছেছে — প্রতিটিই নিজেকে ছাড়িয়ে ইঙ্গিত করে তাঁর দিকে, যিনি তা স্থাপন করেছেন। যে মুমিন জীবনসঙ্গীর কাছে বিশ্রাম পেয়েছেন, তার হাতে তুলে দেওয়া হয়েছে আল্লাহর রহমতের এক ব্যক্তিগত প্রমাণ।",
        },
        {
          en: "The lived practice follows: thank Allah for the affection in the house as His gift, and guard what was placed. Harshness, contempt and neglect are not merely unkind; they vandalise a sign of Allah. And for the one whose marriage is a place of struggle rather than rest, the verse names whom to ask — since He is the One who sets mawaddah and rahmah between hearts, He is the One who can renew them.",
          bn: "বাস্তব অনুশীলনটি এর থেকেই আসে: ঘরের ভালোবাসার জন্য আল্লাহকে তাঁর উপহার হিসেবে শুকরিয়া জানান, আর যা স্থাপিত হয়েছে তা পাহারা দিন। কর্কশতা, অবজ্ঞা ও অবহেলা কেবল নির্দয়তা নয়; তা আল্লাহর এক নিদর্শনের ওপর ভাঙচুর। আর যার দাম্পত্য বিশ্রামের বদলে সংগ্রামের জায়গা, আয়াত তাকে বলে দেয় কার কাছে চাইতে হবে — হৃদয়ে হৃদয়ে মাওয়াদ্দাহ ও রাহমাহ যিনি বসান, তিনিই তা নতুন করে দিতে পারেন।",
        },
      ],
    },
  ],
},
'31:14': {
  sections: [
    {
      h: { en: "An Interjection From Allah", bn: "আল্লাহর পক্ষ থেকে সংযোজন" },
      p: [
        {
          en: "The verse sits inside another speech. Surah Luqman is carrying the counsel of Luqman to his son — 31:13 has him warning against shirk, and his advice resumes at 31:16. Between the father's words, Allah Himself interjects: and We have enjoined upon man concerning his parents. The commentators note the placement: at the very moment a father is teaching his child tawhid, the Author of the Book steps in to teach the child what he owes his parents.",
          bn: "আয়াতটি বসে আছে আরেকটি ভাষণের ভেতরে। সূরা লুকমান বহন করছে লুকমানের তাঁর ছেলেকে দেওয়া উপদেশ — 31:13-এ তিনি শিরক থেকে সাবধান করছেন, আর তাঁর উপদেশ আবার শুরু হয় 31:16-এ। বাবার কথার মাঝখানে স্বয়ং আল্লাহ যুক্ত করেন: আর আমি মানুষকে তার মাতা-পিতার ব্যাপারে নির্দেশ দিয়েছি। মুফাসসিরগণ এই অবস্থানটি লক্ষ করেন: যে মুহূর্তে এক বাবা সন্তানকে তাওহীদ শেখাচ্ছেন, ঠিক তখনই কিতাবের রচয়িতা এগিয়ে এসে সন্তানকে শেখান — মাতা-পিতার কাছে তার ঋণ কী।",
        },
        {
          en: "The pairing runs deep in the Quran. 17:23 joins the command to worship Allah alone with excellence to parents in a single verse, and this verse will end by joining gratitude to Him with gratitude to them in a single breath. The two duties stand next to each other so often that the mufassirun treat the ordering as doctrine: after the right of Allah comes, immediately, the right of the parents.",
          bn: "এই জোড় কুরআনে গভীরভাবে চলে। 17:23 এক আয়াতেই মেলায় একমাত্র আল্লাহর ইবাদতের আদেশ আর মাতা-পিতার প্রতি সদ্ব্যবহার; আর এই আয়াতটি শেষ হবে এক নিঃশ্বাসে তাঁর প্রতি ও তাদের প্রতি কৃতজ্ঞতা মিলিয়ে। দুটি কর্তব্য এত ঘনঘন পাশাপাশি দাঁড়ায় যে মুফাসসিরগণ এই ক্রমকে আকীদার মতোই গণ্য করেন: আল্লাহর হকের পরেই, অবিলম্বে, মাতা-পিতার হক।",
        },
      ],
    },
    {
      h: { en: "Weakness Upon Weakness", bn: "দুর্বলতার ওপর দুর্বলতা" },
      p: [
        {
          en: "The verse gives the reason for the command in a compressed biography: his mother carried him, wahnan ala wahn — weakness upon weakness — and his weaning is in two years. Each stage of the pregnancy adds weight and takes strength; the wording stacks the cost, layer on layer. Then come roughly two further years of nursing, a figure the verse states plainly. 46:15 fills in the rest: she carried him in hardship and delivered him in hardship.",
          bn: "আদেশের কারণটি আয়াত দেয় এক সংক্ষিপ্ত জীবনবৃত্তান্তে: তার মা তাকে বহন করেছে — ওয়াহনান আলা ওয়াহন — দুর্বলতার ওপর দুর্বলতায় — আর তার দুধ ছাড়ানো দুই বছরে। গর্ভধারণের প্রতিটি ধাপ ভার বাড়ায় আর শক্তি নিয়ে যায়; শব্দবিন্যাস মূল্যটাকে স্তরের ওপর স্তর করে জমা করে। এরপর আসে আরও প্রায় দুই বছরের দুধপান — যে সংখ্যা আয়াত স্পষ্টই বলে দেয়। 46:15 বাকিটুকু পূরণ করে: সে তাকে বহন করেছে কষ্টে, আর প্রসব করেছে কষ্টে।",
        },
        {
          en: "Notice who the verse foregrounds. Both parents are owed, but only the mother's cost is itemised, because only she paid this particular bill in her body. The Prophet ﷺ matched the emphasis: asked who most deserved his good companionship, he answered your mother, then again your mother, then again your mother, and only then your father — in the hadith agreed upon by al-Bukhari and Muslim.",
          bn: "লক্ষ করুন, আয়াত কাকে সামনে আনে। প্রাপ্য দুজনেরই, কিন্তু কেবল মায়ের মূল্যটাই খাতভিত্তিক লেখা হয়েছে — কারণ এই বিশেষ বিলটি কেবল তিনিই নিজের শরীরে শোধ করেছেন। নবী ﷺ-ও একই জোর মিলিয়েছেন: কে তাঁর উত্তম সাহচর্যের সবচেয়ে বেশি হকদার — এ প্রশ্নে তিনি উত্তর দেন, তোমার মা; তারপর আবার, তোমার মা; তারপর আবারও, তোমার মা; আর কেবল এরপর, তোমার বাবা — বুখারী ও মুসলিমে একমত হাদীসে।",
        },
      ],
    },
    {
      h: { en: "Two Thanks in One Command", bn: "এক আদেশে দুই কৃতজ্ঞতা" },
      p: [
        {
          en: "Then the command itself: an ushkur li wa li-walidayk — be grateful to Me and to your parents. One verb governs both objects. The commentators draw out the weight of the syntax: ingratitude to the parents sits in the same sentence as ingratitude to Allah. The parents were the means of your existence and the bearers of your helpless years; He was the Creator behind both. Thanking the Giver includes thanking the hands the gift arrived through.",
          bn: "এরপর আদেশটি নিজে: আন উশকুর লী ওয়া লি-ওয়ালিদাইক — আমার প্রতি এবং তোমার মাতা-পিতার প্রতি কৃতজ্ঞ হও। একটি ক্রিয়াপদই দুটি কর্ম শাসন করে। মুফাসসিরগণ এই বাক্যগঠনের ওজন টেনে বের করেন: মাতা-পিতার প্রতি অকৃতজ্ঞতা বসে আছে আল্লাহর প্রতি অকৃতজ্ঞতার একই বাক্যে। মাতা-পিতা ছিলেন আপনার অস্তিত্বের উপলক্ষ আর অসহায় বছরগুলোর বাহক; দুটিরই পেছনে স্রষ্টা ছিলেন তিনি। দাতাকে ধন্যবাদ দেওয়ার মধ্যে পড়ে সেই হাতগুলোকেও ধন্যবাদ দেওয়া, যে হাত দিয়ে উপহারটি এসেছে।",
        },
        {
          en: "The verse closes with ilayya al-masir: to Me is the final destination. The clause does two jobs. It sets a deadline — the account of how parents were treated is audited at the return. And it comforts — whatever a child could never repay, and the commentators agree the debt cannot be repaid in full, can still be carried to the One to whom all of them are returning, in the form of du'a.",
          bn: "আয়াত শেষ হয় ইলাইয়াল মাসীর দিয়ে: আমারই কাছে শেষ গন্তব্য। বাক্যাংশটি দুটি কাজ করে। এটি একটি সময়সীমা বসায় — মাতা-পিতার সঙ্গে আচরণের হিসাব নিরীক্ষা হবে প্রত্যাবর্তনের সময়। আর এটি সান্ত্বনাও দেয় — সন্তান যা কখনোই শোধ করতে পারত না — আর মুফাসসিরগণ একমত, এই ঋণ পুরোপুরি শোধযোগ্য নয় — তা এখনো বহন করে নেওয়া যায় তাঁর কাছে, যাঁর দিকে তারা সবাই ফিরছে: দোয়ার আকারে।",
        },
      ],
    },
    {
      h: { en: "The Limit That Proves the Rule", bn: "যে সীমা নিয়মকে প্রমাণ করে" },
      p: [
        {
          en: "The next verse, 31:15, supplies the one limit: if the parents strive to make you associate with Allah that of which you have no knowledge, do not obey them — and then, remarkably, accompany them in this world with kindness. Obedience has a ceiling; kindness does not. Even the parent campaigning against a child's faith retains the right to companionship and gentle treatment. Only the sin itself is refused.",
          bn: "পরের আয়াত, 31:15, একটিমাত্র সীমা জোগায়: মাতা-পিতা যদি চেষ্টা করে তোমাকে দিয়ে আল্লাহর সঙ্গে এমন কিছু শরিক করাতে যার জ্ঞান তোমার নেই, তবে তাদের আনুগত্য কোরো না — আর তারপর, বিস্ময়করভাবে: দুনিয়াতে তাদের সঙ্গে সদ্ভাবে চলো। আনুগত্যের একটি ছাদ আছে; সদাচারের নেই। সন্তানের ঈমানের বিরুদ্ধে অভিযানে নামা বাবা-মাও সাহচর্য ও কোমল আচরণের হক ধরে রাখেন। প্রত্যাখ্যাত হয় কেবল গুনাহটুকুই।",
        },
        {
          en: "Muslim relates the story behind the similar verse 29:8: when Sa'd ibn Abi Waqqas (RA) accepted Islam, his mother swore she would not eat or drink until he renounced it. He refused — telling her that if she had a hundred souls and they left her one by one, he would not abandon his religion — and revelation confirmed him: no obedience in shirk, while the bond itself stays.",
          bn: "একই ধরনের আয়াত 29:8-এর পেছনের ঘটনাটি ইমাম মুসলিম বর্ণনা করেন: সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) ইসলাম গ্রহণ করলে তাঁর মা কসম করেন, ছেলে ইসলাম না ছাড়া পর্যন্ত তিনি খাবেন না, পান করবেন না। তিনি অস্বীকৃতি জানান — মাকে বলেন, আপনার যদি একশটি প্রাণ থাকত আর তা একে একে বেরিয়ে যেত, তবুও আমি আমার দ্বীন ছাড়তাম না — আর ওহী তাঁকে সমর্থন করে: শিরকে কোনো আনুগত্য নেই, অথচ বন্ধনটি নিজে থেকে যায়।",
        },
      ],
    },
    {
      h: { en: "Gratitude With a Deadline", bn: "সময়সীমা বাঁধা কৃতজ্ঞতা" },
      p: [
        {
          en: "17:23-24 turns the duty into daily conduct for the season when the roles reverse: when parents reach old age, not even uff — the smallest sound of irritation; no repelling them; noble speech; the lowered wing of humility; and the du'a the Quran itself scripts: my Lord, have mercy on them as they raised me when I was small. The child who was once carried through weakness now carries, and the verse supplies the words for it.",
          bn: "17:23-24 কর্তব্যটিকে দৈনন্দিন আচরণে পরিণত করে সেই মৌসুমের জন্য, যখন ভূমিকা উল্টে যায়: মাতা-পিতা বার্ধক্যে পৌঁছালে এমনকি উফ-ও নয় — বিরক্তির ক্ষুদ্রতম শব্দটিও নয়; তাদের ধমকে সরিয়ে দেওয়া নয়; সম্মানের কথা; বিনয়ের নত ডানা; আর সেই দোয়া, যার চিত্রনাট্য কুরআন নিজেই লিখে দিয়েছে: হে আমার রব, তাদের প্রতি রহম করুন, যেমন তারা আমাকে শৈশবে লালন করেছেন। যে সন্তানকে একদিন দুর্বলতার ভেতর দিয়ে বহন করা হয়েছিল, সে এখন বহন করে — আর আয়াত তার জন্য শব্দগুলো জুগিয়ে দেয়।",
        },
        {
          en: "The practice this verse asks for is concrete and current: service while they live, speech that honours, patience with their slowness, and du'a always. Gratitude to parents is the training ground of gratitude to Allah — the first giver a child ever perceives is a parent — and the verse binds the two so that neither can be performed while the other is abandoned. To Him is the destination; they, and we, are on the way there.",
          bn: "এই আয়াত যে অনুশীলন চায় তা মূর্ত এবং এখনকার: তারা বেঁচে থাকতে সেবা, সম্মান জানানো কথা, তাদের ধীরতায় ধৈর্য, আর সবসময় দোয়া। মাতা-পিতার প্রতি কৃতজ্ঞতাই আল্লাহর প্রতি কৃতজ্ঞতার প্রশিক্ষণক্ষেত্র — শিশু জীবনে প্রথম যে দাতাকে চিনতে পারে, তিনি একজন অভিভাবক — আর আয়াত দুটিকে এমনভাবে বেঁধেছে যে একটিকে ছেড়ে অন্যটি পালন করা যায় না। গন্তব্য তাঁরই কাছে; তারা, আর আমরা — সবাই সেই পথেই আছি।",
        },
      ],
    },
  ],
},
'49:12-13': {
  sections: [
    {
      h: { en: "A Surah of Social Repair", bn: "সামাজিক সংস্কারের সূরা" },
      p: [
        {
          en: "Surah al-Hujurat is a short manual for a community's life together. It has already commanded verifying news before acting on it in 49:6, reconciling fighting believers in 49:9, and, in 49:11, it has banned mockery, insult and wounding nicknames. Then 49:12 moves indoors. Having cleared the public square of open contempt, the surah pursues contempt into its hiding places: the assumption, the investigation, and the conversation behind a back.",
          bn: "সূরা আল-হুজুরাত একটি সম্প্রদায়ের যৌথ জীবনের সংক্ষিপ্ত নির্দেশিকা। 49:6-এ সে ইতিমধ্যে আদেশ দিয়েছে খবর যাচাই না করে তার ওপর কাজ না করতে, 49:9-এ লড়াইরত মুমিনদের মীমাংসা করতে, আর 49:11-এ নিষিদ্ধ করেছে উপহাস, গালি ও আঘাত করা ডাকনাম। এরপর 49:12 ঘরের ভেতরে ঢোকে। প্রকাশ্য চত্বর থেকে খোলা অবজ্ঞা সাফ করার পর সূরা অবজ্ঞাকে ধাওয়া করে তার লুকানোর জায়গাগুলোতে: অনুমানে, অনুসন্ধানে, আর পিঠের পেছনের আলাপে।",
        },
        {
          en: "The order is diagnostic. Backbiting is rarely the first sin; it is fed by spying, and spying is fed by suspicion. So the verse cuts the chain at its first link: ijtanibu kathiran min az-zann — avoid much of assumption, for some assumption is sin. Not all of it: the verse legislates precisely. What is forbidden is the baseless assumption of evil about people whose outward state is sound.",
          bn: "ক্রমটিই রোগনির্ণয়। গীবত সাধারণত প্রথম গুনাহ নয়; তাকে খাওয়ায় গোয়েন্দাগিরি, আর গোয়েন্দাগিরিকে খাওয়ায় সন্দেহ। তাই আয়াত শিকলটি কাটে তার প্রথম কড়িতে: ইজতানিবু কাসীরাম মিনায যান্ন — অনুমানের অনেকটুকু বর্জন করো, কারণ কিছু অনুমান গুনাহ। সবটুকু নয়: আয়াত সূক্ষ্মভাবে বিধান দেয়। নিষিদ্ধ হলো তাদের সম্পর্কে ভিত্তিহীন মন্দ ধারণা, যাদের বাহ্যিক অবস্থা নির্দোষ।",
        },
      ],
    },
    {
      h: { en: "Suspicion and Spying", bn: "সন্দেহ ও গোয়েন্দাগিরি" },
      p: [
        {
          en: "Wa la tajassasu — and do not spy. Suspicion left alive goes looking for evidence; tajassus is suspicion with a search warrant it wrote for itself. The command protects the cover Allah Himself has left over people's faults. The commentators note that the community is instructed to deal with what people show, and to leave what they conceal to their Lord — the opposite of a culture of surveillance, exposure, and files kept on neighbours.",
          bn: "ওয়া লা তাজাসসাসু — আর গোপন দোষ খুঁজে বেড়িয়ো না। সন্দেহকে বাঁচিয়ে রাখলে সে প্রমাণ খুঁজতে বের হয়; তাজাসসুস হলো সেই সন্দেহ, যে নিজের জন্য নিজেই তল্লাশি-পরোয়ানা লিখে নিয়েছে। এই নিষেধ রক্ষা করে সেই আবরণ, যা আল্লাহ নিজেই মানুষের দোষের ওপর রেখে দিয়েছেন। মুফাসসিরগণ লক্ষ করেন, সম্প্রদায়কে বলা হয়েছে মানুষ যা প্রকাশ করে তা নিয়েই চলতে, আর যা তারা গোপন রাখে তা তাদের রবের হাতে ছেড়ে দিতে — নজরদারি, ফাঁস করা আর প্রতিবেশীর নামে নথি জমানোর সংস্কৃতির ঠিক উল্টো।",
        },
        {
          en: "The three sins also share one convenience: each is committed in the target's absence. The suspected, the spied-upon and the backbitten cannot answer, because they are not there. That is exactly what the verse's famous image will seize on — and it is why these sins feel so cheap to commit. No confrontation, no risk, no reply. The surah that banned insulting a believer to his face now bans the coward's versions of the same contempt.",
          bn: "তিনটি গুনাহের একটি সাধারণ সুবিধাও আছে: প্রতিটিই ঘটে লক্ষ্যবস্তুর অনুপস্থিতিতে। যাকে সন্দেহ করা হয়, যার ওপর নজরদারি চলে, যার গীবত হয় — কেউই জবাব দিতে পারে না, কারণ তারা সেখানে নেই। আয়াতের বিখ্যাত চিত্রটি ঠিক এখানটাই ধরবে — আর এ কারণেই এই গুনাহগুলো করা এত সস্তা মনে হয়। কোনো মুখোমুখি নয়, কোনো ঝুঁকি নেই, কোনো জবাব নেই। যে সূরা মুমিনকে মুখের ওপর অপমান করা নিষিদ্ধ করেছে, সে এখন নিষিদ্ধ করছে একই অবজ্ঞার কাপুরুষী সংস্করণগুলো।",
        },
      ],
    },
    {
      h: { en: "The Flesh of a Dead Brother", bn: "মৃত ভাইয়ের মাংস" },
      p: [
        {
          en: "Would one of you love to eat the flesh of his dead brother? You would detest it. The Prophet ﷺ defined the sin in the hadith Muslim relates: mentioning your brother with what he dislikes; if what you say is true, you have backbitten him, and if it is false, you have slandered him. The definition removes the standard excuse before it is offered — but it is true is precisely what makes it ghibah.",
          bn: "তোমাদের কেউ কি তার মৃত ভাইয়ের মাংস খেতে পছন্দ করবে? তোমরা তো তা ঘৃণাই করো। নবী ﷺ গুনাহটির সংজ্ঞা দিয়েছেন মুসলিমের বর্ণিত হাদীসে: তোমার ভাইয়ের এমন উল্লেখ, যা সে অপছন্দ করে; তুমি যা বলছ তা সত্য হলে তুমি তার গীবত করলে, আর মিথ্যা হলে তার ওপর অপবাদ দিলে। এই সংজ্ঞা প্রচলিত অজুহাতটিকে পেশ হওয়ার আগেই সরিয়ে দেয় — 'কিন্তু কথাটা তো সত্যি' — ঠিক সেটিই একে গীবত বানায়।",
        },
        {
          en: "The image works because it is exact. The absent person is like the dead: unable to defend himself. His honour is his flesh; the gossip session is a meal, shared and even enjoyed. The verse makes the ugliness of a normalised habit suddenly visible, then adds fa-karihtumuh — you already detest it. The moral sense needed is present in every hearer; the verse only connects it to the act it had excused.",
          bn: "চিত্রটি কাজ করে কারণ তা নিখুঁত। অনুপস্থিত মানুষটি মৃতের মতো: আত্মরক্ষায় অক্ষম। তার সম্মানই তার মাংস; আড্ডার গীবত-আসরটি এক ভোজ — ভাগ করে খাওয়া, এমনকি উপভোগ করা। আয়াতটি এক স্বাভাবিক-হয়ে-যাওয়া অভ্যাসের কদর্যতাকে হঠাৎ দৃশ্যমান করে দেয়, তারপর যোগ করে: ফা-কারিহতুমুহ — তোমরা তো তা ঘৃণাই করো। প্রয়োজনীয় নৈতিক বোধ প্রত্যেক শ্রোতার মধ্যেই আছে; আয়াত কেবল সেটিকে জুড়ে দেয় সেই কাজের সঙ্গে, যাকে সে এতদিন ছাড় দিয়ে এসেছে।",
        },
      ],
    },
    {
      h: { en: "One Origin, Many Peoples", bn: "এক উৎস, বহু জাতি" },
      p: [
        {
          en: "49:13 widens the address from the believers to everyone: ya ayyuhan-nas, O mankind. We created you from one male and one female — every claimed superiority of blood collapses at the shared parents — and made you peoples and tribes li-ta'arafu, that you may know one another. Difference exists for acquaintance, not for ranking. Nation and tribe are given the status of a name and an address: useful for meeting, useless for boasting.",
          bn: "49:13 সম্বোধনকে মুমিনদের থেকে সবার দিকে প্রশস্ত করে: ইয়া আইয়ুহান নাস — হে মানবজাতি। আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে — রক্তের প্রতিটি দাবি করা শ্রেষ্ঠত্ব অভিন্ন পিতামাতার কাছে এসে ধসে পড়ে — আর তোমাদের করেছি বিভিন্ন জাতি ও গোত্র, লি-তাআরাফু — যেন তোমরা পরস্পরকে চেনো। ভিন্নতার অস্তিত্ব পরিচয়ের জন্য, ক্রমতালিকার জন্য নয়। জাতি ও গোত্রকে দেওয়া হয়েছে নাম ও ঠিকানার মর্যাদা: সাক্ষাতের জন্য দরকারি, বড়াইয়ের জন্য অকেজো।",
        },
        {
          en: "Then the verse relocates nobility entirely: the most noble of you with Allah is the most God-conscious of you. And since the verse ends inna Allaha alimun khabir — He is Knowing, Acquainted — the new ranking is unmeasurable by us. Taqwa sits in hearts only He reads. The verse thus abolishes not just racism but the whole project of publicly ranking souls; the true league table exists, and no human being holds a copy.",
          bn: "এরপর আয়াত মর্যাদার ঠিকানাই বদলে দেয়: আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি তাকওয়াবান। আর আয়াত যেহেতু শেষ হয় ইন্নাল্লাহা আলীমুন খাবীর দিয়ে — তিনি সর্বজ্ঞ, সম্যক অবগত — নতুন এই ক্রমতালিকা আমাদের পক্ষে মাপা অসম্ভব। তাকওয়া থাকে হৃদয়ে, যা কেবল তিনিই পড়েন। ফলে আয়াতটি শুধু বর্ণবাদ নয়, প্রকাশ্যে আত্মাদের র‍্যাংকিং করার গোটা প্রকল্পটিই বাতিল করে দেয়; প্রকৃত মেধাতালিকা আছে ঠিকই — কিন্তু তার কপি কোনো মানুষের হাতে নেই।",
        },
      ],
    },
    {
      h: { en: "The Farewell Declaration", bn: "বিদায়ের ঘোষণা" },
      p: [
        {
          en: "The Prophet ﷺ preached this verse's content to the largest audience of his life. In the sermon of the farewell pilgrimage days he ﷺ declared, as Ahmad relates with a sound chain: no Arab has superiority over a non-Arab, nor a non-Arab over an Arab, nor red — the light-skinned — over black, nor black over red, except by taqwa. The verse and the sermon together close the door that lineage-pride, the boast of jahiliyyah, keeps trying to reopen.",
          bn: "নবী ﷺ এই আয়াতের বক্তব্য প্রচার করেছেন তাঁর জীবনের বৃহত্তম শ্রোতৃমণ্ডলীর সামনে। বিদায় হজের দিনগুলোর ভাষণে তিনি ﷺ ঘোষণা করেন — ইমাম আহমাদ সহীহ সনদে বর্ণনা করেছেন: কোনো আরবের শ্রেষ্ঠত্ব নেই অনারবের ওপর, অনারবেরও নেই আরবের ওপর; লাল (ফর্সা) বর্ণের নেই কালোর ওপর, কালোরও নেই লালের ওপর — তাকওয়া ছাড়া। আয়াত ও ভাষণ মিলে সেই দরজাটি বন্ধ করে দেয়, যা বংশ-অহংকার — জাহিলিয়াতের বড়াই — বারবার খুলতে চায়।",
        },
        {
          en: "Living the two verses means policing one small organ and one large instinct. The tongue: no relaying of the absent one's faults, and 104:1 pronounces woe upon every habitual slanderer and fault-hunter. The instinct: the quiet conviction that our people are inherently better. Both verses converge on the same discipline — treat the concealed as Allah's business and the different as a person to know, and judge no one's rank, including your own.",
          bn: "আয়াত দুটি নিয়ে বাঁচা মানে একটি ছোট অঙ্গ আর একটি বড় প্রবৃত্তিকে পাহারায় রাখা। জিভ: অনুপস্থিত মানুষের দোষ আর বয়ে বেড়ানো নয় — 104:1 ধ্বংস ঘোষণা করে প্রত্যেক অভ্যাসগত নিন্দুক ও ছিদ্রান্বেষীর ওপর। প্রবৃত্তি: এই নীরব প্রত্যয় যে আমাদের লোকেরাই জন্মগতভাবে ভালো। দুটি আয়াতই এক অভিন্ন অনুশীলনে মেলে — গোপন বিষয়কে আল্লাহর এখতিয়ার মানুন, ভিন্ন মানুষকে চেনার মতো একজন মানুষ ভাবুন, আর কারও মর্যাদার রায় দেবেন না — নিজেরটারও নয়।",
        },
      ],
    },
  ],
},
'62:9': {
  sections: [
    {
      h: { en: "When the Call Sounds", bn: "যখন আহ্বান ধ্বনিত হয়" },
      p: [
        {
          en: "The verse legislates a weekly interruption: when the call is made for the prayer on the day of Jumu'ah, proceed to the remembrance of Allah and leave the sale. The surah itself is named for this passage. Two commands, one positive and one negative, hang on one trigger — the adhan — and the example chosen for what must be dropped is not something sinful. It is trade: lawful, productive, praised elsewhere, and precisely therefore the real test.",
          bn: "আয়াতটি একটি সাপ্তাহিক বিরতির বিধান দেয়: জুমার দিনে যখন নামাযের আহ্বান দেওয়া হয়, তখন আল্লাহর স্মরণের দিকে অগ্রসর হও এবং বেচাকেনা ছেড়ে দাও। সূরাটির নামই এই অংশ থেকে। একটি ইতিবাচক ও একটি নেতিবাচক — দুটি আদেশ ঝুলছে একটি সংকেতে — আযান — আর যা ছাড়তে হবে তার উদাহরণ হিসেবে বেছে নেওয়া হয়েছে গুনাহের কিছু নয়। বেছে নেওয়া হয়েছে বাণিজ্য: হালাল, উৎপাদনশীল, অন্যত্র প্রশংসিত — এবং ঠিক সে কারণেই আসল পরীক্ষা।",
        },
        {
          en: "The verse ends in the vocabulary of commerce it has just suspended: dhalikum khayrun lakum, that is better for you, if you only knew. To merchants it speaks as merchants — compare the two deals. What looks like an hour of lost margin is, on the true ledger, the better bargain. The clause in kuntum ta'lamun, if you only knew, quietly says that this arithmetic is exactly what people fail to know.",
          bn: "আয়াত শেষ হয় সেই বাণিজ্যেরই শব্দভান্ডারে, যাকে সে এইমাত্র স্থগিত করেছে: যালিকুম খাইরুল লাকুম — এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে। ব্যবসায়ীদের সঙ্গে সে কথা বলে ব্যবসায়ীর ভাষায় — দুটি চুক্তি মিলিয়ে দেখো। যা দেখতে এক ঘণ্টার মুনাফা-হারানো মনে হয়, আসল খতিয়ানে তা-ই লাভজনক সওদা। ইন কুনতুম তা'লামুন — যদি তোমরা জানতে — বাক্যাংশটি চুপচাপ বলে দেয়: এই পাটিগণিতটিই মানুষ জানতে ব্যর্থ হয়।",
        },
      ],
    },
    {
      h: { en: "Sa'y Is of the Heart", bn: "সা'ঈ অন্তরের ব্যাপার" },
      p: [
        {
          en: "Fas'aw ila dhikrillah — the verb sa'a means to proceed with earnest purpose, and the commentators are careful about what it does not mean here: sprinting. The Prophet ﷺ, in the hadith agreed upon by al-Bukhari and Muslim, told believers to walk to prayer with tranquility and not to come running. So the hurry this verse commands is a hurry of intention and priority — the heart runs while the feet walk.",
          bn: "ফাসআও ইলা যিকরিল্লাহ — সাআ ক্রিয়াপদের অর্থ আন্তরিক উদ্দেশ্য নিয়ে অগ্রসর হওয়া; আর এখানে এর অর্থ কী নয়, সে বিষয়ে মুফাসসিরগণ সতর্ক: দৌড়ানো নয়। নবী ﷺ বুখারী ও মুসলিমে একমত হাদীসে মুমিনদের বলেছেন নামাযে ধীরস্থিরভাবে হেঁটে আসতে, দৌড়ে না আসতে। সুতরাং এই আয়াত যে তাড়ার আদেশ দেয়, তা নিয়ত ও অগ্রাধিকারের তাড়া — অন্তর দৌড়ায়, পা হাঁটে।",
        },
        {
          en: "What the hurry displaces is procrastination dressed as busyness: one more customer, one more message, arriving at the sermon's end. Proceeding to the dhikr of Allah — which the commentators read as the khutbah and the prayer together — means arranging the day around the appointment rather than squeezing the appointment into the day. The verse's subject is not speed at the last minute but structure decided in advance.",
          bn: "এই তাড়া যা সরিয়ে দেয় তা হলো ব্যস্ততার পোশাক পরা গড়িমসি: আর একজন ক্রেতা, আর একটি বার্তা, খুতবার শেষ প্রান্তে পৌঁছানো। আল্লাহর যিকরের দিকে অগ্রসর হওয়া — মুফাসসিরগণ যাকে পড়েন খুতবা ও নামায মিলিয়ে — মানে দিনটিকে সাজানো এই সাক্ষাতের চারপাশে; সাক্ষাৎটিকে দিনের ফাঁকে গুঁজে দেওয়া নয়। আয়াতের বিষয় শেষ মিনিটের গতি নয় — আগে থেকে ঠিক করা বিন্যাস।",
        },
      ],
    },
    {
      h: { en: "Trade Stopped, Trade Restarted", bn: "বাণিজ্য থামে, আবার চলে" },
      p: [
        {
          en: "The next verse completes the system: when the prayer has ended, 62:10 says, disperse through the land and seek from the bounty of Allah — and remember Allah much, that you may succeed. The same voice that stopped commerce restarts it within a sentence of the prayer's close. Islam is not embarrassed by markets; it ranks them. Trade is bounty from Allah, sought lawfully all week, and set down for one summons.",
          bn: "পরের আয়াতটি ব্যবস্থাটি সম্পূর্ণ করে: নামায শেষ হলে — 62:10 বলে — যমীনে ছড়িয়ে পড়ো এবং আল্লাহর অনুগ্রহ থেকে খোঁজো, আর আল্লাহকে বেশি বেশি স্মরণ করো, যেন তোমরা সফল হও। যে কণ্ঠ বাণিজ্য থামিয়েছিল, সেই কণ্ঠই নামায শেষের এক বাক্যের মধ্যে তা আবার চালু করে। ইসলাম বাজার নিয়ে বিব্রত নয়; সে বাজারের ক্রম ঠিক করে দেয়। বাণিজ্য আল্লাহরই অনুগ্রহ — সারা সপ্তাহ হালালভাবে খোঁজার জিনিস, আর একটি আহ্বানের জন্য নামিয়ে রাখার জিনিস।",
        },
        {
          en: "Notice also what travels back out with the traders: remember Allah much, that you may succeed. The dhikr commanded inside the mosque is carried into the marketplace, so the boundary the adhan drew was never between religion and work but between forgetting and remembering. 24:37 describes the finished product of this training: men whom neither trade nor sale distracts from the remembrance of Allah, the prayer, and the giving of zakat.",
          bn: "আরও লক্ষ করুন, ব্যবসায়ীদের সঙ্গে কী ফিরে বাইরে যায়: আল্লাহকে বেশি বেশি স্মরণ করো, যেন তোমরা সফল হও। মসজিদের ভেতরে আদিষ্ট যিকর বহন করে নিয়ে যাওয়া হয় বাজারে — অর্থাৎ আযান যে সীমারেখা টেনেছিল তা কখনোই দ্বীন আর কাজের মাঝে ছিল না; ছিল ভুলে থাকা আর স্মরণে থাকার মাঝে। 24:37 এই প্রশিক্ষণের চূড়ান্ত ফলটির বর্ণনা দেয়: এমন মানুষ, যাদের ব্যবসা-বাণিজ্য বা বেচাকেনা আল্লাহর স্মরণ, নামায কায়েম ও যাকাত প্রদান থেকে গাফেল করে না।",
        },
      ],
    },
    {
      h: { en: "The Caravan That Emptied the Mosque", bn: "যে কাফেলা মসজিদ খালি করেছিল" },
      p: [
        {
          en: "The passage ends with an incident the sahih collections preserve. Jabir (RA) relates that while the Prophet ﷺ was delivering the khutbah on Jumu'ah, a trade caravan arrived; the people slipped out toward it until only twelve remained. Then 62:11 came down: when they saw trade or diversion they broke away to it and left you standing. Say: what is with Allah is better than diversion and trade, and Allah is the best of providers.",
          bn: "অংশটি শেষ হয় এমন এক ঘটনায়, যা সহীহ গ্রন্থগুলো সংরক্ষণ করেছে। জাবির (রাঃ) বর্ণনা করেন: নবী ﷺ জুমার খুতবা দিচ্ছিলেন, এমন সময় এক বাণিজ্য-কাফেলা এসে পৌঁছাল; মানুষ সেদিকে বেরিয়ে যেতে লাগল — শেষে মাত্র বারোজন রইলেন। তখন 62:11 নাযিল হলো: তারা যখন ব্যবসা বা কৌতুক দেখল, সেদিকে ভেঙে ছুটে গেল আর আপনাকে দাঁড়ানো রেখে গেল। বলুন: আল্লাহর কাছে যা আছে তা কৌতুক ও ব্যবসার চেয়ে উত্তম, আর আল্লাহই সর্বোত্তম রিযিকদাতা।",
        },
        {
          en: "The verse does not disown the community; it re-teaches it, and the honesty of its preservation is itself instruction — the Quran recorded the early community's stumble so that every later congregation would recognise the pull of the caravan in its own forms. The closing title settles the anxiety underneath the whole passage: Allah is the best of providers. The fear of missing provision was always the argument for leaving; the verse answers that argument at its root.",
          bn: "আয়াতটি সম্প্রদায়কে ত্যাজ্য করে না; নতুন করে শেখায় — আর এই ঘটনার সংরক্ষণের সততাই এক শিক্ষা: কুরআন প্রথম যুগের সম্প্রদায়ের হোঁচটটি লিখে রেখেছে, যেন পরবর্তী প্রতিটি জামাত নিজের নিজের রূপে কাফেলার টানটি চিনে নিতে পারে। শেষের উপাধিটি পুরো অংশের নিচে চাপা উদ্বেগটির মীমাংসা করে দেয়: আল্লাহই সর্বোত্তম রিযিকদাতা। রিযিক ফসকে যাওয়ার ভয়ই তো ছিল বেরিয়ে যাওয়ার যুক্তি; আয়াত সেই যুক্তির জবাব দেয় তার শিকড়ে।",
        },
      ],
    },
    {
      h: { en: "The Weekly Reset", bn: "সাপ্তাহিক পুনর্বিন্যাস" },
      p: [
        {
          en: "The Prophet ﷺ said, as Muslim relates, that the best day on which the sun rises is the day of Jumu'ah. The verse builds that rank into the week's structure: one hour in which every believer, whatever his trade, stands in the same rows for the same reminder. A community that keeps this appointment re-synchronises weekly — its wealth-seeking interrupted, its priorities re-declared aloud, its equality rehearsed in the standing lines.",
          bn: "নবী ﷺ বলেছেন — ইমাম মুসলিম বর্ণনা করেন — সূর্য ওঠে এমন দিনগুলোর মধ্যে সর্বোত্তম দিন জুমার দিন। আয়াতটি সেই মর্যাদাকে সপ্তাহের কাঠামোর ভেতরে গেঁথে দেয়: এমন এক ঘণ্টা, যখন প্রত্যেক মুমিন — তার পেশা যা-ই হোক — একই কাতারে দাঁড়ায় একই উপদেশ শুনতে। যে সম্প্রদায় এই সাক্ষাৎটি রক্ষা করে, তারা প্রতি সপ্তাহে নিজেদের নতুন করে মিলিয়ে নেয় — সম্পদের খোঁজে ছেদ পড়ে, অগ্রাধিকার উচ্চস্বরে নতুন করে ঘোষিত হয়, আর দাঁড়ানো কাতারে সাম্যের মহড়া চলে।",
        },
        {
          en: "The personal practice is to identify one's own caravan. For each person some particular busyness is hardest to put down when the call comes — a meeting, a shop hour, a feed refreshing itself. The verse asks that it be named honestly and set down deliberately, early rather than at the final minute, with the closing clause held in mind as a working belief: that is better for you, if you only knew.",
          bn: "ব্যক্তিগত অনুশীলন হলো নিজের কাফেলাটিকে শনাক্ত করা। প্রত্যেক মানুষের কাছে কোনো না কোনো নির্দিষ্ট ব্যস্ততা আছে, আহ্বান এলে যা নামিয়ে রাখা সবচেয়ে কঠিন — একটি মিটিং, দোকানের একটি প্রহর, নিজে নিজে রিফ্রেশ হতে থাকা একটি ফিড। আয়াত চায়, তাকে সৎভাবে নাম দেওয়া হোক এবং ইচ্ছাকৃতভাবে নামিয়ে রাখা হোক — শেষ মিনিটে নয়, আগেভাগে — আর শেষ বাক্যাংশটি মনে রাখা হোক এক কার্যকর বিশ্বাস হিসেবে: এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে।",
        },
      ],
    },
  ],
},
'33:21': {
  sections: [
    {
      h: { en: "Declared During a Siege", bn: "অবরোধের মধ্যে ঘোষিত" },
      p: [
        {
          en: "The verse does not float free; it sits in the middle of Surah al-Ahzab's account of the siege of Madinah. The passage around it describes eyes swerving and hearts reaching throats in 33:10, hypocrites saying Allah and His Messenger promised us only delusion in 33:12, and believers whose faith only grew at the sight of the armies in 33:22. Exactly there, the text says: in the Messenger of Allah you have an excellent example.",
          bn: "আয়াতটি শূন্যে ভাসে না; এটি বসে আছে সূরা আল-আহযাবে মদীনা অবরোধের বিবরণের ঠিক মাঝখানে। এর চারপাশের অংশ বর্ণনা করে: 33:10-এ চোখ বেঁকে যাওয়া আর কলিজা কণ্ঠাগত হওয়া, 33:12-এ মুনাফিকদের বলা — আল্লাহ ও তাঁর রাসূল আমাদের কেবল ধোঁকার প্রতিশ্রুতিই দিয়েছেন, আর 33:22-এ সেই মুমিনরা, সৈন্যবাহিনী দেখে যাদের ঈমান কেবল বেড়েই গিয়েছিল। ঠিক সেখানেই কুরআন বলে: আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে উত্তম আদর্শ।",
        },
        {
          en: "The placement fixes the meaning. The uswa hasanah was declared not over a serene teaching scene but over a Prophet ﷺ enduring siege with his companions — sound reports describe him digging the trench and carrying its earth with them, hungry as they were hungry. The example offered is a whole man under full pressure: his steadfastness, his labour alongside his people, his refusal of despair while the confederates surrounded the city.",
          bn: "এই অবস্থানই অর্থ ঠিক করে দেয়। উসওয়া হাসানা ঘোষিত হয়েছিল কোনো প্রশান্ত পাঠদানের দৃশ্যের ওপরে নয় — সাহাবীদের সঙ্গে অবরোধ সহ্য করতে থাকা এক নবী ﷺ-এর ওপরে; সহীহ বর্ণনাগুলো তাঁকে দেখায় তাদের সঙ্গে পরিখা খুঁড়ছেন, তার মাটি বইছেন — তারা যেমন ক্ষুধার্ত ছিলেন তিনিও তেমনি ক্ষুধার্ত। যে আদর্শ পেশ করা হয়েছে তা পূর্ণ চাপের মধ্যে এক সম্পূর্ণ মানুষ: তাঁর অবিচলতা, নিজের মানুষদের পাশে তাঁর শ্রম, আর সম্মিলিত বাহিনী শহর ঘিরে থাকা অবস্থাতেও হতাশাকে তাঁর প্রত্যাখ্যান।",
        },
      ],
    },
    {
      h: { en: "The Word Uswa", bn: "উসওয়া শব্দটি" },
      p: [
        {
          en: "An uswa is a pattern one traces — the model a person moulds their conduct upon. The Quran uses the phrase uswatun hasanah for only one other figure: Ibrahim (AS) and those with him, in 60:4 and 60:6, for their clean break from the worship of other than Allah. In this verse the pattern is the Messenger of Allah ﷺ himself — not a list of rules extracted from him but the lived shape of the man, laqad kana lakum, established for you as fact.",
          bn: "উসওয়া হলো সেই নকশা, যা ধরে ধরে আঁকা হয় — যে ছাঁচে মানুষ নিজের আচরণ গড়ে। কুরআন উসওয়াতুন হাসানা বাক্যবন্ধটি আর মাত্র একজনের জন্য ব্যবহার করেছে: ইবরাহীম (আঃ) ও তাঁর সঙ্গীদের জন্য — 60:4 ও 60:6-এ — আল্লাহ ছাড়া অন্যের ইবাদত থেকে তাঁদের স্পষ্ট বিচ্ছেদের কারণে। এই আয়াতে নকশাটি স্বয়ং আল্লাহর রাসূল ﷺ — তাঁর থেকে নিংড়ে নেওয়া নিয়মের তালিকা নয়, বরং মানুষটির যাপিত অবয়ব: লাকাদ কানা লাকুম — তোমাদের জন্য প্রতিষ্ঠিত সত্য হিসেবে।",
        },
        {
          en: "A pattern differs from a biography. A biography is read; a pattern is traced, act by act, onto one's own conduct. The verse's claim is that the Prophet's ﷺ way of dealing — with fear, hunger, family, money, enemies, defeat and victory — is transferable, designed for imitation by ordinary people. That is why the community preserved the Sunnah with such care: it understood the record as a template it was commanded to use, not a treasure it was merely commanded to admire.",
          bn: "নকশা আর জীবনী এক নয়। জীবনী পড়া হয়; নকশা আঁকা হয় — কাজে কাজে, নিজের আচরণের ওপর। আয়াতের দাবি হলো: ভয়, ক্ষুধা, পরিবার, অর্থ, শত্রু, পরাজয় ও বিজয়ের সঙ্গে নবী ﷺ-এর আচরণের ধরনটি হস্তান্তরযোগ্য — সাধারণ মানুষের অনুকরণের জন্যই পরিকল্পিত। এ কারণেই উম্মত সুন্নাহকে এত যত্নে সংরক্ষণ করেছে: সে এই নথিকে বুঝেছে ব্যবহারের আদেশপ্রাপ্ত এক ছাঁচ হিসেবে — কেবল মুগ্ধ হওয়ার আদেশপ্রাপ্ত কোনো রত্নভান্ডার হিসেবে নয়।",
        },
      ],
    },
    {
      h: { en: "Three Keys to Benefit", bn: "উপকৃত হওয়ার তিন চাবি" },
      p: [
        {
          en: "The verse then restricts who actually profits: li-man kana yarjullaha wal-yawmal-akhira wa dhakarallaha kathiran — for whoever hopes in Allah and the Last Day and remembers Allah much. The example stands open to all, but it transfers only to a person already oriented: hoping in Allah, accountable to a Last Day, kept awake by abundant remembrance. Without those, the sirah shrinks into history — admired, quoted, and not followed.",
          bn: "এরপর আয়াত সীমিত করে দেয়, প্রকৃত লাভ কার: লিমান কানা ইয়ারজুল্লাহা ওয়াল ইয়াওমাল আখিরা ওয়া যাকারাল্লাহা কাসীরা — তার জন্য, যে আল্লাহ ও শেষ দিনের আশা রাখে এবং আল্লাহকে বেশি বেশি স্মরণ করে। আদর্শটি সবার জন্য খোলা, কিন্তু তা স্থানান্তরিত হয় কেবল আগে থেকে অভিমুখী মানুষের মধ্যে: যে আল্লাহর প্রতি আশাবাদী, শেষ দিনের কাছে জবাবদিহ, প্রচুর স্মরণে জাগ্রত। এসব ছাড়া সীরাত সংকুচিত হয়ে ইতিহাস হয়ে যায় — প্রশংসিত, উদ্ধৃত, কিন্তু অনুসৃত নয়।",
        },
        {
          en: "The three conditions also explain how imitation survives cost. Following the Prophet ﷺ at the trench meant hunger and fear; hope in Allah and the Last Day is what makes such a pattern rational to copy. The one who expects nothing beyond this world will imitate only what pays within it. The verse is candid about this: the example is excellent absolutely, but it is usable in proportion to the imitator's hope and remembrance.",
          bn: "এই তিন শর্ত এও ব্যাখ্যা করে, মূল্য দিতে হলেও অনুকরণ কীভাবে টেকে। পরিখার দিনে নবী ﷺ-কে অনুসরণের অর্থ ছিল ক্ষুধা ও ভয়; আল্লাহ ও শেষ দিনের আশাই এমন নকশা অনুলিপি করাকে যুক্তিসঙ্গত করে। যে এই দুনিয়ার বাইরে কিছুই প্রত্যাশা করে না, সে কেবল সেটুকুই অনুকরণ করবে যা এই দুনিয়াতেই লাভ দেয়। আয়াত এ বিষয়ে অকপট: আদর্শটি নিরঙ্কুশভাবেই উত্তম, কিন্তু তা ব্যবহারযোগ্য অনুকরণকারীর আশা ও স্মরণের অনুপাতে।",
        },
      ],
    },
    {
      h: { en: "His Character Was the Quran", bn: "তাঁর চরিত্রই ছিল কুরআন" },
      p: [
        {
          en: "Asked to describe the Prophet's ﷺ character, Aisha (RA) gave the answer Muslim preserves: his character was the Quran. The Book commanding justice, mercy, honesty and restraint had in him a walking demonstration. 68:4 had already sworn to it — indeed, you are upon a magnificent character. So the uswa is not an addition to the Quran but the Quran made visible; imitating him ﷺ and obeying the Book are one motion.",
          bn: "নবী ﷺ-এর চরিত্রের বর্ণনা চাওয়া হলে আয়েশা (রাঃ) সেই উত্তরটি দেন যা ইমাম মুসলিম সংরক্ষণ করেছেন: তাঁর চরিত্রই ছিল কুরআন। ইনসাফ, রহমত, সততা ও সংযমের আদেশ দেওয়া কিতাবটির তাঁর মধ্যে ছিল এক চলমান প্রদর্শনী। 68:4 আগেই তার সাক্ষ্য দিয়ে রেখেছে — নিশ্চয় আপনি মহান চরিত্রের ওপর প্রতিষ্ঠিত। সুতরাং উসওয়া কুরআনের ওপর কোনো সংযোজন নয়, বরং দৃশ্যমান করা কুরআন; তাঁকে ﷺ অনুকরণ করা আর কিতাব মান্য করা — একই গতি।",
        },
        {
          en: "3:31 makes the imitation a test of love: say, if you love Allah, then follow me; Allah will love you and forgive your sins. Claimed love of Allah is verified by following the pattern, and answered — the verse promises — by Allah's love in return. This turns the study of his ﷺ life from an optional devotion into the appointed route by which affection for Allah becomes something demonstrable.",
          bn: "3:31 অনুকরণকে ভালোবাসার পরীক্ষা বানিয়ে দেয়: বলুন, তোমরা যদি আল্লাহকে ভালোবাসো তবে আমার অনুসরণ করো; আল্লাহ তোমাদের ভালোবাসবেন এবং তোমাদের গুনাহ ক্ষমা করবেন। আল্লাহকে ভালোবাসার দাবি যাচাই হয় নকশাটি অনুসরণে, আর তার জবাব আসে — আয়াতের প্রতিশ্রুতি — বিনিময়ে আল্লাহর ভালোবাসায়। এতে তাঁর ﷺ জীবনের অধ্যয়ন ঐচ্ছিক ভক্তি থেকে পরিণত হয় সেই নির্ধারিত পথে, যে পথে আল্লাহর প্রতি অনুরাগ প্রমাণযোগ্য কিছু হয়ে ওঠে।",
        },
      ],
    },
    {
      h: { en: "Tracing the Pattern", bn: "নকশা ধরে চলা" },
      p: [
        {
          en: "Imitation begins in the ordinary, because most of his ﷺ recorded life is ordinary: how he spoke to servants and children, kept promises, greeted, ate, thanked, repaid debts, controlled anger, visited the sick. Choosing one verified habit and practising it until it holds is following this verse; admiring the whole and adopting nothing is not. The Companions (RA) learned him piecemeal and lifelong — the pattern was traced in small, repeated strokes.",
          bn: "অনুকরণ শুরু হয় সাধারণের মধ্যে, কারণ তাঁর ﷺ লিপিবদ্ধ জীবনের অধিকাংশই সাধারণ: খাদেম ও শিশুদের সঙ্গে তিনি কেমন করে কথা বলতেন, প্রতিশ্রুতি রাখতেন, সালাম দিতেন, খেতেন, শুকরিয়া করতেন, ঋণ শোধ করতেন, রাগ দমন করতেন, অসুস্থকে দেখতে যেতেন। একটি যাচাই করা অভ্যাস বেছে নিয়ে তা স্থায়ী হওয়া পর্যন্ত চর্চা করাই এই আয়াতের অনুসরণ; পুরোটার প্রশংসা করে কিছুই গ্রহণ না করা তা নয়। সাহাবীগণ (রাঃ) তাঁকে শিখেছেন টুকরো টুকরো করে, আজীবন ধরে — নকশাটি আঁকা হয়েছে ছোট ছোট, বারবার টানা রেখায়।",
        },
        {
          en: "And the verse's context adds the harder half: the example includes conduct under siege. Fear, shortage and public panic have a Prophetic pattern too — steadiness, labour alongside others, hope spoken aloud when arguments for despair were plentiful. Whoever hopes in Allah and the Last Day is told where to look when the armies gather, whatever form they take in a given life: in the Messenger of Allah ﷺ there is an excellent example.",
          bn: "আর আয়াতের প্রেক্ষাপট যোগ করে কঠিনতর অর্ধেকটি: আদর্শের মধ্যে অবরোধকালের আচরণও আছে। ভয়, অভাব আর গণআতঙ্কেরও একটি নববী নকশা আছে — স্থিরতা, অন্যদের পাশে শ্রম, আর হতাশার যুক্তি প্রচুর থাকা অবস্থাতেও উচ্চস্বরে বলা আশা। যে আল্লাহ ও শেষ দিনের আশা রাখে, তাকে বলে দেওয়া হয়েছে সৈন্যদল জড়ো হলে কোথায় তাকাতে হবে — নিজ জীবনে সেই বাহিনীর রূপ যা-ই হোক: আল্লাহর রাসূল ﷺ-এর মধ্যেই রয়েছে উত্তম আদর্শ।",
        },
      ],
    },
  ],
},
'21:107': {
  sections: [
    {
      h: { en: "A Mission Defined by Exclusion", bn: "একটিমাত্র পরিচয়ে সংজ্ঞায়িত মিশন" },
      p: [
        {
          en: "Arabic has a construction that defines by exclusion: ma... illa, not... except. This verse spends it on the final Messenger ﷺ: We did not send you except as a mercy to the worlds. Everything the mission is, the sentence claims, falls inside mercy; whatever stands outside mercy is not the mission. Mercy here is not one of the message's qualities, listed beside others. It is the message's definition, stated by the One who sent it.",
          bn: "আরবিতে এমন এক গঠন আছে যা বর্জনের মাধ্যমে সংজ্ঞা দেয়: মা... ইল্লা — নয়... ছাড়া। এই আয়াত সেই গঠনটি ব্যয় করে শেষ রাসূল ﷺ-এর ওপর: আমি আপনাকে পাঠাইনি সমগ্র জগতের জন্য রহমত ছাড়া। বাক্যটির দাবি: মিশন যা কিছু, তার সবটাই রহমতের ভেতরে; রহমতের বাইরে যা দাঁড়িয়ে, তা মিশন নয়। এখানে রহমত বার্তার অনেক গুণের একটি নয়, যা অন্যগুলোর পাশে তালিকাভুক্ত। এটি বার্তাটির সংজ্ঞা — বলেছেন তিনিই, যিনি তা পাঠিয়েছেন।",
        },
        {
          en: "The verse arrives as a summation. Surah al-Anbiya has spent its length on prophet after prophet — Ibrahim, Lut, Nuh, Dawud, Sulayman, Ayyub, Yunus, Zakariyya (AS) — each sent to a people, each story a rescue. Near the surah's close, the last of the line is announced with a scope none before him carried: not to a city or a century, but lil-alamin, to the worlds. 34:28 states the same reach: to all mankind entirely.",
          bn: "আয়াতটি আসে এক সারসংক্ষেপ হিসেবে। সূরা আল-আম্বিয়া তার দৈর্ঘ্য জুড়ে বলেছে নবীর পর নবীর কথা — ইবরাহীম, লূত, নূহ, দাউদ, সুলাইমান, আইয়ুব, ইউনুস, যাকারিয়া (আঃ) — প্রত্যেকে প্রেরিত এক-একটি জাতির কাছে, প্রতিটি কাহিনি এক-একটি উদ্ধার। সূরার শেষপ্রান্তে এই ধারার সর্বশেষজনকে ঘোষণা করা হয় এমন এক ব্যাপ্তিতে, যা তাঁর আগে কেউ বহন করেননি: কোনো নগরী বা শতাব্দীর জন্য নয় — লিল-আলামীন, সমগ্র জগতের জন্য। 34:28 একই ব্যাপ্তির কথা বলে: সমগ্র মানবজাতির জন্য।",
        },
      ],
    },
    {
      h: { en: "To the Worlds", bn: "সকল জগতের জন্য" },
      p: [
        {
          en: "Al-alamin is deliberately vast — all peoples, all generations, and the commentators include the jinn, to whom the Quran was also recited. 7:158 has the Prophet ﷺ declare it himself: say, O mankind, I am the Messenger of Allah to you all. The letters he ﷺ sent to the rulers of the surrounding empires acted on that scope. No previous prophet's mission is described in the Quran with this universality; his ﷺ mercy has no border drawn around it.",
          bn: "আল-আলামীন ইচ্ছাকৃতভাবেই বিশাল — সব জাতি, সব প্রজন্ম, আর মুফাসসিরগণ এতে জিনদেরও ধরেন, যাদের কাছেও কুরআন তিলাওয়াত করা হয়েছিল। 7:158-এ নবী ﷺ নিজেই তা ঘোষণা করেন: বলুন, হে মানবজাতি, আমি তোমাদের সবার কাছে আল্লাহর রাসূল। আশপাশের সাম্রাজ্যগুলোর শাসকদের কাছে তাঁর ﷺ পাঠানো চিঠিগুলো সেই পরিধির ওপরই আমল ছিল। আগের কোনো নবীর মিশন কুরআনে এই সর্বজনীনতায় বর্ণিত হয়নি; তাঁর ﷺ রহমতের চারপাশে কোনো সীমান্তরেখা টানা নেই।",
        },
        {
          en: "The mufassirun, following what is related from Ibn Abbas (RA), extend the mercy even to those who rejected: earlier nations that denied their messengers were destroyed by uprooting punishments, while the deniers of this ummah's age were spared that immediate ruin for his ﷺ sake. Whoever accepted found the mercy in full, guidance now and salvation later; whoever refused still lived inside its shade, granted time that earlier deniers were not granted.",
          bn: "মুফাসসিরগণ — ইবনে আব্বাস (রাঃ) থেকে বর্ণিত কথার অনুসরণে — এই রহমত প্রত্যাখ্যানকারীদের পর্যন্তও প্রসারিত করেন: আগের যেসব জাতি তাদের রাসূলদের অস্বীকার করেছিল তারা সমূলে উৎপাটনকারী শাস্তিতে ধ্বংস হয়েছিল, অথচ এই উম্মতের যুগের অস্বীকারকারীরা তাঁর ﷺ কারণে সেই তাৎক্ষণিক ধ্বংস থেকে রেহাই পেয়েছে। যে গ্রহণ করেছে সে রহমত পেয়েছে পূর্ণরূপে — এখনই হিদায়াত, পরে মুক্তি; আর যে প্রত্যাখ্যান করেছে সেও এর ছায়াতেই বেঁচে থেকেছে — এমন অবকাশ পেয়ে, যা আগের অস্বীকারকারীদের দেওয়া হয়নি।",
        },
      ],
    },
    {
      h: { en: "Mercy in His Conduct", bn: "তাঁর আচরণে রহমত" },
      p: [
        {
          en: "The definition held under test. When Ta'if had answered his ﷺ preaching with injury, the angel of the mountains came, as al-Bukhari and Muslim relate, offering to crush his people between the two mountains, al-Akhshabayn. He ﷺ refused, hoping that Allah would bring forth from their descendants those who would worship Him alone. At the one moment he ﷺ could have traded mercy for vengeance, with an angel awaiting orders, he chose the mission's definition.",
          bn: "সংজ্ঞাটি পরীক্ষার মধ্যেও টিকে ছিল। তায়েফ যখন তাঁর ﷺ দাওয়াতের জবাব দিয়েছিল আঘাতে, তখন পাহাড়ের ফেরেশতা এলেন — বুখারী ও মুসলিম বর্ণনা করেন — তাঁর কওমকে দুই পাহাড় — আল-আখশাবাইন — এর মাঝে পিষে দেওয়ার প্রস্তাব নিয়ে। তিনি ﷺ অস্বীকার করলেন — এই আশায় যে আল্লাহ তাদের বংশধরদের মধ্য থেকে এমন মানুষ বের করবেন, যারা এককভাবে তাঁরই ইবাদত করবে। যে একটি মুহূর্তে তিনি ﷺ রহমতের বদলে প্রতিশোধ নিতে পারতেন — আদেশের অপেক্ষায় এক ফেরেশতা দাঁড়িয়ে — তিনি বেছে নিলেন মিশনের সংজ্ঞাটিই।",
        },
        {
          en: "Muslim relates that when he ﷺ was asked to curse the mushrikin, he answered: I was not sent as one who curses; I was only sent as a mercy. The reply consciously echoes this verse's grammar — sent only as. 9:128 describes his ﷺ posture toward people: grieved by what distresses you, anxiously eager for you, and to the believers ra'uf rahim — kind and merciful, two names the Quran elsewhere gives to Allah Himself.",
          bn: "ইমাম মুসলিম বর্ণনা করেন: তাঁকে ﷺ মুশরিকদের অভিশাপ দিতে বলা হলে তিনি উত্তর দেন — আমাকে অভিশাপকারী হিসেবে পাঠানো হয়নি; আমাকে তো পাঠানো হয়েছে কেবল রহমত হিসেবে। উত্তরটি সচেতনভাবে এই আয়াতের ব্যাকরণেরই প্রতিধ্বনি — কেবল... হিসেবেই প্রেরিত। 9:128 মানুষের প্রতি তাঁর ﷺ ভঙ্গিটি বর্ণনা করে: তোমাদের কষ্ট তাঁকে পীড়া দেয়, তিনি তোমাদের কল্যাণে ব্যাকুল, আর মুমিনদের প্রতি রাউফ ও রাহীম — স্নেহশীল ও পরম দয়ালু — যে দুটি নাম কুরআন অন্যত্র স্বয়ং আল্লাহকে দিয়েছে।",
        },
      ],
    },
    {
      h: { en: "Mercy Built Into the Message", bn: "বার্তার ভেতরে গাঁথা রহমত" },
      p: [
        {
          en: "The mercy is not only in the man; it is in what he brought. A law with ease built into its foundations — burdens sized to capacity as 2:286 states, hardship lifted in travel and illness, repentance open until death. Guidance itself is the greatest mercy the verse intends: being told, reliably, what the Lord of the worlds wants. And 3:159 names mercy as the very texture of his ﷺ leadership: by mercy from Allah you were lenient with them.",
          bn: "রহমত কেবল মানুষটির মধ্যে নয়; তিনি যা এনেছেন তার মধ্যেও। এমন এক বিধান, যার ভিত্তিতেই সহজতা গাঁথা — 2:286 যেমন বলে, বোঝা সামর্থ্যের মাপে; সফর ও অসুস্থতায় কঠোরতা তুলে নেওয়া; তওবার দরজা মৃত্যু পর্যন্ত খোলা। আর হিদায়াত নিজেই সেই সর্বোচ্চ রহমত, যা আয়াতের অভিপ্রায়: নির্ভরযোগ্যভাবে জেনে যাওয়া — জগতসমূহের রব কী চান। আর 3:159 রহমতকে বলে তাঁর ﷺ নেতৃত্বের খোদ বুনন: আল্লাহর রহমতেই আপনি তাদের প্রতি কোমল হয়েছিলেন।",
        },
        {
          en: "The circle even exceeds the human. Sound hadith record reward in kindness to every living creature, his ﷺ command to sharpen the blade and spare the animal distress, and his ﷺ telling of a person forgiven for giving water to a thirsty dog. Lil-alamin proved wide enough in practice to cover the treatment of animals, enemies, and everything between — a scope his ﷺ own conduct kept demonstrating was meant literally.",
          bn: "বৃত্তটি এমনকি মানুষকেও ছাড়িয়ে যায়। সহীহ হাদীসে লিপিবদ্ধ আছে প্রতিটি প্রাণীর প্রতি সদয়তায় সওয়াব, তাঁর ﷺ আদেশ — ছুরি ধার দিয়ে নাও, পশুকে কষ্ট দিয়ো না — আর তাঁর ﷺ শোনানো সেই ঘটনা: তৃষ্ণার্ত এক কুকুরকে পানি খাওয়ানোয় এক ব্যক্তিকে ক্ষমা করে দেওয়া হয়। লিল-আলামীন বাস্তবে এতটাই প্রশস্ত প্রমাণিত হয়েছে যে তা ঢেকে নেয় পশুর সঙ্গে আচরণ, শত্রুর সঙ্গে আচরণ, আর এর মাঝের সবকিছু — তাঁর ﷺ নিজের আচরণই বারবার দেখিয়ে গেছে, ব্যাপ্তিটি আক্ষরিক অর্থেই বোঝানো হয়েছিল।",
        },
      ],
    },
    {
      h: { en: "Carrying What He Carried", bn: "তিনি যা বহন করেছেন তা বহন করা" },
      p: [
        {
          en: "The verse quietly audits everyone who represents this religion. If the message itself is mercy to the worlds, then a carrier of the message who is habitually harsh is misrepresenting the cargo. The Prophet ﷺ said, in the sound hadith, that those who show mercy are shown mercy by the Most Merciful: show mercy to those on the earth, and He who is above the heaven will show mercy to you.",
          bn: "আয়াতটি নীরবে নিরীক্ষা করে তাদের প্রত্যেককে, যারা এই দ্বীনের প্রতিনিধিত্ব করে। বার্তাটি নিজেই যদি জগতসমূহের জন্য রহমত হয়, তবে বার্তার এমন বাহক — যে অভ্যাসগতভাবে রূঢ় — সে আসলে মালামালের ভুল পরিচয় দিচ্ছে। নবী ﷺ সহীহ হাদীসে বলেছেন: দয়াশীলদের প্রতি পরম দয়াময় দয়া করেন; যমীনে যারা আছে তাদের প্রতি দয়া করো — আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।",
        },
        {
          en: "So the lived question the verse leaves behind is direct: does my way of carrying this faith feel like mercy to the people around me — family, neighbours, the difficult, the different, the still-unconvinced? The circle of one's compassion is a fair measure of how much of lil-alamin one has understood. Whoever carries this message forward carries mercy, or has misunderstood what he carries.",
          bn: "সুতরাং আয়াতটি যে যাপিত প্রশ্ন রেখে যায় তা সোজাসাপ্টা: আমি যেভাবে এই দ্বীন বহন করছি, তা কি আমার চারপাশের মানুষের কাছে রহমতের মতো লাগে — পরিবার, প্রতিবেশী, কঠিন মানুষ, ভিন্ন মানুষ, এখনো-না-মানা মানুষ? নিজের মমতার বৃত্তটিই একটি ন্যায্য মাপকাঠি — লিল-আলামীনের কতটুকু আমরা বুঝেছি তার। যে এই বার্তা সামনে বহন করে নেয়, সে রহমতই বহন করে — নয়তো সে যা বহন করছে তা-ই ভুল বুঝেছে।",
        },
      ],
    },
  ],
},
  '112:1-4': {
    sections: [
      {
        h: { en: "The Question It Answers", bn: "যে প্রশ্নের উত্তর এটি" },
        p: [
          {
            en: "The books of tafsir relate that questioners came to the Prophet ﷺ asking him to describe his Lord — to give His lineage, His ancestry, as one would describe a tribal chief. Surah al-Ikhlas came down as the answer. Whoever the askers were, the demand was the same: fit your Lord into the categories we use for creatures. The surah answers by refusing the categories themselves, one by one, until nothing creaturely is left in the idea of God.",
            bn: "তাফসীরের কিতাবসমূহ বর্ণনা করে, প্রশ্নকারীরা নবী ﷺ-এর কাছে এসে তাঁর রবের বর্ণনা চেয়েছিল — তাঁর বংশ, তাঁর কুল-পরিচয়, যেভাবে কোনো গোত্রপতির পরিচয় দেওয়া হয়। উত্তর হিসেবে নাযিল হয় সূরা আল-ইখলাস। প্রশ্নকারী যারাই হোক, দাবিটি ছিল একই: তোমার রবকে সেই ছাঁচে ফেলো, যে ছাঁচ আমরা সৃষ্টির জন্য ব্যবহার করি। সূরাটি উত্তর দেয় সেই ছাঁচগুলোকেই একে একে প্রত্যাখ্যান করে, যতক্ষণ না আল্লাহর ধারণায় সৃষ্টির কোনো বৈশিষ্ট্যই অবশিষ্ট থাকে।",
          },
          {
            en: "The surah is called al-Ikhlas, purity, though the word itself never appears in it; the name describes what the four verses do, purifying the idea of Allah from every borrowed image. Notice also its first word. Qul, say, means the Prophet ﷺ does not describe his Lord from his own imagination. The description is dictated to him, and through him to us, so that what we believe about Allah rests on revelation rather than guesswork.",
            bn: "সূরাটির নাম আল-ইখলাস — বিশুদ্ধতা — যদিও শব্দটি সূরার ভেতরে কোথাও নেই; নামটি বর্ণনা করে চারটি আয়াত কী করে: আল্লাহর ধারণাকে প্রতিটি ধার-করা চিত্র থেকে বিশুদ্ধ করে। প্রথম শব্দটিও লক্ষ করুন। কুল — বলুন — অর্থ নবী ﷺ নিজের কল্পনা থেকে তাঁর রবের বর্ণনা দেন না। বর্ণনাটি তাঁকে বলে দেওয়া হয়, এবং তাঁর মাধ্যমে আমাদের, যাতে আল্লাহ সম্পর্কে আমাদের বিশ্বাস অনুমানের ওপর নয়, ওহীর ওপর দাঁড়ায়।",
          },
        ],
      },
      {
        h: { en: "Ahad, Not Merely One", bn: "আহাদ — কেবল এক নয়" },
        p: [
          {
            en: "Arabic has an ordinary word for one, wahid, the first of a possible series. The surah instead says Ahad. Used in affirmation this word is reserved for Allah, and the commentators hear in it a oneness that admits no parts, no division and no second of its kind. He is not the first of a category with others behind Him; He is one in a way nothing else is one, unique in essence, attributes and right to worship.",
            bn: "আরবিতে এক বোঝাতে সাধারণ শব্দ আছে — ওয়াহিদ, সম্ভাব্য কোনো ধারার প্রথম। সূরাটি বরং বলে আহাদ। ইতিবাচক বাক্যে এই শব্দ আল্লাহর জন্যই সংরক্ষিত, আর মুফাসসিরগণ এতে শোনেন এমন এক একত্ব, যাতে কোনো অংশ নেই, কোনো বিভাজন নেই, আর তাঁর জাতের দ্বিতীয় কেউ নেই। তিনি কোনো শ্রেণির প্রথম নন, যার পেছনে আরও কেউ আছে; তিনি এমনভাবে এক, যেভাবে আর কিছুই এক নয় — সত্তায়, গুণাবলিতে ও ইবাদতের অধিকারে অনন্য।",
          },
          {
            en: "This is the same creed 2:163 states — your God is one God — and the same argument 21:22 compresses into a sentence: had there been gods besides Allah in the heavens and the earth, both would have fallen into ruin. Oneness in the Quran is never idle arithmetic. It is a claim about where worship, fear and hope may rightly go, and it tolerates no partner in any of them.",
            bn: "এ সেই একই আকীদা যা 2:163 ঘোষণা করে — তোমাদের ইলাহ এক ইলাহ — আর সেই একই যুক্তি যা 21:22 এক বাক্যে সংকুচিত করে: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে উভয়ই ধ্বংস হয়ে যেত। কুরআনে একত্ব কখনো নিছক গাণিতিক হিসাব নয়। এটি একটি দাবি — ইবাদত, ভয় ও আশা ন্যায্যত কোথায় যেতে পারে সে সম্পর্কে — এবং এর কোনোটিতেই এটি কোনো অংশীদার সহ্য করে না।",
          },
        ],
      },
      {
        h: { en: "The Name As-Samad", bn: "আস-সামাদ নামটি" },
        p: [
          {
            en: "The second verse gives a name that occurs nowhere else in the Quran: as-Samad. The early commentators explain it as the master to whom every matter is referred, the One all creatures need for existence and provision while He needs nothing at all. Ibn Abbas (RA) describes as-Samad as the one perfect in every attribute of majesty. Dependence, in other words, flows in one direction only, from everything that exists toward Him.",
            bn: "দ্বিতীয় আয়াতটি এমন একটি নাম দেয় যা কুরআনের আর কোথাও নেই: আস-সামাদ। প্রাথমিক যুগের মুফাসসিরগণ এর ব্যাখ্যা করেন: সেই কর্তা, যাঁর কাছে সব বিষয় ফিরিয়ে আনা হয়; যাঁকে সব সৃষ্টি অস্তিত্ব ও রিযিকের জন্য প্রয়োজন বোধ করে, অথচ তাঁর কিছুরই প্রয়োজন নেই। ইবনে আব্বাস (রাঃ) আস-সামাদের বর্ণনা দেন: মহিমার প্রতিটি গুণে যিনি পরিপূর্ণ। অর্থাৎ নির্ভরতা কেবল এক দিকেই প্রবাহিত — যা কিছু আছে সবকিছু থেকে তাঁর দিকে।",
          },
          {
            en: "Set the two names together and the surah's logic appears. Because He is Ahad, no one shares His station; because He is as-Samad, everyone stands in need of Him, as 35:15 says plainly: you are the ones in need of Allah, and Allah is the Free of need, the Praiseworthy. A being needed by all and needing none is exactly the One to whom prayer makes sense.",
            bn: "নাম দুটিকে পাশাপাশি রাখলে সূরার যুক্তিটি ফুটে ওঠে। তিনি আহাদ বলে তাঁর মর্যাদায় কারও অংশ নেই; তিনি আস-সামাদ বলে সবাই তাঁর মুখাপেক্ষী — যেমন 35:15 স্পষ্ট বলে: তোমরাই আল্লাহর মুখাপেক্ষী, আর আল্লাহ অভাবমুক্ত, প্রশংসিত। যাঁকে সবার প্রয়োজন অথচ যাঁর কাউকে প্রয়োজন নেই — প্রার্থনা ঠিক তাঁর কাছেই অর্থবহ।",
          },
        ],
      },
      {
        h: { en: "Neither Begetting Nor Born", bn: "জন্ম দেন না, জন্মও নেননি" },
        p: [
          {
            en: "He neither begets nor is begotten. The first negation answers everyone who assigned Allah offspring: the pagans who called the angels daughters of Allah, a claim 16:57 rejects, and those who claimed for Him a son, which 19:88-92 describes as a word so monstrous the heavens nearly rupture at it. The second negation closes the other direction: He has no origin, no beginning, no one before Him from whom He came.",
            bn: "তিনি জন্ম দেন না এবং জন্ম নেননি। প্রথম অস্বীকৃতি তাদের সবার জবাব যারা আল্লাহর প্রতি সন্তান আরোপ করেছে: মুশরিকরা ফেরেশতাদের আল্লাহর কন্যা বলত — যে দাবি 16:57 প্রত্যাখ্যান করে — আর যারা তাঁর জন্য পুত্র দাবি করেছে, যাকে 19:88-92 এমন ভয়ংকর কথা বলে বর্ণনা করে যে তাতে আসমান প্রায় ফেটে পড়ে। দ্বিতীয় অস্বীকৃতি অন্য দিকটি বন্ধ করে: তাঁর কোনো উৎস নেই, কোনো শুরু নেই, তাঁর আগে কেউ নেই যাঁর থেকে তিনি এসেছেন।",
          },
          {
            en: "The last verse seals it: and there is none comparable to Him. The Arabic ends on the word ahad again, so the surah closes on the note it opened with. 42:11 makes the same guard: there is nothing like Him, and He is the Hearing, the Seeing. Whatever image the imagination builds, the surah has already ruled it out; He is not that.",
            bn: "শেষ আয়াতটি সিলমোহর দেয়: আর তাঁর সমতুল্য কেউ নেই। আরবিতে শেষ শব্দটি আবারও আহাদ, ফলে সূরাটি যে সুরে শুরু হয়েছিল সেই সুরেই শেষ হয়। 42:11 একই রক্ষাকবচ দেয়: তাঁর মতো কিছুই নেই, আর তিনি সর্বশ্রোতা, সর্বদ্রষ্টা। কল্পনা যে চিত্রই গড়ুক, সূরাটি আগেই তা নাকচ করে দিয়েছে; তিনি তা নন।",
          },
        ],
      },
      {
        h: { en: "A Third of the Quran", bn: "কুরআনের এক-তৃতীয়াংশ" },
        p: [
          {
            en: "Al-Bukhari relates that the Prophet ﷺ said this surah is equal to a third of the Quran. Scholars have explained the weighing by the Quran's great themes — who Allah is, what He commands, and what He has done and will do — and this surah carries the first theme whole. Four short verses hold the entire doctrine of tawheed without one word to spare.",
            bn: "আল-বুখারী বর্ণনা করেন, নবী ﷺ বলেছেন এই সূরা কুরআনের এক-তৃতীয়াংশের সমান। আলিমগণ এই ওজনের ব্যাখ্যা করেছেন কুরআনের প্রধান বিষয়বস্তু দিয়ে — আল্লাহ কে, তিনি কী আদেশ করেন, এবং তিনি কী করেছেন ও করবেন — আর এই সূরাটি প্রথম বিষয়টিকে সম্পূর্ণ বহন করে। চারটি ছোট আয়াত একটি বাড়তি শব্দ ছাড়াই তাওহীদের গোটা আকীদা ধারণ করে।",
          },
          {
            en: "Al-Bukhari also relates the man who led prayer and ended every recitation with this surah; asked why, he said: because it is the description of the Most Merciful, and I love to recite it. The Prophet ﷺ said: tell him that Allah loves him. And Aisha (RA) reports that every night the Prophet ﷺ would recite this surah with the two surahs of refuge, blow into his palms and wipe over his body.",
            bn: "আল-বুখারী আরও বর্ণনা করেন সেই ব্যক্তির কথা, যিনি নামাযে ইমামতি করতেন এবং প্রতিটি তিলাওয়াত এই সূরা দিয়ে শেষ করতেন; কারণ জিজ্ঞেস করা হলে তিনি বলেন: কারণ এটি পরম করুণাময়ের বর্ণনা, আর আমি এটি পড়তে ভালোবাসি। নবী ﷺ বলেন: তাকে জানিয়ে দাও, আল্লাহ তাকে ভালোবাসেন। আর আয়েশা (রাঃ) বর্ণনা করেন, প্রতি রাতে নবী ﷺ এই সূরা ও আশ্রয়ের দুই সূরা পড়ে দুই হাতের তালুতে ফুঁ দিতেন এবং শরীরে বুলিয়ে নিতেন।",
          },
        ],
      },
      {
        h: { en: "Living Its Purity", bn: "এর বিশুদ্ধতা জীবনে ধারণ" },
        p: [
          {
            en: "Familiarity is the danger with a surah this short. Recited quickly, it becomes a sound; read slowly, it is four claims about reality, each one correcting something we quietly believe when afraid — that help lies with the powerful, that we are on our own, that God is far and vague. The surah replaces all of that with One who is near, needed by all and unlike anything.",
            bn: "এত ছোট সূরার বিপদ হলো অতিপরিচিতি। দ্রুত পড়লে এটি কেবল একটি ধ্বনি হয়ে যায়; ধীরে পড়লে এটি বাস্তবতা সম্পর্কে চারটি দাবি, যার প্রতিটি সংশোধন করে সেই বিশ্বাসগুলোকে যা ভয়ের সময় আমরা নীরবে পুষে রাখি — সাহায্য ক্ষমতাবানদের হাতে, আমরা একা, আল্লাহ দূরের ও অস্পষ্ট। সূরাটি এসবের জায়গায় বসায় এমন এক সত্তাকে, যিনি নিকটবর্তী, যাঁকে সবার প্রয়োজন এবং যিনি কোনো কিছুর মতো নন।",
          },
          {
            en: "Its practice is already built into a Muslim's day: in the voluntary prayers where the Prophet ﷺ loved to recite it, in the morning and evening remembrances, and before sleep. Carry its meaning with the words. When you ask, you are asking as-Samad, who owns what you need and is not wearied by your asking; and nothing you fear holds any share of His power.",
            bn: "এর চর্চা একজন মুসলিমের দিনে আগে থেকেই গাঁথা: নফল নামাযে, যেখানে নবী ﷺ এটি পড়তে ভালোবাসতেন, সকাল-সন্ধ্যার যিকিরে, আর ঘুমের আগে। শব্দের সঙ্গে অর্থটাও বহন করুন। আপনি যখন চান, তখন চাইছেন আস-সামাদের কাছে — আপনার প্রয়োজনের মালিক তিনিই, আর আপনার চাওয়া তাঁকে ক্লান্ত করে না; এবং আপনি যা ভয় করেন তার কোনোটিরই তাঁর ক্ষমতায় কোনো অংশ নেই।",
          },
        ],
      },
    ],
  },
  '1:1-5': {
    sections: [
      {
        h: { en: "The Surah Prayer Is Built On", bn: "যে সূরার ওপর নামায দাঁড়িয়ে" },
        p: [
          {
            en: "Al-Fatihah, the Opening, carries more names in the tradition than any other surah: Umm al-Kitab, the Mother of the Book, and as-Sab' al-Mathani, the seven oft-repeated, the title 15:87 gives it. Al-Bukhari relates that the Prophet ﷺ called it the greatest surah in the Quran. And its place is unlike any other: al-Bukhari and Muslim relate that there is no prayer for the one who does not recite the Opening of the Book.",
            bn: "আল-ফাতিহা — সূচনা — ঐতিহ্যে অন্য যেকোনো সূরার চেয়ে বেশি নাম বহন করে: উম্মুল কিতাব, কিতাবের জননী, এবং আস-সাবউল মাসানী, বারবার পঠিত সাতটি — যে উপাধি 15:87 এটিকে দেয়। আল-বুখারী বর্ণনা করেন, নবী ﷺ একে কুরআনের সর্বশ্রেষ্ঠ সূরা বলেছেন। আর এর অবস্থানও অনন্য: আল-বুখারী ও মুসলিম বর্ণনা করেন, যে ব্যক্তি কিতাবের সূচনা তিলাওয়াত করে না তার কোনো নামায নেই।",
          },
          {
            en: "A Muslim who prays the five daily prayers recites it at least seventeen times a day. Repetition on that scale is a teacher's device: whatever else is forgotten, this must not be. The first five verses, the portion before the request for guidance in 1:6-7, do one thing — they establish who Allah is and where we stand before we ask Him for anything.",
            bn: "যে মুসলিম পাঁচ ওয়াক্ত নামায পড়েন, তিনি দিনে অন্তত সতেরো বার এটি তিলাওয়াত করেন। এই মাত্রার পুনরাবৃত্তি একজন শিক্ষকের কৌশল: আর সব ভুলে গেলেও এটি ভোলা চলবে না। প্রথম পাঁচটি আয়াত — হিদায়াতের আবেদন 1:6-7 শুরুর আগের অংশটুকু — একটিই কাজ করে: কিছু চাওয়ার আগে প্রতিষ্ঠিত করে আল্লাহ কে, আর আমরা কোথায় দাঁড়িয়ে।",
          },
        ],
      },
      {
        h: { en: "Beginning in His Name", bn: "তাঁর নামে শুরু" },
        p: [
          {
            en: "Bismillah ar-Rahman ar-Rahim places every beginning under His name. The scholars genuinely differ over whether the basmalah is the first verse of al-Fatihah or a separate verse of blessing placed before it, and both positions are held by great authorities; the difference shows in whether an imam recites it aloud. What no one disputes is what it does: an act begun in His name is claimed for Him.",
            bn: "বিসমিল্লাহির রাহমানির রাহীম প্রতিটি সূচনাকে তাঁর নামের অধীনে রাখে। বাসমালা আল-ফাতিহার প্রথম আয়াত, নাকি এর আগে স্থাপিত বরকতের পৃথক একটি আয়াত — এ নিয়ে আলিমগণের মধ্যে প্রকৃত মতভেদ আছে, এবং উভয় অবস্থানই বড় ইমামদের গ্রহণ করা; পার্থক্যটি দেখা যায় ইমাম এটি সরবে পড়বেন কি না তাতে। যা নিয়ে কারও দ্বিমত নেই তা হলো এর কাজ: তাঁর নামে শুরু করা কাজ তাঁরই জন্য দাবি করা হয়।",
          },
          {
            en: "Ar-Rahman and ar-Rahim both come from the root of rahmah, mercy. The commentators distinguish them: ar-Rahman describes mercy as His very nature, vast and reaching everything, while ar-Rahim describes mercy in action, bestowed especially on the believers. Before the surah says one word about obligation or judgment, His mercy has already been named twice — and it will be named twice more.",
            bn: "আর-রাহমান ও আর-রাহীম উভয়ই রহমত ধাতু থেকে। মুফাসসিরগণ পার্থক্য করেন: আর-রাহমান বর্ণনা করে রহমতকে তাঁর স্বভাব হিসেবে — বিশাল, সবকিছুতে পৌঁছানো; আর আর-রাহীম বর্ণনা করে কর্মে প্রকাশিত রহমত, বিশেষভাবে মুমিনদের প্রতি প্রদত্ত। সূরাটি দায়িত্ব বা বিচার নিয়ে একটি শব্দ বলার আগেই তাঁর রহমতের নাম দুবার নেওয়া হয়ে গেছে — এবং আরও দুবার নেওয়া হবে।",
          },
        ],
      },
      {
        h: { en: "The Lord of All Worlds", bn: "সকল জগতের রব" },
        p: [
          {
            en: "Al-hamdu lillah. Hamd is wider than thanks: thanks answers a favour received, while hamd praises the one praised for what he is, favour or no favour. The definite article makes it total — all praise, whoever utters it and whatever prompts it, belongs in truth to Allah. The verse does not command us to praise; it states that praise is His, and the reciter simply joins a fact already in place.",
            bn: "আলহামদু লিল্লাহ। হামদ ধন্যবাদের চেয়ে ব্যাপক: ধন্যবাদ পাওয়া অনুগ্রহের জবাব, আর হামদ প্রশংসিত সত্তার প্রশংসা করে তিনি যা, তার জন্যই — অনুগ্রহ থাকুক বা না থাকুক। নির্দিষ্টতাসূচক আল শব্দটি একে সর্বব্যাপী করে — সব প্রশংসা, যে-ই উচ্চারণ করুক আর যে কারণেই করুক, প্রকৃতপক্ষে আল্লাহরই। আয়াতটি আমাদের প্রশংসা করতে আদেশ করে না; এটি ঘোষণা করে প্রশংসা তাঁরই — পাঠক কেবল আগে থেকে প্রতিষ্ঠিত একটি সত্যে যোগ দেয়।",
          },
          {
            en: "Rabb, Lord, gathers meanings no single English word holds: owner, master, sustainer, and the one who raises something stage by stage toward its completion. Al-'alamin, the worlds, is every order of created being — mankind, jinn, angels, and whatever we have no name for. To call Him Rabb al-'alamin is to say that everything, everywhere, is being owned, fed and carried toward its purpose by Him alone.",
            bn: "রব শব্দটি এমন সব অর্থ একত্র করে যা অন্য কোনো একক শব্দে ধরে না: মালিক, কর্তা, প্রতিপালক, এবং যিনি কোনো কিছুকে ধাপে ধাপে তার পূর্ণতার দিকে গড়ে তোলেন। আল-আলামীন — জগতসমূহ — সৃষ্টির প্রতিটি স্তর: মানুষ, জিন, ফেরেশতা, আর যার নাম আমরা জানি না তাও। তাঁকে রাব্বুল আলামীন বলা মানে বলা: সবকিছু, সর্বত্র, একমাত্র তাঁরই মালিকানায়, তাঁরই প্রতিপালনে, তাঁরই হাতে নিজ উদ্দেশ্যের দিকে বাহিত হচ্ছে।",
          },
        ],
      },
      {
        h: { en: "Mercy Beside the Day of Recompense", bn: "রহমতের পাশে প্রতিদান দিবস" },
        p: [
          {
            en: "Between Lord of the worlds and Master of the Day of Recompense, the surah repeats ar-Rahman ar-Rahim. The order matters. Sovereignty could terrify; so mercy is set before judgment, and judgment is read through it. The canonical readings recite the next word both as Maalik, owner, and Malik, king, of the Day of Recompense — both transmitted, both true of Him: on that Day He owns everything and rules everything, and no one else owns or rules anything at all.",
            bn: "জগতসমূহের রব এবং প্রতিদান দিবসের অধিপতির মাঝখানে সূরাটি আবার বলে আর-রাহমান আর-রাহীম। এই ক্রমটি গুরুত্বপূর্ণ। সার্বভৌমত্ব ভীতিকর হতে পারত; তাই রহমতকে বিচারের আগে বসানো হয়েছে, আর বিচারকে পড়া হয় রহমতের ভেতর দিয়ে। স্বীকৃত কিরাআতসমূহে পরের শব্দটি দুইভাবে পঠিত — মা-লিক (দীর্ঘ স্বরে) অর্থাৎ অধিকারী, এবং মালিক অর্থাৎ বাদশাহ, প্রতিদান দিবসের — দুটিই বর্ণিত, দুটিই তাঁর ক্ষেত্রে সত্য: সেদিন সবকিছুর মালিক তিনি, সবকিছুর শাসকও তিনি, আর অন্য কেউ কিছুরই মালিক বা শাসক নয়।",
          },
          {
            en: "Yawm ad-din, the Day of Recompense, is named by outcome: the day deeds are paid. Placing it in the surah recited in every prayer keeps accountability daily rather than distant. But it stands surrounded by mercy — mercy named twice before it — so the believer approaches that Day with the balance the surah itself teaches: real hope, real accountability, neither one allowed to erase the other.",
            bn: "ইয়াওমুদ্দীন — প্রতিদান দিবস — নামকরণ হয়েছে পরিণতি দিয়ে: যেদিন আমলের প্রতিদান দেওয়া হয়। প্রতিটি নামাযে পঠিত সূরায় একে স্থাপন করা জবাবদিহিতাকে দূরের বিষয় না রেখে প্রতিদিনের বিষয় রাখে। কিন্তু এটি দাঁড়িয়ে আছে রহমতে ঘেরা হয়ে — এর আগে দুবার রহমতের নাম এসেছে — তাই মুমিন সেই দিনের দিকে এগোয় সূরাটিরই শেখানো ভারসাম্য নিয়ে: সত্যিকারের আশা, সত্যিকারের জবাবদিহিতা, কোনোটিকেই অন্যটিকে মুছে ফেলতে দেওয়া হয় না।",
          },
        ],
      },
      {
        h: { en: "A Conversation, Not a Recitation", bn: "আবৃত্তি নয়, কথোপকথন" },
        p: [
          {
            en: "Muslim relates the hadith qudsi: Allah says, I have divided the prayer between Myself and My servant in two halves, and My servant shall have what he asks. When the servant says al-hamdu lillahi rabbil-'alamin, Allah says: My servant has praised Me. Verse by verse the answers continue — My servant has extolled Me, My servant has glorified Me — until the dividing line: this is between Me and My servant.",
            bn: "মুসলিম হাদীসে কুদসী বর্ণনা করেন: আল্লাহ বলেন, আমি নামাযকে আমার ও আমার বান্দার মধ্যে দুই ভাগে ভাগ করেছি, আর আমার বান্দা যা চায় তা তারই। বান্দা যখন বলে আলহামদু লিল্লাহি রাব্বিল আলামীন, আল্লাহ বলেন: আমার বান্দা আমার প্রশংসা করেছে। আয়াতে আয়াতে জবাব চলতে থাকে — আমার বান্দা আমার গুণগান করেছে, আমার বান্দা আমার মহিমা ঘোষণা করেছে — যতক্ষণ না আসে বিভাজনরেখা: এটি আমার ও আমার বান্দার মধ্যকার।",
          },
          {
            en: "The dividing line is 1:5, and exactly there the grammar turns. The first verses speak about Allah in the third person — He, His. At iyyaka na'budu the surah turns and speaks to Him: You alone we worship. The commentators note the shift: praise brings the servant, step by step, from talking about Allah into standing before Him. Al-Fatihah does not merely describe an audience with the Lord; it stages one.",
            bn: "সেই বিভাজনরেখা 1:5। আর ঠিক সেখানেই ব্যাকরণ মোড় নেয়। প্রথম আয়াতগুলো আল্লাহ সম্পর্কে বলে তৃতীয় পুরুষে — তিনি, তাঁর। ইয়্যাকা নাবুদুতে এসে সূরা ঘুরে দাঁড়িয়ে তাঁকে সম্বোধন করে: আমরা একমাত্র তোমারই ইবাদত করি। মুফাসসিরগণ এই মোড়টি লক্ষ করেন: প্রশংসা বান্দাকে ধাপে ধাপে আল্লাহ সম্পর্কে কথা বলা থেকে তাঁর সামনে দাঁড়ানোয় নিয়ে আসে। আল-ফাতিহা রবের দরবারে হাজিরার কেবল বর্ণনা দেয় না; সে হাজিরা ঘটিয়েই দেয়।",
          },
        ],
      },
      {
        h: { en: "Worship and Help in One Breath", bn: "এক নিঃশ্বাসে ইবাদত ও সাহায্য" },
        p: [
          {
            en: "Iyyaka na'budu wa iyyaka nasta'in. Arabic normally puts the verb first; here the object You is moved ahead, and the fronting means only: You alone we worship, You alone we ask for help. Worship comes before asking — we do not approach Him as customers — yet asking follows immediately, because worship itself cannot be performed without His help. Each half of the sentence leans on the other.",
            bn: "ইয়্যাকা নাবুদু ওয়া ইয়্যাকা নাসতাঈন। আরবিতে সাধারণত ক্রিয়া আগে বসে; এখানে কর্ম তোমাকে সামনে আনা হয়েছে, আর এই এগিয়ে আনার অর্থ: একমাত্র — একমাত্র তোমারই ইবাদত করি, একমাত্র তোমার কাছেই সাহায্য চাই। ইবাদত চাওয়ার আগে আসে — আমরা তাঁর কাছে ক্রেতার মতো যাই না — অথচ চাওয়া আসে সঙ্গে সঙ্গেই, কারণ ইবাদত নিজেই তাঁর সাহায্য ছাড়া সম্পন্ন হয় না। বাক্যের দুই অর্ধেক পরস্পরের ওপর ভর করে।",
          },
          {
            en: "Notice also the plural. Not I worship, but we — the single worshipper prays as part of a community stretching across the world and back through the centuries. This is the posture the opening five verses build: know Him, praise Him, remember His mercy and His Day, then bind worship and dependence together, and only then, in 1:6-7, open your mouth to ask. That order is itself the lesson.",
            bn: "বহুবচনটিও লক্ষ করুন। আমি ইবাদত করি নয়, আমরা — একক মুসল্লি নামায পড়ে এমন এক উম্মাহর অংশ হয়ে যা পৃথিবীজুড়ে বিস্তৃত ও শতাব্দীর পর শতাব্দী পেছনে প্রসারিত। প্রথম পাঁচ আয়াত এই ভঙ্গিটিই গড়ে: তাঁকে জানুন, তাঁর প্রশংসা করুন, তাঁর রহমত ও তাঁর দিবস স্মরণ করুন, তারপর ইবাদত ও নির্ভরতাকে একসঙ্গে বাঁধুন, আর কেবল তখনই, 1:6-7 পৌঁছে, চাওয়ার জন্য মুখ খুলুন। এই ক্রমটিই শিক্ষা।",
          },
        ],
      },
    ],
  },
  '2:163': {
    sections: [
      {
        h: { en: "One Sentence, the Whole Creed", bn: "এক বাক্যে গোটা আকীদা" },
        p: [
          {
            en: "Wa ilahukum ilahun wahid — and your God is one God. Then the negation and affirmation that define Islam: there is no deity except Him, ar-Rahman, ar-Rahim. The verse is short enough to memorize in a minute, yet the commentators treat it as one of the Quran's fullest statements of tawheed: it names the claim, excludes every rival, and immediately tells you what the One you now worship alone is like.",
            bn: "ওয়া ইলাহুকুম ইলাহুন ওয়াহিদ — আর তোমাদের ইলাহ এক ইলাহ। তারপর সেই অস্বীকৃতি ও স্বীকৃতি যা ইসলামকে সংজ্ঞায়িত করে: তিনি ছাড়া কোনো ইলাহ নেই — আর-রাহমান, আর-রাহীম। আয়াতটি এত ছোট যে এক মিনিটে মুখস্থ হয়, অথচ মুফাসসিরগণ একে কুরআনের পূর্ণতম তাওহীদ-ঘোষণাগুলোর একটি গণ্য করেন: এটি দাবিটি উচ্চারণ করে, প্রতিটি প্রতিদ্বন্দ্বীকে বাদ দেয়, আর সঙ্গে সঙ্গে জানিয়ে দেয় — যাঁর একার ইবাদত এখন করছেন, তিনি কেমন।",
          },
          {
            en: "Ilah does not mean creator only; the mushrikun of Makkah agreed Allah created the heavens and the earth. Ilah is the one worshipped — loved, feared, hoped in, obeyed at the deepest level. So the verse's claim is not settled by conceding a Creator exists. It is settled only when worship, in all those inward senses, is actually given to Him alone.",
            bn: "ইলাহ অর্থ কেবল স্রষ্টা নয়; মক্কার মুশরিকরাও মানত যে আসমান-যমীন আল্লাহই সৃষ্টি করেছেন। ইলাহ হলেন যাঁর ইবাদত করা হয় — যাঁকে ভালোবাসা হয়, ভয় করা হয়, যাঁর কাছে আশা রাখা হয়, গভীরতম স্তরে যাঁর আনুগত্য করা হয়। তাই স্রষ্টার অস্তিত্ব স্বীকার করলেই আয়াতের দাবি মিটে যায় না। তা মেটে কেবল তখনই, যখন ইবাদত — এর সব অন্তর্গত অর্থসহ — বাস্তবে একমাত্র তাঁকেই দেওয়া হয়।",
          },
        ],
      },
      {
        h: { en: "The Claim, Then the Evidence", bn: "দাবি, তারপর প্রমাণ" },
        p: [
          {
            en: "Placement carries argument in the Quran. Immediately after this verse comes 2:164, which sweeps through the heavens and the earth, night and day, the ships, the rain, the scattered creatures, the winds and the clouds, and calls them signs for a people who reason. The commentators read the pair together: 2:163 states that your God is one, and 2:164 lays out the evidence in front of every eye that will look.",
            bn: "কুরআনে অবস্থানও যুক্তি বহন করে। এই আয়াতের ঠিক পরেই আসে 2:164, যা আসমান-যমীন, রাত-দিন, জাহাজ, বৃষ্টি, ছড়িয়ে থাকা প্রাণী, বায়ু আর মেঘ পেরিয়ে যায় এবং এসবকে বলে বোঝে এমন জাতির জন্য নিদর্শন। মুফাসসিরগণ জোড়াটিকে একসঙ্গে পড়েন: 2:163 ঘোষণা করে তোমাদের ইলাহ এক, আর 2:164 প্রমাণগুলো সাজিয়ে দেয় প্রতিটি চোখের সামনে, যে চোখ তাকাতে রাজি।",
          },
          {
            en: "Two verses later, 2:165 describes the failure the claim excludes: people who take rivals besides Allah and love them as Allah should be loved — while those who believe are stronger in love for Allah. The sequence moves from doctrine to evidence to the heart, which is where the Quran always locates shirk and tawheed alike: not merely in what is said, but in what is loved most.",
            bn: "দুই আয়াত পরে 2:165 বর্ণনা করে সেই ব্যর্থতা যা এই দাবি বাদ দেয়: যারা আল্লাহর পাশাপাশি প্রতিদ্বন্দ্বী গ্রহণ করে এবং আল্লাহকে যেমন ভালোবাসা উচিত তেমনভাবে তাদের ভালোবাসে — অথচ যারা ঈমান এনেছে তারা আল্লাহর ভালোবাসায় দৃঢ়তর। ধারাটি এগোয় আকীদা থেকে প্রমাণে, প্রমাণ থেকে হৃদয়ে — আর কুরআন শিরক ও তাওহীদ দুটিকেই সবসময় সেখানেই স্থাপন করে: কেবল মুখের কথায় নয়, সবচেয়ে বেশি কী ভালোবাসা হয় তাতে।",
          },
        ],
      },
      {
        h: { en: "Oneness Paired With Mercy", bn: "একত্বের সঙ্গে রহমত" },
        p: [
          {
            en: "The verse could have closed with names of power — the Mighty, the Compeller — and the theology would stand. Instead it closes with ar-Rahman ar-Rahim, the two names of mercy the Quran opens with in 1:1-5, and the pairing is deliberate teaching. The One who tolerates no rival in worship is not a distant force to be appeased; He is overflowing in mercy toward the very servants He commands.",
            bn: "আয়াতটি ক্ষমতার নাম দিয়ে শেষ হতে পারত — পরাক্রমশালী, মহাপ্রতাপশালী — তাতেও আকীদা দাঁড়িয়ে থাকত। বরং এটি শেষ হয় আর-রাহমান আর-রাহীম দিয়ে — রহমতের সেই দুই নাম যা দিয়ে কুরআন 1:1-5 অংশে শুরু হয়। এই জোড় সচেতন শিক্ষা। ইবাদতে যিনি কোনো প্রতিদ্বন্দ্বী সহ্য করেন না, তিনি তুষ্ট করার মতো কোনো দূরবর্তী শক্তি নন; যে বান্দাদের তিনি আদেশ করেন, তাদের প্রতিই তিনি রহমতে উপচে পড়া।",
          },
          {
            en: "This changes what exclusive worship feels like from the inside. If the only God were only powerful, tawheed would be submission to strength. Because the only God is the Most Merciful, tawheed is also trust, closeness and relief: every need brought to one door, and behind that one door, mercy. The commentators note that the verse gives hope its foundation in the same breath that it removes every rival.",
            bn: "এতে একনিষ্ঠ ইবাদতের ভেতরের অনুভবটাই বদলে যায়। একমাত্র ইলাহ যদি কেবল ক্ষমতাবান হতেন, তাওহীদ হতো শক্তির কাছে বশ্যতা। যেহেতু একমাত্র ইলাহ পরম করুণাময়, তাই তাওহীদ একই সঙ্গে ভরসা, নৈকট্য ও স্বস্তি: প্রতিটি প্রয়োজন এক দরজায় আনা, আর সেই এক দরজার পেছনে রহমত। মুফাসসিরগণ লক্ষ করেন, আয়াতটি যে নিঃশ্বাসে প্রতিটি প্রতিদ্বন্দ্বী সরায়, সেই নিঃশ্বাসেই আশার ভিত্তি গড়ে দেয়।",
          },
        ],
      },
      {
        h: { en: "The Quran's Own Argument", bn: "কুরআনের নিজস্ব যুক্তি" },
        p: [
          {
            en: "The Quran does not leave oneness as bare assertion. 21:22 argues: had there been in the heavens and the earth gods besides Allah, both would have fallen into ruin — two absolute wills cannot share one universe that runs this smoothly. And 23:91 adds: had there been gods with Him, each god would have taken away what it created and sought to overcome the others. The seamlessness of the world testifies to a single hand.",
            bn: "কুরআন একত্বকে নিছক ঘোষণা হিসেবে ফেলে রাখে না। 21:22 যুক্তি দেয়: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে উভয়ই ধ্বংস হয়ে যেত — দুটি চূড়ান্ত ইচ্ছা এমন মসৃণভাবে চলা একটি মহাবিশ্ব ভাগ করে নিতে পারে না। আর 23:91 যোগ করে: তাঁর সঙ্গে অন্য ইলাহ থাকলে প্রত্যেক ইলাহ নিজের সৃষ্টি নিয়ে আলাদা হয়ে যেত এবং একে অন্যের ওপর প্রাধান্য চাইত। জগতের নিরবচ্ছিন্নতাই এক হাতের সাক্ষ্য দেয়।",
          },
          {
            en: "This is why 2:163 can stand beside 2:164 without strain: the order of nature is not just beautiful, it is evidence. One law from the depth of the sea to the edge of the sky, one water feeding a thousand kinds of fruit, one pattern of night and day for every land — a plurality of gods would show seams, and there are none.",
            bn: "এ কারণেই 2:163 কোনো টানাপোড়েন ছাড়া 2:164 আয়াতটির পাশে দাঁড়াতে পারে: প্রকৃতির শৃঙ্খলা কেবল সুন্দর নয়, তা প্রমাণ। সাগরের গভীর থেকে আকাশের প্রান্ত পর্যন্ত এক নিয়ম, এক পানি হাজার রকম ফল ফলায়, প্রতিটি ভূখণ্ডে রাত-দিনের এক ছন্দ — ইলাহ একাধিক হলে জোড়ার দাগ দেখা যেত, অথচ কোথাও কোনো দাগ নেই।",
          },
        ],
      },
      {
        h: { en: "One God, One Direction", bn: "এক ইলাহ, এক অভিমুখ" },
        p: [
          {
            en: "Tawheed simplifies a life. Whoever serves many masters is pulled apart by them, as 39:29 pictures in its parable of the slave owned by quarrelling partners against the slave owned by one man — are the two equal? Fear of one God replaces a thousand scattered anxieties about people, luck and loss; hope in one God replaces the exhausting courting of everyone who might be useful.",
            bn: "তাওহীদ জীবনকে সরল করে। যে বহু মনিবের সেবা করে, তারা তাকে টেনে ছিঁড়ে ফেলে — যেমন 39:29 চিত্রিত করে ঝগড়াটে অংশীদারদের মালিকানাধীন দাস বনাম এক ব্যক্তির মালিকানাধীন দাসের উপমায় — এই দুজন কি সমান? এক আল্লাহর ভয় মানুষ, ভাগ্য ও ক্ষতি নিয়ে হাজারো ছড়ানো দুশ্চিন্তার জায়গা নেয়; এক আল্লাহর আশা কাজে লাগতে পারে এমন প্রত্যেককে তোষামোদের ক্লান্তিকর চেষ্টার জায়গা নেয়।",
          },
          {
            en: "The verse also guards against the subtler rivals that 2:165 warns of — not carved idols but loves that outrank Allah: wealth, status, opinion, ambition. The test of ilahun wahid is not whether we can recite it but what we obey when obedience becomes costly, and what we reach for first when we are afraid.",
            bn: "আয়াতটি সেই সূক্ষ্মতর প্রতিদ্বন্দ্বীদের থেকেও রক্ষা করে, যাদের ব্যাপারে 2:165 সতর্ক করে — খোদাই করা মূর্তি নয়, বরং আল্লাহর ওপরে স্থান পাওয়া ভালোবাসাগুলো: সম্পদ, মর্যাদা, লোকের মতামত, উচ্চাকাঙ্ক্ষা। ইলাহুন ওয়াহিদের পরীক্ষা এটি মুখে বলতে পারি কি না তা নয়; বরং আনুগত্য যখন মূল্য দাবি করে তখন কার আনুগত্য করি, আর ভয় পেলে সবার আগে কার দিকে হাত বাড়াই — সেটিই।",
          },
        ],
      },
      {
        h: { en: "Keeping It Daily", bn: "প্রতিদিনের চর্চায়" },
        p: [
          {
            en: "La ilaha illa Huwa is the sentence Islam begins with, and the tradition keeps it on the tongue: in the adhan, in the tashahhud of every prayer, in the remembrances of morning and evening. Repetition is not redundancy; it is maintenance. Each recitation re-centres the heart that has drifted during the day toward smaller fears and smaller hopes.",
            bn: "লা ইলাহা ইল্লা হুয়া সেই বাক্য যা দিয়ে ইসলাম শুরু হয়, আর ঐতিহ্য একে জিহ্বায় জারি রাখে: আযানে, প্রতিটি নামাযের তাশাহহুদে, সকাল-সন্ধ্যার যিকিরে। পুনরাবৃত্তি বাহুল্য নয়; তা রক্ষণাবেক্ষণ। প্রতিটি উচ্চারণ সেই হৃদয়কে আবার কেন্দ্রে ফেরায়, যা দিনের মধ্যে ছোট ছোট ভয় আর ছোট ছোট আশার দিকে সরে গিয়েছিল।",
          },
          {
            en: "Let the verse also set the tone of your asking. Because He is one, take every need to Him first, before any created door; because He is ar-Rahman ar-Rahim, take it to Him expecting kindness, not reluctance. That is tawheed made practice: absolute oneness, met with all-encompassing mercy, worshipped without rivals and approached without dread.",
            bn: "আয়াতটিকে আপনার চাওয়ার সুরও ঠিক করতে দিন। তিনি এক বলে প্রতিটি প্রয়োজন প্রথমে তাঁর কাছেই নিন — কোনো সৃষ্টির দরজার আগে; তিনি আর-রাহমান আর-রাহীম বলে তাঁর কাছে যান দয়ার প্রত্যাশা নিয়ে, অনিচ্ছার আশঙ্কা নিয়ে নয়। এটিই চর্চায় পরিণত তাওহীদ: পরম একত্ব, সর্বব্যাপী রহমতের সঙ্গে মিলিত — প্রতিদ্বন্দ্বীহীন ইবাদত, আতঙ্কহীন উপস্থিতি।",
          },
        ],
      },
    ],
  },
  '2:257': {
    sections: [
      {
        h: { en: "The Sentence and Its Mirror", bn: "বাক্য ও তার প্রতিবিম্ব" },
        p: [
          {
            en: "Allah is the wali of those who believe; He brings them out of the darknesses into the light. And those who disbelieve — their patrons are the taghut, who bring them out of the light into the darknesses. The verse is built as a mirror: the same verb of bringing out, the same two destinations, opposite directions. Everyone in it is moving; no one is standing still. The only question the verse leaves open is which way you are being led.",
            bn: "আল্লাহ মুমিনদের ওয়ালী; তিনি তাদের অন্ধকারসমূহ থেকে আলোয় বের করে আনেন। আর যারা কুফর করে — তাদের অভিভাবক তাগূত, যারা তাদের আলো থেকে অন্ধকারসমূহে বের করে নেয়। আয়াতটি আয়নার মতো গড়া: বের করে আনার একই ক্রিয়া, একই দুই গন্তব্য, বিপরীত দুই দিক। এর ভেতরের প্রত্যেকে চলমান; কেউ স্থির দাঁড়িয়ে নেই। আয়াতটি কেবল একটি প্রশ্নই খোলা রাখে: আপনাকে কোন দিকে নিয়ে যাওয়া হচ্ছে।",
          },
          {
            en: "Wali is a rich word: ally, protector, guardian, the one who takes charge of your affairs and stands closest to you. When Allah names Himself wali of the believers, He is not describing a feeling but a working relationship — guidance given, protection extended, affairs managed by One who neither sleeps, as 2:255 has just said, nor is ever absent.",
            bn: "ওয়ালী শব্দটি সমৃদ্ধ: মিত্র, রক্ষক, অভিভাবক — যিনি আপনার বিষয়গুলোর দায়িত্ব নেন এবং আপনার সবচেয়ে কাছে দাঁড়ান। আল্লাহ যখন নিজেকে মুমিনদের ওয়ালী বলেন, তিনি কোনো অনুভূতির বর্ণনা দিচ্ছেন না, বরং এক কার্যকর সম্পর্কের: হিদায়াত দেওয়া হয়, সুরক্ষা প্রসারিত হয়, বিষয়াদি পরিচালনা করেন এমন এক সত্তা — যিনি ঘুমান না, যেমন 2:255 এইমাত্র বলেছে, এবং কখনো অনুপস্থিতও নন।",
          },
        ],
      },
      {
        h: { en: "After the Kursi and the Choice", bn: "কুরসী ও সিদ্ধান্তের পরে" },
        p: [
          {
            en: "The verse does not stand alone. 2:255 has just described the God whose Kursi extends over the heavens and the earth. 2:256 then declares there is no compulsion in religion, for guidance has become clear from error, and promises that whoever rejects the taghut and believes in Allah has grasped the firmest handle, which never breaks. 2:257 completes the movement: it shows what happens after the hand closes on the handle — or refuses it.",
            bn: "আয়াতটি একা দাঁড়িয়ে নেই। 2:255 এইমাত্র সেই আল্লাহর বর্ণনা দিয়েছে যাঁর কুরসী আসমান-যমীন পরিব্যাপ্ত। এরপর 2:256 ঘোষণা করে দ্বীনে কোনো জবরদস্তি নেই, কারণ হিদায়াত ভ্রান্তি থেকে স্পষ্ট হয়ে গেছে, আর প্রতিশ্রুতি দেয়: যে তাগূতকে প্রত্যাখ্যান করে আল্লাহর প্রতি ঈমান আনে, সে ধরেছে সেই মজবুত হাতল যা কখনো ভাঙে না। 2:257 গতিটি সম্পূর্ণ করে: দেখায় হাত হাতলটি আঁকড়ে ধরার পরে — কিংবা প্রত্যাখ্যান করার পরে — কী ঘটে।",
          },
          {
            en: "Read as a sequence, the three verses answer three questions in order. Who is Allah? The Living, the Sustainer, as 2:255 declares. How is faith entered? Freely, by a clear choice, as 2:256 rules. What does the choice deliver? A guardian, and a lifelong movement toward light, as 2:257 promises. The commentators read the passage as one lesson in three steps rather than three isolated sayings.",
            bn: "ধারাবাহিকভাবে পড়লে তিনটি আয়াত পরপর তিনটি প্রশ্নের উত্তর দেয়। আল্লাহ কে? চিরঞ্জীব, সর্বসত্তার ধারক — যেমন 2:255 ঘোষণা করে। ঈমানে প্রবেশ কীভাবে? স্বাধীনভাবে, স্পষ্ট এক সিদ্ধান্তে — যেমন 2:256 বিধান দেয়। সেই সিদ্ধান্ত কী এনে দেয়? একজন অভিভাবক, আর আলোর দিকে আজীবনের এক যাত্রা — যেমন 2:257 প্রতিশ্রুতি দেয়। মুফাসসিরগণ অংশটিকে তিনটি বিচ্ছিন্ন উক্তি নয়, তিন ধাপের এক শিক্ষা হিসেবে পড়েন।",
          },
        ],
      },
      {
        h: { en: "Darknesses Plural, Light Singular", bn: "অন্ধকার বহু, আলো এক" },
        p: [
          {
            en: "The Arabic is precise: zulumat, darknesses, always plural in this idiom; nur, light, singular. The commentators draw the meaning out: falsehood is many — sects, superstitions, desires, ideologies, each a darkness of its own — while truth is one road. 6:153 states it as a command: this is My path, straight, so follow it, and do not follow the other ways, for they will scatter you from His way.",
            bn: "আরবিটি সূক্ষ্ম: যুলুমাত — অন্ধকারসমূহ — এই প্রয়োগে সবসময় বহুবচন; নূর — আলো — একবচন। মুফাসসিরগণ অর্থটি টেনে বের করেন: বাতিল অনেক — দল, কুসংস্কার, প্রবৃত্তি, মতবাদ, প্রতিটি নিজস্ব এক অন্ধকার — অথচ সত্য একটিই পথ। 6:153 একে আদেশ আকারে বলে: এই আমার পথ, সরল; সুতরাং এরই অনুসরণ করো, অন্য পথগুলোর অনুসরণ কোরো না, কারণ সেগুলো তোমাদের তাঁর পথ থেকে বিচ্ছিন্ন করে দেবে।",
          },
          {
            en: "Darkness in the Quran's usage is not only ignorance of doctrine. It is every state in which a person cannot see where they are going: confusion about what matters, blindness to consequences, a conscience dimmed by habit. Light, correspondingly, is not information but sight — the ability to see the world, the self and the road ahead as they actually are.",
            bn: "কুরআনের ব্যবহারে অন্ধকার কেবল আকীদার অজ্ঞতা নয়। এটি সেই প্রতিটি অবস্থা, যাতে মানুষ দেখতে পায় না সে কোথায় যাচ্ছে: কোনটি গুরুত্বপূর্ণ তা নিয়ে বিভ্রান্তি, পরিণতির প্রতি অন্ধতা, অভ্যাসে নিষ্প্রভ হয়ে আসা বিবেক। আলোও সেই অনুপাতে কেবল তথ্য নয়, দৃষ্টি — জগৎ, নিজ সত্তা ও সামনের পথকে যেমন তারা আসলে আছে তেমন দেখতে পারার ক্ষমতা।",
          },
        ],
      },
      {
        h: { en: "The Taghut", bn: "তাগূত কারা" },
        p: [
          {
            en: "Taghut, from a root meaning to overflow all bounds, is the Quran's name for whatever is served or obeyed in place of Allah — idols, tyrants, soothsayers, and in every age its newer forms. The scholars' definitions vary in wording and agree in substance: anything that takes for itself, or is given, what belongs to Allah alone. Such patrons come in the plural where the true wali is one, and the verse's grammar carries exactly that contrast.",
            bn: "তাগূত — সীমা ছাড়িয়ে উপচে পড়া অর্থের ধাতু থেকে — আল্লাহর জায়গায় যার সেবা বা আনুগত্য করা হয় তার কুরআনি নাম: মূর্তি, স্বৈরাচারী, গণক, আর প্রতিটি যুগে এর নতুন নতুন রূপ। আলিমদের সংজ্ঞা শব্দে ভিন্ন হলেও মর্মে একমত: যা নিজের জন্য নিয়ে নেয়, বা যাকে দিয়ে দেওয়া হয়, কেবল আল্লাহর প্রাপ্য বিষয়গুলো। এমন অভিভাবক আসে বহুবচনে, অথচ প্রকৃত ওয়ালী এক — আর আয়াতের ব্যাকরণ ঠিক এই বৈপরীত্যই বহন করে।",
          },
          {
            en: "Their direction of pull is the verse's sharpest point: out of the light into the darknesses. The commentators explain that the light was available to them — the clear proofs of 2:256, the sound nature every person is created upon — and their false patrons turn them away from it. No one begins in neutral. Turning from light that has reached you is itself a movement into the dark.",
            bn: "তাদের টানের দিকটিই আয়াতের তীক্ষ্ণতম কথা: আলো থেকে অন্ধকারসমূহের দিকে। মুফাসসিরগণ ব্যাখ্যা করেন, আলো তাদের নাগালে ছিল — 2:256 আয়াতের স্পষ্ট প্রমাণসমূহ, আর যে বিশুদ্ধ স্বভাবের ওপর প্রতিটি মানুষ সৃষ্ট — এবং তাদের মিথ্যা অভিভাবকরা তাদের সেখান থেকে ফিরিয়ে নেয়। কেউ নিরপেক্ষ অবস্থান থেকে শুরু করে না। যে আলো আপনার কাছে পৌঁছেছে তা থেকে মুখ ফেরানোই অন্ধকারের দিকে এক চলা।",
          },
        ],
      },
      {
        h: { en: "The Same Promise Elsewhere", bn: "অন্যত্র একই প্রতিশ্রুতি" },
        p: [
          {
            en: "Bringing out of darknesses into light is one of the Quran's steady descriptions of what Allah does for believers. 5:16 says He guides by the Quran those who pursue His pleasure into the ways of peace and brings them out of darknesses into light by His permission. 14:1 gives the Book that very purpose, and 65:11 attaches it to the Messenger reciting clear verses. 33:43 adds that He and His angels send blessings on the believers to bring them out of darknesses into light.",
            bn: "অন্ধকারসমূহ থেকে আলোয় বের করে আনা — মুমিনদের জন্য আল্লাহ যা করেন তার এক স্থায়ী কুরআনি বর্ণনা। 5:16 বলে, যারা তাঁর সন্তুষ্টির অনুসরণ করে তিনি কুরআনের মাধ্যমে তাদের শান্তির পথগুলোতে চালান এবং নিজ অনুমতিতে অন্ধকারসমূহ থেকে আলোয় বের করে আনেন। 14:1 কিতাবকে ঠিক এই উদ্দেশ্যই দেয়, আর 65:11 এটি যুক্ত করে স্পষ্ট আয়াত তিলাওয়াতকারী রাসূলের সঙ্গে। 33:43 যোগ করে: তিনি ও তাঁর ফেরেশতারা মুমিনদের ওপর রহমত বর্ষণ করেন তাদের অন্ধকারসমূহ থেকে আলোয় বের করে আনতে।",
          },
          {
            en: "Gather the passages and the instruments of the bringing-out appear: the Book, the Messenger ﷺ, and Allah's own mercy and blessing. The believer is not asked to generate light; he is asked to stay attached to the sources of it. Detach from revelation, and the verse's other current — the pull of the many darknesses — does not stop running.",
            bn: "অংশগুলো একত্র করলে বের করে আনার উপকরণগুলো ফুটে ওঠে: কিতাব, রাসূল ﷺ, আর আল্লাহর নিজের রহমত ও বরকত। মুমিনকে আলো উৎপাদন করতে বলা হয়নি; বলা হয়েছে আলোর উৎসগুলোর সঙ্গে যুক্ত থাকতে। ওহী থেকে বিচ্ছিন্ন হোন — আয়াতের অন্য স্রোত, বহু অন্ধকারের টান, তখনো বইতে থাকবে।",
          },
        ],
      },
      {
        h: { en: "Auditing Your Allegiances", bn: "নিজের আনুগত্য যাচাই" },
        p: [
          {
            en: "The verse invites a plain audit. Everyone has patrons in practice: voices obeyed, sources trusted, company kept, feeds followed. The test it offers is directional — after a season under this influence, do I see more clearly or less? Am I closer to prayer, honesty and remembrance, or further? Movement toward light and movement toward darkness both happen gradually, which is why the audit has to be deliberate.",
            bn: "আয়াতটি এক সরল যাচাইয়ের আমন্ত্রণ জানায়। কার্যত প্রত্যেকেরই অভিভাবক আছে: যে কণ্ঠের আনুগত্য করা হয়, যে উৎসে ভরসা রাখা হয়, যে সঙ্গ রাখা হয়, যা নিয়মিত দেখা-শোনা হয়। এর দেওয়া পরীক্ষাটি দিকনির্ণায়ক — এই প্রভাবের অধীনে একটা সময় কাটানোর পর আমি কি আগের চেয়ে স্পষ্ট দেখি, নাকি কম? নামায, সততা ও স্মরণের কাছাকাছি এসেছি, নাকি দূরে গেছি? আলোর দিকে চলা আর অন্ধকারের দিকে চলা দুটিই ঘটে ধীরে ধীরে — তাই যাচাইটি হতে হয় সচেতনভাবে।",
          },
          {
            en: "And the promise is personal. Taking Allah as wali is not a mood but a set of acts: obeying Him when it costs, consulting His Book before other counsel, asking Him first. Whoever does this has His word that the direction of their life is out of every darkness — confusion, sin, despair — and into light, and that the Guardian managing the journey never hands it off.",
            bn: "আর প্রতিশ্রুতিটি ব্যক্তিগত। আল্লাহকে ওয়ালী হিসেবে গ্রহণ করা কোনো মেজাজ নয়, কতগুলো কাজ: মূল্য দিতে হলেও তাঁর আনুগত্য, অন্য পরামর্শের আগে তাঁর কিতাবের শরণ, সবার আগে তাঁর কাছে চাওয়া। যে এমন করে, তার জন্য তাঁর কথা রইল: তার জীবনের অভিমুখ প্রতিটি অন্ধকার থেকে — বিভ্রান্তি, গুনাহ, হতাশা — আলোর দিকে; আর এই যাত্রার পরিচালক অভিভাবক কখনো দায়িত্ব অন্য হাতে তুলে দেন না।",
          },
        ],
      },
    ],
  },
  '3:102-103': {
    sections: [
      {
        h: { en: "Taqwa in Full Measure", bn: "যথাযথ তাকওয়া" },
        p: [
          {
            en: "O you who believe, fear Allah as He deserves to be feared — haqqa tuqatihi. The early authorities gloss the phrase: that He be obeyed and not disobeyed, remembered and not forgotten, thanked and not denied. The standard is deliberately absolute; it names what Allah deserves rather than what we manage. And it addresses believers, because taqwa is not the entry requirement of faith but its lifelong work.",
            bn: "হে ঈমানদারগণ, আল্লাহকে ভয় করো যেমন ভয় করা তাঁর প্রাপ্য — হাক্কা তুকাতিহি। প্রাথমিক যুগের ইমামগণ বাক্যটির ব্যাখ্যা দেন: তাঁর আনুগত্য করা হবে, অবাধ্যতা নয়; তাঁকে স্মরণ করা হবে, ভোলা নয়; তাঁর শোকর করা হবে, অস্বীকার নয়। মানদণ্ডটি ইচ্ছাকৃতভাবেই চূড়ান্ত; এটি নাম নেয় আল্লাহর প্রাপ্যের, আমাদের সাধ্যের নয়। আর সম্বোধন মুমিনদের, কারণ তাকওয়া ঈমানে প্রবেশের শর্ত নয় — ঈমানের আজীবনের কাজ।",
          },
          {
            en: "The scholars discuss how this absolute standard sits with 64:16 — fear Allah as much as you are able. Some early authorities held that the later verse explains the first: Allah does not demand the impossible; He points the effort. What He deserves names the direction; what you can bear sets the pace. The believer keeps the full standard in view precisely so that his best effort keeps climbing toward it, never settling early.",
            bn: "এই চূড়ান্ত মানদণ্ড 64:16 আয়াতের সঙ্গে — সাধ্যমতো আল্লাহকে ভয় করো — কীভাবে মেলে, আলিমগণ তা আলোচনা করেছেন। কোনো কোনো প্রাথমিক ইমাম বলেছেন, পরের আয়াতটি প্রথমটির ব্যাখ্যা: আল্লাহ অসম্ভব দাবি করেন না; তিনি প্রচেষ্টার লক্ষ্য দেখিয়ে দেন। তাঁর প্রাপ্য নির্ধারণ করে দিক; আপনার সাধ্য নির্ধারণ করে গতি। মুমিন পূর্ণ মানদণ্ডটি চোখের সামনে রাখে ঠিক এ জন্যই — যেন তার সর্বোচ্চ চেষ্টা সেদিকে উঠতেই থাকে, আগে থেকে থেমে না যায়।",
          },
        ],
      },
      {
        h: { en: "Die Only as Muslims", bn: "মুসলিম অবস্থাতেই মৃত্যু" },
        p: [
          {
            en: "And do not die except as Muslims. No one chooses the hour of death, so the command cannot be about the moment itself; the commentators read it as a command about the whole life that leads there. Remain in the state you would be willing to die in. Whoever holds to Islam in every ordinary day has obeyed the verse, because death then finds him where the verse requires him to be.",
            bn: "আর মুসলিম না হয়ে মৃত্যুবরণ কোরো না। মৃত্যুর ক্ষণ কেউ বেছে নেয় না, তাই আদেশটি সেই মুহূর্তটি নিয়ে হতে পারে না; মুফাসসিরগণ একে পড়েন সেখানে পৌঁছানো গোটা জীবনের আদেশ হিসেবে। সেই অবস্থায় থাকো, যে অবস্থায় মরতে তুমি রাজি। যে প্রতিটি সাধারণ দিনে ইসলাম আঁকড়ে থাকে, সে আয়াতটি মান্য করেছে — কারণ মৃত্যু তখন তাকে সেখানেই পায়, আয়াত তাকে যেখানে থাকতে বলেছে।",
          },
          {
            en: "The two commands of 3:102 belong together. Taqwa is the daily discipline; dying upon Islam is the destination it protects. A person who postpones obedience is gambling on a schedule he has never once controlled. The verse quietly removes the gamble: since the end may come at any time, the only guaranteed way to die as a Muslim is to live as one continuously.",
            bn: "3:102 আয়াতের দুই আদেশ একসঙ্গেই থাকে। তাকওয়া প্রতিদিনের অনুশীলন; ইসলামের ওপর মৃত্যু সেই গন্তব্য যা এই অনুশীলন রক্ষা করে। যে আনুগত্য পিছিয়ে দেয়, সে বাজি ধরছে এমন এক সময়সূচির ওপর যা সে একবারও নিয়ন্ত্রণ করেনি। আয়াতটি নীরবে বাজিটাই তুলে নেয়: শেষ যেহেতু যেকোনো সময় আসতে পারে, মুসলিম হয়ে মরার একমাত্র নিশ্চিত উপায় — নিরবচ্ছিন্নভাবে মুসলিম হয়ে বাঁচা।",
          },
        ],
      },
      {
        h: { en: "The Rope of Allah", bn: "আল্লাহর রজ্জু" },
        p: [
          {
            en: "Then 3:103: and hold firmly, all together, to the rope of Allah, and do not become divided. The commentators explain the rope as the covenant of Allah, His religion, and above all the Quran; the explanations differ in wording and meet in substance, since the Quran is where the covenant and the religion are held. A rope is what you grip when you cannot stand on your own — the image assumes a fall is possible.",
            bn: "তারপর 3:103: আর তোমরা সবাই মিলে আল্লাহর রজ্জু দৃঢ়ভাবে ধরো এবং বিভক্ত হয়ো না। মুফাসসিরগণ রজ্জুর ব্যাখ্যা করেন আল্লাহর অঙ্গীকার, তাঁর দ্বীন, আর সর্বোপরি কুরআন হিসেবে; ব্যাখ্যাগুলো শব্দে ভিন্ন হলেও মর্মে মিলে যায়, কারণ অঙ্গীকার ও দ্বীন ধরা থাকে কুরআনেই। রজ্জু সেটিই যা মানুষ আঁকড়ে ধরে যখন নিজের পায়ে দাঁড়াতে পারে না — চিত্রটিই ধরে নেয় যে পড়ে যাওয়া সম্ভব।",
          },
          {
            en: "The command has two parts that must not be separated: hold firmly, and do so all together, jami'an. It is possible to grip the religion in a way that shreds the community — every faction certain, every bond cut. The verse rules that out by grammar: the holding it commands is collective, one rope and many hands, and letting go of each other is treated as a way of letting go of it.",
            bn: "আদেশটির দুটি অংশ, যাদের আলাদা করা চলবে না: দৃঢ়ভাবে ধরো, এবং সবাই মিলে ধরো — জামীআন। দ্বীনকে এমনভাবে আঁকড়ে ধরাও সম্ভব যাতে জামাত ছিন্নভিন্ন হয়ে যায় — প্রতিটি দল নিশ্চিত, প্রতিটি বন্ধন কাটা। আয়াতটি ব্যাকরণ দিয়েই তা নাকচ করে: যে ধরা এটি আদেশ করে তা সম্মিলিত — এক রজ্জু, বহু হাত — আর পরস্পরকে ছেড়ে দেওয়াকে গণ্য করা হয় রজ্জুটিকেই ছেড়ে দেওয়ার এক রূপ হিসেবে।",
          },
        ],
      },
      {
        h: { en: "Enemies Made Brothers", bn: "শত্রু থেকে ভাই" },
        p: [
          {
            en: "Then the reminder: remember Allah's favour upon you, when you were enemies and He joined your hearts, and you became, by His favour, brothers. The first hearers were the Aws and the Khazraj of Madinah, tribes with generations of raids and a devastating war behind them; the books of sira relate how easily old verses of boasting could stir the old rage even after Islam. The Quran calls what replaced that rage a favour — ni'mah — not an achievement.",
            bn: "তারপর সেই স্মরণ: তোমাদের ওপর আল্লাহর অনুগ্রহ মনে করো — তোমরা ছিলে পরস্পরের শত্রু, তিনি তোমাদের হৃদয়গুলো জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেলে। প্রথম শ্রোতারা ছিল মদীনার আউস ও খাযরাজ — প্রজন্মের পর প্রজন্মের হানাহানি আর এক বিধ্বংসী যুদ্ধ যাদের পেছনে; সীরাতের কিতাবসমূহ বর্ণনা করে, ইসলামের পরেও গর্বের পুরোনো কবিতা কত সহজে পুরোনো ক্রোধ জাগিয়ে তুলতে পারত। সেই ক্রোধের জায়গায় যা এলো, কুরআন তাকে বলে অনুগ্রহ — নিয়ামত — কোনো অর্জন নয়।",
          },
          {
            en: "And He saved you when you were on the edge of a pit of the Fire. The image is exact: not in the pit, but on its rim, one step from falling. 8:63 adds that if you had spent all that is in the earth, you could not have joined their hearts, but Allah joined them. Reconciliation on that scale is presented as something only He does — which is why unity, once given, must be guarded like the gift it is.",
            bn: "আর তিনি তোমাদের বাঁচালেন যখন তোমরা ছিলে আগুনের গর্তের কিনারায়। চিত্রটি নিখুঁত: গর্তের ভেতরে নয়, তার কিনারায় — পতন থেকে এক পা দূরে। 8:63 যোগ করে: পৃথিবীর সবকিছু ব্যয় করলেও তুমি তাদের হৃদয়গুলো জুড়তে পারতে না, কিন্তু আল্লাহ তাদের জুড়ে দিয়েছেন। এই মাপের মিলনকে উপস্থাপন করা হয়েছে এমন কিছু হিসেবে যা কেবল তিনিই করেন — সে জন্যই ঐক্য, একবার দেওয়া হলে, রক্ষা করতে হয় ঠিক যেমন উপহার রক্ষা করা হয়।",
          },
        ],
      },
      {
        h: { en: "The Warning That Follows", bn: "পরবর্তী সতর্কবাণী" },
        p: [
          {
            en: "Two verses later, 3:105 turns the favour into a warning: do not be like those who became divided and differed after the clear proofs had come to them. Division, in this passage, is not a management problem; it is a religious failure with a history — communities before us split after knowledge, not before it. Knowledge without the rope becomes a weapon factions use on each other.",
            bn: "দুই আয়াত পরে 3:105 অনুগ্রহটিকে সতর্কবাণীতে ফেরায়: তাদের মতো হয়ো না, যারা স্পষ্ট প্রমাণ আসার পর বিভক্ত হয়েছে ও মতভেদ করেছে। এই অংশে বিভক্তি কোনো ব্যবস্থাপনার সমস্যা নয়; এটি এক দ্বীনি ব্যর্থতা, যার ইতিহাস আছে — আমাদের আগের জাতিগুলো ভাগ হয়েছে জ্ঞান আসার পরে, আগে নয়। রজ্জুবিহীন জ্ঞান হয়ে ওঠে সেই অস্ত্র, যা দলগুলো পরস্পরের ওপর চালায়।",
          },
          {
            en: "This is why 49:10 gives believers their standing rule — the believers are but brothers, so make peace between your brothers. The Prophet ﷺ himself included 3:102 in the sermon of need he taught his companions, recited to this day at marriages. The unity these verses command is tested not at gatherings but in disagreements, when holding the rope together means staying in the room with a brother who is wrong.",
            bn: "এ জন্যই 49:10 মুমিনদের স্থায়ী নিয়মটি দেয় — মুমিনরা তো ভাই ভাই, সুতরাং তোমাদের ভাইদের মধ্যে মীমাংসা করে দাও। নবী ﷺ নিজে 3:102 আয়াতটিকে অন্তর্ভুক্ত করেছেন সাহাবীদের শেখানো প্রয়োজনের খুতবায়, যা আজও বিবাহে পঠিত হয়। এই আয়াতগুলোর আদেশ করা ঐক্যের পরীক্ষা হয় সমাবেশে নয়, মতবিরোধে — যখন একসঙ্গে রজ্জু ধরে থাকা মানে ভুল করা ভাইটির সঙ্গে একই ঘরে থেকে যাওয়া।",
          },
        ],
      },
      {
        h: { en: "Practicing the Two Commands", bn: "দুই নির্দেশের অনুশীলন" },
        p: [
          {
            en: "The passage leaves two disciplines, one vertical and one horizontal. Vertically: keep taqwa's full standard in sight and close the gap daily — a missed prayer restored, a doubtful income left, a tongue restrained. Horizontally: treat every fraying bond in your family and community as your assignment, because the verse makes division everyone's emergency, not a spectator sport.",
            bn: "অংশটি দুটি অনুশীলন রেখে যায় — একটি ঊর্ধ্বমুখী, একটি পারস্পরিক। ঊর্ধ্বমুখী: তাকওয়ার পূর্ণ মানদণ্ড দৃষ্টিতে রাখুন এবং ফাঁকটুকু প্রতিদিন কমান — ছুটে যাওয়া নামায ফিরিয়ে আনা, সন্দেহজনক উপার্জন ছেড়ে দেওয়া, জিহ্বা সংযত করা। পারস্পরিক: পরিবার ও সমাজের প্রতিটি ছিঁড়তে-বসা বন্ধনকে নিজের দায়িত্ব গণ্য করুন, কারণ আয়াতটি বিভক্তিকে বানিয়েছে সবার জরুরি অবস্থা — দর্শক হয়ে দেখার বিষয় নয়।",
          },
          {
            en: "Begin where the verse begins, with the rope itself. A household that reads the Quran together is holding the rope together in the most literal sense available. From there, one act of repair — a call to an estranged relative, a settled quarrel, an apology that costs pride — obeys 3:103 more truly than any amount of lamenting disunity. He joined hearts once as a favour; He is asked, in every such act, to do it again.",
            bn: "শুরু করুন যেখান থেকে আয়াত শুরু করে — রজ্জুটি থেকেই। যে পরিবার একসঙ্গে কুরআন পড়ে, তারা সবচেয়ে আক্ষরিক অর্থেই একসঙ্গে রজ্জু ধরে আছে। সেখান থেকে একটি মেরামতের কাজ — দূরে সরে যাওয়া আত্মীয়কে একটি ফোন, একটি মিটমাট হওয়া ঝগড়া, অহংকারের মূল্যে একটি ক্ষমাপ্রার্থনা — অনৈক্যের জন্য যত খেদই করা হোক তার চেয়ে সত্যভাবে 3:103 মান্য করে। তিনি একবার অনুগ্রহ করে হৃদয় জুড়ে দিয়েছিলেন; এমন প্রতিটি কাজে তাঁর কাছে চাওয়া হয় — তিনি যেন আবার তা করেন।",
          },
        ],
      },
    ],
  },
  '7:180': {
    sections: [
      {
        h: { en: "The Most Beautiful Names", bn: "সর্বসুন্দর নামসমূহ" },
        p: [
          {
            en: "To Allah belong the most beautiful names, so call on Him by them. Al-asma al-husna: husna is a superlative — not merely beautiful names but the most beautiful there are. The phrase appears four times in the Quran — here, and in 17:110, 20:8 and 59:24 — and it is repeatedly attached to practice: call by them, as 7:180 and 17:110 command, and glorify by them, as 59:24's context does. The names are not ornaments; they are the appointed way into knowing their Owner.",
            bn: "আল্লাহরই সর্বসুন্দর নামসমূহ, সুতরাং সেগুলো দিয়েই তাঁকে ডাকো। আল-আসমাউল হুসনা: হুসনা অতিশয়ার্থক — কেবল সুন্দর নাম নয়, যত নাম হতে পারে তার মধ্যে সর্বোত্তম। বাক্যাংশটি কুরআনে চারবার এসেছে — এখানে, আর 17:110, 20:8 ও 59:24 আয়াতে — এবং বারবার তা যুক্ত চর্চার সঙ্গে: সেগুলো দিয়ে ডাকো — যেমন 7:180 ও 17:110 নির্দেশ দেয় — আর সেগুলো দিয়ে মহিমা ঘোষণা করো, যেমন 59:24-এর প্রসঙ্গে এসেছে। নামগুলো অলংকার নয়; সেগুলোই তাদের মালিককে জানার নির্ধারিত পথ।",
          },
          {
            en: "A name in this sense is a description that is fully true. Human titles flatter or approximate; His names state realities without excess or shortfall. That is why the Quran teaches theology mostly through them — verse after verse ends with a pair of names chosen for the moment, and the mufassirun regularly pause at those endings to show why each pair seals its verse.",
            bn: "এই অর্থে নাম হলো সম্পূর্ণ সত্য এক বর্ণনা। মানুষের উপাধি তোষামোদ করে বা কাছাকাছি যায়; তাঁর নামগুলো বাস্তবতা বলে — বাড়তি বা ঘাটতি ছাড়া। এ জন্যই কুরআন ইলাহি পরিচয়ের শিক্ষা দেয় প্রধানত নামগুলোর মাধ্যমে — আয়াতের পর আয়াত শেষ হয় সেই মুহূর্তের জন্য বেছে নেওয়া এক জোড়া নামে, আর মুফাসসিরগণ নিয়মিত সেই সমাপ্তিগুলোতে থেমে দেখান, প্রতিটি জোড়া কেন তার আয়াতে সিলমোহর দেয়।",
          },
        ],
      },
      {
        h: { en: "Whoever Keeps Count of Them", bn: "যে সেগুলো সংরক্ষণ করে" },
        p: [
          {
            en: "Al-Bukhari and Muslim relate that the Prophet ﷺ said: Allah has ninety-nine names, one hundred less one; whoever ahsaha will enter Paradise. Ahsaha is richer than counting: the scholars explain it as taking the names in fully — memorizing them, understanding their meanings, and living toward Allah by what they mean. A man who knows ar-Razzaq is the Provider and still panics over provision has counted the name but not yet kept it.",
            bn: "আল-বুখারী ও মুসলিম বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহর নিরানব্বইটি নাম আছে — একশো থেকে এক কম; যে সেগুলোর ইহসা করবে সে জান্নাতে প্রবেশ করবে। ইহসা গোনার চেয়ে সমৃদ্ধ: আলিমগণ এর ব্যাখ্যা করেন নামগুলোকে পুরোপুরি আত্মস্থ করা — মুখস্থ করা, অর্থ বোঝা, আর সেগুলোর অর্থ অনুযায়ী আল্লাহর দিকে জীবন যাপন করা। যে জানে আর-রাযযাক মানে রিযিকদাতা, অথচ রিযিক নিয়ে আতঙ্কে ভোগে — সে নামটি গুনেছে, এখনো রক্ষা করেনি।",
          },
          {
            en: "The itemized lists of ninety-nine that circulate come from later narrators and compilers; the soundly transmitted wording gives the number, not a fixed roster, and scholars' compiled lists differ. The practical door this opens is generous: gather His names from the Quran and the sound Sunnah yourself, name by name, and the gathering is itself the act the hadith rewards.",
            bn: "প্রচলিত নিরানব্বই নামের তালিকাগুলো এসেছে পরবর্তী বর্ণনাকারী ও সংকলকদের থেকে; বিশুদ্ধ সূত্রে বর্ণিত শব্দগুলো সংখ্যাটি দেয়, নির্দিষ্ট কোনো তালিকা নয় — আর আলিমদের সংকলিত তালিকাগুলোও ভিন্ন ভিন্ন। এতে যে ব্যবহারিক দরজা খোলে তা উদার: কুরআন ও বিশুদ্ধ সুন্নাহ থেকে নিজেই তাঁর নামগুলো সংগ্রহ করুন, নামের পর নাম — এই সংগ্রহ করাটাই সেই আমল যার পুরস্কারের কথা হাদীস বলে।",
          },
        ],
      },
      {
        h: { en: "Matching the Name to the Need", bn: "প্রয়োজনের সঙ্গে নামের মিল" },
        p: [
          {
            en: "Fad'uhu biha — call on Him by them. The instruction shapes du'a into something precise. Seeking forgiveness, call on al-Ghafur; seeking provision, on ar-Razzaq; at a dead end, on al-Fattah, who opens. 17:110 makes the breadth explicit: call upon Allah or call upon ar-Rahman — whichever you call, to Him belong the most beautiful names. The name you choose is itself a statement of what you believe He is.",
            bn: "ফাদউহু বিহা — সেগুলো দিয়ে তাঁকে ডাকো। নির্দেশটি দোয়াকে সুনির্দিষ্ট রূপ দেয়। ক্ষমা চাইলে ডাকুন আল-গাফূরকে; রিযিক চাইলে আর-রাযযাককে; পথ বন্ধ মনে হলে আল-ফাত্তাহকে — যিনি খুলে দেন। 17:110 বিস্তৃতিটি স্পষ্ট করে: আল্লাহ বলে ডাকো বা আর-রাহমান বলে ডাকো — যে নামেই ডাকো, সর্বসুন্দর নামগুলো তাঁরই। আপনি যে নামটি বেছে নেন, তা নিজেই এক ঘোষণা — আপনি তাঁকে কী বিশ্বাস করেন।",
          },
          {
            en: "The Prophet's ﷺ own supplications work this way, gathering the names that fit the request — the reported du'as for morning and evening, distress and forgiveness each reach for particular names. Praying this way changes the person praying: to ask al-Ghafur is to rehearse, in the middle of your fear of your own sin, the fact that forgiving is what He is.",
            bn: "নবী ﷺ-এর নিজের দোয়াগুলোও এভাবেই কাজ করে — আবেদনের সঙ্গে মানানসই নামগুলো একত্র করে; সকাল-সন্ধ্যা, দুশ্চিন্তা ও ক্ষমার বর্ণিত দোয়াগুলো প্রতিটিই নির্দিষ্ট নামের দিকে হাত বাড়ায়। এভাবে দোয়া করা দোয়াকারীকেই বদলে দেয়: আল-গাফূরের কাছে চাওয়া মানে নিজের গুনাহের ভয়ের ঠিক মাঝখানে এই সত্যটি অনুশীলন করা — ক্ষমা করাই তাঁর পরিচয়।",
          },
        ],
      },
      {
        h: { en: "Deviation in His Names", bn: "নামে বিকৃতি" },
        p: [
          {
            en: "The verse's second half warns: and leave those who commit ilhad in His names; they will be repaid for what they used to do. Ilhad is deviation, veering from the straight. The commentators list its classical forms: the pagans deriving idol-names from His — al-Lat from Allah, al-'Uzza from al-'Aziz, as related from the early authorities — denying the names outright, emptying them of meaning, or extending them to creatures as if creatures shared them.",
            bn: "আয়াতের দ্বিতীয় অংশ সতর্ক করে: আর তাদের ছেড়ে দাও যারা তাঁর নামে ইলহাদ করে; তারা যা করত তার প্রতিফল তাদের দেওয়া হবে। ইলহাদ মানে বিচ্যুতি, সরল থেকে বেঁকে যাওয়া। মুফাসসিরগণ এর চিরায়ত রূপগুলো তালিকা করেন: মুশরিকদের তাঁর নাম থেকে মূর্তির নাম বানানো — আল্লাহ থেকে আল-লাত, আল-আযীয থেকে আল-উযযা, যেমন প্রাথমিক ইমামদের থেকে বর্ণিত — নামগুলো সরাসরি অস্বীকার করা, সেগুলোকে অর্থশূন্য করে ফেলা, কিংবা সৃষ্টির ওপর এমনভাবে প্রসারিত করা যেন সৃষ্টিও সেগুলোর অংশীদার।",
          },
          {
            en: "The warning still has work to do. Names of God invented from imagination, His attributes explained away until nothing remains, His mercy or His justice denied in anger — each is a way of worshipping a god other than the One who named Himself. The verse's discipline is simple: learn who He is from what He said about Himself, and guard that knowledge as carefully as any inheritance.",
            bn: "সতর্কবাণীটির কাজ আজও ফুরায়নি। কল্পনা থেকে বানানো আল্লাহর নাম, ব্যাখ্যার নামে তাঁর গুণাবলি এমনভাবে উড়িয়ে দেওয়া যে কিছুই অবশিষ্ট থাকে না, রাগের বশে তাঁর রহমত বা তাঁর ইনসাফ অস্বীকার — প্রতিটিই এমন এক উপাস্যের ইবাদতের পথ, যিনি নিজের নাম নিজে দেওয়া সেই সত্তা নন। আয়াতের অনুশাসনটি সরল: তিনি কে তা শিখুন তিনি নিজের সম্পর্কে যা বলেছেন তা থেকে, আর সেই জ্ঞানকে রক্ষা করুন যেকোনো উত্তরাধিকারের মতোই যত্নে।",
          },
        ],
      },
      {
        h: { en: "How the Quran Teaches God", bn: "কুরআন যেভাবে আল্লাহকে চেনায়" },
        p: [
          {
            en: "59:22-24 shows the method at full strength: three verses that are almost nothing but names — the Knower of the unseen and the witnessed, ar-Rahman ar-Rahim, the King, the Holy, Peace, the Securer, the Overseer, the Mighty, the Compeller, the Supreme, the Creator, the Inventor, the Fashioner — closing with: to Him belong the most beautiful names. The Quran's answer to the question who is God is not an abstraction; it is this cascade.",
            bn: "59:22-24 পদ্ধতিটি পূর্ণ শক্তিতে দেখায়: তিনটি আয়াত যা প্রায় কেবলই নাম — অদৃশ্য ও দৃশ্যের জ্ঞানী, আর-রাহমান আর-রাহীম, বাদশাহ, মহাপবিত্র, শান্তি, নিরাপত্তাদাতা, রক্ষণাবেক্ষণকারী, পরাক্রমশালী, মহাপ্রতাপশালী, গর্বের অধিকারী, স্রষ্টা, উদ্ভাবক, রূপদানকারী — শেষ হয় এই বলে: সর্বসুন্দর নামগুলো তাঁরই। আল্লাহ কে — এই প্রশ্নে কুরআনের উত্তর কোনো বিমূর্ত ধারণা নয়; উত্তরটি এই নামের স্রোত।",
          },
          {
            en: "20:8 sets the same seal on the story of Musa (AS) about to begin: Allah — there is no deity except Him; to Him belong the best names. Everywhere the phrase appears, it converts theology into address. You do not merely conclude that God is merciful; you call Him ar-Rahman, to His face, and the knowledge becomes a relationship.",
            bn: "20:8 একই সিলমোহর বসায় শুরু হতে যাওয়া মূসা (আঃ)-এর কাহিনির মুখে: আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই; সর্বোত্তম নামগুলো তাঁরই। বাক্যাংশটি যেখানেই আসে, সেখানেই তত্ত্বকে সম্বোধনে রূপান্তরিত করে। আপনি কেবল সিদ্ধান্তে পৌঁছান না যে আল্লাহ দয়ালু; আপনি তাঁকে সরাসরি ডাকেন আর-রাহমান বলে — আর জ্ঞানটি হয়ে ওঠে সম্পর্ক।",
          },
        ],
      },
      {
        h: { en: "A Practice of One Name", bn: "একটি নামের অনুশীলন" },
        p: [
          {
            en: "The practical entry is one name at a time. Take a single name for a week: find its verses, learn what the scholars say it means, watch for its traces in your own day, then use it in sujud and in du'a until calling it feels like recognition rather than recitation. Ninety-nine such weeks is a curriculum the hadith itself attached to Paradise.",
            bn: "ব্যবহারিক প্রবেশপথ — এক সময়ে একটি নাম। এক সপ্তাহের জন্য একটিমাত্র নাম নিন: এর আয়াতগুলো খুঁজুন, আলিমগণ এর অর্থ কী বলেন তা শিখুন, নিজের দিনের মধ্যে এর চিহ্নগুলো লক্ষ করুন, তারপর সিজদায় ও দোয়ায় সেটি ব্যবহার করুন — যতক্ষণ না নামটি ডাকা আবৃত্তি নয়, চেনার মতো অনুভূত হয়। এমন নিরানব্বইটি সপ্তাহ এমন এক পাঠক্রম, যাকে হাদীস নিজেই জান্নাতের সঙ্গে যুক্ত করেছে।",
          },
          {
            en: "And let the names correct your image of Allah whenever fear distorts it. The verse began with an instruction and ended with a warning because both movements matter: reach for Him by what He truly is, and refuse every picture of Him that He did not give. Between those two disciplines, the heart's knowledge of its Lord stays both warm and true.",
            bn: "আর ভয় যখনই আল্লাহ সম্পর্কে আপনার ধারণা বিকৃত করে, নামগুলোকে তা সংশোধন করতে দিন। আয়াতটি শুরু হয়েছে নির্দেশ দিয়ে, শেষ হয়েছে সতর্কবাণী দিয়ে — কারণ দুটি গতিই জরুরি: তিনি সত্যিকারে যা, সেই পরিচয়েই তাঁর দিকে হাত বাড়ান, আর তাঁর যে ছবি তিনি নিজে দেননি তার প্রতিটি প্রত্যাখ্যান করুন। এই দুই অনুশাসনের মাঝখানে হৃদয়ের রব-পরিচয় থাকে একই সঙ্গে উষ্ণ ও সত্য।",
          },
        ],
      },
    ],
  },
  '10:62-64': {
    sections: [
      {
        h: { en: "Who His Allies Are", bn: "তাঁর বন্ধু কারা" },
        p: [
          {
            en: "Unquestionably, the awliya of Allah — no fear will be upon them, nor will they grieve. The word wali carries closeness and alliance, and around it whole mythologies have grown: sainthood as a special caste, marked by wonders and reached by secrets. So 10:63 immediately defines the term and closes the mythology: those who believed and used to fear Allah. Faith and taqwa — the definition contains nothing else.",
            bn: "জেনে রাখো, আল্লাহর আওলিয়া — তাদের কোনো ভয় নেই, তারা দুঃখিতও হবে না। ওয়ালী শব্দটি বহন করে নৈকট্য ও মৈত্রী, আর একে ঘিরে গড়ে উঠেছে আস্ত সব কল্পকথা: বিশেষ এক শ্রেণি হিসেবে বুযুর্গি, যার চিহ্ন অলৌকিকতা আর পথ গোপন রহস্য। তাই 10:63 সঙ্গে সঙ্গেই শব্দটির সংজ্ঞা দিয়ে কল্পকথার দরজা বন্ধ করে: যারা ঈমান এনেছে এবং তাকওয়া অবলম্বন করত। ঈমান ও তাকওয়া — সংজ্ঞায় এছাড়া আর কিছুই নেই।",
          },
          {
            en: "The definition is the most quoted thing the mufassirun say here, because it makes walaya open. No lineage is named, no order, no initiation, no miracle. Whoever believes and is mindful of Allah has a share of His alliance in exact proportion to those two qualities — and whoever claims the rank without them has only the claim.",
            bn: "মুফাসসিরগণ এখানে যা বলেন তার মধ্যে এই সংজ্ঞাটিই সবচেয়ে বেশি উদ্ধৃত, কারণ এটি ওয়ালায়াকে সবার জন্য খোলা করে দেয়। কোনো বংশের নাম নেই, কোনো তরিকা নেই, কোনো দীক্ষা নেই, কোনো কারামত নেই। যে ঈমান আনে ও আল্লাহ-সচেতন থাকে, ঠিক সেই দুই গুণের অনুপাতেই তার তাঁর মৈত্রীর অংশ আছে — আর যে গুণ দুটি ছাড়া পদটি দাবি করে, তার আছে কেবল দাবিটাই।",
          },
        ],
      },
      {
        h: { en: "No Fear, No Grief", bn: "নেই ভয়, নেই দুঃখ" },
        p: [
          {
            en: "The commentators observe the pair's precision: khawf, fear, faces what may come; huzn, grief, faces what has passed. Between them they cover every direction from which sorrow enters a life. The verse does not promise that Allah's allies feel nothing — the prophets themselves knew fear and sadness — but that neither will settle on them as a final state, and that on the Day it matters most, both are lifted entirely.",
            bn: "মুফাসসিরগণ জোড়াটির সূক্ষ্মতা লক্ষ করেন: খাওফ — ভয় — মুখ করে থাকে যা আসতে পারে তার দিকে; হুযন — দুঃখ — যা চলে গেছে তার দিকে। দুয়ে মিলে জীবনে বেদনা ঢোকার প্রতিটি দিক ঢেকে ফেলে। আয়াতটি প্রতিশ্রুতি দেয় না যে আল্লাহর বন্ধুরা কিছুই অনুভব করেন না — নবীরাও (আঃ) ভয় ও বিষণ্নতা জেনেছেন — বরং এই যে, কোনোটিই তাদের ওপর চূড়ান্ত অবস্থা হয়ে বসবে না, আর যে দিনটিতে সবচেয়ে বেশি দরকার, সেদিন দুটিই সম্পূর্ণ তুলে নেওয়া হবে।",
          },
          {
            en: "Their security has an unusual source. It does not come from wealth, walls or numbers, but from the two inward qualities of 10:63, and that is why it cannot be confiscated. Everything the world secures, the world can also seize; what faith and taqwa secure sits beyond reach, which is the whole advantage of being allied to the One whom nothing escapes and nothing defeats.",
            bn: "তাদের নিরাপত্তার উৎসটি অস্বাভাবিক। তা আসে না সম্পদ, প্রাচীর বা সংখ্যা থেকে — আসে 10:63 আয়াতের দুটি অন্তর্গত গুণ থেকে। সে জন্যই তা বাজেয়াপ্ত করা যায় না। দুনিয়া যা কিছু নিরাপদ করে, দুনিয়া তা কেড়েও নিতে পারে; ঈমান ও তাকওয়া যা নিরাপদ করে তা নাগালের বাইরে — আর এটিই সেই সত্তার মিত্র হওয়ার পুরো সুবিধা, যাঁর থেকে কিছুই পালায় না এবং যাঁকে কিছুই পরাজিত করে না।",
          },
        ],
      },
      {
        h: { en: "Good News in Both Lives", bn: "উভয় জীবনে সুসংবাদ" },
        p: [
          {
            en: "For them is good news in the life of this world and in the Hereafter. The Prophet ﷺ explained the worldly share: the righteous dream a Muslim sees or that is seen about him — related in the sound collections as what remains of the tidings of prophethood. Muslim also relates that when a man does good and people praise him for it, that is the immediate glad tidings of the believer.",
            bn: "তাদের জন্য সুসংবাদ দুনিয়ার জীবনে ও আখিরাতে। দুনিয়ার অংশটির ব্যাখ্যা নবী ﷺ নিজে দিয়েছেন: সেই ভালো স্বপ্ন যা একজন মুসলিম দেখে বা তার সম্পর্কে দেখা হয় — বিশুদ্ধ সংকলনগুলোতে বর্ণিত, নবুওয়াতের সুসংবাদসমূহের যা অবশিষ্ট আছে তা হিসেবে। মুসলিম আরও বর্ণনা করেন: মানুষ যখন ভালো কাজ করে এবং লোকে তার জন্য তার প্রশংসা করে, তা মুমিনের আগাম সুসংবাদ।",
          },
          {
            en: "The commentators add the third and greatest instalment: the tidings the angels bring at death, described in 41:30 — those who said our Lord is Allah and stood firm, upon them the angels descend: do not fear and do not grieve, and receive the good news of the Garden you were promised. The same two words, fear and grief, cancelled at the exact moment humans dread most.",
            bn: "মুফাসসিরগণ যোগ করেন তৃতীয় ও সর্বশ্রেষ্ঠ কিস্তিটি: মৃত্যুর সময় ফেরেশতাদের আনা সুসংবাদ, যার বর্ণনা 41:30 আয়াতে — যারা বলেছে আমাদের রব আল্লাহ, তারপর অবিচল থেকেছে, তাদের ওপর ফেরেশতারা নেমে আসে: ভয় কোরো না, দুঃখও কোরো না, আর সেই জান্নাতের সুসংবাদ নাও যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছিল। সেই একই দুটি শব্দ — ভয় ও দুঃখ — বাতিল হয়ে যায় ঠিক সেই মুহূর্তে, মানুষ যাকে সবচেয়ে বেশি ভয় পায়।",
          },
        ],
      },
      {
        h: { en: "Words That Do Not Change", bn: "যে বাণী বদলায় না" },
        p: [
          {
            en: "Then the guarantee: no change is there in the words of Allah — that is the great attainment. Promises fail for two reasons, deceit or inability, and both are impossible for Him. The verse fixes the promise's reliability to His own nature: His words do not change because He does not change His word, as 50:29 says — the word will not be altered with Me.",
            bn: "তারপর নিশ্চয়তা: আল্লাহর বাণীসমূহে কোনো পরিবর্তন নেই — এটিই মহাসাফল্য। প্রতিশ্রুতি ভাঙে দুটি কারণে — প্রতারণা অথবা অক্ষমতা — এবং দুটিই তাঁর ক্ষেত্রে অসম্ভব। আয়াতটি প্রতিশ্রুতির নির্ভরযোগ্যতাকে বেঁধে দেয় তাঁর নিজের সত্তার সঙ্গে: তাঁর বাণী বদলায় না, কারণ তিনি নিজের কথা বদলান না — যেমন 50:29 বলে: আমার কাছে কথা রদবদল হয় না।",
          },
          {
            en: "Al-fawz al-'azim, the great attainment, is the Quran's settled name for the best possible outcome. Attaching it here teaches proportion: the triumph is not the dream, nor the people's praise, but the standing itself — to be someone Allah calls His ally, guarded from fear and grief by a promise that cannot be revised in either world.",
            bn: "আল-ফাওযুল আযীম — মহাসাফল্য — সর্বোত্তম সম্ভাব্য পরিণতির জন্য কুরআনের নির্ধারিত নাম। এখানে তা যুক্ত করা শেখায় অনুপাতবোধ: বিজয় স্বপ্নটি নয়, লোকের প্রশংসাও নয়, বরং মর্যাদাটিই — এমন কেউ হওয়া যাকে আল্লাহ নিজের মিত্র বলেন, এমন এক প্রতিশ্রুতিতে ভয় ও দুঃখ থেকে সুরক্ষিত, যা দুই জগতের কোনোটিতেই সংশোধিত হতে পারে না।",
          },
        ],
      },
      {
        h: { en: "The Road Into Walaya", bn: "ওয়ালায়ার পথ" },
        p: [
          {
            en: "Al-Bukhari relates the hadith qudsi that maps the road: whoever shows enmity to a wali of Mine, I have declared war upon him; My servant draws near to Me with nothing more beloved to Me than what I have made obligatory upon him, and he keeps drawing near with voluntary acts until I love him. The order is the point — the obligations first, then the extras, and love at the end of a long ordinary road.",
            bn: "আল-বুখারী সেই হাদীসে কুদসী বর্ণনা করেন যা পথের মানচিত্র এঁকে দেয়: যে আমার কোনো ওয়ালীর সঙ্গে শত্রুতা করে, আমি তার বিরুদ্ধে যুদ্ধ ঘোষণা করলাম; আমার বান্দা আমার নৈকট্য লাভ করে এমন কিছু দিয়ে নয় যা আমার কাছে তার ওপর ফরয করা বিষয়ের চেয়ে প্রিয়তর, আর সে নফল আমল দিয়ে নৈকট্য বাড়াতেই থাকে যতক্ষণ না আমি তাকে ভালোবাসি। ক্রমটিই মূল কথা — আগে ফরযগুলো, তারপর অতিরিক্ত, আর ভালোবাসা এক দীর্ঘ সাদামাটা পথের শেষে।",
          },
          {
            en: "Nothing in that road is exotic. Prayers on time, honest earnings, dues paid, then the gentle accumulation of voluntary prayer, fasting, charity and remembrance. The hadith continues that when Allah loves the servant, He is the hearing with which he hears and the seeing with which he sees, and if he asks, He gives him — the lived meaning of having Allah as one's wali.",
            bn: "এই পথের কোনো কিছুই অলৌকিক নয়। সময়মতো নামায, হালাল উপার্জন, প্রাপ্য আদায় — তারপর নফল নামায, রোযা, সদকা ও যিকিরের ধীর সঞ্চয়। হাদীসটি আরও বলে: আল্লাহ যখন বান্দাকে ভালোবাসেন, তিনি হয়ে যান সেই শ্রবণ যা দিয়ে সে শোনে, সেই দৃষ্টি যা দিয়ে সে দেখে, আর সে চাইলে তিনি তাকে দেন — আল্লাহকে নিজের ওয়ালী হিসেবে পাওয়ার জীবন্ত অর্থ এটিই।",
          },
        ],
      },
      {
        h: { en: "Measuring by the Right Scale", bn: "সঠিক মানদণ্ডে মাপা" },
        p: [
          {
            en: "These verses re-calibrate two judgments. About others: rank in Allah's sight tracks faith and taqwa, not fame, wealth or titles — so the unnoticed woman of consistent prayer may outrank the celebrated. About ourselves: anxiety about the future and grief over the past are, among much else, signals showing where our security is currently invested, and in what.",
            bn: "এই আয়াতগুলো দুটি বিচারকে নতুন করে মাপে। অন্যদের সম্পর্কে: আল্লাহর কাছে মর্যাদা চলে ঈমান ও তাকওয়ার পথ ধরে — খ্যাতি, সম্পদ বা উপাধির পথে নয় — তাই নিয়মিত নামাযের সেই অনালোচিত নারী বিখ্যাতজনকে ছাড়িয়ে যেতে পারেন। নিজেদের সম্পর্কে: ভবিষ্যতের দুশ্চিন্তা আর অতীতের দুঃখ, আরও অনেক কিছুর সঙ্গে, সংকেত দেয় আমাদের নিরাপত্তা এই মুহূর্তে কোথায় বিনিয়োগ করা — আর কীসে।",
          },
          {
            en: "The response the passage invites is to move the investment. Strengthen the two qualifying qualities — belief, examined and fed; taqwa, practiced in small daily refusals — and the promised freedoms follow at their own pace, in this life as tranquillity and in the next completely. That is the trade 10:64 calls the great attainment, offered without change to anyone willing to be His ally on His terms.",
            bn: "অংশটি যে সাড়ার আমন্ত্রণ জানায় তা হলো বিনিয়োগটাই সরিয়ে নেওয়া। যোগ্যতা নির্ধারণকারী দুই গুণকে মজবুত করুন — ঈমান, যাচাই করা ও পুষ্ট করা; তাকওয়া, ছোট ছোট দৈনিক প্রত্যাখ্যানে চর্চিত — আর প্রতিশ্রুত মুক্তিগুলো আসবে নিজেদের গতিতে: এই জীবনে প্রশান্তি হয়ে, পরের জীবনে সম্পূর্ণরূপে। এই বিনিময়কেই 10:64 বলে মহাসাফল্য — অপরিবর্তিতভাবে দেওয়া প্রত্যেককে, যে তাঁর শর্তে তাঁর মিত্র হতে রাজি।",
          },
        ],
      },
    ],
  },
  '18:23-24': {
    sections: [
      {
        h: { en: "Never Say Tomorrow Plainly", bn: "নিছক কাল করব নয়" },
        p: [
          {
            en: "And never say of anything, indeed I will do that tomorrow, except adding: if Allah wills. The prohibition is aimed at a habit so universal we barely hear ourselves doing it — announcing the future as if we owned it. The verse does not forbid planning; it forbids planning's arrogant grammar. Tomorrow may be spoken of, but only with its true owner acknowledged in the same breath.",
            bn: "আর কোনো বিষয়ে কখনো বোলো না, আমি আগামীকাল নিশ্চয়ই তা করব — এ কথা না যোগ করে: যদি আল্লাহ চান। নিষেধটি এমন এক অভ্যাসের দিকে তাক করা, যা এতই সর্বজনীন যে নিজের মুখে তা শুনতেই পাই না — ভবিষ্যৎ ঘোষণা করা এমনভাবে যেন তার মালিক আমরাই। আয়াতটি পরিকল্পনা নিষেধ করে না; নিষেধ করে পরিকল্পনার অহংকারী ভাষাভঙ্গি। আগামীকালের কথা বলা যাবে, তবে কেবল একই নিঃশ্বাসে তার প্রকৃত মালিককে স্বীকার করে।",
          },
          {
            en: "The exception phrase, insha'Allah, is not a verbal ornament or a polite hedge. Said with its meaning, it is a precise statement of reality: my intention is real, my ability is borrowed, and between the two stands a will that overrules mine, as 76:30 states — you do not will except that Allah wills. Every honest plan has that clause in it whether spoken or not; the verse asks that it be spoken.",
            bn: "ব্যতিক্রম-বাক্যটি — ইনশাআল্লাহ — কোনো মৌখিক অলংকার বা ভদ্রতার রাখঢাক নয়। অর্থসহ বললে এটি বাস্তবতার এক নিখুঁত বিবৃতি: আমার সংকল্প সত্য, আমার সামর্থ্য ধার করা, আর দুয়ের মাঝখানে দাঁড়িয়ে এমন এক ইচ্ছা যা আমারটির ওপরে — যেমন 76:30 বলে: তোমরা ইচ্ছা করো না, আল্লাহ ইচ্ছা না করলে। প্রতিটি সৎ পরিকল্পনায় ধারাটি এমনিতেই আছে, বলা হোক বা না হোক; আয়াতটি চায় তা বলা হোক।",
          },
        ],
      },
      {
        h: { en: "The Occasion Related", bn: "বর্ণিত প্রেক্ষাপট" },
        p: [
          {
            en: "The books of sira and tafsir relate the setting: Quraysh, prompted by questions gathered from the People of the Book — about the young men of the cave, about Dhul-Qarnayn — put them to the Prophet ﷺ, and he said, I will answer you tomorrow, without saying if Allah wills. The revelation then withheld itself for a period the narrations describe as painful, while Makkah gloated, before Surah al-Kahf came down with the answers — and with this instruction.",
            bn: "সীরাত ও তাফসীরের কিতাবসমূহ প্রেক্ষাপটটি বর্ণনা করে: আহলে কিতাবের কাছ থেকে সংগ্রহ করা প্রশ্ন নিয়ে — গুহার যুবকদের সম্পর্কে, যুলকারনাইন সম্পর্কে — কুরাইশরা তা নবী ﷺ-এর সামনে রাখে, আর তিনি বলেন, আগামীকাল তোমাদের উত্তর দেব — ইনশাআল্লাহ না বলে। এরপর ওহী কিছুকাল থেমে থাকে — বর্ণনাগুলো সময়টিকে বেদনাদায়ক বলে বর্ণনা করে — মক্কা যখন বিদ্রূপে মেতে, তখন সূরা আল-কাহফ নাযিল হয় উত্তরগুলো নিয়ে — এবং এই নির্দেশ নিয়ে।",
          },
          {
            en: "Read that way, the verses carry a tenderness alongside the rebuke. The Prophet ﷺ had not boasted; he had merely assumed a normal tomorrow. Even that assumption was corrected, in him and through him for us — and the correction arrived wrapped inside the very surah whose delay taught the lesson, so the Book's readers would never separate the rule from the experience that sealed it.",
            bn: "এভাবে পড়লে আয়াতগুলো তিরস্কারের পাশাপাশি এক কোমলতাও বহন করে। নবী ﷺ অহংকার করেননি; কেবল একটি স্বাভাবিক আগামীকাল ধরে নিয়েছিলেন। সেই অনুমানটুকুও সংশোধিত হলো — তাঁর মধ্যে, এবং তাঁর মাধ্যমে আমাদের জন্য — আর সংশোধনটি এলো ঠিক সেই সূরার ভেতরে মোড়া হয়ে, যার বিলম্বই শিক্ষাটি দিয়েছিল; যাতে কিতাবের পাঠকেরা নিয়মটিকে কখনো আলাদা করতে না পারে সেই অভিজ্ঞতা থেকে, যা তাতে সিলমোহর দিয়েছে।",
          },
        ],
      },
      {
        h: { en: "When You Forget", bn: "ভুলে গেলে" },
        p: [
          {
            en: "And remember your Lord when you forget. The commentators take the clause in two connected ways: say if Allah wills when you remember, even after the moment has passed — an opinion related from the early authorities — and, more broadly, let remembrance be the standing repair for every lapse. Forgetting is not the crime; staying forgetful is. The door back is simply dhikr, resumed the instant you notice.",
            bn: "আর ভুলে গেলে তোমার রবকে স্মরণ করো। মুফাসসিরগণ বাক্যটিকে দুটি সংযুক্ত অর্থে নেন: মনে পড়লেই ইনশাআল্লাহ বলো, মুহূর্তটি পেরিয়ে গেলেও — প্রাথমিক ইমামদের থেকে বর্ণিত একটি মত — আর ব্যাপকতর অর্থে: স্মরণকেই প্রতিটি ত্রুটির স্থায়ী মেরামত হতে দাও। ভুলে যাওয়া অপরাধ নয়; ভুলে থাকাটাই। ফেরার দরজা কেবল যিকির — খেয়াল হওয়ামাত্র আবার শুরু করা।",
          },
          {
            en: "The verse then adds a du'a with a surprising reach: and say, perhaps my Lord will guide me to something nearer than this in rightness. Having surrendered tomorrow, the planner is taught to ask for a better plan than his own. The sentence assumes Allah's option is not merely to permit or block what we intend, but to substitute something closer to the good we were actually seeking.",
            bn: "আয়াতটি এরপর যোগ করে বিস্ময়কর নাগালের একটি দোয়া: আর বলো, আশা করি আমার রব আমাকে এর চেয়েও সঠিকতার নিকটতর কিছুর দিকে পথ দেখাবেন। আগামীকাল সমর্পণ করার পর পরিকল্পনাকারীকে শেখানো হয় নিজের চেয়ে ভালো পরিকল্পনা চাইতে। বাক্যটি ধরেই নেয়: আল্লাহর হাতে বিকল্প কেবল আমাদের সংকল্পকে অনুমতি দেওয়া বা আটকানো নয় — বরং তার জায়গায় এমন কিছু বসানো, যা আমরা আসলে যে কল্যাণ খুঁজছিলাম তার আরও কাছের।",
          },
        ],
      },
      {
        h: { en: "Two Gardens, Two Speeches", bn: "দুই বাগান, দুই উক্তি" },
        p: [
          {
            en: "Surah al-Kahf itself stages the lesson a few pages on. The man of the two gardens walks in boasting, saying he does not think this will ever perish, and 18:39 records the correction his believing companion offers: when you entered your garden, why did you not say — ma sha Allah, la quwwata illa billah — what Allah willed; there is no power except in Allah? The gardens are gone by 18:42, and the speech is the surah's diagnosis of why.",
            bn: "সূরা আল-কাহফ নিজেই কয়েক পৃষ্ঠা পরে শিক্ষাটি মঞ্চস্থ করে। দুই বাগানের মালিক গর্ব করে ঢুকে বলে, সে মনে করে না এসব কখনো ধ্বংস হবে; আর 18:39 লিপিবদ্ধ করে তার মুমিন সঙ্গীর সংশোধন: তুমি যখন তোমার বাগানে ঢুকলে, তখন কেন বললে না — মা শা আল্লাহ, লা কুওয়াতা ইল্লা বিল্লাহ — আল্লাহ যা চেয়েছেন তাই; আল্লাহ ছাড়া কোনো শক্তি নেই? 18:42 নাগাদ বাগানগুলো শেষ, আর ওই উক্তিটিই সূরার দেওয়া রোগনির্ণয় — কেন।",
          },
          {
            en: "68:17-18 tells the same story in miniature: owners of a garden swore they would surely harvest it in the morning, and made no exception — the commentators read the phrase as their failure to say if Allah wills — and by dawn the garden lay as if already harvested, black and bare. Twice, then, the Quran shows confident tomorrow-speech followed by a ruined garden. The pattern is not superstition; it is pedagogy about ownership.",
            bn: "68:17-18 একই কাহিনি ক্ষুদ্রাকারে বলে: এক বাগানের মালিকরা শপথ করেছিল সকালেই তারা অবশ্যই ফল পেড়ে নেবে, আর কোনো ব্যতিক্রম রাখেনি — মুফাসসিরগণ বাক্যাংশটি পড়েন তাদের ইনশাআল্লাহ না বলার ব্যর্থতা হিসেবে — এবং ভোর নাগাদ বাগানটি পড়ে রইল যেন কাটাই হয়ে যাওয়া, কালো ও শূন্য। তাহলে দুবার কুরআন দেখায়: আত্মবিশ্বাসী আগামীকালের বুলি, তারপর ধ্বংস হওয়া বাগান। ধরনটি কুসংস্কার নয়; মালিকানা সম্পর্কে শিক্ষাদান।",
          },
        ],
      },
      {
        h: { en: "What the Phrase Does Inside", bn: "বাক্যটি ভেতরে যা করে" },
        p: [
          {
            en: "Said sincerely, insha'Allah works on the two diseases of planning. It deflates the arrogance of the successful planner, who is reminded mid-sentence that his coming victory requires permission. And it steadies the anxious one, who hears in his own words that outcomes were never his load to carry — his part is effort and honesty, and the result belongs to Someone who wills only with knowledge and wisdom.",
            bn: "আন্তরিকভাবে বললে ইনশাআল্লাহ পরিকল্পনার দুই ব্যাধির ওপর কাজ করে। এটি সফল পরিকল্পনাকারীর অহংকারের হাওয়া ছেড়ে দেয় — বাক্যের মাঝপথেই তাকে মনে করিয়ে দেওয়া হয়, তার আসন্ন বিজয়ের জন্য অনুমতি লাগে। আর এটি উদ্বিগ্নজনকে স্থির করে — সে নিজের কথাতেই শোনে, ফলাফল কখনোই তার বহনের বোঝা ছিল না; তার অংশ প্রচেষ্টা ও সততা, আর ফল তাঁর, যিনি কেবল জ্ঞান ও হিকমত সহকারেই ইচ্ছা করেন।",
          },
          {
            en: "It also keeps speech truthful. A promise made with if Allah wills, sincerely meant, is a promise made within one's actual powers; a promise made without it claims a control no human has ever had. This is why the phrase, worn thin by casual use and sometimes even used to soften an intended refusal, deserves rescue: it is not filler, it is the most accurate thing a planner can say.",
            bn: "এটি কথাকেও সত্যনিষ্ঠ রাখে। আন্তরিকভাবে ইনশাআল্লাহ বলে করা প্রতিশ্রুতি মানুষের প্রকৃত সামর্থ্যের ভেতরের প্রতিশ্রুতি; আর তা ছাড়া করা প্রতিশ্রুতি এমন নিয়ন্ত্রণের দাবি, যা কোনো মানুষের কখনো ছিল না। এ জন্যই বাক্যটি — হালকা ব্যবহারে ক্ষয়ে যাওয়া, কখনো এমনকি ভেতরে ভেতরে ঠিক করা প্রত্যাখ্যানকে নরম করতেও ব্যবহৃত — উদ্ধারের দাবিদার: এটি ফাঁকা বুলি নয়, একজন পরিকল্পনাকারীর মুখে সবচেয়ে নির্ভুল কথা।",
          },
        ],
      },
      {
        h: { en: "Planning Like a Believer", bn: "মুমিনের মতো পরিকল্পনা" },
        p: [
          {
            en: "The verse's discipline, practiced, looks like this: plan thoroughly, speak of the plan with the exception attached and meant, work as hard as the plan deserves, and hold the outcome loosely. When the outcome arrives changed, reach for the du'a of 18:24 — perhaps my Lord will guide me to something nearer than this in rightness — and look for the substitution instead of mourning the script.",
            bn: "চর্চায় আয়াতের অনুশাসনটি দেখতে এমন: পুঙ্খানুপুঙ্খ পরিকল্পনা করুন, পরিকল্পনার কথা বলুন ব্যতিক্রম-বাক্যটি যুক্ত করে ও অর্থসহ, পরিকল্পনা যতটা দাবি করে ততটা পরিশ্রম করুন, আর ফলাফলকে ধরুন আলগা হাতে। ফল যখন বদলে এসে পৌঁছায়, 18:24 আয়াতের দোয়ায় হাত বাড়ান — আশা করি আমার রব আমাকে এর চেয়েও সঠিকতার নিকটতর কিছুর দিকে পথ দেখাবেন — এবং চিত্রনাট্যের শোক না করে প্রতিস্থাপনটি খুঁজুন।",
          },
          {
            en: "Kept over years, the habit rewires expectation itself. Interruptions stop reading as malfunctions of the universe; they become the moments where Allah's plan replaces yours — the exact contingency your daily insha'Allah has been rehearsing for. The believer's calendar stays full and his grip stays light, and the difference between him and the boasting gardener is a few words, said and meant.",
            bn: "বছরের পর বছর ধরে রাখলে অভ্যাসটি প্রত্যাশার তারই নতুন করে গাঁথে। বিঘ্নগুলো আর মহাবিশ্বের যন্ত্রবিভ্রাট বলে পড়া হয় না; সেগুলো হয়ে ওঠে সেই মুহূর্ত, যখন আপনার পরিকল্পনার জায়গা নেয় আল্লাহর পরিকল্পনা — ঠিক সেই সম্ভাবনা, যার মহড়া আপনার প্রতিদিনের ইনশাআল্লাহ দিয়ে আসছিল। মুমিনের সূচি ভরাই থাকে, মুঠো থাকে হালকা — আর তার সঙ্গে গর্বিত বাগানমালিকের পার্থক্য কয়েকটি শব্দ, বলা ও অন্তরে ধারণ করা।",
          },
        ],
      },
    ],
  },
  '41:53': {
    sections: [
      {
        h: { en: "A Promise in Future Tense", bn: "ভবিষ্যৎ কালের প্রতিশ্রুতি" },
        p: [
          {
            en: "Sanurihim ayatina — We will show them Our signs — in the horizons and within themselves, until it becomes clear to them that it is the truth. The verb is future and continuous: not signs already sealed in a completed list, but a showing that goes on. Every generation, the verse promises, will be shown enough — in the world it explores and the self it inhabits — for the truth of the revelation to stand clear.",
            bn: "সানুরীহিম আয়াতিনা — আমি তাদের আমার নিদর্শনগুলো দেখাব — দিগন্তসমূহে এবং তাদের নিজেদের মধ্যে, যতক্ষণ না তাদের কাছে স্পষ্ট হয় যে এটিই সত্য। ক্রিয়াটি ভবিষ্যৎ ও চলমান: সম্পূর্ণ হয়ে যাওয়া কোনো তালিকায় সিলমোহর পড়া নিদর্শন নয়, বরং এমন এক দেখানো যা চলতেই থাকে। আয়াতের প্রতিশ্রুতি: প্রতিটি প্রজন্মকে যথেষ্ট দেখানো হবে — যে জগৎ সে অনুসন্ধান করে আর যে সত্তায় সে বাস করে, দুটিতেই — যাতে ওহীর সত্যতা স্পষ্ট দাঁড়িয়ে যায়।",
          },
          {
            en: "The pronoun in that it is the truth points, the commentators say, to the Quran and the message it carries. The verse thus makes a bold wager: reality itself, honestly examined at any depth, will keep agreeing with the Book. Signs do not replace revelation and revelation does not fear signs; each points at the other, and the showing continues until the seeing is complete.",
            bn: "এটিই সত্য — এই বাক্যের সর্বনামটি, মুফাসসিরগণ বলেন, নির্দেশ করে কুরআন ও তার বহন করা বার্তাকে। আয়াতটি তাই এক সাহসী বাজি রাখে: বাস্তবতা নিজে, যে গভীরতাতেই সততার সঙ্গে পরীক্ষা করা হোক, কিতাবের সঙ্গে একমত হতেই থাকবে। নিদর্শন ওহীর জায়গা নেয় না, ওহীও নিদর্শনকে ভয় পায় না; প্রত্যেকে অন্যটির দিকে ইশারা করে, আর দেখা সম্পূর্ণ না হওয়া পর্যন্ত দেখানো চলতে থাকে।",
          },
        ],
      },
      {
        h: { en: "The Horizons", bn: "দিগন্তসমূহে নিদর্শন" },
        p: [
          {
            en: "Al-afaq, the horizons, was read two ways by the mufassirun, and both readings stand. Some took it as the regions of the earth — the early hearers would live to see the message reach lands they could not name, itself a sign that this word was not an ordinary word. Others took it as the horizons in the plainest sense: the sky and its order, the alternation that 2:164 and 3:190 keep pointing at from their own angles.",
            bn: "আল-আফাক — দিগন্তসমূহ — মুফাসসিরগণ দুইভাবে পড়েছেন, এবং দুটি পাঠই টিকে থাকে। কেউ কেউ একে নিয়েছেন পৃথিবীর অঞ্চলসমূহ অর্থে — প্রথম শ্রোতারা বেঁচে থেকেই দেখবে এই বার্তা এমন সব ভূখণ্ডে পৌঁছেছে যাদের নামও তারা জানত না, যা নিজেই এক নিদর্শন যে এই বাণী সাধারণ বাণী নয়। অন্যরা নিয়েছেন সরলতম অর্থে দিগন্ত: আকাশ ও তার শৃঙ্খলা — যে আবর্তনের দিকে 2:164 ও 3:190 নিজ নিজ কোণ থেকে বারবার ইশারা করে।",
          },
          {
            en: "On either reading the instruction to the reader is the same: look outward, and look as one expecting evidence. The Quran repeatedly commands the looking — 10:101 says, observe what is in the heavens and the earth — and treats the cosmos not as scenery but as speech: ayat, signs, the very word used for the Book's own verses. Scholars have long put it this way: creation and revelation are two books of one Author, each vouching for the other.",
            bn: "যে পাঠই নিন, পাঠকের প্রতি নির্দেশ একই: বাইরে তাকান, এবং তাকান প্রমাণের প্রত্যাশী হয়ে। কুরআন বারবার তাকানোর আদেশ দেয় — 10:101 বলে, দেখো আসমান ও যমীনে কী আছে — আর মহাজগৎকে গণ্য করে দৃশ্যপট নয়, বাণী হিসেবে: আয়াত, নিদর্শন — ঠিক সেই শব্দ যা কিতাবের নিজের বাক্যগুলোর জন্যও ব্যবহৃত। আলিমগণ বহুদিন ধরেই কথাটি এভাবে বলেছেন: সৃষ্টি ও ওহী এক লেখকেরই দুই কিতাব — প্রত্যেকে অন্যটির সাক্ষ্য দেয়।",
          },
        ],
      },
      {
        h: { en: "And Within Themselves", bn: "এবং নিজেদের মধ্যে" },
        p: [
          {
            en: "Wa fi anfusihim — and within their own selves. The commentators point to the body's construction, from a drop to hearing, sight and reasoning; to the sustenance and turning of hearts; and to what a person witnesses of Allah's dealings in his own life. 51:20-21 issues the same double summons: on the earth are signs for the certain, and within yourselves — do you not see?",
            bn: "ওয়া ফী আনফুসিহিম — এবং তাদের নিজেদের মধ্যে। মুফাসসিরগণ ইঙ্গিত করেন দেহের নির্মাণের দিকে — এক বিন্দু থেকে শ্রবণ, দৃষ্টি ও বিবেক পর্যন্ত; হৃদয়ের রিযিক ও তার মোড় ফেরার দিকে; আর নিজের জীবনে আল্লাহর কার্যধারার যা কিছু মানুষ প্রত্যক্ষ করে তার দিকে। 51:20-21 একই দ্বৈত আহ্বান জারি করে: যমীনে নিদর্শন আছে দৃঢ় বিশ্বাসীদের জন্য, আর তোমাদের নিজেদের মধ্যেও — তোমরা কি দেখো না?",
          },
          {
            en: "The inward sign has a special force the outward lacks: you cannot dismiss it as someone else's report. Whoever has watched their own heart shift from despair to tranquillity after du'a, or traced how they were carried through what should have broken them, has been shown a sign in the first person. The self is the one witness no sceptic can claim was somewhere else.",
            bn: "অন্তর্গত নিদর্শনের এমন এক জোর আছে যা বাইরেরটির নেই: একে অন্য কারও প্রতিবেদন বলে উড়িয়ে দেওয়া যায় না। যে নিজের হৃদয়কে দোয়ার পরে হতাশা থেকে প্রশান্তিতে সরে যেতে দেখেছে, কিংবা খুঁজে দেখেছে কীভাবে তাকে পার করিয়ে নেওয়া হয়েছে এমন কিছুর ভেতর দিয়ে যা তাকে ভেঙে ফেলার কথা ছিল — তাকে নিদর্শন দেখানো হয়েছে একেবারে নিজের জবানে। নিজ সত্তা এমন এক সাক্ষী, কোনো সংশয়বাদী যার সম্পর্কে বলতে পারে না যে সে অন্য কোথাও ছিল।",
          },
        ],
      },
      {
        h: { en: "Until It Becomes Clear", bn: "যতক্ষণ না স্পষ্ট হয়" },
        p: [
          {
            en: "Hatta yatabayyana lahum — until it becomes clear to them. Clarity, in the Quran's account, arrives cumulatively: sign upon sign, outer and inner agreeing, until denial requires more effort than acceptance. This is how 2:164 works, piling the heavens, the rain, the ships and the winds into one verse for a people who reason, and how 3:190-191 describes the thinkers whom the alternation of night and day leads to: our Lord, You did not create this in vain.",
            bn: "হাত্তা ইয়াতাবাইয়ানা লাহুম — যতক্ষণ না তাদের কাছে স্পষ্ট হয়। কুরআনের বিবরণে স্পষ্টতা আসে স্তরে স্তরে: নিদর্শনের ওপর নিদর্শন, বাহির ও ভেতর একমত হতে হতে, যতক্ষণ না অস্বীকারে গ্রহণের চেয়ে বেশি পরিশ্রম লাগে। 2:164 এভাবেই কাজ করে — আসমান, বৃষ্টি, জাহাজ আর বাতাসকে এক আয়াতে স্তূপ করে, বোঝে এমন জাতির জন্য; আর 3:190-191 বর্ণনা করে সেই চিন্তাশীলদের, রাত-দিনের আবর্তন যাদের পৌঁছে দেয় এই কথায়: আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি।",
          },
          {
            en: "Note what the verse does not promise: that signs will force belief. Clarity can be shown and still refused; the Quran describes people who saw and turned away. The promise is about the evidence, not the verdict — Allah undertakes that the case will be made plain, and leaves the response where He always leaves it, with the one who has been shown.",
            bn: "লক্ষ করুন আয়াতটি কী প্রতিশ্রুতি দেয় না: নিদর্শন ঈমান জোর করে আদায় করবে — এমন নয়। স্পষ্টতা দেখানো হতে পারে, তবু প্রত্যাখ্যাত হতে পারে; কুরআন এমন মানুষদের বর্ণনা দেয় যারা দেখেও মুখ ফিরিয়েছে। প্রতিশ্রুতিটি প্রমাণ নিয়ে, রায় নিয়ে নয় — আল্লাহ দায়িত্ব নেন যে মামলাটি সুস্পষ্ট করা হবে, আর জবাবটুকু রেখে দেন যেখানে তিনি সবসময় রাখেন: যাকে দেখানো হয়েছে, তার হাতে।",
          },
        ],
      },
      {
        h: { en: "Witness Over All Things", bn: "সবকিছুর সাক্ষী" },
        p: [
          {
            en: "The verse closes above the whole argument: is it not sufficient concerning your Lord that He is, over all things, a Witness? After horizons and selves, the final ground of certainty is not an object but a presence. He does not merely leave traces to be deciphered; He witnesses everything, including the deciphering, including the doubter mid-doubt. For hearts far along the road, this is the deepest proof: knowing themselves seen.",
            bn: "আয়াতটি শেষ হয় পুরো যুক্তির ঊর্ধ্বে উঠে: আপনার রবের ব্যাপারে কি এটুকু যথেষ্ট নয় যে তিনি সবকিছুর ওপর সাক্ষী? দিগন্ত ও নিজ সত্তার পরে নিশ্চয়তার চূড়ান্ত ভিত্তি কোনো বস্তু নয়, এক উপস্থিতি। তিনি কেবল পাঠোদ্ধারের জন্য চিহ্ন রেখে যান না; তিনি সবকিছু প্রত্যক্ষ করেন — পাঠোদ্ধারটিসহ, সংশয়ের মাঝখানে থাকা সংশয়ীসহ। পথের অনেকটা এগিয়ে যাওয়া হৃদয়ের কাছে এটিই গভীরতম প্রমাণ: নিজেকে দেখা-হচ্ছে জানা।",
          },
          {
            en: "The commentators hear in the closing question a gentle relocation of the whole search. Signs are for our benefit, not His need; He was never absent for evidence to establish. So the reflective reader holds both: study the signs gratefully, and remember that the One they point to is nearer than the pointing, a Witness over the very heart that is weighing Him.",
            bn: "সমাপ্তির প্রশ্নটিতে মুফাসসিরগণ শোনেন গোটা অনুসন্ধানের এক কোমল স্থানবদল। নিদর্শন আমাদের উপকারের জন্য, তাঁর প্রয়োজনে নয়; তিনি কখনো অনুপস্থিত ছিলেন না যে প্রমাণ দিয়ে তাঁকে প্রতিষ্ঠা করতে হবে। তাই চিন্তাশীল পাঠক দুটিই ধরে রাখে: কৃতজ্ঞতার সঙ্গে নিদর্শন অধ্যয়ন করে, আর মনে রাখে — সেগুলো যাঁর দিকে ইশারা করে তিনি ইশারার চেয়েও নিকটে, সেই হৃদয়টিরও সাক্ষী, যে হৃদয় তাঁকে ওজন করছে।",
          },
        ],
      },
      {
        h: { en: "Training the Eye", bn: "দৃষ্টির অনুশীলন" },
        p: [
          {
            en: "The verse turns observation into worship. Walk under the night sky deliberately; learn one thing about how your own hand or eye works; watch a season turn — and each time, complete the loop the Quran commands, from the wonder to its Maker. Without the loop, wonder decays into mere information; with it, an ordinary walk becomes what 3:191 describes, remembrance standing, sitting and lying down.",
            bn: "আয়াতটি পর্যবেক্ষণকে ইবাদতে পরিণত করে। ইচ্ছা করেই রাতের আকাশের নিচে হাঁটুন; নিজের হাত বা চোখ কীভাবে কাজ করে তার একটি বিষয় শিখুন; একটি ঋতুর মোড় ফেরা দেখুন — আর প্রতিবার কুরআনের আদেশ করা বৃত্তটি সম্পূর্ণ করুন: বিস্ময় থেকে বিস্ময়ের নির্মাতা পর্যন্ত। বৃত্তটি ছাড়া বিস্ময় ক্ষয়ে যায় নিছক তথ্যে; বৃত্তটিসহ একটি সাধারণ হাঁটাও হয়ে ওঠে যা 3:191 বর্ণনা করে — দাঁড়িয়ে, বসে ও শুয়ে স্মরণ।",
          },
          {
            en: "And keep the promise's tense in mind during dry seasons of faith. We will show them is Allah's undertaking, not yours; your part is to stay honest and keep looking. Certainty in the Quran is not a possession seized once but a clarity that grows as the showing continues — in the horizons, in yourself, until the truth stands where doubt used to live.",
            bn: "আর ঈমানের শুষ্ক মৌসুমে প্রতিশ্রুতির কালটি মনে রাখুন। আমি তাদের দেখাব — এ দায়িত্ব আল্লাহর, আপনার নয়; আপনার অংশ সৎ থাকা আর তাকিয়ে যাওয়া। কুরআনে নিশ্চয়তা একবারে দখল করা কোনো সম্পত্তি নয়, বরং এমন এক স্পষ্টতা যা দেখানো চলতে থাকার সঙ্গে সঙ্গে বাড়ে — দিগন্তে, নিজের মধ্যে — যতক্ষণ না সত্য গিয়ে দাঁড়ায় ঠিক সেখানে, যেখানে আগে সংশয় বাস করত।",
          },
        ],
      },
    ],
  },
  '36:82': {
    sections: [
      {
        h: { en: "The Close of Ya-Sin's Argument", bn: "ইয়াসীনের যুক্তির সমাপ্তি" },
        p: [
          {
            en: "This verse is the summit of the argument that closes Surah Ya-Sin. 36:77-79 sets the scene: man, created from a drop, stands disputing with his Maker, striking a parable and forgetting his own creation — who will give life to bones when they have crumbled? The books of tafsir relate that a denier of resurrection came to the Prophet ﷺ crushing an old bone and scattering its dust as he asked exactly that.",
            bn: "এই আয়াতটি সূরা ইয়াসীনের সমাপ্তি-যুক্তির চূড়া। 36:77-79 দৃশ্যটি সাজায়: এক বিন্দু থেকে সৃষ্ট মানুষ নিজের স্রষ্টার সঙ্গে বিতর্কে দাঁড়িয়ে, উপমা ছুড়ছে আর নিজের সৃষ্টির কথাই ভুলে গেছে — হাড়গুলো চূর্ণ হয়ে গেলে কে সেগুলোকে জীবন দেবে? তাফসীরের কিতাবসমূহ বর্ণনা করে, পুনরুত্থান-অস্বীকারকারী এক ব্যক্তি নবী ﷺ-এর কাছে এসেছিল একটি পুরোনো হাড় গুঁড়িয়ে তার ধুলো ছড়াতে ছড়াতে, ঠিক এই প্রশ্নটিই করতে করতে।",
          },
          {
            en: "The answer given is a method as much as a reply: say, He will give them life who produced them the first time, and He is Knowing of all creation. Restoring is not harder than originating — and the Originator has already been demonstrated by every body in the room. From there the surah widens the evidence, fire from the green tree, the creation of the heavens, until it arrives at this verse's summary of His power.",
            bn: "প্রদত্ত উত্তরটি জবাব যতটা, পদ্ধতিও ততটাই: বলুন, তিনিই সেগুলোকে জীবন দেবেন যিনি প্রথমবার সেগুলো সৃষ্টি করেছেন, আর তিনি সকল সৃষ্টি সম্পর্কে সম্যক জ্ঞাত। ফিরিয়ে আনা প্রথমবার বানানোর চেয়ে কঠিন নয় — আর প্রথম নির্মাতার প্রমাণ তো ঘরের প্রতিটি দেহই দিয়ে রেখেছে। সেখান থেকে সূরাটি প্রমাণ আরও প্রশস্ত করে — সবুজ গাছ থেকে আগুন, আসমানসমূহের সৃষ্টি — যতক্ষণ না পৌঁছায় তাঁর ক্ষমতার এই আয়াত-সারাংশে।",
          },
        ],
      },
      {
        h: { en: "Kun fa-Yakun", bn: "কুন ফা-ইয়াকুন" },
        p: [
          {
            en: "Innama amruhu — His command is only — when He intends a thing, that He says to it: Be, and it is. The restriction particle innama does the work: this is the whole of it. No struggle, no materials gathered, no interval in which the outcome hangs uncertain. The commentators are careful on one point: the wording does not mean He needs speech as a tool, the way we need hands; it expresses how completely reality answers His intent — instantly, without resistance or delay.",
            bn: "ইন্নামা আমরুহু — তাঁর ব্যাপার তো কেবল এই — তিনি যখন কিছু করতে চান, তখন তাকে বলেন: হও, আর তা হয়ে যায়। সীমাবদ্ধকরণ শব্দ ইন্নামা-ই কাজটি করে: এটুকুই সব। কোনো সংগ্রাম নেই, কোনো উপকরণ জোগাড় নেই, এমন কোনো বিরতি নেই যাতে ফলাফল অনিশ্চিত ঝুলে থাকে। মুফাসসিরগণ একটি বিষয়ে সতর্ক: এই ভাষার অর্থ এই নয় যে হাতিয়ার হিসেবে তাঁর বাক্যের প্রয়োজন, যেমন আমাদের হাতের প্রয়োজন; এটি প্রকাশ করে বাস্তবতা তাঁর ইচ্ছায় কত সম্পূর্ণভাবে সাড়া দেয় — তাৎক্ষণিক, কোনো প্রতিরোধ বা বিলম্ব ছাড়া।",
          },
          {
            en: "Between His will and its object there is nothing that could intervene: no rival power, as 2:163 has already established there is none, no shortage, no fatigue — the same freedom from weariness 2:255 attaches to His preserving of the heavens and the earth. Difficulty is a relation between a task and limited strength. Where strength has no limit, the category of difficult simply does not apply.",
            bn: "তাঁর ইচ্ছা ও তার লক্ষ্যবস্তুর মাঝখানে হস্তক্ষেপ করার মতো কিছুই নেই: কোনো প্রতিদ্বন্দ্বী শক্তি নেই — 2:163 আগেই প্রতিষ্ঠা করেছে যে নেই — কোনো ঘাটতি নেই, কোনো ক্লান্তি নেই — সেই একই ক্লান্তিহীনতা যা 2:255 যুক্ত করে আসমান-যমীনের রক্ষণাবেক্ষণে। কঠিন হওয়া হলো কাজ ও সীমিত শক্তির মধ্যকার এক সম্পর্ক। যেখানে শক্তির কোনো সীমা নেই, সেখানে কঠিনের শ্রেণিটিই আর প্রযোজ্য নয়।",
          },
        ],
      },
      {
        h: { en: "Where Else the Word Sounds", bn: "আর যেখানে বাণীটি ধ্বনিত" },
        p: [
          {
            en: "Kun fa-yakun recurs across the Quran, and its placements are a study in themselves. 2:117 attaches it to the origination of the heavens and the earth. 3:47 answers Maryam's astonishment at bearing a child untouched; 3:59 levels Isa (AS) and Adam (AS) — created from dust, then Be, and he was; 19:35 refuses the notion of a son for Allah by it; 40:68 attaches it to giving life and dealing death.",
            bn: "কুন ফা-ইয়াকুন কুরআনজুড়ে ফিরে ফিরে আসে, আর এর অবস্থানগুলো নিজেই এক অধ্যয়নের বিষয়। 2:117 একে যুক্ত করে আসমান-যমীনের সূচনার সঙ্গে। 3:47 উত্তর দেয় মারইয়ামের বিস্ময়ের — স্পর্শ ছাড়া সন্তান ধারণের প্রশ্নে; 3:59 ঈসা (আঃ) ও আদম (আঃ)-কে সমান করে দেয় — মাটি থেকে সৃষ্টি, তারপর হও, আর তিনি হয়ে গেলেন; 19:35 এরই জোরে আল্লাহর পুত্রের ধারণা প্রত্যাখ্যান করে; 40:68 একে যুক্ত করে জীবন দান ও মৃত্যু ঘটানোর সঙ্গে।",
          },
          {
            en: "The pattern is consistent: the phrase appears precisely where human beings say impossible — a universe from nothing, a child without a father, the dead raised. Each time the Quran declines to argue the impossibility on our terms and instead corrects the frame: you are measuring by the strength of creatures. Measured by His command, none of these cases is even distinct from the others; all are one word.",
            bn: "ধরনটি সামঞ্জস্যপূর্ণ: বাক্যাংশটি আসে ঠিক সেখানে, যেখানে মানুষ বলে অসম্ভব — শূন্য থেকে মহাবিশ্ব, পিতা ছাড়া সন্তান, মৃতের পুনরুত্থান। প্রতিবার কুরআন আমাদের শর্তে অসম্ভবতা নিয়ে তর্ক করতে অস্বীকার করে এবং বরং কাঠামোটাই সংশোধন করে: তোমরা মাপছ সৃষ্টির শক্তি দিয়ে। তাঁর নির্দেশ দিয়ে মাপলে এই ঘটনাগুলোর কোনোটি অন্যগুলো থেকে আলাদাও নয়; সবই একটিমাত্র কথা।",
          },
        ],
      },
      {
        h: { en: "The Kingdom in His Hand", bn: "তাঁর হাতে সব রাজত্ব" },
        p: [
          {
            en: "The surah's final verse, 36:83, completes the thought: so exalted is He in whose hand is the malakut — the dominion, the inner sovereignty — of every thing, and to Him you will be returned. Power alone might only awe us; the return makes it personal. The One whose word suffices for anything is also the One before whom every life ends up standing, so His effortless power is not a spectacle but our destination.",
            bn: "সূরার শেষ আয়াত 36:83 ভাবনাটি সম্পূর্ণ করে: অতএব পবিত্র ও মহান তিনি, যাঁর হাতে প্রতিটি জিনিসের মালাকূত — কর্তৃত্ব, অন্তর্গত সার্বভৌমত্ব — আর তাঁরই কাছে তোমাদের ফিরিয়ে নেওয়া হবে। কেবল ক্ষমতা হয়তো আমাদের শুধু স্তম্ভিতই করত; প্রত্যাবর্তন একে ব্যক্তিগত করে তোলে। যাঁর একটি কথাই যেকোনো কিছুর জন্য যথেষ্ট, তিনিই সেই সত্তা যাঁর সামনে প্রতিটি জীবন শেষ পর্যন্ত দাঁড়ায় — তাই তাঁর অনায়াস ক্ষমতা কোনো প্রদর্শনী নয়, আমাদের গন্তব্য।",
          },
          {
            en: "Ya-Sin thus closes by joining the two certainties the surah argued from its opening scenes: He can, and we will return. Resurrection stops being a puzzle about scattered bones — the surah has dissolved that with the first creation, the green tree and the word Be — and becomes instead a scheduled appointment with the Owner of everything, for which the only sensible preparation is deeds.",
            bn: "ইয়াসীন তাই শেষ হয় দুটি নিশ্চয়তাকে জুড়ে দিয়ে, যেগুলোর পক্ষে সূরাটি তার শুরুর দৃশ্যগুলো থেকে যুক্তি সাজিয়েছে: তিনি পারেন, আর আমরা ফিরব। পুনরুত্থান তখন আর ছড়ানো হাড় নিয়ে কোনো ধাঁধা থাকে না — প্রথম সৃষ্টি, সবুজ গাছ আর হও শব্দটি দিয়ে সূরা তা গলিয়ে দিয়েছে — বরং হয়ে ওঠে সবকিছুর মালিকের সঙ্গে এক নির্ধারিত সাক্ষাৎ, যার একমাত্র বুদ্ধিমান প্রস্তুতি আমল।",
          },
        ],
      },
      {
        h: { en: "Effortless for Him, Weighty for Us", bn: "তাঁর জন্য সহজ, আমাদের জন্য গুরুভার" },
        p: [
          {
            en: "Hold the two scales apart and the verse becomes practical. On His side, nothing is heavy: not your provision, not the guidance of a hardened relative, not the mending of what looks finished. On our side, deeds are weighed and days are counted precisely because outcomes are not ours to speak into being. We were given effort, patience and du'a — the creaturely instruments — and He kept Be for Himself.",
            bn: "দুটি পাল্লা আলাদা করে ধরুন — আয়াতটি ব্যবহারিক হয়ে ওঠে। তাঁর দিকে কিছুই ভারী নয়: আপনার রিযিক নয়, কঠিন হয়ে যাওয়া কোনো আত্মীয়ের হিদায়াত নয়, শেষ দেখানো কোনো কিছুর জোড়া লাগাও নয়। আমাদের দিকে আমল ওজন করা হয় আর দিন গোনা হয় ঠিক এ কারণেই যে, ফলাফল মুখের কথায় ঘটিয়ে ফেলা আমাদের কাজ নয়। আমাদের দেওয়া হয়েছে প্রচেষ্টা, ধৈর্য ও দোয়া — সৃষ্টির হাতিয়ার — আর হও তিনি রেখেছেন নিজের জন্য।",
          },
          {
            en: "This division answers both despair and presumption. Despair says the situation is impossible; the verse replies that impossible describes your strength, not His command. Presumption says it will happen because I have arranged it; 18:23-24 has already corrected that grammar — nothing happens except by His will. Between the two corrections stands the believer: working as if effort matters, asking as if only He decides, because both are true.",
            bn: "এই ভাগাভাগি হতাশা ও দাম্ভিকতা দুটিরই জবাব দেয়। হতাশা বলে পরিস্থিতি অসম্ভব; আয়াত উত্তর দেয়: অসম্ভব শব্দটি তোমার শক্তির বর্ণনা, তাঁর নির্দেশের নয়। দাম্ভিকতা বলে এটি ঘটবেই কারণ আমি সব সাজিয়ে রেখেছি; 18:23-24 আগেই সেই ভাষাভঙ্গি সংশোধন করেছে — তাঁর ইচ্ছা ছাড়া কিছুই ঘটে না। দুই সংশোধনের মাঝখানে দাঁড়িয়ে মুমিন: কাজ করে যেন প্রচেষ্টার মূল্য আছে, চায় যেন সিদ্ধান্ত কেবল তাঁরই — কারণ দুটিই সত্য।",
          },
        ],
      },
      {
        h: { en: "Asking Boldly", bn: "সাহস করে চাওয়া" },
        p: [
          {
            en: "The practical fruit is boldness in du'a. People trim their prayers to what seems achievable, as if sparing Allah embarrassment; the verse exposes the courtesy as bad theology. Ask for the whole need — the cure, the reconciliation, the guidance of the person everyone has given up on — because the One being asked does not scale His answers to plausibility. He says Be.",
            bn: "ব্যবহারিক ফল — দোয়ায় সাহস। মানুষ নিজের প্রার্থনা ছেঁটে নেয় যা অর্জনযোগ্য মনে হয় তাতে, যেন আল্লাহকে বিব্রত হওয়া থেকে বাঁচাচ্ছে; আয়াতটি এই সৌজন্যকে ভুল আকীদা বলে উন্মোচন করে। পুরো প্রয়োজনটাই চান — আরোগ্য, মীমাংসা, সেই মানুষটির হিদায়াত যার আশা সবাই ছেড়ে দিয়েছে — কারণ যাঁর কাছে চাওয়া হচ্ছে তিনি নিজের জবাব সম্ভাব্যতার মাপে ছোট করেন না। তিনি বলেন: হও।",
          },
          {
            en: "And let the same word steady you when His decree runs against your wishes. What He willed happened by a word, and what He withheld was withheld with the same total ease — meaning neither was an accident, an oversight or a failure of resources. The heart that absorbs 36:82 stops negotiating with imagined obstacles and deals directly, in trust and asking, with the One whose command is only Be, and it is.",
            bn: "আর তাঁর ফয়সালা যখন আপনার ইচ্ছার বিপরীতে চলে, তখন একই শব্দকে আপনাকে স্থির রাখতে দিন। তিনি যা চেয়েছেন তা ঘটেছে এক কথায়, আর যা আটকে রেখেছেন তা আটকানো হয়েছে সেই একই পূর্ণ অনায়াসে — অর্থাৎ কোনোটিই দুর্ঘটনা নয়, অসাবধানতা নয়, সামর্থ্যের ঘাটতিও নয়। যে হৃদয় 36:82 আত্মস্থ করে, সে কাল্পনিক বাধার সঙ্গে দর-কষাকষি থামিয়ে দেয় এবং ভরসা ও চাওয়া নিয়ে সরাসরি লেনদেন করে তাঁর সঙ্গে — যাঁর নির্দেশ কেবল: হও, আর তা হয়ে যায়।",
          },
        ],
      },
    ],
  },
  '2:164': {
    sections: [
      {
        h: { en: "The Evidence After the Claim", bn: "দাবির পর প্রমাণ" },
        p: [
          {
            en: "The verse before this one, 2:163, makes the largest claim a sentence can carry: your God is one God; there is no deity except Him. This verse immediately opens the case file. Indeed, in the creation of the heavens and the earth, the alternation of night and day, the ships, the rain, the creatures, the winds and the clouds — are signs for a people who reason. Assertion first, then evidence, laid out for any mind willing to work.",
            bn: "এর আগের আয়াত 2:163 করে বসে একটি বাক্যে বহনযোগ্য বৃহত্তম দাবিটি: তোমাদের ইলাহ এক ইলাহ; তিনি ছাড়া কোনো ইলাহ নেই। এই আয়াতটি সঙ্গে সঙ্গে মামলার নথি খুলে দেয়। নিশ্চয় আসমান-যমীনের সৃষ্টিতে, রাত-দিনের আবর্তনে, জাহাজে, বৃষ্টিতে, প্রাণীদের মধ্যে, বাতাস আর মেঘে — নিদর্শন রয়েছে বোঝে এমন জাতির জন্য। আগে ঘোষণা, তারপর প্রমাণ — সাজিয়ে রাখা যেকোনো মনের সামনে, যে মন খাটতে রাজি।",
          },
          {
            en: "The commentators note the pairing as a model of how the Quran argues. It does not demand belief in oneness as a blind leap; it points at the world and says: examine. The verse's closing phrase — li-qawmin ya'qilun, for a people who use reason — makes intellect the intended audience. Reason, in the Quran, is not faith's rival to be subdued but faith's instrument, invited to do its best work on the evidence.",
            bn: "মুফাসসিরগণ এই জোড়টিকে লক্ষ করেন কুরআনের যুক্তি দেওয়ার এক আদর্শ নমুনা হিসেবে। এটি একত্বে বিশ্বাসকে অন্ধ লাফ হিসেবে দাবি করে না; জগতের দিকে আঙুল তুলে বলে: পরীক্ষা করো। আয়াতের সমাপ্তি-বাক্য — লি-কাওমিন ইয়াকিলূন, বোঝে এমন জাতির জন্য — বুদ্ধিকেই অভীষ্ট শ্রোতা বানায়। কুরআনে বিবেক ঈমানের দমনযোগ্য প্রতিদ্বন্দ্বী নয়, ঈমানের হাতিয়ার — প্রমাণের ওপর নিজের সেরা কাজটি করার আমন্ত্রিত অতিথি।",
          },
        ],
      },
      {
        h: { en: "The Signs the Verse Gathers", bn: "আয়াতে গাঁথা নিদর্শনসমূহ" },
        p: [
          {
            en: "Count what the verse gathers: the creation of the heavens and the earth; the alternation of night and day; the ships running through the sea with what benefits people; the water Allah sends down, giving life to the earth after its death; every creature He has scattered through it; the turning of the winds; and the clouds held subjected between sky and earth. From cosmic architecture down to a drifting cloud, one unbroken chain of evidence.",
            bn: "গুনে দেখুন আয়াতটি কী কী একত্র করে: আসমান-যমীনের সৃষ্টি; রাত-দিনের আবর্তন; মানুষের উপকারী পণ্য নিয়ে সাগরে চলা জাহাজ; আল্লাহর নামানো পানি — যা মরে যাওয়ার পর যমীনকে জীবন দেয়; তাতে ছড়িয়ে দেওয়া প্রতিটি প্রাণী; বাতাসের দিক বদল; আর আকাশ ও যমীনের মাঝখানে অনুগত রাখা মেঘ। মহাজাগতিক স্থাপত্য থেকে ভেসে চলা এক টুকরো মেঘ পর্যন্ত — প্রমাণের এক অবিচ্ছিন্ন শৃঙ্খল।",
          },
          {
            en: "The selection has a quiet logic. Some signs are pure divine act — sky, rain, life. One is human craft: the ship, built by hands yet carried only because water bears weight, winds blow and stars guide, all by His ordering. Including it teaches that technology sails inside His laws, never outside them, and that human skill, honestly traced, ends at dependencies no human made.",
            bn: "নির্বাচনটির এক নীরব যুক্তি আছে। কিছু নিদর্শন বিশুদ্ধ ইলাহি কাজ — আকাশ, বৃষ্টি, জীবন। একটি মানুষের কারিগরি: জাহাজ — হাতে গড়া, অথচ ভেসে থাকে কেবল এ কারণে যে পানি ভার বহন করে, বাতাস বয়, তারা পথ দেখায় — সবই তাঁর বিন্যাসে। একে অন্তর্ভুক্ত করা শেখায়: প্রযুক্তি তাঁর নিয়মের ভেতরে চলে, কখনো বাইরে নয়; আর মানুষের দক্ষতা, সততার সঙ্গে উৎস ধরে গেলে, গিয়ে থামে এমন সব নির্ভরতায় যা কোনো মানুষ বানায়নি।",
          },
        ],
      },
      {
        h: { en: "The Ordinary Made Loud", bn: "সাধারণ যখন সরব" },
        p: [
          {
            en: "Nothing in the list is exotic. No one alive has missed a sunrise, a rainfall or a cloud; that is precisely the point. The Quran locates its evidence in what familiarity has silenced, and the word it uses for these things — ayat, signs — is the same word used for its own verses. Scholars have long drawn the conclusion: creation and revelation are two books from one Author, and this verse is where a page of each is held up together.",
            bn: "তালিকার কিছুই দুর্লভ নয়। জীবিত কেউ সূর্যোদয়, বৃষ্টি বা মেঘ দেখেনি এমন নেই; ঠিক এটিই মূল কথা। কুরআন তার প্রমাণ রাখে সেখানেই, যাকে অতিপরিচিতি নীরব করে দিয়েছে; আর এসবের জন্য যে শব্দটি ব্যবহার করে — আয়াত, নিদর্শন — সেটি তার নিজের বাক্যগুলোর জন্য ব্যবহৃত শব্দই। আলিমগণ বহু আগেই সিদ্ধান্তটি টেনেছেন: সৃষ্টি ও ওহী এক লেখকের দুই কিতাব — আর এই আয়াতে দুটিরই এক-একটি পাতা পাশাপাশি তুলে ধরা হয়েছে।",
          },
          {
            en: "Familiarity is treated as a veil to be lifted, not a verdict of insignificance. The rain that bores a commuter fed every civilization; the night that merely ends a day rests every body on earth. 30:21-24 works the same method on sleep, lightning and the love between spouses — ordinary mercies re-announced as signs — each paragraph ending by naming the audience able to hear it: those who listen, those who reason, those who reflect.",
            bn: "অতিপরিচিতিকে গণ্য করা হয় সরিয়ে ফেলার পর্দা হিসেবে, তুচ্ছতার রায় হিসেবে নয়। যে বৃষ্টি নিত্যযাত্রীকে বিরক্ত করে তা প্রতিটি সভ্যতাকে খাইয়েছে; যে রাত কেবল একটি দিন শেষ করে তা পৃথিবীর প্রতিটি দেহকে বিশ্রাম দেয়। 30:21-24 একই পদ্ধতি খাটায় ঘুম, বিদ্যুৎ আর দম্পতির ভালোবাসার ওপর — সাধারণ রহমতগুলো নতুন করে ঘোষিত হয় নিদর্শন হিসেবে — প্রতিটি অংশ শেষ হয় শুনতে সক্ষম শ্রোতার নাম নিয়ে: যারা শোনে, যারা বোঝে, যারা চিন্তা করে।",
          },
        ],
      },
      {
        h: { en: "Rain and the Resurrection", bn: "বৃষ্টি ও পুনরুত্থান" },
        p: [
          {
            en: "One sign in the list carries doctrine as well as wonder: the water that gives life to the earth after its death. The Quran repeatedly holds this up as the visible rehearsal of resurrection; 35:9 completes the analogy in so many words — He drives the clouds to a dead land and revives the earth with it: thus is the resurrection. Every rainfall re-stages what 36:33 also names a sign: the dead earth, revived, from which they eat.",
            bn: "তালিকার একটি নিদর্শন বিস্ময়ের সঙ্গে আকীদাও বহন করে: সেই পানি যা মরে যাওয়ার পর যমীনকে জীবন দেয়। কুরআন বারবার একে তুলে ধরে পুনরুত্থানের দৃশ্যমান মহড়া হিসেবে; 35:9 উপমাটি স্পষ্ট ভাষায় সম্পূর্ণ করে — তিনি মেঘকে হাঁকিয়ে নেন মৃত ভূখণ্ডের দিকে এবং তা দিয়ে যমীনকে জীবিত করেন: পুনরুত্থানও এমনই। প্রতিটি বৃষ্টি নতুন করে মঞ্চস্থ করে যাকে 36:33 আয়াতও নিদর্শন বলে নাম নেয়: মৃত যমীন, জীবিত করা, যা থেকে তারা খায়।",
          },
          {
            en: "The mufassirun read the whole list this way, as evidence with directions. Upward, it establishes the Creator's oneness — the seamless coordination of sky, sea and wind is the argument of 21:22 made visible. Forward, it establishes His power to repeat what He began. The verse thus quietly carries the Quran's two great contested claims, tawheed and resurrection, on the back of phenomena no denier could deny experiencing.",
            bn: "মুফাসসিরগণ পুরো তালিকাটিই এভাবে পড়েন — দিকনির্দেশসহ প্রমাণ হিসেবে। ঊর্ধ্বমুখে এটি প্রতিষ্ঠা করে স্রষ্টার একত্ব — আকাশ, সাগর ও বাতাসের নিখুঁত সমন্বয় হলো 21:22 আয়াতের যুক্তি চোখের সামনে। সম্মুখমুখে এটি প্রতিষ্ঠা করে তাঁর ক্ষমতা — যা তিনি শুরু করেছেন তা আবার করার। আয়াতটি তাই নীরবে বহন করে কুরআনের দুটি সবচেয়ে বিতর্কিত দাবি — তাওহীদ ও পুনরুত্থান — এমন সব ঘটনার কাঁধে চাপিয়ে, যেগুলোর অভিজ্ঞতা কোনো অস্বীকারকারীও অস্বীকার করতে পারত না।",
          },
        ],
      },
      {
        h: { en: "For a People Who Reason", bn: "বোঝে এমন জাতির জন্য" },
        p: [
          {
            en: "Li-qawmin ya'qilun. The Quran ends its sign-verses with varied conditions — for those who reflect, who listen, who are certain — and the variation is deliberate, matching each set of signs to the faculty that best receives it. Here, where the signs form an interlocking system, the summons is to aql, reason: the capacity that connects, infers and refuses to believe that an unbroken order assembled itself from nowhere.",
            bn: "লি-কাওমিন ইয়াকিলূন। কুরআন তার নিদর্শন-আয়াতগুলো শেষ করে বিভিন্ন শর্তে — যারা চিন্তা করে, যারা শোনে, যারা দৃঢ় বিশ্বাসী — আর এই বৈচিত্র্য ইচ্ছাকৃত: প্রতিটি নিদর্শনগুচ্ছকে মেলানো হয় সেই বোধশক্তির সঙ্গে, যা তাকে সবচেয়ে ভালো গ্রহণ করে। এখানে, যেখানে নিদর্শনগুলো এক আন্তঃসংযুক্ত ব্যবস্থা গড়ে, আহ্বানটি আকলের — বিবেকের প্রতি: সেই ক্ষমতা যা জোড়ে, সিদ্ধান্ত টানে, এবং মানতে অস্বীকার করে যে এক অবিচ্ছিন্ন শৃঙ্খলা শূন্য থেকে নিজে নিজে জুড়ে গেছে।",
          },
          {
            en: "3:190-191 paints the people who answer the summons: in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding — who remember Allah standing, sitting and on their sides, and reflect on creation until it issues in speech: our Lord, You did not create this in vain. Observation, remembrance, reflection, then prayer — a complete method in two verses.",
            bn: "3:190-191 এঁকে দেয় সেই মানুষদের, যারা আহ্বানে সাড়া দেয়: আসমান-যমীনের সৃষ্টিতে এবং রাত-দিনের আবর্তনে নিদর্শন রয়েছে বোধসম্পন্নদের জন্য — যারা দাঁড়িয়ে, বসে ও কাত হয়ে আল্লাহকে স্মরণ করে এবং সৃষ্টি নিয়ে চিন্তা করে, যতক্ষণ না তা ফুটে ওঠে কথায়: আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। পর্যবেক্ষণ, স্মরণ, চিন্তা, তারপর প্রার্থনা — দুই আয়াতে এক সম্পূর্ণ পদ্ধতি।",
          },
        ],
      },
      {
        h: { en: "A Habit of Looking", bn: "দেখার অভ্যাস" },
        p: [
          {
            en: "The verse's practice is tafakkur, and it needs scheduling like anything precious. Take one item from the list per week and actually look: follow one rainfall from cloud to soil; learn what keeps a laden ship above thousands of metres of water; notice which creatures share your street. End each looking the way 3:191 ends, with the mind's discovery handed up as praise.",
            bn: "আয়াতের চর্চা তাফাক্কুর, আর মূল্যবান সবকিছুর মতো এরও সময়সূচি লাগে। প্রতি সপ্তাহে তালিকা থেকে একটি বিষয় নিন এবং সত্যিই তাকান: একটি বৃষ্টিকে মেঘ থেকে মাটি পর্যন্ত অনুসরণ করুন; শিখুন হাজার হাজার মিটার পানির ওপরে বোঝাই জাহাজকে কী ভাসিয়ে রাখে; খেয়াল করুন কোন প্রাণীরা আপনার পাড়া ভাগ করে নেয়। প্রতিটি দেখা শেষ করুন যেভাবে 3:191 শেষ হয় — মনের আবিষ্কারটুকু প্রশংসা হয়ে ওপরে তুলে দিয়ে।",
          },
          {
            en: "Done steadily, the habit converts the daily commute into a gallery and dulls the false division between thinking and worship. The verse asked for a people who reason; it is inviting you to be one of them — someone for whom the sky is no longer background, the rain no longer weather only, and every ordinary thing has resumed its first job: pointing, insistently and precisely, at its Maker.",
            bn: "নিয়মিত করলে অভ্যাসটি প্রতিদিনের যাতায়াতকে চিত্রশালায় বদলে দেয় এবং চিন্তা ও ইবাদতের মধ্যকার মিথ্যা দেয়ালটি ভোঁতা করে দেয়। আয়াতটি চেয়েছে বোঝে এমন এক জাতি; সে আপনাকেই তাদের একজন হওয়ার আমন্ত্রণ জানাচ্ছে — এমন কেউ, যার কাছে আকাশ আর পটভূমি নয়, বৃষ্টি আর কেবল আবহাওয়া নয়, আর প্রতিটি সাধারণ জিনিস ফিরে পেয়েছে তার প্রথম কাজ: অবিরাম ও নিখুঁতভাবে তার নির্মাতার দিকে ইশারা করা।",
          },
        ],
      },
    ],
  },
  '4:82': {
    sections: [
      {
        h: { en: "The Command to Ponder", bn: "গভীর চিন্তার নির্দেশ" },
        p: [
          {
            en: "Afala yatadabbaruna al-Quran — do they not reflect deeply upon the Quran? The question is a rebuke shaped as an invitation. Tadabbur, from a root meaning the back or far end of a thing, is the kind of thinking that follows a matter through to its ends and consequences — not skimming a surface but pursuing where the words lead. The verse assumes the Quran rewards exactly this pursuit, and faults hearts that never attempt it.",
            bn: "আফালা ইয়াতাদাব্বারূনাল কুরআন — তারা কি কুরআন নিয়ে গভীরভাবে চিন্তা করে না? প্রশ্নটি আমন্ত্রণের আকারে গড়া এক তিরস্কার। তাদাব্বুর — কোনো জিনিসের পেছন বা শেষ প্রান্ত অর্থের ধাতু থেকে — সেই ধরনের চিন্তা যা কোনো বিষয়কে তার পরিণতি ও ফলাফল পর্যন্ত অনুসরণ করে; উপরিতল ছুঁয়ে যাওয়া নয়, শব্দগুলো যেদিকে নিয়ে যায় সেদিকে ধাওয়া করা। আয়াতটি ধরেই নেয়, কুরআন ঠিক এই অনুসরণেরই প্রতিদান দেয় — আর দোষারোপ করে সেই হৃদয়গুলোকে, যারা কখনো চেষ্টাই করে না।",
          },
          {
            en: "The rebuke lands on a specific failure: contact with the Quran without penetration — hearing it, even reciting it, while its meanings pass by untouched. 47:24 sharpens the diagnosis with its own question: do they not reflect on the Quran, or are there locks upon hearts? Between the two verses, the obstacle is located honestly: not in the Book's difficulty, but in the reader's lock.",
            bn: "তিরস্কারটি পড়ে একটি নির্দিষ্ট ব্যর্থতার ওপর: কুরআনের সংস্পর্শ, অথচ ভেতরে প্রবেশ নেই — শোনা, এমনকি তিলাওয়াতও, অথচ অর্থগুলো অস্পৃশ্য পাশ কাটিয়ে যায়। 47:24 নিজের প্রশ্ন দিয়ে রোগনির্ণয়টি ধারালো করে: তারা কি কুরআন নিয়ে চিন্তা করে না, নাকি হৃদয়গুলোর ওপর তালা? দুই আয়াতের মাঝখানে বাধাটির অবস্থান সততার সঙ্গে চিহ্নিত: কিতাবের দুর্বোধ্যতায় নয়, পাঠকের তালায়।",
          },
        ],
      },
      {
        h: { en: "The Test It Proposes", bn: "যে পরীক্ষা এটি প্রস্তাব করে" },
        p: [
          {
            en: "The verse then stakes everything on an examinable claim: had it been from other than Allah, they would have found within it much contradiction. This is an argument offered to sceptics on their own terms. The Quran came down across some twenty-three years — in Makkah and Madinah, in ease and siege, answering events no one scheduled. Human output under those conditions revises itself, contradicts itself, shows its seams. Here, the claim runs, you will find none.",
            bn: "আয়াতটি এরপর সবকিছু বাজি রাখে এক যাচাইযোগ্য দাবির ওপর: এটি আল্লাহ ছাড়া অন্য কারও কাছ থেকে হলে তারা এতে বহু অসংগতি পেত। এ যুক্তি সংশয়বাদীদের সামনে রাখা হয়েছে তাদের নিজেদের শর্তেই। কুরআন নাযিল হয়েছে প্রায় তেইশ বছর ধরে — মক্কায় ও মদীনায়, স্বাচ্ছন্দ্যে ও অবরোধে, এমন সব ঘটনার জবাব দিতে দিতে যেগুলোর সময়সূচি কেউ ঠিক করেনি। এই অবস্থায় মানুষের রচনা নিজেকে সংশোধন করে, নিজের সঙ্গে সংঘর্ষে যায়, নিজের জোড়ার দাগ দেখায়। এখানে — দাবিটি বলে — তুমি একটিও পাবে না।",
          },
          {
            en: "The commentators draw out the logic: consistency across that span, on subjects from law to the unseen, delivered through an unlettered Prophet ﷺ, is the signature of a single, all-knowing Author. And the challenge stays open. It does not ask for reverence first; it asks for reading — sustained, critical reading — and predicts what the reading will find. Refusing to read is, in effect, refusing to test the claim.",
            bn: "মুফাসসিরগণ যুক্তিটি টেনে বের করেন: এত দীর্ঘ পরিসরে, বিধান থেকে অদৃশ্য জগৎ পর্যন্ত বিষয়ে, নিরক্ষর নবী ﷺ-এর মাধ্যমে পৌঁছানো এই সামঞ্জস্য — একক, সর্বজ্ঞ এক রচয়িতার স্বাক্ষর। আর চ্যালেঞ্জটি খোলা থেকেই যায়। এটি আগে ভক্তি চায় না; চায় পাঠ — ধারাবাহিক, অনুসন্ধানী পাঠ — এবং আগাম বলে দেয় সেই পাঠ কী পাবে। পড়তে অস্বীকার করা আসলে দাবিটি যাচাই করতেই অস্বীকার করা।",
          },
        ],
      },
      {
        h: { en: "Where the Verse Was Sent", bn: "আয়াতটি যেখানে নাযিল" },
        p: [
          {
            en: "The setting in Surah an-Nisa is practical, not academic. The surrounding passage deals with hypocrisy and rumor: 4:83 rebukes those who, hearing any matter of security or fear, broadcast it instead of referring it to the Messenger ﷺ and to those with sound judgment, who could draw out its truth. Shallow hearing produces both bad religion and bad citizenship; the passage prescribes depth for both.",
            bn: "সূরা আন-নিসায় এর প্রেক্ষাপট ব্যবহারিক, পুঁথিগত নয়। আশপাশের অংশটি মুনাফিকি ও গুজব নিয়ে: 4:83 তিরস্কার করে তাদের, যারা নিরাপত্তা বা ভয়ের কোনো খবর শুনলেই তা ছড়িয়ে দেয় — রাসূল ﷺ ও বিচক্ষণ সিদ্ধান্তের অধিকারীদের কাছে ফিরিয়ে না দিয়ে, যাঁরা এর সত্যতা বের করে আনতে পারতেন। ভাসাভাসা শোনা জন্ম দেয় মন্দ দ্বীনদারি ও মন্দ নাগরিকতা দুটিই; অংশটি দুটির জন্যই গভীরতার ব্যবস্থাপত্র দেয়।",
          },
          {
            en: "Placed there, tadabbur appears as a communal safeguard, not a private luxury. A community that ponders its Book learns to weigh words, trace claims to sources and follow consequences before speaking — the exact skills 4:83 finds missing in the rumor-spreaders. The Quran, engaged deeply, trains the mind it engages; skimmed, it leaves the mind as excitable as it found it.",
            bn: "সেখানে স্থাপিত হয়ে তাদাব্বুর দেখা দেয় সমাজের রক্ষাকবচ হিসেবে, ব্যক্তিগত বিলাস হিসেবে নয়। যে সমাজ তার কিতাব নিয়ে গভীর চিন্তা করে, সে শেখে কথা ওজন করতে, দাবিকে উৎস পর্যন্ত খুঁজে যেতে, আর মুখ খোলার আগে পরিণতি অনুসরণ করতে — ঠিক সেই দক্ষতাগুলো, যেগুলোর অভাব 4:83 পায় গুজব-ছড়ানোদের মধ্যে। কুরআন, গভীরভাবে চর্চিত হলে, যে মনকে সে পায় তাকে প্রশিক্ষণ দেয়; ভাসাভাসা পড়া হলে মনকে রেখে যায় ঠিক ততটাই চঞ্চল, যতটা পেয়েছিল।",
          },
        ],
      },
      {
        h: { en: "Why It Was Sent Down", bn: "কেন নাযিল হয়েছে" },
        p: [
          {
            en: "38:29 states the Quran's purpose in one line: a blessed Book We have sent down to you, that they may ponder its verses, and that those of understanding may take heed. Tadabbur is not an optional enrichment for scholars; it is the stated reason for the revelation. Recitation without it, 23:68 implies, repeats the failure of those who did not ponder the word when it came to them.",
            bn: "38:29 এক লাইনে কুরআনের উদ্দেশ্য বলে দেয়: এক বরকতময় কিতাব, আমি তোমার প্রতি নাযিল করেছি, যেন তারা এর আয়াতগুলো নিয়ে গভীর চিন্তা করে এবং বোধসম্পন্নরা উপদেশ নেয়। তাদাব্বুর আলিমদের জন্য ঐচ্ছিক কোনো বাড়তি চর্চা নয়; এটিই ওহী নাযিলের ঘোষিত কারণ। এটি ছাড়া তিলাওয়াত — 23:68 ইঙ্গিত করে — তাদেরই ব্যর্থতার পুনরাবৃত্তি, বাণী আসার পরও যারা তা নিয়ে চিন্তা করেনি।",
          },
          {
            en: "The classical scholars lived this instruction and left its fruits. Where verses appeared to pull against each other, they treated the appearance as an invitation, wrote works reconciling them, and found the resolution deepening the meaning of both passages — the opposite of what 4:82 predicts for a human book, where scrutiny widens the cracks. The Book's coherence grows under pressure; that experience, repeated across centuries, is the verse's evidence lived out.",
            bn: "প্রাচীন আলিমগণ এই নির্দেশ যাপন করেছেন এবং এর ফল রেখে গেছেন। যেখানে আয়াতগুলোকে পরস্পরের বিপরীতে টানছে মনে হয়েছে, তাঁরা সেই আপাত-চিত্রকে গণ্য করেছেন আমন্ত্রণ হিসেবে, সেগুলোর সমন্বয়ে গ্রন্থ রচনা করেছেন, আর দেখেছেন মীমাংসাটি দুটি অংশেরই অর্থ গভীর করে দিচ্ছে — মানুষের লেখা বই সম্পর্কে 4:82 যা আগাম বলে তার ঠিক উল্টো, যেখানে খুঁটিয়ে দেখা ফাটলগুলোই চওড়া করে। চাপের নিচে কিতাবের সামঞ্জস্য বাড়ে; শতাব্দীর পর শতাব্দী ধরে পুনরাবৃত্ত সেই অভিজ্ঞতাই আয়াতের প্রমাণ — জীবনে ফলিত।",
          },
        ],
      },
      {
        h: { en: "How Tadabbur Is Done", bn: "তাদাব্বুর যেভাবে করা হয়" },
        p: [
          {
            en: "Tadabbur has a workable method. Read small portions slowly, in a language you understand alongside the Arabic. Ask the text questions: why this word and not its synonym, why this name of Allah at this verse's end, what came before and after, who is being addressed. Compare verse with verse, since the Quran explains itself; and keep a reliable tafsir nearby to guard the boundaries of valid understanding.",
            bn: "তাদাব্বুরের একটি কার্যকর পদ্ধতি আছে। ছোট ছোট অংশ ধীরে পড়ুন — আরবির পাশাপাশি আপনার বোঝার ভাষায়। পাঠ্যকে প্রশ্ন করুন: এই শব্দটি কেন, এর প্রতিশব্দ নয় কেন; এই আয়াতের শেষে আল্লাহর এই নামটি কেন; আগে-পরে কী এসেছে; কাকে সম্বোধন করা হচ্ছে। আয়াতের সঙ্গে আয়াত মেলান, কারণ কুরআন নিজেই নিজের ব্যাখ্যা করে; আর বৈধ বোঝাপড়ার সীমানা রক্ষায় একটি নির্ভরযোগ্য তাফসীর হাতের কাছে রাখুন।",
          },
          {
            en: "Then complete the circuit the Quran itself models: from understanding to response. The thinkers of 3:191 end their reflection in du'a; the believers described in 8:2, when His verses are recited to them, increase in faith. Tadabbur that never reaches the heart and the limbs has stopped halfway — the far end of the Book's words, the very thing the word tadabbur means to pursue, is a changed life.",
            bn: "তারপর কুরআন নিজে যে বৃত্তটি দেখায় তা সম্পূর্ণ করুন: বোঝা থেকে সাড়ায়। 3:191 আয়াতের চিন্তাশীলরা তাদের ভাবনা শেষ করে দোয়ায়; 8:2 আয়াতে বর্ণিত মুমিনদের সামনে তাঁর আয়াত তিলাওয়াত করা হলে তাদের ঈমান বেড়ে যায়। যে তাদাব্বুর কখনো হৃদয় ও অঙ্গ-প্রত্যঙ্গে পৌঁছায় না, তা মাঝপথে থেমে গেছে — কিতাবের শব্দগুলোর শেষ প্রান্ত, তাদাব্বুর শব্দটি যাকে ধাওয়া করতে বলে, তা হলো এক বদলে যাওয়া জীবন।",
          },
        ],
      },
      {
        h: { en: "Reading for Certainty", bn: "দৃঢ় বিশ্বাসের জন্য পাঠ" },
        p: [
          {
            en: "The verse also names what deep reading produces: certainty about the Book's origin. Many believers inherit faith and hold it sincerely but thinly, never having watched the Quran withstand their own hardest questions. 4:82 invites exactly that trial, and readers who accept it report the same result across centuries: the coherence they were promised, discovered rather than presumed, becomes a certainty no borrowed argument could have given them.",
            bn: "আয়াতটি এও বলে দেয় গভীর পাঠ কী উৎপন্ন করে: কিতাবের উৎস সম্পর্কে দৃঢ় বিশ্বাস। বহু মুমিন ঈমান পায় উত্তরাধিকারে এবং তা ধরে রাখে আন্তরিকভাবে অথচ পাতলা করে — নিজের কঠিনতম প্রশ্নগুলোর সামনে কুরআনকে টিকে থাকতে কখনো দেখেনি বলে। 4:82 ঠিক সেই পরীক্ষারই আমন্ত্রণ জানায়, আর যারা তা গ্রহণ করে তারা শতাব্দীর পর শতাব্দী একই ফল জানিয়ে আসছে: প্রতিশ্রুত সেই সামঞ্জস্য — অনুমান করা নয়, আবিষ্কার করা — হয়ে ওঠে এমন এক নিশ্চয়তা, ধার করা কোনো যুক্তি যা কখনো দিতে পারত না।",
          },
          {
            en: "So take the verse as a personal instruction with a schedule. A portion daily, read as if for the first time, questioned closely, checked against sound tafsir, and allowed to reach the heart. The Quran does not ask to be defended from scrutiny; it asks — twice, here and in 47:24 — to receive it. The lock the verses warn of is opened from the inside, by the reader who finally sits down to ponder.",
            bn: "তাই আয়াতটিকে নিন সময়সূচিসহ এক ব্যক্তিগত নির্দেশ হিসেবে। প্রতিদিন একটি অংশ — যেন প্রথমবার পড়ছেন এমনভাবে পড়া, খুঁটিয়ে প্রশ্ন করা, নির্ভরযোগ্য তাফসীরের সঙ্গে মিলিয়ে নেওয়া, আর হৃদয়ে পৌঁছাতে দেওয়া। কুরআন চায় না তাকে যাচাই-বাছাই থেকে আগলে রাখা হোক; সে চায় — দুবার, এখানে ও 47:24 আয়াতে — যাচাইটা গ্রহণ করতে। আয়াতগুলো যে তালার কথা সতর্ক করে, তা খোলে ভেতর থেকে — সেই পাঠকের হাতে, যে অবশেষে গভীর চিন্তায় বসে।",
          },
        ],
      },
    ],
  },
'3:8': {
  sections: [
    {
      h: { en: "After the Verse of Firm Roots", bn: "দৃঢ়মূল জ্ঞানের আয়াতের পরে" },
      p: [
        {
          en: "This prayer does not float free; it answers the verse directly before it. In 3:7 the Book is divided into muhkam verses, clear and decisive, and mutashabih verses that resemble one another, and two kinds of readers are described: those in whose hearts is zaygh, a swerving, who chase the ambiguous seeking discord, and those firmly rooted in knowledge who say, we believe in it, all of it is from our Lord. Verse 3:8 is the prayer of that second group, placed on their tongues by revelation itself.",
          bn: "এই দোয়াটি শূন্যে ভাসমান নয়; এটি ঠিক আগের আয়াতের জবাব। 3:7 আয়াতে কিতাবকে ভাগ করা হয়েছে মুহকাম আয়াতে — যা স্পষ্ট ও চূড়ান্ত — এবং মুতাশাবিহ আয়াতে, যেগুলো পরস্পরের সদৃশ; আর দুই ধরনের পাঠকের বর্ণনা এসেছে: যাদের অন্তরে আছে যায়গ — এক ধরনের বক্রতা — তারা ফিতনা খুঁজতে অস্পষ্ট আয়াতের পেছনে ছোটে; আর যারা জ্ঞানে দৃঢ়মূল, তারা বলে, আমরা এতে ঈমান এনেছি, সবই আমাদের রবের পক্ষ থেকে। আয়াত 3:8 সেই দ্বিতীয় দলের দোয়া, যা ওহী নিজেই তাদের জবানে তুলে দিয়েছে।",
        },
        {
          en: "The wording of the prayer picks up the very root the previous verse used for the diseased heart. La tuzigh qulubana, do not let our hearts swerve, echoes fi qulubihim zaygh, in their hearts is a swerving, from 3:7 itself. Having just been shown the portrait of hearts that tilt toward ambiguity, the believers immediately ask to be protected from that same tilt. The next verse, 3:9, keeps the horizon in view: our Lord, surely You will gather mankind for a Day about which there is no doubt.",
          bn: "দোয়ার শব্দচয়ন সেই একই মূল ধাতু তুলে নেয়, যা আগের আয়াতে ব্যাধিগ্রস্ত অন্তরের জন্য ব্যবহৃত হয়েছিল। লা তুযিগ কুলূবানা — আমাদের অন্তরগুলোকে বাঁকতে দেবেন না — এটি 3:7 আয়াতের ফী কুলূবিহিম যায়গ — তাদের অন্তরে বক্রতা আছে — এই কথারই প্রতিধ্বনি। অস্পষ্টতার দিকে হেলে পড়া অন্তরের চিত্র দেখানো মাত্রই মুমিনরা সেই একই হেলে পড়া থেকে সুরক্ষা চেয়ে বসে। পরের আয়াত 3:9 দিগন্তটিকে সামনে রাখে: হে আমাদের রব, নিশ্চয়ই আপনি মানুষকে এমন এক দিনে সমবেত করবেন, যাতে কোনো সন্দেহ নেই।",
        },
      ],
    },
    {
      h: { en: "How the Prayer Asks", bn: "দোয়াটি যেভাবে চায়" },
      p: [
        {
          en: "Ba'da idh hadaytana, after You have guided us, concedes two things at once: that guidance was His act, not our achievement, and that having received it does not secure it. Then comes a request for more than protection: wa hab lana min ladunka rahmah, grant us mercy from Your own presence. Min ladunka, from what is with You, asks for something unearned, drawn from His treasury rather than from our deserving. The young men of the cave asked with the same words in 18:10 as well.",
          bn: "বা'দা ইয হাদাইতানা — আপনি আমাদের হেদায়েত দেওয়ার পর — একসাথে দুটি কথা স্বীকার করে: হেদায়েত ছিল তাঁরই কাজ, আমাদের অর্জন নয়; আর তা পেয়ে যাওয়া মানেই তা নিরাপদ হয়ে যাওয়া নয়। এরপর আসে সুরক্ষার চেয়েও বেশি কিছুর আবেদন: ওয়া হাব লানা মিন লাদুনকা রাহমাহ — আপনার নিজের সন্নিধি থেকে আমাদের রহমত দান করুন। মিন লাদুনকা — আপনার কাছে যা আছে তা থেকে — এমন কিছু চায় যা অনার্জিত, যা আমাদের প্রাপ্যতা থেকে নয় বরং তাঁর ভান্ডার থেকে আসে। গুহার যুবকরাও 18:10 আয়াতে একই শব্দে চেয়েছিল।",
        },
        {
          en: "The prayer closes by naming Allah al-Wahhab, the Bestower, the One who gives gift after gift without compensation and without being diminished. The commentators observe that a request is strengthened by the name that matches it: the one asking for an unearned gift calls on the One whose way is unearned giving. Nothing in the sentence bargains. It does not promise works in exchange; it simply describes the Giver accurately and holds out its hands.",
          bn: "দোয়াটি শেষ হয় আল্লাহকে আল-ওয়াহহাব নামে ডেকে — মহাদাতা, যিনি কোনো বিনিময় ছাড়াই এবং নিজে বিন্দুমাত্র না কমে উপহারের পর উপহার দিয়ে যান। মুফাসসিরগণ লক্ষ করেন, আবেদনের সাথে মিলে যাওয়া নাম আবেদনকে শক্তিশালী করে: যে অনার্জিত দান চাইছে, সে তাঁকেই ডাকছে যাঁর রীতিই হলো অনার্জিত দান। বাক্যটির কোথাও কোনো দর-কষাকষি নেই। এটি বিনিময়ে আমলের প্রতিশ্রুতি দেয় না; কেবল দাতাকে যথাযথভাবে বর্ণনা করে দুই হাত পেতে দেয়।",
        },
      ],
    },
    {
      h: { en: "The Turning of Hearts", bn: "অন্তরের ঘুরে যাওয়া" },
      p: [
        {
          en: "The Arabic word for heart, qalb, shares its root with taqallub, turning over, and the scholars have long heard in the name a description: the heart is the organ that turns. Al-Bukhari records that the Prophet ﷺ would frequently swear by the words: no, by the Turner of hearts. At-Tirmidhi records his frequent supplication: O Turner of hearts, make my heart firm upon Your religion. The man whose guidance was most secure asked most often for firmness.",
          bn: "অন্তরের আরবি শব্দ কালব-এর মূল ধাতু তাকাল্লুব — উল্টে যাওয়া — এর সাথে অভিন্ন, আর আলিমগণ বহুকাল ধরে এই নামের মধ্যেই একটি বর্ণনা শুনে এসেছেন: অন্তর সেই অঙ্গ যা ঘুরে যায়। বুখারী বর্ণনা করেন, নবী ﷺ প্রায়ই এই শব্দে শপথ করতেন: না, অন্তরসমূহের পরিবর্তনকারীর শপথ। তিরমিযী তাঁর বহুল-পঠিত দোয়াটি বর্ণনা করেন: হে অন্তরসমূহের পরিবর্তনকারী, আমার অন্তরকে আপনার দ্বীনের উপর দৃঢ় রাখুন। যাঁর হেদায়েত ছিল সবচেয়ে সুরক্ষিত, তিনিই দৃঢ়তার জন্য সবচেয়ে বেশি চেয়েছেন।",
        },
        {
          en: "That fact reorders our assumptions. If the Prophet ﷺ pleaded for steadiness, then steadiness is not a certificate issued once but a state maintained from above, and the person who feels safely past the possibility of swerving has misread how hearts work. The verse assumes believers who know their own instability, which is why it is a prayer and not a boast. Asking is itself the posture of the firmly rooted.",
          bn: "এই সত্য আমাদের ধারণাগুলোকে নতুন করে সাজায়। নবী ﷺ যদি অবিচলতার জন্য মিনতি করে থাকেন, তবে অবিচলতা একবার ইস্যু করা কোনো সনদ নয়, বরং উপর থেকে রক্ষণাবেক্ষণ করা একটি অবস্থা; আর যে ব্যক্তি নিজেকে বাঁক নেওয়ার সম্ভাবনার ঊর্ধ্বে নিরাপদ ভাবে, সে অন্তর কীভাবে কাজ করে তা ভুল পড়েছে। আয়াতটি এমন মুমিনদের ধরে নেয় যারা নিজেদের অস্থিরতা জানে — এ কারণেই এটি দোয়া, অহংকার নয়। চাওয়াটাই দৃঢ়মূলদের ভঙ্গি।",
        },
      ],
    },
    {
      h: { en: "What the Commentators Draw", bn: "মুফাসসিরগণ যা আহরণ করেন" },
      p: [
        {
          en: "As-Sa'di reads the verse as proof that remaining guided is a continuing mercy, renewed from Allah moment by moment, not a possession transferred once into our keeping. The Quran says elsewhere, in 8:24, that Allah comes in between a man and his heart, and in 14:27 that Allah keeps firm those who believe with the firm word, in this life and in the Hereafter. Firmness has a source, and the verse teaches us to apply to the source directly.",
          bn: "আস-সা'দী আয়াতটিকে এই প্রমাণ হিসেবে পড়েন যে হেদায়েতের উপর টিকে থাকা এক চলমান রহমত, যা আল্লাহর পক্ষ থেকে মুহূর্তে মুহূর্তে নবায়ন হয় — একবার আমাদের জিম্মায় হস্তান্তরিত কোনো সম্পত্তি নয়। কুরআন অন্যত্র বলে, 8:24 আয়াতে, আল্লাহ মানুষ ও তার অন্তরের মাঝখানে অন্তরায় হন; আর 14:27 আয়াতে, আল্লাহ মুমিনদের সুদৃঢ় বাণী দিয়ে দুনিয়ার জীবনে ও আখিরাতে অবিচল রাখেন। দৃঢ়তার একটি উৎস আছে, আর আয়াতটি আমাদের শেখায় সরাসরি সেই উৎসের কাছেই আবেদন করতে।",
        },
        {
          en: "Ibn Kathir sets the prayer against its foil: those who chase the ambiguous are seeking fitnah, while the rooted ask to be kept from deviation. The difference between the two groups is not intelligence but intention and dependence. One group interrogates the Book to unsettle; the other submits to it and then, knowing their own hearts, asks the Author to hold them steady. The verse locates safety not in cleverness but in asking.",
          bn: "ইবনে কাসীর দোয়াটিকে তার বিপরীত চিত্রের পাশে রাখেন: যারা অস্পষ্টের পেছনে ছোটে তারা ফিতনা খুঁজছে, আর দৃঢ়মূলরা চাইছে বিচ্যুতি থেকে রক্ষা। দুই দলের পার্থক্য বুদ্ধিমত্তায় নয়, নিয়তে ও নির্ভরতায়। এক দল কিতাবকে জেরা করে অস্থিরতা ছড়াতে; অন্য দল তার কাছে আত্মসমর্পণ করে এবং নিজেদের অন্তরকে চেনে বলেই এর প্রেরককে বলে তাদের স্থির রাখতে। আয়াতটি নিরাপত্তাকে চতুরতায় নয়, চাওয়ার মধ্যে খুঁজে পায়।",
        },
      ],
    },
    {
      h: { en: "A Family of Prayers", bn: "দোয়ার এক পরিবার" },
      p: [
        {
          en: "Surah Al Imran returns to this register at its close, where 3:191-194 record believers who reflect on creation and then plead: our Lord, forgive us our sins and take our souls with the righteous. The soldiers of Talut prayed in the same shape in 2:250, asking for patience to be poured over them before the battle began. In each case the request is for something inward — steadiness, patience, forgiveness — asked of the only One who governs inward things.",
          bn: "সূরা আলে ইমরান তার শেষভাগে আবার এই সুরে ফেরে, যেখানে 3:191-194 এমন মুমিনদের কথা লিপিবদ্ধ করে যারা সৃষ্টি নিয়ে চিন্তা করে তারপর মিনতি করে: হে আমাদের রব, আমাদের গুনাহ ক্ষমা করুন এবং নেককারদের সাথে আমাদের মৃত্যু দিন। তালূতের সৈনিকরাও 2:250 আয়াতে একই ধাঁচে দোয়া করেছিল — যুদ্ধ শুরুর আগে তাদের উপর ধৈর্য ঢেলে দেওয়ার আবেদন। প্রতিটি ক্ষেত্রেই চাওয়া হচ্ছে অন্তর্গত কিছু — অবিচলতা, ধৈর্য, ক্ষমা — আর চাওয়া হচ্ছে একমাত্র তাঁর কাছে, যিনি অন্তর্গত বিষয়গুলোর নিয়ন্তা।",
        },
      ],
    },
    {
      h: { en: "Making It Daily", bn: "প্রতিদিনের অভ্যাসে" },
      p: [
        {
          en: "The lived form of this verse is simple: pray it, in Arabic or in your own tongue, at fixed points — after the obligatory prayers, on waking, before decisions that could bend you. Then watch for small swerves early: the prayer skipped without regret, the content that feeds doubt consumed without any appetite for the answer. Swerving rarely announces itself; it accumulates.",
          bn: "এই আয়াতের যাপিত রূপটি সরল: এটি দোয়া হিসেবে পড়ুন, আরবিতে বা নিজের ভাষায়, নির্দিষ্ট কিছু মুহূর্তে — ফরয নামাযের পর, ঘুম থেকে উঠে, এমন সিদ্ধান্তের আগে যা আপনাকে বাঁকিয়ে দিতে পারে। তারপর ছোট ছোট বাঁকগুলোর দিকে আগেভাগে নজর রাখুন: অনুশোচনা ছাড়াই ছেড়ে দেওয়া নামায, জবাব জানার কোনো আগ্রহ ছাড়াই গেলা সন্দেহ-উসকানো বিষয়বস্তু। বাঁক খুব কমই নিজের ঘোষণা দেয়; তা জমতে থাকে।",
        },
        {
          en: "And when you notice steadiness in yourself — a temptation that lost its pull, a habit of worship that took root — the verse trains you to file it correctly: as a gift from the Bestower, not a personal trait. Gratitude for firmness and fear of losing it belong together, and both are folded into this one sentence. The believer says it, means it, and says it again tomorrow.",
          bn: "আর যখন নিজের মধ্যে অবিচলতা টের পান — কোনো প্রলোভন যার টান হারিয়ে গেছে, কোনো ইবাদতের অভ্যাস যা শিকড় গেড়েছে — আয়াতটি আপনাকে তা সঠিক খাতায় লিখতে শেখায়: মহাদাতার দান হিসেবে, ব্যক্তিগত গুণ হিসেবে নয়। দৃঢ়তার জন্য কৃতজ্ঞতা আর তা হারানোর ভয় একসাথে থাকে, আর দুটোই এই একটি বাক্যে ভাঁজ করা আছে। মুমিন এটি বলে, অন্তর থেকে বলে, এবং আগামীকাল আবার বলে।",
        },
      ],
    },
  ],
},
'4:110': {
  sections: [
    {
      h: { en: "A Door Inside a Court Case", bn: "মামলার ভেতরে এক দরজা" },
      p: [
        {
          en: "This verse stands inside one of the most concrete passages of Surah an-Nisa. From 4:105 the revelation addresses a real dispute in Madinah: the Prophet ﷺ is told to judge between people by what Allah has shown him and not to be an advocate for the treacherous. At-Tirmidhi relates the occasion: a theft had been committed, and the blame was being steered toward an innocent man while the guilty party's people argued his case.",
          bn: "এই আয়াতটি সূরা আন-নিসার সবচেয়ে বাস্তব অনুচ্ছেদগুলোর একটির ভেতরে দাঁড়িয়ে আছে। 4:105 থেকে ওহী মদীনার একটি বাস্তব বিরোধের প্রসঙ্গ ধরে: নবী ﷺ-কে বলা হয় আল্লাহ তাঁকে যা দেখিয়েছেন সে অনুযায়ী মানুষের মধ্যে বিচার করতে এবং বিশ্বাসঘাতকদের পক্ষে ওকালতি না করতে। তিরমিযী এর প্রেক্ষাপট বর্ণনা করেন: একটি চুরি হয়েছিল, আর দোষ ঠেলে দেওয়া হচ্ছিল এক নিরপরাধ মানুষের দিকে, যখন অপরাধী পক্ষের লোকেরা তার হয়ে সাফাই গাইছিল।",
        },
        {
          en: "The passage exposes the maneuver step by step. 4:108 says the schemers may hide from people but cannot hide from Allah, who is with them as they plot speech He does not approve, and 4:112 rules that whoever earns a fault and then throws it upon an innocent person has burdened himself with slander and clear sin. In the middle of this exposure, before the verdicts finish, 4:110 opens a door wide enough for even these people.",
          bn: "অনুচ্ছেদটি ধাপে ধাপে চক্রান্তটি উন্মোচন করে। 4:108 বলে, ষড়যন্ত্রকারীরা মানুষের কাছ থেকে লুকাতে পারে কিন্তু আল্লাহর কাছ থেকে নয় — তারা যখন তাঁর অপছন্দের কথা সাজায় তখনও তিনি তাদের সাথেই থাকেন; আর 4:112 রায় দেয়, যে ব্যক্তি অপরাধ কামাই করে তা কোনো নিরপরাধের ঘাড়ে চাপায়, সে অপবাদ ও স্পষ্ট গুনাহের বোঝা নিজের উপর তুলে নিল। এই উন্মোচনের মাঝখানে, রায়গুলো শেষ হওয়ার আগেই, 4:110 এমন এক দরজা খুলে দেয় যা এমনকি এই লোকদের জন্যও যথেষ্ট প্রশস্ত।",
        },
      ],
    },
    {
      h: { en: "Two Names for Wrong", bn: "অন্যায়ের দুই নাম" },
      p: [
        {
          en: "The verse names two categories: whoever does su', evil, or wrongs his own soul, zulm an-nafs. The commentators read the pairing as a net with no gaps — wrong that lands on others and wrong whose damage stays inside the doer, sins of the hand and sins of the heart. Whichever kind it was, the next clause is the same: thumma yastaghfir Allah, then he seeks Allah's forgiveness. The wrong is not denied, renamed or defended; it is carried to the right address.",
          bn: "আয়াতটি দুটি শ্রেণীর নাম নেয়: যে কেউ সূ' — মন্দ কাজ — করে, অথবা নিজের প্রাণের উপর জুলুম করে — যুলমুন-নাফস। মুফাসসিরগণ এই জোড়াকে ফাঁকবিহীন এক জালের মতো পড়েন — যে অন্যায় অন্যের উপর পড়ে আর যে অন্যায়ের ক্ষতি কর্তার ভেতরেই থেকে যায়, হাতের গুনাহ আর অন্তরের গুনাহ। যে ধরনেরই হোক, পরের বাক্যাংশ একটাই: সুম্মা ইয়াস্তাগফিরিল্লাহ — তারপর সে আল্লাহর কাছে ক্ষমা চায়। অন্যায়কে অস্বীকার করা হয় না, নতুন নাম দেওয়া হয় না, পক্ষ নেওয়াও হয় না; তাকে সঠিক ঠিকানায় বয়ে নেওয়া হয়।",
        },
      ],
    },
    {
      h: { en: "He Will Find", bn: "সে আল্লাহকে পাবে" },
      p: [
        {
          en: "The verse does not say Allah will forgive him, though that is true. It says yajidi Allaha Ghafuran Rahima — he will find Allah Forgiving, Merciful. Finding is immediate; it describes what is already there when you arrive. The door is not opened in response to the knock; the turning sinner discovers it standing open. And the two names come in intensive forms: not merely one who forgives, but One whose settled attribute is forgiveness joined to mercy.",
          bn: "আয়াতটি বলে না যে আল্লাহ তাকে ক্ষমা করবেন — যদিও সেটাও সত্য। এটি বলে: ইয়াজিদিল্লাহা গাফূরার রাহীমা — সে আল্লাহকে পাবে ক্ষমাশীল, পরম দয়ালুরূপে। পাওয়া তাৎক্ষণিক; পৌঁছেই যা আগে থেকে আছে, শব্দটি তারই বর্ণনা। দরজাটি কড়া নাড়ার জবাবে খোলা হয় না; ফিরে আসা গুনাহগার দেখে দরজা খোলাই আছে। আর নাম দুটি এসেছে জোরালো রূপে: কেবল এমন কেউ নন যিনি ক্ষমা করেন, বরং এমন সত্তা যাঁর স্থায়ী গুণই হলো দয়ার সাথে জোড়া ক্ষমা।",
        },
        {
          en: "Muslim records from Abu Musa (RA) that the Prophet ﷺ said Allah stretches out His hand by night to accept the repentance of the one who sinned by day, and stretches out His hand by day to accept the repentance of the one who sinned by night, until the sun rises from its west. The verse and the hadith describe one standing reality from two sides: the finding and the waiting.",
          bn: "মুসলিম আবু মূসা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ রাতে তাঁর হাত প্রসারিত করেন যেন দিনের গুনাহগার তাওবা করে, আর দিনে হাত প্রসারিত করেন যেন রাতের গুনাহগার তাওবা করে — যতদিন না সূর্য পশ্চিম দিক থেকে উদিত হয়। আয়াত ও হাদীস একই স্থায়ী বাস্তবতাকে দুই দিক থেকে বর্ণনা করে: একদিকে পাওয়া, অন্যদিকে অপেক্ষা।",
        },
      ],
    },
    {
      h: { en: "What the Mufassirun Note", bn: "মুফাসসিরদের পর্যবেক্ষণ" },
      p: [
        {
          en: "At-Tabari reads the verse as general: every wrongdoer who turns sincerely is included, whatever the sin. Its neighbours sharpen it rather than narrow it. The verse just after, 4:111, states that whoever earns a sin earns it only against himself — responsibility cannot be outsourced — and 4:112 condemns transferring blame to the innocent. Between honest ownership of sin and the crime of reassigning it, 4:110 shows the only exit that works: owning the wrong before the One who can erase it.",
          bn: "আত-তাবারী আয়াতটিকে ব্যাপক অর্থে পড়েন: যে অন্যায়কারীই আন্তরিকভাবে ফিরে আসে, সে-ই এর অন্তর্ভুক্ত — গুনাহ যা-ই হোক। প্রতিবেশী আয়াতগুলো একে সংকীর্ণ করে না, বরং ধারালো করে। ঠিক পরের আয়াত 4:111 বলে, যে গুনাহ কামাই করে সে তা কেবল নিজের বিরুদ্ধেই কামাই করে — দায় অন্যের ঘাড়ে চাপানো যায় না; আর 4:112 নিরপরাধের উপর দোষ চাপানোকে নিন্দা করে। গুনাহের সৎ স্বীকৃতি আর তা অন্যের নামে লেখানোর অপরাধ — এই দুইয়ের মাঝে 4:110 একমাত্র কার্যকর নির্গমনপথ দেখায়: অন্যায়ের মালিকানা স্বীকার করা তাঁরই সামনে, যিনি তা মুছে দিতে পারেন।",
        },
        {
          en: "Earlier in the same surah, 4:64 says that if those who wronged themselves had come to the Prophet ﷺ and sought Allah's forgiveness, and the Messenger had sought forgiveness for them, they would have found Allah accepting of repentance, Merciful. The same verb again: found. The Quran keeps insisting that forgiveness is not a distant possibility to be negotiated but a present reality to be entered.",
          bn: "একই সূরার আগের দিকে, 4:64 বলে, যারা নিজেদের উপর জুলুম করেছিল তারা যদি নবী ﷺ-এর কাছে এসে আল্লাহর ক্ষমা চাইত, আর রাসূলও তাদের জন্য ক্ষমা চাইতেন, তবে তারা আল্লাহকে পেত তাওবা কবুলকারী, পরম দয়ালুরূপে। আবারও সেই একই ক্রিয়াপদ: পাওয়া। কুরআন বারবার জোর দিয়ে বলে, ক্ষমা দূরের কোনো সম্ভাবনা নয় যা নিয়ে দর-কষাকষি করতে হবে, বরং এক বর্তমান বাস্তবতা, যেখানে প্রবেশ করতে হয়।",
        },
      ],
    },
    {
      h: { en: "The Wider Invitation", bn: "বৃহত্তর আমন্ত্রণ" },
      p: [
        {
          en: "The verse belongs to a family. 39:53 forbids despair of Allah's mercy to those who have gone to excess against themselves, for Allah forgives all sins. 3:135 praises those who, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness for their sins — and who forgives sins except Allah? And 25:70 promises that for those who repent, believe and work righteousness, Allah will replace their evil deeds with good ones. The doorway of 4:110 opens onto all of this.",
          bn: "আয়াতটি একটি পরিবারের সদস্য। 39:53 তাদের জন্য আল্লাহর রহমত থেকে নিরাশ হওয়া নিষেধ করে, যারা নিজেদের উপর বাড়াবাড়ি করেছে — কারণ আল্লাহ সব গুনাহ ক্ষমা করেন। 3:135 তাদের প্রশংসা করে যারা কোনো অশ্লীল কাজ করে ফেললে বা নিজেদের উপর জুলুম করলে আল্লাহকে স্মরণ করে নিজেদের গুনাহের জন্য ক্ষমা চায় — আর আল্লাহ ছাড়া কে-ই বা গুনাহ ক্ষমা করে? আর 25:70 প্রতিশ্রুতি দেয়, যারা তাওবা করে, ঈমান আনে ও সৎকাজ করে, আল্লাহ তাদের মন্দ কাজগুলো ভালো দিয়ে বদলে দেবেন। 4:110 আয়াতের দরজাটি এসবের দিকেই খোলে।",
        },
      ],
    },
    {
      h: { en: "Using the Door", bn: "দরজাটি ব্যবহার" },
      p: [
        {
          en: "The practice is speed. Wrong happens; the trained believer shortens the distance between the fall and the istighfar until it is nearly nothing — no waiting to feel worthy, no fixing oneself first, because the verse's order is wrong, then turning, then finding. Delay serves nothing except the voice that says the door has surely shut this time. The verse exists precisely to silence that voice.",
          bn: "এর অনুশীলন হলো দ্রুততা। অন্যায় ঘটে যায়; প্রশিক্ষিত মুমিন পতন আর ইস্তিগফারের মাঝের দূরত্ব কমাতে কমাতে প্রায় শূন্যে নামিয়ে আনে — যোগ্য বোধ করার অপেক্ষা নেই, আগে নিজেকে শুধরে নেওয়ার শর্ত নেই, কারণ আয়াতের ক্রম হলো: অন্যায়, তারপর ফেরা, তারপর পাওয়া। দেরি কেবল সেই কণ্ঠস্বরের কাজে লাগে যে বলে, এবার নিশ্চয়ই দরজা বন্ধ হয়ে গেছে। আয়াতটির অস্তিত্বই সেই কণ্ঠস্বরকে চুপ করানোর জন্য।",
        },
        {
          en: "One caution keeps the door honest. Seeking forgiveness in the verse is a turning of the heart, not a formula recited over a sin one intends to keep. The passage around it is about people who covered wrong with words. So say the words, and turn — return what was taken, repair what can be repaired, leave what must be left. Then the promise applies exactly as written: you will find Him Forgiving, Merciful.",
          bn: "একটি সতর্কতা দরজাটিকে সৎ রাখে। আয়াতে ক্ষমা চাওয়া মানে অন্তরের ফেরা — এমন কোনো মুখস্থ বাক্য নয় যা পড়া হয় সেই গুনাহের উপর, যা ধরে রাখারই ইচ্ছা। আশপাশের অনুচ্ছেদটিই তো তাদের নিয়ে, যারা কথা দিয়ে অন্যায় ঢেকেছিল। তাই শব্দগুলো বলুন, এবং ফিরুন — যা নেওয়া হয়েছে তা ফেরত দিন, যা মেরামতযোগ্য তা মেরামত করুন, যা ছাড়তে হবে তা ছাড়ুন। তখন প্রতিশ্রুতিটি হুবহু লেখা অনুযায়ীই প্রযোজ্য হবে: আপনি তাঁকে পাবেন ক্ষমাশীল, পরম দয়ালুরূপে।",
        },
      ],
    },
  ],
},
'7:55-56': {
  sections: [
    {
      h: { en: "After the Verse of Creation and Command", bn: "সৃষ্টি ও হুকুমের আয়াতের পরে" },
      p: [
        {
          en: "The command to call on Allah follows straight after one of the Quran's great creation passages. 7:54 declares that your Lord is Allah, who created the heavens and the earth in six days and then rose over the Throne; He makes the night cover the day, chasing it swiftly; and the sun, the moon and the stars are subjected by His command. His is the creation and the command. Then, without pause: call upon your Lord. The One just described is the One addressed.",
          bn: "আল্লাহকে ডাকার নির্দেশটি এসেছে কুরআনের অন্যতম মহৎ সৃষ্টি-বর্ণনার ঠিক পরেই। 7:54 ঘোষণা করে, তোমাদের রব আল্লাহ, যিনি আসমানসমূহ ও যমীন ছয় দিনে সৃষ্টি করেছেন, তারপর আরশের উপর সমুন্নত হয়েছেন; তিনি রাত দিয়ে দিনকে ঢেকে দেন — রাত তাকে দ্রুত তাড়া করে ফেরে; আর সূর্য, চাঁদ ও নক্ষত্ররাজি তাঁর হুকুমের অধীন। সৃষ্টিও তাঁর, হুকুমও তাঁর। তারপর, কোনো বিরতি ছাড়াই: তোমাদের রবকে ডাকো। যাঁর বর্ণনা এইমাত্র দেওয়া হলো, সম্বোধন তাঁরই উদ্দেশে।",
        },
        {
          en: "The sequence teaches before it commands. Only after establishing who holds creation and command does the passage say: now speak to Him. At-Tirmidhi records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ said supplication is itself the worship. Du'a is not a device for extracting outcomes; it is the creature answering the description of 7:54 with the only fitting response — turning to the One who commands all things with its needs and its lowness.",
          bn: "এই বিন্যাস নির্দেশ দেওয়ার আগে শিক্ষা দেয়। সৃষ্টি ও হুকুম কার হাতে তা প্রতিষ্ঠার পরেই অনুচ্ছেদটি বলে: এবার তাঁর সাথে কথা বলো। তিরমিযী নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দোয়াই তো ইবাদত। দোয়া ফলাফল আদায়ের কোনো কৌশল নয়; এটি হলো 7:54 আয়াতের বর্ণনার জবাবে সৃষ্টির একমাত্র মানানসই সাড়া — নিজের প্রয়োজন ও দীনতা নিয়ে সেই সত্তার দিকে ফেরা, যিনি সবকিছুর হুকুম দেন।",
        },
      ],
    },
    {
      h: { en: "Humbly and in Secret", bn: "বিনয়ে ও গোপনে" },
      p: [
        {
          en: "Ud'u rabbakum tadarru'an wa khufyah — call on your Lord in humility and in secret. Tadarru' is the lowness of someone who knows his need; khufyah is quietness, prayer kept between the servant and his Lord. The commentators note that secrecy protects sincerity — a hidden request cannot be performed for an audience — and suits the One addressed, who hears the faintest whisper. Loudness adds nothing to His hearing; softness adds much to our honesty.",
          bn: "উদ'ঊ রাব্বাকুম তাদাররু'আন ওয়া খুফইয়াহ — তোমাদের রবকে ডাকো বিনয়ের সাথে ও গোপনে। তাদাররু' হলো নিজের মুখাপেক্ষিতা জানা মানুষের দীনতা; খুফইয়াহ হলো নীরবতা — বান্দা ও তার রবের মাঝে সীমাবদ্ধ রাখা প্রার্থনা। মুফাসসিরগণ লক্ষ করেন, গোপনীয়তা আন্তরিকতাকে রক্ষা করে — লুকানো আবেদন কোনো দর্শকের জন্য অভিনয় করা যায় না — আর তা মানানসইও যাঁকে ডাকা হচ্ছে তাঁর সাথে, যিনি ক্ষীণতম ফিসফিসও শোনেন। উচ্চস্বর তাঁর শ্রবণে কিছুই যোগ করে না; কোমল স্বর আমাদের সততায় অনেক কিছু যোগ করে।",
        },
        {
          en: "Al-Bukhari records that when the companions raised their voices in takbir on a journey, the Prophet ﷺ told them to be gentle with themselves, for they were not calling upon one deaf or absent, but upon One who is Hearing and near. The hadith is the verse in action: the volume of supplication should be set by who Allah is, not by the intensity of our feelings.",
          bn: "বুখারী বর্ণনা করেন, এক সফরে সাহাবীরা উঁচু গলায় তাকবীর বলছিলেন, তখন নবী ﷺ তাঁদের বললেন নিজেদের প্রতি সদয় হতে, কারণ তাঁরা কোনো বধির বা অনুপস্থিত সত্তাকে ডাকছেন না; ডাকছেন তাঁকে, যিনি সর্বশ্রোতা ও নিকটবর্তী। হাদীসটি যেন আয়াতেরই বাস্তব প্রয়োগ: দোয়ার স্বরমাত্রা ঠিক হবে আল্লাহ কে — সেই পরিচয় দিয়ে, আমাদের আবেগের তীব্রতা দিয়ে নয়।",
        },
      ],
    },
    {
      h: { en: "Transgressing in Asking", bn: "চাওয়ায় সীমালঙ্ঘন" },
      p: [
        {
          en: "He does not love al-mu'tadin, those who cross the bounds. The commentators apply this first to transgression within supplication itself: asking Allah for something sinful or for the severing of family ties, or turning du'a into ornate performance. Abu Dawud records from Abdullah ibn Mughaffal (RA) that the Prophet ﷺ said there will be in this nation a people who transgress in purification and in supplication. Even worship has edges, and love is promised to those who stay within them.",
          bn: "তিনি আল-মু'তাদীন — সীমালঙ্ঘনকারীদের — ভালোবাসেন না। মুফাসসিরগণ এটি প্রথমে প্রয়োগ করেন খোদ দোয়ার ভেতরের সীমালঙ্ঘনে: আল্লাহর কাছে কোনো গুনাহের বিষয় বা আত্মীয়তার বন্ধন ছিন্ন করার আবেদন, কিংবা দোয়াকে অলঙ্কৃত প্রদর্শনীতে পরিণত করা। আবূ দাঊদ আবদুল্লাহ ইবনে মুগাফফাল (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: এই উম্মতে এমন এক সম্প্রদায় হবে যারা পবিত্রতা অর্জনে ও দোয়ায় সীমালঙ্ঘন করবে। এমনকি ইবাদতেরও কিনারা আছে, আর ভালোবাসার প্রতিশ্রুতি তাদের জন্য যারা তার ভেতরে থাকে।",
        },
      ],
    },
    {
      h: { en: "Corruption After Setting Right", bn: "সংশোধনের পর বিপর্যয়" },
      p: [
        {
          en: "Then 7:56 widens the lens: do not spread corruption in the earth after it has been set right. The commentators read the setting right as Allah's own act — He ordered the world and sent messengers and guidance to keep it ordered — so that fasad, whether sin, injustice or the ruin of what others depend on, is vandalism against a finished work. Placing this command between two commands about du'a is deliberate: the hands must not undo what the tongue asks for.",
          bn: "এরপর 7:56 দৃষ্টিক্ষেত্র প্রশস্ত করে: যমীন সংশোধিত হওয়ার পর তাতে বিপর্যয় ছড়িয়ো না। মুফাসসিরগণ এই সংশোধনকে পড়েন আল্লাহর নিজের কাজ হিসেবে — তিনি জগৎকে সুবিন্যস্ত করেছেন এবং তা সুবিন্যস্ত রাখতে রাসূল ও হেদায়েত পাঠিয়েছেন — কাজেই ফাসাদ, তা গুনাহ হোক, জুলুম হোক বা মানুষের নির্ভরতার জিনিস ধ্বংস করা হোক, একটি সম্পূর্ণ কাজের উপর ভাঙচুর। দোয়া-সংক্রান্ত দুটি নির্দেশের মাঝখানে এই নির্দেশ বসানো ইচ্ছাকৃত: জিহ্বা যা চায়, হাত যেন তা ভেঙে না ফেলে।",
        },
        {
          en: "The pairing also blocks a familiar self-deception, in which private devotion is treated as compensation for public harm. The passage refuses the split: the same breath that teaches how to ask teaches what the asker's hands must not do. A person's supplication and a person's conduct in the land are one file, read together. The earth set right includes what is near you — the household, the workplace, the trust you hold — and leaving it better is part of the asking.",
          bn: "এই জোড় একটি চেনা আত্মপ্রতারণাকেও আটকে দেয় — যেখানে একান্ত ইবাদতকে প্রকাশ্য ক্ষতির ক্ষতিপূরণ ভাবা হয়। অনুচ্ছেদটি এই বিভাজন মানে না: যে নিঃশ্বাসে চাওয়ার নিয়ম শেখানো হয়, সেই নিঃশ্বাসেই শেখানো হয় প্রার্থনাকারীর হাত কী করতে পারবে না। মানুষের দোয়া আর যমীনে তার আচরণ একই নথি — একসাথে পড়া হয়। সংশোধিত যমীনের মধ্যে আপনার নিকটের জিনিসও পড়ে — সংসার, কর্মক্ষেত্র, আপনার হাতে থাকা আমানত — আর তা আগের চেয়ে ভালো রেখে যাওয়াও চাওয়ারই অংশ।",
        },
      ],
    },
    {
      h: { en: "Fear, Hope, and Nearness", bn: "ভয়, আশা ও নৈকট্য" },
      p: [
        {
          en: "Call on Him khawfan wa tama'an, in fear and in hope — fear of one's own sins and of rejection, hope in His mercy and His promise. The scholars describe these as two wings that keep the heart level: fear alone curdles into despair, hope alone into presumption. The verse then closes with the reason both are safe: surely the mercy of Allah is near to the muhsinin, those who do good.",
          bn: "তাঁকে ডাকো খাওফান ওয়া তামা'আন — ভয় ও আশা নিয়ে — নিজের গুনাহের ও প্রত্যাখ্যাত হওয়ার ভয়, তাঁর রহমত ও প্রতিশ্রুতিতে আশা। আলিমগণ এ দুটিকে বর্ণনা করেন দুটি ডানা হিসেবে, যা অন্তরকে সমতলে রাখে: শুধু ভয় জমাট বেঁধে হয় হতাশা, শুধু আশা গড়ায় দুঃসাহসে। আয়াতটি তারপর শেষ হয় সেই কারণ দিয়ে, যার জোরে দুটিই নিরাপদ: নিশ্চয়ই আল্লাহর রহমত মুহসিনদের — সৎকর্মশীলদের — নিকটবর্তী।",
        },
        {
          en: "That closing line is echoed by 2:186, where Allah says: when My servants ask you about Me, I am near, answering the call of the caller when he calls. And 40:60 carries the command with a promise: call upon Me; I will respond to you. Nearness, response, mercy — the Quran keeps stacking assurances around du'a, while this passage adds the manners that keep the channel clean.",
          bn: "এই সমাপ্তি-বাক্যের প্রতিধ্বনি 2:186 আয়াতে, যেখানে আল্লাহ বলেন: আমার বান্দারা যখন তোমাকে আমার সম্পর্কে জিজ্ঞেস করে — আমি তো নিকটেই, ডাকনেওয়ালা যখন ডাকে আমি তার ডাকে সাড়া দিই। আর 40:60 নির্দেশের সাথে প্রতিশ্রুতি বহন করে: আমাকে ডাকো; আমি তোমাদের সাড়া দেব। নৈকট্য, সাড়া, রহমত — কুরআন দোয়ার চারপাশে আশ্বাসের পর আশ্বাস সাজিয়ে যায়, আর এই অনুচ্ছেদ যোগ করে সেই আদবগুলো, যা যোগাযোগের পথটি পরিচ্ছন্ন রাখে।",
        },
      ],
    },
    {
      h: { en: "Praying and Behaving", bn: "প্রার্থনা ও আচরণ" },
      p: [
        {
          en: "The lived shape of these verses is a quiet, regular, private supplication — a fixed time when no one else hears you. Check the content of your asking against the verse: nothing that transgresses, nothing performed. And keep the middle command attached: the same person who whispers to Allah at night must not corrupt dealings, trusts or shared spaces by day. Whoever prays like 7:55 and lives against 7:56 has torn the passage in half; mercy is written as near to those who do good, and the two verses define doing good from the inside out.",
          bn: "এই আয়াতগুলোর যাপিত রূপ হলো এক শান্ত, নিয়মিত, একান্ত দোয়া — এমন এক নির্দিষ্ট সময়, যখন আপনার কথা আর কেউ শোনে না। নিজের চাওয়ার বিষয়বস্তু আয়াতের সাথে মিলিয়ে নিন: সীমালঙ্ঘন করে এমন কিছু নয়, প্রদর্শনীর জন্যও কিছু নয়। আর মাঝের নির্দেশটিকে সাথে জুড়ে রাখুন: যে মানুষ রাতে আল্লাহর কাছে ফিসফিস করে, সে যেন দিনে লেনদেন, আমানত বা যৌথ পরিসর নষ্ট না করে। যে 7:55 আয়াতের মতো দোয়া করে অথচ 7:56 আয়াতের বিরুদ্ধে জীবন যাপন করে, সে অনুচ্ছেদটিকে দুই টুকরো করে ফেলেছে; রহমত লেখা আছে সৎকর্মশীলদের নিকটে, আর আয়াত দুটি সৎকর্মের সংজ্ঞা দেয় ভেতর থেকে বাইরের দিকে।",
        },
      ],
    },
  ],
},
'31:17-19': {
  sections: [
    {
      h: { en: "A Father's Counsel", bn: "এক পিতার উপদেশ" },
      p: [
        {
          en: "These verses close the counsel of Luqman to his son, a man the Quran describes in 31:12 as given wisdom. The series opens at 31:13, where he calls shirk a tremendous wrong, and passes through 31:16, where he teaches that even a deed the weight of a mustard seed, hidden in a rock or in the heavens or in the earth, will be brought forth by Allah. The son now knows whom to worship and that nothing escapes the reckoning. What follows is how to live in front of people.",
          bn: "এই আয়াতগুলো লুকমানের তাঁর সন্তানকে দেওয়া উপদেশের সমাপ্তি — যাঁকে কুরআন 31:12 আয়াতে হিকমতপ্রাপ্ত বলে বর্ণনা করেছে। ধারাটি শুরু হয় 31:13 আয়াতে, যেখানে তিনি শিরককে এক মহা জুলুম বলেন, আর 31:16 পেরিয়ে আসে, যেখানে তিনি শেখান — সরিষার দানার ওজনের কাজও, তা পাথরের ভেতরে হোক বা আসমানে বা যমীনে, আল্লাহ তা হাজির করবেন। সন্তান এখন জানে কার ইবাদত করতে হয় এবং হিসাব থেকে কিছুই ছাড়া পায় না। এরপর যা আসে তা হলো মানুষের সামনে কীভাবে বাঁচতে হয়।",
        },
        {
          en: "Two verses interrupt the counsel to add a command Luqman could not give himself: 31:14-15 order gratitude and kindness to parents while forbidding obedience to them in shirk. The commentators note the effect of the interruption — the father's authority is real but bounded, and the Author of the counsel is Allah, not Luqman. When the series resumes, it carries that weight: this is wisdom the Quran itself has endorsed and preserved for every parent teaching every child.",
          bn: "দুটি আয়াত উপদেশের মাঝে ঢুকে এমন এক নির্দেশ যোগ করে, যা লুকমান নিজে দিতে পারতেন না: 31:14-15 মা-বাবার প্রতি কৃতজ্ঞতা ও সদাচরণের হুকুম দেয়, আবার শিরকে তাঁদের আনুগত্য নিষেধ করে। মুফাসসিরগণ এই বিরতির তাৎপর্য লক্ষ করেন — পিতার কর্তৃত্ব বাস্তব, কিন্তু সীমাবদ্ধ; আর উপদেশের প্রকৃত রচয়িতা আল্লাহ, লুকমান নন। ধারাটি যখন আবার শুরু হয়, তা এই ভার বহন করে: এ এমন হিকমত, যা কুরআন নিজেই অনুমোদন করেছে এবং প্রতিটি সন্তানকে শেখানো প্রতিটি অভিভাবকের জন্য সংরক্ষণ করেছে।",
        },
      ],
    },
    {
      h: { en: "Prayer, Duty, Patience", bn: "নামায, দায়িত্ব, ধৈর্য" },
      p: [
        {
          en: "31:17 strings four commands in a deliberate order: establish the prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Prayer comes first because standing rightly before Allah precedes standing usefully among people. And patience is fastened directly to the commanding and forbidding, because the commentators note what experience confirms: whoever calls others to good and away from wrong will be resisted, and the cost was included in the assignment from the start.",
          bn: "31:17 চারটি নির্দেশকে সুচিন্তিত ক্রমে গাঁথে: নামায কায়েম করো, সৎকাজের আদেশ দাও, অসৎকাজ থেকে নিষেধ করো, আর তোমার উপর যা আপতিত হয় তাতে ধৈর্য ধরো। নামায প্রথমে, কারণ আল্লাহর সামনে সঠিকভাবে দাঁড়ানোই মানুষের মাঝে কার্যকরভাবে দাঁড়ানোর পূর্বশর্ত। আর ধৈর্যকে সরাসরি আদেশ-নিষেধের সাথে বেঁধে দেওয়া হয়েছে, কারণ মুফাসসিরগণ যা বলেন অভিজ্ঞতাও তা-ই নিশ্চিত করে: যে মানুষকে ভালোর দিকে ডাকে ও মন্দ থেকে ফেরায়, সে বাধা পাবেই — আর এই মূল্যটুকু গোড়া থেকেই দায়িত্বের অন্তর্ভুক্ত ছিল।",
        },
        {
          en: "The verse ends: indeed that is of the matters requiring resolve, 'azm al-umur. The phrase dignifies endurance. Patience here is not passivity but the resolve that keeps a person at their post after the pushback arrives. A father telling his son this is not preparing him for applause; he is preparing him for friction, and teaching him that friction endured for truth is itself a high matter.",
          bn: "আয়াতটি শেষ হয়: নিশ্চয়ই এটি দৃঢ়সংকল্পের কাজগুলোর অন্তর্গত — 'আযমুল উমূর। বাক্যাংশটি সহনশীলতাকে মর্যাদা দেয়। এখানে ধৈর্য নিষ্ক্রিয়তা নয়, বরং সেই সংকল্প, যা প্রতিরোধ আসার পরও মানুষকে তার দায়িত্বের জায়গায় টিকিয়ে রাখে। যে পিতা সন্তানকে এ কথা বলছেন, তিনি তাকে করতালির জন্য প্রস্তুত করছেন না; প্রস্তুত করছেন ঘর্ষণের জন্য, আর শেখাচ্ছেন — সত্যের জন্য সহ্য করা ঘর্ষণ নিজেই এক উঁচু ব্যাপার।",
        },
      ],
    },
    {
      h: { en: "The Twisted Cheek", bn: "বাঁকানো গাল" },
      p: [
        {
          en: "31:18 begins: wa la tusa''ir khaddaka lin-nas — do not turn your cheek toward people in contempt. The lexicographers cited by the commentators trace sa'ar to a disease that twists a camel's neck, so the verse names contempt by its physical symptom: the face angled away from someone judged not worth facing. Nor walk through the earth marahan, in exultant self-display. Allah does not love any mukhtal fakhur — the mukhtal carries conceit inside, the fakhur pours it out as boasting.",
          bn: "31:18 শুরু হয়: ওয়া লা তুসা''ইর খাদ্দাকা লিন-নাস — অবজ্ঞাভরে মানুষের দিকে তোমার গাল ফিরিয়ে দিয়ো না। মুফাসসিরদের উদ্ধৃত অভিধানবিদগণ সা'আর শব্দটিকে এমন এক রোগে ফিরিয়ে নেন, যা উটের ঘাড় বাঁকিয়ে দেয়; আয়াতটি তাই অবজ্ঞাকে তার শারীরিক লক্ষণ দিয়ে চিহ্নিত করে: মুখ ঘুরিয়ে রাখা এমন কারও কাছ থেকে, যাকে মুখোমুখি হওয়ার যোগ্যই ভাবা হয়নি। আর যমীনে মারাহান — দম্ভভরা আত্মপ্রদর্শনে — হেঁটো না। আল্লাহ কোনো মুখতাল ফাখূরকে ভালোবাসেন না — মুখতাল ভেতরে অহং বহন করে, ফাখূর তা বাইরে ঢালে গর্ব হয়ে।",
        },
        {
          en: "The placement is exact. Contempt is the occupational disease of the person who commands right and forbids wrong; standing above someone's error slides easily into standing above the person. So the counsel moves without a seam from courage before people to humility with them. The son is to hold truth firmly and carry his own face, stride and voice modestly — the combination the surah presents as wisdom.",
          bn: "এই অবস্থান নির্ভুল। অবজ্ঞা হলো তার পেশাগত ব্যাধি, যে সৎকাজের আদেশ দেয় ও অসৎকাজে নিষেধ করে; কারও ভুলের উপরে দাঁড়ানো খুব সহজেই গড়িয়ে যায় খোদ মানুষটির উপরে দাঁড়ানোয়। তাই উপদেশটি কোনো সেলাই ছাড়াই মানুষের সামনে সাহস থেকে মানুষের সাথে বিনয়ে চলে যায়। সন্তানকে সত্য ধরতে হবে শক্ত করে, আর নিজের মুখ, পদক্ষেপ ও কণ্ঠ বইতে হবে বিনম্রভাবে — এই সমন্বয়কেই সূরাটি হিকমত হিসেবে উপস্থাপন করে।",
        },
      ],
    },
    {
      h: { en: "Measured Step, Lowered Voice", bn: "পরিমিত চলা, নিচু স্বর" },
      p: [
        {
          en: "31:19 gives the positive form: be moderate in your walking and lower your voice. Then a comparison chosen to end the argument: the harshest of sounds is the voice of donkeys. The commentators observe that the verse does not forbid walking fast or speaking strongly when the situation calls for it; it forbids swagger — pace as display, volume as dominance. Loudness that serves nothing but the speaker's presence is likened to braying, and no one who hears the comparison forgets it.",
          bn: "31:19 ইতিবাচক রূপটি দেয়: তোমার চলায় মধ্যপন্থা রাখো এবং তোমার কণ্ঠস্বর নিচু করো। তারপর এমন এক তুলনা, যা তর্ক শেষ করে দেওয়ার জন্যই বাছাই করা: সবচেয়ে কর্কশ আওয়াজ তো গাধার আওয়াজ। মুফাসসিরগণ লক্ষ করেন, আয়াতটি প্রয়োজনের সময় দ্রুত হাঁটা বা জোর দিয়ে কথা বলা নিষেধ করে না; নিষেধ করে দম্ভ — প্রদর্শনী হিসেবে চলার গতি, আধিপত্য হিসেবে আওয়াজের জোর। যে উচ্চস্বর বক্তার উপস্থিতি জাহির করা ছাড়া আর কোনো কাজে আসে না, তাকে গাধার ডাকের সাথে তুলনা করা হয়েছে — আর এই তুলনা যে একবার শোনে, সে ভোলে না।",
        },
      ],
    },
    {
      h: { en: "The Same Teaching Elsewhere", bn: "অন্যত্র একই শিক্ষা" },
      p: [
        {
          en: "The Quran repeats this pairing of conviction and humility. 17:37 commands: do not walk through the earth exultantly, for you will never tear the earth open, nor reach the mountains in height. 25:63 describes the servants of the Most Merciful as those who walk upon the earth gently, and when the ignorant address them, they say words of peace. And 3:104 assigns the community the same duty Luqman gave his son: a body of people calling to good, enjoining right and forbidding wrong.",
          bn: "কুরআন প্রত্যয় ও বিনয়ের এই জোড় বারবার ফিরিয়ে আনে। 17:37 নির্দেশ দেয়: যমীনে দম্ভভরে হেঁটো না, কারণ তুমি কখনো যমীন চিরে ফেলতে পারবে না, উচ্চতায় পাহাড়েও পৌঁছাবে না। 25:63 পরম করুণাময়ের বান্দাদের বর্ণনা করে — তারা যমীনে চলে কোমলভাবে, আর অজ্ঞরা তাদের সম্বোধন করলে তারা বলে শান্তির কথা। আর 3:104 সমাজকে সেই একই দায়িত্ব দেয়, যা লুকমান তাঁর সন্তানকে দিয়েছিলেন: এমন একদল মানুষ, যারা কল্যাণের দিকে ডাকবে, সৎকাজের আদেশ দেবে ও অসৎকাজে নিষেধ করবে।",
        },
      ],
    },
    {
      h: { en: "Living the Sequence", bn: "ক্রমটি যেভাবে যাপন করা যায়" },
      p: [
        {
          en: "The order of the counsel is usable exactly as given. Anchor the day in prayer before attempting to straighten anyone else. When you do speak for what is right, budget for resistance in advance, so that the first pushback does not read as a sign to stop. And audit the body along with the deeds: who receives your full face and who gets the turned cheek, how you enter a room, how loudly you need to be heard.",
          bn: "উপদেশের ক্রমটি যেভাবে দেওয়া হয়েছে ঠিক সেভাবেই ব্যবহারযোগ্য। অন্য কাউকে সোজা করতে যাওয়ার আগে দিনটিকে নামাযে নোঙর করুন। যখন ন্যায়ের পক্ষে কথা বলবেনই, তখন প্রতিরোধের বাজেট আগে থেকে ধরে রাখুন, যাতে প্রথম ধাক্কাটিই থেমে যাওয়ার ইশারা মনে না হয়। আর আমলের সাথে সাথে শরীরেরও হিসাব নিন: কে আপনার পূর্ণ মুখ পায় আর কে পায় ফিরিয়ে নেওয়া গাল, আপনি ঘরে ঢোকেন কীভাবে, নিজের কথা শোনাতে আপনার কতটা জোর লাগে।",
        },
        {
          en: "What makes these verses hard is that they join two things we like to separate: conviction and gentleness. Luqman's son is told to be firm enough to forbid wrong and humble enough to lower his voice — in the same breath. The believer this counsel produces is neither the harsh reformer nor the polite bystander, but a person whose worship, work and very gait say the same thing.",
          bn: "এই আয়াতগুলো কঠিন এই কারণে যে, আমরা যে দুটি জিনিস আলাদা রাখতে ভালোবাসি — প্রত্যয় আর কোমলতা — এগুলো তাদের জুড়ে দেয়। লুকমানের সন্তানকে বলা হয়েছে অসৎকাজ নিষেধ করার মতো দৃঢ় হতে, আবার কণ্ঠ নামানোর মতো বিনয়ী হতে — একই নিঃশ্বাসে। এই উপদেশ যে মুমিন তৈরি করে, সে রূঢ় সংস্কারকও নয়, ভদ্র দর্শকও নয়; বরং এমন একজন মানুষ, যার ইবাদত, কাজ, এমনকি হাঁটার ভঙ্গিও একই কথা বলে।",
        },
      ],
    },
  ],
},
'42:36-38': {
  sections: [
    {
      h: { en: "Two Currencies", bn: "দুই মুদ্রা" },
      p: [
        {
          en: "42:36 sets a comparison that the rest of the passage unpacks: whatever you have been given is the mata' of the life of this world, its passing enjoyment, while what is with Allah is better and more lasting — khayr wa abqa — for those who believe and rely upon their Lord. The Quran uses the same pair of words in 87:17 as well. Mata' is not condemned; it is measured. The verse states its size honestly, then names something bigger, and asks the heart to file each in its place.",
          bn: "42:36 এমন এক তুলনা স্থাপন করে, যা বাকি অনুচ্ছেদ খুলে দেখায়: তোমাদের যা কিছু দেওয়া হয়েছে তা দুনিয়ার জীবনের মাতা' — তার ক্ষণস্থায়ী উপভোগ; আর আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী — খাইরুন ওয়া আবকা — তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে। কুরআন একই শব্দজোড় ব্যবহার করে 87:17 আয়াতে। মাতা'-কে নিন্দা করা হয়নি; মাপা হয়েছে। আয়াতটি তার আকার সততার সাথে বলে, তারপর আরও বড় কিছুর নাম নেয়, আর অন্তরকে বলে প্রত্যেকটিকে তার নিজের খোপে রাখতে।",
        },
        {
          en: "The commentators keep the two clauses attached to their condition: better and more lasting for those who believe and rely upon their Lord. Tawakkul is named at the head of the passage because everything that follows depends on it. What is with Allah is invisible now; only trust makes an unseen reward weigh more than a visible gain. The traits about to be listed are what that trust looks like once it starts spending itself in conduct.",
          bn: "মুফাসসিরগণ বাক্যাংশ দুটিকে তাদের শর্তের সাথে জুড়েই রাখেন: উত্তম ও অধিক স্থায়ী — তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে। তাওয়াক্কুলের নাম অনুচ্ছেদের মাথায় এসেছে, কারণ এরপরের সবকিছু তার উপরেই নির্ভরশীল। আল্লাহর কাছে যা আছে তা এখন অদৃশ্য; একমাত্র ভরসাই পারে অদেখা প্রতিদানকে দৃশ্যমান লাভের চেয়ে ভারী করে তুলতে। যে গুণগুলোর তালিকা আসতে যাচ্ছে, সেগুলো আসলে সেই ভরসারই চেহারা — যখন তা আচরণে নিজেকে খরচ করতে শুরু করে।",
        },
      ],
    },
    {
      h: { en: "Forgivers When Angry", bn: "রাগের সময় ক্ষমাশীল" },
      p: [
        {
          en: "42:37 continues the portrait: those who avoid the major sins and indecencies, and when they are angry, they forgive. The Arabic is a nominal construction — hum yaghfirun, they are forgivers — describing a settled trait rather than a lucky moment. Anger itself is not denied or condemned; the verse assumes it will come and legislates its exit. Between the provocation and the response, these people have installed forgiveness as the default.",
          bn: "42:37 প্রতিকৃতিটি এগিয়ে নেয়: যারা কবীরা গুনাহ ও অশ্লীলতা এড়িয়ে চলে, আর যখন রেগে যায়, তখন ক্ষমা করে। আরবি গঠনটি নামবাচক — হুম ইয়াগফিরূন, তারাই ক্ষমাকারী — যা কোনো কাকতালীয় মুহূর্ত নয়, বরং থিতু হয়ে বসা এক স্বভাবের বর্ণনা। রাগকে অস্বীকারও করা হয়নি, নিন্দাও করা হয়নি; আয়াতটি ধরেই নেয় রাগ আসবে, আর তার প্রস্থানপথের বিধান দেয়। উসকানি আর প্রতিক্রিয়ার মাঝখানে এই মানুষগুলো ক্ষমাকে স্থায়ী নিয়ম করে বসিয়ে রেখেছে।",
        },
        {
          en: "The Quran praises the same trait in 3:134, where those who spend in ease and in hardship restrain their anger and pardon people — and Allah loves the muhsinin. The commentators point out the gradation there: swallowing rage, then pardoning, then going beyond it to good treatment. 42:37 assumes the whole ladder. Forgiveness exercised in strength is the mark; pardoning what one was powerless to punish anyway costs little.",
          bn: "কুরআন একই গুণের প্রশংসা করে 3:134 আয়াতে: যারা স্বচ্ছলতায় ও অনটনে ব্যয় করে, রাগ দমন করে, আর মানুষকে ক্ষমা করে — আর আল্লাহ মুহসিনদের ভালোবাসেন। মুফাসসিরগণ সেখানকার স্তরবিন্যাস দেখিয়ে দেন: ক্রোধ গিলে ফেলা, তারপর মাফ করা, তারপর তাকেও ছাড়িয়ে সদাচরণে পৌঁছানো। 42:37 পুরো সিঁড়িটাই ধরে নেয়। শক্তি থাকা অবস্থায় করা ক্ষমাই আসল চিহ্ন; যাকে শাস্তি দেওয়ার ক্ষমতাই ছিল না তাকে মাফ করায় খরচ সামান্যই।",
        },
      ],
    },
    {
      h: { en: "The Verse of Consultation", bn: "পরামর্শের আয়াত" },
      p: [
        {
          en: "42:38 gives the surah its name: those who respond to their Lord and establish the prayer, wa amruhum shura baynahum — and their affair is consultation among themselves — and who spend from what We have provided them. Shura sits embedded between worship and charity, listed as a trait of the same rank. The construction again is descriptive: consultation is what their affairs are, a standing manner of deciding, not an occasional concession extracted from a reluctant leader.",
          bn: "42:38 সূরাটিকে তার নাম দেয়: যারা তাদের রবের ডাকে সাড়া দেয় ও নামায কায়েম করে, ওয়া আমরুহুম শূরা বাইনাহুম — আর তাদের কাজকর্ম চলে পারস্পরিক পরামর্শে — এবং আমরা তাদের যা দিয়েছি তা থেকে ব্যয় করে। শূরা বসে আছে ইবাদত আর দানের মাঝখানে গাঁথা হয়ে — একই মর্যাদার গুণ হিসেবে তালিকাভুক্ত। গঠনটি এখানেও বর্ণনামূলক: পরামর্শই তাদের কাজের ধরন — সিদ্ধান্ত নেওয়ার এক স্থায়ী রীতি; অনিচ্ছুক নেতার কাছ থেকে আদায় করা কোনো কালেভদ্রে-ছাড় নয়।",
        },
        {
          en: "Responding to their Lord, istajabu li-rabbihim, heads the verse and governs it. The commentators read it as the broad answering of Allah's call — obedience as a whole — of which the prayer is the most visible pillar. Consultation and spending then follow as the social half of the same response. The verse quietly refuses a religion of ritual alone: answering Allah includes how a community decides and how its wealth moves.",
          bn: "তাদের রবের ডাকে সাড়া দেওয়া — ইসতাজাবূ লিরাব্বিহিম — আয়াতের মাথায় বসে পুরোটাকে পরিচালনা করে। মুফাসসিরগণ একে পড়েন আল্লাহর ডাকে ব্যাপক অর্থে সাড়া হিসেবে — সামগ্রিক আনুগত্য — যার সবচেয়ে দৃশ্যমান স্তম্ভ হলো নামায। এরপর পরামর্শ ও ব্যয় আসে সেই একই সাড়ার সামাজিক অর্ধেক হয়ে। আয়াতটি নীরবে কেবল-আনুষ্ঠানিকতার ধর্মকে প্রত্যাখ্যান করে: আল্লাহকে সাড়া দেওয়ার মধ্যে এটাও পড়ে — একটি সমাজ কীভাবে সিদ্ধান্ত নেয় আর তার সম্পদ কোন পথে চলে।",
        },
      ],
    },
    {
      h: { en: "Consultation Before Power", bn: "ক্ষমতার আগেই পরামর্শ" },
      p: [
        {
          en: "By the mainstream reckoning this surah was revealed in Makkah, before the believers had a state, an army or a treasury. The commentators draw the consequence: shura is named as the character of the believing community itself — in households, partnerships and small collective matters — before it is any machinery of government. Later, in Madinah, 3:159 commands the Prophet ﷺ himself to consult them in the matter, though revelation guided him; the practice was made visible at the top so that no one below could disdain it.",
          bn: "মূলধারার হিসাবে এই সূরা মক্কায় নাযিল হয় — মুমিনদের কোনো রাষ্ট্র, সেনাবাহিনী বা কোষাগার থাকার আগেই। মুফাসসিরগণ এর ফল টেনে বের করেন: শূরাকে নাম দেওয়া হয়েছে খোদ মুমিন সমাজের চরিত্র হিসেবে — সংসারে, অংশীদারিত্বে, ছোটখাটো যৌথ ব্যাপারে — কোনো শাসনযন্ত্র হওয়ার আগেই। পরে মদীনায়, 3:159 স্বয়ং নবী ﷺ-কে নির্দেশ দেয় কাজে-কর্মে তাঁদের সাথে পরামর্শ করতে — যদিও ওহীই তাঁকে পথ দেখাত; রীতিটিকে শীর্ষে দৃশ্যমান করা হয়েছিল, যেন নিচের কেউ একে তুচ্ছ করতে না পারে।",
        },
      ],
    },
    {
      h: { en: "What the Passage Adds Next", bn: "অনুচ্ছেদের পরের সংযোজন" },
      p: [
        {
          en: "The verses that follow keep circling restraint. 42:40 rules that the recompense of an evil is an evil like it, but whoever pardons and sets matters right, his reward is upon Allah — He does not love the wrongdoers. 42:41 protects from blame the one who takes just retribution after being wronged, and 42:43 concludes: whoever is patient and forgives, that is of the matters requiring resolve. The passage holds both truths at once: justice is a right, and pardon is a rank.",
          bn: "পরের আয়াতগুলো সংযমের চারপাশেই ঘুরতে থাকে। 42:40 বিধান দেয়: মন্দের প্রতিফল তার সমান মন্দ; কিন্তু যে মাফ করে ও আপস-নিষ্পত্তি করে, তার প্রতিদান আল্লাহর জিম্মায় — তিনি জালিমদের ভালোবাসেন না। 42:41 জুলুমের শিকার হয়ে ন্যায্য প্রতিবিধান গ্রহণকারীকে দোষ থেকে রক্ষা করে, আর 42:43 উপসংহার টানে: যে ধৈর্য ধরে ও ক্ষমা করে — তা তো দৃঢ়সংকল্পের কাজগুলোর অন্তর্গত। অনুচ্ছেদটি দুটি সত্যকে একসাথে ধরে রাখে: ন্যায়বিচার একটি অধিকার, আর ক্ষমা একটি মর্যাদা।",
        },
      ],
    },
    {
      h: { en: "A Community's Audit", bn: "একটি সমাজের আত্মপরীক্ষা" },
      p: [
        {
          en: "The passage reads as a checklist for any believing household or institution. Which currency is the operation actually maximizing — the passing or the lasting? When anger arrives, is forgiveness the installed default or an occasional surprise? Are decisions genuinely consulted, with the quietest person heard, or announced after the fact? Does money flow out as reliably as prayers are prayed? None of the items is private; each one is visible in how a family or a team runs within a week.",
          bn: "অনুচ্ছেদটি যেকোনো মুমিন পরিবার বা প্রতিষ্ঠানের জন্য এক যাচাই-তালিকার মতো পড়া যায়। কারবারটি আসলে কোন মুদ্রা সর্বোচ্চ করছে — ক্ষণস্থায়ীটি, না স্থায়ীটি? রাগ এলে ক্ষমা কি বসানো স্থায়ী নিয়ম, নাকি কালেভদ্রে ঘটা চমক? সিদ্ধান্তগুলো কি সত্যিই পরামর্শ করে নেওয়া হয় — সবচেয়ে চুপচাপ মানুষটির কথাও শোনা হয় — নাকি ঘটে যাওয়ার পর ঘোষণা করা হয়? নামায যেমন নিয়মিত পড়া হয়, টাকাও কি তেমন নির্ভরযোগ্যভাবে বেরোয়? এর কোনোটিই ব্যক্তিগত নয়; এক সপ্তাহের মধ্যেই একটি পরিবার বা দল কীভাবে চলে তাতে প্রতিটি দেখা যায়।",
        },
        {
          en: "The order is also a method. Reliance on Allah in 42:36 comes first because the person clutching this world cannot afford restraint, pardon or open hands; every loss feels total. Once what is with Allah is genuinely believed to be better and more lasting, the rest of the portrait becomes affordable: anger can release its grip, consultation can risk being overruled, wealth can leave. The passage is not a list of separate virtues but one economy of the heart.",
          bn: "ক্রমটি একটি পদ্ধতিও বটে। 42:36 আয়াতে আল্লাহর উপর ভরসা আগে এসেছে, কারণ যে মানুষ দুনিয়াকে আঁকড়ে আছে, তার পক্ষে সংযম, ক্ষমা বা খোলা হাতের খরচ পোষায় না; প্রতিটি ক্ষতিই তার কাছে সর্বনাশ মনে হয়। আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী — এ কথা সত্যিই বিশ্বাস করা গেলে প্রতিকৃতির বাকিটা সাধ্যের মধ্যে চলে আসে: রাগ তার মুঠি আলগা করতে পারে, পরামর্শ নিজের মত নাকচ হওয়ার ঝুঁকি নিতে পারে, সম্পদ হাতছাড়া হতে পারে। অনুচ্ছেদটি আলাদা আলাদা গুণের তালিকা নয়, বরং অন্তরের একটিই অর্থনীতি।",
        },
      ],
    },
  ],
},
'51:55-56': {
  sections: [
    {
      h: { en: "Keep Reminding", bn: "স্মরণ করাতে থাকো" },
      p: [
        {
          en: "The command arrives as the correction of a possible misreading. The verse before it, 51:54, tells the Prophet ﷺ to turn away from those who obstinately refuse, and clears him of blame. If the passage ended there, withdrawal might look like the whole policy. 51:55 immediately reopens the work: and remind, for indeed the reminder benefits the believers. Turning from the mocker never cancels the reminding, because the reminder was never measured by the mocker's response.",
          bn: "নির্দেশটি আসে একটি সম্ভাব্য ভুল পাঠের সংশোধন হয়ে। ঠিক আগের আয়াত 51:54 নবী ﷺ-কে বলে একগুঁয়ে অস্বীকারকারীদের থেকে মুখ ফিরিয়ে নিতে, এবং তাঁকে দায়মুক্ত ঘোষণা করে। অনুচ্ছেদ সেখানেই শেষ হলে সরে আসাটাই পুরো নীতি বলে মনে হতে পারত। 51:55 সাথে সাথে কাজটি আবার খুলে দেয়: আর স্মরণ করিয়ে দাও, কারণ স্মরণিকা মুমিনদের উপকারে আসে। উপহাসকারী থেকে মুখ ফেরানো কখনোই স্মরণ করানো বাতিল করে না, কারণ স্মরণিকার মাপকাঠি কোনোদিন উপহাসকারীর সাড়া ছিল না।",
        },
        {
          en: "The mufassirun pause on whom the reminder profits: the believers — including those who already know. Knowledge sits in the heart like embers; reminding stirs it back to flame. This is why the Quran repeats itself, why the Friday sermon returns weekly, and why a believer can hear a truth learned in childhood and feel it land as if new. The benefit is not new information but the renewed presence of old truth.",
          bn: "মুফাসসিরগণ থামেন এই প্রশ্নে — স্মরণিকা কার উপকারে আসে: মুমিনদের — যারা আগে থেকেই জানে তাদেরও। জ্ঞান অন্তরে থাকে জ্বলন্ত কয়লার মতো; স্মরণ করানো তাকে নেড়ে আবার শিখায় ফেরায়। এ কারণেই কুরআন নিজের কথা ফিরিয়ে বলে, জুমার খুতবা প্রতি সপ্তাহে ফিরে আসে, আর একজন মুমিন শৈশবে শেখা সত্য শুনেও অনুভব করে যেন তা নতুন করে নামল। উপকারটি নতুন তথ্য নয়, বরং পুরনো সত্যের নবায়িত উপস্থিতি।",
        },
      ],
    },
    {
      h: { en: "The Purpose Sentence", bn: "উদ্দেশ্যের বাক্য" },
      p: [
        {
          en: "Then comes one of the most quoted sentences in the Quran: wa ma khalaqtu al-jinna wal-insa illa li-ya'budun — I did not create the jinn and mankind except to worship Me. Arabic reaches its strongest exclusivity through negation followed by exception: first everything is denied, then one thing alone is restored. Whatever other purposes creatures invent for themselves, the Maker has stated His, and He states it in the first person.",
          bn: "তারপর আসে কুরআনের সবচেয়ে বেশি উদ্ধৃত বাক্যগুলোর একটি: ওয়া মা খালাকতুল-জিন্না ওয়াল-ইনসা ইল্লা লিইয়া'বুদূন — আমি জিন ও মানুষকে সৃষ্টি করিনি আমার ইবাদত ছাড়া অন্য কোনো উদ্দেশ্যে। আরবি তার প্রবলতম একচ্ছত্রতায় পৌঁছায় অস্বীকৃতির পর ব্যতিক্রম দিয়ে: প্রথমে সবকিছু নাকচ হয়, তারপর একটিমাত্র জিনিস ফিরিয়ে আনা হয়। সৃষ্টিরা নিজেদের জন্য আর যত উদ্দেশ্যই বানাক, নির্মাতা তাঁরটি বলে দিয়েছেন — এবং বলেছেন উত্তম পুরুষে, নিজের জবানে।",
        },
        {
          en: "The commentators are careful with the word worship. 'Ibadah in their usage is not ritual alone but the whole posture of a life — obedience, love, humility, gratitude, and the rituals that carry them. The prayer five times a day is worship; so, when done for Allah and within His bounds, are honest work, kept promises and kindness. The verse does not shrink life into the mosque; it stretches the mosque's meaning over life.",
          bn: "ইবাদত শব্দটি নিয়ে মুফাসসিরগণ সতর্ক। তাঁদের ব্যবহারে 'ইবাদাহ কেবল আনুষ্ঠানিকতা নয়, বরং একটি জীবনের সামগ্রিক ভঙ্গি — আনুগত্য, ভালোবাসা, বিনয়, কৃতজ্ঞতা, আর সেগুলো বহনকারী আনুষ্ঠানিক আমল। দিনে পাঁচবারের নামায ইবাদত; তেমনি — আল্লাহর জন্য ও তাঁর সীমার ভেতরে করা হলে — সৎ কাজ, রক্ষা করা প্রতিশ্রুতি আর সদয়তাও ইবাদত। আয়াতটি জীবনকে মসজিদে সংকুচিত করে না; মসজিদের অর্থকে জীবনের উপর প্রসারিত করে।",
        },
      ],
    },
    {
      h: { en: "What He Does Not Need", bn: "তাঁর যা প্রয়োজন নেই" },
      p: [
        {
          en: "The next verses close a misunderstanding before it can form. 51:57 says: I seek no provision from them, nor do I want them to feed Me. And 51:58 answers: indeed Allah is ar-Razzaq, the Provider, possessor of firm strength. Worship adds nothing to Allah, and its absence takes nothing from Him. The arrangement is the reverse of every human hierarchy: the One who is served is the One who provides, and the servants are the only beneficiaries of their service.",
          bn: "পরের আয়াতগুলো একটি ভুল বোঝাবুঝি তৈরি হওয়ার আগেই তা বন্ধ করে দেয়। 51:57 বলে: আমি তাদের কাছে কোনো রিযিক চাই না, আর চাই না যে তারা আমাকে খাওয়াবে। আর 51:58 জবাব দেয়: নিশ্চয়ই আল্লাহই আর-রাযযাক — মহান রিযিকদাতা, প্রবল শক্তির অধিকারী। ইবাদত আল্লাহর কিছুই বাড়ায় না, তার অনুপস্থিতিও তাঁর কিছু কমায় না। বিন্যাসটি প্রতিটি মানবীয় স্তরবিন্যাসের উল্টো: যাঁর সেবা করা হয় তিনিই রিযিক দেন, আর সেবার একমাত্র উপকারভোগী সেবকরাই।",
        },
        {
          en: "As-Sa'di draws the tender inversion out of the sequence: He created them to worship Him, and then He undertakes to provide for them while they do it. The servant's job description does not include supplying his own existence. This is why the surah swore earlier, in 51:22-23, that your provision is in heaven, and that this is as true as your own speech. Worship performed in a panic about sustenance has misread both verses at once.",
          bn: "আস-সা'দী এই ক্রম থেকে কোমল উল্টোযাত্রাটি টেনে বের করেন: তিনি তাদের সৃষ্টি করেছেন তাঁর ইবাদতের জন্য, আর তারা তা করতে থাকা অবস্থায় তাদের রিযিকের দায়িত্ব তিনিই নিয়েছেন। বান্দার কাজের বিবরণে নিজের অস্তিত্বের জোগান দেওয়া নেই। এ কারণেই সূরাটি আগে, 51:22-23 আয়াতে, শপথ করেছিল — তোমাদের রিযিক আসমানে, আর এ কথা তেমনই সত্য যেমন সত্য তোমাদের নিজেদের কথা বলা। রিযিকের দুশ্চিন্তায় আতঙ্কিত হয়ে করা ইবাদত দুটি আয়াতকেই একসাথে ভুল পড়েছে।",
        },
      ],
    },
    {
      h: { en: "Worship as a Path", bn: "পথ হিসেবে ইবাদত" },
      p: [
        {
          en: "Other verses frame the same purpose from other angles. 2:21 calls mankind to worship the Lord who created them and those before them, so that they may attain taqwa. 36:61 recalls the covenant: worship Me — this is a straight path. Purpose and path are the same thing seen twice: worship is what we were made for and also the road that keeps a life from wandering. A thing worked against its design suffers for it, and the verse lets us name why a life without worship feels unanchored.",
          bn: "অন্য আয়াতগুলো একই উদ্দেশ্যকে অন্য কোণ থেকে ফ্রেমে বাঁধে। 2:21 মানুষকে ডাকে সেই রবের ইবাদতে, যিনি তাদের ও তাদের পূর্ববর্তীদের সৃষ্টি করেছেন — যেন তারা তাকওয়া অর্জন করে। 36:61 অঙ্গীকারটি মনে করিয়ে দেয়: আমার ইবাদত করো — এটিই সরল পথ। উদ্দেশ্য আর পথ আসলে একই জিনিস দুবার দেখা: ইবাদত সেটিই যার জন্য আমরা নির্মিত, আবার সেই রাস্তাও যা একটি জীবনকে পথ হারানো থেকে বাঁচায়। কোনো জিনিস তার নকশার বিরুদ্ধে খাটালে সে-ই ভোগে; আর আয়াতটি আমাদের সেই কারণের নাম দিতে দেয় — ইবাদতহীন জীবন কেন নোঙরহীন লাগে।",
        },
      ],
    },
    {
      h: { en: "Intention Widens the Gate", bn: "নিয়ত দরজা প্রশস্ত করে" },
      p: [
        {
          en: "Al-Bukhari records the Prophet's ﷺ words: actions are only by intentions, and every person has only what he intended. Read beside 51:56, the hadith widens the gate of worship: the same hours of work, study or child-raising can be folded into the purpose of creation when they are done for Allah and within His limits. But the scholars keep the order straight — intention ennobles the permitted; it does not replace the prescribed. No sincere career substitutes for the prayer.",
          bn: "বুখারী নবী ﷺ-এর বাণী লিপিবদ্ধ করেন: আমল তো নিয়ত দিয়েই, আর প্রত্যেকে তা-ই পায় যার সে নিয়ত করেছে। 51:56 আয়াতের পাশে রেখে পড়লে হাদীসটি ইবাদতের দরজা প্রশস্ত করে: কাজ, পড়াশোনা বা সন্তান লালনের একই ঘণ্টাগুলো সৃষ্টির উদ্দেশ্যের ভেতরে ভাঁজ হয়ে ঢুকে যেতে পারে — যখন তা আল্লাহর জন্য এবং তাঁর সীমার ভেতরে করা হয়। কিন্তু আলিমগণ ক্রমটি সোজা রাখেন — নিয়ত বৈধকে মহিমান্বিত করে; নির্ধারিত ফরযের বিকল্প হয় না। কোনো আন্তরিক পেশাই নামাযের জায়গা নেয় না।",
        },
      ],
    },
    {
      h: { en: "Folding the Day Back", bn: "দিনটিকে উদ্দেশ্যে ফেরানো" },
      p: [
        {
          en: "The lived form of these two verses is a pair of habits. First, receive reminders without offense: when a verse, a sermon or a friend repeats what you already know, 51:55 has answered the objection in advance — benefit was promised precisely to those who know. Second, run the day backward through 51:56 each night: which hours folded into the purpose, and which ran loose beside it. Not to manufacture guilt, but to aim tomorrow.",
          bn: "এই দুই আয়াতের যাপিত রূপ এক জোড়া অভ্যাস। প্রথমত, স্মরণিকা গ্রহণ করুন অসন্তুষ্ট না হয়ে: কোনো আয়াত, খুতবা বা বন্ধু যখন আপনার জানা কথাই আবার বলে, 51:55 আপত্তিটির জবাব আগেই দিয়ে রেখেছে — উপকারের প্রতিশ্রুতি তো তাদের জন্যই যারা জানে। দ্বিতীয়ত, প্রতি রাতে দিনটিকে 51:56 আয়াতের ভেতর দিয়ে উল্টো চালিয়ে দেখুন: কোন ঘণ্টাগুলো উদ্দেশ্যের ভাঁজে ঢুকল, আর কোনগুলো তার পাশে আলগা হয়ে গড়াল। অপরাধবোধ বানানোর জন্য নয়, আগামীকালের নিশানা ঠিক করার জন্য।",
        },
        {
          en: "The verse also quietly reassigns worth. If the purpose of existence is worship, then the scale of a life is not output, audience or accumulation, but the degree to which it answered its Maker. That measure is available equally to the famous and the unknown, the strong and the ill. Whoever worships has hit the target of their creation, whatever else the world records; whoever does not has missed it, whatever else the world applauds.",
          bn: "আয়াতটি নীরবে মূল্যের হিসাবও নতুন করে বসায়। অস্তিত্বের উদ্দেশ্য যদি ইবাদত হয়, তবে একটি জীবনের মাপকাঠি তার উৎপাদন, দর্শক বা সঞ্চয় নয়, বরং সে তার নির্মাতাকে কতটা সাড়া দিল সেটাই। এই মাপকাঠি বিখ্যাত ও অখ্যাত, সবল ও অসুস্থ — সবার জন্য সমানভাবে খোলা। যে ইবাদত করে সে তার সৃষ্টির নিশানায় লেগেছে — দুনিয়া আর যা-ই লিখুক; আর যে করে না সে তা ফসকেছে — দুনিয়া আর যত করতালিই দিক।",
        },
      ],
    },
  ],
},
'57:22-23': {
  sections: [
    {
      h: { en: "Where It Falls in al-Hadid", bn: "আল-হাদীদে এর অবস্থান" },
      p: [
        {
          en: "The passage lands after two verses that reset the reader's values. 57:20 dismantles worldly life piece by piece — play, diversion, adornment, mutual boasting, rivalry in wealth and children — and compares it to rain whose growth delights, then dries and crumbles. 57:21 turns the freed energy forward: race to forgiveness from your Lord and a Garden whose width is like the width of heaven and earth. Then 57:22-23 supply what racing hearts need most: the settled knowledge that nothing striking them along the way is random.",
          bn: "অনুচ্ছেদটি আসে এমন দুটি আয়াতের পরে, যা পাঠকের মূল্যবোধ নতুন করে সাজায়। 57:20 দুনিয়ার জীবনকে টুকরো টুকরো করে খুলে দেখায় — খেলা, কৌতুক, সাজসজ্জা, পারস্পরিক অহংকার, ধন-সন্তানে প্রতিযোগিতা — আর তুলনা করে সেই বৃষ্টির সাথে, যার ফলানো ফসল মুগ্ধ করে, তারপর শুকিয়ে চূর্ণ হয়ে যায়। 57:21 মুক্ত হওয়া শক্তিটিকে সামনে ঘুরিয়ে দেয়: দৌড়াও তোমাদের রবের ক্ষমার দিকে এবং এমন জান্নাতের দিকে, যার বিস্তার আসমান-যমীনের বিস্তারের মতো। তারপর 57:22-23 জোগায় দৌড়ন্ত অন্তরের সবচেয়ে দরকারি জিনিসটি: এই থিতু জ্ঞান যে, পথে তাদের উপর যা-ই আঘাত হানুক, তার কিছুই এলোমেলো নয়।",
        },
      ],
    },
    {
      h: { en: "Written Before Created", bn: "সৃষ্টির আগেই লিখিত" },
      p: [
        {
          en: "No misfortune strikes in the earth or in yourselves except that it is in a Book before We bring it into being — indeed that is easy for Allah. The Book, the commentators say, is al-Lawh al-Mahfuz, the Preserved Tablet. Musibah covers the whole range: drought and loss in the earth, illness and grief in ourselves. The clause min qabli an nabra'aha — before We bring it into being — closes every gap in time: the record precedes the event, always.",
          bn: "যমীনে বা তোমাদের নিজেদের মধ্যে এমন কোনো মুসীবত আসে না, যা আমরা ঘটানোর আগেই এক কিতাবে নেই — নিশ্চয়ই তা আল্লাহর জন্য সহজ। মুফাসসিরগণ বলেন, এই কিতাব হলো আল-লাওহুল মাহফূয — সংরক্ষিত ফলক। মুসীবত শব্দটি পুরো পরিসর ঢেকে নেয়: যমীনে খরা ও ক্ষয়ক্ষতি, আমাদের নিজেদের মধ্যে অসুখ ও শোক। মিন কাবলি আন নাবরাআহা — আমরা তা ঘটানোর আগেই — এই বাক্যাংশ সময়ের প্রতিটি ফাঁক বন্ধ করে দেয়: লিপি ঘটনার আগে থাকে, সবসময়।",
        },
        {
          en: "Muslim records from Abdullah ibn Amr (RA) that the Prophet ﷺ said Allah wrote the decrees of creation fifty thousand years before He created the heavens and the earth. The verse adds its own note so that the scale does not stagger us: that is easy for Allah. What is unthinkable for us — a complete record preceding a universe — is described with the word easy, the same ease with which He sustains everything He wrote.",
          bn: "মুসলিম আবদুল্লাহ ইবনে আমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ আসমান-যমীন সৃষ্টির পঞ্চাশ হাজার বছর আগে সৃষ্টিজগতের তাকদির লিখে রেখেছেন। আয়াতটি নিজেই একটি টীকা যোগ করে, যেন এই বিশালতা আমাদের টলিয়ে না দেয়: তা আল্লাহর জন্য সহজ। যা আমাদের কাছে অচিন্তনীয় — মহাবিশ্বের আগে থাকা এক সম্পূর্ণ নথি — তাকে বর্ণনা করা হয়েছে সহজ শব্দে; সেই একই সহজতায় তিনি তাঁর লেখা সবকিছু ধারণ করে রাখেন।",
        },
      ],
    },
    {
      h: { en: "The Stated Purpose", bn: "ঘোষিত উদ্দেশ্য" },
      p: [
        {
          en: "57:23 is rare in stating exactly why we were told: so that you not grieve over what escapes you, nor exult over what He has given you. The knowledge of the decree is given for emotional repair before theological debate. What passed you by was never going to reach you by another route; what reached you was never going to miss. Held firmly, that fact drains both the bitterness of loss and the arrogance of gain.",
          bn: "57:23 এই দিক থেকে বিরল যে, আমাদের কেন জানানো হলো তা স্পষ্ট করে বলে দেয়: যেন যা তোমাদের ফসকে যায় তার জন্য শোকে ভেঙে না পড়ো, আর তিনি যা দিয়েছেন তা নিয়ে উল্লাসে না মাতো। তাকদিরের জ্ঞান দেওয়া হয়েছে তাত্ত্বিক বিতর্কের আগে আবেগের মেরামতের জন্য। যা তোমাকে ফাঁকি দিয়ে গেছে তা অন্য পথে তোমার কাছে পৌঁছানোর ছিল না; যা তোমার কাছে পৌঁছেছে তা ফসকানোর ছিল না। এই সত্য শক্ত করে ধরলে ক্ষতির তিক্ততা আর লাভের অহং — দুটোই নিঃশেষ হয়ে আসে।",
        },
        {
          en: "The commentators are precise about what is negated. Not sadness itself — the Prophet ﷺ wept at the death of his son Ibrahim, saying the eye weeps and the heart grieves, and we say only what pleases our Lord, as al-Bukhari records — but asa, the crushing grief that protests the decree. Not gladness itself, but the exulting that forgets the Giver, which is why the verse ends: and Allah does not love every mukhtal fakhur, every self-conceited boaster. The line between feeling and sin runs through the heart's verdict on the decree.",
          bn: "কী নাকচ হয়েছে সে বিষয়ে মুফাসসিরগণ নির্ভুল। দুঃখবোধ নিজে নয় — নবী ﷺ তাঁর পুত্র ইবরাহীমের মৃত্যুতে কেঁদেছিলেন এবং বলেছিলেন, চোখ অশ্রু ঝরায়, হৃদয় ব্যথিত হয়, আর আমরা কেবল তা-ই বলি যা আমাদের রবকে সন্তুষ্ট করে — যেমন বুখারী বর্ণনা করেন — বরং নাকচ হয়েছে আসা: সেই চূর্ণকারী শোক, যা তাকদিরের প্রতিবাদ করে। আনন্দও নিজে নয়, বরং সেই উল্লাস যা দাতাকে ভুলে যায় — এজন্যই আয়াত শেষ হয়: আর আল্লাহ কোনো মুখতাল ফাখূরকে — আত্মম্ভরী দাম্ভিককে — ভালোবাসেন না। অনুভূতি আর গুনাহের সীমারেখা চলে গেছে তাকদির সম্পর্কে অন্তরের রায়ের ভেতর দিয়ে।",
        },
      ],
    },
    {
      h: { en: "The Believer's Even Keel", bn: "মুমিনের ভারসাম্য" },
      p: [
        {
          en: "The same teaching runs across the Quran. 64:11 promises: no misfortune strikes except by Allah's permission, and whoever believes in Allah, He guides his heart. 9:51 puts the sentence in the believers' own mouths: nothing will befall us except what Allah has written for us; He is our Protector, and upon Allah let the believers rely. And 2:155-156 announce testing in advance and teach the response: indeed we belong to Allah, and indeed to Him we return.",
          bn: "একই শিক্ষা কুরআনজুড়ে প্রবাহিত। 64:11 প্রতিশ্রুতি দেয়: আল্লাহর অনুমতি ছাড়া কোনো মুসীবত আসে না, আর যে আল্লাহর প্রতি ঈমান আনে, তিনি তার অন্তরকে পথ দেখান। 9:51 বাক্যটি মুমিনদের নিজেদের মুখে বসিয়ে দেয়: আল্লাহ আমাদের জন্য যা লিখে রেখেছেন তা ছাড়া কিছুই আমাদের উপর আসবে না; তিনিই আমাদের অভিভাবক, আর আল্লাহর উপরেই মুমিনরা ভরসা করুক। আর 2:155-156 পরীক্ষার কথা আগেই ঘোষণা করে এবং জবাবটিও শিখিয়ে দেয়: নিশ্চয়ই আমরা আল্লাহরই, আর নিশ্চয়ই তাঁর কাছেই আমরা ফিরে যাব।",
        },
        {
          en: "Muslim records from Suhayb (RA) the summary: wondrous is the affair of the believer, for all of his affair is good, and that belongs to no one but the believer — if ease reaches him he is grateful, and that is good for him; and if harm reaches him he is patient, and that is good for him. The hadith is 57:22-23 turned into a biography: every event arrives pre-sorted into an occasion for gratitude or for patience.",
          bn: "মুসলিম সুহাইব (রাঃ) থেকে সারকথাটি বর্ণনা করেন: মুমিনের ব্যাপারটাই আশ্চর্যের — তার সব ব্যাপারই কল্যাণের, আর এ কেবল মুমিনেরই প্রাপ্য: স্বাচ্ছন্দ্য এলে সে শোকর করে, তা তার জন্য কল্যাণ; আর ক্ষতি পৌঁছালে সে সবর করে, তাও তার জন্য কল্যাণ। হাদীসটি যেন 57:22-23 আয়াতেরই জীবনী-রূপ: প্রতিটি ঘটনা আগে থেকেই বাছাই হয়ে আসে — হয় শোকরের উপলক্ষ, নয় সবরের।",
        },
      ],
    },
    {
      h: { en: "What It Does Not Teach", bn: "যা এটি শেখায় না" },
      p: [
        {
          en: "The decree is never an excuse before the event or a license after it. The believers still race, as 57:21 commands; they still take their means — medicine, locks, planning, honest effort — because the writing does not cancel the means; it runs through them. What the verses remove is the torment of the alternative history: the endless if-only replaying of a loss. The record was complete before we were; our task was always the response, not the script.",
          bn: "তাকদির কখনো ঘটনার আগের অজুহাত নয়, পরের ছাড়পত্রও নয়। মুমিনরা তবুও দৌড়ায়, যেমন 57:21 নির্দেশ দেয়; তারা তবুও উপায়-উপকরণ গ্রহণ করে — ওষুধ, তালা, পরিকল্পনা, সৎ পরিশ্রম — কারণ লিপি উপায়কে বাতিল করে না; বরং উপায়ের ভেতর দিয়েই চলে। আয়াতগুলো যা সরিয়ে দেয় তা হলো বিকল্প ইতিহাসের যন্ত্রণা: কোনো ক্ষতিকে ঘিরে সেই অন্তহীন যদি-শুধু-এমন-হতো চর্চা। নথি সম্পূর্ণ হয়ে গিয়েছিল আমাদের অস্তিত্বেরও আগে; আমাদের কাজ বরাবরই ছিল সাড়াটুকু, চিত্রনাট্য নয়।",
        },
      ],
    },
    {
      h: { en: "Carrying the Verse", bn: "আয়াতটি বহন করা" },
      p: [
        {
          en: "Practically, the verse is for two recurring moments. At loss: name the loss honestly, grieve as a human being, and refuse the added suffering of what could have been — per 57:22 it could not have been. At gain: enjoy, give thanks, and refuse the strut — the gain was given, per 57:23, not generated. A believer who handles both moments this way becomes strangely steady company: neither crushed by diagnoses, markets and departures, nor inflated by success. That steadiness is the verse, lived.",
          bn: "বাস্তবে আয়াতটি দুটি ফিরে-আসা মুহূর্তের জন্য। ক্ষতির মুহূর্তে: ক্ষতিটিকে সৎভাবে নাম দিন, মানুষ হিসেবে শোক করুন, আর যা-হতে-পারত-এর বাড়তি যন্ত্রণা প্রত্যাখ্যান করুন — তা হওয়ার ছিল না, 57:22 অনুযায়ী। লাভের মুহূর্তে: উপভোগ করুন, শোকর করুন, আর দম্ভের চাল প্রত্যাখ্যান করুন — লাভটি দেওয়া হয়েছে, 57:23 অনুযায়ী, নিজে বানানো নয়। যে মুমিন দুটি মুহূর্তই এভাবে সামলায়, সে অদ্ভুত রকমের স্থির এক সঙ্গী হয়ে ওঠে: রোগনির্ণয়, বাজার আর বিদায় তাকে চূর্ণ করে না, সাফল্যও তাকে ফোলায় না। সেই স্থিরতাই আয়াতটির যাপিত রূপ।",
        },
      ],
    },
  ],
},
'59:18-19': {
  sections: [
    {
      h: { en: "Framed by Taqwa", bn: "তাকওয়ায় বাঁধানো" },
      p: [
        {
          en: "59:18 issues its command twice, wrapping the middle clause like a frame: O you who believe, fear Allah — and let every soul look to what it has sent ahead for tomorrow — and fear Allah; indeed Allah is Aware of what you do. The commentators note the repetition: taqwa opens the audit and taqwa closes it, because self-examination begun without fear of Allah becomes self-congratulation, and examination that ends without it becomes despair. The verse closes by naming Khabir, the All-Aware, whose records never miss.",
          bn: "59:18 তার নির্দেশ দুবার জারি করে, মাঝের বাক্যাংশটিকে ফ্রেমের মতো ঘিরে: হে ঈমানদারগণ, আল্লাহকে ভয় করো — আর প্রতিটি প্রাণ দেখুক আগামীকালের জন্য সে কী পাঠিয়েছে — এবং আল্লাহকে ভয় করো; নিশ্চয়ই তোমরা যা করো আল্লাহ সে সম্পর্কে সম্যক অবগত। মুফাসসিরগণ এই পুনরাবৃত্তি লক্ষ করেন: তাকওয়া হিসাবটি খোলে আর তাকওয়াই তা বন্ধ করে, কারণ আল্লাহভীতি ছাড়া শুরু করা আত্মপরীক্ষা আত্মপ্রশংসায় গড়ায়, আর যে পরীক্ষা তাকওয়া ছাড়া শেষ হয় তা গড়ায় হতাশায়। আয়াতটি শেষ হয় খাবীর নাম নিয়ে — সম্যক অবগত, যাঁর নথি কখনো কিছু হারায় না।",
        },
        {
          en: "Tomorrow, ghad, is the Day of Resurrection. The mufassirun pause on the choice of word: a day that could be called distant is called tomorrow, both for its certainty and for its nearness — everything that is coming is near. The soul is told to look at what it has sent ahead, ma qaddamat, the way a merchant checks what he has already shipped to a market he is traveling toward. The deeds are not behind us in the past; they are ahead of us, waiting.",
          bn: "আগামীকাল — গাদ — হলো কিয়ামতের দিন। মুফাসসিরগণ শব্দচয়নে থামেন: যে দিনকে দূরের বলা যেত, তাকে বলা হয়েছে আগামীকাল — তার সুনিশ্চয়তার জন্য, নৈকট্যের জন্যও — যা আসছেই তা তো নিকটেই। প্রাণকে বলা হয়েছে সে যা আগে পাঠিয়েছে — মা কাদ্দামাত — তা দেখতে, যেভাবে এক বণিক যাচাই করে সে কোন মালামাল আগেই সেই বাজারে পাঠিয়ে দিয়েছে, যেদিকে সে নিজে রওনা হয়েছে। আমলগুলো আমাদের পেছনে অতীতে পড়ে নেই; সেগুলো আমাদের সামনে, অপেক্ষায়।",
        },
      ],
    },
    {
      h: { en: "The Audit Is Singular", bn: "হিসাবটি একার" },
      p: [
        {
          en: "Wal-tanzur nafsun — let a soul look. The subject is an indefinite singular — nafsun, a soul: each soul examines its own ledger, not its neighbour's. The scholars built the discipline of muhasabah, self-reckoning, on this verse: reviewing the record while it can still be amended, repenting from what shames, and sending better ahead. The examination the verse commands is the one we most avoid — we audit everyone else fluently and grant ourselves extensions.",
          bn: "ওয়াল-তানযুর নাফসুন — একটি প্রাণ দেখুক। কর্তা এখানে অনির্দিষ্ট এক বচন — নাফসুন, একটি প্রাণ: প্রতিটি প্রাণ পরীক্ষা করবে নিজের খাতা, প্রতিবেশীরটা নয়। আলিমগণ এই আয়াতের উপরেই মুহাসাবার — আত্মসমীক্ষার — অনুশাসন গড়ে তুলেছেন: নথি সংশোধনযোগ্য থাকতে থাকতেই তা পর্যালোচনা করা, যা লজ্জিত করে তা থেকে তাওবা করা, আর সামনে আরও ভালো কিছু পাঠানো। আয়াত যে পরীক্ষার নির্দেশ দেয়, সেটিই আমরা সবচেয়ে বেশি এড়িয়ে চলি — অন্য সবার হিসাব আমরা সাবলীলভাবে নিই, আর নিজেদের বেলায় সময় বাড়িয়ে যাই।",
        },
        {
          en: "Qaddamat is past tense: the soul looks at what it has already sent, not at what it intends. The commentators contrast the two ledgers we keep — the record of intentions, always flattering, and the record of dispatched deeds, often thin. The verse directs the eye to the second. Tomorrow will be furnished only by what actually left the warehouse: the prayer prayed, the wealth given, the wrong repaired, the word of truth said.",
          bn: "কাদ্দামাত অতীত কালের ক্রিয়া: প্রাণ দেখে সে ইতিমধ্যে যা পাঠিয়েছে, যা পাঠানোর ইচ্ছা রাখে তা নয়। মুফাসসিরগণ আমাদের রাখা দুটি খাতার তুলনা টানেন — নিয়তের খাতা, যা সবসময় তোষামুদে; আর প্রেরিত আমলের খাতা, যা প্রায়ই পাতলা। আয়াতটি চোখ ফেরায় দ্বিতীয়টির দিকে। আগামীকাল সাজবে কেবল তা দিয়েই, যা সত্যি সত্যি গুদাম ছেড়ে বেরিয়েছে: পড়া নামায, দেওয়া সম্পদ, শোধরানো অন্যায়, বলা সত্য কথা।",
        },
      ],
    },
    {
      h: { en: "Forgetting and Being Forgotten", bn: "ভুলে যাওয়া ও বিস্মৃত হওয়া" },
      p: [
        {
          en: "59:19 gives the warning its depth: and do not be like those who forgot Allah, so He made them forget their own selves — those are the defiantly disobedient. The punishment fits the crime with terrible precision. The commentators unfold it: whoever forgets Allah's rights is left to forget his soul's actual interests — he feeds the body and starves what will outlive it, grooms his image and neglects his record, remembers everything except why he exists.",
          bn: "59:19 সতর্কবার্তাটিকে তার গভীরতা দেয়: আর তাদের মতো হয়ো না যারা আল্লাহকে ভুলে গিয়েছিল, ফলে তিনি তাদের নিজেদের সত্তাকেই ভুলিয়ে দিয়েছেন — ওরাই তো ফাসিক। শাস্তিটি অপরাধের সাথে মেলে ভয়ংকর নির্ভুলতায়। মুফাসসিরগণ তা খুলে দেখান: যে আল্লাহর হক ভুলে যায়, তাকে ছেড়ে দেওয়া হয় নিজের প্রাণের প্রকৃত স্বার্থ ভুলে থাকতে — সে শরীরকে খাওয়ায় আর যা শরীরকে ছাড়িয়ে বাঁচবে তাকে উপোস রাখে, নিজের ভাবমূর্তি সাজায় আর নিজের আমলনামা অবহেলা করে, সবকিছু মনে রাখে — শুধু সে কেন আছে সেটা ছাড়া।",
        },
        {
          en: "The same divine response appears in 9:67, where the hypocrites forgot Allah, so He forgot them — left them out of His grace. Self-forgetting is therefore not a private eccentricity but a sentence; the person estranged from Allah becomes a stranger to himself. The verse implies the converse, and the commentators state it: whoever remembers Allah is granted remembrance of his own self — clarity about what he is, what he needs and where he is going.",
          bn: "একই ঐশী প্রতিক্রিয়া দেখা যায় 9:67 আয়াতে, যেখানে মুনাফিকরা আল্লাহকে ভুলে গিয়েছিল, তাই তিনিও তাদের ভুলে গেছেন — তাঁর অনুগ্রহের বাইরে রেখে দিয়েছেন। আত্মবিস্মৃতি তাই কোনো ব্যক্তিগত খেয়াল নয়, বরং একটি দণ্ডাদেশ; আল্লাহ থেকে বিচ্ছিন্ন মানুষ নিজের কাছেই অপরিচিত হয়ে যায়। আয়াতটি এর বিপরীতটাও ইঙ্গিত করে, আর মুফাসসিরগণ তা স্পষ্ট করে বলেন: যে আল্লাহকে স্মরণ করে তাকে নিজের সত্তার স্মরণ দান করা হয় — সে কী, তার কী প্রয়োজন, আর সে কোথায় চলেছে — এই স্বচ্ছতা।",
        },
      ],
    },
    {
      h: { en: "How the Surah Ends", bn: "সূরাটি যেভাবে শেষ হয়" },
      p: [
        {
          en: "The verses that follow raise the stakes and then the gaze. 59:20 declares that the companions of the Fire and the companions of the Garden are not equal — the companions of the Garden are the winners. 59:21 says that if this Quran had been sent down upon a mountain, you would have seen it humbled and split apart from the fear of Allah. And 59:22-24 close the surah with a cascade of His names. The audit of 59:18 ends by contemplating the One before whom it will be read.",
          bn: "পরের আয়াতগুলো প্রথমে বাজি বাড়ায়, তারপর দৃষ্টি উপরে তোলে। 59:20 ঘোষণা করে, জাহান্নামের অধিবাসীরা আর জান্নাতের অধিবাসীরা সমান নয় — জান্নাতের অধিবাসীরাই সফলকাম। 59:21 বলে, এই কুরআন কোনো পাহাড়ের উপর নাযিল করা হলে তুমি দেখতে তা আল্লাহর ভয়ে বিনীত হয়ে বিদীর্ণ হয়ে গেছে। আর 59:22-24 সূরাটি শেষ করে তাঁর নামের এক ঝরনাধারায়। 59:18 আয়াতের হিসাবটি শেষ হয় তাঁকে ধ্যান করে, যাঁর সামনে সেই হিসাব পড়া হবে।",
        },
      ],
    },
    {
      h: { en: "Practicing the Look", bn: "দেখার অনুশীলন" },
      p: [
        {
          en: "The lived form is a fixed, honest review — many scholars recommended it nightly: what did today send ahead? Not a mood check but an inventory: the prayers and their quality, the money and its routes, the tongue and its output. Then triage while amendment is still possible — repentance for one column, gratitude for the other, and one concrete deed dispatched forward before sleep. Written or mental, brief or long, the point is that it happens and that it is yours.",
          bn: "এর যাপিত রূপ একটি নির্দিষ্ট, সৎ পর্যালোচনা — বহু আলিম রাতে করার পরামর্শ দিয়েছেন: আজকের দিনটি সামনে কী পাঠাল? মেজাজ যাচাই নয়, মালের হিসাব: নামাযগুলো ও তাদের মান, টাকা ও তার চলার পথ, জিহ্বা ও তার উৎপাদন। তারপর সংশোধন এখনো সম্ভব থাকতে থাকতেই বাছাই — এক ঘরের জন্য তাওবা, অন্যটির জন্য শোকর, আর ঘুমের আগে সামনে পাঠিয়ে দেওয়া অন্তত একটি বাস্তব আমল। লিখে হোক বা মনে মনে, ছোট হোক বা দীর্ঘ — আসল কথা হলো তা ঘটবে, এবং তা হবে আপনার নিজের।",
        },
        {
          en: "The verse also supplies the test for drift. The person who cannot remember the last time they examined themselves has their answer already; the audit lapses exactly when it is most needed. And the frame holds the method: begin in taqwa, so the review happens before Allah and not before an imagined audience, and end in taqwa, so its failures drive you to His mercy rather than to despair. He is Khabir; the review only ever catches up to what He already knows.",
          bn: "আয়াতটি ভেসে যাওয়ার পরীক্ষাও জুগিয়ে দেয়। যে মানুষ মনে করতে পারে না শেষ কবে সে নিজেকে পরীক্ষা করেছিল, তার উত্তর তো পাওয়াই হয়ে গেছে; হিসাবটি ঠিক তখনই বন্ধ হয়ে থাকে, যখন তা সবচেয়ে জরুরি। আর ফ্রেমটিই পদ্ধতি ধরে রাখে: শুরু করুন তাকওয়া দিয়ে, যেন পর্যালোচনাটা হয় আল্লাহর সামনে, কোনো কল্পিত দর্শকের সামনে নয়; শেষও করুন তাকওয়া দিয়ে, যেন এর ব্যর্থতাগুলো আপনাকে হতাশায় নয়, তাঁর রহমতের দিকে ঠেলে দেয়। তিনি খাবীর; পর্যালোচনা বড়জোর তাঁর আগে থেকে জানা পর্যন্তই পৌঁছায়।",
        },
      ],
    },
  ],
},
'87:14-17': {
  sections: [
    {
      h: { en: "Success, Declared", bn: "সাফল্য ঘোষিত" },
      p: [
        {
          en: "Qad aflaha man tazakka — truly he has succeeded who purifies himself. The particle qad with the past tense announces the matter as settled: this person has already succeeded; the result is in. Falah is the Quran's word for genuine success — thriving, attaining, lasting — the same word the adhan calls to five times a day: hayya alal-falah. Surah al-A'la, which opens in 87:1 by commanding glorification of the name of the Lord Most High, here defines what winning actually is.",
          bn: "কাদ আফলাহা মান তাযাক্কা — নিশ্চিতই সে সফল হয়েছে, যে নিজেকে পবিত্র করেছে। অতীত কালের ক্রিয়ার সাথে কাদ শব্দটি বিষয়টিকে মীমাংসিত ঘোষণা করে: এই মানুষটি ইতিমধ্যেই সফল; ফলাফল এসে গেছে। ফালাহ হলো প্রকৃত সাফল্যের জন্য কুরআনের শব্দ — সমৃদ্ধ হওয়া, অর্জন করা, টিকে থাকা — সেই একই শব্দ, যার দিকে আযান দিনে পাঁচবার ডাকে: হাইয়া আলাল-ফালাহ। সূরা আল-আ'লা, যা 87:1 আয়াতে মহান সর্বোচ্চ রবের নামের তাসবীহর নির্দেশ দিয়ে শুরু হয়, এখানে সংজ্ঞা দেয় — জেতা আসলে কী।",
        },
      ],
    },
    {
      h: { en: "Three Verbs in Order", bn: "ক্রমে তিন ক্রিয়া" },
      p: [
        {
          en: "The definition has three verbs in sequence: purified himself, tazakka; remembered the name of his Lord, dhakara isma rabbihi; and prayed, fa-salla. The commentators read the order as instructive: cleansing comes first — from shirk, from sins, from the diseases of the heart — then remembrance fills the cleaned space, and prayer carries the remembrance into the limbs. The fa before salla binds prayer tightly to remembrance: the prayer meant here flows from a heart already turned.",
          bn: "সংজ্ঞাটিতে পরপর তিনটি ক্রিয়া: নিজেকে পবিত্র করল — তাযাক্কা; তার রবের নাম স্মরণ করল — যাকারা ইসমা রাব্বিহি; আর নামায পড়ল — ফাসাল্লা। মুফাসসিরগণ এই ক্রমকে শিক্ষণীয় হিসেবে পড়েন: আগে পরিশুদ্ধি — শিরক থেকে, গুনাহ থেকে, অন্তরের ব্যাধি থেকে — তারপর স্মরণ সেই পরিষ্কার জায়গাটি ভরে তোলে, আর নামায সেই স্মরণকে অঙ্গ-প্রত্যঙ্গে বয়ে নেয়। সাল্লার আগের ফা নামাযকে স্মরণের সাথে শক্ত করে বাঁধে: এখানে যে নামাযের কথা, তা এমন অন্তর থেকে প্রবাহিত হয় যা আগেই ফিরেছে।",
        },
        {
          en: "Some early commentators, as al-Qurtubi records, connected these verses to the charity given at the end of Ramadan and the Eid prayer that follows it — purification through sadaqat al-fitr, remembrance in the takbirs, then the prayer. The wording itself remains general, and the general reading stands: any purifying, any remembering, any praying enters the verse. The specific application shows how concretely the early generations read their Quran — they looked for days on the calendar where the three verbs lined up.",
          bn: "কিছু প্রাচীন মুফাসসির, যেমন আল-কুরতুবী লিপিবদ্ধ করেন, এই আয়াতগুলোকে যুক্ত করেছেন রমযানের শেষে দেওয়া দানের সাথে এবং তার পরের ঈদের নামাযের সাথে — সাদাকাতুল ফিতরের মাধ্যমে পরিশুদ্ধি, তাকবীরে স্মরণ, তারপর নামায। শব্দগুলো নিজে অবশ্য সাধারণই রয়ে গেছে, আর সাধারণ পাঠটিই বহাল: যেকোনো পবিত্রকরণ, যেকোনো স্মরণ, যেকোনো নামায আয়াতটিতে ঢোকে। নির্দিষ্ট প্রয়োগটি দেখায় প্রথম প্রজন্মগুলো তাদের কুরআন কতটা হাতে-কলমে পড়ত — তারা পঞ্জিকায় এমন দিন খুঁজত যেখানে তিনটি ক্রিয়া এক সারিতে দাঁড়ায়।",
        },
      ],
    },
    {
      h: { en: "The Honest Diagnosis", bn: "সৎ রোগনির্ণয়" },
      p: [
        {
          en: "Then the surah turns from definition to diagnosis: bal tu'thirun al-hayata ad-dunya — rather, you prefer the life of this world. The verb is athara, to prefer, to choose one thing over another; the charge is not that people use the world but that, choice after choice, they rank it first. The address is plural and undefended; the Quran states it as a plain fact about us. No argument is offered, because none is needed — our calendars and accounts testify.",
          bn: "তারপর সূরাটি সংজ্ঞা থেকে রোগনির্ণয়ে ফেরে: বাল তু'সিরূনাল-হায়াতাদ-দুনইয়া — বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও। ক্রিয়াটি আসারা — প্রাধান্য দেওয়া, এক জিনিসকে আরেকটির উপরে বেছে নেওয়া; অভিযোগটি এই নয় যে মানুষ দুনিয়া ব্যবহার করে, বরং এই যে, পছন্দের পর পছন্দে তারা একেই প্রথমে রাখে। সম্বোধন বহুবচনে, কোনো আত্মপক্ষ ছাড়া; কুরআন এটিকে আমাদের সম্পর্কে সরল সত্য হিসেবেই বলে। কোনো যুক্তি হাজির করা হয় না, কারণ দরকারও নেই — আমাদের সময়সূচি আর হিসাবের খাতাই সাক্ষ্য দেয়।",
        },
        {
          en: "The correction follows in the same breath: wal-akhiratu khayrun wa abqa — while the Hereafter is better and more lasting. Two comparatives, each aimed at one leg of the preference. We choose the world because it seems good: the Hereafter is better. We cling to it because it is here: the Hereafter lasts. 42:36 makes the same pairing — what is with Allah is better and more enduring for those who believe and rely upon their Lord.",
          bn: "সংশোধনটি আসে একই নিঃশ্বাসে: ওয়াল-আখিরাতু খাইরুন ওয়া আবকা — অথচ আখিরাত উত্তম ও অধিক স্থায়ী। দুটি তুলনাবাচক শব্দ, প্রতিটির নিশানা প্রাধান্যের এক-একটি পা। আমরা দুনিয়া বেছে নিই কারণ তা ভালো মনে হয়: আখিরাত উত্তম। আমরা তা আঁকড়ে ধরি কারণ তা হাতের কাছে: আখিরাত টিকে থাকে। 42:36 একই জোড় তৈরি করে — আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী, তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে।",
        },
      ],
    },
    {
      h: { en: "In the First Scriptures", bn: "প্রাচীন সহীফাসমূহে" },
      p: [
        {
          en: "The surah then discloses the age of this teaching: indeed this is in the former scriptures, the scriptures of Ibrahim (AS) and Musa (AS), as 87:18-19 declare. The commentators discuss what this points back to; the nearest passage is this very definition of success and diagnosis of preference. The claim is quietly enormous: the core spiritual arithmetic — purify, remember, pray, and do not trade the lasting for the immediate — was not new with the Quran. It is the oldest message there is, restated.",
          bn: "এরপর সূরাটি এই শিক্ষার বয়স প্রকাশ করে: নিশ্চয়ই এ কথা আছে পূর্ববর্তী সহীফাগুলোতে — ইবরাহীম (আঃ) ও মূসা (আঃ)-এর সহীফায় — 87:18-19। এই ইঙ্গিত কোন কথার দিকে, তা নিয়ে মুফাসসিরগণ আলোচনা করেন; নিকটতম অনুচ্ছেদটি হলো সাফল্যের এই সংজ্ঞা আর প্রাধান্যের এই রোগনির্ণয়ই। দাবিটি নীরবে বিশাল: মূল আধ্যাত্মিক পাটিগণিত — পবিত্র হও, স্মরণ করো, নামায পড়ো, আর স্থায়ীকে তাৎক্ষণিকের বিনিময়ে বেচে দিয়ো না — কুরআনের সাথে নতুন আসেনি। এ হলো প্রাচীনতম বার্তা, নতুন করে বলা।",
        },
      ],
    },
    {
      h: { en: "A Surah He Kept Close", bn: "যে সূরা তিনি কাছে রাখতেন" },
      p: [
        {
          en: "Muslim records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ used to recite Sabbih isma rabbika al-a'la and Hal ataka hadithul-ghashiyah in the two Eid prayers and in the Friday prayer, and when Eid and Friday fell on the same day he recited them both in both. The choice means the ummah's largest regular gatherings repeatedly heard success redefined. On the days most given to celebration and appearance, the congregation was told again what winning is: purification, remembrance, prayer.",
          bn: "মুসলিম নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ দুই ঈদের নামাযে ও জুমার নামাযে সাব্বিহিসমা রাব্বিকাল-আ'লা এবং হাল আতাকা হাদীসুল-গাশিয়াহ পড়তেন, আর ঈদ ও জুমা একই দিনে পড়লে দুটিতেই দুটিই পড়তেন। এই বাছাইয়ের মানে — উম্মাহর সবচেয়ে বড় নিয়মিত সমাবেশগুলো বারবার শুনেছে সাফল্যের নতুন সংজ্ঞা। যে দিনগুলো সবচেয়ে বেশি উদযাপন ও সাজসজ্জার, সেই দিনগুলোতেই জামাতকে আবার বলা হয়েছে জেতা কাকে বলে: পরিশুদ্ধি, স্মরণ, নামায।",
        },
      ],
    },
    {
      h: { en: "Running the Definition", bn: "সংজ্ঞাটি চালু করা" },
      p: [
        {
          en: "The three verbs convert directly into a day's architecture. Purify: keep tawbah current, and let charity clean what wealth accumulates. Remember: attach the name of your Lord to thresholds — waking, eating, leaving, returning. Pray: guard the five, and let them be the remembrance walking. Then use the diagnosis as a lens on small choices: in each trade-off between the immediate and the lasting, notice which way the hand reaches. The preference is corrected in increments, not in proclamations.",
          bn: "তিনটি ক্রিয়া সরাসরি একটি দিনের স্থাপত্যে রূপ নেয়। পবিত্র করুন: তাওবা হালনাগাদ রাখুন, আর সম্পদ যা জমায় দান তা পরিষ্কার করুক। স্মরণ করুন: আপনার রবের নাম চৌকাঠগুলোতে জুড়ে দিন — ঘুম ভাঙা, খাওয়া, বেরোনো, ফেরা। নামায পড়ুন: পাঁচ ওয়াক্ত পাহারা দিন, আর সেগুলোই হোক হেঁটে চলা স্মরণ। তারপর রোগনির্ণয়টিকে ছোট ছোট পছন্দের লেন্স বানান: তাৎক্ষণিক আর স্থায়ীর প্রতিটি দর-কষাকষিতে খেয়াল করুন হাত কোন দিকে বাড়ে। প্রাধান্যের সংশোধন হয় কিস্তিতে কিস্তিতে, ঘোষণায় নয়।",
        },
        {
          en: "The verse's tense is also its comfort. Success is declared already attained by whoever does these things — not deferred until wealth, recognition or ease arrive. A person of modest means who purifies, remembers and prays has succeeded, in the present tense, on the authority of the One who defines the term. What remains is the choice the surah names, made freshly each day, between the thing in the hand and the thing that endures.",
          bn: "আয়াতের কালই তার সান্ত্বনা। যে এই কাজগুলো করে, তার সাফল্য ইতিমধ্যে অর্জিত বলে ঘোষিত — সম্পদ, স্বীকৃতি বা স্বাচ্ছন্দ্য আসা পর্যন্ত মুলতবি নয়। সামান্য সামর্থ্যের যে মানুষ পবিত্র হয়, স্মরণ করে ও নামায পড়ে, সে সফল — বর্তমান কালে, সেই সত্তার কর্তৃত্বে যিনি শব্দটির সংজ্ঞা দেন। বাকি থাকে সূরাটির নাম-করা সেই পছন্দ, যা প্রতিদিন নতুন করে করতে হয় — হাতের জিনিস আর টিকে-থাকা জিনিসের মধ্যে।",
        },
      ],
    },
  ],
},
'93:3-5': {
  sections: [
    {
      h: { en: "When the Revelation Paused", bn: "যখন ওহী থেমে ছিল" },
      p: [
        {
          en: "Al-Bukhari records from Jundub ibn Sufyan (RA) that the Prophet ﷺ was unwell and did not stand in night prayer for a night or two; a woman came and said, O Muhammad, I hope that your shaytan has left you. Then Allah revealed the opening of this surah: by the morning brightness, and by the night when it grows still, your Lord has not forsaken you, nor does He hate. A taunt about abandonment was answered from above the seven heavens.",
          bn: "বুখারী জুনদুব ইবনে সুফইয়ান (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ অসুস্থ ছিলেন এবং এক-দুই রাত রাতের নামাযে দাঁড়াননি; এক নারী এসে বলল, হে মুহাম্মাদ, আশা করি তোমার শয়তান তোমাকে ছেড়ে গেছে। তখন আল্লাহ এই সূরার শুরুটা নাযিল করলেন: শপথ পূর্বাহ্নের আলোর, আর রাতের — যখন তা স্তব্ধ হয়, তোমার রব তোমাকে ছেড়ে যাননি, ঘৃণাও করেন না। পরিত্যাগের এক খোঁচার জবাব এলো সাত আসমানের উপর থেকে।",
        },
        {
          en: "The pause in revelation had weighed on him ﷺ before any taunt named it. The commentators read the surah as consolation shaped exactly to that weight: the gap in revelation felt like silence, and silence can be read as displeasure. The answer does not merely resume revelation; it addresses the fear itself, in the second person, with an oath sworn by Allah — the strongest register the language has — that the fear is false.",
          bn: "কোনো খোঁচা নাম দেওয়ার আগেই ওহীর বিরতি তাঁর ﷺ উপর ভারী হয়ে চেপেছিল। মুফাসসিরগণ সূরাটিকে পড়েন ঠিক সেই ভারের মাপে গড়া সান্ত্বনা হিসেবে: ওহীর ফাঁকটাকে নীরবতা মনে হচ্ছিল, আর নীরবতাকে অসন্তোষ বলে পড়ে ফেলা যায়। জবাবটি কেবল ওহী আবার চালু করে না; ভয়টিকেই সরাসরি সম্বোধন করে — মধ্যম পুরুষে, আল্লাহর করা শপথ দিয়ে — ভাষার সবচেয়ে জোরালো স্বরে — যে ভয়টি মিথ্যা।",
        },
      ],
    },
    {
      h: { en: "Oaths of Light and Stillness", bn: "আলো ও স্তব্ধতার শপথ" },
      p: [
        {
          en: "The surah opens with two oaths: wad-duha, by the forenoon brightness, and wal-layli idha saja, by the night when it grows still. The commentators hear the oaths already answering the complaint they introduce: day and night are both His arrangement, and the night's stillness is not the death of the sun. Brightness and quiet alternate by design. So too revelation's presence and its pause — the interval was rhythm, not rejection, and the same Lord governs both halves of it.",
          bn: "সূরাটি খোলে দুটি শপথে: ওয়াদ-দুহা — পূর্বাহ্নের আলোর শপথ, আর ওয়াল-লাইলি ইযা সাজা — রাতের শপথ, যখন তা স্তব্ধ হয়। মুফাসসিরগণ শোনেন, শপথ দুটি যে অভিযোগের ভূমিকা করছে তার জবাবও আগেই দিয়ে দিচ্ছে: দিন ও রাত দুটোই তাঁর বিন্যাস, আর রাতের স্তব্ধতা মানে সূর্যের মৃত্যু নয়। আলো আর নীরবতা নকশা অনুযায়ীই পালা বদল করে। তেমনি ওহীর উপস্থিতি ও তার বিরতিও — বিরতিটি ছিল ছন্দ, প্রত্যাখ্যান নয়; আর এর দুই অর্ধেরই নিয়ন্তা একই রব।",
        },
      ],
    },
    {
      h: { en: "Neither Left Nor Loathed", bn: "ছেড়েও যাননি, ঘৃণাও করেননি" },
      p: [
        {
          en: "Ma wadda'aka rabbuka wa ma qala — your Lord has not bidden you farewell, nor does He hate. Wada' is the parting word of someone departing; the verb rules out even a courteous leaving. Then the commentators point to a tenderness in the grammar: qala, He does not hate, arrives with its object unstated. The Quran declines to attach the word you to the verb of hatred even inside a negation. The sentence denies the hatred but will not even spell out its direction.",
          bn: "মা ওয়াদ্দা'আকা রাব্বুকা ওয়া মা কালা — তোমার রব তোমাকে বিদায় বলেননি, ঘৃণাও করেন না। ওয়াদা' হলো প্রস্থানকারীর বিদায়-সম্ভাষণ; ক্রিয়াটি এমনকি সৌজন্যের বিদায়ও নাকচ করে। তারপর মুফাসসিরগণ ব্যাকরণের এক কোমলতা দেখিয়ে দেন: কালা — তিনি ঘৃণা করেন না — আসে তার কর্ম অনুক্ত রেখে। কুরআন ঘৃণার ক্রিয়াপদের গায়ে তুমি শব্দটি জুড়তে অস্বীকার করে — এমনকি নেতিবাচক বাক্যের ভেতরেও। বাক্যটি ঘৃণাকে অস্বীকার করে, কিন্তু তার অভিমুখটুকুও উচ্চারণ করতে রাজি নয়।",
        },
      ],
    },
    {
      h: { en: "The Later Is Better", bn: "পরবর্তীটাই উত্তম" },
      p: [
        {
          en: "93:4 lifts the eyes forward: and the akhirah is better for you than the ula, the later than the earlier. The commentators record both readings and keep them: the Hereafter is better for him ﷺ than this world; and each later stage of his affair is better than what preceded it. Read either way, the sentence is a promise of trajectory, and his ﷺ biography honored it — from concealment to open call, from persecution in Makkah to Madinah, from a lone voice to a community.",
          bn: "93:4 দৃষ্টি সামনে তোলে: আর আখিরাত — অর্থাৎ পরবর্তীটি — তোমার জন্য ঊলা, অর্থাৎ পূর্ববর্তীটির চেয়ে উত্তম। মুফাসসিরগণ দুটি পাঠই লিপিবদ্ধ করেন এবং দুটিই রাখেন: আখিরাত তাঁর ﷺ জন্য দুনিয়ার চেয়ে উত্তম; আবার তাঁর কাজের প্রতিটি পরবর্তী পর্যায় পূর্ববর্তীটির চেয়ে উত্তম। যেভাবেই পড়া হোক, বাক্যটি এক গতিপথের প্রতিশ্রুতি, আর তাঁর ﷺ জীবনী তা পূর্ণ করেছে — গোপন দাওয়াত থেকে প্রকাশ্য আহ্বানে, মক্কার নিপীড়ন থেকে মদীনায়, একা এক কণ্ঠ থেকে এক উম্মাহয়।",
        },
        {
          en: "The promise also disciplines how a believer reads time. The earlier is not the standard the later must recover; the later is where the good is stored. That is the exact reverse of nostalgia, and it was said to a man ﷺ in his hardest years, before any worldly evidence supported it. Trusting a promised trajectory while the present argues against it is the surah's definition of hope.",
          bn: "প্রতিশ্রুতিটি মুমিনের সময়-পাঠকেও শৃঙ্খলায় আনে। পূর্ববর্তী সময়টা কোনো মানদণ্ড নয় যা পরবর্তীকে ফিরিয়ে আনতে হবে; কল্যাণ জমা আছে পরবর্তীটিতেই। এ হলো স্মৃতিকাতরতার হুবহু উল্টো, আর কথাটি বলা হয়েছিল এক মানুষকে ﷺ তাঁর কঠিনতম বছরগুলোতে — কোনো পার্থিব প্রমাণ তার পক্ষে দাঁড়ানোর আগেই। বর্তমান যখন বিপক্ষে যুক্তি দিচ্ছে তখনও প্রতিশ্রুত গতিপথে ভরসা রাখা — এটিই সূরাটির দেওয়া আশার সংজ্ঞা।",
        },
      ],
    },
    {
      h: { en: "Until You Are Pleased", bn: "যতক্ষণ না আপনি সন্তুষ্ট" },
      p: [
        {
          en: "93:5 seals it: and your Lord will surely give you, and you will be pleased. The verb is left unbounded — no object limits what will be given. The commentators include within it the victory of the religion in his lifetime, and in the Hereafter his standing, the Hawd, and his interceding for his ummah until he is content. The verse dares to make his ﷺ contentment the measure of the giving: He will keep giving until you are pleased.",
          bn: "93:5 সিলমোহর দেয়: আর অচিরেই তোমার রব তোমাকে দেবেন, আর তুমি সন্তুষ্ট হবে। ক্রিয়াটি অবাধ রাখা হয়েছে — কোনো কর্মপদ দানের সীমা টানে না। মুফাসসিরগণ এর মধ্যে রাখেন তাঁর জীবদ্দশায় দ্বীনের বিজয়, আর আখিরাতে তাঁর মর্যাদা, হাউয, এবং তাঁর উম্মতের জন্য তাঁর সুপারিশ — যতক্ষণ না তিনি তুষ্ট হন। আয়াতটি সাহস করে তাঁর ﷺ সন্তুষ্টিকেই দানের মাপকাঠি বানায়: তিনি দিতে থাকবেন, যতক্ষণ না তুমি সন্তুষ্ট হও।",
        },
        {
          en: "The structure of the three verses is a staircase. First the denial of abandonment, clearing the fear; then the comparative promise, better than before; then the open-ended gift, until contentment. Consolation in the Quran does not stop at saying that things are not as bad as they seem; it climbs to a promise better than what was asked. The surah then proves the pattern from his own past — and turns it outward.",
          bn: "তিন আয়াতের কাঠামো একটি সিঁড়ি। প্রথমে পরিত্যাগের অস্বীকার — ভয়টি সাফ করা; তারপর তুলনামূলক প্রতিশ্রুতি — আগের চেয়ে উত্তম; তারপর অবাধ দান — সন্তুষ্টি পর্যন্ত। কুরআনে সান্ত্বনা এই বলে থেমে যায় না যে, অবস্থা যতটা খারাপ দেখাচ্ছে ততটা নয়; তা উঠে যায় এমন প্রতিশ্রুতিতে, যা চাওয়ার চেয়েও উত্তম। সূরাটি এরপর প্যাটার্নটি প্রমাণ করে তাঁর নিজের অতীত থেকে — এবং তাকে বাইরের দিকে ঘুরিয়ে দেয়।",
        },
      ],
    },
    {
      h: { en: "The Verse for Dry Seasons", bn: "শুষ্ক মৌসুমের আয়াত" },
      p: [
        {
          en: "93:6-8 remind him ﷺ of three rescues already delivered: did He not find you an orphan and shelter you, wandering and guide you, poor and enrich you? And 93:9-11 convert the comfort into conduct: so do not oppress the orphan, do not repel the one who asks, and speak of the blessing of your Lord. The consoled become consolers; the pattern of past care is the argument for future care, and gratitude goes public.",
          bn: "93:6-8 তাঁকে ﷺ স্মরণ করিয়ে দেয় ইতিমধ্যে পৌঁছে দেওয়া তিনটি উদ্ধারের কথা: তিনি কি তোমাকে ইয়াতীম পাননি, তারপর আশ্রয় দেননি; পথের খোঁজে পাননি, তারপর পথ দেখাননি; নিঃস্ব পাননি, তারপর অভাবমুক্ত করেননি? আর 93:9-11 সান্ত্বনাটিকে আচরণে রূপান্তর করে: সুতরাং ইয়াতীমের প্রতি কঠোর হয়ো না, প্রার্থীকে ধমক দিয়ো না, আর তোমার রবের নিয়ামতের কথা বলো। সান্ত্বনাপ্রাপ্তরাই হয়ে ওঠে সান্ত্বনাদাতা; অতীত যত্নের প্যাটার্নই ভবিষ্যৎ যত্নের যুক্তি, আর কৃতজ্ঞতা প্রকাশ্যে আসে।",
        },
        {
          en: "For any believer in a stretch that feels like silence — prayers that feel unanswered, faith that feels flat — the surah offers its method, not only its occasion. Read your own history the way 93:6-8 reads his: name the rescues already delivered. Refuse the taunt, inward or outward, that quiet means rejection. And while waiting, do the three commands, for the orphan, the asker and the telling of blessings are available in every season, including the dry ones.",
          bn: "নীরবতার মতো লাগা কোনো পর্বে থাকা যেকোনো মুমিনের জন্য — দোয়া যেখানে জবাবহীন মনে হয়, ঈমান যেখানে নিস্তেজ লাগে — সূরাটি শুধু তার উপলক্ষ নয়, তার পদ্ধতিটাও দেয়। নিজের ইতিহাস পড়ুন যেভাবে 93:6-8 তাঁরটা পড়ে: ইতিমধ্যে পৌঁছে দেওয়া উদ্ধারগুলোর নাম নিন। ভেতরের হোক বা বাইরের — এই খোঁচা প্রত্যাখ্যান করুন যে, নীরবতা মানে প্রত্যাখ্যান। আর অপেক্ষার ফাঁকে তিনটি নির্দেশ পালন করুন — কারণ ইয়াতীম, প্রার্থী আর নিয়ামতের কথা বলা প্রতিটি মৌসুমেই হাতের কাছে, শুষ্ক মৌসুমগুলোতেও।",
        },
      ],
    },
  ],
},
'21:30': {
  sections: [
    {
      h: { en: "A Question for Deniers", bn: "অস্বীকারকারীদের প্রতি প্রশ্ন" },
      p: [
        {
          en: "The verse opens with a question aimed at a specific audience: have those who disbelieve not considered? Surah al-Anbiya has been dismantling shirk by argument — 21:22 reasons that had there been gods in the heavens and the earth besides Allah, both would have fallen to ruin. Now the surah turns from the logic of governance to the evidence of origins, and asks the deniers to look at the world's own history: the heavens and the earth were ratq, and We parted them.",
          bn: "আয়াতটি খোলে একটি নির্দিষ্ট শ্রোতাদের দিকে তাক করা প্রশ্ন দিয়ে: যারা কুফরি করে তারা কি ভেবে দেখেনি? সূরা আল-আম্বিয়া যুক্তি দিয়ে শিরক ভেঙে চলছিল — 21:22 যুক্তি দেয়, আসমান-যমীনে আল্লাহ ছাড়া আরও উপাস্য থাকলে দুটোই ধ্বংস হয়ে যেত। এবার সূরাটি পরিচালনার যুক্তি থেকে উৎপত্তির সাক্ষ্যে ফেরে, আর অস্বীকারকারীদের বলে জগতের নিজের ইতিহাসের দিকে তাকাতে: আসমানসমূহ ও যমীন ছিল রাতক, আর আমরা সে দুটিকে পৃথক করে দিলাম।",
        },
        {
          en: "The form of the question matters. Awalam yara — have they not seen — appeals not to a hidden doctrine but to something available for inspection; the deniers are treated as people with eyes and a world in front of them. The surah has just challenged them in 21:24 to bring their proof. The Quran holds itself to the same standard and produces its exhibits: origins, rain, life, order. Denial is portrayed not as a shortage of evidence but as a refusal to look at it.",
          bn: "প্রশ্নের গঠনটিই তাৎপর্যপূর্ণ। আওয়ালাম ইয়ারা — তারা কি দেখেনি — কোনো গোপন মতবাদের কাছে নয়, বরং পরিদর্শনযোগ্য কিছুর কাছে আবেদন জানায়; অস্বীকারকারীদের গণ্য করা হয়েছে চোখওয়ালা মানুষ হিসেবে, যাদের সামনে একটা জগৎ আছে। সূরাটি এইমাত্র 21:24 আয়াতে বলেছে: তোমাদের প্রমাণ আনো। কুরআন নিজেকেও একই মানদণ্ডে বাঁধে এবং নিজের প্রদর্শনী হাজির করে: উৎপত্তি, বৃষ্টি, প্রাণ, শৃঙ্খলা। অস্বীকারকে আঁকা হয়েছে প্রমাণের ঘাটতি হিসেবে নয়, বরং তা দেখতে অস্বীকৃতি হিসেবে।",
        },
      ],
    },
    {
      h: { en: "Ratq and Fatq", bn: "রাতক ও ফাতক" },
      p: [
        {
          en: "The two Arabic words carry the whole image. Ratq is a thing sewn shut, joined, closed; fataqa is to split, to open apart. The verse states that the heavens and the earth were a joined, closed thing — kanata ratqan — and that Allah parted them, fataqnahuma. What exactly the joining and the parting were, the verse does not elaborate, and the earliest authorities read it in more than one way, all recorded by at-Tabari with their chains.",
          bn: "আরবি শব্দ দুটিই পুরো চিত্রটি বহন করে। রাতক হলো সেলাই করে আটকানো, জোড়া লাগানো, বন্ধ কিছু; ফাতাকা মানে চিরে ফেলা, ফাঁক করে খোলা। আয়াতটি বলে, আসমানসমূহ ও যমীন ছিল জোড়া, বন্ধ এক বস্তু — কানাতা রাতকান — আর আল্লাহ সে দুটিকে পৃথক করলেন — ফাতাকনাহুমা। জোড়াটা ও পৃথক করাটা ঠিক কী ছিল, আয়াত তার বিস্তারিত দেয় না, আর প্রাচীনতম কর্তৃপক্ষগণ এটিকে একাধিকভাবে পড়েছেন — সবই আত-তাবারী সনদসহ লিপিবদ্ধ করেছেন।",
        },
        {
          en: "One reading, related from early authorities: the heavens and the earth were one joined entity, and He separated them from each other. Another: the heaven was a single layer, and He split it into seven, and the earth likewise into seven. A third, related from Ibn Abbas (RA) among others: the heaven was closed and gave no rain, and the earth was closed and grew nothing, and He opened the one with rain and the other with plants.",
          bn: "একটি পাঠ, প্রাচীন কর্তৃপক্ষদের থেকে বর্ণিত: আসমানসমূহ ও যমীন ছিল একটিই জোড়া সত্তা, আর তিনি সে দুটিকে পরস্পর থেকে আলাদা করলেন। আরেকটি: আসমান ছিল একটিই স্তর, তিনি তাকে সাতে বিভক্ত করলেন, যমীনকেও তেমনি সাতে। তৃতীয়টি, ইবনে আব্বাস (রাঃ)-সহ অন্যদের থেকে বর্ণিত: আসমান ছিল বন্ধ — বৃষ্টি দিত না, আর যমীন ছিল বন্ধ — কিছু ফলাত না; তিনি একটিকে খুললেন বৃষ্টি দিয়ে, অন্যটিকে উদ্ভিদ দিয়ে।",
        },
        {
          en: "At-Tabari himself preferred the rain-and-growth reading, arguing from the clause that immediately follows — and We made from water every living thing — so that the verse's two halves speak of one connected mercy. Ibn Kathir presents the parting of a joined creation. The classical tradition held these readings side by side without anxiety; the verse's argument lands on every reading, because each describes a world wholly arranged by One doer, before any human eye watched.",
          bn: "আত-তাবারী নিজে বৃষ্টি-ও-উদ্ভিদের পাঠটিকে প্রাধান্য দিয়েছেন — যুক্তি টেনেছেন ঠিক পরের বাক্যাংশ থেকে — আর আমরা পানি থেকে প্রতিটি জীবন্ত জিনিস বানিয়েছি — যাতে আয়াতের দুই অর্ধ একটিই সংযুক্ত রহমতের কথা বলে। ইবনে কাসীর উপস্থাপন করেন জোড়া সৃষ্টিকে পৃথক করার পাঠটি। ধ্রুপদী ঐতিহ্য এই পাঠগুলোকে কোনো উদ্বেগ ছাড়াই পাশাপাশি রেখেছে; আয়াতের যুক্তি প্রতিটি পাঠেই নিশানায় লাগে, কারণ প্রতিটিই বর্ণনা করে এমন এক জগৎকে, যা সম্পূর্ণভাবে সাজিয়েছেন এক কর্তা — কোনো মানুষের চোখ দেখার আগেই।",
        },
      ],
    },
    {
      h: { en: "Every Living Thing From Water", bn: "পানি থেকে প্রতিটি প্রাণ" },
      p: [
        {
          en: "Wa ja'alna minal-ma'i kulla shay'in hayy — and We made from water every living thing. The commentators read it in two ways that converge: water as the material from which living things were created, or water as that without which no living thing survives. Other verses keep the theme: 24:45 says Allah created every moving creature from water, and 25:54 that He created from water a human being and gave him lineage and marriage. The most ordinary substance in the world is the signature on every living thing.",
          bn: "ওয়া জা'আলনা মিনাল-মা'ই কুল্লা শাইয়িন হাইয় — আর আমরা পানি থেকে বানিয়েছি প্রতিটি জীবন্ত জিনিস। মুফাসসিরগণ এটিকে দুইভাবে পড়েন, যা এক জায়গায় মেশে: পানি সেই উপাদান যা থেকে জীবেরা সৃষ্ট, অথবা পানি সেই জিনিস যা ছাড়া কোনো জীব বাঁচে না। অন্য আয়াতগুলো প্রসঙ্গটি ধরে রাখে: 24:45 বলে, আল্লাহ প্রতিটি বিচরণশীল প্রাণী পানি থেকে সৃষ্টি করেছেন; আর 25:54 বলে, তিনি পানি থেকে মানুষ সৃষ্টি করে তাকে দিয়েছেন বংশ ও বৈবাহিক সম্পর্ক। জগতের সবচেয়ে সাধারণ পদার্থটিই প্রতিটি জীবন্ত জিনিসের গায়ে সই।",
        },
      ],
    },
    {
      h: { en: "The Signs Keep Coming", bn: "নিদর্শন আসতেই থাকে" },
      p: [
        {
          en: "The verse is the first of a series. 21:31 sets firm mountains in the earth lest it shake with its people, and opens broad passes in them as roads. 21:32 makes the sky a protected ceiling — yet, it adds, they turn away from its signs. 21:33 gives night and day, and the sun and the moon, each swimming in an orbit, a falak. The passage piles up what every denier already stands on, drinks and shelters under, then lets the accumulation press its single question.",
          bn: "আয়াতটি একটি ধারার প্রথম। 21:31 যমীনে সুদৃঢ় পাহাড় স্থাপন করে, যেন তা অধিবাসীদের নিয়ে টলে না যায়, আর তাতে খুলে দেয় প্রশস্ত গিরিপথ — চলার রাস্তা হিসেবে। 21:32 আকাশকে বানায় এক সুরক্ষিত ছাদ — অথচ, যোগ করে আয়াতটি, তারা এর নিদর্শনগুলো থেকে মুখ ফিরিয়ে থাকে। 21:33 দেয় রাত-দিন, আর সূর্য ও চাঁদ — প্রত্যেকে সাঁতার কাটছে এক কক্ষপথে — ফালাক। অনুচ্ছেদটি স্তূপ করে তোলে সেসব জিনিস, যার উপর প্রতিটি অস্বীকারকারী এমনিতেই দাঁড়িয়ে আছে, যা পান করছে, যার নিচে আশ্রয় নিচ্ছে — তারপর সেই স্তূপকেই তার একটিমাত্র প্রশ্ন চাপতে দেয়।",
        },
      ],
    },
    {
      h: { en: "Will They Not Believe", bn: "তবুও কি ঈমান আনবে না" },
      p: [
        {
          en: "The verse ends: afala yu'minun — will they not then believe? The question assumes that honest looking leads somewhere; it treats the world as evidence, not scenery. The Quran elsewhere praises exactly this use of the eyes: 3:191 describes those who remember Allah standing, sitting and on their sides, and reflect on the creation of the heavens and the earth, concluding: our Lord, You did not create this in vain. Observation is meant to end in a verdict, and the verdict in worship.",
          bn: "আয়াতটি শেষ হয়: আফালা ইউ'মিনূন — তবুও কি তারা ঈমান আনবে না? প্রশ্নটি ধরে নেয়, সৎ দৃষ্টিপাত কোথাও না কোথাও পৌঁছায়; এটি জগৎকে গণ্য করে সাক্ষ্যপ্রমাণ হিসেবে, দৃশ্যপট হিসেবে নয়। কুরআন অন্যত্র চোখের ঠিক এই ব্যবহারেরই প্রশংসা করে: 3:191 বর্ণনা করে তাদের, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে এবং আসমান-যমীনের সৃষ্টি নিয়ে চিন্তা করে, উপসংহারে বলে: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। পর্যবেক্ষণের গন্তব্য একটি রায়, আর রায়ের গন্তব্য ইবাদত।",
        },
      ],
    },
    {
      h: { en: "Looking as a Practice", bn: "দেখা যখন অনুশীলন" },
      p: [
        {
          en: "The lived form of the verse costs nothing and is available daily: rain arriving on dead ground, a glass of water, the sky holding. The classical readings, for all their variety, exit through the same door — everything you see was arranged, opened and watered by One who did it deliberately, and the fitting response is gratitude and tawhid. A believer who drinks water with that sentence somewhere in mind has read 21:30 the way its first readers were asked to.",
          bn: "আয়াতটির যাপিত রূপে কোনো খরচ নেই এবং তা প্রতিদিনই হাতের কাছে: মরা মাটিতে নেমে আসা বৃষ্টি, এক গ্লাস পানি, টিকে থাকা আকাশ। ধ্রুপদী পাঠগুলো, যত বৈচিত্র্যই থাকুক, বেরোয় একই দরজা দিয়ে — আপনি যা দেখছেন সবই সাজিয়েছেন, খুলেছেন ও সিঞ্চন করেছেন এমন একজন, যিনি তা করেছেন সজ্ঞানে; আর মানানসই সাড়া হলো কৃতজ্ঞতা ও তাওহীদ। যে মুমিন এই বাক্যটি মনের কোথাও রেখে পানি পান করে, সে 21:30 পড়েছে ঠিক সেভাবে, যেভাবে এর প্রথম পাঠকদের পড়তে বলা হয়েছিল।",
        },
      ],
    },
  ],
},
'55:13': {
  sections: [
    {
      h: { en: "The Refrain of ar-Rahman", bn: "আর-রাহমানের ধুয়া" },
      p: [
        {
          en: "Few sentences in the Quran repeat like this one: fa-bi-ayyi ala'i rabbikuma tukadhdhiban — then which of the favors of your Lord will you two deny? It sounds thirty-one times in Surah ar-Rahman, and its first sounding is here at 55:13 itself. A surah built on repetition is doing something deliberate: the question returns after nearly every gift and scene the surah displays, pinning each one down before the listener can let it slide past unexamined.",
          bn: "কুরআনে এই বাক্যটির মতো পুনরাবৃত্তি খুব কম বাক্যেরই আছে: ফাবিআইয়ি আলাই রাব্বিকুমা তুকাযযিবান — সুতরাং তোমরা উভয়ে তোমাদের রবের কোন কোন অনুগ্রহ অস্বীকার করবে? এটি সূরা আর-রাহমানে একত্রিশ বার ধ্বনিত হয়, আর তার প্রথম ধ্বনি এখানে — 55:13 আয়াতে। পুনরাবৃত্তির উপর গড়া একটি সূরা সজ্ঞানেই কিছু করছে: সূরাটি যত দান ও দৃশ্য মেলে ধরে, প্রায় প্রতিটির পরেই প্রশ্নটি ফিরে আসে — প্রতিটি দানকে গেঁথে ধরে, শ্রোতা তাকে অযাচাই গলে যেতে দেওয়ার আগেই।",
        },
        {
          en: "The surah's very name sets the question's tone. It opens with a single name of Allah standing alone as a complete verse: ar-Rahman, the All-Merciful — the surah of favors is signed by mercy before a single favor is listed. So the recurring question is not an interrogation by a prosecutor but a reminder from a Giver; the commentators note that mercy is the fountain from which everything the surah lists flows, from the Quran itself to the fruit of the earth.",
          bn: "সূরাটির নামই প্রশ্নের সুর বেঁধে দেয়। এটি খোলে আল্লাহর একটিমাত্র নাম দিয়ে, যা একাই একটি পূর্ণ আয়াত: আর-রাহমান — পরম করুণাময় — অনুগ্রহের সূরাটিতে একটিও অনুগ্রহ তালিকাভুক্ত হওয়ার আগে করুণার সই পড়ে যায়। তাই ফিরে-আসা প্রশ্নটি কোনো অভিযোক্তার জেরা নয়, বরং এক দাতার স্মরণিকা; মুফাসসিরগণ লক্ষ করেন, করুণাই সেই ফোয়ারা, যা থেকে সূরাটির তালিকার সবকিছু প্রবাহিত — খোদ কুরআন থেকে শুরু করে যমীনের ফল পর্যন্ত।",
        },
      ],
    },
    {
      h: { en: "Before the First Asking", bn: "প্রথম জিজ্ঞাসার আগে" },
      p: [
        {
          en: "The first twelve verses stack the gifts the question will ask about. 55:1-4 tell it: ar-Rahman taught the Quran, created man, taught him bayan — clear expression. The commentators pause on the order of mention: the teaching of the Quran is named before the creation of man, as if to say the reason preceded the creature. Then 55:5-12 follow: the sun and the moon by precise reckoning, the star and the tree prostrating, the sky raised and the balance set, the earth laid out with fruit, palms, husked grain and fragrant herbs.",
          bn: "প্রথম বারোটি আয়াত সেই দানগুলো স্তূপ করে, যেগুলোর কথা প্রশ্নটি জিজ্ঞেস করবে। 55:1-4 বলে: আর-রাহমান কুরআন শিখিয়েছেন, মানুষ সৃষ্টি করেছেন, তাকে শিখিয়েছেন বায়ান — স্পষ্ট প্রকাশ। মুফাসসিরগণ উল্লেখের ক্রমে থামেন: কুরআন শেখানোর কথা এসেছে মানুষ সৃষ্টির আগে — যেন বলা হচ্ছে, উদ্দেশ্যটি ছিল সৃষ্টিরও আগে। তারপর 55:5-12 আসে: সূর্য ও চাঁদ নিখুঁত হিসাবে, তারকা ও গাছ সিজদারত, আকাশ সমুন্নত ও দাঁড়িপাল্লা স্থাপিত, আর যমীন বিছানো — ফলে, খেজুরগাছে, খোসাযুক্ত শস্যদানায় ও সুগন্ধি লতাপাতায়।",
        },
        {
          en: "Then the question falls for the first time. Everything just listed is either unpurchasable or unnoticed: no one bills us for the sun's punctuality, and no one thanks anyone for grain husks or fragrance. The refrain's placement teaches its method — favors are easiest to deny not by argument but by inattention, and the question is aimed less at the tongue that would deny than at the attention that already has.",
          bn: "তারপর প্রথমবারের মতো প্রশ্নটি নামে। এইমাত্র তালিকাভুক্ত সবকিছুই হয় কেনা যায় না, নয় নজরেই পড়ে না: সূর্যের সময়ানুবর্তিতার জন্য কেউ আমাদের বিল পাঠায় না, আর শস্যের খোসা বা সুগন্ধের জন্য কেউ কাউকে ধন্যবাদও দেয় না। ধুয়াটির অবস্থানই তার পদ্ধতি শেখায় — অনুগ্রহ অস্বীকারের সবচেয়ে সহজ পথ যুক্তি নয়, অমনোযোগ; আর প্রশ্নটির নিশানা যে-জিহ্বা অস্বীকার করবে তার চেয়ে বেশি সেই মনোযোগ, যা ইতিমধ্যেই অস্বীকার করে বসে আছে।",
        },
      ],
    },
    {
      h: { en: "The Dual Address", bn: "দ্বিবচনের সম্বোধন" },
      p: [
        {
          en: "The grammar is dual throughout: rabbikuma, the Lord of you two; tukadhdhiban, will you two deny. The two addressed are the jinn and mankind, whom the surah later calls out by name in 55:33 — O company of jinn and mankind — and in 55:31 names as the two weighty races, ath-thaqalan. Both orders of creation receive the same gifts, stand before the same reckoning, and are asked the same question, favor by favor, as equals in accountability.",
          bn: "ব্যাকরণ পুরোটা জুড়েই দ্বিবচনে: রাব্বিকুমা — তোমাদের দুইয়ের রব; তুকাযযিবান — তোমরা দুইজন কি অস্বীকার করবে। সম্বোধিত দুইজন হলো জিন ও মানুষ — সূরাটি পরে 55:33 আয়াতে নাম ধরে তাদের ডাকে — হে জিন ও মানুষের দল — আর 55:31 আয়াতে তাদের নাম দেয় দুই ভারী জাতি — আস-সাকালান। সৃষ্টির উভয় স্তরই একই দান পায়, একই হিসাবের সামনে দাঁড়ায়, আর জবাবদিহিতে সমান হয়ে অনুগ্রহের পর অনুগ্রহ ধরে একই প্রশ্নের মুখোমুখি হয়।",
        },
      ],
    },
    {
      h: { en: "Denial by Ingratitude", bn: "অকৃতজ্ঞতায় অস্বীকার" },
      p: [
        {
          en: "Tukadhdhiban is from takdhib, to declare false. How does one call a favor a lie? The commentators answer: by attributing it elsewhere — to luck, to one's own cleverness, to no one; by using it against the Giver; by letting familiarity file it under the ordinary. Denial of blessings rarely announces itself as unbelief; it lives quietly as ingratitude. The refrain makes every listed gift a question requiring an answer, and silence itself becomes an answer.",
          bn: "তুকাযযিবান এসেছে তাকযীব থেকে — মিথ্যা ঘোষণা করা। একটি অনুগ্রহকে মিথ্যা বলে কীভাবে? মুফাসসিরগণ উত্তর দেন: তাকে অন্য খাতে লিখে — ভাগ্যের নামে, নিজের চাতুর্যের নামে, কারও নামেই না লিখে; তাকে দাতার বিরুদ্ধেই ব্যবহার করে; অভ্যস্ততাকে তাকে সাধারণের খোপে ফেলতে দিয়ে। নিয়ামত অস্বীকার খুব কমই নিজেকে কুফর বলে ঘোষণা করে; সে চুপচাপ বেঁচে থাকে অকৃতজ্ঞতা হয়ে। ধুয়াটি তালিকার প্রতিটি দানকে বানায় জবাব-দাবি-করা প্রশ্ন, আর তখন নীরবতাও একটা জবাব হয়ে দাঁড়ায়।",
        },
      ],
    },
    {
      h: { en: "The Jinn Answered Better", bn: "জিনেরা উত্তম জবাব দিয়েছিল" },
      p: [
        {
          en: "At-Tirmidhi records from Jabir (RA) — in a report he himself calls gharib — that the Prophet ﷺ recited Surah ar-Rahman to his companions, and they were silent. He told them that the jinn had been better in response than they were: each time he recited fa-bi-ayyi ala'i rabbikuma tukadhdhiban, the jinn said — none of Your favors, our Lord, do we deny; Yours is the praise. The refrain, in other words, expects a reply. It is not rhetoric to be admired but a question to be answered, aloud.",
          bn: "আত-তিরমিযী জাবির (রাঃ) থেকে বর্ণনা করেন — যে বর্ণনাকে তিনি নিজেই \"গরীব\" বলেছেন — নবী ﷺ সাহাবীদের সূরা আর-রাহমান পড়ে শোনালেন, আর তাঁরা নীরব রইলেন। তিনি তাঁদের বললেন, জিনেরা জবাবে তাঁদের চেয়ে উত্তম ছিল: যতবার তিনি পড়েছেন ফাবিআইয়ি আলাই রাব্বিকুমা তুকাযযিবান, জিনেরা বলেছে — হে আমাদের রব, আপনার কোনো নিয়ামতই আমরা অস্বীকার করি না; সমস্ত প্রশংসা আপনারই। অর্থাৎ ধুয়াটি একটি জবাব প্রত্যাশা করে। এটি মুগ্ধ হয়ে শোনার অলঙ্কার নয়, বরং সরবে উত্তর দেওয়ার প্রশ্ন।",
        },
      ],
    },
    {
      h: { en: "Even After Warnings", bn: "সতর্কবাণীর পরেও" },
      p: [
        {
          en: "The refrain does not only follow pleasant verses. It sounds after 55:35, which threatens a flame of fire and smoke against which there is no defense, and after the scenes of judgment that follow. The commentators draw the lesson: the warning itself is a favor — a hazard marked in advance is a mercy to travelers — and deliverance from what is described is a favor greater still. Even justice, for those who will stand safe on its right side, belongs on the list of ala'.",
          bn: "ধুয়াটি কেবল প্রীতিকর আয়াতের পরে আসে না। এটি ধ্বনিত হয় 55:35 আয়াতের পরেও, যা হুমকি দেয় আগুনের শিখা ও ধোঁয়ার — যার বিরুদ্ধে কোনো প্রতিরক্ষা নেই — এবং তার পরের বিচার-দৃশ্যগুলোর পরেও। মুফাসসিরগণ শিক্ষাটি টেনে বের করেন: সতর্কবাণী নিজেই এক অনুগ্রহ — আগে থেকে চিহ্নিত বিপদ পথিকদের জন্য রহমত — আর যা বর্ণিত হলো তা থেকে মুক্তি আরও বড় অনুগ্রহ। এমনকি ন্যায়বিচারও — যারা তার নিরাপদ পাশে দাঁড়াবে তাদের জন্য — আলা'-এর তালিকাতেই পড়ে।",
        },
        {
          en: "The lived form of the verse is the trained pause. In recitation, answer the refrain as the jinn did. Outside recitation, borrow its method: after the meal, the recovery, the safe arrival, the ordinary Tuesday, let the question sound once — which of the favors of your Lord would you deny? — and answer it. 16:18 concedes that we cannot count His favors; ar-Rahman never asks us to finish counting them, only to stop denying them, one at a time.",
          bn: "আয়াতটির যাপিত রূপ হলো অনুশীলিত বিরতি। তিলাওয়াতের সময় ধুয়াটির জবাব দিন, যেমন জিনেরা দিয়েছিল। তিলাওয়াতের বাইরে এর পদ্ধতিটি ধার করুন: খাওয়ার পরে, রোগমুক্তির পরে, নিরাপদে পৌঁছানোর পরে, সাদামাটা এক মঙ্গলবারের পরে — প্রশ্নটিকে একবার বাজতে দিন — তোমার রবের কোন কোন অনুগ্রহ তুমি অস্বীকার করবে? — এবং জবাব দিন। 16:18 স্বীকার করে, আমরা তাঁর নিয়ামত গুনে শেষ করতে পারব না; আর-রাহমান কখনো গুনে শেষ করতে বলে না — বলে কেবল অস্বীকার করা থামাতে, একটির পর একটি করে।",
        },
      ],
    },
  ],
},
  '13:11': {
    sections: [
      {
        h: { en: "Where the Verse Sits", bn: "আয়াতটি কোথায় বসে আছে" },
        p: [
          {
            en: "Surah ar-Ra'd opens with the signs of a Lord who runs the sky and the earth and knows everything without exception. The verse just before, 13:10, makes that knowledge personal: the one who hides his words and the one who speaks aloud, the one concealed by night and the one walking in daylight, are all the same to Him. 13:11 then moves from being known to being kept: escorts travel with each person, in front of him and behind him.",
            bn: "সূরা আর-রা'দ শুরু হয় সেই রবের নিদর্শন দিয়ে, যিনি আসমান ও যমীন পরিচালনা করেন এবং ব্যতিক্রম ছাড়া সবকিছু জানেন। ঠিক আগের আয়াত 13:10 সেই জ্ঞানকে ব্যক্তিগত করে তোলে: যে কথা গোপন করে আর যে উচ্চস্বরে বলে, যে রাতের আঁধারে লুকিয়ে থাকে আর যে দিনের আলোয় চলে — সবাই তাঁর কাছে সমান। এরপর 13:11 জানা থেকে রক্ষিত হওয়ার দিকে এগোয়: প্রতিটি মানুষের সঙ্গে চলে প্রহরী — তার সামনে ও পেছনে।",
          },
          {
            en: "So the famous middle clause about change does not float alone; it is set between guarding and decree. The verse names three facts in order: each person is watched over by appointed guardians, Allah does not alter a people's condition until they alter what is in themselves, and when His decree of harm arrives nothing can turn it back. Read together, the parts answer one another, and each part disciplines how the others may be understood.",
            bn: "সুতরাং পরিবর্তন নিয়ে বিখ্যাত মাঝের বাক্যটি একা ভেসে থাকে না; সেটি বসানো হয়েছে রক্ষণাবেক্ষণ ও ফায়সালার মাঝখানে। আয়াতটি পরপর তিনটি সত্য বলে: প্রত্যেক মানুষকে নিযুক্ত রক্ষীরা পাহারা দেয়, আল্লাহ কোনো জাতির অবস্থা বদলান না যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়, আর তাঁর ক্ষতির ফায়সালা এসে গেলে কিছুই তা ফেরাতে পারে না। একসঙ্গে পড়লে অংশগুলো একে অন্যের জবাব দেয়, আর প্রতিটি অংশ ঠিক করে দেয় বাকিগুলো কীভাবে বোঝা যাবে।",
          },
        ],
      },
      {
        h: { en: "Angels Who Take Turns", bn: "পালা বদল করা ফেরেশতারা" },
        p: [
          {
            en: "The word for the escorts is mu'aqqibat, from a root meaning to follow one another in succession — shifts that relieve each other, the way sentries change guard. The commentators, Tabari and Ibn Kathir among them, say these are angels charged with each person, before him and behind him, and that they guard him by the command of Allah. The protection is real, but it is delegated; the angels have no power of their own.",
            bn: "প্রহরীদের জন্য ব্যবহৃত শব্দটি মুআক্কিবাত — এর মূল অর্থ একের পর এক পালাক্রমে আসা; যেভাবে পাহারাদাররা পালা বদল করে, সেভাবে একদল আরেক দলকে অব্যাহতি দেয়। মুফাসসিরগণ — তাবারী ও ইবনে কাসীর তাঁদের মধ্যে — বলেন, এরা ফেরেশতা, প্রত্যেক মানুষের সামনে ও পেছনে নিযুক্ত, এবং তারা আল্লাহর নির্দেশে তাকে রক্ষা করে। এই সুরক্ষা বাস্তব, কিন্তু তা অর্পিত দায়িত্ব; ফেরেশতাদের নিজস্ব কোনো ক্ষমতা নেই।",
          },
          {
            en: "Al-Bukhari narrates from Abu Hurayrah (RA) that angels take turns among you by night and by day, and that they gather at the Fajr prayer and the 'Asr prayer. Ibn Kathir adds the point the verse itself implies: when Allah's decree comes, the guards stand aside, because their guarding was only ever by His command. A person is therefore kept safe every hour by a mercy he neither sees nor pays for.",
            bn: "বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, ফেরেশতারা রাতে ও দিনে তোমাদের মধ্যে পালাক্রমে আসে, আর তারা ফজর ও আসরের নামাযে একত্র হয়। ইবনে কাসীর সেই কথাটি যোগ করেন যা আয়াত নিজেই ইঙ্গিত করে: আল্লাহর ফায়সালা এসে গেলে রক্ষীরা সরে দাঁড়ায়, কারণ তাদের পাহারা বরাবরই ছিল কেবল তাঁর নির্দেশে। ফলে মানুষ প্রতিটি ঘণ্টা নিরাপদ থাকে এমন এক রহমতে, যা সে দেখেও না, যার মূল্যও দেয় না।",
          },
        ],
      },
      {
        h: { en: "The Clause the World Quotes", bn: "যে বাক্যটি সবাই উদ্ধৃত করে" },
        p: [
          {
            en: "Allah does not change ma bi-qawmin, what is in a people, until they change ma bi-anfusihim, what is in themselves. Two changes are named, and the second precedes the first. The wording is about a qawm, a people, not only an individual: collective conditions track collective interiors. And what must change first is not circumstance, wealth or rulers, but what sits inside — conviction, intention, habit, and what a community tolerates in itself.",
            bn: "আল্লাহ 'মা বি-কাওমিন' — কোনো জাতির মধ্যে যা আছে — তা বদলান না, যতক্ষণ না তারা 'মা বি-আনফুসিহিম' — নিজেদের ভেতরে যা আছে — তা বদলায়। এখানে দুটি পরিবর্তনের কথা বলা হয়েছে, এবং দ্বিতীয়টি প্রথমটির আগে ঘটে। শব্দবিন্যাসে বলা হয়েছে 'কাওম' — একটি জাতির কথা, শুধু ব্যক্তির নয়: সমষ্টিগত অবস্থা সমষ্টিগত অন্তরের অনুগামী। আর যা আগে বদলাতে হবে তা পরিস্থিতি, সম্পদ বা শাসক নয়, বরং যা ভেতরে বসে আছে — বিশ্বাস, নিয়ত, অভ্যাস, এবং একটি সমাজ নিজের মধ্যে যা সহ্য করে নেয়।",
          },
          {
            en: "The classical commentators read the clause first as a warning. Tabari and Ibn Kathir set it beside 8:53, which says Allah never changes a favour He has bestowed on a people until they change what is in themselves. Security, provision and standing are held in place by obedience, and are forfeited from the inside before they collapse on the outside. Yet the wording here is general, so it also carries the hopeful direction: return begins within too.",
            bn: "ধ্রুপদী মুফাসসিরগণ বাক্যটিকে প্রথমত সতর্কবার্তা হিসেবে পড়েন। তাবারী ও ইবনে কাসীর এটিকে 8:53 আয়াতের পাশে রাখেন, যেখানে বলা হয়েছে: আল্লাহ কোনো জাতিকে দেওয়া নিয়ামত কখনো বদলান না, যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়। নিরাপত্তা, রিযিক ও মর্যাদা টিকে থাকে আনুগত্যের ওপর, আর বাইরে ভেঙে পড়ার আগে সেগুলো হারিয়ে যায় ভেতর থেকে। তবে এখানকার শব্দবিন্যাস ব্যাপক, তাই এটি আশার দিকটিও বহন করে: ফিরে আসাও শুরু হয় ভেতর থেকেই।",
          },
        ],
      },
      {
        h: { en: "No Repelling, No Protector", bn: "ফেরানোর কেউ নেই, অভিভাবকও নেই" },
        p: [
          {
            en: "The verse ends: when Allah intends harm for a people there is no repelling it, and they have no wali — no protector to manage their affairs — besides Him. This closes the loophole the heart looks for. The same angels who guard by His command cannot guard against His command. Whoever hopes to be shielded from the decree by connections, wealth or precaution is looking for a protector the verse has just said does not exist.",
            bn: "আয়াতটি শেষ হয় এভাবে: আল্লাহ যখন কোনো জাতির অকল্যাণ চান, তখন তা ফেরানোর কেউ নেই, আর তিনি ছাড়া তাদের কোনো ওয়ালী নেই — এমন কোনো অভিভাবক নেই যে তাদের বিষয় সামলাবে। এতে বন্ধ হয়ে যায় সেই ফাঁকটি, যা হৃদয় খুঁজে ফেরে। যে ফেরেশতারা তাঁর নির্দেশে পাহারা দেয়, তারাই তাঁর নির্দেশের বিরুদ্ধে পাহারা দিতে পারে না। যে ব্যক্তি পরিচিতি, সম্পদ বা সাবধানতার জোরে ফায়সালা থেকে বাঁচার আশা করে, সে এমন এক রক্ষকের খোঁজ করছে, আয়াত এইমাত্র যার অস্তিত্ব অস্বীকার করেছে।",
          },
          {
            en: "This is why the middle clause matters so much. If harm cannot be repelled once it is intended, then the only place a person can work is upstream of it — in the state that draws mercy or forfeits it. Responsibility and outcome are split cleanly: the change within is ours to make; the change of condition, and the protection while we make it, remain wholly with Allah.",
            bn: "এ কারণেই মাঝের বাক্যটি এত গুরুত্বপূর্ণ। ক্ষতির ইচ্ছা একবার হয়ে গেলে যদি তা ফেরানো না যায়, তবে মানুষের কাজ করার একমাত্র জায়গা তার উজানে — সেই অবস্থায়, যা রহমত টেনে আনে অথবা তা হারায়। দায়িত্ব ও ফলাফল পরিষ্কারভাবে ভাগ হয়ে যায়: ভেতরের পরিবর্তন করা আমাদের কাজ; আর অবস্থার পরিবর্তন, এবং সেই কাজের সময়কার সুরক্ষা — দুটোই সম্পূর্ণ আল্লাহর হাতে।",
          },
        ],
      },
      {
        h: { en: "What Changing Within Means", bn: "ভেতরের পরিবর্তন মানে কী" },
        p: [
          {
            en: "As-Sa'di spells out what the inner change is: a people move from obedience to disobedience, or from gratitude for blessings to abusing them, and the outward condition follows; and if they change what is in themselves by returning, Allah's mercy returns with them. Nothing here promises that effort manufactures outcomes. It says that inner states are the level at which Allah has chosen to deal with communities, which is a different and larger claim.",
            bn: "আস-সা'দী ভেতরের পরিবর্তনটি খুলে বলেন: একটি জাতি আনুগত্য থেকে অবাধ্যতায় সরে যায়, অথবা নিয়ামতের কৃতজ্ঞতা থেকে তার অপব্যবহারে — আর বাইরের অবস্থা তার অনুগামী হয়; আবার তারা যদি ফিরে এসে নিজেদের ভেতরের অবস্থা বদলায়, আল্লাহর রহমতও তাদের সঙ্গে ফিরে আসে। এখানে এমন প্রতিশ্রুতি নেই যে চেষ্টাই ফলাফল তৈরি করে। বরং বলা হচ্ছে: ভেতরের অবস্থাই সেই স্তর, যেখানে আল্লাহ জাতিগুলোর সঙ্গে লেনদেন করা বেছে নিয়েছেন — যা ভিন্ন এবং আরও বড় একটি কথা।",
          },
          {
            en: "In practice the verse redirects complaint. A household, a community or a person asking why conditions do not improve is sent first to an audit that costs nothing and hurts more: what is being tolerated within — in prayer, in honesty, in what is consumed and what is neglected? The verse does not forbid changing circumstances; the rest of the Quran commands striving. It fixes the order: the inside first, because that is what the outside waits upon.",
            bn: "বাস্তবে আয়াতটি অভিযোগের মুখ ঘুরিয়ে দেয়। কোনো পরিবার, সমাজ বা ব্যক্তি যখন জিজ্ঞেস করে অবস্থার উন্নতি হচ্ছে না কেন, তাকে প্রথমে পাঠানো হয় এমন এক হিসাব-নিরীক্ষায়, যাতে খরচ নেই কিন্তু ব্যথা বেশি: ভেতরে কী সহ্য করে নেওয়া হচ্ছে — নামাযে, সততায়, যা খাওয়া হচ্ছে আর যা অবহেলা করা হচ্ছে তাতে? আয়াতটি পরিস্থিতি বদলাতে নিষেধ করে না; কুরআনের বাকি অংশ তো চেষ্টারই নির্দেশ দেয়। এটি কেবল ক্রম ঠিক করে দেয়: আগে ভেতর, কারণ বাইরের পরিবর্তন তারই অপেক্ষায় থাকে।",
          },
        ],
      },
      {
        h: { en: "Living Between the Two Truths", bn: "দুই সত্যের মাঝে বসবাস" },
        p: [
          {
            en: "The believer who carries this verse walks with two facts at once. He is guarded — escorted through every ordinary day by angels in relay he has never seen — so gratitude, not anxiety, is the baseline. And he is responsible: the part of his condition that waits on anyone waits on him. The verse leaves no room for the fatalism that waits for rescue, nor for the self-reliance that forgets who commands the guards.",
            bn: "এই আয়াত যে মুমিন বহন করে, সে একসঙ্গে দুটি সত্য নিয়ে চলে। সে রক্ষিত — প্রতিটি সাধারণ দিনে তাকে পাহারা দিয়ে চলে পালা বদল করা ফেরেশতারা, যাদের সে কখনো দেখেনি — তাই তার ভিত্তি হওয়া উচিত কৃতজ্ঞতা, উদ্বেগ নয়। আবার সে দায়বদ্ধও: তার অবস্থার যে অংশ কারও অপেক্ষায় আছে, তা তারই অপেক্ষায় আছে। আয়াতটি সেই ভাগ্যবাদের জায়গা রাখে না যা উদ্ধারের অপেক্ষায় বসে থাকে, আবার সেই আত্মনির্ভরতারও নয় যা ভুলে যায় রক্ষীদের নির্দেশ কে দেন।",
          },
          {
            en: "Its neighbour 13:28 completes the picture: hearts find rest in the remembrance of Allah. The inner change the verse asks for is not a technique but a turning — intention corrected, wrong left, obedience taken up — done while trusting the One whose way of dealing does not change, as the verse itself guarantees. That guarantee is the comfort: the door to a changed condition is never locked from His side.",
            bn: "প্রতিবেশী আয়াত 13:28 ছবিটি সম্পূর্ণ করে: আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়। আয়াতটি যে ভেতরের পরিবর্তন চায় তা কোনো কৌশল নয়, বরং একটি ফেরা — নিয়ত শুধরে নেওয়া, অন্যায় ছেড়ে দেওয়া, আনুগত্য ধরে নেওয়া — আর তা করা হয় তাঁর ওপর ভরসা রেখে, যাঁর লেনদেনের রীতি বদলায় না, যেমনটি আয়াত নিজেই নিশ্চয়তা দেয়। সেই নিশ্চয়তাই সান্ত্বনা: বদলে যাওয়া অবস্থার দরজা তাঁর দিক থেকে কখনো তালাবদ্ধ নয়।",
          },
        ],
      },
    ],
  },
  '21:87': {
    sections: [
      {
        h: { en: "A Chain of Rescues", bn: "উদ্ধারের এক ধারাবাহিকতা" },
        p: [
          {
            en: "Surah al-Anbiya recounts prophet after prophet in a single rhythm: a servant in distress calls, and Allah answers. A few verses before, 21:83-84 tell of Ayyub (AS), who called out that harm had touched him, and was healed. Just after, 21:89-90 tell of Zakariyya (AS), who called for an heir and was given Yahya (AS). Set in that chain, the story of the man in the fish is told not as a marvel but as one more proof of the same pattern.",
            bn: "সূরা আল-আম্বিয়া একই ছন্দে একের পর এক নবীর কথা বলে: বিপদগ্রস্ত এক বান্দা ডাকে, আর আল্লাহ সাড়া দেন। এই আয়াতের কয়েক আয়াত আগে 21:83-84 বলে আইয়ুব (আঃ)-এর কথা, যিনি ডেকে বলেছিলেন যে কষ্ট তাঁকে স্পর্শ করেছে, এবং তাঁকে সুস্থতা দেওয়া হয়। ঠিক পরে 21:89-90 বলে যাকারিয়া (আঃ)-এর কথা, যিনি উত্তরাধিকারী চেয়ে ডেকেছিলেন এবং তাঁকে ইয়াহইয়া (আঃ) দেওয়া হয়। সেই ধারাবাহিকতায় বসিয়ে মাছের ভেতরের মানুষটির ঘটনা বলা হয়েছে — অলৌকিক বিস্ময় হিসেবে নয়, বরং একই নিয়মের আরেকটি প্রমাণ হিসেবে।",
          },
          {
            en: "The verse names him Dhun-Nun, the companion of the nun, the great fish. Elsewhere the Quran calls him Yunus (AS) — 10:98 names his people as the one community whose faith, once it came, was accepted and benefited them. Here he is named by his trial, because the trial is the lesson: the surah is teaching how a prophet prays from the darkness of the sea, so the fish, not the biography, carries the point.",
            bn: "আয়াতটি তাঁকে বলে যুন-নূন — নূন অর্থাৎ বিশাল মাছের সঙ্গী। কুরআনের অন্যত্র তাঁকে ইউনুস (আঃ) নামে ডাকা হয়েছে — 10:98 তাঁর জাতিকে চিহ্নিত করে সেই একমাত্র জনপদ হিসেবে, যাদের ঈমান আসার পর তা কবুল হয়েছিল এবং তাদের উপকারে এসেছিল। এখানে তাঁকে তাঁর পরীক্ষার নামে ডাকা হয়েছে, কারণ পরীক্ষাটিই শিক্ষা: সূরাটি শেখাচ্ছে সমুদ্রের অন্ধকার থেকে একজন নবী কীভাবে দোয়া করেন — তাই মূল কথা বহন করে মাছটি, জীবনী নয়।",
          },
        ],
      },
      {
        h: { en: "Leaving in Anger", bn: "রাগ করে চলে যাওয়া" },
        p: [
          {
            en: "He went off mughadiban, in anger. The commentators explain that his anger was at his people, who had persisted in rejection, and that he left them without awaiting Allah's permission — a slip weighed at a prophet's scale, not a sin of appetite. Then the difficult phrase: he thought that We would not naqdira 'alayhi. The mufassirun, Tabari and Ibn Kathir among them, read the verb from qadr, decree and restriction: he thought no constraint would be decreed on him for leaving.",
            bn: "তিনি চলে গিয়েছিলেন 'মুগাদিবান' — রাগ করে। মুফাসসিরগণ ব্যাখ্যা করেন, তাঁর রাগ ছিল নিজের জাতির ওপর, যারা প্রত্যাখ্যানে অটল ছিল, এবং তিনি আল্লাহর অনুমতির অপেক্ষা না করে তাদের ছেড়ে যান — এটি নবীর মাপকাঠিতে মাপা একটি পদস্খলন, প্রবৃত্তির কোনো পাপ নয়। তারপর কঠিন বাক্যাংশটি: তিনি ভেবেছিলেন আমরা তাঁর ওপর 'নাকদিরা' করব না। মুফাসসিরগণ — তাবারী ও ইবনে কাসীর তাঁদের মধ্যে — ক্রিয়াপদটিকে 'কাদর' অর্থাৎ ফায়সালা ও সংকীর্ণতা থেকে পড়েন: তিনি ভেবেছিলেন চলে যাওয়ার জন্য তাঁর ওপর কোনো সংকট নির্ধারিত হবে না।",
          },
          {
            en: "They insist the phrase cannot mean he doubted Allah's power, since no prophet doubts that. Read rightly, the words describe something more familiar: a good man, wronged and weary, assumes that walking away carries no consequence. The sequence that follows — the laden ship, the casting of lots that fell against him, the fish that swallowed him, as 37:140-142 recount — showed that the decree reaches wherever a servant goes.",
            bn: "তাঁরা জোর দিয়ে বলেন, বাক্যাংশটির অর্থ এ হতে পারে না যে তিনি আল্লাহর ক্ষমতায় সন্দেহ করেছিলেন, কারণ কোনো নবী তাতে সন্দেহ করেন না। ঠিকভাবে পড়লে শব্দগুলো বর্ণনা করে অনেক চেনা একটি বিষয়: একজন ভালো মানুষ, অন্যায়ের শিকার ও ক্লান্ত, ধরে নেন যে চলে যাওয়ার কোনো পরিণতি নেই। এরপরের ঘটনাক্রম — বোঝাই জাহাজ, লটারি যা তাঁর বিপক্ষে পড়ল, যে মাছ তাঁকে গিলে ফেলল — যেমন 37:140-142 বর্ণনা করে — দেখিয়ে দিল যে বান্দা যেখানেই যাক, ফায়সালা সেখানে পৌঁছে যায়।",
          },
        ],
      },
      {
        h: { en: "The Layered Darknesses", bn: "স্তরে স্তরে অন্ধকার" },
        p: [
          {
            en: "He called out fi az-zulumat, in the darknesses — the Arabic is plural. The commentators say the layers were the darkness of the night, the darkness of the sea and the darkness of the fish's belly. The plural is doing honest work: this was not gloom but the stacking of one blackness upon another, a place from which no human means of rescue existed at all. From exactly there, the verse says, he called — nada, a cry sent to One he could not see but knew was listening.",
            bn: "তিনি ডেকেছিলেন 'ফিয-যুলুমাত' — অন্ধকারসমূহের মধ্যে; আরবিতে শব্দটি বহুবচন। মুফাসসিরগণ বলেন, স্তরগুলো ছিল রাতের অন্ধকার, সমুদ্রের অন্ধকার আর মাছের পেটের অন্ধকার। বহুবচনটি সৎ কাজ করছে: এ ছিল নিছক আঁধার নয়, বরং এক কালোর ওপর আরেক কালোর স্তূপ — এমন এক জায়গা, যেখান থেকে উদ্ধারের কোনো মানবীয় উপায়ই ছিল না। ঠিক সেখান থেকে, আয়াত বলে, তিনি ডাকলেন — 'নাদা', এমন একজনের উদ্দেশে পাঠানো আর্তি, যাঁকে তিনি দেখতে পাচ্ছিলেন না কিন্তু জানতেন তিনি শুনছেন।",
          },
        ],
      },
      {
        h: { en: "Anatomy of the Call", bn: "ডাকটির গঠন" },
        p: [
          {
            en: "The call has three parts and not one word of request. First tawhid: la ilaha illa anta, there is no god but You — the truth his people had refused, affirmed by their prophet from the bottom of the sea. Then tanzih: subhanaka, exalted are You — declaring Allah free of any wrong in what had happened; the fault was not in the decree. Last, confession: inni kuntu min az-zalimin, I have been of the wrongdoers — plain ownership of his own share, with no excuse attached.",
            bn: "ডাকটির তিনটি অংশ, অথচ আবেদনের একটি শব্দও নেই। প্রথমে তাওহীদ: 'লা ইলাহা ইল্লা আনতা' — তুমি ছাড়া কোনো ইলাহ নেই — যে সত্য তাঁর জাতি প্রত্যাখ্যান করেছিল, তা তাদের নবী ঘোষণা করলেন সমুদ্রের তলদেশ থেকে। তারপর তানযীহ: 'সুবহানাকা' — তুমি পবিত্র, মহিমান্বিত — যা ঘটেছে তাতে আল্লাহর কোনো অন্যায় নেই বলে ঘোষণা; ত্রুটি ফায়সালায় ছিল না। সবশেষে স্বীকারোক্তি: 'ইন্নী কুনতু মিনায-যালিমীন' — আমি তো জালিমদের অন্তর্ভুক্ত ছিলাম — নিজের অংশটুকুর সরল স্বীকার, কোনো অজুহাত ছাড়া।",
          },
          {
            en: "Notice what is missing: he never says save me. The commentators draw the lesson that the state of the caller outweighs the wording of the demand. He put the praise of Allah and the honest naming of his own fault forward, and left the rescue to the One being praised. 21:88 records the result: so We responded to him and saved him from the grief — and then widens it deliberately: and thus do We save the believers.",
            bn: "লক্ষ করুন কী অনুপস্থিত: তিনি একবারও বলেননি 'আমাকে বাঁচাও'। মুফাসসিরগণ এ থেকে শিক্ষা নেন যে, আহ্বানকারীর অবস্থা আবেদনের শব্দের চেয়ে ভারী। তিনি সামনে রাখলেন আল্লাহর প্রশংসা আর নিজের দোষের সৎ স্বীকৃতি, এবং উদ্ধারের ভার ছেড়ে দিলেন যাঁর প্রশংসা করছেন তাঁর হাতে। 21:88 ফলাফল লিপিবদ্ধ করে: তখন আমরা তাঁর ডাকে সাড়া দিলাম এবং দুশ্চিন্তা থেকে তাঁকে উদ্ধার করলাম — তারপর ইচ্ছাকৃতভাবে তা প্রশস্ত করে দেয়: আর এভাবেই আমরা মুমিনদের উদ্ধার করি।",
          },
        ],
      },
      {
        h: { en: "Because He Was One Who Glorified", bn: "কারণ তিনি ছিলেন তাসবীহকারী" },
        p: [
          {
            en: "37:143-144 give the reason the rescue found him: had he not been of those who glorify Allah, he would have remained in its belly until the Day they are resurrected. The glorifying that saved him in the darkness was the habit he had built in the light. The commentators take this at face value: a stock of remembrance laid down in easy days is what a servant draws on when the hard day arrives without warning.",
            bn: "37:143-144 জানায় উদ্ধার কেন তাঁকে খুঁজে পেল: তিনি যদি তাসবীহকারীদের অন্তর্ভুক্ত না হতেন, তবে পুনরুত্থানের দিন পর্যন্ত তাঁকে মাছের পেটেই থাকতে হতো। অন্ধকারে যে তাসবীহ তাঁকে বাঁচাল, তা ছিল আলোর দিনগুলোতে গড়ে তোলা অভ্যাস। মুফাসসিরগণ এটিকে সোজা অর্থেই নেন: সহজ দিনে জমিয়ে রাখা যিকিরের ভান্ডার থেকেই বান্দা খরচ করে, যখন কঠিন দিন কোনো সতর্কবার্তা ছাড়াই এসে পড়ে।",
          },
          {
            en: "The Quran also fixes how the story must not be used. 68:48 tells the Prophet ﷺ to be patient for his Lord's judgement and not to be like the companion of the fish — the leaving in anger is not the model; the calling from the darkness is. And the ending is mercy multiplied: he was cast ashore sick, shaded by a plant Allah caused to grow, then sent to a hundred thousand or more, and they believed, as 37:145-148 recount.",
            bn: "কুরআন এটাও ঠিক করে দেয়, ঘটনাটি কীভাবে ব্যবহার করা যাবে না। 68:48 নবী ﷺ-কে বলে তাঁর রবের ফায়সালার জন্য ধৈর্য ধরতে এবং মাছের সঙ্গীর মতো না হতে — রাগ করে চলে যাওয়াটা আদর্শ নয়; অন্ধকার থেকে ডাকাটাই আদর্শ। আর সমাপ্তিটি বহুগুণ রহমতের: তাঁকে অসুস্থ অবস্থায় তীরে নিক্ষেপ করা হয়, আল্লাহর গজিয়ে দেওয়া এক গাছ তাঁকে ছায়া দেয়, তারপর তাঁকে পাঠানো হয় এক লক্ষ বা তারও বেশি মানুষের কাছে, এবং তারা ঈমান আনে — যেমন 37:145-148 বর্ণনা করে।",
          },
        ],
      },
      {
        h: { en: "Carrying the Du'a", bn: "দোয়াটি সঙ্গে রাখা" },
        p: [
          {
            en: "At-Tirmidhi relates from Sa'd ibn Abi Waqqas (RA) that the Prophet ﷺ said: the supplication of Dhun-Nun when he called in the belly of the fish — la ilaha illa anta subhanaka inni kuntu min az-zalimin — no Muslim ever supplicates with it for anything except that Allah responds to him. The promise is attached to the words, and through the words to the posture they force on anyone who says them honestly.",
            bn: "তিরমিযী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মাছের পেটে যুন-নূন যে দোয়া দিয়ে ডেকেছিলেন — 'লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নী কুনতু মিনায-যালিমীন' — কোনো মুসলিম কোনো বিষয়ে এই দোয়া করলে আল্লাহ তার ডাকে সাড়া না দিয়ে থাকেন না। প্রতিশ্রুতিটি শব্দগুলোর সঙ্গে বাঁধা, আর শব্দগুলোর মধ্য দিয়ে সেই অবস্থানের সঙ্গে, যা সততার সঙ্গে উচ্চারণকারী যে কাউকে নিতে বাধ্য করে।",
          },
          {
            en: "That posture is the practical teaching. Distress tempts a person toward two false moves: blaming the decree, and excusing the self. This call blocks both in one line — Allah is declared faultless, the self is declared at fault — and the heart that manages both at once has already turned. Say it slowly in hardship, meaning each clause, and let the request stay unspoken; the One addressed knew Yunus (AS) needed rescue before he was asked.",
            bn: "সেই অবস্থানটিই ব্যবহারিক শিক্ষা। বিপদ মানুষকে দুটি ভুল পদক্ষেপের দিকে প্রলুব্ধ করে: ফায়সালাকে দোষ দেওয়া, আর নিজেকে অজুহাত দেওয়া। এই ডাক এক লাইনে দুটোই আটকে দেয় — আল্লাহকে ঘোষণা করা হয় নির্দোষ, নিজেকে ঘোষণা করা হয় দোষী — আর যে হৃদয় একসঙ্গে দুটোই পারে, সে ইতিমধ্যে ফিরে এসেছে। কষ্টের সময় এটি ধীরে বলুন, প্রতিটি অংশের অর্থ বুঝে, আর আবেদনটুকু অনুচ্চারিতই থাকুক; যাঁকে সম্বোধন করা হচ্ছে তিনি ইউনুস (আঃ)-এর উদ্ধারের প্রয়োজন জানতেন চাওয়ার আগেই।",
          },
        ],
      },
    ],
  },
  '20:114': {
    sections: [
      {
        h: { en: "The True King", bn: "প্রকৃত বাদশাহ" },
        p: [
          {
            en: "Fa-ta'ala Allahu al-Malik al-Haqq: exalted is Allah, the King, the Real. The sentence lands at the end of a passage about the Quran itself — 20:113 says He sent it down as an Arabic Quran and turned its warnings through different forms, so that people might gain taqwa or that it might awaken remembrance in them. The exaltation sets the scale: the Book under discussion is the speech of the true Sovereign, not one voice among many.",
            bn: "'ফাতা'আলাল্লাহুল মালিকুল হাক্ক' — মহিমান্বিত আল্লাহ, বাদশাহ, প্রকৃত সত্য। বাক্যটি এসে পড়ে খোদ কুরআন সম্পর্কিত একটি অনুচ্ছেদের শেষে — 20:113 বলে, তিনি এটিকে আরবি কুরআনরূপে নাযিল করেছেন এবং এর সতর্কবাণীগুলো নানা রূপে ঘুরিয়ে-ফিরিয়ে বলেছেন, যাতে মানুষ তাকওয়া অর্জন করে অথবা তা তাদের মধ্যে স্মরণ জাগিয়ে দেয়। এই মহিমা-ঘোষণা মাপকাঠি ঠিক করে দেয়: যে কিতাব নিয়ে কথা হচ্ছে তা প্রকৃত বাদশাহর বাণী — অনেক কণ্ঠের মধ্যে একটি কণ্ঠ নয়।",
          },
          {
            en: "The pairing of the two names deserves a pause. Kings of the earth hold a kingship that is borrowed, partial and ending; al-Haqq is the One whose kingship simply is. Surah Ta-Ha has already shown the alternative at length in Pharaoh, a king whose claim collapsed before Musa (AS). Between the false king defeated and the true King exalted, the surah places one small command about how to receive knowledge.",
            bn: "নাম দুটির জোড় একটু থেমে ভাবার দাবি রাখে। পৃথিবীর রাজাদের রাজত্ব ধার করা, আংশিক ও ফুরিয়ে যাওয়ার; আর আল-হাক্ক তিনিই, যাঁর রাজত্ব স্রেফ আছে — এমনিই। সূরা ত্বা-হা এর বিকল্পটি আগেই বিস্তারিত দেখিয়েছে ফিরআউনের মধ্যে — এক রাজা, মূসা (আঃ)-এর সামনে যার দাবি ভেঙে পড়েছিল। পরাজিত মিথ্যা রাজা আর মহিমান্বিত প্রকৃত বাদশাহর মাঝখানে সূরাটি বসিয়ে দেয় ছোট্ট একটি নির্দেশ — জ্ঞান কীভাবে গ্রহণ করতে হয় সে সম্পর্কে।",
          },
        ],
      },
      {
        h: { en: "Do Not Hasten", bn: "তাড়াহুড়ো কোরো না" },
        p: [
          {
            en: "And do not hasten with the Quran before its revelation to you is completed. The Prophet ﷺ would move his tongue with the revelation as it came down, eager to secure it, fearing it might slip away. Al-Bukhari narrates from Ibn Abbas (RA) that this is what 75:16-19 addressed: do not move your tongue with it to hasten it; upon Us is its collection and its recitation. The commentators read our verse alongside that passage — the same eagerness, the same gentle correction.",
            bn: "আর তোমার প্রতি এর ওহী সম্পূর্ণ হওয়ার আগে কুরআন নিয়ে তাড়াহুড়ো কোরো না। ওহী নাযিল হওয়ার সময় নবী ﷺ তাঁর জিহ্বা নাড়াতেন — তা ধরে রাখার আগ্রহে, হারিয়ে যাওয়ার ভয়ে। বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, 75:16-19 এই বিষয়টিই সম্বোধন করেছিল: তাড়াতাড়ি আয়ত্ত করতে এর সঙ্গে তোমার জিহ্বা নাড়িয়ো না; এর সংরক্ষণ ও পাঠ আমাদেরই দায়িত্বে। মুফাসসিরগণ আমাদের আয়াতটিকে সেই অনুচ্ছেদের পাশে রেখে পড়েন — সেই একই আগ্রহ, সেই একই কোমল সংশোধন।",
          },
          {
            en: "The reassurance behind the command is carried elsewhere too: 87:6 promises, We shall make you recite, and you will not forget. The Prophet ﷺ was not being told to care less about the Quran; he was being told that its preservation did not rest on his hurry. Revelation had a Sender, a schedule and a guarantee, and the receiver's task was to listen fully until his portion was complete.",
            bn: "নির্দেশটির পেছনের আশ্বাসও অন্যত্র বহন করা হয়েছে: 87:6 প্রতিশ্রুতি দেয় — আমরা তোমাকে পড়াব, আর তুমি ভুলবে না। নবী ﷺ-কে কুরআনের প্রতি কম যত্নবান হতে বলা হচ্ছিল না; বলা হচ্ছিল, এর সংরক্ষণ তাঁর তাড়াহুড়োর ওপর নির্ভর করে না। ওহীর একজন প্রেরক ছিলেন, একটি সময়সূচি ছিল, একটি নিশ্চয়তা ছিল — আর গ্রহীতার কাজ ছিল নিজের অংশ সম্পূর্ণ হওয়া পর্যন্ত পুরোপুরি শোনা।",
          },
        ],
      },
      {
        h: { en: "Say: My Lord, Increase Me", bn: "বলো: হে আমার রব, আমাকে বাড়িয়ে দাও" },
        p: [
          {
            en: "Then the remedy for eagerness is given, and it is not suppression but redirection: wa qul rabbi zidni 'ilma — and say, My Lord, increase me in knowledge. Ibn Hajar remarks, commenting on this verse in Fath al-Bari, that Allah did not command His Prophet ﷺ to ask for increase in anything except knowledge. Not wealth, not ease, not standing — knowledge alone is the thing whose growth is made a standing request on the tongue of the best of creation.",
            bn: "তারপর আগ্রহের প্রতিকার দেওয়া হয়, আর তা দমন নয় — মুখ ঘুরিয়ে দেওয়া: 'ওয়া কুল রাব্বি যিদনী ইলমা' — বলো, হে আমার রব, আমার জ্ঞান বাড়িয়ে দাও। ইবনে হাজার 'ফাতহুল বারী'-তে এই আয়াতের ব্যাখ্যায় মন্তব্য করেন, আল্লাহ তাঁর নবী ﷺ-কে জ্ঞান ছাড়া আর কোনো কিছুর বৃদ্ধি চাইতে নির্দেশ দেননি। সম্পদ নয়, স্বাচ্ছন্দ্য নয়, মর্যাদা নয় — একমাত্র জ্ঞানই সেই জিনিস, যার বৃদ্ধিকে সৃষ্টির সেরা মানুষের জিহ্বায় স্থায়ী প্রার্থনা বানিয়ে দেওয়া হয়েছে।",
          },
          {
            en: "The form matters: zidni, increase me, is a verb of continuation. It concedes that knowledge already exists and asks that it keep growing, which makes this a du'a that never expires. The one who knew most among creation was ordered to keep asking; the commentators draw the obvious edge of that: whoever thinks he has finished learning has misread his own position more badly than any other student.",
            bn: "শব্দরূপটিও গুরুত্বপূর্ণ: 'যিদনী' — আমাকে বাড়িয়ে দাও — ধারাবাহিকতার ক্রিয়া। এটি মেনে নেয় যে জ্ঞান ইতিমধ্যে আছে, এবং চায় তা বাড়তে থাকুক — ফলে এ এমন এক দোয়া যার মেয়াদ কখনো ফুরোয় না। সৃষ্টির মধ্যে যিনি সবচেয়ে বেশি জানতেন, তাঁকেই চাইতে থাকার নির্দেশ দেওয়া হয়েছিল; মুফাসসিরগণ এর স্পষ্ট ধারটি তুলে ধরেন: যে ভাবে তার শেখা শেষ, সে নিজের অবস্থান অন্য যেকোনো ছাত্রের চেয়ে বেশি ভুল পড়েছে।",
          },
        ],
      },
      {
        h: { en: "Receiving at Its Own Pace", bn: "জ্ঞান গ্রহণের নিজস্ব গতি" },
        p: [
          {
            en: "Tabari records more than one understanding of the hastening: that the Prophet ﷺ should not recite ahead of Jibril (AS) before a passage was complete, and that he should not ask for revelation ahead of its sending. Both come back to one discipline: receiving must not outrun what has been given. Knowledge from Allah arrives measured, and the measure is His; the student's ambition is honoured, but its timing is not his to set.",
            bn: "তাড়াহুড়োটির একাধিক ব্যাখ্যা তাবারী লিপিবদ্ধ করেন: নবী ﷺ যেন কোনো অংশ সম্পূর্ণ হওয়ার আগে জিবরীল (আঃ)-এর আগে আগে না পড়েন, এবং যেন ওহী পাঠানোর আগে তা চেয়ে না বসেন। দুটোই ফিরে আসে একটি শৃঙ্খলায়: গ্রহণ যেন প্রদত্তকে ছাড়িয়ে না যায়। আল্লাহর কাছ থেকে জ্ঞান আসে মাপা হয়ে, আর মাপটি তাঁরই; ছাত্রের উচ্চাকাঙ্ক্ষা সম্মানিত, কিন্তু তার সময় নির্ধারণ ছাত্রের হাতে নয়।",
          },
          {
            en: "The order within the verse is its own lesson. First the King is exalted, then the hurry is restrained, then the asking is commanded. Sound learning keeps that sequence: reverence for the One who gives knowledge, patience with the pace at which it is given, and hunger turned into supplication. The arrangement guards the learner against the two familiar failures — studying without reverence, and concluding before the matter is complete.",
            bn: "আয়াতের ভেতরের ক্রমটিই একটি শিক্ষা। প্রথমে বাদশাহর মহিমা ঘোষণা, তারপর তাড়াহুড়োর লাগাম, তারপর চাওয়ার নির্দেশ। সুস্থ শিক্ষা সেই ক্রমই রক্ষা করে: যিনি জ্ঞান দেন তাঁর প্রতি সম্ভ্রম, যে গতিতে তা দেওয়া হয় তার প্রতি ধৈর্য, আর ক্ষুধাকে প্রার্থনায় রূপান্তর। এই বিন্যাস শিক্ষার্থীকে দুটি চেনা ব্যর্থতা থেকে রক্ষা করে — সম্ভ্রম ছাড়া পড়া, আর বিষয় সম্পূর্ণ হওয়ার আগে সিদ্ধান্তে পৌঁছানো।",
          },
        ],
      },
      {
        h: { en: "Knowledge Elsewhere in the Quran", bn: "কুরআনের অন্যত্র জ্ঞান" },
        p: [
          {
            en: "The Quran consistently ranks knowledge as a gift rather than a possession. 12:76 states that above every possessor of knowledge there is one more knowing. 4:113 reminds the Prophet ﷺ that Allah taught him what he did not know, and calls His favour upon him great. And 2:255 fixes the proportion: creatures encompass nothing of His knowledge except what He wills. Rabbi zidni 'ilma is the prayer of someone who has understood those proportions.",
            bn: "কুরআন ধারাবাহিকভাবে জ্ঞানকে সম্পত্তি নয়, উপহার হিসেবে স্থান দেয়। 12:76 বলে, প্রত্যেক জ্ঞানীর ওপরে আছেন আরও অধিক জ্ঞানী। 4:113 নবী ﷺ-কে স্মরণ করিয়ে দেয়, আল্লাহ তাঁকে শিখিয়েছেন যা তিনি জানতেন না, এবং তাঁর প্রতি আল্লাহর অনুগ্রহকে বলে মহান। আর 2:255 অনুপাত ঠিক করে দেয়: সৃষ্টিরা তাঁর জ্ঞানের কিছুই আয়ত্ত করতে পারে না, তিনি যা চান তা ছাড়া। 'রাব্বি যিদনী ইলমা' সেই মানুষের দোয়া, যে এই অনুপাতগুলো বুঝেছে।",
          },
          {
            en: "35:28 adds the test of whether knowledge is working: it is those with knowledge among His servants who fear Allah. Increase in 'ilm that does not increase awe is increase in information only. The du'a of this verse asks for the kind that benefits — the kind the Prophet ﷺ himself would request in the morning: Ibn Majah relates from Umm Salamah (RA) that he would ask after Fajr for beneficial knowledge, wholesome provision and accepted deeds.",
            bn: "35:28 যোগ করে জ্ঞান কাজ করছে কি না তার পরীক্ষা: তাঁর বান্দাদের মধ্যে জ্ঞানীরাই আল্লাহকে ভয় করে। যে ইলমের বৃদ্ধি ভয়ভক্তি বাড়ায় না, তা শুধু তথ্যের বৃদ্ধি। এই আয়াতের দোয়া চায় সেই জ্ঞান, যা উপকারে আসে — যে জ্ঞান নবী ﷺ নিজে সকালে চাইতেন: ইবনে মাজাহ উম্মে সালামা (রাঃ) থেকে বর্ণনা করেন, তিনি ফজরের পর চাইতেন উপকারী জ্ঞান, পবিত্র রিযিক ও কবুলযোগ্য আমল।",
          },
        ],
      },
      {
        h: { en: "Living the Verse", bn: "আয়াতটি যাপন করা" },
        p: [
          {
            en: "Practically, the verse sets a habit at both ends of learning. Before it: the du'a, said in the words revealed for it, rabbi zidni 'ilma. After it: restraint — not passing on what is half-heard, not ruling on what is half-read, not summarising a matter before it has finished being said. In an age that rewards the fastest answer, the verse quietly sides with the one who waits until the matter — or the other person — has completed.",
            bn: "ব্যবহারিকভাবে আয়াতটি শেখার দুই প্রান্তেই একটি অভ্যাস বসিয়ে দেয়। আগে: দোয়া — তার জন্য নাযিল হওয়া শব্দেই, 'রাব্বি যিদনী ইলমা'। পরে: সংযম — অর্ধেক শোনা কথা ছড়িয়ে না দেওয়া, অর্ধেক পড়া বিষয়ে রায় না দেওয়া, কথা শেষ হওয়ার আগে সারাংশ না বানানো। যে যুগ দ্রুততম উত্তরকে পুরস্কৃত করে, সেখানে আয়াতটি নীরবে তার পক্ষ নেয়, যে অপেক্ষা করে — বিষয়টি, কিংবা সামনের মানুষটি, শেষ করা পর্যন্ত।",
          },
          {
            en: "And it keeps the learner's ceiling honest. The request has no finishing point, because knowledge has no finishing point; what ends is only the learner's patience or humility. The one who says this du'a daily is confessing that yesterday's understanding was not enough, and asking that today's be more — which is exactly the posture the true King taught the best of His creation ﷺ to keep.",
            bn: "আর এটি শিক্ষার্থীর সীমাকে সৎ রাখে। এই চাওয়ার কোনো শেষবিন্দু নেই, কারণ জ্ঞানের কোনো শেষবিন্দু নেই; শেষ হয় কেবল শিক্ষার্থীর ধৈর্য বা বিনয়। যে প্রতিদিন এই দোয়া বলে, সে স্বীকার করছে গতকালের বোঝাপড়া যথেষ্ট ছিল না, আর চাইছে আজকেরটা যেন আরও বেশি হয় — ঠিক এই অবস্থানটিই প্রকৃত বাদশাহ তাঁর সৃষ্টির সেরা মানুষ ﷺ-কে ধরে রাখতে শিখিয়েছিলেন।",
          },
        ],
      },
    ],
  },
  '65:2-3': {
    sections: [
      {
        h: { en: "A Promise Planted in Law", bn: "আইনের মাঝে রোপিত প্রতিশ্রুতি" },
        p: [
          {
            en: "The famous promise of the way out does not stand in a chapter on trust; it stands in the middle of divorce law. 65:1-2 regulate the waiting period, command that women not be expelled from their homes, and require that a parting be either an honourable keeping or an honourable release, witnessed by two just people. Then, mid-passage, the register lifts: whoever has taqwa of Allah, He will make for him a makhraj, a way out.",
            bn: "উত্তরণের পথের বিখ্যাত প্রতিশ্রুতিটি ভরসা-বিষয়ক কোনো অধ্যায়ে দাঁড়িয়ে নেই; এটি দাঁড়িয়ে আছে তালাকের বিধানের ঠিক মাঝখানে। 65:1-2 ইদ্দতের নিয়ম দেয়, নারীদের ঘর থেকে বের করে না দেওয়ার নির্দেশ দেয়, এবং দাবি করে বিচ্ছেদ হবে হয় সম্মানজনকভাবে রেখে দেওয়া নয়তো সম্মানজনকভাবে ছেড়ে দেওয়া — দুজন ন্যায়পরায়ণ সাক্ষীর উপস্থিতিতে। তারপর, অনুচ্ছেদের মাঝপথে, সুর উঁচুতে ওঠে: যে আল্লাহর তাকওয়া অবলম্বন করে, তিনি তার জন্য করে দেন 'মাখরাজ' — একটি বেরোনোর পথ।",
          },
          {
            en: "The placement is the first lesson. Divorce is the terrain of grief, money, children and the strong temptation to win by wronging; taqwa is hardest exactly there. So the Quran attaches its broadest promise of relief to its narrowest legal setting: the one who keeps Allah's limits when keeping them costs the most is the one the promise names first. The commentators generalise the promise, but they do not forget where it was planted.",
            bn: "এই অবস্থানই প্রথম শিক্ষা। তালাক হলো শোক, অর্থ, সন্তান আর অন্যায় করে জিতে যাওয়ার প্রবল প্রলোভনের ময়দান; তাকওয়া ঠিক সেখানেই সবচেয়ে কঠিন। তাই কুরআন তার সবচেয়ে প্রশস্ত স্বস্তির প্রতিশ্রুতিকে জুড়ে দিয়েছে তার সবচেয়ে সংকীর্ণ আইনি প্রেক্ষাপটে: যে ব্যক্তি আল্লাহর সীমাগুলো রক্ষা করে তখন, যখন রক্ষা করার মূল্য সবচেয়ে বেশি — প্রতিশ্রুতি প্রথমে তারই নাম নেয়। মুফাসসিরগণ প্রতিশ্রুতিটিকে ব্যাপক অর্থ দেন, কিন্তু এটি কোথায় রোপণ করা হয়েছিল তা ভোলেন না।",
          },
        ],
      },
      {
        h: { en: "A Way Out, an Unreckoned Provision", bn: "বেরোনোর পথ, অহিসেবি রিযিক" },
        p: [
          {
            en: "Makhraj is a place of exit — the word assumes a person who feels enclosed. The verse does not deny the tightness; it promises a door in it. Then the provision: min haythu la yahtasib, from where he does not reckon. Yahtasib is from hisab, calculation: the sustenance will arrive from outside the person's own arithmetic — outside the plans, salaries and contingencies he has counted. What taqwa buys is not a bigger calculation but a Provider who is not bound by calculations.",
            bn: "'মাখরাজ' মানে বেরোনোর জায়গা — শব্দটিই ধরে নেয় এমন একজন মানুষকে, যে নিজেকে ঘেরা অবস্থায় পাচ্ছে। আয়াতটি সংকীর্ণতা অস্বীকার করে না; সে সংকীর্ণতার মধ্যেই একটি দরজার প্রতিশ্রুতি দেয়। তারপর রিযিক: 'মিন হাইসু লা ইয়াহতাসিব' — যেখান থেকে সে হিসাব করে না। 'ইয়াহতাসিব' এসেছে 'হিসাব' থেকে: জীবিকা আসবে মানুষের নিজের অঙ্কের বাইরে থেকে — তার গোনা পরিকল্পনা, বেতন আর বিকল্পগুলোর বাইরে থেকে। তাকওয়া যা কিনে দেয় তা আরও বড় কোনো হিসাব নয়, বরং এমন এক রিযিকদাতা, যিনি হিসাবের বাঁধনে বাঁধা নন।",
          },
          {
            en: "The mufassirun keep both scopes of the promise. Narrowly, the one who fears Allah in divorce will be given an exit from its distress and provision after its losses. Broadly — and Ibn Kathir states it this way — whoever has taqwa in whatever he faces, Allah appoints him a way out of every hardship and provides for him from where it never occurred to him. The verse's own grammar, whoever, refuses to stay confined to its occasion.",
            bn: "মুফাসসিরগণ প্রতিশ্রুতির দুটি পরিসরই ধরে রাখেন। সংকীর্ণ অর্থে: যে তালাকের ক্ষেত্রে আল্লাহকে ভয় করে, তাকে দেওয়া হবে সেই দুর্দশা থেকে বেরোনোর পথ আর ক্ষতির পরে রিযিক। ব্যাপক অর্থে — এবং ইবনে কাসীর এভাবেই বলেন — যে যেকোনো পরিস্থিতিতে তাকওয়া অবলম্বন করে, আল্লাহ তার জন্য প্রতিটি সংকট থেকে বেরোনোর পথ নির্ধারণ করেন এবং এমন জায়গা থেকে রিযিক দেন, যা তার কল্পনাতেও আসেনি। আয়াতের নিজস্ব ব্যাকরণ — 'যে কেউ' — নিজেকে তার উপলক্ষে আবদ্ধ রাখতে অস্বীকার করে।",
          },
        ],
      },
      {
        h: { en: "Sufficient for Him", bn: "তার জন্য তিনিই যথেষ্ট" },
        p: [
          {
            en: "65:3 then moves from taqwa to tawakkul: whoever relies upon Allah — He is sufficient for him, hasbuh. Sufficiency is a strong claim. It does not say Allah will help alongside other supports; it says the reliant one has, in Allah, enough. The verse then explains why such a sentence can be signed: Allah accomplishes His purpose — balighu amrih; no intention of His has ever failed to arrive. Reliance is only as sound as the reliability of the one relied upon, and His is absolute.",
            bn: "এরপর 65:3 তাকওয়া থেকে তাওয়াক্কুলে এগোয়: যে আল্লাহর ওপর ভরসা করে — তিনিই তার জন্য যথেষ্ট, 'হাসবুহ'। যথেষ্ট হওয়া একটি জোরালো দাবি। এতে বলা হয়নি আল্লাহ অন্যান্য অবলম্বনের পাশাপাশি সাহায্য করবেন; বলা হয়েছে, ভরসাকারী আল্লাহর মধ্যেই যথেষ্ট পেয়ে গেছে। আয়াতটি তারপর ব্যাখ্যা করে এমন বাক্যে কেন সই করা যায়: আল্লাহ তাঁর উদ্দেশ্য পূর্ণ করেই ছাড়েন — 'বালিগু আমরিহ'; তাঁর কোনো অভিপ্রায় কখনো পৌঁছাতে ব্যর্থ হয়নি। ভরসা ততটাই মজবুত, যতটা নির্ভরযোগ্য সেই সত্তা যাঁর ওপর ভরসা — আর তাঁর নির্ভরযোগ্যতা নিরঙ্কুশ।",
          },
          {
            en: "The closing clause completes it: Allah has set for every thing a qadr, a measure. Relief, provision and hardship all have appointed sizes and appointed times. The commentators read this as the discipline inside the promise: the way out is certain, but its hour is measured, so tawakkul includes waiting without panic. What is scheduled cannot be hurried by anxiety, and what has been measured for you cannot be diverted to anyone else.",
            bn: "সমাপ্তির বাক্যটি একে সম্পূর্ণ করে: আল্লাহ প্রতিটি জিনিসের জন্য একটি 'কাদর' — একটি পরিমাপ — নির্ধারণ করে রেখেছেন। স্বস্তি, রিযিক ও কষ্ট — সবকিছুর নির্ধারিত আকার ও নির্ধারিত সময় আছে। মুফাসসিরগণ এটিকে পড়েন প্রতিশ্রুতির ভেতরের শৃঙ্খলা হিসেবে: বেরোনোর পথ নিশ্চিত, কিন্তু তার ক্ষণ মাপা — তাই তাওয়াক্কুলের মধ্যে আতঙ্কহীন অপেক্ষাও পড়ে। যা সময়সূচিতে বাঁধা, উদ্বেগ তাকে ত্বরান্বিত করতে পারে না; আর যা আপনার জন্য মাপা হয়েছে, তা অন্য কারও দিকে সরানো যায় না।",
          },
        ],
      },
      {
        h: { en: "Taqwa and Tawakkul Together", bn: "তাকওয়া ও তাওয়াক্কুল একসঙ্গে" },
        p: [
          {
            en: "The two verses bind two virtues in order: taqwa in conduct, tawakkul in heart. One without the other limps. Taqwa without tawakkul keeps the limits but carries the terror alone; tawakkul without taqwa trusts Allah while disobeying Him, which is not trust but presumption. 8:29 makes a parallel bargain in other terms: if you have taqwa of Allah, He will grant you a furqan, a criterion, and remove your misdeeds. The gate to Allah's undertakings is on the servant's side of the wall.",
            bn: "আয়াত দুটি দুটি গুণকে ক্রমানুসারে বেঁধে দেয়: আচরণে তাকওয়া, অন্তরে তাওয়াক্কুল। একটিকে ছাড়া অন্যটি খোঁড়ায়। তাওয়াক্কুলহীন তাকওয়া সীমা রক্ষা করে, কিন্তু আতঙ্কের ভার বয় একা; আর তাকওয়াহীন তাওয়াক্কুল আল্লাহর অবাধ্যতা করতে করতে তাঁর ওপর ভরসা করে — যা ভরসা নয়, ধৃষ্টতা। 8:29 অন্য ভাষায় সমান্তরাল একটি চুক্তি পেশ করে: তোমরা যদি আল্লাহর তাকওয়া অবলম্বন করো, তিনি তোমাদের দেবেন 'ফুরকান' — সত্য-মিথ্যা চেনার মানদণ্ড — এবং তোমাদের পাপ মুছে দেবেন। আল্লাহর অঙ্গীকারগুলোর ফটক দেয়ালের বান্দার দিকটাতেই।",
          },
          {
            en: "At-Tirmidhi relates from Umar (RA) that the Prophet ﷺ said: if you relied upon Allah with true reliance, He would provide for you as He provides for the birds — they go out hungry in the morning and return full. The commentators point at the verbs: the birds go out. Tawakkul is not the abandoning of means but the abandoning of dependence upon means; the going out remains, and the reckoning moves to Allah.",
            bn: "তিরমিযী উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: তোমরা যদি আল্লাহর ওপর যথার্থ ভরসায় ভরসা করতে, তিনি তোমাদের রিযিক দিতেন যেভাবে পাখিদের দেন — তারা সকালে খালি পেটে বের হয় আর ভরা পেটে ফেরে। মুফাসসিরগণ ক্রিয়াপদগুলোর দিকে আঙুল দেখান: পাখিরা বের হয়। তাওয়াক্কুল মানে উপায়-উপকরণ ছেড়ে দেওয়া নয়, বরং উপকরণের ওপর নির্ভরতা ছেড়ে দেওয়া; বের হওয়াটা থেকে যায়, আর হিসাবটা চলে যায় আল্লাহর কাছে।",
          },
        ],
      },
      {
        h: { en: "The Surah Keeps Repeating It", bn: "সূরাটি বারবার বলে" },
        p: [
          {
            en: "Surah at-Talaq will not let the theme go. 65:4 promises that whoever has taqwa of Allah, He will make his affair easy for him; 65:5 adds that He will erase his misdeeds and magnify his reward. Three promises within a few verses, each hung on the same condition, each placed between rulings about waiting periods and maintenance. The repetition teaches that ease is not the absence of hard rulings; it is what Allah threads through them for the one who keeps them.",
            bn: "সূরা আত-তালাক বিষয়টি ছাড়ে না। 65:4 প্রতিশ্রুতি দেয়: যে আল্লাহর তাকওয়া অবলম্বন করে, তিনি তার কাজ সহজ করে দেন; 65:5 যোগ করে: তিনি তার পাপ মুছে দেবেন এবং তার প্রতিদান বহুগুণ করবেন। কয়েক আয়াতের মধ্যে তিনটি প্রতিশ্রুতি — প্রতিটি ঝোলানো একই শর্তে, প্রতিটি বসানো ইদ্দত ও ভরণপোষণের বিধানের ফাঁকে ফাঁকে। এই পুনরাবৃত্তি শেখায়: সহজতা মানে কঠিন বিধানের অনুপস্থিতি নয়; সহজতা হলো তা-ই, যা আল্লাহ সেই বিধানগুলোর ভেতর দিয়ে বুনে দেন তার জন্য, যে সেগুলো রক্ষা করে।",
          },
        ],
      },
      {
        h: { en: "Living on the Promise", bn: "প্রতিশ্রুতির ওপর ভর করে চলা" },
        p: [
          {
            en: "The promise has a working shape. In any pressed situation, the verse asks one question first — where, in this exact matter, is taqwa being bent? The unfair clause, the concealed fact, the vengeful word: that bend is the blocked door. Straightening it is not a spiritual extra alongside solving the problem; on the verse's account, it is the solving, because the makhraj is written on the far side of the fear of Allah.",
            bn: "প্রতিশ্রুতিটির একটি কার্যকর রূপ আছে। যেকোনো চাপা পরিস্থিতিতে আয়াতটি প্রথমে একটি প্রশ্ন করে — ঠিক এই বিষয়টিতে তাকওয়া কোথায় বাঁকানো হচ্ছে? অন্যায্য শর্তটি, লুকানো তথ্যটি, প্রতিশোধের কথাটি: সেই বাঁকটিই আটকে থাকা দরজা। সেটি সোজা করা সমস্যা সমাধানের পাশাপাশি কোনো বাড়তি আধ্যাত্মিক কাজ নয়; আয়াতের হিসাবে সেটিই সমাধান, কারণ 'মাখরাজ' লেখা আছে আল্লাহভীতির ওপারে।",
          },
          {
            en: "And the promise disciplines expectation without shrinking it. Expect the way out — the verse guarantees it; do not dictate its route, since the provision comes precisely from where you do not reckon. Many people miss their relief by staring at the one door they had planned. Keep the limits, keep working, keep asking, and let the hour be decided by the measure Allah has set for every thing; He accomplishes His purpose.",
            bn: "আর প্রতিশ্রুতিটি প্রত্যাশাকে সংকুচিত না করেই শৃঙ্খলায় আনে। বেরোনোর পথ প্রত্যাশা করুন — আয়াত তার নিশ্চয়তা দেয়; কিন্তু তার রাস্তা নির্দেশ করে দেবেন না, কারণ রিযিক আসে ঠিক সেখান থেকেই, যেখানকার হিসাব আপনি করেননি। বহু মানুষ নিজের পরিকল্পনা করা একটিমাত্র দরজার দিকে তাকিয়ে থেকে নিজের স্বস্তিটাই হারায়। সীমা রক্ষা করুন, কাজ চালিয়ে যান, চাইতে থাকুন — আর ক্ষণটির সিদ্ধান্ত ছেড়ে দিন সেই পরিমাপের হাতে, যা আল্লাহ প্রতিটি জিনিসের জন্য নির্ধারণ করেছেন; তিনি তাঁর উদ্দেশ্য পূর্ণ করেই ছাড়েন।",
          },
        ],
      },
    ],
  },
  '2:153': {
    sections: [
      {
        h: { en: "An Equipment List", bn: "সরঞ্জামের একটি তালিকা" },
        p: [
          {
            en: "The verse opens with the call the Quran reserves for its own people: O you who believe. What follows is not a ruling but equipment: ista'inu, seek help, bi-s-sabri wa-s-salah, through patience and prayer. The verb concedes something first — that believers will need help, that faith exempts no one from weight. The question the verse answers is not whether hardship comes but what to lean on when it does, and it names two supports: one inward, one enacted.",
            bn: "আয়াতটি শুরু হয় সেই সম্বোধনে, যা কুরআন তার নিজের মানুষদের জন্য তুলে রাখে: হে ঈমানদারগণ। এরপর যা আসে তা কোনো বিধান নয়, সরঞ্জাম: 'ইসতাঈনূ' — সাহায্য চাও — 'বিস-সাবরি ওয়াস-সালাহ' — ধৈর্য ও নামাযের মাধ্যমে। ক্রিয়াপদটি আগে একটি কথা মেনে নেয় — মুমিনদের সাহায্য লাগবে, ঈমান কাউকে ভার থেকে রেহাই দেয় না। আয়াতটি যে প্রশ্নের উত্তর দেয় তা এই নয় যে কষ্ট আসবে কি না, বরং এই যে কষ্ট এলে কীসে ভর দিতে হবে — আর সে দুটি অবলম্বনের নাম নেয়: একটি ভেতরের, একটি কাজে করা।",
          },
          {
            en: "The pairing has already appeared at 2:45, addressed there to the Children of Israel, with the warning that prayer is heavy except for the humble. Repeated now to the believers, it gains an ending the earlier verse lacked: inna Allaha ma'a as-sabirin, Allah is with the patient. The same prescription, but written this time with the companionship attached — as if to say the medicine is old, and the believers are being told what taking it earns.",
            bn: "এই জোড় আগেই এসেছে 2:45 আয়াতে — সেখানে সম্বোধন ছিল বনী ইসরাঈলকে, সঙ্গে সতর্কবার্তা: নামায ভারী, বিনয়ীদের ছাড়া। এখন মুমিনদের কাছে পুনরাবৃত্ত হয়ে এটি এমন এক সমাপ্তি পায়, যা আগের আয়াতে ছিল না: 'ইন্নাল্লাহা মাআস-সাবিরীন' — আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। সেই একই ব্যবস্থাপত্র, কিন্তু এবার লেখা হয়েছে সাহচর্যটুকু জুড়ে দিয়ে — যেন বলা হচ্ছে: ওষুধটি পুরোনো, আর মুমিনদের জানানো হচ্ছে তা সেবনে কী অর্জিত হয়।",
          },
        ],
      },
      {
        h: { en: "What Sabr Is", bn: "সবর কী" },
        p: [
          {
            en: "Sabr in Arabic is confinement: holding the self in place. The scholars — as-Sa'di lays it out — divide it into three: patience upon obedience until it is done, patience away from sin until it passes, and patience under the decree without rage at it. All three are active. Nothing in the word means passivity; the person of sabr is holding a line under pressure, which is the opposite of doing nothing.",
            bn: "আরবিতে 'সবর' মানে আটকে রাখা: নিজেকে জায়গায় ধরে রাখা। আলিমগণ — আস-সা'দী তা গুছিয়ে বলেন — একে তিন ভাগে ভাগ করেন: আনুগত্যের ওপর ধৈর্য, যতক্ষণ না তা সম্পন্ন হয়; পাপ থেকে দূরে থাকার ধৈর্য, যতক্ষণ না তা কেটে যায়; আর তাকদীরের অধীনে ধৈর্য — তার বিরুদ্ধে ক্ষোভ না করে। তিনটিই সক্রিয়। শব্দটির কোথাও নিষ্ক্রিয়তার অর্থ নেই; সবরকারী মানুষ চাপের মুখে একটি অবস্থান ধরে রাখছে — যা কিছু না করার ঠিক বিপরীত।",
          },
          {
            en: "Ya'qub (AS) models a crucial distinction: he vowed beautiful patience in 12:83, and in 12:86 said, I only complain of my anguish and my grief to Allah. Complaint to Allah does not break sabr; complaint against Allah does. Nor do tears break it: the Prophet ﷺ wept when his son Ibrahim died and said the eye weeps and the heart grieves, but we say only what pleases our Lord — al-Bukhari relates it from Anas (RA).",
            bn: "ইয়াকুব (আঃ) একটি গুরুত্বপূর্ণ পার্থক্যের নমুনা দেখান: তিনি 12:83 আয়াতে সুন্দর ধৈর্যের অঙ্গীকার করেন, আর 12:86 আয়াতে বলেন — আমি আমার অস্থিরতা ও দুঃখের অভিযোগ কেবল আল্লাহর কাছেই করছি। আল্লাহর কাছে অভিযোগ সবর ভাঙে না; আল্লাহর বিরুদ্ধে অভিযোগ ভাঙে। অশ্রুও তা ভাঙে না: পুত্র ইবরাহীমের মৃত্যুতে নবী ﷺ কেঁদেছিলেন এবং বলেছিলেন — চোখ অশ্রু ঝরায়, হৃদয় শোক করে, কিন্তু আমরা কেবল তা-ই বলি যা আমাদের রবকে সন্তুষ্ট করে — বুখারী এটি আনাস (রাঃ) থেকে বর্ণনা করেন।",
          },
        ],
      },
      {
        h: { en: "Prayer as Help", bn: "সাহায্য হিসেবে নামায" },
        p: [
          {
            en: "The second support is salah — named here not as duty but as help. Prayer helps in a way the praying person can verify: it interrupts the siege. Five times a day the matter that fills the horizon is set down, the body is placed before Allah, and the words of 1:5 — You alone we worship, You alone we ask for help — are said by someone who currently means them. Abu Dawud relates that when a matter distressed the Prophet ﷺ, he hastened to prayer.",
            bn: "দ্বিতীয় অবলম্বন সালাত — এখানে তার নাম নেওয়া হয়েছে কর্তব্য হিসেবে নয়, সাহায্য হিসেবে। নামায এমনভাবে সাহায্য করে, যা নামাযি নিজে যাচাই করতে পারে: এটি অবরোধ ভেঙে দেয়। দিনে পাঁচবার দিগন্তজোড়া সমস্যাটি নামিয়ে রাখা হয়, দেহকে আল্লাহর সামনে দাঁড় করানো হয়, আর 1:5 আয়াতের শব্দগুলো — আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই কাছে সাহায্য চাই — উচ্চারণ করে এমন একজন, যে এই মুহূর্তে সত্যিই তা বোঝাতে চাইছে। আবু দাউদ বর্ণনা করেন, কোনো বিষয় নবী ﷺ-কে পীড়িত করলে তিনি দ্রুত নামাযে চলে যেতেন।",
          },
          {
            en: "The commentators note the order of the pair: sabr, then salah — the general steadying, then the specific refuge. And they note what prayer presumes: that in hardship the first movement is toward Allah, not merely toward solutions. The one who prays about a problem has already refused to face it alone, and that refusal, repeated five times daily, is itself a treatment for the despair that isolation manufactures.",
            bn: "মুফাসসিরগণ জোড়টির ক্রম লক্ষ করেন: আগে সবর, পরে সালাত — প্রথমে সাধারণ স্থিরতা, তারপর নির্দিষ্ট আশ্রয়। আর তাঁরা লক্ষ করেন নামায কী ধরে নেয়: কষ্টের সময় প্রথম পদক্ষেপ আল্লাহর দিকে, শুধু সমাধানের দিকে নয়। যে ব্যক্তি কোনো সমস্যা নিয়ে নামাযে দাঁড়ায়, সে ইতিমধ্যে একা তার মুখোমুখি হতে অস্বীকার করেছে — আর দিনে পাঁচবার পুনরাবৃত্ত সেই অস্বীকৃতিই একাকীত্বের তৈরি হতাশার একটি চিকিৎসা।",
          },
        ],
      },
      {
        h: { en: "With the Patient", bn: "ধৈর্যশীলদের সঙ্গে" },
        p: [
          {
            en: "Inna Allaha ma'a as-sabirin. The scholars distinguish two kinds of withness in the Quran: the general one of knowledge — He is with you wherever you are, as 57:4 says — and a special one of support and protection reserved for particular servants. This verse states the special kind. It is a companionship of aid: help, steadying and care attached to the patient specifically, while His knowledge already covered everyone. The patient person is not merely observed; he is accompanied.",
            bn: "'ইন্নাল্লাহা মাআস-সাবিরীন'। আলিমগণ কুরআনে দুই ধরনের 'সঙ্গে থাকা'র পার্থক্য করেন: জ্ঞানের সাধারণ সাহচর্য — তোমরা যেখানেই থাকো তিনি তোমাদের সঙ্গে আছেন, যেমন 57:4 বলে — আর সমর্থন ও হেফাজতের এক বিশেষ সাহচর্য, যা নির্দিষ্ট বান্দাদের জন্য তুলে রাখা। এই আয়াতে বলা হয়েছে বিশেষটির কথা। এটি সাহায্যের সাহচর্য: সহায়তা, স্থিরতা ও তত্ত্বাবধান — বিশেষভাবে ধৈর্যশীলদের সঙ্গে জোড়া, যেখানে তাঁর জ্ঞান তো আগেই সবাইকে ঘিরে রেখেছে। ধৈর্যশীল মানুষ কেবল পর্যবেক্ষিত নয়; সে সঙ্গপ্রাপ্ত।",
          },
          {
            en: "The verse's neighbours show why the equipment was issued here. 2:154 corrects how the believers speak of those killed in Allah's path. 2:155 promises testing with fear, hunger and loss of wealth, lives and fruits, and sends glad tidings — to the patient. 2:156-157 then hand them their sentence for calamity, inna lillahi wa inna ilayhi raji'un, and name the return: salawat from their Lord, and mercy, and it is they who are guided.",
            bn: "আয়াতটির প্রতিবেশীরা দেখায়, সরঞ্জামটি এখানে কেন সরবরাহ করা হলো। 2:154 শুধরে দেয়, আল্লাহর পথে নিহতদের সম্পর্কে মুমিনরা কীভাবে কথা বলবে। 2:155 প্রতিশ্রুতি দেয় ভয়, ক্ষুধা এবং সম্পদ, জীবন ও ফল-ফসলের ক্ষতি দিয়ে পরীক্ষার — আর সুসংবাদ পাঠায় ধৈর্যশীলদের কাছে। এরপর 2:156-157 তাদের হাতে তুলে দেয় বিপদের সময়ের বাক্য — 'ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন' — এবং প্রতিদানের নাম বলে: তাদের রবের পক্ষ থেকে সালাওয়াত ও রহমত, আর তারাই হিদায়াতপ্রাপ্ত।",
          },
        ],
      },
      {
        h: { en: "The Believer's Whole Weather", bn: "মুমিনের সব ঋতু" },
        p: [
          {
            en: "Muslim relates from Suhayb (RA) that the Prophet ﷺ said: wondrous is the affair of the believer, for all of his affair is good, and that belongs to no one but the believer — if ease reaches him he is grateful, and that is good for him; if harm reaches him he is patient, and that is good for him. Between that hadith and this verse, no weather is wasted on a believer; both halves of life have a productive response.",
            bn: "মুসলিম সুহাইব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মুমিনের ব্যাপারটি আশ্চর্যের — তার সব ব্যাপারই কল্যাণের, আর তা মুমিন ছাড়া আর কারও জন্য নয় — স্বাচ্ছন্দ্য এলে সে শোকর করে, তা তার জন্য কল্যাণ; ক্ষতি পৌঁছালে সে সবর করে, তা-ও তার জন্য কল্যাণ। এই হাদীস আর এই আয়াত মিলিয়ে দেখলে, মুমিনের কোনো ঋতুই নষ্ট হয় না; জীবনের দুই অর্ধেকেরই একটি ফলদায়ক জবাব আছে।",
          },
        ],
      },
      {
        h: { en: "Practising the Pair", bn: "জোড়টির অনুশীলন" },
        p: [
          {
            en: "The verse's practice is concrete because its nouns are concrete. When the hard thing arrives: first, hold — do not resign, retaliate, publish or decide in the first surge; that holding is sabr. Second, pray — not eventually, but as the Prophet ﷺ did, moving toward salah while the matter is still hot. The order of operations fits how a person actually breaks: speech first, then despair; so the verse steadies the tongue first and then fills it with prayer.",
            bn: "আয়াতটির অনুশীলন সুনির্দিষ্ট, কারণ এর শব্দগুলো সুনির্দিষ্ট। কঠিন জিনিসটি এসে পড়লে: প্রথমে, ধরে রাখুন — প্রথম ঢেউয়ের মধ্যে হাল ছাড়বেন না, প্রতিশোধ নেবেন না, প্রচার করবেন না, সিদ্ধান্তও নেবেন না; সেই ধরে রাখাটাই সবর। দ্বিতীয়ত, নামায পড়ুন — 'পরে কখনো' নয়, বরং নবী ﷺ যেমন করতেন — বিষয়টি তেতে থাকা অবস্থাতেই সালাতের দিকে এগিয়ে। কাজের এই ক্রম মানুষের ভেঙে পড়ার প্রকৃত ধরনটির সঙ্গে মেলে: আগে মুখ, তারপর হতাশা; তাই আয়াতটি আগে জিহ্বাকে স্থির করে, তারপর তাকে দোয়ায় পূর্ণ করে।",
          },
          {
            en: "And carry the ending as the point: Allah is with the patient. Patience in the Quran is never a lonely road; it is the most accompanied road there is. The relief may be slow, and the test may not lift — 2:155 promised testing, not exemption — but the company is immediate, from the first moment of holding on. That is the exchange the patient have always judged worthwhile: hardship with Him over ease without Him.",
            bn: "আর সমাপ্তিটিকে মূল কথা হিসেবে বহন করুন: আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআনে ধৈর্য কখনো নিঃসঙ্গ পথ নয়; বরং এটিই সবচেয়ে বেশি সঙ্গপ্রাপ্ত পথ। স্বস্তি ধীরে আসতে পারে, পরীক্ষা না-ও উঠতে পারে — 2:155 পরীক্ষারই প্রতিশ্রুতি দিয়েছিল, অব্যাহতির নয় — কিন্তু সাহচর্যটি তাৎক্ষণিক, ধরে রাখার প্রথম মুহূর্ত থেকেই। এটিই সেই বিনিময়, যা ধৈর্যশীলরা বরাবর লাভজনক বিবেচনা করে এসেছে: তাঁকে ছাড়া স্বাচ্ছন্দ্যের চেয়ে তাঁর সঙ্গে কষ্ট।",
          },
        ],
      },
    ],
  },
  '29:45': {
    sections: [
      {
        h: { en: "Two Commands and a Promise", bn: "দুটি নির্দেশ ও একটি প্রতিশ্রুতি" },
        p: [
          {
            en: "The verse gives the Prophet ﷺ, and every reader after him, two standing commands: utlu — recite what has been revealed to you of the Book — and aqimi as-salah, establish the prayer. Then it attaches a promise to the second: inna as-salata tanha 'ani al-fahsha'i wa-l-munkar, the prayer restrains from shameful deeds and from wrong. Recitation feeds the prayer, and the prayer guards the conduct; the verse wires the Book, the worship and the behaviour into one circuit.",
            bn: "আয়াতটি নবী ﷺ-কে, এবং তাঁর পরের প্রতিটি পাঠককে, দুটি স্থায়ী নির্দেশ দেয়: 'উতলু' — কিতাব থেকে তোমার প্রতি যা ওহী করা হয়েছে তা তিলাওয়াত করো — এবং 'আকিমিস-সালাহ' — নামায কায়েম করো। তারপর দ্বিতীয়টির সঙ্গে একটি প্রতিশ্রুতি জুড়ে দেয়: 'ইন্নাস-সালাতা তানহা আনিল-ফাহশায়ি ওয়াল-মুনকার' — নামায অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে। তিলাওয়াত নামাযকে খাবার জোগায়, আর নামায আচরণ পাহারা দেয়; আয়াতটি কিতাব, ইবাদত ও আচরণকে একটি বর্তনীতে জুড়ে দেয়।",
          },
          {
            en: "The setting sharpens it. Surah al-'Ankabut is Meccan and opens at 29:2 with the announcement that people will be tested in their claim of faith; around this verse the surah is arguing with deniers. In that pressure, the resources prescribed for the Prophet ﷺ are not new arguments but tilawah and salah — and salah is the same refuge 2:153 and 20:132 reach for in hardship, each pairing it there with sabr. What steadies the arguer is not more argument; it is contact with the One argued for.",
            bn: "প্রেক্ষাপট একে ধারালো করে। সূরা আল-আনকাবূত মক্কী, এবং 29:2 আয়াতে এই ঘোষণা দিয়ে শুরু হয় যে মানুষকে তাদের ঈমানের দাবিতে পরীক্ষা করা হবে; এই আয়াতের চারপাশে সূরাটি অস্বীকারকারীদের সঙ্গে বিতর্ক করছে। সেই চাপের মধ্যে নবী ﷺ-এর জন্য নির্ধারিত সম্বল নতুন কোনো যুক্তি নয়, বরং তিলাওয়াত ও সালাত — আর কষ্টের সময় 2:153 ও 20:132 সেই সালাতের দিকেই হাত বাড়ায়, দুই জায়গাতেই তার সঙ্গে জোড়া বাঁধে সবর। বিতর্ককারীকে যা স্থির রাখে তা আরও বিতর্ক নয়; বরং যাঁর পক্ষে বিতর্ক, তাঁর সঙ্গে সংযোগ।",
          },
        ],
      },
      {
        h: { en: "Establish, Not Perform", bn: "কায়েম করা, সারা নয়" },
        p: [
          {
            en: "The command is aqim — set upright — not merely 'pray'. The mufassirun read in it the difference between discharging a duty and establishing a practice: on time, with its conditions, its stillness and its presence of heart. The promise of restraint in the next clause belongs to prayer established, not prayer performed anyhow. That distinction spares the verse from the obvious objection — that some people pray and still transgress — by asking what kind of prayer theirs is.",
            bn: "নির্দেশটি 'আকিম' — খাড়া করে দাঁড় করানো — নিছক 'নামায পড়ো' নয়। মুফাসসিরগণ এর মধ্যে পড়েন দায় সারা আর চর্চা কায়েম করার পার্থক্য: সময়মতো, তার শর্তাবলি, তার স্থিরতা ও অন্তরের উপস্থিতিসহ। পরের বাক্যের বিরত রাখার প্রতিশ্রুতিটি কায়েম করা নামাযের প্রাপ্য — যেনতেনভাবে সারা নামাযের নয়। এই পার্থক্যই আয়াতটিকে চেনা আপত্তি থেকে বাঁচায় — কেউ কেউ তো নামায পড়েও সীমা লঙ্ঘন করে — পাল্টা প্রশ্ন তুলে: তাদের নামাযটি কেমন নামায?",
          },
          {
            en: "Fahsha' covers the shameless acts; munkar is broader — whatever sound nature and the law together reject. Tanha, restrains, is the verb of a prohibitor: the prayer itself is pictured as forbidding its person, standing between him and what disgraces him. Five appointments a day with the One who sees him retrain what a person can comfortably do with the hours in between; whoever genuinely keeps meeting Allah at dawn finds certain deeds at midnight harder to sit in.",
            bn: "'ফাহশা' ঢাকে নির্লজ্জ কাজগুলোকে; 'মুনকার' আরও প্রশস্ত — সুস্থ স্বভাব ও শরীয়ত মিলে যা কিছু প্রত্যাখ্যান করে। 'তানহা' — বিরত রাখে — একজন নিষেধকারীর ক্রিয়া: নামাযকেই চিত্রিত করা হয়েছে তার মানুষটিকে নিষেধকারী রূপে — তার এবং তাকে অপমানিত করে এমন সবকিছুর মাঝখানে দাঁড়ানো। যিনি তাকে দেখছেন তাঁর সঙ্গে দিনে পাঁচটি সাক্ষাৎ বদলে দেয় মাঝের ঘণ্টাগুলোতে মানুষ স্বচ্ছন্দে কী করতে পারে; যে সত্যিই ভোরে আল্লাহর সঙ্গে সাক্ষাৎ চালিয়ে যায়, মধ্যরাতের কিছু কাজে বসে থাকা তার জন্য কঠিন হয়ে ওঠে।",
          },
        ],
      },
      {
        h: { en: "How Prayer Restrains", bn: "নামায কীভাবে বিরত রাখে" },
        p: [
          {
            en: "The restraint works by repetition and by memory. Repetition: wrongdoing needs privacy and forgetfulness, and an established prayer dismantles both on a fixed schedule — 20:14 ties the two openly: establish the prayer for My remembrance. Memory: the one standing in prayer rehearses, five times daily, who is watching, and that rehearsal follows him out. 70:19-23 draw the same portrait from the other side: man is anxious and grasping — except the praying ones, those who are constant at their prayer.",
            bn: "এই বিরত রাখা কাজ করে পুনরাবৃত্তি ও স্মরণের মাধ্যমে। পুনরাবৃত্তি: অন্যায়ের দরকার গোপনীয়তা ও বিস্মৃতি, আর কায়েম করা নামায নির্দিষ্ট সময়সূচিতে দুটোই ভেঙে দেয় — 20:14 দুটিকে খোলাখুলি বাঁধে: আমার স্মরণের জন্য নামায কায়েম করো। স্মরণ: নামাযে দাঁড়ানো মানুষ দিনে পাঁচবার মহড়া দেয় কে দেখছেন, আর সেই মহড়া তার পিছু পিছু বাইরে আসে। 70:19-23 উল্টো দিক থেকে একই ছবি আঁকে: মানুষ অস্থির ও আঁকড়ে ধরা স্বভাবের — নামাযিরা ছাড়া, যারা নিজেদের নামাযে অবিচল।",
          },
          {
            en: "Al-Bukhari relates from Abu Hurayrah (RA) that the Prophet ﷺ asked: if a river ran at the door of one of you and he bathed in it five times every day, would any dirt remain on him? They said none. He said: that is the likeness of the five prayers, by which Allah erases sins. Erasure and restraint are two services of the same appointment — what prayer does not prevent, prayer washes, so long as the appointment is kept.",
            bn: "বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ জিজ্ঞেস করলেন: তোমাদের কারও দরজায় যদি একটি নদী বইত আর সে তাতে প্রতিদিন পাঁচবার গোসল করত, তার গায়ে কি কোনো ময়লা থাকত? তাঁরা বললেন: কিছুই না। তিনি বললেন: এ-ই পাঁচ ওয়াক্ত নামাযের উপমা, যা দিয়ে আল্লাহ গুনাহ মুছে দেন। মুছে দেওয়া ও বিরত রাখা একই সাক্ষাতের দুটি সেবা — নামায যা ঠেকায় না, নামায তা ধুয়ে দেয়, যতক্ষণ সাক্ষাৎটি বজায় থাকে।",
          },
        ],
      },
      {
        h: { en: "The Remembrance of Allah, Greater", bn: "আল্লাহর স্মরণই মহত্তর" },
        p: [
          {
            en: "Wa-la-dhikru Allahi akbar. The early commentators, as Tabari records, gave the clause more than one sense, and each stands. From Ibn Abbas (RA): Allah's remembrance of you is greater than your remembrance of Him. Others: the remembrance of Allah inside the prayer is greater than its other parts; or, remembrance of Allah is itself the greatest restrainer, beyond even the prayer's restraint. The phrase is wide enough that the mufassirun could hold these together rather than choose.",
            bn: "'ওয়া-লাযিকরুল্লাহি আকবার'। প্রাথমিক যুগের মুফাসসিরগণ, তাবারী যেমন লিপিবদ্ধ করেন, বাক্যাংশটির একাধিক অর্থ দিয়েছেন, এবং প্রতিটিই টেকে। ইবনে আব্বাস (রাঃ) থেকে: তোমাদের প্রতি আল্লাহর স্মরণ, তাঁর প্রতি তোমাদের স্মরণের চেয়ে মহত্তর। অন্যরা: নামাযের ভেতরে আল্লাহর যিকিরই তার অন্য অংশগুলোর চেয়ে মহত্তর; অথবা, আল্লাহর যিকির নিজেই সবচেয়ে বড় নিবারক — এমনকি নামাযের নিবারণকেও ছাড়িয়ে। বাক্যাংশটি এতটাই প্রশস্ত যে মুফাসসিরগণ বেছে নেওয়ার বদলে এগুলোকে একসঙ্গে ধরে রাখতে পেরেছেন।",
          },
          {
            en: "Whichever is read, the clause reorders ambitions. If His remembrance of you outweighs yours of Him, then dhikr is answered attention, not a call into a void. If dhikr is the prayer's core, then the goal inside every rak'ah is the remembering, not the completing. And if dhikr restrains more than anything, then the tongue and heart carry a portable guard between prayers. The verse closes on watchfulness either way: and Allah knows what you do.",
            bn: "যেটিই পড়া হোক, বাক্যাংশটি উচ্চাকাঙ্ক্ষার ক্রম বদলে দেয়। তোমার প্রতি তাঁর স্মরণ যদি তাঁর প্রতি তোমার স্মরণের চেয়ে ভারী হয়, তবে যিকির হলো সাড়া পাওয়া মনোযোগ — শূন্যে ছোড়া ডাক নয়। যিকির যদি নামাযের মর্মবস্তু হয়, তবে প্রতিটি রাকাতের ভেতরের লক্ষ্য স্মরণ করা — শেষ করা নয়। আর যিকির যদি সবকিছুর চেয়ে বেশি বিরত রাখে, তবে জিহ্বা ও অন্তর নামাযগুলোর মাঝের সময়ে একটি বহনযোগ্য প্রহরী সঙ্গে রাখে। যেভাবেই হোক, আয়াতটি শেষ হয় সতর্ক দৃষ্টিতে: আর তোমরা যা করো আল্লাহ তা জানেন।",
          },
        ],
      },
      {
        h: { en: "When Prayer Seems Not to Work", bn: "নামায যখন কাজ করছে বলে মনে হয় না" },
        p: [
          {
            en: "The honest question — I pray and still sin — is answered from inside the verse. The claim is about prayer established: presence, correctness, constancy. To the degree those rise, the restraint rises; a prayer that is all shell restrains like a shell. The direction of repair is therefore not to doubt the promise or drop the prayer, but to establish it further — earlier, stiller, better understood — and to let 107:4-5, woe to those heedless of their prayer, describe the failure honestly.",
            bn: "সৎ প্রশ্নটির — আমি নামায পড়ি তবু গুনাহ করি — উত্তর আয়াতের ভেতর থেকেই আসে। দাবিটি কায়েম করা নামায সম্পর্কে: উপস্থিতি, শুদ্ধতা, নিয়মানুবর্তিতা। এগুলো যত বাড়ে, বিরত রাখাও তত বাড়ে; যে নামায পুরোটাই খোলস, সে খোলসের মতোই বিরত রাখে। তাই মেরামতের দিকটি প্রতিশ্রুতিতে সন্দেহ করা বা নামায ছেড়ে দেওয়া নয়, বরং তাকে আরও কায়েম করা — আরও আগে, আরও স্থির, আরও বুঝে — আর 107:4-5 আয়াতকে — দুর্ভোগ সেই নামাযিদের, যারা নিজেদের নামাযে উদাসীন — ব্যর্থতাটির সৎ বর্ণনা হতে দেওয়া।",
          },
        ],
      },
      {
        h: { en: "The Daily Circuit", bn: "দৈনিক বর্তনী" },
        p: [
          {
            en: "Lived, the verse is a maintenance schedule. Recite daily — the Book is the prayer's fuel, and the verse put tilawah first. Guard the five on time — establishment begins with punctuality, whatever else follows. Then audit conduct against prayer: when a sin repeats, examine the salah before the circumstance, because the verse has tied them. And thread dhikr through the gaps, since the greater thing needs no wudu, no direction and no fixed hour.",
            bn: "যাপনের স্তরে আয়াতটি একটি রক্ষণাবেক্ষণ-সূচি। প্রতিদিন তিলাওয়াত করুন — কিতাবই নামাযের জ্বালানি, আর আয়াতটি তিলাওয়াতকে আগে রেখেছে। পাঁচ ওয়াক্ত সময়মতো রক্ষা করুন — কায়েম করা শুরু হয় সময়ানুবর্তিতা দিয়ে, বাকি যা-ই আসুক। তারপর আচরণকে নামাযের বিপরীতে নিরীক্ষা করুন: কোনো গুনাহ বারবার ফিরলে পরিস্থিতির আগে সালাতটি পরীক্ষা করুন, কারণ আয়াত এ দুটিকে বেঁধে দিয়েছে। আর ফাঁকগুলোতে যিকির বুনে দিন, কারণ মহত্তর জিনিসটির জন্য অযু লাগে না, কিবলা লাগে না, নির্দিষ্ট সময়ও লাগে না।",
          },
          {
            en: "The end of the verse quietly closes the loop: wa-Allahu ya'lamu ma tasna'un, Allah knows what you do. The same knowledge that makes sin shameful makes hidden fidelity worthwhile. No one else may ever see the recitation before dawn or the wrong turned down at midday; the last clause says the only audience that mattered saw both, and that the prayer, the restraint and the remembrance were all witnessed by Him.",
            bn: "আয়াতের শেষাংশ নীরবে বৃত্তটি বন্ধ করে: 'ওয়াল্লাহু ইয়ালামু মা তাসনাউন' — তোমরা যা করো আল্লাহ তা জানেন। যে জ্ঞান গুনাহকে লজ্জাজনক করে, সেই একই জ্ঞান গোপন বিশ্বস্ততাকে মূল্যবান করে। ভোরের আগের তিলাওয়াত কিংবা দুপুরে ফিরিয়ে দেওয়া অন্যায়ের প্রস্তাব — অন্য কেউ হয়তো কোনোদিনই দেখবে না; শেষ বাক্যটি বলে, যে দর্শকের দেখা জরুরি ছিল তিনি দুটোই দেখেছেন — আর নামায, বিরত থাকা ও স্মরণ, সবকিছুরই সাক্ষী তিনি।",
          },
        ],
      },
    ],
  },
  '66:8': {
    sections: [
      {
        h: { en: "A Command to Turn Back", bn: "ফিরে আসার নির্দেশ" },
        p: [
          {
            en: "The address is to those who already believe: O you who believe, turn to Allah in repentance — tubu ila Allahi tawbatan nasuha. That addressing settles a question before it is asked: tawbah is not the door by which outsiders enter and insiders forget; it is standing business for believers. The Prophet ﷺ himself said, in what Muslim relates, that he turned to Allah in repentance a hundred times in a day. Repentance here is not an emergency exit but a discipline.",
            bn: "সম্বোধনটি তাদের প্রতি, যারা ইতিমধ্যে ঈমান এনেছে: হে ঈমানদারগণ, আল্লাহর কাছে তওবা করো — 'তূবূ ইলাল্লাহি তাওবাতান নাসূহা'। এই সম্বোধনই প্রশ্ন ওঠার আগে তার মীমাংসা করে দেয়: তওবা এমন দরজা নয় যা দিয়ে বাইরের মানুষ ঢোকে আর ভেতরের মানুষ ভুলে যায়; এটি মুমিনদের নিয়মিত কারবার। নবী ﷺ নিজেই বলেছেন — মুসলিম যা বর্ণনা করেন — তিনি দিনে একশো বার আল্লাহর কাছে তওবা করতেন। এখানে তওবা কোনো জরুরি নির্গমন পথ নয়, বরং একটি শৃঙ্খলা।",
          },
          {
            en: "The surah's opening gives the command its edge. At-Tahrim begins with a household matter involving the Prophet's ﷺ wives; 66:4 calls two of them to turn to Allah, for their hearts had inclined. If tawbah is asked of the mothers of the believers in the Prophet's ﷺ own house, then 66:8, widening it to every believer, is not a rebuke reserved for great sinners but the shared road of the best of people.",
            bn: "সূরার শুরু নির্দেশটিকে তার ধার দেয়। আত-তাহরীম শুরু হয় নবী ﷺ-এর স্ত্রীদের সংশ্লিষ্ট একটি গৃহস্থালি বিষয় দিয়ে; 66:4 তাঁদের দুজনকে আল্লাহর দিকে ফিরতে বলে, কারণ তাঁদের হৃদয় ঝুঁকে পড়েছিল। নবী ﷺ-এর নিজের ঘরে মুমিনদের মায়েদের কাছেই যদি তওবা চাওয়া হয়, তবে 66:8 — যা একে প্রতিটি মুমিনের জন্য প্রশস্ত করে — বড় পাপীদের জন্য তুলে রাখা কোনো ভর্ৎসনা নয়, বরং শ্রেষ্ঠ মানুষদেরও অভিন্ন পথ।",
          },
        ],
      },
      {
        h: { en: "What Nasuh Means", bn: "নাসূহ মানে কী" },
        p: [
          {
            en: "Nasuh is from the root of nush, sincerity — the same root as the counsel a true friend gives. A tawbah nasuha is one that is sincere toward its owner: it advises him truly by actually severing him from the sin. Tabari relates from Umar (RA) that it is to repent from the wrong and then never return to it. The definitions the commentators gather circle one centre: an inward truthfulness that shows itself as an outward break.",
            bn: "'নাসূহ' এসেছে 'নুসহ' — আন্তরিকতা — ধাতু থেকে; সত্যিকারের বন্ধু যে উপদেশ দেয়, সেটিও একই ধাতুর। 'তাওবাতান নাসূহা' হলো সেই তওবা, যা তার মালিকের প্রতি আন্তরিক: সে তাকে সত্যিকারের উপদেশ দেয় — তাকে পাপ থেকে সত্যিই বিচ্ছিন্ন করে দিয়ে। তাবারী উমর (রাঃ) থেকে বর্ণনা করেন: তা হলো অন্যায় থেকে তওবা করা, তারপর আর কখনো তাতে ফিরে না যাওয়া। মুফাসসিরগণ যে সংজ্ঞাগুলো জড়ো করেন, সেগুলো একটিই কেন্দ্র ঘিরে ঘোরে: এমন এক ভেতরের সত্যবাদিতা, যা বাইরের ছেদ হয়ে প্রকাশ পায়।",
          },
          {
            en: "The scholars formalised the parts. An-Nawawi states them: leave the sin, regret its commission, resolve firmly not to return; and if the wrong involved the right of another person, restore that right or seek his pardon. What the conditions exclude is precisely the counterfeit — the apology that plans its own repetition. The verse's single adjective, nasuha, was already excluding it: a repentance that intends to come back was never sincere counsel to its owner.",
            bn: "আলিমগণ অংশগুলোকে সূত্রবদ্ধ করেছেন। আন-নববী সেগুলো বলেন: পাপটি ছেড়ে দেওয়া, তা করার জন্য অনুতপ্ত হওয়া, ফিরে না যাওয়ার দৃঢ় সংকল্প করা; আর অন্যায়টি যদি অন্য কোনো মানুষের হকের সঙ্গে জড়িত হয়, তবে সেই হক ফিরিয়ে দেওয়া বা তার ক্ষমা চাওয়া। শর্তগুলো ঠিক যেটিকে বাদ দেয় তা হলো নকলটি — যে ক্ষমাপ্রার্থনা নিজের পুনরাবৃত্তির পরিকল্পনা করে রাখে। আয়াতের একটিমাত্র বিশেষণ 'নাসূহা' আগেই তা বাদ দিয়ে রেখেছিল: যে তওবা ফিরে আসার নিয়ত রাখে, তা কখনোই তার মালিকের প্রতি আন্তরিক উপদেশ ছিল না।",
          },
        ],
      },
      {
        h: { en: "'Asa From Allah", bn: "আল্লাহর পক্ষ থেকে 'আসা'" },
        p: [
          {
            en: "The reward is phrased with 'asa, it may be: it may be that your Lord will remove from you your misdeeds and admit you into gardens beneath which rivers flow. The commentators, Ibn Kathir among them, note that 'asa from Allah denotes what is due to occur — generosity states its promise as hope so that the servant approaches without presumption, yet the outcome is not in doubt. Removal of sins and entry into the gardens are the two halves of one restoration.",
            bn: "প্রতিদানটি বলা হয়েছে 'আসা' — হতে পারে — দিয়ে: হতে পারে তোমাদের রব তোমাদের পাপগুলো মুছে দেবেন এবং তোমাদের প্রবেশ করাবেন এমন জান্নাতে, যার তলদেশে নহর বয়ে চলে। মুফাসসিরগণ — ইবনে কাসীর তাঁদের মধ্যে — লক্ষ করেন, আল্লাহর পক্ষ থেকে 'আসা' বোঝায় যা ঘটারই কথা — দানশীলতা তার প্রতিশ্রুতি আশার ভাষায় বলে, যাতে বান্দা ধৃষ্টতা ছাড়া এগিয়ে আসে, অথচ ফলাফলে কোনো সন্দেহ নেই। পাপ মুছে যাওয়া আর জান্নাতে প্রবেশ — একই পুনরুদ্ধারের দুই অর্ধেক।",
          },
          {
            en: "The scale of the offer deserves stating plainly beside 39:53, which says: O My servants who have transgressed against their own souls, do not despair of Allah's mercy; indeed Allah forgives sins altogether. Tawbah nasuha is not the bargaining of a debtor with a reluctant creditor. It is the return of a servant to a Lord who has announced in advance that He forgives all of it, and who loves those who repent, as 2:222 says.",
            bn: "প্রস্তাবটির বিশালতা 39:53 আয়াতের পাশে রেখে স্পষ্ট করে বলার দাবি রাখে: হে আমার বান্দারা, যারা নিজেদের আত্মার ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না; নিশ্চয়ই আল্লাহ সব গুনাহ ক্ষমা করে দেন। 'তাওবাতান নাসূহা' কোনো অনিচ্ছুক পাওনাদারের সঙ্গে ঋণীর দরকষাকষি নয়। এটি এক বান্দার ফিরে আসা এমন এক রবের কাছে, যিনি আগেই ঘোষণা করে রেখেছেন যে তিনি সবটাই ক্ষমা করেন, এবং যিনি তওবাকারীদের ভালোবাসেন — যেমন 2:222 বলে।",
          },
        ],
      },
      {
        h: { en: "The Day of Uncut Light", bn: "অখণ্ড আলোর দিন" },
        p: [
          {
            en: "The verse then jumps to the Day when Allah will not disgrace the Prophet ﷺ and those who believed with him: their light runs before them and on their right, and they say, Our Lord, complete for us our light and forgive us; indeed You are over all things competent. 57:12 shows the same scene — light running before the believers — and 57:13 shows the hypocrites asking to borrow from it and being shut off behind a wall.",
            bn: "আয়াতটি এরপর লাফ দেয় সেই দিনে, যেদিন আল্লাহ নবী ﷺ-কে এবং তাঁর সঙ্গে ঈমান আনা লোকদের লাঞ্ছিত করবেন না: তাদের নূর ছুটে চলবে তাদের সামনে ও ডানে, আর তারা বলবে — হে আমাদের রব, আমাদের নূর আমাদের জন্য পূর্ণ করে দাও এবং আমাদের ক্ষমা করো; নিশ্চয়ই তুমি সবকিছুর ওপর ক্ষমতাবান। 57:12 একই দৃশ্য দেখায় — মুমিনদের সামনে ছুটে চলা নূর — আর 57:13 দেখায় মুনাফিকদের, যারা তা থেকে ধার চাইছে এবং একটি দেয়ালের আড়ালে আটকে যাচ্ছে।",
          },
          {
            en: "The mufassirun connect the du'a to that moment: when the light of the hypocrites is put out, the believers ask that theirs be carried through to completion. What is striking is who prays it — people already crossing with light in hand still ask for completion and forgiveness. On the Last Day as on this one, the believer's security is not in his record but in his Lord, and asking remains his posture even inside rescue.",
            bn: "মুফাসসিরগণ দোয়াটিকে সেই মুহূর্তের সঙ্গে যুক্ত করেন: মুনাফিকদের আলো যখন নিভিয়ে দেওয়া হবে, মুমিনরা তখন চাইবে তাদেরটি যেন শেষ পর্যন্ত পূর্ণতায় পৌঁছে। লক্ষণীয় হলো কারা এই দোয়া করছে — হাতে আলো নিয়ে পার হতে থাকা মানুষরাও পূর্ণতা ও ক্ষমা চাইছে। শেষ দিনেও, যেমন আজকের দিনে, মুমিনের নিরাপত্তা তার আমলনামায় নয়, তার রবের কাছে — আর উদ্ধারের ভেতরে থেকেও চাওয়াই তার ভঙ্গি থেকে যায়।",
          },
        ],
      },
      {
        h: { en: "Repentance and Light Together", bn: "তওবা ও নূর একসঙ্গে" },
        p: [
          {
            en: "Placing the two halves of the verse side by side yields its argument: the light of that Day is fuelled here. The same people commanded to a sincere tawbah are the ones shown crossing with light, and the prayer for completed light sits beside the prayer for forgiveness in a single breath — the two requests are one request. Muslim relates that Allah is more joyful at the repentance of His servant than a man who despairs of his mount and provisions in the desert and then finds them; the One receiving the return is gladder than the one returning.",
            bn: "আয়াতের দুই অর্ধেক পাশাপাশি রাখলেই এর যুক্তিটি বেরিয়ে আসে: সেই দিনের আলোর জ্বালানি জোগানো হয় এখানে। যাদের আন্তরিক তওবার নির্দেশ দেওয়া হয়েছে, তাদেরই দেখানো হয়েছে আলো নিয়ে পার হতে, আর পূর্ণ আলোর দোয়াটি ক্ষমার দোয়ার পাশে বসে আছে একই নিঃশ্বাসে — দুটি চাওয়া আসলে একটিই চাওয়া। মুসলিম বর্ণনা করেন: বান্দার তওবায় আল্লাহ তার চেয়েও বেশি আনন্দিত হন, যে ব্যক্তি মরুভূমিতে তার বাহন ও রসদ হারিয়ে নিরাশ হওয়ার পর তা ফিরে পায়; যিনি প্রত্যাবর্তন গ্রহণ করেন, তিনি প্রত্যাবর্তনকারীর চেয়েও বেশি খুশি।",
          },
        ],
      },
      {
        h: { en: "The Practice of Turning", bn: "ফিরে আসার অনুশীলন" },
        p: [
          {
            en: "The verse's practice begins tonight, not at some cleaner future date, because nasuh describes quality, not timing. Name the sin rather than the mood; leave it in the concrete way it is actually committed; feel its loss as loss; resolve against return; and where someone was wronged, give the right back — the apology, the money, the reputation. Nothing in the list requires a feeling of worthiness. It requires truthfulness, which is available even to the person who fears he will fail again.",
            bn: "আয়াতটির অনুশীলন শুরু হয় আজ রাতেই — ভবিষ্যতের কোনো পরিচ্ছন্নতর তারিখে নয় — কারণ 'নাসূহ' মানের বর্ণনা, সময়ের নয়। মেজাজ নয়, পাপটির নাম নিন; যেভাবে তা বাস্তবে করা হয়, ঠিক সেই বাস্তব উপায়েই তা ছাড়ুন; তার ক্ষতিকে ক্ষতি হিসেবে অনুভব করুন; ফিরে না যাওয়ার সংকল্প করুন; আর কারও প্রতি অন্যায় হয়ে থাকলে হকটি ফিরিয়ে দিন — ক্ষমাপ্রার্থনা, টাকা, সুনাম। তালিকার কোনোটিতেই নিজেকে যোগ্য মনে হওয়া লাগে না। লাগে সত্যবাদিতা — যা সেই মানুষটিরও নাগালে, যে ভয় পায় সে আবার ব্যর্থ হবে।",
          },
          {
            en: "And if he does fail again? The command remains addressed to him: O you who believe, repent. Each return is judged as itself; sincerity is measured at the time of the turning, not falsified by a later fall. The believers in the verse walk toward the gardens asking for light and forgiveness to the end — so a lifetime that looks like repeated turning back to Allah is not a failed tawbah; it is what the road of the people of 66:8 has always looked like.",
            bn: "আর সে যদি আবার ব্যর্থ হয়? নির্দেশটি তখনো তাকেই সম্বোধন করছে: হে ঈমানদারগণ, তওবা করো। প্রতিটি ফিরে আসা তার নিজের মতো করে বিচার্য; আন্তরিকতা মাপা হয় ফেরার মুহূর্তে — পরের কোনো পতন তাকে মিথ্যা বানায় না। আয়াতের মুমিনরা শেষ পর্যন্ত নূর ও ক্ষমা চাইতে চাইতে জান্নাতের দিকে হাঁটে — সুতরাং যে জীবন দেখতে বারবার আল্লাহর দিকে ফিরে আসার মতো, তা ব্যর্থ তওবা নয়; 66:8 আয়াতের মানুষদের পথ চিরকাল এ রকমই দেখতে।",
          },
        ],
      },
    ],
  },
  '24:22': {
    sections: [
      {
        h: { en: "After the Slander", bn: "অপবাদের পরে" },
        p: [
          {
            en: "The verse stands inside the long passage, 24:11-26, that Allah sent down about the ifk — the slander against Aisha (RA), the Prophet's ﷺ wife. For a month the lie moved through Madinah; then revelation declared her innocence. What remained afterward was the human wreckage every vindication leaves behind: the injured family now knew exactly who had spread the story, and among the spreaders was a man they had been feeding.",
            bn: "আয়াতটি দাঁড়িয়ে আছে সেই দীর্ঘ অনুচ্ছেদের ভেতরে — 24:11-26 — যা আল্লাহ নাযিল করেছিলেন 'ইফক' নিয়ে: নবী ﷺ-এর স্ত্রী আয়েশা (রাঃ)-এর বিরুদ্ধে অপবাদ। এক মাস ধরে মিথ্যাটি মদীনায় ঘুরে বেড়াল; তারপর ওহী তাঁর নির্দোষতা ঘোষণা করল। এরপর যা বাকি রইল তা হলো সেই মানবিক ধ্বংসস্তূপ, প্রতিটি নির্দোষ প্রমাণের পরে যা পড়ে থাকে: আহত পরিবারটি এখন ঠিক জানত গল্পটি কারা ছড়িয়েছে — আর ছড়ানোদের মধ্যে ছিল এমন এক ব্যক্তি, যাকে তারা খাওয়াত।",
          },
          {
            en: "Al-Bukhari relates the account from Aisha (RA) herself. Mistah ibn Uthathah (RA) — a poor emigrant, a relative of Abu Bakr (RA), and one of those who took part in the talk — lived on Abu Bakr's support. When the innocence came down, Abu Bakr swore he would never spend on Mistah again. By ordinary reckoning that oath was mild; he owed nothing to a man who had helped wound his daughter. The verse arrived to answer that reckoning.",
            bn: "বুখারী ঘটনাটি স্বয়ং আয়েশা (রাঃ) থেকে বর্ণনা করেন। মিসতাহ ইবনে উসাসা (রাঃ) — এক দরিদ্র মুহাজির, আবু বকর (রাঃ)-এর আত্মীয়, এবং সেই আলোচনায় অংশ নেওয়াদের একজন — আবু বকরের সাহায্যেই চলতেন। নির্দোষতার ঘোষণা নাযিল হলে আবু বকর কসম করলেন, তিনি আর কখনো মিসতাহর জন্য খরচ করবেন না। সাধারণ হিসাবে সে কসম ছিল নরম; যে মানুষ তাঁর মেয়েকে আঘাত করায় শামিল হয়েছিল, তার কাছে তাঁর তো কোনো দায়ই ছিল না। আয়াতটি এল সেই হিসাবের জবাব দিতে।",
          },
        ],
      },
      {
        h: { en: "Let Them Pardon and Overlook", bn: "তারা ক্ষমা করুক ও উপেক্ষা করুক" },
        p: [
          {
            en: "The wording never names anyone: let not those of fadl — virtue, bounty — and means among you swear against giving to the relatives, the poor and the emigrants in the way of Allah; wa-l-ya'fu wa-l-yasfahu, and let them pardon and let them overlook. The two verbs are distinct. 'Afw is dropping the claim against the offender; safh — from the turning of a page — is meeting him afterwards with a clear face, as though the offence were not kept on file.",
            bn: "শব্দবিন্যাসে কারও নাম নেই: তোমাদের মধ্যে যারা 'ফাদল' — মর্যাদা, প্রাচুর্য — ও সামর্থ্যের অধিকারী, তারা যেন কসম না খায় যে আত্মীয়, মিসকীন ও আল্লাহর পথে হিজরতকারীদের দেবে না; 'ওয়াল-ইয়াফূ ওয়াল-ইয়াসফাহূ' — তারা ক্ষমা করুক ও উপেক্ষা করুক। ক্রিয়া দুটি আলাদা। 'আফও' মানে অপরাধীর বিরুদ্ধে দাবি ছেড়ে দেওয়া; 'সাফহ' — পাতা উল্টে দেওয়া থেকে — মানে এরপর তার সঙ্গে পরিষ্কার মুখে দেখা করা, যেন অপরাধটি নথিতে রাখা হয়নি।",
          },
          {
            en: "Notice also how the verse names the wrongdoer: not as slanderer but as relative, poor, emigrant in Allah's path — three titles of claim. It refuses to let one sin delete a person's other truths. And it calls the giver a possessor of fadl before asking anything, arguing from his own excellence: generosity of your rank does not lapse because its recipient failed. The address dignifies both parties in the act of repairing them.",
            bn: "আরও লক্ষ করুন, আয়াতটি অন্যায়কারীকে কী নামে ডাকে: অপবাদদাতা নয়, বরং আত্মীয়, মিসকীন, আল্লাহর পথে মুহাজির — দাবির তিনটি উপাধি। একটি পাপকে সে একজন মানুষের বাকি সত্যগুলো মুছে দিতে দেয় না। আর দাতাকে কিছু চাওয়ার আগেই ডাকে 'ফাদল'-এর অধিকারী বলে — তার নিজের শ্রেষ্ঠত্ব থেকেই যুক্তি সাজিয়ে: তোমার স্তরের বদান্যতা এ কারণে রদ হয় না যে তার প্রাপক ব্যর্থ হয়েছে। সম্বোধনটি দুই পক্ষকেই মর্যাদা দেয় — তাদের মেরামত করতে করতেই।",
          },
        ],
      },
      {
        h: { en: "The Question That Ends the Argument", bn: "যে প্রশ্নে তর্ক শেষ" },
        p: [
          {
            en: "Then the sentence for which the verse is remembered: ala tuhibbuna an yaghfira Allahu lakum — would you not love that Allah should forgive you? It is a question, not a command, because it needs no command; only one answer exists. The verse sets the servant's pardon of a servant beside Allah's pardon of the servant and lets the sizes speak. Whoever holds a debt of injury holds it with hands that themselves owe Allah greater debts than that.",
            bn: "তারপর সেই বাক্য, যার জন্য আয়াতটি স্মরণীয়: 'আলা তুহিব্বূনা আঁইয়াগফিরাল্লাহু লাকুম' — তোমরা কি ভালোবাসো না যে আল্লাহ তোমাদের ক্ষমা করে দেবেন? এটি প্রশ্ন, নির্দেশ নয় — কারণ নির্দেশের দরকারই নেই; উত্তর একটাই আছে। আয়াতটি বান্দার প্রতি বান্দার ক্ষমাকে বসায় বান্দার প্রতি আল্লাহর ক্ষমার পাশে, আর আকারের পার্থক্যকেই কথা বলতে দেয়। যে ব্যক্তি আঘাতের একটি দেনা ধরে রাখে, সে তা ধরে রাখে এমন দুই হাতে, আল্লাহর কাছে যাদের নিজেদেরই এর চেয়ে বড় দেনা।",
          },
          {
            en: "Aisha (RA) narrates the effect: Abu Bakr (RA) said, indeed I would love that Allah forgive me — and returned to Mistah the maintenance he used to give him, saying he would never withdraw it from him. The forgiveness was not a sentiment; it was a resumed payment. That is the verse's standard for pardon: restoration of the benefit the anger had cut, not merely the retirement of the grudge.",
            bn: "আয়েশা (রাঃ) এর প্রভাব বর্ণনা করেন: আবু বকর (রাঃ) বললেন — অবশ্যই, আমি ভালোবাসি যে আল্লাহ আমাকে ক্ষমা করবেন — এবং মিসতাহকে আগে যে ভরণপোষণ দিতেন তা ফিরিয়ে দিলেন, আর বললেন তিনি তা আর কখনো তার কাছ থেকে সরাবেন না। ক্ষমাটি কোনো আবেগ ছিল না; ছিল আবার চালু হওয়া একটি খরচ। এটিই ক্ষমার ব্যাপারে আয়াতটির মানদণ্ড: রাগ যে উপকারটি কেটে দিয়েছিল তার পুনঃস্থাপন — শুধু ক্ষোভটিকে অবসরে পাঠানো নয়।",
          },
        ],
      },
      {
        h: { en: "Forgiveness in the Quran's Pattern", bn: "কুরআনের ধারায় ক্ষমা" },
        p: [
          {
            en: "The verse belongs to a family. 3:134 praises those who restrain rage and pardon people, and ends: Allah loves the doers of excellence. 41:34 orders repelling the evil deed with what is better, until the one with enmity becomes a devoted friend. And 12:92 preserves Yusuf (AS) saying to the brothers who had wronged him: no reproach upon you today; may Allah forgive you. In each place, pardon is not the weak party's surrender but the strong party's gift.",
            bn: "আয়াতটি একটি পরিবারের সদস্য। 3:134 প্রশংসা করে তাদের, যারা রাগ দমন করে ও মানুষকে ক্ষমা করে, আর শেষ হয়: আল্লাহ ইহসানকারীদের ভালোবাসেন। 41:34 নির্দেশ দেয় মন্দকে উত্তম কিছু দিয়ে প্রতিহত করতে — যতক্ষণ না শত্রুতা পোষণকারী অন্তরঙ্গ বন্ধু হয়ে যায়। আর 12:92 সংরক্ষণ করে ইউসুফ (আঃ)-এর কথা, তাঁর প্রতি অন্যায়কারী ভাইদের উদ্দেশে: আজ তোমাদের ওপর কোনো ভর্ৎসনা নেই; আল্লাহ তোমাদের ক্ষমা করুন। প্রতিটি জায়গায় ক্ষমা দুর্বল পক্ষের আত্মসমর্পণ নয়, বরং শক্তিমান পক্ষের উপহার।",
          },
          {
            en: "What 24:22 adds to the family is the measure-for-measure argument stated as an exchange: your forgiving is set against your being forgiven. The Prophet ﷺ stated the same law from the positive side — Muslim relates: whoever relieves a believer of a hardship of this world, Allah relieves him of a hardship of the Day of Rising, and Allah is in the aid of His servant as long as the servant is in the aid of his brother.",
            bn: "24:22 এই পরিবারে যা যোগ করে তা হলো মাপে-মাপ যুক্তিটি, একটি বিনিময় হিসেবে বলা: তোমার ক্ষমা করাকে রাখা হয়েছে তোমার ক্ষমা পাওয়ার বিপরীতে। নবী ﷺ একই বিধান ইতিবাচক দিক থেকে বলেছেন — মুসলিম বর্ণনা করেন: যে ব্যক্তি কোনো মুমিনের দুনিয়ার একটি সংকট দূর করে, আল্লাহ তার কিয়ামতের দিনের একটি সংকট দূর করেন, আর আল্লাহ বান্দার সাহায্যে থাকেন যতক্ষণ বান্দা তার ভাইয়ের সাহায্যে থাকে।",
          },
        ],
      },
      {
        h: { en: "The Hard Case Is the Point", bn: "কঠিন ঘটনাটাই মূল কথা" },
        p: [
          {
            en: "The verse's difficulty is deliberate: it legislates pardon at its most expensive — wronged party, public injury, family involved, the offender dependent on the offended. Easy forgiveness needed no verse. By choosing the hardest configuration and commanding pardon there, the passage sets the ceiling for every lesser case: if Abu Bakr (RA) could resume feeding the man who had slandered his daughter, the cut-offs most of us maintain stand on far thinner ground. The verse closes: and Allah is Forgiving, Merciful — the names of the One whose treatment we are choosing for ourselves.",
            bn: "আয়াতটির কাঠিন্য ইচ্ছাকৃত: এটি ক্ষমার বিধান দেয় তার সবচেয়ে মহার্ঘ জায়গায় — অন্যায়ের শিকার পক্ষ, প্রকাশ্য আঘাত, পরিবার জড়িত, অপরাধী নির্ভরশীল ক্ষতিগ্রস্তেরই ওপর। সহজ ক্ষমার জন্য কোনো আয়াতের দরকার ছিল না। সবচেয়ে কঠিন বিন্যাসটি বেছে নিয়ে সেখানেই ক্ষমার নির্দেশ দিয়ে অনুচ্ছেদটি প্রতিটি ছোট ঘটনার জন্য ছাদ বেঁধে দেয়: আবু বকর (রাঃ) যদি তাঁর মেয়ের বিরুদ্ধে অপবাদ রটানো মানুষটিকে আবার খাওয়াতে পারেন, তবে আমরা অধিকাংশ মানুষ যেসব সম্পর্কচ্ছেদ টিকিয়ে রাখি, সেগুলো দাঁড়িয়ে আছে অনেক পাতলা যুক্তির ওপর। আয়াত শেষ হয়: আর আল্লাহ ক্ষমাশীল, পরম দয়ালু — সেই সত্তার নাম, যাঁর আচরণ আমরা নিজেদের জন্য বেছে নিচ্ছি।",
          },
        ],
      },
      {
        h: { en: "Practising the Verse", bn: "আয়াতটির অনুশীলন" },
        p: [
          {
            en: "The practice is specific because the story is specific. Identify the person your justified anger has cut off, and identify what was cut — money, greeting, help, presence. The verse's question is then put to you in your own case: would you not love that Allah forgive you? If yes, restore the thing itself, as the payment was restored, and add safh: no cold face, no annual reminder of the offence. Whoever finds this beyond him has at least located the exact distance between himself and the man the Quran was describing.",
            bn: "অনুশীলনটি সুনির্দিষ্ট, কারণ ঘটনাটি সুনির্দিষ্ট। চিহ্নিত করুন সেই মানুষটিকে, আপনার ন্যায্য রাগ যাকে ছেঁটে ফেলেছে, আর চিহ্নিত করুন কী ছাঁটা হয়েছিল — টাকা, সালাম, সাহায্য, উপস্থিতি। তখন আয়াতের প্রশ্নটি আপনার নিজের ঘটনাতেই আপনার সামনে রাখা হয়: আপনি কি ভালোবাসেন না যে আল্লাহ আপনাকে ক্ষমা করবেন? উত্তর হ্যাঁ হলে, জিনিসটিই ফিরিয়ে দিন — যেভাবে খরচটি ফিরিয়ে দেওয়া হয়েছিল — আর যোগ করুন 'সাফহ': ঠান্ডা মুখ নয়, অপরাধের বাৎসরিক স্মরণিকাও নয়। যার কাছে এটি সাধ্যাতীত মনে হয়, সে অন্তত মেপে ফেলেছে নিজের এবং কুরআন যে মানুষটির বর্ণনা দিচ্ছিল তার মধ্যকার সঠিক দূরত্বটুকু।",
          },
        ],
      },
    ],
  },
  '8:2-4': {
    sections: [
      {
        h: { en: "A Definition After a Dispute", bn: "বিরোধের পরে একটি সংজ্ঞা" },
        p: [
          {
            en: "Surah al-Anfal opens with a question about property: they ask you about the spoils, 8:1 — the disagreement after Badr about who would have what. The answer given first is not a distribution formula but a reorientation: the spoils belong to Allah and the Messenger, so have taqwa, repair what is between you, and obey. Then 8:2-4 lift the discussion another level entirely: before who gets what, the passage defines who the believers are.",
            bn: "সূরা আল-আনফাল শুরু হয় সম্পদ নিয়ে একটি প্রশ্ন দিয়ে: তারা তোমাকে গনীমত সম্পর্কে জিজ্ঞেস করে — 8:1 — বদরের পরের সেই মতবিরোধ, কে কী পাবে তা নিয়ে। প্রথম যে উত্তর দেওয়া হয় তা বণ্টনের কোনো সূত্র নয়, বরং মুখ ঘুরিয়ে দেওয়া: গনীমত আল্লাহ ও রাসূলের, অতএব তাকওয়া অবলম্বন করো, নিজেদের পারস্পরিক সম্পর্ক ঠিক করো, এবং আনুগত্য করো। তারপর 8:2-4 আলোচনাকে সম্পূর্ণ অন্য এক স্তরে তুলে নেয়: কে কী পাবে তার আগে, অনুচ্ছেদটি সংজ্ঞায়িত করে মুমিন কারা।",
          },
          {
            en: "The placement is a comment in itself. A community fresh from a miracle could still fall into a quarrel over gains; the corrective is a portrait of faith in which wealth appears only at the end, and then as something given away. Innama al-mu'minun — the believers are only — is a restricting construction. The commentators explain it as describing faith when it is true and complete: not a decoration for an elite, but the working condition the word mu'min is meant to name, as the passage's own ending — those are the believers in truth — confirms.",
            bn: "অবস্থানটিই একটি মন্তব্য। সদ্য মুজিযা দেখে আসা একটি সম্প্রদায়ও লাভের ভাগ নিয়ে বিবাদে পড়তে পারে; তার সংশোধনী হলো ঈমানের এমন এক প্রতিকৃতি, যেখানে সম্পদ আসে কেবল শেষে — এবং তখনো বিলিয়ে দেওয়া জিনিস হিসেবে। 'ইন্নামাল মু'মিনূন' — মুমিন তো কেবল তারাই — একটি সীমাবদ্ধকারী গঠন। মুফাসসিরগণ ব্যাখ্যা করেন, এটি ঈমানের বর্ণনা যখন তা সত্য ও পরিপূর্ণ: কোনো অভিজাত দলের অলংকার নয়, বরং 'মুমিন' শব্দটি যে কার্যকর অবস্থা বোঝাতে চায় সেটিই — যেমন অনুচ্ছেদের নিজের সমাপ্তি — তারাই প্রকৃত মুমিন — নিশ্চিত করে।",
          },
        ],
      },
      {
        h: { en: "Hearts That Respond", bn: "সাড়া দেওয়া হৃদয়" },
        p: [
          {
            en: "Three inner marks come first. When Allah is mentioned, their hearts wajilat — tremble, feel awe. When His verses are recited to them, zadat-hum imanan, it increases them in faith. And upon their Lord they rely. The order runs from reflex to growth to rest: the mention stirs, the recitation builds, and the built trust settles its weight on Allah rather than on means. All three are movements of the heart, invisible from outside, and the passage puts them before any visible deed.",
            bn: "প্রথমে আসে তিনটি ভেতরের চিহ্ন। আল্লাহকে স্মরণ করা হলে তাদের হৃদয় 'ওয়াজিলাত' — কেঁপে ওঠে, ভয়ভক্তি অনুভব করে। তাঁর আয়াতগুলো তাদের কাছে তিলাওয়াত করা হলে — 'যাদাতহুম ঈমানা' — তা তাদের ঈমান বাড়িয়ে দেয়। আর তারা তাদের রবের ওপরই ভরসা করে। ক্রমটি চলে প্রতিবর্ত থেকে বৃদ্ধিতে, বৃদ্ধি থেকে প্রশান্তিতে: স্মরণ নাড়া দেয়, তিলাওয়াত গড়ে তোলে, আর গড়ে ওঠা আস্থা তার ভার রাখে আল্লাহর ওপর — উপায়-উপকরণের ওপর নয়। তিনটিই হৃদয়ের সঞ্চালন, বাইরে থেকে অদৃশ্য — আর অনুচ্ছেদটি এগুলোকে রাখে যেকোনো দৃশ্যমান আমলের আগে।",
          },
          {
            en: "The trembling is not terror as an end in itself; 22:35 pairs the same word with patience and prayer, and 39:23 completes the arc — skins shiver at the recitation, then skins and hearts soften to the remembrance of Allah. Awe that only frightens has stopped halfway; the Quranic sequence passes through fear into tenderness and obedience. A heart that hears the mention of Allah and moves — that is the pulse the verse is checking for.",
            bn: "এই কেঁপে ওঠা নিজেই লক্ষ্য এমন কোনো আতঙ্ক নয়; 22:35 একই শব্দকে জুড়ে দেয় ধৈর্য ও নামাযের সঙ্গে, আর 39:23 বৃত্তটি সম্পূর্ণ করে — তিলাওয়াতে চামড়া শিউরে ওঠে, তারপর চামড়া ও হৃদয় নরম হয়ে আসে আল্লাহর স্মরণে। যে ভয়ভক্তি কেবল ভয়ই দেখায়, সে মাঝপথে থেমে গেছে; কুরআনী ধারাক্রম ভয়ের ভেতর দিয়ে পৌঁছায় কোমলতা ও আনুগত্যে। যে হৃদয় আল্লাহর উল্লেখ শুনে নড়ে ওঠে — সেই স্পন্দনটিই আয়াত পরীক্ষা করছে।",
          },
        ],
      },
      {
        h: { en: "Faith That Increases", bn: "যে ঈমান বাড়ে" },
        p: [
          {
            en: "Zadat-hum imanan became a proof-text in creed: the scholars of the Sunnah cite it, with 9:124 — when a surah is sent down, some ask which of you it increased in faith — to establish that iman rises with obedience and falls with sin. It is also a diagnostic the ordinary reader can run. The verse assumes exposure to recitation and measures its yield; hearing that leaves the level unchanged is a symptom the definition is designed to catch.",
            bn: "'যাদাতহুম ঈমানা' আকীদার একটি দলিল হয়ে উঠেছে: আহলুস সুন্নাহর আলিমগণ এটি উদ্ধৃত করেন — সঙ্গে 9:124 — যখন কোনো সূরা নাযিল হয়, কেউ কেউ জিজ্ঞেস করে এটি তোমাদের কার ঈমান বাড়াল — প্রমাণ করতে যে ঈমান আনুগত্যে বাড়ে আর পাপে কমে। এটি একটি রোগনির্ণয়ও বটে, যা সাধারণ পাঠক নিজে চালাতে পারে। আয়াতটি ধরে নেয় তিলাওয়াতের সংস্পর্শ আছে, আর মাপে তার ফলন; যে শোনা স্তরটিকে অপরিবর্তিত রেখে যায়, তা এমন এক উপসর্গ, সংজ্ঞাটি যা ধরার জন্যই তৈরি।",
          },
          {
            en: "Tawakkul completes the inner triad, and its position teaches. It comes after the verses have done their work: reliance is not a mood summoned in crisis but the settled outcome of a heart repeatedly stirred and grown. And it guards the other two from distortion — awe without reliance curdles into dread; growth without reliance inflates into self-trust. Leaning the whole weight on the Lord keeps the trembling hopeful and the increase humble.",
            bn: "তাওয়াক্কুল ভেতরের ত্রয়ী সম্পূর্ণ করে, আর তার অবস্থানটিও শেখায়। এটি আসে আয়াতগুলো তাদের কাজ করে ফেলার পরে: ভরসা সংকটের মুহূর্তে ডেকে আনা কোনো মেজাজ নয়, বরং বারবার নাড়া খাওয়া ও বেড়ে ওঠা হৃদয়ের থিতু ফলাফল। আর এটি বাকি দুটিকে বিকৃতি থেকে রক্ষা করে — ভরসাহীন ভয়ভক্তি জমে ওঠে আতঙ্কে; ভরসাহীন বৃদ্ধি ফুলে ওঠে আত্মবিশ্বাসের অহংকারে। পুরো ভার রবের ওপর হেলান দেওয়াই কাঁপুনিকে রাখে আশাবাদী, আর বৃদ্ধিকে রাখে বিনয়ী।",
          },
        ],
      },
      {
        h: { en: "Deeds That Show", bn: "যে আমল দেখা যায়" },
        p: [
          {
            en: "Then the two visible marks: they establish the prayer, and they spend out of what We have provided them. The mufassirun note that the pairing recurs across the Quran — 2:3 introduces the God-conscious with the very same two — because they represent the two directions of practice: the right of Allah, worshipped on time, and the right of creation, met from one's wealth. The phrasing of the second carries its own argument: what We have provided them — givers are passing on, not giving up.",
            bn: "তারপর দৃশ্যমান দুটি চিহ্ন: তারা নামায কায়েম করে, এবং আমরা তাদের যা রিযিক দিয়েছি তা থেকে ব্যয় করে। মুফাসসিরগণ লক্ষ করেন, জোড়টি কুরআনজুড়ে ফিরে ফিরে আসে — 2:3 মুত্তাকীদের পরিচয় করায় ঠিক এই দুটি দিয়েই — কারণ এরা চর্চার দুই অভিমুখের প্রতিনিধি: আল্লাহর হক, সময়মতো ইবাদতের মাধ্যমে; আর সৃষ্টির হক, নিজের সম্পদ থেকে মেটানো। দ্বিতীয়টির শব্দবিন্যাস নিজের যুক্তি নিজেই বহন করে: 'আমরা তাদের যা রিযিক দিয়েছি' — দাতারা হাতবদল করছে মাত্র, হারাচ্ছে না।",
          },
          {
            en: "The five marks together refuse two truncations. Inner faith without prayer and giving is a claim without evidence; prayer and giving without the responsive heart is a shell — 49:14 records desert Arabs told to say we have submitted rather than we believe, for faith had not yet entered their hearts. The believer of 8:2-4 is verified at both layers, secret and seen, and neither layer can stand in for the other.",
            bn: "পাঁচটি চিহ্ন একসঙ্গে দুটি খণ্ডিতকরণ প্রত্যাখ্যান করে। নামায ও দানবিহীন ভেতরের ঈমান প্রমাণহীন দাবি; আর সাড়া দেওয়া হৃদয়বিহীন নামায ও দান একটি খোলস — 49:14 লিপিবদ্ধ করে মরুর বেদুইনদের কথা, যাদের বলা হয়েছিল 'আমরা ঈমান এনেছি' নয়, বলো 'আমরা আত্মসমর্পণ করেছি' — কারণ ঈমান তখনো তাদের হৃদয়ে ঢোকেনি। 8:2-4 আয়াতের মুমিন যাচাইকৃত দুই স্তরেই — গোপন ও দৃশ্যমান — আর কোনো স্তরই অন্যটির বদলি হতে পারে না।",
          },
        ],
      },
      {
        h: { en: "Believers in Truth", bn: "প্রকৃত মুমিন" },
        p: [
          {
            en: "Ula'ika humu al-mu'minuna haqqan — those are the believers in truth. Then three rewards, each answering the life described: darajat, ranks with their Lord, for people who ranked Him above everything; maghfirah, forgiveness, for people whose awe never let them feel finished; and rizqun karim, a noble provision, for people who kept handing their provision on. The rewards are not a list but a mirror: what the five marks planted, the three promises harvest.",
            bn: "'উলায়িকা হুমুল মু'মিনূনা হাক্কা' — তারাই প্রকৃত মুমিন। তারপর তিনটি প্রতিদান, প্রতিটি বর্ণিত জীবনটির জবাব: 'দারাজাত' — তাদের রবের কাছে মর্যাদার স্তর — তাদের জন্য, যারা তাঁকে সবকিছুর ওপরে স্থান দিয়েছিল; 'মাগফিরাহ' — ক্ষমা — তাদের জন্য, যাদের ভয়ভক্তি কখনো তাদের 'সম্পন্ন' বোধ করতে দেয়নি; আর 'রিযকুন কারীম' — সম্মানজনক রিযিক — তাদের জন্য, যারা নিজেদের রিযিক হাতবদল করে যেতে থাকল। প্রতিদানগুলো কোনো তালিকা নয়, আয়না: পাঁচ চিহ্ন যা রোপণ করেছিল, তিন প্রতিশ্রুতি তা-ই কাটে।",
          },
        ],
      },
      {
        h: { en: "Running the Check", bn: "যাচাইটি চালানো" },
        p: [
          {
            en: "The passage invites self-measurement: which of these marks is weakest in me? The test is honest because its inputs are ordinary — the next mention of Allah heard, the next page recited, the next prayer time, the next payment due. Each is a probe returning a reading. And no mark is repaired by anxiety about it; each is repaired by its own practice — more attentive listening for the heart, punctuality for the prayer, a first small regular gift for the hand.",
            bn: "অনুচ্ছেদটি আত্মপরিমাপের আমন্ত্রণ জানায়: এই চিহ্নগুলোর কোনটি আমার মধ্যে সবচেয়ে দুর্বল? পরীক্ষাটি সৎ, কারণ এর উপকরণগুলো নিত্যদিনের — পরের বার আল্লাহর উল্লেখ শোনা, পরের পাতা তিলাওয়াত, পরের নামাযের ওয়াক্ত, পরের দেয় দান। প্রতিটিই একটি শলাকা, যা একটি পাঠ ফেরত দেয়। আর কোনো চিহ্নই তা নিয়ে দুশ্চিন্তায় মেরামত হয় না; প্রতিটি মেরামত হয় তার নিজের চর্চায় — হৃদয়ের জন্য আরও মনোযোগী শোনা, নামাযের জন্য সময়ানুবর্তিতা, হাতের জন্য প্রথম ছোট্ট নিয়মিত দান।",
          },
          {
            en: "Begin where the verse begins. The inner marks lead, so the first repair is exposure: unhurried recitation, listened to as address rather than as background. Al-Bukhari relates that the Prophet ﷺ asked Ibn Mas'ud (RA) to recite the Quran to him, saying he loved to hear it from another, and at 4:41 his eyes flowed. A heart trained to be recited to is the root; the prayer, the giving and the reliance of 8:2-4 grow out of that listening.",
            bn: "শুরু করুন যেখানে আয়াত শুরু করে। ভেতরের চিহ্নগুলো আগে, তাই প্রথম মেরামত হলো সংস্পর্শ: তাড়াহুড়োহীন তিলাওয়াত — পটভূমির শব্দ নয়, সম্বোধন হিসেবে শোনা। বুখারী বর্ণনা করেন, নবী ﷺ ইবনে মাসউদ (রাঃ)-কে তাঁকে কুরআন পড়ে শোনাতে বলেছিলেন — বলেছিলেন, অন্যের কাছ থেকে শুনতে তিনি ভালোবাসেন — এবং 4:41 আয়াতে পৌঁছালে তাঁর দুচোখ বেয়ে অশ্রু নামে। যে হৃদয়কে তিলাওয়াত শোনানোর অভ্যাস করানো হয়েছে, সেটিই শিকড়; 8:2-4 আয়াতের নামায, দান ও ভরসা গজিয়ে ওঠে সেই শোনা থেকেই।",
          },
        ],
      },
    ],
  },
  '23:1-3': {
    sections: [
      {
        h: { en: "Success in the Past Tense", bn: "অতীত কালে সফলতা" },
        p: [
          {
            en: "Qad aflaha al-mu'minun: truly the believers have succeeded. The Arabic opens with qad and a past-tense verb — the success is announced as a settled fact before a single condition has been listed. Falah is the Quran's word for the full harvest: attaining what one hoped and escaping what one feared. The surah begins by handing that verdict to the believers, then spends the following verses, 23:2-9, describing who exactly was just congratulated.",
            bn: "'কাদ আফলাহাল মু'মিনূন' — মুমিনরা সত্যিই সফল হয়ে গেছে। আরবিতে শুরুটা 'কাদ' আর অতীত কালের ক্রিয়া দিয়ে — একটি শর্তও তালিকাভুক্ত হওয়ার আগেই সফলতাকে ঘোষণা করা হয় মীমাংসিত সত্য হিসেবে। 'ফালাহ' হলো পূর্ণ ফসলের জন্য কুরআনের শব্দ: যা আশা করা হয়েছিল তা পাওয়া, আর যা ভয় করা হয়েছিল তা থেকে রেহাই। সূরাটি শুরুতেই মুমিনদের হাতে সেই রায় তুলে দেয়, তারপর পরের আয়াতগুলোতে — 23:2-9 — বর্ণনা করে ঠিক কাদের এইমাত্র অভিনন্দন জানানো হলো।",
          },
          {
            en: "The list that follows names traits, not credentials: humility in prayer, turning from idle talk, giving zakah, guarding chastity, keeping trusts and covenants, protecting the prayers. It ends at 23:10-11 with the inheritance: these are the heirs who will inherit Firdaws, abiding there forever. Success is thus defined at the surah's start, and 23:115 near its end asks the question that gives the definition its urgency: did you think We created you without purpose?",
            bn: "এরপরের তালিকাটি নাম নেয় গুণের, সনদের নয়: নামাযে বিনয়, অনর্থক কথা থেকে ফিরে থাকা, যাকাত আদায়, লজ্জাস্থানের হেফাজত, আমানত ও অঙ্গীকার রক্ষা, নামাযসমূহের সংরক্ষণ। তালিকা শেষ হয় 23:10-11 আয়াতে উত্তরাধিকার দিয়ে: এরাই সেই ওয়ারিশ, যারা ফিরদাউসের উত্তরাধিকারী হবে, সেখানে চিরকাল থাকবে। সফলতা এভাবে সংজ্ঞায়িত হয় সূরার শুরুতে, আর শেষের কাছে 23:115 করে সেই প্রশ্ন, যা সংজ্ঞাটিকে তার জরুরিত্ব দেয়: তোমরা কি ভেবেছিলে আমরা তোমাদের উদ্দেশ্যহীন সৃষ্টি করেছি?",
          },
        ],
      },
      {
        h: { en: "Khushu' Comes First", bn: "খুশু সবার আগে" },
        p: [
          {
            en: "The first trait chosen — before zakah, chastity or honesty — is alladhina hum fi salatihim khashi'un: those who in their prayer are humbly attentive. Khushu' in the language is lowness and stillness; in the prayer, the commentators describe it as the heart standing present before Allah and the limbs going quiet in sympathy. It is placed first because it is the interior of the deed the whole religion is built around: prayer as meeting, not as motion.",
            bn: "প্রথম যে গুণটি বাছাই করা হয়েছে — যাকাত, চারিত্রিক পবিত্রতা বা সততারও আগে — তা হলো 'আল্লাযীনা হুম ফী সালাতিহিম খাশিউন': যারা নিজেদের নামাযে বিনম্র-মনোযোগী। ভাষায় 'খুশু' মানে অবনত হওয়া ও স্থির হওয়া; নামাযে মুফাসসিরগণ একে বর্ণনা করেন — হৃদয় আল্লাহর সামনে উপস্থিত হয়ে দাঁড়ায়, আর অঙ্গ-প্রত্যঙ্গ তার সহমর্মিতায় শান্ত হয়ে আসে। এটিকে প্রথমে রাখা হয়েছে কারণ পুরো দ্বীন যে আমলকে ঘিরে গড়া, এ হলো তার অন্দরমহল: নামায মানে সাক্ষাৎ, নড়াচড়া নয়।",
          },
          {
            en: "The wording repays attention: fi salatihim, in their prayer — khushu' is located inside the act, a state to be entered; and salatihim, their prayer, hints at ownership, for a thing is guarded when it is felt as one's own. Al-Bukhari relates from Anas (RA) that the Prophet ﷺ sternly warned people who lift their gaze to the sky during prayer — even the eyes are gathered in. The body is taught to stand still so that the heart can.",
            bn: "শব্দবিন্যাসটি মনোযোগের প্রতিদান দেয়: 'ফী সালাতিহিম' — তাদের নামাযের ভেতরে — খুশুর অবস্থান কাজটির অভ্যন্তরে, এ এমন এক অবস্থা যাতে প্রবেশ করতে হয়; আর 'সালাতিহিম' — তাদের নামায — মালিকানার ইঙ্গিত দেয়, কারণ কোনো জিনিস তখনই পাহারা পায় যখন তা নিজের বলে অনুভূত হয়। বুখারী আনাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নামাযে আকাশের দিকে দৃষ্টি তোলা লোকদের কঠোরভাবে সতর্ক করেছেন — এমনকি চোখদুটোকেও গুটিয়ে আনা হয়। দেহকে স্থির দাঁড়াতে শেখানো হয়, যাতে হৃদয় স্থির হতে পারে।",
          },
        ],
      },
      {
        h: { en: "The Bracket of Prayer", bn: "নামাযের বন্ধনী" },
        p: [
          {
            en: "Ibn Kathir observes that the passage opens with the prayer's khushu' at 23:2 and closes with its guarding at 23:9 — beginning and ending the portrait of success with salah. The bracket carries a teaching: quality first, constancy last, and everything else — speech, wealth, chastity, trust — held between them. A life framed by prayer at both edges is what the surah means by a believer; the traits in the middle are what such framing produces.",
            bn: "ইবনে কাসীর লক্ষ করেন, অনুচ্ছেদটি খোলে 23:2 আয়াতে নামাযের খুশু দিয়ে, আর বন্ধ হয় 23:9 আয়াতে তার হেফাজত দিয়ে — সফলতার প্রতিকৃতির শুরু ও শেষ দুটোই সালাত দিয়ে। এই বন্ধনী একটি শিক্ষা বহন করে: আগে মান, শেষে নিয়মানুবর্তিতা, আর বাকি সব — কথা, সম্পদ, চারিত্রিক পবিত্রতা, আমানত — এ দুয়ের মাঝে ধরা। দুই কিনারায় নামাযে বাঁধাই করা একটি জীবন — সূরাটি 'মুমিন' বলতে এটিই বোঝায়; মাঝের গুণগুলো সেই বাঁধাইয়েরই ফসল।",
          },
        ],
      },
      {
        h: { en: "Turning From Laghw", bn: "লাগও থেকে ফিরে থাকা" },
        p: [
          {
            en: "The second trait: wa-alladhina hum 'ani al-laghwi mu'ridun — those who turn away from laghw. Laghw is whatever carries no benefit: idle talk, vain disputes, entertainment that leaves nothing behind, and at its worst, falsehood. The word is a participle, mu'ridun, ones turning aside — not fighting laghw, not policing it in others, simply withdrawing their attention from it. 25:72 shows the same gait: when they pass by laghw, they pass with dignity.",
            bn: "দ্বিতীয় গুণ: 'ওয়াল্লাযীনা হুম আনিল-লাগবি মু'রিদূন' — যারা লাগও থেকে মুখ ফিরিয়ে থাকে। 'লাগও' হলো যা কিছু কোনো উপকার বহন করে না: অনর্থক কথা, বৃথা তর্ক, যে বিনোদন পেছনে কিছুই রেখে যায় না, আর তার নিকৃষ্টতম রূপে — মিথ্যা। শব্দটি একটি কর্তৃবাচক বিশেষণ-পদ (ইসম ফা'ইল) — 'মু'রিদূন', পাশ কাটিয়ে চলা মানুষ — লাগওয়ের সঙ্গে লড়াই নয়, অন্যদের মধ্যে তার পাহারাদারিও নয়, স্রেফ তা থেকে নিজেদের মনোযোগ তুলে নেওয়া। 25:72 একই চলন দেখায়: তারা যখন লাগওয়ের পাশ দিয়ে যায়, মর্যাদার সঙ্গে পেরিয়ে যায়।",
          },
          {
            en: "28:55 adds the words of such people: when they hear laghw they turn from it and say, to us our deeds and to you yours — peace be upon you; we do not seek the ignorant. The commentators note the connection between this trait and the first: a heart soaked in idle speech arrives at prayer still buzzing with it. Guarding the tongue and ears between prayers is how khushu' inside the prayer is provisioned; the two traits are one economy of attention.",
            bn: "28:55 এমন মানুষদের কথাগুলোও যোগ করে: তারা লাগও শুনলে তা থেকে মুখ ফিরিয়ে নেয় এবং বলে — আমাদের আমল আমাদের, তোমাদের আমল তোমাদের; তোমাদের প্রতি সালাম, আমরা অজ্ঞদের সঙ্গ চাই না। মুফাসসিরগণ এই গুণ ও প্রথম গুণের সংযোগটি লক্ষ করেন: অনর্থক কথায় ভেজা হৃদয় নামাযে পৌঁছেও তার গুঞ্জন নিয়ে হাজির হয়। নামাযগুলোর মাঝের সময়ে জিহ্বা ও কান পাহারা দেওয়াই হলো নামাযের ভেতরের খুশুর রসদ জোগানো; গুণ দুটি আসলে মনোযোগের একটিই অর্থনীতি।",
          },
        ],
      },
      {
        h: { en: "Success Redefined", bn: "সফলতার নতুন সংজ্ঞা" },
        p: [
          {
            en: "The definition cuts against the market's. Nothing in 23:1-11 mentions accumulating wealth, status, safety or length of days; the failed and the flourishing are distinguished by the quality of worship and the discipline of speech and appetite. The Quran prices the alternatives elsewhere too: 87:14-15 — he has succeeded who purifies himself, remembers his Lord's name and prays; 91:9-10 — he succeeds who purifies the soul, and he fails who buries it. Falah is consistently an inward transaction with outward fruit.",
            bn: "সংজ্ঞাটি বাজারের সংজ্ঞার বিপরীতে কাটে। 23:1-11 আয়াতের কোথাও সম্পদ জমানো, মর্যাদা, নিরাপত্তা বা আয়ুর দৈর্ঘ্যের উল্লেখ নেই; ব্যর্থ আর সফলের পার্থক্য করা হয়েছে ইবাদতের মান এবং কথা ও প্রবৃত্তির শৃঙ্খলা দিয়ে। কুরআন অন্যত্রও বিকল্পগুলোর দাম বেঁধে দেয়: 87:14-15 — সে-ই সফল হয়েছে, যে নিজেকে পরিশুদ্ধ করেছে, তার রবের নাম স্মরণ করেছে এবং নামায পড়েছে; 91:9-10 — সে-ই সফল, যে আত্মাকে পরিশুদ্ধ করে, আর সে-ই ব্যর্থ, যে তাকে কলুষে ঢেকে দেয়। 'ফালাহ' ধারাবাহিকভাবেই এক ভেতরের লেনদেন, যার ফল বাইরে ফলে।",
          },
        ],
      },
      {
        h: { en: "Entering the Description", bn: "বর্ণনাটির ভেতরে ঢোকা" },
        p: [
          {
            en: "The practical door is the first trait, taken concretely. Khushu' responds to preparation: arriving before the iqamah rather than during it, knowing the meaning of what is recited, and remembering that the prayer may be one's last — the Prophet ﷺ advised a man, in what Ibn Majah relates, to pray the prayer of one bidding farewell. None of this is exotic; all of it is scheduling and attention, which is why the verse can fairly ask it of everyone.",
            bn: "ব্যবহারিক দরজাটি হলো প্রথম গুণ — বাস্তবভাবে ধরা। খুশু প্রস্তুতিতে সাড়া দেয়: ইকামতের সময় নয়, তার আগে পৌঁছানো; যা তিলাওয়াত হচ্ছে তার অর্থ জানা; আর মনে রাখা যে এই নামাযই শেষ নামায হতে পারে — নবী ﷺ এক ব্যক্তিকে উপদেশ দিয়েছিলেন — ইবনে মাজাহ যা বর্ণনা করেন — বিদায়ী মানুষের নামাযের মতো নামায পড়তে। এর কোনোটিই দুর্লভ কিছু নয়; সবটাই সময় ব্যবস্থাপনা আর মনোযোগ — আর এ কারণেই আয়াতটি ন্যায্যভাবে সবার কাছে তা চাইতে পারে।",
          },
          {
            en: "Then the second trait, also concretely: an audit of inputs. What a person scrolls, overhears and repeats is not neutral; the verse treats attention as capital that success requires spending well. Turning away — mu'ridun — is undramatic: closing the feed, leaving the pointless argument, letting a rumour die at one's own ear. Done for Allah, these small withdrawals are listed in the Quran among the traits of the people who inherit Firdaws, which is a remarkable exchange rate.",
            bn: "তারপর দ্বিতীয় গুণ, সেটিও বাস্তবভাবে: যা ঢোকে তার হিসাব-নিরীক্ষা। মানুষ যা স্ক্রল করে, কানে তোলে আর মুখে ফেরায়, তা নিরপেক্ষ নয়; আয়াতটি মনোযোগকে গণ্য করে এমন পুঁজি হিসেবে, সফলতার জন্য যা ভালোভাবে খরচ করা জরুরি। মুখ ফিরিয়ে নেওয়া — 'মু'রিদূন' — নাটকীয় কিছু নয়: ফিডটি বন্ধ করা, অর্থহীন তর্ক ছেড়ে আসা, গুজবকে নিজের কানেই মরতে দেওয়া। আল্লাহর জন্য করা হলে এই ছোট ছোট সরে আসাগুলোই কুরআনে তালিকাভুক্ত হয় ফিরদাউসের উত্তরাধিকারীদের গুণাবলির মধ্যে — যা এক অসাধারণ বিনিময়-হার।",
          },
        ],
      },
    ],
  },
  '49:10': {
    sections: [
      {
        h: { en: "A Fact Before a Command", bn: "নির্দেশের আগে একটি সত্য" },
        p: [
          {
            en: "Innama al-mu'minuna ikhwah: the believers are but brothers. The sentence is built on innama, the particle of restriction, and on a bold word choice: ikhwah is the plural Arabic typically uses for brothers by birth. The Quran takes the strongest bond the language has and declares it the existing relation between all believers. It is stated as a fact, not an aspiration — not that believers should feel brotherly, but that believers are brothers, with everything a brother is owed following from it.",
            bn: "'ইন্নামাল মু'মিনূনা ইখওয়াহ' — মুমিনরা তো পরস্পর ভাই। বাক্যটি দাঁড়িয়ে আছে 'ইন্নামা' — সীমাবদ্ধকারী অব্যয় — এবং একটি সাহসী শব্দচয়নের ওপর: 'ইখওয়াহ' সেই বহুবচন, আরবি সাধারণত যা ব্যবহার করে জন্মসূত্রের ভাইদের জন্য। ভাষার সবচেয়ে শক্ত বন্ধনটি নিয়ে কুরআন ঘোষণা করে — এ-ই সব মুমিনের মধ্যে বিদ্যমান সম্পর্ক। এটি বলা হয়েছে সত্য হিসেবে, আকাঙ্ক্ষা হিসেবে নয় — মুমিনদের ভাইসুলভ বোধ করা উচিত, তা নয়; বরং মুমিনরা ভাই-ই — আর একজন ভাইয়ের যা যা প্রাপ্য, সবই তা থেকে অনুসৃত হয়।",
          },
          {
            en: "The command then rides on the fact: fa-aslihu bayna akhawaykum, so set things right between your two brothers — and the dual, your two brothers, is precise. Reconciliation is not only for wars between factions; it reaches down to any two individuals at odds. The verse ends by tying the work to taqwa and to hope: and fear Allah, that you may be shown mercy — as if mercy from above is kept moving by mercy repaired below.",
            bn: "নির্দেশটি তারপর সেই সত্যের ওপর চড়ে: 'ফা-আসলিহূ বাইনা আখাওয়াইকুম' — অতএব তোমাদের দুই ভাইয়ের মধ্যে মীমাংসা করে দাও — আর দ্বিবচনটি — তোমাদের দুই ভাই — সুনির্দিষ্ট। মীমাংসা কেবল দলে দলে যুদ্ধের জন্য নয়; তা নেমে আসে বিবাদে জড়ানো যেকোনো দুজন মানুষ পর্যন্ত। আয়াত শেষ হয় কাজটিকে তাকওয়া ও আশার সঙ্গে বেঁধে: আর আল্লাহকে ভয় করো, যাতে তোমাদের প্রতি রহম করা হয় — যেন ওপরের রহমত সচল থাকে নিচে মেরামত করা রহমতের জোরে।",
          },
        ],
      },
      {
        h: { en: "Where the Verse Stands", bn: "আয়াতটি কোথায় দাঁড়িয়ে" },
        p: [
          {
            en: "The verse follows 49:9, which faces the hardest case honestly: two parties of believers actually fighting. Even there the Quran calls both sides believers, orders the community to make peace, to fight the aggressing side until it returns to Allah's command, and then to reconcile with justice. 49:10 supplies the ground for all of it: intervention is not interference, because the quarrelling parties are your brothers; a bystander to a family fracture is not neutral, he is negligent.",
            bn: "আয়াতটি আসে 49:9 আয়াতের পরে, যা সবচেয়ে কঠিন ঘটনাটির মুখোমুখি হয় সততার সঙ্গে: মুমিনদের দুটি দল সত্যিই লড়ছে। সেখানেও কুরআন দুই পক্ষকেই বলে মুমিন, সম্প্রদায়কে নির্দেশ দেয় মীমাংসা করতে, বাড়াবাড়িকারী পক্ষের বিরুদ্ধে লড়তে যতক্ষণ না সে আল্লাহর নির্দেশে ফিরে আসে, তারপর ইনসাফের সঙ্গে মীমাংসা করতে। 49:10 এসবের ভিতটি জোগায়: হস্তক্ষেপ এখানে অনধিকারচর্চা নয়, কারণ বিবাদমান পক্ষরা তোমার ভাই; পরিবারের ভাঙনের সামনে দাঁড়ানো দর্শক নিরপেক্ষ নয়, সে দায়িত্বে অবহেলাকারী।",
          },
          {
            en: "And immediately after, 49:11-12 ban the small solvents that dissolve brotherhood before any fight begins: mockery, insulting nicknames, suspicion, spying, backbiting — the last pictured as eating a dead brother's flesh. The arrangement is a complete policy: 49:9 treats the open wound, 49:10 states the bond, 49:11-12 remove the slow poisons. The surah legislates for brotherhood the way one maintains anything precious: repair, foundation, and prevention.",
            bn: "আর ঠিক পরেই 49:11-12 নিষিদ্ধ করে সেই ছোট দ্রাবকগুলো, কোনো লড়াই শুরুর আগেই যা ভ্রাতৃত্বকে গলিয়ে দেয়: উপহাস, আপত্তিকর ডাকনাম, কুধারণা, গোয়েন্দাগিরি, গীবত — শেষটিকে চিত্রিত করা হয়েছে মৃত ভাইয়ের গোশত খাওয়া রূপে। বিন্যাসটি একটি পূর্ণাঙ্গ নীতি: 49:9 খোলা ক্ষতের চিকিৎসা করে, 49:10 বন্ধনটি ঘোষণা করে, 49:11-12 ধীর বিষগুলো সরায়। মূল্যবান যেকোনো জিনিস মানুষ যেভাবে রক্ষণাবেক্ষণ করে, সূরাটি ভ্রাতৃত্বের জন্য সেভাবেই আইন করে: মেরামত, ভিত্তি, আর প্রতিরোধ।",
          },
        ],
      },
      {
        h: { en: "What Brotherhood Obliges", bn: "ভ্রাতৃত্ব কী দাবি করে" },
        p: [
          {
            en: "The Prophet ﷺ filled the word with duties. Muslim relates from Abu Hurayrah (RA): do not envy one another, do not inflate prices against one another, do not hate one another, do not turn away from one another, and be, servants of Allah, brothers — the Muslim is the brother of the Muslim; he does not wrong him, nor forsake him, nor despise him. The hadith then points at the chest: taqwa is here. The bond's failures begin as inner states.",
            bn: "নবী ﷺ শব্দটিকে দায়িত্বে পূর্ণ করেছেন। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: তোমরা পরস্পরকে হিংসা কোরো না, একে অন্যের বিরুদ্ধে দাম বাড়িয়ে দিয়ো না, পরস্পরকে ঘৃণা কোরো না, একে অন্যের দিক থেকে মুখ ফিরিয়ে নিয়ো না — আর হে আল্লাহর বান্দারা, ভাই হয়ে যাও — মুসলিম মুসলিমের ভাই; সে তার প্রতি জুলুম করে না, তাকে অসহায় ফেলে না, তাকে তুচ্ছও করে না। হাদীসটি এরপর বুকের দিকে ইশারা করে: তাকওয়া এখানে। বন্ধনটির ব্যর্থতাগুলো শুরু হয় ভেতরের অবস্থা হিসেবে।",
          },
          {
            en: "Al-Bukhari relates from Abu Musa (RA): the believer to the believer is like a building, parts of it binding other parts — and the Prophet ﷺ interlaced his fingers. And 3:103 tells the believers to remember the favour: you were enemies, and He joined your hearts, and by His favour you became brothers. Brotherhood is listed among Allah's gifts, not among human achievements — which is why damaging it is treated in the surah with such severity.",
            bn: "বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: মুমিন মুমিনের জন্য ইমারতের মতো — যার এক অংশ আরেক অংশকে শক্ত করে ধরে রাখে — আর নবী ﷺ নিজের আঙুলগুলো পরস্পরে প্রবেশ করালেন। আর 3:103 মুমিনদের বলে নিয়ামতটি স্মরণ করতে: তোমরা ছিলে শত্রু, তিনি তোমাদের হৃদয়গুলো জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেলে। ভ্রাতৃত্ব তালিকাভুক্ত আল্লাহর দানের মধ্যে, মানুষের অর্জনের মধ্যে নয় — আর এ কারণেই এর ক্ষতিসাধনকে সূরাটিতে এত কঠোরভাবে দেখা হয়েছে।",
          },
        ],
      },
      {
        h: { en: "The Rank of the Peacemaker", bn: "মীমাংসাকারীর মর্যাদা" },
        p: [
          {
            en: "Because the bond is Allah's gift, mending it ranks startlingly high. Abu Dawud relates from Abu ad-Darda (RA) that the Prophet ﷺ said: shall I not inform you of a degree better than the rank of fasting, prayer and charity? Setting right what is between people — and the corruption of what is between people is the shaver. At-Tirmidhi's narration adds: I do not say it shaves hair, but it shaves the religion.",
            bn: "বন্ধনটি যেহেতু আল্লাহর দান, তাই তা জোড়া লাগানোর মর্যাদা চমকে দেওয়ার মতো উঁচু। আবু দাউদ আবু দারদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমি কি তোমাদের এমন এক স্তরের কথা জানাব না, যা রোযা, নামায ও সদকার মর্যাদার চেয়েও উত্তম? মানুষের পারস্পরিক সম্পর্ক ঠিক করে দেওয়া — আর পারস্পরিক সম্পর্কের বিনাশই হলো মুণ্ডনকারী। তিরমিযীর বর্ণনা যোগ করে: আমি বলছি না তা চুল কামায়, বরং তা দ্বীনকে কামিয়ে ফেলে।",
          },
          {
            en: "The permissions granted to peacemaking mark its weight too: the one who conveys good and adds good in order to reconcile people is not counted a liar — al-Bukhari relates it from Umm Kulthum bint Uqbah (RA). Exaggeration is forbidden and backbiting is forbidden, yet the strictness of literal reporting is relaxed for this one purpose. The law itself signals that a repaired bond between believers outweighs conventions it would normally never touch.",
            bn: "মীমাংসার জন্য দেওয়া ছাড়গুলোও এর ওজন চিহ্নিত করে: মানুষের মধ্যে মিলমিশ করাতে যে ভালো কথা পৌঁছে দেয় ও ভালো কথা যোগ করে, সে মিথ্যাবাদী গণ্য হয় না — বুখারী এটি উম্মে কুলসুম বিনতে উকবা (রাঃ) থেকে বর্ণনা করেন। অতিরঞ্জন নিষিদ্ধ, গীবতও নিষিদ্ধ, তবু আক্ষরিক প্রতিবেদনের কঠোরতা শিথিল করা হয়েছে কেবল এই একটি উদ্দেশ্যে। শরীয়ত নিজেই সংকেত দেয়: মুমিনদের মধ্যে জোড়া লাগা একটি বন্ধনের ওজন এমন সব রীতির চেয়ে বেশি, সাধারণত যা সে স্পর্শই করত না।",
          },
        ],
      },
      {
        h: { en: "That You May Be Shown Mercy", bn: "যাতে তোমাদের প্রতি রহম করা হয়" },
        p: [
          {
            en: "The closing clauses discipline the peacemaker. Wa-attaqu Allaha: reconciliation is done with taqwa — justly, as 49:9 demanded, without favouring the stronger side, without burying a right to end a quarrel quickly. La'allakum turhamun: that you may be shown mercy. The commentators hear the correspondence: those who labour to restore mercy between servants stand in the path of mercy from their Master. At-Tirmidhi relates the Prophet's ﷺ words: those who show mercy are shown mercy by the Most Merciful; show mercy to those on earth, and the One above the heaven will show mercy to you.",
            bn: "সমাপ্তির বাক্যগুলো মীমাংসাকারীকে শৃঙ্খলায় আনে। 'ওয়াত্তাকুল্লাহ': মীমাংসা হবে তাকওয়ার সঙ্গে — ইনসাফে, যেমন 49:9 দাবি করেছে — শক্তিশালী পক্ষের প্রতি পক্ষপাত না করে, ঝগড়া দ্রুত মেটাতে কারও হক চাপা না দিয়ে। 'লাআল্লাকুম তুরহামূন' — যাতে তোমাদের প্রতি রহম করা হয়। মুফাসসিরগণ সাদৃশ্যটি শুনতে পান: বান্দাদের মধ্যে রহমত ফিরিয়ে আনতে যারা পরিশ্রম করে, তারা দাঁড়ায় তাদের মালিকের রহমতের পথে। তিরমিযী নবী ﷺ-এর কথাটি বর্ণনা করেন: দয়াশীলদের প্রতি পরম দয়াময় দয়া করেন; যমীনে যারা আছে তাদের প্রতি দয়া করো — আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।",
          },
        ],
      },
      {
        h: { en: "Doing the Verse", bn: "আয়াতটি কাজে করা" },
        p: [
          {
            en: "The verse assigns work to the third party, which is most of us most of the time. Somewhere in every believer's circle two people are not speaking. The verse's claim is that their quarrel is your file, because both are your brothers; the passive hope that it resolves itself is not among the options offered. The method is modest: carry good words in both directions, host the meeting, absorb a little of the blame if it helps, and keep the justice of 49:9 in view throughout.",
            bn: "আয়াতটি কাজ বরাদ্দ করে তৃতীয় পক্ষকে — বেশিরভাগ সময় যা আমরা অধিকাংশ মানুষই। প্রতিটি মুমিনের বৃত্তের কোথাও না কোথাও দুজন মানুষ কথা বলছে না। আয়াতের দাবি: তাদের ঝগড়াটি তোমার নথি, কারণ দুজনেই তোমার ভাই; নিজে নিজে মিটে যাবে — এই নিষ্ক্রিয় আশা প্রস্তাবিত বিকল্পগুলোর মধ্যে নেই। পদ্ধতিটি বিনীত: দুই দিকেই ভালো কথা বয়ে নাও, সাক্ষাতের আয়োজন করো, কাজে লাগলে দোষের খানিকটা নিজের কাঁধে নাও, আর পুরোটা সময় 49:9 আয়াতের ইনসাফ চোখের সামনে রাখো।",
          },
          {
            en: "And for one's own quarrels, the Prophet ﷺ set a deadline: it is not lawful for a Muslim to forsake his brother beyond three nights, the two meeting and each turning away — and the better of them is the one who begins with the salam; al-Bukhari relates it from Abu Ayyub (RA). Brotherhood, the verse's fact, outlives every argument; the greeting that reopens it costs one word, and the better man pays it first.",
            bn: "আর নিজের ঝগড়ার জন্য নবী ﷺ একটি সময়সীমা বেঁধে দিয়েছেন: কোনো মুসলিমের জন্য বৈধ নয় তিন রাতের বেশি তার ভাইকে বর্জন করা — দুজনের দেখা হয় আর দুজনেই মুখ ফিরিয়ে নেয় — আর তাদের মধ্যে উত্তম সে-ই, যে আগে সালাম দিয়ে শুরু করে; বুখারী এটি আবু আইয়ুব (রাঃ) থেকে বর্ণনা করেন। ভ্রাতৃত্ব — আয়াতের সেই সত্য — প্রতিটি তর্কের চেয়ে দীর্ঘজীবী; যে অভিবাদন তা আবার খুলে দেয় তার দাম একটি শব্দ, আর উত্তম মানুষটিই তা আগে চুকায়।",
          },
        ],
      },
    ],
  },
  '61:2': {
    sections: [
      {
        h: { en: "A Question That Cuts", bn: "যে প্রশ্ন কেটে বসে" },
        p: [
          {
            en: "Ya ayyuha alladhina amanu lima taquluna ma la taf'alun: O you who believe, why do you say what you do not do? The Quran uses questions when it wants the listener to convict himself, and this one leaves no shelter: it is addressed to believers, in the vocative of honour, about a gap everyone recognises from inside. No hypocrite is being unmasked here; the people of faith are being asked to look at the distance between their sentences and their schedules.",
            bn: "'ইয়া আইয়ুহাল্লাযীনা আমানূ লিমা তাকূলূনা মা লা তাফআলূন' — হে ঈমানদারগণ, তোমরা কেন বলো যা তোমরা করো না? কুরআন তখনই প্রশ্ন ব্যবহার করে যখন সে চায় শ্রোতা নিজেই নিজেকে দোষী সাব্যস্ত করুক — আর এই প্রশ্নটি কোনো আশ্রয় রাখে না: এটি সম্বোধিত মুমিনদের প্রতি, সম্মানের সম্বোধনে, এমন এক ফাঁক নিয়ে যা প্রত্যেকে ভেতর থেকে চেনে। এখানে কোনো মুনাফিকের মুখোশ খোলা হচ্ছে না; ঈমানের মানুষদেরই বলা হচ্ছে তাদের বাক্য আর তাদের রুটিনের মধ্যকার দূরত্বটির দিকে তাকাতে।",
          },
          {
            en: "The next verse states the weight: kabura maqtan 'inda Allahi an taqulu ma la taf'alun — grievous is it, as maqt, in the sight of Allah, that you say what you do not do, 61:3 warns. Maqt is not mild displeasure; the language uses it for the most intense detestation. The commentators pause at that severity: among the sins of the tongue, the unkept word is singled out with a term of loathing the Quran reserves for very few things.",
            bn: "পরের আয়াত ওজনটি জানায়: 'কাবুরা মাকতান ইনদাল্লাহি আন তাকূলূ মা লা তাফআলূন' — আল্লাহর দৃষ্টিতে 'মাকত' হিসেবে তা কত গুরুতর — তোমরা তা বলো, যা করো না — 61:3। 'মাকত' কোনো মৃদু অসন্তোষ নয়; ভাষায় এটি ব্যবহৃত হয় তীব্রতম ঘৃণার জন্য। মুফাসসিরগণ এই কঠোরতায় থামেন: জিহ্বার পাপগুলোর মধ্যে, না-রাখা কথাটিকেই আলাদা করা হয়েছে এমন এক ঘৃণাসূচক শব্দ দিয়ে, কুরআন যা খুব অল্প জিনিসের জন্য তুলে রাখে।",
          },
        ],
      },
      {
        h: { en: "The Occasion Reported", bn: "বর্ণিত প্রেক্ষাপট" },
        p: [
          {
            en: "At-Tirmidhi relates from Abdullah ibn Salam (RA): a group of the companions sat and said, if only we knew which deed is most beloved to Allah, we would offer it — and Allah sent down Surah as-Saff, in which this reproach and the answer both came. They had spoken sincerely, and still the surah begins by tightening the bolt between saying and doing: a wish voiced creates a liability the sincere feel more, not less.",
            bn: "তিরমিযী আবদুল্লাহ ইবনে সালাম (রাঃ) থেকে বর্ণনা করেন: সাহাবীদের একটি দল বসে বলেছিলেন — আমরা যদি জানতাম কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয়, আমরা তা পেশ করতাম — আর আল্লাহ নাযিল করলেন সূরা আস-সাফ, যাতে এই ভর্ৎসনা ও উত্তর দুটোই এল। তাঁরা কথাটি বলেছিলেন আন্তরিকভাবে, তবু সূরাটি শুরু হয় বলা ও করার মধ্যকার স্ক্রুটি টেনে দিয়ে: মুখে আনা একটি ইচ্ছা এমন এক দায় তৈরি করে, আন্তরিক মানুষরা যা কম নয়, বরং বেশি অনুভব করে।",
          },
          {
            en: "The surah's structure completes the thought. Two verses after the reproach, 61:4 names what Allah loves: those who fight in His cause in a row, as though they were a structure joined with lead. The contrast is deliberate — speech scatters easily; a saff, a row, is speech become arrangement, bodies actually placed where the words pointed. The companions had asked for the most beloved deed; they were answered with an image of commitment holding formation.",
            bn: "সূরার কাঠামো ভাবনাটি সম্পূর্ণ করে। ভর্ৎসনার দুই আয়াত পরে, 61:4 নাম বলে আল্লাহ কী ভালোবাসেন: যারা তাঁর পথে লড়ে সারিবদ্ধ হয়ে — যেন তারা সীসা-ঢালাই করা এক ইমারত। বৈপরীত্যটি ইচ্ছাকৃত — কথা সহজে ছড়িয়ে পড়ে; 'সাফ' — সারি — হলো কথা যখন বিন্যাসে পরিণত, দেহগুলো সত্যিই সেখানে স্থাপিত, শব্দগুলো যেদিকে ইশারা করেছিল। সাহাবীরা চেয়েছিলেন সবচেয়ে প্রিয় আমল; উত্তরে তাঁদের দেওয়া হলো ব্যূহ ধরে রাখা অঙ্গীকারের একটি চিত্র।",
          },
        ],
      },
      {
        h: { en: "Saying Without Doing", bn: "না করে বলা" },
        p: [
          {
            en: "Tabari relates the range the early commentators saw in the verse: the man who claims deeds he did not do; the one who promises and does not fulfil; those who said they longed to fight, then flinched when fighting was prescribed. The wording covers them all, and later scholars extended the light it casts: the vow deferred, the resolution announced each Ramadan and abandoned, the advice dispensed to others by a tongue its own limbs ignore.",
            bn: "তাবারী প্রাথমিক যুগের মুফাসসিরগণ আয়াতটিতে যে পরিসর দেখেছেন তা বর্ণনা করেন: যে ব্যক্তি এমন আমলের দাবি করে যা সে করেনি; যে প্রতিশ্রুতি দেয় কিন্তু পূরণ করে না; যারা বলেছিল তারা লড়াইয়ের আকাঙ্ক্ষা রাখে, তারপর লড়াই ফরয হলে পিছিয়ে গেল। শব্দবিন্যাস সবাইকে ঢেকে নেয়, আর পরবর্তী আলিমগণ এর আলো আরও ছড়িয়ে দেন: ফেলে রাখা মানত, প্রতি রমযানে ঘোষিত ও পরিত্যক্ত সংকল্প, আর সেই জিহ্বার অন্যদের বিলানো উপদেশ, যার নিজের অঙ্গ-প্রত্যঙ্গই তা মানে না।",
          },
          {
            en: "That last case has its own verses and its own terror. 2:44 asks: do you command people to righteousness and forget yourselves, while you recite the Book? Al-Bukhari relates from Usamah ibn Zayd (RA) that the Prophet ﷺ described a man thrown into the Fire whose entrails spill out, and he circles them like a donkey at a mill; asked by people who had known his preaching, he answers: I commanded good and did not do it, and forbade evil and did it.",
            bn: "শেষ ক্ষেত্রটির নিজস্ব আয়াত এবং নিজস্ব ভয় আছে। 2:44 জিজ্ঞেস করে: তোমরা কি মানুষকে সৎকাজের নির্দেশ দাও আর নিজেদের ভুলে যাও, অথচ তোমরা কিতাব তিলাওয়াত করো? বুখারী উসামা ইবনে যায়েদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ এক ব্যক্তির বর্ণনা দিয়েছেন — তাকে আগুনে নিক্ষেপ করা হবে, তার নাড়িভুঁড়ি বেরিয়ে পড়বে, আর সে তা নিয়ে ঘুরবে যেভাবে গাধা ঘোরে জাঁতাকলে; তার ওয়াজ চেনা লোকেরা জিজ্ঞেস করলে সে উত্তর দেবে: আমি সৎকাজের নির্দেশ দিতাম কিন্তু নিজে করতাম না, মন্দ থেকে নিষেধ করতাম অথচ নিজে করতাম।",
          },
        ],
      },
      {
        h: { en: "The Standard Kept", bn: "রক্ষিত মানদণ্ড" },
        p: [
          {
            en: "The Quran also shows the standard kept. Shu'ayb (AS) told his people in 11:88 — I do not intend to differ from you in that which I forbid you — the preacher's integrity stated as policy. And of the Prophet ﷺ, Aisha (RA) said, in what Muslim relates, that his character was the Quran: the Book was not a text he delivered but a description of how he lived. 33:21 draws the conclusion for us: in the Messenger of Allah you have a beautiful example.",
            bn: "কুরআন মানদণ্ডটি রক্ষিত অবস্থাতেও দেখায়। শুআইব (আঃ) 11:88 আয়াতে তাঁর জাতিকে বলেছিলেন: আমি তোমাদের যা নিষেধ করি, তাতে নিজে তোমাদের বিপরীত করতে চাই না — দাঈর সততা নীতি হিসেবে ঘোষিত। আর নবী ﷺ সম্পর্কে আয়েশা (রাঃ) বলেছেন — মুসলিম যা বর্ণনা করেন — তাঁর চরিত্রই ছিল কুরআন: কিতাবটি তাঁর পৌঁছে দেওয়া কোনো পাঠ্য ছিল না, ছিল তাঁর জীবনযাপনের বিবরণ। 33:21 আমাদের জন্য সিদ্ধান্তটি টেনে দেয়: আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে উত্তম আদর্শ।",
          },
        ],
      },
      {
        h: { en: "Not a Ban on Imperfect Teachers", bn: "অপূর্ণ শিক্ষকদের জন্য নিষেধাজ্ঞা নয়" },
        p: [
          {
            en: "The commentators are careful about what the verse does not say. It does not require silence from anyone still struggling; if only the flawless could enjoin good, the duty of 3:104 — let there be a community calling to good — would fall from everyone. The condemned thing is the settled split: speaking with no intention of doing, wearing words as costume. The one who commands what he attempts, fails at and repents of is in a different condition entirely — his gap is a wound he is treating, not a wardrobe.",
            bn: "আয়াতটি কী বলে না, সে বিষয়ে মুফাসসিরগণ সতর্ক। এটি সংগ্রামরত কারও কাছে নীরবতা দাবি করে না; নিখুঁত মানুষরাই কেবল সৎকাজের আদেশ দিতে পারলে 3:104 আয়াতের দায়িত্ব — একটি দল থাকুক যারা কল্যাণের দিকে ডাকে — সবার কাঁধ থেকেই খসে পড়ত। নিন্দিত জিনিসটি হলো থিতু হয়ে যাওয়া বিভাজন: করার কোনো নিয়ত ছাড়াই বলা, শব্দকে পোশাকের মতো পরা। যে ব্যক্তি সেই কাজের আদেশ দেয় যা সে চেষ্টা করে, যাতে ব্যর্থ হয় ও যার জন্য তওবা করে — সে সম্পূর্ণ ভিন্ন অবস্থায় — তার ফাঁকটি একটি ক্ষত, যার সে চিকিৎসা করছে; কোনো পোশাক-আলমারি নয়।",
          },
        ],
      },
      {
        h: { en: "Closing the Gap", bn: "ফাঁকটি বন্ধ করা" },
        p: [
          {
            en: "The verse's discipline runs through the tongue's ledger. Say less ahead of deeds: the Prophet ﷺ, as al-Bukhari relates from Aisha (RA), held the most beloved deeds to Allah to be the most constant, even if small — sustained action over announced ambition. Move commitments from speech to schedule before speaking of them, and let some good deeds remain unannounced entirely, as 2:271 permits concealing charity and calls it better. Words spent after the deed are testimony; spent before it, they are debt.",
            bn: "আয়াতটির শৃঙ্খলা চলে জিহ্বার খাতা ধরে। আমলের আগে কম বলুন: নবী ﷺ — বুখারী আয়েশা (রাঃ) থেকে যা বর্ণনা করেন — আল্লাহর কাছে সবচেয়ে প্রিয় আমল মনে করতেন সবচেয়ে নিয়মিতটিকে, তা অল্প হলেও — ঘোষিত উচ্চাশার বদলে টিকে থাকা কাজ। অঙ্গীকারগুলো মুখে আনার আগে কথা থেকে রুটিনে সরান, আর কিছু নেক আমল একেবারেই অঘোষিত থাকতে দিন — যেমন 2:271 সদকা গোপন করার অনুমতি দেয় এবং তাকে বলে উত্তম। আমলের পরে খরচ করা শব্দ সাক্ষ্য; আগে খরচ করলে তা ঋণ।",
          },
          {
            en: "And use the verse as a filter rather than a torment. Before the next promise, the next public resolution, the next piece of advice, its question is available in the Quran's own words: will I do this? Asked honestly, it shrinks speech to the size of intention — and then, strangely, enlarges action, because words no longer spend the energy the deeds needed. The believers of 61:4, standing in their welded row, are the finished picture: people whose saying and doing had become one thing.",
            bn: "আর আয়াতটিকে যন্ত্রণা নয়, ছাঁকনি হিসেবে ব্যবহার করুন। পরের প্রতিশ্রুতি, পরের প্রকাশ্য সংকল্প, পরের উপদেশটির আগে এর প্রশ্নটি কুরআনের নিজের ভাষাতেই হাতের কাছে: আমি কি এটা করব? সততার সঙ্গে জিজ্ঞেস করলে এটি কথাকে ছেঁটে আনে নিয়তের মাপে — আর তারপর, আশ্চর্যভাবে, কাজকে বড় করে দেয়, কারণ আমলের যে শক্তিটুকু দরকার ছিল, শব্দরা আর তা খরচ করে না। 61:4 আয়াতের মুমিনরা, তাদের ঢালাই-জোড়া সারিতে দাঁড়িয়ে, সমাপ্ত ছবিটি: এমন মানুষ, যাদের বলা আর করা এক জিনিস হয়ে গিয়েছিল।",
          },
        ],
      },
    ],
  },
'16:96-97': {
  sections: [
    {
      h: { en: "A Trade Already Running", bn: "একটি চলমান লেনদেন" },
      p: [
        {
          en: "The verse does not arrive out of nowhere. The passage before it, from 16:91, commands the believers to keep the covenant of Allah once they have given it, and 16:95 warns them not to sell that covenant for a small price, for what is with Allah is better. Then comes the sentence this article turns on: whatever is with you runs out, and whatever is with Allah remains. The subject is still that trade — what a person accepts in exchange for breaking or keeping faith.",
          bn: "আয়াতটি হঠাৎ শূন্য থেকে আসেনি। এর আগের অংশে, 16:91 থেকে, মুমিনদের আদেশ দেওয়া হয়েছে আল্লাহর অঙ্গীকার একবার দিলে তা রক্ষা করতে, আর 16:95 সতর্ক করেছে সেই অঙ্গীকার সামান্য মূল্যে বিক্রি না করতে, কারণ আল্লাহর কাছে যা আছে তা-ই উত্তম। তারপর আসে সেই বাক্য যাকে ঘিরে এই লেখা: তোমাদের কাছে যা আছে তা ফুরিয়ে যায়, আর আল্লাহর কাছে যা আছে তা থেকে যায়। বিষয়টি তখনো সেই লেনদেনই — বিশ্বাস ভাঙা বা রাখার বিনিময়ে মানুষ কী গ্রহণ করে।",
        },
        {
          en: "The Arabic verb yanfadu is in the present tense: what is with you is not something that will one day run out, it is running out now, continuously, as you hold it. Money is being spent, health is being used, positions are being aged out of. Against that steady leak the verse sets a single word for what is with Allah: baq, remaining. The comparison is not between two treasures but between a draining vessel and one that cannot drain.",
          bn: "আরবি ক্রিয়াপদ 'ইয়ানফাদু' বর্তমান কালের: তোমাদের কাছে যা আছে তা একদিন ফুরাবে — ব্যাপারটা শুধু তা নয়; তা এখনই ফুরাচ্ছে, অবিরাম, তোমার হাতে থাকা অবস্থাতেই। টাকা খরচ হচ্ছে, স্বাস্থ্য ক্ষয় হচ্ছে, পদ-মর্যাদা বয়সের সঙ্গে হাতছাড়া হচ্ছে। এই অবিরাম ক্ষরণের বিপরীতে আয়াতটি আল্লাহর কাছে যা আছে তার জন্য একটিমাত্র শব্দ রাখে: 'বাক' — অবশিষ্ট, স্থায়ী। তুলনাটি দুটি ধনভাণ্ডারের মধ্যে নয়, বরং একটি ফুটো পাত্র আর এমন এক পাত্রের মধ্যে যা কখনো খালি হয় না।",
        },
      ],
    },
    {
      h: { en: "Paid at the Best Rate", bn: "সর্বোত্তম হারে প্রতিদান" },
      p: [
        {
          en: "The reward clause in 16:96 is precise: We will surely pay those who were patient their reward according to the best of what they used to do. The commentators pause on that phrase, bi-ahsani ma kanu ya'malun. A person's record holds deeds of mixed quality — some prayed with presence, some rushed. The promise is that the best of the work sets the standard by which the whole is repaid. No employer settles accounts this way; the generosity is in the wording itself.",
          bn: "16:96 আয়াতের প্রতিদানের বাক্যটি সুনির্দিষ্ট: যারা ধৈর্য ধরেছে, আমি অবশ্যই তাদের প্রতিদান দেব তাদের সর্বোত্তম কাজ অনুসারে। মুফাসসিরগণ এই বাক্যাংশে থামেন — 'বি-আহসানি মা কানূ ইয়া'মালূন'। মানুষের আমলনামায় মিশ্র মানের কাজ থাকে — কোনো নামায পূর্ণ মনোযোগে পড়া, কোনোটি তাড়াহুড়োয়। প্রতিশ্রুতি হলো: কাজের সেরা অংশটিই সেই মানদণ্ড ঠিক করে দেয়, যে হারে পুরোটার প্রতিদান দেওয়া হয়। কোনো নিয়োগকর্তা এভাবে হিসাব মেটায় না; উদারতা শব্দচয়নের ভেতরেই।",
        },
        {
          en: "Notice also who is being paid: those who were patient. Patience is named because holding on to what is with Allah requires letting the visible, countable price slip past. The person who kept a covenant when breaking it paid well, or stayed honest when a lie was cheaper, has watched something run out of their hands. The verse says that what they were actually holding did not run out at all; it changed accounts.",
          bn: "আরও লক্ষ করুন, প্রতিদান কাদের দেওয়া হচ্ছে: যারা ধৈর্য ধরেছে। ধৈর্যের নাম নেওয়া হয়েছে কারণ আল্লাহর কাছে যা আছে তা আঁকড়ে ধরতে হলে চোখে-দেখা, গোনা-যায় এমন মূল্যকে হাতছাড়া হতে দিতে হয়। যে মানুষ অঙ্গীকার রক্ষা করেছে যখন তা ভাঙলে ভালো দাম মিলত, বা সৎ থেকেছে যখন মিথ্যা ছিল সস্তা — সে নিজের হাত থেকে কিছু ফুরিয়ে যেতে দেখেছে। আয়াত বলে, সে আসলে যা ধরে রেখেছিল তা মোটেও ফুরায়নি; তা শুধু হিসাবের খাতা বদলেছে।",
        },
      ],
    },
    {
      h: { en: "Whoever Works, Man or Woman", bn: "যে-ই আমল করে, নারী বা পুরুষ" },
      p: [
        {
          en: "Then 16:97 widens the promise to its full breadth: whoever does righteousness, male or female, while being a believer. The explicit mention of both sexes is not decoration. The commentators note that it closes off any suspicion that the reward economy of the previous verse belongs to one class of servant. Two conditions stand, and only two: the work must be righteous, and the worker must be a believer, since faith is what gives a deed its direction and its worth.",
          bn: "এরপর 16:97 প্রতিশ্রুতিটিকে তার পূর্ণ বিস্তারে ছড়িয়ে দেয়: যে-ই সৎকর্ম করে, পুরুষ হোক বা নারী, মুমিন অবস্থায়। উভয় লিঙ্গের স্পষ্ট উল্লেখ কোনো অলংকার নয়। মুফাসসিরগণ লক্ষ করেন, এটি এই সন্দেহের পথ বন্ধ করে দেয় যে আগের আয়াতের প্রতিদানের অর্থনীতি কেবল এক শ্রেণির বান্দার জন্য। শর্ত দাঁড়ায় দুটি, কেবল দুটিই: কাজটি হতে হবে সৎ, আর কর্মীকে হতে হবে মুমিন — কারণ ঈমানই কাজকে তার অভিমুখ ও মূল্য দেয়।",
        },
        {
          en: "The same pairing appears in 4:124, where whoever does righteous deeds, male or female, while a believer, enters the Garden and is not wronged even the groove of a date stone. The Quran repeats this structure often enough that it cannot be incidental. Where reward is being promised, women are named alongside men in the very grammar of the sentence, before any jurist or reformer arrives to argue the point.",
          bn: "একই জোড়বাঁধা গঠন 4:124 আয়াতেও আছে: যে-ই সৎকর্ম করে, পুরুষ বা নারী, মুমিন অবস্থায়, সে জান্নাতে প্রবেশ করবে এবং খেজুর-বিচির খাঁজ পরিমাণও তার প্রতি অবিচার করা হবে না। কুরআন এই কাঠামো এত বারবার ব্যবহার করে যে একে আকস্মিক বলা যায় না। যেখানে প্রতিদানের প্রতিশ্রুতি দেওয়া হচ্ছে, সেখানে বাক্যের ব্যাকরণের ভেতরেই নারীদের নাম পুরুষদের পাশে রাখা হয়েছে — কোনো ফকীহ বা সংস্কারক এসে যুক্তি দেখানোর আগেই।",
        },
      ],
    },
    {
      h: { en: "The Good Life Promised", bn: "প্রতিশ্রুত উত্তম জীবন" },
      p: [
        {
          en: "The promise itself comes doubled with emphasis in the Arabic: fa-la-nuhyiyannahu hayatan tayyibah, then We will surely give him a good life. Ibn Kathir gathers the explanations of the early authorities — lawful provision according to some, contentment according to others, the sweetness of obedience according to others still — and rules that the good life includes all of these together. It is not a promise of wealth. It is a promise that the inside of the life will be well.",
          bn: "প্রতিশ্রুতিটি আরবিতে দ্বিগুণ জোর নিয়ে আসে: 'ফালানুহয়িয়ান্নাহু হায়াতান তাইয়িবাহ' — তাহলে আমি অবশ্যই তাকে এক উত্তম জীবন দান করব। ইবনে কাসীর প্রাচীন ইমামদের ব্যাখ্যাগুলো একত্র করেন — কারও মতে হালাল রিযিক, কারও মতে অল্পে তুষ্টি, আবার কারও মতে আনুগত্যের স্বাদ — এবং সিদ্ধান্ত দেন যে উত্তম জীবন এই সবকিছুকে একসঙ্গে ধারণ করে। এটি সম্পদের প্রতিশ্রুতি নয়। এটি এই প্রতিশ্রুতি যে জীবনের ভেতরটা ভালো থাকবে।",
        },
        {
          en: "The verse then repeats the wage clause of 16:96 word for word: their reward by the best of what they used to do. So the righteous believer is paid twice, once here in the currency of a good life, once there at the best-deed rate. Compare 28:60, where whatever you have been given is the enjoyment of this life, and what is with Allah is better and more lasting. The two payments are not in competition; one is pocket money, one is the estate.",
          bn: "আয়াতটি এরপর 16:96 আয়াতের মজুরির বাক্যটি হুবহু আবার বলে: তাদের সর্বোত্তম কাজ অনুসারে তাদের প্রতিদান। সুতরাং সৎকর্মশীল মুমিনকে দুবার দেওয়া হয় — একবার এখানে, উত্তম জীবনের মুদ্রায়; একবার সেখানে, সর্বোত্তম-আমলের হারে। তুলনা করুন 28:60 আয়াতের সঙ্গে: তোমাদের যা দেওয়া হয়েছে তা দুনিয়ার জীবনের ভোগসামগ্রী, আর আল্লাহর কাছে যা আছে তা উত্তম ও স্থায়ী। এই দুই প্রাপ্তি পরস্পরের প্রতিদ্বন্দ্বী নয়; একটি হাতখরচ, অন্যটি উত্তরাধিকার।",
        },
      ],
    },
    {
      h: { en: "Living the Exchange", bn: "এই বিনিময় যাপন করা" },
      p: [
        {
          en: "The practical test of this verse arrives at specific moments: the contract that could be quietly bent, the hour that could go to display rather than duty, the charity that competes with a purchase. At each such fork the two columns of 16:96 are actually on the table — one thing that will deplete, one that will remain. Naming the fork in those exact terms, while standing at it, is what the mufassirun mean by living with the Hereafter in view.",
          bn: "এই আয়াতের ব্যবহারিক পরীক্ষা আসে নির্দিষ্ট মুহূর্তে: যে চুক্তি চুপিসারে বাঁকানো যেত, যে ঘণ্টা কর্তব্যের বদলে লোকদেখানোয় যেতে পারত, যে দান কোনো কেনাকাটার সঙ্গে প্রতিযোগিতায় নেমেছে। এমন প্রতিটি দোরাহায় 16:96 আয়াতের দুটি ঘরই আসলে সামনে থাকে — একটি জিনিস যা ফুরিয়ে যাবে, একটি যা থেকে যাবে। দোরাহায় দাঁড়িয়ে ঠিক এই ভাষায় তাকে চিনে নেওয়াই মুফাসসিরদের ভাষায় আখিরাতকে চোখে রেখে বাঁচা।",
        },
        {
          en: "And 18:46 gives the same accounting a second wording: wealth and children are the adornment of this worldly life, but the enduring righteous deeds are better with your Lord for reward and better for hope. Adornment is not condemned there, only priced. The believer this passage builds is not someone who owns nothing, but someone who knows which of their holdings is currently evaporating and which one, with Allah, is quietly compounding.",
          bn: "আর 18:46 একই হিসাবকে দ্বিতীয় ভাষায় বলে: ধন-সম্পদ ও সন্তান-সন্ততি দুনিয়ার জীবনের শোভা, কিন্তু স্থায়ী সৎকর্মগুলো তোমার রবের কাছে প্রতিদানে উত্তম, আশাতেও উত্তম। শোভাকে সেখানে নিন্দা করা হয়নি, শুধু তার দাম নির্ধারণ করা হয়েছে। এই অংশ যে মুমিনকে গড়ে তোলে, সে এমন কেউ নয় যার কিছু নেই; বরং সে জানে তার সম্পদের কোনটি এই মুহূর্তে বাষ্প হয়ে উড়ছে আর কোনটি, আল্লাহর কাছে, নীরবে বেড়ে চলেছে।",
        },
      ],
    },
  ],
},
'6:162-163': {
  sections: [
    {
      h: { en: "The Closing Declaration", bn: "সমাপনী ঘোষণা" },
      p: [
        {
          en: "Surah al-An'am is a long Makkan surah with a single sustained argument: that the One who creates, provides and judges is alone entitled to worship. Near its end the argument stops being argued and becomes a declaration to be spoken. A series of verses beginning with qul, say, closes the surah, and 6:162-163 is their peak: say, my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds; He has no partner.",
          bn: "সূরা আল-আন'আম একটি দীর্ঘ মাক্কী সূরা, যার একটাই ধারাবাহিক যুক্তি: যিনি সৃষ্টি করেন, রিযিক দেন ও বিচার করেন, ইবাদত পাওয়ার অধিকার কেবল তাঁরই। সূরার শেষপ্রান্তে এসে যুক্তিটি আর তর্ক থাকে না, হয়ে ওঠে উচ্চারণের ঘোষণা। 'কুল' — বলো — দিয়ে শুরু হওয়া কয়েকটি আয়াতের ধারা সূরাটি শেষ করে, আর 6:162-163 তার চূড়া: বলো, আমার নামায, আমার কুরবানী, আমার জীবন ও আমার মৃত্যু — সবই আল্লাহর জন্য, যিনি জগৎসমূহের রব; তাঁর কোনো শরীক নেই।",
        },
        {
          en: "The speaker commanded to say it is the Prophet ﷺ, but the commentators read the command as a template handed to every believer, because the sentence describes what islam, surrender, actually is. The verse ends: with this I have been commanded, and I am the first of the Muslims — first of this community to submit, as Ibn Kathir explains, since every prophet before him (AS) submitted within his own nation.",
          bn: "যাঁকে এটি বলার আদেশ দেওয়া হয়েছে তিনি নবী ﷺ, কিন্তু মুফাসসিরগণ আদেশটিকে প্রত্যেক মুমিনের হাতে তুলে দেওয়া এক নমুনা হিসেবে পড়েন, কারণ বাক্যটি বর্ণনা করে ইসলাম — আত্মসমর্পণ — আসলে কী। আয়াত শেষ হয়: এরই আদেশ আমাকে দেওয়া হয়েছে, আর আমি মুসলিমদের মধ্যে প্রথম — অর্থাৎ এই উম্মতের মধ্যে প্রথম আত্মসমর্পণকারী, যেমন ইবনে কাসীর ব্যাখ্যা করেন, কেননা তাঁর আগের প্রত্যেক নবী (আঃ) নিজ নিজ জাতির মধ্যে আত্মসমর্পণ করেছিলেন।",
        },
      ],
    },
    {
      h: { en: "Four Things Handed Over", bn: "চারটি জিনিস সমর্পিত" },
      p: [
        {
          en: "The verse lists four possessions and signs them all over: salati, my prayer; nusuki, my sacrifice; mahyaya, my living; mamati, my dying. The first two are acts of worship, one of the body and tongue, one of wealth and blood. The second two are not acts at all — they are the whole span inside which acts happen. The list moves outward: from a rite, to a costlier rite, to everything a person does, to the one thing a person cannot do but only undergo.",
          bn: "আয়াতটি চারটি সম্পদের তালিকা করে সবকটি সঁপে দেয়: 'সালাতি' — আমার নামায; 'নুসুকি' — আমার কুরবানী; 'মাহইয়ায়া' — আমার জীবন; 'মামাতি' — আমার মৃত্যু। প্রথম দুটি ইবাদত — একটি দেহ ও জিহ্বার, অন্যটি সম্পদ ও রক্তের। শেষ দুটি আদৌ কোনো কাজ নয় — সেগুলো সেই গোটা পরিসর, যার ভেতরে সব কাজ ঘটে। তালিকাটি ক্রমে বাইরের দিকে যায়: একটি রীতি থেকে আরও ব্যয়বহুল রীতিতে, সেখান থেকে মানুষের সমস্ত কর্মে, আর শেষে সেই একটি জিনিসে যা মানুষ করতে পারে না, কেবল বরণ করতে পারে।",
        },
        {
          en: "Nusuk is glossed by al-Tabari and Ibn Kathir primarily as the slaughtered offering, sacrifice made to draw near to Allah, and the pairing of prayer with sacrifice recurs in 108:2, so pray to your Lord and sacrifice. The two acts answer the two idolatries of Makkah, which prayed to idols and slaughtered for them. The verse takes both channels of devotion, the one that costs breath and the one that costs blood, and routes them to a single recipient.",
          bn: "'নুসুক' শব্দটিকে তাবারী ও ইবনে কাসীর প্রধানত যবেহকৃত কুরবানী অর্থে ব্যাখ্যা করেন — আল্লাহর নৈকট্যের জন্য উৎসর্গ; আর নামায ও কুরবানীর এই জোড় আবার আসে 108:2 আয়াতে — সুতরাং তোমার রবের জন্য নামায পড়ো এবং কুরবানী করো। কাজ দুটি মক্কার দুই শিরকের জবাব, যারা মূর্তির কাছে প্রার্থনা করত এবং মূর্তির নামে যবেহ করত। আয়াতটি ভক্তির দুটি প্রণালীকেই — যেটির মূল্য নিঃশ্বাস আর যেটির মূল্য রক্ত — একটিমাত্র প্রাপকের দিকে ফিরিয়ে দেয়।",
        },
      ],
    },
    {
      h: { en: "Living and Dying for Him", bn: "তাঁর জন্য বাঁচা ও মরা" },
      p: [
        {
          en: "How can dying be for Allah, when no one chooses its hour? The commentators answer that what is handed over is not the event but its orientation: to remain on His religion until it comes, to hope to meet Him upon tawhid, to make even the manner of one's death — its patience, its testimony — an act of devotion. And living for Him does not mean living inside a mosque. It means the ordinary content of a life is aimed, by intention, at His pleasure.",
          bn: "মৃত্যু কীভাবে আল্লাহর জন্য হয়, যখন কেউ তার ক্ষণ বেছে নিতে পারে না? মুফাসসিরগণ উত্তর দেন: যা সমর্পণ করা হয় তা ঘটনাটি নয়, তার অভিমুখ — মৃত্যু আসা পর্যন্ত তাঁর দ্বীনের ওপর টিকে থাকা, তাওহীদের ওপর থেকেই তাঁর সাক্ষাতের আশা রাখা, এমনকি নিজের মৃত্যুর ধরনকেও — তার ধৈর্য, তার সাক্ষ্য — ইবাদতে পরিণত করা। আর তাঁর জন্য বাঁচার মানে মসজিদের ভেতরে বাস করা নয়। এর মানে, জীবনের সাধারণ উপকরণগুলোকে নিয়তের মাধ্যমে তাঁর সন্তুষ্টির দিকে তাক করা।",
        },
        {
          en: "This is the same purpose 51:56 states from the other direction: I did not create jinn and mankind except to worship Me. Read together, the two verses close a circle. Creation exists for worship; the believer answers by declaring that everything inside the created span, from the first breath to the last, is offered back. What was given as a loan is returned as a gift, and nothing of the life is left outside the transaction.",
          bn: "এ সেই একই উদ্দেশ্য, যা 51:56 উল্টো দিক থেকে বলে: আমি জিন ও মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি। একসঙ্গে পড়লে আয়াত দুটি একটি বৃত্ত সম্পূর্ণ করে। সৃষ্টির অস্তিত্বই ইবাদতের জন্য; মুমিন উত্তর দেয় এই ঘোষণায় যে সৃষ্ট পরিসরের ভেতরের সবকিছু — প্রথম নিঃশ্বাস থেকে শেষ নিঃশ্বাস পর্যন্ত — ফিরিয়ে নিবেদন করা হলো। যা ঋণ হিসেবে দেওয়া হয়েছিল তা উপহার হিসেবে ফেরত যায়, আর জীবনের কোনো অংশই লেনদেনের বাইরে পড়ে থাকে না।",
        },
      ],
    },
    {
      h: { en: "Recited at the Start of Prayer", bn: "নামাযের শুরুতে পঠিত" },
      p: [
        {
          en: "These words were not left as theology on a page. Muslim narrates from Ali (RA) that the Prophet ﷺ, when he stood for prayer, would open with a supplication that includes these very phrases: my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds, He has no partner, and with this I have been commanded. The declaration Allah taught in 6:162-163 became the doorway through which the Prophet ﷺ entered the prayer itself.",
          bn: "এই কথাগুলো পাতার ওপর কেবল তত্ত্ব হয়ে পড়ে থাকেনি। মুসলিম আলী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ নামাযে দাঁড়ালে এমন এক দোয়া দিয়ে শুরু করতেন যাতে ঠিক এই বাক্যগুলোই আছে: আমার নামায, আমার কুরবানী, আমার জীবন ও আমার মৃত্যু আল্লাহর জন্য, যিনি জগৎসমূহের রব, তাঁর কোনো শরীক নেই, আর এরই আদেশ আমাকে দেওয়া হয়েছে। 6:162-163 আয়াতে আল্লাহ যে ঘোষণা শেখালেন, তা-ই হয়ে গেল সেই দরজা, যা দিয়ে নবী ﷺ স্বয়ং নামাযে প্রবেশ করতেন।",
        },
        {
          en: "That usage teaches something about the verse's weight. A sentence this total could become a slogan, spoken once and framed. Instead it was placed at the threshold of a repeated act, so that the whole-life claim is renewed each time before a few minutes of standing and bowing. The largest commitment in the religion is maintained by the smallest of intervals, and the prayer that follows becomes a sample, freshly signed, of the life being promised.",
          bn: "এই ব্যবহার আয়াতটির ওজন সম্পর্কে কিছু শেখায়। এত সর্বগ্রাসী একটি বাক্য স্লোগান হয়ে যেতে পারত — একবার বলে বাঁধিয়ে রাখার জিনিস। বদলে একে রাখা হলো এক পুনরাবৃত্ত আমলের চৌকাঠে, যাতে গোটা-জীবনের দাবিটি প্রতিবার নবায়ন হয় কয়েক মিনিটের দাঁড়ানো-রুকুর আগে। দ্বীনের সবচেয়ে বড় অঙ্গীকারটি রক্ষিত হয় সবচেয়ে ছোট ছোট বিরতিতে, আর এর পরের নামাযটি হয়ে ওঠে প্রতিশ্রুত জীবনের এক টাটকা-স্বাক্ষরিত নমুনা।",
        },
      ],
    },
    {
      h: { en: "One Direction for Every Act", bn: "প্রতিটি কাজের এক অভিমুখ" },
      p: [
        {
          en: "The verse's demand, lived out, is less dramatic than it sounds and more constant. It does not ask for a heroic single sacrifice; it asks that the question for whom be answered the same way across categories that people usually keep separate — worship, work, family, rest, and finally death. The note this article expands puts it plainly: to say this sincerely is to hand over ownership of your life to the One who gave it.",
          bn: "আয়াতটির দাবি, বাস্তবে যাপন করলে, শুনতে যেমন লাগে তার চেয়ে কম নাটকীয় আর বেশি নিরবচ্ছিন্ন। এটি কোনো বীরত্বপূর্ণ একক কুরবানী চায় না; এটি চায় 'কার জন্য' প্রশ্নটির উত্তর একই হোক সেইসব খাত জুড়ে, যেগুলোকে মানুষ সাধারণত আলাদা রাখে — ইবাদত, কাজ, পরিবার, বিশ্রাম, এবং শেষে মৃত্যু। এই লেখা যে নোটটির বিস্তার, তা সরলভাবেই বলে: এ কথা আন্তরিকভাবে বলা মানে জীবনের মালিকানা তাঁর হাতে তুলে দেওয়া, যিনি তা দিয়েছিলেন।",
        },
        {
          en: "A workable practice is to test one ordinary act each day against the verse: this meal, this commute, this hour of work — can it be aimed at Allah by intention, gratitude, or excellence, and if not, why is it in the life at all? La sharika lahu, He has no partner, then does quiet work: it rules out not only idols of stone but every rival claimant to the day, approval, fear, and habit among them.",
          bn: "একটি কার্যকর অভ্যাস হলো প্রতিদিন একটি সাধারণ কাজকে আয়াতটির সামনে পরীক্ষা করা: এই খাবার, এই যাতায়াত, কাজের এই ঘণ্টা — নিয়ত, কৃতজ্ঞতা বা উৎকর্ষ দিয়ে কি একে আল্লাহর দিকে তাক করা যায়? না গেলে, তা জীবনে আছেই বা কেন? 'লা শারীকা লাহু' — তাঁর কোনো শরীক নেই — তখন নীরবে কাজ করে: এটি কেবল পাথরের মূর্তিকে বাদ দেয় না, দিনের ওপর দাবি তোলা প্রতিটি প্রতিদ্বন্দ্বীকেও বাদ দেয় — মানুষের সমর্থন, ভয় আর অভ্যাস তাদের অন্যতম।",
        },
      ],
    },
  ],
},
'9:51': {
  sections: [
    {
      h: { en: "An Answer to Gloating", bn: "বিদ্রূপের এক জবাব" },
      p: [
        {
          en: "The verse is a reply, and the provocation is preserved in the verse before it. During the season of the Tabuk expedition, Surah at-Tawbah exposes the hypocrites of Madinah at length, and 9:50 records their pattern: if good reaches you it grieves them, and if a calamity strikes you they say, we took our precaution beforehand, and they turn away rejoicing. Their happiness at the believers' hardship rested on a theory — that misfortune proves miscalculation, and that the clever stay safe.",
          bn: "আয়াতটি একটি জবাব, আর যে খোঁচার জবাব তা ঠিক আগের আয়াতে সংরক্ষিত। তাবুক অভিযানের মৌসুমে সূরা আত-তাওবাহ মদীনার মুনাফিকদের দীর্ঘভাবে উন্মোচন করে, আর 9:50 তাদের আচরণের ধরন লিখে রাখে: তোমার কাছে কল্যাণ পৌঁছালে তা তাদের পীড়া দেয়, আর তোমার ওপর বিপদ পড়লে তারা বলে, আমরা তো আগেই সাবধানতা নিয়েছিলাম — আর তারা উল্লাস করতে করতে ফিরে যায়। মুমিনদের কষ্টে তাদের আনন্দ একটি তত্ত্বের ওপর দাঁড়িয়ে ছিল — দুর্ভোগ মানেই হিসাবের ভুল, আর চালাকরাই নিরাপদ থাকে।",
        },
        {
          en: "The believers are then given one sentence to say back: nothing will ever strike us except what Allah has written for us; He is our Protector, and upon Allah let the believers rely. The reply does not deny that hardship came. It denies the hypocrites' reading of it. What arrived was neither accident nor blunder; it was decree, written before it struck, by the One who remains our Mawla through it.",
          bn: "এরপর মুমিনদের ফিরিয়ে বলার জন্য একটিমাত্র বাক্য দেওয়া হয়: আমাদের ওপর কখনোই কিছু পড়বে না, আল্লাহ আমাদের জন্য যা লিখে রেখেছেন তা ছাড়া; তিনিই আমাদের অভিভাবক, আর আল্লাহর ওপরই মুমিনদের ভরসা করা উচিত। এই জবাব অস্বীকার করে না যে কষ্ট এসেছিল। এটি অস্বীকার করে মুনাফিকদের ব্যাখ্যাটিকে। যা এসেছে তা দুর্ঘটনাও নয়, ভুল হিসাবও নয়; তা তাকদীর — আঘাত করার আগেই লেখা, তাঁরই হাতে যিনি এর মধ্য দিয়েও আমাদের মাওলা থেকে যান।",
        },
      ],
    },
    {
      h: { en: "Written For Us, Not Against Us", bn: "লেখা আমাদের পক্ষে, বিপক্ষে নয়" },
      p: [
        {
          en: "The Arabic contains a choice of preposition that the commentators, as-Sa'di among them, refuse to pass over. The verse does not say what Allah has written 'alayna, against us, but kataba lana, written for us. The event the hypocrites call a disaster is filed, in the believer's own sentence, under things granted. For people who fight and spend expecting one of two good ends, victory or reward with Allah, even the outward loss lands in the credit column.",
          bn: "আরবিতে এখানে অব্যয় বাছাইয়ের এমন এক সূক্ষ্মতা আছে, যা মুফাসসিরগণ — তাঁদের মধ্যে আস-সা'দীও — এড়িয়ে যেতে রাজি নন। আয়াতটি বলে না, আল্লাহ যা 'আলাইনা' — আমাদের বিরুদ্ধে — লিখেছেন; বলে 'কাতাবা লানা' — আমাদের জন্য, আমাদের পক্ষে লিখেছেন। মুনাফিকরা যাকে বিপর্যয় বলে, মুমিনের নিজের বাক্যে সেই ঘটনাই নথিভুক্ত হয় প্রাপ্তির খাতায়। যারা লড়ে ও ব্যয় করে দুটি শুভ পরিণতির একটির আশায় — বিজয়, নয়তো আল্লাহর কাছে প্রতিদান — তাদের কাছে বাহ্যিক ক্ষতিটুকুও জমার ঘরে পড়ে।",
        },
        {
          en: "Then comes huwa Mawlana, He is our Protector. Placed between the decree and the command to rely, the name does the explaining. A decree from a stranger might be endured; a decree from one's Mawla, the guardian who claims you and whom you claim, is trusted. The verse is not asking believers to accept that fate is unavoidable, which any fatalist manages. It asks them to accept that the One writing it is theirs.",
          bn: "তারপর আসে 'হুয়া মাওলানা' — তিনিই আমাদের অভিভাবক। তাকদীরের কথা ও ভরসার আদেশের মাঝখানে বসে নামটিই ব্যাখ্যার কাজ সারে। অচেনা কারও ফয়সালা হয়তো সহ্য করা যায়; কিন্তু নিজের মাওলার ফয়সালা — সেই অভিভাবক, যিনি তোমাকে আপন বলে দাবি করেন এবং যাঁকে তুমি আপন বলে দাবি করো — তার ওপর ভরসা করা যায়। আয়াতটি মুমিনদের বলছে না, নিয়তি অনিবার্য বলে মেনে নাও — তা তো যেকোনো অদৃষ্টবাদীই পারে। এটি বলছে মেনে নিতে যে যিনি লিখছেন তিনি তাদেরই।",
        },
      ],
    },
    {
      h: { en: "Precaution Versus Reliance", bn: "সাবধানতা বনাম তাওয়াক্কুল" },
      p: [
        {
          en: "It matters that the hypocrites' boast in 9:50 was about precaution. Islam does not oppose precaution; the same surah's campaigns involved provisions, mounts and planning, and the believers are nowhere told to abandon means. The difference is in what each party believes the means accomplish. The hypocrite believes his precaution is what kept him safe, so the struck are simply the careless. The believer takes the means and knows the outcome was written above them.",
          bn: "লক্ষণীয়, 9:50 আয়াতে মুনাফিকদের অহংকার ছিল সাবধানতা নিয়েই। ইসলাম সাবধানতার বিরোধী নয়; এই সূরারই অভিযানগুলোতে ছিল রসদ, বাহন ও পরিকল্পনা, আর মুমিনদের কোথাও বলা হয়নি উপকরণ ছেড়ে দিতে। পার্থক্য এখানে — উপকরণ কী অর্জন করে, তা নিয়ে দুই পক্ষের বিশ্বাসে। মুনাফিক বিশ্বাস করে তার সাবধানতাই তাকে বাঁচিয়েছে, কাজেই যারা আক্রান্ত তারা স্রেফ অসতর্ক। মুমিন উপকরণ গ্রহণ করে, আর জানে ফলাফল তার ঊর্ধ্বে লেখা হয়ে আছে।",
        },
        {
          en: "This is why the verse can end by commanding tawakkul, reliance, in the same breath as decree. Reliance is not the absence of effort but the placement of trust after effort. At-Tirmidhi relates the counsel of the Prophet ﷺ to Ibn Abbas (RA): know that if the whole nation gathered to harm you, they could not harm you except by something Allah had already written against you; the pens have been lifted and the pages have dried.",
          bn: "এ কারণেই আয়াতটি তাকদীরের কথার সঙ্গে একই নিঃশ্বাসে তাওয়াক্কুল — ভরসার — আদেশ দিয়ে শেষ হতে পারে। ভরসা মানে চেষ্টার অনুপস্থিতি নয়, বরং চেষ্টার পরে আস্থাটি কোথায় রাখা হলো, সেটি। তিরমিযী নবী ﷺ-এর সেই উপদেশ বর্ণনা করেন ইবনে আব্বাস (রাঃ)-কে: জেনে রাখো, গোটা জাতি জড়ো হয়েও তোমার ক্ষতি করতে পারবে না — কেবল ততটুকু ছাড়া, যা আল্লাহ আগেই তোমার ওপর লিখে রেখেছেন; কলম তুলে নেওয়া হয়েছে, পৃষ্ঠাগুলো শুকিয়ে গেছে।",
        },
      ],
    },
    {
      h: { en: "The Wider Quranic Frame", bn: "কুরআনের বৃহত্তর কাঠামো" },
      p: [
        {
          en: "Other verses complete the picture this one sketches. In 57:22-23, no calamity strikes the earth or yourselves except that it is in a book before We bring it into being, and the stated purpose follows: so that you neither despair over what escapes you nor exult over what He gives you. Belief in the prior writing is not offered as a puzzle about free will; it is offered as a regulator of the two emotions that most distort a life, grief and vanity.",
          bn: "অন্য আয়াতগুলো এই আয়াতের আঁকা ছবিটি সম্পূর্ণ করে। 57:22-23 আয়াতে: পৃথিবীতে বা তোমাদের নিজেদের ওপর এমন কোনো বিপদ আসে না, যা আমি ঘটানোর আগেই এক কিতাবে নেই; আর ঘোষিত উদ্দেশ্যটি এরপরই আসে — যেন যা হাতছাড়া হলো তার শোকে তোমরা ভেঙে না পড়ো, আর তিনি যা দিলেন তা নিয়ে অহংকার না করো। পূর্বলিখনে বিশ্বাসকে স্বাধীন ইচ্ছার ধাঁধা হিসেবে পেশ করা হয়নি; পেশ করা হয়েছে সেই দুটি আবেগের নিয়ন্ত্রক হিসেবে, যা জীবনকে সবচেয়ে বেশি বিকৃত করে — শোক ও দম্ভ।",
        },
        {
          en: "And 64:11 adds the interior effect: no calamity strikes except by Allah's permission, and whoever believes in Allah, He guides his heart. The commentators read the guided heart as the one that, in the first shock, knows what it is looking at — decree from its Protector — and so settles. The sentence of 9:51 is the spoken form of that settled heart, which is why it is given as a thing to say, not merely to think.",
          bn: "আর 64:11 যোগ করে ভেতরের প্রভাবটি: আল্লাহর অনুমতি ছাড়া কোনো বিপদ আসে না, আর যে আল্লাহর প্রতি ঈমান আনে, তিনি তার হৃদয়কে পথ দেখান। মুফাসসিরগণ পথপ্রাপ্ত হৃদয় বলতে সেই হৃদয়কে বোঝেন, যা প্রথম ধাক্কাতেই চিনে ফেলে সে কী দেখছে — নিজের অভিভাবকের ফয়সালা — আর তাই স্থির হয়ে যায়। 9:51 আয়াতের বাক্যটি সেই স্থির হৃদয়েরই উচ্চারিত রূপ; এ কারণেই এটি দেওয়া হয়েছে বলার জিনিস হিসেবে, শুধু ভাবার জিনিস হিসেবে নয়।",
        },
      ],
    },
    {
      h: { en: "Calm That Still Moves", bn: "যে প্রশান্তি তবু চলে" },
      p: [
        {
          en: "The note behind this article observes that this certainty does not make the believer passive; it makes the believer calm. The proof is the verse's own setting. It was revealed among people preparing an arduous expedition to Tabuk in heat and scarcity. The sentence was not given to people in armchairs to excuse inaction, but to people already marching, so that fear of outcomes would not turn them back. Decree, rightly believed, is fuel for the risk-taking that obedience requires.",
          bn: "এই লেখার পেছনের নোটটি লক্ষ করে: এই নিশ্চয়তা মুমিনকে নিষ্ক্রিয় করে না; করে প্রশান্ত। প্রমাণ আয়াতটির নিজের প্রেক্ষাপটেই। এটি নাযিল হয়েছিল এমন মানুষদের মাঝে, যারা প্রচণ্ড গরম ও অভাবের মধ্যে তাবুকের কঠিন অভিযানের প্রস্তুতি নিচ্ছিলেন। বাক্যটি আরামকেদারায় বসা লোকদের অলসতার অজুহাত হিসেবে দেওয়া হয়নি; দেওয়া হয়েছিল ইতিমধ্যে পথে নামা মানুষদের, যেন পরিণতির ভয় তাদের ফিরিয়ে না দেয়। তাকদীরে সঠিক বিশ্বাস সেই ঝুঁকি নেওয়ারই জ্বালানি, যা আনুগত্যের জন্য লাগে।",
        },
        {
          en: "In ordinary life the verse works the same way at a smaller scale. Before a diagnosis, an interview, a hard conversation, the sentence can be said as it was revealed to be said. What it removes is not the event but the double burden — the event plus the belief that everything hangs on your management of it. Do what is yours to do; what strikes after that was written for you, by your Protector, and He does not write carelessly.",
          bn: "দৈনন্দিন জীবনে আয়াতটি ছোট মাপে একইভাবে কাজ করে। কোনো রোগনির্ণয়ের আগে, চাকরির সাক্ষাৎকারের আগে, কঠিন কোনো কথোপকথনের আগে — বাক্যটি ঠিক সেভাবেই বলা যায়, যেভাবে বলার জন্য তা নাযিল হয়েছিল। এটি যা সরায় তা ঘটনাটি নয়, বরং দ্বিগুণ বোঝাটি — ঘটনা, আর তার সঙ্গে এই বিশ্বাস যে সবকিছু ঝুলে আছে তোমার ব্যবস্থাপনার ওপর। তোমার করণীয়টুকু করো; এরপর যা আঘাত করে তা তোমার জন্য লেখা হয়েছিল — তোমার অভিভাবকের হাতে, আর তিনি অযত্নে লেখেন না।",
        },
      ],
    },
  ],
},
'10:57': {
  sections: [
    {
      h: { en: "Addressed to All People", bn: "সব মানুষের প্রতি সম্বোধন" },
      p: [
        {
          en: "Surah Yunus circles one dispute: the people of Makkah demanded a different Quran, or that this one be changed, and the surah answers by describing what the Quran actually is. At this point the address widens beyond the disputers: ya ayyuhan-nas, O mankind. What follows is not an argument but an announcement of goods received — there has come to you an admonition from your Lord, a healing for what is in the breasts, and guidance and mercy for the believers.",
          bn: "সূরা ইউনুস একটি বিতর্ককে ঘিরে ঘোরে: মক্কার লোকেরা দাবি করেছিল ভিন্ন এক কুরআন, নয়তো এটিকেই বদলে দেওয়া হোক; আর সূরাটি উত্তর দেয় কুরআন আসলে কী তা বর্ণনা করে। এই জায়গায় এসে সম্বোধন বিতর্ককারীদের ছাড়িয়ে প্রশস্ত হয়: 'ইয়া আইয়ুহান-নাস' — হে মানবজাতি। এরপর যা আসে তা কোনো যুক্তি নয়, বরং পৌঁছে যাওয়া নিয়ামতের ঘোষণা — তোমাদের কাছে এসেছে তোমাদের রবের পক্ষ থেকে উপদেশ, বক্ষে যা আছে তার নিরাময়, আর মুমিনদের জন্য হিদায়াত ও রহমত।",
        },
        {
          en: "The phrase min rabbikum, from your Lord, carries the tone. What has arrived is not a book from a lawgiver to subjects but provision from the One who has been raising and sustaining you all along; rabb is the word of nurture. A summons from a ruler and a parcel from a caretaker are opened with different hands. The verse insists the Quran is the second kind of arrival, whatever its critics were calling it.",
          bn: "'মিন রাব্বিকুম' — তোমাদের রবের পক্ষ থেকে — বাক্যাংশটিই সুরটা ঠিক করে দেয়। যা এসে পৌঁছেছে তা কোনো বিধানদাতার পক্ষ থেকে প্রজাদের প্রতি পাঠানো বই নয়, বরং তাঁর পাঠানো রসদ, যিনি এতদিন ধরে তোমাদের লালন ও প্রতিপালন করে আসছেন; 'রব' শব্দটিই পরিচর্যার শব্দ। শাসকের তলব আর অভিভাবকের পাঠানো উপহার — দুটি মানুষ খোলে ভিন্ন হাতে। আয়াতটি জোর দিয়ে বলে, কুরআন দ্বিতীয় ধরনের আগমন — সমালোচকেরা একে যা-ই বলুক।",
        },
      ],
    },
    {
      h: { en: "Four Gifts in Order", bn: "ক্রমানুসারে চারটি দান" },
      p: [
        {
          en: "The verse names four things: maw'izah, admonition; shifa' lima fis-sudur, healing for what is in the breasts; huda, guidance; rahmah, mercy. Commentators including as-Sa'di read the sequence as a course of treatment. Admonition confronts and warns, the way a physician names the disease. Healing then works on the inner faculties the disease had corrupted. Guidance sets the recovered patient walking on the right road, and mercy is the flourishing at the road's end.",
          bn: "আয়াতটি চারটি জিনিসের নাম নেয়: 'মাওইযা' — উপদেশ; 'শিফাউল লিমা ফিস-সুদূর' — বক্ষে যা আছে তার নিরাময়; 'হুদা' — হিদায়াত; 'রহমাহ' — রহমত। আস-সা'দীসহ মুফাসসিরগণ এই ক্রমকে পড়েন একটি চিকিৎসা-পদ্ধতি হিসেবে। উপদেশ মুখোমুখি দাঁড় করায় ও সতর্ক করে — যেমন চিকিৎসক রোগের নাম বলেন। নিরাময় এরপর কাজ করে সেই ভেতরের শক্তিগুলোর ওপর, রোগ যেগুলোকে নষ্ট করেছিল। হিদায়াত সুস্থ রোগীকে সঠিক পথে হাঁটতে নামিয়ে দেয়, আর রহমত সেই পথের শেষের সমৃদ্ধি।",
        },
        {
          en: "The distribution of the gifts is equally deliberate. The admonition is announced to all mankind, but the verse ends lil-mu'minin, for the believers — guidance and mercy reach the ones who accept the treatment. Medicine on the shelf heals nobody. The Quran's benefit, the verse implies, is not automatic in a house where the book is present; it is conditional on the patient actually taking what was sent.",
          bn: "দানগুলোর বণ্টনও সমান পরিকল্পিত। উপদেশ ঘোষিত হয়েছে গোটা মানবজাতির উদ্দেশে, কিন্তু আয়াত শেষ হয় 'লিল-মুমিনীন' — মুমিনদের জন্য; হিদায়াত ও রহমত তাদের কাছেই পৌঁছায়, যারা চিকিৎসাটি গ্রহণ করে। তাকের ওপর রাখা ওষুধ কাউকে সারায় না। আয়াতের ইঙ্গিত: যে ঘরে কিতাবটি আছে সেখানে এর উপকার আপনাআপনি আসে না; শর্ত হলো — রোগীকে সত্যিই খেতে হবে যা পাঠানো হয়েছে।",
        },
      ],
    },
    {
      h: { en: "What the Breasts Carry", bn: "বক্ষ যা বহন করে" },
      p: [
        {
          en: "The healing is located precisely: lima fis-sudur, for what is in the breasts. The mufassirun name the diseases that live there — doubt about the truth, hypocrisy, envy, and the restless attachment to desires. As-Sa'di sums the classes into two: shubuhat, the confusions that sicken conviction, and shahawat, the appetites that sicken the will. The Quran treats the first with clear proofs and the second by making the Hereafter vivid and the world's price honest.",
          bn: "নিরাময়ের ঠিকানা সুনির্দিষ্ট: 'লিমা ফিস-সুদূর' — বক্ষে যা আছে তার জন্য। মুফাসসিরগণ সেখানে বাস করা ব্যাধিগুলোর নাম নেন — সত্য নিয়ে সন্দেহ, নিফাক, হিংসা, আর কামনার অস্থির আসক্তি। আস-সা'দী শ্রেণিগুলোকে দুই ভাগে গুছিয়ে আনেন: 'শুবুহাত' — যে বিভ্রান্তিগুলো প্রত্যয়কে রোগগ্রস্ত করে, আর 'শাহাওয়াত' — যে প্রবৃত্তিগুলো ইচ্ছাশক্তিকে রোগগ্রস্ত করে। কুরআন প্রথমটির চিকিৎসা করে স্পষ্ট প্রমাণ দিয়ে, আর দ্বিতীয়টির — আখিরাতকে জীবন্ত করে আর দুনিয়ার দাম সততার সঙ্গে জানিয়ে।",
        },
        {
          en: "The claim recurs in 17:82, We send down of the Quran that which is healing and mercy for the believers, though it increases the wrongdoers only in loss. The same rain grows the garden and floods the ruin; the difference is in the ground. Reading these two verses together guards against a superstition and a despair alike — the Quran is not a charm that works regardless of the heart, nor a text too lofty to reach one.",
          bn: "দাবিটি আবার আসে 17:82 আয়াতে: আমি কুরআনে এমন কিছু নাযিল করি যা মুমিনদের জন্য নিরাময় ও রহমত, যদিও তা জালিমদের ক্ষতিই কেবল বাড়ায়। একই বৃষ্টি বাগান ফলায় আর ধ্বংসস্তূপ ভাসায়; পার্থক্য মাটিতে। এই দুটি আয়াত মিলিয়ে পড়া একইসঙ্গে একটি কুসংস্কার ও একটি হতাশা থেকে বাঁচায় — কুরআন এমন কোনো কবচ নয় যা হৃদয়ের অবস্থা নির্বিশেষে কাজ করে, আবার এমন উঁচু কোনো গ্রন্থও নয় যা কারও নাগালে পৌঁছায় না।",
        },
      ],
    },
    {
      h: { en: "Better Than What They Amass", bn: "তারা যা জমায় তার চেয়ে উত্তম" },
      p: [
        {
          en: "The next verse presses the point into economics. In 10:58, say: in the bounty of Allah and in His mercy — in that let them rejoice; it is better than what they gather. Early commentators read the bounty and the mercy here as Islam and the Quran. The verse thus stages a comparison people rarely make out loud: on one side everything a lifetime can accumulate, on the other the revelation lying on the shelf, and it ranks the second higher.",
          bn: "পরের আয়াতটি কথাটিকে অর্থনীতির ভাষায় চেপে ধরে। 10:58 আয়াতে: বলো, আল্লাহর অনুগ্রহে ও তাঁর রহমতে — এতেই তারা আনন্দিত হোক; তারা যা জমা করে এর চেয়ে এটি উত্তম। প্রাচীন মুফাসসিরগণ এখানকার অনুগ্রহ ও রহমতকে পড়েছেন ইসলাম ও কুরআন অর্থে। আয়াতটি এভাবে এমন এক তুলনা মঞ্চে তোলে, যা মানুষ কমই মুখ ফুটে করে: এক পাশে গোটা জীবনে যা জমানো যায় তার সবটা, অন্য পাশে তাকের ওপর পড়ে থাকা ওহী — এবং দ্বিতীয়টিকে সে উপরে স্থান দেয়।",
        },
        {
          en: "Rejoicing is commanded, which is worth noticing. Gratitude for the Quran is not meant to stay at solemn respect; it is meant to reach the register of joy that people otherwise reserve for windfalls. A believer who would celebrate an inheritance but has never once felt lucky about owning revelation has, by the measure of 10:58, priced the two backwards.",
          bn: "আনন্দ করার আদেশ দেওয়া হয়েছে — এটি লক্ষ করার মতো। কুরআনের জন্য কৃতজ্ঞতা কেবল গম্ভীর সম্মানে থেমে থাকার কথা নয়; তার পৌঁছানোর কথা সেই আনন্দের স্তরে, যা মানুষ সাধারণত অপ্রত্যাশিত প্রাপ্তির জন্য তুলে রাখে। যে মুমিন উত্তরাধিকার পেলে উৎসব করত, অথচ ওহীর মালিক হওয়ায় একবারও নিজেকে ভাগ্যবান ভাবেনি — 10:58 আয়াতের মাপকাঠিতে সে দুটির দাম উল্টো করে ধরেছে।",
        },
      ],
    },
    {
      h: { en: "Taking the Cure", bn: "নিরাময় গ্রহণ করা" },
      p: [
        {
          en: "The lived form of this verse is a change in how one approaches the book. A person reads differently when reading for a condition: the anxious reader watching for verses on decree and provision, the doubting reader for the arguments, the hardened reader for the passages that describe hearts like his own. The note behind this article says it directly — when we come to it as a cure, we discover it was sent for exactly what ails us.",
          bn: "এই আয়াতের যাপিত রূপ হলো কিতাবটির কাছে যাওয়ার ভঙ্গিতে একটি পরিবর্তন। নিজের অসুখ সামনে রেখে পড়লে মানুষ অন্যভাবে পড়ে: উদ্বিগ্ন পাঠক খোঁজে তাকদীর ও রিযিকের আয়াত, সন্দেহগ্রস্ত পাঠক খোঁজে যুক্তিগুলো, কঠিন-হৃদয় পাঠক খোঁজে সেই অংশগুলো, যা তার নিজের মতো হৃদয়ের বর্ণনা দেয়। এই লেখার পেছনের নোটটি সরাসরিই বলে — নিরাময় হিসেবে এর কাছে গেলে আমরা আবিষ্কার করি, এটি পাঠানো হয়েছিল ঠিক আমাদের অসুখের জন্যই।",
        },
        {
          en: "Treatment also implies dosage and regularity. No one expects medicine taken once a year, on an occasion, to hold a chronic condition at bay. A small daily portion read with the question what is this saying to my present state does more of the verse's work than a long recitation performed while the mind is elsewhere. The four gifts are already in the book; the reader's part is to keep the appointment.",
          bn: "চিকিৎসা মানেই মাত্রা ও নিয়মানুবর্তিতা। বছরে একবার, কোনো উপলক্ষে খাওয়া ওষুধ দীর্ঘস্থায়ী রোগ ঠেকিয়ে রাখবে — এমনটা কেউ আশা করে না। 'এটি আমার বর্তমান অবস্থাকে কী বলছে' — এই প্রশ্ন নিয়ে পড়া ছোট্ট দৈনিক অংশ, মন অন্যত্র রেখে করা দীর্ঘ তিলাওয়াতের চেয়ে আয়াতটির কাজ বেশি করে। চারটি দান কিতাবে আগে থেকেই আছে; পাঠকের কাজ কেবল সাক্ষাতের সময়টা রক্ষা করা।",
        },
      ],
    },
  ],
},
'12:86-87': {
  sections: [
    {
      h: { en: "Grief Upon Grief", bn: "শোকের ওপর শোক" },
      p: [
        {
          en: "By this point in Surah Yusuf, Yaqub (AS) has lost twice. Yusuf (AS) was taken from him years earlier by his brothers' scheme, and now Binyamin has been detained in Egypt, with a third son remaining behind out of shame. When the old man turns away and mourns Yusuf afresh, his sons rebuke him in 12:85 — by Allah, you will not cease remembering Yusuf until you waste away or perish. His answer, in 12:86, is the sentence this article is about.",
          bn: "সূরা ইউসুফের এই পর্যায়ে ইয়াকুব (আঃ) দুবার হারিয়েছেন। ইউসুফ (আঃ)-কে বহু বছর আগে তাঁর ভাইদের চক্রান্তে তাঁর কাছ থেকে নিয়ে যাওয়া হয়েছে, আর এখন বিনয়ামীন মিসরে আটক, লজ্জায় আরেক ছেলে সেখানেই রয়ে গেছে। বৃদ্ধ পিতা যখন মুখ ফিরিয়ে ইউসুফের জন্য নতুন করে শোক করেন, তাঁর ছেলেরা 12:85 আয়াতে তাঁকে ভর্ৎসনা করে: আল্লাহর কসম, আপনি ইউসুফকে স্মরণ করা থামাবেন না, যতক্ষণ না ক্ষয়ে যান কিংবা মরে যান। তাঁর উত্তর, 12:86 আয়াতে — সেই বাক্যটিই এই লেখার বিষয়।",
        },
        {
          en: "I complain of my anguish and my grief only to Allah, and I know from Allah what you do not know. The reply does not deny the grief, does not perform composure for the audience, and does not apologize for decades of sorrow. It states where the sorrow is being delivered. His sons see a man talking to himself about a lost boy; he corrects the address: this conversation has never been with you.",
          bn: "আমি আমার দুঃসহ বেদনা ও আমার শোকের অভিযোগ কেবল আল্লাহর কাছেই করি, আর আমি আল্লাহর পক্ষ থেকে এমন কিছু জানি যা তোমরা জানো না। উত্তরটি শোককে অস্বীকার করে না, দর্শকদের সামনে ধৈর্যের অভিনয়ও করে না, দশকের পর দশকের দুঃখের জন্য ক্ষমাও চায় না। এটি জানিয়ে দেয় দুঃখটি কোথায় পৌঁছে দেওয়া হচ্ছে। ছেলেরা দেখছে এক বৃদ্ধ হারানো ছেলের কথা আপনমনে বলছেন; তিনি ঠিকানাটি শুধরে দেন: এই কথোপকথন কখনোই তোমাদের সঙ্গে ছিল না।",
        },
      ],
    },
    {
      h: { en: "Bathth: What Cannot Be Held In", bn: "বাসস: যা চেপে রাখা যায় না" },
      p: [
        {
          en: "The verse uses two words for sorrow. Huzn is grief in general. Bathth, the word placed first, is explained by the commentators, Qurtubi and Ibn Kathir among them, as anguish so severe that its carrier cannot keep it contained — it spreads and shows. That is a precise self-diagnosis. Yaqub (AS) is saying: the sorrow you can see on me is the kind that cannot be hidden, and even that overflow I am directing to Allah, not to men.",
          bn: "আয়াতটি দুঃখের জন্য দুটি শব্দ ব্যবহার করে। 'হুযন' সাধারণ অর্থে শোক। আর প্রথমে বসানো শব্দ 'বাসস'-এর ব্যাখ্যায় মুফাসসিরগণ — কুরতুবী ও ইবনে কাসীর তাঁদের অন্যতম — বলেন: এমন তীব্র বেদনা যা তার বাহক চেপে রাখতে পারে না — তা ছড়িয়ে পড়ে, দেখা দিয়ে ফেলে। এ এক নিখুঁত আত্মনির্ণয়। ইয়াকুব (আঃ) বলছেন: আমার ওপর যে দুঃখ তোমরা দেখছ তা সেই জাতের, যা লুকানো যায় না; আর সেই উপচে পড়াটুকুও আমি পাঠাচ্ছি আল্লাহর দিকে, মানুষের দিকে নয়।",
        },
        {
          en: "This resolves a question believers quietly carry: whether weeping and hurting break patience. Earlier in the surah, at 12:18, Yaqub (AS) had named his course sabrun jamil, a beautiful patience. The commentators explain beautiful patience as patience without complaint to creation. Complaint to the Creator is another matter entirely — it is worship. The eyes may weep and the heart may ache; patience is breached by the address on the complaint, not by the tears.",
          bn: "এটি সেই প্রশ্নের মীমাংসা করে, যা মুমিনরা চুপচাপ বয়ে বেড়ায়: কান্না ও কষ্ট পাওয়া কি ধৈর্য ভেঙে দেয়? সূরার আগের দিকে, 12:18 আয়াতে, ইয়াকুব (আঃ) নিজের পথের নাম দিয়েছিলেন 'সাবরুন জামীল' — সুন্দর ধৈর্য। মুফাসসিরগণ সুন্দর ধৈর্যের ব্যাখ্যা করেন: সৃষ্টির কাছে অভিযোগহীন ধৈর্য। আর স্রষ্টার কাছে অভিযোগ সম্পূর্ণ ভিন্ন জিনিস — তা ইবাদত। চোখ কাঁদতে পারে, হৃদয় ব্যথায় টনটন করতে পারে; ধৈর্য ভাঙে অভিযোগের ঠিকানায়, অশ্রুতে নয়।",
        },
      ],
    },
    {
      h: { en: "Knowing From Allah", bn: "আল্লাহর পক্ষ থেকে জানা" },
      p: [
        {
          en: "I know from Allah what you do not know. Ibn Kathir relates that Yaqub (AS) held to the hope that the dream Yusuf (AS) had reported at the beginning of the story, in 12:4 — eleven stars and the sun and the moon prostrating to him — was true and had yet to be fulfilled. His hope was not temperament. It was inference from something Allah had shown, held onto across decades in which every visible fact argued against it.",
          bn: "আমি আল্লাহর পক্ষ থেকে এমন কিছু জানি যা তোমরা জানো না। ইবনে কাসীর বর্ণনা করেন, ইয়াকুব (আঃ) এই আশা আঁকড়ে ছিলেন যে গল্পের শুরুতে, 12:4 আয়াতে, ইউসুফ (আঃ) যে স্বপ্নের কথা জানিয়েছিলেন — এগারোটি নক্ষত্র এবং সূর্য ও চাঁদ তাঁকে সিজদা করছে — তা সত্য এবং তা পূর্ণ হওয়া তখনো বাকি। তাঁর আশা কোনো মেজাজের ব্যাপার ছিল না। তা ছিল আল্লাহর দেখানো কোনো কিছু থেকে টানা সিদ্ধান্ত — দশকের পর দশক ধরে ধরে রাখা, যখন চোখে দেখা প্রতিটি তথ্য তার বিপক্ষে সাক্ষ্য দিচ্ছিল।",
        },
      ],
    },
    {
      h: { en: "Go and Search; Do Not Despair", bn: "যাও, খোঁজো; নিরাশ হয়ো না" },
      p: [
        {
          en: "Then 12:87 turns the grief into instructions: O my sons, go and inquire about Yusuf and his brother, and do not despair of the rawh of Allah; none despairs of the rawh of Allah except the disbelieving people. Rawh carries the sense of relief, a breath of ease after constriction. The man his sons feared would waste away is the one issuing search orders. Hope anchored in Allah does not sit by the window; it dispatches people to Egypt.",
          bn: "এরপর 12:87 শোককে নির্দেশে বদলে দেয়: হে আমার ছেলেরা, যাও, ইউসুফ ও তার ভাইয়ের খোঁজ নাও, আর আল্লাহর 'রাওহ' থেকে নিরাশ হয়ো না; কাফির সম্প্রদায় ছাড়া কেউ আল্লাহর রাওহ থেকে নিরাশ হয় না। 'রাওহ' শব্দে আছে স্বস্তির অর্থ — সংকীর্ণতার পরে এক দমকা মুক্ত বাতাস। যে মানুষটির ক্ষয়ে যাওয়ার আশঙ্কা করছিল তাঁর ছেলেরা, তিনিই এখন তল্লাশির নির্দেশ দিচ্ছেন। আল্লাহতে নোঙর করা আশা জানালার পাশে বসে থাকে না; সে মানুষ পাঠায় মিসরে।",
        },
        {
          en: "The closing clause grades despair with startling severity: it is the mark of the disbelieving people. The same judgement appears in 15:56, where Ibrahim (AS) asks who despairs of the mercy of his Lord except those astray. The logic is doctrinal, not rhetorical. Despair is a claim about Allah — that His power has met its limit or His mercy its end — and both claims contradict what a believer knows of Him. Sadness is human; hopelessness is a creed error.",
          bn: "শেষ বাক্যাংশটি নৈরাশ্যকে চমকে দেওয়া কঠোরতায় শ্রেণিবদ্ধ করে: তা কাফির সম্প্রদায়ের চিহ্ন। একই রায় 15:56 আয়াতেও আছে, যেখানে ইবরাহীম (আঃ) প্রশ্ন করেন: পথভ্রষ্টরা ছাড়া কে তার রবের রহমত থেকে নিরাশ হয়? যুক্তিটি আকীদাগত, অলংকার নয়। নৈরাশ্য আসলে আল্লাহ সম্পর্কে একটি দাবি — তাঁর ক্ষমতা তার সীমায় পৌঁছে গেছে, নয়তো তাঁর রহমত ফুরিয়ে গেছে — আর দুটি দাবিই মুমিন তাঁর সম্পর্কে যা জানে তার বিরোধী। দুঃখ মানবীয়; আশাহীনতা আকীদার ভুল।",
        },
      ],
    },
    {
      h: { en: "Carrying Sorrow Correctly", bn: "শোক সঠিকভাবে বহন করা" },
      p: [
        {
          en: "The note behind this article draws the lesson in one line: grief and hope can live in the same heart when both are anchored in God. The anchoring is practical. When sorrow rises, the first draft of it can be given to Allah in private complaint before any of it is posted, vented or performed — Yaqub's (AS) order of address, restored. What people then see is the residue, the bathth that cannot be hidden, and that residue carries no bitterness toward anyone.",
          bn: "এই লেখার পেছনের নোটটি শিক্ষাটি এক লাইনে টেনে দেয়: শোক ও আশা একই হৃদয়ে বাস করতে পারে, যখন দুটিই আল্লাহতে নোঙর করা থাকে। এই নোঙর করা একেবারে ব্যবহারিক। দুঃখ যখন জেগে ওঠে, তার প্রথম খসড়াটি নির্জন অভিযোগে আল্লাহকে দেওয়া যায় — কোথাও প্রকাশ, উগরে দেওয়া বা প্রদর্শনের আগে; ইয়াকুব (আঃ)-এর ঠিকানার ক্রমটিই পুনঃস্থাপিত। মানুষ এরপর যা দেখে তা কেবল অবশেষ — সেই 'বাসস' যা লুকানো যায় না — আর সেই অবশেষে কারও প্রতি কোনো তিক্ততা থাকে না।",
        },
        {
          en: "The other half is Yaqub's (AS) verb: go and inquire. Whatever loss is being mourned — a person, a health, a livelihood — hope in Allah takes the form of the next concrete step, taken while the outcome is still invisible. The surah rewards his method on both counts: the searchers he dispatched while grieving are the very caravan that returns with Yusuf's (AS) shirt, and the eyes that had whitened with sorrow see again.",
          bn: "অন্য অর্ধেকটি ইয়াকুব (আঃ)-এর ক্রিয়াপদ: যাও, খোঁজ নাও। যে ক্ষতির জন্যই শোক হোক — একজন মানুষ, স্বাস্থ্য, জীবিকা — আল্লাহতে আশা রূপ নেয় পরবর্তী বাস্তব পদক্ষেপে, যা নেওয়া হয় ফলাফল তখনো অদৃশ্য থাকা অবস্থায়। সূরাটি তাঁর পদ্ধতিকে দুই দিক থেকেই পুরস্কৃত করে: শোকের মধ্যেই তিনি যে সন্ধানীদের পাঠিয়েছিলেন, সেই কাফেলাই ফিরে আসে ইউসুফ (আঃ)-এর জামা নিয়ে, আর শোকে সাদা হয়ে যাওয়া চোখ দুটি আবার দেখতে পায়।",
        },
      ],
    },
  ],
},
'18:109-110': {
  sections: [
    {
      h: { en: "The Sea and the Words", bn: "সমুদ্র ও কালিমাসমূহ" },
      p: [
        {
          en: "Surah al-Kahf closes with two verses that work as a pair. The first, 18:109, gives an image: say, if the sea were ink for the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted, even if We brought the like of it as replenishment. The surah has just spent its length on knowledge — the sleepers whose count only Allah knows, Musa (AS) schooled by a servant given knowledge from Allah, Dhul-Qarnayn's journeys — and now it prices all of it.",
          bn: "সূরা আল-কাহফ শেষ হয় এমন দুটি আয়াতে যারা জোড়ায় কাজ করে। প্রথমটি, 18:109, একটি চিত্র দেয়: বলো, আমার রবের কালিমাসমূহ লেখার জন্য সমুদ্র যদি কালি হতো, তবে আমার রবের কালিমা শেষ হওয়ার আগেই সমুদ্র ফুরিয়ে যেত — যদিও আমি তার মতো আরও এনে জোগান দিতাম। সূরাটি তার গোটা দৈর্ঘ্য জ্ঞান নিয়েই কাটিয়েছে — গুহাবাসীরা, যাদের সংখ্যা কেবল আল্লাহই জানেন; মূসা (আঃ), যিনি শিক্ষা নেন আল্লাহর দেওয়া জ্ঞানপ্রাপ্ত এক বান্দার কাছে; যুলকারনাইনের অভিযাত্রা — আর এখন সে এই সবকিছুর দাম নির্ধারণ করে।",
        },
        {
          en: "The commentators read the words of my Lord as His knowledge, His decrees, His speech — that which He could say, without end. The image is built for a mind that cannot picture infinity but can picture the sea. Then the verse quietly doubles the impossible: even resupplied with another sea, and another, the ink side fails first. A parallel in 31:27 adds every tree on earth as pens and the sea replenished after it by seven more seas, with the same result: the words of Allah would not run out.",
          bn: "মুফাসসিরগণ 'আমার রবের কালিমা'-কে পড়েন তাঁর জ্ঞান, তাঁর ফয়সালা, তাঁর বাণী অর্থে — যা তিনি বলতে পারতেন, অন্তহীনভাবে। চিত্রটি এমন মনের জন্য গড়া, যে অসীম কল্পনা করতে পারে না কিন্তু সমুদ্র কল্পনা করতে পারে। তারপর আয়াতটি নীরবে অসম্ভবকে দ্বিগুণ করে: আরেকটি সমুদ্র, তারপর আরেকটি দিয়ে জোগান দিলেও, কালির দিকটাই আগে হারবে। 31:27 আয়াতের সমান্তরাল চিত্রটি এতে যোগ করে পৃথিবীর সব গাছ কলম হিসেবে আর সমুদ্র — যার পরে আরও সাত সমুদ্র জোগান দেয় — ফলাফল একই: আল্লাহর কালিমা ফুরাবে না।",
        },
      ],
    },
    {
      h: { en: "Only a Man Like You", bn: "কেবল তোমাদের মতো একজন মানুষ" },
      p: [
        {
          en: "Then 18:110 executes one of the sharpest descents in the Quran: say, I am only a man like you, to whom it is revealed that your God is one God. After an ocean that cannot carry His words, the listener might expect the messenger of such a Lord to be more than human. The verse forbids the thought. The Prophet ﷺ shares our nature entirely; what distinguishes him is wahy, revelation — a channel opened, not a nature changed.",
          bn: "এরপর 18:110 কুরআনের অন্যতম তীক্ষ্ণ অবতরণ ঘটায়: বলো, আমি কেবল তোমাদের মতোই একজন মানুষ, আমার কাছে ওহী করা হয় যে তোমাদের ইলাহ এক ইলাহ। যে সমুদ্র তাঁর কালিমা বইতে পারে না, তার পরে শ্রোতা ভাবতেই পারত — এমন রবের রাসূল নিশ্চয়ই মানুষের চেয়ে বেশি কিছু। আয়াতটি সেই ভাবনা নিষেধ করে। নবী ﷺ আমাদের প্রকৃতির পুরোপুরি অংশীদার; তাঁকে যা আলাদা করে তা ওহী — একটি খুলে দেওয়া প্রণালী, বদলে দেওয়া প্রকৃতি নয়।",
        },
        {
          en: "The pairing is deliberate theology. Communities that lost their prophets' teaching drifted in one of two directions: deifying the messenger, or dismissing the message because the messenger was human. Setting the limitless words of 18:109 directly beside the mortal messenger of 18:110 blocks both roads at once. The greatness belongs to the One who speaks; the man who delivers the speech eats, sleeps and will die, and his humanity is not a flaw in the message but its proof of reach.",
          bn: "এই জোড়বাঁধা এক সুচিন্তিত আকীদা-শিক্ষা। যেসব জাতি তাদের নবীদের শিক্ষা হারিয়েছে, তারা দুই দিকের কোনো এক দিকে ভেসে গেছে: হয় বার্তাবাহককে উপাস্য বানিয়েছে, নয়তো বার্তাবাহক মানুষ বলে বার্তাকেই নাকচ করেছে। 18:109 আয়াতের সীমাহীন কালিমাকে 18:110 আয়াতের মরণশীল বার্তাবাহকের ঠিক পাশে বসানো দুটি পথই একসঙ্গে বন্ধ করে দেয়। মহত্ত্ব তাঁরই, যিনি বলেন; যিনি বাণী পৌঁছে দেন সেই মানুষটি খান, ঘুমান এবং মারা যাবেন — আর তাঁর মানবত্ব বার্তার কোনো খুঁত নয়, বরং তা সবার নাগালে পৌঁছানোর প্রমাণ।",
        },
      ],
    },
    {
      h: { en: "The Two Conditions", bn: "দুটি শর্ত" },
      p: [
        {
          en: "The surah's final sentence is a recipe: whoever hopes for the meeting with his Lord, let him do righteous work and associate none in the worship of his Lord. Ibn Kathir draws from this the two conditions of an accepted deed. It must be salih, sound — conforming to what Allah legislated through His Messenger ﷺ — and it must be sincerely for Allah alone, with no partner given a share of it. A deed can fail on either count independently.",
          bn: "সূরার শেষ বাক্যটি একটি নুসখা: যে তার রবের সাক্ষাতের আশা রাখে, সে যেন সৎকর্ম করে এবং তার রবের ইবাদতে কাউকে শরীক না করে। ইবনে কাসীর এখান থেকে কবুল হওয়া আমলের দুটি শর্ত বের করেন। কাজটিকে হতে হবে 'সালিহ' — নির্ভুল, অর্থাৎ আল্লাহ তাঁর রাসূল ﷺ-এর মাধ্যমে যা বিধিবদ্ধ করেছেন তার অনুগামী — এবং হতে হবে একনিষ্ঠভাবে কেবল আল্লাহর জন্য, যাতে কোনো শরীকের ভাগ নেই। যেকোনো একটি শর্তে আলাদাভাবেই একটি আমল বাতিল হতে পারে।",
        },
        {
          en: "The phrase worth weighing is whoever hopes. The verse does not say whoever is certain of meeting his Lord, nor whoever fears. Hope is the workable minimum: if the meeting is even your aspiration, this is the road. The address thereby includes the struggling believer whose conviction flickers. What is asked of hope is not intensity of feeling but that it change what the hands do — righteous work — and what the heart serves — Allah without partner.",
          bn: "যে বাক্যাংশটি ওজন করার মতো তা হলো — 'যে আশা রাখে'। আয়াতটি বলে না, যে তার রবের সাক্ষাতে নিশ্চিত; বলেও না, যে ভয় করে। আশাই কার্যকর ন্যূনতম: সাক্ষাৎ যদি তোমার আকাঙ্ক্ষাও হয়, তবে এই সেই পথ। সম্বোধনটি তাই সেই সংগ্রামরত মুমিনকেও ধরে, যার প্রত্যয় কাঁপে। আশার কাছে যা চাওয়া হয়েছে তা অনুভূতির তীব্রতা নয়; চাওয়া হয়েছে — সে বদলে দিক হাত যা করে — সৎকর্ম — আর হৃদয় যার দাসত্ব করে — শরীকবিহীন আল্লাহ।",
        },
      ],
    },
    {
      h: { en: "The Quiet Threat to Sincerity", bn: "ইখলাসের নীরব শত্রু" },
      p: [
        {
          en: "The shirk excluded at the surah's close is not only the worship of idols. Muslim narrates the hadith qudsi from Abu Hurayrah (RA): Allah says, I am the most self-sufficient of all partners; whoever does a deed in which he associates another with Me, I abandon him and his association. The classical scholars read 18:110 alongside this: the polish a deed acquires when it is being watched, the worship angled toward reputation, falls under association in worship.",
          bn: "সূরার শেষে যে শিরক বর্জনের কথা, তা কেবল মূর্তিপূজা নয়। মুসলিম আবু হুরাইরা (রাঃ) থেকে হাদীসে কুদসী বর্ণনা করেন: আল্লাহ বলেন, শরীকদের মধ্যে আমিই শিরক থেকে সবচেয়ে অমুখাপেক্ষী; যে এমন আমল করে যাতে সে আমার সঙ্গে অন্য কাউকে শরীক করে, আমি তাকে ও তার শিরককে ছেড়ে দিই। ধ্রুপদী আলিমগণ 18:110 আয়াতকে এর পাশে রেখে পড়েন: দেখা হচ্ছে জেনে আমলে যে বাড়তি চাকচিক্য আসে, সুনামের দিকে হেলানো যে ইবাদত — তা ইবাদতে শরীক করারই অন্তর্ভুক্ত।",
        },
      ],
    },
    {
      h: { en: "Majesty and a Doable Path", bn: "মহিমা এবং এক সাধ্যের পথ" },
      p: [
        {
          en: "The note this article expands observes that infinite majesty and a clear, doable path stand side by side. That adjacency is the lived instruction. Contemplating 18:109 alone can end in paralysis — what could my small deeds matter against words that outlast oceans? Contemplating 18:110 alone can shrink religion to a checklist. Read as one breath, the pair says: the One you serve is beyond all measure, and what He asks of you today is measurable — sound work, clean intention.",
          bn: "এই লেখা যে নোটের বিস্তার, তা লক্ষ করে: অসীম মহিমা আর একটি স্পষ্ট, সাধ্যের পথ পাশাপাশি দাঁড়িয়ে। এই পাশাপাশি-থাকাটাই যাপনের নির্দেশ। শুধু 18:109 নিয়ে ভাবলে তা অসাড়তায় শেষ হতে পারে — সমুদ্রকেও ছাড়িয়ে যাওয়া কালিমার সামনে আমার ছোট আমলের কী-ই বা মূল্য? আবার শুধু 18:110 নিয়ে ভাবলে দ্বীন সংকুচিত হতে পারে এক তালিকায়। এক নিঃশ্বাসে পড়লে জোড়াটি বলে: যাঁর দাসত্ব করছ তিনি সব পরিমাপের ঊর্ধ্বে, আর আজ তোমার কাছে তাঁর চাওয়াটুকু মাপা যায় — নির্ভুল কাজ, পরিচ্ছন্ন নিয়ত।",
        },
        {
          en: "A concrete practice follows the verse's own order. Before a deed, ask the first condition: is this how the Prophet ﷺ taught it? During and after it, ask the second: who was that for? The second audit stings more, and repeating it is itself the work. These are the closing lines of a surah recited weekly by many Muslims on Friday; the recitation returns the questions to the reader at a rhythm frequent enough that the answers cannot ossify.",
          bn: "একটি বাস্তব অভ্যাস আয়াতের নিজস্ব ক্রমই অনুসরণ করে। আমলের আগে প্রথম শর্তটি জিজ্ঞেস করো: নবী ﷺ কি এভাবেই তা শিখিয়েছেন? আমলের মধ্যে ও পরে দ্বিতীয়টি: ওটা কার জন্য ছিল? দ্বিতীয় হিসাব-নিরীক্ষাটি বেশি বেঁধে, আর তার পুনরাবৃত্তিই আসল কাজ। এগুলো সেই সূরার সমাপ্তি-পঙক্তি, যা বহু মুসলিম প্রতি জুমুআয় সাপ্তাহিকভাবে তিলাওয়াত করে; তিলাওয়াত প্রশ্নগুলোকে পাঠকের কাছে এমন ঘনঘন ফিরিয়ে আনে যে উত্তরগুলো জমে শক্ত হয়ে যেতে পারে না।",
        },
      ],
    },
  ],
},
'20:25-28': {
  sections: [
    {
      h: { en: "A Prayer Before a Task", bn: "কাজের আগে এক দোয়া" },
      p: [
        {
          en: "The setting is the night of Musa's (AS) commissioning. Travelling with his family, he saw a fire on the side of Mount Tur, approached it for an ember or directions, and was addressed by his Lord — chosen, taught tawhid, shown the signs of the staff and the hand. Then came the assignment, in 20:24 — go to Pharaoh, for he has transgressed. One man, a fugitive from Egypt with a killing on his record there, sent to the most powerful tyrant of his age.",
          bn: "প্রেক্ষাপট মূসা (আঃ)-এর দায়িত্বপ্রাপ্তির রাত। পরিবার নিয়ে সফরের পথে তিনি তূর পাহাড়ের পাশে একটি আগুন দেখেন, একটু আঙরা বা পথের খোঁজে সেদিকে এগিয়ে যান, আর তাঁর রব তাঁকে সম্বোধন করেন — তিনি মনোনীত হন, তাওহীদ শেখানো হয়, লাঠি ও হাতের নিদর্শন দেখানো হয়। তারপর আসে দায়িত্ব, 20:24 আয়াতে: ফেরাউনের কাছে যাও, সে সীমালঙ্ঘন করেছে। একজন মানুষ — মিসর থেকে পলাতক, সেখানে যার নামে একটি হত্যার ঘটনা লেখা — তাঁকে পাঠানো হচ্ছে তাঁর যুগের সবচেয়ে ক্ষমতাধর স্বৈরাচারীর কাছে।",
        },
        {
          en: "His response is the prayer of 20:25-28 — my Lord, expand for me my chest, ease for me my task, and untie a knot from my tongue, that they may understand my speech. Notice what he does not ask for first — no army, no immunity, no plan of approach. Before any resource in the world, he asks for a change inside himself. The commentators hold this up as the model opening move for anyone handed work that feels larger than they are.",
          bn: "তাঁর সাড়া হলো 20:25-28 আয়াতের দোয়া: হে আমার রব, আমার বক্ষ আমার জন্য প্রশস্ত করে দিন, আমার কাজ আমার জন্য সহজ করে দিন, আর আমার জিহ্বার জড়তার গিঁট খুলে দিন, যেন তারা আমার কথা বোঝে। লক্ষ করুন, তিনি প্রথমে কী চাননি — কোনো সৈন্যদল নয়, নিরাপত্তার নিশ্চয়তা নয়, এগোনোর কোনো পরিকল্পনাও নয়। দুনিয়ার যেকোনো উপকরণের আগে তিনি চাইলেন নিজের ভেতরের একটি পরিবর্তন। মুফাসসিরগণ একে তুলে ধরেন আদর্শ প্রথম পদক্ষেপ হিসেবে — এমন যে-কারও জন্য, যার হাতে নিজের চেয়ে বড় মনে হওয়া কাজ তুলে দেওয়া হয়েছে।",
        },
      ],
    },
    {
      h: { en: "Chest, Task, Tongue", bn: "বক্ষ, কাজ, জিহ্বা" },
      p: [
        {
          en: "The order of the three requests is its own lesson. First the chest: sharh as-sadr, the expansion of the breast, which the commentators explain as the capacity to receive what is coming without constriction — fear, resentment, and hurry all crowd a narrow chest. Second the task: ease in the external affair. Third the tongue: the instrument of the specific mission, which was speech to a king. Inner state, then circumstances, then tools — the sequence runs from the center outward.",
          bn: "তিনটি চাওয়ার ক্রমটিই নিজে এক শিক্ষা। প্রথমে বক্ষ: 'শারহুস-সাদর' — বুকের প্রসারণ, যাকে মুফাসসিরগণ ব্যাখ্যা করেন সংকীর্ণতা ছাড়াই সামনে যা আসছে তা ধারণের সামর্থ্য হিসেবে — ভয়, ক্ষোভ আর তাড়াহুড়ো সবই সরু বুকে ভিড় করে। দ্বিতীয়ত কাজ: বাইরের বিষয়ের সহজতা। তৃতীয়ত জিহ্বা: নির্দিষ্ট মিশনটির যন্ত্র, কারণ কাজটি ছিল এক রাজার সঙ্গে কথা বলা। ভেতরের অবস্থা, তারপর পরিস্থিতি, তারপর হাতিয়ার — ক্রমটি কেন্দ্র থেকে বাইরের দিকে চলে।",
        },
        {
          en: "Each request also names its beneficiary honestly. Expand for me my chest, ease for me my task — the repeated li, for me, concedes that the asker is the weak point, not the assignment. And the purpose clause at the end, yafqahu qawli, that they may understand my speech, aims the whole prayer at the audience's comprehension rather than the speaker's comfort. He wants eloquence not to be admired but to be understood, which is the difference between an orator and a messenger.",
          bn: "প্রতিটি চাওয়া তার উপকারভোগীর নামও সততার সঙ্গে নেয়। আমার বক্ষ আমার জন্য প্রশস্ত করুন, আমার কাজ আমার জন্য সহজ করুন — বারবার আসা 'লী' — আমার জন্য — স্বীকার করে নেয় যে দুর্বল জায়গাটি প্রার্থনাকারী নিজে, দায়িত্বটি নয়। আর শেষের উদ্দেশ্য-বাক্য, 'ইয়াফকাহু কাওলি' — যেন তারা আমার কথা বোঝে — গোটা দোয়াটিকে তাক করে শ্রোতার বোধগম্যতার দিকে, বক্তার স্বাচ্ছন্দ্যের দিকে নয়। তিনি বাগ্মিতা চান প্রশংসিত হতে নয়, বোঝা যেতে — আর এটিই বক্তা ও বার্তাবাহকের পার্থক্য।",
        },
      ],
    },
    {
      h: { en: "The Knot in the Tongue", bn: "জিহ্বার গিঁট" },
      p: [
        {
          en: "Musa (AS) had some impediment in his speech; the Quran attests it without describing its cause. In 26:13 he says my chest tightens and my tongue does not move freely, and in 28:34 he asks for Harun (AS) because he is more eloquent than me in speech. A widely repeated story attributes the impediment to a burning coal in childhood, but it does not rest on evidence that meets the standard of this module, so it is left aside here.",
          bn: "মূসা (আঃ)-এর কথায় কোনো এক প্রকার জড়তা ছিল; কুরআন তা নিশ্চিত করে, কিন্তু তার কারণ বর্ণনা করে না। 26:13 আয়াতে তিনি বলেন, আমার বক্ষ সংকুচিত হয়ে আসে এবং আমার জিহ্বা সাবলীল চলে না; আর 28:34 আয়াতে তিনি হারূন (আঃ)-কে চেয়ে নেন, কারণ — সে কথায় আমার চেয়ে বেশি স্পষ্টভাষী। ছেলেবেলায় জ্বলন্ত কয়লা মুখে দেওয়ার একটি বহুল-প্রচারিত গল্প এই জড়তার কারণ হিসেবে বলা হয়, কিন্তু তা এই মডিউলের মান অনুযায়ী প্রমাণে দাঁড়ায় না, তাই এখানে তা বাদ রাখা হলো।",
        },
        {
          en: "The commentators, Ibn Kathir among them, notice the measure of the request: he asked for a knot to be untied — the wording indicates removal sufficient for the mission, that they may understand my speech — not for ornamental eloquence. He requested what the task required and left the rest. There is manners with Allah in that restraint, and also self-knowledge: the goal was Pharaoh's comprehension of the truth, and every word of the request is subordinated to it.",
          bn: "মুফাসসিরগণ — ইবনে কাসীর তাঁদের একজন — চাওয়াটির পরিমাপ লক্ষ করেন: তিনি একটি গিঁট খুলে দিতে বলেছেন — শব্দচয়নটি নির্দেশ করে মিশনের জন্য যতটুকু দরকার ততটুকু অপসারণ, 'যেন তারা আমার কথা বোঝে' — আলংকারিক বাগ্মিতা নয়। কাজে যা লাগে তিনি তা-ই চেয়েছেন, বাকিটা ছেড়ে দিয়েছেন। এই সংযমে আল্লাহর সঙ্গে আদব আছে, আত্মজ্ঞানও আছে: লক্ষ্য ছিল ফেরাউনের কাছে সত্য বোধগম্য হওয়া, আর চাওয়ার প্রতিটি শব্দ সেই লক্ষ্যের অধীন।",
        },
      ],
    },
    {
      h: { en: "Granted, and Then Some", bn: "কবুল, এবং আরও বেশি" },
      p: [
        {
          en: "The prayer does not stop at the tongue. In 20:29-32 Musa (AS) asks for a helper from his own family, Harun (AS) his brother, to share the burden and strengthen him. Asking for help is placed inside the prayer, not after it — competence in this story includes knowing what you cannot carry alone. The answer arrives in 20:36 with no conditions attached: you have been granted your request, O Musa. Every clause, chest to brother, is approved in one sentence.",
          bn: "দোয়াটি জিহ্বায় থামে না। 20:29-32 আয়াতে মূসা (আঃ) নিজের পরিবার থেকে একজন সাহায্যকারী চান — তাঁর ভাই হারূন (আঃ) — বোঝা ভাগ করতে ও তাঁকে শক্তি জোগাতে। সাহায্য চাওয়াটা দোয়ার ভেতরেই রাখা, দোয়ার পরে নয় — এই কাহিনিতে যোগ্যতার মধ্যে এটাও পড়ে যে, একা কী বইতে পারবে না তা জানা। উত্তর আসে 20:36 আয়াতে, কোনো শর্ত ছাড়াই: হে মূসা, তোমার চাওয়া তোমাকে দেওয়া হলো। বক্ষ থেকে ভাই — প্রতিটি অনুচ্ছেদ এক বাক্যে মঞ্জুর।",
        },
        {
          en: "There is a quiet comparison the mufassirun draw with the Prophet Muhammad ﷺ. What Musa (AS) asked for at the start of his mission, the expansion of the chest, was given to the final Prophet ﷺ unasked, as 94:1 states: did We not expand for you your chest? One prophet requests the provision and receives it; the other finds it already granted. Both accounts teach the same origin of capacity — it comes from Allah, whether petitioned or pre-installed.",
          bn: "মুফাসসিরগণ এখানে নবী মুহাম্মাদ ﷺ-এর সঙ্গে একটি নীরব তুলনা টানেন। মূসা (আঃ) তাঁর মিশনের শুরুতে যা চেয়ে নিয়েছিলেন — বক্ষের প্রসারণ — শেষ নবী ﷺ-কে তা না চাইতেই দেওয়া হয়েছিল, যেমন 94:1 বলে: আমি কি তোমার জন্য তোমার বক্ষ প্রশস্ত করে দিইনি? এক নবী এই সম্বল প্রার্থনা করে পান; অন্যজন পান আগে থেকেই মঞ্জুর হয়ে থাকা অবস্থায়। দুটি বিবরণই সামর্থ্যের একই উৎস শেখায় — তা আসে আল্লাহর কাছ থেকে, চেয়ে নেওয়া হোক বা আগেই বসিয়ে দেওয়া।",
        },
      ],
    },
    {
      h: { en: "Using the Prayer Today", bn: "আজ এই দোয়ার ব্যবহার" },
      p: [
        {
          en: "This du'a has become the standing prayer of Muslims before anything daunting — an exam, an interview, a difficult conversation, public speech, a new responsibility. Its fit is exact because its logic is general: every hard task has an inner face, an outer face and an instrument, and the prayer covers the three in order. Whoever says it is also repeating a piece of history — borrowing the words a prophet (AS) used on the night his life turned.",
          bn: "এই দোয়া মুসলিমদের কাছে যেকোনো ভয় জাগানো কিছুর আগের নিয়মিত প্রার্থনা হয়ে উঠেছে — পরীক্ষা, সাক্ষাৎকার, কঠিন কথোপকথন, জনসমক্ষে বক্তৃতা, নতুন দায়িত্ব। এর খাপ খাওয়া এত নিখুঁত, কারণ এর যুক্তি সর্বজনীন: প্রতিটি কঠিন কাজের একটি ভেতরের দিক, একটি বাইরের দিক আর একটি হাতিয়ার থাকে, আর দোয়াটি ক্রম ধরে তিনটিই ঢেকে দেয়। যে এটি বলে, সে ইতিহাসের একটি টুকরোও পুনরাবৃত্তি করে — সেই শব্দগুলো ধার করে, যা এক নবী (আঃ) ব্যবহার করেছিলেন তাঁর জীবন-মোড়ানো রাতে।",
        },
        {
          en: "The deeper habit it trains is the order of resort. Musa's (AS) first act between receiving the task and attempting it was du'a; planning came after, in the request for Harun (AS). Most of us reverse this — we plan, worry, draft and rehearse, and pray somewhere near the end if at all. The verse sequence suggests the inversion is costly, because the resource that actually decides such encounters, the state of the chest, is not one we can engineer ourselves.",
          bn: "এটি যে গভীরতর অভ্যাস গড়ে তোলে তা হলো শরণাপন্ন হওয়ার ক্রম। দায়িত্ব পাওয়া ও তাতে হাত দেওয়ার মাঝখানে মূসা (আঃ)-এর প্রথম কাজ ছিল দোয়া; পরিকল্পনা এসেছে পরে, হারূন (আঃ)-কে চাওয়ার মধ্যে। আমরা অধিকাংশই এটি উল্টো করি — পরিকল্পনা করি, দুশ্চিন্তা করি, খসড়া বানাই, মহড়া দিই, আর দোয়া করি শেষের দিকে কোথাও — যদি আদৌ করি। আয়াতগুলোর ক্রম ইঙ্গিত দেয়, এই উল্টানোর দাম চড়া; কারণ এমন মুখোমুখি মুহূর্তগুলোর আসল নিষ্পত্তি করে যে সম্বল — বক্ষের অবস্থা — তা আমরা নিজেরা বানিয়ে নিতে পারি না।",
        },
      ],
    },
  ],
},
'17:80': {
  sections: [
    {
      h: { en: "Between Prayer and Victory", bn: "নামায ও বিজয়ের মাঝখানে" },
      p: [
        {
          en: "The verse sits in a deliberate neighbourhood. Just before it, 17:78-79 command the prayer from the sun's decline into the darkness of night, and the night vigil, tahajjud, promised to raise the Prophet ﷺ to a praised station. Just after it, 17:81 announces: truth has come and falsehood has vanished; indeed falsehood is ever bound to vanish. Between the discipline of prayer and the declaration of victory stands this request: an honest entrance, an honest exit, and supporting authority from Allah.",
          bn: "আয়াতটির অবস্থান এক সুচিন্তিত প্রতিবেশে। ঠিক আগে, 17:78-79 আদেশ দেয় সূর্য ঢলে পড়া থেকে রাতের অন্ধকার পর্যন্ত নামাযের, আর রাত-জাগা তাহাজ্জুদের — যার প্রতিশ্রুতি নবী ﷺ-কে এক প্রশংসিত স্থানে উন্নীত করা। ঠিক পরে, 17:81 ঘোষণা করে: সত্য এসেছে আর মিথ্যা বিলুপ্ত হয়েছে; নিশ্চয়ই মিথ্যা বিলুপ্ত হওয়ারই। নামাযের অনুশীলন আর বিজয়ের ঘোষণার মাঝখানে দাঁড়িয়ে এই চাওয়া: এক সত্যনিষ্ঠ প্রবেশ, এক সত্যনিষ্ঠ প্রস্থান, আর আল্লাহর পক্ষ থেকে সাহায্যকারী কর্তৃত্ব।",
        },
        {
          en: "The wording given to the Prophet ﷺ to say is: my Lord, cause me to enter an entrance of sidq and cause me to exit an exit of sidq, and grant me from Yourself a supporting authority. Sidq is truthfulness, soundness, integrity — the quality of a thing that is exactly what it claims to be. Attached to entering and exiting, it asks that both ends of every passage be free of falsehood, treachery and disgrace.",
          bn: "নবী ﷺ-কে যে শব্দে বলতে বলা হয়েছে: হে আমার রব, আমাকে প্রবেশ করান 'সিদক'-এর প্রবেশে, আর বের করুন 'সিদক'-এর প্রস্থানে, এবং আপনার পক্ষ থেকে আমাকে দিন এক সাহায্যকারী কর্তৃত্ব। 'সিদক' মানে সত্যনিষ্ঠা, নির্ভুলতা, সততা — কোনো জিনিস ঠিক যা দাবি করে তা-ই হওয়ার গুণ। প্রবেশ ও প্রস্থানের সঙ্গে জুড়ে দিলে এর অর্থ দাঁড়ায়: প্রতিটি যাত্রাপথের দুই প্রান্তই যেন মিথ্যা, বিশ্বাসঘাতকতা ও অপমান থেকে মুক্ত থাকে।",
        },
      ],
    },
    {
      h: { en: "The Hijrah Reading", bn: "হিজরতের ব্যাখ্যা" },
      p: [
        {
          en: "At-Tirmidhi relates from Ibn Abbas (RA) that this verse came when the Prophet ﷺ was commanded to emigrate: the exit was from Makkah, the entrance into Madinah. On that reading the prayer was answered visibly in history. He left Makkah without compromise or humiliation, hidden by Allah from those posted to kill him, and entered Madinah openly, welcomed, to found the community that would carry the religion. Both ends of the hardest passage of his life were made passages of sidq.",
          bn: "তিরমিযী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে এই আয়াত এসেছিল যখন নবী ﷺ-কে হিজরতের আদেশ দেওয়া হয়: প্রস্থানটি মক্কা থেকে, প্রবেশটি মদীনায়। এই ব্যাখ্যায় দোয়াটির উত্তর ইতিহাসে দৃশ্যমানভাবে এসেছে। তিনি মক্কা ছেড়েছেন কোনো আপস বা অপমান ছাড়া — হত্যার জন্য মোতায়েন লোকদের চোখ থেকে আল্লাহ তাঁকে আড়াল করেছেন — আর মদীনায় প্রবেশ করেছেন প্রকাশ্যে, সাদর অভ্যর্থনায়, সেই সমাজ গড়তে যা দ্বীনকে বহন করবে। জীবনের কঠিনতম যাত্রার দুই প্রান্তই 'সিদক'-এর পথ হয়ে গিয়েছিল।",
        },
        {
          en: "The commentators do not stop the verse there. Qurtubi records broader readings held among the exegetes: entering and exiting every affair; and even entering the grave and exiting it at the resurrection. The grammar supports the width — no object is named, so every threshold is included. A du'a revealed about one journey is worded so that it fits all journeys, which is a pattern the Quran repeats: the occasion is specific, the wording is kept general.",
          bn: "মুফাসসিরগণ আয়াতটিকে সেখানেই থামিয়ে দেন না। কুরতুবী তাফসীরকারদের মধ্যে প্রচলিত আরও প্রশস্ত ব্যাখ্যাগুলো লিপিবদ্ধ করেন: প্রতিটি বিষয়ে প্রবেশ ও প্রস্থান; এমনকি কবরে প্রবেশ আর পুনরুত্থানে সেখান থেকে বের হওয়া। ব্যাকরণও এই প্রশস্ততাকে সমর্থন করে — কোনো নির্দিষ্ট বস্তুর নাম নেই, তাই প্রতিটি চৌকাঠই অন্তর্ভুক্ত। এক সফর উপলক্ষে নাযিল হওয়া দোয়ার শব্দ এমনভাবে গাঁথা যে তা সব সফরে খাপ খায় — কুরআন এই ধরন বারবার দেখায়: উপলক্ষ সুনির্দিষ্ট, শব্দ রাখা হয় সর্বজনীন।",
        },
      ],
    },
    {
      h: { en: "A Supporting Authority", bn: "এক সাহায্যকারী কর্তৃত্ব" },
      p: [
        {
          en: "The third request changes register: grant me from Yourself a sultan nasir, a supporting authority. Al-Tabari relates the explanation of Qatadah: the Prophet ﷺ knew that he had no power for this matter without authority, so he asked for an authority to aid the Book of Allah, its limits and its obligations. Truth in this world does not administer itself. It needs protected space — an order in which the weak can believe without being crushed for it.",
          bn: "তৃতীয় চাওয়াটি সুর বদলায়: আপনার পক্ষ থেকে আমাকে দিন এক 'সুলতান নাসির' — সাহায্যকারী কর্তৃত্ব। তাবারী কাতাদাহর ব্যাখ্যা বর্ণনা করেন: নবী ﷺ জানতেন, কর্তৃত্ব ছাড়া এই কাজের সামর্থ্য তাঁর নেই, তাই তিনি এমন এক কর্তৃত্ব চাইলেন যা আল্লাহর কিতাব, তার সীমারেখা ও তার ফরযগুলোর সহায় হবে। সত্য এই দুনিয়ায় নিজে নিজের প্রশাসন চালায় না। তার দরকার সুরক্ষিত পরিসর — এমন এক ব্যবস্থা, যেখানে দুর্বলও ঈমান আনতে পারে সে জন্য পিষ্ট না হয়ে।",
        },
        {
          en: "The phrase min ladunka, from Yourself, guards the request from ambition. The authority sought is not personal power but a grant from Allah, held for His Book's sake, and history matched the wording: what was given at Madinah was not a throne but a community under revelation. The prayer thus teaches a clean relationship to power — it may be asked for, from Allah, for the sake of truth, and it remains His grant rather than one's possession.",
          bn: "'মিন লাদুনকা' — আপনার নিজের পক্ষ থেকে — বাক্যাংশটি চাওয়াটিকে উচ্চাভিলাষ থেকে পাহারা দেয়। যে কর্তৃত্ব চাওয়া হচ্ছে তা ব্যক্তিগত ক্ষমতা নয়, বরং আল্লাহর দান — তাঁর কিতাবের খাতিরে ধারণ করা; আর ইতিহাস শব্দগুলোর সঙ্গে মিলে গেছে: মদীনায় যা দেওয়া হয়েছিল তা সিংহাসন নয়, ওহীর অধীন একটি সমাজ। দোয়াটি এভাবে ক্ষমতার সঙ্গে এক পরিচ্ছন্ন সম্পর্ক শেখায় — তা চাওয়া যেতে পারে, আল্লাহর কাছে, সত্যের খাতিরে; এবং তা থেকে যায় তাঁরই দান, কারও নিজস্ব সম্পত্তি নয়।",
        },
      ],
    },
    {
      h: { en: "When Truth Arrived", bn: "যখন সত্য এসে পৌঁছাল" },
      p: [
        {
          en: "The verse after the prayer reads like its receipt. Al-Bukhari narrates from Ibn Mas'ud (RA) that when the Prophet ﷺ entered Makkah at the conquest, and around the House stood three hundred and sixty idols, he went among them striking them with a stick in his hand and reciting the words of 17:81 over them: truth has come and falsehood has vanished. The man who once left that city by night, hunted, was entering it as its liberator — an entrance of sidq if ever one was seen.",
          bn: "দোয়ার পরের আয়াতটি পড়লে মনে হয় তার প্রাপ্তিস্বীকার। বুখারী ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন: বিজয়ের দিন নবী ﷺ যখন মক্কায় প্রবেশ করলেন, আর কাবাঘরের চারপাশে দাঁড়িয়ে তিনশ ষাটটি মূর্তি, তিনি হাতের লাঠি দিয়ে সেগুলোতে আঘাত করতে করতে হাঁটলেন আর তিলাওয়াত করলেন: সত্য এসেছে আর মিথ্যা বিলুপ্ত হয়েছে — 17:81। যে মানুষটি একদিন রাতের অন্ধকারে, শিকার হয়ে, সেই শহর ছেড়েছিলেন, তিনি প্রবেশ করছেন তার মুক্তিদাতা হয়ে — 'সিদক'-এর প্রবেশ যদি কোনোদিন দেখা গিয়ে থাকে, তবে এই সেটি।",
        },
      ],
    },
    {
      h: { en: "A Du'a for Thresholds", bn: "চৌকাঠের এক দোয়া" },
      p: [
        {
          en: "The note behind this article calls this a prayer for integrity in every transition of life, and that is exactly how it transfers. A new job, a new city, a marriage, a project, a resignation — each has an entrance and will have an exit, and the du'a covers both in advance. Asking to enter with sidq means entering without deceit about who you are and what you intend; asking to exit with sidq means leaving without betrayal, cover-up or disgrace.",
          bn: "এই লেখার পেছনের নোটটি একে বলে জীবনের প্রতিটি পালাবদলে সততার দোয়া — আর ঠিক সেভাবেই এটি আমাদের জীবনে স্থানান্তরিত হয়। নতুন চাকরি, নতুন শহর, বিবাহ, কোনো প্রকল্প, পদত্যাগ — প্রত্যেকটির একটি প্রবেশ আছে, আর প্রস্থানও আসবে; দোয়াটি আগেভাগেই দুটিকে ঢেকে দেয়। 'সিদক' নিয়ে প্রবেশ করতে চাওয়া মানে — তুমি কে আর কী চাও, সে বিষয়ে প্রতারণা ছাড়া ঢোকা; 'সিদক' নিয়ে বের হতে চাওয়া মানে — বিশ্বাসঘাতকতা, ধামাচাপা বা অপমান ছাড়া বিদায় নেওয়া।",
        },
        {
          en: "The third clause matters for ordinary lives too. Whoever attempts anything upright soon learns that intention alone does not survive contact with institutions; one needs backing — a just superior, a sound contract, a rule that protects the honest. The verse teaches where to seek that backing first. Ask Allah for the supporting authority, then look for its worldly forms, and read whatever arrives as min ladunka, from Him, held on loan for the sake of doing things truthfully.",
          bn: "তৃতীয় বাক্যাংশটি সাধারণ জীবনের জন্যও জরুরি। সৎ কিছু করতে নামলেই মানুষ শেখে — প্রতিষ্ঠানের সংস্পর্শে শুধু নিয়ত টিকে থাকে না; দরকার হয় পৃষ্ঠপোষকতা — একজন ন্যায়পরায়ণ ঊর্ধ্বতন, একটি নির্ভুল চুক্তি, সৎ মানুষকে রক্ষা করে এমন একটি বিধি। আয়াতটি শেখায় সেই পৃষ্ঠপোষকতা আগে কোথায় খুঁজতে হয়। আল্লাহর কাছে সাহায্যকারী কর্তৃত্ব চাও, তারপর তার দুনিয়াবি রূপগুলো খোঁজো, আর যা-ই আসুক তাকে পড়ো 'মিন লাদুনকা' — তাঁর পক্ষ থেকে, সত্যনিষ্ঠভাবে কাজ করার খাতিরে ধার দেওয়া।",
        },
      ],
    },
  ],
},
'25:70': {
  sections: [
    {
      h: { en: "The Exception That Saves", bn: "যে ব্যতিক্রম রক্ষা করে" },
      p: [
        {
          en: "The verse is an exception clause, and the sentence it excepts from is severe. From 25:63 the surah describes the servants of the Most Merciful, and at 25:68 the portrait turns negative: they do not invoke another god with Allah, do not kill the soul Allah has made inviolable except by right, and do not commit zina. Whoever does these meets a penalty, doubled punishment on the Day of Resurrection and abiding disgrace. Then comes the turn: except those who repent, believe and do righteous work.",
          bn: "আয়াতটি একটি ব্যতিক্রম-বাক্য, আর যে রায় থেকে এটি ব্যতিক্রম টানে তা কঠোর। 25:63 থেকে সূরাটি পরম করুণাময়ের বান্দাদের বর্ণনা দেয়, আর 25:68 আয়াতে ছবিটি নেতিবাচকে মোড় নেয়: তারা আল্লাহর সঙ্গে অন্য কোনো ইলাহকে ডাকে না, আল্লাহ যে প্রাণ হারাম করেছেন তা অন্যায়ভাবে হত্যা করে না, আর যিনা করে না। যে এসব করে সে শাস্তির মুখোমুখি হয় — কিয়ামতের দিন দ্বিগুণ আযাব আর স্থায়ী লাঞ্ছনা। তারপর আসে মোড়টি: তবে যারা তাওবা করে, ঈমান আনে ও সৎকর্ম করে — তারা ছাড়া।",
        },
        {
          en: "For such people, Allah will replace their evil deeds with good deeds, and Allah is ever Forgiving and Merciful. Note which sins stand upstream of this promise: shirk, murder, zina — the three the moral imagination treats as unforgivable. The exception is carved precisely where despair is strongest. If the door stands open after these, the argument runs from the greater to the lesser: it stands open after everything beneath them.",
          bn: "এমন মানুষদের জন্য আল্লাহ তাদের মন্দ কাজগুলো ভালো কাজ দিয়ে বদলে দেবেন, আর আল্লাহ পরম ক্ষমাশীল, পরম দয়ালু। লক্ষ করুন, এই প্রতিশ্রুতির উজানে কোন পাপগুলো দাঁড়িয়ে: শিরক, হত্যা, যিনা — নৈতিক কল্পনা যে তিনটিকে ক্ষমার অযোগ্য গণ্য করে। ব্যতিক্রমটি খোদাই করা হয়েছে ঠিক সেখানে, যেখানে নৈরাশ্য সবচেয়ে প্রবল। এসবের পরেও যদি দরজা খোলা থাকে, তবে যুক্তি বড় থেকে ছোটর দিকে নামে: এর নিচের সবকিছুর পরেও তা খোলা।",
        },
      ],
    },
    {
      h: { en: "Who Asked for This Verse", bn: "কারা এই আয়াত চেয়েছিল" },
      p: [
        {
          en: "The occasion is preserved with a sound chain. Al-Bukhari narrates from Ibn Abbas (RA) that some people of shirk had killed and had done so much, and committed zina and had done so much, then came to Muhammad ﷺ and said: what you say and call to is good, if only you would tell us that there is an expiation for what we have done. Then this passage came down, together with 39:53 — O My servants who have transgressed against yourselves, do not despair of the mercy of Allah.",
          bn: "আয়াতের প্রেক্ষাপট সহীহ সনদে সংরক্ষিত। বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন: শিরকের কিছু মানুষ, যারা হত্যা করেছিল — অনেক করেছিল, আর যিনা করেছিল — তাও অনেক, মুহাম্মাদ ﷺ-এর কাছে এসে বলল: আপনি যা বলেন ও যার দিকে ডাকেন তা উত্তম — যদি শুধু আমাদের জানাতেন যে আমরা যা করেছি তার কোনো কাফফারা আছে। তখন এই অংশটি নাযিল হয়, সঙ্গে 39:53 — হে আমার বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না।",
        },
        {
          en: "The question behind the revelation deserves attention. These were not people minimizing their past; they named it worse than anyone else would have, and their only obstacle to entering Islam was arithmetic — could such a ledger ever be settled? The verse answered a real pastoral emergency, and it still addresses exactly that person: the one who believes the message and disbelieves in his own eligibility.",
          bn: "নাযিলের পেছনের প্রশ্নটি মনোযোগ দাবি করে। এরা নিজেদের অতীতকে হালকা করে দেখানো লোক ছিল না; অন্য যে-কেউ যতটা বলত, তার চেয়েও কঠোর ভাষায় তারা নিজেরাই তা স্বীকার করেছিল। ইসলামে প্রবেশে তাদের একমাত্র বাধা ছিল পাটিগণিত — এমন খাতা কি কখনো মেটানো সম্ভব? আয়াতটি এক বাস্তব আত্মিক জরুরি অবস্থার উত্তর দিয়েছিল, আর আজও ঠিক সেই মানুষটিকেই সম্বোধন করে: যে বার্তাটি বিশ্বাস করে, কিন্তু নিজের যোগ্যতায় অবিশ্বাস করে।",
        },
      ],
    },
    {
      h: { en: "How Sins Become Good Deeds", bn: "পাপ যেভাবে নেকী হয়ে যায়" },
      p: [
        {
          en: "What does yubaddilu, He replaces, mean? Ibn Kathir records two positions among the commentators. On the first, the exchange happens in this world and in the person: ugly qualities are swapped for beautiful ones — the shirk for iman, the violence for restraint, the betrayal for chastity. A person's very habits are rebuilt, so the years ahead produce good where the years behind produced harm. On this reading the verse describes the observable transformation of the sincere convert and the sincere penitent.",
          bn: "'ইউবাদ্দিলু' — তিনি বদলে দেন — এর অর্থ কী? ইবনে কাসীর মুফাসসিরদের দুটি অবস্থান লিপিবদ্ধ করেন। প্রথম মতে, বিনিময়টি ঘটে এই দুনিয়ায়, মানুষটির ভেতরে: কুৎসিত গুণগুলো সুন্দর গুণে বদলে যায় — শিরকের জায়গায় ঈমান, সহিংসতার জায়গায় সংযম, বিশ্বাসঘাতকতার জায়গায় সতীত্ব। মানুষের অভ্যাসগুলোই নতুন করে গড়া হয়, ফলে সামনের বছরগুলো কল্যাণ ফলায় — যেখানে পেছনের বছরগুলো ফলিয়েছিল ক্ষতি। এই পাঠে আয়াতটি বর্ণনা করে আন্তরিক নওমুসলিম ও আন্তরিক তাওবাকারীর চোখে-দেখা রূপান্তর।",
        },
        {
          en: "On the second position, the replacement touches the record itself on the Day of Judgement. Its support is the narration of Abu Dharr (RA) in Muslim about the last man to leave the Fire: his major sins are concealed, his minor sins are shown to him, and he is told, for every evil deed you have a good deed. The man, seeing the direction of the exchange, says: my Lord, I did things I do not see here. The Prophet ﷺ laughed when relating it until his back teeth showed.",
          bn: "দ্বিতীয় অবস্থানে, বদলটি স্পর্শ করে খোদ আমলনামাকে — কিয়ামতের দিন। এর দলিল মুসলিমে আবু যর (রাঃ)-এর বর্ণনা, জাহান্নাম থেকে সর্বশেষ মুক্তি পাওয়া মানুষটি সম্পর্কে: তার বড় গুনাহগুলো আড়াল করা হয়, ছোট গুনাহগুলো তাকে দেখানো হয়, আর বলা হয় — তোমার প্রতিটি মন্দ কাজের বদলে একটি করে নেকী। লেনদেনের গতিমুখ দেখে লোকটি বলে: হে আমার রব, আমি তো এমন সব কাজও করেছি যা এখানে দেখছি না। ঘটনাটি বলতে গিয়ে নবী ﷺ হেসেছিলেন — এমনকি তাঁর মাড়ির দাঁত দেখা গিয়েছিল।",
        },
        {
          en: "The two readings do not compete so much as cover two moments of the same mercy: character is exchanged here, entries are exchanged there. Both hang on the same three conditions the verse states — tawbah, iman, righteous work — and the verse after it, 25:71, presses the point that whoever repents and acts rightly has turned to Allah with a true turning. Repentance in this passage is not a mood; it is a redirection with deeds attached.",
          bn: "পাঠ দুটি পরস্পরের প্রতিদ্বন্দ্বী নয়; বরং একই রহমতের দুটি মুহূর্তকে ঢেকে দেয়: চরিত্র বদলায় এখানে, খাতার এন্ট্রি বদলায় সেখানে। দুটিই ঝুলে আছে আয়াতের বলা একই তিন শর্তে — তাওবা, ঈমান, সৎকর্ম; আর এর পরের আয়াত 25:71 কথাটি চেপে ধরে: যে তাওবা করে ও সৎকাজ করে, সে-ই প্রকৃত প্রত্যাবর্তনে আল্লাহর দিকে ফিরেছে। এই অংশে তাওবা কোনো মনের ভাব নয়; এটি আমল-জোড়া এক অভিমুখ বদল।",
        },
      ],
    },
    {
      h: { en: "Forgiving and Merciful", bn: "ক্ষমাশীল ও দয়ালু" },
      p: [
        {
          en: "The verse closes with two names: wa kanallahu Ghafuran Rahima, and Allah is ever Forgiving, Merciful. The verb kana gives the names permanence — He has always been so; forgiveness is not a policy adopted for this case. The same pairing seals 4:110, where whoever does evil or wrongs himself and then seeks Allah's forgiveness will find Allah Forgiving and Merciful. The promise of exchange in 25:70 is thus anchored not in the sinner's merit but in the Forgiver's character.",
          bn: "আয়াত শেষ হয় দুটি নামে: 'ওয়া কানাল্লাহু গাফূরার রাহীমা' — আর আল্লাহ চিরকালই ক্ষমাশীল, পরম দয়ালু। 'কানা' ক্রিয়াটি নাম দুটিকে স্থায়িত্ব দেয় — তিনি বরাবরই এমন; ক্ষমা এই মামলার জন্য নেওয়া কোনো নীতি নয়। একই জোড় সিলমোহর দেয় 4:110 আয়াতে: যে মন্দ করে বা নিজের ওপর জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু। 25:70 আয়াতের বিনিময়ের প্রতিশ্রুতি তাই নোঙর করা পাপীর যোগ্যতায় নয় — ক্ষমাকারীর চরিত্রে।",
        },
      ],
    },
    {
      h: { en: "No One Disqualified", bn: "কেউ অযোগ্য নয়" },
      p: [
        {
          en: "Lived, the verse dismantles the most effective weapon against repentance: the conviction of being a lost cause. That conviction masquerades as humility while functioning as an excuse, since a person certain of rejection sees no point in changing. Against it stands a verse revealed for people whose records held murder and worse, promising not bare acquittal but conversion of the evidence. After that precedent, no private history can honestly claim to be beyond the schedule of mercy.",
          bn: "যাপনের স্তরে আয়াতটি তাওবার বিরুদ্ধে সবচেয়ে কার্যকর অস্ত্রটি ভেঙে দেয়: নিজেকে শেষ হয়ে যাওয়া মানুষ ভাবার প্রত্যয়। সেই প্রত্যয় বিনয়ের ছদ্মবেশ ধরে, অথচ কাজ করে অজুহাত হয়ে — কারণ প্রত্যাখ্যান সম্পর্কে নিশ্চিত মানুষ বদলানোর কোনো মানে দেখে না। তার বিপরীতে দাঁড়িয়ে এমন এক আয়াত, যা নাযিল হয়েছিল হত্যা ও তারও বেশি কিছু খাতায় থাকা মানুষদের জন্য — প্রতিশ্রুতি দিয়ে শুধু খালাসের নয়, সাক্ষ্যপ্রমাণেরই রূপান্তরের। এই নজিরের পরে কোনো গোপন অতীত সততার সঙ্গে দাবি করতে পারে না যে সে রহমতের তালিকার বাইরে।",
        },
        {
          en: "The conditions keep the promise honest work rather than wishful thinking. Repentance means leaving the sin, regretting it, and resolving against return — restoring rights where rights were taken. Belief means the turn is toward Allah, not merely toward self-improvement. Righteous work means the new direction shows up in deeds that can be pointed to. Whoever is engaged in those three is not waiting to find out whether the exchange applies; by the verse's own terms, it already does.",
          bn: "শর্তগুলোই প্রতিশ্রুতিটিকে অলীক কল্পনা নয়, সৎ পরিশ্রম করে রাখে। তাওবা মানে পাপ ছেড়ে দেওয়া, তার জন্য অনুতপ্ত হওয়া, আর ফিরে না যাওয়ার সংকল্প — যেখানে কারও হক নেওয়া হয়েছিল, তা ফিরিয়ে দেওয়া। ঈমান মানে ফেরাটা আল্লাহর দিকে, নিছক আত্মোন্নয়নের দিকে নয়। সৎকর্ম মানে নতুন অভিমুখটি এমন কাজে ফুটে ওঠা, যা আঙুল দিয়ে দেখানো যায়। যে এই তিনটিতে লেগে আছে, সে বিনিময়টি তার বেলায় খাটবে কি না তা জানার অপেক্ষায় নেই; আয়াতের নিজের শর্তেই — তা ইতিমধ্যে খাটছে।",
        },
      ],
    },
  ],
},
'39:9': {
  sections: [
    {
      h: { en: "Two Men in the Night", bn: "রাতের দুই মানুষ" },
      p: [
        {
          en: "The verse opens on a silhouette: is one who is devoutly obedient in the hours of the night, prostrating and standing, wary of the Hereafter and hoping for the mercy of his Lord — like the other? The comparison completes a contrast begun in 39:8, which pictures a man who cries to his Lord in hardship, then forgets Him the moment relief arrives and sets up rivals to Him. Distress-only religion is the foil; against it stands the one whose devotion runs through the safe hours too.",
          bn: "আয়াতটি খোলে একটি অবয়ব দিয়ে: যে ব্যক্তি রাতের প্রহরগুলোতে সিজদায় ও দাঁড়িয়ে বিনম্র আনুগত্যে মগ্ন, আখিরাত সম্পর্কে সতর্ক আর তার রবের রহমতের প্রত্যাশী — সে কি অন্যজনের মতো? তুলনাটি সম্পূর্ণ করে 39:8 আয়াতে শুরু হওয়া এক বৈপরীত্যকে, যেখানে আঁকা হয়েছে এমন মানুষ, যে কষ্টে পড়ে রবকে ডাকে, আর স্বস্তি আসামাত্র তাঁকে ভুলে গিয়ে তাঁর সমকক্ষ দাঁড় করায়। শুধু-দুর্দিনের ধর্ম এখানে বিপরীত পট; তার মুখোমুখি সেই মানুষ, যার আনুগত্য নিরাপদ প্রহরগুলোর ভেতর দিয়েও বয়ে চলে।",
        },
        {
          en: "The vocabulary is chosen closely. Qanit denotes devout, humble, continuous obedience; ana' al-layl are the hours or watches of the night, not a hurried moment of it; sajidan wa qa'iman, prostrating and standing, are the two poles of the prayer's movement. Night is specified because night worship carries the surest signature of sincerity: no audience is awake to be impressed. What is done then is done for Allah or not done at all.",
          bn: "শব্দ বাছাই এখানে নিবিড়। 'কানিত' বোঝায় বিনম্র, একনিষ্ঠ, লেগে থাকা আনুগত্য; 'আনাআল-লাইল' রাতের প্রহরসমূহ — তার কোনো তাড়াহুড়ার মুহূর্ত নয়; 'সাজিদান ওয়া কাইমান' — সিজদারত ও দণ্ডায়মান — নামাযের চলনের দুই মেরু। রাতকে নির্দিষ্ট করা হয়েছে, কারণ রাতের ইবাদত বহন করে ইখলাসের সবচেয়ে নিশ্চিত স্বাক্ষর: মুগ্ধ করার মতো কোনো দর্শক তখন জেগে নেই। তখন যা করা হয় তা আল্লাহর জন্যই করা হয়, নয়তো আদৌ করা হয় না।",
        },
      ],
    },
    {
      h: { en: "Fear and Hope Together", bn: "ভয় ও আশা একসঙ্গে" },
      p: [
        {
          en: "Two states share the worshipper's heart: yahdharul-akhirah, he is wary of the Hereafter, and yarju rahmata rabbih, he hopes for the mercy of his Lord. The commentators treat the pairing as deliberate spiritual engineering. Fear alone curdles into despair; hope alone slackens into presumption. Together they work like two wings, keeping the servant moving and level — repenting because of what he fears, persisting because of what he hopes.",
          bn: "ইবাদতকারীর হৃদয়ে দুটি অবস্থা ভাগাভাগি করে থাকে: 'ইয়াহযারুল-আখিরাহ' — সে আখিরাত সম্পর্কে সতর্ক, আর 'ইয়ারজু রাহমাতা রাব্বিহ' — সে তার রবের রহমতের প্রত্যাশী। মুফাসসিরগণ এই জোড়কে দেখেন সুচিন্তিত আত্মিক প্রকৌশল হিসেবে। শুধু ভয় জমাট বেঁধে নৈরাশ্য হয়; শুধু আশা ঢিলে হয়ে দুঃসাহসে গড়ায়। একসঙ্গে তারা দুটি ডানার মতো কাজ করে — বান্দাকে চলমান ও ভারসাম্যে রাখে: যা ভয় করে তার কারণে সে তাওবা করে, যা আশা করে তার কারণে লেগে থাকে।",
        },
        {
          en: "The same portrait recurs across the Quran. In 32:16 their sides forsake their beds, calling on their Lord in fear and hope. In 51:17-18 they used to sleep little of the night and seek forgiveness in the last hours before dawn. In 3:191 they remember Allah standing, sitting and lying on their sides, and ponder the creation of the heavens and the earth. The night-worshipper is one of the Quran's recurring heroes, drawn each time with the same two-toned heart.",
          bn: "একই প্রতিকৃতি কুরআনজুড়ে ফিরে আসে। 32:16 আয়াতে তাদের পার্শ্বদেশ বিছানা ছেড়ে দূরে থাকে — তারা তাদের রবকে ডাকে ভয়ে ও আশায়। 51:17-18 আয়াতে তারা রাতের সামান্যই ঘুমাত, আর ভোরের আগের শেষ প্রহরে ক্ষমা চাইত। 3:191 আয়াতে তারা আল্লাহকে স্মরণ করে দাঁড়িয়ে, বসে ও কাত হয়ে শুয়ে, আর আসমান-যমীনের সৃষ্টি নিয়ে গভীর চিন্তা করে। রাতের ইবাদতকারী কুরআনের ফিরে ফিরে আসা নায়কদের একজন — প্রতিবারই আঁকা হয় একই দুই-সুরের হৃদয় নিয়ে।",
        },
      ],
    },
    {
      h: { en: "Are They Equal?", bn: "তারা কি সমান?" },
      p: [
        {
          en: "Then comes the question the verse is famous for: say, are those who know equal to those who do not know? The Arabic uses hal yastawi, a question of equivalence whose answer is meant to be supplied by the listener, and no honest listener can supply yes. The Quran uses this device elsewhere for the blind and the seeing, darkness and light. Here the inequality asserted is between knowledge and its absence — stated absolutely, with no qualifier restricting it to religious subjects.",
          bn: "তারপর আসে সেই প্রশ্ন, যার জন্য আয়াতটি বিখ্যাত: বলো, যারা জানে আর যারা জানে না — তারা কি সমান? আরবিতে 'হাল ইয়াসতাউয়ি' — এমন এক সমতা-প্রশ্ন, যার উত্তর শ্রোতার নিজেরই জোগানোর কথা; আর কোনো সৎ শ্রোতা 'হ্যাঁ' জোগাতে পারে না। কুরআন এই ভঙ্গি অন্যত্র ব্যবহার করে অন্ধ ও চক্ষুষ্মান, অন্ধকার ও আলোর জন্য। এখানে যে অসমতা ঘোষিত হলো তা জ্ঞান ও তার অনুপস্থিতির মধ্যে — বলা হয়েছে নিরঙ্কুশভাবে, ধর্মীয় বিষয়ে সীমিত করার কোনো শর্ত ছাড়াই।",
        },
        {
          en: "Yet the placement defines the knowledge meant. The question is asked immediately after the description of the man praying through the night, and the commentators draw the connection: the knowledge the Quran ranks people by is the kind that produces that man. It is knowledge of Allah that bears fruit in worship, caution and hope. Information that leaves its holder unchanged fails this verse's test however vast it is; a little knowledge that raises its holder at night passes it.",
          bn: "তবু প্রশ্নটির অবস্থানই বুঝিয়ে দেয় কোন জ্ঞানের কথা হচ্ছে। প্রশ্নটি করা হয়েছে রাতভর নামাযরত মানুষটির বর্ণনার ঠিক পরেই, আর মুফাসসিরগণ সংযোগটি টেনে দেন: কুরআন যে জ্ঞান দিয়ে মানুষের স্তর মাপে, তা সেই জাতের — যা ওই মানুষটিকে তৈরি করে। তা আল্লাহ-সম্পর্কিত জ্ঞান, যা ফল দেয় ইবাদতে, সতর্কতায় ও আশায়। যে তথ্য তার ধারককে অপরিবর্তিত রেখে দেয়, তা যত বিশালই হোক, এই আয়াতের পরীক্ষায় ফেল; আর যে অল্প জ্ঞান তার ধারককে রাতে জাগিয়ে তোলে — সে পাস।",
        },
      ],
    },
    {
      h: { en: "People of Sound Minds", bn: "বোধসম্পন্ন মানুষেরা" },
      p: [
        {
          en: "The verse ends: only the possessors of albab take heed. Lubb, the singular, is the kernel of a thing — the mind stripped of husk. The Quran's ulul-albab appear wherever seeing leads to acting: in 3:190-191 they read the alternation of night and day and turn it into remembrance. The closing line thus quietly answers its own famous question. The unequal difference between the knower and the ignorant registers only with people whose minds still take instruction — heedlessness can look at the contrast and see nothing.",
          bn: "আয়াত শেষ হয়: কেবল 'আলবাব'-এর অধিকারীরাই উপদেশ গ্রহণ করে। একবচনে 'লুব্ব' মানে কোনো জিনিসের শাঁস — খোসা ছাড়ানো বিশুদ্ধ বুদ্ধি। কুরআনের 'উলুল-আলবাব' হাজির হয় সেখানেই, যেখানে দেখা গড়ায় করায়: 3:190-191 আয়াতে তারা রাত-দিনের আবর্তন পড়ে তাকে যিকিরে পরিণত করে। শেষ পঙক্তিটি তাই নিজের বিখ্যাত প্রশ্নের উত্তর নীরবে নিজেই দেয়। জ্ঞানী ও অজ্ঞের অসম পার্থক্য ধরা পড়ে কেবল তাদের কাছে, যাদের মন এখনো শিক্ষা নেয় — গাফিলতি এই বৈপরীত্যের দিকে তাকিয়েও কিছুই দেখতে পারে না।",
        },
      ],
    },
    {
      h: { en: "Measuring Knowledge by Its Fruit", bn: "ফল দিয়ে জ্ঞানের পরিমাপ" },
      p: [
        {
          en: "The note behind this article distills the verse: real knowledge is measured by whether it moves us to devotion and hope. That yardstick can be applied without ceremony. After a lecture, a book, a course of study, the verse's question is simply: did anything change in the night that followed? Not as guilt, but as calibration — the worshipper of 39:9 is not presented as a scholar, only as someone whose knowledge of his Lord had consequences after dark.",
          bn: "এই লেখার পেছনের নোটটি আয়াতের নির্যাস তুলে দেয়: প্রকৃত জ্ঞানের মাপ — তা আমাদের ইবাদত ও আশার দিকে নাড়ায় কি না। এই গজকাঠি কোনো আনুষ্ঠানিকতা ছাড়াই প্রয়োগ করা যায়। একটি বক্তৃতা, একটি বই, এক দফা পড়াশোনার পরে আয়াতের প্রশ্নটি সোজা: এর পরের রাতটিতে কি কিছু বদলাল? অপরাধবোধ হিসেবে নয়, মাপ ঠিক করা হিসেবে — 39:9 আয়াতের ইবাদতকারীকে আলিম হিসেবে হাজির করা হয়নি; কেবল এমন একজন হিসেবে, যার রব-বিষয়ক জ্ঞান অন্ধকার নামার পরেও পরিণতি রেখে গেছে।",
        },
        {
          en: "The doorway the verse names is deliberately modest: hours of the night, not the whole night. Two rak'ahs after 'Isha or before Fajr, prayed while others sleep, already place a person inside the description. Consistency outweighs quantity here as elsewhere in the religion. And the pairing of wariness and hope supplies the inner script for those minutes — one prostration weighed with what you fear, one standing lifted by what you hope from the mercy of your Lord.",
          bn: "আয়াতটি যে দরজার নাম নেয় তা ইচ্ছাকৃতভাবেই বিনীত: রাতের কিছু প্রহর, গোটা রাত নয়। ইশার পরে বা ফজরের আগে দুই রাকাত — অন্যরা যখন ঘুমায় তখন পড়া — একজন মানুষকে এই বর্ণনার ভেতরে ঢুকিয়ে দেয়। দ্বীনের অন্যত্র যেমন, এখানেও ধারাবাহিকতা পরিমাণকে ছাড়িয়ে যায়। আর সতর্কতা ও আশার জোড়টি সেই মিনিটগুলোর ভেতরের চিত্রনাট্য জুগিয়ে দেয় — একটি সিজদা ভারী হোক যা তুমি ভয় করো তা দিয়ে, একটি দাঁড়ানো উঁচু হোক তোমার রবের রহমত থেকে যা আশা করো তা দিয়ে।",
        },
      ],
    },
  ],
},
'35:28': {
  sections: [
    {
      h: { en: "A Tour of Colours", bn: "রঙের এক পরিভ্রমণ" },
      p: [
        {
          en: "The sentence about the scholars arrives at the end of a naturalist's tour. In 35:27 the Quran points to water sent down from the sky and fruits of varying colours brought out by it, then to the mountains — streaks of white and red of different shades, and others raven-black, gharabib sud. Then 35:28 continues the survey into the living world: among people, moving creatures and livestock are likewise differing colours. Only after all this does the verse name who actually fears Allah.",
          bn: "আলিমদের নিয়ে বাক্যটি আসে এক প্রকৃতি-পর্যবেক্ষকের পরিভ্রমণের শেষে। 35:27 আয়াতে কুরআন নির্দেশ করে আকাশ থেকে নামানো পানির দিকে, আর তা দিয়ে বের করা নানা রঙের ফলের দিকে; তারপর পাহাড়ের দিকে — বিচিত্র শেডের সাদা ও লাল রেখা, আর কিছু কুচকুচে কালো — 'গারাবীবু সূদ'। এরপর 35:28 জরিপটিকে প্রাণিজগতে টেনে নেয়: মানুষ, বিচরণশীল প্রাণী ও গবাদিপশুর মধ্যেও তেমনি ভিন্ন ভিন্ন রং। এই সবকিছুর পরেই কেবল আয়াতটি বলে, আসলে কারা আল্লাহকে ভয় করে।",
        },
        {
          en: "The sequencing is an argument. Rain, pigment in fruit, mineral bands in rock, variation in skin and hide — these are objects of patient observation, the raw material of what would now be called geology, botany and biology. The verse walks the reader through data and then names the conclusion the data should produce in a sound heart: khashyah, awe of the One who made variety itself. Study of the world, pursued honestly, is presented as a road that ends at reverence.",
          bn: "এই ক্রমবিন্যাস নিজেই একটি যুক্তি। বৃষ্টি, ফলের রঞ্জক, পাথরের খনিজ স্তররেখা, চামড়া ও লোমের বৈচিত্র্য — এগুলো ধৈর্যশীল পর্যবেক্ষণের বিষয়; যাকে আজ ভূতত্ত্ব, উদ্ভিদবিদ্যা ও জীববিজ্ঞান বলা হয়, তারই কাঁচামাল। আয়াতটি পাঠককে হাঁটিয়ে নেয় উপাত্তের ভেতর দিয়ে, তারপর নাম বলে দেয় সেই সিদ্ধান্তের, যা সুস্থ হৃদয়ে ওই উপাত্তের ফলে জন্মানোর কথা: 'খাশইয়া' — তাঁর প্রতি সম্ভ্রমমাখা ভয়, যিনি খোদ বৈচিত্র্যের স্রষ্টা। সততার সঙ্গে করা জগতের অধ্যয়নকে হাজির করা হয়েছে এমন এক পথ হিসেবে, যা শেষ হয় সম্ভ্রমে।",
        },
      ],
    },
    {
      h: { en: "Only the Knowers Fear Him", bn: "কেবল জ্ঞানীরাই তাঁকে ভয় করে" },
      p: [
        {
          en: "The key sentence reads: innama yakhshallaha min 'ibadihil-'ulama — it is only those with knowledge among His servants who fear Allah. Arabic grammar does double duty here. The particle innama restricts the statement, and the object, Allah, is placed before the subject. Read together the clause makes one claim with two edges: true khashyah of Allah is found only in those who know, and commentators add from the word order that such people reserve this fear for Him.",
          bn: "মূল বাক্যটি হলো: 'ইন্নামা ইয়াখশাল্লাহা মিন ইবাদিহিল-উলামা' — তাঁর বান্দাদের মধ্যে কেবল জ্ঞানের অধিকারীরাই আল্লাহকে ভয় করে। আরবি ব্যাকরণ এখানে দ্বৈত কাজ করে। 'ইন্নামা' অব্যয়টি বক্তব্যকে সীমিত করে, আর কর্ম — আল্লাহ — বসানো হয়েছে কর্তার আগে। মিলিয়ে পড়লে বাক্যাংশটি দুই ধারওয়ালা একটিই দাবি করে: আল্লাহর প্রকৃত 'খাশইয়া' পাওয়া যায় কেবল জ্ঞানীদের মধ্যে; আর শব্দক্রম থেকে মুফাসসিরগণ যোগ করেন — এমন মানুষেরা এই ভয় কেবল তাঁর জন্যই তুলে রাখে।",
        },
        {
          en: "Khashyah is not generic fright. The classical scholars distinguish it from khawf: khawf can be felt before anything threatening, while khashyah is awe proportioned to knowledge of the greatness of the one feared. That is why the verse can tie it to scholars by definition. You can startle anyone; you can only awe someone who has understood what stands before them. Fear of Allah, in this vocabulary, is a cognitive achievement before it is an emotion.",
          bn: "'খাশইয়া' গড়পড়তা আতঙ্ক নয়। ধ্রুপদী আলিমগণ একে 'খাওফ' থেকে আলাদা করেন: 'খাওফ' যেকোনো ভীতিকর জিনিসের সামনে জাগতে পারে, কিন্তু 'খাশইয়া' এমন সম্ভ্রম — যার মাত্রা নির্ধারিত হয় ভয়ের পাত্রটির মহত্ত্ব সম্পর্কে জ্ঞান দিয়ে। এ কারণেই আয়াতটি একে সংজ্ঞাগতভাবেই আলিমদের সঙ্গে বাঁধতে পারে। চমকে দেওয়া যায় যে-কাউকে; কিন্তু সম্ভ্রমে অভিভূত করা যায় কেবল তাকে, যে বুঝেছে তার সামনে কে দাঁড়িয়ে। এই অভিধানে আল্লাহভীতি আবেগ হওয়ার আগে এক জ্ঞানগত অর্জন।",
        },
      ],
    },
    {
      h: { en: "Who Counts as 'Ulama", bn: "'উলামা' গণ্য হয় কারা" },
      p: [
        {
          en: "Ibn Kathir puts the equation plainly in his comment on this verse: those who fear Him most are those who know Him best. The knowledge that earns the title here is knowledge of Allah — of His names, His power, His justice — however it was acquired, whether from revelation or from reading His workmanship in mountains and wings. A saying passed down from Ibn Mas'ud (RA) draws the same line: knowledge is not abundance of narration; knowledge is khashyah.",
          bn: "ইবনে কাসীর এই আয়াতের ব্যাখ্যায় সমীকরণটি সরলভাবে বলেন: তাঁকে সবচেয়ে বেশি ভয় করে তারাই, যারা তাঁকে সবচেয়ে ভালো জানে। এখানে যে জ্ঞান এই উপাধি এনে দেয় তা আল্লাহ-বিষয়ক জ্ঞান — তাঁর নামসমূহ, তাঁর ক্ষমতা, তাঁর ন্যায়বিচার সম্পর্কে — তা যেভাবেই অর্জিত হোক: ওহী থেকে, কিংবা পাহাড় ও ডানায় তাঁর কারিগরি পাঠ করে। ইবনে মাসউদ (রাঃ) থেকে চলে আসা একটি উক্তি একই রেখা টানে: জ্ঞান বর্ণনার প্রাচুর্য নয়; জ্ঞান হলো 'খাশইয়া'।",
        },
        {
          en: "The living proof offered by the tradition is the most knowledgeable man of this ummah. Al-Bukhari narrates that the Prophet ﷺ, correcting people who wanted a harder regimen than his, said: I am the most knowing of Allah among you, and the most intense of you in khashyah of Him. Knowledge and awe rose together in him ﷺ and rise together generally; where an increase of learning produces arrogance or coldness instead, this verse says the thing acquired was not yet knowledge.",
          bn: "ঐতিহ্য যে জীবন্ত প্রমাণ হাজির করে, তিনি এই উম্মতের সবচেয়ে জ্ঞানী মানুষটি। বুখারী বর্ণনা করেন: যারা তাঁর চেয়ে কঠোরতর সাধনপদ্ধতি চাইছিল তাদের শুধরে দিয়ে নবী ﷺ বলেন — তোমাদের মধ্যে আল্লাহ সম্পর্কে সবচেয়ে জ্ঞানী আমি, আর তাঁর 'খাশইয়া'-য়ও তোমাদের মধ্যে সবচেয়ে তীব্র আমি। জ্ঞান ও সম্ভ্রম তাঁর ﷺ মধ্যে একসঙ্গে বেড়েছে, আর সাধারণভাবে একসঙ্গেই বাড়ে; যেখানে শেখার বৃদ্ধি বদলে অহংকার বা শীতলতা জন্ম দেয়, সেখানে এই আয়াত বলে — যা অর্জিত হয়েছে তা এখনো জ্ঞান হয়ে ওঠেনি।",
        },
      ],
    },
    {
      h: { en: "Mighty, Forgiving", bn: "পরাক্রমশালী, ক্ষমাশীল" },
      p: [
        {
          en: "The verse ends with a pairing of names: innallaha 'Azizun Ghafur — Allah is Mighty, Forgiving. Each name feeds one half of the scholar's heart. Al-'Aziz, the Overpowering whom nothing escapes, is the ground of the khashyah just described; al-Ghafur, the Forgiving, keeps that awe from collapsing into terror or despair. The same balance appears in 30:22, where the diversity of human tongues and colours is called a sign for those who know — knowledge again standing between wonder and worship.",
          bn: "আয়াত শেষ হয় দুটি নামের জোড়ে: 'ইন্নাল্লাহা আযীযুন গাফূর' — আল্লাহ পরাক্রমশালী, ক্ষমাশীল। প্রতিটি নাম আলিমের হৃদয়ের এক-এক অর্ধেককে পুষ্টি দেয়। আল-আযীয — সেই মহাপরাক্রান্ত, যাঁর নাগাল থেকে কিছুই পালায় না — এইমাত্র বর্ণিত 'খাশইয়া'-র ভিত্তি; আর আল-গাফূর — ক্ষমাশীল — সেই সম্ভ্রমকে আতঙ্ক বা নৈরাশ্যে ধসে পড়া থেকে বাঁচান। একই ভারসাম্য দেখা যায় 30:22 আয়াতে, যেখানে মানুষের ভাষা ও রঙের বৈচিত্র্যকে বলা হয়েছে জ্ঞানীদের জন্য নিদর্শন — জ্ঞান আবারও দাঁড়িয়ে বিস্ময় ও ইবাদতের মাঝখানে।",
        },
      ],
    },
    {
      h: { en: "Study as a Road to Awe", bn: "সম্ভ্রমের পথ হিসেবে অধ্যয়ন" },
      p: [
        {
          en: "The verse licenses something believers sometimes hesitate over: treating the study of nature as a religious act. The fruit chemist, the field geologist, the student of animal colouration are handling the very exhibits 35:27-28 lays out, and the verse assumes such attention can terminate in khashyah. The condition is remembering whose work is on the bench. Observation that stops at mechanism has read the middle of the argument and skipped its conclusion.",
          bn: "আয়াতটি এমন কিছুর অনুমোদন দেয়, যা নিয়ে মুমিনরা কখনো কখনো দ্বিধায় থাকে: প্রকৃতির অধ্যয়নকে দ্বীনী আমল গণ্য করা। ফলের রসায়নবিদ, মাঠের ভূতত্ত্ববিদ, প্রাণীর রং-বিন্যাসের গবেষক — তারা নাড়াচাড়া করছে ঠিক সেই প্রদর্শবস্তুগুলোই, যা 35:27-28 সাজিয়ে রেখেছে; আর আয়াতটি ধরেই নেয়, এমন মনোযোগ 'খাশইয়া'-য় গিয়ে শেষ হতে পারে। শর্ত একটাই — মনে রাখা, গবেষণার টেবিলে কার কারিগরি শুয়ে আছে। যে পর্যবেক্ষণ কার্যকৌশলে থেমে যায়, সে যুক্তির মাঝখানটা পড়েছে, উপসংহারটা বাদ দিয়েছে।",
        },
        {
          en: "The verse also hands every learner a diagnostic. The note behind this article states it without cushioning: knowledge that does not deepen reverence has missed its purpose. A season of study — religious or worldly — can be audited with one question: is Allah greater in my eyes than before it began? Where the answer is yes, degrees and titles are irrelevant and the verse's word 'ulama applies. Where it is no, the remedy is not less learning but learning reconnected to the One it describes.",
          bn: "আয়াতটি প্রত্যেক শিক্ষার্থীর হাতে একটি নির্ণায়ক যন্ত্রও তুলে দেয়। এই লেখার পেছনের নোটটি কোনো গদি ছাড়াই তা বলে: যে জ্ঞান সম্ভ্রম গভীর করে না, তা নিজের উদ্দেশ্য হারিয়েছে। এক মৌসুমের পড়াশোনা — দ্বীনী হোক বা দুনিয়াবি — একটি প্রশ্নে নিরীক্ষা করা যায়: শুরুর আগের চেয়ে কি আল্লাহ এখন আমার চোখে মহত্তর? উত্তর হ্যাঁ হলে ডিগ্রি ও উপাধি অপ্রাসঙ্গিক — আয়াতের 'উলামা' শব্দটি প্রযোজ্য। উত্তর না হলে প্রতিকার কম শেখা নয়; বরং শেখাকে আবার তাঁর সঙ্গে জুড়ে দেওয়া, যাঁর বর্ণনা সে বহন করে।",
        },
      ],
    },
  ],
},
'96:1': {
  sections: [
    {
      h: { en: "The Night in the Cave", bn: "গুহার সেই রাত" },
      p: [
        {
          en: "This is the first word of the Quran to enter the world. Al-Bukhari narrates from Aisha (RA) that revelation began with true dreams, then seclusion was made beloved to the Prophet ﷺ, and he would withdraw to the cave of Hira to worship for nights at a time. There the angel came to him and said: iqra', read. He answered: ma ana bi-qari', I am not one who reads. The angel seized him and pressed him until it strained him, then released him and repeated the command.",
          bn: "এটিই কুরআনের প্রথম শব্দ, যা পৃথিবীতে প্রবেশ করে। বুখারী আয়েশা (রাঃ) থেকে বর্ণনা করেন: ওহীর সূচনা হয়েছিল সত্য স্বপ্ন দিয়ে; তারপর নির্জনতা নবী ﷺ-এর কাছে প্রিয় করে দেওয়া হয়, আর তিনি হেরা গুহায় গিয়ে একটানা কয়েক রাত ইবাদতে কাটাতেন। সেখানেই ফেরেশতা তাঁর কাছে এসে বললেন: 'ইকরা' — পড়ো। তিনি উত্তর দিলেন: 'মা আনা বিকারি' — আমি পাঠকারী নই। ফেরেশতা তাঁকে জাপটে ধরে এমন চাপ দিলেন যে তা কষ্টকর হয়ে উঠল, তারপর ছেড়ে দিয়ে আবার আদেশটি বললেন।",
        },
        {
          en: "Three times the press and the answer were exchanged; then the angel recited the opening of this surah, 96:1-5, and those five verses were what came down that night. The Prophet ﷺ returned to Khadijah (RA) with his heart pounding, saying: cover me, cover me. They wrapped him until the terror left him; Khadijah (RA) heard him out and answered that Allah would never disgrace him, for he kept ties of kinship, carried people's burdens, provided for the destitute, honoured guests and helped in every right cause.",
          bn: "তিনবার এই চাপ ও উত্তরের বিনিময় চলল; তারপর ফেরেশতা তিলাওয়াত করলেন এই সূরার সূচনা — 96:1-5 — আর সেই রাতে ওই পাঁচটি আয়াতই নাযিল হয়েছিল। নবী ﷺ কম্পিত হৃদয়ে খাদীজা (রাঃ)-এর কাছে ফিরে বললেন: আমাকে চাদরে ঢেকে দাও, ঢেকে দাও। তাঁরা তাঁকে চাদরে ঢেকে দিলেন, যতক্ষণ না আতঙ্ক কেটে গেল; খাদীজা (রাঃ) পুরো ঘটনা শুনলেন, আর উত্তর দিলেন: আল্লাহ আপনাকে কখনোই লাঞ্ছিত করবেন না — কারণ আপনি আত্মীয়তার বন্ধন রক্ষা করেন, মানুষের বোঝা বহন করেন, নিঃস্বের ব্যবস্থা করেন, অতিথির সম্মান করেন, আর প্রতিটি ন্যায় কাজে সাহায্য করেন।",
        },
      ],
    },
    {
      h: { en: "Read, in the Name of Your Lord", bn: "পড়ো, তোমার রবের নামে" },
      p: [
        {
          en: "The command joins a verb to a name: iqra' bismi rabbika alladhi khalaq — read in the name of your Lord who created. The reading commanded is not reading in general; it is reading attached to a name. Knowledge is initiated under a sponsor, and the sponsor is identified not by a proper name but by two relations: rabbika, your Lord, the one who has been raising you, and alladhi khalaq, the one who created — stated absolutely, with no object, because everything is His making.",
          bn: "আদেশটি একটি ক্রিয়াকে একটি নামের সঙ্গে জুড়ে দেয়: 'ইকরা বিসমি রাব্বিকাল্লাযী খালাক' — পড়ো তোমার সেই রবের নামে, যিনি সৃষ্টি করেছেন। যে পড়া আদেশ করা হলো তা সাধারণভাবে পড়া নয়; তা এক নামের সঙ্গে বাঁধা পড়া। জ্ঞানের উদ্বোধন হয় এক পৃষ্ঠপোষকের অধীনে, আর সেই পৃষ্ঠপোষকের পরিচয় দেওয়া হয় কোনো নিজস্ব নামে নয়, দুটি সম্পর্কে: 'রাব্বিকা' — তোমার রব, যিনি তোমাকে লালন করে আসছেন; আর 'আল্লাযী খালাক' — যিনি সৃষ্টি করেছেন — নিরঙ্কুশভাবে বলা, কোনো কর্ম ছাড়া, কারণ সবকিছুই তাঁর সৃষ্টি।",
        },
        {
          en: "Then 96:2 narrows the lens from everything to the reader: He created man from 'alaq, a clinging substance. The commentators note the movement — from creation at large to the humble origin of the very species now being commanded to read. The one lifted to receive revelation is reminded, inside the first breath of that revelation, what he is made from. Knowledge begins with two facts held together: the greatness of the Teacher, the smallness of the student.",
          bn: "তারপর 96:2 লেন্সটিকে সবকিছু থেকে সরিয়ে পাঠকের ওপর আনে: তিনি মানুষকে সৃষ্টি করেছেন 'আলাক' — জমাট আঁকড়ে থাকা বস্তু — থেকে। মুফাসসিরগণ এই সরণটি লক্ষ করেন — বিশাল সৃষ্টিজগৎ থেকে সেই প্রজাতিরই বিনীত উৎসে, যাকে এইমাত্র পড়ার আদেশ দেওয়া হলো। যাঁকে ওহী গ্রহণের জন্য তুলে নেওয়া হলো, তাঁকে সেই ওহীরই প্রথম নিঃশ্বাসের ভেতরে মনে করিয়ে দেওয়া হচ্ছে — তিনি কী থেকে গড়া। জ্ঞান শুরু হয় দুটি সত্যকে একসঙ্গে ধরে: শিক্ষকের মহত্ত্ব, ছাত্রের ক্ষুদ্রতা।",
        },
      ],
    },
    {
      h: { en: "The Most Generous, and the Pen", bn: "মহাসম্মানিত দাতা, এবং কলম" },
      p: [
        {
          en: "The passage revealed that night continues: read, and your Lord is al-Akram, the Most Generous, who taught by the pen, taught man what he did not know — 96:4 crediting the pen, 96:5 crediting the teaching. The repetition of the command answers the cave's exchange: the man who said I am not one who reads is told again to read, and the ground given is not his ability but his Lord's generosity. Capacity, in this scene, is something bestowed mid-command.",
          bn: "সেই রাতে নাযিল হওয়া অংশটি এগিয়ে চলে: পড়ো, আর তোমার রব 'আল-আকরাম' — মহাসম্মানিত দাতা — যিনি কলমের মাধ্যমে শিখিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না — 96:4 কৃতিত্ব দেয় কলমকে, 96:5 শেখানোকে। আদেশের পুনরাবৃত্তি গুহার সেই কথোপকথনের উত্তর: যে মানুষটি বলেছিলেন 'আমি পাঠকারী নই', তাঁকে আবার পড়তে বলা হচ্ছে — আর তার ভিত্তি হিসেবে দেওয়া হচ্ছে তাঁর সামর্থ্য নয়, তাঁর রবের দানশীলতা। এই দৃশ্যে সামর্থ্য এমন কিছু, যা আদেশের মাঝপথে দান করা হয়।",
        },
        {
          en: "That the first revelation honours the pen is its own commentary. The Quran elsewhere swears by it — 68:1, nun, by the pen and what they write — and the instrument of recorded knowledge is thereby placed at the foundations of the religion. An unlettered Prophet ﷺ, in an Arabia that kept its learning largely by memory, receives as his first message a celebration of writing. What the message announced, the community later embodied: a civilization of books grew from the word read.",
          bn: "প্রথম ওহীই যে কলমকে সম্মানিত করে — এ নিজেই এক ভাষ্য। কুরআন অন্যত্র এর নামে শপথ করে — 68:1, নূন, শপথ কলমের এবং তারা যা লেখে তার — আর লিপিবদ্ধ জ্ঞানের এই যন্ত্রটি এভাবে দ্বীনের ভিত্তির মধ্যে স্থাপিত হয়। এক নিরক্ষর নবী ﷺ — এমন এক আরবে, যারা তাদের বিদ্যা রাখত প্রধানত মুখস্থে — প্রথম বার্তা হিসেবে পান লেখারই বন্দনা। বার্তাটি যা ঘোষণা করেছিল, উম্মত পরে তা-ই মূর্ত করেছে: 'পড়ো' শব্দটি থেকে বেড়ে উঠেছিল গ্রন্থের এক সভ্যতা।",
        },
      ],
    },
    {
      h: { en: "Knowledge Before Action", bn: "আমলের আগে জ্ঞান" },
      p: [
        {
          en: "The scholars drew consequences from the fact that this, and not a command to pray or fast, opened the revelation. Al-Bukhari, arranging his Sahih, titled a chapter in the Book of Knowledge: knowledge before speech and action, citing 47:19 — know that there is no god but Allah, then seek forgiveness — where knowing is commanded ahead of doing. The order of 96:1 within the whole Quran makes the same point structurally: the community was taught to read before it was taught anything else.",
          bn: "নামায বা রোযার আদেশ নয়, বরং এটিই যে ওহীর দরজা খুলেছিল — আলিমগণ এই তথ্য থেকে সিদ্ধান্ত টেনেছেন। বুখারী তাঁর সহীহ সাজাতে গিয়ে কিতাবুল-ইলমে একটি অধ্যায়ের শিরোনাম দেন: কথা ও কাজের আগে জ্ঞান — দলিল হিসেবে 47:19 — জেনে রাখো, আল্লাহ ছাড়া কোনো ইলাহ নেই, তারপর ক্ষমা চাও — যেখানে জানার আদেশ করার আগে এসেছে। গোটা কুরআনের মধ্যে 96:1 আয়াতের অবস্থানও কাঠামোগতভাবে একই কথা বলে: এই উম্মতকে অন্য যেকোনো কিছু শেখানোর আগে পড়তে শেখানো হয়েছিল।",
        },
        {
          en: "The commentators are equally attentive to the qualifier. The command is not bare literacy; it is reading bismi rabbika, in your Lord's name. Knowledge severed from the Creator can serve tyranny as readily as truth — the same surah goes on to picture man transgressing because he sees himself self-sufficient. Reading in His name means learning that begins with dependence, proceeds with honesty, and is spent on what pleases the One who taught by the pen.",
          bn: "মুফাসসিরগণ শর্তটির প্রতিও সমান মনোযোগী। আদেশটি নিছক অক্ষরজ্ঞান নয়; তা 'বিসমি রাব্বিকা' — তোমার রবের নামে পড়া। স্রষ্টা থেকে বিচ্ছিন্ন জ্ঞান সত্যের মতোই সহজে জুলুমেরও সেবা করতে পারে — এই সূরাই সামনে গিয়ে এঁকে দেখায়, মানুষ সীমালঙ্ঘন করে কারণ সে নিজেকে অভাবমুক্ত দেখে। তাঁর নামে পড়ার মানে — এমন শেখা, যার শুরু নির্ভরতায়, চলা সততায়, আর ব্যয় তাঁর সন্তুষ্টিতে, যিনি কলম দিয়ে শিখিয়েছেন।",
        },
      ],
    },
    {
      h: { en: "Beginning in His Name Today", bn: "আজ তাঁর নামে শুরু করা" },
      p: [
        {
          en: "The note behind this article says a community founded on this verse can never treat seeking knowledge as separate from worship, and the verse gives that principle a practice small enough to keep. Open the textbook, the journal, the lecture, the training module with His name said deliberately — not as a reflex syllable but as a re-declaration of whose world is about to be studied and on whose behalf. The same beginning fits the teacher preparing a lesson and the parent reading to a child.",
          bn: "এই লেখার পেছনের নোটটি বলে: এই আয়াতের ওপর প্রতিষ্ঠিত কোনো জাতি জ্ঞানার্জনকে কখনো ইবাদত থেকে আলাদা গণ্য করতে পারে না; আর আয়াতটি এই নীতিকে দেয় এমন এক ছোট্ট অভ্যাস, যা ধরে রাখা যায়। পাঠ্যবই, গবেষণাপত্র, বক্তৃতা, প্রশিক্ষণ-পাঠ খোলো তাঁর নাম সচেতনভাবে উচ্চারণ করে — প্রতিবর্তী কোনো শব্দাংশ হিসেবে নয়, বরং এই পুনর্ঘোষণা হিসেবে যে, কার জগৎ এখন পড়া হতে যাচ্ছে এবং কার জন্য। একই সূচনা মানায় পাঠ প্রস্তুতকারী শিক্ষককে, সন্তানকে পড়ে শোনানো মা-বাবাকেও।",
        },
        {
          en: "The verse also assigns a direction of growth. A tradition begun with the command read cannot rest in inherited opinion; and a learning begun in the name of your Lord cannot rest in accumulation for its own sake. The Quran later teaches the only prayer for increase it ever commands the Prophet ﷺ to make: rabbi zidni 'ilma, my Lord, increase me in knowledge, given in 20:114, in the last part of that surah. Between the first command and that prayer lies the whole ethic: keep reading, and keep reading in His name.",
          bn: "আয়াতটি বৃদ্ধির অভিমুখও নির্ধারণ করে দেয়। যে ঐতিহ্যের শুরু 'পড়ো' আদেশে, তা উত্তরাধিকারসূত্রে পাওয়া মতে থেমে থাকতে পারে না; আর যে শেখার শুরু 'তোমার রবের নামে', তা জমানোর জন্য জমানোতেও থামতে পারে না। কুরআন পরে শেখায় বৃদ্ধির একমাত্র সেই দোয়া, যা করার আদেশ সে নবী ﷺ-কে কখনো দিয়েছে: 'রাব্বি যিদনী ইলমা' — হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন — 20:114 আয়াতে, সূরাটির শেষ অংশে। প্রথম আদেশ আর সেই দোয়ার মাঝখানে গোটা নীতিশাস্ত্রটি শুয়ে আছে: পড়তে থাকো, আর তাঁর নামেই পড়তে থাকো।",
        },
      ],
    },
  ],
},
};

if (typeof module !== 'undefined' && module.exports) module.exports = { TADABBUR_ARTICLES };
