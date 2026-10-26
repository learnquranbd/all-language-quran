/**
 * Tadabbur long-form articles — surah 67.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "67:1-2": {
    "sections": [
      {
        "h": {
          "en": "What Tabaraka Carries",
          "bn": "তাবারাকা শব্দে কী আছে"
        },
        "p": [
          {
            "en": "Tabaraka-lladhi bi-yadihi-l-mulk: blessed is He in whose hand is the dominion. Al-Qurtubi records that the surah is Makkan in the view of all, thirty verses long, and has two more names, al-Waqiya and al-Munjiya, the protector and the rescuer. At-Tabari glosses it with two verbs of height, ta'azama wa-ta'ala: He is magnified and exalted. The Muyassar looks instead at what reaches creation: the good of Allah and His kindness abound over all that He made.",
            "bn": "তাবারাকাল্লাযী বিয়াদিহিল মুলক: বরকতময় তিনি, রাজত্ব যাঁর হাতে। কুরতুবী জানান, সবার মতেই সূরাটি মাক্কী, আয়াত ত্রিশটি। এর আরও দুটি নাম আছে: আল-ওয়াকিয়া আর আল-মুনজিয়া, অর্থাৎ যে আগলে রাখে আর যে উদ্ধার করে। তাবারী এর অর্থ দেন উচ্চতার দুটি ক্রিয়ায়: তাআযামা ওয়া তাআলা, তিনি মহীয়ান, তিনি সমুন্নত। মুয়াসসারের নজর সৃষ্টির দিকে, যেখানে এর ফল পৌঁছায়: আল্লাহর কল্যাণ ও অনুগ্রহ তাঁর সব সৃষ্টির উপর অঢেল।"
          },
          {
            "en": "As-Sa'di holds both sides together: He is magnified and exalted, His good is abundant, and His beneficence reaches all. Al-Qurtubi adds two shorter glosses: al-Hasan's taqaddasa, He is holy, and an unnamed view that it means dama, He endures, the Lasting whose being has no first and whose continuance has no last. Ma'arif al-Qur'an starts from the root's sense of growth and increase and says that, of Allah, it means being highest in every respect, close in meaning to Allahu akbar.",
            "bn": "সা'দী দুই দিক একসঙ্গে ধরেন: তিনি মহীয়ান ও সমুন্নত, তাঁর কল্যাণ প্রচুর, তাঁর অনুগ্রহ সবার কাছে পৌঁছায়। কুরতুবী আরও দুটি ছোট ব্যাখ্যা যোগ করেন। হাসানের মতে তাবারাকা মানে তাকাদ্দাসা, তিনি পবিত্র। আরেকটি মত, যার বক্তার নাম তিনি বলেননি, অর্থ করে দামা, তিনি চিরস্থায়ী: এমন স্থায়ী, যাঁর অস্তিত্বের শুরু নেই, স্থায়িত্বের শেষ নেই। মাআরিফুল কুরআন শুরু করে ধাতুর মূল অর্থ থেকে, অর্থাৎ বৃদ্ধি ও বাড়তি। আল্লাহর বেলায় এর মানে সব দিক থেকে সর্বোচ্চ হওয়া, আল্লাহু আকবারের কাছাকাছি অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hand That Holds the Kingdom",
          "bn": "রাজত্ব যাঁর হাতে"
        },
        "p": [
          {
            "en": "Alladhi bi-yadihi-l-mulk. At-Tabari explains: in His hand is the dominion of this world and the next and the authority over both, His command and decree carried out in them. As-Sa'di widens it to the upper and lower worlds: He created them and disposes of them as He wills. Ibn Kathir reads it as His free disposal of all creatures: none can reverse His judgement, and He is not asked about what He does, because of His dominance, His wisdom and His justice.",
            "bn": "আল্লাযী বিয়াদিহিল মুলক। তাবারীর ব্যাখ্যা: দুনিয়া ও আখিরাতের রাজত্ব আর দুয়ের উপর কর্তৃত্ব তাঁর হাতে, দুই জগতেই তাঁর হুকুম ও ফয়সালা কার্যকর। সা'দী পরিসর আরও বাড়ান: ঊর্ধ্বজগৎ ও নিম্নজগৎ দুটোই তাঁর হাতে। তিনিই সেগুলো সৃষ্টি করেছেন, আর যেমন চান তেমন পরিচালনা করেন। ইবন কাসীরের পাঠে এর মানে, সব সৃষ্টিকে তিনি নিজের ইচ্ছামতো পরিচালনা করেন। তাঁর ফয়সালা উল্টে দেওয়ার কেউ নেই। তিনি যা করেন তার জন্য তাঁকে জিজ্ঞেস করা হয় না, কারণ তিনি প্রবল, প্রজ্ঞাময় ও ন্যায়পরায়ণ।"
          },
          {
            "en": "Al-Qurtubi gives the reading of Ibn 'Abbas, which spells the dominion out in pairs: He honours whom He wills and abases whom He wills, gives life and gives death, enriches and impoverishes, gives and withholds. Then wa-huwa 'ala kulli shay'in qadir. At-Tabari explains that He has power over whatever He wills to do, with nothing to prevent Him and no incapacity standing between Him and it. Al-Qurtubi specifies the power as over bestowing favour and taking retribution.",
            "bn": "কুরতুবী আনেন ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা, যেখানে রাজত্বের ছবি জোড়ায় জোড়ায়: যাকে চান সম্মান দেন, যাকে চান লাঞ্ছিত করেন; জীবন দেন, মৃত্যু দেন; ধনী করেন, গরিব করেন; দেন, আবার আটকে রাখেন। তারপর ওয়া হুয়া আলা কুল্লি শাইয়িন কাদীর। তাবারী বলেন, তিনি যা করতে চান তার উপর তাঁর পূর্ণ ক্ষমতা। কোনো বাধা তাঁকে ঠেকাতে পারে না, কোনো অক্ষমতা মাঝখানে দাঁড়ায় না। কুরতুবী এই ক্ষমতার কথা বলেন নিয়ামত দান আর শাস্তিদানের প্রসঙ্গে।"
          },
          {
            "en": "On the word yad itself, the two commentaries here that address it are best reported as they stand. The Muyassar says the verse establishes the attribute of the hand for Allah, glorified and exalted, in the manner that befits His majesty. Ma'arif al-Qur'an says that yad is attributed to Allah in many places in the Qur'an while He is beyond body, limbs and organs; it counts the word among the mutashabihat, says its reality must be believed though no one can grasp its exact nature, and calls it improper to pursue the subject.",
            "bn": "ইয়াদ শব্দটি নিয়ে এখানকার যে দুটি তাফসীর কথা বলেছে, তাদের কথা যেমন আছে তেমন তুলে ধরাই ভালো। মুয়াসসার বলে, এ আয়াত থেকে আল্লাহ তাআলার জন্য হাত গুণটি সাব্যস্ত হয়, তাঁর মহিমার উপযোগী পদ্ধতিতে। মাআরিফুল কুরআন বলে, কুরআনের বহু জায়গায় ইয়াদ শব্দটি আল্লাহর দিকে সম্বন্ধিত হয়েছে, অথচ তিনি দেহ ও অঙ্গপ্রত্যঙ্গের ঊর্ধ্বে। তাই শব্দটিকে মুতাশাবিহাতের মধ্যে গণ্য করতে হয়। এর বাস্তবতায় ঈমান রাখতে হবে, তবে এর প্রকৃত ধরন কারও পক্ষে বোঝা সম্ভব নয়, আর এ বিষয়ে খোঁড়াখুঁড়ি করা অনুচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Death, Which Life",
          "bn": "কোন মৃত্যু, কোন জীবন"
        },
        "p": [
          {
            "en": "Alladhi khalaqa-l-mawta wa-l-hayah: who created death and life. The commentators differ on which death and which life are meant. Al-Baghawi carries, through 'Ata', the reading of Ibn 'Abbas: death in this world and life in the Hereafter. Al-Baghawi also carries Qatada's reading, that it means a person's death and life in this world, and at-Tabari's gloss runs the same way: He caused to die whom He willed, and gave life to whom He willed, until a fixed term.",
            "bn": "আল্লাযী খালাকাল মাওতা ওয়াল হায়াহ: যিনি সৃষ্টি করেছেন মৃত্যু ও জীবন। কোন মৃত্যু আর কোন জীবনের কথা, তা নিয়ে তাফসীরকারদের মত এক নয়। বাগাভী আতার সূত্রে ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: দুনিয়ার মৃত্যু আর আখিরাতের জীবন। বাগাভী কাতাদার ব্যাখ্যাও আনেন, যাঁর মতে এখানে মানুষের দুনিয়ার মৃত্যু ও জীবনের কথা। তাবারীর ব্যাখ্যাও সেদিকে যায়: তিনি যাকে চেয়েছেন মৃত্যু দিয়েছেন, যাকে চেয়েছেন জীবন দিয়েছেন, এক নির্দিষ্ট মেয়াদ পর্যন্ত।"
          },
          {
            "en": "Ibn Kathir reads the pair as a sequence: Allah brought creatures out of non-existence in order to test them. He compares 2:28, how can you disbelieve in Allah when you were dead and He gave you life, then He will cause you to die and then give you life; there the first state, non-existence, is named death, and this coming into being is named life. Al-Qurtubi reports a reading from Muqatil close to it: death is the drop, the clot and the lump of flesh, and life is the making of a human being with the spirit breathed in. Al-Qurtubi calls it a good saying.",
            "bn": "ইবন কাসীর জোড়াটিকে পড়েন একটা ধারাবাহিকতা হিসেবে: পরীক্ষা করার জন্যই আল্লাহ সৃষ্টিকে অনস্তিত্ব থেকে অস্তিত্বে এনেছেন। তিনি মিলিয়ে দেখান ২:২৮ আয়াতের সঙ্গে: কীভাবে তোমরা আল্লাহকে অস্বীকার করো, অথচ তোমরা ছিলে মৃত, তিনি তোমাদের জীবন দিলেন, আবার মৃত্যু দেবেন, আবার জীবিত করবেন। সেখানে প্রথম অবস্থা, অর্থাৎ অনস্তিত্বকে বলা হয়েছে মৃত্যু, আর এই অস্তিত্বে আসাকে বলা হয়েছে জীবন। কুরতুবী মুকাতিলের কাছাকাছি এক মত আনেন: মৃত্যু মানে নুতফা, আলাকা ও মুদগা, আর জীবন মানে রূহ ফুঁকে দিয়ে মানুষ বানানো। কুরতুবী একে উত্তম কথা বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Death Is Named First",
          "bn": "মৃত্যুর নাম কেন আগে"
        },
        "p": [
          {
            "en": "Why does death come before life? Al-Baghawi and al-Qurtubi each record two reasons, both introduced with 'it is said'. The first: death is put first because it is nearer to subjugation, al-qahr, and al-Qurtubi compares 42:49, where daughters are named before sons: He grants females to whom He wills. The second: death is put first because it is older, since at the start things were in the condition of death, like the drop of fluid and the dust, and life then came upon them. Ibn Kathir's reading through 2:28 sits with this second reason.",
            "bn": "জীবনের আগে মৃত্যুর উল্লেখ কেন? বাগাভী ও কুরতুবী দুজনেই দুটি কারণ আনেন, দুটোই 'বলা হয়' দিয়ে শুরু। প্রথম কারণ: মৃত্যু কাহরের, অর্থাৎ দমিয়ে দেওয়ার বেশি কাছাকাছি, তাই আগে। কুরতুবী এখানে ৪২:৪৯ আয়াতের তুলনা দেন, যেখানে ছেলের আগে মেয়ের কথা এসেছে: তিনি যাকে ইচ্ছা কন্যা দান করেন। দ্বিতীয় কারণ: মৃত্যু পুরোনো, তাই আগে। শুরুতে সব কিছু মৃত্যুর অবস্থায় ছিল, যেমন বীর্যবিন্দু আর মাটি, তারপর তাতে জীবন এসেছে। ইবন কাসীরের ২:২৮ দিয়ে পড়া এই দ্বিতীয় কারণের সঙ্গেই মেলে।"
          },
          {
            "en": "Al-Qurtubi adds a third as a separate point: the person most strongly moved to work is the one who sets his death before his eyes, so death comes first as the more important to the purpose the verse drives at. Qatada, in at-Tabari, puts the matter in one line: Allah humbled the son of Adam by death. At-Tabari, Ibn Kathir and al-Qurtubi also carry the line as something the Prophet ﷺ used to say, but each time from Qatada with no Companion named, and none of them grades it. The reasons stand side by side, and this article chooses none.",
            "bn": "কুরতুবী আলাদা আলোচনায় তৃতীয় একটি কারণ যোগ করেন। আমলের সবচেয়ে জোরালো তাড়না পায় সেই মানুষ, যে নিজের মৃত্যুকে চোখের সামনে রাখে। আয়াত যে উদ্দেশ্যে কথা বলছে, তার বিচারে মৃত্যুই বেশি গুরুত্বপূর্ণ, তাই আগে। তাবারীতে কাতাদা পুরো কথাটা এক বাক্যে বলেন: আল্লাহ আদমসন্তানকে মৃত্যু দিয়ে নত করেছেন। তাবারী, ইবন কাসীর ও কুরতুবী বাক্যটি নবী ﷺ-এর কথা হিসেবেও আনেন, তবে প্রতিবারই কাতাদা থেকে, মাঝে কোনো সাহাবীর নাম নেই, আর কেউই এর মান উল্লেখ করেননি। কারণগুলো পাশাপাশি থাকুক; এ লেখা কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, Brought as a Ram",
          "bn": "দুম্বার রূপে মৃত্যু"
        },
        "p": [
          {
            "en": "If death is created, what is it? Ibn Kathir notes that those who hold death to be an existent thing cite this verse, since death here is something created. Al-Qurtubi gives the scholars' account: death is not sheer non-existence or pure annihilation but the cutting of the spirit's tie to the body, its parting from it, a change of state and a move from abode to abode, and life is the reverse. Al-Baghawi then carries from Ibn 'Abbas that death was created in the form of a ram, and life in the form of a mare.",
            "bn": "মৃত্যু যদি সৃষ্টি হয়, তবে তা কী? ইবন কাসীর জানান, যাঁরা মৃত্যুকে অস্তিত্বশীল কিছু মনে করেন, তাঁরা এ আয়াতকে দলিল হিসেবে আনেন, কারণ এখানে মৃত্যুকে সৃষ্ট বলা হয়েছে। কুরতুবী আলেমদের ব্যাখ্যা দেন: মৃত্যু নিছক অনস্তিত্ব বা পুরোপুরি বিলুপ্তি নয়। এ হলো দেহের সঙ্গে রূহের বন্ধন ছিঁড়ে যাওয়া, দুয়ের বিচ্ছেদ, অবস্থার বদল, এক ঘর থেকে আরেক ঘরে চলে যাওয়া। জীবন এর উল্টো। বাগাভী এরপর ইবন আব্বাস (রাঃ) থেকে আনেন যে মৃত্যুকে সৃষ্টি করা হয়েছে দুম্বার আকৃতিতে, আর জীবনকে ঘোটকীর আকৃতিতে।"
          },
          {
            "en": "Al-Qurtubi relays that report too, through ath-Tha'labi and al-Qushayri, and answers it. It is Allah who truly causes death, he says, with angels as the means. Death is shown as a ram only in the Hereafter, and slaughtered on the Sirat, according to the sound report; what is said from Ibn 'Abbas needs a sound report to settle it. The ram report is in al-Bukhari's Sahih (no. 4730), from Abu Sa'id al-Khudri, who reports the Messenger of Allah ﷺ as saying:",
            "bn": "কুরতুবীও সা'লাবী ও কুশাইরীর সূত্রে বর্ণনাটি আনেন, তারপর এর জবাব দেন। তিনি বলেন, প্রকৃতপক্ষে মৃত্যু দেন আল্লাহ, ফেরেশতারা কেবল মাধ্যম। মৃত্যুকে দুম্বার রূপ দেওয়া হবে কেবল আখিরাতে, আর সিরাতের উপর তাকে জবাই করা হবে, সহীহ খবরে যেমন এসেছে। ইবন আব্বাস (রাঃ)-এর নামে যা বলা হয়, তা মানতে হলে সংশয় দূর করার মতো সহীহ বর্ণনা দরকার। দুম্বার বর্ণনাটি আছে সহীহ বুখারীতে (নং ৪৭৩০)। আবু সাঈদ খুদরী (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন:"
          },
          {
            "en": "'Death will be brought as a black-and-white ram. A caller will call: O people of Paradise! They will crane their necks and look, and he will say: Do you know this? They will say: Yes, this is death; and all of them have seen it. Then he will call: O people of the Fire! They will crane their necks and look, and he will say: Do you know this? They will say: Yes, this is death; and all of them have seen it. Then it will be slaughtered, and he will say: O people of Paradise, everlasting, and no death! O people of the Fire, everlasting, and no death!'",
            "bn": "'মৃত্যুকে আনা হবে সাদা-কালো দুম্বার আকৃতিতে। এক ঘোষক ডাকবে: হে জান্নাতবাসী! তারা ঘাড় উঁচু করে তাকাবে। সে বলবে: একে চেনো? তারা বলবে: হ্যাঁ, এ তো মৃত্যু। ততক্ষণে তাদের সবাই তাকে দেখে ফেলেছে। তারপর সে ডাকবে: হে জাহান্নামবাসী! তারা ঘাড় উঁচু করে তাকাবে। সে বলবে: একে চেনো? তারা বলবে: হ্যাঁ, এ তো মৃত্যু। ততক্ষণে তাদের সবাই তাকে দেখে ফেলেছে। তারপর তাকে জবাই করা হবে, আর ঘোষক বলবে: হে জান্নাতবাসী, চিরকাল থাকা, আর মৃত্যু নেই! হে জাহান্নামবাসী, চিরকাল থাকা, আর মৃত্যু নেই!'"
          },
          {
            "en": "The narration ends with the Prophet ﷺ reciting 19:39: and warn them of the Day of regret, when the matter is decided, while they are heedless and do not believe. Muslim has it as well (no. 2849), with a narrator's addition that the ram is made to stand between Paradise and the Fire; neither wording names the Sirat. Both collectors place it in their Sahih. Ma'arif al-Qur'an, following al-Qurtubi, reads it as death taking a concrete form in the Hereafter without implying that death is a body in this world.",
            "bn": "বর্ণনার শেষে নবী ﷺ ১৯:৩৯ আয়াত তিলাওয়াত করেন: আর তাদের সতর্ক করো আক্ষেপের দিন সম্পর্কে, যখন সব ফয়সালা হয়ে যাবে, অথচ তারা গাফিল, তারা ঈমান আনে না। সহীহ মুসলিমেও হাদীসটি আছে (নং ২৮৪৯), সেখানে এক বর্ণনাকারীর সংযোজন: দুম্বাটিকে জান্নাত ও জাহান্নামের মাঝখানে দাঁড় করানো হবে। কুরতুবী যে সিরাতের কথা বলেছেন, কোনো শব্দেই তার নাম নেই। দুই সংকলকই হাদীসটি নিজ নিজ সহীহ গ্রন্থে রেখেছেন। মাআরিফুল কুরআন কুরতুবীকে অনুসরণ করে একে পড়ে আখিরাতে মৃত্যুর মূর্ত রূপ নেওয়া হিসেবে। এর মানে এই নয় যে দুনিয়াতেও মৃত্যু কোনো দেহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Best in Deed, Not Most",
          "bn": "উত্তম আমল, বেশি আমল নয়"
        },
        "p": [
          {
            "en": "Li-yabluwakum ayyukum ahsanu 'amala: to test you, which of you is best in deed. Ibn Kathir glosses ahsan as khayr, best, and cites Muhammad ibn 'Ajlan: He did not say most in deed. Ma'arif al-Qur'an draws the same line: what counts is quality rather than quantity, which is why deeds will be weighed on the Day of Judgement and not counted. At-Tabari names what the test looks for: which of you is more obedient to Allah and quicker to seek His pleasure.",
            "bn": "লিইয়াবলুওয়াকুম আইয়ুকুম আহসানু আমালা: তোমাদের পরীক্ষা করার জন্য, আমলে কে সবচেয়ে উত্তম। ইবন কাসীর আহসানের অর্থ করেন খাইর, অর্থাৎ শ্রেষ্ঠ, আর মুহাম্মাদ ইবন আজলানের কথা আনেন: তিনি বলেননি, আমলে কে বেশি। মাআরিফুল কুরআনও একই রেখা টানে: গুনতি নয়, মানই আসল। সে জন্যই কিয়ামতের দিন আমল গোনা হবে না, ওজন করা হবে। পরীক্ষাটা কী খোঁজে, তাবারী তা বলে দেন: তোমাদের মধ্যে কে আল্লাহর বেশি অনুগত, কে তাঁর সন্তুষ্টির খোঁজে বেশি দ্রুত।"
          },
          {
            "en": "What makes a deed best? Al-Baghawi carries the answer of Fudayl ibn 'Iyad: the most sincere and the most correct. A deed is not accepted, Fudayl said, until it is both: sincere when it is for Allah, correct when it follows the Sunnah. As-Sa'di glosses the phrase with the same pair, akhlasuhu wa-aswabuhu, without naming anyone, and the Muyassar has best and most sincere. Al-Baghawi and al-Qurtubi also carry a report from Ibn 'Umar that the Prophet ﷺ explained it as most scrupulous about what Allah forbade and quickest in obeying Him; neither gives it a chain or a grading.",
            "bn": "আমল উত্তম হয় কিসে? বাগাভী ফুদাইল ইবন ইয়াদের জবাব আনেন: যা সবচেয়ে খাঁটি, আর সবচেয়ে সঠিক। ফুদাইল বলেছেন, খাঁটি ও সঠিক দুটোই না হওয়া পর্যন্ত আমল কবুল হয় না। খাঁটি, যখন তা আল্লাহর জন্য; সঠিক, যখন তা সুন্নাহ মোতাবেক। সা'দীও একই জোড়া দিয়ে অর্থ করেন, আখলাসুহু ওয়া আসওয়াবুহু, কারও নাম না নিয়ে। মুয়াসসারে আছে: শ্রেষ্ঠ ও সবচেয়ে খাঁটি। বাগাভী ও কুরতুবী ইবন উমর (রাঃ) থেকে একটি বর্ণনাও আনেন যে নবী ﷺ এর ব্যাখ্যা দিয়েছেন এভাবে: আল্লাহর নিষেধ থেকে যে সবচেয়ে বেশি বেঁচে চলে, আর তাঁর আনুগত্যে সবচেয়ে দ্রুত। তাঁদের কেউই এর সনদ বা মান উল্লেখ করেননি।"
          },
          {
            "en": "Two early readings narrow the test further. Al-Hasan, in al-Baghawi: which of you is most detached from the world and most ready to leave it. As-Suddi, in al-Qurtubi: which of you remembers death most, prepares for it best, and fears it most. The same phrase closes 18:7, on the adornment placed on the earth, and al-Qurtubi refers the reader back to his discussion in Surah al-Kahf; that verse has its own article here.",
            "bn": "দুটি প্রাচীন ব্যাখ্যা পরীক্ষাটিকে আরও নির্দিষ্ট করে। বাগাভীতে হাসানের কথা: দুনিয়ার প্রতি কে সবচেয়ে নির্লিপ্ত, তা ছেড়ে যেতে কে সবচেয়ে প্রস্তুত। কুরতুবীতে সুদ্দীর কথা: কে মৃত্যুকে সবচেয়ে বেশি স্মরণ করে, তার জন্য সবচেয়ে ভালো প্রস্তুতি নেয়, আর তাকে সবচেয়ে বেশি ভয় করে। একই বাক্যাংশ ১৮:৭ আয়াতের শেষেও আছে, যেখানে জমিনের সাজসজ্জার কথা। কুরতুবী পাঠককে সূরা কাহফে তাঁর আলোচনার দিকে ফিরিয়ে দেন; সে আয়াতের আলাদা প্রবন্ধ এখানে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Might That Forgives",
          "bn": "যে পরাক্রম ক্ষমা করে"
        },
        "p": [
          {
            "en": "Wa-huwa-l-'azizu-l-ghafur: and He is the Mighty, the Forgiving. At-Tabari: al-'Aziz is the strong, severe in His retribution on whoever disobeys Him and opposes His command; al-Ghafur forgives the sins of whoever turns to Him and repents of them. The Muyassar gives al-'Aziz as He whom nothing can defeat, and adds that the verse urges acts of obedience and deters from committing sins.",
            "bn": "ওয়া হুয়াল আযীযুল গাফূর: আর তিনি পরাক্রমশালী, ক্ষমাশীল। তাবারীর ব্যাখ্যায় আল-আযীয মানে শক্তিমান, যে তাঁর নাফরমানি করে ও হুকুম অমান্য করে তাকে শাস্তি দিতে তিনি কঠোর। আর আল-গাফূর মানে, যে তাঁর দিকে ফেরে ও গুনাহ থেকে তওবা করে, তার গুনাহ তিনি মাফ করেন। মুয়াসসারের ব্যাখ্যায় আল-আযীয তিনি, যাঁকে কোনো কিছুই অক্ষম করতে পারে না। সেখানে আরও আছে: আয়াতটি আনুগত্যের কাজে উৎসাহ দেয়, আর গুনাহ করা থেকে সাবধান করে।"
          },
          {
            "en": "Ibn Kathir dwells on how the two names meet. He is the Mighty, the Great, whose side cannot be breached, and with that He forgives whoever turns back to Him after disobeying; though He is mighty, He forgives, shows mercy, pardons and overlooks. As-Sa'di widens al-Ghafur to the wrongdoers, the remiss and the sinners, especially when they repent: He forgives their sins even if they reach the clouds of the sky, and covers their faults even if they fill the world.",
            "bn": "দুই নাম কীভাবে মিলেছে, ইবন কাসীর তা নিয়ে খানিক থামেন। তিনি পরাক্রমশালী, মহান, তাঁর সীমানা অলঙ্ঘ্য। তবু নাফরমানির পর যে তাঁর দিকে ফেরে, তাকে তিনি মাফ করেন। পরাক্রমশালী হয়েও তিনি ক্ষমা করেন, দয়া করেন, মার্জনা করেন, ছাড় দেন। সা'দী আল-গাফূরের পরিসর বাড়ান অন্যায়কারী, ত্রুটিকারী ও গুনাহগারদের পর্যন্ত, বিশেষ করে যখন তারা তওবা করে। তাদের গুনাহ আসমানের মেঘ ছুঁলেও তিনি মাফ করেন, তাদের দোষ দুনিয়া ভরে ফেললেও তিনি ঢেকে রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah That Intercedes",
          "bn": "যে সূরা সুপারিশ করে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with a hadith he takes from Ahmad and notes in the four Sunan. At-Tirmidhi's wording (no. 2891), from Abu Hurayra, is: 'Indeed a surah of the Qur'an, thirty verses, interceded for a man until he was forgiven, and it is Surah Tabaraka-lladhi bi-yadihi-l-mulk.' At-Tirmidhi grades it hasan, and Ibn Kathir and al-Qurtubi both report that grading. Abu Dawud has it as well (no. 1400), with the verb in the present: it intercedes for its companion until he is forgiven.",
            "bn": "ইবন কাসীর সূরার শুরুতে একটি হাদীস আনেন আহমাদ থেকে, আর জানান যে চারটি সুনান গ্রন্থেও তা আছে। আবু হুরায়রা (রাঃ) থেকে তিরমিযীর শব্দ (নং ২৮৯১): 'কুরআনের ত্রিশ আয়াতের একটি সূরা এক ব্যক্তির জন্য সুপারিশ করেছে, শেষে তাকে মাফ করে দেওয়া হয়েছে। সেটি হলো সূরা তাবারাকাল্লাযী বিয়াদিহিল মুলক।' তিরমিযী একে হাসান বলেছেন, আর ইবন কাসীর ও কুরতুবী দুজনেই সেই মান উল্লেখ করেন। আবু দাউদেও হাদীসটি আছে (নং ১৪০০), সেখানে ক্রিয়াটি বর্তমান কালে: সূরাটি তার সঙ্গীর জন্য সুপারিশ করে, যতক্ষণ না তাকে মাফ করা হয়।"
          },
          {
            "en": "At-Tirmidhi also records (no. 2890), from Ibn 'Abbas, that a Companion pitched his tent over a grave without knowing it was one, and heard a person in it reciting the surah to its end. When he told the Prophet ﷺ, he said: 'It is the defender, it is the deliverer; it delivers him from the punishment of the grave.' At-Tirmidhi calls it hasan gharib from this route. Ibn Kathir, by contrast, rejects a longer tale of the surah pleading in the grave as munkar jiddan, very objectionable, for a weak narrator. The surah itself then turns to the heavens, in 67:3 and 67:4.",
            "bn": "তিরমিযী ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন (নং ২৮৯০): এক সাহাবী না জেনে একটি কবরের উপর তাঁবু খাটান, আর শুনতে পান ভেতরে কেউ সূরাটি শেষ পর্যন্ত তিলাওয়াত করছে। তিনি নবী ﷺ-কে জানালে নবী ﷺ বলেন: 'এটি রক্ষাকারী, এটি মুক্তিদাতা; এটি তাকে কবরের আজাব থেকে মুক্তি দেয়।' তিরমিযী একে এই সূত্রে হাসান গরীব বলেছেন। অন্যদিকে কবরে সূরাটির সুপারিশ নিয়ে এক দীর্ঘ কাহিনিকে ইবন কাসীর মুনকার জিদ্দান, অর্থাৎ অত্যন্ত আপত্তিকর বলে নাকচ করেন, এক দুর্বল বর্ণনাকারীর কারণে। এরপর সূরাটি নিজেই আসমানের দিকে চোখ ফেরায়, ৬৭:৩ ও ৬৭:৪ আয়াতে।"
          }
        ]
      }
    ]
  },
  "67:3-4": {
    "sections": [
      {
        "h": {
          "en": "A Maker Who Invites Inspection",
          "bn": "যাচাই করার খোলা ডাক"
        },
        "p": [
          {
            "en": "Alladhi khalaqa sab'a samawatin tibaqa: He who created seven heavens in layers. The verse opens with alladhi, the relative word that has carried the surah since its first line, so the portrait of Allah simply continues: blessed is He in whose hand is the dominion, who created death and life, who created the seven heavens. At-Tabari begins his comment by saying that Allah is here informing about His own attribute. Nothing is commanded until the middle of 67:3, and the first command, when it comes, is to look.",
            "bn": "আল্লাযী খালাকা সাব'আ সামাওয়াতিন তিবাকা: যিনি স্তরে স্তরে সাতটি আসমান সৃষ্টি করেছেন। আয়াত শুরু হয়েছে 'আল্লাযী' দিয়ে। সূরার প্রথম লাইন থেকে এই শব্দটিই বর্ণনাকে টেনে নিয়ে চলেছে, তাই আল্লাহর পরিচয় এখানে থামে না, এগিয়ে যায়। বরকতময় তিনি, যাঁর হাতে রাজত্ব; যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন; যিনি সাত আসমান সৃষ্টি করেছেন। তাবারী আলোচনা শুরু করেন এ কথা বলে যে আল্লাহ এখানে নিজের গুণের খবর দিচ্ছেন। ৬৭:৩ আয়াতের মাঝামাঝি পর্যন্ত কোনো আদেশ নেই। প্রথম যে আদেশটি আসে, সেটি দেখার আদেশ।"
          },
          {
            "en": "The placement carries the point. 67:2, which has its own article, names the purpose of death and life: to test which of you is best in deed. The very next verse presents the One who sets that test through a piece of His own work, and offers the work for inspection. At-Tabari, paraphrasing 67:4, addresses the reader as ya ibn Adam, O son of Adam; Qatada's gloss on futur in his report does the same, and al-Baghawi writes the phrase into ma tara. The verse speaks to every human eye.",
            "bn": "আয়াতের অবস্থানেই কথাটা লুকিয়ে আছে। ৬৭:২ আয়াত, যার আলাদা প্রবন্ধ আছে, মৃত্যু ও জীবনের উদ্দেশ্য বলে দেয়: আমলে কে সবচেয়ে উত্তম, তা পরীক্ষা করা। ঠিক পরের আয়াতেই যিনি এ পরীক্ষা নেন, তিনি নিজের সৃষ্টির একটি নমুনা সামনে রেখে পরিচয় দেন, আর সেটি যাচাই করে দেখতে বলেন। তাবারী ৬৭:৪ আয়াতের ব্যাখ্যায় পাঠককে ডাকেন 'ইয়া ইবনা আদম', হে আদমসন্তান বলে। তাঁর উদ্ধৃত বর্ণনায় কাতাদাও ফুতূরের ব্যাখ্যায় একই ডাক দেন, আর বাগাভী কথাটা 'মা তারা'-র ব্যাখ্যার ভেতরেই বসিয়ে দেন। আয়াতের কথা তাই প্রতিটি মানুষের চোখের উদ্দেশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seven, in Layers",
          "bn": "স্তরে স্তরে সাত আসমান"
        },
        "p": [
          {
            "en": "Tibaq is explained the same way by nearly every commentary fetched. At-Tabari: tabaqan fawqa tabaq, layer above layer, some of them above others. Al-Baghawi: layer upon layer. As-Sa'di adds a negative to fix the sense: each one above the other, and not one single layer. The Muyassar chooses mutanasiqa, well ordered and in harmony, some above others. Al-Qurtubi gives the plain meaning, some above others, and then reports from Ibn Abbas that the part of them which is joined is their edges.",
            "bn": "তিবাক শব্দের ব্যাখ্যায় সংগৃহীত প্রায় সব তাফসীর একই কথা বলে। তাবারী: তবাকান ফাওকা তবাক, স্তরের উপর স্তর, একটির উপর আরেকটি। বাগাভীও বলেন স্তরের উপর স্তর। সা'দী অর্থটা পাকা করতে একটি না-বাচক কথা জুড়ে দেন: প্রতিটি অপরটির উপরে, সবগুলো মিলে একটিমাত্র স্তর নয়। মুয়াসসার বেছে নেয় 'মুতানাসিকা' শব্দটি, অর্থাৎ সুবিন্যস্ত ও পরস্পর মানানসই, একটির উপর আরেকটি। কুরতুবী সরল অর্থ দেন, একটির উপর আরেকটি। তারপর ইবন আব্বাস (রাঃ) থেকে বর্ণনা আনেন যে আসমানগুলোর যে অংশ পরস্পর লেগে আছে, তা তাদের কিনারা।"
          },
          {
            "en": "Al-Qurtubi also sets out the grammar. Tibaq may describe the seven, an adjective formed from a verbal noun; or it may be a verbal noun meaning mutabaqa, so that He created seven heavens and fitted them one to another; or, on Sibawayh's view, a second object, which would make khalaqa mean made. It is the plural of tabaq, like jamal and jimal, or of tabaqa. To show the word in living speech he cites Aban ibn Taghlib, who heard a Bedouin disparage a man: his evil comes in layers, and his good does not last.",
            "bn": "কুরতুবী শব্দটির ব্যাকরণও খুলে দেখান। তিবাক হতে পারে সাতটি আসমানের বিশেষণ, যা গড়া হয়েছে ক্রিয়াবাচক বিশেষ্য থেকে। আবার নিজেই ক্রিয়াবাচক বিশেষ্য হতে পারে, অর্থ মুতাবাকা; তখন মানে দাঁড়ায়, তিনি সাত আসমান সৃষ্টি করে একটিকে আরেকটির সঙ্গে মিলিয়ে বসিয়েছেন। সিবাওয়াইহের মতে এটি ক্রিয়ার দ্বিতীয় কর্ম, আর তাহলে খালাকা অর্থ হয় বানানো। শব্দটি তবাকের বহুবচন, যেমন জামাল থেকে জিমাল, কিংবা তবাকার। মুখের ভাষায় শব্দটি কেমন চলে, তা দেখাতে তিনি আবান ইবন তাগলিবের কথা আনেন। তিনি এক বেদুইনকে এক লোকের নিন্দা করতে শুনেছিলেন: তার মন্দ স্তরে স্তরে জমা, আর তার ভালো টেকে না।"
          },
          {
            "en": "Whether the layers touch is a question Ibn Kathir raises himself. Are they continuous, one resting on another, or separate, with empty space between them? He reports two views and calls the second the more correct, pointing to the hadith of the Isra' and other reports, which he names without quoting. The Ibn Abbas report in al-Qurtubi, that the joined part is their edges, sits beside this without settling it. The verse says tibaq and stops there, and the article leaves the question where the commentators left it.",
            "bn": "স্তরগুলো একটি আরেকটির সঙ্গে লেগে আছে কি না, এ প্রশ্ন ইবন কাসীর নিজেই তোলেন। এগুলো কি একটানা, একটির উপর আরেকটি ভর দিয়ে আছে? নাকি আলাদা আলাদা, মাঝে ফাঁকা জায়গা? তিনি দুটি মত উল্লেখ করেন এবং দ্বিতীয়টিকে বেশি সঠিক বলেন। প্রমাণ হিসেবে তিনি ইসরা বা রাত্রিভ্রমণের হাদীস ও অন্যান্য বর্ণনার কথা বলেন, তবে কোনোটির ভাষ্য উদ্ধৃত করেন না। কুরতুবীতে ইবন আব্বাস (রাঃ)-এর যে বর্ণনা, কিনারাগুলো লেগে আছে, সেটি এর পাশে থাকে, প্রশ্নের মীমাংসা করে না। আয়াত নিজে 'তিবাক' বলে থেমে গেছে। তাফসীরকারেরা প্রশ্নটা যেখানে রেখেছেন, এ প্রবন্ধও সেখানেই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tafawut, Read Two Ways",
          "bn": "তাফাউত, দুই রকম পাঠে"
        },
        "p": [
          {
            "en": "Ma tara fi khalqi r-Rahmani min tafawut: you see no tafawut in the creation of the Most Merciful. Here the reciters divide. At-Tabari reports that most readers of Madinah and Basra, with some Kufans, read tafawut, with an alif, while most readers of Kufa read tafawwut, the waw doubled and no alif. Al-Qurtubi and al-Baghawi name the Kufans as Hamza and al-Kisa'i, and al-Qurtubi adds that it was the reading of Ibn Mas'ud and his companions. At-Tabari's verdict: both are well-known readings with one meaning.",
            "bn": "মা তারা ফী খালকির রাহমানি মিন তাফাউত: দয়াময়ের সৃষ্টিতে তুমি কোনো তাফাউত দেখবে না। এখানে কারীদের পাঠ দুই ভাগ হয়ে যায়। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী এবং কূফার কয়েকজন পড়েছেন 'তাফাউত', আলিফসহ। আর কূফার অধিকাংশ কারী পড়েছেন 'তাফাওউত', ওয়াওয়ে তাশদীদ দিয়ে, আলিফ ছাড়া। কুরতুবী ও বাগাভী কূফার কারীদের নাম বলেন: হামযা ও কিসাঈ। কুরতুবী যোগ করেন, এটি ইবন মাসউদ (রাঃ) ও তাঁর সঙ্গীদেরও পাঠ। তাবারীর সিদ্ধান্ত: দুটিই সুপরিচিত পাঠ, আর দুটির অর্থ একই।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi call them two dialect forms of one word, like tahammul and tahamul, and at-Tabari sets la tusa'ir beside la tusa''ir as a parallel. Al-Qurtubi then records a small dispute. Abu 'Ubayd preferred tafawwut, arguing from a saying of 'Abd ar-Rahman ibn Abi Bakr. An-Nahhas rejected that: the verb in the saying means deciding over someone's head, and tafawut suits the verse better, since it is said of things that differ and stand apart, and the verse before it has just spoken of layers.",
            "bn": "কুরতুবী ও বাগাভী বলেন, এ দুটি একই শব্দের দুই রকম আঞ্চলিক রূপ, যেমন তাহাম্মুল আর তাহামুল। তাবারী উদাহরণ দেন 'লা তুসা'ইর' আর 'লা তুসা''ইর'। তারপর কুরতুবী একটি ছোট বিতর্ক তুলে ধরেন। আবু উবায়দ 'তাফাওউত' পাঠটি পছন্দ করতেন, আর যুক্তি দিতেন আবদুর রহমান ইবন আবী বকরের একটি উক্তি দিয়ে। নাহহাস সে যুক্তি নাকচ করেন। তাঁর কথা, ওই উক্তিতে ক্রিয়াটির অর্থ কাউকে না জিজ্ঞেস করে তার ব্যাপারে নিজে সিদ্ধান্ত নেওয়া। আয়াতে 'তাফাউত'-ই বেশি মানানসই, কারণ শব্দটি বলা হয় এমন জিনিসের বেলায়, যা পরস্পর ভিন্ন ও দূরে দূরে। তা ছাড়া ঠিক আগেই আয়াতে স্তরের কথা এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Tafawut in What ar-Rahman Made",
          "bn": "আর-রাহমানের সৃষ্টিতে কোনো 'তাফাউত' নেই"
        },
        "p": [
          {
            "en": "What would a tafawut be? Al-Qurtubi and al-Baghawi trace it to fawt, one thing outrunning another, so that a flaw appears where the parts fail to stay level. Al-Qurtubi supports this with a gloss from Ibn Abbas, min tafarruq, any coming apart. At-Tabari, and Qatada in his report, say simply ikhtilaf, discrepancy. Ibn Kathir piles up the negations: no discrepancy, no discord, no contradiction, no deficiency, no defect, no gap; rather it is harmonious and level. The Muyassar pairs ikhtilaf with tabayun, divergence.",
            "bn": "তাফাউত আসলে কী? কুরতুবী ও বাগাভী শব্দটির মূল খুঁজে পান 'ফাওত'-এ, অর্থাৎ একটি জিনিস আরেকটিকে ছাড়িয়ে চলে যাওয়া। অংশগুলো সমান তালে না থাকলে সেখানে খুঁত দেখা দেয়। কুরতুবী এর সমর্থনে ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: 'মিন তাফাররুক', কোনো বিচ্ছিন্নতা। তাবারী এবং তাঁর উদ্ধৃত বর্ণনায় কাতাদা সোজা বলেন: ইখতিলাফ, অমিল। ইবন কাসীর একের পর এক 'না' সাজিয়ে দেন: কোনো অমিল নেই, বিরোধ নেই, বৈপরীত্য নেই, ঘাটতি নেই, দোষ নেই, ফাঁক নেই; বরং সবকিছু সুসংগত ও সমান। মুয়াসসার ইখতিলাফের সঙ্গে জুড়ে দেয় 'তাবায়ুন', অর্থাৎ বেমিল।"
          },
          {
            "en": "The commentators differ over how far the sentence reaches. At-Tabari makes it general: you see no discrepancy in what the Merciful created, not in a heaven, not on earth, not in anything else. Al-Qurtubi gives the wide meaning first, with a qualification: it is upright and level, pointing to its Creator, even though its forms and qualities differ. Then he reports a narrower view: the heavens alone are meant, so you see no defect in the creation of the heavens. Both stand in the sources, and either way the next clause turns the eye upward.",
            "bn": "বাক্যটি কতদূর পর্যন্ত বিস্তৃত, তা নিয়ে তাফসীরকারদের মধ্যে ভিন্নতা আছে। তাবারী একে ব্যাপক অর্থে নেন: দয়াময় যা সৃষ্টি করেছেন, আসমানে হোক, জমিনে হোক বা অন্য কিছুতে, কোথাও তুমি কোনো অমিল দেখবে না। কুরতুবীও প্রথমে ব্যাপক অর্থটাই দেন, সঙ্গে একটি শর্ত জুড়ে: সৃষ্টি সোজা ও সুষম, তার স্রষ্টার দিকে পথ দেখায়, যদিও তার আকার ও গুণ ভিন্ন ভিন্ন। তারপর তিনি একটি সংকীর্ণ মত আনেন: এখানে শুধু আসমানই উদ্দেশ্য, অর্থাৎ আসমানের সৃষ্টিতে তুমি কোনো দোষ দেখবে না। দুটি মতই উৎসে আছে। যেটাই ধরা হোক, পরের বাক্য চোখকে উপরের দিকেই ফেরায়।"
          },
          {
            "en": "As-Sa'di draws the positive out of the negative: with deficiency ruled out from every angle, the heavens are beautiful and complete, proportioned in colour, form and height, and in the sun, moon and shining stars set in them, fixed and moving alike. The verse says the creation of ar-Rahman, the Most Merciful, and the same name returns in 67:19 over the birds that none holds aloft but Him. No fetched commentator remarks on this, so the pairing is the reader's own noticing.",
            "bn": "সা'দী না-বাচক কথার ভেতর থেকে হ্যাঁ-বাচক অর্থটা বের করে আনেন। তাঁর কথায়, সব দিক থেকে ঘাটতি নাকচ হয়ে গেলে আসমান হয় সুন্দর ও পূর্ণ, সব দিক থেকে সুষম: রঙে, গড়নে, উচ্চতায়, আর তাতে স্থাপিত সূর্য, চাঁদ ও উজ্জ্বল তারকারাজিতে, স্থির ও চলমান দুই ধরনেরই। আয়াত বলেছে 'আর-রাহমানের সৃষ্টি', পরম দয়াময়ের। এ নামটিই আবার আসে ৬৭:১৯ আয়াতে, সেই পাখিদের প্রসঙ্গে, যাদের তিনি ছাড়া কেউ শূন্যে ধরে রাখে না। সংগৃহীত কোনো তাফসীর এখানে নামটি নিয়ে মন্তব্য করেনি। তাই এই মিলটুকু কেবল পাঠকের নিজের চোখে পড়া একটি বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Send the Gaze Back",
          "bn": "দৃষ্টি আবার ফিরিয়ে আনা"
        },
        "p": [
          {
            "en": "Fa-rji'i l-basara: so return the gaze. Al-Qurtubi notes that the fa follows no stated verb of looking, and explains it from ma tara just before: the sense, as Qatada put it, is look, then return the gaze. He gathers three glosses close in meaning: send your glance back to the sky; turn your sight about in it; strain your sight towards it. He states its purpose: Allah commanded them to look at His creation so that they would take heed and reflect on His power.",
            "bn": "ফারজি'ইল বাসারা: সুতরাং দৃষ্টি ফিরিয়ে আনো। কুরতুবী লক্ষ করেন, এই 'ফা'-র আগে দেখার কোনো ক্রিয়া উল্লেখ নেই। তিনি এর ব্যাখ্যা করেন ঠিক আগের 'মা তারা' দিয়ে। কাতাদার ভাষায় অর্থ দাঁড়ায়: দেখো, তারপর আবার দৃষ্টি ফেরাও। কুরতুবী কাছাকাছি অর্থের তিনটি ব্যাখ্যা একসঙ্গে আনেন: চোখ আবার আসমানের দিকে ফেরাও; আসমানে দৃষ্টি ঘুরিয়ে দেখো; আসমানের দিকে খুব মনোযোগ দিয়ে তাকাও। তিনি উদ্দেশ্যটাও বলে দেন: আল্লাহ তাদের আদেশ দিয়েছেন তাঁর সৃষ্টির দিকে তাকাতে, যাতে তারা শিক্ষা নেয় এবং তাঁর কুদরত নিয়ে ভাবে।"
          },
          {
            "en": "As-Sa'di reads the command as following from what is known: because the heavens' perfection is plain, Allah ordered the looking to be repeated and the gaze to travel over their reaches: return it to them, he says, as one who looks in order to learn. Ibn Kathir's paraphrase is close: look at the sky and contemplate it. Then comes the question, hal tara min futur, do you see any futur? The command is not to find a flaw but to look for one honestly, and then admit what the eye brings back.",
            "bn": "সা'দী আদেশটিকে দেখেন আগে থেকে জানা একটি কথার ফল হিসেবে। আসমানের পূর্ণতা যেহেতু সুস্পষ্ট, আল্লাহ বারবার তাকাতে বলেছেন, এর চারদিকে দৃষ্টি বুলিয়ে নিতে বলেছেন। তাঁর ভাষায়: দৃষ্টি আবার সেদিকে ফেরাও, শিক্ষা নেওয়ার জন্য যে তাকায় তার মতো করে। ইবন কাসীরের ব্যাখ্যাও কাছাকাছি: আসমানের দিকে তাকাও, গভীরভাবে ভেবে দেখো। তারপর আসে প্রশ্ন: হাল তারা মিন ফুতূর, কোনো ফুতূর দেখতে পাও কি? আদেশটা খুঁত বের করার নয়। আদেশটা সৎভাবে খুঁজে দেখার, তারপর চোখ যা নিয়ে ফিরল তা মেনে নেওয়ার।"
          },
          {
            "en": "Futur gathers several glosses. Ibn Kathir reports from Ibn Abbas, Mujahid, ad-Dahhak, ath-Thawri and others: cracks. As-Suddi: holes. Ibn Abbas in another report: weakness, a giving way. Qatada: do you see any gap, O son of Adam? At-Tabari's own word is sudu', fissures, and he roots it in takadu s-samawatu yatafattarna min fawqihinna, the heavens almost split from above them (42:5), where the verb means to crack open. Al-Qurtubi quotes a poet: He built you a sky without pillars, adorned it, and in it is no futur.",
            "bn": "ফুতূর শব্দের কয়েকটি ব্যাখ্যা পাওয়া যায়। ইবন কাসীর ইবন আব্বাস (রাঃ), মুজাহিদ, দাহহাক, সাওরী প্রমুখ থেকে বর্ণনা করেন: ফাটল। সুদ্দী বলেন: ছিদ্র। আরেক বর্ণনায় ইবন আব্বাস (রাঃ) বলেন: দুর্বলতা, ঢিলে হয়ে যাওয়া। কাতাদা বলেন: হে আদমসন্তান, কোনো ফাঁক দেখতে পাও কি? তাবারী নিজে বেছে নেন 'সুদূ'', অর্থাৎ চিড়। শব্দটির শিকড় তিনি দেখান এ আয়াতে: তাকাদুস সামাওয়াতু ইয়াতাফাত্তারনা মিন ফাওকিহিন্না, আসমান উপর থেকে ফেটে পড়ার উপক্রম হয় (৪২:৫)। সেখানে ক্রিয়াটির অর্থ ফেটে যাওয়া, চিড় ধরা। কুরতুবী একটি কবিতার চরণ উদ্ধৃত করেন: তিনি তোমাদের জন্য খুঁটি ছাড়াই আসমান বানিয়েছেন, তাকে সাজিয়েছেন, তাতে কোনো ফুতূর নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Look Again, and Again",
          "bn": "আবার দেখো, আরও একবার"
        },
        "p": [
          {
            "en": "Thumma rji'i l-basara karratayn: then return the gaze twice more. Karratayn is a dual, and the sources read it two ways. Taken at its count it means twice; so Ibn Kathir reports from Qatada. Al-Qurtubi gives the reason two is apt: someone who looks at a thing once does not see its fault until he looks at it again, so Allah informs that even looking twice, a person finds no fault in the sky, only bewilderment. At-Tabari, al-Baghawi from Ibn Abbas, and the Muyassar all say once after another.",
            "bn": "সুম্মারজি'ইল বাসারা কাররাতাইন: তারপর আবার দৃষ্টি ফেরাও, দুবার। কাররাতাইন দ্বিবচন, আর উৎসগুলো একে দুইভাবে পড়ে। সংখ্যা ধরে পড়লে অর্থ দুবার; ইবন কাসীর কাতাদা থেকে এ অর্থই বর্ণনা করেন। দুবারের কথা কেন মানানসই, কুরতুবী তার কারণ বলেন: মানুষ কোনো জিনিস একবার দেখলে তার খুঁত চোখে পড়ে না, যতক্ষণ না আরেকবার দেখে। তাই আল্লাহ জানিয়ে দিলেন, দুবার তাকালেও আসমানে কোনো খুঁত মিলবে না, বরং দেখতে দেখতে মানুষ হতবাক হয়ে যাবে। তাবারী, ইবন আব্বাস (রাঃ) থেকে বাগাভী, আর মুয়াসসার সবাই বলেন: একবারের পর আরেকবার।"
          },
          {
            "en": "The second reading treats the dual as a figure for many. As-Sa'di states it outright: what is meant is much repetition. Al-Qurtubi, having explained the number two, ends his comment by saying that karratayn here means multiplicity, and takes the proof from the verse itself: a gaze that comes back abased and exhausted shows how much looking was done. Ibn Kathir's summary lands in the same place: however often you repeat the look. So al-Qurtubi holds both, the count explained and the count exceeded, and the instruction loses nothing either way.",
            "bn": "দ্বিতীয় পাঠে দ্বিবচনটি অনেকবারের ইঙ্গিত। সা'দী সরাসরি বলেন: উদ্দেশ্য বারবার, বহুবার তাকানো। কুরতুবী দুবারের ব্যাখ্যা দেওয়ার পর আলোচনার শেষে বলেন, এখানে কাররাতাইন মানে আধিক্য। প্রমাণও তিনি আয়াত থেকেই নেন: যে দৃষ্টি লাঞ্ছিত ও ক্লান্ত হয়ে ফেরে, তা থেকেই বোঝা যায় কত বেশি তাকানো হয়েছে। ইবন কাসীরের সারকথাও একই জায়গায় পৌঁছায়: যতবারই দৃষ্টি ফেরানো হোক না কেন। কুরতুবী তাই দুটিকেই ধরে রাখেন। সংখ্যার ব্যাখ্যাও দেন, আবার সংখ্যা ছাড়িয়েও যান। যেভাবেই পড়া হোক, আদেশের কিছু কমে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Khasi'an, and Worn Out",
          "bn": "'খাসিআন', আর ক্লান্ত"
        },
        "p": [
          {
            "en": "Yanqalib ilayka l-basaru khasi'an wa huwa hasir: the gaze will turn back to you khasi', and it hasir. At-Tabari explains khasi' as belittled and driven off, from what the Arabs say to a dog, ikhsa', when they chase it away. Al-Qurtubi draws the same picture, and glosses the gaze as humbled, belittled, kept far from seeing any flaw. Ibn Abbas says humiliated; Mujahid and Qatada, belittled. Al-Qurtubi also reports from Ibn Abbas, and al-Baghawi puts it in his own gloss: it is the one that did not see what it wanted.",
            "bn": "ইয়ানকালিব ইলাইকাল বাসারু খাসিআন ওয়া হুয়া হাসীর: দৃষ্টি তোমার কাছে ফিরে আসবে খাসি' হয়ে, আর তা হবে হাসীর। তাবারী খাসি'-এর ব্যাখ্যা করেন লাঞ্ছিত ও দূরে তাড়ানো। শব্দটি এসেছে কুকুর তাড়ানোর সময় আরবদের বলা কথা থেকে: 'ইখসা', দূর হ। কুরতুবীও একই ছবি আঁকেন। তাঁর ব্যাখ্যায় দৃষ্টি বিনীত, ছোট হয়ে আছে, কোনো খুঁত দেখা থেকে দূরে সরে গেছে। ইবন আব্বাস (রাঃ) বলেন: অপমানিত। মুজাহিদ ও কাতাদা বলেন: নত, হেয়। কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন, আর বাগাভী নিজের ব্যাখ্যাতেই কথাটা রাখেন: খাসি' সেই দৃষ্টি, যা নিজের কাঙ্ক্ষিত জিনিস দেখতে পায়নি।"
          },
          {
            "en": "Hasir names a second failure. At-Tabari: tired out and dulled. Ibn Abbas, in Ibn Kathir: dimmed. Mujahid, Qatada and as-Suddi: cut off from exhaustion. Al-Qurtubi says it has reached the limit of weariness, and allows two senses: active, the gaze that has tired, or passive, the gaze worn down by the distance of the thing, which he says is Ibn Abbas's meaning. He cites a poet's line about horses left husra, leaving their foals behind on the road, and reports a further view that hasir means regretful.",
            "bn": "হাসীর দ্বিতীয় আরেক ব্যর্থতার নাম। তাবারী: শ্রান্ত, অবসন্ন। ইবন কাসীরের বর্ণনায় ইবন আব্বাস (রাঃ): নিস্তেজ। মুজাহিদ, কাতাদা ও সুদ্দী: ক্লান্তিতে থেমে যাওয়া। কুরতুবী বলেন, এ দৃষ্টি ক্লান্তির শেষ সীমায় পৌঁছে গেছে। তিনি দুই রকম অর্থের সুযোগ রাখেন। হয় দৃষ্টি নিজেই ক্লান্ত হয়েছে, নয়তো বস্তুর দূরত্ব তাকে ক্লান্ত করে দিয়েছে; তাঁর মতে দ্বিতীয়টিই ইবন আব্বাস (রাঃ)-এর কথার অর্থ। তিনি এক কবির চরণ আনেন, যেখানে ঘোড়াগুলো 'হাসরা', এতটাই শ্রান্ত যে পথে বাচ্চাদের ফেলে রেখে যায়। আরেকটি মতও তিনি উল্লেখ করেন: হাসীর মানে অনুতপ্ত।"
          },
          {
            "en": "Not everyone kept the two words apart. At-Tabari reports that some held khasi' and hasir to be one, and quotes Ibn Zayd: the gaze tires of seeking a crack in the sky, and comes back worn out before it has seen one. Then Ibn Zayd adds what the verse leaves unsaid: when the Day of Resurrection comes, the sky will split, then crack open, and then a matter greater than that will come, and it will be stripped away. In his reading, the sky no eye can fault today will not stay unbroken.",
            "bn": "সবাই অবশ্য দুটি শব্দকে আলাদা করেননি। তাবারী জানান, কারও কারও মতে খাসি' আর হাসীর একই কথা। তিনি ইবন যায়দের বক্তব্য উদ্ধৃত করেন: আসমানে ফাটল খুঁজতে খুঁজতে দৃষ্টি ক্লান্ত হয়ে যায়, আর কোনো ফাটল দেখার আগেই শ্রান্ত হয়ে ফিরে আসে। তারপর ইবন যায়দ এমন কথা যোগ করেন, যা এ আয়াত নিজে বলে না। কিয়ামতের দিন এলে আসমান ফেটে যাবে, তারপর চিরে যাবে, তারপর এর চেয়েও বড় ব্যাপার আসবে, আসমানকে খুলে সরিয়ে নেওয়া হবে। তাঁর পাঠে আজকের যে আসমানে কোনো চোখ খুঁত পায় না, তা চিরকাল অটুট থাকবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lamps After the Looking",
          "bn": "দেখার পরে প্রদীপমালা"
        },
        "p": [
          {
            "en": "After negating any deficiency, Ibn Kathir says, Allah explains the heavens' beauty in 67:5: We adorned the nearest heaven with lamps. As-Sa'di closes his comment on 67:4 the same way. Ma'arif al-Qur'an, citing Bayan al-Qur'an, remarks that if the heaven were ever shown to be invisible, the looking would mean intellectual observation; that is its remark, not the verse's. Beyond Ibn Kathir's passing mention of the Isra' reports, no fetched commentary quotes a hadith on these verses.",
            "bn": "ইবন কাসীর বলেন, সব ঘাটতি নাকচ করার পর আল্লাহ ৬৭:৫ আয়াতে আসমানের সৌন্দর্যের কথা বলেন: আমি নিকটবর্তী আসমানকে প্রদীপমালা দিয়ে সাজিয়েছি। সা'দীও ৬৭:৪ আয়াতের আলোচনা একইভাবে শেষ করেন। মাআরিফুল কুরআন বয়ানুল কুরআনের বরাতে মন্তব্য করে, কোনো প্রমাণে যদি দেখা যায় আসমান চোখে দেখা যায় না, তবে এখানে দৃষ্টি ফেরানো মানে বুদ্ধি দিয়ে ভেবে দেখা। এ মন্তব্য মাআরিফের, আয়াতের নয়। ইসরার বর্ণনার প্রতি ইবন কাসীরের সংক্ষিপ্ত ইঙ্গিত ছাড়া সংগৃহীত কোনো তাফসীর এ দুই আয়াতে কোনো হাদীস উদ্ধৃত করেনি।"
          },
          {
            "en": "The surah ranges on: 67:8 pictures the Fire almost bursting with rage, 67:15 calls the earth broken in for walking, and 67:26 leaves the knowledge of the Hour with Allah alone, while 3:190 and 3:191 praise those who reflect on the creation of the heavens. The instruction in 67:3 and 67:4 can be obeyed tonight, under any clear sky, and the second look and the tenth will bring back the same report. The search that does find something, 67:2 has said, runs through the quality of one's own deeds.",
            "bn": "সূরা এরপর আরও এগিয়ে যায়। ৬৭:৮ আয়াতে জাহান্নাম ক্রোধে ফেটে পড়ার উপক্রম, ৬৭:১৫ আয়াতে জমিনকে চলাফেরার জন্য বশ মানানো বলা হয়েছে, আর ৬৭:২৬ আয়াত কিয়ামতের জ্ঞান শুধু আল্লাহর কাছে রেখে দেয়। ৩:১৯০ ও ৩:১৯১ আয়াত প্রশংসা করে তাদের, যারা আসমানের সৃষ্টি নিয়ে চিন্তা করে। ৬৭:৩ ও ৬৭:৪ আয়াতের আদেশ আজ রাতেই মানা যায়, যেকোনো পরিষ্কার আকাশের নিচে দাঁড়িয়ে। দ্বিতীয়বার তাকান বা দশমবার, খবর একই আসবে। যে খোঁজে সত্যিই কিছু মেলে, ৬৭:২ আয়াত আগেই বলে দিয়েছে, তা চলে নিজের আমলের মানের ভেতর দিয়ে।"
          }
        ]
      }
    ]
  },
  "67:8": {
    "sections": [
      {
        "h": {
          "en": "After the Lamps, the Blaze",
          "bn": "প্রদীপের পরে জ্বলন্ত আগুন"
        },
        "p": [
          {
            "en": "Surat al-Mulk opens by pointing at what can be seen: seven heavens in layers, no flaw in what ar-Rahman made, and in 67:5 the nearest heaven adorned with lamps. Ma'arif al-Qur'an marks the turn that follows. Up to this point, it says, the evidence of Allah's knowledge and power was drawn from the kinds of creation. From 67:6 the subject becomes the punishment of those who disbelieve and the reward of the believers and the obedient. That subject, it adds, runs through seven verses before the surah returns to His knowledge and power.",
            "bn": "সূরা মুলক শুরু হয় চোখে দেখা যায় এমন জিনিসের দিকে ইশারা করে: স্তরে স্তরে সাত আসমান, রহমানের সৃষ্টিতে কোনো খুঁত নেই, আর ৬৭:৫ আয়াতে প্রদীপমালায় সাজানো নিকটতম আকাশ। এর পরের মোড়টা মাআরিফুল কুরআন চিহ্নিত করে দেয়। তার ভাষায়, এ পর্যন্ত আল্লাহর জ্ঞান ও কুদরতের প্রমাণ আনা হয়েছিল নানা রকম সৃষ্টি থেকে। ৬৭:৬ থেকে আলোচনা ঘুরে যায় কাফিরদের শাস্তি আর মুমিন ও অনুগতদের পুরস্কারের দিকে। মাআরিফ আরও বলে, এ আলোচনা চলে সাতটি আয়াত জুড়ে, তারপর সূরা আবার ফিরে যায় তাঁর জ্ঞান ও কুদরতের কথায়।"
          },
          {
            "en": "Our verse sits inside that passage. Verse 67:6 names the destination: for those who disbelieved in their Lord is the punishment of Jahannam, and wretched is the destination. Verse 67:7 describes the arrival: when they are thrown into it, they hear from it a shahiq while it boils up. Ibn Kathir, in the abridged English, quotes Ibn Jarir that shahiq means the sound of shouting, and ath-Thawri that it will boil them as a few seeds are boiled in a great deal of water. Then comes 67:8.",
            "bn": "আমাদের আয়াতটি এই অংশেরই ভেতরে। ৬৭:৬ আয়াত গন্তব্যের নাম বলে দেয়: যারা তাদের রবকে অস্বীকার করেছে, তাদের জন্য জাহান্নামের শাস্তি, আর কতই না মন্দ সে ঠিকানা। ৬৭:৭ আয়াত পৌঁছানোর মুহূর্তটা দেখায়: তাদের যখন তাতে ফেলা হবে, তারা তার শাহীক শুনবে, আর তা টগবগ করে ফুটতে থাকবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ইবনে জারীরের কথা উদ্ধৃত করে যে শাহীক মানে চিৎকারের আওয়াজ। সাওরীর কথাও আনে: অনেক পানিতে অল্প কিছু দানা যেভাবে ফোটে, জাহান্নাম তাদের সেভাবে ফোটাবে। তারপর আসে ৬৭:৮।"
          },
          {
            "en": "Read in order, the verses draw closer with each step: a destination named, a sound heard from it, then the Fire itself almost splitting apart, and finally a question put to those who have just arrived. The passage does not end on flames. Whatever the verse says about rage and bursting, its last clause is a sentence spoken to people, and that sentence is about a warner. Most of what follows is spent on the two halves of the verse, the Fire's state and the keepers' question, and on how the commentators read each.",
            "bn": "আয়াতগুলো পরপর পড়লে দেখা যায়, প্রতিটি ধাপে দৃশ্যটা আরও কাছে চলে আসে। প্রথমে গন্তব্যের নাম, তারপর সেখান থেকে ভেসে আসা আওয়াজ, তারপর জাহান্নাম নিজেই প্রায় ফেটে পড়ছে, আর সবশেষে সদ্য পৌঁছানো লোকদের সামনে একটি প্রশ্ন। অংশটা আগুনের শিখায় গিয়ে থামে না। ক্রোধ আর ফেটে পড়ার কথা যতই থাকুক, আয়াতের শেষ বাক্যটা মানুষের উদ্দেশে বলা একটি কথা, আর সে কথা একজন সতর্ককারীকে নিয়ে। সামনের আলোচনা তাই আয়াতের দুই অংশ ঘিরে: জাহান্নামের অবস্থা আর রক্ষীদের প্রশ্ন, এবং তাফসীরকারেরা প্রতিটি কীভাবে পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Almost Torn Apart",
          "bn": "ছিঁড়ে যাওয়ার উপক্রম"
        },
        "p": [
          {
            "en": "Takadu tamayyazu min al-ghayz. Takadu means it is about to, it very nearly does: the verse shows the Fire at the edge of something, not past it. Al-Qurtubi notes that the original form of tamayyazu is tatamayyazu, which the verse shortens. At-Tabari glosses it with two verbs, tatafarraqu wa-tataqatta'u, it scatters and is cut apart, from rage against its people, and says the people of interpretation said the same. He then gives the reports behind that statement, beginning with Ibn Abbas.",
            "bn": "তাকাদু তামায়্যাযু মিনাল গাইয। তাকাদু মানে প্রায় হয়ে যাচ্ছে, হতে হতে বাকি। আয়াতটি জাহান্নামকে দেখায় একটা কিছুর একেবারে কিনারে, তা পেরিয়ে যাওয়া অবস্থায় নয়। কুরতুবী জানান, তামায়্যাযু শব্দের মূল রূপ তাতামায়্যাযু, আয়াতে তা সংক্ষিপ্ত হয়ে এসেছে। তাবারী শব্দটির ব্যাখ্যা দেন দুটি ক্রিয়া দিয়ে: তাতাফাররাকু ওয়া তাতাকাত্তাউ, অর্থাৎ ছড়িয়ে ছিটিয়ে যায় আর টুকরো টুকরো হয়, তার বাসিন্দাদের উপর ক্রোধে। তিনি বলেন, ব্যাখ্যাকারেরাও এমনটাই বলেছেন। তারপর সে কথার পেছনের বর্ণনাগুলো আনেন, শুরু করেন ইবনে আব্বাস (রাঃ) থেকে।"
          },
          {
            "en": "Ibn Abbas comes through two chains in at-Tabari. In the first he says only tatafarraq, it scatters. In the second he says its parts almost leave one another and it splits open. Ad-Dahhak, in the same list, says tafarraq. Al-Qurtubi gives Sa'id ibn Jubayr's wording: it is cut into pieces and parts of it come away from others, and he names Ibn Abbas, ad-Dahhak and Ibn Zayd for the reading that it scatters. Ibn Kathir gives the same picture: some parts of it almost separate from others.",
            "bn": "তাবারীতে ইবনে আব্বাস (রাঃ)-এর কথা এসেছে দুটি সনদে। প্রথমটিতে তিনি শুধু বলেন তাতাফাররাক, ছড়িয়ে যায়। দ্বিতীয়টিতে বলেন, তার অংশগুলো একটা আরেকটা থেকে আলাদা হয়ে যাওয়ার উপক্রম হয়, আর তা ফেটে চৌচির হয়। একই তালিকায় দাহহাকের কথা: তাফাররাক। কুরতুবী সাঈদ ইবনে জুবাইরের ভাষা আনেন: তা টুকরো টুকরো হয়, আর এক অংশ আরেক অংশ থেকে আলাদা হয়ে যায়। ছড়িয়ে যাওয়ার অর্থের পক্ষে তিনি নাম নেন ইবনে আব্বাস (রাঃ), দাহহাক ও ইবনে যায়দের। ইবন কাসীরও একই ছবি দেন: তার কিছু অংশ অন্য অংশ থেকে প্রায় বিচ্ছিন্ন হয়ে যায়।"
          },
          {
            "en": "The others reach for neighbouring words. Al-Baghawi has tanqati', it is severed, and quotes Ibn Qutayba: it almost splits open with rage at the disbelievers. The Muyassar uses tatamazzaq, it is torn to shreds. As-Sa'di adds a phrase the others leave implicit: 'ala ijtima'iha, for all that it is gathered together, its parts almost part from one another and it is cut apart. Every gloss is a word of separation, and every one keeps the takadu: the commentators describe a Fire on the point of bursting, as the verse does.",
            "bn": "অন্যরা কাছাকাছি অর্থের শব্দ বেছে নেন। বাগাভী বলেন তানকাতি, অর্থাৎ ছিন্ন হয়ে যায়, আর ইবনে কুতাইবার কথা আনেন: কাফিরদের উপর ক্রোধে তা প্রায় ফেটে যায়। মুয়াসসার বলে তাতামায্যাক, ছিঁড়ে খণ্ড খণ্ড হয়। সা'দী একটি কথা যোগ করেন, যা অন্যদের কথায় উহ্য থাকে: আলা ইজতিমাইহা। অর্থাৎ এত একত্রে জমাট হয়ে থাকা সত্ত্বেও তার অংশগুলো একটা আরেকটা থেকে আলাদা হয়ে যাওয়ার উপক্রম, আর তা টুকরো হয়ে যায়। প্রতিটি ব্যাখ্যাই বিচ্ছিন্ন হওয়ার শব্দ, আর প্রতিটিতেই তাকাদু অটুট। আয়াতের মতোই তাফসীরকারেরা এমন এক আগুনের কথা বলেন, যা ফেটে পড়ার ঠিক আগমুহূর্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rage, or Boiling?",
          "bn": "ক্রোধ, নাকি টগবগে ফোটা?"
        },
        "p": [
          {
            "en": "Min al-ghayz: from rage. Most of the commentators read the word this way and say against whom. Ibn Kathir: from the severity of its rage against them and its fury with them. The Muyassar: from the severity of its anger at the disbelievers. At-Tabari: against its people. Al-Qurtubi: from the severity of rage against the enemies of Allah. As-Sa'di: from the severity of its rage at the disbelievers. In every one of these the rage has an object, the people being thrown in, and none of them makes it a general fury.",
            "bn": "মিনাল গাইয: ক্রোধের কারণে। অধিকাংশ তাফসীরকার শব্দটি এ অর্থেই পড়েন, আর বলে দেন ক্রোধটা কার উপর। ইবন কাসীর বলেন: তাদের উপর তার প্রচণ্ড ক্রোধ ও আক্রোশের কারণে। মুয়াসসার বলে: কাফিরদের উপর তার প্রচণ্ড রাগের কারণে। তাবারীর ভাষায়: তার বাসিন্দাদের উপর। কুরতুবী বলেন: আল্লাহর শত্রুদের উপর প্রচণ্ড ক্রোধের কারণে। সা'দী বলেন: কাফিরদের উপর তার প্রচণ্ড ক্রোধের কারণে। প্রতিটি ব্যাখ্যায় ক্রোধের একটা লক্ষ্য আছে, যাদের তাতে ফেলা হচ্ছে তারা। কেউই একে লক্ষ্যহীন সাধারণ রোষ বানান না।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari, says the most about its reason: the splitting is from rage against those who disobey Allah, out of anger for Allah and in vengeance for Him. Al-Qurtubi then records a second reading, introduced only with it was said: min al-ghayz means from boiling, al-ghalayan. On that reading the phrase describes the Fire's seething rather than its anger. Al-Qurtubi names nobody for it and does not choose between the two, so both stand here as he left them, the rage that most report and the boiling he records in a single line.",
            "bn": "কারণটা সবচেয়ে বেশি খুলে বলেন ইবনে যায়দ, তাবারীর বর্ণনায়। তাঁর মতে এই ফেটে পড়া আল্লাহর নাফরমানদের উপর ক্রোধে, আল্লাহর জন্য রাগ করে আর তাঁর পক্ষ থেকে প্রতিশোধ নিতে। কুরতুবী এরপর আরেকটি মত আনেন, শুধু 'বলা হয়েছে' কথাটি দিয়ে: মিনাল গাইয মানে ফুটে ওঠার কারণে, আল-গালায়ান। এ মত অনুযায়ী শব্দটি জাহান্নামের রাগ নয়, তার টগবগে ফোটার বর্ণনা। কুরতুবী এ মতের পক্ষে কারও নাম নেন না, আর দুটির কোনোটিকে বেছেও নেন না। তাই দুটোই এখানে থাকছে যেভাবে তিনি রেখে গেছেন: অধিকাংশের বলা ক্রোধ, আর এক লাইনে উল্লেখ করা ফুটে ওঠা।"
          },
          {
            "en": "As-Sa'di turns the description into a question for the reader: if its rage at them is this severe, what do you suppose it will do to them once they are inside it? He leaves the question unanswered, which is its force. This article keeps to the commentators' own words for the Fire's rage. They report it plainly, with an object and, in Ibn Zayd's words, a reason, and they do not go on to explain how a Fire is enraged. Nor will we.",
            "bn": "সা'দী বর্ণনাটিকে পাঠকের সামনে একটি প্রশ্নে পরিণত করেন। তাদের উপর যদি তার ক্রোধ এত প্রচণ্ড হয়, তবে ভেতরে পৌঁছে গেলে তাদের সঙ্গে কী করবে বলে আপনার ধারণা? প্রশ্নের উত্তর তিনি দেন না, আর সেখানেই তার ধার। জাহান্নামের ক্রোধের ব্যাপারে এ লেখা তাফসীরকারদের নিজেদের কথার মধ্যেই থাকছে। তাঁরা তা সোজাসুজি উল্লেখ করেন: ক্রোধের একটি লক্ষ্য আছে, আর ইবনে যায়দের ভাষায় একটি কারণও। আগুন কীভাবে ক্রুদ্ধ হয়, তার ব্যাখ্যায় তাঁরা যান না। আমরাও যাব না।"
          }
        ]
      },
      {
        "h": {
          "en": "Group After Group",
          "bn": "দলের পর দল"
        },
        "p": [
          {
            "en": "Kullama ulqiya fiha fawjun: every time a fawj is thrown into it. At-Tabari explains fawj as a jama'a, a group, and al-Baghawi as a group of them; al-Qurtubi specifies a group of the disbelievers, and the Muyassar a group of people. Kullama, every time, makes the scene a repeated one. The question that closes the verse is not asked once to a single crowd: each group, as it arrives, hears it put to them again. The verb ulqiya, is thrown, is the same one 67:7 used of them, ulqu.",
            "bn": "কুল্লামা উলকিয়া ফীহা ফাওজুন: যখনই তাতে কোনো ফাওজ ফেলা হয়। তাবারী ফাওজের ব্যাখ্যা দেন জামাআ, অর্থাৎ দল, আর বাগাভী বলেন তাদের মধ্যকার একটি দল। কুরতুবী নির্দিষ্ট করে বলেন কাফিরদের একটি দল, আর মুয়াসসার বলে মানুষের একটি দল। কুল্লামা, অর্থাৎ যখনই, দৃশ্যটাকে বারবার ঘটে চলা দৃশ্য বানিয়ে দেয়। আয়াতের শেষের প্রশ্নটি একটিমাত্র ভিড়ের সামনে একবার করা হয় না। প্রতিটি দল পৌঁছামাত্র নতুন করে সেই প্রশ্ন শোনে। উলকিয়া, অর্থাৎ ফেলা হয়, এই ক্রিয়াই ৬৭:৭ আয়াতে তাদের বেলায় এসেছে: উলকূ।"
          },
          {
            "en": "Ibn Kathir sets beside this verse another in which the same keepers ask the same thing at greater length. In 39:71, when the disbelievers reach Jahannam and its gates are opened, its keepers say: did there not come to you messengers from among yourselves, reciting to you the verses of your Lord and warning you of the meeting of this Day of yours? Read side by side, the longer verse names what the warner in 67:8 is asked about: messengers who recited their Lord's verses and who warned of this very Day.",
            "bn": "ইবন কাসীর এ আয়াতের পাশে আরেকটি আয়াত রাখেন, যেখানে একই রক্ষীরা একই কথা আরও বিস্তারিতভাবে জিজ্ঞেস করে। ৩৯:৭১ আয়াতে কাফিররা যখন জাহান্নামে পৌঁছায় আর তার দরজাগুলো খুলে দেওয়া হয়, তখন তার রক্ষীরা বলে: তোমাদের কাছে কি তোমাদের মধ্য থেকেই রাসূলগণ আসেননি, যাঁরা তোমাদের রবের আয়াত পড়ে শোনাতেন আর তোমাদের এই দিনের সাক্ষাৎ সম্পর্কে সতর্ক করতেন? দুটি আয়াত পাশাপাশি পড়লে বোঝা যায়, ৬৭:৮ আয়াতে যে সতর্ককারীর কথা জিজ্ঞেস করা হচ্ছে, দীর্ঘ আয়াতটি তাঁর পরিচয় খুলে বলে: এমন রাসূল, যাঁরা রবের আয়াত শুনিয়েছেন আর ঠিক এই দিনটির ব্যাপারেই সতর্ক করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Entrusted With It",
          "bn": "যাদের হাতে এর দায়িত্ব"
        },
        "p": [
          {
            "en": "Khazanatuha: its keepers. At-Tabari restates the clause with the keepers of Jahannam asking the group, and the Muyassar describes them as al-muwakkaluna bi-amriha, those put in charge of its affairs. That is as far as the commentaries consulted for this verse go. None of them says more here about who the keepers are, how many they are, or by what name they are called, and this article does not add it from elsewhere. What the verse itself tells us is what they do: they ask.",
            "bn": "খাযানাতুহা: তার রক্ষীরা। তাবারী বাক্যটি নতুন করে বলেন এভাবে যে জাহান্নামের রক্ষীরা দলটিকে জিজ্ঞেস করে। মুয়াসসার তাদের পরিচয় দেয় আল-মুওয়াক্কালূনা বি-আমরিহা বলে, অর্থাৎ যাদের উপর এর কাজকর্মের দায়িত্ব দেওয়া হয়েছে। এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো এর বেশি যায় না। রক্ষীরা কারা, সংখ্যায় কত, কোন নামে পরিচিত, এ নিয়ে এখানে কেউ আর কিছু বলেন না। এ লেখাও অন্য কোথাও থেকে তা জুড়ে দিচ্ছে না। আয়াত নিজে যা জানায় তা হলো তাদের কাজ: তারা প্রশ্ন করে।"
          },
          {
            "en": "They do not announce a sentence; they put a question. At-Tabari fills it out: did there not come to you, in the world, a warner who warned you of this punishment you are now in? The Muyassar has nearly the same words, with a messenger who cautioned you in place of the warner. In both, the question joins two moments, the warning heard in the world and the punishment now being met, and asks the arriving group to account for the distance between them.",
            "bn": "তারা রায় ঘোষণা করে না, প্রশ্ন রাখে। তাবারী প্রশ্নটা পুরো করে বলেন: দুনিয়াতে কি তোমাদের কাছে এমন কোনো সতর্ককারী আসেনি, যে তোমাদের এই শাস্তি সম্পর্কে সতর্ক করেছিল, যার মধ্যে তোমরা এখন আছ? মুয়াসসারের ভাষাও প্রায় একই, শুধু সতর্ককারীর জায়গায় এমন রাসূলের কথা, যিনি তোমাদের সাবধান করেছিলেন। দুই ব্যাখ্যাতেই প্রশ্নটা দুটি মুহূর্তকে জুড়ে দেয়: দুনিয়াতে শোনা সতর্কবাণী আর এখন মুখোমুখি হওয়া শাস্তি। আর সদ্য পৌঁছানো দলটির কাছে জানতে চায়, এ দুইয়ের মাঝের দূরত্বের হিসাব কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked to Rebuke, Not to Learn",
          "bn": "জানতে নয়, ধিক্কার দিতে"
        },
        "p": [
          {
            "en": "What kind of question is it? Al-Qurtubi answers in a phrase: 'ala jihat at-tawbikh wa-t-taqri', by way of rebuke and reproach. Al-Baghawi calls it su'al tawbikh, a question of rebuke, and the Muyassar says it is asked in the manner of rebuke. The keepers are not gathering information. Al-Qurtubi, al-Baghawi and the Muyassar all gloss the nadhir as a messenger, al-Qurtubi adding: a messenger in the world who warned you of this Day, so that you would be on your guard.",
            "bn": "প্রশ্নটা কেমন প্রশ্ন? কুরতুবী এক কথায় উত্তর দেন: আলা জিহাতিত তাওবীখি ওয়াত তাকরী, অর্থাৎ ধিক্কার আর ভর্ৎসনার ভঙ্গিতে। বাগাভী একে বলেন সুআলু তাওবীখ, ধিক্কারের প্রশ্ন। মুয়াসসারও বলে, প্রশ্নটা করা হয় ধিক্কার দেওয়ার জন্য। রক্ষীরা কোনো তথ্য সংগ্রহ করছে না। কুরতুবী, বাগাভী ও মুয়াসসার তিনজনই নাযীর মানে বলেন রাসূল। কুরতুবী যোগ করেন: দুনিয়াতে এমন রাসূল, যিনি তোমাদের এই দিন সম্পর্কে সতর্ক করেছিলেন, যাতে তোমরা সাবধান হও।"
          },
          {
            "en": "As-Sa'di puts the rebuke into words. Your present state, he has the keepers mean, and your having earned the Fire, are as though you were never told of it, as though the warners had never warned you against it. The reproach does not claim that no warning came. It says that the people now look like people who were never warned. His wording leaves the reader with a hard thought: a warning heard and left unheeded can leave a person looking exactly like one who never heard it.",
            "bn": "সা'দী ধিক্কারটাকে ভাষা দেন। রক্ষীদের কথার মর্ম তাঁর মতে এই: তোমাদের এখনকার অবস্থা আর জাহান্নামের যোগ্য হয়ে পড়া দেখে মনে হয়, যেন তোমাদের এর খবরই দেওয়া হয়নি, যেন সতর্ককারীরা কখনো তোমাদের এ থেকে সাবধান করেননি। ধিক্কারটা এ দাবি করে না যে সতর্কবাণী আসেনি। বরং বলে, এই লোকদের এখন দেখাচ্ছে এমন মানুষের মতো, যাদের কখনো সতর্কই করা হয়নি। তাঁর এ কথা পাঠকের মনে একটি কঠিন ভাবনা রেখে যায়: সতর্কবাণী শুনেও অবহেলা করলে মানুষকে ঠিক তার মতোই দেখায়, যে কখনো তা শোনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "No Punishment Before a Messenger",
          "bn": "রাসূল পাঠানোর আগে শাস্তি নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the wider point from these verses. In them, he says, Allah reminds of His justice in dealing with His creatures: He does not punish anyone until the proof has been established against them and a messenger has been sent to them. He cites 17:15 for it: and never would We punish until We sent a messenger. On this reading the keepers' question is that principle spoken aloud to each group as it is thrown in.",
            "bn": "ইবন কাসীর এ আয়াতগুলো থেকে বড় একটি কথা বের করে আনেন। তাঁর মতে এখানে আল্লাহ তাঁর সৃষ্টির সঙ্গে নিজের ইনসাফের কথা মনে করিয়ে দিচ্ছেন। কারও বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত না হওয়া পর্যন্ত, আর তার কাছে রাসূল না পাঠানো পর্যন্ত তিনি কাউকে শাস্তি দেন না। এর পক্ষে তিনি ১৭:১৫ আয়াত আনেন: আর রাসূল না পাঠানো পর্যন্ত আমি শাস্তি দিই না। এ পড়ায় রক্ষীদের প্রশ্নটা সেই মূলনীতিরই উচ্চারণ, প্রতিটি দলকে ফেলার মুহূর্তে।"
          },
          {
            "en": "The group's answer comes in 67:9, and it begins with bala, yes. What they go on to say belongs to that verse and is left for it here. No commentary consulted for this verse attaches a hadith to it, so none is offered. For 67:8 the point stands without one: the keepers ask about one thing only, whether a warner came, and Ibn Kathir reads that single question as a reminder of Allah's justice.",
            "bn": "দলটির জবাব আসে ৬৭:৯ আয়াতে, শুরু হয় 'বালা' দিয়ে, অর্থাৎ হ্যাঁ। এরপর তারা যা বলে, তা সেই আয়াতের আলোচনা; এখানে তা ওই আয়াতের জন্যই রেখে দেওয়া হলো। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস আনা হচ্ছে না। হাদিস ছাড়াই ৬৭:৮ আয়াতের কথা পরিষ্কার। রক্ষীরা কেবল একটি বিষয়ই জিজ্ঞেস করে, সতর্ককারী এসেছিলেন কি না। আর ইবন কাসীর এই একটি প্রশ্নকে পড়েন আল্লাহর ইনসাফের স্মরণ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked While There Is Time",
          "bn": "সময় থাকতেই যে প্রশ্ন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: the Fire, its keepers and the groups thrown into it, on the Day it speaks of. It licenses nothing against any living person or community, and it gives nobody a test for sorting the people around them into those groups. No reader is told who will be asked this question, and none is put in the keepers' place. The verse's own question points the other way, at whether a warner came, and each reader can answer that only about themselves.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: যে দিনের কথা বলছে সেদিনের জাহান্নাম, তার রক্ষীরা, আর তাতে ফেলা দলগুলো। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আশপাশের মানুষদের ওই দলগুলোতে ভাগ করে ফেলার কোনো মাপকাঠিও কারও হাতে তুলে দেয় না। কাকে এ প্রশ্ন করা হবে, কোনো পাঠককে তা জানানো হয়নি, কাউকে রক্ষীদের জায়গাতেও বসানো হয়নি। আয়াতের নিজের প্রশ্ন বরং উল্টো দিকে ইশারা করে: সতর্ককারী এসেছিলেন কি না। এর উত্তর প্রত্যেক পাঠক কেবল নিজের ব্যাপারেই দিতে পারেন।"
          },
          {
            "en": "For the reader the question arrives early. It is read now, in a passage that a few verses on also says, in 67:12, that those who fear their Lord unseen will have forgiveness and a great reward. The warning and the promise sit side by side. The practical step is small: take one warning you have already met in the Qur'an and let it change one thing this week. And when you speak of the Fire to others, speak as a warner speaks, out of care, never as one who has already passed the verdict.",
            "bn": "পাঠকের কাছে প্রশ্নটা পৌঁছায় আগেভাগেই। তা পড়া হচ্ছে এখন, এমন এক অংশে, যা কয়েক আয়াত পরে ৬৭:১২ আয়াতে এ কথাও বলে: যারা না দেখেই তাদের রবকে ভয় করে, তাদের জন্য আছে মাগফিরাত আর বিরাট পুরস্কার। সতর্কবাণী আর প্রতিশ্রুতি পাশাপাশি দাঁড়িয়ে। করণীয়টা ছোট: কুরআনে ইতিমধ্যে পড়া একটি সতর্কবাণী বেছে নিন, আর এ সপ্তাহে সেটা দিয়ে নিজের একটি জিনিস বদলান। অন্যদের সঙ্গে জাহান্নামের কথা বললে বলুন সতর্ককারীর মতো, তাদের ভালো চেয়ে। এমনভাবে কখনো নয়, যেন রায় আপনি আগেই দিয়ে ফেলেছেন।"
          }
        ]
      }
    ]
  },
  "67:14": {
    "sections": [
      {
        "h": {
          "en": "A Question With One Answer",
          "bn": "যে প্রশ্নের উত্তর একটাই"
        },
        "p": [
          {
            "en": "Ala ya'lamu man khalaqa, wa huwa-l-Latifu-l-Khabir: does He who created not know, while He is the Subtle, the Aware? Seven Arabic words, and they arrive as the answer to the sentence before them. 67:13 has just told its hearers to keep their speech secret or say it aloud, since He knows what is in the breasts. At-Tabari, explaining 67:13, says He has knowledge of the thoughts in the breasts that were never spoken, so how much more of what was uttered, hidden or declared; whoever is not missed by what the heart conceals is all the more not missed by anything else.",
            "bn": "আলা ইয়া'লামু মান খালাকা, ওয়া হুওয়াল লাতীফুল খাবীর: যিনি সৃষ্টি করেছেন তিনিই কি জানেন না? তিনি অতি সূক্ষ্মদর্শী, ওয়াকিফহাল। আরবিতে মাত্র সাতটি শব্দ, আর শব্দগুলো এসেছে ঠিক আগের বাক্যের জবাব হয়ে। ৬৭:১৩ আয়াত বলেছে, তোমরা কথা চুপেচাপে বলো বা জোরে বলো, তিনি অন্তরের গোপন কথা জানেন। তাবারী ৬৭:১৩-এর ব্যাখ্যায় বলেন, বুকের ভেতরে যে ভাবনা কখনো মুখে আসেনি, তিনি তারও খবর রাখেন। তাহলে যা মুখে উচ্চারিত হয়েছে, চুপিসারে হোক বা প্রকাশ্যে, তা তাঁর অজানা থাকবে কী করে? অন্তরের লুকানো ভাবনা যাঁর কাছে গোপন নয়, অন্য কিছু তাঁর কাছে গোপন থাকার প্রশ্নই ওঠে না।"
          },
          {
            "en": "Then comes the question. As-Sa'di introduces it as Allah arguing from a rational proof for His knowledge: whoever created creation, perfected it and made it good, how could he not know it? The sentence has the form of a question, but it asks nothing the hearer could honestly answer the other way. The proof lies in the act of creating itself, and the two names that close the verse then say what kind of knowing is meant. This article follows those three steps in turn: the question, the ways its words are read, and the two names.",
            "bn": "এরপর আসে প্রশ্নটি। সা'দী একে পরিচয় করিয়ে দেন এভাবে: আল্লাহ এখানে নিজের জ্ঞানের পক্ষে বুদ্ধির দলিল পেশ করছেন। যিনি সৃষ্টিজগৎ বানিয়েছেন, নিখুঁত করেছেন, সুন্দর করেছেন, তিনি তা জানবেন না কীভাবে? বাক্যটা দেখতে প্রশ্ন, কিন্তু এর এমন কোনো উত্তর নেই যা সৎভাবে উল্টো দিকে দেওয়া যায়। দলিলটা লুকিয়ে আছে সৃষ্টি করার কাজের ভেতরেই। আর আয়াতের শেষে যে দুটি নাম, সেগুলো বলে দেয় কোন ধরনের জানার কথা হচ্ছে। এই লেখা সেই তিনটি ধাপ ধরে এগোবে: প্রশ্নটি, তার শব্দ পড়ার ধরন, আর নাম দুটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways to Read Man Khalaqa",
          "bn": "'মান খালাকা' পড়ার দুই উপায়"
        },
        "p": [
          {
            "en": "The three words ala ya'lamu man khalaqa carry two parsings, and the commentators fetched for this verse record both. On the first, man is the subject: does He who created not know? On the second, the subject is Allah and man is the object of the knowing: does He not know whom He created? Al-Qurtubi gives both from the ahl al-ma'ani, the scholars of meanings, leaving the choice open: if you wish, make man a name for the Creator, meaning does the Creator not know His creation; and if you wish, make it a name for the created, meaning does Allah not know whom He created.",
            "bn": "আলা ইয়া'লামু মান খালাকা, এই তিনটি শব্দকে দুইভাবে বিশ্লেষণ করা যায়। এই আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তাতে দুটোই আছে। প্রথম পাঠে 'মান' কর্তা: যিনি সৃষ্টি করেছেন তিনি কি জানেন না? দ্বিতীয় পাঠে কর্তা আল্লাহ, আর 'মান' হলো জানার বিষয়: যাকে তিনি সৃষ্টি করেছেন, তাকে কি তিনি জানেন না? কুরতুবী দুটোই আনেন আহলুল মাআনী, অর্থাৎ অর্থ-বিশ্লেষক আলেমদের কাছ থেকে। বাছাইয়ের ভার তিনি পাঠকের হাতেই রাখেন। চাইলে 'মান'কে স্রষ্টার নাম ধরুন, তখন অর্থ: স্রষ্টা কি তাঁর সৃষ্টিকে জানেন না? আর চাইলে সৃষ্টের নাম ধরুন, তখন অর্থ: আল্লাহ যাকে সৃষ্টি করেছেন, তাকে কি জানেন না?"
          },
          {
            "en": "Others lean one way. Ibn Kathir, in his Arabic tafsir, glosses the verse as does the Creator not know, then gives the second reading under the words it is said, does Allah not know what He created, and calls the first more fitting because of what follows it: wa huwa-l-Latifu-l-Khabir. Al-Baghawi likewise puts the subject reading first and reports the object reading under it is said. The abridged English Ibn Kathir explains the phrase as doesn't the Creator know, and as-Sa'di's paraphrase, whoever created creation, reads man the same way.",
            "bn": "কেউ কেউ একদিকে ঝোঁকেন। ইবন কাসীর তাঁর আরবি তাফসীরে আয়াতের ব্যাখ্যা দেন: স্রষ্টা কি জানেন না? তারপর 'বলা হয়' কথাটি দিয়ে দ্বিতীয় পাঠ আনেন: আল্লাহ কি তাঁর সৃষ্টিকে জানেন না? তবে প্রথমটিকেই তিনি বেশি উপযুক্ত বলেন, আর কারণ দেখান পরের অংশ: ওয়া হুওয়াল লাতীফুল খাবীর। বাগাভীও কর্তার পাঠ আগে রাখেন, আর জানার বিষয়ের পাঠ আনেন 'বলা হয়' বলে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটির অর্থ করা হয়েছে, স্রষ্টা কি জানেন না? সা'দীর ভাষ্যেও একই পাঠ: যিনি সৃষ্টিজগৎ বানিয়েছেন।"
          },
          {
            "en": "At-Tabari goes the other way. His commentary on this verse, which the source files under the slot of 67:15, reads it as the Lord, exalted be His praise, knowing those of His creation whom He created, and he paraphrases: how could His creation that He created be hidden from Him? The Muyassar stands close to him: does the Lord of the worlds not know His creation and their affairs, when it is He who created them? This app's English and Bengali renderings follow the first reading. Both readings are set down here as the commentators set them down, with no verdict between them.",
            "bn": "তাবারী গেছেন অন্য দিকে। এ আয়াতে তাঁর ব্যাখ্যা উৎসে রাখা আছে ৬৭:১৫-এর ঘরে। তাঁর মতে অর্থ হলো: মহিমান্বিত রব কি তাঁর সৃষ্টির মধ্যে যাদের সৃষ্টি করেছেন তাদের জানেন না? নিজের ভাষায় তিনি বলেন, যে সৃষ্টিকে তিনি নিজে বানিয়েছেন, তা তাঁর কাছে লুকানো থাকবে কী করে? মুয়াসসারও তাঁর কাছাকাছি: জগৎসমূহের রব কি তাঁর সৃষ্টি আর তাদের অবস্থা জানেন না, অথচ তিনিই তো তাদের সৃষ্টি করেছেন? এই অ্যাপের ইংরেজি ও বাংলা অনুবাদ প্রথম পাঠ অনুসরণ করে। তাফসীরকারেরা দুই পাঠ যেভাবে রেখেছেন, এখানেও সেভাবেই রইল, কোনোটির পক্ষে রায় না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "He Who Made the Secret",
          "bn": "গোপন কথার স্রষ্টা"
        },
        "p": [
          {
            "en": "Al-Qurtubi's first gloss narrows the object of the knowing to one thing: does He not know the secret, He who created the secret? He then voices it in the first person: I created the secret in the heart, so shall I not know what is in the hearts of the servants? Al-Baghawi's wording runs the same way: does He not know what is in the breasts, He who created them? In both, what was created is not only the person but the inner life itself, the very place where a secret is kept.",
            "bn": "কুরতুবীর প্রথম ব্যাখ্যায় জানার বিষয়টা একটিমাত্র জিনিসে এসে ঠেকে: যিনি গোপন কথা সৃষ্টি করেছেন, তিনি কি গোপন কথা জানেন না? তারপর কথাটা তিনি আল্লাহর মুখে বসিয়ে বলেন: অন্তরে গোপন কথা আমিই সৃষ্টি করেছি, তবে কি বান্দাদের অন্তরে কী আছে তা আমি জানব না? বাগাভীর ভাষাও একই পথে চলে: বুকে যা আছে, তা কি তিনি জানেন না, যিনি সেগুলো সৃষ্টি করেছেন? দুজনের ব্যাখ্যাতেই সৃষ্টি বলতে শুধু মানুষটা নয়, তার ভেতরের জগৎটাও। গোপন কথা যেখানে লুকিয়ে রাখা হয়, সেই জায়গাটাই তাঁর বানানো।"
          },
          {
            "en": "That is why the argument can be so short. A thing that was made has no corner its maker did not make. Al-Qurtubi states the principle in one line: the Creator must be knowing of what He has created and of what He creates. As-Sa'di attaches two verbs to the creating, atqanahu and ahsanahu, He perfected it and made it good, and the Muyassar says the same of people: He created them, perfected their making and made it beautiful. On this argument knowledge is not something added to creation afterwards; creating already assumes it.",
            "bn": "এ কারণেই যুক্তিটা এত ছোট হতে পারে। যা বানানো হয়েছে, তার এমন কোনো কোণ নেই যা নির্মাতা বানাননি। কুরতুবী মূলনীতিটা এক লাইনে বলেন: স্রষ্টা যা সৃষ্টি করেছেন এবং যা সৃষ্টি করেন, সে সম্পর্কে তাঁর জ্ঞান থাকতেই হবে। সা'দী সৃষ্টির সাথে আরও দুটি ক্রিয়া জুড়ে দেন, আতকানাহু ও আহসানাহু: তিনি তা নিখুঁত করেছেন, সুন্দর করেছেন। মুয়াসসারও মানুষের ব্যাপারে একই কথা বলে: তিনি তাদের সৃষ্টি করেছেন, তাদের গড়নকে নিখুঁত ও সুন্দর করেছেন। এই যুক্তিতে জ্ঞান এমন কিছু নয় যা সৃষ্টির পরে এসে যোগ হয়। সৃষ্টি করার মধ্যেই জ্ঞান ধরে নেওয়া আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Voice From the Thicket",
          "bn": "ঝোপের ধার থেকে এক আওয়াজ"
        },
        "p": [
          {
            "en": "Al-Qurtubi follows with a report from Ibn al-Musayyib. A man was standing at night among many trees when the wind blew hard, and it occurred to him: do you suppose Allah knows what falls of these leaves? A great voice called from the side of the thicket: ala ya'lamu man khalaqa wa huwa-l-Latifu-l-Khabir. Al-Qurtubi gives it as Ibn al-Musayyib's report, with no chain and no grading in the text fetched, and it is passed on here in that form: a story told around the verse, not a hadith and not an occasion of its revelation.",
            "bn": "এরপর কুরতুবী ইবনুল মুসাইয়িবের একটি বর্ণনা আনেন। এক লোক রাতে ঘন গাছপালার মাঝে দাঁড়িয়ে ছিল। জোরে বাতাস বইছিল। তার মনে এল: আল্লাহ কি জানেন, এই পাতাগুলোর কোনটা কোনটা ঝরে পড়ছে? তখন ঝোপের এক পাশ থেকে বিরাট এক আওয়াজ ডেকে উঠল: আলা ইয়া'লামু মান খালাকা ওয়া হুওয়াল লাতীফুল খাবীর। কুরতুবী একে ইবনুল মুসাইয়িবের বর্ণনা হিসেবেই দিয়েছেন। যে লেখা দেখা হয়েছে তাতে কোনো সনদ বা মান নির্ণয় নেই। তাই এখানেও সেভাবেই রইল: আয়াত ঘিরে বলা এক ঘটনা, হাদীস নয়, আয়াত নাযিলের উপলক্ষও নয়।"
          },
          {
            "en": "The leaves come back in the next passage he quotes, from al-Ustadh Abu Ishaq al-Isfara'ini, on the name al-Muhsi, the Keeper of Count, whose particular sense is that multitude does not distract Him from knowing. The examples given are the play of light, the rising of the wind and the falling of leaves: at such a moment, al-Isfara'ini says, He knows the parts of the motions in every leaf. And he closes the passage, as al-Qurtubi quotes him, with this very verse: how would He not know, when it is He who creates?",
            "bn": "পরের যে অংশ কুরতুবী উদ্ধৃত করেন, সেখানে পাতাগুলো আবার ফিরে আসে। অংশটি উস্তায আবু ইসহাক ইসফারায়িনীর, আল-মুহসী নাম নিয়ে। এ নামের মানে যিনি গুনে রাখেন, আর এর বিশেষ দিক হলো সংখ্যার আধিক্য তাঁকে জানা থেকে অন্যমনস্ক করে না। উদাহরণগুলো এমন: আলোর ঝলক, বাতাসের তেজ বেড়ে যাওয়া, পাতা ঝরে পড়া। ইসফারায়িনী বলেন, সেই মুহূর্তে তিনি প্রতিটি পাতার নড়াচড়ার প্রতিটি অংশ জানেন। কুরতুবীর উদ্ধৃতি অনুযায়ী তিনি কথাটা শেষ করেন এই আয়াত দিয়েই: যিনি সৃষ্টি করেন, তিনি জানবেন না কীভাবে?"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Latif, Read Two Ways",
          "bn": "আল-লাতীফের দুই অর্থ"
        },
        "p": [
          {
            "en": "The verse closes on two names, and for the first, al-Latif, the commentators fetched here give two senses. One concerns knowledge. Al-Baghawi explains it as the One whose knowledge in the hearts is latif, subtle. As-Sa'di says al-Latif is the One whose knowledge and awareness are so fine that they reach the secrets and the inner thoughts, the hidden and concealed things, and he describes Him as the One who ya'lamu al-sirra wa akhfa, knows the secret and what is more hidden still. Those are the words of 20:7, which Tadabbur treats at length together with 20:8.",
            "bn": "আয়াত শেষ হয় দুটি নামে। প্রথম নাম আল-লাতীফ, আর এখানে দেখা তাফসীরগুলো এর দুটি অর্থ দেয়। একটি অর্থ জ্ঞানের সাথে জড়িত। বাগাভী বলেন, অন্তরের ব্যাপারে তাঁর জ্ঞান লাতীফ, অর্থাৎ সূক্ষ্ম। সা'দী বলেন, আল-লাতীফ তিনি, যাঁর জ্ঞান ও খবর এত সূক্ষ্ম যে তা পৌঁছে যায় গোপন কথা, মনের ভাবনা আর লুকানো ও আড়ালের জিনিস পর্যন্ত। তিনি আল্লাহর পরিচয় দেন এভাবে: ইয়া'লামুস সিররা ওয়া আখফা, তিনি গোপন কথা জানেন, আর যা তার চেয়েও গোপন তাও। কথাটি ২০:৭ আয়াতের। তাদাব্বুরে ২০:৭ ও ২০:৮ নিয়ে বিস্তারিত লেখা আছে।"
          },
          {
            "en": "The other sense concerns care. As-Sa'di gives it next: among the meanings of al-Latif is that He is gentle with His servant and His wali. He drives kindness and good to him from where he does not perceive, guards him from evil from where he does not expect, and raises him to the highest ranks by means the servant never had in mind, so much so that He lets him taste hardships in order to bring him through them to great and beloved things and to noble stations.",
            "bn": "অন্য অর্থটি যত্নের। সা'দী সেটি দেন এর পরেই। আল-লাতীফের অর্থের মধ্যে আছে, তিনি তাঁর বান্দা ও ওলির প্রতি কোমল। বান্দা টেরও পায় না, এমন পথে তিনি তার কাছে কল্যাণ আর সদাচরণ পৌঁছে দেন। সে কল্পনাও করে না, এমন পথে তাকে অনিষ্ট থেকে রক্ষা করেন। আর এমন সব উপায়ে তাকে সবচেয়ে উঁচু মর্যাদায় তুলে নেন, যা বান্দার মাথাতেই আসেনি। এমনকি কখনো তাকে কষ্টের স্বাদও নিতে দেন, যাতে সেই পথ ধরে সে পৌঁছায় মহৎ প্রিয় জিনিস আর সম্মানের আসনে।"
          },
          {
            "en": "At-Tabari and the Muyassar read the name in this second, relational sense, each with a short phrase: latif bi-'ibadihi, subtle and gentle with His servants. The same phrase opens 42:19, Allahu latifun bi-'ibadihi, whose article in Tadabbur explores the name more fully. As-Sa'di sets both senses side by side under this one verse, so that the knowledge that reaches what is hidden and the gentleness that reaches the servant unnoticed belong to the same name, spoken directly after a verse about hidden speech.",
            "bn": "তাবারী ও মুয়াসসার নামটিকে এই দ্বিতীয়, সম্পর্কের অর্থে নেন, দুজনেই ছোট্ট একটি কথায়: লাতীফুন বি'ইবাদিহী, তিনি তাঁর বান্দাদের প্রতি সূক্ষ্ম ও কোমল। এই কথাটি দিয়েই ৪২:১৯ আয়াত শুরু হয়, আল্লাহু লাতীফুন বি'ইবাদিহী। তাদাব্বুরে সেই আয়াতের লেখায় নামটি নিয়ে আরও বিস্তারিত আলোচনা আছে। সা'দী এই এক আয়াতের নিচেই দুই অর্থ পাশাপাশি রাখেন। ফলে যে জ্ঞান লুকানো জিনিসে পৌঁছায় আর যে কোমলতা বান্দার অজান্তে তার কাছে পৌঁছায়, দুটোই একই নামের ভেতরে। আর নামটি এসেছে গোপন কথা নিয়ে বলা আয়াতের ঠিক পরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Khabir Among the Names",
          "bn": "নামগুলোর মাঝে আল-খাবীর"
        },
        "p": [
          {
            "en": "The second name, al-Khabir, the Aware, is glossed by naming what it knows. Al-Baghawi says He is khabir of what is in the hearts, of good and evil and of waswasa, the whisperings. At-Tabari and the Muyassar say He is khabir of His servants and of their deeds. Ibn Kathir in the Arabic, as noted above, treats the closing pair as his reason for preferring the subject reading: a verse that ends on these two names is describing a Knower.",
            "bn": "দ্বিতীয় নাম আল-খাবীর, যিনি সব খবর রাখেন। তাফসীরকারেরা এর ব্যাখ্যা দেন তিনি কী কী জানেন তা বলে। বাগাভী বলেন, অন্তরে যা আছে, ভালো-মন্দ আর ওয়াসওয়াসা, সবকিছুর তিনি খবর রাখেন। তাবারী ও মুয়াসসার বলেন, তিনি তাঁর বান্দাদের আর তাদের আমলের খবর রাখেন। আগেই বলা হয়েছে, ইবন কাসীর তাঁর আরবি তাফসীরে শেষের এই নামজোড়াকেই কর্তার পাঠ বেছে নেওয়ার কারণ বানান। যে আয়াত এই দুই নামে শেষ হয়, তা জ্ঞানী সত্তার কথাই বলছে।"
          },
          {
            "en": "Al-Qurtubi also gives al-Isfara'ini's list of the names that belong to knowledge among the attributes of the essence, each with its own particular scope. Al-'Alim means knowledge encompassing everything knowable. Al-Khabir is particular in that He knows what will be before it is. Al-Hakim is particular in knowing the fine points of qualities. Ash-Shahid knows the absent and the present, so that nothing is absent from Him. Al-Hafiz does not forget, and al-Muhsi, as above, is not distracted by multitude.",
            "bn": "কুরতুবী ইসফারায়িনীর আরেকটি তালিকাও দেন। আল্লাহর সত্তাগত গুণবাচক নামের মধ্যে যেগুলো জ্ঞানের সাথে জড়িত, সেগুলোর প্রত্যেকটির আলাদা বিশেষত্ব আছে। আল-আলীম মানে এমন জ্ঞান, যা জানার মতো সবকিছুকে ঘিরে রাখে। আল-খাবীরের বিশেষত্ব, কিছু ঘটার আগেই তিনি জানেন তা ঘটবে। আল-হাকীমের বিশেষত্ব, গুণের সূক্ষ্ম খুঁটিনাটি জানা। আশ-শাহীদ অনুপস্থিত আর উপস্থিত দুটোই জানেন, কিছুই তাঁর থেকে আড়ালে থাকে না। আল-হাফীয ভোলেন না। আর আল-মুহসী, আগেই যেমন বলা হলো, সংখ্যার আধিক্যে অন্যমনস্ক হন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Back to Knowledge and Power",
          "bn": "আবার জ্ঞান ও কুদরতের কথায়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an maps the passage. After proofs of Allah's knowledge and power drawn from the kinds of creation, it says, the surah takes up the punishment of those who disbelieve and the reward of the believers and the obedient, a subject running through seven verses from 67:6; thereafter the subject of divine knowledge and power is revisited. 67:14 stands at that return. The Blaze and its keepers, treated in Tadabbur's article on 67:8, lie behind it.",
            "bn": "মাআরিফুল কুরআন অংশটির একটা নকশা দেয়। নানা রকম সৃষ্টি থেকে আল্লাহর জ্ঞান ও কুদরতের প্রমাণ দেখানোর পর, তার ভাষায়, সূরাটি কাফেরদের শাস্তি আর মুমিন ও অনুগতদের পুরস্কারের কথায় যায়। এই বিষয় চলে ৬৭:৬ থেকে সাতটি আয়াত জুড়ে। এরপর আবার আল্লাহর জ্ঞান ও কুদরতের প্রসঙ্গ ফিরে আসে। ৬৭:১৪ দাঁড়িয়ে আছে সেই ফিরে আসার জায়গায়। পেছনে রয়ে গেছে জাহান্নাম আর তার রক্ষীদের কথা, যা নিয়ে তাদাব্বুরে ৬৭:৮ আয়াতের লেখা আছে।"
          },
          {
            "en": "The verse just before the pair matters too. 67:12 promises forgiveness and a great reward to those who fear their Lord bil-ghayb, unseen. The abridged English Ibn Kathir explains this as a person who fears Allah in matters between himself and Allah when no other people are present, leaving disobedience and doing acts of obedience where no one sees him except Allah. 67:13 and 67:14 then give that fear its ground: He who is feared unseen knows what is unseen in the breasts.",
            "bn": "এই দুই আয়াতের ঠিক আগের আয়াতটিও গুরুত্বপূর্ণ। ৬৭:১২ আয়াত ক্ষমা ও মহা পুরস্কারের ওয়াদা দেয় তাদের, যারা না দেখেই তাদের রবকে ভয় করে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এর ব্যাখ্যা দেয় এভাবে: যে মানুষ আশপাশে কেউ না থাকলেও তার আর আল্লাহর মাঝের ব্যাপারে আল্লাহকে ভয় করে। আল্লাহ ছাড়া কেউ যেখানে দেখছে না, সেখানেও সে নাফরমানি ছাড়ে আর আনুগত্যের কাজ করে। ৬৭:১৩ ও ৬৭:১৪ এরপর সেই ভয়ের ভিত্তি দেখিয়ে দেয়: না দেখে যাঁকে ভয় করা হয়, বুকের ভেতরের অদেখা কথাও তিনি জানেন।"
          },
          {
            "en": "After the question, 67:15 turns from His knowing to what He made: the earth made tame for you, so walk in its regions, a verse Tadabbur treats on its own. None of the commentaries fetched for 67:14 attaches a hadith to it; the abridged English Ibn Kathir places its narrations at 67:12 and 67:15, not here. Nor do they record an occasion of revelation for this verse. What they give is the argument, its two readings and its two names.",
            "bn": "প্রশ্নের পর ৬৭:১৫ আয়াত তাঁর জ্ঞান থেকে ফিরে যায় তাঁর বানানো জিনিসের দিকে: তিনি যমীনকে তোমাদের অধীন করে দিয়েছেন, কাজেই তার বুকের উপর দিয়ে চলাফেরা করো। তাদাব্বুরে সেই আয়াত নিয়ে আলাদা লেখা আছে। ৬৭:১৪ আয়াতের জন্য দেখা কোনো তাফসীর এর সাথে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ তার হাদীসগুলো রেখেছে ৬৭:১২ ও ৬৭:১৫ আয়াতে, এখানে নয়। এ আয়াতের কোনো শানে নুযূলও তারা উল্লেখ করেনি। তারা দেয় যুক্তিটি, তার দুই পাঠ আর দুই নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Before the Knower",
          "bn": "যিনি জানেন, তাঁর সামনে জীবন"
        },
        "p": [
          {
            "en": "Before it asks for any deed, the verse asks the hearer to stop living as though there were an unwatched room. The unseen fear of 67:12 is not a mood to be summoned; it follows from taking 67:14 seriously. If the One who made the heart knows what is in it, the gap between the self shown to others and the self kept inside has no audience on its far side. A plain test follows: what would change if the private hour were treated as public, since before Him it already is?",
            "bn": "কোনো আমলের কথা বলার আগেই আয়াতটি শ্রোতাকে বলে, এমনভাবে বাঁচা বন্ধ করুন যেন কোথাও এমন একটা ঘর আছে যেখানে কেউ দেখছে না। ৬৭:১২ আয়াতের না-দেখা ভয় জোর করে মনে আনার মতো কোনো অনুভূতি নয়। ৬৭:১৪ আয়াতকে গুরুত্ব দিলে সেই ভয় আপনা থেকেই আসে। যিনি অন্তর বানিয়েছেন তিনি যদি তার ভেতরের কথা জানেন, তবে লোকের সামনের আপনি আর ভেতরের আপনি, এই দুইয়ের ফারাকটা দেখার মতো আড়াল আর কেউ থাকে না। এখান থেকে একটা সহজ পরীক্ষা বেরিয়ে আসে: একান্ত সময়টাকে প্রকাশ্য সময় ধরে চললে কী কী বদলাত? তাঁর সামনে তো সেটা আগে থেকেই প্রকাশ্য।"
          },
          {
            "en": "The verse also lightens something. As-Sa'di's second sense of al-Latif describes good brought to a servant from where he does not perceive, and harm turned away from where he does not expect, sometimes by way of hardship. A person who cannot find words for what troubles him has not gone unheard; at-Tabari's reading of 67:13 has already said that the unspoken thought is known. So the verse holds both: fully known, and known by One who is al-Khabir and al-Latif, aware and gentle.",
            "bn": "আয়াতটি একটা বোঝাও হালকা করে দেয়। সা'দীর বলা আল-লাতীফের দ্বিতীয় অর্থে আছে, বান্দার অজান্তে তার কাছে কল্যাণ পৌঁছানো আর তার ধারণার বাইরের পথে অনিষ্ট সরিয়ে দেওয়া, কখনো কখনো কষ্টের ভেতর দিয়েও। যে মানুষ তার কষ্টের কথা গুছিয়ে বলতে পারে না, তার কথা না-শোনা পড়ে থাকেনি। ৬৭:১৩ আয়াতের ব্যাখ্যায় তাবারী আগেই বলেছেন, মুখে না আনা ভাবনাও তিনি জানেন। তাই আয়াতটি দুটো কথাই একসাথে ধরে রাখে: আপনাকে পুরোপুরি জানা হচ্ছে, আর জানছেন এমন একজন যিনি আল-খাবীর ও আল-লাতীফ, সব খবর রাখেন এবং কোমল।"
          }
        ]
      }
    ]
  },
  "67:15": {
    "sections": [
      {
        "h": {
          "en": "A Gift Set Beside a Warning",
          "bn": "পাশে সতর্কবাণী রেখে দেওয়া দান"
        },
        "p": [
          {
            "en": "Huwa alladhi ja'ala lakumu al-arda dhalulan, fa-mshu fi manakibiha wa kulu min rizqihi, wa ilayhi an-nushur: it is He who made the earth tame for you, so walk among its slopes and eat of His provision, and to Him is the resurrection. Verse 67:14 has just asked whether He who created does not know. Ibn Kathir opens this verse with the words: then He mentioned His favour to His creation in subjecting the earth to them and making it yield to them.",
            "bn": "হুওয়াল্লাযী জাআলা লাকুমুল আরদা যালূলান, ফামশূ ফী মানাকিবিহা ওয়া কুলূ মির রিযকিহী, ওয়া ইলাইহিন নুশূর: তিনিই তোমাদের জন্য যমীনকে বশীভূত করে দিয়েছেন, তাই তার বুকে চলাফেরা করো, তাঁর দেওয়া রিযক থেকে খাও, আর তাঁরই কাছে পুনরুত্থান। ঠিক আগে ৬৭:১৪ প্রশ্ন রেখেছে, যিনি সৃষ্টি করেছেন তিনিই কি জানবেন না? ইবন কাসীর এ আয়াতের আলোচনা শুরু করেন এই কথায়: এরপর আল্লাহ সৃষ্টির উপর তাঁর অনুগ্রহের কথা বললেন, যমীনকে তাদের অধীন করে দিয়ে আর তাদের জন্য বশ মানিয়ে দিয়ে।"
          },
          {
            "en": "The gift does not stand alone. The verses after it ask: do you feel secure that He who is above would not cause the earth to swallow you, so that suddenly it sways? Or send against you a storm of stones? And those before them denied, and how terrible was My reproach. Ma'arif al-Qur'an reads the sequence this way: having allowed man the earth's benefits, the verse reminds him of his return, and the next verse warns that punishment can overtake him even while he lives on the earth.",
            "bn": "দানটা একা আসেনি। এর পরের আয়াতগুলো জিজ্ঞেস করে: তোমরা কি নিশ্চিন্ত হয়ে গেছ যে, যিনি আকাশে আছেন তিনি যমীনকে দিয়ে তোমাদের গ্রাস করাবেন না, আর হঠাৎ তা থরথর করে কাঁপতে থাকবে না? কিংবা তোমাদের উপর পাথর-বর্ষী ঝড় পাঠাবেন না? তাদের আগের লোকেরাও অস্বীকার করেছিল, তখন কেমন ছিল আমার শাস্তি! মাআরিফুল কুরআন ধারাটা এভাবে পড়ে। যমীন থেকে উপকার নেওয়ার অনুমতি দিয়েই আয়াতটি মানুষকে তার ফিরে যাওয়ার কথা মনে করিয়ে দেয়। আর পরের আয়াত সতর্ক করে, যমীনের উপর বেঁচে থাকা অবস্থাতেই আযাব তাকে ধরে ফেলতে পারে।"
          },
          {
            "en": "This needs saying plainly. Verse 67:18 describes what the text describes, earlier peoples who denied and met His reproach, and it licenses nothing against any living person or community. It names no nation for a reader to point at. The question do you feel secure is addressed to whoever hears it, and the tamed ground of 67:15 lies under the feet of the reader of these lines as much as under anyone else's.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ৬৭:১৮ আয়াত শুধু তা-ই বর্ণনা করে যা তার ভাষায় আছে: আগের কিছু জাতি অস্বীকার করেছিল আর আল্লাহর শাস্তির মুখোমুখি হয়েছিল। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। আঙুল তুলে দেখানোর মতো কোনো জাতির নামও এতে নেই। তোমরা কি নিশ্চিন্ত, এই প্রশ্ন যে শোনে তাকেই করা। ৬৭:১৫ আয়াতের বশ মানানো যমীন অন্য সবার মতো এ লেখার পাঠকেরও পায়ের নিচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dhalul: A Broken-In Mount",
          "bn": "যালূল: পোষ মানা বাহন"
        },
        "p": [
          {
            "en": "Dhalul is the key word. Al-Qurtubi defines it: the dhalul is the compliant one that yields to you, and its verbal noun means softness and compliance. In his gloss, Allah did not make the earth such that walking on it is blocked by roughness and harshness. Al-Baghawi says nearly the same: easy, with walking not hindered by rough ground. At-Tabari glosses it as easy, He made it easy for you, and the Muyassar as easy and smoothed, a place where you settle. Ma'arif al-Qur'an supplies the animal behind the word: said of a mount, dhalul means one that does not turn unruly under its rider.",
            "bn": "মূল শব্দটি যালূল। কুরতুবী এর সংজ্ঞা দেন: যালূল সেই অনুগত, যে আপনার কাছে বশ মানে। এর ক্রিয়াবিশেষ্যের অর্থ নরম হওয়া ও কথা শোনা। তাঁর ব্যাখ্যায়, আল্লাহ যমীনকে এমন করেননি যে রুক্ষতা আর কাঠিন্যের কারণে তার উপর হাঁটা যায় না। বাগাভীর কথাও প্রায় একই: সহজ, এবড়োখেবড়ো মাটি হাঁটায় বাধা দেয় না। তাবারী লেখেন, সহজ, তিনি তোমাদের জন্য তাকে সহজ করে দিয়েছেন। মুয়াসসারের ভাষায়, সহজ ও সমতল, যার উপর তোমরা স্থির হয়ে থাকো। শব্দের পেছনের পশুটিকে সামনে আনে মাআরিফুল কুরআন। বাহনের বেলায় যালূল বলা হয় তাকে, যে আরোহীর নিচে অবাধ্য হয় না।"
          },
          {
            "en": "Al-Qurtubi adds two readings, each marked it is said. In the first, He fixed the earth with mountains so that it would not slide away with its people, for had it kept tilting and rocking it would not have been compliant to us. In the second, the word points to what the earth allows: sowing and planting, splitting open springs and rivers, and digging wells. Ibn Kathir describes the same yielding: He made it settled and still, neither stretching nor shaking, by the mountains He placed in it; and He made springs flow in it, laid paths through it, and readied in it benefits and places for crops and fruit.",
            "bn": "কুরতুবী আরও দুটি ব্যাখ্যা যোগ করেন, দুটিই 'বলা হয়' দিয়ে। প্রথমটি হলো, আল্লাহ পাহাড় দিয়ে যমীনকে স্থির করে দিয়েছেন, যাতে অধিবাসীদের নিয়ে তা সরে না যায়। যমীন যদি সারাক্ষণ হেলেদুলে টলতে থাকত, তাহলে আমাদের বশে থাকত না। দ্বিতীয়টি হলো, শব্দটি ইঙ্গিত করে যমীন যা করতে দেয় তার দিকে: চাষ ও গাছ লাগানো, ঝরনা আর নদী বইয়ে দেওয়া, কূপ খোঁড়া। ইবন কাসীরও এই বশ মানার বর্ণনা দেন। আল্লাহ যমীনকে স্থির ও শান্ত করেছেন, তা প্রসারিত হয় না, কাঁপেও না। এই স্থিরতা এসেছে তাতে বসানো পাহাড় দিয়ে। আর তিনি তাতে ঝরনা প্রবাহিত করেছেন, পথ তৈরি করেছেন, নানা উপকার আর ফসল ও ফলের জায়গা প্রস্তুত করে রেখেছেন।"
          },
          {
            "en": "Ma'arif al-Qur'an draws out the balance. The earth is not liquid like water, which would flow away, nor mud and mire; nor is it hard like rock or iron, which no plough could break and no well or foundation could enter. As-Sa'di lists what the yielding makes possible: planting, building and tilling, and roads that reach distant regions and far-off lands. Read with these commentators, dhalul is not a word about the earth's shape. It describes ground fitted to the people who walk on it.",
            "bn": "মাআরিফুল কুরআন ভারসাম্যটা খুলে দেখায়। যমীন পানির মতো তরল নয় যে গড়িয়ে চলে যাবে, কাদা বা পাঁকও নয়। আবার পাথর বা লোহার মতো শক্তও নয়, যাতে লাঙল চলে না, কূপ খোঁড়া যায় না, দালানের ভিত বসানো যায় না। সা'দী গুনে দেখান, এই বশ মানা কী কী সম্ভব করে: গাছ লাগানো, ঘর তোলা, জমি চাষ, আর এমন পথ যা দূর দূরান্তের অঞ্চল ও দেশে পৌঁছে দেয়। এই তাফসীরকারদের সঙ্গে পড়লে যালূল যমীনের আকৃতির কথা নয়। এ এমন মাটির বর্ণনা, যা তার উপর চলা মানুষের মাপে গড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Manakib: Where the Shoulders Are",
          "bn": "মানাকিব: কাঁধের জায়গা"
        },
        "p": [
          {
            "en": "Fa-mshu fi manakibiha: so walk in its manakib. Ma'arif al-Qur'an explains that manakib is the plural of mankib, the shoulder, which in an animal is the top of the foreleg. A rider normally sits on the back or the neck, not there, so an animal that offers even its shoulders to riders is very docile. Hence, it says, the verse means: He made the earth submissive for you, so walk on its shoulders. On this reading dhalul and manakib belong to a single picture.",
            "bn": "ফামশূ ফী মানাকিবিহা: তাই তার মানাকিবে চলাফেরা করো। মাআরিফুল কুরআন বুঝিয়ে দেয়, মানাকিব শব্দটি মানকিবের বহুবচন, যার অর্থ কাঁধ। পশুর বেলায় তা সামনের পায়ের উপরের অংশ। আরোহী সাধারণত বসে পিঠে বা ঘাড়ে, কাঁধে নয়। তাই যে পশু কাঁধটাও আরোহীকে পেতে দেয়, সে খুবই বাধ্য। এ কারণেই, মাআরিফুলের ভাষায়, আয়াতের অর্থ দাঁড়ায়: তিনি যমীনকে তোমাদের বশ করে দিয়েছেন, অতএব তার কাঁধে চড়ে চলো। এই পাঠে যালূল আর মানাকিব একই ছবির দুই অংশ।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi trace the word to a wider root. Al-Qurtubi writes that the base sense of mankib is side, as in the two mankibs of a man, which are his two sides; from it come an-nakba', a wind that blows aslant, and the verb tanakkaba, to turn aside from someone. Al-Baghawi gives the same in the name of al-Farra': in its sides, the root of the word being side. At-Tabari, as the next section shows, leans on this same link between shoulders and sides when he weighs the early glosses.",
            "bn": "কুরতুবী ও বাগাভী শব্দটিকে আরও বড় এক ধাতুর সঙ্গে যুক্ত করেন। কুরতুবী লেখেন, মানকিবের মূল অর্থ পাশ। যেমন মানুষের দুই মানকিব মানে তার দুই পাশ। এখান থেকেই এসেছে আন-নাকবা, অর্থাৎ যে বাতাস তেরছা হয়ে বয়, আর তানাক্কাবা ক্রিয়া, অর্থাৎ কারও থেকে পাশ কাটিয়ে সরে যাওয়া। বাগাভী একই ব্যাখ্যা দেন ফাররার নামে: তার পাশগুলোতে, কারণ শব্দের মূল অর্থ পাশ। পরের অংশে দেখা যাবে, প্রথম যুগের ব্যাখ্যাগুলো যাচাই করতে গিয়ে তাবারীও কাঁধ আর পাশের এই সম্পর্কের উপরই ভর দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Mountains, Roads or Corners",
          "bn": "পাহাড়, পথ, না প্রান্ত"
        },
        "p": [
          {
            "en": "At-Tabari states it outright: the people of knowledge differed over the meaning of manakibiha. Some said its mountains. He gives this from Ibn 'Abbas by one chain, and from Qatada; Ibn Kathir, al-Qurtubi and al-Baghawi also name Ibn 'Abbas and Qatada for mountains, and al-Baghawi adds ad-Dahhak for its hillocks. Others said its edges and regions, and at-Tabari gives that too from Ibn 'Abbas, by another chain, so Ibn 'Abbas is reported on both sides. Mujahid said its roads and mountain passes, and al-Qurtubi notes that as-Suddi and al-Hasan said the same.",
            "bn": "তাবারী সরাসরি বলেন: মানাকিবিহার অর্থ নিয়ে আলেমদের মধ্যে মতভেদ হয়েছে। কেউ বলেছেন, এর পাহাড়গুলো। এ মত তিনি আনেন ইবন আব্বাস (রাঃ) থেকে একটি সূত্রে, আর কাতাদা থেকে। ইবন কাসীর, কুরতুবী ও বাগাভীও পাহাড়ের মতের সঙ্গে ইবন আব্বাস (রাঃ) ও কাতাদার নাম নেন। বাগাভী এর সঙ্গে যোগ করেন দাহহাকের মত: এর টিলাগুলো। অন্যরা বলেছেন, এর প্রান্ত ও অঞ্চলগুলো। তাবারী এ মতও ইবন আব্বাস (রাঃ) থেকে আনেন, ভিন্ন এক সূত্রে। ফলে দুই মতেই ইবন আব্বাসের নাম পাওয়া যায়। মুজাহিদ বলেছেন, এর পথঘাট ও গিরিপথ। কুরতুবী জানান, সুদ্দী ও হাসানও একই কথা বলেছেন।"
          },
          {
            "en": "The names spread further. Al-Baghawi reports al-Hasan as saying its ways, al-Kalbi its edges and Muqatil its regions, while al-Qurtubi gives al-Kalbi as saying its sides. Ibn Kathir gathers Ibn 'Abbas, Mujahid, Qatada and as-Suddi under one line: its edges, its passes and its regions. At-Tabari then gives his own preference: walk in its regions and sides, because the regions of the earth correspond to the shoulders of a person, which are among his extremities. The Muyassar's paraphrase uses the same regions and sides. Al-Qurtubi, al-Baghawi and Ibn Kathir record the readings without choosing, and this article leaves them side by side.",
            "bn": "নামের তালিকা আরও লম্বা। বাগাভীর বর্ণনায় হাসান বলেছেন, এর রাস্তাগুলো; কালবী বলেছেন, এর প্রান্তগুলো; আর মুকাতিল বলেছেন, এর অঞ্চলগুলো। অন্যদিকে কুরতুবীর বর্ণনায় কালবীর মত হলো, এর পাশগুলো। ইবন কাসীর ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও সুদ্দীকে এক বাক্যে একসঙ্গে আনেন: এর প্রান্ত, গিরিপথ ও অঞ্চল। এরপর তাবারী নিজের পছন্দ জানান: যমীনের অঞ্চল ও পাশগুলোতে চলো। কারণ যমীনের অঞ্চলগুলো মানুষের কাঁধের মতো, আর কাঁধ মানুষের দেহের প্রান্তেরই অংশ। মুয়াসসারের ব্যাখ্যাতেও একই কথা: এর অঞ্চল ও পাশগুলো। কুরতুবী, বাগাভী ও ইবন কাসীর কোনোটিকে বেছে না নিয়ে সব মত লিখে রাখেন। এ লেখাও সেগুলো পাশাপাশি রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Freed for Knowing a Word",
          "bn": "একটি শব্দ জানার দামে মুক্তি"
        },
        "p": [
          {
            "en": "The word once decided a woman's freedom. At-Tabari, Ibn Kathir and al-Qurtubi all relate the episode through Qatada from Bashir ibn Ka'b. He recited fa-mshu fi manakibiha and said to a slave woman of his household: if you can tell me what its manakib are, you are free. In most of the versions she answered: its mountains. In one of at-Tabari's chains she answered: its regions. Al-Qurtubi says simply that she became free. The reports agree on the question, the word of this verse, and differ on her answer.",
            "bn": "এই শব্দটি একবার এক নারীর মুক্তি ঠিক করে দিয়েছিল। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই ঘটনাটি বর্ণনা করেন কাতাদার সূত্রে, বাশীর ইবন কা'ব থেকে। তিনি ফামশূ ফী মানাকিবিহা তিলাওয়াত করে নিজের ঘরের এক দাসীকে বললেন: এর মানাকিব কী, যদি বলতে পারো, তুমি আযাদ। বেশির ভাগ বর্ণনায় দাসী উত্তর দিল: এর পাহাড়গুলো। তাবারীর একটি সূত্রে তার উত্তর: এর অঞ্চলগুলো। কুরতুবী শুধু জানান, সে আযাদ হয়ে গেল। প্রশ্ন নিয়ে বর্ণনাগুলো একমত, প্রশ্নটা এ আয়াতেরই শব্দ নিয়ে। মতভেদ দাসীর উত্তরে।"
          },
          {
            "en": "What followed differs between the books. In at-Tabari's and al-Qurtubi's accounts, Bashir then wished to marry her. At-Tabari adds that some he asked told him to go ahead and some forbade it, and that he went to Abu ad-Darda' (RA), who said: good lies in tranquillity and evil in doubt, so leave what gives you doubt for what does not. In the version Ibn Kathir cites from Ibn Abi Hatim, Bashir asked Abu ad-Darda' (RA), and the answer was: they are the mountains. Its place in three commentaries shows a single word of this verse being argued over and weighed.",
            "bn": "এরপর কী হলো, সে বিষয়ে বইগুলোর বর্ণনা আলাদা। তাবারী ও কুরতুবীর বর্ণনায়, বাশীর এরপর তাকে বিয়ে করতে চাইলেন। তাবারী যোগ করেন, যাঁদের জিজ্ঞেস করলেন তাঁদের কেউ এগোতে বললেন, কেউ নিষেধ করলেন। শেষে তিনি গেলেন আবুদ দারদা (রাঃ)-এর কাছে। তিনি বললেন, কল্যাণ থাকে প্রশান্তিতে আর অকল্যাণ সংশয়ে, তাই যা সন্দেহে ফেলে তা ছেড়ে যা সন্দেহে ফেলে না তা ধরো। ইবন কাসীর ইবন আবী হাতিম থেকে যে বর্ণনা আনেন, সেখানে বাশীর আবুদ দারদা (রাঃ)-কে জিজ্ঞেস করলে উত্তর আসে: সেগুলো পাহাড়। তিনটি তাফসীরে ঘটনাটির জায়গা পাওয়াই দেখায়, এ আয়াতের একটি শব্দ নিয়ে কেমন তর্ক আর যাচাই হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Walk and Eat, by Permission",
          "bn": "চলা আর খাওয়ার অনুমতি"
        },
        "p": [
          {
            "en": "Both verbs are commands, walk and eat, and al-Qurtubi names their kind: it is a command of permission, amr ibaha, and in it is a display of favour. He records a second view as well, that it is a statement in the form of a command, meaning so that you may walk in its edges, regions, hillocks and mountains. On neither reading does the verse make travel an obligation. It opens a door, and the favour lies in the door being opened.",
            "bn": "দুটি ক্রিয়াই আদেশসূচক, চলো আর খাও। কুরতুবী এদের ধরন চিনিয়ে দেন: এটি অনুমতির আদেশ, আমরে ইবাহা, আর এর মধ্যে আছে অনুগ্রহের প্রকাশ। তিনি দ্বিতীয় একটি মতও লেখেন: এটি আদেশের রূপে আসা সংবাদ, অর্থাৎ যাতে তোমরা যমীনের প্রান্ত, অঞ্চল, টিলা ও পাহাড়ে চলাফেরা করতে পারো। কোনো পাঠেই আয়াতটি সফরকে ফরয বানায় না। আয়াতটি দরজা খুলে দেয়, আর দরজা খুলে দেওয়াটাই অনুগ্রহ।"
          },
          {
            "en": "The tafsirs say what the walking is for. Ibn Kathir: travel wherever you wish through its regions, and go to and fro in its lands and corners in the many kinds of earning and trade. As-Sa'di: walk to seek provision and earnings. The Muyassar finds in the verse a hint toward seeking provision and livelihood. Ma'arif al-Qur'an, more cautiously, says that eat coming after the direction to travel probably indicates that trading journeys are doors to the livelihood that comes from Allah.",
            "bn": "হাঁটাচলা কীসের জন্য, তাফসীরগুলো তা বলে দেয়। ইবন কাসীর লেখেন: যেখানে খুশি এর অঞ্চলগুলোতে সফর করো, নানা রকম উপার্জন ও ব্যবসার জন্য এর দেশ আর কোণে কোণে যাওয়া-আসা করো। সা'দী বলেন: রিযক ও উপার্জনের খোঁজে চলো। মুয়াসসার আয়াতে রিযক ও জীবিকা খোঁজার ইঙ্গিত দেখে। মাআরিফুল কুরআন একটু সাবধানে কথা বলে। সফরের নির্দেশের পরেই খাওয়ার কথা এসেছে, এতে সম্ভবত বোঝায়, ব্যবসার সফরগুলো আল্লাহর কাছ থেকে আসা জীবিকার দরজা।"
          },
          {
            "en": "Then min rizqihi: of His provision, and the pronoun refers to Allah. At-Tabari: eat of the provision of Allah which He brought out for you from the earth's manakib. Al-Baghawi: of what He created as provision for you in the earth. Al-Qurtubi reports al-Hasan: of what He made lawful for you. The earth is where the food comes out, and the verse names its owner. Ibn Kathir draws the lesson from the clause: know that your striving avails you nothing unless Allah makes it easy for you.",
            "bn": "তারপর মির রিযকিহী: তাঁর রিযক থেকে। সর্বনামটি আল্লাহর দিকে ফেরে। তাবারী লেখেন: আল্লাহর সেই রিযক থেকে খাও, যা তিনি যমীনের মানাকিব থেকে তোমাদের জন্য বের করে এনেছেন। বাগাভীর ভাষায়: যমীনে তিনি তোমাদের জন্য যা রিযক হিসেবে সৃষ্টি করেছেন, তা থেকে। কুরতুবী হাসানের কথা আনেন: তিনি তোমাদের জন্য যা হালাল করেছেন, তা থেকে। খাবার বের হয় যমীন থেকে, কিন্তু আয়াত নাম নেয় তার মালিকের। ইবন কাসীর এই অংশ থেকে শিক্ষা টানেন: জেনে রাখো, আল্লাহ সহজ না করলে তোমাদের চেষ্টা তোমাদের কোনো কাজে আসবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Out Hungry, Home Full",
          "bn": "খালি পেটে যায়, ভরা পেটে ফেরে"
        },
        "p": [
          {
            "en": "Ibn Kathir then states the balance: striving through means does not contradict reliance on Allah, tawakkul. As support he cites a hadith from Imam Ahmad, from 'Umar ibn al-Khattab (RA), adding that at-Tirmidhi, an-Nasa'i and Ibn Majah recorded it and that at-Tirmidhi called it hasan sahih. In the English of Jami' at-Tirmidhi 2344, on the page fetched: \"'Umar bin Al-Khattab narrated that the Messenger of Allah (s.a.w) said: 'If you were to rely upon Allah with the required reliance, then He would provide for you just as a bird is provided for, it goes out in the morning empty, and returns full.'\"",
            "bn": "এরপর ইবন কাসীর ভারসাম্যের কথাটি বলেন: উপায় অবলম্বন করে চেষ্টা করা আল্লাহর উপর তাওয়াক্কুলের বিরোধী নয়। এর সমর্থনে তিনি ইমাম আহমাদের সূত্রে উমর ইবনুল খাত্তাব (রাঃ)-এর একটি হাদীস আনেন। সঙ্গে জানান, তিরমিযী, নাসাঈ ও ইবন মাজাহও এটি বর্ণনা করেছেন, আর তিরমিযী একে হাসান সহীহ বলেছেন। জামি' তিরমিযীর ২৩৪৪ নম্বর হাদীস, যে পাতাটি দেখা হয়েছে তার ভাষ্যে: উমর ইবনুল খাত্তাব (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: তোমরা যদি আল্লাহর উপর যথাযথভাবে ভরসা করতে, তাহলে তিনি তোমাদের রিযক দিতেন যেভাবে পাখিকে রিযক দেওয়া হয়। সকালে সে খালি পেটে বের হয়, আর ভরা পেটে ফেরে।"
          },
          {
            "en": "At-Tirmidhi's own note under it, in the Arabic of the same page, reads: this hadith is hasan sahih, and we know it only through this route. Ibn Kathir's comment is the point of the citation: the hadith affirms that the bird sets out in the morning and returns in the evening seeking its provision, while relying on Allah, who is the One who subjects, directs and causes. He brings the hadith under this clause as an illustration; it is not a report about the verse's revelation. Four verses later, 67:19 turns to birds again, held aloft by the Most Merciful.",
            "bn": "একই পাতার আরবিতে হাদীসের নিচে তিরমিযীর নিজের মন্তব্য: এই হাদীসটি হাসান সহীহ, এই একটি সূত্র ছাড়া অন্য কোনো সূত্রে আমরা এটি জানি না। উদ্ধৃতির আসল উদ্দেশ্য ইবন কাসীরের মন্তব্যে। হাদীসটি দেখায়, পাখি সকালে বের হয়, সন্ধ্যায় ফেরে, রিযক খোঁজে, আবার আল্লাহর উপর ভরসাও রাখে। আর আল্লাহই সবকিছুকে অধীন করেন, পরিচালনা করেন, কারণ ঘটান। ইবন কাসীর হাদীসটি এ অংশের দৃষ্টান্ত হিসেবে আনেন। আয়াত নাযিলের প্রেক্ষাপট নিয়ে এটি কোনো বর্ণনা নয়। চারটি আয়াতের পরে ৬৭:১৯ আবার পাখির কথায় ফেরে, যাদের শূন্যে ধরে রাখেন দয়াময়।"
          }
        ]
      },
      {
        "h": {
          "en": "And to Him Is the Nushur",
          "bn": "আর ফেরা তাঁরই কাছে"
        },
        "p": [
          {
            "en": "The verse closes on wa ilayhi an-nushur, and the tafsirs read nushur as the raising. At-Tabari: to Allah is your raising from your graves. Al-Baghawi: to Him you will be raised from your graves. Ibn Kathir: the return on the Day of Resurrection. The Muyassar adds the purpose, for the reckoning and the recompense, and finds in the verse a warning against leaning on the world. Al-Qurtubi glosses it as the return, and records a further reading: He who made the sky without flaw, and the earth tame, is able to raise you.",
            "bn": "আয়াত শেষ হয় ওয়া ইলাইহিন নুশূর দিয়ে, আর তাফসীরগুলো নুশূরের অর্থ করে পুনরুত্থান। তাবারী: কবর থেকে তোমাদের উঠিয়ে আনা আল্লাহরই কাছে। বাগাভী: কবর থেকে উঠিয়ে তোমাদের তাঁরই কাছে নেওয়া হবে। ইবন কাসীর: কিয়ামতের দিনের প্রত্যাবর্তন। মুয়াসসার উদ্দেশ্যটাও বলে দেয়, হিসাব আর প্রতিদানের জন্য। আয়াতে সে দুনিয়ার উপর ভর করে বসে থাকার বিরুদ্ধে সতর্কবাণীও দেখে। কুরতুবী অর্থ করেন প্রত্যাবর্তন, আর আরেকটি ব্যাখ্যা লেখেন: যিনি আকাশকে নিখুঁত বানিয়েছেন আর যমীনকে বশ মানিয়েছেন, তিনি তোমাদের আবার উঠিয়ে আনতে সক্ষম।"
          },
          {
            "en": "As-Sa'di sets the whole verse inside one journey: after you move on from this abode, which Allah made a trial and a provision for reaching the abode of the Hereafter, you will be raised after your death and gathered to Allah, to be repaid for your deeds, good and bad. Ma'arif al-Qur'an draws the practical line: man is permitted to eat, drink and live from the earth, but reminded not to be heedless of death and what follows it, and to prepare for it while he lives on the earth. The verse lets you walk and eat, and does not end at eat.",
            "bn": "সা'দী গোটা আয়াতকে একটি সফরের ভেতরে রাখেন। আল্লাহ এই দুনিয়াকে বানিয়েছেন পরীক্ষার জায়গা, আর আখিরাতে পৌঁছানোর পাথেয়। এখান থেকে বিদায় নেওয়ার পর মৃত্যুর পরে তোমাদের উঠানো হবে, আল্লাহর কাছে জমা করা হবে, ভালো-মন্দ সব আমলের প্রতিদান দিতে। মাআরিফুল কুরআন বাস্তব জীবনের কথাটা টানে। যমীন থেকে খাওয়া, পান করা আর বেঁচে থাকার উপকার নেওয়ার অনুমতি মানুষের আছে। তবে তাকে মনে করিয়ে দেওয়া হয়, মৃত্যু আর তার পরের জীবন নিয়ে যেন গাফেল না থাকে, যমীনে থাকতেই যেন প্রস্তুতি নেয়। আয়াত চলতে আর খেতে দেয়, কিন্তু খাওয়াতে থেমে যায় না।"
          }
        ]
      }
    ]
  },
  "67:19": {
    "sections": [
      {
        "h": {
          "en": "After the Warning, Look Up",
          "bn": "সতর্কবাণীর পর, এবার উপরে তাকান"
        },
        "p": [
          {
            "en": "Two questions about safety come first. 67:16 asks whether you feel secure that He who is above will not cause the earth to swallow you, and 67:17 whether He will not send against you a storm of stones. 67:18 then recalls that those before them denied, and how severe His reproach was. The English abridgement of Ibn Kathir treats 67:16 to 67:19 as a single passage and opens it by calling the whole of it a sign of His gentleness and mercy towards His creatures: He is able to punish, yet He is forbearing and gives respite, as 35:45 says.",
            "bn": "আগে আসে নিরাপত্তা নিয়ে দুটি প্রশ্ন। ৬৭:১৬ জিজ্ঞেস করে, যিনি উপরে আছেন তিনি তোমাদের মাটিতে ধসিয়ে দেবেন না, এ ব্যাপারে কি তোমরা নিশ্চিন্ত? ৬৭:১৭ জিজ্ঞেস করে, তিনি পাথর-বর্ষী ঝড় পাঠাবেন না, এতেও কি নিশ্চিন্ত? এরপর ৬৭:১৮ মনে করিয়ে দেয়, আগের লোকেরাও অস্বীকার করেছিল, আর তাঁর পাকড়াও কত কঠিন ছিল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৬৭:১৬ থেকে ৬৭:১৯ পর্যন্ত এক অংশ ধরে আলোচনা করে। শুরুতেই বলে, পুরো অংশটা সৃষ্টির প্রতি তাঁর কোমলতা ও রহমতের নিদর্শন। শাস্তি দেওয়ার ক্ষমতা তাঁর আছে, তবু তিনি সহনশীল, অবকাশ দেন, যেমনটা ৩৫:৪৫ আয়াতে আছে।"
          },
          {
            "en": "Then the passage turns. A-wa lam yaraw ila at-tayri fawqahum: do they not see the birds above them? The question is put about the deniers rather than to them, and the commentators name its tone. As-Sa'di calls it a reproach together with an urging to look at the state of the birds. The Muyassar paraphrases it as a charge of heedlessness: have these disbelievers been heedless, and not looked at the birds above them? The Ibn Kathir abridgement heads the verse with its own summary: the flight of birds is by the power of Allah, and a proof that He sees everything, small and large.",
            "bn": "এরপর আলোচনা মোড় নেয়। আওয়া লাম ইয়ারাও ইলাত-তাইরি ফাওকাহুম: তারা কি তাদের উপরের পাখিগুলো দেখে না? প্রশ্নটা অস্বীকারকারীদের সরাসরি করা হয়নি, করা হয়েছে তাদের নিয়ে। প্রশ্নের সুর কেমন, তাফসীরকারেরা তা বলে দেন। সা'দী একে বলেন তিরস্কার, সঙ্গে পাখিদের অবস্থার দিকে তাকানোর তাগিদ। মুয়াসসার একে গাফিলতির অভিযোগ হিসেবে খুলে বলে: এই কাফিররা কি উদাসীন হয়ে গেছে, মাথার উপরের পাখিগুলোর দিকে তাকায়নি? ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আয়াতটির আগে নিজের একটা শিরোনাম বসায়: পাখির ওড়া আল্লাহর কুদরতে, আর তা প্রমাণ যে তিনি ছোট-বড় সবকিছু দেখেন।"
          },
          {
            "en": "The 'they' of the verse are the deniers of whom the passage has been speaking, and the verse speaks only of what it names: people who were shown a sign over their heads and did not read it. It licenses nothing against any living person or community. What it asks of anyone who hears it is the same plain act it asked of them. Look up, notice the bird, and ask what is keeping it where it is. The verse itself answers that question before it ends, in two short clauses.",
            "bn": "আয়াতের 'তারা' হলো সেই অস্বীকারকারীরা, যাদের কথা এ অংশে চলছিল। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: কিছু মানুষকে মাথার উপরে নিদর্শন দেখানো হয়েছিল, তারা তা পড়েনি। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। যে-ই আয়াতটি শোনে, তার কাছে আয়াতের দাবি সেই একই সহজ কাজ, যা তাদের কাছে ছিল। উপরে তাকান, পাখিটা লক্ষ করুন, আর জিজ্ঞেস করুন কে তাকে ওখানে রেখেছে। শেষ হওয়ার আগেই আয়াতটি দুটি ছোট বাক্যে সেই প্রশ্নের জবাব দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Saffat: Wings Laid in a Row",
          "bn": "সাফফাত: সারি বেঁধে মেলা ডানা"
        },
        "p": [
          {
            "en": "The birds are first described as saffatin, a plural participle. Al-Baghawi glosses it in a few words: they align their wings in the air. Ibn Kathir says that at times they align their wings in the air, and the Muyassar that they spread their wings as they fly through it. Al-Qurtubi gives the same sense, spreading their wings in the sky while flying, and then explains why spreading is called by this word at all: when birds spread their wings, he says, they lay them out in a row, saffan. The image is of a wing held open and still.",
            "bn": "পাখিদের প্রথম বর্ণনা সাফফাতিন, বহুবচনের কর্তৃবাচক বিশেষ্য। বাগাভী অল্প কথায় এর ব্যাখ্যা দেন: তারা শূন্যে ডানাগুলো সারি করে মেলে রাখে। ইবন কাসীর বলেন, কখনো কখনো তারা বাতাসে ডানা সারিবদ্ধ করে রাখে। মুয়াসসার বলে, উড়ার সময় তারা শূন্যে ডানা ছড়িয়ে দেয়। কুরতুবীও একই অর্থ দেন, উড়তে উড়তে আকাশে ডানা ছড়িয়ে রাখা। তারপর তিনি ব্যাখ্যা করেন, ডানা মেলাকে এই শব্দে বলা হয় কেন। তাঁর কথায়, পাখি যখন ডানা মেলে, তখন তা এক সারিতে বিছিয়ে দেয়, যাকে আরবিতে বলে সাফ্‌ফ। ছবিটা খোলা আর স্থির ডানার।"
          },
          {
            "en": "Al-Qurtubi then quotes Abu Ja'far an-Nahhas on how Arabic speaks of birds: a bird that spreads its wings is called saff, and when it draws them together so that they strike its side, qabid, because it is gathering them in. As a witness he cites a line of the poet Abu Khirash about one that races the fall of night, seeking shelter, and drives its wing on bit-tabassuti wal-qabd, by spreading and by drawing in. In that line the same pair the verse uses describes a creature in flight.",
            "bn": "এরপর কুরতুবী আবু জা'ফর নাহহাসের কথা আনেন, পাখির বেলায় আরবি ভাষা কী বলে। যে পাখি দুই ডানা মেলে দেয়, তাকে বলে সাফ্‌ফ। আর যখন ডানা গুটিয়ে আনে, ফলে তা পাঁজরে গিয়ে লাগে, তখন বলে কাবিদ, কারণ সে ডানা টেনে নিচ্ছে। সাক্ষী হিসেবে তিনি কবি আবু খিরাশের একটি পঙ্‌ক্তি উদ্ধৃত করেন। সেখানে এমন এক উড়ন্তের কথা, যে রাত নামার আগে আশ্রয়ের দিকে ছুটছে, আর বিত-তাবাস্সুতি ওয়াল-কাবদ, অর্থাৎ মেলে আর গুটিয়ে, ডানাকে তাড়া দিচ্ছে। আয়াতের এই জোড়া শব্দই সেই পঙ্‌ক্তিতে উড়ন্ত প্রাণীর বর্ণনা দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa-Yaqbidna: Two Pictures",
          "bn": "ওয়া ইয়াকবিদনা: দুই রকম ছবি"
        },
        "p": [
          {
            "en": "Wa-yaqbidna: and they draw in. Here the readings separate into two pictures. Ibn Kathir, in the Arabic, reads it as a movement within flight: at times they align their wings in the air, and at times a bird gathers one wing and spreads another. The English abridgement renders the same contrast with its own glosses in brackets, gliding for the wings spread out and flapping for the gathering and spreading. Al-Qurtubi's first reading is close to this: they strike their sides with their wings. The Muyassar says they press them to their sides at times.",
            "bn": "ওয়া ইয়াকবিদনা: আর তারা গুটিয়ে নেয়। এখানে এসে ব্যাখ্যা দুই রকম ছবিতে ভাগ হয়ে যায়। আরবি তাফসীরে ইবন কাসীর একে ওড়ার ভেতরেরই একটা নড়াচড়া ধরেন। কখনো তারা বাতাসে ডানা সারি করে রাখে, কখনো একটা ডানা গুটিয়ে আরেকটা মেলে দেয়। সংক্ষিপ্ত ইংরেজি সংস্করণ একই তফাতটা বোঝাতে বন্ধনীতে নিজের দুটি শব্দ বসিয়েছে: ডানা মেলে থাকা হলো গ্লাইডিং, আর গুটিয়ে-মেলে ডানা নাড়ানো হলো ফ্ল্যাপিং। কুরতুবীর প্রথম ব্যাখ্যাও এর কাছাকাছি: তারা ডানা দিয়ে নিজেদের পাঁজরে আঘাত করে। মুয়াসসার বলে, কখনো কখনো তারা ডানা পাঁজরের সঙ্গে চেপে রাখে।"
          },
          {
            "en": "Al-Qurtubi then records a second view, introduced with qila, it is said: that they fold their wings after spreading them, when they stop flying. As-Sa'di's wording sits nearer this second picture. The birds spread their wings for flight and draw them in to come down, he says, and so stay afloat in the air, moving to and fro in it as their will and their need direct. Al-Baghawi says only that they draw their wings in after spreading. Both pictures stand in the sources, and none of the commentators consulted here argues one against the other.",
            "bn": "এরপর কুরতুবী আরেকটি মত উল্লেখ করেন, 'কীলা' অর্থাৎ 'বলা হয়' কথাটি দিয়ে। সে মতে ওড়া থামানোর সময় তারা মেলে রাখা ডানা গুটিয়ে নেয়। সা'দীর ভাষা এই দ্বিতীয় ছবির কাছাকাছি। তাঁর কথায়, পাখিরা উড়তে ডানা মেলে, নামতে ডানা গুটায়, আর এভাবে শূন্যে ভেসে থাকে, নিজের ইচ্ছা আর প্রয়োজনমতো এদিক-ওদিক যাওয়া-আসা করে। বাগাভী শুধু এটুকু বলেন যে মেলার পর তারা ডানা গুটিয়ে নেয়। দুটো ছবিই তাফসীরে রয়ে গেছে। এখানে যাঁদের তাফসীর দেখা হয়েছে, তাঁদের কেউ একটিকে অন্যটির বিপক্ষে দাঁড় করাননি।"
          },
          {
            "en": "Al-Qurtubi also notes a point of grammar: wa-yaqbidna is a present-tense verb joined to saffatin, a participle, and he cites a line of poetry in which the joining runs the other way, a participle joined to a present-tense verb. He draws no lesson from the shift, and this article will not invent one. What can be said plainly is what the two words show together. The bird is described in both of its states, open and drawn in, and in neither of them does it fall.",
            "bn": "কুরতুবী একটা ব্যাকরণগত দিকও দেখান। ওয়া ইয়াকবিদনা বর্তমান কালের ক্রিয়া, অথচ তাকে জোড়া হয়েছে সাফফাতিনের সঙ্গে, যা কর্তৃবাচক বিশেষ্য। তিনি কবিতার একটি পঙ্‌ক্তিও আনেন, যেখানে জোড়াটা উল্টো দিকে: বর্তমান কালের ক্রিয়ার সঙ্গে কর্তৃবাচক বিশেষ্য। এই বদল থেকে তিনি কোনো শিক্ষা টানেন না, এ লেখাও নতুন করে কিছু বানাবে না। তবে শব্দ দুটি মিলে যা দেখায়, তা সোজাসুজি বলা যায়। পাখিকে দেখানো হয়েছে তার দুই অবস্থাতেই, ডানা খোলা আর ডানা গোটানো। কোনো অবস্থাতেই সে পড়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Keeps Them From Falling",
          "bn": "কে তাদের পড়তে দেয় না"
        },
        "p": [
          {
            "en": "Ma yumsikuhunna illa ar-Rahman: none holds them except the Most Merciful. The commentators agree on what is being held and from what. Al-Qurtubi says none holds the birds in the air while they fly except Allah. Al-Baghawi adds the detail that answers the previous clause: none holds them back from falling, in the state of drawing in and of spreading alike. The Muyassar puts it in its own words: nothing guards them from dropping at that moment except the Most Merciful. The holding covers both states of the wing, the folded as much as the open.",
            "bn": "মা ইউমসিকুহুন্না ইল্লার-রাহমান: দয়াময় ছাড়া কেউ তাদের ধরে রাখে না। কী ধরে রাখা হচ্ছে আর কিসের থেকে, এ নিয়ে তাফসীরকারেরা একমত। কুরতুবী বলেন, উড়ন্ত অবস্থায় শূন্যে পাখিদের আল্লাহ ছাড়া কেউ ধরে রাখে না। বাগাভী আরেকটু খুলে বলেন, আর তাতে আয়াতের আগের অংশের জবাবও মেলে: ডানা গোটানো থাকুক বা মেলা, পড়ে যাওয়া থেকে তিনি ছাড়া কেউ তাদের ঠেকিয়ে রাখে না। মুয়াসসার নিজের ভাষায় বলে: তখন তাদের পড়ে যাওয়া থেকে রক্ষা করেন কেবল দয়াময়। খোলা ডানা যেমন, গোটানো ডানাও তেমনি তাঁর ধরে রাখার ভেতরে।"
          },
          {
            "en": "On how He holds them, the sources speak of what He made subject to them. Ibn Kathir says it is by the air He subjected to them, out of His mercy and His gentleness. As-Sa'di widens the account: it is He who subjected the sky and the air to them, and made their bodies and their form ready for flight. Al-Qurtubi links the verse back to an earlier one. Just as He made the earth docile for the human being, he says, He made the air docile for the birds. The dhalul of 67:15 is here spread across the sky.",
            "bn": "কীভাবে ধরে রাখেন? তাফসীরগুলো এখানে বলে, তিনি কী কী তাদের বশ করে দিয়েছেন। ইবন কাসীর বলেন, নিজের রহমত ও কোমলতায় তিনি বাতাসকে তাদের বশ করে দিয়েছেন, সেই বাতাস দিয়েই ধরে রাখেন। সা'দী কথাটা আরও বিস্তৃত করেন। তিনিই আকাশ আর বাতাস তাদের বশ করে দিয়েছেন, আর তাদের শরীর ও গড়ন ওড়ার উপযোগী করে বানিয়েছেন। কুরতুবী আয়াতটিকে আগের একটি আয়াতের সঙ্গে জুড়ে দেন। তাঁর কথায়, মানুষের জন্য যেমন তিনি মাটিকে বশ করেছেন, পাখির জন্য তেমনি বাতাসকে বশ করেছেন। ৬৭:১৫ আয়াতের যালূল এখানে আকাশজুড়ে ছড়িয়ে পড়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an is the only consulted source that frames the point in terms of physical law. It says the verse invites attention to the fact that birds have weight, that by the law of gravity weighty bodies should fall to the earth, and that normally the air cannot hold them up. Allah, it says, created the birds so that they can hold themselves up, and taught them, though they apparently have no intellect, the art of making the air carry their burden by spreading and folding their wings. Shaping the wing, enabling the air and teaching the art, it concludes, were possible only by His creative power.",
            "bn": "যেসব তাফসীর এখানে দেখা হয়েছে, তার মধ্যে কেবল মাআরিফুল কুরআন বিষয়টাকে প্রাকৃতিক নিয়মের ভাষায় বলে। তার কথায়, আয়াতটি একটা বিষয় খেয়াল করতে বলে: পাখির ওজন আছে। মাধ্যাকর্ষণের নিয়মে ভারী জিনিসের মাটিতে পড়ে যাওয়ার কথা, আর সাধারণভাবে বাতাস তাকে ধরে রাখতে পারে না। কিন্তু আল্লাহ পাখিদের এমনভাবে বানিয়েছেন যে তারা শূন্যে নিজেদের ধরে রাখতে পারে। বাহ্যত বুদ্ধি না থাকলেও তিনি তাদের শিখিয়েছেন ডানা মেলে আর গুটিয়ে বাতাসকে দিয়ে নিজেদের ভার বহন করানোর কৌশল। মাআরিফের শেষ কথা: ডানার এই গড়ন, বাতাসকে সেই ভার বইতে সক্ষম করা আর কৌশলটা শেখানো, এসব কেবল তাঁর সৃষ্টিশক্তিতেই সম্ভব ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Under the Wing",
          "bn": "ডানার নিচে রহমত"
        },
        "p": [
          {
            "en": "The clause closes on a Name: ar-Rahman, the Most Merciful. The commentators consulted here do not stop to discuss why this Name is chosen here, and that silence should be reported rather than filled. What they do is tie the holding itself to mercy. Ibn Kathir's gloss, quoted above, says the air was subjected to the birds min rahmatihi wa lutfihi, from His mercy and His gentleness. The English abridgement repeats it: Allah holds them up in the air by subjecting the air to them, out of His mercy and His gentleness.",
            "bn": "বাক্যটি শেষ হয় একটি নামে: আর-রাহমান, পরম দয়াময়। এখানে ঠিক এই নামটাই কেন এল, দেখা তাফসীরগুলো তা নিয়ে থেমে কিছু বলে না। এই নীরবতা নিজের কথা দিয়ে ভরাট না করে জানিয়ে দেওয়াই ঠিক। তবে তাঁরা ধরে রাখাটাকেই রহমতের সঙ্গে জুড়ে দেন। ইবন কাসীরের যে ব্যাখ্যা আগে এসেছে, তাতে আছে, আল্লাহ বাতাসকে পাখিদের বশ করে দিয়েছেন মিন রাহমাতিহী ওয়া লুতফিহী, তাঁর রহমত ও কোমলতা থেকে। সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে: তাঁর রহমত ও কোমলতা থেকে বাতাসকে বশ করে দিয়ে আল্লাহ তাদের শূন্যে ধরে রাখেন।"
          },
          {
            "en": "The same abridgement had opened the whole passage, from 67:16, on that note: these verses are another indication of His gentleness and His mercy with His creatures, who could be punished and are given respite instead. Read beside that opening, the passage holds together. The One above, who could make the ground swallow and the sky rain stones, is the One whose mercy keeps the bird from dropping. Ar-Rahman stood over the creation of the heavens in 67:3. Here the same Name stands over something small, close and easily missed.",
            "bn": "এই সংক্ষিপ্ত সংস্করণ ৬৭:১৬ থেকে শুরু হওয়া পুরো অংশটাই খুলেছিল একই সুরে। আয়াতগুলো সৃষ্টির প্রতি তাঁর কোমলতা ও রহমতের আরেক নিদর্শন। তাদের শাস্তি দেওয়া যেত, তবু তিনি অবকাশ দেন। সেই শুরুর কথা পাশে রেখে পড়লে পুরো অংশটা এক সুতোয় গাঁথা মনে হয়। উপরে যিনি আছেন, যিনি চাইলে মাটিকে দিয়ে গ্রাস করাতে আর আকাশ থেকে পাথর বর্ষাতে পারেন, তাঁরই রহমত পাখিকে পড়তে দেয় না। ৬৭:৩ আয়াতে আর-রাহমান নামটি এসেছিল আসমানের সৃষ্টির প্রসঙ্গে। এখানে একই নাম এসেছে ছোট, কাছের, সহজে চোখ এড়িয়ে যাওয়া এক জিনিসের প্রসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Basir: Seeing What Suits Each",
          "bn": "বাসীর: কার কী মানায়, তিনি দেখেন"
        },
        "p": [
          {
            "en": "Innahu bi-kulli shay'in basir: indeed He is, of all things, Seeing. Ibn Kathir does not gloss basir as bare sight. He reads it as sight bound up with care: He sees bima yuslihu kulla shay'in min makhluqatihi, what sets each of His creatures right, which the English abridgement renders as with what is beneficial and suitable for all of His creatures. As-Sa'di is close to this. It is He who directs His servants in the way that befits them, he says, and that His wisdom requires.",
            "bn": "ইন্নাহু বিকুল্লি শাইয়িন বাসীর: নিশ্চয়ই তিনি সবকিছুর সম্যক দ্রষ্টা। ইবন কাসীর বাসীর শব্দকে কেবল দেখা অর্থে ব্যাখ্যা করেন না। তাঁর ব্যাখ্যায় এই দেখার সঙ্গে যত্ন জড়ানো: বিমা ইউসলিহু কুল্লা শাইয়িন মিন মাখলুকাতিহী, অর্থাৎ তাঁর প্রতিটি সৃষ্টির জন্য কী কল্যাণকর, তিনি তা দেখেন। সংক্ষিপ্ত ইংরেজি সংস্করণ এর অনুবাদ করেছে এভাবে: তাঁর সব সৃষ্টির জন্য যা উপকারী ও উপযুক্ত, তা তিনি দেখেন। সা'দীর কথাও কাছাকাছি। তাঁর মতে, তিনিই বান্দাদের পরিচালনা করেন সেভাবে, যেভাবে তাদের মানায় আর যেভাবে তাঁর হিকমত চায়।"
          },
          {
            "en": "The Muyassar takes the Name another way: He sees all things, it says, and no deficiency or disparity is to be seen in His creation. Its word for disparity, tafawut, is the word of 67:3. Ma'arif al-Qur'an's translation renders the clause as watchful of every thing. Between them, the readings make the closing clause more than a statement that nothing escapes His notice. The bird is seen, its need is seen, and what it is given fits it. Whoever is held in this way is also watched over.",
            "bn": "মুয়াসসার নামটিকে আরেক দিক থেকে দেখে। তার কথায়, তিনি সবকিছু দেখেন, আর তাঁর সৃষ্টিতে কোনো ঘাটতি বা অসামঞ্জস্য চোখে পড়ে না। অসামঞ্জস্যের জন্য মুয়াসসার যে শব্দ নেয়, তাফাউত, সেটা ৬৭:৩ আয়াতেরই শব্দ। মাআরিফুল কুরআনের অনুবাদে বাক্যটি দাঁড়ায়: তিনি প্রতিটি জিনিসের উপর সজাগ দৃষ্টি রাখেন। সব ব্যাখ্যা মিলিয়ে শেষ বাক্যটি শুধু এটুকু বলে না যে কিছুই তাঁর নজর এড়ায় না। তিনি পাখিকে দেখেন, তার প্রয়োজনও দেখেন, আর তাকে যা দেন তা তার জন্য মানানসই। যাকে তিনি এভাবে ধরে রাখেন, তার দেখাশোনাও তিনিই করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Near Twin in an-Nahl",
          "bn": "সূরা নাহলে প্রায় একই প্রশ্ন"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the Arabic and the English, sets beside this verse a near twin, 16:79: do they not see the birds controlled in the atmosphere of the sky? None holds them up except Allah; indeed in that are signs for a people who believe. The question, the birds and the clause ma yumsikuhunna illa are shared. The differences are there in the text: an-Nahl calls the birds musakhkharat, made subject, and names Allah, while al-Mulk speaks of wings spread and drawn in and names ar-Rahman. No source consulted here comments on the difference.",
            "bn": "আরবি ও ইংরেজি দুই তাফসীরেই ইবন কাসীর এ আয়াতের পাশে রাখেন প্রায় একই রকম আরেকটি আয়াত, ১৬:৭৯। তারা কি আকাশের শূন্যলোকে নিয়ন্ত্রিত পাখিগুলোকে দেখে না? আল্লাহ ছাড়া কেউ তাদের ধরে রাখে না। নিশ্চয়ই এতে মুমিনদের জন্য নিদর্শন আছে। প্রশ্নটা, পাখি আর মা ইউমসিকুহুন্না ইল্লা বাক্যাংশ, তিনটিই দুই আয়াতে আছে। পার্থক্যও আয়াতেই দেখা যায়। সূরা নাহল পাখিদের বলে মুসাখখারাত, অর্থাৎ বশ করে রাখা, আর নাম নেয় আল্লাহর। সূরা মুলক বলে ডানা মেলা আর গোটানোর কথা, আর নাম নেয় আর-রাহমানের। দেখা তাফসীরগুলোর কোনোটিই এই পার্থক্য নিয়ে কিছু বলেনি।"
          },
          {
            "en": "Musakhkharat is the idea as-Sa'di and Ibn Kathir reach for on this verse too: taskhir, making subject. An-Nahl also says who gains from the sight, a people who believe, and as-Sa'di says much the same here. Whoever looks at the state of the birds and takes heed, he writes, is led by it to the Creator's power and His care, and to His Oneness, He to whom alone worship is due. Ma'arif adds that a fair-minded person who weighed such signs would have no choice but to believe. None of the tafsirs consulted attaches a hadith to this verse.",
            "bn": "মুসাখখারাতের ভাবটা এই আয়াতের ব্যাখ্যাতেও সা'দী আর ইবন কাসীর টেনে আনেন: তাসখীর, বশ করে দেওয়া। দৃশ্যটা থেকে কে উপকার পায়, সূরা নাহল তাও বলে দেয়: মুমিনেরা। সা'দীও এখানে প্রায় সেই কথাই বলেন। যে পাখিদের অবস্থা দেখে শিক্ষা নেয়, এই দেখা তাকে পথ দেখায় স্রষ্টার কুদরত আর তাঁর যত্নের দিকে। আরও দেখায় যে তিনিই একক, ইবাদত কেবল তাঁরই প্রাপ্য। মাআরিফ যোগ করে, ন্যায়নিষ্ঠ কেউ এসব নিদর্শন ভালো করে ভেবে দেখলে ঈমান আনা ছাড়া তার আর উপায় থাকে না। এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Learning to Look Up",
          "bn": "উপরে তাকাতে শেখা"
        },
        "p": [
          {
            "en": "The verse is a question that can be answered on any ordinary day. Go outside and find a bird in the air. Watch it spread its wings and hold them still, then draw them in, as the commentators describe, and notice that in neither state does it fall. The verse does not ask for wonder at a rare sight. It asks for attention to a common one, the kind the deniers in this passage had over their heads every day and never read.",
            "bn": "আয়াতটি এমন এক প্রশ্ন, যার জবাব যেকোনো সাধারণ দিনেই দেওয়া যায়। বাইরে গিয়ে আকাশে একটা পাখি খুঁজে নিন। দেখুন, সে ডানা মেলে স্থির রাখে, তারপর গুটিয়ে নেয়, ঠিক যেমনটা তাফসীরকারেরা বলেছেন। আর খেয়াল করুন, কোনো অবস্থাতেই সে পড়ে যায় না। আয়াতটি বিরল কোনো দৃশ্য দেখে অবাক হতে বলে না। বলে রোজকার এক দৃশ্যে মন দিতে। এ অংশের অস্বীকারকারীদের মাথার উপর প্রতিদিন এমন দৃশ্যই থাকত, অথচ তারা কখনো তা পড়ে দেখেনি।"
          },
          {
            "en": "Then carry the question inward. The passage began with security: do you feel safe from the One above? Its answer is not a new fear but a picture of being held. Every moment the bird stays up, it is being kept up, and every moment the ground stays still beneath you, the same is true of you. That holding is mercy, and it is watched over by One who sees what each thing needs. Feeling secure is not the fault. Forgetting who holds you is.",
            "bn": "তারপর প্রশ্নটা নিজের ভেতরে নিয়ে আসুন। এ অংশ শুরু হয়েছিল নিরাপত্তার প্রশ্ন দিয়ে: যিনি উপরে আছেন, তাঁর ব্যাপারে কি তোমরা নিশ্চিন্ত? জবাবে নতুন কোনো ভয় আসে না, আসে ধরে রাখার একটা ছবি। পাখি যতক্ষণ শূন্যে থাকে, প্রতিটি মুহূর্তে কেউ তাকে ধরে রেখেছেন। পায়ের নিচের মাটি যতক্ষণ স্থির থাকে, আপনার বেলাতেও কথা একই। এই ধরে রাখাই রহমত। আর তার দেখাশোনা করেন এমন একজন, যিনি দেখেন কার কী প্রয়োজন। নিরাপদ বোধ করা দোষের নয়। দোষ হলো, কে ধরে রেখেছেন তা ভুলে যাওয়া।"
          }
        ]
      }
    ]
  },
  "67:26": {
    "sections": [
      {
        "h": {
          "en": "A Date Demanded as Proof",
          "bn": "প্রমাণ হিসেবে তারিখের দাবি"
        },
        "p": [
          {
            "en": "Verse 67:26 is a reply, and it cannot be read without the question it answers. In 67:25 they say: when is this promise, if you are truthful? Ibn Kathir places the speakers directly after the verse on the gathering. They are the disbelievers who reject the final return and doubt that it will really happen, and their question means: when will this gathering after separation, which you tell us about, take place? The surah has just said, in 67:24, that He spread them across the earth and that to Him they will be gathered.",
            "bn": "৬৭:২৬ আয়াতটি একটি জবাব। যে প্রশ্নের জবাব, সেটা না জেনে একে পড়া যায় না। ৬৭:২৫ আয়াতে তারা বলে: তোমরা সত্যবাদী হলে বল, এ ওয়াদা কবে? ইবন কাসীর প্রশ্নকারীদের চিনিয়ে দেন ঠিক সমবেত হওয়ার আয়াতের পরেই। এরা সেই কাফির, যারা শেষ প্রত্যাবর্তন অস্বীকার করে, আর তা আদৌ ঘটবে কি না তাতে সন্দেহ করে। তাদের প্রশ্নের মানে: ছড়িয়ে পড়ার পর আবার একত্র হওয়ার যে খবর তুমি দিচ্ছ, তা কবে ঘটবে? এর ঠিক আগে ৬৭:২৪ আয়াতে সূরা বলেছে, তিনিই তাদের যমীনে ছড়িয়ে দিয়েছেন, আর তাঁর কাছেই তাদের সমবেত করা হবে।"
          },
          {
            "en": "The commentators name the promise from slightly different angles. The Muyassar makes it the promise of the gathering, the Hashr, and hears the plural you of in kuntum as aimed at the believers: tell us its time, O believers, if you are truthful in what you claim. At-Tabari describes the askers as people urging the Prophet ﷺ to hasten the punishment and the coming of the Hour. As-Sa'di calls it the promise of recompense, al-jaza', which these stubborn opponents deny. Each reading points to the same Day from a different side.",
            "bn": "ওয়াদাটা কী, তাফসীরকারেরা তা বলেন একটু ভিন্ন ভিন্ন দিক থেকে। মুয়াসসারের মতে এটি হাশরের ওয়াদা। আর ইন কুনতুম, অর্থাৎ ‘তোমরা যদি’, এই বহুবচন সম্বোধন তার মতে মুমিনদের দিকে: হে মুমিনগণ, তোমাদের দাবিতে সত্যবাদী হলে এর সময়টা আমাদের জানাও। তাবারীর বর্ণনায় প্রশ্নকারীরা নবী ﷺ-কে তাগাদা দিচ্ছিল, শাস্তি আর কিয়ামত তাড়াতাড়ি এনে দেখাতে। সা'দী একে বলেন প্রতিদানের ওয়াদা, আল-জাযা, যা এই একগুঁয়ে বিরোধীরা অস্বীকার করে। প্রতিটি ব্যাখ্যা একই দিনটিকেই দেখায়, শুধু ভিন্ন ভিন্ন পাশ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Clauses, Both Narrowed",
          "bn": "দুই বাক্যে দুই সীমারেখা"
        },
        "p": [
          {
            "en": "The answer is nine Arabic words, opened by qul, say. The Prophet ﷺ is not left to compose a reply under pressure; the words are handed to him. Each of its two clauses opens with innama, the particle that narrows a statement to what follows it: the knowledge is with Allah, and with nobody else; I am a clear warner, and nothing beyond that. At-Tabari's paraphrase of the second clause shows the narrowing at work, since he renders it wa ma ana illa nadhir: I am nothing but a warner to you.",
            "bn": "জবাবটি আরবিতে নয়টি শব্দ, শুরু কুল দিয়ে, অর্থাৎ ‘বল’। চাপের মুখে নবী ﷺ-কে নিজে জবাব বানাতে হয়নি, কথাগুলো তাঁর হাতে তুলে দেওয়া হয়েছে। দুটি বাক্যের প্রতিটি শুরু হয়েছে ইন্নামা দিয়ে। এই অব্যয় কথাকে তার পরের অংশে সীমাবদ্ধ করে দেয়। জ্ঞান আল্লাহর কাছে, আর কারও কাছে নয়। আমি স্পষ্ট সতর্ককারী, এর বেশি কিছু নই। দ্বিতীয় বাক্যের ব্যাখ্যায় তাবারী লেখেন ওয়া মা আনা ইল্লা নাযীর: আমি তোমাদের জন্য সতর্ককারী ছাড়া আর কিছু নই। সীমাবদ্ধ করার অর্থটা তাঁর ব্যাখ্যাতেই স্পষ্ট হয়ে ওঠে।"
          },
          {
            "en": "The two clauses face each other. The first states what the Prophet ﷺ does not hold, and the second states what he does. One is a limit, the other a task, and the verse sets them side by side without apology. The question of 67:25 assumed that a messenger who could not name the day had no claim on anyone. The reply refuses that assumption. His claim never rested on naming the day; it rested on delivering the warning he had been given, and delivering it clearly.",
            "bn": "বাক্য দুটি যেন মুখোমুখি দাঁড়ানো। প্রথমটি বলে নবী ﷺ-এর কাছে কী নেই, দ্বিতীয়টি বলে কী আছে। একটি সীমা, অন্যটি দায়িত্ব। আয়াত দুটোকে পাশাপাশি রাখে, কোনো কৈফিয়ত ছাড়াই। ৬৭:২৫ আয়াতের প্রশ্নের পেছনে ধারণা ছিল, যে রাসূল দিনটির তারিখ বলতে পারেন না, তাঁর কথা মানার দায় কারও নেই। জবাব এই ধারণাটাই নাকচ করে দেয়। তাঁর দাবি কখনো তারিখ বলে দেওয়ার উপর দাঁড়িয়ে ছিল না। দাঁড়িয়ে ছিল তাঁকে দেওয়া সতর্কবাণী পৌঁছে দেওয়ার উপর, আর তা পরিষ্কার করে পৌঁছে দেওয়ার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-'Ilm: The Knowledge of When",
          "bn": "আল-ইলম: কবে, সেই জ্ঞান"
        },
        "p": [
          {
            "en": "The verse says al-'ilm, the knowledge, with the definite article and without naming its object. The commentators consulted here agree on what it refers to. At-Tabari: the knowledge of the Hour, and of when the Resurrection will take place, is with Allah, and none other than Him knows it. Al-Qurtubi: say to them, O Muhammad, the knowledge of the time of the Hour's coming is with Allah, and nobody else knows it. The Muyassar: knowledge of the time of the Hour is something Allah has reserved for Himself alone.",
            "bn": "আয়াতে আছে আল-ইলম, অর্থাৎ ‘সেই জ্ঞান’। নির্দিষ্টবাচক আল আছে, কিন্তু কিসের জ্ঞান তা বলা নেই। এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো এর অর্থে একমত। তাবারী বলেন, কিয়ামতের জ্ঞান, আর পুনরুত্থান কবে ঘটবে সে জ্ঞান আল্লাহর কাছে, তিনি ছাড়া কেউ তা জানে না। কুরতুবী বলেন, হে মুহাম্মাদ, তাদের বলে দাও, কিয়ামত সংঘটিত হওয়ার সময়ের জ্ঞান আল্লাহর কাছে, আর কেউ তা জানে না। মুয়াসসার বলে, কিয়ামতের সময়ের জ্ঞান আল্লাহ কেবল নিজের জন্যই রেখে দিয়েছেন।"
          },
          {
            "en": "Ibn Kathir's wording adds a qualifier worth noticing. No one knows the time of it 'ala at-ta'yin, specifically and exactly, except Allah. The English abridgement renders this as: no one knows the time of the Day of Judgement exactly except Allah. What is withheld is the fixed moment. What is not withheld, as the next clause of his comment shows, is the fact of the Day itself, and that fact is exactly what the Prophet ﷺ was commanded to announce to the people asking.",
            "bn": "ইবন কাসীরের কথায় একটা ছোট শর্ত আছে, খেয়াল করার মতো। তিনি বলেন, আলাত তা'য়ীন, অর্থাৎ সুনির্দিষ্টভাবে এর সময় আল্লাহ ছাড়া কেউ জানে না। ইংরেজি সংক্ষেপেও একই কথা: বিচার দিবসের সময় ঠিক ঠিক আল্লাহ ছাড়া কেউ জানে না। গোপন রাখা হয়েছে নির্দিষ্ট মুহূর্তটি। কিন্তু দিনটি যে আসবে, সেই সত্য গোপন নয়। তাঁর মন্তব্যের পরের অংশেই তা দেখা যায়। আর এই সত্যটিই প্রশ্নকারীদের কাছে ঘোষণা করার আদেশ নবী ﷺ পেয়েছিলেন।"
          },
          {
            "en": "At-Tabari's framing is worth keeping in view as well. The askers in his reading were hastening two things, al-'adhab and qiyam as-sa'ah, the punishment and the rising of the Hour, and the answer covers both. Their haste, as the commentators describe it, came from denial and not from longing; as-Sa'di says they put the question takdhiban, to give the lie to the promise. The verse does not argue with the haste. It moves the question from the Messenger to Allah, who holds the answer.",
            "bn": "তাবারী প্রশ্নটাকে যেভাবে দেখেন, সেটাও মনে রাখার মতো। তাঁর পাঠে প্রশ্নকারীরা দুটি জিনিস তাড়াতাড়ি চাইছিল: আল-আযাব আর কিয়ামুস সা'আহ, অর্থাৎ শাস্তি আর কিয়ামতের আগমন। জবাবে দুটোরই উত্তর আছে। তাফসীরকারদের বর্ণনায় এই তাড়ার উৎস ছিল অস্বীকার, আকাঙ্ক্ষা নয়। সা'দী বলেন, তারা প্রশ্নটা করেছিল তাকযীবান, অর্থাৎ ওয়াদাটাকে মিথ্যা প্রতিপন্ন করতে। আয়াত এই তাড়াহুড়ার সঙ্গে তর্কে যায় না। প্রশ্নটাকে রাসূলের কাছ থেকে সরিয়ে আল্লাহর দিকে ফিরিয়ে দেয়, যাঁর কাছে এর উত্তর আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Counterpart in al-A'raf",
          "bn": "আল-আ'রাফে এর জোড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi links the verse to one other place, with the single word naziruhu, its counterpart: qul innama 'ilmuha 'inda rabbi, say, its knowledge is only with my Lord. Those words are in 7:187, where people ask the Prophet ﷺ about the Hour: when is its arrival? There the knowledge is named outright, 'ilmuha, its knowledge, the pronoun pointing back to the Hour. Here it is simply al-'ilm, the knowledge, and the question of 67:25 supplies what it means.",
            "bn": "কুরতুবী আয়াতটিকে আরেকটি জায়গার সঙ্গে জুড়ে দেন একটিমাত্র শব্দে: নাযীরুহু, এর জোড়া। সেখানে আছে কুল ইন্নামা ইলমুহা ইনদা রব্বী, বল, এর জ্ঞান তো কেবল আমার রবের কাছে। কথাগুলো ৭:১৮৭ আয়াতের, যেখানে লোকেরা নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করে, তা কখন ঘটবে। সেখানে জ্ঞানের বিষয় সরাসরি বলা আছে: ইলমুহা, এর জ্ঞান, সর্বনামটি কিয়ামতের দিকে ফেরে। এখানে শুধু আল-ইলম, সেই জ্ঞান। কিসের জ্ঞান, তা বুঝিয়ে দেয় ৬৭:২৫ আয়াতের প্রশ্ন।"
          },
          {
            "en": "Read beside its counterpart, 7:187 says more on the same theme: none will reveal its time except Him; it will not come upon you except unexpectedly; they ask you as if you are familiar with it. The verse of al-Mulk keeps only the core. No hadith is attached to 67:26 in any of the commentaries consulted for it, so this article quotes none. The weight of the passage rests on the two Qur'anic replies, given in two surahs to the same question, standing side by side.",
            "bn": "জোড়া আয়াতটি পাশে রেখে পড়লে দেখা যায়, ৭:১৮৭ একই বিষয়ে আরও কিছু বলে। তিনি ছাড়া কেউ এর সময় প্রকাশ করবে না। তা তোমাদের উপর আসবে আকস্মিকভাবে। তারা তোমাকে এমনভাবে জিজ্ঞেস করে যেন তুমি এ বিষয়ে ভালো জানো। সূরা মুলকের আয়াত রাখে শুধু মূল কথাটুকু। এ আয়াতের জন্য দেখা কোনো তাফসীরেই ৬৭:২৬-এর সঙ্গে কোনো হাদিস যুক্ত নেই, তাই এ লেখাতেও কোনো হাদিস আনা হয়নি। এ অংশের ভার দুটি কুরআনী জবাবের উপর: একই প্রশ্নের জবাব, দুই সূরায়, পাশাপাশি দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth Without a Timetable",
          "bn": "সময়সূচি ছাড়াই সত্য"
        },
        "p": [
          {
            "en": "As-Sa'di names what was wrong with the question itself. The deniers made their test of truthfulness that they be told the time of its coming, and he calls this zulm and 'inad, wrongdoing and stubborn resistance. Then he gives the reason in one line: there is no necessary link between the truth of this report and the reporting of its time. A report can be wholly true while its date stays unknown even to the one who conveys it.",
            "bn": "প্রশ্নটার গলদ কোথায়, সা'দী তা ধরিয়ে দেন। অস্বীকারকারীরা সত্যবাদিতার মাপকাঠি বানিয়েছিল এই শর্ত: আগমনের সময়টা তাদের জানাতে হবে। সা'দী একে বলেন যুলম ও ইনাদ, অন্যায় আর একগুঁয়েমি। তারপর একটিমাত্র বাক্যে কারণটা দেন: এই খবর সত্য হওয়া আর তার সময় জানিয়ে দেওয়ার মধ্যে কোনো আবশ্যিক সম্পর্ক নেই। কোনো খবর পুরোপুরি সত্য হতে পারে, অথচ তার তারিখ অজানা থাকতে পারে, এমনকি যিনি খবরটি পৌঁছে দেন তাঁর কাছেও।"
          },
          {
            "en": "Truth, as-Sa'di continues, is known by its proofs, and Allah has set up proofs and evidences for this report that leave not the least doubt for whoever lends an ear and is present in mind, words that match the wording of 50:37 (the verse number is this article's own pointer, not as-Sa'di's). The surah has just laid out such proofs. In 67:23 He produced them and gave them hearing, sight and hearts; in 67:24 He spread them across the earth, and to Him they will be gathered. The question of 67:25 stepped past all of it to ask for a date.",
            "bn": "সা'দী আরও বলেন, সত্য চেনা যায় তার প্রমাণ দিয়ে। আর এ খবরের পক্ষে আল্লাহ এমন সব দলিল-প্রমাণ দাঁড় করিয়েছেন যে, যে মন দিয়ে কান পেতে শোনে, তার মনে সামান্য সন্দেহও থাকে না। তাঁর এ কথার শব্দ ৫০:৩৭ আয়াতের শব্দের সঙ্গে মেলে (আয়াত নম্বরটি এই লেখার নিজের ইঙ্গিত, সা'দীর নয়)। সূরাটি ঠিক এমন প্রমাণই এইমাত্র সাজিয়েছে। ৬৭:২৩ আয়াতে তিনি তাদের সৃষ্টি করেছেন, দিয়েছেন শোনার ও দেখার শক্তি আর অন্তর। ৬৭:২৪ আয়াতে তিনি তাদের যমীনে ছড়িয়ে দিয়েছেন, আর তাঁর কাছেই তারা সমবেত হবে। ৬৭:২৫ আয়াতের প্রশ্ন এর সবকিছু পাশ কাটিয়ে শুধু তারিখ চেয়েছে।"
          },
          {
            "en": "The principle reaches past this one exchange. People still treat a missing date as a weakness in any claim about the unseen, as though what cannot be scheduled cannot be real. As-Sa'di's line answers that too. The certainty of a thing and the knowledge of its timing are two different kinds of knowledge, and a person may hold the first firmly while the second remains with Allah. Every believer already lives this way with his own death, sure of it and unaware of its day.",
            "bn": "এই নীতি শুধু এই একটি কথোপকথনে আটকে নেই। অদৃশ্যের কোনো খবরে তারিখ না থাকলে মানুষ আজও সেটাকে দুর্বলতা ভাবে, যেন যার সময়সূচি বানানো যায় না তা বাস্তব হতে পারে না। সা'দীর কথাটি এরও জবাব। এখানে দুই ভিন্ন রকমের জ্ঞান: কোনো কিছু ঘটবে, এ নিশ্চয়তা এক জিনিস, আর কবে ঘটবে সে জ্ঞান আরেক জিনিস। প্রথমটি কেউ দৃঢ়ভাবে ধরে রাখতে পারে, আর দ্বিতীয়টি থাকে আল্লাহর কাছে। প্রত্যেক মুমিন নিজের মৃত্যুর বেলায় তো এভাবেই বাঁচে: মৃত্যু নিশ্চিত, দিনটি অজানা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warner Whose Warning Is Plain",
          "bn": "যাঁর সতর্কবাণী সুস্পষ্ট"
        },
        "p": [
          {
            "en": "Wa innama ana nadhirun mubin. At-Tabari explains the warner as one who warns them of Allah's punishment for their disbelief in Him, and mubin as one who has made his warning plain to them. The Muyassar gives the two words their two jobs: I am a warner to you, making you fear the outcome of your disbelief, and I make clear to you what Allah commanded me to make clear, with the utmost clarity. In both readings the warning is already complete before anyone asks when.",
            "bn": "ওয়া ইন্নামা আনা নাযীরুম মুবীন। তাবারীর ব্যাখ্যায় নাযীর হলেন সেই জন, যিনি তাদের সতর্ক করেন: আল্লাহকে অস্বীকার করলে তাঁর শাস্তি আসবে। আর মুবীন মানে, তিনি নিজের সতর্কবাণী তাদের কাছে স্পষ্ট করে দিয়েছেন। মুয়াসসার দুই শব্দকে দুই দায়িত্ব দেয়। আমি তোমাদের সতর্ককারী, তোমাদের কুফরির পরিণাম সম্পর্কে তোমাদের ভয় দেখাই। আর আল্লাহ যা স্পষ্ট করতে বলেছেন, তা আমি তোমাদের কাছে সবচেয়ে পরিষ্কারভাবে খুলে বলি। দুই ব্যাখ্যাতেই কেউ ‘কবে’ জিজ্ঞেস করার আগেই সতর্কবাণী পূর্ণ হয়ে আছে।"
          },
          {
            "en": "Al-Qurtubi compresses the phrase into two words: mukhawwif wa mu'allim, one who makes you fear and who teaches you. The pairing is worth dwelling on. A warning with no teaching only frightens, and teaching with no warning can leave a listener at ease when he should not be. In al-Qurtubi's gloss the Prophet ﷺ is both at once. He ranks neither above the other, and the verse lets the warner's role stand complete in itself, without a date attached to it.",
            "bn": "কুরতুবী পুরো কথাটা দুই শব্দে গুটিয়ে আনেন: মুখাওয়িফ ওয়া মু'আল্লিম, অর্থাৎ যিনি ভয় দেখান এবং শেখানও। জোড়াটা নিয়ে একটু ভাবা যায়। শিক্ষা ছাড়া সতর্কবাণী কেবল ভয় ধরায়। আবার সতর্কতা ছাড়া শিক্ষা শ্রোতাকে এমন সময় নিশ্চিন্ত রেখে দিতে পারে, যখন নিশ্চিন্ত থাকার কথা নয়। কুরতুবীর ব্যাখ্যায় নবী ﷺ একসঙ্গে দুটোই। কোনোটিকে তিনি অন্যটির উপরে রাখেন না। আর আয়াতও সতর্ককারীর দায়িত্বকে নিজের জায়গায় পূর্ণ রেখে দেয়, তার সঙ্গে কোনো তারিখ জুড়ে দেয় না।"
          },
          {
            "en": "Ibn Kathir reads the clause as a statement of duty: upon me is only the conveying, and I have conveyed it to you. The English abridgement has: I am only obligated to convey, and verily I have performed my duty towards you. The past tense matters. The answer to when is it coming ends with something that has already happened, which is that the message has been delivered. Whatever the timing of the Day, the listeners' position is settled in one respect, since the warning has reached them.",
            "bn": "ইবন কাসীর বাক্যটিকে পড়েন দায়িত্বের ঘোষণা হিসেবে: আমার উপর কেবল পৌঁছে দেওয়ার দায়, আর তা আমি তোমাদের কাছে পৌঁছে দিয়েছি। ইংরেজি সংক্ষেপেও একই কথা: আমার দায়িত্ব শুধু পৌঁছে দেওয়া, আর তোমাদের প্রতি সে দায়িত্ব আমি অবশ্যই পালন করেছি। অতীত কালটা লক্ষ করার মতো। ‘কবে আসবে’ প্রশ্নের জবাব শেষ হয় এমন এক কথায়, যা ইতিমধ্যে ঘটে গেছে: বার্তা পৌঁছে গেছে। দিনটির সময় যখনই হোক, শ্রোতাদের অবস্থা এক দিক থেকে স্থির হয়ে গেছে, কারণ সতর্কবাণী তাদের কাছে পৌঁছেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Unknown When, Certain That",
          "bn": "কবে অজানা, আসবে নিশ্চিত"
        },
        "p": [
          {
            "en": "Between the two clauses, Ibn Kathir places a sentence that holds the verse together. He gives it in the Prophet's ﷺ own voice: no one knows its time exactly except Allah, but He commanded me to tell you that it is coming and will happen without doubt, so beware of it. Fa-hdharuhu, so beware of it, is where the comment lands. The not-knowing is not offered as a reason to relax. It is placed beside a certainty and a command, and the command is to stay on guard.",
            "bn": "দুই বাক্যের মাঝখানে ইবন কাসীর এমন একটি কথা বসান, যা পুরো আয়াতকে এক সুতোয় বাঁধে। কথাটা তিনি বলেন নবী ﷺ-এর নিজের মুখে: এর সুনির্দিষ্ট সময় আল্লাহ ছাড়া কেউ জানে না, তবে তিনি আমাকে আদেশ করেছেন তোমাদের জানাতে যে এটা ঘটবেই, কোনো সন্দেহ নেই, অতএব এ থেকে সাবধান হও। ফাহযারূহু, অতএব সাবধান হও, এখানে এসেই মন্তব্যটা থামে। না জানাটাকে তিনি নিশ্চিন্ত থাকার অজুহাত বানান না। তার পাশে রাখেন একটি নিশ্চয়তা আর একটি আদেশ, আর আদেশটা হলো সতর্ক থাকা।"
          },
          {
            "en": "The askers of 67:25 are described as a group, and the commentators call them disbelievers who denied the return. The verse speaks only of what it names: a question put in denial and the answer given to it. It licenses nothing against any living person or community, and it hands no reader a label to fasten on a neighbour who asks a sincere question about the Hour. The surah's next step, in 67:27, turns to the moment they see the promise drawing near, and this article leaves that verse to its own place.",
            "bn": "৬৭:২৫ আয়াতের প্রশ্নকারীদের বর্ণনা এসেছে একটি দল হিসেবে, আর তাফসীরকারেরা তাদের বলেন প্রত্যাবর্তন অস্বীকারকারী কাফির। আয়াত কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে: অস্বীকারের সুরে করা একটি প্রশ্ন, আর তার দেওয়া জবাব। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কিয়ামত নিয়ে আন্তরিকভাবে প্রশ্ন করে এমন প্রতিবেশীর গায়ে লাগানোর মতো কোনো তকমাও কোনো পাঠকের হাতে তুলে দেয় না। সূরার পরের ধাপ ৬৭:২৭ আয়াতে, যেখানে তারা ওয়াদাকে কাছে আসতে দেখে। সে আয়াতের কথা আসবে তার নিজের জায়গায়, এ লেখায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living by the Undated Day",
          "bn": "তারিখহীন দিনের প্রস্তুতি"
        },
        "p": [
          {
            "en": "The verse closes one door firmly. Whoever claims to know the time of the Hour claims what at-Tabari, al-Qurtubi and the Muyassar each say belongs to Allah alone. A believer who meets a confident prediction, however learned its source may seem, already holds the reply that the Prophet ﷺ himself was given to speak. If the Messenger was commanded to say that the knowledge is with Allah, then no one who comes after him holds it, whatever charts or signs he brings.",
            "bn": "আয়াতটি একটা দরজা শক্ত করে বন্ধ করে দেয়। কিয়ামতের সময় জানার দাবি যে করে, সে এমন জ্ঞানের দাবি করে যা তাবারী, কুরতুবী ও মুয়াসসার প্রত্যেকের মতে কেবল আল্লাহর। কোনো মুমিনের সামনে কেউ আত্মবিশ্বাসের সঙ্গে ভবিষ্যদ্বাণী করলে, তার উৎস যত বিদ্বানই মনে হোক, জবাবটা মুমিনের হাতে আগে থেকেই আছে: নবী ﷺ-কে নিজে যে জবাব বলতে দেওয়া হয়েছিল, সেটাই। রাসূলকেই যদি বলতে আদেশ করা হয় যে জ্ঞান আল্লাহর কাছে, তবে তাঁর পরে আসা কেউ সে জ্ঞানের মালিক নয়, সে যত হিসাব-নিকাশ বা আলামতই হাজির করুক।"
          },
          {
            "en": "It also opens another door. If the date is withheld, the question becomes what to do while it stays withheld, and Ibn Kathir's so beware of it is the answer. The second clause then gives a model to anyone who speaks of the faith: say what you were given, say it plainly, and claim no more. The Prophet's ﷺ honesty about the limit of his knowledge did not weaken his message. In this verse, that honesty is part of the message he was sent to deliver.",
            "bn": "আবার আয়াতটি আরেকটা দরজা খুলেও দেয়। তারিখ যদি গোপনই থাকে, তাহলে প্রশ্ন দাঁড়ায়: যতদিন গোপন থাকে, ততদিন কী করব? ইবন কাসীরের ‘অতএব সাবধান হও’ কথাটাই এর জবাব। দ্বীনের কথা যিনি বলেন, দ্বিতীয় বাক্যটি তাঁর জন্য একটা আদর্শও রেখে যায়: যা পেয়েছেন তা বলুন, পরিষ্কার করে বলুন, আর এর বেশি দাবি করবেন না। নিজের জ্ঞানের সীমা নিয়ে নবী ﷺ-এর সততা তাঁর বার্তাকে দুর্বল করেনি। এ আয়াতে সেই সততা তাঁর পৌঁছে দেওয়া বার্তারই অংশ।"
          }
        ]
      }
    ]
  }
});
