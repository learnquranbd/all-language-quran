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
            "en": "Ya ayyuha-lladhina amanu, la tulhikum amwalukum wa la awladukum 'an dhikri-llah: O you who have believed, let not your wealth and your children divert you from the remembrance of Allah. Surah al-Munafiqun has eleven verses, and the first eight belong to the hypocrites: the instruction in 63:7 that nobody should spend on those with the Messenger of Allah ﷺ until they disband, and the boast in 63:8 that the more honoured would expel the humbler. Verse 63:9 is where the address turns.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ, লা তুলহিকুম আমওয়ালুকুম ওয়ালা আওলাদুকুম আন যিকরিল্লাহ: হে যারা ঈমান এনেছ, তোমাদের সম্পদ আর তোমাদের সন্তান যেন তোমাদের আল্লাহর জিকির থেকে বিমুখ করে না দেয়। সূরা আল-মুনাফিকূনে আয়াত ১১টি, আর প্রথম আটটি মুনাফিকদের নিয়ে। ৬৩:৭ আয়াতে তাদের সেই নির্দেশ, রাসূলুল্লাহ ﷺ-এর সঙ্গীদের জন্য কেউ যেন খরচ না করে, যতক্ষণ না তারা সরে পড়ে। ৬৩:৮ আয়াতে দম্ভ, সম্মানিতরা হীনদের বের করে দেবে। সম্বোধনটা ঘুরে যায় ৬৩:৯ আয়াতে এসে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the turn as a hinge between two sections. The first dealt with the hypocrites, their false oaths and their conspiracies, and Ma'arif traces all of it to an excessive love of worldly gain. The second section, it says, addresses the sincere believers and warns them against being intoxicated by love of this world as the hypocrites were. Al-Qurtubi makes the same link in one sentence: He warned the believers against the character of the hypocrites.",
            "bn": "মাআরিফুল কুরআন এই মোড়কে দেখে দুই অংশের জোড়া হিসেবে। প্রথম অংশ মুনাফিকদের নিয়ে: তাদের মিথ্যা কসম, তাদের ষড়যন্ত্র। মাআরিফের মতে এ সবকিছুর মূলে ছিল দুনিয়ার লাভের প্রতি মাত্রাছাড়া ভালোবাসা। দ্বিতীয় অংশের সম্বোধন, মাআরিফ বলে, খাঁটি মুমিনদের প্রতি। তাদের সাবধান করা হচ্ছে, মুনাফিকদের মতো তারাও যেন দুনিয়ার মোহে মাতাল না হয়। কুরতুবী একই সংযোগ টানেন এক বাক্যে: আল্লাহ মুমিনদের মুনাফিকদের স্বভাব থেকে সতর্ক করেছেন।"
          },
          {
            "en": "Do not be occupied with your wealth, al-Qurtubi paraphrases, as the hypocrites were when, out of stinginess with their wealth, they said: do not spend on those who are with the Messenger of Allah ﷺ, the words of 63:7. He also records, under the formula it is said, a different reading of the address: that it is spoken to the hypocrites themselves, meaning you believed by word, so believe with the heart. Ma'arif takes the addressees to be the sincere believers. Both readings stand here, and the article does not choose between them.",
            "bn": "কুরতুবীর ভাষ্যে কথাটা এমন: মুনাফিকরা যেমন সম্পদ নিয়ে মেতে ছিল, তোমরা তেমন হয়ো না। সম্পদের প্রতি কৃপণতা থেকেই তারা বলেছিল, রাসূলুল্লাহ ﷺ-এর কাছে যারা আছে তাদের জন্য খরচ কোরো না। এটাই ৬৩:৭ আয়াতের কথা। 'বলা হয়' শব্দে তিনি সম্বোধন নিয়ে ভিন্ন একটি মতও আনেন: কথাটা মুনাফিকদেরই বলা, অর্থাৎ তোমরা মুখে ঈমান এনেছ, এবার অন্তরে ঈমান আনো। মাআরিফুল কুরআন সম্বোধিতদের ধরে খাঁটি মুমিন হিসেবে। দুটো মতই এখানে রইল, কোনোটিকে বেছে নেওয়া হলো না।"
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
            "en": "The verb is tulhikum, from lahw. At-Tabari paraphrases the prohibition as: do not let your wealth and your children bring about lahw in you, away from the remembrance of Allah. He places the form in its family, alhaytuhu 'an kadha, I diverted him from such and such, and supports the usage with a line of Imru' al-Qays built on the same verb, alhaytuha, I diverted her: a nursing mother whose attention is turned from her year-old infant.",
            "bn": "ক্রিয়াটি 'তুলহিকুম', এসেছে 'লাহ্ও' থেকে। তাবারী নিষেধটির ব্যাখ্যা দেন এভাবে: তোমাদের সম্পদ আর সন্তান যেন তোমাদের মধ্যে এমন মগ্নতা না জাগায়, যা আল্লাহর জিকির থেকে সরিয়ে নেয়। শব্দটির রূপ তিনি দেখান তার পরিবারের ভেতরে: 'আলহাইতুহু আন কাযা', আমি তাকে অমুক জিনিস থেকে বিমুখ করলাম। প্রয়োগের সাক্ষী হিসেবে তিনি ইমরুল কায়সের একটি পংক্তি আনেন, যার কেন্দ্রে এই ক্রিয়াই: 'আলহাইতুহা', আমি তাকে বিমুখ করলাম। সেখানে দুধ খাওয়ানো এক মায়ের মন সরে যায় তার এক বছরের শিশুর দিক থেকে।"
          },
          {
            "en": "A note by the editor of at-Tabari's text unpacks the root. Lahw, it says, is whatever a person amuses himself and plays with and is occupied by, of desire, delight and the like; to say alhani fulan 'an kadha means he occupied me and made me forget it. The others gloss it plainly as occupation: al-Baghawi and al-Muyassar gloss tulhikum as la tashghalkum, let them not occupy you, Ibn Kathir speaks of wealth and children occupying the believers, and al-Qurtubi paraphrases do not be busied with your wealth.",
            "bn": "তাবারীর গ্রন্থের সম্পাদক এক টীকায় ধাতুটির অর্থ খুলে বলেন। তাঁর ভাষায়, লাহ্ও হলো যা নিয়ে মানুষ মজা করে, খেলে আর ব্যস্ত থাকে, তা কামনা হোক বা আনন্দ বা এ জাতীয় কিছু। 'আলহানী ফুলান আন কাযা' মানে অমুক আমাকে সেই কাজ থেকে আটকে রাখল আর ভুলিয়ে দিল। অন্যরা সোজাসুজি অর্থ করেন: ব্যস্ত রাখা। বাগাভী আর মুয়াসসার 'তুলহিকুম'-এর অর্থ করেন 'লা তাশগালকুম', যেন তোমাদের ব্যস্ত করে না রাখে। ইবন কাসীর বলেন সম্পদ ও সন্তানের হাতে মুমিনদের ব্যস্ত হয়ে পড়ার কথা, আর কুরতুবীর ভাষ্য: সম্পদ নিয়ে মেতে থেকো না।"
          },
          {
            "en": "Wa man yaf'al dhalika, and whoever does that: at-Tabari and as-Sa'di both gloss it as whoever is diverted by his wealth and children from the remembrance of Allah. The clause names an act, not a possession. Ma'arif al-Qur'an makes the point directly: love of wealth and children to some extent is not bad, and being engaged with them to a degree is permissible and even obligatory. The dividing line it draws is a single test: that love must not turn a person away from the remembrance of Allah.",
            "bn": "'ওয়া মাই ইয়াফআল যালিকা', আর যে এমন করে। তাবারী আর সা'দী দুজনেই এর ব্যাখ্যা দেন: যাকে তার সম্পদ ও সন্তান আল্লাহর জিকির থেকে বিমুখ করে। বাক্যাংশটি নাম নেয় একটা কাজের, কোনো মালিকানার নয়। মাআরিফুল কুরআন কথাটা সরাসরি বলে। সম্পদ ও সন্তানের প্রতি কিছুটা ভালোবাসা মন্দ নয়। একটা মাত্রা পর্যন্ত এদের নিয়ে ব্যস্ত থাকা শুধু জায়েজই নয়, ওয়াজিবও। মাআরিফ সীমারেখা টানে একটিমাত্র পরীক্ষায়: এই ভালোবাসা যেন মানুষকে আল্লাহর জিকির থেকে সরিয়ে না দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Wealth and Children",
          "bn": "কেন সম্পদ আর সন্তান"
        },
        "p": [
          {
            "en": "Why name these two? Ma'arif al-Qur'an answers that wealth and children are the two major things in this world that divert a person from the remembrance of Allah, which is why they are named in particular; otherwise, it says, the verse refers to all the means of worldly enjoyment. Ibn Kathir widens it the same way. Whoever is diverted by the enjoyment of the life of this world and its adornment, he writes, from what he was created for, the obedience of his Lord and His remembrance, is among the losers.",
            "bn": "এই দুটির নাম কেন? মাআরিফুল কুরআনের উত্তর: দুনিয়াতে মানুষকে আল্লাহর জিকির থেকে সরিয়ে নেওয়ার প্রধান দুই জিনিস সম্পদ আর সন্তান, তাই আলাদা করে এদেরই নাম এসেছে। নইলে, মাআরিফ বলে, আয়াতের লক্ষ্য দুনিয়ার ভোগের সব উপকরণ। ইবন কাসীরও পরিধিটা একইভাবে বাড়ান। তিনি লেখেন, মানুষকে সৃষ্টি করা হয়েছে রবের আনুগত্য আর তাঁর জিকিরের জন্য। দুনিয়ার জীবনের ভোগ আর তার সাজসজ্জা যাকে এ থেকে ভুলিয়ে রাখে, সে ক্ষতিগ্রস্তদের একজন।"
          },
          {
            "en": "Two of the commentators read a command inside the prohibition. Ibn Kathir opens by saying that Allah is ordering His believing servants to remember Him much, and forbidding them to let wealth and children occupy them away from it. As-Sa'di opens almost identically: Allah commands His believing servants to remember Him abundantly, for in that is profit, success and much good. The verse is worded as a negative, let them not divert you, but in both readings its positive face is a remembrance that is frequent, not occasional.",
            "bn": "দুজন তাফসীরকার নিষেধের ভেতরে একটা আদেশও পড়েন। ইবন কাসীর শুরুই করেন এ কথা দিয়ে: আল্লাহ তাঁর মুমিন বান্দাদের হুকুম দিচ্ছেন বেশি বেশি তাঁর জিকির করতে, আর নিষেধ করছেন সম্পদ ও সন্তান যেন তাদের সে কাজ থেকে আটকে না রাখে। সা'দীর শুরুও প্রায় হুবহু। আল্লাহ মুমিনদের আদেশ দেন বেশি করে তাঁর জিকির করতে, কারণ তাতে আছে লাভ, সাফল্য আর অঢেল কল্যাণ। আয়াতের শব্দ নেতিবাচক: যেন বিমুখ না করে। কিন্তু দুজনের পাঠেই এর ইতিবাচক দিকটা হলো এমন জিকির, যা মাঝেমধ্যে নয়, বারবার।"
          },
          {
            "en": "As-Sa'di explains why the warning is needed. Love of wealth and children, he says, is something most souls are innately disposed to, so they put it ahead of the love of Allah, and in that lies the great loss. He then cites 64:15: your wealth and your children are only a trial, and with Allah is a great reward. That verse has its own article on what the trial means. Here as-Sa'di uses it to close his comment: the two things named are a test, and a reward is set beside it.",
            "bn": "সতর্কবাণীর প্রয়োজনটা কোথায়, সা'দী তাও বলেন। বেশির ভাগ মানুষের স্বভাবেই সম্পদ আর সন্তানের ভালোবাসা গেঁথে দেওয়া। ফলে তারা এই ভালোবাসাকে আল্লাহর ভালোবাসার আগে রাখে, আর সেখানেই বিরাট ক্ষতি। এরপর তিনি ৬৪:১৫ আয়াত উদ্ধৃত করেন: তোমাদের সম্পদ ও সন্তান তো কেবল পরীক্ষা, আর আল্লাহর কাছে আছে মহাপুরস্কার। পরীক্ষার অর্থ নিয়ে ওই আয়াতের আলাদা প্রবন্ধ আছে। এখানে সা'দী আয়াতটি দিয়ে নিজের আলোচনা শেষ করেন: যে দুটির নাম এল, তা এক পরীক্ষা, আর তার পাশেই রাখা আছে পুরস্কার।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Remembrance Covers",
          "bn": "জিকিরের পরিধি কতদূর"
        },
        "p": [
          {
            "en": "The widest question in the verse is what dhikr Allah means here. At-Tabari, after explaining the verb, introduces one reading with the formula it is said: that the remembrance of Allah in this place means the five prayers. He gives it a chain ending at ad-Dahhak, who said of this verse: the five prayers. Al-Baghawi states the same reading more broadly, attributing it to the commentators as a body: they say it means the five prayers.",
            "bn": "আয়াতের সবচেয়ে বড় প্রশ্ন: এখানে 'যিকরুল্লাহ' মানে কী? ক্রিয়াটির ব্যাখ্যার পর তাবারী 'বলা হয়' শব্দে একটি মত আনেন: এই জায়গায় আল্লাহর জিকির মানে পাঁচ ওয়াক্ত নামাজ। মতটির সনদ তিনি পৌঁছে দেন দাহহাক পর্যন্ত, যিনি এ আয়াত সম্পর্কে বলেছিলেন: পাঁচ ওয়াক্ত নামাজ। বাগাভী একই মত বলেন আরও ব্যাপক ভঙ্গিতে। তিনি একে মুফাসসিরদের সবার কথা বলে উল্লেখ করেন: তাঁরা বলেন, এর মানে পাঁচ ওয়াক্ত নামাজ।"
          },
          {
            "en": "Al-Qurtubi lays out the fullest list. From the remembrance of Allah, he writes, means from Hajj and zakah. It is said: from reciting the Qur'an. It is said: from keeping up remembrance continually. It is said: from the five prayers, which he attributes to ad-Dahhak. And al-Hasan said: all the obligations, as though the verse said from obedience to Allah. Ma'arif al-Qur'an, citing al-Qurtubi, repeats the range, naming Hasan Basri for all forms of obedience and worship, and calls that view the most comprehensive interpretation.",
            "bn": "সবচেয়ে পূর্ণ তালিকা দেন কুরতুবী। তিনি লেখেন, আল্লাহর জিকির থেকে মানে হজ আর যাকাত থেকে। বলা হয়, কুরআন তিলাওয়াত থেকে। বলা হয়, সারাক্ষণ জিকিরে লেগে থাকা থেকে। বলা হয়, পাঁচ ওয়াক্ত নামাজ থেকে, আর এ মতটি তিনি দাহহাকের বলে উল্লেখ করেন। আর হাসান বলেছেন, সব ফরজ থেকে, যেন আয়াতটি বলছে আল্লাহর আনুগত্য থেকে। মাআরিফুল কুরআন কুরতুবীর বরাতে এই পরিসরটা আবার তুলে ধরে। হাসান বসরীর নাম নিয়ে সে বলে, তাঁর মতে জিকির মানে সব ধরনের আনুগত্য ও ইবাদত, আর এ মতকে সে বলে সবচেয়ে ব্যাপক ব্যাখ্যা।"
          },
          {
            "en": "The shorter commentaries lean toward breadth without naming anyone. Al-Muyassar renders the phrase as the worship of Allah and obedience to Him, and Ibn Kathir as the obedience of his Lord and His remembrance. So the readings on record are the five prayers, which carries a chain and al-Baghawi's attribution to the commentators; Hajj and zakah; the Qur'an; continual remembrance; and all the obligations, al-Hasan's view. Each belongs to whoever holds it, and the article leaves them side by side.",
            "bn": "সংক্ষিপ্ত তাফসীরগুলো কারও নাম না নিয়েই ব্যাপক অর্থের দিকে ঝোঁকে। মুয়াসসার শব্দটির অর্থ করে আল্লাহর ইবাদত ও আনুগত্য, আর ইবন কাসীর করেন রবের আনুগত্য ও তাঁর জিকির। তাহলে লিখিত মতগুলো দাঁড়াল এই: পাঁচ ওয়াক্ত নামাজ, যার পেছনে আছে সনদ আর বাগাভীর ভাষায় মুফাসসিরদের সমর্থন; হজ ও যাকাত; কুরআন; সারাক্ষণের জিকির; আর হাসানের মত, সব ফরজ। প্রতিটি মত যাঁর, তাঁরই। প্রবন্ধটি সেগুলো পাশাপাশি রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Trade That Does Not Divert",
          "bn": "যে ব্যবসা বিমুখ করে না"
        },
        "p": [
          {
            "en": "Al-Baghawi pairs this verse with another and calls it its counterpart: 24:37, rijalun la tulhihim tijaratun wa la bay'un 'an dhikri-llah, men whom neither trade nor sale diverts from the remembrance of Allah. The verse itself goes on to name the establishing of prayer and the giving of zakah. The two verses share the verb and the whole phrase 'an dhikri-llah. What changes is the grammar: 63:9 is a prohibition addressed to believers, while 24:37 describes men who already live it.",
            "bn": "বাগাভী এ আয়াতের পাশে আরেকটি আয়াত রাখেন এবং সেটিকে এর সমতুল্য বলেন: ২৪:৩৭, 'রিজালুল লা তুলহীহিম তিজারাতুউ ওয়ালা বাইউন আন যিকরিল্লাহ', এমন লোক, যাদের ব্যবসা আর কেনাবেচা আল্লাহর জিকির থেকে বিমুখ করে না। আয়াতটি নিজেও এরপর নামাজ কায়েম আর যাকাত দেওয়ার কথা বলে। দুই আয়াতে ক্রিয়া এক, 'আন যিকরিল্লাহ' কথাটিও হুবহু এক। তফাত বাক্যের ধরনে। ৬৩:৯ মুমিনদের প্রতি নিষেধ, আর ২৪:৩৭ এমন মানুষের বর্ণনা, যারা কথাটা আগেই জীবনে ধরে রেখেছে।"
          },
          {
            "en": "Set side by side, the pair also differ in what does the diverting. Here it is wealth and children, what a person holds and whom he raises; in 24:37 it is trade and sale, the daily work of earning. And 24:37 does not praise men who have no trade. Its wording names trade and sale as things that fail to divert them, not as things absent, which matches the line Ma'arif draws in this verse between permitted engagement and the kind that crowds out remembrance.",
            "bn": "পাশাপাশি রাখলে আরেকটা তফাত চোখে পড়ে: কী বিমুখ করে। এখানে সম্পদ আর সন্তান, অর্থাৎ মানুষ যা আগলে রাখে আর যাদের বড় করে তোলে। ২৪:৩৭ আয়াতে ব্যবসা আর কেনাবেচা, অর্থাৎ রোজকার উপার্জনের খাটুনি। আর ২৪:৩৭ আয়াত ব্যবসাহীন মানুষের প্রশংসা করে না। আয়াতের শব্দে ব্যবসা ও কেনাবেচা অনুপস্থিত নয়, শুধু তা তাদের বিমুখ করতে পারে না। এ আয়াতে মাআরিফ জায়েজ ব্যস্ততা আর জিকির ঠেলে সরানো ব্যস্ততার মাঝে যে সীমারেখা টানে, তার সঙ্গে এটা মিলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Cheated of Their Share",
          "bn": "প্রাপ্য অংশে যারা ঠকল"
        },
        "p": [
          {
            "en": "Then the verdict: fa-ula'ika humu-l-khasirun, then those are the losers. At-Tabari glosses it as al-maghbunun huzuzahum min karamati-llahi wa rahmatih: those cheated of their shares of Allah's honour and His mercy. Al-Muyassar uses exactly the same words. The maghbun is the one who comes off worse in an exchange, so in their wording the loss is not a misfortune that simply falls on a person but a bad bargain, with a share in Allah's honour and mercy given up.",
            "bn": "এরপর রায়: 'ফাউলাইকা হুমুল খাসিরূন', তবে তারাই ক্ষতিগ্রস্ত। তাবারী এর ব্যাখ্যা দেন: 'আল-মাগবূনূনা হুযূযাহুম মিন কারামাতিল্লাহি ওয়া রাহমাতিহ', আল্লাহর সম্মান আর রহমত থেকে নিজেদের প্রাপ্য অংশে যারা ঠকেছে। মুয়াসসারও হুবহু একই শব্দ ব্যবহার করে। মাগবূন সেই লোক, লেনদেনে যে ঠকে যায়। তাই তাঁদের ভাষায় ক্ষতিটা হঠাৎ ঘাড়ে এসে পড়া কোনো বিপদ নয়। এ এক ঠকে যাওয়া লেনদেন, যাতে হাতছাড়া হয়েছে আল্লাহর সম্মান ও রহমতের ভাগ।"
          },
          {
            "en": "The others name what was traded away. Ma'arif al-Qur'an says the sentence applies because such a person has sold the great and eternal reward of the Hereafter for the petty and perishable enjoyment of this world, and asks what loss could be greater. As-Sa'di calls them losers of eternal happiness and lasting bliss, because they preferred what perishes to what remains. In his opening line he had already put the profit on the other side: in the remembrance of Allah are gain, success and much good.",
            "bn": "কিসের বদলে কী হাতছাড়া হলো, অন্যরা তা বলে দেন। মাআরিফুল কুরআন বলে, এমন মানুষের বেলায় 'তারাই ক্ষতিগ্রস্ত' কথাটি খাটে, কারণ সে আখিরাতের বিশাল ও চিরস্থায়ী প্রতিদান বেচে দিয়েছে দুনিয়ার তুচ্ছ আর নশ্বর ভোগের বিনিময়ে। তারপর প্রশ্ন রাখে, এর চেয়ে বড় ক্ষতি আর কী হতে পারে! সা'দী বলেন, তারা হারিয়েছে চিরন্তন সৌভাগ্য আর স্থায়ী নিয়ামত, কারণ যা টিকে থাকবে তার বদলে যা ফুরিয়ে যাবে, তাকেই তারা বেছে নিয়েছে। শুরুর বাক্যেই তিনি লাভটা রেখেছিলেন উল্টো পাল্লায়: আল্লাহর জিকিরে আছে লাভ, সাফল্য আর অঢেল কল্যাণ।"
          },
          {
            "en": "Ibn Kathir gives the loss its sharpest edge. Those diverted, he writes, are among the losers who lose themselves and their families on the Day of Resurrection. In his wording, then, the family that drew a person away from remembrance is counted among what he loses. The verse points twice in its own construction, first ula'ika, those, and then hum, they, so the label settles on the ones who let the diversion happen. And it is held up in front of people who have just been addressed as believers.",
            "bn": "ক্ষতির সবচেয়ে তীক্ষ্ণ ছবি দেন ইবন কাসীর। যারা বিমুখ হলো, তিনি লেখেন, তারা সেই ক্ষতিগ্রস্তদের দলে, যারা কিয়ামতের দিন নিজেদের আর নিজেদের পরিবারকে হারাবে। তাঁর ভাষায় তাহলে যে পরিবার মানুষকে জিকির থেকে টেনে সরিয়েছিল, সেই পরিবারই ওঠে তার হারানোর তালিকায়। আয়াতের গঠনও দুবার আঙুল তোলে। প্রথমে 'উলাইকা', তারা, তারপর আবার 'হুম', তারাই। ফলে তকমাটা গিয়ে বসে তাদের গায়ে, যারা বিমুখ হতে দিয়েছে। আর তকমাটা তুলে ধরা হয় তাদেরই সামনে, যাদের এইমাত্র ডাকা হয়েছে মুমিন বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report, No Licence",
          "bn": "বর্ণনা নেই, অনুমতিও নেই"
        },
        "p": [
          {
            "en": "None of the eight commentaries fetched for this verse attaches a hadith to it or reports an occasion of its revelation, so the article quotes none. The link to the hypocrites that al-Qurtubi and Ma'arif al-Qur'an draw rests on the verse's placement after 63:1 to 63:8 and on the words of 63:7, not on a narration about why 63:9 came down. The next verse, on spending before death arrives, has its own article.",
            "bn": "এ আয়াতের জন্য সংগৃহীত আটটি তাফসীরের কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয় না, নাজিলের কোনো প্রেক্ষাপটও বর্ণনা করে না। তাই প্রবন্ধে কোনো হাদীস উদ্ধৃত হলো না। কুরতুবী আর মাআরিফুল কুরআন মুনাফিকদের সঙ্গে যে যোগসূত্র টানেন, তার ভিত্তি আয়াতের অবস্থান, ৬৩:১ থেকে ৬৩:৮ আয়াতের পরে, আর ৬৩:৭ আয়াতের শব্দ। ৬৩:৯ কেন নাজিল হলো, সে বিষয়ে কোনো বর্ণনা এর ভিত্তি নয়। মৃত্যুর আগে খরচ করার কথা বলা পরের আয়াতটির আলাদা প্রবন্ধ আছে।"
          },
          {
            "en": "One more thing needs saying plainly. Verses 63:1 to 63:8 describe a group the Qur'an condemns, and they describe what the text describes; they license nothing against any living person or community, and give no one the right to call a fellow Muslim a hypocrite. The other reading al-Qurtubi records, that 63:9 is addressed to the hypocrites, is a reading of the text, not a tool for sorting believers. The verse turns its warning inward, toward the reader's own wealth and children, and that is where it is meant to stay.",
            "bn": "আরেকটি কথা সোজাসুজি বলা দরকার। ৬৩:১ থেকে ৬৩:৮ আয়াতে এমন এক দলের বর্ণনা, কুরআন যাদের নিন্দা করেছে। আয়াতগুলো শুধু সেটুকুই বর্ণনা করে, যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো অনুমতি দেয় না, কোনো মুসলিম ভাইকে মুনাফিক ডাকার অধিকারও কাউকে দেয় না। কুরতুবী যে ভিন্ন মতটি উল্লেখ করেন, অর্থাৎ ৬৩:৯ মুনাফিকদের উদ্দেশে বলা, সেটা পাঠের একটি ব্যাখ্যা, মুমিনদের বাছাই করার হাতিয়ার নয়। আয়াতটি সতর্কবাণী ঘুরিয়ে দেয় ভেতরের দিকে, পাঠকের নিজের সম্পদ আর নিজের সন্তানের দিকে। সতর্কবাণীর জায়গা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding Without Being Held",
          "bn": "আগলে রাখা, আটকে না যাওয়া"
        },
        "p": [
          {
            "en": "Each reading on record turns the verse into a concrete check. On the five-prayers reading, the question is whether the prayer still comes at its time when work or family is pressing. On al-Hasan's reading of all the obligations, it is whether a duty is being deferred for the sake of what a person holds. On the reading of the Qur'an, it is whether recitation survives a busy week. None of these asks a person to love wealth and children less than Ma'arif allows. They ask which gives way when they collide.",
            "bn": "লিখিত প্রতিটি মত আয়াতটিকে একেকটা বাস্তব পরীক্ষায় পরিণত করে। পাঁচ ওয়াক্ত নামাজের মত ধরলে প্রশ্নটা হলো: কাজ বা পরিবারের চাপের মধ্যেও নামাজ কি সময়মতো আসে? হাসানের মত, সব ফরজ, ধরলে প্রশ্ন: হাতে যা আছে তার খাতিরে কোনো দায়িত্ব কি পিছিয়ে যাচ্ছে? কুরআনের মত ধরলে প্রশ্ন: ব্যস্ত এক সপ্তাহ পেরিয়েও কি তিলাওয়াত টিকে থাকে? এর কোনোটিই মাআরিফ যতটুকু অনুমতি দেয়, তার চেয়ে কম ভালোবাসতে বলে না। শুধু জানতে চায়, মুখোমুখি হলে কোনটা জায়গা ছেড়ে দেয়।"
          },
          {
            "en": "The very next verse tells the same believers to spend from what Allah has provided before death reaches one of them. Taken with the opening lines of Ibn Kathir and as-Sa'di, the shape of 63:9 is simple: remember Allah much, and do not let what you hold and whom you love push that remembrance aside. Whatever dhikr Allah is taken to mean here, the verse leaves the reader with one question for an ordinary day: which way did the scale tip?",
            "bn": "ঠিক পরের আয়াত একই মুমিনদের বলে, তাদের কারও মৃত্যু আসার আগেই আল্লাহর দেওয়া রিজিক থেকে খরচ করতে। ইবন কাসীর আর সা'দীর শুরুর কথাগুলো পাশে রাখলে ৬৩:৯ আয়াতের চেহারা সরল: আল্লাহর জিকির করো বেশি বেশি, আর যা আগলে রাখো আর যাদের ভালোবাসো, তারা যেন সেই জিকিরকে ঠেলে সরিয়ে না দেয়। এখানে 'যিকরুল্লাহ'-র যে অর্থই ধরা হোক, আয়াতটি পাঠকের হাতে সাধারণ এক দিনের জন্য একটিই প্রশ্ন রেখে যায়: পাল্লাটা আজ কোন দিকে ঝুঁকল?"
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
