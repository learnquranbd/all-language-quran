/**
 * Tadabbur long-form articles — surah 112.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "112:1-4": {
    "sections": [
      {
        "h": {
          "en": "Asked for Their Lord's Lineage",
          "bn": "রবের বংশপরিচয় জানতে চাওয়া"
        },
        "p": [
          {
            "en": "At-Tabari opens the surah with two accounts of its occasion. In one, the polytheists asked the Messenger of Allah ﷺ for the lineage of his Lord; he gives it from Ubayy ibn Ka'b (RA), from Jabir (RA), and from 'Ikrimah, in whose wording they asked what He is and of what He is made. In the other, Jews came and said: Allah created creation, so who created Him? Al-Baghawi adds, from Ibn Abbas (RA), 'Amir ibn at-Tufayl asking whether He was of gold, silver, iron or wood, and from Qatadah and others, rabbis asking whether He eats and drinks and who inherits from Him.",
            "bn": "সূরাটি কেন নাজিল হলো, তাবারী শুরুতেই তার দুটি বর্ণনা আনেন। একটিতে মুশরিকরা নবী ﷺ-এর কাছে তাঁর রবের বংশপরিচয় জানতে চেয়েছিল। এ বর্ণনা তিনি এনেছেন উবাই ইবনে কা'ব (রাঃ), জাবির (রাঃ) আর ইকরিমার সূত্রে। ইকরিমার ভাষায় তারা জিজ্ঞেস করেছিল, তিনি কী, আর কোন জিনিসে তৈরি। অন্যটিতে একদল ইহুদি এসে বলেছিল: আল্লাহ তো সৃষ্টিকে সৃষ্টি করলেন, তাহলে তাঁকে সৃষ্টি করল কে? বাগাভী আরও আনেন ইবনে আব্বাস (রাঃ)-এর সূত্রে আমির ইবনুত তুফাইলের প্রশ্ন: তিনি কি সোনার, রুপার, লোহার, নাকি কাঠের? আর কাতাদা প্রমুখের সূত্রে ইহুদি পণ্ডিতদের প্রশ্ন: তিনি কি খান, পান করেন? তাঁর উত্তরাধিকারী হবে কে?"
          },
          {
            "en": "At-Tirmidhi records the first account (3364) from Abu al-'Aliyah from Ubayy (RA): the polytheists said to the Messenger of Allah ﷺ, give us your Lord's lineage, so Allah revealed: Say, He is Allah, Ahad; Allah, as-Samad. As-Samad is He who does not beget and was not begotten, for nothing is born but it will die, and nothing dies but it is inherited from, and Allah does not die and is not inherited from. None comparable to Him: He has no likeness and no equal, and nothing is like Him. At-Tirmidhi then gives it without Ubayy (3365) and judges that version more correct.",
            "bn": "প্রথম বর্ণনাটি তিরমিযী লিপিবদ্ধ করেছেন (৩৩৬৪), আবুল আলিয়া থেকে, তিনি উবাই (রাঃ) থেকে: মুশরিকরা নবী ﷺ-কে বলল, আমাদের কাছে আপনার রবের বংশপরিচয় দিন। তখন আল্লাহ নাজিল করলেন: বলুন, তিনি আল্লাহ, আহাদ; আল্লাহ আস-সামাদ। আস-সামাদ তিনি, যিনি জন্ম দেননি, যাঁকে জন্মও দেওয়া হয়নি। কারণ যা কিছু জন্মায়, তা মরবেই; আর যা কিছু মরে, অন্যরা তার উত্তরাধিকারী হয়। অথচ আল্লাহ মরেন না, তাঁর উত্তরাধিকারীও কেউ হয় না। তাঁর সমকক্ষ কেউ নেই, মানে তাঁর সদৃশ নেই, সমান নেই, তাঁর মতো কিছুই নেই। এরপর তিরমিযী বর্ণনাটি উবাইয়ের নাম ছাড়া আনেন (৩৩৬৫) এবং বলেন, এই রূপটিই বেশি বিশুদ্ধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Qul, Huwa and a Pure Surah",
          "bn": "কুল, হুয়া আর খাঁটি সূরা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the opening word as a charge: say it decisively, believing it and knowing its meaning. Ma'arif al-Qur'an hears in the same imperative a pointer to the messengership of the one addressed. At-Tabari draws out the whole reply: say, Muhammad, to those asking you about your Lord's lineage, His description and who created Him, that the Lord you asked me about is Allah, to whom the worship of all things belongs, to whom alone worship is fitting and to nothing besides Him.",
            "bn": "সা'দী প্রথম শব্দটিকে পড়েন একটি নির্দেশ হিসেবে: দৃঢ়ভাবে বলুন, মনে বিশ্বাস রেখে, অর্থ জেনে। মাআরিফুল কুরআন একই আদেশে দেখে, যাঁকে বলা হচ্ছে তাঁর রিসালাতের ইঙ্গিত। তাবারী পুরো জবাবটি খুলে বলেন: হে মুহাম্মাদ, যারা আপনার কাছে আপনার রবের বংশ, তাঁর গুণ আর তাঁকে কে সৃষ্টি করেছে তা জানতে চায়, তাদের বলুন: যে রবের কথা তোমরা জিজ্ঞেস করেছ, তিনি আল্লাহ। সবকিছুর ইবাদত তাঁরই প্রাপ্য। ইবাদত কেবল তাঁরই জন্য শোভা পায়, তিনি ছাড়া আর কিছুর জন্য নয়।"
          },
          {
            "en": "Al-Qurtubi presses on the pronoun. The people of tafsir, he says, held that the verse came as a reply to the polytheists who asked whether their Lord was of gold, copper or brass, and in huwa, He, lies the place of the reply; drop it and the verse loses its sense. At-Tabari, explaining as-Samad, carries in a report from al-Hasan and Qatadah the remark that this is a khalisah surah, a pure one, with nothing in it of the affairs of this world or the next. Al-Qurtubi links the name al-Ikhlas to its carrying the names and attributes of Allah.",
            "bn": "কুরতুবী জোর দেন সর্বনামটির ওপর। তিনি বলেন, তাফসীরবিদদের মতে আয়াতটি এসেছিল মুশরিকদের জবাবে, যারা জানতে চেয়েছিল তাঁর রব সোনার, তামার, নাকি পিতলের। আর হুয়া, অর্থাৎ তিনি, এই শব্দেই জবাবের জায়গাটি চিহ্নিত। শব্দটি বাদ দিলে আয়াতের অর্থই আর থাকে না। আস-সামাদের ব্যাখ্যায় তাবারী হাসান ও কাতাদার সূত্রে আসা একটি বর্ণনায় এ কথা আনেন: এটি খালিসা সূরা, খাঁটি সূরা, এতে দুনিয়া বা আখিরাতের কোনো বিষয়ের উল্লেখ নেই। কুরতুবী আল-ইখলাস নামটিকে যুক্ত করেন এ কথার সঙ্গে যে, সূরাটি আল্লাহর নাম ও গুণ ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahad and Wahid Side by Side",
          "bn": "আহাদ আর ওয়াহিদ পাশাপাশি"
        },
        "p": [
          {
            "en": "Here the commentators differ. Al-Baghawi glosses ahad as wahid and says there is no difference between the two, pointing to the reading of Ibn Mas'ud (RA): qul huwa Allahu al-wahid. Al-Qurtubi traces ahad to the root w-h-d, its waw turned to a hamza, and glosses it as al-wahid al-witr, the single, the unpaired, who has no likeness, no peer, no consort, no child and no partner; he refers the fuller comparison of wahid and ahad to his comment on al-Baqarah and to his book on the divine names.",
            "bn": "এখানে মুফাসসিরদের কথা একরকম নয়। বাগাভী আহাদের অর্থ করেন ওয়াহিদ এবং বলেন দুটির মধ্যে কোনো পার্থক্য নেই। প্রমাণ হিসেবে আনেন ইবনে মাসউদ (রাঃ)-এর কিরাআত: কুল হুয়াল্লাহুল ওয়াহিদ। কুরতুবী আহাদের মূল দেখান ও-হ-দ ধাতুতে, যার ওয়াও বদলে হামযা হয়েছে। তাঁর ব্যাখ্যায় আহাদ মানে আল-ওয়াহিদ আল-বিতর: একক, বেজোড়, যাঁর কোনো সদৃশ নেই, সমতুল্য নেই, স্ত্রী নেই, সন্তান নেই, শরিক নেই। ওয়াহিদ আর আহাদের বিস্তারিত তুলনার জন্য তিনি পাঠককে পাঠান সূরা বাকারার আলোচনায় আর আল্লাহর নামের ওপর লেখা তাঁর গ্রন্থে।"
          },
          {
            "en": "Ibn Kathir, on a report from 'Ikrimah, explains it as the one, the unique, who has no peer, no helper, no rival, no likeness and no equal, and adds that the word is applied in affirmation to none but Allah, because He is perfect in all His attributes and acts. Ma'arif al-Qur'an says both words are applied to Allah, but ahad carries an added sense: beyond composition, plurality and resemblance. As-Sa'di says oneness is confined to Him; the Muyassar has Him alone in divinity, lordship, names and attributes, sharing them with none.",
            "bn": "ইবন কাসীর ইকরিমার একটি বর্ণনার সূত্রে এর ব্যাখ্যা দেন: তিনি একক, অনন্য, যাঁর কোনো সমকক্ষ নেই, সহকারী নেই, প্রতিদ্বন্দ্বী নেই, সদৃশ নেই, সমান নেই। সঙ্গে যোগ করেন, হ্যাঁ-বাচক বাক্যে এ শব্দ আল্লাহ ছাড়া আর কারও জন্য ব্যবহার হয় না, কারণ তিনি তাঁর সব গুণ ও কাজে পরিপূর্ণ। মাআরিফুল কুরআন বলে, দুটি শব্দই আল্লাহর জন্য ব্যবহৃত হয়, তবে আহাদে বাড়তি একটি অর্থ আছে: তিনি গঠন, বহুত্ব আর সাদৃশ্যের ঊর্ধ্বে। সা'দী বলেন, একত্ব কেবল তাঁর মধ্যেই সীমাবদ্ধ। মুয়াসসারের ভাষায় তিনি উলূহিয়াত, রুবূবিয়াত, নাম ও গুণে একক, এতে কেউ তাঁর অংশীদার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Glosses on As-Samad",
          "bn": "আস-সামাদের ব্যাখ্যাগুলো"
        },
        "p": [
          {
            "en": "At-Tabari first reads as-Samad as the Worshipped, to whom alone worship is fitting, then sets out the disagreement. Some said: He who is not hollow and neither eats nor drinks; he gives it from Ibn Abbas (RA), from Mujahid as solid, without a hollow, from al-Hasan, Sa'id ibn Jubayr, ad-Dahhak and 'Ikrimah, and from ash-Sha'bi as he who does not eat food or drink drink. Others said, with 'Ikrimah: He from whom nothing comes out. Others: He who neither begets nor is begotten, the gloss in Ubayy's report, from Abu al-'Aliyah and Muhammad ibn Ka'b.",
            "bn": "তাবারী প্রথমে আস-সামাদের অর্থ করেন সেই মা'বুদ, ইবাদত কেবল যাঁর জন্যই শোভা পায়। তারপর মতভেদগুলো সাজিয়ে দেন। কেউ বলেছেন: যিনি ফাঁপা নন, যিনি খান না, পান করেন না। এ মত তিনি আনেন ইবনে আব্বাস (রাঃ) থেকে; মুজাহিদ থেকে, যাঁর ভাষায় নিরেট, যাঁর ভেতরে ফাঁপা নেই; আর হাসান, সাঈদ ইবনে জুবাইর, দাহহাক ও ইকরিমা থেকে। শা'বীর ভাষায়: যিনি খাবার খান না, পানীয় পান করেন না। কেউ ইকরিমার সঙ্গে বলেছেন: যাঁর থেকে কিছুই বের হয় না। আবার কেউ বলেছেন: যিনি জন্ম দেননি, যাঁকে জন্মও দেওয়া হয়নি। উবাইয়ের বর্ণনার ব্যাখ্যাও এটিই। এ মত এসেছে আবুল আলিয়া আর মুহাম্মাদ ইবনে কা'ব থেকে।"
          },
          {
            "en": "Others again said: the lord whose lordship has reached its utmost, from Abu Wa'il Shaqiq. Ibn Abbas (RA), in 'Ali ibn Abi Talhah's report, unfolds it as the lord perfect in his lordship, the noble perfect in his nobility, the forbearing perfect in his forbearance, the knowing perfect in his knowledge, the wise perfect in his wisdom, and says this is His description, befitting none but Him. Al-Hasan and Qatadah said: He who remains after His creation. In ad-Dahhak's report from Ibn Abbas, carried by al-Qurtubi, and 'Ikrimah's in Ibn Kathir: He to whom creation turns in its needs.",
            "bn": "আরও কেউ বলেছেন: সেই সাইয়িদ, যাঁর নেতৃত্ব চূড়ান্ত সীমায় পৌঁছেছে। এটি আবু ওয়াইল শাকীকের কথা। আলী ইবনে আবী তালহার বর্ণনায় ইবনে আব্বাস (রাঃ) একে খুলে বলেন: তিনি সেই নেতা, যিনি নেতৃত্বে পরিপূর্ণ; সেই সম্মানিত, যিনি সম্মানে পরিপূর্ণ; সেই সহনশীল, যিনি সহনশীলতায় পরিপূর্ণ; সেই জ্ঞানী, যিনি জ্ঞানে পরিপূর্ণ; সেই প্রজ্ঞাময়, যিনি প্রজ্ঞায় পরিপূর্ণ। তিনি আরও বলেন, এ তাঁরই গুণ, আর কারও জন্য তা শোভা পায় না। হাসান ও কাতাদা বলেছেন: সৃষ্টি শেষ হয়ে যাওয়ার পরও যিনি থাকেন। কুরতুবীর আনা দাহহাকের বর্ণনায় আর ইবন কাসীরের আনা ইকরিমার বর্ণনায় ইবনে আব্বাস (রাঃ) বলেন: প্রয়োজনে সৃষ্টি যাঁর দিকে ছুটে যায়।"
          },
          {
            "en": "Then the choices differ. At-Tabari prefers the sense known in the speech of the Arabs, the lord to whom people turn and above whom there is no one, though he adds that the report of Ibn Buraydah from his father, whose narrator thought it raised no hollow to the Prophet ﷺ, would be the soundest of all were it authentic. Ibn Kathir calls that raising very strange and holds that it stops at 'Abdullah ibn Buraydah. Al-Qurtubi judges correct the meaning that derivation supports, He who is turned to in needs, and sets beside it 16:53: then when harm touches you, to Him you cry out.",
            "bn": "এরপর বাছাইয়ে তাঁদের পথ আলাদা হয়ে যায়। তাবারী সেই অর্থ পছন্দ করেন, যা আরবদের ভাষায় প্রচলিত: সেই নেতা, মানুষ যাঁর দিকে ছুটে যায়, যাঁর ওপরে আর কেউ নেই। তবে তিনি যোগ করেন, ইবনে বুরাইদা তাঁর পিতা থেকে যে বর্ণনা আনেন, যার বর্ণনাকারীর ধারণা, 'যাঁর ভেতর ফাঁপা নেই' কথাটি নবী ﷺ পর্যন্ত পৌঁছেছে, তা সহীহ হলে সেটিই হতো সবচেয়ে সঠিক মত। ইবন কাসীর নবী পর্যন্ত পৌঁছানোকে খুবই গরীব বলেন। তাঁর মতে কথাটি আবদুল্লাহ ইবনে বুরাইদার নিজের। কুরতুবী সঠিক বলেন সেই অর্থকে, যার পক্ষে শব্দের উৎপত্তি সাক্ষ্য দেয়: প্রয়োজনে যাঁর দিকে ছুটে যাওয়া হয়। পাশে রাখেন ১৬:৫৩: তারপর যখন দুঃখ-কষ্ট তোমাদের স্পর্শ করে, তখন তাঁর কাছেই তোমরা আর্তনাদ করো।"
          },
          {
            "en": "At-Tabarani, in Ibn Kathir, holds all these glosses correct and calls them attributes of our Lord: He is turned to in needs, whose lordship has reached its utmost, who has no hollow, who neither eats nor drinks, who remains after His creation. As-Sa'di reads it as He who is sought in all needs, the dwellers of the upper and lower worlds in utmost want of Him, because He is perfect in His attributes. The Muyassar joins the two: perfect in the attributes of honour, glory and greatness, whom creatures seek for their needs.",
            "bn": "ইবন কাসীরের উদ্ধৃতিতে তাবারানী এই সব ব্যাখ্যাকেই সঠিক বলেন, এবং বলেন এগুলো আমাদের রবের গুণ: প্রয়োজনে তাঁর দিকেই ছুটে যাওয়া হয়, তাঁর নেতৃত্ব চূড়ান্ত সীমায়, তাঁর ভেতরে ফাঁপা নেই, তিনি খান না, পান করেন না, সৃষ্টির পরেও তিনি থাকেন। সা'দীর ব্যাখ্যায় তিনি সব প্রয়োজনে কাঙ্ক্ষিত সত্তা। ঊর্ধ্বজগৎ আর নিম্নজগতের বাসিন্দারা চরমভাবে তাঁর মুখাপেক্ষী, কারণ তিনি তাঁর গুণাবলিতে পরিপূর্ণ। মুয়াসসার দুটিকে একসঙ্গে বলে: তিনি সম্মান, মর্যাদা আর মহত্ত্বের গুণে পরিপূর্ণ, প্রয়োজন মেটাতে সৃষ্টি যাঁর কাছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Begetting Nor Born",
          "bn": "জন্ম দেন না, জন্মও নেননি"
        },
        "p": [
          {
            "en": "At-Tabari reads both negations as statements about time. Lam yalid: He is not perishing, for nothing begets but it perishes and passes away. Lam yulad: He is not originated, as though He once was not and then came to be, for everything born exists only after it did not. Rather, he says, He is eternal and ever-lasting, never ceasing and never ending. As-Sa'di counts the two among His perfection, following from the completeness of His freedom from need. The Muyassar and Ibn Kathir put it in three nouns: He has no child, no parent and no consort.",
            "bn": "তাবারী দুটি 'না'-কেই পড়েন সময়ের কথা হিসেবে। লাম ইয়ালিদ: তিনি ধ্বংসশীল নন, কারণ যা কিছু জন্ম দেয়, তা একদিন ধ্বংস হয়ে বিলীন হয়। লাম ইউলাদ: তিনি নতুন উদ্ভূত নন যে আগে ছিলেন না, পরে হলেন। কারণ যা কিছু জন্মায়, তা অস্তিত্বে আসে না-থাকার পরে। বরং, তাবারী বলেন, তিনি অনাদি, চিরস্থায়ী, কখনো সরে যান না, কখনো শেষ হন না। সা'দী দুটিকে গণ্য করেন তাঁর পূর্ণতার অংশ হিসেবে, যা আসে তাঁর পরিপূর্ণ অমুখাপেক্ষিতা থেকে। মুয়াসসার আর ইবন কাসীর তিনটি শব্দে বলেন: তাঁর সন্তান নেই, পিতা-মাতা নেই, স্ত্রী নেই।"
          },
          {
            "en": "The commentators also name whom the verse answered. Ibn Abbas (RA), in al-Qurtubi: He did not beget as Maryam gave birth, and was not begotten as 'Isa (AS) and 'Uzayr were born; a reply to the Christians and to those who said 'Uzayr is the son of Allah. Al-Baghawi gives Muqatil's list: the Arab polytheists said the angels are Allah's daughters, the Jews said 'Uzayr, the Christians the Messiah, and Allah belied them. These verses answer a claim about Allah as the tafsirs name its holders; they license nothing against any living person or community.",
            "bn": "কাদের জবাবে আয়াতটি এল, মুফাসসিররা তা-ও বলেন। কুরতুবীর উদ্ধৃতিতে ইবনে আব্বাস (রাঃ) বলেন: তিনি জন্ম দেননি, যেমন মারইয়াম জন্ম দিয়েছিলেন; তাঁকে জন্মও দেওয়া হয়নি, যেমন জন্মেছিলেন ঈসা (আঃ) ও উযাইর। এটি খ্রিস্টানদের জবাব, আর তাদেরও, যারা বলেছিল উযাইর আল্লাহর পুত্র। বাগাভী মুকাতিলের তালিকা আনেন: আরবের মুশরিকরা বলত ফেরেশতারা আল্লাহর কন্যা, ইহুদিরা বলত উযাইর আল্লাহর পুত্র, খ্রিস্টানরা বলত মাসীহ আল্লাহর পুত্র। আল্লাহ তাদের সবার কথা মিথ্যা প্রমাণ করলেন। এ আয়াতগুলো আল্লাহ সম্পর্কে একটি দাবির জবাব দেয়, আর দাবিদারদের নাম দেন তাফসীরকারেরা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না।"
          },
          {
            "en": "On the last verse, Ibn Kathir and al-Baghawi cite a hadith qudsi that al-Bukhari records (4974) from Abu Hurayrah (RA), from the Prophet ﷺ: Allah said, the son of Adam called Me a liar, and he had no right to, and he reviled Me, and he had no right to. His calling Me a liar is his saying, He will not restore me as He began me, and the first creation is no easier for Me than restoring him. His reviling Me is his saying, Allah has taken a child, while I am the One, as-Samad; I did not beget and was not begotten, and none is comparable to Me.",
            "bn": "শেষ আয়াতের আলোচনায় ইবন কাসীর আর বাগাভী দুজনেই একটি হাদীসে কুদসী আনেন, যা বুখারী লিপিবদ্ধ করেছেন (৪৯৭৪) আবু হুরায়রা (রাঃ) থেকে, তিনি নবী ﷺ থেকে: আল্লাহ বলেন, আদমসন্তান আমাকে মিথ্যাবাদী বলেছে, অথচ সে অধিকার তার ছিল না; সে আমাকে গালি দিয়েছে, অথচ সে অধিকারও তার ছিল না। আমাকে মিথ্যাবাদী বলা হলো তার এই কথা: তিনি আমাকে আবার সৃষ্টি করবেন না, যেভাবে প্রথমবার করেছিলেন। অথচ প্রথম সৃষ্টি আমার কাছে পুনরায় সৃষ্টির চেয়ে সহজ ছিল না। আর আমাকে গালি দেওয়া হলো তার এই কথা: আল্লাহ সন্তান গ্রহণ করেছেন। অথচ আমি একক, আস-সামাদ; আমি জন্ম দিইনি, আমাকে জন্মও দেওয়া হয়নি, আর আমার সমকক্ষ কেউ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third of the Quran",
          "bn": "কুরআনের এক-তৃতীয়াংশ"
        },
        "p": [
          {
            "en": "Al-Bukhari records (5013) from Abu Sa'id al-Khudri (RA) that a man heard another reciting qul huwa Allahu ahad over and over; in the morning he came to the Messenger of Allah ﷺ and mentioned it, as though he thought it little, and the Messenger of Allah ﷺ said: By Him in whose hand is my soul, it equals a third of the Quran. Al-Qurtubi relays two explanations: that it equals a third for the names as-Samad and Ahad, found in no other surah; or that the Quran came in thirds, rulings, promise and threat, and names and attributes, and this surah gathers the last.",
            "bn": "বুখারী লিপিবদ্ধ করেছেন (৫০১৩) আবু সাঈদ খুদরী (রাঃ) থেকে: এক ব্যক্তি শুনলেন, আরেকজন বারবার কুল হুয়াল্লাহু আহাদ পড়ছেন। সকালে তিনি নবী ﷺ-এর কাছে এসে বিষয়টি জানালেন, যেন তাঁর কাছে এটুকু পড়া কম মনে হচ্ছিল। তখন নবী ﷺ বললেন: যাঁর হাতে আমার প্রাণ, তাঁর কসম, এটি কুরআনের এক-তৃতীয়াংশের সমান। কুরতুবী এর দুটি ব্যাখ্যা উদ্ধৃত করেন। এক, আস-সামাদ আর আহাদ নাম দুটির কারণে এটি এক-তৃতীয়াংশের সমান, কারণ এ নাম আর কোনো সূরায় নেই। দুই, কুরআন এসেছে তিন ভাগে: বিধান, প্রতিশ্রুতি ও সতর্কবাণী, আর নাম ও গুণ। এই সূরা শেষ ভাগটি ধারণ করে।"
          },
          {
            "en": "Al-Bukhari also records (7375) from 'Aishah (RA) that the Prophet ﷺ sent a man at the head of a raiding party, and he led his companions in prayer and closed his recitation with qul huwa Allahu ahad. When they returned they mentioned it to the Prophet ﷺ, who said: Ask him why he does that. They asked him, and he said: Because it is the description of the Most Merciful, and I love to recite it. The Prophet ﷺ said: Tell him that Allah loves him.",
            "bn": "বুখারী আরও লিপিবদ্ধ করেছেন (৭৩৭৫) আয়েশা (রাঃ) থেকে: নবী ﷺ এক ব্যক্তিকে একটি ছোট বাহিনীর নেতা করে পাঠালেন। তিনি সঙ্গীদের নামাজে ইমামতি করতেন, আর তিলাওয়াত শেষ করতেন কুল হুয়াল্লাহু আহাদ দিয়ে। তারা ফিরে এসে নবী ﷺ-কে কথাটি জানাল। তিনি বললেন: তাকে জিজ্ঞেস করো, কেন সে এমন করে। তারা জিজ্ঞেস করলে তিনি বললেন: কারণ এতে পরম করুণাময়ের পরিচয় আছে, আর আমি এটি পড়তে ভালোবাসি। নবী ﷺ বললেন: তাকে জানিয়ে দাও, আল্লাহ তাকে ভালোবাসেন।"
          },
          {
            "en": "At-Tirmidhi records (3475) from Buraydah (RA) that the Prophet ﷺ heard a man supplicating: O Allah, I ask You by my bearing witness that You are Allah, there is no god but You, al-Ahad, as-Samad, who did not beget and was not begotten, and none is comparable to Him. He said: By Him in whose hand is my soul, he has asked Allah by His greatest name, by which, when He is called, He answers, and when He is asked, He gives. At-Tirmidhi grades it hasan gharib. Ibn Kathir himself marks several other merit reports in his list weak.",
            "bn": "তিরমিযী লিপিবদ্ধ করেছেন (৩৪৭৫) বুরাইদা (রাঃ) থেকে: নবী ﷺ শুনলেন, এক ব্যক্তি দোয়া করছেন: হে আল্লাহ, আমি আপনার কাছে চাইছি এই সাক্ষ্যের ওসিলায় যে, আপনিই আল্লাহ, আপনি ছাড়া কোনো ইলাহ নেই, আপনি আল-আহাদ, আস-সামাদ, যিনি জন্ম দেননি, যাঁকে জন্মও দেওয়া হয়নি, আর যাঁর সমকক্ষ কেউ নেই। তখন নবী ﷺ বললেন: যাঁর হাতে আমার প্রাণ, তাঁর কসম, সে আল্লাহর কাছে চেয়েছে তাঁর সেই মহান নামের ওসিলায়, যে নামে ডাকলে তিনি সাড়া দেন, আর চাইলে দান করেন। তিরমিযী একে হাসান গরীব বলেছেন। ফযিলতের আরও কয়েকটি বর্ণনাকে ইবন কাসীর নিজেই তাঁর তালিকায় দুর্বল বলে চিহ্নিত করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "None Comparable, Read Two Ways",
          "bn": "কুফুওয়ান: অর্থ ও কিরাআত"
        },
        "p": [
          {
            "en": "At-Tabari records a disagreement on the last verse. Some said it means He has no likeness and no equal: Abu al-'Aliyah, ending with the words of 42:11, nothing is like Him; Ibn Abbas (RA) the same. Others, with Mujahid in several chains, said: a consort. Ibn Kathir takes Mujahid's gloss and sets 6:101 beside it, how could He have a child when He has no consort, then cites 19:88 to 19:95, 21:26 and 21:27, and 37:158 and 37:159.",
            "bn": "শেষ আয়াতের অর্থ নিয়ে তাবারী একটি মতভেদ লিপিবদ্ধ করেন। কেউ বলেছেন, এর মানে তাঁর কোনো সদৃশ নেই, সমান নেই। আবুল আলিয়া কথাটি শেষ করেন ৪২:১১ আয়াতের ভাষায়: তাঁর মতো কিছুই নেই। ইবনে আব্বাস (রাঃ)-ও একই কথা বলেন। আর মুজাহিদ, কয়েকটি সূত্রে, বলেছেন: স্ত্রী। ইবন কাসীর মুজাহিদের ব্যাখ্যাটি নেন এবং পাশে রাখেন ৬:১০১: তাঁর সন্তান হবে কী করে, যখন তাঁর কোনো স্ত্রী নেই? তারপর উদ্ধৃত করেন ১৯:৮৮ থেকে ১৯:৯৫, ২১:২৬ ও ২১:২৭, আর ৩৭:১৫৮ ও ৩৭:১৫৯।"
          },
          {
            "en": "On the word itself, at-Tabari says kufu', kufa and kifa' mean the same in the speech of the Arabs: the likeness, the match. He records the readers of Basra saying kufuwan and some of Kufa kuf'an, with a silent fa' and a hamza, and calls both correct. Al-Baghawi names Hamzah and Isma'il for kuf'an, Hafs from 'Asim for kufuwan without a hamza, and the rest for kufu'an, all sound usages. Al-Qurtubi notes that the predicate stands first so the verse-endings keep a single rhyme.",
            "bn": "শব্দটি সম্পর্কে তাবারী বলেন, আরবদের ভাষায় কুফু', কুফা আর কিফা' একই অর্থের: সদৃশ, সমতুল্য। তিনি লিপিবদ্ধ করেন, বসরার কারীরা পড়েছেন কুফুওয়ান, আর কুফার কেউ কেউ কুফআন, ফা-তে সাকিন আর হামযাসহ। তাঁর মতে দুটিই সঠিক। বাগাভী জানান, হামযা ও ইসমাঈল পড়েছেন কুফআন, আসিম থেকে হাফস পড়েছেন হামযা ছাড়া কুফুওয়ান, আর বাকিরা হামযাসহ কুফুআন। সবগুলোই বিশুদ্ধ আরবি। কুরতুবী লক্ষ করেন, খবরটি আগে এসেছে, যাতে আয়াতগুলোর শেষ অন্ত্যমিল একই থাকে।"
          },
          {
            "en": "As-Sa'di and the Muyassar read the verse as none like Him in His names, His attributes or His acts, and as-Sa'di closes: this surah contains the tawhid of the names and attributes. Ma'arif al-Qur'an sees each verse answering a group: the first those who deny Allah or His oneness, as-Samad those who seek other helpers for their needs, and lam yalid those who ascribe Him children.",
            "bn": "সা'দী আর মুয়াসসার আয়াতটির অর্থ করেন: নামে, গুণে বা কাজে তাঁর মতো কেউ নেই। সা'দী শেষ করেন এ কথায়: এই সূরা নাম ও গুণের তাওহিদ ধারণ করে। মাআরিফুল কুরআন দেখে, প্রতিটি আয়াত একেক দলের জবাব দেয়। প্রথম আয়াত তাদের, যারা আল্লাহকে বা তাঁর একত্বকে অস্বীকার করে। আস-সামাদ তাদের, যারা প্রয়োজন মেটাতে অন্য সাহায্যকারী খোঁজে। আর লাম ইয়ালিদ তাদের, যারা তাঁর সন্তান আছে বলে দাবি করে।"
          }
        ]
      }
    ]
  }
});
