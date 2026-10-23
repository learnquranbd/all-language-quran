/**
 * Tadabbur long-form articles — surah 1.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "1:1-5": {
    "sections": [
      {
        "h": {
          "en": "Greatest Surah, Many Names",
          "bn": "শ্রেষ্ঠ সূরা, অনেক নাম"
        },
        "p": [
          {
            "en": "Al-Qurtubi lists twelve names for this surah. The first is as-Salah, the Prayer, taken from the hadith in which Allah says He has divided the prayer between Himself and His servant. Then al-Hamd, and Fatihat al-Kitab, the Opening of the Book, a name he says no scholar disputes: recitation opens with it, the written mushaf opens with it, and the prayers open with it. It is al-Mathani, he says, because it is repeated in every rak'ah.",
            "bn": "কুরতুবী এই সূরার বারোটি নাম গুনে দেখান। প্রথম নাম আস-সালাত, অর্থাৎ নামাজ। নামটি এসেছে সেই হাদিস থেকে, যেখানে আল্লাহ বলেন, তিনি নামাজকে নিজের ও বান্দার মাঝে ভাগ করে নিয়েছেন। তারপর আল-হামদ। আছে ফাতিহাতুল কিতাব, মানে কিতাবের সূচনা। কুরতুবী বলেন, এ নাম নিয়ে কোনো আলিমের দ্বিমত নেই। তিলাওয়াত শুরু হয় এ দিয়ে, মুসহাফের লেখা শুরু হয় এ দিয়ে, নামাজও শুরু হয় এ দিয়েই। আর একে আল-মাসানী বলা হয়, কারণ প্রতি রাকআতে এটি ফিরে ফিরে পড়া হয়।"
          },
          {
            "en": "Al-Bukhari records from Abu Sa'id ibn al-Mu'alla that the Prophet ﷺ called him while he was praying in the mosque, and he did not answer. The Prophet ﷺ recited 8:24, answer Allah and His Messenger when he calls you, then said: \"I will teach you a Sura which is the greatest Sura in the Qur'an, before you leave the Mosque.\" Leaving, he said: \"Al-Hamdu lillahi Rabbi-l-'alamin, which is al-Sab' al-Mathani [the seven oft-repeated] and the Grand Qur'an which has been given to me.\" It is in al-Bukhari's Sahih (4474), praising the whole surah, not a single verse.",
            "bn": "ইমাম বুখারী আবু সাঈদ ইবনুল মুআল্লা (রাঃ)-এর ঘটনা বর্ণনা করেছেন। তিনি মসজিদে নামাজ পড়ছিলেন, এমন সময় নবী ﷺ তাঁকে ডাকলেন, কিন্তু তিনি সাড়া দিলেন না। নবী ﷺ তখন ৮:২৪ আয়াত শোনালেন: আল্লাহ ও রাসূল যখন ডাকেন, সাড়া দাও। তারপর বললেন: “মসজিদ থেকে বের হওয়ার আগেই তোমাকে এমন একটি সূরা শিখিয়ে দেব, যা কুরআনের সবচেয়ে মহান সূরা।” বের হওয়ার মুখে তিনি বললেন: “আলহামদু লিল্লাহি রাব্বিল আলামীন। এটাই আস-সাবউল মাসানী, সাতটি বারবার পড়া আয়াত, আর সেই মহান কুরআন, যা আমাকে দেওয়া হয়েছে।” হাদিসটি সহীহ বুখারীতে আছে (৪৪৭৪)। এ প্রশংসা গোটা সূরার, আলাদা কোনো আয়াতের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Does the Surah Begin",
          "bn": "সূরাটি শুরু কোথা থেকে"
        },
        "p": [
          {
            "en": "Whether the basmalah is the first verse of al-Fatihah is a real disagreement. Ibn Kathir says the Companions opened the Book of Allah with it, and the scholars agree it is part of a verse in 27:30; beyond that they differ. Al-Qurtubi sets out three positions: Malik, that it is not a verse of al-Fatihah or of any other surah; 'Abdullah ibn al-Mubarak, that it is a verse of every surah; and ash-Shafi'i, that it is a verse of al-Fatihah, with two statements from him on the other surahs.",
            "bn": "বিসমিল্লাহ আল-ফাতিহার প্রথম আয়াত কি না, এ নিয়ে সত্যিকারের মতভেদ আছে। ইবন কাসীর বলেন, সাহাবিগণ আল্লাহর কিতাব শুরু করেছেন এ দিয়ে। আলিমরা একমত যে ২৭:৩০ আয়াতে এটি একটি আয়াতের অংশ। এর বাইরে তাঁদের মত আলাদা। কুরতুবী তিনটি মত সাজিয়ে দেন। ইমাম মালিকের মতে এটি আল-ফাতিহার আয়াতও নয়, অন্য কোনো সূরারও নয়। আবদুল্লাহ ইবনুল মুবারকের মতে এটি প্রতিটি সূরার আয়াত। আর শাফিঈর মতে এটি আল-ফাতিহার আয়াত। বাকি সূরাগুলোর ব্যাপারে তাঁর কাছ থেকে দুই রকম বক্তব্য পাওয়া যায়।"
          },
          {
            "en": "Ibn Kathir names more on each side. With the view that it is a verse of every surah except Bara'ah he lists ash-Shafi'i, Ibn al-Mubarak, Ahmad in a report from him, and several Companions; against it, Malik, Abu Hanifah and their followers. Al-Baghawi adds that both sides agree al-Fatihah has seven verses; they only divide them differently. At-Tabari, who does not count it, argues from 1:3 that ar-Rahman ar-Rahim would otherwise be repeated almost beside itself.",
            "bn": "ইবন কাসীর দুই পক্ষেই আরও নাম যোগ করেন। সূরা বারাআ ছাড়া প্রতিটি সূরার শুরুতে এটি আয়াত, এ মতে তিনি রাখেন শাফিঈ, ইবনুল মুবারক, তাঁর থেকে আসা একটি বর্ণনা অনুযায়ী ইমাম আহমাদ এবং কয়েকজন সাহাবিকে। উল্টো দিকে আছেন ইমাম মালিক, আবু হানীফা ও তাঁদের অনুসারীরা। বাগাভী জানান, দুই পক্ষই মানে যে আল-ফাতিহা সাতটি আয়াতের সূরা। তফাত শুধু আয়াতগুলো ভাগ করার হিসাবে। তাবারী একে গোনেন না। তাঁর যুক্তি ১:৩ থেকে: তা না হলে আর-রাহমান আর-রাহীম প্রায় পাশাপাশি দুবার আসত।"
          },
          {
            "en": "Al-Qurtubi calls Malik's view the sound position, since the Qur'an, he says, is established by mass transmission, not by solitary reports, and he points to Muslim's hadith of the divided prayer, whose division begins at al-hamdu lillah. Ibn Kathir reports what follows in practice. Ash-Shafi'i recites the basmalah aloud with al-Fatihah; Abu Hanifah, ath-Thawri and Ahmad do not; Malik does not recite it in the prayer at all. He closes the question: the positions are close, since they agreed that the prayer is valid whether it is said aloud or silently.",
            "bn": "কুরতুবীর মতে ইমাম মালিকের মতটিই সঠিক। তাঁর যুক্তি, কুরআন প্রমাণিত হয় কেবল ব্যাপক ধারাবাহিক বর্ণনায়, একক সূত্রের বর্ণনায় নয়। সঙ্গে তিনি মুসলিমের সেই হাদিসের দিকে ইঙ্গিত করেন, যেখানে নামাজ ভাগ করার হিসাব শুরু হয় আলহামদু লিল্লাহ থেকে। এর ব্যবহারিক ফল ইবন কাসীর জানান। শাফিঈ আল-ফাতিহার সঙ্গে বিসমিল্লাহ জোরে পড়েন। আবু হানীফা, সাওরী ও ইমাম আহমাদ জোরে পড়েন না। আর ইমাম মালিক নামাজে তা পড়েনই না। শেষে ইবন কাসীর প্রশ্নটার মীমাংসা টানেন এভাবে: মতগুলো কাছাকাছি, কারণ জোরে পড়ুক বা নিচু স্বরে, নামাজ সহীহ হওয়ায় সবাই একমত।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Name Before the Deed",
          "bn": "কাজের আগে তাঁর সব নাম"
        },
        "p": [
          {
            "en": "At-Tabari reads bismillah as a lesson in conduct. Allah taught His Prophet ﷺ to put the mention of His beautiful names before all his actions, and made that a sunnah for all His creation, so that people open their speech, their letters and their needs with it. The preposition bi needs a verb and none is stated; the hearer supplies it from whatever the speaker is beginning. Al-Baghawi spells the missing verb as I begin, or Say.",
            "bn": "তাবারী বিসমিল্লাহকে পড়েন আদব শেখানোর পাঠ হিসেবে। আল্লাহ তাঁর নবী ﷺ-কে শিখিয়েছেন, প্রতিটি কাজের আগে তাঁর সুন্দর নামগুলোর উল্লেখ করতে। তারপর এটাকেই বানিয়েছেন সব সৃষ্টির জন্য সুন্নাহ। তাই মানুষ কথা, চিঠি আর প্রয়োজনের শুরু করে এ দিয়ে। ‘বি’ অব্যয়টির একটা ক্রিয়া দরকার, অথচ কোনো ক্রিয়া বলা নেই। বক্তা কী শুরু করছেন, তা দেখেই শ্রোতা বুঝে নেন। বাগাভী উহ্য ক্রিয়াটি খুলে বলেন: ‘শুরু করছি’, অথবা ‘বলো’।"
          },
          {
            "en": "As-Sa'di draws a point from the grammar: ism, name, is singular but joined to Allah, so it takes in all His names, and the reciter begins with every name of Allah. Ar-Rahman and ar-Rahim, he says, show that Allah has a vast mercy that encompasses everything and reaches every living being, and that He has written it for the God-fearing who follow His prophets: they have mercy in full, and everybody else has a share of it.",
            "bn": "সা'দী ব্যাকরণ থেকে একটা সূক্ষ্ম কথা বের করেন। ‘ইসম’ অর্থাৎ নাম শব্দটি একবচন, কিন্তু আল্লাহর সঙ্গে যুক্ত হয়েছে। তাই এর ভেতরে তাঁর সব নাম এসে যায়। পাঠক তাই শুরু করেন আল্লাহর প্রতিটি নাম নিয়ে। তাঁর মতে আর-রাহমান ও আর-রাহীম জানিয়ে দেয়, আল্লাহর রহমত বিশাল, সবকিছু ঘিরে আছে, প্রতিটি প্রাণে পৌঁছেছে। আর সেই রহমত তিনি লিখে রেখেছেন মুত্তাকীদের জন্য, যারা তাঁর নবীদের অনুসরণ করে। তারা পায় পূর্ণ রহমত, বাকিরা পায় তার একটা অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names Drawn From Rahmah",
          "bn": "রহমত থেকে দুটি নাম"
        },
        "p": [
          {
            "en": "At-Tabari treats ar-Rahman as the more intensive of the two forms, and brings al-'Arzami's report: ar-Rahman toward all creation, ar-Rahim toward the believers. His own summary: our Lord is Rahman of all His creation in this world and the next, and Rahim of the believers in particular, in this world and the next. In this world that general mercy is rain, provision and health, shared by believer and unbeliever; in the next, it is that He wrongs nobody by a speck's weight.",
            "bn": "তাবারীর মতে দুটি রূপের মধ্যে আর-রাহমান বেশি জোরালো। তিনি আরযামীর বর্ণনা আনেন: আর-রাহমান সব সৃষ্টির প্রতি, আর-রাহীম মুমিনদের প্রতি। তাবারীর নিজের সারকথা: আমাদের রব দুনিয়া ও আখিরাতে তাঁর সব সৃষ্টির জন্য রাহমান, আর দুনিয়া ও আখিরাতে বিশেষ করে মুমিনদের জন্য রাহীম। দুনিয়ায় সবার জন্য রহমত মানে বৃষ্টি, রিজিক আর সুস্থতা, যা মুমিন-কাফির সবাই পায়। আখিরাতে তা এই যে, তিনি কারও ওপর অণু পরিমাণও জুলুম করবেন না।"
          },
          {
            "en": "Al-Baghawi records that not everybody separates the two names. Some held they mean the same, like nadman and nadim, the second added to stir hope in the hearts of those who long for Him. Others made ar-Rahman general and ar-Rahim specific, which is why, he says, a person may be called rahim, but nobody besides Allah is called Rahman. At-Tabari likewise counts Allah and ar-Rahman among the names Allah kept for Himself, while ar-Rahim is a name others may also carry.",
            "bn": "বাগাভী জানান, সবাই নাম দুটিকে আলাদা করেননি। কারও মতে দুটোর অর্থ এক, যেমন ‘নাদমান’ আর ‘নাদীম’। দ্বিতীয়টি এসেছে যারা তাঁর দিকে আকুল, তাদের মনে আশা জাগাতে। আবার কেউ আর-রাহমানকে ব্যাপক আর আর-রাহীমকে বিশেষ অর্থে নিয়েছেন। বাগাভী বলেন, এ কারণেই মানুষকে ‘রাহীম’ বলা যায়, কিন্তু আল্লাহ ছাড়া কাউকে ‘রাহমান’ বলা যায় না। তাবারীও আল্লাহ ও আর-রাহমানকে সেই নামগুলোর মধ্যে গোনেন, যা আল্লাহ নিজের জন্য রেখে দিয়েছেন। আর-রাহীম এমন নাম, যা অন্যরাও বহন করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Is Hamd Simply Thanks",
          "bn": "হামদ কি শুধুই শুকরিয়া"
        },
        "p": [
          {
            "en": "Al-hamdu lillah raises an old question: is hamd the same as shukr, thanks? At-Tabari says yes. Al-hamdu lillah means thanks purely to Allah, to the exclusion of everything worshipped besides Him, for favours beyond counting. His proof is usage: nobody who knows Arabic objects to al-hamdu lillahi shukran, praise to Allah in thanks, so each word can stand in the other's place. Ibn Kathir replies that this claim needs examination, because many later scholars draw a line between them.",
            "bn": "আলহামদু লিল্লাহ পুরোনো একটা প্রশ্ন তোলে: হামদ আর শুকর কি একই জিনিস? তাবারীর উত্তর, হ্যাঁ। তাঁর মতে আলহামদু লিল্লাহ মানে খাঁটি শুকরিয়া কেবল আল্লাহর, তাঁকে ছাড়া যাদের ইবাদত হয় তাদের কারও নয়। আর সেটা অগণিত নিয়ামতের জন্য। তাঁর প্রমাণ ভাষার ব্যবহার। আরবি জানা কেউ ‘আলহামদু লিল্লাহি শুকরান’ বলায় আপত্তি করেন না, মানে শুকরিয়া হিসেবে আল্লাহর প্রশংসা। কাজেই একটি শব্দ অন্যটির জায়গায় বসতে পারে। ইবন কাসীর জবাবে বলেন, এই দাবি ভেবে দেখার মতো, কারণ পরবর্তী অনেক আলিম দুটোর মাঝে সীমা টানেন।"
          },
          {
            "en": "On that line, as Ibn Kathir relays it, hamd is praise in words for qualities a person has in himself and for those that reach others, while shukr answers only a favour received, but is given by heart, tongue and limbs; each is the wider from its own side. Al-Baghawi simply makes hamd the wider: every hamid is a shakir, but not every shakir a hamid. Al-Baghawi adds that the statement teaches: Say, al-hamdu lillah. Al-Muyassar likewise finds in it a command to praise Him.",
            "bn": "ইবন কাসীর সেই সীমার ব্যাখ্যা দেন এভাবে। হামদ হলো মুখের প্রশংসা, কারও নিজের গুণের জন্যও, আবার যে গুণের উপকার অন্যের কাছে পৌঁছায় তার জন্যও। শুকর কেবল পাওয়া অনুগ্রহের জবাব, তবে তা হয় অন্তর, জিহ্বা ও অঙ্গপ্রত্যঙ্গ দিয়ে। তাই একেক দিক থেকে একেকটি ব্যাপক। বাগাভী সোজাসুজি হামদকেই ব্যাপক বলেন: প্রত্যেক হামদকারী শুকরকারী, কিন্তু প্রত্যেক শুকরকারী হামদকারী নয়। বাগাভী আরও বলেন, বাক্যটি সংবাদের আকারে এলেও এতে শিক্ষা আছে: বলো, আলহামদু লিল্লাহ। মুয়াসসারও এর ভেতরে প্রশংসা করার হুকুম দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Master, Mender and Owner",
          "bn": "সর্দার, সংশোধনকারী ও মালিক"
        },
        "p": [
          {
            "en": "Rabb, at-Tabari says, has three senses in Arabic: the master who is obeyed, the one who puts a thing right and keeps it so, and the owner. Our Lord is all of them, the master without equal, the mender of His creation's affairs through His favours, and the owner of creation and command. Al-Baghawi adds a point of usage: a man may be the rabb of a house, but ar-Rabb, with the article, is said of nobody but Allah.",
            "bn": "তাবারী বলেন, আরবিতে ‘রব’ শব্দের তিনটি অর্থ: যার আনুগত্য করা হয় সেই সর্দার, যে কোনো কিছুকে ঠিক করে দেয় ও ঠিক রাখে, আর মালিক। আমাদের রব এর সবই। তিনি এমন সর্দার যাঁর সমকক্ষ নেই। নিয়ামত দিয়ে তিনি সৃষ্টির সব বিষয় ঠিক করে দেন। আর সৃষ্টি ও হুকুম, দুটোরই মালিক তিনি। বাগাভী ভাষার একটা ব্যবহার মনে করিয়ে দেন: মানুষকে ঘরের রব বলা যায়, কিন্তু ‘আর-রব’, আলিফ-লামসহ, আল্লাহ ছাড়া কারও জন্য বলা হয় না।"
          },
          {
            "en": "Al-'alamin, the worlds, at-Tabari explains as a plural with no singular of its own form: each kind of creature is a world, mankind a world and the jinn a world. He gives this as the view of Ibn 'Abbas and Sa'id ibn Jubayr. Al-Baghawi records a narrower report from Ibn 'Abbas, jinn and mankind, those addressed by revelation, citing 25:1, beside Qatadah, Mujahid and al-Hasan, who said all created things, citing 26:23 and 26:24.",
            "bn": "আল-আলামীন মানে জগৎসমূহ। তাবারী বলেন, শব্দটি এমন বহুবচন, যার নিজস্ব একবচন রূপ নেই। সৃষ্টির প্রতিটি শ্রেণি একেকটি জগৎ: মানুষ একটি জগৎ, জিন একটি জগৎ। তাঁর মতে এটি ইবন আব্বাস (রাঃ) ও সাঈদ ইবন জুবাইরের মত। বাগাভী ইবন আব্বাস থেকে একটু সংকীর্ণ এক বর্ণনা আনেন: জিন ও মানুষ, যাদের প্রতি ওহীর সম্বোধন, আর দলিল ২৫:১। পাশাপাশি তিনি আনেন কাতাদা, মুজাহিদ ও হাসানের মত: সমস্ত সৃষ্টি। তাঁদের দলিল ২৬:২৩ ও ২৬:২৪।"
          }
        ]
      },
      {
        "h": {
          "en": "King or Owner of Recompense",
          "bn": "প্রতিদান দিবসের বাদশাহ, না মালিক"
        },
        "p": [
          {
            "en": "Why does 1:3 repeat ar-Rahman ar-Rahim? Al-Qurtubi answers that Rabb al-'alamin carries a note of warning, so He paired it with names of encouragement, joining awe of Him and longing for Him, as 15:49 and 15:50 pair forgiveness with punishment. He cites a hadith Muslim records (2755), not tied to this verse: \"If a believer were to know the punishment none would have the audacity to aspire for Paradise, and if a non-believer were to know what is there with Allah as a mercy, none would have been disappointed in regard to Paradise.\"",
            "bn": "১:৩ আয়াতে আর-রাহমান আর-রাহীম আবার কেন? কুরতুবীর উত্তর, ‘রাব্বুল আলামীন’-এর মধ্যে সতর্কতার সুর আছে। তাই আল্লাহ এর সঙ্গে জুড়ে দিয়েছেন উৎসাহের নাম, যাতে তাঁর প্রতি ভয় আর তাঁর দিকে আকুলতা এক হয়, যেমন ১৫:৪৯ ও ১৫:৫০ আয়াতে ক্ষমার পাশে শাস্তির কথা এসেছে। এখানে তিনি মুসলিমের একটি হাদিস আনেন (২৭৫৫), যা এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়: “মুমিন যদি জানত আল্লাহর কাছে কী শাস্তি আছে, কেউ জান্নাতের আশা করার সাহস পেত না। আর কাফির যদি জানত আল্লাহর কাছে কী রহমত আছে, কেউ জান্নাত থেকে নিরাশ হতো না।”"
          },
          {
            "en": "The next word is read two ways. Al-Baghawi names 'Asim, al-Kisa'i and Ya'qub for maaliki, owner, and the other readers for maliki, king, and al-Qurtubi says both are narrated from the Prophet ﷺ. At-Tabari explains each: as king, sovereignty that Day is His alone, over those who were tyrant kings in this world; as owner, in Ibn 'Abbas's words, nobody owns any judgement with Him that Day. At-Tabari prefers king, since every king owns but not every owner is king; al-Qurtubi reports Abu Hatim holding owner the stronger praise of the Creator.",
            "bn": "পরের শব্দটি দুইভাবে পড়া হয়। বাগাভী জানান, আসিম, কিসাঈ ও ইয়াকূব পড়েছেন ‘মা-লিকি’, অর্থাৎ মালিক। বাকি কারীগণ পড়েছেন ‘মালিকি’, অর্থাৎ বাদশাহ। কুরতুবী বলেন, দুটো পাঠই নবী ﷺ থেকে বর্ণিত। তাবারী দুটোর ব্যাখ্যা দেন। বাদশাহ অর্থে: সেদিনের রাজত্ব কেবল তাঁর, দুনিয়ার দাম্ভিক বাদশাহদের কারও নয়। মালিক অর্থে, ইবন আব্বাস (রাঃ)-এর ভাষায়: সেদিন তাঁর সঙ্গে কেউ কোনো ফয়সালার মালিক নয়। তাবারী বাদশাহ পাঠটিকে অগ্রাধিকার দেন, কারণ প্রত্যেক বাদশাহ মালিক, কিন্তু প্রত্যেক মালিক বাদশাহ নয়। আর কুরতুবী আবু হাতিমের মত আনেন: স্রষ্টার প্রশংসায় ‘মা-লিক’ বেশি জোরালো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Deeds Are Repaid",
          "bn": "আমলের বদলা পাওয়ার দিন"
        },
        "p": [
          {
            "en": "Ad-din here, at-Tabari says, is the reckoning and the repayment of deeds, as the Arab line has it: as you deal, so you will be dealt with. Al-Qurtubi gives recompense and reckoning from Ibn 'Abbas, Ibn Mas'ud and Qatadah. Al-Baghawi records Mujahid's reckoning and Qatadah's recompense, and Muhammad ibn Ka'b's reading: the Day on which nothing avails but din.",
            "bn": "তাবারী বলেন, এখানে ‘দীন’ মানে হিসাব আর আমলের প্রতিদান। আরবদের কবিতার পঙ্‌ক্তিতেই আছে: যেমন করবে, তেমন পাবে। কুরতুবী ইবন আব্বাস (রাঃ), ইবন মাসঊদ (রাঃ) ও কাতাদা থেকে আনেন প্রতিফল ও হিসাবের অর্থ। বাগাভী আনেন মুজাহিদের ব্যাখ্যা: হিসাব; আর কাতাদার ব্যাখ্যা: প্রতিফল। সঙ্গে মুহাম্মাদ ইবন কা'বের পাঠ: সেই দিন, যেদিন দীন ছাড়া আর কিছুই কাজে আসবে না।"
          },
          {
            "en": "Why name this Day, when He owns every day? As-Sa'di answers that on it His complete sovereignty, justice and wisdom appear in full, and creatures' possessions come to an end, so kings and subjects stand alike. Al-Qurtubi adds that in this world His dominion was disputed, and on that Day nobody disputes it. Al-Muyassar adds: reciting this verse in every rak'ah reminds the worshipper of the Last Day and urges him to prepare with good deeds.",
            "bn": "সব দিনের মালিকই তো তিনি, তবে এই দিনটির নাম আলাদা করে কেন? সা'দীর উত্তর, সেদিন তাঁর পূর্ণ রাজত্ব, ইনসাফ ও প্রজ্ঞা পুরোপুরি প্রকাশ পাবে। সৃষ্টির সব মালিকানা শেষ হয়ে যাবে, বাদশাহ আর প্রজা এক কাতারে দাঁড়াবে। কুরতুবী যোগ করেন, দুনিয়ায় তাঁর রাজত্ব নিয়ে বিবাদ হয়েছে, সেদিন কেউ বিবাদ করবে না। মুয়াসসার যোগ করে: প্রতি রাকআতে এই আয়াত পড়া নামাজিকে আখিরাতের দিন মনে করিয়ে দেয়, আর নেক আমল দিয়ে প্রস্তুত হতে তাগিদ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Me and My Servant",
          "bn": "আমার ও আমার বান্দার মাঝে"
        },
        "p": [
          {
            "en": "Muslim records (395) from Abu Hurayrah that a prayer without Umm al-Qur'an is deficient, and that the Messenger of Allah ﷺ reported Allah saying: \"I have divided the prayer into two halves between Me and My servant, and My servant will receive what he asks. When the servant says: Praise be to Allah, the Lord of the universe, Allah the Most High says: My servant has praised Me. And when he says: The Most Compassionate, the Merciful, Allah the Most High says: My servant has lauded Me.\"",
            "bn": "ইমাম মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন (৩৯৫): যে নামাজে উম্মুল কুরআন পড়া হয় না, সে নামাজ অসম্পূর্ণ। আর রাসূলুল্লাহ ﷺ জানিয়েছেন, আল্লাহ বলেন: “আমি নামাজকে আমার ও আমার বান্দার মাঝে দুই ভাগে ভাগ করেছি, আর আমার বান্দা যা চাইবে তা পাবে। বান্দা যখন বলে, আলহামদু লিল্লাহি রাব্বিল আলামীন, মহান আল্লাহ বলেন: আমার বান্দা আমার প্রশংসা করেছে। যখন বলে, আর-রাহমানির রাহীম, মহান আল্লাহ বলেন: আমার বান্দা আমার গুণগান করেছে।”"
          },
          {
            "en": "\"And when he says: Master of the Day of judgment, He remarks: My servant has glorified Me,\" and sometimes He would say: \"My servant entrusted (his affairs) to Me. And when he says: Thee do we worship and of Thee do we ask help, He says: This is between Me and My servant, and My servant will receive what he asks for.\" Then, at the request for guidance in 1:6 and 1:7, He says: \"This is for My servant, and My servant will receive what he asks for.\" The report is in Muslim's Sahih.",
            "bn": "“আর যখন বলে, মালিকি ইয়াওমিদ্দীন, তিনি বলেন: আমার বান্দা আমার মহিমা ঘোষণা করেছে।” কখনো তিনি বলতেন: “আমার বান্দা নিজের সব বিষয় আমার হাতে সঁপে দিয়েছে। আর যখন বলে, ইয়্যাকা নাবুদু ওয়া ইয়্যাকা নাসতাঈন, তিনি বলেন: এটা আমার ও আমার বান্দার মাঝে, আর আমার বান্দা যা চাইবে তা পাবে।” তারপর ১:৬ ও ১:৭ আয়াতে হিদায়াত চাওয়ার সময় তিনি বলেন: “এটা আমার বান্দার জন্য, আর আমার বান্দা যা চাইবে তা পাবে।” হাদিসটি সহীহ মুসলিমে আছে।"
          },
          {
            "en": "At exactly the line the hadith calls between Me and My servant, the grammar turns. Al-Qurtubi notes that from the start of the surah to here everything was a report about Allah and praise of Him; now the reciter addresses Him. Ibn Kathir explains: having praised Allah, the servant has as it were drawn near and come into His presence. Iyyaka, You, then stands before both verbs. As-Sa'di reads that fronting as restriction, You and nobody else, and Ibn Kathir as emphasis and restriction; al-Qurtubi speaks of putting first what matters most, so the worshipper is not named before the Worshipped.",
            "bn": "হাদিস যে লাইনকে বলছে ‘আমার ও আমার বান্দার মাঝে’, ঠিক সেখানেই কথার ধরন বদলে যায়। কুরতুবী লক্ষ করেন, সূরার শুরু থেকে এ পর্যন্ত সবই ছিল আল্লাহর ব্যাপারে সংবাদ আর তাঁর প্রশংসা। এখন পাঠক সরাসরি তাঁকে সম্বোধন করেন। ইবন কাসীর এর যৌক্তিকতা দেখান: আল্লাহর প্রশংসা করতে করতে বান্দা যেন কাছে এসে তাঁর সামনে হাজির হয়েছে। তারপর ‘ইয়্যাকা’, আপনাকেই, দুটো ক্রিয়ার আগে বসে। সা'দী এই আগে আনাকে সীমাবদ্ধকরণ হিসেবে পড়েন: কেবল আপনাকেই, আর কাউকে নয়। ইবন কাসীরের মতে এতে আছে গুরুত্ব আর সীমাবদ্ধকরণ, দুটোই। কুরতুবী বলেন গুরুত্বপূর্ণটি আগে আনার কথা, যাতে মাবূদের আগে ইবাদতকারীর উল্লেখ না আসে।"
          },
          {
            "en": "Why worship before help? Ibn Kathir: worship is the aim and help the means to it. As-Sa'di: the general before the particular, and Allah's right before His servant's; help is named though worship includes it, because the servant needs it in every act of worship. Ibn Kathir also relays a saying of some of the early generations: al-Fatihah is the secret of the Qur'an, and its secret is this verse. The first half disowns shirk; the second disowns any power and strength of one's own.",
            "bn": "ইবাদত আগে, সাহায্য পরে কেন? ইবন কাসীর বলেন, ইবাদতই লক্ষ্য, আর সাহায্য তার উপায়। সা'দী বলেন, আগে ব্যাপকটি, পরে নির্দিষ্টটি; আর বান্দার হকের আগে আল্লাহর হক। ইবাদতের মধ্যে সাহায্য চাওয়া এমনিতেই থাকে, তবু আলাদা করে বলা হয়েছে, কারণ প্রতিটি ইবাদতে বান্দার তাঁর সাহায্য লাগে। ইবন কাসীর সালাফের কারও একটি কথাও আনেন: আল-ফাতিহা কুরআনের রহস্য, আর আল-ফাতিহার রহস্য এই আয়াত। প্রথম অংশ শিরক থেকে মুক্তির ঘোষণা, দ্বিতীয় অংশ নিজের সব শক্তি-সামর্থ্যের দাবি থেকে মুক্তির ঘোষণা।"
          }
        ]
      }
    ]
  },
  "1:6": {
    "sections": [
      {
        "h": {
          "en": "From Praise to Petition",
          "bn": "প্রশংসা থেকে প্রার্থনায়"
        },
        "p": [
          {
            "en": "Ihdina as-sirata al-mustaqim: guide us to the straight path. Until this verse al-Fatihah has praised and pledged; here, for the first time, it asks. Ibn Kathir explains the order. After praise of the Lord who is asked, a request fittingly follows, and this is the most complete state of a petitioner: to praise first, then ask for his own need and that of his believing brothers, hence ihdina, guide us. Asking so, he says, is likelier to succeed and nearer to an answer.",
            "bn": "ইহদিনাস সিরাতাল মুস্তাকীম: আমাদের সরল পথ দেখাও। এর আগ পর্যন্ত সূরা ফাতিহা প্রশংসা করেছে, অঙ্গীকার করেছে। এখানে এসে সে প্রথমবার কিছু চাইছে। এই ক্রমের কারণ ইবন কাসীর ব্যাখ্যা করেন। যাঁর কাছে চাওয়া হবে, তাঁর প্রশংসার পর প্রার্থনা আসাই মানানসই। প্রার্থীর সবচেয়ে পূর্ণ অবস্থা এটাই: আগে গুণগান, তারপর নিজের প্রয়োজন আর মুমিন ভাইদের প্রয়োজন চাওয়া। এ জন্যই ক্রিয়াটি ইহদিনা, আমাদের পথ দেখাও। তাঁর মতে এভাবে চাইলে প্রয়োজন মেটার সম্ভাবনা বেশি, কবুলও বেশি কাছে।"
          },
          {
            "en": "Al-Qurtubi records from some scholars that Allah placed the whole of supplication in this surah: half of it gathers praise, half gathers needs. This supplication, he adds, is better than any a worshipper composes, because the Lord of the worlds spoke these words Himself, so the worshipper asks with His speech. The pledge of 1:5 belongs with 1:1 to 1:5; at-Tabari makes the bridge, reading ihdina as the same kind of request as the asking for help before it.",
            "bn": "কুরতুবী কিছু আলিমের কথা উদ্ধৃত করেন: আল্লাহ দোয়ার পুরোটা এই সূরায় রেখে দিয়েছেন। এর অর্ধেকে প্রশংসা জড়ো হয়েছে, বাকি অর্ধেকে প্রয়োজন। তিনি আরও বলেন, বান্দা নিজে বানিয়ে যে দোয়া করে, তার চেয়ে এই দোয়া উত্তম। কারণ কথাগুলো রাব্বুল আলামীন নিজেই বলেছেন, ফলে বান্দা তাঁরই কালাম দিয়ে তাঁর কাছে চাইছে। ১:৫ আয়াতের অঙ্গীকারের আলোচনা ১:১ থেকে ১:৫ আয়াতের প্রবন্ধে। সেতুটা তাবারী নিজেই বাঁধেন: তাঁর পাঠে ইহদিনা আগের সাহায্য চাওয়ারই সমগোত্রীয় প্রার্থনা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verb Asks For",
          "bn": "ক্রিয়াটি আসলে কী চায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi calls ihdina a supplication and a longing from the nurtured servant to his Lord, meaning: point us to the straight path, direct us to it, and show us the road of Your guidance that brings us near to You. He records a second account of the root: its origin is inclining. Inna hudna ilayka in 7:156 means we have inclined to You, and a gift is a hadiyyah because it passes between owners. On that account the prayer means: incline our hearts to the truth.",
            "bn": "কুরতুবী ইহদিনাকে বলেন প্রতিপালিত বান্দার পক্ষ থেকে রবের কাছে দোয়া ও আকুতি। অর্থ দাঁড়ায়: আমাদের সরল পথটা চিনিয়ে দাও, সেদিকে চালাও, আর তোমার হিদায়াতের সেই পথ দেখাও যা তোমার নৈকট্যে নিয়ে যায়। শব্দমূলের আরেকটি ব্যাখ্যাও তিনি আনেন: এর মূল অর্থ ঝুঁকে পড়া। ৭:১৫৬ আয়াতের ইন্না হুদনা ইলাইকা মানে আমরা তোমার দিকে ঝুঁকেছি। উপহারকে হাদিয়া বলা হয়, কারণ তা এক মালিকের হাত থেকে আরেক মালিকের হাতে যায়। এই ব্যাখ্যায় দোয়াটির মানে: আমাদের অন্তর সত্যের দিকে ঝুঁকিয়ে দাও।"
          },
          {
            "en": "Ibn Kathir defines this guidance as direction and enabling, irshad and tawfiq. Taking its object with no preposition, he notes, the verb carries the sense of inspire us, enable us, provide us. With ila, as in 16:121, it means pointing out; with li, as in 7:43, it means He enabled us and made us fit for it. At-Tabari insists the sense here is tawfiq. Allah does not guide the wrongdoing people cannot mean He left their duties unexplained, he argues, since He explained them to every accountable person; it means He does not enable them.",
            "bn": "ইবন কাসীরের সংজ্ঞায় এখানে হিদায়াত মানে ইরশাদ ও তাওফীক: পথ দেখানো আর সামর্থ্য দেওয়া। তিনি লক্ষ করেন, ক্রিয়াটি কোনো অব্যয় ছাড়াই সরাসরি কর্মে গেছে। তাই এর ভেতরে আরও কিছু অর্থ ঢুকে পড়েছে: অন্তরে ঢেলে দাও, তাওফীক দাও, দান করো। ইলা যোগে এলে, যেমন ১৬:১২১ আয়াতে, মানে পথ চিনিয়ে দেওয়া। লাম যোগে এলে, যেমন ৭:৪৩ আয়াতে, মানে তিনি তাওফীক দিয়েছেন, এর যোগ্য বানিয়েছেন। তাবারী জোর দিয়ে বলেন, এখানে অর্থ তাওফীক। 'আল্লাহ জালিম সম্প্রদায়কে হিদায়াত দেন না' মানে এই নয় যে তিনি তাদের কর্তব্য বুঝিয়ে দেননি, কারণ দায়িত্বপ্রাপ্ত সবাইকে তিনি বুঝিয়েছেন। মানে হলো, তিনি তাদের তাওফীক দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Already Guided, Still Asking",
          "bn": "পথে থেকেও পথ চাওয়া"
        },
        "p": [
          {
            "en": "The objection is old. How can a believer ask for guidance in every prayer when he already has it? Is that asking for what is already in hand? Ibn Kathir answers no. Were the believer not in need of asking night and day, Allah would not have directed him to it. Every hour and in every state the servant needs Allah: to be kept firm on guidance, rooted in it, clear-sighted by it, given more of it, and kept going on it.",
            "bn": "আপত্তিটা পুরোনো। মুমিন তো আগেই হিদায়াত পেয়েছে, তাহলে প্রতি নামাযে সে তা চায় কেন? হাতে যা আছে, তা-ই আবার চাওয়া নয় কি? ইবন কাসীরের জবাব: না। দিনরাত এই প্রার্থনার প্রয়োজন না থাকলে আল্লাহ বান্দাকে এর দিকে পথ দেখাতেন না। প্রতিটি মুহূর্তে, প্রতিটি অবস্থায় বান্দা আল্লাহর মুখাপেক্ষী। তার দরকার হিদায়াতের উপর অবিচল থাকা, তাতে শিকড় গাড়া, তার আলোয় পরিষ্কার দেখা, তা আরও পাওয়া, আর তার উপর টিকে থাকা।"
          },
          {
            "en": "He argues from the Qur'an. In 4:136 those who have believed are commanded to believe, and the aim is not to gain what is held but firmness and continuance. In 3:8 believers are taught to say: our Lord, do not let our hearts swerve after You have guided us. Abu Bakr (RA), he adds, used to recite that verse silently after al-Fatihah in the third rak'ah of Maghrib. His closing gloss on 1:6: keep us on it, and do not turn us aside to anything else.",
            "bn": "কুরআন থেকে তিনি যুক্তি আনেন। ৪:১৩৬ আয়াতে ঈমানদারদেরই ঈমান আনতে বলা হয়েছে। উদ্দেশ্য হাতে থাকা জিনিস আবার পাওয়া নয়, বরং অবিচলতা আর ধারাবাহিকতা। ৩:৮ আয়াতে মুমিনদের শেখানো হয়েছে: হে আমাদের রব, হিদায়াত দেওয়ার পর আমাদের অন্তর বাঁকা করে দিও না। ইবন কাসীর জানান, আবু বকর (রাঃ) মাগরিবের তৃতীয় রাকআতে ফাতিহার পর এ আয়াত নিচু স্বরে পড়তেন। ১:৬ আয়াতের শেষ ব্যাখ্যায় তিনি বলেন: আমাদের এর উপর টিকিয়ে রাখো, অন্য কোনো দিকে ফিরিয়ে দিও না।"
          },
          {
            "en": "Al-Baghawi reports from Ali and Ubayy ibn Ka'b (RA) that ihdina means make us firm, as you might tell someone already standing, stand until I come back: stay as you are. Believers already guided ask, he says, for firmness and for more, since Allah's kindnesses and guidance have no end. As-Sa'di divides the request: guidance to the path, which is holding to Islam and leaving other religions, and guidance within the path, which covers every detail of the religion in knowledge and practice.",
            "bn": "বাগাভী আলী ও উবাই ইবন কা'ব (রাঃ) থেকে বর্ণনা করেন, ইহদিনা মানে আমাদের অবিচল রাখো। যে আগে থেকেই দাঁড়িয়ে আছে, তাকে যেমন বলা হয়, আমি ফিরে না আসা পর্যন্ত দাঁড়াও, অর্থাৎ যেমন আছ তেমন থাকো। বাগাভীর মতে হিদায়াতপ্রাপ্ত মুমিন এ দোয়ায় অবিচলতা চায়, আরও বেশিও চায়। কারণ আল্লাহর অনুগ্রহ আর হিদায়াতের শেষ নেই। সা'দী প্রার্থনাটিকে দুই ভাগ করেন। পথের দিকে হিদায়াত: ইসলাম আঁকড়ে ধরা আর অন্য সব ধর্ম ছেড়ে দেওয়া। পথের ভেতরে হিদায়াত: জ্ঞানে ও আমলে দ্বীনের প্রতিটি খুঁটিনাটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Firmness for the Years Ahead",
          "bn": "সামনের দিনগুলোর জন্য অবিচলতা"
        },
        "p": [
          {
            "en": "At-Tabari takes a narrower line. Ihdina, for him, asks to be enabled to stay firm in obeying Allah and to hit what is right in His commands and prohibitions, for the rest of a life, not for deeds already past. He tests the reading 'increase us in guidance'. If the increase is more explanation, it makes no sense, since Allah imposes no duty without first making it clear. If it is more help and enabling, that can only concern deeds to come, which returns to his own reading.",
            "bn": "তাবারী পথটা আরও সরু করে ধরেন। তাঁর কাছে ইহদিনা মানে আল্লাহর আনুগত্যে অবিচল থাকার তাওফীক চাওয়া, আর তাঁর আদেশ-নিষেধে সঠিকটা ধরতে পারার তাওফীক। এটা জীবনের বাকি সময়ের জন্য, পেছনে ফেলে আসা আমলের জন্য নয়। 'আমাদের হিদায়াত বাড়িয়ে দাও', এই ব্যাখ্যাটি তিনি যাচাই করেন। বাড়তি মানে যদি আরও ব্যাখ্যা হয়, কথাটা অর্থহীন, কারণ আল্লাহ কোনো ফরজ আগে স্পষ্ট না করে চাপান না। আর বাড়তি মানে যদি আরও সাহায্য ও তাওফীক হয়, তা কেবল সামনের আমলের জন্যই হতে পারে। তখন কথাটা তাঁর নিজের ব্যাখ্যাতেই ফিরে আসে।"
          },
          {
            "en": "So al-Baghawi and Ibn Kathir count increase among the meanings, while at-Tabari folds it back into steadfastness for the time ahead; both positions stand here as their authors give them. Ma'arif al-Qur'an keeps increase in its own way: tawfiq, the guidance special to believers, has no upper limit, and every righteous deed brings more of it, as 47:17 says, those who are guided, He increases them in guidance. Even the greatest prophets, it says, kept seeking more to their last breath.",
            "bn": "তাহলে দাঁড়াল এই: বাগাভী ও ইবন কাসীর বাড়তি হিদায়াতকে অর্থের মধ্যে গোনেন, আর তাবারী তা সামনের দিনের অবিচলতার ভেতরেই ফিরিয়ে আনেন। দুটি অবস্থানই এখানে রাখা হলো, যাঁর যেমন বক্তব্য। মাআরিফুল কুরআন নিজের মতো করে বাড়তির কথা রাখে। তার ব্যাখ্যায় মুমিনদের বিশেষ হিদায়াত তাওফীক, এর কোনো শেষ সীমা নেই, আর প্রতিটি নেক আমল তা বাড়ায়। যেমন ৪৭:১৭ আয়াতে আছে: যারা হিদায়াত পেয়েছে, তিনি তাদের হিদায়াত বাড়িয়ে দেন। মাআরিফের কথায়, সবচেয়ে বড় নবীরাও শেষ নিঃশ্বাস পর্যন্ত আরও চেয়ে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Names for the Road",
          "bn": "এক পথের নানা নাম"
        },
        "p": [
          {
            "en": "At-Tabari opens the second half of the verse with a claim of agreement: all the interpreters hold that as-sirat al-mustaqim is the clear road with no crookedness in it, as in the speech of all the Arabs, and he quotes Jarir praising a caliph who stays straight when the watering-paths twist. The Arabs then borrow sirat for any word or deed called straight or crooked. Al-Qurtubi defines mustaqim as without crookedness or deviation, citing 6:153: this is My path, straight, so follow it.",
            "bn": "আয়াতের দ্বিতীয় অংশের শুরুতে তাবারী ঐকমত্যের দাবি করেন: সব মুফাসসিরের মতে আস-সিরাতুল মুস্তাকীম এমন স্পষ্ট পথ, যাতে কোনো বাঁক নেই। গোটা আরবের ভাষাতেও এর মানে এটাই। প্রমাণে তিনি জারীরের কবিতা আনেন, যেখানে এক খলিফার প্রশংসা: পানির ঘাটের পথগুলো বেঁকে গেলেও তিনি সোজা থাকেন। পরে আরবরা সিরাত শব্দটি ধার নেয় যেকোনো কথা বা কাজের জন্য, যাকে সোজা বা বাঁকা বলা যায়। কুরতুবী মুস্তাকীমের সংজ্ঞা দেন: যাতে কোনো বক্রতা বা বিচ্যুতি নেই। সঙ্গে আনেন ৬:১৫৩ আয়াত: এটাই আমার সরল পথ, তোমরা এরই অনুসরণ করো।"
          },
          {
            "en": "Who or what is the road? The commentaries fetched for this verse record several answers. Islam: from Ibn Abbas; from Jabir ibn Abdullah, who added that it is wider than what lies between heaven and earth; and through as-Suddi from Ibn Mas'ud and other Companions. The Book of Allah: from Ibn Mas'ud, and from Ali (RA), which al-Baghawi reports as the Prophet's words, though Ibn Kathir judges it likelier to be Ali's own. The truth: Mujahid, which Ibn Kathir calls the most comprehensive.",
            "bn": "পথটা আসলে কে বা কী? এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তাতে কয়েকটি জবাব আছে। ইসলাম: ইবন আব্বাস থেকে; জাবির ইবন আবদুল্লাহ থেকে, যিনি যোগ করেন, তা আসমান ও জমিনের মাঝখানের চেয়েও প্রশস্ত; আর সুদ্দীর সূত্রে ইবন মাসউদ ও অন্য সাহাবিদের থেকে। আল্লাহর কিতাব: ইবন মাসউদ থেকে, আর আলী (রাঃ) থেকে। বাগাভী শেষ কথাটি নবী ﷺ-এর বাণী হিসেবে উল্লেখ করেন, তবে ইবন কাসীরের বিচারে এটা আলীর নিজের কথা হওয়াই বেশি সম্ভব। সত্য: মুজাহিদ। ইবন কাসীর এটাকেই সবচেয়ে ব্যাপক বলেন।"
          },
          {
            "en": "Abu al-Aliyah said: the Messenger of Allah ﷺ and his two companions after him, named in at-Tabari's report as Abu Bakr and Umar (RA). Told of this, al-Hasan said Abu al-Aliyah had spoken truly and counselled sincerely. Al-Baghawi adds Sa'id ibn Jubayr's 'the road to Paradise' and Sahl ibn Abdullah's 'the way of the Sunnah and the community'. Al-Qurtubi records al-Fudayl ibn Iyad's 'the road of Hajj', and answers that this is too specific: the general meaning is better.",
            "bn": "আবুল আলিয়া বলেছেন: আল্লাহর রাসূল ﷺ আর তাঁর পরে তাঁর দুই সঙ্গী। তাবারীর বর্ণনায় দুজনের নাম আছে: আবু বকর ও উমর (রাঃ)। কথাটা হাসানকে জানানো হলে তিনি বলেন, আবুল আলিয়া সত্য বলেছেন, আন্তরিক নসিহতও করেছেন। বাগাভী আরও দুটি মত যোগ করেন: সাঈদ ইবন জুবাইরের মতে জান্নাতের পথ, সাহল ইবন আবদুল্লাহর মতে সুন্নাহ ও জামাআতের পথ। কুরতুবী ফুদাইল ইবন ইয়াদের মত আনেন: হজের পথ। তারপর জবাব দেন, এটা বড় বেশি সীমিত, ব্যাপক অর্থটাই উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Answers Agree",
          "bn": "জবাবগুলো যেখানে মিলে যায়"
        },
        "p": [
          {
            "en": "Ibn Kathir does not set these answers against each other. The wordings differ, he says, but they return to following Allah and His Messenger, and each entails the others. Whoever follows the Prophet ﷺ and the two after him, Abu Bakr and Umar, has followed the truth; whoever follows the truth has followed Islam; whoever follows Islam has followed the Qur'an, the Book of Allah, His firm rope and His straight path. They confirm each other, he concludes.",
            "bn": "ইবন কাসীর এই জবাবগুলোকে পরস্পরের বিপক্ষে দাঁড় করান না। তাঁর মতে ভাষা আলাদা, কিন্তু সবগুলো ফিরে যায় আল্লাহ ও তাঁর রাসূলের অনুসরণে, আর একটা থাকলে অন্যটাও এসে যায়। যে নবী ﷺ আর তাঁর পরের দুজন, আবু বকর ও উমরের অনুসরণ করল, সে সত্যের অনুসরণ করল। যে সত্যের অনুসরণ করল, সে ইসলামের অনুসরণ করল। যে ইসলামের অনুসরণ করল, সে কুরআনের অনুসরণ করল। কুরআনই আল্লাহর কিতাব, তাঁর মজবুত রশি, তাঁর সরল পথ। তাঁর উপসংহার: জবাবগুলো একে অন্যকে সত্যায়ন করে।"
          },
          {
            "en": "At-Tabari reaches the same place by his own route. His preferred meaning: enable us to stay firm on what You approved, and on what You enabled those You favoured among Your servants to do, in word and deed. Whoever is enabled for that, he explains, has been enabled for Islam, belief in the messengers, holding to the Book, obeying Allah's commands and prohibitions, and following the way of the Prophet ﷺ, of Abu Bakr, Umar, Uthman and Ali, and of every righteous servant. The meaning he chose, he says, takes in all of theirs.",
            "bn": "তাবারী নিজের পথ ধরে একই জায়গায় পৌঁছান। তাঁর পছন্দের অর্থ: তুমি যা পছন্দ করেছ, আর তোমার অনুগ্রহপ্রাপ্ত বান্দাদের কথায় ও কাজে যার তাওফীক দিয়েছ, তার উপর অবিচল থাকার তাওফীক আমাদের দাও। তিনি ব্যাখ্যা করেন, যে এর তাওফীক পেল, সে আরও অনেক কিছুর তাওফীক পেল। ইসলাম, রাসূলদের সত্য বলে মানা, কিতাব আঁকড়ে ধরা, আল্লাহর আদেশ মানা ও নিষেধ থেকে বিরত থাকা। নবী ﷺ-এর পথ, আবু বকর, উমর, উসমান ও আলীর পথ, আর আল্লাহর প্রত্যেক নেক বান্দার পথ। তাঁর কথায়, তাঁর বেছে নেওয়া অর্থের মধ্যে মুফাসসিরদের সবার অর্থই ধরা আছে।"
          },
          {
            "en": "Two shorter commentaries describe the road by where it ends. As-Sa'di calls it the clear road leading to Allah and His Paradise, which is knowing the truth and acting on it. Al-Muyassar names it Islam, the clear road to Allah's pleasure and Paradise, pointed out by the last of His messengers, and adds that a servant has no way to happiness except by keeping straight upon it.",
            "bn": "ছোট দুটি তাফসীর পথটিকে চেনায় তার গন্তব্য দিয়ে। সা'দী বলেন, এটা সেই স্পষ্ট পথ যা আল্লাহ ও তাঁর জান্নাতে পৌঁছে দেয়, আর তা হলো সত্যকে জানা এবং সে অনুযায়ী আমল করা। মুয়াসসার একে বলে ইসলাম: আল্লাহর সন্তুষ্টি ও জান্নাতে পৌঁছানোর স্পষ্ট পথ, যা দেখিয়ে গেছেন তাঁর শেষ রাসূল। সঙ্গে যোগ করে, এর উপর সোজা হয়ে থাকা ছাড়া বান্দার সৌভাগ্যের আর কোনো রাস্তা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Walls, Doors and Curtains",
          "bn": "প্রাচীর, দরজা আর পর্দা"
        },
        "p": [
          {
            "en": "At-Tirmidhi (2859) narrates from an-Nawwas ibn Sam'an (RA) that the Prophet ﷺ said: \"Indeed Allah has struck a parable: a straight path. On the two sides of the path are two walls with open doors, and over the doors are curtains. A caller calls at the head of the path and a caller calls above it: and Allah invites to the Home of Peace and guides whom He wills to a straight path (10:25). The doors on the sides of the path are the limits of Allah, and nobody falls into the limits of Allah until the curtain is lifted. And the caller from above is his Lord's admonisher.\"",
            "bn": "তিরমিযী (২৮৫৯) নাওয়াস ইবন সাম'আন (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: \"আল্লাহ একটি উপমা দিয়েছেন: একটি সরল পথ। পথের দুই পাশে দুটি প্রাচীর, তাতে খোলা দরজা, দরজাগুলোর উপর পর্দা ঝুলছে। পথের মাথায় একজন আহ্বানকারী ডাকছে, আর পথের উপর থেকে আরেকজন ডাকছে: আল্লাহ শান্তির আবাসের দিকে ডাকেন, আর যাকে চান সরল পথে পরিচালিত করেন (১০:২৫)। পথের দুই পাশের দরজাগুলো আল্লাহর সীমারেখা। পর্দা সরানো না হলে কেউ আল্লাহর সীমারেখায় গিয়ে পড়ে না। আর উপর থেকে যে ডাকে, সে তার রবের পক্ষ থেকে উপদেশদাতা।\""
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib. Ibn Kathir cites the report from Ahmad's Musnad in a fuller wording that names each part: the path is Islam, the two walls are Allah's limits, the open doors are what Allah has forbidden, the caller at the head of the path is the Book of Allah, and the caller from above is Allah's admonisher in the heart of every Muslim. Read beside it, ihdina asks to keep walking past doors that stand open behind a mere curtain.",
            "bn": "তিরমিযী হাদীসটিকে হাসান গরীব বলেছেন। ইবন কাসীর একই বর্ণনা আহমাদের মুসনাদ থেকে আরও পূর্ণ শব্দে আনেন, যেখানে প্রতিটি অংশের নাম বলা আছে। পথ হলো ইসলাম, দুই প্রাচীর আল্লাহর সীমারেখা, খোলা দরজাগুলো আল্লাহর হারাম করা বিষয়, পথের মাথার আহ্বানকারী আল্লাহর কিতাব, আর উপরের আহ্বানকারী প্রত্যেক মুসলিমের অন্তরে আল্লাহর উপদেশদাতা। এর পাশে রেখে পড়লে ইহদিনা মানে সেই দরজাগুলো পেরিয়ে হাঁটতে থাকার প্রার্থনা, যেগুলো খোলা, মাঝখানে শুধু একটা পর্দা।"
          }
        ]
      },
      {
        "h": {
          "en": "Known by Those Who Walk It",
          "bn": "পথিকদের দিয়ে পথ চেনা"
        },
        "p": [
          {
            "en": "The next verse, 1:7, names the road by those on it: the path of those You have favoured. As-Sa'di and al-Muyassar identify them as the prophets, the truthful, the martyrs and the righteous, and Ibn Kathir points to 4:69, which names that company. Two paths to avoid follow. Ibn Kathir describes them by their fault: those who knew the truth and turned from it, and those who lost knowledge and wander in error. As-Sa'di likewise names the Jews and those like them for the first, the Christians and those like them for the second.",
            "bn": "পরের আয়াত, ১:৭, পথটিকে চেনায় তার পথিকদের দিয়ে: যাদের তুমি অনুগ্রহ করেছ, তাদের পথ। সা'দী ও মুয়াসসার তাদের পরিচয় দেন নবী, সিদ্দীক, শহীদ ও নেককারদের দল হিসেবে। ইবন কাসীর দেখিয়ে দেন ৪:৬৯ আয়াত, যেখানে এই দলের কথাই আছে। তারপর আসে দুটি পথ, যা এড়িয়ে চলতে হবে। ইবন কাসীর তাদের চেনান দোষ দিয়ে: একদল সত্য জেনেও তা থেকে সরে গেছে, আরেক দল জ্ঞান হারিয়ে গোমরাহিতে দিশাহারা ঘুরছে। সা'দীও একইভাবে বলেন। প্রথম দলের উদাহরণে তিনি ইহুদি ও তাদের মতো লোকদের নাম নেন, দ্বিতীয় দলের উদাহরণে খ্রিস্টান ও তাদের মতো লোকদের।"
          },
          {
            "en": "Ibn Kathir cites a report of Adi ibn Hatim (RA), whose wording at-Tirmidhi (2954) gives: the Prophet ﷺ said, \"The Jews are under wrath and the Christians are astray.\" At-Tirmidhi grades the full narration hasan gharib. Plainly: the verse describes what the text describes, and it licenses nothing against any living person or community. Its lesson turns inward. Knowing the truth and leaving it, and acting without knowing it, are two failures any reciter can fall into, and both are asked against in every rak'ah.",
            "bn": "ইবন কাসীর এ বিষয়ে আদী ইবন হাতিম (রাঃ)-এর একটি বর্ণনা আনেন, যার শব্দ তিরমিযী (২৯৫৪) দেন: নবী ﷺ বলেছেন, \"ইহুদিরা গযবপ্রাপ্ত আর খ্রিস্টানরা পথভ্রষ্ট।\" তিরমিযী পূর্ণ বর্ণনাটিকে হাসান গরীব বলেছেন। কথাটা সোজাসুজি বলা দরকার: আয়াতটি কেবল তা-ই বর্ণনা করে, যা পাঠ বর্ণনা করে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটি দেয় না। এর শিক্ষা নিজের দিকে ফেরে। সত্য জেনে ছেড়ে দেওয়া, আর না জেনে আমল করা, এই দুই ব্যর্থতায় যেকোনো পাঠকই পড়তে পারে। প্রতিটি রাকআতে এ দুটি থেকেই বাঁচার প্রার্থনা করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Request Made Every Rak'ah",
          "bn": "প্রতি রাকআতের প্রার্থনা"
        },
        "p": [
          {
            "en": "As-Sa'di calls this among the most comprehensive and beneficial supplications a servant can make, which is why it must be made in every rak'ah of prayer, out of need for it. Count the obligatory prayers alone: Fajr has 2 rak'ahs, Zuhr, Asr and Isha have 4 each, and Maghrib has 3, seventeen in all. Ma'arif al-Qur'an adds that no member of the human family can claim not to need this prayer, the greatest of the prophets no less than an ordinary Muslim.",
            "bn": "সা'দী একে বলেন বান্দার সবচেয়ে ব্যাপক আর সবচেয়ে উপকারী দোয়াগুলোর অন্যতম। এ কারণেই নামাযের প্রতিটি রাকআতে এ দোয়া করতে হয়, কারণ এর প্রয়োজন অপরিহার্য। শুধু ফরজ নামাযগুলো গুনে দেখুন: ফজরে ২ রাকআত, যোহর, আসর ও ইশায় ৪ রাকআত করে, মাগরিবে ৩ রাকআত, সব মিলিয়ে সতেরো। মাআরিফুল কুরআন যোগ করে, মানবজাতির কেউ দাবি করতে পারে না যে এ দোয়ার প্রয়োজন তার নেই। সবচেয়ে বড় নবীর যেমন দরকার, সাধারণ মুসলিমেরও তেমনই।"
          },
          {
            "en": "The risk of so much repetition is that the words wear smooth. The commentators offer a grip. At-Tabari's reading asks for firmness in what lies ahead, so bring to this line the next thing ahead of you: the choice not yet made, the habit not yet left. As-Sa'di's guidance within the path asks for detail, so name the detail. And the plural keeps you in company: you ask, as Ibn Kathir notes, for your believing brothers too.",
            "bn": "এত বেশি পুনরাবৃত্তির ঝুঁকি হলো, কথাগুলো মুখে মসৃণ হয়ে যায়, মনে আর দাগ কাটে না। মুফাসসিররা ধরে রাখার উপায় দেন। তাবারীর ব্যাখ্যায় এ দোয়া সামনের দিনের অবিচলতা চায়। তাই এই লাইনে পৌঁছে সামনের কাজটাই মনে আনুন: যে সিদ্ধান্ত এখনো নেননি, যে অভ্যাস এখনো ছাড়েননি। সা'দীর 'পথের ভেতরের হিদায়াত' খুঁটিনাটি চায়, তাই খুঁটিনাটিটার নাম নিন। আর বহুবচন আপনাকে একা থাকতে দেয় না। ইবন কাসীর যেমন বলেন, আপনি মুমিন ভাইদের জন্যও চাইছেন।"
          }
        ]
      }
    ]
  }
});
