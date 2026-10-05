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
            "bn": "আয়াতের শুরু যালিকা শব্দে, অর্থাৎ 'ওটা'। শব্দটা আগে বলা কোনো কথার দিকে ইঙ্গিত করে। কোন কথার দিকে, তা নিয়ে তাফসীরকারদের মত আলাদা। তাবারী একে মেলান ৬৩:২ আয়াতের শেষ অংশের সঙ্গে, যেখানে বলা হয়েছে তারা যা করত তা কতই না মন্দ। তাঁর ব্যাখ্যায়, এই মুনাফিকরা শপথকে ঢাল বানিয়েছিল, কারণ তারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনে নিয়ে পরে কুফরি করেছিল। মুয়াসসার ৬৩:২ ও ৬৩:৩ আয়াতের তাফসীর একসঙ্গে করে এবং দুটোকে একইভাবে জোড়ে। তাদের শপথ ছিল জবাবদিহি থেকে বাঁচার আড়াল, আর তার কারণ, তারা বাইরে ঈমান এনে ভেতরে কুফরি করেছিল।"
          },
          {
            "en": "Ibn Kathir points the word elsewhere. In his reading, that is the hypocrisy itself: it was decreed for them because they returned from faith to disbelief and exchanged guidance for misguidance. As-Sa'di reads it as that which made hypocrisy look fair to them, and gives the cause as their not standing firm on faith. So one small word carries three readings: the reason for their evil conduct, the reason hypocrisy was decreed for them, and the reason it came to look attractive to them. The article keeps all three without choosing among them.",
            "bn": "ইবন কাসীর শব্দটাকে অন্য দিকে নেন। তাঁর ব্যাখ্যায় 'ওটা' মানে খোদ নিফাক। তাদের জন্য নিফাক নির্ধারিত হয়েছিল, কারণ তারা ঈমান থেকে কুফরের দিকে ফিরে গিয়েছিল আর হিদায়াতের বদলে গোমরাহি বেছে নিয়েছিল। সা'দীর মতে 'ওটা' হলো সেই জিনিস, যা নিফাককে তাদের চোখে সুন্দর করে তুলেছিল। কারণ হিসেবে তিনি বলেন, তারা ঈমানের উপর অটল থাকে না। ছোট্ট একটা শব্দে তাই তিনটি পাঠ: তাদের মন্দ আচরণের কারণ, তাদের জন্য নিফাক নির্ধারিত হওয়ার কারণ, আর নিফাক তাদের কাছে আকর্ষণীয় লাগার কারণ। এ লেখা তিনটিকেই রাখছে, কোনোটাকে বেছে নিচ্ছে না।"
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
            "bn": "আমানূ সুম্মা কাফারূ: তারা ঈমান আনল, তারপর কুফরি করল। কেমন ছিল সেই ঈমান? কুরতুবী শুরু করেন গোটা আয়াত সম্পর্কে একটা কথা দিয়ে: এখানে আল্লাহ জানিয়ে দিচ্ছেন যে মুনাফিক কাফির। তারপর আসে তাঁর প্রথম ব্যাখ্যা। তারা মুখে স্বীকার করেছিল, তারপর অন্তরে কুফরি করেছিল। মুয়াসসারও নিজের ভাষায় একই কথা বলে: তারা বাইরে ঈমান এনেছিল, আর ভেতরে কুফরি করেছিল। এই ব্যাখ্যা অনুযায়ী সেই ঈমান ছিল মুখের ঘোষণা মাত্র, অন্তর তা কখনো ধারণ করেনি।"
          },
          {
            "en": "At-Tabari closes his comment with Qatada, whom he quotes with a full chain. Qatada's words: they affirmed that there is no god but Allah and that Muhammad is the Messenger of Allah, while their hearts were rejecting it and refusing it. In Qatada's wording the rejection sits beside the affirmation, as a circumstance of it, rather than coming after it. The profession and the refusal ran together. The verse's then, on this account, does not have to mean a later season of doubt. It can mark the gap between what was said and what was held.",
            "bn": "তাবারী তাঁর আলোচনা শেষ করেন কাতাদার কথা দিয়ে, পুরো সনদসহ। কাতাদা বলেন: তারা স্বীকার করেছিল যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ আল্লাহর রসূল, অথচ তাদের অন্তর তা অস্বীকার করছিল, মানতে রাজি হচ্ছিল না। কাতাদার কথায় অস্বীকারটা স্বীকারোক্তির পরে আসেনি। দুটো চলছিল পাশাপাশি, অস্বীকারটা ছিল স্বীকারোক্তিরই সঙ্গী অবস্থা। এই ব্যাখ্যায় আয়াতের 'তারপর' শব্দের মানে পরবর্তী কোনো সন্দেহের মৌসুম হওয়া জরুরি নয়। তা বোঝাতে পারে মুখের কথা আর মনের অবস্থার মাঝের ফাঁক।"
          },
          {
            "en": "Al-Baghawi gives the gloss a setting. They believed: they affirmed with the tongue when they saw the believers. Then they disbelieved: when they were alone with the idolaters. In his reading the then marks a change of company, with a different face for each room. It fits the scene that opens the surah, in 63:1, where the hypocrites come to the Prophet ﷺ and say, we testify that you are the Messenger of Allah. Al-Baghawi then glosses the sealing as with disbelief, and the lost understanding as of faith.",
            "bn": "বাগাভী ব্যাখ্যাটাকে একটা পরিবেশের মধ্যে বসান। তারা ঈমান আনল মানে, মু'মিনদের দেখলে মুখে স্বীকার করত। তারপর কুফরি করল মানে, যখন মুশরিকদের সঙ্গে একান্তে মিলিত হতো। তাঁর ব্যাখ্যায় 'তারপর' বোঝায় সঙ্গী বদল, আর প্রতিটি মজলিসের জন্য আলাদা চেহারা। সূরার শুরুর দৃশ্যের সঙ্গে এটা মেলে। ৬৩:১ আয়াতে মুনাফিকরা নবী ﷺ-এর কাছে এসে বলে, আমরা সাক্ষ্য দিচ্ছি আপনি আল্লাহর রসূল। এরপর বাগাভী মোহরের ব্যাখ্যা দেন কুফরের মোহর বলে, আর যা তারা বোঝে না তা হলো ঈমান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Faith Entered and Left",
          "bn": "ঈমানে ঢুকে বেরিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "Other wording in the sources takes believed more literally. Al-Qurtubi records, under it was said, that the verse came down about people who believed and then apostatized. Ibn Kathir speaks of their return from faith to disbelief. As-Sa'di says they do not stand firm on faith; rather, they believed and then disbelieved. At-Tabari's own gloss reads the same way: they affirmed the truth of Allah and His Messenger, then disbelieved through their doubt about it and their denial of it. Here there was an affirmation of some kind, and it gave way.",
            "bn": "উৎসগুলোর অন্য কিছু ভাষ্যে 'ঈমান আনল' কথাটাকে আরও আক্ষরিক অর্থে নেওয়া হয়েছে। কুরতুবী 'বলা হয়' কথাটি দিয়ে উল্লেখ করেন, আয়াতটি নাযিল হয়েছিল এমন লোকদের ব্যাপারে, যারা ঈমান এনে পরে মুরতাদ হয়ে যায়। ইবন কাসীর বলেন ঈমান থেকে কুফরের দিকে তাদের ফিরে যাওয়ার কথা। সা'দী বলেন, তারা ঈমানের উপর অটল থাকে না, বরং ঈমান আনে, তারপর কুফরি করে। তাবারীর নিজের ব্যাখ্যাও একই সুরে: তারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনেছিল, তারপর এ ব্যাপারে সন্দেহ আর অস্বীকারের মধ্য দিয়ে কুফরি করেছিল। এখানে কোনো না কোনো স্বীকৃতি ছিল, আর তা ভেঙে পড়েছিল।"
          },
          {
            "en": "So the sources hold two pictures. In the first, the faith was a mask from the start, worn before the believers and taken off away from them: al-Qurtubi's first gloss, the Muyassar, al-Baghawi and Qatada. In the second, a faith of some kind was entered and then left: al-Qurtubi's it was said, Ibn Kathir, as-Sa'di and at-Tabari's own wording. Al-Qurtubi is the one who sets both side by side. The article does not decide between them. Both arrive at the same next word in the verse, the sealing.",
            "bn": "উৎসগুলোতে তাই দুটি ছবি পাওয়া যায়। প্রথম ছবিতে ঈমান শুরু থেকেই একটা মুখোশ, মু'মিনদের সামনে পরা আর তাদের আড়ালে খুলে ফেলা। এ ছবি কুরতুবীর প্রথম ব্যাখ্যায়, মুয়াসসারে, বাগাভীতে আর কাতাদার কথায়। দ্বিতীয় ছবিতে কোনো এক রকমের ঈমানে মানুষ ঢুকেছিল, তারপর বেরিয়ে গেছে। এটা কুরতুবীর 'বলা হয়' অংশে, ইবন কাসীরে, সা'দীতে আর তাবারীর নিজের ভাষায়। দুটোকে পাশাপাশি রেখেছেন কুরতুবী। এ লেখা কোনো পক্ষে রায় দিচ্ছে না। দুই ব্যাখ্যাই গিয়ে পৌঁছায় আয়াতের পরের কথায়, অর্থাৎ মোহরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sealing in the Sources' Words",
          "bn": "মোহরের কথা তাফসীরের ভাষায়"
        },
        "p": [
          {
            "en": "Fa-tubi'a 'ala qulubihim: so their hearts were sealed. The verb is passive and the doer is not named in it. At-Tabari supplies him and the manner: Allah placed on their hearts a seal, with disbelief, against faith. He then says that he has explained in another place the description of the sealing of the heart, with its supporting evidence and the views of the scholars, and so does not repeat it here. This article follows his lead and does not go beyond the wording the commentators give on this verse.",
            "bn": "ফাতুবি'আ আলা কুলূবিহিম: ফলে তাদের অন্তরে মোহর লেগে গেল। ক্রিয়াটি কর্মবাচ্যে, কে মোহর লাগালেন তা এখানে বলা নেই। তাবারী সেটা খুলে বলেন, সঙ্গে মোহরের ধরনও: আল্লাহ তাদের অন্তরে কুফরের মোহর এঁটে দিলেন, যা ঈমানকে আটকে রাখে। তারপর তিনি জানান, অন্তরে মোহর লাগার বিবরণ তিনি অন্য জায়গায় প্রমাণ আর আলেমদের মতামতসহ ব্যাখ্যা করেছেন, তাই এখানে আর পুনরাবৃত্তি করছেন না। এ লেখাও তাঁর পথ ধরছে। এ আয়াতে তাফসীরকারেরা যে ভাষা ব্যবহার করেছেন, তার বাইরে যাচ্ছে না।"
          },
          {
            "en": "The others keep close to that wording. Al-Qurtubi: that is, a seal was set on them, with disbelief. Al-Baghawi: with disbelief. The Muyassar names the cause outright: Allah sealed their hearts because of their disbelief. In the order of the verse the seal comes after the disbelief and is joined to it by fa, so, and none of the sources fetched here places it first. Al-Qurtubi also records that Zayd ibn 'Ali read the clause as fa-taba'a Allahu 'ala qulubihim, so Allah sealed their hearts, with the doer named.",
            "bn": "বাকিরা মোটামুটি একই ভাষায় থাকেন। কুরতুবী: অর্থাৎ অন্তরগুলোতে মোহর এঁটে দেওয়া হলো, কুফর দিয়ে। বাগাভী: কুফর দিয়ে। মুয়াসসার কারণটা সরাসরি বলে দেয়: তাদের কুফরের কারণে আল্লাহ তাদের অন্তরে মোহর লাগালেন। আয়াতের ক্রমেও মোহর আসে কুফরের পরে, আর দুটোকে জোড়ে 'ফা', অর্থাৎ 'ফলে'। এখানে সংগৃহীত কোনো তাফসীর মোহরকে আগে বসায়নি। কুরতুবী আরও উল্লেখ করেন, যায়দ ইবন আলী এ অংশটি পড়েছেন ফাতাবা'আল্লাহু আলা কুলূবিহিম, অর্থাৎ আল্লাহ তাদের অন্তরে মোহর লাগালেন। সেখানে কর্তার নাম উল্লেখ আছে।"
          },
          {
            "en": "What does the seal do? Ibn Kathir answers in plain terms. No guidance reaches their hearts and no good gets through to them, so the hearts neither take anything in nor find the way. His English abridgement puts it the same way: they cannot comprehend the guidance, nor can any goodness reach their hearts. As-Sa'di describes the seal as such that good never enters them. The commentators describe a closed door. Their concern is with what can no longer come in, rather than with the mechanics of the closing.",
            "bn": "মোহর কী করে? ইবন কাসীর সোজা কথায় উত্তর দেন। কোনো হিদায়াত তাদের অন্তরে পৌঁছায় না, কোনো কল্যাণ ভেতরে ঢুকতে পারে না। ফলে সেই অন্তর কিছু ধরেও রাখে না, পথও পায় না। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত রূপেও একই কথা: তারা হিদায়াত বুঝতে পারে না, কোনো কল্যাণও তাদের অন্তরে পৌঁছায় না। সা'দী মোহরের বর্ণনা দেন এভাবে, কল্যাণ আর কখনো তাতে প্রবেশ করে না। তাফসীরকারেরা যেন এক বন্ধ দরজার ছবি আঁকেন। বন্ধ হওয়ার কলকবজা নয়, তাঁদের মনোযোগ হলো ভেতরে আর কী ঢুকতে পারে না, সেদিকে।"
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
            "bn": "ফাহুম লা ইয়াফকাহূন: ফলে তারা বোঝে না। কী বোঝে না, আয়াত তা বলেনি। সেই ফাঁকটা তাফসীরকারেরা পূরণ করেন ভিন্ন ভিন্নভাবে। তাবারী: আল্লাহ তাদের অন্তরে মোহর লাগিয়েছেন বলে তারা সঠিক আর ভুল, হক আর বাতিলের ফারাক ধরতে পারে না। কুরতুবী: তারা ঈমান বোঝে না, কল্যাণও বোঝে না। বাগাভী: তারা ঈমান বোঝে না। এসব ব্যাখ্যায় যা হারিয়ে যায় তা হলো সত্য-মিথ্যা আলাদা করার ক্ষমতা, আর ঈমানকে ঈমান বলে চিনতে পারার ক্ষমতা।"
          },
          {
            "en": "The Muyassar and as-Sa'di turn the object towards the hypocrites' own good. The Muyassar: they do not grasp what holds their own welfare. As-Sa'di: they do not understand what benefits them, and they do not take in what would bring about their good. Ibn Kathir joins the two: their hearts neither take in nor are guided. So the loss is described in two ways at once, as a loss of the truth and as a loss of the hypocrites' own interest, and the sources do not set the two against each other.",
            "bn": "মুয়াসসার আর সা'দী 'কী বোঝে না' প্রশ্নের উত্তর খোঁজেন মুনাফিকদের নিজেদের ভালোর মধ্যে। মুয়াসসার বলে, তাদের নিজেদের মঙ্গল কিসে, তা তারা ধরতে পারে না। সা'দী বলেন, কিসে তাদের উপকার, তা তারা বোঝে না, আর যা তাদের কল্যাণ বয়ে আনত, তা মনে ধরে রাখে না। ইবন কাসীর দুটোকে মেলান: তাদের অন্তর কিছু ধরেও রাখে না, হিদায়াতও পায় না। ক্ষতিটার বর্ণনা তাই দুই দিক থেকে আসে। হারায় সত্য, আবার হারায় নিজের মঙ্গলও। উৎসগুলো এ দুটোকে পরস্পরের বিপরীতে দাঁড় করায় না।"
          },
          {
            "en": "The phrase does not stay in this verse. The same words, la yafqahun, return in 63:7, but the hypocrites do not understand, and 63:8 closes with la ya'lamun, they do not know. The surah keeps coming back to understanding as the thing these people lack. Their words were not the problem. In 63:1 they say the testimony itself, and Ibn Kathir's English abridgement notes that what they said is true about the Prophet ﷺ; Allah calls them liars because they did not believe inwardly what they declared outwardly. The verse places the damage there, in the heart.",
            "bn": "শব্দগুচ্ছটি এ আয়াতেই থেমে থাকে না। ৬৩:৭ আয়াতে আবার আসে লা ইয়াফকাহূন, কিন্তু মুনাফিকরা বোঝে না। আর ৬৩:৮ আয়াত শেষ হয় লা ইয়া'লামূন দিয়ে, তারা জানে না। সূরাটি বারবার ফিরে আসে বোঝার কথায়, এই লোকদের যার অভাব। সমস্যাটা তাদের মুখের কথায় ছিল না। ৬৩:১ আয়াতে তারা সাক্ষ্যবাক্যটাই উচ্চারণ করে। ইবন কাসীরের তাফসীরের ইংরেজি সংক্ষিপ্ত রূপ বলছে, নবী ﷺ সম্পর্কে তাদের কথাটা সত্যই ছিল। আল্লাহ তাদের মিথ্যাবাদী বলেছেন, কারণ বাইরে যা ঘোষণা করত, ভেতরে তা বিশ্বাস করত না। এ আয়াত ক্ষতিটাকে ঠিক সেখানেই দেখায়, অন্তরে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report Tied to It",
          "bn": "এ আয়াতে জোড়া কোনো বর্ণনা নেই"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here. Qatada's line, which at-Tabari gives with its chain, is his comment on the verse, not a saying of the Prophet ﷺ. Ma'arif al-Qur'an opens the surah with a long account of the campaign against Banu al-Mustaliq and what was said on the road home. Those reports belong with the later verses of the surah, and Ma'arif does not tie any of them to this verse, so they are left for their place.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয়নি। তাই এখানে কোনো হাদীস উদ্ধৃত করা হচ্ছে না। তাবারী সনদসহ কাতাদার যে কথা এনেছেন, তা আয়াতের উপর তাঁর নিজের ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। মাআরিফুল কুরআন সূরার শুরুতে বনু মুস্তালিকের অভিযান আর ফেরার পথে বলা কথাবার্তার দীর্ঘ বিবরণ দেয়। সেসব বর্ণনার জায়গা সূরার পরের আয়াতগুলোতে। মাআরিফ সেগুলোর কোনোটিকে এ আয়াতের সঙ্গে যুক্ত করেনি, তাই সেগুলো তাদের নিজের জায়গার জন্য রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Gauge for Other Hearts",
          "bn": "অন্যের অন্তর মাপার যন্ত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the people of 63:1 and 63:2, the hypocrites who came to the Prophet ﷺ with their testimony and their oaths. It describes what it describes and licenses nothing against any living person or community. It does not hand the reader a test for judging anyone's heart. It gives nobody the right to call a fellow believer a hypocrite, to treat someone's prayer or profession as a mask, or to decide that another person's heart has been sealed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা দিচ্ছে ৬৩:১ ও ৬৩:২ আয়াতের সেই লোকদের, সেই মুনাফিকদের, যারা সাক্ষ্য আর শপথ নিয়ে নবী ﷺ-এর কাছে আসত। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। কারও অন্তরের বিচার করার কোনো মাপকাঠিও পাঠকের হাতে তুলে দেয় না। কোনো মু'মিন ভাইকে মুনাফিক বলার, কারও নামাজ বা ঈমানের ঘোষণাকে মুখোশ ভাবার, কিংবা কারও অন্তরে মোহর পড়ে গেছে বলে রায় দেওয়ার অধিকার এ আয়াত কাউকে দেয় না।"
          },
          {
            "en": "The opening of the surah shows whose knowledge this was. In 63:1 it is Allah who knows that the Messenger is His Messenger, and Allah who testifies that the hypocrites are liars. The verdict on their hearts came from Him. Ibn Kathir's English abridgement adds, on 63:2, that some Muslims were deceived because they did not know the hypocrites' falsehood and took them for Muslims. The inward was hidden even from the people closest to it. Anyone who turns this verse on someone else is claiming a knowledge the surah assigns to Allah.",
            "bn": "সূরার শুরুই দেখিয়ে দেয়, এ জ্ঞান কার। ৬৩:১ আয়াতে আল্লাহই জানেন যে রসূল তাঁর রসূল, আর আল্লাহই সাক্ষ্য দেন যে মুনাফিকরা মিথ্যাবাদী। তাদের অন্তরের রায় এসেছে তাঁর কাছ থেকে। ইবন কাসীরের তাফসীরের ইংরেজি সংক্ষিপ্ত রূপ ৬৩:২ আয়াতের আলোচনায় যোগ করে, কিছু মুসলমান প্রতারিত হয়েছিলেন, কারণ মুনাফিকদের মিথ্যা তাঁরা জানতেন না, তাই তাদের মুসলিম বলেই ধরে নিয়েছিলেন। সবচেয়ে কাছের মানুষদের কাছেও ভেতরের অবস্থা গোপন ছিল। কেউ যদি এ আয়াত অন্য কারও দিকে তাক করে, তবে সে এমন জ্ঞানের দাবি করছে, যা সূরা আল্লাহর বলে ঘোষণা করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Mirror Close",
          "bn": "আয়নাটা নিজের সামনে"
        },
        "p": [
          {
            "en": "What the verse can do for a reader happens inward. Al-Baghawi's two settings, the tongue that affirms in front of the believers and the other face kept for other company, are the shape the commentators give to this hypocrisy. A reader can ask, of nobody but themselves, whether their speech about Allah changes with the room. The question is not whether the reader is a hypocrite in the verse's sense. It is whether the tongue and the heart are drifting apart in small ways that could be closed today.",
            "bn": "আয়াতটা পাঠকের জন্য যে কাজ করতে পারে, তা ঘটে ভেতরে। বাগাভীর দুই মজলিস, মু'মিনদের সামনে স্বীকারোক্তি দেওয়া জিহ্বা আর অন্য সঙ্গীদের জন্য তুলে রাখা আরেক চেহারা, এ নিফাকের এমন ছবিই আঁকেন তাফসীরকারেরা। পাঠক নিজেকে, শুধু নিজেকেই, জিজ্ঞেস করতে পারেন, মজলিস বদলালে আল্লাহকে নিয়ে তাঁর কথা বলার ধরন কি বদলে যায়। প্রশ্নটা এই নয় যে আমি আয়াতের অর্থে মুনাফিক কি না। প্রশ্ন হলো, মুখ আর মন কি ছোট ছোট ব্যাপারে আলাদা হয়ে যাচ্ছে, যে ফাঁক আজই বুজিয়ে ফেলা যায়?"
          },
          {
            "en": "As-Sa'di's phrase, they do not stand firm on faith, names by contrast what a believer hopes for, which is steadiness. And the readings of la yafqahun place two things in the heart's keeping: the grasp of truth from falsehood, and the grasp of one's own good. Both can be guarded while the heart still takes in a reminder. A reader who notices a verse landing, unsettling, asking for something, has evidence that the door is open, and can walk through it rather than wait.",
            "bn": "সা'দীর কথা, তারা ঈমানের উপর অটল থাকে না, উল্টো দিক থেকে মনে করিয়ে দেয় একজন মু'মিন কী চায়: অবিচলতা। আর লা ইয়াফকাহূন-এর ব্যাখ্যাগুলো দুটি জিনিস অন্তরের জিম্মায় রাখে। একটি হলো হক আর বাতিল চেনার ক্ষমতা, আরেকটি নিজের মঙ্গল চেনার ক্ষমতা। অন্তর যতদিন নসিহত গ্রহণ করে, ততদিন দুটোকেই আগলে রাখা যায়। কোনো আয়াত মনে দাগ কাটলে, অস্বস্তি জাগালে, কিছু চাইলে পাঠক বুঝে নিতে পারেন দরজা খোলা আছে। অপেক্ষা না করে সে দরজা দিয়ে ঢুকে পড়াই ভালো।"
          },
          {
            "en": "The verse tells its chain in the past tense, about a group whose state Allah Himself declared. It is not offered to the reader as a sentence passed on them, and it is not a reason for despair. It is a description of how far apart a tongue and a heart can grow, and of what the commentators say followed once they had: a seal, and an understanding that no longer worked. The reader's part is to keep tongue and heart together, and to ask Allah for understanding instead of assuming it.",
            "bn": "আয়াতটি তার কথাগুলো বলে অতীত কালে, এমন এক দলের ব্যাপারে যাদের অবস্থা আল্লাহ নিজে ঘোষণা করেছেন। পাঠকের উপর এটা কোনো রায় নয়, হতাশ হওয়ার কারণও নয়। এ এক বর্ণনা: মুখ আর মনের মধ্যে কতটা দূরত্ব তৈরি হতে পারে, আর তাফসীরকারদের ভাষায় সেই দূরত্বের পরে কী এসেছিল। এসেছিল মোহর, আর এমন এক বোঝাপড়া যা আর কাজ করত না। পাঠকের কাজ দুটোকে একসঙ্গে রাখা, আর বোঝার ক্ষমতা ধরে না নিয়ে আল্লাহর কাছে তা চেয়ে নেওয়া।"
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
          "bn": "যখন সম্বোধন হাতবদল হয়"
        },
        "p": [
          {
            "en": "Surah al-Munafiqun is Medinan and has eleven verses. The first eight belong to the hypocrites: oaths worn as cover, the instruction in 63:7 that nobody should spend on those with the Messenger of Allah ﷺ until they disband, and the boast in 63:8 that on returning to Madinah the more honoured would drive out the humbler. Then the surah changes address. Verse 63:9 opens with ya ayyuha alladhina amanu, O you who have believed, and the last three verses speak to the believers.",
            "bn": "সূরা আল-মুনাফিকূন মাদানী, আয়াত সংখ্যা এগারো। প্রথম আটটি আয়াত মুনাফিকদের নিয়ে: আড়াল হিসেবে ব্যবহৃত কসম, 63:7 আয়াতের সেই নির্দেশ যে রাসূলুল্লাহ ﷺ-এর সঙ্গীদের জন্য কেউ যেন খরচ না করে যতক্ষণ না তারা সরে পড়ে, আর 63:8 আয়াতের সেই দম্ভ যে মদীনায় ফিরে গেলে সম্মানিতরা হীনদের বের করে দেবে। এরপর সূরাটি সম্বোধন বদলায়। 63:9 আয়াত শুরু হয় 'ইয়া আইয়ুহাল্লাযীনা আমানূ' — হে যারা ঈমান এনেছ — দিয়ে, আর শেষ তিনটি আয়াত মুমিনদের সঙ্গে কথা বলে।"
          },
          {
            "en": "The placement is itself the argument. What ruined the hypocrites in this surah surfaced in money and in rank: a plan to starve a community until it scattered, and a confidence built on being the more honoured party. So the first thing said to the believers, once that portrait is finished, concerns their own wealth and their own children. The warning is not that they resemble hypocrites. It is that the same materials are lying in their hands.",
            "bn": "আয়াতটির অবস্থানই তার যুক্তি। এই সূরায় মুনাফিকদের যা ধ্বংস করেছে তা প্রকাশ পেয়েছে অর্থ ও মর্যাদার মধ্য দিয়ে: একটি জনগোষ্ঠীকে অনাহারে ছত্রভঙ্গ করার পরিকল্পনা, আর নিজেদের অধিক সম্মানিত ভাবার আত্মবিশ্বাস। তাই সেই চিত্র শেষ হওয়ার পর মুমিনদের প্রথম যে কথাটি বলা হয়, তা তাদের নিজেদের সম্পদ ও নিজেদের সন্তান নিয়ে। সতর্কবাণীটি এই নয় যে তারা মুনাফিকদের মতো। বরং এই যে, একই উপকরণ তাদেরও হাতে রয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb Is Divert",
          "bn": "ক্রিয়াপদটি হলো বিমুখ করা"
        },
        "p": [
          {
            "en": "La tulhikum amwalukum wa la awladukum an dhikri Allah. The verb comes from lahw, and lahw is not a word for sin. It is whatever occupies a person pleasantly enough that something else slips out of view while he is enjoying it. Nothing in the verse forbids wealth or children, and nothing calls them evil. One thing only is named: what they must not be permitted to do to the person who holds them.",
            "bn": "'লা তুলহিকুম আমওয়ালুকুম ওয়ালা আওলাদুকুম আন যিকরিল্লাহ।' ক্রিয়াপদটি এসেছে 'লাহ্ও' থেকে, আর 'লাহ্ও' পাপ বোঝানোর শব্দ নয়। এর অর্থ এমন কিছু যা মানুষকে এতটাই মধুরভাবে ব্যস্ত রাখে যে উপভোগের ফাঁকে অন্য কিছু দৃষ্টির বাইরে চলে যায়। আয়াতটি সম্পদ বা সন্তানকে নিষিদ্ধ করে না, মন্দও বলে না। কেবল একটি জিনিসেরই নাম নেওয়া হয়েছে: যার হাতে এগুলো আছে, তার সঙ্গে এগুলোকে যা করতে দেওয়া যাবে না।"
          },
          {
            "en": "The second half confirms that reading. Wa man yaf'al dhalika, and whoever does that — not whoever has that. The condemnation attaches to an act, and the act is allowing the diversion. This is why the same believers are told, in the verse right after, to spend from what Allah has provided them. A man cannot spend what he does not hold. Possession was never the charge.",
            "bn": "আয়াতের দ্বিতীয় অংশ এই পাঠকেই নিশ্চিত করে। 'ওয়া মাই ইয়াফআল যালিকা' — আর যে এমনটি করে; 'যার এমনটি আছে' নয়। নিন্দাটি একটি কাজের সঙ্গে যুক্ত, আর সেই কাজ হলো বিমুখতাকে ঘটতে দেওয়া। এ কারণেই ঠিক পরের আয়াতে সেই একই মুমিনদের বলা হয়, আল্লাহ তাদের যে রিযিক দিয়েছেন তা থেকে ব্যয় করতে। যার হাতে নেই, সে ব্যয় করবে কী দিয়ে? অভিযোগটি কখনোই মালিকানার বিরুদ্ধে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Places, One Root",
          "bn": "একই ধাতু, তিন জায়গা"
        },
        "p": [
          {
            "en": "The same root works hard elsewhere. 102:1 opens Surah at-Takathur with alhakumu at-takathur, rivalry in piling up has diverted you, stated in the perfect tense as something already accomplished. And 24:37 gives the finished portrait from the other side: men whom neither commerce nor sale diverts from the remembrance of Allah, the establishing of prayer and the giving of zakat. One warning, one diagnosis, and one picture of what the cure looks like.",
            "bn": "একই ধাতু আরও কয়েক জায়গায় জোরালো কাজ করে। 102:1 আয়াতে সূরা আত-তাকাসুর শুরু হয় 'আলহাকুমুত তাকাসুর' দিয়ে — প্রাচুর্যের প্রতিযোগিতা তোমাদের বিমুখ করে রেখেছে — অতীত কালে বলা, অর্থাৎ ঘটে যাওয়া বিষয় হিসেবে। আর 24:37 আয়াত উল্টো দিক থেকে সম্পূর্ণ ছবিটি আঁকে: সেইসব পুরুষ, ব্যবসা ও ক্রয়-বিক্রয় যাদের আল্লাহর স্মরণ, নামায কায়েম ও যাকাত প্রদান থেকে বিমুখ করে না। একটি সতর্কবাণী, একটি রোগনির্ণয়, আর নিরাময়টি দেখতে কেমন তার একটি ছবি।"
          },
          {
            "en": "24:37 is the verse to keep beside this one, because of what it does not say. It does not describe men without trade. They buy and sell; the verse before it has just placed them in the houses Allah ordered to be raised, where His name is remembered morning and evening. The standard being set is not a smaller business. It is a business that fails to divert.",
            "bn": "24:37 আয়াতটিকেই এর পাশে রাখা উচিত, কারণ এটি যা বলে না সেটিই গুরুত্বপূর্ণ। এটি ব্যবসাহীন মানুষের বর্ণনা নয়। তারা কেনাবেচা করে; এর ঠিক আগের আয়াতটি তাদের রেখেছে সেইসব গৃহে, যেগুলোকে সমুন্নত রাখতে আল্লাহ নির্দেশ দিয়েছেন এবং যেখানে সকাল-সন্ধ্যা তাঁর নাম স্মরণ করা হয়। এখানে যে মান নির্ধারণ করা হচ্ছে তা ছোট ব্যবসা নয়। বরং এমন ব্যবসা, যা বিমুখ করতে ব্যর্থ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide Is Dhikr Here",
          "bn": "এখানে যিকরের পরিধি কতটা"
        },
        "p": [
          {
            "en": "The commentators do not narrow dhikr Allah in this verse to words on the tongue. They read it as the whole of what a person owes Allah: the prayers at their times, the duties He imposed, and the care taken over the line between what He allowed and what He forbade. 24:37 supports that width by naming remembrance, prayer and zakat together. Read so, the diversion becomes measurable — a prayer pushed late, a duty deferred, a question about income that stops being asked.",
            "bn": "মুফাসসিরগণ এই আয়াতে 'যিকরুল্লাহ'-কে কেবল মুখের শব্দে সীমিত করেন না। তাঁরা একে পড়েন আল্লাহর প্রতি মানুষের সমস্ত দায়িত্ব হিসেবে: সময়মতো নামায, তাঁর আরোপিত ফরযসমূহ, আর তিনি যা হালাল ও যা হারাম করেছেন তার সীমারেখার প্রতি যত্ন। 24:37 আয়াত স্মরণ, নামায ও যাকাতকে একসঙ্গে উল্লেখ করে এই ব্যাপকতাকেই সমর্থন করে। এভাবে পড়লে বিমুখতা মাপা যায় — দেরিতে ঠেলে দেওয়া একটি নামায, পিছিয়ে দেওয়া একটি দায়িত্ব, উপার্জন নিয়ে এমন এক প্রশ্ন যা আর করা হয় না।"
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
            "bn": "এরপর আসে রায়: 'ফাউলাইকা হুমুল খাসিরূন' — তারাই ক্ষতিগ্রস্ত। 'খুস্‌র' ব্যবসায়ীর শব্দ, যার অর্থ মূলধন হারানো — কেবল মুনাফা না পাওয়া নয়; আর 'হুম' সর্বনামটি বাক্যটিকে আরও আঁটসাঁট করে — তারাই, তারাই সেই লোক। 103:2 আয়াত একই শব্দ গোটা মানবজাতির ক্ষেত্রে প্রয়োগ করে। এখানে পাঠকের যেখানে থমকে যাওয়া উচিত তা হলো, কথাটি কাকে বলা হচ্ছে। এই তকমা প্রথম আট আয়াতের মুনাফিকদের গায়ে লাগানো হচ্ছে না। এটি তুলে ধরা হচ্ছে এমন মানুষদের সামনে, যারা ইতিমধ্যেই ঈমান এনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It Against a Week",
          "bn": "একটি সপ্তাহের সামনে রেখে পড়া"
        },
        "p": [
          {
            "en": "Diversion seldom announces itself as a choice against Allah, which is why the verse describes a drift and not a decision. It shows in the order things get moved when two of them collide: which appointment survives, which is rescheduled, and what has quietly gone undone for a month. The verse hands over a test anyone can run over seven days — what did wealth and family cost the remembrance of Allah, and what did the remembrance of Allah cost them?",
            "bn": "বিমুখতা খুব কমই নিজেকে আল্লাহর বিরুদ্ধে নেওয়া সিদ্ধান্ত হিসেবে ঘোষণা করে; এ কারণেই আয়াতটি সিদ্ধান্ত নয়, ধীর সরে যাওয়ার বর্ণনা দেয়। দুটি কাজে সংঘর্ষ বাধলে কোনটি সরে যায় — তাতেই এটি ধরা পড়ে: কোন সময়টি টিকে থাকে, কোনটি পিছিয়ে যায়, আর কোন কাজটি নীরবে এক মাস ধরে হয়ে ওঠেনি। আয়াতটি এমন এক পরীক্ষা হাতে তুলে দেয় যা সাত দিনের হিসাবে যে কেউ চালাতে পারে — সম্পদ ও পরিবারের জন্য আল্লাহর স্মরণের কতটা খরচ হলো, আর আল্লাহর স্মরণের জন্য সেগুলোর কতটা খরচ হলো?"
          },
          {
            "en": "The remedy this surah prescribes arrives at once. 63:10 tells the believers to spend from what Allah has provided before death reaches one of them, and 63:11 shuts the door on any delay past the appointed term. Giving is the exact reversal of diversion, because it turns the thing that pulls into the service of the One being forgotten. Wealth handled that way stops competing with dhikr and starts belonging to it.",
            "bn": "এই সূরা নিজেই সঙ্গে সঙ্গে প্রতিকার বাতলে দেয়। 63:10 আয়াত মুমিনদের বলে, তাদের কারও মৃত্যু আসার আগেই আল্লাহ যা দিয়েছেন তা থেকে ব্যয় করতে, আর 63:11 আয়াত নির্ধারিত সময় পার হওয়ার পর কোনো অবকাশের দরজা বন্ধ করে দেয়। দান হলো বিমুখতার হুবহু উল্টো গতি, কারণ যা টেনে নিয়ে যায় তাকেই এটি সেই সত্তার কাজে লাগিয়ে দেয় যাঁকে ভুলে যাওয়া হচ্ছিল। এভাবে ব্যবহৃত সম্পদ যিকরের সঙ্গে প্রতিদ্বন্দ্বিতা করা ছেড়ে দিয়ে যিকরেরই অংশ হয়ে যায়।"
          }
        ]
      }
    ]
  },
  "63:10": {
    "sections": [
      {
        "h": {
          "en": "The Surah's Closing Turn",
          "bn": "সূরার শেষ বাঁক"
        },
        "p": [
          {
            "en": "Surah al-Munafiqun carries the hypocrites' name, and its first eight verses, 63:1-8, expose them: oaths worn as shields, impressive exteriors, and the plan of withholding money from those around the Messenger of Allah ﷺ in the hope that they would scatter. Then the surah turns. Its closing three verses, 63:9-11, address the believers directly: do not let wealth and children divert you from remembrance, spend before death arrives, and know that no soul is deferred past its term.",
            "bn": "সূরা আল-মুনাফিকূন মুনাফিকদের নামই বহন করে, আর এর প্রথম আটটি আয়াত, 63:1-8, তাদের উন্মোচিত করে: ঢাল হিসেবে পরা শপথ, চোখধাঁধানো বাহ্যিক রূপ, আর আল্লাহর রাসূল ﷺ-এর আশপাশের মানুষদের থেকে অর্থ আটকে রাখার পরিকল্পনা — এই আশায় যে তারা ছত্রভঙ্গ হয়ে যাবে। তারপর সূরাটি বাঁক নেয়। এর শেষ তিনটি আয়াত, 63:9-11, সরাসরি মুমিনদের সম্বোধন করে: সম্পদ ও সন্তান যেন তোমাদের স্মরণ থেকে সরিয়ে না নেয়, মৃত্যু আসার আগে ব্যয় করো, আর জেনে রাখো — কোনো প্রাণকে তার মেয়াদ পেরিয়ে পেছানো হয় না।"
          },
          {
            "en": "The sequence is the surah's argument. Hypocrisy in the first eight verses shows itself precisely in money — the refusal to spend on those with the Messenger of Allah ﷺ. So the protection prescribed to believers is the opposite motion: infaq, giving, before the one deadline that cannot be renegotiated. Where the hypocrite's hand closes in order to starve the community, the believer's hand is commanded open before it is stilled.",
            "bn": "এই ক্রমটিই সূরার যুক্তি। প্রথম আট আয়াতে মুনাফিকি নিজেকে দেখায় ঠিক অর্থের জায়গায় — আল্লাহর রাসূল ﷺ-এর সঙ্গে যারা আছে তাদের জন্য ব্যয় করতে অস্বীকার। তাই মুমিনদের জন্য নির্ধারিত সুরক্ষা হলো বিপরীত গতি: ইনফাক — দেওয়া, সেই একটিমাত্র সময়সীমার আগে, যা নিয়ে দর কষাকষি চলে না। মুনাফিকের হাত যেখানে মুঠো বন্ধ করে সমাজকে উপোস রাখতে, মুমিনের হাতকে সেখানে আদেশ করা হয়েছে খোলা থাকতে — চিরতরে থেমে যাওয়ার আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "From What We Provided",
          "bn": "আমরা যা দিয়েছি তা থেকে"
        },
        "p": [
          {
            "en": "Anfiqu mim ma razaqnakum — spend from what We have provided you. The phrasing dismantles the illusion of ownership before asking for anything: the wealth in question arrived as provision from Allah, so the giver is passing on, not surrendering. And the deadline is stated with an unsettling singular — before death comes to one of you. Not before death comes in general, but before it comes to you, the reader, one particular person with an unshared appointment.",
            "bn": "আনফিকূ মিম মা রাযাকনাকুম — আমরা তোমাদের যা রিযিক দিয়েছি তা থেকে ব্যয় করো। কিছু চাওয়ার আগেই এই শব্দবিন্যাস মালিকানার মায়া ভেঙে দেয়: প্রশ্নের সম্পদটি এসেছিল আল্লাহর রিযিক হয়ে, কাজেই দাতা তা হস্তান্তর করছে মাত্র, বিসর্জন দিচ্ছে না। আর সময়সীমাটি বলা হয়েছে এক অস্বস্তিকর একবচনে — তোমাদের কারও কাছে মৃত্যু আসার আগে। সাধারণভাবে মৃত্যু আসার আগে নয়; আপনার কাছে আসার আগে — পাঠক, একজন নির্দিষ্ট মানুষ, যার সাক্ষাতের দিনটি কারও সঙ্গে ভাগ করা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Smallest Bargain",
          "bn": "সবচেয়ে ছোট দর কষাকষি"
        },
        "p": [
          {
            "en": "Then the verse lets us overhear a deathbed. Rabbi lawla akhkhartani — my Lord, if only You would delay me. Lawla here is a particle of desperate wishing, and what is wished for is tiny: ila ajalin qarib, a brief term, a little while. No one at that door asks for another lifetime. And the first thing named for that little while is fa-assaddaqa, so that I may give sadaqah — before the general wa akun minas-salihin, and be among the righteous.",
            "bn": "তারপর আয়াতটি আমাদের একটি মৃত্যুশয্যার কথা শোনায়। রাব্বি লাওলা আখখারতানী — হে আমার প্রতিপালক, যদি আমাকে একটু পেছাতেন। লাওলা এখানে মরিয়া আকাঙ্ক্ষার অব্যয়, আর যা চাওয়া হচ্ছে তা ক্ষুদ্র: ইলা আজালিন কারীব — একটি সংক্ষিপ্ত মেয়াদ, আর কিছুকাল মাত্র। ওই দরজায় দাঁড়িয়ে কেউ আরেকটি জীবন চায় না। আর সেই সামান্য সময়ের জন্য প্রথম যে কাজের নাম আসে তা ফা-আসসাদ্দাকা — যেন আমি সদাকাহ করতে পারি; তারপর আসে সাধারণটি — ওয়া আকুন মিনাস-সালিহীন, আর সৎকর্মশীলদের একজন হই।"
          },
          {
            "en": "The commentators pause at what the dying man does not say. He does not plead for more time to earn, to build, or to see; the wish crystallises around giving — as if, with the world ending, the only transactions that still look real are the ones that sent something ahead. The verse is a preview of our own final ordering of priorities, published in advance so that we can act on it while acting is still possible.",
            "bn": "মৃত্যুপথযাত্রী যা বলে না, মুফাসসিরগণ সেখানে থামেন। সে আরও উপার্জনের, আরও গড়ার বা আরও দেখার সময় ভিক্ষা করে না; আকাঙ্ক্ষাটি দানা বাঁধে দেওয়াকে ঘিরে — যেন দুনিয়া ফুরিয়ে আসার মুহূর্তে একমাত্র সেই লেনদেনগুলোকেই আর বাস্তব দেখায়, যা কিছু-না-কিছু আগে পাঠিয়ে দিয়েছে। আয়াতটি আমাদের নিজেদেরই শেষ অগ্রাধিকার-তালিকার এক পূর্বদর্শন — আগেভাগে প্রকাশ করা, যাতে কাজ করা যখনো সম্ভব তখনই আমরা তা কাজে লাগাতে পারি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer That Ends It",
          "bn": "যে উত্তরে সমাপ্তি"
        },
        "p": [
          {
            "en": "The plea receives its reply in 63:11 — Allah will never delay a soul when its term has come, and Allah is fully aware of what you do. The same exchange is staged at greater length in 23:99-100, where the dying man begs — my Lord, send me back, that I might do righteousness in what I left behind — and is answered: no indeed, it is only a word he is saying, and behind them is a barrier until the day they are raised.",
            "bn": "আকুতিটির জবাব আসে 63:11 আয়াতে: কোনো প্রাণের মেয়াদ এসে গেলে আল্লাহ তাকে কখনোই পেছাবেন না, আর তোমরা যা করো আল্লাহ সে বিষয়ে পূর্ণ অবগত। একই কথোপকথন আরও বিস্তারিতভাবে মঞ্চস্থ হয়েছে 23:99-100 আয়াতে — মৃত্যুপথযাত্রী মিনতি করে: হে আমার প্রতিপালক, আমাকে ফেরত পাঠান, যা ফেলে এসেছি তাতে যেন সৎকাজ করতে পারি; আর জবাব আসে: কখনোই না, এ তো কেবল তার মুখের একটি কথা; আর তাদের পেছনে এক অন্তরাল — পুনরুত্থানের দিন পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Give While You Are Well",
          "bn": "সুস্থ থাকতেই দিন"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that a man asked the Prophet ﷺ which charity is greatest in reward. He answered: that you give while you are healthy and reluctant to part with it, fearing poverty and hoping for riches — and that you do not delay until the soul reaches the throat and you say, so much for this one and so much for that one, when it already belongs to others. The hadith and the verse describe the same deathbed from two angles, and both move the giving earlier.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন — এক ব্যক্তি নবী ﷺ-কে জিজ্ঞেস করল, কোন সদাকাহর প্রতিদান সবচেয়ে বড়। তিনি উত্তর দিলেন: তুমি সুস্থ থাকতে দেওয়া, যখন সম্পদ ছাড়তে মন চায় না, দারিদ্র্যের ভয় আর ধনী হওয়ার আশা থাকে — আর দেরি না করা, যতক্ষণ না প্রাণ কণ্ঠায় পৌঁছে আর তুমি বলো: একে এতটা, ওকে এতটা — অথচ তা তখন অন্যদেরই হয়ে গেছে। হাদীস ও আয়াত একই মৃত্যুশয্যাকে দুই কোণ থেকে বর্ণনা করে, আর দুটিই দেওয়ার সময়কে এগিয়ে আনে।"
          },
          {
            "en": "The Quran presses the same urgency elsewhere: 2:254 commands spending from what We have provided before a Day arrives in which there is no bargaining, no friendship and no intercession. Both deadlines — the personal one of death and the universal one of that Day — close the same window. Between now and then lies the entire space in which generosity is possible, and neither verse permits assuming the space is wide.",
            "bn": "কুরআন অন্যত্রও একই তাগিদ দেয়: 2:254 আয়াত আদেশ করে, আমরা যা দিয়েছি তা থেকে ব্যয় করতে — এমন এক দিন আসার আগে, যেদিন থাকবে না কোনো বেচাকেনা, কোনো বন্ধুত্ব, কোনো সুপারিশ। দুটি সময়সীমা — মৃত্যুর ব্যক্তিগতটি আর সেই দিনের সর্বজনীনটি — একই জানালা বন্ধ করে। এখন থেকে তখন পর্যন্তই দানশীলতার সম্ভাব্য গোটা পরিসর, আর কোনো আয়াতই সেই পরিসরকে প্রশস্ত ধরে নেওয়ার অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Retiring the Word Someday",
          "bn": "'কোনো একদিন' শব্দের অবসর"
        },
        "p": [
          {
            "en": "Every deferred good intention is a loan against a tomorrow this verse refuses to guarantee. The practical translation is blunt: the amount long planned for someday can be given this week, the cause you mean to support can receive its first small transfer today, and regular giving can be automated so that forgetfulness stops deciding. Sadaqah does not require the arrival of surplus — the verse says from what We provided, in whatever quantity that currently is.",
            "bn": "প্রতিটি পিছিয়ে রাখা সৎ নিয়ত এমন এক আগামীকালের বিপরীতে নেওয়া ঋণ, যার নিশ্চয়তা এই আয়াত দিতে অস্বীকার করে। ব্যবহারিক অনুবাদটি স্পষ্ট: 'কোনো একদিন' দেবেন বলে বহুদিনের ভাবা অঙ্কটি এই সপ্তাহেই দেওয়া যায়, যে উদ্যোগে পাশে দাঁড়াবেন ভেবেছেন সেটি আজই তার প্রথম ছোট পাঠানো অর্থ পেতে পারে, আর নিয়মিত দান স্বয়ংক্রিয় করে রাখা যায় — যাতে সিদ্ধান্ত আর ভুলে যাওয়ার হাতে না থাকে। সদাকাহর জন্য উদ্বৃত্তের অপেক্ষা লাগে না — আয়াত বলে: আমরা যা দিয়েছি তা থেকে; এই মুহূর্তে তার পরিমাণ যা-ই হোক।"
          },
          {
            "en": "And the verse quietly widens beyond money, since the dying man's second wish is general: to be among the righteous. Postponed repentance, postponed reconciliation and postponed prayer sit in the same queue as the postponed gift. The mercy of 63:10 is that it lets us hear the plea of the person who waited — while we are still standing inside the very moment he begged for and did not receive.",
            "bn": "আর আয়াতটি নিঃশব্দে অর্থের গণ্ডি ছাড়িয়ে যায়, কারণ মৃত্যুপথযাত্রীর দ্বিতীয় চাওয়াটি সাধারণ: সৎকর্মশীলদের একজন হওয়া। ফেলে রাখা তওবা, ফেলে রাখা মীমাংসা আর ফেলে রাখা নামাজ দাঁড়িয়ে আছে ফেলে রাখা দানের একই লাইনে। 63:10 আয়াতের রহমত এখানেই — এটি আমাদের শোনায় সেই অপেক্ষা করা মানুষটির আকুতি, যখন আমরা এখনো দাঁড়িয়ে আছি ঠিক সেই মুহূর্তটির ভেতরে, যা সে ভিক্ষা চেয়েও পায়নি।"
          }
        ]
      }
    ]
  }
});
