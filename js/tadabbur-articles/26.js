/**
 * Tadabbur long-form articles — surah 26.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "26:1": {
    "sections": [
      {
        "h": {
          "en": "A Verse of Three Letters",
          "bn": "তিন হরফের এক আয়াত"
        },
        "p": [
          {
            "en": "The first verse of Sūrat ash-Shuʿarāʾ is written and recited as three letters standing alone: Ṭā, Sīn, Mīm. It is not a word or a sentence you can translate; it is the naming of three of the letters of the alphabet, sounded out one by one. Some 29 sūrahs of the Qur'an open this way, with letters the commentators call the ḥurūf muqaṭṭaʿāt, the disconnected letters. Ibn Kathir begins his comment on this verse by noting that the scholars have long differed over these openings, and that the difference is old and honestly held.",
            "bn": "সূরা আশ-শুআরার প্রথম আয়াতটি লেখা ও তিলাওয়াত হয় আলাদা করে দাঁড়ানো তিনটি হরফ হিসেবে: ত্ব, সীন, মীম। এটি কোনো শব্দ বা বাক্য নয় যার অনুবাদ করা যায়, বরং বর্ণমালার তিনটি হরফের নাম, একটি একটি করে উচ্চারিত। কুরআনের ২৯টি সূরা এভাবেই শুরু হয়, যে হরফগুলোকে তাফসীরকারেরা বলেন হুরুফে মুকাত্তাআত, বিচ্ছিন্ন হরফ। ইবন কাসীর এ আয়াতের আলোচনা শুরুই করেন এ কথা বলে যে, এই সূচনাগুলো নিয়ে আলিমদের মধ্যে বহু আগে থেকেই মতভেদ আছে, আর সে মতভেদ পুরনো ও সৎভাবে ধরে রাখা।"
          },
          {
            "en": "Al-Muyassar, the plainest of the tafsirs, says only that the discussion of the disconnected letters was already given at the start of Sūrat al-Baqara, and moves on. That restraint is itself a lesson. The verse invites two very different responses. One reaches at once for a decoding, a hidden message under the letters. The other pauses, weighs what can honestly be known, and is willing to leave a thing with the One who sent it down. This article follows the second road, because it is the one the earliest readers of the Book walked.",
            "bn": "তাফসীরগুলোর মধ্যে সবচেয়ে সাদামাটা মুয়াসসার শুধু বলে, বিচ্ছিন্ন হরফ নিয়ে আলোচনা সূরা বাকারার শুরুতেই দেওয়া হয়েছে, এরপর আর দাঁড়ায় না। এই সংযমটাই একটা শিক্ষা। আয়াতটি দুটি একেবারে ভিন্ন সাড়ার ডাক দেয়। একটি সঙ্গে সঙ্গে হরফের নিচে লুকানো কোনো গোপন বার্তার খোঁজে হাত বাড়ায়। অন্যটি থামে, সৎভাবে কী জানা সম্ভব তা মাপে, আর জিনিসটাকে যিনি নাজিল করেছেন তাঁর কাছে রেখে দিতে রাজি থাকে। এই লেখা দ্বিতীয় পথটাই ধরে, কারণ কিতাবের প্রথম যুগের পাঠকেরা এ পথেই হেঁটেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Companions Stopped",
          "bn": "সাহাবিরা যেখানে থেমেছেন"
        },
        "p": [
          {
            "en": "As-Saʿdi states the safest position in a single sentence. On the disconnected letters at the openings of the sūrahs, he writes, the soundest course is to refrain from asserting a meaning for them without a legal proof, while holding with certainty that Allah did not send them down in vain, but for a wisdom we do not know. That is the whole of it: not that there is no meaning, but that the meaning is real and it is His. Certainty about God's purpose, and silence about its content.",
            "bn": "সবচেয়ে নিরাপদ অবস্থানটি সাদী এক বাক্যে বলে দেন। সূরার শুরুর বিচ্ছিন্ন হরফ সম্পর্কে তিনি লেখেন, শরিয়তের দলিল ছাড়া এগুলোর অর্থ নির্ধারণ থেকে বিরত থাকাই সবচেয়ে নিরাপদ, তবে এ ব্যাপারে নিশ্চিত থাকতে হবে যে আল্লাহ এগুলো অনর্থক নাজিল করেননি, বরং এমন এক হিকমতের জন্য যা আমরা জানি না। মূল কথা এটুকুই: অর্থ নেই তা নয়, বরং অর্থ সত্যিকারের আছে আর তা তাঁরই কাছে। আল্লাহর উদ্দেশ্য নিয়ে নিশ্চয়তা, আর তার বিষয়বস্তু নিয়ে নীরবতা।"
          },
          {
            "en": "Ibn Kathir reports that this was the road of the first and greatest. He relates from al-Qurtubi that the meaning of these letters was referred back to Allah's knowledge, and not interpreted, by Abu Bakr, ʿUmar, ʿUthmān, ʿAlī and Ibn Masʿūd (may Allah be pleased with them), and that ʿĀmir ash-Shaʿbī, Sufyān ath-Thawrī and ar-Rabīʿ ibn Khuthaym said the same. Al-Baghawī adds a report through ʿIkrima from Ibn ʿAbbās that the scholars were unable to interpret these letters. Naming that company is not an excuse for laziness; it is a discipline.",
            "bn": "ইবন কাসীর জানান, এটাই ছিল প্রথম যুগের বড় বড় মানুষের পথ। তিনি কুরতুবী থেকে বর্ণনা করেন যে এই হরফের অর্থ আল্লাহর জ্ঞানের কাছে সঁপে দিয়ে তাফসীর না করেই ছেড়ে দিয়েছেন আবু বকর, উমর, উসমান, আলী ও ইবন মাসউদ (রাঃ), আর একই কথা বলেছেন শাবী, সুফইয়ান সাওরী ও রাবী ইবন খুসাইম। বাগাভী ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে যোগ করেন যে আলিমরা এই হরফের তাফসীর করতে অক্ষম হয়েছেন। এত বড় দলের নাম নেওয়া অলসতার অজুহাত নয়, বরং একটা অনুশাসন।"
          },
          {
            "en": "This places the muqaṭṭaʿāt among the mutashābihāt, the verses whose full meaning is left with God. Ibn Kathir gathers the whole matter into one posture: there is no doubt Allah did not reveal these letters in vain, so they carry a meaning; if something authentic reaches us from the Messenger ﷺ about them, we say it, and if not, we stop where we stopped and say, We believe in it; all of it is from our Lord — the very words the Qur'an teaches for the ambiguous verses in 3:7.",
            "bn": "এতে বিচ্ছিন্ন হরফ পড়ে মুতাশাবিহের কাতারে, অর্থাৎ সেসব আয়াত যাদের পূর্ণ অর্থ আল্লাহর কাছে রাখা। ইবন কাসীর গোটা বিষয়টিকে একটি অবস্থানে জড়ো করেন: সন্দেহ নেই আল্লাহ এই হরফ অনর্থক নাজিল করেননি, তাই এর অর্থ আছে। রাসূল ﷺ থেকে যদি এ ব্যাপারে বিশুদ্ধ কিছু আমাদের কাছে পৌঁছায়, আমরা তা বলি; না পৌঁছালে যেখানে থেমেছি সেখানেই থামি আর বলি, আমরা এতে ঈমান আনলাম, সবই আমাদের রবের কাছ থেকে। এ তো ঠিক সেই কথা যা কুরআন মুতাশাবিহ আয়াতের জন্য ৩:৭ আয়াতে শেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Views That Were Offered",
          "bn": "যেসব মত পেশ করা হয়েছে"
        },
        "p": [
          {
            "en": "Within that humility, the commentators still recorded the readings people offered, and they kept them as views, not verdicts. At-Tabari relates from Ibn ʿAbbās that Ṭā-Sīn-Mīm is an oath by which Allah swore, and that it is one of the names of Allah; and from Qatāda that it is a name among the names of the Qur'an. Al-Baghawī and al-Qurtubi carry the same two readings, and add from Mujāhid that it is a name of the sūrah. None of the three is presented as the settled meaning of the verse.",
            "bn": "এই বিনয়ের ভেতরেও তাফসীরকারেরা মানুষের পেশ করা পাঠগুলো লিখে রেখেছেন, আর রেখেছেন মত হিসেবে, রায় হিসেবে নয়। তাবারী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে ত্ব-সীন-মীম একটি কসম যা দিয়ে আল্লাহ শপথ করেছেন, আর এটি আল্লাহর নামগুলোর একটি; আর কাতাদা থেকে বলেন যে এটি কুরআনের নামগুলোর একটি নাম। বাগাভী ও কুরতুবী একই দুটি পাঠ আনেন, আর মুজাহিদ থেকে যোগ করেন যে এটি সূরাটির নাম। তিনটির একটিকেও আয়াতের চূড়ান্ত অর্থ বলে দাঁড় করানো হয়নি।"
          },
          {
            "en": "Al-Qurtubi lays the range out side by side. On the oath reading he notes that Ibn ʿAbbās took the thing sworn to be the words that follow shortly after, If We willed, We could send down to them from the sky a sign (26:4). He records ar-Rabīʿ reading the letters as a reckoning of a people's term, and another view that they name a calamity that befalls a people. Where two readings genuinely differ, al-Qurtubi does not force a choice; he reports the disagreement as a disagreement and leaves it standing.",
            "bn": "কুরতুবী পাঠগুলো পাশাপাশি সাজিয়ে দেন। কসমের পাঠ নিয়ে তিনি বলেন, ইবন আব্বাস (রাঃ) কসমের বিষয়বস্তু ধরেছেন এর একটু পরের কথাগুলোকে, আমি ইচ্ছে করলে তাদের কাছে আসমান থেকে নিদর্শন পাঠাতাম (২৬:৪)। তিনি রাবীর পাঠ লেখেন যে হরফগুলো কোনো জাতির মেয়াদের হিসাব, আর আরেক মত যে এগুলো কোনো জাতির উপর নেমে আসা বিপর্যয়ের নাম। যেখানে দুই পাঠ সত্যিই আলাদা, কুরতুবী কোনো একটিকে জোর করে বেছে নেন না; তিনি মতভেদকে মতভেদ হিসেবেই লিখে রাখেন।"
          },
          {
            "en": "The commentators also note that these particular letters gave a group of sūrahs a shared name. Al-Qurtubi and al-Baghawī call them the Ṭawāsīn. Az-Zamakhshari, as Ibn Kathir relays, held that the letters as names of the sūrahs is the reading most agree upon, and even cited the grammarian Sibawayh for it. Ibn Kathir himself observes that a single letter's standing for a name is not something the mind can settle on its own; it can only be known if it is transmitted, and here nothing binding was transmitted from the Messenger ﷺ.",
            "bn": "তাফসীরকারেরা এ-ও জানান যে এই বিশেষ হরফগুলো একগুচ্ছ সূরাকে একটা মিলিত নাম দিয়েছে। কুরতুবী ও বাগাভী এগুলোকে বলেন তাওয়াসীন। ইবন কাসীরের বর্ণনায় জামাখশারী মনে করতেন, সূরার নাম হিসেবে হরফ ধরাই বেশিরভাগের কাছে গ্রহণযোগ্য পাঠ, আর এর জন্য তিনি ব্যাকরণবিদ সীবাওয়াই পর্যন্ত উদ্ধৃত করেন। ইবন কাসীর নিজে খেয়াল করান যে একটিমাত্র হরফ কোনো নামের প্রতিনিধিত্ব করছে, এটা বুদ্ধি নিজে থেকে ঠিক করতে পারে না; তা কেবল বর্ণনার মাধ্যমেই জানা যায়, আর এখানে রাসূল ﷺ থেকে বাধ্যকর কিছু বর্ণিত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Letters No One Could Match",
          "bn": "যে হরফের সমকক্ষ কেউ পারেনি"
        },
        "p": [
          {
            "en": "Alongside the question of what the letters mean, the commentators asked a second question: why place them here at all? Ibn Kathir lists the answers and weighs them. Some said the letters simply mark the beginnings of sūrahs; he calls this weak, since the sūrahs are already set apart. Others said they were sounded to catch the ears of the idolaters, who had agreed to turn away from the Qur'an; he weakens this too, since most sūrahs do not open this way, and two such sūrahs are Madinan and not addressed to those idolaters.",
            "bn": "হরফের অর্থ কী, সেই প্রশ্নের পাশাপাশি তাফসীরকারেরা দ্বিতীয় একটি প্রশ্ন করেন: এগুলো এখানে রাখা হলো কেন। ইবন কাসীর উত্তরগুলো সাজান আর মেপে দেখেন। কেউ বলেছেন হরফগুলো কেবল সূরার শুরু চিহ্নিত করে; তিনি একে দুর্বল বলেন, কারণ সূরাগুলো এমনিতেই আলাদা করা আছে। কেউ বলেছেন যেসব মুশরিক কুরআন থেকে মুখ ফিরিয়ে নিতে একে অপরকে বলাবলি করত, তাদের কান টানতেই হরফগুলো উচ্চারিত হয়েছে; এটিকেও তিনি দুর্বল করেন, কারণ বেশিরভাগ সূরা এভাবে শুরু হয় না, আর এমন দুটি সূরা মাদানী, ঐ মুশরিকদের সম্বোধন নয়।"
          },
          {
            "en": "The reading Ibn Kathir judges strongest is the challenge, the taḥaddī. These letters are placed at the head of a sūrah to declare the inability of all creation to produce its like — and to declare it pointedly, because the Qur'an is built from these very letters, the ordinary alphabet the Arabs speak to one another. Ibn Kathir traces this reading to al-Mubarrad and a group of the verifying scholars, to al-Farrāʾ and Quṭrub, to az-Zamakhshari who defended it fully, and to Ibn Taymiyya. The material is theirs; the arrangement is beyond them.",
            "bn": "ইবন কাসীর যে পাঠকে সবচেয়ে শক্তিশালী মনে করেন, তা হলো চ্যালেঞ্জ, তাহাদ্দী। এই হরফগুলো সূরার মাথায় রাখা হয়েছে গোটা সৃষ্টির অক্ষমতা ঘোষণা করতে, যে তারা এর মতো একটি আনতে পারবে না। আর ঘোষণাটা মোক্ষম, কারণ কুরআন গড়া এই হরফগুলো দিয়েই, সেই সাধারণ বর্ণমালা দিয়ে যা আরবরা একে অপরের সঙ্গে কথা বলতে ব্যবহার করে। ইবন কাসীর এই পাঠের সূত্র ধরেন মুবাররাদ ও একদল যাচাইকারী আলিম, ফাররা ও কুতরুব, জামাখশারী যিনি একে পুরোপুরি সমর্থন করেছেন, আর ইবন তাইমিয়া পর্যন্ত। কাঁচামাল তাদেরই, সাজানোটা তাদের নাগালের বাইরে।"
          },
          {
            "en": "The pattern supports it. Ibn Kathir points out that every sūrah opened with these letters goes on to speak of the Qur'an, its vindication and its greatness — something known by surveying all 29 of them. So it is in Alif Lām Mīm. That is the Book, no doubt in it (2:1 and 2:2), and so it is here, where the letters are followed at once by These are the verses of the clear Book (26:2). The disconnected letters and the claim of the Book stand together: sounds you can pronounce, arranged into what you cannot equal.",
            "bn": "ধরনটাই এর সমর্থন দেয়। ইবন কাসীর দেখান যে এই হরফ দিয়ে শুরু হওয়া প্রতিটি সূরাই এরপর কুরআনের কথা বলে, তার প্রমাণ ও মহত্ত্বের কথা বলে, আর এটা ২৯টি সূরা মিলিয়ে দেখলেই বোঝা যায়। যেমন আছে আলিফ-লাম-মীম। এই সেই কিতাব, যাতে কোনো সন্দেহ নেই (২:১ ও ২:২), আর এখানেও হরফের সঙ্গে সঙ্গেই আসে, এগুলো সুস্পষ্ট কিতাবের আয়াত (২৬:২)। বিচ্ছিন্ন হরফ আর কিতাবের দাবি পাশাপাশি দাঁড়ায়: যে ধ্বনিগুলো আপনি উচ্চারণ করতে পারেন, তা সাজানো হয়েছে এমন কিছুতে যার সমকক্ষ আপনি আনতে পারেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Letter Counted",
          "bn": "প্রতিটি হরফের হিসাব"
        },
        "p": [
          {
            "en": "One sound narration turns these same letters toward the reciter. At-Tirmidhi records from Ibn Masʿūd that the Messenger of Allah ﷺ said, Whoever recites a letter from the Book of Allah, he has a reward for it, and the reward is multiplied ten times over. I do not say that Alif-Lām-Mīm is a letter; rather Alif is a letter, Lām is a letter, and Mīm is a letter. At-Tirmidhi graded this ḥasan ṣaḥīḥ, and it names the very disconnected letters this verse is made of.",
            "bn": "একটি বিশুদ্ধ বর্ণনা এই একই হরফগুলোকে ফিরিয়ে দেয় পাঠকের দিকে। তিরমিযী ইবন মাসউদ (রাঃ) থেকে বর্ণনা করেন যে রাসূলুল্লাহ ﷺ বলেছেন, যে ব্যক্তি আল্লাহর কিতাব থেকে একটি হরফ পড়ে তার জন্য একটি নেকি, আর সেই নেকি ১০ গুণ বাড়িয়ে দেওয়া হয়। আমি বলি না যে আলিফ-লাম-মীম একটি হরফ; বরং আলিফ একটি হরফ, লাম একটি হরফ, আর মীম একটি হরফ। তিরমিযী একে হাসান সহীহ বলেছেন, আর এতে সেই বিচ্ছিন্ন হরফগুলোরই নাম আসে যা দিয়ে এ আয়াত গড়া।"
          },
          {
            "en": "The narration does not decode the meaning of the muqaṭṭaʿāt, and it should not be pressed to do so. What it does is take the letters the challenge is built from and make each one a countable good deed on the tongue of the believer. The alphabet that no one could match in composition becomes, letter by letter, a store of reward in recitation. The same three sounds that silence the challenger enrich the one who simply reads them, expecting nothing in return but the pleasure of their Lord.",
            "bn": "বর্ণনাটি মুকাত্তাআতের অর্থ খুলে দেয় না, আর তা থেকে জোর করে অর্থ বের করাও ঠিক নয়। এটি যা করে তা হলো, যে হরফ দিয়ে চ্যালেঞ্জটা গড়া, সেগুলোর প্রতিটিকে মুমিনের জিহ্বায় একটি করে গোনা-নেকিতে বদলে দেয়। যে বর্ণমালার সাজানোর সমকক্ষ কেউ আনতে পারেনি, সেটাই হরফে হরফে তিলাওয়াতে জমে ওঠা নেকির ভাণ্ডার হয়ে যায়। যে তিনটি ধ্বনি চ্যালেঞ্জকারীকে চুপ করিয়ে দেয়, সেই তিনটিই তাকে সমৃদ্ধ করে যে বিনিময়ে কেবল রবের সন্তুষ্টির আশায় সেগুলো পড়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Against Counting the Letters",
          "bn": "হরফ গুনে ভবিষ্যৎ বলা নয়"
        },
        "p": [
          {
            "en": "The commentators who preserved the offered views also shut one door firmly. Ibn Kathir writes that whoever claims these letters yield knowledge of hidden durations — the timing of events, trials and battles drawn out by adding up the letters — has claimed what is not his and flown where he does not belong. He notes that the one narration used to prop up such letter-counting is weak, resting on a chain that turns on al-Kalbī, and that the report reads as proof against the method rather than for it.",
            "bn": "যে তাফসীরকারেরা পেশ করা পাঠগুলো সংরক্ষণ করেছেন, তাঁরাই একটা দরজা শক্ত করে বন্ধ করে দেন। ইবন কাসীর লেখেন, যে দাবি করে এই হরফ থেকে গোপন মেয়াদের জ্ঞান বের হয়, হরফ যোগ করে ঘটনা, ফিতনা ও যুদ্ধের সময় বলে দেওয়া যায়, সে এমন কিছু দাবি করেছে যা তার নয় আর এমন আকাশে উড়েছে যা তার নয়। তিনি জানান, এমন হরফ-গণনার সমর্থনে যে একটিমাত্র বর্ণনা আনা হয় তা দুর্বল, তার সনদ কালবীর উপর ঘোরে, আর বর্ণনাটি পদ্ধতির পক্ষে নয় বরং তার বিরুদ্ধেই দলিল হয়ে দাঁড়ায়।"
          },
          {
            "en": "So the road is closed by the very scholars who were most generous with the range of readings. There is a difference between recording that a Companion once read a letter as an oath, and inventing a numerology that forecasts the future from the alphabet. Some later voices even assigned each letter a place-name or a lofty word, and al-Qurtubi lists such attempts; but he lists them as sayings, not as knowledge, and the caution of as-Saʿdi and Ibn Kathir hangs over the whole page. What cannot be transmitted is not to be manufactured.",
            "bn": "তাই যে আলিমরা পাঠের পরিসর নিয়ে সবচেয়ে উদার ছিলেন, তাঁরাই পথটা বন্ধ করেন। কোনো সাহাবি একবার এক হরফকে কসম হিসেবে পড়েছেন তা লিখে রাখা, আর বর্ণমালা থেকে ভবিষ্যৎ বলে দেওয়া গণনা বানানো, এ দুইয়ের মধ্যে ফারাক আছে। পরের যুগের কেউ কেউ এমনকি প্রতিটি হরফকে কোনো স্থাননাম বা মহিমান্বিত শব্দ ধরিয়ে দিয়েছেন, আর কুরতুবী এমন চেষ্টার তালিকাও দেন; কিন্তু দেন কথা হিসেবে, জ্ঞান হিসেবে নয়। আর গোটা পৃষ্ঠার উপর ঝুলে থাকে সাদী ও ইবন কাসীরের সতর্কতা। যা বর্ণিত হয়নি তা বানিয়ে নেওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Doorway to the Book",
          "bn": "কিতাবের দিকে এক দরজা"
        },
        "p": [
          {
            "en": "The letters do not stand in isolation; they open onto a claim. Immediately after Ṭā-Sīn-Mīm comes These are the verses of the clear Book, which Ibn Kathir explains as the clear, unambiguous Book that separates truth from falsehood and guidance from misguidance. The abrupt letters and the plain claim about the Book are set next to each other on purpose. First the raw material, the alphabet held up bare; then the finished revelation that no arrangement of that alphabet by anyone else could ever rival. The door is the letters; the room is the Book.",
            "bn": "হরফগুলো একা দাঁড়িয়ে নেই; এগুলো একটা দাবির দিকে দরজা খুলে দেয়। ত্ব-সীন-মীমের ঠিক পরেই আসে, এগুলো সুস্পষ্ট কিতাবের আয়াত, যাকে ইবন কাসীর ব্যাখ্যা করেন সেই স্পষ্ট ও দ্ব্যর্থহীন কিতাব হিসেবে যা সত্য থেকে মিথ্যা আর হেদায়েত থেকে গোমরাহি আলাদা করে দেয়। আকস্মিক হরফ আর কিতাব নিয়ে সরল দাবি পাশাপাশি রাখা হয়েছে উদ্দেশ্য করেই। প্রথমে কাঁচামাল, খালি বর্ণমালা উঁচু করে ধরা; তারপর সেই পূর্ণ ওহি যার সমকক্ষ ঐ বর্ণমালা সাজিয়ে অন্য কেউ কোনোদিন আনতে পারবে না। দরজা হলো হরফ, ঘরটা হলো কিতাব।"
          },
          {
            "en": "What follows makes the point turn on God's oneness in commanding belief. The sūrah tells the Prophet ﷺ not to destroy himself with grief that they will not believe (26:3), and says that were it His will, Allah could send down a sign that would bend their necks in submission (26:4) — but, as Ibn Kathir notes, He wills belief by choice and not by force. He who owns the letters owns the guidance, gives it freely, and keeps its deepest meanings with Himself. To meet the letters is already to meet His authority over the Book.",
            "bn": "এরপর যা আসে তা কথাটিকে ঘুরিয়ে দেয় ঈমান আদায়ের ব্যাপারে আল্লাহর একত্বের দিকে। সূরা নবী ﷺ-কে বলে, তারা ঈমান আনছে না বলে যেন তিনি দুঃখে নিজেকে শেষ করে না দেন (২৬:৩), আর বলে, তিনি চাইলে এমন নিদর্শন নাজিল করতে পারতেন যাতে তাদের ঘাড় নত হয়ে যেত (২৬:৪)। তবে ইবন কাসীর যেমন বলেন, তিনি ঈমান চান ইচ্ছায়, জোরে নয়। যিনি হরফের মালিক, তিনিই হেদায়েতের মালিক, তা অকাতরে দেন, আর এর গভীরতম অর্থ নিজের কাছেই রাখেন। হরফের মুখোমুখি হওয়া মানেই কিতাবের উপর তাঁর কর্তৃত্বের মুখোমুখি হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Trusting What Is Withheld",
          "bn": "যা লুকানো, তা মেনে নেওয়া"
        },
        "p": [
          {
            "en": "This is where the verse asks something of the reader. At the door of a whole sūrah you are handed three letters you cannot fully explain, and the healthiest response is not frustration but trust — the same trust the Companions modeled when they referred the meaning back to Allah. Not everything in revelation is a problem set for you to solve. Some of it is placed there precisely so that you learn to bow before what your Lord knows and you do not, and to be at peace with that.",
            "bn": "এখানেই আয়াতটি পাঠকের কাছে কিছু চায়। একটা গোটা সূরার দরজায় আপনার হাতে তুলে দেওয়া হয় তিনটি হরফ যা আপনি পুরোপুরি বোঝাতে পারেন না, আর সবচেয়ে সুস্থ সাড়াটা বিরক্তি নয়, ভরসা। ঠিক সেই ভরসা যা সাহাবিরা দেখিয়েছিলেন অর্থটা আল্লাহর কাছে সঁপে দিয়ে। ওহির সবকিছু আপনার সমাধানের জন্য পাতা কোনো ধাঁধা নয়। কিছু জিনিস রাখাই হয়েছে এজন্য যাতে আপনি শিখতে পারেন রব যা জানেন আর আপনি জানেন না, তার সামনে মাথা নত করতে, আর তাতে শান্ত থাকতে।"
          },
          {
            "en": "Carry it past the page. Much of a life with God has this shape: a decree whose wisdom is hidden, an answer withheld, a delay you cannot read. The muqaṭṭaʿāt train the posture the rest of it needs — certainty that there is a wisdom, patience with not yet seeing it, and worship that does not wait for the explanation to arrive. You recite Ṭā-Sīn-Mīm, you gain by every letter, and you leave the meaning where it has always safely rested, with Him who sent it down.",
            "bn": "কথাটা পাতার বাইরে বয়ে নিন। আল্লাহর সঙ্গে কাটানো জীবনের অনেকটাই এমন: এক ফয়সালা যার হিকমত লুকানো, এক জবাব যা আটকে রাখা, এক দেরি যা আপনি পড়তে পারেন না। মুকাত্তাআত সেই মানসিকতাটাই গড়ে তোলে যা বাকি সবকিছুর জন্য দরকার, এই নিশ্চয়তা যে হিকমত আছে, না দেখার ধৈর্য, আর এমন ইবাদত যা ব্যাখ্যার জন্য বসে থাকে না। আপনি ত্ব-সীন-মীম পড়েন, প্রতিটি হরফে লাভ করেন, আর অর্থটা সেখানেই রেখে দেন যেখানে তা চিরকাল নিরাপদে ছিল, যিনি নাজিল করেছেন তাঁরই কাছে।"
          }
        ]
      }
    ]
  },
  "26:10": {
    "sections": [
      {
        "h": {
          "en": "The Lord Who Calls First",
          "bn": "রব নিজে ডাক দিলেন"
        },
        "p": [
          {
            "en": "Wa-idh nādā rabbuka Mūsā: and when your Lord called Mūsā. The verb nādā is a call raised aloud across a distance, and al-Qurtubi fixes its plain sense here, that a caller addresses someone by name, so that the meaning is simply, your Lord said to him, O Mūsā. Ibn Kathir sets the scene: God informs us of what He commanded His servant, the man He spoke with directly, when He called him from the right side of the mountain, conversed with him in private, chose him and sent him. The first word of the mission is God's own voice.",
            "bn": "ওয়া ইয যা নাদা রাব্বুকা মূসা: আর যখন তোমার রব মূসা (আঃ)-কে ডাক দিলেন। নাদা ক্রিয়াটির অর্থ দূর থেকে উঁচু স্বরে ডাকা। কুরতুবী এখানে এর সোজা মানেই ধরেন: ডাকনেওয়ালা কাউকে নাম ধরে সম্বোধন করেন, অর্থাৎ তোমার রব তাঁকে বললেন, হে মূসা। ইবন কাসীর দৃশ্যটি তুলে ধরেন: আল্লাহ জানাচ্ছেন তিনি তাঁর সেই বান্দাকে কী আদেশ দিয়েছিলেন, যাঁর সঙ্গে তিনি সরাসরি কথা বলেছেন। তূর পাহাড়ের ডান পাশ থেকে তিনি তাঁকে ডাকলেন, একান্তে কথা বললেন, বেছে নিলেন এবং পাঠালেন। এই দায়িত্বের প্রথম শব্দটাই আল্লাহর নিজের ডাক।"
          },
          {
            "en": "Al-Baghawi ties the call to the moment Mūsā saw the tree and the fire, on the road with his family, when he turned aside toward a light and found himself addressed by his Lord. Notice the possessive in rabbuka, your Lord: the account is being recited to the Prophet, so that the God who called Mūsā is named as the same Lord who now speaks to him. The setting is holy ground and a private audience, yet what is handed over is not a reward. It is a task.",
            "bn": "বাগভী এই ডাককে জুড়ে দেন সেই মুহূর্তের সঙ্গে, যখন মূসা (আঃ) পথে পরিবারসহ চলার সময় গাছ ও আগুন দেখলেন, আলোর দিকে ফিরলেন আর নিজেকে রবের সম্বোধনের সামনে পেলেন। খেয়াল করুন রাব্বুকা শব্দে সম্বন্ধপদটি, তোমার রব। ঘটনাটি শোনানো হচ্ছে নবী ﷺ-কে, যেন বলা হচ্ছে, যে আল্লাহ মূসাকে ডেকেছিলেন তিনিই এখন তোমার সঙ্গে কথা বলছেন। জায়গাটা পবিত্র ভূমি, আর সাক্ষাৎটা একান্ত, তবু যা তুলে দেওয়া হলো তা কোনো পুরস্কার নয়। তা এক দায়িত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Recite, or Remember",
          "bn": "পড়ে শোনাও, না স্মরণ করো"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on the word idh, when, and reports more than one way to complete the sentence it hangs on. On one reading, which he attributes through an-Nahhas, an implied command governs it: recite to them the time when your Lord called Mūsā. The evidence he offers is the wording a few lines later in the same surah, and recite to them the account of Ibrāhīm at 26:69, where the very same verb of reciting is made explicit. The past event is thus set before a present audience to hear.",
            "bn": "কুরতুবী ইদ শব্দটির উপর থামেন, যার মানে যখন, আর যে বাক্যের সঙ্গে এটি ঝুলে আছে তা পূরণের একটি উপায় নয়, একাধিক উপায় তিনি বর্ণনা করেন। একটি পাঠে, যা তিনি নাহহাসের সূত্রে আনেন, একটি উহ্য আদেশ একে চালায়: তাদের পড়ে শোনাও সেই সময়ের কথা, যখন তোমার রব মূসাকে ডাকলেন। এর প্রমাণ হিসেবে তিনি একই সূরার কয়েক লাইন পরের শব্দ দেখান, আর তাদের পড়ে শোনাও ইবরাহীমের বৃত্তান্ত, ২৬:৬৯ আয়াতে, যেখানে পড়ে শোনানোর ঠিক সেই ক্রিয়াটিই স্পষ্ট করে বলা হয়েছে। অতীতের ঘটনা এভাবে উপস্থিত শ্রোতার সামনে রাখা হয়।"
          },
          {
            "en": "On a second reading al-Qurtubi supplies remember rather than recite, the same opening that stands before other prophetic accounts in the Qur'an, such as the call to remember Maryam and the servant Ibrāhīm. He does not force a choice between the two, and neither should we; the point they share is larger than the grammar that separates them. A moment sealed in the distant past is reopened as address. What God once said to Mūsā is now said, through recitation, to everyone who reads.",
            "bn": "দ্বিতীয় পাঠে কুরতুবী পড়ে শোনাও-এর বদলে স্মরণ করো বসান, যে সূচনা কুরআনে আরও নবীর বৃত্তান্তের আগে দাঁড়িয়ে আছে, যেমন মারইয়াম আর বান্দা ইবরাহীমকে স্মরণ করার ডাক। এই দুই পাঠের মধ্যে তিনি জোর করে কোনোটা বেছে নেন না, আমাদেরও নেওয়া উচিত নয়। দুটির ভেতরের অভিন্ন কথাটা ব্যাকরণের এই ফারাকের চেয়ে বড়। বহু আগের এক সিলমোহর করা মুহূর্ত আবার খুলে দেওয়া হয় সম্বোধন হিসেবে। আল্লাহ একদা মূসাকে যা বলেছিলেন, তা এখন তিলাওয়াতের মধ্য দিয়ে প্রত্যেক পাঠকের কাছে বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Wrongdoing People",
          "bn": "যালিম সম্প্রদায়ের পরিচয়"
        },
        "p": [
          {
            "en": "Who are the wrongdoing people the messenger is sent to? At-Tabari answers without hesitation: the disbelievers, the people of Pharaoh. He also notes the grammar that binds this verse to the next. The phrase the people of Pharaoh in 26:11 stands in the accusative as an explication of the wrongdoing people in 26:10, so the second naming simply spells out the first. The Qur'an withholds the name for one line, calls them by their wrong, and only then tells us exactly whose court is meant.",
            "bn": "রাসূলকে যাদের কাছে পাঠানো হচ্ছে, সেই যালিম সম্প্রদায় কারা? তাবারী কোনো দ্বিধা ছাড়াই জবাব দেন: তারা কাফির, ফেরাউনের সম্প্রদায়। তিনি এই আয়াতকে পরের আয়াতের সঙ্গে বাঁধা ব্যাকরণের দিকেও ইশারা করেন। ২৬:১১ আয়াতের ফেরাউনের সম্প্রদায় কথাটি কর্মকারকে বসেছে ২৬:১০ আয়াতের যালিম সম্প্রদায়ের ব্যাখ্যা হিসেবে, তাই দ্বিতীয় নামটি প্রথমটিকেই খুলে বলে। কুরআন একটি লাইনের জন্য নাম চেপে রাখে, তাদের ডাকে তাদের অন্যায় দিয়ে, তারপরই বলে দেয় ঠিক কার দরবারের কথা।"
          },
          {
            "en": "Al-Baghawi opens up what their wrong actually was, and it runs in two directions at once. They wronged themselves, he says, through disbelief and disobedience, refusing the God who made them. And they wronged the Children of Israel by enslaving them and subjecting them to the worst of torment. The single word ẓālimīn thus covers both a sin against heaven and a crime against a people. It is not a vague label of dislike; it names a documented refusal of God joined to a documented cruelty toward the powerless.",
            "bn": "বাগভী খুলে বলেন তাদের অন্যায়টা আসলে কী ছিল, আর তা চলছিল দুই দিকে একসঙ্গে। তারা নিজেদের প্রতি অন্যায় করেছে কুফর আর নাফরমানির মাধ্যমে, যে আল্লাহ তাদের বানিয়েছেন তাঁকেই অস্বীকার করে। আর তারা অন্যায় করেছে বনী ইসরাঈলের প্রতি, তাদের দাস বানিয়ে আর নিকৃষ্ট আযাবে ফেলে। যালিমীন এই একটি শব্দ তাই ঢেকে রাখে আসমানের বিরুদ্ধে গুনাহ আর একটা জাতির প্রতি নিষ্ঠুরতা দুটোই। এ কোনো অস্পষ্ট অপছন্দের তকমা নয়। এ নাম দেয় আল্লাহকে অস্বীকার আর অসহায়ের প্রতি প্রমাণিত নির্দয়তার।"
          },
          {
            "en": "As-Sa'di presses on the arrogance underneath it. These were people who exalted themselves in the land and set themselves above its inhabitants, and whose chief went so far as to claim lordship for himself. Al-Muyassar keeps the identification plain and short: the wrongdoing people are the people of Pharaoh. Between them the commentators draw one portrait, a regime that had inverted the order of things, putting a man where God belongs and putting a nation in chains, and calling the arrangement normal.",
            "bn": "সাদী এর নিচের অহংকারটার উপর চাপ দেন। এরা এমন লোক যারা যমীনে নিজেদের বড় বানিয়েছিল, সেখানকার বাসিন্দাদের উপর নিজেদের চাপিয়ে দিয়েছিল, আর যাদের সর্দার নিজের জন্য রুবুবিয়্যাত পর্যন্ত দাবি করে বসেছিল। মুয়াসসার পরিচয়টা রাখেন সোজা আর সংক্ষিপ্ত: যালিম সম্প্রদায় মানে ফেরাউনের সম্প্রদায়। এদের নিয়ে তাফসীরকারেরা মিলে একটি ছবিই আঁকেন, এমন এক শাসনব্যবস্থা যা জিনিসের ক্রম উল্টে দিয়েছিল, আল্লাহর জায়গায় একজন মানুষকে বসিয়ে আর একটা জাতিকে শিকলে বেঁধে, তবু বলছিল এটাই স্বাভাবিক।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Forbids",
          "bn": "এই আয়াত যা বারণ করে"
        },
        "p": [
          {
            "en": "This needs saying plainly, in the same breath as the naming. The verse describes one particular people, the court of one particular king, and the wrong the Qur'an records against them: their disbelief and their enslavement of Israel. It licenses nothing against any living person or community. No nation, family or faith-group today may be branded the wrongdoing people on the strength of this line, and anyone who reaches for it to justify contempt for a whole people has turned a verse about ẓulm into an act of ẓulm.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, ঠিক নাম বলার সঙ্গে সঙ্গেই। আয়াতটি একটি নির্দিষ্ট সম্প্রদায়ের কথা বলে, একজন নির্দিষ্ট বাদশাহর দরবারের কথা, আর সেই অন্যায়ের কথা যা কুরআন তাদের বিরুদ্ধে লিপিবদ্ধ করেছে: তাদের কুফর আর বনী ইসরাঈলকে দাস বানানো। এ আয়াত কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আজ কোনো জাতি, পরিবার বা ধর্মদলকে এই লাইনের জোরে যালিম সম্প্রদায় বলে দাগানো যায় না। যে কেউ গোটা একটা জাতিকে ঘৃণা করার সাফাই খুঁজতে এটি টেনে আনে, সে যুলুম নিয়ে বলা আয়াতকেই বানিয়ে ফেলে এক যুলুম।"
          },
          {
            "en": "The verse itself refuses that misuse. The very next line does not call down ruin on Pharaoh's people; it asks whether they will not fear God, holding the door of return open even to them. If the worst regime named in the passage is still addressed as capable of taqwā, then the reader is given no warrant to write off anyone as beyond it. To name a wrong rightly is one thing; to hate the wrongdoer past all hope of his return is another, and this verse does not teach the second.",
            "bn": "আয়াত নিজেই এই অপব্যবহার নাকচ করে দেয়। পরের লাইনটি ফেরাউনের সম্প্রদায়ের উপর ধ্বংস ডেকে আনে না, বরং জিজ্ঞেস করে তারা কি আল্লাহকে ভয় করবে না, তাদের জন্যও ফিরে আসার দরজা খোলা রেখে। আয়াতে নাম-করা সবচেয়ে খারাপ শাসকদলকেও যদি তাকওয়ার যোগ্য ধরে সম্বোধন করা হয়, তবে পাঠক কাউকেই সংশোধনের বাইরে লিখে ফেলার অনুমতি পায় না। কোনো অন্যায়কে ঠিকভাবে নাম দেওয়া একটি কথা, আর অন্যায়কারীকে তার ফিরে আসার সব আশা ছাড়িয়ে ঘৃণা করা আরেক কথা। এই আয়াত দ্বিতীয়টি শেখায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to the Throne",
          "bn": "সিংহাসনের দিকে প্রেরণ"
        },
        "p": [
          {
            "en": "As-Sa'di observes that God repeated the story of Mūsā in the Qur'an, and doubled it, more than He did for any other, because it carries great wisdoms and lessons, holding within it his dealings with wrongdoers and with believers alike. Mūsā, he adds, is the bearer of the great law and of the Torah, the best of the revealed books after the Qur'an. The man being called in this verse is no minor figure; he is the prophet whose confrontation with tyranny the Qur'an returns to again and again.",
            "bn": "সাদী লক্ষ করেন, আল্লাহ কুরআনে মূসার কাহিনি বারবার এনেছেন, দুবার দুবার করে, আর কোনো কাহিনি এতবার আনেননি, কারণ এতে আছে মহান হিকমত আর শিক্ষা, আছে যালিম আর মুমিন উভয়ের সঙ্গে তাঁর আচরণ। মূসা, তিনি যোগ করেন, বড় শরিয়তের বাহক আর তাওরাতের ধারক, যে কিতাব কুরআনের পর সেরা। এই আয়াতে যাঁকে ডাকা হচ্ছে তিনি কোনো ছোট মানুষ নন। তিনি সেই নবী, জুলুমের সঙ্গে যাঁর সংঘর্ষে কুরআন বারবার ফিরে আসে।"
          },
          {
            "en": "And yet the call opens not with his rank but with his errand. Before Mūsā is told that God will be with him, before his brother is granted to him, he is simply pointed at the hardest door of his age and told to walk through it. The reassurances come, and they come quickly in the verses that follow, but they come after the assignment, not before it. The order is the lesson: the task is given first, and the comfort is given to those who accept the task.",
            "bn": "তবু ডাকটা শুরু হয় তাঁর মর্যাদা দিয়ে নয়, তাঁর কাজ দিয়ে। মূসাকে জানানোর আগে যে আল্লাহ তাঁর সঙ্গে থাকবেন, তাঁর ভাইকে তাঁর জন্য দেওয়ার আগে, তাঁকে কেবল যুগের সবচেয়ে কঠিন দরজার দিকে দেখিয়ে বলা হয় সেটা পেরিয়ে যেতে। আশ্বাস আসে, আর পরের আয়াতগুলোতে দ্রুতই আসে, তবে তা আসে দায়িত্বের পরে, আগে নয়। এই ক্রমটাই শিক্ষা: কাজ আগে দেওয়া হয়, আর আশ্বাস দেওয়া হয় তাদের, যারা কাজটা কবুল করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear God, and Return",
          "bn": "আল্লাহকে ভয় করো, ফিরে এসো"
        },
        "p": [
          {
            "en": "What is the messenger actually sent to say? Al-Muyassar draws it out from the following verse: go to the people of Pharaoh and ask them, will they not fear the punishment of God and abandon the disbelief and misguidance they are living in? The mission is announced in 26:11 as a question, not a sentence of doom. Its aim is that they turn, that they come to fear God and leave their wrong. Confrontation here is a door held open, not a trap sprung shut.",
            "bn": "রাসূলকে আসলে কী বলতে পাঠানো হচ্ছে? মুয়াসসার তা পরের আয়াত থেকে বের করে আনেন: ফেরাউনের সম্প্রদায়ের কাছে যাও আর জিজ্ঞেস করো, তারা কি আল্লাহর শাস্তিকে ভয় করবে না, আর যে কুফর ও গুমরাহিতে তারা ডুবে আছে তা ছাড়বে না? ২৬:১১ আয়াতে মিশনটি ঘোষণা করা হয় প্রশ্ন হিসেবে, ধ্বংসের রায় হিসেবে নয়। এর লক্ষ্য তারা যেন ফিরে আসে, আল্লাহকে ভয় করতে শেখে আর নিজেদের অন্যায় ছাড়ে। এখানে মুখোমুখি হওয়া মানে খুলে রাখা এক দরজা, ফাঁদ পেতে বন্ধ করা নয়।"
          },
          {
            "en": "This reframes what it means to stand against wrong at all. The goal set for Mūsā is not the humiliation of Pharaoh but the rescue of Pharaoh's soul, if he will have it, and the freeing of those he oppressed. A rebuke that wants only to win, or only to destroy, has already drifted from the pattern. The word given to the tyrant first offers him the fear of God, the one fear that could still save him, and only his refusal, not the messenger's wish, seals what comes after.",
            "bn": "এটা অন্যায়ের বিরুদ্ধে দাঁড়ানোর মানেটাই নতুন করে সাজায়। মূসার সামনে রাখা লক্ষ্য ফেরাউনকে হেয় করা নয়, বরং সুযোগ থাকলে ফেরাউনের আত্মাকে বাঁচানো, আর সে যাদের উপর জুলুম করেছে তাদের মুক্ত করা। যে ভর্ৎসনা কেবল জিততে চায়, বা কেবল ধ্বংস করতে চায়, তা এই ধারা থেকে সরে গেছে। অত্যাচারীকে দেওয়া কথাটা আগে তাকে আল্লাহর ভয়ের দিকেই ডাকে, সেই একমাত্র ভয় যা তখনো তাকে বাঁচাতে পারত, আর তার পরের পরিণতি ঠিক করে তার অস্বীকার, রাসূলের কামনা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Before Power",
          "bn": "ক্ষমতার সামনে সত্য কথা"
        },
        "p": [
          {
            "en": "The Prophet ﷺ said, as Abu Sa'id al-Khudri reported, Indeed, among the greatest types of jihad is a just statement before a tyrannical ruler. At-Tirmidhi records it and grades it, in his own words, ḥasan gharīb, sound but singular through this chain. No commentator consulted for this verse attaches this hadith to it; it is a general teaching on speaking truth to power, brought here for its plain kinship with the scene, not as an explanation of the words themselves.",
            "bn": "নবী ﷺ বলেছেন, আবু সাঈদ খুদরী (রাঃ) যেমন বর্ণনা করেছেন, নিশ্চয় সবচেয়ে বড় জিহাদের একটি হলো অত্যাচারী শাসকের সামনে ন্যায়ের কথা বলা। তিরমিযী এটি বর্ণনা করেন আর নিজের ভাষায় একে হাসান গারীব বলেন, অর্থাৎ সহীহ তবে এই সনদে একক। এই আয়াতের জন্য দেখা কোনো তাফসীরকার হাদীসটিকে এর সঙ্গে জোড়েননি। এটি ক্ষমতার সামনে সত্য বলার এক সাধারণ শিক্ষা, দৃশ্যটির সঙ্গে স্পষ্ট মিলের কারণে এখানে আনা, আয়াতের শব্দের ব্যাখ্যা হিসেবে নয়।"
          },
          {
            "en": "Mūsā walking into Pharaoh's court is the first and greatest instance of exactly that word. He is one man, formerly a fugitive from that same court, sent to stand before absolute power and name its wrong to its face. The hadith tells the ordinary believer that even a single just sentence, spoken where it costs something, ranks among the highest struggles in God's path. The verse shows what that looks like when God Himself is the one who assigns the sentence and the one who stands behind the speaker.",
            "bn": "ফেরাউনের দরবারে ঢুকে পড়া মূসাই ঠিক সেই কথার প্রথম আর সবচেয়ে বড় দৃষ্টান্ত। তিনি একজন মানুষ, একসময় সেই দরবার থেকেই পালিয়ে যাওয়া, তাকে পাঠানো হচ্ছে চূড়ান্ত ক্ষমতার সামনে দাঁড়িয়ে তার অন্যায় তার মুখের উপর বলতে। হাদীসটি সাধারণ মুমিনকে জানায়, যেখানে দাম দিতে হয় সেখানে বলা একটি ন্যায্য বাক্যও আল্লাহর পথে সর্বোচ্চ সংগ্রামের অন্যতম। আর আয়াত দেখায় সেটা কেমন দেখায়, যখন আল্লাহ নিজেই সেই বাক্য অর্পণকারী আর বক্তার পেছনে দাঁড়ানো সত্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Called, Not Self-Appointed",
          "bn": "ডাক পাওয়া, নিজে বসা নয়"
        },
        "p": [
          {
            "en": "Return, finally, to who did the calling. It was rabbuka, your Lord, not Mūsā's own sense of destiny, that sent him. Al-Qurtubi's plain gloss on the call, that it means being addressed by name, matters here: Mūsā did not nominate himself to confront Pharaoh, he was named to it. This is the line between a prophet and a zealot. One is sent and knows he is sent; the other appoints himself, mistakes his anger for a summons, and carries no authority but his own certainty.",
            "bn": "শেষে ফিরে আসুন কে ডেকেছিলেন সেই প্রশ্নে। ডেকেছিলেন রাব্বুকা, তোমার রব, মূসার নিজের কোনো নিয়তির টান নয়। কুরতুবীর সোজা ব্যাখ্যা, যে ডাক মানে নাম ধরে সম্বোধন, এখানে গুরুত্ব রাখে: মূসা নিজেকে ফেরাউনের মুখোমুখি হওয়ার জন্য মনোনীত করেননি, তাঁকে নাম ধরে ডাকা হয়েছিল। এখানেই নবী আর গোঁয়ার উদ্যমীর ফারাক। একজন প্রেরিত আর তা জানে; অন্যজন নিজেই নিজেকে বসায়, নিজের রাগকে ডাক বলে ভুল করে, আর নিজের একগুঁয়ে নিশ্চয়তা ছাড়া কোনো কর্তৃত্ব বহন করে না।"
          },
          {
            "en": "You will most likely never be sent to a throne. But you will be given errands you would rather refuse: a wrong in the family nobody will name, an injustice at work that everyone has agreed to call normal. The question this verse leaves is not whether you feel ready or safe, for Mūsā felt neither. It is whether the call is genuinely yours, and if it is, whether you will answer it as he did, aiming not to destroy the wrongdoer but to see him fear God and turn back.",
            "bn": "আপনাকে সম্ভবত কখনো কোনো সিংহাসনের কাছে পাঠানো হবে না। তবে আপনাকে এমন কাজ দেওয়া হবে যা আপনি এড়িয়ে যেতে চাইবেন: পরিবারের এমন এক অন্যায় যার নাম কেউ নেয় না, কাজের জায়গায় এমন এক জুলুম যাকে সবাই মিলে স্বাভাবিক বলে মেনে নিয়েছে। এই আয়াত যে প্রশ্নটা রেখে যায় তা এই নয় যে আপনি প্রস্তুত বা নিরাপদ বোধ করছেন কি না, কারণ মূসা কোনোটাই করেননি। প্রশ্নটা হলো, ডাকটা কি সত্যিই আপনার, আর তা হলে আপনি কি তাঁর মতো সাড়া দেবেন, অন্যায়কারীকে ধ্বংস নয়, বরং তাকে আল্লাহর ভয়ে ফিরে আসতে দেখতে চেয়ে।"
          }
        ]
      }
    ]
  },
  "26:12": {
    "sections": [
      {
        "h": {
          "en": "His First Word Was Rabbi",
          "bn": "প্রথম ডাক রাব্বি বলে"
        },
        "p": [
          {
            "en": "The call comes in 26:10 and 26:11: your Lord called Mūsā (AS), telling him to go to the wrongdoing people, the people of Pharaoh, who would not fear God. Ibn Kathir, on this passage, describes God calling him from the right side of the mountain, speaking with him, choosing him, and commanding him to go. The command is to confront a tyrant at the height of his power. Mūsā's reply in 26:12 opens not with protest but with a name: Rabbi, my Lord.",
            "bn": "ডাকটা আসে ২৬:১০ ও ২৬:১১ আয়াতে: তোমার প্রতিপালক মূসা (আঃ)-কে ডাকলেন, বললেন যালিম সম্প্রদায়ের কাছে যেতে, ফেরাউনের সম্প্রদায়ের কাছে, যারা আল্লাহকে ভয় করে না। ইবন কাসীর এই অংশে বলেন, আল্লাহ তাঁকে পাহাড়ের ডান পাশ থেকে ডাকলেন, তাঁর সঙ্গে কথা বললেন, তাঁকে বেছে নিলেন আর ফেরাউনের কাছে যাওয়ার হুকুম দিলেন। হুকুমটা ক্ষমতার চূড়ায় বসা এক স্বৈরাচারীর মুখোমুখি হওয়ার। মূসা (আঃ)-এর জবাব ২৬:১২ আয়াতে শুরু হয় প্রতিবাদ দিয়ে নয়, একটা নাম দিয়ে: রাব্বি, হে আমার প্রতিপালক।"
          },
          {
            "en": "At-Tabari reads the whole line as Mūsā (AS) speaking to his Lord: I fear, from Pharaoh's people whom You have ordered me to go to, that they will deny me. The address matters. Before he says a word about his fear, he places it inside a relationship. He is not arguing with the mission; he is talking to the One who gave it. The first move of a servant under a hard command is to turn toward the Commander.",
            "bn": "তাবারী গোটা বাক্যটা পড়েন মূসা (আঃ)-এর রবের সঙ্গে কথা বলা হিসেবে: আমার ভয় হচ্ছে, ফেরাউনের যে সম্প্রদায়ের কাছে আপনি আমাকে যেতে বলেছেন, তারা আমাকে মিথ্যাবাদী বলবে। এই সম্বোধনটাই আসল। ভয়ের কথা মুখে আনার আগেই তিনি সেটাকে একটা সম্পর্কের ভেতরে রাখেন। তিনি কাজ নিয়ে তর্ক করছেন না, যিনি কাজটা দিয়েছেন তাঁর সঙ্গে কথা বলছেন। কঠিন হুকুমের নিচে দাঁড়ানো বান্দার প্রথম কাজ হুকুমদাতার দিকেই ফেরা।"
          },
          {
            "en": "The previous verse ended with a question about Pharaoh's people, alā yattaqūn, will they not fear God. Mūsā's answer begins where every burdened servant should begin. He does not measure the tyrant's power against his own; he brings the whole matter back to his Lord. That single word Rabbi reframes the errand before it starts: this is not Mūsā against Pharaoh, but a servant sent, standing before the One who sends.",
            "bn": "আগের আয়াতটা শেষ হয়েছিল ফেরাউনের সম্প্রদায় নিয়ে এক প্রশ্নে, আলা ইয়াত্তাকূন, তারা কি ভয় করবে না। মূসা (আঃ)-এর জবাব শুরু হয় সেখান থেকে, যেখান থেকে ভারাক্রান্ত প্রতিটি বান্দার শুরু করা উচিত। তিনি স্বৈরাচারীর শক্তির সঙ্গে নিজের শক্তি মাপেন না, গোটা বিষয়টা রবের কাছে ফিরিয়ে আনেন। ওই একটি শব্দ রাব্বি গোটা কাজটার চেহারা বদলে দেয়: এটা মূসা বনাম ফেরাউন নয়, বরং এক প্রেরিত বান্দা, দাঁড়িয়ে আছেন প্রেরণকারীর সামনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fear He Named",
          "bn": "যে ভয় তিনি বললেন"
        },
        "p": [
          {
            "en": "The words are qāla rabbi innī akhāfu an yukadhdhibūni: he said, my Lord, I fear that they will deny me. At-Tabari fills in the object of the fear: that they will call him a liar regarding his telling them that God had sent him. The dread is not of pain first, but of the message itself being thrown back. To be denied is to have the truth you carry treated as a lie to your face.",
            "bn": "কথাগুলো: কালা রাব্বি ইন্নী আখাফু আন ইউকাযযিবূন, তিনি বললেন, হে আমার প্রতিপালক, আমার ভয় হচ্ছে তারা আমাকে মিথ্যাবাদী বলবে। তাবারী ভয়ের লক্ষ্যটা খুলে বলেন: তারা তাঁকে এ কথায় মিথ্যাবাদী বলবে যে আল্লাহ তাঁকে তাদের কাছে পাঠিয়েছেন। ভয়টা প্রথমে কষ্টের নয়, ভয়টা বার্তাটাই মুখের উপর ফিরিয়ে দেওয়ার। মিথ্যাবাদী বলা মানে আপনি যে সত্য বহন করছেন, সেটাকে সামনে দাঁড়িয়ে মিথ্যা বলে ধরা।"
          },
          {
            "en": "Al-Qurtubi sharpens it: the denial Mūsā (AS) fears is denial in the message and the prophethood. Al-Muyassar reads it the same way, that they would belie him in the risāla, the errand of revelation he was sent with. This is the particular fear of anyone charged with saying something true and unwelcome. It is not weakness of faith in God; it is a clear-eyed reading of the people he was being sent to, whom the previous verse has already named as wrongdoers.",
            "bn": "কুরতুবী কথাটা আরও ধারালো করেন: মূসা (আঃ) যে মিথ্যাবাদী বলার ভয় পাচ্ছেন, তা রিসালাত ও নবুয়তের ব্যাপারে অস্বীকার। মুয়াসসারও একই পড়েন, তারা রিসালাতের ব্যাপারে তাঁকে মিথ্যাবাদী বলবে, সেই ওহির দায়িত্ব নিয়ে তিনি প্রেরিত হয়েছিলেন। সত্য অথচ অপছন্দের কথা বলার দায়িত্ব যার কাঁধে, এ তারই বিশেষ ভয়। এটা আল্লাহর উপর ঈমানের দুর্বলতা নয়, বরং যাদের কাছে তাঁকে পাঠানো হচ্ছে তাদের সাফ চোখে পড়া, আগের আয়াত যাদের যালিম বলে ডেকেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Is Not Excusing",
          "bn": "চাওয়া মানে অজুহাত নয়"
        },
        "p": [
          {
            "en": "It would be a grave misreading to hear these words as a prophet flinching from duty. Ma'arif al-Qur'an states the principle plainly: a request for favourable conditions to carry out an act of obedience is not the same as making excuses. Mūsā (AS) was asking God to provide resources that would help him fulfil the command, and since the aim was to obey, praying for such help cannot be counted as seeking a way out. He is not bargaining the task down; he is equipping for it.",
            "bn": "এ কথাগুলোকে কর্তব্য থেকে পিছিয়ে যাওয়া নবীর কথা ভাবা হবে বড় ভুল পড়া। মাআরিফুল কুরআন নীতিটা সাফ বলে: আনুগত্যের কাজ সহজে করার জন্য অনুকূল অবস্থা চাওয়া আর অজুহাত বানানো এক জিনিস নয়। মূসা (আঃ) আল্লাহর কাছে এমন সহায় চাইছিলেন, যা হুকুম পালন সহজ করবে; আর লক্ষ্য যেহেতু আনুগত্য, সেই সহায় চাওয়াকে পালানোর ফন্দি বলা যায় না। তিনি কাজটা ছোট করে নিচ্ছেন না, কাজের জন্য নিজেকে তৈরি করছেন।"
          },
          {
            "en": "As-Saʿdi reads the same tone into the verse. He describes Mūsā (AS) as speaking iʿtidhāran, laying his situation before his Lord, mubayyinan li-ʿudhrihi, making his circumstances clear, and above all sāʾilan lahu al-maʿūna, asking Him for help to bear this heavy load. The load is real, and Mūsā names its weight honestly. Candour before God about what a task demands is not a crack in trust. It is what trust sounds like when the trust is in God and not in oneself.",
            "bn": "সাদী আয়াতে একই সুর পড়েন। তিনি মূসা (আঃ)-কে দেখান ইতিযার হিসেবে কথা বলতে, অর্থাৎ রবের সামনে নিজের অবস্থা তুলে ধরতে, নিজের ওজর স্পষ্ট করতে, আর সবচেয়ে বড় কথা, এই ভারী বোঝা বইতে তাঁর কাছে সাহায্য চাইতে। বোঝাটা সত্যি, আর মূসা (আঃ) তার ওজন সততার সঙ্গে বলেন। কাজটা কী চায় তা নিয়ে আল্লাহর সামনে খোলাখুলি বলা ভরসার ফাটল নয়। ভরসা যখন নিজের উপর নয়, আল্লাহর উপর, তখন সেই ভরসার আওয়াজ এমনই হয়।"
          },
          {
            "en": "This is why the classical readings guard the verse so carefully. To call Mūsā's words an evasion would be to miss what a prophet is doing when he speaks to God this way. He is modelling reliance, not reluctance, showing that the honest naming of difficulty belongs inside worship, not outside it. The stronger a person's certainty in God, the more freely he can admit his own smallness, because he is not leaning on himself.",
            "bn": "এ কারণেই পুরোনো তাফসীরকারেরা আয়াতটা এত যত্নে আগলে রাখেন। মূসা (আঃ)-এর কথাকে এড়িয়ে যাওয়া বলা মানে একজন নবী আল্লাহর সঙ্গে এভাবে কথা বলে কী করছেন, তা না বোঝা। তিনি অনিচ্ছা নয়, ভরসা শেখাচ্ছেন, দেখাচ্ছেন কষ্টের কথা সততার সঙ্গে বলা ইবাদতের বাইরের নয়, ভেতরের জিনিস। আল্লাহর উপর যার ইয়াকিন যত পাকা, নিজের ছোটত্ব স্বীকার করতে সে তত সহজ, কারণ সে তো নিজের উপর ভর দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight He Carried",
          "bn": "যে ভার তাঁর কাঁধে"
        },
        "p": [
          {
            "en": "The next two verses spell out what he was carrying. Wa yaḍīqu ṣadrī: and my breast tightens. Wa lā yanṭaliqu lisānī: and my tongue does not run free. Al-Muyassar renders it as grief filling his chest at their denial and his tongue not moving freely with the call, so he asks that revelation be sent to his brother Hārūn (AS) to support him, to confirm what he says, and to make it plain, for Hārūn was the more fluent in speech. The request is precise and practical.",
            "bn": "পরের দুই আয়াত খুলে বলে তিনি কী বইছিলেন। ওয়া ইয়াদীকু সাদরী: আর আমার বুক সংকুচিত হয়ে আসে। ওয়া লা ইয়ানতালিকু লিসানী: আর আমার জিহ্বা সহজে চলে না। মুয়াসসার এটাকে পড়েন এভাবে, তাদের মিথ্যা বলায় বুক দুশ্চিন্তায় ভরে ওঠে আর দাওয়াতের বেলায় জিহ্বা সহজে চলে না, তাই তিনি চান ওহি যেন তাঁর ভাই হারূন (আঃ)-এর কাছে পাঠানো হয়, যেন তিনি সহায় হন, তাঁর কথা সত্যায়ন করেন আর স্পষ্ট করে দেন, কারণ হারূন (আঃ) কথায় বেশি সাবলীল ছিলেন। চাওয়াটা নির্দিষ্ট, আর তা কাজে লাগার মতো।"
          },
          {
            "en": "Then wa lahum ʿalayya dhanbun fa-akhāfu an yaqtulūni: and they hold a charge against me, so I fear they will kill me. Al-Muyassar and Ibn Kathir both identify the matter: the death of a man of Pharaoh's people, the Copt, which was why Mūsā (AS) had earlier left Egypt. He does not conceal the outstanding danger. He lays the whole of it before God, the fear of denial, the tight chest, the halting tongue, and the threat to his life, keeping nothing hidden from the Lord he is asking.",
            "bn": "এরপর ওয়া লাহুম আলাইয়া যানবুন ফাআখাফু আন ইয়াক্‌তুলূন: আর তাদের কাছে আমার বিরুদ্ধে এক অভিযোগ আছে, তাই আমার ভয় তারা আমাকে হত্যা করবে। মুয়াসসার ও ইবন কাসীর দুজনেই বিষয়টা চিনিয়ে দেন: ফেরাউনের সম্প্রদায়ের এক ব্যক্তির মৃত্যু, সেই কিবতী, যে কারণে মূসা (আঃ) আগে মিসর ছেড়েছিলেন। সামনে থাকা বিপদটা তিনি লুকান না। গোটা ব্যাপারটাই আল্লাহর সামনে রাখেন, মিথ্যাবাদী বলার ভয়, সংকুচিত বুক, আটকে যাওয়া জিহ্বা, আর প্রাণের হুমকি, যাঁর কাছে চাইছেন তাঁর কাছ থেকে কিছুই আড়াল করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Was Kallā",
          "bn": "জবাব এলো কক্ষনো না"
        },
        "p": [
          {
            "en": "God's reply lands in a single word: qāla kallā, He said, no, certainly not. Ibn Kathir explains it as God telling Mūsā (AS) not to be afraid of anything like that. There is no reproach in it and no dismissal of the fear as foolish. The fear was reasonable; the answer is not a lecture but a refusal to let the fear stand: it will not go as you dread. Then comes the ground for that refusal.",
            "bn": "আল্লাহর জবাব নামে একটি শব্দে: কালা কাল্লা, তিনি বললেন, না, কক্ষনো না। ইবন কাসীর এটাকে ব্যাখ্যা করেন এভাবে, আল্লাহ মূসা (আঃ)-কে বলছেন ওসবের কিছুকেই ভয় না করতে। এতে কোনো তিরস্কার নেই, ভয়কে বোকামি বলে উড়িয়ে দেওয়াও নেই। ভয়টা যুক্তিসঙ্গত ছিল; জবাবটা কোনো বক্তৃতা নয়, বরং ভয়কে টিকতে না দেওয়া: তুমি যা আশঙ্কা করছ, তেমনটা হবে না। এরপর আসে সেই জবাবের ভিত্তি।"
          },
          {
            "en": "Faidhhabā biāyātinā innā maʿakum mustamiʿūn: go, both of you, with Our signs; We are with you, listening. Ibn Kathir glosses the companionship as God being with them by His protection, His care, His support and His help. He ties it to the promise in 28:35, that God would strengthen Mūsā's arm through his brother so that Pharaoh could not reach them. Every named fear is met by a named provision. The tongue gets Hārūn (AS); the danger gets divine protection; the dread of denial gets God's own presence.",
            "bn": "ফায্‌হাবা বিআয়াতিনা ইন্না মাআকুম মুস্তামিউন: তোমরা দুজন আমার নিদর্শন নিয়ে যাও; আমি তোমাদের সঙ্গে আছি, শুনছি। ইবন কাসীর এই সঙ্গ থাকাকে ব্যাখ্যা করেন আল্লাহর হেফাজত, তাঁর যত্ন, তাঁর সহায়তা আর তাঁর সাহায্য দিয়ে। তিনি একে জুড়ে দেন ২৮:৩৫ আয়াতের ওয়াদার সঙ্গে, যেখানে আল্লাহ ভাইয়ের মাধ্যমে মূসা (আঃ)-এর বাহু শক্ত করার কথা বলেন, যাতে ফেরাউন তাঁদের নাগাল না পায়। প্রতিটি নাম ধরে বলা ভয়ের জবাবে নাম ধরে বলা এক ব্যবস্থা। জিহ্বার জন্য হারূন (আঃ), বিপদের জন্য আল্লাহর হেফাজত, মিথ্যাবাদী বলার আশঙ্কার জন্য স্বয়ং আল্লাহর সঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "An Echo from Ṭāhā",
          "bn": "তা-হা সূরার প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Ibn Kathir places this scene beside its telling in Sūrat Ṭāhā. There Mūsā (AS) prays, rabbi ishraḥ lī ṣadrī, my Lord, expand my breast for me, wa yassir lī amrī, and ease my task for me, and asks that Hārūn (AS) be made a support to him. The same fears, the same requests. And there God answers, qad ūtīta suʾlaka yā Mūsā: you have been granted your request, O Mūsā. What was asked in fear was given in full.",
            "bn": "ইবন কাসীর এই দৃশ্যটা রাখেন সূরা তা-হায় এর বর্ণনার পাশে। সেখানে মূসা (আঃ) দোয়া করেন, রাব্বিশ্‌রাহ লী সাদরী, হে আমার প্রতিপালক, আমার বুক প্রশস্ত করে দিন, ওয়া ইয়াস্‌সির লী আমরী, আর আমার কাজ সহজ করে দিন, আর চান হারূন (আঃ)-কে তাঁর সহায় বানিয়ে দিতে। একই ভয়, একই চাওয়া। আর সেখানে আল্লাহ জবাব দেন, কাদ ঊতীতা সুআলাকা ইয়া মূসা: তোমাকে তোমার চাওয়া দিয়ে দেওয়া হলো, হে মূসা। ভয়ে যা চাওয়া হয়েছিল, তা পুরোপুরি দেওয়া হলো।"
          },
          {
            "en": "The two accounts read together make the point unmistakable. In Ṭāhā, God's reassurance is innanī maʿakumā asmaʿu wa arā, I am with you both, I hear and I see. Ibn Kathir sets this line next to the listening God promises in our sūrah. A servant who names his fear and asks for help is not turned away and not scolded. He is answered, equipped, and accompanied. The pattern is God's own, repeated across two surahs so it cannot be missed.",
            "bn": "দুই বর্ণনা একসঙ্গে পড়লে কথাটা আর অস্পষ্ট থাকে না। তা-হায় আল্লাহর আশ্বাস, ইন্নানী মাআকুমা আসমাউ ওয়া আরা, আমি তোমাদের দুজনের সঙ্গে আছি, শুনছি ও দেখছি। ইবন কাসীর এই বাক্যটা রাখেন আমাদের সূরায় আল্লাহর শোনার প্রতিশ্রুতির পাশে। যে বান্দা নিজের ভয় নাম ধরে বলে আর সাহায্য চায়, তাকে ফিরিয়ে দেওয়া হয় না, ধমকও দেওয়া হয় না। তাকে জবাব দেওয়া হয়, তৈরি করে দেওয়া হয়, আর সঙ্গ দেওয়া হয়। এ ধরনটা আল্লাহরই, দুই সূরায় বারবার বলা, যাতে চোখ এড়িয়ে না যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "I Am With Him",
          "bn": "আমি তার সঙ্গে আছি"
        },
        "p": [
          {
            "en": "The Qur'an shows God answering Mūsā's turn toward Him with nearness, and a hadith qudsi carries the same promise to everyone who turns. Al-Bukhari records from Abū Hurayra (RA) that the Prophet ﷺ said that God says: I am as My servant thinks of Me, and I am with him when he remembers Me. If he remembers Me within himself, I remember him within Myself; if he draws near to Me a handspan, I draw near to him an arm's length; and if he comes to Me walking, I come to him running.",
            "bn": "কুরআন দেখায় আল্লাহ মূসা (আঃ)-এর তাঁর দিকে ফেরাকে নৈকট্য দিয়ে জবাব দিচ্ছেন, আর একটি হাদীসে কুদসী একই ওয়াদা পৌঁছে দেয় প্রত্যেক ফেরা মানুষের কাছে। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, আল্লাহ বলেন: আমার বান্দা আমার সম্পর্কে যেমন ধারণা রাখে আমি তেমন, আর সে যখন আমাকে স্মরণ করে তখন আমি তার সঙ্গে থাকি। সে যদি মনে মনে আমাকে স্মরণ করে, আমি মনে মনে তাকে স্মরণ করি; সে যদি এক বিঘত আমার দিকে এগোয়, আমি এক হাত তার দিকে এগোই; আর সে যদি হেঁটে আমার কাছে আসে, আমি দৌড়ে তার কাছে যাই।"
          },
          {
            "en": "The wording answers our verse almost line for line. Mūsā (AS) feared and turned to his Lord, and God said innā maʿakum, We are with you. The hadith makes that companionship the standing rule: God is with the servant the moment the servant remembers Him, and He closes the distance faster than the servant opens it. The fear that drives someone toward God is not the end of nearness. It is often its beginning, the first handspan that God answers with an arm's length.",
            "bn": "হাদীসের কথা যেন আমাদের আয়াতের সঙ্গে লাইনে লাইনে মেলে। মূসা (আঃ) ভয় পেয়ে রবের দিকে ফিরলেন, আর আল্লাহ বললেন ইন্না মাআকুম, আমি তোমাদের সঙ্গে আছি। হাদীস সেই সঙ্গ থাকাকে বানিয়ে দেয় স্থায়ী নিয়ম: বান্দা স্মরণ করার মুহূর্তেই আল্লাহ তার সঙ্গে থাকেন, আর বান্দা যত দূরত্ব ঘোচায় তার চেয়ে দ্রুত তিনি ঘোচান। যে ভয় মানুষকে আল্লাহর দিকে ঠেলে দেয়, তা নৈকট্যের শেষ নয়। বরং প্রায়ই তা নৈকট্যের শুরু, সেই প্রথম বিঘত যার জবাবে আল্লাহ দেন এক হাত।"
          },
          {
            "en": "So the believer who feels fear at the threshold of a duty is not far from God for feeling it. He is exactly where Mūsā (AS) stood, and the same nearness is on offer. The remedy the hadith prescribes is not to manufacture confidence but to remember God, for it is in that remembrance that His companionship is both promised and given.",
            "bn": "তাই কোনো কর্তব্যের দোরগোড়ায় যে বিশ্বাসী ভয় অনুভব করে, সে ভয় পাওয়ার কারণে আল্লাহ থেকে দূরে নয়। সে ঠিক সেখানেই দাঁড়িয়ে, যেখানে মূসা (আঃ) দাঁড়িয়েছিলেন, আর সেই একই নৈকট্য তার সামনেও খোলা। হাদীসের দাওয়াই বানানো আত্মবিশ্বাস নয়, আল্লাহকে স্মরণ করা, কারণ সেই স্মরণের ভেতরেই তাঁর সঙ্গ থাকার ওয়াদা, আর সেখানেই তা পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying Fear to God",
          "bn": "ভয় নিয়ে আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "The lesson sits close to the surface. When you are called to something right and hard, and fear rises, you have Mūsā's example: do not perform a fearlessness you do not feel, and do not let the fear talk you out of the task. Name it to God plainly, and ask, as concretely as Mūsā (AS) did, for the particular help that would let you go. His fear did not disqualify him. His honesty about it opened the door to the support that carried him through.",
            "bn": "শিক্ষাটা একদম উপরিতলে। সঠিক অথচ কঠিন কোনো কাজের ডাক এলে আর ভয় জাগলে, আপনার সামনে মূসা (আঃ)-এর নমুনা: যে নির্ভয়তা আপনি অনুভব করেন না তার অভিনয় করবেন না, আবার ভয়কে দিয়ে কাজ থেকে নিজেকে সরিয়ে নিতেও দেবেন না। আল্লাহকে সাফ বলুন, আর মূসা (আঃ)-এর মতোই নির্দিষ্ট করে চান সেই সাহায্য, যা আপনাকে এগিয়ে যেতে দেবে। তাঁর ভয় তাঁকে অযোগ্য করেনি। ভয় নিয়ে তাঁর সততাই সেই সহায়ের দরজা খুলে দিয়েছিল, যা তাঁকে পার করে নিয়ে গেছে।"
          },
          {
            "en": "And notice how God met him: not with rebuke, but with kallā and I am with you. That is the answer to expect. We do not go to God with our fears to be shamed for having them; we go to be strengthened and accompanied. Whoever takes his fear to his Lord walks out of the encounter not fearless, but no longer alone.",
            "bn": "আর খেয়াল করুন আল্লাহ তাঁকে কীভাবে জবাব দিলেন: তিরস্কারে নয়, কাল্লা আর আমি তোমাদের সঙ্গে আছি বলে। এমন জবাবেরই আশা রাখুন। আমরা ভয় নিয়ে আল্লাহর কাছে যাই না লজ্জা পেতে; যাই শক্তি আর সঙ্গ পেতে। যে নিজের ভয় রবের কাছে নিয়ে যায়, সে ওই সাক্ষাৎ থেকে বেরিয়ে আসে নির্ভয় হয়ে নয়, কিন্তু আর একা নয়।"
          },
          {
            "en": "The surrounding verses name Pharaoh's people as wrongdoers, and the Qur'an is describing a specific tyrant and his court at a specific moment in history. It condemns that tyranny; it licenses nothing against any living person or community today. The verse's work is inward: it teaches how a servant carries fear to God, not how to look upon any neighbour.",
            "bn": "এ আয়াতের আশপাশের আয়াতগুলো ফেরাউনের সম্প্রদায়কে যালিম বলে ডাকে, আর কুরআন এখানে ইতিহাসের এক নির্দিষ্ট সময়ের এক নির্দিষ্ট স্বৈরাচার ও তার দরবারের কথা বলছে। তা ওই জুলুমকে ধিক্কার দেয়, আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আয়াতের কাজ অন্তরের ভেতরে: এক বান্দা কীভাবে ভয় আল্লাহর কাছে নিয়ে যায় তা শেখায়, কোনো প্রতিবেশীকে কীভাবে দেখতে হবে তা নয়।"
          }
        ]
      }
    ]
  },
  "26:22": {
    "sections": [
      {
        "h": {
          "en": "Turning the Reminder Back",
          "bn": "খোঁটাটা ফিরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "Pharaoh has laid out two charges. Did we not raise you among us as a child, and did you not stay years in our house (26:18); and then you did the deed you did, the killing, and you were of the ungrateful (26:19). Ma'arif al-Qur'an reads these as an old debating trick: when an opponent lacks a real argument, he turns the talk onto the person of the addressee, to shame him before the crowd. Musa (AS) answers the killing first, owning it plainly, then turns to the favour Pharaoh keeps pressing.",
            "bn": "ফেরাউন দুটি অভিযোগ সামনে রেখেছে। আমরা কি তোমাকে শিশুকালে আমাদের মধ্যে লালন করিনি, আর তুমি কি আমাদের ঘরে বছরের পর বছর কাটাওনি (২৬:১৮)? তারপর তুমি তোমার সেই কাজটা করেছ, সেই হত্যা, আর তুমি ছিলে অকৃতজ্ঞদের একজন (২৬:১৯)। মাআরিফুল কুরআন এগুলোকে পুরনো এক তর্কের কৌশল হিসেবে পড়ে। প্রতিপক্ষের হাতে যখন আসল যুক্তি থাকে না, তখন সে কথা ঘুরিয়ে মানুষটার দিকে নিয়ে যায়, ভিড়ের সামনে তাকে ছোট করতে। মূসা (আঃ) আগে হত্যার জবাব দেন, সোজাসুজি তা মেনে নিয়ে, তারপর ফেরাউনের বারবার তোলা অনুগ্রহের দিকে ফেরেন।"
          },
          {
            "en": "Verse 26:22 is that turn. And is that a favour you hold over me, that you enslaved the Children of Israel? Ma'arif spells out the logic. Musa (AS), an Israelite child, had no natural road into the royal palace. It was Pharaoh's own cruelty that drove his mother to set him on the river; the very boy Pharaoh feared was raised, by God's arrangement, in Pharaoh's own house. So the upbringing was a by-product of the tyranny, and Musa (AS) invites Pharaoh to ask whether that is truly a gift at all.",
            "bn": "২৬:২২ আয়াতটাই সেই মোড়। আর এটা কি এমন অনুগ্রহ যার খোঁটা তুমি আমাকে দিচ্ছ, যে তুমি বনী ইসরাঈলকে দাস বানিয়েছ? মাআরিফ যুক্তির সুতোটা খুলে বলে। মূসা (আঃ) ছিলেন এক বনী ইসরাঈলি শিশু, রাজপ্রাসাদে পৌঁছানোর স্বাভাবিক কোনো পথ তাঁর ছিল না। ফেরাউনের নিজের নিষ্ঠুরতাই তাঁর মাকে বাধ্য করেছিল সন্তানকে নদীতে ভাসিয়ে দিতে। যে শিশুকে ফেরাউন ভয় পেত, আল্লাহর ব্যবস্থায় সেই শিশুই বড় হলো ফেরাউনের ঘরেই। কাজেই এই লালনপালন ছিল সেই জুলুমেরই একটা উপজাত, আর মূসা (আঃ) ফেরাউনকে ভাবতে বলছেন এটা আদৌ কোনো দান কিনা।"
          },
          {
            "en": "The order matters. Ma'arif notes that Musa (AS) reversed Pharaoh's sequence, answering the accusation of the killing before the boast about the upbringing. Rather than dodge the weaker point, he took it head on, admitting the misjudgement while making clear he had never meant to kill, and that the deed does not touch the truth of his prophethood. Only then does he lift his eyes to the larger matter, the fate of a whole people, which is exactly where the words of 26:22 land.",
            "bn": "ক্রম এখানে গুরুত্বপূর্ণ। মাআরিফ বলে, মূসা (আঃ) ফেরাউনের সাজানো ক্রম উল্টে দিয়েছেন, লালনপালনের খোঁটার আগে হত্যার অভিযোগের জবাব দিয়েছেন। দুর্বল দিকটা এড়িয়ে না গিয়ে তিনি তা সোজা মোকাবিলা করেছেন। তিনি ভুলটা স্বীকার করেছেন, তবে স্পষ্ট করেছেন যে হত্যার ইচ্ছা তাঁর কখনো ছিল না, আর এই কাজ তাঁর নবুয়ত সত্য হওয়ায় কোনো দাগ ফেলে না। এরপরই তিনি চোখ তোলেন বড় বিষয়টির দিকে, গোটা একটা জাতির ভাগ্যের দিকে, আর ২৬:২২ আয়াতের কথাগুলো ঠিক সেখানেই এসে থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Enslaves",
          "bn": "যে ক্রিয়া দাস বানায়"
        },
        "p": [
          {
            "en": "The whole charge sits in one verb: 'abbadta, you enslaved, from the sense of taking a people as 'abid, owned chattels. At-Tabari glosses it through the early readings. Mujahid says it means you subdued them and put them to work; Ibn Jurayj, you subdued, overpowered and used them. This is not one household's servants but a whole nation driven into forced labour. Al-Baghawi adds the other half that Pharaoh never mentions: the enslaving came bound together with the killing of their sons.",
            "bn": "গোটা অভিযোগটা একটা ক্রিয়ার ভেতরে বসে আছে: আব্বাদতা, তুমি দাস বানিয়েছ, অর্থাৎ একটা জাতিকে আবীদ, মালিকানাধীন সম্পদ বানিয়ে নেওয়া। তাবারী আদি বর্ণনাগুলো দিয়ে এর ব্যাখ্যা দেন। মুজাহিদ বলেন এর মানে তুমি তাদের দমিয়ে রেখে খাটিয়েছ; ইবন জুরাইজ বলেন তুমি তাদের দমিয়েছ, পরাভূত করেছ আর খাটিয়েছ। এ তো এক ঘরের চাকর নয়, গোটা একটা জাতিকে বাধ্যতামূলক শ্রমে নামিয়ে আনা। বাগাভী সেই অন্য অর্ধেকটা যোগ করেন যা ফেরাউন কখনো মুখে আনে না: এই দাস বানানোর সঙ্গে জড়িয়ে ছিল তাদের ছেলেদের হত্যা।"
          },
          {
            "en": "al-Muyassar draws the full picture into the verse: you count that upbringing in your house a favour, while you made the Children of Israel slaves, slaughtering their sons and sparing their women. Ma'arif carries the scale the commentators keep in view, on al-Qurtubi's authority: a people held in bondage for generations, a vast multitude, kept from returning to their own land. Against all that, one boy spared is not generosity; it is the single splinter the crime happened to throw off.",
            "bn": "মুয়াসসার পুরো ছবিটা আয়াতের ভেতরে টেনে আনে: তোমার ঘরের সেই লালনপালনকে তুমি আমার প্রতি অনুগ্রহ গণ্য করছ, অথচ তুমি বনী ইসরাঈলকে দাস বানিয়েছ, তাদের ছেলেদের জবাই করছ আর মেয়েদের বাঁচিয়ে রাখছ। মাআরিফ কুরতুবীর সূত্রে সেই বিশালতার কথা রাখে যা তাফসীরকারেরা চোখের সামনে রাখেন: প্রজন্মের পর প্রজন্ম দাসত্বে আটকে থাকা এক জাতি, বিশাল এক জনগোষ্ঠী, নিজেদের দেশে ফিরতে না পারা। এসবের বিপরীতে একটা ছেলেকে রেহাই দেওয়া দয়া নয়; ওই অপরাধেরই ছিটকে পড়া একটামাত্র টুকরো।"
          },
          {
            "en": "The lexicographers behind at-Tabari and al-Baghawi note that this one act is named with several near-synonyms, 'abbada, a'bada and ista'bada, all meaning to take a person as an owned slave. The Qur'an does not soften it into service or employment. It names ownership of human beings, of the kind that lets a ruler slaughter their infants at will, and it is exactly this that Musa (AS) refuses to accept as the ground of any favour whatsoever.",
            "bn": "তাবারী ও বাগাভীর পেছনের ভাষাবিদরা লক্ষ করেন যে এই একই কাজকে কয়েকটা কাছাকাছি শব্দে বলা হয়: আব্বাদা, আ'বাদা আর ইসতা'বাদা, সবগুলোরই মানে কাউকে মালিকানাধীন দাস বানিয়ে নেওয়া। কুরআন একে সেবা বা চাকরিতে নরম করে আনে না। এ নাম দেয় মানুষের ওপর মালিকানার, এমন মালিকানা যা একজন শাসককে ইচ্ছেমতো তাদের শিশুদের জবাই করতে দেয়। ঠিক এটাকেই মূসা (আঃ) কোনো অনুগ্রহেরই ভিত্তি হিসেবে মেনে নিতে অস্বীকার করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift the Crime Made",
          "bn": "যে দান অপরাধেরই ফসল"
        },
        "p": [
          {
            "en": "Here the commentators press the causal chain. Al-Baghawi puts it in Musa's mouth: by enslaving the Children of Israel and killing their children, you left me with no family to raise me, so I was handed over to you; had you not enslaved and killed them, my own people would have reared me and never cast me into the river, so what favour do you hold over me? The palace, on this reading, was the wound's own doing.",
            "bn": "এখানে তাফসীরকারেরা কার্যকারণের সুতোটায় চাপ দেন। বাগাভী কথাটা মূসা (আঃ)-এর মুখে বসিয়ে দেন: বনী ইসরাঈলকে দাস বানিয়ে আর তাদের সন্তানদের মেরে তুমি আমাকে লালন করার মতো কোনো পরিবার রাখোনি, তাই আমাকে তোমার হাতে তুলে দেওয়া হয়েছিল। তুমি যদি তাদের দাস না বানাতে আর না মারতে, আমার নিজের লোকেরাই আমাকে বড় করত, কখনো আমাকে নদীতে ফেলত না। তাহলে আমার ওপর তোমার অনুগ্রহটা কোথায়? এই পড়ায় প্রাসাদ ছিল সেই ক্ষতেরই নিজের হাতের কাজ।"
          },
          {
            "en": "Ad-Dahhak, in al-Qurtubi's report, reads the line as rebuke: had you not killed the Children of Israel, my own parents would have raised me, so what favour is yours, that you hold over me what you had no right to hold? Al-Qurtubi adds a second edge that several commentators sound: how do you count the upbringing a kindness when you have humiliated my people? Whoever's people are abased is himself abased. The private gift cannot be lifted clear of the public wrong.",
            "bn": "কুরতুবীর বর্ণনায় দাহহাক লাইনটাকে ভর্ৎসনা হিসেবে পড়েন: তুমি যদি বনী ইসরাঈলকে না মারতে, আমার নিজের বাবা-মা-ই আমাকে বড় করতেন; তাহলে তোমার অনুগ্রহটা কী, যে তুমি এমন কিছুর খোঁটা দিচ্ছ যা দেওয়ার কোনো অধিকারই তোমার ছিল না? কুরতুবী আরেকটা ধার যোগ করেন যা কয়েকজন তাফসীরকার তোলেন: তুমি লালনপালনকে দয়া গণ্য করছ কী করে, যখন তুমি আমার জাতিকে অপমান করেছ? যার জাতি লাঞ্ছিত, সে নিজেও লাঞ্ছিত। ব্যক্তিগত দানকে জনসমক্ষের এই অন্যায় থেকে আলাদা করে তোলা যায় না।"
          },
          {
            "en": "Al-Baghawi gathers a further sense that some give the line: you hold the upbringing over me and forget your own crime against the Children of Israel, the enslavement and the ugly dealings. On this reading the reminder is not merely outweighed; it is disqualified, because it rests on the very oppression it is meant to excuse. A benefit that could exist only because a wrong was done cannot then be produced as evidence of goodness.",
            "bn": "বাগাভী লাইনটার আরেকটা অর্থও জড়ো করেন যা কেউ কেউ দেন: তুমি লালনপালনের খোঁটা দিচ্ছ, আর ভুলে যাচ্ছ বনী ইসরাঈলের ওপর তোমার নিজের অপরাধ, সেই দাসত্ব আর কুৎসিত আচরণ। এই পড়ায় খোঁটাটা শুধু হালকা হয়ে যায় না, একেবারে বাতিল হয়ে যায়, কারণ যে জুলুমকে সে ঢাকতে চায়, তারই ওপর দাঁড়িয়ে সে খোঁটা। যে সুবিধা কেবল একটা অন্যায়ের কারণেই থাকতে পারত, তাকে পরে ভালোত্বের প্রমাণ হিসেবে হাজির করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Conceded, or Denied?",
          "bn": "মেনে নেওয়া, নাকি অস্বীকার"
        },
        "p": [
          {
            "en": "The commentators divide on how the retort works, and the division is worth keeping open. On one reading it is acknowledgement. As-Suddi, at-Tabari and al-Farra', in al-Qurtubi's account, take Musa (AS) to grant that the upbringing was a favour, in that Pharaoh enslaved others and left him free, yet to add at once that a favour repels nothing of his messengership. An elided clause carries it, at-Tabari notes: that is a favour, that you enslaved them and left me un-enslaved.",
            "bn": "খোঁটাটা কীভাবে কাজ করছে, তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান, আর এই ভাগটা খোলা রাখাই ভালো। এক পড়ায় এটা স্বীকারোক্তি। কুরতুবীর বিবরণে সুদ্দী, তাবারী আর ফাররা মূসা (আঃ)-কে এভাবে বোঝেন: তিনি মেনে নিচ্ছেন যে লালনপালন একটা অনুগ্রহ ছিল, এ অর্থে যে ফেরাউন অন্যদের দাস বানিয়ে তাঁকে ছেড়ে দিয়েছিল, তবে সঙ্গে সঙ্গে বলছেন যে কোনো অনুগ্রহই তাঁর রিসালাতকে ঠেকাতে পারে না। তাবারী বলেন, একটা উহ্য বাক্য এ অর্থ বহন করে: এই সেই অনুগ্রহ, যে তুমি তাদের দাস বানিয়ে আমাকে দাস বানাওনি।"
          },
          {
            "en": "On the other reading it is denial. Qatada, in both at-Tabari and al-Qurtubi, hears a question with the force of refusal: do you hold it over me as a favour that you took a people as slaves? It is no favour at all. Al-Akhfash and al-Farra' would supply a dropped interrogative alif, reading is that a favour?; an-Nahhas rejected that grammar, since dropping the questioning hamza with no am to mark it is, he held, not allowed. At-Tabari records both grammatical readings of that you enslaved, one tying it to the boast and one setting it in apposition to the favour itself.",
            "bn": "অন্য পড়ায় এটা অস্বীকার। তাবারী আর কুরতুবী দুজনের বর্ণনাতেই কাতাদা এতে প্রত্যাখ্যানের ঝোঁকসহ একটা প্রশ্ন শোনেন: একটা জাতিকে দাস বানিয়েছ বলে কি তুমি আমার ওপর অনুগ্রহের খোঁটা দিচ্ছ? এ তো অনুগ্রহই নয়। আখফাশ আর ফাররা এখানে একটা লোপ পাওয়া প্রশ্নবোধক আলিফ ধরে নেন, পড়েন এটা কি অনুগ্রহ। নাহহাস সেই ব্যাকরণ নাকচ করেন, কারণ আম দিয়ে চিহ্নিত না করে প্রশ্নের হামযা লোপ করা তাঁর মতে জায়েজ নয়। যে তুমি দাস বানিয়েছ অংশটির দুই রকম ব্যাকরণগত পড়াই তাবারী নথিভুক্ত করেন, একটা তাকে খোঁটার সঙ্গে বাঁধে, আরেকটা তাকে অনুগ্রহেরই সমার্থক করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man, a Nation",
          "bn": "একজন মানুষ, গোটা জাতি"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the moral arithmetic sharply. You did good to me and raised me, he has Musa (AS) say, set against the evil you did to the Children of Israel, whom you made slaves and servants, driving them in your labours and hardships. Does your kindness to one man of them make up for the evil you did to the whole of them? What you have named is nothing beside what you did to them. The ledger will not net a crime against a people down to one private debt.",
            "bn": "ইবন কাসীর নৈতিক হিসাবটা তীক্ষ্ণভাবে টানেন। মূসা (আঃ)-এর মুখে তিনি বসান: তুমি আমার উপকার করেছ, আমাকে বড় করেছ, আর তার বিপরীতে বনী ইসরাঈলের সঙ্গে যে মন্দ করেছ, যাদের দাস ও চাকর বানিয়েছ, তোমার কঠিন কাজে খাটিয়েছ। তাদের একজন মানুষের প্রতি তোমার দয়া কি তাদের সবার প্রতি করা মন্দকে পুষিয়ে দেয়? তুমি যা বললে তা তো তাদের প্রতি করা কাজের তুলনায় কিছুই নয়। খাতা কখনো একটা জাতির ওপর করা অপরাধকে কমিয়ে একটা ব্যক্তিগত ঋণে নামিয়ে আনবে না।"
          },
          {
            "en": "As-Sa'di turns the same point inward, to what reflection uncovers. You extend this favour, he reads, because you subjected the Children of Israel and made them like slaves to you, while sparing me from your bondage and calling that a kindness. But once it is seen clearly, the truth is that you wronged a noble people, tortured them and drove them in your works, while God delivered me from your harm even as your harm reached my own people. So what is this favour you keep flaunting?",
            "bn": "সাদী একই কথা ভেতরের দিকে ঘোরান, যা চিন্তা করলে বেরিয়ে আসে। তিনি এভাবে পড়েন: তুমি এই অনুগ্রহের খোঁটা দিচ্ছ কারণ তুমি বনী ইসরাঈলকে বশে এনে তোমার কাছে দাসের মতো বানিয়েছ, আর আমাকে তোমার দাসত্ব থেকে রেহাই দিয়ে সেটাকে দয়া বলছ। কিন্তু একবার পরিষ্কার করে দেখলে সত্যটা এই যে, তুমি এক সম্মানিত জাতির ওপর জুলুম করেছ, তাদের কষ্ট দিয়েছ আর নিজের কাজে খাটিয়েছ, অথচ আল্লাহ আমাকে তোমার ক্ষতি থেকে বাঁচিয়েছেন, যদিও তোমার ক্ষতি আমার নিজের জাতির কাছে পৌঁছেছে। তাহলে এই যে অনুগ্রহের বড়াই বারবার করছ, তা কী?"
          }
        ]
      },
      {
        "h": {
          "en": "Truth to a Tyrant",
          "bn": "জালিমের সামনে সত্য বলা"
        },
        "p": [
          {
            "en": "No commentator here attaches a hadith to 26:22, so what follows is a general narration, brought for its theme and not as a comment on the verse. At-Tirmidhi records from Abu Sa'id al-Khudri that the Prophet said, \"Indeed, among the greatest kinds of jihad is a just word before a tyrannical ruler.\" At-Tirmidhi graded it hasan gharib; Abu Dawud carries the same report in his own wording. Its grade is not to be lifted beyond what the collector himself gave it.",
            "bn": "এখানে কোনো তাফসীরকার ২৬:২২-এর সঙ্গে কোনো হাদীস জোড়েন না, তাই যা আসছে তা একটা সাধারণ বর্ণনা, বিষয়ের জন্য আনা, আয়াতের ব্যাখ্যা হিসেবে নয়। তিরমিযী আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, ‘নিশ্চয়ই সবচেয়ে বড় জিহাদগুলোর একটি হলো জালিম শাসকের সামনে ন্যায়ের কথা বলা।’ তিরমিযী একে হাসান গারীব বলেছেন; আবু দাউদ একই বর্ণনা নিজের শব্দে এনেছেন। এর মান বর্ণনাকারী নিজে যা দিয়েছেন তার চেয়ে বাড়ানো যাবে না।"
          },
          {
            "en": "The narration lights up what Musa (AS) is doing. Ma'arif calls his answer a model of prophetic dialectic: he does not camouflage his own weakness, taking up the killing first and owning it, then he speaks the plain truth about the enslavement to the tyrant's face, in a packed court, with no third man beside him to lend support. A just word before an unjust throne is here not a slogan but a scene, and the verse is its record.",
            "bn": "এই বর্ণনা মূসা (আঃ) যা করছেন তা আলোকিত করে। মাআরিফ তাঁর জবাবকে নববী তর্কপদ্ধতির নমুনা বলে: তিনি নিজের দুর্বলতা ঢাকেন না, আগে হত্যার প্রসঙ্গ তুলে তা স্বীকার করেন, তারপর জালিমের মুখের ওপর, ভরা দরবারে, পাশে সমর্থন জোগানোর মতো তৃতীয় কোনো লোক ছাড়াই দাসত্বের বিষয়ে খাঁটি সত্য বলেন। জালিম সিংহাসনের সামনে একটা ন্যায়ের কথা এখানে কোনো স্লোগান নয়, একটা দৃশ্য, আর আয়াতটি তারই দলিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Withholds",
          "bn": "যে ছাড়পত্র এ দেয় না"
        },
        "p": [
          {
            "en": "This must be said plainly, in both languages. The verse names a real and terrible wrong: Pharaoh enslaved a whole people and killed their sons, and this article stands, as the verse does, with the enslaved and against the tyrant. But Pharaoh is a particular named tyrant of the Qur'an, and describing his crime is not a charge against anyone alive. The verse licenses nothing against any living person or community, of any origin or faith, today.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই ভাষাতেই। আয়াতটি একটা সত্যিকারের ভয়াবহ অন্যায়ের নাম নেয়: ফেরাউন গোটা একটা জাতিকে দাস বানিয়েছিল আর তাদের ছেলেদের মেরেছিল। আয়াতটি যেমন দাঁড়ায়, এই লেখাও তেমনি দাঁড়ায় দাসে পরিণত মানুষগুলোর পক্ষে আর জালিমের বিপক্ষে। কিন্তু ফেরাউন কুরআনের এক নির্দিষ্ট নামধারী জালিম, আর তার অপরাধের বর্ণনা আজ বেঁচে থাকা কারও বিরুদ্ধে কোনো অভিযোগ নয়। এ আয়াত আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে, যে বংশ বা ধর্মেরই হোক, কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Held to its own words, the line does the opposite of arming contempt. It refuses to let a powerful man launder oppression by pointing to a single act of care; it puts the humiliated people, not the ruler's self-image, at the centre. Read as Musa (AS) spoke it, it is a warning to the strong about how they treat the weak, and a caution to the rest of us not to let a display of generosity settle a live question of justice.",
            "bn": "নিজের কথাগুলোর মধ্যে ধরে রাখলে লাইনটা ঘৃণাকে অস্ত্র জোগানোর উল্টো কাজ করে। এটা এক ক্ষমতাবানকে জুলুম ধুয়ে ফেলতে দেয় না একটামাত্র যত্নের কাজ দেখিয়ে; এটা শাসকের নিজের ভাবমূর্তি নয়, বরং লাঞ্ছিত জাতিকে কেন্দ্রে বসায়। মূসা (আঃ) যেভাবে বলেছেন সেভাবে পড়লে এটা শক্তিশালীদের জন্য এক সতর্কবার্তা, দুর্বলের সঙ্গে তারা কেমন আচরণ করে তা নিয়ে; আর আমাদের বাকিদের জন্য এক হুঁশিয়ারি, ন্যায়ের জীবন্ত প্রশ্নকে দয়ার প্রদর্শনী দিয়ে যেন মিটতে না দিই।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Favour Silences",
          "bn": "অনুগ্রহ যখন মুখ বন্ধ করে"
        },
        "p": [
          {
            "en": "The verse hands the reader a test that outlives its setting. People with power over us often reach, just as Pharaoh did, for a past kindness the moment their conduct is questioned: after all we did for you, how can you speak? The move works by shifting the subject away from the wrong and onto the debt. Musa (AS) neither denies the kindness nor lets it govern him; he sets it back inside the frame of the wrong that produced it.",
            "bn": "আয়াতটি পাঠকের হাতে এমন এক পরীক্ষা তুলে দেয় যা তার প্রেক্ষাপট পেরিয়ে টেকে। আমাদের ওপর যাদের ক্ষমতা আছে, তারা ফেরাউনের মতোই প্রায়ই একটা পুরনো দয়ার কথা টেনে আনে যেই তাদের আচরণ নিয়ে প্রশ্ন ওঠে: তোমার জন্য এত কিছু করার পরও তুমি মুখ খুলছ কী করে? চালটা কাজ করে অন্যায় থেকে আলোচনাটাকে সরিয়ে ঋণের দিকে নিয়ে গিয়ে। মূসা (আঃ) দয়াটা অস্বীকারও করেন না, তাকে নিজের ওপর কর্তৃত্বও করতে দেন না; তিনি সেটাকে আবার সেই অন্যায়ের কাঠামোয় বসিয়ে দেন যা তাকে জন্ম দিয়েছিল।"
          },
          {
            "en": "For us the discipline runs two ways. Where we owe a real debt of gratitude, we honour it, and we do not become people who hold our own gifts over others to win an argument. But where a favour, genuine or merely claimed, is being used to buy our silence about an injustice, the verse tells us to keep the injustice in full view. A gift does not settle a wrong, and a reminder of the gift is not an answer to it.",
            "bn": "আমাদের জন্য এই অনুশীলন দুই দিকে চলে। যেখানে আমাদের ওপর সত্যিকারের কৃতজ্ঞতার ঋণ আছে, সেখানে আমরা তা মেনে চলি, আর এমন মানুষ হই না যারা তর্কে জিততে নিজেদের দান অন্যের ওপর খোঁটা হিসেবে চাপায়। কিন্তু যেখানে কোনো অনুগ্রহ, সত্যি হোক বা কেবল দাবি, কোনো অন্যায় নিয়ে আমাদের মুখ বন্ধ কেনার কাজে লাগানো হচ্ছে, সেখানে আয়াতটি বলে অন্যায়টাকে পুরোপুরি চোখের সামনে রাখতে। দান কোনো অন্যায় মেটায় না, আর সেই দানের কথা মনে করিয়ে দেওয়া তার কোনো জবাবও নয়।"
          },
          {
            "en": "Scale it up, and the same eye still serves. Comforts we enjoy sometimes rest on someone else's hidden hardship, as one child's palace rested on a nation's chains. The verse does not ask us to despise every gift, but to know where it came from, and to refuse the trade in which a visible kindness is offered so that an invisible wrong may go unspoken. Musa (AS) took the gift's true measure; the verse asks us to take ours.",
            "bn": "মাপটা বড় করলেও একই দৃষ্টি এখনো কাজে লাগে। আমরা যে আরাম ভোগ করি তা কখনো কখনো অন্য কারও লুকানো কষ্টের ওপর দাঁড়িয়ে থাকে, যেমন একটা শিশুর প্রাসাদ দাঁড়িয়ে ছিল একটা জাতির শিকলের ওপর। আয়াতটি প্রতিটি দানকে ঘৃণা করতে বলে না, বরং জানতে বলে তা কোথা থেকে এলো, আর সেই লেনদেন প্রত্যাখ্যান করতে বলে যেখানে একটা দৃশ্যমান দয়া এজন্য দেওয়া হয় যাতে একটা অদৃশ্য অন্যায় মুখ বুজে থাকে। মূসা (আঃ) দানের আসল মাপটা নিয়েছিলেন; আয়াতটি আমাদেরও নিজেদেরটা নিতে বলে।"
          }
        ]
      }
    ]
  },
  "26:26": {
    "sections": [
      {
        "h": {
          "en": "The Third Answer",
          "bn": "তৃতীয়বারের জবাব"
        },
        "p": [
          {
            "en": "The court has already heard two answers. When Pharaoh asked, 'And what is the Lord of the worlds?' (26:23), Mūsā answered that He is the Lord of the heavens and the earth and all that lies between them (26:24). Pharaoh did not argue; he turned to the chiefs around him and said, as if amused, 'Do you not hear?' (26:25). It is into that mockery that the third answer falls (26:26). Mūsā does not repeat the cosmos; he points at the men in the room and the graves behind them.",
            "bn": "দরবার এর মধ্যেই দুটি জবাব শুনে ফেলেছে। ফেরাউন যখন জিজ্ঞেস করল, ‘বিশ্বজগতের রব আবার কী?’ (২৬:২৩), মূসা (আঃ) বললেন, তিনি আসমান, জমিন আর এ দুইয়ের মাঝে যা কিছু আছে সবের রব (২৬:২৪)। ফেরাউন তর্কে গেল না। সে তার আশপাশের সর্দারদের দিকে ফিরে যেন মজা করে বলল, ‘তোমরা শুনছ তো?’ (২৬:২৫)। সেই টিটকারির মধ্যেই আসে তৃতীয় জবাবটি (২৬:২৬)। মূসা (আঃ) আকাশ-জমিনের কথা আর নতুন করে বলেন না। তিনি বরং আঙুল তোলেন ঘরের মানুষগুলোর দিকে আর তাদের পেছনের কবরগুলোর দিকে।"
          },
          {
            "en": "Ibn Kathir explains why the question in 26:23 was never innocent. Pharaoh had told his people, 'I know of no god for you other than me' (28:28); he denied the Creator outright and held that his people had no lord but himself. So when Mūsā spoke of the Lord of the worlds, Pharaoh was not asking after God's nature but refusing that any such Lord exists. Against that refusal, 26:26 offers not a definition but a witness the court cannot deny: their own fathers.",
            "bn": "কেন ২৬:২৩-এর প্রশ্নটি কখনোই সরল ছিল না, ইবন কাসীর তা বুঝিয়ে দেন। ফেরাউন তার জাতিকে বলেছিল, ‘আমি ছাড়া তোমাদের আর কোনো ইলাহ আছে বলে আমি জানি না’ (২৮:২৮)। সে স্রষ্টাকে একেবারেই অস্বীকার করত, আর মনে করত তার জাতির রব সে নিজে ছাড়া আর কেউ নয়। তাই মূসা (আঃ) যখন বিশ্বজগতের রবের কথা বললেন, ফেরাউন আল্লাহর স্বরূপ জানতে চাইছিল না, বরং এমন কোনো রবের অস্তিত্বই অস্বীকার করছিল। সেই অস্বীকারের মুখে ২৬:২৬ কোনো সংজ্ঞা দেয় না, দেয় এমন এক সাক্ষী যাকে দরবার অস্বীকার করতে পারে না, তাদের নিজেদের বাপ-দাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Lord, and Your Fathers'",
          "bn": "তোমাদের ও বাপ-দাদার রব"
        },
        "p": [
          {
            "en": "The words themselves are spare: rabbukum wa-rabbu ābāʾikum al-awwalīn, 'your Lord and the Lord of your first forefathers.' Ibn Kathir reads them as a single plain claim: He is the One who created you and created your forefathers, those who lived and died before Pharaoh and before his age. The sentence sets the living listeners and their long-dead ancestors on exactly the same footing. Both were made; both belong to the same Maker. No throne stands outside that list.",
            "bn": "শব্দগুলো নিজেই খুব সংক্ষিপ্ত: রব্বুকুম ওয়া রব্বু আবাইকুমুল আউয়ালীন, ‘তোমাদের রব আর তোমাদের পূর্ববর্তী বাপ-দাদাদেরও রব।’ ইবন কাসীর একে একটিমাত্র সরল দাবি হিসেবে পড়েন: তিনিই সেই সত্তা, যিনি তোমাদের গড়েছেন আর গড়েছেন তোমাদের বাপ-দাদাদেরও, যারা ফেরাউনের আগে, তার যুগের আগেই বেঁচেছে আর মরেছে। বাক্যটি জীবিত শ্রোতা আর তাদের বহুকাল আগে মরে যাওয়া পূর্বপুরুষদের ঠিক একই কাতারে দাঁড় করিয়ে দেয়। দুইই সৃষ্ট, দুইয়েরই স্রষ্টা একজন। সেই তালিকার বাইরে কোনো সিংহাসন নেই।"
          },
          {
            "en": "At-Tabari frames the same verse as the completion of Mūsā's invitation. The Lord I have called you to, and to whose worship I summon you, is your Lord, the One who created you, and the Lord of your first forefathers. What matters in his reading is the possessive: not a distant Lord of far-off worlds, but yours. Mūsā takes the vast answer he had just given about the heavens and narrows it to the one address that no listener in that hall could hold at arm's length: you, and the fathers you came from.",
            "bn": "একই আয়াতকে তাবারী মূসা (আঃ)-এর দাওয়াতের পূর্ণতা হিসেবে দেখান। আমি তোমাদের যে রবের দিকে ডাকছি, যাঁর ইবাদতের দিকে আহ্বান করছি, তিনিই তোমাদের রব, যিনি তোমাদের গড়েছেন, আর তিনিই তোমাদের পূর্ববর্তী বাপ-দাদাদের রব। তাঁর ব্যাখ্যায় আসল জোরটা মালিকানার শব্দে: দূরের কোনো জগতের অচেনা রব নন, বরং তোমাদেরই রব। আকাশ নিয়ে দেওয়া বিশাল জবাবটাকে মূসা (আঃ) নামিয়ে আনেন একটিমাত্র সম্বোধনে, যা ওই দরবারের কেউ দূরে ঠেলে রাখতে পারত না: তোমরা, আর যে বাপ-দাদা থেকে তোমরা এসেছ।"
          },
          {
            "en": "There is a reach in the word al-awwalīn, the first or earliest. Mūsā does not say merely 'your fathers'; he says the first of your fathers, sending the mind back past every remembered name to the very beginning of the line. However far a man traces his ancestry for honour, the trail ends not in a god but in a grave, and before that grave in a birth that someone else granted. Lineage, followed honestly to its source, does not crown a people. It humbles them before the One who began them.",
            "bn": "‘আল-আউয়ালীন’ শব্দটিতে একটা বিস্তার আছে, মানে প্রথম বা সবচেয়ে আগেকার। মূসা (আঃ) শুধু ‘তোমাদের বাপ-দাদা’ বলেন না, বলেন তোমাদের বাপ-দাদাদের মধ্যে প্রথমতমদের কথা। এতে মন ছুটে যায় মনে রাখা প্রতিটি নাম পেরিয়ে বংশধারার একেবারে শুরুতে। মানুষ সম্মানের জন্য যত দূরই নিজের বংশ টেনে নিয়ে যাক, পথটা গিয়ে থামে কোনো খোদার কাছে নয়, এক কবরের কাছে। আর সেই কবরের আগে থামে এমন এক জন্মে, যা অন্য কেউ দান করেছে। বংশ সৎভাবে তার উৎস পর্যন্ত অনুসরণ করলে তা কোনো জাতিকে মুকুট পরায় না। বরং যিনি তাদের শুরু করেছেন, তাঁর সামনে তাদের নত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Proof They Already Held",
          "bn": "যে প্রমাণ তারা জানত"
        },
        "p": [
          {
            "en": "Al-Qurtubi says Mūsā here added to the proof: he brought an argument the court could grasp from what they already knew. They knew they had fathers. They knew those fathers had perished. And they knew, therefore, that something must have brought them and taken them away, for people who once were not and then were must have a Cause behind their coming to be. The evidence is not imported from the sky; it is drawn from the family tree each of them could recite.",
            "bn": "কুরতুবী বলেন, মূসা (আঃ) এখানে প্রমাণে আরও কিছু যোগ করলেন: এমন এক যুক্তি আনলেন যা দরবার তাদের জানা জিনিস থেকেই বুঝতে পারে। তারা জানত, তাদের বাপ-দাদা ছিল। তারা জানত, সেই বাপ-দাদা মরে গেছে। তাই তারা এটাও জানত যে, কেউ না কেউ তাদের এনেছে আর নিয়ে গেছে। কারণ যারা একসময় ছিল না, তারপর হলো, তাদের হয়ে ওঠার পেছনে অবশ্যই একটা কারণ থাকতে হবে। প্রমাণটা আকাশ থেকে আমদানি করা নয়। তা টেনে আনা হয়েছে সেই বংশতালিকা থেকে, যা তাদের প্রত্যেকে মুখস্থ বলতে পারত।"
          },
          {
            "en": "Al-Qurtubi presses the same line further. Those fathers came to be after having been nothing, and whatever crosses from non-existence into existence must have One who brings it across; they also stand in need of something to change and move them from state to state. This is the plain argument from origination: a made thing points beyond itself to its Maker. Pharaoh's dead forefathers are, in this reading, a standing proof against Pharaoh's own claim, written in his people's memory before Mūsā ever spoke.",
            "bn": "কুরতুবী একই কথা আরও এগিয়ে নেন। সেই বাপ-দাদারা কিছুই ছিল না, তারপর হয়ে উঠল। আর যা অস্তিত্বহীনতা থেকে অস্তিত্বে পার হয়ে আসে, তাকে পার করানোর একজন থাকতেই হবে। তাদের এক অবস্থা থেকে আরেক অবস্থায় বদলে দেওয়ার, নাড়িয়ে দেওয়ার জন্যও কারও দরকার। এটাই সোজা কথায় সৃষ্টি হয়ে ওঠার যুক্তি: গড়া জিনিস নিজের বাইরে তার গড়নেওয়ালার দিকে ইশারা করে। এই পড়ায় ফেরাউনের মৃত বাপ-দাদারাই ফেরাউনের দাবির বিরুদ্ধে দাঁড়ানো এক প্রমাণ, যা মূসা (আঃ) মুখ খোলার আগেই তাদের জাতির স্মৃতিতে লেখা ছিল।"
          },
          {
            "en": "It is worth pausing on how ordinary the evidence is. Mūsā offers no vision and no wonder here; he offers a graveyard. Every generation buries the one before it and is buried by the one after, and that unbroken handing-down of life and death is itself the signature of a Lord who neither is born nor dies. A people can inherit land, names and pride from their fathers. The one thing they cannot inherit is lordship, because their fathers did not own it either.",
            "bn": "প্রমাণটা কত সাধারণ, সেখানে একটু থামা দরকার। মূসা (আঃ) এখানে কোনো স্বপ্ন বা বিস্ময় দেখান না, দেখান একটা কবরস্থান। প্রতিটি প্রজন্ম তার আগেরটিকে দাফন করে, আর পরেরটির হাতে দাফন হয়। জীবন আর মৃত্যুর এই অবিরাম হাতবদলই এমন এক রবের স্বাক্ষর, যিনি জন্মানও না, মরেনও না। মানুষ বাপ-দাদার কাছ থেকে জমি, নাম আর গর্ব উত্তরাধিকারে পেতে পারে। কিন্তু একটা জিনিস তারা কখনো উত্তরাধিকারে পায় না, তা হলো প্রভুত্ব। কারণ তাদের বাপ-দাদারাও তা নিজেদের বলে দাবি করতে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "The God with Dead Fathers",
          "bn": "মরে যাওয়া বাপ-দাদার দেবতা"
        },
        "p": [
          {
            "en": "Al-Muyassar draws out the sting that is only implied in the words. The Lord I call you to, it paraphrases, is the One who created you and created your forefathers, so how can you worship one who is himself created as you are, who has fathers that have perished as yours have? The question is aimed straight at the throne. Pharaoh set himself up as a god; yet Pharaoh was born, Pharaoh had a father, and Pharaoh's fathers were dust like any other man's.",
            "bn": "যে খোঁচাটা শব্দের ভেতরে শুধু ইঙ্গিতে আছে, মুয়াসসার তা টেনে বের করে আনে। এর ব্যাখ্যায়, আমি তোমাদের যে রবের দিকে ডাকছি তিনিই তোমাদের আর তোমাদের বাপ-দাদাদের সৃষ্টি করেছেন। তাহলে তোমরা এমন একজনের ইবাদত করো কী করে, যে নিজেই তোমাদের মতো সৃষ্ট, যার বাপ-দাদারা তোমাদেরই মতো মরে গেছে? প্রশ্নটা সোজা সিংহাসনের দিকে তাক করা। ফেরাউন নিজেকে খোদা বানিয়ে বসেছিল। অথচ ফেরাউনের জন্ম হয়েছিল, ফেরাউনের বাপ ছিল, আর ফেরাউনের বাপ-দাদারা আর দশজন মানুষের মতোই মাটি হয়ে গেছে।"
          },
          {
            "en": "Here the whole confrontation tilts. A being with ancestors in the ground cannot be the ground of everything else; a lord who was once a helpless infant cannot be the Lord who was never born. Pharaoh's power over Egypt was real, but power is not lordship. He could enslave the Children of Israel and bend a kingdom to his will, yet he could not make himself uncreated, and he could not raise a single one of his own fathers from the grave to prove his claim. The god of the court had a family plot.",
            "bn": "এখানেই গোটা লড়াইয়ের পাল্লা হেলে যায়। যার পূর্বপুরুষ মাটির নিচে, সে সবকিছুর ভিত্তি হতে পারে না। যে রব একসময় ছিল অসহায় এক শিশু, সে কখনো সেই রব হতে পারে না যিনি কোনোদিন জন্মাননি। মিসরের ওপর ফেরাউনের ক্ষমতা সত্যি ছিল, কিন্তু ক্ষমতা মানেই প্রভুত্ব নয়। সে বানী ইসরাঈলকে দাস বানাতে পেরেছে, গোটা রাজ্যকে নিজের ইশারায় নাচাতে পেরেছে। তবু সে নিজেকে অসৃষ্ট বানাতে পারেনি, আর নিজের দাবি প্রমাণ করতে বাপ-দাদাদের একজনকেও কবর থেকে তুলে আনতে পারেনি। দরবারের সেই খোদারও ছিল এক পারিবারিক কবর।"
          },
          {
            "en": "This is what the confession of one Lord means when it is set against a false one. It is not merely that God is greater than Pharaoh. It is that Pharaoh, forefathers and all, stands on the created side of a line he can never cross. A creature may be given a throne, an empire, even the worship of frightened men, and remain a creature to his last breath. Mūsā lets Pharaoh's own genealogy testify against that throne, and the testimony is unanswerable.",
            "bn": "মিথ্যা এক রবের বিপরীতে দাঁড় করালে একই রবের স্বীকৃতির মানে এটাই। ব্যাপারটা শুধু এই নয় যে আল্লাহ ফেরাউনের চেয়ে বড়। ব্যাপারটা এই যে ফেরাউন, তার বাপ-দাদাসহ, এমন এক সীমার সৃষ্ট পাশে দাঁড়িয়ে, যা সে কখনো পার হতে পারবে না। কোনো সৃষ্টিকে সিংহাসন দেওয়া যেতে পারে, সাম্রাজ্য দেওয়া যেতে পারে, এমনকি ভীত মানুষের ইবাদতও পেতে পারে, তবু শেষ নিঃশ্বাস পর্যন্ত সে সৃষ্টিই থেকে যায়। মূসা (আঃ) ফেরাউনের নিজের বংশধারাকেই সেই সিংহাসনের বিরুদ্ধে সাক্ষী বানিয়ে দেন, আর সেই সাক্ষ্যের কোনো জবাব নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "True Whether You Bow or Not",
          "bn": "তুমি মানো বা না মানো"
        },
        "p": [
          {
            "en": "As-Sa'di catches a note the other commentators pass over. Having stated 'your Lord and the Lord of your first forefathers,' Mūsā adds nothing to soften it, whether you marvel at it or not, as-Sa'di glosses, whether you grow arrogant or you yield. The truth of God's lordship is not put to a vote of the court. It does not become more true if Pharaoh accepts it or less true if he sneers. Mūsā states the fact and leaves the response where it belongs, with those who heard it.",
            "bn": "অন্য তাফসিরকারেরা যে সুরটা পেরিয়ে যান, সাদী তা ধরে ফেলেন। ‘তোমাদের রব আর তোমাদের পূর্ববর্তী বাপ-দাদার রব’ বলার পর মূসা (আঃ) তা নরম করতে আর কিছুই যোগ করেন না। সাদীর ভাষায়, তোমরা এতে বিস্মিত হও বা না হও, অহংকার করো বা মেনে নাও। আল্লাহর প্রভুত্বের সত্যতা দরবারের ভোটে ঠিক হয় না। ফেরাউন মানলে তা বেশি সত্য হয়ে যায় না, আর টিটকারি দিলে কম সত্য হয়ে যায় না। মূসা (আঃ) সত্যটা বলে দেন, আর জবাবটা যাদের, তাদের কাছেই ছেড়ে দেন, যারা তা শুনল।"
          },
          {
            "en": "There is a discipline in that for anyone who carries an unwelcome truth into a hostile room. Mūsā does not raise his voice, does not flatter the court, and does not trim the claim to make it easier to swallow. He says what is so and trusts it to stand on its own weight. A truth that needs the powerful to approve it before it counts was never being treated as truth at all, only as a bid for favour.",
            "bn": "প্রতিকূল ঘরে অপছন্দের সত্য নিয়ে ঢোকে যে কেউ, তার জন্য এতে একটা শিক্ষা আছে। মূসা (আঃ) গলা চড়ান না, দরবারকে তোষামোদ করেন না, আর গিলতে সহজ করতে দাবিটাকে ছেঁটেও ফেলেন না। যা সত্য তা তিনি বলে দেন, আর বিশ্বাস রাখেন যে তা নিজের ওজনেই দাঁড়িয়ে থাকবে। যে সত্যকে গোনায় ধরার আগে ক্ষমতাবানদের সায় লাগে, তাকে আসলে কখনো সত্য হিসেবেই দেখা হয়নি। দেখা হয়েছে তাদের অনুগ্রহ পাওয়ার একটা চেষ্টা হিসেবে।"
          },
          {
            "en": "For the reader, that changes what courage in speech looks like. It is not volume and it is not cleverness. It is the willingness to say the true thing and then fall silent, refusing to bargain it down when the room turns cold. Mūsā had already conceded his own past fault without flinching; he could therefore state God's lordship without needing anyone's leave. The man who owns his smallness is the one who can name the truth to a king.",
            "bn": "পাঠকের জন্য এতে কথায় সাহস মানে কী, তা বদলে যায়। সাহস মানে গলার জোর নয়, চালাকিও নয়। সাহস হলো সত্য কথাটা বলে দিয়ে চুপ করে যাওয়া, ঘর ঠান্ডা হয়ে গেলেও তা দরদাম করে কমাতে অস্বীকার করা। মূসা (আঃ) আগেই নিজের অতীত ভুল না কেঁপে মেনে নিয়েছিলেন। তাই কারও অনুমতির দরকার ছাড়াই তিনি আল্লাহর প্রভুত্ব ঘোষণা করতে পেরেছিলেন। যে মানুষ নিজের ক্ষুদ্রতা মেনে নেয়, সে-ই একজন রাজার সামনে সত্য বলতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "How a Messenger Argues",
          "bn": "রাসূল যেভাবে তর্ক করেন"
        },
        "p": [
          {
            "en": "Maʿarif al-Qurʾan steps back to name what kind of exchange this is. A prophet's debate is not the sport it has become in other hands, where the aim is to be seen to win even while knowing oneself to be wrong. Earlier in this same scene Mūsā had openly admitted his fault in the death of the Egyptian (26:20) rather than dress it up, and had turned Pharaoh's boast of favour into a charge about the enslaved (26:22). His argument serves the truth, not his standing.",
            "bn": "এটা কোন ধরনের বিতর্ক, মাআরিফুল কুরআন একটু পিছিয়ে গিয়ে তা চিনিয়ে দেয়। নবীর তর্ক অন্যদের হাতে যা হয়ে দাঁড়িয়েছে সেই খেলা নয়, যেখানে নিজে ভুল জেনেও জেতা দেখানোটাই লক্ষ্য। এই একই দৃশ্যের আগে মূসা (আঃ) মিসরীয়ের মৃত্যুতে নিজের ভুল খোলাখুলি স্বীকার করেছিলেন (২৬:২০), তা সাজিয়ে-গুছিয়ে ঢাকেননি। আর ফেরাউনের অনুগ্রহের বড়াইকে তিনি দাস বানানোর অভিযোগে ঘুরিয়ে দিয়েছিলেন (২৬:২২)। তাঁর যুক্তি সত্যের সেবা করে, নিজের মান বাড়ানোর নয়।"
          },
          {
            "en": "That is why his answer keeps returning the court to what they cannot deny. He does not demand they admire a distant heaven; he sets a mirror before them made of their own dead. A man who argues only to defeat you will reach for whatever wounds. A messenger who argues to save you keeps handing you the one fact you already carry and have refused to read. Mūsā's whole reply is an act of mercy wearing the shape of a rebuke.",
            "bn": "এ কারণেই তাঁর জবাব বারবার দরবারকে সেই দিকে ফিরিয়ে আনে, যা তারা অস্বীকার করতে পারে না। তিনি দূরের আসমানের প্রশংসা করতে বলেন না। তিনি তাদের সামনে ধরেন এমন এক আয়না, যা গড়া তাদেরই মৃতদের দিয়ে। যে মানুষ শুধু হারানোর জন্য তর্ক করে, সে আঘাত করার মতো যা পায় তা-ই তুলে নেয়। আর যে রাসূল বাঁচানোর জন্য তর্ক করেন, তিনি বারবার তুলে ধরেন সেই একটি সত্য, যা তুমি আগে থেকেই বহন করছ অথচ পড়তে অস্বীকার করেছ। মূসা (আঃ)-এর গোটা জবাব ভর্ৎসনার চেহারায় আসলে এক দয়ার কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Born Knowing the Lord",
          "bn": "রব চিনেই জন্ম"
        },
        "p": [
          {
            "en": "None of the commentators read for this verse tie a hadith to it, so the report that follows is offered for its theme, not as a comment on 26:26. In Sahih al-Bukhari, Abu Huraira relates that the Prophet ﷺ said, 'Every child is born with a true faith of Islam and his parents convert him to Judaism or Christianity or Magianism, as an animal delivers a perfect baby animal. Do you find it mutilated?' The recognition of one Lord, in this telling, is where a soul begins.",
            "bn": "এই আয়াতের জন্য পড়া কোনো তাফসিরকারই এর সঙ্গে কোনো হাদিস জোড়েননি। তাই নিচের বর্ণনাটি তুলে ধরা হলো তার ভাবের জন্য, ২৬:২৬-এর ব্যাখ্যা হিসেবে নয়। সহিহ বুখারিতে আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন, ‘প্রতিটি শিশু ইসলামের খাঁটি ফিতরাতের ওপর জন্ম নেয়, তারপর তার বাপ-মা তাকে ইহুদি, খ্রিস্টান বা অগ্নিপূজক বানায়, যেমন একটি পশু পরিপূর্ণ বাচ্চা প্রসব করে। তোমরা কি তার মধ্যে কোনো অঙ্গহানি দেখো?’ এ বর্ণনায়, একই রবকে চেনার জায়গা থেকেই একটি প্রাণের শুরু।"
          },
          {
            "en": "Set beside 26:26, the image is exact. Mūsā tells the court that the Lord is the Lord of their first forefathers; the hadith shows how those very forefathers become the ones who turn a child away from what it was born knowing. Reverence for ancestors can carry a soul home or it can bury the road. Pharaoh's people had let their fathers stand between them and their Lord. Mūsā points them past the fathers to the One the fathers themselves belonged to.",
            "bn": "২৬:২৬-এর পাশে রাখলে ছবিটা হুবহু মিলে যায়। মূসা (আঃ) দরবারকে বলছেন, তিনি তাদের পূর্ববর্তী বাপ-দাদারও রব। আর হাদিস দেখায়, সেই বাপ-দাদারাই কীভাবে শিশুটিকে তার জন্মগত চেনা থেকে সরিয়ে দেয়। পূর্বপুরুষদের প্রতি শ্রদ্ধা কোনো প্রাণকে ঘরে ফিরিয়ে আনতে পারে, আবার পথটাকে চাপাও দিতে পারে। ফেরাউনের জাতি তাদের বাপ-দাদাকে দাঁড় করিয়ে দিয়েছিল নিজেদের আর তাদের রবের মাঝখানে। মূসা (আঃ) তাদের সেই বাপ-দাদা পেরিয়ে সেই একজনের দিকে দেখান, বাপ-দাদারা নিজেরাই যাঁর অধীন ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Graves Behind the Throne",
          "bn": "সিংহাসনের পেছনের কবর"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in both languages. This scene records the denial of a particular tyrant in his own court and the answer God's messenger gave him; it describes what the text describes and licenses nothing against any living person or community. The verse humbles the claim to be divine; it does not authorise contempt for anyone's ancestors, heritage or nation. To honour where you come from is no sin. Pharaoh's sin was to make himself the lord that even his fathers had needed.",
            "bn": "একটা কথা দুই ভাষাতেই সোজাসুজি বলা দরকার। এই দৃশ্য এক নির্দিষ্ট স্বৈরশাসকের নিজের দরবারে করা অস্বীকার আর আল্লাহর রাসূলের দেওয়া জবাব লিপিবদ্ধ করে। এখানে যা বর্ণিত হয়েছে আয়াত তা-ই বর্ণনা করে, কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আয়াতটি খোদা হওয়ার দাবিকে নত করে, কারও পূর্বপুরুষ, ঐতিহ্য বা জাতির প্রতি ঘৃণার অনুমতি দেয় না। কোথা থেকে এসেছ তাকে সম্মান করা কোনো গুনাহ নয়। ফেরাউনের গুনাহ ছিল নিজেকে সেই রব বানিয়ে তোলা, যাঁকে তার বাপ-দাদারও দরকার ছিল।"
          },
          {
            "en": "The court's answer comes in the next verse. Unable to meet the proof, Pharaoh drops the argument and reaches for the slur: 'Indeed your messenger who has been sent to you is mad' (26:27). Ibn Kathir notes that when Pharaoh was beaten in the exchange he fell back on force and derision, having nothing left to say. It is the oldest reflex of a cornered power: when the point cannot be answered, discredit whoever made it. The verse stands, and so do the graves behind it.",
            "bn": "এসবের জবাব দরবার দেয় পরের আয়াতে। প্রমাণের মুখোমুখি হতে না পেরে ফেরাউন তর্ক ছেড়ে দেয়, হাত বাড়ায় গালির দিকে, ‘তোমাদের কাছে প্রেরিত তোমাদের রাসূল নিশ্চয়ই পাগল’ (২৬:২৭)। ইবন কাসীর বলেন, তর্কে হেরে গিয়ে ফেরাউন শক্তি আর বিদ্রুপের ওপর ভর করে, কারণ বলার মতো তার আর কিছু বাকি ছিল না। কোণঠাসা ক্ষমতার এটাই সবচেয়ে পুরনো স্বভাব: যুক্তির জবাব না থাকলে, যে যুক্তি দিল তাকেই হেয় করো। আয়াত তবু দাঁড়িয়ে থাকে, আর দাঁড়িয়ে থাকে তার পেছনের কবরগুলোও।"
          },
          {
            "en": "So the verse leaves the reader where it left the court, standing among the graves of the fathers. The question it presses is not whether Pharaoh had a Lord; he plainly did, whatever he claimed. The question is the one it hands to us: under whose lordship do we actually live, once the inherited names and the borrowed pride are set aside? Everyone we come from answered to God. What is left is to decide whether we do so knowingly, or are carried past the answer as Pharaoh was.",
            "bn": "তাই আয়াতটি পাঠককে সেখানেই রেখে যায় যেখানে দরবারকে রেখেছিল, বাপ-দাদার কবরের মাঝখানে। এটি যে প্রশ্নটা সামনে আনে তা এই নয় যে ফেরাউনের কোনো রব ছিল কি না। সে যা-ই দাবি করুক, তার রব স্পষ্টতই ছিল। আসল প্রশ্নটা সেই একটি, যা আয়াত আমাদের হাতে তুলে দেয়: উত্তরাধিকারে পাওয়া নাম আর ধার করা গর্ব সরিয়ে রাখলে আমরা আসলে কার প্রভুত্বের অধীনে বাস করি? আমরা যাদের থেকে এসেছি, তারা সবাই আল্লাহরই কাছে জবাবদিহি করত। ঠিক করার বাকি শুধু এটুকু, আমরা তা জেনেবুঝে করব, নাকি ফেরাউনের মতো জবাবটা পেরিয়ে ভেসে যাব।"
          }
        ]
      }
    ]
  },
  "26:34": {
    "sections": [
      {
        "h": {
          "en": "The Sign He Could Not Deny",
          "bn": "যে নিদর্শন অস্বীকার করা গেল না"
        },
        "p": [
          {
            "en": "The scene is set two verses earlier. In 26:32 Mūsā (AS) threw down his staff and it became a serpent, manifest; in 26:33 he drew out his hand and it came white for all who watched. Ibn Kathir describes the serpent as enormous in body and wide of mouth, terrifying to see, and the hand as shining like a piece of the moon. Before any of this, in 26:29, Pharaoh had already threatened prison. Ibn Kathir notes that proof had by now been established against him clearly and rationally, leaving no honest room for argument.",
            "bn": "দৃশ্যটা সাজানো হয়েছে দুই আয়াত আগে। ২৬:৩২ আয়াতে মূসা (আঃ) নিজের লাঠি ছুঁড়ে দিলেন, আর তা হয়ে গেল স্পষ্ট এক অজগর; ২৬:৩৩ আয়াতে হাত বের করলেন, তা সবার চোখের সামনে ঝকঝকে সাদা হয়ে উঠল। ইবন কাসীর বলেন, অজগরটি ছিল বিশাল দেহের, বড় হাঁ করা মুখের, দেখতে ভয়ংকর, আর হাতটি জ্বলছিল যেন চাঁদের এক টুকরো। এর আগেই, ২৬:২৯ আয়াতে, ফেরাউন কারাগারের ভয় দেখিয়েছিল। ইবন কাসীর ধরিয়ে দেন, এতক্ষণে তার বিরুদ্ধে যুক্তি আর প্রমাণ স্পষ্ট হয়ে দাঁড়িয়ে গেছে, তর্কের সৎ কোনো জায়গা আর বাকি নেই।"
          },
          {
            "en": "Our verse is what he reaches for next. Ibn Kathir writes that, since Pharaoh was already doomed, he hastened to stubborn denial and said to the chiefs around him that this was a well-versed sorcerer. Notice what he does not say. He does not claim the staff never moved or the hand never shone; the whole hall had watched. He does not deny that the event happened. He renames it. The thing itself stands unchallenged; only its name is changed, and with the name, its meaning changes too.",
            "bn": "এবার সে যা ধরল, সেটাই আমাদের আয়াত। ইবন কাসীর লেখেন, ফেরাউন যেহেতু আগেই ধ্বংসের পথে, সে তাড়াহুড়ো করে গোঁয়ার অস্বীকারে নামল আর চারপাশের প্রধানদের বলল, এ তো এক দক্ষ যাদুকর। খেয়াল করুন সে কী বলল না। লাঠি নড়েনি কিংবা হাত জ্বলেনি, এমন দাবি সে করল না; গোটা দরবার তো তা দেখেছে। ঘটনাটাকে সে অস্বীকার করল না। সে ঘটনাটার নাম বদলে দিল। জিনিসটা যেমন ছিল তেমনই রইল, শুধু তার নাম বদলাল, আর নামের সঙ্গে বদলে গেল তার মানেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to the Chiefs Around Him",
          "bn": "চারপাশের প্রধানদের উদ্দেশে"
        },
        "p": [
          {
            "en": "The verse is careful about who is being addressed: qāla li-l-mala'i ḥawlahu, he said to the chiefs around him. At-Tabari glosses al-mala' as the nobles of his people who were around him, the eminent men of his court. Al-Muyassar reads it the same way, that he spoke to the nobles of his people. The direction of the speech matters. Pharaoh does not answer Mūsā (AS) and does not address the sign; he turns away from the man who brought it and speaks instead to the room.",
            "bn": "আয়াতটি খেয়াল রাখে, কথাটা কাকে বলা হচ্ছে: কালা লিল-মালাই হাওলাহু, সে তার চারপাশের প্রধানদের বলল। তাবারী মালা শব্দের ব্যাখ্যায় বলেন, এরা তার সম্প্রদায়ের সেই সম্মানিত লোকেরা যারা তার চারপাশে ছিল, দরবারের গণ্যমান্যরা। মুয়াসসারও একইভাবে পড়েন, সে তার সম্প্রদায়ের প্রধানদের বলল। কথার মুখ কোন দিকে, সেটাই বড় কথা। ফেরাউন মূসা (আঃ)-কে জবাব দেয় না, নিদর্শনটাকেও কিছু বলে না; যে লোক তা নিয়ে এল তার দিক থেকে মুখ ফিরিয়ে সে কথা বলে গোটা দরবারকে।"
          },
          {
            "en": "That turn is itself an act. These chiefs are the court whose loyalty holds his throne, and it is to them, not to the truth of what he saw, that he speaks. The verdict is announced to the audience before the audience can weigh the sign for itself; the label is set in place while the serpent is still fresh in every eye. What looks like a comment on Mūsā (AS) is really the handling of a room. He is not asking what the sign means. He is telling his people what to call it.",
            "bn": "এই মুখ ফেরানোটাই একটা কাজ। এই প্রধানরাই সেই দরবার, যাদের আনুগত্যে তার সিংহাসন টিকে আছে; আর সে কথা বলছে তাদেরই সঙ্গে, যা দেখল তার সত্যের সঙ্গে নয়। দর্শকরা নিজেরা নিদর্শন যাচাই করার আগেই তাদের কানে রায়টা পৌঁছে দেওয়া হলো; অজগর তখনো সবার চোখে টাটকা, এরই মধ্যে তকমাটা বসিয়ে দেওয়া হলো। যা দেখতে মূসা (আঃ)-এর নামে মন্তব্য, তা আসলে একটা ঘর সামলানো। সে জিজ্ঞেস করছে না নিদর্শনটার মানে কী। সে তার লোকদের বলে দিচ্ছে একে কী বলে ডাকতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Renaming the Sign as Magic",
          "bn": "নিদর্শনকে যাদু বলে চালানো"
        },
        "p": [
          {
            "en": "At-Tabari spells out the content of the charge. On the words inna hādhā la-sāḥir, indeed this is a magician, he gives Pharaoh's meaning: Mūsā enchanted his staff, he says, until he made you see it as a serpent. The claim is precise, and that is what makes it useful. It does not deny that the court saw a serpent. It grants the sight and explains it as a trick worked upon the eyes, a thing done to them rather than a thing shown to them by God.",
            "bn": "অভিযোগটার ভেতরে কী আছে, তাবারী তা খুলে বলেন। ইন্না হাযা লাসাহির, নিশ্চয়ই এ এক যাদুকর, এই কথার ফেরাউনি মানে তিনি ধরিয়ে দেন: মূসা তার লাঠির উপর যাদু করেছে, বলেন তিনি, যাতে তোমাদের চোখে তা অজগর হয়ে ধরা দেয়। অভিযোগটা মেপে বলা, আর এখানেই এর কাজ। দরবার যে অজগর দেখেছে, তা সে অস্বীকার করে না। দেখাটা মেনে নিয়ে সে বলে, এ চোখের উপর চালানো এক ভেলকি, আল্লাহর দেখানো কিছু নয়, বরং তাদের সঙ্গে করা এক কারসাজি।"
          },
          {
            "en": "Ibn Kathir names the strategy in one clause. He writes that Pharaoh promoted to them the idea that this belonged to the category of magic and not to the category of miracle. Everything turns on that single sorting. The same staff, the same serpent, the same shining hand, filed now under a heading that asks nothing of anyone. A miracle would demand submission, for it points past the man to the One who sent him. Magic points back at the man, and a man can be dismissed in a way that a sign from God cannot.",
            "bn": "ইবন কাসীর কৌশলটার নাম দেন এক বাক্যে। তিনি লেখেন, ফেরাউন তাদের কাছে চালিয়ে দিল যে এ জিনিস যাদুর গোত্রের, মুজিযার গোত্রের নয়। সব কিছু ঝুলে থাকে ওই একটামাত্র ভাগ করার উপর। একই লাঠি, একই অজগর, একই ঝলমলে হাত, এখন বসিয়ে দেওয়া হলো এমন এক শিরোনামের নিচে যা কারও কাছে কিছু চায় না। মুজিযা মাথা নত করতে বলে, কারণ তা মানুষটাকে ছাড়িয়ে সেই সত্তার দিকে ইশারা করে যিনি তাকে পাঠিয়েছেন। যাদু ইশারা করে মানুষটার দিকেই, আর একজন মানুষকে যেভাবে উড়িয়ে দেওয়া যায়, আল্লাহর নিদর্শনকে সেভাবে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Magician of Great Knowledge",
          "bn": "এক দক্ষ, জ্ঞানী যাদুকর"
        },
        "p": [
          {
            "en": "The word ʿalīm carries its own weight, and the commentators do not skip it. At-Tabari glosses it as one who has knowledge of magic and discernment in it. Ibn Kathir, in the Arabic, reads sāḥir ʿalīm as an accomplished, outstanding master of the craft, and the English abridgement renders it a well-versed sorcerer, one who knows a great deal of magic. Al-Muyassar simply calls him māhir, skilled. Across four commentaries the sense is single: not a novice with cheap tricks but a master at the top of his art.",
            "bn": "আলীম শব্দটার নিজস্ব ওজন আছে, আর তাফসীরকারেরা তা এড়িয়ে যান না। তাবারী এর মানে করেন, যার আছে যাদুর জ্ঞান আর তাতে গভীর বোঝাপড়া। ইবন কাসীর আরবিতে সাহির আলীমকে পড়েন যাদুবিদ্যায় দক্ষ, পারদর্শী ওস্তাদ বলে, আর সংক্ষিপ্ত ইংরেজি অনুবাদে বলা হয়, এমন একজন যে যাদুর অনেক কিছু জানে। মুয়াসসার সোজা কথায় বলেন মাহির, দক্ষ। চারটি তাফসীরের সুরটা এক: হাতুড়ে ভেলকিবাজ নয়, বরং নিজের বিদ্যার চূড়ায় বসা এক ওস্তাদ।"
          },
          {
            "en": "That description is not careless praise; it does work. Ordinary conjuring could be laughed off, but it could not account for a serpent that filled the hall and a hand that lit it. By making Mūsā (AS) a magician of the first rank, Pharaoh explains the sheer force of the sign without admitting where it came from: it overwhelmed you, he implies, because the man is that skilled, not because God stands behind him. The more undeniable the sign, the greater the magician has to be. The label simply grows to fit the evidence, so the evidence never has to be met.",
            "bn": "এই বর্ণনাটা এলোমেলো প্রশংসা নয়, এর একটা কাজ আছে। সাধারণ ভেলকি হলে হেসে উড়িয়ে দেওয়া যেত, কিন্তু গোটা দরবার ভরে ফেলা অজগর আর আলো ছড়ানো হাতকে তা দিয়ে বোঝানো যায় না। মূসা (আঃ)-কে প্রথম সারির যাদুকর বানিয়ে ফেরাউন নিদর্শনের প্রচণ্ড জোরটা বুঝিয়ে দেয়, অথচ তা কোথা থেকে এল সেটা স্বীকার করে না। সে ইঙ্গিত করে, তোমরা হতভম্ব হয়েছ কারণ লোকটা এত দক্ষ, আল্লাহ পেছনে আছেন বলে নয়। নিদর্শন যত অস্বীকার-অযোগ্য, যাদুকরকে তত বড় বানাতে হয়। তকমাটা প্রমাণের মাপে বেড়ে যায়, যাতে প্রমাণের মুখোমুখি কখনো হতে না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Afraid They Might Believe",
          "bn": "ওরা ঈমান আনবে, এই ভয়"
        },
        "p": [
          {
            "en": "Al-Muyassar supplies the motive the other commentators leave implicit. He writes that Pharaoh spoke to the nobles out of fear that they would believe. That is the exposed nerve. The danger was not that Mūsā (AS) might be right in some distant sense; it was that these men, having just watched the sign with their own eyes, were on the edge of being convinced. The accusation is a firewall thrown up in a hurry, meant to stop belief from spreading through the court before it could take hold in a single heart.",
            "bn": "বাকি তাফসীরকারেরা যে কারণটা চাপা রাখেন, মুয়াসসার তা সামনে আনেন। তিনি লেখেন, ফেরাউন প্রধানদের সঙ্গে কথা বলল এই ভয়ে যে তারা ঈমান এনে ফেলবে। এখানেই তার দুর্বল জায়গা। বিপদ এ নয় যে মূসা (আঃ) দূর কোনো অর্থে ঠিক হতে পারেন; বিপদ হলো, এই লোকেরা নিজের চোখে নিদর্শন দেখে ঈমান আনার একেবারে দোরগোড়ায় এসে গেছে। অভিযোগটা তড়িঘড়ি তুলে দেওয়া এক দেয়াল, একটিমাত্র অন্তরেও জেঁকে বসার আগেই দরবারে ঈমানের ছড়িয়ে পড়া ঠেকাতে।"
          },
          {
            "en": "As-Sa'di compresses the whole act into one phrase: Pharaoh said this opposing the truth and the man who brought it. Message and messenger are named together as the target. Ibn Kathir adds the next beat. Having filed the sign under magic, Pharaoh then stirred the chiefs up and incited them against Mūsā (AS), warning them, in 26:35, that the sign was a scheme to drive them from their land. The fear of losing the room is dressed up as fear for the nation, and a ruler's private threat is handed to the crowd as a public defence.",
            "bn": "সা'দী গোটা ব্যাপারটা একটি বাক্যে গুছিয়ে দেন: ফেরাউন এ কথা বলল সত্যের আর যিনি সত্য এনেছেন তাঁর বিরোধিতা করে। কথা আর কথা-বাহক, দুজনকেই একসঙ্গে নিশানা করা হয়। ইবন কাসীর পরের ধাপটা জুড়ে দেন। নিদর্শনকে যাদুর ঘরে ফেলে ফেরাউন এবার প্রধানদের খেপিয়ে তোলে, মূসা (আঃ)-এর বিরুদ্ধে উসকে দেয়, আর ২৬:৩৫ আয়াতে ভয় দেখায় যে এ নিদর্শন আসলে তাদের দেশ থেকে বের করে দেওয়ার ফন্দি। দরবার হাতছাড়া হওয়ার ভয়কে সাজানো হয় দেশের ভয় বলে, আর শাসকের নিজের হুমকিকে জনতার হাতে তুলে দেওয়া হয় দেশরক্ষার নাম দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A True Sign, Named False",
          "bn": "সত্য নিদর্শনকে বলা হলো মিথ্যা"
        },
        "p": [
          {
            "en": "Step back from the exchange and something turns over. The one thing in that hall that was genuinely not magic was the sign, and the one word Pharaoh pinned to it was magic. What had truly come from God was assigned the very name of the craft that sets itself up against God. Read alongside Ibn Kathir's own distinction, the point sharpens: Pharaoh took a real miracle and sorted it into the exact category that exists to explain miracles away. The truest sign in the room was called the one thing it could not be.",
            "bn": "কথা-কাটাকাটি থেকে একটু সরে দাঁড়ালে একটা ব্যাপার উল্টে যায়। ওই দরবারে যে জিনিসটা সত্যিই যাদু ছিল না, তা হলো নিদর্শন; আর ফেরাউন তার গায়ে যে শব্দটা সেঁটে দিল, তা হলো যাদু। যা সত্যিকারভাবে আল্লাহর কাছ থেকে এসেছিল, তাকে দেওয়া হলো সেই বিদ্যার নাম যা আল্লাহর মোকাবিলায় নিজেকে দাঁড় করায়। ইবন কাসীরের নিজের ভাগটার পাশে রাখলে কথাটা আরও ধারালো হয়: ফেরাউন এক সত্যিকারের মুজিযাকে ঠিক সেই ঘরে ফেলল, যে ঘর তো মুজিযাকে উড়িয়ে দিতেই বানানো। দরবারের সবচেয়ে খাঁটি নিদর্শনকে বলা হলো এমন কিছু, যা সে কিছুতেই নয়।"
          },
          {
            "en": "That move did not die with Pharaoh. Whenever a truth arrives that would cost the hearer something to accept, the cheapest defence is not to argue the truth at all but to reassign the person who carries it. He is a fraud, an agent, a fanatic, in it for himself; and once the man is named, the message need never be weighed. It is effective precisely because it demands nothing of the audience. They keep what they have, change none of it, and walk away feeling they have answered when they have only renamed.",
            "bn": "এই চাল ফেরাউনের সঙ্গে মরে যায়নি। যখনই এমন কোনো সত্য এসে হাজির হয়, যা মেনে নিতে গেলে শ্রোতার কিছু খোয়াতে হয়, তখন সবচেয়ে সস্তা প্রতিরক্ষা হলো সত্যটা নিয়ে তর্ক না করে বরং যে তা বয়ে আনছে তার নতুন পরিচয় বসিয়ে দেওয়া। সে প্রতারক, সে চর, সে ধর্মান্ধ, সে নিজের ধান্দায় নেমেছে; আর মানুষটার নাম একবার বসে গেলে কথাটা আর যাচাই করার দরকারই পড়ে না। এ চাল কাজে দেয় ঠিক এই কারণে যে এতে শ্রোতার কাছে কিছুই চাওয়া হয় না। তারা নিজেদেরটা ধরে রাখে, কিছুই বদলায় না, আর জবাব দিয়েছি ভেবে চলে যায়, যদিও তারা কেবল নাম বদলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pride That Turns From Truth",
          "bn": "যে অহংকার সত্য থেকে ফেরায়"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so what follows is a general narration, not tied to 26:34, that lights up the disposition behind Pharaoh's words. Muslim records, from Ibn Mas'ud (RA), that the Prophet ﷺ said that no one with a mustard-seed's weight of pride in his heart will enter Paradise. When a man asked whether liking fine clothes and shoes was such pride, the Prophet ﷺ answered that Allah is beautiful and loves beauty, then defined what he meant: pride is disdaining the truth and holding people in contempt.",
            "bn": "এ আয়াতের জন্য দেখা তাফসীরগুলোর একটিও এর সঙ্গে কোনো হাদীস জোড়ে না, তাই যা আসছে তা একটি সাধারণ বর্ণনা, ২৬:৩৪-এর সঙ্গে বাঁধা নয়, তবে ফেরাউনের কথার পেছনের মেজাজটা আলোয় আনে। মুসলিম ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, যার অন্তরে সরিষার দানার সমান অহংকার আছে সে জান্নাতে যাবে না। এক ব্যক্তি জিজ্ঞেস করল, সুন্দর জামা আর সুন্দর জুতা ভালো লাগা কি সেই অহংকার। নবী ﷺ বললেন, আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন; তারপর তিনি বুঝিয়ে দিলেন কোন অহংকারের কথা বলছেন: অহংকার হলো সত্যকে তুচ্ছ করা আর মানুষকে হেয় করা।"
          },
          {
            "en": "Set that definition beside our verse and the fit is exact, though the hadith names nobody. Pharaoh had the truth in front of his eyes and disdained it; he had a people whose belief he feared and held them in contempt, moving them like counters to guard himself. The narration locates the root of the whole scene. It was not ignorance, for he had seen the sign plainly; it was pride, which cannot let a truth stand if standing would humble it. And that refusal wears ordinary clothes, in anyone who will not concede a point that costs him his standing.",
            "bn": "এই সংজ্ঞাটা আমাদের আয়াতের পাশে রাখুন, মিলটা হুবহু, যদিও হাদীসে কারও নাম নেই। ফেরাউনের চোখের সামনে সত্য ছিল, সে তা তুচ্ছ করল; যাদের ঈমানকে সে ভয় পেত সেই লোকদের সে হেয় করল, নিজেকে বাঁচাতে তাদের ঘুঁটির মতো নাড়ল। বর্ণনাটা গোটা দৃশ্যের গোড়াটা ধরিয়ে দেয়। এ অজ্ঞতা ছিল না, কারণ নিদর্শন সে স্পষ্ট দেখেছে; এ ছিল অহংকার, যা সত্যকে সত্য থাকতে দেয় না যদি সেই সত্য তাকে নিচু করে। আর এই অস্বীকার সাধারণ পোশাকেও ঘোরে, এমন যে কারও ভেতরে যে এমন কথা মানতে চায় না, যা মানলে তার মান খোয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Against No Living Person",
          "bn": "কারও বিরুদ্ধে কোনো অনুমতি নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in both languages. Pharaoh is a named tyrant of the Qur'an, and this verse reports what he said and did in his own court. It describes his deflection; it licenses nothing against any living person or community. To read it as a warrant to brand some modern figure a Pharaoh, or to treat any people as his complicit court, is to bend the verse to a purpose it does not carry. What Allah records here is set down for reflection and warning, not handed to anyone as a charge to level against their neighbour.",
            "bn": "একটা কথা দুই ভাষাতেই সোজাসুজি বলা দরকার। ফেরাউন কুরআনের নাম-ধরা এক অত্যাচারী, আর এ আয়াত তার নিজের দরবারে সে যা বলল আর করল তা জানায়। এটি তার এড়িয়ে যাওয়ার বর্ণনা দেয়; কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো অনুমতি দেয় না। একে যদি কেউ আজকের কোনো ব্যক্তিকে ফেরাউন বলে দেগে দেওয়ার সনদ ধরে, কিংবা কোনো জাতিকে তার সঙ্গী দরবার বানিয়ে ফেলে, তবে সে আয়াতকে এমন এক কাজে বাঁকায় যা আয়াত বহন করে না। আল্লাহ এখানে যা লিখে রাখেন, তা চিন্তা আর সতর্কতার জন্য, প্রতিবেশীর বিরুদ্ধে অভিযোগ তোলার হাতিয়ার হিসেবে কারও হাতে দেওয়া নয়।"
          },
          {
            "en": "And the reflection points inward before it points anywhere else. The real danger is not spotting Pharaoh in a ruler far away; it is missing his move in oneself. Every reader has met a truth that would cost something to accept and has felt the pull to answer the person rather than the point. So the verse asks a small, hard question. When the sign is plain and accepting it would humble me, do I weigh what is true, or reach for a label that lets me keep what I hold? The staff is not thrown down for us; the choice still is.",
            "bn": "আর এই ভাবনা বাইরে তাক করার আগে ভেতরে তাক করে। আসল বিপদ দূরের কোনো শাসকের মধ্যে ফেরাউনকে চিনে ফেলা নয়; আসল বিপদ নিজের ভেতরে তার চালটা টের না পাওয়া। প্রত্যেক পাঠকই এমন কোনো সত্যের মুখোমুখি হয়েছেন যা মানতে গেলে কিছু খোয়াতে হয়, আর টের পেয়েছেন সেই টান, কথার জবাব না দিয়ে মানুষটাকেই ধরার টান। তাই আয়াত একটা ছোট, কঠিন প্রশ্ন রাখে। নিদর্শন যখন স্পষ্ট আর তা মানলে আমাকে নিচু হতে হয়, আমি কি সত্যটা যাচাই করি, নাকি এমন এক তকমা খুঁজি যা আমাকে আমার হাতেরটা ধরে রাখতে দেয়? লাঠি আমাদের সামনে ছোঁড়া হয় না; কিন্তু বেছে নেওয়ার ভারটা এখনো আছে।"
          }
        ]
      }
    ]
  },
  "26:36": {
    "sections": [
      {
        "h": {
          "en": "When Proof Meets Force",
          "bn": "প্রমাণের পর জোর"
        },
        "p": [
          {
            "en": "By the time the chiefs speak in this verse, the proof has already been laid before them. Moses (AS) had thrown down his staff and it became a serpent, and drawn out his hand and it shone white before every onlooker. Ibn Kathir notes that once the proof had been established against Pharaoh clearly and rationally, he turned from argument to force, first threatening prison, then calling the sign mere magic. Rather than ask whether what he saw was from God, he put a question to the court around him: so what do you advise?",
            "bn": "এই আয়াতে প্রধানেরা যখন মুখ খোলে, প্রমাণ ততক্ষণে তাদের সামনে হাজির হয়ে গেছে। মূসা (আঃ) লাঠি ছুঁড়ে দিয়েছিলেন, তা সাপ হয়ে গেল, হাত বের করলেন, তা প্রত্যেক দর্শকের সামনে ঝলমল করে উঠল। ইবন কাসীর বলেন, ফেরাউনের বিরুদ্ধে যখন প্রমাণ স্পষ্ট ও যুক্তিসঙ্গতভাবে দাঁড়িয়ে গেল, সে তখন তর্ক ছেড়ে জোরের পথ ধরল। প্রথমে জেলের ভয় দেখাল, তারপর নিদর্শনটাকে বলল নিছক যাদু। সে যা দেখল তা আল্লাহর পক্ষ থেকে কিনা, তা জিজ্ঞেস না করে দরবারের লোকদের কাছে প্রশ্ন রাখল : তোমরা কী পরামর্শ দাও?"
          },
          {
            "en": "Their reply is what this verse records. At-Tabari opens his comment by saying that Pharaoh's chiefs answered him, and their answer is not a verdict on the truth but a plan for handling it. They do not deny that the staff turned or the hand shone; they simply set about arranging the man's defeat. From this first line the shape of the whole scene is set: a threatened power will not weigh an inconvenient sign, it will organise against it.",
            "bn": "তাদের জবাবই এই আয়াত ধরে রেখেছে। তাবারী তাঁর আলোচনা শুরু করেন এভাবে যে, ফেরাউনের প্রধানেরা তাকে জবাব দিল। আর সেই জবাব সত্যের কোনো রায় নয়, বরং সত্যকে সামলানোর একটা ছক। লাঠি যে সাপ হলো কিংবা হাত যে ঝলমল করল, তারা তা অস্বীকার করছে না। তারা কেবল লোকটিকে হারানোর ব্যবস্থা করতে লেগে গেছে। এই প্রথম বাক্য থেকেই গোটা দৃশ্যের চেহারা ঠিক হয়ে যায়। ভয় পাওয়া কর্তৃত্ব অসুবিধাজনক নিদর্শন যাচাই করে না, তার বিরুদ্ধে সংগঠিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Was Delay",
          "bn": "কথাটা ছিল অপেক্ষা"
        },
        "p": [
          {
            "en": "The counsel begins with a single word: arjih, put him off. At-Tabari glosses it as akhkhir wa-anzir, delay him and grant him respite, and folds his brother Harun (AS) into the same holding. Ibn Kathir reads arjih plainly as delay him and his brother, and as-Sa'di likewise renders it postpone the two of them. Al-Muyassar keeps the same sense: defer the matter of Moses and Aaron. Across the commentators the first move is agreed, to stall rather than to strike.",
            "bn": "পরামর্শ শুরু হয় একটি মাত্র শব্দ দিয়ে : আরজিহ, তাকে ঝুলিয়ে রাখো। তাবারী এর অর্থ করেন আখখির ওয়া আনযির, অর্থাৎ তাকে দেরি করাও আর অবকাশ দাও। একই আটকে রাখার মধ্যে তিনি তার ভাই হারূন (আঃ)-কেও যোগ করেন। ইবন কাসীর আরজিহ শব্দটিকে সোজা অর্থেই নেন, তাকে ও তার ভাইকে দেরি করাও। সা'দীও তেমনি অর্থ করেন, দুজনকে পিছিয়ে দাও। মুয়াসসার একই সুর রাখে, মূসা ও হারূনের বিষয়টা মুলতবি করো। তাফসীরকারদের কাছে প্রথম চালটা নিয়ে মতের মিল, আঘাত নয়, ঠেকিয়ে রাখা।"
          },
          {
            "en": "Why delay at all, when Pharaoh held every power to act at once? The commentators do not spell out a motive, but the placement does. A wonder just witnessed can harden into belief if it is left to breathe; the court wants time to blunt its force before the crowd draws its own conclusion. Delay is not weakness here but calculation, the opening purchase of a plan that means to control what everyone will be allowed to see.",
            "bn": "ফেরাউনের হাতে তো সঙ্গে সঙ্গে ব্যবস্থা নেওয়ার সব ক্ষমতা ছিল, তবু দেরি কেন? তাফসীরকারেরা কোনো কারণ খুলে বলেন না, কিন্তু আয়াতের অবস্থানই তা বুঝিয়ে দেয়। সদ্য দেখা কোনো বিস্ময়কে ছেড়ে রাখলে তা মনে বিশ্বাস হয়ে জমে যেতে পারে। ভিড় নিজে থেকে কোনো সিদ্ধান্তে পৌঁছার আগেই দরবার চায় এর ধার ভোঁতা করতে কিছুটা সময়। এখানে দেরি দুর্বলতা নয়, হিসাব। এ এমন এক ছকের শুরুর কেনাকাটা, যে ছক ঠিক করে দিতে চায় সবাই শেষ পর্যন্ত কী দেখতে পাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Musterers Through the Cities",
          "bn": "নগরে নগরে ঘোষক"
        },
        "p": [
          {
            "en": "The second move is to send. Wa-bʿath fi al-madain hashirin: dispatch through the cities those who will gather. Ibn Kathir explains the aim in his Arabic comment, that Pharaoh delay him and his brother until men are gathered for him from the cities of his kingdom and the regions of his realm. His abridged commentary says the same in fuller words: bring together all the sorcerers from every city and region, so they may confront Moses and produce the like of what he produced.",
            "bn": "দ্বিতীয় চাল হলো পাঠানো। ওয়াবআস ফিল মাদাইনি হাশিরীন, অর্থাৎ নগরে নগরে জড়ো করার লোক পাঠাও। ইবন কাসীর তাঁর আরবি আলোচনায় উদ্দেশ্যটা বুঝিয়ে দেন। তাকে ও তার ভাইকে ততক্ষণ দেরি করাও, যতক্ষণ না ফেরাউনের রাজ্যের নগরগুলো আর দেশের প্রদেশগুলো থেকে লোক জড়ো করা হয়। তাঁর সংক্ষিপ্ত তাফসির আরও খোলাসা করে বলে, প্রতিটি নগর ও অঞ্চল থেকে সব যাদুকরকে একত্র করো, যাতে তারা মূসার মুখোমুখি হয়ে তাঁর মতো কিছু দেখাতে পারে।"
          },
          {
            "en": "As-Sa'di draws out what kind of places these were. Send into all your cities, he writes, the cities that are the seat of learning and the very mine of magic. The detail matters: in Pharaoh's Egypt sorcery was not a fringe trick but a cultivated science, taught and prized, with its masters spread across the land. The court is not rounding up street conjurers; it is calling in the recognised experts of the age to settle the matter in its own favour.",
            "bn": "সা'দী বুঝিয়ে দেন এগুলো ছিল কেমন জায়গা। তিনি লেখেন, তোমার সব নগরে পাঠাও, যে নগরগুলো জ্ঞানের কেন্দ্র আর যাদুর আসল খনি। কথাটার গুরুত্ব আছে। ফেরাউনের মিশরে যাদু ছিল না কোনো পথের ধারের কৌশল, বরং এক চর্চিত বিদ্যা, যা শেখানো হতো, যার কদর ছিল, আর যার ওস্তাদেরা ছড়িয়ে ছিল গোটা দেশে। দরবার পথেঘাটের খেলোয়াড় জোগাড় করছে না, তারা ডেকে আনছে যুগের স্বীকৃত বিশেষজ্ঞদের, যাতে বিষয়টা নিজেদের পক্ষে মীমাংসা করা যায়।"
          },
          {
            "en": "Al-Muyassar fills in who was sent and why: dispatch through the cities troops who muster the sorcerers, to bring you every man skilled in magic and surpassing in its knowledge. The next verse completes the errand, that they may bring you every learned, skilled magician (26:37). This is a nationwide recruitment of the best available, not a casual summons. The word hashirin itself, the musterers, carries the sense of a systematic sweep that collects people and drives them to one place.",
            "bn": "মুয়াসসার বলে দেয় কাদের পাঠানো হলো আর কেন। নগরে নগরে এমন সৈন্য পাঠাও যারা যাদুকরদের একত্র করবে, তোমার কাছে নিয়ে আসবে প্রত্যেক দক্ষ ও যাদুবিদ্যায় পারদর্শী লোককে। পরের আয়াত কাজটা পূর্ণ করে, তারা যেন তোমার কাছে প্রত্যেক অভিজ্ঞ, দক্ষ যাদুকরকে নিয়ে আসে (২৬:৩৭)। এ কোনো এলেবেলে ডাক নয়, গোটা দেশ থেকে সেরাদের বেছে আনার আয়োজন। হাশিরীন শব্দটাই, অর্থাৎ জড়োকারীরা, বহন করে এক সাজানো তল্লাশির অর্থ, যা মানুষকে টেনে এনে একটি জায়গায় জড়ো করে।"
          }
        ]
      },
      {
        "h": {
          "en": "How a Court Buys Time",
          "bn": "দরবার যেভাবে সময় কেনে"
        },
        "p": [
          {
            "en": "Read as one instruction, the counsel is a three-move plan. Postpone the accused so the moment cools; mobilise every specialist the kingdom can muster; and converge them for a public reckoning on a day the whole nation will attend. Not one clause of it engages Moses's claim. The chiefs never ask whether the staff and the hand came from God. They accept the threat as real and move straight to the mechanics of making the man lose in front of the people.",
            "bn": "পুরোটাকে একটি নির্দেশ ধরে পড়লে পরামর্শটা দাঁড়ায় তিনটি ধাপের এক ছক। অভিযুক্তকে পিছিয়ে দাও যাতে মুহূর্তের উত্তাপ কমে, রাজ্যের জোগাড় করা যায় এমন প্রতিটি বিশেষজ্ঞকে সাজাও, আর গোটা জাতি হাজির হবে এমন এক দিনে জনসমক্ষে চূড়ান্ত মীমাংসার জন্য তাদের এক জায়গায় আনো। এর একটি ধারাও মূসার দাবির মুখোমুখি হয় না। প্রধানেরা কখনো জিজ্ঞেস করে না লাঠি আর হাত আল্লাহর পক্ষ থেকে এসেছে কিনা। তারা হুমকিকে সত্য ধরে নেয়, আর সোজা চলে যায় জনগণের সামনে লোকটিকে হারানোর কলকব্জায়।"
          },
          {
            "en": "This is the standing logic of a threatened establishment. When a truth cannot be answered, it can still be out-staged. Gather more expertise, arrange a bigger platform, assemble a larger crowd, and let sheer scale drown the inconvenient sign. The chiefs speak with confidence because the resources are theirs to command; the venue, the timing, the performers are all under their hand. Power that cannot refute a thing will often try instead to overwhelm it with everything it can bring to bear.",
            "bn": "এ হলো ভয় পাওয়া কর্তৃত্বের চিরকালীন যুক্তি। যে সত্যের জবাব দেওয়া যায় না, তাকে তবু তামাশা দিয়ে ঢেকে ফেলা যায়। আরও বিশেষজ্ঞ জড়ো করো, আরও বড় মঞ্চ সাজাও, আরও বড় ভিড় জমাও, আর নিছক আয়তন দিয়েই অসুবিধাজনক নিদর্শনকে চাপা দাও। প্রধানেরা আত্মবিশ্বাসের সঙ্গে কথা বলে, কারণ সব সম্পদ তাদের হুকুমের অধীন। জায়গা, সময়, খেলোয়াড় সবই তাদের হাতের মুঠোয়। যে ক্ষমতা কোনো জিনিসকে খণ্ডন করতে পারে না, সে প্রায়ই বদলে যা কিছু হাতে আছে সব দিয়ে তাকে ডুবিয়ে দিতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shade of a Just Ruler",
          "bn": "ন্যায়পরায়ণ শাসকের ছায়া"
        },
        "p": [
          {
            "en": "No tafsir fetched for this verse attaches a hadith to it, so what follows is brought only for the contrast it draws, not as a comment on the verse itself. In Sahih al-Bukhari, Abu Hurayra (RA) reports that the Prophet ﷺ said Allah will give shade to seven on the Day when there is no shade but His, and the first he named was a just ruler. The wording is Bukhari's own, quoted as it stands, and the collection is reckoned sound.",
            "bn": "এই আয়াতের জন্য আনা কোনো তাফসির এর সঙ্গে কোনো হাদিস জোড়েনি, তাই এখানে যা আসছে তা কেবল একটি বৈসাদৃশ্য বোঝাতে, আয়াতটির ব্যাখ্যা হিসেবে নয়। সহীহ বুখারীতে আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন আল্লাহ ৭ জনকে তাঁর ছায়ায় স্থান দেবেন। আর সবার আগে তিনি যাঁর নাম নেন, তিনি ন্যায়পরায়ণ শাসক। শব্দগুলো বুখারীর নিজের, যেমন আছে তেমনি উদ্ধৃত, আর সংকলনটি বিশুদ্ধ বলে গণ্য।"
          },
          {
            "en": "Set that figure against the court in this verse. The authority here spends its power to postpone a truth and to buy a favourable verdict from a crowd; the ruler the Prophet ﷺ singles out spends his to uphold what is right, even when it costs him. The Qur'an shows one kind of leadership at work in Pharaoh's chiefs; the hadith names its opposite. A reader is meant to tell the two apart, and to know which of them is promised the shade.",
            "bn": "সেই ছবিটা এই আয়াতের দরবারের পাশে রাখুন। এখানকার কর্তৃত্ব তার ক্ষমতা খরচ করে একটি সত্যকে পিছিয়ে দিতে আর ভিড়ের কাছ থেকে অনুকূল রায় কিনতে। আর নবী ﷺ যে শাসকের কথা আলাদা করে বলেন, তিনি নিজের ক্ষমতা খরচ করেন সঠিকটা টিকিয়ে রাখতে, তা যতই দাম নিক না কেন। কুরআন ফেরাউনের প্রধানদের মধ্যে দেখায় একরকম নেতৃত্ব, আর হাদিস নাম নেয় তার উল্টোটার। পাঠক যেন দুই ধরনকে আলাদা করে চিনতে পারে, আর জানতে পারে ছায়ার ওয়াদা কোনটির জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Stage They Built",
          "bn": "তাদের গড়া মঞ্চ"
        },
        "p": [
          {
            "en": "Ibn Kathir closes the scene with the turn the chiefs never foresaw. Pharaoh did exactly as they advised, he writes, and this was what Allah had decreed would happen to them, so that all the people would be gathered in one place and the signs and proof of Allah would be made manifest before them all on a single day. The very muster designed to crush Moses became the means of assembling the nation to witness his vindication.",
            "bn": "ইবন কাসীর দৃশ্যটা শেষ করেন সেই মোড় দিয়ে, যা প্রধানেরা কখনো আঁচ করেনি। তিনি লেখেন, ফেরাউন ঠিক তাদের পরামর্শমতোই কাজ করল, আর এটাই ছিল আল্লাহর ফয়সালা, যা তাদের ভাগ্যে ঘটার কথা ছিল। যাতে সব মানুষ একটি জায়গায় জড়ো হয়, আর একটি দিনেই সবার সামনে আল্লাহর নিদর্শন ও প্রমাণ প্রকাশ পায়। মূসাকে গুঁড়িয়ে দিতে সাজানো এই জমায়েতই হয়ে দাঁড়াল গোটা জাতিকে তাঁর সত্যতা দেখার সাক্ষী বানানোর উপায়।"
          },
          {
            "en": "So the gathering built to bury a sign became the assembly that saw it upheld. When the summoned magicians met what Moses brought, the outcome the court had sold as certain collapsed, and they fell down in prostration to the Lord of the worlds (26:46). The machinery of suppression had furnished the stage of its own defeat. The larger the crowd called to watch a truth be routed, the larger the witness when the truth instead prevails before every eye.",
            "bn": "তাই নিদর্শন চাপা দিতে গড়া জমায়েতই হয়ে উঠল সেই সমাবেশ, যা নিদর্শনটিকে টিকে যেতে দেখল। ডেকে আনা যাদুকরেরা যখন মূসার আনা জিনিসের মুখোমুখি হলো, দরবার যে ফলাফল নিশ্চিত বলে বেচেছিল তা ভেঙে পড়ল, আর তারা লুটিয়ে পড়ল বিশ্বজগতের রবের উদ্দেশে সিজদায় (২৬:৪৬)। দমন-পীড়নের কলকব্জাই জোগান দিল নিজের হারের মঞ্চ। সত্যকে পরাস্ত হতে দেখতে যত বড় ভিড় ডাকা হয়, সত্য বরং সবার চোখের সামনে জিতে গেলে সাক্ষীও হয় তত বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Scene Cannot Arm",
          "bn": "এ দৃশ্য যা বৈধ করে না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports the counsel of one tyrant's court, inside one story, and the Qur'an itself overturns the plan they were so sure of. It describes what it describes and licenses nothing against any living person or community. It gives no warrant to brand a present-day ruler, people or nation as Pharaoh and his chiefs, and no license to move against anyone on the strength of a resemblance to a Qur'anic villain. The scene is a record, not a permission.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে একজন স্বৈরশাসকের দরবারের পরামর্শের বর্ণনা দেয়, আর তারা যে ছকে এত নিশ্চিত ছিল কুরআন নিজেই তা উল্টে দেয়। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আজকের কোনো শাসক, জাতি বা জনগণকে ফেরাউন ও তার প্রধানদের তকমা দেওয়ার কোনো সনদ এ দেয় না, আর কুরআনের কোনো খলনায়কের সঙ্গে মিল আছে বলে কারও বিরুদ্ধে ব্যবস্থা নেওয়ার কোনো অনুমতিও দেয় না। এ দৃশ্য এক দলিল, অনুমতি নয়।"
          },
          {
            "en": "What the verse does offer is a mirror held up to the reader's own conduct. The urge to manage a truth rather than face it does not belong to Pharaoh's court alone; it stirs in anyone with something to protect. The lesson is turned inward, toward the ways I organise against a fact I would rather not accept. It is self-examination the scene asks for, and never a charge to level at someone else on the strength of an old story. Reading it any other way turns a warning meant for me into a weapon aimed outward at my neighbour.",
            "bn": "আয়াত যা সত্যিই দেয় তা হলো পাঠকের নিজের আচরণের সামনে ধরা এক আয়না। সত্যকে মুখোমুখি হওয়ার বদলে সামলে নেওয়ার তাড়না শুধু ফেরাউনের দরবারের নয়, রক্ষা করার মতো কিছু আছে এমন যে কারও ভেতরেই তা নড়েচড়ে ওঠে। শিক্ষাটা ভেতরের দিকে ফেরানো, যে সত্য মেনে নিতে আমার আপত্তি তার বিরুদ্ধে আমি কীভাবে সংগঠিত হই সেদিকে। এ দৃশ্য চায় আত্মসমীক্ষা, পুরোনো এক কাহিনির জোরে অন্য কারও বিরুদ্ধে তোলার মতো কোনো অভিযোগ নয়। অন্যভাবে পড়লে আমার জন্য রাখা সতর্কবার্তাই বাইরের দিকে, প্রতিবেশীর দিকে তাক করা অস্ত্র হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "When Power Stages Spectacle",
          "bn": "কর্তৃত্ব যখন তামাশা সাজায়"
        },
        "p": [
          {
            "en": "The verse leaves the reader a pattern worth recognising. First comes delay, to let an awkward moment lose its heat. Then comes mobilisation, the quiet gathering of everyone and everything that can be brought to bear. Then comes the staged contest, arranged on ground the powerful expect to hold. The sequence appears wherever an uncomfortable truth meets an interest large enough to wish it gone, in a boardroom as readily as in a royal court. The names change from age to age, but the method keeps its familiar shape.",
            "bn": "আয়াত পাঠকের জন্য রেখে যায় চিনে রাখার মতো এক ধরন। প্রথমে আসে দেরি, যাতে অস্বস্তিকর মুহূর্তের উত্তাপ পড়ে যায়। তারপর আসে সমাবেশ, কাজে লাগানো যায় এমন সবাইকে আর সবকিছুকে চুপচাপ জড়ো করা। তারপর আসে সাজানো প্রতিযোগিতা, এমন মাঠে বসানো যেখানে জেতার আশা ক্ষমতাবানদের। যেখানেই কোনো অস্বস্তিকর সত্য এমন স্বার্থের মুখোমুখি হয় যা তাকে সরাতে চায়, সেখানেই এই ধারা দেখা দেয়, রাজদরবারে যেমন, তেমনি অফিসের বৈঠকেও। যুগে যুগে নাম বদলায়, কিন্তু পদ্ধতিটা তার চেনা চেহারাই ধরে রাখে।"
          },
          {
            "en": "The correction the story models is simple to say and hard to do: ask first whether the thing is true. The court never asked; it went straight to how the truth could be made to lose, and it lost anyway. A truth that is real does not need the crowd's applause to be true, and the crowd assembled to deny it can as easily come to see it. Power can stage the contest, but it cannot script which way the truth will fall.",
            "bn": "কাহিনি যে সংশোধন শেখায় তা বলা সহজ, করা কঠিন : আগে জিজ্ঞেস করুন জিনিসটা সত্য কিনা। দরবার তা কখনো জিজ্ঞেস করেনি, সোজা চলে গিয়েছিল সত্যকে কীভাবে হারানো যায় সেদিকে, আর তবু হেরেছিল। যে সত্য সত্যিকারের, তার সত্য হতে ভিড়ের হাততালি লাগে না। আর যে ভিড় তাকে অস্বীকার করতে জড়ো হয়, সেই ভিড়ই সমান সহজে তা দেখেও ফেলতে পারে। ক্ষমতা প্রতিযোগিতার আয়োজন করতে পারে, কিন্তু সত্য কোন দিকে ঝুঁকবে তা লিখে দিতে পারে না।"
          }
        ]
      }
    ]
  },
  "26:44": {
    "sections": [
      {
        "h": {
          "en": "An Oath at the Throw",
          "bn": "নিক্ষেপের পরেই শপথ"
        },
        "p": [
          {
            "en": "Musa (AS) had just told them to throw whatever they would throw, and they did: fa-alqaw hibalahum wa-'isiyyahum, so they threw their ropes and their staffs. Then, in the same breath, the boast: bi-'izzati Fir'awn, inna la-nahnu al-ghalibun, by the might of Pharaoh, it is we who will be the winners. The order matters. The trick was already in the air before the claim was made, and the claim did not rest on the trick. It rested on a name, and on the man who owned it.",
            "bn": "মূসা (আঃ) সবে বলেছেন, ‘যা ছুঁড়বে ছুঁড়ে ফেলো,’ আর তারা তা-ই করল: ফাআলকাও হিবালাহুম ওয়া ইসিয়্যাহুম, তারা তাদের রশি আর লাঠিগুলো ছুঁড়ে দিল। ঠিক তার পরপরই দম্ভের কথা: বিইযযাতি ফিরআউন, ইন্না লানাহনুল গালিবুন, ফেরাউনের ইযযতের কসম, আমরাই জয়ী হব। ক্রমটা খেয়াল করার মতো। ভেলকি ততক্ষণে বাতাসে ভাসছে, তবু দাবিটা সেই ভেলকির উপর দাঁড়ায়নি। দাঁড়িয়েছে একটা নামের উপর, আর সেই নামের মালিক এক মানুষের উপর।"
          },
          {
            "en": "At-Tabari reads bi-'izzati Fir'awn as an oath: they swore by the strength of Pharaoh, by the severity of his authority and the invincibility of his kingdom. That is what their certainty was pledged upon. And the thing they swore to, inna la-nahnu al-ghalibun, at-Tabari completes with a word the verse leaves unspoken: victors over Musa. So the sentence is a wager staked on a throne, that the throne's own men would beat the man who had come to that court carrying a sign from his Lord.",
            "bn": "তাবারী বিইযযাতি ফিরআউনকে পড়েন কসম হিসেবে: তারা কসম কেটেছিল ফেরাউনের শক্তির, তার কর্তৃত্বের কঠোরতার আর তার রাজত্বের অজেয়তার নামে। তাদের নিশ্চয়তা এর উপরেই বাঁধা ছিল। আর কিসের উপর কসম, ইন্না লানাহনুল গালিবুন, তাবারী তা পূরণ করেন আয়াতে অনুচ্চারিত একটি শব্দে: মূসার উপর জয়ী। তাই বাক্যটা আসলে সিংহাসনের উপর রাখা এক বাজি, যে সিংহাসনের লোকেরাই হারিয়ে দেবে সেই মানুষটিকে, যিনি রবের কাছ থেকে নিদর্শন নিয়ে সেই দরবারে এসেছিলেন।"
          },
          {
            "en": "Ibn Kathir sets the stakes of the day. The sorcerers of Egypt were the most skilled illusionists of their age, gathered from every corner of the land before a crowd whose true number is known to Allah alone. The people, he notes, followed the religion of their king; they had come hoping the magicians would win so they could keep on as they were. Into that charged arena the oath is flung, a public wager that the king's men, and the king's power, would carry the day.",
            "bn": "ইবন কাসীর সেদিনের বাজিটা কতখানি, তা বুঝিয়ে দেন। মিসরের যাদুকররা ছিল তাদের যুগের সবচেয়ে দক্ষ ভেলকিবাজ, দেশের প্রতিটি কোণ থেকে জড়ো করা এক ভিড়ের সামনে, যাদের আসল সংখ্যা কেবল আল্লাহই জানেন। কাসীর বলেন, লোকেরা তাদের বাদশাহর দীন অনুসরণ করত; তারা এসেছিল এই আশায় যে যাদুকররা জিতলে তারা যেমন আছে তেমনই থাকতে পারবে। সেই উত্তপ্ত ময়দানেই ছুঁড়ে দেওয়া হলো কসম, প্রকাশ্যে এক বাজি যে বাদশাহর লোকেরা আর বাদশাহর শক্তিই সেদিন জিতে নেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Might Borrowed from a Man",
          "bn": "ধার করা শক্তিতে ভরসা"
        },
        "p": [
          {
            "en": "As-Sa'di looks straight at what they leaned on and names it plainly. They sought help, he says, in the might of a weak servant, powerless from every angle, except that he had made himself a tyrant and had come to hold the outward form of kingship and the soldiers to enforce it. The 'izzah they swore by was borrowed, and borrowed from someone who owned none of it in himself. Strip away the throne and the army and there stands a servant as weak as any other man.",
            "bn": "তারা কিসের উপর ভর দিয়েছিল, সা'দী সোজাসুজি তার নাম দেন। তারা সাহায্য চেয়েছিল, তিনি বলেন, এমন এক দুর্বল বান্দার শক্তির কাছে, যে সব দিক থেকেই অক্ষম, কেবল এটুকু ছাড়া যে সে নিজেকে জালেম বানিয়েছে আর রাজত্বের বাইরের চেহারা ও তা কায়েম রাখার সৈন্য জোগাড় করেছে। যে ইযযতের কসম তারা কাটল, তা ধার করা, আর ধার করা এমন একজনের কাছ থেকে যার নিজের ভেতরে তার কিছুই নেই। সিংহাসন আর সৈন্য সরিয়ে নিলে সেখানে দাঁড়িয়ে থাকে আর দশজনের মতোই এক দুর্বল বান্দা।"
          },
          {
            "en": "How is such an oath sworn with so much confidence? As-Sa'di answers in a single line: that pomp deluded them, and their insight never reached the reality of the matter. They saw the splendor and read it as strength; the eye stopped at the surface and went no further. He allows a second reading as well, that the words are simply an oath by Pharaoh's might, the thing sworn upon being their own victory. Either way the certainty is loud and the ground beneath it is not there.",
            "bn": "এমন কসম এত আত্মবিশ্বাসে কাটা হয় কী করে? সা'দী এক কথায় জবাব দেন: সেই জৌলুস তাদের ধোঁকায় ফেলেছিল, আর তাদের অন্তর্দৃষ্টি ব্যাপারটার আসল রূপ পর্যন্ত পৌঁছায়নি। তারা ঝলমলানি দেখে সেটাকেই শক্তি ভেবে নিল, চোখ উপরের খোলসেই থেমে গেল, ভেতরে আর ঢুকল না। তিনি আরেকটি পাঠও রাখেন, যে কথাগুলো নিছক ফেরাউনের ইযযতের কসম, আর যার উপর কসম তা হলো তাদের নিজেদের জয়। যেভাবেই দেখা যাক, নিশ্চয়তা চড়া গলায়, অথচ তার নিচের জমিনটাই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Boast Built to Fall",
          "bn": "পতনের জন্য গড়া দম্ভ"
        },
        "p": [
          {
            "en": "Inna la-nahnu al-ghalibun is not a plain we will win. It is layered with emphasis: the opening inna, the lam fixed to the pronoun, and nahnu, we, standing where the sentence had no grammatical need of it. Three markers of certainty stacked into four words. The Arabic is built to sound unanswerable. It is the loudest sentence in the scene, and the verse lets it ring at full volume for a reason, so that the verse immediately after can cut it off mid-echo. Confidence gets its whole say before it is undone.",
            "bn": "ইন্না লানাহনুল গালিবুন কেবল ‘আমরা জিতব’ নয়। এতে জোর দেওয়া হয়েছে স্তরে স্তরে: শুরুর ইন্না, সর্বনামের সঙ্গে সেঁটে থাকা লাম, আর নাহনু, ‘আমরা,’ যেখানে ব্যাকরণে এর দরকারই ছিল না। তিনটি নিশ্চয়তার চিহ্ন গাদা হয়ে বসেছে চারটি শব্দে। আরবিটা এমনভাবে গড়া যেন এর কোনো জবাব নেই। দৃশ্যের সবচেয়ে উঁচু গলার বাক্য এটি, আর আয়াত তাকে পুরো জোরে বাজতে দেয় একটা কারণেই, যেন ঠিক পরের আয়াত তাকে প্রতিধ্বনির মাঝপথে থামিয়ে দিতে পারে। আত্মবিশ্বাস তার পুরো কথাটা বলে ফেলে, তারপর ভেঙে পড়ে।"
          },
          {
            "en": "Ibn Kathir hears in bi-'izzati Fir'awn something both ordinary and revealing. This, he says, is the kind of thing the ignorant among common people say when they pull off some feat: this happened by the virtue of so-and-so. The magicians dressed a plain superstition in the language of the court, but underneath it lies the reflex of crediting a man for what no man can grant. Ma'arif al-Qur'an adds that such pledges were in fashion then and remain common now, by the king, by your head, by your father's grave.",
            "bn": "ইবন কাসীর বিইযযাতি ফিরআউনের মধ্যে এমন কিছু শোনেন যা সাধারণ, আবার ইঙ্গিতবহও। তিনি বলেন, এ হলো সেই ধরনের কথা যা সাধারণ মানুষের ভেতর অজ্ঞরা বলে থাকে কোনো কেরামতি দেখাতে পারলে: এটা অমুকের বরকতে হলো। যাদুকররা সাদামাটা এক কুসংস্কারকে দরবারি ভাষার পোশাক পরিয়ে দিল, অথচ তার নিচে কাজ করছে সেই স্বভাব, যা একজন মানুষকে এমন কিছুর কৃতিত্ব দেয় যা কোনো মানুষই দিতে পারে না। মাআরিফুল কুরআন যোগ করে, তখনকার দিনে এমন শপথের চল ছিল, আজও আছে, ‘বাদশাহর কসম,’ ‘তোমার মাথার কসম,’ ‘তোমার বাবার কবরের কসম।’"
          }
        ]
      },
      {
        "h": {
          "en": "When an Oath Names a Creature",
          "bn": "সৃষ্টির নামে কসম কাটা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an does not leave the matter as a mere curiosity. To swear by anyone other than Allah, it says, is not allowed, because to swear by a thing is to exalt it, and that honor belongs to Allah alone. It presses the point further, citing Ruh: to swear a truthful oath by a creature is as sinful as swearing a false oath in the name of Allah. So the magicians' words were not only misplaced trust. By the reckoning of the sacred law, the oath itself was already a wrong, well before its content ever failed.",
            "bn": "মাআরিফুল কুরআন ব্যাপারটাকে নিছক কৌতূহলের বিষয় বলে ছেড়ে দেয় না। আল্লাহ ছাড়া অন্য কারও নামে কসম কাটা জায়েয নয়, কারণ কোনো কিছুর নামে কসম কাটা মানে তাকে বড় করা, আর সেই মর্যাদা কেবল আল্লাহরই প্রাপ্য। এটি আরও এগিয়ে ‘রূহ’-এর বরাতে বলে: সৃষ্টির নামে সত্য কসম কাটাও ততটাই গুনাহের, যতটা আল্লাহর নামে মিথ্যা কসম কাটা। তাই যাদুকরদের কথা কেবল ভুল জায়গায় রাখা ভরসা ছিল না। শরিয়তের হিসাবে কসমটা নিজেই ছিল এক নাফরমানি, তার বক্তব্য ব্যর্থ হওয়ার অনেক আগেই।"
          },
          {
            "en": "And this is not a flaw peculiar to a pagan court. The same instinct slips into ordinary speech, which is exactly why it had to be corrected even among believers. The Qur'an reports the magicians' oath without a syllable of praise for it, and the Sunnah is explicit about where an oath may point. What felt to them like a clever way of borrowing strength was, in the plain truth of it, handing to a mortal man a weight that God alone was ever meant to carry.",
            "bn": "আর এ দোষ কেবল কোনো মূর্তিপূজারি দরবারের একার নয়। একই স্বভাব সাধারণ কথাবার্তায়ও ঢুকে পড়ে, আর ঠিক এ কারণেই মুমিনদের ভেতরেও একে শুধরে দিতে হয়েছিল। কুরআন যাদুকরদের কসম বর্ণনা করে তার প্রশংসার একটি অক্ষরও ছাড়া, আর সুন্নাহ পরিষ্কার করে দেয় কসম কোন দিকে তাক করা যায়। তাদের কাছে যা মনে হয়েছিল শক্তি ধার করার চতুর কৌশল, তা আসলে ছিল এক নশ্বর মানুষের কাঁধে সেই ভার তুলে দেওয়া, যা বইবার কথা কেবল আল্লাহর।"
          }
        ]
      },
      {
        "h": {
          "en": "Swear by Allah or Be Silent",
          "bn": "আল্লাহর নামেই হোক কসম"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records that the Messenger of Allah, may peace and blessings be upon him, came upon Umar ibn al-Khattab as he rode among a company of travelers, swearing by his father. The Prophet said to him: Lo, Allah forbids you to swear by your fathers; whoever must take an oath, let him swear by Allah, or else keep silent. Umar was invoking no tyrant and no idol; he was honoring the memory of his own father. Even that, gently and at once, the Prophet turned back to God.",
            "bn": "সহীহ বুখারীতে এসেছে, রাসূলুল্লাহ ﷺ উমর ইবনুল খাত্তাব (রাঃ)-কে পেলেন এক কাফেলার সঙ্গে চলার পথে, তিনি তখন নিজের বাবার নামে কসম কাটছিলেন। নবী ﷺ তাঁকে বললেন: ‘সাবধান, আল্লাহ তোমাদের নিষেধ করছেন বাপ-দাদার নামে কসম কাটতে; কাউকে কসম কাটতে হলে সে যেন আল্লাহর নামে কসম কাটে, তা না হলে চুপ থাকে।’ উমর (রাঃ) কোনো জালেমের নামে কসম কাটছিলেন না, কোনো মূর্তির নামেও নয়; তিনি নিজের বাবার স্মৃতিকে সম্মান জানাচ্ছিলেন। এমনকি সেটুকুও, কোমলভাবে আর সঙ্গে সঙ্গেই, নবী ﷺ আল্লাহর দিকে ফিরিয়ে দিলেন।"
          },
          {
            "en": "Set the two scenes beside each other. In Pharaoh's court a crowd swears by the might of a king and calls the oath certainty. On a road outside Madinah, one man swears by a father he loved and is quietly turned back toward his Lord. The verse and the hadith teach a single lesson from opposite ends. An oath points to whatever a person holds highest, and the believer is trained to keep that pointing fixed on the one Being whom no defeat can ever reach or reduce.",
            "bn": "দুটি দৃশ্য পাশাপাশি রাখুন। ফেরাউনের দরবারে একদল মানুষ এক বাদশাহর ইযযতের কসম কেটে সেটাকেই নিশ্চয়তা বলে ডাকছে। আর মদিনার বাইরের এক পথে একজন মানুষ তাঁর ভালোবাসার বাবার নামে কসম কাটছেন, আর তাঁকে নীরবে ফিরিয়ে দেওয়া হচ্ছে তাঁর রবের দিকে। আয়াত আর হাদিস দুই প্রান্ত থেকে একই শিক্ষা দেয়। কসম তাক করে সেদিকেই, যাকে মানুষ সবচেয়ে উঁচুতে রাখে, আর মুমিনকে শেখানো হয় সেই তাক স্থির রাখতে একমাত্র সেই সত্তার উপর, যাঁকে কোনো পরাজয় কখনো ছুঁতে বা ছোট করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Illusion About to Break",
          "bn": "ভাঙার মুখে দাঁড়ানো ভেলকি"
        },
        "p": [
          {
            "en": "What exactly were they so sure of? Al-Muyassar and as-Sa'di both note that the ropes and staffs were made to appear to the watching crowd as live snakes darting across the ground. Ibn Kathir points to the parallel accounts elsewhere: in Surah al-A'raf they bewitched the eyes of the people and struck terror into them with a mighty magic (7:116); in Surah Ta Ha the ropes and sticks seemed, through their magic, to be moving fast (20:69). The confidence was real, but it was propped entirely on eyes that had been deceived.",
            "bn": "তারা ঠিক কিসের ব্যাপারে এত নিশ্চিত ছিল? মুয়াসসার আর সা'দী দুজনেই বলেন, রশি আর লাঠিগুলো দর্শকদের চোখে এমন করে তোলা হয়েছিল যেন সেগুলো জীবন্ত সাপ মাটিতে ছোটাছুটি করছে। ইবন কাসীর অন্যত্র বর্ণিত সমান্তরাল আয়াতগুলোর দিকে ইঙ্গিত করেন: সূরা আরাফে তারা মানুষের চোখ বেঁধে দিয়েছিল আর বিরাট যাদু দিয়ে তাদের মনে ভীতি ঢুকিয়ে দিয়েছিল (৭:১১৬); সূরা ত্বা-হায় রশি আর লাঠিগুলো তাদের যাদুতে যেন দ্রুত চলছে বলে মনে হচ্ছিল (২০:৬৯)। আত্মবিশ্বাস সত্যি ছিল, তবে তা পুরোপুরি দাঁড়িয়ে ছিল ধোঁকা খাওয়া কিছু চোখের উপর।"
          },
          {
            "en": "That is the setting for the verse that follows, and the reversal is already latent within this very verse. Ibn Kathir frames the entire encounter as truth hurled against falsehood: then Musa threw his staff, and it swallowed up everything they had faked (26:45), leaving not a trace of it behind. The boast sworn upon the might of Pharaoh did not survive its first contact with a single staff raised in the name of the Lord of the worlds. The verse we are reading is the summit from which that long fall begins.",
            "bn": "এটাই পরের আয়াতের প্রেক্ষাপট, আর সেই মোড় ঘুরে যাওয়ার বীজ এই আয়াতের ভেতরেই লুকিয়ে আছে। ইবন কাসীর গোটা ঘটনাকে দেখেন সত্যকে বাতিলের উপর ছুঁড়ে মারা হিসেবে: তারপর মূসা তাঁর লাঠি ছুঁড়লেন, আর তা গিলে ফেলল তাদের বানানো সবকিছু (২৬:৪৫), একটুও অবশিষ্ট না রেখে। ফেরাউনের ইযযতের কসমে গড়া দম্ভ জগৎসমূহের রবের নামে ওঠা একটিমাত্র লাঠির সঙ্গে প্রথম ধাক্কাতেই টিকল না। আমরা যে আয়াতটা পড়ছি, সেটাই সেই চূড়া, যেখান থেকে সেই দীর্ঘ পতন শুরু হয়।"
          },
          {
            "en": "Ibn Kathir reads the whole scene through two verses he cites: that Allah flings the truth against falsehood and it shatters it, so that it vanishes away (21:18), and that when truth arrives, falsehood departs (17:81). That is the law the magicians had wandered into without knowing it. Their oath was loud, their illusion was skilled, and both belonged to the side that always loses the instant truth is set beside it. The might of Pharaoh could dress the falsehood in splendor; it could not keep it standing for even one more verse.",
            "bn": "ইবন কাসীর গোটা দৃশ্যটা পড়েন তাঁর উদ্ধৃত দুটি আয়াতের আলোকে: আল্লাহ সত্যকে ছুঁড়ে মারেন বাতিলের উপর, ফলে তা বাতিলকে চূর্ণ করে দেয়, আর তা মিলিয়ে যায় (২১:১৮); আর সত্য এলে বাতিল বিদায় নেয় (১৭:৮১)। এই বিধানের ভেতরেই যাদুকররা না জেনে ঢুকে পড়েছিল। তাদের কসম ছিল চড়া, তাদের ভেলকি ছিল দক্ষ, আর দুটোই ছিল সেই পক্ষের, যে পক্ষ সত্যের পাশে দাঁড়ানোর মুহূর্তেই হেরে যায়। ফেরাউনের ইযযত বাতিলকে জৌলুসের পোশাক পরাতে পেরেছিল, কিন্তু আর একটি আয়াতও তাকে দাঁড় করিয়ে রাখতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Scene Will Not Sanction",
          "bn": "যা এ দৃশ্য অনুমোদন করে না"
        },
        "p": [
          {
            "en": "One caution belongs here, and in both languages. This verse describes exactly what its words describe: magicians in a tyrant's court, swearing by his might, standing on the losing side of a contest. It records an oath and a badly misplaced certainty, and nothing more. It licenses nothing against any living person or community, and nothing against those who act in error and have not yet been shown the truth. The Qur'an sets down the scene to turn the reader inward, to weigh his own certainties, never to arm him with a verdict over anyone else.",
            "bn": "এখানে একটি সতর্কতা দরকার, দুই ভাষাতেই। এই আয়াত ঠিক ততটুকুই বর্ণনা করে যতটুকু তার শব্দগুলো বলে: এক জালেমের দরবারে কিছু যাদুকর, তার ইযযতের কসম কেটে, এক প্রতিযোগিতার হেরে যাওয়া পক্ষে দাঁড়িয়ে। এটি এক কসম আর বাজেভাবে ভুল জায়গায় রাখা এক নিশ্চয়তার কথা বলে, এর বেশি কিছু নয়। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমোদন দেয় না, আর যারা ভুলের মধ্যে আছে অথচ এখনো সত্য দেখানো হয়নি, তাদের বিরুদ্ধেও নয়। কুরআন দৃশ্যটা তুলে ধরে পাঠককে ভেতরে ফেরাতে, নিজের নিশ্চয়তাগুলো ওজন করাতে, কখনোই অন্য কারও উপর রায় দেওয়ার হাতিয়ার তুলে দিতে নয়।"
          },
          {
            "en": "The warning runs the reader's own way, not outward at other people. It is always easier to read a verse like this as a portrait of somebody else, the deluded crowd, the doomed court, than to stop and ask where my own oaths actually land. The magicians swore by the strongest name they had ever known. The honest question is not how foolish they were on that day, but which name I quietly reach for whenever I want to feel certain, and whether that name can truly bear the weight I lay on it.",
            "bn": "সতর্কবাণীটা পাঠকের নিজের দিকেই বয়, বাইরে অন্যদের দিকে নয়। এমন একটা আয়াতকে অন্য কারও ছবি হিসেবে পড়া সবসময়ই সহজ, সেই ধোঁকা খাওয়া ভিড়, সেই ধ্বংসপ্রাপ্ত দরবার; বরং থেমে জিজ্ঞেস করা কঠিন যে আমার নিজের কসমগুলো আসলে কোথায় গিয়ে ঠেকে। যাদুকররা তাদের জানা সবচেয়ে শক্ত নামের কসম কেটেছিল। সৎ প্রশ্নটা এই নয় যে তারা সেদিন কত বোকা ছিল, বরং এই যে নিশ্চিত হতে চাইলে আমি চুপিচুপি কোন নামের দিকে হাত বাড়াই, আর সেই নাম কি সত্যিই সেই ভার বইতে পারে যা আমি তার উপর চাপাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where My Certainty Rests",
          "bn": "আমার নিশ্চয়তা যেখানে দাঁড়ায়"
        },
        "p": [
          {
            "en": "Bring the verse the whole way home. Everyone swears by something, if not always with the tongue then surely with the life. We stake our confidence on a salary, a title, a government, a good name, a person whose favor we are certain will hold. Bi-'izzati Fir'awn is only the ancient and unusually honest version of a bargain that is still struck quietly every single day. The question the verse keeps pressing is not whether I trust at all, but what I have made into my Pharaoh, the borrowed might I have mistaken for solid ground.",
            "bn": "আয়াতটাকে একেবারে ঘরে টেনে আনুন। প্রত্যেকেই কিছু-না-কিছুর কসম কাটে, মুখে না হলেও জীবন দিয়ে তো বটেই। আমরা আমাদের আত্মবিশ্বাস বাজি রাখি বেতনে, পদে, সরকারে, সুনামে, এমন কোনো মানুষে যার অনুগ্রহ টিকবে বলে ধরে নিই। বিইযযাতি ফিরআউন সেই বাজিরই পুরনো আর অস্বাভাবিক রকম সৎ চেহারা, যে বাজি আজও প্রতিদিন চুপচাপ ধরা হয়। আয়াত বারবার যে প্রশ্নটা তোলে তা এই নয় যে আমি আদৌ ভরসা করি কিনা, বরং এই যে আমি কাকে নিজের ফেরাউন বানিয়েছি, কোন ধার করা শক্তিকে শক্ত জমিন ভেবে বসে আছি।"
          },
          {
            "en": "As-Sa'di's diagnosis contains its own cure. What deluded the magicians was pomp mistaken for power, the eye halting at the glittering surface. The remedy is the insight that reaches the reality beneath: to see that every worldly might is a weak servant wearing a borrowed robe, and that true 'izzah is never a creature's to lend out. Swear, if swear you must, by the One whom no defeat can ever touch. Rest your certainty there, and it will still be standing on its feet when every borrowed name has long since lost its power.",
            "bn": "সা'দী যা ধরিয়ে দেন, তার ভেতরেই এর প্রতিকার লুকিয়ে। যাদুকরদের ধোঁকায় ফেলেছিল জৌলুসকে শক্তি ভেবে নেওয়া, চোখ থেমে গিয়েছিল ঝলমলে খোলসে। প্রতিকার সেই অন্তর্দৃষ্টি, যা নিচের আসল রূপ পর্যন্ত পৌঁছায়: দেখা যে দুনিয়ার প্রতিটি শক্তিই আসলে এক দুর্বল বান্দার গায়ে ধার করা আলখাল্লা, আর সত্যিকারের ইযযত কখনো কোনো সৃষ্টির ধার দেওয়ার জিনিস নয়। কসম কাটতেই হলে কাটুন একমাত্র সেই সত্তার নামে, যাঁকে কোনো পরাজয় কখনো ছুঁতে পারে না। নিশ্চয়তা সেখানে রাখুন, তবেই তা তখনো পায়ের উপর দাঁড়িয়ে থাকবে, যখন প্রতিটি ধার করা নাম বহু আগেই তার ক্ষমতা হারিয়ে ফেলেছে।"
          }
        ]
      }
    ]
  },
  "26:51": {
    "sections": [
      {
        "h": {
          "en": "By Dawn, By Midday",
          "bn": "সকালে এক, দুপুরে আরেক"
        },
        "p": [
          {
            "en": "Surah ash-Shu'ara is Makkan, and this stretch retells the contest between Moses and Pharaoh's magicians. They were summoned as the state's champions, promised reward if they prevailed. Then Moses threw his staff and it swallowed what they had faked, in 26:45. What happened next was not defeat but recognition: the magicians fell down in prostration, 26:46, and said we believe in the Lord of the worlds, the Lord of Moses and Aaron, in 26:47 and 26:48. The men brought to break Moses had just joined him.",
            "bn": "সূরা আশ-শুআরা মাক্কী, আর এই অংশ মূসা ও ফেরাউনের যাদুকরদের লড়াই আবার বলে। যাদুকরদের আনা হয়েছিল রাষ্ট্রের প্রতিনিধি করে, জিতলে পুরস্কারের ওয়াদা দিয়ে। এরপর মূসা তাঁর লাঠি ছুঁড়লেন, আর তা তাদের বানানো জিনিস গিলে ফেলল, ২৬:৪৫ আয়াতে। এর পরেরটা হার নয়, বরং চিনে ফেলা। যাদুকররা সিজদায় লুটিয়ে পড়ল, ২৬:৪৬, আর বলল আমরা জগৎসমূহের রবের প্রতি ঈমান আনলাম, মূসা ও হারুনের রবের প্রতি, ২৬:৪৭ ও ২৬:৪৮ আয়াতে। মূসাকে হারাতে আনা লোকগুলো তখন তাঁরই দলে।"
          },
          {
            "en": "Pharaoh reads it at once as revolt. You believed him before I gave you leave, he says in 26:49; then the threat, hands and feet cut on opposite sides and all of them crucified. Their answer in 26:50 carries no fear: no harm, to our Lord we return. Our verse, 26:51, is the second half of that reply. Having refused to fear him, they turn to God, and what they voice is not a boast but a hope, that their Lord will forgive their sins.",
            "bn": "ফেরাউন সঙ্গে সঙ্গে একে বিদ্রোহ ধরে নেয়। আমি অনুমতি দেওয়ার আগেই তোমরা তাকে মেনে নিলে, সে বলে ২৬:৪৯ আয়াতে। তারপর হুমকি, বিপরীত দিক থেকে হাত-পা কেটে ফেলা আর সবাইকে শূলে চড়ানো। ২৬:৫০ আয়াতে তাদের জবাবে কোনো ভয় নেই, কোনো ক্ষতি নেই, আমরা আমাদের রবের কাছেই ফিরে যাব। আমাদের আয়াত ২৬:৫১ সেই জবাবেরই দ্বিতীয় অংশ। ফেরাউনকে ভয় করতে অস্বীকার করে তারা আল্লাহর দিকে ফেরে। আর যা বলে তা অহংকার নয়, এক আশা, তাদের রব তাদের গুনাহ মাফ করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope That Awaits Mercy",
          "bn": "রহমতের আশায় বুক বাঁধা"
        },
        "p": [
          {
            "en": "The verb they choose is natma'u, we hope, we long for. At-Tabari reads it plainly as we hope, we place our expectation, that our Lord will forgive us the sins that came before we believed in Him, so that He will not punish us for them. Al-Muyassar gives the same sense, we hope that our Lord will forgive us. The word carries eager hope reaching toward a generous Lord, not a cool calculation, and it is aimed at forgiveness, not at escaping Pharaoh's blade.",
            "bn": "তারা যে ক্রিয়া বেছে নেয় তা নাতমাউ, আমরা আশা করি, আমরা আকুল হয়ে চাই। তাবারী একে সোজাভাবে পড়েন, আমরা আশা রাখি, আমরা এই প্রত্যাশা রাখি যে আমাদের রব আমাদের সেই গুনাহ মাফ করবেন যা তাঁর প্রতি ঈমান আনার আগে হয়ে গেছে, যেন তিনি এর জন্য আমাদের শাস্তি না দেন। মুয়াসসারও একই অর্থ দেন, আমরা আশা রাখি আমাদের রব আমাদের মাফ করবেন। শব্দটায় আছে উদার রবের দিকে বাড়িয়ে দেওয়া আকুল আশা, ঠান্ডা হিসাব নয়। আর তা তাক করা মাফের দিকে, ফেরাউনের তলোয়ার এড়ানোর দিকে নয়।"
          },
          {
            "en": "Notice where their hope points. It is not that Pharaoh will relent, nor that the crucifixion will be lifted; that danger they have already dismissed. Their whole reaching is toward the sins on their own record. At-Tabari's wording is that God forgive the sins that preceded their faith and not hold them to account for them. So the hope is precise: a clean slate before the Lord they have just met, whatever the tyrant does to the bodies that hoped it.",
            "bn": "খেয়াল করুন, তাদের আশা কোন দিকে তাক করা। ফেরাউন নরম হবে, কিংবা শূলে চড়ানো রদ হবে, সে দিকে নয়, সে বিপদ তারা আগেই উড়িয়ে দিয়েছে। তাদের গোটা আকুতি নিজেদের আমলনামায় জমা গুনাহের দিকে। তাবারীর ভাষায়, আল্লাহ যেন ঈমানের আগের গুনাহগুলো মাফ করেন আর সেসবের জন্য তাদের পাকড়াও না করেন। তাই আশাটা নিখুঁত, সদ্য পাওয়া রবের সামনে পরিষ্কার আমলনামা, অত্যাচারী শরীরগুলোর সঙ্গে যা-ই করুক না কেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sins They Name",
          "bn": "যে গুনাহের কথা তারা বলে"
        },
        "p": [
          {
            "en": "What sins? The commentators anchor the word in their actual past. At-Tabari, through Ibn Zayd, names it the sorcery and disbelief they had been living in. Ibn Kathir reads khatayana as the sins we committed, and adds the magic you compelled us to do, the you being Pharaoh. So the sins are not vague; they are the craft that had made them famous and the false worship of a man who called himself lord. That is the record they hand to God.",
            "bn": "কোন গুনাহ? তাফসীরকারেরা শব্দটাকে তাদের বাস্তব অতীতে গেঁথে দেন। তাবারী, ইবন যায়দের সূত্রে, একে বলেন সেই যাদু আর কুফর যার ভেতরে তারা এতদিন ছিল। ইবন কাসীর খাতায়ানা পড়েন আমাদের করা গুনাহ হিসেবে, আর যোগ করেন, আর যে যাদু তুমি আমাদের করতে বাধ্য করেছিলে, এখানে তুমি মানে ফেরাউন। তাই গুনাহগুলো অস্পষ্ট নয়। এ সেই বিদ্যা যা তাদের নাম করেছিল, আর যে নিজেকে রব বলত তার মিথ্যা উপাসনা। এই আমলনামাই তারা আল্লাহর হাতে তুলে দেয়।"
          },
          {
            "en": "As-Sa'di gathers the same, that God forgive us our sins of disbelief and magic and whatever else, and reads the closing clause as because we were the first to believe in Moses out of these troops. Al-Muyassar spells one strand out further, naming the sins of shirk and other than it, the association of partners with God that their service to Pharaoh had involved. Across the commentators the content is steady: idolatry and sorcery, named without flinching.",
            "bn": "সা'দি একই কথা জড়ো করেন, আল্লাহ যেন আমাদের কুফর, যাদু আর অন্য যা কিছু গুনাহ মাফ করেন। শেষ অংশটা তিনি পড়েন, কারণ এই সৈন্যদের মধ্যে আমরাই প্রথম মূসার প্রতি ঈমান এনেছি। মুয়াসসার একটা সুতো আরও খুলে দেন, গুনাহের মধ্যে শিরক আর তার বাইরের কথা এনে, ফেরাউনের সেবা করতে গিয়ে আল্লাহর সঙ্গে যে শরিক দাঁড় করানো হয়েছিল। তাফসীরকারদের কাছে বিষয়টা এক জায়গায় স্থির, শিরক আর যাদু, নির্দ্বিধায় নাম ধরে বলা।"
          },
          {
            "en": "There is a fine honesty in Ibn Kathir's phrase. The magic was something Pharaoh compelled, yet they still lay it on their own record and ask forgiveness for it, rather than pleading that they were only following orders. Pressure may explain a sin; it does not, in their mouths, erase it. New faith, here, does not rush to minimise the past. It names the past truthfully and then hopes, which is a harder and cleaner thing than excusing it away.",
            "bn": "ইবন কাসীরের কথায় এক সূক্ষ্ম সততা আছে। যাদু ছিল ফেরাউনের চাপিয়ে দেওয়া, তবু তারা সেটা নিজেদের আমলনামাতেই রাখে আর তার জন্যই মাফ চায়, হুকুম তামিল করেছি বলে দায় এড়ায় না। চাপ হয়তো গুনাহের কারণ বলে দেয়, কিন্তু তাদের মুখে সেটা গুনাহ মুছে দেয় না। নতুন ঈমান এখানে অতীতকে ছোট করে দেখাতে ছোটে না। বরং অতীতকে সত্যি বলে নাম দেয়, তারপর আশা রাখে, যা অজুহাত দেওয়ার চেয়ে কঠিন আর পরিষ্কার।"
          }
        ]
      },
      {
        "h": {
          "en": "First of Which Believers",
          "bn": "প্রথম ঈমানদার, কোন অর্থে"
        },
        "p": [
          {
            "en": "Then the reason they give: because we are the first of the believers. First of whom? One reading keeps it to that morning. Ibn Kathir takes it as first of our people, the Egyptians, to believe; al-Muyassar, first of the believers among your people, addressing Pharaoh. At-Tabari, again through Ibn Zayd, has them the first to believe in God's signs the moment they saw them. On this reading their priority is local and immediate: first among the crowd at the contest to bow.",
            "bn": "তারপর তারা যে কারণ দেয়, কারণ আমরাই প্রথম ঈমানদার। প্রথম কাদের মধ্যে? একটা পাঠ একে সেই সকালেই আটকে রাখে। ইবন কাসীর ধরেন, আমাদের জাতি মিসরীয়দের মধ্যে আমরাই প্রথম ঈমান আনলাম। মুয়াসসার বলেন, তোমার জাতির মধ্যে প্রথম ঈমানদার, কথাটা ফেরাউনকে বলা। তাবারী আবার ইবন যায়দের সূত্রে আনেন, নিদর্শন দেখামাত্র তারাই প্রথম আল্লাহর নিদর্শনে ঈমান আনল। এই পাঠে তাদের অগ্রগণ্যতা স্থানীয় আর তাৎক্ষণিক, লড়াইয়ের ভিড়ে মাথা নত করা প্রথম দল।"
          },
          {
            "en": "A second reading widens it. Al-Baghawi glosses first of the believers as of the people of our time, the first believers of their whole age. Al-Qurtubi carries the like from al-Farra', the first believers of our era. On this view the magicians claim something larger than being early at one gathering; they place themselves at the head of the believers of their generation. The two readings are close, but the horizon differs, one scene against one whole age.",
            "bn": "দ্বিতীয় একটা পাঠ পরিধিটা বাড়িয়ে দেয়। বাগাভী প্রথম ঈমানদার-কে ব্যাখ্যা করেন আমাদের যুগের মানুষদের মধ্যে প্রথম বলে, গোটা যুগের প্রথম ঈমানদার। কুরতুবী ফাররার সূত্রে একই রকম আনেন, আমাদের যুগের প্রথম ঈমানদার। এই দৃষ্টিতে যাদুকররা এক জমায়েতে আগে থাকার চেয়ে বড় কিছু দাবি করছে। তারা নিজেদের রাখছে নিজেদের প্রজন্মের ঈমানদারদের সামনের কাতারে। দুটি পাঠ কাছাকাছি, তবে দিগন্তটা আলাদা, একটা দৃশ্য আর একটা গোটা যুগ।"
          },
          {
            "en": "The grammar carries the sense. Al-Qurtubi explains the particle an here as meaning li-an, because: because we were the first to believe. He notes al-Farra' also allowed reading it as a conditional. Al-Qurtubi then records az-Zajjaj rejecting the first-of-our-age gloss, on the report that hundreds of thousands believed with Moses, the small band Pharaoh scorns in 26:54, related from Ibn Mas'ud and others. The commentators leave the exact scope open; the confession of priority stands either way.",
            "bn": "ব্যাকরণই অর্থটা বহন করে। কুরতুবী বলেন, এখানে আন কণাটির মানে লিআন, অর্থাৎ কারণ, কারণ আমরাই প্রথম ঈমান এনেছি। তিনি বলেন, ফাররা একে শর্তবাচক হিসেবে পড়াও জায়েজ রেখেছেন। এরপর কুরতুবী আনেন যে যাজ্জাজ যুগের-প্রথম পাঠটি নাকচ করেন, এই বর্ণনার ভিত্তিতে যে মূসার সঙ্গে লাখো মানুষ ঈমান এনেছিল, ২৬:৫৪ আয়াতে ফেরাউন যে ছোট দলকে তুচ্ছ করে সেই দল, বর্ণনাটি ইবন মাসঊদ ও অন্যদের সূত্রে। তাফসীরকারেরা সঠিক পরিধি খোলা রাখেন। অগ্রগণ্যতার স্বীকৃতি যেভাবেই হোক টিকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith Heavier Than Threat",
          "bn": "হুমকির চেয়ে ভারী ঈমান"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an lingers on how astonishing this is. These were men who had spent their lives on sinful sorcery and had believed in Pharaoh's claim to be a god, some even worshipping him; now they profess faith in Allah before that tyrant and the whole nation. It was not a bare declaration but a devotion so deep, Ma'arif says, that they seemed to see the Hereafter before their eyes and raised themselves above any punishment of this world. It calls their transformation a miracle of Moses no less than the staff.",
            "bn": "মাআরিফুল কুরআন থেমে ভাবে, ব্যাপারটা কতটা বিস্ময়কর। এরা সেই লোক যারা জীবন কাটিয়েছে পাপময় যাদুতে, আর ফেরাউনের রব হওয়ার দাবি মেনে নিয়েছিল, কেউ কেউ তো তার উপাসনাও করত। সেই তারাই এখন ওই অত্যাচারী আর গোটা জাতির সামনে আল্লাহর প্রতি ঈমানের ঘোষণা দেয়। এ কেবল মুখের ঘোষণা ছিল না, ছিল এমন গভীর নিষ্ঠা যে, মাআরিফ বলে, তারা যেন চোখের সামনে আখিরাত দেখছিল আর দুনিয়ার যেকোনো শাস্তির উপরে নিজেদের তুলে নিয়েছিল। তাদের এই বদলে যাওয়াকে সে মূসার এক মুজিজা বলে, লাঠির মুজিজার চেয়ে কম কিছু নয়।"
          },
          {
            "en": "Ibn Kathir traces the same reversal to sight. Pharaoh's threats, he writes, only increased their faith and submission, because the veil of disbelief had been lifted from their hearts. They had grasped something their people had not: that what Moses did could not be done by any human unless God helped him, which made it a proof of the truth he brought. Once a person sees that, a threat against the body is small news. Their calm is not bravado; it is the steadiness of people who now know.",
            "bn": "ইবন কাসীর একই উল্টে যাওয়াকে জুড়ে দেন দেখার সঙ্গে। ফেরাউনের হুমকি, তিনি লেখেন, তাদের ঈমান আর আত্মসমর্পণ কেবল বাড়িয়েই দিল, কারণ তাদের অন্তর থেকে কুফরের পর্দা সরে গিয়েছিল। তারা এমন কিছু ধরে ফেলেছিল যা তাদের জাতি পারেনি, মূসা যা করলেন তা আল্লাহর সাহায্য ছাড়া কোনো মানুষের পক্ষে করা অসম্ভব, আর এটাই তাঁর আনা সত্যের প্রমাণ। কেউ একবার তা দেখে ফেললে শরীরের উপর হুমকি আর বড় খবর থাকে না। তাদের শান্তভাব বাহাদুরি নয়, যারা এখন জানে তাদেরই স্থিরতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Islam Erases the Past",
          "bn": "ইসলাম মুছে দেয় অতীত"
        },
        "p": [
          {
            "en": "Their hope has a firm basis in the Prophet's own teaching, though it should be said plainly that the commentators here do not attach a specific hadith to this verse. The principle is stated in a sound report in Sahih Muslim. 'Amr ibn al-'As, once among the fiercest opponents of the Prophet, came to accept Islam and made one condition, that he be forgiven. He was asked whether he did not know a certain thing about the faith he was about to enter.",
            "bn": "তাদের এই আশার শক্ত ভিত্তি আছে খোদ নবীজি ﷺ-এর শিক্ষায়, তবে সোজা কথায় বলা দরকার, এখানকার তাফসীরকারেরা এই আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিস জোড়েননি। নীতিটা এসেছে সহীহ মুসলিমের এক সহীহ বর্ণনায়। আমর ইবনুল আস, এক সময় নবীজি ﷺ-এর সবচেয়ে কঠোর শত্রুদের একজন, ইসলাম গ্রহণ করতে আসেন আর একটাই শর্ত দেন, তাঁকে যেন মাফ করে দেওয়া হয়। তাঁকে জিজ্ঞেস করা হলো, যে দ্বীনে তিনি ঢুকতে যাচ্ছেন তার একটা কথা তিনি কি জানেন না।"
          },
          {
            "en": "The Prophet told him: Do you not know that Islam wipes out what came before it, and that migration wipes out what came before it, and that Hajj wipes out what came before it? The magicians had never heard those words, but they were reaching for the same reality: that entering faith can clear the record behind it. Muslim records the report as sound, from 'Amr's own deathbed account. Their hope, in short, was well placed, whatever Pharaoh did to them that day.",
            "bn": "নবীজি ﷺ তাঁকে বললেন, তুমি কি জানো না যে ইসলাম তার আগের সব মুছে দেয়, হিজরত তার আগের সব মুছে দেয়, আর হজ তার আগের সব মুছে দেয়? যাদুকররা এই কথাগুলো কখনো শোনেনি, তবু তারা একই বাস্তবতার দিকেই হাত বাড়াচ্ছিল, ঈমানে ঢোকা পেছনের আমলনামা পরিষ্কার করে দিতে পারে। মুসলিম বর্ণনাটিকে সহীহ হিসেবে রাখেন, আমরের নিজের মৃত্যুশয্যার বয়ান থেকে। সংক্ষেপে, তাদের আশা ঠিক জায়গাতেই ছিল, সেদিন ফেরাউন তাদের সঙ্গে যা-ই করুক।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Grants",
          "bn": "আয়াত যা দেয়, যা দেয় না"
        },
        "p": [
          {
            "en": "It helps to be clear about the mood of this verse. It is not a warning aimed at a condemned people; it is the high point of the believers' story in this passage. The ones speaking are the new Muslims, and the Qur'an gives them the last, luminous word before the scene closes. Whatever happened to their bodies, their hope is honoured by being recorded exactly as they voiced it. To read the line grimly is to miss that it is, in truth, a moment of triumph.",
            "bn": "এই আয়াতের সুরটা পরিষ্কার থাকা ভালো। এটা কোনো অভিশপ্ত জাতির উদ্দেশে হুঁশিয়ারি নয়, বরং এই অংশে ঈমানদারদের কাহিনির সর্বোচ্চ বিন্দু। যারা কথা বলছে তারা নতুন মুসলিম, আর দৃশ্য বন্ধ হওয়ার আগে কুরআন তাদের হাতেই তুলে দেয় শেষ ঝলমলে কথাটা। তাদের শরীরের যা-ই হোক, তাদের আশা সম্মান পায় ঠিক যেভাবে তারা বলেছিল সেভাবেই লিপিবদ্ধ হয়ে। লাইনটাকে বিষণ্ণভাবে পড়া মানে এটা মিস করা যে এ আসলে এক বিজয়ের মুহূর্ত।"
          },
          {
            "en": "One thing must be said plainly, in the way these studies always say it. The verse describes what the text describes: a tyrant's threat and a believer's answer within one story. It licenses nothing against any living person or community, and it is no warrant to treat anyone today as a Pharaoh or to repay threat with threat. Pharaoh here is the wrongdoer the account names; the lesson is drawn from the magicians' courage and hope, not from anyone's power to harm.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, এই আলোচনাগুলো যেভাবে সবসময় বলে। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, এক কাহিনির ভেতরে অত্যাচারীর হুমকি আর ঈমানদারের জবাব। এটা কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুর অনুমতি দেয় না, আজ কাউকে ফেরাউন বানিয়ে দেখার বা হুমকির বদলে হুমকি দেওয়ার কোনো সনদ এতে নেই। এখানে ফেরাউন সেই অন্যায়কারী যাকে বর্ণনা নাম ধরে বলে। শিক্ষা নেওয়া হয় যাদুকরদের সাহস আর আশা থেকে, কারও ক্ষতি করার ক্ষমতা থেকে নয়।"
          },
          {
            "en": "What became of them? As-Sa'di leaves it open: God may have allowed Pharaoh to do what he threatened, given his power that day, or God may have held him back from them. Ibn Kathir's abridgement ends bluntly, so he killed them all. The commentators do not force a single answer, and the verse itself does not report the outcome, only the hope. That silence is fitting: the point the passage presses is the faith, not the fate.",
            "bn": "তাদের কী হলো? সা'দি ব্যাপারটা খোলা রাখেন, সেদিনকার ক্ষমতার জোরে আল্লাহ হয়তো ফেরাউনকে তার হুমকি কাজে লাগাতে দিয়েছেন, কিংবা আল্লাহ হয়তো তাকে তাদের থেকে ঠেকিয়ে রেখেছেন। ইবন কাসীরের সংক্ষিপ্তসার সোজা কথায় শেষ হয়, তাই সে তাদের সবাইকে মেরে ফেলল। তাফসীরকারেরা একটা জবাব চাপিয়ে দেন না, আর আয়াত নিজেও পরিণতি জানায় না, শুধু আশাটাই বলে। এই নীরবতা মানানসই, অংশটা যা জোর দিয়ে বলে তা ঈমান, পরিণতি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hoping the Instant You Turn",
          "bn": "ফেরার মুহূর্তেই আশা"
        },
        "p": [
          {
            "en": "For a reader, the magicians model a particular move. The instant faith arrives, they turn it into hope for forgiveness, not into a wait until they feel worthy of it. Their record was heavy, yet ṭamaʿ, eager hope in a generous Lord, is exactly what they reach for first. The lesson is not to earn mercy before daring to hope for it, but to hope as the first act of a returning heart, trusting that the door God keeps is genuinely open.",
            "bn": "পাঠকের জন্য যাদুকররা একটা বিশেষ পদক্ষেপের নমুনা। ঈমান আসামাত্র তারা সেটাকে মাফের আশায় রূপ দেয়, যোগ্য বোধ করা পর্যন্ত অপেক্ষায় বসে থাকে না। তাদের আমলনামা ভারী ছিল, তবু তামাউ, উদার রবের প্রতি আকুল আশা, সেটাই তারা সবার আগে আঁকড়ে ধরে। শিক্ষাটা এই নয় যে আশা করার সাহস দেখানোর আগে রহমত অর্জন করতে হবে, বরং ফিরে আসা অন্তরের প্রথম কাজই হোক আশা, এই ভরসায় যে আল্লাহর রাখা দরজা সত্যিই খোলা।"
          },
          {
            "en": "The other half is courage. Faith that is real, even minutes old, can weigh more than the worst a Pharaoh can promise. Most of us are not threatened with crucifixion, but we know the smaller Pharaohs, the disapproval or cost that keeps a conviction unspoken. The magicians answer them by naming their past honestly and hoping openly. When something true reaches you, the invitation is the same: meet it now, own what was, and let hope, not fear, take the first step.",
            "bn": "বাকি অর্ধেকটা সাহস। খাঁটি ঈমান, মিনিট কয়েকের পুরনো হলেও, কোনো ফেরাউনের সবচেয়ে বড় হুমকির চেয়েও ভারী হতে পারে। আমাদের বেশিরভাগকে শূলে চড়ানোর ভয় দেখানো হয় না, তবু ছোট ফেরাউনদের আমরা চিনি, যে অসন্তুষ্টি বা দাম একটা বিশ্বাসকে মুখে আনতে দেয় না। যাদুকররা তাদের জবাব দেয় অতীতকে সত্যি বলে নাম দিয়ে আর খোলাখুলি আশা রেখে। সত্য কিছু আপনার কাছে পৌঁছলে ডাকটা একই, এখনই তাকে গ্রহণ করুন, যা ছিল তা মেনে নিন, আর প্রথম পা ফেলুক আশা, ভয় নয়।"
          }
        ]
      }
    ]
  },
  "26:57": {
    "sections": [
      {
        "h": {
          "en": "So We Drove Them Out",
          "bn": "এভাবেই বের করে দিলাম"
        },
        "p": [
          {
            "en": "Fa-akhrajnahum min jannatin wa-ʿuyun: so We drove them out of gardens and springs. The opening fa is the fa of consequence; it hangs the whole verse on the scene just before it, where Pharaoh mustered his cities to run down a people he called a small band (26:53 to 26:56). At-Tabari keeps the gloss plain: We drove Pharaoh and his people out of orchards and springs of water. The pronoun them is Pharaoh's people, not the Israelites, and the verb is God's, not theirs.",
            "bn": "ফা-আখরাজনাহুম মিন জান্নাতিন ওয়া-উয়ূন: এভাবে আমি তাদের উদ্যান আর ঝর্ণা থেকে বের করে দিলাম। শুরুর ফা হলো পরিণতির ফা, যা গোটা আয়াতকে ঝুলিয়ে রাখে ঠিক আগের দৃশ্যের সঙ্গে। সেখানে ফেরাউন তার শহরে নগরে লোক জড়ো করছিল সেই দলটিকে ধরতে, যাদের সে বলেছিল ক্ষুদ্র একটি দল (২৬:৫৩ ও ২৬:৫৬)। তাবারী সোজা কথায় অর্থ দেন: আমি ফেরাউন আর তার লোকদের বাগান আর পানির ঝর্ণা থেকে বের করে দিলাম। এখানে তাদের বলতে ফেরাউনের লোকেরা, বানী ইসরাঈল নয়। আর বের করার কাজটি আল্লাহর, তাদের নিজেদের নয়।"
          },
          {
            "en": "The order of things is worth pausing on. They were the pursuers, the settled masters of the land, riding out at dawn to reclaim their labour force. The verse does not wait for the sea to close over them before it announces the loss. It reads the verdict now, mid-chase: the gardens and springs they left behind that morning were gardens and springs they would never see again. What looked like a campaign of recovery was, in the telling of it, an eviction they were carrying out against themselves.",
            "bn": "ঘটনার ক্রমটা একটু থেমে দেখার মতো। তারাই ছিল পিছু ধাওয়াকারী, এই ভূমির প্রতিষ্ঠিত মালিক, ভোরবেলা বেরিয়ে পড়েছিল নিজেদের শ্রমিকদের ফিরিয়ে আনতে। সমুদ্র তাদের উপর বন্ধ হওয়া পর্যন্ত আয়াত অপেক্ষা করে না ক্ষতির ঘোষণা দিতে। তাড়া করার মাঝপথেই এখন রায়টা পড়ে শোনায়: সেই সকালে যে বাগান আর ঝর্ণা তারা পেছনে ফেলে গেল, তা আর কোনোদিন দেখবে না। যা মনে হচ্ছিল সম্পদ পুনরুদ্ধারের অভিযান, বর্ণনার ভেতরে তা ছিল নিজেরাই নিজেদের বিরুদ্ধে চালানো এক উচ্ছেদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens Along the Nile",
          "bn": "নীল নদের দুই তীরে"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads gardens and springs as a whole: it means the land of Egypt. He preserves a report from Abdullah ibn ʿAmr that the gardens ran along both banks of the Nile, from Aswan in the south to Rashid in the north, with cultivated fields lying between them. Al-Baghawi keeps the same picture in a line: the orchards stretched along the two banks of the Nile. This was not a country with gardens in it; it was a green ribbon of garden the length of a river, and the river fed all of it.",
            "bn": "কুরতুবী উদ্যান আর ঝর্ণাকে একসঙ্গে পড়েন: এর অর্থ মিসরের ভূমি। তিনি আবদুল্লাহ ইবন আমর থেকে একটি বর্ণনা তুলে রাখেন যে, বাগানগুলো ছড়িয়ে ছিল নীল নদের দুই তীর ধরে, দক্ষিণে আসওয়ান থেকে উত্তরে রশিদ পর্যন্ত, আর তাদের মাঝখানে শোভা পেত ফসলের খেত। বাগাভীও এক লাইনে একই ছবি রাখেন: বাগানগুলো বিস্তৃত ছিল নীল নদের দুই কিনারা ধরে। এটা এমন কোনো দেশ ছিল না যার ভেতরে কিছু বাগান আছে। এটা ছিল একটা নদীর দৈর্ঘ্য জুড়ে সবুজ বাগানের ফিতা, আর নদীই তার পুরোটাকে পানি জোগাত।"
          },
          {
            "en": "As-Saʿdi lets the abundance ring: the surpassing gardens and orchards of Egypt, its gushing springs, and crops that had filled their lands and made their towns and their countryside flourish. Read together, the commentators are not just naming what Pharaoh's people owned; they are measuring it. This was among the richest, best-watered, most productive land the ancient world knew, held by the very court that thought itself divine and thought its hold on it permanent. The verse names the wealth precisely so that its removal will register.",
            "bn": "সাদী প্রাচুর্যটাকে বাজতে দেন: মিসরের অতুলনীয় বাগান আর উদ্যান, তার উপচে পড়া ঝর্ণা, আর যে ফসল তাদের জমি ভরে দিয়েছিল আর তাদের শহর-গ্রাম সমৃদ্ধ করেছিল। একসঙ্গে পড়লে তাফসীরকারেরা কেবল ফেরাউনের লোকদের সম্পদের নাম বলছেন না, তারা তার মাপ নিচ্ছেন। এ ছিল প্রাচীন পৃথিবীর জানা সবচেয়ে ধনী, সবচেয়ে সুসেচিত আর সবচেয়ে উৎপাদনশীল ভূমিগুলোর একটি, আর তা ছিল সেই দরবারের হাতে যে নিজেকে খোদা ভাবত আর ভাবত এই দখল চিরস্থায়ী। আয়াত সম্পদের নাম নেয় ঠিক এইজন্যই, যাতে তা ছিনিয়ে নেওয়াটা ধরা পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Springs of Water or Gold",
          "bn": "ঝর্ণা, না সোনার শিরা"
        },
        "p": [
          {
            "en": "Over the word ʿuyun, springs, the commentators divide, and al-Qurtubi records both readings side by side. The majority, he says, hold that ʿuyun here means springs of water, and al-Baghawi agrees, glossing them as flowing streams. Against that, al-Qurtubi cites Saʿid ibn Jubayr, who read ʿuyun as springs of gold, veins of the metal running through the land. Al-Qurtubi keeps the disagreement open rather than settling it, and it is worth keeping open: the two readings pull the verse in slightly different directions.",
            "bn": "উয়ূন, অর্থাৎ ঝর্ণা, শব্দটি নিয়ে তাফসীরকারেরা ভাগ হয়ে যান, আর কুরতুবী দুটি পাঠই পাশাপাশি লিখে রাখেন। তাঁর মতে অধিকাংশের মত, এখানে উয়ূন মানে পানির ঝর্ণা, আর বাগাভীও তাতে সায় দিয়ে এর অর্থ করেন বহমান নহর। এর বিপরীতে কুরতুবী সাঈদ ইবন জুবায়েরের কথা তুলে আনেন, যিনি উয়ূনকে পড়েছেন সোনার শিরা হিসেবে, ভূমির ভেতর দিয়ে বয়ে যাওয়া ধাতুর ধারা। কুরতুবী মীমাংসা না করে মতভেদটা খোলা রাখেন, আর তা খোলা রাখাই ভালো। দুটি পাঠ আয়াতকে সামান্য ভিন্ন দিকে টানে।"
          },
          {
            "en": "On the majority reading, the loss is of life itself: the water that grew everything, without which the green ribbon is desert. On Saʿid ibn Jubayr's reading, the loss is of the treasure beneath the land as well as the harvest above it. Neither reading is a stretch, and the verse loses nothing by carrying both. What both share is the point the surah keeps making: whatever fed Pharaoh's confidence, water or gold, was on the list of things being taken from him, not the list of things that could save him.",
            "bn": "অধিকাংশের পাঠে ক্ষতিটা জীবনেরই: যে পানি সব কিছু ফলাত, যা ছাড়া সবুজ ফিতাটাই মরুভূমি। সাঈদ ইবন জুবায়েরের পাঠে ক্ষতি উপরের ফসলের সঙ্গে ভূমির নিচের গুপ্তধনেরও। কোনো পাঠই বাড়াবাড়ি নয়, আর দুটোকে একসঙ্গে বহন করলে আয়াতের কিছুই কমে না। দুটোরই মধ্যে যা মিল, তা এই সূরার বারবার বলা কথাটাই: ফেরাউনের আত্মবিশ্বাসকে যা-ই খাওয়াত, পানি হোক বা সোনা, তা ছিল তার কাছ থেকে কেড়ে নেওয়ার তালিকায়, তাকে বাঁচাতে পারে এমন জিনিসের তালিকায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A River from Paradise",
          "bn": "জান্নাত থেকে নেমে আসা নদী"
        },
        "p": [
          {
            "en": "To convey how blessed this water was, al-Qurtubi brings a narration under the verse. Muslim reports from Abu Hurayra that the Messenger of Allah, peace be upon him, said: Sayhan, Jayhan, the Euphrates and the Nile are all among the rivers of Paradise. Qurtubi cites it precisely because the springs the verse names are fed by that river; the point is the rank of the water Pharaoh's people were standing beside. Muslim places the report in his Sahih and gives it no separate grade.",
            "bn": "এই পানি কতটা বরকতময় ছিল তা বোঝাতে কুরতুবী আয়াতের নিচে একটি বর্ণনা তুলে আনেন। মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে, আল্লাহর রাসূল ﷺ বলেছেন: সায়হান, জায়হান, ফুরাত আর নীল, সবই জান্নাতের নহরগুলোর অন্তর্ভুক্ত। কুরতুবী এটি উদ্ধৃত করেন ঠিক এইজন্য যে, আয়াতে যে ঝর্ণার নাম, তার জল আসে সেই নদী থেকেই। কথাটা হলো, ফেরাউনের লোকেরা যে পানির পাশে দাঁড়িয়ে ছিল তার মর্যাদা কত উঁচু। মুসলিম বর্ণনাটি তাঁর সহীহ গ্রন্থে রাখেন এবং আলাদা কোনো মান উল্লেখ করেন না।"
          },
          {
            "en": "The narration describes the standing of these rivers; it is not a ruling to be built on, and Qurtubi carries it as a note on the Nile's blessedness, not as law. Held next to the verse, it sharpens the irony without needing a word added. Pharaoh's people were driven from water the Prophet would one day name among the rivers of Paradise, and driven from it in pursuit of the people they had oppressed. They walked away from a garden watered like the Garden to chase a grievance to its end.",
            "bn": "বর্ণনাটি এই নদীগুলোর মর্যাদার কথা বলে, এটি এমন কোনো বিধান নয় যার উপর কিছু গড়া হবে। কুরতুবী এটি বহন করেন নীল নদের বরকত নিয়ে একটি মন্তব্য হিসেবে, আইন হিসেবে নয়। আয়াতের পাশে রাখলে এটি একটা কথাও না বাড়িয়ে ব্যঙ্গটাকে ধারালো করে তোলে। ফেরাউনের লোকদের বের করে দেওয়া হলো এমন পানি থেকে, যাকে নবী ﷺ একদিন জান্নাতের নহরগুলোর মধ্যে গণ্য করবেন, আর বের করা হলো তাদের পিছু ধাওয়ার মধ্যে যাদের তারা নির্যাতন করেছিল। জান্নাতের মতো সেচ পাওয়া এক বাগান ছেড়ে তারা হেঁটে গেল এক ক্ষোভকে শেষ পর্যন্ত টেনে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Bliss Into Fire",
          "bn": "নিয়ামত থেকে আগুনে"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the arc past the water. On these verses he writes that they went out from this bliss into Hellfire, leaving behind those lofty dwellings, the gardens and rivers, the wealth and provisions, the dominion and the abundant standing they had held in the world. In his abridged commentary the same reading is put sharply: they were thrown out of those blessings and into the Fire, and left behind the honourable places, the gardens and rivers, the wealth, provision, position and power. The eviction from Egypt and the fall into the Fire are told as one motion.",
            "bn": "ইবন কাসীর রেখাটা পানির ওপারেও টানেন। এই আয়াতগুলোতে তিনি লেখেন যে, তারা এই নিয়ামত থেকে বেরিয়ে গেল জাহান্নামের দিকে, পেছনে ফেলে গেল সেই সব উঁচু ইমারত, বাগান আর নদী, ধন আর রিজিক, দুনিয়ায় তাদের হাতে থাকা রাজত্ব আর প্রচুর মর্যাদা। তাঁর সংক্ষিপ্ত তাফসীরে একই পাঠ আরো তীক্ষ্ণভাবে আসে: তাদের ছুড়ে ফেলা হলো সেই নিয়ামতগুলো থেকে আগুনের ভেতরে, আর তারা পেছনে ফেলে গেল সম্মানের জায়গা, বাগান আর নদী, ধন, রিজিক, পদ আর ক্ষমতা। মিসর থেকে উচ্ছেদ আর জাহান্নামে পতন এক টানেই বর্ণিত।"
          },
          {
            "en": "Ibn Kathir adds a line that names the justice in it: Pharaoh and his troops were punished with the very thing he had sought to inflict on the Children of Israel. He had gathered his cities to wipe out a people and seize what little they had; the wiping-out and the seizure came, but turned the other way. The measure he raised was the measure poured back on him. The gardens did not defend their owners, and the power that hoarded them did not outlast a morning's chase.",
            "bn": "ইবন কাসীর একটি লাইন জুড়ে দেন যা এর ভেতরের ইনসাফের নাম বলে: ফেরাউন আর তার সৈন্যদের শাস্তি দেওয়া হলো ঠিক সেই জিনিস দিয়ে, যা সে বানী ইসরাঈলের উপর চাপাতে চেয়েছিল। সে তার শহরগুলো জড়ো করেছিল একটা জাতিকে নিশ্চিহ্ন করতে আর তাদের সামান্য যা ছিল তা কেড়ে নিতে। নিশ্চিহ্ন করা আর কেড়ে নেওয়া এলো ঠিকই, তবে উল্টো দিকে ফিরে। যে মাপকাঠি সে তুলেছিল, সেই মাপেই তার উপর ঢেলে দেওয়া হলো। বাগান তাদের মালিকদের রক্ষা করল না, আর যে ক্ষমতা তা জমিয়েছিল তা এক সকালের তাড়াকেও পেরোতে পারল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Inherited by the Oppressed",
          "bn": "উত্তরাধিকার পেল নিপীড়িতরা"
        },
        "p": [
          {
            "en": "The verse does not leave the gardens empty. Al-Muyassar joins the removal to what followed: Allah drove Pharaoh and his people out of the land of Egypt, with its orchards, springs of water, treasuries and fine dwellings, and as He drove them out, He made those same dwellings, after them, belong to the Children of Israel. What 26:57 begins, 26:59 completes in a word: We caused the Children of Israel to inherit them. The wealth was not destroyed with its owners; it changed hands.",
            "bn": "আয়াত বাগানগুলো খালি ফেলে রাখে না। মুয়াসসার উচ্ছেদকে জুড়ে দেন এরপর যা ঘটল তার সঙ্গে: আল্লাহ ফেরাউন আর তার লোকদের মিসরের ভূমি থেকে বের করে দিলেন, তার বাগান, পানির ঝর্ণা, ধনভান্ডার আর সুন্দর ঘরবাড়িসহ, আর যেভাবে বের করলেন, সেই একই ঘরবাড়ি তাদের পরে তুলে দিলেন বানী ইসরাঈলের হাতে। ২৬:৫৭ যা শুরু করে, ২৬:৫৯ এক কথায় তা শেষ করে: আমি বানী ইসরাঈলকে এসবের উত্তরাধিকারী করে দিলাম। সম্পদ তার মালিকদের সঙ্গে ধ্বংস হয়নি, তা হাতবদল হয়েছে।"
          },
          {
            "en": "There is a design in who inherited. The people handed the gardens were the enslaved band Pharaoh had called small and enraging, the labour force he rode out to drag back. Ibn Kathir reads it alongside other verses where God makes those counted weak in the land into its heirs and its leaders. The transfer is not random spoils; it is the reversal the whole account has been moving toward, the low raised into the seat the high were emptied from.",
            "bn": "কে উত্তরাধিকার পেল, তার মধ্যে একটা পরিকল্পনা আছে। যাদের হাতে বাগান তুলে দেওয়া হলো, তারা সেই দাস দলটি, যাদের ফেরাউন বলেছিল ক্ষুদ্র আর ক্রোধ জাগানো, যে শ্রমিকদের ফিরিয়ে আনতে সে ছুটে বেরিয়েছিল। ইবন কাসীর এটি পড়েন সেই আয়াতগুলোর পাশে যেখানে আল্লাহ ভূমিতে দুর্বল গণ্য হওয়া লোকদের বানান তার উত্তরাধিকারী আর নেতা। এই হাতবদল কোনো এলোমেলো গনিমত নয়, এ হলো গোটা কাহিনি যেদিকে এগোচ্ছিল সেই উল্টে যাওয়া, নিচু জনকে তুলে বসানো সেই আসনে, যেখান থেকে উঁচুদের খালি করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Over the Living",
          "bn": "জীবিত কারও উপর অধিকার নয়"
        },
        "p": [
          {
            "en": "A word of care is owed here. This verse and its neighbours describe a specific people whom the Qur'an names, Pharaoh and his court, and it describes what the text describes: their eviction and their end. It licenses nothing against any living person or community. Nothing in it authorises treating a modern nation, an ethnic group, or the people of any land as though they were Pharaoh's people, or seizing what others hold in the name of a reversal God alone brings about. The account is a warning read inward, not a warrant handed outward.",
            "bn": "এখানে একটু সতর্কতার কথা বলা দরকার। এই আয়াত আর তার প্রতিবেশী আয়াতগুলো কুরআনের নাম-উল্লেখ করা একটি নির্দিষ্ট জাতির কথা বলে, ফেরাউন আর তার দরবার, আর তা বর্ণনা করে যা লেখাটি বর্ণনা করে: তাদের উচ্ছেদ আর তাদের পরিণতি। এটি জীবিত কোনো ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এর কোথাও আজকের কোনো জাতি, কোনো নৃগোষ্ঠী বা কোনো ভূমির মানুষকে ফেরাউনের লোক ভেবে আচরণ করার, কিংবা আল্লাহই কেবল যে উলটপালট ঘটান তার নামে অন্যের সম্পদ কেড়ে নেওয়ার অনুমতি নেই। কাহিনিটি ভেতরের দিকে পড়ার সতর্কবাণী, বাইরের দিকে বাড়িয়ে দেওয়া কোনো ছাড়পত্র নয়।"
          },
          {
            "en": "Kept in its place, the verse aims at the reader's own grip on things. Its subject is not a people to be despised but a posture to be feared: the certainty that what I hold is mine by right and cannot be taken. Pharaoh held that certainty over the richest land of his age, and the surah shows how thin it was. The lesson is a mirror for anyone with something to lose, which is everyone, and it points the finger inward before it points anywhere at all.",
            "bn": "নিজের জায়গায় রাখলে আয়াতটি নিশানা করে পাঠকের নিজের জিনিসের উপর আঁকড়ে ধরাকে। এর বিষয় ঘৃণা করার মতো কোনো জাতি নয়, বরং ভয় করার মতো একটা মনোভাব: এই নিশ্চয়তা যে, আমি যা ধরে আছি তা ন্যায্যভাবে আমারই আর তা কেড়ে নেওয়া যায় না। ফেরাউন তার যুগের সবচেয়ে ধনী ভূমির উপর সেই নিশ্চয়তা পুষত, আর সূরা দেখায় তা কত পলকা ছিল। এই শিক্ষা এক আয়না, হারানোর মতো কিছু আছে এমন যে কারো জন্য, অর্থাৎ সবার জন্য, আর তা আঙুল তোলে ভেতরের দিকে, বাইরে কোথাও তোলার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything Held on Loan",
          "bn": "সবকিছুই ধারে পাওয়া"
        },
        "p": [
          {
            "en": "Strip the story to what it teaches and one line remains: the gardens were never owned, only held. Pharaoh's people had deeds to none of it. They drew on the land, the water and the wealth for a season, and the season closed on a schedule that was not theirs to set. What the commentators show, verse by verse, is how fast the whole estate could pass from the hand that clutched it to the hand it had crushed, and how little warning the owners were given.",
            "bn": "কাহিনিকে তার শিক্ষায় নামিয়ে আনলে একটা লাইন থেকে যায়: বাগান কখনো মালিকানার ছিল না, শুধু হাতে রাখা ছিল। ফেরাউনের লোকদের কাছে এর কোনোটার দলিল ছিল না। তারা ভূমি, পানি আর সম্পদ থেকে ভোগ করেছে একটা মৌসুম, আর মৌসুম শেষ হয়েছে এমন সময়সূচি মেনে, যা ঠিক করার হাত তাদের ছিল না। তাফসীরকারেরা আয়াতে আয়াতে যা দেখান, তা হলো গোটা সম্পত্তি কত দ্রুত হাতবদল হয়ে যেতে পারে আঁকড়ে ধরা হাত থেকে পিষ্ট হওয়া হাতে, আর মালিকদের কত কম আগাম সতর্কতা দেওয়া হয়।"
          },
          {
            "en": "So the verse turns a plain question on whoever reads it. What am I holding as if the deed were mine, my house, my standing, my health, the people around me, when all of it is lent and none of it signed over? Held loosely, these are gifts to be grateful for and to spend well. Held the way Pharaoh held Egypt, as proof of my own permanence, they become the thing I ride out to defend on the morning I lose everything. The believer keeps the loan in view and gives thanks while it lasts.",
            "bn": "তাই আয়াত একটা সোজা প্রশ্ন ঘুরিয়ে দেয় যে-ই তা পড়ে তার দিকে। কোন জিনিসকে আমি এমনভাবে ধরে আছি যেন দলিলটা আমারই, আমার ঘর, আমার মর্যাদা, আমার স্বাস্থ্য, আমার চারপাশের মানুষ, অথচ সবই ধারে দেওয়া, কোনোটাই আমার নামে লিখে দেওয়া নয়? আলগা করে ধরলে এগুলো এমন নিয়ামত, যার জন্য কৃতজ্ঞ হওয়া যায় আর ভালোভাবে খরচ করা যায়। ফেরাউন যেভাবে মিসরকে ধরেছিল সেভাবে ধরলে, নিজের স্থায়িত্বের প্রমাণ হিসেবে, তা হয়ে ওঠে সেই জিনিস যা রক্ষা করতে আমি ছুটে বেরোই সব হারানোর সকালে। মুমিন ধারের কথাটা চোখের সামনে রাখে আর যতক্ষণ আছে ততক্ষণ শোকর আদায় করে।"
          }
        ]
      }
    ]
  },
  "26:66": {
    "sections": [
      {
        "h": {
          "en": "One Sea, Two Endings",
          "bn": "একই সমুদ্র, দুই পরিণতি"
        },
        "p": [
          {
            "en": "Then We drowned the others. The whole verse is three words in Arabic, thumma aghraqna al-akhirin, and it lands like a door swinging shut. To feel its weight you have to read it beside the two verses before it. In 26:64 God brings the pursuers near the parted sea; in 26:65 He saves Moses and everyone with him, all together; and only then, in 26:66, come the others. The rescue is finished first. The drowning follows. Three verses, and the sea has served two opposite purposes.",
            "bn": "অতঃপর অপর দলটিকে ডুবিয়ে মারলাম। পুরো আয়াতটি আরবিতে তিনটি শব্দ, ছুম্মা আগরাকনাল আখিরীন, আর তা যেন একটা দরজা ধুম করে বন্ধ হওয়ার মতো নেমে আসে। এর ভার বুঝতে হলে আগের দুই আয়াতের পাশে রেখে পড়তে হবে। ২৬:৬৪ আয়াতে আল্লাহ ধাওয়াকারীদের বিভক্ত সমুদ্রের কাছে এনে দেন; ২৬:৬৫ আয়াতে মূসা (আঃ) ও তাঁর সঙ্গী সবাইকে একসাথে উদ্ধার করেন; আর কেবল তারপর, ২৬:৬৬ আয়াতে, আসে অপর দলটি। উদ্ধার আগে শেষ হয়। ডুবে মরা তার পরে। তিন আয়াত, আর সমুদ্র দুটি বিপরীত কাজ করেছে।"
          },
          {
            "en": "The same water was a road of rescue for one people and a grave for another, in a single morning, at a single place. What decided which it would be for you was not where you stood on the shore but which side of the truth you had chosen. Moses had said one verse earlier, with the army at his back and the sea ahead, that his Lord was with him and would guide him. Pharaoh had spent the whole surah refusing sign after sign. The sea did not sort them; their choices did, and the sea only carried out the verdict.",
            "bn": "একই পানি এক জাতির জন্য উদ্ধারের পথ, আরেক জাতির জন্য কবর, একই সকালে, একই জায়গায়। কোনটা কার জন্য কী হবে তা ঠিক করেছে তীরের কোথায় কে দাঁড়িয়ে ছিল তা নয়, বরং সত্যের কোন পাশ সে বেছে নিয়েছিল সেটাই। এক আয়াত আগে মূসা (আঃ) পেছনে সৈন্যদল আর সামনে সমুদ্র রেখে বলেছিলেন, তাঁর রব তাঁর সঙ্গে আছেন, তিনি তাঁকে পথ দেখাবেন। ফেরাউন গোটা সূরা জুড়ে একের পর এক নিদর্শন প্রত্যাখ্যান করে গেছে। সমুদ্র তাদের আলাদা করেনি, তাদের নিজেদের বাছাই করেছে, সমুদ্র শুধু রায়টা কার্যকর করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Others Are",
          "bn": "অপর দলটি আসলে কারা"
        },
        "p": [
          {
            "en": "The verse never names the drowned. It calls them simply al-akhirin, the others, and leans on the contrast the verse before it has already set up. In 26:65 God saved Moses and all who were with him; the others are everyone outside that circle. Al-Qurtubi glosses the word in three words of his own, that it means Pharaoh and his people. Al-Baghawi gives the same reading, Pharaoh and his people. The Qur'an withholds the name because the surrounding verses have already made plain who is meant.",
            "bn": "আয়াত ডুবে মরাদের নাম নেয় না। সে তাদের শুধু বলে আল-আখিরীন, অপর দল, আর আগের আয়াত যে বৈসাদৃশ্য গড়ে দিয়েছে তার উপর ভর করে। ২৬:৬৫ আয়াতে আল্লাহ মূসা (আঃ) ও তাঁর সঙ্গী সবাইকে উদ্ধার করেছেন; অপর দল হলো সেই বৃত্তের বাইরের সবাই। কুরতুবী নিজের তিনটি শব্দে শব্দটির অর্থ দেন, এর মানে ফেরাউন ও তার সম্প্রদায়। বাগাভীও একই পাঠ দেন, ফেরাউন ও তার সম্প্রদায়। কুরআন নামটা চেপে রাখে, কারণ আশপাশের আয়াত আগেই স্পষ্ট করে দিয়েছে কাদের কথা বলা হচ্ছে।"
          },
          {
            "en": "At-Tabari fills in the same identification and adds where and when it happened: then We drowned Pharaoh and his people of the Copts in the sea, after We had saved Moses and those with him from it. The naming matters less than the sorting. On one side stands a prophet and a rescued nation; on the other, a king and the state he had built, its leaders and its army, the host Ibn Kathir describes setting out in pursuit. The single word draws the line between the two.",
            "bn": "তাবারী একই পরিচয় দেন, আর কোথায় ও কখন তা ঘটল তা যোগ করেন: অতঃপর আমি ফেরাউন ও তার কিবতী সম্প্রদায়কে সমুদ্রে ডুবিয়ে দিলাম, মূসা ও তাঁর সঙ্গীদের তা থেকে উদ্ধার করার পর। নামের চেয়ে আলাদা করাটাই বড়। এক পাশে এক নবী আর উদ্ধার পাওয়া এক জাতি; আরেক পাশে এক বাদশাহ আর তার গড়া রাষ্ট্র, তার নেতা আর সৈন্যদল, ইবন কাসীর যে ধাওয়া করতে বেরোনো বাহিনীর কথা বলেন। একটিমাত্র শব্দ দুই দলের মাঝখানে দাগ টেনে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not One Was Left Out",
          "bn": "একজনও বাদ পড়েনি"
        },
        "p": [
          {
            "en": "What strikes the commentators is how complete each outcome was. As-Sa'di reads the verse in a single clause: of the drowned, not one of them held back from the drowning. Ibn Kathir sets the two halves side by side. God saved Moses and the Children of Israel and everyone who followed their religion, so that not one of them perished; and Pharaoh and his soldiers were drowned, so that not a man of them remained but was destroyed. Total rescue on one side, total ruin on the other.",
            "bn": "তাফসীরকারদের যা নজর কাড়ে তা হলো প্রতিটি পরিণতি কতটা পূর্ণ ছিল। সাদী এক ছোট বাক্যে আয়াতটি পড়েন: ডুবে মরাদের একজনও ডুবে মরা থেকে বাদ পড়েনি। ইবন কাসীর দুই দিক পাশাপাশি রাখেন। আল্লাহ মূসা (আঃ), বনী ইসরাঈল আর তাদের দ্বীন যারা অনুসরণ করেছিল সবাইকে উদ্ধার করলেন, ফলে তাদের একজনও ধ্বংস হলো না; আর ফেরাউন ও তার সৈন্যদল ডুবল, ফলে তাদের একটি লোকও বাকি রইল না, সবাই ধ্বংস হলো। এক পাশে পূর্ণ উদ্ধার, আরেক পাশে পূর্ণ ধ্বংস।"
          },
          {
            "en": "This symmetry is the point, not an incidental detail. A partial rescue would leave the believer wondering whether standing with the truth is really enough; a partial drowning would leave the tyrant room to think power might still buy an exit. The verse closes both doors. Everyone who belonged to Moses was carried through, and everyone who belonged to Pharaoh went down. The end of the matter was exact, and it fell along the one line that had ever mattered: whom each person had chosen to follow.",
            "bn": "এই ভারসাম্যটাই মূল কথা, কোনো বাড়তি খুঁটিনাটি নয়। আংশিক উদ্ধার হলে মুমিন ভাবত সত্যের পাশে দাঁড়ানো সত্যিই যথেষ্ট কি না; আংশিক ডুবে মরা হলে অত্যাচারী ভাবার সুযোগ পেত ক্ষমতা হয়তো এখনো বেরোনোর পথ কিনে দিতে পারে। আয়াত দুটো দরজাই বন্ধ করে দেয়। মূসার (আঃ) দলের সবাইকে পার করে দেওয়া হলো, আর ফেরাউনের দলের সবাই তলিয়ে গেল। শেষ ফয়সালা ছিল নিখুঁত, আর তা পড়ল সেই একটি রেখা বরাবর যা চিরকালই আসল ছিল: কে কার অনুসরণ বেছে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road That Became a Grave",
          "bn": "যে পথ কবর হয়ে গেল"
        },
        "p": [
          {
            "en": "The detail that makes the judgment so pointed is that both peoples used the same opening. When Moses struck the sea it parted, Ibn Kathir relays, into twelve paths, one for each tribe, and as-Suddi adds that there were windows in the walls of water through which the tribes could see one another, while a wind made the sea bed firm underfoot. Down these very roads the Children of Israel walked to safety. And it was into these same roads that Pharaoh's army was then brought.",
            "bn": "যে জিনিসটা বিচারটাকে এত ধারালো করে তোলে তা হলো, দুই জাতি একই খোলা পথ ব্যবহার করেছিল। মূসা (আঃ) সমুদ্রে আঘাত করতেই তা বিভক্ত হয়ে যায়, ইবন কাসীর বলেন, বারোটি পথে, প্রতিটি গোত্রের জন্য একটি করে। সুদ্দী যোগ করেন, পানির দেয়ালে জানালা ছিল, যার ভেতর দিয়ে গোত্রগুলো একে অপরকে দেখতে পেত, আর এক বাতাস সমুদ্রের তলা পায়ের নিচে শক্ত করে দিয়েছিল। এই পথ ধরেই বনী ইসরাঈল নিরাপত্তার দিকে হেঁটে গেল। আর এই একই পথেই তারপর ফেরাউনের বাহিনীকে এনে ফেলা হলো।"
          },
          {
            "en": "Al-Muyassar traces the sequence closely: the sea stayed parted until Moses and his people crossed to dry land, and only then did God drown Pharaoh and those with him by making the sea close back over them, after they had entered it in pursuit. The word thumma, then, marks the order. Salvation was not interrupted in order to punish; it was completed, and the punishment came after. What had been a corridor of deliverance became, without changing at all, the trap that shut on the men who had chased the delivered into it.",
            "bn": "মুয়াসসার ধারাটা কাছ থেকে দেখান: মূসা (আঃ) ও তাঁর লোকেরা শুকনো তীরে পার হওয়া পর্যন্ত সমুদ্র বিভক্ত হয়েই ছিল, আর কেবল তারপর আল্লাহ সমুদ্রকে তাদের উপর আবার মিলিয়ে দিয়ে ফেরাউন ও তার সঙ্গীদের ডুবিয়ে দিলেন, ধাওয়া করে তারা সমুদ্রে ঢোকার পর। ছুম্মা শব্দটি, অর্থাৎ অতঃপর, ক্রমটা চিহ্নিত করে। শাস্তি দিতে গিয়ে উদ্ধার থামিয়ে দেওয়া হয়নি; উদ্ধার পূর্ণ হলো, তারপর এলো শাস্তি। যা ছিল মুক্তির করিডোর, তা এতটুকু না বদলেই সেই ফাঁদ হয়ে গেল, যা উদ্ধার পাওয়াদের পিছু ধাওয়াকারীদের উপর বন্ধ হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "When the End Is Just",
          "bn": "শেষটা যখন ন্যায়ের"
        },
        "p": [
          {
            "en": "It would be a misreading to hear cruelty in this ending. The drowning falls at the close of a long story in which Pharaoh had enslaved a nation, ordered the killing of its sons, called Moses a liar, dismissed clear signs as magic, and mocked the God who sent them. The very next verse says most of them were not believers, not for lack of evidence but against it. The judgment did not arrive suddenly or arbitrarily. It arrived last, after every warning had been given and refused.",
            "bn": "এই পরিণতিতে নিষ্ঠুরতা শোনা হবে ভুল পাঠ। ডুবে মরাটা আসে এক দীর্ঘ কাহিনির শেষে, যেখানে ফেরাউন এক জাতিকে গোলাম বানিয়েছিল, তাদের ছেলেদের হত্যার হুকুম দিয়েছিল, মূসাকে (আঃ) মিথ্যাবাদী বলেছিল, স্পষ্ট নিদর্শনকে জাদু বলে উড়িয়ে দিয়েছিল, আর যে আল্লাহ তাদের পাঠিয়েছিলেন তাঁকে নিয়ে ঠাট্টা করেছিল। ঠিক পরের আয়াত বলে, তাদের অধিকাংশই বিশ্বাসী ছিল না, প্রমাণের অভাবে নয়, প্রমাণ থাকা সত্ত্বেও। বিচার হঠাৎ বা খেয়ালখুশিমতো আসেনি। তা এসেছে সবার শেষে, প্রতিটি সতর্কবার্তা দেওয়া আর প্রত্যাখ্যাত হওয়ার পর।"
          },
          {
            "en": "Justice of this kind is also mercy, seen from the other side. A tyranny that had crushed the weak for years was brought to an end in a single morning, and the people it had enslaved walked out from under it. Ibn Kathir reads the whole episode, with its wonders and its aid to God's believing servants, as a proof of His wisdom. The rescue is the point the Qur'an keeps returning to; the drowning is what it cost the ones who would not stop hunting the rescued.",
            "bn": "এমন বিচার আরেক দিক থেকে দেখলে রহমতও বটে। যে অত্যাচার বছরের পর বছর দুর্বলদের পিষছিল, তা এক সকালেই থেমে গেল, আর যাদের সে গোলাম বানিয়ে রেখেছিল তারা তার নিচ থেকে বেরিয়ে এল। ইবন কাসীর গোটা ঘটনাকে, তার বিস্ময় আর আল্লাহর মুমিন বান্দাদের সাহায্য করার দিকটা সহ, তাঁর হিকমতের প্রমাণ হিসেবে পড়েন। উদ্ধারের কথাতেই কুরআন বারবার ফিরে আসে; আর ডুবে মরা হলো তার মূল্য, যারা উদ্ধার পাওয়াদের পিছু ধাওয়া থামাতে চায়নি তাদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Named for This",
          "bn": "এই দিনের নামেই যে দিন"
        },
        "p": [
          {
            "en": "This deliverance left a mark on the calendar that the Prophet Muhammad kept. Ibn Abbas reported that when the Prophet came to Medina he found the Jews fasting on the day of Ashura and asked them about it. They answered that it was a good day, the day on which God rescued the Children of Israel from their enemy, so Moses had fasted it. The Prophet said, We have more claim to Moses than you, and he fasted that day and ordered that it be fasted. The report is in Sahih al-Bukhari.",
            "bn": "এই উদ্ধার ক্যালেন্ডারে এমন একটা দাগ রেখে গেল, যা নবী মুহাম্মদ ﷺ ধরে রেখেছিলেন। ইবন আব্বাস (রাঃ) বর্ণনা করেন, নবী ﷺ মদীনায় এসে দেখলেন ইহুদিরা আশুরার দিন রোজা রাখছে, আর এ নিয়ে তাদের জিজ্ঞেস করলেন। তারা জানাল, এটা ভালো দিন, যেদিন আল্লাহ বনী ইসরাঈলকে তাদের শত্রু থেকে উদ্ধার করেছিলেন, তাই মূসা (আঃ) এ দিন রোজা রেখেছিলেন। নবী ﷺ বললেন, মূসার (আঃ) উপর তোমাদের চেয়ে আমাদের হক বেশি, আর তিনি সেদিন রোজা রাখলেন এবং রোজা রাখার হুকুম দিলেন। বর্ণনাটি সহীহ বুখারীতে আছে।"
          },
          {
            "en": "Notice what the day commemorates. It is not the destruction of Pharaoh that Moses marked with fasting, but the rescue of the oppressed, met with gratitude to God. The response the Qur'an models to this event is thanksgiving, not triumph over the drowned. The believer who reads 26:66 is being taught to see God's power to save and to answer a call, and to turn that recognition into worship, exactly as the earlier prophet did and as the final Prophet chose to continue.",
            "bn": "খেয়াল করুন দিনটা কী স্মরণ করায়। মূসা (আঃ) রোজা রেখে ফেরাউনের ধ্বংসকে স্মরণ করেননি, বরং নির্যাতিতদের উদ্ধারকে, আর তা আল্লাহর প্রতি কৃতজ্ঞতা দিয়ে। এই ঘটনার জবাবে কুরআন যে ছাঁচ দেখায় তা শুকরিয়া, ডুবে মরাদের উপর জয়ের উল্লাস নয়। যে মুমিন ২৬:৬৬ পড়ে তাকে শেখানো হচ্ছে আল্লাহর উদ্ধার করার আর ডাকে সাড়া দেওয়ার ক্ষমতা দেখতে, আর সেই উপলব্ধিকে ইবাদতে রূপ দিতে, ঠিক যেমন আগের নবী করেছিলেন আর শেষ নবী ﷺ চালিয়ে যাওয়া বেছে নিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant for Any Hand",
          "bn": "কারো হাতে কোনো ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in case the scene is ever misused. This verse reports an act of God. The drowning of Pharaoh and his host was divine judgment, carried out by God alone on a specific tyrant and the army that had chased a fleeing people into the sea. It describes what the text describes, and it licenses nothing against any living person or community. No group today may read its own enemies into the word the others and imagine in it a warrant for harm.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, যদি কখনো দৃশ্যটার অপব্যবহার হয়। এই আয়াত আল্লাহর এক কাজের বর্ণনা। ফেরাউন ও তার বাহিনীর ডুবে মরা ছিল আল্লাহর বিচার, একমাত্র তিনিই তা করেছেন এক নির্দিষ্ট অত্যাচারী আর সেই সৈন্যদলের উপর, যারা পালিয়ে যাওয়া এক জাতিকে সমুদ্রে ধাওয়া করেছিল। আয়াত যা বর্ণনা করে তাই বর্ণনা করে, আর কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আজ কোনো দল অপর দল শব্দটির ভেতরে নিজের শত্রুদের পড়ে নিয়ে ক্ষতি করার ছাড়পত্র কল্পনা করতে পারে না।"
          },
          {
            "en": "The distinction is the whole of it. God judges nations in His own time and by His own hand; He has not handed that role to anyone. What the verse asks of a reader is not the sword but self-examination. It sets before you the end of a man who knew the truth and fought it, and it asks whether you are on his road or on the road that was carried through the sea. The warning searches the reader; it arms nobody against a neighbour.",
            "bn": "পার্থক্যটাই আসল কথা। আল্লাহ জাতিদের বিচার করেন তাঁর নিজের সময়ে, তাঁর নিজের হাতে; সেই ভার তিনি কাউকে দিয়ে দেননি। আয়াত পাঠকের কাছে তলোয়ার চায় না, চায় নিজেকে যাচাই করা। সে আপনার সামনে এমন এক লোকের পরিণতি রাখে যে সত্য জেনেও তার বিরুদ্ধে লড়েছিল, আর জিজ্ঞেস করে আপনি তার পথে আছেন, নাকি যে পথ সমুদ্রের ভেতর দিয়ে পার করে দেওয়া হয়েছিল সেই পথে। সতর্কবার্তা পাঠককে খোঁজে; সে প্রতিবেশীর বিরুদ্ধে কাউকে অস্ত্র তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Side the End Finds",
          "bn": "শেষটা কোন পাশে পায়"
        },
        "p": [
          {
            "en": "Strip the verse to its bones and this is what remains: a moment when everything was finally sorted, and the sorting was true. For a long while before that morning the two sides had looked tangled together, the tyrant powerful and the believers cornered, the outcome anything but obvious. Then the end came and separated them cleanly, and it turned out that the only thing that had ever counted was which side of the truth each person stood on. Every delay had only postponed a verdict, never cancelled it.",
            "bn": "আয়াতটাকে হাড় পর্যন্ত ছেঁটে ফেললে যা থাকে তা হলো: এমন এক মুহূর্ত যখন সবকিছু অবশেষে আলাদা হয়ে গেল, আর সেই আলাদা করাটা ছিল সত্য। সেই সকালের আগে অনেকটা সময় দুই পক্ষকে জড়ানো মনে হয়েছিল, অত্যাচারী শক্তিশালী আর মুমিনরা কোণঠাসা, পরিণতি মোটেও স্পষ্ট নয়। তারপর শেষটা এসে তাদের পরিষ্কার আলাদা করে দিল, আর দেখা গেল একটাই জিনিস চিরকাল আসল ছিল: সত্যের কোন পাশে কে দাঁড়িয়ে ছিল। প্রতিটি দেরি শুধু রায়টা পিছিয়ে দিয়েছিল, বাতিল করেনি।"
          },
          {
            "en": "That is the verse's quiet claim on anyone who reads it now. The ends we live among still look tangled; wrong often seems to prosper and faith to be cornered. This verse says a sorting is coming that will be just, and that the side you are on is being chosen now, in the ordinary small choices nobody drowns for yet. Read this way, thumma aghraqna al-akhirin is less a report about an old sea than a question about where you are standing today.",
            "bn": "এখন যে পড়ছে তার উপরও আয়াতের এই নীরব দাবি। আমরা যেসব পরিণতির ভেতরে বাস করি সেগুলোও জড়ানো মনে হয়; অন্যায় প্রায়ই রমরমা মনে হয় আর ঈমান কোণঠাসা। এই আয়াত বলে, এমন এক আলাদা করা আসছে যা হবে ন্যায়ের, আর আপনি কোন পাশে থাকবেন তা এখনই বাছা হচ্ছে, সেই সাধারণ ছোট বাছাইগুলোতে যার জন্য এখনো কেউ ডোবে না। এভাবে পড়লে ছুম্মা আগরাকনাল আখিরীন পুরনো এক সমুদ্র নিয়ে খবর কম, আপনি আজ কোথায় দাঁড়িয়ে আছেন তা নিয়ে প্রশ্ন বেশি।"
          }
        ]
      }
    ]
  },
  "26:80": {
    "sections": [
      {
        "h": {
          "en": "In the Middle of a Description",
          "bn": "একটি বর্ণনার মাঝখানে"
        },
        "p": [
          {
            "en": "Ibrahim (AS) has asked his people what they worship, and 26:74 gives their answer: we found our fathers doing so. He replies in 26:77 that all of them are enemies to him except the Lord of the worlds, and then, instead of continuing the argument, he describes that Lord. 26:78-82 is the description. Only afterwards, from 26:83, does he ask Him for anything at all.",
            "bn": "ইবরাহীম (আঃ) তাঁর জাতিকে জিজ্ঞেস করেছেন তারা কীসের পূজা করে, আর 26:74 দেয় তাদের উত্তর: আমরা আমাদের পিতৃপুরুষদের এমনই করতে দেখেছি। তিনি 26:77-এ জবাব দেন যে বিশ্বজগতের প্রতিপালক ছাড়া তারা সবাই তাঁর শত্রু; এরপর যুক্তিতর্ক চালিয়ে যাওয়ার বদলে তিনি সেই প্রতিপালকেরই বর্ণনা দিতে শুরু করেন। 26:78-82 সেই বর্ণনা। কেবল তার পরেই, 26:83 থেকে, তিনি তাঁর কাছে কিছু চান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Chain, and One Break",
          "bn": "একটি শৃঙ্খল, আর একটি ছেদ"
        },
        "p": [
          {
            "en": "In the mushaf, 26:78, 26:79, 26:80 and 26:81 are four words each, and 26:82 runs longer. Four of the five clauses hang on the same relative pronoun, alladhi, the One who: the One who created me, and the One who feeds me, and the One who causes me to die, and the One who I hope will forgive me. The pattern is steady enough that the exception is audible.",
            "bn": "মুসহাফে 26:78, 26:79, 26:80 ও 26:81 প্রতিটি চার শব্দের, আর 26:82 তার চেয়ে দীর্ঘ। পাঁচটি বাক্যাংশের চারটিই ঝুলে আছে একই সম্বন্ধবাচক শব্দ 'আল্লাযী'—অর্থাৎ 'যিনি'—এর ওপর: যিনি আমাকে সৃষ্টি করেছেন, আর যিনি আমাকে খাওয়ান, আর যিনি আমার মৃত্যু ঘটাবেন, আর যিনি সম্পর্কে আমি আশা করি তিনি আমাকে ক্ষমা করবেন। ছন্দটি এতটাই স্থির যে ব্যতিক্রমটি কানে ধরা পড়ে।"
          },
          {
            "en": "26:80 is that exception. It does not begin with alladhi. It begins with a condition and a first-person verb: wa idha maridtu, and when I fall ill — and only then, fahuwa yashfin, He cures me. Illness is the one item in the whole list that is not built into a description of the Lord. It is placed on the speaker's own side of the sentence, and the cure is attributed afterwards.",
            "bn": "26:80 সেই ব্যতিক্রম। এটি 'আল্লাযী' দিয়ে শুরু হয় না। এটি শুরু হয় একটি শর্ত ও উত্তম পুরুষের ক্রিয়া দিয়ে: 'ওয়া ইযা মারিদতু' — আর আমি যখন অসুস্থ হই; আর কেবল তখনই আসে 'ফাহুয়া ইয়াশফীন' — তিনিই আমাকে আরোগ্য দেন। গোটা তালিকায় অসুস্থতাই একমাত্র বিষয় যা প্রতিপালকের বর্ণনার ভেতরে গাঁথা হয়নি। একে রাখা হয়েছে বাক্যের সেই পাশে যেখানে বক্তা নিজে আছেন, আর আরোগ্যের সম্বন্ধ জোড়া হয়েছে তারপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Credited With What",
          "bn": "কার নামে কী লেখা হলো"
        },
        "p": [
          {
            "en": "Follow the attributions across the five verses and a pattern appears that is easy to miss when they are read as one flowing prayer. Creating, guiding, feeding, giving drink, curing, causing death, giving life and forgiving are all attributed to Him. The two things placed on the speaker are his illness and his fault — khati'ati, my sin. What is good is said of the Lord; what is unwelcome is spoken in the first person.",
            "bn": "পাঁচটি আয়াত জুড়ে সম্বন্ধগুলো অনুসরণ করলে এমন এক ধরন ধরা পড়ে, যা একটানা প্রার্থনা হিসেবে পড়লে সহজেই চোখ এড়িয়ে যায়। সৃষ্টি করা, পথ দেখানো, খাওয়ানো, পান করানো, আরোগ্য দেওয়া, মৃত্যু ঘটানো, জীবন দেওয়া ও ক্ষমা করা — সবই তাঁরই দিকে সম্বন্ধিত। আর বক্তার ঘাড়ে রাখা হয়েছে দুটি জিনিস: তাঁর অসুস্থতা আর তাঁর ত্রুটি — 'খাতীআতী', আমার অপরাধ। যা কল্যাণ তা বলা হয়েছে প্রতিপালকের নামে; যা অপ্রীতিকর তা বলা হয়েছে উত্তম পুরুষে।"
          },
          {
            "en": "The pattern is not a blanket rule about avoiding hard subjects, and the passage itself shows it. Death is attributed to Allah directly in 26:81 — the One who causes me to die and then gives me life — because dying is not an evil in the Quran's account of it, but an appointed transition. And the last clause changes register too: it does not state forgiveness, it hopes for it.",
            "bn": "এই ধরনটি কঠিন বিষয় এড়িয়ে যাওয়ার কোনো ঢালাও নিয়ম নয়, আর অনুচ্ছেদটি নিজেই তা দেখিয়ে দেয়। 26:81-এ মৃত্যুর সম্বন্ধ সরাসরি আল্লাহর দিকেই করা হয়েছে — যিনি আমার মৃত্যু ঘটাবেন, তারপর আমাকে জীবিত করবেন — কারণ কুরআনের বর্ণনায় মৃত্যু কোনো অকল্যাণ নয়, বরং একটি নির্ধারিত উত্তরণ। আর শেষ বাক্যাংশটির সুরও বদলে যায়: এটি ক্ষমার ঘোষণা দেয় না, ক্ষমার আশা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir on the Manner",
          "bn": "ইবনে কাসীর এই রীতি প্রসঙ্গে"
        },
        "p": [
          {
            "en": "Ibn Kathir treats this as deliberate courtesy of speech. Ibrahim (AS) related falling ill to himself and the cure to Allah, he writes, although the illness too is by Allah's decree and making. He then points to two other places where the Quran speaks in the same manner, which is what makes the observation more than an appreciation of a single verse.",
            "bn": "ইবনে কাসীর এটিকে দেখেন ইচ্ছাকৃত ভাষিক ভদ্রতা হিসেবে। তিনি লেখেন, ইবরাহীম (আঃ) রোগাক্রান্ত হওয়ার সম্বন্ধ করেছেন নিজের দিকে আর আরোগ্যের সম্বন্ধ করেছেন আল্লাহর দিকে, অথচ রোগও আল্লাহরই নির্ধারণ ও সৃষ্টি। এরপর তিনি আরও দুটি জায়গার দিকে ইঙ্গিত করেন যেখানে কুরআন একই রীতিতে কথা বলে — আর এ কারণেই পর্যবেক্ষণটি কেবল একটি আয়াতের সৌন্দর্য উপভোগ করার চেয়ে বেশি কিছু।"
          },
          {
            "en": "The first is Surah al-Fatiha. 1:7 attributes the favour directly, those upon whom You have bestowed favour, while the anger is named without an agent, those who have earned anger. The second is 72:10, where the jinn say they do not know whether evil is intended for those on earth or whether their Lord intends for them a right course. The right course is attributed; the evil is left unattached.",
            "bn": "প্রথমটি সূরা আল-ফাতিহা। 1:7 অনুগ্রহের সম্বন্ধ সরাসরি করে — যাদের ওপর আপনি অনুগ্রহ করেছেন; অথচ গযবের কথা বলা হয় কর্তার নাম না নিয়ে — যারা গযবপ্রাপ্ত। দ্বিতীয়টি 72:10, যেখানে জিনরা বলে, তারা জানে না পৃথিবীবাসীর জন্য অকল্যাণ চাওয়া হয়েছে, নাকি তাদের প্রতিপালক তাদের জন্য সঠিক পথ চান। সঠিক পথের সম্বন্ধ করা হয়েছে; অকল্যাণকে কারও সঙ্গে জোড়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Is Not Denying",
          "bn": "আয়াতটি যা অস্বীকার করছে না"
        },
        "p": [
          {
            "en": "The sentence names who cures. It does not say that there is nothing to be done. Al-Bukhari relates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah has not sent down a disease except that He has sent down a cure for it, which is an instruction to go and look for the cure. And where the Quran describes healing at a creature's hands, in 3:49 and again in 5:110, it attaches the permission of Allah in the same breath.",
            "bn": "বাক্যটি বলে দেয় কে আরোগ্য দেন। এটি বলে না যে করার মতো কিছু নেই। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, আল্লাহ এমন কোনো রোগ নাযিল করেননি যার জন্য তিনি আরোগ্যও নাযিল করেননি — এটি তো আরোগ্য খুঁজে বের করারই নির্দেশ। আর কুরআন যেখানে কোনো সৃষ্টির হাতে আরোগ্যের বর্ণনা দেয় — 3:49-এ, আবার 5:110-এ — সেখানে একই নিঃশ্বাসে 'আল্লাহর অনুমতিক্রমে' কথাটি জুড়ে দেয়।"
          },
          {
            "en": "So the verse sorts causes rather than abolishing them. Medicine, surgery, rest and a competent doctor are the means through which the cure named here arrives, and pursuing them is not a lapse in tawakkul. What the verse rules out is the quiet transfer of confidence from the One who cures to the thing He cures through, which usually happens without anybody deciding on it.",
            "bn": "অর্থাৎ আয়াতটি উপায়-উপকরণ বাতিল করে না, বরং সেগুলোকে সাজিয়ে দেয়। ওষুধ, অস্ত্রোপচার, বিশ্রাম ও দক্ষ চিকিৎসক — এগুলোই সেই মাধ্যম যার ভেতর দিয়ে এখানে উল্লেখিত আরোগ্য এসে পৌঁছায়, আর এগুলোর পেছনে ছোটা তাওয়াক্কুলের ঘাটতি নয়। আয়াতটি যা বাতিল করে তা হলো নিঃশব্দে ভরসাটিকে সরিয়ে নেওয়া — যিনি আরোগ্য দেন তাঁর কাছ থেকে সেই জিনিসের দিকে যার মাধ্যমে তিনি আরোগ্য দেন; আর এটি সাধারণত ঘটে কারও সিদ্ধান্ত ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying It in the Ward",
          "bn": "হাসপাতালের ঘরে কথাটি বলা"
        },
        "p": [
          {
            "en": "The grammar carries one last piece of comfort. Ibrahim (AS) does not say if I fall ill; he says when. The Arabic idha is used of what is expected rather than of what merely might occur, so illness enters his description of a well-ordered life as a normal event and not as an interruption of one. That alone changes how a diagnosis is heard.",
            "bn": "ব্যাকরণটি শেষ একটি সান্ত্বনাও বহন করে। ইবরাহীম (আঃ) বলেন না 'যদি আমি অসুস্থ হই'; তিনি বলেন 'যখন'। আরবি 'ইযা' ব্যবহৃত হয় প্রত্যাশিত বিষয়ের ক্ষেত্রে, নিছক ঘটতে পারে এমন কিছুর ক্ষেত্রে নয়; ফলে সুবিন্যস্ত এক জীবনের বর্ণনায় অসুস্থতা ঢোকে স্বাভাবিক ঘটনা হিসেবে, সেই জীবনের ব্যাঘাত হিসেবে নয়। কেবল এটুকুই বদলে দেয় কোনো রোগনির্ণয় কীভাবে শোনা যাবে।"
          },
          {
            "en": "And the whole passage is in the first person. It is not a doctrine about illness in general but a man saying aloud what he knows about his own Lord, in front of people who disagreed with him. Said in a hospital corridor, four words in Arabic, the sentence does the same work it did then: it puts the illness on one side, and the One who cures on the other.",
            "bn": "আর গোটা অনুচ্ছেদটি উত্তম পুরুষে। এটি সাধারণভাবে অসুস্থতা নিয়ে কোনো মতবাদ নয়, বরং একজন মানুষের উচ্চস্বরে বলা কথা — নিজের প্রতিপালক সম্পর্কে সে যা জানে, তা-ই বলছে, এমন মানুষদের সামনে যারা তার সঙ্গে একমত ছিল না। হাসপাতালের করিডোরে বলা হলেও, আরবিতে চারটি শব্দের এই বাক্যটি সেদিনকার কাজটিই করে: অসুস্থতাকে এক পাশে রাখে, আর যিনি আরোগ্য দেন তাঁকে অন্য পাশে।"
          }
        ]
      }
    ]
  },
  "26:83-85": {
    "sections": [
      {
        "h": {
          "en": "After the Argument, the Asking",
          "bn": "তর্কের পর প্রার্থনা"
        },
        "p": [
          {
            "en": "Surah ash-Shu'ara tells the story of Ibrahim (AS) from 26:69, where the Prophet ﷺ is told to recite his news. He questions his people about what they worship, they answer that they found their fathers doing so, and he turns from arguing with them to describing his Lord — the One who created me and guides me, who feeds me and gives me drink, and who cures me when I am ill.",
            "bn": "সূরা আশ-শুআরা ইবরাহীম (আঃ)-এর ঘটনা শুরু করে 26:69 থেকে, যেখানে নবী ﷺ-কে তাঁর বৃত্তান্ত পাঠ করে শোনাতে বলা হয়। তিনি তাঁর সম্প্রদায়কে প্রশ্ন করেন, তারা কীসের ইবাদত করে; তারা উত্তর দেয়, তারা তাদের পূর্বপুরুষদের এমনটাই করতে পেয়েছে। এরপর তিনি তাদের সঙ্গে তর্ক থেকে সরে এসে নিজের প্রতিপালকের বর্ণনা দেন — যিনি আমাকে সৃষ্টি করেছেন ও পথ দেখান, যিনি আমাকে খাওয়ান ও পান করান, আর অসুস্থ হলে যিনি আমাকে সুস্থ করেন।"
          },
          {
            "en": "The description keeps climbing until 26:81-82, where he says that his Lord will cause him to die and then give him life, and that he hopes for forgiveness of his fault on the Day of Recompense. Only then does he ask for anything. The sequence is the lesson before the content: he establishes who is being addressed, at length and in public, and the petitions come afterwards.",
            "bn": "বর্ণনাটি উঠতে থাকে 26:81-82 পর্যন্ত, যেখানে তিনি বলেন, তাঁর প্রতিপালকই তাঁর মৃত্যু ঘটাবেন, তারপর তাঁকে জীবিত করবেন; আর তিনি আশা করেন, বিচার দিবসে তাঁর ত্রুটি ক্ষমা করা হবে। ঠিক এরপরেই তিনি কিছু চান। ক্রমটিই বিষয়বস্তুর আগের শিক্ষা: তিনি প্রথমে দীর্ঘভাবে ও প্রকাশ্যে স্থির করে নেন কাকে সম্বোধন করা হচ্ছে, আর আবেদনগুলো আসে তার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Grant Me Hukm",
          "bn": "আমাকে হুকম দাও"
        },
        "p": [
          {
            "en": "The first request is rabbi hab li hukman. Translators part company here: the app's English renders hukm as authority, its Bengali as wisdom, and other renderings give sound judgement. The early commentators split the same way. Ibn Kathir reports Ibn Abbas (RA) glossing hukm as knowledge, Ikrimah as intellect, Mujahid as the Quran, and as-Suddi as prophethood.",
            "bn": "প্রথম চাওয়াটি হলো রাব্বি হাব লী হুকমান। অনুবাদকেরা এখানে ভিন্ন পথে যান: অ্যাপের ইংরেজিতে হুকম অনূদিত হয়েছে কর্তৃত্ব হিসেবে, বাংলায় প্রজ্ঞা হিসেবে, আর অন্যান্য অনুবাদে সুবিবেচনা হিসেবে। প্রাচীন মুফাসসিরগণও একইভাবে ভাগ হয়েছেন। ইবনে কাসীর উদ্ধৃত করেন, ইবনে আব্বাস (রাঃ) হুকম-এর ব্যাখ্যা করেছেন জ্ঞান বলে, ইকরিমা বলেছেন বিবেক, মুজাহিদ বলেছেন কুরআন, আর সুদ্দী বলেছেন নবুওয়াত।"
          },
          {
            "en": "What the readings share is that hukm is an inward equipment rather than an outward possession. It is the capacity to weigh a matter and come down in the right place, whether that capacity is called knowledge, reason or revelation. Ibrahim (AS) asks for it first, before reputation and before Paradise, because the two requests that follow both depend on judging rightly in the years between.",
            "bn": "সব ব্যাখ্যায় যা অভিন্ন, তা হলো — হুকম বাইরের কোনো সম্পদ নয়, ভেতরের সরঞ্জাম। এটি হলো কোনো বিষয় ওজন করে সঠিক জায়গায় স্থির হওয়ার ক্ষমতা, সেই ক্ষমতাকে জ্ঞান বলুন, বিবেক বলুন, কিংবা ওহী বলুন। ইবরাহীম (আঃ) এটিই আগে চান — সুনামের আগে, জান্নাতের আগে; কারণ পরের দুটি চাওয়াই নির্ভর করে মাঝখানের বছরগুলোতে সঠিক বিচার করার ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Attach Me to the Righteous",
          "bn": "সৎকর্মশীলদের সঙ্গে যুক্ত করো"
        },
        "p": [
          {
            "en": "Wa alhiqni bis-salihin. The verb alhaqa means to attach one thing to another, to make someone catch up with a party already moving. He does not ask to be counted better than the righteous, or to lead them; he asks to be joined on. Ibn Kathir explains the request as asking to be made one of the righteous in this world and in the Hereafter, not only at the end.",
            "bn": "ওয়া আলহিকনী বিস-সালিহীন। 'আলহাকা' ক্রিয়ার অর্থ এক জিনিসকে আরেকটির সঙ্গে জুড়ে দেওয়া, কাউকে আগে থেকেই চলতে থাকা কাফেলার সঙ্গে মিলিয়ে দেওয়া। তিনি সৎকর্মশীলদের চেয়ে উত্তম গণ্য হতে চান না, তাদের নেতৃত্বও চান না; তিনি চান তাদের সঙ্গে জুড়ে যেতে। ইবনে কাসীর ব্যাখ্যা করেন, আবেদনটি হলো দুনিয়া ও আখিরাত — উভয় জায়গাতেই সৎকর্মশীলদের একজন হওয়ার, কেবল শেষে নয়।"
          },
          {
            "en": "This exact clause occurs twice in the Quran and nowhere else. It is here, in Ibrahim's (AS) prayer, and it is the last thing Yusuf (AS) says in 12:101, spoken from the height of authority in Egypt. Two prophets separated by generations and circumstances place the same clause in their recorded supplications, asking not for a rank but for a company.",
            "bn": "এই হুবহু বাক্যাংশটি কুরআনে দুইবার এসেছে, আর কোথাও নয়। একবার এখানে, ইবরাহীম (আঃ)-এর দোয়ায়; আর একবার 12:101-এ, যা ইউসুফ (আঃ)-এর শেষ উক্তি — মিসরের ক্ষমতার শীর্ষ থেকে বলা। প্রজন্ম ও পরিস্থিতির ব্যবধানে দাঁড়ানো দুই নবী তাঁদের লিপিবদ্ধ দোয়ায় একই বাক্যাংশ রাখেন — কোনো মর্যাদা নয়, একটি সঙ্গ চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tongue of Truth Afterwards",
          "bn": "পরবর্তীদের মাঝে সত্যভাষ"
        },
        "p": [
          {
            "en": "The second verse asks for lisana sidqin fil-akhirin, literally a tongue of truthfulness among the later ones. The app's English reads it as a mention of honour, its Bengali as being truthful among those who come after; both senses live in the phrase. Ibn Kathir explains it as asking to be remembered well after death, so that people speak of him and take him as a good example.",
            "bn": "দ্বিতীয় আয়াতে চাওয়া হয় লিসানা সিদকিন ফিল-আখিরীন — আক্ষরিক অর্থে পরবর্তীদের মধ্যে সত্যতার এক ভাষা। অ্যাপের ইংরেজিতে এটি এসেছে সম্মানজনক স্মরণ হিসেবে, বাংলায় এসেছে পরবর্তীদের মধ্যে সত্যভাষী হওয়া হিসেবে; দুটি অর্থই বাক্যাংশটির ভেতরে আছে। ইবনে কাসীর ব্যাখ্যা করেন, এটি মৃত্যুর পর ভালোভাবে স্মরণীয় হওয়ার আবেদন — যাতে মানুষ তাঁর কথা বলে এবং তাঁকে উত্তম আদর্শ হিসেবে গ্রহণ করে।"
          },
          {
            "en": "The phrase occurs in two verses of the Quran. The other is 19:50, where Allah says of Ibrahim (AS) and those given after him that He granted them of His mercy and made for them a lofty tongue of truth, rendered there as a mention of high honour. What was asked in one surah is recorded as given in another, and 37:108-109 shows its form: We left for him among the later generations, peace upon Ibrahim.",
            "bn": "বাক্যাংশটি কুরআনের দুটি আয়াতে এসেছে। অন্যটি 19:50, যেখানে আল্লাহ ইবরাহীম (আঃ) ও তাঁর পরে দেওয়া বংশধরদের সম্পর্কে বলেন, তিনি তাঁদের নিজের রহমত থেকে দান করেছেন এবং তাঁদের জন্য সত্যের এক সুউচ্চ ভাষা রেখে দিয়েছেন — যা সেখানে অনূদিত হয়েছে সুউচ্চ সুখ্যাতি হিসেবে। এক সূরায় যা চাওয়া হয়েছিল, আরেক সূরায় তা দেওয়া হয়েছে বলে লেখা আছে; আর 37:108-109 দেখায় তার রূপ: আমি তাঁর জন্য পরবর্তীদের মাঝে রেখে দিলাম — ইবরাহীমের ওপর শান্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Inheriting a Garden",
          "bn": "জান্নাতের উত্তরাধিকার"
        },
        "p": [
          {
            "en": "The third verse asks to be made min warathati jannat an-na'im, one of the inheritors of the Garden of Delight. Inheritance is a strange word for Paradise, since an inheritor receives what was never his by earning. The Quran keeps the word deliberately: 23:10-11 calls the successful ones the inheritors, those who will inherit al-Firdaws and abide there.",
            "bn": "তৃতীয় আয়াতে চাওয়া হয় মিন ওয়ারাসাতি জান্নাতিন নাঈম — নিয়ামতপূর্ণ জান্নাতের উত্তরাধিকারীদের একজন হওয়া। জান্নাতের জন্য 'উত্তরাধিকার' শব্দটি অদ্ভুত, কারণ উত্তরাধিকারী এমন কিছু পায় যা উপার্জন করে তার হয়নি। কুরআন শব্দটি ইচ্ছা করেই ধরে রাখে: 23:10-11 সফলদের বলে উত্তরাধিকারী — যারা ফিরদাউসের উত্তরাধিকার পাবে এবং সেখানে চিরকাল থাকবে।"
          },
          {
            "en": "The word also keeps two truths in balance that are easy to separate. 7:43 has the people of the Garden told that they were made to inherit it for what they used to do, and in the same verse they say they would never have been guided had Allah not guided them. Deeds matter and do not purchase; the estate is entered by grant, and the grant is not arbitrary.",
            "bn": "শব্দটি এমন দুটি সত্যকেও ভারসাম্যে রাখে, যা আলাদা করে ফেলা সহজ। 7:43-এ জান্নাতবাসীদের বলা হয়, তারা যা করত তার ফলেই তাদের এর উত্তরাধিকারী করা হয়েছে; আর একই আয়াতে তারা বলে, আল্লাহ পথ না দেখালে তারা কখনোই পথ পেত না। আমল গুরুত্বপূর্ণ, অথচ আমল দিয়ে কেনা যায় না; সম্পত্তিতে প্রবেশ ঘটে দান হিসেবে, আর সেই দান খেয়ালখুশির নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Imperatives, One Direction",
          "bn": "চারটি আদেশবাচক, এক দিক"
        },
        "p": [
          {
            "en": "Across these three verses there are four imperatives: grant me, join me, make for me, and make me. Set them in order and they map a life forwards. Hukm is for now, the years in which decisions are made. The company of the righteous is for now and after. The truthful tongue is for after he is gone. The Garden is for what has no after.",
            "bn": "এই তিন আয়াতে আদেশবাচক ক্রিয়া আছে চারটি: আমাকে দাও, আমাকে যুক্ত করো, আমার জন্য করো, আর আমাকে বানাও। ক্রম অনুসারে সাজালে এগুলো একটি জীবনকে সামনের দিকে এঁকে দেয়। হুকম এখনকার জন্য — যে বছরগুলোতে সিদ্ধান্ত নিতে হয়। সৎকর্মশীলদের সঙ্গ এখনকার ও পরের জন্য। সত্যভাষ তাঁর চলে যাওয়ার পরের জন্য। আর জান্নাত সেই সময়ের জন্য, যার কোনো 'পরে' নেই।"
          },
          {
            "en": "Read as a model for our own asking, the striking thing is what is absent. Nothing here is requested about safety, wealth, victory over the people he had just argued with, or the outcome of any project. A man in the middle of open conflict asks for equipment, company, a good name afterwards and a good end. That is the whole of these three verses.",
            "bn": "নিজেদের চাওয়ার আদর্শ হিসেবে পড়লে সবচেয়ে চোখে পড়ে যা নেই, সেটিই। নিরাপত্তা, সম্পদ, যাদের সঙ্গে তিনি সবে তর্ক করলেন তাদের ওপর বিজয়, কিংবা কোনো কাজের ফলাফল — এর কোনোটি নিয়েই এখানে কিছু চাওয়া হয়নি। প্রকাশ্য সংঘাতের মাঝখানে দাঁড়ানো একজন মানুষ চান সরঞ্জাম, সঙ্গ, চলে যাওয়ার পরে ভালো নাম, আর উত্তম পরিণতি। এই তিন আয়াতের তালিকা এটুকুই।"
          }
        ]
      }
    ]
  },
  "26:88-89": {
    "sections": [
      {
        "h": {
          "en": "The Summit of a Prophet's Prayer",
          "bn": "এক নবীর দু'আর চূড়া"
        },
        "p": [
          {
            "en": "In Surah ash-Shu'ara, Ibrahim (AS) first describes his Lord — who created me and guides me, who feeds me and gives me drink, who will cause me to die and bring me to life — and then turns to ask. The prayer runs through 26:83-87 and its petitions include sound judgement and the company of the righteous, a truthful tongue among later generations, inheritance of the Garden of Delight, and that he not be disgraced on the Day all are raised. Then 26:88-89 continue his words, describing that very Day.",
            "bn": "সূরা আশ-শু'আরায় ইবরাহীম (আঃ) প্রথমে তাঁর রবের পরিচয় দেন — যিনি আমাকে সৃষ্টি করেছেন ও পথ দেখান, যিনি আমাকে খাওয়ান ও পান করান, যিনি আমার মৃত্যু ঘটাবেন ও আবার জীবিত করবেন — তারপর চাইতে শুরু করেন। দু'আটি চলে 26:83-87 আয়াতজুড়ে, আর তার প্রার্থনাগুলোর মধ্যে আছে: সঠিক বিচারবোধ ও সৎকর্মশীলদের সাহচর্য, পরবর্তী প্রজন্মগুলোর মাঝে সত্যভাষী জিহ্বা, নিয়ামতে ভরা জান্নাতের উত্তরাধিকার, আর সবাইকে ওঠানোর দিনে যেন তাঁকে লাঞ্ছিত না করা হয়। এরপর 26:88-89 আয়াতে তাঁরই কথা চলতে থাকে — ঠিক সেই দিনটির বিবরণ দিয়ে।"
          },
          {
            "en": "The placement matters. These two verses are not a detached description of the Judgement; they are the summit of a prophet's supplication, the reason behind his final request. Ibrahim (AS) asks not to be disgraced on that Day and immediately defines the Day by what fails on it and what succeeds. Whoever wants to know what to ask of Allah can study what the father of prophets asked when he reached the end of his prayer.",
            "bn": "অবস্থানটিই তাৎপর্যপূর্ণ। এই দুটি আয়াত কিয়ামতের কোনো বিচ্ছিন্ন বিবরণ নয়; এগুলো এক নবীর মুনাজাতের চূড়া — তাঁর শেষ প্রার্থনাটির পেছনের কারণ। ইবরাহীম (আঃ) চান, সেই দিনে তাঁকে যেন লাঞ্ছিত না করা হয়, আর সঙ্গে সঙ্গেই দিনটির সংজ্ঞা দেন — কী সেদিন ব্যর্থ হয়, আর কী সফল হয় তা দিয়ে। আল্লাহর কাছে কী চাইতে হয় জানতে চাইলে দেখা যেতে পারে, নবীদের পিতা তাঁর দু'আর শেষ প্রান্তে পৌঁছে কী চেয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Securities That Fail",
          "bn": "যে দুই নিরাপত্তা ব্যর্থ হয়"
        },
        "p": [
          {
            "en": "Wealth and children — mal and banun — are precisely the pair the Quran elsewhere names as this world's ornament: 18:46 calls wealth and children the adornment of the life of this world, before weighing them against lasting righteous deeds. They are also humanity's two oldest instincts of safety: resources against want, and heirs against being erased. The verse does not choose obscure examples of what fails on that Day; it names the two strongest things people actually lean on.",
            "bn": "সম্পদ ও সন্তান — মাল ও বানূন — ঠিক সেই জুটি, যাকে কুরআন অন্যত্র এই দুনিয়ার অলংকার বলেছে: 18:46 আয়াত সম্পদ ও সন্তানকে পার্থিব জীবনের শোভা বলে, তারপর স্থায়ী সৎকর্মের সঙ্গে তাদের ওজন করে। এ দুটি মানুষের নিরাপত্তার দুই প্রাচীনতম প্রবৃত্তিও: অভাবের বিরুদ্ধে সম্পদ, আর মুছে যাওয়ার বিরুদ্ধে উত্তরসূরি। সেদিন কী ব্যর্থ হবে তার জন্য আয়াতটি কোনো অখ্যাত উদাহরণ বাছেনি; নাম নিয়েছে সেই দুটি সবচেয়ে শক্ত জিনিসের, যার ওপর মানুষ সত্যিই ভর দেয়।"
          },
          {
            "en": "The Quran lets us hear the discovery in the first person. In 69:28-29 a man on that Day cries: my wealth has not availed me; my authority has perished from me. And 3:10 states the rule for those who disbelieved: neither their wealth nor their children will avail them against Allah at all. The verses in Ibrahim's (AS) prayer say the same thing beforehand and most gently — as counsel before the fact rather than a cry after it.",
            "bn": "কুরআন আমাদের সেই আবিষ্কার শোনায় উত্তম-পুরুষে। 69:28-29 আয়াতে সেদিন এক ব্যক্তি হাহাকার করে: আমার সম্পদ আমার কোনো কাজে এল না; আমার ক্ষমতা আমার থেকে বিলুপ্ত হয়ে গেছে। আর 3:10 আয়াত কাফিরদের জন্য নিয়মটি ঘোষণা করে: আল্লাহর মোকাবিলায় তাদের সম্পদ ও সন্তান কোনোই কাজে আসবে না। ইবরাহীম (আঃ)-এর দু'আর আয়াত দুটি একই কথা বলে আগেভাগে এবং সবচেয়ে কোমলভাবে — ঘটনার পরের আর্তনাদ হিসেবে নয়, ঘটনার আগের উপদেশ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sound Heart",
          "bn": "বিশুদ্ধ হৃদয়"
        },
        "p": [
          {
            "en": "The exception is illa man ata Allaha bi-qalbin salim — except one who comes to Allah with a sound heart. Salim is an adjective from the root of salima, to be safe and whole: a heart intact, undiseased, unbroken by what corrupts hearts. At-Tabari relates from early authorities that it is the heart safe from shirk, testifying that there is no god but Allah. As-Sa'di widens the description: safe from shirk, from doubt, and from the love of evil — settled instead in certainty and the love of good.",
            "bn": "ব্যতিক্রমটি হলো ইল্লা মান আতাল্লাহা বিকালবিন সালীম — কেবল সে ছাড়া, যে আল্লাহর কাছে আসে বিশুদ্ধ হৃদয় নিয়ে। সালীম শব্দটি সালিমা মূল থেকে আসা বিশেষণ — নিরাপদ ও অক্ষত থাকা: এমন হৃদয় যা অটুট, ব্যাধিমুক্ত, হৃদয়কে যা কলুষিত করে তাতে ভাঙেনি। আত-তাবারী প্রাচীন ইমামদের থেকে বর্ণনা করেন, এটি শিরক থেকে নিরাপদ হৃদয় — যে সাক্ষ্য দেয়, আল্লাহ ছাড়া কোনো ইলাহ নেই। আস-সা'দী বিবরণটি প্রশস্ত করেন: শিরক থেকে, সংশয় থেকে এবং মন্দের ভালোবাসা থেকে নিরাপদ — বদলে যা স্থিত হয়েছে ইয়াকীনে ও কল্যাণের ভালোবাসায়।"
          },
          {
            "en": "Notice what the verse measures. Not the sound body, though we spend fortunes on it; not the sound reputation or portfolio. The heart is the one organ whose condition travels across death, and its soundness is defined against tawhid first, because shirk is the disease that Day exposes absolutely. Worship, knowledge, and struggle all serve, in the end, one purpose here: returning the heart whole to the One who first gave it whole.",
            "bn": "লক্ষ করুন, আয়াতটি কী মাপে। সুস্থ শরীর নয় — যদিও তার পেছনে আমরা বিপুল অর্থ ঢালি; সুনাম বা সম্পদের খাতাও নয়। হৃদয়ই একমাত্র অঙ্গ, যার অবস্থা মৃত্যু পেরিয়ে সঙ্গে যায়; আর তার বিশুদ্ধতার সংজ্ঞা প্রথমে তাওহীদের নিরিখে — কারণ শিরকই সেই ব্যাধি, যা সেদিন সম্পূর্ণ উন্মোচিত হয়। ইবাদত, জ্ঞান ও সংগ্রাম — সবই এখানে শেষ বিচারে একটি উদ্দেশ্যে কাজ করে: হৃদয়টিকে অক্ষত অবস্থায় তাঁর কাছে ফিরিয়ে দেওয়া, যিনি প্রথমে সেটি অক্ষতই দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Other Place",
          "bn": "একমাত্র অন্য জায়গাটি"
        },
        "p": [
          {
            "en": "The phrase qalb salim occurs in exactly one other verse of the Quran. In 37:84 it is said of Ibrahim (AS) himself: when he came to his Lord with a sound heart. The one who taught the standard in his prayer is the one whom Allah testifies met it. This is the Quran's quiet way of certifying a teacher — the definition of success on the Last Day is voiced by a man whose own heart is described with the very same words.",
            "bn": "কালব সালীম শব্দবন্ধটি কুরআনের ঠিক আর একটি আয়াতেই আছে। 37:84 আয়াতে তা বলা হয়েছে স্বয়ং ইবরাহীম (আঃ) সম্পর্কে: যখন তিনি তাঁর রবের কাছে এলেন বিশুদ্ধ হৃদয় নিয়ে। যিনি নিজের দু'আয় মানদণ্ডটি শেখালেন, আল্লাহ সাক্ষ্য দিলেন — তিনিই তা পূরণ করেছেন। এ হলো শিক্ষককে প্রত্যয়িত করার কুরআনের নীরব পদ্ধতি — শেষ দিনের সাফল্যের সংজ্ঞা উচ্চারণ করছেন এমন একজন মানুষ, যাঁর নিজের হৃদয়ের বর্ণনায় ব্যবহৃত হয়েছে হুবহু সেই শব্দগুলোই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Allah Looks At",
          "bn": "আল্লাহ যা দেখেন"
        },
        "p": [
          {
            "en": "Muslim relates from Abu Hurairah (RA) that the Prophet ﷺ said: Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. The pairing is the verse's pairing — form and wealth are what people measure; the heart is what the Maker measures. The gaze of Allah passes straight through everything the Day will strip away, and rests on the thing the Day will weigh.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের আকৃতি ও সম্পদের দিকে তাকান না, বরং তাকান তোমাদের হৃদয় ও আমলের দিকে। এই জুটি আয়াতেরই জুটি — আকৃতি ও সম্পদ মাপে মানুষ; হৃদয় মাপেন স্রষ্টা। আল্লাহর দৃষ্টি সোজা ভেদ করে যায় সেসব কিছু, যা সেদিন খসে পড়বে — আর স্থির হয় সেই জিনিসটির ওপর, যা সেদিন ওজন করা হবে।"
          },
          {
            "en": "The hadith adds deeds to hearts, and the addition guards against a mistake. A sound heart is not a private mood detached from behavior; in the Quran and Sunnah the heart drives the limbs, and its soundness shows in what the hands do and the tongue says. Claiming a clean heart while living an unclean life inverts the order. The heart certified in 37:84 belonged to a man who left his people for Allah, faced the fire, and offered his son when commanded.",
            "bn": "হাদীসটি হৃদয়ের সঙ্গে আমল যোগ করে, আর এই যোগ একটি ভুল থেকে রক্ষা করে। বিশুদ্ধ হৃদয় আচরণ থেকে বিচ্ছিন্ন কোনো ব্যক্তিগত মেজাজ নয়; কুরআন ও সুন্নাহয় হৃদয়ই অঙ্গ-প্রত্যঙ্গ চালায়, আর তার বিশুদ্ধতা ধরা পড়ে হাত কী করে ও জিহ্বা কী বলে তাতে। অপরিচ্ছন্ন জীবন যাপন করে পরিচ্ছন্ন হৃদয়ের দাবি করা ক্রমটাই উল্টে দেওয়া। 37:84 আয়াতে প্রত্যয়িত হৃদয়টি ছিল এমন এক মানুষের, যিনি আল্লাহর জন্য নিজের জাতি ছেড়েছেন, আগুনের মুখোমুখি হয়েছেন, আর আদেশ পেয়ে নিজের পুত্রকে কুরবানির জন্য পেশ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Investing Where It Counts",
          "bn": "যেখানে গণ্য হবে সেখানে বিনিয়োগ"
        },
        "p": [
          {
            "en": "The verses reorder a lifetime's budget. Most effort flows toward what will not cross the line — accumulating, upgrading, securing — while the one asset that crosses is often left untended. Tadabbur here is an audit: what portion of an ordinary week directly tends the heart? The verse does not condemn wealth or children; Ibrahim (AS) had wealth and prayed for righteous offspring. It denies that they, of themselves, can save. They stay behind, while the heart travels on.",
            "bn": "আয়াত দুটি গোটা জীবনের বাজেট নতুন করে সাজায়। বেশির ভাগ পরিশ্রম বয়ে যায় সেদিকে, যা সীমানা পার হবে না — জমানো, বাড়ানো, নিরাপদ করা — অথচ যে একটিমাত্র সম্পদ পার হয়, সেটিই প্রায়ই অযত্নে পড়ে থাকে। এখানে তাদাব্বুর মানে এক নিরীক্ষা: সাধারণ এক সপ্তাহের কতটুকু অংশ সরাসরি হৃদয়ের যত্নে যায়? আয়াতটি সম্পদ বা সন্তানকে নিন্দা করে না; ইবরাহীম (আঃ)-এর সম্পদ ছিল এবং তিনি সৎ সন্তানের জন্য দু'আ করেছেন। আয়াতটি অস্বীকার করে যে এগুলো নিজে থেকে বাঁচাতে পারে। এগুলো পেছনে থেকে যায়, আর হৃদয় এগিয়ে চলে।"
          },
          {
            "en": "Practical heart-work follows the definitions the commentators gave: uproot shirk in its open and subtle forms, including the hunger to be seen; resolve doubt with knowledge rather than letting it fester; and starve rancor, envy, and the love of harm. None of this is done once. A heart is kept sound the way anything living is kept sound — fed, guarded, and examined regularly — with the prayer of Ibrahim (AS) as the standing model of where it must arrive.",
            "bn": "হৃদয়ের ব্যবহারিক কাজ মুফাসসিরগণের দেওয়া সংজ্ঞাগুলোকেই অনুসরণ করে: শিরককে তার প্রকাশ্য ও সূক্ষ্ম রূপে উপড়ে ফেলা — দেখা হওয়ার ক্ষুধাটিসহ; সংশয়কে পুষতে না দিয়ে জ্ঞান দিয়ে মীমাংসা করা; আর বিদ্বেষ, হিংসা ও ক্ষতির ভালোবাসাকে না খাইয়ে মারা। এর কোনোটিই একবারে সারা যায় না। হৃদয়কে বিশুদ্ধ রাখা হয় ঠিক যেভাবে যেকোনো জীবন্ত জিনিসকে সুস্থ রাখা হয় — নিয়মিত খাওয়ানো, পাহারা দেওয়া ও পরীক্ষা করা — আর কোথায় পৌঁছাতে হবে তার স্থায়ী নমুনা হয়ে থাকে ইবরাহীম (আঃ)-এর দু'আ।"
          }
        ]
      }
    ]
  }
});
