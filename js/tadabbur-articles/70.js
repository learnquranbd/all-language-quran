/**
 * Tadabbur long-form articles — surah 70.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "70:22-23": {
    "sections": [
      {
        "h": {
          "en": "The Diagnosis Before the Exception",
          "bn": "ব্যতিক্রমের আগে রোগনির্ণয়"
        },
        "p": [
          {
            "en": "Surah al-Ma'arij describes a human being before it names any cure. In 70:19 man is created halu'an, and the next two verses define the word rather than leave it standing: when evil touches him he is jazu'an, panicky; when good touches him he is manu'an, withholding. It is a portrait of someone unstable in both directions, unable to bear loss and unable to share gain. The Quran states it as how we are made, not as an accusation levelled at a few bad people.",
            "bn": "সূরা আল-মা'আরিজ কোনো প্রতিকারের নাম বলার আগে মানুষটির বর্ণনা দেয়। 70:19 আয়াতে বলা হয়, মানুষকে সৃষ্টি করা হয়েছে 'হালূ'আন' করে; আর পরের দুই আয়াত শব্দটিকে ঝুলিয়ে না রেখে তার সংজ্ঞা দেয়: বিপদ তাকে স্পর্শ করলে সে হয় 'জাযূ'আন', উৎকণ্ঠিত; কল্যাণ তাকে স্পর্শ করলে সে হয় 'মানূ'আন', কৃপণ। এটি এমন একজনের প্রতিকৃতি যে দুই দিকেই অস্থির — ক্ষতি সইতে পারে না, লাভ ভাগ করতেও পারে না। কুরআন একে বলে আমাদের গড়নের কথা হিসেবে, গুটিকয় খারাপ মানুষের বিরুদ্ধে অভিযোগ হিসেবে নয়।"
          },
          {
            "en": "Then comes the exception, and in Arabic it is two words: illa al-musallin — except those who pray. Al-musallin is an active participle, a standing description rather than a report of an act performed once. The exception is not from being human. It is from the condition just described. The Quran does not say that people who pray were made out of some other material; it says that this is what breaks the pattern. Everything the passage adds afterwards explains how.",
            "bn": "এরপর আসে ব্যতিক্রম, আর আরবিতে তা মাত্র দুটি শব্দ: ইল্লাল মুসাল্লীন — নামাযীরা ছাড়া। 'আল-মুসাল্লীন' একটি কর্তৃবাচক বিশেষণ, অর্থাৎ একবার সম্পন্ন কোনো কাজের খবর নয়, বরং একটি স্থায়ী পরিচয়। ব্যতিক্রমটি মানুষ হওয়া থেকে নয়। এটি ঠিক এইমাত্র বর্ণিত অবস্থাটি থেকে। কুরআন বলে না যে নামাযীদের অন্য কোনো উপাদানে গড়া হয়েছে; এটি বলে, এই জিনিসটিই ছকটি ভাঙে। এরপর অনুচ্ছেদটি যা যা যোগ করে, সবই ব্যাখ্যা করে কীভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Constant, Not Merely Present",
          "bn": "কেবল উপস্থিত নয়, অবিচল"
        },
        "p": [
          {
            "en": "The next verse qualifies who is meant: alladhina hum 'ala salatihim da'imun, those who are constant in their prayer. Da'im is continuity, something that does not stop. Two readings are recorded from the early commentators: that it means never abandoning the prayer, and that it means keeping it at its appointed times. The point survives either reading, and 107:4-5 shows the contrast the Quran itself draws, where woe is pronounced on those who pray but are heedless of their prayer. Praying is not the qualification; being constant in it is.",
            "bn": "পরের আয়াতটি নির্দিষ্ট করে দেয় কাদের কথা বলা হচ্ছে: আল্লাযীনা হুম 'আলা সালাতিহিম দাইমূন — যারা তাদের নামাযে অবিচল। 'দাইম' মানে ধারাবাহিকতা, এমন কিছু যা থামে না। প্রাচীন মুফাসসিরদের থেকে দুটি পাঠ বর্ণিত: এর অর্থ নামায কখনো ছেড়ে না দেওয়া, এবং এর অর্থ নির্ধারিত সময়ে তা আদায় করা। যে পাঠই নিন, মূল কথাটি টিকে থাকে; আর 107:4-5 আয়াতে কুরআন নিজেই যে বৈপরীত্য আঁকে তা দেখায়, যেখানে দুর্ভোগ ঘোষণা করা হয় তাদের জন্য যারা নামায পড়ে অথচ নিজেদের নামায সম্পর্কে উদাসীন। নামায পড়াটাই যোগ্যতা নয়; তাতে অবিচল থাকাটাই যোগ্যতা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Exception Contains",
          "bn": "ব্যতিক্রমটির ভেতরে যা আছে"
        },
        "p": [
          {
            "en": "The list that follows is not only about worship. After prayer come those in whose wealth is a known right for the petitioner and the deprived in 70:24-25, then those who believe in the Day of Recompense in 70:26, those who fear their Lord's punishment in 70:27-28, those who guard their chastity in 70:29-31, those attentive to their trusts and promises in 70:32, and those upright in their testimonies in 70:33, before 70:34 returns to prayer and 70:35 states the reward: they will be in gardens, honoured.",
            "bn": "এরপরের তালিকাটি কেবল ইবাদতের নয়। নামাযের পর আসে তারা, যাদের সম্পদে প্রার্থী ও বঞ্চিতের জন্য একটি সুবিদিত অধিকার আছে — 70:24-25 আয়াতে; তারপর যারা বিচার দিবসে বিশ্বাস করে — 70:26 আয়াতে; যারা তাদের প্রতিপালকের শাস্তিকে ভয় করে — 70:27-28 আয়াতে; যারা নিজেদের লজ্জাস্থান সংরক্ষণ করে — 70:29-31 আয়াতে; যারা আমানত ও ওয়াদার ব্যাপারে যত্নবান — 70:32 আয়াতে; আর যারা সাক্ষ্যদানে সুপ্রতিষ্ঠিত — 70:33 আয়াতে। এরপর 70:34 আয়াতে ফিরে আসে নামাযের কথা, আর 70:35 আয়াতে বলা হয় প্রতিদান: তারাই থাকবে জান্নাতে, সম্মানিত অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Opening and Closing on Prayer",
          "bn": "নামায দিয়ে শুরু, নামায দিয়ে শেষ"
        },
        "p": [
          {
            "en": "The two prayer verses are not a repetition, and the Arabic makes the difference audible. 70:23 says they are da'imun over their prayer; 70:34 says they are yuhafizun over it — guarding it, keeping watch on it. Constancy is about not stopping; guarding is about the thing itself, its times and its conditions and the attention paid inside it. Between those two statements the passage places money, belief, fear, chastity, contracts and testimony. Prayer is set as the frame around a whole social life rather than as one item on a list.",
            "bn": "নামায-সংক্রান্ত দুটি আয়াত পুনরাবৃত্তি নয়, আর আরবি পার্থক্যটি কানে ধরিয়ে দেয়। 70:23 আয়াতে বলা হয় তারা তাদের নামাযের ব্যাপারে 'দাইমূন'; 70:34 আয়াতে বলা হয় তারা তার ব্যাপারে 'ইউহাফিযূন' — রক্ষা করে, পাহারা দেয়। অবিচলতা হলো না থামা; আর রক্ষা করা হলো জিনিসটিকে ঘিরে — তার সময়, তার শর্ত এবং তার ভেতরে দেওয়া মনোযোগ। এই দুটি বক্তব্যের মাঝখানে অনুচ্ছেদটি বসিয়ে দেয় অর্থ, বিশ্বাস, ভয়, সতীত্ব, চুক্তি ও সাক্ষ্য। নামায এখানে তালিকার একটি আইটেম নয়, বরং গোটা সামাজিক জীবনের চারপাশে বসানো কাঠামো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Known Right",
          "bn": "সুবিদিত অধিকার"
        },
        "p": [
          {
            "en": "The item placed first inside that frame answers the diagnosis directly. Against manu'an, withholding, the passage sets a haqq ma'lum, a known right, fixed inside a person's wealth for the one who asks and the one who is deprived. Al-Ma'arij is Makkan, and the scholars differ over whether the known right here is the zakat or a claim standing alongside it; the same idea appears in 51:19 without the word known attached to it. Either way, withholding is answered by a right that belongs to somebody else and is not the owner's to feel generous about.",
            "bn": "সেই কাঠামোর ভেতরে প্রথমেই যে জিনিসটি বসানো হয়েছে, তা রোগনির্ণয়ের সরাসরি জবাব। 'মানূ'আন' অর্থাৎ কৃপণতার বিপরীতে অনুচ্ছেদটি বসায় 'হাক্ব মা'লূম' — একটি সুবিদিত অধিকার, যা মানুষের সম্পদের ভেতরেই নির্ধারিত, প্রার্থী ও বঞ্চিতের জন্য। সূরা আল-মা'আরিজ মক্কী, আর আলিমগণ মতভেদ করেছেন যে এখানকার সুবিদিত অধিকার যাকাত, নাকি তার পাশাপাশি দাঁড়ানো আরেকটি দাবি; একই ভাব এসেছে 51:19 আয়াতে, তবে সেখানে 'সুবিদিত' শব্দটি নেই। যেভাবেই দেখা হোক, কৃপণতার জবাব দেওয়া হয়েছে এমন এক অধিকার দিয়ে যা অন্য কারও, আর যা নিয়ে উদারতা অনুভব করার অধিকার মালিকের নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Constancy Over Intensity",
          "bn": "তীব্রতার চেয়ে নিয়মিততা"
        },
        "p": [
          {
            "en": "The practice this verse asks for is unglamorous. Muslim relates from Aisha (RA) that the deeds most beloved to Allah are the most constant of them, even if they are few. Applied here, a small routine that survives travel, illness, a bad week and a good one is closer to what 70:23 describes than a burst of devotion that ends. And the passage argues that this is a remedy and not merely a duty: the panic and the tight-fistedness set out in 70:19-21 are treated by something done five times a day, whether or not the day seemed to deserve it.",
            "bn": "এই আয়াত যে আমল চায় তা চটকহীন। মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর কাছে সবচেয়ে প্রিয় আমল সেটিই যা সবচেয়ে নিয়মিত, তা পরিমাণে কম হলেও। এখানে প্রয়োগ করলে দাঁড়ায়: এমন একটি ছোট নিয়ম যা সফর, অসুস্থতা, খারাপ সপ্তাহ ও ভালো সপ্তাহ পেরিয়েও টিকে থাকে, তা 70:23 আয়াতের বর্ণনার অনেক কাছাকাছি — এক ঝলক ইবাদতের চেয়ে যা শেষ হয়ে যায়। আর অনুচ্ছেদটি যুক্তি দেয় যে এটি নিছক দায়িত্ব নয়, প্রতিকার: 70:19-21 আয়াতে বর্ণিত উৎকণ্ঠা ও মুষ্টিবদ্ধ হাত সারানো হয় এমন কিছু দিয়ে যা দিনে পাঁচবার করা হয়, দিনটি তার যোগ্য মনে হোক বা না হোক।"
          }
        ]
      }
    ]
  }
});
