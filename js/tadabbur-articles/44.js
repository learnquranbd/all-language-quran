/**
 * Tadabbur long-form articles — surah 44.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "44:1": {
    "sections": [
      {
        "h": {
          "en": "Makkan, Save One Verse",
          "bn": "মাক্কী, একটি আয়াত বাদে"
        },
        "p": [
          {
            "en": "Ha Mim is the whole of 44:1, and it opens ad-Dukhan, the Smoke. Al-Qurtubi says the surah is Makkan by agreement, with one exception: 44:15, inna kashifu-l-'adhabi qalilan, We will remove the punishment for a little. He counts fifty-seven verses and records that some count fifty-nine. Al-Baghawi's entry gives the surah's Makkan origin and the two letters, and nothing more. The abridged English Ibn Kathir notes only that it was revealed in Makkah, then turns at once to the Book.",
            "bn": "হা-মীম, এটুকুই ৪৪:১ আয়াতের পুরোটা। এ দিয়েই শুরু সূরা দুখান, অর্থাৎ ধোঁয়া। কুরতুবী বলেন, সূরাটি মাক্কী, এতে সবাই একমত। ব্যতিক্রম কেবল একটি আয়াত, ৪৪:১৫: ইন্না কাশিফুল আযাবি কালীলা, আমি কিছু সময়ের জন্য আযাব সরিয়ে দেব। তাঁর গণনায় আয়াত সাতান্নটি, তবে কেউ কেউ উনষাট গোনেন বলেও তিনি জানান। বাগাভী শুধু লেখেন যে সূরাটি মাক্কী, তারপর হরফ দুটি বসিয়ে দেন, আর কিছু বলেন না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও কেবল জানায় যে এটি মক্কায় নাযিল হয়েছে, তারপরই চলে যায় কিতাবের আলোচনায়।"
          },
          {
            "en": "Ad-Dukhan is the fifth of the seven surahs, 40 to 46, that open with Ha Mim; what the commentators say about the letters themselves is gathered at 42:1 and 43:1. The name comes from the smoke of 44:10. Then the surah moves quickly: the Book and its night (44:2 to 44:8), the smoke, Pharaoh's people (44:17 to 44:33), those who deny the rising (44:34 to 44:37), the Day of Sorting (44:40), the tree of zaqqum (44:43), the secure place of the righteous (44:51), and a close in 44:58 and 44:59.",
            "bn": "হা-মীম দিয়ে শুরু হওয়া সাতটি সূরা, ৪০ থেকে ৪৬, তার মধ্যে দুখান পঞ্চম। হরফ দুটির অর্থ নিয়ে তাফসীরকারদের কথা জড়ো করা আছে ৪২:১ ও ৪৩:১ আয়াতের আলোচনায়। সূরার নাম এসেছে ৪৪:১০ আয়াতের ধোঁয়া থেকে। এরপর সূরাটি দ্রুত এগোয়। প্রথমে কিতাব আর তার রাত (৪৪:২ থেকে ৪৪:৮), তারপর ধোঁয়া, ফেরাউনের জাতি (৪৪:১৭ থেকে ৪৪:৩৩), পুনরুত্থান অস্বীকারকারীরা (৪৪:৩৪ থেকে ৪৪:৩৭), ফয়সালার দিন (৪৪:৪০), যাক্কুম গাছ (৪৪:৪৩), মুত্তাকীদের নিরাপদ আবাস (৪৪:৫১), আর শেষে ৪৪:৫৮ ও ৪৪:৫৯ আয়াতে সমাপ্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Brief at the Fifth Opening",
          "bn": "পঞ্চম সূচনায় অল্প কথা"
        },
        "p": [
          {
            "en": "By this fifth opening, the commentaries consulted here say little about the letters. The Muyassar writes a single line: the discussion of the separated letters came earlier, at the start of al-Baqarah. At-Tabari heads his entry with Ha Mim, and at 44:2 says only that he has already explained Ha Mim, wal-kitabi-l-mubin. Ibn Kathir in Arabic passes straight from the basmala to the Book: Allah speaks, telling of the mighty Qur'an. Ma'arif al-Qur'an's entry under this slot is its closing note on az-Zukhruf.",
            "bn": "এই পঞ্চম সূচনায় এসে, এখানে দেখা তাফসীরগুলো হরফ নিয়ে প্রায় কিছুই বলে না। মুয়াসসার এক লাইনে সারে: বিচ্ছিন্ন হরফগুলোর আলোচনা আগেই হয়ে গেছে, সূরা বাকারার শুরুতে। তাবারী শিরোনামে হা-মীম লেখেন, আর ৪৪:২ আয়াতে শুধু বলেন, হা-মীম, ওয়াল কিতাবিল মুবীন, এর ব্যাখ্যা তিনি আগেই দিয়েছেন। আরবি ইবন কাসীর বিসমিল্লাহর পর সোজা চলে যান কিতাবের কথায়: আল্লাহ মহান কুরআন সম্পর্কে জানাচ্ছেন। মাআরিফুল কুরআনের এ জায়গার লেখাটি আসলে সূরা যুখরুফের শেষ টীকা।"
          },
          {
            "en": "As-Sa'di gives the fullest sentence on the letters at this verse, and it has two halves. The safest course with them, he says, is to keep silent about their meaning where there is no basis for it in the Sharia. Yet that silence comes with certainty: Allah did not send them down in vain, but for a wisdom we do not know. Restraint and conviction sit in a single sentence. He does not say the letters are empty, and he does not claim to know what fills them.",
            "bn": "এ আয়াতে হরফ নিয়ে সবচেয়ে পূর্ণ বাক্যটি সা'দীর, আর তার দুটি অংশ। তিনি বলেন, এ হরফগুলোর বেলায় সবচেয়ে নিরাপদ পথ হলো শরীয়তের কোনো ভিত্তি ছাড়া এদের অর্থ নিয়ে কথা না বলা। তবে এ নীরবতার সঙ্গে আছে দৃঢ় বিশ্বাস। আল্লাহ এগুলো অনর্থক নাযিল করেননি, করেছেন এমন এক হিকমতে, যা আমাদের জানা নেই। এক বাক্যেই সংযম আর প্রত্যয় পাশাপাশি। তিনি বলেন না যে হরফগুলো অর্থহীন। আবার এ দাবিও করেন না যে তাদের অর্থ তিনি জানেন।"
          },
          {
            "en": "Read together, the brevity is itself a kind of answer. Each commentator could have repeated a long discussion from an earlier surah, and most chose to point back instead. Their attention goes where the surah's own attention goes: to the Book named in the next breath. A reader can learn from that order. The letters are recited with care and left where as-Sa'di leaves them, and the effort of understanding is spent on what Allah went on to make plain.",
            "bn": "সব মিলিয়ে পড়লে এই সংক্ষেপটাই এক ধরনের জবাব। আগের কোনো সূরা থেকে দীর্ঘ আলোচনা প্রত্যেকেই আবার টেনে আনতে পারতেন। বেশিরভাগই তা না করে পেছনের দিকে ইশারা করেছেন। তাঁদের মনোযোগ যায় সেখানে, যেখানে সূরার নিজের মনোযোগ যায়: পরের নিঃশ্বাসেই যে কিতাবের নাম আসে, সেদিকে। এই ক্রম থেকে পাঠকের শেখার আছে। হরফ দুটি যত্ন করে তিলাওয়াত করা হবে, সা'দী যেখানে রেখেছেন সেখানেই রাখা হবে। আর বোঝার শ্রমটুকু খরচ হবে সেসব কথায়, যা আল্লাহ এরপর স্পষ্ট করে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Decreed, or Drawn Near",
          "bn": "ফয়সালা হয়ে গেছে, নাকি ঘনিয়ে এসেছে"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the exception, and among the views he lists here is one that the articles on 42:1 and 43:1 do not treat. Ad-Dahhak and al-Kisa'i said Ha Mim means qudiya ma huwa ka'in: what is to be has been decreed. Al-Qurtubi explains how they reached it. They seem to have heard the letters spelled out, which gives humma, with the Ha voiced with a u and the Mim doubled, meaning it was decreed and came to pass. He supports the sense with a line by Ka'b ibn Malik: there is no repelling a matter Allah has decreed.",
            "bn": "ব্যতিক্রম কুরতুবী। এখানে তিনি যেসব মত গুনেছেন, তার একটি ৪২:১ ও ৪৩:১ আয়াতের আলোচনায় আসেনি। দাহহাক ও কিসাঈ বলেছেন, হা-মীম মানে কুদিয়া মা হুয়া কাইন: যা হওয়ার, তার ফয়সালা হয়ে গেছে। কুরতুবী ব্যাখ্যা করেন তাঁরা কীভাবে এ অর্থে পৌঁছলেন। মনে হয়, হরফ দুটির উচ্চারণ থেকে তাঁরা হুম্মা শব্দটি ধরেছেন। হা-তে পেশ আর মীমে তাশদীদ দিলে শব্দটা দাঁড়ায় হুম্মা, অর্থাৎ ফয়সালা হলো এবং ঘটে গেল। অর্থটির পক্ষে তিনি কা'ব ইবন মালিক (রাঃ)-এর একটি পঙ্‌ক্তি আনেন: আল্লাহ যে বিষয়ের ফয়সালা করেছেন, তা ঠেকানোর কেউ নেই।"
          },
          {
            "en": "He then records a second sense from the same root: hamma amru-llah, the command of Allah has drawn near. A poet says, my day has drawn near, and a people rejoiced, people in whom is heedlessness and sleep. From this, al-Qurtubi notes, fever is called humma, because it brings a person near to death. On this reading the intended meaning is the nearness of His help to His friends and of His vengeance on His enemies, as on the day of Badr.",
            "bn": "এরপর তিনি একই মূল থেকে আরেকটি অর্থ উল্লেখ করেন: হাম্মা আমরুল্লাহ, আল্লাহর আদেশ কাছে এসে গেছে। এক কবি বলেন, আমার দিন ঘনিয়ে এসেছে, আর তাতে খুশি হয়েছে এমন এক দল, যাদের মধ্যে আছে উদাসীনতা আর ঘুম। কুরতুবী জানান, এ থেকেই জ্বরকে বলা হয় হুম্মা, কারণ জ্বর মানুষকে মৃত্যুর কাছে নিয়ে যায়। এ ব্যাখ্যায় উদ্দেশ্য হলো, তাঁর বন্ধুদের জন্য সাহায্য আর তাঁর শত্রুদের উপর প্রতিশোধ কাছে এসে গেছে, যেমন ঘটেছিল বদরের দিনে।"
          },
          {
            "en": "Al-Qurtubi sets these beside the other views and does not choose among them in the text consulted; as-Sa'di's caution stands beside them, and both are kept here. A reader may still notice where the surah goes. Two verses later, 44:4 says that on the blessed night every wise matter is made distinct, and 44:4 has its own article. Al-Qurtubi does not draw that link at this verse, so it remains an observation about placement, not a meaning of the letters.",
            "bn": "কুরতুবী এ মতগুলো অন্য মতের পাশে রাখেন। এখানে দেখা লেখায় তিনি কোনোটিকে বেছে নেন না। তাঁর তালিকার পাশেই দাঁড়িয়ে আছে সা'দীর সতর্কতা, আর এ আলোচনা দুটিকেই রাখে। তবু সূরাটি কোন দিকে যায়, পাঠকের চোখে তা পড়তে পারে। দুই আয়াত পরে ৪৪:৪ বলে, সেই বরকতময় রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় স্থির করা হয়, আর সে আয়াতের আলাদা আলোচনা আছে। কুরতুবী এখানে এ দুটিকে জোড়েননি। তাই এটা কেবল আয়াতের অবস্থান নিয়ে একটা লক্ষ করা বিষয়, হরফের অর্থ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Letters Taken as the Answer",
          "bn": "হরফই যখন শপথের জবাব"
        },
        "p": [
          {
            "en": "The letters do not stand alone for long. Wal-kitabi-l-mubin, by the clear Book, follows in 44:2, and an oath needs an answer, the statement it is sworn upon. Al-Qurtubi, on 44:2, opens with the possibility that ties this verse in most closely. If Ha Mim is taken as the answer to the oath, then the speech is complete at al-mubin, and the reciter begins afresh at inna anzalnahu. On that reading the two letters are what the clear Book is sworn to.",
            "bn": "হরফ দুটি বেশিক্ষণ একা থাকে না। ৪৪:২ আয়াতে আসে ওয়াল কিতাবিল মুবীন, সুস্পষ্ট কিতাবের শপথ। আর শপথের একটা জবাব লাগে, অর্থাৎ যে কথার উপর শপথটা করা হচ্ছে। ৪৪:২ আয়াতের আলোচনায় কুরতুবী শুরু করেন সেই সম্ভাবনা দিয়ে, যা এ আয়াতকে সবচেয়ে ঘনিষ্ঠভাবে জুড়ে দেয়। হা-মীমকেই যদি শপথের জবাব ধরা হয়, তবে কথা শেষ হয় আল-মুবীন শব্দে। তিলাওয়াতকারী নতুন করে শুরু করবেন ইন্না আনযালনাহু থেকে। এ পাঠে সুস্পষ্ট কিতাবের শপথ করা হচ্ছে ওই দুটি হরফের উপরেই।"
          },
          {
            "en": "Whatever the answer, the commentaries agree on what is sworn by. As-Sa'di calls it an oath by the Qur'an upon the Qur'an. Ibn Kathir begins his comment on 44:2 with Allah telling of the mighty Qur'an. Ma'arif al-Qur'an says the verse refers to the Qur'an, and notes that the same oath, in exactly the same words, opens az-Zukhruf, where it is fully discussed. That discussion, with the glosses on mubin, clear, belongs to 43:3 and is not repeated here.",
            "bn": "জবাব যা-ই হোক, কিসের শপথ করা হচ্ছে, তা নিয়ে তাফসীরগুলো একমত। সা'দী বলেন, এ শপথ কুরআনের নামে, কুরআনেরই উপর। ইবন কাসীর ৪৪:২ আয়াতের ব্যাখ্যা শুরু করেন এ কথায়: আল্লাহ মহান কুরআন সম্পর্কে জানাচ্ছেন। মাআরিফুল কুরআন বলে, আয়াতে কুরআনের কথাই বলা হয়েছে। সে আরও জানায়, হুবহু একই শব্দে একই শপথ দিয়ে শুরু হয়েছে সূরা যুখরুফ, আর সেখানে এর পূর্ণ আলোচনা হয়েছে। সেই আলোচনা, মুবীন অর্থাৎ সুস্পষ্ট শব্দের নানা ব্যাখ্যাসহ, ৪৩:৩ আয়াতের জায়গা। এখানে তার পুনরাবৃত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Clause Answers the Oath",
          "bn": "শপথের জবাব কোন বাক্যে"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives a second possibility. If inna kunna mundhirin, indeed We have been warning, is taken as the answer to the oath sworn by the Book, then the reciter pauses at mundhirin and begins again at fiha yufraqu kullu amrin hakim. On this reading the thing Allah swears to is the warning itself. The night of descent becomes the setting, and the sworn statement is that He has been sending warning all along.",
            "bn": "কুরতুবী দ্বিতীয় একটি সম্ভাবনা দেন। ইন্না কুন্না মুনযিরীন, নিশ্চয়ই আমি সতর্ককারী, এ বাক্যকে যদি কিতাবের শপথের জবাব ধরা হয়, তবে তিলাওয়াতকারী থামবেন মুনযিরীন শব্দে। আবার শুরু করবেন ফীহা ইউফরাকু কুল্লু আমরিন হাকীম থেকে। এ পাঠে আল্লাহ যে কথার উপর শপথ করছেন, তা স্বয়ং সতর্কবাণী। নাযিলের রাতটা হয়ে যায় পটভূমি। আর শপথ করে বলা কথাটা দাঁড়ায় এই: তিনি বরাবরই সতর্ক করে আসছেন।"
          },
          {
            "en": "The third view he introduces with it was said: the answer is inna anzalnahu, We sent it down. Some grammarians rejected this, he reports, because that clause is a description of the thing sworn by, and a description of what is sworn by cannot be the oath's answer. At-Tabari, on 44:3, reads the verse in just that way: Allah swears by this Book that He sent it down on a blessed night, as the 44:3 article records. The disagreement is kept as it stands.",
            "bn": "তৃতীয় মতটি তিনি আনেন 'বলা হয়েছে' কথাটি দিয়ে: জবাব হলো ইন্না আনযালনাহু, আমি একে নাযিল করেছি। তিনি জানান, কিছু ব্যাকরণবিদ এ মত মানেননি। তাঁদের যুক্তি, এ বাক্য তো যার শপথ করা হচ্ছে তারই বিবরণ, আর শপথের বস্তুর বিবরণ শপথের জবাব হতে পারে না। অথচ ৪৪:৩ আয়াতে তাবারী আয়াতটি ঠিক এভাবেই পড়েন: আল্লাহ এই কিতাবের শপথ করে বলছেন যে, তিনি একে এক বরকতময় রাতে নাযিল করেছেন। ৪৪:৩ আয়াতের আলোচনায় তা আছে। মতভেদটি এখানে যেমন আছে তেমনই রাখা হলো।"
          },
          {
            "en": "Al-Qurtubi adds that the pronoun in anzalnahu refers to the Qur'an, and mentions those who held that the oath is by all the revealed books, sending the reader back to the opening of az-Zukhruf. Laid side by side, the three answers fall on the letters, on the warning, or on the sending down. None of them leaves the Book. Even where the commentators part ways over grammar, the oath by the Book lands on something about the Book.",
            "bn": "কুরতুবী আরও বলেন, আনযালনাহু শব্দের সর্বনামটি কুরআনকে বোঝায়। যাঁরা বলেছেন শপথটি সব আসমানি কিতাবের, তাঁদের কথাও তিনি উল্লেখ করেন এবং পাঠককে ফিরিয়ে দেন সূরা যুখরুফের শুরুতে। তিনটি জবাব পাশাপাশি রাখলে দেখা যায়, একটি পড়ে হরফের উপর, একটি সতর্কবাণীর উপর, একটি নাযিলের উপর। কোনোটিই কিতাবকে ছেড়ে যায় না। ব্যাকরণ নিয়ে তাফসীরকারদের পথ যেখানে আলাদা হয়েছে, সেখানেও কিতাবের শপথ গিয়ে থামে কিতাবেরই কোনো কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports on Reciting Ad-Dukhan",
          "bn": "সূরা দুখান পাঠের বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "Ibn Kathir opens his commentary on the surah with two reports from at-Tirmidhi about a reward for reciting ad-Dukhan by night, one of them naming the night before Friday. They stand in Jami' at-Tirmidhi as 2888 and 2889. At-Tirmidhi grades each gharib, known only through this one route. He says a narrator in each is weakened, records al-Bukhari calling the first one's narrator munkar al-hadith, and notes that al-Hasan did not hear from Abu Hurayra. So they are mentioned here, not quoted.",
            "bn": "ইবন কাসীর সূরার তাফসীর শুরু করেন তিরমিযীর দুটি বর্ণনা দিয়ে। বিষয়: রাতে সূরা দুখান পড়ার সওয়াব, আর তার একটিতে জুমার আগের রাতের উল্লেখ। জামে তিরমিযীতে এ দুটি আছে ২৮৮৮ ও ২৮৮৯ নম্বরে। তিরমিযী নিজেই দুটিকে গরীব বলেছেন, অর্থাৎ এ একটি সূত্র ছাড়া আর কোনো সূত্রে জানা নেই। তিনি বলেন, দুটিরই একজন করে বর্ণনাকারী দুর্বল বলে গণ্য। প্রথমটির বর্ণনাকারী সম্পর্কে বুখারীর মন্তব্যও তিনি আনেন: মুনকারুল হাদীস। আর জানান, হাসান আবু হুরায়রা (রাঃ) থেকে সরাসরি শোনেননি। তাই এখানে শুধু এদের উল্লেখ, উদ্ধৃতি নয়।"
          },
          {
            "en": "Al-Qurtubi gathers more on the same theme: a saying from the Musnad of ad-Darimi attributed to Abu Rafi', which at-Tha'labi relays as raised to the Prophet ﷺ through Abu Hurayra, and a report from Abu Umama. Ma'arif al-Qur'an carries two of these from al-Qurtubi on at-Tha'labi's authority. None of them is graded in the texts consulted, and nothing in this article rests on any of them. They are named so the reader knows they exist and what weight they carry.",
            "bn": "একই বিষয়ে কুরতুবী আরও কিছু বর্ণনা জড়ো করেন। মুসনাদে দারিমী থেকে আবু রাফি' (রাঃ)-এর নামে একটি কথা, যা সা'লাবী আবু হুরায়রা (রাঃ)-এর সূত্রে নবী ﷺ পর্যন্ত পৌঁছিয়ে বর্ণনা করেন। আর আছে আবু উমামা (রাঃ)-এর একটি বর্ণনা। মাআরিফুল কুরআন এর দুটি এনেছে কুরতুবী থেকে, সা'লাবীর বরাতে। এখানে দেখা কোনো লেখায় এদের কোনোটির মান নির্ণয় নেই, আর এ আলোচনার কোনো কথা এদের উপর দাঁড়িয়ে নেই। এদের নাম নেওয়া হলো শুধু এজন্য, যাতে পাঠক জানেন এগুলো আছে, আর এদের ওজন কতটুকু।"
          },
          {
            "en": "Ibn Kathir also relays, from the Musnad of al-Bazzar, a report about the Prophet ﷺ testing Ibn Sayyad with something he had hidden, and places it at the head of this surah; he gives it no grading, so it too is only mentioned. None of the commentaries consulted attaches a sound hadith to 44:1 or to the surah's merit. Reciting ad-Dukhan needs no such report. The surah's own close says, in 44:58, addressing the Prophet ﷺ, that Allah made it easy in his tongue so that they might remember.",
            "bn": "ইবন কাসীর মুসনাদে বাযযার থেকে আরেকটি বর্ণনা আনেন। বিষয়: নবী ﷺ একটি জিনিস লুকিয়ে রেখে ইবন সাইয়াদকে পরীক্ষা করেছিলেন, আর ইবন কাসীর বর্ণনাটি রেখেছেন এ সূরার শুরুতে। এর কোনো মান তিনি উল্লেখ করেননি, তাই এটিরও শুধু উল্লেখ রইল। এখানে দেখা কোনো তাফসীর ৪৪:১ আয়াত বা সূরার ফযীলতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। তবে সূরা দুখান পড়ার জন্য এমন কোনো বর্ণনার দরকারও নেই। সূরার নিজের শেষাংশ, ৪৪:৫৮ আয়াত, নবী ﷺ-কে সম্বোধন করে বলছে: আল্লাহ একে তাঁর ভাষায় সহজ করে দিয়েছেন, যাতে তারা উপদেশ গ্রহণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Counts, Not Codes",
          "bn": "গণনা আছে, সংকেত নেই"
        },
        "p": [
          {
            "en": "This article has counted things: one word, two letters, fifty-seven verses, the fifth of seven openings. These are counts, and nothing more. None of the commentaries consulted reads Ha Mim as a number, a date or a hidden code, and nothing here assigns the letters a value or builds a calculation on them. Al-Qurtubi's list of meanings is a list of readings from language and early opinion, and as-Sa'di's line forbids going further than a sound basis allows.",
            "bn": "এ আলোচনায় কিছু জিনিস গোনা হয়েছে: একটি শব্দ, দুটি হরফ, সাতান্নটি আয়াত, সাতটি সূচনার পঞ্চমটি। এগুলো শুধুই গণনা, এর বেশি কিছু নয়। এখানে দেখা কোনো তাফসীর হা-মীমকে কোনো সংখ্যা, তারিখ বা গোপন সংকেত হিসেবে পড়ে না। এ আলোচনাও হরফ দুটিকে কোনো মান দেয় না, তাদের উপর কোনো হিসাব দাঁড় করায় না। কুরতুবীর তালিকা হলো ভাষা আর পূর্বসূরিদের মত থেকে নেওয়া ব্যাখ্যার তালিকা। আর সা'দীর কথা সাফ জানিয়ে দেয়, শরীয়তের ভিত্তি যতদূর যায়, তার বাইরে যাওয়া চলে না।"
          },
          {
            "en": "The surah that follows is heavy with warning: the smoke, Pharaoh's army left in the sea, gardens and springs abandoned, the food of the sinful. Each of these verses describes what the text describes. None of them licenses anything against any living person or community, and none authorises anyone to name a people of today as Pharaoh's people, or a haze or famine of today as the smoke. Their warning is addressed first to whoever recites them.",
            "bn": "এরপর যে সূরা আসে, তা সতর্কবাণীতে ভারী: ধোঁয়া, সাগরে রেখে যাওয়া ফেরাউনের বাহিনী, পেছনে ফেলে যাওয়া বাগান আর ঝরনা, পাপীদের খাদ্য। এর প্রতিটি আয়াত ঠিক ততটুকুই বলে, যতটুকু আয়াতে আছে। এগুলো কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। আজকের কোনো জাতিকে ফেরাউনের জাতি বলে চিহ্নিত করার, কিংবা আজকের কোনো ধোঁয়াশা বা দুর্ভিক্ষকে সেই ধোঁয়া বলে ঘোষণা করার অধিকারও কাউকে দেয় না। এদের সতর্কবাণী সবার আগে তার জন্য, যে এগুলো তিলাওয়াত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Woken Before the Warning",
          "bn": "সতর্কবাণীর আগে জাগিয়ে তোলা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, at 44:2, puts the purpose of what was sent down on that blessed night in a phrase: to awaken the unmindful from their deep slumber. Read in that light, the order of the opening has its own force. Two letters arrest the ear. An oath by the clear Book holds it. Only then does the surah speak of descent, of warning and of a night in which matters are decided. The listener is stopped before being told anything.",
            "bn": "মাআরিফুল কুরআন ৪৪:২ আয়াতের আলোচনায় সেই বরকতময় রাতে নাযিল হওয়া কিতাবের উদ্দেশ্য বলে এক কথায়: উদাসীন মানুষকে গভীর ঘুম থেকে জাগানো। এ আলোয় পড়লে সূচনার ক্রমটার নিজস্ব জোর ধরা পড়ে। দুটি হরফ কান আটকে দেয়। সুস্পষ্ট কিতাবের শপথ সেই মনোযোগ ধরে রাখে। তারপরই সূরা কথা বলে নাযিলের, সতর্কবাণীর, আর সেই রাতের, যে রাতে বিষয়গুলোর ফয়সালা হয়। কিছু বলার আগেই শ্রোতাকে থামিয়ে দেওয়া হয়।"
          },
          {
            "en": "The surah ends where it began, with the Book. In 44:58 it is made easy so that they might remember, and in 44:59 comes a last word: so watch, they too are watching. Between two letters and that close lies everything the commentators discussed here. A reader's first duty is simpler than any of their debates: to come to Ha Mim awake, to hear the oath as an oath, and to let the warning reach the reciter before it reaches anyone else.",
            "bn": "সূরা শেষ হয় যেখানে শুরু হয়েছিল, কিতাব দিয়েই। ৪৪:৫৮ আয়াতে বলা হয়, একে সহজ করা হয়েছে যাতে তারা উপদেশ গ্রহণ করে। আর ৪৪:৫৯ আয়াতে শেষ কথা: অতএব অপেক্ষা করুন, তারাও অপেক্ষা করছে। দুটি হরফ আর এই সমাপ্তির মাঝেই আছে সব, যা নিয়ে তাফসীরকারেরা এখানে আলোচনা করেছেন। তবে পাঠকের প্রথম দায়িত্ব তাঁদের যেকোনো বিতর্কের চেয়ে সহজ। হা-মীমের কাছে জেগে থেকে আসা, শপথকে শপথ হিসেবেই শোনা, আর সতর্কবাণীটা অন্য কারও কাছে পৌঁছানোর আগে নিজের কাছে পৌঁছাতে দেওয়া।"
          }
        ]
      }
    ]
  },
  "44:3": {
    "sections": [
      {
        "h": {
          "en": "An Oath Answered by the Book",
          "bn": "কসমের জবাবে কিতাবেরই কথা"
        },
        "p": [
          {
            "en": "Surah ad-Dukhan opens with Ha Mim and an oath: by the clear Book (44:2). The answer comes at once in 44:3: inna anzalnahu fi laylatin mubarakatin, inna kunna mundhirin. Indeed We sent it down on a blessed night; indeed We have been warning. At-Tabari reads it exactly so: Allah swears by this Book that He sent it down on a blessed night. The Muyassar calls the Book clear in wording and meaning, and as-Sa'di calls it clear in everything that needs to be made plain.",
            "bn": "সূরা দুখান শুরু হয় হা-মীম দিয়ে, তারপর কসম: সুস্পষ্ট কিতাবের কসম (৪৪:২)। জবাব আসে সঙ্গে সঙ্গে, ৪৪:৩ আয়াতে: ইন্না আনযালনাহু ফী লাইলাতিম মুবারাকাহ, ইন্না কুন্না মুনযিরীন। আমি একে নাজিল করেছি এক বরকতময় রাতে, আমি তো সতর্ক করেই আসছি। তাবারী আয়াতটি ঠিক এভাবেই পড়েন: আল্লাহ এই কিতাবের কসম করে বলছেন, তিনি একে এক বরকতময় রাতে নাজিল করেছেন। মুয়াসসারের ভাষায় কিতাবটি শব্দে ও অর্থে সুস্পষ্ট। সা'দী বলেন, যা কিছু খুলে বলা দরকার, তার সবকিছুই এ কিতাব খুলে বলে।"
          },
          {
            "en": "The verse has eight Arabic words in two clauses, and both begin with inna, indeed We. The first says when the Book came down; the second says why it was sent at all. The next verse, 44:4, carries on with what happens on that night: therein every wise matter is made distinct. This article stays with 44:3 itself: which night the commentators took it to be, how they read the sending down, and what they say the warning means.",
            "bn": "আরবিতে আয়াতটির শব্দ আটটি, বাক্যাংশ দুটি, আর দুটোরই শুরু ইন্না দিয়ে: নিশ্চয়ই আমি। প্রথম অংশ জানায় কিতাব কখন নেমেছে। দ্বিতীয় অংশ জানায়, কিতাব আদৌ পাঠানো হলো কেন। পরের আয়াত ৪৪:৪ সেই রাতের কথাই এগিয়ে নেয়: সে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় আলাদা করে স্থির করা হয়। এ লেখা অবশ্য ৪৪:৩ আয়াতেই থাকবে। তাফসীরকারেরা রাতটিকে কোন রাত বলে বুঝেছেন, নাজিল হওয়াকে কীভাবে পড়েছেন, আর সতর্ক করার অর্থ কী বলেছেন, আলোচনা এটুকুই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blessing Lies",
          "bn": "বরকত কোথায়"
        },
        "p": [
          {
            "en": "Mubarakah, blessed, is glossed in the commentaries consulted here as abundance of good. The Muyassar, which names the night as the Night of Decree, calls it abundant in good things. As-Sa'di says it is abundant in good and in blessing. Al-Qurtubi gives a reason for the description: the night is called blessed because of the blessings, the good things and the reward that Allah sends down upon His servants in it. Each gloss describes the night by what is given in it.",
            "bn": "মুবারাকাহ, অর্থাৎ বরকতময়। হাতে থাকা তাফসীরগুলো শব্দটির ব্যাখ্যা দেয় কল্যাণের প্রাচুর্য দিয়ে। মুয়াসসার রাতটিকে ক্বদরের রাত বলে চিহ্নিত করে, আর বলে এ রাত বহু কল্যাণে ভরা। সা'দীর মতে রাতটি কল্যাণ ও বরকতে ভরপুর। কুরতুবী এ বিশেষণের কারণও বলে দেন: এ রাতে আল্লাহ তাঁর বান্দাদের উপর বরকত, কল্যাণ আর সওয়াব নাজিল করেন, তাই রাতটি বরকতময়। লক্ষ করুন, প্রতিটি ব্যাখ্যাই রাতকে চিনিয়েছে সে রাতে যা দেওয়া হয় তা দিয়ে।"
          },
          {
            "en": "As-Sa'di draws a line through the verse: the best of speech was sent down on the best of nights and days, to the best of humankind, in the language of the noble Arabs. He identifies the night as the Night of Decree, which is better than a thousand months, the wording of 97:3, whose own article treats the night's merit. Here only the order of his sentence matters. He begins with the speech, then the night, then the one who received it.",
            "bn": "সা'দী পুরো আয়াতটিকে এক সুতোয় গাঁথেন। সর্বোত্তম কালাম নাজিল হয়েছে সর্বোত্তম রাত ও দিনে, সৃষ্টির সর্বোত্তম মানুষের উপর, সম্মানিত আরবদের ভাষায়। রাতটিকে তিনি ক্বদরের রাত বলে চিহ্নিত করেন, যা হাজার মাসের চেয়ে উত্তম। কথাটি ৯৭:৩ আয়াতের, আর রাতটির মর্যাদা নিয়ে আলোচনা সেই আয়াতের লেখায় আছে। এখানে শুধু তাঁর বাক্যের ক্রমটা দেখার মতো। তিনি শুরু করেন কালাম দিয়ে, তারপর রাত, তারপর যিনি কালামটি পেয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Read as the Night of Decree",
          "bn": "ক্বদরের রাত হিসেবে পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari states the question openly: the people of interpretation differed over which night of the year this is. Some said it is the Night of Decree, and he gives their reports. From Qatada, by two chains: the blessed night is the Night of Decree. From Ibn Zayd: that night is the Night of Decree; Allah sent this Qur'an down from the Mother of the Book on that night, and then sent it down in other nights and days. Al-Baghawi names the same two, Qatada and Ibn Zayd, for this view.",
            "bn": "তাবারী প্রশ্নটা খোলাখুলি সামনে আনেন: বছরের কোন রাত এটি, তা নিয়ে তাফসীরবিদদের মতভেদ হয়েছে। কেউ বলেছেন, এটি ক্বদরের রাত। তারপর তিনি তাঁদের বর্ণনাগুলো আনেন। কাতাদা থেকে দুই সূত্রে: বরকতময় রাতটি হলো ক্বদরের রাত। ইবন যায়দ থেকে: সে রাত ক্বদরের রাত। আল্লাহ এ কুরআন সে রাতে উম্মুল কিতাব থেকে নাজিল করেন, তারপর নাজিল করেন অন্যান্য রাতে ও দিনে। বাগাভীও এ মতের জন্য একই দুজনের নাম নেন, কাতাদা ও ইবন যায়দ।"
          },
          {
            "en": "Those who hold this view rest it on other verses. Ibn Kathir says Allah sent it down on a blessed night, the Night of Decree, as He says in 97:1: inna anzalnahu fi laylati al-qadr, We sent it down in the Night of Decree. That was in Ramadan, he adds, as 2:185 says: the month of Ramadan in which the Qur'an was sent down. Ma'arif al-Qur'an cites both verses and gives this as the reading of the majority of commentators, a night in the last ten of Ramadan. The Muyassar and as-Sa'di simply name it the Night of Decree.",
            "bn": "এ মতের অনুসারীরা দলিল নেন অন্য আয়াত থেকে। ইবন কাসীর বলেন, আল্লাহ একে নাজিল করেছেন এক বরকতময় রাতে, আর তা ক্বদরের রাত। যেমন তিনি ৯৭:১ আয়াতে বলেছেন: ইন্না আনযালনাহু ফী লাইলাতিল ক্বদর, আমি একে নাজিল করেছি ক্বদরের রাতে। তিনি যোগ করেন, এটা ছিল রমজানে, কারণ ২:১৮৫ আয়াত বলছে: রমজান মাস, যাতে কুরআন নাজিল হয়েছে। মাআরিফুল কুরআনও দুটি আয়াতই আনে, আর বলে এটিই অধিকাংশ তাফসীরকারের মত: রাতটি রমজানের শেষ ১০ রাতের একটি। মুয়াসসার ও সা'দী সরাসরি একে ক্বদরের রাত বলেন।"
          },
          {
            "en": "At-Tabari's first report from Qatada carries a list of dates. In it Qatada says the scrolls of Ibrahim (AS) came down on the first night of Ramadan, the Torah after six nights of it had passed, the Zabur after sixteen, the Injil after eighteen, and the Furqan after 24. That is Qatada's own statement as at-Tabari records it. Al-Qurtubi and Ma'arif al-Qur'an give a similar list as a saying of the Prophet ﷺ through Wathila, with the Zabur on the twelfth; that version could not be confirmed in a hadith collection here, so it is not relied on.",
            "bn": "কাতাদা থেকে তাবারীর প্রথম বর্ণনায় কিছু তারিখের তালিকাও আছে। তাতে কাতাদা বলেন, ইবরাহীম (আঃ)-এর সহীফা নাজিল হয় রমজানের প্রথম রাতে। তাওরাত নাজিল হয় রমজানের ৬ রাত পার হওয়ার পর, যাবূর ১৬ রাত পর, ইনজীল ১৮ রাত পর, আর ফুরকান ২৪ রাত পর। এটা কাতাদার নিজের কথা, তাবারী যেমন লিপিবদ্ধ করেছেন। কুরতুবী ও মাআরিফুল কুরআন প্রায় একই তালিকা আনেন ওয়াসিলা (রাঃ)-এর সূত্রে নবী ﷺ-এর বাণী হিসেবে, সেখানে যাবূরের তারিখ ১২। সেই বর্ণনা কোনো হাদিস গ্রন্থে এখানে যাচাই করা যায়নি, তাই তার উপর নির্ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night in Mid-Sha'ban",
          "bn": "মধ্য-শাবানের রাত"
        },
        "p": [
          {
            "en": "The second view places the night in Sha'ban. At-Tabari reports it without names: others said, rather, it is the night of the middle of Sha'ban. Al-Baghawi likewise gives it to others. Ibn Kathir names its source as reported from Ikrimah, and al-Qurtubi states it as Ikrimah's: the blessed night here is the night of the middle of Sha'ban. Ma'arif al-Qur'an says some scholars of tafsir, like Ikrimah, took it as laylat al-bara'ah, the night of immunity, the fifteenth night of Sha'ban.",
            "bn": "দ্বিতীয় মতে রাতটি শাবান মাসের। তাবারী মতটি আনেন কারও নাম ছাড়াই: অন্যরা বলেছেন, বরং এটি মধ্য-শাবানের রাত। বাগাভীও মতটিকে অন্যদের বলে উল্লেখ করেন। ইবন কাসীর এর উৎস জানান, ইকরিমা থেকে এমন বর্ণনা আছে। কুরতুবী মতটি ইকরিমার নামেই আনেন: এখানে বরকতময় রাত মানে মধ্য-শাবানের রাত। মাআরিফুল কুরআন বলে, ইকরিমার মতো কোনো কোনো তাফসীরবিদ একে লাইলাতুল বারাআত বলে বুঝেছেন, অর্থাৎ শাবানের পনেরো তারিখের রাত।"
          },
          {
            "en": "Al-Qurtubi first names the blessed night as the Night of Decree, then adds, under the words it is said, the night of mid-Sha'ban, and records four names: the blessed night, the night of bara'ah, the night of the deed (as-sakk), and the Night of Decree. Ma'arif al-Qur'an explains how the second view arose. Some versions of a tradition say that births, deaths and sustenance are decreed on the night of mid-Sha'ban, and some use the very words of 44:4, so some scholars took the blessed night to be that night.",
            "bn": "কুরতুবী প্রথমে বরকতময় রাতকে ক্বদরের রাত বলেন। তারপর 'বলা হয়' কথাটি দিয়ে মধ্য-শাবানের রাতের মত আনেন, আর চারটি নাম লিপিবদ্ধ করেন: বরকতময় রাত, বারাআতের রাত, দলিলের রাত (আস-সাক্ক), আর ক্বদরের রাত। দ্বিতীয় মতটি কোথা থেকে এল, মাআরিফুল কুরআন তা ব্যাখ্যা করে। কোনো কোনো বর্ণনায় আছে, জন্ম, মৃত্যু আর রিযিক মধ্য-শাবানের রাতে নির্ধারিত হয়। কিছু বর্ণনায় আবার ৪৪:৪ আয়াতের হুবহু শব্দও এসেছে। এ কারণে কিছু আলেম বরকতময় রাত বলতে সেই রাতকেই বুঝেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Commentator's Own Verdict",
          "bn": "প্রত্যেক মুফাসসিরের নিজের রায়"
        },
        "p": [
          {
            "en": "Most of the commentators consulted here state a preference, and each preference is his own. At-Tabari says the correct view is that of those who said it means the Night of Decree, because Allah has informed that it is so. Al-Qurtubi says the first view is sounder, because of His words, We sent it down in the Night of Decree. Ibn Kathir is the sharpest: whoever said it is the night of mid-Sha'ban, as is reported from Ikrimah, has gone far afield, since the text of the Qur'an places it in Ramadan.",
            "bn": "হাতে থাকা তাফসীরকারদের বেশিরভাগই নিজের পছন্দের মত জানিয়েছেন, আর প্রতিটি পছন্দ তাঁর নিজের। তাবারী বলেন, সঠিক মত তাঁদের, যাঁরা বলেছেন এখানে ক্বদরের রাত উদ্দেশ্য, কারণ আল্লাহ জানিয়ে দিয়েছেন যে ব্যাপারটা এমনই। কুরতুবীর মতে প্রথম মতটি অধিক বিশুদ্ধ, কারণ আল্লাহ বলেছেন: আমি একে নাজিল করেছি ক্বদরের রাতে। ইবন কাসীরের ভাষা সবচেয়ে কড়া। ইকরিমা থেকে যেমন বর্ণিত, কেউ যদি বলে এটি মধ্য-শাবানের রাত, তবে সে লক্ষ্য থেকে অনেক দূরে সরে গেছে, কারণ কুরআনের স্পষ্ট বক্তব্য হলো রাতটি রমজানে।"
          },
          {
            "en": "Ibn Kathir also takes up a report the second view could lean on. He cites, through al-Zuhri from Uthman ibn Muhammad ibn al-Mughira ibn al-Akhnas, that the Prophet ﷺ said life-spans are cut off from Sha'ban to Sha'ban. He grades it himself: it is a mursal report, and its like cannot be set against the texts. Ma'arif al-Qur'an repeats his judgement and adds that Qadi Abu Bakr ibn al-Arabi held that no authentic report shows sustenance, births and deaths being decreed on mid-Sha'ban.",
            "bn": "দ্বিতীয় মত যে বর্ণনার উপর ভর করতে পারত, ইবন কাসীর সেটাও আলোচনায় আনেন। যুহরী থেকে, উসমান ইবন মুহাম্মাদ ইবন মুগীরা ইবন আখনাসের সূত্রে তিনি উল্লেখ করেন, নবী ﷺ বলেছেন: শাবান থেকে শাবান পর্যন্ত আয়ু নির্ধারিত হয়। বর্ণনাটির মান তিনি নিজেই বলে দেন: এটি মুরসাল, আর এমন বর্ণনা দিয়ে স্পষ্ট নস খণ্ডন করা যায় না। মাআরিফুল কুরআন তাঁর এই রায় উদ্ধৃত করে, আর যোগ করে কাযী আবু বকর ইবনুল আরাবীর কথা: রিযিক, জন্ম ও মৃত্যু মধ্য-শাবানে নির্ধারিত হওয়ার ব্যাপারে কোনো সহীহ বর্ণনা নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an also records a way of holding both. It notes that Ruh al-Ma'ani cites, without a chain, a report from Ibn Abbas (RA) that sustenance, life and death are determined on mid-Sha'ban and handed to the angels on the Night of Decree. If that is confirmed, it says, the two readings can be reconciled; otherwise the Qur'an's words point to the Night of Decree. It treats the merit of mid-Sha'ban as a separate issue: the traditions are weak and Ibn al-Arabi denied any merit, yet taken together they may gain strength, and many great scholars accepted them for meritorious deeds.",
            "bn": "মাআরিফুল কুরআন দুই মত মেলানোর একটি পথের কথাও লিখে রাখে। রূহুল মাআনী সনদ ছাড়া ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনে: রিযিক, জীবন ও মৃত্যু মধ্য-শাবানের রাতে নির্ধারিত হয়, আর ক্বদরের রাতে তা ফেরেশতাদের হাতে তুলে দেওয়া হয়। মাআরিফুল কুরআন বলে, এ বর্ণনা প্রমাণিত হলে দুই মত মিলে যায়। না হলে কুরআনের শব্দ ক্বদরের রাতের দিকেই ইঙ্গিত করে। মধ্য-শাবানের ফযীলতকে সে আলাদা বিষয় বলে। এ নিয়ে বর্ণনাগুলো দুর্বল, ইবনুল আরাবী কোনো ফযীলতই মানেননি। তবু সব সূত্র একসঙ্গে ধরলে সেগুলো শক্তি পেতে পারে, আর ফযীলতের আমলে বহু বড় আলেম সেগুলো গ্রহণ করেছেন।"
          },
          {
            "en": "Two things remain for a careful reader. None of the commentaries consulted here attaches a sound hadith to 44:3 that names the night. And the preferences above belong to those who stated them: at-Tabari, al-Qurtubi, Ibn Kathir and Ma'arif al-Qur'an each judged the night to be the Night of Decree, while Ikrimah, as they report him, and the unnamed others held the night of mid-Sha'ban. This article records the disagreement and its reasons as the texts give them, and leaves the weighing with its holders.",
            "bn": "মনোযোগী পাঠকের জন্য দুটি কথা থেকে যায়। হাতে থাকা কোনো তাফসীরই ৪৪:৩ আয়াতের সঙ্গে এমন কোনো সহীহ হাদিস জুড়ে দেয়নি, যা রাতটির নাম বলে দেয়। আর ওপরের পছন্দগুলো যাঁরা বলেছেন, তাঁদেরই। তাবারী, কুরতুবী, ইবন কাসীর ও মাআরিফুল কুরআন প্রত্যেকে রাতটিকে ক্বদরের রাত বলে রায় দিয়েছেন। অন্যদিকে তাঁদের বর্ণনামতে ইকরিমা, আর নাম না জানা অন্যরা, মধ্য-শাবানের রাতের মত পোষণ করেছেন। এ লেখা মতভেদ আর তার কারণগুলো তুলে ধরে, তাফসীরে যেমন আছে। কোন মত ভারী, সে বিচার যাঁদের মত, তাঁদের কাছেই থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "All at Once, or a Beginning",
          "bn": "একবারে, নাকি সূচনা"
        },
        "p": [
          {
            "en": "A second question is what anzalnahu, We sent it down, means here, since the Qur'an reached the Prophet ﷺ over many years. Al-Qurtubi lists three readings, each under it is said. The whole Qur'an was sent down to the lowest heaven on this night, then sent down portion by portion, najman najman, on other days as occasions arose. Or, on each Night of Decree came down what would be revealed through the rest of that year. Or, the sending down began on this night.",
            "bn": "দ্বিতীয় প্রশ্ন হলো, এখানে আনযালনাহু, আমি একে নাজিল করেছি, কথাটির মানে কী। কুরআন তো নবী ﷺ-এর কাছে পৌঁছেছে বহু বছর ধরে। কুরতুবী তিনটি ব্যাখ্যা আনেন, প্রতিটিই 'বলা হয়' দিয়ে। এক, পুরো কুরআন এ রাতে নিকটতম আসমানে নাজিল হয়, তারপর প্রয়োজন ও ঘটনা অনুযায়ী অন্যান্য দিনে অল্প অল্প করে নামে। কুরতুবীর শব্দ নাজমান নাজমান। দুই, প্রতি ক্বদরের রাতে নামত সে বছরের বাকি সময়ে যা নাজিল হওয়ার কথা। তিন, এ রাতেই নাজিলের সূচনা হয়।"
          },
          {
            "en": "Al-Qurtubi then gives the first reading in the names of Qatada and Ibn Zayd: Allah sent the whole Qur'an down on the Night of Decree from the Mother of the Book to the House of Honour, Bayt al-Izzah, in the lowest heaven, then sent it down to His Prophet ﷺ in nights and days over 23 years. Al-Baghawi gives the same two names and the same descent from the Mother of the Book, with Jibril bringing it down in portions over twenty years. The two figures differ in the texts as consulted, and both are reported as they stand.",
            "bn": "এরপর কুরতুবী প্রথম ব্যাখ্যাটি আনেন কাতাদা ও ইবন যায়দের নামে। আল্লাহ পুরো কুরআন ক্বদরের রাতে উম্মুল কিতাব থেকে নিকটতম আসমানের বাইতুল ইযযায় নাজিল করেন। তারপর ২৩ বছর ধরে রাতে ও দিনে তা নাজিল করেন তাঁর নবী ﷺ-এর উপর। বাগাভীও একই দুজনের নাম নেন, উম্মুল কিতাব থেকে নিকটতম আসমানে নামার কথাও বলেন। তবে তাঁর বর্ণনায় জিবরীল কুরআন নিয়ে আসেন অল্প অল্প করে ২০ বছরে। হাতে থাকা পাঠে দুই সংখ্যা আলাদা, তাই দুটোই যেমন আছে তেমন রাখা হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the descent of the whole as the meaning of the statement that the Qur'an came down on the Night of Decree: in its entirety, from the Preserved Tablet to the lowest heaven, in one night of Ramadan, and then to the Prophet ﷺ gradually over 23 years. Through al-Qurtubi it also reports the view of some scholars that each year's portion was sent down on that year's Night of Decree. Al-Qurtubi himself lists his three readings and states no preference among them.",
            "bn": "মাআরিফুল কুরআনের মতে কুরআন ক্বদরের রাতে নাজিল হওয়ার অর্থ পুরো কুরআন একসঙ্গে নামা। রমজানের একটি রাতে গোটা কুরআন লাওহে মাহফুয থেকে নিকটতম আসমানে নেমে আসে, তারপর ২৩ বছরে ধীরে ধীরে নবী ﷺ-এর কাছে পৌঁছায়। কুরতুবীর বরাতে সে কিছু আলেমের মতও আনে: প্রতি বছরের অংশটুকু সে বছরের ক্বদরের রাতে নাজিল হতো। কুরতুবী নিজে তাঁর তিনটি ব্যাখ্যা পাশাপাশি রেখেছেন, কোনোটিকে অন্যটির উপর প্রাধান্য দেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Long Given",
          "bn": "সতর্কবাণী, বহু আগে থেকেই"
        },
        "p": [
          {
            "en": "The second clause, inna kunna mundhirin, gives the purpose. Ibn Kathir explains it as teaching people what benefits and what harms them through the Sharia, so that Allah's proof stands against His servants. The Muyassar is close: warning people of what benefits and harms them, by sending messengers and sending down books, so that Allah's proof is established over His servants. At-Tabari reads it as warning, through this Book sent down on the blessed night, of Our punishment falling on whoever disbelieves and does not turn to Our oneness.",
            "bn": "দ্বিতীয় বাক্যাংশ, ইন্না কুন্না মুনযিরীন, উদ্দেশ্যটা বলে দেয়। ইবন কাসীরের ব্যাখ্যায় এর অর্থ: শরীয়তের মাধ্যমে মানুষকে জানিয়ে দেওয়া, কীসে তাদের উপকার আর কীসে ক্ষতি, যাতে বান্দাদের বিরুদ্ধে আল্লাহর হুজ্জত প্রতিষ্ঠিত হয়। মুয়াসসারের কথাও কাছাকাছি। রাসূল পাঠিয়ে ও কিতাব নাজিল করে মানুষকে উপকার-ক্ষতি সম্পর্কে সতর্ক করা, যাতে আল্লাহর হুজ্জত কায়েম হয়। তাবারীর পাঠে সতর্কবাণীটা এমন: বরকতময় রাতে নাজিল হওয়া এ কিতাবের মাধ্যমে জানিয়ে দেওয়া যে, যে কুফরি করে আর তাওহিদের দিকে ফেরে না, তার উপর আমার শাস্তি নেমে আসবে।"
          },
          {
            "en": "As-Sa'di says the Book was sent down to warn by it a people whom ignorance had covered and wretchedness had overcome, so that they would take light from it, follow its guidance, and gain the good of this world and the next. On his reading the warning's aim is rescue. The verse, and his description, speak of what the text speaks of and license nothing against any living person or community. The Muyassar's mention of messengers and books also places this Book in a line of warnings sent before it.",
            "bn": "সা'দী বলেন, কিতাবটি নাজিল হয়েছে এমন এক জাতিকে সতর্ক করতে, অজ্ঞতা যাদের ঢেকে ফেলেছিল আর দুর্ভাগ্য যাদের উপর চেপে বসেছিল। উদ্দেশ্য, তারা যেন এর আলো থেকে আলো নেয়, এর হেদায়াত অনুসরণ করে, আর দুনিয়া ও আখিরাতের কল্যাণ পায়। তাঁর পাঠে সতর্ক করার লক্ষ্য তাই উদ্ধার করা। আয়াতটি আর সা'দীর বর্ণনা কেবল সেটুকুই বলে, যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এখান থেকে কোনো অনুমতি মেলে না। মুয়াসসার রাসূল ও কিতাবের কথা বহুবচনে বলে, তাতে এ কিতাব আগের সতর্কবাণীগুলোর ধারাতেই এসে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Night Honoured by Its Book",
          "bn": "কিতাবের কারণে সম্মানিত রাত"
        },
        "p": [
          {
            "en": "What can a reader take from a verse whose night is disputed? First, the verse's own claim does not depend on the dispute: whichever night it was, Allah sent the Book down in it and called it blessed. Second, the dispute is itself a lesson in method. At-Tabari opens by saying the people of interpretation differed, sets out the reports, and only then gives his own preference, keeping the two apart. A reader can hold a scholar's preference as his and still know the other view and who held it.",
            "bn": "যে আয়াতের রাত নিয়েই মতভেদ, তা থেকে পাঠক কী নেবেন? প্রথমত, আয়াতের মূল দাবি এ মতভেদের উপর নির্ভর করে না। রাতটি যে রাতই হোক, আল্লাহ সে রাতে কিতাব নাজিল করেছেন আর রাতটিকে বরকতময় বলেছেন। দ্বিতীয়ত, মতভেদ নিজেই একটা শিক্ষা দেয়: মতভেদ কীভাবে সামলাতে হয়। তাবারী শুরুতেই জানিয়ে দেন যে তাফসীরবিদদের মধ্যে মতভেদ আছে। তারপর বর্ণনাগুলো সাজিয়ে দেন, আর সবশেষে নিজের পছন্দের কথা বলেন। দুটোকে তিনি আলাদা রাখেন। পাঠকও কোনো আলেমের পছন্দকে তাঁর পছন্দ হিসেবেই নিতে পারেন, আবার অন্য মতটি কী আর কারা সে মত দিয়েছেন, তাও জেনে রাখতে পারেন।"
          },
          {
            "en": "The clause on warning turns the verse toward the reader. On Ibn Kathir's and the Muyassar's reading, the warning is knowledge of what benefits and what harms, given so that Allah's proof stands. The night on which the Book came down has passed; the Book itself stays open. Reading it with that warning in view, and acting on what it says helps and harms, is the part of this verse that belongs to every night of the year.",
            "bn": "সতর্ক করার বাক্যাংশটি আয়াতকে পাঠকের দিকে ঘুরিয়ে দেয়। ইবন কাসীর ও মুয়াসসারের পাঠে এ সতর্কবাণী মানে কীসে উপকার আর কীসে ক্ষতি, সেই জ্ঞান। এ জ্ঞান দেওয়া হয়েছে, যাতে আল্লাহর হুজ্জত কায়েম থাকে। যে রাতে কিতাব নেমেছিল, সে রাত পেরিয়ে গেছে। কিন্তু কিতাবটি আজও খোলা। সেই সতর্কবাণী মাথায় রেখে কিতাবটি পড়া, আর কিতাব যাকে উপকারী বলে তা করা, যাকে ক্ষতিকর বলে তা থেকে দূরে থাকা: আয়াতের এই অংশ বছরের প্রতিটি রাতের জন্য।"
          }
        ]
      }
    ]
  },
  "44:4": {
    "sections": [
      {
        "h": {
          "en": "What Else That Night Holds",
          "bn": "সে রাতে আর যা ঘটে"
        },
        "p": [
          {
            "en": "Surah ad-Dukhan swears by the clear Book and answers the oath in 44:3: We sent it down on a blessed night. The next verse, five Arabic words, says what else that night holds: fiha yufraqu kullu amrin hakim, therein every wise matter is made distinct. At-Tabari joins the two verses through a pronoun. The ha in fiha, he says, refers back to the blessed night, so whatever is said about the night of 44:3 governs the night of 44:4 as well.",
            "bn": "সূরা আদ-দুখান সুস্পষ্ট কিতাবের কসম খায়, আর ৪৪:৩ আয়াতে আসে কসমের জবাব: আমি একে নাজিল করেছি এক বরকতময় রাতে। পরের আয়াতটি মাত্র পাঁচ শব্দের। সেই রাতে আর কী ঘটে, তা জানায়: ফীহা ইউফরাকু কুল্লু আমরিন হাকীম, সে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় পৃথক করে স্থির করা হয়। তাবারী দুই আয়াতকে জোড়েন একটি সর্বনাম দিয়ে। তাঁর মতে ফীহা শব্দের 'হা' ফিরে যায় বরকতময় রাতের দিকে। কাজেই ৪৪:৩ আয়াতের রাত নিয়ে যা বলা হবে, ৪৪:৪ আয়াতের রাতেও তা-ই খাটবে।"
          },
          {
            "en": "Verse 44:5 goes on, amran min 'indina, a matter from Us, and 44:6 calls the sending a mercy from your Lord. The Muyassar reads the run together: this wise matter is a matter from Allah, and everything He decrees and reveals happens by His command, His leave and His knowledge. The article on 44:3 treats the night itself and the sending down. This article stays with the verb, the matter it governs, and what the commentators say is separated on that night.",
            "bn": "৪৪:৫ আয়াত বলে, আমরান মিন ইন্দিনা, আমার পক্ষ থেকে এক আদেশ। আর ৪৪:৬ আয়াত এই পাঠানোকে বলে তোমার রবের রহমত। মুয়াসসার পুরো অংশটা একসঙ্গে পড়ে: এই প্রজ্ঞাপূর্ণ বিষয় আল্লাহরই আদেশ, তিনি যা কিছু নির্ধারণ করেন আর যা ওহি পাঠান, সবই ঘটে তাঁর হুকুমে, তাঁর অনুমতিতে, তাঁর জ্ঞানে। রাতটি আর কিতাব নাজিলের প্রসঙ্গ আছে ৪৪:৩ আয়াতের লেখায়। এ লেখা থাকবে ক্রিয়াটির সঙ্গে, যে বিষয়ের কথা সে বলে তার সঙ্গে, আর তাফসীরকারদের মতে সে রাতে কী পৃথক করা হয়, তার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Set Apart and Decided",
          "bn": "আলাদা করা, মীমাংসা করা"
        },
        "p": [
          {
            "en": "The verb yufraqu comes from the root f-r-q, to separate. Al-Baghawi gives yufsal, it is set apart. At-Tabari, in his own reading, says that in this blessed night every matter Allah has made firm for that year, until the like of it the following year, is decided and set apart: yuqda wa yufsal. The Muyassar uses the same pair and adds where the matter goes: from the Preserved Tablet to the scribes among the angels.",
            "bn": "ইউফরাকু ক্রিয়ার মূল ফ-র-ক, যার অর্থ আলাদা করা। বাগাভী লেখেন ইউফসালু, অর্থাৎ পৃথক করা হয়। তাবারী নিজের ব্যাখ্যায় বলেন, এই বরকতময় রাতে আল্লাহ সে বছরের জন্য, পরের বছরের একই রাত পর্যন্ত, যত বিষয় পাকা করেছেন, তার প্রতিটি মীমাংসা করা হয় ও পৃথক করা হয়: ইউকদা ওয়া ইউফসালু। মুয়াসসারও এই জোড়া শব্দই ব্যবহার করে। সঙ্গে জানায় বিষয়গুলো কোথায় যায়: লাওহে মাহফুজ থেকে ফেরেশতাদের মধ্যে যাঁরা লেখক, তাঁদের কাছে।"
          },
          {
            "en": "As-Sa'di uses three verbs: it is set apart, distinguished and written. He also widens the object to every matter, whether of decree or of law, that Allah has ruled. Al-Qurtubi records other readings of the verb. Some read it with the r doubled. Some read it in the active voice, with every matter as its object, and of that reading he says the separator is Allah, Mighty and Majestic. And Zayd ibn Ali read nufarriqu, We separate.",
            "bn": "সা'দী ব্যবহার করেন তিনটি ক্রিয়া: পৃথক করা হয়, আলাদা করে চিহ্নিত করা হয়, আর লেখা হয়। বিষয়ের পরিধিও তিনি বাড়িয়ে দেন। আল্লাহ যে ফয়সালা দিয়েছেন, তা তাকদীরের হোক বা শরীয়তের, সবই এর ভেতরে। কুরতুবী ক্রিয়াটির আরও কিছু কিরাআত উল্লেখ করেন। কেউ 'র' অক্ষরে তাশদীদ দিয়ে পড়েছেন। কেউ এমনভাবে পড়েছেন যে অর্থ দাঁড়ায়: তিনি প্রতিটি বিষয় পৃথক করেন। এই পাঠ সম্পর্কে কুরতুবী বলেন, পৃথককারী হলেন মহান আল্লাহ। আর যায়দ ইবন আলী পড়েছেন নুফাররিকু, অর্থাৎ আমি পৃথক করি।"
          }
        ]
      },
      {
        "h": {
          "en": "Firm, and Full of Wisdom",
          "bn": "অটল, আর হিকমতে ভরা"
        },
        "p": [
          {
            "en": "Then the adjective: every matter is hakim, and the commentators give it two senses. At-Tabari says hakim stands in the place of muhkam, made firm, and cites a parallel: alif lam mim, tilka ayatu al-kitabi al-hakim (31:1 and 31:2), where the Book called hakim means the Book made firm. Ibn Kathir agrees: muhkam, it is not exchanged and not altered. The Muyassar ends its gloss on the year's decrees with those very words.",
            "bn": "এরপর বিশেষণটি: প্রতিটি বিষয় হাকীম। তাফসীরকারেরা এর দুটি অর্থ দেন। তাবারী বলেন, হাকীম শব্দ এখানে বসেছে মুহকামের জায়গায়, অর্থাৎ পাকা, সুদৃঢ়। দৃষ্টান্তও দেন: আলিফ লাম মীম, তিলকা আয়াতুল কিতাবিল হাকীম (৩১:১ ও ৩১:২)। সেখানেও হাকীম কিতাব মানে সুদৃঢ় কিতাব। ইবন কাসীরও এ অর্থই নেন: মুহকাম, যা বদলানো হয় না, পাল্টানো হয় না। বছরের ফয়সালার ব্যাখ্যা মুয়াসসারও শেষ করে ঠিক এই কথা দিয়ে।"
          },
          {
            "en": "Al-Qurtubi gives the other sense in the closing line of his comment: kullu amrin hakim means every affair possessed of wisdom, that is, done as wisdom requires. Al-Baghawi writes simply muhkam. As-Sa'di ends his comment by tracing the whole of it to the completeness of Allah's knowledge, the perfection of His wisdom, the precision of His keeping and His care for His creation. None of them sets the two senses against each other: in their glosses, the matter is settled firmly, and it is settled with wisdom.",
            "bn": "অন্য অর্থটি কুরতুবী দেন তাঁর আলোচনার শেষ লাইনে: কুল্লু আমরিন হাকীম মানে হিকমতসম্পন্ন প্রতিটি বিষয়, অর্থাৎ যা ঘটে হিকমতের দাবি অনুযায়ী। বাগাভী শুধু লেখেন মুহকাম। সা'দী তাঁর আলোচনা শেষ করেন সবকিছুকে আল্লাহর গুণের দিকে ফিরিয়ে দিয়ে: তাঁর জ্ঞানের পূর্ণতা, হিকমতের পরিপূর্ণতা, হেফাজতের নিখুঁত ব্যবস্থা, আর সৃষ্টির প্রতি তাঁর যত্ন। তাঁদের কেউই দুই অর্থকে পরস্পরের বিপরীতে দাঁড় করান না। তাঁদের ব্যাখ্যায় বিষয়টি স্থির হয় দৃঢ়ভাবে, আর স্থির হয় হিকমতের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Year Written Out",
          "bn": "এক বছরের পুরো খতিয়ান"
        },
        "p": [
          {
            "en": "Ibn Kathir explains the verse in a single sentence: on the Night of Decree the matter of the year is separated out from the Preserved Tablet to the scribes, with the life-spans and provisions in it and whatever will happen in it to its end. He adds that this was reported from Ibn Umar, Abu Malik, Mujahid, ad-Dahhak and more than one of the early generations. The Muyassar repeats the line almost word for word, and says plainly that the scribes are angels.",
            "bn": "ইবন কাসীর আয়াতটির ব্যাখ্যা দেন এক বাক্যে: ক্বদরের রাতে লাওহে মাহফুজ থেকে লেখকদের কাছে পৃথক করে দেওয়া হয় পুরো বছরের বিষয়, তাতে কার কত আয়ু, কার কত রিযিক, আর বছরের শেষ পর্যন্ত যা যা ঘটবে। তিনি যোগ করেন, এমন কথা বর্ণিত আছে ইবন উমার, আবু মালিক, মুজাহিদ, যাহহাক এবং পূর্বসূরিদের আরও অনেকের কাছ থেকে। মুয়াসসার প্রায় হুবহু একই কথা বলে, আর স্পষ্ট করে দেয় যে লেখকরা হলেন ফেরেশতা।"
          },
          {
            "en": "At-Tabari's early reports fill in the list. Abu Malik: the matter of the year to the year, whether creation, provision, term of life or calamity. Mujahid: in the Night of Decree, every matter that will be in the year until the next, life and death; livelihoods and calamities are all measured out in it. Al-Hasan, asked whether the Night of Decree comes in every Ramadan, swore by Allah that it does, and that it is the night in which every wise matter is made distinct.",
            "bn": "তাবারী পূর্বসূরিদের যে বর্ণনাগুলো জড়ো করেন, তাতে তালিকাটা আরও ভরে ওঠে। আবু মালিক বলেন: এক বছর থেকে পরের বছর পর্যন্ত সব বিষয়, সৃষ্টি হোক, রিযিক হোক, আয়ু হোক বা বিপদ। মুজাহিদ বলেন: ক্বদরের রাতে বছরজুড়ে যা যা ঘটবে, জীবন আর মৃত্যু, সব। জীবিকা আর বিপদ, সবকিছুর পরিমাণ সে রাতেই ঠিক হয়। হাসানকে একজন জিজ্ঞেস করেছিল, ক্বদরের রাত কি প্রতি রমজানেই আসে? তিনি আল্লাহর কসম খেয়ে বললেন, হ্যাঁ। আর বললেন, এটাই সেই রাত, যে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় পৃথক করা হয়।"
          },
          {
            "en": "In al-Baghawi's report, Ibn Abbas (RA) says that on the Night of Decree there is written from the Mother of the Book what will be in the year of good and evil, provisions and terms of life, even the pilgrims: it is said, so-and-so will make the Hajj, and so-and-so. Al-Qurtubi gives the same saying with death, life and rain in the list.",
            "bn": "বাগাভীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, ক্বদরের রাতে উম্মুল কিতাব থেকে লিখে নেওয়া হয় বছরে কী কী ঘটবে: ভালো-মন্দ, রিযিক, আয়ু, এমনকি হাজীদের নামও। বলা হয়, অমুক হজ করবে, অমুকও করবে। কুরতুবী একই কথা আনেন, তাঁর তালিকায় আছে মৃত্যু, জীবন আর বৃষ্টিও।"
          }
        ]
      },
      {
        "h": {
          "en": "Known Before, Handed Over",
          "bn": "আগে থেকেই জানা, এখন হস্তান্তর"
        },
        "p": [
          {
            "en": "If the year's matters are decided on this night, were they unknown before it? Al-Qurtubi relays al-Mahdawi's explanation of the reports: Allah commands the angels with what will be in that year, while it has never ceased to be in His knowledge. Al-Qurtubi says the same in his own words further on: this making plain of the year's rulings is for the angels entrusted with the means by which creation runs. Ma'arif al-Qur'an, citing al-Qurtubi, speaks of the year's decrees being handed to the angels to carry out.",
            "bn": "বছরের বিষয়গুলো যদি এ রাতেই স্থির হয়, তবে কি এর আগে সেগুলো অজানা ছিল? কুরতুবী বর্ণনাগুলোর ব্যাখ্যায় মাহদাভীর কথা তুলে ধরেন: আল্লাহ সে বছর যা ঘটবে, সে বিষয়ে ফেরেশতাদের আদেশ দেন। অথচ তা সব সময়ই তাঁর জ্ঞানে ছিল। পরে কুরতুবী নিজের ভাষায়ও একই কথা বলেন: বছরের বিধানগুলো এভাবে খুলে দেওয়া হয় সেই ফেরেশতাদের জন্য, সৃষ্টি জগৎ যেসব উপায়ে চলে, তার দায়িত্ব যাঁদের হাতে। মাআরিফুল কুরআন কুরতুবীর বরাতে বলে, বছরের ফয়সালাগুলো কার্যকর করার জন্য ফেরেশতাদের হাতে তুলে দেওয়া হয়।"
          },
          {
            "en": "As-Sa'di sets the night inside a longer chain of writings. This writing on the Night of Decree, he says, is one of several, and each one matches the first Book in which Allah wrote the measures of His creatures, their terms, provisions, deeds and states. Allah has charged angels to write what will befall a servant while he is still in his mother's womb. Once he comes into the world, He sets over him noble scribes who write and keep his deeds. Then on the Night of Decree He measures out the year.",
            "bn": "সা'দী এ রাতকে বসান লেখার এক লম্বা ধারার ভেতরে। তিনি বলেন, ক্বদরের রাতের এই লেখা কয়েকটি লেখার একটি। প্রতিটিই মিলে যায় সেই প্রথম কিতাবের সঙ্গে, যেখানে আল্লাহ লিখে রেখেছেন সৃষ্টির তাকদীর: তাদের আয়ু, রিযিক, আমল আর অবস্থা। বান্দা যখন মায়ের গর্ভে, তখনই তার জীবনে কী ঘটবে, তা লেখার দায়িত্ব আল্লাহ কিছু ফেরেশতাকে দিয়েছেন। দুনিয়ায় আসার পর তার উপর নিযুক্ত করেন সম্মানিত লেখকদের, যাঁরা তার আমল লেখেন ও সংরক্ষণ করেন। তারপর ক্বদরের রাতে তিনি নির্ধারণ করেন সারা বছরে কী ঘটবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Writing Keeps Fixed",
          "bn": "যে লেখা বদলায় না"
        },
        "p": [
          {
            "en": "Two early remarks bear on whether the year's writing can move. Al-Qurtubi records a saying of Ibn Umar (RA): except wretchedness and felicity, for those two do not change. At-Tabari tells of Mansur, who asked Mujahid about a prayer some people said: O Allah, if my name is among the felicitous, keep it among them; and if it is among the wretched, erase it from them and place it with the felicitous. Mujahid answered that it was good.",
            "bn": "বছরের লেখা কি নড়চড় হতে পারে? পূর্বসূরিদের দুটি কথা এ প্রশ্ন ছুঁয়ে যায়। কুরতুবী ইবন উমার (রাঃ)-এর একটি কথা উল্লেখ করেন: শুধু দুর্ভাগ্য আর সৌভাগ্য ছাড়া, কারণ এ দুটি বদলায় না। তাবারী শোনান মানসুরের ঘটনা। কেউ কেউ একটা দোয়া পড়ত: হে আল্লাহ, আমার নাম যদি সৌভাগ্যবানদের মধ্যে থাকে, তবে সেখানেই রাখুন। আর যদি দুর্ভাগাদের মধ্যে থাকে, তবে সেখান থেকে মুছে দিয়ে সৌভাগ্যবানদের মধ্যে লিখে দিন। মানসুর এ দোয়া সম্পর্কে মুজাহিদকে জিজ্ঞেস করলেন। মুজাহিদ বললেন, ভালো।"
          },
          {
            "en": "A year or more later Mansur asked again. This time Mujahid recited 44:3 and 44:4 and said: what will be in the year of provision or calamity is decided in the Night of Decree, then He brings forward what He wills and holds back what He wills; but the book of felicity and wretchedness is fixed and does not change. That is Mujahid's statement as at-Tabari records it; Ibn Kathir glosses hakim as not altered. The sources leave the two remarks unreconciled, and so does this article.",
            "bn": "এক বছর বা তারও পরে মানসুর আবার একই প্রশ্ন করলেন। এবার মুজাহিদ ৪৪:৩ ও ৪৪:৪ আয়াত তিলাওয়াত করে বললেন: বছরে রিযিক বা বিপদের যা কিছু ঘটবে, তা ক্বদরের রাতে স্থির হয়। তারপর আল্লাহ যা চান আগে আনেন, যা চান পিছিয়ে দেন। কিন্তু সৌভাগ্য আর দুর্ভাগ্যের লেখা অটল, বদলায় না। এ কথা মুজাহিদের, যেমনটা তাবারী লিপিবদ্ধ করেছেন। আর ইবন কাসীরের ব্যাখ্যায় হাকীম মানে যা পাল্টানো হয় না। উৎসগুলো এ দুই কথা মেলানোর চেষ্টা করেনি, এ লেখাও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ramadan or Mid-Sha'ban Here",
          "bn": "এখানে রমজান, নাকি মধ্য-শাবান"
        },
        "p": [
          {
            "en": "At-Tabari opens his comment on 44:4 with a dispute: the people of interpretation differed over the night in which every wise matter is made distinct, just as they differed over the blessed night, because fiha refers to it. Some said it is the Night of Decree. For this he gives al-Hasan, Abu Malik, Abu Abd ar-Rahman, Mujahid and Qatada, and a line from Hilal ibn Yasaf: it used to be said, wait for the decree in the month of Ramadan.",
            "bn": "৪৪:৪ আয়াতের আলোচনা তাবারী শুরু করেন একটি মতভেদ দিয়ে। যে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় পৃথক করা হয়, সে রাত নিয়ে মুফাসসিররা মতভেদ করেছেন, ঠিক যেমন মতভেদ করেছেন বরকতময় রাত নিয়ে। কারণ ফীহা সেই রাতকেই বোঝায়। একদল বলেছেন, এটি ক্বদরের রাত। এ মতের পক্ষে তিনি আনেন হাসান, আবু মালিক, আবু আবদির রহমান, মুজাহিদ ও কাতাদার বর্ণনা। সঙ্গে হিলাল ইবন ইয়াসাফের একটি কথা: বলা হতো, ফয়সালার অপেক্ষা করো রমজান মাসে।"
          },
          {
            "en": "Others said it is the night of the middle of Sha'ban. At-Tabari gives this from Ikrimah, in words tied to this verse: on that night the matter of the year is made binding, the living are copied out from the dead, and the pilgrims are written down, so that none is added to them and none taken away. Al-Baghawi and al-Qurtubi carry the same saying from Ikrimah. Al-Baghawi also records, through Abu ad-Duha from Ibn Abbas (RA), that Allah decides the decrees on mid-Sha'ban and hands them to those charged with them on the Night of Decree.",
            "bn": "অন্যরা বলেছেন, এটি শাবান মাসের মাঝামাঝি রাত। তাবারী এ মত আনেন ইকরিমা থেকে, এই আয়াতের সঙ্গে জড়ানো ভাষায়: সে রাতে বছরের বিষয় পাকা করা হয়, জীবিতদের নাম মৃতদের থেকে আলাদা করে লেখা হয়, আর হাজীদের নাম লেখা হয়, তাতে একজনও বাড়ে না, একজনও কমে না। বাগাভী আর কুরতুবীও ইকরিমার এই কথা আনেন। বাগাভী আরও বর্ণনা করেন আবুদ দুহার সূত্রে ইবন আব্বাস (রাঃ) থেকে: আল্লাহ মধ্য-শাবানে ফয়সালাগুলো স্থির করেন, আর ক্বদরের রাতে সেগুলো দায়িত্বপ্রাপ্তদের হাতে তুলে দেন।"
          },
          {
            "en": "The verdicts are the commentators' own. At-Tabari judges the Night of Decree the sounder view, since he has shown the blessed night of 44:3 to be that night and fiha refers to it. Al-Qurtubi notes that the author of Kitab al-Arus chose mid-Sha'ban and called it the night of bara'ah, and replies that the sound view is the Night of Decree. He quotes Qadi Abu Bakr ibn al-Arabi: the majority hold it is the Night of Decree, the Sha'ban view is void because 2:185 fixes the sending down in Ramadan, and no reliable hadith supports either the night's merit or terms being copied in it.",
            "bn": "রায়গুলো তাফসীরকারদের নিজেদের। তাবারীর বিচারে ক্বদরের রাতের মতটিই অধিক সঠিক, কারণ তিনি আগেই দেখিয়েছেন ৪৪:৩ আয়াতের বরকতময় রাত সেই রাত, আর ফীহা তাকেই বোঝায়। কুরতুবী জানান, কিতাবুল আরূসের লেখক মধ্য-শাবান বেছে নিয়েছেন এবং একে বারাআতের রাত বলেছেন। জবাবে কুরতুবী বলেন, সঠিক মত হলো ক্বদরের রাত। তিনি কাজী আবু বকর ইবনুল আরাবীর কথাও উদ্ধৃত করেন: অধিকাংশ আলেমের মতে এটি ক্বদরের রাত। শাবানের মতটি বাতিল, কারণ ২:১৮৫ আয়াত নাজিলের সময় রমজানে বেঁধে দিয়েছে। আর এ রাতের ফজিলত বা এতে আয়ু লেখা নিয়ে নির্ভর করার মতো কোনো হাদীস নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Brought to This Verse",
          "bn": "এ আয়াতে আনা বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a sound hadith to 44:4. At-Tabari, al-Baghawi and al-Qurtubi carry a report from Uthman ibn Muhammad ibn al-Mughira ibn al-Akhnas, who quotes the Prophet ﷺ with no Companion named between them: life-spans are cut off from Sha'ban to Sha'ban, so that a man marries and has a child born to him while his name has gone out among the dead. Ibn Kathir graded it mursal, as the article on 44:3 records.",
            "bn": "এখানে দেখা কোনো তাফসীরই ৪৪:৪ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। তাবারী, বাগাভী ও কুরতুবী একটি বর্ণনা আনেন উসমান ইবন মুহাম্মাদ ইবনুল মুগীরা ইবনুল আখনাস থেকে। তিনি সরাসরি নবী ﷺ-এর কথা উদ্ধৃত করেন, মাঝে কোনো সাহাবীর নাম নেই। কথাটি এই: আয়ু কাটা হয় এক শাবান থেকে আরেক শাবানে, এমনকি মানুষ বিয়ে করে, তার সন্তান জন্মায়, অথচ তার নাম ততদিনে মৃতদের তালিকায় উঠে গেছে। ইবন কাসীর একে মুরসাল বলেছেন, ৪৪:৩ আয়াতের লেখায় যেমন উল্লেখ আছে।"
          },
          {
            "en": "Al-Qurtubi also brings to this verse a report that at-Tirmidhi records (739): 'Aishah narrated: I could not find the Messenger of Allah one night. So I left and found him at Al-Baqi. He said: Did you fear that you had been wronged by Allah and His Messenger? I said: O Messenger of Allah! I thought that you had gone to one of your wives. So he said: Indeed Allah, Mighty and Sublime is He, descends to the lowest Heavens during the night of the middle of Sha'ban, to grant forgiveness to more than the number of hairs on the sheep of (Banu) Kalb.'",
            "bn": "কুরতুবী এ আয়াতে তিরমিযীর (৭৩৯) একটি বর্ণনাও আনেন: আয়েশা (রাঃ) বলেন, এক রাতে আমি আল্লাহর রাসূল ﷺ-কে খুঁজে পেলাম না। বেরিয়ে দেখি, তিনি বাকী'তে। তিনি বললেন, তুমি কি ভয় পেয়েছিলে যে আল্লাহ ও তাঁর রাসূল তোমার প্রতি অবিচার করবেন? আমি বললাম, হে আল্লাহর রাসূল, আমি ভেবেছিলাম আপনি আপনার অন্য কোনো স্ত্রীর কাছে গেছেন। তিনি বললেন, মহান আল্লাহ মধ্য-শাবানের রাতে দুনিয়ার আসমানে নেমে আসেন, আর বনু কালবের ভেড়ার পশমের সংখ্যার চেয়েও বেশি মানুষকে ক্ষমা করেন।"
          },
          {
            "en": "At-Tirmidhi himself grades it down. He says he knows Aishah's report only by this one route, through al-Hajjaj, and that he heard Muhammad weaken it: Yahya ibn Abi Kathir did not hear from Urwah, and al-Hajjaj did not hear from Yahya. Its subject is forgiveness on that night, not decrees made distinct, and nothing in its wording ties it to 44:4; al-Qurtubi places it here. What may be done on that night is a question of fiqh, and this article gives no ruling on it.",
            "bn": "তিরমিযী নিজেই বর্ণনাটিকে দুর্বল বলেছেন। তিনি জানান, আয়েশা (রাঃ)-এর এ বর্ণনা তিনি হাজ্জাজের এই একটি সূত্র ছাড়া চেনেন না। আর তিনি মুহাম্মাদকে এটিকে দুর্বল বলতে শুনেছেন, কারণ ইয়াহইয়া ইবন আবী কাসীর উরওয়া থেকে শোনেননি, আর হাজ্জাজ শোনেননি ইয়াহইয়া থেকে। এর বিষয় সে রাতের ক্ষমা, ফয়সালা পৃথক করা নয়। এর ভাষায় ৪৪:৪ আয়াতের সঙ্গে কোনো যোগ নেই, কুরতুবী নিজে একে এখানে এনেছেন। সে রাতে কী করা যায়, তা ফিকহের প্রশ্ন, এ লেখা সে বিষয়ে কোনো বিধান দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Planting Trees in a Written Year",
          "bn": "লেখা বছরে গাছ লাগানো"
        },
        "p": [
          {
            "en": "Two reports at-Tabari keeps on this verse make the same point. Umar, the freedman of Ghufrah, said: it used to be said that the angel of death is given a copy of who will die from one Night of Decree to the next, so you find a man marrying and planting trees while his name is among the dead. From Ibn Abbas (RA), through Sa'id ibn Jubayr: a man walks among people and has already been raised among the dead. Then he recited 44:3 and 44:4.",
            "bn": "এ আয়াতে তাবারীর রাখা দুটি বর্ণনা একই কথা বলে। গুফরার মুক্ত গোলাম উমার বলেন: বলা হতো, এক ক্বদরের রাত থেকে পরের ক্বদরের রাত পর্যন্ত কে কে মারা যাবে, তার একটি কপি মৃত্যুর ফেরেশতাকে দেওয়া হয়। তাই দেখবে, মানুষ বিয়ে করছে, গাছ লাগাচ্ছে, অথচ তার নাম মৃতদের তালিকায়। সাঈদ ইবন জুবাইরের সূত্রে ইবন আব্বাস (রাঃ) বলেন: মানুষ লোকজনের মাঝে হেঁটে বেড়ায়, অথচ তাকে ইতিমধ্যে মৃতদের মধ্যে তুলে নেওয়া হয়েছে। তারপর তিনি ৪৪:৩ ও ৪৪:৪ আয়াত তিলাওয়াত করেন।"
          },
          {
            "en": "Neither report tells the man to stop marrying or planting. The verse gives the year's matters to Allah, the next verse calls them a matter from Us, and the commentators' glosses describe what is settled as settled firmly and with wisdom. A reader can plan the year in earnest and work for it, and still hold each plan lightly: asking Allah for good in it, and meeting what reaches him as coming from the One whose every matter is wise.",
            "bn": "কোনো বর্ণনাই মানুষকে বিয়ে করা বা গাছ লাগানো থামাতে বলে না। আয়াত বছরের সব বিষয় আল্লাহর হাতে সঁপে দেয়, পরের আয়াত সেগুলোকে বলে আমার পক্ষ থেকে আদেশ। আর তাফসীরকারদের ব্যাখ্যায় যা স্থির হয়, তা স্থির হয় দৃঢ়ভাবে ও হিকমতের সঙ্গে। পাঠক তাই মন দিয়ে বছরের পরিকল্পনা করতে পারেন, সে জন্য খাটতেও পারেন। তবু প্রতিটি পরিকল্পনা ধরে রাখবেন হালকা হাতে। তাতে আল্লাহর কাছে কল্যাণ চাইবেন, আর যা আসে তাকে গ্রহণ করবেন এমন একজনের পক্ষ থেকে, যাঁর প্রতিটি বিষয় প্রজ্ঞাপূর্ণ।"
          }
        ]
      }
    ]
  },
  "44:8": {
    "sections": [
      {
        "h": {
          "en": "From Lordship to Worship",
          "bn": "রুবুবিয়াত থেকে ইবাদতে"
        },
        "p": [
          {
            "en": "The verse before ends on a condition: Lord of the heavens and the earth and all between them, if you would be certain (44:7). The Muyassar draws the inference that the condition invites: if you are certain of that, then know that the Lord of all creatures is their true God. Then 44:8 states it outright: la ilaha illa huwa, yuhyi wa yumit, rabbukum wa rabbu aba'ikum al-awwalin. There is no god but Him; He gives life and causes death; your Lord and the Lord of your first forefathers.",
            "bn": "আগের আয়াত শেষ হয় একটি শর্তে: আকাশ, পৃথিবী আর এ দুয়ের মাঝের সবকিছুর রব, যদি তোমরা দৃঢ় বিশ্বাসী হও (৪৪:৭)। মুয়াসসার এ শর্ত থেকে সিদ্ধান্তটা টেনে বের করে: এ কথায় যদি তোমাদের দৃঢ় বিশ্বাস থাকে, তবে জেনে রাখো, সব সৃষ্টির যিনি রব, তিনিই তাদের সত্য ইলাহ। তারপর ৪৪:৮ কথাটা সরাসরি বলে দেয়: লা ইলাহা ইল্লা হুয়া, ইউহয়ী ওয়া ইউমীত, রব্বুকুম ওয়া রব্বু আবাইকুমুল আওয়ালীন। তিনি ছাড়া কোনো ইলাহ নেই। তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। তিনি তোমাদের রব, তোমাদের আগের পূর্বপুরুষদেরও রব।"
          },
          {
            "en": "The order of the two verses is the argument. First comes lordship: who made and owns the heavens and the earth. Then comes the claim that follows from it: who alone may be worshipped. At-Tabari makes the link in so many words, reading la ilaha illa huwa as: you have no one to worship, O people, other than the Lord of the heavens and the earth and what is between them. The consulted Arabic commentaries on this verse are short, a few lines each, and what follows keeps to what they actually say.",
            "bn": "দুই আয়াতের ক্রমটাই এখানে যুক্তি। প্রথমে রুবুবিয়াত: আকাশ আর পৃথিবী কে বানিয়েছেন, কার মালিকানায় আছে। তারপর তা থেকে যে দাবি আসে: ইবাদত পাওয়ার অধিকার একমাত্র কার। তাবারী সংযোগটা স্পষ্ট ভাষায় বলেন। লা ইলাহা ইল্লা হুয়া-র অর্থ তাঁর কাছে: হে মানুষ, আকাশ, পৃথিবী আর দুয়ের মাঝের সবকিছুর রব ছাড়া তোমাদের আর কোনো মাবুদ নেই। এ আয়াতে যে আরবি তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো ছোট, প্রত্যেকটা কয়েক লাইনের। সামনের আলোচনা তাদের আসল কথার ভেতরেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Fits No Other",
          "bn": "ইবাদত আর কারও সাজে না"
        },
        "p": [
          {
            "en": "At-Tabari does not stop at the definition. He turns it into a command and gives the reason: so do not worship anyone besides Him, for worship is not fitting for any other, and it does not befit anything apart from Him. The Muyassar's wording is close: no god deserves worship except Him alone, with no partner. As-Sa'di is the briefest of all: there is nothing worshipped except His Face. In each case the negation sweeps everything away, and the exception leaves One.",
            "bn": "তাবারী সংজ্ঞা দিয়েই থামেন না। কথাটাকে তিনি আদেশে রূপ দেন, সঙ্গে কারণও দেন: কাজেই তিনি ছাড়া আর কারও ইবাদত কোরো না, কারণ ইবাদত আর কারও জন্য মানায় না, তিনি ছাড়া আর কোনো কিছুর তা প্রাপ্য নয়। মুয়াসসারের ভাষা কাছাকাছি: ইবাদতের হকদার কোনো ইলাহ নেই, শুধু তিনি ছাড়া, একা, কোনো শরিক ছাড়া। সাদী সবচেয়ে সংক্ষেপে বলেন: তাঁর সত্তা ছাড়া আর কোনো মাবুদ নেই। প্রতিটি ব্যাখ্যায় 'না' সবকিছু সরিয়ে দেয়, আর 'ছাড়া' বাকি রাখে শুধু একজনকে।"
          },
          {
            "en": "Al-Qurtubi reaches the same point by another road. For him la ilaha illa huwa means that He is the Creator of the world, and so it is not permissible to associate with Him anything else that has no power to create a thing. At-Tabari argues from what the false gods cannot do for their worshippers; al-Qurtubi argues from what they cannot make at all. Both close the door on a partner, one through benefit and harm, the other through creation.",
            "bn": "কুরতুবী একই জায়গায় পৌঁছান অন্য পথে। তাঁর মতে লা ইলাহা ইল্লা হুয়া মানে, তিনিই জগতের স্রষ্টা। তাই এমন কাউকে তাঁর শরিক বানানো জায়েয নয়, যে একটা জিনিসও সৃষ্টি করতে পারে না। তাবারীর যুক্তি: মিথ্যা উপাস্যরা তাদের পূজারীদের জন্য কিছুই করতে পারে না। কুরতুবীর যুক্তি: তারা কিছুই বানাতে পারে না। একজন উপকার-ক্ষতির দিক থেকে, অন্যজন সৃষ্টির দিক থেকে, দুজনেই শরিকের দরজা বন্ধ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Both Ends of Every Life",
          "bn": "প্রতিটি জীবনের দুই প্রান্ত"
        },
        "p": [
          {
            "en": "Yuhyi wa yumit: He gives life and He causes death. At-Tabari's gloss keeps the will in view: it is He who gives life to whatever He wills, and causes to die whatever He wills of what was living. Nothing lives because it chose to, and nothing dies outside His choosing. The phrase answers the first half of the verse with something every listener has watched happen.",
            "bn": "ইউহয়ী ওয়া ইউমীত: তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। তাবারীর ব্যাখ্যায় ইচ্ছার কথাটা সামনে থাকে: তিনিই যাকে ইচ্ছা জীবন দেন, আর জীবিতদের মধ্যে যাকে ইচ্ছা মৃত্যু দেন। নিজের পছন্দে কেউ বেঁচে থাকে না, আর তাঁর ইচ্ছার বাইরে কেউ মরে না। আয়াতের প্রথম অংশের দাবির জবাব আসে এমন জিনিস দিয়ে, যা প্রত্যেক শ্রোতা নিজের চোখে ঘটতে দেখেছে।"
          },
          {
            "en": "Al-Qurtubi turns the phrase round: He gives life to the dead and causes death to the living. His reading puts the two states side by side, each one handed over into the other by the same power. As-Sa'di stresses that the power is undivided: He alone disposes of giving life and causing death. Read together, the three glosses say one thing. Whoever controls both ends of every life is the only one with a claim on the life in between.",
            "bn": "কুরতুবী কথাটা উল্টো দিক থেকে বলেন: তিনি মৃতকে জীবন দেন, জীবিতকে মৃত্যু দেন। তাঁর ব্যাখ্যায় দুই অবস্থা পাশাপাশি দাঁড়ায়, আর একই শক্তি একটাকে অন্যটায় বদলে দেয়। সাদী জোর দেন একটি কথায়: এ ক্ষমতা ভাগ হয় না। জীবন দেওয়া আর মৃত্যু ঘটানোর এখতিয়ার একা তাঁরই। তিনটি ব্যাখ্যা একসঙ্গে পড়লে একটাই কথা দাঁড়ায়। প্রতিটি জীবনের দুই প্রান্ত যাঁর হাতে, মাঝের জীবনটার উপর দাবিও শুধু তাঁরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Owner of Every Generation",
          "bn": "প্রতিটি প্রজন্মের মালিক"
        },
        "p": [
          {
            "en": "Rabbukum wa rabbu aba'ikum al-awwalin: your Lord and the Lord of your first forefathers. At-Tabari and al-Qurtubi both take rabb here as malik, owner. At-Tabari: He is your Owner and the Owner of those of your forefathers who have passed before you. Al-Qurtubi: your Owner and the Owner of those of you who came earlier. On this reading the phrase is about possession running unbroken across time. The people who lived and died before the listeners were never their own, and neither are the listeners.",
            "bn": "রব্বুকুম ওয়া রব্বু আবাইকুমুল আওয়ালীন: তোমাদের রব, তোমাদের আগের পূর্বপুরুষদেরও রব। তাবারী আর কুরতুবী দুজনেই এখানে রব শব্দের অর্থ নেন মালিক। তাবারী বলেন: তিনি তোমাদের মালিক, আর তোমাদের যে পূর্বপুরুষেরা আগে চলে গেছে তাদেরও মালিক। কুরতুবী বলেন: তোমাদের মালিক, আর তোমাদের মধ্যে যারা আগে এসেছে তাদেরও মালিক। এ ব্যাখ্যায় কথাটা এমন এক মালিকানার, যা সময়ের ভেতর দিয়ে কখনো ছিন্ন হয়নি। শ্রোতাদের আগে যারা বেঁচে ছিল আর মারা গেছে, তারা কখনো নিজেদের ছিল না। শ্রোতারাও নয়।"
          },
          {
            "en": "As-Sa'di reads the same words through care rather than ownership: Lord of the first and the last, who nurtures them with blessings and wards off harm from them. His gloss widens the forefathers into all generations, earlier and later, and fills the word rabb with provision and protection. This is not a disagreement with at-Tabari and al-Qurtubi. Read side by side, the glosses bring out both sides of the one word rabb: the Lord who owns, and the Lord who looks after what He owns.",
            "bn": "সাদী একই শব্দ পড়েন মালিকানার চেয়ে প্রতিপালনের দিক থেকে: আগের ও পরের সবার রব, যিনি নিয়ামত দিয়ে তাদের লালন করেন আর বিপদ থেকে তাদের রক্ষা করেন। তাঁর ব্যাখ্যায় পূর্বপুরুষের কথা ছড়িয়ে যায় আগের-পরের সব প্রজন্মে, আর রব শব্দে ভরে ওঠে রিযিক আর হেফাজতের অর্থ। এটা তাবারী ও কুরতুবীর সঙ্গে মতভেদ নয়। পাশাপাশি পড়লে ব্যাখ্যাগুলো রব শব্দের দুটো দিক সামনে আনে: যে রব মালিক, আর যে রব নিজের মালিকানার জিনিসের দেখাশোনা করেন।"
          },
          {
            "en": "Notice what the phrase does with the listeners' own family line. Their forefathers are not set against Allah as rival authorities; they are placed under Him. Whatever those ancestors did or did not acknowledge, the verse counts them among His own, owned and provided for like everyone else. Respect for parents and grandparents is not cancelled by this. It is given its proper place: they were servants of the same Lord, and the honour owed to Him was never theirs to inherit or to hand on.",
            "bn": "লক্ষ করুন, কথাটা শ্রোতাদের নিজেদের বংশধারাকে কোথায় রাখে। পূর্বপুরুষদের আল্লাহর মোকাবিলায় আলাদা কর্তৃত্ব হিসেবে দাঁড় করানো হয়নি, রাখা হয়েছে তাঁরই অধীনে। সেই পূর্বপুরুষেরা তাঁকে মানুক বা না মানুক, আয়াত তাদের গণ্য করে তাঁরই বলে, আর সবার মতো তাঁর মালিকানায় ও তাঁর রিযিকে। এতে বাবা-মা, দাদা-দাদির প্রতি সম্মান বাতিল হয় না। সম্মানটা বরং ঠিক জায়গায় বসে। তারা ছিল একই রবের বান্দা। আল্লাহর যে হক, তা কখনো তাদের উত্তরাধিকারের জিনিস ছিল না, পরের প্রজন্মকে দিয়ে যাওয়ারও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Gods Without Harm or Help",
          "bn": "না উপকার, না ক্ষতি"
        },
        "p": [
          {
            "en": "Who is being spoken to? At-Tabari addresses his gloss to ayyuha an-nas, O people, and ends with a pointed conclusion: this One, whose attributes these are, is the Lord, so worship Him and not your gods, which have no power to harm or to benefit. The Muyassar closes its reading of the passage with nearly the same sentence. Both, then, hear the verse as spoken to people who worshipped gods besides Allah, and both answer them with the plainest test there is: what can those gods actually do?",
            "bn": "কথাটা কাদের উদ্দেশে? তাবারী তাঁর ব্যাখ্যা শুরু করেন আইয়ুহান নাস, হে মানুষ, বলে। শেষ করেন এক ধারালো সিদ্ধান্তে: যাঁর গুণ এই, তিনিই রব। কাজেই তাঁরই ইবাদত করো, তোমাদের সেই উপাস্যদের নয়, যাদের না আছে ক্ষতি করার ক্ষমতা, না উপকার করার। মুয়াসসারও এ অংশের ব্যাখ্যা প্রায় একই বাক্যে শেষ করে। দুজনের কাছেই তাহলে আয়াতটি তাদের উদ্দেশে, যারা আল্লাহ ছাড়া অন্য উপাস্যের পূজা করত। আর দুজনেই তাদের সামনে রাখেন সবচেয়ে সোজা পরীক্ষা: ওই উপাস্যরা আসলে কী করতে পারে?"
          },
          {
            "en": "Al-Qurtubi ends differently, with a warning: and beware of denying Muhammad, lest the punishment come down on you. None of the commentaries consulted here on this verse names the listeners further, places them in Makkah, or says they defended their worship as the way of their forefathers; they leave the phrase about forefathers as a statement of lordship. The verse speaks only of what it names. It licenses nothing against any living person or community, and its reader's work is with his own worship.",
            "bn": "কুরতুবী শেষ করেন অন্যভাবে, এক সতর্কবাণী দিয়ে: মুহাম্মাদ ﷺ-কে মিথ্যা বলা থেকে সাবধান থাকো, যেন তোমাদের উপর আযাব নেমে না আসে। এ আয়াতে সংগ্রহ করা কোনো তাফসীর শ্রোতাদের এর বেশি পরিচয় দেয় না। তাদের মক্কার লোক বলে চিহ্নিত করে না, কিংবা বলে না যে তারা পূর্বপুরুষদের রীতির দোহাই দিয়ে নিজেদের পূজা টিকিয়ে রাখত। পূর্বপুরুষদের কথাটাকে তাফসীরগুলো রুবুবিয়াতের ঘোষণা হিসেবেই রেখে দেয়। আয়াতটি যা বর্ণনা করে, ঠিক ততটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। পাঠকের কাজ নিজের ইবাদত নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Echo in al-A'raf",
          "bn": "সূরা আরাফে একই সুর"
        },
        "p": [
          {
            "en": "Ibn Kathir's whole comment on the verse, in the Arabic and in the abridged English alike, is a single comparison: this verse is like His saying in 7:158. There the Prophet ﷺ is told: Say, O mankind, indeed I am the Messenger of Allah to you all, from Him to whom belongs the dominion of the heavens and the earth. There is no deity except Him; He gives life and causes death. The words la ilaha illa huwa yuhyi wa yumit stand in both verses, letter for letter.",
            "bn": "এ আয়াতে ইবন কাসীরের পুরো মন্তব্য একটিমাত্র তুলনা, আরবি মূলেও, সংক্ষিপ্ত ইংরেজি সংস্করণেও: এ আয়াত ৭:১৫৮ আয়াতে আল্লাহর বাণীর মতো। সেখানে আল্লাহ নবী ﷺ-কে বলতে বলেছেন: হে মানুষ, আমি তোমাদের সবার কাছে আল্লাহর রাসূল, যিনি আকাশ ও পৃথিবীর রাজত্বের মালিক। তিনি ছাড়া কোনো ইলাহ নেই, তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। লা ইলাহা ইল্লা হুয়া ইউহয়ী ওয়া ইউমীত, এ কথাগুলো দুই আয়াতে হুবহু এক।"
          },
          {
            "en": "The parallel is worth reading to its end. In 7:158 the same declaration is followed at once by a call: so believe in Allah and His Messenger, the unlettered prophet, and follow him, that you may be guided. In ad-Dukhan the declaration follows the mention of the Book sent down and the messengers sent as a mercy. In both places, then, la ilaha illa huwa stands beside a messenger and a message. Ibn Kathir does not spell out the lesson of his comparison; the shared words make it.",
            "bn": "তুলনাটা শেষ পর্যন্ত পড়ার মতো। ৭:১৫৮ আয়াতে একই ঘোষণার ঠিক পরেই আসে আহ্বান: কাজেই আল্লাহ ও তাঁর রাসূল, সেই উম্মী নবীর উপর ঈমান আনো, আর তাঁর অনুসরণ করো, যাতে পথ পাও। সূরা দুখানে ঘোষণাটা আসে নাজিল হওয়া কিতাব আর রহমত হিসেবে পাঠানো রাসূলদের কথার পরে। দুই জায়গাতেই তাহলে লা ইলাহা ইল্লা হুয়া দাঁড়িয়ে আছে এক রাসূল আর এক বার্তার পাশে। তুলনার শিক্ষাটা ইবন কাসীর খুলে বলেন না। মিলে যাওয়া শব্দগুলোই তা বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Dying, a Gathering",
          "bn": "মৃত্যুর পরে সমবেত হওয়া"
        },
        "p": [
          {
            "en": "One commentator carries yuhyi wa yumit a step further. As-Sa'di, right after saying that giving life and causing death belong to Allah alone, adds: and He will gather you after your death and repay you for your deeds, if good then good, and if evil then evil. In his reading, the One who gives the first life and takes it is also the One who brings people back to account. At-Tabari, al-Qurtubi and the Muyassar do not draw that line on this verse; it is as-Sa'di's addition.",
            "bn": "একজন তাফসীরকার ইউহয়ী ওয়া ইউমীত-কে আরেক ধাপ এগিয়ে নেন। জীবন দেওয়া আর মৃত্যু ঘটানো একা আল্লাহরই এখতিয়ার, এ কথা বলার পরপরই সাদী যোগ করেন: আর মৃত্যুর পর তিনি তোমাদের একত্র করবেন, তোমাদের আমলের প্রতিদান দেবেন, ভালো হলে ভালো, মন্দ হলে মন্দ। তাঁর ব্যাখ্যায় যিনি প্রথম জীবন দেন আর তা নিয়ে নেন, তিনিই আবার মানুষকে হিসাবের জন্য ফিরিয়ে আনেন। তাবারী, কুরতুবী বা মুয়াসসার এ আয়াতে এ সূত্র টানেন না। এটুকু সাদীর সংযোজন।"
          },
          {
            "en": "His addition fits the verse's own logic without straining it. If death is something Allah does, and not merely something that happens, then it is not an ending outside His reach. The forefathers in the verse are dead, and the verse does not say He was their Lord; it names Him their Lord. Whoever owned them while they lived owns them still. The listener who hears that about his ancestors is hearing it about himself as well, a generation or two early.",
            "bn": "তাঁর সংযোজন আয়াতের নিজের যুক্তির সঙ্গে টানাহেঁচড়া ছাড়াই মিলে যায়। মৃত্যু যদি আল্লাহর করা কাজ হয়, শুধু ঘটে যাওয়া কোনো ঘটনা না হয়, তবে মৃত্যু এমন কোনো সমাপ্তি নয় যা তাঁর নাগালের বাইরে। আয়াতের পূর্বপুরুষেরা মারা গেছে, তবু আয়াত বলছে না যে তিনি তাদের রব ছিলেন। বলছে, তিনি তাদের রব। বেঁচে থাকতে যিনি তাদের মালিক ছিলেন, এখনো তিনিই মালিক। নিজের পূর্বপুরুষদের সম্পর্কে এ কথা যে শোনে, সে আসলে নিজের সম্পর্কেও তা শুনছে, শুধু এক-দুই প্রজন্ম আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Short Texts, a Whole Creed",
          "bn": "ছোট তাফসীর, পূর্ণ আকীদা"
        },
        "p": [
          {
            "en": "It is worth saying plainly what the sources do not give. Al-Baghawi only restates the verse. Ma'arif al-Qur'an, whose grouped commentary covers this passage, spends it on the blessed night and has nothing particular on 44:8. No commentary consulted here attaches a hadith to this verse or reports an occasion of revelation for it, so none is offered here. The next verse turns to people who hear all this and remain in doubt; that belongs to its own place.",
            "bn": "উৎসগুলো কী দেয় না, তা-ও সোজাসুজি বলা দরকার। বাগাভী শুধু আয়াতটি আবার উল্লেখ করেন। মাআরিফুল কুরআন এ অংশের আয়াতগুলো একসঙ্গে আলোচনা করেছে, কিন্তু পুরো আলোচনাই বরকতময় রাত নিয়ে। ৪৪:৮ নিয়ে আলাদা কিছু সেখানে নেই। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি, কিংবা এর শানে নুযূল বর্ণনা করেনি। তাই এখানে তেমন কিছু আনা হলো না। পরের আয়াত সেই লোকদের কথায় যায়, যারা এত কিছু শোনার পরও সংশয়ে থাকে। সে আলোচনা তার নিজের জায়গায়।"
          },
          {
            "en": "Yet the short glosses together hold a whole creed. None is to be worshipped but Him, because He alone creates, gives life and takes it. He owned and cared for every generation before us and owns and cares for ours. Whatever cannot harm or help has no claim on our worship, however long it has been honoured. Said with understanding, la ilaha illa huwa is not only a sentence to repeat. It is a decision about where every act of worship goes.",
            "bn": "তবু ছোট ছোট এ ব্যাখ্যাগুলো একসঙ্গে মিলে পূর্ণ এক আকীদা দাঁড় করায়। তিনি ছাড়া আর কেউ ইবাদতের যোগ্য নয়, কারণ সৃষ্টি করা, জীবন দেওয়া আর জীবন নেওয়া শুধু তাঁরই কাজ। আমাদের আগের প্রতিটি প্রজন্মের তিনি মালিক ও প্রতিপালক ছিলেন, আমাদেরও তিনিই। যা ক্ষতিও করতে পারে না, উপকারও না, যত দিন ধরেই তার সম্মান চলে আসুক, আমাদের ইবাদতে তার কোনো হক নেই। বুঝে বললে লা ইলাহা ইল্লা হুয়া শুধু মুখে আওড়ানোর বাক্য থাকে না। প্রতিটি ইবাদত কোন দিকে যাবে, সে বিষয়ে এটা এক সিদ্ধান্ত।"
          }
        ]
      }
    ]
  },
  "44:13": {
    "sections": [
      {
        "h": {
          "en": "A Plea Met With a Question",
          "bn": "আকুতির জবাবে প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse is seven Arabic words: anna lahumu adh-dhikra wa-qad ja'ahum rasulun mubin. It comes straight after a plea. The verses before it tell the Prophet ﷺ to watch for a day when the sky brings a visible smoke that covers the people, a painful torment (44:10 and 44:11), and then give the words of those it covers: Our Lord, remove the torment from us; we are believers (44:12). This verse does not answer the plea with a yes or a no. It answers with a question about where their remembering could come from now.",
            "bn": "আয়াতটি আরবিতে মাত্র সাতটি শব্দ: আন্না লাহুমুয যিকরা ওয়া কাদ জাআহুম রাসূলুম মুবীন। এটি আসে একটা আকুতির ঠিক পরে। আগের আয়াতগুলোতে নবী ﷺ-কে বলা হয়েছে সেই দিনের অপেক্ষা করতে, যেদিন আকাশ নিয়ে আসবে স্পষ্ট ধোঁয়া। সে ধোঁয়া মানুষকে ঢেকে ফেলবে, আর সেটাই যন্ত্রণাদায়ক আযাব (৪৪:১০ ও ৪৪:১১)। তারপর ধোঁয়ায় ঢাকা মানুষের মুখের কথা: হে আমাদের রব, আমাদের উপর থেকে আযাব সরিয়ে দিন, আমরা ঈমান আনছি (৪৪:১২)। এ আয়াত আকুতির জবাবে হ্যাঁ বা না কিছুই বলে না। জবাব দেয় একটা প্রশ্ন দিয়ে: এখন তাদের স্মরণ আসবে কোথা থেকে?"
          },
          {
            "en": "The question has two halves. The first, anna lahumu adh-dhikra, asks how heeding can be theirs. The second, opened by wa-qad, 'when already', gives the reason the question cuts: a clear messenger had already come to them. The next verse finishes the thought: then they turned away from him and said, tutored, a madman (44:14). Read together, the three verses set a promise made late beside a refusal made early, and leave the reader to weigh them against each other.",
            "bn": "প্রশ্নটার দুটি অংশ। প্রথম অংশ, আন্না লাহুমুয যিকরা, জানতে চায় উপদেশ নেওয়া তাদের ভাগ্যে জুটবে কীভাবে। দ্বিতীয় অংশ শুরু হয় ওয়া কাদ দিয়ে, মানে অথচ আগেই। প্রশ্নটা কেন এত তীক্ষ্ণ, সে কারণ এখানেই: স্পষ্ট এক রসূল তো তাদের কাছে আগেই এসেছিলেন। পরের আয়াত কথাটা শেষ করে: তারপর তারা তাঁর দিক থেকে মুখ ফিরিয়ে নিল আর বলল, শেখানো লোক, পাগল (৪৪:১৪)। তিনটি আয়াত একসঙ্গে পড়লে দেখা যায়, দেরিতে দেওয়া এক ওয়াদা পাশাপাশি রাখা আছে আগেভাগে করা এক প্রত্যাখ্যানের সঙ্গে। কোনটার ওজন কত, তা মাপার ভার পাঠকের।"
          }
        ]
      },
      {
        "h": {
          "en": "From Where Would Heeding Come",
          "bn": "উপদেশ আসবে কোন পথে"
        },
        "p": [
          {
            "en": "At-Tabari glosses anna as 'from what direction': from what direction can these polytheists have remembrance after the affliction has come down on them, when they had turned their backs on Our messenger when he came to them? He then cites Ibn 'Abbas giving the word as kayfa lahum, 'how can they have it', and Mujahid adding the time: after this affliction has fallen. At-Tabari says the people of interpretation read the phrase as he does.",
            "bn": "তাবারী আন্না শব্দের ব্যাখ্যা দেন 'কোন দিক থেকে' বলে। অর্থাৎ বিপদ মাথার উপর নেমে আসার পর এই মুশরিকরা স্মরণের পথ পাবে কোন দিক থেকে? আমার রসূল যখন তাদের কাছে এসেছিলেন, তখন তো তারা তাঁর দিকে পিঠ ফিরিয়ে চলে গিয়েছিল। এরপর তিনি ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: কাইফা লাহুম, তারা তা পাবে কীভাবে। মুজাহিদ জুড়ে দেন সময়টা: এই বিপদ ঘটে যাওয়ার পরে। তাবারী জানান, তাফসীরের আলেমরা আয়াতটি তাঁর মতোই বুঝেছেন।"
          },
          {
            "en": "Al-Baghawi joins the two glosses: from where will they have remembering and taking admonition, meaning, how will they remember and be admonished? Al-Qurtubi gives the same pair, tadhakkur and itti'az, and places it at the arrival of the torment. He adds a note on the word itself, citing al-Bukhari, that adh-dhikra and adh-dhikr are one. So the dhikra here is not a new book or a fresh sermon. It is the act of remembering what one already knew and being moved by it.",
            "bn": "বাগাভী দুটি ব্যাখ্যাকে এক করে দেন: কোথা থেকে তারা স্মরণ করবে আর উপদেশ নেবে? মানে, তারা কীভাবে স্মরণ করবে, কীভাবে নসিহত গ্রহণ করবে? কুরতুবীও একই জোড়া শব্দ ব্যবহার করেন, তাযাক্কুর আর ইত্তিআয, আর সময়টা ধরেন আযাব নেমে আসার মুহূর্তে। শব্দটি নিয়ে তিনি বুখারীর বরাতে একটি টীকাও দেন: যিকরা আর যিকর একই জিনিস। তাই এখানে যিকরা মানে নতুন কোনো কিতাব বা নতুন কোনো ওয়াজ নয়। আগে থেকেই জানা কথা মনে পড়া, আর সে কথায় নড়ে ওঠা, এটাই যিকরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Clear in Message, Clear in Truth",
          "bn": "বার্তায় স্পষ্ট, সত্যে স্পষ্ট"
        },
        "p": [
          {
            "en": "The second half names what they had already been given: rasulun mubin. Ibn Kathir paraphrases the verse as how can they remember, when We sent them a messenger clear in his message and his warning. Al-Qurtubi reads mubin as one who makes the truth plain to them. Al-Baghawi reads it as one whose truthfulness is evident, and names him: Muhammad ﷺ. The Muyassar names him too. The readings lean different ways, one on what the messenger makes clear and one on how clearly true he is, but they do not contradict.",
            "bn": "দ্বিতীয় অংশে বলা হয়েছে তারা আগেই কী পেয়েছিল: রাসূলুম মুবীন। ইবন কাসীর আয়াতটির মর্ম বলেন এভাবে: তারা স্মরণ করবে কীভাবে, আমি তো তাদের কাছে এমন রসূল পাঠিয়েছিলাম, যাঁর রিসালাত আর সতর্কবাণী ছিল সুস্পষ্ট। কুরতুবীর কাছে মুবীন মানে যিনি তাদের সামনে সত্যকে খুলে দেখান। বাগাভীর কাছে মুবীন মানে যাঁর সত্যবাদিতা প্রকাশ্য, আর তিনি নামও বলে দেন: মুহাম্মদ ﷺ। মুয়াসসারও তাঁর নাম উল্লেখ করে। একজনের ঝোঁক রসূল কী স্পষ্ট করেন তার দিকে, আরেকজনের ঝোঁক তিনি নিজে কতটা স্পষ্টভাবে সত্য তার দিকে। তবে দুই পাঠে কোনো বিরোধ নেই।"
          },
          {
            "en": "The word mubin is threaded through this passage. The surah swears by the Book that is mubin (44:2). The smoke of 44:10 is mubin, plain to see. The messenger of 44:13 is mubin. Something plainly visible in the sky frightens them into a promise; someone plainly truthful standing among them had not moved them at all. The verse lets the repeated word make its own point: the clearness they ignored in a man is the clearness that later overwhelms them in the sky.",
            "bn": "এ অংশ জুড়ে মুবীন শব্দটা বারবার ফিরে আসে। সূরার শুরুতেই শপথ মুবীন কিতাবের নামে (৪৪:২)। ৪৪:১০-এর ধোঁয়াও মুবীন, চোখে স্পষ্ট দেখা যায়। আর ৪৪:১৩-এর রসূলও মুবীন। আকাশে স্পষ্ট দেখা যায় এমন কিছু তাদের ভয় দেখিয়ে ওয়াদা আদায় করে নেয়। অথচ তাদেরই মাঝে দাঁড়ানো স্পষ্ট সত্যবাদী মানুষটি তাদের একটুও নাড়াতে পারেননি। আয়াত এ শব্দের পুনরাবৃত্তিকেই কথা বলতে দেয়। যে স্পষ্টতাকে তারা একজন মানুষের মধ্যে উপেক্ষা করেছিল, পরে সেই স্পষ্টতাই আকাশ থেকে তাদের ঘিরে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembering Under the Blow",
          "bn": "আঘাতের নিচে স্মরণ"
        },
        "p": [
          {
            "en": "When is the question asked? At-Tabari and Mujahid tie it to the moment after the affliction has fallen. Al-Qurtubi says at the arrival of the torment, and the Muyassar says after the torment has come down on them. They agree on the logic. The remembering they now offer comes under the blow, and the remembering that was asked of them was meant to come before it, when a clear messenger stood in front of them and the choice was still free.",
            "bn": "প্রশ্নটা কখন করা হচ্ছে? তাবারী ও মুজাহিদ একে বেঁধে দেন বিপদ নেমে আসার পরের মুহূর্তের সঙ্গে। কুরতুবী বলেন আযাব এসে পড়ার সময়, আর মুয়াসসার বলে তাদের উপর আযাব নেমে আসার পর। যুক্তির জায়গায় সবাই একমত। এখন তারা যে স্মরণের কথা দিচ্ছে, তা আসছে আঘাত খেয়ে। অথচ তাদের কাছে যে স্মরণ চাওয়া হয়েছিল, তার সময় ছিল আঘাতের আগে। তখন স্পষ্ট এক রসূল তাদের সামনে দাঁড়িয়ে ছিলেন, আর বেছে নেওয়ার স্বাধীনতাও ছিল পুরোপুরি।"
          },
          {
            "en": "As-Sa'di places the words at a later hour. In his first reading, this is said to the disbelievers on the Day of Resurrection, when they ask to be sent back to the world, and the answer is that the time for returning has gone. Ibn Kathir sets the verse beside two others that use the same anna: on that Day man will remember, but how will the remembrance avail him (89:23), and they will say, we believe in it, but how can they reach it from a place far off (34:52).",
            "bn": "সা'দী কথাটার সময় ধরেন আরও পরে। তাঁর প্রথম ব্যাখ্যায় কিয়ামতের দিন কাফিররা যখন দুনিয়ায় ফেরত যেতে চাইবে, তখন তাদের এ কথা বলা হবে। জবাব হবে: ফেরার সময় পেরিয়ে গেছে। ইবন কাসীর আয়াতটিকে এমন আরও দুটি আয়াতের পাশে রাখেন, যেখানে একই আন্না এসেছে। সেদিন মানুষ স্মরণ করবে, কিন্তু সে স্মরণ তার কী কাজে আসবে (৮৯:২৩)। আর তারা বলবে, আমরা এতে ঈমান আনলাম, কিন্তু এত দূর থেকে তারা তা নাগাল পাবে কীভাবে (৩৪:৫২)।"
          }
        ]
      },
      {
        "h": {
          "en": "Haze Over a Starving Makkah",
          "bn": "ক্ষুধার্ত মক্কার আকাশে ধোঁয়াশা"
        },
        "p": [
          {
            "en": "Which smoke is meant? The answer decides whether the plea of 44:12 and the question of 44:13 belong to Makkah in the Prophet's lifetime or to the end of time, and the Companions differed. No sound hadith in the sources fetched attaches to 44:13 itself; the reports below concern the smoke of 44:10. Ibn Kathir opens with Masruq's account. In the mosque at Kufa a man said the smoke would come on the Day of Resurrection. Told of it, Ibn Mas'ud sat up, recited 38:86, and said that part of knowledge is to say 'Allah knows best' about what a person does not know.",
            "bn": "কোন ধোঁয়ার কথা বলা হচ্ছে? এর উত্তরেই ঠিক হয়, ৪৪:১২-এর আকুতি আর ৪৪:১৩-এর প্রশ্ন নবীজির জীবদ্দশার মক্কার ঘটনা, নাকি শেষ জমানার। এ নিয়ে সাহাবিরা ভিন্নমত পোষণ করেছেন। যেসব সূত্র দেখা হয়েছে, তাতে সরাসরি ৪৪:১৩-এর সঙ্গে যুক্ত কোনো সহীহ হাদীস নেই। নিচের বর্ণনাগুলো ৪৪:১০-এর ধোঁয়া নিয়ে। ইবন কাসীর শুরু করেন মাসরূকের বিবরণ দিয়ে। কুফার মসজিদে এক লোক বলছিল, এ ধোঁয়া আসবে কিয়ামতের দিন। খবর শুনে ইবন মাসউদ (রাঃ) উঠে বসলেন, ৩৮:৮৬ পড়লেন, তারপর বললেন: যা জানা নেই, সে ব্যাপারে 'আল্লাহই ভালো জানেন' বলাও ইলমের অংশ।"
          },
          {
            "en": "Sahih al-Bukhari (4821) gives his explanation, through Masruq, in these words. 'Abdullah said: This was only because when Quraysh resisted the Prophet ﷺ, he prayed against them for years like the years of Yusuf (AS). Drought and hardship struck them until they ate bones, and a man would look at the sky and see between himself and it something like smoke, from exhaustion. So Allah the Exalted revealed: Then watch for the Day when the sky brings a visible smoke, covering the people; this is a painful torment.",
            "bn": "সহীহ বুখারীতে (৪৮২১) মাসরূকের সূত্রে তাঁর ব্যাখ্যা এসেছে এই ভাষায়। আবদুল্লাহ বলেন: ব্যাপারটা ছিল এই। কুরাইশ যখন নবী ﷺ-এর অবাধ্য হয়ে জেদ ধরল, তিনি তাদের বিরুদ্ধে দুআ করলেন, যেন তাদের উপর ইউসুফ (আঃ)-এর যুগের মতো কয়েক বছর নেমে আসে। দুর্ভিক্ষ আর কষ্ট তাদের এমনভাবে পেয়ে বসল যে তারা হাড় পর্যন্ত খেতে লাগল। কেউ আকাশের দিকে তাকালে ক্লান্তির চোটে নিজের আর আকাশের মাঝে ধোঁয়ার মতো কিছু দেখত। তখন আল্লাহ তাআলা নাযিল করলেন: অতএব অপেক্ষা করো সেদিনের, যেদিন আকাশ নিয়ে আসবে স্পষ্ট ধোঁয়া, যা মানুষকে ঢেকে ফেলবে। এ এক যন্ত্রণাদায়ক আযাব।"
          },
          {
            "en": "He said: Then the Messenger of Allah ﷺ was approached and told: Messenger of Allah, ask Allah for rain for Mudar, for they are perishing. He said: For Mudar? You are surely bold. He asked for rain, and they were given rain. Then was revealed: indeed you will return. When ease reached them, they went back to their former state, and Allah revealed: The Day We strike with the greatest strike; indeed We take retribution. He said: meaning the day of Badr. The report stands in al-Bukhari's Sahih.",
            "bn": "তিনি বলেন: তারপর রাসূলুল্লাহ ﷺ-এর কাছে এসে বলা হলো, হে আল্লাহর রসূল, মুদার গোত্রের জন্য আল্লাহর কাছে বৃষ্টি চেয়ে দুআ করুন, তারা তো ধ্বংস হয়ে যাচ্ছে। তিনি বললেন: মুদারের জন্য? তোমার তো বড় সাহস! তারপর তিনি বৃষ্টির দুআ করলেন, আর তারা বৃষ্টি পেল। তখন নাযিল হলো: তোমরা তো আবার ফিরে যাবে। স্বস্তি ফিরে পেতেই তারা আগের অবস্থায় ফিরে গেল। তখন আল্লাহ নাযিল করলেন: যেদিন আমি প্রচণ্ডতম আঘাতে পাকড়াও করব, সেদিন আমি অবশ্যই প্রতিশোধ নেব। তিনি বলেন: অর্থাৎ বদরের দিন। বর্ণনাটি বুখারীর সহীহ গ্রন্থে আছে।"
          },
          {
            "en": "Ibn Kathir names Mujahid, Abu al-'Aliyah, Ibrahim an-Nakha'i, ad-Dahhak and 'Atiyyah al-'Awfi as agreeing with Ibn Mas'ud that the smoke has already happened, and says this was also the view of Ibn Jarir, that is, at-Tabari. As-Sa'di records the reading as well. On it, the smoke was smoke only to their eyes, a haze born of hunger, and the famine lasted until they begged the Prophet ﷺ to pray for its lifting, and he did. As-Sa'di himself says this reading is plainly open to objection.",
            "bn": "ইবন কাসীর জানান, মুজাহিদ, আবুল আলিয়া, ইবরাহীম নাখঈ, দাহহাক ও আতিয়্যা আল-আওফী ইবন মাসউদ (রাঃ)-এর সঙ্গে একমত যে ধোঁয়ার ঘটনা ঘটে গেছে। তিনি এও বলেন, ইবন জারীর তথা তাবারীর মতও এটাই। সা'দীও এ ব্যাখ্যাটি উল্লেখ করেছেন। এ ব্যাখ্যা অনুযায়ী ধোঁয়াটা ছিল কেবল তাদের চোখের দেখা, ক্ষুধা থেকে জন্মানো এক ধোঁয়াশা। দুর্ভিক্ষ চলতেই থাকল, শেষে তারা নবী ﷺ-এর কাছে অনুনয় করল যেন তিনি এটা তুলে নেওয়ার দুআ করেন, আর তিনি দুআ করলেন। তবে সা'দী নিজে বলেন, এ ব্যাখ্যায় স্পষ্ট আপত্তির জায়গা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign Still Awaited",
          "bn": "এখনো অপেক্ষমাণ এক নিদর্শন"
        },
        "p": [
          {
            "en": "The other reading holds that the smoke is a sign still to come, close to the Hour. Ma'arif al-Qur'an, which counts three opinions among the Companions and their students, lists this view first and gives as its holders 'Ali, Ibn 'Abbas, Ibn 'Umar, Abu Hurairah, Zaid ibn 'Ali, al-Hasan al-Basri and Ibn Abi Mulaikah, among others. It sets Ibn Mas'ud's reading second, and calls these two the most widely held; a third, from 'Abd ar-Rahman al-A'raj, takes the smoke as dust raised over Makkah on the day of its conquest.",
            "bn": "অন্য ব্যাখ্যা বলে, ধোঁয়া এমন এক নিদর্শন যা এখনো আসেনি, আসবে কিয়ামতের কাছাকাছি সময়ে। মাআরিফুল কুরআন সাহাবি ও তাঁদের শিষ্যদের মধ্যে তিনটি মত গণনা করে। এ মতটিকে রাখে প্রথমে, আর এর ধারক হিসেবে নাম দেয় আলী, ইবন আব্বাস, ইবন উমর, আবু হুরায়রা (রাঃ), যায়দ ইবন আলী, হাসান বসরী ও ইবন আবী মুলাইকা প্রমুখের। ইবন মাসউদ (রাঃ)-এর ব্যাখ্যা আসে দ্বিতীয়তে, আর এ দুটিকেই সে সবচেয়ে প্রচলিত বলে। তৃতীয় মতটি আবদুর রহমান আল-আরাজের। তাঁর মতে ধোঁয়া মানে মক্কা বিজয়ের দিন মক্কার আকাশে ওড়া ধুলা।"
          },
          {
            "en": "Sahih Muslim (2901) carries the report of Hudhayfah ibn Asid al-Ghifari: The Prophet ﷺ looked in on us while we were discussing, and said: What are you discussing? They said: We are speaking of the Hour. He said: It will not come until you see ten signs before it. And he mentioned the smoke, the Dajjal, the beast, the rising of the sun from its west, the descent of 'Isa son of Maryam (AS), Gog and Magog, and three landslides, in the east, in the west and in the Arabian Peninsula, and last of all a fire that comes out of Yemen and drives people to their gathering place.",
            "bn": "সহীহ মুসলিমে (২৯০১) হুযাইফা ইবন আসীদ আল-গিফারী (রাঃ)-এর বর্ণনা আছে: আমরা আলোচনা করছিলাম, এমন সময় নবী ﷺ আমাদের দিকে উঁকি দিয়ে বললেন, তোমরা কী নিয়ে আলোচনা করছ? তাঁরা বললেন, আমরা কিয়ামতের কথা বলছি। তিনি বললেন, তার আগে দশটি নিদর্শন না দেখা পর্যন্ত কিয়ামত হবে না। তারপর তিনি উল্লেখ করলেন ধোঁয়া, দাজ্জাল, দাব্বা, পশ্চিম দিক থেকে সূর্যোদয়, ঈসা ইবন মারইয়াম (আঃ)-এর অবতরণ, ইয়াজুজ-মাজুজ, আর তিনটি ভূমিধস: একটি পূর্বে, একটি পশ্চিমে, একটি আরব উপদ্বীপে। সবশেষে ইয়েমেন থেকে এক আগুন বের হবে, যা মানুষকে তাড়িয়ে নিয়ে যাবে তাদের সমবেত হওয়ার জায়গায়।"
          },
          {
            "en": "Ibn Kathir leans this way. He says many reports, from the Prophet ﷺ and from Companions, point to the smoke as one of the awaited signs, and that this is the apparent sense of the Qur'an: yaghsha an-nas, covering the people, would not be said of an illusion that touched only Makkah's idolaters. Ma'arif al-Qur'an notes the cost on this side too, since 44:15 speaks of the torment being lifted, and Ibn Kathir reads that as a conditional: if We lifted it and sent you back, you would return (23:75, 6:28).",
            "bn": "ইবন কাসীরের ঝোঁক এ মতের দিকে। তিনি বলেন, নবী ﷺ ও সাহাবিদের থেকে আসা বহু বর্ণনা ধোঁয়াকে কিয়ামতের অপেক্ষমাণ নিদর্শনগুলোর একটি হিসেবে দেখায়। কুরআনের বাহ্যিক অর্থও তাই। ইয়াগশান নাস, অর্থাৎ মানুষকে ঢেকে ফেলবে, এ কথা এমন এক দৃষ্টিভ্রম সম্পর্কে বলা হতো না, যা কেবল মক্কার মুশরিকদের ছুঁয়েছিল। মাআরিফুল কুরআন এ মতের দুর্বল দিকটাও দেখায়। ৪৪:১৫ আয়াতে আযাব সরিয়ে নেওয়ার কথা আছে, অথচ কিয়ামতের দিন কাফিরদের আযাব সরানো হবে না। ইবন কাসীর একে শর্তের বাক্য হিসেবে পড়েন: আযাব সরিয়ে তোমাদের ফেরত পাঠালেও তোমরা আবার আগের পথে ফিরতে (২৩:৭৫, ৬:২৮)।"
          },
          {
            "en": "As-Sa'di, as seen above, prefers neither of these two: he lists both and takes the words as spoken on the Day of Resurrection, allowing that all of 44:10 to 44:14 may describe that Day. This article does not settle the question. Both sides go back to Companions and cite a Sahih report, though Muslim's names the smoke without quoting the verse. What holds on every reading is the question of 44:13 itself: heeding offered under the blow, by people who had turned from a clear messenger when heeding was free.",
            "bn": "সা'দী, আগেই যেমন দেখা গেছে, এ দুটির কোনোটিকেই প্রাধান্য দেন না। দুটোই উল্লেখ করে তিনি কথাগুলোকে কিয়ামতের দিনের কথা হিসেবে ধরেন, আর বলেন ৪৪:১০ থেকে ৪৪:১৪ পর্যন্ত পুরোটাই সেদিনের বর্ণনা হতে পারে। এ লেখা প্রশ্নটির মীমাংসা করছে না। দুই মতই সাহাবিদের পর্যন্ত পৌঁছায়, আর দুই পক্ষই সহীহ বর্ণনা পেশ করে। তবে মুসলিমের বর্ণনায় ধোঁয়ার উল্লেখ আছে, আয়াতটির উদ্ধৃতি নেই। তবে যে ব্যাখ্যাই ধরা হোক, ৪৪:১৩-এর প্রশ্ন একই থাকে। উপদেশ নেওয়ার কথা আসছে আঘাত খাওয়ার পর, এমন লোকদের মুখ থেকে, যারা উপদেশ নেওয়ার সুযোগ খোলা থাকার সময় স্পষ্ট এক রসূল থেকে মুখ ফিরিয়ে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Labels for One Man",
          "bn": "এক মানুষের গায়ে দুই তকমা"
        },
        "p": [
          {
            "en": "The next verse, 44:14, shows how the clear messenger was received, and at-Tabari folds it into his explanation of 44:13: they turned their backs on him, took no reminder from what was recited to them of Our Book, took no admonition from Our proofs, and said he is only a madman who has been taught this speech. The Muyassar spells out the charge of being taught: a human taught him, or the soothsayers, or the devils; he is mad and no messenger. Ibn Kathir says they turned away from him, opposed him and rejected him.",
            "bn": "স্পষ্ট রসূলকে তারা কীভাবে গ্রহণ করেছিল, তা দেখায় পরের আয়াত, ৪৪:১৪। তাবারী ৪৪:১৩-এর ব্যাখ্যাতেই কথাটা জুড়ে দেন। তারা তাঁর দিকে পিঠ ফিরিয়েছিল। আমার কিতাবের যা তাদের পড়ে শোনানো হতো, তা থেকে স্মরণ নেয়নি। আমার দলিল-প্রমাণ থেকে নসিহত নেয়নি। উল্টো বলেছে, সে তো এক পাগল, এ কথাগুলো তাকে কেউ শিখিয়ে দিয়েছে। শিখিয়ে দেওয়ার অভিযোগটা মুয়াসসার খুলে বলে: কোনো মানুষ, কিংবা গণকেরা, কিংবা শয়তানেরা তাকে শিখিয়েছে। সে পাগল, রসূল নয়। ইবন কাসীর বলেন, তারা তাঁর থেকে মুখ ফিরিয়ে নিল, তাঁর বিরোধিতা করল, তাঁকে প্রত্যাখ্যান করল।"
          },
          {
            "en": "These verses describe what the Quraysh who refused the Prophet ﷺ did and said, as the commentators read them, and what the text says befell or will befall those it addresses. They license nothing against any living person or community, and they give no one the right to call another 'taught' or 'mad', or to read a famine or a disaster as proof that a people has been rejected by Allah. What the verses hold up is a pattern, and the reader is the one asked to check it in himself.",
            "bn": "এই আয়াতগুলো বর্ণনা করে, নবী ﷺ-কে প্রত্যাখ্যানকারী কুরাইশরা কী করেছিল আর কী বলেছিল, তাফসীরকারেরা যেভাবে বুঝেছেন। আর যাদের উদ্দেশে কথা, তাদের উপর কী নেমেছিল বা নামবে, সে কথাও আয়াতে আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কাউকে 'শেখানো লোক' বা 'পাগল' বলার অধিকারও কাউকে দেয় না। কোনো দুর্ভিক্ষ বা দুর্যোগ দেখে কোনো জাতিকে আল্লাহর প্রত্যাখ্যাত বলে রায় দেওয়ার অনুমতিও দেয় না। আয়াত একটা ধরন সামনে তুলে ধরে, আর তা যাচাই করার দায় পাঠকের নিজের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Heeding Before Any Smoke",
          "bn": "ধোঁয়া আসার আগেই নসিহত"
        },
        "p": [
          {
            "en": "The plea of 44:12 sounds like faith: we are believers. The verse does not mock it, but it asks what such a sentence is worth when spoken under a darkened sky. The commentators' pair of words helps here. Heard plainly, tadhakkur is remembering what a person already knew, and itti'az is letting it change what that person does. Under the blow the first can be forced out of anyone. The second is what the clear messenger asked for, while the choice was still open.",
            "bn": "৪৪:১২-এর আকুতি শুনতে ঈমানের মতোই: আমরা মুমিন। আয়াত একে ঠাট্টা করে না, কিন্তু প্রশ্ন তোলে: অন্ধকার আকাশের নিচে দাঁড়িয়ে বলা এমন কথার দাম কত? তাফসীরকারদের ব্যবহার করা জোড়া শব্দ এখানে কাজে আসে। এভাবে শোনা যায়: তাযাক্কুর মানে আগে থেকে জানা কথা মনে পড়া, আর ইত্তিআয মানে সে কথাকে নিজের কাজ বদলাতে দেওয়া। আঘাতের নিচে প্রথমটা যে কারও মুখ থেকে বের করে আনা যায়। দ্বিতীয়টাই চেয়েছিলেন স্পষ্ট রসূল, যখন বেছে নেওয়ার পথ খোলা ছিল।"
          },
          {
            "en": "For a reader today the clear messenger has already come, and his message sits in a Book the surah calls mubin. So the question of 44:13 can be asked now, quietly, before anything forces it: where will my remembering come from, and when? A promise made only in a crisis tends to fade once the crisis lifts, as 44:15 foretells of those it addresses. Heeding that begins while life is easy has nothing to take back when ease returns.",
            "bn": "আজকের পাঠকের কাছেও স্পষ্ট রসূল এসে গেছেন, আর তাঁর বার্তা আছে এমন এক কিতাবে, যাকে এ সূরা মুবীন বলেছে। তাই ৪৪:১৩-এর প্রশ্নটা এখনই করা যায়, নিঃশব্দে, কোনো কিছু বাধ্য করার আগেই: আমার স্মরণ আসবে কোথা থেকে, আর কখন? শুধু সংকটে পড়ে দেওয়া ওয়াদা সংকট কাটলেই ফিকে হয়ে যেতে চায়। যাদের উদ্দেশে ৪৪:১৫ কথা বলেছে, তাদের বেলায় আয়াতটি সে কথাই আগে থেকে জানিয়ে দিয়েছে। স্বস্তির দিনে যে উপদেশ নেওয়া শুরু হয়, স্বস্তি ফিরে এলে তার কিছুই ফেরত নেওয়ার থাকে না।"
          }
        ]
      }
    ]
  },
  "44:17-18": {
    "sections": [
      {
        "h": {
          "en": "Before the Prophet's Own People",
          "bn": "নবীর জাতির আগে আরেক জাতি"
        },
        "p": [
          {
            "en": "The surah has just faced the people who denied the Prophet ﷺ. A clear messenger came to them, they turned away and called him a tutored madman (44:13 and 44:14), and a greater seizure was promised (44:16). Then the address turns to the past: wa-laqad fatanna qablahum qawma Fir'awn, and We had tried, before them, the people of Pharaoh. As-Sa'di explains the turn. Having mentioned those who denied Muhammad ﷺ, Allah mentions that they had predecessors among the deniers, and tells their story with Musa (AS) so that the deniers of his own day might be deterred.",
            "bn": "এর আগের আয়াতগুলোতে সূরাটি কথা বলেছে নবী ﷺ-কে অস্বীকারকারীদের নিয়ে। তাদের কাছে সুস্পষ্ট রাসূল এসেছিলেন, তারা মুখ ফিরিয়ে নিয়েছে, আর বলেছে: শেখানো বুলি আওড়ানো এক পাগল (৪৪:১৩ ও ৪৪:১৪)। তাদের জানিয়ে দেওয়া হয়েছে, সামনে আরও কঠিন পাকড়াও আসছে (৪৪:১৬)। এরপর কথা ঘুরে যায় অতীতের দিকে: ওয়া লাকাদ ফাতান্না কাবলাহুম কাওমা ফেরাউন, তাদের আগে আমি ফেরাউনের জাতিকে পরীক্ষা করেছিলাম। এই মোড় ঘোরার কারণ সা'দী বলে দেন। মুহাম্মাদ ﷺ-কে যারা অস্বীকার করছিল, তাদের কথা বলার পর আল্লাহ জানাচ্ছেন যে অস্বীকারকারীদের মধ্যে তাদের পূর্বসূরিও আছে। তারপর মূসা (আঃ)-এর সঙ্গে সেই পূর্বসূরিদের কাহিনি শোনান, যাতে তখনকার অস্বীকারকারীরা সাবধান হয়ে ফিরে আসে।"
          },
          {
            "en": "At-Tabari reads qablahum as before the idolaters of the Prophet's own people, and puts the gloss in Allah's address to him: We tried, O Muhammad, before them. Al-Muyassar draws the conclusion in plain words. A noble messenger came to Pharaoh's people, they called him a liar and were destroyed, and so We do with your enemies, O Messenger, if they do not believe. The story runs on through 44:24, to the night departure and the sea left still; these two verses are its opening exchange.",
            "bn": "তাবারীর মতে কাবলাহুম মানে নবী ﷺ-এর নিজের জাতির মুশরিকদের আগে। ব্যাখ্যাটা তিনি সাজান নবীকে সম্বোধন করে: হে মুহাম্মাদ, তাদের আগে আমি পরীক্ষা করেছিলাম। মুয়াসসার উপসংহারটা সোজা কথায় টেনে দেয়। ফেরাউনের জাতির কাছে এক সম্মানিত রাসূল এসেছিলেন। তারা তাঁকে মিথ্যাবাদী বলল, ফলে ধ্বংস হলো। হে রাসূল, আপনার শত্রুরা ঈমান না আনলে তাদের সঙ্গেও আমি এমনই করি। কাহিনিটি ৪৪:২৪ পর্যন্ত গড়িয়ে যায়, রাতের যাত্রা আর স্থির রেখে আসা সাগর পর্যন্ত। এই দুটি আয়াতে আছে তার শুরুর কথাবার্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Tried Through a Messenger",
          "bn": "রাসূলের মাধ্যমেই পরীক্ষা"
        },
        "p": [
          {
            "en": "Fatanna comes from fitna, a trial. At-Tabari glosses it with two verbs, ikhtabarna wa-btalayna, We tested and We tried; al-Muyassar uses the same pair, Ibn Kathir the first verb alone, and al-Baghawi gives balawna, We put them to the proof. Al-Qurtubi is more specific: the meaning of this trial is the command to obey. Allah dealt with them as one who tests deals, by sending Musa (AS) to them; they denied him and were destroyed. As-Sa'di says the same in his own words: We tried and tested them by sending Our messenger, Musa son of 'Imran.",
            "bn": "ফাতান্না এসেছে ফিতনা থেকে, যার অর্থ পরীক্ষা। তাবারী শব্দটির ব্যাখ্যা করেন দুটি ক্রিয়া দিয়ে: ইখতাবারনা ওয়াবতালাইনা, আমি যাচাই করেছি ও পরীক্ষায় ফেলেছি। মুয়াসসারও এই জোড়াই ব্যবহার করে, ইবন কাসীর শুধু প্রথমটি, আর বাগাভী লেখেন বালাওনা, আমি তাদের পরখ করেছি। কুরতুবী আরও নির্দিষ্ট করে বলেন, এই পরীক্ষার মর্ম হলো আনুগত্যের আদেশ। মূসা (আঃ)-কে পাঠিয়ে আল্লাহ তাদের সঙ্গে পরীক্ষকের মতো আচরণ করলেন। তারা তাঁকে অস্বীকার করল, ফলে ধ্বংস হলো। সা'দী নিজের ভাষায় একই কথা বলেন: আমার রাসূল মূসা ইবন ইমরানকে পাঠিয়ে আমি তাদের পরীক্ষা ও যাচাই করেছি।"
          },
          {
            "en": "Al-Qurtubi then reports a second reading, introduced with it is said and given no named holder: fatannahum means We punished them by drowning. On that reading, he notes, the sentence puts its parts out of order, and the sense is: a noble messenger came to Pharaoh's people, and We drowned them. The punishment came after the messenger's coming, and the conjunction wa, and, does not by itself fix a sequence. He gives it as a reported view after his main gloss, and the two can be kept side by side.",
            "bn": "এরপর কুরতুবী আরেকটি ব্যাখ্যা উল্লেখ করেন 'বলা হয়' কথাটি দিয়ে, কারও নাম না নিয়ে। সে ব্যাখ্যায় ফাতান্নাহুম মানে আমি তাদের ডুবিয়ে শাস্তি দিয়েছি। তিনি বলেন, এভাবে পড়লে বাক্যের অংশগুলো আগে-পরে বসেছে। অর্থ দাঁড়ায়: ফেরাউনের জাতির কাছে সম্মানিত রাসূল এলেন, তারপর আমি তাদের ডুবিয়ে দিলাম। কারণ শাস্তি এসেছিল রাসূলের আগমনের পরে, আর 'ওয়া' অব্যয়টি নিজে থেকে ক্রম ঠিক করে দেয় না। মূল ব্যাখ্যার পরে তিনি এটিকে একটি বর্ণিত মত হিসেবে এনেছেন। দুটিকে তাই পাশাপাশি রাখা যায়।"
          },
          {
            "en": "On the first reading, which most of these commentators give, the test was not a famine or a flood. It was a man with a message, and the question was what Pharaoh's people would do with what had reached them. That is worth sitting with. The verse does not call the drowning the trial, on that reading; it calls the messenger's coming the trial, and the drowning is what followed a failed answer.",
            "bn": "প্রথম ব্যাখ্যায়, যা এই তাফসীরকারদের বেশির ভাগ দেন, পরীক্ষাটা দুর্ভিক্ষ বা বন্যা ছিল না। পরীক্ষা ছিলেন একজন মানুষ, যাঁর হাতে ছিল এক বার্তা। প্রশ্ন ছিল, ফেরাউনের জাতি তাদের কাছে পৌঁছানো জিনিসটা নিয়ে কী করে। কথাটা একটু থেমে ভাবার মতো। এই ব্যাখ্যায় আয়াতটি ডুবে মরাকে পরীক্ষা বলছে না। পরীক্ষা বলছে রাসূলের আগমনকে। ডুবে মরা এসেছে ভুল জবাবের পরিণামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Noble in Whose Sight",
          "bn": "কার চোখে সম্মানিত"
        },
        "p": [
          {
            "en": "Wa-ja'ahum rasulun karim: and there came to them a noble messenger. At-Tabari, through Qatada, identifies him as Musa (AS), and Ibn Kathir adds that he is the prophet to whom Allah spoke. At-Tabari then gives two reasons for the word karim. Allah described him with nobility because he was honoured before Him, his station high in His sight. And it may be, at-Tabari adds, that he was so described because he was of high standing and good lineage among his own people. He offers the second as a possibility, not as the first meaning.",
            "bn": "ওয়া জাআহুম রাসূলুন কারীম: আর তাদের কাছে এসেছিলেন এক সম্মানিত রাসূল। কাতাদার সূত্রে তাবারী জানান, তিনি মূসা (আঃ)। ইবন কাসীর যোগ করেন, তিনিই সেই নবী যাঁর সঙ্গে আল্লাহ কথা বলেছেন। কারীম শব্দের দুটি কারণ তাবারী উল্লেখ করেন। প্রথমত, আল্লাহর কাছে তিনি সম্মানিত ছিলেন, তাঁর কাছে তাঁর মর্যাদা ছিল উঁচু। দ্বিতীয়ত, এমনও হতে পারে যে নিজ জাতির মধ্যে তিনি ছিলেন উঁচু বংশের, মর্যাদাবান মানুষ। দ্বিতীয়টিকে তিনি সম্ভাবনা হিসেবে আনেন, মূল অর্থ হিসেবে নয়।"
          },
          {
            "en": "Al-Qurtubi lists three senses. Noble among his people; or, as it is said, noble in character, in overlooking and forgiving; and al-Farra' says noble with his Lord, since He singled him out for prophethood and for hearing His speech. Al-Baghawi keeps to one: noble with Allah. As-Sa'di reads the word as character: the noble messenger who had generosity and fine qualities that no one else had. None of them presents these as rival readings. They are layers of one word, and a reader can hold all of them at once.",
            "bn": "কুরতুবী তিনটি অর্থ উল্লেখ করেন। নিজ জাতির মধ্যে সম্মানিত। অথবা, যেমন বলা হয়, চরিত্রে মহৎ, ক্ষমা ও মার্জনায় উদার। আর ফাররা বলেন, তিনি রবের কাছে সম্মানিত, কারণ রব তাঁকে নবুওয়াত আর নিজের কথা শোনার জন্য বেছে নিয়েছিলেন। বাগাভী একটিতেই থামেন: আল্লাহর কাছে সম্মানিত। সা'দী শব্দটি পড়েন চরিত্রের দিক থেকে: এমন সম্মানিত রাসূল, যাঁর মধ্যে ছিল এমন উদারতা ও উত্তম চরিত্র যা আর কারও মধ্যে ছিল না। এঁদের কেউ এগুলোকে পরস্পরবিরোধী মত হিসেবে পেশ করেননি। এগুলো একই শব্দের নানা স্তর, পাঠক সবগুলো একসঙ্গে ধরে রাখতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hand Over the Servants",
          "bn": "বান্দাদের আমার হাতে দাও"
        },
        "p": [
          {
            "en": "Then comes what he said: an addu ilayya 'ibada-llah. At-Tabari reads an as the content of the message the messenger came with, and explains addu as idfa'u ilayya, hand over to me: send them with me and follow me. He compares it with 26:17, an arsil ma'ana bani Isra'il, send the Children of Israel with us. On his reading, 'ibada-llah is the object of the verb: the servants of Allah are the ones to be handed over. He then notes that some interpreted it as an addu ilayya ya 'ibada-llah, O servants of Allah, making the phrase a vocative, and he names none of them.",
            "bn": "এরপর আসে তাঁর কথা: আন আদ্দূ ইলাইয়া ইবাদাল্লাহ। তাবারীর মতে 'আন' এখানে রাসূল যে বার্তা নিয়ে এসেছিলেন তার বিষয়বস্তু খুলে বলছে। আদ্দূ শব্দের ব্যাখ্যা তিনি দেন ইদফাঊ ইলাইয়া দিয়ে, অর্থাৎ আমার হাতে তুলে দাও, তাদের আমার সঙ্গে পাঠাও, আর আমার অনুসরণ করো। তিনি এটিকে ২৬:১৭-এর সঙ্গে তুলনা করেন: আন আরসিল মাআনা বানী ইসরাঈল, বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও। তাঁর পাঠে ইবাদাল্লাহ ক্রিয়ার কর্ম, অর্থাৎ আল্লাহর বান্দারাই সেই মানুষ যাদের তুলে দিতে বলা হচ্ছে। এরপর তিনি জানান, কেউ কেউ এর ব্যাখ্যা করেছেন 'হে আল্লাহর বান্দারা' অর্থে, শব্দটিকে সম্বোধন ধরে। তাঁদের কারও নাম তিনি নেননি।"
          },
          {
            "en": "The named reports at-Tabari brings for the object reading are short. Mujahid: send the Children of Israel with me. Qatada: the Children of Israel; and in a second chain Qatada has Musa (AS) say to Pharaoh, why do you hold these people, free people whom you have taken as slaves? Let them go their way. Ibn Zayd: send the servants of Allah with me, meaning the Children of Israel, and he recited 20:47, so send the Children of Israel with us and do not torment them, and said: return them to us.",
            "bn": "কর্ম হিসেবে পড়ার পক্ষে তাবারী নামসহ যে বর্ণনাগুলো আনেন, সেগুলো ছোট। মুজাহিদ: বনী ইসরাঈলকে আমার সঙ্গে পাঠিয়ে দাও। কাতাদা: অর্থ বনী ইসরাঈল। আরেক সূত্রে কাতাদার বর্ণনায় মূসা (আঃ) ফেরাউনকে বলছেন: এই লোকদের তুমি কেন আটকে রেখেছ? এরা স্বাধীন মানুষ, তুমি এদের গোলাম বানিয়ে রেখেছ। এদের পথ ছেড়ে দাও। ইবন যায়দ: আল্লাহর বান্দাদের আমার সঙ্গে পাঠাও, মানে বনী ইসরাঈলকে। এরপর তিনি ২০:৪৭ পড়লেন, অতএব বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও আর তাদের কষ্ট দিয়ো না, তারপর বললেন: তাদের আমাদের কাছে ফিরিয়ে দাও।"
          },
          {
            "en": "At-Tabari's own position is clear from how he arranges the entry. After noting the vocative view, he says that the people of interpretation said what he said about an addu ilayya, and lists his chains under that heading. His preference is the object reading, and that preference is his. Al-Baghawi, as-Sa'di and al-Muyassar likewise name the Children of Israel outright, and Ibn Kathir reads the phrase alongside 20:47. None of the four mentions the vocative.",
            "bn": "তাবারীর নিজের অবস্থান বোঝা যায় তাঁর বিন্যাস থেকে। সম্বোধনের মতটি উল্লেখ করার পর তিনি বলেন, আন আদ্দূ ইলাইয়া-র ব্যাখ্যায় তাফসীরকারেরা তা-ই বলেছেন যা তিনি বলেছেন। তারপর সেই শিরোনামের নিচে নিজের সূত্রগুলো সাজান। তাঁর পছন্দ কর্ম হিসেবে পড়া, আর এই পছন্দ তাঁর নিজের। বাগাভী, সা'দী ও মুয়াসসারও সরাসরি বনী ইসরাঈলের নাম নেন, আর ইবন কাসীর বাক্যটি পড়েন ২০:৪৭-এর পাশে রেখে। এই চারজনের কেউ সম্বোধনের মতটি উল্লেখ করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Call to Follow",
          "bn": "নাকি অনুসরণের ডাক"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out the disagreement with names attached. Ibn 'Abbas: the meaning is that he came to them and said, follow me, so 'ibada-llah is a vocative, O servants of Allah. Mujahid: the meaning is send the servants of Allah with me and release them from the torment, so 'ibada-llah is the object. Then a third view, introduced with it is said and unnamed: render to me your hearing, so that I may convey to you the message of my Lord. Al-Qurtubi lays the three out and does not choose between them.",
            "bn": "কুরতুবী মতভেদটি নামসহ সাজিয়ে দেন। ইবন আব্বাস: অর্থ হলো, তিনি তাদের কাছে এসে বললেন, আমার অনুসরণ করো। এ হিসেবে ইবাদাল্লাহ সম্বোধন, হে আল্লাহর বান্দারা। মুজাহিদ: অর্থ হলো, আল্লাহর বান্দাদের আমার সঙ্গে পাঠাও আর শাস্তি থেকে তাদের মুক্ত করো। এ হিসেবে ইবাদাল্লাহ কর্ম। এরপর তৃতীয় একটি মত, 'বলা হয়' দিয়ে, কারও নাম ছাড়া: তোমাদের কান আমার দিকে দাও, যাতে আমি রবের বার্তা তোমাদের কাছে পৌঁছাতে পারি। কুরতুবী তিনটি মতই সাজিয়ে রাখেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "The report from Ibn 'Abbas is placed differently by the two commentators. At-Tabari quotes it through his own chain, follow me to the truth I am calling you to, and lists it among those who agree with his reading, since his gloss of addu already included follow me. Al-Qurtubi reads the same follow me as a vocative address. One report, then, is placed in two ways by two careful readers. This article reports both and leaves the matter where they leave it.",
            "bn": "ইবন আব্বাসের বর্ণনাটিকে দুই তাফসীরকার দুই জায়গায় বসান। তাবারী নিজের সূত্রে বর্ণনাটি আনেন: আমি তোমাদের যে সত্যের দিকে ডাকছি, তাতে আমার অনুসরণ করো। তারপর এটিকে রাখেন তাঁর নিজের মতের সমর্থকদের তালিকায়, কারণ আদ্দূ শব্দের ব্যাখ্যায় তিনি আগেই 'আমার অনুসরণ করো' কথাটি রেখেছিলেন। কুরতুবী সেই একই 'অনুসরণ করো' কথাকে পড়েন সম্বোধন হিসেবে। বর্ণনা একটিই, অথচ দুই সতর্ক পাঠক তা রাখেন দুই জায়গায়। এই লেখা দুটিই জানিয়ে রাখে, আর তাঁরা বিষয়টি যেখানে রেখেছেন সেখানেই রেখে দেয়।"
          },
          {
            "en": "What changes between the readings is who is being addressed and what is asked of them. On the object reading, Pharaoh and his chiefs are asked to release a people they held. On the vocative reading, the people Musa (AS) came to are themselves called servants of Allah and asked to follow him. Both fit the words, both have early names behind them in these sources, and the verse is read here with both open.",
            "bn": "দুই পাঠে বদলায় দুটি জিনিস: কাকে সম্বোধন করা হচ্ছে, আর তাদের কাছে কী চাওয়া হচ্ছে। কর্ম হিসেবে পড়লে ফেরাউন ও তার সভাসদদের বলা হচ্ছে, যে জাতিকে তারা আটকে রেখেছে তাদের ছেড়ে দিতে। সম্বোধন হিসেবে পড়লে মূসা (আঃ) যাদের কাছে এসেছিলেন, তাদেরই আল্লাহর বান্দা বলে ডাকা হচ্ছে, আর বলা হচ্ছে তাঁর অনুসরণ করতে। দুটি পাঠই শব্দের সঙ্গে খাপ খায়। এই উৎসগুলোতে দুটির পক্ষেই প্রথম যুগের মুফাসসিরদের নাম পাওয়া যায়। তাই আয়াতটি এখানে দুটি পাঠ খোলা রেখেই পড়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Released to Worship Their Lord",
          "bn": "রবের ইবাদতের জন্য মুক্তি"
        },
        "p": [
          {
            "en": "As-Sa'di gives the object reading in full. Musa (AS) said to Pharaoh and his chiefs: hand over to me the servants of Allah, meaning the Children of Israel. Send them and release them from your torment and from the evil torment you inflict on them, for they are my kin and the best of people in their time. You have wronged them and enslaved them without right, so send them, that they may worship their Lord. Al-Muyassar puts the purpose the same way: send them with me, to worship Allah alone, with no partner.",
            "bn": "কর্ম হিসেবে পড়ার পূর্ণ চিত্র দেন সা'দী। মূসা (আঃ) ফেরাউন ও তার সভাসদদের বললেন: আল্লাহর বান্দাদের, মানে বনী ইসরাঈলকে, আমার হাতে তুলে দাও। তাদের ছেড়ে দাও। তোমাদের শাস্তি আর তাদের উপর চালানো নিকৃষ্ট নির্যাতন থেকে তাদের মুক্ত করো। তারা আমার আপনজন, আর তাদের যুগে তারা ছিল সব মানুষের মধ্যে শ্রেষ্ঠ। তোমরা তাদের উপর জুলুম করেছ, অন্যায়ভাবে গোলাম বানিয়েছ। তাই তাদের যেতে দাও, যাতে তারা নিজেদের রবের ইবাদত করতে পারে। মুয়াসসারও উদ্দেশ্যটা একইভাবে বলে: তাদের আমার সঙ্গে পাঠাও, যাতে তারা শরিকহীন এক আল্লাহর ইবাদত করে।"
          },
          {
            "en": "Two other passages carry the same demand, and the commentators point to them rather than retell them. Ibn Kathir sets this verse beside 20:47, so send the Children of Israel with us and do not torment them, and al-Baghawi's gloss, release them and do not torment them, echoes its wording. At-Tabari compares 26:17. Those passages tell the meeting at greater length and are explained in their own place. Here the whole demand is pressed into a single clause, and the next verse turns at once to a warning against exalting oneself over Allah.",
            "bn": "একই দাবি আরও দুটি জায়গায় এসেছে, আর তাফসীরকারেরা সেগুলোর দিকে ইঙ্গিত করেন, নতুন করে কাহিনি বলেন না। ইবন কাসীর এই আয়াতকে রাখেন ২০:৪৭-এর পাশে: অতএব বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও আর তাদের কষ্ট দিয়ো না। বাগাভীর ব্যাখ্যা, তাদের ছেড়ে দাও আর কষ্ট দিয়ো না, ওই আয়াতের ভাষারই প্রতিধ্বনি। তাবারী তুলনা করেন ২৬:১৭-এর সঙ্গে। ওই আয়াতগুলো সাক্ষাৎটির কথা আরও বিস্তারে বলে, আর তাদের ব্যাখ্যা তাদের নিজের জায়গায়। এখানে পুরো দাবিটা ঠাসা হয়েছে একটিমাত্র বাক্যাংশে। পরের আয়াতই সঙ্গে সঙ্গে সতর্ক করে, আল্লাহর বিরুদ্ধে ঔদ্ধত্য দেখিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Trust as His Credential",
          "bn": "আমানতদারিই তাঁর পরিচয়"
        },
        "p": [
          {
            "en": "The verse closes with inni lakum rasulun amin: indeed, I am to you a trustworthy messenger. At-Tabari expands it: I am to you, O people, a messenger from Allah, sent to you so that His punishment does not overtake you for disbelieving in Him; amin, trustworthy over His revelation and the message He gave me for you. Al-Baghawi says trustworthy over the revelation, al-Muyassar over His revelation and His message, and Ibn Kathir glosses amin as ma'mun, trusted in what I convey to you.",
            "bn": "আয়াতটি শেষ হয় ইন্নী লাকুম রাসূলুন আমীন দিয়ে: আমি তোমাদের জন্য বিশ্বস্ত রাসূল। তাবারী কথাটা খুলে বলেন: হে আমার জাতি, আমি আল্লাহর পক্ষ থেকে তোমাদের কাছে পাঠানো রাসূল, যাতে তাঁকে অস্বীকার করার কারণে তাঁর শাস্তি তোমাদের পাকড়াও না করে। আর আমীন মানে, তাঁর ওহি এবং তোমাদের জন্য তিনি আমাকে যে বার্তা দিয়েছেন, তাতে আমি বিশ্বস্ত। বাগাভী বলেন, ওহির ব্যাপারে বিশ্বস্ত। মুয়াসসার বলে, তাঁর ওহি ও রিসালাতের ব্যাপারে। ইবন কাসীর আমীনের ব্যাখ্যা দেন মা'মূন দিয়ে: তোমাদের কাছে যা পৌঁছাই, তাতে আমি নির্ভরযোগ্য।"
          },
          {
            "en": "Al-Qurtubi adds a sense that ties the end of the verse to its beginning. Trustworthy over the revelation, so accept my counsel; or, as it is said, trustworthy over what I ask you to hand over to me, so I will not betray it. On the object reading, the one asking to be handed a people promises to keep what he is given. As-Sa'di draws out the other side: trustworthy over what I was sent with, hiding none of it from you, adding nothing and leaving nothing out, and this, he says, requires full compliance with him.",
            "bn": "কুরতুবী এমন এক অর্থ যোগ করেন, যা আয়াতের শেষকে শুরুর সঙ্গে বেঁধে দেয়। ওহির ব্যাপারে বিশ্বস্ত, তাই আমার নসিহত কবুল করো। অথবা, যেমন বলা হয়, তোমাদের কাছে যা চাইছি তার ব্যাপারে বিশ্বস্ত, তাতে আমি খেয়ানত করব না। কর্ম হিসেবে পড়লে, যিনি একটি জাতিকে নিজের হাতে চাইছেন, তিনিই কথা দিচ্ছেন যে যা পাবেন তা রক্ষা করবেন। সা'দী অন্য দিকটা তুলে আনেন: যা নিয়ে আমি প্রেরিত, তাতে আমি বিশ্বস্ত। তার কিছুই তোমাদের কাছে লুকাই না, কিছু বাড়াই না, কিছু কমাই না। তিনি বলেন, এ কারণেই তাঁর প্রতি পূর্ণ আনুগত্য অপরিহার্য হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One People, One Age",
          "bn": "এক জাতি, এক যুগ"
        },
        "p": [
          {
            "en": "Pharaoh's people are a people the Qur'an condemns, and al-Muyassar says it in a line: they denied him and were destroyed. These verses speak only of what they name, a ruling house and its people, in their own age, who were sent a messenger and refused him. They license nothing against any living person or community. As as-Sa'di and al-Muyassar frame it, the account was told to warn those who were denying the Prophet ﷺ, and the warning lands on anyone who turns from the truth, not on a lineage or a land.",
            "bn": "ফেরাউনের জাতি এমন এক জাতি, যাদের কুরআন নিন্দা করেছে। মুয়াসসার এক বাক্যে বলে দেয়: তারা তাঁকে মিথ্যাবাদী বলল আর ধ্বংস হলো। এই আয়াতগুলো যা বর্ণনা করে, ঠিক তা-ই বর্ণনা করে। নিজেদের যুগের এক শাসকগোষ্ঠী ও তার লোকজন, যাদের কাছে রাসূল এসেছিলেন আর তারা তাঁকে ফিরিয়ে দিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। সা'দী ও মুয়াসসারের উপস্থাপনায় কাহিনিটি শোনানো হয়েছিল নবী ﷺ-কে যারা অস্বীকার করছিল তাদের সতর্ক করতে। সে সতর্কবাণী পড়ে সত্য থেকে মুখ ফেরানো যে কারও উপর, কোনো বংশ বা কোনো দেশের উপর নয়।"
          },
          {
            "en": "None of the commentators consulted for these two verses attaches a hadith to them, so none is brought here. What remains is the scene itself. A man with no army stands before a throne, asks that servants of Allah be handed over or that servants of Allah follow him, and offers one credential, that he can be trusted. The trial, on the reading most of these commentators give, was his arrival. The question it puts to a reader is what is done with truth once it has come.",
            "bn": "এই দুটি আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এগুলোর সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এখানেও কোনো হাদিস আনা হলো না। বাকি থাকে দৃশ্যটি। সৈন্যহীন একজন মানুষ সিংহাসনের সামনে দাঁড়িয়ে। তিনি চাইছেন আল্লাহর বান্দাদের তাঁর হাতে তুলে দেওয়া হোক, কিংবা আল্লাহর বান্দারা তাঁর অনুসরণ করুক। তাঁর পরিচয়পত্র একটাই: তাঁকে বিশ্বাস করা যায়। এই তাফসীরকারদের বেশির ভাগের ব্যাখ্যায় পরীক্ষাটা ছিল তাঁর আগমন। পাঠকের সামনে তাই প্রশ্ন একটাই: সত্য এসে পড়ার পর আমরা তা নিয়ে কী করি।"
          }
        ]
      }
    ]
  },
  "44:20": {
    "sections": [
      {
        "h": {
          "en": "Six Words Before a Court",
          "bn": "দরবারের সামনে ছয়টি শব্দ"
        },
        "p": [
          {
            "en": "Three verses carry Musa's message to Fir'awn's people. In 44:18 he asks them to hand over the servants of Allah. In 44:19 he tells them not to exalt themselves against Allah, and says he has come with sultan mubin, which the abridged Ibn Kathir explains as clear and obvious proof. Then comes 44:20, six Arabic words: wa inni 'udhtu bi-rabbi wa rabbikum an tarjumun. And indeed, I have taken refuge in my Lord and your Lord, lest you stone me.",
            "bn": "ফেরাউনের লোকদের কাছে মূসা (আঃ)-এর বার্তা এসেছে তিনটি আয়াত জুড়ে। ৪৪:১৮ আয়াতে তিনি বলেন, আল্লাহর বান্দাদের আমার হাতে তুলে দাও। ৪৪:১৯ আয়াতে বলেন, আল্লাহর বিরুদ্ধে ঔদ্ধত্য দেখিয়ো না, আমি তোমাদের কাছে সুলতানুম মুবীন নিয়ে এসেছি। সংক্ষিপ্ত ইংরেজি ইবন কাসীরে এর ব্যাখ্যা: স্পষ্ট ও প্রকাশ্য প্রমাণ। তারপর ৪৪:২০, আরবিতে মাত্র ছয়টি শব্দ: ওয়া ইন্নী উযতু বিরাব্বী ওয়া রাব্বিকুম আন তারজুমূন। আর আমি আমার রব ও তোমাদের রবের আশ্রয় নিয়েছি, যাতে তোমরা আমাকে রজম করতে না পারো।"
          },
          {
            "en": "What drew this sentence out of him? The verse quotes no threat, but al-Qurtubi opens his comment with one: ka-annahum tawa'adu-hu bi-l-qatl fa-istajara billah, it is as though they threatened him with death, so he sought Allah's protection. The words as though are his own; he reads the threat from the reply. Ma'arif al-Qur'an reasons along the same line, saying that Fir'awn's people must have been threatening him with death. Both texts present this as an inference from the wording, and this article keeps it as one. The commentators' real debate lies in the last word, an tarjumun.",
            "bn": "কোন পরিস্থিতিতে তাঁর মুখ থেকে এ কথা বেরোল? আয়াতে কোনো হুমকির উদ্ধৃতি নেই। তবু কুরতুবী তাঁর আলোচনা শুরু করেন একটি হুমকি দিয়েই: কাআন্নাহুম তাওয়াআদূহু বিলকাতলি ফাসতাজারা বিল্লাহ। যেন তারা তাঁকে হত্যার হুমকি দিয়েছিল, তাই তিনি আল্লাহর আশ্রয় চাইলেন। 'যেন' শব্দটা কুরতুবীর নিজের। জবাব দেখে তিনি হুমকিটা আন্দাজ করছেন। মাআরিফুল কুরআনও একই পথে যুক্তি দেয়: ফেরাউনের লোকেরা নিশ্চয়ই তাঁকে মেরে ফেলার ভয় দেখাচ্ছিল। দুটো বই-ই কথাটা রাখে শব্দ থেকে টানা অনুমান হিসেবে, এ প্রবন্ধও তাকে অনুমানের জায়গাতেই রাখছে। তাফসীরকারদের আসল আলোচনা শেষ শব্দটি নিয়ে: আন তারজুমূন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stones, or a Wounding Tongue",
          "bn": "পাথর, নাকি কথার আঘাত"
        },
        "p": [
          {
            "en": "At-Tabari says outright that the people of interpretation differed over the rajm from which Musa (AS) sought refuge, and he lists three answers. The first is shatm bi-l-lisan, abuse with the tongue. He gives it from Ibn 'Abbas through the chain of Muhammad ibn Sa'd: ya'ni rajm al-qawl, he means stoning by speech. Then from Abu Salih through Shu'ba: al-rajm bi-l-qawl, the stoning is by words. A second chain to Abu Salih, through Sufyan, names the words themselves: an taqulu huwa sahir, that you say he is a sorcerer.",
            "bn": "তাবারী সোজাসুজি বলেন, মূসা (আঃ) যে রজম থেকে আশ্রয় চেয়েছিলেন, তার অর্থ নিয়ে তাফসীরবিদদের মধ্যে মতভেদ আছে। তিনি তিনটি জবাব তুলে ধরেন। প্রথমটি হলো শাতম বিল-লিসান, মুখ দিয়ে গালি দেওয়া। মুহাম্মাদ ইবন সা'দের সনদে তিনি এটি আনেন ইবন আব্বাস (রাঃ) থেকে: ইয়া'নী রাজমাল কাওল, অর্থাৎ কথার পাথর। এরপর শু'বার সনদে আবু সালিহ থেকে: রজম মানে কথা দিয়ে আঘাত। সুফইয়ানের সূত্রে আবু সালিহ থেকে আরেকটি বর্ণনা কথাগুলোও বলে দেয়: আন তাকূলূ হুয়া সাহির। অর্থাৎ তোমরা বলবে, সে জাদুকর।"
          },
          {
            "en": "The second answer is the literal one. At-Tabari gives it from Qatada by two chains, one through Sa'id and one through Ma'mar: an tarjumuni bi-l-hijara, that you stone me with stones. The third he gives without a name, introduced only by wa qala akharun, and others said: an taqtuluni, that you kill me. So the one word was heard in three ways in the early generations: as a mouth that wounds a man's name, as hands that throw stones, and as killing outright.",
            "bn": "দ্বিতীয় জবাবটি আক্ষরিক অর্থের। তাবারী এটি আনেন কাতাদা থেকে, দুটি সনদে: একটি সাঈদের মাধ্যমে, অন্যটি মা'মারের মাধ্যমে। কথাটি হলো, তোমরা আমাকে পাথর ছুড়ে মারবে। তৃতীয় জবাবটি তিনি কারও নাম ছাড়াই আনেন, শুধু 'অন্যরা বলেছেন' বলে: আন তাকতুলূনী, তোমরা আমাকে হত্যা করবে। প্রথম যুগের মানুষেরা তাই একটি শব্দকে তিনটি ভিন্ন অর্থে শুনেছেন। কারও কাছে তা এমন মুখ, যা মানুষের সুনামে আঘাত করে। কারও কাছে পাথর ছোড়া হাত। আর কারও কাছে সরাসরি হত্যা।"
          },
          {
            "en": "The other commentators relay the two named views, each in his own words. Ibn Kathir's Arabic: Ibn 'Abbas and Abu Salih said it is stoning with the tongue, which is shatm, abuse; Qatada said it is stoning with stones. Al-Qurtubi gives Ibn 'Abbas a fuller wording: tashtumun, fa-taqulu sahir kadhdhab, you abuse me and say: a sorcerer, a liar. Al-Baghawi has Ibn 'Abbas say: you revile me and say he is a sorcerer, and has Qatada say: you stone me with stones.",
            "bn": "অন্য তাফসীরকারেরা নামসহ এ দুটি মতই উদ্ধৃত করেন, প্রত্যেকে নিজের ভাষায়। আরবি ইবন কাসীরে আছে: ইবন আব্বাস (রাঃ) ও আবু সালিহ বলেছেন, এ হলো জিভ দিয়ে রজম, মানে গালিগালাজ। আর কাতাদা বলেছেন, পাথর দিয়ে রজম। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথাটি আরেকটু বিস্তারে আনেন: তোমরা আমাকে গালি দেবে আর বলবে, জাদুকর, মিথ্যুক। বাগাভীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, তোমরা আমাকে গালমন্দ করবে আর বলবে সে জাদুকর। আর কাতাদা বলেন, তোমরা আমাকে পাথর মারবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Each Commentator Leans",
          "bn": "কোন তাফসীর কোন দিকে ঝোঁকে"
        },
        "p": [
          {
            "en": "Some commentators give a reading of their own before, or instead of, the reports. Al-Baghawi opens with ay taqtuluni, that is, you kill me, and only then cites Ibn 'Abbas and Qatada. As-Sa'di writes a single line: taqtuluni ashar al-qatalat bi-l-rajm bi-l-hijara, you kill me by the worst of killings, stoning with stones. The Muyassar joins both ideas in a phrase: an taqtuluni rajman bi-l-hijara, that you kill me by stoning. For these three the danger in the verse is death.",
            "bn": "কিছু তাফসীর বর্ণনাগুলোর আগে, কিংবা সেগুলোর বদলে, নিজের ব্যাখ্যা দেয়। বাগাভী শুরুই করেন 'আই তাকতুলূনী' দিয়ে, মানে তোমরা আমাকে মেরে ফেলবে। তারপর ইবন আব্বাস (রাঃ) ও কাতাদার কথা আনেন। সা'দী লেখেন মাত্র এক লাইন: তোমরা আমাকে হত্যা করবে সবচেয়ে নিকৃষ্ট উপায়ে, পাথর ছুড়ে। মুয়াসসার দুটো ভাবনাকে এক বাক্যে জোড়ে: পাথর মেরে তোমরা আমাকে হত্যা করবে। এই তিনজনের কাছে আয়াতের বিপদটা হলো মৃত্যু।"
          },
          {
            "en": "Ma'arif al-Qur'an sets out both senses and then leans. Rajm means to stone to death, it says, and also to revile or heap up insults; both are possible here, but stoning to death seems more likely, because Fir'awn's people must have been threatening him with death. So the disagreement is real. Ibn 'Abbas and Abu Salih, as reported, hear an assault of words; Qatada hears stones; as-Sa'di, the Muyassar and Ma'arif read killing by stoning. This article records where each text stands and does not choose.",
            "bn": "মাআরিফুল কুরআন দুটি অর্থই সামনে রাখে, তারপর একদিকে ঝোঁকে। তার ভাষায়, রজম মানে পাথর মেরে হত্যা। শব্দটির আরেক অর্থ গালমন্দ করা, কথার আক্রমণ চালানো, অপমানের স্তূপ চাপানো। এখানে দুটো অর্থই সম্ভব। তবে পাথর মেরে হত্যার অর্থটাই বেশি সম্ভাব্য মনে হয়, কারণ ফেরাউনের লোকেরা নিশ্চয়ই তাঁকে মৃত্যুর ভয় দেখাচ্ছিল। মতভেদটা তাই সত্যিকারের। বর্ণনা অনুযায়ী ইবন আব্বাস (রাঃ) ও আবু সালিহ শোনেন কথার আক্রমণ, কাতাদা শোনেন পাথর। আর সা'দী, মুয়াসসার ও মাআরিফুল কুরআন পড়েন পাথর মেরে হত্যা। কোন বই কোথায় দাঁড়িয়ে, এ প্রবন্ধ শুধু সেটুকু জানায়, কোনো পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongue and Hand Together",
          "bn": "জিভ আর হাত, দুটোই"
        },
        "p": [
          {
            "en": "At-Tabari does not stop at the list. The most correct saying, he writes, is what the apparent sense of the words points to: Musa (AS) sought refuge with Allah from being stoned by Fir'awn and his people, and rajm may be a word spoken with the tongue or an act done with the hand. So the right thing to say is that he sought refuge from every meaning of their rajm through which harm and hurt reach the person stoned, whether abuse by the tongue or stones thrown by the hand.",
            "bn": "তাবারী শুধু মতগুলোর তালিকা দিয়ে থামেন না। তাঁর মতে সবচেয়ে সঠিক কথা সেটাই, যেদিকে বাক্যের বাহ্যিক অর্থ ইঙ্গিত করে। মূসা (আঃ) আল্লাহর আশ্রয় চেয়েছিলেন, যাতে ফেরাউন ও তার লোকেরা তাঁকে রজম না করে। আর রজম মুখের কথাও হতে পারে, হাতের কাজও হতে পারে। তাই সঠিক বক্তব্য হলো, তাদের যে রজমেই আক্রান্ত মানুষের কাছে কষ্ট ও অনিষ্ট পৌঁছায়, তার সব রূপ থেকেই তিনি আশ্রয় চেয়েছিলেন। জিভের গালি হোক, বা হাতে ছোড়া পাথর।"
          },
          {
            "en": "Ibn Kathir's Arabic follows the two reports with a gloss introduced by ay, that is, and lands in the same place: I seek refuge with Allah, who created me and created you, from your reaching me with harm, min qawl aw fi'l, in word or in deed. The abridged English runs this gloss on from Qatada's words, so the two editions frame it differently. Either way, neither text cancels the narrower readings. They widen the refuge to cover both, and that wider reading stands beside the others, not over them.",
            "bn": "আরবি ইবন কাসীর দুটি বর্ণনার পর 'আই', অর্থাৎ, বলে একটি ব্যাখ্যা জোড়েন, আর তা পৌঁছায় একই জায়গায়। আমি আশ্রয় চাই সেই আল্লাহর কাছে, যিনি আমাকে সৃষ্টি করেছেন, তোমাদেরও সৃষ্টি করেছেন, যেন তোমাদের কোনো অনিষ্ট আমার কাছে না পৌঁছায়, কথায় হোক বা কাজে। সংক্ষিপ্ত ইংরেজি সংস্করণে ব্যাখ্যাটি কাতাদার কথার সঙ্গে জুড়ে গেছে, ফলে দুই সংস্করণে এর উপস্থাপন আলাদা। যেভাবেই হোক, কোনো বই-ই সংকীর্ণ অর্থগুলো বাতিল করে না। তারা আশ্রয়ের পরিধি বাড়িয়ে দুটোকেই ধরে। এই প্রশস্ত পাঠ অন্য মতগুলোর পাশে দাঁড়ায়, সেগুলোর উপরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Refuge Past, or Refuge Present",
          "bn": "আশ্রয় অতীতের, নাকি এই মুহূর্তের"
        },
        "p": [
          {
            "en": "'Udhtu is a perfect verb: I have taken refuge. Al-Qurtubi records two ways of hearing it. On the first it means exactly that, refuge taken in the past, because Allah had already given Musa (AS) a promise: fa-la yasiluna ilaykuma, so they will not reach you two (28:35). In that verse Allah tells him He will strengthen him through his brother and give them both authority, so that Fir'awn's people will not reach them. Read this way, 44:20 tells the court of a protection already granted.",
            "bn": "উযতু ক্রিয়াটি অতীতকালের: আমি আশ্রয় নিয়েছি। কুরতুবী শব্দটি বোঝার দুটি পথ উল্লেখ করেন। প্রথম মতে এর অর্থ ঠিক এটাই, অতীতে নেওয়া আশ্রয়। কারণ আল্লাহ আগেই মূসা (আঃ)-কে কথা দিয়েছিলেন: ফালা ইয়াসিলূনা ইলাইকুমা, তারা তোমাদের দুজনের কাছে পৌঁছাতে পারবে না (২৮:৩৫)। সেই আয়াতে আল্লাহ তাঁকে বলেন, তাঁর ভাইকে দিয়ে তাঁর বাহু শক্ত করবেন এবং দুজনকেই এমন ক্ষমতা দেবেন যে ফেরাউনের লোকেরা তাঁদের নাগাল পাবে না। এভাবে পড়লে ৪৪:২০ দরবারকে জানিয়ে দেয় এমন এক নিরাপত্তার কথা, যা আগেই দেওয়া হয়ে গেছে।"
          },
          {
            "en": "On the second reading, 'udhtu carries the force of the present: inni a'udhu, I seek refuge. Al-Qurtubi compares it with nashadtuka billah, I adjure you by Allah, and aqsamtu 'alayka billah, I swear to you by Allah, where a past form makes an oath at the moment it is spoken, meaning uqsimu, I swear. On this view the sentence is itself the act; in saying it, Musa (AS) takes refuge there and then. Al-Qurtubi introduces both views with qila, it was said, and leaves them side by side.",
            "bn": "দ্বিতীয় মতে উযতু বর্তমানের অর্থ বহন করে: ইন্নী আউযু, আমি আশ্রয় চাইছি। কুরতুবী এর তুলনা করেন নাশাদতুকা বিল্লাহ (আল্লাহর দোহাই দিচ্ছি) আর আকসামতু আলাইকা বিল্লাহ (আল্লাহর কসম খাচ্ছি) কথার সঙ্গে। সেখানে অতীতকালের রূপ দিয়েই বলার মুহূর্তে কসম সম্পন্ন হয়, অর্থাৎ উকসিমু, আমি কসম করছি। এ মতে বাক্যটি নিজেই কাজটা। কথাটা উচ্চারণ করেই মূসা (আঃ) তখনই আশ্রয় নিয়ে নেন। দুটি মতই কুরতুবী আনেন 'কীলা', অর্থাৎ বলা হয়েছে, দিয়ে, আর পাশাপাশি রেখে দেন।"
          },
          {
            "en": "He also records a point of recitation in the same word. Nafi', Ibn Kathir (here the reader, not the commentator of the same name), Ibn 'Amir, 'Asim and Ya'qub pronounce the dhal of 'udhtu clearly; the remaining readers merge it into the ta that follows. Al-Qurtubi gives the reason for each: the merging is sought for ease of pronunciation, and the clear form keeps to the original shape of the word. Both pronunciations carry the same verb.",
            "bn": "একই শব্দে কুরতুবী তিলাওয়াতের একটি বিষয়ও উল্লেখ করেন। নাফি, ইবন কাসীর (এখানে কারী, একই নামের মুফাসসির নন), ইবন আমির, আসিম ও ইয়াকুব উযতু শব্দের যাল স্পষ্ট করে উচ্চারণ করেন। বাকি কারীগণ যালকে পরের তা-এর সঙ্গে মিলিয়ে দেন, যাকে ইদগাম বলে। কুরতুবী দুটোরই কারণ বলেন। মিলিয়ে পড়ার উদ্দেশ্য উচ্চারণ সহজ করা, আর স্পষ্ট উচ্চারণ শব্দের মূল রূপকে ধরে রাখে। দুই উচ্চারণেই ক্রিয়াটি একই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Lord Over Both Sides",
          "bn": "দুই পক্ষের একই রব"
        },
        "p": [
          {
            "en": "Bi-rabbi wa rabbikum: in my Lord and your Lord. Musa (AS) does not take refuge in a god of his own against the gods of the court. He names one Lord twice, once as his and once as theirs. Ibn Kathir's gloss makes the point plain: Allah alladhi khalaqani wa khalaqakum, Allah who created me and created you. The people who might throw the stones were made by the same Lord he is calling on, and the sentence tells them so to their faces, at the very moment he fears them.",
            "bn": "বিরাব্বী ওয়া রাব্বিকুম: আমার রব ও তোমাদের রবের কাছে। মূসা (আঃ) দরবারের দেবতাদের বিপরীতে নিজের আলাদা কোনো উপাস্যের আশ্রয় নেন না। একই রবের নাম তিনি দুবার নেন, একবার নিজের রব হিসেবে, একবার ওদের রব হিসেবে। ইবন কাসীরের ব্যাখ্যা কথাটা খোলাসা করে দেয়: সেই আল্লাহ, যিনি আমাকে সৃষ্টি করেছেন, তোমাদেরও সৃষ্টি করেছেন। যারা পাথর ছুড়তে পারে, তাদেরও বানিয়েছেন সেই রব, যাঁকে তিনি ডাকছেন। যে মুহূর্তে তিনি তাদের ভয় পাচ্ছেন, ঠিক তখনই মুখের উপর এ কথা তাদের শুনিয়ে দেন।"
          },
          {
            "en": "The same words occur once more, at 40:27: and Musa said, I have taken refuge in my Lord and your Lord from every arrogant one who does not believe in the Day of Account. There the verse before, 40:26, quotes Fir'awn's threat outright: leave me to kill Musa. In 44:20 no threat is quoted, and the danger named is rajm. The refuge and the double naming of the Lord are identical in both places. The commentaries on 44:20 consulted here do not draw this comparison; it comes from setting the two verses side by side.",
            "bn": "হুবহু এই কথাগুলো কুরআনে আরেকবার এসেছে, ৪০:২৭ আয়াতে: মূসা বললেন, যে অহংকারী হিসাবের দিনে বিশ্বাস করে না, তাদের প্রত্যেকের থেকে আমি আমার রব ও তোমাদের রবের আশ্রয় নিয়েছি। সেখানে আগের আয়াত, ৪০:২৬, ফেরাউনের হুমকি সরাসরি উদ্ধৃত করে: আমাকে ছেড়ে দাও, মূসাকে হত্যা করি। ৪৪:২০ আয়াতে কোনো হুমকির উদ্ধৃতি নেই, আর বিপদের নাম রজম। আশ্রয় আর রবের দুবার নাম নেওয়া, দুই জায়গাতেই একই। এখানে দেখা ৪৪:২০-এর তাফসীরগুলো এই তুলনা টানে না। দুটি আয়াত পাশাপাশি রেখে তুলনাটা এখানে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "If Not Faith, Then Distance",
          "bn": "ঈমান না আনলে, অন্তত দূরে থাকো"
        },
        "p": [
          {
            "en": "The next verse completes the thought: wa in lam tu'minu li fa-'tazilun, and if you do not believe me, then keep away from me. At-Tabari's paraphrase ties it straight back to 44:20. If you do not accept what I have brought you from my Lord, then fa-khallu sabili, let me go my way, ghayra marjumin bi-l-lisani wa la bi-l-yad, stoned neither by tongue nor by hand. He cites Qatada for the core of it, let me go my way, and the Muyassar says much the same: let me go my way and stop harming me.",
            "bn": "পরের আয়াত কথাটা পূর্ণ করে: ওয়া ইন লাম তু'মিনূ লী ফা'তাযিলূন, আর তোমরা যদি আমাকে বিশ্বাস না করো, তবে আমার থেকে দূরে থাকো। তাবারীর ব্যাখ্যা একে সরাসরি ৪৪:২০-এর সঙ্গে বেঁধে দেয়। রবের কাছ থেকে যা এনেছি তা যদি তোমরা না মানো, তবে আমার পথ ছেড়ে দাও, যাতে জিভ দিয়েও আমাকে রজম না করা হয়, হাত দিয়েও না। মূল কথাটার জন্য তিনি কাতাদার বর্ণনা আনেন: আমার পথ ছেড়ে দাও। মুয়াসসারও প্রায় একই কথা বলে: আমার পথ ছেড়ে দাও, আর আমাকে কষ্ট দেওয়া বন্ধ করো।"
          },
          {
            "en": "Al-Qurtubi gathers several glosses on fa-'tazilun. From Muqatil: da'uni kafafan, la li wa la 'alayya, leave me be, neither for me nor against me. Another: be apart from me and I will be apart from you, until Allah judges between us. Another: let me go my way and stop harming me. He closes with wa-l-ma'na mutaqarib: the meanings are close. The abridged Ibn Kathir reads it the same way: the two sides leave each other alone and live in peace until Allah judges between them.",
            "bn": "ফা'তাযিলূন শব্দের কয়েকটি ব্যাখ্যা কুরতুবী একসঙ্গে আনেন। মুকাতিল থেকে: আমাকে আমার মতো ছেড়ে দাও, আমার পক্ষেও থেকো না, বিপক্ষেও না। আরেক ব্যাখ্যা: আল্লাহ আমাদের মধ্যে ফয়সালা না করা পর্যন্ত তোমরা আমার থেকে আলাদা থাকো, আমিও তোমাদের থেকে আলাদা থাকি। আরেকটি: আমার পথ ছেড়ে দাও, আমাকে কষ্ট দেওয়া বন্ধ করো। শেষে তিনি বলেন, অর্থগুলো কাছাকাছি। সংক্ষিপ্ত ইংরেজি ইবন কাসীরও একই অর্থ নেন: আল্লাহ ফয়সালা না করা পর্যন্ত দুই পক্ষ একে অপরকে ছেড়ে দিয়ে শান্তিতে থাকবে।"
          },
          {
            "en": "As-Sa'di reads the two verses as an offer with ranks in it. You have three ranks, he has Musa (AS) say, and he names the first two. The first is faith in me, and that is what I want from you. If that does not come about, then keep away from me, neither against me nor for me, and spare me your evil. Then he reports the outcome: they reached neither rank, but went on rebelling against Allah, at war with His prophet, and would not let him have his people, the Children of Israel.",
            "bn": "সা'দী দুটি আয়াতকে পড়েন ধাপে ধাপে সাজানো এক প্রস্তাব হিসেবে। তাঁর ভাষ্যে মূসা (আঃ) বলছেন, তোমাদের সামনে তিনটি স্তর আছে। প্রথম দুটির নাম তিনি বলেন। প্রথমটি আমার প্রতি ঈমান, তোমাদের কাছে আমার আসল চাওয়া এটাই। সেটা না হলে আমার থেকে দূরে থাকো, আমার বিপক্ষেও না, পক্ষেও না, আর তোমাদের অনিষ্ট থেকে আমাকে রেহাই দাও। তারপর সা'দী জানান কী ঘটেছিল। তারা প্রথম স্তরেও পৌঁছায়নি, দ্বিতীয়টিতেও না। বরং আল্লাহর বিরুদ্ধে অবাধ্যতায় অটল থেকেছে, তাঁর নবী মূসা (আঃ)-এর সঙ্গে লড়েছে, আর তাঁকে তাঁর কওম বনী ইসরাঈলকে নিয়ে যেতে দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Refuge Without Reprisal",
          "bn": "প্রতিশোধহীন আশ্রয়"
        },
        "p": [
          {
            "en": "Only after this does 44:22 report a prayer against them: he called on his Lord that these were a criminal people. The abridged Ibn Kathir explains the order. After Musa had stayed among them for a long time, and the proof of Allah had been established against them, and it only increased them in disbelief and stubbornness, he prayed against them and was answered; Ibn Kathir points to 10:88 and 10:89 for its wording. So the order is refuge, a request to be left alone, a long stay, and only then a prayer.",
            "bn": "এরপরই কেবল ৪৪:২২ আয়াতে তাদের বিরুদ্ধে দোয়ার কথা আসে: তিনি তাঁর রবকে ডাকলেন, এরা এক অপরাধী সম্প্রদায়। সংক্ষিপ্ত ইংরেজি ইবন কাসীর এই ক্রমটা বুঝিয়ে দেন। মূসা (আঃ) দীর্ঘ সময় তাদের মাঝে ছিলেন। তাদের বিরুদ্ধে আল্লাহর প্রমাণ প্রতিষ্ঠিত হয়ে গিয়েছিল, আর তাতে তাদের কুফর ও হঠকারিতা কেবল বেড়েছে। তখনই তিনি তাদের বিরুদ্ধে রবের কাছে দোয়া করেন, আর সে দোয়া কবুল হয়। দোয়ার ভাষার জন্য ইবন কাসীর দেখিয়ে দেন ১০:৮৮ ও ১০:৮৯ আয়াত। ক্রমটা তাই এমন: আশ্রয়, তারপর ছেড়ে দেওয়ার অনুরোধ, তারপর দীর্ঘ অবস্থান, আর সবশেষে দোয়া।"
          },
          {
            "en": "This needs saying plainly. The verse describes Fir'awn and his people as the text describes them, a court that answered clear proof with threats, and it licenses nothing against any living person or community. It marks no nation, ruler or group of today as Fir'awn's people. Nor do the commentaries consulted here attach any hadith to this verse; none of them cites a sound narration on it, and this article adds none. No occasion of revelation is given for it either; its place in the passage is its context.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ফেরাউন ও তার লোকদের বর্ণনা দেয় ঠিক ততটুকু, যতটুকু কুরআন বলেছে: এমন এক দরবার, যারা সুস্পষ্ট প্রমাণের জবাব দিয়েছিল হুমকি দিয়ে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো জাতি, শাসক বা দলকে এটি ফেরাউনের লোক বলে চিহ্নিত করে না। এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। কেউই এর ব্যাপারে কোনো সহীহ বর্ণনা আনেনি, এ প্রবন্ধও কোনো হাদীস যোগ করছে না। নাযিলের কোনো উপলক্ষও বলা হয়নি। আগে-পরের আয়াতগুলোই এর প্রেক্ষাপট।"
          },
          {
            "en": "What the verse does give the reader is a way to respond. Threatened with stones or with slander, Musa (AS) answers with neither. He states his refuge, names the Lord who is over both sides, and in the next breath asks for nothing worse than distance. A believer who is mocked or menaced can borrow that shape: turn to Allah first, ask to be let alone, and do not return the hurt. The refuge did not make the danger smaller; it put the danger in the hands of the One who decides.",
            "bn": "আয়াতটি পাঠককে যা দেয়, তা হলো জবাব দেওয়ার একটা ধরন। পাথর বা অপবাদের হুমকির মুখে মূসা (আঃ) এর কোনোটা দিয়েই জবাব দেন না। তিনি নিজের আশ্রয়ের কথা জানান, দুই পক্ষের উপর যে একই রব, তাঁর নাম নেন। আর ঠিক পরের কথাতেই দূরত্বের বেশি কিছু চান না। যে মুমিনকে ঠাট্টা করা হয় বা ভয় দেখানো হয়, তিনিও এই ধরনটা নিতে পারেন: আগে আল্লাহর দিকে ফিরুন, তারপর ছেড়ে দেওয়ার অনুরোধ করুন, আর কষ্টের বদলে কষ্ট ফিরিয়ে দেবেন না। আশ্রয় বিপদকে ছোট করেনি। বিপদটাকে তুলে দিয়েছে তাঁর হাতে, যিনি ফয়সালা করেন।"
          }
        ]
      }
    ]
  },
  "44:22": {
    "sections": [
      {
        "h": {
          "en": "After the Plea to Be Left",
          "bn": "একা থাকতে চাওয়ার পর"
        },
        "p": [
          {
            "en": "The verse has six Arabic words: fa-da'a rabbahu anna ha'ula'i qawmun mujrimun, so he called on his Lord: these are a criminal people. It stands at a turning point. In 44:18 to 44:21 Musa (AS) has asked Fir'awn's people to hand over the servants of Allah, warned them not to exalt themselves against Allah, sought refuge from their threats, and at last asked only to be left alone. The two verses after it, 44:23 and 44:24, bring the command to leave by night and to let the sea lie still.",
            "bn": "আয়াতটিতে আরবি শব্দ ছয়টি: ফাদাআ রাব্বাহূ আন্না হা-উলা-ই কাওমুম মুজরিমূন, তখন তিনি তাঁর রবকে ডাকলেন: এরা এক অপরাধী সম্প্রদায়। আয়াতটি দাঁড়িয়ে আছে এক মোড়ে। ৪৪:১৮ থেকে ৪৪:২১ পর্যন্ত মূসা (আঃ) ফেরাউনের লোকদের বলেছেন আল্লাহর বান্দাদের তাঁর হাতে তুলে দিতে, আল্লাহর বিরুদ্ধে ঔদ্ধত্য না দেখাতে। তাদের হুমকি থেকে রবের কাছে আশ্রয় চেয়েছেন। শেষে শুধু এটুকু চেয়েছেন যে তাঁকে যেন নিজের মতো থাকতে দেওয়া হয়। পরের দুই আয়াত, ৪৪:২৩ ও ৪৪:২৪, নিয়ে আসে রাতে বেরিয়ে পড়ার আর সাগরকে স্থির রেখে যাওয়ার আদেশ।"
          },
          {
            "en": "Notice what the verse does not contain. There is no imperative in Musa's words, no 'destroy them' or 'punish them', and no call on anyone else to act. The only verb belongs to the narrator: he called. What follows anna is a statement about a people, given as the content of the call. The small particle fa at the start ties the call to what came before it, and the commentators spend most of their few lines on that link: what had happened before he called, and what the word mujrimun names.",
            "bn": "আয়াতে কী নেই, সেটাও লক্ষ করার মতো। মূসা (আঃ)-এর কথায় কোনো আদেশ নেই। 'ওদের ধ্বংস করুন' বা 'ওদের শাস্তি দিন' জাতীয় কিছু নেই, অন্য কাউকে কিছু করতে ডাকাও নেই। একমাত্র ক্রিয়াটি বর্ণনাকারীর: তিনি ডাকলেন। আন্না-র পরে যা আসে, তা এক সম্প্রদায় সম্পর্কে একটি খবর, আর সেটাই ডাকের বিষয়। শুরুর ছোট্ট ফা অব্যয়টি এ ডাককে আগের ঘটনার সঙ্গে বেঁধে দেয়। তাফসীরকারদের অল্প কয়েক লাইনের বেশিরভাগ গেছে এই যোগসূত্রে: ডাকার আগে কী ঘটেছিল, আর মুজরিমূন শব্দটি আসলে কী বোঝায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came Before the Call",
          "bn": "ডাকার আগে যা ঘটেছিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi says the phrase fa-da'a rabbahu contains an ellipsis: they disbelieved, so he called on his Lord. The Qur'an leaves the refusal unspoken because the verses before it have already made it plain. At-Tabari fills the gap with a list. Musa called on his Lord when they denied him, did not believe in him, did not hand over to him the servants of Allah, and resolved to kill him. Read beside 44:18 to 44:21, the list answers Musa's requests one by one, each refused in turn.",
            "bn": "কুরতুবী বলেন, ফাদাআ রাব্বাহূ কথাটির আগে একটি অংশ উহ্য আছে: তারা কুফরি করল, তাই তিনি তাঁর রবকে ডাকলেন। প্রত্যাখ্যানের কথাটা কুরআন আর মুখে আনেনি, কারণ আগের আয়াতগুলো তা স্পষ্ট করে দিয়েছে। তাবারী ফাঁকটা ভরেন একটা তালিকা দিয়ে। মূসা তাঁর রবকে ডেকেছিলেন যখন তারা তাঁকে মিথ্যাবাদী বলল, তাঁর উপর ঈমান আনল না, আল্লাহর বান্দাদের তাঁর হাতে তুলে দিল না, আর তাঁকে হত্যার মতলব আঁটল। ৪৪:১৮ থেকে ৪৪:২১ পাশে রেখে পড়লে দেখা যায়, তালিকাটা মূসার অনুরোধগুলোর জবাব। একটার পর একটা, সবই তারা ফিরিয়ে দিয়েছে।"
          },
          {
            "en": "The Muyassar keeps the occasion short: he called on his Lord when Fir'awn and his people denied him and did not believe in him. Ibn Kathir, in the Arabic, gives the call a longer preamble. When his stay among them grew long, and he had set Allah's proofs before them, and all of that only increased them in disbelief and obstinacy, he called on his Lord against them. The English abridgement of Ibn Kathir keeps the same order: a long stay, the proof established, and only then the prayer.",
            "bn": "মুয়াসসার উপলক্ষটা সংক্ষেপে বলে: ফেরাউন ও তার লোকেরা যখন তাঁকে মিথ্যাবাদী বলল আর তাঁর উপর ঈমান আনল না, তখন তিনি রবকে ডাকলেন। আরবি ইবন কাসীরে ডাকের আগে একটু দীর্ঘ ভূমিকা আছে। তাদের মাঝে তাঁর অবস্থান যখন দীর্ঘ হলো, তিনি তাদের সামনে আল্লাহর প্রমাণগুলো দাঁড় করালেন, আর এসব কিছু তাদের কুফরি ও জেদ শুধু বাড়িয়েই দিল, তখন তিনি তাদের বিরুদ্ধে রবকে ডাকলেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও একই ক্রম: দীর্ঘ অবস্থান, প্রমাণ প্রতিষ্ঠা, তারপর দু'আ।"
          },
          {
            "en": "None of the commentators has the call come early. In every account it follows refusal, and in Ibn Kathir's it follows a long stay in which Allah's proofs had been set before them. The order matters for the reader. Patient argument, a warning, a plea for refuge and a request to be left in peace all came first. Only when the door those verses held open had been shut did Musa (AS) take the matter to his Lord in these words. The verse is the end of a long road, not a reflex at the first insult.",
            "bn": "কোনো তাফসীরকারই ডাকটাকে তাড়াহুড়োর কাজ বলে দেখাননি। সব বর্ণনায় তা আসে প্রত্যাখ্যানের পরে। ইবন কাসীরের বর্ণনায় আসে এমন এক দীর্ঘ অবস্থানের পর, যখন আল্লাহর প্রমাণগুলো তাদের সামনে রাখা হয়ে গেছে। পাঠকের জন্য এই ক্রমটা গুরুত্বপূর্ণ। আগে এসেছে ধৈর্যের সঙ্গে যুক্তি, সতর্কবাণী, আশ্রয় প্রার্থনা, আর শান্তিতে থাকতে দেওয়ার অনুরোধ। ওই আয়াতগুলো যে দরজা খোলা রেখেছিল, তা বন্ধ হওয়ার পরই মূসা (আঃ) এই কথাগুলো নিয়ে রবের কাছে গেলেন। আয়াতটি এক দীর্ঘ পথের শেষ মাথা। প্রথম অপমানেই ছুড়ে দেওয়া প্রতিক্রিয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Crime Against Whom",
          "bn": "অপরাধ কার বিরুদ্ধে"
        },
        "p": [
          {
            "en": "At-Tabari first names who ha'ula'i, these, are: Fir'awn and his people. Then he glosses qawmun mujrimun in a single phrase: they associate partners with Allah and disbelieve in Him. The Muyassar uses the same pair, mushrikun bi-llah kafirun, and al-Baghawi reduces the gloss to one word, mushrikun. For these three, the crime Musa (AS) reports is first a crime against Allah: worship given to others besides Him, and the truth He sent refused when His messenger brought it to their door.",
            "bn": "তাবারী প্রথমে বলে দেন হা-উলা-ই, অর্থাৎ 'এরা' কারা: ফেরাউন ও তার লোকজন। তারপর কাওমুম মুজরিমূনের ব্যাখ্যা দেন এক বাক্যাংশে: তারা আল্লাহর সঙ্গে শরিক করে, তাঁকে অস্বীকার করে। মুয়াসসারও একই জোড়া শব্দ ব্যবহার করে, মুশরিকূনা বিল্লাহি কাফিরূন। বাগাভী ব্যাখ্যাটা নামিয়ে আনেন এক শব্দে: মুশরিকূন। এই তিনজনের কাছে মূসা (আঃ) যে অপরাধের খবর দিচ্ছেন, তা প্রথমত আল্লাহর বিরুদ্ধে অপরাধ। ইবাদত গেছে তিনি ছাড়া অন্যদের কাছে। আর তাঁর পাঠানো সত্য তাঁর রসূল তাদের দুয়ারে পৌঁছে দিলেও তারা তা ফিরিয়ে দিয়েছে।"
          },
          {
            "en": "Al-Qurtubi also begins with mushrikun, then adds a clause that widens the charge: they had refused to release the Children of Israel, and refused to believe. His gloss joins two refusals in one word. One is owed to Allah: faith in Him and in His messenger. The other is owed to people: the freedom of a community held in bondage. The request of 44:18, to hand over the servants of Allah, stands behind the second refusal, and al-Qurtubi keeps it inside the meaning of mujrimun rather than leaving it to the story.",
            "bn": "কুরতুবীও শুরু করেন মুশরিকূন দিয়ে, তারপর একটি অংশ জুড়ে অভিযোগটা আরও বড় করেন: তারা বনী ইসরাঈলকে ছেড়ে দিতে অস্বীকার করেছিল, ঈমান আনতেও অস্বীকার করেছিল। তাঁর ব্যাখ্যায় এক শব্দের ভেতরে দুটি প্রত্যাখ্যান। একটি আল্লাহর হক: তাঁর উপর ও তাঁর রসূলের উপর ঈমান। অন্যটি মানুষের হক: দাসত্বে আটকে থাকা এক জনগোষ্ঠীর মুক্তি। ৪৪:১৮ আয়াতের দাবি, আল্লাহর বান্দাদের হাতে তুলে দাও, এই দ্বিতীয় প্রত্যাখ্যানের পেছনে দাঁড়িয়ে আছে। কুরতুবী সেটা কাহিনির হাতে ছেড়ে না দিয়ে মুজরিমূন শব্দের অর্থের ভেতরেই রেখেছেন।"
          },
          {
            "en": "As-Sa'di reads the word by its weight rather than its content. They had committed a crime, he says, of the kind that calls for punishment to be hastened. His gloss looks ahead to what follows in 44:23 and 44:24. The commentators do not contradict one another here; they light different sides of one word. At-Tabari, the Muyassar and al-Baghawi say what the crime was. Al-Qurtubi adds whom else it harmed. As-Sa'di says what it had come to deserve, and in his reading Musa only reports it to the One who decides.",
            "bn": "সা'দী শব্দটিকে পড়েন তার বিষয় দিয়ে নয়, তার ওজন দিয়ে। তিনি বলেন, তারা এমন অপরাধ করেছিল, যা শাস্তিকে ত্বরান্বিত করার দাবি রাখে। তাঁর ব্যাখ্যার চোখ সামনের দিকে, ৪৪:২৩ ও ৪৪:২৪ আয়াতে যা ঘটবে তার দিকে। এখানে তাফসীরকারেরা পরস্পরের বিরোধিতা করছেন না। একই শব্দের ভিন্ন ভিন্ন দিকে আলো ফেলছেন। তাবারী, মুয়াসসার ও বাগাভী বলেন অপরাধটা কী ছিল। কুরতুবী যোগ করেন, তা আর কার ক্ষতি করেছিল। সা'দী বলেন, তা কিসের যোগ্য হয়ে উঠেছিল। আর তাঁর পাঠে মূসা শুধু খবরটা পৌঁছে দেন তাঁর কাছে, ফয়সালা যাঁর হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Made by Describing",
          "bn": "অবস্থা জানিয়েই দু'আ"
        },
        "p": [
          {
            "en": "The content of the call comes after anna, with a fatha, and al-Qurtubi explains it as bi-anna: he called on his Lord with this, that these are a criminal people. At-Tabari's paraphrase carries the same bi-anna. So the call has a content, and the content is a description. Musa (AS) tells his Lord what these people are. He does not, in this verse, tell Him what to do with them, and he does not set a time, a manner or a measure for whatever comes next.",
            "bn": "ডাকের বিষয়বস্তু এসেছে যবরযুক্ত আন্না-র পরে। কুরতুবী একে ব্যাখ্যা করেন বি-আন্না হিসেবে: তিনি তাঁর রবকে ডাকলেন এই কথা দিয়ে যে, এরা এক অপরাধী সম্প্রদায়। তাবারীর ব্যাখ্যাতেও একই বি-আন্না। অর্থাৎ ডাকের একটা বিষয় আছে, আর সেই বিষয়টা একটা বর্ণনা। মূসা (আঃ) তাঁর রবকে জানাচ্ছেন এরা কেমন লোক। এ আয়াতে তিনি বলছেন না তাদের নিয়ে কী করতে হবে। পরে যা আসবে, তার সময়, ধরন বা মাত্রাও তিনি ঠিক করে দিচ্ছেন না।"
          },
          {
            "en": "As-Sa'di makes this the heart of his short comment. Musa informed his Lord of their condition, he says, and this is a prayer made by the state, du'a bi-l-hal, which is more eloquent than a prayer made in words. He sets it beside another prayer of Musa's, in 28:24: rabbi inni li-ma anzalta ilayya min khayrin faqir, my Lord, I am in need of whatever good You send down to me. There too Musa (AS) names nothing he wants. He states his need and leaves the rest to the Lord he addresses.",
            "bn": "সা'দীর ছোট্ট মন্তব্যের প্রাণ এই কথাটাই। তিনি বলেন, মূসা তাঁর রবকে তাদের অবস্থার খবর দিলেন। এটা অবস্থা দিয়ে দু'আ, দু'আ বিল-হাল, যা মুখের কথার দু'আর চেয়ে বেশি মর্মস্পর্শী। এর পাশে তিনি রাখেন মূসার আরেকটি দু'আ, ২৮:২৪ আয়াতে: রাব্বি ইন্নী লিমা আনযালতা ইলাইয়্যা মিন খাইরিন ফাকীর, হে আমার রব, আপনি আমার প্রতি যে কল্যাণই নাযিল করবেন, আমি তার মুখাপেক্ষী। সেখানেও মূসা (আঃ) চাওয়ার জিনিসটার নাম নেননি। নিজের প্রয়োজনটুকু জানিয়েছেন, বাকিটা ছেড়ে দিয়েছেন যাঁকে ডাকছেন তাঁর হাতে।"
          },
          {
            "en": "The two prayers face opposite ways. In 28:24 Musa describes his own poverty; in 44:22 he describes the people who have wronged him. In both, the description is the request. It assumes a Listener who already knows, and who needs nothing explained to Him before He acts. As-Sa'di calls such a prayer more eloquent than words, and read that way the verse models a stance: setting the matter out truthfully before Allah, without inflating it and without prescribing the remedy, and trusting Him to judge what the truth requires and when it is due.",
            "bn": "দুটি দু'আর মুখ দুই দিকে। ২৮:২৪ আয়াতে মূসা বর্ণনা করছেন নিজের অভাব। ৪৪:২২ আয়াতে বর্ণনা করছেন সেই লোকদের, যারা তাঁর উপর অন্যায় করেছে। দুই জায়গাতেই বর্ণনাটাই প্রার্থনা। এর পেছনে আছে এমন এক শ্রোতার উপর ভরসা, যিনি আগেই জানেন, কাজ করার আগে যাঁকে কিছু বুঝিয়ে বলতে হয় না। সা'দী এমন দু'আকে মুখের কথার চেয়ে বেশি মর্মস্পর্শী বলেছেন। সেভাবে পড়লে আয়াতটি একটা অবস্থান শেখায়: বিষয়টা বাড়িয়ে না বলে, প্রতিকারের ব্যবস্থাপত্র না দিয়ে, সত্যভাবে আল্লাহর সামনে তুলে ধরা। তারপর ভরসা রাখা যে সত্য কী দাবি করে আর কখন, তা তিনিই ঠিক করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Called Against, Then Answered",
          "bn": "বিরুদ্ধে ডাক, তারপর সাড়া"
        },
        "p": [
          {
            "en": "Ibn Kathir frames the same six words more sharply. In his Arabic, Musa called on his Lord against them, da'a rabbahu 'alayhim, with a call that took effect upon them, nafadhat fihim. He then cites 10:88 and 10:89 as the same prayer told more fully, ending with Allah's word that it was accepted, and introduces our verse with the words: and so He said here. For Ibn Kathir, 44:22 is the brief report of a prayer whose fuller wording and acceptance Surah Yunus records.",
            "bn": "ইবন কাসীর একই ছয়টি শব্দকে আরও তীক্ষ্ণভাবে দেখেন। তাঁর আরবি তাফসীরে মূসা তাদের বিরুদ্ধে রবকে ডেকেছিলেন, দাআ রাব্বাহূ আলাইহিম, এমন এক ডাকে যা তাদের উপর কার্যকর হয়েছিল, নাফাযাত ফীহিম। এরপর তিনি ১০:৮৮ ও ১০:৮৯ আয়াত উল্লেখ করেন, সেখানে একই দু'আ আরও বিস্তারে এসেছে, আর শেষে আল্লাহ জানিয়েছেন দু'আটি কবুল হয়েছে। তারপর আমাদের আয়াতটি আনেন এই কথায়: আর এখানেও তিনি এভাবেই বলেছেন। ইবন কাসীরের কাছে ৪৪:২২ সেই দু'আর সংক্ষিপ্ত খবর, যার পূর্ণ ভাষা আর কবুল হওয়ার কথা সূরা ইউনুসে আছে।"
          },
          {
            "en": "Ibn Kathir and as-Sa'di do not disagree about what happened, but they stress different sides of it. For Ibn Kathir the six words are a prayer against a people, and it was answered. For as-Sa'di they are a report of a people's state, set before Allah who judges, and the report itself is the prayer. This article keeps both framings as the two commentators give them, without choosing between them. In both, what follows the call is Allah's doing and not Musa's.",
            "bn": "কী ঘটেছিল, তা নিয়ে ইবন কাসীর ও সা'দীর মধ্যে মতভেদ নেই। তবে দুজন জোর দেন দুই দিকে। ইবন কাসীরের কাছে ছয়টি শব্দ এক সম্প্রদায়ের বিরুদ্ধে দু'আ, আর সে দু'আ কবুল হয়েছে। সা'দীর কাছে এগুলো এক সম্প্রদায়ের অবস্থার খবর, যা জানানো হচ্ছে বিচারকর্তার কাছে, আর খবরটাই দু'আ। এ প্রবন্ধ দুটি দৃষ্টিভঙ্গিই রাখছে, যেভাবে দুই তাফসীরকার দিয়েছেন, কোনোটিকে বেছে না নিয়ে। দুই পাঠেই ডাকের পরে যা ঘটে, তা আল্লাহর কাজ, মূসার নয়।"
          },
          {
            "en": "The answer itself is left unspoken between the verses. At-Tabari, commenting on 44:23, says the words contain an omission understood from context: his Lord answered him, saying, then travel by night with My servants. Al-Qurtubi has the same on that verse: We answered his prayer and revealed to him. Al-Baghawi says it in one line under 44:22: Allah answered him and commanded him to travel by night. Ibn Kathir adds that the command was to bring the Children of Israel out from among them without Fir'awn's order, consultation or permission.",
            "bn": "সাড়াটা নিজে দুই আয়াতের মাঝখানে না-বলা রয়ে গেছে। তাবারী ৪৪:২৩ আয়াতের আলোচনায় বলেন, এখানে একটা অংশ উহ্য, প্রসঙ্গ থেকেই যা বোঝা যায়: তাঁর রব তাঁকে সাড়া দিয়ে বললেন, তাহলে আমার বান্দাদের নিয়ে রাতে বেরিয়ে পড়ো। কুরতুবীও ওই আয়াতে একই কথা বলেন: আমি তাঁর দু'আয় সাড়া দিলাম, তাঁর কাছে ওহি পাঠালাম। বাগাভী ৪৪:২২ আয়াতের নিচেই এক লাইনে বলে দেন: আল্লাহ তাঁর ডাকে সাড়া দিলেন আর রাতে বেরিয়ে পড়ার আদেশ দিলেন। ইবন কাসীর যোগ করেন, আদেশটা ছিল ফেরাউনের হুকুম, পরামর্শ বা অনুমতি ছাড়াই বনী ইসরাঈলকে তাদের মাঝখান থেকে বের করে আনার।"
          }
        ]
      },
      {
        "h": {
          "en": "Freed by Night, Not by War",
          "bn": "যুদ্ধে নয়, রাতের যাত্রায় মুক্তি"
        },
        "p": [
          {
            "en": "Set the two ends of the passage side by side. In 44:18 Musa (AS) asked Fir'awn's people to hand over the servants of Allah. They refused, and that refusal is part of what al-Qurtubi folds into mujrimun. In 44:23 the answer gives him those same servants by another route: travel with them by night. At-Tabari, on that verse, says who they are: those who believed Musa and followed him, as against those who denied him, and in that day the people of that description were the Children of Israel.",
            "bn": "অংশটির দুই প্রান্ত পাশাপাশি রাখুন। ৪৪:১৮ আয়াতে মূসা (আঃ) ফেরাউনের লোকদের বলেছিলেন আল্লাহর বান্দাদের তাঁর হাতে তুলে দিতে। তারা রাজি হয়নি, আর কুরতুবী সেই অস্বীকৃতিকেও মুজরিমূন শব্দের ভেতরে ধরেছেন। ৪৪:২৩ আয়াতে জবাব সেই বান্দাদেরই তাঁর হাতে দেয়, অন্য পথে: তাদের নিয়ে রাতে বেরিয়ে পড়ো। তাবারী ওই আয়াতে বলেন তারা কারা। যারা মূসাকে সত্য বলে মেনেছিল আর তাঁর অনুসরণ করেছিল, যারা তাঁকে মিথ্যাবাদী বলেছিল তারা নয়। সেকালে এই গুণের মানুষ ছিল বনী ইসরাঈল।"
          },
          {
            "en": "The answer does not send Musa to fight, to curse again, or to take anything from those who had wronged him. It sends him to walk, at night, with the people he came to free, and it warns him that he will be pursued. What then happens to the pursuers belongs to the verses that follow and is not retold here. Ibn Kathir's phrase, without Fir'awn's permission, marks the turn. The release Musa had asked for as a request no longer waits on the consent of the man who had refused it.",
            "bn": "জবাব মূসাকে যুদ্ধ করতে পাঠায় না, আবার অভিশাপ দিতে বলে না, অন্যায়কারীদের কাছ থেকে কিছু কেড়ে নিতেও বলে না। তাঁকে পাঠায় রাতের আঁধারে হেঁটে যেতে, যাদের মুক্ত করতে এসেছিলেন তাদের সঙ্গে নিয়ে। সঙ্গে সতর্ক করে দেয় যে পেছনে ধাওয়া আসবে। ধাওয়াকারীদের পরিণতি পরের আয়াতগুলোর বিষয়, এখানে তা আর বলা হচ্ছে না। ইবন কাসীরের কথাটা, ফেরাউনের অনুমতি ছাড়াই, মোড় ঘোরার জায়গাটা দেখিয়ে দেয়। যে মুক্তি মূসা অনুরোধ করে চেয়েছিলেন, তা আর সেই লোকের সম্মতির অপেক্ষায় থাকে না, যে তা ফিরিয়ে দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verdict Bound to Its Age",
          "bn": "নিজ যুগে বাঁধা এক রায়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports what one prophet said to his Lord about Fir'awn and his people, in one age, after a refusal the Qur'an has just narrated. It describes them, and it licenses nothing against any living Egyptian, or against any other people or community today. It gives no one leave to call a nation criminal, to curse a people, or to reach for this verse in a quarrel. Musa's words went to Allah and were answered by revelation; no one today speaks with that warrant.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি জানায়, একজন নবী তাঁর রবকে ফেরাউন ও তার লোকদের সম্পর্কে কী বলেছিলেন, এক নির্দিষ্ট যুগে, এমন এক প্রত্যাখ্যানের পর যার কথা কুরআন এইমাত্র বলেছে। আয়াত তাদের বর্ণনা দেয়। আজকের কোনো মিসরীয়, কিংবা অন্য কোনো জাতি বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। কোনো জাতিকে অপরাধী বলার, কোনো সম্প্রদায়কে অভিশাপ দেওয়ার, কিংবা ঝগড়ার সময় এ আয়াত টেনে আনার অধিকার কাউকে দেয় না। মূসার কথা গিয়েছিল আল্লাহর কাছে, আর জবাব এসেছিল ওহির মাধ্যমে। আজ কেউ সেই অধিকার নিয়ে কথা বলে না।"
          },
          {
            "en": "None of the commentators fetched for this verse attaches a hadith to it, and none gives an occasion of revelation; the verse sits inside a narrative. Al-Qurtubi, on 44:23, notes that Fir'awn's pursuit, his drowning and Musa's rescue are told in al-Baqara, al-A'raf, Ta Ha, al-Shu'ara and Yunus, and declines to repeat them. Ma'arif al-Qur'an, whose comment covers 44:20 to 44:23, spends its lines on the threat of stoning in 44:20 and says nothing further on this verse.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, নাযিলের কোনো উপলক্ষও দেয়নি। আয়াতটি একটি কাহিনির ভেতরে বসানো। কুরতুবী ৪৪:২৩ আয়াতে বলেন, ফেরাউনের পিছু ধাওয়া, তার ডুবে মরা আর মূসার রক্ষা পাওয়ার কথা সূরা বাকারা, আ'রাফ, ত্বাহা, শু'আরা ও ইউনুসে এসেছে, তাই তিনি আর পুনরাবৃত্তি করেননি। মাআরিফুল কুরআনের আলোচনা ৪৪:২০ থেকে ৪৪:২৩ জুড়ে, কিন্তু তার লাইনগুলো গেছে ৪৪:২০ আয়াতের পাথর মারার হুমকিতে। এ আয়াত নিয়ে আর কিছু বলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking a Grievance to Allah",
          "bn": "নালিশ নিয়ে আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "What can a reader take from six words spoken at the end of a long mission? First, the order. Musa (AS) argued, warned, sought refuge, and asked only to be left in peace before he brought these people before his Lord. Patience and plain speech come first; the complaint to Allah comes when they have run their course. A grievance carried to Allah at the first sting may be only anger looking for an ally.",
            "bn": "দীর্ঘ এক দাওয়াতের শেষে উচ্চারিত ছয়টি শব্দ থেকে পাঠক কী নিতে পারেন? প্রথমত, ক্রম। এই লোকদের কথা রবের কাছে তোলার আগে মূসা (আঃ) যুক্তি দিয়েছেন, সতর্ক করেছেন, আশ্রয় চেয়েছেন, শুধু শান্তিতে থাকতে দেওয়ার অনুরোধ করেছেন। আগে ধৈর্য আর সোজা কথা। সেগুলো শেষ সীমায় পৌঁছালে তবে আল্লাহর কাছে নালিশ। প্রথম আঘাতেই যে নালিশ আল্লাহর কাছে নেওয়া হয়, তা হয়তো নিছক রাগ, যে একজন সঙ্গী খুঁজছে।"
          },
          {
            "en": "Second, the address. He did not complain to the crowd, gather a faction, or answer harm with harm. He told his Lord the truth about what he faced, in as few words as the truth required, and as-Sa'di's reading shows that such honest description is itself a prayer. Third, the answer. It came as a way out for the oppressed, not as a part for Musa in avenging himself. Whoever is wronged today may say, as truthfully as he can, what has been done to him, and leave the judgement where Musa left it.",
            "bn": "দ্বিতীয়ত, কার কাছে বলা। তিনি লোকের ভিড়ে নালিশ করেননি, দল পাকাননি, ক্ষতির জবাবে ক্ষতি করেননি। যা তিনি মোকাবিলা করছিলেন, তার সত্যটা রবকে বলেছেন, সত্য যতটুকু শব্দ চায় ততটুকুতেই। সা'দীর পাঠ দেখায়, এমন সৎ বর্ণনাই একটা দু'আ। তৃতীয়ত, জবাব। তা এসেছে মজলুমদের বেরোনোর পথ হয়ে, মূসার নিজের প্রতিশোধ নেওয়ার কোনো ভূমিকা হয়ে নয়। আজ যার উপর অন্যায় হয়, সে যতটা সম্ভব সত্যভাবে বলতে পারে তার সঙ্গে কী করা হয়েছে। তারপর ফয়সালা রেখে দিতে পারে সেখানে, যেখানে মূসা রেখেছিলেন।"
          }
        ]
      }
    ]
  },
  "44:25": {
    "sections": [
      {
        "h": {
          "en": "Silence Where the Drowning Was",
          "bn": "ডুবে যাওয়ার জায়গায় নীরবতা"
        },
        "p": [
          {
            "en": "Kam taraku min jannatin wa-ʿuyun: how many gardens and springs they left behind. The verse before it ends with a command and a promise. Musa (AS) is told to leave the sea in its stillness, because the army coming after him is a host to be drowned (44:24). Then the passage moves straight to the aftermath. The drowning itself is not narrated here. Between the promise and the gardens standing empty the text leaves a gap, and the reader knows what filled it.",
            "bn": "কাম তারাকূ মিন জান্নাতিউ ওয়া উয়ূন: কত উদ্যান আর ঝর্ণা তারা ছেড়ে গেল! আগের আয়াতের শেষে আছে আদেশ আর প্রতিশ্রুতি। মূসা (আঃ)-কে বলা হয়েছে সমুদ্রকে স্থির অবস্থায় রেখে যেতে, কারণ পিছু ধাওয়া করা বাহিনী ডুবে মরবে (৪৪:২৪)। এরপর বর্ণনা সরাসরি চলে যায় পরের অবস্থায়। ডুবে যাওয়ার দৃশ্য এখানে নেই। প্রতিশ্রুতি আর খালি পড়ে থাকা বাগানের মাঝখানে কুরআন একটা ফাঁক রেখে দেয়। সে ফাঁকে কী ঘটেছিল, পাঠক তা নিজেই বোঝে।"
          },
          {
            "en": "The commentators fill that gap in a few words and no more. Al-Baghawi puts it in brackets inside the verse itself: they left, meaning after the drowning. At-Tabari says Allah is telling how much Pharaoh and his people left after their destruction and after He drowned them. Al-Muyassar, whose note covers 44:25 to 44:27, opens with nearly the same words. None of them retells the drowning under this verse. What they share is the order of events: first the end of the people, then the count of what they left.",
            "bn": "তাফসীরকারেরা এই ফাঁক পূরণ করেন অল্প কথায়, তার বেশি নয়। বাগাভী আয়াতের ভেতরেই বন্ধনী দিয়ে জুড়ে দেন: তারা ছেড়ে গেল, মানে ডুবে যাওয়ার পর। তাবারী বলেন, আল্লাহ জানাচ্ছেন ফেরাউন ও তার লোকেরা ধ্বংস হওয়ার পর, আল্লাহ তাদের ডুবিয়ে দেওয়ার পর, কত কিছু ছেড়ে গেল। মুয়াসসারের টীকা ৪৪:২৫ থেকে ৪৪:২৭ পর্যন্ত একসঙ্গে ধরে, আর শুরু হয় প্রায় একই কথা দিয়ে। এ আয়াতের আলোচনায় কেউই ডুবে যাওয়ার কাহিনি নতুন করে বলেন না। সবার কথায় মিল শুধু ঘটনার ক্রমে: আগে জাতির পরিণতি, তারপর তাদের ফেলে যাওয়া সম্পদের হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Kam, a Word for Abundance",
          "bn": "কাম: প্রাচুর্য বোঝানোর শব্দ"
        },
        "p": [
          {
            "en": "The verse opens with kam, how many. It is not asking for a figure. Al-Qurtubi's whole comment on the word is a single clause: kam here is for taktheer, for conveying a great number. The word does the work a long list would do. It tells the listener there was a great deal, without stopping to count it. Al-Qurtubi then says that the meaning of this verse has already been treated in full in Surat al-Shuʿara, and he adds nothing more under it.",
            "bn": "আয়াত শুরু হয় কাম শব্দ দিয়ে, মানে কত। এখানে কোনো সংখ্যা জানতে চাওয়া হচ্ছে না। শব্দটি নিয়ে কুরতুবীর পুরো মন্তব্য এক বাক্যের: এখানে কাম এসেছে তাকসীরের জন্য, অর্থাৎ বেশি পরিমাণ বোঝাতে। লম্বা তালিকা যে কাজ করত, এই ছোট্ট শব্দ সে কাজ সেরে দেয়। থেমে গুনে না দেখিয়েই শ্রোতাকে জানিয়ে দেয়, জিনিস ছিল প্রচুর। এরপর কুরতুবী বলেন, এ আয়াতের অর্থ সূরা শুআরায় পুরোপুরি আলোচনা হয়ে গেছে। এখানে তিনি আর কিছু যোগ করেন না।"
          },
          {
            "en": "That economy deserves notice. The verse gives no number, and no commentary gathered on it gives one either. Under this verse, none of them names a town, a river or a region. The gardens are left as gardens and the springs as springs. What the verse asks of its listener is a sense of scale rather than a survey: so much had been in their hands, and every bit of it stayed where it was when they were gone.",
            "bn": "কথার এই সংযম খেয়াল করার মতো। আয়াত কোনো সংখ্যা দেয় না, এর উপর যেসব তাফসীর সংগ্রহ করা হয়েছে সেগুলোও দেয় না। এ আয়াতের আলোচনায় কেউ কোনো শহর, নদী বা অঞ্চলের নাম নেন না। বাগান বাগানই থাকে, ঝর্ণা ঝর্ণাই। শ্রোতার কাছে আয়াত জরিপ চায় না, চায় পরিমাণের একটা আন্দাজ। কত কিছুই না তাদের হাতে ছিল! তারা চলে যাওয়ার পর তার সবটাই যেখানে ছিল সেখানে পড়ে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Orchards, Rivers and Wells",
          "bn": "বাগিচা, নদী আর কূপ"
        },
        "p": [
          {
            "en": "At-Tabari defines both nouns. The jannat are orchards and trees; that, he says, is what gardens are. The ʿuyun are the sources of water that used to burst forth within their gardens. He then runs on into the next verse and mentions the crops standing in their fields, so the picture is of a working land: trees, the water that fed them, and grain growing beside them. Al-Muyassar paints the same scene in brighter colours: orchards and verdant gardens, and springs of running water.",
            "bn": "তাবারী দুটি শব্দেরই অর্থ বলে দেন। জান্নাত মানে বাগিচা আর গাছপালা, তাঁর ভাষায় এটাই উদ্যান। আর উয়ূন হলো সেই পানির উৎস, যা তাদের বাগানের ভেতর ফুটে বের হতো। এরপর তিনি পরের আয়াতে ঢুকে মাঠে দাঁড়িয়ে থাকা ফসলের কথাও বলেন। ফলে চোখের সামনে ভেসে ওঠে কর্মমুখর এক জনপদ: গাছ, সেই গাছকে বাঁচিয়ে রাখা পানি, আর পাশেই বেড়ে ওঠা শস্য। মুয়াসসার একই দৃশ্য আঁকে আরও উজ্জ্বল রঙে: বাগিচা আর সবুজ-সতেজ উদ্যান, আর বয়ে চলা পানির ঝর্ণা।"
          },
          {
            "en": "Ibn Kathir's Arabic note is the shortest of all. The gardens, he says, are orchards. Then, beside the words and springs and crops, he writes that what is meant is rivers and wells. The English abridgement of his tafsir, whose section runs from 44:17 to 44:26, carries the same gloss: this refers to rivers and wells. So where at-Tabari speaks of springs that rose inside the gardens, Ibn Kathir names rivers and wells as the water that is meant.",
            "bn": "ইবন কাসীরের আরবি টীকা সবচেয়ে ছোট। তিনি বলেন, উদ্যান মানে বাগিচা। এরপর ঝর্ণা ও শস্য শব্দ দুটির পাশে লেখেন, এর দ্বারা উদ্দেশ্য নদী আর কূপ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে এ অংশ ৪৪:১৭ থেকে ৪৪:২৬ পর্যন্ত একসঙ্গে আলোচিত, আর সেখানেও একই ব্যাখ্যা: এর মানে নদী আর কূপ। তাবারী যেখানে বাগানের ভেতর ফুটে ওঠা ঝর্ণার কথা বলেন, ইবন কাসীর সেখানে পানির উৎস হিসেবে নাম নেন নদী আর কূপের।"
          },
          {
            "en": "These are differences of detail, and none of the texts sets them against each other. Springs rising inside the gardens, water running freely, rivers and wells: each gloss points to water, and each keeps the water beside the trees. In these texts a garden is never trees alone. It is trees with a source that keeps them alive. The verse holds the two words together, and the commentators read them together as the picture of a land that wanted for nothing.",
            "bn": "এগুলো খুঁটিনাটির পার্থক্য। কোনো তাফসীরই এগুলোকে পরস্পরের বিপরীতে দাঁড় করায় না। বাগানের ভেতর ফুটে ওঠা ঝর্ণা, অবাধে বয়ে চলা পানি, নদী আর কূপ, সব ব্যাখ্যাই পানির দিকে ইঙ্গিত করে। আর প্রতিটি ব্যাখ্যা পানিকে রাখে গাছের পাশেই। এসব তাফসীরে বাগান কখনো শুধু গাছের সারি নয়, সঙ্গে থাকে তাকে বাঁচিয়ে রাখার উৎস। আয়াত শব্দ দুটিকে পাশাপাশি রাখে, আর তাফসীরকারেরা দুটিকে মিলিয়ে দেখেন এমন দেশের ছবি হিসেবে, যার কোনো কিছুর অভাব ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Pair in al-Shuʿara",
          "bn": "শুআরায় একই জোড়া শব্দ"
        },
        "p": [
          {
            "en": "Al-Qurtubi's cross-reference sends the reader back to Surat al-Shuʿara. The matching words about Pharaoh's people there stand at 26:57: So We removed them from gardens and springs. The same pair of nouns, jannat and ʿuyun, appears in both places. Al-Qurtubi gives no verse number, but in that surah's account of Musa (AS) this is where the gardens and springs come. That verse has its own reflection, and its material is not repeated here.",
            "bn": "কুরতুবীর ইঙ্গিত পাঠককে ফিরিয়ে নেয় সূরা শুআরায়। ফেরাউনের লোকদের সম্পর্কে সেখানে মিলে যাওয়া শব্দগুলো আছে ২৬:৫৭ আয়াতে: এভাবে আমি তাদের বের করে দিলাম উদ্যান আর ঝর্ণা থেকে। জান্নাত আর উয়ূন, একই জোড়া শব্দ দুই জায়গাতেই এসেছে। কুরতুবী আয়াত নম্বর দেন না। তবে সে সূরায় মূসা (আঃ)-এর বর্ণনায় উদ্যান আর ঝর্ণার কথা আসে এখানেই। ওই আয়াত নিয়ে আলাদা আলোচনা আছে, তাই সেখানকার কথা এখানে আর বলা হচ্ছে না।"
          },
          {
            "en": "Set side by side, the two verses tell the event from two directions. In 26:57 Allah speaks: We removed them. Here the verb belongs to them: they left. Neither wording cancels the other. Seen from Allah's side it was a removal; seen from theirs it was a leaving, and a leaving they had not chosen. The same gardens appear once as taken from them and once as left by them, and both views end in the same empty orchards.",
            "bn": "দুটি আয়াত পাশাপাশি রাখলে দেখা যায়, একই ঘটনা দুই দিক থেকে বলা হয়েছে। ২৬:৫৭ আয়াতে আল্লাহ নিজে বলছেন: আমি তাদের বের করে দিলাম। এখানে ক্রিয়াটি তাদের: তারা ছেড়ে গেল। কোনো বর্ণনাই অন্যটিকে বাতিল করে না। আল্লাহর দিক থেকে দেখলে এ ছিল বের করে দেওয়া। তাদের দিক থেকে দেখলে ছেড়ে যাওয়া, আর সে যাওয়া তারা নিজেরা বেছে নেয়নি। একই বাগান এক জায়গায় তাদের কাছ থেকে কেড়ে নেওয়া, আরেক জায়গায় তাদের ফেলে যাওয়া। দুই দৃষ্টিই শেষ হয় একই খালি বাগিচায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoyment Given for a Season",
          "bn": "কিছুকালের জন্য দেওয়া ভোগ"
        },
        "p": [
          {
            "en": "As-Saʿdi folds the verse into a single sentence. They left, he writes, what they had been given to enjoy of the life of this world, and he quotes 44:25 to 44:27 together as the statement of it. His verb is passive, muttiʿu bihi: they were given it to enjoy. His line says nothing of their having made this wealth. In his reading the gardens and springs were provision handed to them, and what is handed over for enjoyment in this world is, by its nature, left behind.",
            "bn": "সা'দী আয়াতটিকে এক বাক্যে গুটিয়ে আনেন। তিনি লেখেন, দুনিয়ার জীবনের যা কিছু তাদের ভোগ করতে দেওয়া হয়েছিল, তা তারা ছেড়ে গেল। এর প্রমাণ হিসেবে তিনি ৪৪:২৫ থেকে ৪৪:২৭ একসঙ্গে উদ্ধৃত করেন। তাঁর ক্রিয়াপদটি কর্মবাচ্যে, মুত্তিউ বিহি: তাদের তা ভোগ করতে দেওয়া হয়েছিল। এ সম্পদ তারা নিজেরা গড়েছিল, এমন কোনো কথা তাঁর বাক্যে নেই। তাঁর পাঠে উদ্যান আর ঝর্ণা ছিল তাদের হাতে তুলে দেওয়া রিজিক। আর দুনিয়ায় যা ভোগের জন্য দেওয়া হয়, স্বভাবতই একদিন তা ফেলে যেতে হয়।"
          },
          {
            "en": "His sentence goes on to say who received it afterwards, a question the surah itself raises at 44:28. That belongs to that verse, and this article leaves it there. What 44:25 holds on its own is the leaving. The list does continue, with crops and noble places in 44:26 and the comfort they used to delight in at 44:27, before the passage turns to what came after. Here the verse stops at the gardens and the water, and lets that be enough.",
            "bn": "তাঁর বাক্য এগিয়ে গিয়ে এটাও বলে, পরে এসবের মালিক কে হলো। সে প্রশ্ন সূরা নিজেই তুলেছে ৪৪:২৮ আয়াতে। সেটা ওই আয়াতের আলোচনা, এ লেখা তাই সেখানেই রেখে দিচ্ছে। ৪৪:২৫ আয়াতের নিজের বিষয় শুধু ছেড়ে যাওয়া। তালিকা অবশ্য থামে না। ৪৪:২৬ আয়াতে আসে শস্যক্ষেত আর অভিজাত স্থান, ৪৪:২৭ আয়াতে সেই বিলাস যাতে তারা মেতে থাকত। তারপর বর্ণনা চলে যায় পরের ঘটনায়। এখানে আয়াত থামে উদ্যান আর পানিতে, আর এটুকুই যথেষ্ট মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sources Fall Silent",
          "bn": "যেখানে তাফসীর নীরব"
        },
        "p": [
          {
            "en": "It is worth saying plainly how little the sources say. Each commentary gathered on this verse runs to a line or a few lines. Ma'arif al-Qur'an's note on this group of verses, 44:24 to 44:27, is given entirely to the stillness of the sea and says nothing about gardens or springs. None of these texts, under this verse, describes where the gardens lay, how large they were, what grew in them, or where the water ran.",
            "bn": "তাফসীরগুলো এখানে কত কম বলে, সেটা সোজাসুজি বলে রাখা ভালো। এ আয়াতের উপর সংগ্রহ করা প্রতিটি তাফসীর এক লাইন থেকে বড়জোর কয়েক লাইন। মাআরিফুল কুরআনের টীকা ৪৪:২৪ থেকে ৪৪:২৭ পর্যন্ত আয়াতগুলো একসঙ্গে ধরে, কিন্তু পুরোটাই সমুদ্রের স্থির থাকা নিয়ে। উদ্যান বা ঝর্ণা নিয়ে সেখানে কোনো কথা নেই। এ আয়াতের আলোচনায় কোনো তাফসীরই বলে না বাগানগুলো কোথায় ছিল, কত বড় ছিল, তাতে কী জন্মাত, বা পানি কোথা দিয়ে বইত।"
          },
          {
            "en": "No commentary gathered here attaches a hadith to this verse, and none reports an occasion of revelation for it. The verse sits inside a narrative, and its placement is its context: it follows the promise that the pursuing army would be drowned (44:24) and opens the list of what that army left. Anything beyond that would have to be brought in from elsewhere, and this article does not bring it in. The commentators were content to let these few words carry their own weight, and the reader can do the same.",
            "bn": "এখানে সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেয়নি। আয়াতটি কোন উপলক্ষে নাজিল হয়েছে, সে কথাও কেউ বলেনি। আয়াতটি একটা কাহিনির ভেতরে বসানো, আর সেই অবস্থানই এর প্রেক্ষাপট। পিছু ধাওয়া করা বাহিনী ডুবে মরবে, এই প্রতিশ্রুতির পরেই এর জায়গা (৪৪:২৪)। আর এখান থেকেই শুরু সেই বাহিনীর ফেলে যাওয়া জিনিসের তালিকা। এর বাইরে কিছু বলতে হলে অন্য জায়গা থেকে আনতে হবে, এ লেখা তা আনছে না। তাফসীরকারেরা এই অল্প কটি শব্দের উপর বাড়তি কিছু চাপাননি, শব্দগুলো নিজেরাই যথেষ্ট। পাঠকও সেভাবেই পড়তে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Condemned People, No Licence",
          "bn": "দণ্ডিত জাতি, কোনো ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "A word of care belongs here. The verse speaks of a particular people whom the Qur'an condemns, Pharaoh and his people, and it speaks only of what it names: that they were destroyed and left their gardens and springs behind. It licenses nothing against any living person or community. It gives no ground for treating anyone alive today as their heirs in guilt, and no ground for reading present-day quarrels into an account the Qur'an has already closed.",
            "bn": "এখানে একটু সাবধান হওয়া দরকার। আয়াতটি নির্দিষ্ট এক জাতির কথা বলে, যাদের কুরআন দোষী সাব্যস্ত করেছে: ফেরাউন আর তার লোকজন। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। তারা ধ্বংস হয়েছিল, আর উদ্যান ও ঝর্ণা পেছনে ফেলে গিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজকের কাউকে তাদের অপরাধের উত্তরাধিকারী ভাবার ভিত্তিও এখানে নেই। কুরআন যে হিসাব মিটিয়ে দিয়েছে, তাতে আজকের বিবাদ টেনে আনারও সুযোগ নেই।"
          },
          {
            "en": "Read in its place, the verse points the other way. Its listener is not invited to look down on a people long gone, but to look at what lies in their own hands. The commentators speak of orchards and water, of things given to be enjoyed. Every reader holds something of that kind, and most of us hold it without thinking of the day it will pass to other hands. The verse asks whether we hold it as Pharaoh's people held theirs, settled in it as if it would never be left behind.",
            "bn": "জায়গামতো পড়লে আয়াতের ইশারা উল্টো দিকে। বহু আগে চলে যাওয়া এক জাতিকে তুচ্ছ চোখে দেখতে শ্রোতাকে ডাকা হচ্ছে না। ডাকা হচ্ছে নিজের হাতে কী আছে তা দেখতে। তাফসীরকারেরা বলেন বাগিচা আর পানির কথা, ভোগ করতে দেওয়া জিনিসের কথা। এমন কিছু প্রত্যেক পাঠকের হাতেই আছে। আর আমরা বেশিরভাগই তা আঁকড়ে রাখি, অন্যের হাতে চলে যাওয়ার দিনটার কথা না ভেবেই। আয়াত জানতে চায়, আমরাও কি ফেরাউনের লোকদের মতো তাতে জেঁকে বসেছি, যেন এসব কোনোদিন ফেলে যেতে হবে না?"
          }
        ]
      },
      {
        "h": {
          "en": "Counting What Stays Behind",
          "bn": "যা পড়ে থাকে তার হিসাব"
        },
        "p": [
          {
            "en": "Kam, how many, is a word that suits a reckoning. The verse counts nothing out, yet it puts the reader in the posture of someone tallying what was left. That posture can be turned inward. A life also gathers its gardens: a home, savings, a name, work that took years. The verse does not condemn these, and in as-Saʿdi's words they were things given to be enjoyed. The fault the surah has named lies elsewhere: Musa (AS) warned them not to be haughty with Allah (44:19), and called them a criminal people (44:22).",
            "bn": "কাম, অর্থাৎ কত, শব্দটা হিসাব কষার সঙ্গে মানানসই। আয়াত কিছুই গুনে দেখায় না, তবু পাঠককে দাঁড় করিয়ে দেয় ফেলে যাওয়া জিনিসের হিসাব মেলানো মানুষের জায়গায়। এই দৃষ্টি নিজের দিকেও ফেরানো যায়। একটা জীবনও নিজের বাগান জমায়: ঘর, সঞ্চয়, সুনাম, বছরের পর বছরের পরিশ্রম। আয়াত এগুলোকে দোষ দেয় না। সা'দীর ভাষায় এসব ভোগের জন্য দেওয়া জিনিস। সূরা যে দোষের কথা বলেছে তা অন্য জায়গায়। মূসা (আঃ) তাদের সাবধান করেছিলেন আল্লাহর বিরুদ্ধে ঔদ্ধত্য না দেখাতে (৪৪:১৯), আর তাদের বলেছিলেন অপরাধী জাতি (৪৪:২২)।"
          },
          {
            "en": "So the question the verse leaves is practical. What am I holding as though it will always stay with me? The gardens went nowhere; their owners did. Whatever is planted and kept in this world stays in this world, standing where it stood when its keeper is gone. The verse does not ask us to stop planting. It asks us to plant knowing that we will leave the garden, and to count, before that day, how much of what we hold will simply be left behind.",
            "bn": "তাই আয়াত যে প্রশ্ন রেখে যায়, তা একেবারে বাস্তব। কোন জিনিস আমি এমনভাবে আঁকড়ে আছি, যেন তা চিরকাল আমার সঙ্গেই থাকবে? বাগান কোথাও যায়নি, গেছে তার মালিকেরা। দুনিয়ায় যা লাগানো হয় আর আগলে রাখা হয়, তা দুনিয়াতেই থেকে যায়। যে আগলে রেখেছিল সে চলে গেলেও জিনিসটা দাঁড়িয়ে থাকে আগের জায়গায়। আয়াত গাছ লাগানো বন্ধ করতে বলে না। বলে, বাগান ছেড়ে যেতে হবে জেনেই গাছ লাগাতে। আর সেদিন আসার আগেই হিসাব করে দেখতে, হাতে যা আছে তার কতটুকু শুধু পেছনে পড়ে থাকবে।"
          }
        ]
      }
    ]
  },
  "44:29": {
    "sections": [
      {
        "h": {
          "en": "Eight Words After the Inheritance",
          "bn": "উত্তরাধিকারের পরে আটটি শব্দ"
        },
        "p": [
          {
            "en": "Fa-ma bakat ʿalayhim al-samaʾu wa-l-arḍu wa-ma kanu munzarin: and the sky and the earth did not weep for them, nor were they given respite. The four verses before it count what Pharaoh's people left behind, from gardens and springs to the ease they once enjoyed, and close with another people inheriting all of it (44:25 to 44:28). This verse is the last word on the drowned. In 44:30 the passage turns to the Children of Israel and what they were saved from.",
            "bn": "ফামা বাকাত আলাইহিমুস সামাউ ওয়াল আরদু ওয়ামা কানূ মুনযারীন: তাদের জন্য আসমান ও যমীন কাঁদেনি, আর তাদের অবকাশও দেওয়া হয়নি। এর আগের চারটি আয়াত গুনে দেখায় ফেরাউনের লোকেরা কী কী ফেলে গেল, বাগান আর ঝর্ণা থেকে শুরু করে সেই আরাম-আয়েশ পর্যন্ত। শেষে বলা হয়, অন্য এক জাতিকে সবকিছুর উত্তরাধিকারী করা হলো (৪৪:২৫ থেকে ৪৪:২৮)। ডুবে যাওয়া লোকদের নিয়ে শেষ কথা এই আয়াত। ৪৪:৩০ আয়াতে বর্ণনা ঘুরে যায় বনী ইসরাঈলের দিকে, তারা কী থেকে রক্ষা পেল সেদিকে।"
          },
          {
            "en": "Eight Arabic words carry two denials, each opened by ma. The first concerns grief: no weeping. The second concerns time: no delay. At-Tabari names those meant: the ones Allah drowned in the sea, Pharaoh and his people. Al-Muyassar gives the plain sense of both halves together. The sky and the earth did not weep out of grief for Pharaoh and his people, and they were not put off from the punishment that came down on them.",
            "bn": "আরবি আটটি শব্দে দুটি না-বাচক কথা, দুটোরই শুরু 'মা' দিয়ে। প্রথমটি শোকের বিষয়ে: কান্না হয়নি। দ্বিতীয়টি সময়ের বিষয়ে: দেরি করা হয়নি। কাদের কথা বলা হচ্ছে, তাবারী নাম ধরে বলে দেন: যাদের আল্লাহ সমুদ্রে ডুবিয়েছিলেন, ফেরাউন আর তার লোকজন। মুয়াসসার দুই অংশের সরল অর্থ এক বাক্যে দেয়। ফেরাউন ও তার লোকদের শোকে আসমান-যমীন কাঁদেনি, আর তাদের উপর যে শাস্তি নেমে এসেছিল, তা থেকে তাদের পিছিয়েও দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Door Above, a Prayer-Place Below",
          "bn": "উপরে দরজা, নিচে নামাযের জায়গা"
        },
        "p": [
          {
            "en": "At-Tabari's lead report comes through Saʿid ibn Jubayr. A man came to Ibn Abbas (RA) and asked about this verse: do the sky and the earth weep for anyone? He said yes. Every creature has a door in the sky through which its provision comes down and its deeds go up. When the believer dies and that door is closed, it weeps for him; and when the place on earth where he prayed and remembered Allah loses him, it weeps for him. Pharaoh's people left no righteous traces on earth, and no good rose from them, so neither wept.",
            "bn": "তাবারীর প্রধান বর্ণনাটি এসেছে সাঈদ ইবন জুবাইরের সূত্রে। এক লোক ইবন আব্বাস (রাঃ)-এর কাছে এসে এ আয়াত সম্পর্কে জিজ্ঞেস করল: আসমান-যমীন কি কারও জন্য কাঁদে? তিনি বললেন, হ্যাঁ। প্রত্যেক সৃষ্টির জন্য আসমানে একটি দরজা আছে। সে দরজা দিয়ে তার রিযিক নামে, আর তার আমল উপরে ওঠে। মুমিন মারা গেলে সে দরজা বন্ধ হয়ে যায়, তখন দরজাটি তার জন্য কাঁদে। যমীনের যে জায়গায় সে নামায পড়ত আর আল্লাহর জিকির করত, সে জায়গাও তাকে হারিয়ে কাঁদে। ফেরাউনের লোকেরা যমীনে কোনো নেক চিহ্ন রেখে যায়নি, তাদের কাছ থেকে কোনো ভালো কাজ উপরেও ওঠেনি। তাই কেউই তাদের জন্য কাঁদেনি।"
          },
          {
            "en": "At-Tabari repeats this from Ibn Abbas through other chains. In one, the spots on which the believer used to prostrate weep for him. In another, the mosques he prayed in weep, and the place in the sky from which his words were raised, because the two weep for the friends of Allah. Qatada speaks of the believer's patches of ground where he prayed and his places in the sky where his deeds were raised. Ad-Dahhak says the sky and the earth do not weep for the disbeliever.",
            "bn": "তাবারী আরও কয়েকটি সূত্রে ইবন আব্বাস (রাঃ) থেকে একই কথা আনেন। একটিতে আছে, মুমিন যেসব জায়গায় সিজদা করত, সেগুলো তার জন্য কাঁদে। আরেকটিতে আছে, যেসব মসজিদে সে নামায পড়ত সেগুলো কাঁদে, আর আসমানের যে জায়গা থেকে তার কথা উপরে তোলা হতো সেটাও কাঁদে। কারণ এ দুটি কাঁদে আল্লাহর ওলিদের জন্য। কাতাদা বলেন যমীনের সেই টুকরোগুলোর কথা, যেখানে মুমিন নামায পড়ত, আর আসমানের সেই জায়গাগুলোর কথা, যেখানে তার আমল তোলা হতো। দাহহাক বলেন, কাফিরের জন্য আসমান-যমীন কাঁদে না।"
          },
          {
            "en": "Ibn Kathir opens on the same note: they had no righteous deeds rising through the gates of the sky to weep at their loss, and no places on earth where they had worshipped Allah to miss them. He relays from Ibn Abi Hatim that a man put the question to Ali (RA), who said no one had asked him this before. Every servant, he answered, has a place of prayer on earth and a rising-place for his deeds in the sky, and Pharaoh's people had neither. Al-Qurtubi names Ali and Ibn Abbas together for this reading.",
            "bn": "ইবন কাসীরও একই কথায় শুরু করেন। তাদের এমন কোনো নেক আমল ছিল না, যা আসমানের দরজা দিয়ে উপরে উঠত আর তাদের হারিয়ে কাঁদত। যমীনে এমন কোনো জায়গাও ছিল না, যেখানে তারা আল্লাহর ইবাদত করেছে আর যা তাদের অভাব টের পেত। তিনি ইবন আবী হাতিম থেকে আনেন, এক লোক আলী (রাঃ)-কে একই প্রশ্ন করেছিল। তিনি বললেন, এর আগে কেউ তাঁকে এমন প্রশ্ন করেনি। তারপর জানালেন, প্রত্যেক বান্দার যমীনে একটি নামাযের জায়গা আর আসমানে আমল ওঠার একটি পথ থাকে। ফেরাউনের লোকদের দুটোর কোনোটিই ছিল না। কুরতুবী এই ব্যাখ্যার জন্য আলী ও ইবন আব্বাস (রাঃ), দুজনের নাম একসঙ্গে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Forty Mornings of Mourning",
          "bn": "চল্লিশ সকালের শোক"
        },
        "p": [
          {
            "en": "A number enters with Mujahid. At-Tabari gives it from him with a careful formula, kana yuqal, it used to be said: the earth weeps for the believer forty mornings. One chain carries the same from Mujahid from Ibn Abbas (RA); in another Mujahid says, I was told. Al-Baghawi states it without that hedge, that the sky and the earth weep forty mornings when the believer dies. Ibn Kathir adds that Saʿid ibn Jubayr and others said the same. This is reported speech, not a revealed count.",
            "bn": "মুজাহিদের কাছ থেকে একটা সংখ্যা আসে। তাবারী কথাটা তাঁর কাছ থেকে আনেন সাবধানী এক শব্দবন্ধে, 'কানা ইউকাল', অর্থাৎ বলা হতো: মুমিনের জন্য যমীন চল্লিশ সকাল কাঁদে। একটি সূত্রে কথাটি মুজাহিদ ইবন আব্বাস (রাঃ) থেকে বলেছেন। আরেক সূত্রে মুজাহিদ বলেন, আমাকে এমনটা শোনানো হয়েছে। বাগাভী এই সতর্কতা ছাড়াই বলেন, মুমিন মারা গেলে আসমান-যমীন চল্লিশ সকাল কাঁদে। ইবন কাসীর যোগ করেন, সাঈদ ইবন জুবাইরসহ আরও অনেকে একই কথা বলেছেন। এটা বর্ণিত কথা, ওহীতে আসা কোনো হিসাব নয়।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi both relay an exchange. Mujahid said the sky and the earth weep for the believer forty mornings, and his listener, named Abu Yahya in al-Qurtubi, was surprised. Mujahid answered: do you wonder? Why would the earth not weep for a servant who kept it alive with bowing and prostration, and why would the sky not weep for a servant whose takbir and tasbih hummed in it like the humming of bees? Al-Qurtubi adds ʿAtaʾ al-Khurasani: no servant prostrates on a patch of earth but it will testify for him on the Day of Resurrection and weep for him the day he dies.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই একটা কথোপকথন আনেন। মুজাহিদ বললেন, মুমিনের জন্য আসমান-যমীন চল্লিশ সকাল কাঁদে। শ্রোতা অবাক হলেন, কুরতুবী তাঁর নাম বলেন আবূ ইয়াহইয়া। মুজাহিদ জবাব দিলেন: অবাক হচ্ছ? যে বান্দা রুকু আর সিজদা দিয়ে যমীনকে আবাদ রাখত, তার জন্য যমীন কাঁদবে না কেন? যে বান্দার তাকবীর আর তাসবীহ আসমানে মৌমাছির গুঞ্জনের মতো বাজত, তার জন্য আসমান কাঁদবে না কেন? কুরতুবী এর সঙ্গে আতা আল-খুরাসানীর কথা যোগ করেন। কোনো বান্দা যমীনের যে টুকরোয় আল্লাহর জন্য সিজদা করে, কিয়ামতের দিন সে জায়গা তার পক্ষে সাক্ষী দেবে, আর যেদিন সে মারা যাবে সেদিন তার জন্য কাঁদবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports Held at a Distance",
          "bn": "দূরে রাখা দুটি বর্ণনা"
        },
        "p": [
          {
            "en": "Two reports raised to the Prophet ﷺ are brought under this verse, and neither can carry weight here. The first, from Anas, concerns two doors in the sky for each person. Ibn Kathir relays it from Abu Yaʿla's Musnad and from Ibn Abi Hatim, al-Baghawi through the same chain, and al-Qurtubi from Yazid ar-Raqashi. At-Tirmidhi records it too, number 3255, and grades it himself: gharib, known as the Prophet's words only by this one route, adding that Musa ibn ʿUbayda and Yazid ibn Aban ar-Raqashi are judged weak in hadith.",
            "bn": "নবী ﷺ-এর নামে বর্ণিত দুটি বর্ণনা এ আয়াতের অধীনে আনা হয়, কিন্তু এখানে কোনোটিরই ভার বহন করার শক্তি নেই। প্রথমটি আনাস (রাঃ) থেকে, প্রত্যেক মানুষের জন্য আসমানে দুটি দরজা থাকা প্রসঙ্গে। ইবন কাসীর এটি আনেন আবূ ইয়া'লার মুসনাদ আর ইবন আবী হাতিম থেকে, বাগাভী আনেন একই সূত্রে, আর কুরতুবী ইয়াযীদ আর-রাকাশী থেকে। তিরমিযীও এটি সংকলন করেছেন, নম্বর ৩২৫৫। তিনি নিজেই মান নির্ধারণ করেছেন: গরীব। নবীর কথা হিসেবে কেবল এই একটি সূত্রেই এটি জানা যায়। তিনি আরও বলেন, মূসা ইবন উবাইদা ও ইয়াযীদ ইবন আবান আর-রাকাশী হাদীসে দুর্বল বলে গণ্য।"
          },
          {
            "en": "The second comes from Shurayh ibn ʿUbayd al-Hadrami, on a believer who dies far from home, and it ends with the Prophet ﷺ reciting this verse. At-Tabari relays it, Ibn Kathir and al-Qurtubi repeat it, and Ma'arif al-Qur'an cites it from at-Tabari, but none of them gives it a grading. It is mentioned here and not built on. No tafsir fetched for this verse attaches a sound hadith to it. What the commentators say about the weeping rests on the words of Companions and Successors.",
            "bn": "দ্বিতীয়টি শুরাইহ ইবন উবাইদ আল-হাদরামী থেকে, বাড়ি থেকে দূরে মারা যাওয়া মুমিন প্রসঙ্গে। এর শেষে আছে, নবী ﷺ এই আয়াতটি তিলাওয়াত করলেন। তাবারী এটি বর্ণনা করেছেন, ইবন কাসীর ও কুরতুবী তা উদ্ধৃত করেছেন, মাআরিফুল কুরআন এনেছে তাবারী থেকে। কিন্তু তাঁদের কেউই এর মান উল্লেখ করেননি। তাই এখানে শুধু উল্লেখটুকু থাকল, এর উপর কিছু দাঁড় করানো হলো না। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদীস জোড়েনি। কান্না নিয়ে মুফাসসিরদের সব কথার ভিত্তি সাহাবী ও তাবিঈদের বক্তব্য।"
          }
        ]
      },
      {
        "h": {
          "en": "As the Arabs Mourned a Chief",
          "bn": "সরদারের মৃত্যুতে আরবের শোক"
        },
        "p": [
          {
            "en": "When a chief among them died, the Arabs used to say that the sky and the earth wept for him, meaning his loss reached everything. Al-Qurtubi quotes the poets: Jarir's line that the night's stars and the moon weep for you, and Layla bint Tarif asking the trees of al-Khabur why they are in leaf, as if they had not grieved for Ibn Tarif. Such speech, al-Qurtubi says, is likeness and imagery, stressing how much grief was owed. Read this way, the verse means they perished and nobody felt the loss.",
            "bn": "আরবদের কোনো সরদার মারা গেলে তারা বলত, তার জন্য আসমান-যমীন কেঁদেছে। মানে, তার মৃত্যুর শোক সবকিছুকে ছুঁয়ে গেছে। কুরতুবী কবিদের পঙক্তি আনেন। জারীরের পঙক্তিতে রাতের তারা আর চাঁদ 'তোমার জন্য' কাঁদছে। লাইলা বিনতে তারীফ খাবূরের গাছগুলোকে জিজ্ঞেস করছেন, তোমরা পাতায় ভরে আছ কেন, যেন ইবন তারীফের জন্য তোমাদের কোনো দুঃখই নেই! কুরতুবী বলেন, এ ধরনের কথা উপমা আর কল্পচিত্র, শোক কতখানি প্রাপ্য ছিল তা জোর দিয়ে বোঝাতে। এভাবে পড়লে অর্থ দাঁড়ায়: তারা ধ্বংস হলো, অথচ তাদের অভাব কেউ টের পেল না।"
          },
          {
            "en": "Al-Qurtubi also gives al-Hasan's reading, that a word is understood: the people of the sky and the earth, the angels, did not weep for them, as in wa-s'al al-qaryata, ask the town (12:82). Rather, they were glad at their destruction. As-Saʿdi reaches a similar point from the other side. No one grieved at parting from them; everything welcomed their end, even the sky and the earth, because they left behind only what would blacken their faces. Qatada, in Ibn Kathir, puts it shortly: they were too lowly before Allah for the sky and the earth to weep for them.",
            "bn": "কুরতুবী হাসানের ব্যাখ্যাও আনেন। তাঁর মতে এখানে একটি শব্দ উহ্য আছে: আসমান ও যমীনের অধিবাসী, অর্থাৎ ফেরেশতারা, তাদের জন্য কাঁদেনি। যেমন ১২:৮২ আয়াতে 'ওয়াসআলিল কারইয়াহ', জনপদকে জিজ্ঞেস করো, মানে জনপদের লোকদের। বরং তাদের ধ্বংসে তারা খুশিই হয়েছিল। সা'দী উল্টো দিক থেকে কাছাকাছি কথায় পৌঁছান। তাদের বিদায়ে কেউ দুঃখ পায়নি। বরং আসমান-যমীনসহ সবাই তাদের শেষ দেখে খুশি হয়েছে, কারণ তারা পেছনে এমন কিছুই রেখে যায়নি, যা তাদের মুখ কালো করা ছাড়া অন্য কিছু করবে। ইবন কাসীরের বর্ণনায় কাতাদা কথাটা ছোট করে বলেন: আল্লাহর কাছে তারা এতই তুচ্ছ ছিল যে, তাদের জন্য আসমান-যমীন কাঁদবে, এমন মর্যাদা তাদের ছিল না।"
          },
          {
            "en": "A third reading makes the sky's weeping a colour. At-Tabari reports it with it has been said, from ʿAtaʾ: its weeping is the reddening of its edges. Al-Baghawi has the same from ʿAtaʾ. Al-Qurtubi attributes it to Ali (RA), ʿAtaʾ and as-Suddi, and to Muhammad ibn Ali at-Tirmidhi, a different man from Abu ʿIsa at-Tirmidhi the collector, who also relays it from al-Hasan. This at-Tirmidhi explains weeping as a thing letting something flow: the eye its water, the sky its redness, the earth its dust-grey dimness when the light of a believer leaves it.",
            "bn": "তৃতীয় এক ব্যাখ্যায় আসমানের কান্না একটি রং। তাবারী এটি আনেন 'বলা হয়েছে' কথাটি দিয়ে, আতার সূত্রে: আসমানের কান্না মানে তার কিনারাগুলো লাল হয়ে যাওয়া। বাগাভীও আতা থেকে একই কথা আনেন। কুরতুবী এ মত আলী (রাঃ), আতা, সুদ্দী আর মুহাম্মাদ ইবন আলী আত-তিরমিযীর নামে বলেন। ইনি হাদীস সংকলক আবূ ঈসা আত-তিরমিযী নন, ভিন্ন মানুষ। তিনি মতটি হাসান থেকেও বর্ণনা করেন। তাঁর ব্যাখ্যায় কান্না মানে কোনো কিছু বইয়ে দেওয়া। চোখ বইয়ে দেয় পানি, আসমান লালিমা। আর মুমিনের নূর চলে গেলে যমীন বইয়ে দেয় তার ধূসর মলিনতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Weeping in a Way Unseen",
          "bn": "যে কান্না চোখে পড়ে না"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out three ways of taking the weeping. The first is weeping as known among living creatures, which he likens to Mujahid's view; the others are the redness, and a sign that shows sorrow. He then judges the first the more apparent, since there is nothing impossible in it. If the heavens and the earth glorify, hear and speak, as he says he has shown elsewhere in his tafsir, they can weep as well. He closes the discussion with the words: and Allah knows best which of these views is right.",
            "bn": "কুরতুবী কান্না বোঝার তিনটি ধরন সাজান। প্রথমটি, প্রাণীদের মধ্যে যে কান্না আমরা চিনি, সেই কান্না। তাঁর মতে মুজাহিদের কথা এর সঙ্গেই মেলে। বাকি দুটি হলো লালিমা, আর দুঃখ প্রকাশ পায় এমন কোনো আলামত। তারপর তিনি প্রথম মতটিকেই বেশি স্পষ্ট বলেন, কারণ এতে অসম্ভব কিছু নেই। তাঁর যুক্তি: আসমান-যমীন যদি তাসবীহ পড়ে, শোনে আর কথা বলে, যেমনটা তিনি তাফসীরের অন্য জায়গায় দেখিয়েছেন বলে জানান, তবে কাঁদতেও পারে। আলোচনা তিনি শেষ করেন এই বলে: এসব মতের মধ্যে কোনটি সঠিক, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Ma'arif al-Qur'an records that some scholars read the verse figuratively: these people counted for so little that their wiping out grieved no one. It prefers real weeping, holding that when the primary sense of an expression is possible there is no need for a figurative sense. To the objection that sky and earth have no feeling, it answers with 17:44: there is nothing that does not glorify Him with praise, though you do not understand their glorifying. Their weeping need not resemble ours, it adds, and we do not know its reality.",
            "bn": "মাআরিফুল কুরআন জানায়, কিছু আলেম আয়াতটিকে রূপক অর্থে নেন: এই লোকেরা এতই নগণ্য ছিল যে, তাদের মুছে যাওয়ায় কারও দুঃখ হয়নি। মাআরিফুল কুরআন নিজে আসল কান্নার অর্থকেই অগ্রাধিকার দেয়। তার যুক্তি, কোনো কথার মূল অর্থ যদি সম্ভব হয়, তবে রূপক অর্থে যাওয়ার দরকার নেই। আসমান-যমীনের তো অনুভূতি নেই, এই আপত্তির জবাবে সে ১৭:৪৪ আয়াত আনে: এমন কিছু নেই যা তাঁর প্রশংসাসহ তাসবীহ পড়ে না, কিন্তু তোমরা তাদের তাসবীহ বোঝো না। সঙ্গে বলে, তাদের কান্না আমাদের মতো হওয়া জরুরি নয়, আর এর প্রকৃত রূপ আমরা জানি না।"
          },
          {
            "en": "So the difference stands, and this article leaves it standing. Al-Qurtubi and Ma'arif al-Qur'an lean to a real weeping, al-Qurtubi with an Allah knows best attached. The poets' idiom, al-Hasan's angels, as-Saʿdi's rejoicing creation and the reddened horizon all remain on the page as other readings. What none of them disputes is the thing the verse denies to Pharaoh's people: no part of creation mourned their going, and nothing they had done was missed.",
            "bn": "মতভেদটা তাই থেকেই যায়, আর এ লেখাও তা মীমাংসা করতে যাচ্ছে না। কুরতুবী আর মাআরিফুল কুরআন আসল কান্নার দিকে ঝোঁকেন, কুরতুবী তার সঙ্গে 'আল্লাহই ভালো জানেন' জুড়ে দিয়েছেন। কবিদের বাগধারা, হাসানের ফেরেশতা, সা'দীর খুশি হওয়া সৃষ্টিজগৎ আর লাল দিগন্ত, এসবও অন্য ব্যাখ্যা হিসেবে পাতায় রয়ে গেছে। তবে আয়াত ফেরাউনের লোকদের যা দেয়নি, তা নিয়ে কারও দ্বিমত নেই। তাদের চলে যাওয়ায় সৃষ্টির কোনো অংশ শোক করেনি, আর তাদের কোনো কাজের অভাবও কেউ বোধ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not One Hour More",
          "bn": "আর এক মুহূর্তও নয়"
        },
        "p": [
          {
            "en": "Wa-ma kanu munzarin turns from grief to time. At-Tabari: they were not deferred with the punishment that befell them, but it was hastened upon them once they had angered their Lord. Al-Qurtubi: not delayed from the drowning. As-Saʿdi: not granted a reprieve from punishment, which cut them off on the spot. Ibn Kathir joins the two halves with a therefore. Having no deeds for the sky or the earth to miss, they deserved no delay, for their disbelief and crimes, their insolence and stubbornness.",
            "bn": "'ওয়ামা কানূ মুনযারীন' শোকের কথা থেকে সময়ের কথায় যায়। তাবারী বলেন, তাদের উপর যে শাস্তি নেমেছিল, তা পিছিয়ে দেওয়া হয়নি। বরং তারা যখন রবকে নারাজ করল, তখন শাস্তি তাড়াতাড়ি এসে গেল। কুরতুবীর কথায়, ডুবে যাওয়া থেকে তাদের দেরি করানো হয়নি। সা'দী বলেন, শাস্তি থেকে কোনো অবকাশ মেলেনি, শাস্তি তাদের তখনই নিশ্চিহ্ন করে দিল। ইবন কাসীর 'তাই' শব্দটি দিয়ে দুই অংশ জোড়েন। আসমান বা যমীন হারিয়ে কাঁদবে, এমন কোনো আমল তাদের ছিল না। তাই কুফর, অপরাধ, ঔদ্ধত্য আর জেদের কারণে তারা কোনো অবকাশ পাওয়ার যোগ্য থাকেনি।"
          },
          {
            "en": "Al-Baghawi adds a phrase that shows what respite is for: they were not given time when the punishment seized them, for repentance or for anything else. The time for turning came before that moment, not at it. Earlier in the same surah a noble messenger had come to them (44:17). The respite denied at the end is the respite that had already been given and spent.",
            "bn": "বাগাভী একটি কথা যোগ করেন, যা থেকে বোঝা যায় অবকাশ কিসের জন্য। শাস্তি যখন তাদের পাকড়াও করল, তখন তাওবার জন্য বা অন্য কিছুর জন্য তাদের সময় দেওয়া হয়নি। ফিরে আসার সময় ছিল সেই মুহূর্তের আগে, সেই মুহূর্তে নয়। এই সূরারই আগে বলা হয়েছে, তাদের কাছে এক সম্মানিত রাসূল এসেছিলেন (৪৪:১৭)। শেষে যে অবকাশ মেলেনি, তা আগেই দেওয়া হয়েছিল, আর তারা তা খরচ করে ফেলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Verdict on Today's Dead",
          "bn": "আজকের মৃতের উপর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying firmly. The verse describes what it describes: one people, Pharaoh and his host, named in the text and drowned in an event the Qur'an narrates. It licenses nothing against any living person or community. No one may say of someone who dies today that the sky and the earth did not weep for them, or read a small funeral, the weather on a burial day or a red sky as a verdict on the dead. That judgement belongs to Allah alone.",
            "bn": "কথাটা জোর দিয়ে বলা দরকার। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে। একটি জাতি, ফেরাউন ও তার বাহিনী, যাদের নাম কুরআনে আছে, আর যাদের ডুবে যাওয়ার ঘটনা কুরআন নিজেই বলেছে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। আজ কেউ মারা গেলে তার সম্পর্কে কেউ বলতে পারে না যে, তার জন্য আসমান-যমীন কাঁদেনি। জানাযায় লোক কম হওয়া, দাফনের দিনের আবহাওয়া কিংবা লাল আকাশ দেখে মৃতের উপর রায় দেওয়ারও সুযোগ নেই। সে বিচার শুধু আল্লাহর।"
          },
          {
            "en": "A general narration, not attached to this verse, speaks to reading the sky at a death. Al-Bukhari (1043) records from al-Mughira ibn Shuʿba: the sun eclipsed in the lifetime of Allah's Messenger ﷺ on the day when Ibrahim died. So the people said that the sun had eclipsed because of the death of Ibrahim. Allah's Messenger ﷺ said, \"The sun and the moon do not eclipse because of the death or life of someone. When you see the eclipse pray and invoke Allah.\" What the sky does is not ours to read. What we leave in the ground we pray on is ours to tend.",
            "bn": "মৃত্যুর সময় আকাশ দেখে অর্থ খোঁজা নিয়ে একটি সাধারণ হাদীস আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়। বুখারী (১০৪৩) মুগীরা ইবন শু'বা (রাঃ) থেকে বর্ণনা করেন: আল্লাহর রাসূল ﷺ-এর জীবদ্দশায়, যেদিন ইবরাহীম মারা গেলেন, সেদিন সূর্যগ্রহণ হলো। লোকেরা বলল, ইবরাহীমের মৃত্যুর কারণে সূর্যগ্রহণ হয়েছে। আল্লাহর রাসূল ﷺ বললেন, \"কারও মৃত্যু বা জীবনের কারণে সূর্য ও চাঁদের গ্রহণ হয় না। যখন গ্রহণ দেখবে, নামায পড়বে আর আল্লাহর কাছে দোয়া করবে।\" আকাশ কী করছে, তার অর্থ বের করা আমাদের কাজ নয়। যে মাটিতে আমরা নামায পড়ি, সেখানে কী রেখে যাচ্ছি, তার যত্ন নেওয়াই আমাদের কাজ।"
          }
        ]
      }
    ]
  },
  "44:30": {
    "sections": [
      {
        "h": {
          "en": "Turning From the Drowned",
          "bn": "ডুবে যাওয়াদের থেকে চোখ ফিরিয়ে"
        },
        "p": [
          {
            "en": "Wa-laqad najjayna Bani Isra'il mina-l-'adhabi-l-muhin: and We certainly saved the Children of Israel from the humiliating torment. The verses before it have followed Pharaoh's people all the way to their end. Musa (AS) was told to set out by night with My servants, for they would be pursued (44:23), and to leave the sea behind him at rest (44:24). Then came the gardens and springs they left behind (44:25), the inheritance passed to another people (44:28), and the verdict that heaven and earth did not weep for them, nor were they given respite (44:29).",
            "bn": "ওয়া লাকাদ নাজ্জাইনা বানী ইসরাঈলা মিনাল আযাবিল মুহীন: আর আমি অবশ্যই বানী ইসরাঈলকে অপমানজনক শাস্তি থেকে রক্ষা করেছিলাম। এর আগের আয়াতগুলো ফেরাউনের লোকদের শেষ পরিণতি পর্যন্ত তাদের পিছু নিয়েছে। মূসা (আঃ)-কে বলা হয়েছিল আমার বান্দাদের নিয়ে রাতে বেরিয়ে পড়ো, তোমাদের পিছু ধাওয়া করা হবে (৪৪:২৩)। বলা হয়েছিল সমুদ্রকে পেছনে স্থির রেখে যেতে (৪৪:২৪)। তারপর এল তাদের ফেলে যাওয়া উদ্যান আর ঝর্ণার কথা (৪৪:২৫), অন্য জাতির হাতে সবকিছুর উত্তরাধিকার চলে যাওয়ার কথা (৪৪:২৮)। শেষে সেই রায়: তাদের জন্য আসমান-যমীন কাঁদেনি, তাদের অবকাশও দেওয়া হয়নি (৪৪:২৯)।"
          },
          {
            "en": "Then the verse turns to the people the army had been chasing. Placed side by side, 44:29 and 44:30 show the same event from its two ends: on the side of the pursuers no mourning and no reprieve, on the side of the pursued a rescue. The verse has seven Arabic words, and its sentence is not finished when the verse ends. The next verse, 44:31, completes it with min Fir'awn, from Pharaoh, and goes on to describe him. That description belongs to its own verse, and this article stops at the name.",
            "bn": "তারপর আয়াত ফিরে তাকায় সেই মানুষদের দিকে, বাহিনী যাদের পিছু নিয়েছিল। ৪৪:২৯ আর ৪৪:৩০ পাশাপাশি রাখলে একই ঘটনার দুই প্রান্ত চোখে পড়ে। যারা ধাওয়া করছিল, তাদের জন্য না আছে শোক, না অবকাশ। যাদের ধাওয়া করা হচ্ছিল, তাদের জন্য উদ্ধার। আয়াতটিতে আরবি শব্দ মাত্র সাতটি, আর আয়াত শেষ হলেও বাক্যটা শেষ হয় না। পরের আয়াত ৪৪:৩১ বাক্যটা পূর্ণ করে মিন ফেরাউন কথাটি দিয়ে, অর্থাৎ ফেরাউনের কাছ থেকে। তারপর সে আয়াত ফেরাউনের বর্ণনা দেয়। সে বর্ণনা ওই আয়াতেরই বিষয়। এই লেখা নামটুকু পর্যন্ত গিয়েই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Set Before Them",
          "bn": "চোখের সামনে রাখা অনুগ্রহ"
        },
        "p": [
          {
            "en": "Ibn Kathir comments on 44:30 and 44:31 together, and the first thing he says is about what Allah is doing in the sentence: yamtannu 'alayhim ta'ala bi-dhalik, He is reminding them of His favour in this. He then restates the saving with a verb of his own, anqadhahum, He rescued them, and names what they were rescued from: mimma kanu fihi, from what they were in, of Pharaoh's humiliation and abasement of them, and his pressing them into humiliating, exhausting work. The rescue, in his reading, is something done to them and for them.",
            "bn": "ইবন কাসীর ৪৪:৩০ আর ৪৪:৩১ একসঙ্গে ব্যাখ্যা করেন। প্রথমেই তিনি বলেন, এ বাক্যে আল্লাহ কী করছেন: ইয়ামতান্নু আলাইহিম তাআলা বিযালিক, এর মাধ্যমে তিনি তাদের নিজের অনুগ্রহের কথা মনে করিয়ে দিচ্ছেন। তারপর রক্ষা করার কথাটা নিজের একটি ক্রিয়াপদে বলেন, আনকাযাহুম, তিনি তাদের উদ্ধার করলেন। কী থেকে উদ্ধার, তাও বলেন: মিম্মা কানূ ফীহি, তারা যার ভেতরে ছিল তা থেকে। অর্থাৎ ফেরাউন তাদের যে অপমান আর লাঞ্ছনা করত, আর অপমানজনক কষ্টের কাজে যেভাবে তাদের খাটিয়ে নিত, তা থেকে। তাঁর ব্যাখ্যায় উদ্ধারটা আল্লাহ তাদের সঙ্গে করেছেন, আর করেছেন তাদেরই জন্য।"
          },
          {
            "en": "As-Sa'di opens his comment with the same verb: thumma mtanna ta'ala 'ala Bani Isra'il, then Allah reminded the Children of Israel of His favour. He quotes the verse and adds a single clause, al-ladhi kanu fihi, the torment they were in. Both commentators use the words kanu fihi. On their wording the torment reads as a condition the people lived inside, not a blow that fell once and passed. Neither says in this place why the favour was given. They present it as something done for the people, and something to be remembered.",
            "bn": "সা'দীও একই ক্রিয়া দিয়ে শুরু করেন: সুম্মামতান্না তাআলা আলা বানী ইসরাঈল, তারপর আল্লাহ বানী ইসরাঈলকে তাঁর অনুগ্রহের কথা মনে করিয়ে দিলেন। আয়াতটি উদ্ধৃত করে তিনি শুধু ছোট্ট একটি অংশ যোগ করেন: আল্লাযী কানূ ফীহি, যে শাস্তির ভেতরে তারা ছিল। দুজনের লেখাতেই আছে কানূ ফীহি কথাটি। তাঁদের ভাষায় শাস্তিটা এমন এক অবস্থা, যার ভেতরে মানুষগুলো দিন কাটাত। একবার নেমে এসে চলে যাওয়া কোনো আঘাত নয়। অনুগ্রহটা কেন দেওয়া হলো, এ জায়গায় তাঁরা কেউ তা বলেন না। তাঁরা একে তুলে ধরেন মানুষগুলোর জন্য করা এক কাজ হিসেবে, যা মনে রাখার মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Torment Named by Its Effect",
          "bn": "ফল দিয়ে শাস্তির পরিচয়"
        },
        "p": [
          {
            "en": "The adjective carries the verse. At-Tabari glosses al-muhin as al-mudhill lahum, that which abased them, and al-Muyassar writes the same word into its paraphrase: al-'adhab al-mudhill lahum, the torment that abased them. Ibn Kathir's pair, ihana and idhlal, humiliation and abasement, says the same thing from Pharaoh's side, as acts he did to them. None of these glosses measures the torment by how much it hurt. Each measures it by what it did to the standing of the people who bore it: it brought them low and kept them there.",
            "bn": "আয়াতের ভার বইছে বিশেষণটি। তাবারী আল-মুহীনের ব্যাখ্যা দেন আল-মুযিল্লু লাহুম, যা তাদের লাঞ্ছিত করেছিল। মুয়াসসারও নিজের ভাষ্যে একই শব্দ বসায়: আল-আযাবুল মুযিল্লু লাহুম, যে শাস্তি তাদের হেয় করেছিল। ইবন কাসীরের জোড়া শব্দ ইহানা আর ইযলাল, অপমান আর লাঞ্ছনা। কথা একই, শুধু দেখা হয়েছে ফেরাউনের দিক থেকে, তার করা কাজ হিসেবে। এর কোনো ব্যাখ্যাই শাস্তিকে কষ্টের পরিমাণ দিয়ে মাপে না। সবাই মাপে অন্যভাবে: যারা তা সয়েছে, তাদের মর্যাদার কী দশা হয়েছিল। শাস্তিটা তাদের নিচে নামিয়েছিল, আর সেখানেই আটকে রেখেছিল।"
          },
          {
            "en": "At-Tabari also says whose torment it was: the torment with which Pharaoh and his people used to torment them. The word al-'adhab has already appeared twice in this surah. In 44:12 the deniers cry, Our Lord, remove the torment from us, and in 44:15 Allah answers that He will remove the torment a little. There it is a torment that Allah removes. Here, on at-Tabari's gloss, it is inflicted by people on people, and it is Allah who saves them from it. At-Tabari adds that the people of interpretation said as he did.",
            "bn": "কার দেওয়া শাস্তি, তাবারী সেটাও বলেন: ফেরাউন আর তার লোকেরা যে শাস্তি দিয়ে তাদের কষ্ট দিত। আল-আযাব শব্দটি এ সূরায় আগেও দুবার এসেছে। ৪৪:১২ আয়াতে অস্বীকারকারীরা ফরিয়াদ করে, হে আমাদের রব, আমাদের উপর থেকে শাস্তি সরিয়ে নিন। আর ৪৪:১৫ আয়াতে আল্লাহ জবাব দেন, তিনি শাস্তি অল্প কিছুটা সরিয়ে নেবেন। সেখানে শাস্তি এমন জিনিস, যা আল্লাহ সরিয়ে নেন। এখানে তাবারীর ব্যাখ্যায় শাস্তিটা মানুষের হাতে মানুষের উপর চাপানো, আর তা থেকে রক্ষা করছেন আল্লাহ। তাবারী আরও বলেন, তাফসীরের আলিমরাও তাঁর মতোই বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sons, Labour and Bondage",
          "bn": "ছেলে হত্যা, খাটুনি, দাসত্ব"
        },
        "p": [
          {
            "en": "What did the torment consist of? The verse does not say. The commentators do, and they say it briefly. At-Tabari's only named report on the verse comes from Qatada, through the chain Bishr, from Yazid, from Sa'id: from the humiliating torment, by the killing of their sons and the keeping alive of their women. That is the earliest voice in the texts gathered here, and it names two things. It does not mention labour, and about the women it says only that they were left alive while the sons were killed.",
            "bn": "শাস্তিটা ছিল কী? আয়াত তা বলে না। তাফসীরকারেরা বলেন, আর অল্প কথায় বলেন। আয়াতের উপর তাবারী নাম ধরে একটিমাত্র বর্ণনা আনেন, কাতাদা থেকে। সনদ বিশর, তাঁর থেকে ইয়াযীদ, তাঁর থেকে সাঈদ। কাতাদা বলেন: অপমানজনক শাস্তি মানে তাদের ছেলেদের হত্যা আর মেয়েদের বাঁচিয়ে রাখা। এখানে সংগ্রহ করা লেখাগুলোর মধ্যে এটিই সবচেয়ে পুরোনো কণ্ঠ, আর তাতে দুটি জিনিসের নাম আছে। খাটুনির কথা সেখানে নেই। নারীদের সম্পর্কে শুধু এটুকু আছে যে ছেলেদের হত্যা করা হলেও তাদের বাঁচিয়ে রাখা হতো।"
          },
          {
            "en": "Al-Baghawi keeps Qatada's pair and adds a third item: the killing of sons, the keeping alive of women, and al-ta'ab fi-l-'amal, toil in labour. Al-Muyassar gives a pair with a different second term: the killing of their sons and istikhdam nisa'ihim, the putting of their women to service. Neither cites a chain. Each writes a single line, and each turns the abstract adjective into concrete losses: sons who were killed, women kept alive or kept in service, and bodies worn down by work that was not their choice.",
            "bn": "বাগাভী কাতাদার জোড়াটি রাখেন, সঙ্গে যোগ করেন তৃতীয় আরেকটি: ছেলেদের হত্যা, মেয়েদের বাঁচিয়ে রাখা, আর আত-তাআবু ফিল আমাল, কাজের খাটুনিতে ক্লান্তি। মুয়াসসারও জোড়া দেয়, তবে দ্বিতীয় অংশটা আলাদা: তাদের ছেলেদের হত্যা আর ইসতিখদামু নিসাইহিম, তাদের নারীদের সেবার কাজে খাটানো। কেউই সনদ উল্লেখ করেন না। প্রত্যেকের কথা এক লাইনের। আর প্রত্যেকে বিমূর্ত বিশেষণটিকে বাস্তব ক্ষতির চেহারা দেন: নিহত ছেলেরা, বাঁচিয়ে রাখা বা কাজে খাটানো নারীরা, আর এমন খাটুনিতে ক্ষয়ে যাওয়া শরীর, যা তারা নিজেরা বেছে নেয়নি।"
          },
          {
            "en": "Al-Qurtubi gives the fullest list. The torment, he says, is what was done to them by Pharaoh's command: the killing of sons and the putting of women to service, their enslavement of them, and the burdening of them with arduous works. Ibn Kathir names no killing at all in this place. His gloss is about subjection: taskhiruhu iyyahum fi-l-a'mal al-muhina al-shaqqa, Pharaoh's pressing them into humiliating and exhausting labour. The word muhina returns in his sentence, so the labour itself is called humiliating, just as the torment is in the verse.",
            "bn": "সবচেয়ে পূর্ণ তালিকা দেন কুরতুবী। তাঁর ভাষায় শাস্তি হলো ফেরাউনের হুকুমে তাদের সঙ্গে যা করা হতো: ছেলেদের হত্যা, নারীদের সেবার কাজে খাটানো, তাদের দাস বানিয়ে রাখা, আর কঠিন কঠিন কাজের বোঝা চাপানো। ইবন কাসীর এ জায়গায় হত্যার কথা একেবারেই বলেন না। তাঁর ব্যাখ্যা জোর করে খাটানো নিয়ে: তাসখীরুহু ইয়্যাহুম ফিল আমালিল মুহীনাতিশ শাক্কাহ, ফেরাউন তাদের অপমানজনক আর হাড়ভাঙা কাজে বাধ্য করত। তাঁর বাক্যে মুহীনা শব্দটি আবার ফিরে আসে। ফলে আয়াত যেমন শাস্তিকে অপমানজনক বলে, তিনিও খাটুনিটাকে তেমনই অপমানজনক বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Spared, or Put to Service",
          "bn": "বাঁচিয়ে রাখা, নাকি খাটানো"
        },
        "p": [
          {
            "en": "The lists part ways at the women. Qatada, as at-Tabari reports him, and al-Baghawi say istihya', keeping them alive. Al-Muyassar and al-Qurtubi say istikhdam, putting them to service. None of the texts gathered here explains the difference or argues for its own word against the other. The two words do not make the same claim. The first says the women were spared while the sons were killed; the second says what was done with them. This article keeps both as the texts give them, and does not choose between them.",
            "bn": "নারীদের প্রসঙ্গে এসে তালিকাগুলো আলাদা হয়ে যায়। তাবারীর বর্ণনায় কাতাদা আর বাগাভী বলেন ইসতিহইয়া, অর্থাৎ বাঁচিয়ে রাখা। মুয়াসসার আর কুরতুবী বলেন ইসতিখদাম, অর্থাৎ সেবার কাজে খাটানো। এখানে সংগ্রহ করা কোনো লেখাই এই পার্থক্যের ব্যাখ্যা দেয় না, নিজের শব্দের পক্ষে অন্যটির বিরুদ্ধে যুক্তিও দেয় না। শব্দ দুটি অবশ্য একই দাবি করে না। প্রথমটি বলে, ছেলেদের হত্যা করা হলেও নারীদের বাঁচিয়ে রাখা হতো। দ্বিতীয়টি বলে, তাদের দিয়ে কী করানো হতো। লেখাগুলো যেভাবে দিয়েছে, এ লেখা দুটোকেই সেভাবে রাখে, কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "They also differ on whose hands are named. At-Tabari says Pharaoh and his people. Al-Qurtubi speaks of those acting by Pharaoh's command. Ibn Kathir speaks of Pharaoh's own humiliation of them. Al-Muyassar and as-Sa'di name no agent in their lines. The verse that follows settles the chief name, since it says the rescue was from Pharaoh (44:31). In every version the wrong sits with a ruler, his command and the people who carried it out, in that age, and the texts say nothing beyond it.",
            "bn": "কার হাতে এই জুলুম, তা নিয়েও তাঁদের কথা আলাদা। তাবারী বলেন ফেরাউন আর তার লোকেরা। কুরতুবী বলেন তাদের কথা, যারা ফেরাউনের হুকুমে এসব করত। ইবন কাসীর বলেন, ফেরাউন নিজেই তাদের অপমান করত। মুয়াসসার আর সা'দী তাঁদের লাইনে কারও নাম নেন না। প্রধান নামটি ঠিক করে দেয় পরের আয়াত, কারণ সেখানে আছে, উদ্ধারটা ছিল ফেরাউনের কাছ থেকে (৪৪:৩১)। প্রতিটি ভাষ্যেই দোষ গিয়ে পড়ে এক শাসক, তার হুকুম আর সে হুকুম যারা তামিল করেছিল তাদের উপর, সেই যুগেই। এর বাইরে লেখাগুলো কিছু বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Texts Leave Unsaid",
          "bn": "লেখাগুলো যা বলে না"
        },
        "p": [
          {
            "en": "It should be said plainly how little these sources discuss. The verse does not say how the rescue happened, and none of the commentaries gathered on it retells the night journey or the crossing; those belong to 44:23 and 44:24. None gives a number of the killed, a length for the servitude or the name of a place. Ma'arif al-Qur'an's note, which covers 44:29 to 44:31 together, is given entirely to the weeping of heaven and earth, and says nothing about this verse at all.",
            "bn": "সোজা কথায় বলা দরকার, এই উৎসগুলো কত কম কথা বলে। রক্ষাটা কীভাবে ঘটেছিল, আয়াত তা বলে না। এখানে সংগ্রহ করা কোনো তাফসীরও এ আয়াতের আলোচনায় রাতের যাত্রা বা সমুদ্র পার হওয়ার কাহিনি আবার শোনায় না। সেসব ৪৪:২৩ আর ৪৪:২৪ আয়াতের বিষয়। কতজন নিহত হয়েছিল, দাসত্ব কত দিন চলেছিল, ঘটনা কোন জায়গার, কেউ তা বলে না। মাআরিফুল কুরআনের টীকা ৪৪:২৯ থেকে ৪৪:৩১ পর্যন্ত একসঙ্গে ধরে, কিন্তু পুরোটাই আসমান-যমীনের কান্না নিয়ে। এ আয়াত সম্পর্কে সেখানে কিছুই নেই।"
          },
          {
            "en": "Ibn Kathir's English abridgement, as available here, ends its section on these verses at 44:26, so it is not drawn on; his Arabic note is used instead. No commentary gathered on the verse attaches a hadith to it, and none reports an occasion of revelation, so neither is brought here. The verse's setting is its placement: after the destruction of the oppressors, and before the sentence that names their ruler. What remains is a handful of short glosses that agree on the main point and differ in detail, and for this verse that is enough.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণের যে কপি এখানে পাওয়া গেছে, তাতে এ আয়াতগুলোর আলোচনা থেমে গেছে ৪৪:২৬-এ। তাই সেটি থেকে কিছু নেওয়া হয়নি, নেওয়া হয়েছে তাঁর আরবি টীকা থেকে। এ আয়াতের উপর সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো হাদিস জোড়ে না, নাজিলের কোনো উপলক্ষও বলে না। তাই এখানে এর কোনোটিই আনা হয়নি। আয়াতের প্রেক্ষাপট তার অবস্থানেই: জালিমদের ধ্বংসের পরে, আর যে বাক্যে তাদের শাসকের নাম আসে, তার আগে। হাতে থাকে কয়েকটি ছোট ব্যাখ্যা। মূল কথায় সেগুলো একমত, খুঁটিনাটিতে আলাদা। এ আয়াতের জন্য এটুকুই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "History, Not a Verdict Today",
          "bn": "ইতিহাস, আজকের রায় নয়"
        },
        "p": [
          {
            "en": "A word of care is needed here. The verse names two parties in an event of the past: the Children of Israel, who were saved, and Pharaoh, from whom they were saved. It speaks only of what it names, a people held in humiliation in that age and a ruler and his people who held them there, and it licenses nothing against any living person or community. Nor does this article draw from it any link, for or against, to any people, religion or state of the present day. The rescue stays where the texts place it.",
            "bn": "এখানে সাবধানতার কথা বলা দরকার। আয়াতটি অতীতের এক ঘটনায় দুই পক্ষের নাম নেয়: বানী ইসরাঈল, যাদের রক্ষা করা হয়েছিল, আর ফেরাউন, যার কাছ থেকে তাদের রক্ষা করা হয়েছিল। লেখাগুলো যা বর্ণনা করে, আয়াতও তা-ই বর্ণনা করে: সেই যুগে অপমানের মধ্যে আটকে থাকা এক জনগোষ্ঠী, আর এক শাসক ও তার লোকেরা, যারা তাদের সেভাবে আটকে রেখেছিল। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজকের কোনো জাতি, ধর্ম বা রাষ্ট্রের সঙ্গে এ লেখা আয়াতটির কোনো সম্পর্কও টানে না, পক্ষেও না, বিপক্ষেও না। উদ্ধারের ঘটনা থাকে সেখানেই, যেখানে লেখাগুলো তাকে রেখেছে।"
          },
          {
            "en": "What the verse holds for every reader lies elsewhere. It shows that it is Allah who saves from humiliation, and it gives humiliation a name that the commentators fill in with the killing of sons, forced service and work that grinds people down. A reader who takes the verse in its place does not come away with a judgement on others. They come away with a measure for their own conduct, and with a reason to be grateful for whatever rescue has reached them, whether they noticed it at the time or not.",
            "bn": "প্রত্যেক পাঠকের জন্য আয়াতের শিক্ষা অন্য জায়গায়। আয়াত দেখায়, অপমান থেকে রক্ষা করেন আল্লাহ। আর অপমানকে এমন এক নাম দেয়, যার ভেতরটা তাফসীরকারেরা ভরে দেন ছেলেদের হত্যা, জোর করে খাটানো আর মানুষকে নিঃশেষ করে দেওয়া পরিশ্রমের কথা দিয়ে। যে পাঠক আয়াতটিকে তার জায়গায় রেখে পড়েন, তিনি অন্যদের উপর রায় নিয়ে ফেরেন না। ফেরেন নিজের আচরণ মাপার এক মানদণ্ড নিয়ে। আর যে উদ্ধার তাঁর কাছে পৌঁছেছে, তখন টের পান বা না পান, তার জন্য শোকর করার এক কারণ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Out, and Remembering",
          "bn": "বের করে আনা, আর মনে রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir and as-Sa'di both read the verse as a favour recalled, and a favour recalled asks for memory. Most people have been brought out of something: an illness, a debt, a home where they were belittled, a job that treated them as less than a person. In time the relief fades and the rescue becomes ordinary. The verse speaks with emphasis, wa-laqad, and We certainly, and sets the past before its listener as something not to be forgotten. Its question is simple: do you remember who brought you out?",
            "bn": "ইবন কাসীর আর সা'দী দুজনেই আয়াতটিকে পড়েন অনুগ্রহের কথা মনে করিয়ে দেওয়া হিসেবে। আর যে অনুগ্রহের কথা মনে করিয়ে দেওয়া হয়, তা চায় মানুষ সেটা মনে রাখুক। বেশির ভাগ মানুষকেই কোনো না কোনো কিছু থেকে বের করে আনা হয়েছে: অসুখ, ঋণ, এমন ঘর যেখানে তাকে তুচ্ছ করা হতো, এমন চাকরি যেখানে তাকে মানুষ বলেই গণ্য করা হতো না। সময়ের সঙ্গে স্বস্তির অনুভূতি মিলিয়ে যায়, উদ্ধারটা হয়ে যায় সাধারণ ঘটনা। আয়াত কথা বলে জোর দিয়ে, ওয়া লাকাদ, আর আমি অবশ্যই। অতীতকে শ্রোতার সামনে রাখে ভুলে না যাওয়ার জিনিস হিসেবে। প্রশ্নটা সহজ: কে আপনাকে বের করে এনেছিলেন, মনে আছে?"
          },
          {
            "en": "The other half of the lesson comes from the adjective. If the torment was named, as the commentators gloss it, for the way it brought people low, then humiliation is no small harm. Anyone with power over another, a parent, an employer, a manager, a teacher, can make someone feel small, and can do it without raising a hand. The verse gives that kind of treatment a hard name. Whoever has been brought out of humiliation has the least excuse of all to become its cause in someone else's life.",
            "bn": "শিক্ষার বাকি অর্ধেক আসে বিশেষণটি থেকে। তাফসীরকারদের ব্যাখ্যামতো শাস্তিটার এই নাম যদি হয়ে থাকে মানুষকে নিচু করার কারণে, তবে অপমান ছোটখাটো ক্ষতি নয়। অন্যের উপর যার ক্ষমতা আছে, যেমন বাবা-মা, মালিক, ঊর্ধ্বতন কর্মকর্তা বা শিক্ষক, তিনি চাইলে কাউকে ছোট করে দিতে পারেন, গায়ে হাত না তুলেও। আয়াত এমন আচরণকে কঠিন এক নামে ডাকে। যাকে অপমান থেকে বের করে আনা হয়েছে, অন্যের জীবনে অপমানের কারণ হওয়ার অজুহাত তার সবচেয়ে কম।"
          }
        ]
      }
    ]
  },
  "44:32": {
    "sections": [
      {
        "h": {
          "en": "After the Sea, a Choosing",
          "bn": "সাগর পারের পর বাছাই"
        },
        "p": [
          {
            "en": "Wa-laqadi khtarnahum 'ala 'ilmin 'ala-l-'alamin: and We certainly chose them, knowingly, over the worlds. The verse has six Arabic words, and it opens with the same emphatic wa-laqad that opened 44:30. It names no one new. The pronoun them carries over from the Children of Israel named two verses earlier, and at-Tabari, al-Qurtubi, the Muyassar and Ma'arif al-Qur'an name them so, although al-Baghawi, as a later section shows, narrows the word to the believers among them.",
            "bn": "ওয়া লাকাদিখতারনাহুম আলা ইলমিন আলাল আলামীন: আমি জেনে বুঝেই তাদের বেছে নিয়েছিলাম বিশ্ববাসীর উপর। আরবিতে আয়াতটিতে মাত্র ছয়টি শব্দ। শুরু হয়েছে সেই একই জোরালো ওয়া লাকাদ দিয়ে, যা দিয়ে ৪৪:৩০ শুরু হয়েছিল। নতুন কারও নাম এখানে নেই। 'তাদের' সর্বনামটি ফিরে যায় দুই আয়াত আগে উল্লিখিত বানী ইসরাঈলের দিকে। তাবারী, কুরতুবী, মুয়াসসার আর মাআরিফুল কুরআন তাদের নামই উল্লেখ করে। তবে বাগাভী শব্দটিকে আরও সংকুচিত করে বলেন, এখানে উদ্দেশ্য তাদের মধ্যকার মুমিনরা। পরের এক অংশে সে কথা আসবে।"
          },
          {
            "en": "The rescue itself, from the humiliating torment and from Pharaoh, belongs to 44:30 and 44:31, which an earlier article in this module has already read. What matters here is the order. Three verses in a row tell what Allah did for one people: He saved them, He chose them, and He gave them signs in which there was a clear trial (44:33). Then the surah turns, in 44:34, to those who say there is nothing beyond the first death. This article stays with the middle step and the trial that follows it, because each explains the other.",
            "bn": "অপমানজনক শাস্তি আর ফেরাউনের হাত থেকে উদ্ধারের কথা ৪৪:৩০ ও ৪৪:৩১ আয়াতের। এ মডিউলের আগের একটি প্রবন্ধে তা নিয়ে আলোচনা হয়ে গেছে। এখানে দেখার বিষয় হলো ক্রম। পরপর তিন আয়াতে একই জাতির জন্য আল্লাহর তিনটি কাজের কথা। তিনি তাদের রক্ষা করলেন, বেছে নিলেন, তারপর এমন সব নিদর্শন দিলেন যাতে ছিল সুস্পষ্ট পরীক্ষা (৪৪:৩৩)। এরপর ৪৪:৩৪-এ সূরা ফিরে যায় তাদের দিকে, যারা বলে প্রথম মৃত্যুর পর আর কিছু নেই। এ প্রবন্ধ মাঝের ধাপটি নিয়ে, আর তার পরের পরীক্ষাটি নিয়ে। কারণ একটিকে বুঝতে অন্যটি লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Words, Two 'Ala",
          "bn": "ছয় শব্দে দুইবার 'আলা'"
        },
        "p": [
          {
            "en": "The verb is ikhtarna, We chose. As-Sa'di explains it with two near synonyms, istafaynahum wa-ntaqaynahum: We selected them and picked them out. The Muyassar, rewording the whole verse in plain Arabic, simply swaps in istafayna, the verb the Qur'an uses elsewhere for choosing prophets and Maryam (AS). At-Tabari keeps the verse's own verb. Their attention goes instead to the two short phrases that follow, each opened by the same preposition, 'ala.",
            "bn": "ক্রিয়াটি ইখতারনা, আমি বেছে নিলাম। সা'দী এর ব্যাখ্যায় কাছাকাছি অর্থের দুটি শব্দ ব্যবহার করেন: ইসতাফাইনাহুম ওয়ানতাকাইনাহুম, অর্থাৎ আমি তাদের মনোনীত করলাম, বাছাই করে আলাদা করলাম। মুয়াসসার পুরো আয়াতটি সহজ আরবিতে বলতে গিয়ে ক্রিয়াটি বদলে লেখে ইসতাফাইনা। কুরআন অন্য জায়গায় নবীদের আর মারইয়াম (আঃ)-কে বাছাইয়ের কথা বলতে এই ক্রিয়াটিই ব্যবহার করে। তাবারী আয়াতের নিজের ক্রিয়াটিই রেখেছেন। তাঁদের মনোযোগ বরং পরের দুটি ছোট বাক্যাংশে, যার দুটিই শুরু হয়েছে একই অব্যয় 'আলা' দিয়ে।"
          },
          {
            "en": "The first 'ala is joined to knowledge, 'ala 'ilm; the second to the worlds, 'ala-l-'alamin. At-Tabari unfolds the whole verse in one sentence: We chose the Children of Israel 'ala 'ilmin minna bihim, with knowledge from Us of them, over the worlds of the people of their time then, and that was the time of Musa (AS). The translation in this app renders it by knowledge over [all] the worlds, and the bracketed all is the translator's addition. Whether all belongs there is exactly what the commentators discuss.",
            "bn": "প্রথম 'আলা' যুক্ত হয়েছে জ্ঞানের সঙ্গে, আলা ইলম। দ্বিতীয়টি বিশ্ববাসীর সঙ্গে, আলাল আলামীন। তাবারী একটি বাক্যে পুরো আয়াত খুলে বলেন: আমি বানী ইসরাঈলকে বেছে নিয়েছিলাম আলা ইলমিন মিন্না বিহিম, অর্থাৎ তাদের সম্পর্কে আমার জ্ঞানের ভিত্তিতে, সেদিনকার যুগের মানুষের উপর। আর সে যুগ ছিল মূসা (আঃ)-এর যুগ। এই অ্যাপের ইংরেজি অনুবাদে আছে by knowledge over [all] the worlds। বন্ধনীর ভেতরের all শব্দটি অনুবাদকের যোগ করা। সেখানে all বসে কি না, তাফসীরকারদের আলোচনা ঠিক সেটা নিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing Them, Then Choosing",
          "bn": "জেনে নিয়ে তারপর বাছাই"
        },
        "p": [
          {
            "en": "Whose knowledge, and of what? On the first question the commentators agree: the knowledge is Allah's. At-Tabari and the Muyassar both say 'ala 'ilmin minna bihim, with knowledge from Us of them. Al-Baghawi says only bihim, of them. Al-Jalalayn says with a knowledge that We had of their state. In this plain sense the phrase rules out chance. The choice was not made blindly and was not a reward stumbled into; it was made by Him who already knew the people He was choosing.",
            "bn": "জ্ঞানটা কার, আর কী নিয়ে? প্রথম প্রশ্নে তাফসীরকারেরা একমত: জ্ঞান আল্লাহর। তাবারী আর মুয়াসসার দুজনই বলেন, আলা ইলমিন মিন্না বিহিম, তাদের সম্পর্কে আমার জ্ঞানের ভিত্তিতে। বাগাভী শুধু বলেন বিহিম, তাদের সম্পর্কে। জালালাইন বলে, তাদের অবস্থা সম্পর্কে আমার যে জ্ঞান ছিল, তার ভিত্তিতে। এই সরল অর্থে বাক্যাংশটি আকস্মিকতার সম্ভাবনা নাকচ করে দেয়। বাছাইটা অন্ধভাবে হয়নি, হঠাৎ জুটে যাওয়া কোনো পুরস্কারও নয়। যাদের বেছে নেওয়া হলো, যিনি বেছে নিলেন তিনি তাদের আগে থেকেই জানতেন।"
          },
          {
            "en": "On the second question, what the knowledge took in, they give different emphases. Al-Qurtubi says the choice was made with knowledge of them li-kathrati-l-anbiya'i minhum, because of the great number of prophets among them. As-Sa'di says it was with knowledge of them wa bi-stihqaqihim li-dhalika-l-fadl, and of their being deserving of that favour. Ma'arif al-Qur'an reads the phrase as a reminder that every act of Allah carries wisdom: the wisdom behind His knowledge called for them to be given distinction, and so they were given it.",
            "bn": "দ্বিতীয় প্রশ্নে, অর্থাৎ জ্ঞানটা কী কী জানত, সেখানে তাঁদের জোর ভিন্ন ভিন্ন জায়গায়। কুরতুবী বলেন, বাছাই হয়েছিল তাদের সম্পর্কে জ্ঞানের ভিত্তিতে, লি-কাসরাতিল আম্বিয়াই মিনহুম, কারণ তাদের মধ্যে নবীর সংখ্যা ছিল অনেক। সা'দী বলেন, তাদের সম্পর্কে জ্ঞান, আর সেই মর্যাদার যোগ্য হওয়ার জ্ঞান। মাআরিফুল কুরআন এখানে মনে করিয়ে দেয় যে আল্লাহর প্রতিটি কাজের পেছনে হিকমত থাকে। তাঁর জ্ঞানের ভেতরের হিকমতই চেয়েছিল তাদের শ্রেষ্ঠত্ব দেওয়া হোক, আর তাই দেওয়া হয়েছিল।"
          },
          {
            "en": "Two later commentaries go further. Maududi's Tafhim al-Qur'an writes that Allah was well aware of both the qualities and the weaknesses of the Children of Israel, did not choose them blindly, and found them the most suitable people of their age to carry His message and His Oneness. Kashf al-Asrar, in an allusive vein, says they were chosen with knowledge of their hearts' love for Him despite the many sins they committed against Him. On these readings, knowingly includes knowing the lapses too.",
            "bn": "পরবর্তী যুগের দুটি তাফসীর আরও এক ধাপ এগিয়ে যায়। মাওদূদীর তাফহীমুল কুরআন লেখে, বানী ইসরাঈলের গুণ আর দুর্বলতা দুটোই আল্লাহ ভালো করে জানতেন। তিনি তাদের অন্ধভাবে বাছেননি। সে যুগে তাঁর বাণী আর তাওহীদের পতাকা বইবার জন্য তাঁর জ্ঞানে তারাই ছিল সবচেয়ে উপযুক্ত। কাশফুল আসরার ইশারার ভঙ্গিতে লেখে: তাদের অন্তরে তাঁর প্রতি যে ভালোবাসা ছিল, তা জেনেই তাদের বাছাই করা হয়, যদিও তাঁর বিরুদ্ধে তাদের গুনাহ ছিল অনেক। এই পাঠে 'জেনে বুঝে' কথাটার মধ্যে তাদের পদস্খলনের জ্ঞানও পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Age Has Its World",
          "bn": "প্রতি যুগের নিজস্ব জগৎ"
        },
        "p": [
          {
            "en": "Most commentators fetched read al-'alamin, the worlds, as the people of that one age. At-Tabari writes 'ala 'alami ahli zamanihim yawma'idhin, over the worlds of the people of their time then, names that time as the time of Musa (AS), and adds that the people of interpretation said the same. He gives Qatada through two chains. In one: they were chosen over the people of that time of theirs, wa li-kulli zamanin 'alam, and every age has its world. In the other: the world of that time.",
            "bn": "সংগৃহীত তাফসীরগুলোর বেশিরভাগ আলামীন বা বিশ্ববাসী শব্দটিকে বোঝে সেই এক যুগের মানুষ হিসেবে। তাবারী লেখেন, আলা আলামী আহলি যামানিহিম ইয়াওমাইযিন, সেদিনকার যুগের মানুষের উপর। সে যুগকে তিনি নির্দিষ্ট করে বলেন মূসা (আঃ)-এর যুগ। সঙ্গে যোগ করেন, তাফসীরবিদরাও এমনটাই বলেছেন। কাতাদার কথা তিনি আনেন দুটি সনদে। একটিতে: তাদের বাছাই করা হয়েছিল তাদের সেই যুগের মানুষের উপর, ওয়া লি-কুল্লি যামানিন আলাম, প্রতিটি যুগের আছে নিজের জগৎ। অন্যটিতে: সেই যুগের জগৎ।"
          },
          {
            "en": "Mujahid, also in at-Tabari, puts it more narrowly still: 'ala man hum bayna zahranayhi, over those in whose midst they lived. The Muyassar, al-Baghawi and al-Jalalayn all say the worlds of their time, and al-Jalalayn specifies the rational beings. Tanwir al-Miqbas, the commentary attributed to Ibn 'Abbas, likewise says of their time, and lists what the choosing consisted of: food sent down to them, the Scripture and a Messenger, and their rescue from Pharaoh, his people and drowning.",
            "bn": "মুজাহিদের কথাও তাবারীতে আছে, আরও সংকুচিত করে: আলা মান হুম বাইনা যাহরানাইহি, যাদের মাঝখানে তারা বাস করত, তাদের উপর। মুয়াসসার, বাগাভী আর জালালাইন সবাই বলেন, তাদের যুগের বিশ্ববাসী। জালালাইন আরও নির্দিষ্ট করে বলে, বিবেকবান সৃষ্টি। ইবন আব্বাসের নামে প্রচলিত তাফসীর তানবীরুল মিকবাসও বলে, তাদের যুগের। সেখানে বাছাইয়ের উপাদানগুলোও গোনা হয়েছে: আসমান থেকে নামানো খাবার, কিতাব আর রাসূল, আর ফেরাউন, তার লোকজন ও ডুবে মরা থেকে রক্ষা।"
          },
          {
            "en": "Ibn Kathir supports the time-bound reading from the Qur'an's own usage. To Musa (AS) Allah says in 7:144, I have chosen you over the people, meaning the people of his time. To Maryam (AS) the angels say in 3:42 that she was chosen over the women of the worlds, meaning in her time, and he gives his reason: Khadija is above her in merit, and so is Asiya the wife of Pharaoh, or else equal to her. Ma'arif al-Qur'an draws the same parallel.",
            "bn": "কুরআনের নিজের ব্যবহার থেকে ইবন কাসীর এই যুগসীমিত পাঠের পক্ষে প্রমাণ আনেন। ৭:১৪৪ আয়াতে আল্লাহ মূসা (আঃ)-কে বলেন, আমি তোমাকে মানুষের উপর বেছে নিয়েছি। এখানে মানুষ মানে তাঁর যুগের মানুষ। ৩:৪২ আয়াতে ফেরেশতারা মারইয়াম (আঃ)-কে বলেন, তাঁকে বিশ্বের নারীদের উপর বেছে নেওয়া হয়েছে। ইবন কাসীরের মতে এর মানে তাঁর যুগের নারী। কারণ হিসেবে তিনি বলেন, খাদীজা মর্যাদায় তাঁর চেয়ে বড়, ফেরাউনের স্ত্রী আসিয়াও তাই, কিংবা তাঁর সমান। মাআরিফুল কুরআনও একই দৃষ্টান্ত টানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Qurtubi Keeps Three Views",
          "bn": "কুরতুবীর কাছে তিন মত"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the time-bound reading first, as the view of Qatada and others, citing what Allah says to this community in 3:110, kuntum khayra ummatin ukhrijat li-n-nas, you are the best community brought forth for mankind. Then he records a second view, introduced with qila, it has been said: over all the worlds, by the prophets He placed among them, a distinction belonging to them alone. He notes that Ibn 'Isa and al-Zamakhshari, among others, report it. On that view, he says, 3:110 means best after the Children of Israel.",
            "bn": "কুরতুবী প্রথমে যুগসীমিত পাঠটি আনেন কাতাদা ও অন্যদের মত হিসেবে। এর পক্ষে দলিল দেন ৩:১১০ আয়াত থেকে, যেখানে আল্লাহ এই উম্মতকে বলেন: কুনতুম খাইরা উম্মাতিন উখরিজাত লিন্নাস, মানুষের জন্য যত উম্মত বের করা হয়েছে, তোমরা তাদের মধ্যে শ্রেষ্ঠ। এরপর 'বলা হয়েছে' কথাটি দিয়ে তিনি দ্বিতীয় একটি মত আনেন। সে মতে বাছাইটা সমস্ত জগতের উপর, তাদের মধ্যে নবী পাঠানোর কারণে, আর এ মর্যাদা কেবল তাদেরই। তিনি জানান, ইবন ঈসা, যামাখশারী ও আরও কয়েকজন মতটি উল্লেখ করেছেন। তাঁর ভাষায়, সে মত মানলে ৩:১১০-এর অর্থ দাঁড়ায় বানী ইসরাঈলের পরে শ্রেষ্ঠ।"
          },
          {
            "en": "He closes that view with wa-Allahu a'lam, and Allah knows best, and adds a third, also with qila: that this choosing refers back to their rescue from drowning and their being made heirs of the land after Pharaoh. As-Sa'di takes a middle course. The worlds, he says, are those of their time and of those before and after them, until Allah brought the community of Muhammad ﷺ, who were then favoured over all the worlds and made the best community brought forth for mankind.",
            "bn": "সেই মতের শেষে তিনি লেখেন, ওয়াল্লাহু আ'লাম, আল্লাহই ভালো জানেন। তারপর আবার 'বলা হয়েছে' দিয়ে তৃতীয় একটি মত আনেন: এ বাছাই বলতে বোঝায় ডুবে মরা থেকে তাদের উদ্ধার, আর ফেরাউনের পর তাদের ভূমির উত্তরাধিকারী করা। সা'দী মাঝামাঝি একটি পথ নেন। তাঁর মতে বিশ্ববাসী মানে তাদের যুগের মানুষ, তাদের আগের ও পরের মানুষও। এই অবস্থা চলেছে যতদিন না আল্লাহ মুহাম্মাদ ﷺ-এর উম্মতকে আনলেন। তখন তাদেরকে সমস্ত জগতের উপর মর্যাদা দেওয়া হলো, আর মানুষের জন্য বের করা শ্রেষ্ঠ উম্মত বানানো হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an holds to the time-bound reading but allows that the Children of Israel may have some distinction over all peoples from one particular angle, while the community of the final Messenger ﷺ holds the highest standing taken as a whole. These are real differences of scope, and this article leaves them side by side. None of the commentaries fetched for this verse attaches a hadith to it; Ibn Kathir's closing line on the merit of 'A'isha concerns women's merit, not this verse.",
            "bn": "মাআরিফুল কুরআন যুগসীমিত পাঠটিই ধরে রাখে। তবে মেনে নেয় যে কোনো একটি বিশেষ দিক থেকে বানী ইসরাঈলের হয়তো সব যুগের সব মানুষের উপর কিছু শ্রেষ্ঠত্ব থাকতে পারে। আর সামগ্রিকভাবে সর্বোচ্চ মর্যাদা শেষ নবী ﷺ-এর উম্মতের। পরিধি নিয়ে এগুলো সত্যিকারের মতভেদ, আর এ প্রবন্ধ এগুলোকে পাশাপাশি রেখে দিচ্ছে। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। আয়েশা (রাঃ)-এর মর্যাদা নিয়ে ইবন কাসীরের শেষ লাইনটি নারীদের মর্যাদা প্রসঙ্গে, এ আয়াত প্রসঙ্গে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs That Carried a Test",
          "bn": "নিদর্শনের ভেতরে পরীক্ষা"
        },
        "p": [
          {
            "en": "The next verse completes the thought: wa-ataynahum mina-l-ayati ma fihi bala'un mubin, and We gave them signs in which there was a clear trial (44:33). At-Tabari explains the signs as lessons and admonitions, in which lay a test that makes plain, to anyone who reflects, that Allah was testing them by it. Ibn Kathir calls the signs proofs and events that broke the ordinary course of things, and the bala' an open test for whoever would be guided by them.",
            "bn": "পরের আয়াত কথাটা সম্পূর্ণ করে: ওয়া আতাইনাহুম মিনাল আয়াতি মা ফীহি বালাউম মুবীন, আর আমি তাদের এমন সব নিদর্শন দিয়েছিলাম যাতে ছিল সুস্পষ্ট পরীক্ষা (৪৪:৩৩)। তাবারী নিদর্শন বলতে বোঝেন শিক্ষা আর উপদেশ। তার ভেতরে ছিল এমন এক পরীক্ষা, যে ভেবে দেখবে তার কাছে স্পষ্ট হয়ে যাবে যে আল্লাহ এ দিয়ে তাদের পরখ করছেন। ইবন কাসীর নিদর্শন বলতে বোঝেন দলিল-প্রমাণ আর স্বাভাবিক নিয়মের বাইরের ঘটনা। আর 'বালা' তাঁর কাছে খোলা এক পরীক্ষা, দেখার জন্য যে কে এ দিয়ে হিদায়াত পায়।"
          },
          {
            "en": "At-Tabari records a disagreement about the trial. Qatada took it as a trial by blessings: Allah saved them from their enemy, brought them across the sea, shaded them with cloud and sent down manna and quails. Ibn Zayd took it as a trial by ease and hardship, reciting 21:35, We test you with evil and with good as a trial: to see who would believe in the signs and benefit from them, and who would waste them. At-Tabari judges that nothing restricts it to one, and Allah tested them by both.",
            "bn": "পরীক্ষাটা কী দিয়ে, তা নিয়ে তাবারী একটি মতভেদ উল্লেখ করেন। কাতাদার মতে পরীক্ষা ছিল নিয়ামত দিয়ে: আল্লাহ তাদের শত্রুর হাত থেকে বাঁচালেন, সাগর পার করালেন, মেঘ দিয়ে ছায়া দিলেন, মান্না আর সালওয়া নামালেন। ইবন যায়দের মতে পরীক্ষা ছিল সুখ আর কষ্ট দুটো দিয়েই। তিনি পড়েন ২১:৩৫ আয়াত: আমি তোমাদের মন্দ ও ভালো দিয়ে পরীক্ষা করি। দেখার জন্য যে কে নিদর্শনে ঈমান আনে, তা থেকে উপকার নেয়, আর কে তা নষ্ট করে। তাবারীর সিদ্ধান্ত: কোনো কিছুই একটিকে আলাদা করে নির্দিষ্ট করে না। আল্লাহ দুটো দিয়েই তাদের পরীক্ষা করেছিলেন।"
          },
          {
            "en": "As-Sa'di reads bala' here in its other sense. For him it is ihsanun kathirun zahir, abundant and evident goodness from Allah to them, and at the same time hujja 'alayhim, a proof against them, establishing the truth of what Musa (AS) had brought. Put beside 44:32, the pairing is telling. The verse of choosing is followed at once by a verse of testing, and the very gifts that marked the choosing are the ones by which they would be weighed. A favour of that size is never only a favour.",
            "bn": "সা'দী এখানে 'বালা' শব্দের অন্য অর্থটি নেন। তাঁর কাছে এর মানে ইহসানুন কাসীরুন যাহির, তাদের প্রতি আল্লাহর প্রচুর ও প্রকাশ্য অনুগ্রহ। আবার একই সঙ্গে হুজ্জাতুন আলাইহিম, তাদের বিরুদ্ধে দলিল, যা মূসা (আঃ)-এর আনা বাণীর সত্যতা প্রমাণ করে। ৪৪:৩২-এর পাশে রাখলে জোড়াটা অনেক কিছু বলে। বাছাইয়ের আয়াতের ঠিক পরেই আসে পরীক্ষার আয়াত। আর যেসব দান দিয়ে বাছাইটা চেনা গেল, সেগুলো দিয়েই তাদের ওজন করা হবে। এত বড় অনুগ্রহ কখনো কেবল অনুগ্রহ থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Tied to Faith and an Age",
          "bn": "ঈমান আর যুগে বাঁধা"
        },
        "p": [
          {
            "en": "Several sources tie the choosing to more than birth. Al-Baghawi glosses them as mu'mini Bani Isra'il, the believers of the Children of Israel. Kashf al-Asrar likewise says the verse came down about the faithful among them. As-Sa'di links the choice to their deserving the favour, and Maududi to the task of carrying the message. Then 44:33 turns the gifts into a test. With the time-bound sense of the worlds, the choosing these commentators describe is conditional and belongs to its age, not a rank that passes down regardless of conduct.",
            "bn": "কয়েকটি তাফসীর বাছাইকে জন্মের বাইরের কিছুর সঙ্গে বাঁধে। বাগাভী 'তাদের' বলতে বোঝান মু'মিনী বানী ইসরাঈল, বানী ইসরাঈলের মুমিনরা। কাশফুল আসরারও বলে, আয়াতটি নেমেছে তাদের মধ্যকার ঈমানদারদের নিয়ে। সা'দী বাছাইকে যুক্ত করেন তাদের যোগ্যতার সঙ্গে, মাওদূদী বাণী বহনের দায়িত্বের সঙ্গে। তারপর ৪৪:৩৩ সেই দানগুলোকেই পরীক্ষা বানিয়ে দেয়। এর সঙ্গে 'বিশ্ববাসী' শব্দের যুগসীমিত অর্থ মিলিয়ে পড়লে বোঝা যায়, এই তাফসীরকারেরা যে বাছাইয়ের কথা বলেন তা শর্তসাপেক্ষ, আর নিজের যুগের। আচরণ যা-ই হোক, বংশ ধরে নেমে আসা কোনো পদমর্যাদা তা নয়।"
          },
          {
            "en": "This needs saying plainly. The verse describes what Allah did for a community in the time of Musa (AS), as at-Tabari states outright, and it licenses nothing against any living person or community. It confers nothing on any of them either. This article draws no link from it, for or against, to any people, religion or state of the present day. To read it as a charter of permanent standing, or as a charge against anyone now alive, goes beyond what any commentator quoted here says.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। মূসা (আঃ)-এর যুগে একটি জাতির জন্য আল্লাহ যা করেছিলেন, আয়াতটি তারই বর্ণনা। তাবারী তা স্পষ্ট ভাষায় বলেছেন। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। তাদের কাউকে কোনো বিশেষ মর্যাদাও দেয় না। বর্তমান যুগের কোনো জাতি, ধর্ম বা রাষ্ট্রের সঙ্গে, পক্ষে হোক বা বিপক্ষে, এ প্রবন্ধ এর কোনো যোগসূত্র টানে না। একে চিরস্থায়ী মর্যাদার সনদ বানানো, কিংবা আজকের কারও বিরুদ্ধে অভিযোগপত্র বানানো, দুটোই এখানে উদ্ধৃত প্রত্যেক তাফসীরকারের কথার সীমা ছাড়িয়ে যাওয়া।"
          },
          {
            "en": "The same discipline binds the Muslim reader. Al-Qurtubi and as-Sa'di both reach for 3:110 to place this community, and that verse states its own terms in the very next words: ta'muruna bi-l-ma'rufi wa tanhawna 'ani-l-munkari wa tu'minuna bi-llah, you enjoin what is right, forbid what is wrong and believe in Allah. A people's place in the Qur'an's account is described alongside what they do. Anyone who reads 44:32 as a lesson about others, and 3:110 as a compliment to themselves, has not yet read either verse closely.",
            "bn": "মুসলিম পাঠকের জন্যও একই নিয়ম। এ উম্মতের অবস্থান বোঝাতে কুরতুবী ও সা'দী দুজনই ৩:১১০ আয়াতের কাছে যান। আর সে আয়াত ঠিক পরের কথাতেই নিজের শর্ত জানিয়ে দেয়: তা'মুরূনা বিল মা'রূফি ওয়া তানহাওনা আনিল মুনকারি ওয়া তু'মিনূনা বিল্লাহ, তোমরা ভালো কাজের আদেশ দাও, মন্দ কাজে নিষেধ করো, আর আল্লাহর উপর ঈমান রাখো। কুরআনের বর্ণনায় কোনো জাতির অবস্থান আসে তাদের কাজের সঙ্গে মিলিয়ে। কেউ যদি ৪৪:৩২-কে অন্যদের নিয়ে শিক্ষা আর ৩:১১০-কে নিজের প্রশংসা বলে পড়ে, তবে দুটোর কোনোটিই সে এখনো মন দিয়ে পড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Known, Chosen, Then Weighed",
          "bn": "জানা, বাছাই, তারপর ওজন"
        },
        "p": [
          {
            "en": "For any reader the verse leaves a sobering thought. Whatever good reaches a person, guidance, knowledge, a righteous family, a place among people of faith, was given 'ala 'ilm, by One who already knew them, their strengths and their weak points alike. Nothing was handed over by mistake, or to be kept like a title. In the pattern of these two verses, the gift comes first and the test is folded inside it. What is given is also what will be asked about.",
            "bn": "যেকোনো পাঠকের জন্য আয়াতটি একটা গম্ভীর ভাবনা রেখে যায়। হিদায়াত, ইলম, নেককার পরিবার, ঈমানদারদের মাঝে একটুখানি জায়গা, যে ভালোই কারও কাছে পৌঁছাক, তা দেওয়া হয়েছে আলা ইলম, এমন একজনের পক্ষ থেকে যিনি তাকে আগে থেকেই জানেন, তার শক্তি আর দুর্বলতা দুটোই। ভুল করে কিছু হাতে আসেনি, উপাধির মতো আঁকড়ে রাখার জন্যও নয়। এই দুই আয়াতের ধরনে দান আসে আগে, আর পরীক্ষা থাকে তার ভাঁজে। যা দেওয়া হয়, তার হিসাবই চাওয়া হয়।"
          },
          {
            "en": "The question to carry away, then, is not who was chosen once, but what one is doing with what one was given. Is it held with gratitude, used for the task it came with, and kept apart from any sense of being above others? The Children of Israel in the age of Musa (AS) were known, chosen and tested. Every later reader is known too, and is being tested now, by the ease and the hardship that at-Tabari said are both forms of the same trial.",
            "bn": "তাই পাঠক যে প্রশ্নটা সঙ্গে নিয়ে যেতে পারেন, তা এই নয় যে একসময় কাকে বেছে নেওয়া হয়েছিল। প্রশ্ন হলো, আমাকে যা দেওয়া হয়েছে তা দিয়ে আমি কী করছি। শুকরিয়ার সঙ্গে ধরে রাখছি তো? যে দায়িত্ব নিয়ে এসেছে, সে কাজে লাগাচ্ছি তো? অন্যের উপরে নিজেকে ভাবার অহংকার থেকে দূরে রাখছি তো? মূসা (আঃ)-এর যুগের বানী ইসরাঈলকে জানা হয়েছিল, বাছাই করা হয়েছিল, পরীক্ষা করা হয়েছিল। পরের প্রত্যেক পাঠককেও তিনি জানেন। আর এখন তার পরীক্ষা চলছে সুখ আর কষ্ট দিয়ে, তাবারী যে দুটোকে একই পরীক্ষার দুই রূপ বলেছেন।"
          }
        ]
      }
    ]
  },
  "44:33": {
    "sections": [
      {
        "h": {
          "en": "Given, After Being Saved",
          "bn": "রক্ষার পরে দান"
        },
        "p": [
          {
            "en": "Wa-ataynahum mina-l-ayati ma fihi bala'un mubin: and We gave them of the signs that in which there was a clear trial. The verse closes a short passage on the Children of Israel that opens at 44:30. They were saved from the humiliating torment, from Pharaoh, a haughty one among the transgressors; they were chosen, by knowledge, over the worlds; and now they are given signs. Three verbs speak in Allah's voice: We saved, We chose, We gave. The rescue and the choosing have their own articles. This one stays with the giving, and with the one word that describes what lay inside it.",
            "bn": "ওয়া আতাইনাহুম মিনাল আয়াতি মা ফীহি বালাউম মুবীন: আর আমি তাদের এমন নিদর্শন দিয়েছিলাম, যাতে ছিল সুস্পষ্ট পরীক্ষা। বানী ইসরাঈলকে নিয়ে ছোট যে অংশটি ৪৪:৩০ আয়াতে শুরু হয়েছে, এ আয়াতে তা শেষ হয়। তাদের রক্ষা করা হয়েছিল অপমানজনক শাস্তি থেকে, ফেরাউনের হাত থেকে, যে ছিল সীমালঙ্ঘনকারীদের মধ্যে উদ্ধত। জেনে বুঝে তাদের বেছে নেওয়া হয়েছিল বিশ্বজগতের উপর। এবার তাদের দেওয়া হলো নিদর্শন। তিনটি ক্রিয়াই আল্লাহর নিজের কণ্ঠে: আমি রক্ষা করেছি, আমি বেছে নিয়েছি, আমি দিয়েছি। রক্ষা আর বেছে নেওয়ার কথা আলাদা প্রবন্ধে এসেছে। এ লেখা থাকবে দেওয়ার কথায়, আর সেই দানের ভেতরে কী ছিল তা বোঝাতে যে একটি শব্দ এসেছে, তার কাছে।"
          },
          {
            "en": "The passage also answers its own beginning. At 44:17 the surah said wa-laqad fatanna qablahum qawma fir'awn, and We had already tried before them the people of Pharaoh, when a noble messenger came to them. The account that began with Pharaoh's people being tried ends with the rescued people being tried as well, this time through gifts. Neither side of the sea was left without a test. Then 44:34 turns straight to inna ha'ula'i, indeed these, the deniers the surah has been addressing, so the story of Israel is set before a later audience as something to weigh, not as an old tale.",
            "bn": "অংশটির শেষ তার শুরুর সঙ্গে মিলে যায়। ৪৪:১৭ আয়াতে সূরা বলেছিল, ওয়া লাকাদ ফাতান্না কাবলাহুম কাওমা ফিরআউন: এদের আগে আমি ফেরাউনের সম্প্রদায়কে পরীক্ষা করেছিলাম, যখন তাদের কাছে এসেছিলেন এক সম্মানিত রাসূল। যে কাহিনি শুরু হয়েছিল ফেরাউনের লোকদের পরীক্ষা দিয়ে, তা শেষ হচ্ছে রক্ষা পাওয়া লোকদের পরীক্ষা দিয়ে। এবারের পরীক্ষা দানের ভেতর দিয়ে। সাগরের কোনো পাড়ই পরীক্ষার বাইরে থাকেনি। এরপর ৪৪:৩৪ আয়াত সরাসরি ফেরে ইন্না হাউলাই, অর্থাৎ এই লোকদের দিকে, যাদের সূরা এতক্ষণ সম্বোধন করছিল। তাই বানী ইসরাঈলের কাহিনি পুরোনো গল্প হয়ে থাকে না। পরের যুগের শ্রোতার সামনে তা রাখা হয় ভেবে দেখার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Clarity That Waits",
          "bn": "যে স্পষ্টতা অপেক্ষা করে"
        },
        "p": [
          {
            "en": "The verse does not name the signs. It describes them only by what they held: ma fihi, that in which there was. The test is placed inside the gift, as if packed within it from the start rather than added later. Then comes bala'un mubin. Bala' is the word the commentators will divide over, as the next sections show. Mubin, clear or making clear, already tells us something before that division begins: whatever the bala' was, it was not hidden from the people who received it. They could not later say that nothing had been asked of them.",
            "bn": "আয়াতটি নিদর্শনগুলোর নাম বলে না। শুধু বলে, সেগুলোর ভেতরে কী ছিল: মা ফীহি, যার মধ্যে ছিল। পরীক্ষাটা রাখা হয়েছে দানের ভেতরেই, যেন শুরু থেকেই তার মধ্যে ভরে দেওয়া, পরে জুড়ে দেওয়া নয়। তারপর আসে বালাউম মুবীন। বালা শব্দের অর্থ নিয়ে তাফসীরকারদের মত ভাগ হয়ে যাবে, পরের অংশগুলোতে তা আসছে। কিন্তু সেই মতভেদের আগেই মুবীন শব্দটি একটা কথা জানিয়ে দেয়। মুবীন মানে স্পষ্ট, কিংবা যা স্পষ্ট করে দেয়। বালা যা-ই হোক, যারা তা পেয়েছিল তাদের কাছে তা গোপন ছিল না। পরে তারা বলতে পারত না যে তাদের কাছে কিছুই চাওয়া হয়নি।"
          },
          {
            "en": "Two glosses of mubin are worth setting side by side. At-Tabari reads it as a test that makes plain, li-man ta'ammalahu, to whoever ponders it, that Allah was testing them by it. Ibn Kathir reads it as a test open and evident li-man ihtada bihi, for whoever was guided by it. Both tie the clarity to a person. The signs were plain, yet their plainness reached the one who reflected, or the one who accepted guidance. A clear sign does not force anyone. It stays clear, and it still waits for someone to read it.",
            "bn": "মুবীন শব্দের দুটি ব্যাখ্যা পাশাপাশি রাখলে একটা কথা ধরা পড়ে। তাবারীর মতে এ এমন পরীক্ষা, যা লিমান তাআম্মালাহু, অর্থাৎ যে ভেবে দেখে তার কাছে স্পষ্ট করে দেয় যে আল্লাহ এর মাধ্যমে তাদের পরীক্ষা করছিলেন। ইবন কাসীরের মতে এ পরীক্ষা খোলা ও প্রকাশ্য লিমানিহতাদা বিহি, অর্থাৎ যে এর দ্বারা হিদায়াত পেয়েছে তার জন্য। দুজনই স্পষ্টতাকে বেঁধেছেন একজন মানুষের সঙ্গে। নিদর্শন ছিল পরিষ্কার। তবু সেই পরিষ্কার কথা পৌঁছেছে তার কাছে, যে ভেবেছে, কিংবা যে হিদায়াত গ্রহণ করেছে। স্পষ্ট নিদর্শন কাউকে জোর করে না। সে স্পষ্টই থাকে, আর অপেক্ষা করে কেউ তাকে পড়বে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Signs, and for Whom",
          "bn": "কোন নিদর্শন, কার জন্য"
        },
        "p": [
          {
            "en": "Al-Qurtubi first glosses the signs as min al-mu'jizat li-Musa, among the miracles given to Musa (AS). He then sets out three views on which signs are meant, and pairs each with a different audience. The first is Qatada's: the signs were their rescue from Pharaoh, the parting of the sea for them, the shading of cloud over them and the sending down of manna and quails. On this view, he says, the verse is directed to the Children of Israel. At-Tabari and al-Baghawi both carry Qatada's list in nearly the same words.",
            "bn": "কুরতুবী প্রথমে নিদর্শনের ব্যাখ্যা দেন মিনাল মু'জিযাতি লিমূসা, অর্থাৎ মূসা (আঃ)-কে দেওয়া মু'জিযাগুলোর কিছু। এরপর কোন নিদর্শন বোঝানো হয়েছে, সে বিষয়ে তিনটি মত তুলে ধরেন, আর প্রতিটি মতের সঙ্গে আলাদা শ্রোতা জুড়ে দেন। প্রথম মতটি কাতাদার। তাঁর মতে নিদর্শন হলো ফেরাউনের হাত থেকে তাদের উদ্ধার, তাদের জন্য সাগর চিরে দেওয়া, তাদের মাথার উপর মেঘের ছায়া আর মান্না ও সালওয়া নামানো। কুরতুবী বলেন, এ মত ধরলে আয়াতের কথা বানী ইসরাঈলের উদ্দেশে। তাবারী আর বাগাভীও কাতাদার এ তালিকা প্রায় একই শব্দে উদ্ধৃত করেছেন।"
          },
          {
            "en": "The second view is that the signs were the staff and the hand. Al-Qurtubi does not state flatly whose view this is; he says only that it seems to be the view of al-Farra. On this reading, he says, the address is turned towards Pharaoh's people. The third view is Ibn Zayd's: the signs were the evil Allah held them back from and the good He commanded them to do. Here, al-Qurtubi says, the address takes in both groups together, the people of Pharaoh and the Children of Israel.",
            "bn": "দ্বিতীয় মত হলো, নিদর্শন বলতে লাঠি আর হাত বোঝানো হয়েছে। মতটি কার, কুরতুবী তা নিশ্চিত করে বলেন না। তিনি শুধু বলেন, এটি সম্ভবত ফাররার মত। তাঁর কথায়, এ ব্যাখ্যায় সম্বোধন ঘুরে যায় ফেরাউনের সম্প্রদায়ের দিকে। তৃতীয় মত ইবন যায়দের। তাঁর মতে নিদর্শন হলো সেই মন্দ, যা থেকে আল্লাহ তাদের বিরত রেখেছেন, আর সেই ভালো, যার আদেশ তিনি তাদের দিয়েছেন। কুরতুবী বলেন, এ ব্যাখ্যায় সম্বোধন দুই দলকেই একসঙ্গে ধরে: ফেরাউনের সম্প্রদায় আর বানী ইসরাঈল।"
          },
          {
            "en": "Other sources lean towards the miracles of Musa (AS). The Muyassar glosses the signs as al-mu'jizat 'ala yad Musa, the miracles at the hand of Musa. Ma'arif al-Qur'an names the staff and the shining hand, and adds 'and others'. As-Sa'di calls them dazzling signs and evident miracles. None of these lists is offered as the only one, and none is a rival account of what happened. They are ways of drawing a circle round gifts the verse leaves unnamed.",
            "bn": "অন্য কয়েকটি সূত্র মূসা (আঃ)-এর মু'জিযার দিকেই ঝোঁকে। মুয়াসসার নিদর্শনের ব্যাখ্যা দেয় আলমু'জিযাতু আলা ইয়াদি মূসা, অর্থাৎ মূসার হাতে প্রকাশিত মু'জিযা। মাআরিফুল কুরআন নাম করে লাঠি আর উজ্জ্বল হাতের, সঙ্গে যোগ করে 'এবং আরও কিছু'। সা'দী এগুলোকে বলেন চোখ ধাঁধানো নিদর্শন আর প্রকাশ্য মু'জিযা। এর কোনো তালিকাই একমাত্র তালিকা হিসেবে আসেনি। ঘটনার পাল্টা কোনো বিবরণও এগুলো নয়। আয়াত নিজে যে দানগুলোর নাম বলেনি, সেগুলোর চারপাশে সীমারেখা টানার এগুলো ভিন্ন ভিন্ন চেষ্টা।"
          }
        ]
      },
      {
        "h": {
          "en": "One Noun, Four Readings",
          "bn": "এক বিশেষ্য, চার পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi then gives four senses for bala' mubin. The first is ni'ma zahira, an evident favour, which he gives from al-Hasan and Qatada. He supports it from the Qur'an and from poetry. In 8:17 the same root appears in wa-li-yubliya al-mu'minina minhu bala'an hasana, that He might test the believers with a good test, where the good bala' is something given to them. He also quotes a half-line of the poet Zuhayr, fa-ablahuma khayra al-bala'i alladhi yablu, as a witness that the word can carry the sense of doing someone good.",
            "bn": "এরপর কুরতুবী বালাউম মুবীন-এর চারটি অর্থ দেন। প্রথমটি নি'মাতুন যাহিরা, প্রকাশ্য নিয়ামত। এ অর্থ তিনি এনেছেন হাসান ও কাতাদা থেকে। এর পক্ষে তিনি কুরআন থেকেও দলিল দেন, কবিতা থেকেও। ৮:১৭ আয়াতে একই ধাতু এসেছে ওয়া লিইউবলিয়াল মু'মিনীনা মিনহু বালাআন হাসানা বাক্যে: যাতে তিনি মু'মিনদের এক উত্তম পরীক্ষায় ফেলেন। সেখানে উত্তম বালা বলতে তাদের দেওয়া কিছুই বোঝায়। কবি যুহাইরের একটি পঙক্তির অংশও তিনি উদ্ধৃত করেন, ফাআবলাহুমা খাইরাল বালাইল্লাযী ইয়াবলূ। এটি তাঁর সাক্ষী যে শব্দটি কারও উপকার করার অর্থও বহন করতে পারে।"
          },
          {
            "en": "The second sense runs the other way: 'adhab shadid, a severe punishment, which al-Qurtubi gives from al-Farra. The third is ikhtibar yatamayyazu bihi al-mu'min min al-kafir, a test by which the believer is told apart from the disbeliever, from 'Abd al-Rahman ibn Zayd. From Ibn Zayd too he gives a fourth: their trial by ease and by hardship, after which Ibn Zayd recited 21:35, wa-nablukum bi-sh-sharri wa-l-khayri fitna, and We test you with evil and with good as a trial. One noun has been read as a gift, a punishment, a sifting, and a test by both.",
            "bn": "দ্বিতীয় অর্থ একেবারে উল্টো দিকে যায়: আযাবুন শাদীদ, কঠিন শাস্তি। কুরতুবী এ অর্থ এনেছেন ফাররা থেকে। তৃতীয় অর্থ ইখতিবারুন ইয়াতামাইয়াযু বিহিল মু'মিনু মিনাল কাফির: এমন পরীক্ষা, যা মু'মিনকে কাফির থেকে আলাদা করে দেয়। এটি আবদুর রহমান ইবন যায়দের কথা। চতুর্থ অর্থও তিনি এনেছেন ইবন যায়দ থেকে: সচ্ছলতা আর কষ্ট, দুটো দিয়েই তাদের পরীক্ষা। এরপর ইবন যায়দ ২১:৩৫ আয়াত পড়েছিলেন, ওয়া নাবলূকুম বিশশাররি ওয়াল খাইরি ফিতনা: আমি তোমাদের মন্দ আর ভালো দিয়ে পরীক্ষা করি। একটি বিশেষ্যকে তাই পড়া হয়েছে চারভাবে: দান, শাস্তি, বাছাই, আর দুই দিক থেকেই পরীক্ষা।"
          },
          {
            "en": "Al-Qurtubi does not join the two lists himself, but read together they fit. Qatada's signs, the rescue and the food sent down, sit naturally with bala' as favour, and Qatada is named for both. The staff and the hand, which al-Qurtubi thinks resembles al-Farra's view and turns towards Pharaoh's people, sit with bala' as severe punishment, which he gives from al-Farra. Ibn Zayd's signs, the evil restrained and the good commanded, sit with a test that sorts believer from disbeliever on either side of the sea.",
            "bn": "কুরতুবী নিজে দুটি তালিকা জোড়া লাগাননি। তবে পাশাপাশি পড়লে তারা মিলে যায়। কাতাদার নিদর্শন, অর্থাৎ উদ্ধার আর নামিয়ে দেওয়া খাবার, স্বাভাবিকভাবেই নিয়ামত অর্থের বালার সঙ্গে খাপ খায়। দুই জায়গাতেই কাতাদার নাম আছে। লাঠি আর হাতের মত, যাকে কুরতুবী ফাররার মতের মতো মনে করেন এবং ফেরাউনের সম্প্রদায়ের দিকে ফেরান, খাপ খায় কঠিন শাস্তি অর্থের সঙ্গে, যা তিনি ফাররা থেকেই এনেছেন। আর ইবন যায়দের নিদর্শন, অর্থাৎ নিষেধ করা মন্দ আর আদেশ করা ভালো, মেলে সেই পরীক্ষার সঙ্গে, যা সাগরের দুই পাড়েই মু'মিনকে কাফির থেকে আলাদা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Favour and Test in One",
          "bn": "নিয়ামতও যখন পরীক্ষা"
        },
        "p": [
          {
            "en": "The shorter commentaries each lean one way, without denying the other. As-Sa'di reads bala' as ihsanun kathirun zahir, abundant and evident goodness from Allah to them, and in the same breath as a proof against them for the truth of what Musa (AS) brought. Ma'arif al-Qur'an translates the phrase as a manifest blessing, then adds that bala' has two senses, blessing and trial, and that both are possible here, citing al-Qurtubi. The Muyassar goes the other way and glosses it as their trial and testing, by ease and by hardship.",
            "bn": "সংক্ষিপ্ত তাফসীরগুলো একেকটি একেক দিকে ঝোঁকে, তবে অন্য দিকটা অস্বীকার করে না। সা'দী বালা পড়েন ইহসানুন কাসীরুন যাহির অর্থে: তাদের প্রতি আল্লাহর পক্ষ থেকে প্রচুর ও প্রকাশ্য অনুগ্রহ। একই নিঃশ্বাসে তিনি একে বলেন তাদের বিরুদ্ধে দলিল, মূসা (আঃ) যা নিয়ে এসেছিলেন তার সত্যতার প্রমাণ। মাআরিফুল কুরআন বাক্যাংশটির অনুবাদ করে প্রকাশ্য নিয়ামত। তারপর কুরতুবীর বরাতে যোগ করে, বালা শব্দের দুই অর্থ, নিয়ামত ও পরীক্ষা, আর এখানে দুটোই সম্ভব। মুয়াসসার যায় অন্য দিকে। তার ব্যাখ্যায় এর অর্থ তাদের পরীক্ষা ও যাচাই, সচ্ছলতা দিয়েও, কষ্ট দিয়েও।"
          },
          {
            "en": "The two senses are less opposed than they first look. A favour that is evident is also a favour that will be asked about, which is why as-Sa'di can call the same gifts goodness and proof in one sentence. Manna sent down from above is a kindness, and it is also a question: will the one who eats it give thanks, obey, and hold to the truth the signs were pointing to? Arabic keeps both in one noun. The verse shows that the gift and the exam arrived together.",
            "bn": "প্রথম দেখায় দুই অর্থকে যতটা বিপরীত মনে হয়, আসলে ততটা নয়। যে নিয়ামত প্রকাশ্য, সে নিয়ামতের হিসাবও চাওয়া হবে। তাই সা'দী এক বাক্যেই একই দানকে অনুগ্রহও বলতে পারেন, দলিলও বলতে পারেন। উপর থেকে নামানো মান্না এক দয়া। আবার তা এক প্রশ্নও: যে খাচ্ছে, সে কি শোকর করবে, আনুগত্য করবে, নিদর্শনগুলো যে সত্যের দিকে ইশারা করছিল তা আঁকড়ে থাকবে? আরবি ভাষা দুটো অর্থকে এক বিশেষ্যে ধরে রাখে। আয়াতটি দেখিয়ে দেয়, দান আর পরীক্ষা এসেছিল একসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where At-Tabari Will Not Narrow",
          "bn": "তাবারী যেখানে অর্থ সংকুচিত করেন না"
        },
        "p": [
          {
            "en": "At-Tabari opens with his own gloss: Allah gave them, of lessons and admonitions, that in which lay a test. He then records that the people of interpretation differed over the test. Some said Allah tried them by His blessings to them, and he cites Qatada's list of rescue, sea, cloud, manna and quails. Others said He tried them by ease and hardship, and he cites Ibn Zayd, who recited 21:35 and spoke of a trial to see who would believe in the signs and benefit from them, and who would let them go to waste.",
            "bn": "তাবারী শুরু করেন নিজের ব্যাখ্যা দিয়ে: আল্লাহ তাদের শিক্ষা ও উপদেশের এমন কিছু দিয়েছিলেন, যার মধ্যে ছিল পরীক্ষা। তারপর তিনি জানান, এ পরীক্ষা নিয়ে তাফসীরবিদদের মতভেদ আছে। কেউ বলেছেন, আল্লাহ তাদের পরীক্ষা করেছেন তাদের দেওয়া নিয়ামত দিয়ে। এর পক্ষে তিনি কাতাদার তালিকা আনেন: উদ্ধার, সাগর, মেঘ, মান্না ও সালওয়া। অন্যরা বলেছেন, পরীক্ষা ছিল সচ্ছলতা আর কষ্ট দিয়ে। এর পক্ষে আনেন ইবন যায়দকে, যিনি ২১:৩৫ আয়াত পড়ে বলেছিলেন, এ পরীক্ষা দেখার জন্য কে নিদর্শনে ঈমান আনে আর তা থেকে উপকার নেয়, আর কে তা নষ্ট করে।"
          },
          {
            "en": "His verdict is worth reading for its method. Allah has told us that He gave the Children of Israel signs that held their trial; a trial can come through ease and it can come through hardship; and He has set no evidence, lam yada' lana dalilan min khabarin wa-la 'aqlin, neither from a report nor from reason, that He meant one and not the other. Allah had in fact tested them by both. So the right course, at-Tabari concludes, is to say what Allah said: that He tested them.",
            "bn": "তাঁর রায়টি পড়ার মতো, বিশেষ করে তার পদ্ধতির জন্য। আল্লাহ জানিয়েছেন, তিনি বানী ইসরাঈলকে এমন নিদর্শন দিয়েছিলেন, যাতে তাদের পরীক্ষা ছিল। পরীক্ষা সচ্ছলতা দিয়েও আসতে পারে, কষ্ট দিয়েও আসতে পারে। আর তিনি আমাদের জন্য কোনো দলিল রাখেননি, লাম ইয়াদা' লানা দালীলান মিন খাবারিন ওয়ালা আকলিন, না কোনো বর্ণনা থেকে, না যুক্তি থেকে, যে তিনি একটা বুঝিয়েছেন আর অন্যটা নয়। বাস্তবে আল্লাহ তাদের দুটো দিয়েই পরীক্ষা করেছিলেন। তাই তাবারীর সিদ্ধান্ত, সঠিক পথ হলো আল্লাহ যা বলেছেন তা-ই বলা: তিনি তাদের পরীক্ষা করেছেন।"
          },
          {
            "en": "There is a discipline here for every reader. Where the Qur'an uses a wide word and nothing in a report or in reason narrows it, the honest course is to leave it as wide as Allah left it, rather than settle on the one reading that suits an argument. None of the commentaries fetched for this verse attaches a hadith to it, and this article quotes none. What the verse needs is already in its own words and in the verses it was read beside, 8:17 and 21:35.",
            "bn": "এখানে প্রত্যেক পাঠকের জন্য একটা শৃঙ্খলার শিক্ষা আছে। কুরআন যেখানে প্রশস্ত অর্থের শব্দ ব্যবহার করেছে, আর কোনো বর্ণনা বা যুক্তি তাকে সংকুচিত করে না, সেখানে সৎ পথ হলো আল্লাহ যতটা প্রশস্ত রেখেছেন ততটাই রাখা। কোনো যুক্তির সুবিধামতো একটি অর্থে আটকে যাওয়া নয়। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, এ প্রবন্ধও কোনো হাদীস উদ্ধৃত করছে না। আয়াতের যা দরকার, তা তার নিজের শব্দেই আছে, আর আছে যে আয়াতগুলোর পাশে রেখে তাকে পড়া হয়েছে সেগুলোতে: ৮:১৭ ও ২১:৩৫।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Against Anyone Living",
          "bn": "জীবিত কারও উপর কোনো রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying firmly. The verse describes what Allah gave the Children of Israel in the time of Musa (AS), and what lay inside that gift. It licenses nothing against any living Jewish person or community. It supports no political reading, for or against, of any people, religion or state of the present day. No commentator cited here draws such a line, nor does this article. Whoever turns 44:33 into a charge against people now alive has stepped outside the verse and outside everything said about it above.",
            "bn": "কথাটা দৃঢ়ভাবে বলা দরকার। আয়াতটি বর্ণনা করে মূসা (আঃ)-এর যুগে আল্লাহ বানী ইসরাঈলকে কী দিয়েছিলেন, আর সেই দানের ভেতরে কী ছিল। আজকের কোনো ইহুদি ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। বর্তমান যুগের কোনো জাতি, ধর্ম বা রাষ্ট্রের পক্ষে বা বিপক্ষে কোনো রাজনৈতিক ব্যাখ্যারও এতে জায়গা নেই। এখানে উদ্ধৃত কোনো তাফসীরকার এমন রেখা টানেননি, এ প্রবন্ধও টানছে না। কেউ যদি ৪৪:৩৩ আয়াতকে আজ জীবিত মানুষের বিরুদ্ধে অভিযোগ বানায়, তবে সে আয়াতের সীমা ছাড়িয়েছে, উপরে বলা সব ব্যাখ্যার সীমাও ছাড়িয়েছে।"
          },
          {
            "en": "The verse itself points the other way. Its very next words, inna ha'ula'i, these, turn to the people who were hearing the Qur'an, so the lesson moves at once from a past people to the present listener. Ibn Zayd's reading cuts across every group: the trial sorts believer from disbeliever wherever it falls. And 21:35, the verse he recited, is spoken in the second person: We test you. A Muslim reader who sees the test only in someone else's history has not yet read the verse he was given.",
            "bn": "আয়াতটি নিজেই উল্টো দিকে ইশারা করে। এর ঠিক পরের শব্দ ইন্না হাউলাই, অর্থাৎ এই লোকেরা, ফিরে যায় তাদের দিকে, যারা তখন কুরআন শুনছিল। ফলে শিক্ষাটা অতীতের এক জাতি থেকে সঙ্গে সঙ্গে সরে আসে বর্তমান শ্রোতার কাছে। ইবন যায়দের ব্যাখ্যা কোনো দলের সীমা মানে না। পরীক্ষা যেখানেই আসে, মু'মিন আর কাফিরকে আলাদা করে দেয়। আর তিনি যে আয়াত পড়েছিলেন, সেই ২১:৩৫ সরাসরি সম্বোধন করে: আমি তোমাদের পরীক্ষা করি। যে মুসলিম পাঠক পরীক্ষাটা শুধু অন্যের ইতিহাসে দেখে, সে এখনো তার নিজের জন্য দেওয়া আয়াতটি পড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Gifts That Ask Something Back",
          "bn": "যে দান কিছু ফেরত চায়"
        },
        "p": [
          {
            "en": "For any reader the verse leaves a working question. What signs have I been given? They may not be a parted sea or bread from the sky. They may be a recovery, a door that opened, a prayer answered in a way I did not expect, a year of plenty, or a hardship that brought me back to Allah. Each of these, on at-Tabari's reading, can be the test in either of its forms, and none of them came empty. Something was folded inside each one, waiting to see what I would do.",
            "bn": "যেকোনো পাঠকের জন্য আয়াতটি একটা কাজের প্রশ্ন রেখে যায়। আমাকে কোন কোন নিদর্শন দেওয়া হয়েছে? সেগুলো চিরে যাওয়া সাগর কিংবা আসমান থেকে নামা খাবার না-ও হতে পারে। হতে পারে রোগ থেকে সেরে ওঠা, খুলে যাওয়া কোনো দরজা, অপ্রত্যাশিত পথে কবুল হওয়া কোনো দোয়া, সচ্ছলতার একটা বছর, কিংবা এমন কোনো কষ্ট, যা আমাকে আল্লাহর দিকে ফিরিয়ে এনেছে। তাবারীর ব্যাখ্যা অনুযায়ী এর প্রতিটিই দুই রূপের যেকোনো রূপে পরীক্ষা হতে পারে। কোনোটিই খালি হাতে আসেনি। প্রতিটির ভেতরে কিছু একটা গুঁজে রাখা ছিল, দেখার জন্য আমি কী করি।"
          },
          {
            "en": "The Children of Israel in the age of Musa (AS) were saved, chosen and given, and the verse calls what they were given a clear trial. Every later reader stands somewhere in the same pattern. Ease asks for gratitude and for using what was given in the way it was given for; hardship asks for patience and for turning back. Ibn Zayd put the question plainly: who believes in the signs and benefits from them, and who lets them go to waste. That question is still being asked, and the answer is still being written.",
            "bn": "মূসা (আঃ)-এর যুগে বানী ইসরাঈলকে রক্ষা করা হয়েছিল, বেছে নেওয়া হয়েছিল, দান করা হয়েছিল। আর সেই দানকে আয়াতটি বলছে সুস্পষ্ট পরীক্ষা। পরের যুগের প্রত্যেক পাঠকও কোথাও না কোথাও এই একই ছকের ভেতরে দাঁড়িয়ে। সচ্ছলতা চায় শোকর, আর যে কাজের জন্য দেওয়া হয়েছে সে কাজে তা লাগানো। কষ্ট চায় সবর, আর আল্লাহর দিকে ফিরে আসা। ইবন যায়দ প্রশ্নটা সোজাসুজি রেখেছিলেন: কে নিদর্শনে ঈমান আনে আর উপকার নেয়, আর কে তা নষ্ট করে। সে প্রশ্ন আজও করা হচ্ছে। উত্তরটাও এখনো লেখা হচ্ছে।"
          }
        ]
      }
    ]
  },
  "44:38": {
    "sections": [
      {
        "h": {
          "en": "Who Is Being Answered",
          "bn": "জবাবটা কাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "Wa ma khalaqna al-samawati wal-arda wa ma baynahuma la'ibin: and We did not create the heavens and the earth and what is between them in play. The verse opens with wa, and, and the exchange it continues is quoted just above it. In 44:34 to 44:36 the Qur'an reports a group who say there is nothing but our first death and we will not be raised, and who then demand: bring back our forefathers, if you are truthful.",
            "bn": "ওয়ামা খালাকনাস সামাওয়াতি ওয়াল আরদা ওয়ামা বাইনাহুমা লা'ইবীন: আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝে যা আছে, তা আমি খেলার ছলে সৃষ্টি করিনি। আয়াতটি শুরু হয়েছে ওয়া, অর্থাৎ 'আর' দিয়ে। যে কথোপকথনের এটি অংশ, তা ঠিক উপরেই উদ্ধৃত আছে। ৪৪:৩৪ থেকে ৪৪:৩৬ আয়াতে কুরআন একদল লোকের কথা তুলে ধরে। তারা বলে, আমাদের প্রথম মৃত্যুর পর আর কিছু নেই, আমাদের আর ওঠানো হবে না। তারপর দাবি তোলে: তোমরা সত্যবাদী হলে আমাদের বাপদাদাদের ফিরিয়ে আনো।"
          },
          {
            "en": "Before the reply proper, 44:37 asks a question and gives a warning: are they better, or the people of Tubba' and those before them? We destroyed them, for they were criminals. Ma'arif al-Qur'an explains Tubba' as the royal title of the Himyarite kings of Yemen, and stresses that the Qur'an speaks of his people, not of Tubba' himself. None of the commentaries fetched attaches a hadith to 44:38 itself; a narration Ma'arif cites about Tubba' could not be checked against a collection here, so it is not quoted.",
            "bn": "মূল জবাবের আগে ৪৪:৩৭ আয়াত একটি প্রশ্ন রাখে, সঙ্গে সতর্কবাণী: এরা কি শ্রেষ্ঠ, নাকি তুব্বার সম্প্রদায় আর তাদের আগের লোকেরা? আমি তাদের ধ্বংস করেছি, কারণ তারা ছিল অপরাধী। মাআরিফুল কুরআন বলে, তুব্বা ছিল ইয়েমেনের হিময়ারি রাজাদের উপাধি। সেখানে জোর দিয়ে বলা হয়েছে, কুরআন কথা বলেছে তুব্বার সম্প্রদায় নিয়ে, তুব্বাকে নিয়ে নয়। যেসব তাফসীর আনা হয়েছে, তার কোনোটিই খোদ ৪৪:৩৮ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তুব্বা প্রসঙ্গে মাআরিফ একটি বর্ণনা উল্লেখ করে, কিন্তু এখানে কোনো হাদীসগ্রন্থের সঙ্গে মিলিয়ে দেখা যায়নি বলে সেটি উদ্ধৃত হলো না।"
          },
          {
            "en": "Why answer a denial of the resurrection with a statement about the sky? At-Tabari, on the completing verse 44:39, names what the pair intends: an alert to the soundness of the resurrection and the requital, al-tanbih 'ala sihhat al-ba'th wal-mujazah. The reply does not bring back anyone's forefathers on demand. It goes behind the demand, to the kind of Maker who made the world, and lets the conclusion about a return follow from that.",
            "bn": "পুনরুত্থান অস্বীকারের জবাবে আকাশের কথা কেন? পরের আয়াত ৪৪:৩৯ এই বাক্য পূর্ণ করে। সেখানে তাবারী জানিয়ে দেন দুই আয়াতের উদ্দেশ্য: পুনরুত্থান আর প্রতিফল যে সত্য, সে দিকে মনোযোগ ফেরানো। তাঁর ভাষায়, আত-তানবীহ আলা সিহহাতিল বা'সি ওয়াল মুজাযাহ। জবাবটা দাবিমতো কারও বাপদাদাকে হাজির করে না। দাবির পেছনে গিয়ে সে দেখায়, জগৎ যিনি বানিয়েছেন তিনি কেমন স্রষ্টা। ফিরে যাওয়ার সিদ্ধান্তটা তখন আপনা থেকেই বেরিয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavens, Earth, and the Between",
          "bn": "আকাশ, পৃথিবী আর মাঝখান"
        },
        "p": [
          {
            "en": "The verse is seven words long in Arabic. Three phrases name what was made, al-samawat, al-ard and ma baynahuma, the heavens, the earth and whatever lies between them, and the closing word names how it was not made. At-Tabari's paraphrase fills in the scale: the seven heavens and the earths, and whatever creation lies between them. Nothing is left outside the statement. Even the between, which a listener might pass over, is counted, so whatever moves in that space falls under the same sentence.",
            "bn": "আরবিতে আয়াতটি মাত্র সাতটি শব্দের। তিনটি অংশ বলে কী সৃষ্টি হয়েছে: আস-সামাওয়াত, আল-আরদ আর মা বাইনাহুমা, অর্থাৎ আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝে যা কিছু আছে। শেষ শব্দটি বলে, কোন ভঙ্গিতে তা সৃষ্টি হয়নি। তাবারীর ব্যাখ্যায় পরিসরটা আরও স্পষ্ট হয়: সাত আকাশ, একাধিক পৃথিবী, আর এগুলোর মাঝখানে যত সৃষ্টি। কোনো কিছুই এই বাক্যের বাইরে থাকে না। মাঝখানের জায়গাটুকু শ্রোতার চোখ এড়িয়ে যেতে পারত, কিন্তু সেটাও গোনা হয়েছে। ফলে সেখানে যা কিছু চলাফেরা করে, সবই একই কথার আওতায় পড়ে।"
          },
          {
            "en": "The last word, la'ibin, is a plural participle, players or ones at play, matching the We of khalaqna. At-Tabari restates it with the verbal noun la'iban, as play, and al-Muyassar does the same. Read with the participle, the denial falls on the manner of the Maker's acting rather than on the objects: what is ruled out is that He made all this while playing. On what kind of play is meant, the commentators give different glosses, and they are worth hearing one by one.",
            "bn": "শেষ শব্দ লা'ইবীন বহুবচনের কর্তাবাচক রূপ, মানে যারা খেলছে। খালাকনা ক্রিয়ার 'আমি'-র সঙ্গে এর মিল। তাবারী একে ক্রিয়াবিশেষ্য দিয়ে বলেন লা'ইবান, অর্থাৎ খেলা হিসেবে, আর মুয়াসসারও একই কথা বলে। কর্তাবাচক রূপটা মাথায় রাখলে নাকচটা পড়ে সৃষ্ট বস্তুর উপর নয়, স্রষ্টার কাজের ধরনের উপর। বাদ দেওয়া হচ্ছে এই ধারণা যে, তিনি খেলতে খেলতে এসব বানিয়েছেন। কোন ধরনের খেলার কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারেরা ভিন্ন ভিন্ন ব্যাখ্যা দেন। সেগুলো একে একে শোনা দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Heedless, Amused or Pointless",
          "bn": "উদাসীন, মজায় মগ্ন, না নিষ্ফল"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two short glosses. Muqatil reads la'ibin as ghafilin, heedless: We did not make all this without attending to it. Al-Kalbi reads it as lahin, amusing Ourselves, taken up with a diversion. The two are close but not identical. Muqatil's word denies inattention, a maker who sets a thing going and looks away. Al-Kalbi's denies frivolity, a maker who makes for the pleasure of the moment. Al-Qurtubi lists both and does not choose between them.",
            "bn": "কুরতুবী দুটি ছোট ব্যাখ্যা উল্লেখ করেন। মুকাতিলের মতে লা'ইবীন মানে গাফিলীন, উদাসীন। অর্থাৎ আমি এসব বানিয়ে খেয়াল না রেখে ফেলে রাখিনি। কালবীর মতে এর মানে লাহীন, আমোদে মগ্ন, কোনো বিনোদনে ব্যস্ত। দুটো কাছাকাছি, কিন্তু হুবহু এক নয়। মুকাতিলের শব্দ নাকচ করে অমনোযোগ, যেন কেউ কোনো কিছু চালু করে দিয়ে মুখ ফিরিয়ে নিল। কালবীর শব্দ নাকচ করে লঘুতা, যেন কেউ শুধু মুহূর্তের মজার জন্য কিছু বানাল। কুরতুবী দুটোই রাখেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "As-Sa'di frames the verse as Allah telling of the perfection of His power and the completeness of His wisdom. His paraphrase stacks three negatives: He did not create the heavens and the earth as la'ib, play, nor as lahw, amusement, nor suda, aimlessly, min ghayr fa'ida, without benefit. Where Muqatil and al-Kalbi describe the posture of the actor, as-Sa'di's last phrase looks at the result: a creation that yields nothing. For him, the verse denies a world without a point.",
            "bn": "সা'দী আয়াতটিকে দেখেন এভাবে: আল্লাহ এখানে নিজের পরিপূর্ণ কুদরত আর পূর্ণাঙ্গ হিকমতের খবর দিচ্ছেন। তাঁর ব্যাখ্যায় তিনটি 'না' পাশাপাশি বসে। আল্লাহ আকাশ ও পৃথিবী সৃষ্টি করেননি লা'ইব হিসেবে, মানে খেলা হিসেবে। লাহও হিসেবেও নয়, মানে আমোদ হিসেবে। সুদা হিসেবেও নয়, মানে উদ্দেশ্যহীনভাবে, মিন গাইরি ফাইদা, কোনো উপকার ছাড়া। মুকাতিল আর কালবী বর্ণনা করেন কর্তার ভঙ্গি। সা'দীর শেষ কথাটি তাকায় ফলের দিকে, এমন সৃষ্টি যা থেকে কিছুই আসে না। তাঁর পাঠে আয়াতটি নাকচ করে অর্থহীন এক জগতের ধারণা।"
          },
          {
            "en": "Ibn Kathir opens with a different word altogether. He says Allah is here telling of His 'adl, His justice, and declaring Himself free of la'ib, play, 'abath, futility, and batil, falsehood. Justice is an unexpected first word for a verse about the cosmos, until one recalls who is being answered: people who deny that anyone will be raised and repaid. By leading with justice, Ibn Kathir ties the verse to the question of recompense that the surrounding verses are about.",
            "bn": "ইবন কাসীর শুরু করেন একেবারে আলাদা একটি শব্দ দিয়ে। তিনি বলেন, আল্লাহ এখানে নিজের আদল, অর্থাৎ ন্যায়বিচারের খবর দিচ্ছেন। সেই সঙ্গে নিজেকে পবিত্র ঘোষণা করছেন লা'ইব বা খেলা থেকে, আবাস বা অনর্থকতা থেকে, আর বাতিল বা অসত্য থেকে। মহাবিশ্ব নিয়ে কোনো আয়াতের প্রথম ব্যাখ্যায় ন্যায়বিচারের কথা শুনে একটু অবাক লাগে। কিন্তু মনে রাখতে হবে, জবাবটা কাদের দেওয়া হচ্ছে। তারা অস্বীকার করে যে কাউকে আবার ওঠানো হবে আর প্রতিদান দেওয়া হবে। ন্যায়বিচার দিয়ে শুরু করে ইবন কাসীর আয়াতটিকে প্রতিফলের সেই প্রশ্নের সঙ্গে জুড়ে দেন, যা নিয়ে আশপাশের আয়াতগুলো কথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Set Beside It",
          "bn": "পাশে রাখা দুটি আয়াত"
        },
        "p": [
          {
            "en": "To show that the verse does not stand alone, Ibn Kathir places two others beside it. The first is 38:27: and We did not create the heaven and the earth and what is between them batil, in vain; that is the assumption of those who disbelieve, so woe to those who disbelieve from the Fire. The wording is close to 44:38, with batil in place of la'ibin, but 38:27 says aloud what our verse leaves implicit: thinking creation purposeless is the assumption of disbelief, and it ends in the Fire.",
            "bn": "আয়াতটি যে একা নয়, তা দেখাতে ইবন কাসীর এর পাশে আরও দুটি আয়াত রাখেন। প্রথমটি ৩৮:২৭: আকাশ, পৃথিবী আর এ দুয়ের মাঝে যা আছে, তা আমি বাতিল, অর্থাৎ অনর্থক সৃষ্টি করিনি। এটা কাফিরদের ধারণা। সুতরাং কাফিরদের জন্য আগুনের দুর্ভোগ। শব্দগুলো ৪৪:৩৮ আয়াতের খুব কাছাকাছি, শুধু লা'ইবীনের জায়গায় বাতিল। তবে আমাদের আয়াত যা ইঙ্গিতে রেখে দেয়, ৩৮:২৭ তা মুখ ফুটে বলে: সৃষ্টিকে উদ্দেশ্যহীন ভাবা কুফরের ধারণা, আর এর শেষ ঠিকানা আগুন।"
          },
          {
            "en": "His second witness is 23:115 and 23:116: did you think that We created you in vain, and that to Us you would not be returned? So exalted is Allah, the King, the Truth. That passage has its own deep article. What matters here is the pairing Ibn Kathir draws on: 'abath, futility, stands beside the thought of not being returned. In both verses he cites, a creation without purpose and a denied return appear together, as one mistaken thought seen from two sides.",
            "bn": "তাঁর দ্বিতীয় সাক্ষী ২৩:১১৫ ও ২৩:১১৬: তোমরা কি ভেবেছিলে, আমি তোমাদের অনর্থক সৃষ্টি করেছি, আর তোমাদের আমার কাছে ফিরিয়ে আনা হবে না? মহিমান্বিত আল্লাহ, যিনি প্রকৃত বাদশাহ। ওই আয়াত দুটির আলাদা বিস্তারিত প্রবন্ধ আছে। এখানে দরকারি কথা হলো ইবন কাসীর যে জোড়াটি সামনে আনেন: আবাস বা অনর্থকতা বসে আছে ফিরে না যাওয়ার ধারণার পাশেই। তাঁর উদ্ধৃত দুটি আয়াতেই উদ্দেশ্যহীন সৃষ্টি আর অস্বীকৃত প্রত্যাবর্তন একসঙ্গে আসে। একই ভুল ভাবনা, দুই দিক থেকে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Only With the Truth",
          "bn": "সত্য ছাড়া নয়"
        },
        "p": [
          {
            "en": "The sentence does not end at la'ibin. 44:39 completes it: ma khalaqnahuma illa bil-haqq, We did not create the two except with the truth, but most of them do not know. A negation followed by illa, except, leaves only one possibility standing. Al-Qurtubi lists three readings of bil-haqq. Muqatil takes it as bil-amr al-haqq, by the true command; al-Kalbi and al-Hasan as lil-haqq, for the truth; and a third view as to establish the truth and make it plain: the oneness of Allah and holding fast to obeying Him.",
            "bn": "বাক্যটি লা'ইবীনে এসে শেষ হয় না। ৪৪:৩৯ আয়াত তা পূর্ণ করে: মা খালাকনাহুমা ইল্লা বিল হাক্ক, এ দুটিকে আমি সত্য ছাড়া সৃষ্টি করিনি, কিন্তু তাদের অধিকাংশই জানে না। প্রথমে 'না', তারপর ইল্লা, অর্থাৎ 'ছাড়া'। ফলে একটিমাত্র সম্ভাবনাই টিকে থাকে। বিল হাক্কের তিনটি ব্যাখ্যা দেন কুরতুবী। মুকাতিলের মতে এর মানে বিল আমরিল হাক্ক, সত্য আদেশে। কালবী ও হাসানের মতে লিল হাক্ক, সত্যের জন্য। আরেক মত হলো সত্যকে প্রতিষ্ঠা ও প্রকাশ করার জন্য, আর সেই সত্য হলো আল্লাহর তাওহীদ এবং তাঁর আনুগত্য আঁকড়ে থাকা।"
          },
          {
            "en": "Al-Baghawi gives the for-the-truth reading with a definition, introduced as it is said: the truth here is the reward for obedience and the punishment for disobedience. At-Tabari reads bil-haqq as the truth without which the governing of things would not be sound, and al-Muyassar as the truth that is Allah's way in His creation and His governing. Al-Qurtubi adds that he has already treated this meaning in Surat al-Anbiya, where 21:16 uses almost the same words as our verse.",
            "bn": "বাগাভী 'সত্যের জন্য' পাঠটি আনেন 'বলা হয়' কথাটি দিয়ে, সঙ্গে একটি সংজ্ঞাও দেন: এখানে সত্য মানে আনুগত্যের পুরস্কার আর নাফরমানির শাস্তি। তাবারীর মতে বিল হাক্ক সেই সত্য, যা ছাড়া জগতের পরিচালনা ঠিকঠাক চলতে পারে না। মুয়াসসারের মতে এটি সেই সত্য, যা নিজের সৃষ্টি ও পরিচালনায় আল্লাহর নিয়ম। কুরতুবী আরও জানান, এই অর্থ নিয়ে তিনি সূরা আল-আম্বিয়ায় আগেই আলোচনা করেছেন। সেখানে ২১:১৬ আয়াতে প্রায় হুবহু আমাদের আয়াতের শব্দগুলোই আছে।"
          },
          {
            "en": "As-Sa'di reads the preposition both ways at once: their very creation is with the truth, and the creation contains truth. Then he states the purpose outright: Allah brought the two into existence so that people would worship Him alone, without partner, and so that He would command His servants and forbid them, reward them and punish them. The readings differ in emphasis more than they conflict: one looks at the command that made the world, one at the order that runs it, one at the worship and the recompense it exists for.",
            "bn": "সা'দী অব্যয়টিকে একসঙ্গে দুই অর্থে পড়েন। এ দুটির সৃষ্টিই সত্যের সঙ্গে, আবার এই সৃষ্টির ভেতরেও সত্য নিহিত। তারপর উদ্দেশ্যটা সরাসরি বলেন: আল্লাহ এ দুটিকে অস্তিত্বে এনেছেন, যাতে মানুষ শরিকহীনভাবে একমাত্র তাঁরই ইবাদত করে। আর যাতে তিনি বান্দাদের আদেশ দেন, নিষেধ করেন, পুরস্কার দেন ও শাস্তি দেন। ব্যাখ্যাগুলোর মধ্যে বিরোধের চেয়ে জোরের পার্থক্যই বেশি। কেউ দেখেন সেই আদেশ, যা জগৎ বানিয়েছে। কেউ দেখেন সেই নিয়ম, যা জগৎ চালায়। কেউ দেখেন সেই ইবাদত ও প্রতিদান, যার জন্য জগতের অস্তিত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Made, Tested, Then Repaid",
          "bn": "সৃষ্টি, পরীক্ষা, তারপর প্রতিদান"
        },
        "p": [
          {
            "en": "At-Tabari spells out what play would have looked like, and so what the verse denies. We did not create creation in vain, he has Allah say, bringing them into being, giving them life as long as We willed, then annihilating them without testing them by obedience, command and prohibition, and without repaying the obedient for his obedience and the disobedient for his disobedience. Rather, We created it to test whom We willed. He closes with 53:31: that He may repay those who did evil for what they did, and repay those who did good with the best.",
            "bn": "খেলা হলে ব্যাপারটা কেমন হতো, আর তাই আয়াতটি ঠিক কী নাকচ করছে, তাবারী তা খুলে বলেন। তাঁর ব্যাখ্যায় আল্লাহর কথা এমন: আমি সৃষ্টিকে অনর্থক বানাইনি। এমন নয় যে তাদের অস্তিত্বে আনলাম, যতদিন চাইলাম বাঁচিয়ে রাখলাম, তারপর মিটিয়ে দিলাম। আনুগত্য, আদেশ আর নিষেধ দিয়ে কোনো পরীক্ষা হলো না। অনুগতকে তার আনুগত্যের, নাফরমানকে তার নাফরমানির প্রতিদানও দেওয়া হলো না। বরং আমি এসব বানিয়েছি, যাকে চাই তাকে পরীক্ষা করার জন্য। শেষে তিনি ৫৩:৩১ উদ্ধৃত করেন: যাতে তিনি মন্দকারীদের তাদের কাজের প্রতিফল দেন, আর সৎকর্মশীলদের দেন উত্তম প্রতিদান।"
          },
          {
            "en": "Ma'arif al-Qur'an, on 44:39, lists what the heavens and the earth make manifest. First, divine power. Second, the possibility of the Hereafter: the Creator who drew such vast bodies out of non-existence surely has the power to destroy them and create them again. Third, the need for recompense: without reward and punishment in the Hereafter, it says, the universe would be purposeless, since good and evil would end the same, which is far from divine wisdom. This world, in its phrase, is dar al-imtihan, the domain of testing.",
            "bn": "মাআরিফুল কুরআন ৪৪:৩৯ আয়াতের আলোচনায় গুনে দেখায়, আকাশ আর পৃথিবী কী কী প্রকাশ করে। প্রথমত, আল্লাহর কুদরত। দ্বিতীয়ত, আখিরাত যে সম্ভব। যে স্রষ্টা এত বিশাল বস্তুকে অনস্তিত্ব থেকে অস্তিত্বে এনেছেন, সেগুলো ধ্বংস করে আবার বানানোর ক্ষমতা তাঁর নিশ্চয়ই আছে। তৃতীয়ত, প্রতিফলের প্রয়োজন। মাআরিফ বলে, আখিরাতে পুরস্কার আর শাস্তি না থাকলে মহাবিশ্বই উদ্দেশ্যহীন হয়ে যেত। ভালো আর মন্দের পরিণাম তখন একই হতো, আর তা আল্লাহর হিকমতের সঙ্গে খাপ খায় না। এই দুনিয়া তার ভাষায় দারুল ইমতিহান, পরীক্ষার জায়গা।"
          },
          {
            "en": "Set beside the deniers' demand, this reads as an answer in kind. They asked for their forefathers to be produced now, as proof. The reply points to a proof already overhead: whoever raised the heavens out of nothing is not taxed by raising a person again, and whoever built a place of testing will not leave its results unread. The demand assumed that this world is the whole story. At-Tabari and Ma'arif both read the verse as saying it is only the first part.",
            "bn": "অস্বীকারকারীদের দাবির পাশে রাখলে এটা যেন একই ভাষায় জবাব। তারা চেয়েছিল, প্রমাণ হিসেবে এখনই তাদের বাপদাদাদের হাজির করা হোক। জবাব আঙুল তোলে এমন প্রমাণের দিকে, যা মাথার উপরেই আছে। যিনি শূন্য থেকে আকাশ তুলেছেন, একজন মানুষকে আবার ওঠানো তাঁর কাছে ভারী কিছু নয়। আর যিনি পরীক্ষার জায়গা বানিয়েছেন, তিনি তার ফল না দেখে ফেলে রাখবেন না। তাদের দাবির পেছনে ধারণা ছিল, এই দুনিয়াই পুরো কাহিনি। তাবারী ও মাআরিফ দুজনের পাঠেই আয়াতটি বলছে, এটা কেবল প্রথম অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Most of Them Do Not Know",
          "bn": "অধিকাংশই যা জানে না"
        },
        "p": [
          {
            "en": "The pair ends on a diagnosis: but most of them do not know. At-Tabari identifies them as most of these who associate partners with Allah, and says what their not knowing produces: they fear no punishment from His anger for what they commit, and hope for no reward for good they might do, because they deny the Return. Al-Muyassar and as-Sa'di name another effect: for that reason they did not reflect on the heavens and the earth. Al-Qurtubi reads the word more widely: most of them, he says, means most people.",
            "bn": "দুই আয়াত শেষ হয় একটি রোগ ধরিয়ে দিয়ে: কিন্তু তাদের অধিকাংশই জানে না। তাবারীর মতে এরা আল্লাহর সঙ্গে শরিককারী এই লোকদের অধিকাংশ। না জানার ফল কী, তাও তিনি বলেন: নিজেদের কাজের জন্য আল্লাহর ক্রোধের শাস্তিকে তারা ভয় করে না। ভালো কিছু করলে তার পুরস্কারও আশা করে না, কারণ তারা আখিরাতে ফেরাকে অস্বীকার করে। মুয়াসসার আর সা'দী আরেকটি ফলের কথা বলেন: এ কারণেই তারা আকাশ ও পৃথিবী নিয়ে চিন্তা করেনি। কুরতুবী শব্দটিকে আরও বড় পরিসরে পড়েন। তাঁর মতে 'তাদের অধিকাংশ' মানে মানুষের অধিকাংশ।"
          },
          {
            "en": "A word of care belongs here. These verses describe a particular group whom the Qur'an condemns, those who said there is only our first death and dared their hearers to bring back their fathers, and beside them the people of Tubba', who it says were destroyed. The verses describe what the text describes. They license nothing against any living person or community, and give no ground for labelling anyone today as those deniers. The failure the commentators name, not reflecting, is one any reader can share.",
            "bn": "এখানে একটু সাবধানতার কথা বলা দরকার। এই আয়াতগুলো এমন একটি নির্দিষ্ট দলের বর্ণনা দেয়, যাদের কুরআন নিন্দা করেছে। তারা বলেছিল, প্রথম মৃত্যুর পর আর কিছু নেই, আর শ্রোতাদের চ্যালেঞ্জ দিয়েছিল বাপদাদাদের ফিরিয়ে আনতে। পাশে আছে তুব্বার সম্প্রদায়, যাদের ধ্বংসের কথা কুরআন বলেছে। আয়াতগুলো কেবল সেটুকুই বর্ণনা করে, যা পাঠে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। আজকের কাউকে সেই অস্বীকারকারী বলে দাগিয়ে দেওয়ারও কোনো ভিত্তি এখানে নেই। তাফসীরকারেরা যে ঘাটতির কথা বলেন, চিন্তা না করা, তা যেকোনো পাঠকের মধ্যেই থাকতে পারে।"
          },
          {
            "en": "44:40 to 44:42 then state where the argument lands: the Day of Decision is the appointed time for them all, which Ibn Kathir explains as the Day of Resurrection, when Allah judges between all creatures and gathers the first of them and the last, a day when no protector avails another except those on whom Allah has mercy. The challenge thrown down in 44:36 is not brushed aside. It is given a date, and the forefathers will be there with everyone else.",
            "bn": "এরপর ৪৪:৪০ থেকে ৪৪:৪২ আয়াত জানিয়ে দেয়, যুক্তিটা কোথায় গিয়ে থামে। ফয়সালার দিনই তাদের সবার নির্ধারিত সময়। ইবন কাসীর বলেন, এটা কিয়ামতের দিন, যেদিন আল্লাহ সব সৃষ্টির মধ্যে ফয়সালা করবেন আর আগের ও পরের সবাইকে একত্র করবেন। সেদিন কোনো অভিভাবক আরেকজনের কাজে আসবে না, তবে আল্লাহ যার প্রতি রহম করেন তার কথা আলাদা। ৪৪:৩৬ আয়াতে ছুড়ে দেওয়া চ্যালেঞ্জটা তাই উড়িয়ে দেওয়া হয়নি। তাকে একটা তারিখ দেওয়া হয়েছে, আর সেদিন বাপদাদারাও থাকবে বাকি সবার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Between Sky and Ground",
          "bn": "আকাশ আর মাটির মাঝখানে"
        },
        "p": [
          {
            "en": "Whoever hears this verse is standing in the very space it names: under the heavens, on the earth, among what lies between them. What it says of the whole it says of every part, and a human life is a part. As-Sa'di's three negatives can be turned into a quiet test of a single day. Was any of it spent as la'ib, play with no aim? As lahw, distraction that crowded out what mattered? Or as suda, simply left to drift without benefit?",
            "bn": "যে এই আয়াত শোনে, সে দাঁড়িয়ে আছে ঠিক সেই জায়গায়, যার কথা আয়াতে আছে: আকাশের নিচে, মাটির উপরে, এ দুয়ের মাঝখানে। পুরোটার ব্যাপারে আয়াত যা বলে, প্রতিটি অংশের ব্যাপারেও তা-ই বলে। আর মানুষের জীবনও সেই অংশেরই একটি। সা'দীর তিনটি 'না' দিয়ে একটি দিনকে চুপচাপ যাচাই করে দেখা যায়। আজকের কোনো অংশ কি লা'ইব হয়ে গেল, লক্ষ্যহীন খেলা? নাকি লাহও, এমন বিনোদন যা জরুরি কাজকে ঠেলে সরিয়ে দিল? নাকি সুদা, কোনো উপকার ছাড়াই এমনি ভেসে যেতে দেওয়া?"
          },
          {
            "en": "Ma'arif's fourth point gives the positive side: the universe urges thinking people to obey Allah and to thank Him for granting them this whole creation as a great blessing. And the failure named in the deniers was that they did not reflect on the heavens and the earth. So the verse asks for two small habits rather than one grand gesture: to look at the sky long enough to remember who made it and why, and to live the next hour as someone who will be asked about it.",
            "bn": "মাআরিফের চতুর্থ কথাটি দেখায় ইতিবাচক দিক। মহাবিশ্ব চিন্তাশীল মানুষকে ডাকে আল্লাহর আনুগত্যের দিকে, আর এই গোটা সৃষ্টিকে বড় নিয়ামত হিসেবে দেওয়ার জন্য তাঁর শোকর আদায়ের দিকে। অস্বীকারকারীদের ঘাটতি ছিল, তারা আকাশ ও পৃথিবী নিয়ে চিন্তা করেনি। তাই আয়াতটি একটি বিরাট পদক্ষেপ চায় না, চায় দুটি ছোট অভ্যাস। আকাশের দিকে এতক্ষণ তাকানো, যাতে মনে পড়ে কে এটা বানিয়েছেন আর কেন। আর সামনের এক ঘণ্টা এমনভাবে কাটানো, যেন এর হিসাব একদিন চাওয়া হবে।"
          }
        ]
      }
    ]
  },
  "44:43": {
    "sections": [
      {
        "h": {
          "en": "Three Words, Then a Pause",
          "bn": "তিন শব্দ, তারপর বিরতি"
        },
        "p": [
          {
            "en": "Inna shajarata al-zaqqum: indeed, the tree of zaqqum. The verse is three words long, and it is not yet a sentence. Inna opens a statement and shajarata al-zaqqum is its subject; the predicate arrives only in 44:44, ta'amu al-athim, is the food of the sinful. The Muyassar treats the two verses as one unit, and Ibn Kathir quotes them together before saying anything. This article reads the subject and lets the completion stand beside it, because without it the tree has a name but no purpose.",
            "bn": "ইন্না শাজারাতায যাক্কুম: নিশ্চয়ই যাক্কুম গাছ। আয়াতটি মাত্র তিনটি শব্দের, আর এখনো পুরো বাক্য হয়ে ওঠেনি। ইন্না দিয়ে কথা শুরু, শাজারাতায যাক্কুম তার উদ্দেশ্য। বিধেয় আসে পরের আয়াতে, ৪৪:৪৪-এ: তা'আমুল আসীম, পাপীর খাদ্য। মুয়াসসার দুই আয়াতকে একই সঙ্গে ব্যাখ্যা করে, ইবন কাসীরও কিছু বলার আগে দুটো একসঙ্গে উদ্ধৃত করেন। এই লেখা উদ্দেশ্য অংশটি নিয়ে, তবে পরের অংশকে পাশে রেখেই। কারণ সেটুকু ছাড়া গাছের নাম থাকে, কিন্তু তার কাজ বোঝা যায় না।"
          },
          {
            "en": "Why does the tree appear here? As-Sa'di answers from the verses just before. Once the Day of Decision has been named, the day on which Allah judges between His servants (44:40), the text turns to how they divide into two parties, one in the Garden and one in the Blaze. The tree belongs to the second, and the description of the Garden's people follows from 44:51. What the food does and what is done to the one who eats it fill 44:45 to 44:50, and those verses are left to their own place.",
            "bn": "গাছটির কথা এখানে কেন এল? সা'দী জবাব দেন ঠিক আগের আয়াতগুলো থেকে। ফয়সালার দিনের উল্লেখ হয়ে গেছে (৪৪:৪০), যেদিন আল্লাহ বান্দাদের মধ্যে মীমাংসা করবেন। এরপর কথা ঘোরে তারা কীভাবে দুই দলে ভাগ হবে সেদিকে: একটি দল জান্নাতে, আরেকটি জ্বলন্ত আগুনে। গাছটি দ্বিতীয় দলের, আর জান্নাতবাসীদের বর্ণনা আসে ৪৪:৫১ থেকে। খাবারটি পেটে গিয়ে কী করে, আর খাওয়ার পর লোকটির সঙ্গে কী করা হয়, তা আছে ৪৪:৪৫ থেকে ৪৪:৫০ পর্যন্ত। সে আয়াতগুলো তাদের নিজের জায়গার জন্য রাখা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ta Left Open",
          "bn": "খোলা তা-এর বানান"
        },
        "p": [
          {
            "en": "Al-Qurtubi's whole comment on these three words is about a single letter. Every mention of the tree, al-shajara, in the Book of Allah, he says, is paused on with a ha, except one instance in Surat al-Dukhan: inna shajarata al-zaqqum. The written text bears him out. The Mushaf text this site uses spells the word here with an open ta, shajarat, while the same phrase in 37:62, shajaratu al-zaqqum, ends in the round ta that turns into a ha when the reciter stops on it.",
            "bn": "এই তিনটি শব্দ নিয়ে কুরতুবীর পুরো মন্তব্যটাই একটিমাত্র হরফ ঘিরে। তিনি বলেন, আল্লাহর কিতাবে গাছ অর্থে আশ-শাজারা যেখানেই এসেছে, সেখানে থামতে হয় হা দিয়ে। ব্যতিক্রম কেবল সূরা দুখানের একটি জায়গা: ইন্না শাজারাতায যাক্কুম। লিখিত পাঠও তাঁর কথার সাক্ষ্য দেয়। এই সাইটে ব্যবহৃত মুসহাফের পাঠে শব্দটি এখানে লেখা লম্বা খোলা তা দিয়ে, শাজারাত। অথচ ৩৭:৬২ আয়াতে একই বাক্যাংশ, শাজারাতুয যাক্কুম, শেষ হয়েছে গোল তা দিয়ে, যার ওপর থামলে তা হা হয়ে যায়।"
          },
          {
            "en": "Al-Qurtubi gives no reason for the exception, and none is offered here. What the note does show is how closely the words of the Qur'an were watched: a single letter's shape in one verse among thousands was recorded, taught and carried down. A reader who meets this verse in recitation hears the same tree that al-Saffat names, yet written here in its own way. The care spent on that one letter is a reminder that every word of the warning around it was weighed as well.",
            "bn": "ব্যতিক্রমটির কারণ কুরতুবী বলেননি, এখানেও কোনো কারণ বানিয়ে বলা হবে না। তবে মন্তব্যটি একটা জিনিস স্পষ্ট দেখায়: কুরআনের শব্দ কতটা যত্নে পাহারা দেওয়া হয়েছে। হাজার হাজার আয়াতের মধ্যে একটি আয়াতে একটি হরফের আকার পর্যন্ত লিখে রাখা হয়েছে, শেখানো হয়েছে, প্রজন্ম থেকে প্রজন্মে পৌঁছেছে। তিলাওয়াতে এই আয়াত যে শোনে, সে শোনে সেই গাছেরই নাম যা সূরা সাফফাতে এসেছে, অথচ এখানে তার বানান আলাদা। একটি হরফের পেছনে এত যত্ন মনে করিয়ে দেয়, চারপাশের সতর্কবাণীর প্রতিটি শব্দও এভাবেই মেপে বসানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Tree Grows",
          "bn": "গাছটি জন্মায় কোথায়"
        },
        "p": [
          {
            "en": "The commentators describe the tree by what the Qur'an has already said of it. At-Tabari calls it the tree which Allah told us grows in the root of the Blaze, which He made food for the people of the Blaze; its fruit, in the Blaze, is the food of whoever sinned against his Lord in this world. The Muyassar uses nearly the words of 37:64, innaha shajaratun takhruju fi asli al-jahim, it is a tree that comes out at the root of the Blaze, and adds that its fruit is the food.",
            "bn": "কুরআন আগে গাছটি সম্পর্কে যা বলেছে, তাফসীরকারেরা সেটা দিয়েই একে চেনান। তাবারী বলেন, এ সেই গাছ যার কথা আল্লাহ জানিয়েছেন যে তা জাহীমের তলদেশে জন্মায়, যাকে তিনি জাহীমবাসীদের খাদ্য বানিয়েছেন। জাহীমে তার ফল খাবে সে, যে দুনিয়ায় নিজের রবের বিরুদ্ধে গুনাহ করেছে। মুয়াসসার প্রায় ৩৭:৬৪ আয়াতের ভাষাই ব্যবহার করে: ইন্নাহা শাজারাতুন তাখরুজু ফী আসলিল জাহীম, এটি এমন গাছ যা জাহীমের তলদেশ থেকে বের হয়। সঙ্গে যোগ করে, তার ফলই সেই খাদ্য।"
          },
          {
            "en": "As-Sa'di gives the tree a rank rather than a description: sharr al-ashjar wa-afza'uha, the worst of trees and the most hideous. Ma'arif al-Qur'an sends the reader back to 37:64 and 37:65 for what can be known of its reality and adds nothing of its own. None of the texts consulted for this verse explains the word zaqqum or ties the tree to any plant of this world, and this article does neither. The tree belongs to the unseen. It is known by its name, its place and its use, and no further.",
            "bn": "সা'দী গাছটির বর্ণনা না দিয়ে তার মান বলে দেন: শাররুল আশজার ওয়া আফযা'উহা, সব গাছের মধ্যে নিকৃষ্টতম আর সবচেয়ে বীভৎস। মাআরিফুল কুরআন এর বাস্তবতা জানতে পাঠককে ৩৭:৬৪ ও ৩৭:৬৫ আয়াতে ফিরে যেতে বলে, নিজে কিছু যোগ করে না। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীরে যাক্কুম শব্দের ব্যাখ্যা নেই। দুনিয়ার কোনো গাছের সঙ্গে একে মেলানোও হয়নি, এ লেখাও তা করবে না। গাছটি গায়েবের জগতের। একে চেনা যায় তার নাম, তার জায়গা আর তার কাজ দিয়ে, এর বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Food It Is",
          "bn": "এ খাবার কার জন্য"
        },
        "p": [
          {
            "en": "The completing verse names the eater, al-athim, and the commentators gloss the word only as far as the sentence needs. At-Tabari explains it as dhu al-ithm, the one who carries sin, from athima, ya'thamu. Then he narrows it: in this place it means the one whose sin is disbelief in his Lord, to the exclusion of other sins. Ibn Kathir agrees on the person: the sinful in word and in deed, and he is the disbeliever. Both read the food as reserved for those who refused Allah Himself.",
            "bn": "পরের আয়াত খাদকের নাম বলে দেয়: আল-আসীম। তাফসীরকারেরা শব্দটির ব্যাখ্যা দেন ততটুকুই, যতটুকু বাক্যের দরকার। তাবারী বলেন, এর অর্থ যুল ইসম, গুনাহের বোঝা যার ঘাড়ে, শব্দটি এসেছে আসিমা ইয়া'সামু থেকে। তারপর তিনি অর্থটা সংকীর্ণ করেন: এখানে উদ্দেশ্য সেই লোক যার গুনাহ হলো রবের সঙ্গে কুফরি, অন্য গুনাহ নয়। ইবন কাসীরও একই মানুষের কথা বলেন: কথায় ও কাজে গুনাহগার, আর সে হলো কাফির। দুজনের পাঠেই এ খাবার তাদের জন্য, যারা খোদ আল্লাহকেই অস্বীকার করেছে।"
          },
          {
            "en": "Two other voices draw the line a little wider. The Muyassar speaks of a person with many sins, and adds that the greatest of sins is associating partners with Allah. As-Sa'di names those who sin by the deeds of disbelief and by acts of disobedience, setting the two side by side. The texts do not argue the point with each other, and this article does not settle it. What they share is plain: the food of this tree is never served by chance. It is matched to what a person brought.",
            "bn": "আরও দুটি ব্যাখ্যা পরিসরটা একটু বড় করে। মুয়াসসার বলে, অনেক গুনাহের মালিক, আর যোগ করে যে সবচেয়ে বড় গুনাহ আল্লাহর সঙ্গে শিরক। সা'দী বলেন, যারা কুফরির কাজে আর নাফরমানিতে গুনাহ করেছে, দুটোকে পাশাপাশি রেখে। তাফসীরগুলো এ নিয়ে পরস্পরের সঙ্গে বিতর্কে যায়নি, এ লেখাও কোনো মীমাংসা টানবে না। তবে সবার মধ্যে মিলটা স্পষ্ট। এ গাছের খাবার কাউকে আকস্মিকভাবে দেওয়া হয় না। মানুষ যা নিয়ে আসে, খাবার মেলে তারই মাপে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Learner Who Misheard",
          "bn": "ভুল শোনা এক শিক্ষার্থী"
        },
        "p": [
          {
            "en": "At-Tabari records, by two chains through al-A'mash, Ibrahim and Hammam ibn al-Harith, that Abu al-Darda was teaching a man to recite inna shajarata al-zaqqum, ta'amu al-athim. The man kept saying ta'amu al-yatim, the food of the orphan. In the fuller version, when Abu al-Darda had repeated it to him many times and saw that he did not understand, he said: say, inna shajarata al-zaqqum ta'amu al-fajir, the food of the wicked. Ibn Kathir cites the same report through Ibn Jarir.",
            "bn": "তাবারী আ'মাশ, ইবরাহীম ও হাম্মাম ইবনুল হারিসের মাধ্যমে দুটি সনদে বর্ণনা করেন: আবুদ দারদা (রাঃ) এক লোককে পড়া শেখাচ্ছিলেন, ইন্না শাজারাতায যাক্কুম, তা'আমুল আসীম। লোকটি বারবার বলছিল তা'আমুল ইয়াতীম, এতিমের খাদ্য। বিস্তারিত বর্ণনায় আছে, আবুদ দারদা (রাঃ) অনেকবার শুধরে দিলেন, তারপর যখন দেখলেন লোকটি বুঝতে পারছে না, তখন বললেন: বলো, ইন্না শাজারাতায যাক্কুম তা'আমুল ফাজির, পাপাচারীর খাদ্য। ইবন কাসীরও ইবন জারীরের সূত্রে একই ঘটনা উল্লেখ করেছেন।"
          },
          {
            "en": "Neither commentator grades the report, and neither draws from it any ruling on recitation; this article draws none either. Ibn Kathir adds one gloss after it: that is, he will have no food other than it. The man's slip would have turned a warning into a cruelty, as if the Fire fed orphans. The teacher's patience, repeating and then finding another word, kept the meaning from being lost. A single misheard word here could have reversed the verse's whole direction.",
            "bn": "দুই তাফসীরকারের কেউ বর্ণনাটির মান নির্ণয় করেননি, আর কেউ এ থেকে তিলাওয়াতের কোনো বিধানও বের করেননি। এ লেখাও তা করবে না। ইবন কাসীর এর পরে একটি ব্যাখ্যা জুড়ে দেন: অর্থাৎ, এ ছাড়া তার আর কোনো খাবার থাকবে না। লোকটির ভুলে সতর্কবাণীটা নিষ্ঠুরতায় বদলে যেত, যেন আগুন এতিমদের খাওয়ায়। শিক্ষকের ধৈর্য, বারবার বলা আর শেষে অন্য শব্দ খুঁজে নেওয়া, অর্থটাকে হারিয়ে যেতে দেয়নি। এখানে একটি ভুল শোনা শব্দ আয়াতের পুরো দিকটাই উল্টে দিতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "If One Drop Fell Here",
          "bn": "এক ফোঁটা যদি এখানে পড়ত"
        },
        "p": [
          {
            "en": "Ibn Kathir then quotes Mujahid: if a drop of it fell upon the earth, it would ruin for the people of the earth their means of living. At-Tabari carries a close wording further back, through Mujahid to Ibn Abbas, as Ibn Abbas's own statement: if a drop of the zaqqum of Jahannam were sent down to this world, it would ruin people's livelihoods. Ibn Kathir adds that a similar report has come earlier in his work from the Prophet ﷺ himself. That report can be checked in a collection.",
            "bn": "ইবন কাসীর এরপর মুজাহিদের কথা উদ্ধৃত করেন: এর এক ফোঁটা যদি পৃথিবীতে পড়ত, তবে পৃথিবীবাসীর জীবনযাত্রা নষ্ট করে দিত। তাবারী কাছাকাছি ভাষার একটি বর্ণনা আরও পেছনে নিয়ে যান, মুজাহিদ হয়ে ইবন আব্বাস (রাঃ) পর্যন্ত, তাঁর নিজের উক্তি হিসেবে: জাহান্নামের যাক্কুমের এক ফোঁটা যদি দুনিয়ায় নামানো হতো, মানুষের জীবিকা নষ্ট হয়ে যেত। ইবন কাসীর আরও জানান, নবী ﷺ থেকেও এরকম একটি বর্ণনা তাঁর বইয়ে আগে এসেছে। সেই বর্ণনা হাদিসগ্রন্থে মিলিয়ে দেখা যায়।"
          },
          {
            "en": "At-Tirmidhi records from Ibn Abbas that the Messenger of Allah ﷺ recited, \"Have the Taqwa of Allah as His due, and do not die except as Muslims\" (3:102), and then said: \"If only a drop of Az-Zaqqum were to drip into the abode of the world, it would spoil the peoples' livelihood, so how about the person for whom it is his food?\" At-Tirmidhi grades it hasan sahih. The Prophet ﷺ spoke it after reciting 3:102, not this verse; it is Ibn Kathir who sets it beside the tree here.",
            "bn": "তিরমিযী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ তিলাওয়াত করলেন: আল্লাহকে ভয় করো যেমন তাঁকে ভয় করা উচিত, আর মুসলিম না হয়ে মৃত্যুবরণ কোরো না (৩:১০২)। তারপর বললেন: \"যাক্কুমের এক ফোঁটা যদি দুনিয়ার ঘরে টপকে পড়ত, তাহলে দুনিয়াবাসীর জীবনযাত্রা নষ্ট করে দিত। তাহলে যার খাবারই হবে এটা, তার অবস্থা কী হবে?\" তিরমিযী একে হাসান সহীহ বলেছেন। নবী ﷺ কথাটি বলেছিলেন ৩:১০২ তিলাওয়াতের পর, এ আয়াতের সঙ্গে নয়। এখানকার গাছের পাশে একে বসিয়েছেন ইবন কাসীর।"
          },
          {
            "en": "The question at its end turns the image back on the listener. A drop would be enough to spoil the living of a whole world; then what of the one whose only meal it is? The report does not describe the tree's substance and gives no detail beyond its effect. It measures the food by what a trace of it would do here, where people farm, trade and eat. The scale is meant to be felt rather than pictured, and the verse it followed was a call to taqwa.",
            "bn": "শেষের প্রশ্নটা শ্রোতার দিকেই ঘুরে আসে। এক ফোঁটাই যদি গোটা দুনিয়ার জীবনযাত্রা নষ্ট করতে যথেষ্ট হয়, তবে যার একমাত্র খাবারই এটা, তার কী হবে? বর্ণনাটি গাছের উপাদান বলে না, তার প্রভাবের বাইরে কোনো খুঁটিনাটিও দেয় না। খাবারটিকে মাপে এখানে তার সামান্য চিহ্ন কী ঘটাত তা দিয়ে, এই দুনিয়ায়, যেখানে মানুষ চাষ করে, কেনাবেচা করে, খায়। মাপটা কল্পনায় আঁকার জন্য নয়, অনুভব করার জন্য। আর যে আয়াতের পর কথাটি এসেছিল, তা ছিল তাকওয়ার ডাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Named, but Not Confined",
          "bn": "নাম এসেছে, সীমা টানা হয়নি"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that more than one commentator said the sinful one here is Abu Jahl. He gives no chain or source for the identification beyond that phrase, and he qualifies it at once: there is no doubt that Abu Jahl is included in this verse, but it is not specific to him. The eater of the tree is described by what he did, in word and in deed, and so the description reaches anyone it fits in the Hereafter, not one man of Makkah alone. None of the other texts consulted here names anyone.",
            "bn": "ইবন কাসীর জানান, একাধিক তাফসীরকার বলেছেন এখানকার পাপী হলো আবু জাহল। এই কথাটুকুর বাইরে তিনি কোনো সনদ বা সূত্র দেন না, আর সঙ্গে সঙ্গেই শর্ত জুড়ে দেন: আবু জাহল যে এ আয়াতের আওতায় পড়ে তাতে সন্দেহ নেই, কিন্তু আয়াতটি শুধু তার জন্য নির্দিষ্ট নয়। গাছের খাদককে চেনানো হয়েছে তার কাজ দিয়ে, কথায় ও কর্মে। তাই আখিরাতে এ বর্ণনা যার সঙ্গে মিলবে তার কাছেই পৌঁছায়, মক্কার একজন মানুষেই থেমে থাকে না। এখানে সংগ্রহ করা অন্য কোনো তাফসীরে কারও নাম নেই।"
          },
          {
            "en": "This needs saying plainly. The verse describes the food of the Fire and the one it is for, and Ibn Kathir's remark names a historical opponent of the Prophet ﷺ as one of those included. That licenses nothing against any living person or community. It gives no one the right to point at a neighbour, a people or a faith and assign them this tree. Who ends as al-athim is known to Allah alone, and the verse is addressed first to the one reading it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আগুনের খাবার আর তা কার জন্য, সেটুকু বর্ণনা করে। ইবন কাসীরের মন্তব্য নবী ﷺ-এর এক ঐতিহাসিক বিরোধীকে তাদের একজন হিসেবে চিহ্নিত করে। এ থেকে জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি মেলে না। প্রতিবেশী, কোনো জাতি বা কোনো ধর্মের দিকে আঙুল তুলে তাদের জন্য এ গাছ বরাদ্দ করার অধিকার কারও নেই। কার শেষ পরিণতি আল-আসীম হিসেবে হবে, তা কেবল আল্লাহ জানেন। আর আয়াতটি প্রথমে কথা বলে যে পড়ছে, তার সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Told of the Meal in Advance",
          "bn": "খাবারের খবর আগেভাগেই"
        },
        "p": [
          {
            "en": "Read slowly, the verse does something to the listener before the next one arrives. It names a tree and stops. For a moment the mind holds only the name, inside a passage about the Day of Decision, and waits to hear what the tree is for. The answer, when it comes, is the most ordinary word in the language of daily life: food. What people do every day at their own tables is set beside the strangest table there is, and the distance between them is the whole warning.",
            "bn": "ধীরে পড়লে আয়াতটি পরের আয়াত আসার আগেই শ্রোতার মনে কিছু একটা ঘটায়। একটি গাছের নাম বলে, তারপর থেমে যায়। ফয়সালার দিনের আলোচনার মাঝখানে কিছুক্ষণ মনে শুধু নামটাই থাকে, আর অপেক্ষা থাকে গাছটা কীসের জন্য তা শোনার। জবাব যখন আসে, তা দৈনন্দিন জীবনের সবচেয়ে সাধারণ শব্দ: খাবার। মানুষ রোজ নিজের দস্তরখানে যা করে, তা রাখা হলো সবচেয়ে অদ্ভুত দস্তরখানের পাশে। দুইয়ের মাঝের দূরত্বটাই পুরো সতর্কবাণী।"
          },
          {
            "en": "The Qur'an tells of this meal while the listener is still eating the food of this world, and that timing is itself a mercy. Nobody arrives at that tree without having been told of it. The verses before spoke of a Day when no friend avails a friend at all, except those on whom Allah has mercy (44:41 and 44:42), and the closing names of 44:42 are al-'Aziz al-Rahim, the Mighty, the Merciful. The warning is spoken from within that mercy, not apart from it.",
            "bn": "শ্রোতা যখন এখনো দুনিয়ার খাবার খাচ্ছে, কুরআন তখনই ওই খাবারের খবর দিয়ে দিচ্ছে। এই সময়টাই একটা রহমত। ওই গাছের কাছে কেউ না জেনে পৌঁছাবে না। আগের আয়াতগুলো বলেছে এমন এক দিনের কথা, যেদিন কোনো বন্ধু বন্ধুর কোনো কাজে আসবে না, তবে আল্লাহ যার প্রতি রহম করেন সে আলাদা (৪৪:৪১ ও ৪৪:৪২)। আর ৪৪:৪২ শেষ হয়েছে দুটি নামে: আল-আযীয, আর-রহীম, মহাপরাক্রান্ত, পরম দয়ালু। সতর্কবাণীটা আসছে সেই রহমতের ভেতর থেকেই, তার বাইরে থেকে নয়।"
          },
          {
            "en": "So the question the verse leaves is not about the tree's nature, which the texts leave with Allah, but about the reader's own choices. A person is fed in the next life according to what he brought from this world, and the commentators agree that the eater of this tree arrived carrying sin, whether they define it as disbelief alone or with disobedience beside it. What a person carries is gathered slowly, meal by meal, in what he takes in, earns and gives out, and in how he answers when Allah calls him.",
            "bn": "তাই আয়াতটি যে প্রশ্ন রেখে যায়, তা গাছের স্বরূপ নিয়ে নয়। সে বিষয় তাফসীরগুলো আল্লাহর ওপর ছেড়ে দিয়েছে। প্রশ্নটা পাঠকের নিজের বেছে নেওয়া নিয়ে। দুনিয়া থেকে মানুষ যা নিয়ে যায়, আখিরাতে তাকে খাওয়ানো হয় তারই হিসাবে। তাফসীরকারেরা একমত যে এ গাছের খাদক এসেছে গুনাহের বোঝা নিয়ে, তা শুধু কুফরি হোক বা সঙ্গে নাফরমানিও থাকুক। আর মানুষের এই বোঝা জমে ধীরে ধীরে, বেলায় বেলায়: সে কী গ্রহণ করে, কী উপার্জন করে, কী বিলায়, আর আল্লাহ ডাকলে কীভাবে সাড়া দেয়।"
          },
          {
            "en": "The Prophet ﷺ, in the report at-Tirmidhi preserves, asked about the one for whom it is his food after reciting a call to taqwa and to die only in submission. That pairing is a fair way to hold this verse: not as a picture to be studied, but as a reason to turn. The tree is named so that fewer people will meet it. The reader who hears the name, feels its weight and then changes one habit has understood what the three words were for.",
            "bn": "তিরমিযীর সংরক্ষিত বর্ণনায় নবী ﷺ তাকওয়ার আর আত্মসমর্পিত অবস্থায় মৃত্যুর ডাক তিলাওয়াত করেছিলেন, তারপর প্রশ্ন তুলেছিলেন সেই লোককে নিয়ে, যার খাবারই হবে এটা। এ আয়াতকে ধরার এটাই সঙ্গত উপায়। খুঁটিয়ে দেখার কোনো ছবি হিসেবে নয়, ফিরে আসার একটা কারণ হিসেবে। গাছটির নাম বলা হয়েছে যাতে কম মানুষ এর মুখোমুখি হয়। যে পাঠক নামটা শোনে, এর ভার টের পায়, তারপর অন্তত একটি অভ্যাস বদলায়, সে-ই বুঝেছে তিনটি শব্দ কেন বলা হয়েছিল।"
          }
        ]
      }
    ]
  },
  "44:45": {
    "sections": [
      {
        "h": {
          "en": "From the Tree to the Body",
          "bn": "গাছ থেকে শরীরের ভেতরে"
        },
        "p": [
          {
            "en": "Ka-l-muhli yaghli fi al-butun: like al-muhl, it boils in the bellies. Four Arabic words follow the naming of the tree of zaqqum in 44:43 and of its eater in 44:44, and they give the first thing said about what that food does. The tree itself has its own articles under 44:43 and 37:65, not retold here. This verse turns from the tree to the body. The food is now inside, and it is boiling.",
            "bn": "কাল মুহলি ইয়াগলী ফিল বুতূন: মুহলের মতো, পেটের ভেতর ফুটতে থাকবে। ৪৪:৪৩ আয়াতে যাক্কুম গাছের নাম এসেছে, ৪৪:৪৪ আয়াতে এসেছে কে তা খাবে। তার পরেই এই চারটি আরবি শব্দ, যেখানে প্রথমবার বলা হচ্ছে সেই খাবার কী করে। গাছটি নিয়ে ৪৪:৪৩ ও ৩৭:৬৫ আয়াতের আলাদা প্রবন্ধ আছে, এখানে সেসব আবার বলা হবে না। এ আয়াতের নজর গাছ থেকে সরে শরীরের দিকে। খাবারটা এখন ভেতরে, আর তা ফুটছে।"
          },
          {
            "en": "The sentence does not end here. The next verse, ka-ghalyi al-hamim, like the boiling of scalding water, completes the likeness, and the Muyassar reads the two together: the fruit of the tree of zaqqum, like molten metal, boils in the bellies of the polytheists like the boiling of water that has reached the limit of heat. Ibn Kathir, quoting both verses, gives the reason for the boiling: its heat and its rancidity. A substance like al-muhl is joined to a boiling like that of hamim.",
            "bn": "বাক্যটা এখানেই শেষ হয় না। পরের আয়াত কা গালয়িল হামীম, ফুটন্ত পানির ফোটার মতো, তুলনাটা সম্পূর্ণ করে। মুয়াসসার দুটো আয়াত মিলিয়ে একসঙ্গে পড়ে: যাক্কুম গাছের ফল গলানো ধাতুর মতো মুশরিকদের পেটে ফুটতে থাকবে, ঠিক যেমন ফোটে চরম তাপে পৌঁছানো পানি। ইবন কাসীরও দুই আয়াত একসঙ্গে উদ্ধৃত করে ফোটার কারণ বলেন: এর তাপ আর এর পচা দুর্গন্ধ। মুহলের মতো বস্তুর সঙ্গে এভাবে জুড়ে যায় হামীমের মতো ফুটে ওঠা।"
          },
          {
            "en": "Ma'arif al-Qur'an, condensing Bayan al-Qur'an, notes the order: the command to seize the sinner and drag him into the midst of the Blaze comes in 44:47, after the feeding. Some commentators take this to mean the zaqqum is served before entry, as nuzul, the first dish set before an arriving guest (56:56). The wording, it adds, also allows the feeding after entry, with the dragging taking him deeper into the fire. It ends with Allah knows best, and this article leaves it there.",
            "bn": "মাআরিফুল কুরআন বয়ানুল কুরআন থেকে সংক্ষেপ করে অংশটির ক্রমের দিকে নজর দেয়। পাপীকে ধরে জাহান্নামের মাঝখানে টেনে নেওয়ার হুকুম আসে ৪৪:৪৭ আয়াতে, খাওয়ানোর পরে। কিছু তাফসীরকারের মত সেখানে উল্লেখ আছে: যাক্কুম দেওয়া হবে জাহান্নামে ঢোকার আগেই, নুযুল হিসেবে (৫৬:৫৬)। নুযুল হলো আগত মেহমানের সামনে রাখা প্রথম খাবার। মাআরিফ যোগ করে, শব্দগুলো এ সম্ভাবনাও রাখে যে খাওয়ানো হবে ঢোকার পরে, আর টেনে নেওয়া মানে আগুনের আরও গভীরে নেওয়া। শেষে বলে, আল্লাহই ভালো জানেন। এ প্রবন্ধও সেখানেই থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Black Dregs of Oil",
          "bn": "তেলের তলার কালো গাদ"
        },
        "p": [
          {
            "en": "What is al-muhl? The answer most often reported from the Companions is the sediment of oil, and at-Tabari records it from Ibn Abbas through several chains. Through Qabus from his father: ka-durdiyyi al-zayt, like the dregs of oil. Through Ali ibn Abi Talha: aswadu ka-muhli al-zayt, black like the muhl of oil. Through Atiyya ibn Sa'd: ma'un ghalizun ka-durdiyyi al-zayt, a thick liquid like the dregs of oil. He also records Ibn Abbas giving the same gloss on 70:8, the Day the sky will be like al-muhl.",
            "bn": "মুহল কী? সাহাবীদের কাছ থেকে সবচেয়ে বেশি যে জবাব এসেছে, তা হলো তেলের তলানি। তাবারী ইবন আব্বাস (রাঃ)-এর কথা কয়েকটি সনদে বর্ণনা করেন। কাবূস তাঁর পিতার সূত্রে: কা দুরদিয়্যিয যাইত, তেলের গাদের মতো। আলী ইবন আবী তালহার সূত্রে: আসওয়াদু কা মুহলিয যাইত, তেলের মুহলের মতো কালো। আতিয়্যা ইবন সা'দের সূত্রে: মাউন গালীযুন কা দুরদিয়্যিয যাইত, তেলের গাদের মতো ঘন তরল। ৭০:৮ আয়াতে, যেদিন আকাশ হবে মুহলের মতো, সেখানেও ইবন আব্বাস (রাঃ)-এর একই ব্যাখ্যা তাবারী উল্লেখ করেন।"
          },
          {
            "en": "Ibn Umar, in another of at-Tabari's reports, put it as a question to those around him: do you know what al-muhl is? It is the muhl of oil, meaning its last part. Ibn Kathir, in his Arabic tafsir, gives the same meaning without naming anyone: qalu, ka-'akari al-zayt, they said, like the sediment of oil. Al-Baghawi's gloss is durdiyyu al-zayt al-aswad, the black dregs of oil. The abridged English Ibn Kathir renders the word simply as like the dregs of oil.",
            "bn": "তাবারীর আরেক বর্ণনায় ইবন উমর (রাঃ) কথাটা প্রশ্ন আকারে রাখেন আশপাশের লোকদের সামনে: তোমরা কি জানো মুহল কী? মুহল হলো তেলের মুহল, অর্থাৎ তেলের শেষাংশ। ইবন কাসীর তাঁর আরবি তাফসীরে কারও নাম না নিয়ে একই অর্থ দেন: কালূ, কা আকারিয যাইত, তাঁরা বলেছেন, তেলের তলানির মতো। বাগাভীর ব্যাখ্যা দুরদিয়্যুয যাইতিল আসওয়াদ, তেলের কালো গাদ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও শব্দটিকে সোজাসুজি তেলের গাদ বলে অনুবাদ করেছে।"
          },
          {
            "en": "Two of these glosses, Ali ibn Abi Talha's report and al-Baghawi's, add the colour: black. The picture they share is of something thick and dark, the part of the oil that settles at the bottom and stays after the rest is gone. It is the residue, not the clean oil. And the verse does not stop at the substance; it says this residue boils, inside whoever ate it.",
            "bn": "এর মধ্যে দুটি ব্যাখ্যা, আলী ইবন আবী তালহার বর্ণনা আর বাগাভীর কথা, রংটাও জানিয়ে দেয়: কালো। সবগুলো মিলে যে ছবি দাঁড়ায়, তা ঘন আর কালচে এক জিনিসের। তেলের যে অংশ তলায় জমে থাকে, বাকিটা ফুরিয়ে গেলেও যা রয়ে যায়। এটা তলানি, পরিষ্কার তেল নয়। আর আয়াতটি বস্তুর বর্ণনাতেই থামে না। বলে, এই তলানি ফোটে, যে খেয়েছে তার ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Metal Run to Liquid",
          "bn": "গলে তরল হওয়া ধাতু"
        },
        "p": [
          {
            "en": "At-Tabari's own paraphrase takes the word another way. The tree of zaqqum, whose fruit Allah made the food of the disbeliever in Jahannam, is like lead or silver, or whatever is melted in fire, when it is melted until its heat reaches its limit and its fierceness grows strong, in an intense blackness. He adds that he explained al-muhl earlier, with the commentators' disagreement over it, and here gives only reports he did not give there.",
            "bn": "তাবারী নিজের ভাষায় শব্দটির আরেক অর্থ ধরেন। যাক্কুম গাছ, যার ফলকে আল্লাহ জাহান্নামে কাফিরের খাবার বানিয়েছেন, তা সীসা বা রুপার মতো, কিংবা আগুনে গলে এমন যেকোনো কিছুর মতো। গলাতে গলাতে তার তাপ চরমে পৌঁছে যায়, ঝাঁঝ প্রচণ্ড হয়ে ওঠে, আর রং হয় ঘোর কালো। তিনি জানিয়ে দেন, মুহলের ব্যাখ্যা আর তা নিয়ে তাফসীরকারদের মতভেদ তিনি আগের এক জায়গায় দিয়ে এসেছেন। এখানে কেবল সেসব বর্ণনা আনবেন, যা সেখানে আনেননি।"
          },
          {
            "en": "Al-Qurtubi names a single metal: al-muhl is al-nuhas al-mudhab, molten copper. What reaches their bellies from the tree, he says, is likened to it, and it boils in them as hot water boils. The Muyassar keeps the word general, al-ma'dan al-mudhab, molten metal. Al-Hasan, in at-Tabari, reports that Ibn Abbas once saw silver that had been melted and said: hadha al-muhl, this is al-muhl. So Ibn Abbas is reported with both meanings, and the sources do not set them against each other.",
            "bn": "কুরতুবী একটি নির্দিষ্ট ধাতুর নাম বলেন: মুহল হলো আন-নুহাসুল মুযাব, গলানো তামা। তাঁর ভাষায়, গাছ থেকে যা তাদের পেটে পৌঁছায় তাকে এর সঙ্গে তুলনা করা হয়েছে, আর তা তাদের ভেতরে ফোটে গরম পানির মতো। মুয়াসসার শব্দটা সাধারণ রাখে: আল-মা'দিনুল মুযাব, গলানো ধাতু। তাবারীর বর্ণনায় হাসান জানান, ইবন আব্বাস (রাঃ) একবার গলানো রুপা দেখে বলেছিলেন: হাযাল মুহল, এটাই মুহল। তাহলে ইবন আব্বাস (রাঃ) থেকে দুটো অর্থই এসেছে, আর সূত্রগুলো একটিকে অন্যটির বিপক্ষে দাঁড় করায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lesson at the Treasury Fire",
          "bn": "বাইতুল মালের আগুনে এক শিক্ষা"
        },
        "p": [
          {
            "en": "At-Tabari then gathers a set of reports about Abdullah ibn Mas'ud, who had charge of the treasury. In the first, through Amr ibn Maymun from his father, given on ka-l-muhli yashwi al-wujuh (18:29), Abdullah went into the treasury, brought out what was left there, and lit a fire over it until it glittered. Then he said: where is he who asked about al-muhl? This is al-muhl. Al-A'mash has a shorter version: Ibn Mas'ud melted silver, then said, whoever wants to look at al-muhl, let him look at this.",
            "bn": "এরপর তাবারী আবদুল্লাহ ইবন মাসউদ (রাঃ)-কে নিয়ে কয়েকটি বর্ণনা একত্র করেন, যিনি তখন বাইতুল মালের দায়িত্বে ছিলেন। প্রথমটি আমর ইবন মাইমূন তাঁর পিতার সূত্রে বর্ণনা করেন, কা মুহলি ইয়াশউইল উজূহ (১৮:২৯) আয়াতের আলোচনায়। আবদুল্লাহ (রাঃ) বাইতুল মালে ঢুকে সেখানে পড়ে থাকা অবশিষ্ট জিনিস বের করে আনলেন, তার উপর আগুন জ্বাললেন, শেষে তা ঝিকমিক করে উঠল। তখন বললেন: মুহল সম্পর্কে যে জিজ্ঞেস করেছিল সে কোথায়? এটাই মুহল। আ'মাশের সূত্রে ছোট এক বর্ণনাও আছে: ইবন মাসউদ (রাঃ) রুপা গলিয়ে বললেন, যে মুহল দেখতে চায়, সে এটা দেখুক।"
          },
          {
            "en": "Al-Hasan tells it with more detail, opening with balaghani, it reached me. Ibn Mas'ud was asked about the muhl that people said would be the drink of the people of the Fire. He called for gold and silver and melted them, and said: this is the thing in this world most like al-muhl, which is the colour of the sky on the Day of Resurrection and the drink of the people of the Fire, except that that is hotter than this. Another version from al-Hasan has broken silver melted in a trench until it flowed, foamed and turned colours.",
            "bn": "হাসান ঘটনাটা আরও বিস্তারিত বলেন, শুরুতেই জানিয়ে দেন: বালাগানী, আমার কাছে এ খবর পৌঁছেছে। ইবন মাসউদ (রাঃ)-কে সেই মুহল সম্পর্কে জিজ্ঞেস করা হলো, লোকে যাকে জাহান্নামিদের পানীয় বলত। তিনি সোনা আর রুপা আনিয়ে গলালেন। তারপর বললেন: দুনিয়াতে মুহলের সবচেয়ে কাছাকাছি জিনিস এটাই। মুহল কিয়ামতের দিন আকাশের রং, আর জাহান্নামিদের পানীয়। তবে সেটা এর চেয়ে বেশি গরম। হাসানের আরেক বর্ণনায় ভাঙা রুপা নালায় রেখে গলানো হয়, শেষে তা গলে ফেনা তোলে আর নানা রং ধরে।"
          },
          {
            "en": "Qatada introduces his version with dhukira lana, it was mentioned to us: a vessel of gold and silver had been given to Ibn Mas'ud, and he had it melted the same way and called in men of Kufa to see. The reports differ in detail, and some come at second hand, but they share a method. He did not describe the unseen thing; he showed the nearest thing this world could offer, and in the fullest version he named the gap himself: that is hotter than this.",
            "bn": "কাতাদা তাঁর বর্ণনা শুরু করেন যুকিরা লানা দিয়ে, অর্থাৎ আমাদের কাছে উল্লেখ করা হয়েছে। ইবন মাসউদ (রাঃ)-কে সোনা-রুপার একটি পাত্র উপহার দেওয়া হয়েছিল। তিনি সেটি একইভাবে গলিয়ে কূফার কিছু লোককে ডেকে দেখালেন। বর্ণনাগুলোর খুঁটিনাটি আলাদা, কয়েকটি এসেছে পরোক্ষ সূত্রে, তবু পদ্ধতি সবার এক। তিনি অদেখা জিনিসের বর্ণনা দেননি। দুনিয়া যতটা কাছের নমুনা দিতে পারে, সেটাই চোখের সামনে রেখেছেন। আর সবচেয়ে পূর্ণ বর্ণনায় ফারাকটা তিনি নিজেই বলে দিয়েছেন: সেটা এর চেয়ে বেশি গরম।"
          }
        ]
      },
      {
        "h": {
          "en": "Foul Pus, and a Wide Word",
          "bn": "দুর্গন্ধ পুঁজ, এক বিস্তৃত শব্দ"
        },
        "p": [
          {
            "en": "As-Sa'di gives a third meaning. Ka-l-muhl, he writes: like foul-smelling pus, al-sadid al-muntin, vile in smell and taste and intensely hot, boiling in their bellies like the boiling of hamim. The sources consulted therefore give three explanations of the word: the dregs of oil, from Ibn Abbas, Ibn Umar, Ibn Kathir and al-Baghawi; molten metal, from at-Tabari's paraphrase, al-Qurtubi's copper, the Muyassar and the Ibn Mas'ud reports; and pus, from as-Sa'di. At-Tabari's paraphrase already joins two of them, molten metal and deep blackness.",
            "bn": "সা'দী তৃতীয় এক অর্থ দেন। কাল মুহল, তিনি লেখেন: দুর্গন্ধময় পুঁজের মতো, আস-সাদীদুল মুনতিন। গন্ধে ও স্বাদে জঘন্য, প্রচণ্ড গরম, যা তাদের পেটে ফোটে হামীমের মতো। তাহলে দেখা সূত্রগুলোতে শব্দটির তিনটি ব্যাখ্যা পাওয়া যায়। এক, তেলের গাদ: ইবন আব্বাস (রাঃ), ইবন উমর (রাঃ), ইবন কাসীর ও বাগাভী। দুই, গলানো ধাতু: তাবারীর নিজের ব্যাখ্যা, কুরতুবীর তামা, মুয়াসসার, আর ইবন মাসউদ (রাঃ)-এর বর্ণনাগুলো। তিন, পুঁজ: সা'দী। তাবারীর ব্যাখ্যায় অবশ্য দুটো আগে থেকেই মিশে আছে, গলানো ধাতু আর ঘোর কালো রং।"
          },
          {
            "en": "The word is not confined to this verse. Two other places appear inside at-Tabari's reports here: the water like al-muhl that scalds the faces in 18:29, and the sky that will be like al-muhl in 70:8. Ibn Mas'ud's fullest report ties those uses together, calling al-muhl both the colour of the sky on that Day and the drink of the people of the Fire. None of the commentators consulted chooses one meaning and rules out the rest, and this article does not either.",
            "bn": "শব্দটি শুধু এ আয়াতেই নেই। এখানে তাবারীর বর্ণনাগুলোর ভেতরেই আরও দুটি জায়গা উঠে আসে। ১৮:২৯ আয়াতে মুহলের মতো পানি, যা মুখমণ্ডল ঝলসে দেয়। আর ৭০:৮ আয়াতে আকাশ, যা হবে মুহলের মতো। ইবন মাসউদ (রাঃ)-এর সবচেয়ে পূর্ণ বর্ণনা এ ব্যবহারগুলোকে এক সুতোয় গেঁথেছে। সেখানে মুহল একই সঙ্গে সেদিনের আকাশের রং এবং জাহান্নামিদের পানীয়। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই একটি অর্থ বেছে নিয়ে বাকিগুলো বাদ দেয়নি। এ প্রবন্ধও তা করছে না।"
          },
          {
            "en": "What the three explanations share is easier to say. Each pairs the substance with heat: at-Tabari's metal melted to the limit of its heat, al-Qurtubi's water that boils, as-Sa'di's pus that is intensely hot, Ibn Kathir's heat and rancidity. Each is also something the body would refuse if it could. The verse puts it where the eater cannot set it down, and the next verse says it boils as hamim boils.",
            "bn": "তিনটি ব্যাখ্যার মিলটা বলা সহজ। প্রত্যেকটিতে বস্তুর সঙ্গে জুড়ে আছে তাপ। তাবারীর ধাতু গলে তাপের চরমে পৌঁছায়, কুরতুবীর পানি টগবগ করে ফোটে, সা'দীর পুঁজ প্রচণ্ড গরম, ইবন কাসীর বলেন তাপ আর পচা দুর্গন্ধের কথা। প্রত্যেকটিই এমন জিনিস, যা পারলে শরীর ফিরিয়ে দিত। আয়াতটি তা রাখে এমন জায়গায়, যেখান থেকে খাওয়া লোকটি তা নামিয়ে রাখতে পারে না। আর পরের আয়াত বলে, তা ফোটে যেমন ফোটে হামীম।"
          }
        ]
      },
      {
        "h": {
          "en": "Taghli or Yaghli: What Boils",
          "bn": "তাগলী না ইয়াগলী: ফোটে কোনটি"
        },
        "p": [
          {
            "en": "The verb is read two ways. At-Tabari reports that most readers of Medina, Basra and Kufa read taghli, with the feminine prefix ta, meaning that the tree boils in their bellies, since shajara, tree, is feminine. Some readers of Kufa read yaghli, with the masculine ya. Of these, he says, some made it masculine for al-ta'am, the food of the sinful, so that the food boils, and some for al-muhl, so that the boiling describes al-muhl itself.",
            "bn": "ক্রিয়াটি দুইভাবে পড়া হয়। তাবারী জানান, মদীনা, বসরা ও কূফার বেশিরভাগ কারী পড়েন তাগলী, স্ত্রীবাচক তা দিয়ে। অর্থ: গাছটি তাদের পেটে ফোটে, কারণ শাজারা বা গাছ শব্দটি স্ত্রীবাচক। কূফার কিছু কারী পড়েন ইয়াগলী, পুংবাচক ইয়া দিয়ে। তাবারী বলেন, এঁদের কেউ পুংবাচক ধরেছেন আত-তাআম শব্দের জন্য, অর্থাৎ পাপীর খাবারই ফোটে। আবার কেউ ধরেছেন মুহলের জন্য, তখন ফোটাটা মুহলেরই বিশেষণ।"
          },
          {
            "en": "Al-Qurtubi names the readers of yaghli: Ibn Kathir, the reader and not the commentator of the same name, with Hafs, Ibn Muhaysin, and Ruways from Ya'qub. He refers the verb to al-ta'am, the food, which in meaning is the tree, and he rules out al-muhl, since al-muhl is mentioned only as a comparison. Al-Baghawi names Ibn Kathir and Hafs for yaghli and says the opposite: they gave the verb to al-muhl. The rest, he says, read taghli for the femininity of the tree.",
            "bn": "কুরতুবী ইয়াগলী পাঠের কারীদের নাম বলেন: ইবন কাসীর, যিনি কারী, একই নামের তাফসীরকার নন, সঙ্গে হাফস, ইবন মুহাইসিন, আর ইয়াকূবের সূত্রে রুওয়াইস। তিনি ক্রিয়াটিকে যুক্ত করেন আত-তাআম বা খাবারের সঙ্গে, যা অর্থের দিক থেকে গাছই। মুহলের সঙ্গে যুক্ত করাকে তিনি নাকচ করেন, কারণ মুহল এসেছে কেবল তুলনা হিসেবে। বাগাভী ইয়াগলী পাঠে ইবন কাসীর ও হাফসের নাম নেন, আর বলেন ঠিক উল্টো কথা: তাঁরা ক্রিয়াটিকে মুহলের সঙ্গে জুড়েছেন। বাকিরা, তাঁর ভাষায়, গাছ স্ত্রীবাচক বলে তাগলী পড়েছেন।"
          },
          {
            "en": "So the commentators differ on what yaghli refers to. Al-Baghawi gives it to al-muhl; al-Qurtubi refuses that and gives it to the food; at-Tabari reports both views among the Kufan readers. On the readings themselves at-Tabari is clear: both are well known and sound in meaning, and whichever a reciter uses, he is correct. The Mushaf text this site displays has yaghli, the reading of Hafs. On either reading, what boils is what was eaten.",
            "bn": "তাহলে ইয়াগলী কার দিকে ফেরে, তা নিয়ে তাফসীরকারদের মতভেদ আছে। বাগাভী একে মুহলের সঙ্গে জোড়েন। কুরতুবী তা মানেন না, জোড়েন খাবারের সঙ্গে। তাবারী কূফার কারীদের মধ্যে দুটো মতই উল্লেখ করেন। তবে পাঠ দুটি নিয়ে তাবারীর কথা পরিষ্কার: দুটোই সুপরিচিত, অর্থের দিক থেকে দুটোই সঠিক, যেকোনোটি পড়লে পাঠক ঠিকই পড়লেন। এ সাইটে যে মুসহাফের পাঠ দেখানো হয়, তাতে আছে ইয়াগলী, হাফসের পাঠ। যে পাঠই ধরা হোক, যা ফোটে তা খাওয়া জিনিসটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report the Collector Flagged",
          "bn": "সংকলক নিজেই যে বর্ণনায় সতর্ক করেছেন"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted attaches a sound hadith to this verse; the reports above are not the Prophet's ﷺ words. At-Tabari does carry a report raised to the Prophet ﷺ, from Abu Sa'id al-Khudri, but he places it on bi-ma'in ka-l-muhl, water like al-muhl, in 18:29. At-Tirmidhi records it (2581) in this wording: \"Like boiling oil, such that when it is brought close to his face, the skin of his face will fall off into it.\" The Arabic he records reads ka-'akari al-zayt, like the sediment of oil.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। উপরের বর্ণনাগুলো নবী ﷺ-এর বাণী নয়। তাবারী অবশ্য আবু সাঈদ খুদরী (রাঃ) থেকে নবী ﷺ পর্যন্ত পৌঁছানো একটি বর্ণনা আনেন, তবে তা রাখেন ১৮:২৯ আয়াতের বিমাইন কাল মুহল, মুহলের মতো পানি, অংশের আলোচনায়। তিরমিযী এটি বর্ণনা করেছেন (২৫৮১) এই ভাষায়: \"ফুটন্ত তেলের মতো, যখন তা মুখের কাছে আনা হবে, মুখের চামড়া খসে তাতে পড়ে যাবে।\" তাঁর বর্ণিত আরবি পাঠে আছে কা আকারিয যাইত, তেলের তলানির মতো।"
          },
          {
            "en": "At-Tirmidhi adds his own judgement after it: we know this hadith only through Rishdin ibn Sa'd, and Rishdin has been criticised for his memory. The article therefore builds nothing on it. Its gloss agrees with what Ibn Abbas and Ibn Umar are reported to have said, but agreement does not strengthen a chain the collector himself questioned. The meaning of al-muhl rests on the Companions and the commentators, who leave it a word of several senses.",
            "bn": "বর্ণনার পরেই তিরমিযী নিজের মন্তব্য যোগ করেন: এ হাদীস আমরা কেবল রিশদীন ইবন সা'দের সূত্রেই জানি, আর স্মৃতিশক্তির কারণে রিশদীনকে নিয়ে সমালোচনা হয়েছে। তাই এ প্রবন্ধ এর উপর কিছুই দাঁড় করায় না। ইবন আব্বাস (রাঃ) ও ইবন উমর (রাঃ) থেকে যা বর্ণিত, তার সঙ্গে এর ব্যাখ্যা মেলে ঠিকই। কিন্তু সংকলক নিজে যে সনদ নিয়ে প্রশ্ন তুলেছেন, অর্থ মিলে গেলেই তা মজবুত হয়ে যায় না। মুহলের অর্থ দাঁড়িয়ে আছে সাহাবী ও তাফসীরকারদের ব্যাখ্যার উপর, আর তাঁরা শব্দটিকে কয়েক অর্থের শব্দ হিসেবেই রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Food Should Comfort",
          "bn": "যেখানে খাবারের স্বস্তি দেওয়ার কথা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the food of the sinful does in the Fire; the Muyassar calls the bellies those of the polytheists, and al-Baghawi those of the disbelievers. It describes what the text describes and licenses nothing against any living person or community. No one may point at a neighbour, a people or a faith and assign them this verse. Who ends as al-athim is known to Allah alone, and the passage has just named, in 44:42, those on whom Allah has mercy.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বলছে, জাহান্নামে পাপীর খাবার কী করে। মুয়াসসার এই পেটগুলোকে বলে মুশরিকদের পেট, বাগাভী বলেন কাফিরদের। আয়াত যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি এ আয়াত দেয় না। প্রতিবেশী, কোনো জাতি বা কোনো ধর্মের দিকে আঙুল তুলে কেউ এ আয়াত তাদের ঘাড়ে চাপাতে পারে না। শেষ পর্যন্ত কে আল-আসীম হবে, তা কেবল আল্লাহই জানেন। আর ঠিক আগে ৪৪:৪২ আয়াতে এ অংশটিই বলে দিয়েছে, যাদের প্রতি আল্লাহ রহম করবেন তাদের কথা আলাদা।"
          },
          {
            "en": "For the reader, the verse turns on a single place in the body. The belly is where food is meant to settle and comfort. Here it becomes the place of burning, and a punishment inside cannot be stepped away from. The Companions explained al-muhl with restraint, showing the nearest thing they could, dregs at the bottom of a jar, metal melted until it foamed, and Ibn Mas'ud, in al-Hasan's report, said plainly that the real thing is hotter.",
            "bn": "পাঠকের জন্য আয়াতটির কেন্দ্র শরীরের একটি জায়গা। পেট সেই জায়গা, যেখানে খাবার গিয়ে থিতু হয়, স্বস্তি দেয়। এখানে সেই জায়গাটাই হয়ে যায় জ্বলুনির জায়গা। শাস্তি ভেতরে হলে তা থেকে সরে দাঁড়ানোর উপায় থাকে না। সাহাবীরা মুহলের ব্যাখ্যা দিয়েছেন সংযমের সঙ্গে। যতটা কাছের জিনিস দেখানো যায়, তাই দেখিয়েছেন: পাত্রের তলার গাদ, ফেনা ওঠা পর্যন্ত গলানো ধাতু। আর হাসানের বর্ণনায় ইবন মাসউদ (রাঃ) স্পষ্ট বলে দিয়েছেন, আসলটা এর চেয়ে বেশি গরম।"
          },
          {
            "en": "That restraint is a model for how to carry this verse. It is not material for frightening others with details the texts do not give, nor a picture to study and put away. Everyone who hears it has seen oil darken in a pan and metal glow in a flame. The warning comes in the language of the kitchen and the forge so that it can be understood now, while what a person takes in and turns from is still in his own hands.",
            "bn": "এই সংযমই আয়াতটি বহন করার নমুনা। বর্ণনায় যা নেই, এমন খুঁটিনাটি দিয়ে অন্যকে ভয় দেখানোর উপকরণ এটা নয়। আবার একবার দেখে তুলে রাখার মতো ছবিও নয়। যে-ই আয়াতটি শোনে, সে কড়াইয়ে তেল কালো হতে দেখেছে, আগুনে ধাতু লাল হতে দেখেছে। সতর্কবাণীটা এসেছে রান্নাঘর আর কামারশালার ভাষায়, যাতে এখনই বোঝা যায়। এখন, যখন মানুষ কী গ্রহণ করবে আর কী থেকে ফিরবে, তা এখনো তার নিজের হাতে।"
          }
        ]
      }
    ]
  },
  "44:51": {
    "sections": [
      {
        "h": {
          "en": "After Seize Him, Safety",
          "bn": "ধরো-এর পরে নিরাপত্তা"
        },
        "p": [
          {
            "en": "The verses just before this are a run of commands. In 44:47 it is said of the sinner: seize him and drag him into the midst of the Blaze. In 44:48: pour over his head the torment of scalding water. In 44:49 comes the bitter word, taste, you who were the mighty and the noble, and 44:50 closes it: this is what you used to doubt. Then, with no bridge and no pause for breath, the next verse opens with inna again, and it speaks of other people entirely.",
            "bn": "এর ঠিক আগের আয়াতগুলো একের পর এক আদেশ। ৪৪:৪৭ আয়াতে পাপীকে নিয়ে বলা হয়: ওকে ধরো, টেনে নিয়ে যাও জাহান্নামের মাঝখানে। ৪৪:৪৮ আয়াতে: ঢেলে দাও তার মাথার উপর ফুটন্ত পানির শাস্তি। ৪৪:৪৯ আয়াতে আসে তিক্ত বিদ্রূপ: স্বাদ নাও, তুমি তো ছিলে ক্ষমতাশালী, সম্মানী। ৪৪:৫০ আয়াত দৃশ্যটা শেষ করে: এ-ই সেই জিনিস, যাতে তোমরা সন্দেহ করতে। তারপর কোনো সংযোগ-শব্দ ছাড়া, দম নেওয়ার বিরতি ছাড়াই, পরের আয়াত আবার ইন্না দিয়ে শুরু হয়। আর কথা বলে সম্পূর্ণ অন্য মানুষদের নিয়ে।"
          },
          {
            "en": "The commentators name the turn. Ibn Kathir writes that when Allah has mentioned the state of the wretched, He follows it with the state of the blessed, and he adds that for this reason the Qur'an is called mathani, which his English abridgement renders as oft-repeated. Al-Qurtubi puts it in his own pair of words: having mentioned the settled abode of the disbelievers and their punishment, He mentions the lodging of the believers and their bliss. As-Sa'di opens bluntly: this is the reward of the muttaqin.",
            "bn": "মোড়টা কোথায়, তাফসীরকারেরা তা বলে দেন। ইবন কাসীর লেখেন, আল্লাহ যখন হতভাগাদের অবস্থা বলেন, তার পরেই বলেন সৌভাগ্যবানদের অবস্থা। এ কারণেই কুরআনকে মাসানী বলা হয়, আর তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণ শব্দটির অর্থ করে বারবার ফিরে আসা। কুরতুবী নিজের দুটি শব্দে কথাটা বলেন: কাফিরদের ঠিকানা আর তাদের শাস্তির কথা বলার পর তিনি বলছেন মুমিনদের আবাস আর তাদের নিয়ামতের কথা। সা'দী শুরু করেন সোজাসুজি: এ হলো মুত্তাকীদের প্রতিদান।"
          },
          {
            "en": "The contrast is drawn in the verses themselves. The tree of zaqqum in 44:43 was food for the sinner; here the first thing named for the muttaqin is a place, and its quality is safety. The man of 44:47 is seized and dragged; these are simply there, in a station, settled. He was mocked as mighty and noble; they are given no title at all, only the security of where they are. The Qur'an sets the two scenes side by side so that each is read in the light of the other.",
            "bn": "বৈপরীত্যটা আয়াতগুলোর ভেতরেই আঁকা। ৪৪:৪৩ আয়াতের যাক্কুম গাছ ছিল পাপীর খাবার। আর এখানে মুত্তাকীদের জন্য প্রথম যে জিনিসের নাম এল, তা একটি জায়গা, যার গুণ হলো নিরাপত্তা। ৪৪:৪৭ আয়াতের লোকটিকে ধরে টেনে নেওয়া হয়। এরা শুধু আছে, এক অবস্থানে, স্থির হয়ে। তাকে বিদ্রূপ করে বলা হয়েছিল ক্ষমতাশালী, সম্মানী। এদের কোনো উপাধিই দেওয়া হয়নি, দেওয়া হয়েছে কেবল নিজেদের জায়গার নিরাপত্তা। কুরআন দুটি দৃশ্য পাশাপাশি রাখে, যাতে একটিকে অন্যটির আলোয় পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Words, Read Slowly",
          "bn": "পাঁচটি শব্দ, ধীরে পড়া"
        },
        "p": [
          {
            "en": "Inna al-muttaqina fi maqamin amin: indeed, the muttaqin are in a secure station. The verse is five words. Inna gives the statement its weight, as it gave weight to the sentence about the Fire a moment earlier. Al-muttaqin carries the definite article: a known group, described elsewhere and defined by the commentators below. Fi places them inside something. Maqam names where they are, and the commentators report two readings of its first vowel. Amin, the last word, tells what kind of place it is.",
            "bn": "ইন্নাল মুত্তাকীনা ফী মাকামিন আমীন: নিশ্চয়ই মুত্তাকীরা থাকবে নিরাপদ এক অবস্থানে। আয়াতটি পাঁচ শব্দের। ইন্না কথাটিকে ভার দেয়, যেমন একটু আগে আগুনের বাক্যটিকেও দিয়েছিল। আল-মুত্তাকীন শব্দে আছে নির্দিষ্টবাচক আল, অর্থাৎ পরিচিত এক দল। তাদের বর্ণনা অন্য জায়গায় এসেছে, আর তাফসীরকারদের দেওয়া সংজ্ঞা নিচে আসছে। ফী তাদের কোনো কিছুর ভেতরে রাখে। মাকাম বলে তারা কোথায়, আর এর প্রথম স্বরের দুটি পাঠ তাফসীরকারেরা বর্ণনা করেন। শেষ শব্দ আমীন বলে দেয় জায়গাটা কেমন।"
          },
          {
            "en": "That last word is worth a second look. Amin is a describing word, and here it is laid on the place, not on the people. The commentators unpack it in two directions. Al-Qurtubi keeps it on the place: a place in which a person is made secure from harms. At-Tabari moves it to the people: they are safe in that location. Ma'arif al-Qur'an renders it as a place free from fear. The place is safe, and so its people are safe; the verse needs only the single adjective to say both.",
            "bn": "শেষ শব্দটির দিকে আরেকবার তাকানো দরকার। আমীন একটি বিশেষণ, আর এখানে তা বসেছে জায়গার উপর, মানুষের উপর নয়। তাফসীরকারেরা একে দুই দিকে খুলে দেখান। কুরতুবী একে জায়গার সঙ্গেই রাখেন: এমন স্থান, যেখানে মানুষকে বিপদ-আপদ থেকে নিরাপদ রাখা হয়। তাবারী একে নিয়ে যান মানুষের দিকে: সেই জায়গায় তারা নিরাপদ। মাআরিফুল কুরআন অর্থ করে ভয়মুক্ত স্থান। জায়গা নিরাপদ, তাই তার বাসিন্দারাও নিরাপদ। দুটি কথা বলতে আয়াতের লেগেছে একটিমাত্র বিশেষণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Station Is For",
          "bn": "অবস্থানটি কাদের জন্য"
        },
        "p": [
          {
            "en": "The commentators define al-muttaqin by what such people did. At-Tabari: those who guarded themselves before Allah by performing His obedience and avoiding disobedience to Him. The Muyassar says nearly the same: those who feared Allah by obeying His commands and avoiding His prohibitions, and it adds where, in this world, against the station, which is in the Hereafter. Ibn Kathir is shortest: those who feared Allah in this world. His English abridgement renders it as those who fear Allah and are dutiful towards Him in this world.",
            "bn": "আল-মুত্তাকীনের সংজ্ঞা তাফসীরকারেরা দেন এই মানুষদের কাজ দিয়ে। তাবারী বলেন: যারা আল্লাহর আনুগত্য করে আর তাঁর নাফরমানি এড়িয়ে আল্লাহর ব্যাপারে নিজেদের সাবধানে রেখেছে। মুয়াসসার প্রায় একই কথা বলে: যারা তাঁর আদেশ মেনে আর নিষেধ এড়িয়ে আল্লাহকে ভয় করেছে। সঙ্গে বলে দেয়, কোথায় ভয় করেছে: দুনিয়ায়। অথচ অবস্থানটি আখিরাতে। ইবন কাসীরের কথা সবচেয়ে ছোট: যারা দুনিয়ায় আল্লাহকে ভয় করেছে। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণ লেখে: যারা আল্লাহকে ভয় করে আর দুনিয়ায় তাঁর প্রতি কর্তব্যনিষ্ঠ থাকে।"
          },
          {
            "en": "As-Sa'di frames it as a guarding against something: those who guarded against His displeasure and His punishment by leaving sins and doing acts of obedience. Then he draws out a consequence in a single sentence. Since displeasure and punishment were removed from them, His good pleasure and the great reward were established for them. He does not name safety himself, but set beside this verse his sentence fits it closely: what they guarded against in this world can no longer reach them in the next.",
            "bn": "সা'দী কথাটা বলেন কিছু থেকে বেঁচে থাকার ভাষায়: যারা গুনাহ ছেড়ে আর আনুগত্যের কাজ করে তাঁর অসন্তুষ্টি ও শাস্তি থেকে বেঁচে থেকেছে। তারপর এক বাক্যে তিনি ফলাফল টেনে আনেন। অসন্তুষ্টি আর শাস্তি যখন তাদের থেকে সরে গেল, তখন তাদের জন্য সাব্যস্ত হলো আল্লাহর সন্তুষ্টি আর মহা প্রতিদান। তিনি নিজে নিরাপত্তার কথা বলেননি। তবু এ আয়াতের পাশে রাখলে তাঁর বাক্যটি খুব মিলে যায়। দুনিয়ায় যা থেকে তারা বেঁচে থেকেছে, আখিরাতে তা আর তাদের নাগাল পায় না।"
          },
          {
            "en": "Read together, the definitions agree on the shape of the thing even where their wording differs. Taqwa is located in this world and in deeds: obedience done, disobedience avoided. The station is located in the next world. None of the commentaries consulted here defines the muttaqin by lineage, by title or by a feeling alone. That matters for a reader, because it means the door to this verse is an act that can be done today, not a status a person is born into.",
            "bn": "সংজ্ঞাগুলো পাশাপাশি পড়লে দেখা যায়, শব্দ আলাদা হলেও মূল কাঠামোয় তারা একমত। তাকওয়ার জায়গা দুনিয়া, আর তার প্রকাশ আমলে: আনুগত্য পালন, নাফরমানি বর্জন। অবস্থানটির জায়গা আখিরাত। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই মুত্তাকীদের সংজ্ঞা দেয়নি বংশ, উপাধি বা নিছক অনুভূতি দিয়ে। পাঠকের জন্য কথাটা জরুরি। এর মানে এ আয়াতের দরজা এমন এক কাজ, যা আজই করা যায়। জন্মসূত্রে পাওয়া কোনো মর্যাদা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fatha or a Damma",
          "bn": "যবর, নাকি পেশ"
        },
        "p": [
          {
            "en": "At-Tabari records that the reciters differed over the word. The general body of the readers of Madinah read fi muqamin, with a damma on the mim. The general body of the readers of the two cities, Kufah and Basrah, read fi maqamin, with a fatha, in the sense he has already given and taking it to mean that they are in a secure place and location. The fatha is the reading in the Arabic text this article quotes.",
            "bn": "তাবারী জানান, শব্দটি পড়ায় কারীদের মধ্যে মতভেদ হয়েছে। মদীনার সাধারণ কারীরা পড়েছেন ফী মুকামিন, মীমে পেশ দিয়ে। আর দুই নগরী কূফা ও বসরার সাধারণ কারীরা পড়েছেন ফী মাকামিন, যবর দিয়ে। এ পাঠের অর্থ তিনি আগেই বলেছেন, আর একে বুঝেছেন এভাবে: তারা আছে এক নিরাপদ স্থানে, নিরাপদ জায়গায়। এ প্রবন্ধে যে আরবি পাঠ উদ্ধৃত, তাতে আছে যবর।"
          },
          {
            "en": "His verdict is even-handed. Both, he says, are widespread readings in the cities, both sound in meaning, so whichever of them a reciter reads, he is right. Al-Qurtubi gives the readers by name: Nafi' and Ibn 'Amir read it with the damma, and the rest with the fatha. Al-Baghawi gives them by region: the people of Madinah and of al-Sham read the damma, as a verbal noun meaning a staying; the others read the fatha, meaning a secure sitting-place.",
            "bn": "তাঁর রায় ভারসাম্যপূর্ণ। তিনি বলেন, দুটিই নগরগুলোতে প্রচলিত পাঠ, দুটিরই অর্থ সঠিক। তাই কারী এর যেটিই পড়ুন, তিনি ঠিক পড়েছেন। কুরতুবী কারীদের নাম ধরে বলেন: নাফে' আর ইবন আমির পড়েছেন পেশ দিয়ে, বাকিরা যবর দিয়ে। বাগাভী বলেন অঞ্চল ধরে: মদীনা আর শামের লোকেরা পড়েছেন পেশ দিয়ে, ক্রিয়াবাচক বিশেষ্য হিসেবে, যার অর্থ অবস্থান করা। অন্যরা পড়েছেন যবর দিয়ে, যার অর্থ নিরাপদ বসার জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing, Staying and Sitting",
          "bn": "দাঁড়ানো, থাকা, বসা"
        },
        "p": [
          {
            "en": "Al-Qurtubi then brings in the language scholars. He quotes al-Kisa'i: maqam with the fatha is the place, and muqam with the damma is the residing, and he cites a line of verse: the dwellings are effaced, their halting-place and their staying-place. He quotes al-Jawhari more fully: either form can mean a residing, and either can mean the place where a person stands. Taken from qama, yaqumu, to stand, the word has the fatha; taken from aqama, yuqimu, to stay, it has the damma.",
            "bn": "এরপর কুরতুবী ভাষাবিদদের কথা আনেন। তিনি কিসাঈর কথা উদ্ধৃত করেন: যবরের মাকাম মানে জায়গা, আর পেশের মুকাম মানে অবস্থান করা। প্রমাণ হিসেবে আনেন কবিতার একটি পঙক্তি: মুছে গেছে বসতিগুলো, তাদের থামার জায়গা আর থাকার জায়গা। জাওহারীর কথা তিনি আরও বিস্তারে আনেন: দুটি রূপের যেকোনোটির অর্থ হতে পারে অবস্থান করা, আবার দাঁড়ানোর জায়গাও। কামা-ইয়াকূমু, অর্থাৎ দাঁড়ানো থেকে নিলে যবর হয়। আকামা-ইউকীমু, অর্থাৎ থেকে যাওয়া থেকে নিলে পেশ।"
          },
          {
            "en": "Al-Jawhari gives the reason for the damma: when a verb goes beyond three letters, its noun of place takes a damma on the mim, on the pattern of four-letter verbs, as dahraja gives mudahraj. Al-Qurtubi then adds a further view under the words it is said: maqam with the fatha is the mashhad and the majlis, the place of gathering and of sitting, while muqam with the damma may be the place itself, or a verbal noun with a word understood, in a place of residing.",
            "bn": "পেশের কারণটাও জাওহারী বলেন। ক্রিয়া যখন তিনটি অক্ষর ছাড়িয়ে যায়, তখন তার স্থানবাচক বিশেষ্যের মীমে পেশ হয়, চারটি অক্ষরের ক্রিয়ার ধাঁচে, যেমন দাহরাজা থেকে মুদাহরাজ। তারপর কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি মত যোগ করেন। যবরের মাকাম হলো মাশহাদ ও মজলিস, অর্থাৎ সমাবেশের আর বসার জায়গা। আর পেশের মুকাম হতে পারে খোদ জায়গাটি, আবার হতে পারে ক্রিয়াবাচক বিশেষ্য, যার আগে একটি শব্দ উহ্য: অবস্থানের জায়গায়।"
          },
          {
            "en": "Set side by side, the two readings say complementary things, in keeping with at-Tabari's judgement that both are sound. The fatha tells where the muttaqin are: a place, a seat, a gathering of people who are safe in it. The damma tells how they are there: they reside, they stay. A reader who knows of both hears in the verse a place to be and a staying in it, and both are qualified by the same word, amin.",
            "bn": "পাশাপাশি রাখলে দুটি পাঠ পরস্পরের পরিপূরক কথা বলে, যা তাবারীর রায়ের সঙ্গে মেলে: দুটিই সঠিক। যবর বলে মুত্তাকীরা কোথায়: এক জায়গায়, এক আসনে, এমন মানুষদের সমাবেশে, যারা সেখানে নিরাপদ। পেশ বলে তারা সেখানে কীভাবে আছে: তারা বসবাস করে, থেকে যায়। যে পাঠক দুটির কথাই জানেন, তিনি আয়াতে শোনেন থাকার একটি জায়গা আর সেখানে থেকে যাওয়া। আর দুটিকেই বিশেষিত করে একই শব্দ, আমীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Safe From Which Harms",
          "bn": "ঠিক কিসের থেকে নিরাপদ"
        },
        "p": [
          {
            "en": "The verse says amin and stops; it does not list what the station is secure from. The commentators fill that silence, and they do not all fill it the same way. Al-Qurtubi is briefest: a place where a person is secured from harms. The Muyassar widens it a little: secure from harms and griefs and what is like them. At-Tabari ties it to this world: safe in that place from what they used to fear in the stations of the world, from aches, illnesses, weariness and griefs.",
            "bn": "আয়াত বলে আমীন, তারপর থেমে যায়। জায়গাটা কিসের থেকে নিরাপদ, তার তালিকা দেয় না। সেই নীরবতা তাফসীরকারেরা পূরণ করেন, তবে সবাই একভাবে নয়। কুরতুবীর কথা সবচেয়ে ছোট: এমন জায়গা, যেখানে মানুষ বিপদ-আপদ থেকে নিরাপদ। মুয়াসসার একটু বড় করে: বিপদ-আপদ, দুঃখ আর এ জাতীয় সবকিছু থেকে নিরাপদ। তাবারী একে বাঁধেন দুনিয়ার সঙ্গে: দুনিয়ার অবস্থানগুলোতে তারা যা ভয় করত, যেমন ব্যথা-যন্ত্রণা, রোগব্যাধি, ক্লান্তি আর দুঃখ, সেই জায়গায় সেসব থেকে তারা নিরাপদ।"
          },
          {
            "en": "At-Tabari then cites Qatada through a chain he gives, and Qatada's gloss opens with an oath: yes, by Allah, secure from the Shaytan, from weariness and from griefs. Al-Baghawi goes in a different direction. For him the station is secure from change, which he spells out as secure from death and from being taken out of it. His concern is not pain while there but permanence: nothing will end the stay, and nobody will be moved on.",
            "bn": "এরপর তাবারী নিজের দেওয়া সনদে কাতাদার কথা আনেন। কাতাদার ব্যাখ্যা শুরু হয় শপথ দিয়ে: হ্যাঁ, আল্লাহর কসম, শয়তান থেকে, ক্লান্তি থেকে আর দুঃখ থেকে নিরাপদ। বাগাভী যান ভিন্ন দিকে। তাঁর কাছে অবস্থানটি নিরাপদ পরিবর্তন থেকে। সেটা তিনি খুলে বলেন: মৃত্যু থেকে নিরাপদ, আর সেখান থেকে বের করে দেওয়া থেকে নিরাপদ। তাঁর চিন্তা সেখানে থাকার সময়ের কষ্ট নিয়ে নয়, স্থায়িত্ব নিয়ে। থাকাটা কিছুতেই শেষ হবে না, আর কাউকে সরিয়েও দেওয়া হবে না।"
          },
          {
            "en": "Ibn Kathir gathers nearly everything into a single sentence: in the Hereafter, in the Garden, they are secure from death and from leaving, from every worry, grief, alarm, toil and weariness, from the Shaytan and his plotting, and from all other harms and calamities. Ma'arif al-Qur'an gives the principle behind the word: the best human dwelling is a dwelling secure from every kind of danger. The glosses differ in emphasis, the world's pains for at-Tabari, permanence for al-Baghawi, the Shaytan for Qatada, and they are best kept as they stand.",
            "bn": "ইবন কাসীর প্রায় সবকিছু এক বাক্যে জড়ো করেন: আখিরাতে, জান্নাতে, তারা নিরাপদ মৃত্যু থেকে আর বেরিয়ে যাওয়া থেকে। নিরাপদ সব দুশ্চিন্তা, দুঃখ, অস্থিরতা, পরিশ্রম আর ক্লান্তি থেকে। নিরাপদ শয়তান আর তার চক্রান্ত থেকে, আর বাকি সব বিপদ ও মুসিবত থেকে। মাআরিফুল কুরআন শব্দটির পেছনের মূলনীতি বলে: মানুষের সবচেয়ে ভালো আবাস সেটিই, যা সব রকমের বিপদ থেকে নিরাপদ। ব্যাখ্যাগুলোর জোর আলাদা জায়গায়। তাবারীর কাছে দুনিয়ার কষ্ট, বাগাভীর কাছে স্থায়িত্ব, কাতাদার কাছে শয়তান। সেগুলো যেমন আছে, তেমনই রাখা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hope, Not a Badge",
          "bn": "আশা, তকমা নয়"
        },
        "p": [
          {
            "en": "The verse describes two ends, as the texts describe them, and it licenses nothing against any living person or community. It does not let anyone place a neighbour, a rival or a whole people among those dragged in 44:47, and it does not let anyone pin the name muttaqin on himself or his group. The commentators define that name by deeds, obedience done and sins left, and they place its reward in the Hereafter. A believer reads this verse as a hope to work towards, not a verdict already handed down.",
            "bn": "আয়াতটি দুটি পরিণতির কথা বলে, তাফসীরগুলো যেভাবে বর্ণনা করেছে সেভাবেই। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। প্রতিবেশী, প্রতিপক্ষ বা গোটা কোনো জাতিকে ৪৪:৪৭ আয়াতের টেনে নেওয়া লোকদের দলে বসিয়ে দেওয়ার অধিকার এটি কাউকে দেয় না। আবার নিজের বা নিজের দলের গায়ে মুত্তাকী তকমা সেঁটে দেওয়ার অধিকারও দেয় না। তাফসীরকারেরা এ নামের সংজ্ঞা দেন আমল দিয়ে: আনুগত্য পালন, গুনাহ বর্জন। আর এর প্রতিদান রাখেন আখিরাতে। মুমিন এ আয়াত পড়েন এমন আশা হিসেবে, যার দিকে কাজ করে যেতে হয়। আগেই দেওয়া রায় হিসেবে নয়।"
          },
          {
            "en": "None of the commentaries consulted here attaches a hadith to this verse, so this article cites none. What the station contains is the work of the verses that follow: 44:52 names gardens and springs, and the passage runs on to 44:57, which calls it all a bounty from your Lord and the great attainment. This verse gives the frame before any of that detail arrives. Before the garden, the garment or the fruit, the first word about the muttaqin's place is that it is safe.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এ প্রবন্ধও কোনো হাদিস উদ্ধৃত করছে না। অবস্থানটির ভেতরে কী আছে, সে কাজ পরের আয়াতগুলোর। ৪৪:৫২ আয়াত নাম নেয় বাগান আর ঝরনার, আর বর্ণনা চলে ৪৪:৫৭ পর্যন্ত, যেখানে সবকিছুকে বলা হয় তোমার রবের অনুগ্রহ, মহা সাফল্য। সেসব খুঁটিনাটি আসার আগেই এ আয়াত কাঠামোটা দাঁড় করিয়ে দেয়। বাগান, পোশাক বা ফলের আগে মুত্তাকীদের জায়গা নিয়ে প্রথম কথা: সেটা নিরাপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Spending Our Fear Well",
          "bn": "ভয়টা ঠিক জায়গায় খরচ"
        },
        "p": [
          {
            "en": "At-Tabari's gloss holds a quiet observation about life here. What the muttaqin are made safe from is a list of things every person fears now: aches, illness, weariness, grief. The verse does not pretend these are absent here. It promises that there is a station where they end, and Ibn Kathir and al-Baghawi add that nothing there ends: no death, no leaving. A great deal of human effort goes into guarding health, money, reputation and family, and none of these guards ever fully succeeds.",
            "bn": "তাবারীর ব্যাখ্যায় এ দুনিয়ার জীবন নিয়ে একটা চুপচাপ পর্যবেক্ষণ আছে। মুত্তাকীদের যেসব জিনিস থেকে নিরাপদ রাখা হবে, প্রত্যেক মানুষ আজই সেগুলোকে ভয় পায়: ব্যথা, অসুখ, ক্লান্তি, দুঃখ। আয়াত এমন ভান করে না যে দুনিয়ায় এসব নেই। বরং কথা দেয়, এমন এক স্থান আছে যেখানে এসব শেষ হয়ে যায়। আর ইবন কাসীর ও বাগাভী যোগ করেন, সেখানে কিছুই শেষ হয় না: মৃত্যু নেই, বেরিয়ে যাওয়াও নেই। স্বাস্থ্য, টাকা, সুনাম আর পরিবার আগলে রাখতে মানুষ কত চেষ্টা করে। অথচ সেই পাহারা কখনো পুরোপুরি সফল হয় না।"
          },
          {
            "en": "The verse redirects that effort. The commentators' definitions all turn on the same idea: the muttaqin guarded themselves before Allah by obeying Him and leaving what He forbade. That is fear too, but fear spent where it buys something lasting. A person cannot make his house secure from death, but he can leave a sin today, keep a prayer on time, pay back what he owes. As-Sa'di's line marks the exchange: those who guarded against His displeasure find His good pleasure established for them.",
            "bn": "আয়াতটি সেই চেষ্টার দিক ঘুরিয়ে দেয়। তাফসীরকারদের সংজ্ঞাগুলো সবই একই কথায় এসে মেলে: মুত্তাকীরা আল্লাহর আনুগত্য করেছে, তাঁর নিষেধ করা জিনিস ছেড়ে দিয়েছে, আর এভাবে আল্লাহর সামনে নিজেদের রক্ষা করেছে। এ-ও ভয়, তবে এ ভয় খরচ হয় এমন জায়গায়, যেখান থেকে স্থায়ী কিছু মেলে। মানুষ নিজের ঘরকে মৃত্যু থেকে নিরাপদ করতে পারে না। কিন্তু আজ একটা গুনাহ ছাড়তে পারে, সময়মতো নামাজ পড়তে পারে, যা দেনা আছে তা শোধ করতে পারে। সা'দীর কথায় এই বিনিময়টা স্পষ্ট: যারা তাঁর অসন্তুষ্টি থেকে বেঁচে থেকেছে, তাদের জন্য সাব্যস্ত হয় তাঁর সন্তুষ্টি।"
          },
          {
            "en": "So the verse asks a practical question of the reader. Where is my fear going? Into the things that cannot be kept, or into the taqwa that leads to a station no harm can reach? The sinner of the verses before was told what he used to doubt. The muttaqin are simply told where they are. Between those two verses sits the whole of a life, and the choice of which sentence will one day be spoken about it is still open while that life lasts.",
            "bn": "তাই আয়াতটি পাঠকের সামনে একটা কাজের প্রশ্ন রাখে। আমার ভয় কোথায় যাচ্ছে? যা ধরে রাখা যায় না সেসবের পেছনে, নাকি সেই তাকওয়ার পেছনে, যা এমন অবস্থানে নিয়ে যায় যেখানে কোনো বিপদ পৌঁছায় না? আগের আয়াতগুলোর পাপীকে বলা হয়েছিল, এ-ই তো সেই জিনিস যাতে তোমরা সন্দেহ করতে। মুত্তাকীদের শুধু জানানো হয়, তারা কোথায় আছে। এই দুই আয়াতের মাঝখানে পড়ে আছে একটা গোটা জীবন। একদিন সে জীবন নিয়ে কোন বাক্যটি বলা হবে, তা বেছে নেওয়ার সুযোগ জীবন থাকা পর্যন্ত খোলা।"
          }
        ]
      }
    ]
  },
  "44:53": {
    "sections": [
      {
        "h": {
          "en": "Over a Head, Then Upon Bodies",
          "bn": "এক মাথায় আগুন, বহু দেহে রেশম"
        },
        "p": [
          {
            "en": "The passage that holds this verse moves between two kinds of treatment of the body. In 44:48 the command is given about the sinner: pour over his head the torment of scalding water. In 44:49 he is told to taste it. Then 44:51 turns to the muttaqin, the people of taqwa, in a secure station, and 44:52 places them among gardens and springs. Only now, in 44:53, does the text come back to the body, and what it brings to the body this time is cloth.",
            "bn": "যে অংশে এ আয়াত, সেখানে দেহের সঙ্গে দুই রকম আচরণের কথা পাশাপাশি এসেছে। ৪৪:৪৮ আয়াতে পাপীর ব্যাপারে হুকুম হয়: তার মাথার উপর ফুটন্ত পানির শাস্তি ঢেলে দাও। ৪৪:৪৯ আয়াতে তাকে বলা হয়, স্বাদ নাও। তারপর ৪৪:৫১ আয়াত ফিরে আসে মুত্তাকীদের দিকে, যারা নিরাপদ এক অবস্থানে আছে, আর ৪৪:৫২ তাদের বসায় বাগান আর ঝরনার মাঝে। এবার ৪৪:৫৩ আয়াতে বর্ণনা আবার দেহের কাছে ফেরে। তবে এবার দেহের জন্য আসে কাপড়।"
          },
          {
            "en": "Ibn Kathir's English abridgement, which treats 44:51 to 44:59 together, calls the gardens and springs of 44:52 the direct opposite of what the doomed receive, the tree of zaqqum and the boiling water. The same pairing runs on into this verse. One head is drenched in heat; other bodies are wrapped in silk. The verse does not argue the case for taqwa in the abstract. It sets the two outcomes next to each other, a few lines apart, and leaves the listener to weigh them while there is still time to choose.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪৪:৫১ থেকে ৪৪:৫৯ একসঙ্গে আলোচনা করে। সেখানে ৪৪:৫২ আয়াতের বাগান আর ঝরনাকে বলা হয়েছে হতভাগাদের প্রাপ্যের ঠিক উল্টো ছবি, যাদের জন্য আছে যাক্কুম গাছ আর ফুটন্ত পানি। এ আয়াতেও সেই জোড়া ছবি চলতে থাকে। একটি মাথা ভিজছে আগুনগরম পানিতে, আর অন্য দেহগুলো জড়ানো রেশমে। তাকওয়ার পক্ষে আয়াতটি বিমূর্ত কোনো যুক্তি দেয় না। কয়েক লাইনের ব্যবধানে দুটি পরিণতি পাশাপাশি রেখে দেয়। ওজন করার ভার শ্রোতার উপর, আর বেছে নেওয়ার সময় এখনো ফুরিয়ে যায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Garment Left Unnamed",
          "bn": "যে পোশাকের নাম নেই"
        },
        "p": [
          {
            "en": "Yalbasuna min sundusin wa-istabraqin mutaqabilin: five words, and the first is a verb with no new subject. The people who wear are the muttaqin of 44:51, carried forward, and at-Tabari makes this explicit: these muttaqin wear, in these gardens, of sundus and istabraq. The reward does not float free. It belongs to those whom the passage has already named by their taqwa, and it is worn in the place the verse before has just described, among gardens and springs.",
            "bn": "ইয়ালবাসূনা মিন সুনদুসিন ওয়া ইসতাবরাকিন মুতাকাবিলীন: পাঁচটি শব্দ, আর প্রথমটি এমন এক ক্রিয়া যার নতুন কোনো কর্তা নেই। যারা পরবে, তারা ৪৪:৫১ আয়াতের সেই মুত্তাকীরাই। তাবারী কথাটা খুলে বলেন: এই মুত্তাকীরা এই বাগানগুলোতে সুনদুস আর ইসতাবরাক পরবে। পুরস্কারটা তাই হাওয়ায় ভাসছে না। এটা তাদেরই, যাদের পরিচয় এ অংশ আগেই তাকওয়া দিয়ে দিয়েছে। আর তারা এটা পরবে ঠিক সেই জায়গায়, যার বর্ণনা আগের আয়াতে এসেছে: বাগান আর ঝরনার মাঝে।"
          },
          {
            "en": "At-Tabari also notices what the sentence leaves out. It does not say they wear garments of silk; it says they wear of silk, naming the material and dropping the noun. He relays the view that the word libas, clothing, was left unsaid because the sense of the speech already makes it plain. Elsewhere the noun is spoken: in 18:31 they wear green garments, thiyaban khudran, of the same two cloths. Here the verse goes straight to the material, as though what matters most about the garment is what it is made of.",
            "bn": "বাক্যটা কী বাদ রেখেছে, তাবারী সেটাও লক্ষ করেন। আয়াত বলছে না যে তারা রেশমের পোশাক পরবে। বলছে, তারা রেশম থেকে পরবে। উপাদানের নাম আছে, পোশাক শব্দটা নেই। তাবারী একটি মত উদ্ধৃত করেন: লিবাস বা পোশাক শব্দটা উল্লেখ করা হয়নি, কারণ কথার ভেতর থেকেই অর্থটা পরিষ্কার। অন্য জায়গায় শব্দটা এসেছে। ১৮:৩১ আয়াতে তারা পরে এই দুই কাপড়েরই সবুজ পোশাক, সিয়াবান খুদরান। এখানে আয়াত সরাসরি উপাদানে চলে যায়। যেন পোশাকের আসল পরিচয় এটাই যে কী দিয়ে তা তৈরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Cloths, Two Descriptions",
          "bn": "দুই কাপড়, দুই রকম বর্ণনা"
        },
        "p": [
          {
            "en": "The commentators on this verse describe the two cloths in two ways. Most sort them by weight. At-Tabari says sundus is the thin of dibaj, brocade, and istabraq is the thick of it, and he gives a chain through Qatada to Ikrima that istabraq is thick brocade. Al-Qurtubi gives the same pair in nearly the same words and refers the reader back to his fuller treatment in Surat al-Kahf. The Muyassar says simply that they wear the thin of brocade and the thick of it, and Ma'arif al-Qur'an renders the two as fine silk and thick silk.",
            "bn": "এ আয়াতের তাফসীরকারেরা কাপড় দুটির বর্ণনা দেন দুইভাবে। বেশির ভাগ ভাগ করেন ওজন দিয়ে। তাবারী বলেন, সুনদুস হলো দিবাজ বা বুটিদার রেশমের পাতলা অংশ, আর ইসতাবরাক তার মোটা অংশ। কাতাদা হয়ে ইকরিমা পর্যন্ত এক সনদে তিনি আনেন যে ইসতাবরাক মানে মোটা দিবাজ। কুরতুবী প্রায় একই ভাষায় একই জোড়া দেন, আর বিস্তারিত আলোচনার জন্য পাঠককে ফিরিয়ে দেন সূরা কাহফে। মুয়াসসার সোজা কথায় বলে: তারা পরবে দিবাজের পাতলাটা আর মোটাটা। মাআরিফুল কুরআন দুটিকে বলে মিহি রেশম আর মোটা রেশম।"
          },
          {
            "en": "Ibn Kathir's Arabic text sorts them another way, by use and by look. Sundus, he says, is fine silk, rafi' al-harir, worn as shirts and the like. Istabraq is cloth with a sheen and a gleam to it, like finery, and what is worn over the top of other cloth. So in his reading the pair is not only thin and thick but inner and outer: the soft garment next to the body, and the bright one above it. The two accounts do not clash. They describe the same two cloths from different sides.",
            "bn": "ইবন কাসীরের আরবি তাফসীর ভাগ করে অন্যভাবে, ব্যবহার আর চেহারা দিয়ে। তাঁর মতে সুনদুস হলো মিহি রেশম, রাফীউল হারীর, যা দিয়ে জামা ও এ জাতীয় পোশাক হয়। ইসতাবরাক এমন কাপড়, যাতে ঝলক আর দীপ্তি আছে, যেমন জমকালো পোশাক, আর যা অন্য কাপড়ের উপরে পরা হয়। তাঁর পাঠে তাই জোড়াটা শুধু পাতলা আর মোটা নয়, ভেতরের আর বাইরের। একটা নরম পোশাক দেহের সঙ্গে লেগে থাকে, আর উজ্জ্বলটা থাকে তার উপরে। দুই বর্ণনায় কোনো বিরোধ নেই। একই দুই কাপড়কে দুই দিক থেকে দেখা হয়েছে।"
          },
          {
            "en": "As-Sa'di adds a further note. Their clothing, he writes, is green silk, of sundus and istabraq, the thick of silk and the fine of it, of what their souls desire. Green is not named in this verse, though it is in 18:31. The closing phrase is what to hold: the garments are measured not by a standard outside the wearer but by what the wearer longs for. The fuller discussion of the two words, and of why green, belongs to the article on 18:31, and is not repeated here.",
            "bn": "সা'দী এর সঙ্গে আরও কিছু যোগ করেন। তিনি লেখেন, তাদের পোশাক সবুজ রেশমের, সুনদুস আর ইসতাবরাকের, অর্থাৎ মোটা রেশম আর মিহি রেশম, যা তাদের মন চায় তা-ই। এ আয়াতে সবুজ রঙের উল্লেখ নেই, তবে ১৮:৩১ আয়াতে আছে। ধরে রাখার মতো কথা শেষ অংশটা। পোশাকের মাপকাঠি পরিধানকারীর বাইরের কোনো মান নয়, তার নিজের মনের চাওয়া। শব্দ দুটির বিস্তারিত আলোচনা আর সবুজ রঙের কারণ ১৮:৩১ আয়াতের প্রবন্ধে আছে, এখানে তার পুনরাবৃত্তি করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Shared by Two Tongues",
          "bn": "দুই ভাষার এক শব্দ"
        },
        "p": [
          {
            "en": "Al-Qurtubi's note on this verse ends by pointing back to al-Kahf, and there, on 18:31, he takes up where istabraq comes from. He lists several views. One he gives from al-Qutabi: the word is Persian, made Arabic, farisi mu'arrab. He cites al-Jawhari for its diminutive, ubayriq. Others, he says, take it as an Arabic form built on bariq, gleam. Then he states his own preference: the correct view is that it is a word on which the two languages agree, since there is nothing in the Qur'an that is not of the language of the Arabs.",
            "bn": "এ আয়াতে কুরতুবীর টীকা শেষ হয় সূরা কাহফের দিকে ইশারা করে। সেখানে, ১৮:৩১ আয়াতে, তিনি আলোচনা করেন ইসতাবরাক শব্দটা কোথা থেকে এসেছে। কয়েকটি মত তিনি তুলে ধরেন। কুতাবীর বরাতে একটি মত: শব্দটা ফারসি, আরবিতে রূপান্তরিত, ফারিসিয়্যুন মুআররাব। জাওহারীর বরাতে আনেন এর ক্ষুদ্রতাবাচক রূপ, উবাইরিক। কেউ কেউ, তিনি বলেন, একে বারীক অর্থাৎ ঝলক থেকে গড়া আরবি রূপ মনে করেন। তারপর নিজের পছন্দের মত জানান: সঠিক কথা হলো, এ শব্দে দুই ভাষা মিলে গেছে। কারণ কুরআনে এমন কিছু নেই যা আরবদের ভাষার নয়।"
          },
          {
            "en": "On 76:21 his text puts the Persian link more firmly. It rejects a reading that treated istabraq as an Arabic verb pattern from bariq, because the word is arabicised, its arabicisation is well known, and its original is istabrak. Both passages grant that the word lived outside Arabic, and 18:31 names the language as Persian. They differ in how they describe its place in Arabic: a borrowing, or a word both tongues share. Ibn Kathir, on this verse, uses the very word bariq in his gloss, cloth with a gleam, but says nothing about origin.",
            "bn": "৭৬:২১ আয়াতে তাঁর তাফসীর ফারসি যোগসূত্রটা আরও জোর দিয়ে বলে। এক কিরাআতে ইসতাবরাককে বারীক থেকে গড়া আরবি ক্রিয়ার ছাঁচ ধরা হয়েছিল। সেখানে সেই কিরাআতকে ভুল বলা হয়েছে, কারণ শব্দটা আরবিতে রূপান্তরিত, এর রূপান্তরের কথা সবার জানা, আর এর মূল রূপ ইসতাবরাক, শেষে আরবি কাফ (ك) দিয়ে। দুই জায়গার আলোচনাই মানে যে শব্দটা আরবির বাইরেও চালু ছিল, আর ১৮:৩১ আয়াতে ভাষাটির নাম বলা হয়েছে ফারসি। পার্থক্য আরবিতে তার অবস্থান বোঝানোয়: ধার করা শব্দ, নাকি দুই ভাষারই শব্দ। ইবন কাসীর এ আয়াতের ব্যাখ্যায় বারীক শব্দটাই ব্যবহার করেন, ঝলকওয়ালা কাপড়। তবে উৎস নিয়ে তিনি কিছু বলেন না।"
          },
          {
            "en": "For sundus, none of the texts consulted for this article says where the word comes from. At-Tabari and al-Qurtubi, on 18:31, give only its singular, sundusa, so its origin is left open here. Both of them, on 18:31, quote a line of Arabic verse that already speaks of women dressed in the istabraq of brocade, and at-Tabari names the poet as al-Muraqqish. The reward is described, then, in words the first hearers already used for fine cloth. They could picture it at once. As-Sa'di's phrase, of what their souls desire, keeps it from being confined to that picture.",
            "bn": "সুনদুস শব্দ কোথা থেকে এসেছে, এ প্রবন্ধে দেখা কোনো তাফসীরে তা বলা নেই। ১৮:৩১ আয়াতে তাবারী আর কুরতুবী শুধু এর একবচন রূপ দেন, সুনদুসা। তাই এর উৎসের প্রশ্ন এখানে খোলা রাখা হলো। ১৮:৩১ আয়াতে দুজনেই আরবি কবিতার একটি চরণ উদ্ধৃত করেন, যেখানে নারীদের দিবাজের ইসতাবরাক পরার কথা আছে। তাবারী কবির নাম বলেন মুরাক্কিশ। অর্থাৎ পুরস্কারের বর্ণনা এসেছে এমন শব্দে, যা প্রথম শ্রোতারা মিহি কাপড় বোঝাতে আগে থেকেই বলত। শুনেই তারা ছবিটা মনে আঁকতে পারত। আর সা'দীর কথা, যা তাদের মন চায়, ছবিটাকে সেই সীমায় আটকে থাকতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Back of a Neck",
          "bn": "কারও ঘাড়ের পেছন নয়"
        },
        "p": [
          {
            "en": "Then the last word, mutaqabilin, facing one another, and the verse turns from cloth to company. At-Tabari explains it: in the Garden they face one another with their faces, and none of them looks at the back of another's neck. He adds that he has already given the narrations on this earlier in his work. In his comment on 15:47, where the same word describes brothers on couches, he cites Mujahid by two chains: none of them looks at the back of his companion's neck. That, he says, is how the people of interpretation took it.",
            "bn": "তারপর শেষ শব্দ, মুতাকাবিলীন, পরস্পর মুখোমুখি। এখানে এসে আয়াত কাপড় থেকে সঙ্গের দিকে মোড় নেয়। তাবারীর ব্যাখ্যা: জান্নাতে তারা একে অপরের দিকে মুখ করে থাকবে, কেউ কারও ঘাড়ের পেছনে তাকাবে না। তিনি জানান, এ বিষয়ের বর্ণনাগুলো তিনি আগেই উল্লেখ করেছেন। ১৫:৪৭ আয়াতে একই শব্দে খাটের উপর ভাইদের বসার কথা আছে। সেখানে তিনি দুই সনদে মুজাহিদের কথা আনেন: তাদের কেউ নিজের সঙ্গীর ঘাড়ের পেছনে তাকাবে না। তাবারী বলেন, তাফসীরের আলিমরা এভাবেই বুঝেছেন।"
          },
          {
            "en": "Ibn Kathir seats them on couches and says none of them sits with his back to anyone else. The Muyassar and al-Qurtubi add a detail that carries the picture further: their sitting place turns with them wherever they turn. The rows of couches turned inward belong to the article on 52:20. What this verse adds is where the word stands. It comes straight after the garments, in the same short sentence. Clothing here is often worn to be seen from a distance, or to set one person apart. There, the very next word gathers the clothed into a circle of faces.",
            "bn": "ইবন কাসীর তাদের বসান খাটের উপর, আর বলেন, কেউ কারও দিকে পিঠ দিয়ে বসবে না। মুয়াসসার আর কুরতুবী আরেকটু যোগ করেন, যাতে ছবিটা আরও পরিষ্কার হয়: তারা যেদিকে ঘোরে, তাদের বসার জায়গাও সেদিকে ঘুরে যায়। খাটের সারি ভেতরের দিকে মুখ করে সাজানোর আলোচনা ৫২:২০ আয়াতের প্রবন্ধে আছে। এ আয়াত নতুন যা দেয়, তা শব্দটির অবস্থান। পোশাকের ঠিক পরেই, একই ছোট্ট বাক্যে শব্দটা এসেছে। দুনিয়ায় মানুষ প্রায়ই পোশাক পরে দূর থেকে চোখে পড়তে, কিংবা অন্যদের থেকে নিজেকে আলাদা দেখাতে। সেখানে পরের শব্দটাই পোশাক পরা মানুষগুলোকে মুখোমুখি এক বৃত্তে জড়ো করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Facing in the Heart",
          "bn": "অন্তরেও মুখোমুখি"
        },
        "p": [
          {
            "en": "As-Sa'di reads mutaqabilin at two levels. They face each other, he says, in their hearts and in their faces, in complete rest and calm, in love, in good companionship and in fine manners. The word is then about more than the angle of a seat. A person can sit face to face with someone and still be turned away inside, and can be turned towards someone in heart across a great distance. In the Garden, as as-Sa'di reads it, the two come together: the faces meet, and so do the hearts.",
            "bn": "সা'দী মুতাকাবিলীন শব্দটা পড়েন দুই স্তরে। তিনি বলেন, তারা মুখোমুখি থাকবে অন্তরেও, চেহারাতেও। পূর্ণ আরাম আর প্রশান্তিতে, ভালোবাসায়, সুন্দর সাহচর্যে আর উত্তম আদবে। শব্দটা তাহলে শুধু আসন কোন দিকে ঘোরানো তার কথা নয়। মানুষ কারও সামনাসামনি বসেও ভেতরে ভেতরে মুখ ফিরিয়ে রাখতে পারে। আবার অনেক দূরে থেকেও অন্তর দিয়ে কারও দিকে ফিরে থাকতে পারে। সা'দীর পাঠে জান্নাতে এ দুটো এক হয়ে যায়। চেহারা মুখোমুখি হয়, অন্তরও।"
          },
          {
            "en": "The Qur'an joins the same word to that inner state elsewhere. In 15:47 Allah speaks of removing whatever rancour is in their breasts, so that they are brothers on couches, facing each other. Many people carry into old age a quarrel they could not mend, a brother they no longer speak to, a friend lost over something small. The verses do not pretend such wounds are light. They promise that the people of taqwa will sit facing each other with nothing left between them, and that is a hope worth beginning to live towards here.",
            "bn": "কুরআন অন্য জায়গায়ও এই শব্দকে অন্তরের এই অবস্থার সঙ্গে জুড়ে দিয়েছে। ১৫:৪৭ আয়াতে আল্লাহ জানান, তাদের বুকের ভেতর যে বিদ্বেষ ছিল তা তিনি বের করে দিয়েছেন, আর তারা ভাই ভাই হয়ে খাটের উপর মুখোমুখি বসে আছে। অনেকে বুড়ো বয়স পর্যন্ত বয়ে বেড়ায় এমন ঝগড়া, যা মেটানো যায়নি। এমন ভাই, যার সঙ্গে আর কথা হয় না। এমন বন্ধু, যাকে হারিয়েছে তুচ্ছ কোনো কারণে। এই ক্ষতগুলোকে আয়াতগুলো হালকা বলে না। তবে কথা দেয়, তাকওয়ার মানুষেরা মাঝখানে কিছু না রেখে মুখোমুখি বসবে। সেই আশার দিকে এখান থেকেই হাঁটা শুরু করা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Held Back Now",
          "bn": "এখন যা তুলে রাখা"
        },
        "p": [
          {
            "en": "None of the commentaries consulted on this verse attaches a hadith to it. There is, though, a general narration on silk that bears on the promise. In Sahih al-Bukhari (5832), Anas ibn Malik (RA) reports that the Prophet ﷺ said: \"Whoever wears silk in this world shall not wear it in the Hereafter.\" Al-Bukhari gives it again (5833) through Ibn az-Zubayr, who said it in a sermon. Both are in his Sahih. None of these commentators ties the narration to this verse; it is cited here as a general word.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেয়নি। তবে রেশম নিয়ে একটি সাধারণ বর্ণনা আছে, যা এই প্রতিশ্রুতির সঙ্গে সম্পর্ক রাখে। সহীহ বুখারীতে (৫৮৩২) আনাস ইবন মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: \"যে দুনিয়ায় রেশম পরবে, সে আখিরাতে তা পরবে না।\" বুখারী একই কথা আবার আনেন (৫৮৩৩) ইবনুয যুবাইরের সূত্রে, যিনি এক খুতবায় কথাটি বলছিলেন। দুটিই তাঁর সহীহ গ্রন্থে আছে। এই তাফসীরকারদের কেউ বর্ণনাটিকে এ আয়াতের সঙ্গে যুক্ত করেননি। এখানে তা আনা হলো একটি সাধারণ বাণী হিসেবে।"
          },
          {
            "en": "This article gives no legal ruling. Whom the narration covers, and what the jurists say around it, is the work of fiqh, and the article on 22:23 has already looked at the silk that is withheld here and given there. What concerns this verse is the shape of the promise. Read beside that narration, it frames what a believer leaves for Allah's sake not as lost, but as kept. The verses before it, about the sinner seized and scalded, describe what the texts describe. They license nothing against any living person or community.",
            "bn": "এ প্রবন্ধ কোনো ফিকহি বিধান দিচ্ছে না। বর্ণনাটি কাদের জন্য, আর ফকীহরা এর আশপাশে কী বলেছেন, সেটা ফিকহের কাজ। দুনিয়ায় যে রেশম আটকে রাখা হয় আর ওখানে দেওয়া হয়, তা নিয়ে ২২:২৩ আয়াতের প্রবন্ধে আগেই আলোচনা হয়েছে। এ আয়াতের বিষয় প্রতিশ্রুতির ধরনটা। বর্ণনাটির পাশে রেখে পড়লে আয়াতটি বোঝায়, আল্লাহর জন্য মুমিন যা ছেড়ে দেয় তা হারায় না, জমা থাকে। আগের আয়াতগুলোতে যে পাপীকে ধরে টেনে নিয়ে মাথায় ফুটন্ত পানি ঢালা হয়, সেগুলো কেবল তা-ই বলে যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে সেগুলো কোনো অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Clothed by His Bounty",
          "bn": "তাঁর অনুগ্রহের পোশাক"
        },
        "p": [
          {
            "en": "The passage gives its own verdict on all of this in 44:57: a bounty from your Lord, and that is the great attainment. Ibn Kathir's abridgement explains that it will come from His bounty and kindness towards them. The silk, the springs and the faces turned inward are not wages paid at a market rate. They are a gift, and that is why no one need despair of them. A person who has fallen short can still hope to be clothed, because He who clothes gives out of bounty.",
            "bn": "এ সবকিছুর ব্যাপারে অংশটি নিজেই রায় দেয় ৪৪:৫৭ আয়াতে: তোমার রবের অনুগ্রহ, আর এটাই মহা সাফল্য। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ব্যাখ্যা করে, এসব আসবে তাদের প্রতি তাঁর অনুগ্রহ আর দয়া থেকে। রেশম, ঝরনা, ভেতরের দিকে ফেরানো মুখগুলো বাজারদরে চুকিয়ে দেওয়া মজুরি নয়। এগুলো উপহার। তাই এ নিয়ে কারও নিরাশ হওয়ার কারণ নেই। যে মানুষ ঘাটতি রেখে ফেলেছে, সেও এই পোশাকের আশা করতে পারে। কারণ যিনি পরান, তিনি দেন অনুগ্রহ থেকে।"
          },
          {
            "en": "So the verse leaves two tasks for today. One is taqwa, the quality 44:51 named, and the trust that nothing let go for Allah's sake is wasted. The other is the turning of faces. If the Garden is a gathering where no one sees another's back, a person who hopes for it can begin by turning towards someone he has turned away from: a parent, a brother, a neighbour, an old friend. A few verses on, 44:58 says the Qur'an was made easy so that people might take heed. The heeding is for now.",
            "bn": "আয়াতটি তাই আজকের জন্য দুটি কাজ রেখে যায়। একটি তাকওয়া, যার কথা ৪৪:৫১ আয়াতে এসেছে। সঙ্গে এই ভরসা যে আল্লাহর জন্য যা ছাড়া হয়, তার কিছুই বৃথা যায় না। অন্যটি মুখ ফেরানো। জান্নাত যদি এমন মজলিস হয় যেখানে কেউ কারও পিঠ দেখে না, তবে যে তার আশা করে, সে শুরু করতে পারে এমন কারও দিকে মুখ ফিরিয়ে, যার দিক থেকে সে মুখ ঘুরিয়ে রেখেছে। হতে পারে মা-বাবা, ভাই, প্রতিবেশী বা পুরোনো কোনো বন্ধু। কয়েক আয়াত পরে ৪৪:৫৮ বলে, কুরআনকে সহজ করা হয়েছে যাতে মানুষ উপদেশ নেয়। উপদেশ নেওয়ার সময় এখনই।"
          }
        ]
      }
    ]
  },
  "44:58": {
    "sections": [
      {
        "h": {
          "en": "Two Verses From the End",
          "bn": "শেষের আগে দুই আয়াত"
        },
        "p": [
          {
            "en": "Surah ad-Dukhan has spent its last verses on the God-conscious: a station that is safe (44:51), gardens and springs, silk and brocade, every fruit called for in security, no death there after the first, and protection from the punishment of the Fire. Then 44:57 seals the picture: a bounty from your Lord, that is the great attainment. With only two verses left, the address changes direction. Fa-innama yassarnahu bi-lisanika la'allahum yatadhakkarun: and We have only made it easy in your tongue, that they might take heed.",
            "bn": "সূরা দুখানের শেষ দিকের আয়াতগুলো মুত্তাকীদের নিয়ে। তাদের জন্য নিরাপদ স্থান (৪৪:৫১), বাগান আর ঝরনা, পাতলা ও পুরু রেশম, নিশ্চিন্তে চেয়ে নেওয়া সব রকম ফল। প্রথম মৃত্যুর পর সেখানে আর মৃত্যু নেই, আর আগুনের শাস্তি থেকে তারা রক্ষা পাবে। তারপর ৪৪:৫৭ ছবিটা শেষ করে: তোমার রবের অনুগ্রহ হিসেবে, এটাই মহা সাফল্য। সূরার আর মাত্র দুটি আয়াত বাকি, আর ঠিক এখানে কথার দিক বদলে যায়। ফাইন্নামা ইয়াসসারনাহু বিলিসানিকা লাআল্লাহুম ইয়াতাযাক্কারূন: আমি একে তোমার ভাষায় সহজ করে দিয়েছি, যাতে তারা উপদেশ গ্রহণ করে।"
          },
          {
            "en": "The verse is five words in Arabic, and it no longer describes the Garden or the Fire. It speaks about the Book that carried those descriptions and about the one through whom it came, addressed as you; at-Tabari reads the address as Allah speaking to His Prophet Muhammad ﷺ. After it, a single verse remains before the surah closes. This article stays with the five words: what each commentator consulted for this verse says they mean, and where those readings meet and where they part.",
            "bn": "আরবিতে আয়াতটি মাত্র পাঁচ শব্দের। এখানে আর জান্নাত বা জাহান্নামের বর্ণনা নেই। কথা হচ্ছে সেই কিতাব নিয়ে, যা এসব বর্ণনা বয়ে এনেছে, আর তাঁকে নিয়ে, যাঁর মাধ্যমে কিতাবটি এসেছে। তাঁকে ডাকা হয়েছে 'তুমি' বলে। তাবারী বলেন, এখানে আল্লাহ কথা বলছেন তাঁর নবী মুহাম্মাদ ﷺ-এর সঙ্গে। এরপর সূরা শেষ হওয়ার আগে বাকি থাকে আর মাত্র একটি আয়াত। এ লেখা ওই পাঁচটি শব্দ নিয়েই: এ আয়াতের জন্য সংগৃহীত প্রতিটি তাফসীর শব্দগুলোর কী অর্থ বলে, কোথায় তাঁদের ব্যাখ্যা মেলে আর কোথায় আলাদা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pronoun Left Unnamed",
          "bn": "যার নাম নেওয়া হয়নি"
        },
        "p": [
          {
            "en": "Yassarnahu: We made it easy. The verb carries an attached pronoun, it, and nothing in the verses just before names what it is. The commentators all supply the same answer. Qatada, in the report at-Tabari gives with its chain, says: this Qur'an. Ibn Zayd, in another report in the same place, says simply: the Qur'an. As-Sa'di glosses the pronoun as the Qur'an, al-Qurtubi opens with the words yassarnahu, meaning the Qur'an, and the Muyassar and Ibn Kathir name the Qur'an outright in their paraphrase.",
            "bn": "ইয়াসসারনাহু: আমি একে সহজ করেছি। ক্রিয়ার সঙ্গে লেগে আছে 'একে' অর্থের ছোট্ট একটি শব্দ, অথচ ঠিক আগের আয়াতগুলোতে কোথাও বলা নেই সেটা কী। তাফসীরকারেরা সবাই একই উত্তর দেন। তাবারী সনদসহ কাতাদার যে বর্ণনা আনেন, তাতে আছে: এই কুরআন। একই জায়গায় ইবন যাইদের আরেক বর্ণনায় শুধু: কুরআন। সা'দীও বলেন, এখানে কুরআনের কথাই বলা হচ্ছে। কুরতুবী শুরুই করেন এই বলে যে ইয়াসসারনাহু মানে কুরআন। আর মুয়াসসার ও ইবন কাসীর নিজেদের ব্যাখ্যায় সরাসরি কুরআনের নাম নেন।"
          },
          {
            "en": "Two of them stop to name the feature itself. Al-Baghawi calls the pronoun kinaya 'an ghayri madhkur, an allusion to something not mentioned. Al-Qurtubi says that Allah closed the surah by urging people to follow the Qur'an even though it had not been mentioned. Neither of them treats this as a problem to be solved; both simply supply the referent and move on. The texts consulted here agree, then, on what was eased. Where they part is on what the easing consisted of, and on the phrase that follows, bi-lisanika.",
            "bn": "দুজন তাফসীরকার বিষয়টা আলাদা করে উল্লেখ করেন। বাগাভী বলেন, এটি কিনায়া আন গাইরি মাযকূর, অর্থাৎ যার উল্লেখ হয়নি তার দিকে ইঙ্গিত। কুরতুবী বলেন, কুরআনের উল্লেখ না থাকলেও আল্লাহ সূরাটি শেষ করেছেন কুরআন অনুসরণের তাগিদ দিয়ে। তাঁদের কেউই একে সমাধান করার মতো কোনো সমস্যা ভাবেননি। দুজনেই শুধু বলে দিয়েছেন ইঙ্গিতটা কার দিকে, তারপর এগিয়ে গেছেন। কী সহজ করা হয়েছে, সে ব্যাপারে তাই সংগৃহীত সব তাফসীর একমত। মতের পার্থক্য দেখা দেয় অন্য দুই জায়গায়: সহজ করাটা আসলে কী, আর পরের শব্দ বিলিসানিকার অর্থ কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Eased for Reading, or More",
          "bn": "সহজ শুধু পাঠে, নাকি আরও"
        },
        "p": [
          {
            "en": "At-Tabari's paraphrase makes the ease a matter of recitation. Allah, he says, is telling His Prophet Muhammad ﷺ: We have only made easy the reading of this Qur'an, which We sent down to you, by your tongue. The purpose follows at length: so that these idolaters to whom We sent you may remember its lessons and proofs, be admonished by its admonitions and reflect on its verses when you recite it to them, then turn back to obedience to their Lord and yield to the truth once it is clear to them.",
            "bn": "তাবারীর ব্যাখ্যায় সহজ করার বিষয়টা তিলাওয়াতের সঙ্গে যুক্ত। তাঁর ভাষায় আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: তোমার উপর যে কুরআন নাজিল করেছি, তোমার জিহ্বায় আমি তার পাঠ সহজ করে দিয়েছি। এরপর উদ্দেশ্যটা তিনি বিস্তারিত বলেন। যে মুশরিকদের কাছে তোমাকে পাঠিয়েছি, তুমি যখন তাদের সামনে এটা তিলাওয়াত করবে, তারা যেন এর শিক্ষা ও দলিলগুলো মনে রাখে, এর নসিহত শুনে সতর্ক হয়, এর আয়াত নিয়ে ভাবে। তারপর যেন রবের আনুগত্যে ফিরে আসে, আর সত্য স্পষ্ট হলে তা মেনে নেয়।"
          },
          {
            "en": "The report he carries from Ibn Zayd points the same way, toward the tongue that recites. Ibn Zayd says of yassarnahu: atlaqa bihi lisanahu, He set his tongue free with it. At-Tabari places the report after Qatada's without adding a comment of his own. On this reading the ease is first an ease of delivery: the words came readily to the one who was charged with reciting them to his people, and the remembering was to follow from their hearing.",
            "bn": "ইবন যাইদ থেকে তাবারী যে বর্ণনা আনেন, সেটাও একই দিকে ইশারা করে, অর্থাৎ যে জিহ্বা তিলাওয়াত করে তার দিকে। ইয়াসসারনাহু সম্পর্কে ইবন যাইদ বলেন: আতলাকা বিহী লিসানাহু, এর দ্বারা তিনি তাঁর জিহ্বা খুলে দিয়েছেন। কাতাদার বর্ণনার পরে তাবারী এটা রেখেছেন, নিজের কোনো মন্তব্য যোগ করেননি। এ পাঠ অনুযায়ী সহজ করাটা প্রথমত পৌঁছে দেওয়ার সহজতা। যাঁর দায়িত্ব ছিল নিজের লোকদের সামনে তিলাওয়াত করা, শব্দগুলো তাঁর মুখে অনায়াসে এসেছে। আর শ্রোতারা শুনে উপদেশ নেবে, সেটা আসার কথা তার পরে।"
          },
          {
            "en": "Other texts widen the ease beyond recitation. The Muyassar says: We made easy the wording of the Qur'an and its meaning in your language, O Messenger. As-Sa'di has the same pair: through your tongue its wording became easy and its meaning became easy. Al-Qurtubi places the ease on two kinds of person: We made it easy in your language, for you and for whoever reads it. Ibn Kathir gives a run of words instead: made easy, plain, clear and evident. None of the texts consulted here argues against another here; each names where it places the ease.",
            "bn": "অন্য তাফসীরগুলো সহজতাকে তিলাওয়াতের বাইরেও ছড়িয়ে দেয়। মুয়াসসার বলে: হে রাসূল, তোমার ভাষায় আমি কুরআনের শব্দ ও অর্থ দুটোই সহজ করে দিয়েছি। সা'দীর কাছেও একই জোড়া: তোমার জিহ্বার মাধ্যমে এর শব্দ সহজ হয়েছে, এর অর্থও সহজ হয়েছে। কুরতুবী সহজতাকে দুই রকম মানুষের সঙ্গে জোড়েন: তোমার ভাষায় একে সহজ করেছি, তোমার জন্য আর যে-ই এটা পড়ে তার জন্য। ইবন কাসীর কয়েকটি শব্দ পরপর বসান: সহজ, সরল, স্পষ্ট, পরিষ্কার। এখানে সংগৃহীত কোনো তাফসীর অন্যটির বিরোধিতা করে না। প্রত্যেকে শুধু বলে দেয়, সহজতাটা সে কোথায় দেখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongue or Language",
          "bn": "জিহ্বা, নাকি ভাষা"
        },
        "p": [
          {
            "en": "The texts consulted here use the word lisan in both of its senses. Al-Baghawi glosses bi-lisanika as 'ala lisanika, on your tongue, which sits well with at-Tabari's recitation and Ibn Zayd's freed tongue. The Muyassar and al-Qurtubi both replace lisan with lugha: bi-lughatika, in your language. In their wording the point is the language the Qur'an came in rather than the act of reciting it, and al-Qurtubi's for you and for whoever reads it carries the ease past the Prophet ﷺ to every reader.",
            "bn": "সংগৃহীত তাফসীরগুলোতে লিসান শব্দটা দুই অর্থেই এসেছে। বাগাভী বিলিসানিকার ব্যাখ্যা করেন আলা লিসানিকা দিয়ে, অর্থাৎ তোমার জিহ্বায়। এটা তাবারীর তিলাওয়াতের ব্যাখ্যা আর ইবন যাইদের খুলে দেওয়া জিহ্বার সঙ্গে মিলে যায়। মুয়াসসার আর কুরতুবী দুজনেই লিসানের জায়গায় বসান লুগা: বিলুগাতিকা, তোমার ভাষায়। তাঁদের কথায় গুরুত্ব পায় কুরআন কোন ভাষায় এসেছে সেটা, পাঠ করার কাজটা নয়। আর কুরতুবী যখন বলেন 'তোমার জন্য আর যে-ই পড়ে তার জন্য', তখন সহজতা নবী ﷺ-কে ছাড়িয়ে প্রত্যেক পাঠক পর্যন্ত পৌঁছে যায়।"
          },
          {
            "en": "Ibn Kathir and as-Sa'di take the language reading and add a praise of the language itself. Ibn Kathir calls the Prophet's ﷺ tongue the most eloquent of languages, the clearest, the sweetest and the highest. As-Sa'di calls it the most eloquent of tongues without qualification, and the most majestic. In the English abridgement of Ibn Kathir the sentence becomes: in your language, which is the most eloquent, clear and beautiful of all languages. Both tie the ease to the quality of the language in which the Book was given.",
            "bn": "ইবন কাসীর আর সা'দী ভাষার অর্থটাই নেন, সঙ্গে সে ভাষার প্রশংসাও করেন। ইবন কাসীর নবী ﷺ-এর ভাষাকে বলেন সব ভাষার মধ্যে সবচেয়ে বিশুদ্ধ, সবচেয়ে স্পষ্ট, সবচেয়ে মধুর আর সবচেয়ে উঁচু। সা'দী বলেন, এটা নিঃশর্তভাবে সবচেয়ে বিশুদ্ধ ভাষা, আর সবচেয়ে মর্যাদাপূর্ণ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটা দাঁড়ায় এমন: তোমার ভাষায়, যা সব ভাষার মধ্যে সবচেয়ে বিশুদ্ধ, স্পষ্ট ও সুন্দর। দুজনেই সহজতাকে জুড়ে দেন সেই ভাষার গুণের সঙ্গে, যে ভাষায় কিতাবটি দেওয়া হয়েছে।"
          },
          {
            "en": "Placed side by side, the two readings answer slightly different questions. On the tongue reading of al-Baghawi, at-Tabari and Ibn Zayd, the ease concerns how the Book reached its hearers: recited readily by the Messenger sent to them. On the language reading of the Muyassar, al-Qurtubi, as-Sa'di and Ibn Kathir, it concerns what the hearers met when it reached them: wording and meaning made easy, in Ibn Kathir's words so that they might understand. No text consulted here rules the other reading out.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে দেখা যায়, তারা একটু আলাদা প্রশ্নের উত্তর দিচ্ছে। বাগাভী, তাবারী আর ইবন যাইদের জিহ্বা-কেন্দ্রিক পাঠে প্রশ্ন হলো, কিতাব শ্রোতাদের কাছে পৌঁছাল কীভাবে। উত্তর: যাঁকে তাদের কাছে পাঠানো হয়েছে, তাঁর মুখে অনায়াস তিলাওয়াতে। মুয়াসসার, কুরতুবী, সা'দী আর ইবন কাসীরের ভাষা-কেন্দ্রিক পাঠে প্রশ্ন হলো, পৌঁছানোর পর শ্রোতারা কী পেল। উত্তর: সহজ করে দেওয়া শব্দ আর অর্থ, ইবন কাসীরের ভাষায় যাতে তারা বুঝতে পারে। সংগৃহীত কোনো তাফসীর এখানে অন্য ব্যাখ্যাটাকে বাতিল করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Taking Heed Involves",
          "bn": "উপদেশ নেওয়ার ভেতরে কী আছে"
        },
        "p": [
          {
            "en": "La'allahum yatadhakkarun: that they might remember, or take heed. The commentators fill the verb with different content. Al-Baghawi gives one word: yatta'izun, they take admonition. Al-Qurtubi and the Muyassar give the same two: yatta'izun wa-yanzajirun, they take admonition and they are held back. The second word adds restraint to the first. On their reading, the remembering the verse hopes for is not only a thought that arrives but also a check on what a person had been doing before it arrived.",
            "bn": "লাআল্লাহুম ইয়াতাযাক্কারূন: যাতে তারা স্মরণ করে, উপদেশ গ্রহণ করে। তাফসীরকারেরা এ ক্রিয়ার ভেতরে ভিন্ন ভিন্ন কথা রাখেন। বাগাভী দেন একটিমাত্র শব্দ: ইয়াত্তাইযূন, তারা উপদেশ নেয়। কুরতুবী আর মুয়াসসার দেন একই দুটি শব্দ: ইয়াত্তাইযূন ওয়া ইয়ানযাজিরূন, তারা উপদেশ নেয় এবং বিরত থাকে। দ্বিতীয় শব্দটা প্রথমটার সঙ্গে সংযম যোগ করে। তাঁদের ব্যাখ্যায় আয়াত যে স্মরণ চায়, তা শুধু মনে আসা একটা ভাবনা নয়। মানুষ এতদিন যা করছিল, তাতে লাগাম টানাও এর অংশ।"
          },
          {
            "en": "Ibn Kathir's Arabic says yatafahhamun wa-ya'malun: they come to understand, and they act. The English abridgement renders the same clause as in order that they may understand and know, which keeps the understanding and loses the action. A reader of the English alone would miss that, in Ibn Kathir's Arabic, this remembering ends in deeds. As-Sa'di is the most practical of all: they remember what benefits them and do it, and what harms them and leave it.",
            "bn": "ইবন কাসীরের আরবি পাঠে আছে ইয়াতাফাহহামূন ওয়া ইয়া'মালূন: তারা বুঝবে, আর সে অনুযায়ী আমল করবে। ইংরেজি সংক্ষিপ্ত সংস্করণ একই অংশের অনুবাদ করেছে 'যাতে তারা বোঝে ও জানে'। তাতে বোঝাটা রয়ে গেছে, কিন্তু আমলটা হারিয়ে গেছে। শুধু ইংরেজি পড়লে পাঠক টেরই পাবেন না যে ইবন কাসীরের আরবিতে এই স্মরণ গিয়ে শেষ হয় কাজে। সা'দী সবচেয়ে বেশি হাতে-কলমে কথা বলেন: যা তাদের উপকার করে তা মনে রেখে করবে, আর যা ক্ষতি করে তা মনে রেখে ছেড়ে দেবে।"
          },
          {
            "en": "At-Tabari's account is the longest, a chain of steps: remember the Qur'an's lessons and proofs, be admonished by its admonitions, reflect on its verses as they are recited, turn back to obedience to their Lord, and submit to the truth once it is clear to them. In his reading, remembering begins at hearing and ends at yielding. None of the texts consulted here reduces the word to recalling something once known, and none stops at understanding without some return or change.",
            "bn": "সবচেয়ে লম্বা ব্যাখ্যা তাবারীর, ধাপে ধাপে সাজানো। কুরআনের শিক্ষা ও দলিল মনে রাখা, তার উপদেশ থেকে উপদেশ নেওয়া, তিলাওয়াতের সময় আয়াতগুলো নিয়ে ভাবা, রবের আনুগত্যে ফিরে আসা, আর সত্য স্পষ্ট হলে তার কাছে মাথা নত করা। তাঁর পাঠে স্মরণ শুরু হয় শোনা দিয়ে, শেষ হয় মেনে নেওয়ায়। সংগৃহীত কোনো তাফসীরই শব্দটাকে একসময় জানা কিছু আবার মনে পড়ার মধ্যে সীমিত রাখেনি। কোনোটিই শুধু বোঝাতেই থেমে যায়নি, প্রত্যেকটিতে কোনো না কোনো ফেরা বা বদলের কথা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Back, Looking Ahead",
          "bn": "পেছনে ফিরে, সামনে তাকিয়ে"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the one consulted commentator who ties this verse to the surah's start. He says Allah closed the surah by urging people to follow the Qur'an, as He said at its opening, We sent it down on a blessed night, and as He said elsewhere, We sent it down on the Night of Decree (97:1), pointing back to his earlier discussion. That opening verse, 44:3, has its own article here. Al-Qurtubi's point for this verse is only the frame: on his reading, the surah begins and ends with the Book.",
            "bn": "সংগৃহীত তাফসীরকারদের মধ্যে কুরতুবীই একমাত্র, যিনি এ আয়াতকে সূরার শুরুর সঙ্গে জোড়েন। তিনি বলেন, আল্লাহ সূরাটি শেষ করেছেন কুরআন অনুসরণের তাগিদ দিয়ে, যেমন সূরার শুরুতে বলেছেন: আমি একে নাজিল করেছি এক বরকতময় রাতে। আর অন্যত্র বলেছেন: আমি একে নাজিল করেছি কদরের রাতে (৯৭:১)। এ নিয়ে আগে যা বলেছেন, তিনি সেদিকে ইঙ্গিত করেন। শুরুর সেই আয়াত, ৪৪:৩, নিয়ে এখানে আলাদা লেখা আছে। এ আয়াতের বেলায় কুরতুবীর কথা শুধু কাঠামো নিয়ে: তাঁর পাঠে সূরার শুরুও কিতাব দিয়ে, শেষও কিতাব দিয়ে।"
          },
          {
            "en": "He also names a parallel, introducing it with wa-naziruhu, and its like is: and We have certainly made the Qur'an easy for remembrance, so is there anyone who will remember (54:17). That verse has its own article too. Ibn Kathir looks the other way, toward what follows. Despite this clarity, he says, some people disbelieved, opposed and were obstinate, so Allah addressed His Messenger ﷺ to console him, promise him victory and warn those who belied him of ruin, in the surah's last verse, 44:59.",
            "bn": "কুরতুবী এর মতো আরেকটি আয়াতের কথাও বলেন। শুরু করেন ওয়া নাযীরুহু বলে, অর্থাৎ এর মতোই আরেকটি আয়াত: আর আমি কুরআনকে উপদেশ গ্রহণের জন্য সহজ করে দিয়েছি, অতএব উপদেশ গ্রহণকারী কেউ আছে কি (৫৪:১৭)? সে আয়াত নিয়েও এখানে আলাদা লেখা আছে। ইবন কাসীর তাকান উল্টো দিকে, পরের আয়াতের দিকে। তিনি বলেন, এত স্পষ্টতার পরও কিছু মানুষ অস্বীকার করেছে, বিরোধিতা করেছে, হঠকারিতা দেখিয়েছে। তাই সূরার শেষ আয়াত ৪৪:৫৯-এ আল্লাহ রাসূল ﷺ-কে সান্ত্বনা দিয়েছেন, বিজয়ের প্রতিশ্রুতি দিয়েছেন, আর যারা তাঁকে মিথ্যাবাদী বলেছে তাদের ধ্বংসের ব্যাপারে সতর্ক করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones Meant by They",
          "bn": "'তারা' বলতে যাদের বোঝানো"
        },
        "p": [
          {
            "en": "The verse says they and does not name them. At-Tabari does: these idolaters, al-mushrikun, to whom We sent you. Ibn Kathir, in the sentence already quoted, describes some of the people as those who disbelieved, opposed and were obstinate despite the Book's clarity. These are the commentators' descriptions of the Prophet's ﷺ first audience. The verse speaks only of what it names, and it licenses nothing against any living person or community. The same verse, on al-Qurtubi's reading, extends the ease to whoever reads.",
            "bn": "আয়াতে আছে শুধু 'তারা', কারও নাম নেই। তাবারী নাম বলেন: যে মুশরিকদের কাছে তোমাকে পাঠিয়েছি, তারা। ইবন কাসীর, যাঁর কথা একটু আগেই এসেছে, কিছু মানুষের বর্ণনা দেন এভাবে: কিতাবের এত স্পষ্টতার পরও যারা অস্বীকার করেছে, বিরোধিতা করেছে, হঠকারিতা দেখিয়েছে। এগুলো নবী ﷺ-এর প্রথম শ্রোতাদের সম্পর্কে তাফসীরকারদের বর্ণনা। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটা দেয় না। আর কুরতুবীর পাঠে এই আয়াতই সহজতাকে বাড়িয়ে দেয় যে-কোনো পাঠক পর্যন্ত।"
          },
          {
            "en": "Two silences in the sources are worth recording. Ma'arif al-Qur'an, whose passage for this group of verses was consulted, comments on 44:56 and then closes the surah without a word on this verse. No tafsir consulted here attaches a hadith to this verse either; the narrations in Ibn Kathir's passage belong to the verses on death and bounty before it. No report on an occasion of revelation was found, so the verse is read here from its place in the surah and from what its commentators say.",
            "bn": "উৎসগুলোর দুটি নীরবতার কথাও লিখে রাখা দরকার। এ আয়াতগুচ্ছের জন্য মাআরিফুল কুরআনের যে অংশ সংগ্রহ করা হয়েছে, তা ৪৪:৫৬ নিয়ে আলোচনা করে সূরা শেষ করেছে, এ আয়াত নিয়ে একটি কথাও বলেনি। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিসও যুক্ত করেনি। ইবন কাসীরের এ অংশে যেসব বর্ণনা আছে, সেগুলো আগের আয়াতগুলোর, যেখানে মৃত্যু আর অনুগ্রহের কথা। নাজিলের প্রেক্ষাপট নিয়েও কোনো বর্ণনা পাওয়া যায়নি। তাই আয়াতটি এখানে পড়া হয়েছে সূরায় তার অবস্থান আর তাফসীরকারদের কথা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eased, and Still Open",
          "bn": "সহজ হয়েছে, বাকিটা খোলা"
        },
        "p": [
          {
            "en": "Read with its commentators, the verse sets out two parts. One is Allah's: the easing, whether of recitation, of wording and meaning, or of the tongue that carried it. That part is stated as done, in the past tense, We made it easy. The other part is left as a purpose, introduced by la'allahum, that they might. In at-Tabari's chain the hearer still has to reflect, return and yield, and in as-Sa'di's the hearer still has to do what helps and leave what harms.",
            "bn": "তাফসীরকারদের সঙ্গে মিলিয়ে পড়লে আয়াতে দুটি ভাগ চোখে পড়ে। একটা আল্লাহর: সহজ করে দেওয়া, সেটা তিলাওয়াতের হোক, শব্দ আর অর্থের হোক, কিংবা যে জিহ্বা কিতাব বয়ে এনেছে তার হোক। এ ভাগটা বলা হয়েছে সম্পন্ন কাজ হিসেবে: আমি সহজ করে দিয়েছি। অন্য ভাগটা রাখা হয়েছে উদ্দেশ্য হিসেবে, লাআল্লাহুম দিয়ে, যাতে তারা। তাবারীর ধাপগুলোতে শ্রোতাকে তখনো ভাবতে হয়, ফিরতে হয়, মেনে নিতে হয়। সা'দীর কথায় তাকে তখনো উপকারী কাজটা করতে হয়, আর ক্ষতিকর কাজটা ছাড়তে হয়।"
          },
          {
            "en": "That is where the verse meets a reader now. Almost every gloss the commentators give asks for movement: take admonition, be held back, understand and act, do and leave. Words that come easily to the tongue can still pass through a person without being taken up, and the verse places its hope not in the ease but in what follows it. Whatever has been made easy for us, the question it leaves is whether we will let it reach the place where we decide what to do.",
            "bn": "এখানেই আয়াতটি আজকের পাঠকের মুখোমুখি হয়। তাফসীরকারদের প্রায় প্রতিটি ব্যাখ্যাই কিছু একটা করতে বলে: উপদেশ নেওয়া, বিরত থাকা, বুঝে আমল করা, করা আর ছেড়ে দেওয়া। যে কথা সহজে জিহ্বায় আসে, তা-ও মানুষের ভেতর দিয়ে বেরিয়ে যেতে পারে, কোথাও দাগ না কেটে। তাই আয়াতের আশা সহজতায় নয়, সহজতার পরে যা আসে তাতে। আমাদের জন্য যা-ই সহজ করা হয়ে থাকুক, প্রশ্নটা থেকে যায়: যেখানে আমরা ঠিক করি কী করব, সেই জায়গা পর্যন্ত কি তাকে পৌঁছাতে দেব?"
          }
        ]
      }
    ]
  }
});
