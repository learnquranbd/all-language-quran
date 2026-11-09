/**
 * Tadabbur long-form articles — surah 86.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "86:4": {
    "sections": [
      {
        "h": {
          "en": "Answer to a Night Oath",
          "bn": "রাতের শপথের জবাব"
        },
        "p": [
          {
            "en": "In kullu nafsin lamma 'alayha hafiz: there is no soul but that it has over it a guardian. The verse is six Arabic words, and it arrives after three verses of oath. Allah swears by the sky and by at-tariq, asks what at-tariq is, and answers: an-najm ath-thaqib, the piercing star. Only then comes the sentence the oath was sworn for. Al-Baghawi and as-Sa'di both name this verse as the thing sworn to, and Ma'arif al-Qur'an calls it the subject of the oath.",
            "bn": "ইন কুল্লু নাফসিল লাম্মা আলাইহা হাফিয: এমন কোনো প্রাণ নেই, যার উপর একজন হেফাজতকারী নেই। আয়াতটি মাত্র ছয়টি আরবি শব্দ, আর এটি আসে তিনটি আয়াত জুড়ে শপথের পরে। আল্লাহ শপথ করেন আসমানের, আর আত-তারিকের। তারপর প্রশ্ন করেন, আত-তারিক কী? নিজেই জবাব দেন: আন-নাজমুস সাকিব, ভেদকারী নক্ষত্র। এরপরই আসে সেই বাক্য, যার জন্য শপথ। বাগাভী আর সা'দী দুজনেই এ আয়াতকে শপথের জবাব বলেছেন। মাআরিফুল কুরআনও একে শপথের বিষয়বস্তু বলে চিহ্নিত করে।"
          },
          {
            "en": "Al-Qurtubi opens the verse with Qatada's gloss and then says plainly that this is the answer of the oath. He records a second view with the words it was said: that the answer comes later, in 86:8, innahu 'ala raj'ihi la-qadir, He is able to bring him back, a view he attributes to at-Tirmidhi, Muhammad ibn 'Ali. Either way, the guardian over every soul sits inside the surah's argument, which moves from the night sky to the soul, and from there to man's beginning and his return.",
            "bn": "কুরতুবী আয়াতের আলোচনা শুরু করেন কাতাদার ব্যাখ্যা দিয়ে। তারপর স্পষ্ট বলেন, এটিই শপথের জবাব। এরপর 'বলা হয়েছে' বলে আরেকটি মত উল্লেখ করেন: জবাব আসলে পরে, ৮৬:৮ আয়াতে, ইন্নাহু আলা রাজইহি লাকাদির, তিনি তাকে ফিরিয়ে আনতে সক্ষম। এই মতটি তিনি তিরমিযী, অর্থাৎ মুহাম্মাদ ইবন আলীর বলে উল্লেখ করেন। যে মতই ধরা হোক, প্রতিটি প্রাণের উপর হেফাজতকারীর কথা সূরার মূল যুক্তির ভেতরেই আছে। সে যুক্তি রাতের আকাশ থেকে নেমে আসে প্রাণের কাছে, তারপর মানুষের শুরু আর তার ফিরে যাওয়ার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Who Knocks at Night",
          "bn": "রাতে যে কড়া নাড়ে"
        },
        "p": [
          {
            "en": "At-Tabari explains the oath: our Lord swore by the sky and by at-tariq, that which comes by night from among the shining stars and is hidden by day, and whatever comes by night has done tarq. He cites Qatada: a visitor that comes by night and hides by day. Ad-Dahhak says simply, the star. Al-Qurtubi adds, from al-Mawardi, that the root t-r-q means to knock, which is why a hammer is a mitraqa: the night visitor was named for the knock he must make to be let in.",
            "bn": "তাবারী শপথটি খুলে বলেন: আমাদের রব শপথ করেছেন আসমানের, আর আত-তারিকের। তারিক হলো উজ্জ্বল নক্ষত্রের মধ্যে যা রাতে আসে আর দিনে লুকিয়ে থাকে। রাতে যে-ই আসে, আরবিতে সে 'তারাকা' করেছে। তিনি কাতাদার কথা আনেন: রাতে আসা এক আগন্তুক, যে দিনে লুকিয়ে যায়। দাহহাক সংক্ষেপে বলেন, তারিক মানে নক্ষত্র। কুরতুবী মাওয়ারদী থেকে যোগ করেন, ত-র-ক ধাতুর মূল অর্থ ঠোকা। এ জন্যই হাতুড়িকে বলে মিতরাকা। রাতের আগন্তুককে ঘরে ঢুকতে কড়া নাড়তে হয়, তাই তার নাম তারিক।"
          },
          {
            "en": "Then ath-thaqib. At-Tabari gives Ibn 'Abbas by two chains: the shining one, and the shining stars, whose thuqub is their giving light. 'Ikrima says: that which pierces. Mujahid says: that which blazes. Qatada says its piercing is its light. Al-Qurtubi defines ath-thaqib as al-mudi', the luminous, and points to shihab thaqib, a piercing flame, and to the Arab saying athqib naraka, make your fire blaze. The Muyassar gathers the three verses into one line: the star that comes at night, the bright, glowing star.",
            "bn": "এরপর আস-সাকিব। তাবারী দুটি সনদে ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: যা আলো দেয়। আরেক বর্ণনায়: উজ্জ্বল নক্ষত্ররাজি, আলো দেওয়াই তাদের ভেদ করা। ইকরিমা বলেন, যা ভেদ করে। মুজাহিদ বলেন, যা জ্বলজ্বল করে। কাতাদার মতে, তার ভেদ করা মানে তার আলো। কুরতুবী আস-সাকিবের অর্থ করেন আল-মুদী, আলো ছড়ানো। উদাহরণ দেন 'শিহাবুন সাকিব' থেকে, ভেদকারী অগ্নিশিখা। আরবরা বলে 'আসকিব নারাকা', তোমার আগুন জ্বালিয়ে তোলো। মুয়াসসার তিনটি আয়াতকে একটি বাক্যে বাঁধে: রাতে আসা নক্ষত্র, উজ্জ্বল ও দীপ্তিমান।"
          },
          {
            "en": "There is a second sense in the word. At-Tabari relays from Ibn Zayd that ath-thaqib is also what has risen above the other stars, since the Arabs say of a bird that climbs to the belly of the sky that it has thaqaba. Al-Qurtubi gives the same usage from al-Farra'. So the star is described by light and by height: it pierces the dark with its brightness, and it stands above. The sky sworn by here is the same sky a reader can look up into on any clear night.",
            "bn": "শব্দটির আরেকটি অর্থও আছে। তাবারী ইবন যায়দ থেকে বর্ণনা করেন, আস-সাকিব সেই নক্ষত্রও, যা অন্য নক্ষত্রদের ছাড়িয়ে উপরে উঠে গেছে। কারণ কোনো পাখি আকাশের গভীরে উঁচুতে উঠে গেলে আরবরা বলে, সে 'সাকাবা' করেছে। কুরতুবী একই ব্যবহার ফাররা থেকে উল্লেখ করেন। নক্ষত্রটির পরিচয় তাহলে দুই দিক থেকে: আলোয় আর উচ্চতায়। উজ্জ্বলতা দিয়ে সে অন্ধকার ভেদ করে, আর থাকে সবার উপরে। এখানে যে আকাশের শপথ করা হয়েছে, পরিষ্কার যেকোনো রাতে পাঠক সেই আকাশের দিকেই চোখ তুলে তাকাতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Saturn, Pleiades, or Every Star",
          "bn": "শনি, সুরাইয়া, নাকি সব তারা"
        },
        "p": [
          {
            "en": "Which star is meant? Al-Qurtubi says plainly that the scholars differed. Some said Zuhal, Saturn, which Muhammad ibn al-Hasan mentions in his tafsir along with reports, of which al-Qurtubi says: Allah knows best whether they are sound. Ibn Zayd said the Pleiades, and Saturn is also reported from him, which al-Farra' held as well. From Ibn 'Abbas he reports al-Jady. At-Tabari's text from Ibn Zayd notes that the Arabs used to call the Pleiades simply the star, and adds: it is said the piercing star is Saturn.",
            "bn": "কোন নক্ষত্রের কথা বলা হচ্ছে? কুরতুবী সোজাসুজি বলেন, আলেমরা এ নিয়ে মতভেদ করেছেন। কেউ বলেছেন যুহাল, অর্থাৎ শনি। মুহাম্মাদ ইবনুল হাসান তাঁর তাফসীরে এ মত কিছু বর্ণনাসহ এনেছেন। সেগুলো সম্পর্কে কুরতুবীর মন্তব্য: সেগুলো সহীহ কি না, আল্লাহই ভালো জানেন। ইবন যায়দ বলেছেন সুরাইয়া, অর্থাৎ কৃত্তিকা নক্ষত্রপুঞ্জ। তাঁর থেকে শনির কথাও বর্ণিত আছে, ফাররাও তাই বলেছেন। ইবন আব্বাস (রাঃ) থেকে কুরতুবী আল-জাদির কথা আনেন। তাবারীতে ইবন যায়দের বর্ণনায় আছে, আরবরা সুরাইয়াকে শুধু 'নক্ষত্র' বলেই ডাকত। সঙ্গে আছে: বলা হয়, ভেদকারী নক্ষত্রটি শনি।"
          },
          {
            "en": "Against these single names stands the general reading. Al-Qurtubi gives Qatada's view that the word covers all the stars, because they all rise by night, and he reports that al-Qushayri and most scholars take at-tariq and ath-thaqib as names for a kind, meant for every star, in line with what he cites from Mujahid. At-Tabari's own opening already speaks of the shining stars in the plural. These positions are reported here as the commentators give them. The fetched texts settle no single star, and this article does not either.",
            "bn": "এই একক নামগুলোর বিপরীতে আছে ব্যাপক অর্থের মত। কুরতুবী কাতাদার মত আনেন: শব্দটি সব নক্ষত্রকেই বোঝায়, কারণ সবাই রাতে উদিত হয়। তিনি আরও জানান, কুশাইরী এবং অধিকাংশ আলেম আত-তারিক আর আস-সাকিবকে জাতিবাচক নাম হিসেবে নিয়েছেন। এর দ্বারা উদ্দেশ্য সব নক্ষত্র, মুজাহিদ থেকে তিনি যা এনেছেন তার সাথেও এটি মেলে। তাবারী নিজের ব্যাখ্যার শুরুতেই বহুবচনে উজ্জ্বল নক্ষত্ররাজির কথা বলেছেন। মতগুলো এখানে রাখা হলো তাফসীরকারেরা যেভাবে দিয়েছেন সেভাবে। যে তাফসীরগুলো দেখা হয়েছে, সেগুলো কোনো একটি নক্ষত্রকে চূড়ান্ত করে না। এ লেখাও করছে না।"
          },
          {
            "en": "One more strand connects the star to the unseen. Al-Qurtubi reports from Ibn 'Abbas and 'Ata' that ath-thaqib is the star with which the devils are pelted, and Ibn Kathir gives 'Ikrima's gloss: it gives light and it burns the devil. Al-Qurtubi also relays, through Abu Salih from Ibn 'Abbas, a report naming a falling star as the occasion of the surah's revelation. He gives it no grading and no fetched source confirms it, so it is mentioned and not built on here.",
            "bn": "আরেকটি সূত্র নক্ষত্রকে অদৃশ্য জগতের সাথে জোড়ে। কুরতুবী ইবন আব্বাস (রাঃ) ও আতা থেকে বর্ণনা করেন, আস-সাকিব সেই নক্ষত্র, যা দিয়ে শয়তানদের দিকে নিক্ষেপ করা হয়। ইবন কাসীর ইকরিমার ব্যাখ্যা আনেন: তা আলো দেয়, আর শয়তানকে পোড়ায়। কুরতুবী আবু সালিহের সূত্রে ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনাও আনেন। তাতে সূরাটি নাযিলের উপলক্ষ হিসেবে একটি খসে পড়া নক্ষত্রের কথা আছে। তিনি এর কোনো মান উল্লেখ করেননি, আর দেখা কোনো উৎস তা সমর্থনও করে না। তাই এখানে শুধু উল্লেখ করা হলো, এর উপর কিছু দাঁড় করানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lamma, Doubled or Light",
          "bn": "লাম্মা, দ্বিত্বসহ না হালকা"
        },
        "p": [
          {
            "en": "The word lamma is read in two ways, and both are canonical readings. With the mim doubled, lamma, al-Baghawi names Abu Ja'far, Ibn 'Amir, 'Asim and Hamza; al-Qurtubi names Ibn 'Amir, 'Asim and Hamza; at-Tabari names Abu Ja'far of Madina and Hamza of Kufa, and reports that al-Hasan read it so and glossed it as illa 'alayha hafiz. On this reading in is a negative, and lamma means illa, except: there is no soul but that it has a guardian over it. The text printed above carries this reading.",
            "bn": "লাম্মা শব্দটি দুইভাবে পড়া হয়, আর দুটিই স্বীকৃত কিরাআত। মীমে তাশদীদ দিয়ে 'লাম্মা' পড়েছেন যাঁরা, বাগাভী তাঁদের নাম দেন: আবু জাফর, ইবন আমির, আসিম ও হামযা। কুরতুবী নাম দেন ইবন আমির, আসিম ও হামযার। তাবারী বলেন, মদীনার আবু জাফর আর কূফার হামযা এভাবে পড়েছেন। তিনি আরও জানান, হাসানও এভাবে পড়তেন, আর অর্থ করতেন 'ইল্লা আলাইহা হাফিয'। এই কিরাআতে 'ইন' না-বাচক, আর 'লাম্মা' মানে 'ইল্লা', ছাড়া। অর্থ দাঁড়ায়: এমন কোনো প্রাণ নেই, যার উপর হেফাজতকারী নেই। উপরে ছাপা আয়াতের পাঠ এটিই।"
          },
          {
            "en": "Why should lamma mean except? The commentators answer from the speech of one tribe. Al-Baghawi says it is the dialect of Hudhayl, who use lamma in the sense of illa and say nashadtuka Allaha lamma qumta, meaning: I adjure you by Allah to do nothing but stand. Al-Qurtubi gives the same tribe and the same saying. At-Tabari reports al-Farra' as holding that Hudhayl join lamma to a lightened in in this way, and Ma'arif al-Qur'an calls it an exceptive particle in the dialect of Banu Hudhail.",
            "bn": "লাম্মা কেন 'ছাড়া' অর্থ দেবে? তাফসীরকারেরা এর জবাব দেন একটি গোত্রের ভাষা থেকে। বাগাভী বলেন, এটি হুযাইল গোত্রের ভাষা। তারা লাম্মাকে ইল্লার অর্থে ব্যবহার করে। তারা বলে, 'নাশাদতুকাল্লাহা লাম্মা কুমতা', অর্থাৎ আল্লাহর দোহাই, তুমি দাঁড়ানো ছাড়া আর কিছু করো না। কুরতুবীও একই গোত্র আর একই বাক্যের উল্লেখ করেন। তাবারী ফাররার মত বর্ণনা করেন: হুযাইল গোত্র হালকা 'ইন'-এর সাথে এভাবে লাম্মা জুড়ে দেয়। মাআরিফুল কুরআনও বলে, বনু হুযাইলের ভাষায় এটি ব্যতিক্রমবাচক অব্যয়।"
          },
          {
            "en": "The other reading is light, lama. At-Tabari names Nafi' of Madina and Abu 'Amr of Basra; al-Qurtubi and al-Baghawi say the remaining readers. Here in is lightened from inna, the lam is its answer, and ma is an extra word for emphasis: surely every soul has a guardian over it. At-Tabari chose this reading as the better known in Arab speech, yet wrote that if al-Farra' is right about Hudhayl, reading with the doubled mim is permissible and sound. The two readings reach one claim by two grammars.",
            "bn": "অন্য কিরাআতটি হালকা, 'লামা'। তাবারী নাম দেন মদীনার নাফে আর বসরার আবু আমরের। কুরতুবী আর বাগাভী বলেন, বাকি কারীগণ এভাবে পড়েছেন। এখানে 'ইন' মূলত 'ইন্না', হালকা করে পড়া। 'লাম' তার জবাব, আর 'মা' জোর দেওয়ার জন্য অতিরিক্ত শব্দ। অর্থ দাঁড়ায়: নিশ্চয়ই প্রতিটি প্রাণের উপর একজন হেফাজতকারী আছেন। তাবারী নিজে এ কিরাআত বেছে নিয়েছেন, কারণ আরবদের কথায় এটি বেশি পরিচিত। তবু তিনি লিখেছেন, হুযাইল সম্পর্কে ফাররার কথা ঠিক হলে তাশদীদসহ পড়াও বৈধ ও সঠিক। দুই কিরাআত দুই ব্যাকরণে একই কথায় পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Keeper of Every Deed",
          "bn": "প্রতিটি আমলের সংরক্ষক"
        },
        "p": [
          {
            "en": "Who is the guardian? At-Tabari gives his own answer first: every soul has over it a guardian from its Lord, who keeps its deeds and counts against it what it earns of good or evil, and he says the people of interpretation said the like. He then cites Ibn 'Abbas: every soul has over it guardians from among the angels. Qatada widens the list: guardians who keep your deeds, your provision and your appointed term, and when you have completed it, son of Adam, you are taken to your Lord.",
            "bn": "হেফাজতকারী কে? তাবারী প্রথমে নিজের ব্যাখ্যা দেন: প্রতিটি প্রাণের উপর তার রবের পক্ষ থেকে একজন হেফাজতকারী আছেন। তিনি তার আমল সংরক্ষণ করেন, আর ভালো-মন্দ যা সে অর্জন করে, তার হিসাব গুনে রাখেন। তাবারী বলেন, তাফসীরবিদরাও এমনই বলেছেন। এরপর তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: প্রতিটি প্রাণের উপর ফেরেশতাদের মধ্য থেকে হেফাজতকারীরা আছেন। কাতাদা তালিকাটা আরও বড় করেন। তাঁর ভাষায়, তাঁরা তোমার আমল, তোমার রিযিক আর তোমার নির্ধারিত আয়ু সংরক্ষণ করেন। হে আদমসন্তান, সেটা পূর্ণ হলে তোমাকে তোমার রবের কাছে তুলে নেওয়া হয়।"
          },
          {
            "en": "Al-Qurtubi gives a second line from Qatada: his companion, qarin, keeps his deeds for him, good or evil. The Muyassar is direct: there is no soul but that an angel watcher has been put in charge of it, keeping its deeds so that it is called to account for them on the Day of Resurrection. As-Sa'di says the guardian keeps its good and evil deeds, and the soul will be repaid by the deeds kept against it. Al-Baghawi repeats at-Tabari's wording and Ibn 'Abbas's angels.",
            "bn": "কুরতুবী কাতাদা থেকে আরেকটি বর্ণনা দেন: তার সঙ্গী, কারীন, তার ভালো-মন্দ আমল সংরক্ষণ করে। মুয়াসসার সরাসরি বলে, এমন কোনো প্রাণ নেই, যার দায়িত্বে একজন পর্যবেক্ষক ফেরেশতা নিযুক্ত নেই। তিনি তার আমল সংরক্ষণ করেন, যেন কিয়ামতের দিন সে আমলের হিসাব নেওয়া যায়। সা'দী বলেন, হেফাজতকারী তার নেক ও মন্দ দুই ধরনের আমলই সংরক্ষণ করেন। আর যে আমল তার নামে সংরক্ষিত, তারই প্রতিদান সে পাবে। বাগাভী তাবারীর কথাগুলোই ফিরিয়ে আনেন, সঙ্গে ইবন আব্বাস (রাঃ)-এর ফেরেশতাদের কথা।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a point of grammar. Hafiz is singular in form but generic in sense, because there is not one recording angel but a host of them, and it points to 82:10 and 82:11: wa inna 'alaykum la-hafizin, kiraman katibin, and over you are guardians, noble, writing. On this reading the six words say that no act of any soul goes unwitnessed. A deed done where no person could see it is still done in front of someone who keeps it.",
            "bn": "মাআরিফুল কুরআন ব্যাকরণের একটি দিক যোগ করে। 'হাফিয' শব্দটি রূপে একবচন, কিন্তু অর্থে জাতিবাচক। কারণ আমল লেখার ফেরেশতা একজন নন, অনেকজন। প্রমাণ হিসেবে মাআরিফ ৮২:১০ ও ৮২:১১ আয়াতের দিকে ইঙ্গিত করে: ওয়া ইন্না আলাইকুম লাহাফিযীন, কিরামান কাতিবীন, নিশ্চয়ই তোমাদের উপর আছেন হেফাজতকারীরা, সম্মানিত লেখকগণ। এই অর্থে ছয়টি শব্দের বক্তব্য হলো, কোনো প্রাণের কোনো কাজই সাক্ষীর বাইরে ঘটে না। যে কাজ কোনো মানুষের চোখে পড়েনি, সেটাও ঘটেছে এমন একজনের সামনে, যিনি তা সংরক্ষণ করছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Shielded Until the Decree",
          "bn": "তাকদীর আসা পর্যন্ত পাহারা"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the guardian another way: every soul has over it a guardian from Allah who protects it from calamities, and he cites 13:11, lahu mu'aqqibatun min bayni yadayhi wa min khalfihi yahfazunahu min amri Allah, for him are angels in succession, before him and behind him, guarding him by Allah's command. Al-Qurtubi gives this sense with the words it was said: the guardian shields the soul from harm until it hands it over to the decree. He attributes the same to al-Farra' and al-Kalbi.",
            "bn": "ইবন কাসীর হেফাজতকারীকে অন্যভাবে বোঝেন: প্রতিটি প্রাণের উপর আল্লাহর পক্ষ থেকে একজন হেফাজতকারী আছেন, যিনি তাকে বিপদাপদ থেকে রক্ষা করেন। তিনি ১৩:১১ আয়াত আনেন: লাহু মুআক্কিবাতুম মিম বাইনি ইয়াদাইহি ওয়া মিন খালফিহি ইয়াহফাযূনাহু মিন আমরিল্লাহ। তার জন্য আছে একের পর এক আসা ফেরেশতা, সামনে ও পেছনে, যাঁরা আল্লাহর আদেশে তাকে পাহারা দেন। কুরতুবী 'বলা হয়েছে' বলে এ অর্থও আনেন: হেফাজতকারী প্রাণকে বিপদ থেকে আগলে রাখেন, যতক্ষণ না তাকে তাকদীরের হাতে সঁপে দেন। একই কথা তিনি ফাররা ও কালবীর বলে উল্লেখ করেন।"
          },
          {
            "en": "Al-Baghawi's report from al-Kalbi joins the two senses: a guardian from Allah keeps the soul and keeps its words and its acts, until he hands it over to what has been decreed and then leaves it. Ma'arif al-Qur'an states the second sense as angels appointed to protect a person from every kind of calamity, by day and night, except what Allah has decreed for him. On this reading the guardian does not cancel the decree; it keeps away everything that was not written.",
            "bn": "বাগাভী কালবী থেকে যে বর্ণনা দেন, তাতে দুই অর্থ একসাথে মেলে। আল্লাহর পক্ষ থেকে একজন হেফাজতকারী প্রাণটিকে রক্ষা করেন, তার কথা ও কাজও সংরক্ষণ করেন। তারপর তাকদীরে যা লেখা, তার হাতে সঁপে দিয়ে সরে যান। মাআরিফুল কুরআন দ্বিতীয় অর্থটি এভাবে বলে: কিছু ফেরেশতা নিযুক্ত আছেন, যাঁরা দিনে-রাতে মানুষকে সব রকম বিপদ থেকে রক্ষা করেন। ব্যতিক্রম শুধু সেই বিপদ, যা আল্লাহ তার জন্য নির্ধারণ করেছেন। এই অর্থে হেফাজতকারী তাকদীর বাতিল করেন না। যা লেখা নেই, শুধু তা-ই দূরে রাখেন।"
          },
          {
            "en": "None of the tafsir fetched for this verse attaches a sound hadith to it. Al-Qurtubi relays from Abu Umama a report raised to the Prophet ﷺ about angels assigned to defend the believer. He gives it no chain and no grading, and Ma'arif al-Qur'an, retelling it from him, gives a different count. It is mentioned here and nothing is built on it. What the commentators lean on is the verse itself, 13:11, and 82:10 and 82:11.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই আয়াতের সাথে কোনো সহীহ হাদীস যুক্ত করেনি। কুরতুবী আবু উমামা (রাঃ) থেকে নবী ﷺ-এর বলে একটি বর্ণনা আনেন। বিষয়টি মুমিনকে রক্ষার জন্য নিযুক্ত ফেরেশতা। তিনি এর সনদ বা মান কিছুই উল্লেখ করেননি। মাআরিফুল কুরআন তাঁর থেকেই বর্ণনাটি আনে, কিন্তু সংখ্যা দেয় ভিন্ন। তাই এখানে শুধু উল্লেখ করা হলো, এর উপর কিছু দাঁড় করানো হলো না। তাফসীরকারেরা আসলে ভর করেন আয়াতটির উপর, আর ১৩:১১, ৮২:১০ ও ৮২:১১ আয়াতের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Allah Behind Every Means",
          "bn": "সব মাধ্যমের পেছনে আল্লাহ"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two further views, each with it was said. One: the guardian is Allah Himself, for were it not for His keeping, the soul would not last. The other: the guardian over a person is his own intellect, which guides him to what benefits him and holds him back from what harms him. Ma'arif al-Qur'an keeps to the two angelic senses and presents both as possible. The commentators set these readings side by side, and so does this article.",
            "bn": "কুরতুবী 'বলা হয়েছে' বলে আরও দুটি মত উল্লেখ করেন। একটি হলো, হেফাজতকারী স্বয়ং আল্লাহ, কারণ তিনি রক্ষা না করলে প্রাণ টিকে থাকত না। অন্যটি হলো, মানুষের উপর হেফাজতকারী তার নিজের বুদ্ধি। বুদ্ধি তাকে কল্যাণের পথ দেখায়, ক্ষতির কাজ থেকে ফিরিয়ে রাখে। মাআরিফুল কুরআন ফেরেশতা-সংক্রান্ত দুই অর্থেই থাকে, আর দুটিকেই সম্ভাব্য বলে উপস্থাপন করে। তাফসীরকারেরা মতগুলো পাশাপাশি রেখেছেন, এ লেখাও তা-ই রাখছে।"
          },
          {
            "en": "Then al-Qurtubi speaks in his own voice: the intellect and the rest are intermediaries, and the guardian in truth is Allah. He cites 12:64, fa-Allahu khayrun hafiza, Allah is the best guardian, and 21:42, qul man yakla'ukum bil-layli wan-nahari mina r-Rahman, say: who guards you by night and by day from the Most Merciful? On his account the angels, the record and the mind are all real, and none of them works on its own.",
            "bn": "এরপর কুরতুবী নিজের কথা বলেন: বুদ্ধি আর অন্য সবকিছু মাধ্যম মাত্র, প্রকৃত হেফাজতকারী আল্লাহ। তিনি ১২:৬৪ আয়াত আনেন: ফাল্লাহু খাইরুন হাফিযা, আল্লাহই সর্বোত্তম হেফাজতকারী। সঙ্গে ২১:৪২: কুল মাই ইয়াকলাউকুম বিল্লাইলি ওয়ান্নাহারি মিনার রাহমান, বলুন, রাতে ও দিনে কে তোমাদের রহমান থেকে পাহারা দেয়? তাঁর ব্যাখ্যায় ফেরেশতা, আমলনামা, বুদ্ধি সবই সত্য। কিন্তু এদের কোনোটিই নিজে নিজে কাজ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hour Left Unwatched",
          "bn": "পাহারাহীন কোনো প্রহর নেই"
        },
        "p": [
          {
            "en": "Read with all its senses, the verse leaves no gap. What a soul does is kept, and what reaches it has passed a guarded door. That can sound like surveillance, but Ibn Kathir's phrase is a guardian from Allah, and several commentators describe it as protection as well as record. A person who believes it has two duties at once: to watch what he sends out, and to stop fearing that he has been forgotten.",
            "bn": "সব অর্থ মিলিয়ে পড়লে আয়াতে কোনো ফাঁক থাকে না। প্রাণ যা করে, তা সংরক্ষিত হয়। আর তার কাছে যা পৌঁছায়, তা আসে পাহারা দেওয়া দরজা পেরিয়ে। শুনে মনে হতে পারে নজরদারি। কিন্তু ইবন কাসীরের ভাষায় এ হেফাজতকারী আল্লাহর পক্ষ থেকে, আর একাধিক তাফসীরকার একে আমল লেখার পাশাপাশি রক্ষা করা হিসেবেও বর্ণনা করেছেন। যে এ কথা বিশ্বাস করে, তার দায়িত্ব দুটি। নিজে কী পাঠাচ্ছে তা খেয়াল রাখা, আর ভুলে যাওয়া হয়েছে, এই ভয় ছেড়ে দেওয়া।"
          },
          {
            "en": "The oath placed this sentence under a night sky, where a single star is seen because the dark is complete. The next verse turns from the guardian to the guarded, and asks man to consider what he was made from. Before that question comes, this verse settles where he stands: never alone, never unrecorded, and never outside the keeping of the One who made him.",
            "bn": "শপথটি এ বাক্যকে রেখেছে রাতের আকাশের নিচে, যেখানে অন্ধকার পুরো বলেই একটি নক্ষত্রও চোখে পড়ে। পরের আয়াত হেফাজতকারী থেকে চোখ ফেরায় যাকে হেফাজত করা হচ্ছে তার দিকে। মানুষকে বলে, ভেবে দেখো কী থেকে তোমাকে বানানো হয়েছে। সে প্রশ্ন আসার আগেই এ আয়াত জানিয়ে দেয় মানুষ কোথায় দাঁড়িয়ে। সে কখনো একা নয়, তার কিছুই অলিখিত থাকে না। আর যিনি তাকে বানিয়েছেন, তাঁর হেফাজতের বাইরে সে কখনো নয়।"
          }
        ]
      }
    ]
  },
  "86:5": {
    "sections": [
      {
        "h": {
          "en": "Four Words and a Question",
          "bn": "চার শব্দের এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Fal-yanzuri l-insanu mimma khuliq: so let man look at what he was created from. Four Arabic words, and the last two are a question. Al-Qurtubi says so plainly: mimma khuliq is an istifham, an interrogative, meaning min ayyi shay'in khuliq, from what thing was he created? At-Tabari and al-Baghawi paraphrase it the same way, from what thing his Lord created him, naming the Creator whom the verse leaves unnamed. The verse asks, and leaves the reader holding the question for one breath.",
            "bn": "ফালইয়ানযুরিল ইনসানু মিম্মা খুলিক: অতএব মানুষ ভেবে দেখুক, তাকে কী থেকে সৃষ্টি করা হয়েছে। আরবিতে মোট চারটি শব্দ, আর শেষ দুটি শব্দ আসলে একটা প্রশ্ন। কুরতুবী সরাসরি বলেন, মিম্মা খুলিক হলো ইস্তিফহাম, মানে প্রশ্নবাচক কথা: মিন আইয়ি শাইয়িন খুলিক, কোন জিনিস থেকে তাকে সৃষ্টি করা হলো? তাবারী ও বাগাভীও কথাটা একইভাবে খুলে বলেন: কোন জিনিস থেকে তার রব তাকে সৃষ্টি করেছেন। আয়াতে স্রষ্টার নাম উহ্য, তাঁরা সেই নাম মুখে এনে দিলেন। প্রশ্নটা পাঠকের হাতে তুলে দিয়ে আয়াত যেন এক নিঃশ্বাস থেমে থাকে।"
          },
          {
            "en": "At-Tabari marks what follows the question: thumma akhbara, then Allah, exalted be His praise, informed him of what He created him from. That answer comes in 86:6 and 86:7, and this article gives it one section below. Here the order matters. The Qur'an asks before it tells. A person handed the answer first could nod and move on; a person asked first has to search himself, and only then hears what he already half knew. The question does part of the teaching before a single fact is supplied.",
            "bn": "প্রশ্নের পরে কী আসে, তাবারী সেটাও দেখিয়ে দেন: সুম্মা আখবারা, তারপর আল্লাহ, যাঁর প্রশংসা মহিমান্বিত, জানিয়ে দিলেন কী থেকে তিনি তাকে সৃষ্টি করেছেন। সেই উত্তর আছে ৮৬:৬ ও ৮৬:৭ আয়াতে, আর এ লেখায় নিচে তার জন্য একটি অংশ রাখা আছে। এখানে খেয়াল করার মতো বিষয় হলো ক্রম। কুরআন আগে প্রশ্ন করে, পরে জানায়। উত্তর আগে হাতে পেলে মানুষ মাথা নেড়ে চলে যেতে পারত। আগে প্রশ্ন শুনলে তাকে নিজের ভেতরে খুঁজতে হয়, তারপর সে এমন কথা শোনে যা সে আগেই আধাআধি জানত। একটা তথ্যও দেওয়ার আগে প্রশ্নটাই শিক্ষার খানিকটা সেরে ফেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Look of One Who Reflects",
          "bn": "চিন্তাশীলের দৃষ্টি"
        },
        "p": [
          {
            "en": "What kind of looking is meant? Nobody saw his own beginning, so the verb cannot mean the eyes alone. Al-Baghawi settles it briefly: fal-yanzur nazar al-mutafakkir, let him look with the look of one who reflects. As-Sa'di gives the verb a fuller name: fal-yatadabbar khilqatahu wa mabda'ah, let him ponder his make and his beginning. Both turn a command about seeing into a command about thinking, and neither needs more than a line to do it.",
            "bn": "কোন ধরনের দেখা এখানে উদ্দেশ্য? নিজের সূচনা কেউ নিজের চোখে দেখেনি, তাই শুধু চোখের দেখা এর অর্থ হতে পারে না। বাগাভী অল্প কথায় মীমাংসা করে দেন: ফালইয়ানযুর নাযারাল মুতাফাক্কির, সে দেখুক চিন্তাশীলের দৃষ্টিতে। সা'দী ক্রিয়াটিকে আরও স্পষ্ট নাম দেন: ফালইয়াতাদাব্বার খিলকাতাহু ওয়া মাবদাআহ, সে গভীরভাবে ভাবুক নিজের গড়ন আর নিজের শুরু নিয়ে। দুজনেই দেখার আদেশকে বানিয়ে দেন ভাবার আদেশ, আর এ কাজে কারও একটা লাইনের বেশি লাগেনি।"
          },
          {
            "en": "As-Sa'di's word is tadabbur, the word this module takes its name from, and he gives it two objects. Khilqah is the way a person is made, the frame he lives in. Mabda' is where he started. The first he sees every day; the second he knows only by report and by reasoning. Al-Baghawi's mutafakkir points the same way: the looking happens in the mind, by turning a fact over until it yields what it implies. The eyes supply the body; reflection supplies its meaning.",
            "bn": "সা'দীর শব্দটা তাদাব্বুর, আর তাদাব্বুর বিভাগের নামও এই শব্দ থেকেই। তিনি এর দুটি বিষয় ঠিক করে দেন। খিলকাহ হলো মানুষকে যেভাবে গড়া হয়েছে, যে দেহ নিয়ে সে চলাফেরা করে। মাবদা হলো তার শুরু। প্রথমটা সে রোজ দেখে। দ্বিতীয়টা সে জানে কেবল খবর আর যুক্তি দিয়ে। বাগাভীর মুতাফাক্কির শব্দও একই দিকে ইশারা করে: এ দেখা ঘটে মনের ভেতরে, একটা সত্যকে উল্টেপাল্টে দেখতে দেখতে, যতক্ষণ না তার ভেতরের কথাটা বেরিয়ে আসে। চোখ দেয় দেহের ছবি, ভাবনা দেয় তার মানে।"
          },
          {
            "en": "A reader can know a great deal about the body and still not have done what the verse asks, because the command is not to gather information but to draw a conclusion from it. On al-Baghawi's and as-Sa'di's glosses, the look is complete only when it reaches Him who did the making, which is exactly where the paraphrase his Lord created him had already placed it.",
            "bn": "দেহ সম্পর্কে অনেক কিছু জেনেও কেউ আয়াতের দাবি পূরণ না করে থাকতে পারে, কারণ আদেশটা তথ্য জমানোর নয়, তথ্য থেকে সিদ্ধান্তে পৌঁছানোর। বাগাভী ও সা'দীর ব্যাখ্যা ধরলে এ দেখা পূর্ণ হয় তখনই, যখন তা গিয়ে পৌঁছায় তাঁর কাছে যিনি সৃষ্টি করেছেন। 'তার রব তাকে সৃষ্টি করেছেন' ব্যাখ্যাটি দৃষ্টিকে আগেই ঠিক সেখানে রেখে দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Told to Look",
          "bn": "দেখতে বলা হলো কাকে"
        },
        "p": [
          {
            "en": "The commentators do not all aim the verse at the same reader. At-Tabari names him narrowly: al-insan al-mukadhdhib bil-ba'th, the man who belies the raising after death and denies that Allah has the power to bring him to life once he has died. The Muyassar says the same in fewer words, al-insan al-munkir lil-ba'th, the man who denies the resurrection, and gives the purpose of the look: so that he knows that re-creating a human being is no harder than creating him the first time.",
            "bn": "সব তাফসীরকার আয়াতটিকে একই পাঠকের দিকে তাক করেন না। তাবারী তাকে চিনিয়ে দেন সীমিত করে: আল-ইনসানুল মুকাযযিবু বিল-বা'স, সেই মানুষ যে মৃত্যুর পরের পুনরুত্থানকে মিথ্যা বলে, মৃত্যুর পর তাকে আবার জীবিত করার ব্যাপারে আল্লাহর ক্ষমতা অস্বীকার করে। মুয়াসসার আরও সংক্ষেপে একই কথা বলে, আল-ইনসানুল মুনকিরু লিল-বা'স, পুনরুত্থান অস্বীকারকারী মানুষ। দেখার উদ্দেশ্যও সে বলে দেয়: যেন সে বোঝে, মানুষকে দ্বিতীয়বার সৃষ্টি করা প্রথমবার সৃষ্টি করার চেয়ে কঠিন নয়।"
          },
          {
            "en": "Al-Qurtubi reads the word more widely. Al-insan, he writes, means ibn Adam, the son of Adam, with no qualifier, and the work he draws from the verse, as a later section shows, is the work of someone preparing for the Day. As-Sa'di and al-Baghawi likewise attach no qualifier to the word. So the texts carry two emphases: a reply to the denier, in at-Tabari and the Muyassar, and a counsel to every human being, in al-Qurtubi. They are left here side by side, as the commentators left them.",
            "bn": "কুরতুবী শব্দটাকে পড়েন আরও ব্যাপক অর্থে। তাঁর মতে আল-ইনসান মানে ইবনু আদম, আদম (আঃ)-এর সন্তান, কোনো শর্ত ছাড়াই। আয়াত থেকে তিনি যে আমলের কথা বের করেন, তা কিয়ামতের দিনের জন্য প্রস্তুতি নেওয়া মানুষের আমল, সামনের এক অংশে সেটা আসবে। সা'দী ও বাগাভীও শব্দটির সাথে কোনো শর্ত জোড়েন না। ফলে তাফসীরে দুটি ঝোঁক পাওয়া যায়। তাবারী ও মুয়াসসারে এটা অস্বীকারকারীর প্রতি জবাব, কুরতুবীতে প্রত্যেক মানুষের প্রতি উপদেশ। তাফসীরকারেরা দুটিকে যেভাবে রেখেছেন, এখানেও সেভাবে পাশাপাশি রইল।"
          },
          {
            "en": "Either way, the verse meets its reader with something he cannot dispute. A man may argue about a Day he has not seen; he cannot argue that he once was not, and then was. The look the verse asks for starts from ground the doubter and the believer share. That is why one sentence can serve as an answer to the first and a reminder to the second.",
            "bn": "যেভাবেই পড়া হোক, আয়াত পাঠকের সামনে রাখে এমন জিনিস যা নিয়ে তর্ক চলে না। না-দেখা দিন নিয়ে মানুষ তর্ক করতে পারে। কিন্তু সে একসময় ছিল না, তারপর হলো, এ নিয়ে তর্ক করা যায় না। আয়াত যে দেখার কথা বলে, তা শুরু হয় এমন জমিন থেকে যা সন্দেহকারী আর বিশ্বাসী দুজনেরই। তাই একই বাক্য প্রথমজনের কাছে জবাব আর দ্বিতীয়জনের কাছে স্মরণ হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beginning as Proof of Return",
          "bn": "শুরুই ফেরার প্রমাণ"
        },
        "p": [
          {
            "en": "Ibn Kathir's comment is one sentence with two halves. The verse, he writes, is a tanbih, an alert, to man about the weakness of the origin he was created from, and an irshad, a guidance, towards acknowledging al-ma'ad, the return. Then comes the reason: whoever was able to begin is able to repeat, bi-tariq al-awla, all the more so. The phrase does not say only that a second creation is as possible as the first. It says that once the first is granted, the second follows with greater force.",
            "bn": "ইবন কাসীরের ব্যাখ্যা একটিমাত্র বাক্যে, তবে তার দুটি ভাগ। তিনি বলেন, আয়াতটি মানুষের জন্য তানবীহ, মানে সতর্কবার্তা: যে মূল থেকে তাকে সৃষ্টি করা হয়েছে, তার দুর্বলতার দিকে। আবার এটি ইরশাদ, মানে পথনির্দেশ: মাআদ, অর্থাৎ ফিরে যাওয়াকে মেনে নেওয়ার দিকে। এরপর কারণ: যিনি শুরু করতে পেরেছেন, তিনি আবার করতে পারবেন বি-তারীকিল আওলা, আরও বেশি সংগত কারণে। কথাটা কেবল এটুকু বলে না যে দ্বিতীয় সৃষ্টি প্রথমটার মতোই সম্ভব। বলে, প্রথমটা মেনে নিলে দ্বিতীয়টা আরও জোরালোভাবে মেনে নিতে হয়।"
          },
          {
            "en": "He cites 30:27: wa huwa alladhi yabda'u l-khalqa thumma yu'iduhu wa huwa ahwanu 'alayh, and He it is who begins the creation, then repeats it, and that is easier for Him. The abridged English of his tafsir adds, at 86:8, that Allah has mentioned this proof in more than one place in the Qur'an. The Muyassar puts the same reasoning at the end of its gloss: He who created man from this water is able to return him to life after death.",
            "bn": "তিনি ৩০:২৭ আয়াত উদ্ধৃত করেন: ওয়া হুওয়াল্লাযী ইয়াবদাউল খালকা সুম্মা ইউঈদুহু ওয়া হুওয়া আহওয়ানু আলাইহ, তিনিই সৃষ্টির সূচনা করেন, তারপর আবার তা করবেন, আর সেটা তাঁর জন্য আরও সহজ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮৬:৮ আয়াতের আলোচনায় যোগ করে, এই প্রমাণ আল্লাহ কুরআনের একটির বেশি জায়গায় উল্লেখ করেছেন। মুয়াসসারও তার ব্যাখ্যা শেষ করে এই যুক্তিতে: যিনি মানুষকে এই পানি থেকে সৃষ্টি করেছেন, মৃত্যুর পর তাকে আবার জীবনে ফিরিয়ে আনতে তিনি অবশ্যই সক্ষম।"
          },
          {
            "en": "The verses after ours carry the argument to its close, and this article only names them. Ibn Kathir reads 86:8 as Allah's being able to bring this man back and raise him, 86:9 as the Day when secrets are tested and laid open, and 86:10 as man having no power within himself and no helper from outside. The look backwards in 86:5 is, on every reading above, the first step of that argument.",
            "bn": "আমাদের আয়াতের পরের আয়াতগুলো যুক্তিটাকে শেষ পর্যন্ত নিয়ে যায়, এ লেখা কেবল তাদের নাম নেয়। ইবন কাসীরের ব্যাখ্যায় ৮৬:৮ বলে, আল্লাহ এই মানুষকে ফিরিয়ে এনে পুনরুত্থিত করতে সক্ষম। ৮৬:৯ সেই দিনের কথা, যেদিন গোপন বিষয় যাচাই করে খুলে দেওয়া হবে। ৮৬:১০ বলে, সেদিন মানুষের নিজের ভেতরে কোনো শক্তি থাকবে না, বাইরে থেকেও কোনো সাহায্যকারী থাকবে না। ওপরের সব ব্যাখ্যাতেই ৮৬:৫ আয়াতের পেছনে তাকানো সেই যুক্তির প্রথম ধাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Aims in One Sentence",
          "bn": "এক বাক্যে দুই লক্ষ্য"
        },
        "p": [
          {
            "en": "Read again, Ibn Kathir's two halves aim at two different faults. The alert about weakness speaks to pride: a person who thinks well of his own strength is reminded where that strength began. The guidance towards the return speaks to doubt: a person who thinks the grave is the end is shown that his own existence already answers him. On Ibn Kathir's reading, one verse treats both faults, and it treats them with a single fact the reader carries with him.",
            "bn": "আবার পড়লে দেখা যায়, ইবন কাসীরের দুই ভাগ দুই ভিন্ন দোষের দিকে তাক করা। দুর্বলতার সতর্কবার্তা অহংকারের জবাব। যে নিজের শক্তি নিয়ে বড় ভাবে, তাকে মনে করিয়ে দেওয়া হয় সেই শক্তির শুরু কোথায়। ফিরে যাওয়ার পথনির্দেশ সন্দেহের জবাব। যে ভাবে কবরেই সব শেষ, তাকে দেখানো হয় যে তার নিজের অস্তিত্বই তাকে উত্তর দিয়ে রেখেছে। ইবন কাসীরের পাঠে একটি আয়াত দুটি দোষেরই চিকিৎসা করে, আর তা করে এমন এক সত্য দিয়ে যা পাঠক সারাক্ষণ নিজের সাথে বয়ে বেড়ায়।"
          },
          {
            "en": "That is also why the verse can be so brief. It does not prove the resurrection through a chain of premises. It points to something every reader already has, his own beginning, and asks him to draw the conclusion himself. At-Tabari's order fits this: the denier is first told to look, and only then informed of what he was made from. The argument works because the listener supplies its first step from his own life, and a step a person takes himself is harder to deny.",
            "bn": "আয়াতটি এত ছোট হতে পারে এ কারণেই। পুনরুত্থান প্রমাণ করতে সে একের পর এক যুক্তি সাজায় না। প্রত্যেক পাঠকের কাছে আগে থেকেই যা আছে, অর্থাৎ তার নিজের শুরু, সেদিকে আঙুল তোলে, আর সিদ্ধান্তটা টানতে বলে তাকেই। তাবারীর বর্ণনার ক্রমও এর সাথে মেলে: অস্বীকারকারীকে আগে দেখতে বলা হয়, তারপর জানানো হয় কী থেকে তাকে বানানো হয়েছে। যুক্তির প্রথম ধাপটা শ্রোতা নিজের জীবন থেকে নিজেই জোগায়, তাই যুক্তিটা কাজ করে। নিজে যে পা ফেলেছে, তা অস্বীকার করা কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Backbone and Chest, as Glossed",
          "bn": "শিরদাঁড়া ও বুক: তাফসীরের ভাষ্য"
        },
        "p": [
          {
            "en": "86:6 answers the question: he was created from a gushing fluid. 86:7 adds that it emerges from between as-sulb wat-tara'ib, the backbone and the ribs. The companion article on 86:6 treats the fluid and its grammar. On the two nouns of 86:7, the Muyassar gives the reading most of these texts share: from between the backbone of the man and the chest of the woman. Ibn Kathir's abridged English says the same: the backbone, or loins, of the man and the ribs of the woman, meaning her chest.",
            "bn": "৮৬:৬ আয়াত প্রশ্নের উত্তর দেয়: তাকে সৃষ্টি করা হয়েছে সবেগে বের হওয়া পানি থেকে। ৮৬:৭ যোগ করে, তা বের হয় আস-সুলব ওয়াত-তারাইবের মাঝখান থেকে, অর্থাৎ শিরদাঁড়া ও পাঁজরের মাঝখান থেকে। পানি আর তার ব্যাকরণ নিয়ে আলোচনা আছে ৮৬:৬ আয়াতের সঙ্গী লেখায়। ৮৬:৭ আয়াতের শব্দ দুটির বেলায় মুয়াসসার দেয় সেই ব্যাখ্যা, যা এখানকার বেশির ভাগ তাফসীরে মেলে: পুরুষের শিরদাঁড়া আর নারীর বুকের মাঝখান থেকে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও তা-ই বলে: পুরুষের শিরদাঁড়া বা কটিদেশ, আর নারীর পাঁজর, মানে তার বুক।"
          },
          {
            "en": "Ibn Kathir supports this with a report from Ibn 'Abbas (RA), through Shabib ibn Bishr from 'Ikrimah: the backbone of the man and the ribs of the woman; the fluid is yellow and fine; and the child is not born except from both of them. Ma'arif al-Qur'an, commenting on 86:6 and 86:7 together, calls this the explanation of the general body of commentators: the fluid comes out from the loins of men and the chest-bones of women.",
            "bn": "এর সমর্থনে ইবন কাসীর ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন, যা শাবীব ইবন বিশর ইকরিমা থেকে বর্ণনা করেছেন: পুরুষের শিরদাঁড়া আর নারীর পাঁজর। পানিটা হলদে ও পাতলা, আর দুজনের পানি ছাড়া সন্তান জন্মায় না। মাআরিফুল কুরআন ৮৬:৬ ও ৮৬:৭ আয়াত একসাথে আলোচনা করে বলে, তাফসীরকারেরা সাধারণভাবে এ ব্যাখ্যাই দিয়েছেন: এ পানি বের হয় পুরুষের কটিদেশ আর নারীর বুকের হাড় থেকে।"
          },
          {
            "en": "Ma'arif then adds a reading of its own. The verse, it observes, does not specify man or woman; it says only that the fluid comes out from between the loins and the chest-bones. That may signify the entire body of both, since the chest is the front of the body and the loin its back, the principal parts, so that naming the two can mean the whole. Ma'arif sets this beside a discussion drawn from embryology and from al-Baidawi, which this article does not report. The readings stand here as the texts give them.",
            "bn": "এরপর মাআরিফুল কুরআন নিজের একটি ব্যাখ্যা যোগ করে। সে লক্ষ করে, আয়াতে পুরুষ বা নারী কারও নাম নেই। আয়াত শুধু বলে, পানি বের হয় কটিদেশ আর বুকের হাড়ের মাঝখান থেকে। এর অর্থ হতে পারে নারী-পুরুষ দুজনেরই পুরো দেহ। কারণ দেহের সামনের দিক বুক, পেছনের দিক কটিদেশ, এ দুটিই প্রধান অংশ, তাই দুটির উল্লেখ গোটা দেহ বোঝাতে পারে। মাআরিফ এর পাশে ভ্রূণবিদ্যা ও বায়যাভী থেকে নেওয়া একটি আলোচনাও রাখে, এ লেখা সেটা তুলে ধরছে না। তাফসীরগুলো যেভাবে দিয়েছে, ব্যাখ্যাগুলো এখানে সেভাবেই রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Dictating to the Guardian",
          "bn": "রক্ষককে যা লেখানো হয়"
        },
        "p": [
          {
            "en": "The verse opens with fa, so, and al-Qurtubi asks what it joins. 86:4 has just said that over every soul there is a guardian, which Ibn Kathir explains as a guardian from Allah protecting it from calamities, and Ma'arif al-Qur'an also as the angels who record deeds, citing 82:10 and 82:11. Al-Qurtubi's wajh al-ittisal, the line of connection, runs like this: the verse counsels man to look at the start of his affair and his first course, so that he knows the One who brought him into being is able to return him and repay him.",
            "bn": "আয়াতটি শুরু হয়েছে ফা দিয়ে, মানে 'অতএব', আর কুরতুবী প্রশ্ন তোলেন, এটা কীসের সাথে জোড়া। ঠিক আগে ৮৬:৪ আয়াত বলেছে, প্রত্যেক প্রাণের ওপর একজন রক্ষক আছে। ইবন কাসীর একে বোঝান আল্লাহর পক্ষ থেকে নিযুক্ত রক্ষক, যে বিপদাপদ থেকে তাকে রক্ষা করে। মাআরিফুল কুরআন ৮২:১০ ও ৮২:১১ উদ্ধৃত করে আমল লিপিবদ্ধকারী ফেরেশতাদের কথাও বলে। কুরতুবীর ওয়াজহুল ইত্তিসাল, অর্থাৎ যোগসূত্র, এরকম: আয়াতটি মানুষকে উপদেশ দেয় তার ব্যাপারের শুরু আর তার প্রথম অবস্থার দিকে তাকাতে, যেন সে জানে, যিনি তাকে অস্তিত্বে এনেছেন তিনি তাকে ফিরিয়ে আনতে ও প্রতিদান দিতে সক্ষম।"
          },
          {
            "en": "Then al-Qurtubi draws the practical end. Knowing that, man should work for the Day of return and recompense, wa la yumli 'ala hafizihi illa ma yasurruhu fi 'aqibati amrih: and dictate to his guardian only what will gladden him at the end of his affair. Yumli means to dictate. In al-Qurtubi's sentence the person speaks and acts, and his guardian, the hafiz of 86:4, is taking it down, so each day becomes a page the person is composing for himself.",
            "bn": "এরপর কুরতুবী আমলের কথায় আসেন। এ কথা জেনে মানুষ কাজ করুক ফেরার ও প্রতিদানের দিনের জন্য, ওয়া লা ইউমলী আলা হাফিযিহী ইল্লা মা ইয়াসুররুহু ফী আকিবাতি আমরিহ: আর নিজের রক্ষককে কেবল তা-ই লেখাক, যা শেষ পরিণামে তাকে খুশি করবে। ইউমলী মানে বলে বলে লেখানো। কুরতুবীর বাক্যে মানুষ বলে আর করে, আর তা লিখে নেন তার রক্ষক, ৮৬:৪ আয়াতের সেই হাফিয। ফলে প্রতিটি দিন হয়ে ওঠে এমন এক পাতা, যা মানুষ নিজেই নিজের জন্য লিখছে।"
          },
          {
            "en": "This turns the look backwards into a look forwards. The origin proves the return, and the return gives every present action its weight. On al-Qurtubi's reading, the verse is not only an argument to be accepted but a habit to be kept: remember where you came from, remember that He who began you will bring you back, and choose today what you would be glad to find written then.",
            "bn": "এভাবে পেছনে তাকানো বদলে যায় সামনে তাকানোয়। শুরু প্রমাণ করে ফেরাকে, আর ফেরা আজকের প্রতিটি আমলকে ভারী করে তোলে। কুরতুবীর পাঠে আয়াতটি শুধু মেনে নেওয়ার মতো যুক্তি নয়, ধরে রাখার মতো অভ্যাসও। মনে রাখুন আপনি কোথা থেকে এসেছেন। মনে রাখুন, যিনি আপনাকে শুরু করেছেন তিনিই আপনাকে ফিরিয়ে নেবেন। আর আজ সেটাই বেছে নিন, যা সেদিন লেখা দেখে আপনি খুশি হবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Back Before Pride",
          "bn": "অহংকারের আগে পেছনে তাকানো"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it, and none gives an occasion of revelation. What they give is enough: a question, a way of looking, and a conclusion drawn from it. The look that al-Baghawi and as-Sa'di describe can be practised anywhere. It needs only a pause in which a person asks the verse's question of himself and answers it honestly, without ornament and without shame.",
            "bn": "এ আয়াতের জন্য দেখা তাফসীরগুলোর কোনোটিই এর সাথে কোনো হাদীস জোড়েনি, কোনোটিই নাযিলের প্রেক্ষাপটও উল্লেখ করেনি। তারা যা দিয়েছে তা-ই যথেষ্ট: একটা প্রশ্ন, দেখার একটা ধরন, আর তা থেকে টানা একটা সিদ্ধান্ত। বাগাভী ও সা'দী যে দেখার কথা বলেন, তা যেকোনো জায়গায় চর্চা করা যায়। দরকার শুধু একটু থামা, যখন মানুষ আয়াতের প্রশ্নটা নিজেকে করে আর সৎভাবে তার উত্তর দেয়, কোনো সাজসজ্জা ছাড়া, কোনো লজ্জা ছাড়া।"
          },
          {
            "en": "Ibn Kathir's word da'f, weakness, is the key to the practice. Whatever a person has since become, in strength, knowledge or standing, began in something he did not choose and could not have produced. The verse does not ask him to despise himself; it asks him to remember accurately. On the readings above, accurate memory of the beginning bears two fruits: humility before Him who made him, and confidence that He will bring him back.",
            "bn": "এ চর্চার চাবি ইবন কাসীরের শব্দ দা'ফ, মানে দুর্বলতা। মানুষ পরে যা-ই হোক, শক্তিতে, জ্ঞানে বা মর্যাদায়, সবকিছুর শুরু এমন জিনিসে যা সে বেছে নেয়নি, নিজে বানাতেও পারত না। আয়াত তাকে নিজেকে তুচ্ছ ভাবতে বলে না। বলে শুধু ঠিকঠাক মনে রাখতে। ওপরের ব্যাখ্যাগুলো ধরলে শুরুর কথা ঠিকঠাক মনে রাখার দুটি ফল। যিনি সৃষ্টি করেছেন তাঁর সামনে বিনয়, আর এই আস্থা যে তিনিই তাকে আবার ফিরিয়ে আনবেন।"
          },
          {
            "en": "So the verse can be carried as a single question for the moment pride rises or doubt creeps in: from what was I created? The honest answer quiets boasting, because no one can boast of a beginning he did not make. And it steadies faith, because the One who made the first beginning has lost none of His power. Look back, the verse says, and you will know which way to face.",
            "bn": "তাই আয়াতটিকে একটিমাত্র প্রশ্ন হিসেবে সাথে রাখা যায়, যখন অহংকার মাথা তোলে বা সন্দেহ চুপিচুপি ঢোকে: আমাকে কী থেকে সৃষ্টি করা হয়েছে? সৎ উত্তর বড়াই থামিয়ে দেয়, কারণ যে শুরু কেউ নিজে বানায়নি, তা নিয়ে বড়াই চলে না। আবার সেই উত্তর ঈমানকে স্থির করে, কারণ যিনি প্রথম শুরুটা করেছিলেন, তাঁর ক্ষমতা একটুও কমেনি। পেছনে তাকান, আয়াত বলে, তাহলেই বুঝবেন কোন দিকে মুখ ফেরাতে হবে।"
          }
        ]
      }
    ]
  },
  "86:6": {
    "sections": [
      {
        "h": {
          "en": "The Reply in Four Words",
          "bn": "চার শব্দের জবাব"
        },
        "p": [
          {
            "en": "Khuliqa min ma'in dafiq: he was created from a fluid, gushing. Four Arabic words. The verse before ends on a question, mimma khuliq, from what was he created, and this verse is the reply. Al-Qurtubi says so in as many words: khuliqa, he writes, is the answer to the question. As-Sa'di opens his comment with fa-innahu makhluq, for he is created, a small 'for' that leans back on the command to look, and then names the fluid in one word: al-mani.",
            "bn": "খুলিকা মিন মা-ইন দাফিক: তাকে সৃষ্টি করা হয়েছে সবেগে বের হওয়া পানি থেকে। আরবিতে মাত্র চারটি শব্দ। আগের আয়াত শেষ হয়েছিল একটা প্রশ্নে, মিম্মা খুলিক, কী থেকে তাকে সৃষ্টি করা হয়েছে? এ আয়াত সেই প্রশ্নেরই জবাব। কুরতুবী কথাটা সরাসরি বলেন: খুলিকা হলো প্রশ্নের উত্তর। সা'দী তাঁর ব্যাখ্যা শুরু করেন ফা-ইন্নাহু মাখলূক দিয়ে, অর্থাৎ কারণ সে সৃষ্ট। এই ছোট্ট 'কারণ' শব্দটা পেছনের আয়াতের দেখার আদেশের সঙ্গে জোড়া লাগে। তারপর তিনি এক শব্দে পানিটার নাম বলেন: আল-মানী, বীর্য।"
          },
          {
            "en": "The verb khuliqa is passive: he was created, with the doer left unnamed, and the subject of the sentence is the one acted upon. Dafiq is an active participle describing the water. English renderings already part ways over it. The app's English translation has a fluid, ejected; the abridged English of Ibn Kathir has a water gushing forth; Ma'arif al-Qur'an has a spouting water. Those differences are not careless. They reflect a question of grammar that the commentators raise themselves, and the article returns to it below.",
            "bn": "খুলিকা ক্রিয়াটি কর্মবাচ্যে: তাকে সৃষ্টি করা হয়েছে, কে করেছেন তা এখানে বলা হয়নি। বাক্যের কর্তা যে, সে আসলে কাজটা গ্রহণকারী। দাফিক কর্তৃবাচক বিশেষণ, পানির গুণ বলছে। ইংরেজি অনুবাদগুলো এখানেই আলাদা হয়ে যায়। এই অ্যাপের ইংরেজি অনুবাদে আছে বের করে দেওয়া পানি, ইবন কাসীরের সংক্ষিপ্ত ইংরেজিতে সবেগে বেরিয়ে আসা পানি, মাআরিফুল কুরআনে ছিটকে বের হওয়া পানি। এ পার্থক্য অসাবধানতার ফল নয়। এর পেছনে ব্যাকরণের একটা প্রশ্ন আছে, যা মুফাসসিররা নিজেরাই তুলেছেন। লেখার সামনের অংশে সে প্রশ্নে আবার ফিরব।"
          },
          {
            "en": "The companion article on 86:5 has already set this verse beside 32:8 and 77:20, discussed the plain register in which the Qur'an names this beginning, and followed the argument forward to the return promised in 86:8. None of that is repeated here. This article stays with the four words themselves: what the commentators consulted for this verse say the water is, whose it is, and what kind of word dafiq is, with each reading kept under its own name.",
            "bn": "৮৬:৫ আয়াতের সঙ্গী লেখায় এ আয়াতকে ৩২:৮ ও ৭৭:২০ আয়াতের পাশে রেখে দেখা হয়েছে। মানুষের শুরুর কথা কুরআন যে সাদামাটা ভাষায় বলে, সেটা নিয়েও কথা হয়েছে, আর যুক্তিটাকে অনুসরণ করা হয়েছে ৮৬:৮ আয়াতের ফিরিয়ে আনার প্রতিশ্রুতি পর্যন্ত। সেসব এখানে আর বলা হবে না। এই লেখা থাকবে চারটি শব্দের ভেতরেই। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, সেগুলো পানিটাকে কী বলে, পানিটা কার, আর দাফিক কেমন শব্দ, সেটুকুই। প্রতিটি মত থাকবে যাঁর মত, তাঁর নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Fluid Plainly",
          "bn": "পানিটার সোজা নাম"
        },
        "p": [
          {
            "en": "What is the water? As-Sa'di, al-Baghawi, al-Qurtubi and Ibn Kathir all answer with the same word, al-mani. As-Sa'di stops there. Al-Baghawi adds masbub fi al-rahim, poured into the womb, and al-Qurtubi reports that same gloss from al-Farra' and al-Akhfash. The Muyassar, which paraphrases 86:5 to 86:8 as one passage, writes of mani poured swiftly into the womb. Ibn Kathir describes it as coming out dafqan, in a gush, which is simply the verbal noun of the verse's own word.",
            "bn": "পানিটা কী? সা'দী, বাগাভী, কুরতুবী ও ইবন কাসীর সবাই একই শব্দে উত্তর দেন: আল-মানী। সা'দী সেখানেই থামেন। বাগাভী যোগ করেন মাসবূব ফির রাহিম, অর্থাৎ জরায়ুতে ঢেলে দেওয়া। কুরতুবী এই একই ব্যাখ্যা উদ্ধৃত করেন ফাররা ও আখফাশ থেকে। মুয়াসসার ৮৬:৫ থেকে ৮৬:৮ পর্যন্ত আয়াতগুলোকে এক টানা অংশ হিসেবে ব্যাখ্যা করে। সেখানে আছে দ্রুত বেগে জরায়ুতে ঢেলে দেওয়া বীর্যের কথা। ইবন কাসীর বলেন, তা বের হয় দাফকান, অর্থাৎ সবেগে। শব্দটা আয়াতের নিজের শব্দেরই ক্রিয়াবিশেষ্য।"
          },
          {
            "en": "At-Tabari, in the text filed under this verse, does not name the substance at all. He restates the phrase as min ma'in madfuq, from a water poured, and spends the rest of his comment on grammar. What stands out across all of them is how little they say. Each gives a line or two, in ordinary words, and moves on. Nobody dwells, and nobody turns coy. This article follows the same discipline: what the commentators say, in the words they use, and nothing added.",
            "bn": "তাবারীর যে লেখাটা এ আয়াতের ঘরে রাখা আছে, সেখানে তিনি জিনিসটার নামই নেন না। বাক্যাংশটাকে নতুন করে বলেন মিন মা-ইন মাদফূক, ঢেলে দেওয়া পানি থেকে। বাকি আলোচনা পুরোটাই ব্যাকরণ নিয়ে। সবার লেখায় একটা জিনিস চোখে পড়ে: তাঁরা কত কম বলেন। প্রত্যেকে এক-দুই লাইন লেখেন, সাধারণ ভাষায়, তারপর এগিয়ে যান। কেউ বিষয়টা টেনে লম্বা করেন না, আবার লজ্জায় এড়িয়েও যান না। এই লেখাও সেই নিয়ম মেনে চলবে। মুফাসসিররা যা বলেন, যে ভাষায় বলেন, ততটুকুই। নিজের থেকে কিছু যোগ হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Waters, Named as One",
          "bn": "দুই পানি, এক নামে"
        },
        "p": [
          {
            "en": "Whose water is it? Ibn Kathir's Arabic answers in one sentence: it comes out in a gush from the man and from the woman, and the child is generated from the two of them bi-idhni Allah, by the permission of Allah, mighty and majestic is He. The abridged English keeps the sense: the child is produced from both of them by the permission of Allah. The closing words matter. Both parents are named, and the outcome is still placed under His leave.",
            "bn": "পানিটা কার? ইবন কাসীরের আরবি এক বাক্যে উত্তর দেয়: তা সবেগে বের হয় পুরুষ থেকে এবং নারী থেকে, আর দুজনের কাছ থেকে সন্তান জন্ম নেয় বি-ইযনিল্লাহ, মহান ও প্রতাপশালী আল্লাহর অনুমতিতে। সংক্ষিপ্ত ইংরেজিতেও কথাটা একই থাকে: দুজন থেকেই সন্তান তৈরি হয় আল্লাহর অনুমতিতে। শেষ কথাগুলোর ওজন আছে। বাবা-মা দুজনের নামই এসেছে, তবু ফলটা রাখা হয়েছে তাঁর অনুমতির অধীনে।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi say the same and then explain why the verse uses a singular noun. Al-Qurtubi: arada ma'ayn, He meant two waters, the water of the man and the water of the woman, because the human being is created from both, but He made them one water li-mtizajihima, because the two mix. Al-Baghawi says it in nearly the same words: the child is created from both, and He made it one because they mix. The singular, on their reading, describes a joining.",
            "bn": "কুরতুবী ও বাগাভীও একই কথা বলেন, তারপর ব্যাখ্যা দেন আয়াতে একবচন কেন। কুরতুবী লেখেন: আরাদা মা-আইন, আল্লাহ দুই পানি বুঝিয়েছেন, পুরুষের পানি ও নারীর পানি, কারণ মানুষ দুটো থেকেই সৃষ্টি। তবে দুটোকে এক পানি বলেছেন লি-ইমতিযাজিহিমা, কারণ দুটো মিশে যায়। বাগাভীও প্রায় একই ভাষায় বলেন: সন্তান দুজন থেকেই সৃষ্টি, মিশে যায় বলে তাকে এক বলা হয়েছে। তাঁদের পাঠে একবচন শব্দটা আসলে একটা মিলনের ছবি।"
          },
          {
            "en": "One gloss is absent. None of the texts consulted for this verse limits the water to the man's alone. As-Sa'di names al-mani without saying whose it is, and at-Tabari's comment here does not take the question up. So the reading of both waters is stated by Ibn Kathir, al-Qurtubi and al-Baghawi, and where a commentator is silent this article leaves him silent rather than guessing what he would have said.",
            "bn": "একটা ব্যাখ্যা এখানে নেই। এ আয়াতের জন্য যে লেখাগুলো আনা হয়েছে, তার কোনোটাই পানিটাকে শুধু পুরুষের বলে সীমিত করে না। সা'দী আল-মানী বলেছেন, কার তা বলেননি। তাবারীর এখানকার লেখা এ প্রশ্নে যায়ইনি। কাজেই দুই পানির কথা স্পষ্ট করে বলেছেন ইবন কাসীর, কুরতুবী ও বাগাভী। যেখানে কোনো মুফাসসির চুপ, এ লেখা তাঁকে চুপই থাকতে দেয়। তিনি কী বলতেন, তা আন্দাজ করে বসিয়ে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Doer's Form, a Receiver's Sense",
          "bn": "রূপে কর্তা, অর্থে কর্ম"
        },
        "p": [
          {
            "en": "Now the word itself. Dafiq has the pattern fa'il, the form Arabic uses for the doer of an action. Yet the water does not obviously pour itself. At-Tabari meets this directly. He glosses dafiq as madfuq, poured, and says it is among the words the Arabs bring out in the form of fa'il while it carries the meaning of maf'ul, the thing acted upon. He adds, under 'it is said', that the people of the Hijaz use this most, when the word serves as a description.",
            "bn": "এবার শব্দটা নিজেই। দাফিক এসেছে ফা'ইল ছাঁচে, আরবিতে যে ছাঁচ কাজটা যে করে তার জন্য। অথচ পানি নিজে নিজেকে ঢালে, এমন তো সহজে বলা যায় না। তাবারী সমস্যাটার মুখোমুখি হন সরাসরি। তিনি দাফিকের অর্থ করেন মাদফূক, ঢেলে দেওয়া। তাঁর কথায়, আরবরা কিছু শব্দ ফা'ইল রূপে বলে, কিন্তু অর্থ থাকে মাফ'ঊলের, অর্থাৎ যার উপর কাজটা ঘটে। 'বলা হয়' কথাটি জুড়ে তিনি যোগ করেন, হিজাযের লোকেরাই এর ব্যবহার সবচেয়ে বেশি করে, যখন শব্দটা গুণবাচক হিসেবে আসে।"
          },
          {
            "en": "His examples are sirrun katim and hammun nasib, phrases built the same way. Al-Qurtubi uses the first of them and spells it out: sirrun katim means maktum, a secret that is kept, not one that keeps. He defines al-dafq as the pouring of water, gives the verb in the first person, dafaqtu al-ma'a, I poured the water, and so ma'un dafiq means madfuq. He traces it to the verb used in the form whose doer is not named.",
            "bn": "তাবারীর উদাহরণ সিররুন কাতিম ও হাম্মুন নাসিব, একই ধাঁচে গড়া দুটি কথা। কুরতুবী প্রথমটি ব্যবহার করে খুলে বলেন: সিররুন কাতিম মানে মাকতূম, গোপন রাখা রহস্য, যে রহস্য নিজে কিছু গোপন রাখে তা নয়। তিনি আদ-দাফককে সংজ্ঞায়িত করেন পানি ঢালা হিসেবে। ক্রিয়াটা দেন উত্তম পুরুষে, দাফাকতুল মা-আ, আমি পানি ঢাললাম। কাজেই মা-উন দাফিক মানে মাদফূক। শব্দটার মূল তিনি খোঁজেন সেই ক্রিয়ায়, যার কর্তার নাম নেওয়া হয় না।"
          },
          {
            "en": "Al-Baghawi reaches the same place with an example from the Qur'an. He writes madfuq, poured into the womb, and then: fa'il bi-ma'na maf'ul, an active form with a passive sense, ka-qawlihi, like His words 'ishatin radiyah in 69:21, meaning mardiyyah. Read that way, the life in 69:21 is not itself pleased; it is a life found pleasing. So too, on this reading, the water in 86:6 is not doing the pouring. It is poured.",
            "bn": "বাগাভী একই জায়গায় পৌঁছান কুরআনের একটা উদাহরণ দিয়ে। তিনি লেখেন মাদফূক, জরায়ুতে ঢেলে দেওয়া। তারপর বলেন: ফা'ইল বি-মা'না মাফ'ঊল, রূপে কর্তৃবাচক, অর্থে কর্মবাচক। যেমন আল্লাহর বাণী ৬৯:২১ আয়াতে 'ঈশাতির রাদিয়াহ, যার মানে মারদিয়্যাহ। এভাবে পড়লে ৬৯:২১ আয়াতের জীবনটা নিজে সন্তুষ্ট নয়, বরং এমন জীবন যা পছন্দনীয়। এই পাঠ অনুযায়ী ৮৬:৬ আয়াতের পানিও ঢালছে না, তাকে ঢালা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Water With Its Own Rush",
          "bn": "নাকি নিজের বেগে ছোটা পানি"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave it there. He reports a second account from az-Zajjaj: min ma'in dhi indifaq, from a water possessed of a gushing. The model is a set of words like dari', faris and nabil, which mean the man with armour, the man with a horse, the man with arrows. The pattern names someone who has a thing, not someone who does it. Al-Qurtubi calls this the school of Sibawayh, and draws the conclusion: the dafiq is what gushes out by the force of its strength.",
            "bn": "কুরতুবী এখানেই থামেন না। তিনি যাজ্জাজ থেকে দ্বিতীয় একটা ব্যাখ্যা আনেন: মিন মা-ইন যী ইনদিফাক, এমন পানি থেকে যার মধ্যে বেগ আছে। নমুনা হিসেবে আছে দারি', ফারিস ও নাবিলের মতো শব্দ। এদের মানে বর্মওয়ালা, ঘোড়াওয়ালা, তীরওয়ালা। এখানে ছাঁচটা বোঝায় যার কাছে জিনিসটা আছে, যে কাজটা করছে তাকে নয়। কুরতুবী একে সিবাওয়াইহির মত বলে উল্লেখ করেন। তারপর সিদ্ধান্ত টানেন: দাফিক হলো যা নিজের শক্তির জোরে সবেগে বেরিয়ে আসে।"
          },
          {
            "en": "So the commentators give two grammars for one word. On the first, from at-Tabari and al-Baghawi, and from al-Farra' and al-Akhfash as al-Qurtubi reports them, dafiq is active in form and passive in sense: poured. On the second, from az-Zajjaj in the school of Sibawayh, it describes water that has a rush of its own. Al-Qurtubi records both. This article keeps both and chooses neither. The difference is about how the word works; on what the water is, they agree.",
            "bn": "তাহলে একটি শব্দের জন্য দুই রকম ব্যাকরণ। প্রথম মতে দাফিক রূপে কর্তৃবাচক, অর্থে কর্মবাচক, মানে ঢেলে দেওয়া। এ মত তাবারী ও বাগাভীর, আর কুরতুবীর বর্ণনায় ফাররা ও আখফাশেরও। দ্বিতীয় মত যাজ্জাজের, সিবাওয়াইহির ধারায়। সেখানে শব্দটা বোঝায় এমন পানি, যার নিজেরই বেগ আছে। কুরতুবী দুটোই লিখে রেখেছেন। এই লেখাও দুটোই রাখে, কোনোটা বেছে নেয় না। মতভেদ শব্দটা কীভাবে কাজ করে তা নিয়ে। পানিটা কী, সে বিষয়ে তাঁরা একমত।"
          },
          {
            "en": "Al-Qurtubi closes with two smaller notes. People say dafaqa Allahu ruhahu, may Allah pour out his soul, when praying for someone's death, which shows the verb at work outside this verse. And by way of 'Ikrimah from Ibn 'Abbas (RA) he records a single-word gloss of dafiq: lazij, thick or viscous. That gloss speaks of texture rather than motion. Al-Qurtubi gives it with those two names only and adds no comment, and it is reported here exactly as he gives it.",
            "bn": "কুরতুবী শেষ করেন দুটি ছোট কথা দিয়ে। কারও মৃত্যু কামনা করে বদদোয়া দিতে লোকে বলে দাফাকাল্লাহু রূহাহু, অর্থাৎ আল্লাহ তার প্রাণ ঢেলে দিন। এতে বোঝা যায়, এ আয়াতের বাইরেও ক্রিয়াটা কীভাবে চলে। আর ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে তিনি দাফিকের এক শব্দের ব্যাখ্যা উল্লেখ করেন: লাযিজ, ঘন বা আঠালো। এ ব্যাখ্যা নড়াচড়ার কথা বলে না, বলে গঠনের কথা। কুরতুবী শুধু এই দুই নাম দিয়ে কথাটা আনেন, কোনো মন্তব্য যোগ করেন না। এখানেও তা ঠিক সেভাবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Four Words End",
          "bn": "চার শব্দ যেখানে শেষ"
        },
        "p": [
          {
            "en": "The verse that follows, 86:7, says the water comes out from between the backbone and the ribs. That is its own verse, with its own questions, and here it is only named. Ma'arif al-Qur'an comments on 86:6 and 86:7 together, and nearly all of that comment, including what it reports from embryological research, concerns the place named in 86:7. It belongs with that verse and is left there, as is the Muyassar's and the abridged Ibn Kathir's reading of where the water comes from.",
            "bn": "পরের আয়াত ৮৬:৭ বলে, পানিটা বের হয় মেরুদণ্ড ও পাঁজরের মাঝখান থেকে। সেটা আলাদা আয়াত, তার প্রশ্নও আলাদা। এখানে শুধু তার নাম নেওয়া হলো। মাআরিফুল কুরআন ৮৬:৬ ও ৮৬:৭ আয়াতের ব্যাখ্যা একসঙ্গে দেয়। সেই আলোচনার প্রায় পুরোটাই, ভ্রূণবিদ্যার গবেষণা থেকে সে যা উদ্ধৃত করে তা-সহ, ৮৬:৭ আয়াতে বলা জায়গাটা নিয়ে। ওটা সেই আয়াতেরই বিষয়, তাই সেখানেই রইল। পানিটা কোথা থেকে আসে, এ নিয়ে মুয়াসসার ও সংক্ষিপ্ত ইবন কাসীরের কথাও সেখানেই থাকল।"
          },
          {
            "en": "None of the commentators consulted for 86:6 itself draws a scientific claim out of these four words, and this article adds none of its own. They explain a word, its grammar and whose water it is, in a line or two each, and stop. Nor does any of them attach a hadith of the Prophet ﷺ to this verse. The narrations in Ibn Kathir's grouped comment concern reciting the surah, the word tariq and the Day of 86:9, not this verse, and none is used here.",
            "bn": "৮৬:৬ আয়াতের জন্য যে মুফাসসিরদের লেখা আনা হয়েছে, তাঁদের কেউ এই চার শব্দ থেকে কোনো বৈজ্ঞানিক দাবি বের করেন না। এ লেখাও নিজের থেকে তেমন কিছু যোগ করে না। তাঁরা এই চারটি শব্দের একটির অর্থ, তার ব্যাকরণ আর পানিটা কার, এটুকু এক-দুই লাইনে বলেন, তারপর থামেন। এ আয়াতের সঙ্গে তাঁদের কেউ নবী ﷺ-এর কোনো হাদিসও জুড়ে দেননি। ইবন কাসীরের সম্মিলিত আলোচনায় যে বর্ণনাগুলো আছে, সেগুলো সূরাটি তিলাওয়াত, তারিক শব্দটি আর ৮৬:৯ আয়াতের দিনটি নিয়ে, এ আয়াত নিয়ে নয়। তাই এখানে কোনোটাই নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Created, and Not Consulted",
          "bn": "সৃষ্ট, অথচ জিজ্ঞাসিত নয়"
        },
        "p": [
          {
            "en": "Set the grammar dispute beside the verb and something stands out. Whether dafiq means poured or rushing with its own force, khuliqa is passive. The person this verse describes is not the one acting. He did not choose his beginning, arrange it or agree to it. On the first reading even the water is acted upon; on the second it has force, but the force is not his. Either way, the sentence about his origin has him only as its object.",
            "bn": "ব্যাকরণের মতভেদটাকে ক্রিয়াপদের পাশে রাখলে একটা জিনিস চোখে পড়ে। দাফিক মানে ঢেলে দেওয়া হোক বা নিজের জোরে ছোটা, খুলিকা কর্মবাচ্যেই থাকে। আয়াত যে মানুষের কথা বলছে, কাজটা সে করছে না। নিজের শুরু সে বাছেনি, সাজায়নি, তাতে সম্মতিও দেয়নি। প্রথম পাঠে পানিটার উপরও কাজ ঘটছে। দ্বিতীয় পাঠে পানির নিজের বেগ আছে, কিন্তু সে বেগ মানুষটার নয়। যেভাবেই পড়ুন, নিজের উৎসের কথা যে বাক্যে, সেখানে সে কেবল কর্ম, কর্তা নয়।"
          },
          {
            "en": "Ibn Kathir's sentence adds the other half. The child comes from both parents, and it comes bi-idhni Allah, by the permission of Allah. The parents' part is real and both of them are named, yet the outcome rests on His leave. A reader who takes this in has a reason for two kinds of gratitude at once: to the Maker who permitted his existence, and to the two people through whom it came.",
            "bn": "ইবন কাসীরের বাক্য বাকি অর্ধেকটা যোগ করে। সন্তান আসে বাবা-মা দুজনের কাছ থেকে, আর আসে বি-ইযনিল্লাহ, আল্লাহর অনুমতিতে। বাবা-মায়ের ভূমিকা সত্য, দুজনের কথাই বলা হয়েছে। তবু ফলটা নির্ভর করে তাঁর অনুমতির উপর। যে পাঠক কথাটা মনে গেঁথে নেন, তাঁর কাছে একসঙ্গে দুই রকম শোকরের কারণ থাকে। একটা সেই স্রষ্টার প্রতি, যিনি তাঁর অস্তিত্বের অনুমতি দিয়েছেন। আরেকটা সেই দুজন মানুষের প্রতি, যাঁদের মধ্য দিয়ে তিনি এসেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Plain Speech About the Body",
          "bn": "শরীর নিয়ে সাদা কথা"
        },
        "p": [
          {
            "en": "There is a lesson in the commentators' manner as well as their content. They speak of the human beginning without embarrassment and without excess. As-Sa'di needs one word. The others name the fluid, the womb and the two parents, and then turn to grammar. That is a model for speaking of the body at all: plainly, briefly and honestly, neither coarse nor evasive. The verse is Allah's own speech, recited in prayer, and nothing in it is shameful to say aloud.",
            "bn": "মুফাসসিররা কী বলেন, তাতে যেমন শিক্ষা আছে, কীভাবে বলেন, তাতেও আছে। মানুষের শুরুর কথা তাঁরা বলেন লজ্জা ছাড়া, বাড়াবাড়িও ছাড়া। সা'দীর লেগেছে একটিমাত্র শব্দ। অন্যরা পানি, জরায়ু আর বাবা-মা দুজনের কথা বলে ব্যাকরণে চলে যান। শরীর নিয়ে কথা বলার এটাই নমুনা: সোজাসুজি, সংক্ষেপে, সততার সঙ্গে। অশালীনও নয়, এড়িয়ে যাওয়াও নয়। আয়াতটা আল্লাহর নিজের কালাম, নামাজে তিলাওয়াত হয়। এর কোনো কথাই মুখে আনতে লজ্জার নয়।"
          },
          {
            "en": "And the verse still answers pride. Whatever a person has since made of himself, the honest answer to 'from what?' is these four words, given without ornament. The fitting response is not shame, since the Qur'an itself names this beginning, but a quieter estimate of oneself. Whoever was poured, or came in a rush he did not command, is in no position to call himself self-made. What remains is thanks to the Maker who formed him.",
            "bn": "তবু আয়াতটা অহংকারের জবাব দেয়। পরে মানুষ নিজেকে যত কিছুই বানিয়ে থাকুক, 'কী থেকে?' প্রশ্নের সৎ উত্তর এই চারটি শব্দ, কোনো সাজসজ্জা ছাড়া। এর উপযুক্ত প্রতিক্রিয়া লজ্জা নয়, কারণ কুরআন নিজেই এই শুরুর নাম নিয়েছে। উপযুক্ত প্রতিক্রিয়া হলো নিজের সম্পর্কে একটু নরম হিসাব। যাকে ঢেলে দেওয়া হয়েছে, কিংবা যে এসেছে এমন বেগে যার উপর তার কোনো হুকুম ছিল না, সে নিজেকে স্বয়ম্ভূ বলতে পারে না। বাকি থাকে শুধু তাঁর শোকর, যিনি তাকে বানিয়েছেন।"
          }
        ]
      }
    ]
  },
  "86:11": {
    "sections": [
      {
        "h": {
          "en": "Two Witnesses, Three Words Each",
          "bn": "দুই সাক্ষী, তিন শব্দের দুই আয়াত"
        },
        "p": [
          {
            "en": "Wa-s-sama'i dhati ar-raj': by the sky that has the returning. The next verse completes the pair: wa-l-ardi dhati as-sad', and by the earth that has the splitting. Each verse is three words in the Arabic text, and both are built the same way: the wa of an oath, a part of creation, then dhat, possessor of, followed by a single noun. The surah opened in 86:1 with an oath by the sky and at-tariq. Here the sky returns, this time beside the earth, and each is named by one thing it does.",
            "bn": "ওয়াস সামাই যাতির রাজ': শপথ সেই আকাশের, যার আছে ফিরে আসা। পরের আয়াত জোড়াটা পূর্ণ করে: ওয়াল আরদি যাতিস সাদ', আর শপথ সেই জমিনের, যার আছে ফেটে যাওয়া। আরবি পাঠে দুটি আয়াতই তিনটি শব্দের, গড়নও এক। প্রথমে শপথের ওয়া, তারপর সৃষ্টির একটি অংশ, তারপর যাত, মানে অধিকারী, আর শেষে একটিমাত্র বিশেষ্য। সূরার শুরুতে ৮৬:১ আয়াতে শপথ ছিল আকাশ আর তারিকের। এখানে আকাশ আবার ফিরে এসেছে, এবার জমিনের পাশে। দুটোকেই চেনানো হয়েছে তাদের একটি করে কাজ দিয়ে।"
          },
          {
            "en": "The commentators mark the shift. As-Sa'di writes that Allah then swore a second oath on the truthfulness of the Qur'an, and he explains the two verses together. Al-Baghawi opens his note with the words then He mentioned another oath, and al-Qurtubi closes his note on 86:11 with: and this is an oath. The Muyassar explains 86:11 to 86:14 as one passage. The oath's answer is 86:13, the decisive word, which has its own entry; this article stays with the two witnesses and what each word names.",
            "bn": "তাফসীরকারেরা এই মোড়টা চিহ্নিত করেছেন। সা'দী লেখেন, এরপর আল্লাহ কুরআনের সত্যতার উপর দ্বিতীয় একটি শপথ করলেন। দুটি আয়াতের ব্যাখ্যাও তিনি দেন একসঙ্গে। বাগাভী তাঁর আলোচনা শুরু করেন এই বলে: তারপর তিনি আরেকটি শপথ উল্লেখ করলেন। কুরতুবী ৮৬:১১-এর আলোচনা শেষ করেন এক বাক্যে: আর এটি একটি শপথ। মুয়াসসার ৮৬:১১ থেকে ৮৬:১৪ পর্যন্ত একটানা ব্যাখ্যা করে। শপথের জবাব ৮৬:১৩ আয়াতে, সেই চূড়ান্ত বাণী, যার আলাদা আলোচনা আছে। এ লেখা থাকবে শুধু দুই সাক্ষী আর তাদের দুই শব্দের অর্থ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Poets Used for Rain",
          "bn": "কবিদের ভাষায় বৃষ্টির নাম"
        },
        "p": [
          {
            "en": "Raj' is a verbal noun from the root r-j-', to return. Al-Qurtubi reports that the people of language said raj' means rain, and he quotes al-Khalil: raj' is the rain itself, and raj' is also the plants of spring. He adds that rain is sometimes called awb, another word for coming back, just as it is called raj'. He cites a line of poetry about a lofty peak whose summit nothing reaches except the clouds, the awb and the downpour. On this account, Arabic already named rain by a word for return.",
            "bn": "রাজ' শব্দটি এসেছে র-জ-আ ধাতু থেকে, যার অর্থ ফিরে আসা। কুরতুবী জানান, ভাষাবিদেরা বলেছেন রাজ' মানে বৃষ্টি। খলীলের কথাও তিনি তুলে আনেন: রাজ' হলো খোদ বৃষ্টি, আবার বসন্তের গাছগাছালিকেও রাজ' বলা হয়। কুরতুবী আরও বলেন, বৃষ্টিকে যেমন রাজ' বলা হয়, তেমনি কখনো আওবও বলা হয়, আর আওব শব্দেও আছে ফিরে আসার অর্থ। প্রমাণ হিসেবে তিনি একটি কবিতার চরণ আনেন। তাতে এক উঁচু চূড়ার বর্ণনা, যার শিখরে মেঘ, আওব আর মুষলধারা ছাড়া কিছুই পৌঁছায় না। এই হিসাবে আরবি ভাষা বৃষ্টিকে আগে থেকেই ফিরে আসার একটি শব্দে ডাকত।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both cite a line by al-Mutanakhkhil that describes a sword as white like the raj'. Al-Qurtubi explains that the poet likens the sword to water. Such a simile only works if raj' already meant rain to the listener. At-Tabari sets the line straight after his own paraphrase, introducing it with wa-minhu, and of this usage is. The word, then, was not coined by the commentators to fit the verse. It was a usage they could point to in the poetry the Arabs already knew.",
            "bn": "তাবারী ও কুরতুবী দুজনেই মুতানাখখিলের একটি চরণ উদ্ধৃত করেন, যেখানে একটি তলোয়ারকে বলা হয়েছে রাজ'-এর মতো সাদা। কুরতুবী বুঝিয়ে দেন, কবি তলোয়ারকে পানির সঙ্গে তুলনা করেছেন। এমন উপমা তখনই খাটে, যখন শ্রোতার কাছে রাজ' মানেই বৃষ্টি। তাবারী নিজের ব্যাখ্যার ঠিক পরেই চরণটি বসান, ওয়া মিনহু বলে, অর্থাৎ এ ব্যবহারেরই নমুনা। কাজেই আয়াতের সঙ্গে মেলাতে তাফসীরকারেরা শব্দটি বানিয়ে নেননি। আরবদের চেনা কবিতাতেই এ ব্যবহার ছিল, আর তাঁরা সেদিকেই আঙুল তুলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain After Rain",
          "bn": "বৃষ্টির পরে বৃষ্টি"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the main reading in a line: the sky that has rain, returning every year with rain after rain, and he says this is what the general body of commentators said. Al-Baghawi agrees, calling it the sky of rain because rain returns every year and repeats. Ibn Kathir's Arabic gathers three reports from Ibn 'Abbas: raj' is rain; it is the clouds that hold rain; and, of the whole phrase, it rains and then rains again. The Muyassar's gloss is short: the sky of repeated rain.",
            "bn": "কুরতুবী মূল ব্যাখ্যাটা দেন এক লাইনে: বৃষ্টির অধিকারী আকাশ, যা প্রতি বছর বৃষ্টির পর বৃষ্টি নিয়ে ফিরে আসে। তিনি জানান, সাধারণভাবে তাফসীরকারেরা এ কথাই বলেছেন। বাগাভীও একমত। তাঁর ভাষায় এটি বৃষ্টির আকাশ, কারণ বৃষ্টি প্রতি বছর ফিরে আসে, বারবার হয়। ইবন কাসীরের আরবি তাফসীরে ইবন আব্বাস (রাঃ) থেকে তিনটি বর্ণনা একসঙ্গে পাওয়া যায়। রাজ' মানে বৃষ্টি। রাজ' মানে বৃষ্টিভরা মেঘ। আর পুরো বাক্যাংশের অর্থ, বৃষ্টি হয়, তারপর আবার বৃষ্টি হয়। মুয়াসসারের ব্যাখ্যা সংক্ষিপ্ত: বারবার বৃষ্টি দেওয়া আকাশ।"
          },
          {
            "en": "At-Tabari supplies the chains. Through 'Ikrimah, Ibn 'Abbas said: the clouds with rain in them, and in a second wording, the sky that has clouds with rain in them. Through another chain he said raj' means the drops of rain and provision, every year. Ad-Dahhak said simply: rain. Mujahid described the movement: the clouds rain, then return with rain. Al-Baghawi likewise reports Ibn 'Abbas: it is the clouds that return with rain. Ma'arif al-Qur'an keeps to the same picture, rain that comes down, stops, and then returns.",
            "bn": "বর্ণনার সূত্রগুলো দেন তাবারী। ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) বলেছেন: বৃষ্টিভরা মেঘ। আরেক শব্দে: বৃষ্টিভরা মেঘের অধিকারী আকাশ। ভিন্ন এক সূত্রে তিনি বলেছেন, রাজ' মানে বৃষ্টির ফোঁটা আর রিযিক, প্রতি বছর। দাহহাক বলেছেন শুধু একটি শব্দ: বৃষ্টি। মুজাহিদ বর্ণনা করেছেন চলাচলটা: মেঘ বৃষ্টি ঝরায়, তারপর বৃষ্টি নিয়ে আবার ফিরে আসে। বাগাভীও ইবন আব্বাস (রাঃ) থেকে একই কথা আনেন: এ সেই মেঘ, যা বৃষ্টি নিয়ে ফিরে আসে। মাআরিফুল কুরআনের ছবিটাও এক। বৃষ্টি নামে, থামে, তারপর আবার ফিরে আসে।"
          },
          {
            "en": "Two shades sit inside this agreement. One places the return in the rain itself, coming back season after season. The other places it in the clouds, which empty and come back full. Ibn 'Abbas is reported with both, and the books set them side by side without ranking one over the other. This article does not turn Mujahid's few words into a lesson in physics or a modern theory of water. He describes what anyone who watches the sky can see, and that is all the text attributes to him.",
            "bn": "এই ঐকমত্যের ভেতরেও দুটি সূক্ষ্ম ভিন্নতা আছে। একটি মতে ফিরে আসাটা খোদ বৃষ্টির, মৌসুমের পর মৌসুম যা ফিরে আসে। অন্য মতে ফিরে আসাটা মেঘের, যা খালি হয়ে আবার ভরা অবস্থায় ফেরে। ইবন আব্বাস (রাঃ) থেকে দুটো কথাই বর্ণিত, আর কিতাবগুলো একটিকে অন্যটির উপর প্রাধান্য না দিয়ে পাশাপাশি রেখেছে। মুজাহিদের এই অল্প কথাকে এ লেখা পদার্থবিদ্যার পাঠ বা পানি নিয়ে কোনো আধুনিক তত্ত্ব বানাবে না। আকাশের দিকে যে-ই তাকায়, সে যা দেখে, মুজাহিদ সেটুকুই বলেছেন। তাঁর নামে পাঠে এর বেশি কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Provision Sent Back Each Year",
          "bn": "প্রতি বছর ফেরত আসা রিযিক"
        },
        "p": [
          {
            "en": "Several of the early authorities hear raj' less as weather than as livelihood. Qatadah, in at-Tabari's chain through Sa'id, said: it returns with the provision of the servants every year, and were it not for that they would perish and their livestock would perish. Ibn Kathir's Arabic carries the same words from Qatadah. Through Ma'mar, Qatadah is reported more briefly: it returns with the ghayth, the rain, every year. Al-Hasan said: it returns with people's provisions every year. For these men, the sky gives back a living.",
            "bn": "প্রথম যুগের কয়েকজন রাজ' শব্দে আবহাওয়ার চেয়ে জীবিকার কথাই বেশি শুনেছেন। সাঈদের সূত্রে তাবারী কাতাদার কথা আনেন: আকাশ প্রতি বছর বান্দাদের রিযিক নিয়ে ফিরে আসে। তা না হলে তারা ধ্বংস হয়ে যেত, তাদের গবাদি পশুও ধ্বংস হতো। ইবন কাসীরের আরবি তাফসীরেও কাতাদার এই কথাই আছে। মা'মারের সূত্রে কাতাদার কথা আরও ছোট: আকাশ প্রতি বছর গাইস, অর্থাৎ বৃষ্টি, নিয়ে ফিরে আসে। হাসান বলেছেন: প্রতি বছর মানুষের রিযিক নিয়ে ফিরে আসে। তাঁদের চোখে আকাশ ফিরিয়ে দেয় মানুষের জীবিকা।"
          },
          {
            "en": "Abu Raja', who narrated al-Hasan's words, adds that 'Ikrimah was asked about the verse and said: it came back with the rain. At-Tabari's own paraphrase joins the two strands, the sky returning with the clouds and with the provisions of the servants every year. He says the people of interpretation said something like this, then lists the reports above. As-Sa'di draws out the consequence. The sky returns with rain every year and the earth splits for plants, and by that, he says, human beings and animals live.",
            "bn": "হাসানের কথাটি যিনি বর্ণনা করেছেন, সেই আবু রাজা যোগ করেন: ইকরিমাকে আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেছিলেন, আকাশ বৃষ্টি নিয়ে ফিরে এসেছে। তাবারী নিজের ব্যাখ্যায় দুটি ধারাকে এক করেছেন। তাঁর ভাষায়, আকাশ প্রতি বছর মেঘ নিয়ে আর বান্দাদের রিযিক নিয়ে ফিরে আসে। তিনি বলেন, ব্যাখ্যাকারেরা এ রকমই বলেছেন, তারপর উপরের বর্ণনাগুলো সাজিয়ে দেন। সা'দী এর ফলটা স্পষ্ট করেন। আকাশ প্রতি বছর বৃষ্টি নিয়ে ফেরে, জমিন ফেটে চারা বের হয়, আর তাঁর ভাষায়, এতেই মানুষ আর পশুপাখি বেঁচে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sky's Other Returns",
          "bn": "আকাশের আরও কিছু ফিরে আসা"
        },
        "p": [
          {
            "en": "A minority reading moves the return from rain to the heavenly bodies. At-Tabari introduces it with and others said: its sun and moon set and rise. He gives it from Ibn Zayd, who said: its sun, its moon and its stars come from here. Ibn Kathir reports the same from Ibn Zayd, with the verb return: its stars, sun and moon return. Al-Qurtubi words Ibn Zayd's view as the sun, moon and stars returning in the sky, rising from one side and setting in another. At-Tabari lists this view after the rain reports.",
            "bn": "অল্প কয়েকজনের মতে ফিরে আসাটা বৃষ্টির নয়, আকাশের জ্যোতিষ্কগুলোর। তাবারী এ মতটি আনেন 'অন্যরা বলেছেন' বলে: আকাশের সূর্য আর চাঁদ অস্ত যায়, আবার ওঠে। মতটি তিনি দেন ইবন যায়দ থেকে। ইবন যায়দ বলেছেন: এর সূর্য, চাঁদ আর তারাগুলো এদিক থেকে আসে। ইবন কাসীরও ইবন যায়দ থেকে একই কথা আনেন, তবে 'ফিরে আসে' ক্রিয়াটি দিয়ে: এর তারা, সূর্য আর চাঁদ ফিরে ফিরে আসে। কুরতুবীর ভাষায় ইবন যায়দের মত এই: সূর্য, চাঁদ আর তারা আকাশে ফিরে ফিরে আসে, এক দিক থেকে ওঠে, অন্য দিকে ডোবে। তাবারী এই মতটি রেখেছেন বৃষ্টির বর্ণনাগুলোর পরে।"
          },
          {
            "en": "Al-Qurtubi records two more readings without naming who held them. One, introduced with it is said, takes dhat ar-raj' as the sky that has benefit. The other takes it as the sky of the angels, because they return to it with the deeds of the servants. As-Sa'di, after the rain, adds a sense of his own: the sky also returns with the divine decrees and affairs at every moment. None of these commentators rejects the rain reading. The other senses are set down beside it, and this article leaves them there.",
            "bn": "কুরতুবী আরও দুটি মত লিখেছেন, কারা বলেছেন তা উল্লেখ না করে। 'বলা হয়' দিয়ে শুরু হওয়া প্রথম মতে যাতির রাজ' মানে উপকারের অধিকারী আকাশ। দ্বিতীয় মতে এটি ফেরেশতাদের আকাশ, কারণ বান্দাদের আমল নিয়ে তাঁরা সেখানে ফিরে যান। সা'দী বৃষ্টির কথা বলার পর নিজের একটি অর্থ যোগ করেন। আকাশ প্রতিটি মুহূর্তে আল্লাহর ফয়সালা আর নানা বিষয় নিয়েও ফিরে আসে। এই তাফসীরকারদের কেউই বৃষ্টির ব্যাখ্যা নাকচ করেননি। অন্য অর্থগুলো তাঁরা পাশে রেখেছেন, এ লেখাও সেগুলো সেখানেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ground That Opens for Growth",
          "bn": "চারার জন্য খুলে যাওয়া মাটি"
        },
        "p": [
          {
            "en": "Then the second witness: wa-l-ardi dhati as-sad'. Al-Qurtubi defines sad' as shaqq, splitting, and reads the verse as another oath: the earth splits open from plants, trees, fruits and rivers. He cites as a parallel 80:26, then We split the earth open. He adds a neat turn: it is as though He said the earth of plants, because the plant is what splits the earth. Al-Baghawi gives almost the same list. In his words, the earth splits and cracks open from plants, trees and rivers.",
            "bn": "তারপর দ্বিতীয় সাক্ষী: ওয়াল আরদি যাতিস সাদ'। কুরতুবী সাদ'-এর অর্থ দেন শাক্ক, অর্থাৎ ফাটল। আয়াতটিকে তিনি আরেকটি শপথ হিসেবে পড়েন: জমিন ফেটে বের হয় চারাগাছ, বৃক্ষ, ফলমূল আর নদী। সমার্থক আয়াত হিসেবে তিনি আনেন ৮০:২৬, তারপর আমি জমিনকে বিদীর্ণ করেছি। তিনি একটি সুন্দর কথাও যোগ করেন। যেন বলা হয়েছে, গাছপালার অধিকারী জমিন, কারণ চারাগাছই তো মাটি ফাটিয়ে বের হয়। বাগাভীর তালিকাও প্রায় এক। তাঁর ভাষায়, জমিন ফেটে চৌচির হয়ে বের হয় চারা, গাছ আর নদী।"
          },
          {
            "en": "Ibn Kathir's Arabic reports Ibn 'Abbas: it is the earth splitting open from plants, and says the same was said by Sa'id ibn Jubayr, 'Ikrimah, Abu Malik, ad-Dahhak, al-Hasan, Qatadah, as-Suddi and more than one other. At-Tabari's paraphrase is the earth that has the splitting with plants. His chains give Ibn 'Abbas saying the earth that has plants, and by another chain, its splitting is bringing out plants every year. Qatadah said it splits from fruits and plants, adding: as you have seen. The Muyassar speaks of the earth cracking with the plants that pass through it.",
            "bn": "ইবন কাসীরের আরবি তাফসীরে ইবন আব্বাস (রাঃ)-এর কথা: এ হলো চারাগাছ বের করতে জমিনের ফেটে যাওয়া। তিনি জানান, সাঈদ ইবন জুবাইর, ইকরিমা, আবু মালিক, দাহহাক, হাসান, কাতাদা, সুদ্দী এবং আরও অনেকে একই কথা বলেছেন। তাবারীর ব্যাখ্যা: চারাগাছ নিয়ে ফেটে যাওয়ার অধিকারী জমিন। তাঁর সূত্রগুলোতে ইবন আব্বাস (রাঃ) বলেন, গাছপালার অধিকারী জমিন। আরেক সূত্রে বলেন, জমিনের ফাটল মানে প্রতি বছর চারা বের করে দেওয়া। কাতাদা বলেছেন, জমিন ফেটে ফলমূল আর চারাগাছ বের হয়, তারপর যোগ করেছেন: যেমন তোমরা দেখেছ। মুয়াসসার বলে, জমিন ফাটে, আর সেই ফাটল দিয়ে চারাগাছ বেরিয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Passes, Furrows and the Dead",
          "bn": "গিরিপথ, লাঙলের রেখা আর কবর"
        },
        "p": [
          {
            "en": "Other glosses widen the picture. Al-Hasan said: this splits from what is beneath it; and 'Ikrimah, asked about it, said: this splits from provision. Ibn Zayd recited 80:26 to 80:28, then We split the earth open, and caused grain to grow in it, and grapes and herbage, and said: its splitting is for tillage. Al-Qurtubi also records the tillage reading, introduced with it is said, because ploughing splits the earth. Each of these keeps the earth's opening tied to food and to the work of the people who live on it.",
            "bn": "অন্য কিছু ব্যাখ্যা ছবিটাকে আরও বড় করে। হাসান বলেছেন: জমিন ফেটে বের করে দেয় তার নিচে যা আছে। আর ইকরিমাকে জিজ্ঞেস করা হলে তিনি বলেছেন: জমিন ফেটে রিযিক বের হয়। ইবন যায়দ পড়েছেন ৮০:২৬ থেকে ৮০:২৮ আয়াত: তারপর আমি জমিনকে বিদীর্ণ করেছি, তাতে উৎপন্ন করেছি শস্য, আঙুর আর শাকসবজি। তারপর বলেছেন, জমিনের ফাটল মানে চাষাবাদের জন্য ফাটল। 'বলা হয়' দিয়ে কুরতুবীও চাষের ব্যাখ্যাটি লিখেছেন, কারণ লাঙল মাটি চিরে দেয়। এই সব ব্যাখ্যাতেই জমিনের খুলে যাওয়া বাঁধা আছে খাবারের সঙ্গে, আর সেই মানুষদের শ্রমের সঙ্গে, যারা এ মাটিতে বাস করে।"
          },
          {
            "en": "Mujahid is reported in two different ways. In at-Tabari's two chains he says the sad' is like the ma'zim, the narrow pass, of Mina, and in one wording adds: not the valleys and not the eroded banks. In al-Qurtubi he says it is the earth that has paths, which those who walk cut into it. Both make the splitting a feature of the land's shape rather than its growth. They are still not the same description, and each is kept here as its own book gives it, without one being used to correct the other.",
            "bn": "মুজাহিদের কথা পাওয়া যায় দুই রকমে। তাবারীর দুটি সূত্রে তিনি বলেন, সাদ' হলো মিনার মা'যিমের মতো, অর্থাৎ সরু গিরিপথের মতো। এক বর্ণনায় যোগ করেন: উপত্যকা নয়, ক্ষয়ে যাওয়া পাড়ও নয়। কুরতুবীর বর্ণনায় তিনি বলেন, এ সেই জমিন, যাতে পথ আছে, আর পথচারীরা হেঁটে হেঁটে সে পথ কেটে ফেলে। দুটো ব্যাখ্যাতেই ফাটল জমিনের গড়নের অংশ, উদ্ভিদের ব্যাপার নয়। তবু বর্ণনা দুটো এক নয়। এখানে প্রতিটি রাখা হলো তার নিজের কিতাবে যেমন আছে তেমন, একটি দিয়ে অন্যটিকে সংশোধন না করে।"
          },
          {
            "en": "A further reading reaches past this life. Al-Qurtubi records, again with it is said, that this is the earth of the dead, because it splits away from them at the raising. As-Sa'di, after the plants, says in his own voice that the earth also splits open from the dead. A reader will recall that 86:8 has just said Allah is able to bring man back. Neither commentator links the two verses in the text fetched for this entry, so this article only places them side by side and claims no more.",
            "bn": "আরেকটি ব্যাখ্যা এই জীবনের সীমা পেরিয়ে যায়। কুরতুবী আবার 'বলা হয়' দিয়ে লিখেছেন, এটি মৃতদের জমিন, কারণ পুনরুত্থানের সময় তাদের সামনে জমিন ফেটে যাবে। সা'দী চারাগাছের কথা বলার পর নিজের ভাষায় বলেন, জমিন মৃতদের জন্যও ফেটে যায়। পাঠকের মনে পড়বে, ৮৬:৮ আয়াত এইমাত্র বলেছে, আল্লাহ মানুষকে ফিরিয়ে আনতে সক্ষম। তবে এ আলোচনার জন্য সংগৃহীত পাঠে দুই তাফসীরকারের কেউই আয়াত দুটিকে জোড়া লাগাননি। তাই এ লেখা শুধু দুটোকে পাশাপাশি রাখছে, এর বেশি কিছু দাবি করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Witnesses We Lean On",
          "bn": "যাদের উপর আমরা ভর দিই"
        },
        "p": [
          {
            "en": "No commentary consulted here attaches a hadith or an occasion of revelation to 86:11 or 86:12, and none is supplied. The Muyassar adds to this passage its ruling that a creature may swear only by Allah, a point already treated under 85:1. What remains is the plain force of the two witnesses. Rain and split soil are not distant wonders. Qatadah's words put the stakes simply: without that yearly return, people and their animals would perish. The oath calls as witness the very things a life depends on.",
            "bn": "এখানে দেখা কোনো তাফসীর ৮৬:১১ বা ৮৬:১২ আয়াতের সঙ্গে কোনো হাদীস বা শানে নুযূল জুড়ে দেয়নি, তাই এ লেখাতেও তা আনা হয়নি। মুয়াসসার এ অংশে বিধানটি যোগ করে যে সৃষ্টি কেবল আল্লাহর নামেই শপথ করতে পারে। বিষয়টি ৮৫:১ আয়াতের আলোচনায় এসে গেছে। বাকি থাকে দুই সাক্ষীর সাদামাটা জোর। বৃষ্টি আর ফাটা মাটি দূরের কোনো বিস্ময় নয়। কাতাদার কথায় বিষয়টা পরিষ্কার: প্রতি বছরের এই ফিরে আসা না থাকলে মানুষ আর তাদের পশু ধ্বংস হয়ে যেত। শপথে সাক্ষী করা হয়েছে ঠিক সেই জিনিসগুলোকে, যাদের উপর জীবন টিকে আছে।"
          },
          {
            "en": "That gives the verse a hold on the reader. Most of what feeds us arrives by a return we did not arrange: a season that comes round, a cloud that fills again, ground that opens at the right time. Because it keeps coming back, it is easy to stop seeing it. The surah asks for the opposite habit. Look at what keeps returning and recognise the Sender behind it, and let the steady faithfulness of the sky and the earth stand behind the word they are sworn for in 86:13.",
            "bn": "এখানেই আয়াতটি পাঠককে ধরে ফেলে। আমাদের মুখের খাবারের বেশির ভাগই আসে এমন এক ফিরে আসার পথ ধরে, যার ব্যবস্থা আমরা করিনি। মৌসুম ঘুরে আসে, মেঘ আবার ভরে ওঠে, ঠিক সময়ে মাটি খুলে যায়। বারবার ফিরে আসে বলেই এগুলো আর চোখে পড়ে না। সূরাটি চায় উল্টো অভ্যাস। যা বারবার ফিরে আসে, তার দিকে তাকান, আর চিনে নিন কে তা ফিরিয়ে দেন। আকাশ আর জমিনের এই অটল বিশ্বস্ততা যে বাণীর জন্য শপথ হয়ে এসেছে, ৮৬:১৩ আয়াতের সেই বাণীর পেছনে তাকে দাঁড়াতে দিন।"
          }
        ]
      }
    ]
  },
  "86:13": {
    "sections": [
      {
        "h": {
          "en": "Where the Two Oaths Land",
          "bn": "দুই শপথ যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Innahu la-qawlun faslun: indeed, it is a decisive word. The verse is three words in the Arabic text. It comes straight after two oaths. 86:11 swears by the sky that has raj', which Ibn Kathir's abridged English reports Ibn 'Abbas explaining as rain, and Qatadah as the sky returning the provision of creatures every year. 86:12 swears by the earth that has sad', the splitting, which Ibn 'Abbas explains as splitting open to bring out plants. An oath in Arabic waits for its answer, and the listener waits with it.",
            "bn": "ইন্নাহু লাকাওলুন ফাসল: নিশ্চয়ই এ এক চূড়ান্ত ফয়সালার বাণী। আরবি পাঠে আয়াতটি তিনটি শব্দের। এর ঠিক আগে দুটি শপথ। ৮৬:১১ আয়াতে শপথ সেই আকাশের, যার আছে রাজ'। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ জানায়, ইবন আব্বাস (রাঃ) এর অর্থ করেছেন বৃষ্টি, আর কাতাদা বলেছেন, আকাশ প্রতি বছর সৃষ্টিজগতের রিযিক ফিরিয়ে দেয়। ৮৬:১২ আয়াতে শপথ সেই জমিনের, যার আছে সাদ', অর্থাৎ ফাটল। ইবন আব্বাস (রাঃ) বলেন, চারাগাছ বের করে দিতে জমিন ফেটে যায়। আরবিতে শপথ উচ্চারিত হলে তার জবাবের অপেক্ষা থাকে, শ্রোতাও অপেক্ষা করে।"
          },
          {
            "en": "Our verse is that answer. Al-Baghawi says so in as many words: the answer to the oath is His saying innahu. Al-Qurtubi puts it the same way, that the oath fell upon this. So the sky that keeps sending back its rain and the earth that keeps opening for its crops are brought in as witnesses for one claim, and the claim is about a word. The sentence is built to be heard as settled: it opens with inna, indeed, and puts the particle la- on qawl, so the statement is affirmed twice over before it is even finished.",
            "bn": "আমাদের আয়াতটিই সেই জবাব। বাগাভী কথাটা সরাসরি বলেন: শপথের জবাব হলো তাঁর বাণী ইন্নাহু। কুরতুবীও একই কথা বলেন, শপথটা এসে পড়েছে এর উপরেই। যে আকাশ বারবার বৃষ্টি ফিরিয়ে দেয়, আর যে জমিন বারবার ফসলের জন্য খুলে যায়, দুটোকেই সাক্ষী হিসেবে আনা হয়েছে একটি দাবির পক্ষে। আর দাবিটা একটি বাণী নিয়ে। বাক্যটার গড়নই এমন যে তা মীমাংসিত কথা হিসেবে কানে আসে। শুরুতে ইন্না, অর্থাৎ নিশ্চয়ই। তারপর কাওল শব্দের গায়ে লা- অব্যয়। বাক্য শেষ হওয়ার আগেই কথাটা দুবার জোর পেয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Pronoun Points To",
          "bn": "সর্বনামটি কাকে বোঝায়"
        },
        "p": [
          {
            "en": "The -hu in innahu, it, does not name itself, and the commentators fill it in. As-Sa'di writes simply: innahu, that is, the Qur'an. Al-Baghawi says the same, meaning the Qur'an. Al-Qurtubi reads the line as saying that the Qur'an separates truth from falsehood, and the Muyassar, which explains 86:11 to 86:14 as one passage, also says the Qur'an is a decisive word. Ma'arif al-Qur'an begins its note with the words in other words, the Qur'an is truly a Decisive Word. This is the reading most of the sources consulted here give.",
            "bn": "ইন্নাহু শব্দের -হু, অর্থাৎ 'এটি', নিজে নিজের নাম বলে না। তাফসীরকারেরা সেই শূন্যস্থান পূরণ করেন। সা'দী সোজা লেখেন: ইন্নাহু, অর্থাৎ কুরআন। বাগাভীও একই কথা বলেন, এর দ্বারা উদ্দেশ্য কুরআন। কুরতুবী আয়াতটিকে এভাবে পড়েন যে কুরআন সত্য আর মিথ্যাকে আলাদা করে দেয়। মুয়াসসার ৮৬:১১ থেকে ৮৬:১৪ পর্যন্ত এক অংশ হিসেবে ব্যাখ্যা করে, আর সেখানেও বলে, কুরআন এক চূড়ান্ত ফয়সালার বাণী। মাআরিফুল কুরআন তার আলোচনা শুরু করে এই কথা দিয়ে যে কুরআন সত্যিই এক ফয়সালাকারী বাণী। সংগৃহীত সূত্রগুলোর বেশির ভাগ এ ব্যাখ্যাই দেয়।"
          },
          {
            "en": "At-Tabari words it more broadly. He paraphrases: indeed this statement and this report is a decisive word. He does not stop to name what this statement is, and he leaves it at the speech and the news that the surah has been delivering. Al-Qurtubi then records a second view, introduced with wa-qila, and it is said. On that view the decisive word is the warning given earlier in this same surah, in His saying indeed He is able to bring him back, on the Day when the secrets are put to the test: that is, 86:8 and 86:9.",
            "bn": "তাবারী কথাটা আরও ব্যাপক অর্থে বলেন। তাঁর ব্যাখ্যা: নিশ্চয়ই এই কথা আর এই সংবাদ এক চূড়ান্ত ফয়সালার বাণী। 'এই কথা' বলতে ঠিক কী, তা তিনি আলাদা করে নাম ধরে বলেন না। সূরাটি যে বক্তব্য আর যে খবর শুনিয়ে আসছে, তিনি সেটুকুতেই থামেন। এরপর কুরতুবী ওয়া কীলা, অর্থাৎ 'বলা হয়েছে' দিয়ে দ্বিতীয় একটি মত উল্লেখ করেন। সে মতে চূড়ান্ত বাণী হলো এই সূরাতেই আগে আসা সতর্কবাণী, তাঁর এই কথা: নিশ্চয়ই তিনি তাকে ফিরিয়ে আনতে সক্ষম, যেদিন গোপন বিষয়গুলো যাচাই করা হবে। অর্থাৎ ৮৬:৮ ও ৮৬:৯।"
          },
          {
            "en": "So the sources give two answers to whose word is meant. Most say the Qur'an as a whole. Al-Qurtubi's second report narrows it to the promise of return and reckoning made a few verses back. The two are not far apart, since the promise of 86:8 is itself part of the Qur'an, but they are not the same claim, and this article does not choose between them. On either reading the oaths stand behind the same thing: a word that came from Allah and will not be found hollow. The argument from origin to return was treated under 86:5.",
            "bn": "তাহলে বাণীটা কোনটি, এ প্রশ্নে সূত্রগুলো দুটি উত্তর দেয়। বেশির ভাগ বলেন, পুরো কুরআন। কুরতুবীর উল্লেখ করা দ্বিতীয় মত একে সীমিত করে কয়েক আয়াত আগের পুনরুত্থান ও হিসাবের প্রতিশ্রুতিতে। দুটো খুব দূরের কথা নয়, কারণ ৮৬:৮ আয়াতের প্রতিশ্রুতিও কুরআনেরই অংশ। তবু দাবি দুটো এক নয়, আর এ লেখা কোনোটিকে বেছে নেয় না। যে ব্যাখ্যাই ধরা হোক, শপথগুলো একই জিনিসের পক্ষে দাঁড়ায়: আল্লাহর কাছ থেকে আসা এমন বাণী, যা কখনো ফাঁপা প্রমাণিত হবে না। সৃষ্টির শুরু থেকে ফিরে আসার যুক্তিটি ৮৬:৫ আয়াতের আলোচনায় এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word That Separates",
          "bn": "যে বাণী আলাদা করে দেয়"
        },
        "p": [
          {
            "en": "Fasl is a noun of separating, here standing as the description of qawl, a word or statement. At-Tabari unpacks it as a word that separates, yafsilu, between truth and falsehood by its clear exposition. Then he adds a note on method: the people of interpretation said something like this, though they differed in how they expressed it. Some of them said a word of truth, haqq. Some of them said a word of judgement, hukm. He treats these as different phrasings of one meaning rather than rival meanings, and he gives a chain for each.",
            "bn": "ফাসল শব্দের মূল অর্থ আলাদা করা। এখানে তা কাওল, অর্থাৎ কথা বা বাণীর বিশেষণ হয়ে এসেছে। তাবারী এর ব্যাখ্যা দেন এভাবে: এমন বাণী, যা নিজের সুস্পষ্ট বর্ণনার জোরে সত্য ও মিথ্যার মাঝে পার্থক্য করে দেয়, ইয়াফসিলু। এরপর তিনি পদ্ধতি নিয়ে একটি কথা যোগ করেন। তাফসীরের আলেমরা এ রকমই বলেছেন, যদিও প্রকাশের ভাষায় তাঁদের মধ্যে পার্থক্য ছিল। কেউ বলেছেন, সত্যের বাণী, হক। কেউ বলেছেন, ফয়সালার বাণী, হুকম। তাবারী এগুলোকে পরস্পরবিরোধী অর্থ নয়, একই অর্থের ভিন্ন ভিন্ন প্রকাশ হিসেবে দেখেন। প্রতিটির জন্য তিনি সনদও উল্লেখ করেন।"
          },
          {
            "en": "The first chain runs through Abu Salih and Mu'awiyah, from 'Ali ibn Abi Talhah, to Ibn 'Abbas, who said of innahu la-qawlun fasl: haqq, true. The second runs through Sa'id to Qatadah, who said: hukm, a judgement. Ibn Kathir's Arabic records the matter a little differently. He writes that Ibn 'Abbas said haqq, that Qatadah said the same, and that someone else said hukmun 'adl, a just ruling. His abridged English matches that: Ibn 'Abbas said true, Qatadah also said the same, and someone else said a just ruling.",
            "bn": "প্রথম সনদটি আবু সালিহ ও মুআবিয়া হয়ে আলী ইবন আবি তালহা থেকে ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছায়। ইন্নাহু লাকাওলুন ফাসল সম্পর্কে তিনি বলেছেন: হক, অর্থাৎ সত্য। দ্বিতীয় সনদটি সাঈদ হয়ে কাতাদা পর্যন্ত যায়। তিনি বলেছেন: হুকম, অর্থাৎ ফয়সালা। ইবন কাসীরের আরবি তাফসীরে বিষয়টা একটু ভিন্নভাবে এসেছে। তিনি লেখেন, ইবন আব্বাস (রাঃ) বলেছেন হক, কাতাদাও একই কথা বলেছেন, আর অন্য একজন বলেছেন হুকমুন আদল, অর্থাৎ ন্যায়সঙ্গত ফয়সালা। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে: ইবন আব্বাস (রাঃ) বলেছেন সত্য, কাতাদাও তা-ই বলেছেন, আর অন্য একজন বলেছেন ন্যায়সঙ্গত ফয়সালা।"
          },
          {
            "en": "So the two records disagree on Qatadah. In at-Tabari he says a judgement; in Ibn Kathir he says true, alongside Ibn 'Abbas, and the word judgement goes to an unnamed other. Both reports are kept here as the books give them, and neither is corrected by the other. What the two do not disagree on is the range of the word. Fasl can be heard as truth that stands against falsehood, or as a verdict that ends a dispute, and both commentators set the two side by side without rejecting either.",
            "bn": "অর্থাৎ কাতাদার কথা নিয়ে দুই বর্ণনা মেলে না। তাবারীতে তিনি বলেন ফয়সালা। ইবন কাসীরে তিনি ইবন আব্বাস (রাঃ)-এর সঙ্গে মিলে বলেন সত্য, আর ফয়সালার কথাটা যায় নাম-না-জানা অন্য একজনের ভাগে। দুটো বর্ণনাই এখানে রাখা হলো যেভাবে কিতাবে আছে, একটিকে দিয়ে অন্যটিকে শোধরানো হলো না। তবে শব্দটার পরিসর নিয়ে দুজনের মধ্যে কোনো বিরোধ নেই। ফাসল শোনা যায় মিথ্যার বিপরীতে দাঁড়ানো সত্য হিসেবে, আবার বিবাদ মিটিয়ে দেওয়া রায় হিসেবেও। দুই তাফসীরকারই দুটোকে পাশাপাশি রাখেন, কোনোটিকে বাতিল করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "True, Earnest and Plain",
          "bn": "সত্য, গুরুগম্ভীর, সুস্পষ্ট"
        },
        "p": [
          {
            "en": "The later commentators keep to the same field but each picks his own words. As-Sa'di glosses qawlun faslun as haqq wa sidq bayyin wadih: true and truthful, evident and clear. His stress falls on clarity; a decisive word, for him, is one that leaves no fog around what it says. Al-Baghawi writes haqq wa jidd, yafsilu bayna al-haqq wa al-batil: true and earnest, separating truth from falsehood. He adds jidd, seriousness, to the definition of fasl itself, a word the passage will soon need.",
            "bn": "পরবর্তী তাফসীরকারেরাও একই সীমার ভেতরে থাকেন, তবে প্রত্যেকে নিজের শব্দ বেছে নেন। সা'দী কাওলুন ফাসলের অর্থ করেন হক্ক ওয়া সিদক বাইয়িন ওয়াদিহ: সত্য ও সত্যনিষ্ঠ, প্রকাশ্য ও সুস্পষ্ট। তাঁর জোর স্পষ্টতার উপর। তাঁর কাছে চূড়ান্ত বাণী সেটাই, যার বক্তব্যের চারপাশে কোনো কুয়াশা থাকে না। বাগাভী লেখেন হক্ক ওয়া জিদ্দ, ইয়াফসিলু বাইনাল হক্কি ওয়াল বাতিল: সত্য ও গুরুগম্ভীর, যা সত্য ও মিথ্যাকে আলাদা করে দেয়। ফাসলের সংজ্ঞাতেই তিনি জিদ্দ, অর্থাৎ গুরুত্ব শব্দটি যোগ করেন। শব্দটির প্রয়োজন এ অংশে একটু পরেই পড়বে।"
          },
          {
            "en": "The Muyassar gives the separating sense in its plainest form: the Qur'an is a decisive word between truth and falsehood. Ma'arif al-Qur'an adds a note of certainty. It says the Qur'an decides between truth and falsehood, and there is no room for any doubt in it. Set beside one another, the glosses form a small family. Truth, a judgement, a just ruling, clarity, seriousness, the line between truth and falsehood: no commentator consulted for this verse says fasl means anything outside that family, and none of them rules out the others.",
            "bn": "মুয়াসসার পার্থক্য করার অর্থটি সবচেয়ে সরল ভাষায় দেয়: কুরআন সত্য ও মিথ্যার মাঝে চূড়ান্ত ফয়সালার বাণী। মাআরিফুল কুরআন এতে নিশ্চয়তার কথা যোগ করে। সেখানে বলা হয়েছে, কুরআন সত্য ও মিথ্যার মাঝে ফয়সালা করে, আর এতে সন্দেহের কোনো অবকাশ নেই। ব্যাখ্যাগুলো পাশাপাশি রাখলে একটা ছোট পরিবার দাঁড়ায়। সত্য, ফয়সালা, ন্যায়সঙ্গত রায়, স্পষ্টতা, গুরুত্ব, আর সত্য-মিথ্যার মাঝের রেখা। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীরকার ফাসলকে এই পরিবারের বাইরের কোনো অর্থে নেন না। কেউ অন্যদের ব্যাখ্যাকে বাতিলও করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain That Returns, Word That Holds",
          "bn": "ফিরে আসা বৃষ্টি, অটল বাণী"
        },
        "p": [
          {
            "en": "A reader of the Arabic will notice a word repeating. 86:8 says that He is able to bring man back, 'ala raj'ihi, and 86:11 swears by the sky dhati al-raj', that has the returning. The same root, r-j-', stands in both verses. The commentators consulted here do not draw a line between the two, so this article does not claim one for them. It only notes what the text shows: the surah speaks of a return of the human being, and then calls as witness a sky whose rain keeps coming back.",
            "bn": "আরবি পাঠক একটি শব্দের পুনরাবৃত্তি খেয়াল করবেন। ৮৬:৮ আয়াত বলে, তিনি মানুষকে ফিরিয়ে আনতে সক্ষম, আলা রাজ'ইহি। আর ৮৬:১১ আয়াতে শপথ করা হয় যাতির রাজ' আকাশের, যার আছে ফিরে আসা। দুই আয়াতেই একই ধাতু, র-জ-আ। এখানে সংগৃহীত তাফসীরকারেরা দুটোর মধ্যে কোনো যোগসূত্র টানেননি, তাই এ লেখাও তাঁদের নামে কোনো যোগসূত্র দাবি করে না। পাঠে যা দেখা যায়, শুধু সেটুকুই বলা হলো। সূরাটি মানুষের ফিরে আসার কথা বলে, তারপর সাক্ষী হিসেবে ডাকে এমন আকাশকে, যার বৃষ্টি বারবার ফিরে আসে।"
          },
          {
            "en": "What the commentators do give is the plain sense of the two witnesses. Ibn 'Abbas, in the abridged Ibn Kathir, says the sky rains and then rains again. Of the earth he says it splits to bring forth plants, and the same source reports that reading of the earth from Sa'id ibn Jubayr, 'Ikrimah, al-Hasan, Qatadah and others. These are things nobody waits on with doubt; the farmer plants because the rain has come before. Whatever else the oaths do, they set the decisive word beside two of the most dependable things a listener knows.",
            "bn": "তাফসীরকারেরা যা দেন, তা হলো দুই সাক্ষীর সরল অর্থ। ইবন কাসীরের সংক্ষিপ্ত সংস্করণে ইবন আব্বাস (রাঃ) বলেন, আকাশ বৃষ্টি দেয়, তারপর আবার দেয়। আর জমিন ফেটে যায় চারাগাছ বের করে দিতে। জমিন সম্পর্কে এ ব্যাখ্যা সাঈদ ইবন জুবাইর, ইকরিমা, হাসান, কাতাদা ও আরও অনেকে দিয়েছেন বলে একই সূত্র জানায়। এগুলো এমন জিনিস, যার জন্য কেউ সন্দেহ নিয়ে অপেক্ষা করে না। কৃষক বীজ বোনে, কারণ বৃষ্টি আগেও এসেছে। শপথ দুটো আর যা-ই করুক, চূড়ান্ত বাণীকে তারা দাঁড় করায় শ্রোতার জানা সবচেয়ে নির্ভরযোগ্য দুটো জিনিসের পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration of al-Harith",
          "bn": "হারিসের বর্ণনা"
        },
        "p": [
          {
            "en": "Two of the commentaries bring in a narration. Al-Qurtubi says he gave it earlier, in the introduction to his work: al-Harith reports from 'Ali that he heard the Messenger of Allah ﷺ describe the Book of Allah, and the description uses this passage's own words, huwa al-fasl, laysa bi-l-hazl, it is the decisive word, not a jest. Ma'arif al-Qur'an cites it from 'Ali as well. Jami' at-Tirmidhi records this narration as number 2906, and the quranx page for that number was consulted to check it.",
            "bn": "দুটি তাফসীর এখানে একটি বর্ণনা আনে। কুরতুবী বলেন, তিনি এটা আগেই তাঁর গ্রন্থের ভূমিকায় এনেছেন। হারিস আলী (রাঃ) থেকে বর্ণনা করেন, তিনি রাসূলুল্লাহ ﷺ-কে আল্লাহর কিতাবের বর্ণনা দিতে শুনেছেন। সেই বর্ণনায় এ অংশেরই শব্দ আছে: হুওয়াল ফাসলু, লাইসা বিল-হাযল, এ চূড়ান্ত ফয়সালার বাণী, ঠাট্টা নয়। মাআরিফুল কুরআনও আলী (রাঃ)-এর সূত্রে বর্ণনাটি উল্লেখ করে। জামি' আত-তিরমিযী বর্ণনাটি ২৯০৬ নম্বরে এনেছে। যাচাইয়ের জন্য quranx-এ ওই নম্বরের পাতাটি খুলে দেখা হয়েছে।"
          },
          {
            "en": "At-Tirmidhi comments on its standing himself. In the Arabic on that page he says it is gharib, known only through Hamzah az-Zayyat, that its chain is majhul, unknown, and that there is criticism concerning al-Harith. The page's English omits that verdict, and the English text of the narration runs to nearly 300 words, so it is not quoted here rather than quoted in part. It is a general narration about the Qur'an, not tied to this verse, and no commentary consulted here attaches a sound hadith to 86:13.",
            "bn": "তিরমিযী নিজেই এর মান নিয়ে মন্তব্য করেছেন। ওই পাতার আরবি পাঠে তিনি বলেন, বর্ণনাটি গরীব, হামযা আয-যাইয়াতের সূত্র ছাড়া এটি জানা যায় না। এর সনদ মাজহুল, অর্থাৎ অজ্ঞাত, আর হারিসের ব্যাপারে আপত্তি আছে। পাতার ইংরেজি অংশে এই রায় নেই। বর্ণনাটির ইংরেজি পাঠ প্রায় ৩০০ শব্দের, তাই আংশিক উদ্ধৃতি না দিয়ে এখানে তা উদ্ধৃতই করা হলো না। এটি কুরআন সম্পর্কে একটি সাধারণ বর্ণনা, এ আয়াতের সঙ্গে যুক্ত নয়। সংগৃহীত কোনো তাফসীর ৮৬:১৩ আয়াতের সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Said, Reported, and Settled",
          "bn": "বলা কথা, দেওয়া খবর, মীমাংসিত রায়"
        },
        "p": [
          {
            "en": "Here the verse does not call the Qur'an a book or a sign. It calls it a qawl, something said. At-Tabari's paraphrase pairs that with khabar, a report: this statement and this report. Statements and reports are the ordinary currency of human life, and most of them are partly true, partly coloured by whoever speaks, and soon forgotten. Among everything that is said, this one is set apart by a single word, fasl. It is not offered as one more report to be weighed; the oaths present it as the word that does the weighing.",
            "bn": "এখানে আয়াতটি কুরআনকে কিতাব বা নিদর্শন বলেনি। বলেছে কাওল, অর্থাৎ যা বলা হয়েছে। তাবারী তাঁর ব্যাখ্যায় এর সঙ্গে জুড়ে দেন খবর শব্দটি: এই কথা আর এই সংবাদ। মানুষের প্রতিদিনের জীবন চলে কথা আর খবরের উপর। তার বেশির ভাগই আংশিক সত্য, বক্তার রঙে খানিকটা রাঙানো, আর অল্প দিনেই ভুলে যাওয়া। যা কিছু বলা হয়, তার মধ্যে এই কথাটিকে আলাদা করে দিয়েছে একটিমাত্র শব্দ, ফাসল। মেপে দেখার জন্য আরেকটা খবর হিসেবে একে হাজির করা হয়নি। শপথগুলো একে দাঁড় করায় সেই বাণী হিসেবে, যা নিজেই সবকিছু মেপে দেয়।"
          },
          {
            "en": "The Muyassar adds to this passage its ruling that a creature may swear only by Allah, a point already treated under 85:1 and not repeated here. The verse that follows, 86:14, takes up a further side of the same word, and the closing verses of the surah, 86:15 to 86:17, move to their own subject. Both lie beyond this verse and are left for their own entries. What belongs to 86:13 is narrower and firmer: a claim, sworn to by the sky and the earth, that this word decides.",
            "bn": "মুয়াসসার এ অংশে বিধান যোগ করে যে সৃষ্টি কেবল আল্লাহর নামেই শপথ করতে পারে। বিষয়টি ৮৫:১ আয়াতের আলোচনায় এসেছে, এখানে আর পুনরাবৃত্তি করা হলো না। এর পরের আয়াত, ৮৬:১৪, একই বাণীর আরেকটি দিক তুলে ধরে। আর সূরার শেষ আয়াতগুলো, ৮৬:১৫ থেকে ৮৬:১৭, নিজেদের বিষয়ের দিকে এগিয়ে যায়। দুটোই এ আয়াতের সীমার বাইরে, তাই নিজ নিজ আলোচনার জন্য রেখে দেওয়া হলো। ৮৬:১৩ আয়াতের ভাগে যা পড়ে, তা আরও সংকীর্ণ, আরও দৃঢ়। আকাশ আর জমিনের শপথ দিয়ে প্রতিষ্ঠিত একটি দাবি: এই বাণী ফয়সালা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Ruling",
          "bn": "সমর্থন নয়, রায় চাওয়া"
        },
        "p": [
          {
            "en": "The glosses gathered above turn easily into questions for the reader. If the word is haqq, it is to be believed, not merely admired. If it is hukm, it is to be obeyed, not merely consulted. If it is bayyin wadih, plain and clear, it is not to be reread again and again until it finally says what was wanted. Many people come to the Qur'an with a decision already made, hoping to find support for it. A decisive word reverses that habit: it does the deciding, and it is the reader who gets sorted.",
            "bn": "উপরে যে ব্যাখ্যাগুলো জড়ো হলো, সেগুলো সহজেই পাঠকের জন্য প্রশ্ন হয়ে দাঁড়ায়। বাণীটা যদি হক হয়, তবে তা বিশ্বাস করার জিনিস, শুধু প্রশংসা করার নয়। যদি তা হুকম হয়, তবে মানার জিনিস, শুধু পরামর্শ নেওয়ার নয়। যদি তা বাইয়িন ওয়াদিহ হয়, অর্থাৎ প্রকাশ্য ও সুস্পষ্ট, তবে মনের মতো কথা না বলা পর্যন্ত বারবার ঘুরিয়ে পড়ার জিনিস নয়। অনেকে কুরআনের কাছে যান আগে থেকে নেওয়া সিদ্ধান্ত নিয়ে, তার পক্ষে সমর্থন খুঁজতে। চূড়ান্ত বাণী এই অভ্যাস উল্টে দেয়। ফয়সালা করে বাণী, আর বাছাই হয় পাঠক।"
          },
          {
            "en": "There is a humility in the same lesson. The very commentators who call the Qur'an decisive differ over whose word the pronoun means and over what Qatadah said, and they record those differences without embarrassment. Firmness about the Book is not the same as certainty about one's own reading of it. What is decisive is the word, not any reader's grasp of it. So the posture this verse asks for has two parts: hold the text as settled, and hold one's understanding of it open to correction by those who know it better.",
            "bn": "একই শিক্ষার ভেতরে বিনয়ের কথাও আছে। যে তাফসীরকারেরা কুরআনকে চূড়ান্ত বাণী বলেন, তাঁরাই সর্বনামটি কার দিকে ইঙ্গিত করে আর কাতাদা কী বলেছিলেন, এ নিয়ে ভিন্নমত রাখেন। আর সেই ভিন্নমত তাঁরা কোনো সংকোচ ছাড়াই লিখে রাখেন। কিতাবের ব্যাপারে দৃঢ় থাকা আর নিজের বোঝার ব্যাপারে নিশ্চিত থাকা এক কথা নয়। চূড়ান্ত হলো বাণী, কোনো পাঠকের বোঝা নয়। তাই এ আয়াত যে মনোভাব চায়, তার দুটি দিক। মূল পাঠকে মীমাংসিত বলে মানা, আর নিজের বোঝাকে যাঁরা বেশি জানেন তাঁদের সংশোধনের জন্য খোলা রাখা।"
          }
        ]
      }
    ]
  }
});
