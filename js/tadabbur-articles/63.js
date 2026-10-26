/**
 * Tadabbur long-form articles — surah 63.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "63:3": {
    "sections": [
      {
        "h": {
          "en": "Where the Pointer Points",
          "bn": "ইঙ্গিতটা কোন দিকে"
        },
        "p": [
          {
            "en": "The verse opens with dhalika, that, a word that points back to something already said, and the commentators differ on what it points to. At-Tabari reads it with the close of 63:2, it was evil that they were doing: these hypocrites took their oaths as a cover because they affirmed Allah and His Messenger and then disbelieved. The Muyassar, which comments on 63:2 and 63:3 together, joins them the same way. Their oaths were a screen against being held to account, and that was because they believed outwardly and then disbelieved inwardly.",
            "bn": "আয়াতের শুরু যালিকা শব্দে, অর্থাৎ 'ওটা'। শব্দটা আগে বলা কোনো কথার দিকে ইঙ্গিত করে। কোন কথার দিকে, তা নিয়ে তাফসীরকারদের মত আলাদা। তাবারী একে মেলান ৬৩:২ আয়াতের শেষ অংশের সঙ্গে, যেখানে বলা হয়েছে তারা যা করত তা কতই না মন্দ। তাঁর ব্যাখ্যায়, এই মুনাফিকরা শপথকে ঢাল বানিয়েছিল, কারণ তারা আল্লাহ ও তাঁর রাসূলকে সত্য বলে মেনে নিয়ে পরে কুফরি করেছিল। মুয়াসসার ৬৩:২ ও ৬৩:৩ আয়াতের তাফসীর একসঙ্গে করে এবং দুটোকে একইভাবে জোড়ে। তাদের শপথ ছিল জবাবদিহি থেকে বাঁচার আড়াল, আর তার কারণ, তারা বাইরে ঈমান এনে ভেতরে কুফরি করেছিল।"
          },
          {
            "en": "Ibn Kathir points the word elsewhere. In his reading, that is the hypocrisy itself: it was decreed for them because they returned from faith to disbelief and exchanged guidance for misguidance. As-Sa'di reads it as that which made hypocrisy look fair to them, and gives the cause as their not standing firm on faith. So one small word carries three readings: the reason for their evil conduct, the reason hypocrisy was decreed for them, and the reason it came to look attractive to them. The article keeps all three without choosing among them.",
            "bn": "ইবন কাসীর শব্দটাকে অন্য দিকে নেন। তাঁর ব্যাখ্যায় 'ওটা' মানে খোদ নিফাক। তাদের জন্য নিফাক নির্ধারিত হয়েছিল, কারণ তারা ঈমান থেকে কুফরের দিকে ফিরে গিয়েছিল আর হিদায়াতের বদলে গোমরাহি বেছে নিয়েছিল। সা'দীর মতে 'ওটা' হলো সেই জিনিস, যা নিফাককে তাদের চোখে সুন্দর করে তুলেছিল। কারণ হিসেবে তিনি বলেন, তারা ঈমানের উপর অটল থাকে না। ছোট্ট একটা শব্দে তাই তিনটি পাঠ: তাদের মন্দ আচরণের কারণ, তাদের জন্য নিফাক নির্ধারিত হওয়ার কারণ, আর নিফাক তাদের কাছে আকর্ষণীয় লাগার কারণ। এ লেখা তিনটিকেই রাখছে, কোনোটাকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith on the Tongue Only",
          "bn": "ঈমান শুধু মুখে"
        },
        "p": [
          {
            "en": "Amanu thumma kafaru: they believed, then they disbelieved. What kind of believing was it? Al-Qurtubi begins with a statement about the verse as a whole: this is Allah informing us that the hypocrite is a disbeliever. His first gloss follows. They affirmed with the tongue, then disbelieved with the heart. The Muyassar says the same in its own terms: they believed in the outward and disbelieved in the inward. On this reading the belief was a profession that the heart never held.",
            "bn": "আমানূ সুম্মা কাফারূ: তারা ঈমান আনল, তারপর কুফরি করল। কেমন ছিল সেই ঈমান? কুরতুবী শুরু করেন গোটা আয়াত সম্পর্কে একটা কথা দিয়ে: এখানে আল্লাহ জানিয়ে দিচ্ছেন যে মুনাফিক কাফির। তারপর আসে তাঁর প্রথম ব্যাখ্যা। তারা মুখে স্বীকার করেছিল, তারপর অন্তরে কুফরি করেছিল। মুয়াসসারও নিজের ভাষায় একই কথা বলে: তারা বাইরে ঈমান এনেছিল, আর ভেতরে কুফরি করেছিল। এই ব্যাখ্যা অনুযায়ী সেই ঈমান ছিল মুখের ঘোষণা মাত্র, অন্তর তা কখনো ধারণ করেনি।"
          },
          {
            "en": "At-Tabari closes his comment with Qatada, whom he quotes with a full chain. Qatada's words: they affirmed that there is no god but Allah and that Muhammad is the Messenger of Allah, while their hearts were rejecting it and refusing it. In Qatada's wording the rejection sits beside the affirmation, as a circumstance of it, rather than coming after it. The profession and the refusal ran together. The verse's then, on this account, does not have to mean a later season of doubt. It can mark the gap between what was said and what was held.",
            "bn": "তাবারী তাঁর আলোচনা শেষ করেন কাতাদার কথা দিয়ে, পুরো সনদসহ। কাতাদা বলেন: তারা স্বীকার করেছিল যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ আল্লাহর রাসূল, অথচ তাদের অন্তর তা অস্বীকার করছিল, মানতে রাজি হচ্ছিল না। কাতাদার কথায় অস্বীকারটা স্বীকারোক্তির পরে আসেনি, এসেছে তার সঙ্গে সঙ্গেই। মুখের স্বীকার আর মনের অস্বীকার চলছিল একসঙ্গে। তাহলে আয়াতের 'তারপর' মানে পরে কোনো এক সময় সন্দেহ জাগা, এমন হতেই হবে না। শব্দটা বোঝাতে পারে মুখের কথা আর মনের বিশ্বাসের মাঝের ফাঁক।"
          },
          {
            "en": "Al-Baghawi gives the gloss a setting. They believed: they affirmed with the tongue when they saw the believers. Then they disbelieved: when they were alone with the idolaters. In his reading the then marks a change of company, with a different face for each room. It fits the scene that opens the surah, in 63:1, where the hypocrites come to the Prophet ﷺ and say, we testify that you are the Messenger of Allah. Al-Baghawi then glosses the sealing as with disbelief, and the lost understanding as of faith.",
            "bn": "বাগাভী ব্যাখ্যাটাকে একটা পরিবেশের মধ্যে বসান। তারা ঈমান আনল মানে, মু'মিনদের দেখলে মুখে স্বীকার করত। তারপর কুফরি করল মানে, যখন মুশরিকদের সঙ্গে একান্তে মিলিত হতো। তাঁর ব্যাখ্যায় 'তারপর' বোঝায় সঙ্গী বদল, আর প্রতিটি মজলিসের জন্য আলাদা চেহারা। সূরার শুরুর দৃশ্যের সঙ্গে এটা মেলে। ৬৩:১ আয়াতে মুনাফিকরা নবী ﷺ-এর কাছে এসে বলে, আমরা সাক্ষ্য দিচ্ছি আপনি আল্লাহর রাসূল। এরপর বাগাভী মোহরের ব্যাখ্যা দেন কুফরের মোহর বলে, আর যা তারা বোঝে না তা হলো ঈমান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Faith Entered and Left",
          "bn": "ঈমানে ঢুকে বেরিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "Other wording in the sources takes believed more literally. Al-Qurtubi records, under it was said, that the verse came down about people who believed and then apostatized. Ibn Kathir speaks of their return from faith to disbelief. As-Sa'di says they do not stand firm on faith; rather, they believed and then disbelieved. At-Tabari's own gloss reads the same way: they affirmed the truth of Allah and His Messenger, then disbelieved through their doubt about it and their denial of it. Here there was an affirmation of some kind, and it gave way.",
            "bn": "উৎসগুলোর আরও কিছু ভাষ্য 'ঈমান আনল' কথাটাকে আরও আক্ষরিক অর্থে নেয়। কুরতুবী 'বলা হয়' বলে একটি মত উল্লেখ করেন: আয়াতটি নাজিল হয়েছিল এমন লোকদের ব্যাপারে, যারা ঈমান এনে পরে মুরতাদ হয়ে যায়। ইবন কাসীর বলেন, তারা ঈমান থেকে কুফরের দিকে ফিরে গিয়েছিল। সা'দী বলেন, তারা ঈমানের উপর অটল থাকে না, বরং ঈমান আনে, তারপর কুফরি করে। তাবারীর নিজের ব্যাখ্যাও একই সুরে: তারা আল্লাহ ও তাঁর রাসূলকে সত্য বলে মেনেছিল, তারপর সন্দেহ আর অস্বীকারের মধ্য দিয়ে কুফরি করেছিল। এখানে কোনো না কোনো স্বীকৃতি ছিল, পরে তা ভেঙে পড়ে।"
          },
          {
            "en": "So the sources hold two pictures. In the first, the faith was a mask from the start, worn before the believers and taken off away from them: al-Qurtubi's first gloss, the Muyassar, al-Baghawi and Qatada. In the second, a faith of some kind was entered and then left: al-Qurtubi's it was said, Ibn Kathir, as-Sa'di and at-Tabari's own wording. Al-Qurtubi is the one who sets both side by side. The article does not decide between them. Both arrive at the same next word in the verse, the sealing.",
            "bn": "উৎসগুলোতে তাই দুটি ছবি পাওয়া যায়। প্রথম ছবিতে ঈমান শুরু থেকেই একটা মুখোশ, মু'মিনদের সামনে পরা আর তাদের আড়ালে খুলে ফেলা। এ ছবি কুরতুবীর প্রথম ব্যাখ্যায়, মুয়াসসারে, বাগাভীতে আর কাতাদার কথায়। দ্বিতীয় ছবিতে কোনো এক রকমের ঈমানে মানুষ ঢুকেছিল, তারপর বেরিয়ে গেছে। এটা কুরতুবীর 'বলা হয়' অংশে, ইবন কাসীরে, সা'দীতে আর তাবারীর নিজের ভাষায়। দুটোকে পাশাপাশি রেখেছেন কুরতুবী। এ লেখা কোনো পক্ষে রায় দিচ্ছে না। দুই ব্যাখ্যাই গিয়ে পৌঁছায় আয়াতের পরের কথায়, অর্থাৎ মোহরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sealing in the Sources' Words",
          "bn": "মোহরের কথা তাফসীরের ভাষায়"
        },
        "p": [
          {
            "en": "Fa-tubi'a 'ala qulubihim: so their hearts were sealed. The verb is passive and the doer is not named in it. At-Tabari supplies him and the manner: Allah placed on their hearts a seal, with disbelief, against faith. He then says that he has explained in another place the description of the sealing of the heart, with its supporting evidence and the views of the scholars, and so does not repeat it here. This article follows his lead and does not go beyond the wording the commentators give on this verse.",
            "bn": "ফাতুবি'আ আলা কুলূবিহিম: ফলে তাদের অন্তরে মোহর লেগে গেল। ক্রিয়াটি কর্মবাচ্যে, কে মোহর লাগালেন তা এখানে বলা নেই। তাবারী সেটা খুলে বলেন, সঙ্গে মোহরের ধরনও: আল্লাহ তাদের অন্তরে কুফরের মোহর এঁটে দিলেন, যাতে ঈমান আর ঢুকতে না পারে। তারপর তিনি জানান, অন্তরে মোহর লাগার বিবরণ তিনি অন্য জায়গায় দলিল আর আলেমদের মতামতসহ বলেছেন, তাই এখানে আর তা দোহরাচ্ছেন না। এ লেখাও তাঁর পথ ধরছে। এ আয়াতে তাফসীরকারেরা যে ভাষা ব্যবহার করেছেন, তার বাইরে যাচ্ছে না।"
          },
          {
            "en": "The others keep close to that wording. Al-Qurtubi: that is, a seal was set on them, with disbelief. Al-Baghawi: with disbelief. The Muyassar names the cause outright: Allah sealed their hearts because of their disbelief. In the order of the verse the seal comes after the disbelief and is joined to it by fa, so, and none of the sources consulted here places it first. Al-Qurtubi also records that Zayd ibn 'Ali read the clause as fa-taba'a Allahu 'ala qulubihim, so Allah sealed their hearts, with the doer named.",
            "bn": "বাকিরাও প্রায় একই ভাষায় বলেন। কুরতুবী: অর্থাৎ অন্তরগুলোতে মোহর এঁটে দেওয়া হলো, কুফর দিয়ে। বাগাভী: কুফর দিয়ে। মুয়াসসার কারণটা সরাসরি বলে দেয়: তাদের কুফরের কারণে আল্লাহ তাদের অন্তরে মোহর লাগালেন। আয়াতের ক্রমেও মোহর আসে কুফরের পরে, আর দুটোকে জোড়ে 'ফা', অর্থাৎ 'ফলে'। এখানে দেখা কোনো তাফসীর মোহরকে আগে বসায়নি। কুরতুবী আরও উল্লেখ করেন, যায়দ ইবন আলী এ অংশটি পড়েছেন ফাতাবা'আল্লাহু আলা কুলূবিহিম, অর্থাৎ আল্লাহ তাদের অন্তরে মোহর লাগালেন। এ পাঠে কর্তার নাম স্পষ্ট।"
          },
          {
            "en": "What does the seal do? Ibn Kathir answers in plain terms. No guidance reaches their hearts and no good gets through to them, so the hearts neither take anything in nor find the way. His English abridgement puts it the same way: they cannot comprehend the guidance, nor can any goodness reach their hearts. As-Sa'di describes the seal as such that good never enters them. The commentators describe a closed door. Their concern is with what can no longer come in, rather than with the mechanics of the closing.",
            "bn": "মোহর কী করে? ইবন কাসীর সোজা কথায় উত্তর দেন। কোনো হিদায়াত তাদের অন্তরে পৌঁছায় না, কোনো কল্যাণ ভেতরে ঢুকতে পারে না। ফলে সেই অন্তর কিছু ধরেও রাখে না, পথও পায় না। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত রূপেও একই কথা: তারা হিদায়াত বুঝতে পারে না, কোনো কল্যাণও তাদের অন্তরে পৌঁছায় না। সা'দী মোহরের বর্ণনা দেন এভাবে: কল্যাণ আর কখনো তাতে ঢোকে না। তাফসীরকারেরা যেন এক বন্ধ দরজার ছবি আঁকেন। দরজা কীভাবে বন্ধ হলো, তা নিয়ে তাঁরা মাথা ঘামান না। তাঁদের নজর হলো, ভেতরে আর কী ঢুকতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Can No Longer Grasp",
          "bn": "যা তারা আর ধরতে পারে না"
        },
        "p": [
          {
            "en": "Fa-hum la yafqahun: and so they do not understand. The verse gives the verb no object, and the commentators supply it differently. At-Tabari: they do not discern the right from the mistaken, or truth from falsehood, because Allah has sealed their hearts. Al-Qurtubi: they do not understand faith, or good. Al-Baghawi: they do not understand faith. On these readings, what is lost is the ability to tell true from false and to recognise faith for what it is.",
            "bn": "ফাহুম লা ইয়াফকাহূন: ফলে তারা বোঝে না। কী বোঝে না, আয়াত তা বলেনি। সেই ফাঁকটা তাফসীরকারেরা পূরণ করেন ভিন্ন ভিন্নভাবে। তাবারী: আল্লাহ তাদের অন্তরে মোহর লাগিয়েছেন বলে তারা সঠিক আর ভুল, হক আর বাতিলের ফারাক ধরতে পারে না। কুরতুবী: তারা ঈমান বোঝে না, কল্যাণও বোঝে না। বাগাভী: তারা ঈমান বোঝে না। এসব ব্যাখ্যায় যা হারিয়ে যায় তা হলো সত্য-মিথ্যা আলাদা করার ক্ষমতা, আর ঈমানকে ঈমান বলে চিনতে পারার ক্ষমতা।"
          },
          {
            "en": "The Muyassar and as-Sa'di turn the object towards the hypocrites' own good. The Muyassar: they do not grasp what holds their own welfare. As-Sa'di: they do not understand what benefits them, and they do not take in what would bring about their good. Ibn Kathir joins the two: their hearts neither take in nor are guided. So the loss is described in two ways at once, as a loss of the truth and as a loss of the hypocrites' own interest, and the sources do not set the two against each other.",
            "bn": "মুয়াসসার আর সা'দী 'কী বোঝে না' প্রশ্নের উত্তর খোঁজেন মুনাফিকদের নিজেদের ভালোর মধ্যে। মুয়াসসার বলে, তাদের নিজেদের মঙ্গল কিসে, তা তারা ধরতে পারে না। সা'দী বলেন, কিসে তাদের উপকার, তা তারা বোঝে না, আর যা তাদের কল্যাণ বয়ে আনত, তা মনে ধরে রাখে না। ইবন কাসীর দুটোকে মেলান: তাদের অন্তর কিছু ধরেও রাখে না, হিদায়াতও পায় না। ক্ষতিটার বর্ণনা তাই দুই দিক থেকে আসে। হারায় সত্য, আবার হারায় নিজের মঙ্গলও। উৎসগুলো এ দুটোকে পরস্পরের বিপরীতে দাঁড় করায় না।"
          },
          {
            "en": "The phrase does not stay in this verse. The same words, la yafqahun, return in 63:7, but the hypocrites do not understand, and 63:8 closes with la ya'lamun, they do not know. The surah keeps coming back to understanding as the thing these people lack. Their words were not the problem. In 63:1 they say the testimony itself, and Ibn Kathir's English abridgement notes that what they said is true about the Prophet ﷺ; Allah calls them liars because they did not believe inwardly what they declared outwardly. The verse places the damage there, in the heart.",
            "bn": "শব্দগুচ্ছটি এ আয়াতেই থেমে থাকে না। ৬৩:৭ আয়াতে আবার আসে লা ইয়াফকাহূন, কিন্তু মুনাফিকরা বোঝে না। আর ৬৩:৮ আয়াত শেষ হয় লা ইয়া'লামূন দিয়ে, তারা জানে না। সূরাটি বারবার বোঝার কথায় ফিরে আসে। এই লোকদের অভাব ঠিক এখানেই। সমস্যাটা তাদের মুখের কথায় ছিল না। ৬৩:১ আয়াতে তারা সাক্ষ্যবাক্যটাই উচ্চারণ করে। ইবন কাসীরের তাফসীরের ইংরেজি সংক্ষিপ্ত রূপ বলছে, নবী ﷺ সম্পর্কে তাদের কথাটা সত্যই ছিল। আল্লাহ তাদের মিথ্যাবাদী বলেছেন, কারণ বাইরে যা ঘোষণা করত, ভেতরে তা বিশ্বাস করত না। এ আয়াত ক্ষতিটাকে ঠিক সেখানেই দেখায়, অন্তরে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report Tied to It",
          "bn": "এ আয়াতে জোড়া কোনো বর্ণনা নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it, so none is quoted here. Qatada's line, which at-Tabari gives with its chain, is his comment on the verse, not a saying of the Prophet ﷺ. Ma'arif al-Qur'an opens the surah with a long account of the campaign against Banu al-Mustaliq and what was said on the road home. Those reports belong with the later verses of the surah, and Ma'arif does not tie any of them to this verse, so they are left for their place.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার একটিও এর সঙ্গে কোনো হাদিস জোড়েনি। তাই এখানেও কোনো হাদিস আনা হয়নি। তাবারী সনদসহ কাতাদার যে কথা এনেছেন, তা আয়াত নিয়ে কাতাদার নিজের ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। মাআরিফুল কুরআন সূরার শুরুতে বনু মুস্তালিকের অভিযান আর ফেরার পথে বলা কথাবার্তার দীর্ঘ বিবরণ দেয়। সেসব বর্ণনার জায়গা সূরার পরের আয়াতগুলোতে। মাআরিফ সেগুলোর কোনোটিকে এ আয়াতের সঙ্গে জোড়েনি, তাই সেগুলো নিজ নিজ জায়গার জন্য তোলা রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Gauge for Other Hearts",
          "bn": "অন্যের অন্তর মাপার যন্ত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the people of 63:1 and 63:2, the hypocrites who came to the Prophet ﷺ with their testimony and their oaths. It speaks only of what it names and licenses nothing against any living person or community. It does not hand the reader a test for judging anyone's heart. It gives nobody the right to call a fellow believer a hypocrite, to treat someone's prayer or profession as a mask, or to decide that another person's heart has been sealed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা দিচ্ছে ৬৩:১ ও ৬৩:২ আয়াতের সেই লোকদের, সেই মুনাফিকদের, যারা সাক্ষ্য আর শপথ নিয়ে নবী ﷺ-এর কাছে আসত। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। কারও অন্তরের বিচার করার কোনো মাপকাঠিও পাঠকের হাতে তুলে দেয় না। কোনো মু'মিন ভাইকে মুনাফিক বলার, কারও নামাজ বা ঈমানের ঘোষণাকে মুখোশ ভাবার, কিংবা কারও অন্তরে মোহর পড়ে গেছে বলে রায় দেওয়ার অধিকার এ আয়াত কাউকে দেয় না।"
          },
          {
            "en": "The opening of the surah shows whose knowledge this was. In 63:1 it is Allah who knows that the Messenger is His Messenger, and Allah who testifies that the hypocrites are liars. The verdict on their hearts came from Him. Ibn Kathir's English abridgement adds, on 63:2, that some Muslims were deceived because they did not know the hypocrites' falsehood and took them for Muslims. The inward was hidden even from the people closest to it. Anyone who turns this verse on someone else is claiming a knowledge the surah assigns to Allah.",
            "bn": "সূরার শুরুই দেখিয়ে দেয়, এ জ্ঞান কার। ৬৩:১ আয়াতে আল্লাহই জানেন যে রাসূল তাঁর রাসূল, আর আল্লাহই সাক্ষ্য দেন যে মুনাফিকরা মিথ্যাবাদী। তাদের অন্তরের রায় এসেছে তাঁর কাছ থেকে। ইবন কাসীরের তাফসীরের ইংরেজি সংক্ষিপ্ত রূপ ৬৩:২ আয়াতের আলোচনায় যোগ করে, কিছু মুসলমান প্রতারিত হয়েছিলেন, কারণ মুনাফিকদের মিথ্যা তাঁরা জানতেন না, তাই তাদের মুসলিম বলেই ধরে নিয়েছিলেন। সবচেয়ে কাছের মানুষদের কাছেও ভেতরের অবস্থা গোপন ছিল। কেউ যদি এ আয়াত অন্য কারও দিকে তাক করে, তবে সে এমন জ্ঞানের দাবি করছে, যা সূরা আল্লাহর বলে ঘোষণা করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Mirror Close",
          "bn": "আয়নাটা নিজের সামনে"
        },
        "p": [
          {
            "en": "What the verse can do for a reader happens inward. Al-Baghawi's two settings, the tongue that affirms in front of the believers and the other face kept for other company, are the shape the commentators give to this hypocrisy. A reader can ask, of nobody but themselves, whether their speech about Allah changes with the room. The question is not whether the reader is a hypocrite in the verse's sense. It is whether the tongue and the heart are drifting apart in small ways that could be closed today.",
            "bn": "আয়াতটা পাঠকের জন্য যে কাজ করতে পারে, তা ঘটে ভেতরে। বাগাভী দুটি মজলিসের ছবি দেন: মু'মিনদের সামনে স্বীকার করা জিহ্বা, আর অন্য সঙ্গীদের জন্য তুলে রাখা আরেক চেহারা। তাফসীরকারেরা এ নিফাকের এই চেহারাই এঁকেছেন। পাঠক নিজেকে, শুধু নিজেকেই, জিজ্ঞেস করতে পারেন: মজলিস বদলালে আল্লাহকে নিয়ে আমার কথাও কি বদলে যায়? প্রশ্নটা এই নয় যে আমি আয়াতের অর্থে মুনাফিক কি না। প্রশ্ন হলো, মুখ আর মন কি ছোট ছোট ব্যাপারে আলাদা হয়ে যাচ্ছে, যে ফাঁক আজই বুজিয়ে ফেলা যায়?"
          },
          {
            "en": "As-Sa'di's phrase, they do not stand firm on faith, names by contrast what a believer hopes for, which is steadiness. And the readings of la yafqahun place two things in the heart's keeping: the grasp of truth from falsehood, and the grasp of one's own good. Both can be guarded while the heart still takes in a reminder. A reader who notices a verse landing, unsettling, asking for something, has evidence that the door is open, and can walk through it rather than wait.",
            "bn": "সা'দীর কথা, তারা ঈমানের উপর অটল থাকে না, উল্টো দিক থেকে মনে করিয়ে দেয় একজন মু'মিন কী চায়: অবিচলতা। আর লা ইয়াফকাহূন-এর ব্যাখ্যাগুলো দুটি জিনিস অন্তরের জিম্মায় রাখে। একটি হলো হক আর বাতিল চেনার ক্ষমতা, আরেকটি নিজের মঙ্গল চেনার ক্ষমতা। অন্তর যতদিন নসিহত গ্রহণ করে, ততদিন দুটোকেই আগলে রাখা যায়। কোনো আয়াত মনে দাগ কাটলে, অস্বস্তি জাগালে, কিছু চাইলে পাঠক বুঝে নিতে পারেন দরজা খোলা আছে। অপেক্ষা না করে সে দরজা দিয়ে ঢুকে পড়াই ভালো।"
          },
          {
            "en": "The verse tells its chain in the past tense, about a group whose state Allah Himself declared. It is not offered to the reader as a sentence passed on them, and it is not a reason for despair. It is a description of how far apart a tongue and a heart can grow, and of what the commentators say followed once they had: a seal, and an understanding that no longer worked. The reader's part is to keep tongue and heart together, and to ask Allah for understanding instead of assuming it.",
            "bn": "আয়াতটি এই ধাপগুলো বলে অতীত কালে, এমন এক দলের কথা, যাদের অবস্থা আল্লাহ নিজে ঘোষণা করেছেন। পাঠকের উপর এটা কোনো রায় নয়, হতাশ হওয়ার কারণও নয়। আয়াতটি দেখায়, মুখ আর মনের মধ্যে কতটা দূরত্ব তৈরি হতে পারে। আর তাফসীরকারেরা বলেন, সেই দূরত্বের পরে কী এসেছিল: মোহর, আর এমন বোধ, যা আর কাজ করেনি। পাঠকের কাজ মুখ আর মনকে একসঙ্গে রাখা, আর বোঝার ক্ষমতা আছে বলে ধরে না নিয়ে আল্লাহর কাছে তা চেয়ে নেওয়া।"
          }
        ]
      }
    ]
  },
  "63:9": {
    "sections": [
      {
        "h": {
          "en": "When the Address Changes Hands",
          "bn": "সম্বোধন যখন বদলে যায়"
        },
        "p": [
          {
            "en": "Surah al-Munafiqun is Medinan and has eleven verses. The first eight belong to the hypocrites: oaths worn as cover, the instruction in 63:7 that nobody should spend on those with the Messenger of Allah ﷺ until they disband, and the boast in 63:8 that on returning to Madinah the more honoured would drive out the humbler. Then the surah changes address. Verse 63:9 opens with ya ayyuha alladhina amanu, O you who have believed, and the last three verses speak to the believers.",
            "bn": "সূরা আল-মুনাফিকূন মাদানী, আয়াত এগারোটি। প্রথম আটটি আয়াত মুনাফিকদের নিয়ে: ঢাল হিসেবে ব্যবহার করা কসম; ৬৩:৭ আয়াতে তাদের সেই নির্দেশ, রাসূলুল্লাহ ﷺ-এর সঙ্গীদের জন্য কেউ যেন খরচ না করে, যতক্ষণ না তারা সরে পড়ে; আর ৬৩:৮ আয়াতে সেই দম্ভ, মদীনায় ফিরে গেলে সম্মানিতরা হীনদের বের করে দেবে। এরপর সূরা সম্বোধন বদলায়। ৬৩:৯ আয়াত শুরু হয় 'ইয়া আইয়ুহাল্লাযীনা আমানূ' দিয়ে, অর্থাৎ হে যারা ঈমান এনেছ। শেষ তিনটি আয়াতের কথা মুমিনদের সঙ্গে।"
          },
          {
            "en": "The placement is itself the argument. What ruined the hypocrites in this surah surfaced in money and in rank: a plan to starve a community until it scattered, and a confidence built on being the more honoured party. So the first thing said to the believers, once that portrait is finished, concerns their own wealth and their own children. The warning is not that they resemble hypocrites. It is that the same materials are lying in their hands.",
            "bn": "আয়াতটির অবস্থানই এখানে যুক্তি। এই সূরায় মুনাফিকদের সর্বনাশ ধরা পড়েছে টাকা আর মর্যাদার প্রশ্নে: একটা গোটা জনগোষ্ঠীকে না খাইয়ে ছত্রভঙ্গ করার ফন্দি, আর নিজেদের বেশি সম্মানিত ভেবে গড়ে ওঠা আত্মবিশ্বাস। তাই সেই ছবি আঁকা শেষ হলে আল্লাহ মুমিনদের প্রথম যে কথা বলেন, তা তাদের নিজেদের সম্পদ আর নিজেদের সন্তান নিয়ে। সতর্ক করা হচ্ছে এ জন্য নয় যে তারা মুনাফিকদের মতো। বরং এ জন্য যে, সেই একই উপকরণ তাদের হাতেও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb Is Divert",
          "bn": "মূল ক্রিয়া: বিমুখ করা"
        },
        "p": [
          {
            "en": "La tulhikum amwalukum wa la awladukum an dhikri Allah. The verb comes from lahw, and lahw is not a word for sin. It is whatever occupies a person pleasantly enough that something else slips out of view while he is enjoying it. Nothing in the verse forbids wealth or children, and nothing calls them evil. One thing only is named: what they must not be permitted to do to the person who holds them.",
            "bn": "'লা তুলহিকুম আমওয়ালুকুম ওয়ালা আওলাদুকুম আন যিকরিল্লাহ।' ক্রিয়াটি এসেছে 'লাহ্ও' থেকে। লাহ্ও গুনাহ বোঝানোর শব্দ নয়। এমন যেকোনো কিছুকে লাহ্ও বলে, যা মানুষকে এত আরামে ব্যস্ত রাখে যে উপভোগের ফাঁকে অন্য কিছু চোখের আড়ালে চলে যায়। আয়াতটি সম্পদ বা সন্তানকে নিষেধ করে না, মন্দও বলে না। শুধু একটি কথাই বলে: যার হাতে এগুলো আছে, তার সঙ্গে এগুলোকে কী করতে দেওয়া যাবে না।"
          },
          {
            "en": "The second half confirms that reading. Wa man yaf'al dhalika, and whoever does that — not whoever has that. The condemnation attaches to an act, and the act is allowing the diversion. This is why the same believers are told, in the verse right after, to spend from what Allah has provided them. A man cannot spend what he does not hold. Possession was never the charge.",
            "bn": "আয়াতের দ্বিতীয় অংশ এ পাঠকেই পাকা করে। 'ওয়া মাই ইয়াফআল যালিকা', আর যে এমন করে। 'যার এসব আছে' নয়। নিন্দাটা একটা কাজের, আর সেই কাজ হলো বিমুখ হতে দেওয়া। এ কারণেই ঠিক পরের আয়াতে আল্লাহ এই মুমিনদেরই বলছেন, তিনি যে রিজিক দিয়েছেন তা থেকে খরচ করতে। হাতে না থাকলে মানুষ খরচ করবে কী থেকে? অভিযোগ কখনোই সম্পদ থাকা নিয়ে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Places, One Root",
          "bn": "একই ধাতু, তিন জায়গা"
        },
        "p": [
          {
            "en": "The same root works hard elsewhere. 102:1 opens Surah at-Takathur with alhakumu at-takathur, rivalry in piling up has diverted you, stated in the perfect tense as something already accomplished. And 24:37 gives the finished portrait from the other side: men whom neither commerce nor sale diverts from the remembrance of Allah, the establishing of prayer and the giving of zakat. One warning, one diagnosis, and one picture of what the cure looks like.",
            "bn": "একই ধাতু অন্য জায়গায়ও বড় ভূমিকা রাখে। ১০২:১ আয়াতে সূরা আত-তাকাসুর শুরু হয় 'আলহাকুমুত তাকাসুর' দিয়ে: প্রাচুর্যের প্রতিযোগিতা তোমাদের বিমুখ করে রেখেছে। কথাটা অতীত কালে, যেন ব্যাপারটা ঘটেই গেছে। আর ২৪:৩৭ আয়াত অন্য দিক থেকে পুরো ছবিটা আঁকে: এমন কিছু মানুষ, ব্যবসা আর কেনাবেচা যাদের আল্লাহর জিকির, নামাজ কায়েম আর যাকাত দেওয়া থেকে বিমুখ করে না। একটিতে সতর্কবাণী, একটিতে রোগ ধরিয়ে দেওয়া, আর একটিতে আরোগ্যের ছবি।"
          },
          {
            "en": "24:37 is the verse to keep beside this one, because of what it does not say. It does not describe men without trade. They buy and sell; the verse before it has just placed them in the houses Allah ordered to be raised, where His name is remembered morning and evening. The standard being set is not a smaller business. It is a business that fails to divert.",
            "bn": "২৪:৩৭ আয়াতটি এ আয়াতের পাশে রেখে পড়ার মতো, আর তার কারণ আয়াতটি যা বলে না। আয়াতটি ব্যবসাহীন মানুষের ছবি আঁকে না। তারা কেনাবেচা করে। ঠিক আগের আয়াতই তাদের রেখেছে সেই ঘরগুলোতে, যেগুলোকে উঁচু করার হুকুম আল্লাহ দিয়েছেন, যেখানে সকাল-সন্ধ্যা তাঁর নামের জিকির হয়। এখানে মাপকাঠি ছোট ব্যবসা নয়। মাপকাঠি এমন ব্যবসা, যা মানুষকে বিমুখ করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide Is Dhikr Here",
          "bn": "এখানে জিকির কতটা ব্যাপক"
        },
        "p": [
          {
            "en": "The commentators do not narrow dhikr Allah in this verse to words on the tongue. They read it as the whole of what a person owes Allah: the prayers at their times, the duties He imposed, and the care taken over the line between what He allowed and what He forbade. 24:37 supports that width by naming remembrance, prayer and zakat together. Read so, the diversion becomes measurable — a prayer pushed late, a duty deferred, a question about income that stops being asked.",
            "bn": "মুফাসসিররা এ আয়াতের আল্লাহর জিকিরকে শুধু মুখের কথায় আটকে রাখেন না। তাঁদের কাছে এর মানে আল্লাহর প্রতি মানুষের সব দায়: সময়মতো নামাজ, তাঁর দেওয়া ফরজগুলো, আর তিনি যা হালাল আর যা হারাম করেছেন, তার সীমারেখা মেনে চলার সতর্কতা। ২৪:৩৭ আয়াতও জিকির, নামাজ আর যাকাতকে একসঙ্গে উল্লেখ করে এই ব্যাপক অর্থকেই সমর্থন করে। এভাবে পড়লে বিমুখ হওয়াটা মাপা যায়: দেরিতে ঠেলে দেওয়া এক ওয়াক্ত নামাজ, পিছিয়ে রাখা একটা দায়িত্ব, আর আয়-রোজগার নিয়ে যে প্রশ্নটা একসময় মনে জাগত, তা আর না জাগা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for Loss",
          "bn": "ক্ষতির শব্দটি"
        },
        "p": [
          {
            "en": "Then the verdict: fa-ula'ika humu al-khasirun, those are the losers. Khusr is a trader's word for capital gone, not merely profit missed, and the pronoun hum tightens it — those, they are the ones. 103:2 applies the same word to humanity at large. What should stop a reader here is who is being told this. The label is not pinned on the hypocrites of the first eight verses. It is held up in front of people who have already believed.",
            "bn": "এরপর আসে রায়: 'ফাউলাইকা হুমুল খাসিরূন', তারাই ক্ষতিগ্রস্ত। 'খুস্‌র' ব্যবসায়ীর শব্দ। এর মানে শুধু লাভ না হওয়া নয়, মূলধনই খুইয়ে ফেলা। মাঝখানের 'হুম' সর্বনাম কথাটাকে আরও জোরালো করে: ওরাই, ঠিক ওরাই। ১০৩:২ আয়াত একই শব্দ গোটা মানবজাতির জন্য ব্যবহার করে। এখানে পাঠকের থমকে দাঁড়ানোর কথা একটা জায়গায়: কথাটা কাকে বলা হচ্ছে। এই তকমা প্রথম আট আয়াতের মুনাফিকদের গায়ে লাগানো হচ্ছে না। এটা তুলে ধরা হচ্ছে তাদের সামনে, যারা আগেই ঈমান এনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It Against a Week",
          "bn": "নিজের এক সপ্তাহ মিলিয়ে দেখা"
        },
        "p": [
          {
            "en": "Diversion seldom announces itself as a choice against Allah, which is why the verse describes a drift and not a decision. It shows in the order things get moved when two of them collide: which appointment survives, which is rescheduled, and what has quietly gone undone for a month. The verse hands over a test anyone can run over seven days — what did wealth and family cost the remembrance of Allah, and what did the remembrance of Allah cost them?",
            "bn": "বিমুখ হওয়াটা খুব কমই আল্লাহর বিরুদ্ধে কোনো সিদ্ধান্ত হয়ে সামনে আসে। তাই আয়াতটি সিদ্ধান্তের কথা বলে না, বলে ধীরে ধীরে সরে যাওয়ার কথা। এটা ধরা পড়ে দুটো কাজ মুখোমুখি হলে কোনটা সরে যায়, তাতে: কোন সাক্ষাৎ টিকে থাকে, কোনটা অন্য দিনে সরে যায়, আর কোন কাজটা এক মাস ধরে চুপচাপ পড়ে আছে। আয়াতটি এমন একটা পরীক্ষা হাতে দেয়, যা যে কেউ সাত দিন ধরে চালিয়ে দেখতে পারে: সম্পদ আর পরিবার আল্লাহর জিকির থেকে কতটা কেড়ে নিল, আর আল্লাহর জিকির তাদের থেকে কতটা নিল?"
          },
          {
            "en": "The remedy this surah prescribes arrives at once. 63:10 tells the believers to spend from what Allah has provided before death reaches one of them, and 63:11 shuts the door on any delay past the appointed term. Giving is the exact reversal of diversion, because it turns the thing that pulls into the service of the One being forgotten. Wealth handled that way stops competing with dhikr and starts belonging to it.",
            "bn": "এই সূরা প্রতিকারও দেয় সঙ্গে সঙ্গেই। ৬৩:১০ আয়াত মুমিনদের বলে, তাদের কারও মৃত্যু আসার আগেই আল্লাহর দেওয়া রিজিক থেকে খরচ করতে। আর ৬৩:১১ আয়াত নির্ধারিত সময়ের পরে আর পেছানোর দরজা বন্ধ করে দেয়। দান বিমুখতার ঠিক উল্টো, কারণ যে জিনিস মানুষকে টেনে সরিয়ে নেয়, দান সেটাকেই লাগিয়ে দেয় তাঁর কাজে, যাঁকে ভুলে যাওয়া হচ্ছিল। এভাবে খরচ করা সম্পদ জিকিরের সঙ্গে আর পাল্লা দেয় না, জিকিরেরই অংশ হয়ে যায়।"
          }
        ]
      }
    ]
  },
  "63:10": {
    "sections": [
      {
        "h": {
          "en": "The Closing Address Continues",
          "bn": "শেষ সম্বোধন চলতেই থাকে"
        },
        "p": [
          {
            "en": "Surat al-Munafiqun ends with three verses addressed to the believers. The first, 63:9, warns that wealth and children must not divert them from the remembrance of Allah. The second, 63:10, follows straight on: wa anfiqu mimma razaqnakum, and spend from what We have provided you, before death comes to one of you. Ibn Kathir marks the join in one clause: then He urged them to spend in obedience to Him. At-Tabari and al-Muyassar both name the addressees as those who believe in Allah and His Messenger.",
            "bn": "সূরা মুনাফিকূনের শেষ তিনটি আয়াত মুমিনদের উদ্দেশে বলা। প্রথমটি, ৬৩:৯, সাবধান করে দেয়: ধনসম্পদ আর সন্তান যেন আল্লাহর জিকির থেকে গাফিল করে না দেয়। তার ঠিক পরেই আসে ৬৩:১০: ওয়া আনফিকূ মিম্মা রাযাকনাকুম, আমি তোমাদের যে রিযক দিয়েছি তা থেকে ব্যয় করো, তোমাদের কোনো একজনের মৃত্যু আসার আগেই। দুই আয়াতের জোড়াটা ইবন কাসীর এক বাক্যে দেখিয়ে দেন: এরপর আল্লাহ তাঁদের উৎসাহ দিলেন তাঁর আনুগত্যের পথে ব্যয় করতে। তাবারী ও মুয়াসসার দুজনেই জানিয়ে দেন, কথাটা তাঁদের প্রতি, যাঁরা আল্লাহ ও তাঁর রসূলের উপর ঈমান এনেছেন।"
          },
          {
            "en": "Ma'arif al-Qur'an asks why spending is named at all. Remembrance in 63:9, it says, covers every form of obedience, spending as due included. It gives two reasons. Wealth is among the main things that turn a person from acting on the Shari'ah, so giving it, as zakah, 'ushr, hajj and the like, is singled out. And when a person sees the signs of death, missed prayers, fasts and hajj are beyond him, but the wealth is in front of him; he knows it will soon leave his hand, and may spend it to make up for his shortfalls.",
            "bn": "মাআরিফুল কুরআন প্রশ্ন তোলে: ব্যয়ের কথা আলাদা করে বলার দরকার পড়ল কেন? তার ব্যাখ্যায় ৬৩:৯ আয়াতের জিকির সব রকম আনুগত্যকেই ধরে, যথাযথ ব্যয়ও তার ভেতরে পড়ে। জবাবে সে দুটি কারণ দেখায়। শরীয়তের উপর আমল থেকে মানুষকে যা সবচেয়ে বেশি সরিয়ে রাখে, সম্পদ তার একটি। তাই যাকাত, উশর, হজ ইত্যাদি রূপে সম্পদ খরচের কথা বিশেষ করে এসেছে। দ্বিতীয় কারণ: মৃত্যুর আলামত দেখা দিলে ছুটে যাওয়া নামায, রোযা বা হজ আদায় করা আর মানুষের সাধ্যে থাকে না। কিন্তু সম্পদ তখনও চোখের সামনে। সে জানে, শিগগিরই তা হাতছাড়া হবে, তাই ঘাটতি পূরণে তা খরচ করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Zakah, or Every Kind of Giving",
          "bn": "শুধু যাকাত, নাকি সব দান"
        },
        "p": [
          {
            "en": "What does anfiqu, spend, command? Al-Baghawi opens with Ibn 'Abbas (RA): he means the zakah of wealth. At-Tabari finds the same in the dying man's wish, glossing fa-assaddaqa, so that I may give charity, as fa-uzakki mali, so that I may pay the zakah on my wealth. Al-Qurtubi draws a ruling from the words before death comes: they show that paying zakah promptly is obligatory and that delaying it is not permitted at all, and the same holds for every act of worship once its time is fixed.",
            "bn": "আনফিকূ, ব্যয় করো: কোন ব্যয়ের কথা? বাগাভী শুরু করেন ইবন আব্বাস (রাঃ)-এর কথা দিয়ে: এর দ্বারা সম্পদের যাকাত বোঝানো হয়েছে। মুমূর্ষু লোকটির আকুতির ভেতরেও তাবারী একই অর্থ পান। ফাআস্সাদ্দাকা, যাতে আমি সদকা করতে পারি, এর ব্যাখ্যায় তিনি লেখেন ফাউযাক্কী মালী: যাতে আমি আমার সম্পদের যাকাত দিতে পারি। কুরতুবী 'মৃত্যু আসার আগেই' কথাটি থেকে একটি বিধান বের করেন। তাঁর মতে এতে প্রমাণ মেলে, যাকাত দ্রুত আদায় করা ওয়াজিব, তা পিছিয়ে রাখা একেবারেই জায়েয নয়। যে ইবাদতের সময় নির্দিষ্ট হয়ে গেছে, তার বেলাতেও একই কথা।"
          },
          {
            "en": "Al-Qurtubi then quotes Ibn al-'Arabi, who says Ibn 'Abbas took the verse as general within obligatory spending only, not voluntary giving, and judges that it covers obligatory spending established by consensus or by the Qur'an's text, since its threat reaches nothing beyond that. As-Sa'di reads wider: the command includes obligatory spending, such as zakah, expiations and the upkeep of wives and of slaves, and recommended spending on every good cause. Al-Muyassar does not settle it: spend some of what We gave you in the ways of good.",
            "bn": "এরপর কুরতুবী ইবনুল আরাবীর বক্তব্য তুলে ধরেন। ইবনুল আরাবী বলেন, ইবন আব্বাস (রাঃ) আয়াতটিকে কেবল ফরজ ব্যয়ের মধ্যে ব্যাপক ধরেছেন, নফল দান এর আওতায় আনেননি। তাঁর নিজের রায়: ইজমা বা কুরআনের স্পষ্ট বাণী দিয়ে যে ব্যয় ফরজ সাব্যস্ত, আয়াত সেটাকেই ধরে, কারণ এর হুমকি তার বাইরে যায় না। সা'দী অর্থটা আরও প্রশস্ত করেন। তাঁর মতে আদেশের ভেতরে আছে ফরজ ব্যয়, যেমন যাকাত, কাফফারা, স্ত্রী ও দাস-দাসীর ভরণপোষণ। আবার আছে মুস্তাহাব ব্যয়ও, অর্থাৎ সব ভালো কাজে সম্পদ খরচ। মুয়াসসার বিষয়টির মীমাংসা করে না: কল্যাণের পথে আমার দেওয়া রিযকের কিছু অংশ ব্যয় করো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portion, Not the Whole",
          "bn": "সবটা নয়, কিছু অংশ"
        },
        "p": [
          {
            "en": "The preposition matters to as-Sa'di. Allah said mimma razaqnakum, from what We have provided you, to show that He did not lay on His servants a spending that would strain or burden them. He commanded them to give a part of what He provided, a provision He made easy for them along with its means. Al-Muyassar keeps the same proportion with its word ba'd, some of what We have given you, and at-Tabari names the thing given plainly: from the wealth that We have provided you.",
            "bn": "সা'দীর কাছে 'মিন' শব্দটির ওজন আছে। আল্লাহ বলেছেন মিম্মা রাযাকনাকুম, আমি তোমাদের যা দিয়েছি তা থেকে। এর মাধ্যমে বোঝানো হলো, বান্দার উপর তিনি এমন ব্যয় চাপাননি যা তাকে কষ্টে ফেলে বা সাধ্যের বাইরে যায়। তিনি চেয়েছেন নিজের দেওয়া রিযকের একটা অংশ, যে রিযক তিনি সহজ করে দিয়েছেন, তার উপায়-উপকরণসহ। মুয়াসসারও একই অনুপাত রাখে 'বা'দ' শব্দ দিয়ে: আমার দেওয়া জিনিসের কিছু। আর তাবারী কোন জিনিস, তা সরাসরি বলে দেন: আমি তোমাদের যে সম্পদ দিয়েছি, তা থেকে।"
          },
          {
            "en": "From that, as-Sa'di draws the moral at once. Let them thank the One who gave to them by sharing with their brothers in need, and let them hurry to do it before death, which, once it comes, leaves the servant unable to bring even an atom's weight of good. In his reading the provision is His, the share asked for is a part, and the time to give it is closed off by death. Gratitude and haste, his two conclusions, follow from those facts in the wording.",
            "bn": "এখান থেকেই সা'দী সঙ্গে সঙ্গে শিক্ষাটা টেনে আনেন। যিনি দিয়েছেন, অভাবী ভাইদের পাশে দাঁড়িয়ে তাঁর শোকর আদায় করা উচিত। আর তা করা উচিত তাড়াতাড়ি, মৃত্যুর আগে। কারণ মৃত্যু এসে গেলে বান্দা এক অণু পরিমাণ নেক কাজও আর করতে পারে না। তাঁর পাঠে রিযক আল্লাহর, চাওয়া হয়েছে তার একটা অংশ, আর দেওয়ার সময়ের শেষ সীমা টেনে দিয়েছে মৃত্যু। শোকর আর তাড়া, তাঁর এই দুই সিদ্ধান্ত আয়াতের এই কথাগুলো থেকেই বেরিয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Signs Appear",
          "bn": "আলামত দেখা দেওয়ার আগে"
        },
        "p": [
          {
            "en": "Min qabli an ya'tiya ahadakumu al-mawt: before death comes to one of you. Ma'arif al-Qur'an reads the coming of death as witnessing its signs, and al-Muyassar likewise speaks of one who sees death's indications and marks. So the deadline falls a little before the last breath. Ma'arif draws the command's positive side: make the best of the chance to spend in Allah's way while healthy and strong, so that ranks in the Hereafter are raised, for once death overtakes a person the chance is lost and the wealth is of no use.",
            "bn": "মিন কাবলি আন ইয়া'তিয়া আহাদাকুমুল মাওত: তোমাদের কারও মৃত্যু আসার আগে। মাআরিফুল কুরআনের মতে মৃত্যু আসা মানে এখানে তার আলামত চোখের সামনে দেখা। মুয়াসসারও একইভাবে বলে এমন মানুষের কথা, যে মৃত্যুর লক্ষণ আর চিহ্ন দেখতে পাচ্ছে। তাহলে সময়সীমাটা শেষ নিঃশ্বাসের একটু আগেই শেষ হয়ে যায়। মাআরিফুল কুরআন আদেশটির ইতিবাচক দিকটাও দেখায়। সুস্থ ও সবল থাকতে থাকতেই আল্লাহর পথে খরচের সুযোগ কাজে লাগাও, যাতে আখিরাতে মর্যাদা বাড়ে। মৃত্যু একবার এসে পড়লে সুযোগ হারিয়ে যায়, সম্পদ আর কোনো কাজে আসে না।"
          },
          {
            "en": "Then the plea: fa-yaqula rabbi lawla akhkhartani ila ajalin qarib, and he says, my Lord, if only You would delay me to a near term. Al-Baghawi and al-Qurtubi give two accounts of lawla. It may mean halla, why not, which al-Qurtubi calls a question; or the la is an added particle, giving the sense of a wish. At-Tabari glosses it halla. Al-Muyassar names the speaker's state in one word, nadiman, regretful, and as-Sa'di has him grieving over what he neglected while it was still possible.",
            "bn": "তারপর আসে আকুতি: ফাইয়াকূলা রাব্বি লাওলা আখখারতানী ইলা আজালিন কারীব, তখন সে বলবে, হে আমার রব, আমাকে আর অল্প কিছু সময় দিলে না কেন! লাওলা শব্দের দুটি ব্যাখ্যা দেন বাগাভী ও কুরতুবী। এর অর্থ হতে পারে হাল্লা, অর্থাৎ কেন দিলে না; কুরতুবী একে প্রশ্ন বলেন। অথবা এখানে 'লা' বাড়তি অব্যয়, ফলে বাক্যটা দাঁড়ায় আকাঙ্ক্ষার অর্থে। তাবারী এর ব্যাখ্যা দেন হাল্লা দিয়েই। বক্তার অবস্থা মুয়াসসার একটিমাত্র শব্দে বলে দেয়: নাদিমান, অনুতপ্ত হয়ে। আর সা'দীর বর্ণনায় সে আফসোস করছে সেই সব কাজের জন্য, যা সময় থাকতে সে অবহেলা করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Zakah Unpaid, Hajj Not Made",
          "bn": "যাকাত বাকি, হজ অসমাপ্ত"
        },
        "p": [
          {
            "en": "At-Tabari brings the report from ad-Dahhak ibn Muzahim from Ibn 'Abbas (RA): no one dies without having paid the zakah on his wealth and without having made the hajj except that he asks to be sent back. His hearers objected that he kept bringing them things they did not know, and he answered by reciting this verse. Fa-assaddaqa, he said, means I would pay the zakah on my wealth, and wa akun mina as-salihin means I would make the hajj. Ad-Dahhak, in a later report, glosses both phrases the same way.",
            "bn": "তাবারী দাহহাক ইবন মুযাহিমের সূত্রে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন। যে-ই সম্পদের যাকাত না দিয়ে আর হজ না করে মারা যায়, সে-ই ফিরে আসার আবেদন করে। শ্রোতারা আপত্তি তুলল, আপনি তো সব সময় আমাদের এমন কথা শোনান যা আমরা জানি না। জবাবে তিনি এই আয়াত তিলাওয়াত করলেন। তাঁর ব্যাখ্যায় ফাআস্সাদ্দাকা মানে, আমি আমার সম্পদের যাকাত দেব। আর ওয়া আকুন মিনাস সালিহীন মানে, আমি হজ করব। তাবারীর পরের এক বর্ণনায় দাহহাক নিজেও দুটি অংশের ঠিক এই ব্যাখ্যাই দেন।"
          },
          {
            "en": "In a second chain at-Tabari carries, a man protested: do you not fear Allah, does a believer ask to return? Ibn 'Abbas said he would recite Qur'an to them, and read 63:9. Al-Tirmidhi records the report, and al-Qurtubi quotes it from him, with two closing questions. What makes zakah due? When wealth reaches two hundred dirhams or more. What makes hajj due? Provision and a mount. In at-Tabari's version the second answer is a riding animal to carry him and the expenses to bring him there.",
            "bn": "তাবারীর আনা আরেকটি সনদে এক লোক প্রতিবাদ করে বলল, আপনি কি আল্লাহকে ভয় করেন না? মুমিন কি ফিরে আসতে চাইবে? ইবন আব্বাস (রাঃ) বললেন, আমি তোমাদের কুরআন পড়ে শোনাচ্ছি, তারপর ৬৩:৯ আয়াত তিলাওয়াত করলেন। তিরমিযী বর্ণনাটি সংকলন করেছেন, কুরতুবীও তাঁর থেকে উদ্ধৃত করেছেন। সেখানে শেষে দুটি প্রশ্ন আছে। যাকাত কখন ফরজ হয়? সম্পদ দুইশো দিরহাম বা তার বেশি হলে। হজ কখন ফরজ হয়? পথের খরচ আর সওয়ারি থাকলে। তাবারীর বর্ণনায় দ্বিতীয় জবাবটা এরকম: এমন বাহন যা তাকে বয়ে নেবে, আর এমন খরচ যা তাকে সেখানে পৌঁছে দেবে।"
          },
          {
            "en": "Al-Tirmidhi adds his own verdict on the chain. Sufyan ibn 'Uyaynah and others, he says, transmitted it from Abu Janab, from ad-Dahhak, from Ibn 'Abbas as Ibn 'Abbas's own words, not raised to the Prophet ﷺ, and this is more correct than the raised version; and Abu Janab is not strong in hadith. Al-Qurtubi notes that al-Halimi cited it as the Prophet's words. Ibn al-'Arabi, through al-Qurtubi, accepts the zakah reading but finds the hajj reading problematic, since scholars differ over whether hajj must be made at once.",
            "bn": "সনদ নিয়ে তিরমিযী নিজের মতও জানিয়ে দেন। তাঁর কথায়, সুফইয়ান ইবন উয়াইনা ও আরও অনেকে আবূ জানাব থেকে, তিনি দাহহাক থেকে, তিনি ইবন আব্বাস (রাঃ) থেকে এটি ইবন আব্বাসের নিজের কথা হিসেবে বর্ণনা করেছেন, নবী ﷺ পর্যন্ত পৌঁছাননি। তিরমিযীর মতে এটাই নবী ﷺ-এর নামে বর্ণিত রূপের চেয়ে বেশি সঠিক। তিনি আরও বলেন, আবূ জানাব হাদীসে মজবুত নন। কুরতুবী জানান, হালীমী এটিকে নবী ﷺ-এর বাণী হিসেবে উল্লেখ করেছেন। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী যাকাতের ব্যাখ্যা মেনে নেন। তবে হজের ব্যাখ্যায় তিনি জটিলতা দেখেন, কারণ হজ সঙ্গে সঙ্গে আদায় করা জরুরি কি না, তা নিয়ে আলেমদের মতভেদ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Counts as Righteous Here",
          "bn": "এখানে সালিহ কারা"
        },
        "p": [
          {
            "en": "Wa akun mina as-salihin: and be among the righteous. At-Tabari's own reading is broad: I would act in obedience to You and fulfil Your obligations. Then he notes that some said it means I would make the hajj to Your Sacred House. As-Sa'di keeps the broad sense, carrying out every command and avoiding every prohibition, and says hajj and other duties fall within it. Ma'arif al-Qur'an adds repentance: the man wants time to fulfil what he missed and to seek pardon for forbidden things he did.",
            "bn": "ওয়া আকুন মিনাস সালিহীন: আর আমি সৎকর্মশীলদের দলে শামিল হব। তাবারীর নিজের ব্যাখ্যা প্রশস্ত: আমি তোমার আনুগত্যে আমল করব, তোমার ফরজগুলো আদায় করব। এরপর তিনি জানান, কেউ কেউ বলেছেন, এর মানে আমি তোমার সম্মানিত ঘরের হজ করব। সা'দীও প্রশস্ত অর্থটাই রাখেন: সব আদেশ পালন আর সব নিষেধ থেকে বিরত থাকা। তাঁর মতে হজসহ অন্য দায়িত্বগুলোও এর ভেতরে পড়ে। মাআরিফুল কুরআন যোগ করে তওবার কথা। লোকটি সময় চায় ছুটে যাওয়া দায়িত্ব পূরণ করতে, আর যে হারাম কাজ সে করেছে, তার জন্য মাফ চাইতে।"
          },
          {
            "en": "Al-Baghawi records a sharper split. One view, which he gives as that of Muqatil and a group, takes the righteous here to be the believers, comparing man salaha min aba'ihim, whoever was righteous among their fathers, in 13:23 and 40:8; those who held it said the verse came down about the hypocrites. Others said it came down about the believers, and that righteousness here means the hajj. Al-Baghawi reports both without choosing. The verse describes a plea at death and licenses no judgement against any living person or community.",
            "bn": "বাগাভী আরও স্পষ্ট এক মতভেদের কথা লেখেন। একটি মত, যা তিনি মুকাতিল ও একদল আলেমের বলে উল্লেখ করেন, এখানে সালিহীন বলতে মুমিনদের বোঝায়। তুলনা হিসেবে আসে ১৩:২৩ ও ৪০:৮ আয়াতের মান সালাহা মিন আবাইহিম, তাদের পিতৃপুরুষদের মধ্যে যারা সৎ। এই মতের লোকেরা বলেছেন, আয়াতটি নাজিল হয়েছে মুনাফিকদের ব্যাপারে। অন্যরা বলেছেন, নাজিল হয়েছে মুমিনদের ব্যাপারে, আর এখানে সালাহ মানে হজ। বাগাভী দুটি মতই উল্লেখ করেন, কোনোটিকে বেছে নেন না। আয়াতটি মৃত্যুর সময়ের এক আকুতির বর্ণনা দেয়। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে রায় দেওয়ার অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of Wa Akun",
          "bn": "ওয়া আকুন: দুই কিরাআত"
        },
        "p": [
          {
            "en": "Al-Baghawi and al-Qurtubi both discuss the last two verbs. Fa-assaddaqa is in the subjunctive, as the answer to the wish introduced by fa. Most readers then read wa akun in the jussive, and al-Baghawi explains why: it is joined to where fa-assaddaqa would stand without the fa, since without it that verb would itself be jussive, meaning if You delay me, I will give and I will be. Al-Qurtubi compares the jussive reading of wa yadharhum, and He leaves them, in 7:186.",
            "bn": "শেষ দুটি ক্রিয়া নিয়ে বাগাভী ও কুরতুবী দুজনেই আলোচনা করেন। আকাঙ্ক্ষার জবাব হিসেবে 'ফা' দিয়ে শুরু হওয়ায় ফাআস্সাদ্দাকা মানসূব। এরপর অধিকাংশ কারী ওয়া আকুন পড়েন মাজযূম রূপে। বাগাভী কারণটা বুঝিয়ে বলেন। 'ফা' না থাকলে ফাআস্সাদ্দাকা নিজেই মাজযূম হতো, আর ওয়া আকুন যুক্ত হয়েছে সেই অবস্থানের সঙ্গে। অর্থ দাঁড়ায়: তুমি যদি আমাকে সময় দাও, আমি দান করব আর সৎ হব। কুরতুবী এর তুলনা দেন ৭:১৮৬ আয়াতের ওয়া ইয়াযারুহুম, আর তিনি তাদের ছেড়ে দেন, শব্দটির মাজযূম পাঠের সঙ্গে।"
          },
          {
            "en": "Abu 'Amr read wa akuna, in the subjunctive, joined to the wording of fa-assaddaqa, and al-Qurtubi adds Ibn Muhaysin and Mujahid to that reading. Al-Baghawi reports Abu 'Amr's explanation that the waw was dropped from the written copy for brevity, while the others read wa akun, partly because it is written without the waw. Either way the promise has two parts, the gift and the righteousness, and both are made to hang on the delay he asks for.",
            "bn": "আবূ আমর পড়েছেন ওয়া আকূনা, মানসূব রূপে, ফাআস্সাদ্দাকা শব্দের বাহ্যিক রূপের সঙ্গে মিলিয়ে। কুরতুবী এই কিরাআতে ইবন মুহাইসিন ও মুজাহিদের নামও যোগ করেন। বাগাভী আবূ আমরের ব্যাখ্যা উদ্ধৃত করেন: সংক্ষেপের জন্য মুসহাফে ওয়াও লেখা হয়নি। বাকি কারীরা পড়েছেন ওয়া আকুন, এর একটি কারণ এই যে মুসহাফে শব্দটি ওয়াও ছাড়াই লেখা। যে পাঠই ধরা হোক, প্রতিশ্রুতির দুটি অংশ: দান আর সৎকর্ম। আর দুটিই ঝুলে আছে সেই অবকাশের উপর, যা সে চাইছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Neglecter at the Threshold",
          "bn": "শেষ দুয়ারে প্রত্যেক অবহেলাকারী"
        },
        "p": [
          {
            "en": "Ibn Kathir widens the scene. Every negligent person, he says, regrets at the moment of dying and asks for a longer term, even a little, to make amends and recover what he missed. Then: hayhat, far from it. What was has been, what is coming has come, and each is dealt with according to his own neglect. For the disbelievers he cites 14:44, where the wrongdoers say, our Lord, delay us to a near term, and 23:99 and 23:100, where the dying man says, my Lord, send me back.",
            "bn": "ইবন কাসীর দৃশ্যটা আরও বড় করে দেখান। তাঁর কথায়, প্রত্যেক অবহেলাকারী মৃত্যুর মুহূর্তে অনুতপ্ত হয়। একটু হলেও আরও সময় চায়, যাতে ভুল শুধরে নিতে আর হারানো জিনিস ফিরে পেতে পারে। তারপর তিনি বলেন: হাইহাত, তা আর হবার নয়! যা ঘটার ঘটে গেছে, যা আসার এসে গেছে। প্রত্যেকের সঙ্গে আচরণ হবে তার নিজের অবহেলা অনুযায়ী। কাফিরদের বেলায় তিনি উদ্ধৃত করেন ১৪:৪৪, যেখানে জালিমরা বলবে, হে আমাদের রব, আমাদের অল্প সময়ের অবকাশ দাও। আরও উদ্ধৃত করেন ২৩:৯৯ ও ২৩:১০০, যেখানে মৃত্যুপথযাত্রী বলে, হে আমার রব, আমাকে ফেরত পাঠাও।"
          },
          {
            "en": "Al-Qurtubi records Ibn 'Abbas (RA) saying that this verse is the hardest on the people of tawhid, because no one who has good awaiting him with Allah in the Hereafter wishes to return to the world or to have his stay in it prolonged. Al-Qurtubi adds one exception of his own: the martyr, who wishes to return so that he may be killed again, because of the honour he sees. As-Sa'di closes the matter for everyone else: the request and the wish have passed their time and cannot be recovered.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ)-এর একটি কথা উদ্ধৃত করেন: তাওহীদের অনুসারীদের জন্য এই আয়াতটি সবচেয়ে কঠিন। কারণ আখিরাতে আল্লাহর কাছে যার জন্য কল্যাণ অপেক্ষা করছে, সে কখনো দুনিয়ায় ফিরে আসতে বা সেখানে আরও থাকতে চায় না। কুরতুবী নিজের পক্ষ থেকে একটি ব্যতিক্রম যোগ করেন: শহীদ। শহীদ যে সম্মান দেখতে পান, তার কারণে তিনি ফিরে আসতে চান, যাতে আবার শহীদ হতে পারেন। বাকি সবার জন্য সা'দী কথাটা শেষ করে দেন: এই আবেদন আর এই আকাঙ্ক্ষার সময় পেরিয়ে গেছে, তা আর ফিরে পাওয়া যায় না।"
          },
          {
            "en": "The surah's last verse, 63:11, gives the answer: Allah will never delay a soul when its term has come, and Allah is fully aware of what you do. Ibn Kathir takes it to mean that when the time of death arrives, no one is granted respite, and Ma'arif al-Qur'an says the desire at that stage is futile. 63:9 is treated separately; this verse and the next close Surat al-Munafiqun on the deadline its believers were told to act before.",
            "bn": "সূরার শেষ আয়াত ৬৩:১১ জবাবটা দিয়ে দেয়: কারও নির্ধারিত সময় এসে গেলে আল্লাহ তাকে কখনো অবকাশ দেন না, আর তোমরা যা করো, আল্লাহ সে সম্পর্কে পুরোপুরি খবর রাখেন। ইবন কাসীরের ব্যাখ্যায় এর মানে, মৃত্যুর সময় এসে গেলে কাউকে আর সময় দেওয়া হয় না। মাআরিফুল কুরআন বলে, সেই মুহূর্তে এমন আকাঙ্ক্ষা অর্থহীন। ৬৩:৯ আয়াতের আলোচনা আলাদা। এই আয়াত আর তার পরেরটি দিয়ে সূরা মুনাফিকূন শেষ হয় সেই সময়সীমার কথায়, যার আগেই মুমিনদের আমল করতে বলা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Give While You Are Well",
          "bn": "সুস্থ থাকতেই দান"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an attaches a hadith that al-Bukhari and Muslim both record in their Sahihs. In al-Bukhari's wording (no. 1419), Abu Hurayrah (RA) said: A man came to the Prophet ﷺ and said, O Messenger of Allah, which charity is greatest in reward? He said: That you give charity while you are healthy and tight-fisted, fearing poverty and hoping for wealth. And do not delay until, when the soul reaches the throat, you say: to so-and-so this much, and to so-and-so this much, when it already belongs to so-and-so.",
            "bn": "মাআরিফুল কুরআন এখানে একটি হাদীস আনে, যা বুখারী ও মুসলিম দুজনেই তাঁদের সহীহ গ্রন্থে সংকলন করেছেন। বুখারীর ভাষায় (নং ১৪১৯), আবূ হুরায়রা (রাঃ) বলেন: এক ব্যক্তি নবী ﷺ-এর কাছে এসে বলল, হে আল্লাহর রসূল, কোন সদকার সওয়াব সবচেয়ে বেশি? তিনি বললেন: তুমি যখন সুস্থ, সম্পদের প্রতি টান আছে, দারিদ্র্যের ভয় করছ আর সচ্ছলতার আশা রাখছ, তখনকার সদকা। আর এমন দেরি কোরো না যে প্রাণ কণ্ঠনালিতে পৌঁছে গেলে বলবে, অমুককে এত, অমুককে এত। অথচ ততক্ষণে তা অমুকের হয়েই গেছে।"
          },
          {
            "en": "The hadith and the verse describe the same last hour from two sides. The verse lets the reader overhear the plea; the hadith names the moment, the soul at the throat, and the instructions given too late, when the wealth already belongs to others. The hadith places the greatest reward with the giver who still feels the pull of keeping. Read through its commentators, the verse asks for something modest: pay what is owed, zakah first, as Ibn 'Abbas read it, then give from what has been provided, a part and not the whole, while giving still costs something.",
            "bn": "হাদীস আর আয়াত একই শেষ মুহূর্তকে দেখায় দুই দিক থেকে। আয়াত পাঠককে সেই আকুতিটা শুনিয়ে দেয়। হাদীস মুহূর্তটার নাম বলে দেয়: প্রাণ যখন কণ্ঠনালিতে, আর দেরিতে দেওয়া নির্দেশ, যখন সম্পদ অন্যের হয়ে গেছে। হাদীসটি সবচেয়ে বেশি সওয়াবের কথা বলে সেই দাতার বেলায়, যার মনে এখনো আঁকড়ে রাখার টান আছে। তাফসীরকারদের চোখে পড়লে আয়াতের দাবি খুব বড় কিছু নয়। যা পাওনা তা আগে আদায় করুন, প্রথমে যাকাত, যেমন ইবন আব্বাস (রাঃ) বুঝেছিলেন। তারপর আল্লাহর দেওয়া রিযক থেকে দিন, সবটা নয়, একটা অংশ, যতক্ষণ দিতে গেলে এখনো বুকে একটু টান লাগে।"
          }
        ]
      }
    ]
  }
});
