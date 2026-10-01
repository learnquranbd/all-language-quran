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
          "bn": "পরাজয়ের ভেতরে বাঁধা তারিখ"
        },
        "p": [
          {
            "en": "The surah opens with a report that sounds like bad news. Ghulibat al-Rum: the Byzantines have been defeated, fi adna al-ard, in the nearest land. The Persians, a fire-worshipping power, had broken the Christian empire of Rome, and word of it reached Makkah while the Prophet (ﷺ) was still there. As as-Sa'di notes, Persia and Rome were then among the strongest states on earth, and this was no border skirmish but a crushing loss for the side the believers felt closest to.",
            "bn": "সূরাটি শুরু হয় এমন এক খবর দিয়ে, যা শুনতে দুঃসংবাদের মতো। গুলিবাতির রূম: রোমানরা পরাজিত হয়েছে, ফী আদনাল আরদ, নিকটতম ভূমিতে। আগুন-পূজারি শক্তি পারস্য ভেঙে দিয়েছে খ্রিস্টান রোমান সাম্রাজ্যকে, আর এ খবর মক্কায় পৌঁছল তখন, যখন নবী ﷺ সেখানেই ছিলেন। সাদী বলেন, সে সময় পারস্য আর রোম ছিল পৃথিবীর সবচেয়ে শক্তিশালী রাষ্ট্রগুলোর অন্যতম। এটা কোনো সীমান্তের ছোট সংঘর্ষ ছিল না, ছিল সেই পক্ষের গুঁড়িয়ে যাওয়া পরাজয়, মুমিনরা যাদের নিজেদের কাছের মনে করত।"
          },
          {
            "en": "The lines that follow turn the defeat around. Wa-hum min ba'di ghalabihim sayaghlibun: and they, after their defeat, will themselves overcome, fi bid'i sinin, within a few years. Verse three is the hinge of the whole passage; it holds both halves, the fall and the promised rise, in a single breath. The parties mattered. The Persians were idolaters like the Quraysh; the Romans were People of the Book, nearer to the believers in creed. as-Sa'di: the Muslims loved a Roman victory, the idolaters a Persian win.",
            "bn": "এর পরের কথাগুলো পরাজয়কেই উল্টে দেয়। ওয়াহুম মিন বা'দি গালাবিহিম সাইয়াগলিবূন: আর তারা তাদের পরাজয়ের পর নিজেরাই জয়ী হবে, ফী বিদ'ই সিনীন, কয়েক বছরের মধ্যেই। ৩ নম্বর আয়াত গোটা অনুচ্ছেদের কব্জা। পতন আর প্রতিশ্রুত উত্থান, দুই অর্ধেক এক নিঃশ্বাসে ধরে রাখে এই আয়াত। পক্ষ দুটো কারা, তা জরুরি। পারসিকরা কুরাইশদের মতোই মূর্তিপূজারি, আর রোমানরা আহলে কিতাব, বিশ্বাসে মুমিনদের বেশি কাছের। সাদী বলেন, মুসলিমরা চাইত রোমের জয়, আর মুশরিকরা চাইত পারস্যের।"
          },
          {
            "en": "al-Baghawi records how the defeat was thrown in the believers' faces. The idolaters of Makkah told the Muslims: you are People of the Book and so are the Christians, we are unlettered like the Persians, our side has beaten your side, and if you fight us we will beat you too. It was a taunt built on an analogy, and the revelation answered it not by denying the loss but by naming what would come after it.",
            "bn": "পরাজয়টা কীভাবে মুমিনদের মুখের ওপর ছুঁড়ে মারা হয়েছিল, বাগাভী তা তুলে ধরেন। মক্কার মুশরিকরা মুসলিমদের বলল: তোমরা আহলে কিতাব, খ্রিস্টানরাও আহলে কিতাব, আর আমরা পারসিকদের মতোই নিরক্ষর। আমাদের পক্ষ তোমাদের পক্ষকে হারিয়েছে, তোমরা আমাদের সঙ্গে লড়লে তোমাদেরও হারাব। এটা ছিল এক তুলনার ওপর গড়া খোঁচা। ওহি এর জবাব দিল পরাজয়কে অস্বীকার করে নয়, বরং এর পরে কী আসবে তা জানিয়ে দিয়ে।"
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
            "bn": "ফী আদনাল আরদ, নিকটতম ভূমিতে। কুরতুবী আদনা শব্দের সোজা অর্থ দেন: এর মানে আকরাব, নিকটতম। কিন্তু নিকটতম কার কাছে? তাবারী একে পড়েন শামের ভূমি থেকে পারস্যের ভূমি পর্যন্ত বিস্তৃত এলাকা হিসেবে। এরপর তাফসীরকারেরা জায়গাটা স্থির করেন ভিন্ন ভিন্নভাবে। ইকরিমা যুদ্ধটা রাখেন আযরিআত আর বুসরায়, যাকে তিনি বলেন আরব ভূমির সবচেয়ে কাছের শাম অঞ্চল, সেখানেই দুই বাহিনীর মুখোমুখি হওয়া।"
          },
          {
            "en": "Others move the pin. Mujahid names al-Jazira, the region lying between Iraq and Syria. Muqatil puts it in Jordan and Palestine. Ibn 'Atiyya reconciles the reports by noticing that nearest shifts with the vantage point: if the clash was at Adhri'at it is the nearest land relative to Makkah; if in al-Jazira, nearest to the land of the Persian king; if in Jordan, nearest to the land of the Romans. One word, read from three cities, still fits.",
            "bn": "অন্যরা কাঁটাটা সরিয়ে দেন। মুজাহিদ নাম নেন জাযীরার, ইরাক আর শামের মাঝের অঞ্চল। মুকাতিল রাখেন জর্ডান আর ফিলিস্তিনে। ইবন আতিয়্যা বর্ণনাগুলো মিলিয়ে দেন এই লক্ষ করে যে নিকটতম কথাটা দৃষ্টিকোণ অনুসারে সরে যায়। যুদ্ধ যদি আযরিআতে হয়, তবে তা মক্কার হিসাবে নিকটতম ভূমি; জাযীরায় হলে পারস্য-সম্রাটের ভূমির নিকটতম; জর্ডানে হলে রোমের ভূমির নিকটতম। একটি শব্দ, ৩ শহর থেকে পড়লেও, মিলে যায়।"
          },
          {
            "en": "There is a further sense folded into adna. Its root carries both nearness and lowness, and the ground Muqatil names, the Jordan valley running down toward the Dead Sea, is the lowest land on the face of the earth. The commentators quoted here settle on nearest, yet the word itself leaves the other sense standing, and the geography sits comfortably with either reading. A single term holds both the measure of distance and the lie of the land.",
            "bn": "আদনা শব্দের ভেতরে আরেকটি অর্থও ভাঁজ করা আছে। এর ধাতু বহন করে নিকটতা আর নিম্নতা, দুটোই। আর মুকাতিল যে ভূমির নাম নেন, জর্ডান উপত্যকা যা নেমে গেছে মৃত সাগরের দিকে, তা পৃথিবীর বুকে সবচেয়ে নিচু ভূমি। এখানে উদ্ধৃত তাফসীরকারেরা স্থির হন নিকটতম অর্থে, তবু শব্দটা নিজেই আরেক অর্থকে দাঁড় করিয়ে রাখে, আর ভূগোল দুই পাঠের সঙ্গেই স্বচ্ছন্দে বসে। একটি শব্দ ধরে রাখে দূরত্বের মাপ আর ভূমির ঢাল, দুটোই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings, Two Prophecies",
          "bn": "এক আয়াত, দুই পাঠ"
        },
        "p": [
          {
            "en": "The verse carries one of the most consequential variant readings in the Qur'an, and the commentators name it openly. The dominant reading is ghulibat al-Rum, passive, the Romans have been defeated, with a damma on the ghayn, paired with sayaghlibun in the active, they will overcome. Abu Ja'far an-Nahhas states flatly that this is the reading of most people. Ibn 'Atiyya calls the damma reading the more sound, and notes that people are agreed on sayaghlibun with a fatha, meaning the Romans.",
            "bn": "কুরআনের সবচেয়ে গুরুত্বপূর্ণ কিরাআত-ভিন্নতাগুলোর একটি এই আয়াতে, আর তাফসীরকারেরা তা খোলাখুলি উল্লেখ করেন। প্রধান পাঠ হলো গুলিবাতির রূম, কর্মবাচ্য, রোমানরা পরাজিত হয়েছে, গাইন অক্ষরে পেশ দিয়ে, আর এর সঙ্গে কর্তৃবাচ্যে সাইয়াগলিবূন, তারা জয়ী হবে। আবু জাফর নাহহাস সোজাসুজি বলেন, এটাই অধিকাংশ মানুষের পাঠ। ইবন আতিয়্যা পেশের পাঠকে বলেন বেশি বিশুদ্ধ, আর জানান, সাইয়াগলিবূন শব্দে ইয়া অক্ষরে যবর দিয়ে রোমানদের বোঝানো নিয়ে সবাই একমত।"
          },
          {
            "en": "A minority read it the other way. al-Qurtubi reports that Abu Sa'id al-Khudri, 'Ali ibn Abi Talib and Mu'awiya ibn Qurra recited ghalabat al-Rum, active, the Romans have conquered, and that Ibn 'Umar read sayughlabun in the passive, they will be defeated. Read this way the prophecy turns inside out: the Romans have just won, and it is now the other side whose fall is foretold. Ibn 'Atiyya says this reading inverts the meaning that the mass of reports corroborate.",
            "bn": "অল্প কিছু পাঠক পড়েন উল্টোভাবে। কুরতুবী বর্ণনা করেন, আবু সাঈদ খুদরী, আলী ইবন আবি তালিব আর মুআবিয়া ইবন কুররা পড়তেন গালাবাতির রূম, কর্তৃবাচ্য, রোমানরা জয়ী হয়েছে, আর ইবন উমর পড়তেন সাইয়ুগলাবূন কর্মবাচ্যে, তারা পরাজিত হবে। এভাবে পড়লে ভবিষ্যদ্বাণীটা ভেতর-বাহির উল্টে যায়। রোমানরা সবেমাত্র জিতেছে, আর এখন অন্য পক্ষের পতনই আগাম বলা হচ্ছে। ইবন আতিয়্যা বলেন, এই পাঠ সেই অর্থকে উল্টে দেয়, বর্ণনার বড় অংশ যা সমর্থন করে।"
          },
          {
            "en": "The grammar is what moves the referent. In the dominant reading the Romans are the object of the first verb, defeated, then the subject of the second, the ones who will overcome, so min ba'di ghalabihim means after their own defeat. an-Nahhas spells out the other path: whoever reads sayughlabun makes the sense and the Persians, after their victory, will be defeated. A single vowel decides who is beaten and who is beaten back. Both are transmitted; the first is what the chains overwhelmingly carry.",
            "bn": "কাকে বোঝানো হচ্ছে, সেটা সরিয়ে দেয় ব্যাকরণই। প্রধান পাঠে রোমানরা প্রথম ক্রিয়ার কর্ম, পরাজিত, আর দ্বিতীয় ক্রিয়ার কর্তা, যারা জয়ী হবে। তাই মিন বা'দি গালাবিহিম মানে তাদের নিজেদের পরাজয়ের পর। নাহহাস খুলে দেন অন্য পথটা: যে সাইয়ুগলাবূন পড়ে, তার কাছে অর্থ দাঁড়ায় আর পারসিকরা তাদের জয়ের পর পরাজিত হবে। একটিমাত্র স্বরচিহ্ন ঠিক করে দেয় কে হারল আর কে পাল্টা হারাল। দুটো পাঠই বর্ণিত, তবে সনদের বড় ভার প্রথমটির দিকেই।"
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
            "en": "The prophecy was so improbable that it was staked on camels. at-Tirmidhi records from Niyar ibn Mukram al-Aslami that when the verses came down, Persia was dominant over Rome, and the Muslims longed for a Roman victory because the Romans were People of the Book, while the Quraysh wanted Persia, who shared their idolatry and their denial of the Resurrection. Abu Bakr (رضي الله عنه) went out proclaiming the verses through the quarters of Makkah.",
            "bn": "ভবিষ্যদ্বাণীটা এতটাই অসম্ভব ছিল যে তার ওপর উটের বাজি ধরা হয়েছিল। তিরমিযী নিয়ার ইবন মুকরিম আসলামী থেকে বর্ণনা করেন, আয়াতগুলো নাজিল হওয়ার সময় পারস্য ছিল রোমের ওপর বিজয়ী। মুসলিমরা চাইত রোমের জয়, কারণ রোমানরা আহলে কিতাব; আর কুরাইশরা চাইত পারস্যের জয়, কারণ তারা কুরাইশদের মতোই মূর্তিপূজারি আর পুনরুত্থান অস্বীকারকারী। আবু বকর (রাঃ) বেরিয়ে পড়লেন মক্কার অলিগলিতে আয়াতগুলো ঘোষণা করতে করতে।"
          },
          {
            "en": "Some Quraysh challenged him to a bet, before betting was forbidden, and the narration runs: \"They said to Abu Bakr: Bid' means between three and nine years, so let us agree on the middle. So they agreed on six years. Then six years passed without the Romans being victorious, and the idolaters took what they won in the bet from Abu Bakr. When the seventh year came and the Romans finally beat the Persians, the Muslims rebuked Abu Bakr for agreeing to six years. He said: Because Allah said: In Bid' years. At that time, many people became Muslims.\" at-Tirmidhi graded it sahih hasan gharib.",
            "bn": "কিছু কুরাইশ তাঁকে বাজির চ্যালেঞ্জ দিল, আর এটা ছিল বাজি নিষিদ্ধ হওয়ার আগের ঘটনা। বর্ণনাটি এমন: \"তারা আবু বকরকে বলল: বিদ' মানে ৩ থেকে ৯ বছরের মাঝামাঝি কিছু, তাই চলো মাঝের একটা স্থির করি। তারা স্থির করল ৬ বছর। এরপর ৬ বছর কেটে গেল, রোমানরা জয়ী হলো না, আর মুশরিকরা আবু বকরের কাছ থেকে বাজির মাল নিয়ে নিল। সপ্তম বছর যখন এল, রোমানরা শেষমেশ পারস্যের ওপর জয়ী হলো। মুসলিমরা আবু বকরকে ছয় বছর ঠিক করার জন্য দোষারোপ করল। তিনি বললেন: কারণ আল্লাহ বলেছেন বিদ' বছরের মধ্যে। তখন বহু মানুষ ইসলাম গ্রহণ করল।\" তিরমিযী একে সহীহ হাসান গরীব বলেছেন।"
          },
          {
            "en": "Two things in the report deserve care. The bet was a form of gambling, and the narration itself marks it as before betting was forbidden; once it was prohibited in Madinah this was no longer open to anyone, and the commentators note the Prophet (ﷺ) later told Abu Bakr to give such winnings away in charity. And the lesson Abu Bakr drew was precise: he had fixed six years, but the word was bid', which the scholars gloss as between three and nine, the Qur'an's own margin and not his.",
            "bn": "বর্ণনার দুটি জিনিস সতর্কতা চায়। বাজিটা ছিল জুয়ার একটা রূপ, আর বর্ণনা নিজেই একে চিহ্নিত করে বাজি নিষিদ্ধ হওয়ার আগের বলে। মদিনায় তা হারাম হয়ে যাওয়ার পর এ পথ আর কারও জন্য খোলা থাকেনি, আর তাফসীরকারেরা বলেন, নবী ﷺ পরে আবু বকরকে এমন জেতা মাল সদকা করে দিতে বলেছিলেন। আর আবু বকর যে শিক্ষা নিলেন তা ছিল সূক্ষ্ম: তিনি ৬ বছর বেঁধেছিলেন, কিন্তু শব্দটা ছিল বিদ', যাকে আলেমরা অর্থ করেন ৩ থেকে ৯, কুরআনের নিজের দেওয়া ব্যবধান, তাঁর নয়।"
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
            "bn": "ভবিষ্যদ্বাণীটা যখন করা হয়, তখন তা কতটা অসম্ভব ছিল, মাআরিফুল কুরআন তা খুলে দেখায়। পারস্য রোমান সাম্রাজ্যকে এমনভাবে ভেঙে দিয়েছিল যে কার্যকারণের স্বাভাবিক জগতে কোনো পর্যবেক্ষকই উল্টো ফলাফলের কথা ভাবতে পারত না। তাফসীরটি রোমের ঐতিহাসিক এডওয়ার্ড গিবনকে উদ্ধৃত করে, যিনি লিখেছেন, ভবিষ্যদ্বাণীটি যখন দেওয়া হয়, কোনো ভবিষ্যদ্বাণী এর বাস্তবায়ন থেকে এত দূরে থাকতে পারত না, কারণ হিরাক্লিয়াসের প্রথম বছরগুলো সাম্রাজ্যের আসন্ন ধ্বংসেরই আভাস দিচ্ছিল।"
          },
          {
            "en": "That is precisely why the commentators treat the verse as a proof. Ma'arif notes that for a claimant to prophethood to stake his standing on so improbable an event, and be vindicated, is among the solid signs of his truthfulness. an-Nahhas adds a second reason the believers rejoiced: not only that a kindred people won, but that Allah's promise was kept to the year, and the fulfilment itself was the evidence that the one who spoke it spoke from God.",
            "bn": "ঠিক এ কারণেই তাফসীরকারেরা আয়াতটিকে এক প্রমাণ হিসেবে দেখেন। মাআরিফুল কুরআন বলে, নবুয়তের দাবিদার যদি এমন অসম্ভব এক ঘটনার ওপর নিজের মর্যাদা বাজি রাখেন আর তা সত্য হয়ে ওঠে, তবে তা তাঁর সত্যবাদিতার শক্ত আলামতগুলোর একটি। নাহহাস মুমিনদের খুশির দ্বিতীয় একটি কারণ যোগ করেন: শুধু যে এক কাছের জাতি জিতল তা নয়, বরং আল্লাহর ওয়াদা বছর ধরে রক্ষিত হলো, আর এই রক্ষিত হওয়াই ছিল প্রমাণ যে যিনি কথাটা বলেছেন তিনি আল্লাহর পক্ষ থেকেই বলেছেন।"
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
            "bn": "মুসলিমরা কেন খুশি হয়েছিল, কুরতুবী তার কারণগুলো একত্র করেন, আর সেগুলো সব এক নয়। সবচেয়ে সরল কারণ বিশ্বাসের নৈকট্য: রোমানরা আহলে কিতাব আর পারসিকরা মূর্তিপূজারি, তাই রোমের জয়টাই মুমিনদের বেশি কাছের। ইবন আতিয়্যা দেন আরও সূক্ষ্ম এক ব্যাখ্যা, মানুষ স্বভাবতই চায় ছোট প্রতিপক্ষ জিতুক, কারণ বড় পক্ষ একবার জিতে গেলে তাকে ভয় পাওয়ার কারণ আরও বেশি।"
          },
          {
            "en": "But al-Qurtubi records that the victory, when it came, fell on the very day of a Muslim deliverance, some say Badr and others al-Hudaybiya, so the believers' joy was layered: at a kindred people's triumph, at their own, and at the plain keeping of Allah's word. The Muyassar adds a sober note, that the Romans were People of the Book even though they had altered it, so the preference was relative, never an endorsement of their creed.",
            "bn": "তবে কুরতুবী লেখেন, বিজয়টা যখন এল, তা এল ঠিক এক মুসলিম মুক্তির দিনেই, কেউ বলেন বদর আর কেউ বলেন হুদায়বিয়া। তাই মুমিনদের খুশি ছিল স্তরে স্তরে সাজানো: এক কাছের জাতির জয়ে, নিজেদের জয়ে, আর আল্লাহর কথার সোজাসুজি রক্ষিত হওয়ায়। মুয়াসসার একটি শান্ত কথা যোগ করে, রোমানরা আহলে কিতাব ছিল ঠিকই, যদিও তারা কিতাবকে বিকৃত করেছিল। তাই এই পছন্দ ছিল আপেক্ষিক, তাদের ধর্মের কোনো সমর্থন নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Does Not Endorse",
          "bn": "এ আয়াত যার সমর্থন নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The verse reports a war between two seventh-century empires and foretells its turn; it licenses nothing against Persians, Iranians or any living people, and it is no verdict on them as a nation. The believers' preference for Rome was narrow and specific, a nearness in two beliefs, the Resurrection and revealed scripture, and even that, the Muyassar reminds us, sat beside the Qur'an's own charge that they had distorted the Book they carried.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াতটি সপ্তম শতকের দুই সাম্রাজ্যের যুদ্ধের খবর দেয় আর তার মোড় ঘোরার কথা আগাম বলে। এটি পারসিক, ইরানি বা জীবিত কোনো জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না, আর জাতি হিসেবে তাদের নিয়ে কোনো রায়ও নয়। রোমের প্রতি মুমিনদের পছন্দ ছিল সংকীর্ণ ও নির্দিষ্ট, দুটি বিশ্বাসে নৈকট্য, পুনরুত্থান আর নাজিল হওয়া কিতাব। আর সেটুকুও, মুয়াসসার মনে করিয়ে দেয়, পাশেই ছিল কুরআনের এই অভিযোগ যে তারা বহন করা কিতাবকে বিকৃত করেছিল।"
          },
          {
            "en": "Nor does the passage make worldly victory itself a mark of who is right. The command, the verse's own frame insists, belongs to Allah before the defeat and after it; empires rise and fall by His leave, not by their merit. What the believers were given was not a banner to wave over an army but a word to trust, a dated promise, spoken when the evidence pointed the other way.",
            "bn": "আর এই অনুচ্ছেদ দুনিয়ার জয়কেও কে সঠিক তার চিহ্ন বানায় না। আয়াতের নিজের কাঠামো জোর দিয়ে বলে, হুকুম আল্লাহরই, পরাজয়ের আগেও আর পরেও। সাম্রাজ্যগুলো ওঠে আর পড়ে তাঁর অনুমতিতে, নিজেদের যোগ্যতায় নয়। মুমিনদের যা দেওয়া হলো তা কোনো বাহিনীর ওপর ওড়ানোর পতাকা নয়, বরং ভরসা করার মতো এক কথা, তারিখ-বাঁধা এক ওয়াদা, যা বলা হয়েছিল যখন সব প্রমাণ উল্টো দিকে ইশারা করছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding to a Promise",
          "bn": "ওয়াদা আঁকড়ে ধরা"
        },
        "p": [
          {
            "en": "For the reader the verse is a lesson in where certainty comes from. The believers in Makkah were handed news that the visible world flatly denied, and told to count on it. They did not pretend the defeat had not happened; they held, through years in which the bet looked lost, to a single line of revelation, and the seventh year proved them right, and many entered Islam at the sight of it.",
            "bn": "পাঠকের জন্য আয়াতটি এক শিক্ষা, নিশ্চয়তা কোথা থেকে আসে। মক্কার মুমিনদের হাতে তুলে দেওয়া হলো এমন এক খবর, চোখের সামনের জগৎ যাকে সরাসরি অস্বীকার করছিল, আর বলা হলো তার ওপর ভরসা করতে। তারা ভান করেনি যে পরাজয়টা ঘটেনি। যে বছরগুলোতে বাজি হেরে যাওয়া বলেই মনে হচ্ছিল, সেগুলোর ভেতর দিয়েও তারা আঁকড়ে ধরল ওহির একটিমাত্র লাইন। সপ্তম বছর তাদের সঠিক প্রমাণ করল, আর তা দেখে বহু মানুষ ইসলামে প্রবেশ করল।"
          },
          {
            "en": "The question the verse leaves is simple and sharp. When the headlines run against everything you were promised, which do you weigh more, what today reports or what your Lord has said will be? The defeat was real; so was the word that outlasted it. To live by the second without denying the first is the faith this passage asks of its reader.",
            "bn": "আয়াত যে প্রশ্নটা রেখে যায় তা সরল আর ধারালো। চারপাশের খবর যখন আপনার সব প্রতিশ্রুতির উল্টো চলে, তখন আপনি কোনটাকে বেশি ওজন দেন, আজ যা খবর দিচ্ছে তাকে, নাকি রব যা হবে বলে দিয়েছেন তাকে? পরাজয়টা সত্য ছিল, আর যে কথা তার চেয়ে বেশি দিন টিকে রইল সেটাও সত্য। প্রথমটাকে অস্বীকার না করে দ্বিতীয়টার ওপর ভর করে বাঁচা, এটাই সেই ঈমান, এই অনুচ্ছেদ তার পাঠকের কাছে যা চায়।"
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
          "bn": "দেখার জন্য বের হওয়া"
        },
        "p": [
          {
            "en": "The verse opens with a challenge, not a description. Awalam yasīrū fī al-arḍ — have they not travelled through the earth? At-Tabari reads the ones addressed as the Quraysh who denied Allah and forgot the Hereafter, the very men who crossed those lands as traders. Ma'arif al-Qur'an sharpens the point: Makka itself had little farming, little industry and no grand buildings, yet its merchants rode to Syria and Yemen for commerce. The question is almost a taunt. You already make the journey; you have simply never looked at what you pass.",
            "bn": "আয়াত শুরু হয় চ্যালেঞ্জ দিয়ে, বর্ণনা দিয়ে নয়। আওয়ালাম ইয়াসীরূ ফিল আরদ — তারা কি পৃথিবীতে ভ্রমণ করে না? তাবারী বলেন, এ কথা বলা হচ্ছে সেই কুরাইশদের, যারা আল্লাহকে অস্বীকার করেছে আর আখিরাত ভুলে বসেছে, অথচ ব্যবসার খাতিরে এরাই ওই দেশগুলো পাড়ি দেয়। মাআরিফুল কুরআন কথাটা আরও ধারালো করে। মক্কায় তেমন চাষবাস, শিল্প বা বড় ইমারত ছিল না, তবু সেখানকার বণিকরা সিরিয়া ও ইয়েমেনে বাণিজ্যে যেত। প্রশ্নটা যেন খোঁচা দিয়ে বলা। সফর তো তুমি করোই, কেবল পথের পাশে যা পড়ে থাকে তাতে কখনো চোখ মেলোনি।"
          },
          {
            "en": "And the looking that is asked for is not the traveller's idle glance. Al-Qurtubi says they are to look with their insight and their hearts, fa-yanẓurū bi-baṣā'irihim wa-qulūbihim, and not merely with their eyes. Ibn Kathir widens it further. To travel with one's understanding and intellect, and to hear the reports of those long gone, is itself a kind of journey. A man can cross a continent and see nothing, and another can sit still and read the past until it warns him. The verse is looking for the second traveller, the one who reads what he sees.",
            "bn": "আর যে দেখার কথা বলা হচ্ছে, তা পথিকের অলস দৃষ্টি নয়। কুরতুবী বলেন, তাদের দেখতে হবে অন্তর্দৃষ্টি আর হৃদয় দিয়ে, ফা-ইয়ানযুরূ বি-বাসা-ইরিহিম ওয়া কুলূবিহিম, কেবল চোখ দিয়ে নয়। ইবন কাসীর পরিধিটা আরও বাড়ান। নিজের বোধ আর বুদ্ধি নিয়ে সফর করা, আর বহু আগে চলে যাওয়া জাতিদের খবর কানে তোলা, সেটাও এক ধরনের ভ্রমণ। একজন গোটা মহাদেশ পেরিয়েও কিছু দেখে না, আবার কেউ এক জায়গায় বসে অতীত পড়তে পড়তে সতর্ক হয়ে যায়। আয়াত খুঁজছে দ্বিতীয় পথিককে, যে যা দেখে তা পড়তেও জানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading an Ending",
          "bn": "পরিণতি পড়া"
        },
        "p": [
          {
            "en": "What the eye is told to find is an ʿāqiba — an end, an outcome, the last chapter of a people's story. Fa-yanẓurū kayfa kāna ʿāqibatu alladhīna min qablihim: let them see how the end was of those before them. A few verses earlier, at the close of the preceding sūra, a different gaze was commanded: travel the earth and see how He began creation (29:20), a proof of the resurrection read off creation's very first act. Here the direction reverses. The eye is turned not to how things begin but to how nations finish.",
            "bn": "চোখকে যা খুঁজতে বলা হচ্ছে তা হলো আকিবা — পরিণতি, শেষ অধ্যায়, কোনো জাতির গল্পের শেষ পাতা। ফা-ইয়ানযুরূ কাইফা কানা আকিবাতুল্লাযীনা মিন কাবলিহিম: তারা দেখুক, তাদের পূর্ববর্তীদের পরিণতি কেমন হয়েছিল। এর কয়েক আয়াত আগে, আগের সূরার শেষেই ভিন্ন এক দৃষ্টির হুকুম এসেছে, পৃথিবীতে ভ্রমণ করো আর দেখো তিনি কীভাবে সৃষ্টির সূচনা করেছেন (২৯:২০), যা সৃষ্টির একেবারে প্রথম কাজ থেকে পুনরুত্থানের প্রমাণ। এখানে দৃষ্টির মুখ ঘুরে যায়। চোখ এখন তাকায় জিনিস কীভাবে শুরু হয় তাতে নয়, বরং জাতিরা কীভাবে শেষ হয় তাতে।"
          },
          {
            "en": "The pairing is deliberate, and the verses just after it prove so: Allah begins creation, then repeats it, then to Him you are returned (30:11). But this verse does not argue from creation's start. Its lesson is historical and moral. As-Sa'di calls the fate of the ruined nations a hastened recompense, a sample and a first instalment of the reckoning of the Hereafter. To read an ending rightly is to see, in a dead city, the outline of a Day that has not yet come. The ruins are not only old news; they are a preview.",
            "bn": "এই জোড় মিলিয়ে দেওয়া ইচ্ছাকৃত, আর ঠিক পরের আয়াতগুলোই তা প্রমাণ করে: আল্লাহ সৃষ্টির সূচনা করেন, এরপর তার পুনরাবৃত্তি করেন, এরপর তাঁর দিকেই তোমাদের ফিরিয়ে আনা হবে (৩০:১১)। কিন্তু এই আয়াত সৃষ্টির সূচনা থেকে যুক্তি টানে না। এর শিক্ষা ইতিহাস ও নৈতিকতার। সাদী ধ্বংসপ্রাপ্ত জাতিদের পরিণতিকে বলেন আগাম এক প্রতিফল, আখিরাতের হিসাবের একটা নমুনা ও প্রথম কিস্তি। পরিণতি ঠিকভাবে পড়া মানে এক মৃত শহরের ভেতরে এমন এক দিনের রেখা দেখতে পাওয়া যা এখনো আসেনি। ধ্বংসস্তূপ কেবল পুরনো খবর নয়, তা আগাম এক ঝলক।"
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
            "bn": "এরপর আয়াত গর্বিত জাতির আঁকড়ে ধরা একমাত্র অজুহাতটাও কেড়ে নেয় — এই ভরসা যে তারা পড়ে যাওয়ার মতো দুর্বল নয়। কানূ আশাদ্দা মিনহুম কুওয়্যাতান, তারা এদের চেয়ে শক্তিতে বড় ছিল। ইবন কাসীর কথাটা মুহাম্মদ ﷺ-এর নিজের জাতির ওপর চেপে ধরেন। আগের জাতিদের সম্পদ বেশি ছিল, সন্তান বেশি ছিল, তাদের যা দেওয়া হয়েছিল তার এক দশমাংশও তোমাদের দেওয়া হয়নি, আর দুনিয়ায় তারা এমন শক্ত ভিতে বসেছিল যা তোমরা কখনো ছুঁতে পারোনি। মক্কার লোকেরা কোনো দুর্বলের দিকে তাকিয়ে ছিল না। তারা তাকিয়ে ছিল দুনিয়ার প্রতিটি মাপে নিজেদের চেয়ে বড়দের দিকে।"
          },
          {
            "en": "And still those betters are gone. Ibn Kathir's abridged commentary keeps the sting: they stayed in this world longer than you will, were more advanced and more prosperous than you, and it bought them nothing. Al-Muyassar names the classic examples, ʿĀd and Thamūd, peoples stronger in body and better able to enjoy their lives. The verse lets the ruin answer the boast. Superior strength is not a defence against consequence. It is only a louder witness when the fall finally comes, a bigger name on a longer list of the vanished.",
            "bn": "তবু সেই বড়রা আজ নিশ্চিহ্ন। ইবন কাসীরের সংক্ষিপ্ত তাফসীর খোঁচাটা ধরে রাখে: তারা তোমাদের চেয়ে বেশিদিন দুনিয়ায় ছিল, তোমাদের চেয়ে বেশি উন্নত আর সমৃদ্ধ ছিল, অথচ তাতে কিছুই কাজে আসেনি। মুয়াসসার চিরচেনা উদাহরণ দুটো নাম ধরে বলে, আদ আর সামূদ, যারা শরীরে বেশি বলবান ছিল আর জীবনকে ভোগ করার সামর্থ্যেও এগিয়ে ছিল। আয়াত ধ্বংসকেই গর্বের জবাব দিতে দেয়। বেশি শক্তি পরিণামের বিরুদ্ধে ঢাল নয়। পতন যখন শেষমেশ আসে তখন তা কেবল আরও জোরালো সাক্ষী, নিশ্চিহ্নদের লম্বা তালিকায় আরও বড় একটা নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Plough or Pickaxe",
          "bn": "লাঙল না কোদাল"
        },
        "p": [
          {
            "en": "At the centre of the verse sits a disputed phrase: wa-athārū al-arḍ. One reading makes it agriculture. Mujāhid, cited by at-Tabari, glosses it simply as ḥarathūhā, they ploughed it. Al-Qurtubi and al-Baghawi agree: they turned the soil over for cultivation, and both add a detail that makes the image bite — the people of Makka were not farmers at all. Al-Muyassar keeps this line too: those nations ploughed the land and sowed it. On this reading the earlier peoples were masters of a soil the Makkans barely scratched.",
            "bn": "আয়াতের ঠিক মাঝখানে বসে আছে এক বিতর্কিত শব্দগুচ্ছ: ওয়া আছারুল আরদ। এক পাঠে এটা কৃষিকাজ। মুজাহিদ, তাবারীর বরাতে, একে সোজা অর্থে বলেন হারাছূহা, তারা জমি চষেছে। কুরতুবী আর বাগাভী একমত: তারা চাষের জন্য মাটি উল্টে দিয়েছে। দুজনেই এমন একটা কথা জুড়ে দেন যা ছবিটাকে তীক্ষ্ণ করে, মক্কার লোকেরা তো চাষীই ছিল না। মুয়াসসারও এই সুরেই বলে, ওই জাতিরা জমি চষেছে আর ফসল বুনেছে। এই পাঠে আগের জাতিরা সেই ভূমির মালিক, যা মক্কাবাসী সবে আঁচড় কাটত।"
          },
          {
            "en": "A second reading digs deeper than the plough. At-Tabari's own gloss is istakhrajū al-arḍ, they drew the earth out, excavated and worked it. Ma'arif al-Qur'an spells out what that means: peoples skilled enough to raise underground water for their fields by excavation, and to dig out hidden minerals such as gold and silver and turn them to profit. The dispute is not idle. One picture is a farmer's furrow and the other a miner's shaft, and the Arabic athāra holds both the turning of soil and the stirring up of what lies beneath it.",
            "bn": "দ্বিতীয় পাঠ লাঙলের চেয়ে গভীরে খোঁড়ে। তাবারীর নিজের ব্যাখ্যা ইসতাখরাজূল আরদ, তারা মাটি টেনে বের করেছে, খুঁড়েছে আর কাজে লাগিয়েছে। মাআরিফুল কুরআন খুলে বলে এর মানে কী: এমন জাতি যারা খনন করে ক্ষেতের জন্য মাটির নিচের পানি তুলতে পারত, আর সোনা-রুপার মতো লুকানো খনিজ খুঁড়ে বের করে মুনাফায় লাগাত। বিতর্কটা অকারণ নয়। একটা ছবি কৃষকের লাঙলের সারি, অন্যটা খনিশ্রমিকের সুড়ঙ্গ, আর আরবি আছারা শব্দ মাটি উল্টানো আর নিচে যা লুকানো তা খুঁচিয়ে তোলা, দুটোই ধরে রাখে।"
          },
          {
            "en": "The next verb draws less argument. Wa-ʿamarūhā akthara mimmā ʿamarūhā: they built it up and settled it more than these have. As-Sa'di fills in the scene — palaces and workshops raised, trees planted, crops sown, rivers channelled across the land. Al-Muyassar has them build their mansions and dwell in them. At-Tabari even preserves the words of Ibn ʿAbbās, that they owned the earth and built it up. Whichever labour the verse is naming, its point is one and the same: these were builders, and all their building did not save them.",
            "bn": "পরের ক্রিয়াটা নিয়ে ততটা ঝগড়া নেই। ওয়া আমারূহা আকছারা মিম্মা আমারূহা: তারা একে গড়ে তুলেছে আর বসতি গেড়েছে এদের চেয়ে বেশি। সাদী দৃশ্যটা ভরে দেন — প্রাসাদ আর কারখানা তোলা, গাছ লাগানো, ফসল বোনা, জমির বুকে নদী বইয়ে দেওয়া। মুয়াসসারের বর্ণনায় তারা অট্টালিকা গড়ে তাতে বাস করত। তাবারী এমনকি ইবন আব্বাস (রাঃ)-এর কথাও তুলে রাখেন, যে তারা জমির মালিক হয়েছিল আর তা আবাদ করেছিল। আয়াত যে পরিশ্রমের নামই দিক, কথা একটাই: এরা ছিল নির্মাতা, আর তাদের সব নির্মাণ তাদের বাঁচাতে পারেনি।"
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
            "bn": "বাক্যটা ঘোরে এক ছোট অথচ নির্ণায়ক অংশে: ওয়া জাআতহুম রুসুলুহুম বিল-বায়্যিনাত — আর তাদের কাছে তাদের রসূলগণ স্পষ্ট প্রমাণ নিয়ে এসেছিলেন। কুরতুবী বায়্যিনাত অর্থ নেন রসূলদের আনা মুজিজা, আর দ্বিতীয় একটা সম্ভাবনাও জোড়েন, যে এর মানে তাঁদের বয়ে আনা বিধান ও হুকুম। যেভাবেই হোক, আগের জাতিরা না-জেনে ধ্বংস হয়নি। প্রমাণ তাদের কাছে পৌঁছেছিল। ইবন কাসীর গোটা আয়াতটাকেই এর চারপাশে সাজান: আল্লাহ শ্রোতাদের তাঁর রসূলদের সত্যতার দিকে ইশারা করছেন, যে সত্যতা মিথ্যুক-বলা জাতিদের ধ্বংস দিয়েই প্রমাণিত।"
          },
          {
            "en": "This closes the last door of excuse. A people cannot plead that no warner ever came, when the verse records that warners came with evidence plain enough to remove all doubt. Al-Qurtubi notes the response they gave, fa-kafarū wa-lam yu'minū, they disbelieved and would not believe. The strength was real, the building was real, and the messengers were real too. What was missing among them was not information. It was the willingness to bow to information once it had arrived and asked something of them.",
            "bn": "এতে অজুহাতের শেষ দরজাটাও বন্ধ হয়ে যায়। কোনো জাতি এ কথা বলতে পারবে না যে তাদের কাছে কোনো সতর্ককারী আসেনি, কারণ আয়াত লিখে রাখে, সতর্ককারীরা এসেছিল এমন প্রমাণ নিয়ে যা সব সন্দেহ মুছে দেয়। কুরতুবী তাদের জবাবটা ধরিয়ে দেন, ফা-কাফারূ ওয়া লাম ইউমিনূ, তারা অস্বীকার করল আর ঈমান আনল না। শক্তি সত্য ছিল, নির্মাণ সত্য ছিল, আর রসূলরাও সত্য ছিলেন। তাদের মধ্যে যা ছিল না তা তথ্য নয়। তা হলো প্রমাণ পৌঁছে কিছু দাবি করার পর তার সামনে মাথা নোয়ানোর ইচ্ছা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Fault the Ruin",
          "bn": "ধ্বংসের দায় কার"
        },
        "p": [
          {
            "en": "Then comes the verse's great acquittal of God: fa-mā kāna Allāhu li-yaẓlimahum — Allah would never have wronged them. Al-Qurtubi explains it as destruction without sin, without a messenger sent, without a proof given; that, and only that, would have been injustice, and Allah does none of it. Al-Baghawi reads the wronging more precisely, as any shortchanging of their due, naqṣ ḥuqūqihim. The punishment that fell on them was not a cutting-short of their rights. It was the exact and earned answer to what their own hands had built up.",
            "bn": "এরপর আসে আল্লাহকে নির্দোষ ঘোষণার মহান বাক্য: ফা-মা কানাল্লাহু লি-ইয়াযলিমাহুম — আল্লাহ কখনোই তাদের ওপর জুলুম করতেন না। কুরতুবী এর ব্যাখ্যা দেন, গুনাহ ছাড়া, রসূল না পাঠিয়ে, প্রমাণ না দিয়ে ধ্বংস করা, সেটাই হতো জুলুম, আর আল্লাহ তার কিছুই করেন না। বাগাভী জুলুমকে আরও সূক্ষ্মভাবে পড়েন, তাদের প্রাপ্য কোনোভাবে কমিয়ে দেওয়া, নাকস হুকূকিহিম। যে শাস্তি তাদের ওপর নেমে এসেছিল তা তাদের হকের কোনো কাটছাঁট ছিল না। তা ছিল তাদের নিজ হাতে গড়া কাজের ঠিক মাপা, উপার্জিত জবাব।"
          },
          {
            "en": "The weight falls instead on the closing words: wa-lākin kānū anfusahum yaẓlimūn — but they were wronging themselves. Ibn Kathir names the self-wrong exactly: they denied the signs of Allah and mocked them, and so pulled the ruin down on their own heads. Al-Muyassar and al-Qurtubi both reduce it to two words, shirk and disobedience. The verse refuses the oldest complaint of the condemned, that heaven was unfair to them. The ledger was square. Every stroke of the loss had first been entered by the same hand that would later suffer it.",
            "bn": "ভার বরং গিয়ে পড়ে শেষ কথাগুলোর ওপর: ওয়া লাকিন কানূ আনফুসাহুম ইয়াযলিমূন — তারা নিজেরাই নিজেদের ওপর জুলুম করছিল। ইবন কাসীর এই আত্ম-জুলুমের নাম ঠিক করে দেন: তারা আল্লাহর নিদর্শন অস্বীকার করেছে আর তা নিয়ে ঠাট্টা করেছে, তাই ধ্বংস নিজেদের মাথায় নিজেরাই টেনে এনেছে। মুয়াসসার আর কুরতুবী দুজনেই একে নামিয়ে আনেন দুই শব্দে, শিরক আর নাফরমানি। আয়াত অপরাধীদের সবচেয়ে পুরনো নালিশটা নাকচ করে দেয়, যে আসমান তাদের প্রতি অবিচার করেছে। হিসাব ছিল সোজা। ক্ষতির প্রতিটি দাগ আগেই বসিয়েছিল সেই হাত, যে পরে তা ভোগ করবে।"
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
            "bn": "একটি সহীহ বর্ণনা আয়াতটাকে পথিকের নিজের পায়ের নিচে এনে দেয়। সহীহ বুখারীতে ইবন উমর (রাঃ) বর্ণনা করেন, সামূদের ধ্বংসপ্রাপ্ত আবাসভূমি হিজরের পাশ দিয়ে যাওয়ার সময় রাসূলুল্লাহ ﷺ বলেছিলেন, যারা নিজেদের ওপর জুলুম করেছে তাদের ধ্বংসপ্রাপ্ত ঘরে কেঁদে কেঁদে ছাড়া প্রবেশ কোরো না, নইলে তাদের যা হয়েছিল তেমন কিছু তোমাদেরও হতে পারে। শেষ কথাটা আয়াতেরই প্রায় হুবহু উদ্ধৃতি, আল্লাযীনা যালামূ আনফুসাহুম, যারা নিজেদের ওপর জুলুম করেছে। কুরআনের শিক্ষা আর নবী ﷺ-এর সতর্কবাণী একই শব্দ ভাগ করে নেয়।"
          },
          {
            "en": "The hadith, recorded by al-Bukhārī in his Ṣaḥīḥ, settles how a believer is to stand among such sites. Not as a sightseer and not as a boaster, but as a man who sees in them his own possible end. The ruin is not a monument to someone else's bad luck. It is a mirror held up to anyone strong, prosperous and busy enough to assume the warning must be meant for other people. The right posture at the ruins is tears for one's own soul, not a trophy taken home.",
            "bn": "ইমাম বুখারী তাঁর সহীহ-তে তোলা এই হাদীস ঠিক করে দেয়, এমন জায়গায় একজন মুমিন কীভাবে দাঁড়াবে। দর্শনার্থী হয়ে নয়, গর্বিত হয়ে নয়, বরং এমন মানুষ হয়ে যে সেখানে নিজের সম্ভাব্য পরিণতি দেখে। ধ্বংসস্তূপ অন্য কারও দুর্ভাগ্যের স্মৃতিসৌধ নয়। তা এক আয়না, যে কেউ যথেষ্ট বলবান, সমৃদ্ধ আর ব্যস্ত বলে ভাবে সতর্কবার্তাটা বুঝি অন্যদের জন্য, তার সামনে ধরা। ধ্বংসস্তূপে সঠিক ভঙ্গি নিজের আত্মার জন্য চোখের পানি, ঘরে নিয়ে যাওয়া কোনো স্মারক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Read It Against Yourself",
          "bn": "জীবিত কারও বিরুদ্ধে ছাড় নয়"
        },
        "p": [
          {
            "en": "A verse about destroyed nations must be handled with care, so let this be plain. The verse describes what the text describes: particular peoples, named by the commentators as ʿĀd, Thamūd and their like, whom Allah ruined after they denied clear proof. It records a closed, just decree of God upon the dead. It licenses nothing against any living person or community. Nobody may read it as permission to despise, harm or expel a people today, nor to treat present-day loss as evidence of someone's guilt. That reading turns the verse inside out.",
            "bn": "ধ্বংসপ্রাপ্ত জাতিদের নিয়ে আয়াত সাবধানে ধরতে হয়, তাই কথাটা সাফ বলে রাখি। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: নির্দিষ্ট কিছু জাতি, তাফসীরকারেরা যাদের নাম দেন আদ, সামূদ আর তাদের মতো, স্পষ্ট প্রমাণ অস্বীকার করার পর আল্লাহ যাদের ধ্বংস করেছেন। এটা মৃতদের ওপর আল্লাহর এক সমাপ্ত, ন্যায্য ফয়সালার খবর। এ আয়াত আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই ছাড়পত্র দেয় না। কেউ একে আজ কোনো জাতিকে ঘৃণা করা, ক্ষতি করা বা তাড়িয়ে দেওয়ার অনুমতি হিসেবে পড়তে পারে না, আজকের কোনো ক্ষতিকে কারও অপরাধের প্রমাণ বানাতেও পারে না। এমন পাঠ আয়াতটাকেই উল্টে দেয়।"
          },
          {
            "en": "The verse's own aim is inward, and the commentators keep it there. As-Sa'di says whoever looks at these traces finds only perished nations and desolate homes, a warning standing before the warning to come. Ma'arif al-Qur'an ends by asking the reader to ponder whether those peoples were wronged from above, or wronged themselves by piling up the causes of their own ruin. The honest traveller does not leave the ruins thinking about the dead. He leaves thinking about the proof that has reached him, and whether he himself is answering it.",
            "bn": "আয়াতের নিজের লক্ষ্য ভেতরের দিকে, আর তাফসীরকারেরা সেটাকে সেখানেই রাখেন। সাদী বলেন, যে এই চিহ্নগুলোর দিকে তাকায় সে কেবল নিশ্চিহ্ন জাতি আর জনশূন্য ঘরবাড়ি দেখতে পায়, আসছে সতর্কবার্তার আগে দাঁড়িয়ে থাকা আরেক সতর্কবার্তা। মাআরিফুল কুরআন শেষ করে পাঠককে এই ভাবনায় ফেলে, ওই জাতিরা কি ওপর থেকে জুলুমের শিকার হয়েছিল, নাকি নিজেদের ধ্বংসের কারণ জমিয়ে জমিয়ে নিজেরাই নিজেদের ওপর জুলুম করেছিল। সৎ পথিক ধ্বংসস্তূপ ছেড়ে মৃতদের কথা ভাবতে ভাবতে ফেরে না। সে ফেরে তার কাছে পৌঁছানো প্রমাণের কথা ভাবতে, আর ভাবতে ভাবতে সে নিজে তাতে সাড়া দিচ্ছে কিনা।"
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
          "bn": "প্রশংসাটা কোথায় নামে"
        },
        "p": [
          {
            "en": "The surah has just closed a scene of the Hour. The deniers fall into despair, and people are parted into two companies: one delighted in a garden, one brought into punishment (30:12 and 30:16). Then, with no pause, the tone turns upward, so glorify Allah when you reach the evening and when you reach the morning (30:17). The verse before us completes that turn. Ma'arif al-Qur'an notes that after the terror of the resurrection the passage lifts the hearer into remembrance, just before the signs of creation open in 30:19.",
            "bn": "সূরাটি এইমাত্র ক্বিয়ামতের একটি দৃশ্য শেষ করেছে। অস্বীকারকারীরা হতাশায় ডুবে যায়, আর মানুষ ভাগ হয়ে যায় দুই দলে: একটি দল জান্নাতে পরিতুষ্ট, আরেকটি দলকে আনা হয় শাস্তির মধ্যে (৩০:১২ ও ৩০:১৬)। তারপর কোনো বিরতি ছাড়াই সুর উপরে ওঠে, অতএব আল্লাহর পবিত্রতা ঘোষণা কর যখন সন্ধ্যায় উপনীত হও আর যখন সকালে (৩০:১৭)। সামনের আয়াতটি সেই মোড়কেই পূর্ণ করে। মাআরিফুল কুরআন বলছে, পুনরুত্থানের ভীতির পর আয়াতগুলো শ্রোতাকে তুলে আনে যিকিরের দিকে, ঠিক তার পরেই ৩০:১৯ আয়াতে খুলে যায় সৃষ্টির নিদর্শন।"
          },
          {
            "en": "The two verses work as a pair. The first commands tasbih, the declaring of Allah free of every defect, at evening and morning (30:17); the second answers it with hamd, the praise owed to Him, and extends both across the day. al-Muyassar gathers the whole of it in one breath: glorify Him and praise Him at these times, for to Him belong praise and thanks in the heavens and the earth, and in the night and the day. The pairing of purity and praise is the frame the verse hangs on.",
            "bn": "আয়াত দুটি জোড়া বেঁধে কাজ করে। প্রথমটি আদেশ দেয় তাসবীহের, অর্থাৎ আল্লাহকে সব ত্রুটি থেকে পবিত্র ঘোষণা করার, সন্ধ্যায় ও সকালে (৩০:১৭)। দ্বিতীয়টি তার জবাব দেয় হামদ দিয়ে, অর্থাৎ তাঁর প্রাপ্য প্রশংসা দিয়ে, আর দুটিকেই ছড়িয়ে দেয় গোটা দিনজুড়ে। মুয়াসসার পুরো কথাটা এক নিঃশ্বাসে জড়ো করে: এই সময়গুলোতে তাঁর পবিত্রতা ও প্রশংসা কর, কারণ আসমান ও যমীনে, রাতে ও দিনে সমস্ত প্রশংসা আর কৃতজ্ঞতা একমাত্র তাঁরই। পবিত্রতা আর প্রশংসার এই জোড়াই আয়াতের কাঠামো।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise Filling Earth and Sky",
          "bn": "প্রশংসায় ভরা আসমান-যমীন"
        },
        "p": [
          {
            "en": "Now the claim widens past any one worshipper. at-Tabari reads to Him is praise in the heavens and the earth as praise from the whole of His creation and from none besides: in the heavens from their dwellers among the angels, and on earth from its people and every kind of creature He made in it. The praise is not waiting to be begun. It is already rising from everything that exists, in every region of the cosmos, and the believer at prayer is one more voice entering a chorus that was never silent.",
            "bn": "এবার দাবিটা কোনো একক ইবাদতকারীকে ছাড়িয়ে প্রসারিত হয়। তাবারী 'আসমান ও যমীনে প্রশংসা তাঁরই' পড়েন এভাবে: প্রশংসা আসে তাঁর গোটা সৃষ্টির কাছ থেকে, আর কারও কাছ থেকে নয়। আসমানে তার বাসিন্দা ফেরেশতাদের কাছ থেকে, আর যমীনে এর অধিবাসী আর তাতে সৃষ্ট প্রতিটি শ্রেণির প্রাণীর কাছ থেকে। প্রশংসা শুরু হওয়ার অপেক্ষায় বসে নেই। যা কিছু আছে তার সবকিছু থেকে, সৃষ্টির প্রতিটি কোণ থেকে তা আগে থেকেই উঠছে। নামাজে দাঁড়ানো মু'মিন সেই কোরাসে যোগ দেওয়া একটি কণ্ঠমাত্র, যে কোরাস কখনো থামেনি।"
          },
          {
            "en": "The earlier authorities say the same in their own words. al-Baghawi, citing Ibn Abbas, has the inhabitants of the heavens and the earth praising Him and praying to Him. Ibn Kathir, in both his Arabic and his abridged commentary, reads the clause as meaning He is the One praised for all that He created in the heavens and on earth. The praise, on this reading, is owed not for a single favour but for the standing fact of creation itself, the sky and the ground and all they hold.",
            "bn": "আগের মনীষীরাও নিজেদের ভাষায় একই কথা বলেন। বাগভী ইবন আব্বাস থেকে আনেন যে, আসমান ও যমীনের অধিবাসীরা তাঁর প্রশংসা করে আর তাঁরই কাছে নামাজ পড়ে। ইবন কাসীর তাঁর আরবি ও সংক্ষিপ্ত দুই তাফসীরেই বাক্যটি পড়েন এভাবে: আসমান ও যমীনে তিনি যা সৃষ্টি করেছেন তার সবকিছুর জন্য একমাত্র তিনিই প্রশংসিত। এই পাঠে প্রশংসা প্রাপ্য কোনো একটি অনুগ্রহের জন্য নয়, বরং সৃষ্টিরই অটল বাস্তবতার জন্য, এই আকাশ, এই মাটি আর তারা যা কিছু ধরে রাখে সব কিছুর জন্য।"
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
            "bn": "কুরতুবী এই বাক্যকে বলেন কথার মাঝখানে ঢুকে পড়া এক অন্তর্বর্তী মন্তব্য, তাঁর নিয়ামত আর অনুগ্রহের জন্য অবিরাম প্রশংসার এক টুকরো। এই প্রথম পাঠে কথাগুলো কোনো আদেশই নয়, বরং এক ঘোষণা: প্রশংসা সবসময় তাঁরই, থেমে না গিয়ে চলতে থাকে। তিনি দ্বিতীয় একটি মতও তুলে ধরেন, 'প্রশংসা তাঁরই' মানে নামাজ তাঁরই, কারণ নামাজকে আলাদা করে চেনায় সূরা ফাতিহার তিলাওয়াত, যা শুরু হয় প্রশংসা দিয়ে। কুরতুবী দুটির মধ্যে প্রথমটিকেই বেশি স্পষ্ট মনে করেন।"
          },
          {
            "en": "al-Qurtubi passes on a fine distinction from al-Mawardi. The night prayer is called by the name of tasbih and the day prayer by the name of hamd, and for a reason. By day a person moves through dealings and states that call for the praise of God; by night he is in a seclusion that calls for declaring Him far above every fault. So praise suits the daylight hours and purity suits the dark, and the verse hands each its own word. The two halves of the day are given two different tongues.",
            "bn": "কুরতুবী মাওয়ার্দী থেকে একটি সূক্ষ্ম পার্থক্য তুলে আনেন। রাতের নামাজকে ডাকা হয় তাসবীহ নামে আর দিনের নামাজকে হামদ নামে, আর এর পেছনে কারণ আছে। দিনের বেলা মানুষ নানা কাজ আর অবস্থার ভেতর দিয়ে চলে, যা আল্লাহর প্রশংসা দাবি করে। রাতে সে থাকে নির্জনতায়, যা তাঁকে সব ত্রুটির ঊর্ধ্বে ঘোষণা করা দাবি করে। তাই দিনের আলোর সঙ্গে প্রশংসা মানায়, আঁধারের সঙ্গে পবিত্রতা, আর আয়াত প্রত্যেককে তার নিজের শব্দ দিয়ে দেয়। দিনের দুই অর্ধেককে দেওয়া হয় দুটি আলাদা জিহ্বা।"
          },
          {
            "en": "There is a quiet force in reading the clause as an interruption. The passage is busy commanding the believer to glorify God at set hours, and into that stream of instruction it slips a plain fact, that the praise is His in the heavens and the earth, always. The command can lapse; a servant can miss his hour. The fact does not. So the duty to praise at fixed times rests on a praise that is unbroken behind it, and the worshipper is summoned to match in his small measure what the cosmos never lets fall.",
            "bn": "বাক্যটিকে এক বিরতি হিসেবে পড়লে এক নীরব শক্তি জেগে ওঠে। আয়াত তখন ব্যস্ত বান্দাকে বাঁধা সময়ে আল্লাহর পবিত্রতা ঘোষণার আদেশ দিতে, আর সেই আদেশের স্রোতে সে গুঁজে দেয় এক সহজ সত্য: আসমান ও যমীনে প্রশংসা সবসময় তাঁরই। আদেশ ফসকে যেতে পারে, বান্দা তার সময় হারাতে পারে। সত্যটা হারায় না। তাই বাঁধা সময়ে প্রশংসার দায়িত্ব দাঁড়িয়ে থাকে এমন এক প্রশংসার উপর যা এর পেছনে অবিচ্ছিন্ন, আর বান্দাকে ডাকা হয় নিজের ছোট মাপে তা মেলাতে, যা মহাবিশ্ব কখনো পড়তে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Marking the Hours",
          "bn": "সময় চিহ্নিত করা"
        },
        "p": [
          {
            "en": "Four moments are named across the pair, and each is a joint in the day. Evening when you reach it and morning when you reach it stand in 30:17; then ashiyyan, the late part of the day, and hina tuzhiruna, when you enter the noon, close 30:18. at-Tabari reads ashiyyan as the glorifying due at the afternoon prayer and the last phrase as the entering of the time of zuhr. The sweep of the two verses lays a hand on the whole arc of a day, from its edges to its middle.",
            "bn": "জোড়া আয়াতজুড়ে চারটি মুহূর্তের নাম আসে, আর প্রতিটি দিনের একেকটি জোড়। সন্ধ্যায় উপনীত হওয়া আর সকালে উপনীত হওয়া আছে ৩০:১৭ আয়াতে। তারপর আশিয়্যান, অর্থাৎ দিনের শেষভাগ, আর হীনা তুযহিরূন, অর্থাৎ যখন তোমরা দুপুরে ঢোকো, শেষ করে ৩০:১৮ আয়াত। তাবারী আশিয়্যানকে পড়েন আসরের নামাজের প্রাপ্য তাসবীহ হিসেবে, আর শেষ কথাটিকে যুহরের সময়ে প্রবেশ হিসেবে। দুই আয়াতের এই বিস্তার একটা গোটা দিনের পুরো বাঁকে হাত রাখে, তার দুই প্রান্ত থেকে মাঝখান পর্যন্ত।"
          },
          {
            "en": "al-Baghawi gives the same two readings: ashiyyan is to pray to God in the afternoon, the asr prayer, and when you enter the noon is the zuhr prayer. as-Sa'di gathers all of it: these are the five times of the five daily prayers, and at each God has commanded His servants both to glorify and to praise. He adds that the command reaches past the obligatory prayers to the recommended too, the morning and evening remembrances and the words said after the prayer.",
            "bn": "বাগভী একই দুটি পাঠ দেন: আশিয়্যান মানে বিকেলে আল্লাহর জন্য নামাজ পড়া, অর্থাৎ আসরের নামাজ, আর 'যখন তোমরা দুপুরে ঢোকো' মানে যুহরের নামাজ। সা'দী পুরোটা একসঙ্গে ধরেন: এগুলো পাঁচ ওয়াক্ত নামাজের পাঁচটি সময়, আর প্রতিটিতে আল্লাহ তাঁর বান্দাদের আদেশ দিয়েছেন পবিত্রতা আর প্রশংসা দুটোই করতে। তিনি যোগ করেন, আদেশটি ফরজ নামাজ ছাড়িয়ে মুস্তাহাব পর্যন্তও পৌঁছায়, সকাল-সন্ধ্যার যিকির আর নামাজের পরে বলা কথাগুলো পর্যন্ত।"
          },
          {
            "en": "al-Qurtubi lingers over the word ashiyy itself. Drawing on the lexicographer al-Jawhari, he notes that ashiyy and ashiyya name the span from the maghrib prayer to the dark of late evening, and he traces the fine shades the Arabs gave the hour. Qatada, for his part, reads the four words of the two verses as four prayers plainly: maghrib, then fajr, then asr, then zuhr. Whether the word is weighed for its grammar or its worship, it keeps pointing at a real, locatable time in the turning day.",
            "bn": "কুরতুবী 'আশিয়্য' শব্দটির উপরেই খানিক থামেন। অভিধানবিদ জাওহারীর সূত্রে তিনি বলেন, আশিয়্য ও আশিয়্যা বোঝায় মাগরিবের নামাজ থেকে গভীর সন্ধ্যার আঁধার পর্যন্ত সময়টা, আর আরবরা এই সময়কে যে সূক্ষ্ম নানা রূপ দিয়েছিল তা-ও তিনি ধরেন। কাতাদা আবার দুই আয়াতের চারটি শব্দকে সোজাসুজি চারটি নামাজ বলে পড়েন: মাগরিব, তারপর ফজর, তারপর আসর, তারপর যুহর। শব্দটিকে ব্যাকরণের জন্যই মাপা হোক বা ইবাদতের জন্য, তা বারবার আঙুল তোলে ঘুরতে থাকা দিনের এক বাস্তব, চিহ্নিত-করা-যায় এমন সময়ের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Are the Prayers Named Here?",
          "bn": "এখানে কি নামাজ বলা আছে"
        },
        "p": [
          {
            "en": "Here the commentators stake out a famous claim. at-Tabari reports that Nafi ibn al-Azraq asked Ibn Abbas whether the times of the five prayers are found in the Book of God, and he said yes. He then read these words onto them: when you reach the evening is maghrib, when you reach the morning is fajr, ashiyyan is asr, and when you enter the noon is zuhr. The fifth, isha, he drew from a separate verse that names the prayer of isha (24:58). Mujahid and others carry the same mapping.",
            "bn": "এখানে তাফসীরকারেরা এক বিখ্যাত দাবি তোলেন। তাবারী বর্ণনা করেন, নাফি ইবন আল-আযরাক ইবন আব্বাসকে জিজ্ঞেস করেছিলেন, পাঁচ ওয়াক্ত নামাজের সময় কি আল্লাহর কিতাবে পাওয়া যায়; তিনি বলেন, হ্যাঁ। তারপর তিনি এই শব্দগুলোকে সেগুলোর উপর পড়েন: 'যখন সন্ধ্যায় উপনীত হও' মাগরিব, 'যখন সকালে' ফজর, আশিয়্যান আসর, আর 'যখন দুপুরে ঢোকো' যুহর। পঞ্চমটি, এশা, তিনি নেন আলাদা এক আয়াত থেকে যা এশার নামাজের নাম নেয় (২৪:৫৮)। মুজাহিদ ও অন্যরাও একই বিন্যাস বহন করেন।"
          },
          {
            "en": "Yet this is tafsir reading a sense into the words, not the plain wording itself. Ma'arif al-Qur'an says as much: the prayer is not named as such in the verse, so every kind of worship, in act or in speech, falls within it, and the prayer is only the foremost of these. Ibn Kathir reads the same two time-words without naming a prayer at all, taking ashiyyan as the hour of deepest dark and izhar as the brightest point of the day, a glory owed to the Maker of light and shade. The command to praise Him holds either way.",
            "bn": "তবু এটি তাফসীর, শব্দের ভেতরে একটি অর্থ পড়ে নেওয়া, স্পষ্ট শব্দ নিজে নয়। মাআরিফুল কুরআন এ কথাই বলে: আয়াতে নামাজকে সেভাবে নাম ধরে বলা হয়নি, তাই কাজে বা কথায় সব রকম ইবাদতই এর ভেতরে পড়ে, আর নামাজ এর মধ্যে কেবল সবচেয়ে অগ্রগণ্য। ইবন কাসীর একই দুটি সময়-শব্দকে কোনো নামাজের নাম না নিয়েই পড়েন, আশিয়্যানকে ধরেন সবচেয়ে গাঢ় আঁধারের সময় আর ইযহারকে দিনের সবচেয়ে উজ্জ্বল মুহূর্ত হিসেবে, আলো আর ছায়ার স্রষ্টার প্রাপ্য এক মহিমা। তাঁর প্রশংসার আদেশ দুই পাঠেই টিকে থাকে।"
          },
          {
            "en": "One more voice rounds out the count. Hasan al-Basri held that when you reach the evening takes in both the maghrib and the isha prayers at once, which lets the single phrase carry two of the five. The readings differ on which word holds which prayer, and on whether the prayers are in the wording at all. What none of them touches is the duty itself. Whether the verse maps five prayers or commands a praise without limit, the servant is left with the same charge: turn to God through the whole turning of the day.",
            "bn": "আরও একটি কণ্ঠ হিসাবটা পূর্ণ করে। হাসান আল-বসরী মনে করতেন, 'যখন সন্ধ্যায় উপনীত হও' একসঙ্গে মাগরিব আর এশা দুই নামাজকেই ধরে, ফলে একটিমাত্র বাক্য পাঁচের মধ্যে দুটিকে বহন করে। পাঠগুলো ভিন্ন হয় এ নিয়ে যে কোন শব্দ কোন নামাজ ধরে, আর আদৌ নামাজ শব্দের ভেতরে আছে কিনা তা নিয়েও। কিন্তু দায়িত্বটায় কেউই হাত দেয় না। আয়াত পাঁচ ওয়াক্ত নামাজ মেলাক বা সীমাহীন প্রশংসার আদেশ দিক, বান্দার কাঁধে থাকে একই ভার: গোটা ঘুরন্ত দিনজুড়ে আল্লাহর দিকে ফেরা।"
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
            "bn": "শব্দের ক্রমটাও মনোযোগ দাবি করে। আয়াতে সন্ধ্যা এসেছে সকালের আগে, আর মাআরিফুল কুরআন এর কারণ দেয়: ইসলামের হিসাবে দিন বদলায় সূর্যাস্তে, তাই সন্ধ্যা আসে আগে আর তারিখ পাল্টায় মাগরিবে। কুরতুবীও একই কথা বলেন, ক্রমটি শুরু হয় মাগরিবের নামাজ দিয়ে, কারণ রাত দিনের চেয়ে এগিয়ে চলে। তিনি একে তুলনা করেন সূরা বনী ইসরাইলের সঙ্গে, যা তার নিজের নামাজ-তালিকা শুরু করে যুহর দিয়ে, কারণ যুহরই ছিল প্রথম নামাজ যা জিবরীল নবী ﷺ-কে পড়িয়েছিলেন।"
          },
          {
            "en": "The afternoon then comes before the noon, which also asks for an explanation. Ma'arif al-Qur'an points to the asr prayer being the middle prayer, the one the Qur'an singles out for special care in 2:238, and to its falling at an hour when people are deep in their work and most apt to let it slip. Putting asr ahead of zuhr in the verse lends it the very weight that its timing threatens to take away. The order is not loose; it teaches.",
            "bn": "এরপর বিকেল আসে দুপুরের আগে, যা-ও একটা ব্যাখ্যা চায়। মাআরিফুল কুরআন দেখায়, আসরের নামাজই হলো মধ্যবর্তী নামাজ, যেটির উপর কুরআন বিশেষ যত্নের তাগিদ দেয় ২:২৩৮ আয়াতে, আর এটি পড়ে এমন এক সময়ে যখন মানুষ কাজে ডুবে থাকে আর সহজেই তা হাতছাড়া করে ফেলে। আয়াতে আসরকে যুহরের আগে রাখা তাকে ঠিক সেই গুরুত্বটাই দেয়, যা তার সময়ের কারণে হারিয়ে যাওয়ার ভয় থাকে। এই ক্রম এলোমেলো নয়, এটি শেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Said at Dawn and Dusk",
          "bn": "সকাল-সন্ধ্যায় যা পড়া হয়"
        },
        "p": [
          {
            "en": "One narration ties these verses to a daily practice. Abu Dawud records in his Sunan, from Ibn Abbas, that the Prophet said: whoever says in the morning, so glorify Allah when you reach the evening, through to and thus will you be brought out (30:17 to 30:19), will attain what he missed in his day; and whoever says them in the evening will attain what he missed in his night. Ibn Kathir, who carries the same chain, calls its isnad jayyid, a good chain of transmission.",
            "bn": "একটি বর্ণনা এই আয়াতগুলোকে এক দৈনিক আমলের সঙ্গে বেঁধে দেয়। আবু দাউদ তাঁর সুনানে ইবন আব্বাস থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে ব্যক্তি সকালে বলবে, 'অতএব আল্লাহর পবিত্রতা ঘোষণা কর যখন সন্ধ্যায় উপনীত হও' থেকে 'এভাবেই তোমাদের বের করা হবে' পর্যন্ত (৩০:১৭ থেকে ৩০:১৯), সে তার দিনে যা ছুটে গেছে তা পেয়ে যাবে; আর যে সন্ধ্যায় তা বলবে, সে তার রাতে যা ছুটে গেছে তা পেয়ে যাবে। ইবন কাসীর, যিনি একই সনদ আনেন, এর সনদকে বলেন জাইয়িদ, অর্থাৎ ভালো সূত্র।"
          },
          {
            "en": "Two further threads sit around the verse without being fastened to it. Ma'arif al-Qur'an and Ibn Kathir relate, on the authority of Muadh ibn Anas, that these were the words Ibrahim would say morning and evening, and that his saying them earned him the Qur'an's praise as the one who fulfilled (53:37). And al-Baghawi, under the verse, gathers several reports on the general merit of glorifying and praising God, such as saying subhan Allah wa bihamdihi a hundred times; these are not tied to this verse in particular, but they breathe its spirit.",
            "bn": "আয়াতটির চারপাশে আরও দুটি সুতো আছে, যদিও সেগুলো এর সঙ্গে শক্ত করে বাঁধা নয়। মাআরিফুল কুরআন আর ইবন কাসীর মুআয ইবন আনাস থেকে বর্ণনা করেন যে, এই কথাগুলোই ইবরাহীম (আঃ) সকাল-সন্ধ্যায় বলতেন, আর এগুলো বলার কারণেই কুরআন তাঁকে প্রশংসা করে সেই একজন বলে 'যে পূর্ণ করেছে' (৫৩:৩৭)। আর বাগভী এই আয়াতের নিচে আল্লাহর পবিত্রতা ও প্রশংসার সাধারণ ফযিলত নিয়ে কয়েকটি বর্ণনা জড়ো করেন, যেমন দিনে একশো বার 'সুবহানাল্লাহি ওয়া বিহামদিহি' বলা; এগুলো বিশেষ করে এই আয়াতের সঙ্গে বাঁধা নয়, তবে এর প্রাণটাই এগুলোতে বইছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining What Never Stops",
          "bn": "যা কখনো থামে না"
        },
        "p": [
          {
            "en": "Step back and the verse hands the believer a shape for the day. Its hours are not a flat stretch of time but a series of turnings, and at each turning there is a word to be said. The day is not asked to stop for worship; worship is woven into its joints, at its edges and at its heights, so that no long stretch passes with the heart turned away. A life lived like this is bracketed by remembrance and punctuated by it, never left to run on empty.",
            "bn": "একটু পিছিয়ে দাঁড়ালে দেখা যায়, আয়াত মু'মিনকে দিনটার একটা আকার ধরিয়ে দেয়। এর সময়গুলো সমতল এক টুকরো সময় নয়, বরং পরপর কয়েকটি মোড়, আর প্রতিটি মোড়ে বলার মতো একটা কথা আছে। দিনকে থেমে যেতে বলা হয় না ইবাদতের জন্য; ইবাদত বরং বোনা থাকে তার জোড়ায় জোড়ায়, তার প্রান্তে আর তার চূড়ায়, যাতে অন্তর মুখ ফিরিয়ে রেখে লম্বা কোনো সময় পেরিয়ে না যায়। এমন করে কাটানো জীবন যিকিরে ঘেরা থাকে, যিকিরেই থেমে থেমে চিহ্নিত হয়, কখনো খালি হয়ে চলতে দেওয়া হয় না।"
          },
          {
            "en": "And the verse has already told the believer that he is not alone in it. The praise he offers belongs, first and last, to the One it names, and it is rising from the heavens and the earth whether he joins it or not. To say it at his own appointed hours is to fall into step with the angels above and every creature below, to let his small voice be carried on a praise that fills all space and keeps no silence. The day, rightly held, becomes a long act of worship with its seams showing.",
            "bn": "আর আয়াত মু'মিনকে আগেই জানিয়ে দিয়েছে, এতে সে একা নয়। সে যে প্রশংসা পেশ করে তা আদি-অন্তে একমাত্র সেই সত্তারই, যাঁর নাম আয়াত নেয়, আর তা আসমান ও যমীন থেকে উঠছে, সে যোগ দিক বা না দিক। নিজের নির্ধারিত সময়ে তা বলা মানে উপরের ফেরেশতা আর নিচের প্রতিটি সৃষ্টির সঙ্গে তাল মেলানো, নিজের ক্ষীণ কণ্ঠটাকে এমন এক প্রশংসায় ভাসিয়ে দেওয়া যা গোটা মহাশূন্য ভরে রাখে, কোনো নীরবতা রাখে না। দিনটাকে ঠিকভাবে ধরলে তা হয়ে ওঠে এক দীর্ঘ ইবাদত, যার সেলাই চোখে পড়ে।"
          }
        ]
      }
    ]
  },
  "30:21": {
    "sections": [
      {
        "h": {
          "en": "One Sign in a Series",
          "bn": "ধারাবাহিক নিদর্শনের একটি"
        },
        "p": [
          {
            "en": "The verse belongs to a run of sentences in Surah ar-Rum that all begin the same way: wa min ayatihi, and among His signs. Creation from dust comes first, then this verse on spouses, then 30:22 on the heavens and the earth and the differing of tongues and colours, then sleep, lightning and rain in 30:23-24. Marriage is set in that company deliberately — listed among the sky and the languages of mankind as evidence of the same Maker.",
            "bn": "আয়াতটি সূরা আর-রূমের এমন এক ধারাবাহিক বাক্যমালার অংশ, যার প্রতিটি শুরু হয় একইভাবে: ওয়া মিন আয়াতিহি — আর তাঁর নিদর্শনসমূহের মধ্যে। প্রথমে মাটি থেকে সৃষ্টি, তারপর স্বামী-স্ত্রী বিষয়ক এই আয়াত, তারপর 30:22-এ আসমান-যমীন এবং ভাষা ও বর্ণের ভিন্নতা, এরপর 30:23-24-এ ঘুম, বিদ্যুৎ ও বৃষ্টি। বিবাহকে ইচ্ছা করেই এই সারিতে বসানো হয়েছে — আকাশ আর মানবজাতির ভাষাগুলোর পাশে, একই নির্মাতার প্রমাণ হিসেবে তালিকাভুক্ত।"
          },
          {
            "en": "That placement resists two errors at once. It refuses the shrinking of marriage into mere paperwork and economics, because the Quran files it with cosmic signs. And it refuses sentimentality, because signs are for study: the verse ends, as the sign-verses around it do, by naming its audience — li-qawmin yatafakkarun, for a people who reflect. What happens inside a home is presented as data about Allah, awaiting a reader.",
            "bn": "এই অবস্থান একসঙ্গে দুটি ভুল ঠেকায়। এটি বিবাহকে নিছক কাগজপত্র আর অর্থনীতিতে সংকুচিত করতে দেয় না, কারণ কুরআন একে মহাজাগতিক নিদর্শনগুলোর সঙ্গে নথিভুক্ত করেছে। আবার ভাবালুতাও হতে দেয় না, কারণ নিদর্শন তো অধ্যয়নের বিষয়: আশপাশের নিদর্শন-আয়াতগুলোর মতোই এই আয়াতও শেষ হয় তার শ্রোতার নাম নিয়ে — লি-কাওমিন ইয়াতাফাক্কারুন, চিন্তাশীল মানুষদের জন্য। ঘরের ভেতরে যা ঘটে, তা উপস্থাপিত হয়েছে আল্লাহ সম্পর্কে তথ্য হিসেবে — এক পাঠকের অপেক্ষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Your Own Selves",
          "bn": "তোমাদেরই মধ্য থেকে"
        },
        "p": [
          {
            "en": "Khalaqa lakum min anfusikum azwajan — He created for you, from your own selves, spouses. Min anfusikum places likeness at the foundation: the spouse is of your own kind and nature, not an alien species to be managed. 4:1 grounds all of humanity in one soul and its mate created from it, and 7:189 repeats this verse's own logic: He made from it its mate, that he might find rest in her.",
            "bn": "খালাকা লাকুম মিন আনফুসিকুম আযওয়াজা — তিনি তোমাদের জন্য তোমাদেরই মধ্য থেকে সঙ্গী সৃষ্টি করেছেন। মিন আনফুসিকুম ভিত্তিতেই সাদৃশ্য বসিয়ে দেয়: সঙ্গী আপনারই জাত ও প্রকৃতির, সামলে রাখার মতো কোনো ভিনগ্রহের প্রাণী নয়। 4:1 গোটা মানবজাতিকে দাঁড় করায় এক প্রাণ ও তা থেকে সৃষ্ট তার জোড়ার ওপর, আর 7:189 এই আয়াতেরই যুক্তি পুনরাবৃত্তি করে: তিনি তা থেকে তার জোড়া বানালেন, যেন সে তার কাছে প্রশান্তি পায়।"
          },
          {
            "en": "The word sakan is the verse's centre: li-taskunu ilayha, that you may find stillness toward her. Sakan in Arabic is the quietening of what was in motion — the same root gives the words for dwelling and for tranquility. The stated purpose of marriage is not romance as spectacle but rest: a person and a place where the guard comes down. 2:187 gives the same fact its most compact image: they are a garment for you, and you are a garment for them.",
            "bn": "সাকান শব্দটিই আয়াতের কেন্দ্র: লি-তাসকুনু ইলাইহা — যেন তোমরা তার কাছে স্থিরতা পাও। আরবিতে সাকান মানে চলমান কিছুর শান্ত হয়ে আসা — একই ধাতু থেকে এসেছে বাসস্থান ও প্রশান্তির শব্দগুলো। বিবাহের ঘোষিত উদ্দেশ্য প্রদর্শনযোগ্য রোমাঞ্চ নয়, বিশ্রাম: এমন এক মানুষ ও এমন এক জায়গা, যেখানে পাহারা নেমে আসে। 2:187 একই সত্যের সবচেয়ে সংহত চিত্রটি দেয়: তারা তোমাদের পোশাক, আর তোমরা তাদের পোশাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Placed, Not Manufactured",
          "bn": "স্থাপিত, বানানো নয়"
        },
        "p": [
          {
            "en": "Wa ja'ala baynakum mawaddatan wa rahmah — and He placed between you affection and mercy. The verb matters: placed. The bond that holds two former strangers together across decades is described as something Allah sets between them, not something they generate alone. Couples who have felt love arrive and settle without their own doing have felt what the verse describes. Gratitude, not self-congratulation, is the fitting response to what was placed.",
            "bn": "ওয়া জাআলা বাইনাকুম মাওয়াদ্দাতাঁও ওয়া রাহমাহ — আর তিনি তোমাদের মধ্যে স্থাপন করেছেন ভালোবাসা ও রহমত। ক্রিয়াপদটিই গুরুত্বপূর্ণ: স্থাপন করেছেন। দুই সাবেক অপরিচিতকে যে বন্ধন দশকের পর দশক ধরে রাখে, তাকে বর্ণনা করা হয়েছে এমন কিছু হিসেবে যা আল্লাহ তাদের মাঝে বসিয়ে দেন — কেবল তারা নিজেরা যা উৎপাদন করে তা নয়। যে দম্পতিরা অনুভব করেছেন ভালোবাসা নিজে থেকে এসে থিতু হয়েছে, তারা আয়াতের বর্ণিত জিনিসটিই অনুভব করেছেন। যা স্থাপিত হয়েছে তার যোগ্য জবাব আত্মপ্রশংসা নয় — কৃতজ্ঞতা।"
          },
          {
            "en": "The commentators weigh the two nouns. Mawaddah is warm, active love and desire; rahmah is tenderness and mercy — the impulse that serves, overlooks, and stays. Some explain that the pair covers the seasons of a marriage: mawaddah burning brightest in youth, rahmah deepening where age or hardship thins the first. A marriage held by mercy in the years when affection is tested is not failing; it is running on the second of its two engines.",
            "bn": "মুফাসসিরগণ শব্দ দুটি ওজন করেন। মাওয়াদ্দাহ হলো উষ্ণ, সক্রিয় ভালোবাসা ও আকর্ষণ; রাহমাহ হলো কোমলতা ও দয়া — যে তাড়না সেবা করে, উপেক্ষা করে ক্ষমা করে, আর থেকে যায়। কেউ কেউ ব্যাখ্যা করেন, এই জোড়া দাম্পত্যের ঋতুগুলো ঢেকে দেয়: মাওয়াদ্দাহ যৌবনে সবচেয়ে উজ্জ্বল, আর বয়স বা কষ্ট প্রথমটিকে পাতলা করলে রাহমাহ গভীর হয়। ভালোবাসা পরীক্ষার বছরগুলোতে যে সংসার দয়ার জোরে টিকে থাকে, তা ব্যর্থ হচ্ছে না; তা চলছে তার দুই ইঞ্জিনের দ্বিতীয়টিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's Household",
          "bn": "নবীজির ঘর"
        },
        "p": [
          {
            "en": "The Prophet ﷺ lived this verse where it is hardest, in the unglamorous interior of a home. Aisha (RA) was asked what he ﷺ did inside his house and answered that he was in the service of his family, and when the prayer time came, he went out to it — al-Bukhari relates it. He ﷺ also said, in the sound hadith, that the best of you are the best to their families.",
            "bn": "নবী ﷺ এই আয়াতটি সেখানেই যাপন করেছেন যেখানে তা সবচেয়ে কঠিন — ঘরের চাকচিক্যহীন অন্দরে। আয়েশা (রাঃ)-কে জিজ্ঞেস করা হয়েছিল, তিনি ﷺ ঘরের ভেতরে কী করতেন; তিনি উত্তর দেন, তিনি তাঁর পরিবারের কাজে লেগে থাকতেন, আর নামাযের সময় হলে বেরিয়ে যেতেন — ইমাম বুখারী তা বর্ণনা করেছেন। তিনি ﷺ সহীহ হাদীসে আরও বলেছেন, তোমাদের মধ্যে সেরা তারাই, যারা তাদের পরিবারের কাছে সেরা।"
          },
          {
            "en": "These reports translate mawaddah and rahmah into verbs: service, patience, humour, presence. Tranquility is named in the verse as a purpose, which makes it a responsibility; each spouse is either building sukun for the other or eroding it. The question the verse hands a married reader is direct — is the guard able to come down around you? — and the Prophet's ﷺ example shows the answer is made of small domestic acts.",
            "bn": "এই বর্ণনাগুলো মাওয়াদ্দাহ ও রাহমাহকে ক্রিয়াপদে অনুবাদ করে: সেবা, ধৈর্য, রসবোধ, উপস্থিতি। আয়াতে প্রশান্তিকে উদ্দেশ্য হিসেবে নাম দেওয়া হয়েছে — যা একে দায়িত্বও বানিয়ে দেয়; প্রতিটি স্বামী-স্ত্রী হয় অন্যজনের জন্য সুকুন গড়ছেন, নয় তা ক্ষইয়ে ফেলছেন। বিবাহিত পাঠকের হাতে আয়াত যে প্রশ্নটি তুলে দেয় তা সরাসরি — আপনার পাশে কি পাহারা নামিয়ে রাখা যায়? — আর নবী ﷺ-এর দৃষ্টান্ত দেখায়, উত্তরটি তৈরি হয় ঘরের ছোট ছোট কাজ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign to Be Read",
          "bn": "পাঠযোগ্য এক নিদর্শন"
        },
        "p": [
          {
            "en": "The closing clause turns the home into a place of tadabbur: for a people who reflect. The reflection the verse invites is specific. That likeness exists where difference was possible; that stillness exists where two selves could grind; that affection and mercy arrived without being manufactured — each points past itself to the One who placed it. A believer who has known rest in a spouse has been handed a private proof of Allah's mercy.",
            "bn": "শেষ বাক্যাংশটি ঘরকে তাদাব্বুরের জায়গা বানিয়ে দেয়: চিন্তাশীল মানুষদের জন্য। আয়াত যে চিন্তার আমন্ত্রণ জানায় তা সুনির্দিষ্ট। ভিন্নতা সম্ভব ছিল, অথচ সাদৃশ্য আছে; দুটি সত্তার ঘষা লাগতে পারত, অথচ স্থিরতা আছে; ভালোবাসা ও দয়া কারখানায় তৈরি না হয়েও এসে পৌঁছেছে — প্রতিটিই নিজেকে ছাড়িয়ে ইঙ্গিত করে তাঁর দিকে, যিনি তা স্থাপন করেছেন। যে মুমিন জীবনসঙ্গীর কাছে বিশ্রাম পেয়েছেন, তার হাতে তুলে দেওয়া হয়েছে আল্লাহর রহমতের এক ব্যক্তিগত প্রমাণ।"
          },
          {
            "en": "The lived practice follows: thank Allah for the affection in the house as His gift, and guard what was placed. Harshness, contempt and neglect are not merely unkind; they vandalise a sign of Allah. And for the one whose marriage is a place of struggle rather than rest, the verse names whom to ask — since He is the One who sets mawaddah and rahmah between hearts, He is the One who can renew them.",
            "bn": "বাস্তব অনুশীলনটি এর থেকেই আসে: ঘরের ভালোবাসার জন্য আল্লাহকে তাঁর উপহার হিসেবে শুকরিয়া জানান, আর যা স্থাপিত হয়েছে তা পাহারা দিন। কর্কশতা, অবজ্ঞা ও অবহেলা কেবল নির্দয়তা নয়; তা আল্লাহর এক নিদর্শনের ওপর ভাঙচুর। আর যার দাম্পত্য বিশ্রামের বদলে সংগ্রামের জায়গা, আয়াত তাকে বলে দেয় কার কাছে চাইতে হবে — হৃদয়ে হৃদয়ে মাওয়াদ্দাহ ও রাহমাহ যিনি বসান, তিনিই তা নতুন করে দিতে পারেন।"
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
          "bn": "ছয় নিদর্শনের তৃতীয়টি"
        },
        "p": [
          {
            "en": "This verse belongs to a run. Six consecutive verses, 30:20 to 30:25, each open with the same phrase: and of His signs. They name the creation of man from dust, the spouses in whom hearts find rest, the heavens and the earth together with the difference of tongues and colours, sleep by night and day alongside the search for provision, the lightning and the rain, and finally the heavens and the earth standing firm by His command. Our verse is the third of them.",
            "bn": "এই আয়াতটি একটি ধারাবাহিকতার অংশ। পরপর ছয়টি আয়াত, 30:20 থেকে 30:25 পর্যন্ত, প্রতিটি শুরু হয় একই কথায়: আর তাঁর নিদর্শনসমূহের মধ্যে রয়েছে। সেগুলো উল্লেখ করে মাটি থেকে মানুষের সৃষ্টি, যে সঙ্গীদের কাছে হৃদয় প্রশান্তি পায়, আসমান ও যমীনের সৃষ্টি এবং সেই সঙ্গে ভাষা ও বর্ণের ভিন্নতা, রাতে ও দিনে ঘুম আর তার পাশে রিযিকের সন্ধান, বিদ্যুৎ ও বৃষ্টি, এবং শেষে তাঁর হুকুমে আসমান ও যমীনের অটল থাকা। আমাদের আয়াতটি এদের তৃতীয়।"
          },
          {
            "en": "Four of the six close by naming an audience, and each names a different one. 30:21 ends with a people who give thought, 30:22 with those of knowledge, 30:23 with a people who listen, 30:24 with a people who use reason. The variation is not filler. Different signs are opened by different capacities, and this verse has been assigned to knowledge. That assignment is the first thing to explain about it.",
            "bn": "ছয়টির মধ্যে চারটি শেষ হয় শ্রোতার পরিচয় দিয়ে, আর প্রত্যেকটিতে পরিচয়টি আলাদা। 30:21 শেষ হয় 'যারা চিন্তা করে' দিয়ে, 30:22 শেষ হয় 'জ্ঞানীদের' দিয়ে, 30:23 শেষ হয় 'যারা মনোযোগ দিয়ে শোনে' দিয়ে, আর 30:24 শেষ হয় 'যারা বুদ্ধি খাটায়' দিয়ে। এই বৈচিত্র্য কেবল ভরাট নয়। ভিন্ন ভিন্ন নিদর্শন খোলে ভিন্ন ভিন্ন সামর্থ্য দিয়ে, আর এই আয়াতটি বরাদ্দ হয়েছে জ্ঞানের জন্য। সেই বরাদ্দের ব্যাখ্যাই এই আয়াত নিয়ে প্রথম বলার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Galaxies and Accents Together",
          "bn": "ছায়াপথ আর উচ্চারণ একসঙ্গে"
        },
        "p": [
          {
            "en": "The striking thing about the sentence is what it puts in one breath. The creation of the heavens and the earth — the largest object anyone can point at — and the difference of your languages and your colours, which is the most ordinary fact about the room you are sitting in. Arabic joins them with a single wa, and the verse does not apologise for the pairing or rank one above the other. Both are listed as ayat, signs, on equal footing.",
            "bn": "বাক্যটির চমকপ্রদ দিকটি হলো, এটি কী কী এক নিঃশ্বাসে বসিয়ে দেয়। আসমানসমূহ ও যমীনের সৃষ্টি — যেদিকে আঙুল তোলা যায় এমন সবচেয়ে বিশাল বস্তু — আর তোমাদের ভাষা ও বর্ণের ভিন্নতা, যা আপনি যে ঘরে বসে আছেন তার সবচেয়ে সাধারণ বাস্তবতা। আরবি দুটিকে জোড়া দেয় একটিমাত্র 'ওয়া' দিয়ে, আর আয়াতটি এই জোড়ার জন্য কোনো কৈফিয়ত দেয় না, একটিকে অন্যটির ওপরেও তোলে না। দুটিকেই আয়াত অর্থাৎ নিদর্শন হিসেবে সমান মর্যাদায় রাখা হয়েছে।"
          },
          {
            "en": "That yoking is itself the argument. If the size of a thing were what made it a sign, human variety would not qualify at all. What makes something a sign here is that it is designed and could have been otherwise. The word for the difference is ikhtilaf, variance, and it is the variance rather than the speech or the skin that the verse points at. Uniformity would have been simpler; it was not chosen.",
            "bn": "এই জোড়া লাগানোটাই যুক্তি। কোনো জিনিসের আকারই যদি তাকে নিদর্শন বানাত, তবে মানুষের বৈচিত্র্য কোনোভাবেই যোগ্য হতো না। এখানে যা কোনো কিছুকে নিদর্শন বানায় তা হলো: এটি পরিকল্পিত, এবং অন্যরকমও হতে পারত। ভিন্নতার জন্য ব্যবহৃত শব্দটি ইখতিলাফ, অর্থাৎ বৈচিত্র্য; আর আয়াতটি আঙুল তোলে ভাষা বা চামড়ার দিকে নয়, সেই বৈচিত্র্যের দিকেই। সবাইকে এক রকম বানানো সহজতর হতো; সেটি বেছে নেওয়া হয়নি।"
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
            "bn": "আলসিনাহ হলো লিসান অর্থাৎ জিহ্বার বহুবচন, আর তা মানুষের বলা ভাষাগুলোকে বোঝায়; বেশ কয়েকজন মুফাসসির একে প্রতিটি কণ্ঠের আলাদা ধ্বনি পর্যন্ত টেনে নেন, যা দিয়ে অন্ধকারেও মানুষকে আলাদা চেনা যায়। আলওয়ান অর্থাৎ বর্ণকে পড়া হয় গায়ের রং এবং সেই সব বৈশিষ্ট্যের অর্থে যা এক মুখকে অন্য মুখ থেকে আলাদা করে। মুফাসসিরগণ কথাটিকে ব্যক্তি পর্যন্ত নামিয়ে আনেন: একটিমাত্র দম্পতি থেকে এসেছে এমন মানুষ, যাদের দুজনকেও হুবহু এক পাওয়া যায় না।"
          },
          {
            "en": "That is precisely where the sign lives. Descent from one origin should produce sameness; instead it produces a face and a voice that belong to one person only, reliably, for every one of us. 35:28 makes the same observation across a wider field — among people and beasts and grazing livestock there are various colours — and then closes with a line about knowledge: only those of His servants who have knowledge fear Allah. Colour and knowledge are paired there too.",
            "bn": "নিদর্শনটি ঠিক সেখানেই থাকে। একই উৎস থেকে আসা মানে তো একরকম হওয়ার কথা; অথচ তা থেকে জন্মায় এমন একটি মুখ ও একটি কণ্ঠ যা কেবল একজনেরই, আর তা প্রত্যেকের ক্ষেত্রেই নিশ্চিতভাবে ঘটে। 35:28 আয়াত আরও বড় পরিসরে একই পর্যবেক্ষণ করে — মানুষ, জীবজন্তু ও গবাদি পশুর মধ্যেও নানা বর্ণ — আর তারপর শেষ হয় জ্ঞানের কথা দিয়ে: তাঁর বান্দাদের মধ্যে কেবল জ্ঞানীরাই আল্লাহকে ভয় করে। সেখানেও বর্ণ আর জ্ঞান জোড়া বেঁধে আসে।"
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
            "bn": "মানুষের বৈচিত্র্য লুকানো কিছু নয়। সবাই তা দেখে, আর অধিকাংশ মানুষ তা দেখে নিছক একটি তথ্য হিসেবে, নয়তো নিজেরটাকে বেশি পছন্দ করার কারণ হিসেবে। একে নিদর্শন হিসেবে পড়তে বাড়তি কিছু লাগে, আর আয়াতের শেষ অংশ সেই বাড়তি জিনিসটির নাম দেয় জ্ঞান। কথাটা এই নয় যে আলিম একটি অতিরিক্ত রং দেখতে পান। কথাটা হলো, অপ্রশিক্ষিত চোখ যেখানে কেবল পার্থক্য দেখে সেখানে নকশা দেখা একটি অর্জিত দক্ষতা।"
          },
          {
            "en": "Earlier in the same surah, 30:7 has already described the other kind of seeing: they know what is apparent of the worldly life, and of the Hereafter they are unaware. Surah ar-Rum has therefore set up two ways of knowing long before it reaches the signs, and this verse is addressed to the second. The same data is in front of both men. Only one of them is reading it.",
            "bn": "একই সূরার আগের দিকে, 30:7 আয়াত অন্য ধরনের দেখাটির বর্ণনা আগেই দিয়ে রেখেছে: তারা দুনিয়ার জীবনের বাহ্যিক দিকটুকু জানে, আর আখিরাত সম্পর্কে তারা উদাসীন। অর্থাৎ সূরা আর-রূম নিদর্শনগুলোতে পৌঁছানোর অনেক আগেই দুই ধরনের জানাকে দাঁড় করিয়ে দিয়েছে, আর এই আয়াতটি দ্বিতীয়টির উদ্দেশে। দুজনের সামনেই একই উপাত্ত। তাদের একজনই কেবল সেটি পড়ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Rules Out",
          "bn": "এটি কী বাতিল করে দেয়"
        },
        "p": [
          {
            "en": "49:13 supplies the practical half. There mankind is told it was made into peoples and tribes so that they might know one another, and that the noblest in the sight of Allah is the one with the most taqwa. Put the two verses together and the position is complete: difference exists for acquaintance, and rank runs on God-consciousness alone. Neither verse asks anyone to pretend the differences are not there.",
            "bn": "49:13 আয়াত ব্যবহারিক অর্ধেকটা জোগায়। সেখানে মানুষকে বলা হয়েছে, তাদের বিভিন্ন জাতি ও গোত্রে ভাগ করা হয়েছে যাতে তারা পরস্পরকে চিনতে পারে, আর আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই যার তাকওয়া সবচেয়ে বেশি। দুটি আয়াত একসঙ্গে রাখলে অবস্থানটি সম্পূর্ণ হয়: পার্থক্য আছে পরিচয়ের জন্য, আর মর্যাদা চলে কেবল আল্লাহভীতির ওপর। কোনো আয়াতই কাউকে বলছে না যে পার্থক্যগুলো নেই বলে ভান করতে হবে।"
          },
          {
            "en": "What follows is uncomfortable and simple. To sneer at an accent, a language or a complexion is to sneer at something the Quran has just called a sign of Allah. That makes prejudice a failure of tawhid before it is a failure of manners. And the correction the verse offers is not a slogan but an exercise: the next unfamiliar voice you hear was placed in a list beside the creation of the heavens and the earth.",
            "bn": "এর পরের কথাটি অস্বস্তিকর এবং সরল। কোনো উচ্চারণ, কোনো ভাষা বা কোনো গায়ের রং নিয়ে বিদ্রূপ করা মানে এমন কিছু নিয়ে বিদ্রূপ করা যাকে কুরআন এইমাত্র আল্লাহর নিদর্শন বলল। এতে বর্ণবিদ্বেষ শিষ্টাচারের ত্রুটি হওয়ার আগে তাওহীদের ত্রুটি হয়ে দাঁড়ায়। আর আয়াতটি যে সংশোধন দেয় তা কোনো স্লোগান নয়, একটি অনুশীলন: পরের যে অচেনা কণ্ঠটি আপনি শুনবেন, তাকে আসমান ও যমীনের সৃষ্টির পাশে একই তালিকায় বসানো হয়েছে।"
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
          "bn": "সতর্কবাণী যেখানে এসে পড়ে"
        },
        "p": [
          {
            "en": "Surah ar-Rum is Makkan, and the verses just before this one gather the believer toward one thing. Set your face to the religion as a ḥanīf, 30:30 says, the fiṭrah of Allah upon which He made people; that is the upright religion. Then 30:31 presses it home: turning to Him in repentance, fear Him, establish prayer, and do not be of those who associate partners with Allah. Our verse completes that last clause by naming what those people are, those who split their religion and became sects, every faction rejoicing in what it has.",
            "bn": "সূরা আর-রূম মাক্কী, আর এর ঠিক আগের আয়াতগুলো মুমিনকে একটি জিনিসের দিকে টেনে আনে। ৩০:৩০ আয়াত বলছে, একনিষ্ঠভাবে দ্বীনের দিকে তোমার মুখ ফেরাও, এটাই আল্লাহর সেই ফিতরাত যার উপর তিনি মানুষকে সৃষ্টি করেছেন, এটাই সুপ্রতিষ্ঠিত দ্বীন। এরপর ৩০:৩১ আয়াত কথাটা আরও চেপে ধরে। তাঁর অভিমুখী হও, তাঁকে ভয় করো, নামায কায়েম করো, আর মুশরিকদের অন্তর্ভুক্ত হয়ো না। আমাদের আয়াত সেই শেষ কথাটাই পূর্ণ করে, এই মুশরিকরা কারা তা বলে দিয়ে, যারা নিজেদের দ্বীনকে ভেঙে ফেলেছে আর বিভিন্ন দলে ভাগ হয়ে গেছে, প্রত্যেক দল নিজেদের কাছে যা আছে তাই নিয়ে উল্লসিত।"
          },
          {
            "en": "The commentators note two ways to read the join. at-Tabari and al-Qurtubi report that al-Farrā' allowed do not be of those who associate partners to stand complete in itself, with of those who split their religion beginning a fresh, resumed sentence; it may also be read as attached to the words before it. an-Naḥḥās, quoted by al-Qurtubi, explains the connected reading grammatically as a substitution with the particle repeated. Either way the picture does not change. The passage warns against a people who fractured the one religion they had been given.",
            "bn": "সংযোগটা পড়ার দুটি পথ তাফসীরকারেরা উল্লেখ করেন। তাবারী আর কুরতুবী জানান, ফাররা মনে করতেন মুশরিকদের অন্তর্ভুক্ত হয়ো না কথাটা নিজেই সম্পূর্ণ হতে পারে, আর যারা নিজেদের দ্বীনকে ভেঙেছে কথাটা দিয়ে নতুন একটি বাক্য শুরু হতে পারে। আবার এটাকে আগের কথার সঙ্গে জুড়ে পড়াও চলে। কুরতুবীর উদ্ধৃত নাহ্হাস সংযুক্ত পাঠটিকে ব্যাকরণের দিক থেকে ব্যাখ্যা করেন, হরফ পুনরাবৃত্তি করে বদল হিসেবে। যেভাবেই পড়া হোক ছবিটা বদলায় না। আয়াত সেই মানুষদের বিরুদ্ধে সতর্ক করছে, যারা নিজেদের পাওয়া এক দ্বীনকে টুকরো করে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Split It or Leave It",
          "bn": "ভাঙা, নাকি ছেড়ে যাওয়া"
        },
        "p": [
          {
            "en": "The widely recited reading is farraqū dīnahum, they divided their religion. Ibn Kathir glosses it as baddalūhu wa-ghayyarūhu, they altered and changed it, believing in part of it and disbelieving in part. at-Tabari reads it the same way, those who exchanged their religion and went against it. On this reading the fault is a cutting up from inside. The religion was one whole, and they kept the pieces that suited them and discarded the rest, so that what they held was no longer the thing entire.",
            "bn": "বহুল পঠিত কিরাআত হলো ফার্রাকূ দীনাহুম, তারা নিজেদের দ্বীনকে ভাগ করে ফেলেছে। ইবন কাসীর এর অর্থ করেন বাদ্দালূহু ওয়া গাইয়ারূহু, তারা দ্বীনকে পাল্টে ফেলেছে, বদলে ফেলেছে, এর কিছু অংশে ঈমান এনেছে আর কিছু অংশ অস্বীকার করেছে। তাবারীও একইভাবে পড়েন, যারা নিজেদের দ্বীনকে বদলে ফেলেছে আর তার বিরোধিতা করেছে। এই পাঠে দোষটা ভেতর থেকে কেটে টুকরো করা। দ্বীন ছিল এক অখণ্ড জিনিস, তারা নিজেদের পছন্দের অংশটুকু রেখে বাকিটা ফেলে দিয়েছে, ফলে তাদের হাতে যা রইল তা আর গোটা জিনিসটি নয়।"
          },
          {
            "en": "A second reading is fāraqū dīnahum. al-Qurtubi reports that Hamza and al-Kisā'ī recited it so, and that 'Ali ibn Abi Talib (RA) read it this way too; the sense is that they parted from the religion that must be followed, which is tawhid. Ibn Kathir carries the same reading and explains it as tarakūhu warā'a ẓuhūrihim, they left it behind their backs. Here the fault is not a cutting up but a walking away, an abandonment of the whole rather than a sorting of its parts.",
            "bn": "দ্বিতীয় একটি পাঠ হলো ফারাকূ দীনাহুম। কুরতুবী জানান, হামযা আর কিসাঈ এভাবে পড়েছেন, আর আলী ইবন আবী তালিব (রাঃ)-ও এভাবেই পড়তেন। এর অর্থ, যে দ্বীন অনুসরণ করা অবশ্যকর্তব্য তারা তা থেকে সরে গেছে, আর সেই দ্বীন হলো তাওহীদ। ইবন কাসীর একই পাঠ আনেন আর ব্যাখ্যা করেন তারাকূহু ওয়ারাআ যুহূরিহিম, তারা দ্বীনকে পিঠের পেছনে ফেলে রেখে গেছে। এখানে দোষটা কেটে টুকরো করা নয়, বরং হেঁটে চলে যাওয়া, অংশে অংশে বাছাই নয়, গোটাটাকেই ছেড়ে দেওয়া।"
          },
          {
            "en": "The two readings press on the same wound from two sides. farraqū puts the harm inside the religion, a unity chopped into portions; fāraqū puts it outside, a people who turned their backs on it. at-Tabari's own wording actually holds both motions together, they changed their religion and opposed it so they parted from it. Neither reading softens the charge. Whether the one religion is broken into pieces or dropped altogether, what Allah gave as a single whole has been lost, and the loss is what the verse condemns.",
            "bn": "দুটি পাঠ একই ক্ষতে দুই দিক থেকে চাপ দেয়। ফার্রাকূ ক্ষতিটাকে দ্বীনের ভেতরে রাখে, এক অখণ্ডকে অংশে অংশে কেটে ফেলা; ফারাকূ সেটাকে বাইরে রাখে, এমন এক দল যারা দ্বীনের দিকে পিঠ ফিরিয়েছে। তাবারীর নিজের ভাষাতেই দুটি গতি একসঙ্গে ধরা আছে, তারা দ্বীনকে বদলেছে আর তার বিরোধিতা করে তা থেকে সরে গেছে। কোনো পাঠই অভিযোগটাকে হালকা করে না। এক দ্বীনকে টুকরো করা হোক বা পুরোটাই ফেলে দেওয়া হোক, আল্লাহ যা এক অখণ্ড হিসেবে দিয়েছিলেন তা হারিয়ে গেছে, আর এই হারানোটাই আয়াতের নিন্দার বিষয়।"
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
            "bn": "প্রথম পাঠ অনুযায়ী উদ্দিষ্ট হলো মুশরিকরা, আগের কথা মুশরিকদের অন্তর্ভুক্ত হয়ো না-এর সঙ্গে মিলিয়ে। সাদী কথাটা খোলাসা করে বলেন। দ্বীন তো এক, কেবল আল্লাহর জন্য একনিষ্ঠ ইবাদত, আর এই মুশরিকরা সেটাকে ভেঙে ফেলেছে। তাদের কেউ মূর্তি আর প্রতিমার পূজা করে, কেউ সূর্য আর চাঁদের, কেউ আউলিয়া আর নেককারদের, আর তাদের মধ্যে কেউ ইহুদি কেউ খ্রিস্টান। মুয়াসসার আর সংক্ষিপ্ত ইবন কাসীরও আয়াতটি একইভাবে পড়েন, একটু আগেই যে মুশরিকদের বিরুদ্ধে সতর্ক করা হলো তাদেরই সরাসরি বর্ণনা হিসেবে।"
          },
          {
            "en": "A second reading names the People of the Book. at-Tabari reports from Qatada, and again from Ibn Zayd, that those who split their religion and became sects are the Jews and the Christians. al-Baghawi says the same, they became differing factions, and they are the Jews and the Christians. al-Qurtubi adds ar-Rabi' ibn Anas, with Qatada and Ma'mar, for this view. On this reading the verse looks back at the communities before Islam, who received one revelation and then fell into rival parties over it.",
            "bn": "দ্বিতীয় একটি পাঠ উদ্দিষ্ট ধরে আহলে কিতাবকে। তাবারী কাতাদা থেকে, আবার ইবন যায়দ থেকে বর্ণনা করেন যে, যারা নিজেদের দ্বীনকে ভেঙেছে আর দলে ভাগ হয়েছে তারা ইহুদি আর খ্রিস্টান। বাগাভীও একই কথা বলেন, তারা ভিন্ন ভিন্ন দলে পরিণত হয়েছে, আর তারা ইহুদি আর খ্রিস্টান। কুরতুবী এই মতের জন্য রাবী ইবন আনাস, সেই সঙ্গে কাতাদা আর মামারকে যোগ করেন। এই পাঠে আয়াত ফিরে তাকায় ইসলামের আগের জাতিগুলোর দিকে, যারা এক ওহী পেয়েছিল আর তারপর তা নিয়ে প্রতিদ্বন্দ্বী দলে ভেঙে পড়েছিল।"
          },
          {
            "en": "A third reading turns the verse toward the people of the qibla. al-Qurtubi reports that Abu Hurayra, 'A'isha and Abu Umama (RA) understood it of the people of the qibla, the people of desires and innovations. al-Baghawi carries this as a second possibility, it is said they are the people of innovation of this community. The commentators thus range across a wide field, from idolaters plainly outside the faith to a caution aimed within it. The verse is reported here as the mufassirūn report it, as a span of readings, without settling which is meant.",
            "bn": "তৃতীয় একটি পাঠ আয়াতটিকে ফেরায় আহলে কিবলার দিকে। কুরতুবী জানান, আবু হুরায়রা, আয়েশা আর আবু উমামা (রাঃ) এটিকে বুঝেছেন আহলে কিবলা সম্পর্কে, অর্থাৎ খেয়াল-খুশি আর বিদআতে লিপ্ত লোকদের সম্পর্কে। বাগাভী এটিকে দ্বিতীয় সম্ভাবনা হিসেবে আনেন, বলা হয় তারা এই উম্মতের বিদআতপন্থী লোক। তাই তাফসীরকারদের মত ছড়িয়ে আছে একটি বিস্তৃত মাঠজুড়ে, দ্বীনের সুস্পষ্ট বাইরের মুশরিক থেকে শুরু করে দ্বীনের ভেতরের দিকে তাক করা সতর্কতা পর্যন্ত। মুফাসসিরগণ যেভাবে বর্ণনা করেন আয়াতটি এখানে সেভাবেই ধরা হলো, পাঠের একটি পরিসর হিসেবে, কোনটি উদ্দিষ্ট তা স্থির না করে।"
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
            "bn": "শিয়াআন শব্দটিই ছবিটা বয়ে আনে। মাআরিফুল কুরআন ব্যাখ্যা করে, এটি শীআ-র বহুবচন, আর শীআ মানে কোনো নেতার অনুসরণকারী একদল মানুষ। কুরতুবী বাকি ব্যাখ্যাগুলো জড়ো করেন, কালবী শিয়াআন পড়েন ফিরাক অর্থে, অর্থাৎ দল, আর মুকাতিল পড়েন আদইয়ান অর্থে, অর্থাৎ ধর্ম, যেন প্রত্যেক দলের শেষে নিজের মতো একটা আলাদা মতবাদ দাঁড়িয়ে যায়। এক দ্বীন কেবল ফাটে না, বরং প্রতিদ্বন্দ্বী সংগঠনে ছড়িয়ে পড়ে, প্রত্যেকটির জন্য আছে অনুসরণের একজন নেতা আর জড়ো হওয়ার একটা ঝান্ডা।"
          },
          {
            "en": "The commentators then describe how such parties behave. as-Sa'di writes that each faction of shirk banded together and grew fanatical in defending the falsehood it held and in fighting everyone outside it. al-Muyassar puts it the same way, they became groups and parties, partisans for their chiefs and their factions and their opinions, each helping the other along upon falsehood. Ma'arif traces the start of it, once people left the one faith for the private views of their leaders, and views differ from person to person, the groups could only multiply.",
            "bn": "এরপর তাফসীরকারেরা বর্ণনা করেন এমন দলগুলো কীভাবে চলে। সাদী লেখেন, শিরকের প্রত্যেক দল একজোট হয়ে নিজেদের ধরে রাখা বাতিলের পক্ষে গোঁড়া হয়ে ওঠে আর বাইরের সবার সঙ্গে লড়াই করে। মুয়াসসার একইভাবে বলেন, তারা দল আর উপদলে পরিণত হয়, নিজেদের নেতা আর দল আর মতের পক্ষে পক্ষপাতী হয়, একে অন্যকে বাতিলের উপর সাহায্য করে। মাআরিফ এর শুরুটা ধরিয়ে দেয়, মানুষ যখন এক দ্বীন ছেড়ে নেতাদের ব্যক্তিগত মতের দিকে গেল, আর মত তো একেকজনের একেক রকম, তখন দল বেড়ে যাওয়া ছাড়া উপায় রইল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Glad in Its Corner",
          "bn": "নিজের কোণ নিয়ে খুশি"
        },
        "p": [
          {
            "en": "Then the closing clause, every faction rejoicing in what it has. al-Qurtubi reads fariḥūn as masrūrūn muʿjabūn, delighted and self-impressed, and gives the reason, because they never made the truth clear to themselves, though clarifying it was a duty laid on them. at-Tabari sharpens it, each party rejoices in the school it clings to, reckoning that the right is with them and with no one else. The gladness is not innocent pleasure in the truth; it is satisfaction in a portion, mistaken for the whole.",
            "bn": "তারপর শেষ কথাটা, প্রত্যেক দল নিজেদের কাছে যা আছে তাই নিয়ে উল্লসিত। কুরতুবী ফারিহূন পড়েন মাসরূরূন মুজাবূন অর্থে, আনন্দিত আর আত্মমুগ্ধ, আর কারণটাও দেন, কারণ তারা কখনো সত্যকে নিজেদের কাছে স্পষ্ট করেনি, অথচ তা স্পষ্ট করা তাদের উপর কর্তব্য ছিল। তাবারী কথাটা আরও ধারালো করেন, প্রত্যেক দল নিজের আঁকড়ে ধরা মতবাদ নিয়ে উল্লসিত, ভাবে সঠিকটা কেবল তাদের কাছেই, আর কারও কাছে নয়। এই আনন্দ সত্য পেয়ে পাওয়া নিষ্পাপ খুশি নয়, বরং একটা অংশ নিয়ে তৃপ্তি, যাকে গোটাটা ভেবে নেওয়া হয়েছে।"
          },
          {
            "en": "as-Sa'di and Ma'arif both locate the disease in this self-satisfaction. Each party judges itself to be upon the truth and the others upon falsehood; Ma'arif adds that the Shaytan made every group believe it alone walked the right path. The verse does not merely record that the splitting happened. It names the smugness as the sickness, because the gladness is what seals the person in. A party content with its corner feels no need to look again, and so the very contentment keeps it from the whole it has lost.",
            "bn": "সাদী আর মাআরিফ দুজনেই রোগটা খুঁজে পান এই আত্মতুষ্টিতে। প্রত্যেক দল নিজেকে সত্যের উপর আর বাকিদের বাতিলের উপর বলে রায় দেয়; মাআরিফ যোগ করে, শয়তান প্রত্যেক দলকে বিশ্বাস করিয়েছে যে কেবল সে-ই সঠিক পথে চলছে। আয়াত শুধু এটুকু জানায় না যে ভাগ হওয়ার ঘটনাটা ঘটেছে। এটি আত্মতৃপ্তিকেই রোগ বলে নাম দেয়, কারণ এই আনন্দই মানুষকে ভেতরে আটকে ফেলে। নিজের কোণ নিয়ে সন্তুষ্ট দল আর নতুন করে তাকানোর দরকার বোধ করে না, ফলে এই তৃপ্তিই তাকে হারানো গোটা জিনিসটি থেকে দূরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration on Splitting",
          "bn": "ভাগ হওয়া নিয়ে এক হাদীস"
        },
        "p": [
          {
            "en": "at-Tirmidhi records from 'Abdullah ibn 'Amr (RA) that the Messenger of Allah ﷺ said what befell the children of Isra'il will befall this Ummah step by step, that the children of Isra'il split into 72 sects and this Ummah will split into 73, all of them in the Fire except one; when he was asked which, he said, what I am upon and my Companions. at-Tirmidhi graded this report ḥasan gharīb, a mufassar, well-explained ḥasan gharīb narration, and that grading is reported here as he gave it, not raised above it.",
            "bn": "তিরমিযী আবদুল্লাহ ইবন আমর (রাঃ) থেকে বর্ণনা করেন যে, রাসূলুল্লাহ ﷺ বলেছেন, বনী ইসরাঈলের উপর যা এসেছিল তা ধাপে ধাপে এই উম্মতের উপরও আসবে, বনী ইসরাঈল ৭২ দলে ভাগ হয়েছিল আর এই উম্মত ভাগ হবে ৭৩ দলে, একটি দল ছাড়া সবগুলোই জাহান্নামে; জিজ্ঞেস করা হলে তিনি বললেন, যার উপর আমি আর আমার সাহাবীরা আছি। তিরমিযী এই বর্ণনাকে হাসান গারীব বলেছেন, একটি মুফাসসার তথা সুব্যাখ্যাত হাসান গারীব হাদীস, আর সেই মান এখানে তিনি যেমন দিয়েছেন তেমনই ধরা হলো, তার উপরে তোলা হয়নি।"
          },
          {
            "en": "What the saved group is called matters more than the counting. It is named by a description, not a roster, what the Prophet ﷺ and his Companions were upon, which the commentators read as adherence to the Book of Allah and the Sunnah and the way of the first generations. Ibn Kathir, citing al-Hakim's Mustadrak, gives the same answer to the same question. The hadith hands the hearer a standard to measure himself against. It does not hand him a licence to count other people into the Fire.",
            "bn": "নাজাতপ্রাপ্ত দলকে কী বলা হলো, তা গোনাগুনির চেয়ে বেশি গুরুত্বপূর্ণ। একে চেনানো হয়েছে একটি বর্ণনা দিয়ে, নামের তালিকা দিয়ে নয়, যার উপর নবী ﷺ আর তাঁর সাহাবীরা ছিলেন, আর তাফসীরকারেরা এটিকে পড়েন আল্লাহর কিতাব, সুন্নাহ আর প্রথম প্রজন্মের পথ আঁকড়ে ধরা হিসেবে। ইবন কাসীর হাকিমের মুসতাদরাক উদ্ধৃত করে একই প্রশ্নের একই জবাব দেন। হাদীসটি শ্রোতার হাতে একটা মাপকাঠি তুলে দেয়, যা দিয়ে সে নিজেকে মাপবে। অন্য মানুষদের জাহান্নামে গুনে ফেলার কোনো অনুমতি এটি তার হাতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror for the Believers",
          "bn": "মুমিনদের জন্য আয়না"
        },
        "p": [
          {
            "en": "as-Sa'di does not let the verse rest on other communities. In this, he writes, is a warning to the Muslims against their own scattering and splitting into factions, each party fanatical for the mixture of truth and falsehood it holds, so that by their division they come to resemble the very idolaters the passage warned against. His reason is the one the whole surah has been building. The religion is one, the Messenger is one, the God is one, and a single faith does not belong to rival parties that each take it as a possession.",
            "bn": "সাদী আয়াতটিকে কেবল অন্য জাতির উপর ছেড়ে রাখেন না। তিনি লেখেন, এতে মুসলমানদের জন্য সতর্কতা আছে তাদের নিজেদের ছত্রভঙ্গ হওয়া আর দলে দলে ভাগ হওয়া থেকে, যেখানে প্রত্যেক দল নিজের ধরে রাখা হক আর বাতিলের মিশ্রণের পক্ষে গোঁড়া হয়ে ওঠে, ফলে এই ভাগাভাগিতে তারা সেই মুশরিকদেরই মতো হয়ে যায় যাদের বিরুদ্ধে আয়াত সতর্ক করেছিল। তাঁর যুক্তিটা গোটা সূরা যা গড়ে তুলছিল তা-ই। দ্বীন তো একটাই, রাসূল একজনই, ইলাহ একজনই, আর এক ঈমান প্রতিদ্বন্দ্বী দলের সম্পত্তি নয় যে যার যার ভাগটুকু নিজের করে নেবে।"
          },
          {
            "en": "He then weighs what the quarrelling throws away. Most religious matters, as-Sa'di notes, are agreed upon among the scholars and the imams, and the brotherhood of faith is a bond Allah Himself has tied in the firmest knot. Why then let all of that be cancelled, and division built instead upon hidden questions or branch disagreements, by which some declare others astray? He calls this among the greatest of Shaytan's provocations against the Muslims, and he calls working to gather their word and heal the discord among the best of striving in the path of Allah.",
            "bn": "এরপর তিনি ওজন করে দেখান এই ঝগড়া কী ফেলে দিচ্ছে। সাদী বলেন, দ্বীনের অধিকাংশ বিষয়েই আলিম আর ইমামদের মধ্যে ইজমা আছে, আর ঈমানের ভ্রাতৃত্ব এমন এক বাঁধন যা আল্লাহ নিজেই সবচেয়ে মজবুত গিঁটে বেঁধে দিয়েছেন। তাহলে কেন এসবকে বাতিল করে দিয়ে গুপ্ত কিছু প্রশ্ন বা শাখাগত মতভেদের উপর ভাগাভাগি দাঁড় করানো হবে, যা দিয়ে একদল আরেক দলকে পথভ্রষ্ট বলে ঘোষণা করে? তিনি একে মুসলমানদের বিরুদ্ধে শয়তানের সবচেয়ে বড় উসকানিগুলোর একটি বলেন, আর তাদের ঐক্য গড়া আর বিভেদ মেটানোর চেষ্টাকে বলেন আল্লাহর পথে শ্রেষ্ঠ জিহাদগুলোর একটি।"
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
            "en": "This has to be said plainly. The verse condemns an act, the splitting of the one religion into factions and the self-satisfied partisanship that follows from it. The commentators treat that act in the abstract, the disease of tafriqa and smug party-feeling, and they do not place it in any reader's hand as a weapon. The verse names no living group, no living sect, school or community. It describes what the text describes, and it licenses nothing against any living person or community whatever.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত একটি কাজের নিন্দা করে, এক দ্বীনকে দলে ভেঙে ফেলা আর তার পেছনে পেছনে আসা আত্মতুষ্ট দলবাজি। তাফসীরকারেরা সেই কাজটিকে বিমূর্তভাবে ধরেন, তাফরিকা আর আত্মতৃপ্ত দলপ্রীতির রোগ হিসেবে, আর কোনো পাঠকের হাতে এটিকে অস্ত্র হিসেবে তুলে দেন না। আয়াত কোনো জীবিত দল, কোনো জীবিত ফিরকা, মাযহাব বা সম্প্রদায়ের নাম নেয় না। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করছে, আর কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Turned into a tool of takfir, the verse would become the very thing it warns against, one faction rejoicing that it alone is saved and the rest are in the Fire. That is the smugness the clause condemns, now wearing the clause as its banner. The honest use is the mirror as-Sa'di holds up. Read the verse first against your own gladness, whether your joy rests in Allah's religion or in the winning of your side, and let it move you to mend the division among the believers rather than to widen it.",
            "bn": "তাকফিরের হাতিয়ার বানিয়ে ফেললে আয়াত সেই জিনিসই হয়ে দাঁড়ায় যার বিরুদ্ধে সে সতর্ক করছে, একটি দল উল্লসিত যে কেবল সে-ই নাজাত পেয়েছে আর বাকি সবাই জাহান্নামে। এটাই তো সেই আত্মতৃপ্তি যার নিন্দা আয়াতটি করছে, এখন সেই আয়াতকেই নিজের ঝান্ডা বানিয়ে নিয়েছে। সৎ ব্যবহারটা হলো সাদীর তুলে ধরা সেই আয়না। আয়াতটি আগে নিজের আনন্দের বিরুদ্ধে পড়ুন, আপনার খুশি কি আল্লাহর দ্বীনে, নাকি নিজের দলের জয়ে, আর এটি আপনাকে মুমিনদের মধ্যকার বিভেদ চওড়া করার দিকে নয়, মেটানোর দিকে নিয়ে যাক।"
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
          "bn": "তা দেখা দিয়েছে"
        },
        "p": [
          {
            "en": "The verse opens with a verb, not a noun: zahara al-fasad, the corruption appeared. Zahara means to become visible, to come out into the open. The word does not say that the damage began at some point; it says it surfaced, which implies that it was being made before anyone could see it. That single verb sets the tone of the whole sentence, because what has surfaced can be read, and reading it is what the verse is about to ask for.",
            "bn": "আয়াতটি শুরু হয় একটি ক্রিয়াপদ দিয়ে, বিশেষ্য দিয়ে নয়: যাহারাল ফাসাদ — বিপর্যয় দেখা দিয়েছে। 'যাহারা' মানে দৃশ্যমান হওয়া, খোলাখুলি প্রকাশ পাওয়া। শব্দটি বলে না যে ক্ষতিটি কোনো এক সময়ে শুরু হয়েছে; বলে যে তা ভেসে উঠেছে — যা ইঙ্গিত দেয়, কেউ দেখতে পাওয়ার আগেই তা তৈরি হচ্ছিল। এই একটি ক্রিয়াপদই গোটা বাক্যের সুর বেঁধে দেয়, কারণ যা ভেসে উঠেছে তা পড়া যায়, আর সেই পড়াটাই আয়াতটি এখন দাবি করতে যাচ্ছে।"
          },
          {
            "en": "Where it appeared is given as fi al-barr wa al-bahr. Ibn Kathir reports several readings of the pair from the early authorities. From Ibn Abbas (RA), Ikrimah, ad-Dahhak and as-Suddi it is transmitted that al-barr means the open, uninhabited land and al-bahr the towns and cities; a further report from Ibn Abbas (RA) and Ikrimah takes al-bahr as the towns built on riverbanks. Others read the two words in their ordinary sense of dry land and sea.",
            "bn": "কোথায় তা দেখা দিয়েছে, তা বলা হয়েছে 'ফিল বার্রি ওয়াল বাহর' বলে। ইবনে কাসীর প্রাচীন ইমামদের কাছ থেকে এই জোড়াটির কয়েকটি পাঠ বর্ণনা করেন। ইবনে আব্বাস (রাঃ), ইকরিমা, দাহহাক ও সুদ্দী থেকে বর্ণিত যে 'বার্র' মানে খোলা, জনশূন্য ভূমি আর 'বাহর' মানে শহর-নগর; ইবনে আব্বাস (রাঃ) ও ইকরিমা থেকে আরেকটি বর্ণনায় 'বাহর' মানে নদীতীরে গড়ে ওঠা জনপদ। অন্যরা শব্দ দুটিকে তাদের সাধারণ অর্থেই পড়েন — স্থল ও সমুদ্র।"
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
            "bn": "ফাসাদ হলো সালাহ-র বিপরীত। এটি এমন কিছুর নষ্ট হয়ে যাওয়া যা আগে ঠিক ছিল — পচন, ধ্বংস, ভেতর থেকে খুলে পড়া। 7:56 আয়াত শব্দ দুটিকে সরাসরি মুখোমুখি দাঁড় করায়: যমীনে বিপর্যয় সৃষ্টি করো না তার ইসলাহ অর্থাৎ ঠিক করে দেওয়ার পর, আর তাঁকে ডাকো ভয় ও আশা নিয়ে। সুতরাং সূরা আর-রূমের এই আয়াতটি একটি অবস্থার নাম দেয়, আর সেই অবস্থাটি সংজ্ঞায়িত হয় কোনো আদর্শের বিপরীতে নয়, বরং আগেকার এক সুস্থতার বিপরীতে।"
          },
          {
            "en": "Ibn Kathir cites the mufassirun on what shows up on the ground. Mujahid read corruption on land as the killing of a son of Adam and corruption at sea as the seizing of ships. A reading transmitted from Zayd ibn Rafi' takes it of rain withheld, with famine following on the land and harm to the creatures of the sea. Abu al-Aliyah put the principle plainly: whoever disobeys Allah in the earth has corrupted it, because the good order of the earth and the heavens rests on obedience to Him.",
            "bn": "মাটির উপরে কী দেখা যায়, সে বিষয়ে ইবনে কাসীর মুফাসসিরগণের বক্তব্য উদ্ধৃত করেন। মুজাহিদ স্থলের বিপর্যয়কে পড়েছেন আদম-সন্তানকে হত্যা হিসেবে, আর সমুদ্রের বিপর্যয়কে নৌযান ছিনিয়ে নেওয়া হিসেবে। যায়দ ইবনে রাফি' থেকে বর্ণিত এক পাঠে তা বৃষ্টি বন্ধ হয়ে যাওয়া — ফলে স্থলে দুর্ভিক্ষ আর সমুদ্রের প্রাণীদের ক্ষতি। আবুল আলিয়া নীতিটি স্পষ্ট করে বলেন: যে যমীনে আল্লাহর অবাধ্যতা করে সে যমীনকেই নষ্ট করে, কারণ আসমান ও যমীনের সুশৃঙ্খলা তাঁর আনুগত্যের উপরই দাঁড়িয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "By What Hands Have Earned",
          "bn": "হাতের কামাইয়ের কারণে"
        },
        "p": [
          {
            "en": "Bima kasabat aydi an-nas is the causal clause, and it is the reason the verse is not merely an observation. The bi- here is the bi of cause. Kasaba is the verb of earning, the one the Quran uses for what a soul acquires and must answer for, and the earners are named as an-nas, people — not a faction of them, and not somebody else. Aydi, hands, is where deeds are actually done.",
            "bn": "বিমা কাসাবাত আইদিন নাস — এটিই কারণ-নির্দেশক বাক্যাংশ, আর এ কারণেই আয়াতটি নিছক একটি পর্যবেক্ষণ নয়। এখানকার 'বি' হলো কারণ বোঝানোর 'বি'। 'কাসাবা' হলো উপার্জনের ক্রিয়াপদ — কুরআন যা ব্যবহার করে একটি প্রাণ যা অর্জন করে ও যার জবাব দিতে হয় তার জন্য; আর উপার্জনকারীদের নাম দেওয়া হয়েছে 'আন-নাস', মানুষ — তাদের কোনো একটি দল নয়, এবং অন্য কেউও নয়। 'আইদি' অর্থাৎ হাত, সেখানেই কাজগুলো আসলে করা হয়।"
          },
          {
            "en": "The Quran works this idiom in more than one direction. Earlier in this same surah, 30:36 says that when evil afflicts people bima qaddamat aydihim, for what their hands have sent forward, they at once despair. 42:30 states the principle at its widest: whatever strikes you of disaster is for what your hands have earned, and He pardons much. The same organ appears in each, and each time the sentence turns the reader toward his own.",
            "bn": "কুরআন এই বাগ্‌ধারাটিকে একাধিক দিকে খাটায়। এই সূরারই আগের অংশে, 30:36 আয়াত বলে, মানুষের উপর যখন বিপদ আসে 'বিমা কাদ্দামাত আইদীহিম' — তাদের হাত যা আগে পাঠিয়েছে তার কারণে — তখনই তারা হতাশ হয়ে পড়ে। 42:30 আয়াত নীতিটিকে সবচেয়ে ব্যাপকভাবে বলে: তোমাদের উপর যে বিপদই আসে তা তোমাদের হাতের উপার্জনের কারণেই, আর তিনি অনেক কিছুই ক্ষমা করে দেন। প্রতিটিতেই একই অঙ্গটি আসে, আর প্রতিবারই বাক্যটি পাঠককে তার নিজের হাতের দিকে ফেরায়।"
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
            "bn": "এরপর উদ্দেশ্য: লিইউযীকাহুম বা'দাল্লাযী আমিলু — যাতে তিনি তাদের কৃতকর্মের কিছু অংশের স্বাদ তাদের চাখান। এই বাক্যাংশে রহমতটি ধরে রেখেছে দুটি শব্দ। 'ইউযীক' মানে স্বাদ চাখানো, আর স্বাদ হলো এমন সামান্য পরিমাণ যা ভোগ করানোর জন্য নয়, জানানোর জন্য দেওয়া হয়। 'বা'দ' মানে অংশ — গোটাটা নয়। জলে-স্থলে যা ভেসে উঠেছে তা, আয়াতের নিজের হিসাবেই, যা উপার্জিত হয়েছিল তার চেয়ে কম; আর 42:30 আয়াত বাকিটার কথা বলে অন্য দিক থেকে: তিনি অনেক কিছুই ক্ষমা করেন।"
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
            "bn": "আয়াতটি শেষ হয় 'লাআল্লাহুম ইয়ারজিউন' দিয়ে — যাতে তারা ফিরে আসে। ইবনে কাসীর এই ফিরে আসাকে ব্যাখ্যা করেন অবাধ্যতা থেকে ফিরে আসা হিসেবে। 7:168 আয়াত একই কারণে একই সমাপ্তি ব্যবহার করে: আমি তাদের ভালো ও মন্দ দিয়ে পরীক্ষা করেছি, যাতে তারা ফিরে আসে। আর ঠিক এর পরের আয়াত 30:42 পাঠককে সাক্ষীতে পরিণত করে — পৃথিবীতে ভ্রমণ করো এবং দেখো, আগের লোকদের পরিণাম কী হয়েছিল; তাদের অধিকাংশই ছিল মুশরিক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror Before a Survey",
          "bn": "জরিপের আগে আয়না"
        },
        "p": [
          {
            "en": "The natural way to use a verse like this is as a description of other people, and the wording quietly blocks that. 2:11 records the reply of those told not to cause corruption in the earth: we are only reformers. 2:12 answers them. Since the earners here are simply an-nas, the honest first application is inward: which of the disorders I complain about has anything of my own hands in it, and what would returning actually cost me this month?",
            "bn": "এ ধরনের আয়াতকে ব্যবহার করার স্বাভাবিক উপায় হলো একে অন্য মানুষের বর্ণনা বানানো, আর শব্দচয়নই নীরবে সেই পথ বন্ধ করে দেয়। 2:11 আয়াত তাদের জবাব লিপিবদ্ধ করে যাদের বলা হয়েছিল যমীনে বিপর্যয় সৃষ্টি করো না: আমরা তো কেবল সংশোধনকারী। 2:12 আয়াত তাদের জবাব দেয়। যেহেতু এখানে উপার্জনকারীরা কেবল 'আন-নাস', তাই সৎ প্রথম প্রয়োগটি ভেতরের দিকে: আমি যেসব বিশৃঙ্খলা নিয়ে অভিযোগ করি তার কোনটিতে আমার নিজের হাতের কিছু আছে, আর এই মাসে ফিরে আসতে আমার আসলে কী খরচ হবে?"
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
          "bn": "বাতাসের মধ্যে এক নিদর্শন"
        },
        "p": [
          {
            "en": "The verse opens the way a whole run of verses in this surah open: wa-min ayatihi, and of His signs. at-Tabari reads ayat here as His evidences and proofs of His oneness, that He alone is the God of everything. as-Sa'di widens it: the wind is among the proofs that point to His mercy, to His raising of the dead, and to His being the only God worthy of worship. The sign chosen is not a mountain or a star but moving air, something no one sees and everyone feels.",
            "bn": "আয়াতটি শুরু হয় ঠিক সেভাবে, যেভাবে এই সূরার পর পর কয়েকটি আয়াত শুরু হয়েছে, ওয়া মিন আয়াতিহি, আর তাঁর নিদর্শনসমূহের মধ্যে। তাবারী এখানে আয়াত শব্দের অর্থ করেন তাঁর একত্বের প্রমাণ ও দলিল, যে তিনিই সবকিছুর একমাত্র ইলাহ। সাদী অর্থটাকে আরও বিস্তৃত করেন। বাতাস সেই প্রমাণগুলোর একটি, যা ইঙ্গিত করে তাঁর রহমতের দিকে, মৃতকে তাঁর জীবিত করার দিকে, আর তিনিই যে একমাত্র ইবাদতের যোগ্য তার দিকে। নিদর্শন হিসেবে বেছে নেওয়া হয়েছে পাহাড় বা তারা নয়, বরং চলমান বাতাস, যা কেউ দেখে না অথচ সবাই টের পায়।"
          },
          {
            "en": "What follows is a single act of Allah unfolded into a chain of mercies. He sends the winds; the winds herald rain; the rain is a mercy you are made to taste; ships run on that same wind; trade and livelihood travel with the ships; and the sentence closes on gratitude. One thing you cannot hold is traced outward until it touches your food, your work and your sea routes. The reader is asked to follow the chain link by link and see one Hand behind all of it.",
            "bn": "এরপর যা আসে, তা আল্লাহর একটি কাজ যা খুলে যায় রহমতের এক শৃঙ্খলে। তিনি বাতাস পাঠান, বাতাস বৃষ্টির সুসংবাদ দেয়, সেই বৃষ্টি এমন রহমত যা আপনাকে আস্বাদন করানো হয়, একই বাতাসে চলে নৌযান, নৌযানের সঙ্গে চলে ব্যবসা আর জীবিকা, আর বাক্যটি শেষ হয় শুকরিয়ায়। যাকে ধরা যায় না, তাকে টেনে নিয়ে যাওয়া হয় আপনার খাবার, আপনার কাজ আর আপনার সমুদ্রপথ পর্যন্ত। পাঠককে বলা হচ্ছে শৃঙ্খলটা ধাপে ধাপে অনুসরণ করতে, আর এর পেছনে একটিমাত্র হাত দেখতে।"
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
            "bn": "মুবাশশিরাত, কাজের প্রথম শব্দ, বাতাসকে পাঠানো হয় সুসংবাদদাতা হিসেবে। তাবারী মুজাহিদের সূত্রে সুসংবাদকে সোজা করে পড়েন বৃষ্টি বলে, তাই বাতাস পাঠানো হয় বৃষ্টি আর রহমতের খবর বয়ে। কুরতুবী বলে দেন বাতাস কেন আদৌ সুসংবাদ হতে পারে, কারণ সে আগমনবার্তা নিয়ে আসে যেহেতু সে বৃষ্টির আগে আগে আসে, যে বৃষ্টির ঘোষণা সে দেয় তার আগেই। খবরবাহক নিজে দান নয়। সে কেবল নিদর্শন যে দান পথে রয়েছে।"
          },
          {
            "en": "al-Muyassar and as-Sa'di describe how the wind carries its message: it stirs up the clouds and gathers them, and at that the hearts of people rejoice before a single drop has fallen. as-Sa'di's phrase is that souls take glad tidings from it before its descent. The good news, in other words, is built into the waiting. You are given the hope first, on purpose, so that the mercy meets a heart already turned upward and expectant rather than a heart caught off guard.",
            "bn": "মুয়াসসার আর সাদী বলেন বাতাস কীভাবে তার খবর বহন করে। সে মেঘ জাগিয়ে তোলে আর তাদের একত্র করে, আর তাতেই মানুষের মন এক ফোঁটা পড়ার আগেই আনন্দে ভরে ওঠে। সাদীর কথায়, তা নামার আগেই মন তা থেকে সুসংবাদ নেয়। অর্থাৎ সুসংবাদটা অপেক্ষার ভেতরেই গেঁথে দেওয়া। আশাটা আপনাকে আগে দেওয়া হয়, ইচ্ছে করেই, যাতে রহমত এসে পায় এমন এক হৃদয় যা আগেই উপরে তাকিয়ে প্রতীক্ষায় আছে, হঠাৎ অপ্রস্তুত অবস্থায় ধরা পড়া নয়।"
          },
          {
            "en": "There is a mercy in that order worth pausing on. Allah could have sent the rain without warning. Instead He sends a messenger ahead of it, a shift in the air that the farmer and the traveller learn to read. The gift is announced before it arrives. For a people taught throughout this surah to read His signs, the wind is a daily rehearsal: notice the herald, trust the promise, and let the hope itself be counted among the kindnesses.",
            "bn": "এই ক্রম নিয়ে একটু থামা যায়, এর মধ্যে এক রহমত আছে। আল্লাহ বিনা খবরে বৃষ্টি পাঠাতে পারতেন। তার বদলে তিনি তার আগে একজন খবরবাহক পাঠান, বাতাসের এক পরিবর্তন যা চাষি আর পথিক পড়তে শেখে। দান আসার আগেই তার ঘোষণা হয়ে যায়। যে জাতিকে এই সূরা জুড়ে তাঁর নিদর্শন পড়তে শেখানো হচ্ছে, তাদের কাছে বাতাস রোজকার এক অনুশীলন। খবরবাহককে খেয়াল করো, প্রতিশ্রুতিতে ভরসা রাখো, আর আশাটুকুকেও গুনে নাও দয়ার তালিকায়।"
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
            "bn": "দ্বিতীয় উদ্দেশ্য, যাতে তিনি তোমাদের তাঁর রহমত আস্বাদন করান। এখানে প্রত্যেক তাফসীরকার রহমত বলতে বৃষ্টিকেই বোঝেন। তাবারী আর ইবন কাসীর এর ব্যাখ্যা দেন, সেই বৃষ্টি যা তিনি নামান, যা দিয়ে তিনি জমিন আর বান্দাদের জীবিত করেন। যে জমিন মরে ছিল তা আবার সবুজ হয়, যে মানুষ অপেক্ষায় ছিল তারা খাবার পায়। চমকপ্রদ হল ক্রিয়াটা। আল্লাহ বলেন না যে তিনি তাঁর রহমত দিয়ে দেন, বলেন তিনি তা আস্বাদন করান, আর আস্বাদন তো আংশিক, তাৎক্ষণিক, ব্যক্তিগত, বড় কিছুর প্রথম ছোঁয়া জিভের ডগায়।"
          },
          {
            "en": "The wording is min rahmatihi, of His mercy, a portion and not the whole. as-Sa'di draws the lesson out: you are made to taste enough of His mercy to recognise what it is, that His mercy is the thing which rescues His servants and draws their provision to them. The taste is meant to teach. A sip of rain on dry ground is a small sign pointing at an ocean, and the one who tastes it rightly reads past the water to the One who sent it down.",
            "bn": "শব্দটা মিন রহমাতিহি, তাঁর রহমতের কিছু অংশ, গোটাটা নয়। সাদী শিক্ষাটা টেনে বের করেন। আপনাকে তাঁর রহমতের ততটুকু আস্বাদন করানো হয় যাতে আপনি চিনতে পারেন তা আসলে কী, যে তাঁর রহমতই বান্দাদের রক্ষা করে আর তাদের কাছে রিযিক টেনে আনে। আস্বাদনটা শেখানোর জন্য। শুকনো মাটিতে এক চুমুক বৃষ্টি এক ছোট নিদর্শন, যা দেখায় এক সাগরের দিকে, আর যে ঠিকভাবে তা আস্বাদন করে সে পানি পেরিয়ে পড়ে নেয় সেই একমাত্র সত্তাকে, যিনি তা নামিয়েছেন।"
          },
          {
            "en": "as-Sa'di takes the taste one step further, toward action. Having tasted that His mercy is what saves and supplies, he says, the servant begins to long to do more of the righteous deeds that open the treasuries of that mercy. The rain, then, is not only food for the body. It is an argument. It shows a man in a single season what Allah's mercy does, so that he wants to live in a way that keeps drawing on it.",
            "bn": "সাদী আস্বাদনকে আরও এক ধাপ এগিয়ে নেন, আমলের দিকে। তাঁর রহমতই যে রক্ষা করে আর রিযিক দেয়, তা আস্বাদন করার পর, তিনি বলেন, বান্দার ভেতর সেই নেক আমলগুলো বেশি বেশি করার আগ্রহ জাগে যা সেই রহমতের ভান্ডার খুলে দেয়। তাহলে বৃষ্টি কেবল দেহের খাবার নয়। এটি এক যুক্তি। একটি মৌসুমেই তা মানুষকে দেখিয়ে দেয় আল্লাহর রহমত কী করে, যাতে সে এমনভাবে বাঁচতে চায় যা সেই রহমত থেকে বারবার টেনে নেয়।"
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
            "bn": "তৃতীয় উদ্দেশ্য স্থল ছেড়ে সমুদ্রে যায়, যাতে তাঁর হুকুমে নৌযান চলে। ইবন কাসীর স্পষ্ট কৌশলটা উল্লেখ করেন, তারপর তার চালিকাশক্তির নাম দেন। নৌযান সাগরে চলে, আর তার চলা তো কেবল বাতাসে। যে বাতাস মেঘ তাড়িয়ে এনেছিল, সে-ই এখন পাল ভরায়। একবার পাঠানো একটি কারণ একই সঙ্গে পৌঁছে যায় চাষির ক্ষেতে আর বণিকের জাহাজে। আয়াতটি ক্রমাগত বাড়িয়ে চলে, বাতাস আসলে কাদের সেবা করে।"
          },
          {
            "en": "al-Qurtubi asks why the verse adds at His command, and his answer keeps the wind from ever becoming an independent power. The winds blow, he says, but are not always favourable, so ships must be anchored and held in place by effort; and sometimes a gale rises and sinks them, and that too is by His command. The sentence that promises the wind as a servant will not let you forget that the servant obeys only Allah. The breeze that carries you and the storm that could drown you answer to one word.",
            "bn": "কুরতুবী প্রশ্ন করেন, আয়াত কেন জুড়ে দেয় তাঁর হুকুমে, আর তাঁর জবাব বাতাসকে কখনো স্বাধীন শক্তি হতে দেয় না। বাতাস বয়, তিনি বলেন, কিন্তু সব সময় অনুকূল নয়, তাই নৌযান নোঙর করে বেঁধে রাখতে হয় কষ্ট করে, আর কখনো ঝড় ওঠে আর তা ডুবিয়ে দেয়, সেটাও তাঁর হুকুমে। যে বাক্য বাতাসকে সেবক হিসেবে পেশ করে, সেটাই আপনাকে ভুলতে দেয় না যে সেবক কেবল আল্লাহরই হুকুম মানে। যে বাতাস আপনাকে বয়ে নেয় আর যে ঝড় আপনাকে ডোবাতে পারে, দুটোই একই কথার অধীন।"
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
            "bn": "চতুর্থ উদ্দেশ্য মানুষের পরিশ্রম, যাতে তোমরা তাঁর অনুগ্রহ সন্ধান কর। ইবন কাসীর এখানে ফদল বলতে বোঝেন ব্যবসার মাধ্যমে রিযিক, জীবিকা নির্বাহ, আর এক অঞ্চল থেকে আরেক অঞ্চলে, এক দেশ থেকে আরেক দেশে সফর। বাগাভী একে সীমিত করেন সাগরপথে ব্যবসায় রিযিক খোঁজায়, তাবারী একে বিস্তৃত করেন সেই রিযিক আর জীবিকায় যা তিনি তোমাদের মধ্যে ভাগ করে দিয়েছেন। যে বাতাস বৃষ্টির খবর দিল আর নৌযান চালাল, সে-ই এখন ব্যবসার ভিত জোগায়। যা শুরু হয় আবহাওয়া হিসেবে, তা শেষ হয় একজন মানুষের আয়ে।"
          },
          {
            "en": "Notice the word the verse chooses for the human part: tabtaghu, you seek, you go out and look for it. Allah sends the wind; the mercy and the ships are His doing, stated as His purposes. But the bounty is something you are sent out to pursue. The effort is real and the verse honours it. Yet it is called of His bounty, so even the striving is set inside a gift. You work for your provision, and what you work within was sent to you before you lifted a hand.",
            "bn": "খেয়াল করুন আয়াত মানুষের অংশের জন্য কোন শব্দ বেছে নেয়, তাবতাগূ, তোমরা সন্ধান কর, বেরিয়ে পড় আর খোঁজ। আল্লাহ বাতাস পাঠান, রহমত আর নৌযান তাঁরই কাজ, তাঁর উদ্দেশ্য হিসেবে বলা। কিন্তু অনুগ্রহ এমন জিনিস যার পেছনে আপনাকে পাঠানো হয়। পরিশ্রমটা সত্যি, আর আয়াত তাকে মর্যাদা দেয়। তবু তাকে বলা হয় তাঁর অনুগ্রহ, তাই চেষ্টাটুকুও বসানো থাকে এক দানের ভেতরে। আপনি রিযিকের জন্য খাটেন, আর যার ভেতরে থেকে খাটেন তা হাত তোলার আগেই আপনার কাছে পাঠানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "From Certain to Perhaps",
          "bn": "নিশ্চিত থেকে হয়তো"
        },
        "p": [
          {
            "en": "The sentence changes gear at the end. Three purposes are stated with a plain lam of purpose: to let you taste, so the ships may sail, so you may seek. The last is different: la'allakum tashkurun, that perhaps you may be grateful. The mercies are certain; they are what the wind is for. Gratitude is not stated as a certainty but held out as the hoped-for response. Allah guarantees the gift and leaves the thanks open, because thanks that could not be withheld would not be thanks at all.",
            "bn": "বাক্যটি শেষে গিয়ে গিয়ার বদলায়। তিনটি উদ্দেশ্য বলা হয়েছে সাধারণ কারণবাচক লাম দিয়ে, আস্বাদন করাতে, নৌযান চালাতে, অনুগ্রহ খুঁজতে। শেষটি আলাদা, লাআল্লাকুম তাশকুরূন, যাতে হয়তো তোমরা কৃতজ্ঞ হও। রহমতগুলো নিশ্চিত, বাতাস সেগুলোর জন্যই। শুকরিয়াকে নিশ্চিত হিসেবে বলা হয়নি, বরং প্রত্যাশিত জবাব হিসেবে বাড়িয়ে ধরা হয়েছে। আল্লাহ দানের নিশ্চয়তা দেন আর শুকরিয়াকে খোলা রাখেন, কারণ যে শুকরিয়া আটকে রাখা যায় না তা তো আর শুকরিয়াই নয়।"
          },
          {
            "en": "as-Sa'di reads this closing clause as the whole point of the favours. The intent behind the blessings, he writes, is that they be met with the gratitude of Allah, so that He may increase them for you and keep them upon you. Ibn Kathir fills in what there is to thank for: the favours of Allah, outward and inward, that can be neither counted nor enumerated. The rain you can see; the thousand hidden mercies you cannot. Gratitude is simply the honest reading of a life held up by both.",
            "bn": "সাদী এই শেষ অংশটাকে পড়েন গোটা নিয়ামতের আসল উদ্দেশ্য হিসেবে। নিয়ামতের পেছনের মকসুদ, তিনি লেখেন, এই যে তা আল্লাহর শুকরিয়া দিয়ে বরণ করা হোক, যাতে তিনি তা তোমাদের জন্য বাড়িয়ে দেন আর তোমাদের উপর টিকিয়ে রাখেন। ইবন কাসীর বলে দেন কীসের শুকরিয়া, আল্লাহর নিয়ামত, প্রকাশ্য আর গোপন, যা গোনাও যায় না হিসাবও করা যায় না। বৃষ্টি আপনি দেখেন, হাজারো গোপন রহমত আপনি দেখেন না। শুকরিয়া তো কেবল এক জীবনের সৎ পাঠ, যা দুই রকম রহমতেই ধরে রাখা।"
          },
          {
            "en": "as-Sa'di also names the other road. To meet a favour with ingratitude and disobedience, he says, is the state of whoever turns Allah's blessing into a trial and his gift into something he is now liable to lose, exposed to its removal. The warning is quiet but exact. The wind that was sent as mercy does not stay mercy in a heart that refuses to read it. What the verse offers as a gift can be forfeited by whoever will not say thank you.",
            "bn": "সাদী অন্য পথটিরও নাম নেন। নিয়ামতকে নাফরমানি আর অকৃতজ্ঞতা দিয়ে বরণ করা, তিনি বলেন, তার হাল যে আল্লাহর নিয়ামতকে বানিয়ে ফেলেছে বিপদ আর তাঁর দানকে বানিয়েছে এমন কিছু যা এখন সে হারানোর মুখে, তা সরে যাওয়ার সামনে উন্মুক্ত। সতর্কবাণীটা নিচু স্বরে, তবু নিখুঁত। যে বাতাস রহমত হয়ে পাঠানো হয়েছিল, সে রহমত হয়ে থাকে না এমন হৃদয়ে যে তা পড়তে অস্বীকার করে। আয়াত যা দান হিসেবে দেয়, যে শুকরিয়া জানাবে না সে তা হারাতে পারে।"
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
            "bn": "একটি সহীহ হাদীস এই আয়াতকে জিভের এক পরীক্ষা বানিয়ে দেয়। বুখারী জায়েদ ইবনে খালিদ আল-জুহানী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ হুদায়বিয়ায় এক বৃষ্টির রাতের পর ফজরের নামাজ পড়ালেন, তারপর ফিরে জিজ্ঞেস করলেন, তোমরা কি জান তোমাদের রব কী বলেছেন? তিনি জানালেন আল্লাহ বলেছেন সে সকালে তাঁর বান্দাদের মধ্যে কেউ মুমিন আর কেউ কাফির। যে বলল, আল্লাহর অনুগ্রহ ও রহমতে আমাদের বৃষ্টি দেওয়া হয়েছে, সে আমার উপর ঈমান আনল আর তারকায় কুফরি করল, আর যে বলল, অমুক তারকার কারণে, সে আমার উপর কুফরি করল আর তারকায় ঈমান আনল।"
          },
          {
            "en": "The believer's words in the hadith are the verse's own words put back on human lips. The rain in this verse is His mercy, and the livelihood it feeds is His bounty; the man Allah calls a believer attributes the rain to exactly that, bi-fadlillahi wa-rahmatihi, the bounty of Allah and His mercy. The difference between faith and its opposite, here, is not whether the rain fell. It is who you name when it does. Gratitude, the verse's final purpose, begins the moment you credit the right Giver.",
            "bn": "হাদীসে মুমিনের কথাগুলো আয়াতেরই শব্দ, মানুষের মুখে ফিরিয়ে দেওয়া। এ আয়াতে বৃষ্টি তাঁর রহমত, আর তা যে জীবিকা জোগায় তা তাঁর অনুগ্রহ। আল্লাহ যাকে মুমিন বলেন সে বৃষ্টিকে ঠিক তার সঙ্গেই জুড়ে দেয়, বিফাদলিল্লাহি ওয়া রহমাতিহি, আল্লাহর অনুগ্রহ ও তাঁর রহমতে। ঈমান আর তার উল্টো জিনিসের তফাত এখানে বৃষ্টি পড়ল কি পড়ল না, তা নয়। তফাত হল, পড়লে আপনি কার নাম নেন। শুকরিয়া, আয়াতের শেষ উদ্দেশ্য, শুরু হয় ঠিক সেই মুহূর্তে যখন আপনি সঠিক দাতাকে কৃতিত্ব দেন।"
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
            "bn": "একটু পিছিয়ে দাঁড়ালে দেখা যায় আয়াতটি একটিমাত্র বাক্য, অথচ কত কাজ করছে। একটি জিনিস পাঠানো হয়, বাতাস, আর তা থেকে আল্লাহ টেনে বের করেন খবরবাহক, বৃষ্টি, পুনর্জীবিত জমিন, চলমান নৌবহর, ব্যবসার পথ আর জীবিকা। আমরা যে তাফসীরকারদের অনুসরণ করলাম, প্রত্যেকে একটি কড়া তুলে আলোয় ধরেন, একসঙ্গে পড়লে তারা দেখায় একটি কারণ কীভাবে ছড়িয়ে পড়ে মানুষের প্রায় সব প্রয়োজনে। মুজিজা কেবল বৃষ্টি নয়। মুজিজা এই যে এত কিছু ঝুলে আছে এত হালকা একটা জিনিসের উপর।"
          },
          {
            "en": "And the whole chain is built to end somewhere. Three of its clauses describe what the wind does for you; the last describes what is hoped from you. Everything flows toward that quiet perhaps you will be grateful. The verse is not merely explaining the weather. It is teaching a way to stand inside a world of gifts, with the eyes open to where they come from and the tongue ready to name the One who sends them.",
            "bn": "আর গোটা শৃঙ্খলটা গড়া হয়েছে কোথাও গিয়ে শেষ হওয়ার জন্য। এর তিনটি অংশ বলে বাতাস আপনার জন্য কী করে, শেষটি বলে আপনার কাছ থেকে কী আশা করা হয়। সবকিছু বয়ে যায় সেই নিচু স্বরের হয়তো তোমরা কৃতজ্ঞ হবে, তার দিকে। আয়াত শুধু আবহাওয়ার ব্যাখ্যা দিচ্ছে না। সে শেখাচ্ছে দানে ভরা এক জগতে কীভাবে দাঁড়াতে হয়, চোখ খোলা রেখে দান কোথা থেকে আসে তার দিকে, আর জিভ তৈরি রেখে একমাত্র দাতার নাম নিতে।"
          },
          {
            "en": "The hardest thing the verse asks is also the smallest. Not to perform some great act, but to stop treating the wind and the rain as background. The farmer who watches the sky, the trader who waits for a fair breeze, the traveller fed by a harvest a thousand miles off, are all living on one mercy they did not make. To notice that, and to say so, is the whole of what is asked. The gap left at the end of the verse is closed one grateful glance at a time.",
            "bn": "আয়াত যা চায় তার মধ্যে সবচেয়ে কঠিনটাই আবার সবচেয়ে ছোট। কোনো বিরাট কাজ নয়, কেবল বাতাস আর বৃষ্টিকে আর পেছনের দৃশ্য হিসেবে না দেখা। যে চাষি আকাশের দিকে তাকায়, যে বণিক অনুকূল বাতাসের অপেক্ষা করে, যে পথিক হাজার মাইল দূরের ফসলে পেট ভরায়, সবাই বেঁচে আছে এমন এক রহমতে যা তারা বানায়নি। সেটা খেয়াল করা, আর মুখে বলা, এই তো পুরো চাওয়া। আয়াতের শেষে রেখে দেওয়া ফাঁকটা পূরণ হয় একটি একটি করে কৃতজ্ঞ দৃষ্টিতে।"
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
          "bn": "সূরা আর-রূমের শেষ আয়াত"
        },
        "p": [
          {
            "en": "Surah ar-Rum has sixty verses, and this is the sixtieth — the surah's closing word. It opens no new subject: the fa fastened to fasbir ties it to what has just been said. 30:58 states that every kind of example has been set out in this Quran, and that if you brought them a sign the disbelievers would say you are only falsifiers. 30:59 follows: thus does Allah seal the hearts of those who do not know.",
            "bn": "সূরা আর-রূমে ষাটটি আয়াত, আর এটি ষাটতম — সূরার সমাপ্তির বাক্য। এটি নতুন কোনো প্রসঙ্গ শুরু করে না; 'ফাসবির'-এর সামনে যুক্ত 'ফা' একে ঠিক আগের কথার সঙ্গে বেঁধে দেয়। 30:58 আয়াত বলে, এই কুরআনে মানুষের জন্য সব রকম দৃষ্টান্ত পেশ করা হয়েছে; আর তুমি যদি তাদের কাছে কোনো নিদর্শন নিয়েও আসো, কাফিররা তবুও বলবে তোমরা মিথ্যা বলা ছাড়া কিছুই করছ না। এরপর আসে 30:59: এভাবেই আল্লাহ তাদের হৃদয়ে মোহর মেরে দেন যারা জানে না।"
          },
          {
            "en": "So patience is prescribed here as the answer to a refusal that has already hardened, not to an argument still being won. The command is a single word, fasbir, addressed to the Prophet ﷺ. What the surah hands him at the very end is not a fresh proof to put in front of them. It is an instruction about how to stand while they go on declining the proofs that have already been given.",
            "bn": "সুতরাং এখানে ধৈর্যের নির্দেশ দেওয়া হয়েছে এমন এক প্রত্যাখ্যানের জবাব হিসেবে যা ইতিমধ্যেই জমাট বেঁধে গেছে — চলমান কোনো তর্কের জবাব হিসেবে নয়। নির্দেশটি একটিমাত্র শব্দ, 'ফাসবির', আর তা নবী ﷺ-এর উদ্দেশে। সূরাটি একেবারে শেষে তাঁর হাতে নতুন কোনো প্রমাণ তুলে দিচ্ছে না, যা তিনি তাদের সামনে রাখবেন। বরং দিচ্ছে একটি নির্দেশ — ইতিমধ্যে দেওয়া প্রমাণগুলো তারা যখন ফিরিয়ে দিচ্ছে, তখন তাঁকে কীভাবে দাঁড়িয়ে থাকতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise at Both Ends",
          "bn": "দুই প্রান্তে একটি ওয়াদা"
        },
        "p": [
          {
            "en": "The surah opened on a defeat. 30:2-3 report that the Byzantines have been defeated in the nearest land and that they, after their defeat, will overcome; 30:4-5 add that on that day the believers will rejoice in the victory of Allah. Then 30:6 puts a seal on it: the promise of Allah; Allah does not fail in His promise; but most of the people do not know.",
            "bn": "সূরাটি শুরু হয়েছিল একটি পরাজয় দিয়ে। 30:2-3 আয়াত জানায়, রোমকরা নিকটবর্তী ভূখণ্ডে পরাজিত হয়েছে, আর তারা এই পরাজয়ের পর বিজয়ী হবে; 30:4-5 আয়াত যোগ করে, সেদিন মুমিনরা আল্লাহর সাহায্যে আনন্দিত হবে। এরপর 30:6 আয়াত তাতে সিলমোহর বসায়: এ আল্লাহর ওয়াদা; আল্লাহ তাঁর ওয়াদা ভঙ্গ করেন না; কিন্তু অধিকাংশ মানুষ তা জানে না।"
          },
          {
            "en": "Fifty-four verses later the surah closes on the same two words. Inna wa'da Allahi haqq — indeed, the promise of Allah is truth. The opening said He does not break it; the closing says it is real. And both sentences end by naming a deficiency in the audience rather than any doubt about the promise: at 30:6 most of the people do not know, and here, those who do not attain certainty.",
            "bn": "চুয়ান্নটি আয়াত পরে সূরাটি শেষ হয় ঠিক সেই দুটি শব্দ দিয়েই। ইন্না ওয়াদাল্লাহি হাক্ক — নিশ্চয়ই আল্লাহর ওয়াদা সত্য। শুরুতে বলা হয়েছিল, তিনি তা ভঙ্গ করেন না; শেষে বলা হচ্ছে, তা বাস্তব। আর দুটি বাক্যই শেষ হয় শ্রোতাদের একটি ঘাটতির নাম নিয়ে, ওয়াদা সম্পর্কে কোনো সংশয় দিয়ে নয়: 30:6-এ, অধিকাংশ মানুষ জানে না; আর এখানে, যারা দৃঢ় বিশ্বাসে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Makes You Light",
          "bn": "যে ক্রিয়া আপনাকে হালকা করে"
        },
        "p": [
          {
            "en": "Wa la yastakhiffannaka. The verb is built on khiffa, lightness. Istakhaffa is to find a thing light, to treat it as weightless, and so to make a person flighty — to move him off his own gravity. The heavy nun of emphasis is fastened to its end, the form Arabic keeps for its most forceful prohibitions. Grammatically the prohibition is addressed to them, while the one it protects is him.",
            "bn": "ওয়া লা ইয়াসতাখিফফান্নাকা। ক্রিয়াপদটি গড়া হয়েছে 'খিফ্‌ফা' অর্থাৎ হালকাত্ব থেকে। 'ইসতাখাফ্‌ফা' মানে কোনো কিছুকে হালকা মনে করা, ওজনহীন হিসেবে দেখা, আর সেখান থেকে — কাউকে চঞ্চল করে তোলা, তাকে তার নিজের ভারকেন্দ্র থেকে সরিয়ে দেওয়া। এর শেষে যুক্ত হয়েছে জোর দেওয়ার ভারী 'নূন', যে গঠনটি আরবি তার সবচেয়ে কঠোর নিষেধাজ্ঞাগুলোর জন্য রেখে দেয়। ব্যাকরণগতভাবে নিষেধটি তাদের উদ্দেশে, অথচ যাকে রক্ষা করা হচ্ছে তিনি তিনিই।"
          },
          {
            "en": "The same verb is used of Fir'awn at 43:54: he made his people light, and they obeyed him — a crowd rendered weightless enough to be carried along. That is the danger being named. The verse does not warn the Prophet ﷺ against their arguments; it warns him against their weightlessness, which is catching. Mockery, restlessness and shrugging work on a person along a different channel from evidence, and they need a different defence.",
            "bn": "একই ক্রিয়াপদ ফিরআউনের ক্ষেত্রে ব্যবহৃত হয়েছে 43:54 আয়াতে: সে তার সম্প্রদায়কে হালকা করে ফেলল, আর তারা তার আনুগত্য করল — এমন এক জনতা, যাকে ভাসিয়ে নিয়ে যাওয়ার মতো ওজনহীন করে ফেলা হয়েছে। এই বিপদটিরই নাম নেওয়া হচ্ছে। আয়াতটি নবী ﷺ-কে তাদের যুক্তি থেকে সাবধান করছে না; সাবধান করছে তাদের ওজনহীনতা থেকে, যা সংক্রামক। উপহাস, অস্থিরতা আর কাঁধ ঝাঁকানো মানুষের ওপর কাজ করে প্রমাণের চেয়ে ভিন্ন পথে, আর তাদের জন্য প্রতিরোধও ভিন্ন রকম লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Without Certainty",
          "bn": "যাদের দৃঢ় বিশ্বাস নেই"
        },
        "p": [
          {
            "en": "They are not named here as deniers or as enemies. They are named by an absence: alladhina la yuqinun, those who do not attain certainty. Yaqin is knowledge that has come to rest, and its opposite is not necessarily loud rejection. It can be a permanent unsettledness — a person who never finishes deciding anything and cannot bear the company of someone who has. The description fits people who would deny being opponents at all.",
            "bn": "এখানে তাদের অস্বীকারকারী বা শত্রু বলে চেনানো হয়নি। চেনানো হয়েছে একটি অনুপস্থিতি দিয়ে: 'আল্লাযীনা লা ইউকিনূন' — যারা দৃঢ় বিশ্বাসে পৌঁছায় না। 'ইয়াকীন' হলো এমন জ্ঞান যা থিতু হয়ে বসেছে, আর তার বিপরীত সব সময় উচ্চকণ্ঠ অস্বীকার নয়। তা হতে পারে এক স্থায়ী অস্থিরতা — এমন মানুষ, যে কোনো কিছুর সিদ্ধান্তই শেষ করতে পারে না এবং যে সিদ্ধান্ত নিয়ে ফেলেছে তার সঙ্গও সহ্য করতে পারে না। বর্ণনাটি এমন মানুষদের সঙ্গেও মেলে, যারা নিজেদের বিরোধী বলতেই রাজি হবে না।"
          },
          {
            "en": "Elsewhere the two words of this verse appear together as qualifications. 32:24 says: and We made from among them leaders guiding by Our command when they were patient, and they were certain of Our signs. Patience and certainty together produced guides for other people. Here the pair is split: one of them is commanded to the Prophet ﷺ, and the lack of the other is what he is told not to catch.",
            "bn": "অন্যত্র এই আয়াতের দুটি শব্দ একসঙ্গে আসে গুণ হিসেবে। 32:24 আয়াত বলে: আর আমি তাদের মধ্য থেকে নেতা বানিয়েছি, যারা আমার নির্দেশে পথ দেখাত — যখন তারা ধৈর্য ধরেছিল এবং আমার নিদর্শনগুলোতে দৃঢ় বিশ্বাস রাখত। ধৈর্য ও দৃঢ় বিশ্বাস একসঙ্গে মিলেই অন্য মানুষের পথপ্রদর্শক তৈরি করেছিল। এখানে জোড়াটি ভাগ হয়ে গেছে: একটির নির্দেশ দেওয়া হয়েছে নবী ﷺ-কে, আর অন্যটির অভাব যেন তাঁকে স্পর্শ না করে, সেই সতর্কতা দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ending a Surah on Sabr",
          "bn": "ধৈর্য দিয়ে সূরার সমাপ্তি"
        },
        "p": [
          {
            "en": "This is not the only surah that closes on the command. 10:109 ends Yunus with: follow what is revealed to you, and be patient until Allah judges, and He is the best of judges. 46:35 ends al-Ahqaf with: so be patient as were those of determination among the messengers, and do not be impatient for them. In each case the last thing said concerns the stretch of time between a promise and its arrival.",
            "bn": "এই একটি সূরাই এমন নির্দেশ দিয়ে শেষ হয় না। 10:109 আয়াত সূরা ইউনুসকে শেষ করে এভাবে: তোমার কাছে যা ওহী করা হয় তার অনুসরণ করো, আর ধৈর্য ধরো যতক্ষণ না আল্লাহ ফয়সালা করেন; তিনিই শ্রেষ্ঠ ফয়সালাকারী। 46:35 আয়াত সূরা আল-আহকাফকে শেষ করে: তুমি ধৈর্য ধরো যেমন ধৈর্য ধরেছিলেন দৃঢ়প্রতিজ্ঞ রাসূলগণ, আর তাদের ব্যাপারে তাড়াহুড়ো করো না। প্রতিটি ক্ষেত্রেই শেষ কথাটি সেই সময়টুকু নিয়ে, যা একটি ওয়াদা ও তার আগমনের মাঝখানে পড়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Through the Wait",
          "bn": "অপেক্ষার ভেতরে দাঁড়িয়ে থাকা"
        },
        "p": [
          {
            "en": "The verse gives no date. It says the promise is true and it says be patient, and it puts nothing at all between those two statements. That is the whole content of waiting: certainty about the outcome, no information about the schedule. Much of what wears believers down is supplying the missing date themselves and then being crushed by a deadline nobody gave them.",
            "bn": "আয়াতটি কোনো তারিখ দেয় না। এটি বলে ওয়াদা সত্য, আর বলে ধৈর্য ধরো — আর এই দুই বাক্যের মাঝখানে কিছুই রাখে না। অপেক্ষার পুরো বিষয়টিই এই: পরিণতি নিয়ে নিশ্চয়তা, আর সময়সূচি নিয়ে কোনো তথ্য নেই। মুমিনদের যা সবচেয়ে বেশি ক্ষইয়ে দেয়, তার অনেকটাই হলো অনুপস্থিত তারিখটি নিজে বানিয়ে নেওয়া, আর তারপর এমন এক সময়সীমার ভারে ভেঙে পড়া যা কখনো তাদের দেওয়াই হয়নি।"
          },
          {
            "en": "The practical test it offers is a question about who moves you. Not who out-argues you, which is rare, but whose sigh, whose amused look, whose casual asking whether any of this really matters leaves you lighter than you were an hour earlier. The verse says the exposure itself is the risk. And it prescribes weight in return: a promise known to be true, held onto until it is no longer needed, because it has arrived.",
            "bn": "আয়াতটি যে ব্যবহারিক পরীক্ষাটি দেয়, তা একটি প্রশ্ন: কে আপনাকে টলায়? কে আপনাকে তর্কে হারায় তা নয় — সেটা বিরল; বরং কার দীর্ঘশ্বাস, কার মজার দৃষ্টি, কার নির্লিপ্ত এই প্রশ্ন যে 'এসবের আদৌ কোনো মানে আছে কি' — আপনাকে এক ঘণ্টা আগের চেয়ে হালকা করে দিয়ে যায়। আয়াতটি বলছে, এই সংস্পর্শটাই ঝুঁকি। আর বিনিময়ে তা ওজনের ব্যবস্থা করে: এমন এক ওয়াদা যা সত্য বলে জানা, আর যা আঁকড়ে ধরে থাকতে হয় ততক্ষণ, যতক্ষণ না তা এসে পড়ায় আর ধরে থাকার প্রয়োজনই থাকে না।"
          }
        ]
      }
    ]
  }
});
