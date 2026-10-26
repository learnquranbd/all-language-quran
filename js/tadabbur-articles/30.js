/**
 * Tadabbur long-form articles — surah 30.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "30:3": {
    "sections": [
      {
        "h": {
          "en": "A Date Set in Defeat",
          "bn": "পরাজয়ের দিনেই বেঁধে দেওয়া তারিখ"
        },
        "p": [
          {
            "en": "The surah opens with a report that sounds like bad news. Ghulibat al-Rum: the Byzantines have been defeated, fi adna al-ard, in the nearest land. The Persians, a fire-worshipping power, had broken the Christian empire of Rome, and word of it reached Makkah while the Prophet (ﷺ) was still there. As as-Sa'di notes, Persia and Rome were then among the strongest states on earth, and this was no border skirmish but a crushing loss for the side the believers felt closest to.",
            "bn": "সূরাটি শুরু হয় এমন এক খবর দিয়ে, যা শুনলে দুঃসংবাদই মনে হয়। গুলিবাতির রূম: রোমানরা পরাজিত হয়েছে, ফী আদনাল আরদ, নিকটতম ভূমিতে। আগুনপূজারি পারস্য খ্রিস্টান রোমান সাম্রাজ্যকে ভেঙে দিয়েছিল, আর নবী ﷺ তখনো মক্কায়, এমন সময় খবরটা সেখানে এসে পৌঁছল। সাদী বলেন, পারস্য আর রোম তখন দুনিয়ার সবচেয়ে শক্তিশালী রাষ্ট্রগুলোর মধ্যে ছিল। কাজেই এটা সীমান্তের কোনো ছোটখাটো সংঘর্ষ ছিল না। মুমিনরা যে পক্ষকে নিজেদের কাছের মনে করত, তারাই শোচনীয়ভাবে হেরে গিয়েছিল।"
          },
          {
            "en": "The lines that follow turn the defeat around. Wa-hum min ba'di ghalabihim sayaghlibun: and they, after their defeat, will themselves overcome, fi bid'i sinin, within a few years. Verse three is the hinge of the whole passage; it holds both halves, the fall and the promised rise, in a single breath. The parties mattered. The Persians were idolaters like the Quraysh; the Romans were People of the Book, nearer to the believers in creed. as-Sa'di: the Muslims loved a Roman victory, the idolaters a Persian win.",
            "bn": "এর পরের কথাগুলো পরাজয়ের ছবিটাই উল্টে দেয়। ওয়াহুম মিন বা'দি গালাবিহিম সাইয়াগলিবূন: আর তারা তাদের পরাজয়ের পর নিজেরাই জয়ী হবে, ফী বিদ'ই সিনীন, কয়েক বছরের মধ্যেই। পুরো অংশটা ঘোরে ৩ নম্বর আয়াতকে ঘিরে। পতন আর প্রতিশ্রুত উত্থান, দুটোই এই আয়াত এক নিঃশ্বাসে বলে দেয়। কোন পক্ষ কারা, সেটাও গুরুত্বপূর্ণ। পারসিকরা ছিল কুরাইশদের মতোই মূর্তিপূজারি, আর রোমানরা আহলে কিতাব, বিশ্বাসে মুমিনদের বেশি কাছের। সাদী বলেন, মুসলিমরা চাইত রোম জিতুক, আর মুশরিকরা চাইত পারস্য।"
          },
          {
            "en": "al-Baghawi records how the defeat was thrown in the believers' faces. The idolaters of Makkah told the Muslims: you are People of the Book and so are the Christians, we are unlettered like the Persians, our side has beaten your side, and if you fight us we will beat you too. It was a taunt built on an analogy, and the revelation answered it not by denying the loss but by naming what would come after it.",
            "bn": "পরাজয়টা কীভাবে মুমিনদের মুখের ওপর ছুঁড়ে মারা হয়েছিল, বাগাভী তা তুলে ধরেন। মক্কার মুশরিকরা মুসলিমদের বলল: তোমরা আহলে কিতাব, খ্রিস্টানরাও আহলে কিতাব, আর আমরা পারসিকদের মতোই নিরক্ষর। আমাদের পক্ষ তোমাদের পক্ষকে হারিয়েছে, তোমরা আমাদের সঙ্গে লড়লে তোমাদেরও হারাব। এটা ছিল এক তুলনার ওপর গড়া খোঁচা। ওহি এর জবাব দিল পরাজয়কে অস্বীকার করে নয়, বরং এর পরে কী আসবে তা জানিয়ে দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Nearest Land",
          "bn": "নিকটতম সেই ভূমি"
        },
        "p": [
          {
            "en": "Fi adna al-ard, in the nearest land. al-Qurtubi glosses adna plainly: its meaning is aqrab, nearest. But nearest to whom? at-Tabari reads the stretch from the land of Syria toward the land of Persia. The commentators then fix the spot differently. 'Ikrima places the battle at Adhri'at and Busra, which he calls the part of Syria closest to the lands of the Arabs, where the two armies met.",
            "bn": "ফী আদনাল আরদ, নিকটতম ভূমিতে। কুরতুবী আদনা শব্দের সোজা অর্থ বলেন: আকরাব, অর্থাৎ সবচেয়ে কাছের। কিন্তু কার সবচেয়ে কাছে? তাবারীর মতে, এ হলো শাম থেকে পারস্যের দিকে বিস্তৃত এলাকা। তবে জায়গাটা ঠিক কোথায়, তা নিয়ে তাফসীরকারদের মত ভিন্ন ভিন্ন। ইকরিমার মতে যুদ্ধ হয়েছিল আযরিআত আর বুসরায়। তিনি একে বলেন শামের সেই অংশ, যা আরবদের ভূমির সবচেয়ে কাছে। সেখানেই দুই বাহিনী মুখোমুখি হয়েছিল।"
          },
          {
            "en": "Others move the pin. Mujahid names al-Jazira, the region lying between Iraq and Syria. Muqatil puts it in Jordan and Palestine. Ibn 'Atiyya reconciles the reports by noticing that nearest shifts with the vantage point: if the clash was at Adhri'at it is the nearest land relative to Makkah; if in al-Jazira, nearest to the land of the Persian king; if in Jordan, nearest to the land of the Romans. One word, read from three cities, still fits.",
            "bn": "অন্যরা জায়গাটা দেখান অন্যত্র। মুজাহিদ বলেন জাযীরার কথা, ইরাক আর শামের মাঝের অঞ্চল। মুকাতিলের মতে তা জর্ডান আর ফিলিস্তিনে। ইবন আতিয়্যা বর্ণনাগুলো মিলিয়ে দেন এভাবে: কোথা থেকে দেখা হচ্ছে, তার ওপর নির্ভর করে 'নিকটতম' কথাটার অর্থ বদলায়। যুদ্ধ আযরিআতে হলে তা মক্কার হিসাবে নিকটতম ভূমি; জাযীরায় হলে পারস্য-সম্রাটের ভূমির নিকটতম; জর্ডানে হলে রোমের ভূমির নিকটতম। তিন শহর থেকে দেখলেও একই শব্দ ঠিকঠাক খাপ খেয়ে যায়।"
          },
          {
            "en": "There is a further sense folded into adna. Its root carries both nearness and lowness, and the ground Muqatil names, the Jordan valley running down toward the Dead Sea, is the lowest land on the face of the earth. The commentators quoted here settle on nearest, yet the word itself leaves the other sense standing, and the geography sits comfortably with either reading. A single term holds both the measure of distance and the lie of the land.",
            "bn": "আদনা শব্দের ভেতরে আরেকটি অর্থও লুকিয়ে আছে। এর ধাতুতে কাছে থাকা আর নিচু হওয়া, দুই অর্থই আছে। আর মুকাতিল যে ভূমির কথা বলেন, মৃত সাগরের দিকে নেমে যাওয়া জর্ডান উপত্যকা, সেটাই পৃথিবীর সবচেয়ে নিচু ভূমি। এখানে উদ্ধৃত তাফসীরকারেরা 'নিকটতম' অর্থটাই গ্রহণ করেন। তবু শব্দটা নিজে অন্য অর্থটাও বাতিল করে না, আর ভূগোলও দুই অর্থের সঙ্গেই মিলে যায়। একটি শব্দেই ধরা আছে দূরত্বের মাপ আর জমির ঢাল, দুটোই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings, Two Prophecies",
          "bn": "দুই পাঠ, দুই ভবিষ্যদ্বাণী"
        },
        "p": [
          {
            "en": "The verse carries one of the most consequential variant readings in the Qur'an, and the commentators name it openly. The dominant reading is ghulibat al-Rum, passive, the Romans have been defeated, with a damma on the ghayn, paired with sayaghlibun in the active, they will overcome. Abu Ja'far an-Nahhas states flatly that this is the reading of most people. Ibn 'Atiyya calls the damma reading the more sound, and notes that people are agreed on sayaghlibun with a fatha, meaning the Romans.",
            "bn": "কুরআনের সবচেয়ে গুরুত্বপূর্ণ কিরাআত-ভিন্নতাগুলোর একটি আছে এই আয়াতে, আর তাফসীরকারেরা তা খোলাখুলিই বলেন। প্রধান পাঠ হলো গুলিবাতির রূম, গাইন অক্ষরে পেশ দিয়ে কর্মবাচ্যে: রোমানরা পরাজিত হয়েছে। এর সঙ্গে আছে কর্তৃবাচ্যে সাইয়াগলিবূন: তারা জয়ী হবে। আবু জাফর নাহহাস সোজাসুজি বলেন, অধিকাংশ মানুষ এভাবেই পড়েন। ইবন আতিয়্যা পেশের পাঠকেই বেশি সঠিক বলেন। তিনি আরও জানান, সাইয়াগলিবূন শব্দটি ইয়া অক্ষরে যবর দিয়ে পড়া এবং এর দ্বারা রোমানদের বোঝানো, এ নিয়ে সবাই একমত।"
          },
          {
            "en": "A minority read it the other way. al-Qurtubi reports that Abu Sa'id al-Khudri, 'Ali ibn Abi Talib and Mu'awiya ibn Qurra recited ghalabat al-Rum, active, the Romans have conquered, and that Ibn 'Umar read sayughlabun in the passive, they will be defeated. Read this way the prophecy turns inside out: the Romans have just won, and it is now the other side whose fall is foretold. Ibn 'Atiyya says this reading inverts the meaning that the mass of reports corroborate.",
            "bn": "অল্প কিছু কারী পড়েছেন উল্টোভাবে। কুরতুবী জানান, আবু সাঈদ খুদরী, আলী ইবন আবি তালিব আর মুআবিয়া ইবন কুররা পড়তেন গালাবাতির রূম, কর্তৃবাচ্যে: রোমানরা জয়ী হয়েছে। আর ইবন উমর পড়তেন সাইয়ুগলাবূন, কর্মবাচ্যে: তারা পরাজিত হবে। এভাবে পড়লে ভবিষ্যদ্বাণীটা পুরোপুরি উল্টে যায়। রোমানরা সবেমাত্র জিতেছে, আর এবার আগাম বলা হচ্ছে অন্য পক্ষের পতনের কথা। ইবন আতিয়্যা বলেন, এই পাঠ অর্থটাকে উল্টে দেয়, অথচ অধিকাংশ বর্ণনা প্রথম অর্থটিকেই সমর্থন করে।"
          },
          {
            "en": "The grammar is what moves the referent. In the dominant reading the Romans are the object of the first verb, defeated, then the subject of the second, the ones who will overcome, so min ba'di ghalabihim means after their own defeat. an-Nahhas spells out the other path: whoever reads sayughlabun makes the sense and the Persians, after their victory, will be defeated. A single vowel decides who is beaten and who is beaten back. Both are transmitted; the first is what the chains overwhelmingly carry.",
            "bn": "কার কথা বলা হচ্ছে, তা ঠিক করে দেয় ব্যাকরণ। প্রধান পাঠে রোমানরা প্রথম ক্রিয়ার কর্ম, অর্থাৎ পরাজিত, আর দ্বিতীয় ক্রিয়ার কর্তা, অর্থাৎ যারা জয়ী হবে। তাই মিন বা'দি গালাবিহিম মানে নিজেদের পরাজয়ের পর। নাহহাস অন্য পথটাও খুলে বলেন: যে সাইয়ুগলাবূন পড়ে, তার পাঠে অর্থ দাঁড়ায়, আর পারসিকরা তাদের জয়ের পর পরাজিত হবে। একটিমাত্র স্বরচিহ্নই ঠিক করে দেয়, কে হারল আর কে পাল্টা মার খেল। দুটো পাঠই বর্ণিত, তবে সনদের বেশির ভাগই প্রথমটির পক্ষে।"
          }
        ]
      },
      {
        "h": {
          "en": "Abu Bakr's Wager",
          "bn": "আবু বকরের বাজি"
        },
        "p": [
          {
            "en": "The prophecy was so improbable that it was staked on camels. at-Tirmidhi records from Niyar ibn Mukram al-Aslami that when the verses came down, Persia was dominant over Rome, and the Muslims longed for a Roman victory because the Romans were People of the Book, while the Quraysh wanted Persia, who shared their idolatry and their denial of the Resurrection. Abu Bakr (RA) went out proclaiming the verses through the quarters of Makkah.",
            "bn": "ভবিষ্যদ্বাণীটা এতটাই অসম্ভব ছিল যে তার ওপর উটের বাজি ধরা হয়েছিল। তিরমিযী নিয়ার ইবন মুকরিম আসলামী থেকে বর্ণনা করেন, আয়াতগুলো নাজিল হওয়ার সময় পারস্য ছিল রোমের ওপর বিজয়ী। মুসলিমরা চাইত রোমের জয়, কারণ রোমানরা আহলে কিতাব; আর কুরাইশরা চাইত পারস্যের জয়, কারণ তারা কুরাইশদের মতোই মূর্তিপূজারি আর পুনরুত্থান অস্বীকারকারী। আবু বকর (রাঃ) বেরিয়ে পড়লেন মক্কার অলিগলিতে আয়াতগুলো ঘোষণা করতে করতে।"
          },
          {
            "en": "Some Quraysh challenged him to a bet, before betting was forbidden, and the narration runs: \"They said to Abu Bakr: Bid' means between three and nine years, so let us agree on the middle. So they agreed on six years. Then six years passed without the Romans being victorious, and the idolaters took what they won in the bet from Abu Bakr. When the seventh year came and the Romans finally beat the Persians, the Muslims rebuked Abu Bakr for agreeing to six years. He said: Because Allah said: In Bid' years. At that time, many people became Muslims.\" at-Tirmidhi graded it sahih hasan gharib.",
            "bn": "কিছু কুরাইশ তাঁকে বাজি ধরার চ্যালেঞ্জ দিল। এটা বাজি নিষিদ্ধ হওয়ার আগের ঘটনা। বর্ণনাটি এমন: \"তারা আবু বকরকে বলল: বিদ' মানে ৩ থেকে ৯ বছর, চলো মাঝামাঝি একটা মেয়াদ ঠিক করি। তারা ৬ বছর ঠিক করল। এরপর ৬ বছর কেটে গেল, রোমানরা জিতল না, আর মুশরিকরা বাজিতে জেতা মাল আবু বকরের কাছ থেকে নিয়ে নিল। সপ্তম বছরে রোমানরা শেষমেশ পারস্যকে হারাল। তখন মুসলিমরা ছয় বছর ঠিক করার জন্য আবু বকরকে দোষ দিল। তিনি বললেন: কারণ আল্লাহ বলেছেন, বিদ' বছরের মধ্যে। তখন বহু মানুষ ইসলাম গ্রহণ করল।\" তিরমিযী একে সহীহ হাসান গরীব বলেছেন।"
          },
          {
            "en": "Two things in the report deserve care. The bet was a form of gambling, and the narration itself marks it as before betting was forbidden; once it was prohibited in Madinah this was no longer open to anyone, and the commentators note the Prophet (ﷺ) later told Abu Bakr to give such winnings away in charity. And the lesson Abu Bakr drew was precise: he had fixed six years, but the word was bid', which the scholars gloss as between three and nine, the Qur'an's own margin and not his.",
            "bn": "বর্ণনাটির দুটি দিক খেয়াল রাখার মতো। প্রথমত, বাজিটা ছিল জুয়ারই একটা রূপ, আর বর্ণনা নিজেই জানিয়ে দেয় যে এটা বাজি নিষিদ্ধ হওয়ার আগের ঘটনা। মদিনায় তা হারাম হওয়ার পর এ পথ আর কারও জন্য খোলা থাকেনি। তাফসীরকারেরা বলেন, নবী ﷺ পরে আবু বকরকে এমন জেতা মাল সদকা করে দিতে বলেছিলেন। দ্বিতীয়ত, আবু বকর যে শিক্ষা নিলেন তা খুব নির্দিষ্ট। তিনি বেঁধেছিলেন ৬ বছর, কিন্তু কুরআনের শব্দ ছিল বিদ', আলেমরা যার অর্থ করেন ৩ থেকে ৯। এই সীমা কুরআনেরই দেওয়া, তাঁর নিজের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Forecast Against the Odds",
          "bn": "অসম্ভবের বিরুদ্ধে ভবিষ্যদ্বাণী"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws out how unlikely the prediction was when it was made. The Persians had so thoroughly broken the Roman Empire that, in the ordinary world of cause and effect, no observer could have foreseen a reversal. It quotes Edward Gibbon, the historian of Rome, who wrote that at the time the prophecy was delivered no prophecy could be more distant from its accomplishment, since the early years of Heraclius announced the empire's approaching dissolution.",
            "bn": "ভবিষ্যদ্বাণীটা যখন করা হয়, তখন তা কতটা অবিশ্বাস্য ছিল, মাআরিফুল কুরআন তা খুলে দেখায়। পারস্য রোমান সাম্রাজ্যকে এমনভাবে ভেঙে দিয়েছিল যে স্বাভাবিক কার্যকারণের হিসাবে কোনো পর্যবেক্ষকই উল্টো ফলের কথা ভাবতে পারত না। তাফসীরটি রোমের ইতিহাসবিদ এডওয়ার্ড গিবনের কথা উদ্ধৃত করে। গিবন লিখেছেন, ভবিষ্যদ্বাণীটি যখন দেওয়া হয়, তখন বাস্তবায়ন থেকে এর চেয়ে দূরের কোনো ভবিষ্যদ্বাণী হতে পারত না। কারণ হিরাক্লিয়াসের শাসনের প্রথম বছরগুলো সাম্রাজ্যের আসন্ন বিলুপ্তিরই ইঙ্গিত দিচ্ছিল।"
          },
          {
            "en": "That is precisely why the commentators treat the verse as a proof. Ma'arif notes that for a claimant to prophethood to stake his standing on so improbable an event, and be vindicated, is among the solid signs of his truthfulness. an-Nahhas adds a second reason the believers rejoiced: not only that a kindred people won, but that Allah's promise was kept to the year, and the fulfilment itself was the evidence that the one who spoke it spoke from God.",
            "bn": "ঠিক এ কারণেই তাফসীরকারেরা আয়াতটিকে প্রমাণ হিসেবে দেখেন। মাআরিফুল কুরআন বলে, নবুয়তের কোনো দাবিদার যদি এমন অসম্ভব ঘটনার ওপর নিজের মর্যাদা বাজি রাখেন, আর পরে তা সত্য প্রমাণিত হয়, তবে সেটা তাঁর সত্যবাদিতার মজবুত আলামতগুলোর একটি। নাহহাস মুমিনদের খুশির আরেকটি কারণ যোগ করেন। শুধু যে কাছের এক জাতি জিতল তা নয়, আল্লাহর ওয়াদা বছরের হিসাবেও ঠিক ঠিক পূরণ হলো। আর ওয়াদা পূরণ হওয়াটাই ছিল প্রমাণ যে যিনি কথাটা বলেছেন, তিনি আল্লাহর পক্ষ থেকেই বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Believers Rejoiced",
          "bn": "মুমিনরা কেন খুশি হলো"
        },
        "p": [
          {
            "en": "al-Qurtubi gathers the reasons the Muslims were glad, and they are not all the same. The plainest is kinship of creed: the Romans were People of the Book and the Persians idolaters, so a Roman win was the nearer thing to the believers. Ibn 'Atiyya offers a shrewder reading, that people naturally prefer the smaller adversary to prevail, since the larger side, once it wins, is the more to be feared.",
            "bn": "মুসলিমরা কেন খুশি হয়েছিল, কুরতুবী তার কারণগুলো একত্র করেন, আর সেগুলো সব এক নয়। সবচেয়ে সরল কারণ বিশ্বাসের নৈকট্য: রোমানরা আহলে কিতাব আর পারসিকরা মূর্তিপূজারি, তাই রোমের জয়টাই মুমিনদের বেশি কাছের। ইবন আতিয়্যা দেন আরও সূক্ষ্ম এক ব্যাখ্যা, মানুষ স্বভাবতই চায় ছোট প্রতিপক্ষ জিতুক, কারণ বড় পক্ষ একবার জিতে গেলে তাকে ভয় পাওয়ার কারণ আরও বেশি।"
          },
          {
            "en": "But al-Qurtubi records that the victory, when it came, fell on the very day of a Muslim deliverance, some say Badr and others al-Hudaybiya, so the believers' joy was layered: at a kindred people's triumph, at their own, and at the plain keeping of Allah's word. The Muyassar adds a sober note, that the Romans were People of the Book even though they had altered it, so the preference was relative, never an endorsement of their creed.",
            "bn": "তবে কুরতুবী লেখেন, বিজয়টা এসেছিল ঠিক সেই দিনে, যেদিন মুসলিমরাও এক বিপদ থেকে মুক্তি পায়। কেউ বলেন সেটা বদরের দিন, কেউ বলেন হুদায়বিয়ার। তাই মুমিনদের খুশি ছিল কয়েক স্তরের: কাছের এক জাতির জয়ে, নিজেদের জয়ে, আর আল্লাহর কথা স্পষ্টভাবে সত্য হতে দেখে। মুয়াসসার একটি সংযত কথা যোগ করে: রোমানরা আহলে কিতাব ছিল ঠিকই, কিন্তু তারা কিতাবকে বিকৃত করেছিল। তাই এই পছন্দ ছিল তুলনামূলক, তাদের ধর্মের প্রতি কোনো সমর্থন নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Does Not Endorse",
          "bn": "এ আয়াত যা সমর্থন করে না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports a war between two seventh-century empires and foretells its turn; it licenses nothing against Persians, Iranians or any living people, and it is no verdict on them as a nation. The believers' preference for Rome was narrow and specific, a nearness in two beliefs, the Resurrection and revealed scripture, and even that, the Muyassar reminds us, sat beside the Qur'an's own charge that they had distorted the Book they carried.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি সপ্তম শতকের দুই সাম্রাজ্যের যুদ্ধের খবর দেয় আর তার মোড় ঘোরার কথা আগাম জানায়। পারসিক, ইরানি বা আজকের কোনো জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না, জাতি হিসেবে তাদের ওপর কোনো রায়ও দেয় না। রোমের প্রতি মুমিনদের পছন্দ ছিল সীমিত ও নির্দিষ্ট: দুটি বিশ্বাসে কাছাকাছি থাকা, পুনরুত্থানে আর আসমানি কিতাবে। মুয়াসসার মনে করিয়ে দেয়, সেটুকু নৈকট্যের পাশেও ছিল কুরআনের এই অভিযোগ যে তারা নিজেদের কাছে থাকা কিতাবকে বিকৃত করেছিল।"
          },
          {
            "en": "Nor does the passage make worldly victory itself a mark of who is right. The command, the verse's own frame insists, belongs to Allah before the defeat and after it; empires rise and fall by His leave, not by their merit. What the believers were given was not a banner to wave over an army but a word to trust, a dated promise, spoken when the evidence pointed the other way.",
            "bn": "আর এই অনুচ্ছেদ দুনিয়ার জয়কেও কে সঠিক তার চিহ্ন বানায় না। আয়াতের নিজের কাঠামো জোর দিয়ে বলে, হুকুম আল্লাহরই, পরাজয়ের আগেও আর পরেও। সাম্রাজ্যগুলো ওঠে আর পড়ে তাঁর অনুমতিতে, নিজেদের যোগ্যতায় নয়। মুমিনদের যা দেওয়া হলো তা কোনো বাহিনীর ওপর ওড়ানোর পতাকা নয়, বরং ভরসা করার মতো এক কথা, তারিখ-বাঁধা এক ওয়াদা, যা বলা হয়েছিল যখন সব প্রমাণ উল্টো দিকে ইশারা করছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding to a Promise",
          "bn": "ওয়াদা আঁকড়ে ধরা"
        },
        "p": [
          {
            "en": "For the reader the verse is a lesson in where certainty comes from. The believers in Makkah were handed news that the visible world flatly denied, and told to count on it. They did not pretend the defeat had not happened; they held, through years in which the bet looked lost, to a single line of revelation, and the seventh year proved them right, and many entered Islam at the sight of it.",
            "bn": "নিশ্চয়তা আসলে কোথা থেকে আসে, পাঠককে এ আয়াত সেটাই শেখায়। মক্কার মুমিনদের এমন এক খবর দেওয়া হলো, চোখের সামনের দুনিয়া যাকে সরাসরি মিথ্যা বলছিল, আর বলা হলো এর ওপর ভরসা রাখতে। তারা ভান করেনি যে পরাজয় ঘটেনি। কিন্তু যে বছরগুলোতে মনে হচ্ছিল বাজিতে হার নিশ্চিত, সেই বছরগুলো জুড়েও তারা ওহির একটিমাত্র বাক্য আঁকড়ে ছিল। সপ্তম বছর প্রমাণ করল তারাই ঠিক, আর তা দেখে বহু মানুষ ইসলাম গ্রহণ করল।"
          },
          {
            "en": "The question the verse leaves is simple and sharp. When the headlines run against everything you were promised, which do you weigh more, what today reports or what your Lord has said will be? The defeat was real; so was the word that outlasted it. To live by the second without denying the first is the faith this passage asks of its reader.",
            "bn": "আয়াতটা যে প্রশ্ন রেখে যায়, তা সহজ, কিন্তু ধারালো। আপনাকে যা ওয়াদা করা হয়েছে, চারপাশের খবর যখন তার একেবারে উল্টো কথা বলে, তখন কোনটাকে বেশি ভারী মনে করেন? আজকের খবরকে, নাকি আপনার রব যা হবে বলে জানিয়েছেন তাকে? পরাজয়টা সত্যিই ঘটেছিল। যে কথা সেই পরাজয়কে ছাপিয়ে টিকে রইল, সেটাও সত্য। প্রথমটাকে অস্বীকার না করে দ্বিতীয়টার ওপর ভর দিয়ে বাঁচা, এই অনুচ্ছেদ পাঠকের কাছে এই ঈমানটাই চায়।"
          }
        ]
      }
    ]
  },
  "30:9": {
    "sections": [
      {
        "h": {
          "en": "Sent Out to Look",
          "bn": "দেখার জন্য বের হওয়া"
        },
        "p": [
          {
            "en": "The verse opens with a challenge, not a description. Awalam yasīrū fī al-arḍ — have they not travelled through the earth? At-Tabari reads the ones addressed as the Quraysh who denied Allah and forgot the Hereafter, the very men who crossed those lands as traders. Ma'arif al-Qur'an sharpens the point: Makka itself had little farming, little industry and no grand buildings, yet its merchants rode to Syria and Yemen for commerce. The question is almost a taunt. You already make the journey; you have simply never looked at what you pass.",
            "bn": "আয়াত শুরু হয় চ্যালেঞ্জ দিয়ে, বর্ণনা দিয়ে নয়। আওয়ালাম ইয়াসীরূ ফিল আরদ — তারা কি পৃথিবীতে ভ্রমণ করে না? তাবারী বলেন, এখানে কথা বলা হচ্ছে সেই কুরাইশদের, যারা আল্লাহকে অস্বীকার করেছে আর আখিরাত ভুলে বসেছে। অথচ ব্যবসার কাজে এরাই ওই দেশগুলো পাড়ি দিত। মাআরিফুল কুরআন কথাটা আরও ধারালো করে। মক্কায় চাষবাস ছিল সামান্য, শিল্পও সামান্য, বড় কোনো ইমারতও ছিল না, তবু সেখানকার বণিকরা ব্যবসার জন্য সিরিয়া আর ইয়েমেনে যেত। প্রশ্নটা প্রায় খোঁচার মতো: সফর তো তোমরা করোই, শুধু পথে যা পড়ে, সেদিকে কখনো ভালো করে তাকাওনি।"
          },
          {
            "en": "And the looking that is asked for is not the traveller's idle glance. Al-Qurtubi says they are to look with their insight and their hearts, fa-yanẓurū bi-baṣā'irihim wa-qulūbihim, and not merely with their eyes. Ibn Kathir widens it further. To travel with one's understanding and intellect, and to hear the reports of those long gone, is itself a kind of journey. A man can cross a continent and see nothing, and another can sit still and read the past until it warns him. The verse is looking for the second traveller, the one who reads what he sees.",
            "bn": "আর যে দেখার কথা বলা হচ্ছে, তা পথিকের অলস দৃষ্টি নয়। কুরতুবী বলেন, তাদের দেখতে হবে অন্তর্দৃষ্টি আর হৃদয় দিয়ে, ফা-ইয়ানযুরূ বি-বাসা-ইরিহিম ওয়া কুলূবিহিম, কেবল চোখ দিয়ে নয়। ইবন কাসীর পরিধিটা আরও বাড়ান। নিজের বোধ আর বুদ্ধি নিয়ে সফর করা, আর বহু আগে চলে যাওয়া জাতিদের খবর কানে তোলা, সেটাও এক ধরনের ভ্রমণ। একজন গোটা মহাদেশ পেরিয়েও কিছু দেখে না, আবার কেউ এক জায়গায় বসে অতীত পড়তে পড়তে সতর্ক হয়ে যায়। আয়াত খুঁজছে দ্বিতীয় পথিককে, যে যা দেখে তা পড়তেও জানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading an Ending",
          "bn": "পরিণতির পাঠ"
        },
        "p": [
          {
            "en": "What the eye is told to find is an ʿāqiba — an end, an outcome, the last chapter of a people's story. Fa-yanẓurū kayfa kāna ʿāqibatu alladhīna min qablihim: let them see how the end was of those before them. In the preceding sūra, a different gaze was commanded: travel the earth and see how He began creation (29:20), a proof of the resurrection read off creation's very first act. Here the direction reverses. The eye is turned not to how things begin but to how nations finish.",
            "bn": "চোখকে যা খুঁজতে বলা হচ্ছে তা হলো আকিবা: পরিণতি, শেষ অধ্যায়, কোনো জাতির গল্পের শেষ পাতা। ফা-ইয়ানযুরূ কাইফা কানা আকিবাতুল্লাযীনা মিন কাবলিহিম: তারা দেখুক, তাদের পূর্ববর্তীদের পরিণতি কেমন হয়েছিল। আগের সূরায় ভিন্ন এক দৃষ্টির হুকুম এসেছিল: পৃথিবীতে ভ্রমণ করো আর দেখো তিনি কীভাবে সৃষ্টির সূচনা করেছেন (২৯:২০), যা সৃষ্টির একেবারে প্রথম কাজ থেকে পুনরুত্থানের প্রমাণ। এখানে দৃষ্টির মুখ ঘুরে যায়। চোখ এখন তাকায় জিনিস কীভাবে শুরু হয় তাতে নয়, বরং জাতিরা কীভাবে শেষ হয় তাতে।"
          },
          {
            "en": "The pairing is deliberate, and the verses just after it prove so: Allah begins creation, then repeats it, then to Him you are returned (30:11). But this verse does not argue from creation's start. Its lesson is historical and moral. As-Sa'di calls the fate of the ruined nations a hastened recompense, a sample and a first instalment of the reckoning of the Hereafter. To read an ending rightly is to see, in a dead city, the outline of a Day that has not yet come. The ruins are not only old news; they are a preview.",
            "bn": "দুটো দৃষ্টিকে পাশাপাশি রাখা হয়েছে ইচ্ছা করেই, আর ঠিক পরের আয়াতগুলোই তার প্রমাণ: আল্লাহ সৃষ্টির সূচনা করেন, তারপর আবার তা সৃষ্টি করেন, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে (৩০:১১)। কিন্তু এই আয়াত সৃষ্টির সূচনা থেকে যুক্তি দেয় না। এর শিক্ষা ইতিহাসের, নৈতিকতার। সাদী ধ্বংস হয়ে যাওয়া জাতিদের পরিণতিকে বলেন দুনিয়াতেই আগাম দেওয়া প্রতিফল, আখিরাতের হিসাবের একটা নমুনা আর প্রথম কিস্তি। পরিণতি ঠিকভাবে পড়তে জানলে মৃত এক শহরের ভেতরেই দেখা যায় সেই দিনের আভাস, যা এখনো আসেনি। ধ্বংসস্তূপ কেবল পুরনো খবর নয়, আগামীর এক ঝলকও।"
          }
        ]
      },
      {
        "h": {
          "en": "Stronger, and Gone",
          "bn": "প্রবল, তবু নিশ্চিহ্ন"
        },
        "p": [
          {
            "en": "The verse then strips away the one excuse a proud people clings to, that they were too strong to fall. Kānū ashadda minhum quwwatan — they were greater than these in power. Ibn Kathir presses it on Muhammad's ﷺ own people: the earlier nations had more wealth and more sons, were granted what you were not given a tenth of, and were settled in the world with a firmness you have never reached. The men of Makka were not looking down on weaklings. They were looking up at their betters in every worldly measure there is.",
            "bn": "এরপর আয়াত গর্বিত জাতির আঁকড়ে ধরা একমাত্র অজুহাতটাও কেড়ে নেয় — এই ভরসা যে তারা পড়ে যাওয়ার মতো দুর্বল নয়। কানূ আশাদ্দা মিনহুম কুওয়্যাতান, তারা এদের চেয়ে শক্তিতে বড় ছিল। ইবন কাসীর কথাটা মুহাম্মদ ﷺ-এর নিজের জাতির ওপর চেপে ধরেন। আগের জাতিদের সম্পদ বেশি ছিল, সন্তান বেশি ছিল, তাদের যা দেওয়া হয়েছিল তার এক দশমাংশও তোমাদের দেওয়া হয়নি, আর দুনিয়ায় তারা এমন শক্ত ভিতে বসেছিল যা তোমরা কখনো ছুঁতে পারোনি। মক্কার লোকেরা কোনো দুর্বলের দিকে তাকিয়ে ছিল না। তারা তাকিয়ে ছিল দুনিয়ার প্রতিটি মাপে নিজেদের চেয়ে বড়দের দিকে।"
          },
          {
            "en": "And still those betters are gone. Ibn Kathir's abridged commentary keeps the sting: they stayed in this world longer than you will, were more advanced and more prosperous than you, and it bought them nothing. Al-Muyassar names the classic examples, ʿĀd and Thamūd, peoples stronger in body and better able to enjoy their lives. The verse lets the ruin answer the boast. Superior strength is not a defence against consequence. It is only a louder witness when the fall finally comes, a bigger name on a longer list of the vanished.",
            "bn": "তবু সেই বড়রা আজ নিশ্চিহ্ন। ইবন কাসীরের সংক্ষিপ্ত তাফসীরেও খোঁচাটা রয়ে গেছে: তারা তোমাদের চেয়ে বেশিদিন দুনিয়ায় ছিল, তোমাদের চেয়ে বেশি উন্নত আর সচ্ছল ছিল, অথচ কিছুই তাদের কাজে আসেনি। মুয়াসসার চিরচেনা দুটি উদাহরণের নাম বলে, আদ আর সামূদ। তারা শরীরে ছিল বেশি বলবান, জীবন উপভোগের সামর্থ্যেও এগিয়ে। গর্বের জবাব আয়াত দেয় ধ্বংসস্তূপ দিয়েই। বেশি শক্তি পরিণাম থেকে বাঁচার ঢাল নয়। পতন যখন আসে, তখন সেই শক্তি কেবল আরও জোরালো সাক্ষী হয়ে দাঁড়ায়, হারিয়ে যাওয়াদের লম্বা তালিকায় আরও বড় একটা নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Plough or Pickaxe",
          "bn": "লাঙল, না গাঁইতি"
        },
        "p": [
          {
            "en": "At the centre of the verse sits a disputed phrase: wa-athārū al-arḍ. One reading makes it agriculture. Mujāhid, cited by at-Tabari, glosses it simply as ḥarathūhā, they ploughed it. Al-Qurtubi and al-Baghawi agree: they turned the soil over for cultivation, and both add a detail that makes the image bite — the people of Makka were not farmers at all. Al-Muyassar keeps this line too: those nations ploughed the land and sowed it. On this reading the earlier peoples were masters of a soil the Makkans barely scratched.",
            "bn": "আয়াতের ঠিক মাঝখানে আছে একটি বিতর্কিত শব্দগুচ্ছ: ওয়া আছারুল আরদ। এক ব্যাখ্যায় এটা কৃষিকাজ। তাবারী মুজাহিদের সূত্রে এর সোজা অর্থ আনেন হারাছূহা, তারা জমি চষেছে। কুরতুবী আর বাগাভীও একমত: চাষের জন্য তারা মাটি উল্টে দিয়েছে। দুজনেই এমন একটা কথা যোগ করেন, যাতে ছবিটা আরও গায়ে লাগে: মক্কার লোকেরা তো চাষীই ছিল না। মুয়াসসারও এই ব্যাখ্যা রেখেছে: ওই জাতিরা জমি চষেছে, ফসল বুনেছে। এই ব্যাখ্যায় আগের জাতিরা ছিল মাটির ওস্তাদ, আর মক্কাবাসী সে মাটিতে বড়জোর একটু আঁচড় কেটেছে।"
          },
          {
            "en": "A second reading digs deeper than the plough. At-Tabari's own gloss is istakhrajū al-arḍ, they drew the earth out, excavated and worked it. Ma'arif al-Qur'an spells out what that means: peoples skilled enough to raise underground water for their fields by excavation, and to dig out hidden minerals such as gold and silver and turn them to profit. The dispute is not idle. One picture is a farmer's furrow and the other a miner's shaft, and the Arabic athāra holds both the turning of soil and the stirring up of what lies beneath it.",
            "bn": "দ্বিতীয় ব্যাখ্যা লাঙলের চেয়েও গভীরে যায়। তাবারীর নিজের ব্যাখ্যা ইসতাখরাজূল আরদ: তারা মাটির ভেতর থেকে বের করে এনেছে, খুঁড়েছে, কাজে লাগিয়েছে। মাআরিফুল কুরআন খুলে বলে এর মানে কী। এরা এমন দক্ষ জাতি ছিল যে খনন করে মাটির নিচের পানি ক্ষেতে তুলতে পারত, আর সোনা-রুপার মতো লুকানো খনিজ খুঁড়ে বের করে লাভের কাজে লাগাত। মতভেদটা অকারণ নয়। একটা ছবি কৃষকের লাঙলের দাগ, অন্যটা খনিশ্রমিকের সুড়ঙ্গ। আর আরবি আছারা শব্দে দুটোই আছে: মাটি উল্টানো, আর নিচে যা লুকিয়ে আছে তা খুঁড়ে তোলা।"
          },
          {
            "en": "The next verb draws less argument. Wa-ʿamarūhā akthara mimmā ʿamarūhā: they built it up and settled it more than these have. As-Sa'di fills in the scene — palaces and workshops raised, trees planted, crops sown, rivers channelled across the land. Al-Muyassar has them build their mansions and dwell in them. At-Tabari even preserves the words of Ibn ʿAbbās, that they owned the earth and built it up. Whichever labour the verse is naming, its point is one and the same: these were builders, and all their building did not save them.",
            "bn": "পরের ক্রিয়াটা নিয়ে মতভেদ কম। ওয়া আমারূহা আকছারা মিম্মা আমারূহা: এরা যতটা আবাদ করেছে, তারা তার চেয়ে বেশি আবাদ করেছিল, বসতি গড়েছিল। সাদী দৃশ্যটা এঁকে দেন: প্রাসাদ আর কারখানা তোলা, গাছ লাগানো, ফসল বোনা, জমির বুক চিরে নদী বইয়ে নেওয়া। মুয়াসসারের বর্ণনায় তারা অট্টালিকা গড়ে তাতে বাস করত। তাবারী এমনকি ইবন আব্বাস (রাঃ)-এর কথাও সংরক্ষণ করেছেন: তারা জমির মালিক ছিল আর তা আবাদ করেছিল। আয়াত যে পরিশ্রমের কথাই বলুক, মূল কথা একটাই: এরা ছিল নির্মাতা, আর তাদের সব নির্মাণ মিলেও তাদের বাঁচাতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Even the Proof Came",
          "bn": "প্রমাণও পৌঁছেছিল"
        },
        "p": [
          {
            "en": "The sentence turns on a small, decisive clause: wa-jā'athum rusuluhum bil-bayyināt — and their messengers came to them with clear proofs. Al-Qurtubi reads al-bayyināt as the miracles the messengers brought, and adds a second possibility, that it means the rulings and commands they carried. Either way, the earlier nations were not destroyed in ignorance. The proof reached them. Ibn Kathir frames the whole verse around this: Allah is pointing His listeners toward the truthfulness of His messengers, a truthfulness confirmed by the very ruin of those who called them liars.",
            "bn": "পুরো বাক্যটা ঘোরে ছোট অথচ চূড়ান্ত একটি অংশকে ঘিরে: ওয়া জাআতহুম রুসুলুহুম বিল-বায়্যিনাত — আর তাদের কাছে তাদের রাসূলগণ স্পষ্ট প্রমাণ নিয়ে এসেছিলেন। কুরতুবী বায়্যিনাত বলতে বোঝেন রাসূলদের আনা মুজিজা। তিনি আরেকটি সম্ভাবনার কথাও বলেন: এর মানে তাঁদের বয়ে আনা বিধান ও হুকুম। যেভাবেই ধরা হোক, আগের জাতিরা না জেনে ধ্বংস হয়নি। প্রমাণ তাদের কাছে পৌঁছেছিল। ইবন কাসীর গোটা আয়াতটাই সাজান এ কথাকে ঘিরে: আল্লাহ শ্রোতাদের দৃষ্টি ফেরাচ্ছেন তাঁর রাসূলদের সত্যতার দিকে। যারা তাঁদের মিথ্যাবাদী বলেছিল, তাদের ধ্বংসই সেই সত্যতার প্রমাণ।"
          },
          {
            "en": "This closes the last door of excuse. A people cannot plead that no warner ever came, when the verse records that warners came with evidence plain enough to remove all doubt. Al-Qurtubi notes the response they gave, fa-kafarū wa-lam yu'minū, they disbelieved and would not believe. The strength was real, the building was real, and the messengers were real too. What was missing among them was not information. It was the willingness to bow to information once it had arrived and asked something of them.",
            "bn": "এতে অজুহাতের শেষ দরজাটাও বন্ধ হয়ে যায়। কোনো জাতি বলতে পারবে না যে তাদের কাছে কোনো সতর্ককারী আসেনি। আয়াত তো জানিয়েই দিচ্ছে, সতর্ককারীরা এসেছিলেন এমন প্রমাণ নিয়ে, যা সব সন্দেহ দূর করে দেয়। কুরতুবী তাদের জবাবটা ধরিয়ে দেন: ফা-কাফারূ ওয়া লাম ইউমিনূ, তারা কুফরি করল, ঈমান আনল না। শক্তি সত্য ছিল, নির্মাণ সত্য ছিল, রাসূলরাও সত্য ছিলেন। তাদের অভাব তথ্যের ছিল না। অভাব ছিল মেনে নেওয়ার ইচ্ছার: খবর এসে যখন তাদের কাছে কিছু দাবি করল, তখন তার সামনে মাথা নোয়াতে তারা রাজি হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Fault the Ruin",
          "bn": "ধ্বংসের দায় কার"
        },
        "p": [
          {
            "en": "Then comes the verse's great acquittal of God: fa-mā kāna Allāhu li-yaẓlimahum — Allah would never have wronged them. Al-Qurtubi explains it as destruction without sin, without a messenger sent, without a proof given; that, and only that, would have been injustice, and Allah does none of it. Al-Baghawi reads the wronging more precisely, as any shortchanging of their due, naqṣ ḥuqūqihim. The punishment that fell on them was not a cutting-short of their rights. It was the exact and earned answer to what their own hands had built up.",
            "bn": "এরপর আসে আয়াতের সেই মহান বাক্য, যা আল্লাহকে সব দায় থেকে মুক্ত ঘোষণা করে: ফা-মা কানাল্লাহু লি-ইয়াযলিমাহুম — আল্লাহ কখনোই তাদের ওপর জুলুম করার ছিলেন না। কুরতুবী ব্যাখ্যা করেন: গুনাহ ছাড়াই, রাসূল না পাঠিয়ে, প্রমাণ না দিয়ে ধ্বংস করা, কেবল সেটাই হতো জুলুম। আর আল্লাহ এর কিছুই করেন না। বাগাভী জুলুম শব্দটাকে আরও নির্দিষ্টভাবে বোঝেন: তাদের প্রাপ্য থেকে কিছু কমিয়ে দেওয়া, নাকস হুকূকিহিম। তাদের ওপর যে শাস্তি নেমেছিল, তাতে তাদের হক থেকে কিছুই কাটা হয়নি। সেটা ছিল তাদের নিজ হাতের কামাইয়ের ঠিক মাপমতো প্রতিফল।"
          },
          {
            "en": "The weight falls instead on the closing words: wa-lākin kānū anfusahum yaẓlimūn — but they were wronging themselves. Ibn Kathir names the self-wrong exactly: they denied the signs of Allah and mocked them, and so pulled the ruin down on their own heads. Al-Muyassar and al-Qurtubi both reduce it to two words, shirk and disobedience. The verse refuses the oldest complaint of the condemned, that heaven was unfair to them. The ledger was square. Every stroke of the loss had first been entered by the same hand that would later suffer it.",
            "bn": "ভার বরং গিয়ে পড়ে শেষ কথাগুলোর ওপর: ওয়া লাকিন কানূ আনফুসাহুম ইয়াযলিমূন — বরং তারা নিজেরাই নিজেদের ওপর জুলুম করছিল। এই নিজের ওপর জুলুম কী, ইবন কাসীর তা ঠিক ঠিক বলে দেন: তারা আল্লাহর নিদর্শন অস্বীকার করেছে, তা নিয়ে ঠাট্টা করেছে, আর এভাবে ধ্বংস নিজেদের মাথায় নিজেরাই টেনে এনেছে। মুয়াসসার আর কুরতুবী দুজনেই একে দুই কথায় বলেন: শিরক আর নাফরমানি। দণ্ডিতদের সবচেয়ে পুরনো নালিশ হলো, আসমান তাদের প্রতি অবিচার করেছে। আয়াত সেই নালিশ নাকচ করে দেয়। হিসাবে কোনো গরমিল ছিল না। ক্ষতির খাতায় প্রতিটি অঙ্ক আগে লিখেছিল সেই হাতই, পরে যাকে তার ফল ভোগ করতে হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weep at the Ruins",
          "bn": "ধ্বংসস্তূপে কান্না"
        },
        "p": [
          {
            "en": "One sound narration brings the verse down onto the traveller's own feet. In Ṣaḥīḥ al-Bukhārī, Ibn ʿUmar reports that the Messenger of Allah ﷺ said, as he passed the ruined dwellings of Thamūd at al-Ḥijr, \"Do not enter the ruined dwellings of those who wronged themselves unless you are weeping, lest there befall you the like of what befell them.\" The closing phrase quotes the verse almost word for word, alladhīna ẓalamū anfusahum, those who wronged themselves. The Qur'an's lesson and the Prophet's ﷺ warning share one vocabulary.",
            "bn": "একটি সহীহ বর্ণনা আয়াতের কথাকে একেবারে পথিকের নিজের পথে এনে দাঁড় করায়। সহীহ বুখারীতে ইবন উমর (রাঃ) বর্ণনা করেন, সামূদের ধ্বংসপ্রাপ্ত আবাসভূমি হিজরের পাশ দিয়ে যাওয়ার সময় রাসূলুল্লাহ ﷺ বলেছিলেন, যারা নিজেদের ওপর জুলুম করেছে তাদের ধ্বংসপ্রাপ্ত ঘরে কেঁদে কেঁদে ছাড়া প্রবেশ কোরো না, নইলে তাদের যা হয়েছিল তেমন কিছু তোমাদেরও হতে পারে। শেষ কথাটা আয়াতেরই প্রায় হুবহু উদ্ধৃতি, আল্লাযীনা যালামূ আনফুসাহুম, যারা নিজেদের ওপর জুলুম করেছে। কুরআনের শিক্ষা আর নবী ﷺ-এর সতর্কবাণী কথা বলে একই ভাষায়।"
          },
          {
            "en": "The hadith, recorded by al-Bukhārī in his Ṣaḥīḥ, settles how a believer is to stand among such sites. Not as a sightseer and not as a boaster, but as a man who sees in them his own possible end. The ruin is not a monument to someone else's bad luck. It is a mirror held up to anyone strong, prosperous and busy enough to assume the warning must be meant for other people. The right posture at the ruins is tears for one's own soul, not a trophy taken home.",
            "bn": "ইমাম বুখারী তাঁর সহীহ গ্রন্থে এ হাদিস এনেছেন। এমন জায়গায় একজন মুমিন কীভাবে দাঁড়াবে, হাদিসটি তা ঠিক করে দেয়। দর্শনার্থী হয়ে নয়, বড়াই করতেও নয়, বরং এমন মানুষ হিসেবে, যে সেখানে নিজের সম্ভাব্য পরিণতি দেখতে পায়। ধ্বংসস্তূপ অন্য কারও দুর্ভাগ্যের স্মৃতিস্তম্ভ নয়। তা এক আয়না। যে কেউ নিজেকে যথেষ্ট শক্তিশালী, সচ্ছল আর ব্যস্ত ভেবে মনে করে, এ সতর্কবাণী বুঝি অন্যদের জন্য, আয়নাটা তার সামনেই ধরা। ধ্বংসস্তূপে মুমিনের আসল ভঙ্গি হলো নিজের জন্য চোখের পানি, ঘরে নিয়ে যাওয়ার মতো কোনো স্মারক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Read It Against Yourself",
          "bn": "আয়াতটা নিজের দিকে ফিরিয়ে পড়ুন"
        },
        "p": [
          {
            "en": "A verse about destroyed nations must be handled with care, so let this be plain. The verse speaks only of what it names: particular peoples, named by the commentators as ʿĀd, Thamūd and their like, whom Allah ruined after they denied clear proof. It records a closed, just decree of God upon the dead. It licenses nothing against any living person or community. Nobody may read it as permission to despise, harm or expel a people today, nor to treat present-day loss as evidence of someone's guilt. That reading turns the verse inside out.",
            "bn": "ধ্বংস হয়ে যাওয়া জাতিদের নিয়ে আয়াত সাবধানে পড়তে হয়, তাই কথাটা সাফ বলে রাখি। আয়াত যা বলে, কেবল সেটুকুই বলে: নির্দিষ্ট কিছু জাতি, তাফসীরকারেরা যাদের নাম বলেন আদ, সামূদ আর তাদের মতো অন্যরা। স্পষ্ট প্রমাণ অস্বীকার করার পর আল্লাহ তাদের ধ্বংস করেছেন। এটা মৃতদের ব্যাপারে আল্লাহর এক চূড়ান্ত ও ন্যায্য ফয়সালার খবর। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই ছাড়পত্র দেয় না। আজ কোনো জাতিকে ঘৃণা করা, ক্ষতি করা বা তাড়িয়ে দেওয়ার অনুমতি হিসেবে কেউ একে পড়তে পারে না। আজকের কোনো বিপদকে কারও অপরাধের প্রমাণ বানানোও চলে না। এমন পাঠ আয়াতের অর্থটাকেই উল্টে দেয়।"
          },
          {
            "en": "The verse's own aim is inward, and the commentators keep it there. As-Sa'di says whoever looks at these traces finds only perished nations and desolate homes, a warning standing before the warning to come. Ma'arif al-Qur'an ends by asking the reader to ponder whether those peoples were wronged from above, or wronged themselves by piling up the causes of their own ruin. The honest traveller does not leave the ruins thinking about the dead. He leaves thinking about the proof that has reached him, and whether he himself is answering it.",
            "bn": "আয়াতের আসল লক্ষ্য মানুষের ভেতরের দিকে, আর তাফসীরকারেরাও লক্ষ্যটা সেখানেই রাখেন। সাদী বলেন, যে এই চিহ্নগুলোর দিকে তাকায়, সে কেবল নিশ্চিহ্ন জাতি আর জনশূন্য ঘরবাড়িই দেখে। সামনে যে সতর্কবার্তা আসছে, তার আগে এ যেন আরেক সতর্কবার্তা। মাআরিফুল কুরআন শেষে পাঠককে ভাবতে বলে: ওই জাতিদের ওপর কি ওপর থেকে জুলুম করা হয়েছিল, নাকি নিজেদের ধ্বংসের কারণ জমিয়ে জমিয়ে তারা নিজেরাই নিজেদের ওপর জুলুম করেছিল? সৎ পথিক ধ্বংসস্তূপ থেকে ফেরার সময় মৃতদের কথা ভাবে না। সে ভাবে তার কাছে যে প্রমাণ পৌঁছেছে তার কথা, আর সে নিজে তাতে সাড়া দিচ্ছে কি না।"
          }
        ]
      }
    ]
  },
  "30:18": {
    "sections": [
      {
        "h": {
          "en": "Where the Praise Falls",
          "bn": "প্রশংসাটা কোথায় নামে"
        },
        "p": [
          {
            "en": "The surah has just closed a scene of the Hour. The deniers fall into despair, and people are parted into two companies: one delighted in a garden, one brought into punishment (30:12 and 30:16). Then, with no pause, the tone turns upward, so glorify Allah when you reach the evening and when you reach the morning (30:17). The verse before us completes that turn. Ma'arif al-Qur'an notes that after the terror of the resurrection the passage lifts the hearer into remembrance, just before the signs of creation open in 30:19.",
            "bn": "সূরাটি এইমাত্র কিয়ামতের একটি দৃশ্য শেষ করেছে। অস্বীকারকারীরা হতাশায় ডুবে যায়, আর মানুষ দুই দলে ভাগ হয়ে যায়: এক দল জান্নাতে আনন্দে থাকবে, আরেক দলকে হাজির করা হবে শাস্তিতে (৩০:১২ ও ৩০:১৬)। তারপর কোনো বিরতি ছাড়াই সুর ওপরের দিকে ওঠে: অতএব আল্লাহর পবিত্রতা ঘোষণা কর যখন সন্ধ্যায় উপনীত হও আর যখন সকালে উপনীত হও (৩০:১৭)। আমাদের আয়াতটি সেই মোড় ঘোরানো পূর্ণ করে। মাআরিফুল কুরআন বলে, পুনরুত্থানের ভয়াবহতার পর আয়াতগুলো শ্রোতাকে জিকিরের দিকে তুলে আনে। এর ঠিক পরেই ৩০:১৯ আয়াতে শুরু হয় সৃষ্টির নিদর্শনের বর্ণনা।"
          },
          {
            "en": "The two verses work as a pair. The first commands tasbih, the declaring of Allah free of every defect, at evening and morning (30:17); the second answers it with hamd, the praise owed to Him, and extends both across the day. al-Muyassar gathers the whole of it in one breath: glorify Him and praise Him at these times, for to Him belong praise and thanks in the heavens and the earth, and in the night and the day. The pairing of purity and praise is the frame the verse hangs on.",
            "bn": "আয়াত দুটি জোড়া বেঁধে কাজ করে। প্রথমটি আদেশ দেয় তাসবীহের, অর্থাৎ আল্লাহকে সব ত্রুটি থেকে পবিত্র ঘোষণা করার, সন্ধ্যায় ও সকালে (৩০:১৭)। দ্বিতীয়টি তার জবাব দেয় হামদ দিয়ে, অর্থাৎ তাঁর প্রাপ্য প্রশংসা দিয়ে, আর দুটিকেই ছড়িয়ে দেয় গোটা দিনজুড়ে। মুয়াসসার পুরো কথাটা এক নিঃশ্বাসে জড়ো করে: এই সময়গুলোতে তাঁর পবিত্রতা ও প্রশংসা কর, কারণ আসমান ও যমীনে, রাতে ও দিনে সমস্ত প্রশংসা আর কৃতজ্ঞতা একমাত্র তাঁরই। পবিত্রতা আর প্রশংসার এই জোড়াই আয়াতের কাঠামো।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise Filling Earth and Sky",
          "bn": "প্রশংসায় ভরা আসমান-যমীন"
        },
        "p": [
          {
            "en": "Now the claim widens past any one worshipper. at-Tabari reads to Him is praise in the heavens and the earth as praise from the whole of His creation and from none besides: in the heavens from their dwellers among the angels, and on earth from its people and every kind of creature He made in it. The praise is not waiting to be begun. It is already rising from everything that exists, in every region of the cosmos, and the believer at prayer is one more voice entering a chorus that was never silent.",
            "bn": "এবার কথাটা কোনো এক ইবাদতকারীর গণ্ডি ছাড়িয়ে যায়। তাবারী 'আসমান ও যমীনে প্রশংসা তাঁরই' কথাটার অর্থ করেন এভাবে: প্রশংসা আসে তাঁর গোটা সৃষ্টি থেকে, আর তা তাঁরই প্রাপ্য, অন্য কারও নয়। আসমানে প্রশংসা করে সেখানকার বাসিন্দা ফেরেশতারা, আর যমীনে এর অধিবাসীরা এবং সেখানে তাঁর সৃষ্ট সব রকম প্রাণী। প্রশংসা শুরু হওয়ার অপেক্ষায় নেই। যা কিছু আছে, সবকিছু থেকে, সৃষ্টির প্রতিটি কোণ থেকে তা আগে থেকেই উঠছে। নামাজে দাঁড়ানো মুমিন সেই সমবেত সুরে যোগ হওয়া আরও একটি কণ্ঠ, যে সুর কখনো থামেনি।"
          },
          {
            "en": "The earlier authorities say the same in their own words. al-Baghawi, citing Ibn Abbas, has the inhabitants of the heavens and the earth praising Him and praying to Him. Ibn Kathir, in both his Arabic and his abridged commentary, reads the clause as meaning He is the One praised for all that He created in the heavens and on earth. The praise, on this reading, is owed not for a single favour but for the standing fact of creation itself, the sky and the ground and all they hold.",
            "bn": "আগের যুগের আলেমরাও নিজেদের ভাষায় একই কথা বলেন। বাগভী ইবন আব্বাস থেকে আনেন, আসমান ও যমীনের অধিবাসীরা তাঁর প্রশংসা করে আর তাঁর উদ্দেশেই নামাজ পড়ে। ইবন কাসীর তাঁর আরবি তাফসীর আর সংক্ষিপ্ত তাফসীর, দুটোতেই বাক্যটির অর্থ করেন: আসমান ও যমীনে তিনি যা কিছু সৃষ্টি করেছেন, তার সবকিছুর জন্য প্রশংসিত একমাত্র তিনিই। এই অর্থে প্রশংসা কোনো একটি অনুগ্রহের জন্য নয়। প্রশংসা তাঁর প্রাপ্য সৃষ্টির জন্যই, যা সবসময় চোখের সামনে আছে: এই আকাশ, এই মাটি, আর এদের মধ্যে যা কিছু আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Clause Set Apart",
          "bn": "আলাদা করে বসানো বাক্য"
        },
        "p": [
          {
            "en": "al-Qurtubi calls the clause an interjection dropped into the middle of the speech, a parenthesis of unceasing praise for His blessings and His favours. On this first reading the words are not a command at all but a statement: praise belongs to Him always, running on without pause. He records a second view, that to Him is praise means the prayer is His, since the prayer is marked out by the reciting of al-Fatiha, which opens with praise. al-Qurtubi judges the first the more evident of the two.",
            "bn": "কুরতুবী এই বাক্যকে বলেন কথার মাঝখানে ঢুকে পড়া এক অন্তর্বর্তী মন্তব্য, তাঁর নিয়ামত আর অনুগ্রহের জন্য অবিরাম প্রশংসার এক টুকরো। এই প্রথম পাঠে কথাগুলো কোনো আদেশই নয়, বরং এক ঘোষণা: প্রশংসা সবসময় তাঁরই, থেমে না গিয়ে চলতে থাকে। তিনি দ্বিতীয় একটি মতও তুলে ধরেন, 'প্রশংসা তাঁরই' মানে নামাজ তাঁরই, কারণ নামাজকে আলাদা করে চেনায় সূরা ফাতিহার তিলাওয়াত, যা শুরু হয় প্রশংসা দিয়ে। কুরতুবী দুটির মধ্যে প্রথমটিকেই বেশি স্পষ্ট মনে করেন।"
          },
          {
            "en": "al-Qurtubi passes on a fine distinction from al-Mawardi. The night prayer is called by the name of tasbih and the day prayer by the name of hamd, and for a reason. By day a person moves through dealings and states that call for the praise of God; by night he is in a seclusion that calls for declaring Him far above every fault. So praise suits the daylight hours and purity suits the dark, and the verse hands each its own word. The two halves of the day are given two different tongues.",
            "bn": "কুরতুবী মাওয়ার্দী থেকে একটি সূক্ষ্ম পার্থক্য তুলে আনেন। রাতের নামাজকে বলা হয় তাসবীহ, দিনের নামাজকে হামদ, আর এর পেছনে কারণ আছে। দিনের বেলা মানুষ নানা লেনদেন আর অবস্থার মধ্য দিয়ে যায়, যা তাকে আল্লাহর প্রশংসার দিকে ডাকে। রাতে সে থাকে নির্জনে, আর সেই নির্জনতা ডাকে আল্লাহকে সব ত্রুটির ঊর্ধ্বে ঘোষণা করার দিকে। তাই দিনের আলোয় মানায় প্রশংসা, আর আঁধারে পবিত্রতা ঘোষণা। আয়াত দুটোকেই তাদের নিজ নিজ শব্দ দিয়েছে। দিনের দুই ভাগের মুখে তাই দুই আলাদা বুলি।"
          },
          {
            "en": "There is a quiet force in reading the clause as an interruption. The passage is busy commanding the believer to glorify God at set hours, and into that stream of instruction it slips a plain fact, that the praise is His in the heavens and the earth, always. The command can lapse; a servant can miss his hour. The fact does not. So the duty to praise at fixed times rests on a praise that is unbroken behind it, and the worshipper is summoned to match in his small measure what the cosmos never lets fall.",
            "bn": "বাক্যটিকে মাঝখানের বিরতি হিসেবে পড়লে এর ভেতরের এক নীরব শক্তি চোখে পড়ে। আয়াতগুলো তখন মুমিনকে নির্দিষ্ট সময়ে আল্লাহর পবিত্রতা ঘোষণার আদেশ দিচ্ছে, আর সেই আদেশের ধারার মাঝেই গুঁজে দেয় এক সরল সত্য: আসমান ও যমীনে প্রশংসা সবসময় তাঁরই। আদেশ পালনে ঢিল পড়তে পারে, বান্দার ওয়াক্ত ছুটে যেতে পারে। কিন্তু সত্যটা কখনো ছুটে যায় না। তাই নির্দিষ্ট সময়ে প্রশংসার দায়িত্বের পেছনে আছে এক অবিরাম প্রশংসা। মহাবিশ্ব যে প্রশংসা কখনো থামতে দেয় না, বান্দাকে ডাকা হচ্ছে নিজের ছোট সাধ্যে তার সঙ্গে তাল মেলাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Marking the Hours",
          "bn": "ওয়াক্তের চিহ্ন"
        },
        "p": [
          {
            "en": "Four moments are named across the pair, and each is a joint in the day. Evening when you reach it and morning when you reach it stand in 30:17; then ashiyyan, the late part of the day, and hina tuzhiruna, when you enter the noon, close 30:18. at-Tabari reads ashiyyan as the glorifying due at the afternoon prayer and the last phrase as the entering of the time of zuhr. The sweep of the two verses lays a hand on the whole arc of a day, from its edges to its middle.",
            "bn": "দুই আয়াত মিলে চারটি মুহূর্তের নাম আসে, আর প্রতিটি মুহূর্ত দিনের একেকটি সন্ধিক্ষণ। সন্ধ্যায় উপনীত হওয়া আর সকালে উপনীত হওয়া আছে ৩০:১৭ আয়াতে। তারপর ৩০:১৮ আয়াত শেষ হয় দুটি কথায়: আশিয়্যান, অর্থাৎ দিনের শেষভাগ, আর হীনা তুযহিরূন, অর্থাৎ যখন তোমরা দুপুরে প্রবেশ করো। তাবারী আশিয়্যানকে ধরেন আসরের নামাজে প্রাপ্য তাসবীহ, আর শেষ কথাটিকে যুহরের ওয়াক্তে প্রবেশ। এভাবে দুই আয়াত গোটা দিনটাকেই ছুঁয়ে যায়, তার দুই প্রান্ত থেকে মাঝখান পর্যন্ত।"
          },
          {
            "en": "al-Baghawi gives the same two readings: ashiyyan is to pray to God in the afternoon, the asr prayer, and when you enter the noon is the zuhr prayer. as-Sa'di gathers all of it: these are the five times of the five daily prayers, and at each God has commanded His servants both to glorify and to praise. He adds that the command reaches past the obligatory prayers to the recommended too, the morning and evening remembrances and the words said after the prayer.",
            "bn": "বাগভী একই দুটি ব্যাখ্যা দেন: আশিয়্যান মানে বিকেলে আল্লাহর উদ্দেশে নামাজ পড়া, অর্থাৎ আসরের নামাজ, আর 'যখন তোমরা দুপুরে প্রবেশ করো' মানে যুহরের নামাজ। সা'দী সবকিছু একসঙ্গে বলেন: এগুলো পাঁচ ওয়াক্ত নামাজের পাঁচটি সময়, আর প্রতিটি সময়ে আল্লাহ তাঁর বান্দাদের পবিত্রতা ঘোষণা আর প্রশংসা, দুটোরই আদেশ দিয়েছেন। তিনি আরও বলেন, এ আদেশ ফরজ নামাজ ছাড়িয়ে মুস্তাহাব আমল পর্যন্তও পৌঁছায়: সকাল-সন্ধ্যার জিকির, আর নামাজের পরে পড়ার জিকিরগুলো।"
          },
          {
            "en": "al-Qurtubi lingers over the word ashiyy itself. Drawing on the lexicographer al-Jawhari, he notes that ashiyy and ashiyya name the span from the maghrib prayer to the dark of late evening, and he traces the fine shades the Arabs gave the hour. Qatada, for his part, reads the four words of the two verses as four prayers plainly: maghrib, then fajr, then asr, then zuhr. Whether the word is weighed for its grammar or its worship, it keeps pointing at a real, locatable time in the turning day.",
            "bn": "কুরতুবী 'আশিয়্য' শব্দটির ওপরেই খানিক থামেন। অভিধানবিদ জাওহারীর সূত্রে তিনি বলেন, আশিয়্য ও আশিয়্যা বোঝায় মাগরিবের নামাজ থেকে রাতের অন্ধকার গাঢ় হওয়া পর্যন্ত সময়টা। এ সময়ের নানা সূক্ষ্ম ভাগ আরবরা কীভাবে করত, তা-ও তিনি দেখান। অন্যদিকে কাতাদা দুই আয়াতের চারটি শব্দকে সোজাসুজি চার নামাজ হিসেবে পড়েন: মাগরিব, তারপর ফজর, তারপর আসর, তারপর যুহর। শব্দটিকে ব্যাকরণ দিয়ে মাপা হোক বা ইবাদত দিয়ে, প্রতিবারই তা দিনের এমন এক বাস্তব সময়ের দিকে ইশারা করে, যা চিনে নেওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Are the Prayers Named Here?",
          "bn": "এখানে কি নামাজের নাম আছে?"
        },
        "p": [
          {
            "en": "Here the commentators stake out a famous claim. at-Tabari reports that Nafi ibn al-Azraq asked Ibn Abbas whether the times of the five prayers are found in the Book of God, and he said yes. He then read these words onto them: when you reach the evening is maghrib, when you reach the morning is fajr, ashiyyan is asr, and when you enter the noon is zuhr. The fifth, isha, he drew from a separate verse that names the prayer of isha (24:58). Mujahid and others carry the same mapping.",
            "bn": "এখানে তাফসীরকারেরা এক বিখ্যাত দাবি তোলেন। তাবারী বর্ণনা করেন, নাফি ইবন আল-আযরাক ইবন আব্বাসকে জিজ্ঞেস করেছিলেন, পাঁচ ওয়াক্ত নামাজের সময় কি আল্লাহর কিতাবে আছে? তিনি বললেন, হ্যাঁ। তারপর তিনি আয়াতের শব্দগুলো একেকটি নামাজের সঙ্গে মিলিয়ে দেখালেন: 'যখন সন্ধ্যায় উপনীত হও' মানে মাগরিব, 'যখন সকালে' ফজর, আশিয়্যান আসর, আর 'যখন দুপুরে প্রবেশ করো' যুহর। পঞ্চম নামাজ এশা তিনি নেন আরেকটি আয়াত থেকে, যেখানে এশার নামাজের নাম আছে (২৪:৫৮)। মুজাহিদ ও অন্যরাও একইভাবে মিলিয়েছেন।"
          },
          {
            "en": "Yet this is tafsir reading a sense into the words, not the plain wording itself. Ma'arif al-Qur'an says as much: the prayer is not named as such in the verse, so every kind of worship, in act or in speech, falls within it, and the prayer is only the foremost of these. Ibn Kathir reads the same two time-words without naming a prayer at all, taking ashiyyan as the hour of deepest dark and izhar as the brightest point of the day, a glory owed to the Maker of light and shade. The command to praise Him holds either way.",
            "bn": "তবে এটা তাফসীর: শব্দের ভেতর থেকে একটি অর্থ বের করে আনা, শব্দের সরাসরি কথা নয়। মাআরিফুল কুরআনও তা-ই বলে: আয়াতে নামাজের নাম সরাসরি নেই, তাই কাজে বা কথায় সব রকম ইবাদতই এর ভেতরে পড়ে, আর নামাজ তার মধ্যে প্রধান। ইবন কাসীর এই দুটি সময়-বাচক শব্দ কোনো নামাজের নাম না নিয়েই পড়েন। আশিয়্যান তাঁর কাছে সবচেয়ে গাঢ় অন্ধকারের সময়, আর ইযহার দিনের সবচেয়ে উজ্জ্বল মুহূর্ত। দুটোই আলো ও ছায়ার স্রষ্টার মহিমা ঘোষণার সময়। তাঁর প্রশংসার আদেশ দুই ব্যাখ্যাতেই বহাল থাকে।"
          },
          {
            "en": "One more voice rounds out the count. Hasan al-Basri held that when you reach the evening takes in both the maghrib and the isha prayers at once, which lets the single phrase carry two of the five. The readings differ on which word holds which prayer, and on whether the prayers are in the wording at all. What none of them touches is the duty itself. Whether the verse maps five prayers or commands a praise without limit, the servant is left with the same charge: turn to God through the whole turning of the day.",
            "bn": "আরও একটি মত হিসাবটা পূর্ণ করে। হাসান আল-বসরী মনে করতেন, 'যখন সন্ধ্যায় উপনীত হও' কথাটা মাগরিব আর এশা দুই নামাজকেই একসঙ্গে ধরে। ফলে একটিমাত্র বাক্যেই পাঁচের মধ্যে দুই নামাজ এসে যায়। কোন শব্দে কোন নামাজ, আর শব্দের ভেতরে আদৌ নামাজের কথা আছে কি না, এ নিয়ে ব্যাখ্যাগুলো ভিন্ন। কিন্তু দায়িত্বটা নিয়ে কোনো দ্বিমত নেই। আয়াতে পাঁচ ওয়াক্ত নামাজের হিসাব থাকুক বা সীমাহীন প্রশংসার আদেশ, বান্দার কাঁধে একই দায়িত্ব: দিনের প্রতিটি পালাবদলে আল্লাহর দিকে ফেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Evening Leads",
          "bn": "সন্ধ্যা কেন আগে"
        },
        "p": [
          {
            "en": "The order of the words repays attention. Evening is set before morning, and Ma'arif al-Qur'an gives the reason: in the reckoning of Islam the day turns at sunset, so evening comes first and the date changes at maghrib. al-Qurtubi notes the same, that the sequence opens with the maghrib prayer because the night runs ahead of the day. He contrasts it with Surat al-Isra, which opens its own prayer-list with zuhr, since zuhr was the first prayer Jibril led the Prophet in.",
            "bn": "শব্দগুলোর ক্রমও খেয়াল করার মতো। আয়াতে সন্ধ্যা এসেছে সকালের আগে, আর মাআরিফুল কুরআন এর কারণ বলে: ইসলামের হিসাবে দিন শুরু হয় সূর্যাস্তে, তাই সন্ধ্যা আসে আগে, আর তারিখ বদলায় মাগরিবে। কুরতুবীও একই কথা বলেন: তালিকা শুরু হয়েছে মাগরিবের নামাজ দিয়ে, কারণ রাত দিনের আগে আসে। তিনি এর সঙ্গে তুলনা করেন সূরা বনী ইসরাইলের। সেখানে নামাজের তালিকা শুরু হয়েছে যুহর দিয়ে, কারণ জিবরীল নবী ﷺ-কে প্রথম যে নামাজ পড়িয়েছিলেন, তা ছিল যুহর।"
          },
          {
            "en": "The afternoon then comes before the noon, which also asks for an explanation. Ma'arif al-Qur'an points to the asr prayer being the middle prayer, the one the Qur'an singles out for special care in 2:238, and to its falling at an hour when people are deep in their work and most apt to let it slip. Putting asr ahead of zuhr in the verse lends it the very weight that its timing threatens to take away. The order is not loose; it teaches.",
            "bn": "এরপর বিকেল এসেছে দুপুরের আগে, এরও ব্যাখ্যা দরকার। মাআরিফুল কুরআন দেখায়, আসরই মধ্যবর্তী নামাজ, যার ব্যাপারে কুরআন ২:২৩৮ আয়াতে বিশেষ যত্ন নিতে বলেছে। তা ছাড়া আসরের সময়টা এমন, যখন মানুষ কাজে ডুবে থাকে আর নামাজ ছুটে যাওয়ার ভয় সবচেয়ে বেশি। আয়াতে আসরকে যুহরের আগে রাখায় আসর ঠিক সেই গুরুত্ব পায়, যা তার সময়ের কারণে হারিয়ে যাওয়ার আশঙ্কা থাকে। এই ক্রম এলোমেলো নয়, এর ভেতরেও শিক্ষা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Said at Dawn and Dusk",
          "bn": "সকাল-সন্ধ্যায় যা পড়া হয়"
        },
        "p": [
          {
            "en": "One narration ties these verses to a daily practice. Abu Dawud records in his Sunan, from Ibn Abbas, that the Prophet said: whoever says in the morning, so glorify Allah when you reach the evening, through to and thus will you be brought out (30:17 to 30:19), will attain what he missed in his day; and whoever says them in the evening will attain what he missed in his night. Ibn Kathir, who carries the same chain, calls its isnad jayyid, a good chain of transmission.",
            "bn": "একটি বর্ণনা এই আয়াতগুলোকে প্রতিদিনের এক আমলের সঙ্গে জুড়ে দেয়। আবু দাউদ তাঁর সুনানে ইবন আব্বাস থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে ব্যক্তি সকালে 'অতএব আল্লাহর পবিত্রতা ঘোষণা কর যখন সন্ধ্যায় উপনীত হও' থেকে 'এভাবেই তোমাদের বের করা হবে' পর্যন্ত (৩০:১৭ থেকে ৩০:১৯) পড়বে, সে তার দিনে যা ছুটে গেছে তা পেয়ে যাবে; আর যে সন্ধ্যায় তা পড়বে, সে তার রাতে যা ছুটে গেছে তা পেয়ে যাবে। ইবন কাসীরও একই সনদে হাদিসটি এনেছেন এবং এর সনদকে বলেছেন জাইয়িদ, অর্থাৎ ভালো সূত্র।"
          },
          {
            "en": "Two further threads sit around the verse without being fastened to it. Ma'arif al-Qur'an and Ibn Kathir relate, on the authority of Muadh ibn Anas, that these were the words Ibrahim would say morning and evening, and that his saying them earned him the Qur'an's praise as the one who fulfilled (53:37). And al-Baghawi, under the verse, gathers several reports on the general merit of glorifying and praising God, such as saying subhan Allah wa bihamdihi a hundred times; these are not tied to this verse in particular, but they breathe its spirit.",
            "bn": "আয়াতটির আশপাশে আরও দুটি প্রসঙ্গ আছে, যদিও সেগুলো এর সঙ্গে সরাসরি বাঁধা নয়। মাআরিফুল কুরআন আর ইবন কাসীর মুআয ইবন আনাস থেকে বর্ণনা করেন, ইবরাহীম (আঃ) সকাল-সন্ধ্যায় এই কথাগুলোই বলতেন, আর এগুলো বলার কারণেই কুরআন তাঁর প্রশংসা করেছে 'যিনি পূর্ণ করেছেন' বলে (৫৩:৩৭)। আর বাগভী এই আয়াতের আলোচনায় আল্লাহর পবিত্রতা ও প্রশংসার সাধারণ ফযিলত নিয়ে কয়েকটি বর্ণনা জড়ো করেছেন, যেমন একশো বার 'সুবহানাল্লাহি ওয়া বিহামদিহি' বলা। এগুলো বিশেষভাবে এই আয়াতের সঙ্গে যুক্ত নয়, তবে এদের মধ্যে আয়াতেরই প্রাণ বইছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining What Never Stops",
          "bn": "অবিরাম প্রশংসায় শামিল হওয়া"
        },
        "p": [
          {
            "en": "Step back and the verse hands the believer a shape for the day. Its hours are not a flat stretch of time but a series of turnings, and at each turning there is a word to be said. The day is not asked to stop for worship; worship is woven into its joints, at its edges and at its heights, so that no long stretch passes with the heart turned away. A life lived like this is bracketed by remembrance and punctuated by it, never left to run on empty.",
            "bn": "একটু দূর থেকে দেখলে বোঝা যায়, আয়াত মুমিনের হাতে দিনটার একটা কাঠামো তুলে দেয়। দিনের সময়গুলো একটানা সমান কোনো বিস্তার নয়, বরং পরপর কয়েকটি মোড়, আর প্রতিটি মোড়ে বলার মতো একটা কথা আছে। ইবাদতের জন্য দিনকে থামিয়ে দিতে বলা হয়নি। ইবাদত বরং বোনা আছে দিনের জোড়ে জোড়ে, তার দুই প্রান্তে আর ভরদুপুরে, যাতে অন্তর আল্লাহ থেকে মুখ ফিরিয়ে লম্বা সময় কাটিয়ে না দেয়। এভাবে কাটানো জীবনের শুরু আর শেষ জিকিরে ঘেরা, মাঝেও থেমে থেমে জিকির। সে জীবন কখনো খালি হয়ে চলে না।"
          },
          {
            "en": "And the verse has already told the believer that he is not alone in it. The praise he offers belongs, first and last, to the One it names, and it is rising from the heavens and the earth whether he joins it or not. To say it at his own appointed hours is to fall into step with the angels above and every creature below, to let his small voice be carried on a praise that fills all space and keeps no silence. The day, rightly held, becomes a long act of worship with its seams showing.",
            "bn": "আর আয়াত মুমিনকে আগেই জানিয়ে দিয়েছে, এ কাজে সে একা নয়। সে যে প্রশংসা করে, তা শুরু থেকে শেষ পর্যন্ত সেই সত্তারই প্রাপ্য, আয়াত যাঁর কথা বলছে। আর সে যোগ দিক বা না দিক, সেই প্রশংসা আসমান ও যমীন থেকে উঠছেই। নিজের নির্ধারিত সময়ে তা বলা মানে ওপরের ফেরেশতা আর নিচের প্রতিটি সৃষ্টির সঙ্গে তাল মেলানো। নিজের ক্ষীণ কণ্ঠটা তখন মিশে যায় এমন এক প্রশংসায়, যা সারা মহাশূন্য ভরে রাখে, কখনো থামে না। দিনটাকে ঠিকভাবে ধরে রাখলে পুরো দিনটাই হয়ে ওঠে এক দীর্ঘ ইবাদত, যার প্রতিটি জোড় স্পষ্ট চোখে পড়ে।"
          }
        ]
      }
    ]
  },
  "30:21": {
    "sections": [
      {
        "h": {
          "en": "A Second Sign in the Run",
          "bn": "নিদর্শনের সারিতে দ্বিতীয়টি"
        },
        "p": [
          {
            "en": "Wa min ayatihi: and among His signs. Six sentences in a row in Surah ar-Rum open with these words. Creation from dust comes first, in 30:20, then this verse on spouses, then the heavens and the earth with the variety of tongues and colours (30:22), sleep by night and day with the seeking of His bounty (30:23), lightning and rain (30:24), and the sky and earth standing by His command (30:25). Ma'arif al-Qur'an calls this verse the second sign of divine power, and 30:22 the third.",
            "bn": "ওয়া মিন আয়াতিহী: আর তাঁর নিদর্শনের মধ্যে। সূরা রূমে পরপর ছয়টি বাক্য শুরু হয়েছে এই কথা দিয়ে। প্রথমটি ৩০:২০, মাটি থেকে সৃষ্টি আর মানুষের চারদিকে ছড়িয়ে পড়া। তারপর এই আয়াত, জীবনসঙ্গীর কথা। এরপর আসে আসমান-যমীন আর ভাষা ও বর্ণের বৈচিত্র্য (৩০:২২), রাত-দিনের ঘুম আর তাঁর অনুগ্রহ খোঁজা (৩০:২৩), বিদ্যুৎ ও বৃষ্টি (৩০:২৪), শেষে তাঁর হুকুমে আকাশ ও পৃথিবীর দাঁড়িয়ে থাকা (৩০:২৫)। মাআরিফুল কুরআন এই আয়াতকে বলে আল্লাহর কুদরতের দ্বিতীয় নিদর্শন, আর ৩০:২২-কে তৃতীয়।"
          },
          {
            "en": "The commentators read the first two signs as a pair. Ibn Kathir's abridged commentary treats 30:20 and 30:21 as one passage: Adam made from dust, then his wife from him. Al-Qurtubi joins them under it is said: the man's origin is from the earth and he carries its force, so he needs a sakan, a place of rest, and woman was created as that rest for him; At-Tabari opens by calling it another of Allah's proofs and evidences for the point the verses before it are making.",
            "bn": "তাফসীরকারেরা প্রথম দুটি নিদর্শনকে জোড়া হিসেবে পড়েন। ইবন কাসীরের সংক্ষিপ্ত তাফসীর ৩০:২০ ও ৩০:২১ একটি অংশ হিসেবে একসাথে আলোচনা করে: মাটি থেকে আদম (আঃ), তারপর তাঁর থেকে তাঁর স্ত্রী। কুরতুবী 'বলা হয়' কথাটি দিয়ে দুটিকে জুড়ে দেন। পুরুষের মূল মাটি থেকে, তার ভেতরে মাটির শক্তি। তাই তার দরকার এক সাকান, স্থির হওয়ার জায়গা, আর নারীকে সৃষ্টি করা হয়েছে তার সেই আশ্রয় করে। তাবারী শুরুতেই বলেন, আগের আয়াতগুলো যে কথা প্রমাণ করছে, এটিও তার পক্ষে আল্লাহর আরেকটি প্রমাণ ও দলিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Of Your Own Kind",
          "bn": "তোমাদেরই জাত থেকে"
        },
        "p": [
          {
            "en": "Khalaqa lakum min anfusikum azwajan: He created for you, from yourselves, spouses. The plain gloss of min anfusikum is from your own kind. Ibn Kathir explains it as females of your own genus, made to be your wives. The Muyassar says the same and names whom it addresses: from your kind, O men. Al-Qurtubi gives from the seed of men and from your kind. As-Sa'di frames it as a fit that runs both ways: spouses who suit you and whom you suit, who resemble you and whom you resemble.",
            "bn": "খালাকা লাকুম মিন আনফুসিকুম আযওয়াজা: তিনি তোমাদের জন্য তোমাদের থেকেই জোড়া সৃষ্টি করেছেন। মিন আনফুসিকুম কথাটির সহজ ব্যাখ্যা: তোমাদেরই জাত থেকে। ইবন কাসীর বলেন, তোমাদের নিজের জাতের নারী, যাতে তারা তোমাদের স্ত্রী হয়। মুয়াসসারও তাই বলে, আর কাকে সম্বোধন করছে তাও জানিয়ে দেয়: হে পুরুষেরা, তোমাদের জাত থেকে। কুরতুবীর ব্যাখ্যা: পুরুষের বীর্য থেকে আর তোমাদের জাত থেকে। সা'দী বিষয়টা দেখেন দুই দিক থেকে মিলে যাওয়ার কথা হিসেবে। তারা তোমাদের উপযুক্ত, তোমরাও তাদের উপযুক্ত। তারা তোমাদের মতো, তোমরাও তাদের মতো।"
          },
          {
            "en": "A second gloss reads the phrase through Adam (AS). At-Tabari explains it as Allah creating for your father Adam a wife from his own self, and reports from Qatada, with his chain, that she was created from one of his ribs. Ibn Kathir cites 7:189, He created you from a single soul and made from it its mate, that he might find rest in her, and says it refers to Hawwa, created from Adam's shortest left rib. These are the commentators' reports. Al-Qurtubi lists it second, as it is said, naming Qatada; al-Baghawi gives both glosses and picks neither.",
            "bn": "দ্বিতীয় এক ব্যাখ্যা বাক্যাংশটিকে পড়ে আদম (আঃ)-এর সূত্রে। তাবারীর ব্যাখ্যায়, আল্লাহ তোমাদের পিতা আদমের জন্য তাঁর নিজের থেকেই স্ত্রী সৃষ্টি করেছেন। নিজের সনদে তিনি কাতাদা থেকে বর্ণনা করেন, তাঁকে সৃষ্টি করা হয়েছিল আদমের পাঁজরের একটি হাড় থেকে। ইবন কাসীর ৭:১৮৯ উদ্ধৃত করেন: তিনিই তোমাদের সৃষ্টি করেছেন এক প্রাণ থেকে, আর তা থেকেই বানিয়েছেন তার জোড়া, যাতে সে তার কাছে শান্তি পায়। তাঁর মতে এখানে উদ্দেশ্য হাওয়া, যাঁকে আদমের বাম দিকের সবচেয়ে ছোট পাঁজর থেকে সৃষ্টি করা হয়েছে। এগুলো তাফসীরকারদের বর্ণনা। কুরতুবী মতটি আনেন দ্বিতীয় স্থানে, 'বলা হয়' দিয়ে, কাতাদার নাম উল্লেখ করে। বাগাভী দুটি ব্যাখ্যাই দেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "Ibn Kathir then asks the reader to imagine the alternative. Had Allah made all of Adam's children male and created their females from another kind, from the jinn or from animals, there would have been no harmony between them and their spouses, only aversion. It is from the completeness of His mercy, he says, that their wives are of their own kind. Ma'arif al-Qur'an adds the other half of the picture: man and woman are made of the same matter, yet differ widely in build, appearance, character and disposition, and even this, it says, shows His power.",
            "bn": "এরপর ইবন কাসীর পাঠককে উল্টোটা ভেবে দেখতে বলেন। আল্লাহ যদি আদমের সব সন্তানকে পুরুষ বানাতেন, আর তাদের নারীদের সৃষ্টি করতেন অন্য কোনো জাত থেকে, জিন বা পশু থেকে, তাহলে স্বামী-স্ত্রীর মধ্যে কোনো মিল গড়ে উঠত না। থাকত কেবল বিতৃষ্ণা। তাঁর ভাষায়, মানুষের প্রতি আল্লাহর পূর্ণ রহমতেরই অংশ যে তাদের স্ত্রীরা তাদেরই জাতের। মাআরিফুল কুরআন ছবির বাকি অর্ধেকটা যোগ করে। নারী ও পুরুষ একই উপাদানে গড়া, অথচ গড়ন, চেহারা, স্বভাব আর মেজাজে তাদের মধ্যে বিস্তর ফারাক। তার মতে এটুকুও আল্লাহর কুদরতের প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Toward Her, at Rest",
          "bn": "তার কাছে গিয়ে স্থির হওয়া"
        },
        "p": [
          {
            "en": "Li-taskunu ilayha: so that you may find rest in them. The Muyassar unfolds the verb into two: so that your souls are at ease with them and settle. Ibn Kathir sets the clause beside 7:189, where the same verb returns in the singular, li-yaskuna ilayha, that he might find rest in her. As-Sa'di, listing what marriage brings, places this sukun beside enjoyment and the benefit of children and their upbringing.",
            "bn": "লিতাসকুনূ ইলাইহা: যাতে তোমরা তাদের কাছে প্রশান্তি পাও। মুয়াসসার ক্রিয়াটিকে দুই ভাগে খুলে বলে: যাতে তাদের কাছে তোমাদের মন নিশ্চিন্ত হয় আর স্থির হয়। ইবন কাসীর বাক্যাংশটিকে রাখেন ৭:১৮৯ আয়াতের পাশে। সেখানে একই ক্রিয়া এসেছে একবচনে, লিয়াসকুনা ইলাইহা, যাতে সে তার কাছে শান্তি পায়। বিয়ে থেকে যা যা পাওয়া যায় তার তালিকা দিতে গিয়ে সা'দী এই সুকূনকে রাখেন দাম্পত্যের আনন্দ, সন্তান লাভ ও তাদের লালনপালনের পাশাপাশি।"
          },
          {
            "en": "Ma'arif al-Qur'an makes much of the single word. If one ponders, it says, everything a man seeks from a woman ends in peace of mind and comfort, and the Qur'an gathered all of it into one word. So a couple that has this peace has reached the purpose of the bond, and a home deprived of it has failed in its married life. Ma'arif adds that the foundation of such peace is a lawful marriage, and that pleasure outside it may last a moment but brings no lasting rest.",
            "bn": "মাআরিফুল কুরআন এই একটি শব্দ থেকে অনেক কিছু বের করে আনে। তার কথা, একটু ভাবলেই দেখা যায়, নারীর কাছে পুরুষের যত চাওয়া, সবই গিয়ে শেষ হয় মনের শান্তি আর স্বস্তিতে। কুরআন সবটাকে এক শব্দে বেঁধে দিয়েছে। যে দম্পতি এই শান্তি পেয়েছে, তারা বিয়ের উদ্দেশ্যে সফল। যে পরিবার এই শান্তি থেকে বঞ্চিত, দাম্পত্যে তারা ব্যর্থ। মাআরিফ আরও বলে, এমন শান্তির ভিত্তি হলো বৈধ বিয়ে। বিয়ের বাইরের ভোগ ক্ষণিকের আনন্দ দিতে পারে, স্থায়ী প্রশান্তি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Set Between the Two",
          "bn": "দুজনের মাঝে রাখা দান"
        },
        "p": [
          {
            "en": "Wa ja'ala baynakum mawaddatan wa rahmah: and He placed between you affection and mercy. The verb is ja'ala, He made or placed, so the bond is credited to Allah; and the place is baynakum, between you, so it runs in both directions. Al-Baghawi brings out the reciprocity with two verbs of mutual action: they love each other and show mercy to each other, and nothing is dearer to either of them than the other, though there is no tie of kinship between them. The Muyassar names both parties: between the woman and her husband, love and compassion.",
            "bn": "ওয়া জাআলা বাইনাকুম মাওয়াদ্দাতান ওয়া রাহমাহ: আর তিনি তোমাদের মাঝে রেখে দিয়েছেন ভালোবাসা ও দয়া। ক্রিয়াটি জাআলা, তিনি বানিয়েছেন বা রেখেছেন। বন্ধনের কৃতিত্ব তাই আল্লাহর। আর জায়গাটা বাইনাকুম, তোমাদের মাঝে, ফলে তা চলে দুই দিকেই। বাগাভী এই পারস্পরিকতা ফুটিয়ে তোলেন দুটি ক্রিয়ায়, যার প্রতিটিতে কাজটা পরস্পরের: তারা একে অপরকে ভালোবাসে, একে অপরকে দয়া করে। তাঁর ভাষায়, রক্তের কোনো সম্পর্ক ছাড়াই দুজনের কারও কাছে অপরজনের চেয়ে প্রিয় আর কিছু নেই। মুয়াসসার দুই পক্ষেরই নাম নেয়: স্ত্রী ও তার স্বামীর মাঝে ভালোবাসা ও মমতা।"
          },
          {
            "en": "Ibn Kathir gives the two nouns their simplest equivalents: mawaddah is love, rahmah is tenderness. Ma'arif al-Qur'an notes that wudd and mawaddah mean a liking that ripens into love, and draws a comparison. Allah did not leave the bond between spouses as a legal and religious tie alone; He filled their hearts with love and compassion, just as He set in parents' hearts a natural love that moves them to protect their children more than themselves, and a measure of love in children for their parents.",
            "bn": "ইবন কাসীর দুটি শব্দের সবচেয়ে সরল অর্থ দেন: মাওয়াদ্দাহ মানে ভালোবাসা, রাহমাহ মানে কোমলতা। মাআরিফুল কুরআন বলে, উদ্দ ও মাওয়াদ্দাহর আসল অর্থ পছন্দ, যা পরে ভালোবাসায় রূপ নেয়। তারপর একটি তুলনা টানে। স্বামী-স্ত্রীর সম্পর্ককে আল্লাহ কেবল আইনি ও দ্বীনি বন্ধন হিসেবে রেখে দেননি, তাদের অন্তর ভরে দিয়েছেন ভালোবাসা ও মমতায়। ঠিক যেমন মা-বাবার অন্তরে তিনি এমন স্বাভাবিক মায়া রেখেছেন যে তাঁরা নিজেদের চেয়ে সন্তানকে বেশি আগলে রাখেন, আর সন্তানের অন্তরেও রেখেছেন মা-বাবার প্রতি খানিকটা টান।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Pair Is Read",
          "bn": "জোড়া শব্দের নানা পাঠ"
        },
        "p": [
          {
            "en": "The commentators read the pair in several genuine ways and do not settle on one. Al-Qurtubi reports from Ibn Abbas and Mujahid, and says al-Hasan held it too, that mawaddah here is intimacy and rahmah is the child. Ibn Kathir's explanation leans partly the same way: a man keeps a woman, he says, either for his love of her, or out of mercy towards her because she has a child by him, or because she needs his provision, or for the familiarity between them, among other reasons.",
            "bn": "তাফসীরকারেরা জোড়াটিকে কয়েকটি প্রকৃত ভিন্ন উপায়ে পড়েন, আর কোনো একটিতে স্থির হন না। কুরতুবী ইবন আব্বাস (রাঃ) ও মুজাহিদ থেকে বর্ণনা করেন, আর বলেন আল-হাসানও একই মত দিয়েছেন: এখানে মাওয়াদ্দাহ মানে দাম্পত্য মিলন, আর রাহমাহ মানে সন্তান। ইবন কাসীরের ব্যাখ্যাও খানিকটা এই দিকে ঝোঁকে। তাঁর কথায়, পুরুষ নারীকে ধরে রাখে হয় তার প্রতি ভালোবাসার টানে, নয়তো দয়ায়, কারণ তার ঔরসে স্ত্রীর সন্তান হয়েছে। কিংবা খরচের জন্য সে তার মুখাপেক্ষী, কিংবা দুজনের মধ্যে গড়ে ওঠা মায়ার কারণে, আরও নানা কারণে।"
          },
          {
            "en": "A second reading keeps both words in the heart. As-Suddi, in al-Qurtubi's report, says mawaddah is love and rahmah is tenderness, and al-Qurtubi relates a like meaning from Ibn Abbas: mawaddah is a man's love for his wife, and rahmah his mercy towards her that keeps him from bringing harm on her. Al-Qurtubi also records, without naming anyone, that the two words together mean the inclining of their hearts towards each other. Here the pair describes two movements of the heart rather than two things a marriage produces.",
            "bn": "দ্বিতীয় পাঠ দুটি শব্দকেই অন্তরের ভেতরে রাখে। কুরতুবীর বর্ণনায় সুদ্দী বলেন, মাওয়াদ্দাহ মানে ভালোবাসা আর রাহমাহ মানে মমতা। ইবন আব্বাস (রাঃ) থেকেও কুরতুবী এমন অর্থ বর্ণনা করেন: মাওয়াদ্দাহ হলো স্ত্রীর প্রতি পুরুষের ভালোবাসা, আর রাহমাহ হলো তার প্রতি সেই দয়া, যা তাকে স্ত্রীর কোনো ক্ষতি করা থেকে বিরত রাখে। কারও নাম না নিয়ে কুরতুবী আরেকটি মতও লেখেন: দুটি শব্দ মিলে বোঝায় একে অপরের দিকে তাদের অন্তরের ঝুঁকে থাকা। এই পাঠে জোড়াটি দাম্পত্যের ফল নয়, অন্তরের দুটি টান।"
          },
          {
            "en": "A third reading spreads the pair across a lifetime. Ma'arif al-Qur'an, citing al-Qurtubi, suggests that mawaddah belongs to youth, when spouses are drawn to each other, and rahmah to old age, when passions subside and compassion takes over. A fourth looks at what joins two people who share no blood. At-Tabari says Allah placed between you, through marriage and the in-law ties it creates, an affection by which you love one another and keep ties, and a mercy by which He inclined you to each other. Al-Baghawi's no tie of kinship points the same way.",
            "bn": "তৃতীয় পাঠ জোড়াটিকে ছড়িয়ে দেয় গোটা জীবনের উপর। মাআরিফুল কুরআন কুরতুবীর বরাতে বলে, হতে পারে মাওয়াদ্দাহ যৌবনের, যখন স্বামী-স্ত্রী একে অপরের প্রতি আকর্ষণ বোধ করে। আর রাহমাহ বার্ধক্যের, যখন আবেগ থিতিয়ে আসে আর তার জায়গা নেয় পরস্পরের প্রতি মমতা। চতুর্থ পাঠের নজর সেই জিনিসের দিকে, যা রক্তের সম্পর্কহীন দুজনকে বেঁধে রাখে। তাবারী বলেন, বিয়ে আর তা থেকে গড়ে ওঠা বৈবাহিক আত্মীয়তার মাধ্যমে আল্লাহ তোমাদের মাঝে রেখেছেন এমন ভালোবাসা, যা দিয়ে তোমরা পরস্পরকে ভালোবাসো আর সম্পর্ক রক্ষা করো। আর রেখেছেন এমন রহমত, যা দিয়ে তিনি তোমাদের একে অপরের প্রতি সদয় করেছেন। বাগাভীর 'রক্তের সম্পর্ক ছাড়াই' কথাটিও একই দিকে ইঙ্গিত করে।"
          },
          {
            "en": "As-Sa'di folds several of these together. Allah placed love and mercy between spouses, he says, through the causes He attached to marriage: enjoyment and pleasure, the benefit of children and their upbringing, and rest in one another. He concludes that you will seldom find between any two people the like of the love and mercy between husband and wife. The readings do not cancel each other, and this article chooses none of them.",
            "bn": "সা'দী এগুলোর কয়েকটিকে এক জায়গায় মিলিয়ে দেন। তাঁর মতে, বিয়ের সাথে আল্লাহ যেসব উপকরণ জুড়ে দিয়েছেন, সেগুলোর মাধ্যমেই তিনি দুজনের মাঝে ভালোবাসা ও দয়া এনেছেন: দাম্পত্যের আনন্দ ও তৃপ্তি, সন্তান লাভ ও তাদের লালনপালন, আর একে অপরের কাছে প্রশান্তি। তাঁর উপসংহার, সাধারণত আর কোনো দুজন মানুষের মধ্যে স্বামী-স্ত্রীর মতো ভালোবাসা ও দয়া খুঁজে পাওয়া যায় না। পাঠগুলো একটি আরেকটিকে বাতিল করে না, আর এই লেখা কোনোটিকেই বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs, Not One Sign",
          "bn": "এক নয়, বহু নিদর্শন"
        },
        "p": [
          {
            "en": "The verse names one thing and then says: inna fi dhalika la-ayatin, in that are signs, in the plural. Ma'arif al-Qur'an stops on this. One sign is mentioned, yet the word is plural, because the bond of marriage has many aspects and many benefits, religious and worldly; taken together, it holds a number of signs of Allah's power. At-Tabari reads the plural as lessons and admonitions: from what Allah does here, people learn that He is the God whom nothing He wills can defeat, and for whom nothing He wishes is out of reach.",
            "bn": "আয়াত একটিমাত্র জিনিসের কথা বলে, তারপর বলে: ইন্না ফী যালিকা লাআয়াত, এতে আছে নিদর্শনসমূহ, বহুবচনে। মাআরিফুল কুরআন এখানে থামে। নিদর্শন একটির কথাই বলা হয়েছে, তবু শব্দটি বহুবচন। কারণ দাম্পত্য সম্পর্কের দিক অনেক, দ্বীনি ও দুনিয়াবি উপকারও অনেক। সব মিলিয়ে দেখলে এই এক সম্পর্কেই আল্লাহর কুদরতের বহু নিদর্শন। তাবারী বহুবচনটিকে পড়েন শিক্ষা ও উপদেশ হিসেবে। আল্লাহর এই কাজ দেখে মানুষ বুঝতে পারে, তিনিই সেই ইলাহ, যিনি কিছু চাইলে কোনো কিছুই তাঁকে অক্ষম করতে পারে না, আর যা তিনি ইচ্ছা করেন তা তাঁর জন্য কখনো কঠিন হয় না।"
          },
          {
            "en": "Then the audience: li-qawmin yatafakkarun, for a people who reflect. As-Sa'di describes them as people who put their thoughts to work, ponder Allah's signs and move on from thing to thing. Al-Baghawi says they reflect on Allah's greatness and power; the Muyassar, on signs that point to His power and His oneness. On this reading an ordinary household becomes a text. The calm two people find in each other, and the mercy that outlasts a quarrel, are evidence to be read and traced back to Him who placed it.",
            "bn": "এরপর শ্রোতা: লিকাওমিই ইয়াতাফাক্কারূন, সেই লোকদের জন্য যারা চিন্তা করে। সা'দী তাদের বর্ণনা দেন এভাবে: তারা নিজেদের চিন্তাকে কাজে লাগায়, আল্লাহর নিদর্শন নিয়ে ভাবে, এক বিষয় থেকে আরেক বিষয়ে এগিয়ে যায়। বাগাভী বলেন, তারা ভাবে আল্লাহর মহত্ত্ব ও কুদরত নিয়ে। মুয়াসসার বলে, তারা ভাবে সেই নিদর্শন নিয়ে যা তাঁর কুদরত ও একত্বের দিকে ইশারা করে। এভাবে পড়লে সাধারণ সংসারও হয়ে ওঠে পড়ার মতো এক লেখা। দুজন মানুষ একে অপরের কাছে যে স্থিরতা পায়, ঝগড়ার পরও যে দয়া টিকে থাকে, সবই সাক্ষ্য। তা পড়তে হয়, আর পৌঁছাতে হয় তাঁর কাছে, যিনি তা রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Courts Fall Short",
          "bn": "আদালত যেখানে পৌঁছায় না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws a practical consequence from the word rest. Peace in a marriage, it says, comes only when each spouse recognises the other's rights and sincerely tries to fulfil them; when each demands only their own, quarrels follow and the peace breaks. Laws alone rarely correct people without taqwa nurtured in the heart, so the Qur'an pairs its social rulings with the command to fear Allah. The bond between husband and wife is so delicate that no law can secure it fully and no court can do it full justice.",
            "bn": "প্রশান্তি শব্দটি থেকে মাআরিফুল কুরআন একটি বাস্তব সিদ্ধান্ত টানে। তার কথা, দাম্পত্যে শান্তি আসে তখনই, যখন দুজনই অপরের হক চেনে আর আন্তরিকভাবে তা আদায়ের চেষ্টা করে। প্রত্যেকে যদি শুধু নিজের হক চায়, ঝগড়া বাধে, শান্তি ভেঙে যায়। কেবল আইন দিয়ে মানুষ সাধারণত শোধরায় না, যদি না অন্তরে তাকওয়া গড়ে তোলা হয়। এ কারণেই কুরআন সামাজিক বিধানের সাথে আল্লাহকে ভয় করার নির্দেশ জুড়ে দেয়। স্বামী-স্ত্রীর সম্পর্ক এত নাজুক যে কোনো আইন তা পুরোপুরি নিশ্চিত করতে পারে না, কোনো আদালতও তার পূর্ণ বিচার করতে পারে না।"
          },
          {
            "en": "For that reason, Ma'arif says, the Prophet ﷺ chose for the nikah sermon verses that stress piety, the fear of Allah and the Hereafter, since only these qualities in the spouses can stand guarantor for their rights. And Allah did not make those rights a matter of rules alone; He set love and mercy in the heart to carry them. Of the fetched commentaries, only al-Qurtubi attaches a narration here, inside a juristic aside on marital rights, and none attaches one to the affection and mercy the verse names, so this article quotes none.",
            "bn": "মাআরিফুল কুরআনের কথা, এ কারণেই নবী ﷺ বিয়ের খুতবার জন্য বেছে নিয়েছিলেন সেই আয়াতগুলো, যেখানে জোর দেওয়া হয়েছে তাকওয়া, আল্লাহর ভয় আর আখিরাতের উপর। কারণ স্বামী-স্ত্রীর ভেতরে এই গুণগুলোই কেবল পরস্পরের হক আদায়ের জামিন হতে পারে। তা ছাড়া আল্লাহ এই হকগুলোকে নিছক নিয়মকানুনে আটকে রাখেননি, সেগুলো বহন করার জন্য অন্তরে রেখেছেন ভালোবাসা ও দয়া। যেসব তাফসীর দেখা হয়েছে, তার মধ্যে কেবল কুরতুবী এখানে একটি বর্ণনা আনেন, তাও দাম্পত্য হক নিয়ে এক ফিকহি আলোচনার ভেতরে। আয়াতে বলা ভালোবাসা ও দয়ার সাথে কেউই কোনো বর্ণনা জোড়েননি, তাই এ লেখায় কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Sign at Home",
          "bn": "ঘরের ভেতরে নিদর্শন পড়া"
        },
        "p": [
          {
            "en": "The verse speaks of something placed between two people, so its first question is for each spouse about themselves, not about the other. Is my presence a place where the other can find rest? When affection runs thin, is mercy still there? Al-Baghawi's mutual verbs leave no room for one side to keep the account while the other pays it; love and mercy, in his wording, are given and received by both. Husband and wife read the same sentence, and it asks the same of each.",
            "bn": "আয়াতটি দুজন মানুষের মাঝে রাখা কোনো কিছুর কথা বলে। তাই এর প্রথম প্রশ্ন প্রত্যেক স্বামী ও স্ত্রীর কাছে নিজের সম্পর্কে, অপরজনের সম্পর্কে নয়। আমার উপস্থিতি কি এমন জায়গা, যেখানে অপরজন স্থির হতে পারে? ভালোবাসা যখন পাতলা হয়ে আসে, তখনো কি দয়াটুকু আছে? বাগাভীর পারস্পরিক ক্রিয়াগুলো এমন সুযোগ রাখে না যে একজন শুধু হিসাব রাখবে আর অন্যজন শুধু দেনা শোধ করবে। তাঁর ভাষায় ভালোবাসা ও দয়া দুজনই দেয়, দুজনই পায়। স্বামী ও স্ত্রী যখন এ আয়াত পড়েন, তাঁরা একই বাক্য পড়েন, আর তা দুজনের কাছে একই জিনিস চায়।"
          },
          {
            "en": "The commentators' readings can also be lived. Where the youth-and-age reading holds, a marriage carried by mercy in years when desire has quieted is not failing; it is living the second half of the clause. Ibn Kathir's list of what holds a marriage together, love, mercy, need and familiarity, need not be read as a ranking of better and worse bonds. It can describe how Allah keeps two people together through changing seasons. Gratitude for whichever of these is present is the fitting answer to a gift.",
            "bn": "তাফসীরকারদের পাঠগুলো জীবনেও খাটানো যায়। যৌবন ও বার্ধক্যের পাঠ ধরলে, কামনা থিতিয়ে আসার বছরগুলোতে যে বিয়ে দয়ার উপর টিকে আছে, তা ব্যর্থ নয়। সে বেঁচে আছে বাক্যের দ্বিতীয় অর্ধেক নিয়ে। বিয়ে টিকে থাকার যে কারণগুলো ইবন কাসীর গুনিয়েছেন, ভালোবাসা, দয়া, প্রয়োজন আর মায়া, সেগুলোকে ভালো-মন্দ বন্ধনের ক্রম ভাবার দরকার নেই। বরং বদলে যাওয়া ঋতুতে আল্লাহ কীভাবে দুজনকে একসাথে রাখেন, এ তারই বিবরণ। এর যেটিই উপস্থিত থাকুক, তার জন্য কৃতজ্ঞতাই দানের যোগ্য জবাব।"
          },
          {
            "en": "The verse also speaks to the reader who is not married, or no longer is. It is addressed to a people who reflect, not only to couples, and what it asks them to reflect on is that bonds of love and mercy are Allah's to place. Ma'arif al-Qur'an sets the love of parents and children on the same pattern, and that love is placed too. A single reader can thank Allah for the mercy He has set in any of their ties, and ask the One who places affection between hearts for whatever is still to come.",
            "bn": "যিনি বিবাহিত নন, বা আর নন, আয়াত তাঁর সাথেও কথা বলে। এর সম্বোধন চিন্তাশীল লোকদের প্রতি, শুধু দম্পতিদের প্রতি নয়। আর যা নিয়ে ভাবতে বলা হয়েছে তা এই: ভালোবাসা ও দয়ার বন্ধন রাখেন আল্লাহ। মাআরিফুল কুরআন মা-বাবা ও সন্তানের ভালোবাসাকে একই ছাঁচে দেখে, আর সেই ভালোবাসাও তাঁরই রাখা। একা মানুষও নিজের যেকোনো সম্পর্কে আল্লাহর রাখা দয়ার জন্য শুকরিয়া আদায় করতে পারেন। আর যিনি অন্তরে অন্তরে ভালোবাসা রাখেন, সামনে যা আসবে তার জন্য তাঁর কাছেই চাইতে পারেন।"
          }
        ]
      }
    ]
  },
  "30:22": {
    "sections": [
      {
        "h": {
          "en": "The Third of Six Signs",
          "bn": "ছয় নিদর্শনের তৃতীয়টি"
        },
        "p": [
          {
            "en": "This verse belongs to a run. Six consecutive verses, 30:20 to 30:25, each open with the same phrase: and of His signs. They name the creation of man from dust, the spouses in whom hearts find rest, the heavens and the earth together with the difference of tongues and colours, sleep by night and day alongside the search for provision, the lightning and the rain, and finally the heavens and the earth standing firm by His command. Our verse is the third of them.",
            "bn": "এই আয়াত একটি সারির অংশ। পরপর ছয়টি আয়াত, ৩০:২০ থেকে ৩০:২৫ পর্যন্ত, প্রতিটি শুরু হয় একই কথায়: আর তাঁর নিদর্শনগুলোর মধ্যে। এগুলোতে আছে মাটি থেকে মানুষের সৃষ্টি; সেই জীবনসঙ্গীরা, যাদের কাছে হৃদয় প্রশান্তি পায়; আসমান ও যমীন, সঙ্গে ভাষা ও বর্ণের ভিন্নতা; রাতে ও দিনে ঘুম আর রিযিকের খোঁজ; বিদ্যুৎ ও বৃষ্টি; আর শেষে তাঁর হুকুমে আসমান ও যমীনের স্থির থাকা। আমাদের আয়াতটি এদের তৃতীয়।"
          },
          {
            "en": "Four of the six close by naming an audience, and each names a different one. 30:21 ends with a people who give thought, 30:22 with those of knowledge, 30:23 with a people who listen, 30:24 with a people who use reason. The variation is not filler. Different signs are opened by different capacities, and this verse has been assigned to knowledge. That assignment is the first thing to explain about it.",
            "bn": "ছয়টির মধ্যে চারটি শেষ হয় শ্রোতাদের পরিচয় দিয়ে, আর প্রত্যেকটিতে পরিচয় আলাদা। ৩০:২১ শেষ হয় 'যারা চিন্তা করে' দিয়ে, ৩০:২২ 'জ্ঞানীদের জন্য' দিয়ে, ৩০:২৩ 'যারা শোনে' দিয়ে, আর ৩০:২৪ 'যারা বুদ্ধি খাটায়' দিয়ে। এই ভিন্নতা অকারণে নয়। একেক নিদর্শনের দরজা খোলে একেক সামর্থ্যে, আর এই আয়াতের ভার পড়েছে জ্ঞানের ওপর। এ আয়াত নিয়ে প্রথমে সেটাই বুঝিয়ে বলতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Galaxies and Accents Together",
          "bn": "ছায়াপথ আর উচ্চারণ একসঙ্গে"
        },
        "p": [
          {
            "en": "The striking thing about the sentence is what it puts in one breath. The creation of the heavens and the earth — the largest object anyone can point at — and the difference of your languages and your colours, which is the most ordinary fact about the room you are sitting in. Arabic joins them with a single wa, and the verse does not apologise for the pairing or rank one above the other. Both are listed as ayat, signs, on equal footing.",
            "bn": "বাক্যটির চমক হলো, এটি এক নিঃশ্বাসে কী কী বলে ফেলে। একদিকে আসমান ও যমীনের সৃষ্টি, আঙুল তুলে দেখানো যায় এমন সবচেয়ে বিশাল জিনিস। অন্যদিকে তোমাদের ভাষা ও বর্ণের ভিন্নতা, আপনি যে ঘরে বসে আছেন, সেখানকার সবচেয়ে সাধারণ সত্য। আরবিতে দুটিকে জুড়েছে একটিমাত্র 'ওয়া', আর এই জুটির জন্য আয়াত কোনো কৈফিয়ত দেয় না, একটিকে অন্যটির ওপরেও তোলে না। দুটিই আয়াত, অর্থাৎ নিদর্শন, সমান মর্যাদায়।"
          },
          {
            "en": "That yoking is itself the argument. If the size of a thing were what made it a sign, human variety would not qualify at all. What makes something a sign here is that it is designed and could have been otherwise. The word for the difference is ikhtilaf, variance, and it is the variance rather than the speech or the skin that the verse points at. Uniformity would have been simpler; it was not chosen.",
            "bn": "এই জোড়া বাঁধাটাই আসল যুক্তি। আকার-আয়তন দেখেই যদি কোনো কিছু নিদর্শন হতো, তাহলে মানুষের বৈচিত্র্য সে তালিকায় জায়গাই পেত না। এখানে নিদর্শন হওয়ার শর্ত অন্য: জিনিসটা ভেবেচিন্তে বানানো, আর চাইলে অন্যরকমও হতে পারত। এই ভিন্নতার জন্য আয়াতের শব্দ ইখতিলাফ, অর্থাৎ বৈচিত্র্য। আয়াত আঙুল তুলেছে এই বৈচিত্র্যের দিকেই, ভাষা বা গায়ের রঙের দিকে নয়। সবাইকে এক রকম বানানো সহজ ছিল; আল্লাহ সেটা বেছে নেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongues and Colours",
          "bn": "ভাষা ও বর্ণ"
        },
        "p": [
          {
            "en": "Alsinah is the plural of lisan, the tongue, and it covers the languages people speak; a number of commentators extend it to the distinct sound of each voice, by which people are told apart in the dark. Alwan, colours, is read of complexion and of the features that make one face unlike another. The commentators press the point down to the individual: from a single pair have come people no two of whom are found identical.",
            "bn": "আলসিনাহ শব্দটি লিসান অর্থাৎ জিহ্বার বহুবচন; এর অর্থ মানুষের মুখের ভাষা। বেশ কয়েকজন মুফাসসির একে প্রত্যেকের কণ্ঠস্বরের আলাদা আওয়াজ পর্যন্ত টেনে নিয়েছেন, যে আওয়াজ শুনে অন্ধকারেও মানুষ চেনা যায়। আলওয়ান অর্থাৎ বর্ণ বলতে বোঝানো হয় গায়ের রং আর চেহারার সেই গড়ন, যার কারণে একটা মুখ আরেকটা মুখের মতো হয় না। মুফাসসিরগণ কথাটাকে একেবারে প্রত্যেক মানুষ পর্যন্ত নামিয়ে আনেন: একই দম্পতি থেকে এত মানুষ এসেছে, অথচ হুবহু এক রকম দুজনকেও পাওয়া যায় না।"
          },
          {
            "en": "That is precisely where the sign lives. Descent from one origin should produce sameness; instead it produces a face and a voice that belong to one person only, reliably, for every one of us. 35:28 makes the same observation across a wider field — among people and beasts and grazing livestock there are various colours — and then closes with a line about knowledge: only those of His servants who have knowledge fear Allah. Colour and knowledge are paired there too.",
            "bn": "নিদর্শনটা ঠিক এখানেই। এক উৎস থেকে এলে সবার একরকম হওয়ারই কথা। অথচ হয় উল্টো: আমাদের প্রত্যেকের মুখ আর কণ্ঠ কেবল তার নিজের, কোনো ব্যতিক্রম ছাড়াই। ৩৫:২৮ আয়াত আরও বড় পরিসরে একই কথা বলে: মানুষ, জীবজন্তু আর গবাদি পশুর মধ্যেও আছে নানা বর্ণ। তারপর আয়াতটি শেষ হয় জ্ঞানের কথায়: আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে ভয় করে। সেখানেও বর্ণ আর জ্ঞান পাশাপাশি এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Those of Knowledge",
          "bn": "জ্ঞানীদের কথা কেন"
        },
        "p": [
          {
            "en": "Human variety is not hidden. Everyone sees it, and most people see it as a bare fact or as a reason to prefer their own. Reading it as a sign takes something more, and the closing of the verse names that something as knowledge. The point is not that a scholar sees an extra colour. It is that seeing design where an untrained eye sees only difference is a trained act.",
            "bn": "মানুষের এই বৈচিত্র্য লুকানো কিছু নয়। সবাই দেখে। বেশিরভাগ মানুষ একে দেখে নিছক একটা বাস্তবতা হিসেবে, নয়তো নিজেদেরটাকে বড় ভাবার কারণ হিসেবে। একে নিদর্শন হিসেবে পড়তে আরও কিছু লাগে, আর আয়াতের শেষ অংশ সেই জিনিসটার নাম বলে দেয়: জ্ঞান। কথাটা এই নয় যে আলিম বাড়তি কোনো রং দেখতে পান। কথা হলো, অনভ্যস্ত চোখ যেখানে শুধু পার্থক্য দেখে, সেখানে নকশা দেখতে পারাটা শিখে নিতে হয়।"
          },
          {
            "en": "Earlier in the same surah, 30:7 has already described the other kind of seeing: they know what is apparent of the worldly life, and of the Hereafter they are unaware. Surah ar-Rum has therefore set up two ways of knowing long before it reaches the signs, and this verse is addressed to the second. The same data is in front of both men. Only one of them is reading it.",
            "bn": "এই সূরার শুরুর দিকেই ৩০:৭ আয়াত অন্য ধরনের দেখার কথা বলে রেখেছে: তারা দুনিয়ার জীবনের বাইরের দিকটুকুই জানে, আর আখিরাত সম্পর্কে তারা গাফিল। অর্থাৎ নিদর্শনগুলোর কথায় আসার অনেক আগেই সূরা আর-রূম দুই রকম জানার কথা তুলে রেখেছে, আর এই আয়াতের কথা দ্বিতীয় রকম জানার মানুষদের উদ্দেশে। দুজনের সামনেই একই জিনিস। পড়তে পারছে কেবল একজন।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Rules Out",
          "bn": "আয়াতটি যা নাকচ করে"
        },
        "p": [
          {
            "en": "49:13 supplies the practical half. There mankind is told it was made into peoples and tribes so that they might know one another, and that the noblest in the sight of Allah is the one with the most taqwa. Put the two verses together and the position is complete: difference exists for acquaintance, and rank runs on God-consciousness alone. Neither verse asks anyone to pretend the differences are not there.",
            "bn": "৪৯:১৩ আয়াত বাকি অর্ধেক, অর্থাৎ বাস্তব জীবনের দিকটা জুগিয়ে দেয়। সেখানে মানুষকে জানানো হয়েছে, তাদের নানা জাতি ও গোত্রে ভাগ করা হয়েছে যাতে তারা একে অন্যকে চিনতে পারে; আর আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই, যার তাকওয়া সবচেয়ে বেশি। দুটো আয়াত মিলিয়ে পড়লে পুরো অবস্থানটা পরিষ্কার হয়: পার্থক্য আছে পরিচয়ের জন্য, আর মর্যাদা নির্ভর করে কেবল তাকওয়ার উপর। কোনো আয়াতই কাউকে বলে না, পার্থক্যগুলো নেই বলে ভান করুন।"
          },
          {
            "en": "What follows is uncomfortable and simple. To sneer at an accent, a language or a complexion is to sneer at something the Quran has just called a sign of Allah. That makes prejudice a failure of tawhid before it is a failure of manners. And the correction the verse offers is not a slogan but an exercise: the next unfamiliar voice you hear was placed in a list beside the creation of the heavens and the earth.",
            "bn": "এর পরের কথাটা অস্বস্তির, কিন্তু সোজা। কারও উচ্চারণ, ভাষা বা গায়ের রং নিয়ে ঠাট্টা করা মানে এমন জিনিস নিয়ে ঠাট্টা করা, যাকে কুরআন এইমাত্র আল্লাহর নিদর্শন বলেছে। তাই এ ধরনের বিদ্বেষ আদব-কায়দার ত্রুটি হওয়ার আগে তাওহিদের ত্রুটি। আর আয়াতটি যে সংশোধন দেয় তা কোনো স্লোগান নয়, একটা অনুশীলন: এরপর যে অচেনা কণ্ঠ আপনি শুনবেন, সেটিকে আসমান ও যমীনের সৃষ্টির পাশে একই তালিকায় রাখা হয়েছে।"
          }
        ]
      }
    ]
  },
  "30:30": {
    "sections": [
      {
        "h": {
          "en": "Straighten Your Face",
          "bn": "মুখটা সোজা করো"
        },
        "p": [
          {
            "en": "Fa-aqim wajhaka li'd-dini hanifan: so set your face toward the religion, inclining to truth. At-Tabari reads aqim wajhaka as saddid wajhaka, straighten your aim toward the path your Lord has turned you to, which is the religion. Ibn Kathir has the same sense: persevere on what Allah has prescribed, the millah of Ibrahim to which He guided you and which He perfected for you. The verb is an order, and the first word of the verse is a command to face one way and keep facing it.",
            "bn": "ফাআকিম ওয়াজহাকা লিদ্দীনি হানীফা: একনিষ্ঠভাবে দ্বীনের দিকে তোমার মুখ ফেরাও। তাবারী 'আকিম ওয়াজহাকা'-কে পড়েন 'সাদ্দিদ ওয়াজহাকা', অর্থাৎ রব তোমাকে যে পথের দিকে ফিরিয়েছেন সেদিকে তোমার লক্ষ্য সোজা করো। সেই পথই দ্বীন। ইবন কাসীরের কথাও একই: আল্লাহ তোমার জন্য যা বিধান করেছেন তার উপর অটল থাকো, সেই খাঁটি পথ, ইবরাহীম (আঃ)-এর মিল্লাত, যেদিকে তিনি তোমাকে পথ দেখিয়েছেন আর যা তোমার জন্য পূর্ণ করে দিয়েছেন। ক্রিয়াটি এক আদেশ। আয়াতের প্রথম শব্দই হুকুম দিচ্ছে এক দিকে মুখ ফেরাতে, আর সেই মুখ ফেরানো ধরে রাখতে।"
          },
          {
            "en": "Why single out the face? As-Sa'di answers that turning the face follows the turning of the heart, and when both turn, the body's effort follows after; the face stands for the whole self, aimed and gathered. Al-Qurtubi notes that the face gathers a person's senses and is the noblest part, which is why the command names it. Setting it toward the religion, he adds, means fixing the intention and the resolve to work at the religion's deeds, not merely facing a direction with the body.",
            "bn": "মুখকেই আলাদা করে বলা হলো কেন? সাদী জবাব দেন, মুখ ফেরানো আসে অন্তরের ফেরার পেছন পেছন। দুটোই যখন ফেরে, তখন শরীরের চেষ্টা তার পিছু নেয়। তাই মুখ এখানে গোটা মানুষটাকেই বোঝায়, যে এক লক্ষ্যে তাক করা। কুরতুবী বলেন, মুখেই মানুষের ইন্দ্রিয়গুলো জড়ো হয়, আর এটাই সবচেয়ে সম্মানিত অঙ্গ। সেজন্যই হুকুমে তারই নাম এলো। তাঁর কথায়, দ্বীনের দিকে মুখ ফেরানো মানে শুধু শরীর দিয়ে কোনো দিকে মুখ করা নয়, বরং নিয়ত আর সংকল্পকে দ্বীনের কাজে কঠিন পরিশ্রমের দিকে স্থির করা।"
          },
          {
            "en": "And hanifan: al-Qurtubi defines it as balanced, inclining away from all the distorted and abrogated religions toward the one straight way. As-Sa'di glosses it as turning to Allah in this and turning away from everything else. The address is to the Prophet, Ibn Kathir and at-Tabari agree, and al-Qurtubi records that the commentators are agreed his community is included in it. The command on his face is a command on every face that follows him.",
            "bn": "আর 'হানীফা': কুরতুবী একে বলেন ভারসাম্যপূর্ণ, বিকৃত আর রহিত হয়ে যাওয়া সব দ্বীন থেকে সরে এসে একটিমাত্র সোজা পথের দিকে হেলে থাকা। সাদী এর ব্যাখ্যায় বলেন, এ ব্যাপারে আল্লাহর দিকেই মুখ করা, আর বাকি সব কিছু থেকে মুখ ফিরিয়ে নেওয়া। সম্বোধনটা নবী ﷺ-এর উদ্দেশে, এ ব্যাপারে ইবন কাসীর ও তাবারী একমত। আর কুরতুবী লিখে রাখেন, তাফসীরকারেরা একমত যে তাঁর উম্মতও এর ভেতরে শামিল। তাঁর মুখের উপর যে হুকুম, তা তাঁর অনুসারী প্রতিটি মুখের উপরও হুকুম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Pattern He Set",
          "bn": "যে ছাঁচে তিনি গড়েছেন"
        },
        "p": [
          {
            "en": "Fitrata'Llahi allati fatara'n-nasa alayha: the fitrah of Allah upon which He created mankind. At-Tabari renders fitrah as sina'at Allah, the handiwork on which He fashioned people, and explains the grammar: the word is accusative because the sense is that He created people upon it, fitrah. Al-Qurtubi records al-Zajjaj reading it as an implied command, adhere to the fitrah of Allah, so the clause is not loose description but a second order folded into the first. The pattern is no accident of each person; it is something Allah set.",
            "bn": "ফিতরাতাল্লাহিল্লাতী ফাতারান্নাসা আলাইহা: আল্লাহর সেই ফিতরাত, যার উপর তিনি মানুষকে সৃষ্টি করেছেন। তাবারী ফিতরাতকে অনুবাদ করেন 'সিনাআতুল্লাহ', অর্থাৎ আল্লাহর সেই কারিগরি, যে ছাঁচে তিনি মানুষ গড়েছেন। ব্যাকরণও তিনি খুলে দেন: শব্দটি কর্মকারকে বসেছে, কারণ অর্থ হলো তিনি মানুষকে এই ফিতরাতের উপর সৃষ্টি করেছেন। কুরতুবী আনেন যাজ্জাজের পাঠ, যেখানে এর ভেতরে একটা উহ্য হুকুম আছে: আল্লাহর ফিতরাত আঁকড়ে ধরো। তাহলে কথাটা আলগা বর্ণনা নয়, প্রথম হুকুমের ভেতরে ভাঁজ করা দ্বিতীয় এক হুকুম। এই ছাঁচ কোনো মানুষের নিজের দৈবঘটনা নয়। এ এমন কিছু, যা আল্লাহ স্থির করে দিয়েছেন।"
          },
          {
            "en": "What was set into it? Ibn Kathir says Allah created His creation upon knowing Him and His oneness, that there is no god but He, and points back to the covenant where He made them testify, Am I not your Lord? They said, Yes. As-Sa'di describes it from the inside: Allah placed in their minds the beauty of the truth and the ugliness of its opposite, and set in every heart a love for the truth and a leaning toward it; that leaning, he says, is the reality of the fitrah.",
            "bn": "এর ভেতরে কী বসানো হয়েছিল? ইবন কাসীর বলেন, আল্লাহ তাঁর সৃষ্টিকে গড়েছেন তাঁকে চেনা আর তাঁর একত্ব জানার উপর, যে তিনি ছাড়া কোনো ইলাহ নেই। তিনি ফিরে তাকান সেই অঙ্গীকারের দিকে, যেখানে আল্লাহ তাদের সাক্ষী বানিয়ে বলেছিলেন, আমি কি তোমাদের রব নই? তারা বলেছিল, হ্যাঁ। সাদী ভেতর থেকে ছবিটা আঁকেন: আল্লাহ মানুষের বুদ্ধিতে বসিয়ে দিয়েছেন সত্যের সৌন্দর্য আর তার উল্টোটার কদর্যতা, আর প্রতিটি অন্তরে রেখেছেন সত্যের প্রতি ভালোবাসা আর সেদিকে এক হেলে পড়া। তাঁর কথায়, সেই হেলে পড়াটাই ফিতরাতের আসল রূপ।"
          },
          {
            "en": "It is worth keeping this exact. The fitrah the commentators describe is the innate disposition to recognize the one Creator and lean toward worshipping Him; it is not a full creed printed on the newborn's heart. Al-Qurtubi notes the fitrah is called a religion here because people are made for it, citing I did not create jinn and mankind except to worship Me. The seed is the recognition and the pull; the shaped faith is what it is meant to grow into once a person uses it.",
            "bn": "কথাটা ঠিক জায়গায় রাখা দরকার। তাফসীরকারেরা যে ফিতরাতের বর্ণনা দেন, তা হলো একমাত্র স্রষ্টাকে চেনা আর তাঁর ইবাদতের দিকে হেলে থাকার জন্মগত এক প্রবণতা। নবজাতকের অন্তরে ছাপানো পুরো এক আকীদা নয় এটা। কুরতুবী বলেন, এখানে ফিতরাতকে দ্বীন বলা হয়েছে কারণ মানুষকে তারই জন্য গড়া হয়েছে, আর তিনি প্রমাণ আনেন এই আয়াত: আমি জিন আর মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি। বীজটা হলো সেই চেনা আর সেই টান। আর গড়ে ওঠা ঈমান হলো সেই বীজ কাজে লাগালে যা হয়ে ওঠার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Born Muslim, or Born Able?",
          "bn": "মুসলিম হয়ে জন্ম, নাকি সামর্থ্য নিয়ে?"
        },
        "p": [
          {
            "en": "Here the commentators genuinely divide, and al-Qurtubi lays the readings side by side. The first: fitrah means Islam. He attributes this to Abu Hurayrah, Ibn Shihab and others, calling it the known view of most early authorities, backed by the verse and the hadith. On this reading every child is born in a state of submission, and only the surroundings make it otherwise. Ma'arif al-Qur'an reports the same as the first of two common interpretations: all humans are born Muslim by instinct, and the world leads them astray.",
            "bn": "এখানেই তাফসীরকারেরা সত্যিকারভাবে ভাগ হয়ে যান, আর কুরতুবী পাঠগুলো পাশাপাশি সাজিয়ে দেন। প্রথমটি: ফিতরাত মানে ইসলাম। তিনি এটি আবু হুরায়রা (রাঃ), ইবন শিহাব ও অন্যদের দিকে সম্পৃক্ত করেন, আর বলেন এটাই অধিকাংশ পূর্বসূরি আলেমের পরিচিত মত, যা আয়াত আর হাদিস দিয়ে সমর্থিত। এই পাঠে প্রতিটি শিশু জন্মায় আত্মসমর্পণের অবস্থায়, আর কেবল চারপাশই তাকে অন্যরকম বানায়। মাআরিফুল কুরআন দুটি প্রচলিত ব্যাখ্যার প্রথমটি হিসেবে একই কথা আনে: সব মানুষ স্বভাবতই মুসলিম হয়ে জন্মায়, আর দুনিয়া তাদের পথভ্রষ্ট করে।"
          },
          {
            "en": "The second reading narrows the claim. Ma'arif al-Qur'an reports that fitrah here means capacity, the built-in power to discern the Creator and believe in Him, which leads to submission if a person uses it. Al-Qurtubi records jurists and theologians to the same effect: the fitrah is the make by which a child will know his Lord when he reaches the age of knowing, unlike the make of beasts, which never reach such recognition. On this reading what is inborn is the power to recognize, not the finished belief.",
            "bn": "দ্বিতীয় পাঠ দাবিটা সংকীর্ণ করে আনে। মাআরিফুল কুরআন জানায়, এখানে ফিতরাত মানে সক্ষমতা, অর্থাৎ স্রষ্টাকে চিনে তাঁর প্রতি ঈমান আনার ভেতরকার যোগ্যতা, যা কাজে লাগালে আত্মসমর্পণের দিকে নিয়ে যায়। কুরতুবী একই অর্থে একদল ফকীহ ও মুতাকাল্লিমের কথা আনেন: ফিতরাত হলো সেই গড়ন, যা দিয়ে শিশু জ্ঞান হওয়ার বয়সে পৌঁছে তার রবকে চিনবে। এ এমন গড়ন, যা পশুর গড়নের মতো নয়, কারণ পশু কখনো সেই চেনায় পৌঁছায় না। এই পাঠে জন্মগত জিনিসটা হলো চেনার শক্তি, তৈরি হয়ে যাওয়া ঈমান নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an presses reasons for the second over the first: the verse ends with no change in Allah's creation, yet the hadith says the parents make the child a Jew or Christian, so what changes cannot be a fixed Islam; disbelievers outnumber believers; and reward requires a free, voluntary act, not something fixed from birth. Al-Qurtubi adds a third view, that fitrah means the beginning Allah originated people upon, their appointed happiness or misery, which he says Imam Ahmad once held and then left. The verse carries all three; the article takes none against the others.",
            "bn": "মাআরিফুল কুরআন দ্বিতীয় মতটিকে প্রথমটির উপর প্রাধান্য দেওয়ার পক্ষে যুক্তি দেয়: আয়াত নিজেই শেষ হয় 'আল্লাহর সৃষ্টিতে কোনো পরিবর্তন নেই' দিয়ে, অথচ হাদিস বলে বাবা-মা শিশুকে ইহুদি বা খ্রিষ্টান বানায়। তাহলে যা বদলায়, তা স্থির কোনো ইসলাম হতে পারে না। আবার দুনিয়ায় অবিশ্বাসীর সংখ্যা বিশ্বাসীর চেয়ে বেশি। আর প্রতিদান চায় স্বাধীন, স্বেচ্ছায় করা আমল, জন্ম থেকে স্থির কিছু নয়। কুরতুবী একেবারে তৃতীয় এক মতও আনেন, যে ফিতরাত মানে সেই সূচনা যার উপর আল্লাহ মানুষকে আরম্ভ করেছেন, তাদের নির্ধারিত সৌভাগ্য বা দুর্ভাগ্য। তাঁর মতে ইমাম আহমাদ একসময় এ মত ধরেছিলেন, পরে ছেড়ে দেন। আয়াত তিনটিকেই ধরে রাখে, আর এ লেখা কোনোটির পক্ষে অন্যটির বিপক্ষে দাঁড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Child and the Herd",
          "bn": "শিশু আর পশুর পাল"
        },
        "p": [
          {
            "en": "Every reading above leans on one hadith, which Abu Hurayrah used to recite this very verse after. In Muslim's wording: There is none born but is created to his true nature; it is his parents who make him a Jew or a Christian or a Magian, quite as beasts produce their young with their limbs perfect. Do you see anything deficient in them? The report is recorded in Sahih Muslim, and al-Bukhari records it too, so it carries the soundest grade the two Sahih collections give. After it, Abu Hurayrah would read, the fitrah of Allah upon which He created mankind.",
            "bn": "উপরের প্রতিটি পাঠ একটি হাদিসের উপর ভর করে, যে হাদিসের পরেই আবু হুরায়রা (রাঃ) এই আয়াতটি তিলাওয়াত করতেন। মুসলিমের শব্দে: প্রত্যেক নবজাতকই জন্মায় তার প্রকৃত স্বভাবের উপর; তারপর বাবা-মা তাকে ইহুদি, খ্রিষ্টান বা অগ্নিপূজক বানায়, ঠিক যেমন পশু জন্ম দেয় পূর্ণাঙ্গ অঙ্গবিশিষ্ট শাবক। তোমরা কি তাদের মধ্যে কোনো খুঁত দেখো? বর্ণনাটি সহীহ মুসলিমে আছে, বুখারীও এটি এনেছেন। তাই দুই সহীহ গ্রন্থের বিচারে এটি সবচেয়ে মজবুত মানের হাদিস। এর পরেই আবু হুরায়রা (রাঃ) পড়তেন, আল্লাহর সেই ফিতরাত, যার উপর তিনি মানুষকে সৃষ্টি করেছেন।"
          },
          {
            "en": "The image is exact. A herd animal is born whole, and if you later find one with a cropped ear or cut nose, that mutilation was done to it; it did not come that way. So with the newborn human: whole at the start, marked afterward. In the same narration someone asks about a child who dies before any of this, and the answer is left with God: Allah knows best what they would have done. The hadith gives the starting point and refuses to settle the rest, a lesson in where human knowledge stops.",
            "bn": "উপমাটা নিখুঁত। পালের পশু জন্মায় অক্ষত হয়ে। পরে যদি কোনোটার কান কাটা বা নাক কাটা দেখেন, বুঝবেন ওটা পরে কেউ করেছে; সে ওভাবে জন্মায়নি। মানবশিশুর বেলায়ও তাই: শুরুতে অক্ষত, দাগ পড়ে পরে। একই বর্ণনায় কেউ জিজ্ঞেস করে, যে শিশু এসবের আগেই মারা যায় তার কী হবে? জবাবটা আল্লাহর হাতেই ছেড়ে দেওয়া হয়: তারা কী করত, আল্লাহই ভালো জানেন। হাদিসটি শুরুর অবস্থাটা জানিয়ে দেয়, বাকিটার ফয়সালা করে না। এখানেই শিক্ষা: মানুষের জ্ঞান কোথায় গিয়ে থেমে যায়।"
          },
          {
            "en": "Ibn Kathir gathers alongside it a hadith in which Allah says, I created My servants inclined to truth, then the devils turned them from their religion. Together they draw the same map: the leaning is placed first, the turning away comes after, from outside. Neither report makes the newborn a finished believer later unmade. They call the starting point sound and locate the damage in what the world does to it. So the verse calls the fitrah fixed while the hadith speaks of parents who change the child, with no collision.",
            "bn": "ইবন কাসীর এর পাশে আরেকটি হাদিস জড়ো করেন, যেখানে আল্লাহ বলেন, আমি আমার বান্দাদের সত্যের দিকে হেলিয়ে সৃষ্টি করেছি, তারপর শয়তানেরা তাদের দ্বীন থেকে সরিয়ে দিয়েছে। দুটো মিলে একই মানচিত্র আঁকে: হেলে পড়াটা আগে বসানো, আর সরে যাওয়া আসে পরে, বাইরে থেকে। কোনো বর্ণনাই নবজাতককে তৈরি হয়ে যাওয়া মুমিন বানায় না, যাকে পরে ভেঙে ফেলা হয়। তারা সূচনাবিন্দুটাকে সুস্থ বলে, আর ক্ষতিটা রাখে দুনিয়া তার সঙ্গে যা করে তার ভেতরে। এজন্যই আয়াত ফিতরাতকে স্থির বলতে পারে আর হাদিস বলতে পারে বাবা-মা শিশুকে বদলে দেয়, অথচ দুটো সংঘাতে জড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ban or a Fact",
          "bn": "নিষেধ, নাকি বিবৃতি"
        },
        "p": [
          {
            "en": "La tabdila li-khalqi'Llah, no change in the creation of Allah, is read two ways, and both are worth holding. The first takes it as a statement with the force of a command. Ibn Kathir reports it as, do not change the creation of Allah, do not turn people away from the fitrah He set in them, and compares it to and whoever enters it is safe; he calls this a good and sound meaning. At-Tabari reads the clause as, there is no altering the religion of Allah, that is, it should not be done.",
            "bn": "'লা তাবদীলা লিখালকিল্লাহ', আল্লাহর সৃষ্টিতে কোনো পরিবর্তন নেই, এর দুটি পাঠ আছে, আর দুটোই ধরে রাখার মতো। প্রথমটি একে বিবৃতি হিসেবে নেয়, যে বিবৃতি হুকুমের জোর বহন করে। ইবন কাসীর একে আনেন এভাবে: আল্লাহর সৃষ্টিকে বদলিয়ো না, অর্থাৎ তিনি মানুষের ভেতরে যে ফিতরাত রেখেছেন তা থেকে তাদের সরিয়ো না। তিনি একে মেলান 'আর যে তাতে প্রবেশ করে সে নিরাপদ' আয়াতের সঙ্গে, যা বিবৃতি হয়েও নির্দেশের কাজ করে। ইবন কাসীর একে বলেন ভালো ও সহীহ অর্থ। তাবারী বাক্যটি পড়েন এভাবে: আল্লাহর দ্বীনে কোনো রদবদল নেই, অর্থাৎ তা করা চলবে না।"
          },
          {
            "en": "The second reading keeps it a plain statement. Ibn Kathir reports others who take the clause as it stands: Allah made all His creation equal in the upright fitrah, no one is born but upon it, and there is no disparity among people; the fitrah is fixed, nothing from the Creator's side alters it. Al-Qurtubi echoes this, that this fitrah admits no changing from the Maker's side. The difference is real and old. The article names both sides and takes neither; the verse has borne the weight of both.",
            "bn": "দ্বিতীয় পাঠ একে নিছক বিবৃতি হিসেবেই রাখে। ইবন কাসীর অন্যদের কথা আনেন, যারা বাক্যটিকে তার আসল চেহারায় নেন: আল্লাহ তাঁর সব সৃষ্টিকে সোজা ফিতরাতের উপর সমান করে বানিয়েছেন, কেউ এ ছাড়া জন্মায় না, আর এ ব্যাপারে মানুষে মানুষে কোনো তারতম্য নেই। ফিতরাত কেবল স্থির, স্রষ্টার দিক থেকে কিছুই তা বদলায় না। কুরতুবীও একই সুরে বলেন, এই ফিতরাতে গড়নদাতার দিক থেকে কোনো রদবদল চলে না। পার্থক্যটা আসল আর পুরোনো। এ লেখা দুই পক্ষের নামই বলে, কোনোটির পক্ষ নেয় না। আয়াত শত শত বছর ধরে দুটোরই ভার বইছে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Creation Means the Body",
          "bn": "সৃষ্টি যখন দেহকেই বোঝায়"
        },
        "p": [
          {
            "en": "A third, minority reading takes creation in its plain physical sense. At-Tabari records it: no altering the creation of Allah among the animals, by castrating the males among them, so that the clause forbids gelding livestock. He traces it to Ikrimah and Mujahid, both glossing the words as castration, and al-Qurtubi adds that it is narrated from Ibn Abbas and Umar ibn al-Khattab to the same effect. At-Tabari notes that Ibn Abbas, asked about castrating animals, disliked it and recited this very verse in answer.",
            "bn": "তৃতীয় এক সংখ্যালঘু পাঠ 'সৃষ্টি'-কে তার সাদামাটা দৈহিক অর্থেই নেয়। তাবারী এটি আনেন: পশুদের মধ্যে আল্লাহর সৃষ্টিতে কোনো পরিবর্তন নয়, অর্থাৎ তাদের পুরুষগুলোকে খোজা করে নয়। তাহলে বাক্যটি গবাদি পশুকে খোজা করা নিষেধ করছে। তিনি এর সূত্র টানেন ইকরিমা আর মুজাহিদের দিকে, দুজনেই শব্দগুলোকে ব্যাখ্যা করেন 'খোজাকরণ' বলে। কুরতুবী যোগ করেন, একই অর্থে এটি ইবন আব্বাস (রাঃ) আর উমর ইবনুল খাত্তাব (রাঃ) থেকেও বর্ণিত। তাবারী বলেন, পশু খোজা করা নিয়ে জিজ্ঞেস করা হলে ইবন আব্বাস (রাঃ) তা অপছন্দ করেন আর জবাবে এই আয়াতটিই তিলাওয়াত করেন।"
          },
          {
            "en": "This reading is the smallest of the three, and those who carry it carry it as one view among several, not the verse's whole burden. But it widens the clause usefully. Whether creation means the religion set in the heart or the body given to the animal, both readings land on the same instinct: what Allah made, as He made it, is not ours to disfigure at will. The fitrah reading guards the soul from being bent; the castration reading guards the creature from being cut. The verse is large enough to say both.",
            "bn": "এই পাঠ তিনটির মধ্যে সবচেয়ে ছোট, আর যে তাফসীরকারেরা এটি বহন করেন, তাঁরা একে বহন করেন কয়েকটি মতের একটি হিসেবে, আয়াতের গোটা ভার হিসেবে নয়। তবু এ পাঠের একটা লাভ আছে: বাক্যটির পরিসর এতে বেড়ে যায়। 'সৃষ্টি' বলতে অন্তরে বসানো দ্বীন হোক বা পশুকে দেওয়া দেহ হোক, দুই পাঠই একই বোধে এসে নামে: আল্লাহ যা যেভাবে বানিয়েছেন, ইচ্ছেমতো তা বিকৃত করার মালিক আমরা নই। ফিতরাতের পাঠ আত্মাকে বেঁকে যাওয়া থেকে বাঁচায়; খোজার পাঠ প্রাণীকে কাটা পড়া থেকে বাঁচায়। আয়াত যথেষ্ট প্রশস্ত, দুটোই বলার মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Standing Religion",
          "bn": "সুপ্রতিষ্ঠিত দ্বীন"
        },
        "p": [
          {
            "en": "Dhalika'd-dinu'l-qayyim: that is the upright religion. At-Tabari explains that setting your face to the religion as a hanif, unaltered and unchanged, is the straight religion, with no crookedness in it, no veering from pure monotheism into other paths and invented ways. Ibn Kathir reads it as adherence to the law and to the sound fitrah together; that, he says, is the true, standing religion. The word qayyim carries both senses, straight in itself and able to make other things stand straight.",
            "bn": "'জালিকাদ্দীনুল কাইয়িম': এটাই সুপ্রতিষ্ঠিত দ্বীন। তাবারী ব্যাখ্যা করেন, একনিষ্ঠভাবে দ্বীনের দিকে তোমার মুখ ফেরানো, কোনো রদবদল ছাড়া, এটাই সোজা দ্বীন, যার ভেতরে কোনো বক্রতা নেই, খাঁটি একত্ববাদ থেকে অন্য পথে বা বানানো রাস্তায় কোনো হেলে পড়া নেই। ইবন কাসীর একে পড়েন শরীয়ত আর সুস্থ ফিতরাত দুটোকে একসঙ্গে আঁকড়ে ধরা হিসেবে; তাঁর কথায়, সেটাই সত্য, সোজা দাঁড়ানো দ্বীন। 'কাইয়িম' শব্দটি দুই অর্থই বহন করে, নিজে সোজা, আর অন্য জিনিসকেও সোজা করে দাঁড় করাতে সক্ষম।"
          },
          {
            "en": "At-Tabari preserves a scene that fastens this down. Umar passed Mu'adh ibn Jabal and asked, what holds this community up? Mu'adh answered, three things that bring salvation: sincerity, which is the fitrah; prayer, which is the way; and obedience, which is the safeguard. Umar said, you have spoken the truth. The upright religion, on this telling, is no abstraction. It is the fitrah awakened, turned into worship, held in place by obedience, exactly the arc the verse traces from the face that is set to the nature it is set toward.",
            "bn": "তাবারী এমন একটা দৃশ্য ধরে রাখেন, যা পুরো কথাটাকে গেঁথে দেয়। উমর (রাঃ) মুআয ইবন জাবাল (রাঃ)-এর পাশ দিয়ে যাওয়ার সময় জিজ্ঞেস করেন, এই উম্মতকে দাঁড় করিয়ে রাখে কী? মুআয (রাঃ) জবাব দেন, তিনটি জিনিস, আর এগুলোই মুক্তি আনে: ইখলাস, যা হলো ফিতরাত; সালাত, যা হলো পথ; আর আনুগত্য, যা হলো রক্ষাকবচ। উমর (রাঃ) বলেন, তুমি সত্য বলেছ। এই বর্ণনায় সুপ্রতিষ্ঠিত দ্বীন কোনো বিমূর্ত ধারণা নয়। এ হলো জেগে ওঠা ফিতরাত, যা ইবাদতে রূপ নিয়েছে আর আনুগত্যে স্থির হয়ে আছে। আয়াতও ঠিক এই পথটাই আঁকে: মুখ স্থির করা থেকে শুরু করে, যে স্বভাবের দিকে মুখ স্থির করা হলো সেই পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Carried and Unknown",
          "bn": "বয়ে বেড়ানো, অথচ অজানা"
        },
        "p": [
          {
            "en": "Wa-lakinna akthara'n-nasi la ya'lamun: but most people do not know. At-Tabari reads it closely to the context, most do not know that the religion Allah commanded the Prophet to face is the true one and no other. Ibn Kathir widens it: most people do not know this and veer far from it, and he gathers other verses to the same point, that most of mankind will not believe however much you want it, and that if you obeyed most of those on earth they would lead you off the path of Allah.",
            "bn": "'ওয়ালাকিন্না আকসারান্নাসি লা ইয়ালামূন': কিন্তু অধিকাংশ মানুষ জানে না। তাবারী একে প্রসঙ্গের কাছাকাছি রেখে পড়েন, অধিকাংশ জানে না যে আল্লাহ নবী ﷺ-কে যে দ্বীনের দিকে মুখ ফেরাতে বলেছেন সেটাই সত্য, আর কোনোটা নয়। ইবন কাসীর একে আরও প্রশস্ত করেন: অধিকাংশ মানুষ এটা জানে না আর এ থেকে বহু দূরে সরে যায়। তিনি একই কথার পক্ষে আরও আয়াত জড়ো করেন, যে তুমি যতই চাও অধিকাংশ মানুষ ঈমান আনবে না, আর দুনিয়ার অধিকাংশ মানুষের কথা মানলে তারা তোমাকে আল্লাহর পথ থেকে সরিয়ে দেবে।"
          },
          {
            "en": "As-Sa'di closes the circle: such people never come to recognize the upright religion, and even those who recognize it do not walk it. That is the verse's quiet severity. The nature is in everyone; the knowing is rare. A thing can be carried a whole life and never noticed. So the command at the start of the verse and the sorrow at its end meet in the same task: not to acquire a foreign thing, but to clear away whatever has been laid over what you were already given, until you know what you have been carrying.",
            "bn": "সাদী বৃত্তটা পূর্ণ করেন: এমন মানুষ কখনো সুপ্রতিষ্ঠিত দ্বীনকে চিনে ওঠে না, আর যারা চেনে তারাও সে পথে চলে না। এটাই আয়াতের নীরব কঠোরতা। স্বভাবটা প্রত্যেকের ভেতরেই আছে; চেনাটাই দুর্লভ। কোনো জিনিস সারাজীবন বয়ে বেড়ানো যায়, অথচ একবারও টের পাওয়া যায় না। তাই আয়াতের শুরুর হুকুম আর শেষের আক্ষেপ এক কাজে এসে মেলে: বাইরের কিছু অর্জন করা নয়, বরং আগে থেকেই পাওয়া জিনিসটার উপর যা জমেছে তা সরিয়ে ফেলা, যতক্ষণ না আপনি টের পান কী বয়ে বেড়াচ্ছেন।"
          }
        ]
      }
    ]
  },
  "30:32": {
    "sections": [
      {
        "h": {
          "en": "Where the Warning Lands",
          "bn": "সতর্কবাণী যেখানে এসে পড়ে"
        },
        "p": [
          {
            "en": "Surah ar-Rum is Makkan, and the verses just before this one gather the believer toward one thing. Set your face to the religion as a ḥanīf, 30:30 says, the fiṭrah of Allah upon which He made people; that is the upright religion. Then 30:31 presses it home: turning to Him in repentance, fear Him, establish prayer, and do not be of those who associate partners with Allah. Our verse completes that last clause by naming what those people are, those who split their religion and became sects, every faction rejoicing in what it has.",
            "bn": "সূরা আর-রূম মক্কী, আর এর ঠিক আগের আয়াতগুলো মুমিনকে একটি জিনিসের দিকে টেনে আনে। ৩০:৩০ আয়াত বলছে, একনিষ্ঠভাবে দ্বীনের দিকে তোমার মুখ ফেরাও, এটাই আল্লাহর সেই ফিতরাত যার উপর তিনি মানুষকে সৃষ্টি করেছেন, এটাই সুপ্রতিষ্ঠিত দ্বীন। এরপর ৩০:৩১ আয়াত কথাটা আরও জোর দিয়ে বলে: তওবা করে তাঁর দিকে ফেরো, তাঁকে ভয় করো, নামাজ কায়েম করো, আর মুশরিকদের অন্তর্ভুক্ত হয়ো না। আমাদের আয়াত সেই শেষ কথাটাই পূর্ণ করে, এই মুশরিকরা কারা তা বলে দিয়ে: যারা নিজেদের দ্বীনকে ভেঙে ফেলেছে আর বিভিন্ন দলে ভাগ হয়ে গেছে, প্রত্যেক দল নিজেদের কাছে যা আছে তাই নিয়ে উল্লসিত।"
          },
          {
            "en": "The commentators note two ways to read the join. at-Tabari and al-Qurtubi report that al-Farrā' allowed do not be of those who associate partners to stand complete in itself, with of those who split their religion beginning a fresh, resumed sentence; it may also be read as attached to the words before it. an-Naḥḥās, quoted by al-Qurtubi, explains the connected reading grammatically as a substitution with the particle repeated. Either way the picture does not change. The passage warns against a people who fractured the one religion they had been given.",
            "bn": "সংযোগটা পড়ার দুটি পথ তাফসীরকারেরা উল্লেখ করেন। তাবারী আর কুরতুবী জানান, ফাররা মনে করতেন মুশরিকদের অন্তর্ভুক্ত হয়ো না কথাটা নিজেই সম্পূর্ণ হতে পারে, আর যারা নিজেদের দ্বীনকে ভেঙেছে কথাটা দিয়ে নতুন একটি বাক্য শুরু হতে পারে। আবার এটাকে আগের কথার সঙ্গে জুড়ে পড়াও চলে। কুরতুবীর উদ্ধৃত নাহ্হাস সংযুক্ত পাঠটিকে ব্যাকরণের দিক থেকে ব্যাখ্যা করেন, হরফ পুনরাবৃত্তি করে বদল হিসেবে। যেভাবেই পড়া হোক ছবিটা বদলায় না। আয়াত সেই মানুষদের বিরুদ্ধে সতর্ক করছে, যারা নিজেদের পাওয়া এক দ্বীনকে টুকরো করে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Split It or Leave It",
          "bn": "ভাঙা, নাকি ছেড়ে যাওয়া"
        },
        "p": [
          {
            "en": "The widely recited reading is farraqū dīnahum, they divided their religion. Ibn Kathir glosses it as baddalūhu wa-ghayyarūhu, they altered and changed it, believing in part of it and disbelieving in part. at-Tabari reads it the same way, those who exchanged their religion and went against it. On this reading the fault is a cutting up from inside. The religion was one whole, and they kept the pieces that suited them and discarded the rest, so that what they held was no longer the thing entire.",
            "bn": "বহুল পঠিত কিরাআত হলো ফার্রাকূ দীনাহুম, তারা নিজেদের দ্বীনকে ভাগ করে ফেলেছে। ইবন কাসীর এর অর্থ করেন বাদ্দালূহু ওয়া গাইয়ারূহু, তারা দ্বীনকে পাল্টে ফেলেছে, বদলে ফেলেছে, এর কিছু অংশে ঈমান এনেছে আর কিছু অংশ অস্বীকার করেছে। তাবারীও একইভাবে পড়েন, যারা নিজেদের দ্বীনকে বদলে ফেলেছে আর তার বিরোধিতা করেছে। এই পাঠে দোষটা ভেতর থেকে কেটে টুকরো করা। দ্বীন ছিল এক অখণ্ড জিনিস, তারা নিজেদের পছন্দের অংশটুকু রেখে বাকিটা ফেলে দিয়েছে, ফলে তাদের হাতে যা রইল তা আর গোটা জিনিসটি নয়।"
          },
          {
            "en": "A second reading is fāraqū dīnahum. al-Qurtubi reports that Hamza and al-Kisā'ī recited it so, and that 'Ali ibn Abi Talib (RA) read it this way too; the sense is that they parted from the religion that must be followed, which is tawhid. Ibn Kathir carries the same reading and explains it as tarakūhu warā'a ẓuhūrihim, they left it behind their backs. Here the fault is not a cutting up but a walking away, an abandonment of the whole rather than a sorting of its parts.",
            "bn": "দ্বিতীয় একটি পাঠ হলো ফারাকূ দীনাহুম। কুরতুবী জানান, হামযা আর কিসাঈ এভাবে পড়েছেন, আর আলী ইবন আবী তালিব (রাঃ)-ও এভাবেই পড়তেন। এর অর্থ, যে দ্বীন অনুসরণ করা অবশ্যকর্তব্য তারা তা থেকে সরে গেছে, আর সেই দ্বীন হলো তাওহিদ। ইবন কাসীর একই পাঠ আনেন আর ব্যাখ্যা করেন তারাকূহু ওয়ারাআ যুহূরিহিম, তারা দ্বীনকে পিঠের পেছনে ফেলে রেখে গেছে। এখানে দোষটা কেটে টুকরো করা নয়, বরং হেঁটে চলে যাওয়া, অংশে অংশে বাছাই নয়, গোটাটাকেই ছেড়ে দেওয়া।"
          },
          {
            "en": "The two readings press on the same wound from two sides. farraqū puts the harm inside the religion, a unity chopped into portions; fāraqū puts it outside, a people who turned their backs on it. at-Tabari's own wording actually holds both motions together, they changed their religion and opposed it so they parted from it. Neither reading softens the charge. Whether the one religion is broken into pieces or dropped altogether, what Allah gave as a single whole has been lost, and the loss is what the verse condemns.",
            "bn": "দুটি পাঠ একই ক্ষতে দুই দিক থেকে চাপ দেয়। ফার্রাকূ ক্ষতিটাকে দ্বীনের ভেতরে রাখে, এক অখণ্ডকে অংশে অংশে কেটে ফেলা; ফারাকূ সেটাকে বাইরে রাখে, এমন এক দল যারা দ্বীনের দিকে পিঠ ফিরিয়েছে। তাবারীর নিজের ভাষাতেই দুটি গতি একসঙ্গে ধরা আছে, তারা দ্বীনকে বদলেছে আর তার বিরোধিতা করে তা থেকে সরে গেছে। কোনো পাঠই অভিযোগটাকে হালকা করে না। এক দ্বীনকে টুকরো করা হোক বা পুরোটাই ফেলে দেওয়া হোক, আল্লাহ যা এক অখণ্ড হিসেবে দিয়েছিলেন তা হারিয়ে গেছে, আর এই হারানোটাই আয়াতের নিন্দার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Verse Names",
          "bn": "কাদের উদ্দেশে এই নিন্দা"
        },
        "p": [
          {
            "en": "On the first reading the ones meant are the idolaters, taken with the preceding do not be of those who associate partners. as-Sa'di draws it out plainly. The religion is one, sincere worship of Allah alone, and these idolaters broke it apart. Some of them worship idols and images, some the sun and the moon, some the saints and the righteous, and among them are Jews and there are Christians. al-Muyassar and the abridged Ibn Kathir read the verse the same way, as a direct description of the idolaters it has just warned against.",
            "bn": "প্রথম পাঠে এখানে মুশরিকদের কথাই বলা হচ্ছে; আগের বাক্য 'মুশরিকদের অন্তর্ভুক্ত হয়ো না'-এর সঙ্গে মিলিয়ে পড়লে তা-ই দাঁড়ায়। সাদী কথাটা খোলাসা করে বলেন। দ্বীন তো এক, কেবল আল্লাহর জন্য একনিষ্ঠ ইবাদত, আর এই মুশরিকরা সেটাকে ভেঙে ফেলেছে। তাদের কেউ মূর্তি আর প্রতিমার পূজা করে, কেউ সূর্য আর চাঁদের, কেউ আউলিয়া আর নেককারদের, আর তাদের মধ্যে কেউ ইহুদি কেউ খ্রিস্টান। মুয়াসসার আর সংক্ষিপ্ত ইবন কাসীরও আয়াতটি একইভাবে পড়েন: একটু আগেই যে মুশরিকদের ব্যাপারে আয়াত সতর্ক করল, এ তাদেরই সরাসরি বর্ণনা।"
          },
          {
            "en": "A second reading names the People of the Book. at-Tabari reports from Qatada, and again from Ibn Zayd, that those who split their religion and became sects are the Jews and the Christians. al-Baghawi says the same, they became differing factions, and they are the Jews and the Christians. al-Qurtubi adds ar-Rabi' ibn Anas, with Qatada and Ma'mar, for this view. On this reading the verse looks back at the communities before Islam, who received one revelation and then fell into rival parties over it.",
            "bn": "দ্বিতীয় পাঠে এখানে আহলে কিতাবের কথা বলা হচ্ছে। তাবারী কাতাদা থেকে, আবার ইবন যায়দ থেকে বর্ণনা করেন যে, যারা নিজেদের দ্বীনকে ভেঙেছে আর দলে ভাগ হয়েছে তারা ইহুদি আর খ্রিস্টান। বাগাভীও একই কথা বলেন: তারা ভিন্ন ভিন্ন দলে পরিণত হয়েছে, আর তারা ইহুদি আর খ্রিস্টান। কুরতুবী এই মতের পক্ষে কাতাদা আর মামারের সঙ্গে রাবী ইবন আনাসের নামও যোগ করেন। এই পাঠে আয়াত ফিরে তাকায় ইসলামের আগের জাতিগুলোর দিকে, যারা একই ওহি পেয়েছিল, তারপর তা নিয়েই প্রতিদ্বন্দ্বী দলে ভাগ হয়ে গিয়েছিল।"
          },
          {
            "en": "A third reading turns the verse toward the people of the qibla. al-Qurtubi reports that Abu Hurayra, 'A'isha and Abu Umama (RA) understood it of the people of the qibla, the people of desires and innovations. al-Baghawi carries this as a second possibility, it is said they are the people of innovation of this community. The commentators thus range across a wide field, from idolaters plainly outside the faith to a caution aimed within it. The verse is reported here as the mufassirūn report it, as a span of readings, without settling which is meant.",
            "bn": "তৃতীয় পাঠ আয়াতটিকে আহলে কিবলার দিকে ফেরায়। কুরতুবী জানান, আবু হুরায়রা, আয়েশা আর আবু উমামা (রাঃ) এটিকে বুঝেছেন আহলে কিবলা সম্পর্কে, অর্থাৎ খেয়াল-খুশি আর বিদআতে লিপ্ত লোকদের সম্পর্কে। বাগাভী এটিকে দ্বিতীয় সম্ভাবনা হিসেবে আনেন: বলা হয়, তারা এই উম্মতের বিদআতপন্থী লোক। তাহলে তাফসীরকারদের মত অনেক দূর পর্যন্ত ছড়ানো: এক প্রান্তে দ্বীনের স্পষ্টত বাইরের মুশরিক, অন্য প্রান্তে দ্বীনের ভেতরের মানুষের জন্য সতর্কবাণী। মুফাসসিরগণ যেভাবে বর্ণনা করেছেন, আয়াতটি এখানে সেভাবেই রাখা হলো: কয়েকটি পাঠ পাশাপাশি, কোনটি উদ্দিষ্ট তার ফয়সালা না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sects and Parties",
          "bn": "দল আর উপদল"
        },
        "p": [
          {
            "en": "The word shiyaʿan carries the picture. Ma'arif al-Qur'an explains that it is the plural of shīʿah, and a shīʿah is a group of people who follow a leader. al-Qurtubi collects the other glosses, al-Kalbī reads shiyaʿan as firaq, factions, and Muqātil reads it as adyān, religions, so that each party ends up with something like a creed of its own. The one religion does not merely crack; it multiplies into rival bodies, each with a head to follow and a banner to gather under.",
            "bn": "শিয়াআন শব্দটিই ছবিটা বয়ে আনে। মাআরিফুল কুরআন ব্যাখ্যা করে, এটি শীআ-র বহুবচন, আর শীআ মানে কোনো নেতার অনুসরণকারী একদল মানুষ। কুরতুবী বাকি ব্যাখ্যাগুলো জড়ো করেন: কালবী শিয়াআন পড়েন ফিরাক অর্থে, অর্থাৎ দল, আর মুকাতিল পড়েন আদইয়ান অর্থে, অর্থাৎ ধর্ম; যেন শেষ পর্যন্ত প্রত্যেক দলের নিজের মতো একটা আলাদা মতবাদ দাঁড়িয়ে যায়। এক দ্বীন কেবল ফেটে যায় না, ভেঙে ভেঙে অনেকগুলো প্রতিদ্বন্দ্বী দল হয়ে যায়। প্রত্যেকটার আছে মেনে চলার একজন নেতা আর জড়ো হওয়ার একটা ঝান্ডা।"
          },
          {
            "en": "The commentators then describe how such parties behave. as-Sa'di writes that each faction of shirk banded together and grew fanatical in defending the falsehood it held and in fighting everyone outside it. al-Muyassar puts it the same way, they became groups and parties, partisans for their chiefs and their factions and their opinions, each helping the other along upon falsehood. Ma'arif traces the start of it, once people left the one faith for the private views of their leaders, and views differ from person to person, the groups could only multiply.",
            "bn": "এরপর তাফসীরকারেরা বর্ণনা করেন এমন দলগুলো কীভাবে চলে। সাদী লেখেন, শিরকের প্রত্যেক দল একজোট হয়ে নিজেদের ধরে রাখা বাতিলের পক্ষে গোঁড়া হয়ে ওঠে আর বাইরের সবার সঙ্গে লড়াই করে। মুয়াসসার একইভাবে বলেন, তারা দল আর উপদলে পরিণত হয়, নিজেদের নেতা আর দল আর মতের পক্ষে পক্ষপাতী হয়, একে অন্যকে বাতিলের উপর সাহায্য করে। মাআরিফ এর শুরুটা ধরিয়ে দেয়, মানুষ যখন এক দ্বীন ছেড়ে নেতাদের ব্যক্তিগত মতের দিকে গেল, আর মত তো একেকজনের একেক রকম, তখন দল বেড়ে যাওয়া ছাড়া উপায় রইল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Glad in Its Corner",
          "bn": "নিজের কোণ নিয়ে খুশি"
        },
        "p": [
          {
            "en": "Then the closing clause, every faction rejoicing in what it has. al-Qurtubi reads fariḥūn as masrūrūn muʿjabūn, delighted and self-impressed, and gives the reason, because they never made the truth clear to themselves, though clarifying it was a duty laid on them. at-Tabari sharpens it, each party rejoices in the school it clings to, reckoning that the right is with them and with no one else. The gladness is not innocent pleasure in the truth; it is satisfaction in a portion, mistaken for the whole.",
            "bn": "তারপর শেষ কথাটা: প্রত্যেক দল নিজেদের কাছে যা আছে তাই নিয়ে উল্লসিত। কুরতুবী ফারিহূন পড়েন মাসরূরূন মুজাবূন অর্থে, আনন্দিত আর আত্মমুগ্ধ। কারণটাও তিনি বলেন: তারা কখনো সত্যকে নিজেদের কাছে স্পষ্ট করেনি, অথচ তা স্পষ্ট করা তাদের উপর কর্তব্য ছিল। তাবারী কথাটা আরও ধারালো করেন: প্রত্যেক দল নিজের আঁকড়ে ধরা মতবাদ নিয়ে উল্লসিত, ভাবে সঠিকটা কেবল তাদের কাছেই, আর কারও কাছে নয়। এ খুশি সত্য পাওয়ার নির্মল আনন্দ নয়। এ হলো একটা টুকরো হাতে পেয়ে তৃপ্তি, যে টুকরোকে তারা গোটা জিনিস ভেবে বসেছে।"
          },
          {
            "en": "as-Sa'di and Ma'arif both locate the disease in this self-satisfaction. Each party judges itself to be upon the truth and the others upon falsehood; Ma'arif adds that the Shaytan made every group believe it alone walked the right path. The verse does not merely record that the splitting happened. It names the smugness as the sickness, because the gladness is what seals the person in. A party content with its corner feels no need to look again, and so the very contentment keeps it from the whole it has lost.",
            "bn": "সাদী আর মাআরিফ দুজনেই রোগটা খুঁজে পান এই আত্মতুষ্টিতে। প্রত্যেক দল নিজেকে সত্যের উপর আর বাকিদের বাতিলের উপর বলে রায় দেয়; মাআরিফ যোগ করে, শয়তান প্রত্যেক দলকে বিশ্বাস করিয়েছে যে কেবল সে-ই সঠিক পথে চলছে। আয়াত শুধু এটুকু জানায় না যে ভাগ হওয়ার ঘটনাটা ঘটেছে। এটি আত্মতৃপ্তিকেই রোগ বলে নাম দেয়, কারণ এই আনন্দই মানুষকে ভেতরে আটকে ফেলে। নিজের কোণ নিয়ে সন্তুষ্ট দল আর নতুন করে তাকানোর দরকার বোধ করে না, ফলে এই তৃপ্তিই তাকে হারানো গোটা জিনিসটি থেকে দূরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration on Splitting",
          "bn": "ভাগ হওয়া নিয়ে এক হাদিস"
        },
        "p": [
          {
            "en": "at-Tirmidhi records from 'Abdullah ibn 'Amr (RA) that the Messenger of Allah ﷺ said what befell the children of Isra'il will befall this Ummah step by step, that the children of Isra'il split into 72 sects and this Ummah will split into 73, all of them in the Fire except one; when he was asked which, he said, what I am upon and my Companions. at-Tirmidhi graded this report ḥasan gharīb, a mufassar, well-explained ḥasan gharīb narration, and that grading is reported here as he gave it, not raised above it.",
            "bn": "তিরমিযী আবদুল্লাহ ইবন আমর (রাঃ) থেকে বর্ণনা করেন যে, রাসূলুল্লাহ ﷺ বলেছেন, বনী ইসরাঈলের উপর যা এসেছিল তা ধাপে ধাপে এই উম্মতের উপরও আসবে, বনী ইসরাঈল ৭২ দলে ভাগ হয়েছিল আর এই উম্মত ভাগ হবে ৭৩ দলে, একটি দল ছাড়া সবগুলোই জাহান্নামে; জিজ্ঞেস করা হলে তিনি বললেন, যার উপর আমি আর আমার সাহাবীরা আছি। তিরমিযী এই বর্ণনাকে হাসান গারীব বলেছেন, একটি মুফাসসার তথা সুব্যাখ্যাত হাসান গারীব হাদিস, আর সেই মান এখানে তিনি যেমন দিয়েছেন তেমনই ধরা হলো, তার উপরে তোলা হয়নি।"
          },
          {
            "en": "What the saved group is called matters more than the counting. It is named by a description, not a roster, what the Prophet ﷺ and his Companions were upon, which the commentators read as adherence to the Book of Allah and the Sunnah and the way of the first generations. Ibn Kathir, citing al-Hakim's Mustadrak, gives the same answer to the same question. The hadith hands the hearer a standard to measure himself against. It does not hand him a licence to count other people into the Fire.",
            "bn": "নাজাতপ্রাপ্ত দলের পরিচয় কীভাবে দেওয়া হলো, সেটা সংখ্যার হিসাবের চেয়ে বেশি গুরুত্বপূর্ণ। তার পরিচয় এসেছে একটা বৈশিষ্ট্য দিয়ে, নামের তালিকা দিয়ে নয়: নবী ﷺ আর তাঁর সাহাবীরা যার উপর ছিলেন। তাফসীরকারেরা এর মানে করেন আল্লাহর কিতাব, সুন্নাহ আর প্রথম প্রজন্মের পথ আঁকড়ে থাকা। ইবন কাসীর হাকিমের মুসতাদরাক থেকে একই প্রশ্নের একই জবাব উদ্ধৃত করেন। হাদিসটি শ্রোতার হাতে একটা মাপকাঠি তুলে দেয়, যা দিয়ে সে নিজেকে মাপবে। অন্যদের গুনে গুনে জাহান্নামে পাঠানোর অনুমতি সে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror for the Believers",
          "bn": "মুমিনদের জন্য আয়না"
        },
        "p": [
          {
            "en": "as-Sa'di does not let the verse rest on other communities. In this, he writes, is a warning to the Muslims against their own scattering and splitting into factions, each party fanatical for the mixture of truth and falsehood it holds, so that by their division they come to resemble the very idolaters the passage warned against. His reason is the one the whole surah has been building. The religion is one, the Messenger is one, the God is one, and a single faith does not belong to rival parties that each take it as a possession.",
            "bn": "সাদী আয়াতটিকে কেবল অন্য জাতির উপর ছেড়ে রাখেন না। তিনি লেখেন, এতে মুসলমানদের জন্য সতর্কবাণী আছে: তারা যেন নিজেরা ছত্রভঙ্গ হয়ে দলে দলে ভাগ না হয়, যেখানে প্রত্যেক দল নিজের হাতের হক-বাতিলের মিশ্রণ নিয়ে গোঁড়ামি করে। নইলে এই ভাগাভাগির কারণে তারা সেই মুশরিকদেরই মতো হয়ে যাবে, যাদের ব্যাপারে আয়াত সতর্ক করেছিল। তাঁর যুক্তি সেটাই, যা গোটা সূরা ধরে গড়ে উঠছিল। দ্বীন তো একটাই, রাসূল একজনই, ইলাহ একজনই, আর এক ঈমান প্রতিদ্বন্দ্বী দলের সম্পত্তি নয় যে যার যার ভাগটুকু নিজের করে নেবে।"
          },
          {
            "en": "He then weighs what the quarrelling throws away. Most religious matters, as-Sa'di notes, are agreed upon among the scholars and the imams, and the brotherhood of faith is a bond Allah Himself has tied in the firmest knot. Why then let all of that be cancelled, and division built instead upon hidden questions or branch disagreements, by which some declare others astray? He calls this among the greatest of Shaytan's provocations against the Muslims, and he calls working to gather their word and heal the discord among the best of striving in the path of Allah.",
            "bn": "এরপর তিনি ওজন করে দেখান এই ঝগড়া কী ফেলে দিচ্ছে। সাদী বলেন, দ্বীনের অধিকাংশ বিষয়েই আলিম আর ইমামদের মধ্যে ইজমা আছে, আর ঈমানের ভ্রাতৃত্ব এমন এক বাঁধন যা আল্লাহ নিজেই সবচেয়ে মজবুত গিঁটে বেঁধে দিয়েছেন। তাহলে কেন এসবকে বাতিল করে দিয়ে গুপ্ত কিছু প্রশ্ন বা শাখাগত মতভেদের উপর ভাগাভাগি দাঁড় করানো হবে, যা দিয়ে একদল আরেক দলকে পথভ্রষ্ট বলে ঘোষণা করে? তিনি একে মুসলমানদের বিরুদ্ধে শয়তানের সবচেয়ে বড় উসকানিগুলোর একটি বলেন, আর তাদের ঐক্য গড়া আর বিভেদ মেটানোর চেষ্টাকে বলেন আল্লাহর পথে শ্রেষ্ঠ জিহাদগুলোর একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant to Excommunicate",
          "bn": "তাকফিরের কোনো অনুমতি নেই"
        },
        "p": [
          {
            "en": "This has to be said plainly. The verse condemns an act, the splitting of the one religion into factions and the self-satisfied partisanship that follows from it. The commentators treat that act in the abstract, the disease of tafriqa and smug party-feeling, and they do not place it in any reader's hand as a weapon. The verse names no living group, no living sect, school or community. It speaks only of what it names, and it licenses nothing against any living person or community whatever.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত একটি কাজের নিন্দা করে, এক দ্বীনকে দলে ভেঙে ফেলা আর তার পেছনে পেছনে আসা আত্মতুষ্ট দলবাজি। তাফসীরকারেরা সেই কাজটিকে বিমূর্তভাবে ধরেন, তাফরিকা আর আত্মতৃপ্ত দলপ্রীতির রোগ হিসেবে, আর কোনো পাঠকের হাতে এটিকে অস্ত্র হিসেবে তুলে দেন না। আয়াত কোনো জীবিত দল, কোনো জীবিত ফিরকা, মাযহাব বা সম্প্রদায়ের নাম নেয় না। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করছে, আর কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Turned into a tool of takfir, the verse would become the very thing it warns against, one faction rejoicing that it alone is saved and the rest are in the Fire. That is the smugness the clause condemns, now wearing the clause as its banner. The honest use is the mirror as-Sa'di holds up. Read the verse first against your own gladness, whether your joy rests in Allah's religion or in the winning of your side, and let it move you to mend the division among the believers rather than to widen it.",
            "bn": "তাকফিরের হাতিয়ার বানিয়ে ফেললে আয়াত সেই জিনিসই হয়ে দাঁড়ায় যার বিরুদ্ধে সে সতর্ক করছে, একটি দল উল্লসিত যে কেবল সে-ই নাজাত পেয়েছে আর বাকি সবাই জাহান্নামে। এটাই তো সেই আত্মতৃপ্তি যার নিন্দা আয়াতটি করছে, এখন সেই আয়াতকেই নিজের ঝান্ডা বানিয়ে নিয়েছে। সৎ ব্যবহারটা হলো সাদীর তুলে ধরা সেই আয়না। আয়াতটি আগে নিজের আনন্দের বিরুদ্ধে পড়ুন, আপনার খুশি কি আল্লাহর দ্বীনে, নাকি নিজের দলের জয়ে, আর এটি আপনাকে মুমিনদের মধ্যকার বিভেদ চওড়া করার দিকে নয়, মেটানোর দিকে নিয়ে যাক।"
          }
        ]
      }
    ]
  },
  "30:41": {
    "sections": [
      {
        "h": {
          "en": "It Appeared",
          "bn": "তা দেখা দিয়েছে"
        },
        "p": [
          {
            "en": "The verse opens with a verb, not a noun: zahara al-fasad, the corruption appeared. Zahara means to become visible, to come out into the open. The word does not say that the damage began at some point; it says it surfaced, which implies that it was being made before anyone could see it. That single verb sets the tone of the whole sentence, because what has surfaced can be read, and reading it is what the verse is about to ask for.",
            "bn": "আয়াতটি শুরু হয় ক্রিয়াপদ দিয়ে, বিশেষ্য দিয়ে নয়: যাহারাল ফাসাদ, বিপর্যয় দেখা দিয়েছে। 'যাহারা' মানে দৃশ্যমান হওয়া, খোলাখুলি বেরিয়ে আসা। শব্দটি বলছে না যে ক্ষতি কোনো এক সময় শুরু হলো; বলছে, ক্ষতি ভেসে উঠল। তার মানে, কেউ দেখার আগে থেকেই তা তৈরি হচ্ছিল। এই একটি ক্রিয়াপদই গোটা বাক্যের সুর বেঁধে দেয়। যা ভেসে উঠেছে তা পড়া যায়, আর আয়াত একটু পরেই সেই পড়ার দাবি করবে।"
          },
          {
            "en": "Where it appeared is given as fi al-barr wa al-bahr. Ibn Kathir reports several readings of the pair from the early authorities. From Ibn Abbas (RA), Ikrimah, ad-Dahhak and as-Suddi it is transmitted that al-barr means the open, uninhabited land and al-bahr the towns and cities; a further report from Ibn Abbas (RA) and Ikrimah takes al-bahr as the towns built on riverbanks. Others read the two words in their ordinary sense of dry land and sea.",
            "bn": "কোথায় দেখা দিয়েছে? 'ফিল বার্রি ওয়াল বাহর'। ইবনে কাসীর পূর্বসূরি আলিমদের কাছ থেকে এই জোড়ার কয়েকটি ব্যাখ্যা বর্ণনা করেন। ইবনে আব্বাস (রাঃ), ইকরিমা, দাহহাক ও সুদ্দী থেকে বর্ণিত, 'বার্র' মানে খোলা, জনমানবহীন প্রান্তর আর 'বাহর' মানে শহর-নগর। ইবনে আব্বাস (রাঃ) ও ইকরিমা থেকে আরেক বর্ণনায় 'বাহর' মানে নদীর তীরে গড়ে ওঠা জনপদ। অন্যরা শব্দ দুটিকে সাধারণ অর্থেই নিয়েছেন: স্থল আর সমুদ্র।"
          }
        ]
      },
      {
        "h": {
          "en": "What Fasad Means",
          "bn": "ফাসাদ শব্দের অর্থ"
        },
        "p": [
          {
            "en": "Fasad is the opposite of salah. It is the going bad of something that was sound — spoiling, ruin, a thing coming apart from the inside. 7:56 sets the two words directly against each other: do not cause corruption in the earth after its islah, its being set right, and call upon Him in fear and aspiration. The verse in Ar-Rum therefore names a state, and the state is defined against an earlier soundness rather than against an ideal.",
            "bn": "ফাসাদ হলো সালাহ-র বিপরীত। যা ভালো ছিল তা নষ্ট হয়ে যাওয়াই ফাসাদ: পচে যাওয়া, ধ্বংস হওয়া, ভেতর থেকে ভেঙে পড়া। ৭:৫৬ আয়াত শব্দ দুটিকে সরাসরি মুখোমুখি রাখে: যমীনের ইসলাহ, অর্থাৎ তাকে ঠিকঠাক করে দেওয়ার পর সেখানে বিপর্যয় সৃষ্টি করো না, আর ভয় ও আশা নিয়ে তাঁকে ডাকো। কাজেই সূরা আর-রূমের এই আয়াত একটা অবস্থার নাম বলছে, আর সেই অবস্থা মাপা হচ্ছে আগের সুস্থ অবস্থার সঙ্গে তুলনা করে, কোনো আদর্শের সঙ্গে নয়।"
          },
          {
            "en": "Ibn Kathir cites the mufassirun on what shows up on the ground. Mujahid read corruption on land as the killing of a son of Adam and corruption at sea as the seizing of ships. A reading transmitted from Zayd ibn Rafi' takes it of rain withheld, with famine following on the land and harm to the creatures of the sea. Abu al-Aliyah put the principle plainly: whoever disobeys Allah in the earth has corrupted it, because the good order of the earth and the heavens rests on obedience to Him.",
            "bn": "মাটিতে এই বিপর্যয় কী চেহারায় দেখা দেয়, সে বিষয়ে ইবনে কাসীর মুফাসসিরগণের কথা উদ্ধৃত করেন। মুজাহিদের মতে স্থলের বিপর্যয় হলো আদম-সন্তানকে হত্যা, আর সমুদ্রের বিপর্যয় হলো নৌযান ছিনিয়ে নেওয়া। যায়দ ইবনে রাফি' থেকে বর্ণিত এক ব্যাখ্যায় এর মানে বৃষ্টি বন্ধ হয়ে যাওয়া; ফলে স্থলে দুর্ভিক্ষ নামে আর সমুদ্রের প্রাণীরা ক্ষতির মুখে পড়ে। আবুল আলিয়া মূলনীতিটা সোজা করে বলে দিয়েছেন: যে যমীনে আল্লাহর নাফরমানি করে, সে যমীনকেই নষ্ট করে; কারণ আসমান ও যমীনের শৃঙ্খলা টিকে আছে তাঁর আনুগত্যের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "By What Hands Have Earned",
          "bn": "হাতের কামাইয়ের কারণে"
        },
        "p": [
          {
            "en": "Bima kasabat aydi an-nas is the causal clause, and it is the reason the verse is not merely an observation. The bi- here is the bi of cause. Kasaba is the verb of earning, the one the Quran uses for what a soul acquires and must answer for, and the earners are named as an-nas, people — not a faction of them, and not somebody else. Aydi, hands, is where deeds are actually done.",
            "bn": "বিমা কাসাবাত আইদিন নাস: এটিই কারণ বোঝানোর অংশ, আর এই অংশের জন্যই আয়াতটি নিছক পর্যবেক্ষণ হয়ে থাকে না। এখানে 'বি' এসেছে কারণ বোঝাতে। 'কাসাবা' উপার্জনের ক্রিয়া; প্রত্যেক নফস যা কামাই করে আর যার জবাব তাকে দিতে হবে, কুরআন সে কথা বলতে এই ক্রিয়াই ব্যবহার করে। আর উপার্জনকারী কারা? 'আন-নাস', মানুষ। তাদের কোনো একটি দল নয়, অন্য কেউও নয়। 'আইদি' মানে হাত, আর কাজ আসলে হাতেই হয়।"
          },
          {
            "en": "The Quran works this idiom in more than one direction. Earlier in this same surah, 30:36 says that when evil afflicts people bima qaddamat aydihim, for what their hands have sent forward, they at once despair. 42:30 states the principle at its widest: whatever strikes you of disaster is for what your hands have earned, and He pardons much. The same organ appears in each, and each time the sentence turns the reader toward his own.",
            "bn": "কুরআন এই বাগ্‌ধারাটি একাধিক দিকে খাটায়। এই সূরারই আগে ৩০:৩৬ আয়াত বলে, মানুষের হাত যা আগে পাঠিয়েছে, 'বিমা কাদ্দামাত আইদীহিম', তার কারণে যখন তাদের উপর বিপদ আসে, তখনই তারা হতাশ হয়ে পড়ে। ৪২:৩০ আয়াত নীতিটা সবচেয়ে ব্যাপকভাবে বলে: তোমাদের উপর যে বিপদই আসে, তা তোমাদের হাতের উপার্জনের কারণে, আর তিনি অনেক কিছুই ক্ষমা করে দেন। প্রতিটি আয়াতে একই অঙ্গ, হাত; আর প্রতিবারই বাক্যটি পাঠককে তার নিজের হাতের দিকে ফেরায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Only Part of It",
          "bn": "কেবল কিছু অংশ"
        },
        "p": [
          {
            "en": "Then the purpose: liyudhiqahum ba'da alladhi 'amilu, so that He may make them taste part of what they have done. Two words hold the mercy in this clause. Yudhiq is to give a taste, and a taste is a small quantity given so that something is known rather than endured. Ba'd is part — not the whole. What has surfaced on land and sea is, on the verse's own accounting, less than what was earned, and 42:30 says the remainder from the other side: He pardons much.",
            "bn": "এরপর উদ্দেশ্য: লিইউযীকাহুম বা'দাল্লাযী আমিলু, যাতে তিনি তাদের কৃতকর্মের কিছু অংশের স্বাদ তাদের চাখান। এই বাক্যাংশে রহমত লুকিয়ে আছে দুটি শব্দে। 'ইউযীক' মানে স্বাদ চাখানো; আর স্বাদ মানে অল্প একটু, যা দেওয়া হয় জানানোর জন্য, ভোগানোর জন্য নয়। 'বা'দ' মানে অংশ, গোটাটা নয়। আয়াতের নিজের হিসাবেই জলে-স্থলে যা ভেসে উঠেছে, তা মানুষের উপার্জনের চেয়ে কম। আর বাকিটার কথা ৪২:৩০ আয়াত বলে অন্য দিক থেকে: তিনি অনেক কিছুই ক্ষমা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "So That They Return",
          "bn": "যাতে তারা ফিরে আসে"
        },
        "p": [
          {
            "en": "The verse ends la'allahum yarji'un, that perhaps they may return. Ibn Kathir glosses the returning as return from disobedience. 7:168 uses the same closing for the same reason: We tested them with good times and bad, that perhaps they would return. And 30:42, the verse immediately after this one, turns the reader into a witness — travel through the land and observe how was the end of those before; most of them were associators.",
            "bn": "আয়াতটি শেষ হয় 'লাআল্লাহুম ইয়ারজিউন' দিয়ে, যাতে তারা ফিরে আসে। ইবনে কাসীরের ব্যাখ্যায় এই ফেরা হলো নাফরমানি থেকে ফেরা। ৭:১৬৮ আয়াতও একই কারণে একই কথায় শেষ হয়: আমি তাদের ভালো ও মন্দ দিয়ে পরীক্ষা করেছি, যাতে তারা ফিরে আসে। আর ঠিক পরের আয়াত ৩০:৪২ পাঠককে সাক্ষী বানিয়ে দেয়: পৃথিবীতে ভ্রমণ করো এবং দেখো, আগের লোকদের পরিণাম কী হয়েছিল; তাদের অধিকাংশই ছিল মুশরিক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror Before a Survey",
          "bn": "জরিপের আগে আয়না"
        },
        "p": [
          {
            "en": "The natural way to use a verse like this is as a description of other people, and the wording quietly blocks that. 2:11 records the reply of those told not to cause corruption in the earth: we are only reformers. 2:12 answers them. Since the earners here are simply an-nas, the honest first application is inward: which of the disorders I complain about has anything of my own hands in it, and what would returning actually cost me this month?",
            "bn": "এ ধরনের আয়াত পড়লে স্বভাবতই মনে হয়, এ বুঝি অন্যদের কথা। আয়াতের শব্দই চুপচাপ সে পথ বন্ধ করে দেয়। ২:১১ আয়াতে আছে, যাদের বলা হয়েছিল যমীনে বিপর্যয় সৃষ্টি করো না, তারা জবাব দিয়েছিল: আমরা তো কেবল সংশোধনকারী। ২:১২ আয়াত তাদের জবাব দেয়। এখানে উপার্জনকারীরা যেহেতু শুধুই 'আন-নাস', মানুষ, তাই সৎভাবে প্রথম প্রয়োগটা নিজের উপর: যেসব বিশৃঙ্খলা নিয়ে আমি অভিযোগ করি, তার কোনটায় আমার নিজের হাতেরও ভাগ আছে? আর এই মাসে ফিরে আসতে আমাকে আসলে কী ছাড়তে হবে?"
          }
        ]
      }
    ]
  },
  "30:46": {
    "sections": [
      {
        "h": {
          "en": "A Sign in the Wind",
          "bn": "বাতাসে এক নিদর্শন"
        },
        "p": [
          {
            "en": "The verse opens the way a whole run of verses in this surah open: wa-min ayatihi, and of His signs. at-Tabari reads ayat here as His evidences and proofs of His oneness, that He alone is the God of everything. as-Sa'di widens it: the wind is among the proofs that point to His mercy, to His raising of the dead, and to His being the only God worthy of worship. The sign chosen is not a mountain or a star but moving air, something no one sees and everyone feels.",
            "bn": "আয়াতটি শুরু হয় ঠিক সেভাবে, যেভাবে এই সূরার পর পর কয়েকটি আয়াত শুরু হয়েছে, ওয়া মিন আয়াতিহি, আর তাঁর নিদর্শনসমূহের মধ্যে। তাবারী এখানে আয়াত শব্দের অর্থ করেন তাঁর একত্বের প্রমাণ ও দলিল, যে তিনিই সবকিছুর একমাত্র ইলাহ। সাদী অর্থটাকে আরও বিস্তৃত করেন। বাতাস সেই প্রমাণগুলোর একটি, যা ইঙ্গিত করে তাঁর রহমতের দিকে, মৃতকে তাঁর জীবিত করার দিকে, আর তিনিই যে একমাত্র ইবাদতের যোগ্য তার দিকে। নিদর্শন হিসেবে বেছে নেওয়া হয়েছে পাহাড় বা তারা নয়, বরং চলমান বাতাস, যা কেউ দেখে না অথচ সবাই টের পায়।"
          },
          {
            "en": "What follows is a single act of Allah unfolded into a chain of mercies. He sends the winds; the winds herald rain; the rain is a mercy you are made to taste; ships run on that same wind; trade and livelihood travel with the ships; and the sentence closes on gratitude. One thing you cannot hold is traced outward until it touches your food, your work and your sea routes. The reader is asked to follow the chain link by link and see one Hand behind all of it.",
            "bn": "এরপর আল্লাহর একটিমাত্র কাজ খুলে খুলে রহমতের এক লম্বা শিকল হয়ে যায়। তিনি বাতাস পাঠান; বাতাস বৃষ্টির সুসংবাদ আনে; সেই বৃষ্টি এমন রহমত, যার স্বাদ আপনাকে চাখানো হয়; সেই বাতাসেই চলে নৌযান; নৌযানের সঙ্গে চলে ব্যবসা আর জীবিকা; আর বাক্যটি শেষ হয় শুকরিয়ায়। যে জিনিস হাতে ধরা যায় না, তার সূত্র ধরে টেনে আনা হয় আপনার খাবার, আপনার কাজ আর আপনার সমুদ্রপথ পর্যন্ত। পাঠককে বলা হচ্ছে, শিকলটা একটা একটা কড়া ধরে এগোন, আর দেখুন সবকিছুর পেছনে একটিমাত্র হাত।"
          }
        ]
      },
      {
        "h": {
          "en": "Heralds Before the Gift",
          "bn": "দানের আগে আসে খবর"
        },
        "p": [
          {
            "en": "Mubashshirat is the first word of function: the winds are sent as bringers of good tidings. at-Tabari, citing Mujahid, reads the glad tidings plainly as rain, so the winds are sent bearing tidings of the downpour and the mercy. al-Qurtubi gives the reason the winds can count as good news at all: they are heralds because they come before it, ahead of the rain they announce. The herald is not the gift. It is the sign that the gift is on its way.",
            "bn": "বাতাস কী কাজ করে, তা বলার প্রথম শব্দ মুবাশশিরাত: বাতাস পাঠানো হয় সুসংবাদদাতা হিসেবে। তাবারী মুজাহিদের সূত্রে সুসংবাদটাকে সোজাসুজি বৃষ্টি বলে ধরেন; অর্থাৎ বাতাস আসে বর্ষণ আর রহমতের খবর নিয়ে। বাতাসকে আদৌ সুসংবাদ বলা যায় কেন, কুরতুবী তার কারণও বলে দেন: বাতাস খবর আনে, কারণ সে আসে আগে, যে বৃষ্টির ঘোষণা দেয় তারও আগে। খবরবাহক নিজে দান নয়। সে কেবল জানান দেয় যে দান পথে আছে।"
          },
          {
            "en": "al-Muyassar and as-Sa'di describe how the wind carries its message: it stirs up the clouds and gathers them, and at that the hearts of people rejoice before a single drop has fallen. as-Sa'di's phrase is that souls take glad tidings from it before its descent. The good news, in other words, is built into the waiting. You are given the hope first, on purpose, so that the mercy meets a heart already turned upward and expectant rather than a heart caught off guard.",
            "bn": "মুয়াসসার আর সাদী বলেন বাতাস কীভাবে তার খবর বহন করে। সে মেঘ জাগিয়ে তোলে আর তাদের একত্র করে, আর তাতেই মানুষের মন এক ফোঁটা পড়ার আগেই আনন্দে ভরে ওঠে। সাদীর কথায়, তা নামার আগেই মন তা থেকে সুসংবাদ নেয়। অর্থাৎ সুসংবাদটা অপেক্ষার ভেতরেই গেঁথে দেওয়া। আশাটা আপনাকে আগে দেওয়া হয়, ইচ্ছে করেই, যাতে রহমত এসে পায় এমন এক হৃদয় যা আগেই উপরে তাকিয়ে প্রতীক্ষায় আছে, হঠাৎ অপ্রস্তুত অবস্থায় ধরা পড়া নয়।"
          },
          {
            "en": "There is a mercy in that order worth pausing on. Allah could have sent the rain without warning. Instead He sends a messenger ahead of it, a shift in the air that the farmer and the traveller learn to read. The gift is announced before it arrives. For a people taught throughout this surah to read His signs, the wind is a daily rehearsal: notice the herald, trust the promise, and let the hope itself be counted among the kindnesses.",
            "bn": "এই ক্রম নিয়ে একটু থামা যায়, এর মধ্যে এক রহমত আছে। আল্লাহ বিনা খবরে বৃষ্টি পাঠাতে পারতেন। তার বদলে তিনি তার আগে একজন খবরবাহক পাঠান, বাতাসের এক পরিবর্তন যা চাষি আর পথিক পড়তে শেখে। দান আসার আগেই তার ঘোষণা হয়ে যায়। যে জাতিকে এই সূরা জুড়ে তাঁর নিদর্শন পড়তে শেখানো হচ্ছে, তাদের কাছে বাতাস রোজকার এক অনুশীলন। খবরবাহককে খেয়াল করুন, প্রতিশ্রুতিতে ভরসা রাখুন, আর আশাটুকুকেও দয়ার তালিকায় গুনে নিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Made to Taste Mercy",
          "bn": "রহমত আস্বাদন করানো"
        },
        "p": [
          {
            "en": "The second purpose is to let you taste His mercy. Every commentator here reads the mercy as the rain itself. at-Tabari and Ibn Kathir gloss it as the rain He sends down, by which He revives the land and the servants. The land that was dead greens again; the people who were waiting are fed. What is striking is the verb. Allah does not say He gives you His mercy; He says He lets you taste it, and tasting is partial, immediate, personal, the first contact of something larger on the tongue.",
            "bn": "দ্বিতীয় উদ্দেশ্য, যাতে তিনি তোমাদের তাঁর রহমত আস্বাদন করান। এখানে প্রত্যেক তাফসীরকার রহমত বলতে বৃষ্টিকেই বোঝেন। তাবারী আর ইবন কাসীর এর ব্যাখ্যা দেন, সেই বৃষ্টি যা তিনি নামান, যা দিয়ে তিনি জমিন আর বান্দাদের জীবিত করেন। যে জমিন মরে ছিল তা আবার সবুজ হয়, যে মানুষ অপেক্ষায় ছিল তারা খাবার পায়। চমকপ্রদ হল ক্রিয়াটা। আল্লাহ বলেন না যে তিনি তাঁর রহমত দিয়ে দেন, বলেন তিনি তা আস্বাদন করান, আর আস্বাদন তো আংশিক, তাৎক্ষণিক, ব্যক্তিগত, বড় কিছুর প্রথম ছোঁয়া জিভের ডগায়।"
          },
          {
            "en": "The wording is min rahmatihi, of His mercy, a portion and not the whole. as-Sa'di draws the lesson out: you are made to taste enough of His mercy to recognise what it is, that His mercy is the thing which rescues His servants and draws their provision to them. The taste is meant to teach. A sip of rain on dry ground is a small sign pointing at an ocean, and the one who tastes it rightly reads past the water to the One who sent it down.",
            "bn": "শব্দটা মিন রহমাতিহি, তাঁর রহমতের কিছু অংশ, গোটাটা নয়। সাদী শিক্ষাটা টেনে বের করেন। আপনাকে তাঁর রহমতের ততটুকু আস্বাদন করানো হয় যাতে আপনি চিনতে পারেন তা আসলে কী, যে তাঁর রহমতই বান্দাদের রক্ষা করে আর তাদের কাছে রিযিক টেনে আনে। আস্বাদনটা শেখানোর জন্য। শুকনো মাটিতে এক চুমুক বৃষ্টি এক ছোট নিদর্শন, যা দেখায় এক সাগরের দিকে, আর যে ঠিকভাবে তা আস্বাদন করে সে পানি পেরিয়ে পড়ে নেয় সেই একমাত্র সত্তাকে, যিনি তা নামিয়েছেন।"
          },
          {
            "en": "as-Sa'di takes the taste one step further, toward action. Having tasted that His mercy is what saves and supplies, he says, the servant begins to long to do more of the righteous deeds that open the treasuries of that mercy. The rain, then, is not only food for the body. It is an argument. It shows a man in a single season what Allah's mercy does, so that he wants to live in a way that keeps drawing on it.",
            "bn": "সাদী আস্বাদনের কথাটা আরও এক ধাপ এগিয়ে নেন, আমলের দিকে। তিনি বলেন, বান্দা যখন চেখে দেখে যে তাঁর রহমতই বাঁচায় আর রিযিক জোগায়, তখন তার মনে আগ্রহ জাগে সেই নেক আমল আরও বেশি করার, যা এই রহমতের ভান্ডার খুলে দেয়। তাহলে বৃষ্টি কেবল দেহের খাবার নয়, এ এক যুক্তিও। একটি মৌসুমেই বৃষ্টি মানুষকে দেখিয়ে দেয় আল্লাহর রহমত কী করে, যাতে সে এমনভাবে বাঁচতে চায় যে এই রহমত বারবার তার ভাগে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ships at His Command",
          "bn": "তাঁর হুকুমে চলে নৌযান"
        },
        "p": [
          {
            "en": "The third purpose moves from land to sea: so the ships may sail at His command. Ibn Kathir notes the obvious mechanism and then names its driver: the ships run on the sea, and their movement is only by the wind. The same air that herded the clouds now fills the sails. One cause, sent once, reaches the farmer's field and the merchant's deck at the same time. The verse keeps widening the circle of who the wind serves.",
            "bn": "তৃতীয় উদ্দেশ্য স্থল ছেড়ে সমুদ্রে যায়: যাতে তাঁর হুকুমে নৌযান চলে। ইবন কাসীর প্রথমে চোখের সামনের ব্যাপারটা বলেন, তারপর বলেন কে একে চালায়: নৌযান সাগরে চলে, আর চলে কেবল বাতাসের জোরে। যে বাতাস মেঘ তাড়িয়ে এনেছিল, সে-ই এখন পাল ভরায়। একবার পাঠানো একটি কারণ একই সঙ্গে পৌঁছে যায় চাষির ক্ষেতে আর বণিকের জাহাজে। বাতাস কার কার কাজে লাগে, আয়াত সেই বৃত্ত ক্রমেই বড় করে চলে।"
          },
          {
            "en": "al-Qurtubi asks why the verse adds at His command, and his answer keeps the wind from ever becoming an independent power. The winds blow, he says, but are not always favourable, so ships must be anchored and held in place by effort; and sometimes a gale rises and sinks them, and that too is by His command. The sentence that promises the wind as a servant will not let you forget that the servant obeys only Allah. The breeze that carries you and the storm that could drown you answer to one word.",
            "bn": "কুরতুবী প্রশ্ন করেন, আয়াত কেন জুড়ে দেয় তাঁর হুকুমে, আর তাঁর জবাব বাতাসকে কখনো স্বাধীন শক্তি হতে দেয় না। বাতাস বয়, তিনি বলেন, কিন্তু সব সময় অনুকূল নয়, তাই নৌযান নোঙর করে বেঁধে রাখতে হয় কষ্ট করে, আর কখনো ঝড় ওঠে আর তা ডুবিয়ে দেয়, সেটাও তাঁর হুকুমে। যে বাক্য বাতাসকে সেবক হিসেবে পেশ করে, সেটাই আপনাকে ভুলতে দেয় না যে সেবক কেবল আল্লাহরই হুকুম মানে। যে বাতাস আপনাকে বয়ে নেয় আর যে ঝড় আপনাকে ডোবাতে পারে, দুটোই একই কথার অধীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Trade on the Wind",
          "bn": "বাতাসে ভর করে ব্যবসা"
        },
        "p": [
          {
            "en": "The fourth purpose is human work: so you may seek of His bounty. Ibn Kathir reads fadl here as provision through trade, earning a living, and travelling from region to region and land to land. al-Baghawi narrows it to seeking provision by trade across the sea; at-Tabari widens it to the provisions and livelihoods He apportioned among you. The wind that announced rain and drove the ships is now underwriting commerce. What begins as weather ends as a man's income.",
            "bn": "চতুর্থ উদ্দেশ্য মানুষের পরিশ্রম, যাতে তোমরা তাঁর অনুগ্রহ সন্ধান কর। ইবন কাসীর এখানে ফদল বলতে বোঝেন ব্যবসার মাধ্যমে রিযিক, জীবিকা নির্বাহ, আর এক অঞ্চল থেকে আরেক অঞ্চলে, এক দেশ থেকে আরেক দেশে সফর। বাগাভী একে সীমিত করেন সাগরপথে ব্যবসায় রিযিক খোঁজায়, তাবারী একে বিস্তৃত করেন সেই রিযিক আর জীবিকায় যা তিনি তোমাদের মধ্যে ভাগ করে দিয়েছেন। যে বাতাস বৃষ্টির খবর দিল আর নৌযান চালাল, সে-ই এখন ব্যবসার ভিত জোগায়। যা শুরু হয় আবহাওয়া হিসেবে, তা শেষ হয় একজন মানুষের আয়ে।"
          },
          {
            "en": "Notice the word the verse chooses for the human part: tabtaghu, you seek, you go out and look for it. Allah sends the wind; the mercy and the ships are His doing, stated as His purposes. But the bounty is something you are sent out to pursue. The effort is real and the verse honours it. Yet it is called of His bounty, so even the striving is set inside a gift. You work for your provision, and what you work within was sent to you before you lifted a hand.",
            "bn": "খেয়াল করুন আয়াত মানুষের অংশের জন্য কোন শব্দ বেছে নেয়, তাবতাগূ, তোমরা সন্ধান কর, বেরিয়ে পড় আর খোঁজ। আল্লাহ বাতাস পাঠান, রহমত আর নৌযান তাঁরই কাজ, তাঁর উদ্দেশ্য হিসেবে বলা। কিন্তু অনুগ্রহ এমন জিনিস যার পেছনে আপনাকে পাঠানো হয়। পরিশ্রমটা সত্যি, আর আয়াত তাকে মর্যাদা দেয়। তবু তাকে বলা হয় তাঁর অনুগ্রহ, তাই চেষ্টাটুকুও বসানো থাকে এক দানের ভেতরে। আপনি রিযিকের জন্য খাটেন, আর যার ভেতরে থেকে খাটেন তা হাত তোলার আগেই আপনার কাছে পাঠানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "From Certain to Perhaps",
          "bn": "নিশ্চিত থেকে হয়তো"
        },
        "p": [
          {
            "en": "The sentence changes gear at the end. Three purposes are stated with a plain lam of purpose: to let you taste, so the ships may sail, so you may seek. The last is different: la'allakum tashkurun, that perhaps you may be grateful. The mercies are certain; they are what the wind is for. Gratitude is not stated as a certainty but held out as the hoped-for response. Allah guarantees the gift and leaves the thanks open, because thanks that could not be withheld would not be thanks at all.",
            "bn": "শেষে এসে বাক্যের সুর বদলে যায়। তিনটি উদ্দেশ্য বলা হয়েছে সাধারণ কারণবাচক লাম দিয়ে: আস্বাদন করাতে, নৌযান চালাতে, অনুগ্রহ খুঁজতে। শেষটি আলাদা: লাআল্লাকুম তাশকুরূন, যাতে হয়তো তোমরা কৃতজ্ঞ হও। রহমতগুলো নিশ্চিত, বাতাস সেগুলোর জন্যই। কিন্তু শুকরিয়াকে নিশ্চিত বলে ঘোষণা করা হয়নি; একে সামনে রাখা হয়েছে প্রত্যাশিত জবাব হিসেবে। আল্লাহ দানের নিশ্চয়তা দেন আর শুকরিয়াকে খোলা রাখেন, কারণ যে শুকরিয়া আটকে রাখা যায় না তা তো আর শুকরিয়াই নয়।"
          },
          {
            "en": "as-Sa'di reads this closing clause as the whole point of the favours. The intent behind the blessings, he writes, is that they be met with the gratitude of Allah, so that He may increase them for you and keep them upon you. Ibn Kathir fills in what there is to thank for: the favours of Allah, outward and inward, that can be neither counted nor enumerated. The rain you can see; the thousand hidden mercies you cannot. Gratitude is simply the honest reading of a life held up by both.",
            "bn": "সাদী এই শেষ অংশটাকে পড়েন গোটা নিয়ামতের আসল উদ্দেশ্য হিসেবে। তিনি লেখেন, নিয়ামতের পেছনের মকসুদ হলো, তা আল্লাহর শুকরিয়া দিয়ে বরণ করা হোক, যাতে তিনি তা তোমাদের জন্য বাড়িয়ে দেন আর তোমাদের উপর টিকিয়ে রাখেন। কীসের শুকরিয়া, ইবন কাসীর তা বলে দেন: আল্লাহর নিয়ামত, প্রকাশ্য আর গোপন, যা গোনাও যায় না, হিসাবও করা যায় না। বৃষ্টি আপনি দেখেন, হাজারো গোপন রহমত দেখেন না। যে জীবন এই দুই রকম রহমতের উপর দাঁড়িয়ে আছে, তাকে সৎভাবে পড়লে যা দাঁড়ায় তা-ই শুকরিয়া।"
          },
          {
            "en": "as-Sa'di also names the other road. To meet a favour with ingratitude and disobedience, he says, is the state of whoever turns Allah's blessing into a trial and his gift into something he is now liable to lose, exposed to its removal. The warning is quiet but exact. The wind that was sent as mercy does not stay mercy in a heart that refuses to read it. What the verse offers as a gift can be forfeited by whoever will not say thank you.",
            "bn": "সাদী অন্য পথটার কথাও বলেন। নিয়ামত পেয়ে যে অকৃতজ্ঞ হয় আর নাফরমানি করে, সে আল্লাহর নিয়ামতকে বানিয়ে ফেলে বিপদ, আর তাঁর দানকে বানায় এমন কিছু, যা যেকোনো সময় হাতছাড়া হতে পারে, যা কেড়ে নেওয়ার মুখে দাঁড়িয়ে আছে। সতর্কবাণীটা নিচু স্বরে, তবু নিখুঁত। যে বাতাস রহমত হয়ে এসেছিল, যে হৃদয় তা পড়তে রাজি নয়, সেখানে তা আর রহমত থাকে না। আয়াত যা দান হিসেবে দেয়, শুকরিয়া জানাতে যে রাজি নয় সে তা হারাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Gets the Credit",
          "bn": "কৃতিত্ব কার"
        },
        "p": [
          {
            "en": "One sound hadith turns this verse into a test of the tongue. al-Bukhari records from Zayd ibn Khalid al-Juhani that the Prophet ﷺ led the dawn prayer at al-Hudaybiyyah after a night of rain, then turned and asked, Do you know what your Lord has said? He told them Allah said that among His servants that morning were a believer and a disbeliever: whoever said, We were given rain by the bounty of Allah and His mercy, believes in Me and disbelieves in the stars; and whoever said, by such-and-such a star, disbelieves in Me and believes in the star.",
            "bn": "একটি সহীহ হাদিস এই আয়াতকে মুখের কথার পরীক্ষা বানিয়ে দেয়। বুখারী জায়েদ ইবনে খালিদ আল-জুহানী (রাঃ) থেকে বর্ণনা করেন: রাতে বৃষ্টি হওয়ার পর নবী ﷺ হুদায়বিয়ায় ফজরের নামাজ পড়ালেন, তারপর লোকদের দিকে ফিরে জিজ্ঞেস করলেন, তোমরা কি জানো তোমাদের রব কী বলেছেন? এরপর জানালেন, আল্লাহ বলেছেন, আজ সকালে আমার বান্দাদের কেউ মুমিন হয়ে উঠল, কেউ কাফির। যে বলল, আল্লাহর অনুগ্রহ ও রহমতে আমরা বৃষ্টি পেয়েছি, সে আমার উপর ঈমান আনল আর তারকাকে অস্বীকার করল। আর যে বলল, অমুক অমুক তারকার কারণে বৃষ্টি পেয়েছি, সে আমাকে অস্বীকার করল আর তারকার উপর ঈমান আনল।"
          },
          {
            "en": "The believer's words in the hadith are the verse's own words put back on human lips. The rain in this verse is His mercy, and the livelihood it feeds is His bounty; the man Allah calls a believer attributes the rain to exactly that, bi-fadlillahi wa-rahmatihi, the bounty of Allah and His mercy. The difference between faith and its opposite, here, is not whether the rain fell. It is who you name when it does. Gratitude, the verse's final purpose, begins the moment you credit the right Giver.",
            "bn": "হাদিসে মুমিনের মুখের কথাটি আসলে আয়াতেরই কথা, মানুষের মুখে ফিরে এসেছে। এ আয়াতে বৃষ্টি তাঁর রহমত, আর সেই বৃষ্টি যে রিজিক জোগায়, তা তাঁর অনুগ্রহ। আল্লাহ যাকে মুমিন বলেছেন, সে বৃষ্টির কৃতিত্ব দেয় ঠিক এই দুটিকেই: বিফাদলিল্লাহি ওয়া রহমাতিহি, আল্লাহর অনুগ্রহ ও তাঁর রহমতে। এখানে ঈমান আর কুফরের তফাত বৃষ্টি হলো কি হলো না, তাতে নয়। তফাত হলো, বৃষ্টি হলে আপনি কার নাম নেন। আয়াতের শেষ লক্ষ্য শুকরিয়া, আর তা শুরু হয় সেই মুহূর্তে, যখন আপনি আসল দাতাকে কৃতিত্ব দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Wind, Many Mercies",
          "bn": "এক বাতাস, বহু রহমত"
        },
        "p": [
          {
            "en": "Stand back and the verse is one sentence doing a great deal of work. A single thing is sent, the wind, and from it Allah draws a herald, a rainfall, a revived land, a sailing fleet, a trade route and a living. The commentators we have followed each take one link and hold it to the light; read together they show a single cause fanning out into most of what a person needs. The miracle is not only the rain. It is that so much hangs on something so weightless.",
            "bn": "একটু দূর থেকে দেখলে বোঝা যায়, আয়াতটি মাত্র একটি বাক্য, অথচ কত কাজ করছে। পাঠানো হয় একটিমাত্র জিনিস, বাতাস। আর তা থেকেই আল্লাহ বের করে আনেন সুসংবাদের বার্তাবাহক, বৃষ্টি, নতুন করে জেগে ওঠা জমিন, পাল তোলা নৌবহর, ব্যবসার পথ আর জীবিকা। আমরা যে তাফসীরকারদের সঙ্গে চলেছি, তাঁদের প্রত্যেকে এই শিকলের একেকটি কড়া তুলে আলোয় ধরেন। সবগুলো একসঙ্গে পড়লে দেখা যায়, একটি কারণ ছড়িয়ে পড়ছে মানুষের প্রায় সব প্রয়োজনে। মুজিজা শুধু বৃষ্টি নয়। মুজিজা হলো, এত কিছু ঝুলে আছে এমন ওজনহীন একটা জিনিসের উপর।"
          },
          {
            "en": "And the whole chain is built to end somewhere. Three of its clauses describe what the wind does for you; the last describes what is hoped from you. Everything flows toward that quiet perhaps you will be grateful. The verse is not merely explaining the weather. It is teaching a way to stand inside a world of gifts, with the eyes open to where they come from and the tongue ready to name the One who sends them.",
            "bn": "আর এই গোটা শিকলের একটা গন্তব্য আছে। এর তিনটি অংশ বলে, বাতাস আপনার জন্য কী করে। শেষ অংশটি বলে, আপনার কাছে কী আশা করা হয়। সবকিছু গিয়ে থামে সেই মৃদু কথাটিতে: হয়তো তোমরা কৃতজ্ঞ হবে। আয়াত শুধু আবহাওয়ার ব্যাখ্যা দিচ্ছে না। শেখাচ্ছে, দানে ভরা এই দুনিয়ায় কীভাবে দাঁড়াতে হয়। চোখ খোলা রাখতে হয়, দান কোথা থেকে আসে তা দেখার জন্য, আর জিভ তৈরি রাখতে হয়, যিনি এসব পাঠান তাঁর নাম নেওয়ার জন্য।"
          },
          {
            "en": "The hardest thing the verse asks is also the smallest. Not to perform some great act, but to stop treating the wind and the rain as background. The farmer who watches the sky, the trader who waits for a fair breeze, the traveller fed by a harvest a thousand miles off, are all living on one mercy they did not make. To notice that, and to say so, is the whole of what is asked. The gap left at the end of the verse is closed one grateful glance at a time.",
            "bn": "আয়াত যা চায়, তার মধ্যে সবচেয়ে কঠিন কাজটাই আবার সবচেয়ে ছোট। কোনো বড় কাজ করতে হবে না। শুধু বাতাস আর বৃষ্টিকে নিছক পটভূমি ভাবা বন্ধ করতে হবে। যে চাষি আকাশের দিকে চেয়ে থাকে, যে ব্যবসায়ী অনুকূল বাতাসের অপেক্ষায় থাকে, হাজার মাইল দূরের ফসলে যে মুসাফিরের পেট ভরে, সবাই বেঁচে আছে এমন এক রহমতে, যা তারা নিজেরা বানায়নি। এটুকু খেয়াল করা, আর মুখে স্বীকার করা, এই তো পুরো চাওয়া। আয়াতের শেষে যে ফাঁকটুকু খোলা রাখা হয়েছে, তা ভরে ওঠে একেকবার কৃতজ্ঞ চোখে তাকানোয়।"
          }
        ]
      }
    ]
  },
  "30:51": {
    "sections": [
      {
        "h": {
          "en": "After the Rejoicing, One Wind",
          "bn": "আনন্দের পরেই এক বাতাস"
        },
        "p": [
          {
            "en": "These verses have just shown mercy arriving. Allah sends the winds, stirs the clouds, and lets the rain fall on whom He wills, and the people rejoice (30:48); before it came they had been in despair (30:49); and the eye is told to look at the effects of that mercy, how He revives the dead earth (30:50). Ibn Kathir reads 30:48 through 30:50 as one unbroken scene of relief, and only then does the verse turn: and if We send a wind, and they see the crop turned yellow (30:51).",
            "bn": "এর আগের আয়াতগুলো এইমাত্র দেখাল, রহমত কীভাবে আসে। আল্লাহ বাতাস পাঠান, মেঘ জমান, যাকে ইচ্ছা তার উপর বৃষ্টি বর্ষান, আর মানুষ খুশি হয়ে ওঠে (৩০:৪৮)। বৃষ্টি আসার আগে তারা ছিল হতাশ (৩০:৪৯)। তারপর চোখকে বলা হয় সেই রহমতের ফল দেখতে: তিনি কীভাবে মৃত মাটিকে জীবন দেন (৩০:৫০)। ইবন কাসীরের পাঠে ৩০:৪৮ থেকে ৩০:৫০ স্বস্তির একটানা একটি দৃশ্য। ঠিক তারপরই আয়াত মোড় নেয়: আর আমি যদি বাতাস পাঠাই, আর তারা ফসল হলদে হয়ে যেতে দেখে (৩০:৫১)।"
          },
          {
            "en": "The verse is a single conditional: but if We send a wind and they see their crops turned yellow, they would thereafter remain disbelieving. At-Tabari glosses the wind as one that spoils what the rain had grown, so that the green crop turns yellow and ruined; and he fixes the moment of the turning precisely — it is after their rejoicing and their joy in the rain that they would disbelieve in their Lord. The gladness and the denial belong to the same people.",
            "bn": "আয়াতটি একটিমাত্র শর্তবাক্য: আমি যদি বাতাস পাঠাই আর তারা তাদের ফসল হলদে হয়ে যেতে দেখে, তবে এরপর তারা অস্বীকারেই লেগে থাকবে। তাবারীর ব্যাখ্যায় এ বাতাস বৃষ্টিতে গজানো ফসল নষ্ট করে দেয়, ফলে সবুজ খেত হলদে হয়ে বরবাদ হয়ে যায়। মোড়টা ঠিক কখন আসে, তাও তিনি নিখুঁতভাবে বলে দেন: বৃষ্টি পেয়ে তাদের আনন্দ আর খুশির পরেই তারা তাদের রবের সঙ্গে কুফরি করে। খুশি যারা হয়েছিল, অস্বীকারও করে তারাই।"
          },
          {
            "en": "As-Sa'di draws out why the turn is so damning. He sets the yellowing against the mercy just described — the earth revived after its death — and says that at the sight of the blighted crop they would forget the blessings already past and rush straight into disbelief. The failure is not that they grieve a lost harvest; grief is human. The failure is that one setback cancels the whole ledger of mercy, as though the rain that fed them had never been sent at all.",
            "bn": "এই মোড় কেন এত গুরুতর, সাদী তা খুলে দেখান। তিনি হলদে হয়ে যাওয়াকে রাখেন এইমাত্র বলা রহমতের মুখোমুখি, যে রহমতে মরা মাটি আবার জীবন পেয়েছিল। তিনি বলেন, নষ্ট ফসল দেখামাত্র তারা আগের সব নিয়ামত ভুলে যাবে আর সোজা কুফরিতে ঝাঁপিয়ে পড়বে। দোষটা এই নয় যে হারানো ফসলের জন্য তারা কষ্ট পায়। কষ্ট পাওয়া তো মানুষের স্বভাব। দোষটা হলো, একটিমাত্র ধাক্কায় রহমতের গোটা হিসাব মুছে যায়, যেন যে বৃষ্টি তাদের মুখে খাবার তুলে দিয়েছিল, তা কখনো পাঠানোই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Wind, What Yellows",
          "bn": "কোন বাতাস, কী হলদে"
        },
        "p": [
          {
            "en": "The commentators differ over what kind of wind this is, and the difference is worth naming. Ibn Kathir describes a dry wind that strikes the crop after it has grown, matured and stood firm on its stalks. Al-Baghawi calls it a cold, harmful wind that spoils the standing grain. At-Tabari and al-Muyassar read it simply as a corrupting wind. As-Sa'di widens it to any wind that harms, destroys or merely diminishes the growth. Whether cold or scorching, its work is the same: it turns a field of mercy into a field of loss.",
            "bn": "এটা কোন ধরনের বাতাস, তা নিয়ে তাফসীরকারদের মত আলাদা, আর সেই মতভেদটা জেনে রাখার মতো। ইবন কাসীর বলেন, এ এক শুকনো বাতাস, যা আঘাত হানে ফসল বেড়ে উঠে, পেকে, কাণ্ডের উপর শক্ত হয়ে দাঁড়ানোর পর। বাগভী বলেন, এ ঠান্ডা, ক্ষতিকর বাতাস, যা খেতে দাঁড়িয়ে থাকা ফসল নষ্ট করে দেয়। তাবারী ও মুয়াসসারের কাছে এটা সোজা কথায় নষ্ট করে দেওয়া বাতাস। সাদী একে আরও বড় করে দেখেন: যে বাতাস ক্ষতি করে, ধ্বংস করে, কিংবা শুধু ফসলের বাড় কমিয়ে দেয়, সবই এর মধ্যে পড়ে। ঠান্ডা হোক বা ঝলসানো গরম, কাজ একটাই: রহমতের খেতকে সে লোকসানের খেত বানিয়ে দেয়।"
          },
          {
            "en": "The next dispute is over what exactly turns yellow — the word says they saw it yellowed, but it does not spell out the it. Al-Qurtubi records the options. Some said they saw the cloud; Ibn Abbas said it is the crop, the visible trace of the rain. Al-Qurtubi then reads each sign the same way: a crop yellowing after its green points to its drying out, a cloud yellowing points to its holding no rain, and the wind itself points to its failing to pollinate. Every reading lands on the same message of withdrawal.",
            "bn": "পরের মতভেদ: ঠিক কী হলদে হয়? আয়াতের শব্দ বলছে, তারা সেটিকে হলদে দেখল, কিন্তু 'সেটি' কী, তা খুলে বলে না। কুরতুবী মতগুলো তুলে ধরেন। কেউ বলেছেন, তারা মেঘ দেখল; ইবন আব্বাস বলেছেন, এ হলো ফসল, বৃষ্টির চোখে দেখা চিহ্ন। তারপর কুরতুবী প্রতিটি নিদর্শন একইভাবে পড়েন। সবুজের পর ফসল হলদে হওয়া মানে তা শুকিয়ে যাচ্ছে। মেঘ হলদে হওয়া মানে তাতে বৃষ্টি নেই। আর বাতাসের বেলায় এর মানে, তা আর পরাগ বয়ে নেবে না। যে পাঠই ধরুন, বার্তা একই: রহমত গুটিয়ে নেওয়া হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Means Both",
          "bn": "যে শব্দে দুই অর্থ"
        },
        "p": [
          {
            "en": "That last word, yakfurūn, carries two senses at once, and the commentators keep both. Al-Muyassar spells them side by side: after seeing the ruined crop they would remain disbelieving in Allah and denying His blessings. At-Tabari takes the first of these plainly — they would disbelieve in their Lord. On this reading the yellowing wind does not merely sour a mood; it exposes a rejection of God that the good season had kept hidden.",
            "bn": "ওই শেষ শব্দটা, 'ইয়াকফুরূন', একসঙ্গে দুটি অর্থ বহন করে, আর তাফসীরকারেরা দুটোই ধরে রাখেন। মুয়াসসার দুটিকে পাশাপাশি খুলে বলেন: নষ্ট ফসল দেখার পর তারা আল্লাহর সঙ্গে কুফরিতে থেকে যাবে আর তাঁর নিয়ামত অস্বীকার করবে। তাবারী এর প্রথমটি সোজাসুজি নেন, তারা তাদের রবের সঙ্গে কুফরি করবে। এই পাঠে হলদে বাতাস শুধু মন তেতো করে দেয় না। আল্লাহকে অস্বীকারের যে মনোভাব সুদিনে ঢাকা পড়ে ছিল, সেটাই সে ফাঁস করে দেয়।"
          },
          {
            "en": "The second sense is kufr of blessing — ingratitude. Ibn Kathir glosses yakfurūn as denying the blessings that came to them before, and al-Baghawi says the same: they would deny the earlier favour. Held together, the two readings describe one slide: the ingratitude that forgets the gift shades into the unbelief that forgets the Giver. The Arabic does not force a choice, and neither should the reader; the verse lets the small forgetting and the large one stand as versions of the same turning away.",
            "bn": "দ্বিতীয় অর্থটি হলো নিয়ামতের কুফর, অর্থাৎ অকৃতজ্ঞতা। ইবন কাসীর 'ইয়াকফুরূন'-এর ব্যাখ্যায় বলেন, আগে তাদের কাছে আসা নিয়ামতগুলো অস্বীকার করা, আর বাগভীও একই কথা বলেন: তারা আগের অনুগ্রহ অস্বীকার করবে। দুটি পাঠ একসঙ্গে ধরলে একটি পিছলে পড়ার ছবি ফোটে। যে অকৃতজ্ঞতা দানকে ভুলে যায়, তা গড়িয়ে যায় সেই অবিশ্বাসে যা দাতাকে ভুলে যায়। আরবি কোনো একটি পাঠ বেছে নিতে বাধ্য করে না, পাঠকেরও করা উচিত নয়। ছোট ভুলে যাওয়া আর বড় ভুলে যাওয়া, দুইকেই আয়াত একই মুখ ফেরানোর দুই রূপ হিসেবে দাঁড় করায়।"
          }
        ]
      },
      {
        "h": {
          "en": "They Would Keep On",
          "bn": "তারা লেগেই থাকবে"
        },
        "p": [
          {
            "en": "The phrase la-ẓallū min baʿdihi says more than that they would be ungrateful; it says how the ingratitude settles in. Al-Baghawi reads la-ẓallū as la-ṣārū, they would become — a change of state, not a flash of temper. Al-Qurtubi notes that the past-tense verb ẓallū stands here for the future, they would surely remain; the past is used, he says on the authority of al-Khalīl and others, because the sentence carries the force of a conditional, and a conditional looks forward. The grammar itself insists the turning is not momentary.",
            "bn": "'লাজাল্লূ মিন বাদিহি' কথাটা কেবল এটুকু বলে না যে তারা অকৃতজ্ঞ হবে; এটি বলে অকৃতজ্ঞতা কীভাবে থিতু হয়ে বসে। বাগভী 'লাজাল্লূ'-কে পড়েন 'লাসারূ' অর্থে, তারা হয়ে যাবে, অর্থাৎ অবস্থার বদল, মেজাজের ক্ষণিক ঝলক নয়। কুরতুবী বলেন, অতীত কালের ক্রিয়া 'জাল্লূ' এখানে ভবিষ্যতের কথা বলছে: তারা অবশ্যই লেগে থাকবে। খালীল ও অন্যদের বরাতে তিনি জানান, অতীত কাল এসেছে কারণ বাক্যটিতে শর্তের জোর আছে, আর শর্ত সব সময় সামনের দিকে তাকায়। ব্যাকরণ নিজেই বলে দিচ্ছে, এই মুখ ফেরানো ক্ষণিকের নয়।"
          },
          {
            "en": "The little phrase min baʿdihi — after that — pins the turning to a specific trigger. Al-Baghawi reads it as after the yellowing of the crop: the sight itself is the hinge. Al-Muyassar sharpens the staying power with a second verb, saying they would remain after seeing it disbelieving in Allah and denying His gifts. Ibn Kathir agrees that it is after this state that they deny what came before. So the picture is not a sigh and a recovery; it is a single glance at the blighted field, and then a denial that sets and holds.",
            "bn": "ছোট্ট কথাটা 'মিন বাদিহি', অর্থাৎ এরপর, মুখ ফেরানোকে একটা নির্দিষ্ট ঘটনার সঙ্গে বেঁধে দেয়। বাগভীর ব্যাখ্যায় এর মানে ফসল হলদে হওয়ার পর: ওই দৃশ্যটাই মোড় ঘোরায়। মুয়াসসার আরেকটি ক্রিয়া যোগ করে লেগে থাকার ভাবটা আরও স্পষ্ট করেন: তা দেখার পর তারা আল্লাহর সঙ্গে কুফরি আর তাঁর দান অস্বীকার করেই যেতে থাকবে। ইবন কাসীরও বলেন, এই অবস্থার পরেই তারা আগের নিয়ামত অস্বীকার করে। তাই ছবিটা দীর্ঘশ্বাস ফেলে আবার সামলে ওঠার নয়। নষ্ট খেতের দিকে একবার তাকানো, তারপর এমন অস্বীকার, যা জমে বসে যায়, আর নড়ে না।"
          },
          {
            "en": "As-Sa'di catches the other half of the motion — its speed. The ruined crop, he says, has tumbled toward total loss, and at that they rush headlong into kufr, forgetting the mercies behind them. Put the two observations together and the heart in this verse moves in one abrupt arc: a sudden onset at the first bad sign, and then a stubborn persistence in the denial. It is the opposite of a tested patience that waits to see what the loss will teach. It is a verdict passed on God in an afternoon.",
            "bn": "এই মুখ ফেরানোর বাকি অর্ধেকটা ধরেন সাদী: তার গতি। তিনি বলেন, নষ্ট ফসল পুরো ধ্বংসের দিকে গড়িয়ে গেছে, আর তা দেখেই তারা পেছনের সব রহমত ভুলে হুড়মুড় করে কুফরিতে ঝাঁপিয়ে পড়ে। দুটি কথা মিলিয়ে দেখলে এ আয়াতের অন্তরটি চলে এক ঝটকায়: প্রথম খারাপ লক্ষণেই হঠাৎ মুখ ফেরানো, তারপর অস্বীকারে জেদ ধরে থাকা। পরীক্ষায় পোড় খাওয়া ধৈর্য এর ঠিক উল্টো। সে ধৈর্য অপেক্ষা করে, ক্ষতিটা কী শিক্ষা দেয় তা দেখার জন্য। আর এ হলো এক বিকেলের মধ্যেই আল্লাহর বিরুদ্ধে রায় দিয়ে বসা।"
          }
        ]
      },
      {
        "h": {
          "en": "Joy That Does Not Hold",
          "bn": "যে আনন্দ টেকে না"
        },
        "p": [
          {
            "en": "Set this verse beside the rejoicing a few lines earlier and the point sharpens. Al-Baghawi reads the whole stretch as one picture of a conditional heart: these are people who rejoice when the land is fertile, but if a punishment were sent on their crop they would deny the favour that went before. Their faith rises with the green and falls with the yellow. It is pinned to the harvest, and a faith pinned to the harvest is at the mercy of the next wind.",
            "bn": "এই আয়াতটা কয়েক লাইন আগের আনন্দের পাশে রাখলে কথাটা আরও ধারালো হয়। বাগভী গোটা অংশটাকে পড়েন একটি শর্তসাপেক্ষ অন্তরের ছবি হিসেবে: এরা এমন মানুষ, জমি উর্বর হলে যারা আনন্দ করে, কিন্তু তাদের ফসলের উপর শাস্তি পাঠানো হলে আগের অনুগ্রহ তারা অস্বীকার করবে। সবুজের সঙ্গে তাদের ঈমান ওঠে, হলদের সঙ্গে নামে। এ ঈমান ফসলের সঙ্গে গাঁথা, আর ফসলের সঙ্গে গাঁথা ঈমান পরের বাতাসের দয়ার উপর ঝুলে থাকে।"
          },
          {
            "en": "At-Tabari puts the clock on it. The denial comes, he says, straight after their rejoicing and their joy in the rain — the same mouths that praised the downpour now reject the Lord who sent it. Weeks, perhaps, separate the gladness from the grumbling, but no change of heart justifies the reversal; only a change in the weather. That is the exact failure the verse exposes: gratitude that was never really for God, only for the good He happened to be giving at the time.",
            "bn": "সময়টাও তাবারী মেপে দেন। তিনি বলেন, অস্বীকার আসে বৃষ্টি পেয়ে তাদের আনন্দ আর খুশির ঠিক পরেই। যে মুখ ঝুম বৃষ্টির প্রশংসা করেছিল, সেই মুখই এখন বৃষ্টি যিনি পাঠিয়েছেন সেই রবকে অস্বীকার করছে। খুশি আর অভিযোগের মাঝে হয়তো কয়েক সপ্তাহের ফারাক। কিন্তু এই উল্টে যাওয়ার পক্ষে অন্তরে নতুন কোনো কারণ জন্মায়নি, বদলেছে শুধু আবহাওয়া। আয়াত ঠিক এই দোষটাই ফাঁস করে দেয়: সেই কৃতজ্ঞতা আসলে কখনো আল্লাহর জন্য ছিল না। ছিল শুধু সে সময় তিনি যে ভালোটা দিচ্ছিলেন, তার জন্য।"
          },
          {
            "en": "Ibn Kathir reaches for a sister verse to make the same point. In Sūrat al-Wāqiʿa, at 56:63, Allah points to the very seed a farmer sows and asks who makes it grow: were He to will, He could turn the standing crop to brittle debris and leave them exclaiming over the loss. Twice, then, the Qur'an uses the crop as a test of the heart — the field that is received as a gift when it thrives, and resented as a wrong when it fails.",
            "bn": "একই কথা বোঝাতে ইবন কাসীর কাছাকাছি অর্থের আরেকটি আয়াত টেনে আনেন। সূরা আল-ওয়াকিয়ার ৫৬:৬৩ আয়াতে আল্লাহ কৃষকের বোনা বীজের দিকেই ইশারা করে জিজ্ঞেস করেন, কে তা গজায়? তিনি চাইলে দাঁড়ানো ফসলকে ভঙ্গুর খড়কুটো বানিয়ে দিতে পারতেন, আর তারা লোকসানের আফসোসে হায় হায় করত। এভাবে দুই জায়গাতেই কুরআন ফসলকে অন্তরের পরীক্ষা বানায়। খেত যখন ফলে ভরে, মানুষ তাকে উপহার বলে গ্রহণ করে। আর যখন নষ্ট হয়, তখন তাকে নিজের প্রতি অন্যায় ভেবে মনে ক্ষোভ পোষে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Affair Is Good",
          "bn": "সব অবস্থাতেই কল্যাণ"
        },
        "p": [
          {
            "en": "Set against this fickle heart, a sound hadith draws the believer the verse's people are not. Suhayb reported that the Messenger of Allah said: Strange are the ways of a believer, for there is good in every affair of his, and that belongs to no one but the believer: if good fortune reaches him he gives thanks, and that is good for him, and if hardship reaches him he bears it patiently, and that too is good for him. The report is in Sahih Muslim, sound by its compiler's standard.",
            "bn": "আয়াতের লোকেরা যা হতে পারেনি, এই চঞ্চল অন্তরের উল্টো দিকে সেই মুমিনের ছবি আঁকে একটি সহীহ হাদিস। সুহাইব (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: মুমিনের ব্যাপারটা আশ্চর্য, তার প্রতিটি অবস্থাতেই কল্যাণ আছে, আর এটা একমাত্র মুমিন ছাড়া আর কারও নেই। তার কাছে সুখ পৌঁছলে সে শোকর করে, আর তা তার জন্য কল্যাণ; আর কষ্ট পৌঁছলে সে ধৈর্য ধরে, আর তাও তার জন্য কল্যাণ। বর্ণনাটি সহীহ মুসলিমে আছে, তার সংকলকের মানদণ্ডে সহীহ।"
          },
          {
            "en": "This hadith is a general word on the believer's temper, not a comment the collectors tied to this verse; still, read beside it the two paint opposite hearts. The people of the verse found good in the rain and only evil in the drought; the believer, says the Prophet, finds good in both, thankfulness in the ease and patience in the loss. The yellowing wind does not create an ungrateful heart. It only reveals which kind of heart was already there, and the grateful one it leaves standing.",
            "bn": "হাদিসটি মুমিনের স্বভাব নিয়ে একটি সাধারণ কথা; সংকলকেরা একে এই আয়াতের সঙ্গে জুড়ে দেননি। তবু আয়াতের পাশে রাখলে দুটি বিপরীত অন্তরের ছবি ফুটে ওঠে। আয়াতের লোকেরা বৃষ্টিতে কল্যাণ দেখেছিল, আর খরায় দেখেছিল শুধু অকল্যাণ। নবী ﷺ বলছেন, মুমিন দুটোতেই কল্যাণ পায়: সচ্ছলতায় শোকর, আর ক্ষতিতে ধৈর্য। হলদে বাতাস অকৃতজ্ঞ অন্তর বানায় না। সে শুধু দেখিয়ে দেয়, সেখানে আগে থেকে কেমন অন্তর ছিল। আর কৃতজ্ঞ অন্তর সেই বাতাসেও দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tendency, Not a Verdict",
          "bn": "স্বভাব, কোনো রায় নয়"
        },
        "p": [
          {
            "en": "A word of care is due here. The verse describes a human tendency; it does not hand down a verdict on any living person or community. It paints how an ungrateful heart behaves when the harvest fails, and it licenses nothing against anyone — no group may be branded with it, no neighbour measured by it. The Qur'an is holding up a pattern of the soul, not issuing a charge for the reader to carry out against others.",
            "bn": "এখানে একটু সাবধান করে দেওয়া দরকার। আয়াত মানুষের একটা স্বভাবের কথা বলছে; জীবিত কোনো মানুষ বা সম্প্রদায়ের উপর রায় দিচ্ছে না। ফসল নষ্ট হলে অকৃতজ্ঞ অন্তর কেমন আচরণ করে, আয়াত সেই ছবি আঁকে। কারও বিরুদ্ধে কিছু করার অনুমতি এতে নেই। কোনো দলের গায়ে এই তকমা লাগানো যাবে না, কোনো প্রতিবেশীকে এ দিয়ে মাপা যাবে না। কুরআন এখানে মানুষের মনের একটা ধরন তুলে ধরছে, পাঠকের হাতে অন্যের বিরুদ্ধে চালানোর মতো কোনো অভিযোগ তুলে দিচ্ছে না।"
          },
          {
            "en": "Turned the right way, the verse is a mirror, not a window. The they who fall apart at the yellowing wind is the reader on a hard day, not some other people safely out there. The honest question it leaves is not whose gratitude failed, but whether mine would survive a lean season — whether, if what I lean on were pulled away this year, I would still know the Giver by name. That is the only use of the verse that does not turn it into the very ingratitude it warns against.",
            "bn": "ঠিকভাবে ধরলে আয়াতটি আয়না, জানালা নয়। হলদে বাতাসে যে 'তারা' ভেঙে পড়ে, তারা নিরাপদ দূরত্বের অন্য কোনো লোক নয়; তারা কঠিন দিনে পাঠক নিজেই। আয়াত যে সৎ প্রশ্নটা রেখে যায়, তা এই নয় যে কার কৃতজ্ঞতা ভেঙে পড়েছিল। প্রশ্নটা হলো, অভাবের মৌসুমে আমার কৃতজ্ঞতা টিকবে তো? যার উপর আমি ভর দিয়ে আছি, এ বছর তা কেড়ে নেওয়া হলে আমি কি তখনও দাতাকে নাম ধরে চিনব? আয়াতের এটাই একমাত্র ব্যবহার, যা একে সেই অকৃতজ্ঞতায় পরিণত করে না, যার বিরুদ্ধে আয়াত নিজেই সাবধান করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Anchor Beyond the Weather",
          "bn": "আবহাওয়ার বাইরে নোঙর"
        },
        "p": [
          {
            "en": "If the verse diagnoses the illness, it also points to the cure by contrast. As-Sa'di located the danger precisely — forgetting the blessings already past and racing into denial — which means the remedy is to keep the past in view: to refuse to let the newest loss erase a long record of mercy. The practical step is small and plain. Count the standing blessings now, while the field is still green, so that the account is already written when the wind arrives.",
            "bn": "আয়াত যদি রোগটা ধরিয়ে দেয়, উল্টো দিক থেকে ওষুধটাও দেখিয়ে দেয়। বিপদটা ঠিক কোথায়, সাদী তা নিখুঁতভাবে দেখিয়েছিলেন: আগের নিয়ামত ভুলে গিয়ে অস্বীকারের দিকে ছুটে যাওয়া। তাহলে ওষুধ হলো অতীতকে চোখের সামনে রাখা, নতুন কোনো ক্ষতিকে রহমতের লম্বা হিসাব মুছে দিতে না দেওয়া। কাজটা ছোট আর সহজ। হাতে যে নিয়ামতগুলো আছে, সেগুলো এখনই গুনে রাখুন, খেত যখন এখনও সবুজ। যাতে বাতাস আসার আগেই হিসাবটা লেখা হয়ে থাকে।"
          },
          {
            "en": "Then, when the wind does come — and the verse quietly assumes it will — the thankfulness does not go yellow along with the crop. A heart anchored in the Lord of the rain, who is also the Lord of the dry wind, keeps its footing whichever season it stands in. That is the whole aim of this passage, set among the signs of mercy: not to secure better weather, but to grow a gratitude that no weather can reach, and a faith the next wind cannot turn.",
            "bn": "তারপর বাতাস যখন সত্যিই আসবে, আর আয়াত চুপচাপ ধরেই নিয়েছে যে আসবে, তখন ফসলের সঙ্গে কৃতজ্ঞতাও হলদে হয়ে যাবে না। যে অন্তর বৃষ্টির রবের কাছে নোঙর ফেলেছে, যিনি শুকনো বাতাসেরও রব, সে যে মৌসুমেই থাকুক, তার পা টলে না। রহমতের নিদর্শনগুলোর মাঝে রাখা এই অংশের পুরো লক্ষ্য এটাই: ভালো আবহাওয়ার নিশ্চয়তা পাওয়া নয়, বরং এমন কৃতজ্ঞতা গড়ে তোলা, যার নাগাল কোনো আবহাওয়া পায় না, আর এমন ঈমান, যা পরের বাতাসে উল্টে যায় না।"
          }
        ]
      }
    ]
  },
  "30:60": {
    "sections": [
      {
        "h": {
          "en": "The Last Verse of ar-Rum",
          "bn": "সূরা আর-রূমের শেষ আয়াত"
        },
        "p": [
          {
            "en": "Surah ar-Rum has sixty verses, and this is the sixtieth — the surah's closing word. It opens no new subject: the fa fastened to fasbir ties it to what has just been said. 30:58 states that every kind of example has been set out in this Quran, and that if you brought them a sign the disbelievers would say you are only falsifiers. 30:59 follows: thus does Allah seal the hearts of those who do not know.",
            "bn": "সূরা আর-রূমে আয়াত ষাটটি, আর এটিই ষাটতম, সূরার শেষ কথা। নতুন কোনো প্রসঙ্গ এখানে শুরু হয় না: 'ফাসবির'-এর শুরুতে জুড়ে থাকা 'ফা' একে ঠিক আগের কথার সঙ্গে বেঁধে দেয়। 30:58 আয়াত বলে, এই কুরআনে মানুষের জন্য সব রকম দৃষ্টান্ত পেশ করা হয়েছে; আর তুমি যদি তাদের কাছে কোনো নিদর্শন নিয়েও আসো, কাফিররা তবুও বলবে, তোমরা তো কেবল মিথ্যাবাদী। এরপর আসে 30:59: এভাবেই আল্লাহ মোহর মেরে দেন তাদের অন্তরে, যারা জানে না।"
          },
          {
            "en": "So patience is prescribed here as the answer to a refusal that has already hardened, not to an argument still being won. The command is a single word, fasbir, addressed to the Prophet ﷺ. What the surah hands him at the very end is not a fresh proof to put in front of them. It is an instruction about how to stand while they go on declining the proofs that have already been given.",
            "bn": "তাই এখানে ধৈর্যের হুকুম এসেছে এমন প্রত্যাখ্যানের জবাবে, যা আগেই জমাট বেঁধে গেছে, এখনও চলতে থাকা কোনো তর্কের জবাবে নয়। হুকুমটি একটিমাত্র শব্দ, 'ফাসবির', আর তা নবী ﷺ-কে উদ্দেশ করে। সূরার একেবারে শেষে তাঁর হাতে নতুন কোনো প্রমাণ তুলে দেওয়া হচ্ছে না, যা তিনি তাদের সামনে রাখবেন। দেওয়া হচ্ছে একটি নির্দেশনা: যে প্রমাণগুলো আগেই দেওয়া হয়েছে, তারা যখন সেগুলো ফিরিয়ে দিয়েই চলেছে, তখন তিনি কীভাবে অটল থাকবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise at Both Ends",
          "bn": "দুই প্রান্তে একটি ওয়াদা"
        },
        "p": [
          {
            "en": "The surah opened on a defeat. 30:2-3 report that the Byzantines have been defeated in the nearest land and that they, after their defeat, will overcome; 30:4-5 add that on that day the believers will rejoice in the victory of Allah. Then 30:6 puts a seal on it: the promise of Allah; Allah does not fail in His promise; but most of the people do not know.",
            "bn": "সূরাটি শুরু হয়েছিল একটি পরাজয় দিয়ে। 30:2-3 আয়াত জানায়, রোমকরা নিকটবর্তী ভূখণ্ডে পরাজিত হয়েছে, আর তারা এই পরাজয়ের পর বিজয়ী হবে; 30:4-5 আয়াত যোগ করে, সেদিন মুমিনরা আল্লাহর সাহায্যে আনন্দিত হবে। এরপর 30:6 আয়াত তাতে সিলমোহর বসায়: এ আল্লাহর ওয়াদা; আল্লাহ তাঁর ওয়াদা ভঙ্গ করেন না; কিন্তু অধিকাংশ মানুষ তা জানে না।"
          },
          {
            "en": "Fifty-four verses later the surah closes on the same two words. Inna wa'da Allahi haqq — indeed, the promise of Allah is truth. The opening said He does not break it; the closing says it is real. And both sentences end by naming a deficiency in the audience rather than any doubt about the promise: at 30:6 most of the people do not know, and here, those who do not attain certainty.",
            "bn": "চুয়ান্নটি আয়াত পরে সূরাটি শেষ হয় ঠিক সেই দুটি শব্দ দিয়েই। ইন্না ওয়াদাল্লাহি হাক্ক — নিশ্চয়ই আল্লাহর ওয়াদা সত্য। শুরুতে বলা হয়েছিল, তিনি তা ভঙ্গ করেন না; শেষে বলা হচ্ছে, তা বাস্তব। আর দুটি বাক্যই শেষ হয় শ্রোতাদের একটি ঘাটতির নাম নিয়ে, ওয়াদা সম্পর্কে কোনো সংশয় দিয়ে নয়: 30:6-এ, অধিকাংশ মানুষ জানে না; আর এখানে, যারা দৃঢ় বিশ্বাসে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Makes You Light",
          "bn": "যে ক্রিয়া আপনাকে হালকা করে"
        },
        "p": [
          {
            "en": "Wa la yastakhiffannaka. The verb is built on khiffa, lightness. Istakhaffa is to find a thing light, to treat it as weightless, and so to make a person flighty — to move him off his own gravity. The heavy nun of emphasis is fastened to its end, the form Arabic keeps for its most forceful prohibitions. Grammatically the prohibition is addressed to them, while the one it protects is him.",
            "bn": "ওয়া লা ইয়াসতাখিফফান্নাকা। ক্রিয়াটির মূলে আছে 'খিফ্‌ফা', অর্থাৎ হালকা হওয়া। 'ইসতাখাফ্‌ফা' মানে কোনো কিছুকে হালকা মনে করা, ওজনহীন ভাবা। সেখান থেকে এর মানে দাঁড়ায় কাউকে অস্থির করে তোলা, তাকে তার নিজের ভার থেকে টলিয়ে দেওয়া। ক্রিয়ার শেষে জুড়ে দেওয়া হয়েছে জোরের ভারী 'নূন', আরবি যে গঠন রেখে দেয় তার সবচেয়ে কড়া নিষেধের জন্য। ব্যাকরণের দিক থেকে নিষেধটা তাদের প্রতি, অথচ রক্ষা করা হচ্ছে তাঁকে।"
          },
          {
            "en": "The same verb is used of Fir'awn at 43:54: he made his people light, and they obeyed him — a crowd rendered weightless enough to be carried along. That is the danger being named. The verse does not warn the Prophet ﷺ against their arguments; it warns him against their weightlessness, which is catching. Mockery, restlessness and shrugging work on a person along a different channel from evidence, and they need a different defence.",
            "bn": "একই ক্রিয়া এসেছে ফেরাউনের বেলায়, 43:54 আয়াতে: সে তার কওমকে হালকা করে ফেলল, আর তারা তার কথা মেনে নিল। এমন এক জনতা, যাদের এতটা ওজনহীন করে ফেলা হয়েছিল যে সহজেই ভাসিয়ে নেওয়া যায়। এখানে এই বিপদের কথাই বলা হচ্ছে। আয়াত নবী ﷺ-কে তাদের যুক্তি থেকে সাবধান করছে না; সাবধান করছে তাদের ওজনহীনতা থেকে, যা ছোঁয়াচে। ঠাট্টা, অস্থিরতা আর কাঁধ ঝাঁকিয়ে উড়িয়ে দেওয়া মানুষের উপর কাজ করে প্রমাণের চেয়ে ভিন্ন পথে, তাই এগুলোর বিরুদ্ধে প্রতিরোধও লাগে ভিন্ন রকম।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Without Certainty",
          "bn": "যাদের দৃঢ় বিশ্বাস নেই"
        },
        "p": [
          {
            "en": "They are not named here as deniers or as enemies. They are named by an absence: alladhina la yuqinun, those who do not attain certainty. Yaqin is knowledge that has come to rest, and its opposite is not necessarily loud rejection. It can be a permanent unsettledness — a person who never finishes deciding anything and cannot bear the company of someone who has. The description fits people who would deny being opponents at all.",
            "bn": "এখানে তাদের অস্বীকারকারী বা শত্রু বলা হয়নি। তাদের চেনানো হয়েছে একটা অভাব দিয়ে: 'আল্লাযীনা লা ইউকিনূন', যারা দৃঢ় বিশ্বাসে পৌঁছায় না। 'ইয়াকীন' হলো এমন জ্ঞান, যা থিতু হয়ে বসেছে। আর এর উল্টোটা সব সময় গলা চড়িয়ে অস্বীকার করা নয়। তা হতে পারে চিরস্থায়ী এক দোটানা: মানুষটা কোনো ব্যাপারেই মন স্থির করে উঠতে পারে না, আর যে মন স্থির করে ফেলেছে, তার সঙ্গও সইতে পারে না। এই বর্ণনা এমন লোকদের সঙ্গেও মেলে, যারা নিজেদের বিরোধী বলে মানতেই রাজি নয়।"
          },
          {
            "en": "Elsewhere the two words of this verse appear together as qualifications. 32:24 says: and We made from among them leaders guiding by Our command when they were patient, and they were certain of Our signs. Patience and certainty together produced guides for other people. Here the pair is split: one of them is commanded to the Prophet ﷺ, and the lack of the other is what he is told not to catch.",
            "bn": "অন্য জায়গায় এই আয়াতের দুটি শব্দ একসঙ্গে এসেছে যোগ্যতার শর্ত হিসেবে। 32:24 আয়াত বলে: আর আমি তাদের মধ্য থেকে নেতা বানিয়েছিলাম, যারা আমার নির্দেশে পথ দেখাত, যখন তারা ধৈর্য ধরেছিল আর আমার নিদর্শনগুলোতে দৃঢ় বিশ্বাস রাখত। ধৈর্য আর দৃঢ় বিশ্বাস মিলে তৈরি করেছিল অন্যদের পথপ্রদর্শক। এখানে জোড়াটি আলাদা হয়ে গেছে: একটির হুকুম দেওয়া হয়েছে নবী ﷺ-কে, আর অন্যটির অভাব যেন তাঁকে ছুঁয়ে না যায়, সে ব্যাপারে তাঁকে সাবধান করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ending a Surah on Sabr",
          "bn": "ধৈর্য দিয়ে সূরার সমাপ্তি"
        },
        "p": [
          {
            "en": "This is not the only surah that closes on the command. 10:109 ends Yunus with: follow what is revealed to you, and be patient until Allah judges, and He is the best of judges. 46:35 ends al-Ahqaf with: so be patient as were those of determination among the messengers, and do not be impatient for them. In each case the last thing said concerns the stretch of time between a promise and its arrival.",
            "bn": "শুধু এই সূরাটিই যে এমন হুকুম দিয়ে শেষ হয়, তা নয়। সূরা ইউনুস শেষ হয় 10:109 আয়াতে: তোমার প্রতি যে ওহি পাঠানো হয় তার অনুসরণ করো, আর ধৈর্য ধরো যতক্ষণ না আল্লাহ ফয়সালা করেন; তিনিই শ্রেষ্ঠ ফয়সালাকারী। সূরা আল-আহকাফ শেষ হয় 46:35 আয়াতে: তুমি ধৈর্য ধরো, যেমন ধৈর্য ধরেছিলেন দৃঢ়প্রতিজ্ঞ রাসূলগণ, আর তাদের ব্যাপারে তাড়াহুড়ো করো না। প্রতিটি ক্ষেত্রেই শেষ কথাটি সেই সময়টুকু নিয়ে, যা পড়ে থাকে ওয়াদা আর তা পূরণ হওয়ার মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Through the Wait",
          "bn": "অপেক্ষার ভেতরে দাঁড়িয়ে থাকা"
        },
        "p": [
          {
            "en": "The verse gives no date. It says the promise is true and it says be patient, and it puts nothing at all between those two statements. That is the whole content of waiting: certainty about the outcome, no information about the schedule. Much of what wears believers down is supplying the missing date themselves and then being crushed by a deadline nobody gave them.",
            "bn": "আয়াতে কোনো তারিখ নেই। আয়াত বলে, ওয়াদা সত্য; আর বলে, ধৈর্য ধরো। এই দুই কথার মাঝখানে আর কিছুই রাখে না। অপেক্ষা বলতে আসলে এটুকুই: পরিণতি নিয়ে পুরো নিশ্চয়তা, কিন্তু কবে, সে খবর নেই। মুমিনদের যা সবচেয়ে বেশি ক্লান্ত করে, তার অনেকটাই হলো না-দেওয়া তারিখটা নিজেরাই বসিয়ে নেওয়া, তারপর এমন এক সময়সীমার চাপে ভেঙে পড়া, যা কেউ তাদের দেয়নি।"
          },
          {
            "en": "The practical test it offers is a question about who moves you. Not who out-argues you, which is rare, but whose sigh, whose amused look, whose casual asking whether any of this really matters leaves you lighter than you were an hour earlier. The verse says the exposure itself is the risk. And it prescribes weight in return: a promise known to be true, held onto until it is no longer needed, because it has arrived.",
            "bn": "আয়াত যে বাস্তব পরীক্ষাটা দেয়, তা একটা প্রশ্ন: কে আপনাকে টলায়? কে আপনাকে তর্কে হারায়, তা নয়; সেটা কমই ঘটে। বরং কার দীর্ঘশ্বাস, কার মুচকি হাসি মেশানো চাহনি, কার আলগোছে জিজ্ঞেস করা, 'এসবের আদৌ কোনো মানে আছে কি?', আপনাকে এক ঘণ্টা আগের চেয়ে হালকা করে দিয়ে যায়? আয়াত বলছে, এদের সংস্পর্শে থাকাটাই ঝুঁকি। আর এর জবাবে আয়াত দেয় ভার: এমন এক ওয়াদা, যা সত্য বলে জানা। সেটা আঁকড়ে ধরে থাকতে হয়, যতক্ষণ না তা এসে পড়ে, আর আঁকড়ে থাকার দরকারই ফুরিয়ে যায়।"
          }
        ]
      }
    ]
  }
});
