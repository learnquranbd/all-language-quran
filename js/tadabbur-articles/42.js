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
          "bn": "ফেটে পড়ার কিনারে আকাশ"
        },
        "p": [
          {
            "en": "Takadu as-samawatu yatafattarna min fawqihinna: the heavens almost break apart from above them. The verse follows 42:4, which closes on He is the Most High, the Most Great, and it shows what that height and greatness nearly do to the heavens. At-Tabari and the Muyassar gloss yatafattarna as yatashaqqaqna, they crack open. As-Suddi, in at-Tabari's report, gives the same gloss and explains munfatirun bihi in 73:18 as split by it. Ad-Dahhak, also through at-Tabari, says yatasadda'na, they fracture.",
            "bn": "তাকাদুস সামাওয়াতু ইয়াতাফাত্তারনা মিন ফাওকিহিন্না: আকাশগুলো উপর থেকে ফেটে পড়ার উপক্রম হয়। এর ঠিক আগের আয়াত ৪২:৪ শেষ হয়েছে এই কথায়: তিনি সর্বোচ্চ, মহান। এবার আয়াত দেখায়, সেই উচ্চতা আর মহত্ত্ব আকাশের কী দশা প্রায় করে ফেলে। তাবারী ও মুয়াসসার ইয়াতাফাত্তারনার অর্থ করেন ইয়াতাশাক্কাকনা, অর্থাৎ ফেটে চৌচির হয়। তাবারীর বর্ণনায় সুদ্দীও একই অর্থ দেন, আর ৭৩:১৮ আয়াতের মুনফাতিরুম বিহী কথাটির ব্যাখ্যা দেন: তাতে বিদীর্ণ। দাহহাকও তাবারীর সূত্রে বলেন ইয়াতাসাদ্দা'না, অর্থাৎ ভেঙে ফাটল ধরে।"
          },
          {
            "en": "Al-Qurtubi records how the words were read. Most read takadu with the letter ta', while Nafi', Ibn Waththab and al-Kisa'i read it with ya'. Yatafattarna, with its middle root letter doubled, is the reading of most; Abu 'Amr, Abu Bakr, al-Mufaddal and Abu 'Ubayd read yanfatirna, from infitar, the word of 82:1, when the sky breaks apart. He adds that he has already explained this under Surah Maryam. In every reading the verb is governed by takada, almost: the heavens are on the verge, and the verse stops there.",
            "bn": "শব্দগুলো কীভাবে পড়া হয়েছে, কুরতুবী তা লিখে রেখেছেন। অধিকাংশ কারী তাকাদু পড়েন 'তা' অক্ষর দিয়ে, আর নাফি', ইবন ওয়াসসাব ও কিসাঈ পড়েন 'ইয়া' দিয়ে। 'ত্বা' অক্ষরে তাশদীদসহ ইয়াতাফাত্তারনা অধিকাংশের পাঠ। আবু আমর, আবু বকর, মুফাদ্দাল ও আবু উবাইদ পড়েন ইয়ানফাতিরনা, ইনফিতার থেকে। ৮২:১ আয়াতে এই শব্দই এসেছে: যখন আকাশ বিদীর্ণ হবে। কুরতুবী জানান, সূরা মারইয়ামে তিনি এর ব্যাখ্যা আগেই দিয়েছেন। যে পাঠই ধরা হোক, ক্রিয়ার আগে বসে আছে তাকাদা, প্রায়। আকাশ কিনারায় এসে দাঁড়িয়েছে, আয়াত সেখানেই থামে।"
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
            "bn": "আকাশ কেন ফেটে পড়ার উপক্রম হবে? তাবারীর নিজের জবাব সংক্ষিপ্ত: জমিনগুলোর উপর থেকে আকাশ প্রায় ফেটে যায় মিন আযামাতির রাহমানি ওয়া জালালিহী, পরম দয়াময়ের মহত্ত্ব ও প্রতাপের কারণে। তিনি জানান, তাফসীরের আলেমরাও এমনই বলেছেন, এবং তাঁদের কথা উদ্ধৃত করেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) বলেছেন: পরম দয়াময়ের ভার ও তাঁর মহত্ত্বের কারণে, তিনি বরকতময়, সুউচ্চ। কাতাদা বলেছেন: আল্লাহর মহত্ত্ব ও প্রতাপের কারণে। দাহহাক বলেছেন: আল্লাহর মহত্ত্বের কারণে আকাশে ফাটল ধরে।"
          },
          {
            "en": "Ibn Kathir names five who said it: Ibn 'Abbas (RA), ad-Dahhak, Qatadah, as-Suddi and Ka'b al-Ahbar, in a short phrase, faraqan min al-'azamah, out of fear, from the greatness; the abridged English renders it out of fear of His might. The Muyassar has from the greatness of the Most Merciful and His majesty. Al-Qurtubi reports ad-Dahhak and as-Suddi: they split from the greatness and majesty of Allah above them. These are the commentators' own words, and the article adds nothing of its own to them about Allah's attributes.",
            "bn": "ইবন কাসীর পাঁচজনের নাম করেন, যাঁরা এ কথা বলেছেন: ইবন আব্বাস (রাঃ), দাহহাক, কাতাদা, সুদ্দী ও কা'ব আল-আহবার। কথাটা ছোট্ট: ফারাকান মিনাল আযামাহ, মহত্ত্বের ভয়ে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে এসেছে: তাঁর পরাক্রমের ভয়ে। মুয়াসসার বলে: পরম দয়াময়ের মহত্ত্ব ও প্রতাপের কারণে। কুরতুবী দাহহাক ও সুদ্দীর কথা আনেন: আল্লাহর মহত্ত্ব ও প্রতাপের কারণে আকাশ ফেটে যায়, ফাওকাহুন্না, তাদের উপরে। এগুলো তাফসীরকারদের নিজেদের ভাষা। আল্লাহর গুণাবলি নিয়ে এ লেখা তাঁদের কথার সঙ্গে নিজের কিছু যোগ করে না।"
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
            "bn": "বাগাভী ভিন্ন এক কারণ দেখান। প্রতিটি আকাশ তার পাশের আকাশের উপর ফেটে পড়ে মিন কাওলিল মুশরিকীন, মুশরিকদের এই কথার কারণে: আল্লাহ সন্তান গ্রহণ করেছেন। এর সমান্তরাল আয়াত হিসেবে তিনি সূরা মারইয়ামের ১৯:৮৮ থেকে ১৯:৯০ উল্লেখ করেন। সেখানে আছে: তারা বলে, পরম দয়াময় সন্তান গ্রহণ করেছেন। তোমরা তো এক জঘন্য কথা নিয়ে এসেছ। এতে আকাশ ফেটে পড়ার উপক্রম হয়, জমিন বিদীর্ণ হয়, পাহাড় ভেঙে ধসে পড়ে। কুরতুবী ইবন আব্বাস (রাঃ) থেকেও এই ব্যাখ্যা বর্ণনা করেন: মুশরিকদের সেই কথার কারণে প্রতিটি আকাশ পরেরটির উপর ফেটে পড়ার উপক্রম হয়।"
          },
          {
            "en": "So one name stands behind two readings. At-Tabari and Ibn Kathir report Ibn 'Abbas (RA) on awe of the greatness; al-Qurtubi reports him on the polytheists' saying. The sources fetched for this verse give both, and this article keeps both without choosing between them. One difference of wording is plain on the page: 19:90 says the heavens almost split minhu, from it, the monstrous saying, while 42:5 says min fawqihinna, from above them. Al-Baghawi still reads the two passages together.",
            "bn": "তাহলে একই নামের পেছনে দুই রকম ব্যাখ্যা। তাবারী ও ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন মহত্ত্বের ভয়ের কথা, আর কুরতুবী তাঁর থেকে আনেন মুশরিকদের কথার ব্যাখ্যা। এ আয়াতের জন্য সংগৃহীত তাফসীরে দুটোই আছে। এ লেখা দুটোই রাখছে, কোনোটিকে বেছে নিচ্ছে না। শব্দের একটা পার্থক্য অবশ্য চোখে পড়ে। ১৯:৯০ আয়াতে আকাশ ফেটে পড়ার উপক্রম মিনহু, তা থেকে, মানে সেই জঘন্য কথা থেকে। আর ৪২:৫ আয়াতে আছে মিন ফাওকিহিন্না, তাদের উপর থেকে। তবু বাগাভী দুই জায়গাকে একসঙ্গে পড়েন।"
          },
          {
            "en": "As-Sa'di reads the verse from its context. The passage has just said that Allah revealed to all the messengers, and to Muhammad ﷺ in particular. In these attributes he sees a pointer: the Qur'an carries proofs of the Creator's perfection that should fill hearts with knowing Him, loving and revering Him, and turn every kind of worship, outward and inward, to Him. Among the greatest wrongs and the foulest speech, he says, is taking rivals to Allah besides Him, who hold neither benefit nor harm and are themselves created, in need of Allah in every state.",
            "bn": "সা'দী আয়াতটি পড়েন তার প্রসঙ্গ থেকে। এর আগেই বলা হয়েছে, আল্লাহ সব রাসূলের কাছে ওহী পাঠিয়েছেন, আর বিশেষ করে মুহাম্মাদ ﷺ-এর কাছে। এরপর এই গুণাবলির উল্লেখে তিনি একটা ইঙ্গিত দেখেন। কুরআনে স্রষ্টার পূর্ণতার এমন সব প্রমাণ আছে, যা হৃদয়কে তাঁর পরিচয়, ভালোবাসা ও সম্মানে ভরে দেয়, আর প্রকাশ্য ও গোপন সব ইবাদত তাঁর দিকেই ফিরিয়ে দেয়। তাঁর ভাষায়, সবচেয়ে বড় জুলুম আর সবচেয়ে জঘন্য কথার একটি হলো আল্লাহকে ছেড়ে তাঁর সমকক্ষ দাঁড় করানো। অথচ তাদের হাতে কোনো উপকার বা ক্ষতি নেই। তারা নিজেরাই সৃষ্টি, সব অবস্থায় আল্লাহর মুখাপেক্ষী।"
          },
          {
            "en": "This needs saying plainly. The verse and these readings describe a saying and weigh it; they license nothing against any living person or community, and give no warrant for contempt, harm or hostility towards anyone who holds such a belief today. The weight falls on words spoken about Allah, and the reader's first use of it is to weigh their own, including the careless words a believer can let slip about his Lord without noticing.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত আর এই ব্যাখ্যাগুলো একটি কথার বর্ণনা দেয়, তার ওজন মাপে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। আজ যে এমন বিশ্বাস রাখে, তাকে অবজ্ঞা করার, ক্ষতি করার বা তার সঙ্গে শত্রুতার কোনো ছাড়পত্রও এখানে নেই। ভারটা পড়ে আল্লাহ সম্পর্কে বলা কথার উপর। পাঠক সেটা প্রথমে কাজে লাগাবেন নিজের কথা মাপতে। মুমিনের মুখ থেকেও রব সম্পর্কে বেখেয়ালে যে কথা বেরিয়ে যায়, সেগুলোও এর মধ্যে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Above Which, Above Whom",
          "bn": "কার উপর, কোন উপর"
        },
        "p": [
          {
            "en": "Min fawqihinna, from above them: above what? The Muyassar answers that each heaven splits above the one next to it; al-Baghawi says the same, as does al-Qurtubi's report from Ibn 'Abbas (RA). At-Tabari reads it as above the earths: the heavens almost crack open from above the earths. Al-Qurtubi gives that view too, under the words it was said, and adds a condition: above the earths, out of khashyah, reverent fear, of Allah, were they among things that reason. The report from ad-Dahhak and as-Suddi ties the phrase to Allah's greatness and majesty.",
            "bn": "মিন ফাওকিহিন্না, তাদের উপর থেকে। কিন্তু কিসের উপর? মুয়াসসারের জবাব: প্রতিটি আকাশ তার পাশের আকাশের উপর ফেটে পড়ে। বাগাভীও তাই বলেন, কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ)-ও তাই। তাবারী অর্থ করেন জমিনগুলোর উপর: জমিনগুলোর উপর থেকে আকাশ ফেটে পড়ার উপক্রম হয়। কুরতুবীও 'বলা হয়েছে' বলে এ মত আনেন, সঙ্গে একটা শর্ত জুড়ে দেন। জমিনগুলোর উপর থেকে, আল্লাহর খাশইয়াত বা ভয়মিশ্রিত শ্রদ্ধায়, যদি আকাশ বোধসম্পন্ন কিছু হতো। আর দাহহাক ও সুদ্দীর বর্ণনা কথাটিকে জুড়ে দেয় আল্লাহর মহত্ত্ব ও প্রতাপের সঙ্গে।"
          },
          {
            "en": "As-Sa'di adds a note on the heavens themselves: they nearly split for all their vastness, and though they are inanimate. Ma'arif al-Qur'an, citing Bayan al-Qur'an, explains the cracking through a hadith it gave earlier in its discussion: the load of angels made the heavens creak, as things creak under too much weight. It infers that angels have bodies, very light, which add up to a great load in their numbers. That hadith's wording is not in the text fetched for this verse, and no fetched tafsir quotes a hadith of the Prophet ﷺ on it, so the article quotes none.",
            "bn": "সা'দী আকাশ নিয়েই একটা কথা যোগ করেন। আকাশ এত বিশাল, তার উপর জড়, তবু তা ফেটে পড়ার উপক্রম হয়। মাআরিফুল কুরআন বয়ানুল কুরআনের বরাতে এই ফাটলের ব্যাখ্যা দেয় এমন এক হাদীস দিয়ে, যার উল্লেখ তার আলোচনায় আগেই এসেছে। ফেরেশতাদের ভারে আকাশ থেকে চড়চড় শব্দ উঠছিল, অতিরিক্ত বোঝা চাপালে যেমন ওঠে। এ থেকে মাআরিফ সিদ্ধান্ত টানে, ফেরেশতাদেরও দেহ আছে। দেহগুলো খুব হালকা, কিন্তু সংখ্যায় বিপুল বলে মিলে বড় বোঝা হয়ে যায়। ওই হাদীসের মূল ভাষ্য এ আয়াতের জন্য সংগৃহীত লেখায় নেই, আর কোনো তাফসীরই এখানে নবী ﷺ-এর কোনো হাদীস উদ্ধৃত করেনি। তাই এ লেখাও কোনো হাদীস উদ্ধৃত করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Glorifying, Marvelling, Submitting",
          "bn": "তাসবীহ, বিস্ময়, বিনয়"
        },
        "p": [
          {
            "en": "Wa-l-mala'ikatu yusabbihuna bi-hamdi rabbihim: and the angels glorify with the praise of their Lord. At-Tabari explains that the angels pray in obedience to their Lord and in thanks to Him, out of awe of His majesty and greatness, and he reports Ibn 'Abbas (RA): they glorify Him from His greatness. The Muyassar says they declare Him free of what does not befit Him. As-Sa'di calls them the noble angels brought near, humbled before His greatness, lowly before His might, yielding to His lordship; they exalt Him above every deficiency and describe Him with every perfection.",
            "bn": "ওয়াল মালাইকাতু ইউসাব্বিহূনা বিহামদি রাব্বিহিম: আর ফেরেশতারা তাঁদের রবের প্রশংসাসহ তাসবীহ পাঠ করেন। তাবারী বলেন, ফেরেশতারা রবের আনুগত্য আর তাঁর প্রতি কৃতজ্ঞতা নিয়ে সালাত আদায় করেন, তাঁর প্রতাপ ও মহত্ত্বের ভয়ে। তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: তাঁর মহত্ত্বের কারণে তাঁরা তাঁর তাসবীহ করেন। মুয়াসসার বলে, যা তাঁর শানে মানায় না, তা থেকে তাঁরা তাঁকে পবিত্র ঘোষণা করেন। সা'দী তাঁদের বলেন সম্মানিত, নৈকট্যপ্রাপ্ত ফেরেশতা। তাঁরা তাঁর মহত্ত্বের সামনে নত, তাঁর পরাক্রমের সামনে বিনীত, তাঁর রুবূবিয়াত মেনে নেওয়া। সব অপূর্ণতা থেকে তাঁরা তাঁকে ঊর্ধ্বে রাখেন, আর তাঁকে বর্ণনা করেন সব পূর্ণতার গুণে।"
          },
          {
            "en": "Al-Qurtubi opens the word further. Tasbih is tanzih, declaring Him free of whatever may not be said of Him or befit His majesty. It was also said that the angels marvel at the boldness of the polytheists, tasbih standing where wonder would. From 'Ali (RA): their tasbih is wonder at what they see of people exposing themselves to Allah's anger. Ibn 'Abbas (RA), in al-Qurtubi's report: their tasbih is submission to what they see of Allah's greatness. As-Suddi glosses bi-hamdi rabbihim as by the command of their Lord. Al-Qurtubi lists these without ranking them.",
            "bn": "কুরতুবী শব্দটার অর্থ আরও খুলে দেখান। তাসবীহ মানে তানযীহ: যা তাঁর বর্ণনায় চলে না, যা তাঁর প্রতাপের সঙ্গে মানায় না, তা থেকে তাঁকে পবিত্র ঘোষণা করা। আরেক মত হলো, মুশরিকদের দুঃসাহস দেখে ফেরেশতারা বিস্মিত হন, আর বিস্ময়ের জায়গায় তাসবীহ উচ্চারিত হয়। আলী (রাঃ) থেকে বর্ণিত: মানুষ কীভাবে আল্লাহর ক্রোধের মুখে নিজেকে ঠেলে দিচ্ছে, তা দেখে বিস্ময়ই তাঁদের তাসবীহ। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন: আল্লাহর যে মহত্ত্ব তাঁরা দেখেন, তার সামনে নত হওয়াই তাঁদের তাসবীহ। সুদ্দী বিহামদি রাব্বিহিমের অর্থ করেন: তাঁদের রবের নির্দেশে। কুরতুবী মতগুলো পাশাপাশি রাখেন, কোনোটিকে এগিয়ে দেন না।"
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
            "en": "Wa yastaghfiruna li-man fi-l-ard: and they ask forgiveness for whoever is on earth. The wording is general, and most of the fetched sources narrow it. At-Tabari says they ask their Lord to forgive the sins of those on earth from among the people of faith in Him, and he reports as-Suddi: for the believers. The Muyassar uses at-Tabari's phrase, al-Baghawi adds from among the believers, and al-Qurtubi reports the same from ad-Dahhak and as-Suddi. On this reading, those on earth are the believers among them.",
            "bn": "ওয়া ইয়াসতাগফিরূনা লিমান ফিল আরদ: আর তাঁরা পৃথিবীতে যারা আছে তাদের জন্য ক্ষমা চান। শব্দগুলো সবার জন্য খোলা, কিন্তু সংগৃহীত তাফসীরের বেশিরভাগ একে সীমিত করে। তাবারী বলেন, পৃথিবীবাসীর মধ্যে যারা আল্লাহর প্রতি ঈমান এনেছে, তাদের গুনাহ মাফের জন্য ফেরেশতারা রবের কাছে আবেদন করেন। সুদ্দীর কথাও তিনি আনেন: মুমিনদের জন্য। মুয়াসসার তাবারীর কথাটাই ব্যবহার করে। বাগাভী জুড়ে দেন: মুমিনদের মধ্য থেকে। কুরতুবী দাহহাক ও সুদ্দী থেকে একই কথা বর্ণনা করেন। এই পাঠে পৃথিবীবাসী মানে তাদের মধ্যকার মুমিনরা।"
          },
          {
            "en": "The narrowing leans on a sister verse. Ibn Kathir sets the clause beside 40:7: those who bear the Throne and those around it glorify the praise of their Lord, believe in Him and ask forgiveness for those who believe. Al-Qurtubi calls 40:7 its explanation, and says that on this reading the angels here are the Throne-bearers, whose prayer for the believers runs on into 40:8. It was also said, he notes, that all the angels of heaven are meant, and that is the apparent sense of al-Kalbi's words.",
            "bn": "এই সীমিত পাঠের ভিত্তি আরেকটি আয়াত। ইবন কাসীর বাক্যাংশটিকে ৪০:৭ আয়াতের পাশে রাখেন: যারা আরশ বহন করে আর যারা তার চারপাশে আছে, তারা রবের প্রশংসাসহ তাসবীহ পাঠ করে, তাঁর প্রতি ঈমান রাখে আর মুমিনদের জন্য ক্ষমা চায়। কুরতুবী ৪০:৭ আয়াতকে এর ব্যাখ্যা বলেন। তাঁর মতে, এই পাঠে এখানকার ফেরেশতারা আরশবাহক, মুমিনদের জন্য যাঁদের দোয়া ৪০:৮ আয়াত পর্যন্ত গড়ায়। তিনি এটাও জানান, কারও মতে আসমানের সব ফেরেশতাই এখানে উদ্দেশ্য, আর কালবীর কথার বাহ্যিক অর্থ এটাই।"
          },
          {
            "en": "Was the general wording then cancelled? Wahb ibn Munabbih said this verse was abrogated by 40:7. Al-Mahdawi answered that the sound view is that it is not abrogated, because it is a report, khabar, and it is specific to the believers. Ibn al-Hassar rejected the abrogation claim from another side: the Throne-bearers are singled out to ask forgiveness for the believers alone, while Allah has other angels who ask forgiveness for those on earth. Al-Qurtubi records all three, so two answers to the same question stand in his text.",
            "bn": "তাহলে কি সাধারণ শব্দটা বাতিল হয়ে গেছে? ওয়াহব ইবন মুনাব্বিহ বলেছেন, ৪০:৭ আয়াত দিয়ে এ আয়াত মানসূখ হয়েছে। মাহদাভী জবাব দেন, সঠিক কথা হলো এটি মানসূখ নয়। কারণ এটি খবর, অর্থাৎ সংবাদ, আর এটি মুমিনদের জন্যই নির্দিষ্ট। ইবনুল হাসসার মানসূখের দাবি নাকচ করেন অন্য দিক থেকে। আরশবাহকরা কেবল মুমিনদের জন্য ক্ষমা চাওয়ার দায়িত্বে নির্দিষ্ট, আর আল্লাহর অন্য ফেরেশতারাও আছেন, যাঁরা পৃথিবীবাসীর জন্য ক্ষমা চান। কুরতুবী তিনটি কথাই লিখে রাখেন। ফলে একই প্রশ্নের দুই রকম জবাব তাঁর লেখায় পাশাপাশি থাকে।"
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
            "bn": "কুরতুবী মুতাররিফের কথা আনেন: আল্লাহর বান্দাদের প্রতি আল্লাহর বান্দাদের মধ্যে সবচেয়ে কল্যাণকামী পেয়েছি ফেরেশতাদের, আর সবচেয়ে প্রতারক পেয়েছি শয়তানদের। তাহলে ফেরেশতারা চান কী? কুরতুবী এখানে মাওয়ার্দীর দুটি মত তুলে ধরেন। একটি হলো গুনাহ ও ভুলত্রুটির ক্ষমা, মুকাতিলের কথার বাহ্যিক অর্থ এটাই। অন্যটি কালবীর: তাদের জন্য রিযিক আর সচ্ছলতা চাওয়া। কুরতুবী বলেন, দ্বিতীয়টাই তাঁর কাছে বেশি স্পষ্ট। কারণ পৃথিবীতে কাফির আর অন্যরা সবাই আছে, অথচ মুকাতিলের মতে কাফির এর মধ্যে পড়ে না।"
          },
          {
            "en": "Yet he then relates a saying of Salman (RA), not of the Prophet ﷺ, through 'Asim al-Ahwal from Abu 'Uthman, and gives it no grading. When a servant who remembered Allah in ease is struck by hardship, the angels say: a known voice, from a weak human who remembered Allah in ease; and they ask forgiveness for him. When one who did not remember Allah in ease is struck, they call it an unfamiliar voice and do not ask for him. Al-Qurtubi concludes that the verse is then about those who remember Allah in ease and hardship, some of the believers, and adds: Allah knows best.",
            "bn": "কিন্তু এরপর তিনি সালমান (রাঃ)-এর একটি কথা বর্ণনা করেন। কথাটি নবী ﷺ-এর নয়, সালমানের। সূত্র আসিম আল-আহওয়াল, আবু উসমান থেকে, আর কুরতুবী এর কোনো মান উল্লেখ করেননি। যে বান্দা সুখের দিনে আল্লাহকে স্মরণ করত, বিপদে পড়লে ফেরেশতারা বলেন: চেনা কণ্ঠ, এক দুর্বল আদমসন্তানের, যে সুখের দিনে আল্লাহকে স্মরণ করত। তখন তাঁরা তার জন্য ক্ষমা চান। আর যে সুখের দিনে স্মরণ করত না, বিপদে পড়লে তাঁরা বলেন অচেনা কণ্ঠ, তার জন্য ক্ষমা চান না। কুরতুবীর সিদ্ধান্ত, তাহলে আয়াতটি সুখে-দুঃখে আল্লাহকে স্মরণকারীদের নিয়ে, অর্থাৎ মুমিনদের একাংশকে নিয়ে। সঙ্গে বলেন: আল্লাহই ভালো জানেন।"
          },
          {
            "en": "A third possibility he takes from az-Zamakhshari: that by istighfar they mean asking forbearance and pardon, as in 35:41, Allah holds the heavens and the earth lest they cease, and He is Forbearing, Forgiving, and in 13:6, your Lord is full of forgiveness for people despite their wrongdoing. The meaning is forbearance towards them and not hastening retribution, and the verse is then general. Ma'arif al-Qur'an reads it close to this: for disbelievers the plea is that no severe worldly scourge destroy them all; it does not reach the Hereafter, and Allah accepts it.",
            "bn": "তৃতীয় সম্ভাবনাটি তিনি নেন যামাখশারী থেকে। ইস্তিগফার বলতে ফেরেশতারা হয়তো চান সহনশীলতা আর ক্ষমা, যেমন ৩৫:৪১ আয়াতে আছে: আল্লাহ আকাশ ও জমিনকে ধরে রাখেন যাতে টলে না যায়, তিনি সহনশীল, ক্ষমাশীল। আর ১৩:৬ আয়াতে: মানুষের জুলুম সত্ত্বেও আপনার রব তাদের প্রতি ক্ষমাশীল। মানে তাদের সঙ্গে সহনশীল থাকা, শাস্তিতে তাড়াহুড়া না করা। তখন আয়াত সবার জন্য। মাআরিফুল কুরআনের পাঠও কাছাকাছি। কাফিরদের বেলায় দোয়াটা এই যে কোনো ভয়াবহ দুনিয়াবি আযাব যেন সবাইকে ধ্বংস না করে। আখিরাত এর মধ্যে পড়ে না, আর আল্লাহ এ দোয়া কবুল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe First, Then Good News",
          "bn": "আগে ভয়, পরে সুসংবাদ"
        },
        "p": [
          {
            "en": "Ala inna Allaha huwa al-ghafuru ar-rahim: truly, Allah is the Forgiving, the Merciful. Ibn Kathir calls it an announcement of this and a drawing of attention to it. At-Tabari: Forgiving of the sins of His believing servants, Merciful to them in not punishing them after they repent; the Muyassar has the same without the clause on repenting. As-Sa'di: were it not for His forgiveness and mercy, He would hasten upon creation a punishment that uproots them. Ma'arif al-Qur'an: Allah alone is the Forgiver and the Merciful.",
            "bn": "আলা ইন্নাল্লাহা হুওয়াল গাফূরুর রাহীম: জেনে রাখো, আল্লাহই ক্ষমাশীল, পরম দয়ালু। ইবন কাসীর বলেন, এ হলো বিষয়টির ঘোষণা আর সেদিকে মনোযোগ টানা। তাবারীর ব্যাখ্যা: তিনি মুমিন বান্দাদের গুনাহ ক্ষমা করেন, আর তওবার পর তাদের শাস্তি না দিয়ে তাদের প্রতি দয়া করেন। মুয়াসসারেও একই কথা, শুধু তওবার অংশটুকু নেই। সা'দী বলেন, তাঁর ক্ষমা ও দয়া না থাকলে তিনি সৃষ্টিকে দ্রুতই এমন শাস্তি দিতেন, যা তাদের মূলসহ উপড়ে ফেলত। মাআরিফুল কুরআন বলে: আল্লাহ, একমাত্র আল্লাহই ক্ষমাকারী ও দয়ালু।"
          },
          {
            "en": "Al-Qurtubi ends with the words of some scholars: He inspired awe and magnified Himself at the beginning, and was gentle and gave good news at the end. The verse moves that way. It opens on heavens near breaking, passes through angels who glorify and ask on behalf of the people below, and closes on two names of pardon and mercy. The reader stands among those on earth, under heavens that hold, and is told at the end where to turn.",
            "bn": "কুরতুবী শেষ করেন কয়েকজন আলেমের কথায়: শুরুতে তিনি ভয় জাগিয়েছেন, নিজের মহত্ত্ব দেখিয়েছেন, আর শেষে কোমলতা দেখিয়েছেন, সুসংবাদ দিয়েছেন। আয়াতের গতিও তেমনই। শুরু ফেটে পড়ার কিনারে থাকা আকাশ দিয়ে। মাঝখানে ফেরেশতারা, যাঁরা তাসবীহ পড়েন আর নিচের মানুষদের জন্য আবেদন করেন। শেষ ক্ষমা ও দয়ার দুটি নামে। পাঠক দাঁড়িয়ে আছেন পৃথিবীবাসীদের মধ্যে, যে আকাশ ভেঙে পড়েনি তার নিচে। আর শেষ কথায় তাঁকে জানিয়ে দেওয়া হয়, কার দিকে ফিরতে হবে।"
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
            "bn": "ওয়া কাযালিকা আওহাইনা ইলাইকা কুরআনান আরাবিয়্যা: আর এভাবেই আমি তোমার প্রতি আরবী কুরআন ওয়াহী করেছি। 'এভাবেই' শব্দটা পেছনের দিকে তাকায়। ইবন কাসীর ও মুয়াসসার এর অর্থ করেন: তোমার আগের নবীদের প্রতি যেভাবে ওয়াহী পাঠিয়েছি, সেভাবেই তোমার প্রতিও পাঠিয়েছি। এতে ৪২:৩ আয়াতের কথাটা আবার ফিরে আসে, যেখানে আল্লাহ তোমার প্রতি আর তোমার পূর্ববর্তীদের প্রতি ওয়াহী পাঠান। কুরতুবীর ব্যাখ্যাও একই রকম। বাগাভী সংক্ষেপে বলেন: যেমনটা আমি উল্লেখ করেছি।"
          },
          {
            "en": "Why Arabic? At-Tabari answers from the audience. The people to whom the Prophet ﷺ was sent were Arabs, so the Qur'an came in their tongue, that they might understand the proofs of Allah and the reminder in it, for no messenger is sent except in the tongue of his people, to make things clear to them; that is the wording of 14:4. Al-Qurtubi gives the same reason. Ibn Kathir glosses 'arabiyyan as plain and clear, and as-Sa'di calls this clear Arabic Qur'an a favour upon the Messenger and upon people. 41:3 has already called it an Arabic Qur'an for a people who know.",
            "bn": "আরবী কেন? তাবারী উত্তর দেন শ্রোতাদের দিক থেকে। নবী ﷺ যাদের কাছে প্রেরিত হয়েছিলেন, তারা ছিল আরব। তাই কুরআন এসেছে তাদের ভাষায়, যাতে এর ভেতরের আল্লাহর দলিল-প্রমাণ আর উপদেশ তারা বুঝতে পারে। কারণ প্রত্যেক রাসূলকে পাঠানো হয় তাঁর কওমের ভাষায়, যাতে তিনি তাদের কাছে পরিষ্কার করে বলতে পারেন। এ কথাটা ১৪:৪ আয়াতের শব্দ। কুরতুবীও একই কারণ দেন। ইবন কাসীর আরাবিয়্যান শব্দের ব্যাখ্যা করেন সুস্পষ্ট ও পরিষ্কার। সা'দী এই স্পষ্ট আরবী কুরআনকে বলেন রাসূলের প্রতি আর মানুষের প্রতি আল্লাহর অনুগ্রহ। ৪১:৩ আয়াত আগেই একে বলেছে জ্ঞানী সম্প্রদায়ের জন্য আরবী কুরআন।"
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
            "en": "Li-tundhira umm al-qura: that you may warn the Mother of Towns. Every fetched commentator names it as Makkah, and at-Tabari carries the identification from as-Suddi in a single word: Makkah. Two of them add a quiet correction to how the phrase is heard. Al-Baghawi says it means its people, and the Muyassar writes that you may warn the people of Makkah.",
            "bn": "লিতুনযিরা উম্মাল কুরা: যাতে তুমি জনপদের জননীকে সতর্ক করো। যত তাফসীর আনা হয়েছে, সবগুলোতেই এর অর্থ মক্কা। তাবারী সুদ্দী থেকে এক শব্দেই কথাটা উদ্ধৃত করেন: মক্কা। দুজন তাফসীরকার এখানে একটা সূক্ষ্ম সংশোধন যোগ করেন। বাগাভী বলেন, উদ্দেশ্য মক্কার অধিবাসীরা। মুয়াসসারও লেখে, যাতে তুমি মক্কাবাসীদের সতর্ক করো।"
          },
          {
            "en": "Why mother? The fetched texts give three answers. Ibn Kathir says Makkah was named the Mother of Towns because it is nobler than all other lands, for many proofs mentioned in their places. Al-Qurtubi records, under the words it is said, that it was called so because the earth was spread out from beneath it. Ma'arif al-Qur'an explains the title as origin and foundation of all habitations and cities, given because to Allah it is more distinguished than every other city and the whole earth.",
            "bn": "জননী কেন? আনা তাফসীরগুলো তিনটি উত্তর দেয়। ইবন কাসীর বলেন, মক্কার নাম উম্মুল কুরা, কারণ অন্য সব ভূখণ্ডের চেয়ে এর মর্যাদা বেশি। এর বহু প্রমাণ আছে, যা যথাস্থানে আলোচিত হয়েছে। কুরতুবী 'বলা হয়' কথাটি দিয়ে উল্লেখ করেন, মক্কাকে এ নাম দেওয়া হয়েছে কারণ পৃথিবীকে এর নিচ থেকে বিছিয়ে দেওয়া হয়েছিল। মাআরিফুল কুরআন উপাধিটির ব্যাখ্যা করে সব জনবসতি আর শহরের মূল ও ভিত্তি হিসেবে। এ উপাধি দেওয়া হয়েছে, কারণ আল্লাহর কাছে মক্কা অন্য সব শহর, এমনকি গোটা পৃথিবীর চেয়েও বেশি সম্মানিত।"
          },
          {
            "en": "Ibn Kathir calls one proof the most concise and the clearest. At-Tirmidhi records it in his Jami' (3925) from 'Abdullah ibn 'Adi ibn Hamra' az-Zuhri: \"I saw the Messenger of Allah ﷺ standing at Al-Hazwarah, and he said: By Allah! You are the best of Allah's earth, and the most beloved of Allah's earth to Allah, and if it were not that I was expelled from you I would not have left.\" At-Tirmidhi grades it hasan sahih gharib. Al-Hazwarah, Ibn Kathir notes, was in the market of Makkah.",
            "bn": "ইবন কাসীর একটি প্রমাণকে বলেন সবচেয়ে সংক্ষিপ্ত আর সবচেয়ে স্পষ্ট। তিরমিযী তাঁর জামি' গ্রন্থে (৩৯২৫) আব্দুল্লাহ ইবন আদী ইবন হামরা আয-যুহরী (রাঃ) থেকে তা বর্ণনা করেছেন: \"আমি আল্লাহর রাসূল ﷺ-কে হাযওয়ারায় দাঁড়িয়ে থাকতে দেখলাম। তিনি বললেন: আল্লাহর কসম! তুমি আল্লাহর জমিনের সবচেয়ে উত্তম অংশ, আর আল্লাহর কাছে তাঁর জমিনের সবচেয়ে প্রিয় অংশ। আমাকে যদি তোমার কাছ থেকে বের করে দেওয়া না হতো, আমি কখনো বের হতাম না।\" তিরমিযী একে হাসান সহীহ গরীব বলেছেন। ইবন কাসীর জানান, হাযওয়ারা ছিল মক্কার বাজারে।"
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
            "bn": "ওয়া মান হাওলাহা: আর তার চারপাশে যারা আছে। এখানে তাফসীরকারেরা বৃত্তটা আঁকেন ভিন্ন ভিন্ন মাপে। সা'দী প্রথমে সংকীর্ণ অর্থ নেন: মক্কার চারপাশের আরব জনপদগুলো। তারপর তিনি দ্বিতীয় ধাপ যোগ করেন। এরপর এ সতর্কবার্তা ছড়িয়ে পড়ে সমগ্র সৃষ্টির কাছে। মাআরিফুল কুরআন পুরো পরিসরটাই তুলে ধরে। শব্দটির অর্থ মক্কার আশপাশের এলাকা। আবার এর অর্থ হতে পারে প্রতিবেশী আরব ভূখণ্ড, এমনকি পূর্ব থেকে পশ্চিম পর্যন্ত গোটা পৃথিবী।"
          },
          {
            "en": "The others read the circle as wide from the first word. At-Tabari: around the Mother of Towns, of all people. The Muyassar keeps his phrase, all people. Al-Qurtubi: of all creation. Ibn Kathir: all the lands, east and west. Al-Baghawi: the villages of the whole earth. So for as-Sa'di the warning widens in two steps, while for these five it is already in the words around it.",
            "bn": "বাকিরা শুরু থেকেই বৃত্তটাকে প্রশস্ত ধরেন। তাবারী বলেন: উম্মুল কুরার চারপাশের সব মানুষ। মুয়াসসার তাঁর কথাটাই রাখে: সব মানুষ। কুরতুবীর মতে সমগ্র সৃষ্টি। ইবন কাসীরের মতে পূর্ব-পশ্চিমের সব দেশ। বাগাভীর মতে গোটা পৃথিবীর জনপদ। অর্থাৎ সা'দীর কাছে সতর্কবার্তা দুই ধাপে প্রসারিত হয়, আর এই পাঁচজনের কাছে প্রসারটা 'চারপাশ' শব্দেই আছে।"
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
            "bn": "ওয়া তুনযিরা ইয়াওমাল জাম': আর যাতে তুমি একত্র হওয়ার দিন সম্পর্কে সতর্ক করো। ক্রিয়াটি দ্বিতীয়বার এসেছে, আর এবার এর লক্ষ্য কোনো জনগোষ্ঠী নয়, একটা দিন। তাবারী ব্যাখ্যা করেন: সেই দিনের আল্লাহর শাস্তি সম্পর্কে তুমি সতর্ক করবে, যেদিন তিনি তাঁর বান্দাদের হিসাব আর উপস্থাপনের জন্য দাঁড় করাতে একত্র করবেন। সুদ্দী থেকে তিনি উদ্ধৃত করেন: কিয়ামতের দিন। মুয়াসসারও সতর্কবার্তাকে সম্পর্কিত করে একত্র হওয়ার দিনের শাস্তির সঙ্গে, আর সেটা কিয়ামতের দিন।"
          },
          {
            "en": "At-Tabari also reports a reading from the grammar: the meaning is you warn them of the Day of Gathering, the people being understood and left unsaid. He compares 3:175, yukhawwifu awliya'ahu, which he takes to mean that he frightens you of his allies, where again the person frightened is not named. Al-Qurtubi supplies a preposition instead: you warn of the Day, bi-yawm al-jam'. Al-Baghawi puts both together: you warn them of the Day of Gathering, which is the Day of Resurrection.",
            "bn": "তাবারী ব্যাকরণের দিক থেকে আরেকটি ব্যাখ্যাও উল্লেখ করেন। অর্থ হলো, তুমি তাদেরকে একত্র হওয়ার দিন সম্পর্কে সতর্ক করো। কাদের, তা বোঝা যায় বলে উল্লেখ করা হয়নি। তিনি তুলনা দেন ৩:১৭৫ আয়াতের সঙ্গে: ইউখাওয়িফু আওলিয়াআহু। তাঁর মতে এর অর্থ, সে তোমাদেরকে তার বন্ধুদের ভয় দেখায়। সেখানেও যাকে ভয় দেখানো হচ্ছে, তার উল্লেখ নেই। কুরতুবী বরং একটি অব্যয় যোগ করে পড়েন: বি-ইয়াওমিল জাম', অর্থাৎ সেই দিন সম্পর্কে সতর্ক করো। বাগাভী দুটোকে একসঙ্গে মেলান: তুমি তাদেরকে একত্র হওয়ার দিন সম্পর্কে সতর্ক করো, আর সেটা কিয়ামতের দিন।"
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
            "bn": "কারা একত্র হবে? ইবন কাসীর বলেন: সেদিন আল্লাহ পূর্ববর্তী ও পরবর্তী সবাইকে এক প্রান্তরে জমা করবেন, ফী সাঈদিন ওয়াহিদ। সা'দীও একই জোড়া ব্যবহার করেন: পূর্ববর্তী ও পরবর্তী। বাগাভী পরিধিটা আরও বাড়ান: পূর্ববর্তী ও পরবর্তী, আসমানের অধিবাসী আর জমিনসমূহের অধিবাসী। এরপর ইবন কাসীর এর পাশে রাখেন ৬৪:৯ আয়াত: যেদিন তিনি তোমাদের একত্র করবেন একত্র হওয়ার দিনের জন্য, সেটা তাগাবুনের দিন। তাঁর ব্যাখ্যায়, সেদিন জান্নাতবাসীরা জাহান্নামবাসীদের উপর জিতে যাবে।"
          },
          {
            "en": "His second parallel is 11:103 to 11:105: a Day for which people will be gathered, a Day witnessed, delayed only for a counted term, on which no soul speaks except by His leave, and among them are the wretched and the happy. Then la rayba fihi, no doubt in it. Ibn Kathir: no doubt that it will happen; it is coming without fail. Al-Baghawi joins this clause to the next: no doubt that the gathering will be, and after the gathering they part.",
            "bn": "তাঁর দ্বিতীয় তুলনা ১১:১০৩ থেকে ১১:১০৫ আয়াত। সেদিনের জন্য মানুষকে একত্র করা হবে, সেদিন সবাই উপস্থিত থাকবে। নির্দিষ্ট মেয়াদ পর্যন্তই শুধু তা পিছিয়ে রাখা হয়েছে। সেদিন তাঁর অনুমতি ছাড়া কেউ কথা বলবে না, আর তাদের মধ্যে কেউ হতভাগা, কেউ সৌভাগ্যবান। তারপর লা রাইবা ফীহ: তাতে কোনো সন্দেহ নেই। ইবন কাসীর বলেন, তা ঘটবেই, এতে কোনো সন্দেহ নেই, তা আসবেই। বাগাভী এ অংশকে পরের অংশের সঙ্গে জুড়ে দেন: একত্র হওয়া নিশ্চিত, আর একত্র হওয়ার পর তারা আলাদা হয়ে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Crowd Divides",
          "bn": "তারপর ভিড় দুই ভাগ"
        },
        "p": [
          {
            "en": "Fariqun fi-l-jannati wa fariqun fi-s-sa'ir: a party in Paradise and a party in the Blaze. At-Tabari says fariqun is nominative because a new sentence begins here, and gives a parallel: I saw the army, killed or routed, meaning some of them killed and some routed. So the sense is, of them a party in Paradise. Al-Qurtubi calls it subject and predicate, and adds that al-Kisa'i allowed the accusative, reading it as: that you may warn a party in Paradise and a party in the Blaze.",
            "bn": "ফারীকুন ফিল জান্নাতি ওয়া ফারীকুন ফিস সাঈর: এক দল জান্নাতে, আর এক দল জ্বলন্ত আগুনে। তাবারী বলেন, ফারীকুন শব্দে পেশ, কারণ এখান থেকে নতুন বাক্য শুরু হয়েছে। তিনি একটা দৃষ্টান্ত দেন। কেউ বলল, আমি সেনাদলকে দেখলাম, নিহত অথবা পরাজিত। মানে, তাদের কেউ নিহত, কেউ পরাজিত। তাই অর্থ দাঁড়ায়: তাদের মধ্যে এক দল জান্নাতে। কুরতুবী একে বলেন উদ্দেশ্য ও বিধেয়। সঙ্গে জানান, কিসাঈ যবর দিয়ে পড়াও বৈধ বলেছেন। তখন অর্থ হবে: যাতে তুমি জান্নাতের এক দলকে আর জ্বলন্ত আগুনের এক দলকে সতর্ক করো।"
          },
          {
            "en": "Who are the two parties? At-Tabari answers by belief and following: in Paradise are those who believed in Allah and followed what His Messenger brought them; in the Blaze are those who disbelieved in Allah and opposed what His Messenger brought them. He describes as-sa'ir as the fire of Allah, kindled against its people. The Muyassar uses nearly the same words and names the Messenger as Muhammad ﷺ. As-Sa'di: those who believed in Allah and affirmed the messengers, and the kinds of disbelievers who denied.",
            "bn": "দুটি দল কারা? তাবারী উত্তর দেন ঈমান আর অনুসরণের ভিত্তিতে। জান্নাতে তারা, যারা আল্লাহর প্রতি ঈমান এনেছে আর তাঁর রাসূল যা নিয়ে এসেছেন তার অনুসরণ করেছে। জ্বলন্ত আগুনে তারা, যারা আল্লাহকে অস্বীকার করেছে আর রাসূলের আনা বিষয়ের বিরোধিতা করেছে। সাঈর সম্পর্কে তিনি বলেন, আল্লাহর আগুন, যা তার অধিবাসীদের উপর প্রজ্বলিত। মুয়াসসার প্রায় একই শব্দ ব্যবহার করে, আর রাসূলের নাম উল্লেখ করে মুহাম্মাদ ﷺ। সা'দীর ভাষায়: যারা আল্লাহর প্রতি ঈমান এনেছে ও রাসূলদের সত্য বলে মেনেছে, আর অস্বীকারকারী কাফিরদের নানা শ্রেণি।"
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
            "bn": "ইবন কাসীর, তাবারী ও বাগাভী তিনজনই এ অংশে আব্দুল্লাহ ইবন আমর (রাঃ)-এর একটি বর্ণনা আনেন। তিরমিযী তাঁর জামি' গ্রন্থে (২১৪১) যে শব্দে এনেছেন, পুরোটা এখানে দেওয়া হলো। শুরুটা এমন: \"আব্দুল্লাহ ইবন আমর (রাঃ) বলেন: আল্লাহর রাসূল ﷺ আমাদের কাছে বেরিয়ে এলেন, তাঁর হাতে দুটি কিতাব। তিনি বললেন: তোমরা কি জানো, এ দুটি কিতাব কী? আমরা বললাম: না, হে আল্লাহর রাসূল, আপনি না জানালে আমরা জানি না।\""
          },
          {
            "en": "\"He said about the one that was in his right hand: 'This is a book from the Lord of the worlds, in it are the names of the people of Paradise, and the name of their fathers and their tribes. Then there is a summary at the end of them, there being no addition to them nor deduction from them forever.'",
            "bn": "\"ডান হাতেরটি সম্পর্কে তিনি বললেন: এটি জগতসমূহের রবের পক্ষ থেকে একটি কিতাব। এতে আছে জান্নাতবাসীদের নাম, তাদের পিতাদের নাম আর তাদের গোত্রের নাম। তারপর শেষে তাদের মোট সংখ্যা লিখে দেওয়া হয়েছে। তাদের মধ্যে কখনো কাউকে যোগও করা হবে না, বাদও দেওয়া হবে না।"
          },
          {
            "en": "\"Then he said about the one that was in his left: 'This is a book from the Lord of the worlds, in it are the names of the people of Fire, and the name of their fathers and their tribes. Then there is a summary at the end of them, there being no addition to them nor deduction from them forever.'\"",
            "bn": "\"তারপর বাঁ হাতেরটি সম্পর্কে বললেন: এটি জগতসমূহের রবের পক্ষ থেকে একটি কিতাব। এতে আছে জাহান্নামবাসীদের নাম, তাদের পিতাদের নাম আর তাদের গোত্রের নাম। তারপর শেষে তাদের মোট সংখ্যা লিখে দেওয়া হয়েছে। তাদের মধ্যে কখনো কাউকে যোগও করা হবে না, বাদও দেওয়া হবে না।\""
          },
          {
            "en": "\"The companions said: 'So why work O Messenger of Allah! Since the matter is already decided (and over)?' He said: 'Seek to do what is right and draw nearer, for indeed the inhabitant of Paradise shall have his work sealed off with the deeds of the people of Paradise, whichever deeds he did. And indeed the inhabitant of Fire shall have his work sealed off with the deeds of the people of Fire, whichever deeds he did.' Then the Messenger of Allah motioned with his hands, casting them down and said: 'Your Lord finished with the slaves, a group in Paradise, and a group in the Blazing Fire.'\"",
            "bn": "\"সাহাবীরা বললেন: হে আল্লাহর রাসূল, বিষয়টা যদি আগেই চূড়ান্ত হয়ে গিয়ে থাকে, তবে আমল কিসের জন্য? তিনি বললেন: সঠিক পথে থাকো আর তার কাছাকাছি থাকো। কারণ জান্নাতবাসীর আমল শেষ হবে জান্নাতবাসীদের আমল দিয়ে, আগে সে যে আমলই করে থাকুক। আর জাহান্নামবাসীর আমল শেষ হবে জাহান্নামবাসীদের আমল দিয়ে, আগে সে যে আমলই করে থাকুক। তারপর আল্লাহর রাসূল ﷺ দুই হাত দিয়ে ইশারা করলেন, যেন কিছু ছুঁড়ে ফেলছেন, আর বললেন: তোমাদের রব বান্দাদের বিষয় চূড়ান্ত করে ফেলেছেন। এক দল জান্নাতে, এক দল জ্বলন্ত আগুনে।\""
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib sahih, and notes a second chain with similar wording. Three phrases need the commentators' help. A summary at the end of them renders ujmila 'ala akhirihim, which a note in at-Tabari's text explains as the total of their number given at the end of the book. Seek what is right and draw nearer renders saddidu wa qaribu, which the English Ibn Kathir gives as striving for the middle course or close to it. Sealed off, in that same English, is dying while doing the deeds of the people of Paradise, regardless of what came before.",
            "bn": "তিরমিযী একে হাসান গরীব সহীহ বলেছেন, আর জানিয়েছেন, আরেকটি সনদেও কাছাকাছি শব্দে এটি এসেছে। তিনটি শব্দবন্ধ বুঝতে তাফসীরকারদের সাহায্য লাগে। 'শেষে মোট সংখ্যা' হলো উজমিলা আলা আখিরিহিম। তাবারীর গ্রন্থের এক টীকা এর ব্যাখ্যা দেয়: কিতাবের শেষে তাদের মোট সংখ্যার উল্লেখ। 'সঠিক পথে থাকো আর কাছাকাছি থাকো' হলো সাদ্দিদূ ওয়া কারিবূ। ইবন কাসীরের ইংরেজি সংস্করণ এর অর্থ করে মধ্যপথ বা তার কাছাকাছি থাকার জন্য সর্বোচ্চ চেষ্টা। আর আমল শেষ হওয়া মানে, সেই সংস্করণেরই ভাষায়, আগে যা-ই করুক, জান্নাতবাসীদের আমলরত অবস্থায় মৃত্যু।"
          },
          {
            "en": "Al-Baghawi carries the narration through his own chains with additions that are not in at-Tirmidhi's wording, and gives no grading of his own; his version closes with a party in Paradise as bounty from Allah, and a party in the Blaze as justice from Allah. Ibn Kathir mentions that closing phrase about justice. He then says the narrations on decree in the Sahih collections, the Sunan and the Musnads are very many, from 'Ali, Ibn Mas'ud, 'A'ishah and a great number of others.",
            "bn": "বাগাভী নিজের সনদে বর্ণনাটি আনেন, এমন কিছু অতিরিক্ত কথাসহ যা তিরমিযীর শব্দে নেই। তিনি নিজে এর কোনো মান নির্ধারণ করেননি। তাঁর বর্ণনার শেষটা এমন: এক দল জান্নাতে, আল্লাহর অনুগ্রহে, আর এক দল জ্বলন্ত আগুনে, আল্লাহর ন্যায়বিচারে। ন্যায়বিচারের এ শেষ কথাটির উল্লেখ ইবন কাসীরও করেন। তারপর তিনি বলেন, তাকদীর বিষয়ে সহীহ গ্রন্থগুলোতে, সুনান ও মুসনাদগুলোতে অনেক বর্ণনা আছে। সেগুলো এসেছে আলী, ইবন মাসউদ, আয়েশা (রাঃ) ও আরও বহু সাহাবী থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning, Not a Verdict",
          "bn": "সতর্কবার্তা, রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the end of the Day of Gathering, two parties, one in Paradise and one in the Blaze. It describes what the text describes and licenses nothing against any living person or community: not against those who opposed the Prophet ﷺ in Makkah, and not against anyone now. In the narration the books are from the Lord of the worlds, no name in them is read out, and the Companions' question is answered with an instruction to keep working.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একত্র হওয়ার দিনের শেষ দৃশ্যের বর্ণনা দেয়: দুটি দল, একটি জান্নাতে, একটি জ্বলন্ত আগুনে। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। মক্কায় যারা নবী ﷺ-এর বিরোধিতা করেছিল তাদের বিরুদ্ধেও নয়, আজকের কারও বিরুদ্ধেও নয়। বর্ণনাতেও কিতাব দুটি জগতসমূহের রবের পক্ষ থেকে, সেখান থেকে একটি নামও পড়ে শোনানো হয়নি। আর সাহাবীদের প্রশ্নের জবাবে এসেছে আমল চালিয়ে যাওয়ার নির্দেশ।"
          },
          {
            "en": "So the verse ends where it began, with a warning. The Prophet ﷺ was sent with a Qur'an his hearers could understand, to warn a city and those around it, and to warn of a day. The Companions, hearing of the two books, asked why they should work, and the answer they were given was to seek what is right and draw near. That is the reply the verse leaves its reader too, in whatever town around the Mother of Towns the warning reaches.",
            "bn": "আয়াত তাই যেখানে শুরু হয়েছিল, সেখানেই শেষ হয়: একটি সতর্কবার্তায়। নবী ﷺ-কে পাঠানো হয়েছিল এমন কুরআন দিয়ে, যা শ্রোতারা বুঝতে পারত। উদ্দেশ্য ছিল একটা শহর আর তার চারপাশের মানুষকে সতর্ক করা, আর একটা দিন সম্পর্কে সতর্ক করা। দুই কিতাবের কথা শুনে সাহাবীরা জানতে চেয়েছিলেন, তবে আমল কেন। তাঁদের জবাব দেওয়া হয়েছিল: সঠিক পথে থাকো, তার কাছাকাছি থাকো। উম্মুল কুরার চারপাশের যে জনপদেই এ সতর্কবার্তা পৌঁছাক, পাঠকের জন্যও আয়াত সেই একই জবাব রেখে যায়।"
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
            "bn": "শারাআ লাকুম মিনাদ দীন: তিনি তোমাদের জন্য দ্বীনের বিধান দিয়েছেন। মাআরিফুল কুরআন এখানে আলোচনার একটা মোড় দেখায়। আগের আয়াতগুলোতে ছিল বাইরের নিয়ামতের কথা: আসমান-যমীনের চাবি আর রিযক। এই আয়াত বলে ভেতরের, রূহানি নিয়ামতের কথা। সা'দী আরও এগিয়ে বলেন, বান্দাদের প্রতি আল্লাহর সবচেয়ে বড় অনুগ্রহ এটাই। তিনি তাদের জন্য সেরা দ্বীন নির্ধারণ করেছেন, সেই দ্বীন, যা তিনি দিয়েছিলেন তাঁর বাছাই করা বান্দাদের মধ্যে সবচেয়ে বাছাই করাদের।"
          },
          {
            "en": "The verb is a road word. Al-Qurtubi glosses shara'a as: He opened a way, made it plain and showed its paths. He then lays out the family of the root. Ash-shari' is the main road, and a house is called shari' when it stands on a through road. Al-Baghawi keeps it short: He made clear and set down for you. On this reading, the religion reaches its hearers as a way already cut, not a riddle each of them must work out alone.",
            "bn": "ক্রিয়াটার সঙ্গে পথের সম্পর্ক। কুরতুবী শারাআর অর্থ বলেন: পথ খুলে দিয়েছেন, তা স্পষ্ট করেছেন, তার রাস্তাগুলো দেখিয়ে দিয়েছেন। তারপর তিনি ধাতুটার পরিবার মেলে ধরেন। আশ-শারি' মানে বড় রাস্তা। যে বাড়ি চলাচলের খোলা রাস্তার ধারে, তাকেও শারি' বলা হয়। বাগাভী অল্প কথায় বলেন: তোমাদের জন্য স্পষ্ট করেছেন ও নির্ধারণ করে দিয়েছেন। এই পাঠে দ্বীন শ্রোতার কাছে আসে আগে থেকে কেটে রাখা পথ হয়ে। প্রত্যেককে একা একা ধাঁধার সমাধান খুঁজতে হয় না।"
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
            "bn": "নাম এসেছে পাঁচজনের। ইবন কাসীর সারিটা পড়েন ক্রম ধরে। নূহ (আঃ), আদম (আঃ)-এর পর প্রথম রাসূল। নবী ﷺ, রাসূলদের মধ্যে সর্বশেষ। আর এ দুইয়ের মাঝে উলুল আযম, অর্থাৎ দৃঢ়সংকল্প রাসূলদের তিনজন: ইবরাহীম, মূসা আর মারইয়াম-পুত্র ঈসা (আঃ)। তিনি দেখান, এই পাঁচজনই একসঙ্গে এসেছেন ৩৩:৭ আয়াতে, যেখানে আল্লাহ নবীদের কাছ থেকে অঙ্গীকার নিয়েছিলেন। মুয়াসসারও এই পাঁচজনকে উলুল আযম বলে, সঙ্গে যোগ করে: প্রসিদ্ধ মত অনুযায়ী। কুরতুবী তাঁদের আলাদা করে উল্লেখের আরেকটি কারণ দেন: তাঁরা ছিলেন শরীয়তের ধারক।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the order itself. Nuh comes first and the Prophet ﷺ last. Ibrahim stands in the middle as the father of prophets, accepted as a prophet even by the Arabs in their unbelief. Musa and 'Isa follow because their followers were present while the Qur'an was coming down. In 33:7 the Prophet ﷺ is named before Nuh, and Ma'arif offers, with a careful perhaps, that this points to his being first in the original allotment of prophethood though last to be sent.",
            "bn": "মাআরিফুল কুরআন ক্রমটাকেই পড়ে দেখে। প্রথমে নূহ (আঃ), শেষে নবী ﷺ। মাঝখানে ইবরাহীম (আঃ), কারণ তিনি নবীদের পিতা। আরবরা কুফর আর শিরকে থেকেও তাঁকে নবী বলে মানত। তারপর মূসা ও ঈসা (আঃ), কারণ কুরআন নাযিলের সময় তাঁদের অনুসারীরাই সামনে উপস্থিত ছিল। ৩৩:৭ আয়াতে নবী ﷺ-এর নাম এসেছে নূহ (আঃ)-এর আগে। মাআরিফ সাবধানে 'হয়তো' বলে একটা ব্যাখ্যা দেয়: পাঠানো হয়েছে সবার শেষে, কিন্তু নবুওয়াতের আদি বণ্টনে তিনি সবার আগে।"
          },
          {
            "en": "Why does the line begin with Nuh and not with Adam? Al-Qurtubi quotes Ibn al-'Arabi, who cites the long intercession hadith in which people come to Nuh and call him the first messenger to the people of the earth; the wording stands in Sahih al-Bukhari (4712). Adam, he says, was the first prophet, but no duties were imposed on him and no prohibitions laid down. Nuh was sent with the prohibition of mothers, daughters and sisters in marriage, and with duties. Ma'arif adds that open unbelief first had to be faced in Nuh's time.",
            "bn": "সারিটা আদম (আঃ) দিয়ে শুরু না হয়ে নূহ (আঃ) দিয়ে কেন? কুরতুবী ইবনুল আরাবীর বক্তব্য উদ্ধৃত করেন। তিনি শাফাআতের দীর্ঘ হাদীসের উল্লেখ করেন, যেখানে মানুষ নূহ (আঃ)-এর কাছে এসে তাঁকে বলে পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল। সে কথা সহীহ বুখারীতে (৪৭১২) আছে। ইবনুল আরাবী বলেন, আদম (আঃ) প্রথম নবী ঠিকই, কিন্তু তাঁর উপর কোনো ফরজ চাপানো হয়নি, কোনো হারামও নির্ধারিত হয়নি। নূহ (আঃ)-কে পাঠানো হয় মা, মেয়ে ও বোনকে বিয়ে করা হারাম করে, আর তাঁর উপর দায়িত্বও দেওয়া হয়। মাআরিফ যোগ করে, প্রকাশ্য কুফরের মোকাবিলা প্রথম করতে হয়েছিল নূহ (আঃ)-এর যুগে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Core, Many Law-Codes",
          "bn": "মূল এক, শরীয়ত ভিন্ন"
        },
        "p": [
          {
            "en": "What, then, is the religion the five share? Ibn Kathir answers in one line: the worship of God alone, with no partner, and he cites 21:25, where every messenger before the Prophet ﷺ was told that there is no god but God. Their laws and ways may differ, he adds, and cites 5:48: to each of you We have appointed a law and a way. Al-Qurtubi draws the same boundary. The shared religion is tawhid, obedience to God, and faith in His messengers, His books and the Day of Recompense.",
            "bn": "তাহলে পাঁচজনের অভিন্ন দ্বীনটা কী? ইবন কাসীর এক কথায় উত্তর দেন: শরিকহীনভাবে এক আল্লাহর ইবাদত। দলিল হিসেবে আনেন ২১:২৫, যেখানে নবী ﷺ-এর আগের প্রত্যেক রাসূলকে জানানো হয়েছিল, আল্লাহ ছাড়া কোনো ইলাহ নেই। তিনি যোগ করেন, তাঁদের বিধান আর পথ আলাদা হতে পারে, আর উদ্ধৃত করেন ৫:৪৮: তোমাদের প্রত্যেকের জন্য আমি একটি বিধান ও একটি পথ নির্ধারণ করেছি। কুরতুবীও একই সীমারেখা টানেন। অভিন্ন দ্বীন হলো তাওহীদ, আল্লাহর আনুগত্য, আর তাঁর রাসূল, তাঁর কিতাব ও প্রতিদান দিবসের প্রতি ঈমান।"
          },
          {
            "en": "Al-Qurtubi says the verse does not mean the law-codes, which serve the welfare of each nation as its conditions require and so differ, and he too cites 5:48. He then quotes Ibn al-'Arabi's longer list of what never changed on the tongues of the prophets: tawhid, prayer, zakat, fasting and pilgrimage; truthfulness, keeping one's word, returning trusts and joining ties of kinship; and the prohibition of unbelief, killing, fornication, harm to people in any form and cruelty to animals. Beyond that, he says, the laws differed as wisdom required.",
            "bn": "কুরতুবী বলেন, এখানে শরীয়তগুলো বোঝানো হয়নি। ওগুলো প্রত্যেক জাতির অবস্থা অনুযায়ী তার কল্যাণের ব্যবস্থা, তাই সেগুলো ভিন্ন ভিন্ন। তিনিও ৫:৪৮ উদ্ধৃত করেন। তারপর ইবনুল আরাবীর একটা দীর্ঘ তালিকা আনেন, যা নবীদের মুখে কখনো বদলায়নি। তাওহীদ, নামাজ, যাকাত, রোজা আর হজ। সত্যবাদিতা, ওয়াদা রক্ষা, আমানত আদায় আর আত্মীয়তার বন্ধন জোড়া। আর কুফর, খুন, যিনা, যেকোনোভাবে মানুষকে কষ্ট দেওয়া ও প্রাণীর প্রতি জুলুম হারাম। এর বাইরে, তিনি বলেন, হিকমতের দাবি অনুযায়ী বিধান ভিন্ন হয়েছে।"
          },
          {
            "en": "At-Tabari gathers the early voices. Mujahid: what He enjoined on you and on His prophets, all one religion. As-Suddi: it is the religion as a whole. Qatada: Nuh was sent with a law that made the lawful lawful and the forbidden forbidden. Al-Qurtubi and al-Baghawi add another line from Mujahid: every prophet was charged with prayer, zakat and acknowledging obedience to God. At-Tabari also reports, from Ibn 'Abbas, a terse answer: enough for you is what you have been told.",
            "bn": "তাবারী পূর্বসূরিদের বক্তব্য জড়ো করেন। মুজাহিদ বলেন: তোমাকে আর তাঁর নবীদের যা নির্দেশ দিয়েছেন, সবই এক দ্বীন। সুদ্দী বলেন: এটা পুরো দ্বীন। কাতাদা বলেন: নূহ (আঃ)-কে পাঠানো হয়েছিল এমন শরীয়ত দিয়ে, যা হালালকে হালাল আর হারামকে হারাম করে। কুরতুবী ও বাগাভী মুজাহিদের আরেকটি কথা আনেন: প্রত্যেক নবীকে নামাজ, যাকাত আর আল্লাহর আনুগত্য স্বীকারের নির্দেশ দেওয়া হয়েছিল। তাবারী ইবন আব্বাস (রাঃ) থেকে একটা ছোট্ট জবাবও আনেন: তোমাকে যা বলা হয়েছে, সেটুকুই তোমার জন্য যথেষ্ট।"
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
            "bn": "ইবন কাসীর এই আয়াতে একটি হাদীস আনেন সংক্ষিপ্ত আকারে: আমরা নবীরা একই পিতার ভিন্ন ভিন্ন মায়ের সন্তান, আমাদের দ্বীন এক। পূর্ণ শব্দ পাওয়া যায় সহীহ বুখারীতে (৩৪৪৩), আবু হুরায়রা (রাঃ) থেকে। রাসূলুল্লাহ ﷺ বলেছেন: \"দুনিয়া ও আখিরাতে মারইয়াম-পুত্র ঈসার সবচেয়ে নিকটবর্তী মানুষ আমি। নবীরা বৈমাত্রেয় ভাই: তাঁদের মা ভিন্ন ভিন্ন, আর তাঁদের দ্বীন এক।\" হাদীসটি বুখারী তাঁর সহীহ গ্রন্থে এনেছেন, যা তাঁর নিজের বাছাই করা বিশুদ্ধ বর্ণনার সংকলন।"
          },
          {
            "en": "The hadith gives its own image: one father, several mothers. Ibn Kathir draws it into this verse: what the prophets hold in common is the worship of God alone, with no partner, even though their laws and ways differ, and he sets this beside 5:48. The opening clause, the Prophet's ﷺ nearness to 'Isa, returns in the report just before it (3442), also from Abu Hurayra, beside a further line: \"I am the nearest of all the people to the son of Mary, and all the prophets are paternal brothers, and there has been no prophet between me and him.\"",
            "bn": "হাদীসটি নিজেই একটা ছবি দেয়: বাবা এক, মা অনেক। ইবন কাসীর ছবিটাকে আয়াতের সঙ্গে মেলান। নবীদের মধ্যে যা অভিন্ন তা হলো শরিকহীনভাবে এক আল্লাহর ইবাদত, যদিও তাঁদের বিধান আর পথ আলাদা। এর পাশে তিনি ৫:৪৮ রাখেন। হাদীসের শুরুর কথা, ঈসা (আঃ)-এর সঙ্গে নবী ﷺ-এর নৈকট্য, আবার এসেছে ঠিক আগের বর্ণনায় (৩৪৪২), সেটিও আবু হুরায়রা (রাঃ) থেকে, পাশে আরেকটি বাক্যসহ: \"মারইয়াম-পুত্রের সবচেয়ে নিকটবর্তী মানুষ আমি। সব নবী বৈমাত্রেয় ভাই। আর আমার ও তাঁর মাঝে কোনো নবী আসেননি।\""
          }
        ]
      },
      {
        "h": {
          "en": "One Bequest, Spelt Out",
          "bn": "একটিই ওসিয়ত, খুলে বলা"
        },
        "p": [
          {
            "en": "An aqimu-d-dina wa la tatafarraqu fih: that you establish the religion and do not split apart in it. At-Tabari reads it as the content of what was enjoined and weighs three ways of parsing the little word an, all leading him to one conclusion: what all these prophets were charged with was a single bequest, to establish the true religion and not divide in it. Al-Qurtubi adds a fourth parsing, an as a plain particle of explanation.",
            "bn": "আন আকীমুদ দীনা ওয়ালা তাতাফাররাকূ ফীহ: দ্বীন কায়েম করো, আর তাতে বিভক্ত হয়ো না। তাবারী এই অংশটুকুকে সেই নির্দেশের বিষয়বস্তু হিসেবে পড়েন, যার ওসিয়ত করা হয়েছিল। ছোট্ট শব্দ 'আন'-এর তিন রকম ব্যাকরণগত অবস্থান তিনি যাচাই করেন। তিনটিই তাঁকে একই সিদ্ধান্তে পৌঁছে দেয়: এই নবীদের সবাইকে দেওয়া হয়েছিল একটিমাত্র ওসিয়ত, সত্য দ্বীন কায়েম করা আর তাতে বিভক্ত না হওয়া। কুরতুবী চতুর্থ আরেকটি সম্ভাবনা যোগ করেন: 'আন' এখানে শুধু ব্যাখ্যাসূচক অব্যয়।"
          },
          {
            "en": "What does establishing it mean? At-Tabari: act on it as it was laid down and made obligatory, and as-Suddi says simply, act on it. Ibn al-'Arabi, quoted by al-Qurtubi, reads make it standing as keeping it permanent, preserved and settled, without dispute or disturbance; some kept that charge and some broke it, and he cites 48:10, whoever breaks his pledge breaks it against himself. As-Sa'di widens the circle: establish all its laws, roots and branches, in yourselves, and strive to establish it among others.",
            "bn": "কায়েম করা মানে কী? তাবারী বলেন: যেভাবে বিধান দেওয়া হয়েছে আর ফরজ করা হয়েছে, সেভাবে আমল করা। সুদ্দী সংক্ষেপে বলেন: তার উপর আমল করো। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী 'দাঁড় করাও' কথাটিকে পড়েন এভাবে: দ্বীনকে স্থায়ী, সুরক্ষিত আর স্থির রাখো, মতভেদ আর টলমল ছাড়া। কেউ সেই দায়িত্ব পালন করেছে, কেউ ভেঙেছে। এখানে তিনি ৪৮:১০ উদ্ধৃত করেন: যে অঙ্গীকার ভাঙে, সে নিজের ক্ষতির জন্যই ভাঙে। সা'দী পরিধি আরও বাড়ান: দ্বীনের মূল ও শাখা সব বিধান নিজেদের মধ্যে কায়েম করো, আর অন্যদের মধ্যেও কায়েম করতে চেষ্টা চালাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Differing Without Dividing",
          "bn": "মতভেদ আছে, বিভেদ নয়"
        },
        "p": [
          {
            "en": "On wa la tatafarraqu fih the glosses run close together. At-Tabari: do not differ in the religion you were commanded to establish, as the factions before you differed. He adds Qatada's line: learn that division is ruin and the community is security. Ibn Kathir: God enjoined all the prophets to harmony and community and forbade them division and difference. Al-Baghawi: God sent every prophet with establishing the religion, with fellowship and community, and with leaving division and opposition.",
            "bn": "ওয়ালা তাতাফাররাকূ ফীহ নিয়ে ব্যাখ্যাগুলো কাছাকাছি। তাবারী বলেন: যে দ্বীন কায়েমের নির্দেশ পেয়েছ, তাতে মতভেদ কোরো না, যেমন তোমাদের আগের দলগুলো করেছিল। সঙ্গে আনেন কাতাদার কথা: জেনে রাখো, বিভক্তি ধ্বংস, আর জামাআত নিরাপত্তা। ইবন কাসীর বলেন, আল্লাহ সব নবীকে মিলেমিশে জামাআতবদ্ধ থাকার নির্দেশ দিয়েছেন, আর বিভক্তি ও মতবিরোধ থেকে নিষেধ করেছেন। বাগাভী বলেন, আল্লাহ প্রত্যেক নবীকে পাঠিয়েছেন দ্বীন কায়েম, সম্প্রীতি আর জামাআত নিয়ে, আর বিভক্তি ও বিরোধ ত্যাগের নির্দেশ দিয়ে।"
          },
          {
            "en": "Where exactly the line falls, two of the commentators draw differently. As-Sa'di asks for agreement on the roots of the religion and on its branches, and names the danger: that particular questions split you into parties and factions, each hostile to the other, while you agree on the root of your religion. He counts the gatherings the law itself commands, the pilgrimage, the two Eids, the Friday prayer and the five daily prayers among them, as forms of holding together.",
            "bn": "সীমারেখা ঠিক কোথায়, এ নিয়ে দুজন তাফসীরকার ভিন্নভাবে রেখা টানেন। সা'দী চান দ্বীনের মূল ও শাখা, দুই ক্ষেত্রেই ঐক্য। বিপদটার নামও তিনি বলেন: খুঁটিনাটি মাসআলা যেন তোমাদের এমন দলে দলে ভাগ করে না ফেলে, যারা দ্বীনের মূলে একমত থেকেও একে অপরের শত্রু। শরীয়ত নিজে যেসব সমাবেশের নির্দেশ দিয়েছে, যেমন হজ, দুই ঈদ, জুমআ আর পাঁচ ওয়াক্ত নামাজ, সেগুলোকে তিনি একসঙ্গে থাকারই নানা রূপ হিসেবে গণ্য করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an places the prohibition at the shared core. Reading the verse beside 5:48, it says the forbidden dissension concerns the injunctions common to all the prophets. Differences among the leading jurists on secondary questions, where no express text exists or texts appear to pull apart, are not that dissension; they go back to the Companions, and the jurists unanimously count them a blessing. So as-Sa'di aims at hostility over questions, and Ma'arif at dispute over the common core. The verse names no group, and neither does this reading of it.",
            "bn": "মাআরিফুল কুরআন নিষেধাজ্ঞাটাকে রাখে অভিন্ন মূলের জায়গায়। ৫:৪৮ পাশে রেখে সে বলে, নিষিদ্ধ বিরোধ হলো সব নবীর শরীয়তে অভিন্ন বিধানগুলো নিয়ে। শাখাগত মাসআলায় বড় মুজতাহিদদের মতভেদ, যেখানে স্পষ্ট নস নেই কিংবা নসগুলো আপাতদৃষ্টিতে ভিন্ন দিকে যায়, সেটা ওই নিষিদ্ধ বিরোধ নয়। সাহাবীদের যুগ থেকেই তা চলে আসছে, আর ফকীহরা সর্বসম্মতভাবে একে নিয়ামত গণ্য করেন। তাহলে সা'দীর লক্ষ্য মাসআলা নিয়ে শত্রুতা, আর মাআরিফের লক্ষ্য অভিন্ন মূল নিয়ে বিরোধ। আয়াত কোনো দলের নাম নেয় না, এই আলোচনাও নেয় না।"
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
            "bn": "কাবুরা আলাল মুশরিকীনা মা তাদ'ূহুম ইলাইহ: তুমি তাদের যেদিকে ডাকছ, তা মুশরিকদের কাছে ভারী ঠেকে। তাবারী শ্রোতাদের আর ডাকের বিষয় দুটোই চিনিয়ে দেন। হে মুহাম্মাদ, তোমার কওমের যারা আল্লাহর সঙ্গে শরিক করে, তাদের কাছে ভারী ঠেকে তোমার এই ডাক: ইবাদত খাঁটিভাবে আল্লাহর জন্য করো, উলূহিয়্যাতে তাঁকে একক মানো, আর তাঁকে ছাড়া অন্য সব উপাস্য ও সমকক্ষ থেকে সম্পর্ক ছিন্ন করো। কুরতুবী ও বাগাভী বলেন: তাওহীদ আর মূর্তি বর্জন। তাবারীর উদ্ধৃতিতে কাতাদা বলেন, লা ইলাহা ইল্লাল্লাহর সাক্ষ্য তাদের কাছে ভারী লেগেছিল।"
          },
          {
            "en": "Qatada goes on: Iblis and his troops set themselves against it, and God refused anything but to carry it through and make it prevail over whoever opposed it. As-Sa'di says it was hard on them in the extreme, since they were called to devotion to God alone, and cites two verses: 39:45, when God alone is mentioned their hearts shrink, and 38:5, has he made the gods one God? Ma'arif al-Qur'an gives the reason: they followed their desires and had no intention of understanding the truth.",
            "bn": "কাতাদা আরও বলেন: ইবলিস ও তার বাহিনী সেই সাক্ষ্যের বিরুদ্ধে দাঁড়িয়েছিল, কিন্তু আল্লাহ তা চালু রাখা আর বিরোধীদের উপর তাকে বিজয়ী করা ছাড়া আর কিছুতে রাজি হননি। সা'দী বলেন, তাদের কাছে এটা চরম কষ্টকর ছিল, কারণ তাদের ডাকা হচ্ছিল একমাত্র আল্লাহর জন্য ইখলাসের দিকে। তিনি দুটি আয়াত আনেন। ৩৯:৪৫: শুধু আল্লাহর নাম নিলে তাদের অন্তর সংকুচিত হয়ে যায়। আর ৩৮:৫: সে কি সব উপাস্যকে এক ইলাহ বানিয়ে ফেলল? মাআরিফুল কুরআন কারণটা বলে দেয়: তারা প্রবৃত্তির অনুসরণ করত, সত্য বোঝার ইচ্ছাই তাদের ছিল না।"
          },
          {
            "en": "This needs saying plainly. The verse describes how the Prophet's ﷺ own hearers in his time received his call, and at-Tabari reads the mushrikin here as those of his people. It reports their response and licenses nothing against any living person or community. What it leaves the reader is a question turned inward: does the call to God alone weigh on my own heart, and what is that heart leaning on instead?",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে, নবী ﷺ-এর সময়ে তাঁর নিজের শ্রোতারা তাঁর ডাক কীভাবে গ্রহণ করেছিল। তাবারী এখানে মুশরিক বলতে তাঁর কওমের লোকদেরই বোঝেন। আয়াত তাদের প্রতিক্রিয়ার খবর দেয়। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। পাঠকের জন্য যা থাকে তা ভেতরের দিকে ফেরানো এক প্রশ্ন: এক আল্লাহর দিকে ডাক কি আমার নিজের মনেও ভারী লাগে? আর তার বদলে মন কিসের উপর ভর দিয়ে আছে?"
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
            "bn": "আল্লাহু ইয়াজতাবী ইলাইহি মাঁই ইয়াশা: আল্লাহ যাকে ইচ্ছা নিজের জন্য বেছে নেন। কুরতুবী ইজতিবার অর্থ বলেন বাছাই করা, এখানে তাওহীদের জন্য বাছাই। মুয়াসসারও তা-ই বলে। তাবারী বলেন: তিনি তাঁর সৃষ্টির মধ্য থেকে যাকে ইচ্ছা বেছে নেন, আর যাকে ভালোবাসেন তাকে নিজের বন্ধুত্বের জন্য গ্রহণ করেন। সা'দী বলেন: সৃষ্টির মধ্যে যাদের তিনি বাছাইয়ের উপযুক্ত বলে জানেন, তাদেরই তিনি রিসালাত আর নিজের বন্ধুত্বের জন্য বেছে নেন।"
          },
          {
            "en": "Wa yahdi ilayhi man yunib: and He guides to Himself whoever turns back. At-Tabari, from Mujahid: He grants success in obeying Him and following the truth His Prophet brought to whoever comes towards His obedience and returns in repentance from disobeying Him. Al-Qurtubi: He draws out for His religion whoever returns to Him. As-Sa'di calls this turning the cause on the servant's side by which he reaches God's guidance, and counts a good aim joined to effort in seeking guidance among the means that make it easy, citing 5:16.",
            "bn": "ওয়া ইয়াহদী ইলাইহি মাঁই ইউনীব: আর যে ফিরে আসে, তাকে তিনি নিজের দিকে পথ দেখান। তাবারী মুজাহিদ থেকে আনেন: যে তাঁর আনুগত্যের দিকে এগিয়ে আসে আর নাফরমানি থেকে তওবা করে ফেরে, তাকে তিনি আনুগত্যের আর নবীর আনা সত্য অনুসরণের তাওফীক দেন। কুরতুবী বলেন: যে তাঁর দিকে ফেরে, তাকে তিনি নিজের দ্বীনের জন্য বেছে আলাদা করে নেন। সা'দী এই ফিরে আসাকে বলেন বান্দার দিক থেকে সেই উপায়, যা দিয়ে সে আল্লাহর হিদায়াতে পৌঁছায়। নিয়ত ভালো হলে আর হিদায়াত খুঁজতে চেষ্টা থাকলে পথ সহজ হয়, এ কথা বলে তিনি ৫:১৬ আনেন।"
          },
          {
            "en": "How do the two halves meet? Ibn Kathir: He is the One who decrees guidance for those who deserve it and writes misguidance against those who prefer it to the path of right guidance. Ma'arif al-Qur'an sees two ways: God's own selection, which is exceptional and limited, as with prophets and His special friends, citing 38:46; and the general way, in which whoever turns to God, intending to follow His religion, is guided to it. The second way is the one the verse opens to every reader.",
            "bn": "দুই অংশ কীভাবে মেলে? ইবন কাসীর বলেন: হিদায়াতের যোগ্যদের জন্য তিনিই হিদায়াত নির্ধারণ করেন, আর যারা সঠিক পথের বদলে গোমরাহিকে বেছে নেয়, তাদের উপর গোমরাহি লিখে দেন। মাআরিফুল কুরআন দুটি পথ দেখে। একটি আল্লাহর নিজের বাছাই, যা ব্যতিক্রমী ও সীমিত, যেমন নবী আর তাঁর বিশেষ বন্ধুদের ক্ষেত্রে, দলিল ৩৮:৪৬। অন্যটি সাধারণ পথ: যে আল্লাহর দিকে ফেরে আর তাঁর দ্বীন মানার নিয়ত করে, তিনি তাকে সেই দ্বীনের পথ দেখান। এই দ্বিতীয় পথ আয়াতটি প্রত্যেক পাঠকের সামনে খুলে রাখে।"
          }
        ]
      }
    ]
  },
  "42:19": {
    "sections": [
      {
        "h": {
          "en": "A Line About Provision",
          "bn": "রিযিক নিয়ে একটি বাক্য"
        },
        "p": [
          {
            "en": "The verse is short and its subject is fixed by what surrounds it. Allah is Latif with His servants; He provides for whom He wills; and He is al-Qawiyy, al-Aziz. The sentence in the middle is about rizq, and 42:20 continues on the same theme, promising increase to whoever wants the harvest of the Hereafter and a portion only in this world to whoever wants that. So the gentleness being described is not gentleness in the abstract. It is gentleness in the distribution of what people live on.",
            "bn": "আয়াতটি ছোট, আর এর বিষয়বস্তু নির্ধারিত হয়ে আছে চারপাশের আয়াতগুলো দিয়ে। আল্লাহ তাঁর বান্দাদের প্রতি 'লাতীফ'; তিনি যাকে ইচ্ছা রিযিক দেন; আর তিনি আল-কাউয়িয়্য, আল-আযীয। মাঝের বাক্যটি রিযিক নিয়ে, আর 42:20 আয়াত একই প্রসঙ্গ ধরে এগোয় — যে আখিরাতের ফসল চায় তাকে বৃদ্ধির প্রতিশ্রুতি, আর যে দুনিয়ার ফসল চায় তার জন্য কেবল এখানকার একটি ভাগ। সুতরাং এখানে যে কোমলতার কথা বলা হচ্ছে তা বিমূর্ত কোমলতা নয়। এটি মানুষ যা দিয়ে বেঁচে থাকে তার বণ্টনে কোমলতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Latif Without the Article",
          "bn": "নির্দিষ্টতা ছাড়া লাতীফ"
        },
        "p": [
          {
            "en": "A small grammatical detail is easy to walk past. Here the word arrives indefinite, latifun bi ibadihi, and attached directly to His servants, whereas in 6:103 and 67:14 it comes with the definite article as al-Latif, a name standing on its own. The indefinite form with the attachment reads less like a title and more like a report of how He deals with them. This verse is not defining a name; it is telling you what He is doing with people.",
            "bn": "একটি ছোট ব্যাকরণগত খুঁটিনাটি সহজেই চোখ এড়িয়ে যায়। এখানে শব্দটি এসেছে অনির্দিষ্ট রূপে — 'লাতীফুন বি-ইবাদিহি' — এবং সরাসরি তাঁর বান্দাদের সঙ্গে যুক্ত হয়ে; অথচ 6:103 ও 67:14 আয়াতে তা এসেছে নির্দিষ্টতাবাচক 'আল' সহ 'আল-লাতীফ' রূপে, নিজের পায়ে দাঁড়ানো একটি নাম হিসেবে। বান্দাদের সঙ্গে যুক্ত অনির্দিষ্ট রূপটিকে উপাধির চেয়ে বেশি মনে হয় তাদের সঙ্গে তাঁর আচরণের বিবরণ বলে। এই আয়াত কোনো নামের সংজ্ঞা দিচ্ছে না; বলছে তিনি মানুষের সঙ্গে কী করছেন।"
          },
          {
            "en": "The word itself carries two established senses, and translators divide over which to bring across, some giving Kind and others giving Subtle. They are not two guesses at one meaning. The lexicographers and the mufassirun treat them as two genuine faces of the same root, and the tradition holds both rather than choosing. Keeping them apart is the only way to see what each is actually claiming about Allah, so it is worth taking them one at a time.",
            "bn": "শব্দটি নিজেই দুটি স্বীকৃত অর্থ বহন করে, আর অনুবাদকরা কোনটি আনবেন তা নিয়ে বিভক্ত — কেউ দেন 'মেহেরবান', কেউ দেন 'সূক্ষ্মদর্শী'। এ দুটি একই অর্থ নিয়ে দুটি অনুমান নয়। অভিধানকার ও মুফাসসিরগণ এ দুটিকে একই ধাতুর দুটি প্রকৃত মুখ হিসেবে দেখেন, আর ঐতিহ্য কোনো একটিকে বেছে না নিয়ে দুটিকেই ধরে রাখে। এগুলোকে আলাদা রাখাই একমাত্র উপায় যাতে বোঝা যায় প্রতিটি আসলে আল্লাহ সম্পর্কে কী দাবি করছে; তাই একটি একটি করে দেখাই ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Kindness Too Fine to Notice",
          "bn": "টের না পাওয়ার মতো সূক্ষ্ম দয়া"
        },
        "p": [
          {
            "en": "In the first sense Latif describes the manner of His kindness: so fine in its working that the one receiving it does not see it happening, and often arriving by a route the servant would have refused if he had been asked. Yusuf (AS) names this after a lifetime of it. In 12:100 he looks back over a prison, an estrangement from his brothers and a family brought out of the desert, and says that his Lord is Latif in what He wills. He could not have said that in the pit.",
            "bn": "প্রথম অর্থে 'লাতীফ' বর্ণনা করে তাঁর দয়ার ধরনটিকে: এর কাজ এতই সূক্ষ্ম যে যে তা পাচ্ছে সে ঘটতে দেখে না, আর তা প্রায়ই আসে এমন পথ ধরে যে পথে যেতে বান্দাকে জিজ্ঞেস করা হলে সে রাজি হতো না। ইউসুফ (আঃ) সারাজীবন এর ভেতর দিয়ে যাওয়ার পর এর নাম দেন। 12:100 আয়াতে তিনি ফিরে তাকান কারাগার, ভাইদের সঙ্গে বিচ্ছেদ আর মরু অঞ্চল থেকে পরিবারকে এনে দেওয়ার দিকে, এবং বলেন তাঁর রব যা ইচ্ছা করেন তাতে তিনি লাতীফ। কুয়োর ভেতরে দাঁড়িয়ে তিনি এ কথা বলতে পারতেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing What Is Too Fine to Find",
          "bn": "যা খুঁজে পাওয়া যায় না তাও জানা"
        },
        "p": [
          {
            "en": "In the second sense the root points to fineness itself, and the name describes a knowledge that reaches what is too small or too buried for anyone else to reach. Luqman uses it exactly so in 31:16, telling his son that if a deed were the weight of a mustard seed and lay inside a rock or in the heavens or in the earth, Allah would bring it out, for Allah is Latif and Aware. Nothing there is about kindness. It is about reach.",
            "bn": "দ্বিতীয় অর্থে ধাতুটি সূক্ষ্মতার দিকেই ইঙ্গিত করে, আর নামটি বর্ণনা করে এমন এক জ্ঞান যা সেখানেও পৌঁছায় যা অন্য কারও পক্ষে পৌঁছানোর মতো নয় — অতি ক্ষুদ্র বা অতি গভীরে চাপা। লুকমান 31:16 আয়াতে ঠিক এভাবেই এটি ব্যবহার করেন, ছেলেকে বলেন যে কোনো আমল যদি সরিষার দানার সমানও হয় এবং তা থাকে পাথরের ভেতরে কিংবা আসমানে বা যমীনে, আল্লাহ তা বের করে আনবেন, কারণ আল্লাহ লাতীফ ও সব বিষয়ে অবগত। এখানে দয়ার কোনো প্রসঙ্গ নেই। এখানে প্রসঙ্গ নাগালের।"
          },
          {
            "en": "As-Sa'di explains why one word holds both. The kindness works precisely because the knowledge is that fine: He alone knows where a person's benefit lies down to details the person cannot see, so He alone can arrange it without the person noticing. Read that way the two senses are not merged into a blur. They stand in a relation, one making the other possible, which is why the mufassirun cite both under this verse.",
            "bn": "আস-সাদী ব্যাখ্যা করেন কেন একটি শব্দ দুটিকেই ধরে রাখে। দয়া ঠিক এ কারণেই কাজ করে যে জ্ঞানটি এত সূক্ষ্ম: একমাত্র তিনিই জানেন মানুষের কল্যাণ কোথায় আছে — এমন খুঁটিনাটি পর্যন্ত যা মানুষ নিজে দেখতে পায় না, তাই একমাত্র তিনিই তা সাজাতে পারেন মানুষকে টের পেতে না দিয়ে। এভাবে পড়লে অর্থ দুটি ঘুলিয়ে এক হয়ে যায় না। তারা একটি সম্পর্কের ভেতরে দাঁড়ায়, একটি অন্যটিকে সম্ভব করে তোলে, আর সে কারণেই মুফাসসিরগণ এই আয়াতের নিচে দুটিই উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Provision Measured, Not Rationed",
          "bn": "রিযিক মাপা, কৃপণতা নয়"
        },
        "p": [
          {
            "en": "He provides for whom He wills. Taken alone that clause can sound arbitrary, so the same surah supplies the reasoning later: 42:27 says that had Allah expanded provision for His servants they would have transgressed in the land, and that He sends it down in a measure He wills. Withholding, on this reading, is one of the operations of lutf and not an exception to it. And 35:2 puts the other half plainly, that what He grants none can withhold and what He withholds none can release.",
            "bn": "তিনি যাকে ইচ্ছা রিযিক দেন। কেবল এটুকু নিলে বাক্যটিকে খামখেয়ালি শোনাতে পারে, তাই একই সূরা পরে যুক্তিটি সরবরাহ করে: 42:27 আয়াত বলে, আল্লাহ যদি তাঁর বান্দাদের রিযিক প্রশস্ত করে দিতেন তবে তারা যমীনে সীমালঙ্ঘন করত, আর তিনি তা নামান নির্দিষ্ট পরিমাণে, যেমন তিনি চান। এই পাঠ অনুযায়ী আটকে রাখাও 'লুতফ'-এরই একটি কাজ, তার ব্যতিক্রম নয়। আর 35:2 আয়াত অন্য অর্ধেকটি স্পষ্ট করে দেয় — তিনি যা দেন কেউ তা আটকাতে পারে না, আর তিনি যা আটকান কেউ তা ছাড়াতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Gentleness With Power Behind It",
          "bn": "যে কোমলতার পেছনে ক্ষমতা আছে"
        },
        "p": [
          {
            "en": "The verse ends al-Qawiyy al-Aziz, the Strong, the Mighty, and the pairing is the point. Human gentleness is often a shortage of options: we are kind because we cannot do otherwise. His is not. The One arranging your affairs so quietly that you miss it could have arranged it any other way and was not obliged to make it gentle. That closing turns the whole verse from a consolation into a guarantee.",
            "bn": "আয়াতটি শেষ হয় আল-কাউয়িয়্য ও আল-আযীয নামে — শক্তিমান, পরাক্রমশালী; আর এই জোড়াটিই মূল কথা। মানুষের কোমলতা প্রায়ই উপায়ের অভাব: আমরা কোমল হই কারণ অন্য কিছু করার সাধ্য নেই। তাঁরটি তেমন নয়। যিনি আপনার বিষয়গুলো এত নিঃশব্দে সাজিয়ে দিচ্ছেন যে আপনি টেরই পান না, তিনি চাইলে অন্য যেকোনোভাবেই সাজাতে পারতেন এবং কোমলভাবে সাজাতে বাধ্য ছিলেন না। এই সমাপ্তিটিই গোটা আয়াতকে সান্ত্বনা থেকে নিশ্চয়তায় বদলে দেয়।"
          },
          {
            "en": "Lived out, this verse mostly does its work backwards. What it asks is that you look at the parts of your history you did not choose and check them again for arrangement, since lutf is by definition what you did not see at the time. Then it asks for patience in the present, where the same kind of work is presumably going on unseen, and where the honest position is not that nothing is happening but that you are not in a position to see it yet.",
            "bn": "জীবনে প্রয়োগ করলে এই আয়াত বেশির ভাগ সময় পেছন দিকে কাজ করে। এটি চায় যে আপনি নিজের ইতিহাসের যে অংশগুলো আপনি বেছে নেননি সেগুলোর দিকে আবার তাকান এবং দেখুন সেখানে কোনো সাজানো হাত ছিল কি না — কারণ 'লুতফ'-এর সংজ্ঞাই হলো তখন যা আপনি দেখতে পাননি। এরপর এটি বর্তমানের জন্য ধৈর্য চায়, যেখানে একই ধরনের কাজ সম্ভবত অদৃশ্যে চলছে, আর যেখানে সৎ অবস্থানটি এই নয় যে কিছুই ঘটছে না, বরং এই যে আপনি এখনো তা দেখার জায়গায় পৌঁছাননি।"
          }
        ]
      }
    ]
  },
  "42:25": {
    "sections": [
      {
        "h": {
          "en": "Between Knowing and Answering",
          "bn": "জানা ও সাড়া দেওয়ার মাঝে"
        },
        "p": [
          {
            "en": "The verse sits in a run of Surah ash-Shura about what Allah does with truth and with people. Just before it, 42:24 says that He blots out falsehood and establishes the truth by His words, and that He knows what is within the breasts. Just after it, 42:26 says that He answers those who have believed and done righteous deeds and increases them from His bounty. Between the knowledge of what hearts conceal and the answering of prayer, the Quran places the acceptance of repentance. Being received comes before being answered.",
            "bn": "আয়াতটি বসে আছে সূরা আশ-শূরার এমন একটি ধারায় যা বলে আল্লাহ সত্যের সঙ্গে ও মানুষের সঙ্গে কী করেন। ঠিক আগে 42:24 আয়াতে বলা হয়, তিনি মিথ্যাকে মুছে দেন এবং নিজ বাক্য দ্বারা সত্যকে প্রতিষ্ঠিত করেন, আর বুকের ভেতরে যা আছে তা তিনি জানেন। ঠিক পরে 42:26 আয়াতে বলা হয়, যারা ঈমান এনেছে ও সৎকর্ম করেছে তিনি তাদের ডাকে সাড়া দেন এবং নিজ অনুগ্রহ থেকে তাদের আরও বাড়িয়ে দেন। অন্তর যা লুকায় তার জ্ঞান আর দু'আয় সাড়া দেওয়া — এ দুইয়ের মাঝখানে কুরআন রাখে তওবা কবুল করার কথা। সাড়া পাওয়ার আগে আসে গৃহীত হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Present-Tense Verbs",
          "bn": "তিনটি চলমান ক্রিয়া"
        },
        "p": [
          {
            "en": "The Arabic gives three imperfect verbs in a row: yaqbalu, He accepts; wa ya'fu, and He pardons; wa ya'lamu, and He knows. The imperfect in Arabic describes what is ongoing rather than what happened once and finished. So the sentence is not reporting that Allah accepted a repentance at some point in the past. It is describing a standing practice, running now, while the reader hesitates. That is what gives this verse a different weight from a verse of promise — it is stated as a fact about the present tense.",
            "bn": "আরবিতে পর পর তিনটি অসমাপিকা (মুদারি') ক্রিয়া এসেছে: ইয়াক্ববালু — তিনি কবুল করেন; ওয়া ইয়া'ফূ — এবং তিনি ক্ষমা করেন; ওয়া ইয়া'লামু — এবং তিনি জানেন। আরবিতে এই ক্রিয়ারূপ এমন কিছু বোঝায় যা চলমান, একবার ঘটে শেষ হয়ে যাওয়া কিছু নয়। তাই বাক্যটি এ খবর দিচ্ছে না যে আল্লাহ অতীতে কোনো এক সময়ে একটি তওবা কবুল করেছিলেন। এটি বর্ণনা করছে একটি চলমান রীতি, যা এই মুহূর্তেই চালু — ঠিক যখন পাঠক দ্বিধা করছে। এখানেই এই আয়াতের ওজন কোনো প্রতিশ্রুতির আয়াত থেকে আলাদা — এটি বর্তমান কালের একটি বাস্তবতা হিসেবে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Preposition Used Twice",
          "bn": "একই অব্যয় দুইবার"
        },
        "p": [
          {
            "en": "He accepts repentance 'an His servants, and He pardons 'an misdeeds. The same small word governs both verbs, and it is 'an rather than min. The pairing is visible in the verse itself: the preposition that follows the verb of pardoning is the one that also follows the verb of accepting, so the acceptance stands coloured by the pardon beside it. Nearly the same phrase appears in 9:104, where the Quran asks whether they do not know that it is Allah who accepts repentance from His servants and takes the charities.",
            "bn": "তিনি তাঁর বান্দাদের 'আন' তওবা কবুল করেন, আর পাপগুলোর 'আন' ক্ষমা করেন। একই ছোট্ট অব্যয়টি দুটি ক্রিয়াকেই পরিচালনা করছে, আর সেটি 'আন', 'মিন' নয়। জোড়টি আয়াতের ভেতরেই দেখা যায়: ক্ষমার ক্রিয়ার পরে যে অব্যয় আসে, কবুলের ক্রিয়ার পরেও সেটিই আসে; ফলে কবুল করার কাজটি তার পাশে দাঁড়ানো ক্ষমার রং গায়ে মেখে দাঁড়ায়। প্রায় একই বাক্যাংশ এসেছে 9:104 আয়াতে, যেখানে কুরআন প্রশ্ন করে — তারা কি জানে না যে আল্লাহই তাঁর বান্দাদের তওবা কবুল করেন এবং সদকা গ্রহণ করেন?"
          }
        ]
      },
      {
        "h": {
          "en": "And He Knows What You Do",
          "bn": "আর তিনি জানেন তোমরা যা কর"
        },
        "p": [
          {
            "en": "The last clause changes person. Up to that point the verse speaks about a third party — His servants — and then it turns and addresses the reader directly: wa ya'lamu ma taf'alun, and He knows what you do. The Arabic does this deliberately, and the rhetoricians call the device iltifat, a turning. Mercy has been described from a distance; the knowledge arrives face to face. Note also the verb chosen: taf'alun, what you do, the ordinary word for doing anything, not a word for sinning. The knowledge is not restricted to the misdeeds the verse has just pardoned.",
            "bn": "শেষ বাক্যাংশে পুরুষ বদলে যায়। এতক্ষণ আয়াতটি তৃতীয় পক্ষ সম্পর্কে বলছিল — 'তাঁর বান্দারা' — তারপর এটি ঘুরে সরাসরি পাঠককে সম্বোধন করে: ওয়া ইয়া'লামু মা তাফ'আলূন — আর তিনি জানেন তোমরা যা কর। আরবি এটি ইচ্ছাকৃতভাবেই করে, আর অলংকারশাস্ত্রবিদরা এই কৌশলটিকে বলেন ইলতিফাত, অর্থাৎ ফিরে তাকানো। রহমতের বর্ণনা এসেছিল দূর থেকে; জ্ঞানের কথাটি আসে একেবারে মুখোমুখি হয়ে। ক্রিয়াপদটিও লক্ষণীয়: 'তাফ'আলূন' — তোমরা যা কর; অর্থাৎ যেকোনো কিছু করার সাধারণ শব্দ, পাপ করার কোনো শব্দ নয়। জ্ঞানটি কেবল সদ্য ক্ষমা করা পাপগুলোর মধ্যেই সীমাবদ্ধ নয়।"
          },
          {
            "en": "That clause is what makes the verse a comfort rather than a loophole. A pardon granted in ignorance is worth nothing, because it can be withdrawn the moment the file is finally read. Here the file has already been read. He accepts the repentance of servants whose deeds He is watching while they repent. The reader's private conviction that his own case is worse than anyone assumes is not new information to the One he is asking, and it was not new when the promise was made.",
            "bn": "এই বাক্যাংশটিই আয়াতটিকে ফাঁকফোকর নয়, বরং সান্ত্বনা বানায়। না জেনে দেওয়া ক্ষমার কোনো মূল্য নেই, কারণ নথিটি যেদিন সত্যিই পড়া হবে সেদিনই তা ফিরিয়ে নেওয়া যায়। এখানে নথিটি আগেই পড়া হয়ে গেছে। তিনি এমন বান্দাদের তওবা কবুল করেন যাদের কাজগুলো তওবার সময়েও তিনি দেখছেন। পাঠকের এই গোপন বিশ্বাস যে তার নিজের অবস্থা সবার ধারণার চেয়েও খারাপ — যাঁর কাছে সে চাইছে তাঁর কাছে সেটি নতুন কোনো তথ্য নয়, আর প্রতিশ্রুতিটি দেওয়ার সময়েও তা নতুন ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Still Called His Servants",
          "bn": "তবু তাঁরই বান্দা"
        },
        "p": [
          {
            "en": "Notice too that the people in question are called 'ibadihi, His servants, in the very sentence that mentions their misdeeds. The title is not withdrawn from them while they are in the wrong. 39:53 makes the same move more openly, where the announcement opens by calling them My servants who have transgressed against themselves. But acceptance is not the same as a formality: 66:8 asks for a particular quality of return, tawbatan nasuhan, a sincere repentance. The verse promises that repentance is received, not that any gesture counts as repentance.",
            "bn": "এটাও লক্ষণীয় যে যাদের কথা বলা হচ্ছে, তাদেরই 'ইবাদিহি' — তাঁর বান্দা — বলা হয়েছে ঠিক সেই বাক্যে যেখানে তাদের পাপের উল্লেখ আছে। ভুলের মধ্যে থাকা অবস্থাতেও উপাধিটি তাদের কাছ থেকে কেড়ে নেওয়া হয় না। 39:53 আয়াতে একই কাজ আরও খোলাখুলিভাবে করা হয়েছে, যেখানে ঘোষণাটি শুরুই হয় তাদের 'আমার সেই বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ' বলে ডেকে। তবে কবুল হওয়া মানে নিছক আনুষ্ঠানিকতা নয়: 66:8 আয়াতে ফিরে আসার একটি নির্দিষ্ট গুণ চাওয়া হয়েছে — তাওবাতান নাসূহা, খাঁটি তওবা। আয়াতটি প্রতিশ্রুতি দেয় যে তওবা গৃহীত হয়, এ কথা নয় যে যেকোনো ভঙ্গিই তওবা হিসেবে গণ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Later",
          "bn": "পরে নয়"
        },
        "p": [
          {
            "en": "The practical consequence is about timing rather than intensity. Most delayed repentance is delayed for one of two reasons: a person waits until he feels worthy, or waits until he is sure he will not relapse. This verse removes the first reason, since worthiness was never the basis. 4:110 removes the second, promising that whoever wrongs himself and then seeks forgiveness will find Allah Forgiving and Merciful — the finding is attached to the seeking, not to a guarantee about tomorrow. A workable discipline is to close each day's account the same day, in whatever words come.",
            "bn": "এর ব্যবহারিক ফলাফল তীব্রতার নয়, বরং সময়ের ব্যাপার। বিলম্বিত তওবার বেশিরভাগই দুটি কারণের একটিতে বিলম্বিত হয়: হয় মানুষ অপেক্ষা করে যতক্ষণ না নিজেকে যোগ্য মনে হয়, নয়তো অপেক্ষা করে যতক্ষণ না নিশ্চিত হয় যে সে আর ফিরে যাবে না। এই আয়াত প্রথম কারণটি সরিয়ে দেয়, কারণ যোগ্যতা কখনোই ভিত্তি ছিল না। দ্বিতীয়টি সরিয়ে দেয় 4:110 আয়াত, যা প্রতিশ্রুতি দেয় — যে নিজের ওপর যুলম করে তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে ক্ষমাশীল ও দয়ালু পাবে। পাওয়াটি যুক্ত চাওয়ার সঙ্গে, আগামীকালের কোনো নিশ্চয়তার সঙ্গে নয়। একটি কার্যকর অভ্যাস হলো প্রতিদিনের হিসাব সেদিনই বন্ধ করা, যে ভাষায় আসে সেই ভাষাতেই।"
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
            "bn": "42:36 এমন এক তুলনা স্থাপন করে, যা বাকি অনুচ্ছেদ খুলে দেখায়: তোমাদের যা কিছু দেওয়া হয়েছে তা দুনিয়ার জীবনের মাতা' — তার ক্ষণস্থায়ী উপভোগ; আর আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী — খাইরুন ওয়া আবকা — তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে। কুরআন একই শব্দজোড় ব্যবহার করে 87:17 আয়াতে। মাতা'-কে নিন্দা করা হয়নি; মাপা হয়েছে। আয়াতটি তার আকার সততার সাথে বলে, তারপর আরও বড় কিছুর নাম নেয়, আর অন্তরকে বলে প্রত্যেকটিকে তার নিজের খোপে রাখতে।"
          },
          {
            "en": "The commentators keep the two clauses attached to their condition: better and more lasting for those who believe and rely upon their Lord. Tawakkul is named at the head of the passage because everything that follows depends on it. What is with Allah is invisible now; only trust makes an unseen reward weigh more than a visible gain. The traits about to be listed are what that trust looks like once it starts spending itself in conduct.",
            "bn": "মুফাসসিরগণ বাক্যাংশ দুটিকে তাদের শর্তের সাথে জুড়েই রাখেন: উত্তম ও অধিক স্থায়ী — তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে। তাওয়াক্কুলের নাম অনুচ্ছেদের মাথায় এসেছে, কারণ এরপরের সবকিছু তার উপরেই নির্ভরশীল। আল্লাহর কাছে যা আছে তা এখন অদৃশ্য; একমাত্র ভরসাই পারে অদেখা প্রতিদানকে দৃশ্যমান লাভের চেয়ে ভারী করে তুলতে। যে গুণগুলোর তালিকা আসতে যাচ্ছে, সেগুলো আসলে সেই ভরসারই চেহারা — যখন তা আচরণে নিজেকে খরচ করতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgivers When Angry",
          "bn": "রাগের সময় ক্ষমাশীল"
        },
        "p": [
          {
            "en": "42:37 continues the portrait: those who avoid the major sins and indecencies, and when they are angry, they forgive. The Arabic is a nominal construction — hum yaghfirun, they are forgivers — describing a settled trait rather than a lucky moment. Anger itself is not denied or condemned; the verse assumes it will come and legislates its exit. Between the provocation and the response, these people have installed forgiveness as the default.",
            "bn": "42:37 প্রতিকৃতিটি এগিয়ে নেয়: যারা কবীরা গুনাহ ও অশ্লীলতা এড়িয়ে চলে, আর যখন রেগে যায়, তখন ক্ষমা করে। আরবি গঠনটি নামবাচক — হুম ইয়াগফিরূন, তারাই ক্ষমাকারী — যা কোনো কাকতালীয় মুহূর্ত নয়, বরং থিতু হয়ে বসা এক স্বভাবের বর্ণনা। রাগকে অস্বীকারও করা হয়নি, নিন্দাও করা হয়নি; আয়াতটি ধরেই নেয় রাগ আসবে, আর তার প্রস্থানপথের বিধান দেয়। উসকানি আর প্রতিক্রিয়ার মাঝখানে এই মানুষগুলো ক্ষমাকে স্থায়ী নিয়ম করে বসিয়ে রেখেছে।"
          },
          {
            "en": "The Quran praises the same trait in 3:134, where those who spend in ease and in hardship restrain their anger and pardon people — and Allah loves the muhsinin. The commentators point out the gradation there: swallowing rage, then pardoning, then going beyond it to good treatment. 42:37 assumes the whole ladder. Forgiveness exercised in strength is the mark; pardoning what one was powerless to punish anyway costs little.",
            "bn": "কুরআন একই গুণের প্রশংসা করে 3:134 আয়াতে: যারা স্বচ্ছলতায় ও অনটনে ব্যয় করে, রাগ দমন করে, আর মানুষকে ক্ষমা করে — আর আল্লাহ মুহসিনদের ভালোবাসেন। মুফাসসিরগণ সেখানকার স্তরবিন্যাস দেখিয়ে দেন: ক্রোধ গিলে ফেলা, তারপর মাফ করা, তারপর তাকেও ছাড়িয়ে সদাচরণে পৌঁছানো। 42:37 পুরো সিঁড়িটাই ধরে নেয়। শক্তি থাকা অবস্থায় করা ক্ষমাই আসল চিহ্ন; যাকে শাস্তি দেওয়ার ক্ষমতাই ছিল না তাকে মাফ করায় খরচ সামান্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse of Consultation",
          "bn": "পরামর্শের আয়াত"
        },
        "p": [
          {
            "en": "42:38 gives the surah its name: those who respond to their Lord and establish the prayer, wa amruhum shura baynahum — and their affair is consultation among themselves — and who spend from what We have provided them. Shura sits embedded between worship and charity, listed as a trait of the same rank. The construction again is descriptive: consultation is what their affairs are, a standing manner of deciding, not an occasional concession extracted from a reluctant leader.",
            "bn": "42:38 সূরাটিকে তার নাম দেয়: যারা তাদের রবের ডাকে সাড়া দেয় ও নামায কায়েম করে, ওয়া আমরুহুম শূরা বাইনাহুম — আর তাদের কাজকর্ম চলে পারস্পরিক পরামর্শে — এবং আমরা তাদের যা দিয়েছি তা থেকে ব্যয় করে। শূরা বসে আছে ইবাদত আর দানের মাঝখানে গাঁথা হয়ে — একই মর্যাদার গুণ হিসেবে তালিকাভুক্ত। গঠনটি এখানেও বর্ণনামূলক: পরামর্শই তাদের কাজের ধরন — সিদ্ধান্ত নেওয়ার এক স্থায়ী রীতি; অনিচ্ছুক নেতার কাছ থেকে আদায় করা কোনো কালেভদ্রে-ছাড় নয়।"
          },
          {
            "en": "Responding to their Lord, istajabu li-rabbihim, heads the verse and governs it. The commentators read it as the broad answering of Allah's call — obedience as a whole — of which the prayer is the most visible pillar. Consultation and spending then follow as the social half of the same response. The verse quietly refuses a religion of ritual alone: answering Allah includes how a community decides and how its wealth moves.",
            "bn": "তাদের রবের ডাকে সাড়া দেওয়া — ইসতাজাবূ লিরাব্বিহিম — আয়াতের মাথায় বসে পুরোটাকে পরিচালনা করে। মুফাসসিরগণ একে পড়েন আল্লাহর ডাকে ব্যাপক অর্থে সাড়া হিসেবে — সামগ্রিক আনুগত্য — যার সবচেয়ে দৃশ্যমান স্তম্ভ হলো নামায। এরপর পরামর্শ ও ব্যয় আসে সেই একই সাড়ার সামাজিক অর্ধেক হয়ে। আয়াতটি নীরবে কেবল-আনুষ্ঠানিকতার ধর্মকে প্রত্যাখ্যান করে: আল্লাহকে সাড়া দেওয়ার মধ্যে এটাও পড়ে — একটি সমাজ কীভাবে সিদ্ধান্ত নেয় আর তার সম্পদ কোন পথে চলে।"
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
            "bn": "মূলধারার হিসাবে এই সূরা মক্কায় নাযিল হয় — মুমিনদের কোনো রাষ্ট্র, সেনাবাহিনী বা কোষাগার থাকার আগেই। মুফাসসিরগণ এর ফল টেনে বের করেন: শূরাকে নাম দেওয়া হয়েছে খোদ মুমিন সমাজের চরিত্র হিসেবে — সংসারে, অংশীদারিত্বে, ছোটখাটো যৌথ ব্যাপারে — কোনো শাসনযন্ত্র হওয়ার আগেই। পরে মদীনায়, 3:159 স্বয়ং নবী ﷺ-কে নির্দেশ দেয় কাজে-কর্মে তাঁদের সাথে পরামর্শ করতে — যদিও ওহীই তাঁকে পথ দেখাত; রীতিটিকে শীর্ষে দৃশ্যমান করা হয়েছিল, যেন নিচের কেউ একে তুচ্ছ করতে না পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Passage Adds Next",
          "bn": "অনুচ্ছেদের পরের সংযোজন"
        },
        "p": [
          {
            "en": "The verses that follow keep circling restraint. 42:40 rules that the recompense of an evil is an evil like it, but whoever pardons and sets matters right, his reward is upon Allah — He does not love the wrongdoers. 42:41 protects from blame the one who takes just retribution after being wronged, and 42:43 concludes: whoever is patient and forgives, that is of the matters requiring resolve. The passage holds both truths at once: justice is a right, and pardon is a rank.",
            "bn": "পরের আয়াতগুলো সংযমের চারপাশেই ঘুরতে থাকে। 42:40 বিধান দেয়: মন্দের প্রতিফল তার সমান মন্দ; কিন্তু যে মাফ করে ও আপস-নিষ্পত্তি করে, তার প্রতিদান আল্লাহর জিম্মায় — তিনি জালিমদের ভালোবাসেন না। 42:41 জুলুমের শিকার হয়ে ন্যায্য প্রতিবিধান গ্রহণকারীকে দোষ থেকে রক্ষা করে, আর 42:43 উপসংহার টানে: যে ধৈর্য ধরে ও ক্ষমা করে — তা তো দৃঢ়সংকল্পের কাজগুলোর অন্তর্গত। অনুচ্ছেদটি দুটি সত্যকে একসাথে ধরে রাখে: ন্যায়বিচার একটি অধিকার, আর ক্ষমা একটি মর্যাদা।"
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
            "bn": "অনুচ্ছেদটি যেকোনো মুমিন পরিবার বা প্রতিষ্ঠানের জন্য এক যাচাই-তালিকার মতো পড়া যায়। কারবারটি আসলে কোন মুদ্রা সর্বোচ্চ করছে — ক্ষণস্থায়ীটি, না স্থায়ীটি? রাগ এলে ক্ষমা কি বসানো স্থায়ী নিয়ম, নাকি কালেভদ্রে ঘটা চমক? সিদ্ধান্তগুলো কি সত্যিই পরামর্শ করে নেওয়া হয় — সবচেয়ে চুপচাপ মানুষটির কথাও শোনা হয় — নাকি ঘটে যাওয়ার পর ঘোষণা করা হয়? নামায যেমন নিয়মিত পড়া হয়, টাকাও কি তেমন নির্ভরযোগ্যভাবে বেরোয়? এর কোনোটিই ব্যক্তিগত নয়; এক সপ্তাহের মধ্যেই একটি পরিবার বা দল কীভাবে চলে তাতে প্রতিটি দেখা যায়।"
          },
          {
            "en": "The order is also a method. Reliance on Allah in 42:36 comes first because the person clutching this world cannot afford restraint, pardon or open hands; every loss feels total. Once what is with Allah is genuinely believed to be better and more lasting, the rest of the portrait becomes affordable: anger can release its grip, consultation can risk being overruled, wealth can leave. The passage is not a list of separate virtues but one economy of the heart.",
            "bn": "ক্রমটি একটি পদ্ধতিও বটে। 42:36 আয়াতে আল্লাহর উপর ভরসা আগে এসেছে, কারণ যে মানুষ দুনিয়াকে আঁকড়ে আছে, তার পক্ষে সংযম, ক্ষমা বা খোলা হাতের খরচ পোষায় না; প্রতিটি ক্ষতিই তার কাছে সর্বনাশ মনে হয়। আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী — এ কথা সত্যিই বিশ্বাস করা গেলে প্রতিকৃতির বাকিটা সাধ্যের মধ্যে চলে আসে: রাগ তার মুঠি আলগা করতে পারে, পরামর্শ নিজের মত নাকচ হওয়ার ঝুঁকি নিতে পারে, সম্পদ হাতছাড়া হতে পারে। অনুচ্ছেদটি আলাদা আলাদা গুণের তালিকা নয়, বরং অন্তরের একটিই অর্থনীতি।"
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
            "bn": "'ওয়া জাযাউ সায়্যিআতিন সায়্যিআতুম মিসলুহা' — মন্দের প্রতিফল অনুরূপ মন্দ। দ্বিতীয় 'সায়্যিআহ' হলো অত্যাচারিত ব্যক্তির বৈধ ও পরিমিত প্রতিক্রিয়া, তবু কুরআন সেটিকেও অপরাধের সঙ্গে একই নামে ডাকে। তাফসীর আহসানুল বায়ান এই নামকরণকে ব্যাখ্যা করে সাদৃশ্যের কারণে প্রতিপক্ষের নামে নামকরণ হিসেবে; প্রতিক্রিয়াটি নিজে মন্দ নয়, কিন্তু তাকে মন্দ বলা হয়েছে কারণ তা মন্দেরই অনুরূপ জবাব।"
          },
          {
            "en": "That single word does work no ruling could do. A person about to collect what he is owed reads, in the very middle of the permission, that the act he is about to perform wears the offence's own name. Al-Muyassar tightens it further, glossing the clause as punishing him with an evil like it and with no addition at all. The permission is real, and it is issued with a caution built into its vocabulary.",
            "bn": "একটিমাত্র শব্দ এমন কাজ করে যা কোনো বিধান করতে পারত না। যে মানুষটি তার পাওনা আদায় করতে যাচ্ছে, সে অনুমতিরই ঠিক মাঝখানে পড়ে যে কাজটি সে করতে যাচ্ছে তা অপরাধেরই নাম বহন করছে। তাফসীর মুয়াসসার আরও আঁটসাঁট করে বলে, তাকে শাস্তি দেওয়া হবে অনুরূপ মন্দ দিয়ে, তাতে কোনো বাড়তি যোগ না করে। অনুমতিটি বাস্তব, আর তা দেওয়া হয়েছে তার শব্দচয়নের ভেতরেই একটি সতর্কতা গেঁথে দিয়ে।"
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
            "bn": "'মিসলুহা' অর্থাৎ 'তার অনুরূপ' — এটিই সীমা, আর কুরআন এই সীমাটি আরও তিনটি ভিন্ন সুরে বলেছে। 2:194 বলে, যে তোমাদের প্রতি বাড়াবাড়ি করে, তোমরাও তার প্রতি ততটুকুই করো যতটুকু সে করেছে। 16:126 বলে, যদি শাস্তি দাও তবে ঠিক ততটুকুই দাও যতটুকু কষ্ট তোমাদের দেওয়া হয়েছে। 5:45 বিছিয়ে দেয় প্রাণের বদলে প্রাণ, চোখের বদলে চোখ, আর যোগ করে যে জখমেরও কিসাস আছে। ইবনে কাসীর ঠিক এই আয়াতগুলোই এই আয়াতের নিচে একত্র করেন।"
          },
          {
            "en": "Notice who is being restrained. The cap is not placed on the wrongdoer, who has already acted, but on the wronged party, who is the only one now holding both a permission and a motive. And 40:40 applies the same measure to Allah's own reckoning: whoever does an evil deed will not be recompensed except by the like of it. The rule the believer is held to is the rule the Judge states about Himself.",
            "bn": "লক্ষ করুন, সংযত করা হচ্ছে কাকে। সীমাটি বসানো হয়নি অন্যায়কারীর উপর, যে ইতিমধ্যে কাজটি করে ফেলেছে; বসানো হয়েছে অত্যাচারিতের উপর, এখন যার হাতেই একইসঙ্গে অনুমতি ও উদ্দেশ্য দুটোই আছে। আর 40:40 একই মাপকাঠি প্রয়োগ করে স্বয়ং আল্লাহর হিসাবের উপর: যে মন্দ কাজ করে, তাকে তার অনুরূপ ছাড়া প্রতিফল দেওয়া হবে না। মুমিনকে যে নিয়মে বাঁধা হয়েছে, বিচারক নিজের সম্পর্কেও সেই নিয়মটিই ঘোষণা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verbs, Not One",
          "bn": "একটি নয়, দুটি ক্রিয়া"
        },
        "p": [
          {
            "en": "The higher road is named with a pair of verbs: fa-man afa wa aslah. Afa comes from a root that carries effacing and wiping out, dropping the claim so that it leaves no residue behind. Aslaha is to repair, to put a thing back into working order. Pardon that ends the demand but leaves the relationship dead satisfies only the first verb. The verse asks for the claim to be dropped and the connection to be rebuilt.",
            "bn": "উচ্চতর পথটির নাম দেওয়া হয়েছে দুটি ক্রিয়া দিয়ে: 'ফামান আফা ওয়া আসলাহা'। 'আফা' এসেছে এমন এক মূল থেকে যা মুছে ফেলা ও নিশ্চিহ্ন করার অর্থ বহন করে — দাবিটি এমনভাবে ছেড়ে দেওয়া যাতে তার কোনো অবশেষ পড়ে না থাকে। 'আসলাহা' মানে মেরামত করা, জিনিসটিকে আবার সচল অবস্থায় ফিরিয়ে আনা। যে ক্ষমা দাবি তুলে নেয় কিন্তু সম্পর্কটিকে মৃত রেখে দেয়, তা কেবল প্রথম ক্রিয়াটিই পূরণ করে। আয়াত চায় দাবি ছেড়ে দেওয়া হোক এবং সম্পর্কটি আবার গড়া হোক।"
          },
          {
            "en": "Al-Muyassar glosses the pair as pardoning the offender, leaving off his punishment, and restoring the affection between himself and the one pardoned, seeking thereby the face of Allah. That last clause matters, because it separates this from the many other reasons a person lets a thing go: exhaustion, weakness, fear of a longer fight, or a wish to be seen as gracious. The reward is attached to a pardon offered for Allah.",
            "bn": "তাফসীর মুয়াসসার এই জোড়াটির ব্যাখ্যা করে এভাবে: অপরাধীকে ক্ষমা করা, তার শাস্তি ছেড়ে দেওয়া, আর নিজের ও ক্ষমাপ্রাপ্ত ব্যক্তির মধ্যকার সম্প্রীতি পুনরুদ্ধার করা — এবং তা করা আল্লাহর সন্তুষ্টি কামনায়। শেষ কথাটি গুরুত্বপূর্ণ, কারণ এটিই একে আলাদা করে সেই আরও অনেক কারণ থেকে যেগুলোর জন্য মানুষ কিছু ছেড়ে দেয়: ক্লান্তি, দুর্বলতা, দীর্ঘ লড়াইয়ের ভয়, কিংবা উদার হিসেবে দেখা যাওয়ার ইচ্ছা। প্রতিদান বাঁধা আছে আল্লাহর জন্য করা ক্ষমার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reward Left Unnamed",
          "bn": "যে প্রতিদানের পরিমাণ বলা হয়নি"
        },
        "p": [
          {
            "en": "Fa-ajruhu ala Allah, his reward is upon Allah. The preposition is ala, the one Arabic uses for what is due from someone, rather than inda, which would only have said with. The app's Bengali carries that sense exactly, putting the reward in Allah's charge. And the amount is never stated. Every other item in a dispute has a figure attached to it; this one is left open, which is the whole point of putting it there.",
            "bn": "'ফা-আজরুহু আলাল্লাহ' — তার প্রতিদান আল্লাহর উপর। অব্যয়টি 'আলা', আরবিতে যা কারও উপর প্রাপ্য দায় বোঝাতে ব্যবহৃত হয় — 'ইনদা' নয়, যা কেবল 'কাছে' বোঝাত। অ্যাপের বাংলা অনুবাদ এই অর্থটিই হুবহু বহন করে, প্রতিদান দেওয়াকে আল্লাহর যিম্মায় রেখে। আর পরিমাণটি কোথাও বলা হয়নি। বিরোধের প্রতিটি হিসাবের সঙ্গে একটি অঙ্ক জুড়ে থাকে; কেবল এটিই খোলা রাখা হয়েছে, আর সেটিই এটিকে সেখানে রাখার মূল উদ্দেশ্য।"
          },
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: charity does not decrease wealth, and Allah does not increase a servant through pardon except in honour, and nobody humbles himself for Allah but that Allah raises him. Ibn Kathir cites the middle clause of that hadith under this verse. The fear that pardoning will make a person look weak is answered by a report about what actually happens, not by an argument.",
            "bn": "মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: সদকা সম্পদ কমায় না; ক্ষমার কারণে আল্লাহ বান্দার সম্মানই বাড়িয়ে দেন; আর আল্লাহর জন্য যে বিনয়ী হয়, আল্লাহ তাকে উঁচু করেন। ইবনে কাসীর এই হাদীসের মাঝের অংশটি এই আয়াতের নিচে উল্লেখ করেন। ক্ষমা করলে মানুষ দুর্বল দেখাবে — এই ভয়ের জবাব আসে যুক্তি দিয়ে নয়, বরং বাস্তবে কী ঘটে তার একটি সংবাদ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Wrongdoers Are",
          "bn": "সীমালঙ্ঘনকারী কারা"
        },
        "p": [
          {
            "en": "The verse ends innahu la yuhibbu az-zalimin, He does not like the wrongdoers, and it is easy to misread that as a warning to the person still weighing whether to pardon. Both Ibn Kathir and al-Muyassar identify the zalimin here as the ones who begin, those who initiate the aggression against people. The clause names the party at fault, so that mercy at the end of the verse is never mistaken for a verdict that both sides were the same.",
            "bn": "আয়াতটি শেষ হয় 'ইন্নাহু লা ইউহিব্বুয যালিমীন' — তিনি সীমালঙ্ঘনকারীদের পছন্দ করেন না; আর একে সহজেই ভুল করে সেই মানুষটির প্রতি সতর্কবাণী মনে করা যায় যে এখনো ক্ষমা করবে কি না ভাবছে। ইবনে কাসীর ও তাফসীর মুয়াসসার — দুজনেই এখানে 'যালিমীন' বলতে বোঝেন তাদের, যারা শুরু করে, অর্থাৎ যারা মানুষের বিরুদ্ধে আগে বাড়াবাড়ি শুরু করে। বাক্যাংশটি দোষী পক্ষটির নাম বলে দেয়, যাতে আয়াতের শেষের দয়াকে কেউ 'দুই পক্ষই সমান' এই রায় বলে ভুল না করে।"
          },
          {
            "en": "The verses on either side keep the balance. 42:39 has already praised those who defend themselves when tyranny strikes them; 42:41 says there is no blame upon one who retaliates after being wronged; 42:42 puts the blame on those who oppress people and rebel on the earth. Only then does 42:43 call patience and forgiveness among the matters of resolve. Pardon is a rank in this surah, never a duty owed to an oppressor.",
            "bn": "দুই পাশের আয়াতগুলো ভারসাম্য ধরে রাখে। 42:39 আগেই প্রশংসা করেছে তাদের, যারা বাড়াবাড়ির শিকার হলে নিজেদের প্রতিরক্ষা করে; 42:41 বলে, অত্যাচারিত হওয়ার পর যে প্রতিবিধান নেয় তার বিরুদ্ধে কোনো অভিযোগ নেই; 42:42 দোষ চাপায় তাদের উপর যারা মানুষের প্রতি জুলুম করে ও যমীনে অন্যায় বিদ্রোহ করে। এরপরই কেবল 42:43 ধৈর্য ও ক্ষমাকে দৃঢ়সংকল্পের কাজ বলে। এই সূরায় ক্ষমা একটি মর্যাদা, জালিমের প্রতি পাওনা কোনো কর্তব্য নয়।"
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
          "bn": "অভিযোগের ঠিকানা বদলায়"
        },
        "p": [
          {
            "en": "Innama as-sabilu 'ala alladhina yazlimuna an-nas: the way is only against those who wrong people. The verse answers the one before it. 42:41 closed with ma 'alayhim min sabil, there is no way against those who defend themselves after being wronged. Here the same noun returns with the article and the restricting innama in front of it, so the sentence does two things at once. It names where the sabil does lie, and by the word only it shuts it away from everyone the previous verse has just cleared.",
            "bn": "ইন্নামাস সাবীলু আলাল্লাযীনা ইয়াযলিমূনান নাস: পথ তো কেবল তাদের বিরুদ্ধে, যারা মানুষের উপর জুলুম করে। আয়াতটি আগের আয়াতের জবাব। ৪২:৪১ শেষ হয়েছিল মা আলাইহিম মিন সাবীল দিয়ে: জুলুমের শিকার হয়ে যারা আত্মরক্ষা করে, তাদের বিরুদ্ধে কোনো পথ নেই। এখানে সেই একই শব্দ ফিরে এসেছে নির্দিষ্টবাচক রূপে, আর সামনে বসেছে সীমাবদ্ধকারী ইন্নামা। ফলে বাক্যটি একসঙ্গে দুটি কাজ করে। সাবীল আসলে কার উপর, তা বলে দেয়। আবার 'কেবল' শব্দটি দিয়ে আগের আয়াতে যাদের নির্দোষ বলা হলো, তাদের থেকে সেটা সরিয়ে রাখে।"
          },
          {
            "en": "Al-Qurtubi quotes Ibn al-'Arabi on a wider symmetry. This verse, he says, stands opposite the earlier one in Bara'ah, ma 'ala al-muhsinina min sabil, there is no way against those who do good (9:91). Just as Allah removed the sabil from the one who does good, He placed it upon the one who wrongs, and the account of the two kinds of people is complete. Read together, the two verses say that a charge in the court of the Qur'an follows conduct, never mere involvement in a dispute.",
            "bn": "কুরতুবী এখানে ইবনুল আরাবীর একটি পর্যবেক্ষণ উদ্ধৃত করেন। তাঁর মতে এ আয়াত সূরা বারাআর আগের আয়াতটির বিপরীতে দাঁড়িয়ে আছে: মা আলাল মুহসিনীনা মিন সাবীল, সৎকর্মশীলদের বিরুদ্ধে কোনো পথ নেই (৯:৯১)। আল্লাহ যেমন সৎকর্মশীলের উপর থেকে সাবীল তুলে নিয়েছেন, তেমনি তা রেখেছেন জালিমের উপর। এভাবে দুই দলের হিসাব পুরো হয়ে গেছে। দুটি আয়াত পাশাপাশি পড়লে বোঝা যায়, কুরআনের বিচারে দায় আসে আচরণ থেকে। শুধু কোনো বিবাদে জড়িয়ে পড়লেই কেউ দোষী হয় না।"
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
            "bn": "সাবীল শব্দের আক্ষরিক অর্থ রাস্তা। কোন রাস্তার কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারেরা একমত নন। তাবারী শব্দের সবচেয়ে কাছে থাকেন। তাঁর ব্যাখ্যায়: হে মানুষ, তোমাদের জন্য পথ খোলা তাদের বিরুদ্ধে, যারা জুলুম আর সীমালঙ্ঘন করে মানুষের উপর চড়াও হয়। তোমরা তাদের জুলুমের শাস্তি দিতে পারো। কিন্তু যে তার উপর জুলুমকারীর কাছ থেকে নিজের হক আদায় করে নিল, তার বিরুদ্ধে সে পথ খোলা নেই। তাবারীর কাছে সাবীল তাই করণীয়ের একটি পথ, যা মজলুমের ও সাধারণ মানুষের হাতে।"
          },
          {
            "en": "Ibn Kathir reads it as a weight rather than a road: only the haraj and 'anat, the blame and the burden, lie upon them. The abridged English of his tafsir puts it as the burden of sin. As-Sa'di gives it a legal edge: the case for a punishment set by the Shari'ah is directed only at them. Al-Muyassar uses al-mu'akhadhah, being taken to task. Blame, sin, lawful punishment and accountability are four different claims, and the verse's one word holds room for all of them.",
            "bn": "ইবন কাসীরের কাছে সাবীল রাস্তা নয়, বোঝা। তিনি বলেন, সংকীর্ণতা আর কষ্ট, অর্থাৎ দোষের ভার, কেবল তাদের উপর। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একে বলে গুনাহের বোঝা। সা'দী এতে আইনি মাত্রা যোগ করেন: শরীয়তসম্মত শাস্তির দাবি কেবল তাদের দিকেই ধাবিত হয়। মুয়াসসার শব্দ বেছে নেয় মুআখাযা, মানে পাকড়াও হওয়া, জবাবদিহির মুখে পড়া। দোষ, গুনাহ, শরীয়তের শাস্তি আর জবাবদিহি চারটি আলাদা দাবি। আয়াতের একটিমাত্র শব্দে চারটিরই জায়গা আছে।"
          },
          {
            "en": "The differences have consequences. At-Tabari's reading hands people a lawful path to answer the aggressor, and as-Sa'di ties the answer to what the Shari'ah itself sets, not to private anger. Ibn Kathir's and al-Muyassar's readings point beyond any court, to a burden carried before Allah. Held together, they keep the verse from shrinking into either a mere feeling of grievance or a mere permission to strike back. The aggressor faces both a lawful answer and an account that does not close.",
            "bn": "এই পার্থক্যগুলোর ফল আছে। তাবারীর ব্যাখ্যা মানুষকে জালিমের জবাব দেওয়ার একটি বৈধ পথ দেয়। সা'দী সেই জবাবকে বেঁধে দেন শরীয়ত যা নির্ধারণ করেছে তার সঙ্গে, ব্যক্তিগত রাগের সঙ্গে নয়। ইবন কাসীর আর মুয়াসসারের ব্যাখ্যা যেকোনো আদালতের বাইরে চলে যায়, আল্লাহর সামনে বয়ে বেড়ানো এক বোঝার দিকে। সব কটি একসঙ্গে ধরলে আয়াতটি শুধু ক্ষোভের অনুভূতি হয়ে থাকে না, আবার শুধু পাল্টা আঘাতের অনুমতিও হয়ে যায় না। জালিমের সামনে থাকে বৈধ প্রতিকার, আর এমন এক হিসাব যা কখনো বন্ধ হয় না।"
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
            "bn": "আল্লাযীনা ইয়াযলিমূনান নাস, মানুষের উপর জুলুমকারী কারা? ইবন কাসীর আর বাগাভী একই ছোট উত্তর দেন: যারা মানুষের উপর আগে জুলুম শুরু করে। কুরতুবী বলেন, মানে তাদের উপর সীমালঙ্ঘন করে, আর জানান যে অধিকাংশ আলেমের মত এটাই। ইবন জুরাইজের একটি সংকীর্ণ ব্যাখ্যাও তিনি লিখে রাখেন: তারা শিরকের মাধ্যমে মানুষের উপর জুলুম করে, যা তাদের দ্বীনের বিরোধী। তাফসীরের ভার অবশ্য প্রথম ব্যাখ্যার দিকেই। সেখানে আসল প্রশ্ন একটাই: কে আগে হাত বাড়িয়েছে।"
          },
          {
            "en": "To show what beginning means, Ibn Kathir cites a hadith he calls sahih. Abu Hurayrah (RA) reported that the Messenger of Allah ﷺ said: \"Al-mustabban ma qala fa-'ala al-badi' ma lam ya'tadi al-mazlum\": when two people revile each other, what they both say falls upon the one who began, so long as the wronged one does not overstep. Muslim records it in his Sahih (2587). The final clause matters as much as the first, because the one who answers keeps his innocence only within the limit.",
            "bn": "শুরু করা বলতে কী বোঝায়, তা দেখাতে ইবন কাসীর একটি হাদীস আনেন, যাকে তিনি সহীহ বলেন। আবু হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: \"আলমুসতাব্বানি মা কালা ফাআলাল বাদি মা লাম ইয়া'তাদিল মাযলূম\", দুজন যখন একে অপরকে গালি দেয়, দুজনের বলা সব কথার দায় পড়ে যে শুরু করেছে তার উপর, যতক্ষণ মজলুম সীমা না ছাড়ায়। ইমাম মুসলিম হাদীসটি তাঁর সহীহ গ্রন্থে এনেছেন (২৫৮৭)। শেষ অংশটা প্রথম অংশের মতোই জরুরি। জবাবদাতা নির্দোষ থাকে কেবল সীমার ভেতরে থাকলে।"
          },
          {
            "en": "In most quarrels each side counts the other's reply as the first blow, and the argument becomes a contest over who started it. The hadith settles that question and then sets a second question beside it. The person who began carries the weight of both voices, yet the person who answered loses that shelter the moment his answer goes past what he received. So the verse asks every reader two things in turn: did I begin it, and did I go beyond the measure?",
            "bn": "বেশির ভাগ ঝগড়ায় দুই পক্ষই অন্যজনের জবাবকে প্রথম আঘাত বলে গোনে। তখন তর্কটা দাঁড়ায় কে শুরু করেছে, সেই প্রশ্নে। হাদীসটি এ প্রশ্নের মীমাংসা করে, তারপর পাশে আরেকটি প্রশ্ন রেখে দেয়। যে শুরু করেছে, দুজনের কথার ভার তার কাঁধে। কিন্তু জবাবদাতা যে মুহূর্তে যা পেয়েছে তার চেয়ে বেশি ফিরিয়ে দেয়, সেই আশ্রয় সে হারায়। তাই আয়াতটি প্রত্যেক পাঠককে পরপর দুটি প্রশ্ন করে: আমি কি শুরু করেছিলাম? আর আমি কি মাপ ছাড়িয়ে গিয়েছিলাম?"
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
            "bn": "ওয়া ইয়াবগূনা ফিল আরদি বিগাইরিল হাক্ক: আর তারা অন্যায়ভাবে যমীনে সীমা ছাড়ায়। তাবারী বাগইয়ের ব্যাখ্যা দেন এভাবে: আল্লাহর যমীনে রব তাদের জন্য যে সীমা হালাল করেছেন, তা পেরিয়ে তারা ঢুকে পড়ে এমন কিছুতে যার অনুমতি তিনি দেননি, আর এভাবে অন্যায়ভাবে সেখানে ফাসাদ ছড়ায়। মুয়াসসার প্রায় হুবহু একই কথা বলে। সা'দী ক্ষেত্রটা আরও বড় করেন। তাঁর মতে এ অংশে মানুষের উপর সব রকম জুলুম আর বাড়াবাড়ি ঢুকে পড়ে: তাদের জানে, মালে আর সম্মানে।"
          },
          {
            "en": "Al-Qurtubi gathers a wider spread of names. Most scholars, he reports, place the baghy in lives and property. Muqatil makes it acting with sins, and al-Baghawi gives the same gloss. Abu Malik ties it to a particular group: it is what the disbelievers of Quraysh hoped for, that Makkah should have a religion other than Islam. Along that line Ibn Zayd held that the whole passage was abrogated by the command to fight and applied to the idolaters alone. Qatada said it is general, and al-Qurtubi adds that the plain wording points the same way.",
            "bn": "কুরতুবী আরও বেশি মত একসঙ্গে আনেন। তিনি জানান, অধিকাংশের মতে এই বাড়াবাড়ি জান ও মালে। মুকাতিলের মতে এর অর্থ গুনাহের কাজ করা, আর বাগাভীও একই ব্যাখ্যা দেন। আবু মালিক এটিকে একটি নির্দিষ্ট দলের সঙ্গে যুক্ত করেন: কুরাইশের কাফেররা চাইত মক্কায় ইসলাম ছাড়া অন্য কোনো দ্বীন থাকুক, সেটাই এই বাড়াবাড়ি। এই ধারায় ইবন যায়দ বলেছেন, পুরো অংশটি জিহাদের হুকুমে রহিত হয়ে গেছে এবং এটি কেবল মুশরিকদের বেলায় প্রযোজ্য ছিল। কাতাদা বলেছেন, আয়াতটি সাধারণ। কুরতুবী যোগ করেন, বাক্যের বাহ্যিক অর্থও সেদিকেই ইঙ্গিত করে।"
          },
          {
            "en": "One thing must be said plainly. The verse describes those who wrong people and overstep without right, and the commentators who name a group are speaking of the people of their reading, such as the Quraysh of Abu Malik's gloss. It licenses nothing against any living person or community, and no one is named here as the oppressor of today. The verse supplies the description; matching it to a face belongs to evidence and due process, and its first reader should be oneself.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে তাদের, যারা মানুষের উপর জুলুম করে আর অন্যায়ভাবে সীমা ছাড়ায়। যে তাফসীরকারেরা কোনো দলের নাম নেন, তাঁরা নিজ নিজ ব্যাখ্যার মানুষদের কথাই বলেন, যেমন আবু মালিকের ব্যাখ্যায় কুরাইশ। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের দিনের জালিম হিসেবে এখানে কারও নাম নেওয়া হয়নি। আয়াত শুধু চেহারাটা এঁকে দেয়। সেই চেহারা কার সঙ্গে মেলে, তা ঠিক হয় প্রমাণ আর ন্যায্য বিচারে, আর এটি প্রথমে মিলিয়ে দেখার কথা নিজের সঙ্গেই।"
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
            "bn": "ইবন কাসীর এ আয়াতের আলোচনা শেষ করেন ইবন আবী হাতিমের বর্ণিত একটি ঘটনা দিয়ে। মুহাম্মাদ ইবন ওয়াসি মক্কায় পৌঁছলে এক পাহারা চৌকিতে তাঁকে আটকানো হয়। তাঁকে নিয়ে যাওয়া হয় বসরার তৎকালীন শাসক মারওয়ান ইবনুল মুহাল্লাবের কাছে। শাসক জানতে চাইলেন, আপনার কী প্রয়োজন? তিনি বললেন, সম্ভব হলে আপনি বনু আদীর সেই ভাইয়ের মতো হোন। কে সেই ভাই? তিনি জানালেন, আলা ইবন যিয়াদ। তিনি একবার এক বন্ধুকে একটি দায়িত্বে নিয়োগ দিয়ে তাকে একটি চিঠি লিখেছিলেন।"
          },
          {
            "en": "The letter said: if you can, never spend a night except with your back light, your stomach lean, and your hand clean of the blood and the wealth of the Muslims; if you do that, there will be no sabil against you. Then it quoted this verse. The governor said he had spoken the truth and given sincere counsel, and granted Muhammad ibn Wasi' his actual request, to rejoin his family. This is a report about early Muslims, not a hadith of the Prophet ﷺ, and its use of the verse is a self-audit for anyone holding power.",
            "bn": "চিঠিতে লেখা ছিল: পারলে কোনো রাত এমনভাবে কাটাবে না, যখন তোমার পিঠ হালকা নয়, পেট খালি নয়, আর হাত মুসলমানদের রক্ত ও সম্পদ থেকে পরিষ্কার নয়। এমন করতে পারলে তোমার বিরুদ্ধে কোনো সাবীল থাকবে না। এরপর চিঠিতে এই আয়াত উদ্ধৃত ছিল। শাসক বললেন, আল্লাহর কসম, তিনি সত্য বলেছেন আর আন্তরিক উপদেশ দিয়েছেন। তারপর মুহাম্মাদ ইবন ওয়াসির আসল আবেদনটি মঞ্জুর করলেন: পরিবারের কাছে ফিরে যাওয়া। এটি প্রথম যুগের মুসলমানদের একটি ঘটনা, নবী ﷺ-এর হাদীস নয়। এখানে আয়াতটি ব্যবহৃত হয়েছে ক্ষমতাবানের আত্মজিজ্ঞাসা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Releasing the One Who Wronged",
          "bn": "জালিমকে দায়মুক্ত করা যায় কি"
        },
        "p": [
          {
            "en": "Al-Qurtubi uses the verse to open a practical question: may a person release someone from what he owes, so that it is no longer held against him? He reports that Sa'id ibn al-Musayyib released no one, whether from a slight to his honour or from a debt. Sulayman ibn Yasar and Muhammad ibn Sirin released people from both. Malik held that one may release from property but not from honour, and when asked about a man who wrongs another he cited this verse and said he would not grant him release.",
            "bn": "কুরতুবী এ আয়াত থেকে একটি বাস্তব প্রশ্ন তোলেন: কারও কাছে পাওনা থাকলে কি তাকে দায়মুক্ত করে দেওয়া যায়, যাতে সেটা আর তার বিরুদ্ধে না থাকে? তিনি জানান, সাঈদ ইবনুল মুসাইয়্যিব কাউকেই দায়মুক্ত করতেন না, না সম্মানহানির দায় থেকে, না সম্পদের দায় থেকে। সুলাইমান ইবন ইয়াসার আর মুহাম্মাদ ইবন সীরীন দুটো থেকেই মাফ করে দিতেন। মালিকের মত ছিল, সম্পদের দায় মাফ করা যায়, সম্মানহানির দায় নয়। কেউ কারও উপর জুলুম করলে কী হবে, জিজ্ঞেস করা হলে তিনি এই আয়াত পড়ে বলেন, আমি তাকে দায়মুক্ত করার পক্ষে নই।"
          },
          {
            "en": "Ibn al-'Arabi, quoted by al-Qurtubi, sets out the reasons. The first view holds that no person should make lawful what Allah forbade, as if altering His ruling. The second says the right is his own, so he may drop it. Malik's middle view distinguishes the two cases: a debtor who cannot pay deserves gentleness, while an oppressor left unanswered may grow bold and the wrongdoers press on with their deeds. The verse's sabil, on this reading, is something the wronged party may sometimes waive and sometimes should keep.",
            "bn": "কুরতুবী ইবনুল আরাবীর বরাতে প্রতিটি মতের যুক্তি তুলে ধরেন। প্রথম মতের যুক্তি: আল্লাহ যা হারাম করেছেন তা হালাল করে দেওয়া যায় না, তাতে তাঁর বিধান বদলে দেওয়ার মতো হয়। দ্বিতীয় মতের যুক্তি: হকটা তার নিজের, তাই সে চাইলে ছেড়ে দিতে পারে। মালিকের মাঝামাঝি মত দুটি অবস্থাকে আলাদা করে। যে দেনাদার শোধ করতে পারছে না, সে নরম আচরণ পাওয়ার যোগ্য। কিন্তু জালিমকে ছেড়ে দিলে সে আরও সাহস পায়, আর জালিমরা তাদের কুকর্ম চালিয়েই যায়। এই ব্যাখ্যায় আয়াতের সাবীল এমন এক হক, যা মজলুম কখনো ছেড়ে দিতে পারে, কখনো ধরে রাখাই উচিত।"
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
            "bn": "কুরতুবীর দ্বিতীয় একটি মাসআলায় জনজীবনে আয়াতটির প্রয়োগ দেখা যায়। কোনো শাসক একটি শহরের উপর নির্দিষ্ট অঙ্কের অর্থ চাপিয়ে দিলেন, আর লোকেরা নিজ নিজ সম্পদের অনুপাতে তা দেয়। কেউ যদি এই দায় থেকে বেরিয়ে যেতে পারে, তবে কি সে তা করবে, যদিও তখন বাকিদের পুরো অঙ্কটাই দিতে হবে? সাহনূন বলেছেন, না। আবু জাফর দাউদী বলেছেন, হ্যাঁ। এ বিষয়ে তিনি মালিকের একটি কাছাকাছি মত দিয়ে দলিল দেন। তাঁর যুক্তি: জুলুমে কোনো ভাগাভাগির দায় নেই। অন্যদের উপর জুলুম বেড়ে যাবে, এই ভয়ে কাউকে নিজে জুলুমের ভেতরে ঢুকতে হয় না।"
          },
          {
            "en": "Ad-Dawudi then quotes this verse as his proof. As he applies it, the sabil lies on whoever imposed the wrong, not on the person who slipped out of it. Al-Qurtubi presents the two answers and leaves Sahnun's view on record, so the matter remains a disagreement among the Maliki jurists rather than a settled rule. Whichever answer a reader follows, the verse's own starting point is untouched: the burden of an unjust demand belongs first to whoever makes it.",
            "bn": "দাউদী এরপর এই আয়াতকেই দলিল হিসেবে পেশ করেন। তাঁর প্রয়োগে সাবীল তার উপর যে জুলুমটা চাপিয়েছে, তার উপর নয় যে কোনোভাবে সেখান থেকে বেরিয়ে আসতে পেরেছে। কুরতুবী দুটি উত্তরই উল্লেখ করেন, সাহনূনের মতও রেখে দেন। ফলে বিষয়টি মালিকী ফকীহদের মধ্যে মতভেদ হিসেবেই থাকে, চূড়ান্ত বিধান হয়ে যায় না। যে উত্তরই মানা হোক, আয়াতের মূল কথাটি অটুট থাকে: অন্যায় দাবির বোঝা সবার আগে তার, যে দাবিটা চাপায়।"
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
            "bn": "উলাইকা লাহুম আযাবুন আলীম: তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। তাবারীর ব্যাখ্যায় এ শাস্তি আল্লাহর পক্ষ থেকে, কিয়ামতের দিন, জাহান্নামে, কষ্টদায়ক ও যন্ত্রণাময়। মুয়াসসারও তাঁর অনুসরণ করে। ইবন কাসীর আলীম শব্দের অর্থ করেন কঠিন ও পীড়াদায়ক। সা'দী দুটি কথা যোগ করেন: যন্ত্রণা পৌঁছায় অন্তরে ও দেহে দুই জায়গাতেই, আর তা হয় তাদের জুলুম ও বাড়াবাড়ির মাপ অনুযায়ী। ৪২:৪০ মজলুমের জন্য যে মাপের নিয়ম বেঁধে দিয়েছিল, শাস্তিতেও সেই নিয়ম, এবার যে শুরু করেছে তার বেলায়।"
          },
          {
            "en": "The verse sits between two others that keep it from becoming a slogan. Before it, 42:41 clears whoever answers a wrong. After it, 42:43 says that whoever is patient and forgives has done something of firm resolve. Ma'arif al-Qur'an, on the whole passage, reports Ibrahim an-Nakha'i saying the early believers disliked being humiliated by wrongdoers who, left unchecked, would grow bolder. It concludes that forgiveness suits the repentant and a firm response suits the persistent.",
            "bn": "আয়াতটি দুটি আয়াতের মাঝখানে বসে আছে, আর সে দুটিই একে স্লোগান হয়ে যেতে দেয় না। আগে ৪২:৪১ অন্যায়ের জবাবদাতাকে নির্দোষ বলেছে। পরে ৪২:৪৩ বলছে, যে ধৈর্য ধরে ও ক্ষমা করে, সে দৃঢ় সংকল্পের কাজ করে। পুরো অংশের আলোচনায় মাআরিফুল কুরআন ইবরাহীম নাখাঈর কথা আনে: প্রথম যুগের মুমিনরা চাইতেন না জালিমরা তাদের অপমান করুক, কারণ ছাড় পেলে জালিম আরও সাহসী হয়। তার উপসংহার: যে অনুতপ্ত, তার জন্য ক্ষমা ভালো; যে জুলুমে অটল, তার বেলায় প্রতিকারই ভালো।"
          },
          {
            "en": "So the verse does two jobs for a reader. For someone who has been hurt, it lifts a false guilt: answering within the limit is not the fault, and the weight sits elsewhere. For anyone who holds power, over a household, a team or a stranger's trust, it is the letter al-'Ala' ibn Ziyad wrote. The question is not whether oppressors exist somewhere, but whether tonight my own hand is clean of anyone's blood, wealth and honour.",
            "bn": "পাঠকের জন্য তাই আয়াতটি দুটি কাজ করে। যে আঘাত পেয়েছে, তার মন থেকে এক মিথ্যা অপরাধবোধ নামিয়ে দেয়। সীমার ভেতরে থেকে জবাব দেওয়া দোষ নয়, ভার অন্যখানে। আর যার হাতে যেকোনো ক্ষমতা আছে, পরিবারে, কর্মস্থলে বা কোনো অচেনা মানুষের আস্থায়, তার জন্য এ আয়াত আলা ইবন যিয়াদের সেই চিঠি। প্রশ্নটা এই নয় যে জালিম কোথাও আছে কি না। প্রশ্ন হলো, আজ রাতে আমার নিজের হাত কারও রক্ত, সম্পদ আর সম্মান থেকে পরিষ্কার কি না।"
          }
        ]
      }
    ]
  }
});
