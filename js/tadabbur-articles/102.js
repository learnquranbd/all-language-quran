/**
 * Tadabbur long-form articles — surah 102.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "102:1-2": {
    "sections": [
      {
        "h": {
          "en": "Two Words and a Verdict",
          "bn": "দুটি শব্দ, একটি রায়"
        },
        "p": [
          {
            "en": "Surah at-Takathur is Makkan and has eight verses. Its opening verse is two words in Arabic: alhakumu at-takathur. There is no preamble, no address, no name for the audience — the sentence begins already in the middle of the accusation. And the verb is in the perfect tense. It does not warn that rivalry may divert you one day; it reports that it has diverted you, as something finished by the time the words arrive.",
            "bn": "সূরা আত-তাকাসুর মক্কী, আয়াত সংখ্যা আট। এর প্রথম আয়াতটি আরবিতে দুটি শব্দ: 'আলহাকুমুত তাকাসুর'। কোনো ভূমিকা নেই, কোনো সম্বোধন নেই, শ্রোতার কোনো নামও নেই — বাক্যটি শুরুই হয় অভিযোগের মাঝখান থেকে। আর ক্রিয়াপদটি অতীত কালে। এটি সতর্ক করে না যে প্রতিযোগিতা একদিন তোমাদের বিমুখ করতে পারে; বরং জানায় যে তা বিমুখ করে ফেলেছে — কথাগুলো পৌঁছানোর আগেই যা সম্পন্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Takathur Names No Object",
          "bn": "তাকাসুর কোনো বস্তুর নাম নেয় না"
        },
        "p": [
          {
            "en": "Takathur is built on the pattern that Arabic uses for a thing done back and forth between parties, so it is not simply wanting more but wanting more than someone else. It needs a rival to make sense. And the verse leaves the field blank: it never says rivalry in what. The commentators read the silence as deliberate width, taking in wealth, children, supporters and clan — anything whose quantity a person is willing to compare.",
            "bn": "'তাকাসুর' গঠিত হয়েছে সেই ছাঁচে, যা আরবিতে পক্ষে-বিপক্ষে পারস্পরিকভাবে করা কাজ বোঝায়; তাই এর অর্থ কেবল বেশি চাওয়া নয়, বরং অন্য কারও চেয়ে বেশি চাওয়া। এর অর্থ দাঁড়াতে একজন প্রতিদ্বন্দ্বী লাগে। আর আয়াতটি ক্ষেত্রটি ফাঁকা রেখে দেয়: কীসে প্রতিযোগিতা, তা কখনো বলে না। মুফাসসিরগণ এই নীরবতাকে ইচ্ছাকৃত ব্যাপকতা হিসেবে পড়েন — এতে ঢুকে পড়ে সম্পদ, সন্তান, সহযোগী ও গোত্র; অর্থাৎ যার সংখ্যা নিয়েই মানুষ তুলনায় নামতে রাজি।"
          },
          {
            "en": "Elsewhere the Quran does name the field. 57:20 lists the phases of worldly life and ends with takathur fi al-amwal wal-awlad, rivalry in wealth and children. Leaving it unnamed here is what makes the surah portable: every generation supplies its own units of measurement, and the verse keeps working without a word being changed. The first hearers competed in camels and in sons, and nothing about the sentence needed adjusting when the units became something else.",
            "bn": "অন্যত্র কুরআন ক্ষেত্রটির নাম নেয়। 57:20 আয়াত পার্থিব জীবনের ধাপগুলো সাজিয়ে শেষ করে 'তাকাসুরুন ফিল আমওয়ালি ওয়াল আওলাদ' দিয়ে — সম্পদ ও সন্তানে প্রতিযোগিতা। এখানে নাম না নেওয়াই সূরাটিকে সর্বত্র বহনযোগ্য করে তোলে: প্রতিটি প্রজন্ম নিজের মাপকাঠি নিজেই জোগায়, আর একটি শব্দও না বদলে আয়াতটি কাজ করে যায়। প্রথম শ্রোতারা প্রতিযোগিতা করত উট ও পুত্রসন্তান নিয়ে, আর মাপকাঠি বদলে অন্য কিছু হয়ে গেলেও বাক্যটির কিছুই শোধরাতে হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Zurtum: a Word for Visiting",
          "bn": "যুরতুম: বেড়াতে যাওয়ার শব্দ"
        },
        "p": [
          {
            "en": "Hatta zurtumu al-maqabir — until you visited the graves. Hatta marks the end point of the diversion, and it turns out to be the end of the life. But the verb chosen is the verb of visiting, and a visit is by definition temporary: the visitor arrives, stays a while and moves on. The commentators draw the resurrection from the word itself. Nobody calls his permanent address a place he is visiting.",
            "bn": "'হাত্তা যুরতুমুল মাকাবির' — যতক্ষণ না তোমরা কবরে বেড়াতে এলে। 'হাত্তা' বিমুখতার শেষ বিন্দু নির্দেশ করে, আর দেখা যায় সেই বিন্দুটি জীবনেরই শেষ। কিন্তু যে ক্রিয়াপদটি বেছে নেওয়া হয়েছে তা বেড়াতে যাওয়ার ক্রিয়াপদ, আর বেড়ানো সংজ্ঞানুসারেই সাময়িক: অতিথি আসে, কিছুক্ষণ থাকে, তারপর এগিয়ে যায়। মুফাসসিরগণ শব্দটি থেকেই পুনরুত্থানের প্রমাণ বের করেন। নিজের স্থায়ী ঠিকানাকে কেউ 'বেড়াতে আসার জায়গা' বলে না।"
          },
          {
            "en": "There is a second edge to the image. The whole surah has been describing people who count, and the last thing they arrive at is a field of things that can be counted — graves. The counter becomes one of the entries. The race did not end because the runners chose to stop; it ended because the track did, and the two verses cover an entire lifetime between them without describing a single day of it.",
            "bn": "চিত্রটির আরেকটি ধারও আছে। গোটা সূরাটি এমন মানুষদের বর্ণনা দিয়ে চলেছে যারা গোনে, আর শেষ পর্যন্ত তারা এসে পৌঁছায় এমন এক মাঠে যেখানে গোনার মতো জিনিস আছে — কবর। যে গুনছিল, সে-ই একটি সংখ্যায় পরিণত হয়। দৌড়টি শেষ হয়নি দৌড়বিদরা থামতে চেয়েছিল বলে; শেষ হয়েছে ট্র্যাকটি শেষ হয়ে গিয়েছিল বলে। আর দুটি আয়াত মিলে একটি গোটা জীবনকে ঢেকে ফেলে, অথচ তার একটি দিনেরও বর্ণনা দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah Does Not Stop There",
          "bn": "সূরাটি সেখানে থামে না"
        },
        "p": [
          {
            "en": "It is easy to quote these two verses as though the grave were the last word, and the surah does not allow it. 102:3-4 repeat a warning twice over — no indeed, you are going to know — and 102:5 adds that if you knew with the knowledge of certainty you would act otherwise. 102:6-7 then move from that knowledge to sight: you will see the Hellfire, and then see it with the eye of certainty.",
            "bn": "এই দুটি আয়াতকে এমনভাবে উদ্ধৃত করা সহজ যেন কবরই শেষ কথা, অথচ সূরাটি তা হতে দেয় না। 102:3-4 আয়াত দুবার একই সতর্কবাণী পুনরাবৃত্তি করে — কক্ষনো না, শীঘ্রই তোমরা জানতে পারবে — আর 102:5 আয়াত যোগ করে, নিশ্চিত জ্ঞানের ভিত্তিতে জানলে তোমরা অন্যরকম করতে। এরপর 102:6-7 আয়াত সেই জ্ঞান থেকে দৃষ্টিতে এগোয়: তোমরা জাহান্নাম দেখতে পাবে, আর তারপর দিব্য দৃষ্টিতে তা দেখবে।"
          },
          {
            "en": "Two of the three well-known degrees of certainty stand here side by side, 'ilm al-yaqin and 'ayn al-yaqin; the third, haqq al-yaqin, appears in 69:51 elsewhere. And the surah ends in 102:8 with a question rather than a scene: then you will surely be asked that Day about the pleasure. So the diversion does not finish at the graveyard. It finishes at an interrogation about everything that was being counted.",
            "bn": "নিশ্চয়তার তিনটি সুপরিচিত স্তরের দুটি এখানে পাশাপাশি দাঁড়িয়ে — 'ইলমুল ইয়াকীন ও 'আইনুল ইয়াকীন; তৃতীয়টি, হাক্কুল ইয়াকীন, রয়েছে অন্যত্র 69:51 আয়াতে। আর সূরাটি 102:8 আয়াতে শেষ হয় কোনো দৃশ্য দিয়ে নয়, একটি প্রশ্ন দিয়ে: অতঃপর সেদিন তোমাদের অবশ্যই নিয়ামত সম্পর্কে জিজ্ঞেস করা হবে। তাই বিমুখতা কবরস্থানে শেষ হয় না। শেষ হয় এমন এক জিজ্ঞাসাবাদে, যা যা গোনা হচ্ছিল তার সবকিছু নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Actually Yours",
          "bn": "আসলে তোমার কোনটা"
        },
        "p": [
          {
            "en": "Muslim narrates from Abd Allah ibn ash-Shikhkhir (RA) that he came to the Prophet ﷺ while he was reciting alhakumu at-takathur, and the Prophet ﷺ said: the son of Adam says, my wealth, my wealth — and is there anything of your wealth for you, son of Adam, except what you ate and used up, or wore and wore out, or gave in charity and sent forward? Three verbs, and only the third leaves anything behind.",
            "bn": "মুসলিম আবদুল্লাহ ইবনুশ শিখখীর (রাঃ) থেকে বর্ণনা করেন যে তিনি নবী ﷺ-এর কাছে আসেন যখন তিনি 'আলহাকুমুত তাকাসুর' পড়ছিলেন, আর নবী ﷺ বললেন: আদম সন্তান বলে — আমার সম্পদ, আমার সম্পদ; অথচ হে আদম সন্তান, তোমার সম্পদের মধ্যে তোমার জন্য কি এর বাইরে কিছু আছে — যা তুমি খেয়ে নিঃশেষ করেছ, অথবা পরে জীর্ণ করেছ, অথবা দান করে আগে পাঠিয়ে দিয়েছ? তিনটি ক্রিয়া, আর কেবল তৃতীয়টিই কিছু রেখে যায়।"
          },
          {
            "en": "Muslim also relates from Abu Hurayrah (RA) that the Prophet ﷺ went out with Abu Bakr (RA) and Umar (RA), driven from their homes by hunger, and they were given dates and cool water — and he ﷺ told them that this was of the pleasure they would be asked about on the Day of Resurrection. The question of 102:8, on that account, does not begin at luxury. It begins at bread and water, which places the surah's audience beyond anybody's ability to opt out of it.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে আরও বর্ণনা করেন যে নবী ﷺ আবু বকর (রাঃ) ও উমর (রাঃ)-কে নিয়ে বের হন, ক্ষুধা তাঁদের ঘর থেকে বের করে এনেছিল, আর তাঁদের খেজুর ও শীতল পানি দেওয়া হয় — এরপর তিনি ﷺ তাঁদের বলেন, কিয়ামতের দিন যে নিয়ামত সম্পর্কে জিজ্ঞেস করা হবে এটি তারই অংশ। সেই হিসেবে 102:8 আয়াতের প্রশ্নটি বিলাসিতা থেকে শুরু হয় না। শুরু হয় রুটি ও পানি থেকে, যা সূরাটির শ্রোতাদের এমন জায়গায় নিয়ে যায় যেখান থেকে কারও সরে দাঁড়ানোর উপায় নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Breaking the Comparison",
          "bn": "তুলনাটি ভেঙে দেওয়া"
        },
        "p": [
          {
            "en": "Since takathur needs a second party, the practical work is on the comparison rather than on the possession. A quantity that nobody else can see rarely torments anyone; it is the ranking that does the damage, and the ranking is something a person chooses to consult. Removing the sources of it — the accounts, the conversations, the running tallies kept about other people — costs nothing and dismantles the whole mechanism the surah is describing.",
            "bn": "যেহেতু 'তাকাসুর'-এর জন্য দ্বিতীয় একটি পক্ষ লাগে, তাই ব্যবহারিক কাজটি মালিকানার ওপর নয়, তুলনার ওপর। যে পরিমাণ আর কেউ দেখতে পায় না তা খুব কমই কাউকে জ্বালায়; ক্ষতিটা করে ক্রমতালিকা, আর সেই ক্রমতালিকা দেখতে যাওয়াটা মানুষের নিজের পছন্দ। এর উৎসগুলো সরিয়ে দেওয়া — হিসাবের খাতা, আলাপ-আলোচনা, অন্যদের নিয়ে মনে মনে রাখা যোগফল — কিছুই খরচ করায় না, অথচ সূরাটি যে গোটা যন্ত্রটির বর্ণনা দিচ্ছে তা ভেঙে ফেলে।"
          }
        ]
      }
    ]
  }
});
