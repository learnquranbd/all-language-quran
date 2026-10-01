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
