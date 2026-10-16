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
            "bn": "সূরা আত-তাকাসুর মক্কী, আয়াত আটটি। প্রথম আয়াতটি আরবিতে মাত্র দুটি শব্দ: 'আলহাকুমুত তাকাসুর'। কোনো ভূমিকা নেই, কাউকে ডাকা নেই, শ্রোতার নামও নেই; বাক্যটা শুরুই হয় অভিযোগের মাঝখান থেকে। ক্রিয়াটিও অতীত কালের। আয়াতটি সতর্ক করছে না যে প্রতিযোগিতা একদিন তোমাদের ভুলিয়ে রাখতে পারে; বরং জানিয়ে দিচ্ছে, ভুলিয়ে রেখেছে। কথাগুলো কানে পৌঁছানোর আগেই কাজটা শেষ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Takathur Names No Object",
          "bn": "কীসের তাকাসুর, বলা নেই"
        },
        "p": [
          {
            "en": "Takathur is built on the pattern that Arabic uses for a thing done back and forth between parties, so it is not simply wanting more but wanting more than someone else. It needs a rival to make sense. And the verse leaves the field blank: it never says rivalry in what. The commentators read the silence as deliberate width, taking in wealth, children, supporters and clan — anything whose quantity a person is willing to compare.",
            "bn": "'তাকাসুর' শব্দটি আরবির যে ছাঁচে গড়া, সেই ছাঁচ বোঝায় দুই পক্ষের মধ্যে পাল্টাপাল্টি করা কাজ। তাই এর মানে শুধু বেশি চাওয়া নয়, অন্যের চেয়ে বেশি চাওয়া। অর্থটা দাঁড়াতেই একজন প্রতিদ্বন্দ্বী লাগে। অথচ আয়াতটি জায়গাটা ফাঁকা রেখে দিয়েছে: কীসের প্রতিযোগিতা, তা কোথাও বলেনি। মুফাসসিরগণ এই নীরবতাকে ইচ্ছাকৃত বলে ধরেছেন, যাতে অর্থটা ছড়িয়ে পড়ে সম্পদ, সন্তান, দলবল আর গোত্রে। এক কথায়, মানুষ যা কিছুর পরিমাণ অন্যের সঙ্গে মেলাতে রাজি, সবই এর ভেতরে।"
          },
          {
            "en": "Elsewhere the Quran does name the field. 57:20 lists the phases of worldly life and ends with takathur fi al-amwal wal-awlad, rivalry in wealth and children. Leaving it unnamed here is what makes the surah portable: every generation supplies its own units of measurement, and the verse keeps working without a word being changed. The first hearers competed in camels and in sons, and nothing about the sentence needed adjusting when the units became something else.",
            "bn": "অন্য জায়গায় কুরআন বিষয়টির নাম বলেছে। ৫৭:২০ আয়াত দুনিয়ার জীবনের ধাপগুলো একে একে গুনিয়ে শেষ করেছে 'তাকাসুরুন ফিল আমওয়ালি ওয়াল আওলাদ' দিয়ে, অর্থাৎ সম্পদ ও সন্তানে প্রতিযোগিতা। এখানে নামটা না বলাতেই সূরাটি সব যুগে খাটে। প্রতিটি প্রজন্ম নিজের মাপকাঠি নিজেই নিয়ে আসে, আর একটি শব্দও না বদলে আয়াতটি কাজ করে যায়। প্রথম শ্রোতারা পাল্লা দিত উট আর ছেলেসন্তান নিয়ে। মাপকাঠি পরে বদলে গেছে, কিন্তু বাক্যটির কিছুই বদলাতে হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Zurtum: a Word for Visiting",
          "bn": "যুরতুম: জিয়ারতের শব্দ"
        },
        "p": [
          {
            "en": "Hatta zurtumu al-maqabir — until you visited the graves. Hatta marks the end point of the diversion, and it turns out to be the end of the life. But the verb chosen is the verb of visiting, and a visit is by definition temporary: the visitor arrives, stays a while and moves on. The commentators draw the resurrection from the word itself. Nobody calls his permanent address a place he is visiting.",
            "bn": "'হাত্তা যুরতুমুল মাকাবির': যতক্ষণ না তোমরা কবরে বেড়াতে এলে। 'হাত্তা' দেখায় এই ভুলে থাকা কোথায় গিয়ে থামে, আর দেখা যায়, থামার জায়গাটা জীবনেরই শেষ। কিন্তু আল্লাহ এখানে যে ক্রিয়াটি এনেছেন, তা বেড়াতে যাওয়ার ক্রিয়া। আর বেড়ানো মানেই সাময়িক: অতিথি আসে, কিছুক্ষণ থাকে, তারপর চলে যায়। মুফাসসিরগণ এই শব্দ থেকেই পুনরুত্থানের কথা বের করেছেন। নিজের স্থায়ী ঠিকানাকে কেউ বেড়াতে আসার জায়গা বলে না।"
          },
          {
            "en": "There is a second edge to the image. The whole surah has been describing people who count, and the last thing they arrive at is a field of things that can be counted — graves. The counter becomes one of the entries. The race did not end because the runners chose to stop; it ended because the track did, and the two verses cover an entire lifetime between them without describing a single day of it.",
            "bn": "ছবিটার আরেকটা দিকও আছে। গোটা সূরা জুড়ে কথা হচ্ছে এমন মানুষদের নিয়ে, যারা গোনে। আর শেষে তারা গিয়ে পৌঁছায় এমন এক মাঠে, যেখানে গোনার মতো জিনিস পড়ে আছে: কবর। যে গুনছিল, সে নিজেই এখন গোনার তালিকার একজন। দৌড় থামেনি দৌড়বিদরা থামতে চেয়েছিল বলে; থেমেছে, কারণ পথটাই ফুরিয়ে গেছে। মাত্র দুটি আয়াতে একটা গোটা জীবন ধরা পড়ে, অথচ সেই জীবনের একটি দিনেরও বর্ণনা নেই।"
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
            "bn": "এই দুটি আয়াত এমনভাবে উদ্ধৃত করা সহজ, যেন কবরই শেষ কথা। কিন্তু সূরাটি সে সুযোগ দেয় না। ১০২:৩-৪ আয়াতে একই সতর্কবাণী দুবার এসেছে: কক্ষনো না, শিগগিরই তোমরা জানতে পারবে। ১০২:৫ আয়াত যোগ করে: তোমরা যদি নিশ্চিত জ্ঞানে জানতে, তাহলে অন্যভাবে চলতে। এরপর ১০২:৬-৭ আয়াত সেই জানা থেকে দেখায় নিয়ে যায়: তোমরা জাহান্নাম দেখবেই, তারপর তা দেখবে নিশ্চিত চাক্ষুষ দৃষ্টিতে।"
          },
          {
            "en": "Two of the three well-known degrees of certainty stand here side by side, 'ilm al-yaqin and 'ayn al-yaqin; the third, haqq al-yaqin, appears in 69:51 elsewhere. And the surah ends in 102:8 with a question rather than a scene: then you will surely be asked that Day about the pleasure. So the diversion does not finish at the graveyard. It finishes at an interrogation about everything that was being counted.",
            "bn": "নিশ্চয়তার তিনটি পরিচিত স্তরের দুটি এখানে পাশাপাশি এসেছে: 'ইলমুল ইয়াকীন আর 'আইনুল ইয়াকীন। তৃতীয়টি, হাক্কুল ইয়াকীন, আছে অন্য জায়গায়, ৬৯:৫১ আয়াতে। আর সূরাটি ১০২:৮ আয়াতে শেষ হয় কোনো দৃশ্য দিয়ে নয়, একটি প্রশ্ন দিয়ে: তারপর সেদিন অবশ্যই তোমাদের নিয়ামত সম্পর্কে জিজ্ঞেস করা হবে। তাই এই ভুলে থাকা কবরস্থানে গিয়ে শেষ হয় না। শেষ হয় জিজ্ঞাসাবাদে, যেখানে যা যা গোনা হচ্ছিল, তার সব কিছুর হিসাব চাওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Actually Yours",
          "bn": "আসলে আপনার কোনটা"
        },
        "p": [
          {
            "en": "Muslim narrates from Abd Allah ibn ash-Shikhkhir (RA) that he came to the Prophet ﷺ while he was reciting alhakumu at-takathur, and the Prophet ﷺ said: the son of Adam says, my wealth, my wealth — and is there anything of your wealth for you, son of Adam, except what you ate and used up, or wore and wore out, or gave in charity and sent forward? Three verbs, and only the third leaves anything behind.",
            "bn": "মুসলিম আবদুল্লাহ ইবনুশ শিখখীর (রাঃ) থেকে বর্ণনা করেছেন: তিনি নবী ﷺ-এর কাছে এলেন, নবী ﷺ তখন 'আলহাকুমুত তাকাসুর' পড়ছিলেন। তিনি বললেন: আদম সন্তান বলে, আমার সম্পদ, আমার সম্পদ! হে আদম সন্তান, তোমার সম্পদের মধ্যে তোমার নিজের বলে কি কিছু আছে, শুধু এগুলো ছাড়া: যা খেয়ে শেষ করেছ, কিংবা পরে পুরোনো করেছ, কিংবা দান করে আগেই পাঠিয়ে দিয়েছ? তিনটি ক্রিয়া, অথচ কিছু রেখে যায় কেবল তৃতীয়টি।"
          },
          {
            "en": "Muslim also relates from Abu Hurayrah (RA) that the Prophet ﷺ went out with Abu Bakr (RA) and Umar (RA), driven from their homes by hunger, and they were given dates and cool water — and he ﷺ told them that this was of the pleasure they would be asked about on the Day of Resurrection. The question of 102:8, on that account, does not begin at luxury. It begins at bread and water, which places the surah's audience beyond anybody's ability to opt out of it.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে আরও বর্ণনা করেছেন: একদিন ক্ষুধার তাড়নায় নবী ﷺ ঘর ছেড়ে বের হলেন, সঙ্গে ছিলেন আবু বকর (রাঃ) ও উমর (রাঃ); ক্ষুধা তাঁদেরও ঘর থেকে বের করে এনেছিল। তাঁদের খেতে দেওয়া হলো খেজুর আর ঠান্ডা পানি। তখন তিনি ﷺ তাঁদের বললেন, কিয়ামতের দিন যে নিয়ামতের ব্যাপারে জিজ্ঞেস করা হবে, এ-ও তার মধ্যে পড়ে। এই হাদিস অনুযায়ী ১০২:৮ আয়াতের প্রশ্ন বিলাসিতা থেকে শুরু হয় না, শুরু হয় রুটি আর পানি থেকে। ফলে এই সূরার শ্রোতাদের দল থেকে নিজেকে বাদ দেওয়ার উপায় কারও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Breaking the Comparison",
          "bn": "তুলনার অভ্যাস ভাঙা"
        },
        "p": [
          {
            "en": "Since takathur needs a second party, the practical work is on the comparison rather than on the possession. A quantity that nobody else can see rarely torments anyone; it is the ranking that does the damage, and the ranking is something a person chooses to consult. Removing the sources of it — the accounts, the conversations, the running tallies kept about other people — costs nothing and dismantles the whole mechanism the surah is describing.",
            "bn": "'তাকাসুর'-এর জন্য যেহেতু দ্বিতীয় পক্ষ লাগে, তাই আসল কাজটা নিজের যা আছে তা নিয়ে নয়, তুলনা নিয়ে। যে পরিমাণ আর কেউ দেখে না, তা নিয়ে কেউ তেমন জ্বলে না। ক্ষতিটা করে কে কার ওপরে, কে নিচে, সেই হিসাব। আর সেই হিসাবে চোখ দেওয়া মানুষের নিজেরই বাছাই। এর উৎসগুলো সরিয়ে ফেলতে কোনো খরচ লাগে না: যেসব অ্যাকাউন্ট, যেসব আলাপ, অন্যদের নিয়ে মনে মনে টুকে রাখা চলতি হিসাব। অথচ এতেই সূরাটি যে গোটা কলকব্জার কথা বলছে, তা ভেঙে পড়ে।"
          }
        ]
      }
    ]
  }
});
