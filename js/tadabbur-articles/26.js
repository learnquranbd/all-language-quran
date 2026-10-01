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
  "26:63": {
    "sections": [
      {
        "h": {
          "en": "The Command Before the Opening",
          "bn": "খোলার আগে আদেশ"
        },
        "p": [
          {
            "en": "The verse opens on a single word of revelation: fa-awhayna ila Musa, then We inspired Moses. It arrives at the last possible moment. Behind the Children of Israel is Pharaoh's army; before them is the sea; between the two there is no visible road. What comes is not a wall of fire to hold the enemy back, nor a bridge already built. It is an instruction, and the instruction asks Moses to do something with his own hand: an idrib bi-'asaka al-bahr, strike the sea with your staff.",
            "bn": "আয়াতটি শুরু হয় ওয়াহীর একটিমাত্র বাক্য দিয়ে, ফাআওহাইনা ইলা মূসা, তখন আমি মূসার প্রতি ওয়াহী করলাম। এ আদেশ আসে একেবারে শেষ মুহূর্তে। বানী ইসরাঈলের পেছনে ফেরাউনের বাহিনী, সামনে সমুদ্র, আর দুইয়ের মাঝে চোখে পড়ার মতো কোনো পথ নেই। যা এল তা শত্রুকে ঠেকানোর আগুনের দেয়াল নয়, আগে থেকে বানানো কোনো সেতুও নয়। তা এক নির্দেশ, আর সেই নির্দেশ মূসাকে নিজের হাতে কিছু করতে বলে। ইদরিব বিআসাকাল বাহর, তোমার লাঠি দিয়ে সমুদ্রে আঘাত কর।"
          },
          {
            "en": "Al-Qurtubi pauses on why the rescue is framed this way. God, he writes, willed that the sign be joined to Moses and tied to an act he performs — otherwise a staff striking water does not split a sea, nor by itself assist in that at all, except by the power of God that accompanied it and His creating. The wood does nothing. The point of the command, on this reading, is that deliverance and human effort are made to meet: God's power works, but it works at the moment His servant takes the step he is told to take.",
            "bn": "উদ্ধারটা কেন এভাবে সাজানো হলো, কুরতুবী সেখানে থামেন। তিনি লেখেন, আল্লাহ চেয়েছিলেন নিদর্শনটি মূসার সঙ্গে জড়িয়ে থাকুক, তাঁর করা একটি কাজের সঙ্গে বাঁধা থাকুক। নইলে লাঠির আঘাত তো সমুদ্র চেরে না, নিজে থেকে সে কাজে সাহায্যও করে না, কেবল আল্লাহর যে কুদরত তার সঙ্গে জুড়ে ছিল তা ছাড়া। কাঠের নিজের কোনো ক্ষমতা নেই। এই পাঠে আদেশের মানে হলো, উদ্ধার আর বান্দার চেষ্টাকে মুখোমুখি করে দেওয়া। আল্লাহর কুদরতই কাজ করে, তবে তা কাজ করে ঠিক সেই মুহূর্তে যখন বান্দা তাকে বলা পদক্ষেপটি নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Strike with Your Staff",
          "bn": "লাঠি দিয়ে আঘাত কর"
        },
        "p": [
          {
            "en": "The staff is not new to the story. It was the shepherd's stick that became a serpent before Pharaoh, the same object Moses had leaned on and driven his flock with. Now it is raised over the sea. Both at-Tabari and Ibn Kathir, transmitting from Muhammad ibn Ishaq, describe the blow in the same words: Moses struck the sea with it, and in it — in the staff — was the authority of God that He had given him, sultan Allah alladhi a'tahu, and it parted. The power is named as God's, lodged for that instant in a length of wood.",
            "bn": "লাঠিটা এ কাহিনিতে নতুন নয়। এই সেই রাখালের লাঠি যা ফেরাউনের সামনে সাপ হয়ে গিয়েছিল, যার উপর মূসা (আঃ) ভর দিতেন আর যা দিয়ে পশুপাল হাঁকাতেন। এখন তা সমুদ্রের উপর উঠল। তাবারী ও ইবন কাসীর দুজনেই মুহাম্মাদ ইবন ইসহাকের সূত্রে একই কথায় আঘাতটির বর্ণনা দেন। মূসা তা দিয়ে সমুদ্রে আঘাত করলেন, আর তার ভেতরে, সেই লাঠির ভেতরে ছিল আল্লাহর দেওয়া কর্তৃত্ব, সুলতান আল্লাহ, আর তা চিরে গেল। ক্ষমতাটিকে আল্লাহরই বলা হয়েছে, এক টুকরো কাঠে সেই মুহূর্তের জন্য রাখা।"
          },
          {
            "en": "The wording keeps the means and the Giver distinct. A reader could imagine the staff itself holds the power, the way a wand might in a story; the commentators refuse that reading. Ibn Kathir brings the parallel command from another sura, fa-drib lahum tariqan fi al-bahr yabasan, strike for them a dry path in the sea (20:77), where the same verb and the same staff open a road that is not water held back but dry ground underfoot. The servant strikes; God parts and dries. The order never reverses.",
            "bn": "শব্দগুলো উপায় আর দাতাকে আলাদা রাখে। কেউ ভাবতে পারে লাঠিটাই বুঝি ক্ষমতা ধরে রাখে, গল্পের জাদুদণ্ডের মতো। তাফসীরকারেরা সেই পাঠ মানেন না। ইবন কাসীর অন্য সূরার একই আদেশ টেনে আনেন, ফাদরিব লাহুম তারীকান ফিল বাহরি ইয়াবাসা, সমুদ্রে তাদের জন্য শুকনো পথ বানিয়ে দাও (২০:৭৭)। সেখানে একই ক্রিয়া আর একই লাঠি এমন এক পথ খোলে যা পানি আটকে রাখা নয়, পায়ের নিচে শুকনো মাটি। বান্দা আঘাত করেন, আল্লাহ চেরেন আর শুকান। ক্রমটা কখনো উল্টে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty Answered by Water",
          "bn": "নিশ্চয়তার জবাব দিল পানি"
        },
        "p": [
          {
            "en": "To feel the weight of the command, read the two verses before it. When the two hosts came in sight of each other, the companions of Moses said, inna la-mudrakun, we are certainly overtaken (26:61). Moses answered, kalla, inna ma'iya rabbi sayahdin — no; my Lord is with me, He will guide me (26:62). Ibn Kathir glosses the reply: nothing you fear will reach you, for it is God who commanded me to bring you here, and He does not break His promise. The certainty came first, spoken into a situation that had not yet changed at all.",
            "bn": "আদেশের ভারটা বুঝতে হলে আগের দুটি আয়াত পড়ুন। যখন দুই দল পরস্পরকে দেখল, মূসার সঙ্গীরা বলল, ইন্না লামুদরাকূন, আমরা তো ধরা পড়েই গেলাম (২৬:৬১)। মূসা জবাব দিলেন, কাল্লা, ইন্না মাইয়া রাব্বী সাইয়াহদীন, কক্ষনো না, আমার রব আমার সঙ্গে আছেন, তিনি আমাকে পথ দেখাবেন (২৬:৬২)। ইবন কাসীর এই জবাবের ব্যাখ্যা দেন, তোমরা যা ভয় পাচ্ছ তার কিছুই তোমাদের ছোঁবে না, কারণ যিনি আমাকে এখানে আনতে বলেছেন তিনিই আল্লাহ, আর তিনি প্রতিশ্রুতি ভাঙেন না। নিশ্চয়তা এল আগে, এমন এক অবস্থায় যা তখনো একটুও বদলায়নি।"
          },
          {
            "en": "Ma'arif al-Qur'an sets this beside a later moment. When the Prophet ﷺ lay hidden in the cave of Thawr and the pursuers stood at its mouth, Abu Bakr (رضي الله عنه) was alarmed, and the Prophet ﷺ said la tahzan inna Allaha ma'ana, do not grieve, God is with us (9:40). The commentator notes the shift of pronoun: Moses said my Lord is with me, while the Prophet ﷺ said God is with us — a share in that nearness extended, he writes, to the believers who stand with the Messenger.",
            "bn": "মাআরিফুল কুরআন একে পরের এক মুহূর্তের পাশে রাখে। নবী ﷺ যখন সাওর গুহায় লুকিয়ে ছিলেন আর ধাওয়াকারীরা এসে দাঁড়িয়েছিল গুহামুখে, আবু বকর (রাঃ) কিছুটা শঙ্কিত হলেন, আর নবী ﷺ বললেন লা তাহযান ইন্নাল্লাহা মাআনা, ভয় পেয়ো না, আল্লাহ আমাদের সঙ্গে আছেন (৯:৪০)। তাফসীরকার সর্বনামের বদলটা লক্ষ করেন। মূসা বললেন আমার রব আমার সঙ্গে, আর নবী ﷺ বললেন আল্লাহ আমাদের সঙ্গে। সেই নৈকট্যের ভাগ, তিনি লেখেন, রাসূলের সঙ্গে দাঁড়ানো মুমিনদের পর্যন্ত বাড়িয়ে দেওয়া হলো।"
          },
          {
            "en": "So the sequence is exact. First the word of trust, holding firm while the sea still barred the way. Then the command to act. Only then the water. Verse 63 is the hinge on which the two earlier verses turn from speech into rescue: the confidence of ma'iya rabbi is not left as a fine sentiment, it is cashed the instant the staff comes down. Trust that never issues in a step and effort that carries no trust are both incomplete here; the deliverance waits for the two to arrive together.",
            "bn": "তাই ক্রমটা একেবারে নিখুঁত। প্রথমে ভরসার কথা, যা সমুদ্র পথ আটকে থাকা অবস্থাতেই অটল থাকল। তারপর কাজ করার আদেশ। তবেই কেবল পানি। ৬৩ নম্বর আয়াত সেই কব্জা যার উপর আগের দুই আয়াত কথা থেকে উদ্ধারে গিয়ে ঘোরে। মাইয়া রাব্বীর আত্মবিশ্বাস কেবল সুন্দর এক অনুভূতি হয়ে থাকল না, লাঠি নেমে আসার মুহূর্তেই তা হাতে-কলমে সত্য হলো। যে ভরসা কখনো পদক্ষেপে গড়ায় না, আর যে চেষ্টায় কোনো ভরসা নেই, এখানে দুটোই অসম্পূর্ণ। উদ্ধার অপেক্ষা করে দুইয়ে একসঙ্গে এসে পৌঁছানোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sea Told to Wait",
          "bn": "সমুদ্রকে বলা হলো অপেক্ষা করতে"
        },
        "p": [
          {
            "en": "Several early reports, carried in the tafsir as narrations rather than as the verse's plain wording, picture the sea itself under command. Qatada, cited by Ibn Kathir, says God revealed to the sea that night: when Moses strikes you with his staff, hear and obey — so the sea passed the night in agitation, not knowing from which side the blow would fall. At-Tabari and Ibn Kathir both transmit from Muhammad ibn Ishaq that God told the sea to part when struck, and it spent the night beating against itself in awe of God, awaiting His command.",
            "bn": "কয়েকটি আদি বর্ণনা, যা তাফসীরে আয়াতের সরাসরি শব্দ হিসেবে নয় বরং রেওয়ায়েত হিসেবে আসে, সমুদ্রকেও আদেশের অধীন দেখায়। কাতাদা, ইবন কাসীরের উদ্ধৃতিতে, বলেন সেই রাতে আল্লাহ সমুদ্রের প্রতি ওয়াহী করলেন, মূসা যখন লাঠি দিয়ে তোমাকে আঘাত করবে তখন শুনবে আর মানবে। ফলে সমুদ্র সারা রাত অস্থির হয়ে রইল, কোন দিক থেকে আঘাত পড়বে তা না জেনে। তাবারী আর ইবন কাসীর দুজনেই মুহাম্মাদ ইবন ইসহাকের সূত্রে আনেন, আল্লাহ সমুদ্রকে বললেন আঘাত পেলে চিরে যেতে, আর তা সারা রাত আল্লাহর ভয়ে নিজের সঙ্গে নিজে আছড়ে পড়ল, তাঁর আদেশের অপেক্ষায়।"
          },
          {
            "en": "These are athar, transmitted accounts of the unseen, and the commentators relay them as such rather than as established fact; a reader is not bound to picture the scene in their detail. What they carry is a single note, and it is the sura's note: the whole created order stood poised on God's word, the water no less than the army. The barrier that terrified the people was, in these tellings, already listening for a command that had not yet been given. The sea was never the obstacle it looked like.",
            "bn": "এগুলো আসার, অদৃশ্য নিয়ে বর্ণিত রেওয়ায়েত, আর তাফসীরকারেরা এগুলোকে প্রতিষ্ঠিত সত্য হিসেবে নয়, বর্ণনা হিসেবেই তুলে ধরেন। পাঠক এদের খুঁটিনাটি ছবি ধরে নিতে বাধ্য নন। এরা যা বহন করে তা একটাই সুর, আর তা এই সূরারই সুর। গোটা সৃষ্টি আল্লাহর কথার উপর থমকে দাঁড়িয়ে ছিল, বাহিনীর মতোই পানিও। যে বাধা মানুষকে আতঙ্কিত করছিল তা এসব বর্ণনায় আগে থেকেই কান পেতে ছিল এমন এক আদেশের জন্য যা তখনো দেওয়া হয়নি। সমুদ্র কখনোই সেই বাধা ছিল না যেমনটা তাকে দেখাচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Twelve Roads for Twelve Tribes",
          "bn": "বারো গোত্রের জন্য বারো পথ"
        },
        "p": [
          {
            "en": "Then fa-anfalaqa: and it split. Al-Baghawi glosses the verb simply, fa-nshaqqa, it was cleft open. The commentators are strikingly agreed on the shape the opening took. Ibn Abbas, reported by both Ibn Kathir and at-Tabari, says the sea became twelve paths, one road for each of the twelve tribes of the Children of Israel. Al-Qurtubi, as-Sa'di, and the Muyassar all give the same number: twelve paths on the count of the asbat, the tribes. Each family had its own dry road through the standing water.",
            "bn": "তারপর ফানফালাক্ব, আর তা চিরে গেল। বাগাভী ক্রিয়াটির সহজ ব্যাখ্যা দেন, ফানশাক্ব, ফাটল ধরে খুলে গেল। খোলাটা কোন আকার নিল, তা নিয়ে তাফসীরকারেরা লক্ষণীয়ভাবে একমত। ইবন আব্বাস, যাঁর কথা ইবন কাসীর ও তাবারী দুজনেই আনেন, বলেন সমুদ্র বারোটি পথ হয়ে গেল, বানী ইসরাঈলের বারো গোত্রের প্রত্যেকের জন্য একটি করে। কুরতুবী, সাদী আর মুয়াসসার সবাই একই সংখ্যা দেন, আসবাত অর্থাৎ গোত্রের গোনায় বারোটি পথ। প্রত্যেক পরিবারের জন্য দাঁড়িয়ে থাকা পানির ভেতর নিজস্ব শুকনো রাস্তা।"
          },
          {
            "en": "As-Suddi, transmitted by at-Tabari, adds that once the tribes had entered their separate lanes, each group could no longer see the others and feared their kin had been killed; Moses prayed, and God turned the dividing water into arches, like windows, so the last could see the first until all had crossed. Ibn Kathir carries the same picture — openings in the walls of water through which the tribes looked at one another — and adds from as-Suddi that God sent the wind across the sea bed until it dried like the face of the land. What looked like the end of a people became a highway.",
            "bn": "সুদ্দী, তাবারীর সূত্রে, জুড়ে দেন যে গোত্রগুলো আলাদা লেনে ঢোকার পর একে অন্যকে আর দেখতে পাচ্ছিল না, ভাবছিল তাদের স্বজনরা বুঝি মারা গেছে। মূসা দোয়া করলেন, আর আল্লাহ ভাগ করা পানিকে খিলানের মতো, জানালার মতো করে দিলেন, যেন শেষজন প্রথমজনকে দেখতে পায়, সবাই পার হওয়া পর্যন্ত। ইবন কাসীরও একই ছবি আনেন, পানির দেয়ালে ফাঁক দিয়ে গোত্ররা একে অন্যকে দেখছে। সঙ্গে তিনি সুদ্দী থেকে যোগ করেন, আল্লাহ সমুদ্রতলে বাতাস পাঠালেন যতক্ষণ না তা মাটির মতো শুকিয়ে গেল। যা একটু আগেও ছিল জাতির শেষ, তা হয়ে উঠল এক রাজপথ।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Part a Towering Mountain",
          "bn": "প্রতিটি ভাগ এক সুবিশাল পর্বত"
        },
        "p": [
          {
            "en": "The verse names the scale of what stood there: fa-kana kullu firqin ka-l-tawd al-'azim, and each portion was like a great towering mountain. A firq is a parted piece; al-Baghawi glosses it as a mass of the water, and al-tawd, he says, as the huge mountain. The reading that each standing wall of sea rose like a great mountain is attributed by Ibn Kathir to a line of early authorities — Ibn Mas'ud, Ibn Abbas, Muhammad ibn Ka'b, ad-Dahhak, Qatada, and others — and at-Tabari records the same from Ibn Abbas and ad-Dahhak.",
            "bn": "আয়াত সেখানে যা দাঁড়িয়ে ছিল তার বিশালতা নাম ধরে বলে, ফাকানা কুল্লু ফিরক্বিন কাত-তাওদিল আজীম, আর প্রত্যেক ভাগ হয়ে গেল সুবিশাল পর্বতের মতো। ফিরক্ব মানে চিরে যাওয়া এক টুকরো, বাগাভী একে বলেন পানির স্তূপ, আর তাওদ, তিনি বলেন, বিশাল পর্বত। দাঁড়িয়ে থাকা প্রতিটি পানির দেয়াল যে বড় পাহাড়ের মতো উঠেছিল, এই পাঠ ইবন কাসীর একগুচ্ছ আদি ইমামের নামে আনেন, ইবন মাসঊদ, ইবন আব্বাস, মুহাম্মাদ ইবন কাব, দাহহাক, কাতাদা ও আরও অনেকে। তাবারীও ইবন আব্বাস আর দাহহাক থেকে একই কথা লেখেন।"
          },
          {
            "en": "One reading differs on the picture, though not on the majesty. 'Ata al-Khurasani, cited by Ibn Kathir, took al-tawd here to mean the pass between two mountains rather than the wall itself — the road more than the barrier. The lexicographers gloss tawd plainly as a mountain, and at-Tabari cites old Arabic verse using its plural, atwad, for mountains. This is the sura's moment of wonder, and the wording spends itself on height: water does not stand, yet here it stood in ranges, and the element that meant certain death a heartbeat earlier now towered as the clearest evidence in sight that its Maker answers to no ordinary rule.",
            "bn": "একটি পাঠ ছবিতে ভিন্ন, যদিও মহিমায় নয়। আতা আল-খুরাসানী, ইবন কাসীরের উদ্ধৃতিতে, এখানে তাওদ বলতে দুই পাহাড়ের মাঝের গিরিপথ বুঝেছেন, দেয়াল নয় বরং পথটাই। অভিধানবিদরা তাওদের সোজা অর্থ দেন পর্বত, আর তাবারী অর্থ পাকা করতে পুরোনো আরবি কবিতা টানেন যেখানে এর বহুবচন আতওয়াদ পাহাড়ের অর্থে এসেছে। এ সূরার বিস্ময়ের মুহূর্ত, আর শব্দ যেন উচ্চতাতেই নিজেকে ঢালে। পানি তো দাঁড়ায় না, অথচ এখানে তা পাহাড়সারির মতো দাঁড়িয়ে রইল। যে জিনিস একটু আগে নিশ্চিত মৃত্যু ছিল তা-ই এখন চোখের সামনে সবচেয়ে উঁচু সাক্ষী যে এর স্রষ্টা সাধারণ কোনো নিয়মের অধীন নন।"
          }
        ]
      },
      {
        "h": {
          "en": "The First to Step In",
          "bn": "যারা আগে পা রাখল"
        },
        "p": [
          {
            "en": "The commentators preserve small scenes of people who trusted the command before the water moved. Al-Qurtubi, from Malik by way of Ibn al-Qasim, reports that two merchants had come out to the sea with Moses; they asked him what God had ordered, and when he said he was commanded to strike the sea with his staff so that it would part, they said, do what God commanded you, He will not fail you — and threw themselves into the sea in confirmation of him, before it opened.",
            "bn": "তাফসীরকারেরা এমন কিছু মানুষের ছোট ছোট দৃশ্য ধরে রাখেন যারা পানি নড়ার আগেই আদেশের উপর ভরসা করেছিল। কুরতুবী, ইবনুল কাসিমের সূত্রে ইমাম মালিক থেকে, বলেন দুজন ব্যবসায়ী মূসার সঙ্গে সমুদ্রের কাছে এসেছিল। তারা জিজ্ঞেস করল আল্লাহ তাঁকে কী আদেশ দিয়েছেন, আর তিনি যখন বললেন তাঁকে লাঠি দিয়ে সমুদ্রে আঘাত করতে বলা হয়েছে যাতে তা চিরে যায়, তারা বলল, আল্লাহ যা বলেছেন তা করুন, তিনি আপনাকে ব্যর্থ করবেন না। তারপর তাঁকে সত্য মেনে তারা সমুদ্রে ঝাঁপ দিল, পানি খোলার আগেই।"
          },
          {
            "en": "Al-Baghawi and at-Tabari carry a like report of Yusha' ibn Nun wading in as the wind raged and the waves rose like mountains, the water not yet reaching his mount. The reports differ on one point and the commentators keep the difference open: as-Suddi, in at-Tabari, has Aaron strike the water first, and it refuse, until Moses came; other chains place the striking with Moses alone, at Yusha's or the believer's prompting. On who first raised the staff the narrations vary; on the certainty behind the blow they do not.",
            "bn": "বাগাভী আর তাবারী একই রকম বর্ণনা আনেন ইউশা ইবন নূনের, যিনি বাতাস যখন উত্তাল আর ঢেউ পাহাড়ের মতো উঠছে তখন পানিতে নেমে গেলেন, পানি তখনো তাঁর বাহনের নাগাল পায়নি। বর্ণনাগুলো একটি জায়গায় ভিন্ন, আর তাফসীরকারেরা সেই ভিন্নতা খোলা রাখেন। সুদ্দী, তাবারীর সূত্রে, বলেন প্রথমে হারূন পানিতে আঘাত করেন আর তা অস্বীকার করে, মূসা আসা পর্যন্ত। অন্য সূত্রে আঘাতটি কেবল মূসার হাতেই, ইউশা বা সেই মুমিনের তাগিদে। কে প্রথমে লাঠি তুলেছিলেন তা নিয়ে বর্ণনা ভিন্ন, তবে আঘাতের পেছনের নিশ্চয়তা নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Musa Fasted",
          "bn": "যেদিন মূসা রোজা রাখলেন"
        },
        "p": [
          {
            "en": "The rescue was not left in the past. Ibn Abbas reported that when the Prophet ﷺ came to Madinah he found the Jews fasting on the day of Ashura and asked about it; they said, this is a good day, the day on which God rescued the Children of Israel from their enemy, so Moses fasted it. The Prophet ﷺ said, we have more claim to Moses than you, and he fasted that day and ordered it to be fasted (Sahih al-Bukhari). The deliverance of this verse became a fast on the Muslim calendar.",
            "bn": "এ উদ্ধার অতীতে ফেলে রাখা হয়নি। ইবন আব্বাস (রাঃ) বর্ণনা করেন, নবী ﷺ মদীনায় এসে দেখলেন ইহুদিরা আশুরার দিন রোজা রাখছে, আর এর কারণ জিজ্ঞেস করলেন। তারা বলল, এ ভালো দিন, এই দিনে আল্লাহ বানী ইসরাঈলকে তাদের শত্রুর হাত থেকে উদ্ধার করেছিলেন, তাই মূসা এ দিন রোজা রেখেছিলেন। নবী ﷺ বললেন, মূসার উপর তোমাদের চেয়ে আমাদের হক বেশি। এরপর তিনি সেদিন রোজা রাখলেন আর রোজা রাখতে বললেন (সহীহ বুখারী)। এই আয়াতের উদ্ধার মুসলিমের পঞ্জিকায় এক রোজা হয়ে গেল।"
          },
          {
            "en": "The sura moves straight on: wa-azlafna thamma al-akharin (26:64), and We brought the others near to that place, and then the roads that had saved a people closed. This reflection stays with the deliverance and leaves the pursuers' end to its own verses. It is worth saying plainly, on either reading of the story, that the passage records what happened to a particular army under a particular tyrant; it licenses nothing against any living person or community, and carries no verdict a reader may pass on his neighbour.",
            "bn": "সূরা সোজা এগিয়ে যায়, ওয়া আযলাফনা সাম্মাল আখারীন (২৬:৬৪), আর আমি অপর দলটিকে সেখানে কাছে নিয়ে এলাম, তারপর যে পথ এক জাতিকে বাঁচিয়েছিল তা বন্ধ হয়ে গেল। এই আলোচনা উদ্ধারের সঙ্গেই থাকল, ধাওয়াকারীদের পরিণতি তাদের নিজেদের আয়াতের হাতে ছেড়ে দিল। সোজা কথায় বলা দরকার, কাহিনির যে পাঠই ধরুন, এ ঘটনা এক নির্দিষ্ট অত্যাচারীর অধীন এক নির্দিষ্ট বাহিনীর সঙ্গে যা ঘটেছিল তা-ই লিপিবদ্ধ করে। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ কিছুরই অনুমতি দেয় না, প্রতিবেশীর উপর চাপানোর মতো কোনো রায়ও এতে নেই।"
          },
          {
            "en": "The passage closes its lesson a few verses later: inna fi dhalika la-aya, indeed in that is a sign (26:67). Ibn Kathir reads the sign as proof of God's wisdom and of His aid to those who believe. That is the note to carry out. When the road is barred and the pursuit is close, the believer is not promised that the sea will vanish before he moves. He is told to hold his certainty and to strike the water he was sent to strike, and to trust that the two, together, are where deliverance opens.",
            "bn": "কয়েক আয়াত পরে এর শিক্ষা গুটিয়ে আনা হয়, ইন্না ফী যালিকা লাআয়াহ, নিশ্চয় এতে আছে এক নিদর্শন (২৬:৬৭)। ইবন কাসীর এই নিদর্শনকে পড়েন আল্লাহর প্রজ্ঞার আর তাঁর মুমিন বান্দাদের সাহায্য করার প্রমাণ হিসেবে। এটাই বয়ে নেওয়ার সুর। পথ যখন বন্ধ আর ধাওয়া যখন কাছে, মুমিনকে এ কথা দেওয়া হয় না যে সে নড়ার আগেই সমুদ্র মিলিয়ে যাবে। তাকে বলা হয় নিজের নিশ্চয়তা ধরে রাখতে, আর যে পানিতে পাঠানো হয়েছে তাতে আঘাত করতে, আর ভরসা রাখতে যে এই দুই একসঙ্গেই সেই জায়গা যেখানে উদ্ধার খোলে।"
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
  "26:75": {
    "sections": [
      {
        "h": {
          "en": "When the Question Turns Around",
          "bn": "প্রশ্ন যখন ঘুরে দাঁড়ায়"
        },
        "p": [
          {
            "en": "The scene opens not with a sermon but with a question. Ibrahim (AS) asks his father and his people what they worship (26:70), and they answer without embarrassment: we worship idols, and we stay devoted to them (26:71). He does not shout them down. He keeps asking, because a good question can undo a wrong far more quietly than an accusation ever can. This whole passage is Ibrahim (AS) leading his people, step by patient step, toward the thing they had never once thought to examine.",
            "bn": "দৃশ্যটা শুরু হয় ভাষণ দিয়ে নয়, প্রশ্ন দিয়ে। ইবরাহীম (আঃ) তাঁর পিতা ও সম্প্রদায়কে জিজ্ঞেস করেন, তারা কিসের ইবাদত করে (২৬:৭০)। তারা কোনো লজ্জা ছাড়াই জবাব দেয়: আমরা মূর্তির পূজা করি, আর সদাসর্বদা তাদের আঁকড়ে থাকি (২৬:৭১)। তিনি তাদের ধমকে থামিয়ে দেন না। প্রশ্ন করে যেতে থাকেন। কারণ একটি ভালো প্রশ্ন অভিযোগের চেয়ে অনেক নিঃশব্দে ভুলটা ভেঙে দিতে পারে। গোটা অংশজুড়ে ইবরাহীম (আঃ) ধৈর্য ধরে ধাপে ধাপে তাঁর সম্প্রদায়কে সেই জিনিসটার দিকে তাকাতে বলছেন, যা তারা কোনোদিন যাচাই করে দেখার কথাই ভাবেনি।"
          },
          {
            "en": "First he tests the idols against their own job. Do they hear you when you call on them? Do they benefit you, or harm you (26:72, 26:73)? These are not trick questions. They are the plainest test any object of worship should pass: can it hear, can it help, can it hurt. Ibrahim (AS) is not asking his people to accept his conclusion. He is asking them to notice what they already know, deep down, about the stone and wood they had raised above themselves.",
            "bn": "প্রথমে তিনি মূর্তিগুলোকে তাদের নিজের কাজের কষ্টিপাথরে যাচাই করেন। তোমরা ডাকলে ওরা কি শোনে? ওরা কি তোমাদের উপকার করে, নাকি ক্ষতি (২৬:৭২, ২৬:৭৩)? এগুলো ফাঁদে ফেলার প্রশ্ন নয়। ইবাদতের যোগ্য যেকোনো জিনিসের অন্তত এই পরীক্ষায় পাস করা উচিত: সে কি শোনে, সাহায্য করতে পারে, ক্ষতি করতে পারে। ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে নিজের সিদ্ধান্ত মেনে নিতে বলছেন না। তিনি চান তারা মনের গভীরে যা আগে থেকেই জানে, সেই পাথর আর কাঠ নিয়ে তা একটু খেয়াল করুক, যাদের তারা নিজেদের চেয়ে উঁচুতে বসিয়েছিল।"
          },
          {
            "en": "Their reply gives away everything: we found our fathers doing thus (26:74). Not, they hear us; not, they help us. Only, this is what our fathers did. And it is exactly here, on that answer, that Ibrahim (AS) pivots. He said, then have you considered what you have been worshipping (26:75)? The question is no longer only about the idols. It is about the looking itself, about whether they had ever truly examined the practice they were defending with their fathers' names.",
            "bn": "তাদের জবাবই সব ফাঁস করে দেয়: আমরা আমাদের বাপ-দাদাকে এমনটা করতে দেখেছি (২৬:৭৪)। এমন নয় যে ওরা আমাদের শোনে, কিংবা উপকার করে। শুধু এটুকু, আমাদের বাপ-দাদা এমনটাই করত। আর ঠিক এই জবাবটার উপরেই ইবরাহীম (আঃ) মোড় ঘোরান। তিনি বললেন, তোমরা কি তবে ভেবে দেখেছ কিসের ইবাদত করে যাচ্ছ (২৬:৭৫)? প্রশ্নটা আর কেবল মূর্তি নিয়ে নয়। এবার প্রশ্ন খোদ তাকিয়ে দেখা নিয়ে, তারা বাপ-দাদার নাম দিয়ে যে কাজটার পক্ষ নিচ্ছে, সেটা আদৌ কখনো সত্যিকারভাবে যাচাই করে দেখেছে কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Have You Actually Looked",
          "bn": "সত্যিই কি তাকিয়ে দেখেছ"
        },
        "p": [
          {
            "en": "At-Tabari reads the words simply: Ibrahim said to his people, have you considered, O people, what you have been worshipping of these idols. Al-Qurtubi gives the same plain sense, that the ma, the what, points straight at the idols they served. The verb behind considered is ra'aytum, from seeing. But in Arabic this a-fa-ra'aytum is not only about the eyes. It is the summons a speaker uses to make a listener stop and turn his full attention to a thing, as if to say: now look, really look, at what stands in front of you.",
            "bn": "তাবারী আয়াতটি সোজাভাবে পড়েন: ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে বললেন, হে সম্প্রদায়, তোমরা কি ভেবে দেখেছ এই মূর্তিগুলোর যা তোমরা ইবাদত করে আসছ। কুরতুবীও একই সাদামাটা অর্থ দেন, 'মা' বা 'যা' শব্দটি সরাসরি তাদের পূজিত মূর্তিগুলোর দিকেই ইঙ্গিত করে। 'ভেবে দেখা'-র পেছনের ক্রিয়া রাআইতুম, যা দেখা থেকে এসেছে। তবে আরবিতে এই 'আফারাআইতুম' কেবল চোখের দেখা নয়। বক্তা এই ডাক দিয়ে শ্রোতাকে থামান, তার পুরো মনোযোগ কোনো জিনিসের দিকে ফেরান। যেন বলছেন: এবার তাকাও, ভালো করে তাকাও, চোখের সামনে যা দাঁড়িয়ে আছে তার দিকে।"
          },
          {
            "en": "The Muyassar makes that sense explicit. It renders the verse: have you observed, with careful reflection, what you have been worshipping of idols that neither hear nor benefit nor harm? The added phrase, with reflection, is the heart of it. Ibrahim (AS) is not asking for a quick glance that confirms a habit; he is asking for the slow, honest look that a habit rarely survives. To worship something is the gravest thing a person does. It is the last thing on earth that should be done without ever having looked.",
            "bn": "মুয়াসসার এই অর্থটাই খোলাসা করে দেয়। আয়াতের ব্যাখ্যায় বলে: তোমরা কি চিন্তাভাবনা করে লক্ষ করেছ, কিসের ইবাদত করছ, এমন মূর্তির যারা শোনে না, উপকার করে না, ক্ষতিও করে না? জুড়ে দেওয়া কথাটা, চিন্তাভাবনা করে, এটাই আসল কথা। ইবরাহীম (আঃ) এমন এক নজরের কথা বলছেন না, যা অভ্যাসটাকে শুধু সায় দিয়ে যায়। তিনি চান ধীর, সৎ দৃষ্টি, যার সামনে অভ্যাস সহজে টেকে না। কারও ইবাদত করা মানুষের সবচেয়ে গুরুতর কাজ। একবারও না তাকিয়ে করে ফেলার মতো জিনিস এটা মোটেই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer That Was None",
          "bn": "যে জবাব জবাব নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir, explaining these verses, puts his finger on the strangest part of the exchange. Their own words show they knew their idols could do nothing, yet they had seen their fathers doing this, and so they made haste to follow in their footsteps. The trouble was never a lack of evidence. The idols failed the test in plain view. The trouble was that the fathers' example had been allowed to settle the matter before the evidence was ever weighed at all.",
            "bn": "এই আয়াতগুলোর ব্যাখ্যায় ইবন কাসীর গোটা কথোপকথনের সবচেয়ে অদ্ভুত জায়গাটায় আঙুল রাখেন। তাদের নিজেদের কথাই বলে দেয়, তারা জানত তাদের মূর্তি কিছুই করতে পারে না। তবু তারা বাপ-দাদাকে এমনটা করতে দেখেছিল, আর তাই তাড়াহুড়ো করে তাদের পথ ধরেছিল। মুশকিলটা কখনোই প্রমাণের অভাব ছিল না। মূর্তিগুলো সবার চোখের সামনেই পরীক্ষায় ফেল করেছিল। মুশকিল হলো, প্রমাণ ওজন করে দেখার আগেই বাপ-দাদার নজিরকে বিষয়টা চুকিয়ে দিতে দেওয়া হয়েছিল।"
          },
          {
            "en": "This is the quiet danger the verse exposes. An inherited practice can arrive with its defence already built in, so that the practice is never examined and the defence is never tested. We found our fathers doing thus (26:74) is offered as if it were an argument, yet it answers a different question from the very thing that was actually asked. Ibrahim (AS) asked what the idols were. His people answered who had worshipped them before. A pedigree is not a proof, and a long line of doers settles nothing about the thing being done.",
            "bn": "এই নিঃশব্দ বিপদটাই আয়াত ফাঁস করে দেয়। হাতে পাওয়া কোনো প্রথা তার সাফাইটাও সঙ্গে করে নিয়ে আসতে পারে। ফলে প্রথাটা কখনো যাচাই হয় না, সাফাইটাও কখনো পরীক্ষায় বসে না। 'আমরা বাপ-দাদাকে এমনটা করতে দেখেছি' (২৬:৭৪) কথাটা এমনভাবে পেশ করা হয় যেন এটা কোনো যুক্তি। অথচ যে প্রশ্ন করা হয়েছিল, এটা তার জবাব নয়, ভিন্ন এক প্রশ্নের জবাব। ইবরাহীম (আঃ) জিজ্ঞেস করেছিলেন মূর্তিগুলো আসলে কী। সম্প্রদায় জবাব দিল, আগে কারা এগুলোর পূজা করত। বংশপরিচয় প্রমাণ নয়। কাজটা যারা করে এসেছে তাদের লম্বা তালিকা সেই কাজের সঠিক হওয়া নিয়ে কিছুই মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Case Built by Reason",
          "bn": "যুক্তি দিয়ে গড়া দলিল"
        },
        "p": [
          {
            "en": "As-Sa'di, opening this account, describes what kind of story it is. Among all the reports of Ibrahim (AS), he says, this is among the most remarkable, for it carries his message, his call to his people, his reasoned argument against them, and his dismantling of the falsehood they stood upon. That word, argument, matters. Ibrahim (AS) does not merely announce that the idols are false. He builds a case, question by question, that leads his listeners to see the falseness for themselves rather than take it on his word.",
            "bn": "এই বৃত্তান্ত শুরু করতে গিয়ে সাদী বলেন, এটা কেমন ধরনের কাহিনি। ইবরাহীম (আঃ)-এর সব বৃত্তান্তের মধ্যে, তিনি বলেন, এটি অন্যতম বিস্ময়কর। কারণ এতে আছে তাঁর বার্তা, তাঁর সম্প্রদায়ের প্রতি তাঁর ডাক, তাদের বিরুদ্ধে তাঁর যুক্তিতর্ক, আর তারা যে মিথ্যার উপর দাঁড়িয়ে ছিল তা ভেঙে দেওয়া। ওই শব্দটা, যুক্তিতর্ক, গুরুত্বপূর্ণ। ইবরাহীম (আঃ) শুধু ঘোষণা দেন না যে মূর্তি মিথ্যা। তিনি প্রশ্নের পর প্রশ্ন দিয়ে এমন এক দলিল গড়েন, যা শ্রোতাদের তাঁর কথায় ভরসা না করে নিজেরাই মিথ্যেটা দেখতে সাহায্য করে।"
          },
          {
            "en": "See how the argument is shaped. He first fixes what worship is for, then asks whether the idols can do any of it, whether they hear, benefit, or harm (26:72, 26:73). Only after the idols have failed on the very ground his listeners stand on does he press the harder question of 26:75: so, having seen that, what exactly is it that you worship? A conclusion a person reaches by his own looking holds him far more firmly than a verdict he is simply handed and told to keep.",
            "bn": "দলিলটা কীভাবে সাজানো, খেয়াল করুন। তিনি আগে ঠিক করে নেন ইবাদত জিনিসটা কীসের জন্য, তারপর জিজ্ঞেস করেন মূর্তিগুলো তার কিছু করতে পারে কি না, ওরা কি শোনে, উপকার করে, নাকি ক্ষতি (২৬:৭২, ২৬:৭৩)। শ্রোতারা নিজেরাই যে জমিনে দাঁড়িয়ে, সেখানেই মূর্তি ফেল করার পরেই তিনি ২৬:৭৫-এর কঠিন প্রশ্নটা চাপেন: তাহলে, এটা দেখার পরও তোমরা ঠিক কিসের ইবাদত কর? মানুষ নিজের দেখা দিয়ে যে সিদ্ধান্তে পৌঁছায়, তা হাতে ধরিয়ে দেওয়া সিদ্ধান্তের চেয়ে অনেক শক্ত করে তাকে ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Born Facing One Way",
          "bn": "জন্ম এক দিকেই ফেরানো"
        },
        "p": [
          {
            "en": "The Qur'an keeps returning to this knot of inherited religion, and the Sunnah names it directly. There is a sound hadith, narrated by Abu Huraira in Sahih al-Bukhari, that speaks to exactly what 26:74 describes: a truth a person is born with, then covered over by what the household hands on. It is worth quoting whole, because its image is precise, and because it turns Ibrahim (AS)'s challenge inward, onto the question of how any of us came by what we believe.",
            "bn": "কুরআন বারবার উত্তরাধিকারে পাওয়া ধর্মের এই গিঁটে ফিরে আসে, আর সুন্নাহ একে সরাসরি নাম দেয়। বুখারীতে আবু হুরাইরা (রাঃ) থেকে বর্ণিত একটি সহিহ হাদিস আছে, যা ঠিক ২৬:৭৪ আয়াত যা বলে তারই কথা বলে: মানুষ যে সত্য নিয়ে জন্মায়, তারপর ঘরের লোকের হাতে পাওয়া জিনিসে তা ঢাকা পড়ে যায়। পুরোটা উদ্ধৃত করা ভালো, কারণ এর ছবিটা নিখুঁত, আর কারণ এটা ইবরাহীম (আঃ)-এর চ্যালেঞ্জটাকে ভেতরের দিকে ফেরায়, আমরা কে কীভাবে নিজের বিশ্বাসটা পেলাম তার দিকে।"
          },
          {
            "en": "The Prophet (SAW) said: Every child is born with a true faith of Islam, that is, to worship none but Allah alone, and his parents convert him to Judaism or Christianity or Magianism, as an animal delivers a perfect baby animal; do you find it mutilated? The comparison is unsparing. The newborn arrives whole, turned toward its Lord; what disfigures it comes afterward, from the outside, from the very people it trusts most in the world.",
            "bn": "নবী ﷺ বলেছেন: প্রতিটি শিশু জন্মায় খাঁটি ইসলামের ফিতরাত নিয়ে, অর্থাৎ এক আল্লাহ ছাড়া আর কারও ইবাদত না করার স্বভাব নিয়ে। তারপর তার মা-বাবা তাকে ইহুদি, খ্রিস্টান বা অগ্নিপূজক বানায়, যেমন পশু গোটা ও নিখুঁত বাচ্চা প্রসব করে। এতে কি কোনো অঙ্গহীন বাচ্চা দেখতে পাও? উপমাটা কঠিন। সদ্যোজাত আসে পূর্ণ হয়ে, তার রবের দিকে ফেরানো অবস্থায়। যা তাকে বিকৃত করে তা আসে পরে, বাইরে থেকে, দুনিয়ায় যাদের সে সবচেয়ে বেশি বিশ্বাস করে ঠিক তাদের হাত ধরেই।"
          },
          {
            "en": "Say this plainly: the verse and the hadith both describe how a false worship is handed down, and neither licenses anything against any living person or community. The point is never to look down on those who inherited an error, for that is precisely the position the verse warns each of us against. The point is the opposite. If what disfigures faith comes from what we simply received, then everyone owes the same honest look inward that Ibrahim (AS) asked of his people, beginning with himself.",
            "bn": "কথাটা সোজাসুজি বলি: আয়াত আর হাদিস দুটোই বলে দেয় কীভাবে একটা ভুল ইবাদত উত্তরাধিকারে চলে আসে, আর কোনোটাই জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। উদ্দেশ্য কখনোই তাদের ছোট করা নয় যারা ভুলটা উত্তরাধিকারে পেয়েছে। কারণ আয়াত তো ঠিক সেই জায়গা নিয়েই আমাদের প্রত্যেককে সাবধান করে। উদ্দেশ্য বরং উল্টো। বিশ্বাসকে বিকৃত করা জিনিসটা যদি নিছক হাতে পাওয়া থেকেই আসে, তবে ইবরাহীম (আঃ) তাঁর সম্প্রদায়ের কাছে যে সৎ অন্তর্দৃষ্টি চেয়েছিলেন, তা প্রত্যেকেরই দেওয়া উচিত, নিজেকে দিয়েই শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Older Is Not Truer",
          "bn": "পুরনো মানেই সত্য নয়"
        },
        "p": [
          {
            "en": "Ibrahim (AS) does not let the appeal to the fathers stand unnamed. He spells it out: what you have been worshipping, you and your ancient forefathers (26:76). He drags the hidden premise into the open. The people had leaned on the sheer age of the practice, as though what the earliest forefathers did must be sound simply because they came first. By saying it aloud, Ibrahim (AS) lets his listeners hear how thin the claim is once it stops hiding behind the word fathers.",
            "bn": "ইবরাহীম (আঃ) বাপ-দাদার দোহাইটাকে নাম না দিয়ে ছেড়ে দেন না। তিনি খুলে বলেন: যা তোমরা ইবাদত করে আসছ, তোমরা আর তোমাদের পুরনো পিতৃপুরুষরা (২৬:৭৬)। লুকানো ধারণাটাকে তিনি সামনে টেনে আনেন। সম্প্রদায় নিছক প্রথার পুরনো বয়সের উপর ভর করছিল, যেন সবচেয়ে আগেকার পিতৃপুরুষরা যা করেছে তা সঠিক হতেই হবে, শুধু এই কারণে যে তারা আগে এসেছিল। কথাটা মুখে এনে ইবরাহীম (আঃ) শ্রোতাদের শুনিয়ে দেন, 'পিতৃপুরুষ' শব্দের আড়াল থেকে বেরোলে দাবিটা কতটা ফাঁপা।"
          },
          {
            "en": "There is a lesson here that reaches well past idols. The age of a belief is not evidence for it. A mistake repeated for a thousand years is still a mistake, only now with a longer list of names attached to it. This is no call to discard everything old; much of what is inherited is true and precious, and the Qur'an honours the way of the sincere who went before us. It is a call to hold the inherited and the new to the same test, and to let neither pass unexamined merely for being familiar.",
            "bn": "এখানে এমন এক শিক্ষা আছে যা মূর্তির গণ্ডি ছাড়িয়ে অনেক দূর যায়। কোনো বিশ্বাসের বয়স তার প্রমাণ নয়। হাজার বছর ধরে চলে আসা ভুল তবু ভুলই থাকে, শুধু এখন তার সঙ্গে নামের তালিকাটা লম্বা। পুরনো সবকিছু ফেলে দেওয়ার ডাক এটা নয়। উত্তরাধিকারে পাওয়া অনেক কিছুই সত্য ও মূল্যবান, আর কুরআন আমাদের আগে চলে যাওয়া নিষ্ঠাবানদের পথকে সম্মান করে। এ হলো উত্তরাধিকার আর নতুন, দুটোকেই একই কষ্টিপাথরে যাচাই করার ডাক। শুধু চেনা বলে কোনোটাকেই যেন যাচাই ছাড়া ছেড়ে না দিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Enemy, Except One Lord",
          "bn": "শত্রু, কেবল এক রব ছাড়া"
        },
        "p": [
          {
            "en": "Where does the challenge lead? Straight into the next breath: verily they are an enemy to me, except the Lord of the worlds (26:77). Ibn Kathir catches the daring in it. Ibrahim (AS), he says, is as good as telling them that if these idols hold any power at all, let them bring their harm down on him, for he is their enemy and gives them no thought whatever. The honest look does not end in mere doubt. It ends in a clean break, and in turning the whole of worship to the one Lord who alone deserves it.",
            "bn": "চ্যালেঞ্জটা কোথায় গিয়ে ঠেকে? পরের নিঃশ্বাসেই: নিশ্চয় ওরা সবাই আমার শত্রু, কেবল বিশ্বজগতের রব ছাড়া (২৬:৭৭)। ইবন কাসীর এর ভেতরের দুঃসাহসটা ধরেন। ইবরাহীম (আঃ), তিনি বলেন, যেন তাদের বলছেন, এই মূর্তির যদি সামান্যতম ক্ষমতাও থাকে, তবে তারা যেন তাদের ক্ষতি তাঁর উপর নামিয়ে আনে। কারণ তিনি তাদের শত্রু আর তাদের নিয়ে বিন্দুমাত্র ভাবেন না। সৎ দৃষ্টি নিছক সন্দেহে থেমে থাকে না। তা গিয়ে ঠেকে পরিষ্কার এক বিচ্ছেদে, আর গোটা ইবাদত সেই এক রবের দিকে ফেরানোয়, একমাত্র যিনিই তার যোগ্য।"
          },
          {
            "en": "Ibn Kathir sets these words beside the same stand taken by other prophets, Nuh and Hud among them, who each told their people to plot as they wished and gave them no respite, trusting in Allah alone. He points too to Ibrahim (AS)'s own declaration elsewhere: I am innocent of what you worship, except Him who created me, for He will guide me (43:27). The break with the false is never left hanging on its own. It is completed by attachment to the true, to the Lord who made him and would never abandon him.",
            "bn": "ইবন কাসীর এই কথাগুলোকে অন্য নবীদের নেওয়া একই অবস্থানের পাশে রাখেন, যাদের মধ্যে আছেন নুহ (আঃ) ও হুদ (আঃ)। তাঁরা প্রত্যেকে নিজ সম্প্রদায়কে বলেছিলেন যত ইচ্ছা ষড়যন্ত্র করতে, আর তাদের কোনো অবকাশ না দিয়ে কেবল আল্লাহর উপর ভরসা রেখেছিলেন। তিনি ইবরাহীম (আঃ)-এর অন্যত্র বলা ঘোষণার দিকেও ইশারা করেন: তোমরা যার ইবাদত কর তা থেকে আমি মুক্ত, কেবল সেই সত্তা ছাড়া যিনি আমাকে সৃষ্টি করেছেন, কারণ তিনিই আমাকে পথ দেখাবেন (৪৩:২৭)। মিথ্যার সঙ্গে বিচ্ছেদ কখনো একা ঝুলে থাকে না। তা পূর্ণ হয় সত্যের সঙ্গে জুড়ে গিয়ে, সেই রবের সঙ্গে, যিনি তাঁকে গড়েছেন আর কখনো ছেড়ে যাবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Am I Bowing To",
          "bn": "আমি কার সামনে নত"
        },
        "p": [
          {
            "en": "Turned on ourselves, the verse loses none of its edge. Few of us keep carved idols, but everyone keeps something they serve without ever having examined it: an assumption absorbed at home, a way of measuring success nobody ever questioned, a loyalty inherited whole. Ibrahim (AS)'s question is a tool made for exactly these. Have I actually looked at what I give my deepest devotion to, or have I only ever answered, in effect, that this is simply how it was always done around me?",
            "bn": "নিজের দিকে ফেরালে আয়াতের ধার এতটুকু কমে না। আমাদের খুব কম জনেরই খোদাই করা মূর্তি আছে। কিন্তু প্রত্যেকেই এমন কিছু আঁকড়ে রাখে, যার সেবা সে কখনো যাচাই না করেই করে যায়: ঘরে শুষে নেওয়া কোনো ধারণা, সফলতা মাপার এমন এক মাপকাঠি যা নিয়ে কেউ কখনো প্রশ্ন তোলেনি, গোটা উত্তরাধিকারে পাওয়া কোনো আনুগত্য। ইবরাহীম (আঃ)-এর প্রশ্ন ঠিক এসব যাচাইয়ের হাতিয়ার। আমার সবচেয়ে গভীর ভক্তি আমি যাকে দিই, তার দিকে কি সত্যিই তাকিয়েছি, নাকি বরাবর শুধু এটাই বলে এসেছি যে আমার চারপাশে চিরকাল এভাবেই হয়ে এসেছে?"
          },
          {
            "en": "That is why the verse is mercy, not scolding. It hands each person the one question that can free him from a borrowed error: what, exactly, is this that I serve? Asked honestly, it clears the ground for real worship, the worship of the Lord of the worlds who hears, who benefits, and who does not fail. A faith that has been looked at squarely and still chosen is worth immeasurably more than a habit carried unexamined from a father's hands. Ibrahim (AS) wanted his people to hold the first kind, and so should we.",
            "bn": "এ কারণেই আয়াতটি ধমক নয়, রহমত। এটি প্রত্যেক মানুষের হাতে সেই একটি প্রশ্ন তুলে দেয়, যা তাকে ধার করা ভুল থেকে মুক্তি দিতে পারে: আমি যার সেবা করছি, তা ঠিক কী? সৎভাবে জিজ্ঞেস করলে এ প্রশ্ন আসল ইবাদতের জন্য জমিন সাফ করে দেয়। সেই বিশ্বজগতের রবের ইবাদত, যিনি শোনেন, উপকার করেন, আর কখনো ব্যর্থ হন না। যে বিশ্বাসকে সোজাসুজি দেখে নিয়ে তবু বেছে নেওয়া হয়েছে, তা বাপের হাত থেকে যাচাই ছাড়া বয়ে আনা অভ্যাসের চেয়ে অতুলনীয়ভাবে বেশি মূল্যবান। ইবরাহীম (আঃ) চেয়েছিলেন তাঁর সম্প্রদায় প্রথম ধরনের বিশ্বাসটাই ধরুক, আর আমাদেরও তাই চাওয়া উচিত।"
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
  },
  "26:95": {
    "sections": [
      {
        "h": {
          "en": "Where Are Your Gods Now",
          "bn": "তোমাদের উপাস্যরা এখন কোথায়"
        },
        "p": [
          {
            "en": "These words close a scene that begins a few verses earlier. In 26:90 Paradise is brought near for the God-fearing; in 26:91 the Blazing Fire is brought forth for the deviators, al-ghawun. Then in 26:92 and 26:93 a question is put to those who followed falsehood: where now are the things you used to worship besides Allah, and can they help you, or even help themselves? No answer comes. In 26:94 they are overturned into the Fire, they and the deviators, and our verse adds the last item to that list.",
            "bn": "এই কথাগুলো এমন এক দৃশ্য শেষ করে, যা শুরু হয়েছে কয়েক আয়াত আগে। ২৬:৯০ আয়াতে জান্নাতকে মুত্তাকীদের কাছে এনে দেওয়া হয়; ২৬:৯১ আয়াতে জাহান্নামকে পথভ্রষ্টদের, অর্থাৎ আল-গাওউনদের সামনে উন্মোচন করা হয়। এরপর ২৬:৯২ ও ২৬:৯৩ আয়াতে যারা মিথ্যার পেছনে চলেছিল তাদের জিজ্ঞেস করা হয়, আল্লাহকে ছেড়ে তোমরা যাদের ইবাদত করতে তারা এখন কোথায়, তারা কি তোমাদের সাহায্য করতে পারে, নিজেদেরই কি বাঁচাতে পারে? কোনো জবাব আসে না। ২৬:৯৪ আয়াতে তাদের আর পথভ্রষ্টদের জাহান্নামে উল্টে ফেলা হয়, আর আমাদের আয়াত সেই তালিকায় শেষ নামটি যোগ করে।"
          },
          {
            "en": "And the soldiers of Iblis, all together. The sentence is only three words in Arabic, wa junudu Iblisa ajma'un, yet it seals the whole roll-call. Ibn Kathir reads it plainly: they too will all be thrown in, down to the last of them. What the deviators worshipped, the deviators themselves, and now the ranks that had recruited them, all arrive at one destination. The grammar keeps piling names onto a single verb of overturning until nobody who belonged to that side is left standing outside the Fire. This verse is the moment the trap shuts.",
            "bn": "আর ইবলীসের সৈন্যদল, সবাই একসঙ্গে। আরবিতে বাক্যটি মাত্র তিনটি শব্দের, ওয়া জুনূদু ইবলীসা আজমাঊন, তবু এটিই গোটা তালিকায় সিলমোহর দেয়। ইবন কাসীর সোজা কথায় বলেন, তাদেরও সবাইকে ভেতরে নিক্ষেপ করা হবে, একজনও বাদ না রেখে। যাদের পথভ্রষ্টরা পূজা করত, স্বয়ং পথভ্রষ্টরা, আর এখন যারা তাদের দলে টেনেছিল সেই বাহিনী, সবাই এসে পৌঁছায় একই ঠিকানায়। উল্টে ফেলার একটিমাত্র ক্রিয়ার উপর ব্যাকরণ একের পর এক নাম চাপাতে থাকে, শেষে ওই পক্ষের কেউই আর জাহান্নামের বাইরে দাঁড়িয়ে থাকে না। এই আয়াতই সেই মুহূর্ত, যেখানে ফাঁদ বন্ধ হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Soldiers of Iblis",
          "bn": "ইবলীসের সৈন্যেরা"
        },
        "p": [
          {
            "en": "At-Tabari fixes the sense of the sentence by supplying the verb the verse leaves implied: overturned into the Fire, along with the false rivals and the deviators, are the hosts of Iblis, all together. He then defines the hosts in one clause. His soldiers, he says, are everyone who was among his followers, whether from his own offspring or from the offspring of Adam. So at-Tabari's reading holds two groups in one word from the outset: the descendants Iblis fathered, and the human beings who fell in behind him.",
            "bn": "আয়াতটি যে ক্রিয়া উহ্য রেখেছে, তাবারী তা জুগিয়ে বাক্যের অর্থ পাকা করেন: আনদাদ অর্থাৎ মিথ্যা শরিকদের আর পথভ্রষ্টদের সঙ্গে ইবলীসের গোটা বাহিনীকেও জাহান্নামে উল্টে ফেলা হয়। তারপর তিনি একটি বাক্যেই বাহিনীর সংজ্ঞা দেন। তাঁর সৈন্য বলতে, তিনি বলেন, তার অনুসারীদের প্রত্যেকে, সে তার নিজের বংশধরই হোক বা আদমের বংশধর। কাজেই তাবারীর পাঠ প্রথম থেকেই একটি শব্দের ভেতরে দুই দলকে ধরে রাখে: ইবলীসের জন্ম দেওয়া বংশধর, আর যেসব মানুষ তার পেছনে সারি বেঁধেছে।"
          },
          {
            "en": "Al-Baghawi gives the same breadth in fewer words: they are his followers, and whoever obeyed him among the jinn and mankind; and it is said, his offspring. The Muyassar, commenting on 26:94 and 26:95 together, describes them being gathered and thrown into Hell together with those who misled them, the aides of Iblis who dressed up evil as good for them, and it closes with the phrase not one of them escaped. Across these commentators the soldier of Iblis is defined less by species than by obedience: whoever answered his call is counted in his ranks.",
            "bn": "বাগাভী কম শব্দে একই ব্যাপ্তি দেন: তারা তার অনুসারী, আর জিন ও মানুষের মধ্যে যারা তার আনুগত্য করেছে; আর বলা হয়, তার বংশধর। মুয়াসসার ২৬:৯৪ ও ২৬:৯৫ আয়াত একসঙ্গে ব্যাখ্যা করে বলে, তাদের জড়ো করে জাহান্নামে ফেলা হয়, তাদের সঙ্গে যারা তাদের বিভ্রান্ত করেছিল আর ইবলীসের সেই সহযোগীরা যারা মন্দকে তাদের কাছে সুন্দর করে সাজিয়েছিল; আর তা শেষ হয় এই কথায়, তাদের একজনও রেহাই পায়নি। এই তাফসীরকারদের কাছে ইবলীসের সৈন্য চেনা যায় প্রজাতি দিয়ে নয়, আনুগত্য দিয়ে: যে তার ডাকে সাড়া দিয়েছে সে-ই তার সারিতে গোনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Offspring or Followers",
          "bn": "সন্তান, নাকি অনুসারী"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the one who lays the different readings side by side. The hosts of Iblis, he begins, are those who are from his offspring. Then he adds a second view with the words and it is said: everyone whom Iblis called to the worship of idols and who followed him. A third strand he attributes by name: Qatada, al-Kalbi and Muqatil held that the deviators of the previous verse, al-ghawun, are the devils themselves. He reports these as readings, not as a ranked verdict, and does not force one over the others.",
            "bn": "ভিন্ন ভিন্ন পাঠ পাশাপাশি সাজিয়ে দেন কুরতুবীই। ইবলীসের বাহিনী, তিনি শুরু করেন, তারাই যারা তার বংশধর। এরপর আরেকটি মত জোড়েন এই কথায়, আর বলা হয়: ইবলীস যাদের মূর্তিপূজার দিকে ডেকেছিল আর যারা তার অনুসরণ করেছিল তাদের সবাই। তৃতীয় একটি ধারা তিনি নাম ধরে বলেন: কাতাদা, কালবী ও মুকাতিল মনে করতেন, আগের আয়াতের পথভ্রষ্টরা, আল-গাওউন, আসলে শয়তানরাই। তিনি এগুলোকে বিভিন্ন পাঠ হিসেবে তুলে ধরেন, কোনো একটিকে চূড়ান্ত রায় বানান না, আর একটিকে অন্যটির উপর চাপিয়েও দেন না।"
          },
          {
            "en": "So there is a real difference to hold open here, and it is worth naming rather than smoothing away. One line of reading keeps junud Iblis narrow: his offspring, the devils he brought into being. Another widens it to every jinn and human who obeyed him and worshipped besides God. At-Tabari and al-Baghawi in fact carry both inside a single sentence, while al-Qurtubi lists them as separate opinions. The commentators are not contradicting one another so much as drawing the boundary of the word at different distances, and the Qur'an itself leaves the phrase open enough to hold each.",
            "bn": "তাই এখানে সত্যিকারের একটা মতভেদ খোলা রাখার আছে, আর তা ঢেকে দেওয়ার বদলে বলে দেওয়াই ভালো। এক ধারা জুনূদু ইবলীসকে সংকীর্ণ রাখে: তার বংশধর, অর্থাৎ তার জন্ম দেওয়া শয়তানরা। আরেক ধারা তা বিস্তৃত করে জিন ও মানুষ প্রত্যেকের কাছে, যারা তার আনুগত্য করেছে আর আল্লাহকে ছেড়ে ইবাদত করেছে। তাবারী ও বাগাভী তো এক বাক্যেই দুটোকে ধরে রাখেন, আর কুরতুবী সেগুলোকে আলাদা মত হিসেবে সাজান। তাফসীরকারেরা একে অপরের বিরোধিতা করছেন না, বরং শব্দটার সীমানা টানছেন ভিন্ন ভিন্ন দূরত্বে, আর কুরআন নিজেই বাক্যটাকে এমন খোলা রেখেছে যে প্রতিটি পাঠকেই তা ধরতে পারে।"
          },
          {
            "en": "Al-Qurtubi closes with one more reported opinion, and it turns the picture in a different direction. It is said, he writes, that the idols are cast into the Fire, being iron and copper, so that others may be punished by means of them. On this reading the lifeless objects people served are not company in the Fire but instruments in it, heated to torment those who bowed to them. Whether the hosts are understood as devils, as human followers, or the idols as glowing metal, every version says the same thing about allegiance to falsehood: it does not save, it accompanies you into the punishment.",
            "bn": "কুরতুবী শেষ করেন আরও একটি বর্ণিত মত দিয়ে, আর তা ছবিটাকে অন্য দিকে ঘুরিয়ে দেয়। বলা হয়, তিনি লেখেন, মূর্তিগুলোকেই জাহান্নামে ফেলা হয়, কারণ সেগুলো লোহা আর তামা, যেন সেগুলো দিয়ে অন্যদের শাস্তি দেওয়া যায়। এই পাঠে মানুষ যেসব প্রাণহীন জিনিসের পূজা করত সেগুলো জাহান্নামে তাদের সঙ্গী নয়, বরং হাতিয়ার, উত্তপ্ত করে সেই লোকদেরই শাস্তি দিতে যারা একদিন সেগুলোর সামনে নত হয়েছিল। বাহিনীকে শয়তান বলুন, মানুষ-অনুসারী বলুন, কিংবা মূর্তিকে তপ্ত ধাতু বলুন, প্রতিটি বর্ণনাই মিথ্যার প্রতি আনুগত্য নিয়ে একই কথা বলে: তা বাঁচায় না, তা আপনাকে সঙ্গে নিয়েই শাস্তিতে নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Ranks in the Army",
          "bn": "বাহিনীর তিন স্তর"
        },
        "p": [
          {
            "en": "As-Sa'di reads the phrase through the human heart. The hosts of Iblis, he says, are those of mankind and jinn whom he goaded fiercely toward acts of disobedience and gained mastery over through their shirk and their want of faith, until they became his callers and those who strove for what pleases him. He does not leave the army as one undifferentiated mass. He sorts it into ranks. Among them, he writes, is the one who calls others to Iblis's obedience, the one who answers that call, and the one who merely imitates the rest in their shirk.",
            "bn": "সা'দী বাক্যটি পড়েন মানুষের অন্তরের ভেতর দিয়ে। ইবলীসের বাহিনী, তিনি বলেন, মানুষ ও জিনের সেইসব লোক যাদের সে প্রবলভাবে গুনাহর দিকে ঠেলে দিয়েছে আর তাদের শিরক ও ঈমানহীনতার সুযোগে তাদের উপর কর্তৃত্ব কায়েম করেছে, শেষে তারা হয়ে গেছে তার প্রচারক আর তার সন্তুষ্টির পথে ছুটে চলা লোক। তিনি বাহিনীটাকে একটাই অভিন্ন জটলা হিসেবে ছেড়ে দেন না। তিনি একে স্তরে ভাগ করেন। তাদের মধ্যে আছে, তিনি লেখেন, যে অন্যদের ইবলীসের আনুগত্যের দিকে ডাকে, যে সেই ডাকে সাড়া দেয়, আর যে কেবল শিরকে বাকিদের নকল করে চলে।"
          },
          {
            "en": "That last rank is the sobering one. As-Sa'di does not reserve the title soldier of Iblis for the ringleader who preaches falsehood. The person who never led anyone astray, who simply went along with the crowd and copied its shirk, stands in the same formation and is gathered with it. Following without thinking is not treated as innocence here; it is a form of enlistment. The verse thus refuses the excuse that will be tried a few lines later, in 26:99, we were only misled by the criminals. Being led does not lift you out of the ranks you marched in.",
            "bn": "শেষ ওই স্তরটাই ভাবিয়ে তোলে। সা'দী ইবলীসের সৈন্য উপাধিটা কেবল সেই সর্দারের জন্য রাখেন না যে মিথ্যার তবলিগ করে। যে কাউকে বিভ্রান্ত করেনি, কেবল ভিড়ের সঙ্গে গা ভাসিয়েছে আর তাদের শিরক নকল করেছে, সে-ও একই সারিতে দাঁড়িয়ে আর তার সঙ্গেই জড়ো হয়। না ভেবে অনুসরণ করাকে এখানে নির্দোষতা ধরা হয় না; এটাও এক ধরনের নাম-লেখানো। তাই আয়াতটি সেই অজুহাত আগেভাগেই নাকচ করে দেয়, যা কয়েক লাইন পরে ২৬:৯৯ আয়াতে চেষ্টা করা হবে, আমাদের তো কেবল অপরাধীরাই বিভ্রান্ত করেছে। বিভ্রান্ত হওয়া আপনাকে সেই সারি থেকে বের করে আনে না, যে সারিতে আপনি পা মিলিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Down to the Last One",
          "bn": "একজনও বাদ নয়"
        },
        "p": [
          {
            "en": "The word ajma'un, all together, is not decoration. It is the point. Ibn Kathir's whole comment on the verse is that they are cast in down to the very last of them, 'an akhirihim, with none held back. The Muyassar reaches for the same idea from the other side: not one of them escaped. A soldier might expect that a great enough army offers cover, that in a crowd this large some will slip through. The verse removes that hope in a single word. The totality that felt like strength in the muster becomes the totality of the loss.",
            "bn": "আজমাঊন শব্দটা, সবাই একসঙ্গে, কোনো সাজসজ্জা নয়। এটাই মূল কথা। এই আয়াতে ইবন কাসীরের গোটা মন্তব্যই হলো, তাদের একদম শেষজন পর্যন্ত ভেতরে ফেলা হবে, 'আন আখিরিহিম, কাউকে আটকে না রেখে। মুয়াসসার একই কথা ধরে অন্য দিক থেকে: তাদের একজনও রেহাই পায়নি। কোনো সৈন্য হয়তো ভাবতে পারে, যথেষ্ট বড় বাহিনী আড়াল দেয়, এত বড় ভিড়ে কেউ কেউ ঠিকই ফসকে যাবে। আয়াতটি একটিমাত্র শব্দে সেই আশা মুছে দেয়। জমায়েতের সময় যে সংখ্যা মনে হতো শক্তি, সেটাই হয়ে দাঁড়ায় গোটা ক্ষতির মাপ।"
          },
          {
            "en": "There is a quiet contrast running under the passage. In 26:90 the Garden is brought near for the God-fearing, and in 26:91 the Fire is brought forth for the deviators. The righteous are not described as a great host; they are described as brought close. The deviators are the ones counted in armies and rivals and legions, and all that number buys them is that all of it is gathered into one pit. Weight of numbers is offered here as the false comfort it is. What decides the two destinations is not how many stand with you but which side you stood on.",
            "bn": "পুরো অংশটার নিচে একটা চাপা তুলনা বয়ে চলে। ২৬:৯০ আয়াতে জান্নাতকে মুত্তাকীদের কাছে আনা হয়, আর ২৬:৯১ আয়াতে জাহান্নামকে পথভ্রষ্টদের সামনে আনা হয়। মুত্তাকীদের কোনো বিশাল বাহিনী বলে বর্ণনা করা হয় না; বলা হয়, তাদের কাছে আনা হলো। পথভ্রষ্টরাই বরং গোনা হয় বাহিনী, শরিক আর দলবলে, আর সেই সংখ্যা তাদের কেবল এটুকু দেয় যে গোটা দলটাকেই এক গর্তে জড়ো করা হয়। সংখ্যার ভার এখানে যে এক মিথ্যা সান্ত্বনা, তা ধরিয়ে দেওয়া হয়। দুই ঠিকানা ঠিক করে কতজন আপনার পাশে দাঁড়াল তা নয়, বরং আপনি কোন পক্ষে দাঁড়ালেন সেটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "When Allies Turn on Each Other",
          "bn": "মিত্র যখন শত্রু হয়"
        },
        "p": [
          {
            "en": "The verses that follow show what this gathered partnership does once it is inside the Fire. In 26:96 they fall to quarrelling, and in 26:97 and 26:98 they swear, by Allah, we were in manifest error when we made you equal to the Lord of the worlds. Ibn Kathir explains the scene: the weak among them turn on the arrogant leaders they had followed, and each side realises the blame is its own. In 26:99 they land on a verdict, none misled us but the criminals. The alliance that recruited and marched together now exists only to accuse.",
            "bn": "পরের আয়াতগুলো দেখায়, জাহান্নামে ঢোকার পর এই জড়ো হওয়া জোট কী করে। ২৬:৯৬ আয়াতে তারা ঝগড়ায় নামে, আর ২৬:৯৭ ও ২৬:৯৮ আয়াতে কসম খায়, আল্লাহর কসম, আমরা স্পষ্ট গোমরাহিতেই ছিলাম, যখন তোমাদের সর্বজগতের রবের সমকক্ষ বানিয়েছিলাম। ইবন কাসীর দৃশ্যটা খুলে বলেন: তাদের মধ্যে দুর্বলেরা সেই অহংকারী নেতাদের বিরুদ্ধে ফিরে দাঁড়ায় যাদের তারা অনুসরণ করেছিল, আর দুই পক্ষই বুঝতে পারে দোষ তাদের নিজেদেরই। ২৬:৯৯ আয়াতে তারা এক রায়ে পৌঁছায়, অপরাধীরাই আমাদের বিভ্রান্ত করেছে। যে জোট একসঙ্গে দলে টেনেছিল আর পা মিলিয়ে চলেছিল, তা এখন টিকে আছে কেবল দোষারোপের জন্য।"
          },
          {
            "en": "Ibn Kathir draws the parallel himself, pointing to 38:64, where Allah calls the mutual dispute of the people of the Fire a true thing that will surely happen. The Qur'an states the same law of that Day plainly in 43:67: close friends, on that Day, will be enemies to one another, except the God-fearing. Every bond built on shared rebellion is on a timer. It holds while the rebellion is comfortable and shatters the instant the bill arrives, because it was never loyalty to a person; it was partnership in a direction, and the direction has just ended in the Fire.",
            "bn": "ইবন কাসীর নিজেই তুলনাটা টানেন, ৩৮:৬৪ আয়াতের দিকে ইঙ্গিত করে, যেখানে আল্লাহ জাহান্নামবাসীদের পরস্পরের ঝগড়াকে সত্য বলে ঘোষণা করেন, যা নিশ্চয়ই ঘটবে। কুরআন সেই দিনের একই নিয়ম সোজা কথায় বলে ৪৩:৬৭ আয়াতে: অন্তরঙ্গ বন্ধুরা সেদিন একে অপরের শত্রু হয়ে যাবে, কেবল মুত্তাকীরা ছাড়া। অবাধ্যতার উপর গড়া প্রতিটি বন্ধন সময়ের কাঁটায় বাঁধা। অবাধ্যতা যতক্ষণ আরামের ততক্ষণ তা টেকে, আর হিসাব চুকানোর মুহূর্তেই ভেঙে পড়ে; কারণ তা কখনো কোনো মানুষের প্রতি আনুগত্য ছিল না, ছিল এক পথের সঙ্গে অংশীদারি, আর সেই পথ এইমাত্র জাহান্নামে গিয়ে শেষ হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Loyalty That Earns Shade",
          "bn": "যে বন্ধুত্ব ছায়া এনে দেয়"
        },
        "p": [
          {
            "en": "No tafsir fetched for this verse attaches a specific hadith to it, so what follows is not tied by the commentators to 26:95; it is a sound narration on the same theme of where allegiance ends. Bukhari records from Abu Hurayra that the Prophet صلى الله عليه وسلم said Allah will shade seven under His shade on the Day when there is no shade but His, and among them he named two who loved one another for Allah's sake, meeting for that and parting for that. Bukhari places it among the rigorously authentic reports of his collection.",
            "bn": "এই আয়াতের জন্য দেখা কোনো তাফসীরই এর সঙ্গে নির্দিষ্ট কোনো হাদীস জোড়েনি, তাই যা আসছে তা মুফাসসিরগণ ২৬:৯৫-এর সঙ্গে বাঁধেননি; এটি একই বিষয়ের উপর একটি সহীহ বর্ণনা, আনুগত্য শেষ পর্যন্ত কোথায় গিয়ে দাঁড়ায় তা নিয়ে। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না সেদিন আল্লাহ ৭ জনকে তাঁর ছায়ায় আশ্রয় দেবেন, আর তাদের মধ্যে তিনি নাম করেছেন দুজনের, যারা আল্লাহর জন্য একে অপরকে ভালোবেসেছে, এর জন্যই মিলেছে আর এর জন্যই আলাদা হয়েছে। বুখারী এটি তাঁর সংকলনের সহীহ বর্ণনাগুলোর মধ্যেই রেখেছেন।"
          },
          {
            "en": "Set the two pictures next to each other. Here is a partnership that meets over disobedience and is gathered, in the end, into one fire to trade accusations. There is a friendship that meets for Allah and parts for Allah, and is gathered, in the end, under the shade that is His alone. Both are bonds; both involve meeting and parting and standing together. The whole difference is what the bond is built on. The verse and the hadith are asking the same question from opposite ends: on the Day the shade is shared out, which of these two companies will you be found in?",
            "bn": "দুটি ছবি পাশাপাশি রাখুন। এখানে এক জোট, যা অবাধ্যতার উপর মেলে আর শেষে এক আগুনে জড়ো হয়ে পরস্পরের বিরুদ্ধে দোষারোপ ছোড়ে। ওখানে এক বন্ধুত্ব, যা আল্লাহর জন্য মেলে আর আল্লাহর জন্য আলাদা হয়, আর শেষে জড়ো হয় সেই ছায়ায় যা কেবল তাঁরই। দুটোই বন্ধন; দুটোতেই মেলামেশা, আলাদা হওয়া আর একসঙ্গে দাঁড়ানো আছে। গোটা তফাত হলো বন্ধনটা কিসের উপর গড়া। আয়াত আর হাদীস একই প্রশ্ন করছে দুই প্রান্ত থেকে: যেদিন ছায়া ভাগ করে দেওয়া হবে, এই দুই দলের কোনটিতে আপনাকে পাওয়া যাবে?"
          }
        ]
      },
      {
        "h": {
          "en": "No Charge Against the Living",
          "bn": "জীবিত কারও নামে নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly. The hosts of Iblis in this verse are a category the next world will sort out: the devils, and those who obeyed Iblis in worshipping besides God. The verse describes what the Day of Judgment will disclose, and it licenses nothing against any living person or community. It is not a label to pin on a group, a sect, a nation or a neighbour in this life, and no one is given the right to consign another to that army. Who marched in it is known to Allah alone, and the sorting belongs to the Day, not to us.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। এই আয়াতে ইবলীসের বাহিনী এমন এক শ্রেণি যাকে পরকালই ছেঁকে আলাদা করবে: শয়তানরা, আর যারা আল্লাহকে ছেড়ে ইবাদতে ইবলীসের আনুগত্য করেছে। আয়াতটি বর্ণনা করে কিয়ামতের দিন যা প্রকাশ পাবে, আর তা কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এটি কোনো দল, কোনো ফিরকা, কোনো জাতি বা প্রতিবেশীর গায়ে এ দুনিয়ায় সেঁটে দেওয়ার তকমা নয়, আর কাউকে এই অধিকার দেওয়া হয়নি যে সে অন্যকে ওই বাহিনীতে ঠেলে দেবে। কে সেই সারিতে পা মিলিয়েছিল তা কেবল আল্লাহই জানেন, আর সেই ছাঁকাই সেই দিনের কাজ, আমাদের নয়।"
          },
          {
            "en": "That leaves the verse doing its proper work, which is on me, not on anyone else. It asks me to look at the allegiances I am building while there is still time to build them, before the muster is fixed. Whom do I follow when following is easy? Whose approval steers my choices? The false gods of this age are subtler than idols of iron and copper, but the question is the same one 26:93 puts to the deviators: can they help you, or even help themselves? I would rather find, on that Day, that I stood with the God-fearing brought near, than in the army gathered together.",
            "bn": "এতে আয়াতটি তার আসল কাজটাই করে, যা আমার উপর, অন্য কারও উপর নয়। এটি আমাকে বলে, এখনও যতক্ষণ সময় আছে ততক্ষণেই দেখে নাও কোন আনুগত্য গড়ে তুলছ, জমায়েত পাকা হয়ে যাওয়ার আগেই। সহজ হলে আমি কার পেছনে চলি? কার সন্তুষ্টি আমার সিদ্ধান্ত ঘোরায়? এ যুগের মিথ্যা উপাস্যরা লোহা-তামার মূর্তির চেয়ে সূক্ষ্ম, কিন্তু প্রশ্নটা সেই একই যা ২৬:৯৩ আয়াত পথভ্রষ্টদের করে: তারা কি তোমাদের সাহায্য করতে পারে, নিজেদেরই কি বাঁচাতে পারে? সেই দিন আমি বরং নিজেকে সেই মুত্তাকীদের সঙ্গে পেতে চাই যাদের কাছে আনা হয়েছিল, ওই একসঙ্গে জড়ো করা বাহিনীতে নয়।"
          }
        ]
      }
    ]
  },
  "26:97": {
    "sections": [
      {
        "h": {
          "en": "A Quarrel in the Fire",
          "bn": "আগুনের ভেতরে ঝগড়া"
        },
        "p": [
          {
            "en": "The verse comes out of a collapse already in progress. Hellfire has been brought forth for the deviators in 26:91, and the worshippers and the things they worshipped are hurled into it together with the hosts of Iblis in 26:94 and 26:95. As they fall, 26:96 says they are disputing, quarreling among themselves. The confession in this verse is not calm reflection in a quiet room. It is torn out of a fight, spoken by people who have just watched everything they trusted fail at once. The reader stands just behind them, hearing people say the plain truth about themselves aloud for the very first time.",
            "bn": "আয়াতটি আসে এমন এক ধসের ভেতর থেকে, যা তখন চলছেই। ২৬:৯১ আয়াতে পথভ্রষ্টদের সামনে জাহান্নামকে এনে হাজির করা হয়েছে, আর উপাসকদের সঙ্গে তাদের উপাস্যগুলোকে, এমনকি ইবলীসের গোটা দলবলকেও ২৬:৯৪ ও ২৬:৯৫ আয়াতে একসঙ্গে ভেতরে ছুড়ে ফেলা হচ্ছে। পড়তে পড়তে ২৬:৯৬ আয়াত বলছে, তারা নিজেদের মধ্যে ঝগড়ায় মেতে আছে। এ আয়াতের স্বীকারোক্তি কোনো শান্ত ঘরে বসে ঠান্ডা মাথায় ভাবনা নয়। এটা এক লড়াইয়ের ভেতর থেকে ছিঁড়ে বেরোনো কথা, যে মানুষগুলো এইমাত্র দেখল তাদের সব ভরসা একসঙ্গে ভেঙে পড়ল। পাঠক দাঁড়িয়ে আছে ঠিক তাদের পেছনে, শুনছে মানুষগুলো একদম প্রথমবার নিজেদের নিয়ে খাঁটি সত্যটা মুখে বলছে।"
          },
          {
            "en": "Ibn Kathir, in his commentary, reads the quarrel from the inside. The weak followers turn to the arrogant leaders they had obeyed and say, in effect, we were only following you, so can you keep any of this Fire off us now? No answer comes. Then, he says, they realize that the blame falls on themselves, and it is at that point they swear the words of 26:97. The admission is not forced from them by an accuser. It rises on its own, once there is nothing left to defend.",
            "bn": "ইবন কাসীর তাঁর তাফসীরে এই ঝগড়াটাকে ভেতর থেকে পড়েন। দুর্বল অনুসারীরা যে দাম্ভিক নেতাদের কথা মেনে চলত, তাদের দিকে ফিরে বলে, আমরা তো শুধু তোমাদেরই অনুসরণ করেছি, এখন কি এই আগুনের কিছুটা আমাদের থেকে ঠেকাতে পারবে? কোনো জবাব আসে না। এরপর, তিনি বলেন, তারা বুঝতে পারে দোষ তাদের নিজেদের ঘাড়েই পড়ছে, আর ঠিক তখনই তারা ২৬:৯৭ আয়াতের কথাগুলো কসম খেয়ে বলে। স্বীকারোক্তিটা কোনো অভিযোগকারী জোর করে বের করেনি। সব রক্ষা করার মতো যখন আর কিছু নেই, তখন নিজে থেকেই তা উঠে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath Sworn Too Late",
          "bn": "কসম, তবে বড় দেরিতে"
        },
        "p": [
          {
            "en": "The verse opens with an oath. Tallahi: by Allah. Al-Qurtubi glosses the word plainly, they swore by Allah, and that small detail is heavier than it looks. An oath is the strongest way a person can stand behind a statement, staking their truthfulness on the name they swear by. Here the name they reach for is Allah's. The same people who in the world would not give Him worship alone now call Him to witness that they were wrong, as if no lesser witness would do. Their reach for His name, and for no other, measures how complete the surrender of their old denial has finally become.",
            "bn": "আয়াতটা শুরু হয় কসম দিয়ে। তা-ল্লাহি: আল্লাহর কসম। কুরতুবী কথাটার সোজা মানে দেন, তারা আল্লাহর নামে কসম খেল। আর এই ছোট্ট বিষয়টা দেখতে যতটা, তার চেয়ে অনেক ভারী। কসম হলো কোনো কথার পেছনে দাঁড়ানোর সবচেয়ে জোরালো উপায়, যেখানে মানুষ যাঁর নামে কসম খায় তাঁকে সাক্ষী রেখে নিজের সত্যবাদিতা বাজি ধরে। এখানে তারা যাঁর নাম নিচ্ছে, তিনি আল্লাহ। যে মানুষগুলো দুনিয়ায় তাঁকে একা ইবাদত দিতে চায়নি, তারাই এখন তাঁকে সাক্ষী ডেকে বলছে তারা ভুল ছিল, যেন এর কমে আর কোনো সাক্ষীতে চলবে না। অন্য কারও নয়, ঠিক তাঁরই নাম খোঁজা মেপে দেয় তাদের পুরোনো অস্বীকার শেষমেশ কতটা পুরোপুরি ভেঙে পড়েছে।"
          },
          {
            "en": "But an oath changes nothing about where it is sworn. In the world, a sworn confession can reopen a case, clear a wronged person, or begin a return to God. Sworn here, on the floor of the Fire, it carries the same certainty and none of the use. They have never been more honest, and it has never mattered less. That gap between the truth of the words and the hour they are spoken is the whole weight of the verse, and it is a warning aimed at the living.",
            "bn": "কিন্তু কসম কোথায় খাওয়া হলো, তা সে বদলায় না। দুনিয়ায় কসম খেয়ে করা স্বীকারোক্তি কোনো মামলা আবার খুলে দিতে পারে, মজলুমকে নির্দোষ প্রমাণ করতে পারে, কিংবা আল্লাহর দিকে ফেরার শুরু হতে পারে। কিন্তু জাহান্নামের মেঝেতে দাঁড়িয়ে খাওয়া সেই একই কসমে নিশ্চয়তা আছে ঠিকই, কাজের কিছু নেই। তারা এর আগে কখনো এত সত্যবাদী ছিল না, আর এই সত্যের দাম কখনো এত কম ছিল না। কথার সত্যতা আর সেটা বলার সময়টার মাঝের এই ফারাকই গোটা আয়াতের ভার, আর এটা বেঁচে থাকা মানুষের উদ্দেশেই এক সতর্কবার্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Loss, Ruin, Bewilderment",
          "bn": "ক্ষতি, ধ্বংস, দিশাহীনতা"
        },
        "p": [
          {
            "en": "What exactly are they confessing to? The word is dalal, error, and the commentators fill it out. Al-Qurtubi reads it as loss and ruin and bewilderment away from the truth, a plain and total wreckage, brought on, he says, when they took gods alongside Allah and worshipped them the way He is worshipped. Notice the three failures stacked inside the one word. It was loss, because they gave their lives to nothing. It was ruin, because of where it ended. And it was bewilderment, because they could never have said clearly what they were doing or why.",
            "bn": "ঠিক কীসের স্বীকারোক্তি দিচ্ছে তারা? শব্দটা হলো গুমরাহী, আর তাফসীরকারেরা তার মানে খুলে দেন। কুরতুবী একে পড়েন ক্ষতি, ধ্বংস আর সত্য থেকে সরে গিয়ে দিশাহীনতা হিসেবে, এক স্পষ্ট ও পুরোপুরি বিপর্যয়; যা নেমে আসে, তিনি বলেন, যখন তারা আল্লাহর পাশাপাশি দেবতা বানিয়ে নিল আর তাঁকে যেভাবে ইবাদত করা হয় সেভাবেই ওদের ইবাদত করল। খেয়াল করুন, একটি শব্দের ভেতরে কেমন তিনটি ব্যর্থতা একসঙ্গে গাঁথা। এ ছিল ক্ষতি, কারণ তারা জীবনটা দিয়ে দিল এমন কিছুতে যার কোনো দাম নেই। এ ছিল ধ্বংস, কারণ এর শেষটা কোথায় গিয়ে ঠেকল। আর এ ছিল দিশাহীনতা, কারণ তারা কখনো স্পষ্ট করে বলতেই পারত না তারা কী করছে বা কেন করছে।"
          },
          {
            "en": "At-Tabari arrives at the same place by another road. He reads the error as a going-away from the truth, a departure, as if the truth stood in a fixed place and they walked steadily in the opposite direction. That image matters. It says their state was not a single stumble but a direction of travel, held for a lifetime. A person can be sincere and busy and respectable the whole way and still be walking, every day, further from the one thing that was true. Sincerity is no compass. The direction is what the verse weighs.",
            "bn": "তাবারী ভিন্ন পথে এসে সেই একই জায়গায় পৌঁছান। তিনি এই ভুলকে পড়েন সত্য থেকে সরে যাওয়া, এক দূরে চলে যাওয়া হিসেবে, যেন সত্য দাঁড়িয়ে আছে এক নির্দিষ্ট জায়গায় আর তারা অবিরাম তার উল্টো দিকে হেঁটে চলেছে। এই ছবিটা গুরুত্বপূর্ণ। এটা বলছে, তাদের অবস্থা কোনো একবারের হোঁচট ছিল না, ছিল হাঁটার একটা দিক, যা সারা জীবন ধরে রাখা। একজন মানুষ পুরো পথ ধরে আন্তরিক, ব্যস্ত আর সম্মানিত থাকতে পারে, তবু প্রতিদিন হেঁটে যেতে পারে যে একটিমাত্র জিনিস সত্য ছিল তার থেকে আরও দূরে। আন্তরিকতা কোনো কম্পাস নয়। আয়াত যা ওজন করে, তা হলো দিকটা।"
          }
        ]
      },
      {
        "h": {
          "en": "It Was Plain All Along",
          "bn": "ভুলটা তো স্পষ্টই ছিল"
        },
        "p": [
          {
            "en": "The word they end on is mubin, manifest, and it is the hinge of the whole confession. At-Tabari explains it with care: their straying made its own departure from the truth clear, by itself, to anyone who would contemplate it and ponder it, showing him that it was error and falsehood. Read that slowly. The error did not become visible only in the Fire. It was self-evident all along, carrying its own proof, open to anyone willing to stop and look. What was missing in the world was never the evidence. It was the looking.",
            "bn": "যে শব্দে তারা কথা শেষ করে, তা হলো মুবীন, স্পষ্ট; আর এটাই গোটা স্বীকারোক্তির কব্জা। তাবারী যত্ন করে বুঝিয়ে দেন: তাদের বিপথগামিতা সত্য থেকে নিজের সরে যাওয়াটা নিজেই স্পষ্ট করে দিত, যে কেউ তা নিয়ে ভাবত আর গভীরভাবে চিন্তা করত তার কাছে, দেখিয়ে দিত যে এ ভুল আর মিথ্যা। কথাটা ধীরে পড়ুন। ভুলটা কেবল আগুনে এসে চোখে পড়ল, তা নয়। এ তো গোড়া থেকেই নিজে নিজেই স্পষ্ট ছিল, নিজের প্রমাণ নিজের সঙ্গে নিয়ে, যে কেউ একটু থেমে তাকাতে চাইত তার কাছে খোলা। দুনিয়ায় কখনো প্রমাণের অভাব ছিল না। অভাব ছিল তাকিয়ে দেখার।"
          },
          {
            "en": "There is a quiet rebuke in that. The very act the verse asks for, contemplating and pondering until a thing shows its true nature, is the act they never performed. They inherited their worship, repeated it, defended it, and never once held it up to the light. The tragedy is not that the truth was hidden and then revealed. It is that it was never hidden, and they simply did not look, until a day came when looking could no longer save them. They had the proof in hand the entire time and treated it as furniture, too familiar to be worth a second glance.",
            "bn": "এর ভেতরে এক চাপা ভর্ৎসনা আছে। আয়াত যে কাজটি চায়, অর্থাৎ কোনো জিনিস তার আসল রূপ না দেখানো পর্যন্ত তা নিয়ে ভাবা আর গভীরে চিন্তা করা, সেই কাজটাই তারা কোনোদিন করেনি। তারা তাদের উপাসনা উত্তরাধিকারে পেয়েছে, বারবার করে গেছে, এর পক্ষে কথা বলেছে, অথচ একবারও তা আলোর সামনে ধরে দেখেনি। বিয়োগান্ত ব্যাপারটা এই নয় যে সত্য লুকানো ছিল, পরে খুলে দেওয়া হলো। ব্যাপারটা হলো, সত্য কখনো লুকানো ছিল না, তারা শুধু তাকায়নি; যতক্ষণ না এমন এক দিন এল, যখন তাকিয়ে দেখাটা আর তাদের বাঁচাতে পারে না। গোটা সময়টা প্রমাণ তাদের হাতেই ছিল, অথচ তারা তাকে ঘরের আসবাবের মতো গণ্য করেছে, এতই চেনা যে আরেকবার তাকিয়ে দেখার কথাও মনে আসেনি।"
          },
          {
            "en": "That is exactly why this verse belongs to the living and not only to the condemned. Every person carries some inherited certainty they have never examined, some loyalty they assume is right because it is old or common or comfortable. The verse does not say such things are safe. It says the deviators had every chance to test theirs and did not, and the clarity they could have reached in an afternoon of honest thought reached them instead at the edge of the Fire. The invitation is to do now what they refused.",
            "bn": "ঠিক এ কারণেই আয়াতটি কেবল দণ্ডিতদের নয়, বেঁচে থাকা মানুষেরও। প্রত্যেকেই কিছু উত্তরাধিকারসূত্রে পাওয়া বিশ্বাস বয়ে বেড়ায়, যা সে কখনো যাচাই করে দেখেনি; কিছু আনুগত্য থাকে, যাকে সে ঠিক ধরে নেয় শুধু এ কারণে যে তা পুরোনো, চালু কিংবা আরামের। আয়াত বলে না যে এসব নিরাপদ। আয়াত বলছে, পথভ্রষ্টদের হাতে নিজেদেরটা যাচাই করার সব সুযোগ ছিল, তবু তারা করেনি; আর যে স্পষ্টতা তারা এক বিকেলের সৎ ভাবনাতেই পেয়ে যেতে পারত, তা তাদের কাছে পৌঁছাল জাহান্নামের কিনারায়। ডাকটা হলো, তারা যা করতে অস্বীকার করেছিল, তা এখনই করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Clarity That Saves Nothing",
          "bn": "যে স্পষ্টতা কিছুই বাঁচায় না"
        },
        "p": [
          {
            "en": "As-Sa'di draws out what their new clarity actually produces. Addressing the idols they had served, they swear they were in manifest error, and then, he says, their misguidance became clear to them at that very moment, and they acknowledged the justice of Allah in punishing them, admitting the penalty had fallen exactly where it belonged. Read what that confession does. It does not plead. It does not bargain. It concedes that the sentence is right. The clarity that would have been faith in the world has become, in the Fire, nothing more than agreement with the verdict against them.",
            "bn": "আস-সাদী খুলে বলেন, তাদের এই নতুন স্পষ্টতা আসলে কী জন্ম দেয়। যে প্রতিমাদের তারা সেবা করত তাদের উদ্দেশে তারা কসম খায় যে তারা স্পষ্ট গুমরাহীতে ছিল; আর তখন, তিনি বলেন, ঠিক সেই মুহূর্তে তাদের বিপথগামিতা তাদের কাছে স্পষ্ট হয়ে যায়, আর তারা মেনে নেয় শাস্তিদানে আল্লাহর ইনসাফের কথা, স্বীকার করে নেয় যে সাজা ঠিক জায়গাতেই পড়েছে। দেখুন, এই স্বীকারোক্তি কী করছে। এটা কাকুতি করে না। দরকষাকষিও করে না। বরং মেনে নেয় যে রায়টা সঠিক। দুনিয়ায় যে স্পষ্টতা হতে পারত ঈমান, আগুনে এসে তা হয়ে দাঁড়িয়েছে তাদের বিরুদ্ধে যাওয়া রায়ের সঙ্গে নিছক সায় দেওয়া।"
          },
          {
            "en": "The Muyassar fills in the same scene in simpler words. They speak, it says, confessing their mistake, while they dispute in the Fire with the ones who misled them, and they admit they had been in plain error with no concealment in it. That phrase, no concealment, lands hard. They are not confessing something subtle that a reasonable person might have missed. They are confessing to something that had no cover, nothing to hide it, obvious in broad daylight, and still they walked past it every day of their lives.",
            "bn": "মুয়াসসার সহজ কথায় একই দৃশ্যটা পূর্ণ করে। তারা কথা বলে, এতে বলা হয়, নিজেদের ভুল স্বীকার করতে করতে, যখন তারা আগুনের ভেতরে ওদের সঙ্গে ঝগড়ায় লিপ্ত যারা তাদের বিপথে নিয়েছিল; আর তারা মেনে নেয় যে তারা এমন স্পষ্ট ভুলে ছিল, যার ভেতরে কোনো লুকোছাপা ছিল না। এই কথাটা, কোনো লুকোছাপা নেই, বুকে এসে বাজে। তারা এমন কোনো সূক্ষ্ম জিনিসের স্বীকারোক্তি দিচ্ছে না, যা একজন বিবেকবান মানুষের চোখ এড়িয়ে যেতে পারত। তারা স্বীকার করছে এমন কিছু, যার কোনো আড়াল ছিল না, কিছুই তা ঢেকে রাখছিল না, দিনের আলোর মতো খোলা; তবু তারা জীবনের প্রতিটি দিন এর পাশ কাটিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Error, Not a People",
          "bn": "ভুল, কোনো জাতি নয়"
        },
        "p": [
          {
            "en": "It matters precisely what is being confessed here, because it is easy to misread. The next verse, 26:98, names the error for them: they had equated these others with the Lord of the worlds. The Muyassar underlines it, saying they confess they set up rivals to the one Lord who alone deserves worship. The error, then, is a thing done, an act of equating the created with the Creator. It is not a people, not a race, not a tribe. The verse condemns shirk, and shirk is a choice, which is why a human being can turn from it while he lives.",
            "bn": "ঠিক কীসের স্বীকারোক্তি এখানে দেওয়া হচ্ছে, তা খেয়াল করা জরুরি, কারণ এটা ভুল পড়া সহজ। পরের আয়াত, ২৬:৯৮, ভুলটার নাম ধরিয়ে দেয়: তারা এই অন্যদের সর্বজগতের রবের সমকক্ষ দাঁড় করিয়েছিল। মুয়াসসার তা জোর দিয়ে বলে, তারা স্বীকার করে যে তারা সেই একমাত্র রবের সঙ্গে শরিক দাঁড় করিয়েছিল, ইবাদতের একমাত্র হকদার যিনি। তাহলে ভুলটা হলো একটা কাজ, সৃষ্টিকে স্রষ্টার সমান বানানোর কাজ। এ কোনো জাতি নয়, কোনো বর্ণ নয়, কোনো গোত্রও নয়। আয়াত নিন্দা করে শিরকের, আর শিরক একটা বাছাই; এ কারণেই মানুষ বেঁচে থাকতে থাকতে তা থেকে ফিরে আসতে পারে।"
          },
          {
            "en": "So this needs saying plainly, in case anyone turns the verse the wrong way. It describes what the text describes: a group the Qur'an places among the condemned, confessing their own shirk in the Fire. It licenses nothing against any living person or community, no contempt for the people of any faith, no claim that this or that living group is destined for that scene. The judgment here belongs to Allah and falls on an act, not on a lineage. For the reader there is only one safe use of it, to check his own worship, never to measure someone else's.",
            "bn": "তাই কথাটা সোজাসুজি বলা দরকার, যদি কেউ আয়াতটাকে উল্টো দিকে ঘুরিয়ে নেয়। আয়াত যা বর্ণনা করে, তা-ই বলে: এমন একটি দল, যাদের কুরআন দণ্ডিতদের মধ্যে রাখে, আগুনে দাঁড়িয়ে নিজেদের শিরকের স্বীকারোক্তি দিচ্ছে। এটা বেঁচে থাকা কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না, কোনো ধর্মের মানুষকে হেয় করার নয়, এই বা ওই জীবিত দল সেই দৃশ্যের জন্য নির্ধারিত বলে দাবি করারও নয়। এখানকার বিচার আল্লাহর হাতে, আর তা পড়ে একটা কাজের ওপর, কোনো বংশের ওপর নয়। পাঠকের জন্য এর একটিমাত্র নিরাপদ ব্যবহার আছে, নিজের ইবাদত যাচাই করা, কখনোই অন্য কারও মাপজোখ করা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ransom Offered Too Late",
          "bn": "বড় দেরিতে মুক্তিপণ"
        },
        "p": [
          {
            "en": "A sound hadith carries the same lesson into a single scene. In Sahih al-Bukhari, Anas ibn Malik reports that the Prophet (ﷺ) used to say that a disbeliever will be brought on the Day of Resurrection and asked, suppose you had as much gold as would fill the earth, would you offer it to ransom yourself? He will reply, yes. Then it will be said to him, you were asked for something easier than that, to join none in worship with Allah, but you refused. The hadith is in al-Bukhari's collection, which admits only what met his conditions for a sound chain.",
            "bn": "একটি সহীহ হাদীস এই একই শিক্ষাকে এক দৃশ্যে এনে দাঁড় করায়। সহীহ বুখারীতে আনাস ইবন মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ বলতেন, কিয়ামতের দিন এক কাফিরকে আনা হবে আর জিজ্ঞেস করা হবে, ধরো তোমার কাছে যদি গোটা পৃথিবীভরা সোনা থাকত, তবে কি তা দিয়ে নিজেকে মুক্ত করতে চাইতে? সে বলবে, হ্যাঁ। তখন তাকে বলা হবে, তোমার কাছে তো এর চেয়ে সহজ জিনিস চাওয়া হয়েছিল, আল্লাহর সঙ্গে কাউকে শরিক না করা, অথচ তুমি অস্বীকার করেছিলে। হাদীসটি বুখারীর সংকলনে, যেখানে কেবল তা-ই স্থান পায় যা তাঁর সহীহ সনদের শর্ত পূরণ করেছে।"
          },
          {
            "en": "Set the hadith beside the verse and they say the same thing from different ends. The man in the hadith is finally willing to give everything, a whole earth of gold, at the exact moment he has nothing and can give nothing. The deviators in the verse finally see the truth with perfect clarity at the exact moment that seeing it is worthless. In both, the right response arrives, and it arrives on the far side of the deadline. What was asked for was never the impossible. It was the easy thing they would not do while it was still theirs to do.",
            "bn": "হাদীসটি আয়াতের পাশে রাখুন, দুই দিক থেকে তারা একই কথা বলে। হাদীসের লোকটি শেষ পর্যন্ত সব দিয়ে দিতে রাজি হয়, গোটা পৃথিবীভরা সোনা, ঠিক সেই মুহূর্তে যখন তার কাছে কিছুই নেই, দেওয়ার মতো কিছুই নেই। আর আয়াতের পথভ্রষ্টরা শেষমেশ সত্যটা একদম স্পষ্ট দেখে ঠিক সেই মুহূর্তে, যখন তা দেখার কোনো দাম নেই। দুই জায়গাতেই সঠিক জবাবটা আসে, কিন্তু আসে সময়সীমার ওপারে পৌঁছে। যা চাওয়া হয়েছিল তা কখনো অসম্ভব ছিল না। ছিল সেই সহজ কাজটাই, যা তারা করতে চায়নি যতক্ষণ তা করার সুযোগ তাদের হাতে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Confess While It Counts",
          "bn": "স্বীকার করুন যতক্ষণ কাজে লাগে"
        },
        "p": [
          {
            "en": "The whole point of reading this verse is to refuse to be in it. The deviators equated other things with their Lord in their devotion, their fear, their hope. The quiet question it leaves is whether anything in my own life draws the trust, the dread, or the longing that belongs to God alone. A career I fear losing more than I fear Him. A person whose approval I chase the way worship should be chased. The verse does not ask me to suspect everyone else. It asks me to examine myself, honestly, today.",
            "bn": "এই আয়াত পড়ার গোটা উদ্দেশ্যই হলো এর ভেতরে না থাকতে চাওয়া। পথভ্রষ্টরা তাদের ভক্তি, ভয় আর আশায় অন্য জিনিসকে রবের সমান বানিয়েছিল। আয়াত চুপচাপ যে প্রশ্নটা রেখে যায় তা হলো, আমার নিজের জীবনে এমন কিছু কি সেই ভরসা, ভয় বা আকুতি টেনে নিচ্ছে, যা কেবল আল্লাহরই প্রাপ্য? যে চাকরি হারানোর ভয় তাঁকে হারানোর ভয়ের চেয়ে বড়। যে মানুষের সন্তুষ্টির পেছনে আমি এমনভাবে ছুটি, যেভাবে ছোটা উচিত ইবাদতের পেছনে। আয়াত আমাকে বলে না অন্য সবাইকে সন্দেহ করতে। আয়াত বলে আজই, সৎভাবে, নিজেকে যাচাই করতে।"
          },
          {
            "en": "So the mercy hidden in this terrible scene is its timing in the Qur'an. We are being shown the confession before we are the ones making it, while there is still a world to turn around in, still a door that opens the right way. Everything the deviators say is true, and we can say it now and be saved by it, or wait and say it then and be condemned by it. The words are free. Only the hour decides what they are worth. Say them while saying them still counts.",
            "bn": "তাই এই ভয়ংকর দৃশ্যের ভেতরে লুকানো রহমতটা হলো কুরআনে এর সময়জ্ঞান। স্বীকারোক্তিটা আমাদের দেখানো হচ্ছে তা করার আগেই, যখন ফিরে দাঁড়ানোর মতো একটা দুনিয়া এখনো আছে, এখনো আছে এমন একটা দরজা যা সঠিক দিকে খোলে। পথভ্রষ্টরা যা যা বলছে সবই সত্য; আমরা এখন তা বলে এর দ্বারা বাঁচতে পারি, কিংবা অপেক্ষা করে তখন বলে এর দ্বারা দণ্ডিত হতে পারি। কথাগুলোর কোনো দাম লাগে না। শুধু সময়টাই ঠিক করে দেয় সেগুলোর মূল্য কত। কথাটা বলুন, যতক্ষণ বলাটা এখনো কাজে লাগে।"
          }
        ]
      }
    ]
  },
  "26:106": {
    "sections": [
      {
        "h": {
          "en": "The Call Before the Charge",
          "bn": "অভিযোগের আগে ডাক"
        },
        "p": [
          {
            "en": "The verse just before this one is a verdict: the people of Noah denied the messengers (26:105). Then 26:106 does something quieter. It rewinds. Idh qāla lahum, when he said to them — the word idh pulls the scene back to its first moment, before the denial had hardened, to the sentence Noah actually opened with. Ibn Kathir notes that Noah was the first messenger Allah sent to the people of earth once they had begun to worship idols, sent to forbid that and to warn them where it leads. The charge in 26:105 has a history, and this verse is its beginning.",
            "bn": "এ আয়াতের ঠিক আগের আয়াতটি একটা রায়: নূহের কওম রাসুলদের অস্বীকার করেছিল (২৬:১০৫)। এরপর ২৬:১০৬ আরও শান্ত একটা কাজ করে। এটি পেছনে ফিরে যায়। ইজ কালা লাহুম, যখন তিনি তাদের বলেছিলেন—‘ইজ’ শব্দটি দৃশ্যটাকে টেনে নিয়ে যায় তার প্রথম মুহূর্তে, অস্বীকার জমাট বাঁধার আগে, নূহ (আঃ) আসলে যে কথাটি দিয়ে শুরু করেছিলেন সেখানে। ইবন কাসীর জানান, মাটির মানুষ যখন মূর্তিপূজা শুরু করল, তখন আল্লাহ প্রথম যে রাসুল পাঠান তিনি নূহ (আঃ), পাঠান তা নিষেধ করতে আর পরিণতির ব্যাপারে সতর্ক করতে। ২৬:১০৫-এর অভিযোগের একটা ইতিহাস আছে, আর এ আয়াত সেই ইতিহাসের শুরু।"
          },
          {
            "en": "What that beginning was is startling in its restraint. There is no catalogue of their crimes, no roll of threatened punishments, no proof demanded on the spot. The first thing out of his mouth is a question: alā tattaqūn, will you not fear Allah? A prophet who knows exactly where the story ends still chooses to start with an invitation rather than an indictment. The verse teaches before it argues anything: the door into Noah's whole message is not fear of him, but fear of God, and he holds that door open with a question.",
            "bn": "সেই শুরুটা কেমন, তা তার সংযমেই অবাক করে। অপরাধের কোনো ফিরিস্তি নেই, হুমকি দেওয়া শাস্তির কোনো তালিকা নেই, সঙ্গে সঙ্গে প্রমাণ হাজির করার দাবিও নেই। মুখ থেকে প্রথম যা বের হয় তা একটা প্রশ্ন: আলা তাত্তাকূন, তোমরা কি আল্লাহকে ভয় করবে না? যে নবী জানেন গল্পটা ঠিক কোথায় গিয়ে ঠেকবে, তিনিও অভিযোগ দিয়ে নয়, আহ্বান দিয়েই শুরু করতে বেছে নেন। আয়াতটি কিছু নিয়ে তর্ক করার আগেই শেখায়: নূহ (আঃ)-এর গোটা বার্তার দরজা তাঁকে ভয় করা নয়, আল্লাহকে ভয় করা, আর সেই দরজা তিনি খুলে ধরেন একটা প্রশ্ন দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brother by Blood Alone",
          "bn": "শুধু রক্তের ভাই"
        },
        "p": [
          {
            "en": "Before the question comes a single word the commentators refuse to pass over: akhūhum, their brother. Al-Baghawi states it plainly — this is brotherhood in lineage, not in religion. Al-Qurtubi says the same and spells it out: akhūhum means ibn abīhim, one descended from their own father; it is the brotherhood of blood, not the brotherhood of faith. These are the very people who deny him. No shared creed binds Noah to them. What binds him to them is only that he is one of their own.",
            "bn": "প্রশ্নের আগে আসে একটি শব্দ, যা তাফসীরকারেরা পাশ কাটিয়ে যেতে চান না: আখূহুম, তাদের ভাই। বাগাভী সোজা কথায় বলেন, এ ভ্রাতৃত্ব বংশের, দ্বীনের নয়। কুরতুবীও একই কথা বলেন এবং খুলে দেন: আখূহুম মানে ইবনু আবীহিম, তাদেরই পিতৃপুরুষের বংশধর একজন; এ রক্তের ভাইবন্ধন, ঈমানের ভাইবন্ধন নয়। এরাই তো সেই লোক যারা তাঁকে অস্বীকার করে। কোনো অভিন্ন বিশ্বাস নূহ (আঃ)-কে তাদের সঙ্গে বাঁধে না। যা বাঁধে তা কেবল এটুকুই, তিনি তাদেরই একজন।"
          },
          {
            "en": "Al-Qurtubi records more than one way to hear the word. Beyond kinship, he mentions the brotherhood of a shared kind, akhuwwat al-mujānasa, and the Arabs' way of speaking when they say yā akhā banī Tamīm, O brother of Banū Tamīm, meaning simply O one of them. Az-Zamakhshari, he adds, cites a line of the Hamāsa poetry for the usage. The weight of all the readings falls the same way: Noah is addressed to them as one who belongs among them, not as a stranger lowered in from somewhere outside.",
            "bn": "কুরতুবী শব্দটি শোনার একাধিক পথ লিপিবদ্ধ করেন। বংশ ছাড়াও তিনি একই জাতের ভাইবন্ধন, আখুওয়াতুল মুজানাসা-র কথা তোলেন, আর আরবদের সেই বলার ভঙ্গির কথা বলেন যখন তারা বলে ‘ইয়া আখা বানী তামীম’, হে বানূ তামীমের ভাই, যার অর্থ কেবল ‘হে তাদের একজন’। তিনি জুড়ে দেন, যামাখশারী এ ব্যবহারের সমর্থনে হামাসা কাব্যের একটি পঙ্‌ক্তি উদ্ধৃত করেন। পাঠগুলোর ভার একই দিকে ঝোঁকে: নূহ (আঃ)-কে তাদের কাছে পাঠানো হয়েছে তাদেরই ভেতরকার একজন হিসেবে, বাইরে থেকে নামিয়ে দেওয়া কোনো অচেনা লোক হিসেবে নয়।"
          },
          {
            "en": "This precision matters because the same word returns for Hūd, for Ṣāliḥ, for Shuʿayb, each called their brother as the chapter moves from people to people. Reading it as kinship and not as faith keeps the verse honest. A deniers' prophet is not one of the faithful dressed up as family; he is family who carries a message the family rejects. The tie he appeals to is real, and it is the tie of blood — which is exactly what makes their refusal of him weigh so heavily upon them.",
            "bn": "এ সূক্ষ্মতা জরুরি, কারণ একই শব্দ ফিরে আসে হুদের বেলায়, সালিহের বেলায়, শুআইবের বেলায়; সুরা যত এক কওম থেকে আরেক কওমে এগোয়, প্রত্যেককে বলা হয় তাদের ভাই। একে বংশের ভাই হিসেবে পড়া, ঈমানের ভাই নয়, আয়াতটিকে সৎ রাখে। অস্বীকারকারীদের নবী ছদ্মবেশে থাকা কোনো মুমিন স্বজন নন; তিনি সেই স্বজন, যিনি এমন এক বার্তা বয়ে আনেন যা স্বজনেরাই প্রত্যাখ্যান করে। তিনি যে বন্ধনের দোহাই দেন তা সত্যিকারের, আর তা রক্তের বন্ধন। ঠিক এ কারণেই তাঁকে অস্বীকার করা তাদের ওপর এত ভারী হয়ে বসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent From Among Them",
          "bn": "তাদের ভেতর থেকেই পাঠানো"
        },
        "p": [
          {
            "en": "Why should the messenger be a brother at all? As-Sa'di answers from the wisdom of it: Allah raises up His messengers from the lineage of the very people He sends them to, so that they will not recoil from submitting to one of their own, and because they already know his reality and have no need to go investigating who he is. A stranger can be dismissed as unknown. A brother they have watched grow cannot be waved away as a mystery; his honesty is something they have already weighed for years.",
            "bn": "রাসুল কেন আদৌ একজন ভাই হবেন? সাদী এর হিকমত থেকে জবাব দেন: আল্লাহ যাদের কাছে পাঠান, তাদেরই বংশ থেকে তিনি রাসুল দাঁড় করান, যাতে তারা নিজেদের একজনের অনুসরণে মুখ না ফিরিয়ে নেয়, আর যেহেতু তারা তাঁর আসল পরিচয় আগে থেকেই জানে, তাঁকে নিয়ে খোঁজখবর করার দরকার পড়ে না। অচেনা কাউকে ‘জানি না’ বলে উড়িয়ে দেওয়া যায়। কিন্তু যে ভাইকে তারা বড় হতে দেখেছে, তাঁকে রহস্য বলে সরিয়ে রাখা যায় না; তাঁর সততা তো তারা বছরের পর বছর ধরে যাচাই করেই রেখেছে।"
          },
          {
            "en": "Al-Qurtubi sets the same point on a wider verse. He cites Allah's word that We sent no messenger except in the tongue of his people (14:4), and refers the reader back to where he treated it in Sūrat al-A'rāf. The principle is one: revelation arrives in a language the hearers own and through a face they recognise. Mercy is built into the delivery itself. Before the people of Noah weigh a single word of the message, Allah has already removed every excuse that the messenger was foreign, unintelligible, or impossible to vet.",
            "bn": "কুরতুবী একই কথা আরও ব্যাপক এক আয়াতের ওপর রাখেন। তিনি আল্লাহর বাণী উদ্ধৃত করেন যে, আমি প্রত্যেক রাসুলকে তার কওমের ভাষাতেই পাঠিয়েছি (১৪:৪), আর পাঠককে সুরা আল-আ'রাফে এ নিয়ে তাঁর আলোচনার দিকে ফিরিয়ে দেন। নীতিটা এক: ওহি আসে এমন ভাষায় যা শ্রোতার নিজের, আর এমন এক চেহারার মাধ্যমে যাকে তারা চেনে। পৌঁছে দেওয়ার মধ্যেই রহমত গাঁথা। নূহ (আঃ)-এর কওম বার্তার একটি কথাও ওজন করার আগেই আল্লাহ এ অজুহাত মুছে দিয়েছেন যে রাসুল বিদেশি, দুর্বোধ্য বা যাচাই-অযোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Softest Opening",
          "bn": "সবচেয়ে কোমল সূচনা"
        },
        "p": [
          {
            "en": "Notice how he speaks to them. As-Sa'di draws attention to the manner itself: Noah addressed them with the gentlest of address, bi-alṭaf khiṭāb, which as-Sa'di says is the way of the messengers, the blessings and peace of Allah upon them. The sentence is not alā tattaqūnī, will you not fear me, nor is it a command barked at them. It is a question laid before them about their relationship with their Lord, phrased so that it invites a conscience to answer rather than cornering an enemy to surrender.",
            "bn": "খেয়াল করুন তিনি কীভাবে তাদের সঙ্গে কথা বলেন। সাদী ভঙ্গিটার দিকেই দৃষ্টি টানেন: নূহ (আঃ) তাদের সম্বোধন করেন সবচেয়ে কোমল সম্বোধনে, বি-আলতাফ খিতাব, যা সাদীর ভাষায় রাসুলদেরই রীতি, তাঁদের ওপর আল্লাহর রহমত ও শান্তি। বাক্যটা ‘আলা তাত্তাকূনী’, তোমরা কি আমাকে ভয় করবে না, নয়; তাদের ওপর ছুড়ে দেওয়া কোনো হুকুমও নয়। এটা তাদের রবের সঙ্গে তাদের সম্পর্ক নিয়ে সামনে রাখা একটা প্রশ্ন, এমনভাবে বলা যা শত্রুকে কোণঠাসা না করে বরং বিবেককে জবাব দিতে ডাকে।"
          },
          {
            "en": "That gentleness is not softness about the truth; it is strategy in the service of the truth. A question opens a door that a verdict would slam shut. Will you not fear Allah leaves room for the hearer to answer from inside himself, to notice that he has in fact been careless of his Maker. Noah knows these people will mostly refuse, for the chapter has already told us most of them were not to be believers; yet he will not let their refusal change how he opens. The manner is part of the message.",
            "bn": "এ কোমলতা সত্য নিয়ে নরমি নয়; এ সত্যের খেদমতেই এক কৌশল। প্রশ্ন সেই দরজা খুলে দেয়, রায় যা ধড়াম করে বন্ধ করে। ‘তোমরা কি আল্লাহকে ভয় করবে না’ শ্রোতাকে নিজের ভেতর থেকে জবাব দেওয়ার জায়গা রাখে, খেয়াল করার সুযোগ দেয় যে সে আসলে নিজের স্রষ্টার ব্যাপারে উদাসীন ছিল। নূহ (আঃ) জানেন এরা বেশির ভাগই ফিরিয়ে দেবে, কারণ সুরা তো আগেই বলেছে তাদের অধিকাংশ ঈমান আনার ছিল না; তবু তাদের প্রত্যাখ্যান তাঁর শুরু করার ধরন বদলাতে দেন না। ভঙ্গিটাও বার্তারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear of What, Exactly",
          "bn": "ঠিক কীসের ভয়"
        },
        "p": [
          {
            "en": "Taqwā is an easy word to leave vague, so the commentators pin down what the fear is fear of. At-Tabari reads alā tattaqūn as: will you not be on your guard against His punishment for your disbelief in Him and your denial of His messengers? The fear has an object and a cause. It is not a mood; it is the sane response of someone who has grasped that there is a Lord who is wronged by their worship of others, and who will one day hold them to account for it.",
            "bn": "তাকওয়া শব্দটাকে অস্পষ্ট রেখে দেওয়া সহজ, তাই তাফসীরকারেরা ভয়টা ঠিক কীসের ভয় তা পেরেকের মতো গেঁথে দেন। তাবারী ‘আলা তাত্তাকূন’ পড়েন এভাবে: তোমরা কি তাঁর শাস্তির ব্যাপারে সাবধান হবে না, যে শাস্তি আসবে তাঁকে অস্বীকার করা আর তাঁর রাসুলদের মিথ্যা বলার কারণে? ভয়ের একটা লক্ষ্য আছে, একটা কারণ আছে। এটা কোনো মেজাজ নয়; এটা সেই মানুষের সুস্থ সাড়া, যে বুঝে ফেলেছে একজন রব আছেন, যাঁকে অন্যের ইবাদত করে অন্যায় করা হচ্ছে, আর যিনি একদিন এর হিসাব নেবেন।"
          },
          {
            "en": "Ibn Kathir reads it the same way and makes the target sharper still: will you not fear Allah in your worship of something other than Him? Al-Muyassar renders it as will you not fear Allah by abandoning the worship of all besides Him. As-Sa'di closes the circle: the taqwā being called for is that they leave what they persist in of idol-worship and make their worship sincerely for Allah alone. The fear and the tawḥīd turn out to be one single act, seen from two different sides.",
            "bn": "ইবন কাসীরও একইভাবে পড়েন এবং লক্ষ্যটা আরও তীক্ষ্ণ করেন: তোমরা কি আল্লাহ ছাড়া অন্যের ইবাদত করার ব্যাপারে তাঁকে ভয় করবে না? মুয়াসসার এটিকে এভাবে আনে: তোমরা কি তাঁকে বাদ দিয়ে বাকি সবার ইবাদত ছেড়ে দিয়ে আল্লাহকে ভয় করবে না? সাদী বৃত্তটা সম্পূর্ণ করেন: যে তাকওয়ার ডাক দেওয়া হচ্ছে তা হলো, তারা মূর্তিপূজার যে অবস্থায় আছে তা ছেড়ে দিক আর ইবাদত খাঁটি করে কেবল আল্লাহর জন্য করুক। ভয় আর তাওহিদ আসলে একই কাজের দুই পিঠ।"
          },
          {
            "en": "So the gateway of the whole message is taqwā, and taqwā here means a fear that moves a person. It is not the dread that freezes him; it is the awareness of God that pulls him off the path of idols and onto the worship of Allah alone. Every later part of Noah's call rests on this first stone. If a person will not take God seriously enough to fear wronging Him, nothing further in the message has anywhere left to stand. That is precisely why it is placed as the opening word.",
            "bn": "তাই গোটা বার্তার দরজা তাকওয়া, আর এখানে তাকওয়া মানে এমন ভয় যা মানুষকে নড়ায়। এটা এমন আতঙ্ক নয় যা তাকে জমিয়ে দেয়; এটা আল্লাহ-সচেতনতা, যা তাকে মূর্তির পথ থেকে টেনে এনে এক আল্লাহর ইবাদতে বসায়। নূহ (আঃ)-এর ডাকের পরের প্রতিটি অংশ এ প্রথম পাথরটির ওপর দাঁড়ানো। কেউ যদি আল্লাহকে এতটুকু গুরুত্ব না দেয় যে তাঁর সঙ্গে অন্যায় করতে ভয় পাবে, তবে বার্তার বাকি কিছুরই আর দাঁড়ানোর জায়গা থাকে না। ঠিক এ কারণেই এটিকে শুরুর কথা হিসেবে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shared First Word",
          "bn": "সবার প্রথম সেই কথা"
        },
        "p": [
          {
            "en": "Read the chapter straight through and this exact question keeps returning. It is Noah's first word here, and a few scenes on it will be Hūd's first word to ʿĀd, and Ṣāliḥ's to Thamūd, and Lot's, and Shuʿayb's — alā tattaqūn, over and over, as if each messenger were handed the same opening line. The surah is showing something by the sheer repetition: the core summons of every prophet is one summons. The faces change, the peoples change, the place changes, and the very first demand does not.",
            "bn": "সুরাটা একটানা পড়ুন, দেখবেন ঠিক এ প্রশ্নটাই বারবার ফিরে আসে। এখানে এটা নূহ (আঃ)-এর প্রথম কথা, কয়েক দৃশ্য পরে এটাই আদ-এর কাছে হুদের প্রথম কথা, সামুদের কাছে সালিহের, এরপর লুতের, শুআইবের—আলা তাত্তাকূন, বারবার, যেন প্রত্যেক রাসুলের হাতে একই সূচনাবাক্য ধরিয়ে দেওয়া হয়েছে। এ পুনরাবৃত্তি দিয়ে সুরা কিছু দেখায়: প্রত্যেক নবীর মূল আহ্বান একই আহ্বান। চেহারা বদলায়, কওম বদলায়, জায়গা বদলায়, কিন্তু একেবারে প্রথম দাবিটা বদলায় না।"
          },
          {
            "en": "That is also why the verse before could say the people of Noah denied the messengers, plural, when only Noah had come to them (26:105). Al-Muyassar explains that denying one messenger is a denial of them all, because every messenger calls for the affirmation of every other. Ibn Kathir notes the same: their rejection of Noah was in truth a rejection of the whole line of messengers. The single opening call and the single denial match. To refuse the one question is to refuse what all of them came to ask.",
            "bn": "এজন্যই আগের আয়াত বলতে পেরেছে নূহের কওম রাসুলদের (বহুবচন) অস্বীকার করেছিল (২৬:১০৫), যদিও তাদের কাছে কেবল নূহ (আঃ) এসেছিলেন। মুয়াসসার ব্যাখ্যা করে, এক রাসুলকে অস্বীকার করা সব রাসুলকেই অস্বীকার করা, কারণ প্রত্যেক রাসুল অন্য সব রাসুলকে সত্য মানার ডাক দেন। ইবন কাসীরও একই কথা বলেন: নূহ (আঃ)-কে প্রত্যাখ্যান আসলে গোটা রাসুল-পরম্পরাকেই প্রত্যাখ্যান। একটিমাত্র সূচনা-আহ্বান আর একটিমাত্র অস্বীকার মিলে যায়। এক প্রশ্নকে ফিরিয়ে দেওয়া মানে তাঁরা সবাই যা জিজ্ঞেস করতে এসেছিলেন তা-ই ফিরিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration on Taqwā",
          "bn": "তাকওয়া নিয়ে এক হাদিস"
        },
        "p": [
          {
            "en": "None of the commentators consulted for this verse attaches a hadith to it, so what follows is brought for its theme and not as a comment on the words themselves. At-Tirmidhi records that Abū Hurayra (RA) said the Messenger of Allah ﷺ was asked about that which most admits people into Paradise, and he answered, taqwā of Allah and good character; and he was asked about that which most admits people into the Fire, and he said, the mouth and the private parts. At-Tirmidhi graded the report ṣaḥīḥ gharīb — sound, though singular through its chain.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীরকার এর সঙ্গে কোনো হাদিস জোড়েননি, তাই যা আসছে তা আনা হলো এর বিষয়ের খাতিরে, শব্দগুলোর ব্যাখ্যা হিসেবে নয়। তিরমিযি লিপিবদ্ধ করেন, আবু হুরায়রা (রাঃ) বলেন, রাসুলুল্লাহ ﷺ-কে জিজ্ঞেস করা হলো কোন জিনিস মানুষকে সবচেয়ে বেশি জান্নাতে ঢোকায়, তিনি বললেন, আল্লাহর তাকওয়া আর সুন্দর চরিত্র; আর জিজ্ঞেস করা হলো কোন জিনিস সবচেয়ে বেশি জাহান্নামে ঢোকায়, তিনি বললেন, মুখ আর লজ্জাস্থান। তিরমিযি বর্ণনাটিকে ‘সহিহ গরিব’ বলেছেন, অর্থাৎ সহিহ, যদিও এর সনদে একক।"
          },
          {
            "en": "The narration lights up the verse from a distance. Noah opens with taqwā because taqwā is, by the Prophet's ﷺ own reckoning, the thing that most carries people home. And the hadith pairs it with good character, which is just what we have watched Noah practise: the fear of God and the gentle address are not two separate projects but one. A man who truly fears his Lord does not grow harsher with people; he becomes, as the first prophet did, at once God-fearing and good to those he is sent to.",
            "bn": "বর্ণনাটি দূর থেকে আয়াতটিকে আলোকিত করে। নূহ (আঃ) তাকওয়া দিয়ে শুরু করেন, কারণ নবীর ﷺ নিজের হিসাবেই তাকওয়াই মানুষকে সবচেয়ে বেশি ঘরে পৌঁছায়। আর হাদিসটি একে জোড়ে সুন্দর চরিত্রের সঙ্গে, যা আমরা নূহ (আঃ)-কে করতেই দেখলাম: আল্লাহর ভয় আর কোমল সম্বোধন দুটি আলাদা কাজ নয়, একটাই কাজ। যে মানুষ সত্যিই তার রবকে ভয় করে, সে মানুষের সঙ্গে আরও কঠোর হয়ে যায় না; সে বরং প্রথম নবীর মতোই হয়, একই সঙ্গে আল্লাহভীরু আর যাদের কাছে পাঠানো তাদের প্রতি সদয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Addressed to the Living",
          "bn": "জীবিতদের উদ্দেশে"
        },
        "p": [
          {
            "en": "A plain word is owed here. The people of Noah are, in the end, a condemned people; the Qur'an records their denial and, elsewhere, their drowning. This verse and this article describe what the text itself describes, and they license nothing against any living person or community. The lesson is never a verdict to be handed down upon others. Noah's people are a mirror held up to the reader, not a weapon placed in his hand, and the question in the verse was always meant to travel inward first.",
            "bn": "এখানে একটা সোজা কথা বলা দরকার। নূহ (আঃ)-এর কওম শেষ পর্যন্ত এক অভিশপ্ত জাতি; কুরআন তাদের অস্বীকার লিপিবদ্ধ করে, আর অন্যত্র তাদের ডুবে মরার কথাও। এ আয়াত আর এ লেখা যা বর্ণনা করে, তা কেবল কুরআন নিজে যা বর্ণনা করেছে তাই, আর জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটা কিছুরই অনুমতি দেয় না। শিক্ষাটা কখনোই অন্যের ওপর ঝুলিয়ে দেওয়ার কোনো রায় নয়। নূহ (আঃ)-এর কওম পাঠকের সামনে ধরা এক আয়না, তার হাতে তুলে দেওয়া কোনো অস্ত্র নয়, আর আয়াতের প্রশ্নটা সবসময় আগে ভেতরের দিকেই যাত্রা করার কথা ছিল।"
          },
          {
            "en": "Travel inward it does. Alā tattaqūn is not sealed inside an ancient quarrel. It is the first thing a brother said to his people, and it is the first thing this page is quietly asking of whoever reads it. The force of it lies in the fact that it comes before the arguments. It does not wait until you are convinced of every proof; it asks whether you will take God seriously now, today, with what you already know. A question of that kind does not grow old.",
            "bn": "ভেতরে সে যাত্রা করেও। ‘আলা তাত্তাকূন’ কোনো প্রাচীন ঝগড়ার ভেতরে সিল করা নেই। এটা এক ভাইয়ের নিজ কওমকে বলা প্রথম কথা, আর এ পৃষ্ঠা যে-ই পড়ুক তাকে চুপিসারে এটাই জিজ্ঞেস করছে। এর জোরটা এখানেই যে, এটা তর্কের আগে আসে। আপনি প্রতিটি প্রমাণে নিশ্চিত হওয়া পর্যন্ত এটা অপেক্ষা করে না; এটা জিজ্ঞেস করে, আপনি কি যা আগেই জানেন তা নিয়ে এখন, আজই, আল্লাহকে গুরুত্ব দিয়ে নেবেন। এ ধরনের প্রশ্ন পুরোনো হয় না।"
          },
          {
            "en": "And it asks something about how we carry God to one another. Noah was one of his people, spoke their tongue, and opened with a question and not a sentence of judgement. When a reminder reaches us from someone close — too familiar to seem impressive, too much like us to seem a teacher — the temptation is to hear only the interruption and to miss the call inside it. The verse trains the ear the other way: to hear the brother, and behind the brother, the One he is pointing to.",
            "bn": "আর এটা জিজ্ঞেস করে, আমরা একে অন্যের কাছে আল্লাহকে কীভাবে বয়ে নিয়ে যাই সে সম্পর্কেও। নূহ (আঃ) ছিলেন তাঁর কওমের একজন, তাদের ভাষায় কথা বলতেন, শুরু করেছিলেন রায় দিয়ে নয়, প্রশ্ন দিয়ে। যখন কাছের কারও কাছ থেকে কোনো নসিহত আসে, যে এত চেনা যে তাকে মহান মনে হয় না, এত আমাদের মতো যে তাকে শিক্ষক মনে হয় না, তখন লোভ হয় কেবল বাধাটুকু শুনে ভেতরের ডাকটা এড়িয়ে যাওয়ার। আয়াত কানকে উল্টো দিকে অভ্যস্ত করে: ভাইকে শোনো, আর ভাইয়ের পেছনে, তিনি যাঁর দিকে ইশারা করছেন সেই একজনকে।"
          }
        ]
      }
    ]
  },
  "26:109": {
    "sections": [
      {
        "h": {
          "en": "A Messenger Asks Nothing",
          "bn": "নবী চান না কোনো মজুরি"
        },
        "p": [
          {
            "en": "The people of Nūḥ are the first denial the surah lines up (26:105), and Ibn Kathir notes that Nūḥ (AS) was the first messenger Allah sent to the people of the earth after they had begun to worship idols. He was raised to forbid exactly that. Into a crowd bent on what their fathers had carved, he lays down a short, startling condition: I ask you for no payment. Wa-mā asʾalukum ʿalayhi min ajr. The call will cost him everything and cost them nothing.",
            "bn": "সূরা যে প্রত্যাখ্যানগুলো সাজিয়ে আনে, নূহের জাতি তার প্রথমটি (২৬:১০৫)। ইবন কাসীর বলেন, মানুষ যখন মূর্তিপূজা শুরু করল, তার পরে পৃথিবীবাসীর কাছে আল্লাহ যে রসুল পাঠান, নূহ (আঃ) তাঁদের প্রথমজন। তাঁকে পাঠানোই হয়েছিল ঠিক ওই কাজ থেকে ফেরাতে। বাপদাদার গড়া মূর্তিতে বুঁদ হয়ে থাকা এক জনতার সামনে তিনি রাখেন ছোট্ট অথচ চমকে দেওয়া এক শর্ত: এর বদলে আমি তোমাদের কাছে কোনো মজুরি চাই না। ওয়া-মা আসআলুকুম আলাইহি মিন আজর। এই দাওয়াত তাঁর কাছ থেকে নেবে সব, আর তাদের কাছ থেকে নেবে কিছুই নয়।"
          },
          {
            "en": "The sentence has two halves that lean on each other. First the denial: no wage, no fee, nothing owed. Then the reason: in ajriya illā ʿalā rabbi l-ʿālamīn, my reward rests with none but the Lord of the worlds. At-Tabari reads the second clause as a pointed exclusion. The recompense Nūḥ looks for is with Allah alone, he writes, and not from you, nor from any of Allah's creation. The payer is named, and the people are quietly ruled out of the account.",
            "bn": "বাক্যটির দুটি অংশ পরস্পরকে ধরে রাখে। প্রথমে অস্বীকার: কোনো মজুরি নয়, কোনো ফি নয়, কারও কাছে কোনো দেনা নয়। তারপর কারণ: ইন আজরিয়া ইল্লা আলা রাব্বিল আলামীন, আমার প্রতিদান বিশ্বজগতের প্রতিপালক ছাড়া আর কারও কাছে নেই। তাবারী দ্বিতীয় অংশটিকে পড়েন একটি সুনির্দিষ্ট বর্জন হিসেবে। নূহ যে বিনিময় খোঁজেন তা কেবল আল্লাহর কাছে, তিনি লেখেন, তোমাদের কাছে নয়, আল্লাহর কোনো সৃষ্টির কাছেও নয়। প্রতিদানদাতার নাম বলে দেওয়া হলো, আর হিসাব থেকে মানুষকে চুপচাপ বাদ দেওয়া হলো।"
          },
          {
            "en": "Hear the precise shape of the refusal. The ʿalayhi, the it for which he wants no wage, is the carrying of the message itself, as the Muyassar spells out: I ask no fee for conveying the message. Ajr is the ordinary word for a worker's pay, the wage a hired hand expects at day's end. Nūḥ uses the commercial word and then cancels it. He is working, and working hard, yet he has struck his own name off the payroll of everyone standing in front of him.",
            "bn": "অস্বীকারটার ঠিক গড়নটা শুনুন। যে 'এর' বিনিময়ে তিনি মজুরি চান না, সেই 'এর' মানে বার্তা পৌঁছে দেওয়াই, যেমন মুয়াসসার খুলে বলে: রিসালাত পৌঁছানোর জন্য আমি কোনো ফি চাই না। আজর শব্দটা শ্রমিকের মজুরির সাধারণ শব্দ, দিনশেষে ভাড়াটে হাত যে পারিশ্রমিক আশা করে। নূহ ওই বাণিজ্যিক শব্দটাই ব্যবহার করেন, তারপর তা কেটে দেন। তিনি কাজ করছেন, কঠিন কাজ করছেন, অথচ সামনে দাঁড়ানো সবার বেতন-খাতা থেকে নিজের নামটা কেটে ফেলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Clearing the Obstacle",
          "bn": "বাধাটা সরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di reads this line as Nūḥ clearing an obstacle out of the road. A caller can be truthful and still be resisted, because people suspect the bill that follows. So he names the obstacle and removes it: I ask you for no payment, that you would then be saddled with a heavy debt. As-Sa'di uses the phrase al-maghram al-thaqīl, the weighty loss, the thing a listener braces for. Nūḥ tells them there is no such bill. Faith here will not cost them a coin.",
            "bn": "সা'দী এই কথাটিকে পড়েন নূহের পথ থেকে একটা বাধা সরানো হিসেবে। ডাকওয়ালা সত্যবাদী হয়েও বাধা পেতে পারেন, কারণ মানুষ পেছনে লুকানো বিলটার ভয় করে। তাই তিনি বাধাটার নাম ধরে তা সরিয়ে দেন: আমি তোমাদের কাছে কোনো মজুরি চাই না, যে বোঝা পরে তোমাদের ঘাড়ে চাপবে। সা'দী ব্যবহার করেন আল-মাগরামুস সাকীল কথাটি, ভারী ক্ষতি, যার জন্য শ্রোতা আগেভাগেই গা শক্ত করে রাখে। নূহ তাদের জানান, এমন কোনো বিল নেই। এখানে ঈমান তাদের একটা পয়সাও খরচ করাবে না।"
          },
          {
            "en": "With the price removed, the hearer has one fewer place to hide. He cannot say the man is building a following to feed himself, or that belief is a tax dressed up as religion. Nūḥ strips the transaction out of the exchange entirely, so that nothing stands between the people and the claim except the claim itself. What is left on the table is the summons to fear Allah and obey (26:108), and no invoice lying underneath it. The argument now has to be met on its own ground.",
            "bn": "দাম সরে যাওয়ায় শ্রোতার লুকানোর একটি জায়গা কমে গেল। সে আর বলতে পারে না, লোকটা নিজের পেট চালাতে দলভারী করছে, কিংবা ঈমান আসলে ধর্মের মোড়কে মোড়া এক কর। নূহ গোটা লেনদেনটাকেই তুলে দেন, যাতে মানুষের আর দাবির মাঝখানে দাবিটা ছাড়া কিছুই না থাকে। টেবিলে পড়ে থাকে কেবল আল্লাহকে ভয় করা ও আনুগত্যের ডাক (২৬:১০৮), তার নিচে চাপা কোনো বিল নেই। যুক্তিটাকে এখন তার নিজের মাঠেই মোকাবিলা করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Eye on Your Purse",
          "bn": "তোমাদের টাকায় লোভ নেই"
        },
        "p": [
          {
            "en": "Al-Qurtubi puts it bluntly. Wa-mā asʾalukum ʿalayhi min ajr, he glosses, means I have no greed for your wealth. Lā ṭamaʿ lī fī mālikum. The word he reaches for is ṭamaʿ, the hungry eye, the appetite that measures a man by what can be got out of him. Nūḥ declares that eye shut. Then al-Qurtubi gives the other half just as plainly: my recompense is upon none but the Lord of the worlds. The wealth he refuses from them is wealth he expects from Elsewhere, in a currency they are not holding.",
            "bn": "কুরতুবী কথাটা একদম খোলাখুলি বলেন। ওয়া-মা আসআলুকুম আলাইহি মিন আজর, তিনি ব্যাখ্যা করেন, মানে তোমাদের টাকার প্রতি আমার কোনো লোভ নেই। লা তামাআ লী ফী মালিকুম। তিনি যে শব্দটি বেছে নেন তা হলো তামা, সেই ক্ষুধার্ত চোখ, যে মানুষকে মাপে তার থেকে কী হাতানো যায় দিয়ে। নূহ সেই চোখ বন্ধ বলে ঘোষণা করেন। তারপর কুরতুবী বাকি অর্ধেকটাও ঠিক তেমনি সোজা বলে দেন: আমার প্রতিদান বিশ্বজগতের প্রতিপালক ছাড়া আর কারও কাছে নয়। তাদের থেকে যে ধন তিনি ফিরিয়ে দিচ্ছেন, সেই ধন তিনি আশা করেন অন্য কোথাও থেকে, এমন মুদ্রায় যা তাদের হাতে নেই।"
          },
          {
            "en": "That charge, that a preacher is only fattening himself, is the oldest accusation thrown at anyone who calls people to change. It arrives before any argument and quietly does the work of an argument. By refusing the purse at the very outset, Nūḥ answers it before it can be raised. His hands are visibly empty, and an empty hand is hard to accuse of greed. The audience is left to deal with the message, not the messenger's motives, which is exactly where he wants them to stand.",
            "bn": "এই অভিযোগটা, যে প্রচারক আসলে নিজেই মোটাতাজা হচ্ছে, মানুষকে বদলের ডাক দেওয়া যে কারও বিরুদ্ধে ছোঁড়া সবচেয়ে পুরনো অভিযোগ। কোনো যুক্তি আসার আগেই এটা এসে যায়, আর চুপিসারে যুক্তির কাজটাই সেরে ফেলে। একদম শুরুতেই টাকা ফিরিয়ে দিয়ে নূহ এর জবাব দিয়ে রাখেন, অভিযোগটা ওঠার আগেই। তাঁর হাত দৃশ্যতই খালি, আর খালি হাতকে লোভের দায়ে ফেলা কঠিন। শ্রোতাকে তখন বুঝতে হয় কথাটার সঙ্গে, দূতের মতলবের সঙ্গে নয়, আর তিনি তাদের ঠিক সেখানেই দাঁড় করাতে চান।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Wage Is Kept",
          "bn": "মজুরি যেখানে জমা"
        },
        "p": [
          {
            "en": "If the wage is not with the people, where is it? The Muyassar fills in the title Nūḥ has chosen. My reward, it paraphrases, is only upon the Lord of the worlds, al-mutaṣarrif fī khalqihi, the One who holds full disposal over His creation. The choice of name is the whole argument. A payer who owns and governs everything can never run short, never default, never die owing. Nūḥ is not forgoing his wage; he is moving his account to the one bank that cannot fail.",
            "bn": "মজুরি যদি মানুষের কাছে না থাকে, তবে কোথায়? মুয়াসসার নূহের বেছে নেওয়া উপাধিটা পূরণ করে দেয়। আমার প্রতিদান, সে বলে, কেবল বিশ্বজগতের প্রতিপালকের কাছে, আল-মুতাসাররিফু ফী খালকিহি, যিনি নিজ সৃষ্টির উপর পূর্ণ কর্তৃত্বের মালিক। নামটা বেছে নেওয়াই পুরো যুক্তি। যে প্রতিদানদাতা সবকিছুর মালিক ও পরিচালক, তাঁর কখনো টান পড়ে না, তিনি কখনো খেলাপ করেন না, দেনা রেখে মারা যান না। নূহ তাঁর মজুরি ছেড়ে দিচ্ছেন না, বরং হিসাবটা সরিয়ে নিচ্ছেন এমন একটি ব্যাংকে, যা কখনো ফেল করে না।"
          },
          {
            "en": "Ibn Kathir reads the line the same way: I do not want any payment for the advice I give you, he has Nūḥ say; I will save my reward for it with Allah. Note the word save. The reward is not cancelled but deferred, kept safe where it cannot be spent or seized. For a man whose mission would stretch across long ages of refusal, that deferral is everything. He is paid on delivery to Allah, not on applause from the crowd, and so the crowd's silence can never leave him unpaid.",
            "bn": "ইবন কাসীরও লাইনটা একইভাবে পড়েন। নূহের জবানে তিনি বলান, আমি তোমাদের যে উপদেশ দিই তার জন্য কোনো প্রতিদান চাই না, আমি তার বিনিময় আল্লাহর কাছে জমা রাখব। 'জমা' শব্দটা খেয়াল করুন। প্রতিদান বাতিল হয় না, পিছিয়ে যায়, এমন নিরাপদ জায়গায় রাখা থাকে যা খরচও করা যায় না, কেড়েও নেওয়া যায় না। যে মানুষের দাওয়াত দীর্ঘ যুগের প্রত্যাখ্যান পেরিয়ে চলবে, তাঁর কাছে এই পিছিয়ে রাখাটাই সব। তাঁর মজুরি মেলে আল্লাহর কাছে পৌঁছে দেওয়ার সঙ্গে সঙ্গে, জনতার হাততালিতে নয়, তাই জনতার নীরবতা তাঁকে কখনো পাওনা থেকে বঞ্চিত করতে পারে না।"
          },
          {
            "en": "There is a quiet irony in the title too. These are people who pour their wealth and labour into idols that own nothing and pay nothing back. Nūḥ sets his hope on the Rabb al-ʿālamīn, the Lord who disposes of all creation, the only One with anything real to give. Their gods take and return emptiness; his Lord takes nothing and returns in full. The contrast is the whole argument in miniature: serve what can actually pay, not what can only ever collect.",
            "bn": "উপাধিটায় এক নীরব পরিহাসও আছে। এরা এমন মানুষ, যারা নিজেদের ধন আর শ্রম ঢালে এমন মূর্তিতে, যা কিছুরই মালিক নয় আর কিছুই ফেরত দেয় না। নূহ তাঁর আশা রাখেন রাব্বুল আলামীনের উপর, যে প্রতিপালক গোটা সৃষ্টির মালিক, একমাত্র যাঁর কাছে সত্যিকারের দেওয়ার মতো কিছু আছে। তাদের দেবতারা নেয় আর ফেরত দেয় শূন্যতা, তাঁর প্রতিপালক কিছুই নেন না, অথচ পুরোপুরি ফেরত দেন। এই বৈসাদৃশ্যই ছোট্ট আকারে পুরো যুক্তি: সেবা করো তাকে যে সত্যিই দিতে পারে, তাকে নয় যে কেবল নিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Hoped to Gain",
          "bn": "তিনি যা পেতে চেয়েছিলেন"
        },
        "p": [
          {
            "en": "Refusing the people's money is not the same as wanting nothing. As-Sa'di finishes the verse by letting Nūḥ say what he does hope for. From his Lord he hopes for nearness and an abundant reward, al-thawāb al-jazīl. The wage he turns down from men is small beside the wage he looks for from Allah. He is not an ascetic emptied of desire; he is a trader who has already seen the better price and will not sell cheap to the first buyer at the door.",
            "bn": "মানুষের টাকা ফিরিয়ে দেওয়া মানে এই নয় যে তিনি কিছুই চান না। সা'দী আয়াতটা শেষ করেন নূহের মুখে তাঁর আসল চাওয়াটা বসিয়ে। রবের কাছে তিনি চান নৈকট্য আর বিপুল প্রতিদান, আস-সাওয়াবুল জাযীল। মানুষের কাছ থেকে যে মজুরি তিনি ছাড়ছেন, আল্লাহর কাছে যে মজুরি তিনি খোঁজেন তার তুলনায় তা নগণ্য। তিনি কামনা-শূন্য কোনো বৈরাগী নন, বরং এমন এক সওদাগর, যিনি বড় দামটা আগেই দেখে ফেলেছেন, তাই দরজায় আসা প্রথম খদ্দেরের কাছে সস্তায় বিকোবেন না।"
          },
          {
            "en": "And from the people themselves, as-Sa'di says, Nūḥ wants one thing, not for his purse but for them: that they be well, and that they walk the straight path. The utmost of his desire from you, in as-Sa'di's words, is sincere good for you and your treading the straight road. So the only return he will take from the crowd is their own rescue. A caller like this grows richer the moment a hearer is saved, and poorer with every soul that turns and walks away.",
            "bn": "আর খোদ মানুষের কাছে, সা'দী বলেন, নূহ একটিমাত্র জিনিস চান, নিজের পকেটের জন্য নয়, তাদেরই জন্য: তারা ভালো থাকুক, আর সরল পথে চলুক। তাদের কাছে তাঁর চাওয়ার চূড়া, সা'দীর ভাষায়, তাদের জন্য আন্তরিক কল্যাণ আর তাদের সোজা পথে পা রাখা। তাই জনতার কাছ থেকে তিনি একমাত্র যে বিনিময় নেবেন তা হলো তাদের নিজেদেরই মুক্তি। এমন ডাকওয়ালা ততই ধনী হন যতক্ষণে তাঁর শ্রোতা বাঁচে, আর যত প্রাণ মুখ ফিরিয়ে চলে যায় ততই গরিব হন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Marks of a Caller",
          "bn": "দূতের দুটি পরিচয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an notices how the refrain is placed. Fear Allah and obey me stands on both sides of the no-wage line, at 26:108 and again at 26:110, wrapping it. Ma'arif explains the repetition this way: either of two qualities would, on its own, earn a messenger the right to be obeyed. One is his honesty and integrity. The other is that he teaches and preaches without a fee. Nūḥ has just laid out the second trait, so the renewed call to obey him lands with full weight.",
            "bn": "মাআরিফুল কুরআন খেয়াল করে, পুনরাবৃত্ত ডাকটা কোথায় বসানো। আল্লাহকে ভয় কর ও আমার আনুগত্য কর, এই কথা মজুরি-না-চাওয়ার লাইনটার দুই পাশেই দাঁড়িয়ে, ২৬:১০৮ আর ২৬:১১০ আয়াতে, লাইনটাকে ঘিরে রাখে। মাআরিফ পুনরাবৃত্তির ব্যাখ্যা দেয় এভাবে: দুটি গুণের যেকোনো একটিই একজন রসুলকে আনুগত্য পাওয়ার হক এনে দেয়। একটি হলো তাঁর সততা ও বিশ্বস্ততা। অন্যটি হলো তিনি বিনা মজুরিতে শেখান ও প্রচার করেন। নূহ এইমাত্র দ্বিতীয় গুণটি মেলে ধরলেন, তাই আনুগত্যের নতুন ডাকটা পুরো ওজন নিয়ে নামে।"
          },
          {
            "en": "On the wider ruling, Ma'arif notes a real difference among scholars. The righteous early generations treated taking wages for teaching the religion as impermissible; later generations permitted it under pressing need. Ma'arif traces the debate to 2:41, do not sell My signs for a paltry price. Ibn Kathir adds the inner proof behind the demand: by now, he has Nūḥ say, my truthfulness, my sincerity and my trust, amāna, in what I carry have become clear to you. A free and faithful caller has earned a hearing.",
            "bn": "বৃহত্তর বিধানের বেলায় মাআরিফ আলেমদের মধ্যে এক বাস্তব মতভেদ তুলে ধরে। সৎপূর্বসূরিরা দ্বীন শেখানোর বিনিময়ে মজুরি নেওয়াকে নাজায়েজ গণ্য করতেন, পরবর্তীরা কঠিন প্রয়োজনে তা জায়েজ রেখেছেন। মাআরিফ এই তর্কের সূত্র টেনে নেয় ২:৪১ আয়াতে, আমার আয়াত সামান্য দামে বিকিয়ো না। ইবন কাসীর দাবিটার পেছনের ভেতরকার প্রমাণটা জুড়ে দেন: নূহের জবানে তিনি বলান, এতক্ষণে আমি যা বহন করছি তাতে আমার সত্যবাদিতা, আন্তরিকতা আর আমানত তোমাদের কাছে স্পষ্ট হয়ে গেছে। বিনা-মজুরির এক বিশ্বস্ত আহ্বায়ক শোনার অধিকার অর্জন করে ফেলেছেন।"
          },
          {
            "en": "Ma'arif draws the two threads together. When a messenger is known for honesty and also asks no fee, each trait alone would justify obeying him; united in one man, they leave any refusal to obey without excuse. That is why, Ma'arif observes, the command to fear Allah and obey is renewed the moment the money is waved away. The hearer has just watched the last worldly motive fall off the messenger, and the demand that he obey only grows heavier.",
            "bn": "মাআরিফ দুটি সুতো একসঙ্গে টেনে আনে। যখন কোনো রসুল সততার জন্য পরিচিত আর কোনো ফি-ও চান না, তখন প্রতিটি গুণ আলাদাভাবেই তাঁর আনুগত্যের দাবি ন্যায্য করে। একজন মানুষের মধ্যে দুটি মিলে গেলে আনুগত্য না করার আর কোনো অজুহাত থাকে না। তাই, মাআরিফ লক্ষ করে, টাকার কথা উড়িয়ে দেওয়ার মুহূর্তেই আল্লাহকে ভয় করা ও আনুগত্যের আদেশ আবার আসে। শ্রোতা এইমাত্র দেখল, দূতের গা থেকে শেষ দুনিয়াবি মতলবটুকুও খসে পড়ল, আর তার আনুগত্যের দাবিটা কেবল ভারী হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Even Their Approval",
          "bn": "তাদের বাহবা পর্যন্ত নয়"
        },
        "p": [
          {
            "en": "Watch what the chiefs say two verses on. They sneer that they will not believe a man whose followers are the lowest of people (26:111). Their objection is about status, about the social worth of the crowd gathered around him. Set beside 26:109 it exposes something. A man who has already refused their money is just as ready to refuse their rank. He is not courting the respectable, not assembling a congregation of the useful. He will take the poor who believe and let the chiefs keep their approval.",
            "bn": "দুই আয়াত পরে নেতারা কী বলে, খেয়াল করুন। যে লোকের অনুসারী সব নিচু শ্রেণির মানুষ, তাকে তারা বিশ্বাস করবে না বলে টিপ্পনী কাটে (২৬:১১১)। তাদের আপত্তিটা মর্যাদা নিয়ে, তাঁর চারপাশে জড়ো হওয়া জনতার সামাজিক দাম নিয়ে। ২৬:১০৯ আয়াতের পাশে রাখলে এটা একটা জিনিস ফাঁস করে দেয়। যে লোক আগেই তাদের টাকা ফিরিয়ে দিয়েছেন, তিনি তাদের পদমর্যাদা ফেরাতেও ততটাই প্রস্তুত। তিনি সম্মানিতদের মন জোগাচ্ছেন না, কাজের লোক জড়ো করে দল গড়ছেন না। যে গরিবরা ঈমান আনে তাদেরই নেবেন, আর নেতারা তাদের বাহবা নিজেদের কাছেই রাখুক।"
          },
          {
            "en": "A fair word is owed here. The people in this scene are named as deniers, yet the verse is Nūḥ's own calm speech, not a verdict handed down upon them, and it licenses nothing against any living person or community that disbelieves today. What it does hold up is a mirror. Most of us will take a payment the chiefs still wanted: not coins, but the approving glance, the thanks, the standing that comes from being seen to do good. Nūḥ turned down both the coin and the glance.",
            "bn": "এখানে একটা ন্যায্য কথা বলা দরকার। এই দৃশ্যের মানুষগুলোকে অস্বীকারকারী বলা হয়েছে, তবু আয়াতটি নূহের নিজেরই শান্ত কথা, তাদের উপর নেমে আসা কোনো রায় নয়। আর আজ যারা অবিশ্বাস করে, এমন কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। এটি বরং একটা আয়না ধরে। আমাদের বেশিরভাগই এমন এক প্রতিদান নিয়ে নিই, যা নেতারাও চেয়েছিল: পয়সা নয়, বরং প্রশংসার চাহনি, ধন্যবাদ, ভালো কাজ করতে দেখা যাওয়ার সম্মান। নূহ পয়সা আর চাহনি, দুটোই ফিরিয়ে দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fragrance of Sincerity",
          "bn": "আন্তরিকতার সেই সুবাস"
        },
        "p": [
          {
            "en": "There is a narration that sets this verse against our own hearts. Abū Dāwūd records in his Sunan (3664) from Abū Hurayrah that the Prophet ﷺ said: whoever acquires knowledge by which the Face of Allah should be sought, but acquires it only to gain some worldly advantage, will not find the fragrance of Paradise on the Day of Resurrection. Abū Dāwūd enters it without a grading of his own in the text we have, so it is reported here just as he reports it, no stronger.",
            "bn": "একটি বর্ণনা এই আয়াতকে আমাদের নিজেদের অন্তরের মুখোমুখি দাঁড় করায়। আবু দাউদ তাঁর সুনানে (৩৬৬৪) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে এমন ইলম শেখে, যা দিয়ে আল্লাহর সন্তুষ্টি খোঁজার কথা, অথচ সে তা শেখে কেবল দুনিয়ার কোনো স্বার্থ হাসিলের জন্য, কিয়ামতের দিন সে জান্নাতের সুবাসও পাবে না। আবু দাউদ আমাদের হাতের পাঠে এটিকে নিজের কোনো গ্রেডিং ছাড়াই আনেন, তাই তিনি যেভাবে বর্ণনা করেছেন ঠিক সেভাবেই এটি এখানে রাখা হলো, এর বেশি জোর দিয়ে নয়।"
          },
          {
            "en": "Nūḥ and this hadith point the same way. Sacred work done for a worldly wage loses the very thing that made it sacred. The danger is not only in gross greed; it hides in the small fee we quietly attach to our good, the expectation of thanks, of influence, of a return in kind. The cure is Nūḥ's own freeing sentence: my wage is with the Lord of the worlds. Keep the account there, and no ingratitude can bankrupt you, and no applause can buy you off.",
            "bn": "নূহ আর এই হাদিস একই দিকে আঙুল তোলে। পবিত্র কাজ যদি দুনিয়ার মজুরির জন্য করা হয়, তবে যা তাকে পবিত্র বানিয়েছিল সেটাই হারিয়ে যায়। বিপদটা কেবল স্থূল লোভে নয়, তা লুকিয়ে থাকে সেই ছোট্ট ফি-তে, যা আমরা চুপচাপ নিজের ভালো কাজের গায়ে সেঁটে দিই, ধন্যবাদের আশা, প্রভাবের আশা, বদলে কিছু পাওয়ার হিসাব। এর দাওয়াই নূহের নিজের সেই মুক্তিদায়ী বাক্য: আমার মজুরি বিশ্বজগতের প্রতিপালকের কাছে। হিসাবটা সেখানে রাখুন, তাহলে কারও অকৃতজ্ঞতা আপনাকে দেউলিয়া করতে পারবে না, কোনো হাততালিও আপনাকে কিনে নিতে পারবে না।"
          },
          {
            "en": "Few of us preach to nations, but all of us pass on something we believe is good, to a child, a student, a friend, a room of listeners. The verse puts a single question to every such act: who is paying me, and in what coin? If the answer is thanks, status, or a favour owed back, the wage is small and the work is quietly at risk. If the answer is the Lord of the worlds, the work is safe, and so, in the end, are we.",
            "bn": "আমাদের খুব কম লোকই জাতির কাছে দাওয়াত দেয়, কিন্তু আমরা সবাই ভালো মনে করা কিছু না কিছু অন্যের কাছে পৌঁছে দিই, সন্তানকে, ছাত্রকে, বন্ধুকে, ভরা একটা ঘরকে। আয়াতটি এমন প্রতিটি কাজের কাছে একটিমাত্র প্রশ্ন রাখে: আমাকে কে দাম দিচ্ছে, আর কোন মুদ্রায়? জবাব যদি হয় ধন্যবাদ, মর্যাদা বা বদলে ফিরে পাওয়া কোনো অনুগ্রহ, তবে মজুরি সামান্য আর কাজটা চুপচাপ ঝুঁকিতে। জবাব যদি হয় বিশ্বজগতের প্রতিপালক, তবে কাজটা নিরাপদ, আর শেষ বিচারে আমরাও।"
          }
        ]
      }
    ]
  },
  "26:115": {
    "sections": [
      {
        "h": {
          "en": "Five Words, One Claim",
          "bn": "পাঁচ শব্দে একটি দাবি"
        },
        "p": [
          {
            "en": "In Arabic the sentence is only five words: in anā illā nadhīrun mubīn. It opens with the pair in and illā, the construction Arabic uses to fence a claim tightly in. The in negates and the illā makes an exception, so the whole force is \"I am nothing except a clear warner.\" Nuh (AS) does not describe his role and then add a limit; the limit is the entire sentence. He is a warner, a plain one, and nothing besides. Everything the chiefs keep demanding of him falls outside those five words, and he is telling them exactly that.",
            "bn": "আরবিতে বাক্যটি মাত্র পাঁচ শব্দের: ইন আনা ইল্লা নাযীরুম মুবীন। শুরুতেই আসে ইন আর ইল্লা জোড়া, আরবি যা দিয়ে দাবিটাকে শক্ত করে ঘিরে ফেলে। ইন নেতিবাচক করে, আর ইল্লা ব্যতিক্রম টানে, তাই গোটা জোর দাঁড়ায়: ‘আমি একজন সুস্পষ্ট সতর্ককারী ছাড়া কিছুই নই।’ নূহ (আঃ) আগে নিজের ভূমিকা বলে পরে তাতে সীমা জুড়ছেন না। সীমাটাই গোটা বাক্য। তিনি সতর্ককারী, খোলা সতর্ককারী, এর বেশি কিছু নন। নেতারা তাঁর কাছে যা যা দাবি করে যাচ্ছে, তার সবই এই পাঁচ শব্দের বাইরে, আর তিনি তাদের ঠিক সেটাই জানিয়ে দিচ্ছেন।"
          },
          {
            "en": "This is an answer, not a boast. The chiefs have been pressing a bargain, and Nuh (AS) keeps naming the shape of his errand rather than meeting their terms. A warner carries a warning; he does not set prices, sort the audience, or guarantee the result. By ending on nadhīr mubīn he refuses to let his task swell into something it was never given to be. The smaller he keeps his claim, the clearer it grows that the thing being demanded of him was never his to grant in the first place.",
            "bn": "এটা জবাব, বড়াই নয়। নেতারা একটা দরকষাকষি চাপিয়ে যাচ্ছে, আর নূহ (আঃ) তাদের শর্ত মানার বদলে বারবার নিজের দায়িত্বের আকারটাই বলে দিচ্ছেন। সতর্ককারী সতর্কবাণী বয়ে আনে; সে দাম ঠিক করে না, শ্রোতা বাছে না, ফলাফলের নিশ্চয়তাও দেয় না। নাযীর মুবীন দিয়ে শেষ করে তিনি নিজের কাজটাকে এমন কিছুতে ফুলে উঠতে দিতে রাজি নন, যা তাঁকে কখনো দেওয়াই হয়নি। তিনি নিজের দাবিটা যত ছোট রাখেন, তত স্পষ্ট হয় যে তাঁর কাছে যা চাওয়া হচ্ছে তা প্রথম থেকেই তাঁর দেওয়ার জিনিস ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Only a Warner, Only a Herald",
          "bn": "শুধু সতর্ককারী, শুধু বার্তাবাহক"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse tightly. Nuh (AS), he says, is only one who warns and conveys from Allah, a munadhir and muballigh, one who strives to counsel the servants sincerely. Then as-Sa'di adds the line that holds the surah's whole logic: \"I have no part in the command; the command belongs to none but Allah\" (laysa lī min al-amr shayʾ, in al-amr illā lillāh). The messenger's reach ends where the message ends. What becomes of it, who accepts it, and what each heart is worth are not placed in his hands at all.",
            "bn": "সাদী আয়াতটি পড়েন খুব আঁটসাঁটভাবে। তিনি বলেন, নূহ (আঃ) কেবল একজন, যিনি আল্লাহর পক্ষ থেকে সতর্ক করেন ও পৌঁছে দেন, একজন মুনযির ও মুবাল্লিগ, যিনি বান্দাদের খাঁটি নসিহত দিতে প্রাণপণ করেন। এরপর সাদী যোগ করেন সেই কথা, যা গোটা সুরার যুক্তিটাকে ধরে রাখে: ‘আদেশে আমার কোনো হাত নেই, আদেশ কেবল আল্লাহরই’ (লাইসা লী মিনাল আমরি শাইউন, ইনিল আমরু ইল্লা লিল্লাহ)। বার্তাবাহকের দৌড় বার্তা পর্যন্তই। এরপর তার কী হবে, কে মানবে, কোন অন্তরের দাম কত, এসবের কিছুই তাঁর হাতে রাখা হয়নি।"
          },
          {
            "en": "Two verses earlier the same boundary was drawn around reckoning. In 26:113 Nuh (AS) had said that their account is only upon his Lord, \"if you could perceive.\" Ibn Kathir paraphrases the thought: whatever is in their hearts is for Allah to know; the prophet need not examine anyone's background or vet their past before accepting their faith. Warning and judging are two separate offices, and only one of them was handed to Nuh (AS). The account he is told to leave untouched is precisely the account the chiefs want him to open and act upon.",
            "bn": "দুই আয়াত আগেই একই সীমা টানা হয়েছিল হিসাবের চারপাশে। ২৬:১১৩ আয়াতে নূহ (আঃ) বলেছিলেন, তাদের হিসাব কেবল তাঁর রবের কাছেই, ‘যদি তোমরা বুঝতে।’ ইবন কাসীর ভাবটা এভাবে বলেন: কার অন্তরে কী আছে তা জানা আল্লাহর কাজ; কাউকে বিশ্বাসী হিসেবে কবুল করার আগে তার অতীত ঘেঁটে দেখা বা তদন্ত করা নবীর কাজ নয়। সতর্ক করা আর বিচার করা দুটো আলাদা দায়িত্ব, আর এর একটিই কেবল নূহ (আঃ)-কে দেওয়া হয়েছিল। যে হিসাব না ছোঁয়ার কথা তাঁকে বলা হয়েছে, নেতারা ঠিক সেই হিসাবই খুলে বসতে চায়।"
          },
          {
            "en": "There is relief in this for anyone who carries a message. The verse does not measure Nuh (AS) by how many believed or stayed. His brief was to warn plainly, and that he did; the tally of responses was never on his ledger. To accept this is not to care less. It is to set down a weight that was never assigned, and to hand the outcome back to the One who alone decides it. The message is the servant's to deliver; its harvest is Allah's to grant, on terms the servant does not set.",
            "bn": "যে কেউ কোনো বার্তা বয়ে বেড়ায়, তার জন্য এতে স্বস্তি আছে। আয়াতটি নূহ (আঃ)-কে মাপে না এই দিয়ে যে কতজন বিশ্বাস করল বা থেকে গেল। তাঁর দায়িত্ব ছিল খোলাখুলি সতর্ক করা, আর সেটা তিনি করেছেন; কে কেমন সাড়া দিল তার হিসাব তাঁর খাতায় কখনো ছিল না। এটা মেনে নেওয়া মানে কম গুরুত্ব দেওয়া নয়। এটা হলো এমন এক বোঝা নামিয়ে রাখা, যা কখনো তাঁর কাঁধে দেওয়াই হয়নি, আর ফলটা ফিরিয়ে দেওয়া সেই সত্তার হাতে যিনি একমাত্র তা ঠিক করেন। বার্তা পৌঁছানো বান্দার কাজ; তার ফসল দেওয়া আল্লাহর, আর সেই শর্ত বান্দা ঠিক করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Kept Open",
          "bn": "খোলা রাখা সতর্কবাণী"
        },
        "p": [
          {
            "en": "The word mubīn, clear or plain, is doing real work. At-Tabari glosses the verse: \"I am only a warner to you from your Lord, warning you of His might and His assault upon your rejection of Him.\" And mubīn, he adds, means a warner who has made his warning plain and has hidden none of his sincere counsel from you (lam yaktumkum naṣīḥatahu). The word is not decoration. It says the warning was given in the open, withholding nothing, so that no listener could later claim he had never been told.",
            "bn": "মুবীন শব্দটা, মানে স্পষ্ট বা খোলা, এখানে আসল কাজ করছে। তাবারী আয়াতের ব্যাখ্যায় বলেন: ‘আমি কেবল তোমাদের রবের পক্ষ থেকে একজন সতর্ককারী, তোমাদের কুফরের কারণে তাঁর শাস্তি ও কঠোর পাকড়াও নিয়ে তোমাদের সাবধান করছি।’ আর মুবীন মানে, তিনি বলেন, এমন সতর্ককারী যে নিজের সতর্কবাণী স্পষ্ট করে দিয়েছে এবং তোমাদের কাছ থেকে তার কোনো খাঁটি নসিহত লুকায়নি (লাম ইয়াকতুমকুম নাসীহাতাহু)। শব্দটা সাজসজ্জা নয়। এটা বলে, সতর্কবাণী খোলাখুলিই দেওয়া হয়েছে, কিছু গোপন না রেখে, যাতে পরে কেউ বলতে না পারে তাকে কখনো জানানো হয়নি।"
          },
          {
            "en": "Al-Muyassar keeps to the same plain sense, reading nadhīr mubīn as \"a warner, clear in his warning\" (nadhīr bayyinu al-indhār). A clear warner leaves no room for the excuse of ignorance. He does not hint, hedge, or save the hard part for a private audience. Nuh (AS) says the danger aloud, names it, and lets it stand in front of everyone. The clarity is itself a mercy: a warning muffled to spare feelings is no kindness to the person walking steadily toward the edge of the cliff.",
            "bn": "মুয়াসসারও একই সরল অর্থেই থাকে, নাযীর মুবীনকে পড়ে ‘এমন সতর্ককারী, যার সতর্কবাণী স্পষ্ট’ (নাযীর বাইয়িনুল ইনযার) বলে। স্পষ্ট সতর্ককারী না-জানার অজুহাতের কোনো ফাঁক রাখে না। সে ইশারায় বলে না, কথা ঘোরায় না, কঠিন অংশটা আলাদা করে একান্তে বলার জন্য জমিয়েও রাখে না। নূহ (আঃ) বিপদের কথা উঁচু গলায় বলেন, নাম ধরে বলেন, আর সবার সামনে তা দাঁড় করিয়ে দেন। এই স্পষ্টতা নিজেই একটা রহমত। অনুভূতি বাঁচাতে চাপা দেওয়া সতর্কবাণী সেই মানুষটার প্রতি দয়া নয়, যে স্থির পায়ে খাদের কিনারার দিকে হেঁটে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Clear the Room First",
          "bn": "আগে ঘর খালি করো"
        },
        "p": [
          {
            "en": "The demand behind the verse is ugly and worth naming. In 26:111 the chiefs sneer, \"Shall we believe in you while the lowest follow you?\" The word is al-ardhalūn: they file the poor and unremarkable believers under \"lowest\" and make their removal the price of a hearing. Faith, to these men, is something that cannot share a room with people beneath their rank. Ibn Kathir reads it exactly so: they were asking Nuh (AS) to drive these followers away, and then, they implied, they would follow him themselves.",
            "bn": "আয়াতের পেছনের দাবিটা কুৎসিত, আর তা নাম ধরে বলা দরকার। ২৬:১১১ আয়াতে নেতারা ঠাট্টা করে বলে, ‘আমরা কি তোমার প্রতি বিশ্বাস করব, যখন একেবারে নিম্নশ্রেণির লোকেরা তোমার অনুসরণ করছে?’ শব্দটা আল-আরযালূন: গরিব আর সাদামাটা বিশ্বাসীদের তারা ‘সবচেয়ে নিচু’ খাতায় ফেলে, আর তাদের সরিয়ে দেওয়াকেই কথা শোনার দাম বানায়। এই লোকদের কাছে ঈমান এমন জিনিস, যা তাদের মর্যাদার নিচের মানুষের সঙ্গে এক ঘরে থাকতে পারে না। ইবন কাসীর ঠিক এভাবেই পড়েন: তারা নূহ (আঃ)-কে বলছিল এই অনুসারীদের তাড়িয়ে দিতে, আর তখন, তাদের ইঙ্গিত অনুযায়ী, তারা নিজেরা তাঁকে অনুসরণ করবে।"
          },
          {
            "en": "Nuh's answer comes in the verse just before ours. In 26:114 he says flatly, \"And I am not one to drive away the believers\" (wa mā anā bi-ṭārid al-muʾminīn). Al-Muyassar fills in the motive the chiefs were counting on: he will not expel those who believe in his call, whatever their condition, merely to satisfy the elite's wish so that they might then believe. The bargain is refused at the root. A believer's place beside the prophet is not a bargaining chip to be spent on buying the approval of the powerful.",
            "bn": "নূহ (আঃ)-এর জবাব আসে আমাদের আয়াতের ঠিক আগের আয়াতে। ২৬:১১৪ আয়াতে তিনি সাফ বলেন, ‘আর আমি মুমিনদের তাড়িয়ে দেওয়ার লোক নই’ (ওয়া মা আনা বিতারিদিল মুমিনীন)। মুয়াসসার সেই উদ্দেশ্যটা খুলে বলেন, যার উপর নেতারা ভরসা করছিল: যারা তাঁর ডাকে বিশ্বাস এনেছে, তাদের অবস্থা যেমনই হোক, তিনি তাদের তাড়াবেন না, শুধু অভিজাতদের খুশি করে তাদের বিশ্বাস আদায়ের জন্য। দরকষাকষি গোড়াতেই নাকচ। নবীর পাশে একজন বিশ্বাসীর জায়গা এমন কোনো বাজির দান নয়, যা ক্ষমতাবানদের সম্মতি কিনতে খরচ করা যায়।"
          },
          {
            "en": "Then comes 26:115: \"I am only a clear warner.\" Placed right after the refusal, the five words explain it. A warner's door stands open to whoever will heed the warning; sorting that crowd by rank is simply not in the job description. To expel the poor in order to win the rich would be to redraw the entire errand around the chiefs' vanity. Nuh (AS) will not do it. He would rather keep the lowly believers and lose the powerful than keep his own standing and quietly betray his brief.",
            "bn": "এরপর আসে ২৬:১১৫: ‘আমি তো শুধু একজন সুস্পষ্ট সতর্ককারী।’ অস্বীকৃতির ঠিক পরে বসায় এই পাঁচ শব্দ সেটারই ব্যাখ্যা। সতর্ককারীর দরজা খোলা থাকে তার জন্য, যে সতর্কবাণী কানে নেবে; সেই ভিড়কে শ্রেণি দিয়ে বাছাই করা তার দায়িত্বের মধ্যেই পড়ে না। ধনীদের পেতে গরিবদের তাড়িয়ে দেওয়া মানে গোটা দায়িত্বটাকে নেতাদের অহংকারের চারপাশে নতুন করে আঁকা। নূহ (আঃ) তা করবেন না। নিজের মর্যাদা ধরে রেখে চুপচাপ দায়িত্বের সঙ্গে বিশ্বাসঘাতকতা করার চেয়ে তিনি বরং নিচু বিশ্বাসীদের রেখে ক্ষমতাবানদের হারাতে রাজি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Sent for the Rich",
          "bn": "ধনীদের জন্য পাঠানো নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws the verse's edge sharply. It means, he writes, that Allah did not send me to single out the people of wealth to the exclusion of the poor; I am only a messenger conveying what I was sent with. The errand has no rich-only door. And then the clause that overturns the chiefs' entire scale: whoever obeys me, \"that one is the happy one in Allah's sight, even if he is poor\" (fa-dhālika al-saʿīd ʿinda Allah wa in kāna faqīran). Poverty, in the only reckoning that finally lasts, is no mark against a soul.",
            "bn": "কুরতুবী আয়াতের ধারটা টানেন তীক্ষ্ণভাবে। তিনি লেখেন, এর অর্থ হলো, আল্লাহ আমাকে পাঠাননি গরিবদের বাদ দিয়ে কেবল ধনীদের নিয়ে চলতে; আমি তো শুধু একজন রসুল, যা নিয়ে পাঠানো হয়েছে তা পৌঁছে দিই। এই দায়িত্বে ধনীদের জন্য আলাদা দরজা নেই। এরপর সেই কথাটি, যা নেতাদের গোটা মাপকাঠি উল্টে দেয়: যে আমার অনুসরণ করে, ‘সে-ই আল্লাহর কাছে সৌভাগ্যবান, গরিব হলেও’ (ফাযালিকাস সাঈদু ইনদাল্লাহি ওয়া ইন কানা ফাকীরা)। যে হিসাব শেষ পর্যন্ত টেকে, তাতে দারিদ্র্য কোনো আত্মার বিরুদ্ধে দাগ নয়।"
          },
          {
            "en": "Ibn Kathir reaches the same place from the other side. Commenting on \"I am only a warner,\" he writes that Nuh (AS) was sent as a warner, and whoever obeys, follows, and believes him \"belongs to me and I to him, whether he is noble or lowly, eminent or contemptible\" (sharīfan aw waḍīʿan, aw jalīlan aw ḥaqīran). The bond runs through faith, not through lineage or purse. The labels the chiefs lived and ranked by do not survive contact with the warner's actual mandate; inside that mandate they simply carry no weight at all.",
            "bn": "ইবন কাসীর অন্য দিক থেকে পৌঁছান একই জায়গায়। ‘আমি তো শুধু একজন সতর্ককারী’ কথার ব্যাখ্যায় তিনি লেখেন, নূহ (আঃ) সতর্ককারী হিসেবে পাঠানো হয়েছিলেন, আর যে তাঁর অনুসরণ করে, মানে ও বিশ্বাস করে, ‘সে আমার আর আমি তার, সে সম্ভ্রান্ত হোক বা নিচু, মর্যাদাবান হোক বা তুচ্ছ’ (শারীফান আও ওয়াদীআন, আও জালীলান আও হাকীরা)। বাঁধনটা চলে ঈমানের ভেতর দিয়ে, বংশ বা থলের ভেতর দিয়ে নয়। নেতারা যেসব তকমা দিয়ে বাঁচত আর মানুষকে মাপত, সতর্ককারীর আসল দায়িত্বের সঙ্গে ঠেকলে সেসব টেকে না; সেই দায়িত্বের ভেতরে ওগুলোর কোনো দামই নেই।"
          },
          {
            "en": "Hold the two readings together. For the chiefs, rank decided worth, and the poor were a stain on the movement. For Nuh (AS), rank decided nothing: the believing pauper was the saʿīd, the fortunate soul, while the scornful noble stood outside. The verse does not merely tolerate the lowly believers as something to be endured. It reverses the whole ranking the objectors assumed was self-evident. What they counted as a liability to be swept out, revelation counts as the very thing that carries weight before God.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি ধরুন। নেতাদের কাছে মর্যাদাই দাম ঠিক করত, আর গরিবরা ছিল আন্দোলনের গায়ে দাগ। নূহ (আঃ)-এর কাছে মর্যাদা কিছুই ঠিক করত না: বিশ্বাসী নিঃস্ব মানুষটিই সাঈদ, সৌভাগ্যবান, আর অবজ্ঞাভরা অভিজাত থেকে যেত বাইরে। আয়াতটি নিচু বিশ্বাসীদের নিছক সহ্য করার জিনিস হিসেবে মেনে নেয় না। বিরোধীরা যে ক্রমটাকে স্বতঃসিদ্ধ ভেবেছিল, আয়াত তা পুরো উল্টে দেয়। যাকে তারা ঝেঁটিয়ে বিদায়ের বোঝা ভেবেছিল, ওহি তাকেই গণ্য করে সেই জিনিস হিসেবে, যা আল্লাহর কাছে ওজন রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "By Deeds, Not Birth",
          "bn": "জন্ম নয়, কাজে বিচার"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws the principle out plainly for the reader: the nobility of a person depends on deeds and moral qualities, not on family or status. The chiefs rejected the message on the plea that its followers were worthless poor people, and Nuh (AS) had answered, in 26:112, \"what is my knowledge of what they used to do?\" That reply, Ma'arif notes, hints that their whole measure, honour by wealth and lineage, was mistaken. Dignity and disgrace track a person's character and conduct, never their address or their purse.",
            "bn": "মাআরিফুল কুরআন নীতিটা পাঠকের জন্য খোলাখুলি টেনে আনে: মানুষের সম্মান নির্ভর করে তার আমল ও চরিত্রগুণের উপর, বংশ বা মর্যাদার উপর নয়। অনুসারীরা মূল্যহীন গরিব লোক, এই অজুহাতে নেতারা বার্তাটা নাকচ করেছিল, আর নূহ (আঃ) ২৬:১১২ আয়াতে জবাব দিয়েছিলেন, ‘তারা কী করত, সেটা আমার জানা নেই।’ মাআরিফ বলে, এই জবাব ইঙ্গিত দেয় যে তাদের গোটা মাপকাঠি, মানে সম্পদ আর বংশ দিয়ে সম্মান মাপা, ভুল ছিল। মান আর অপমান চলে মানুষের চরিত্র ও আচরণের পথে, কখনোই তার ঠিকানা বা থলের পথে নয়।"
          },
          {
            "en": "There is a second lesson folded in. Ma'arif, citing al-Qurtubi, adds that unless one fully knows the deeds and dispositions of others, it is not right to pass judgment upon them. The chiefs had labelled the believers \"lowest\" while knowing nothing of their inner lives. Nuh (AS) declines to pass that sentence at all. Their account, he has already said in 26:113, rests with his Lord. To rank a soul whose inside you cannot see is to claim a knowledge that belongs to God alone, and to spend it as if it were yours.",
            "bn": "এর ভেতরে দ্বিতীয় একটা শিক্ষাও ভাঁজ করা আছে। মাআরিফ কুরতুবীর বরাত দিয়ে যোগ করে, অন্যের আমল ও স্বভাব পুরোপুরি না জেনে তার উপর রায় দেওয়া ঠিক নয়। নেতারা বিশ্বাসীদের ভেতরটা কিছু না জেনেই তাদের ‘সবচেয়ে নিচু’ তকমা দিয়ে দিয়েছিল। নূহ (আঃ) সেই রায় দিতেই রাজি নন। তাদের হিসাব, তিনি ২৬:১১৩ আয়াতে আগেই বলেছেন, তাঁর রবের কাছে। যে আত্মার ভেতরটা আপনি দেখতে পান না, তাকে ক্রম দেওয়া মানে এমন এক জ্ঞানের দাবি করা যা কেবল আল্লাহরই, আর তা নিজের বলে খরচ করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where God Looks",
          "bn": "যেখানে আল্লাহ তাকান"
        },
        "p": [
          {
            "en": "The chiefs looked at surfaces, at who was poor and who was obscure, and ranked people accordingly. A report in Sahih Muslim turns that gaze inside out. Abu Hurayra (RA) related that Allah's Messenger (ﷺ) said, \"Verily Allah does not look to your faces and your wealth, but He looks to your hearts and your deeds\" (inna Allāha lā yanẓuru ilā ṣuwarikum wa amwālikum, wa lākin yanẓuru ilā qulūbikum wa aʿmālikum). Muslim placed the narration in his Ṣaḥīḥ, among the reports he graded sound.",
            "bn": "নেতারা তাকাত উপরিভাগে, কে গরিব আর কে নামগোত্রহীন তাতে, আর সেই অনুযায়ী মানুষকে ক্রম দিত। সহীহ মুসলিমের একটি বর্ণনা সেই দৃষ্টিটাই উল্টে দেয়। আবু হুরায়রা (রাঃ) বর্ণনা করেন, রসুলুল্লাহ ﷺ বলেছেন, ‘নিশ্চয়ই আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে’ (ইন্নাল্লাহা লা ইয়ানযুরু ইলা সুওয়ারিকুম ওয়া আমওয়ালিকুম, ওয়া লাকিন ইয়ানযুরু ইলা কুলূবিকুম ওয়া আমালিকুম)। মুসলিম বর্ণনাটি তাঁর সহীহ-তে রেখেছেন, যেসব বর্ণনাকে তিনি সহীহ বলে গণ্য করেছেন তাদের মধ্যে।"
          },
          {
            "en": "Faces and wealth were exactly the ledger the objectors kept. The hadith says that ledger is not the one God reads at all. The poor believers the chiefs wanted swept out may well have carried, in the only place that is weighed, far more than the men demanding their removal. The warner's refusal in 26:114 and his plea of limited knowledge in 26:112 both rest on this single fact: the worth of a person is interior, and reading it was never the chiefs' right, nor even the prophet's own.",
            "bn": "চেহারা আর সম্পদ, এটাই ছিল বিরোধীদের রাখা খাতা। হাদিসটি বলে, সেই খাতাই আল্লাহ পড়েন না। নেতারা যে গরিব বিশ্বাসীদের ঝেঁটিয়ে বিদায় করতে চেয়েছিল, যে জায়গায় ওজন হয় সেখানে তারা হয়তো বহন করত সেই লোকদের চেয়ে অনেক বেশি, যারা তাদের সরানোর দাবি তুলছিল। ২৬:১১৪ আয়াতে সতর্ককারীর অস্বীকৃতি আর ২৬:১১২ আয়াতে তাঁর সীমিত জ্ঞানের কথা, দুটোই দাঁড়িয়ে আছে এই একটি সত্যের উপর: মানুষের দাম ভেতরে, আর তা পড়ার অধিকার নেতাদের কখনো ছিল না, এমনকি নবীরও নিজের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Grants No Contempt",
          "bn": "আয়াত কোনো অবজ্ঞার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "One caution must be stated plainly, in both the account and the reader's heart. The people of Nuh (AS) are, in the Qur'an's own verdict, condemned deniers who rejected a clear warning. The verse describes what the text describes: an arrogant elite who despised the poor and set conditions on faith. It licenses nothing against any living person or community, not against the wealthy as a class, and not against anyone today who can be cast as a modern \"chief.\" This warning is a mirror held up to the self, never a stone to be picked up against a neighbour.",
            "bn": "একটা সতর্কতা খোলাখুলি বলা দরকার, আলোচনায় এবং পাঠকের অন্তরেও। নূহ (আঃ)-এর সম্প্রদায়, কুরআনের নিজের রায়ে, নিন্দিত অস্বীকারকারী, যারা একটি সুস্পষ্ট সতর্কবাণী প্রত্যাখ্যান করেছিল। আয়াতটি যা বর্ণনা করে কেবল তা-ই বর্ণনা করে: এক অহংকারী অভিজাত শ্রেণি, যারা গরিবদের তুচ্ছ করত আর ঈমানের উপর শর্ত চাপাত। এটা কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুর অনুমতি দেয় না, ধনীদের একটা শ্রেণি হিসেবে নয়, আর আজকের কাউকে ‘আধুনিক নেতা’ সাজিয়ে তার বিরুদ্ধেও নয়। এই সতর্কবাণী নিজের দিকে ধরা আয়না, কখনোই প্রতিবেশীর দিকে ছোঁড়ার পাথর নয়।"
          },
          {
            "en": "So the reflection turns inward. The contempt the chiefs showed is the easy sin: to measure a gathering by its richest members, to wish the unimpressive away, to call plain exclusion \"standards.\" The verse refuses that in a prophet's own voice, so a follower cannot keep it. And it holds the warner's role exact: he warns and conveys, while guidance and reckoning stay with Allah. To carry a truth to people is an honour; to appoint yourself judge of who deserves it is to overreach the very office Nuh (AS) was so careful to keep small.",
            "bn": "তাই ভাবনাটা ফেরে ভেতরের দিকে। নেতারা যে অবজ্ঞা দেখিয়েছিল, সেটাই সহজ গুনাহ: কোনো জমায়েতকে তার সবচেয়ে ধনী লোকদের দিয়ে মাপা, সাদামাটা মানুষদের সরে যাওয়া কামনা করা, খোলা বর্জনকে ‘মান বজায় রাখা’ নাম দেওয়া। আয়াতটি তা নাকচ করে একজন নবীর নিজের মুখে, তাই অনুসারীর পক্ষে তা আঁকড়ে রাখা চলে না। আর এটি সতর্ককারীর ভূমিকা রাখে ঠিকঠাক: তিনি সতর্ক করেন ও পৌঁছে দেন, আর হেদায়েত ও হিসাব থাকে আল্লাহর হাতে। মানুষের কাছে সত্য বয়ে নেওয়া সম্মানের; কিন্তু কে তার যোগ্য সেই বিচারক নিজেকে বানানো মানে সেই দায়িত্বটাকেই ছাড়িয়ে যাওয়া, যা নূহ (আঃ) এত যত্নে ছোট রেখেছিলেন।"
          }
        ]
      }
    ]
  },
  "26:123": {
    "sections": [
      {
        "h": {
          "en": "Three Words, One Verdict",
          "bn": "তিন শব্দ, এক রায়"
        },
        "p": [
          {
            "en": "The surah has just closed the account of Nūḥ (AS): his people were drowned, a sign was left in it, and the passage ended on the words your Lord is the Exalted in Might, the Merciful. Now a new people steps forward, and three Arabic words carry the whole indictment: kadhdhabat ʿĀdun al-mursalīn — ʿĀd denied the messengers. At-Tabari gives the plain sense: ʿĀd denied the messengers of God who were sent to them. Before any detail of who they were or what they did, the Qur'an states the charge that will undo them. The verdict comes first; the rest only fills in a sentence already passed.",
            "bn": "সূরাটি এইমাত্র নূহ (আঃ)-এর বৃত্তান্ত শেষ করল। তাঁর সম্প্রদায় ডুবে গেল, তাতে রেখে গেল এক নিদর্শন, আর অনুচ্ছেদটি শেষ হলো এই কথায়: তোমার প্রতিপালক তিনিই প্রবল পরাক্রান্ত, পরম দয়ালু। এবার সামনে আসে নতুন এক জাতি, আর তিনটি আরবি শব্দই গোটা অভিযোগ বয়ে আনে: কাযযাবাত ‘আদুনিল মুরসালীন—‘আদ রসূলগণকে মিথ্যা সাব্যস্ত করল। তাবারী সোজা অর্থটা দেন: তাদের কাছে পাঠানো আল্লাহর রসূলদেরকে ‘আদ অস্বীকার করেছিল। তারা কারা ছিল বা কী করেছিল তার কোনো বিবরণে যাওয়ার আগেই কুরআন সেই অভিযোগটা জানিয়ে দেয়, যা তাদের ধ্বংস করবে। রায়টা আগে, বাকি অনুচ্ছেদ কেবল আগেই ঘোষিত এক দণ্ডে রং চড়ায়।"
          },
          {
            "en": "Notice the verb that leads: kadhdhaba, to deny, to call a liar. It is the same word, in the same grammatical shape, that opened the story of Nūḥ a few lines earlier in 26:105, where his people denied the messengers. The surah is building a pattern, and the first thing recorded against each nation is not idolatry, not cruelty, but the refusal of the ones sent to warn. Everything else that ʿĀd will be charged with grows from this single root: once the messenger is called a liar, nothing he brings can take hold. The whole tragedy of ʿĀd is folded into that opening verb.",
            "bn": "খেয়াল করুন, আয়াত শুরু হয় যে ক্রিয়া দিয়ে: কাযযাবা, অর্থাৎ মিথ্যা সাব্যস্ত করা, মিথ্যাবাদী বলা। ঠিক এই শব্দ, ঠিক একই রূপে, কয়েক লাইন আগে নূহ (আঃ)-এর কাহিনিও শুরু করেছিল ২৬:১০৫ আয়াতে, যেখানে তাঁর সম্প্রদায় রসূলগণকে অস্বীকার করেছিল। সূরা এখানে একটা ছক গড়ে তুলছে। প্রতিটি জাতির নামে প্রথম যে কথাটা লেখা হয়, তা মূর্তিপূজা নয়, নিষ্ঠুরতা নয়, বরং সতর্ককারীদের প্রত্যাখ্যান। ‘আদের বিরুদ্ধে পরে যত অভিযোগ আসবে সবই এই এক মূল থেকে গজায়: রসূলকে একবার মিথ্যাবাদী বলে দিলে, তিনি যা-ই আনুন, কিছুই আর ধরে না। ‘আদের গোটা বিয়োগান্ত সেই শুরুর ক্রিয়াটিতেই গোটানো।"
          }
        ]
      },
      {
        "h": {
          "en": "One Caller, Named as Many",
          "bn": "এক আহ্বানকারী, বহু রসূল"
        },
        "p": [
          {
            "en": "Here is the knot the verse ties, and the point the commentators most want understood. ʿĀd had one messenger among them, Hūd, as the next verse will name him. Yet the charge reads the messengers, in the plural. Al-Muyassar explains that by denying their own messenger Hūd (AS) they were, in that very act, deniers of all the messengers, because the messengers' call is one in its foundations and its goal. As-Sa'di says the same: their denial of him is a denial of the others, since the call is in agreement. Both read 'the messengers' as the Qur'an's own verdict that the prophets form one body.",
            "bn": "এখানেই আয়াত একটা গিঁট বাঁধে, আর তাফসীরকারেরা সবচেয়ে বেশি যেটা বোঝাতে চান সেটাও এই। ‘আদের মধ্যে রসূল ছিলেন একজনই, হূদ, পরের আয়াত যাঁর নাম নেবে। অথচ অভিযোগে বলা হলো রসূলগণকে, বহুবচনে। মুয়াসসার ব্যাখ্যা করেন, নিজেদের রসূল হূদ (আঃ)-কে অস্বীকার করার মধ্য দিয়েই তারা আসলে সব রসূলকে অস্বীকারকারী হয়ে গেল, কারণ রসূলদের আহ্বান তার ভিত্তি আর লক্ষ্যে একটাই। সাদীও একই কথা বলেন: একজনকে অস্বীকার করা মানে বাকিদেরও অস্বীকার করা, যেহেতু আহ্বান একই। দুজনেই ‘রসূলগণ’ কথাটাকে ঢিলেঢালা বুলি ধরেন না, বরং কুরআনের নিজের রায় ধরেন যে নবীগণ এক দেহ।"
          },
          {
            "en": "This is not a small grammatical quirk. It states a principle that runs through the whole Qur'an: the messengers are not rival teachers with competing systems, each to be judged on his own. They are one embassy from one Sender, carrying one summons to worship God alone. To reject any one of them on that core is to reject the Sender behind them all. So the man who says he honours earlier prophets while turning from the one sent to him has not, by the Qur'an's reckoning, honoured anyone; he has refused the single message they all brought. There is no partial belief in the messengers: one is all.",
            "bn": "এটা নিছক কোনো ব্যাকরণের খুঁটিনাটি নয়। এ এমন এক নীতি, যা গোটা কুরআন জুড়ে চলে: রসূলগণ আলাদা আলাদা শিক্ষক নন যে একেকজনের আলাদা মত আর আলাদা বিচার হবে। তাঁরা এক প্রেরকের পাঠানো এক প্রতিনিধিদল, এক আল্লাহর ইবাদতের ডাক নিয়ে এসেছেন। সেই মূল কথায় তাঁদের কাউকে অস্বীকার করা মানে তাঁদের সবার পেছনের প্রেরককেই অস্বীকার করা। তাই যে লোক বলে আগের নবীদের সে সম্মান করে অথচ তার কাছে পাঠানো রসূল থেকে মুখ ফেরায়, কুরআনের হিসাবে সে আসলে কাউকেই সম্মান করেনি; সবাই যে একই বার্তা এনেছিলেন, সে তা-ই প্রত্যাখ্যান করেছে। রসূলদের ক্ষেত্রে আধা-বিশ্বাস বলে কিছু নেই: একজনই সবাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Verb Turns Feminine",
          "bn": "ক্রিয়া কেন স্ত্রীবাচক"
        },
        "p": [
          {
            "en": "A reader of the Arabic meets a small puzzle. The verb kadhdhabat carries a feminine ending, yet ʿĀd is the name of a people. Al-Qurtubi settles it in a line: the feminine is used because the sense is the tribe and the community — al-qabīla wa al-jamāʿa, both feminine nouns in Arabic. ʿĀd is not being treated as one man or a male ancestor here, but as a single collective body. The grammar, in other words, gathers the whole people into one subject before the verb even lands. What looks like a minor grammatical point is really the portrait's first brushstroke: a people acting with one will.",
            "bn": "আরবি পাঠক এখানে ছোট্ট একটা ধাঁধায় পড়েন। কাযযাবাত ক্রিয়ায় স্ত্রীবাচক লেজ, অথচ ‘আদ তো একটা জাতির নাম। কুরতুবী এক লাইনেই তা মিটিয়ে দেন: স্ত্রীবাচক রূপ এসেছে কারণ এর অর্থ গোত্র ও জামাত—আল-কাবীলা ও আল-জামাআ, আরবিতে দুটিই স্ত্রীবাচক শব্দ। ‘আদকে এখানে কোনো একজন পুরুষ বা পুরুষ পূর্বপুরুষ ধরা হচ্ছে না, বরং ধরা হচ্ছে একটামাত্র সমষ্টিগত দেহ হিসেবে। অন্যভাবে বললে, ক্রিয়াটা পড়ার আগেই ব্যাকরণ গোটা জাতিকে এক কর্তায় জড়ো করে ফেলে। ব্যাকরণের যা নিছক ছোট কথা মনে হয়, তা আসলে ছবিটার প্রথম তুলির টান: এক ইচ্ছায় চলা এক জাতি।"
          },
          {
            "en": "That grammatical choice is doing moral work. When a whole people is named as one subject denying, the Qur'an is not picturing scattered individuals, some believing and some not; it is describing a settled public temper, a consensus of refusal that the tribe wore as its character. Rejection had become the group's shared air, the thing a newborn breathed in. This is how denial most often works among us too: rarely a lone decision, more often a mood a community keeps for itself, until saying no to the truth feels less like a choice than like belonging.",
            "bn": "এই ব্যাকরণের বাছাই নৈতিক একটা কাজও করছে। গোটা এক জাতিকে যখন অস্বীকারকারী এক কর্তা হিসেবে নাম দেওয়া হয়, কুরআন তখন ছড়ানো-ছিটানো কিছু মানুষের ছবি আঁকছে না—কেউ বিশ্বাসী, কেউ নয়। বরং আঁকছে থিতু হয়ে বসা এক জনমেজাজ, প্রত্যাখ্যানের এক ঐকমত্য, যা গোত্রটা নিজের চরিত্রের মতো গায়ে জড়িয়ে নিয়েছিল। অস্বীকারই হয়ে উঠেছিল দলটার সাধারণ বাতাস, নবজাতক যা বুকে টেনে নিত। আমাদের মাঝেও অস্বীকার সাধারণত এভাবেই কাজ করে: খুব কমই একজনের সিদ্ধান্ত, বেশির ভাগ সময় এক সমাজের পুষে রাখা মেজাজ, যতক্ষণ না সত্যকে না বলাটা পছন্দের চেয়ে বরং দলভুক্তি বলে মনে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who These People Were",
          "bn": "এই জাতি কারা ছিল"
        },
        "p": [
          {
            "en": "Only now does the Qur'an's own order let us ask who ʿĀd were, and Ibn Kathir draws the picture from the sources. They dwelt in the Ahqaf, the curving sand-hills near Hadramawt on the borders of Yemen. They came after the people of Nūḥ (AS) — Ibn Kathir reads this from Sūrat al-Aʿrāf, where God reminds them that He made them successors after Nūḥ's people and increased them amply in stature (7:69). They were a people of great physical strength, powerful build, and towering height. That height was itself a gift, Ibn Kathir notes from the same verse, from the very Giver these people would soon forget.",
            "bn": "কুরআনের নিজের বিন্যাসই এবার জিজ্ঞেস করতে দেয়, ‘আদ কারা ছিল, আর ইবন কাসীর সূত্র ধরে ছবিটা আঁকেন। তারা বাস করত আহকাফে, হাদরামাউতের কাছে ইয়েমেন সীমান্ত ঘেঁষা বাঁকা বালিয়াড়ির দেশে। তারা এসেছিল নূহ (আঃ)-এর সম্প্রদায়ের পরে—ইবন কাসীর এটা পড়েন সূরা আল-আ‘রাফ থেকে, যেখানে আল্লাহ তাদের মনে করিয়ে দেন যে নূহের সম্প্রদায়ের পর তিনিই তাদের উত্তরসূরি করেছেন আর দেহের গড়নে তাদের বাড়িয়ে দিয়েছেন (৭:৬৯)। তারা ছিল প্রবল শারীরিক শক্তির অধিকারী, মজবুত গড়ন আর সুউচ্চ দেহের এক জাতি। সেই উচ্চতা নিজেই ছিল এক দান, ইবন কাসীর ওই আয়াত থেকেই ধরেন, সেই দাতার দান যাঁকে এই জাতি অচিরেই ভুলে যাবে।"
          },
          {
            "en": "Ibn Kathir goes on: God had given them flowing provisions, wealth, gardens and springs, children, crops and fruits — a people settled in plenty by every measure the world keeps. And then the line that turns all of it: with all of that, they worshipped others besides God. The abundance was not the problem; what they did with it was. A nation strong enough to feel it answered to nothing had decided, as a people, that it owed its Maker nothing — and when His messenger came to correct that, they called him a liar.",
            "bn": "ইবন কাসীর আরও বলেন: আল্লাহ তাদের দিয়েছিলেন অফুরান রিজিক, ধনসম্পদ, বাগান আর ঝরনা, সন্তান, ফসল ও ফলমূল—দুনিয়ার সব মাপকাঠিতেই প্রাচুর্যে থিতু এক জাতি। এরপর আসে সেই কথা, যা সবকিছু উল্টে দেয়: এত কিছুর পরও তারা আল্লাহকে বাদ দিয়ে অন্যদের ইবাদত করত। প্রাচুর্য সমস্যা ছিল না, সমস্যা ছিল তা দিয়ে তারা কী করল তাতে। এত শক্তিশালী এক জাতি, যে নিজেকে কারও কাছে দায়বদ্ধ নয় বলে ভাবত, জাতি হিসেবেই ঠিক করে নিয়েছিল যে স্রষ্টার কাছে তাদের কোনো দেনা নেই। আর তাঁর রসূল যখন তা শুধরে দিতে এলেন, তারা তাঁকে মিথ্যাবাদী বলল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Pattern Each Nation Walks",
          "bn": "প্রতিটি জাতির একই ছক"
        },
        "p": [
          {
            "en": "Al-Qurtubi, having explained the grammar, adds a brief note on the meaning: their denial of the messengers is as has already come before. He is pointing back to Nūḥ's people a few verses earlier, and forward, because the surah will lay down the same frame for nation after nation. Each account opens with a people denying; a brother-warner rises from among them; he asks only that they fear God and obey; he seeks no payment; they refuse; ruin follows; and the passage closes that in this is a sign, and your Lord is the Exalted in Might, the Merciful.",
            "bn": "ব্যাকরণ বুঝিয়ে কুরতুবী অর্থ নিয়ে ছোট্ট একটা মন্তব্য জোড়েন: রসূলগণকে তাদের অস্বীকার করা আগে যেমন বলা হয়েছে তেমনই। তিনি আঙুল তুলছেন কয়েক আয়াত আগের নূহ (আঃ)-এর সম্প্রদায়ের দিকে, আর সামনের দিকেও, কারণ সূরা জাতির পর জাতির জন্য একই ছক বিছিয়ে দেবে। প্রতিটি বৃত্তান্ত শুরু হয় এক জাতির অস্বীকার দিয়ে; তাদেরই ভেতর থেকে ওঠেন এক ভাই-সতর্ককারী; তিনি কেবল চান তারা আল্লাহকে ভয় করুক আর তাঁকে মানুক; কোনো প্রতিদান চান না; তারা অস্বীকার করে; ধ্বংস নামে; আর অনুচ্ছেদ শেষ হয় এই কথায় যে এতে আছে এক নিদর্শন, আর তোমার প্রতিপালক প্রবল পরাক্রান্ত, পরম দয়ালু।"
          },
          {
            "en": "Why tell it the same way each time? Because the sameness is the lesson. These are not unrelated disasters of history; they are one recurring choice, photographed at different addresses. A people is offered the truth for free by someone it knows, it prefers its own comfort and pride, and it talks itself into treating the warner as the problem. Reading ʿĀd beside Nūḥ (AS), the listener is meant to feel the familiarity and grow uneasy: if the script has run this way so often, the question is not whether I would have denied, but where in the script I am standing now.",
            "bn": "প্রতিবার একইভাবে বলা কেন? কারণ এই একরকম হওয়াটাই শিক্ষা। এগুলো ইতিহাসের বিচ্ছিন্ন কিছু বিপর্যয় নয়; এ একটাই বারবার ফিরে আসা সিদ্ধান্ত, শুধু ভিন্ন ভিন্ন ঠিকানায় তোলা ছবি। চেনা কেউ বিনা মূল্যে একটা জাতিকে সত্যের ডাক দেয়, জাতিটা নিজের আরাম আর অহংকারকেই বেছে নেয়, আর নিজেকে বুঝিয়ে ফেলে যে সতর্ককারীই আসল সমস্যা। নূহ (আঃ)-এর পাশে ‘আদকে পড়তে পড়তে শ্রোতার চেনা-চেনা লাগার আর অস্বস্তি বোধ করার কথা: ছকটা যদি এত বারই এভাবে চলে থাকে, তবে প্রশ্ন এই নয় যে আমি অস্বীকার করতাম কি না, বরং প্রশ্ন হলো ছকের কোন জায়গায় আমি এখন দাঁড়িয়ে আছি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophets' Shared Creed",
          "bn": "নবীদের অভিন্ন দ্বীন"
        },
        "p": [
          {
            "en": "The verse's logic, that to deny one is to deny all, has a clear echo in the Sunnah. Al-Bukhari records in his Sahih, from Abu Hurayrah (RA), that the Messenger of God ﷺ said: 'Both in this world and in the Hereafter, I am the nearest of all people to Jesus, the son of Mary. The prophets are paternal brothers; their mothers are different, but their religion is one.' Being in Bukhari's Sahih, the report is graded authentic by its collector, the highest standing a narration can hold. The wording is given here exactly as al-Bukhari records it, not blended with any other version.",
            "bn": "আয়াতের যুক্তি, অর্থাৎ একজনকে অস্বীকার করা মানে সবাইকে অস্বীকার করা, সুন্নাহতেও স্পষ্ট প্রতিধ্বনি তোলে। বুখারী তাঁর সহীহ গ্রন্থে আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর রসূল ﷺ বলেছেন: ‘দুনিয়া ও আখিরাত উভয়েই আমি মারইয়াম-তনয় ঈসার সবচেয়ে কাছের মানুষ। নবীগণ বৈমাত্রেয় ভাই; তাঁদের মা ভিন্ন ভিন্ন, কিন্তু তাঁদের দ্বীন একই।’ হাদীসটি বুখারীর সহীহতে থাকায় এর সংকলকের বিচারে এটি সহীহ, যা কোনো বর্ণনার সর্বোচ্চ মর্যাদা। শব্দগুলো এখানে ঠিক যেভাবে বুখারী বর্ণনা করেছেন সেভাবেই দেওয়া, অন্য কোনো সংস্করণের সঙ্গে মেশানো নয়।"
          },
          {
            "en": "The point that unlocks the verse is in the last phrase: their religion is one. The prophets differ as half-brothers differ, in the era they lived, the law suited to their people, the details of practice — but the father is one, and so is the creed: God alone is to be worshipped. That is why denying any single messenger is denying the whole line. The quarrel ʿĀd picked was never with Hūd (AS) as a man; it was with the one message he carried, the same message that every brother before and after him was sent to deliver. To split them apart is to misread every one of them.",
            "bn": "আয়াতের তালা খুলে দেয় শেষ কথাটা: তাঁদের দ্বীন একই। নবীগণ আলাদা হন যেমন বৈমাত্রেয় ভাইয়েরা আলাদা হয়: কোন যুগে বেঁচেছেন, নিজ সম্প্রদায়ের জন্য কেমন শরীয়ত পেয়েছেন, আমলের খুঁটিনাটি কেমন, সেসবে। কিন্তু বাবা একজনই, আর আকীদাও একটাই: কেবল আল্লাহরই ইবাদত। এ কারণেই কোনো একজন রসূলকে অস্বীকার করা গোটা ধারাটিকেই অস্বীকার করা। ‘আদ যে ঝগড়া বাধাল তা কখনোই মানুষ হূদ (আঃ)-এর সঙ্গে ছিল না; ছিল তিনি যে একটিমাত্র বার্তা বয়ে এনেছিলেন তার সঙ্গে, যে বার্তা তাঁর আগে-পরে প্রত্যেক ভাইকেই পাঠিয়ে দেওয়া হয়েছিল। তাঁদের আলাদা করে ফেলা মানে তাঁদের প্রত্যেককেই ভুল বোঝা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign, Not a Sentence",
          "bn": "নিদর্শন, কারও বিরুদ্ধে অস্ত্র নয়"
        },
        "p": [
          {
            "en": "This has to be said plainly. ʿĀd are a people the Qur'an condemns, and their story ends in ruin; but the verse describes what the text describes, and it licenses nothing against any living person or community. Their denial is set down as a sign to be learned from, never as a charge any reader may lay against a neighbour, a tribe, or a nation today. The Qur'an itself frames the account that way: in this is a sign. A sign is given to warn whoever reads it, not to arm him against someone else. The same discipline guards every story of a ruined people here.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ‘আদ এমন এক জাতি, কুরআন যাদের নিন্দা করে, আর তাদের কাহিনি শেষ হয় ধ্বংসে; কিন্তু আয়াত যা বর্ণনা করছে তা-ই বর্ণনা করছে, আর এ কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। তাদের অস্বীকার লিপিবদ্ধ হয়েছে শিক্ষা নেওয়ার নিদর্শন হিসেবে, আজকের কোনো প্রতিবেশী, গোত্র বা জাতির বিরুদ্ধে কোনো পাঠকের তোলার মতো অভিযোগ হিসেবে নয়। কুরআন নিজেই বৃত্তান্তটা এভাবেই গড়ে দেয়: এতে আছে এক নিদর্শন। নিদর্শন দেওয়া হয় পাঠককে সতর্ক করতে, অন্য কারও বিরুদ্ধে তাকে অস্ত্র জোগাতে নয়। কুরআনে ধ্বংস হওয়া প্রতিটি জাতির কাহিনিতেই এই একই সংযম খাটে।"
          },
          {
            "en": "The danger in a story like this is to read it outward, as a verdict on other people, when the Qur'an points it inward. ʿĀd is not a label to pin on groups we already dislike; it is a warning about a posture any heart can take — strength that forgets its Giver, and a reflex of calling the truth a lie when it asks something of us. The right response is not to find today's ʿĀd in someone else. It is to search our own lives for the places where a clear call has been quietly denied.",
            "bn": "এমন কাহিনিতে বিপদ হলো একে বাইরের দিকে পড়া, অন্য মানুষের উপর রায় হিসেবে, অথচ কুরআন একে ভেতরের দিকে তাক করে। ‘আদ এমন কোনো তকমা নয় যা আগে থেকেই অপছন্দের দলের গায়ে সেঁটে দেওয়া যায়; এ এমন এক মনোভাব নিয়ে সতর্কবাণী, যা যেকোনো হৃদয় ধরতে পারে: দাতাকে ভুলে যাওয়া শক্তি, আর কিছু চাইলেই সত্যকে মিথ্যা বলার অভ্যাস। সঠিক জবাব আজকের ‘আদকে অন্য কারও মধ্যে খুঁজে বের করা নয়। সঠিক জবাব হলো নিজেদের জীবনে সেই জায়গাগুলো খোঁজা, যেখানে স্পষ্ট এক ডাককে চুপচাপ অস্বীকার করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Call Today",
          "bn": "আজ সেই ডাক যাচাই"
        },
        "p": [
          {
            "en": "So the verse leaves the reader with a single, searching question: how do I meet a call I suspect is true? ʿĀd met theirs by refusing to weigh it at all; the verdict came first, and the man was dismissed before his message was heard. A believing heart does the opposite. It holds the summons up to the light, asks whether what it says is true, and lets the answer decide — not the speaker's status, not whether obeying will cost comfort, not what the crowd around it has already settled on. That weighing is the whole of faith's courage: to let truth outrank everything that usually decides us.",
            "bn": "তাই আয়াত পাঠকের সামনে রেখে যায় একটিমাত্র খোঁচা-দেওয়া প্রশ্ন: যে ডাককে আমি সত্য বলে সন্দেহ করি, তার সঙ্গে আমি কী আচরণ করি? ‘আদ নিজেদের ডাকের সঙ্গে আচরণ করল তা একটুও যাচাই না করে; রায়টা আগে এসে গেল, আর বার্তা শোনার আগেই মানুষটাকে উড়িয়ে দেওয়া হলো। মু’মিন হৃদয় করে ঠিক উল্টোটা। সে ডাককে আলোর সামনে তুলে ধরে, জিজ্ঞেস করে এ যা বলছে তা সত্য কি না, আর জবাবকেই সিদ্ধান্ত নিতে দেয়: বক্তা কত বড় তা নয়, মানলে আরাম খোয়াতে হবে কি না তা নয়, চারপাশের ভিড় আগে থেকে কী ঠিক করে রেখেছে তা-ও নয়। এই যাচাই করাটাই ঈমানের সাহসের পুরোটা: যা সাধারণত আমাদের সিদ্ধান্ত নেয়, সত্যকে তার সবার ওপরে রাখা।"
          },
          {
            "en": "There is mercy in seeing the pattern clearly, because a pattern once seen can be broken. The same surah that records how ʿĀd fell also keeps repeating that your Lord is the Exalted in Might, the Merciful — strong enough to hold the deniers to account, and merciful enough to receive whoever turns back. The reader who lets this verse examine him, rather than someone else, is already standing where ʿĀd refused to stand: close enough to the call to actually hear it, and honest enough to let it change how he lives. That is the one posture the surah holds out as the way home.",
            "bn": "ছকটা স্পষ্ট দেখতে পারার মধ্যেই রহমত আছে, কারণ যে ছক একবার চোখে ধরা পড়ে, তা ভাঙাও যায়। যে সূরা ‘আদের পতন লিপিবদ্ধ করে, সেই সূরাই বারবার বলে যায় যে তোমার প্রতিপালক প্রবল পরাক্রান্ত, পরম দয়ালু। অস্বীকারকারীদের হিসাব নেওয়ার মতো যথেষ্ট পরাক্রমশালী, আবার যে ফিরে আসে তাকে কবুল করার মতো যথেষ্ট দয়ালু। যে পাঠক এ আয়াতকে অন্য কাউকে নয়, নিজেকেই যাচাই করতে দেয়, সে আসলে সেখানেই দাঁড়িয়ে, যেখানে ‘আদ দাঁড়াতে রাজি হয়নি: ডাকের এত কাছে যে সত্যিই তা শুনতে পায়, আর এত সৎ যে তা দিয়ে নিজের জীবন বদলাতে দেয়। সূরা ঘরে ফেরার পথ হিসেবে এই একমাত্র মনোভাবটাই তুলে ধরে।"
          }
        ]
      }
    ]
  },
  "26:128": {
    "sections": [
      {
        "h": {
          "en": "A Question, Not a Ban",
          "bn": "নিষেধ নয়, একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Hud stands before his people and puts to them a question that is really a charge: do you build on every height a sign, amusing yourselves? Five short words in Arabic, and three of them have been argued over for centuries: rīʿ, the place he names; āyah, the thing they raise; and taʿbathūn, what they are doing in raising it. The sentence opens with the hamza of inquiry, so it does not forbid outright. It asks, and lets the people hear how their own habit sounds said aloud.",
            "bn": "হূদ (আঃ) তাঁর জাতির সামনে দাঁড়িয়ে এমন একটি প্রশ্ন রাখেন যা আসলে এক অভিযোগ: তোমরা কি প্রতিটি উঁচু জায়গায় একটা নিদর্শন গড়ছ, কেবল খেলার ছলে? আরবিতে পাঁচটি ছোট শব্দ, আর তার তিনটি নিয়ে যুগ যুগ ধরে মতভেদ চলেছে: রীʿ, যে জায়গার কথা তিনি বলেন; আয়াত, যা তারা গড়ে তোলে; আর তাʿবাসূন, সেটা গড়ার পেছনে তাদের নিয়তটা কী। বাক্যটি শুরু হয় প্রশ্নের হামযা দিয়ে, তাই এটি সরাসরি নিষেধ করে না। এটি প্রশ্ন করে, আর জাতিকে শোনায় নিজেদের অভ্যাসটা মুখে বললে কেমন শোনায়।"
          },
          {
            "en": "It matters to hear the question rightly from the start. Ibn Kathir reads the rebuke as aimed not at building but at building done in vain: they raised these works not because they needed them, he says, but out of play, idle display, and a wish to show off their strength. The fault his prophet names is the waste of it, the hands and the days spent on something that served them in neither this world nor the next. The stone is not the sin. The emptiness behind it is.",
            "bn": "প্রথম থেকেই প্রশ্নটা ঠিকভাবে শোনা জরুরি। ইবন কাসীর এই ভর্ৎসনাকে পড়েন ইমারতের বিরুদ্ধে নয়, বরং অনর্থক ইমারত গড়ার বিরুদ্ধে। তিনি বলেন, এসব তারা গড়ত প্রয়োজনে নয়, গড়ত খেলার ছলে, অনর্থক দেখনদারিতে আর নিজেদের শক্তি জাহির করার বাসনায়। তাদের নবী যে দোষটা ধরিয়ে দেন তা হলো এর অপচয়, দুনিয়া বা আখিরাত কোনোটাতেই কাজে আসে না এমন জিনিসের পেছনে ঢালা হাত আর দিনগুলো। পাথরটা গুনাহ নয়। গুনাহ হলো তার পেছনের শূন্যতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Hill, Road, or Pass",
          "bn": "উঁচু জমি, পথ, না গিরিপথ"
        },
        "p": [
          {
            "en": "What is a rīʿ? At-Tabari gathers the word's senses into one: every raised and overlooking place of the earth, or a road, or a valley, and he notes it carries two vowellings, rīʿ and rayʿ. The oldest reading he reports comes from Ibn ʿAbbas, who glossed it simply as a height, a point of ground that rises above its surroundings. Abu ʿUbaydah, the early philologist, agrees that a rīʿ is an elevated place, and as-Saʿdi settles on much the same: a pass that opens between the mountains, a spot that stands high and is seen from far off.",
            "bn": "রীʿ জিনিসটা কী? তাবারী শব্দটির অর্থগুলো একটি জায়গায় জড়ো করেন: জমির প্রতিটি উঁচু ও চারপাশের উপর তাকিয়ে থাকা জায়গা, কিংবা পথ, কিংবা উপত্যকা। তিনি জানান, শব্দটির দুই রকম উচ্চারণ আছে, রীʿ আর রায়ʿ। সবচেয়ে পুরোনো যে ব্যাখ্যা তিনি আনেন তা ইবন ‘আব্বাস থেকে, যিনি একে সোজা অর্থে বলেন উঁচু জায়গা, চারপাশের চেয়ে মাথা তুলে দাঁড়ানো ভূমি। প্রাচীন ভাষাবিদ আবু উবাইদাও মানেন যে রীʿ হলো উঁচু জায়গা, আর সা'দী প্রায় একই কথায় থামেন: পাহাড়ের মাঝে খুলে যাওয়া গিরিপথ, দূর থেকে চোখে পড়া উঁচু এক জায়গা।"
          },
          {
            "en": "Others read the word very differently. Qatadah, ad-Dahhak, and al-Kalbi take rīʿ to mean a road, the open way that travellers follow, and this sense too was narrated from Ibn ʿAbbas on another chain. Mujahid pulls it elsewhere: a rīʿ is a mountain pass, the gap that runs between two peaks, and once he names it a small defile. ʿIkrimah joins the pass to a valley. An-Nahhas, surveying the usage, concludes that in Arabic the word is genuinely applied both to high ground and to a road, so this dispute is no slip by one side but a real width inside the word.",
            "bn": "অন্যরা শব্দটি পড়েন একেবারে ভিন্নভাবে। কাতাদা, দাহহাক আর কালবী রীʿ অর্থে নেন পথ, পথিকেরা যে খোলা রাস্তা ধরে চলে। এই অর্থও ইবন ‘আব্বাস থেকে আরেক সনদে বর্ণিত হয়েছে। মুজাহিদ একে টানেন অন্য দিকে: রীʿ হলো গিরিপথ, দুই চূড়ার মাঝে চলে যাওয়া ফাঁক, আর এক জায়গায় তিনি একে বলেন ছোট এক গিরিসংকট। ইকরিমা গিরিপথের সঙ্গে জোড়েন উপত্যকা। নাহহাস ভাষার ব্যবহার ঘেঁটে সিদ্ধান্তে আসেন যে আরবিতে শব্দটি সত্যিই উঁচু জমি আর পথ, দুটোর জন্যই চলে। তাই এই মতভেদ কোনো একটি পক্ষের ভুল নয়, বরং শব্দটার ভেতরকার আসল প্রশস্ততা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Landmark to Be Seen",
          "bn": "চোখে পড়ার মতো নিদর্শন"
        },
        "p": [
          {
            "en": "If rīʿ is the where, āyah is the what. At-Tabari explains that āyah here means a building, a conspicuous landmark, and he reminds the reader that āyah everywhere in the Qur'an carries the sense of a sign, a marker that points beyond itself. Ibn ʿAbbas glosses it in a word, a landmark; Mujahid too reads it as a built marker. So the thing ʿAd raised was not a dwelling tucked into the land but a sign set on a height, made to be read from a distance, a shape on the skyline that announced who had put it there.",
            "bn": "রীʿ যদি হয় কোথায়, আয়াত তবে কী। তাবারী বুঝিয়ে বলেন, এখানে আয়াত মানে একটি ইমারত, চোখে পড়ার মতো নিদর্শন। তিনি পাঠককে মনে করিয়ে দেন, কুরআনজুড়ে আয়াত শব্দটি বহন করে নিশানার অর্থ, এমন এক চিহ্ন যা নিজের বাইরের কিছুর দিকে ইশারা করে। ইবন ‘আব্বাস একে এক শব্দে বলেন নিশানা; মুজাহিদও পড়েন গড়া এক চিহ্ন হিসেবে। তাই ‘আদ যা গড়ত তা জমির কোলে গুঁজে রাখা কোনো বাসস্থান নয়, বরং উঁচুতে বসানো এক নিশানা, দূর থেকে পড়ার মতো করে বানানো, আকাশরেখায় এমন এক আকৃতি যা জানিয়ে দিত কে এটি সেখানে বসিয়েছে।"
          },
          {
            "en": "Ibn Kathir draws the scene more sharply. The commentators, he says, differed over rīʿ, but in sum it is an elevated spot at a well-known crossroads, and there ʿAd would raise a huge, dazzling, solid structure, a famous landmark for all to see. Ma'arif al-Qur'an notes that āyah literally means a symbol or sign, yet here points to a towering palace. The two readings meet in one image: something built high and built grand, set where the most eyes would fall on it, so that the building itself became the message its makers wanted sent.",
            "bn": "ইবন কাসীর দৃশ্যটা আঁকেন আরও স্পষ্ট করে। তিনি বলেন, রীʿ নিয়ে তাফসীরকারেরা মতভেদ করেছেন, তবে সারকথায় এটি বিখ্যাত কোনো চৌরাস্তার ধারে উঁচু এক জায়গা, আর সেখানে ‘আদ গড়ত বিশাল, চোখ ধাঁধানো, মজবুত এক ইমারত, সবার চোখে পড়ার মতো নামকরা নিদর্শন। মাআরিফুল কুরআন জানায়, আয়াতের আভিধানিক অর্থ প্রতীক বা চিহ্ন, তবে এখানে তা ইশারা করে আকাশচুম্বী এক প্রাসাদের দিকে। দুই ব্যাখ্যা মিলে যায় একটি ছবিতে: উঁচু আর জমকালো করে গড়া এমন কিছু, যা বসানো হতো যেখানে সবচেয়ে বেশি চোখ পড়বে, যাতে ইমারতটাই হয়ে ওঠে তার নির্মাতাদের পাঠানো বার্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for Vanity",
          "bn": "অনর্থ শব্দটির মানে"
        },
        "p": [
          {
            "en": "The last word of the verse decides its tone. Taʿbathūn comes from ʿabath, and at-Tabari reports the plain gloss handed down from Ibn ʿAbbas and ad-Dahhak: it means you are playing. Ma'arif al-Qur'an gives the root its fuller edge, for ʿabath is whatever has no worth and no benefit, in fact or in effect. To call the building ʿabath is not to say it was ugly or unstable. It is to say it answered no genuine need, that its whole reason for standing was the doing of it and the being seen.",
            "bn": "আয়াতের শেষ শব্দটাই এর সুর ঠিক করে দেয়। তাʿবাসূন এসেছে ‘আবাস থেকে, আর তাবারী আনেন ইবন ‘আব্বাস ও দাহহাক থেকে চলে আসা সাদামাটা ব্যাখ্যা: মানে তোমরা খেলছ। মাআরিফুল কুরআন ধাতুটির আরও পূর্ণ ধারটা তুলে ধরে, কারণ ‘আবাস হলো যার কোনো মূল্য নেই, কোনো উপকার নেই, না বাস্তবে না ফলে। ইমারতকে ‘আবাস বলা মানে এই নয় যে তা কুৎসিত বা নড়বড়ে ছিল। এর মানে, তা সত্যিকারের কোনো প্রয়োজন মেটাত না, দাঁড়িয়ে থাকার গোটা কারণটাই ছিল করার জন্য করা আর দেখিয়ে বেড়ানো।"
          },
          {
            "en": "As-Saʿdi reads it the same way: they did this in vain, for no benefit returning to them in their religion or their worldly life. Ibn Kathir presses the point hardest. They built, he says, not out of need but out of sheer frivolity, for amusement and to parade their power, and for exactly this their prophet reproached them, because it squandered their time and wore out their bodies to no purpose, a labour that profited them nothing in this world and nothing in the next. The grandeur was real. The gain was none.",
            "bn": "সা'দীও একইভাবে পড়েন: তারা এটি করত অনর্থক, নিজেদের দ্বীন বা দুনিয়ার জীবনে ফিরে আসে এমন কোনো উপকার ছাড়াই। ইবন কাসীর কথাটা চাপেন সবচেয়ে জোরে। তিনি বলেন, তারা গড়ত প্রয়োজনে নয়, নিছক খেলার ছলে, আমোদের জন্য আর নিজেদের ক্ষমতা জাহির করতে। ঠিক এ কারণেই তাদের নবী তাদের তিরস্কার করেন, কারণ এতে নষ্ট হতো তাদের সময়, আর কোনো উদ্দেশ্য ছাড়াই কাহিল হতো তাদের শরীর, এমন এক খাটুনি যা দুনিয়াতেও কিছু দিত না, আখিরাতেও কিছু দিত না। জাঁকজমকটা ছিল সত্যি। লাভটা ছিল শূন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Towers Over the Travelers",
          "bn": "পথিকের উপর উঁচু মিনার"
        },
        "p": [
          {
            "en": "The commentators who read rīʿ as a road draw out a sharper picture of the play. Al-Qurtubi and al-Baghawi report that ʿAd built on the heights so they could look down on the people passing below and mock them, lording the view over whoever walked the road. Al-Qurtubi adds a variant from al-Kalbi, passed on by al-Mawardi, that the sport was the greed of tax-takers toying with the goods of those who passed. On this reading the monument was not only idle but cruel, a platform raised over others to belittle them for amusement.",
            "bn": "যে তাফসীরকারেরা রীʿ অর্থে পথ নেন, তাঁরা এই খেলার আরও স্পষ্ট এক ছবি টানেন। কুরতুবী আর বাগভী জানান, ‘আদ উঁচু জায়গায় গড়ত যাতে নিচ দিয়ে যাওয়া লোকদের দিকে তাকিয়ে তাদের তুচ্ছ করতে পারে, পথ ধরে যে-ই চলুক তার উপর নিজেদের উঁচু অবস্থানটা জাহির করতে পারে। কুরতুবী কালবী থেকে একটি ভিন্ন বর্ণনাও জোড়েন, যা মাওয়ারদীর মাধ্যমে এসেছে, যে এই খেলাটা ছিল কর-আদায়কারীদের লোভ, পথচারীদের মালামাল নিয়ে ছিনিমিনি খেলা। এই পাঠে সৌধটা কেবল অনর্থক ছিল না, ছিল নিষ্ঠুরও, অন্যদের উপর তুলে রাখা এমন এক মঞ্চ যেখান থেকে আমোদের জন্য তাদের ছোট করা হতো।"
          },
          {
            "en": "A quieter reading survives in several of the same books. Mujahid, in a report at-Tabari preserves, took the āyah to be dovecote towers, and al-Baghawi carries the same from Saʿid ibn Jubayr and Mujahid, with Hud rebuking the keeping of them. Their proof is the very word taʿbathūn, you play, since ʿAd are said to have amused themselves with pigeons. Whether tower or landmark or dovecote, the readings converge on one thing: these were structures of leisure and display, raised to be admired or enjoyed, not to shelter a family or feed a town.",
            "bn": "একই বইগুলোর কয়েকটিতে আরও নিরিবিলি এক পাঠ টিকে আছে। তাবারীর রক্ষা করা এক বর্ণনায় মুজাহিদ আয়াতকে ধরেছেন পায়রার দালান বলে, আর বাগভী একই কথা আনেন সাঈদ ইবন জুবায়ের ও মুজাহিদ থেকে, যেখানে হূদ (আঃ) সেগুলো পোষার সমালোচনা করেন। তাঁদের দলিল ঠিক তাʿবাসূন শব্দটাই, তোমরা খেলছ, কেননা বলা হয় ‘আদ পায়রা নিয়ে আমোদ করত। মিনার হোক, নিদর্শন হোক বা পায়রার দালান হোক, পাঠগুলো এসে মেলে একটি কথায়: এগুলো ছিল অবসর আর দেখনদারির ইমারত, প্রশংসা কুড়াতে বা ফুর্তি করতে গড়া, কোনো পরিবারকে আশ্রয় দিতে বা কোনো জনপদের মুখে অন্ন তুলে দিতে নয়।"
          },
          {
            "en": "One more reading deserves a hearing, because it seems almost innocent. ʿIkrimah and Muqatil, cited by al-Qurtubi, held that ʿAd used to steer by the stars when they travelled, and so raised tall markers along the way to guide themselves, which fits āyah as a sign. Yet even here the word taʿbathūn hangs over the deed, and al-Muyassar keeps the judgement plain: whatever the markers were for, the building was vanity and extravagance, bringing them no profit in religion or in this life. Purpose, not stone, is what the verse weighs.",
            "bn": "আরও একটি পাঠ শোনার দাবি রাখে, কারণ সেটি প্রায় নিষ্পাপ মনে হয়। কুরতুবীর উদ্ধৃত ইকরিমা ও মুকাতিলের মত ছিল, ‘আদ সফরে বেরোলে নক্ষত্র দেখে পথ ঠিক করত, তাই পথের ধারে উঁচু নিশানা গড়ত নিজেদের পথ চেনাতে, যা আয়াতকে নিশানা অর্থে মানায়। তবু এখানেও তাʿবাসূন শব্দটা কাজটার উপর ঝুলে থাকে, আর মুয়াসসার রায়টা সাফ রাখে: নিশানা যে জন্যই হোক, গড়াটা ছিল অনর্থ আর অপচয়, দ্বীনে বা এই জীবনে তাদের কোনো লাভ এনে দিত না। পাথর নয়, নিয়তই আয়াত যা ওজন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Stone, the Heart",
          "bn": "পাথর নয়, অন্তরের রোগ"
        },
        "p": [
          {
            "en": "The next breath of the passage shows what the real disease was. In 26:129 Hud goes on: and you take for yourselves strongholds, as if you might live forever. Ma'arif al-Qur'an notes that the word masaniʿ was read by Qatadah as water-tanks and by Mujahid as fortresses built strong to last, and that al-Bukhari explained the as if of the verse as a figure of speech, so that the sense Ibn ʿAbbas gave it is as though you will abide eternally. The grasping after permanence is the thread that ties the monument to the fortress.",
            "bn": "আয়াতের পরের নিঃশ্বাসেই ধরা পড়ে আসল রোগটা কী ছিল। ২৬:১২৯ আয়াতে হূদ (আঃ) বলে চলেন: আর তোমরা নিজেদের জন্য বানাও মজবুত দুর্গ, যেন তোমরা চিরকাল বেঁচে থাকবে। মাআরিফুল কুরআন জানায়, মাসানিʿ শব্দটি কাতাদা পড়েছেন পানির চৌবাচ্চা অর্থে আর মুজাহিদ পড়েছেন দীর্ঘস্থায়ী করে গড়া দুর্গ অর্থে, আর বুখারী আয়াতের 'যেন' কথাটিকে ব্যাখ্যা করেছেন উপমার ভঙ্গি হিসেবে, যাতে ইবন ‘আব্বাসের দেওয়া অর্থ দাঁড়ায় 'যেন তোমরা চিরস্থায়ী হবে'। স্থায়িত্বের পেছনে এই আঁকড়ে ধরাই সেই সুতো যা নিদর্শনকে জুড়ে দেয় দুর্গের সঙ্গে।"
          },
          {
            "en": "Ma'arif al-Qur'an states the lesson it draws without softening it: to put up houses and buildings beyond any need is a blameworthy act, and under the Prophet's teaching the raising of tall buildings without genuine requirement is contemptible. Read carelessly, that could sound like a verdict against architecture itself. It is not. Within this very passage Hud reminds ʿAd of the gifts God had lavished on them, and in 26:134 names gardens and springs among them, as blessings, not faults. What the verse strikes at is the surplus built for show and the heart that wants to be remembered in stone.",
            "bn": "মাআরিফুল কুরআন যে শিক্ষা টানে তা নরম না করেই বলে: প্রয়োজনের বাইরে ঘরবাড়ি আর ইমারত তোলা এক নিন্দনীয় কাজ, আর নবী ﷺ-এর শিক্ষায় সত্যিকারের দরকার ছাড়া উঁচু ইমারত গড়া ঘৃণ্য। অসাবধানে পড়লে এটি স্থাপত্যশিল্পের বিরুদ্ধেই রায় বলে শোনাতে পারে। তা নয়। এই আয়াতগুচ্ছেই হূদ (আঃ) ‘আদকে মনে করিয়ে দেন আল্লাহ তাদের যে দান ঢেলে দিয়েছেন, আর ২৬:১৩৪ আয়াতে বাগান ও ঝর্ণাকে সেগুলোরই মধ্যে গোনেন, নিয়ামত হিসেবে, দোষ হিসেবে নয়। আয়াত আঘাত হানে সেই বাড়তিটার উপর যা দেখানোর জন্য গড়া, আর সেই অন্তরের উপর যা পাথরে স্মরণীয় হয়ে থাকতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Rewarded for All but This",
          "bn": "সব খরচে সওয়াব, এক ছাড়া"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an does not leave the lesson to the commentators alone; it reaches for the Prophet's own words, citing a narration that building carries no merit once it passes beyond need. The soundest wording of that meaning is kept by at-Tirmidhi, who records that Harithah ibn Mudarrib visited Khabbab in his long illness and heard him report the Prophet's saying. A man is rewarded for all that he spends, the Prophet said, except for what he spends on the dust, or he said, on building.",
            "bn": "মাআরিফুল কুরআন শিক্ষাটা কেবল তাফসীরকারদের হাতেই ছাড়ে না; এটি হাত বাড়ায় নবী ﷺ-এর নিজের কথার দিকে, এমন এক বর্ণনা এনে যে প্রয়োজনের সীমা পেরোলে ইমারতে আর কোনো সওয়াব থাকে না। এই অর্থের সবচেয়ে বিশুদ্ধ ভাষ্যটি রেখে গেছেন তিরমিযী, যিনি বর্ণনা করেন যে হারিসা ইবন মুদাররিব খাব্বাবকে তাঁর দীর্ঘ অসুস্থতায় দেখতে যান আর তাঁর মুখে নবী ﷺ-এর বাণী শোনেন। নবী ﷺ বলেছেন, মানুষ তার সব খরচেই সওয়াব পায়, কেবল মাটিতে খরচ করা ছাড়া, কিংবা তিনি বলেছেন, ইমারতে খরচ করা ছাড়া।"
          },
          {
            "en": "At-Tirmidhi, whose kunya is Abu ʿIsa, grades the report himself as hasan sahih, fair and sound, so it stands without needing the weaker wordings that circulate on the same theme. Its point is narrow and must be kept narrow. It does not fault the house that shelters a family or the wall that guards a town; it faults the spending that goes past need into display, the very thing Hud named when he asked why a sign must crown every hill. A roof is a mercy. A monument to oneself is the ʿabath the verse warns against.",
            "bn": "তিরমিযী, যাঁর কুনিয়া আবু ঈসা, বর্ণনাটিকে নিজেই আখ্যা দেন হাসান সহীহ, অর্থাৎ উত্তম ও বিশুদ্ধ, তাই একই বিষয়ে ঘুরে বেড়ানো দুর্বল ভাষ্যগুলোর দরকার না পড়েই এটি দাঁড়িয়ে থাকে। এর কথাটা সংকীর্ণ, আর সংকীর্ণই রাখা চাই। পরিবারকে আশ্রয় দেওয়া ঘর বা জনপদকে আগলে রাখা দেয়ালকে এটি দোষ দেয় না; দোষ দেয় সেই খরচকে যা প্রয়োজন পেরিয়ে দেখনদারিতে গড়ায়, ঠিক সেই জিনিসটাই যা হূদ (আঃ) তুলে ধরেন যখন জিজ্ঞেস করেন প্রতিটি টিলার মাথায় কেন নিদর্শন বসাতে হবে। ছাদ এক রহমত। নিজের নামে সৌধ হলো সেই ‘আবাস, যার বিরুদ্ধে আয়াত সতর্ক করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Gone, a Warning Kept",
          "bn": "নিশ্চিহ্ন জাতি, টিকে থাকা সতর্কবাণী"
        },
        "p": [
          {
            "en": "This must be said plainly, in both tongues. ʿAd were a people the Qur'an records as destroyed for their rejection and their arrogance, and the verse describes what the text describes: a particular people, in a particular land, rebuked by their own prophet for what they built and why. It licenses nothing against any living person or community. It is no charge against builders, architects, engineers, or anyone whose trade is to raise walls and roofs. To turn a verse about one vanished nation's vanity into a weapon against the living is to misread it exactly backwards.",
            "bn": "কথাটা সাফ সাফ বলা দরকার, দুই ভাষাতেই। ‘আদ ছিল এমন এক জাতি, যাদের অস্বীকার আর অহংকারের কারণে ধ্বংস হওয়ার কথা কুরআন লিপিবদ্ধ করেছে। আর আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: এক নির্দিষ্ট জাতি, এক নির্দিষ্ট জনপদে, নিজেদেরই নবীর কাছে তিরস্কৃত তারা কী গড়ত আর কেন গড়ত সে জন্য। এটি জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এটি রাজমিস্ত্রি, স্থপতি, প্রকৌশলী বা দেয়াল আর ছাদ তোলা যাদের পেশা তাদের বিরুদ্ধে কোনো অভিযোগ নয়। নিশ্চিহ্ন হয়ে যাওয়া একটি জাতির অহমিকা নিয়ে নাজিল হওয়া আয়াতকে জীবিতদের বিরুদ্ধে অস্ত্র বানানো মানে আয়াতটিকে ঠিক উল্টো পড়া।"
          },
          {
            "en": "So the verse leaves the reader a question rather than a ban, the same question Hud left ʿAd. Why am I building this? Not the house I need, nor the work that serves, but the thing I raise mainly to be seen, the surplus poured out so others will look up and so I can feel I will last. The people of ʿAd are gone, and their heights with them; what their prophet asked still stands. Build for need and for good, and let what you leave behind be measured by whom it served, not by who admired it.",
            "bn": "তাই আয়াত পাঠকের সামনে নিষেধ নয়, রেখে যায় একটি প্রশ্ন, ঠিক যে প্রশ্ন হূদ (আঃ) রেখে গিয়েছিলেন ‘আদের সামনে। এটি আমি কেন গড়ছি? দরকারি ঘরটা নয়, কাজে লাগা শ্রমটাও নয়, বরং সেই জিনিস যা মূলত দেখানোর জন্যই তুলি, সেই বাড়তিটা যা ঢেলে দিই যাতে লোকে তাকিয়ে থাকে আর আমি ভাবতে পারি আমি টিকে থাকব। ‘আদ জাতি চলে গেছে, তাদের উঁচু সৌধও তাদের সঙ্গে; তাদের নবী যা জিজ্ঞেস করেছিলেন তা আজও দাঁড়িয়ে আছে। প্রয়োজনে আর কল্যাণে গড়ুন, আর আপনি যা রেখে যাবেন তার মাপ হোক সে কার কাজে এল তা দিয়ে, কে প্রশংসা করল তা দিয়ে নয়।"
          }
        ]
      }
    ]
  },
  "26:146": {
    "sections": [
      {
        "h": {
          "en": "The Question That Indicts",
          "bn": "যে প্রশ্ন দোষ ধরিয়ে দেয়"
        },
        "p": [
          {
            "en": "The verse is a question, not a statement: a-tutrakūna fī mā hāhunā āminīn — will you be left, in what is here, secure? At-Tabari reads it as Ṣāliḥ reporting God's challenge to his people, Thamūd: will your Lord leave you in this world, secure, fearing nothing? A statement can be waved away. A question has to be answered, and the only honest answer here turns back on the one who hears it. No one is left in such ease, untouched, forever — and at some level they already know it. That is why Ṣāliḥ asks rather than tells.",
            "bn": "আয়াতটি একটি প্রশ্ন, বিবৃতি নয়: আতুতরাকূনা ফী মা হাহুনা আমিনীন—তোমাদের কি এখানে যা আছে তাতে নিরাপদে রেখে দেওয়া হবে? তাবারী একে পড়েন সালিহ (আঃ)-এর মুখে তাঁর জাতি সামূদের প্রতি আল্লাহর প্রশ্ন হিসেবে: তোমাদের প্রতিপালক কি তোমাদের এই দুনিয়ায় নিরাপদে, কোনো ভয় ছাড়া রেখে দেবেন? বিবৃতি এড়িয়ে যাওয়া যায়। প্রশ্নের জবাব দিতেই হয়, আর এখানকার একমাত্র সৎ জবাব শ্রোতার দিকেই ফিরে আসে। কাউকে এমন আরামে, নিরাপদে, চিরকাল রাখা হয় না, আর মনের কোথাও তারা তা জানেও। তাই সালিহ (আঃ) বলেন না, জিজ্ঞেস করেন।"
          },
          {
            "en": "Notice where the question sits. It opens a list rather than closing an argument. The verses that follow, 26:147 to 26:149, spell out what here holds: gardens and springs, fields of crops and date-palms, homes carved with skill into the mountainside. The one word hāhunā, here, gathers all of it and asks whether it will be kept. Ṣāliḥ does not begin by naming a sin. He begins by naming their comfort and raising a quiet doubt about how long it lasts. The accusation comes later in the passage; the question about permanence comes first, and does the real work.",
            "bn": "প্রশ্নটা কোথায় বসেছে, খেয়াল করুন। এটি কোনো তর্ক শেষ করে না, বরং একটা তালিকা শুরু করে। পরের আয়াতগুলো, ২৬:১৪৭ থেকে ২৬:১৪৯, খুলে বলে এখানে কী কী আছে: বাগান আর ঝর্ণা, ফসলের খেত আর খেজুরবাগান, পাহাড় কেটে নিপুণভাবে বানানো ঘরবাড়ি। হাহুনা, মানে এখানে, এই একটি শব্দ সবটা জড়ো করে জিজ্ঞেস করে, এসব কি রেখে দেওয়া হবে। সালিহ (আঃ) কোনো গুনাহর নাম দিয়ে শুরু করেন না। তিনি শুরু করেন তাদের আরামের কথা বলে, আর সেটা কতদিন টেকে তা নিয়ে একটা চাপা সংশয় তুলে। অভিযোগ আসে পরে; স্থায়িত্ব নিয়ে প্রশ্নটাই আসে আগে আর আসল কাজটা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for Here",
          "bn": "'এখানে' শব্দটা"
        },
        "p": [
          {
            "en": "What does hāhunā, here, actually point at? Al-Baghawi gives the plainest gloss: fī mā hāhunā means in the world, and āminīn means secure from the punishment. Al-Muyassar fills the picture in: will your Lord leave you in the comfort you are in, settled in this world, secure from punishment, from ruin, and from death? The word is a pointing word. It does not name heaven or some distant estate; it gestures at what the hand can touch and the eye can count — the land these people stood on and the plenty spread across it. That nearness is the whole force of it.",
            "bn": "হাহুনা, মানে এখানে, আসলে কোন দিকে আঙুল তোলে? বাগাভী সবচেয়ে সোজা অর্থটা দেন: ফী মা হাহুনা মানে দুনিয়ায়, আর আমিনীন মানে শাস্তি থেকে নিরাপদ। মুয়াসসার ছবিটা পূর্ণ করেন: তোমরা এখন যে ভোগবিলাসে আছ, এই দুনিয়ায় থিতু হয়ে, শাস্তি থেকে, ধ্বংস থেকে আর মৃত্যু থেকে নিরাপদ, তোমাদের কি সেভাবেই রেখে দেওয়া হবে? শব্দটা আঙুল তোলার শব্দ। এটি জান্নাত বা দূরের কোনো সম্পত্তির নাম নেয় না; হাত যা ছুঁতে পারে আর চোখ যা গুনতে পারে, সেদিকেই ইশারা করে। এই জাতি যে মাটিতে দাঁড়িয়ে, আর তাতে ছড়ানো যে প্রাচুর্য, তারই দিকে। এই কাছাকাছি থাকাই এর গোটা জোর।"
          },
          {
            "en": "Why does nearness matter so much? Because what we can see tends to crowd out what we cannot. The plenty of Thamūd was real and it was close, and a thing that real and that close starts to feel like the floor under one's feet, not like a gift that could be withdrawn. Ṣāliḥ's here is pressing precisely on that reflex. He takes the visible world they trusted and attaches a question mark to it. Everything you can point to, he is saying, is exactly the part you should not rest your weight on, because it was never the permanent thing you treated it as.",
            "bn": "কাছাকাছি থাকাটা এত গুরুত্বপূর্ণ কেন? কারণ যা আমরা দেখতে পাই, তা যা দেখি না তাকে আড়াল করে দেয়। সামূদের প্রাচুর্য ছিল সত্যি আর ছিল কাছে, আর এত সত্যি এত কাছের জিনিস ধীরে ধীরে পায়ের নিচের মাটির মতো মনে হতে থাকে, এমন দান মনে হয় না যা ফিরিয়ে নেওয়া যায়। সালিহ (আঃ)-এর এখানে ঠিক এই অভ্যাসটার ওপরই চাপ দেয়। তারা যে দৃশ্যমান দুনিয়ার ওপর ভরসা করত, তিনি তাতেই একটা প্রশ্নচিহ্ন বসিয়ে দেন। তিনি যেন বলছেন, যা কিছু তুমি আঙুল তুলে দেখাতে পারো, সেটাই সেই জিনিস যার ওপর ভর ছেড়ে দেওয়া উচিত নয়, কারণ তুমি যেমন ভেবেছ তেমন স্থায়ী তা কখনোই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Secure From What, Exactly",
          "bn": "নিরাপদ, কিন্তু কিসের থেকে"
        },
        "p": [
          {
            "en": "Āminīn, secure — but the verse leaves the danger unnamed, and the commentators supply it in one voice. At-Tabari reads it as secure, fearing nothing. Al-Baghawi: secure from the punishment. Al-Qurtubi names both halves plainly: secure from death and from punishment. So the imagined safety was not safety from hunger or from enemies, which wealth can in fact buy for a while. It was safety from the two things no amount of plenty has ever bought off: the death that ends the plenty, and the reckoning that follows it. That is the security Ṣāliḥ holds up and questions.",
            "bn": "আমিনীন, মানে নিরাপদ, তবে আয়াত বিপদটার নাম বলে না, আর তাফসীরকারেরা একই সুরে তা জোগান। তাবারী পড়েন নিরাপদ, কিছুরই ভয় নেই। বাগাভী বলেন, শাস্তি থেকে নিরাপদ। কুরতুবী দুই দিকই সাফ বলে দেন: মৃত্যু আর শাস্তি, দুটো থেকেই নিরাপদ। অর্থাৎ যে নিরাপত্তা তারা কল্পনা করত, তা ক্ষুধা বা শত্রু থেকে নিরাপত্তা নয়, যা সম্পদ দিয়ে কিছুকালের জন্য সত্যিই কেনা যায়। তা ছিল সেই দুটো জিনিস থেকে নিরাপত্তা, যা কোনো প্রাচুর্য আজ পর্যন্ত ঠেকাতে পারেনি: যে মৃত্যু ভোগবিলাসের ইতি টানে, আর তার পরের যে হিসাব। সালিহ (আঃ) এই নিরাপত্তাকেই তুলে ধরে প্রশ্ন করেন।"
          },
          {
            "en": "There is a sharp point hidden in the choice of danger. Everyone fears something, and the comfortable usually fear the loss of their comfort: a bad harvest, a rival, a failing body. Ṣāliḥ does not deny those fears; he reaches past them to the one fear his people had quietly retired. They had made their peace with everything except death and what comes after it, and about those two they behaved as though the matter were settled in their favour. The verse does not ask them to be more anxious. It asks them to be anxious about the right thing, the thing they had agreed among themselves not to mention.",
            "bn": "কোন বিপদের কথা বলা হলো, সেই বাছাইয়ের ভেতরেই একটা ধারালো কথা লুকিয়ে। সবাই কিছু না কিছু ভয় পায়, আর আরামে থাকা মানুষ সাধারণত ভয় পায় তার আরাম হারানোর: খারাপ ফসল, প্রতিদ্বন্দ্বী, ভেঙে পড়া শরীর। সালিহ (আঃ) এসব ভয় অস্বীকার করেন না; তিনি এসব পেরিয়ে সেই একটা ভয়ের কাছে পৌঁছান, যা তাঁর জাতি চুপচাপ অবসরে পাঠিয়ে দিয়েছিল। মৃত্যু আর তার পরের জিনিস ছাড়া বাকি সবকিছুর সঙ্গে তারা আপস করে নিয়েছিল, আর এই দুটির বেলায় তারা এমন আচরণ করত যেন বিষয়টা তাদের পক্ষেই মিটে গেছে। আয়াত তাদের আরও দুশ্চিন্তাগ্রস্ত হতে বলে না। বলে ঠিক জিনিসটা নিয়ে দুশ্চিন্তা করতে, যে জিনিসের কথা তারা নিজেদের মধ্যে না তোলার সিদ্ধান্ত নিয়ে রেখেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Plenty Named as Reminder",
          "bn": "নিয়ামত স্মরণ করানোর জন্য"
        },
        "p": [
          {
            "en": "Ibn Kathir frames the whole passage as a reminder before it is a rebuke. In his Arabic commentary he says Ṣāliḥ was admonishing and warning them of the punishment that could fall, while reminding them of God's favours upon them in the abundant provision He had granted, and in making them secure from the things to be feared. The blessings in 26:147 to 26:149 are not scenery. They are the evidence Ṣāliḥ reads back to his people: the gardens, the flowing springs, the crops and fruit, the date-palms. Every item is first of all a gift, laid out so they can see Whose hand it came from.",
            "bn": "ইবন কাসীর গোটা আলোচনাটাকে তিরস্কারের আগে স্মরণ করানো হিসেবে দাঁড় করান। তাঁর আরবি তাফসীরে তিনি বলেন, সালিহ (আঃ) তাদের সদুপদেশ দিচ্ছিলেন আর যে শাস্তি নেমে আসতে পারে তা থেকে সতর্ক করছিলেন, পাশাপাশি স্মরণ করাচ্ছিলেন আল্লাহ তাদের ওপর যে অনুগ্রহ করেছেন—প্রচুর রিজিক দিয়ে, আর ভয়ের জিনিসগুলো থেকে নিরাপদ রেখে। ২৬:১৪৭ থেকে ২৬:১৪৯-এর নিয়ামতগুলো নিছক দৃশ্য নয়। এগুলো সেই প্রমাণ, যা সালিহ (আঃ) তাঁর জাতিকে পড়ে শোনান: বাগান, বয়ে চলা ঝর্ণা, ফসল আর ফল, খেজুরবাগান। প্রতিটি জিনিস সবার আগে একটি দান, এমনভাবে সাজানো যেন তারা দেখতে পায় কার হাত থেকে তা এসেছে।"
          },
          {
            "en": "Ibn Kathir dwells on one detail, the date-palms with softened fruit of 26:148. He reports from Ibn ʿAbbas that the phrase means the fruit grown ripe and rich, luxuriant, soft when it ripens. It is a small observation, and that is the point: the Qur'an notices the sweetness of the fruit the way a grateful person would. The homes carved into the mountain in the next verse belong to the same catalogue of gifts. Ṣāliḥ is not sneering at any of it. He is counting it aloud, so that the size of the blessing matches the size of the question he just asked about keeping it.",
            "bn": "ইবন কাসীর একটি খুঁটিনাটিতে থামেন, ২৬:১৪৮-এর ফুলে-ফলে ভরা নরম খেজুর। তিনি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, কথাটার অর্থ পেকে ওঠা রসালো ফল, ঘন হয়ে ফলা, পাকলে নরম। ছোট্ট, প্রায় কোমল একটা পর্যবেক্ষণ, আর সেটাই আসল কথা: কুরআন ফলের মিষ্টতা এমনভাবে লক্ষ করে যেমন করে একজন কৃতজ্ঞ মানুষ। পরের আয়াতে পাহাড় কেটে বানানো ঘরবাড়িও একই দান আর দক্ষতার তালিকায় পড়ে। সালিহ (আঃ) এর কোনোটাকে বিদ্রুপ করছেন না। তিনি উঁচু গলায় তা গুনছেন, যাতে নিয়ামতের আকার তিনি এইমাত্র যে প্রশ্ন করলেন তার আকারের সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dream of Staying",
          "bn": "থেকে যাওয়ার স্বপ্ন"
        },
        "p": [
          {
            "en": "Al-Qurtubi reaches for the mindset underneath the plenty. He glosses the verse as secure from death and punishment, and then cites Ibn ʿAbbas on who these people were: they were long-lived, so long-lived that their own buildings would not outlast their lifespans. He points to another verse for support, God's word in 11:61 that He gave Thamūd to settle and build in the land. Long life had taught them the wrong lesson. Because death kept its distance, they began to live as if it had forgotten the address, and their solid houses only deepened the trust that nothing here would be taken from them.",
            "bn": "কুরতুবী প্রাচুর্যের নিচে চাপা পড়ে থাকা মনোভাবটার দিকে হাত বাড়ান। তিনি আয়াতটির অর্থ করেন মৃত্যু আর শাস্তি থেকে নিরাপদ, তারপর ইবন আব্বাস (রাঃ) থেকে আনেন এরা কারা ছিল: এরা ছিল দীর্ঘায়ু, এতটাই যে তাদের নিজেদের বানানো ঘরবাড়িও তাদের আয়ুর সঙ্গে টিকত না। সমর্থনে তিনি আরেকটি আয়াতের দিকে ইশারা করেন, ১১:৬১-এ আল্লাহর বাণী যে তিনি সামূদকে এই জমিনে বসতি গড়ার সুযোগ দিয়েছিলেন। দীর্ঘ আয়ু তাদের ভুল শিক্ষা দিয়েছিল। মৃত্যু যেহেতু দূরত্ব বজায় রাখত, তারা এমনভাবে বাঁচতে শুরু করে যেন মৃত্যু তাদের ঠিকানা ভুলে গেছে, আর তাদের পোক্ত ঘরবাড়ি এই ভরসাটাই গভীর করে তোলে যে এখানকার কিছুই তাদের থেকে নেওয়া হবে না।"
          },
          {
            "en": "On this reading Ṣāliḥ's question is a reproach. Al-Qurtubi has him rebuke and reprove them with it, as if to say: do you really suppose you will go on in the world with no death at all? That is the dream the question is meant to wake them from. It is not stupidity, and it is not unique to Thamūd. It is the ordinary drift of a life that has been comfortable for long enough — the slow conversion of a temporary arrangement into an assumed permanence, until the thought of leaving feels not sobering but absurd, something that happens to other, less settled people.",
            "bn": "এই পাঠে সালিহ (আঃ)-এর প্রশ্নটা একটা তিরস্কার। কুরতুবীর বর্ণনায় তিনি এর দ্বারা তাদের ভর্ৎসনা করেন আর ধমক দেন, যেন বলছেন: তোমরা কি সত্যিই ভাবছ কোনো মৃত্যু ছাড়াই দুনিয়ায় টিকে থাকবে? প্রশ্নটা তাদের এই স্বপ্ন থেকেই জাগাতে চায়। এটা বোকামি নয়, আর কেবল সামূদের বেলায় ঘটে এমনও নয়। যথেষ্ট দিন আরামে কাটানো জীবনের এ এক সাধারণ টান, একটা সাময়িক বন্দোবস্তকে ধীরে ধীরে ধরে নেওয়া স্থায়িত্বে বদলে ফেলা, যতক্ষণ না বিদায়ের কথাটা আর সজাগ করে না বরং হাস্যকর ঠেকে, যেন তা ঘটে অন্য কারও, কম থিতু কোনো মানুষের বেলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Wealth, the Sleep",
          "bn": "সম্পদ নয়, গাফিলতি"
        },
        "p": [
          {
            "en": "It is worth saying plainly what the verse does not condemn. Ṣāliḥ counts the gardens, springs, crops and palms as favours from God, and a favour is not a fault. The charge is never the plenty itself. Al-Muyassar catches where the plenty curdled: he ends the list by describing the people as ashirīn baṭirīn — insolent and swollen with it, arrogant in their ease. The wealth was a gift; the swagger was theirs. What the verse indicts is not having much but resting in it as though it were owed, secure, and permanent, with the Giver and the reckoning both pushed out of view.",
            "bn": "আয়াত কী নিন্দা করে না, সেটা সোজাসুজি বলা দরকার। সালিহ (আঃ) বাগান, ঝর্ণা, ফসল আর খেজুরকে গোনেন আল্লাহর অনুগ্রহ হিসেবে, আর অনুগ্রহ কোনো দোষ নয়। অভিযোগ কখনোই প্রাচুর্যের নিজের বিরুদ্ধে নয়। প্রাচুর্য কোথায় গিয়ে বিষিয়ে গেল, মুয়াসসার তা ধরেন: তালিকা শেষ করেন এই জাতিকে আশিরীন বাতিরীন বলে—দাম্ভিক আর ফুলে-ওঠা, আরামে মত্ত। সম্পদ ছিল দান; দম্ভটা ছিল তাদের নিজের। আয়াত যা ধরিয়ে দেয় তা অনেক থাকা নয়, বরং তাতে এমনভাবে গা এলিয়ে দেওয়া যেন তা পাওনা, নিরাপদ আর চিরস্থায়ী, যেখানে দাতা আর হিসাব দুটোকেই চোখের আড়ালে ঠেলে দেওয়া হয়েছে।"
          },
          {
            "en": "Ibn Kathir sharpens the line in his English commentary. Of the mountain homes he notes two readings from Ibn ʿAbbas and Mujahid — carved with great skill, and carved out of greed and extravagance — and finds no contradiction: they hewed the houses as extravagant play, with no real need of them as dwellings. The skill was dazzling; the use was vanity. So the warning is not against building well or living well. It is against the state of mind that treats a lent world as a settled estate, and spends its gifts as if there were no one to answer to and no day the spending stops.",
            "bn": "ইবন কাসীর তাঁর ইংরেজি তাফসীরে কথাটা আরও ধারালো করেন। পাহাড়ের ঘরবাড়ি নিয়ে তিনি ইবন আব্বাস (রাঃ) আর মুজাহিদ থেকে দুটি পাঠ আনেন: অসাধারণ দক্ষতায় কাটা, আর লোভ ও অপচয়ে কাটা। তিনি বলেন এতে কোনো বিরোধ নেই, কারণ তারা এই ঘরগুলো কেটেছিল একরকম বাড়াবাড়ি খেলার ছলে, বাসস্থান হিসেবে এর আসল কোনো দরকার ছিল না। দক্ষতা ছিল চোখ-ধাঁধানো; ব্যবহারটা ছিল অহমিকা। তাই সতর্কবার্তা ভালো বানানো বা ভালোভাবে বাঁচার বিরুদ্ধে নয়। তা সেই মনোভাবের বিরুদ্ধে, যা ধার পাওয়া একটা দুনিয়াকে পাকাপাকি সম্পত্তি ভাবে, আর তার দান এমনভাবে খরচ করে যেন জবাব দেওয়ার কেউ নেই আর খরচ থামার কোনো দিনও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stranger's Measure",
          "bn": "মুসাফিরের মাপকাঠি"
        },
        "p": [
          {
            "en": "If the verse asks whether a person will be left here secure, the Prophet ﷺ gave his Companions the answer to live by. Al-Bukhari records that ʿAbdullah ibn ʿUmar said: the Messenger of God ﷺ took hold of my shoulder and said, \"Be in this world as if you were a stranger or a wayfarer.\" The wording is sound, carried in Bukhari's own collection. The image is exact for this verse. A stranger does not mistake the town he is passing through for home, and a traveller does not unpack as if the road were the destination. Neither expects to be left there.",
            "bn": "আয়াত যদি জিজ্ঞেস করে একজন মানুষকে কি এখানে নিরাপদে রেখে দেওয়া হবে, নবী ﷺ তাঁর সাহাবিদের সেই জবাবটাই দিয়েছেন যা ধরে বাঁচা যায়। বুখারী বর্ণনা করেন, আবদুল্লাহ ইবন উমর (রাঃ) বলেন: আল্লাহর রসূল ﷺ আমার কাঁধ ধরে বললেন, \"দুনিয়াতে এমনভাবে থাকো যেন তুমি একজন অপরিচিত কিংবা পথচারী।\" বর্ণনাটি সহীহ, বুখারীর নিজের সংকলনে রাখা। ছবিটা এই আয়াতের জন্য হুবহু মানানসই। অপরিচিত মানুষ যে শহর পার হচ্ছে তাকে ঘর বলে ভুল করে না, আর পথিক এমনভাবে বোঁচকা খোলে না যেন রাস্তাটাই তার গন্তব্য। কেউই আশা করে না তাকে সেখানে রেখে দেওয়া হবে।"
          },
          {
            "en": "Ibn ʿUmar then added words of his own, as the report preserves them: if you reach the evening, do not wait for the morning; if you reach the morning, do not wait for the evening; take from your health for your sickness, and from your life for your death. That is not gloom. It is a man drawing the practical conclusion from the image: spend the strength you have now on what will outlast it. Where Thamūd assumed the morning would come, the traveller books nothing on it. He holds his plenty the way a guest holds a borrowed thing, ready to give it back when it is called for.",
            "bn": "এরপর ইবন উমর (রাঃ) নিজের কিছু কথা জুড়ে দেন, একই বর্ণনায় যা সংরক্ষিত: সন্ধ্যায় পৌঁছলে সকালের অপেক্ষা কোরো না; সকালে পৌঁছলে সন্ধ্যার অপেক্ষা কোরো না; সুস্থতা থেকে কিছু নিয়ে রাখো অসুস্থতার জন্য, আর জীবন থেকে কিছু নিয়ে রাখো মৃত্যুর জন্য। এ কোনো বিষণ্নতা নয়। এ এমন একজন মানুষ, যিনি নবীর ﷺ দেওয়া ছবি থেকে কাজের উপসংহারটা টানছেন: এখনকার শক্তিটুকু এমন কিছুতে খরচ করো যা শক্তির চেয়ে বেশিদিন টেকে। সামূদ যেখানে ধরে নিত সকাল সবসময় আসবে, মুসাফির তার ওপর কিছুই বরাদ্দ করে না। সে তার প্রাচুর্য এমনভাবে ধরে রাখে যেমন অতিথি ধরে রাখে ধার করা জিনিস, যখনই ফেরত চাওয়া হবে তখনই ফিরিয়ে দিতে প্রস্তুত।"
          }
        ]
      },
      {
        "h": {
          "en": "The People Are Gone",
          "bn": "জাতিটা আর নেই"
        },
        "p": [
          {
            "en": "Thamūd are a people the Qur'an presents as destroyed for rejecting their messenger, and it matters to say what that means. The verse describes what the text describes: a particular nation, long dead, who met a particular warning with denial. It licenses nothing against any living person or community — no group today inherits their verdict or carries their name. The passage is held up as a sign to learn from, the refrain this surah repeats after each story, not as a charge to lay at anyone's door. The danger it warns of is a state of the heart, and the only heart I can inspect is my own.",
            "bn": "সামূদকে কুরআন উপস্থাপন করে এমন এক জাতি হিসেবে, যারা তাদের রসূলকে অস্বীকার করার কারণে ধ্বংস হয়েছে, আর এর মানে কী এবং কী নয়, তা বলা জরুরি। আয়াত যা বর্ণনা করে, ঠিক তাই বর্ণনা করে: বহুকাল আগে বিলীন হওয়া একটি নির্দিষ্ট জাতি, যারা একটি নির্দিষ্ট সতর্কবার্তার জবাবে অস্বীকার বেছে নিয়েছিল। এটি আজকের কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আজকের কোনো দল তাদের রায়ের উত্তরাধিকারী নয়, কেউ তাদের নাম বহন করে না। ঘটনাটি তুলে ধরা হয়েছে শেখার মতো এক নিদর্শন হিসেবে, এই সূরা প্রতিটি কাহিনির শেষে যে বাণী বারবার ফিরিয়ে আনে তার মতো, কারও ঘাড়ে চাপানোর অভিযোগ হিসেবে নয়। এটি যে বিপদের কথা বলে, তা হৃদয়ের এক অবস্থা, আর একমাত্র যে হৃদয়টা আমি পরীক্ষা করতে পারি, সেটা আমার নিজের।"
          },
          {
            "en": "So the question Ṣāliḥ asked his people is left standing for the reader, which is why it was framed as a question in the first place. Will you be left here, secure, in the middle of all this? Nothing in the plenty answers it; the plenty is only the backdrop against which it is asked. The honest reply is no, and once that is said out loud it reorders everything — what is worth building, what is worth fearing, what the gifts are for. A stranger who remembers he is a stranger does not love the road less. He simply holds it knowing it was never his to keep.",
            "bn": "তাই সালিহ (আঃ) তাঁর জাতিকে যে প্রশ্ন করেছিলেন, তা পাঠকের জন্য খোলা রেখে দেওয়া হয়েছে, আর এ কারণেই প্রথমে একে প্রশ্নের আকারেই সাজানো হয়েছিল। তোমাদের কি এখানে, এই সবকিছুর ভেতরে নিরাপদে রেখে দেওয়া হবে? প্রাচুর্যের কিছুই এর জবাব দেয় না; প্রাচুর্য কেবল সেই পটভূমি, যার সামনে প্রশ্নটা করা হয়। সৎ জবাবটা হলো না, আর একবার তা মুখে বলে ফেললে সবকিছু নতুন করে সাজে—কী গড়া মূল্যবান, কী ভয় পাওয়ার যোগ্য, দানগুলো কীসের জন্য। যে অপরিচিত মনে রাখে সে অপরিচিত, সে পথকে কম ভালোবাসে না। সে শুধু জানে এটি কখনো তার রাখার জিনিস ছিল না, আর সেই জেনেই একে ধরে রাখে।"
          }
        ]
      }
    ]
  }
});
