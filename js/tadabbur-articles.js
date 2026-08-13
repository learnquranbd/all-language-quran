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
            bn: "মুসলিম বর্ণনা করেন, নবী ﷺ উবাই ইবনে কা'ব (রাঃ)-কে জিজ্ঞেস করেন, আল্লাহর কিতাবের কোন আয়াতটি তাঁর কাছে সবচেয়ে মহান। উবাই যখন আয়াতুল কুরসীর কথা বলেন, নবী ﷺ তাঁর বুকে হাত রেখে তাঁকে এই জ্ঞানের জন্য অভিনন্দন জানান। আয়াতটিকে দৈর্ঘ্যের কারণে মহান বলা হয়নি। এটি মহান, কারণ শুরু থেকে শেষ পর্যন্ত এর বিষয়বস্তু একটিই — স্বয়ং আল্লাহ।",
          },
          {
            en: "Al-Bukhari relates the account of Abu Hurayrah (RA), left to guard the zakat stores of Ramadan, who caught a thief on three successive nights; on the last the thief bought his release by teaching him to recite Ayat al-Kursi before sleeping, and the Prophet ﷺ confirmed that the words were true even though the one who spoke them was a devil. Reciting it after each obligatory prayer is reported from the Prophet ﷺ in the collection of an-Nasa'i.",
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
            en: "The verse promises a response, and the commentators are careful not to flatten that into getting whatever is asked. A hadith reported by at-Tirmidhi and by Ahmad describes three possible outcomes for a supplication made without sin or severing of kinship: it is given, or it is stored for the hereafter, or an equivalent harm is turned away. On that reading no du'a is wasted, though not every du'a arrives in the shape it was posted.",
            bn: "আয়াতটি সাড়ার প্রতিশ্রুতি দেয়, আর মুফাসসিরগণ সতর্ক থাকেন যেন একে 'যা চাওয়া হয় তা-ই পাওয়া' অর্থে সংকুচিত না করা হয়। তিরমিযী ও আহমাদে বর্ণিত একটি হাদীসে বলা হয়েছে, পাপ বা আত্মীয়তা ছিন্ন করার উদ্দেশ্য ছাড়া করা দোয়ার তিনটি সম্ভাব্য পরিণতি: তা দেওয়া হয়, কিংবা আখিরাতের জন্য জমা রাখা হয়, কিংবা সমপরিমাণ কোনো ক্ষতি সরিয়ে দেওয়া হয়। এই পাঠ অনুযায়ী কোনো দোয়াই বৃথা যায় না, যদিও প্রতিটি দোয়া ঠিক যে আকারে পাঠানো হয়েছিল সেই আকারে ফিরে আসে না।",
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
            en: "The Prophet ﷺ called du'a the very substance of worship, in a report transmitted by at-Tirmidhi. His own supplications, preserved in large numbers, are marked by a few consistent habits: praising Allah before asking, sending salawat, using His names appropriate to the request, and asking for the small along with the great. He is reported in the collections to have taught that a servant should ask Allah even for the strap of his sandal when it breaks.",
            bn: "তিরমিযীতে বর্ণিত এক হাদীসে নবী ﷺ দোয়াকে ইবাদতের মূল সারবস্তু বলেছেন। তাঁর নিজের দোয়াগুলো বিপুল সংখ্যায় সংরক্ষিত, আর সেগুলোতে কয়েকটি ধারাবাহিক অভ্যাস স্পষ্ট: চাওয়ার আগে আল্লাহর প্রশংসা করা, দরূদ পাঠ করা, আবেদনের সঙ্গে মানানসই তাঁর নামগুলো ব্যবহার করা, আর বড় জিনিসের পাশাপাশি ছোট জিনিসও চাওয়া। হাদীস সংকলনগুলোতে বর্ণিত আছে, তিনি শিখিয়েছেন — বান্দা যেন জুতার ফিতা ছিঁড়ে গেলেও তা আল্লাহর কাছেই চায়।",
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
            en: "That admission is the door into the rest of the verse. Nobody is told that they should have enjoyed the prospect. Then the principle arrives in two balanced clauses: it may be that you dislike a thing and it is good for you, and it may be that you love a thing and it is bad for you. The particle 'asa marks possibility, not certainty. The verse does not claim that everything disliked is secretly good.",
            bn: "এই স্বীকৃতিটিই বাকি আয়াতে প্রবেশের দরজা। কাউকে বলা হয়নি যে এই সম্ভাবনায় তাদের উৎফুল্ল হওয়া উচিত ছিল। এরপর নীতিটি আসে দুটি ভারসাম্যপূর্ণ বাক্যে: হতে পারে তোমরা এমন কিছু অপছন্দ করো যা তোমাদের জন্য কল্যাণকর, আর হতে পারে তোমরা এমন কিছু ভালোবাসো যা তোমাদের জন্য ক্ষতিকর। 'আসা' শব্দটি সম্ভাবনা বোঝায়, নিশ্চয়তা নয়। আয়াত এ দাবি করে না যে অপছন্দের প্রতিটি জিনিসের ভেতরেই গোপন কল্যাণ লুকিয়ে আছে।",
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
            en: "Muslim narrates that when Umm Salamah (RA) lost her husband Abu Salamah (RA) she said the supplication he had taught, asking Allah to reward her in her affliction and to replace it with something better, and she admitted she wondered who could possibly be better than Abu Salamah. She was later married to the Prophet ﷺ. She did not know at the time; that is the whole point of the account, and she did not claim to.",
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
            en: "Then the turn: fa idha 'azamta fatawakkal 'alallah, and when you have resolved, rely upon Allah. The commentators note that the verb shifts from plural consultation to singular resolve. Everyone is consulted; one person decides. Reliance is placed after the decision, not instead of it, which is why the classical scholars treat tawakkul as the companion of effort rather than its replacement. Allah loves those who rely upon Him, the verse concludes.",
            bn: "এরপর মোড়: ফা-ইযা 'আযামতা ফাতাওয়াক্কাল 'আলাল্লাহ — আর যখন আপনি সংকল্প করে ফেলবেন, তখন আল্লাহর ওপর ভরসা করুন। মুফাসসিরগণ লক্ষ করেন, ক্রিয়াপদ বহুবচনের পরামর্শ থেকে একবচনের সংকল্পে সরে যায়। পরামর্শ নেওয়া হয় সবার, সিদ্ধান্ত নেন একজন। ভরসা রাখা হয় সিদ্ধান্তের পরে — সিদ্ধান্তের বদলে নয়; এ কারণেই ধ্রুপদী আলিমগণ তাওয়াক্কুলকে চেষ্টার বিকল্প নয়, বরং সঙ্গী হিসেবে দেখেন। আয়াত শেষ হয় এই কথায় যে আল্লাহ ভরসাকারীদের ভালোবাসেন।",
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
            bn: "এই আয়াত ও আমলের মধ্যে সবচেয়ে সরাসরি সংযোগ হলো বুখারী ও মুসলিমে সংরক্ষিত একটি দোয়া, যা নবী ﷺ মসজিদের দিকে বের হওয়ার সময় পড়তেন: হে আল্লাহ, আমার হৃদয়ে নূর দিন, আমার শ্রবণে নূর দিন, আমার দৃষ্টিতে নূর দিন, আমার ডানে ও বামে নূর দিন, আমার সামনে ও পেছনে নূর দিন, আর আমাকে নূরে পরিণত করুন। বর্ণনাগুলোতে অঙ্গপ্রত্যঙ্গের নাম একে একে উল্লেখ করা হয়েছে।",
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
            bn: "তিরমিযী একটি হাদীসে কুদসী বর্ণনা করেন, যেখানে আল্লাহ বলেন — বান্দার পাপ যদি আকাশের মেঘ পর্যন্ত পৌঁছে যায় এবং এরপর সে ক্ষমা চায়, তবে তিনি তাকে ক্ষমা করে দেবেন। এর পাশাপাশি সততার দাবি হলো এ কথাও বলা যে পাপের ক্ষমা আর পরিণতির অবসান এক নয়। ঋণ পরিশোধ করতেই হবে, ক্ষতি মেরামত করতেই হবে, আর আইনি বা শারীরিক পরিণাম আপনাআপনি মিলিয়ে যায় না। যা শেষ হয়ে যায় তা হলো আল্লাহর সামনে দাঁড়ানোর জায়গাটির অনিশ্চয়তা।",
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
            en: "This is relayed from Ibn Abbas (RA) and from al-Hasan al-Basri among the early generations, and it is repeated across the classical commentaries. It should be presented for what it is: an inference from the grammar of the two verses, held by a great many scholars, rather than a text with an independent chain of its own. Taken that way it is a sound and comforting observation without needing to be dressed as a hadith.",
            bn: "এটি পূর্ববর্তী প্রজন্মের মধ্যে ইবনে আব্বাস (রাঃ) ও হাসান বসরী থেকে বর্ণিত, আর ধ্রুপদী তাফসীরগুলোতে বারবার পুনরাবৃত্ত হয়েছে। একে যা তা-ই বলে উপস্থাপন করা উচিত: দুই আয়াতের ব্যাকরণ থেকে টানা একটি সিদ্ধান্ত, যা বহু আলিম গ্রহণ করেছেন — স্বতন্ত্র সনদসম্পন্ন কোনো বর্ণনা নয়। এভাবে নিলে এটি একটি যথার্থ ও সান্ত্বনাদায়ক পর্যবেক্ষণ, যাকে হাদীসের পোশাক পরানোর প্রয়োজন নেই।",
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
            en: "The passage ends by handing the child words to say: rabbi irhamhuma kama rabbayani saghira. My Lord, have mercy on them as they raised me when I was small. The verb rabbayani, they raised me, shares its root with Rabb, the Lord who nurtures and brings to completion. The child is asking the true Rabb to do for his parents what they, in their small human way, once did for him.",
            bn: "অংশটি শেষ হয় সন্তানের হাতে কিছু শব্দ তুলে দিয়ে: রাব্বির হামহুমা কামা রাব্বাইয়ানী সাগীরা। হে আমার রব, তাদের প্রতি দয়া করুন যেমন তারা আমাকে ছোটবেলায় লালন করেছেন। রাব্বাইয়ানী ক্রিয়াটি — তারা আমাকে লালন করেছেন — একই ধাতু থেকে এসেছে যা থেকে রাব্ব, সেই প্রভু যিনি প্রতিপালন করেন ও পূর্ণতায় পৌঁছান। সন্তান প্রকৃত রব-এর কাছে চাইছে যেন তিনি তার পিতামাতার জন্য তা-ই করেন, যা তাঁরা মানুষের সীমিত সামর্থ্যে একদিন তার জন্য করেছিলেন।",
          },
          {
            en: "Note what is asked for. Not their health, not their comfort, not long life — mercy, which is what they will need most and what no child can provide. This is also the part of the command that outlives them. When parents have died, the tongue and the manner are no longer in play, but the du'a is. Prophetic teaching preserved in Sahih Muslim names the supplication of a righteous child among the deeds that continue after death.",
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
            en: "This is where Surah al-Ankabut ends, and the ending answers its beginning. The surah opens by asking whether people suppose they will be left to say we believe and not be tested, in 29:2 — the verb is yuftanun, from fitnah, the assaying of metal in fire. A hundred and sixty-odd lines later, after the histories of Nuh, Ibrahim, Lut and Shu'ayb (AS), the surah closes not with relief from testing but with a promise attached to effort.",
            bn: "এখানেই সূরা আল-আনকাবূত শেষ হয়, আর এই শেষটি তার শুরুর জবাব দেয়। সূরার সূচনা প্রশ্ন করে, মানুষ কি মনে করে তাদের ছেড়ে দেওয়া হবে এই বলার পর যে আমরা ঈমান এনেছি, অথচ তাদের পরীক্ষা করা হবে না — 29:2 আয়াতে; ক্রিয়াটি ইউফতানূন, ফিতনা থেকে, যার মূল ছবি আগুনে ধাতু যাচাই। বহু আয়াত পরে, নূহ, ইবরাহীম, লূত ও শুআইব (আঃ)-এর ইতিহাসের পর, সূরাটি শেষ হয় পরীক্ষা থেকে অব্যাহতির প্রতিশ্রুতি দিয়ে নয়, বরং প্রচেষ্টার সাথে যুক্ত এক প্রতিশ্রুতি দিয়ে।",
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
            bn: "দ্বিতীয়ার্ধটি একটি অব্যয়ের ওপর দাঁড়ানো: ইনদাহু, তাঁর কাছে। সম্পদ ও সন্তানকে বর্ণনা করা হয়েছে মালিকানার সর্বনাম দিয়ে — তোমাদের; আর পুরস্কারকে বর্ণনা করা হয়েছে আল্লাহর কাছে অবস্থিত হিসেবে। এটি কেবল আকারের নয়, নিরাপত্তারও পার্থক্য। তোমার কাছে যা আছে তা হারানো যায়, খরচ হয়ে যায়, তোমার পরেও থেকে যায় বা কেড়ে নেওয়া হয়; তাঁর কাছে যা আছে তা নয়। আজরুন আযীম বা মহাপুরস্কারের কোনো বর্ণনা দেওয়া হয়নি, আর মুফাসসিরগণ একেই তার বিশালতার আলামত হিসেবে পড়েন।",
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
            en: "So gratitude is taught here to people who had just been given something enormous and specific. That is the context the verse asks to be read in: not an abstract principle but the right response to a deliverance one has actually lived through. And 14:8 closes the door on any misunderstanding — Musa says, if you and everyone on earth disbelieve, Allah is Free of need, Praiseworthy. The increase is entirely for the grateful. Nothing is added to Allah by it.",
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
            en: "This is one of the verses whose occasion of revelation is well attested. Umm Salamah (RA), a wife of the Prophet ﷺ, asked why women were not mentioned in the Quran as men were. The report is preserved in the collections of Ahmad, at-Tirmidhi and an-Nasa'i, and this verse came down in reply — naming men and women explicitly, ten times over, in a single sentence.",
            bn: "এটি সেই আয়াতগুলোর একটি যার শানে নুযূল সুপ্রমাণিত। নবী ﷺ-এর স্ত্রী উম্মে সালামা (রাঃ) জিজ্ঞেস করেছিলেন, পুরুষদের মতো নারীদের কথা কুরআনে কেন উল্লেখ করা হয় না। বর্ণনাটি আহমাদ, তিরমিযী ও নাসাঈর সংকলনে সংরক্ষিত, আর জবাবে এই আয়াতটি নাযিল হয় — একটি বাক্যেই দশবার করে পুরুষ ও নারীর নাম স্পষ্টভাবে উল্লেখ করে।",
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
            en: "Hal jaza' al-ihsani illa al-ihsan. Six words in Arabic, and the shape of the sentence carries as much as the vocabulary. Hal is the interrogative particle, but paired with illa, except, it forms the construction Arabic uses for emphatic negation dressed as a question. The literal sense is: is the recompense of ihsan anything except ihsan? The intended sense is: there is nothing else it could be.",
            bn: "হাল জাযাউল-ইহসানি ইল্লাল-ইহসান। আরবিতে ছয়টি শব্দ, আর বাক্যের গড়ন শব্দভান্ডারের সমানই ভার বহন করে। হাল একটি প্রশ্নবাচক অব্যয়, কিন্তু ইল্লা অর্থাৎ ‘ছাড়া’-র সাথে জোড়া লেগে এটি সেই গঠন তৈরি করে যা আরবি ব্যবহার করে প্রশ্নের পোশাকে জোরালো অস্বীকার প্রকাশে। আক্ষরিক অর্থ: ইহসানের প্রতিদান কি ইহসান ছাড়া আর কিছু? অভিপ্রেত অর্থ: এটি আর কিছুই হতে পারে না।",
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
            en: "Wa ayyadahu bijunudin lam tarawha — and He supported him with armies you did not see. Ayyada is from ayd, strength; the sense is bracing something so it holds. The relative clause is addressed to the audience: you did not see them. The help that decided the outcome was invisible to the very people now being asked to march. Sakinah appears again in this surah at 9:26, and 48:4 records it again in Surah al-Fath.",
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
};

if (typeof module !== 'undefined' && module.exports) module.exports = { TADABBUR_ARTICLES };
