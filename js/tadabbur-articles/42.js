/**
 * Tadabbur long-form articles — surah 42.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "42:5": {
    "sections": [
      {
        "h": {
          "en": "Heavens on the Verge",
          "bn": "ফেটে পড়ার কিনারে আকাশ"
        },
        "p": [
          {
            "en": "Takadu as-samawatu yatafattarna min fawqihinna: the heavens almost break apart from above them. The verse follows 42:4, which closes on He is the Most High, the Most Great, and it shows what that height and greatness nearly do to the heavens. At-Tabari and the Muyassar gloss yatafattarna as yatashaqqaqna, they crack open. As-Suddi, in at-Tabari's report, gives the same gloss and explains munfatirun bihi in 73:18 as split by it. Ad-Dahhak, also through at-Tabari, says yatasadda'na, they fracture.",
            "bn": "তাকাদুস সামাওয়াতু ইয়াতাফাত্তারনা মিন ফাওকিহিন্না: আকাশগুলো উপর থেকে ফেটে পড়ার উপক্রম হয়। এর ঠিক আগের আয়াত ৪২:৪ শেষ হয়েছে এই কথায়: তিনি সর্বোচ্চ, মহান। এবার আয়াত দেখায়, সেই উচ্চতা আর মহত্ত্ব আকাশের কী দশা প্রায় করে ফেলে। তাবারী ও মুয়াসসার ইয়াতাফাত্তারনার অর্থ করেন ইয়াতাশাক্কাকনা, অর্থাৎ ফেটে চৌচির হয়। তাবারীর বর্ণনায় সুদ্দীও একই অর্থ দেন, আর ৭৩:১৮ আয়াতের মুনফাতিরুম বিহী কথাটির ব্যাখ্যা দেন: তাতে বিদীর্ণ। দাহহাকও তাবারীর সূত্রে বলেন ইয়াতাসাদ্দা'না, অর্থাৎ ভেঙে ফাটল ধরে।"
          },
          {
            "en": "Al-Qurtubi records how the words were read. Most read takadu with the letter ta', while Nafi', Ibn Waththab and al-Kisa'i read it with ya'. Yatafattarna, with its middle root letter doubled, is the reading of most; Abu 'Amr, Abu Bakr, al-Mufaddal and Abu 'Ubayd read yanfatirna, from infitar, the word of 82:1, when the sky breaks apart. He adds that he has already explained this under Surah Maryam. In every reading the verb is governed by takada, almost: the heavens are on the verge, and the verse stops there.",
            "bn": "শব্দগুলো কীভাবে পড়া হয়েছে, কুরতুবী তা লিখে রেখেছেন। অধিকাংশ কারী তাকাদু পড়েন 'তা' অক্ষর দিয়ে, আর নাফি', ইবন ওয়াসসাব ও কিসাঈ পড়েন 'ইয়া' দিয়ে। 'ত্বা' অক্ষরে তাশদীদসহ ইয়াতাফাত্তারনা অধিকাংশের পাঠ। আবু আমর, আবু বকর, মুফাদ্দাল ও আবু উবাইদ পড়েন ইয়ানফাতিরনা, ইনফিতার থেকে। ৮২:১ আয়াতে এই শব্দই এসেছে: যখন আকাশ বিদীর্ণ হবে। কুরতুবী জানান, সূরা মারইয়ামে তিনি এর ব্যাখ্যা আগেই দিয়েছেন। যে পাঠই ধরা হোক, ক্রিয়ার আগে বসে আছে তাকাদা, প্রায়। আকাশ কিনারায় এসে দাঁড়িয়েছে, আয়াত সেখানেই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Cracking Before His Majesty",
          "bn": "মহিমার সামনে চৌচির"
        },
        "p": [
          {
            "en": "Why would the heavens nearly split? At-Tabari's own answer is short: they almost crack open from above the earths, min 'azamat ar-Rahman wa jalalihi, from the greatness of the Most Merciful and His majesty. He adds that the people of interpretation said the same, and gives their words. Ibn 'Abbas (RA), in his report, said: from the weight of the Most Merciful and His greatness, blessed and exalted is He. Qatadah said: from the greatness of Allah and His majesty. Ad-Dahhak said: they fracture from the greatness of Allah.",
            "bn": "আকাশ কেন ফেটে পড়ার উপক্রম হবে? তাবারীর নিজের জবাব সংক্ষিপ্ত: জমিনগুলোর উপর থেকে আকাশ প্রায় ফেটে যায় মিন আযামাতির রাহমানি ওয়া জালালিহী, পরম দয়াময়ের মহত্ত্ব ও প্রতাপের কারণে। তিনি জানান, তাফসীরের আলেমরাও এমনই বলেছেন, এবং তাঁদের কথা উদ্ধৃত করেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) বলেছেন: পরম দয়াময়ের ভার ও তাঁর মহত্ত্বের কারণে, তিনি বরকতময়, সুউচ্চ। কাতাদা বলেছেন: আল্লাহর মহত্ত্ব ও প্রতাপের কারণে। দাহহাক বলেছেন: আল্লাহর মহত্ত্বের কারণে আকাশে ফাটল ধরে।"
          },
          {
            "en": "Ibn Kathir names five who said it: Ibn 'Abbas (RA), ad-Dahhak, Qatadah, as-Suddi and Ka'b al-Ahbar, in a short phrase, faraqan min al-'azamah, out of fear, from the greatness; the abridged English renders it out of fear of His might. The Muyassar has from the greatness of the Most Merciful and His majesty. Al-Qurtubi reports ad-Dahhak and as-Suddi: they split from the greatness and majesty of Allah above them. These are the commentators' own words, and the article adds nothing of its own to them about Allah's attributes.",
            "bn": "ইবন কাসীর পাঁচজনের নাম করেন, যাঁরা এ কথা বলেছেন: ইবন আব্বাস (রাঃ), দাহহাক, কাতাদা, সুদ্দী ও কা'ব আল-আহবার। কথাটা ছোট্ট: ফারাকান মিনাল আযামাহ, মহত্ত্বের ভয়ে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে এসেছে: তাঁর পরাক্রমের ভয়ে। মুয়াসসার বলে: পরম দয়াময়ের মহত্ত্ব ও প্রতাপের কারণে। কুরতুবী দাহহাক ও সুদ্দীর কথা আনেন: আল্লাহর মহত্ত্ব ও প্রতাপের কারণে আকাশ ফেটে যায়, ফাওকাহুন্না, তাদের উপরে। এগুলো তাফসীরকারদের নিজেদের ভাষা। আল্লাহর গুণাবলি নিয়ে এ লেখা তাঁদের কথার সঙ্গে নিজের কিছু যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word About a Son",
          "bn": "সন্তান দাবির সেই কথা"
        },
        "p": [
          {
            "en": "Al-Baghawi gives a different cause. Each heaven splits above the heaven next to it min qawl al-mushrikin, from the saying of the polytheists: Allah has taken a son. He names its parallel in Surah Maryam, 19:88 to 19:90: they say the Most Merciful has taken a son; you have brought something monstrous; the heavens almost split from it, the earth cleaves and the mountains fall in ruin. Al-Qurtubi reports the same reading from Ibn 'Abbas (RA): each heaven nearly splits above the next, from the polytheists' saying.",
            "bn": "বাগাভী ভিন্ন এক কারণ দেখান। প্রতিটি আকাশ তার পাশের আকাশের উপর ফেটে পড়ে মিন কাওলিল মুশরিকীন, মুশরিকদের এই কথার কারণে: আল্লাহ সন্তান গ্রহণ করেছেন। এর সমান্তরাল আয়াত হিসেবে তিনি সূরা মারইয়ামের ১৯:৮৮ থেকে ১৯:৯০ উল্লেখ করেন। সেখানে আছে: তারা বলে, পরম দয়াময় সন্তান গ্রহণ করেছেন। তোমরা তো এক জঘন্য কথা নিয়ে এসেছ। এতে আকাশ ফেটে পড়ার উপক্রম হয়, জমিন বিদীর্ণ হয়, পাহাড় ভেঙে ধসে পড়ে। কুরতুবী ইবন আব্বাস (রাঃ) থেকেও এই ব্যাখ্যা বর্ণনা করেন: মুশরিকদের সেই কথার কারণে প্রতিটি আকাশ পরেরটির উপর ফেটে পড়ার উপক্রম হয়।"
          },
          {
            "en": "So one name stands behind two readings. At-Tabari and Ibn Kathir report Ibn 'Abbas (RA) on awe of the greatness; al-Qurtubi reports him on the polytheists' saying. The sources consulted for this verse give both, and this article keeps both without choosing between them. One difference of wording is plain on the page: 19:90 says the heavens almost split minhu, from it, the monstrous saying, while 42:5 says min fawqihinna, from above them. Al-Baghawi still reads the two passages together.",
            "bn": "তাহলে একই নামের পেছনে দুই রকম ব্যাখ্যা। তাবারী ও ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন মহত্ত্বের ভয়ের কথা, আর কুরতুবী তাঁর থেকে আনেন মুশরিকদের কথার ব্যাখ্যা। এ আয়াতের জন্য সংগৃহীত তাফসীরে দুটোই আছে। এ লেখা দুটোই রাখছে, কোনোটিকে বেছে নিচ্ছে না। শব্দের একটা পার্থক্য অবশ্য চোখে পড়ে। ১৯:৯০ আয়াতে আকাশ ফেটে পড়ার উপক্রম মিনহু, তা থেকে, মানে সেই জঘন্য কথা থেকে। আর ৪২:৫ আয়াতে আছে মিন ফাওকিহিন্না, তাদের উপর থেকে। তবু বাগাভী দুই জায়গাকে একসঙ্গে পড়েন।"
          },
          {
            "en": "As-Sa'di reads the verse from its context. The passage has just said that Allah revealed to all the messengers, and to Muhammad ﷺ in particular. In these attributes he sees a pointer: the Qur'an carries proofs of the Creator's perfection that should fill hearts with knowing Him, loving and revering Him, and turn every kind of worship, outward and inward, to Him. Among the greatest wrongs and the foulest speech, he says, is taking rivals to Allah besides Him, who hold neither benefit nor harm and are themselves created, in need of Allah in every state.",
            "bn": "সা'দী আয়াতটি পড়েন তার প্রসঙ্গ থেকে। এর আগেই বলা হয়েছে, আল্লাহ সব রাসূলের কাছে ওহি পাঠিয়েছেন, আর বিশেষ করে মুহাম্মাদ ﷺ-এর কাছে। এরপর এই গুণাবলির উল্লেখে তিনি একটা ইঙ্গিত দেখেন। কুরআনে স্রষ্টার পূর্ণতার এমন সব প্রমাণ আছে, যা হৃদয়কে তাঁর পরিচয়, ভালোবাসা ও সম্মানে ভরে দেয়, আর প্রকাশ্য ও গোপন সব ইবাদত তাঁর দিকেই ফিরিয়ে দেয়। তাঁর ভাষায়, সবচেয়ে বড় জুলুম আর সবচেয়ে জঘন্য কথার একটি হলো আল্লাহকে ছেড়ে তাঁর সমকক্ষ দাঁড় করানো। অথচ তাদের হাতে কোনো উপকার বা ক্ষতি নেই। তারা নিজেরাই সৃষ্টি, সব অবস্থায় আল্লাহর মুখাপেক্ষী।"
          },
          {
            "en": "This needs saying plainly. The verse and these readings describe a saying and weigh it; they license nothing against any living person or community, and give no warrant for contempt, harm or hostility towards anyone who holds such a belief today. The weight falls on words spoken about Allah, and the reader's first use of it is to weigh their own, including the careless words a believer can let slip about his Lord without noticing.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত আর এই ব্যাখ্যাগুলো একটি কথার বর্ণনা দেয়, তার ওজন মাপে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। আজ যে এমন বিশ্বাস রাখে, তাকে অবজ্ঞা করার, ক্ষতি করার বা তার সঙ্গে শত্রুতার কোনো ছাড়পত্রও এখানে নেই। ভারটা পড়ে আল্লাহ সম্পর্কে বলা কথার উপর। পাঠক সেটা প্রথমে কাজে লাগাবেন নিজের কথা মাপতে। মুমিনের মুখ থেকেও রব সম্পর্কে বেখেয়ালে যে কথা বেরিয়ে যায়, সেগুলোও এর মধ্যে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Above Which, Above Whom",
          "bn": "কিসের উপর, কার উপর"
        },
        "p": [
          {
            "en": "Min fawqihinna, from above them: above what? The Muyassar answers that each heaven splits above the one next to it; al-Baghawi says the same, as does al-Qurtubi's report from Ibn 'Abbas (RA). At-Tabari reads it as above the earths: the heavens almost crack open from above the earths. Al-Qurtubi gives that view too, under the words it was said, and adds a condition: above the earths, out of khashyah, reverent fear, of Allah, were they among things that reason. The report from ad-Dahhak and as-Suddi ties the phrase to Allah's greatness and majesty.",
            "bn": "মিন ফাওকিহিন্না, তাদের উপর থেকে। কিন্তু কিসের উপর? মুয়াসসারের জবাব: প্রতিটি আকাশ তার পাশের আকাশের উপর ফেটে পড়ে। বাগাভীও তাই বলেন, কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ)-ও তাই। তাবারী অর্থ করেন জমিনগুলোর উপর: জমিনগুলোর উপর থেকে আকাশ ফেটে পড়ার উপক্রম হয়। কুরতুবীও 'বলা হয়েছে' বলে এ মত আনেন, সঙ্গে একটা শর্ত জুড়ে দেন। জমিনগুলোর উপর থেকে, আল্লাহর খাশইয়াত বা ভয়মিশ্রিত শ্রদ্ধায়, যদি আকাশ বোধসম্পন্ন কিছু হতো। আর দাহহাক ও সুদ্দীর বর্ণনা কথাটিকে জুড়ে দেয় আল্লাহর মহত্ত্ব ও প্রতাপের সঙ্গে।"
          },
          {
            "en": "As-Sa'di adds a note on the heavens themselves: they nearly split for all their vastness, and though they are inanimate. Ma'arif al-Qur'an, citing Bayan al-Qur'an, explains the cracking through a hadith it gave earlier in its discussion: the load of angels made the heavens creak, as things creak under too much weight. It infers that angels have bodies, very light, which add up to a great load in their numbers. That hadith's wording is not in the text consulted for this verse, and no tafsir consulted here quotes a hadith of the Prophet ﷺ on it, so the article quotes none.",
            "bn": "সা'দী আকাশ নিয়েই একটা কথা যোগ করেন। আকাশ এত বিশাল, তার উপর জড়, তবু তা ফেটে পড়ার উপক্রম হয়। মাআরিফুল কুরআন বয়ানুল কুরআনের বরাতে এই ফাটলের ব্যাখ্যা দেয় এমন এক হাদিস দিয়ে, যার উল্লেখ তার আলোচনায় আগেই এসেছে। ফেরেশতাদের ভারে আকাশ থেকে চড়চড় শব্দ উঠছিল, অতিরিক্ত বোঝা চাপালে যেমন ওঠে। এ থেকে মাআরিফ সিদ্ধান্ত টানে, ফেরেশতাদেরও দেহ আছে। দেহগুলো খুব হালকা, কিন্তু সংখ্যায় বিপুল বলে মিলে বড় বোঝা হয়ে যায়। ওই হাদিসের মূল ভাষ্য এ আয়াতের জন্য সংগৃহীত লেখায় নেই, আর কোনো তাফসীরই এখানে নবী ﷺ-এর কোনো হাদিস উদ্ধৃত করেনি। তাই এ লেখাও কোনো হাদিস উদ্ধৃত করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Glorifying, Marvelling, Submitting",
          "bn": "তাসবীহ, বিস্ময়, বিনয়"
        },
        "p": [
          {
            "en": "Wa-l-mala'ikatu yusabbihuna bi-hamdi rabbihim: and the angels glorify with the praise of their Lord. At-Tabari explains that the angels pray in obedience to their Lord and in thanks to Him, out of awe of His majesty and greatness, and he reports Ibn 'Abbas (RA): they glorify Him from His greatness. The Muyassar says they declare Him free of what does not befit Him. As-Sa'di calls them the noble angels brought near, humbled before His greatness, lowly before His might, yielding to His lordship; they exalt Him above every deficiency and describe Him with every perfection.",
            "bn": "ওয়াল মালাইকাতু ইউসাব্বিহূনা বিহামদি রাব্বিহিম: আর ফেরেশতারা তাঁদের রবের প্রশংসাসহ তাসবীহ পাঠ করেন। তাবারী বলেন, ফেরেশতারা রবের আনুগত্য আর তাঁর প্রতি কৃতজ্ঞতা নিয়ে সালাত আদায় করেন, তাঁর প্রতাপ ও মহত্ত্বের ভয়ে। তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: তাঁর মহত্ত্বের কারণে তাঁরা তাঁর তাসবীহ করেন। মুয়াসসার বলে, যা তাঁর শানে মানায় না, তা থেকে তাঁরা তাঁকে পবিত্র ঘোষণা করেন। সা'দী তাঁদের বলেন সম্মানিত, নৈকট্যপ্রাপ্ত ফেরেশতা। তাঁরা তাঁর মহত্ত্বের সামনে নত, তাঁর পরাক্রমের সামনে বিনীত, তাঁর রুবূবিয়াতের কাছে অনুগত। সব অপূর্ণতা থেকে তাঁরা তাঁকে ঊর্ধ্বে রাখেন, আর তাঁকে বর্ণনা করেন সব পূর্ণতার গুণে।"
          },
          {
            "en": "Al-Qurtubi opens the word further. Tasbih is tanzih, declaring Him free of whatever may not be said of Him or befit His majesty. It was also said that the angels marvel at the boldness of the polytheists, tasbih standing where wonder would. From 'Ali (RA): their tasbih is wonder at what they see of people exposing themselves to Allah's anger. Ibn 'Abbas (RA), in al-Qurtubi's report: their tasbih is submission to what they see of Allah's greatness. As-Suddi glosses bi-hamdi rabbihim as by the command of their Lord. Al-Qurtubi lists these without ranking them.",
            "bn": "কুরতুবী শব্দটার অর্থ আরও খুলে দেখান। তাসবীহ মানে তানযীহ: যা তাঁর বর্ণনায় চলে না, যা তাঁর প্রতাপের সঙ্গে মানায় না, তা থেকে তাঁকে পবিত্র ঘোষণা করা। আরেক মত হলো, মুশরিকদের দুঃসাহস দেখে ফেরেশতারা বিস্মিত হন, আর বিস্ময়ের জায়গায় তাসবীহ উচ্চারিত হয়। আলী (রাঃ) থেকে বর্ণিত: মানুষ কীভাবে আল্লাহর ক্রোধের মুখে নিজেকে ঠেলে দিচ্ছে, তা দেখে বিস্ময়ই তাঁদের তাসবীহ। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন: আল্লাহর যে মহত্ত্ব তাঁরা দেখেন, তার সামনে নত হওয়াই তাঁদের তাসবীহ। সুদ্দী বিহামদি রাব্বিহিমের অর্থ করেন: তাঁদের রবের নির্দেশে। কুরতুবী মতগুলো পাশাপাশি রাখেন, কোনোটিকে এগিয়ে দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "All on Earth, or Believers",
          "bn": "সব পৃথিবীবাসী, নাকি মুমিনরা"
        },
        "p": [
          {
            "en": "Wa yastaghfiruna li-man fi-l-ard: and they ask forgiveness for whoever is on earth. The wording is general, and most of the sources consulted here narrow it. At-Tabari says they ask their Lord to forgive the sins of those on earth from among the people of faith in Him, and he reports as-Suddi: for the believers. The Muyassar uses at-Tabari's phrase, al-Baghawi adds from among the believers, and al-Qurtubi reports the same from ad-Dahhak and as-Suddi. On this reading, those on earth are the believers among them.",
            "bn": "ওয়া ইয়াসতাগফিরূনা লিমান ফিল আরদ: আর তাঁরা পৃথিবীতে যারা আছে তাদের জন্য ক্ষমা চান। শব্দগুলো সবার জন্য খোলা, কিন্তু সংগৃহীত তাফসীরের বেশিরভাগ একে সীমিত করে। তাবারী বলেন, পৃথিবীবাসীর মধ্যে যারা আল্লাহর প্রতি ঈমান এনেছে, তাদের গুনাহ মাফের জন্য ফেরেশতারা রবের কাছে আবেদন করেন। সুদ্দীর কথাও তিনি আনেন: মুমিনদের জন্য। মুয়াসসার তাবারীর কথাটাই ব্যবহার করে। বাগাভী জুড়ে দেন: মুমিনদের মধ্য থেকে। কুরতুবী দাহহাক ও সুদ্দী থেকে একই কথা বর্ণনা করেন। এই পাঠে পৃথিবীবাসী মানে তাদের মধ্যকার মুমিনরা।"
          },
          {
            "en": "The narrowing leans on a sister verse. Ibn Kathir sets the clause beside 40:7: those who bear the Throne and those around it glorify the praise of their Lord, believe in Him and ask forgiveness for those who believe. Al-Qurtubi calls 40:7 its explanation, and says that on this reading the angels here are the Throne-bearers, whose prayer for the believers runs on into 40:8. It was also said, he notes, that all the angels of heaven are meant, and that is the apparent sense of al-Kalbi's words.",
            "bn": "এই সীমিত পাঠের ভিত্তি আরেকটি আয়াত। ইবন কাসীর বাক্যাংশটিকে ৪০:৭ আয়াতের পাশে রাখেন: যারা আরশ বহন করে আর যারা তার চারপাশে আছে, তারা রবের প্রশংসাসহ তাসবীহ পাঠ করে, তাঁর প্রতি ঈমান রাখে আর মুমিনদের জন্য ক্ষমা চায়। কুরতুবী ৪০:৭ আয়াতকে এর ব্যাখ্যা বলেন। তাঁর মতে, এই পাঠে এখানকার ফেরেশতারা আরশবাহক, মুমিনদের জন্য যাঁদের দোয়া ৪০:৮ আয়াত পর্যন্ত গড়ায়। তিনি এটাও জানান, কারও মতে আসমানের সব ফেরেশতাই এখানে উদ্দেশ্য, আর কালবীর কথার বাহ্যিক অর্থ এটাই।"
          },
          {
            "en": "Was the general wording then cancelled? Wahb ibn Munabbih said this verse was abrogated by 40:7. Al-Mahdawi answered that the sound view is that it is not abrogated, because it is a report, khabar, and it is specific to the believers. Ibn al-Hassar rejected the abrogation claim from another side: the Throne-bearers are singled out to ask forgiveness for the believers alone, while Allah has other angels who ask forgiveness for those on earth. Al-Qurtubi records all three, so two answers to the same question stand in his text.",
            "bn": "তাহলে কি সাধারণ শব্দটা বাতিল হয়ে গেছে? ওয়াহব ইবন মুনাব্বিহ বলেছেন, ৪০:৭ আয়াত দিয়ে এ আয়াত মানসূখ হয়েছে। মাহদাভী জবাব দেন, সঠিক কথা হলো এটি মানসূখ নয়। কারণ এটি খবর, অর্থাৎ সংবাদ, আর এটি মুমিনদের জন্যই নির্দিষ্ট। ইবনুল হাসসার মানসূখের দাবি নাকচ করেন অন্য দিক থেকে। আরশবাহকরা কেবল মুমিনদের জন্য ক্ষমা চাওয়ার দায়িত্বে নির্দিষ্ট, আর আল্লাহর অন্য ফেরেশতারাও আছেন, যাঁরা পৃথিবীবাসীর জন্য ক্ষমা চান। কুরতুবী তিনটি কথাই লিখে রাখেন। ফলে একই প্রশ্নের দুই রকম জবাব তাঁর লেখায় পাশাপাশি থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Provision, Pardon or Respite",
          "bn": "রিযিক, মাগফিরাত, নাকি অবকাশ"
        },
        "p": [
          {
            "en": "Al-Qurtubi quotes Mutarrif: we found the most sincere of Allah's servants towards Allah's servants to be the angels, and the most deceiving to be the devils. What, then, do the angels ask for? He relays al-Mawardi's two views. One is forgiveness of sins and faults, the apparent sense of Muqatil's words. The other, from al-Kalbi, is asking provision and ease for them. Al-Qurtubi says the second seems more apparent to him, because the earth holds the disbeliever and others, and on Muqatil's view the disbeliever is not included.",
            "bn": "কুরতুবী মুতাররিফের কথা আনেন: আল্লাহর বান্দাদের প্রতি আল্লাহর বান্দাদের মধ্যে সবচেয়ে কল্যাণকামী পেয়েছি ফেরেশতাদের, আর সবচেয়ে প্রতারক পেয়েছি শয়তানদের। তাহলে ফেরেশতারা চান কী? কুরতুবী এখানে মাওয়ার্দীর দুটি মত তুলে ধরেন। একটি হলো গুনাহ ও ভুলত্রুটির ক্ষমা, মুকাতিলের কথার বাহ্যিক অর্থ এটাই। অন্যটি কালবীর: তাদের জন্য রিযিক আর সচ্ছলতা চাওয়া। কুরতুবী বলেন, দ্বিতীয়টাই তাঁর কাছে বেশি স্পষ্ট। কারণ পৃথিবীতে কাফির আর অন্যরা সবাই আছে, অথচ মুকাতিলের মতে কাফির এর মধ্যে পড়ে না।"
          },
          {
            "en": "Yet he then relates a saying of Salman (RA), not of the Prophet ﷺ, through 'Asim al-Ahwal from Abu 'Uthman, and gives it no grading. When a servant who remembered Allah in ease is struck by hardship, the angels say: a known voice, from a weak human who remembered Allah in ease; and they ask forgiveness for him. When one who did not remember Allah in ease is struck, they call it an unfamiliar voice and do not ask for him. Al-Qurtubi concludes that the verse is then about those who remember Allah in ease and hardship, some of the believers, and adds: Allah knows best.",
            "bn": "কিন্তু এরপর তিনি সালমান (রাঃ)-এর একটি কথা বর্ণনা করেন। কথাটি নবী ﷺ-এর নয়, সালমানের। সূত্র আসিম আল-আহওয়াল, আবু উসমান থেকে, আর কুরতুবী এর কোনো মান উল্লেখ করেননি। যে বান্দা সুখের দিনে আল্লাহকে স্মরণ করত, বিপদে পড়লে ফেরেশতারা বলেন: চেনা কণ্ঠ, এক দুর্বল আদমসন্তানের, যে সুখের দিনে আল্লাহকে স্মরণ করত। তখন তাঁরা তার জন্য ক্ষমা চান। আর যে সুখের দিনে স্মরণ করত না, বিপদে পড়লে তাঁরা বলেন অচেনা কণ্ঠ, তার জন্য ক্ষমা চান না। কুরতুবীর সিদ্ধান্ত, তাহলে আয়াতটি সুখে-দুঃখে আল্লাহকে স্মরণকারীদের নিয়ে, অর্থাৎ মুমিনদের একাংশকে নিয়ে। সঙ্গে বলেন: আল্লাহই ভালো জানেন।"
          },
          {
            "en": "A third possibility he takes from az-Zamakhshari: that by istighfar they mean asking forbearance and pardon, as in 35:41, Allah holds the heavens and the earth lest they cease, and He is Forbearing, Forgiving, and in 13:6, your Lord is full of forgiveness for people despite their wrongdoing. The meaning is forbearance towards them and not hastening retribution, and the verse is then general. Ma'arif al-Qur'an reads it close to this: for disbelievers the plea is that no severe worldly scourge destroy them all; it does not reach the Hereafter, and Allah accepts it.",
            "bn": "তৃতীয় সম্ভাবনাটি তিনি নেন যামাখশারী থেকে। ইস্তিগফার বলতে ফেরেশতারা হয়তো চান সহনশীলতা আর ক্ষমা, যেমন ৩৫:৪১ আয়াতে আছে: আল্লাহ আকাশ ও জমিনকে ধরে রাখেন যাতে টলে না যায়, তিনি সহনশীল, ক্ষমাশীল। আর ১৩:৬ আয়াতে: মানুষের জুলুম সত্ত্বেও আপনার রব তাদের প্রতি ক্ষমাশীল। মানে তাদের সঙ্গে সহনশীল থাকা, শাস্তিতে তাড়াহুড়া না করা। তখন আয়াত সবার জন্য। মাআরিফুল কুরআনের পাঠও কাছাকাছি। কাফিরদের বেলায় দোয়াটা এই যে কোনো ভয়াবহ দুনিয়াবি আযাব যেন সবাইকে ধ্বংস না করে। আখিরাত এর মধ্যে পড়ে না, আর আল্লাহ এ দোয়া কবুল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe First, Then Good News",
          "bn": "আগে ভয়, পরে সুসংবাদ"
        },
        "p": [
          {
            "en": "Ala inna Allaha huwa al-ghafuru ar-rahim: truly, Allah is the Forgiving, the Merciful. Ibn Kathir calls it an announcement of this and a drawing of attention to it. At-Tabari: Forgiving of the sins of His believing servants, Merciful to them in not punishing them after they repent; the Muyassar has the same without the clause on repenting. As-Sa'di: were it not for His forgiveness and mercy, He would hasten upon creation a punishment that uproots them. Ma'arif al-Qur'an: Allah alone is the Forgiver and the Merciful.",
            "bn": "আলা ইন্নাল্লাহা হুওয়াল গাফূরুর রাহীম: জেনে রাখো, আল্লাহই ক্ষমাশীল, পরম দয়ালু। ইবন কাসীর বলেন, এ হলো বিষয়টির ঘোষণা আর সেদিকে মনোযোগ টানা। তাবারীর ব্যাখ্যা: তিনি মুমিন বান্দাদের গুনাহ ক্ষমা করেন, আর তওবার পর তাদের শাস্তি না দিয়ে তাদের প্রতি দয়া করেন। মুয়াসসারেও একই কথা, শুধু তওবার অংশটুকু নেই। সা'দী বলেন, তাঁর ক্ষমা ও দয়া না থাকলে তিনি সৃষ্টিকে দ্রুতই এমন শাস্তি দিতেন, যা তাদের মূলসহ উপড়ে ফেলত। মাআরিফুল কুরআন বলে: আল্লাহ, একমাত্র আল্লাহই ক্ষমাকারী ও দয়ালু।"
          },
          {
            "en": "Al-Qurtubi ends with the words of some scholars: He inspired awe and magnified Himself at the beginning, and was gentle and gave good news at the end. The verse moves that way. It opens on heavens near breaking, passes through angels who glorify and ask on behalf of the people below, and closes on two names of pardon and mercy. The reader stands among those on earth, under heavens that hold, and is told at the end where to turn.",
            "bn": "কুরতুবী শেষ করেন কয়েকজন আলেমের কথায়: শুরুতে তিনি ভয় জাগিয়েছেন, নিজের মহত্ত্ব দেখিয়েছেন, আর শেষে কোমলতা দেখিয়েছেন, সুসংবাদ দিয়েছেন। আয়াতের গতিও তেমনই। শুরু ফেটে পড়ার কিনারে থাকা আকাশ দিয়ে। মাঝখানে ফেরেশতারা, যাঁরা তাসবীহ পড়েন আর নিচের মানুষদের জন্য আবেদন করেন। শেষ ক্ষমা ও দয়ার দুটি নামে। পাঠক দাঁড়িয়ে আছেন পৃথিবীবাসীদের মধ্যে, যে আকাশ ভেঙে পড়েনি তার নিচে। আর শেষ কথায় তাঁকে জানিয়ে দেওয়া হয়, কার দিকে ফিরতে হবে।"
          }
        ]
      }
    ]
  },
  "42:7": {
    "sections": [
      {
        "h": {
          "en": "Thus, as to Those Before",
          "bn": "আগের নবীদের মতোই"
        },
        "p": [
          {
            "en": "Wa-kadhalika awhayna ilayka qur'anan 'arabiyyan: and thus We have revealed to you an Arabic Qur'an. The word thus looks back. Ibn Kathir and the Muyassar read it as: just as We revealed to the prophets before you, so We have revealed to you. That picks up 42:3, where Allah reveals to you and to those before you. Al-Qurtubi reads it the same way. Al-Baghawi keeps it short: like what We have mentioned.",
            "bn": "ওয়া কাযালিকা আওহাইনা ইলাইকা কুরআনান আরাবিয়্যা: আর এভাবেই আমি তোমার কাছে আরবী কুরআন ওহি করে পাঠিয়েছি। 'এভাবেই' শব্দটা পেছনের দিকে তাকায়। ইবন কাসীর ও মুয়াসসার এর অর্থ করেন: তোমার আগের নবীদের কাছে যেভাবে ওহি পাঠিয়েছি, সেভাবেই তোমার কাছেও পাঠিয়েছি। এতে ৪২:৩ আয়াতের কথাটা আবার ফিরে আসে, যেখানে আল্লাহ তোমার কাছে আর তোমার পূর্ববর্তীদের কাছে ওহি পাঠান। কুরতুবীর ব্যাখ্যাও একই রকম। বাগাভী সংক্ষেপে বলেন: যেমনটা আমি উল্লেখ করেছি।"
          },
          {
            "en": "Why Arabic? At-Tabari answers from the audience. The people to whom the Prophet ﷺ was sent were Arabs, so the Qur'an came in their tongue, that they might understand the proofs of Allah and the reminder in it, for no messenger is sent except in the tongue of his people, to make things clear to them; that is the wording of 14:4. Al-Qurtubi gives the same reason. Ibn Kathir glosses 'arabiyyan as plain and clear, and as-Sa'di calls this clear Arabic Qur'an a favour upon the Messenger and upon people. 41:3 has already called it an Arabic Qur'an for a people who know.",
            "bn": "আরবী কেন? তাবারী উত্তর দেন শ্রোতাদের দিক থেকে। নবী ﷺ যাদের কাছে প্রেরিত হয়েছিলেন, তারা ছিল আরব। তাই কুরআন এসেছে তাদের ভাষায়, যাতে এর ভেতরের আল্লাহর দলিল-প্রমাণ আর উপদেশ তারা বুঝতে পারে। কারণ প্রত্যেক রাসূলকে পাঠানো হয় তাঁর কওমের ভাষায়, যাতে তিনি তাদের কাছে পরিষ্কার করে বলতে পারেন। এ কথাটা ১৪:৪ আয়াতের শব্দ। কুরতুবীও একই কারণ দেন। ইবন কাসীর আরাবিয়্যান শব্দের ব্যাখ্যা করেন সুস্পষ্ট ও পরিষ্কার। সা'দী এই স্পষ্ট আরবী কুরআনকে বলেন রাসূলের প্রতি আর মানুষের প্রতি আল্লাহর অনুগ্রহ। ৪১:৩ আয়াত আগেই একে বলেছে জ্ঞানী সম্প্রদায়ের জন্য আরবী কুরআন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why a Mother of Towns",
          "bn": "জনপদের জননী কেন"
        },
        "p": [
          {
            "en": "Li-tundhira umm al-qura: that you may warn the Mother of Towns. Every commentator consulted here names it as Makkah, and at-Tabari carries the identification from as-Suddi in a single word: Makkah. Two of them add a quiet correction to how the phrase is heard. Al-Baghawi says it means its people, and the Muyassar writes that you may warn the people of Makkah.",
            "bn": "লিতুনযিরা উম্মাল কুরা: যাতে তুমি জনপদের জননীকে সতর্ক করো। যত তাফসীর আনা হয়েছে, সবগুলোতেই এর অর্থ মক্কা। তাবারী সুদ্দী থেকে এক শব্দেই কথাটা উদ্ধৃত করেন: মক্কা। দুজন তাফসীরকার এখানে একটা সূক্ষ্ম সংশোধন যোগ করেন। বাগাভী বলেন, উদ্দেশ্য মক্কার অধিবাসীরা। মুয়াসসারও লেখে, যাতে তুমি মক্কাবাসীদের সতর্ক করো।"
          },
          {
            "en": "Why mother? The texts consulted here give three answers. Ibn Kathir says Makkah was named the Mother of Towns because it is nobler than all other lands, for many proofs mentioned in their places. Al-Qurtubi records, under the words it is said, that it was called so because the earth was spread out from beneath it. Ma'arif al-Qur'an explains the title as origin and foundation of all habitations and cities, given because to Allah it is more distinguished than every other city and the whole earth.",
            "bn": "জননী কেন? সংগৃহীত লেখাগুলোতে তিনটি উত্তর পাওয়া যায়। ইবন কাসীর বলেন, মক্কার নাম উম্মুল কুরা, কারণ অন্য সব ভূখণ্ডের চেয়ে এর মর্যাদা বেশি। এর বহু প্রমাণ আছে, যা যথাস্থানে আলোচিত হয়েছে। কুরতুবী 'বলা হয়' কথাটি দিয়ে উল্লেখ করেন, মক্কাকে এ নাম দেওয়া হয়েছে কারণ পৃথিবীকে এর নিচ থেকে বিছিয়ে দেওয়া হয়েছিল। মাআরিফুল কুরআন উপাধিটির ব্যাখ্যা করে সব জনবসতি আর শহরের মূল ও ভিত্তি হিসেবে। এ উপাধি দেওয়া হয়েছে, কারণ আল্লাহর কাছে মক্কা অন্য সব শহর, এমনকি গোটা পৃথিবীর চেয়েও বেশি সম্মানিত।"
          },
          {
            "en": "Ibn Kathir calls one proof the most concise and the clearest. At-Tirmidhi records it in his Jami' (3925) from 'Abdullah ibn 'Adi ibn Hamra' az-Zuhri: \"I saw the Messenger of Allah ﷺ standing at Al-Hazwarah, and he said: By Allah! You are the best of Allah's earth, and the most beloved of Allah's earth to Allah, and if it were not that I was expelled from you I would not have left.\" At-Tirmidhi grades it hasan sahih gharib. Al-Hazwarah, Ibn Kathir notes, was in the market of Makkah.",
            "bn": "ইবন কাসীর একটি প্রমাণকে বলেন সবচেয়ে সংক্ষিপ্ত আর সবচেয়ে স্পষ্ট। তিরমিযী তাঁর জামি' গ্রন্থে (৩৯২৫) আব্দুল্লাহ ইবন আদী ইবন হামরা আয-যুহরী (রাঃ) থেকে তা বর্ণনা করেছেন: \"আমি আল্লাহর রাসূল ﷺ-কে হাযওয়ারায় দাঁড়িয়ে থাকতে দেখলাম। তিনি বললেন: আল্লাহর কসম! তুমি আল্লাহর জমিনের সবচেয়ে উত্তম অংশ, আর আল্লাহর কাছে তাঁর জমিনের সবচেয়ে প্রিয় অংশ। আমাকে যদি তোমার কাছ থেকে বের করে দেওয়া না হতো, আমি কখনো বের হতাম না।\" তিরমিযী একে হাসান সহীহ গরীব বলেছেন। ইবন কাসীর জানান, হাযওয়ারা ছিল মক্কার বাজারে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide Is Around",
          "bn": "চারপাশ কতদূর বিস্তৃত"
        },
        "p": [
          {
            "en": "Wa man hawlaha: and those around it. Here the commentators draw the circle at different sizes. As-Sa'di reads it narrowly first, as the villages of the Arabs around Makkah, and then adds a second step: this warning then travels on to all of creation. Ma'arif al-Qur'an sets out the whole range. The phrase means the suburbs in Makkah's neighbourhood, and it could mean the neighbouring Arab lands as well as the whole earth from east to west.",
            "bn": "ওয়া মান হাওলাহা: আর তার চারপাশে যারা আছে। এখানে তাফসীরকারেরা বৃত্তটা আঁকেন ভিন্ন ভিন্ন মাপে। সা'দী প্রথমে সংকীর্ণ অর্থ নেন: মক্কার চারপাশের আরব জনপদগুলো। তারপর তিনি দ্বিতীয় ধাপ যোগ করেন। এরপর এ সতর্কবার্তা ছড়িয়ে পড়ে সমগ্র সৃষ্টির কাছে। মাআরিফুল কুরআন পুরো পরিসরটাই তুলে ধরে। শব্দটির অর্থ মক্কার আশপাশের এলাকা। আবার এর অর্থ হতে পারে প্রতিবেশী আরব ভূখণ্ড, এমনকি পূর্ব থেকে পশ্চিম পর্যন্ত গোটা পৃথিবী।"
          },
          {
            "en": "The others read the circle as wide from the first word. At-Tabari: around the Mother of Towns, of all people. The Muyassar keeps his phrase, all people. Al-Qurtubi: of all creation. Ibn Kathir: all the lands, east and west. Al-Baghawi: the villages of the whole earth. So for as-Sa'di the warning widens in two steps, while for these five it is already in the words around it.",
            "bn": "বাকিরা শুরু থেকেই বৃত্তটাকে প্রশস্ত ধরেন। তাবারী বলেন: উম্মুল কুরার চারপাশের সব মানুষ। মুয়াসসার তাঁর কথাটাই রাখে: সব মানুষ। কুরতুবীর মতে সমগ্র সৃষ্টি। ইবন কাসীরের মতে পূর্ব-পশ্চিমের সব দেশ। বাগাভীর মতে গোটা পৃথিবীর জনপদ। অর্থাৎ সা'দীর কাছে সতর্কবার্তা দুই ধাপে প্রসারিত হয়, আর এই পাঁচজনের কাছে প্রসারটা 'চারপাশ' শব্দেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Warning Them of a Day",
          "bn": "একটি দিনের সতর্কবার্তা"
        },
        "p": [
          {
            "en": "Wa-tundhira yawm al-jam': and that you may warn of the Day of Gathering. The verb comes a second time, and its object now is a day, not a people. At-Tabari explains: you warn of the punishment of Allah on the Day He gathers His servants for the standing of the reckoning and the presentation. He records as-Suddi: the Day of Resurrection. The Muyassar likewise makes the warning be of the punishment of the Day of Gathering, which is the Day of Resurrection.",
            "bn": "ওয়া তুনযিরা ইয়াওমাল জাম': আর যাতে তুমি একত্র হওয়ার দিন সম্পর্কে সতর্ক করো। ক্রিয়াটি দ্বিতীয়বার এসেছে, আর এবার এর লক্ষ্য কোনো জনগোষ্ঠী নয়, একটা দিন। তাবারীর ব্যাখ্যা: যেদিন আল্লাহ হিসাব আর উপস্থাপনের জন্য তাঁর বান্দাদের দাঁড় করাতে একত্র করবেন, সেদিনের শাস্তি সম্পর্কে তুমি সতর্ক করবে। সুদ্দী থেকে তিনি উদ্ধৃত করেন: কিয়ামতের দিন। মুয়াসসারেও সতর্কবার্তাটা একত্র হওয়ার দিনের শাস্তি নিয়ে, আর সেই দিন হলো কিয়ামতের দিন।"
          },
          {
            "en": "At-Tabari also reports a reading from the grammar: the meaning is you warn them of the Day of Gathering, the people being understood and left unsaid. He compares 3:175, yukhawwifu awliya'ahu, which he takes to mean that he frightens you of his allies, where again the person frightened is not named. Al-Qurtubi supplies a preposition instead: you warn of the Day, bi-yawm al-jam'. Al-Baghawi puts both together: you warn them of the Day of Gathering, which is the Day of Resurrection.",
            "bn": "তাবারী ব্যাকরণের দিক থেকে আরেকটি ব্যাখ্যাও উল্লেখ করেন। অর্থ হলো, তুমি তাদেরকে একত্র হওয়ার দিন সম্পর্কে সতর্ক করো। কাদের, তা বোঝা যায় বলে উল্লেখ করা হয়নি। তিনি তুলনা দেন ৩:১৭৫ আয়াতের সঙ্গে: ইউখাওয়িফু আওলিয়াআহু। তাঁর মতে এর অর্থ, সে তোমাদেরকে তার বন্ধুদের ভয় দেখায়। সেখানেও যাকে ভয় দেখানো হচ্ছে, তার উল্লেখ নেই। কুরতুবী বরং একটি অব্যয় যোগ করে পড়েন: বি-ইয়াওমিল জাম', অর্থাৎ সেই দিন সম্পর্কে সতর্ক করো। বাগাভী দুটোকে একসঙ্গে মেলান: তুমি তাদেরকে একত্র হওয়ার দিন সম্পর্কে সতর্ক করো, আর সেটা কিয়ামতের দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "The First and the Last",
          "bn": "পূর্ববর্তী ও পরবর্তী সবাই"
        },
        "p": [
          {
            "en": "Who is gathered? Ibn Kathir: on that Day Allah gathers the first and the last on one plain, fi sa'id wahid. As-Sa'di uses the same pair, the first and the last. Al-Baghawi widens it: the first and the last, and the people of the heavens and the people of the earths. Ibn Kathir then sets 64:9 beside the clause, the Day He gathers you for the Day of Gathering, the Day of at-taghabun, which he explains as the people of Paradise getting the better of the people of the Fire.",
            "bn": "কারা একত্র হবে? ইবন কাসীর বলেন: সেদিন আল্লাহ পূর্ববর্তী ও পরবর্তী সবাইকে এক প্রান্তরে জমা করবেন, ফী সাঈদিন ওয়াহিদ। সা'দীও একই জোড়া ব্যবহার করেন: পূর্ববর্তী ও পরবর্তী। বাগাভী পরিধিটা আরও বাড়ান: পূর্ববর্তী ও পরবর্তী, আসমানের অধিবাসী আর জমিনসমূহের অধিবাসী। এরপর ইবন কাসীর এর পাশে রাখেন ৬৪:৯ আয়াত: যেদিন তিনি তোমাদের একত্র করবেন একত্র হওয়ার দিনের জন্য, সেটা তাগাবুনের দিন। তাঁর ব্যাখ্যায়, সেদিন জান্নাতবাসীরা জাহান্নামবাসীদের উপর জিতে যাবে।"
          },
          {
            "en": "His second parallel is 11:103 to 11:105: a Day for which people will be gathered, a Day witnessed, delayed only for a counted term, on which no soul speaks except by His leave, and among them are the wretched and the happy. Then la rayba fihi, no doubt in it. Ibn Kathir: no doubt that it will happen; it is coming without fail. Al-Baghawi joins this clause to the next: no doubt that the gathering will be, and after the gathering they part.",
            "bn": "তাঁর দ্বিতীয় তুলনা ১১:১০৩ থেকে ১১:১০৫ আয়াত। সেদিনের জন্য মানুষকে একত্র করা হবে, সেদিন সবাই উপস্থিত থাকবে। নির্দিষ্ট মেয়াদ পর্যন্তই শুধু তা পিছিয়ে রাখা হয়েছে। সেদিন তাঁর অনুমতি ছাড়া কেউ কথা বলবে না, আর তাদের মধ্যে কেউ হতভাগা, কেউ সৌভাগ্যবান। তারপর লা রাইবা ফীহ: তাতে কোনো সন্দেহ নেই। ইবন কাসীর বলেন, তা ঘটবেই, এতে কোনো সন্দেহ নেই, তা আসবেই। বাগাভী এ অংশকে পরের অংশের সঙ্গে জুড়ে দেন: একত্র হওয়া নিশ্চিত, আর একত্র হওয়ার পর তারা আলাদা হয়ে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Crowd Divides",
          "bn": "তারপর ভিড় দুই ভাগ"
        },
        "p": [
          {
            "en": "Fariqun fi-l-jannati wa fariqun fi-s-sa'ir: a party in Paradise and a party in the Blaze. At-Tabari says fariqun is nominative because a new sentence begins here, and gives a parallel: I saw the army, killed or routed, meaning some of them killed and some routed. So the sense is, of them a party in Paradise. Al-Qurtubi calls it subject and predicate, and adds that al-Kisa'i allowed the accusative, reading it as: that you may warn a party in Paradise and a party in the Blaze.",
            "bn": "ফারীকুন ফিল জান্নাতি ওয়া ফারীকুন ফিস সাঈর: এক দল জান্নাতে, আর এক দল জ্বলন্ত আগুনে। তাবারী বলেন, ফারীকুন শব্দে পেশ, কারণ এখান থেকে নতুন বাক্য শুরু হয়েছে। তিনি একটা দৃষ্টান্ত দেন। কেউ বলল, আমি সেনাদলকে দেখলাম, নিহত অথবা পরাজিত। মানে, তাদের কেউ নিহত, কেউ পরাজিত। তাই অর্থ দাঁড়ায়: তাদের মধ্যে এক দল জান্নাতে। কুরতুবী একে বলেন উদ্দেশ্য ও বিধেয়। সঙ্গে জানান, কিসাঈ যবর দিয়ে পড়াও বৈধ বলেছেন। তখন অর্থ হবে: যাতে তুমি জান্নাতের এক দলকে আর জ্বলন্ত আগুনের এক দলকে সতর্ক করো।"
          },
          {
            "en": "Who are the two parties? At-Tabari answers by belief and following: in Paradise are those who believed in Allah and followed what His Messenger brought them; in the Blaze are those who disbelieved in Allah and opposed what His Messenger brought them. He describes as-sa'ir as the fire of Allah, kindled against its people. The Muyassar uses nearly the same words and names the Messenger as Muhammad ﷺ. As-Sa'di: those who believed in Allah and affirmed the messengers, and the kinds of disbelievers who denied.",
            "bn": "দুটি দল কারা? তাবারী উত্তর দেন ঈমান আর অনুসরণের ভিত্তিতে। জান্নাতে তারা, যারা আল্লাহর প্রতি ঈমান এনেছে আর তাঁর রাসূল যা নিয়ে এসেছেন তার অনুসরণ করেছে। জ্বলন্ত আগুনে তারা, যারা আল্লাহকে অস্বীকার করেছে আর রাসূলের আনা বিষয়ের বিরোধিতা করেছে। সাঈর সম্পর্কে তিনি বলেন, আল্লাহর আগুন, যা তার অধিবাসীদের উপর প্রজ্বলিত। মুয়াসসার প্রায় একই শব্দ ব্যবহার করে, আর রাসূলের নাম উল্লেখ করে মুহাম্মাদ ﷺ। সা'দীর ভাষায়: যারা আল্লাহর প্রতি ঈমান এনেছে ও রাসূলদের সত্য বলে মেনেছে, আর অস্বীকারকারী কাফিরদের নানা শ্রেণি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Books in His Hands",
          "bn": "নবীজির দুই হাতে দুই কিতাব"
        },
        "p": [
          {
            "en": "Ibn Kathir, at-Tabari and al-Baghawi all bring a narration of 'Abdullah ibn 'Amr to this clause. At-Tirmidhi's wording in his Jami' (2141), quoted whole, begins: \"'Abdullah bin 'Amr narrated: 'The Messenger of Allah ﷺ came out to us with two books in hand. And he said: Do you know what these two books are? We said: No, O Messenger of Allah! Unless you inform us.'\"",
            "bn": "ইবন কাসীর, তাবারী ও বাগাভী তিনজনই এ অংশে আব্দুল্লাহ ইবন আমর (রাঃ)-এর একটি বর্ণনা আনেন। তিরমিযী তাঁর জামি' গ্রন্থে (২১৪১) যে শব্দে এনেছেন, পুরোটা এখানে দেওয়া হলো। শুরুটা এমন: \"আব্দুল্লাহ ইবন আমর (রাঃ) বলেন: আল্লাহর রাসূল ﷺ আমাদের কাছে বেরিয়ে এলেন, তাঁর হাতে দুটি কিতাব। তিনি বললেন: তোমরা কি জানো, এ দুটি কিতাব কী? আমরা বললাম: না, হে আল্লাহর রাসূল, আপনি না জানালে আমরা জানি না।\""
          },
          {
            "en": "\"He said about the one that was in his right hand: 'This is a book from the Lord of the worlds, in it are the names of the people of Paradise, and the name of their fathers and their tribes. Then there is a summary at the end of them, there being no addition to them nor deduction from them forever.'",
            "bn": "\"ডান হাতেরটি সম্পর্কে তিনি বললেন: এটি জগতসমূহের রবের পক্ষ থেকে একটি কিতাব। এতে আছে জান্নাতবাসীদের নাম, তাদের পিতাদের নাম আর তাদের গোত্রের নাম। তারপর শেষে তাদের মোট সংখ্যা লিখে দেওয়া হয়েছে। তাদের মধ্যে কখনো কাউকে যোগও করা হবে না, বাদও দেওয়া হবে না।"
          },
          {
            "en": "\"Then he said about the one that was in his left: 'This is a book from the Lord of the worlds, in it are the names of the people of Fire, and the name of their fathers and their tribes. Then there is a summary at the end of them, there being no addition to them nor deduction from them forever.'\"",
            "bn": "\"তারপর বাঁ হাতেরটি সম্পর্কে বললেন: এটি জগতসমূহের রবের পক্ষ থেকে একটি কিতাব। এতে আছে জাহান্নামবাসীদের নাম, তাদের পিতাদের নাম আর তাদের গোত্রের নাম। তারপর শেষে তাদের মোট সংখ্যা লিখে দেওয়া হয়েছে। তাদের মধ্যে কখনো কাউকে যোগও করা হবে না, বাদও দেওয়া হবে না।\""
          },
          {
            "en": "\"The companions said: 'So why work O Messenger of Allah! Since the matter is already decided (and over)?' He said: 'Seek to do what is right and draw nearer, for indeed the inhabitant of Paradise shall have his work sealed off with the deeds of the people of Paradise, whichever deeds he did. And indeed the inhabitant of Fire shall have his work sealed off with the deeds of the people of Fire, whichever deeds he did.' Then the Messenger of Allah motioned with his hands, casting them down and said: 'Your Lord finished with the slaves, a group in Paradise, and a group in the Blazing Fire.'\"",
            "bn": "\"সাহাবীরা বললেন: হে আল্লাহর রাসূল, বিষয়টা যদি আগেই চূড়ান্ত হয়ে গিয়ে থাকে, তবে আমল কিসের জন্য? তিনি বললেন: সঠিক পথে থাকো আর তার কাছাকাছি থাকো। কারণ জান্নাতবাসীর আমল শেষ হবে জান্নাতবাসীদের আমল দিয়ে, আগে সে যে আমলই করে থাকুক। আর জাহান্নামবাসীর আমল শেষ হবে জাহান্নামবাসীদের আমল দিয়ে, আগে সে যে আমলই করে থাকুক। তারপর আল্লাহর রাসূল ﷺ দুই হাত দিয়ে ইশারা করলেন, যেন কিছু ছুঁড়ে ফেলছেন, আর বললেন: তোমাদের রব বান্দাদের বিষয় চূড়ান্ত করে ফেলেছেন। এক দল জান্নাতে, এক দল জ্বলন্ত আগুনে।\""
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib sahih, and notes a second chain with similar wording. Three phrases need the commentators' help. A summary at the end of them renders ujmila 'ala akhirihim, which a note in at-Tabari's text explains as the total of their number given at the end of the book. Seek what is right and draw nearer renders saddidu wa qaribu, which the English Ibn Kathir gives as striving for the middle course or close to it. Sealed off, in that same English, is dying while doing the deeds of the people of Paradise, regardless of what came before.",
            "bn": "তিরমিযী একে হাসান গরীব সহীহ বলেছেন, আর জানিয়েছেন, আরেকটি সনদেও কাছাকাছি শব্দে এটি এসেছে। তিনটি শব্দবন্ধ বুঝতে তাফসীরকারদের সাহায্য লাগে। 'শেষে মোট সংখ্যা' হলো উজমিলা আলা আখিরিহিম। তাবারীর গ্রন্থের এক টীকা এর ব্যাখ্যা দেয়: কিতাবের শেষে তাদের মোট সংখ্যার উল্লেখ। 'সঠিক পথে থাকো আর কাছাকাছি থাকো' হলো সাদ্দিদূ ওয়া কারিবূ। ইবন কাসীরের ইংরেজি সংস্করণ এর অর্থ করে মধ্যপথ বা তার কাছাকাছি থাকার জন্য সর্বোচ্চ চেষ্টা। আর আমল শেষ হওয়া মানে, সেই সংস্করণেরই ভাষায়, আগে যা-ই করুক, জান্নাতবাসীদের আমলরত অবস্থায় মৃত্যু।"
          },
          {
            "en": "Al-Baghawi carries the narration through his own chains with additions that are not in at-Tirmidhi's wording, and gives no grading of his own; his version closes with a party in Paradise as bounty from Allah, and a party in the Blaze as justice from Allah. Ibn Kathir mentions that closing phrase about justice. He then says the narrations on decree in the Sahih collections, the Sunan and the Musnads are very many, from 'Ali, Ibn Mas'ud, 'A'ishah and a great number of others.",
            "bn": "বাগাভী নিজের সনদে বর্ণনাটি আনেন, এমন কিছু অতিরিক্ত কথাসহ যা তিরমিযীর শব্দে নেই। তিনি নিজে এর কোনো মান নির্ধারণ করেননি। তাঁর বর্ণনার শেষটা এমন: এক দল জান্নাতে, আল্লাহর অনুগ্রহে, আর এক দল জ্বলন্ত আগুনে, আল্লাহর ন্যায়বিচারে। ন্যায়বিচারের এ শেষ কথাটির উল্লেখ ইবন কাসীরও করেন। তারপর তিনি বলেন, তাকদীর বিষয়ে সহীহ গ্রন্থগুলোতে, সুনান ও মুসনাদগুলোতে অনেক বর্ণনা আছে। সেগুলো এসেছে আলী, ইবন মাসউদ, আয়েশা (রাঃ) ও আরও বহু সাহাবী থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning, Not a Verdict",
          "bn": "সতর্কবার্তা, রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the end of the Day of Gathering, two parties, one in Paradise and one in the Blaze. It speaks only of what it names and licenses nothing against any living person or community: not against those who opposed the Prophet ﷺ in Makkah, and not against anyone now. In the narration the books are from the Lord of the worlds, no name in them is read out, and the Companions' question is answered with an instruction to keep working.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একত্র হওয়ার দিনের শেষ দৃশ্যের বর্ণনা দেয়: দুটি দল, একটি জান্নাতে, একটি জ্বলন্ত আগুনে। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। মক্কায় যারা নবী ﷺ-এর বিরোধিতা করেছিল তাদের বিরুদ্ধেও নয়, আজকের কারও বিরুদ্ধেও নয়। বর্ণনাতেও কিতাব দুটি জগতসমূহের রবের পক্ষ থেকে, সেখান থেকে একটি নামও পড়ে শোনানো হয়নি। আর সাহাবীদের প্রশ্নের জবাবে এসেছে আমল চালিয়ে যাওয়ার নির্দেশ।"
          },
          {
            "en": "So the verse ends where it began, with a warning. The Prophet ﷺ was sent with a Qur'an his hearers could understand, to warn a city and those around it, and to warn of a day. The Companions, hearing of the two books, asked why they should work, and the answer they were given was to seek what is right and draw near. That is the reply the verse leaves its reader too, in whatever town around the Mother of Towns the warning reaches.",
            "bn": "আয়াত তাই যেখানে শুরু হয়েছিল, সেখানেই শেষ হয়: একটি সতর্কবার্তায়। নবী ﷺ-কে পাঠানো হয়েছিল এমন কুরআন দিয়ে, যা শ্রোতারা বুঝতে পারত। উদ্দেশ্য ছিল একটা শহর আর তার চারপাশের মানুষকে সতর্ক করা, আর একটা দিন সম্পর্কে সতর্ক করা। দুই কিতাবের কথা শুনে সাহাবীরা জানতে চেয়েছিলেন, তবে আমল কেন। তাঁদের জবাব দেওয়া হয়েছিল: সঠিক পথে থাকো, তার কাছাকাছি থাকো। উম্মুল কুরার চারপাশের যে জনপদেই এ সতর্কবার্তা পৌঁছাক, পাঠকের জন্যও আয়াত সেই একই জবাব রেখে যায়।"
          }
        ]
      }
    ]
  },
  "42:13": {
    "sections": [
      {
        "h": {
          "en": "A Road Already Cut",
          "bn": "আগেই কেটে রাখা পথ"
        },
        "p": [
          {
            "en": "Shara'a lakum mina-d-din: He has laid down for you, of the religion. Ma'arif al-Qur'an marks a turn: the verses before it spoke of outward blessings, the keys of the heavens and the earth and provision, and this one names the inner, spiritual blessing. As-Sa'di goes further and calls it the greatest favour God has done His servants: that He laid down for them the best of religions, the one He laid down for the choicest of His chosen.",
            "bn": "শারাআ লাকুম মিনাদ দীন: তিনি তোমাদের জন্য দ্বীনের বিধান দিয়েছেন। মাআরিফুল কুরআন এখানে আলোচনার একটা মোড় দেখায়। আগের আয়াতগুলোতে ছিল বাইরের নিয়ামতের কথা: আসমান-জমিনের চাবি আর রিযিক। এই আয়াত বলে ভেতরের, রূহানি নিয়ামতের কথা। সা'দী আরও এগিয়ে বলেন, বান্দাদের প্রতি আল্লাহর সবচেয়ে বড় অনুগ্রহ এটাই: তিনি তাদের জন্য সেরা দ্বীন নির্ধারণ করেছেন। এ সেই দ্বীন, যা তিনি দিয়েছিলেন তাঁর বাছাই করা বান্দাদের মধ্যেও সেরাদের।"
          },
          {
            "en": "The verb is a road word. Al-Qurtubi glosses shara'a as: He opened a way, made it plain and showed its paths. He then lays out the family of the root. Ash-shari' is the main road, and a house is called shari' when it stands on a through road. Al-Baghawi keeps it short: He made clear and set down for you. On this reading, the religion reaches its hearers as a way already cut, not a riddle each of them must work out alone.",
            "bn": "ক্রিয়াটার সঙ্গে পথের সম্পর্ক। কুরতুবী শারাআর অর্থ বলেন: পথ খুলে দিয়েছেন, তা স্পষ্ট করেছেন, তার রাস্তাগুলো দেখিয়ে দিয়েছেন। তারপর তিনি একই ধাতুর অন্য শব্দগুলো দেখান। আশ-শারি' মানে বড় রাস্তা। যে বাড়ি চলাচলের খোলা রাস্তার ধারে, তাকেও শারি' বলা হয়। বাগাভী অল্প কথায় বলেন: তোমাদের জন্য স্পষ্ট করেছেন ও নির্ধারণ করে দিয়েছেন। এই পাঠে দ্বীন শ্রোতার কাছে আসে আগে থেকে কেটে রাখা পথ হয়ে। প্রত্যেককে একা একা ধাঁধার সমাধান খুঁজতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The First, the Last, Between",
          "bn": "প্রথম, শেষ আর মাঝের তিনজন"
        },
        "p": [
          {
            "en": "Five are named. Ibn Kathir reads the line in order: Nuh, the first messenger after Adam; the Prophet ﷺ, the last of them; and between them, of the ulu-l-'azm, the messengers of resolve, Ibrahim, Musa and 'Isa son of Maryam. He notes that the same five are gathered in 33:7, where God took a covenant from the prophets. The Muyassar also calls these five the ulu-l-'azm, adding \"according to the well-known view\". Al-Qurtubi gives another reason they are singled out: they were the bearers of law-codes.",
            "bn": "নাম এসেছে পাঁচজনের। ইবন কাসীর সারিটা পড়েন ক্রম ধরে। নূহ (আঃ), আদম (আঃ)-এর পর প্রথম রাসূল। নবী ﷺ, রাসূলদের মধ্যে সর্বশেষ। আর এ দুইয়ের মাঝে উলুল আযম, অর্থাৎ দৃঢ়সংকল্প রাসূলদের তিনজন: ইবরাহীম, মূসা আর মারইয়াম-পুত্র ঈসা (আঃ)। তিনি দেখান, এই পাঁচজনই একসঙ্গে এসেছেন ৩৩:৭ আয়াতে, যেখানে আল্লাহ নবীদের কাছ থেকে অঙ্গীকার নিয়েছিলেন। মুয়াসসারও এই পাঁচজনকে উলুল আযম বলে, সঙ্গে যোগ করে: প্রসিদ্ধ মত অনুযায়ী। কুরতুবী তাঁদের আলাদা করে উল্লেখের আরেকটি কারণ দেন: তাঁরা ছিলেন শরীয়তের ধারক।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the order itself. Nuh comes first and the Prophet ﷺ last. Ibrahim stands in the middle as the father of prophets, accepted as a prophet even by the Arabs in their unbelief. Musa and 'Isa follow because their followers were present while the Qur'an was coming down. In 33:7 the Prophet ﷺ is named before Nuh, and Ma'arif offers, with a careful perhaps, that this points to his being first in the original allotment of prophethood though last to be sent.",
            "bn": "মাআরিফুল কুরআন ক্রমটাকেই পড়ে দেখে। প্রথমে নূহ (আঃ), শেষে নবী ﷺ। মাঝখানে ইবরাহীম (আঃ), কারণ তিনি নবীদের পিতা। আরবরা কুফর আর শিরকে থেকেও তাঁকে নবী বলে মানত। তারপর মূসা ও ঈসা (আঃ), কারণ কুরআন নাজিলের সময় তাঁদের অনুসারীরাই সামনে উপস্থিত ছিল। ৩৩:৭ আয়াতে নবী ﷺ-এর নাম এসেছে নূহ (আঃ)-এর আগে। মাআরিফ সাবধানে 'হয়তো' বলে একটা ব্যাখ্যা দেয়: পাঠানো হয়েছে সবার শেষে, কিন্তু নবুওয়াতের আদি বণ্টনে তিনি সবার আগে।"
          },
          {
            "en": "Why does the line begin with Nuh and not with Adam? Al-Qurtubi quotes Ibn al-'Arabi, who cites the long intercession hadith in which people come to Nuh and call him the first messenger to the people of the earth; the wording stands in Sahih al-Bukhari (4712). Adam, he says, was the first prophet, but no duties were imposed on him and no prohibitions laid down. Nuh was sent with the prohibition of mothers, daughters and sisters in marriage, and with duties. Ma'arif adds that open unbelief first had to be faced in Nuh's time.",
            "bn": "সারিটা আদম (আঃ) দিয়ে শুরু না হয়ে নূহ (আঃ) দিয়ে কেন? কুরতুবী ইবনুল আরাবীর বক্তব্য উদ্ধৃত করেন। তিনি শাফাআতের দীর্ঘ হাদিসের উল্লেখ করেন, যেখানে মানুষ নূহ (আঃ)-এর কাছে এসে তাঁকে বলে পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল। সে কথা সহীহ বুখারীতে (৪৭১২) আছে। ইবনুল আরাবী বলেন, আদম (আঃ) প্রথম নবী ঠিকই, কিন্তু তাঁর উপর কোনো ফরজ চাপানো হয়নি, কোনো হারামও নির্ধারিত হয়নি। নূহ (আঃ)-কে পাঠানো হয় মা, মেয়ে ও বোনকে বিয়ে করা হারাম করে, আর তাঁর উপর দায়িত্বও দেওয়া হয়। মাআরিফ যোগ করে, প্রকাশ্য কুফরের মোকাবিলা প্রথম করতে হয়েছিল নূহ (আঃ)-এর যুগে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Core, Many Law-Codes",
          "bn": "মূল এক, শরীয়ত ভিন্ন"
        },
        "p": [
          {
            "en": "What, then, is the religion the five share? Ibn Kathir answers in one line: the worship of God alone, with no partner, and he cites 21:25, where every messenger before the Prophet ﷺ was told that there is no god but God. Their laws and ways may differ, he adds, and cites 5:48: to each of you We have appointed a law and a way. Al-Qurtubi draws the same boundary. The shared religion is tawhid, obedience to God, and faith in His messengers, His books and the Day of Recompense.",
            "bn": "তাহলে পাঁচজনের অভিন্ন দ্বীনটা কী? ইবন কাসীর এক কথায় উত্তর দেন: শরিকহীনভাবে এক আল্লাহর ইবাদত। দলিল হিসেবে আনেন ২১:২৫, যেখানে নবী ﷺ-এর আগের প্রত্যেক রাসূলকে জানানো হয়েছিল, আল্লাহ ছাড়া কোনো ইলাহ নেই। তিনি যোগ করেন, তাঁদের বিধান আর পথ আলাদা হতে পারে, আর উদ্ধৃত করেন ৫:৪৮: তোমাদের প্রত্যেকের জন্য আমি একটি বিধান ও একটি পথ নির্ধারণ করেছি। কুরতুবীও একই সীমারেখা টানেন। অভিন্ন দ্বীন হলো তাওহিদ, আল্লাহর আনুগত্য, আর তাঁর রাসূল, তাঁর কিতাব ও প্রতিদান দিবসের প্রতি ঈমান।"
          },
          {
            "en": "Al-Qurtubi says the verse does not mean the law-codes, which serve the welfare of each nation as its conditions require and so differ, and he too cites 5:48. He then quotes Ibn al-'Arabi's longer list of what never changed on the tongues of the prophets: tawhid, prayer, zakat, fasting and pilgrimage; truthfulness, keeping one's word, returning trusts and joining ties of kinship; and the prohibition of unbelief, killing, fornication, harm to people in any form and cruelty to animals. Beyond that, he says, the laws differed as wisdom required.",
            "bn": "কুরতুবী বলেন, এখানে শরীয়তগুলো বোঝানো হয়নি। ওগুলো প্রত্যেক জাতির অবস্থা অনুযায়ী তার কল্যাণের ব্যবস্থা, তাই সেগুলো ভিন্ন ভিন্ন। তিনিও ৫:৪৮ উদ্ধৃত করেন। তারপর ইবনুল আরাবীর একটা দীর্ঘ তালিকা আনেন, যা নবীদের মুখে কখনো বদলায়নি। তাওহিদ, নামাজ, যাকাত, রোজা আর হজ। সত্যবাদিতা, ওয়াদা রক্ষা, আমানত আদায় আর আত্মীয়তার বন্ধন জোড়া। আর কুফর, খুন, যিনা, যেকোনোভাবে মানুষকে কষ্ট দেওয়া ও প্রাণীর প্রতি জুলুম হারাম। এর বাইরে, তিনি বলেন, হিকমতের দাবি অনুযায়ী বিধান ভিন্ন হয়েছে।"
          },
          {
            "en": "At-Tabari gathers the early voices. Mujahid: what He enjoined on you and on His prophets, all one religion. As-Suddi: it is the religion as a whole. Qatada: Nuh was sent with a law that made the lawful lawful and the forbidden forbidden. Al-Qurtubi and al-Baghawi add another line from Mujahid: every prophet was charged with prayer, zakat and acknowledging obedience to God. At-Tabari also reports, from Ibn 'Abbas, a terse answer: enough for you is what you have been told.",
            "bn": "তাবারী পূর্বসূরিদের বক্তব্য জড়ো করেন। মুজাহিদ বলেন: তোমাকে আর তাঁর নবীদের যা নির্দেশ দিয়েছেন, সবই এক দ্বীন। সুদ্দী বলেন: এটা পুরো দ্বীন। কাতাদা বলেন: নূহ (আঃ)-কে পাঠানো হয়েছিল এমন শরীয়ত দিয়ে, যা হালালকে হালাল আর হারামকে হারাম করে। কুরতুবী ও বাগাভী মুজাহিদের আরেকটি কথা আনেন: প্রত্যেক নবীকে নামাজ, যাকাত আর আল্লাহর আনুগত্য স্বীকারের নির্দেশ দেওয়া হয়েছিল। তাবারী ইবন আব্বাস (রাঃ) থেকে একটা ছোট্ট জবাবও আনেন: তোমাকে যা বলা হয়েছে, সেটুকুই তোমার জন্য যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Brothers by Different Mothers",
          "bn": "এক পিতা, ভিন্ন মা"
        },
        "p": [
          {
            "en": "Ibn Kathir brings a hadith to this verse in a short form: we, the company of prophets, are awlad 'allat, sons of one father by different mothers; our religion is one. The fuller wording is in Sahih al-Bukhari (3443), from Abu Hurayra, that the Messenger of God ﷺ said: \"Both in this world and in the Hereafter, I am the nearest of all the people to Jesus, the son of Mary. The prophets are paternal brothers; their mothers are different, but their religion is one.\" It stands in al-Bukhari's Sahih, his own collection of sound reports.",
            "bn": "ইবন কাসীর এই আয়াতে একটি হাদিস আনেন সংক্ষিপ্ত আকারে: আমরা নবীরা একই পিতার ভিন্ন ভিন্ন মায়ের সন্তান, আমাদের দ্বীন এক। পূর্ণ শব্দ পাওয়া যায় সহীহ বুখারীতে (৩৪৪৩), আবু হুরায়রা (রাঃ) থেকে। রাসূলুল্লাহ ﷺ বলেছেন: \"দুনিয়া ও আখিরাতে মারইয়াম-পুত্র ঈসার সবচেয়ে নিকটবর্তী মানুষ আমি। নবীরা বৈমাত্রেয় ভাই: তাঁদের মা ভিন্ন ভিন্ন, আর তাঁদের দ্বীন এক।\" হাদিসটি বুখারী তাঁর সহীহ গ্রন্থে এনেছেন, যা তাঁর নিজের বাছাই করা বিশুদ্ধ বর্ণনার সংকলন।"
          },
          {
            "en": "The hadith gives its own image: one father, several mothers. Ibn Kathir draws it into this verse: what the prophets hold in common is the worship of God alone, with no partner, even though their laws and ways differ, and he sets this beside 5:48. The opening clause, the Prophet's ﷺ nearness to 'Isa, returns in the report just before it (3442), also from Abu Hurayra, beside a further line: \"I am the nearest of all the people to the son of Mary, and all the prophets are paternal brothers, and there has been no prophet between me and him.\"",
            "bn": "হাদিসটি নিজেই একটা ছবি দেয়: বাবা এক, মা অনেক। ইবন কাসীর ছবিটাকে আয়াতের সঙ্গে মেলান। নবীদের মধ্যে যা অভিন্ন তা হলো শরিকহীনভাবে এক আল্লাহর ইবাদত, যদিও তাঁদের বিধান আর পথ আলাদা। এর পাশে তিনি ৫:৪৮ রাখেন। হাদিসের শুরুর কথা, ঈসা (আঃ)-এর সঙ্গে নবী ﷺ-এর নৈকট্য, আবার এসেছে ঠিক আগের বর্ণনায় (৩৪৪২), সেটিও আবু হুরায়রা (রাঃ) থেকে, পাশে আরেকটি বাক্যসহ: \"মারইয়াম-পুত্রের সবচেয়ে নিকটবর্তী মানুষ আমি। সব নবী বৈমাত্রেয় ভাই। আর আমার ও তাঁর মাঝে কোনো নবী আসেননি।\""
          }
        ]
      },
      {
        "h": {
          "en": "One Bequest, Spelt Out",
          "bn": "একটিই ওসিয়ত, খুলে বলা"
        },
        "p": [
          {
            "en": "An aqimu-d-dina wa la tatafarraqu fih: that you establish the religion and do not split apart in it. At-Tabari reads it as the content of what was enjoined and weighs three ways of parsing the little word an, all leading him to one conclusion: what all these prophets were charged with was a single bequest, to establish the true religion and not divide in it. Al-Qurtubi adds a fourth parsing, an as a plain particle of explanation.",
            "bn": "আন আকীমুদ দীনা ওয়ালা তাতাফাররাকূ ফীহ: দ্বীন কায়েম করো, আর তাতে বিভক্ত হয়ো না। তাবারী এই অংশটুকুকে সেই নির্দেশের বিষয়বস্তু হিসেবে পড়েন, যার ওসিয়ত করা হয়েছিল। ছোট্ট শব্দ 'আন'-এর তিন রকম ব্যাকরণগত অবস্থান তিনি যাচাই করেন। তিনটিই তাঁকে একই সিদ্ধান্তে পৌঁছে দেয়: এই নবীদের সবাইকে দেওয়া হয়েছিল একটিমাত্র ওসিয়ত, সত্য দ্বীন কায়েম করা আর তাতে বিভক্ত না হওয়া। কুরতুবী চতুর্থ আরেকটি সম্ভাবনা যোগ করেন: 'আন' এখানে শুধু ব্যাখ্যাসূচক অব্যয়।"
          },
          {
            "en": "What does establishing it mean? At-Tabari: act on it as it was laid down and made obligatory, and as-Suddi says simply, act on it. Ibn al-'Arabi, quoted by al-Qurtubi, reads make it standing as keeping it permanent, preserved and settled, without dispute or disturbance; some kept that charge and some broke it, and he cites 48:10, whoever breaks his pledge breaks it against himself. As-Sa'di widens the circle: establish all its laws, roots and branches, in yourselves, and strive to establish it among others.",
            "bn": "কায়েম করা মানে কী? তাবারী বলেন: যেভাবে বিধান দেওয়া হয়েছে আর ফরজ করা হয়েছে, সেভাবে আমল করা। সুদ্দী সংক্ষেপে বলেন: তার উপর আমল করো। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী 'দাঁড় করাও' কথাটিকে পড়েন এভাবে: দ্বীনকে স্থায়ী, সুরক্ষিত আর স্থির রাখো, মতভেদ আর টলমল ছাড়া। কেউ সেই দায়িত্ব পালন করেছে, কেউ ভেঙেছে। এখানে তিনি ৪৮:১০ উদ্ধৃত করেন: যে অঙ্গীকার ভাঙে, সে নিজের ক্ষতির জন্যই ভাঙে। সা'দী পরিধি আরও বাড়ান: দ্বীনের মূল ও শাখা সব বিধান নিজেদের মধ্যে কায়েম করো, আর অন্যদের মধ্যেও কায়েম করতে চেষ্টা চালাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Differing Without Dividing",
          "bn": "মতভেদ আছে, বিভেদ নয়"
        },
        "p": [
          {
            "en": "On wa la tatafarraqu fih the glosses run close together. At-Tabari: do not differ in the religion you were commanded to establish, as the factions before you differed. He adds Qatada's line: learn that division is ruin and the community is security. Ibn Kathir: God enjoined all the prophets to harmony and community and forbade them division and difference. Al-Baghawi: God sent every prophet with establishing the religion, with fellowship and community, and with leaving division and opposition.",
            "bn": "ওয়ালা তাতাফাররাকূ ফীহ নিয়ে ব্যাখ্যাগুলো কাছাকাছি। তাবারী বলেন: যে দ্বীন কায়েমের নির্দেশ পেয়েছ, তাতে মতভেদ কোরো না, যেমন তোমাদের আগের দলগুলো করেছিল। সঙ্গে আনেন কাতাদার কথা: জেনে রাখো, বিভক্তি ধ্বংস, আর জামাআত নিরাপত্তা। ইবন কাসীর বলেন, আল্লাহ সব নবীকে মিলেমিশে জামাআতবদ্ধ থাকার নির্দেশ দিয়েছেন, আর বিভক্তি ও মতবিরোধ থেকে নিষেধ করেছেন। বাগাভী বলেন, আল্লাহ প্রত্যেক নবীকে পাঠিয়েছেন দ্বীন কায়েম, সম্প্রীতি আর জামাআত নিয়ে, আর বিভক্তি ও বিরোধ ত্যাগের নির্দেশ দিয়ে।"
          },
          {
            "en": "Where exactly the line falls, two of the commentators draw differently. As-Sa'di asks for agreement on the roots of the religion and on its branches, and names the danger: that particular questions split you into parties and factions, each hostile to the other, while you agree on the root of your religion. He counts the gatherings the law itself commands, the pilgrimage, the two Eids, the Friday prayer and the five daily prayers among them, as forms of holding together.",
            "bn": "সীমারেখা ঠিক কোথায়, এ নিয়ে দুজন তাফসীরকার ভিন্নভাবে রেখা টানেন। সা'দী চান দ্বীনের মূল ও শাখা, দুই ক্ষেত্রেই ঐক্য। বিপদটার নামও তিনি বলেন: খুঁটিনাটি মাসআলা যেন তোমাদের এমন দলে দলে ভাগ করে না ফেলে, যারা দ্বীনের মূলে একমত থেকেও একে অপরের শত্রু। শরীয়ত নিজে যেসব সমাবেশের নির্দেশ দিয়েছে, যেমন হজ, দুই ঈদ, জুমআ আর পাঁচ ওয়াক্ত নামাজ, সেগুলোকে তিনি একসঙ্গে থাকারই নানা রূপ হিসেবে গণ্য করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an places the prohibition at the shared core. Reading the verse beside 5:48, it says the forbidden dissension concerns the injunctions common to all the prophets. Differences among the leading jurists on secondary questions, where no express text exists or texts appear to pull apart, are not that dissension; they go back to the Companions, and the jurists unanimously count them a blessing. So as-Sa'di aims at hostility over questions, and Ma'arif at dispute over the common core. The verse names no group, and neither does this reading of it.",
            "bn": "মাআরিফুল কুরআন নিষেধাজ্ঞাটাকে রাখে অভিন্ন মূলের জায়গায়। ৫:৪৮ পাশে রেখে সে বলে, নিষিদ্ধ বিরোধ হলো সব নবীর শরীয়তে অভিন্ন বিধানগুলো নিয়ে। শাখাগত মাসআলায় বড় মুজতাহিদদের মতভেদ, যেখানে স্পষ্ট নস নেই কিংবা নসগুলো আপাতদৃষ্টিতে ভিন্ন দিকে যায়, সেটা ওই নিষিদ্ধ বিরোধ নয়। সাহাবীদের যুগ থেকেই তা চলে আসছে, আর ফকীহরা সর্বসম্মতভাবে একে নিয়ামত গণ্য করেন। তাহলে সা'দীর লক্ষ্য মাসআলা নিয়ে শত্রুতা, আর মাআরিফের লক্ষ্য অভিন্ন মূল নিয়ে বিরোধ। আয়াত কোনো দলের নাম নেয় না, এই আলোচনাও নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Call That Weighed Heavy",
          "bn": "যে আহ্বান ভারী ঠেকেছিল"
        },
        "p": [
          {
            "en": "Kabura 'ala-l-mushrikina ma tad'uhum ilayh: heavy upon the mushrikin is what you call them to. At-Tabari names the audience and the content: heavy upon those of your people, O Muhammad, who associate others with God, is your call to devote worship sincerely to God, to single Him out in divinity and to disown the gods and rivals besides Him. Al-Qurtubi and al-Baghawi: tawhid and the rejection of idols. Qatada, in at-Tabari, says the witness that there is no god but God weighed on them.",
            "bn": "কাবুরা আলাল মুশরিকীনা মা তাদউহুম ইলাইহ: তুমি তাদের যেদিকে ডাকছ, তা মুশরিকদের কাছে ভারী ঠেকে। তাবারী শ্রোতাদের আর ডাকের বিষয় দুটোই চিনিয়ে দেন। হে মুহাম্মাদ, তোমার কওমের যারা আল্লাহর সঙ্গে শরিক করে, তাদের কাছে ভারী ঠেকে তোমার এই ডাক: ইবাদত খাঁটিভাবে আল্লাহর জন্য করো, উলূহিয়্যাতে তাঁকে একক মানো, আর তাঁকে ছাড়া অন্য সব উপাস্য ও সমকক্ষ থেকে সম্পর্ক ছিন্ন করো। কুরতুবী ও বাগাভী বলেন: তাওহিদ আর মূর্তি বর্জন। তাবারীর উদ্ধৃতিতে কাতাদা বলেন, লা ইলাহা ইল্লাল্লাহর সাক্ষ্য তাদের কাছে ভারী লেগেছিল।"
          },
          {
            "en": "Qatada goes on: Iblis and his troops set themselves against it, and God refused anything but to carry it through and make it prevail over whoever opposed it. As-Sa'di says it was hard on them in the extreme, since they were called to devotion to God alone, and cites two verses: 39:45, when God alone is mentioned their hearts shrink, and 38:5, has he made the gods one God? Ma'arif al-Qur'an gives the reason: they followed their desires and had no intention of understanding the truth.",
            "bn": "কাতাদা আরও বলেন: ইবলিস ও তার বাহিনী সেই সাক্ষ্যের বিরুদ্ধে দাঁড়িয়েছিল, কিন্তু আল্লাহ তা চালু রাখা আর বিরোধীদের উপর তাকে বিজয়ী করা ছাড়া আর কিছুতে রাজি হননি। সা'দী বলেন, তাদের কাছে এটা চরম কষ্টকর ছিল, কারণ তাদের ডাকা হচ্ছিল একমাত্র আল্লাহর জন্য ইখলাসের দিকে। তিনি দুটি আয়াত আনেন। ৩৯:৪৫: শুধু আল্লাহর নাম নিলে তাদের অন্তর সংকুচিত হয়ে যায়। আর ৩৮:৫: সে কি সব উপাস্যকে এক ইলাহ বানিয়ে ফেলল? মাআরিফুল কুরআন কারণটা বলে দেয়: তারা প্রবৃত্তির অনুসরণ করত, সত্য বোঝার ইচ্ছাই তাদের ছিল না।"
          },
          {
            "en": "This needs saying plainly. The verse describes how the Prophet's ﷺ own hearers in his time received his call, and at-Tabari reads the mushrikin here as those of his people. It reports their response and licenses nothing against any living person or community. What it leaves the reader is a question turned inward: does the call to God alone weigh on my own heart, and what is that heart leaning on instead?",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে, নবী ﷺ-এর সময়ে তাঁর নিজের শ্রোতারা তাঁর ডাক কীভাবে গ্রহণ করেছিল। তাবারী এখানে মুশরিক বলতে তাঁর কওমের লোকদেরই বোঝেন। আয়াত তাদের প্রতিক্রিয়ার খবর দেয়। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। পাঠকের জন্য যা থাকে তা ভেতরের দিকে ফেরানো এক প্রশ্ন: এক আল্লাহর দিকে ডাক কি আমার নিজের মনেও ভারী লাগে? আর তার বদলে মন কিসের উপর ভর দিয়ে আছে?"
          }
        ]
      },
      {
        "h": {
          "en": "Chosen, and the One Who Turns",
          "bn": "বাছাই করা, আর যে ফিরে আসে"
        },
        "p": [
          {
            "en": "Allahu yajtabi ilayhi man yasha': God chooses for Himself whom He wills. Al-Qurtubi defines ijtiba' as choosing, here choosing for tawhid, and the Muyassar says the same. At-Tabari: He selects whom He wills of His creation and takes for His friendship whom He loves. As-Sa'di: He chooses from His creation those He knows to be fit to be chosen, for His message and His friendship.",
            "bn": "আল্লাহু ইয়াজতাবী ইলাইহি মাঁই ইয়াশা: আল্লাহ যাকে ইচ্ছা নিজের জন্য বেছে নেন। কুরতুবী ইজতিবার অর্থ বলেন বাছাই করা, এখানে তাওহিদের জন্য বাছাই। মুয়াসসারও তা-ই বলে। তাবারী বলেন: তিনি তাঁর সৃষ্টির মধ্য থেকে যাকে ইচ্ছা বেছে নেন, আর যাকে ভালোবাসেন তাকে নিজের বন্ধুত্বের জন্য গ্রহণ করেন। সা'দী বলেন: সৃষ্টির মধ্যে যাদের তিনি বাছাইয়ের উপযুক্ত বলে জানেন, তাদেরই তিনি রিসালাত আর নিজের বন্ধুত্বের জন্য বেছে নেন।"
          },
          {
            "en": "Wa yahdi ilayhi man yunib: and He guides to Himself whoever turns back. At-Tabari, from Mujahid: He grants success in obeying Him and following the truth His Prophet brought to whoever comes towards His obedience and returns in repentance from disobeying Him. Al-Qurtubi: He draws out for His religion whoever returns to Him. As-Sa'di calls this turning the cause on the servant's side by which he reaches God's guidance, and counts a good aim joined to effort in seeking guidance among the means that make it easy, citing 5:16.",
            "bn": "ওয়া ইয়াহদী ইলাইহি মাঁই ইউনীব: আর যে ফিরে আসে, তাকে তিনি নিজের দিকে পথ দেখান। তাবারী মুজাহিদ থেকে আনেন: যে তাঁর আনুগত্যের দিকে এগিয়ে আসে আর নাফরমানি থেকে তওবা করে ফেরে, তাকে তিনি আনুগত্যের আর নবীর আনা সত্য অনুসরণের তাওফীক দেন। কুরতুবী বলেন: যে তাঁর দিকে ফেরে, তাকে তিনি নিজের দ্বীনের জন্য বেছে আলাদা করে নেন। সা'দী এই ফিরে আসাকে বলেন বান্দার দিক থেকে সেই উপায়, যা দিয়ে সে আল্লাহর হিদায়াতে পৌঁছায়। নিয়ত ভালো হলে আর হিদায়াত খুঁজতে চেষ্টা থাকলে পথ সহজ হয়, এ কথা বলে তিনি ৫:১৬ আনেন।"
          },
          {
            "en": "How do the two halves meet? Ibn Kathir: He is the One who decrees guidance for those who deserve it and writes misguidance against those who prefer it to the path of right guidance. Ma'arif al-Qur'an sees two ways: God's own selection, which is exceptional and limited, as with prophets and His special friends, citing 38:46; and the general way, in which whoever turns to God, intending to follow His religion, is guided to it. The second way is the one the verse opens to every reader.",
            "bn": "দুই অংশ কীভাবে মেলে? ইবন কাসীর বলেন: হিদায়াতের যোগ্যদের জন্য তিনিই হিদায়াত নির্ধারণ করেন, আর যারা সঠিক পথের বদলে গোমরাহিকে বেছে নেয়, তাদের উপর গোমরাহি লিখে দেন। মাআরিফুল কুরআন দুটি পথ দেখে। একটি আল্লাহর নিজের বাছাই, যা ব্যতিক্রমী ও সীমিত, যেমন নবী আর তাঁর বিশেষ বন্ধুদের ক্ষেত্রে, দলিল ৩৮:৪৬। অন্যটি সাধারণ পথ: যে আল্লাহর দিকে ফেরে আর তাঁর দ্বীন মানার নিয়ত করে, তিনি তাকে সেই দ্বীনের পথ দেখান। এই দ্বিতীয় পথ আয়াতটি প্রত্যেক পাঠকের সামনে খুলে রাখে।"
          }
        ]
      }
    ]
  },
  "42:19": {
    "sections": [
      {
        "h": {
          "en": "Between the Hour and the Harvest",
          "bn": "কিয়ামত আর ফসলের মাঝখানে"
        },
        "p": [
          {
            "en": "Allahu latifun bi-'ibadihi, yarzuqu man yasha'u, wa huwa al-qawiyyu al-'aziz: Allah is Latif with His servants; He provides for whom He wills; and He is the Strong, the Mighty. Nine Arabic words, set at a turn in the passage. 42:17 says that Allah sent down the Book with the truth, and the Balance, and that the Hour may be near. 42:18 sets two responses side by side: those who do not believe ask to hasten it, while the believers fear it and know it is true. Those hasteners are a description; the verse licenses nothing against any living person or community.",
            "bn": "আল্লাহু লাতীফুন বিইবাদিহী, ইয়ারযুকু মান ইয়াশাউ, ওয়া হুয়াল কাওয়িয়্যুল আযীয: আল্লাহ তাঁর বান্দাদের প্রতি লাতীফ; যাকে চান রিযিক দেন; আর তিনি প্রবল, পরাক্রমশালী। আরবিতে মাত্র নয়টি শব্দ, আর আয়াতটি বসেছে আলোচনার একটা মোড়ে। ৪২:১৭ বলছে, আল্লাহই সত্যসহ কিতাব নাজিল করেছেন, সঙ্গে মীযান, আর কিয়ামত হয়তো কাছেই। ৪২:১৮ পাশাপাশি রাখে দুই রকম সাড়া। যারা ঈমান আনে না, তারা কিয়ামত তাড়াতাড়ি চায়। মুমিনরা তাকে ভয় করে, আর জানে তা সত্য। তাড়া দেওয়া ওই লোকদের কথা এখানে শুধু একটা বর্ণনা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না।"
          },
          {
            "en": "After this verse, 42:20 speaks of two harvests: whoever wants the harvest of the Hereafter is given increase in it, and whoever wants the harvest of this world is given some of it and has no share in the Hereafter. Ibn Kathir, in the abridged English, adds that in this world such a person is given if Allah wills, and if He does not will, he gains neither. Two echoes inside the surah are worth a line each: man yasha' recalls 42:13, where Allah chooses for Himself whom He wills, and 'ibadihi returns in 42:25, where He accepts repentance from His servants.",
            "bn": "এ আয়াতের পরেই ৪২:২০ দুই ফসলের কথা বলে। যে আখিরাতের ফসল চায়, তার ফসলে বাড়তি দেওয়া হয়। যে দুনিয়ার ফসল চায়, তাকে তার কিছু দেওয়া হয়, কিন্তু আখিরাতে তার কোনো ভাগ থাকে না। ইবন কাসীর সংক্ষিপ্ত ইংরেজি সংস্করণে যোগ করেন: দুনিয়াতেও আল্লাহ চাইলে তাকে দেন, না চাইলে সে দুটোর কোনোটিই পায় না। সূরার ভেতরে দুটি প্রতিধ্বনি এক লাইন করে বলা যায়। মান ইয়াশা কথাটি মনে করিয়ে দেয় ৪২:১৩, যেখানে আল্লাহ যাকে চান নিজের জন্য বেছে নেন। আর ইবাদিহী শব্দটি ফিরে আসে ৪২:২৫ আয়াতে, যেখানে তিনি তাঁর বান্দাদের তওবা কবুল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Solicitous, Generous, Gentle",
          "bn": "যত্নবান, সদাশয়, কোমল"
        },
        "p": [
          {
            "en": "Al-Baghawi and al-Qurtubi open with the same three glosses, each a single word with its preposition. Ibn Abbas: hafiyyun bihim, solicitous toward them, attentive in His care. Ikrimah: barrun bihim, generous in doing them good. As-Suddi: rafiq, gentle, which al-Qurtubi gives as rafiqun bihim, gentle with them. Ma'arif al-Qur'an renders the first two in English as kind and benefactor. Translators of the verse divide in the same way: the English translation shown with it here says Subtle, while the Bengali gives meherban, kind.",
            "bn": "বাগাভী আর কুরতুবী দুজনেই শুরু করেন একই তিনটি ব্যাখ্যা দিয়ে। প্রতিটি মাত্র একটি শব্দ, সঙ্গে তার অব্যয়। ইবন আব্বাস (রাঃ) বলেন: হাফিয়্যুন বিহিম, তাদের প্রতি যত্নবান, খোঁজখবর রাখেন। ইকরিমা বলেন: বাররুন বিহিম, তাদের প্রতি সদাশয়, ভালো করে যান। সুদ্দী বলেন: রাফীক, কোমল। কুরতুবীর বর্ণনায় শব্দটি রাফীকুন বিহিম, তাদের সঙ্গে কোমল। মাআরিফুল কুরআন প্রথম দুটির ইংরেজি করেছে দয়ালু আর উপকারী। আয়াতের অনুবাদকেরাও এভাবে দুই দিকে যান। এখানে আয়াতের সঙ্গে দেওয়া ইংরেজি অনুবাদে আছে সূক্ষ্ম, আর বাংলা অনুবাদে আছে মেহেরবান।"
          },
          {
            "en": "Muqatil's gloss ties the word to the clause after it. He is Latif with the righteous and the sinner alike, al-Qurtubi reports, in that He did not kill them by hunger for their sins; al-Baghawi words it as did not destroy them by hunger. Al-Baghawi then reads yarzuqu man yasha' through that gloss, pointing to the same phrase in 2:212: everyone Allah provides for, believer or disbeliever, and every being with a soul, is among those He wills to provide for. Ma'arif al-Qur'an gives Muqatil's point in English: even disbelievers and sinners keep receiving His worldly blessings.",
            "bn": "মুকাতিলের ব্যাখ্যা শব্দটিকে পরের অংশের সঙ্গে জুড়ে দেয়। কুরতুবী তাঁর কথা আনেন এভাবে: তিনি নেককার আর গুনাহগার দুজনের প্রতিই লাতীফ, কারণ তাদের গুনাহের জন্য তিনি তাদের না খাইয়ে মেরে ফেলেননি। বাগাভীর ভাষায়, ক্ষুধায় ধ্বংস করে দেননি। এরপর বাগাভী এই ব্যাখ্যার আলোয় পড়েন ইয়ারযুকু মান ইয়াশা, আর একই কথার জন্য দেখান ২:২১২। আল্লাহ যাকেই রিযিক দেন, মুমিন হোক বা কাফির, কিংবা যেকোনো প্রাণী, সে তাদেরই একজন যাদের রিযিক দিতে আল্লাহ চেয়েছেন। মাআরিফুল কুরআন মুকাতিলের কথাটা বলেছে এভাবে: কাফির আর গুনাহগারও তাঁর দুনিয়ার নিয়ামত পেতেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reaching the Good Unnoticed",
          "bn": "অজান্তে কল্যাণে পৌঁছে দেওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di begins with why the verse is said at all: Allah tells of His lutf with His servants so that they may know Him and love Him, and place themselves in the path of His gentleness and generosity. Then he defines the attribute. Lutf, one of His descriptions, means the One who perceives what lies in hearts and what is kept secret, and who brings His servants, the believers especially, to what holds good for them by ways they neither know nor expect. Two things sit in that definition: a knowing that reaches the hidden, and a bringing that goes unnoticed.",
            "bn": "সা'দী শুরু করেন আয়াতটি কেন বলা হলো তা দিয়ে। আল্লাহ বান্দাদের প্রতি তাঁর লুতফের খবর দেন, যাতে তারা তাঁকে চেনে, তাঁকে ভালোবাসে, আর তাঁর লুতফ ও দানের পথে নিজেদের দাঁড় করায়। এরপর তিনি গুণটির সংজ্ঞা দেন। লুতফ আল্লাহর একটি সিফাত। এর অর্থ, তিনি অন্তরের কথা আর গোপন বিষয় জানেন, আর বান্দাদের, বিশেষ করে মুমিনদের, তাদের কল্যাণের দিকে পৌঁছে দেন এমন পথে, যা তারা জানে না, ভাবতেও পারে না। তাঁর সংজ্ঞায় তাই দুটি জিনিস আছে: গোপন পর্যন্ত পৌঁছানো জ্ঞান, আর টের না পাওয়ার মতো করে পৌঁছে দেওয়া।"
          },
          {
            "en": "His examples are concrete. Part of His lutf with the believing servant is that He guides him to good by a guidance that never crossed his mind, through means He makes easy: a nature made to love the truth and yield to it, and His prompting of the noble angels to make the believers firm, urge them to good, and cast into their hearts an attraction to the truth that moves them to follow it. Another is that He commanded the believers to worship together, by which their resolve grows strong, their aspirations rise, and they compete in good and follow one another's example.",
            "bn": "তাঁর উদাহরণগুলো একেবারে বাস্তব। মুমিন বান্দার প্রতি লুতফের একটি হলো, তিনি তাকে এমনভাবে কল্যাণের পথ দেখান, যা তার মাথায়ও আসেনি। এর জন্য তিনি উপায় সহজ করে দেন। তার স্বভাবে সত্যের প্রতি ভালোবাসা আর সত্যের কাছে নত হওয়ার টান দিয়ে দেন। সম্মানিত ফেরেশতাদের নির্দেশ দেন মুমিনদের অবিচল রাখতে, ভালো কাজে উৎসাহ দিতে, আর তাদের অন্তরে সত্যকে এমন সুন্দর করে তুলে ধরতে, যাতে তারা তা মেনে চলে। আরেকটি লুতফ হলো, তিনি মুমিনদের একসঙ্গে ইবাদতের হুকুম দিয়েছেন। এতে তাদের সংকল্প মজবুত হয়, হিম্মত জাগে, নেক কাজে প্রতিযোগিতা হয়, আর একে অন্যকে দেখে শেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Less Is the Kindness",
          "bn": "কম দেওয়াতেই যখন দয়া"
        },
        "p": [
          {
            "en": "His third example reaches the middle clause. Part of His lutf, as-Sa'di says, is that He sets in His servant's way every cause that holds him back and stands between him and sins. So when Allah knows that the world, wealth, leadership and the like, the things worldly people compete for, would cut His servant off from obeying Him, or carry him into heedlessness of Him or into disobedience, He turns those things away from him and straitens his provision. That, he says, is why the verse says here: He provides for whom He wills, as His wisdom and His lutf require.",
            "bn": "তাঁর তৃতীয় উদাহরণ আয়াতের মাঝের অংশে গিয়ে পৌঁছায়। সা'দী বলেন, লুতফের একটি দিক হলো, বান্দাকে গুনাহ থেকে আটকে রাখে আর গুনাহের মাঝে দেয়াল হয়ে দাঁড়ায়, এমন প্রতিটি উপায় তিনি তার পথে রেখে দেন। দুনিয়া, সম্পদ, নেতৃত্ব, দুনিয়াদাররা যা নিয়ে কাড়াকাড়ি করে, আল্লাহ যদি জানেন এসব তাঁর বান্দাকে আনুগত্য থেকে ছিন্ন করবে, তাঁর ব্যাপারে গাফিল করবে বা নাফরমানিতে টেনে নেবে, তবে তিনি সেগুলো তার থেকে সরিয়ে দেন, তার রিযিক মেপে কম করে দেন। সা'দী বলেন, এ কারণেই এখানে বলা হয়েছে: যাকে চান রিযিক দেন, তাঁর হিকমত আর লুতফ যেমন দাবি করে।"
          },
          {
            "en": "The surah returns to this in 42:27: if Allah were to spread provision wide for His servants, they would transgress in the land, but He sends it down in the measure He wills. None of the commentaries fetched for 42:19 cites that verse here, so it stands as the Qur'an's own echo, not as anyone's reading of this line. Beside as-Sa'di's words, it gives a reader a reason to look again at something withheld, a post not given or an income that stayed small, before deciding that it was only loss.",
            "bn": "সূরাটি এ কথায় ফিরে আসে ৪২:২৭ আয়াতে: আল্লাহ যদি বান্দাদের জন্য রিযিক অঢেল করে দিতেন, তারা পৃথিবীতে সীমালঙ্ঘন করত, কিন্তু তিনি যে পরিমাণ চান মেপে নাজিল করেন। ৪২:১৯ নিয়ে যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এখানে ওই আয়াত উল্লেখ করেনি। তাই এটি কুরআনের নিজের প্রতিধ্বনি, এ আয়াতের কারও ব্যাখ্যা নয়। সা'দীর কথার পাশে রাখলে এটি পাঠককে একটা কারণ দেয়। যা পাওয়া হয়নি, না পাওয়া কোনো পদ বা ছোট হয়ে থাকা আয়, তা নিছক ক্ষতি বলে ধরে নেওয়ার আগে আরেকবার ভেবে দেখার কারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgetting No One, Widening for Some",
          "bn": "কেউ বাদ নয়, কারও জন্য প্রশস্ত"
        },
        "p": [
          {
            "en": "Ibn Kathir starts from the widest circle. Allah tells here of His lutf with His creation in providing for them to the very last of them; He forgets none of them, and the righteous and the sinner are alike in His provision. He cites 11:6, that there is no creature moving on the earth but its provision rests on Allah, who knows its dwelling and its place of deposit, all in a clear record, and says the verse has many parallels. Then he glosses yarzuqu man yasha' more narrowly: He gives abundantly to whom He wills.",
            "bn": "ইবন কাসীর শুরু করেন সবচেয়ে বড় পরিসর থেকে। আল্লাহ এখানে সৃষ্টির প্রতি তাঁর লুতফের খবর দিচ্ছেন। তিনি একেবারে শেষজন পর্যন্ত সবাইকে রিযিক দেন, কাউকে ভোলেন না। রিযিকের বেলায় নেককার আর গুনাহগার সমান। এর সমর্থনে তিনি আনেন ১১:৬: পৃথিবীতে চলাফেরা করে এমন প্রতিটি প্রাণীর রিযিক আল্লাহর দায়িত্বে, তিনি জানেন তার থাকার জায়গা আর রেখে দেওয়ার জায়গা, সবই এক স্পষ্ট কিতাবে লেখা। তিনি বলেন, এর মতো আয়াত আরও অনেক আছে। তারপর ইয়ারযুকু মান ইয়াশা-র ব্যাখ্যা দেন সরু করে: যাকে চান, তাকে প্রশস্ত করে দেন।"
          },
          {
            "en": "At-Tabari makes the clause two-sided: Allah, possessor of lutf with His servants, provides for whom He wills, widening it for him, and straitens it for whom He wills among them. The Muyassar says the same and adds that it follows His wisdom. Al-Qurtubi has He provides for whom He wills and deprives whom He wills. So the readings differ in emphasis. Al-Baghawi, with Muqatil, counts every creature that is fed among those Allah willed to feed; Ibn Kathir, at-Tabari and the Muyassar read it as being about the measure each is given: widened for some and, in at-Tabari and the Muyassar, straitened for others.",
            "bn": "তাবারী অংশটিকে দুই দিক থেকে দেখেন। বান্দাদের প্রতি লুতফের অধিকারী আল্লাহ যাকে চান রিযিক দেন, তার জন্য প্রশস্ত করেন। আর তাদের মধ্যে যার জন্য চান, সংকুচিত করেন। মুয়াসসারও একই কথা বলে, সঙ্গে যোগ করে যে এটা তাঁর হিকমত অনুযায়ী। কুরতুবীর ভাষায়: যাকে চান রিযিক দেন, যাকে চান বঞ্চিত করেন। ফলে জোরের জায়গায় পাঠগুলো আলাদা। মুকাতিলের সঙ্গে বাগাভী ধরেন, যে প্রাণীই খাবার পায়, সে তাদের একজন যাদের খাওয়াতে আল্লাহ চেয়েছেন। ইবন কাসীর, তাবারী আর মুয়াসসার অংশটিকে পড়েন কে কতটা পায়, সে প্রসঙ্গে। কারও জন্য প্রশস্ত, আর তাবারী ও মুয়াসসারের মতে কারও জন্য সংকুচিত।"
          },
          {
            "en": "Ma'arif al-Qur'an raises the question directly. If Allah provides for every creature without exception, even animals on land and in the water whom no one knows, why does the verse say whom He wills? It answers from Tafsir Mazhari. Provision comes in countless kinds; what is necessary is given to all, while particular kinds are shared out in degrees and amounts set by His wisdom. One person is given more wealth, one more health and strength, one more learning, one something else, so that each depends on another, and that dependence, it says, moves people to help one another and is the foundation of human civilisation.",
            "bn": "মাআরিফুল কুরআন প্রশ্নটা সরাসরি তোলে। আল্লাহ যদি সব প্রাণীকে কোনো ব্যতিক্রম ছাড়াই রিযিক দেন, এমনকি জলে-স্থলে এমন প্রাণীকেও যাদের কেউ চেনে না, তবে আয়াত কেন বলছে যাকে চান? উত্তরটা সে নেয় তাফসীরে মাযহারী থেকে। রিযিকের ধরন অগণিত। যা না হলেই নয়, তা সবাই পায়। আর বিশেষ কিছু ধরন তিনি তাঁর হিকমত অনুযায়ী মাত্রা আর পরিমাণ ঠিক করে বণ্টন করেন। একজন পায় বেশি সম্পদ, আরেকজন বেশি স্বাস্থ্য ও শক্তি, কেউ বেশি জ্ঞান, কেউ অন্য কিছু। এভাবে প্রত্যেকে অন্যের উপর নির্ভর করে। মাআরিফুল কুরআন বলে, এই নির্ভরতাই মানুষকে পরস্পরের সাহায্যে টানে, আর এটাই মানব সভ্যতার ভিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Handed Over at Once",
          "bn": "সবটা একবারে নয়"
        },
        "p": [
          {
            "en": "Al-Baghawi and al-Qurtubi both report a saying of Ja'far, whom al-Baghawi calls Ja'far as-Sadiq and al-Qurtubi names in full as Ja'far ibn Muhammad ibn Ali ibn al-Husayn. Lutf in provision, he said, has two sides: He made your provision from good and wholesome things, and He did not hand it to you all at once. Al-Qurtubi's version adds the reason: lest you squander it. Ma'arif al-Qur'an, citing Mazhari and Qurtubi, gives the first side as supplying each living being with what it needs, and the reason for the second as practical: otherwise keeping it safe would not be feasible.",
            "bn": "বাগাভী আর কুরতুবী দুজনেই জা'ফরের একটি কথা আনেন। বাগাভী তাঁকে বলেন জা'ফর সাদিক, আর কুরতুবী পুরো নাম দেন জা'ফর ইবন মুহাম্মাদ ইবন আলী ইবনুল হুসাইন। তিনি বলেছেন, রিযিকে লুতফ দুই দিক থেকে। এক, তিনি আপনার রিযিক রেখেছেন পবিত্র ও উত্তম জিনিসে। দুই, তিনি তা একবারে আপনার হাতে তুলে দেননি। কুরতুবীর বর্ণনায় কারণটাও আছে: যাতে আপনি তা উড়িয়ে না দেন। মাআরিফুল কুরআন মাযহারী আর কুরতুবীর বরাতে প্রথম দিকটা বলে এভাবে: প্রতিটি প্রাণীকে তার প্রয়োজনমতো দেওয়া। আর দ্বিতীয়টির কারণ দেয় বাস্তব: নইলে তা সামলে রাখা সম্ভব হতো না।"
          },
          {
            "en": "Al-Qurtubi then looks at the inequality itself. There is wisdom, he says, in favouring some people with wealth: that some should need others, as in 43:32, where some take others into their service, and this, he says, was lutf with the servants. He adds a second reason, that the rich are tested by the poor and the poor by the rich, quoting 25:20: and We made some of you a trial for others; will you be patient? On his reading, a gap in means is not outside the verse. It is one of the things the verse is speaking about.",
            "bn": "এরপর কুরতুবী তাকান বৈষম্যটার দিকেই। তিনি বলেন, কিছু মানুষকে সম্পদে এগিয়ে রাখার মধ্যে হিকমত আছে। একজনের যেন আরেকজনকে দরকার হয়, যেমন ৪৩:৩২ বলছে, যাতে তারা একে অন্যকে কাজে লাগাতে পারে। কুরতুবীর মতে, এটাও বান্দাদের প্রতি লুতফ। আরেকটি কারণও তিনি দেন: ধনীকে পরীক্ষা করা হয় গরিব দিয়ে, গরিবকে ধনী দিয়ে। এর জন্য আনেন ২৫:২০: আর আমি তোমাদের একজনকে আরেকজনের জন্য পরীক্ষা বানিয়েছি, তোমরা কি সবর করবে? তাঁর পাঠে সামর্থ্যের ফারাক আয়াতের বাইরের কিছু নয়। আয়াত যা নিয়ে কথা বলছে, এটা তারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Read Many Ways",
          "bn": "এক নামের নানা পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi gathers more glosses than anyone else here. Al-Qurazi said He is Latif with them at the presentation and the reckoning. Al-Husayn ibn al-Fadl said Latif with them in the Qur'an, in setting it out in detail and explaining it. Al-Junayd said Latif with His friends until they came to know Him, and had He been Latif with His enemies they would not have denied Him. Muhammad ibn Ali al-Kattani said the Latif is gentle with whichever servant takes refuge in Him: when he despairs of people and relies on Him and turns back, He accepts him and turns towards him.",
            "bn": "এখানে সবচেয়ে বেশি ব্যাখ্যা জড়ো করেছেন কুরতুবী। কুরাযী বলেছেন, হাজির করা আর হিসাব নেওয়ার সময় তিনি তাদের প্রতি লাতীফ। হুসাইন ইবনুল ফাদল বলেছেন, কুরআনে, তার বিস্তারিত বিবরণ আর ব্যাখ্যায় তিনি তাদের প্রতি লাতীফ। জুনাইদ বলেছেন, তিনি তাঁর ওলীদের প্রতি লাতীফ, শেষে তারা তাঁকে চিনেছে। শত্রুদের প্রতি লাতীফ হলে তারা তাঁকে অস্বীকার করত না। মুহাম্মাদ ইবন আলী কাত্তানী বলেছেন, লাতীফ তিনি, যিনি আশ্রয় নেওয়া বান্দার প্রতি কোমল। মানুষের কাছ থেকে নিরাশ হয়ে বান্দা যখন তাঁর উপর ভরসা করে ফিরে আসে, তখন তিনি তাকে কবুল করেন, তার দিকে মনোযোগ দেন।"
          },
          {
            "en": "Then comes a run of sayings he introduces only with it was said. The Latif is He who makes His servants' merits known and covers their faults; who accepts the little and gives the abundant; who mends the broken and eases the hard; who does not hasten against whoever disobeys Him nor disappoint whoever hopes in Him; who pardons whoever slips; who has mercy on whoever has no mercy on himself. He notes that he gave the views of Abu al-'Aliya and al-Junayd under Surat al-An'am, where the name occurs at 6:103, the subject of its own article.",
            "bn": "এরপর একের পর এক কিছু কথা আসে, যা তিনি শুধু 'বলা হয়েছে' বলে আনেন। লাতীফ তিনি, যিনি বান্দার গুণ প্রকাশ করেন আর দোষ ঢেকে রাখেন। অল্প কবুল করেন, অঢেল দেন। ভাঙাকে জোড়া দেন, কঠিনকে সহজ করেন। নাফরমানকে শাস্তি দিতে তাড়াহুড়া করেন না, আর যে আশা রাখে তাকে নিরাশ করেন না। যে পা পিছলে ফেলে তাকে মাফ করেন। যে নিজের উপর দয়া করে না, তার উপরও দয়া করেন। কুরতুবী জানান, আবুল আলিয়া আর জুনাইদের মত তিনি সূরা আনআমে আগেই এনেছেন। সেখানে নামটি এসেছে ৬:১০৩ আয়াতে, যা নিয়ে আলাদা প্রবন্ধ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ending on Strength and Might",
          "bn": "শেষে দুটি নাম"
        },
        "p": [
          {
            "en": "The verse ends wa huwa al-qawiyyu al-'aziz. At-Tabari explains al-Qawiyy as the One whom no possessor of strength can overcome, and whom no one can hold off when He wills to punish; al-'Aziz as mighty in His retribution when He takes it on those who disobey Him. The Muyassar reads them the same way: al-Qawiyy, to whom all strength belongs, and al-'Aziz in His retribution on the disobedient. Ibn Kathir gives one line: nothing can render Him incapable. As-Sa'di says all strength is His, no created being has any might or power except through Him, and all things are subject to Him.",
            "bn": "আয়াত শেষ হয় ওয়া হুয়াল কাওয়িয়্যুল আযীয দিয়ে। তাবারী আল-কাওয়ী-র ব্যাখ্যা দেন: শক্তিধর কেউ তাঁকে হারাতে পারে না, আর তিনি শাস্তি দিতে চাইলে কেউ তাঁকে ঠেকাতে পারে না। আল-আযীয, অর্থাৎ নাফরমানদের থেকে প্রতিশোধ নেওয়ার সময় তিনি পরাক্রমশালী। মুয়াসসারও একইভাবে পড়ে: আল-কাওয়ী, সব শক্তি যাঁর, আর আল-আযীয, নাফরমানদের থেকে প্রতিশোধ নেওয়ায়। ইবন কাসীর এক বাক্যে বলেন: কোনো কিছুই তাঁকে অক্ষম করতে পারে না। সা'দী বলেন, সব শক্তি তাঁর। তাঁর সাহায্য ছাড়া কোনো সৃষ্টির কোনো ক্ষমতা নেই, শক্তিও নেই। আর সব কিছু তাঁর কাছে নত।"
          },
          {
            "en": "None of these commentators says why these two names close a verse about gentleness, and this article will not supply a reason in their name. What the text itself shows is the order: a verse that opens with lutf and provision ends with strength and might, and at-Tabari and the Muyassar read that might with retribution in view. On hadith, al-Qurtubi quotes two sayings attributed to the Prophet ﷺ without naming any collection; neither could be confirmed here, so neither is reproduced, and no commentary fetched for this verse attaches a sourced hadith to it.",
            "bn": "এই দুটি নাম কেন কোমলতার এক আয়াতের শেষে এল, তাফসীরকারদের কেউ তা বলেননি। তাঁদের নামে কোনো কারণ বানিয়ে দেওয়াও এ প্রবন্ধের কাজ নয়। আয়াত নিজে যা দেখায়, তা হলো ক্রম। শুরু লুতফ আর রিযিক দিয়ে, শেষ শক্তি আর পরাক্রম দিয়ে। আর তাবারী ও মুয়াসসার সেই পরাক্রম পড়েছেন প্রতিশোধের কথা মাথায় রেখে। হাদীসের বেলায়, কুরতুবী নবী ﷺ-এর নামে দুটি কথা আনেন, কিন্তু কোনো গ্রন্থের নাম দেননি। এখানে কোনোটিই নিশ্চিত করা যায়নি, তাই কোনোটি উদ্ধৃত হলো না। এ আয়াতের জন্য দেখা কোনো তাফসীরে সূত্রসহ কোনো হাদীস এ আয়াতের সঙ্গে জোড়া নেই।"
          },
          {
            "en": "Lived with, the verse asks for two things at once. It asks for trust in what one is given and in what one is denied, since as-Sa'di and al-Qurtubi both count the measuring among the forms of lutf. And it asks for some fear, because the One being trusted is, in at-Tabari's words, mighty in retribution on those who disobey Him. The believers of 42:18 already hold both: they fear the Hour and know that it is true. The verse that follows them shows the same Lord feeding everyone while they wait.",
            "bn": "জীবনে নিলে আয়াতটি একসঙ্গে দুটি জিনিস চায়। প্রথমত ভরসা, যা দেওয়া হয়েছে তাতে, আর যা দেওয়া হয়নি তাতেও। কারণ সা'দী আর কুরতুবী দুজনেই মেপে দেওয়াকে লুতফেরই একটা রূপ ধরেছেন। দ্বিতীয়ত কিছুটা ভয়। যাঁর উপর ভরসা, তাবারীর ভাষায় তিনি নাফরমানদের থেকে প্রতিশোধ নেওয়ায় পরাক্রমশালী। ৪২:১৮ আয়াতের মুমিনদের মধ্যে দুটোই আছে। তারা কিয়ামতকে ভয় করে, আবার জানে তা সত্য। তাদের পরের আয়াতটি দেখায়, তারা যখন অপেক্ষায়, সেই একই রব তখন সবাইকে খাওয়াচ্ছেন।"
          }
        ]
      }
    ]
  },
  "42:25": {
    "sections": [
      {
        "h": {
          "en": "Repentance After an Accusation",
          "bn": "অভিযোগের পরে তওবা"
        },
        "p": [
          {
            "en": "Wa huwa-lladhi yaqbalu-t-tawbata 'an 'ibadihi: and it is He who accepts repentance from His servants. The verse follows a charge. In 42:23 Allah gives good tidings to those who believe and do righteous deeds, and the Prophet ﷺ is told to say he asks no reward for it except love among kin. In 42:24 comes the accusation: or do they say he has invented a lie against Allah? Al-Qurtubi relates from Ibn 'Abbas, without a chain, that some people had privately thought he only wanted to press them towards his relatives. Later they said: we bear witness that you are truthful, and we repent. Then this verse came down.",
            "bn": "ওয়া হুওয়াল্লাযী ইয়াকবালুত তাওবাতা আন ইবাদিহী: তিনিই তাঁর বান্দাদের তওবা কবুল করেন। আয়াতটি আসে একটি অভিযোগের পরে। ৪২:২৩ আয়াতে আল্লাহ সুসংবাদ দেন তাদের, যারা ঈমান এনেছে ও নেক আমল করেছে। সেখানেই নবী ﷺ-কে বলতে বলা হয়, এ বাণীর বদলে তিনি আত্মীয়তার ভালোবাসা ছাড়া আর কিছু চান না। ৪২:২৪ আয়াতে আসে অভিযোগ: তারা কি বলে, সে আল্লাহর নামে মিথ্যা বানিয়েছে? কুরতুবী সনদ ছাড়া ইবন আব্বাস থেকে একটি বর্ণনা আনেন। কিছু লোক মনে মনে ভেবেছিল, তিনি বুঝি তাদের শুধু নিজের আত্মীয়দের দিকে ঠেলে দিতে চান। পরে তারা বলল: আমরা সাক্ষ্য দিচ্ছি, আপনি সত্যবাদী, আর আমরা তওবা করছি। তখন এ আয়াত নাযিল হয়।"
          },
          {
            "en": "Al-Qurtubi does not let the report narrow the verse; he adds straight after it that the verse is general. Ma'arif al-Qur'an reads it in the same direction, as word to the deniers and opponents that there is still time to give up disbelief. On the other side stands 42:26: and He answers those who believe and do righteous deeds and increases them from His bounty. Ibn Kathir cites as-Suddi, He responds to them, and Ibn Jarir, He answers their prayers for themselves, their companions and their brothers. As-Sa'di reads it the other way round: the believers are the ones who respond to His call.",
            "bn": "বর্ণনাটি দিয়ে কুরতুবী আয়াতকে সংকীর্ণ করেন না। ঠিক পরেই তিনি বলে দেন, আয়াতটি ব্যাপক। মাআরিফুল কুরআনও একই দিকে পড়ে: অস্বীকারকারী ও বিরোধীদের জানিয়ে দেওয়া হচ্ছে, কুফর ছেড়ে আসার সময় এখনো আছে। আয়াতের অন্য পাশে আছে ৪২:২৬: যারা ঈমান এনেছে ও নেক আমল করেছে, তিনি তাদের ডাকে সাড়া দেন এবং নিজ অনুগ্রহে তাদের আরও দেন। ইবন কাসীর সুদ্দীর কথা আনেন, তিনি তাদের সাড়া দেন। আর ইবন জারীরের কথা আনেন, তিনি তাদের নিজেদের, সঙ্গীদের ও ভাইদের জন্য করা দোয়া কবুল করেন। সা'দী পড়েন উল্টো দিক থেকে: মুমিনরাই তাঁর ডাকে সাড়া দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Return, Not a Mood",
          "bn": "মেজাজ নয়, ফিরে আসা"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verb plainly: Allah accepts the muraja'a, the coming back, of a servant when he returns to the oneness of Allah and to obeying Him after his disbelief. The Muyassar keeps the same condition: He accepts repentance from His servants when they return to tawhid and obedience. Ma'arif al-Qur'an gives the word's root sense, to return and turn to, and its sense in religious usage, giving up and renouncing any sin. For these commentators tawba is first a change of direction. The servant had been heading one way, and now he comes back.",
            "bn": "তাবারী ক্রিয়াটির অর্থ সোজা কথায় বলেন: বান্দা যখন কুফরের পর আল্লাহর একত্ব আর তাঁর আনুগত্যে ফিরে আসে, আল্লাহ তার সেই ফিরে আসা, মুরাজাআ, কবুল করেন। মুয়াসসারও একই শর্ত রাখে: বান্দারা তাওহীদ ও আনুগত্যে ফিরলে তিনি তাদের তওবা কবুল করেন। মাআরিফুল কুরআন শব্দটির মূল অর্থ দেয় ফেরা, মুখ ফেরানো। আর শরীয়তের পরিভাষায় এর মানে যেকোনো গুনাহ ছেড়ে দেওয়া। এই তাফসীরকারদের কাছে তওবা আগে দিক বদলানো। বান্দা এক পথে চলছিল, এখন সে ফিরে আসছে।"
          },
          {
            "en": "Al-Baghawi collects two definitions. The first, introduced only with it is said, makes repentance the leaving of sins in intention and in deed, and the turning towards obedience in intention and in deed. The other he gives from Sahl ibn 'Abd Allah: repentance is moving from blameworthy states to praiseworthy ones. The first speaks of acts left behind and acts taken up; the second speaks of the inner condition that changes. Al-Baghawi does not set them against each other, and both sit easily beside at-Tabari's picture of a servant who comes back.",
            "bn": "বাগাভী দুটি সংজ্ঞা একসঙ্গে আনেন। প্রথমটি তিনি আনেন শুধু 'বলা হয়' বলে। সেখানে তওবা মানে নিয়তে ও কাজে গুনাহ ছেড়ে দেওয়া, আর নিয়তে ও কাজে আনুগত্যের দিকে এগিয়ে আসা। দ্বিতীয়টি সাহল ইবন আবদুল্লাহর: নিন্দনীয় অবস্থা থেকে প্রশংসনীয় অবস্থায় সরে আসাই তওবা। প্রথম সংজ্ঞার নজর কাজের দিকে, কী ছাড়া হলো আর কী ধরা হলো। দ্বিতীয়টির নজর ভেতরের অবস্থার দিকে, যা বদলে যায়। বাগাভী দুটিকে মুখোমুখি দাঁড় করান না। তাবারীর আঁকা ফিরে আসা বান্দার ছবির পাশে দুটিই সহজে জায়গা পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Verse Reaches",
          "bn": "আয়াতের নাগাল কত দূর"
        },
        "p": [
          {
            "en": "Who are 'ibadihi, His servants, here? Al-Baghawi and al-Qurtubi both cite Ibn 'Abbas: He means His friends, awliya'ahu, and the people who obey Him. Al-Qurtubi then gives his own judgement: the verse is general. He also notes that this very wording has already come in Bara'a, the surah also called at-Tawbah, and 9:104 carries it: do they not know that it is Allah who accepts repentance from His servants and takes the charities? The two statements stand side by side. Ibn 'Abbas names those the verse honours; al-Qurtubi says how far it reaches.",
            "bn": "এখানে ইবাদিহী, তাঁর বান্দারা, কারা? বাগাভী ও কুরতুবী দুজনেই ইবন আব্বাসের কথা আনেন: এর দ্বারা উদ্দেশ্য তাঁর বন্ধুরা, আওলিয়া, আর তাঁর আনুগত্যকারীরা। এরপর কুরতুবী নিজের মত দেন: আয়াতটি ব্যাপক। তিনি আরও বলেন, হুবহু এই শব্দগুলো আগে সূরা বারাআতে এসেছে, যার আরেক নাম সূরা আত-তাওবা। ৯:১০৪ আয়াতে সত্যিই তা আছে: তারা কি জানে না যে আল্লাহই তাঁর বান্দাদের তওবা কবুল করেন এবং সদকা গ্রহণ করেন? দুটি কথা পাশাপাশি থাকে। ইবন আব্বাস বলেন আয়াত কাদের সম্মান দেয়, কুরতুবী বলেন তার নাগাল কত দূর।"
          },
          {
            "en": "At-Tabari, with his chain, and Ibn Kathir after him report from Hammam ibn al-Harith that people came to 'Abd Allah ibn Mas'ud asking about a man who had taken from a woman what was unlawful and then married her. At-Tabari records only that Ibn Mas'ud recited this verse in reply. Ibn Kathir's wording adds that he said there was no harm in it before reciting. Either way, the Companion let the verse itself answer a question about a grave sin and what the man had done after it. The question concerned a real case, and the reply was this verse.",
            "bn": "তাবারী নিজের সনদে, আর তাঁর পরে ইবন কাসীর, হাম্মাম ইবন হারিস থেকে একটি ঘটনা বর্ণনা করেন। কিছু লোক আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর কাছে এসে জানতে চাইল এক লোকের কথা, যে এক নারীর সঙ্গে হারাম সম্পর্কে জড়িয়েছিল, তারপর তাকে বিয়ে করেছে। তাবারীর বর্ণনায় ইবন মাসউদ জবাবে শুধু এই আয়াত তিলাওয়াত করেন। ইবন কাসীরের বর্ণনায় তিলাওয়াতের আগে তিনি এটাও বলেন যে এতে দোষ নেই। যে বর্ণনাই ধরুন, সাহাবী একটি বড় গুনাহ আর তার পরের আচরণ নিয়ে প্রশ্নের জবাব আয়াতের হাতেই ছেড়ে দিলেন। প্রশ্নটা ছিল বাস্তব এক ঘটনা নিয়ে, আর জবাব ছিল এই আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Conditions in Two Commentaries",
          "bn": "দুই তাফসীরে তওবার শর্ত"
        },
        "p": [
          {
            "en": "As-Sa'di calls the verse a statement of the perfection of Allah's generosity, the breadth of His giving and the completeness of His kindness. He spells out the repentance meant: servants leave off their sins, regret them, and resolve not to return to them, intending by this the face of their Lord. Allah accepts it, he says, after those very sins had become a cause of ruin and of punishment in this world and in religion. On his reading the acceptance is no small matter. It turns back what the sins had already set in motion.",
            "bn": "সা'দী আয়াতটিকে বলেন আল্লাহর পূর্ণ দয়া, অঢেল দান আর নিখুঁত মেহেরবানির বিবরণ। কোন তওবার কথা হচ্ছে, তিনি খুলে বলেন। বান্দা গুনাহ ছেড়ে দেয়, তার জন্য অনুতপ্ত হয়, আর পাকা নিয়ত করে যে আর ফিরবে না। এ সবের পেছনে তার উদ্দেশ্য থাকে কেবল রবের সন্তুষ্টি। তিনি বলেন, আল্লাহ সে তওবা কবুল করেন এমন সময়, যখন ওই গুনাহগুলোই ধ্বংসের কারণ হয়ে দাঁড়িয়েছিল, দুনিয়ার শাস্তি আর দ্বীনের ক্ষতির কারণ। তাঁর পাঠে কবুল হওয়া তাই ছোট ব্যাপার নয়। গুনাহ যা চালু করে দিয়েছিল, কবুল তা উল্টে দেয়।"
          },
          {
            "en": "Ma'arif al-Qur'an names three conditions: give up the sin at once, regret the past, and resolve firmly not to repeat it. A neglected obligation must be resumed or made up. Where another person's property is owed, it goes back to him or his heirs, and when neither can be found, through the public treasury or as charity on his behalf. For wrongs such as abuse or backbiting, his forgiveness must be sought. The sin must be left for Allah's sake, not from weakness. Of one who renounces a single sin, Ahl as-Sunnah hold that it is forgiven while the others remain.",
            "bn": "মাআরিফুল কুরআন তিনটি শর্ত বলে: গুনাহ তখনই ছেড়ে দেওয়া, অতীতের জন্য অনুতাপ, আর আবার না করার দৃঢ় সংকল্প। কোনো ফরজ ছুটে গিয়ে থাকলে তা আবার শুরু করতে হবে বা কাযা করতে হবে। কারও সম্পদের হক থাকলে তা ফেরত দিতে হবে তাকে বা তার ওয়ারিসদের। তাদেরও না পেলে তা যাবে বাইতুল মালে, অথবা তার পক্ষ থেকে সদকা হবে। গালি বা গীবতের মতো অন্যায় হলে তার কাছে মাফ চেয়ে নিতে হবে। গুনাহ ছাড়তে হবে আল্লাহর জন্য, দুর্বলতার কারণে নয়। কেউ একটিমাত্র গুনাহ ছাড়লে আহলুস সুন্নাহর মতে সেটি মাফ হয়, বাকিগুলোর দায় থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Erased, Overlooked, Concealed",
          "bn": "মুছে দেওয়া, ঢেকে রাখা"
        },
        "p": [
          {
            "en": "Wa ya'fu 'ani-s-sayyi'at: and He pardons misdeeds. The commentators differ on which misdeeds are meant. At-Tabari says He pardons the servant by not punishing him for his evil deeds, namely the sins he repented of. Al-Baghawi also ties it to repentance: He erases them when they repent. Al-Qurtubi gives a narrower gloss, the pardon of shirk before Islam, which fits the report he gave about people who came round to belief. Ibn Kathir divides the two verbs by time: He accepts repentance for what lies ahead and pardons the misdeeds that are past.",
            "bn": "ওয়া ইয়া'ফূ আনিস সাইয়িআত: আর তিনি মন্দ কাজগুলো ক্ষমা করেন। কোন মন্দ কাজ, তা নিয়ে তাফসীরকারদের কথা এক নয়। তাবারী বলেন, বান্দা যেসব গুনাহ থেকে তওবা করেছে, সেগুলোর জন্য তাকে শাস্তি না দিয়ে তিনি মাফ করেন। বাগাভীও একে তওবার সঙ্গে বাঁধেন: তারা তওবা করলে তিনি সেগুলো মুছে দেন। কুরতুবীর ব্যাখ্যা আরও সরু: ইসলামের আগের শিরক মাফ করা। ঈমানে ফিরে আসা লোকদের যে বর্ণনা তিনি এনেছিলেন, তার সঙ্গে এটা মেলে। ইবন কাসীর দুই ক্রিয়াকে সময় দিয়ে ভাগ করেন: সামনের জন্য তিনি তওবা কবুল করেন, আর পেছনের গুনাহ মাফ করেন।"
          },
          {
            "en": "As-Sa'di goes furthest in describing what the pardon does. Allah erases the misdeeds, erases their trace in the faults they left, and erases the punishments they called for. The one who repents returns to Him honoured, as though he had never done an evil deed, and Allah loves him and grants him success in what brings him near. Ibn Kathir opens his comment in the same key: of His generosity and forbearance Allah pardons, overlooks, conceals and forgives. He cites 4:110: whoever does evil or wrongs himself and then asks Allah's forgiveness will find Allah Forgiving, Merciful.",
            "bn": "ক্ষমা আসলে কী করে, তার সবচেয়ে বিস্তারিত ছবি সা'দীর। আল্লাহ মন্দ কাজগুলো মুছে দেন, সেগুলো যে দোষের দাগ রেখে গিয়েছিল তা-ও মুছে দেন, আর সেগুলোর যে শাস্তি পাওনা ছিল তা-ও। তওবাকারী তাঁর কাছে ফিরে আসে সম্মানিত হয়ে, যেন কখনো কোনো মন্দ কাজ করেনি। আল্লাহ তাকে ভালোবাসেন, আর যা তাঁর নৈকট্য আনে তার তাওফীক দেন। ইবন কাসীরও শুরু করেন একই সুরে: নিজের দয়া ও সহনশীলতায় আল্লাহ ক্ষমা করেন, উপেক্ষা করেন, ঢেকে রাখেন, মাফ করে দেন। তিনি ৪:১১০ আয়াত আনেন: যে মন্দ কাজ করে বা নিজের উপর জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mount Found in the Desert",
          "bn": "মরুভূমিতে ফিরে পাওয়া বাহন"
        },
        "p": [
          {
            "en": "Muslim's Sahih (2747) has from Anas ibn Malik that the Prophet ﷺ said: Allah is more joyful at the repentance of His servant, when he repents to Him, than one of you who was on his mount in a waterless land. It broke loose from him, carrying his food and drink, and he despaired of it. He came to a tree and lay in its shade, despairing of his mount. While he was so, there it was, standing beside him. He took its halter and, from sheer joy, said: O Allah, You are my servant and I am Your Lord. He erred from sheer joy.",
            "bn": "ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (২৭৪৭) আনাস ইবন মালিক (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: বান্দা যখন তওবা করে আল্লাহর দিকে ফেরে, তার তওবায় আল্লাহ তোমাদের সেই লোকের চেয়েও বেশি খুশি হন, যে পানিহীন প্রান্তরে নিজের বাহনের পিঠে ছিল। বাহনটি তার কাছ থেকে ছুটে পালাল, আর তার পিঠে ছিল তার খাবার ও পানীয়। সে তার আশা ছেড়ে দিল। একটি গাছের কাছে এসে তার ছায়ায় শুয়ে পড়ল, বাহনের আশা তখন একেবারেই নেই। এমন অবস্থায় হঠাৎ দেখে, বাহনটি তার পাশে দাঁড়িয়ে আছে। সে তার লাগাম ধরল, আর খুশির আতিশয্যে বলে ফেলল: হে আল্লাহ, তুমি আমার বান্দা আর আমি তোমার রব। খুশির আতিশয্যে সে ভুল করে ফেলল।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi both quote this hadith under the verse, each with Muslim's own chain, so the link to the verse is theirs; Muslim's placing it in his Sahih is the collector's own grading. Ibn Kathir adds that a similar report from 'Abd Allah ibn Mas'ud is in the Sahih, and al-Baghawi gives that version through his own chain. Ibn Kathir also cites, through 'Abd ar-Razzaq from az-Zuhri on this verse, a shorter wording from Abu Hurayra about a lost animal found where its owner feared dying of thirst. He gives no grading for that route, so it stands here only as his citation.",
            "bn": "ইবন কাসীর ও বাগাভী দুজনেই এ আয়াতের আলোচনায় হাদীসটি আনেন, দুজনেই মুসলিমের নিজের সনদে। তাই আয়াতের সঙ্গে হাদীসটি জুড়েছেন তাঁরাই। আর সহীহ গ্রন্থে স্থান দেওয়াই হাদীসটির ব্যাপারে মুসলিমের নিজের মূল্যায়ন। ইবন কাসীর জানান, আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকেও এমন একটি বর্ণনা সহীহতে আছে। বাগাভী সেই বর্ণনা আনেন নিজের সনদে। ইবন কাসীর আরও একটি ছোট বর্ণনা আনেন আবদুর রাযযাকের সূত্রে, যুহরী থেকে, এ আয়াত প্রসঙ্গে, আবু হুরায়রা (রাঃ)-এর বর্ণনা। সেখানে আছে এমন জায়গায় হারানো পশু ফিরে পাওয়ার কথা, যেখানে মালিক পিপাসায় মরার ভয় করছিল। এই সূত্রের কোনো মান তিনি বলেননি, তাই এখানে তা শুধু তাঁর উদ্ধৃতি হিসেবেই থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "You Do, or They Do",
          "bn": "তোমরা করো, নাকি তারা করে"
        },
        "p": [
          {
            "en": "The last clause has two readings, and three commentators record them. At-Tabari says most readers of Madina and Basra read yaf'alun, with ya, meaning He knows what His servants do, while most readers of Kufa read taf'alun, with ta, as direct address. Al-Qurtubi names those with ta as Hamza, al-Kisa'i, Hafs and Khalaf, and adds that it was the reading of Ibn Mas'ud and his companions; the rest read with ya. Al-Baghawi names Hamza, al-Kisa'i and Hafs, and records that they said it addresses the idolaters.",
            "bn": "শেষ বাক্যাংশের দুটি কিরাআত আছে, আর তিনজন তাফসীরকার দুটিই উল্লেখ করেন। তাবারী বলেন, মদীনা ও বসরার অধিকাংশ কারী পড়েছেন ইয়াফআলূন, ইয়া দিয়ে। অর্থ দাঁড়ায়: তাঁর বান্দারা যা করে, তিনি তা জানেন। আর কূফার অধিকাংশ কারী পড়েছেন তাফআলূন, তা দিয়ে, সরাসরি সম্বোধন হিসেবে। কুরতুবী তা-ওয়ালা কারীদের নাম দেন: হামযা, কিসাঈ, হাফস ও খালাফ। তিনি যোগ করেন, এটি ছিল ইবন মাসউদ ও তাঁর শাগরেদদের কিরাআত। বাকিরা পড়েছেন ইয়া দিয়ে। বাগাভী নাম দেন হামযা, কিসাঈ ও হাফসের, আর জানান যে তাঁদের মতে এখানে মুশরিকদের সম্বোধন করা হয়েছে।"
          },
          {
            "en": "Their judgements of the two differ. At-Tabari calls them two well-known readings, close in meaning: whichever a reader follows, he is right. Still, ya pleases him more, since the speech before it ran as a report about Allah's servants. Al-Qurtubi gives the preference for ya to Abu 'Ubayd and Abu Hatim, because the clause stands between two reports, the acceptance of repentance in this verse and the answering of believers in 42:26; al-Baghawi gives the same reason. The ta reading, which is Hafs's and the text shown with this verse, turns the sentence to the listener.",
            "bn": "দুই কিরাআতের বিচারে তাঁদের মত আলাদা। তাবারী বলেন, দুটিই সুপরিচিত কিরাআত, অর্থও কাছাকাছি। যেটিই কেউ পড়ুক, ঠিক পড়ল। তবু ইয়া তাঁর বেশি পছন্দ, কারণ এর আগের কথা চলছিল আল্লাহর বান্দাদের সম্পর্কে খবর হিসেবে। কুরতুবী ইয়া-কে অগ্রাধিকার দেওয়ার কথা বলেন আবু উবাইদ ও আবু হাতিমের নামে। তাঁদের যুক্তি, বাক্যাংশটি দুটি খবরের মাঝখানে: এ আয়াতের তওবা কবুলের খবর, আর ৪২:২৬ আয়াতে মুমিনদের সাড়া পাওয়ার খবর। বাগাভীও একই কারণ দেন। তা-ওয়ালা কিরাআত হাফসের, আর এ আয়াতের সঙ্গে যে পাঠ দেখানো হয় সেটি এটাই। এতে কথাটা শ্রোতার দিকে ঘুরে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Known in Full, Accepted Anyway",
          "bn": "পুরোটা জেনেও কবুল"
        },
        "p": [
          {
            "en": "Why does knowledge close a verse about pardon? The commentators give three answers. Ibn Kathir: He knows all that you have done, made and said, and with this He still turns in acceptance to whoever turns to Him. On that reading the clause guards the pardon, since nothing can surface later that He did not already know. At-Tabari reads it as a warning: your Lord knows what you do of good and evil, nothing of it is hidden from Him, and He will requite you for all of it, so fear Allah and beware of what earns His punishment.",
            "bn": "ক্ষমার আয়াত কেন শেষ হয় জ্ঞানের কথায়? তাফসীরকারেরা তিনটি জবাব দেন। ইবন কাসীর বলেন: তোমরা যা করেছ, বানিয়েছ, বলেছ, সবই তিনি জানেন। এ সব জেনেও যে তাঁর দিকে ফেরে, তার তওবা তিনি কবুল করেন। এই পাঠে বাক্যাংশটি ক্ষমাকে পাহারা দেয়। পরে এমন কিছু বেরিয়ে আসতে পারে না, যা তিনি আগে জানতেন না। তাবারী একে পড়েন সতর্কবাণী হিসেবে: তোমরা ভালো-মন্দ যা করো, তোমাদের রব তা জানেন, কিছুই তাঁর কাছে গোপন নয়। সব কিছুর প্রতিদান তিনি দেবেন। তাই আল্লাহকে ভয় করো, আর যে কাজে তাঁর শাস্তি পাওনা হয়, তা থেকে সাবধান থাকো।"
          },
          {
            "en": "The Muyassar keeps the same pairing of knowing and requiting. As-Sa'di ties the clause to repentance itself. Repentance is among the great deeds, he says: complete when its sincerity and truthfulness are complete, deficient when they fall short, and corrupt when it aims at some worldly goal. Its seat is the heart, which only Allah knows, and so the verse closes with and He knows what you do. The three readings sit together. The pardon is given with full knowledge; the same knowledge warns; and only it can weigh whether a repentance was real.",
            "bn": "মুয়াসসারও জানা আর প্রতিদানকে একসঙ্গে রাখে। সা'দী বাক্যাংশটিকে বাঁধেন খোদ তওবার সঙ্গে। তাঁর কথায় তওবা বড় আমলগুলোর একটি। ইখলাস আর সততা পূর্ণ থাকলে তওবাও পূর্ণ। এ দুটিতে ঘাটতি থাকলে তওবাও অপূর্ণ। আর দুনিয়ার কোনো স্বার্থ হাসিলের উদ্দেশ্যে হলে সে তওবা নষ্ট। এর ঠিকানা অন্তর, যা আল্লাহ ছাড়া কেউ জানে না। তাই আয়াত শেষ হয়েছে 'তিনি জানেন তোমরা যা করো' দিয়ে। তিনটি পাঠ একসঙ্গে চলে। ক্ষমা আসে পূর্ণ জ্ঞান নিয়ে, সেই জ্ঞানই সতর্ক করে, আর তওবা খাঁটি ছিল কি না, তা মাপতে পারে কেবল সেই জ্ঞান।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon Across Ash-Shura",
          "bn": "সূরা শূরাজুড়ে ক্ষমার কথা"
        },
        "p": [
          {
            "en": "The surah returns to these themes more than once. 42:13 ends with Allah guiding to Himself whoever turns back to Him. 42:19 calls Him subtle with His servants, giving provision to whom He wills. Later, 42:36 to 42:38 describe those who forgive when they are angry and who respond to their Lord, and 42:40 sets the recompense of an evil as an evil like it, while whoever pardons and makes peace has his reward with Allah. The pardoning ascribed to Allah in this verse reappears there as a quality of His servants.",
            "bn": "সূরাটি এ প্রসঙ্গে একাধিকবার ফিরে আসে। ৪২:১৩ আয়াত শেষ হয় এ কথায় যে, যে তাঁর দিকে ফেরে, আল্লাহ তাকে নিজের পথ দেখান। ৪২:১৯ আয়াত বলে, তিনি তাঁর বান্দাদের প্রতি সূক্ষ্মদর্শী দয়ালু, যাকে চান রিযক দেন। পরে ৪২:৩৬ থেকে ৪২:৩৮ আয়াতে আছে তাদের কথা, যারা রেগে গেলেও মাফ করে, আর যারা রবের ডাকে সাড়া দেয়। ৪২:৪০ আয়াত বলে, মন্দের প্রতিফল তার সমান মন্দ। তবে যে মাফ করে ও মীমাংসা করে, তার প্রতিদান আল্লাহর কাছে। এ আয়াতে যে ক্ষমা আল্লাহর গুণ, সেখানে তা ফিরে আসে তাঁর বান্দাদের গুণ হয়ে।"
          },
          {
            "en": "In the commentators' hands the verse asks for something definite. At-Tabari and the Muyassar describe a return to tawhid and obedience; as-Sa'di and Ma'arif add regret, resolve and the restoring of other people's rights; Ibn Kathir and al-Baghawi set beside it a traveller finding his lost mount. As-Sa'di's remark that Allah accepts repentance after the sins had already become a cause of ruin means the door is not kept for the blameless. What remains for the reader is to turn back, settle what is owed to others, and do it knowing that He who receives it already knows everything.",
            "bn": "তাফসীরকারদের হাতে আয়াতটি নির্দিষ্ট কিছু চায়। তাবারী ও মুয়াসসার বলেন তাওহীদ ও আনুগত্যে ফিরে আসার কথা। সা'দী ও মাআরিফুল কুরআন যোগ করেন অনুতাপ, সংকল্প আর মানুষের হক ফিরিয়ে দেওয়া। ইবন কাসীর ও বাগাভী এর পাশে রাখেন হারানো বাহন ফিরে পাওয়া মুসাফিরের ছবি। সা'দী বলেছেন, গুনাহ যখন ধ্বংসের কারণ হয়ে গেছে, তখনই আল্লাহ তওবা কবুল করেন। এর মানে, এ দরজা নির্দোষদের জন্য আলাদা করে রাখা নয়। পাঠকের কাজ তাই ফিরে আসা, মানুষের পাওনা মিটিয়ে দেওয়া। আর এটা করা এই জেনে যে, যাঁর কাছে ফিরছেন, তিনি আগে থেকেই সব জানেন।"
          }
        ]
      }
    ]
  },
  "42:33": {
    "sections": [
      {
        "h": {
          "en": "Hulls Like Mountains, Then Stillness",
          "bn": "পাহাড়সম জাহাজ, তারপর নিশ্চলতা"
        },
        "p": [
          {
            "en": "Wa min ayatihi al-jawari fi al-bahri ka-l-a'lam: and of His signs are the ships running through the sea like mountains (42:32). The abridged English Ibn Kathir reads them as a mark of His power and dominion, since He has subjected the sea so that ships sail on it by His command, and he gives the likeness to mountains as the view of Mujahid, al-Hasan, as-Suddi and ad-Dahhak. The Muyassar puts it briefly: great ships like mountains, running in the sea, among the signs of His overwhelming power.",
            "bn": "ওয়া মিন আয়াতিহিল জাওয়ারি ফিল বাহরি কাল আ'লাম: তাঁর নিদর্শনের মধ্যে আছে সমুদ্রে চলমান পাহাড়ের মতো জাহাজ (৪২:৩২)। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এগুলোকে দেখে তাঁর ক্ষমতা ও আধিপত্যের চিহ্ন হিসেবে। তিনি সমুদ্রকে বশ করে দিয়েছেন, তাই তাঁর হুকুমে জাহাজ তার উপর দিয়ে চলে। পাহাড়ের সঙ্গে তুলনাটিকে তিনি মুজাহিদ, হাসান, সুদ্দী ও দাহহাকের মত বলে উল্লেখ করেন। মুয়াসসার অল্প কথায় বলে: পাহাড়ের মতো বিশাল জাহাজ সমুদ্রে চলে, আর এটি তাঁর প্রবল ক্ষমতার নিদর্শন।"
          },
          {
            "en": "Our verse turns that sign over. Having shown the ships moving, it asks the reader to picture what would follow if He who moves them chose otherwise. The next verse, 42:34, adds a harsher possibility, that He might destroy them for what their people earned, and closes on His pardoning much. This article stays with 42:33: the wind held back, the ships at rest on the water, and the qualities the verse names in those for whom all this is a sign. The wrecking and the pardon are context here, not the subject.",
            "bn": "আমাদের আয়াতটি সেই নিদর্শনকে উল্টো দিক থেকে দেখায়। জাহাজগুলোকে চলতে দেখানোর পর পাঠককে ভাবতে বলে, যিনি এগুলো চালাচ্ছেন তিনি অন্য রকম চাইলে কী হত। পরের আয়াত ৪২:৩৪ আরও কঠিন এক সম্ভাবনার কথা বলে: মানুষের কামাইয়ের কারণে তিনি এগুলো ধ্বংসও করে দিতে পারেন। তারপর শেষ হয় এই কথায় যে তিনি অনেক কিছুই মাফ করে দেন। এ লেখা থাকবে ৪২:৩৩ আয়াতের সঙ্গে। থেমে যাওয়া বাতাস, পানির উপর স্থির জাহাজ, আর যাদের জন্য এসব নিদর্শন, তাদের গুণ। ধ্বংস ও ক্ষমার কথা এখানে প্রেক্ষাপট, মূল বিষয় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "If He Wills, the Wind Rests",
          "bn": "তিনি চাইলে বাতাস থামে"
        },
        "p": [
          {
            "en": "In yasha' yuskini r-riha: if He wills, He stills the wind. At-Tabari spells out whose will this is. If Allah, who has set these ships running in the sea, wills that they not run there, He stills the wind by which they run, and they hold fast in a single place, standing on the surface of the water, neither moving forward nor falling back. The power that moves them and the power that could halt them belong to the same Lord. He adds that the people of interpretation said the like.",
            "bn": "ইন ইয়াশা' ইউসকিনির রীহা: তিনি চাইলে বাতাস থামিয়ে দেন। ইচ্ছাটা কার, তাবারী তা খুলে বলেন। যে আল্লাহ এই জাহাজগুলোকে সমুদ্রে চালিয়েছেন, তিনি যদি চান এগুলো আর না চলুক, তবে যে বাতাসে এগুলো চলে সেটাই থামিয়ে দেবেন। তখন জাহাজ এক জায়গায় আটকে থাকবে, পানির উপর দাঁড়িয়ে থাকবে, না সামনে এগোবে, না পেছনে সরবে। যে শক্তি চালায় আর যে শক্তি থামাতে পারে, দুটোই একই রবের। তাবারী যোগ করেন, তাফসীরের আলেমরাও এ রকমই বলেছেন।"
          },
          {
            "en": "He then gives the early voices. From Qatada: the ships of this sea run by the wind, and when the wind is withheld from them they become still. From as-Suddi, on the words they would remain motionless: they do not run. Al-Qurtubi records a reading: the people of Medina read the plural, ar-riyah, the winds, where the text above has the singular. Whichever is recited, the verse names the very thing on which the ships depend, and places it under His will rather than theirs.",
            "bn": "এরপর তিনি পূর্বসূরিদের কথা আনেন। কাতাদা বলেন, এই সমুদ্রের জাহাজ বাতাসে চলে, বাতাস আটকে রাখা হলে থেমে যায়। সুদ্দী 'গতিহীন হয়ে থাকবে' কথাটির ব্যাখ্যায় বলেন: চলবে না। কুরতুবী একটি কিরাআত উল্লেখ করেন। মদীনার কারীরা পড়েছেন বহুবচনে, আর-রিয়াহ, অর্থাৎ বাতাসসমূহ। উপরের পাঠে আছে একবচন। যেভাবেই পড়া হোক, জাহাজ যে জিনিসের উপর নির্ভর করে আয়াতটি ঠিক সেটার নাম নেয়, আর সেটাকে রাখে নাবিকদের নয়, তাঁর ইচ্ছার অধীনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Still as the Noon Sun",
          "bn": "দুপুরের সূর্যের মতো স্থির"
        },
        "p": [
          {
            "en": "Fa-yazlalna rawakida 'ala zahrihi: and they would remain motionless on its back. Al-Qurtubi glosses it as the ships staying at rest on the back of the sea, not running, and then opens the root r-k-d. Rakada al-ma' means the water grew still, and the same is said of the wind, of a ship, and of the sun when noon stands at its height. Whatever is fixed in its place is rakid. A balance rakada when its pans level, and a people rakadu when they grow quiet.",
            "bn": "ফায়াযলালনা রাওয়াকিদা 'আলা যাহরিহী: তখন সেগুলো তার পিঠের উপর গতিহীন হয়ে থাকবে। কুরতুবীর ব্যাখ্যায়, জাহাজ সমুদ্রের পিঠে থেমে থাকবে, চলবে না। তারপর তিনি র-ক-দ ধাতুটি খুলে দেখান। রাকাদাল মা' মানে পানি স্থির হল। বাতাস, জাহাজ, আর ভরদুপুরে মাথার উপর দাঁড়ানো সূর্যের বেলায়ও একই কথা বলা হয়। যা কিছু নিজের জায়গায় অনড়, তা-ই রাকিদ। দাঁড়িপাল্লার দুই পাল্লা সমান হলে বলা হয় রাকাদা, আর কোনো দল শান্ত হয়ে এলে বলা হয় রাকাদূ।"
          },
          {
            "en": "The other glosses are brief. Ibn 'Abbas, in at-Tabari's chain through 'Ali ibn Abi Talha, says rawakid means standing. Al-Baghawi gives thawabit, fixed in place. Ibn Kathir describes them as neither coming nor going, halted on its back, which he explains as the face of the water. Al-Qurtubi also notes that Qatada read fa-yazlilna, with a different vowel on the lam, as a dialect form, while the familiar reading has fatha.",
            "bn": "অন্যদের ব্যাখ্যা সংক্ষিপ্ত। তাবারীর সনদে আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) বলেন, রাওয়াকিদ মানে দাঁড়িয়ে থাকা। বাগাভী বলেন সাওয়াবিত, অর্থাৎ অনড়। ইবন কাসীরের বর্ণনায় জাহাজগুলো আসেও না, যায়ও না, তার পিঠে থেমে থাকে, আর পিঠ মানে পানির উপরিভাগ। কুরতুবী আরও জানান, কাতাদা পড়েছেন ফায়াযলিলনা, লামে ভিন্ন হরকত দিয়ে, যা এক আঞ্চলিক রূপ। আর প্রচলিত পাঠ যবর দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wind Sent in Measure",
          "bn": "মেপে পাঠানো বাতাস"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the Arabic, moves the sign from the stillness that might come to the wind that does come. In His subjecting the sea, he writes, and in His making the air run in the measure they need for their voyage, there are indications of His favours to His creation. The verse speaks of a wind withheld, but the sign it points to is the wind given, day after day, in just the amount the ships require.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে নিদর্শনটিকে সরিয়ে আনেন যে নিশ্চলতা আসতে পারত তা থেকে, যে বাতাস সত্যিই আসে তার দিকে। তিনি লেখেন, সমুদ্রকে বশ করে দেওয়া এবং যাত্রার জন্য যতটুকু দরকার ঠিক ততটুকু বাতাস বইয়ে দেওয়ার মধ্যে সৃষ্টির প্রতি তাঁর নিয়ামতের প্রমাণ আছে। আয়াতে কথা হচ্ছে আটকে রাখা বাতাসের, কিন্তু যেদিকে ইশারা, তা হল দিনের পর দিন জাহাজের প্রয়োজন মতো পাঠানো বাতাস।"
          },
          {
            "en": "The abridged English, commenting on the next verse, sets the possibilities side by side. If He willed, He could still the wind and the ships would stop; or He could make it fierce and they would be lost and destroyed. But by His grace and mercy He sends the wind according to their needs, just as He sends rain that suffices: too much and it would destroy their houses, too little and their crops and fruits would not grow. Between dead calm and storm lies the measured wind.",
            "bn": "সংক্ষিপ্ত ইংরেজি সংস্করণ পরের আয়াতের আলোচনায় সম্ভাবনাগুলো পাশাপাশি রাখে। তিনি চাইলে বাতাস থামিয়ে দিতে পারেন, তখন জাহাজ থেমে যাবে। আবার চাইলে বাতাসকে প্রচণ্ড করে দিতে পারেন, তখন জাহাজ পথ হারিয়ে ধ্বংস হবে। কিন্তু অনুগ্রহ ও রহমতের কারণে তিনি প্রয়োজন অনুযায়ী বাতাস পাঠান, ঠিক যেমন বৃষ্টি পাঠান যতটুকু যথেষ্ট। বেশি হলে ঘরবাড়ি ধসে যেত, কম হলে ফসল আর ফল জন্মাত না। পুরো থেমে থাকা আর ঝড়ের মাঝখানে আছে মেপে পাঠানো বাতাস।"
          },
          {
            "en": "The surah itself has used this language a few verses earlier. In 42:27 Allah sends provision down in the measure He wills, and in 42:28 He sends rain after people had despaired. As-Sa'di frames our verse in terms of means: the wind is the cause Allah made for the ships' going, and the verse draws attention to these causes. The cause is real, and it is His. The sailor trims his sail, but he does not own the wind that fills it.",
            "bn": "সূরাটি কয়েক আয়াত আগেই এ ভাষা ব্যবহার করেছে। ৪২:২৭ আয়াতে আল্লাহ রিযিক নাজিল করেন নিজের ইচ্ছামতো পরিমাপে। ৪২:২৮ আয়াতে মানুষ নিরাশ হয়ে পড়ার পর তিনি বৃষ্টি পাঠান। সা'দী আমাদের আয়াতকে দেখেন উপায়-উপকরণের দিক থেকে। বাতাসকে আল্লাহ জাহাজ চলার উপকরণ বানিয়েছেন, আর আয়াতটি সেই উপকরণের দিকে মনোযোগ টানে। উপকরণটা সত্যি, তবে তা তাঁরই। নাবিক পাল ঠিক করে, কিন্তু যে বাতাস পালে লাগে তার মালিক সে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs, and Their Readers",
          "bn": "নিদর্শন আর তার পাঠক"
        },
        "p": [
          {
            "en": "Inna fi dhalika la-ayatin: indeed in that are signs, in the plural. At-Tabari names what the signs contain: in the running of these ships through the sea by Allah's power there is admonition, a lesson, and clear proof of His power over whatever He wills. Al-Qurtubi glosses ayat as indications and marks. The Muyassar widens the frame to both states: in the running of the ships and in their stopping, by Allah's power, are admonitions and clear proofs. Motion and stillness each say something.",
            "bn": "ইন্না ফী যালিকা লাআয়াতিন: নিশ্চয়ই এতে আছে নিদর্শনসমূহ, বহুবচনে। নিদর্শনগুলোর ভেতরে কী আছে, তাবারী তা বলে দেন। আল্লাহর কুদরতে এই জাহাজগুলোর সমুদ্রে চলার মধ্যে আছে উপদেশ, শিক্ষা, আর যা চান তার উপর তাঁর ক্ষমতার স্পষ্ট প্রমাণ। কুরতুবী আয়াতের অর্থ করেন প্রমাণ ও চিহ্ন। মুয়াসসার দুই অবস্থাকেই এর ভেতরে আনে: আল্লাহর কুদরতে জাহাজের চলা আর থেমে থাকা, দুটোতেই আছে উপদেশ ও স্পষ্ট প্রমাণ। চলাও কথা বলে, থামাও কথা বলে।"
          },
          {
            "en": "Then comes the qualifier: li-kulli sabbarin shakur, for everyone deeply patient and deeply grateful. The ships are in front of every traveller, yet the verse names a particular reader. As-Sa'di closes his comment on the pair by saying that this is the person who benefits from the signs of Allah. Patience and gratitude work less like rewards for reading the sign than like the eyes that read it.",
            "bn": "তারপর আসে শর্তটি: লিকুল্লি সাব্বারিন শাকূর, প্রত্যেক অতি ধৈর্যশীল ও অতি কৃতজ্ঞের জন্য। জাহাজ তো প্রত্যেক যাত্রীর চোখের সামনে। তবু আয়াত নির্দিষ্ট পাঠকের নাম নেয়। এই জোড়া গুণের ব্যাখ্যা শেষে সা'দী বলেন, এ-ই সেই মানুষ, যে আল্লাহর নিদর্শন থেকে উপকৃত হয়। সবর আর শোকর তাই নিদর্শন পড়ার পুরস্কার যতটা, তার চেয়ে বেশি সেই চোখ, যা দিয়ে নিদর্শন পড়া যায়।"
          },
          {
            "en": "The same closing sentence appears in the Qur'an at 14:5, 31:31, 34:19 and here. At 14:5 it follows the command to Musa (AS) to remind his people of the Days of Allah; at 34:19 it comes within the account of Saba. At 31:31 it closes a verse that is also about ships: do you not see that the ships run through the sea by the favour of Allah, to show you of His signs? Twice, then, the sea is where this pairing of patience and gratitude is taught.",
            "bn": "কুরআনে হুবহু এই সমাপ্তিবাক্যটি এসেছে ১৪:৫, ৩১:৩১, ৩৪:১৯ এবং এখানে। ১৪:৫ আয়াতে বাক্যটি আসে মূসা (আঃ)-কে দেওয়া আদেশের পর, যেখানে তাঁকে বলা হয় নিজের কওমকে আল্লাহর দিনগুলোর কথা স্মরণ করিয়ে দিতে। ৩৪:১৯ আয়াতে বাক্যটি এসেছে সাবা জাতির বিবরণের ভেতরে। আর ৩১:৩১ আয়াতের বিষয়ও জাহাজ: তুমি কি দেখ না, আল্লাহর অনুগ্রহে জাহাজ সমুদ্রে চলে, যাতে তিনি তোমাদের তাঁর কিছু নিদর্শন দেখান? সবর আর শোকরের এই জুটির শিক্ষা তাহলে দুইবার এসেছে সমুদ্রের পটভূমিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Over What, Exactly?",
          "bn": "সবর আসলে কীসের উপর?"
        },
        "p": [
          {
            "en": "The commentators agree that the pair matters but read patience in two ways. For Ibn Kathir in the Arabic, sabbar means patient in hardships and shakur means grateful in ease, and the abridged English keeps that division. Al-Baghawi says the same: patience in hardship, gratitude in ease. Al-Qurtubi puts it as patient over affliction, grateful for blessings. On this reading the pair matches two seasons of life, the way the sea has its calm days and its hard ones.",
            "bn": "জোড়াটি যে গুরুত্বপূর্ণ, তাফসীরকারেরা তাতে একমত। কিন্তু সবরকে তাঁরা দুইভাবে পড়েন। ইবন কাসীরের আরবি তাফসীরে সাব্বার মানে কষ্টের সময় ধৈর্যশীল, শাকূর মানে সচ্ছলতার সময় কৃতজ্ঞ। সংক্ষিপ্ত ইংরেজি সংস্করণও এই ভাগটা রাখে। বাগাভীর কথাও একই: কষ্টে সবর, স্বাচ্ছন্দ্যে শোকর। কুরতুবী বলেন, বিপদে ধৈর্যশীল, নিয়ামতে কৃতজ্ঞ। এই পাঠে জোড়াটি জীবনের দুই মৌসুমের সঙ্গে মেলে, যেমন সমুদ্রেরও শান্ত দিন আছে, কঠিন দিনও আছে।"
          },
          {
            "en": "At-Tabari reads it differently. The sign is for everyone who has patience in obeying Allah, and is grateful for His favours and the kindnesses He has done him. The Muyassar follows him closely: patient in obedience to Allah, grateful for His favours and bounties. Here patience is not chiefly endurance of what befalls a person but steadfastness in what he is commanded to do. Both readings are in the commentaries consulted here, and neither consulted text argues against the other reading; the difference lies in where patience is placed.",
            "bn": "তাবারী পড়েন অন্যভাবে। তাঁর মতে নিদর্শনটি তার জন্য, যে আল্লাহর আনুগত্যে ধৈর্য রাখে, আর তাঁর নিয়ামত ও অনুগ্রহের জন্য কৃতজ্ঞ। মুয়াসসার তাঁকে প্রায় হুবহু অনুসরণ করে: আল্লাহর আনুগত্যে ধৈর্যশীল, তাঁর নিয়ামত ও দানের জন্য কৃতজ্ঞ। এখানে সবর মূলত যা ঘটে তা সয়ে নেওয়া নয়, বরং যে হুকুম এসেছে তার উপর অটল থাকা। দুটো পাঠই সংগৃহীত তাফসীরে আছে। কোনো লেখাই অন্য পাঠের বিরুদ্ধে যুক্তি দেয় না। পার্থক্যটা শুধু সবরকে কোথায় রাখা হচ্ছে, তা নিয়ে।"
          },
          {
            "en": "As-Sa'di gathers both. Sabbar, for him, is someone of much patience over what the self dislikes and finds hard, who compels himself to bear it: the hardship of an act of obedience, holding back an urge towards sin, and restraining himself from resentment when calamities strike. Shakur is grateful in ease and when blessings come: he acknowledges his Lord's favour, humbles himself before Him, and spends the blessing in what pleases Him. Gratitude here is not only a feeling but a use of the gift.",
            "bn": "সা'দী দুটোকেই একসঙ্গে আনেন। তাঁর কাছে সাব্বার সেই মানুষ, যে নফস যা অপছন্দ করে আর যা তার কাছে কঠিন, তার উপর অনেক বেশি সবর করে, নিজেকে জোর করে তা বহন করায়। আনুগত্যের কষ্ট, গুনাহের দিকে টানা ডাককে ঠেকানো, আর বিপদের সময় নিজেকে অসন্তোষ থেকে সামলে রাখা, এই সবই তার সবর। আর শাকূর সচ্ছলতায় ও নিয়ামতের সময় কৃতজ্ঞ। সে রবের অনুগ্রহ স্বীকার করে, তাঁর সামনে বিনীত হয়, আর নিয়ামতটা খরচ করে তাঁর সন্তুষ্টির পথে। শোকর এখানে শুধু অনুভূতি নয়, দানের সঠিক ব্যবহার।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Patient Once, but Much",
          "bn": "একবারের সবর নয়, বারবারের"
        },
        "p": [
          {
            "en": "The verse does not say sabir and shakir, patient and grateful, but sabbar and shakur, intensive forms. Of the commentaries consulted for this verse, only as-Sa'di makes the form visible in his gloss, defining sabbar as kathir as-sabr, abundant in patience. At-Tabari's phrasing, dhu sabr, someone possessed of patience, does not dwell on it, and the others gloss the meaning without remarking on the form. Nothing more on why the strong forms were chosen is in the texts consulted here, so we leave it there.",
            "bn": "আয়াতে সাবির ও শাকির বলা হয়নি, বলা হয়েছে সাব্বার ও শাকূর। শব্দ দুটির গঠনেই আধিক্যের ভাব আছে। এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর মধ্যে কেবল সা'দীর ব্যাখ্যায় গঠনটা চোখে পড়ে। তিনি সাব্বারের অর্থ করেন কাসীরুস সবর, অর্থাৎ যার সবর অনেক। তাবারীর ভাষা যু সবর, মানে ধৈর্যের অধিকারী, তিনি এ নিয়ে থামেন না। অন্যরা অর্থ ব্যাখ্যা করেন, গঠন নিয়ে কিছু বলেন না। জোরালো গঠন কেন বেছে নেওয়া হল, সংগৃহীত লেখায় এর বেশি কিছু নেই, তাই আমরাও এখানেই থামছি।"
          },
          {
            "en": "Why the two belong together, al-Qurtubi answers through two sayings he quotes. Qutrub said: what an excellent servant is the sabbar shakur, who gives thanks when he is given and is patient when he is tested. And 'Awn ibn 'Abd Allah said: how many a person is blessed and not grateful, and how many a person is tried and not patient. Each quality alone is common enough. The verse is looking for the person in whom both are found.",
            "bn": "দুটো গুণ কেন একসঙ্গে, কুরতুবী তার জবাব দেন দুটি উক্তি উদ্ধৃত করে। কুতরুব বলেছেন: কতই না উত্তম সেই বান্দা, যে সাব্বার ও শাকূর। তাকে দেওয়া হলে সে শোকর করে, আর পরীক্ষায় ফেলা হলে সবর করে। আর আওন ইবন আবদিল্লাহ বলেছেন: কত মানুষ নিয়ামত পেয়েও কৃতজ্ঞ নয়, আর কত মানুষ পরীক্ষায় পড়েও ধৈর্যশীল নয়। আলাদা করে প্রতিটি গুণ যথেষ্ট দেখা যায়। আয়াত খুঁজছে সেই মানুষকে, যার মধ্যে দুটোই আছে।"
          },
          {
            "en": "Al-Baghawi says the phrase means every believer, because the believer's quality is patience in hardship and gratitude in ease. That is his own sentence, not a narration. None of the commentaries consulted for this verse attaches a hadith to it, and none is quoted here. The verse is left to make its point with its own picture: the same believer meets the moving ship and the becalmed one, and is meant to recognise his Lord in both.",
            "bn": "বাগাভী বলেন, এ কথার মানে প্রত্যেক মুমিন, কারণ মুমিনের বৈশিষ্ট্যই হল কষ্টে সবর আর স্বাচ্ছন্দ্যে শোকর। এটি তাঁর নিজের বাক্য, কোনো বর্ণনা নয়। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর আয়াতটির সঙ্গে কোনো হাদিস যুক্ত করেনি, তাই এখানেও কোনো হাদিস উদ্ধৃত করা হচ্ছে না। আয়াত নিজের ছবি দিয়েই নিজের কথা বলে। একই মুমিন চলন্ত জাহাজও দেখে, থেমে থাকা জাহাজও দেখে, আর দুটোতেই তার রবকে চিনে নেওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sails Hang Slack",
          "bn": "পাল যখন ঝুলে পড়ে"
        },
        "p": [
          {
            "en": "Notice what the verse pictures. Not a storm or a wreck, which come in the next verse, but simple stillness: the means withdrawn, nothing broken, the great hull going nowhere. Many trials look like this. Work that stops moving, a recovery that stalls, a door that neither opens nor closes. The verse asks the reader to remember who holds it, to bear the stillness without resentment, and, when the sail fills again, to thank Him who filled it.",
            "bn": "আয়াতটি কী ছবি আঁকে, খেয়াল করুন। ঝড় বা জাহাজডুবি নয়, ওসব আসে পরের আয়াতে। এখানে শুধু নিশ্চলতা: উপকরণ সরিয়ে নেওয়া হয়েছে, কিছুই ভাঙেনি, অথচ বিশাল জাহাজ কোথাও যাচ্ছে না। অনেক পরীক্ষা দেখতে ঠিক এমন। কাজ থেমে যায়, সুস্থ হওয়া আটকে থাকে, কোনো দরজা না খোলে, না বন্ধ হয়। আয়াত বলে, মনে রাখুন বাতাস কার হাতে। নিশ্চলতাকে অভিযোগ ছাড়া বহন করুন। আর পাল আবার ভরে উঠলে, যিনি তা ভরিয়ে দিলেন, তাঁর শোকর করুন।"
          },
          {
            "en": "A boundary is needed here. The next verse links wrecking to what people earned, and 42:30 says that whatever strikes you is for what your hands have earned. Ma'arif al-Qur'an, on 42:30, cites al-Baydawi and others: that verse concerns those liable to sin, while the hardships of prophets, of children before puberty and of the insane have other reasons, such as increased reward, and the wisdom behind them is beyond a person's reach. Even this general rule names no individual.",
            "bn": "এখানে একটা সীমারেখা টানা দরকার। পরের আয়াত জাহাজডুবিকে মানুষের কামাইয়ের সঙ্গে জোড়ে, আর ৪২:৩০ বলে, তোমাদের উপর যে বিপদ আসে তা তোমাদের হাতের কামাইয়ের ফল। মাআরিফুল কুরআন ৪২:৩০ আয়াতের আলোচনায় বায়যাবী ও অন্যদের উদ্ধৃত করে বলে: আয়াতটি তাদের বেলায়, যাদের গুনাহ হওয়ার সম্ভাবনা আছে। নবীগণ, বালেগ হয়নি এমন শিশু, আর পাগলের কষ্টের কারণ ভিন্ন, যেমন সওয়াব বৃদ্ধি। এর পেছনের হিকমত মানুষের নাগালের বাইরে। এই সাধারণ নিয়মও কারও নাম নেয় না।"
          },
          {
            "en": "So the verse speaks only of what it names, a sign in ships, wind and sea, and licenses nothing against any living person or community. It gives nobody the right to look at a stranded vessel, a drowned crew or a neighbour whose life has stalled and name the sin behind it, nor to call a people punished. Its demand runs the other way, inward: be the reader for whom the sign is a sign, grateful while the wind blows and patient when it is held.",
            "bn": "তাই আয়াতটি বর্ণনা করে যা পাঠে আছে: জাহাজ, বাতাস আর সমুদ্রের মধ্যে নিদর্শন। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আটকে পড়া জাহাজ, ডুবে যাওয়া নাবিক, কিংবা যে প্রতিবেশীর জীবন থমকে গেছে, তাদের দিকে তাকিয়ে পেছনের গুনাহের নাম বলার অধিকার এ আয়াত কাউকে দেয় না। কোনো জাতিকে শাস্তিপ্রাপ্ত বলে দাগানোরও না। আয়াতের দাবি উল্টো দিকে, নিজের ভেতরে: সেই পাঠক হোন, যার জন্য নিদর্শনটা সত্যিই নিদর্শন। বাতাস বইলে কৃতজ্ঞ, আটকে থাকলে ধৈর্যশীল।"
          }
        ]
      }
    ]
  },
  "42:36-38": {
    "sections": [
      {
        "h": {
          "en": "Two Currencies",
          "bn": "দুই মুদ্রা"
        },
        "p": [
          {
            "en": "42:36 sets a comparison that the rest of the passage unpacks: whatever you have been given is the mata' of the life of this world, its passing enjoyment, while what is with Allah is better and more lasting — khayr wa abqa — for those who believe and rely upon their Lord. The Quran uses the same pair of words in 87:17 as well. Mata' is not condemned; it is measured. The verse states its size honestly, then names something bigger, and asks the heart to file each in its place.",
            "bn": "৪২:৩৬ একটা তুলনা সামনে রাখে, পরের আয়াতগুলো যা খুলে বলে। তোমাদের যা কিছু দেওয়া হয়েছে, তা দুনিয়ার জীবনের মাতা', অর্থাৎ ক্ষণিকের ভোগ। আর আল্লাহর কাছে যা আছে, তা উত্তম ও অধিক স্থায়ী, খাইরুন ওয়া আবকা, তাদের জন্য যারা ঈমান আনে এবং নিজেদের রবের উপর ভরসা করে। কুরআন ৮৭:১৭ আয়াতেও এই শব্দজোড়া ব্যবহার করেছে। মাতা'-কে এখানে নিন্দা করা হয়নি, মেপে দেখানো হয়েছে। আয়াতটি সততার সঙ্গে তার আসল আকার বলে দেয়, তারপর আরও বড় কিছুর কথা বলে, আর অন্তরকে বলে প্রত্যেকটাকে নিজ নিজ জায়গায় রাখতে।"
          },
          {
            "en": "The commentators keep the two clauses attached to their condition: better and more lasting for those who believe and rely upon their Lord. Tawakkul is named at the head of the passage because everything that follows depends on it. What is with Allah is invisible now; only trust makes an unseen reward weigh more than a visible gain. The traits about to be listed are what that trust looks like once it starts spending itself in conduct.",
            "bn": "উত্তম ও অধিক স্থায়ী, এই কথা দুটিকে মুফাসসিরগণ তাদের শর্ত থেকে আলাদা করেন না: এগুলো তাদের জন্য, যারা ঈমান আনে ও নিজেদের রবের উপর ভরসা করে। অংশটির শুরুতেই তাওয়াক্কুলের কথা এসেছে, কারণ পরের সবকিছু এর উপরই দাঁড়িয়ে। আল্লাহর কাছে যা আছে, তা এখন চোখে দেখা যায় না। কেবল ভরসাই পারে না-দেখা প্রতিদানকে চোখের সামনের লাভের চেয়ে ভারী করে তুলতে। সামনে যে গুণগুলোর তালিকা আসছে, সেগুলো আসলে সেই ভরসারই চেহারা, যখন তা কাজে-কর্মে খরচ হতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgivers When Angry",
          "bn": "রাগের সময় ক্ষমাশীল"
        },
        "p": [
          {
            "en": "42:37 continues the portrait: those who avoid the major sins and indecencies, and when they are angry, they forgive. The Arabic is a nominal construction — hum yaghfirun, they are forgivers — describing a settled trait rather than a lucky moment. Anger itself is not denied or condemned; the verse assumes it will come and legislates its exit. Between the provocation and the response, these people have installed forgiveness as the default.",
            "bn": "৪২:৩৭ ছবিটা আরও এগিয়ে নেয়: যারা কবীরা গুনাহ ও অশ্লীল কাজ থেকে দূরে থাকে, আর রেগে গেলে মাফ করে দেয়। আরবিতে বাক্যটির গঠন নামবাচক: হুম ইয়াগফিরূন, তারাই ক্ষমাকারী। এতে বোঝায় তাদের পাকা স্বভাব, ভাগ্যক্রমে আসা কোনো মুহূর্ত নয়। রাগকে এখানে অস্বীকারও করা হয়নি, নিন্দাও করা হয়নি। আয়াত ধরেই নেয় রাগ আসবে, আর রাগ থেকে বেরোনোর পথ বেঁধে দেয়। উসকানি আর জবাবের মাঝখানে এই মানুষগুলো ক্ষমাকে স্বাভাবিক নিয়ম বানিয়ে নিয়েছে।"
          },
          {
            "en": "The Quran praises the same trait in 3:134, where those who spend in ease and in hardship restrain their anger and pardon people — and Allah loves the muhsinin. The commentators point out the gradation there: swallowing rage, then pardoning, then going beyond it to good treatment. 42:37 assumes the whole ladder. Forgiveness exercised in strength is the mark; pardoning what one was powerless to punish anyway costs little.",
            "bn": "কুরআন ৩:১৩৪ আয়াতেও এই গুণের প্রশংসা করেছে: যারা সচ্ছলতায় ও অভাবে খরচ করে, রাগ সংবরণ করে, মানুষকে মাফ করে দেয়; আর আল্লাহ মুহসিনদের ভালোবাসেন। মুফাসসিরগণ সেখানে ধাপগুলো দেখিয়ে দেন: প্রথমে রাগ গিলে ফেলা, তারপর মাফ করা, তারপর তারও উপরে উঠে সদাচরণ। ৪২:৩৭ পুরো সিঁড়িটাই ধরে নেয়। আসল পরিচয় হলো শক্তি থাকা অবস্থায় ক্ষমা করা। যাকে শাস্তি দেওয়ার ক্ষমতাই ছিল না, তাকে মাফ করায় খরচ সামান্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse of Consultation",
          "bn": "পরামর্শের আয়াত"
        },
        "p": [
          {
            "en": "42:38 gives the surah its name: those who respond to their Lord and establish the prayer, wa amruhum shura baynahum — and their affair is consultation among themselves — and who spend from what We have provided them. Shura sits embedded between worship and charity, listed as a trait of the same rank. The construction again is descriptive: consultation is what their affairs are, a standing manner of deciding, not an occasional concession extracted from a reluctant leader.",
            "bn": "৪২:৩৮ থেকেই সূরাটির নাম: যারা নিজেদের রবের ডাকে সাড়া দেয়, নামাজ কায়েম করে, ওয়া আমরুহুম শূরা বাইনাহুম, অর্থাৎ নিজেদের কাজকর্ম চালায় পারস্পরিক পরামর্শে, আর আমরা তাদের যা দিয়েছি তা থেকে খরচ করে। শূরা বসানো আছে ইবাদত আর দানের ঠিক মাঝখানে, একই মর্যাদার গুণ হিসেবে। গঠন এখানেও বর্ণনামূলক। পরামর্শই তাদের কাজের ধরন, সিদ্ধান্ত নেওয়ার স্থায়ী রীতি। অনিচ্ছুক নেতার কাছ থেকে মাঝেমধ্যে আদায় করা কোনো ছাড় নয়।"
          },
          {
            "en": "Responding to their Lord, istajabu li-rabbihim, heads the verse and governs it. The commentators read it as the broad answering of Allah's call — obedience as a whole — of which the prayer is the most visible pillar. Consultation and spending then follow as the social half of the same response. The verse quietly refuses a religion of ritual alone: answering Allah includes how a community decides and how its wealth moves.",
            "bn": "আয়াতের শুরুতে আছে ইসতাজাবূ লিরাব্বিহিম, তারা নিজেদের রবের ডাকে সাড়া দেয়; পুরো আয়াত এরই অধীনে। মুফাসসিরগণ একে পড়েন আল্লাহর ডাকে ব্যাপক অর্থে সাড়া দেওয়া হিসেবে, অর্থাৎ পুরো আনুগত্য। তার সবচেয়ে দৃশ্যমান স্তম্ভ হলো নামাজ। এরপর পরামর্শ আর খরচ আসে সেই একই সাড়ার সামাজিক অর্ধেক হিসেবে। আয়াতটি চুপচাপ জানিয়ে দেয়, শুধু আনুষ্ঠানিক ইবাদতের ধর্ম যথেষ্ট নয়। আল্লাহর ডাকে সাড়া দেওয়ার মধ্যে এটাও পড়ে: একটা সমাজ কীভাবে সিদ্ধান্ত নেয়, আর তার সম্পদ কোন পথে চলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Consultation Before Power",
          "bn": "ক্ষমতার আগেই পরামর্শ"
        },
        "p": [
          {
            "en": "By the mainstream reckoning this surah was revealed in Makkah, before the believers had a state, an army or a treasury. The commentators draw the consequence: shura is named as the character of the believing community itself — in households, partnerships and small collective matters — before it is any machinery of government. Later, in Madinah, 3:159 commands the Prophet ﷺ himself to consult them in the matter, though revelation guided him; the practice was made visible at the top so that no one below could disdain it.",
            "bn": "প্রচলিত মত অনুযায়ী এই সূরা মক্কায় নাজিল হয়েছে, যখন মুমিনদের কোনো রাষ্ট্র, সেনাবাহিনী বা কোষাগার ছিল না। মুফাসসিরগণ এখান থেকে সিদ্ধান্ত টানেন: কোনো শাসনব্যবস্থার যন্ত্র হওয়ার আগে শূরা হলো মুমিন সমাজেরই স্বভাব, সংসারে, অংশীদারির কারবারে, ছোটখাটো যৌথ কাজে। পরে মদীনায় ৩:১৫৯ আয়াত স্বয়ং নবী ﷺ-কে হুকুম দেয় কাজকর্মে সাহাবিদের সঙ্গে পরামর্শ করতে, যদিও ওহি তাঁকে পথ দেখাত। রীতিটা সবার উপরে দৃশ্যমান করা হলো, যাতে নিচের কেউ একে তুচ্ছ মনে না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Passage Adds Next",
          "bn": "পরের আয়াতগুলো যা যোগ করে"
        },
        "p": [
          {
            "en": "The verses that follow keep circling restraint. 42:40 rules that the recompense of an evil is an evil like it, but whoever pardons and sets matters right, his reward is upon Allah — He does not love the wrongdoers. 42:41 protects from blame the one who takes just retribution after being wronged, and 42:43 concludes: whoever is patient and forgives, that is of the matters requiring resolve. The passage holds both truths at once: justice is a right, and pardon is a rank.",
            "bn": "পরের আয়াতগুলোও ঘুরেফিরে সংযমের কথাই বলে। ৪২:৪০ বিধান দেয়: মন্দের প্রতিফল তারই মতো মন্দ; কিন্তু যে মাফ করে দেয় ও মিটমাট করে, তার প্রতিদান আল্লাহর জিম্মায়; তিনি জালিমদের ভালোবাসেন না। ৪২:৪১ বলে, জুলুমের শিকার হয়ে যে ন্যায্য বদলা নেয়, তাকে দোষ দেওয়া যাবে না। আর ৪২:৪৩ শেষ কথা বলে: যে সবর করে ও ক্ষমা করে, তা তো দৃঢ় সংকল্পের কাজ। অংশটি দুটি সত্য একসঙ্গে ধরে রাখে: ন্যায়বিচার একটা হক, আর ক্ষমা একটা মর্যাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Community's Audit",
          "bn": "একটি সমাজের আত্মপরীক্ষা"
        },
        "p": [
          {
            "en": "The passage reads as a checklist for any believing household or institution. Which currency is the operation actually maximizing — the passing or the lasting? When anger arrives, is forgiveness the installed default or an occasional surprise? Are decisions genuinely consulted, with the quietest person heard, or announced after the fact? Does money flow out as reliably as prayers are prayed? None of the items is private; each one is visible in how a family or a team runs within a week.",
            "bn": "যেকোনো মুমিন পরিবার বা প্রতিষ্ঠান এই অংশটিকে নিজের যাচাইয়ের তালিকা হিসেবে পড়তে পারে। আমাদের কাজকর্ম আসলে কোন মুদ্রা বেশি জমাচ্ছে, ক্ষণিকেরটা না স্থায়ীটা? রাগ এলে ক্ষমা কি আমাদের স্বাভাবিক নিয়ম, নাকি কালেভদ্রে ঘটা চমক? সিদ্ধান্ত কি সত্যিই পরামর্শ করে নেওয়া হয়, যেখানে সবচেয়ে চুপচাপ মানুষটির কথাও শোনা হয়? নাকি সব ঠিক হয়ে যাওয়ার পর জানিয়ে দেওয়া হয়? নামাজ যেমন নিয়মিত পড়া হয়, তেমন নিয়মিত কি খরচও করা হয়? এর কোনোটাই গোপন ব্যাপার নয়। একটা পরিবার বা দল কীভাবে চলে, এক সপ্তাহেই প্রতিটি চোখে পড়ে।"
          },
          {
            "en": "The order is also a method. Reliance on Allah in 42:36 comes first because the person clutching this world cannot afford restraint, pardon or open hands; every loss feels total. Once what is with Allah is genuinely believed to be better and more lasting, the rest of the portrait becomes affordable: anger can release its grip, consultation can risk being overruled, wealth can leave. The passage is not a list of separate virtues but one economy of the heart.",
            "bn": "ক্রমটাও একটা পদ্ধতি। ৪২:৩৬ আয়াতে আল্লাহর উপর ভরসা আগে এসেছে, কারণ যে দুনিয়াকে আঁকড়ে ধরে আছে, সংযম, ক্ষমা বা খোলা হাত তার সাধ্যে কুলায় না; প্রতিটি ক্ষতিই তার কাছে সর্বনাশ। আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী, এ কথা মন থেকে বিশ্বাস করলে ছবির বাকিটা সাধ্যের মধ্যে চলে আসে। রাগ মুঠি আলগা করতে পারে, পরামর্শে নিজের মত বাতিল হওয়ার ঝুঁকি নেওয়া যায়, সম্পদ হাত থেকে যেতে পারে। অংশটি আলাদা আলাদা গুণের তালিকা নয়; এ হলো অন্তরের একটাই হিসাবের খাতা।"
          }
        ]
      }
    ]
  },
  "42:40": {
    "sections": [
      {
        "h": {
          "en": "Why the Payback Is Called Evil",
          "bn": "প্রতিশোধকে কেন মন্দ বলা হলো"
        },
        "p": [
          {
            "en": "Wa jaza'u sayyi'atin sayyi'atun mithluha: the recompense of an evil is an evil like it. The second sayyi'ah is the lawful, measured response of a wronged person, and the Quran still gives it the same name as the offence. Tafsir Ahsanul Bayaan explains the choice as naming a thing after its counterpart for the sake of the match; the response is not itself an evil, but it is called one because it answers an evil in kind.",
            "bn": "'ওয়া জাযাউ সায়্যিআতিন সায়্যিআতুম মিসলুহা': মন্দের প্রতিফল তারই মতো মন্দ। দ্বিতীয় 'সায়্যিআহ' হলো মজলুমের বৈধ ও মাপা জবাব, তবু কুরআন সেটাকেও অপরাধের নামেই ডাকে। তাফসীর আহসানুল বায়ান বলে, মিল রাখার জন্য এখানে একটি জিনিসকে তার বিপরীত পক্ষের নামে ডাকা হয়েছে। জবাবটি নিজে মন্দ নয়; তবু একে মন্দ বলা হয়েছে, কারণ তা মন্দেরই সমান জবাব।"
          },
          {
            "en": "That single word does work no ruling could do. A person about to collect what he is owed reads, in the very middle of the permission, that the act he is about to perform wears the offence's own name. Al-Muyassar tightens it further, glossing the clause as punishing him with an evil like it and with no addition at all. The permission is real, and it is issued with a caution built into its vocabulary.",
            "bn": "এই একটা শব্দ যা করে, কোনো বিধান তা করতে পারত না। যে মানুষ নিজের পাওনা আদায় করতে যাচ্ছে, সে অনুমতির ঠিক মাঝখানে পড়ে ফেলে: যে কাজ সে করতে যাচ্ছে, তার নাম অপরাধেরই নাম। তাফসীর মুয়াসসার আরও কড়া করে বলে: তাকে শাস্তি দেবে তারই মতো মন্দ দিয়ে, একটুও না বাড়িয়ে। অনুমতিটা সত্যিই আছে, তবে তার শব্দের ভেতরেই একটা সতর্কবার্তা গেঁথে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Cap Called Mithl",
          "bn": "মিসল নামের সীমা"
        },
        "p": [
          {
            "en": "Mithluha, like it, is the limit, and the Quran states that limit in three other registers. 2:194 says that whoever assaults you, assault him in the same way he assaulted you. 16:126 says that if you punish, punish with the equivalent of what you were harmed with. 5:45 lays out life for life and eye for eye and adds that wounds are qisas. Ibn Kathir gathers exactly these verses under this one.",
            "bn": "'মিসলুহা', অর্থাৎ তারই মতো: এটাই সীমা। কুরআন এই সীমার কথা আরও তিন জায়গায় তিন ভঙ্গিতে বলেছে। ২:১৯৪ বলে, যে তোমাদের উপর আক্রমণ করে, তোমরাও তার উপর ঠিক ততটুকুই আক্রমণ করো, যতটুকু সে করেছে। ১৬:১২৬ বলে, যদি শাস্তি দাও, তবে ঠিক ততটুকুই দাও, যতটুকু কষ্ট তোমাদের দেওয়া হয়েছে। ৫:৪৫ সাজিয়ে বলে প্রাণের বদলে প্রাণ, চোখের বদলে চোখ, আর যোগ করে, জখমেরও কিসাস আছে। ইবনে কাসীর এই আয়াতের ব্যাখ্যায় ঠিক এই আয়াতগুলোই একসঙ্গে এনেছেন।"
          },
          {
            "en": "Notice who is being restrained. The cap is not placed on the wrongdoer, who has already acted, but on the wronged party, who is the only one now holding both a permission and a motive. And 40:40 applies the same measure to Allah's own reckoning: whoever does an evil deed will not be recompensed except by the like of it. The rule the believer is held to is the rule the Judge states about Himself.",
            "bn": "খেয়াল করুন, সংযত করা হচ্ছে কাকে। সীমাটা বসানো হয়নি জালিমের উপর, সে তো কাজটা করেই ফেলেছে। বসানো হয়েছে মজলুমের উপর, কারণ এখন অনুমতিও তার হাতে, প্রতিশোধের তাগিদও তার মনে। আর ৪০:৪০ একই মাপ খাটায় আল্লাহর নিজের হিসাবেও: যে মন্দ কাজ করে, তাকে কেবল তারই মতো প্রতিফল দেওয়া হবে। মুমিনকে যে নিয়মে বাঁধা হয়েছে, বিচারক নিজের ব্যাপারেও সেই নিয়মই ঘোষণা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verbs, Not One",
          "bn": "একটি নয়, দুটি ক্রিয়া"
        },
        "p": [
          {
            "en": "The higher road is named with a pair of verbs: fa-man afa wa aslah. Afa comes from a root that carries effacing and wiping out, dropping the claim so that it leaves no residue behind. Aslaha is to repair, to put a thing back into working order. Pardon that ends the demand but leaves the relationship dead satisfies only the first verb. The verse asks for the claim to be dropped and the connection to be rebuilt.",
            "bn": "উঁচু পথটির নাম এসেছে দুটি ক্রিয়ায়: 'ফামান আফা ওয়া আসলাহা'। 'আফা' এমন এক ধাতু থেকে, যার মধ্যে আছে মুছে ফেলা, নিশ্চিহ্ন করা। অর্থাৎ দাবি এমনভাবে ছেড়ে দেওয়া, যাতে তার কোনো দাগ না থাকে। 'আসলাহা' মানে মেরামত করা, জিনিসটাকে আবার কাজের উপযোগী করা। যে ক্ষমা দাবি তুলে নেয় কিন্তু সম্পর্কটা মরা অবস্থায় ফেলে রাখে, তা কেবল প্রথম ক্রিয়াটা পূরণ করে। আয়াত চায় দাবিও ছাড়া হোক, সম্পর্কও আবার গড়া হোক।"
          },
          {
            "en": "Al-Muyassar glosses the pair as pardoning the offender, leaving off his punishment, and restoring the affection between himself and the one pardoned, seeking thereby the face of Allah. That last clause matters, because it separates this from the many other reasons a person lets a thing go: exhaustion, weakness, fear of a longer fight, or a wish to be seen as gracious. The reward is attached to a pardon offered for Allah.",
            "bn": "তাফসীর মুয়াসসার এই জোড়ার ব্যাখ্যা দেয় এভাবে: অপরাধীকে মাফ করা, তার শাস্তি ছেড়ে দেওয়া, আর যাকে মাফ করা হলো তার সঙ্গে ভালোবাসার সম্পর্ক ফিরিয়ে আনা, এবং এসব করা আল্লাহর সন্তুষ্টির আশায়। শেষ কথাটা জরুরি। মানুষ আরও অনেক কারণে কিছু ছেড়ে দেয়: ক্লান্তি, দুর্বলতা, লম্বা লড়াইয়ের ভয়, কিংবা উদার বলে পরিচিত হওয়ার শখ। এই শর্তটাই সেগুলো থেকে একে আলাদা করে। প্রতিদান বাঁধা আছে আল্লাহর জন্য করা ক্ষমার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reward Left Unnamed",
          "bn": "যে প্রতিদানের পরিমাণ বলা হয়নি"
        },
        "p": [
          {
            "en": "Fa-ajruhu ala Allah, his reward is upon Allah. The preposition is ala, the one Arabic uses for what is due from someone, rather than inda, which would only have said with. The phrase puts the reward squarely in Allah's charge. And the amount is never stated. Every other item in a dispute has a figure attached to it; this one is left open, which is the whole point of putting it there.",
            "bn": "'ফা-আজরুহু আলাল্লাহ': তার প্রতিদান আল্লাহর উপর। অব্যয়টি 'আলা'; কারও উপর কোনো দায় থাকলে আরবিতে এটাই বলা হয়। 'ইনদা' বলা হয়নি, যাতে শুধু 'কাছে' বোঝাত। এভাবে প্রতিদানটা পুরোপুরি থাকে আল্লাহর জিম্মায়। আর পরিমাণ কোথাও বলা নেই। বিরোধের অন্য সব হিসাবের সঙ্গে একটা অঙ্ক জুড়ে থাকে; কেবল এটাই খোলা রাখা হয়েছে, আর এখানে একে রাখার উদ্দেশ্যই সেটা।"
          },
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: charity does not decrease wealth, and Allah does not increase a servant through pardon except in honour, and nobody humbles himself for Allah but that Allah raises him. Ibn Kathir cites the middle clause of that hadith under this verse. The fear that pardoning will make a person look weak is answered by a report about what actually happens, not by an argument.",
            "bn": "মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: সদকা সম্পদ কমায় না; ক্ষমার কারণে আল্লাহ বান্দার সম্মানই বাড়িয়ে দেন; আর আল্লাহর জন্য যে বিনয়ী হয়, আল্লাহ তাকে উঁচু করেন। ইবনে কাসীর এই হাদিসের মাঝের অংশটি এই আয়াতের নিচে উল্লেখ করেন। ক্ষমা করলে মানুষ দুর্বল দেখাবে — এই ভয়ের জবাব আসে যুক্তি দিয়ে নয়, বরং বাস্তবে কী ঘটে তার একটি সংবাদ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Wrongdoers Are",
          "bn": "জালিম কারা"
        },
        "p": [
          {
            "en": "The verse ends innahu la yuhibbu az-zalimin, He does not like the wrongdoers, and it is easy to misread that as a warning to the person still weighing whether to pardon. Both Ibn Kathir and al-Muyassar identify the zalimin here as the ones who begin, those who initiate the aggression against people. The clause names the party at fault, so that mercy at the end of the verse is never mistaken for a verdict that both sides were the same.",
            "bn": "আয়াতটি শেষ হয় 'ইন্নাহু লা ইউহিব্বুয জালিমীন' দিয়ে: তিনি জালিমদের পছন্দ করেন না। সহজেই একে ভুল বোঝা যায়, যেন যে মানুষ এখনো ভাবছে মাফ করবে কি না, তাকেই সতর্ক করা হচ্ছে। কিন্তু ইবনে কাসীর ও তাফসীর মুয়াসসার দুজনেই বলেন, এখানে 'জালিমীন' তারা, যারা শুরু করে, অর্থাৎ মানুষের উপর আগে বাড়াবাড়ি করে। বাক্যটি দোষী পক্ষের নাম বলে দেয়, যাতে আয়াতের শেষে আসা দয়াকে কেউ এই রায় বলে ভুল না করে যে দুই পক্ষই সমান।"
          },
          {
            "en": "The verses on either side keep the balance. 42:39 has already praised those who defend themselves when tyranny strikes them; 42:41 says there is no blame upon one who retaliates after being wronged; 42:42 puts the blame on those who oppress people and rebel on the earth. Only then does 42:43 call patience and forgiveness among the matters of resolve. Pardon is a rank in this surah, never a duty owed to an oppressor.",
            "bn": "দুই পাশের আয়াতগুলো ভারসাম্য রাখে। ৪২:৩৯ আগেই প্রশংসা করেছে তাদের, যারা জুলুমের শিকার হলে আত্মরক্ষা করে। ৪২:৪১ বলে, জুলুমের শিকার হওয়ার পর যে বদলা নেয়, তার উপর কোনো দোষ নেই। ৪২:৪২ দোষ চাপায় তাদের উপর, যারা মানুষের উপর জুলুম করে আর যমীনে অন্যায়ভাবে বিদ্রোহ করে। তার পরেই কেবল ৪২:৪৩ সবর ও ক্ষমাকে দৃঢ় সংকল্পের কাজ বলে। এই সূরায় ক্ষমা একটা মর্যাদা; জালিমের কাছে পাওনা কোনো দায় নয়।"
          }
        ]
      }
    ]
  },
  "42:42": {
    "sections": [
      {
        "h": {
          "en": "The Blame Changes Address",
          "bn": "অভিযোগের ঠিকানা বদলায়"
        },
        "p": [
          {
            "en": "Innama as-sabilu 'ala alladhina yazlimuna an-nas: the way is only against those who wrong people. The verse answers the one before it. 42:41 closed with ma 'alayhim min sabil, there is no way against those who defend themselves after being wronged. Here the same noun returns with the article and the restricting innama in front of it, so the sentence does two things at once. It names where the sabil does lie, and by the word only it shuts it away from everyone the previous verse has just cleared.",
            "bn": "ইন্নামাস সাবীলু আলাল্লাযীনা ইয়াযলিমূনান নাস: পথ তো কেবল তাদের বিরুদ্ধে, যারা মানুষের উপর জুলুম করে। আয়াতটি আগের আয়াতের জবাব। ৪২:৪১ শেষ হয়েছিল মা আলাইহিম মিন সাবীল দিয়ে: জুলুমের শিকার হয়ে যারা আত্মরক্ষা করে, তাদের বিরুদ্ধে কোনো পথ নেই। এখানে সেই একই শব্দ ফিরে এসেছে নির্দিষ্টবাচক রূপে, আর সামনে বসেছে সীমাবদ্ধকারী ইন্নামা। ফলে বাক্যটি একসঙ্গে দুটি কাজ করে। সাবীল আসলে কার উপর, তা বলে দেয়। আবার 'কেবল' শব্দটি দিয়ে আগের আয়াতে যাদের নির্দোষ বলা হলো, তাদের থেকে সেটা সরিয়ে রাখে।"
          },
          {
            "en": "Al-Qurtubi quotes Ibn al-'Arabi on a wider symmetry. This verse, he says, stands opposite the earlier one in Bara'ah, ma 'ala al-muhsinina min sabil, there is no way against those who do good (9:91). Just as Allah removed the sabil from the one who does good, He placed it upon the one who wrongs, and the account of the two kinds of people is complete. Read together, the two verses say that a charge in the court of the Qur'an follows conduct, never mere involvement in a dispute.",
            "bn": "কুরতুবী এখানে ইবনুল আরাবীর একটি পর্যবেক্ষণ উদ্ধৃত করেন। তাঁর মতে এ আয়াত সূরা বারাআর আগের আয়াতটির বিপরীতে দাঁড়িয়ে আছে: মা আলাল মুহসিনীনা মিন সাবীল, সৎকর্মশীলদের বিরুদ্ধে কোনো পথ নেই (৯:৯১)। আল্লাহ যেমন সৎকর্মশীলের উপর থেকে সাবীল তুলে নিয়েছেন, তেমনি তা রেখেছেন জালিমের উপর। এভাবে দুই দলের হিসাব পুরো হয়ে গেছে। দুটি আয়াত পাশাপাশি পড়লে বোঝা যায়, কুরআনের বিচারে দায় আসে আচরণ থেকে। শুধু কোনো বিবাদে জড়িয়ে পড়লেই কেউ দোষী হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Road, Burden or Recourse",
          "bn": "পথ, বোঝা নাকি প্রতিকার"
        },
        "p": [
          {
            "en": "Sabil is literally a road, and the commentators do not agree on what road is meant. At-Tabari keeps closest to the word: the way is open to you, O people, against those who assault others in wrong and aggression, so that you may punish them for their wrong, and it is not open against one who took back his right from whoever wronged him. For him the sabil is a path of action that belongs to the wronged party and to people at large.",
            "bn": "সাবীল শব্দের আক্ষরিক অর্থ রাস্তা। কোন রাস্তার কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারেরা একমত নন। তাবারী শব্দের সবচেয়ে কাছে থাকেন। তাঁর ব্যাখ্যায়: হে মানুষ, তোমাদের জন্য পথ খোলা তাদের বিরুদ্ধে, যারা জুলুম আর সীমালঙ্ঘন করে মানুষের উপর চড়াও হয়। তোমরা তাদের জুলুমের শাস্তি দিতে পারো। কিন্তু যে তার উপর জুলুমকারীর কাছ থেকে নিজের হক আদায় করে নিল, তার বিরুদ্ধে সে পথ খোলা নেই। তাবারীর কাছে সাবীল তাই করণীয়ের একটি পথ, যা মজলুমের ও সাধারণ মানুষের হাতে।"
          },
          {
            "en": "Ibn Kathir reads it as a weight rather than a road: only the haraj and 'anat, the blame and the burden, lie upon them. The abridged English of his tafsir puts it as the burden of sin. As-Sa'di gives it a legal edge: the case for a punishment set by the Shari'ah is directed only at them. Al-Muyassar uses al-mu'akhadhah, being taken to task. Blame, sin, lawful punishment and accountability are four different claims, and the verse's one word holds room for all of them.",
            "bn": "ইবন কাসীরের কাছে সাবীল রাস্তা নয়, বোঝা। তিনি বলেন, সংকীর্ণতা আর কষ্ট, অর্থাৎ দোষের ভার, কেবল তাদের উপর। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একে বলে গুনাহের বোঝা। সা'দী এতে আইনি মাত্রা যোগ করেন: শরীয়তসম্মত শাস্তির দাবি কেবল তাদের দিকেই ধাবিত হয়। মুয়াসসার শব্দ বেছে নেয় মুআখাযা, মানে পাকড়াও হওয়া, জবাবদিহির মুখে পড়া। দোষ, গুনাহ, শরীয়তের শাস্তি আর জবাবদিহি চারটি আলাদা দাবি। আয়াতের একটিমাত্র শব্দে চারটিরই জায়গা আছে।"
          },
          {
            "en": "The differences have consequences. At-Tabari's reading hands people a lawful path to answer the aggressor, and as-Sa'di ties the answer to what the Shari'ah itself sets, not to private anger. Ibn Kathir's and al-Muyassar's readings point beyond any court, to a burden carried before Allah. Held together, they keep the verse from shrinking into either a mere feeling of grievance or a mere permission to strike back. The aggressor faces both a lawful answer and an account that does not close.",
            "bn": "এই পার্থক্যগুলোর ফল আছে। তাবারীর ব্যাখ্যা মানুষকে জালিমের জবাব দেওয়ার একটি বৈধ পথ দেয়। সা'দী সেই জবাবকে বেঁধে দেন শরীয়ত যা নির্ধারণ করেছে তার সঙ্গে, ব্যক্তিগত রাগের সঙ্গে নয়। ইবন কাসীর আর মুয়াসসারের ব্যাখ্যা যেকোনো আদালতের বাইরে চলে যায়, আল্লাহর সামনে বয়ে বেড়ানো এক বোঝার দিকে। সব কটি একসঙ্গে ধরলে আয়াতটি শুধু ক্ষোভের অনুভূতি হয়ে থাকে না, আবার শুধু পাল্টা আঘাতের অনুমতিও হয়ে যায় না। জালিমের সামনে থাকে বৈধ প্রতিকার, আর এমন এক হিসাব যা কখনো বন্ধ হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Starts It",
          "bn": "যে আগে শুরু করে"
        },
        "p": [
          {
            "en": "Who are alladhina yazlimuna an-nas? Ibn Kathir and al-Baghawi give the same short answer: those who begin people with wrong. Al-Qurtubi says it means by their aggression against them, and reports that this is the view of most scholars. He also records a narrower reading from Ibn Jurayj: they wrong people through shirk that opposes their religion. The weight of the commentary falls on the first reading, in which the decisive fact is who moved first.",
            "bn": "আল্লাযীনা ইয়াযলিমূনান নাস, মানুষের উপর জুলুমকারী কারা? ইবন কাসীর আর বাগাভী একই ছোট উত্তর দেন: যারা মানুষের উপর আগে জুলুম শুরু করে। কুরতুবী বলেন, মানে তাদের উপর সীমালঙ্ঘন করে, আর জানান যে অধিকাংশ আলেমের মত এটাই। ইবন জুরাইজের একটি সংকীর্ণ ব্যাখ্যাও তিনি লিখে রাখেন: তারা শিরকের মাধ্যমে মানুষের উপর জুলুম করে, যা তাদের দ্বীনের বিরোধী। তাফসীরের ভার অবশ্য প্রথম ব্যাখ্যার দিকেই। সেখানে আসল প্রশ্ন একটাই: কে আগে হাত বাড়িয়েছে।"
          },
          {
            "en": "To show what beginning means, Ibn Kathir cites a hadith he calls sahih. Abu Hurayrah (RA) reported that the Messenger of Allah ﷺ said: \"Al-mustabban ma qala fa-'ala al-badi' ma lam ya'tadi al-mazlum\": when two people revile each other, what they both say falls upon the one who began, so long as the wronged one does not overstep. Muslim records it in his Sahih (2587). The final clause matters as much as the first, because the one who answers keeps his innocence only within the limit.",
            "bn": "শুরু করা বলতে কী বোঝায়, তা দেখাতে ইবন কাসীর একটি হাদিস আনেন, যাকে তিনি সহীহ বলেন। আবু হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: \"আলমুসতাব্বানি মা কালা ফাআলাল বাদি মা লাম ইয়া'তাদিল মাযলূম\", দুজন যখন একে অপরকে গালি দেয়, দুজনের বলা সব কথার দায় পড়ে যে শুরু করেছে তার উপর, যতক্ষণ মজলুম সীমা না ছাড়ায়। ইমাম মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন (২৫৮৭)। শেষ অংশটা প্রথম অংশের মতোই জরুরি। জবাবদাতা নির্দোষ থাকে কেবল সীমার ভেতরে থাকলে।"
          },
          {
            "en": "In most quarrels each side counts the other's reply as the first blow, and the argument becomes a contest over who started it. The hadith settles that question and then sets a second question beside it. The person who began carries the weight of both voices, yet the person who answered loses that shelter the moment his answer goes past what he received. So the verse asks every reader two things in turn: did I begin it, and did I go beyond the measure?",
            "bn": "বেশির ভাগ ঝগড়ায় দুই পক্ষই অন্যজনের জবাবকে প্রথম আঘাত বলে গোনে। তখন তর্কটা দাঁড়ায় কে শুরু করেছে, সেই প্রশ্নে। হাদিসটি এ প্রশ্নের মীমাংসা করে, তারপর পাশে আরেকটি প্রশ্ন রেখে দেয়। যে শুরু করেছে, দুজনের কথার ভার তার কাঁধে। কিন্তু জবাবদাতা যে মুহূর্তে যা পেয়েছে তার চেয়ে বেশি ফিরিয়ে দেয়, সেই আশ্রয় সে হারায়। তাই আয়াতটি প্রত্যেক পাঠককে পরপর দুটি প্রশ্ন করে: আমি কি শুরু করেছিলাম? আর আমি কি মাপ ছাড়িয়ে গিয়েছিলাম?"
          }
        ]
      },
      {
        "h": {
          "en": "Overstepping on the Earth",
          "bn": "যমীনে সীমা ডিঙানো"
        },
        "p": [
          {
            "en": "Wa yabghuna fi-l-ardi bi-ghayri-l-haqq: and they overstep on the earth without right. At-Tabari explains baghy as passing, in Allah's earth, the limit their Lord made lawful for them into what He did not permit, and so spreading corruption there without right. Al-Muyassar repeats that wording almost exactly. As-Sa'di widens the field: the clause covers every wrong and every act of baghy against people, in their blood, their wealth and their honour.",
            "bn": "ওয়া ইয়াবগূনা ফিল আরদি বিগাইরিল হাক্ক: আর তারা অন্যায়ভাবে যমীনে সীমা ছাড়ায়। তাবারী বাগইয়ের ব্যাখ্যা দেন এভাবে: আল্লাহর যমীনে রব তাদের জন্য যে সীমা হালাল করেছেন, তা পেরিয়ে তারা ঢুকে পড়ে এমন কিছুতে যার অনুমতি তিনি দেননি, আর এভাবে অন্যায়ভাবে সেখানে ফাসাদ ছড়ায়। মুয়াসসার প্রায় হুবহু একই কথা বলে। সা'দী ক্ষেত্রটা আরও বড় করেন। তাঁর মতে এ অংশে মানুষের উপর সব রকম জুলুম আর বাড়াবাড়ি ঢুকে পড়ে: তাদের জানে, মালে আর সম্মানে।"
          },
          {
            "en": "Al-Qurtubi gathers a wider spread of names. Most scholars, he reports, place the baghy in lives and property. Muqatil makes it acting with sins, and al-Baghawi gives the same gloss. Abu Malik ties it to a particular group: it is what the disbelievers of Quraysh hoped for, that Makkah should have a religion other than Islam. Along that line Ibn Zayd held that the whole passage was abrogated by the command to fight and applied to the idolaters alone. Qatada said it is general, and al-Qurtubi adds that the plain wording points the same way.",
            "bn": "কুরতুবী আরও বেশি মত একসঙ্গে আনেন। তিনি জানান, অধিকাংশের মতে এই বাড়াবাড়ি জান ও মালে। মুকাতিলের মতে এর অর্থ গুনাহের কাজ করা, আর বাগাভীও একই ব্যাখ্যা দেন। আবু মালিক এটিকে একটি নির্দিষ্ট দলের সঙ্গে যুক্ত করেন: কুরাইশের কাফেররা চাইত মক্কায় ইসলাম ছাড়া অন্য কোনো দ্বীন থাকুক, সেটাই এই বাড়াবাড়ি। এই ধারায় ইবন যায়দ বলেছেন, পুরো অংশটি জিহাদের হুকুমে রহিত হয়ে গেছে এবং এটি কেবল মুশরিকদের বেলায় প্রযোজ্য ছিল। কাতাদা বলেছেন, আয়াতটি সাধারণ। কুরতুবী যোগ করেন, বাক্যের বাহ্যিক অর্থও সেদিকেই ইঙ্গিত করে।"
          },
          {
            "en": "One thing must be said plainly. The verse describes those who wrong people and overstep without right, and the commentators who name a group are speaking of the people of their reading, such as the Quraysh of Abu Malik's gloss. It licenses nothing against any living person or community, and no one is named here as the oppressor of today. The verse supplies the description; matching it to a face belongs to evidence and due process, and its first reader should be oneself.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে তাদের, যারা মানুষের উপর জুলুম করে আর অন্যায়ভাবে সীমা ছাড়ায়। যে তাফসীরকারেরা কোনো দলের নাম নেন, তাঁরা নিজ নিজ ব্যাখ্যার মানুষদের কথাই বলেন, যেমন আবু মালিকের ব্যাখ্যায় কুরাইশ। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের দিনের জালিম হিসেবে এখানে কারও নাম নেওয়া হয়নি। আয়াত শুধু চেহারাটা এঁকে দেয়। সেই চেহারা কার সঙ্গে মেলে, তা ঠিক হয় প্রমাণ আর ন্যায্য বিচারে, আর এটি প্রথমে মিলিয়ে দেখার কথা নিজের সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Letter to a New Official",
          "bn": "নতুন কর্মকর্তার কাছে চিঠি"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a report recorded by Ibn Abi Hatim. Muhammad ibn Wasi' arrived at Makkah, was stopped at a guard post and brought before Marwan ibn al-Muhallab, then governor of Basrah, who asked what he needed. He answered that he needed the governor, if he could, to be like the brother of Banu 'Adi. Asked who that was, he named al-'Ala' ibn Ziyad, who had once appointed a friend of his to an office and written him a letter.",
            "bn": "ইবন কাসীর এ আয়াতের আলোচনা শেষ করেন ইবন আবী হাতিমের বর্ণিত একটি ঘটনা দিয়ে। মুহাম্মাদ ইবন ওয়াসি মক্কায় পৌঁছলে এক পাহারা চৌকিতে তাঁকে আটকানো হয়। তাঁকে নিয়ে যাওয়া হয় বসরার তৎকালীন শাসক মারওয়ান ইবনুল মুহাল্লাবের কাছে। শাসক জানতে চাইলেন, আপনার কী প্রয়োজন? তিনি বললেন, সম্ভব হলে আপনি বনু আদীর সেই ভাইয়ের মতো হোন। কে সেই ভাই? তিনি জানালেন, আলা ইবন যিয়াদ। তিনি একবার এক বন্ধুকে একটি দায়িত্বে নিয়োগ দিয়ে তাকে একটি চিঠি লিখেছিলেন।"
          },
          {
            "en": "The letter said: if you can, never spend a night except with your back light, your stomach lean, and your hand clean of the blood and the wealth of the Muslims; if you do that, there will be no sabil against you. Then it quoted this verse. The governor said he had spoken the truth and given sincere counsel, and granted Muhammad ibn Wasi' his actual request, to rejoin his family. This is a report about early Muslims, not a hadith of the Prophet ﷺ, and its use of the verse is a self-audit for anyone holding power.",
            "bn": "চিঠিতে লেখা ছিল: পারলে কোনো রাত এমনভাবে কাটাবে না, যখন তোমার পিঠ হালকা নয়, পেট খালি নয়, আর হাত মুসলমানদের রক্ত ও সম্পদ থেকে পরিষ্কার নয়। এমন করতে পারলে তোমার বিরুদ্ধে কোনো সাবীল থাকবে না। এরপর চিঠিতে এই আয়াত উদ্ধৃত ছিল। শাসক বললেন, তিনি সত্য বলেছেন আর আন্তরিক উপদেশ দিয়েছেন। তারপর মুহাম্মাদ ইবন ওয়াসির আসল আবেদনটি মঞ্জুর করলেন: পরিবারের কাছে ফিরে যাওয়া। এটি প্রথম যুগের মুসলমানদের একটি ঘটনা, নবী ﷺ-এর হাদিস নয়। এখানে আয়াতটি ব্যবহৃত হয়েছে ক্ষমতাবানের আত্মজিজ্ঞাসা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Releasing the One Who Wronged",
          "bn": "জালিমকে দায়মুক্ত করা যায় কি"
        },
        "p": [
          {
            "en": "Al-Qurtubi uses the verse to open a practical question: may a person release someone from what he owes, so that it is no longer held against him? He reports that Sa'id ibn al-Musayyib released no one, whether from a slight to his honour or from a debt. Sulayman ibn Yasar and Muhammad ibn Sirin released people from both. Malik held that one may release from property but not from honour, and when asked about a man who wrongs another he cited this verse and said he would not grant him release.",
            "bn": "কুরতুবী এ আয়াত থেকে একটি বাস্তব প্রশ্ন তোলেন: কারও কাছে পাওনা থাকলে কি তাকে দায়মুক্ত করে দেওয়া যায়, যাতে সেটা আর তার বিরুদ্ধে না থাকে? তিনি জানান, সাঈদ ইবনুল মুসাইয়্যিব কাউকেই দায়মুক্ত করতেন না, না সম্মানহানির দায় থেকে, না সম্পদের দায় থেকে। সুলাইমান ইবন ইয়াসার আর মুহাম্মাদ ইবন সীরীন দুটো থেকেই মাফ করে দিতেন। মালিকের মত ছিল, সম্পদের দায় মাফ করা যায়, সম্মানহানির দায় নয়। কেউ কারও উপর জুলুম করলে কী হবে, জিজ্ঞেস করা হলে তিনি এই আয়াত পড়ে বলেন, আমি তাকে দায়মুক্ত করার পক্ষে নই।"
          },
          {
            "en": "Ibn al-'Arabi, quoted by al-Qurtubi, sets out the reasons. The first view holds that no person should make lawful what Allah forbade, as if altering His ruling. The second says the right is his own, so he may drop it. Malik's middle view distinguishes the two cases: a debtor who cannot pay deserves gentleness, while an oppressor left unanswered may grow bold and the wrongdoers press on with their deeds. The verse's sabil, on this reading, is something the wronged party may sometimes waive and sometimes should keep.",
            "bn": "কুরতুবী ইবনুল আরাবীর বরাতে প্রতিটি মতের যুক্তি তুলে ধরেন। প্রথম মতের যুক্তি: আল্লাহ যা হারাম করেছেন তা হালাল করে দেওয়া যায় না, তাতে তাঁর বিধান বদলে দেওয়ার মতো হয়। দ্বিতীয় মতের যুক্তি: হকটা তার নিজের, তাই সে চাইলে ছেড়ে দিতে পারে। মালিকের মাঝামাঝি মত দুটি অবস্থাকে আলাদা করে। যে দেনাদার শোধ করতে পারছে না, সে নরম আচরণ পাওয়ার যোগ্য। কিন্তু জালিমকে ছেড়ে দিলে সে আরও সাহস পায়, আর জালিমরা তাদের কুকর্ম চালিয়েই যায়। এই ব্যাখ্যায় আয়াতের সাবীল এমন এক হক, যা মজলুম কখনো ছেড়ে দিতে পারে, কখনো ধরে রাখাই উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "No Company in Injustice",
          "bn": "জুলুমে কোনো ভাগাভাগি নেই"
        },
        "p": [
          {
            "en": "A second case in al-Qurtubi shows the verse at work in public life. A ruler imposes a fixed sum on a town, which its people pay in proportion to their wealth. May someone who can escape the levy do so, knowing the rest will then be made to pay the full amount? Sahnun said no. Abu Ja'far ad-Dawudi said yes, citing Malik on a related case, and reasoned that there is no shared obligation in injustice, and nobody is bound to step into a wrong for fear that it will fall more heavily on others.",
            "bn": "কুরতুবীর দ্বিতীয় একটি মাসআলায় জনজীবনে আয়াতটির প্রয়োগ দেখা যায়। কোনো শাসক একটি শহরের উপর নির্দিষ্ট অঙ্কের অর্থ চাপিয়ে দিলেন, আর লোকেরা নিজ নিজ সম্পদের অনুপাতে তা দেয়। কেউ যদি এই দায় থেকে বেরিয়ে যেতে পারে, তবে কি সে তা করবে, যদিও তখন বাকিদের পুরো অঙ্কটাই দিতে হবে? সাহনূন বলেছেন, না। আবু জাফর দাউদী বলেছেন, হ্যাঁ। এ বিষয়ে তিনি মালিকের একটি কাছাকাছি মত দিয়ে দলিল দেন। তাঁর যুক্তি: জুলুমে কোনো ভাগাভাগির দায় নেই। অন্যদের উপর জুলুম বেড়ে যাবে, এই ভয়ে কাউকে নিজে জুলুমের ভেতরে ঢুকতে হয় না।"
          },
          {
            "en": "Ad-Dawudi then quotes this verse as his proof. As he applies it, the sabil lies on whoever imposed the wrong, not on the person who slipped out of it. Al-Qurtubi presents the two answers and leaves Sahnun's view on record, so the matter remains a disagreement among the Maliki jurists rather than a settled rule. Whichever answer a reader follows, the verse's own starting point is untouched: the burden of an unjust demand belongs first to whoever makes it.",
            "bn": "দাউদী এরপর এই আয়াতকেই দলিল হিসেবে পেশ করেন। তাঁর প্রয়োগে সাবীল তার উপর, যে জুলুমটা চাপিয়েছে; যে কোনোভাবে তা থেকে বেরিয়ে আসতে পেরেছে, তার উপর নয়। কুরতুবী দুটি উত্তরই উল্লেখ করেন, সাহনূনের মতও রেখে দেন। ফলে বিষয়টি মালিকী ফকীহদের মধ্যে মতভেদ হিসেবেই থাকে, চূড়ান্ত বিধান হয়ে যায় না। যে উত্তরই মানা হোক, আয়াতের মূল কথাটি অটুট থাকে: অন্যায় দাবির বোঝা সবার আগে তার, যে দাবিটা চাপায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pain Measured to the Wrong",
          "bn": "জুলুমের মাপে যন্ত্রণা"
        },
        "p": [
          {
            "en": "Ula'ika lahum 'adhabun alim: for them is a painful punishment. At-Tabari places it from Allah on the Day of Resurrection, in Jahannam, painful and aching, and al-Muyassar follows him. Ibn Kathir glosses alim as severe and aching. As-Sa'di adds two details: the pain reaches both hearts and bodies, and it comes in proportion to their wrong and their baghy. The punishment keeps the same rule of measure that 42:40 set for the wronged, applied now to whoever began.",
            "bn": "উলাইকা লাহুম আযাবুন আলীম: তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। তাবারীর ব্যাখ্যায় এ শাস্তি আল্লাহর পক্ষ থেকে, কিয়ামতের দিন, জাহান্নামে, কষ্টদায়ক ও যন্ত্রণাময়। মুয়াসসারও তাঁর অনুসরণ করে। ইবন কাসীর আলীম শব্দের অর্থ করেন কঠিন ও পীড়াদায়ক। সা'দী দুটি কথা যোগ করেন: যন্ত্রণা পৌঁছায় অন্তরে ও দেহে দুই জায়গাতেই, আর তা হয় তাদের জুলুম ও বাড়াবাড়ির মাপ অনুযায়ী। ৪২:৪০ মজলুমের জন্য যে মাপের নিয়ম বেঁধে দিয়েছিল, শাস্তিতেও সেই নিয়ম, এবার যে শুরু করেছে তার বেলায়।"
          },
          {
            "en": "The verse sits between two others that keep it from becoming a slogan. Before it, 42:41 clears whoever answers a wrong. After it, 42:43 says that whoever is patient and forgives has done something of firm resolve. Ma'arif al-Qur'an, on the whole passage, reports Ibrahim an-Nakha'i saying the early believers disliked being humiliated by wrongdoers who, left unchecked, would grow bolder. It concludes that forgiveness suits the repentant and a firm response suits the persistent.",
            "bn": "আয়াতটির আগে ও পরে দুটি আয়াত আছে, আর ওই দুটিই একে নিছক স্লোগান হয়ে যেতে দেয় না। আগের আয়াত ৪২:৪১ বলছে, যে অন্যায়ের জবাব দেয়, তার কোনো দোষ নেই। পরের আয়াত ৪২:৪৩ বলছে, যে ধৈর্য ধরে ও ক্ষমা করে, সে দৃঢ় সংকল্পের কাজ করে। পুরো অংশের আলোচনায় মাআরিফুল কুরআন ইবরাহীম নাখাঈর কথা আনে: প্রথম যুগের মুমিনরা জালিমের হাতে অপমানিত হওয়া পছন্দ করতেন না, কারণ ছাড় পেলে জালিম আরও সাহসী হয়ে ওঠে। মাআরিফের সিদ্ধান্ত: যে অনুতপ্ত হয়ে ফিরে আসে, তাকে ক্ষমা করাই মানায়; আর যে জুলুমে অটল, তার বেলায় দৃঢ় জবাবই মানায়।"
          },
          {
            "en": "So the verse does two jobs for a reader. For someone who has been hurt, it lifts a false guilt: answering within the limit is not the fault, and the weight sits elsewhere. For anyone who holds power, over a household, a team or a stranger's trust, it is the letter al-'Ala' ibn Ziyad wrote. The question is not whether oppressors exist somewhere, but whether tonight my own hand is clean of anyone's blood, wealth and honour.",
            "bn": "তাই পাঠকের জন্য আয়াতটি দুটি কাজ করে। যে আঘাত পেয়েছে, তার মন থেকে অকারণ অপরাধবোধের বোঝা নামিয়ে দেয়: সীমার ভেতরে থেকে জবাব দেওয়া দোষের নয়, দায় অন্যের ঘাড়ে। আর যার হাতে কোনো ক্ষমতা আছে, হোক তা সংসারে, কর্মস্থলের দলে, কিংবা কোনো অচেনা মানুষের আস্থার ওপর, তার জন্য এ আয়াত আলা ইবন যিয়াদের লেখা সেই চিঠি। প্রশ্নটা এই নয় যে জালিম কোথাও আছে কি না। প্রশ্ন হলো, আজ রাতে আমার নিজের হাত কারও রক্ত, সম্পদ আর ইজ্জতের দায় থেকে পরিষ্কার কি না।"
          }
        ]
      }
    ]
  },
  "42:52": {
    "sections": [
      {
        "h": {
          "en": "Just as to Those Before",
          "bn": "আগের রাসূলদের মতোই"
        },
        "p": [
          {
            "en": "The surah closes on revelation. 42:51 has just said that God speaks to no human being except by inspiration, from behind a veil, or by sending a messenger who reveals by His leave what He wills. Then comes wa-kadhalika: and thus. At-Tabari reads the word as a comparison: as We used to reveal to the rest of Our messengers, so We have revealed this Qur'an to you, Muhammad. Al-Baghawi, al-Qurtubi, as-Sa'di and the Muyassar all give the same link, to the prophets who came before.",
            "bn": "সূরাটি শেষ হচ্ছে ওহির কথা দিয়ে। ঠিক আগের আয়াত ৪২:৫১ বলেছে, আল্লাহ কোনো মানুষের সঙ্গে কথা বলেন না, তবে ওহির মাধ্যমে, পর্দার আড়াল থেকে, অথবা এমন দূত পাঠিয়ে, যে তাঁর অনুমতিতে তিনি যা চান তা পৌঁছে দেয়। এরপর আসে ওয়া কাযালিকা: আর এভাবেই। তাবারী শব্দটিকে তুলনা অর্থে নেন: যেভাবে আমি অন্য সব রাসূলের কাছে ওহি পাঠাতাম, হে মুহাম্মাদ, সেভাবেই তোমার কাছে এই কুরআন ওহি করে পাঠিয়েছি। বাগাভী, কুরতুবী, সা'দী ও মুয়াসসার সবাই একই সম্পর্ক টানেন: আগের নবীদের সঙ্গে।"
          },
          {
            "en": "Ma'arif al-Qur'an ties the verse more tightly to the one before it, calling it a complement of that subject. Its gist, in Ma'arif's words: no one in this world has seen God and spoken with Him face to face, but He sends revelation to His chosen servants in the three ways just named, and by the same practice it was sent to the Prophet ﷺ. Ibn Kathir's abridged English commentary treats 42:51 to 42:53 as one passage on how revelation comes down. So 42:51 is the frame; this verse is about what came to the Prophet ﷺ through it.",
            "bn": "মাআরিফুল কুরআন আয়াতটিকে আগেরটির সঙ্গে আরও শক্ত করে জুড়ে দেয়, একে বলে সেই আলোচনারই পরিপূরক। মাআরিফের ভাষায় মূল কথাটা এই: দুনিয়ায় কেউ আল্লাহকে দেখেনি, সামনাসামনি তাঁর সঙ্গে কথাও বলেনি। তবে তিনি তাঁর বাছাই করা বান্দাদের কাছে ওহি পাঠান এইমাত্র বলা তিনটি উপায়ে, আর সেই একই রীতিতে ওহি এসেছে নবী ﷺ-এর কাছেও। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৪২:৫১ থেকে ৪২:৫৩ পর্যন্ত আয়াতগুলো একসঙ্গে পড়ে: ওহি কীভাবে নাজিল হয়, তারই আলোচনা। তাই ৪২:৫১ হলো মূল কাঠামো। আর এ আয়াত বলছে, সেই পথ ধরে নবী ﷺ-এর কাছে কী এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Glosses on Ruh",
          "bn": "রূহ শব্দের ছয় ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Awhayna ilayka ruhan min amrina: We revealed to you a ruh from Our command. What is the ruh here? Al-Baghawi lists the early answers by name. Ibn 'Abbas said prophethood. Al-Hasan said mercy. As-Suddi and Muqatil said revelation. Al-Kalbi said a book. Ar-Rabi' said Jibril. Malik ibn Dinar said it means the Qur'an. Al-Qurtubi gives the same list, adding Qatada beside al-Hasan for mercy and ad-Dahhak beside Malik ibn Dinar for the Qur'an. Neither of them chooses among the six.",
            "bn": "আওহাইনা ইলাইকা রূহাম মিন আমরিনা: আমি তোমার কাছে আমার আদেশ থেকে এক রূহ ওহি করেছি। এখানে রূহ মানে কী? বাগাভী পূর্বসূরিদের উত্তরগুলো নাম ধরে তুলে দেন। ইবন আব্বাস (রাঃ) বলেছেন নবুওয়াত। হাসান বলেছেন রহমত। সুদ্দী ও মুকাতিল বলেছেন ওহি। কালবী বলেছেন কিতাব। রাবী' বলেছেন জিবরীল (আঃ)। মালিক ইবন দীনার বলেছেন, এর অর্থ কুরআন। কুরতুবীও একই তালিকা দেন। তবে রহমত অর্থের পক্ষে হাসানের সঙ্গে তিনি কাতাদার নামও যোগ করেন, আর কুরআন অর্থের পক্ষে মালিক ইবন দীনারের সঙ্গে দাহহাকের নাম। ছয়টি মতের কোনোটিকে তাঁদের কেউই বেছে নেন না।"
          },
          {
            "en": "At-Tabari reports the difference more narrowly, as two camps: al-Hasan, through Qatada, saying mercy from Our command, and as-Suddi saying revelation from Our command. He refers back to his earlier discussion of ruh rather than repeat it, and his own running paraphrase holds both: this Qur'an, revelation and mercy from Our command. Ibn Kathir says simply that it means the Qur'an, and as-Sa'di says it is this noble Qur'an. These are reports, not a ruling; the article leaves the six glosses side by side, as the commentators do.",
            "bn": "তাবারী মতভেদটা আরও সংক্ষেপে দুই দলে দেখান। কাতাদার সূত্রে হাসান বলেছেন, আমার আদেশ থেকে রহমত। সুদ্দী বলেছেন, আমার আদেশ থেকে ওহি। রূহ নিয়ে বিস্তারিত আলোচনা তিনি আগেই করেছেন বলে এখানে আর পুনরাবৃত্তি করেন না। তবে তাঁর নিজের ব্যাখ্যায় দুটোই আছে: এই কুরআন, আমার আদেশ থেকে ওহি ও রহমত। ইবন কাসীর সোজা বলেন, এর অর্থ কুরআন। সা'দীও বলেন, এ হলো এই মহিমান্বিত কুরআন। এগুলো বর্ণনা, কোনো রায় নয়। তাফসীরকারেরা যেমন রেখেছেন, এ লেখাও ছয়টি ব্যাখ্যা পাশাপাশিই রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Life Out of Ignorance",
          "bn": "অজ্ঞতার মৃত্যু থেকে জীবন"
        },
        "p": [
          {
            "en": "Why should revelation be called a spirit at all? As-Sa'di gives the reason in one comparison: the body lives by its ruh, and by the Qur'an hearts and souls come alive, and so do the interests of this world and the religion, because of the abundant good and deep knowledge in it. Al-Qurtubi says it was named ruh because in it there is life from the death of ignorance. Both read the name as a claim about what the Qur'an does to the one who receives it.",
            "bn": "ওহিকে রূহ বলা হলো কেন? সা'দী একটা তুলনা দিয়েই কারণটা বলে দেন। দেহ বাঁচে রূহ দিয়ে, আর কুরআন দিয়ে বাঁচে অন্তর ও আত্মা। দুনিয়া ও দ্বীনের কল্যাণও এতে প্রাণ পায়, কারণ এতে আছে প্রচুর কল্যাণ আর গভীর জ্ঞান। কুরতুবী বলেন, এর নাম রূহ, কারণ অজ্ঞতা এক মৃত্যু, আর এতে আছে সেই মৃত্যু থেকে জীবন। দুজনের কাছেই নামটা আসলে একটা কথা বলে দেয়: যে কুরআন গ্রহণ করে, তার ভেতরে কুরআন কী বদল আনে।"
          },
          {
            "en": "Min amrina, from Our command, al-Qurtubi explains as: He sent it down as He willed, upon whom He willed, in an inimitable arrangement and a wondrous composition. He also reports from al-Qushayri that the ruh asked about in 17:85 could likewise be taken as the Qur'an: they ask where this Qur'an came from, and the answer is that it is from God's command. And he records a saying of Malik ibn Dinar: people of the Qur'an, what has the Qur'an sown in your hearts? The Qur'an is the spring of hearts, as rain is the spring of the earth.",
            "bn": "মিন আমরিনা, আমার আদেশ থেকে। কুরতুবী এর ব্যাখ্যা দেন এভাবে: তিনি যেভাবে চেয়েছেন, যার উপর চেয়েছেন, অলৌকিক বিন্যাস আর বিস্ময়কর গাঁথুনিতে তা নাজিল করেছেন। কুশাইরী থেকে তিনি আরও আনেন, ১৭:৮৫ আয়াতে যে রূহ নিয়ে প্রশ্ন, তাকেও কুরআন অর্থে নেওয়া যায়। তখন প্রশ্নটা দাঁড়ায়: এই কুরআন কোথা থেকে এল? আর উত্তর: এটা আল্লাহর আদেশ থেকে। মালিক ইবন দীনারের একটি কথাও তিনি লিখে রাখেন: হে কুরআনের ধারকেরা, কুরআন তোমাদের অন্তরে কী বুনেছে? বৃষ্টি যেমন মাটির বসন্ত, কুরআন তেমনি অন্তরের বসন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Book Came",
          "bn": "কিতাব আসার আগে"
        },
        "p": [
          {
            "en": "Ma kunta tadri ma-l-kitabu wa la-l-iman: you did not know what the Book was, nor the faith. Each commentator says what the clause leaves out. At-Tabari: you did not know what thing the Book and the faith were which We have given you. Ibn Kathir: in the detail that was laid down for you in the Qur'an. The Muyassar: before it, you did not know the earlier scriptures, nor faith, nor the divine laws. Al-Baghawi: before revelation, the laws of faith and its landmarks.",
            "bn": "মা কুনতা তাদরী মাল কিতাবু ওয়ালাল ঈমান: তুমি জানতে না কিতাব কী, ঈমানও না। বাক্যটির ভেতরে কী উহ্য আছে, প্রত্যেক তাফসীরকার তা খুলে বলেন। তাবারীর ভাষায়: যে কিতাব আর ঈমান আমি তোমাকে দিয়েছি, সেগুলো কী জিনিস, তা তুমি জানতে না। ইবন কাসীর বলেন: কুরআনে তোমার জন্য যে বিস্তারিত বিধান দেওয়া হয়েছে, সেই খুঁটিনাটিসহ তুমি তা জানতে না। মুয়াসসার বলে: এর আগে তুমি আগের কিতাবগুলো জানতে না, ঈমান জানতে না, আল্লাহর শরীয়তও জানতে না। বাগাভী বলেন: ওহির আগে তুমি ঈমানের বিধান আর তার নিদর্শনগুলো জানতে না।"
          },
          {
            "en": "As-Sa'di: you had no knowledge of the reports of earlier scriptures, nor faith in and practice of the divine laws; you were unlettered, neither writing nor reading. Ma'arif al-Qur'an: not knowing the Book before revelation is obvious, and not knowing faith means its details, rules and exalted place, which become known to a prophet only after revelation. Al-Baghawi and al-Qurtubi both report Ibn Khuzayma's narrower view, that faith here means the prayer, citing wa ma kana-llahu li-yudi'a imanakum in 2:143, where faith refers to prayer.",
            "bn": "সা'দী বলেন: আগের কিতাবগুলোর খবর তোমার জানা ছিল না, আল্লাহর শরীয়তের উপর ঈমান ও আমলও ছিল না। তুমি ছিলে উম্মী, লিখতেও না, পড়তেও না। মাআরিফুল কুরআন বলে, ওহির আগে কিতাব না জানার বিষয়টা তো স্পষ্ট। আর ঈমান না জানার অর্থ, ঈমানের খুঁটিনাটি, বিধিবিধান আর তার উঁচু মর্যাদা। এগুলো নবী জানতে পারেন ওহির পরে, আগে নয়। বাগাভী ও কুরতুবী দুজনেই ইবন খুযাইমার একটি সংকীর্ণ মত আনেন: এখানে ঈমান মানে সালাত। প্রমাণ হিসেবে তিনি ২:১৪৩ আয়াতের ওয়া মা কানাল্লাহু লিইউদী'আ ঈমানাকুম আনেন, যেখানে ঈমান বলতে সালাতকে বোঝানো হয়েছে।"
          },
          {
            "en": "Al-Qurtubi gathers still more. From ath-Tha'labi, the laws and landmarks of faith; from al-Qushayri, the details of this shari'a; from Abu-l-'Aliya, how to recite the Qur'an and how to call people to faith; from Bakr al-Qadi, the obligations and rulings, after which he grew in faith through the duties laid on him. Al-Qurtubi calls these four close to each other. He adds that some read the clause as: you were of an unlettered people, so you could not have taken your message from anyone who knew, like 29:48, reported in meaning from Ibn 'Abbas.",
            "bn": "কুরতুবী আরও মত জড়ো করেন। সা'লাবী থেকে: ঈমানের বিধান ও নিদর্শন। কুশাইরী থেকে: এই শরীয়তের খুঁটিনাটি। আবুল আলিয়া থেকে: কীভাবে কুরআন পড়তে হয় আর কীভাবে মানুষকে ঈমানের দিকে ডাকতে হয়। বকর আল-কাদী থেকে: ফরজ ও আহকাম। তাঁর মতে এসব নাজিল হওয়ার পর দায়িত্বের ভার পেয়ে তাঁর ঈমান আরও বেড়েছে। কুরতুবী বলেন, এই চারটি মত কাছাকাছি। তিনি আরেকটি পাঠও আনেন: তুমি ছিলে এক নিরক্ষর জাতির মানুষ, তাই যা নিয়ে এসেছ, তা জ্ঞান রাখে এমন কারও কাছ থেকে নেওয়া তোমার পক্ষে সম্ভব ছিল না। এ কথা ২৯:৪৮ আয়াতের মতোই, আর ইবন আব্বাস (রাঃ) থেকেও ভাবার্থে এমন কথা বর্ণিত আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Believer Before the Mission",
          "bn": "নবুওয়াতের আগেও মুমিন"
        },
        "p": [
          {
            "en": "None of these commentators takes the clause to mean that the Prophet ﷺ lacked faith in God before revelation. Al-Baghawi states that the scholars of usul hold the prophets were believers before revelation, and that the Prophet ﷺ worshipped God before revelation on the religion of Ibrahim (AS), while the laws of his own religion had not yet been made clear to him. Ma'arif al-Qur'an says there is consensus that whoever God chooses as a prophet is given faith from birth, and that no prophet's people ever accused him of idolatry, even before his prophethood.",
            "bn": "এই তাফসীরকারদের কেউই বাক্যটির অর্থ এমন করেন না যে ওহির আগে নবী ﷺ-এর আল্লাহর প্রতি ঈমান ছিল না। বাগাভী বলেন, উসূলের আলেমদের মত হলো, নবীরা ওহির আগেও মুমিন ছিলেন। নবী ﷺ ওহির আগে ইবরাহীম (আঃ)-এর দ্বীনের উপর আল্লাহর ইবাদত করতেন, শুধু নিজের দ্বীনের বিধানগুলো তখনো তাঁর কাছে স্পষ্ট হয়নি। মাআরিফুল কুরআন বলে, এ ব্যাপারে ইজমা আছে যে আল্লাহ যাকে নবী বানান, জন্ম থেকেই তাঁকে ঈমান দেন। কোনো নবীর জাতি কখনো তাঁর বিরুদ্ধে মূর্তিপূজার অভিযোগ তোলেনি, নবুওয়াতের আগেও না।"
          },
          {
            "en": "Al-Qurtubi faces the question directly. He grants that the outward wording could be read to suggest otherwise, then quotes al-Qushayri, who calls it the view of most scholars that God sent no prophet who was not a believer before his mission, though al-Qushayri wants it established by decisive transmission. Al-Qurtubi then quotes al-Qadi 'Iyad: the correct view is that prophets are protected, before prophethood, from ignorance of God and His attributes and from doubt about any of it. His own verdict follows: the sound view is that he ﷺ believed in God from the time he grew up.",
            "bn": "কুরতুবী প্রশ্নটা এড়িয়ে যান না। তিনি মানেন, শব্দের বাহ্যিক রূপ থেকে কেউ উল্টো কিছু বুঝতে পারে। এরপর তিনি কুশাইরীকে উদ্ধৃত করেন। কুশাইরীর মতে অধিকাংশ আলেম এ কথাই বলেছেন যে আল্লাহ এমন কোনো নবী পাঠাননি, যিনি নবুওয়াতের আগে মুমিন ছিলেন না। তবে কুশাইরী চান, কথাটা অকাট্য বর্ণনা দিয়ে প্রমাণিত হোক। তারপর কুরতুবী কাযী ইয়াযের কথা আনেন: সঠিক মত হলো, নবুওয়াতের আগেও নবীরা আল্লাহ ও তাঁর গুণাবলি সম্পর্কে অজ্ঞতা থেকে এবং এ নিয়ে যেকোনো সংশয় থেকে সুরক্ষিত। শেষে তাঁর নিজের রায়: সঠিক কথা হলো, বেড়ে ওঠার সময় থেকেই নবী ﷺ আল্লাহর উপর ঈমান রাখতেন।"
          },
          {
            "en": "Al-Qurtubi also sets out the scholars' views on whether he followed an earlier law before revelation: some denied it outright, Abu-l-Ma'ali withheld judgment, and others said he did, differing over which law. He reports that the imams set these views aside as conflicting and without decisive proof. What is certain, he says, is that his shari'a stands on its own, opened from God, and that he believed in God and never bowed to an idol. On the clause itself he weighs two senses of faith: belief in God, or the religion of Islam, known only after prophethood.",
            "bn": "ওহির আগে তিনি আগের কোনো শরীয়ত মেনে চলতেন কি না, এ নিয়ে আলেমদের মতগুলোও কুরতুবী তুলে ধরেন। কেউ সরাসরি তা অস্বীকার করেছেন। আবুল মাআলী কোনো রায় না দিয়ে থেমে থেকেছেন। আর কেউ বলেছেন মানতেন, তবে কোন শরীয়ত, তা নিয়ে তাঁদের মধ্যে মতভেদ। কুরতুবী জানান, ইমামরা এসব মত গ্রহণ করেননি, কারণ এগুলো পরস্পরবিরোধী আর কোনোটিতেই অকাট্য প্রমাণ নেই। তাঁর মতে নিশ্চিত কথা এটুকু: নবী ﷺ-এর শরীয়ত স্বতন্ত্র, সরাসরি আল্লাহর কাছ থেকে শুরু। তিনি আল্লাহর উপর ঈমান রাখতেন, কখনো কোনো মূর্তিকে সিজদা করেননি। আর বাক্যটির ঈমান শব্দের দুটি অর্থ তিনি বিবেচনা করেন: আল্লাহর উপর ঈমান, অথবা দ্বীন ইসলাম, যা নবুওয়াতের পরেই জানা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Light Made to Guide",
          "bn": "পথ দেখানোর আলো"
        },
        "p": [
          {
            "en": "Wa-lakin ja'alnahu nuran: but We made it a light. Two things were just named, the Book and faith, yet the pronoun is singular. At-Tabari says it refers to the Book, the Qur'an, because the statement is about the Book; others, he reports, said it covers both, kept singular as one says your coming and your going pleases me. Al-Baghawi and al-Qurtubi report Ibn 'Abbas, with ad-Dahhak in al-Qurtubi, saying it means the faith, and as-Suddi saying the Qur'an; al-Qurtubi adds a third view, the revelation. Ibn Kathir reads it as the Qur'an.",
            "bn": "ওয়া লাকিন জা'আলনাহু নূরান: কিন্তু আমি একে বানিয়েছি আলো। ঠিক আগে দুটি জিনিসের নাম এসেছে, কিতাব ও ঈমান, অথচ সর্বনাম একবচন। তাবারী বলেন, এটি কিতাব অর্থাৎ কুরআনকে বোঝায়, কারণ কথাটা কিতাব সম্পর্কেই। তিনি জানান, কেউ কেউ বলেছেন সর্বনামটি দুটোকেই ধরে, তবু একবচন রাখা হয়েছে, যেমন আরবিতে বলা হয়, তোমার আসা আর যাওয়া আমার ভালো লাগে। বাগাভী ও কুরতুবী ইবন আব্বাস (রাঃ) থেকে আনেন যে এর অর্থ ঈমান, কুরতুবী তাঁর সঙ্গে দাহহাককেও রাখেন। সুদ্দী বলেছেন কুরআন। কুরতুবী তৃতীয় একটি মতও আনেন: ওহি। ইবন কাসীর একে কুরআন অর্থে পড়েন।"
          },
          {
            "en": "At-Tabari explains the light as illumination for people, who find their way by the clarity God placed in it, with right conduct for those who act on it and rescue from the Fire. Nahdi bihi man nasha'u, by it We guide whom We will, he glosses as: We direct to the way of what is right, which is faith in God. As-Sa'di says people find their way by it in the darkness of disbelief, innovation and ruinous desire. Ibn Kathir compares 41:44: for those who believe it is guidance and healing, while for those who do not, it is blindness.",
            "bn": "তাবারীর ব্যাখ্যায় এ আলো মানুষের জন্য। আল্লাহ এতে যে স্পষ্টতা রেখেছেন, তার আলোয় মানুষ পথ খুঁজে পায়। যে এর ওপর আমল করে, সে পায় সঠিক পথে চলা আর জাহান্নাম থেকে মুক্তি। নাহদী বিহী মান নাশা', এর দ্বারা যাকে চাই পথ দেখাই। তাবারী এর অর্থ করেন: আমি সঠিক পথের দিকে চালাই, আর সে পথ হলো আল্লাহর উপর ঈমান। সা'দী বলেন, কুফর, বিদআত আর ধ্বংসাত্মক প্রবৃত্তির অন্ধকারে মানুষ এর আলোয় পথ খুঁজে পায়। ইবন কাসীর তুলনা টানেন ৪১:৪৪ আয়াতের সঙ্গে: যারা ঈমান আনে তাদের জন্য এ হেদায়াত ও আরোগ্য, আর যারা ঈমান আনে না তাদের জন্য এ অন্ধত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Guiding by Calling and Explaining",
          "bn": "ডাক আর বয়ানের হেদায়াত"
        },
        "p": [
          {
            "en": "Wa-innaka la-tahdi ila siratin mustaqim: and you surely guide to a straight path. The commentators define the Prophet's guiding by what he does. At-Tabari: you guide Our servants to it by calling them to God and making things clear to them. Al-Baghawi: you call. Al-Qurtubi: you call and direct. The Muyassar: you point the way and direct, by God's leave. As-Sa'di spells it out most fully: you make the path plain and clear to them, light it up and make them want it, forbid them its opposite and warn them of it.",
            "bn": "ওয়া ইন্নাকা লাতাহদী ইলা সিরাতিম মুস্তাকীম: আর তুমি অবশ্যই সরল পথের দিকে পথ দেখাও। নবী ﷺ কীভাবে পথ দেখান, তাফসীরকারেরা তা বোঝান তাঁর কাজের কথা বলে। তাবারী বলেন: আল্লাহর দিকে ডেকে আর তাদের কাছে বিষয়গুলো স্পষ্ট করে তুমি আমার বান্দাদের সে পথ দেখাও। বাগাভী বলেন: তুমি ডাকো। কুরতুবী বলেন: তুমি ডাকো আর পথ বাতলে দাও। মুয়াসসার বলে: আল্লাহর অনুমতিতে তুমি পথ চিনিয়ে দাও আর সঠিক দিকে চালাও। সা'দী সবচেয়ে খুলে বলেন: পথটা তুমি তাদের কাছে স্পষ্ট ও পরিষ্কার করো, আলোকিত করো, তার প্রতি আগ্রহ জাগাও, তার বিপরীত থেকে নিষেধ করো আর সে ব্যাপারে সতর্ক করো।"
          },
          {
            "en": "At-Tabari brings Qatada, who links the phrase to wa li-kulli qawmin had, for every people there is a guide (13:7), a caller who calls them to God; as-Suddi says you call to an upright religion. The path is Islam for at-Tabari, al-Baghawi and the Muyassar; a religion without crookedness for al-Qurtubi, who adds from 'Ali, to an upright book. Ibn Kathir calls it upright conduct. Al-Qurtubi notes the variant reading of Ubayy, la-tad'u, you call, and an-Nahhas's verdict that it is not recited, being against the written text, but read as explanation. Ibn Kathir and as-Sa'di both note that the next verse then explains it: the path of God.",
            "bn": "তাবারী কাতাদার কথা আনেন। কাতাদা এ অংশটিকে জোড়েন ১৩:৭ আয়াতের সঙ্গে: ওয়া লিকুল্লি কাওমিন হাদ, প্রত্যেক জাতির জন্য আছে একজন পথপ্রদর্শক, অর্থাৎ এমন একজন, যিনি তাদের আল্লাহর দিকে ডাকেন। সুদ্দী বলেন, তুমি সরল দ্বীনের দিকে ডাকো। তাবারী, বাগাভী ও মুয়াসসারের কাছে সেই পথ হলো ইসলাম। কুরতুবীর কাছে বক্রতাহীন দ্বীন, আর আলী (রাঃ) থেকে তিনি আনেন: সরল কিতাবের দিকে। ইবন কাসীর একে বলেন সঠিক চরিত্র ও আচরণ। কুরতুবী উবাই (রাঃ)-এর একটি ভিন্ন কিরাআতের কথা বলেন: লাতাদ'উ, অর্থাৎ তুমি ডাকো। নাহহাসের রায়, এটি তিলাওয়াত করা হয় না, কারণ তা মুসহাফের লিখিত রূপের বিপরীত; একে ব্যাখ্যা হিসেবেই পড়তে হয়। ইবন কাসীর ও সা'দী দুজনেই বলেন, পরের আয়াত পথটির ব্যাখ্যা দেয়: আল্লাহর পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports and a Gift",
          "bn": "বর্ণনা আর এক দান"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a sound hadith to this verse. The narrations in Ibn Kathir's abridged commentary belong to 42:51, on the modes of revelation. Al-Qurtubi mentions a further report only to reject it: he cites Ahmad ibn Hanbal and ad-Daraqutni against its chain and calls it munkar, so it is not repeated here. No occasion of revelation for the verse appears in these sources either, and what this article says rests on the commentators' own words.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি। ইবন কাসীরের সংক্ষিপ্ত তাফসীরের বর্ণনাগুলো ৪২:৫১ আয়াতের, ওহির ধরন নিয়ে। কুরতুবী আরেকটি বর্ণনা উল্লেখ করেন কেবল তা প্রত্যাখ্যান করার জন্য: এর সনদের বিরুদ্ধে তিনি ইমাম আহমাদ ইবন হাম্বল ও দারাকুতনীর মত আনেন এবং একে মুনকার বলেন। তাই এখানে বর্ণনাটি পুনরাবৃত্তি করা হলো না। এ আয়াতের কোনো শানে নুযূলও এই উৎসগুলোতে নেই, আর এই লেখার কথাগুলো মুফাসসিরদের নিজেদের বক্তব্যের ওপর দাঁড়িয়ে।"
          },
          {
            "en": "What the verse leaves with a reader is the shape of a gift. As-Sa'di calls the Qur'an pure favour from God to His Messenger and the believers, with no cause on their side. The best of creation is told that the Book and the detail of faith came to him from outside himself. A reader who has the same Book in hand has received it the same way, and is asked to treat it as a spirit that keeps the heart alive and a light that is walked by. Whoever calls others to it is asked to do as the verse describes: call, and make the path clear.",
            "bn": "আয়াতটি শেষে পাঠকের সামনে একটা দানের ছবি রেখে যায়। সা'দী কুরআনকে বলেন রাসূল ও মুমিনদের প্রতি আল্লাহর নিছক অনুগ্রহ; তাদের দিক থেকে এর পেছনে কোনো কারণ ছিল না। সৃষ্টির সেরা মানুষটিকে জানানো হচ্ছে, কিতাব আর ঈমানের খুঁটিনাটি তাঁর নিজের ভেতর থেকে আসেনি, এসেছে বাইরে থেকে। আজ যে পাঠকের হাতে সেই একই কিতাব, তিনিও তা পেয়েছেন একইভাবে। তাই তাঁর কাছে চাওয়া হচ্ছে, কুরআনকে এমন রূহ হিসেবে নিতে, যা অন্তরকে বাঁচিয়ে রাখে, আর এমন আলো হিসেবে, যার আলোয় পথ চলা যায়। আর যিনি অন্যদের এর দিকে ডাকেন, তাঁর কাজও আয়াতে যেমন বলা হয়েছে, তেমনই: ডাকা, আর পথটা স্পষ্ট করে দেওয়া।"
          }
        ]
      }
    ]
  }
});
