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
  }
});
