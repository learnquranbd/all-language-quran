/**
 * Tadabbur long-form articles — surah 104.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "104:1": {
    "sections": [
      {
        "h": {
          "en": "Ruin Named Before Its Target",
          "bn": "কার জন্য, তার আগে দুর্ভোগ"
        },
        "p": [
          {
            "en": "Surah al-Humazah opens with four Arabic words: waylun li-kulli humazatin lumazah, woe to every humazah, lumazah. The commentators settle the first word before the two that follow it. Al-Qurtubi says wayl has been discussed in more than one place, and that its meaning is disgrace, punishment and destruction; then, under the formula it is said, he adds that it is a valley in Jahannam. As-Sa'di glosses it as a threat, an evil outcome and severe punishment, and the Muyassar, on this verse, gives evil and ruin.",
            "bn": "সূরা হুমাযাহ শুরু হয়েছে আরবি চারটি শব্দে: ওয়াইলুল লিকুল্লি হুমাযাতিল লুমাযাহ, দুর্ভোগ প্রত্যেক হুমাযাহ ও লুমাযাহর জন্য। পরের দুই শব্দে যাওয়ার আগে তাফসীরকারেরা প্রথম শব্দটির মানে ঠিক করে নেন। কুরতুবী বলেন, ওয়াইল নিয়ে আগেও একাধিক জায়গায় কথা হয়েছে, আর এর অর্থ লাঞ্ছনা, শাস্তি ও ধ্বংস। তারপর 'বলা হয়' কথাটি দিয়ে যোগ করেন, এটি জাহান্নামের একটি উপত্যকা। সা'দীর ব্যাখ্যায় ওয়াইল মানে হুমকি, মন্দ পরিণাম আর কঠিন শাস্তি। মুয়াসসার এ আয়াতে দুটি শব্দে সারে: অনিষ্ট আর ধ্বংস।"
          },
          {
            "en": "At-Tabari gives the valley reading differently: not as a reported alternative but inside his own explanation of the verse. Wayl, he says, is the valley that flows with the festering discharge and pus of the people of the Fire. So the sources hold two senses side by side, a word of ruin and the name of a place, and al-Qurtubi marks the second as a report while at-Tabari states it as his gloss. Whichever sense is taken, the sentence pronounces its verdict first and only then says whom the verdict is for.",
            "bn": "তাবারী উপত্যকার অর্থটি আনেন অন্যভাবে। বর্ণিত বিকল্প হিসেবে নয়, আয়াতের নিজস্ব ব্যাখ্যার ভেতরেই। তাঁর ভাষায়, ওয়াইল হলো সেই উপত্যকা, যেখান দিয়ে জাহান্নামবাসীদের গলিত রস আর পুঁজ বয়ে যায়। ফলে উৎসগুলোতে দুটি অর্থ পাশাপাশি থাকে: একটি ধ্বংসের শব্দ, অন্যটি একটি জায়গার নাম। কুরতুবী দ্বিতীয়টিকে বর্ণনা বলে চিহ্নিত করেন, আর তাবারী সেটিকেই নিজের ব্যাখ্যা হিসেবে বলেন। যে অর্থই ধরা হোক, বাক্যটি আগে রায় শোনায়, তারপর জানায় রায়টি কার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "What Hamz Breaks",
          "bn": "হামযের মূলে ভাঙন"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both give the root sense of hamz as breaking, and biting down on something with force. Al-Qurtubi adds the everyday uses: the name of the letter hamzah comes from it, one says hamaztu ra'sahu of a blow to the head, and of walnuts that one cracked them in the palm. A Bedouin, asked whether his people hamz the mouse, answered that the cat does that. Al-Qurtubi also records a second view, that the root of both hamz and lamz is pushing and striking.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই হামযের মূল অর্থ বলেন ভাঙা, আর কোনো কিছুতে জোরে কামড় বসানো। কুরতুবী রোজকার ব্যবহারও দেখান। হামযাহ বর্ণের নাম এখান থেকেই। মাথায় আঘাত করলে বলা হয় হামাযতু রা'সাহু, আর হাতের তালুতে আখরোট ভাঙলেও একই ক্রিয়া চলে। এক বেদুইনকে জিজ্ঞেস করা হয়েছিল, তোমরা কি ইঁদুরকে হাময করো? সে উত্তর দিয়েছিল, ওটা বিড়ালের কাজ। কুরতুবী আরেকটি মতও আনেন: হাময আর লামযের মূল অর্থ ধাক্কা দেওয়া ও আঘাত করা।"
          },
          {
            "en": "The shape of the two words matters as much as the root. Al-Qurtubi calls humazah a noun made for intensity in this meaning, like sukhara and duhaka for one who mocks and laughs at people. Al-Baghawi says the same, calling both words descriptions of the doer on that pattern, and adds that read with the middle letter unvowelled, humzah and lumzah, they name the one it is done to. Al-Qurtubi reports that reading from Abu Ja'far Muhammad ibn Ali and al-A'raj, if it is sound from them: the person who exposes himself until people mock him.",
            "bn": "শব্দ দুটির মূলের মতো গড়নও গুরুত্বপূর্ণ। কুরতুবী বলেন, হুমাযাহ এমন বিশেষ্য, যা এই অর্থে আধিক্য বোঝাতে তৈরি। যেমন সুখারাহ আর দুহাকাহ বলা হয় তাকে, যে মানুষকে নিয়ে বিদ্রূপ করে আর হাসে। বাগাভীও একই কথা বলেন: দুটিই এই ছাঁচে কর্তার বিশেষণ। তিনি যোগ করেন, মাঝের অক্ষরে সাকিন দিয়ে হুমযাহ ও লুমযাহ পড়লে অর্থ দাঁড়ায় সেই ব্যক্তি, যার সঙ্গে এমনটা করা হয়। কুরতুবী এই কিরাআত আনেন আবু জা'ফর মুহাম্মাদ ইবন আলী ও আ'রাজ থেকে, সঙ্গে শর্ত জুড়ে দেন, যদি তাঁদের থেকে তা সহীহ হয়। তখন অর্থ হবে সেই লোক, যে নিজেকে এমনভাবে মানুষের সামনে মেলে ধরে যে তারা তাকে নিয়ে উপহাস করে।"
          }
        ]
      },
      {
        "h": {
          "en": "To the Face, or Behind",
          "bn": "মুখের ওপর, না আড়ালে"
        },
        "p": [
          {
            "en": "The first way the commentators divide the pair is by where the victim stands. At-Tabari carries from Abu al-Aliya that the humazah jabs a man to his face and the lumazah does it from behind him; Ibn Kathir carries the same from ar-Rabi' ibn Anas. Al-Qurtubi names Abu al-Aliya, al-Hasan, Mujahid and Ata ibn Abi Rabah for it, and says an-Nahhas chose this view, citing 9:58, and among them is one who criticises you concerning the charities, where the verb is the same lamz.",
            "bn": "তাফসীরকারেরা জোড়াটিকে প্রথমে ভাগ করেন আক্রান্ত মানুষটি কোথায় আছে, তা দিয়ে। তাবারী আবুল আলিয়া থেকে আনেন: হুমাযাহ মানুষকে খোঁচায় তার মুখের ওপর, আর লুমাযাহ খোঁচায় তার পেছনে। ইবন কাসীর একই কথা আনেন রাবী ইবন আনাস থেকে। কুরতুবী এ মতের সঙ্গে আবুল আলিয়া, হাসান, মুজাহিদ ও আতা ইবন আবী রাবাহর নাম জুড়ে দেন। তিনি জানান, নাহহাস এ মতটিই বেছে নিয়েছেন এবং প্রমাণ হিসেবে এনেছেন ৯:৫৮: আর তাদের কেউ কেউ সদকা নিয়ে আপনাকে দোষারোপ করে। সেখানে ক্রিয়াটি সেই লামযই।"
          },
          {
            "en": "Muqatil reverses it. In al-Qurtubi and al-Baghawi alike, his humazah faults you in your absence and his lumazah faults you to your face, and al-Baghawi then sets Abu al-Aliya and al-Hasan against him with the opposite. Ma'arif al-Qur'an follows the direction Muqatil gives and attributes it to most commentators: humazah is backbiting, speaking ill of a person behind his back, and lumazah is deriding him to his face. The same early names stand behind the first direction, and Muqatil behind the reverse.",
            "bn": "মুকাতিল বলেন ঠিক উল্টো। কুরতুবী ও বাগাভী দুজনের বর্ণনাতেই তাঁর মতে হুমাযাহ সে, যে আপনার অনুপস্থিতিতে দোষ ধরে, আর লুমাযাহ সে, যে মুখের ওপর দোষ ধরে। বাগাভী এরপর জানান, আবুল আলিয়া ও হাসান এর বিপরীত কথা বলেছেন। মাআরিফুল কুরআন মুকাতিলের দিকটিই নেয় এবং বলে, বেশির ভাগ তাফসীরকারের মত এটাই: হুমাযাহ মানে গীবত, অর্থাৎ কারও অসাক্ষাতে তার নিন্দা, আর লুমাযাহ মানে মুখের ওপর তাকে হেয় করা। একদিকে দাঁড়িয়ে আছেন সেই প্রথম যুগের নামগুলো, অন্যদিকে মুকাতিল।"
          },
          {
            "en": "Ma'arif al-Qur'an then asks which of the two is worse, and refuses to give a single answer. From one angle backbiting is worse: the person spoken of is absent, cannot defend himself or stop it, and so the sin keeps growing. From another angle the face-to-face jab is worse, because it insults and belittles the person directly, which hurts more and carries the heavier punishment. The commentary keeps both angles, and the verse, with the two words joined, condemns both habits at once without asking the reader to rank them.",
            "bn": "মাআরিফুল কুরআন এরপর প্রশ্ন তোলে, দুটির মধ্যে কোনটি বেশি মন্দ। একটিমাত্র উত্তর সে দেয় না। এক দিক থেকে গীবত বেশি মন্দ। যার কথা হচ্ছে সে অনুপস্থিত, নিজের পক্ষে কিছু বলতে বা থামাতে পারে না, তাই গুনাহটা বাড়তেই থাকে। আরেক দিক থেকে মুখের ওপর খোঁচা বেশি মন্দ। এতে মানুষটিকে সরাসরি অপমান ও হেয় করা হয়, আঘাতটা বেশি লাগে, শাস্তিও তাই কঠিন। ব্যাখ্যাটি দুই দিকই ধরে রাখে। আর আয়াত দুটি শব্দ পাশাপাশি বসিয়ে দুই অভ্যাসকেই একসঙ্গে নিন্দা করে, পাঠককে ক্রম সাজাতে বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Hand, Eye and Tongue",
          "bn": "হাত, চোখ আর জিভ"
        },
        "p": [
          {
            "en": "A second division goes by the instrument rather than the place. Ibn Kathir carries from Mujahid that the humazah works with the hand and the eye and the lumazah with the tongue, and says Ibn Zayd held the same; at-Tabari has Mujahid say the hand for one and the tongue for the other. In al-Qurtubi and al-Baghawi, Ibn Zayd's humazah jabs people with his hand and strikes them, while his lumazah faults them with his tongue. As-Sa'di agrees in direction: the hammaz faults people by gesture and deed, the lammaz by what he says.",
            "bn": "দ্বিতীয় ভাগটি জায়গা দিয়ে নয়, হাতিয়ার দিয়ে। ইবন কাসীর মুজাহিদ থেকে আনেন: হুমাযাহর কাজ হাত ও চোখ দিয়ে, লুমাযাহর কাজ জিভ দিয়ে। তিনি বলেন, ইবন যায়দও তা-ই বলেছেন। তাবারীর বর্ণনায় মুজাহিদ একটির জন্য হাত আর অন্যটির জন্য জিভের কথা বলেন। কুরতুবী ও বাগাভীতে ইবন যায়দের হুমাযাহ হাত দিয়ে মানুষকে খোঁচায় ও মারে, আর তাঁর লুমাযাহ জিভ দিয়ে তাদের দোষ ধরে। সা'দীও একই দিকে যান: হাম্মায মানুষের দোষ ধরে ইশারা আর কাজ দিয়ে, লাম্মায মুখের কথা দিয়ে।"
          },
          {
            "en": "Others run the same division the other way. Ibn Kathir's own opening line on the surah reads: the hammaz is by word and the lammaz by deed, meaning he looks down on people and belittles them, and he refers back to 68:11, a hammaz going about with slander. Sufyan ath-Thawri, in al-Qurtubi and al-Baghawi, says the hamz is with the tongue and the lamz with the eye. Ibn Kaysan's humazah hurts those sitting with him with ugly words, and his lumazah winks at his companion and signals with head and eyebrow. Qatada simply names both tongue and eye.",
            "bn": "কেউ কেউ একই ভাগ করেন উল্টো দিক থেকে। সূরার শুরুতে ইবন কাসীরের নিজের বাক্য: হাম্মায কথায়, লাম্মায কাজে। অর্থাৎ সে মানুষকে তুচ্ছ করে, ছোট করে দেখে। এখানে তিনি ৬৮:১১-এর দিকে ফিরিয়ে দেন: যে হাম্মায, চোগলখুরি নিয়ে ঘুরে বেড়ায়। কুরতুবী ও বাগাভীর বর্ণনায় সুফিয়ান সাওরী বলেন, হাময জিভ দিয়ে, লাময চোখ দিয়ে। ইবন কায়সানের হুমাযাহ পাশে বসা মানুষদের কষ্ট দেয় কুৎসিত কথায়। তাঁর লুমাযাহ সঙ্গীর দিকে চোখ টেপে, মাথা আর ভুরু দিয়ে ইশারা করে। কাতাদা সোজাসুজি জিভ ও চোখ দুটোরই নাম নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names or One Fault",
          "bn": "দুই নাম, না এক দোষ"
        },
        "p": [
          {
            "en": "At-Tabari's own gloss makes the humazah the one who backbites people and bears them ill will, and quotes the poet Ziyad al-A'jam: you offer me friendship falsely when you meet me, and if I am absent, you are the hamiz, the lumazah. The lumazah, he says, faults people and attacks them. He then lays out three narrations from Mujahid: the humazah eats people's flesh and the lumazah attacks; the same reversed; and one of them eats flesh, the other attacks. This shows, at-Tabari remarks, that the narrator himself found the two words hard.",
            "bn": "তাবারীর নিজের ব্যাখ্যায় হুমাযাহ সে, যে মানুষের গীবত করে আর মনে তাদের প্রতি বিদ্বেষ পোষে। এখানে তিনি কবি যিয়াদ আল-আ'জামের পঙক্তি আনেন: দেখা হলে তুমি মিথ্যা করে আমার প্রতি ভালোবাসা দেখাও, আর আমি আড়ালে গেলে তুমিই হামিয, তুমিই লুমাযাহ। লুমাযাহ, তাঁর কথায়, যে মানুষের দোষ ধরে আর তাদের আক্রমণ করে। তারপর তিনি মুজাহিদ থেকে তিনটি বর্ণনা সাজান। একটিতে হুমাযাহ মানুষের গোশত খায় আর লুমাযাহ আক্রমণ করে। আরেকটিতে ঠিক উল্টো। তৃতীয়টিতে শুধু বলা হয়, একজন গোশত খায়, অন্যজন আক্রমণ করে। তাবারী মন্তব্য করেন, এতে বোঝা যায় বর্ণনাকারীর নিজের কাছেই শব্দ দুটির ব্যাখ্যা জটিল ঠেকেছিল।"
          },
          {
            "en": "Some refuse to split them at all. Al-Baghawi carries from Ibn Abbas (RA) that they are those who go about with tale-bearing, who divide loved ones, who seek out faults in the innocent, and adds that the two words mean one thing, the fault-finder; al-Qurtubi, on the same report, says that on this reading they are one in meaning, and quotes Murra: they are the same, the tale-bearer who attacks a man when he is away. Ibn Kathir's line from Ibn Abbas is one who attacks and finds fault. The sources keep every division, and so does this page.",
            "bn": "কেউ কেউ শব্দ দুটিকে আলাদা করতেই রাজি নন। বাগাভী ইবন আব্বাস (রাঃ) থেকে আনেন: এরা সেই লোক, যারা চোগলখুরি করে বেড়ায়, প্রিয়জনদের মধ্যে বিভেদ ঘটায়, নির্দোষ মানুষের দোষ খুঁজে বেড়ায়। তিনি যোগ করেন, দুই শব্দের অর্থ একটাই: দোষ ধরা লোক। একই বর্ণনার পর কুরতুবী বলেন, এই অর্থে দুটি সমার্থক। তিনি মুররার কথাও আনেন: দুটো একই জিনিস, সেই চোগলখোর, যে মানুষ আড়ালে গেলে তাকে আক্রমণ করে। ইবন কাসীরে ইবন আব্বাসের (রাঃ) কথাটি এমন: যে আক্রমণ করে আর দোষ ধরে। উৎসগুলো প্রতিটি ভাগই রেখে দেয়, এ লেখাও তাই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Names in Reports, Every Mocker",
          "bn": "বর্ণনায় নাম, আয়াতে সবাই"
        },
        "p": [
          {
            "en": "The commentators also carry reports naming the man the verse was about, and the reports disagree. Al-Baghawi says they differed: al-Kalbi named al-Akhnas ibn Shariq ath-Thaqafi, who used to fall upon people and backbite them; Muhammad ibn Ishaq said, we kept hearing that it came down about Umayya ibn Khalaf al-Jumahi; Muqatil named al-Walid ibn al-Mughira, who backbit the Prophet ﷺ behind him and attacked him to his face. Al-Qurtubi has al-Akhnas through ad-Dahhak from Ibn Abbas (RA) and al-Walid from Ibn Jurayj, and under it is said adds Ubayy ibn Khalaf and Jamil ibn Amir ath-Thaqafi.",
            "bn": "আয়াতটি কার সম্পর্কে, সে বিষয়েও তাফসীরকারেরা কিছু বর্ণনা আনেন, আর বর্ণনাগুলো একে অন্যের সঙ্গে মেলে না। বাগাভী বলেন, এ নিয়ে মতভেদ আছে। কালবীর মতে আয়াতটি আখনাস ইবন শারীক সাকাফী সম্পর্কে, যে মানুষের নিন্দায় মেতে থাকত আর গীবত করত। মুহাম্মাদ ইবন ইসহাক বলেন, আমরা বরাবর শুনে এসেছি, এটি নেমেছে উমাইয়া ইবন খালাফ জুমাহী সম্পর্কে। মুকাতিলের মতে ওয়ালীদ ইবন মুগীরা, যে নবী ﷺ-এর পেছনে তাঁর গীবত করত আর সামনে তাঁকে আক্রমণ করত। কুরতুবী আখনাসের কথা আনেন দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে, ওয়ালীদের কথা ইবন জুরাইজ থেকে। আর 'বলা হয়' দিয়ে যোগ করেন উবাই ইবন খালাফ ও জামীল ইবন আমির সাকাফীর নাম।"
          },
          {
            "en": "At-Tabari names Jamil ibn Amir al-Jumahi, on the word of a man from ar-Raqqa, and al-Akhnas from others, so even the names do not agree: Umayya in one book, Ubayy in another; al-Jumahi in one, ath-Thaqafi in another. Against all of them stands Mujahid, in at-Tabari, al-Qurtubi, al-Baghawi and Ibn Kathir: it is not specific to anyone. Al-Qurtubi calls generality the view of the majority. At-Tabari's verdict rests on the word kull: Allah made the statement general to every humazah lumazah; whoever has the description, his path is that man's path, whoever he may be.",
            "bn": "তাবারী রাক্কার এক ব্যক্তির বরাতে জামীল ইবন আমির জুমাহীর নাম আনেন, আর অন্যদের বরাতে আখনাসের। ফলে নামগুলোও মেলে না। এক কিতাবে উমাইয়া, আরেকটিতে উবাই। একটিতে জুমাহী, আরেকটিতে সাকাফী। এসবের বিপরীতে মুজাহিদের কথা পাওয়া যায় তাবারী, কুরতুবী, বাগাভী ও ইবন কাসীর চারজনের কাছেই: আয়াতটি কারও জন্য নির্দিষ্ট নয়। কুরতুবী বলেন, সাধারণ অর্থের মতটিই বেশির ভাগের মত। তাবারীর রায় দাঁড়িয়ে আছে কুল্লি শব্দটির ওপর। আল্লাহ কথাটি প্রত্যেক হুমাযাহ লুমাযাহর জন্য সাধারণ রেখেছেন। যার মধ্যে এই গুণ আছে, তার পথ সেই লোকের পথই, সে যে-ই হোক।"
          },
          {
            "en": "So the names stay what the books call them: reports, several of them carried without a chain in these texts, and at odds with one another. This page picks none of them. The verse describes what it describes, a manner of speech and the man who has made it his own, and it licenses nothing against any living person or community: no label for a rival, a relative or an opposing group. Reaching for this surah to brand someone a humazah would be the very jab the surah condemns.",
            "bn": "তাই নামগুলো থাকে তা-ই, কিতাবগুলো যা বলে: বর্ণনা। এখানকার লেখাগুলোতে এর কয়েকটি এসেছে কোনো সনদ ছাড়া, আর একটি আরেকটির সঙ্গে মেলে না। এ লেখা এগুলোর কোনোটিকেই বেছে নেয় না। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে: কথা বলার এক ধরন, আর সেই মানুষ, যে ধরনটাকে নিজের স্বভাব বানিয়ে ফেলেছে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। প্রতিদ্বন্দ্বী, আত্মীয় বা অন্য কোনো দলের গায়ে লেবেল সাঁটার হাতিয়ার এটি নয়। কাউকে হুমাযাহ বলে দাগাতে এই সূরা টেনে আনা মানে ঠিক সেই খোঁচাটাই দেওয়া, যার নিন্দা সূরাটি করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Counted Coins, a Crushing Fire",
          "bn": "গোনা সম্পদ, চূর্ণ করা আগুন"
        },
        "p": [
          {
            "en": "The next verses describe the same man from another side. Ibn Kathir, whose abridged English commentary treats 104:1 to 104:9 as one passage, explains 104:2, who gathered wealth and counted it, as piling some of it on top of the rest and counting it up, compares 70:18, and gathered and hoarded, and names as-Suddi and Ibn Jarir for it. He quotes Muhammad ibn Ka'b: his wealth occupies his day, going from this to that, and when night comes he sleeps like a rotting corpse. On 104:3, the man thinks that gathering wealth will make him last forever in this world.",
            "bn": "পরের আয়াতগুলো একই মানুষকে দেখায় আরেক দিক থেকে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১০৪:১ থেকে ১০৪:৯ পর্যন্ত এক অংশ হিসেবে আলোচনা করে। ১০৪:২, যে সম্পদ জমায় আর তা গুনে রাখে, এর ব্যাখ্যায় তিনি বলেন, সে সম্পদের ওপর সম্পদ স্তূপ করে আর গুনতে থাকে। তুলনা টানেন ৭০:১৮-এর সঙ্গে: জমা করেছে, তারপর আগলে রেখেছে। এ ব্যাখ্যার জন্য তিনি সুদ্দী ও ইবন জারীরের নাম নেন। মুহাম্মাদ ইবন কা'বের কথাও আনেন: দিনভর তার সম্পদ তাকে এদিক-ওদিক ব্যস্ত রাখে, আর রাত এলে সে পচা লাশের মতো ঘুমায়। ১০৪:৩-এ লোকটি ভাবে, সম্পদ জমালে দুনিয়ায় সে চিরকাল থাকবে।"
          },
          {
            "en": "Kalla, no: Ibn Kathir reads it as the matter is not as he claims or reckons. He will be thrown into al-Hutamah, a descriptive name of the Fire, because it crushes whoever is in it. Of the fire that mounts to the hearts, Ibn Kathir quotes Thabit al-Bunani, it will burn them all the way to their hearts while they are still alive, and then Thabit wept; and Muhammad ibn Ka'b, that it devours every part of the body until it reaches the heart. The closing over in 104:8 has its own reflection in this collection.",
            "bn": "কাল্লা, কখনো নয়: ইবন কাসীরের ব্যাখ্যায় এর অর্থ, ব্যাপারটা তেমন নয়, যেমন সে দাবি করে বা হিসাব কষে। তাকে নিক্ষেপ করা হবে হুতামায়। এটি জাহান্নামের এক বর্ণনামূলক নাম, কারণ যে তাতে পড়ে তাকে সে চূর্ণ করে ফেলে। যে আগুন হৃদয় পর্যন্ত চড়ে যায়, সে প্রসঙ্গে ইবন কাসীর সাবিত আল-বুনানীর কথা আনেন: জীবিত থাকা অবস্থাতেই আগুন তাদের পুড়িয়ে হৃদয় পর্যন্ত পৌঁছাবে। এ কথা বলে সাবিত কেঁদে ফেলেছিলেন। মুহাম্মাদ ইবন কা'বের কথাও আনেন: আগুন শরীরের প্রতিটি অংশ গ্রাস করে হৃদয় পর্যন্ত পৌঁছে যাবে। ১০৪:৮-এর বন্ধ করে দেওয়ার কথা নিয়ে এ সংকলনে আলাদা আলোচনা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Channel Is Covered",
          "bn": "কোনো পথই বাদ নেই"
        },
        "p": [
          {
            "en": "Set the glosses side by side and a map appears. Face and back, hand and eye, eyebrow and tongue, a man's flesh and his lineage: whichever way the commentators divide the pair, between them no channel of contempt is left outside the verse. The useful question for a reader is therefore not which division is correct, which the sources leave open, but which of these one does. A person may never mock to a face and still sigh, wink or raise an eyebrow when a name comes up.",
            "bn": "ব্যাখ্যাগুলো পাশাপাশি রাখলে একটা মানচিত্র ফুটে ওঠে। মুখের ওপর আর পেছনে, হাত আর চোখ, ভুরু আর জিভ, মানুষের গোশত আর তার বংশ। তাফসীরকারেরা জোড়াটিকে যেভাবেই ভাগ করুন, সব মিলিয়ে অবজ্ঞার কোনো পথই আয়াতের বাইরে থাকে না। তাই পাঠকের কাজের প্রশ্নটা এই নয় যে কোন ভাগটি সঠিক। উৎসগুলো সে প্রশ্ন খোলা রেখেছে। আসল প্রশ্ন হলো, এর কোনটা আমি নিজে করি। কেউ হয়তো কখনো কারও মুখের ওপর উপহাস করেন না, অথচ কারও নাম উঠলেই দীর্ঘশ্বাস ফেলেন, চোখ টেপেন বা ভুরু তোলেন।"
          },
          {
            "en": "Notice, too, where the glosses place the harm. Ibn Kaysan's humazah hurts those sitting with him; the report from Ibn Abbas (RA) speaks of dividing loved ones; Ziyad al-A'jam's verse, in at-Tabari, describes friendship offered to the face and an attack once the friend is gone. The fault lives among companions, not strangers. One honest test follows from that line of poetry: would I say this about him in the same words if he were sitting here? If the words would change, the change is the thing to examine.",
            "bn": "খেয়াল করুন, ব্যাখ্যাগুলো ক্ষতিটা কোথায় দেখায়। ইবন কায়সানের হুমাযাহ কষ্ট দেয় পাশে বসা মানুষদের। ইবন আব্বাসের (রাঃ) বর্ণনায় আছে প্রিয়জনদের মধ্যে বিভেদ ঘটানোর কথা। তাবারীতে উদ্ধৃত যিয়াদ আল-আ'জামের পঙক্তিতে ছবিটা এমন: সামনে বন্ধুত্ব, আর বন্ধু চলে গেলেই আক্রমণ। দোষটা বাস করে সঙ্গীদের মাঝে, অচেনাদের মাঝে নয়। ওই পঙক্তি থেকেই একটা সৎ পরীক্ষা বেরিয়ে আসে। মানুষটি এখানে বসে থাকলে আমি কি একই শব্দে তার কথা বলতাম? শব্দ বদলে গেলে সেই বদলটাই খতিয়ে দেখার জিনিস।"
          },
          {
            "en": "No hadith is attached to this verse here in a form confirmed in a collection. Al-Qurtubi and Ma'arif al-Qur'an carry a saying in the Prophet's ﷺ name, that the worst of Allah's servants are those who go about with tale-bearing and divide loved ones, without naming where it is recorded, and at-Tabari carries nearly the same words as Ibn Abbas's (RA) own answer; it is not quoted here as a hadith. The Qur'an's direct commands on the subject sit at 49:11, which forbids lamz, and 49:12, which forbids backbiting; they have their own reflections.",
            "bn": "কোনো হাদীস-সংকলনে নিশ্চিত হওয়া রূপে এ আয়াতের সঙ্গে কোনো হাদীস এখানে যুক্ত নেই। কুরতুবী ও মাআরিফুল কুরআন নবী ﷺ-এর নামে একটি কথা আনে: আল্লাহর নিকৃষ্টতম বান্দা তারা, যারা চোগলখুরি করে বেড়ায় আর প্রিয়জনদের মধ্যে বিভেদ ঘটায়। কিন্তু কোথায় তা সংকলিত, সে কথা বলে না। তাবারী প্রায় একই শব্দগুলো আনেন ইবন আব্বাসের (রাঃ) নিজের উত্তর হিসেবে। তাই এখানে কথাটি হাদীস হিসেবে উদ্ধৃত হলো না। এ বিষয়ে কুরআনের সরাসরি নির্দেশ আছে ৪৯:১১ আয়াতে, যা লামযকে নিষেধ করে, আর ৪৯:১২ আয়াতে, যা গীবতকে নিষেধ করে। সেগুলোর আলোচনা আলাদা জায়গায় আছে।"
          }
        ]
      }
    ]
  },
  "104:8": {
    "sections": [
      {
        "h": {
          "en": "A Door Shut in Three Words",
          "bn": "তিন শব্দে বন্ধ দরজা"
        },
        "p": [
          {
            "en": "Innaha 'alayhim mu'sadah: indeed, it will be closed over them. The Arabic has three words. Innaha joins inna, indeed, to -ha, it; 'alayhim means upon them, or over them; and mu'sadah is the word the commentators gloss as shut, closed over, covering. The verse stands between 104:7, the fire that mounts up over the hearts, and 104:9, in columns stretched out. Those neighbours are named here only to place the verse; 104:9 has its own reading and is not treated in this article.",
            "bn": "ইন্নাহা আলাইহিম মু'সাদাহ: নিশ্চয়ই তা তাদের উপর বন্ধ করে দেওয়া হবে। আরবিতে শব্দ মাত্র তিনটি। ইন্নাহা গঠিত ইন্না (নিশ্চয়ই) আর -হা (তা) মিলে। আলাইহিম মানে তাদের উপর। আর মু'সাদাহ সেই শব্দ, তাফসীরকারেরা যার ব্যাখ্যা করেন বন্ধ, উপর থেকে ঢাকা, ঢেকে রাখা বলে। আয়াতটির আগে আছে ১০৪:৭, যে আগুন হৃদয় পর্যন্ত চড়ে যায়। পরে আছে ১০৪:৯, লম্বা লম্বা স্তম্ভে। প্রতিবেশী আয়াত দুটির কথা এখানে শুধু জায়গা চেনানোর জন্য। ১০৪:৯ আয়াতের নিজস্ব আলোচনা আছে, এ প্রবন্ধে তা ধরা হয়নি।"
          },
          {
            "en": "Short as it is, the verse carries the weight of the whole passage. From 104:4 the surah has been describing al-Hutamah: what it is, whose fire it is, how far it reaches. Here the description stops moving inward and closes. The commentators consulted for this verse spend nearly all their words on the single term mu'sadah, and they do not agree on exactly which picture it draws. That disagreement, and the small linguistic evidence they bring for it, is the matter of most of what follows.",
            "bn": "আয়াতটি ছোট, তবু গোটা অংশের ভার এর উপর। ১০৪:৪ থেকে সূরাটি আল-হুতামার বর্ণনা দিয়ে আসছে: সেটা কী, কার আগুন, কতদূর পৌঁছায়। এখানে এসে বর্ণনা আর ভেতরের দিকে এগোয় না, বন্ধ হয়ে যায়। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, সেগুলোর প্রায় সব কথাই মু'সাদাহ শব্দটিকে ঘিরে। শব্দটি ঠিক কোন ছবি আঁকে, তা নিয়ে তাঁরা পুরোপুরি একমত নন। সেই মতভেদ, আর তার পক্ষে তাঁরা ভাষার যে ছোট ছোট সাক্ষ্য আনেন, সেটাই সামনের বেশিরভাগ আলোচনার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Is, Who They Are",
          "bn": "কী সেটা, কারা তারা"
        },
        "p": [
          {
            "en": "At-Tabari settles both pronouns in a single sentence. Inna al-Hutamata allati wusifat sifatuha, he writes: the -ha is al-Hutamah, whose description has just been given in 104:4 to 104:7. And 'alayhim, upon them, he explains as upon these hammazin and lammazin, the people who mock and slander that 104:1 opened with. The Muyassar keeps the plain pronoun: it is closed over them. Ibn Kathir's English abridgement reads the verse in the same run, straight on from the fire that leaps up over the hearts.",
            "bn": "দুটো সর্বনামের মীমাংসা তাবারী এক বাক্যেই করে দেন। তিনি লেখেন, ইন্নাল হুতামাতাল্লাতী উসিফাত সিফাতুহা: অর্থাৎ -হা মানে আল-হুতামা, যার বর্ণনা এইমাত্র ১০৪:৪ থেকে ১০৪:৭ আয়াতে দেওয়া হলো। আর আলাইহিম, তাদের উপর, এর ব্যাখ্যায় তিনি বলেন, এই হাম্মাযীন ও লাম্মাযীনদের উপর, অর্থাৎ যারা খোঁটা দেয় আর আড়ালে নিন্দা করে, যাদের কথা দিয়ে ১০৪:১ শুরু হয়েছিল। মুয়াসসার সর্বনামটিকে সাদামাটাই রাখে: তা তাদের উপর বন্ধ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও আয়াতটিকে পড়ে একই ধারায়, হৃদয় পর্যন্ত চড়ে যাওয়া আগুনের ঠিক পরের কথা হিসেবে।"
          },
          {
            "en": "That reading keeps the surah in a single line. The woe of 104:1 falls on a character drawn in conduct: the mocker, the slanderer, the man of 104:2 and 104:3 who gathers wealth, counts it and supposes it will keep him forever. The fire is then named, described, and at last shut. The meaning of the name al-Hutamah, and its fit with a life spent breaking others, has already been drawn out in the reflection on 104:1, so it is not rebuilt here. This verse adds only the closing.",
            "bn": "এভাবে পড়লে গোটা সূরা একটানা এক রেখায় চলে। ১০৪:১ আয়াতের ধ্বংসের ঘোষণা পড়েছে আচরণ দিয়ে আঁকা এক চরিত্রের উপর: যে খোঁটা দেয়, যে আড়ালে নিন্দা করে, আর ১০৪:২ ও ১০৪:৩ আয়াতের সেই লোক, যে সম্পদ জমায়, গুনে রাখে, আর ভাবে এই সম্পদই তাকে চিরকাল টিকিয়ে রাখবে। এরপর আগুনের নাম আসে, বর্ণনা আসে, শেষে আসে বন্ধ হয়ে যাওয়া। আল-হুতামা নামের অর্থ, আর অন্যকে ভেঙে দেওয়া জীবনের সঙ্গে তার মিল, ১০৪:১ আয়াতের আলোচনায় আগেই এসেছে। তাই এখানে তা নতুন করে বলা হলো না। এ আয়াত শুধু যোগ করে বন্ধ হওয়ার কথাটা।"
          }
        ]
      },
      {
        "h": {
          "en": "Closed Over, or Shut Fast",
          "bn": "উপর থেকে ঢাকা, নাকি তালাবদ্ধ"
        },
        "p": [
          {
            "en": "Two Arabic words carry most of the glossing. The first is mutbaqah, closed over or covered. At-Tabari gives it as his own explanation, and then lists those he says held the same: Ibn Abbas (RA) through Abu Malik, Atiyyah, al-Hasan, ad-Dahhak, Qatadah and Ibn Zayd, each quoted with the single word mutbaqah. Al-Qurtubi opens with the same gloss and credits it to al-Hasan and ad-Dahhak. The Arabic Ibn Kathir gives mutbaqah too, and says it was already explained under Surat al-Balad.",
            "bn": "ব্যাখ্যার বেশিরভাগ ভার বহন করে আরবি দুটি শব্দ। প্রথমটি মুতবাকাহ, অর্থাৎ উপর থেকে বন্ধ, ঢেকে দেওয়া। তাবারী এটিকে নিজের ব্যাখ্যা হিসেবে দেন, তারপর তাঁদের নাম আনেন যাঁরা তাঁর কথায় একই মত দিয়েছেন: আবু মালিকের সূত্রে ইবন আব্বাস (রাঃ), আতিয়্যা, আল-হাসান, যাহহাক, কাতাদা ও ইবন যায়দ। তাঁদের প্রত্যেকের কথা উদ্ধৃত হয়েছে ওই এক শব্দে, মুতবাকাহ। কুরতুবীও এই ব্যাখ্যা দিয়েই শুরু করেন এবং তা আল-হাসান ও যাহহাকের মত বলে উল্লেখ করেন। ইবন কাসীরের আরবি মূল তাফসীরেও আছে মুতবাকাহ, সঙ্গে এ কথাও যে সূরা আল-বালাদে এর ব্যাখ্যা আগেই এসেছে।"
          },
          {
            "en": "The second word is mughlaqah, shut, as a door is shut. At-Tabari records it from Ibn Abbas (RA) as well, through a different chain: 'alayhim mughlaqah, shut upon them. Al-Qurtubi gives it as a further reading, introduced with qila, it has been said, and ties it to the speech of Quraysh, closing the note with the words: Mujahid said it. As-Sa'di uses mughlaqah alone. Al-Baghawi sets the two words side by side without choosing, mutbaqah mughlaqah, closed over and shut. Ibn Kathir's English abridgement renders the gloss as covering.",
            "bn": "দ্বিতীয় শব্দটি মুগলাকাহ, অর্থাৎ বন্ধ, যেভাবে দরজা বন্ধ করা হয়। তাবারী এটিও ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, তবে ভিন্ন এক সূত্রে: আলাইহিম মুগলাকাহ, তাদের উপর বন্ধ। কুরতুবী একে আনেন আরেকটি মত হিসেবে, 'কীলা' বা 'বলা হয়েছে' দিয়ে শুরু করে, আর একে কুরাইশের ভাষার সঙ্গে যুক্ত করেন। নোটটি তিনি শেষ করেন এই কথায়: মুজাহিদ এটি বলেছেন। সা'দী শুধু মুগলাকাহ শব্দটিই ব্যবহার করেন। বাগাভী কোনোটা বেছে না নিয়ে দুটি শব্দ পাশাপাশি রাখেন: মুতবাকাহ মুগলাকাহ, উপর থেকে ঢাকা এবং বন্ধ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ব্যাখ্যাটিকে অনুবাদ করে covering, অর্থাৎ ঢেকে রাখা।"
          },
          {
            "en": "The two glosses are close, and none of these commentators sets them against each other; but they are not the same picture. Mutbaqah draws something laid over the people inside, closing them in from above. Mughlaqah draws an exit that has been shut. This article does not choose between them. What is worth noticing is that Ibn Abbas (RA) appears in at-Tabari's list under both words, by two separate chains, so in at-Tabari's own record both readings reach back to a Companion.",
            "bn": "ব্যাখ্যা দুটি কাছাকাছি, আর এই তাফসীরকারদের কেউ একটিকে অন্যটির বিপরীতে দাঁড় করান না। তবু দুটো ছবি এক নয়। মুতবাকাহর ছবিতে ভেতরের লোকদের উপর কিছু একটা বিছিয়ে দেওয়া, যা উপর থেকে তাদের আটকে রাখে। মুগলাকাহর ছবিতে বেরোনোর পথটা বন্ধ করে দেওয়া। এ প্রবন্ধ এর কোনোটিকেই বেছে নেয় না। তবে লক্ষ করার মতো ব্যাপার হলো, তাবারীর তালিকায় ইবন আব্বাস (রাঃ)-এর নাম দুটো শব্দের নিচেই আছে, দুটি আলাদা সূত্রে। অর্থাৎ তাবারীর নিজের বর্ণনাতেই দুটো ব্যাখ্যা একজন সাহাবি পর্যন্ত পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Language of Doors",
          "bn": "দরজার ভাষা"
        },
        "p": [
          {
            "en": "The commentators also bring the evidence of ordinary speech. At-Tabari closes his list with Ibn Zayd, who after giving mutbaqah adds: the Arabs say awsada al-bab, meaning aghlaqa, he shut the door. Al-Qurtubi reports a second form of the verb from the people of Quraysh: asadtu al-bab, I shut the door. Both notes put the word in the doorway of a house before it is ever applied to the fire. That everyday sense is what lets the verse be heard as a door closing.",
            "bn": "তাফসীরকারেরা সাধারণ কথাবার্তার সাক্ষ্যও হাজির করেন। তাবারী তাঁর তালিকা শেষ করেন ইবন যায়দকে দিয়ে। মুতবাকাহ বলার পর ইবন যায়দ যোগ করেন: আরবরা বলে আওসাদাল বাবা, মানে আগলাকা, সে দরজা বন্ধ করল। কুরতুবী কুরাইশের লোকদের থেকে ক্রিয়াটির আরেকটি রূপ জানান: আসাদতুল বাবা, আমি দরজা বন্ধ করলাম। দুটো কথাই শব্দটিকে আগুনের প্রসঙ্গে আনার আগে ঘরের দরজায় দাঁড় করায়। প্রতিদিনের এই অর্থের কারণেই আয়াতটি কানে বাজে দরজা বন্ধ হওয়ার মতো।"
          },
          {
            "en": "Al-Qurtubi then cites a line of poetry by Ubaydullah ibn Qays ar-Ruqayyat. It speaks of a gazelle within a palace, if only we could enter, with the curtain mu'sad 'alayhi, closed over it. The pairing is the verse's own: the word for shut, joined to 'ala, over, with a pronoun for whoever is kept inside. In the poem the barrier keeps the speaker out; in the verse the same kind of barrier keeps those inside from leaving. The commentators let the parallel stand and draw no further lesson from it.",
            "bn": "এরপর কুরতুবী উবাইদুল্লাহ ইবন কাইস আর-রুকাইয়াতের একটি কবিতার চরণ উদ্ধৃত করেন। চরণটি এক প্রাসাদের ভেতরের এক হরিণীর কথা বলে, আহা, যদি আমরা ভেতরে ঢুকতে পারতাম! কিন্তু পর্দা তার উপর মু'সাদ আলাইহি, বন্ধ করে দেওয়া। জোড়টা আয়াতেরই: বন্ধ বোঝানোর শব্দ, তার সঙ্গে আলা, উপর, আর ভেতরে যে আটকে আছে তার জন্য একটি সর্বনাম। কবিতায় পর্দা বক্তাকে বাইরে আটকে রাখে। আয়াতে একই রকম বাধা ভেতরের লোকদের বেরোতে দেয় না। তাফসীরকারেরা মিলটা রেখে দেন, এর বেশি কোনো শিক্ষা টানেন না।"
          },
          {
            "en": "At-Tabari adds a note on how the word is pronounced. Wa-hiya tuhmaz wa-la tuhmaz, he says: it is read with the hamzah and without it, and both have been recited. So the word may be heard as mu'sadah, or with the glottal stop softened. He names no reciters for either and does not prefer one, and nothing in the texts consulted here says the meaning changes between them. Both forms of the verb reported above, awsada and asada, keep the same sense of shutting.",
            "bn": "শব্দটির উচ্চারণ নিয়ে তাবারী একটি কথা যোগ করেন। ওয়া হিয়া তুহমাযু ওয়া লা তুহমায, তিনি বলেন: শব্দটি হামযাসহ পড়া হয়, হামযা ছাড়াও পড়া হয়, আর দুভাবেই তিলাওয়াত হয়েছে। অর্থাৎ শব্দটি শোনা যেতে পারে মু'সাদাহ হিসেবে, আবার হামযার ধাক্কা নরম করেও। কোন কারী কীভাবে পড়েছেন, তিনি তা বলেন না, কোনোটিকে প্রাধান্যও দেন না। আনা তাফসীরগুলোর কোথাও বলা নেই যে দুই উচ্চারণে অর্থ বদলায়। উপরে ক্রিয়াটির যে দুই রূপ এসেছে, আওসাদা ও আসাদা, দুটোতেই বন্ধ করার একই অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Carried, Not Graded Up",
          "bn": "যে বর্ণনা যেমন এসেছে"
        },
        "p": [
          {
            "en": "Ibn Kathir adds a report through Ibn Marduyah, with a chain running from Abu Salih to Abu Hurayrah (RA) and on to the Prophet ﷺ, in which the gloss on innaha 'alayhim mu'sadah is the same single word: mutbaqah. In the next breath Ibn Kathir records that Abu Bakr ibn Abi Shaybah narrated it through another chain as the words of Abu Salih himself, wa-lam yarfa'hu, without raising it to the Prophet ﷺ. Ibn Kathir gives no grading of his own.",
            "bn": "ইবন কাসীর ইবন মারদুয়াহর সূত্রে একটি বর্ণনা যোগ করেন। এর সনদ আবু সালিহ থেকে আবু হুরায়রা (রাঃ) হয়ে নবী ﷺ পর্যন্ত গেছে, আর তাতে ইন্নাহা আলাইহিম মু'সাদাহর ব্যাখ্যা সেই এক শব্দ: মুতবাকাহ। পরের বাক্যেই ইবন কাসীর জানান, আবু বকর ইবন আবী শাইবা অন্য এক সনদে এটি বর্ণনা করেছেন আবু সালিহের নিজের কথা হিসেবে, ওয়া লাম ইয়ারফা'হু, অর্থাৎ নবী ﷺ পর্যন্ত পৌঁছাননি। ইবন কাসীর নিজে এর কোনো মান নির্ণয় করেননি।"
          },
          {
            "en": "That report reaches Ibn Kathir through Ibn Marduyah, outside the hadith collections this article confirms against, so it is not quoted here as a hadith. No tafsir consulted here attaches to this verse a narration from those collections. That is a sound outcome, not a gap to be filled. The gloss itself does not depend on the report, since at-Tabari has the word mutbaqah from Ibn Abbas (RA), Qatadah and the others without it.",
            "bn": "বর্ণনাটি ইবন কাসীরের কাছে এসেছে ইবন মারদুয়াহর মাধ্যমে, অর্থাৎ এ প্রবন্ধ যে হাদিস-সংকলনগুলোর সঙ্গে মিলিয়ে দেখে, তার বাইরে থেকে। তাই এখানে একে হাদিস হিসেবে উদ্ধৃত করা হলো না। আনা তাফসীরগুলোর কোনোটিই ওই সংকলনগুলো থেকে কোনো বর্ণনা এ আয়াতের সঙ্গে জুড়ে দেয়নি। এতে দোষের কিছু নেই; এটা পূরণ করার মতো কোনো ফাঁক নয়। ব্যাখ্যাটি এ বর্ণনার উপর নির্ভরও করে না। কারণ মুতবাকাহ শব্দটি তাবারী এটি ছাড়াই পেয়েছেন ইবন আব্বাস (রাঃ), কাতাদা ও অন্যদের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heat With No Way Out",
          "bn": "তাপের ভেতর, বেরোনোর পথ নেই"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as the next step after 104:7. Wa-ma'a hadhihi al-hararah al-balighah, he writes: and along with this extreme heat, they are confined within it and have despaired of leaving it; that is why He said, innaha 'alayhim mu'sadah, meaning shut. On his reading the verse adds something to what came before. The fire has been described by what it does; this verse describes what it withholds, which is any way out. He says no more than that about the fire.",
            "bn": "সা'দী আয়াতটিকে পড়েন ১০৪:৭ আয়াতের পরের ধাপ হিসেবে। তিনি লেখেন, ওয়া মাআ হাযিহিল হারারাতিল বালিগাহ: এই তীব্র তাপের সঙ্গে সঙ্গে তারা সেখানে আটকে থাকবে, বেরোনোর আশা তারা হারিয়ে ফেলেছে। সে কারণেই আল্লাহ বলেছেন, ইন্নাহা আলাইহিম মু'সাদাহ, অর্থাৎ বন্ধ। তাঁর পাঠে আয়াতটি আগের কথার সঙ্গে নতুন কিছু যোগ করে। আগুন কী করে, তা আগে বলা হয়েছে। এ আয়াত বলে আগুন কী দেয় না, আর তা হলো বেরোনোর পথ। আগুন নিয়ে সা'দী এর বেশি কিছু বলেন না।"
          },
          {
            "en": "The Muyassar files this verse together with 104:9 and glosses both at once: it is closed over them, in long chains and fetters, so that they do not come out. The chains belong to its reading of the next verse, and are left there. Ma'arif al-Qur'an likewise groups 104:7 to 104:9, but its comment speaks only of the fire reaching the hearts, and it has nothing separate on this verse. So the reading of the closing comes from the Arabic commentators above.",
            "bn": "মুয়াসসার এ আয়াতকে ১০৪:৯ আয়াতের সঙ্গে এক করে দুটোর ব্যাখ্যা একসঙ্গে দেয়: তা তাদের উপর বন্ধ, লম্বা লম্বা শিকল আর বেড়ির মধ্যে, যাতে তারা বেরিয়ে আসতে না পারে। শিকলের কথাটা পরের আয়াতের পাঠের অংশ, তাই সেটা সেখানেই রাখা হলো। মাআরিফুল কুরআনও ১০৪:৭ থেকে ১০৪:৯ পর্যন্ত একসঙ্গে রাখে, তবে তার আলোচনা শুধু হৃদয় পর্যন্ত আগুন পৌঁছানো নিয়ে। এ আয়াত নিয়ে আলাদা কিছু সেখানে নেই। তাই বন্ধ হওয়ার ব্যাখ্যা আসে উপরের আরবি তাফসীরগুলো থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "An Echo From al-Balad",
          "bn": "সূরা আল-বালাদের প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Both Ibn Kathir and al-Qurtubi send the reader back to Surat al-Balad, and the English abridgement of Ibn Kathir names the verse: 90:20, 'alayhim narun mu'sadah, upon them is a fire closed over. The same two words meet there, 'alayhim and mu'sadah, at the close of another surah. Those commentators explained the word at that earlier point and here only point back to it. Their discussion at 90:20 was not among the texts consulted for this article, so it is not reported here, and that verse is left to its own reading.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই পাঠককে ফেরত পাঠান সূরা আল-বালাদে, আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আয়াতটির নম্বরও দেয়: ৯০:২০, আলাইহিম নারুম মু'সাদাহ, তাদের উপর থাকবে বন্ধ করে দেওয়া আগুন। সেখানেও এই দুটো শব্দ একসঙ্গে, আলাইহিম আর মু'সাদাহ, আরেকটি সূরার শেষে। এই তাফসীরকারেরা শব্দটির ব্যাখ্যা সেখানেই দিয়েছেন, এখানে শুধু সেদিকে ইশারা করেন। ৯০:২০ আয়াতে তাঁদের আলোচনা এ প্রবন্ধের জন্য আনা লেখার মধ্যে ছিল না। তাই তা এখানে জানানো হলো না, আর সে আয়াতকে তার নিজের আলোচনার জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "The translations in this app show how wide the word can be heard. The English renders the verse as closed down upon them, which sits near mutbaqah. The Bengali renders it as surrounding them from every side, an enclosure rather than a lid or a locked door. None of the commentators consulted here uses the word surrounding, but each rendering keeps the sense that matters to all of them: those inside cannot get out. A reader comparing translations is meeting, in small, the same range the commentators recorded.",
            "bn": "এ অ্যাপের অনুবাদগুলো দেখায়, শব্দটিকে কত ভাবে শোনা যায়। ইংরেজি অনুবাদে আছে closed down upon them, উপর থেকে বন্ধ করে দেওয়া, যা মুতবাকাহর কাছাকাছি। বাংলা অনুবাদে আছে, তা তাদেরকে চতুর্দিক থেকে পরিবেষ্টন করে রাখবে, অর্থাৎ ঢাকনা বা তালাবদ্ধ দরজা নয়, চারদিকের ঘেরাও। আনা তাফসীরগুলোর কেউ পরিবেষ্টনের শব্দ ব্যবহার করেননি। তবু দুটো অনুবাদেই সেই অর্থটুকু আছে, যা সব তাফসীরকারের কাছেই মূল: ভেতরের লোকেরা বেরোতে পারে না। অনুবাদ মিলিয়ে পড়া পাঠক ছোট পরিসরে সেই বিস্তারই দেখেন, যা তাফসীরকারেরা লিপিবদ্ধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Target List",
          "bn": "ছবি আঁকা, নিশানা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names, a fire closed over those whom 104:1 to 104:3 portray by their conduct, and it licenses nothing against any living person or community. It names no tribe, no faction and no neighbour. At-Tabari's 'alayhim points to the mockers and slanderers of the opening verse, a description of deeds, and the article passes no verdict on anyone's end. Judgement over any soul belongs to Allah, and not to a reader of this verse.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: এমন আগুন, যা তাদের উপর বন্ধ, ১০৪:১ থেকে ১০৪:৩ আয়াত যাদের ছবি এঁকেছে তাদের আচরণ দিয়ে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি এ আয়াত দেয় না। এতে কোনো গোত্র, দল বা প্রতিবেশীর নাম নেই। তাবারীর ব্যাখ্যায় আলাইহিম ইঙ্গিত করে প্রথম আয়াতের খোঁটাদাতা আর নিন্দুকদের দিকে, আর সেটা কাজের বর্ণনা। কারও পরিণতি নিয়ে এ প্রবন্ধ কোনো রায় দেয় না। কোনো মানুষের ব্যাপারে ফয়সালা আল্লাহর, এ আয়াতের পাঠকের নয়।"
          },
          {
            "en": "There is a sharper reason for restraint. The conduct the surah condemns is the mocking look and the slanderous word. A reader who takes this verse and fastens it on a rival, a relative or a group has done with the tongue the very thing 104:1 opened against. The verse is easy to aim outward and hard to aim inward, and only the inward aim fits the surah. The question it leaves is not who is inside, but whether the reader recognises any of the portrait.",
            "bn": "সংযমের পেছনে আরও তীক্ষ্ণ একটা কারণ আছে। সূরাটি যে আচরণের নিন্দা করে, তা হলো খোঁটা দেওয়া দৃষ্টি আর অপবাদের কথা। কোনো পাঠক যদি এ আয়াত তুলে কোনো প্রতিদ্বন্দ্বী, আত্মীয় বা দলের গায়ে সেঁটে দেয়, তবে ১০৪:১ আয়াত যার বিরুদ্ধে শুরু হয়েছিল, জিহ্বা দিয়ে সে ঠিক সেই কাজটাই করল। আয়াতটিকে বাইরের দিকে তাক করা সহজ, নিজের দিকে ফেরানো কঠিন। অথচ সূরার সঙ্গে মেলে কেবল নিজের দিকে ফেরানো। আয়াত যে প্রশ্ন রেখে যায় তা এই নয় যে ভেতরে কারা। প্রশ্ন হলো, ছবিটার কোনো অংশে পাঠক নিজেকে চিনতে পারেন কি না।"
          },
          {
            "en": "Read that way, the image of a shut door turns back on the reader's present. The man of 104:3 thought his wealth would keep him forever; the surah's answer ends here, with a door that does not open. Every habit the portrait describes is still, for the reader, a door that can be walked through the other way: a remark withdrawn, a name restored, wealth spent rather than counted. The verse speaks of a closing. The reader, while reading it, is still among doors that open.",
            "bn": "এভাবে পড়লে বন্ধ দরজার ছবিটা পাঠকের বর্তমানের দিকে ফিরে আসে। ১০৪:৩ আয়াতের লোকটি ভেবেছিল তার সম্পদ তাকে চিরকাল টিকিয়ে রাখবে। সূরার জবাব শেষ হয় এখানে, এমন এক দরজায়, যা আর খোলে না। ছবিতে যে অভ্যাসগুলোর কথা আছে, পাঠকের জন্য সেগুলোর প্রতিটি এখনো এমন দরজা, যা দিয়ে উল্টো দিকে হেঁটে বেরোনো যায়: ফিরিয়ে নেওয়া একটা কথা, ফিরিয়ে দেওয়া কারও সুনাম, গুনে না রেখে খরচ করা সম্পদ। আয়াতটি বন্ধ হওয়ার কথা বলে। আর পাঠক, যতক্ষণ তা পড়ছেন, ততক্ষণ এখনো খোলা দরজার মাঝেই আছেন।"
          }
        ]
      }
    ]
  }
});
