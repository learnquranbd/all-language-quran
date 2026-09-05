/**
 * Tadabbur long-form articles — surah 100.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "100:6": {
    "sections": [
      {
        "h": {
          "en": "Horses Before Dawn",
          "bn": "ভোরের আগে অশ্বদল"
        },
        "p": [
          {
            "en": "Surah al-Adiyat opens with five verses of motion. 100:1-5 swear by the racers that pant, by those striking sparks, by the raiders at dawn, by the dust they stir up, and by their driving into the midst of a gathering. Ibn Kathir reads them as the horses of battle in the path of Allah: the panting is the sound of a running horse, the sparks fly from hooves on rock, and the dawn raid was the Prophet's own practice.",
            "bn": "সূরা আল-আদিয়াত শুরু হয় পাঁচ আয়াতজুড়ে গতির বর্ণনা দিয়ে। 100:1-5 শপথ করে সেইসব দৌড়বাজের, যারা হাঁপাতে হাঁপাতে ছোটে; যারা ঘর্ষণে আগুনের ফুলকি ছোটায়; যারা ভোরে আক্রমণ চালায়; যে ধুলা তারা ওড়ায়; আর দলের অভ্যন্তরে তাদের ঢুকে পড়া নিয়ে। ইবনে কাসীর এগুলোকে আল্লাহর পথে যুদ্ধের ঘোড়া হিসেবে পড়েন: হাঁপানি হলো দৌড়ন্ত ঘোড়ার শব্দ, ফুলকি ছোটে পাথরে ক্ষুরের আঘাতে, আর ভোরের অভিযান ছিল স্বয়ং নবী ﷺ-এর রীতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Kanud",
          "bn": "কানূদ"
        },
        "p": [
          {
            "en": "100:6 is what the oaths were sworn for: inna al-insana li-rabbihi la-kanud, four words. The classical readings of kanud cluster around ingratitude but are not identical. Ibn Abbas, Mujahid, Qatadah, al-Hasan, ad-Dahhak and Ibn Zayd all gloss it as ungrateful — denying the favours of his Lord rather than merely forgetting them. Ibn Kathir reports al-Hasan's sharper version: al-kanud is the one who counts the calamities that befall him and forgets the favours of Allah.",
            "bn": "100:6 আয়াতটির জন্যই শপথগুলো করা হয়েছিল: 'ইন্নাল ইনসানা লিরাব্বিহী লাকানূদ' — চারটি শব্দ। 'কানূদ'-এর ধ্রুপদী ব্যাখ্যাগুলো অকৃতজ্ঞতাকে ঘিরেই আবর্তিত হয়, তবে সেগুলো অভিন্ন নয়। ইবনে আব্বাস, মুজাহিদ, কাতাদাহ, হাসান বসরী, দাহহাক ও ইবনে যায়দ সবাই এর অর্থ করেন অকৃতজ্ঞ — অর্থাৎ প্রতিপালকের নিয়ামত কেবল ভুলে যাওয়া নয়, অস্বীকার করা। ইবনে কাসীর হাসান বসরীর আরও ধারালো ব্যাখ্যাটি উল্লেখ করেন: কানূদ সে-ই, যে তার ওপর আসা বিপদগুলো গুনে রাখে আর আল্লাহর নিয়ামতগুলো ভুলে যায়।"
          },
          {
            "en": "The lexicographers add a picture from the root itself, which is used of ground called kanud: land that takes the rain and returns no vegetation. That image explains the word better than any definition. The complaint is not that a man received nothing; it is that everything went in and nothing came back out. Rain on such ground is not refused, and it is not repaid either, which is precisely the shape of a life full of blessings and empty of thanks.",
            "bn": "অভিধানবিদগণ ধাতুমূল থেকেই একটি চিত্র যোগ করেন — 'কানূদ' বলা হয় এমন জমিকে, যা বৃষ্টি শুষে নেয় কিন্তু কোনো ফসল ফেরত দেয় না। যেকোনো সংজ্ঞার চেয়ে এই চিত্রটিই শব্দটিকে ভালো বোঝায়। অভিযোগ এই নয় যে মানুষ কিছুই পায়নি; অভিযোগ হলো, সবকিছু ভেতরে ঢুকেছে অথচ কিছুই বাইরে আসেনি। এমন জমিতে বৃষ্টি প্রত্যাখ্যাত হয় না, আবার তার প্রতিদানও দেওয়া হয় না — নিয়ামতে ভরা ও শুকরিয়ায় শূন্য একটি জীবনের আকৃতি ঠিক এমনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Meant by Man",
          "bn": "'মানুষ' বলতে কাকে বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "The commentators divide over al-insan here, and it is better to report the division than to settle it. Some restrict the verse to the ungrateful denier, on the ground that a believer is not described this way. Others read it as a statement about the human being as such, a tendency the Quran names elsewhere — 14:34 says that mankind is most unjust and ungrateful. On the second reading the verse is a mirror, and mirrors are only useful to people willing to look.",
            "bn": "এখানে 'আল-ইনসান' নিয়ে মুফাসসিরগণ বিভক্ত, আর মতভেদটির মীমাংসা করার চেয়ে তা জানিয়ে দেওয়াই ভালো। কেউ কেউ আয়াতটিকে সীমাবদ্ধ করেন অকৃতজ্ঞ অস্বীকারকারীর মধ্যে, এই যুক্তিতে যে মুমিনকে এভাবে বর্ণনা করা হয় না। অন্যরা একে পড়েন মানুষমাত্রেরই বর্ণনা হিসেবে — এমন এক প্রবণতা, যার নাম কুরআন অন্যত্রও নিয়েছে; 14:34 বলে, মানুষ অতিশয় অন্যায়কারী ও অকৃতজ্ঞ। দ্বিতীয় পাঠে আয়াতটি একটি আয়না, আর আয়না কেবল তাদেরই কাজে লাগে যারা তাকাতে রাজি।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness, and the Love of Good",
          "bn": "সাক্ষী, আর 'কল্যাণ'-প্রীতি"
        },
        "p": [
          {
            "en": "100:7 says: and indeed, to that he is a witness. Qatadah and Sufyan ath-Thawri read the pronoun as Allah — He is witness to man's ingratitude. Muhammad ibn Ka'b al-Qurazi read it as man himself, whose own words and conduct testify against him. Then 100:8: and indeed, in love of al-khayr he is intense. Al-khayr here means wealth, and the choice of word is the quiet indictment — the thing is called good, and the good is what is loved fiercely.",
            "bn": "100:7 বলে: আর নিশ্চয়ই সে এ বিষয়ে সাক্ষী। কাতাদাহ ও সুফিয়ান সাওরী সর্বনামটিকে আল্লাহর দিকে ফেরান — তিনিই মানুষের অকৃতজ্ঞতার সাক্ষী। মুহাম্মাদ ইবনে কা'ব আল-কুরাযী একে ফেরান মানুষের দিকেই — যার নিজের কথা ও আচরণই তার বিরুদ্ধে সাক্ষ্য দেয়। এরপর 100:8: আর নিশ্চয়ই সে 'আল-খাইর'-এর ভালোবাসায় তীব্র। এখানে 'আল-খাইর' মানে সম্পদ, আর শব্দ বাছাইটিই নীরব অভিযোগ — জিনিসটিকে বলা হচ্ছে 'কল্যাণ', আর সেই কল্যাণকেই ভালোবাসা হয় প্রচণ্ডভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Graves Give Up",
          "bn": "কবর যা ফিরিয়ে দেবে"
        },
        "p": [
          {
            "en": "The surah then turns the whole scene over. 100:9-11 ask whether he does not know that when what is in the graves is scattered forth, and what is in the breasts is collected, their Lord that Day will be fully Aware of them. Notice which container is opened second. The graves give up bodies; the breasts give up what was inside them, and 100:6 has already said what that is. The dawn raid was loud; the real disclosure is silent.",
            "bn": "এরপর সূরাটি গোটা দৃশ্যপট উল্টে দেয়। 100:9-11 জিজ্ঞেস করে, সে কি জানে না — যখন কবরে যা আছে তা ছড়িয়ে বের করে আনা হবে, আর বুকের ভেতরে যা আছে তা সংগ্রহ করা হবে, সেদিন তাদের প্রতিপালক তাদের সম্পর্কে পুরোপুরি অবহিত থাকবেন। লক্ষ করুন, দ্বিতীয় কোন পাত্রটি খোলা হচ্ছে। কবর ফিরিয়ে দেয় দেহ; আর বুক ফিরিয়ে দেয় তার ভেতরে যা ছিল — আর সেটি কী, 100:6 আগেই বলে দিয়েছে। ভোরের অভিযান ছিল কোলাহলপূর্ণ; আসল উন্মোচনটি নিঃশব্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "Reversing the Count",
          "bn": "গণনাটি উল্টে দেওয়া"
        },
        "p": [
          {
            "en": "Al-Hasan's definition hands over the remedy with the diagnosis. If kanud is counting the calamities and forgetting the favours, then the cure is to reverse which list is kept. Most people can produce their grievances from memory and cannot produce five blessings without pausing. The imbalance is not a character flaw so much as a filing habit, and filing habits can be changed deliberately by anyone willing to spend two minutes a day on the neglected column.",
            "bn": "হাসান বসরীর সংজ্ঞাটি রোগনির্ণয়ের সঙ্গেই ওষুধ ধরিয়ে দেয়। কানূদ যদি হয় বিপদ গোনা আর নিয়ামত ভোলা, তবে নিরাময় হলো কোন তালিকাটি রাখা হচ্ছে তা উল্টে দেওয়া। অধিকাংশ মানুষ নিজের অভিযোগগুলো মুখস্থ বলে দিতে পারে, অথচ না থেমে পাঁচটি নিয়ামতের নাম বলতে পারে না। এই ভারসাম্যহীনতা যতটা চারিত্রিক ত্রুটি, তার চেয়ে বেশি নথি রাখার অভ্যাস; আর অভ্যাস সচেতনভাবেই বদলানো যায় — যদি কেউ অবহেলিত ঘরটির জন্য দিনে দুই মিনিট খরচ করতে রাজি থাকে।"
          },
          {
            "en": "The barren-ground image gives the second half of the cure. Ground that returns nothing is the problem, so thanks that stays inside the chest is only half of shukr. Wealth is thanked by spending some of it, strength by carrying something for someone, knowledge by teaching it, and a working body by using it on what is worth doing. The surah is not asking for a feeling. It is asking the ground to produce.",
            "bn": "অনুর্বর জমির চিত্রটি নিরাময়ের দ্বিতীয় অর্ধেক দেয়। যে জমি কিছুই ফেরত দেয় না, সেটিই সমস্যা; তাই বুকের ভেতরে আটকে থাকা কৃতজ্ঞতা শুকরিয়ার অর্ধেক মাত্র। সম্পদের শুকরিয়া হয় তার কিছু খরচ করে, শক্তির শুকরিয়া হয় কারও বোঝা বয়ে দিয়ে, জ্ঞানের শুকরিয়া হয় তা শিখিয়ে, আর সচল দেহের শুকরিয়া হয় তাকে মূল্যবান কাজে খাটিয়ে। সূরাটি কোনো অনুভূতি চাইছে না। সে চাইছে জমিটি ফসল ফলাক।"
          }
        ]
      }
    ]
  }
});
