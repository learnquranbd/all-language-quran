/**
 * Tadabbur long-form articles — surah 89.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "89:6-7": {
    "sections": [
      {
        "h": {
          "en": "Seeing With the Heart's Eye",
          "bn": "অন্তরের চোখে দেখা"
        },
        "p": [
          {
            "en": "Alam tara kayfa fa'ala rabbuka bi-'Ad, Irama dhati al-'imad: have you not seen how your Lord dealt with 'Ad, Iram of the pillars? The two verses hold nine Arabic words, six and then three. They come straight after the oaths and the question of 89:5. Ibn Kathir explains the turn: having mentioned people of worship and obedience, Allah now mentions 'Ad, who were rebellious, insolent and tyrannical, outside His obedience, deniers of His messengers and rejecters of His books.",
            "bn": "আলাম তারা কাইফা ফা‘আলা রাব্বুকা বি‘আদ, ইরামা যাতিল ‘ইমাদ: তুমি কি দেখোনি, তোমার রব ‘আদের সঙ্গে কী করেছিলেন, স্তম্ভওয়ালা ইরামের সঙ্গে? দুই আয়াতে মোট নয়টি আরবি শব্দ, প্রথমটিতে ছয়টি, পরেরটিতে তিনটি। শপথগুলো আর ৮৯:৫ আয়াতের প্রশ্নের ঠিক পরেই এদের স্থান। এই মোড় ঘোরার কারণ ইবন কাসীর ব্যাখ্যা করেন। ইবাদত আর আনুগত্যের মানুষদের কথা বলার পর আল্লাহ এবার ‘আদের কথা আনেন। তারা ছিল বিদ্রোহী, উদ্ধত আর জালিম। তাঁর আনুগত্যের বাইরে, তাঁর রাসূলদের মিথ্যা বলত, তাঁর কিতাবগুলো অস্বীকার করত।"
          },
          {
            "en": "Who is asked to see, and with what? At-Tabari reads it as said to the Prophet ﷺ: have you not looked, Muhammad, with the eye of your heart? As-Sa'di says the same, with your heart and your insight. Al-Qurtubi calls it seeing of the heart, addressed to the Prophet ﷺ with a general intent, and notes that the story of 'Ad was well known to the first hearers, since 'Ad had lived in the lands of the Arabs. Al-Baghawi gives al-Farra': have you not been told? and az-Zajjaj: have you not known? The sense, he says, is wonder.",
            "bn": "কাকে দেখতে বলা হচ্ছে, আর কী দিয়ে? তাবারীর পাঠে কথাটা নবী ﷺ-কে বলা: হে মুহাম্মাদ, তুমি কি অন্তরের চোখে তাকিয়ে দেখোনি? সাদীও একই কথা বলেন, অন্তর আর অন্তর্দৃষ্টি দিয়ে দেখা। কুরতুবী একে অন্তরের দেখা বলেন। সম্বোধন নবী ﷺ-কে, কিন্তু উদ্দেশ্য সবাই। তিনি আরও বলেন, ‘আদের ঘটনা প্রথম শ্রোতাদের কাছে সুপরিচিত ছিল, কারণ ‘আদ আরবদের দেশেই বাস করত। বাগাভী ফাররার মত আনেন: তোমাকে কি জানানো হয়নি? আর যাজ্জাজের মত: তুমি কি জানো না? তাঁর মতে এখানে ভাবটা বিস্ময়ের।"
          }
        ]
      },
      {
        "h": {
          "en": "The Earlier of Two 'Ads",
          "bn": "দুই ‘আদের আগের দল"
        },
        "p": [
          {
            "en": "Ibn Kathir identifies them as the first 'Ad, descendants of 'Ad son of Iram son of 'Aws son of Sam son of Nuh, as Ibn Ishaq said. They are the people to whom Allah sent His messenger Hud (AS). They denied and opposed him, so Allah saved him and those who believed with him, and destroyed the rest with a furious wind. Ibn Kathir quotes 69:7 and 69:8 for it, and adds that Allah told their story in several places so that believers would take a lesson from their fall.",
            "bn": "ইবন কাসীর বলেন, এরা প্রথম ‘আদ। ইবন ইসহাকের বর্ণনায় এদের বংশ: ‘আদ, ইরামের পুত্র, ইরাম আওসের পুত্র, আওস সামের পুত্র, সাম নূহের পুত্র। এরাই সেই জাতি, যাদের কাছে আল্লাহ তাঁর রাসূল হূদ (আঃ)-কে পাঠিয়েছিলেন। তারা তাঁকে মিথ্যা বলল, তাঁর বিরোধিতা করল। আল্লাহ তাঁকে আর তাঁর সঙ্গে ঈমান আনা লোকদের বাঁচালেন, বাকিদের ধ্বংস করলেন প্রচণ্ড ঝড়ো বাতাসে। এর প্রমাণে ইবন কাসীর ৬৯:৭ আর ৬৯:৮ আয়াত উদ্ধৃত করেন। তিনি আরও বলেন, কুরআনে আল্লাহ একাধিক জায়গায় তাদের কাহিনি বলেছেন, যাতে মুমিনেরা তাদের পতন থেকে শিক্ষা নেয়।"
          },
          {
            "en": "Why add Iram at all? Ma'arif al-Qur'an says Iram marks out which of two 'Ads is meant: the earlier, called 'Ad al-Ula, the first 'Ad, in 53:50. Al-Qurtubi gives the same picture as one view: there were two 'Ads, the first of them Iram, named after their ancestor, and those after them called the later 'Ad. On this account, the name ties the people to a known line.",
            "bn": "ইরাম নামটা যোগ হলো কেন? মাআরিফুল কুরআন বলে, দুই ‘আদের মধ্যে কোনটির কথা হচ্ছে, ইরাম তা আলাদা করে দেয়। এরা আগের দল, ৫৩:৫০ আয়াতে যাদের বলা হয়েছে ‘আদ আল-উলা, প্রথম ‘আদ। কুরতুবীও একটি মত হিসেবে একই ছবি দেন। ‘আদ ছিল দুটি, প্রথমটি ইরাম, তাদের পূর্বপুরুষের নামে ডাকা। পরে যারা এল, তাদের বলা হলো পরবর্তী ‘আদ। এ ব্যাখ্যায় ইরাম নামটি জাতিটিকে এক চেনা বংশধারার সঙ্গে বেঁধে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ancestor, Tribe, or Town",
          "bn": "পূর্বপুরুষ, গোত্র, নাকি শহর"
        },
        "p": [
          {
            "en": "What was Iram? Some made it a person. Ibn Ishaq, in Ibn Kathir and at-Tabari, gives the line 'Ad son of Iram, which makes Iram 'Ad's father. Al-Qurtubi reports the same from Ibn Abbas through 'Ata', and also reports from Ibn Ishaq that Iram was Sam son of Nuh. Al-Baghawi has Ibn Ishaq calling Iram 'Ad's grandfather. Al-Kalbi, in al-Baghawi, makes Iram the man in whom the lines of 'Ad and Thamud meet: people used to say 'Ad Iram and Thamud Iram. The order differs by source.",
            "bn": "ইরাম কী ছিল? কেউ একে মানুষের নাম ধরেছেন। ইবন কাসীর ও তাবারীতে ইবন ইসহাকের দেওয়া বংশধারা: ‘আদ ইবন ইরাম, অর্থাৎ ইরাম ‘আদের পিতা। কুরতুবী আতার সূত্রে ইবন আব্বাস থেকেও একই কথা আনেন, আবার ইবন ইসহাক থেকে এ-ও আনেন যে ইরাম হলেন নূহের পুত্র সাম। বাগাভীর বর্ণনায় ইবন ইসহাক ইরামকে ‘আদের দাদা বলেছেন। বাগাভীতে কালবীর মত, ইরামের কাছে এসে ‘আদ আর সামূদের বংশধারা মিলেছে। লোকে বলত, ‘আদ ইরাম, সামূদ ইরাম। বংশতালিকার ক্রম একেক সূত্রে একেক রকম।"
          },
          {
            "en": "Others made it a people. Qatadah, in at-Tabari: we used to be told that Iram was a tribe of 'Ad, the royal house of 'Ad. Ibn Kathir quotes Qatadah and as-Suddi for the royal house and calls it a good, strong view. At-Tabari judges a tribe of 'Ad the likeliest meaning, as Qatadah said, and Allah knows best. Al-Muyassar reads the tribe of Iram, and as-Sa'di the well-known tribe in Yemen. Mujahid called Iram a nation, and in another report, the ancient one; al-Qurtubi adds a third report from him, the strong.",
            "bn": "অন্যরা একে একটি জাতি ধরেছেন। তাবারীতে কাতাদার কথা: আমাদের বলা হতো, ইরাম ‘আদের একটি গোত্র, ‘আদের রাজবংশ। ইবন কাসীর রাজবংশের কথাটা কাতাদা ও সুদ্দী থেকে এনে একে ভালো ও মজবুত মত বলেন। তাবারীর বিচারে সবচেয়ে সম্ভাব্য অর্থ ‘আদের একটি গোত্র, যেমন কাতাদা বলেছেন, আর আল্লাহই ভালো জানেন। মুয়াসসার পড়ে ইরাম গোত্র, সাদী বলেন ইয়েমেনের সুপরিচিত গোত্র। মুজাহিদ ইরামকে বলেছেন একটি উম্মত, আরেক বর্ণনায় প্রাচীন জাতি। কুরতুবী তাঁর থেকে তৃতীয় একটি বর্ণনা আনেন: শক্তিশালী।"
          },
          {
            "en": "A third group made Iram a city. Al-Maqburi, in at-Tabari, said Damascus, as did Sa'id ibn al-Musayyib and 'Ikrimah in al-Baghawi; al-Qurtubi adds Khalid ar-Rab'i and a report through Ibn Wahb and Ashhab from Malik. Ibn al-'Arabi, quoted by al-Qurtubi, chose Damascus. Muhammad ibn Ka'b al-Qurazi said Alexandria, in all three. A last view reads Iram as a word, not a name: Ibn Abbas and ad-Dahhak, in reports at-Tabari carries, take it as the destroyed, as one says arama banu fulan, such a clan perished.",
            "bn": "তৃতীয় একদল ইরামকে শহর বলেছেন। তাবারীতে মাকবুরীর মত, দামেস্ক। বাগাভীতে সাঈদ ইবনুল মুসাইয়িব ও ইকরিমারও একই মত। কুরতুবী এর সঙ্গে যোগ করেন খালিদ আর-রাব‘ঈ আর ইবন ওয়াহব ও আশহাবের সূত্রে মালিক থেকে একটি বর্ণনা। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবীও দামেস্ককেই বেছে নেন। মুহাম্মাদ ইবন কা‘ব কুরাযী বলেছেন আলেকজান্দ্রিয়া, তিনটি তাফসীরেই তা আছে। শেষ একটি মতে ইরাম কোনো নাম নয়, একটি শব্দ। তাবারীর আনা বর্ণনায় ইবন আব্বাস ও দাহহাক এর অর্থ করেন ধ্বংসপ্রাপ্ত। যেমন বলা হয়, আরামা বানু ফুলান, অমুক গোত্র ধ্বংস হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Left Without Tanwin",
          "bn": "তানবীন ছাড়া একটি নাম"
        },
        "p": [
          {
            "en": "Grammar carries part of the argument. Al-Qurtubi gives the reading of the generality as bi-'Adin, with tanwin on 'Ad, followed by Irama, left undeclined. On that reading Iram is the tribe's name and 'Ad their father's, and Iram stands as badal or 'atf bayan for 'Ad. Al-Hasan and Abu al-'Aliyah read bi-'Adi Irama, in construct; then Iram is their mother's name or their town's, meaning 'Ad, the people of Iram. Ibn Kathir calls Iram 'atf bayan, a further identification, and Ma'arif al-Qur'an allows either 'atf bayan or badal.",
            "bn": "যুক্তির একটা অংশ বহন করে ব্যাকরণ। কুরতুবী বলেন, অধিকাংশের পাঠ বি‘আদিন, ‘আদ শব্দে তানবীনসহ, তারপর ইরামা, যা পূর্ণ বিভক্তি নেয় না। এ পাঠে ইরাম গোত্রের নাম, ‘আদ তাদের পিতার নাম, আর ইরাম ‘আদের বদল কিংবা আতফে বায়ান। হাসান ও আবুল আলিয়া পড়েছেন বি‘আদি ইরামা, সম্বন্ধপদ করে। তখন ইরাম তাদের মায়ের নাম, কিংবা তাদের শহরের নাম। অর্থ দাঁড়ায়, ইরামবাসী ‘আদ। ইবন কাসীর ইরামকে বলেন আতফে বায়ান, পরিচয়টা আরও স্পষ্ট করার জন্য। মাআরিফুল কুরআন আতফে বায়ান বা বদল, দুটিই সম্ভব বলে।"
          },
          {
            "en": "At-Tabari uses the missing tanwin to decide. Had Iram meant the ancient, as reported from Mujahid, it would carry tanwin, so he calls that view meaningless. Had Iram been a town or 'Ad's ancestor, he says, the reading would put 'Ad in construct with it, as Arabs say 'Amr of Zubayd or A'sha of Hamdan. The readers, in his account, agreed on neither construct nor tanwin, and that points to a tribe. Al-Qurtubi, though, records al-Hasan and Abu al-'Aliyah reading the construct. Two accounts of the readings stand here side by side.",
            "bn": "তাবারী তানবীন না থাকাকেই মীমাংসার ভিত্তি করেন। মুজাহিদ থেকে বর্ণিত অর্থ, প্রাচীন, যদি উদ্দেশ্য হতো, তবে শব্দটিতে তানবীন থাকত। তাই এ মতকে তিনি অর্থহীন বলেন। তাঁর মতে ইরাম যদি শহর বা ‘আদের পূর্বপুরুষ হতো, তবে পাঠে ‘আদকে তার সঙ্গে সম্বন্ধপদ করা হতো, যেমন আরবরা বলে যুবাইদের আমর বা হামদানের আ‘শা। তাঁর বর্ণনায় কারীগণ সম্বন্ধপদ না করা আর তানবীন না দেওয়ায় একমত, আর এটাই গোত্রের দিকে ইঙ্গিত করে। অথচ কুরতুবী হাসান ও আবুল আলিয়ার সম্বন্ধপদের পাঠ উল্লেখ করেছেন। পাঠ নিয়ে দুজনের দুই বিবরণ এখানে পাশাপাশি রইল।"
          },
          {
            "en": "Al-Qurtubi lists further readings: Arama with two fathas, again from al-Hasan; Irm with a still ra; Iram in construct with dhat al-'imad; and Aram with a fatha on the hamza, from Mujahid, ad-Dahhak and Qatadah, Mujahid likening them to the aram, the landmarks. Ibn Kathir, for his part, says the city view does not hold together if Iram is badal or 'atf bayan, since the point is the destruction of the tribe called 'Ad, not news of a city or region.",
            "bn": "কুরতুবী আরও কয়েকটি পাঠের তালিকা দেন। হাসান থেকেই আরামা, দুই যবরসহ। রা-তে সাকিন দিয়ে ইরম। যাতিল ‘ইমাদের সঙ্গে ইরামের সম্বন্ধপদ। আর হামযায় যবর দিয়ে আরাম, মুজাহিদ, দাহহাক ও কাতাদা থেকে। মুজাহিদ এ পাঠে তাদের তুলনা করেছেন আরাম, অর্থাৎ পথচিহ্নের সঙ্গে। ইবন কাসীর অন্যদিকে বলেন, ইরাম যদি বদল বা আতফে বায়ান হয়, তবে শহরের মত খাপ খায় না। কারণ বক্তব্য হলো ‘আদ নামের গোত্রের ধ্বংস, কোনো শহর বা অঞ্চলের খবর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Poles, Stature, or Columns",
          "bn": "খুঁটি, দেহ, নাকি স্তম্ভ"
        },
        "p": [
          {
            "en": "Dhat al-'imad, of the pillars, drew as many readings. Mujahid, in at-Tabari: people of poles who did not stay put. Qatadah: we were told they were people of poles, not settling, always moving. Ibn Kathir says they lived in tents of hair raised on strong poles. Al-Qurtubi gives Qatadah at more length: people of tents and poles who moved their dwellings in search of the rains and the grazing, then returned to their homes.",
            "bn": "যাতিল ‘ইমাদ, স্তম্ভওয়ালা, এ শব্দেও ব্যাখ্যা অনেক। তাবারীতে মুজাহিদ বলেন, তারা ছিল খুঁটির মানুষ, এক জায়গায় থিতু হতো না। কাতাদা বলেন, আমাদের জানানো হয়েছে, তারা খুঁটির মানুষ ছিল, স্থায়ী বসতি গড়ত না, ঘুরে বেড়াত। ইবন কাসীর বলেন, তারা থাকত পশমের তাঁবুতে, যা মজবুত খুঁটির উপর দাঁড় করানো হতো। কুরতুবী কাতাদার কথা আরও বিস্তারে দেন। তারা তাঁবু আর খুঁটির মানুষ, বৃষ্টি আর চারণভূমির খোঁজে ঘরবাড়ি নিয়ে সরে যেত, পরে আবার নিজেদের বসতিতে ফিরত।"
          },
          {
            "en": "Others read height. Ibn Abbas, in at-Tabari: their tallness was like pillars. Mujahid, in another report there, says they had bodies up in the sky. Abu 'Ubaydah, in al-Qurtubi, notes that Arabs call a tall man mu'ammad. Ma'arif al-Qur'an takes this reading: they were very tall in stature. Others read buildings. Ibn Zayd, in at-Tabari, says 'Ad, the people of Hud (AS), built it while they were in al-Ahqaf, which he places in Hadramawt. Al-Muyassar speaks of buildings raised on columns. Ad-Dahhak read strength and hardness, and as-Sa'di intense strength, insolence and tyranny.",
            "bn": "অন্যরা অর্থ করেছেন উচ্চতা। তাবারীতে ইবন আব্বাস বলেন, তাদের দৈর্ঘ্য ছিল স্তম্ভের মতো। সেখানেই আরেক বর্ণনায় মুজাহিদ বলেন, তাদের দেহ উঠে গিয়েছিল আকাশের দিকে। কুরতুবীতে আবু উবায়দা জানান, আরবরা লম্বা মানুষকে বলে মু‘আম্মাদ। মাআরিফুল কুরআন এ অর্থই নেয়: তারা ছিল খুব দীর্ঘদেহী। কেউ আবার অর্থ করেছেন দালান। তাবারীতে ইবন যায়দ বলেন, হূদ (আঃ)-এর জাতি ‘আদ তা নির্মাণ করেছিল আহকাফে থাকার সময়। আহকাফকে তিনি হাদরামাওতে বলে উল্লেখ করেন। মুয়াসসার বলে স্তম্ভের উপর দাঁড় করানো উঁচু দালানের কথা। দাহহাক অর্থ করেছেন শক্তি ও কাঠিন্য, আর সাদী প্রচণ্ড শক্তি, ঔদ্ধত্য আর স্বেচ্ছাচার।"
          },
          {
            "en": "At-Tabari chooses the tent-poles. In Arabic speech, he says, 'imad is known as the wood of tents and the posts that bear a building, and no building of theirs on columns is known by a sound report. Ibn Kathir notes that Ibn Jarir chose the first and rejected the height reading, and says he was right. Ma'arif and al-Muyassar read otherwise. Ibn Kathir closes on a point that holds either way: buildings, nomads' tent-poles, weapons or height, 'Ad were a tribe and a nation.",
            "bn": "তাবারী বেছে নেন তাঁবুর খুঁটির অর্থ। তাঁর কথা, আরবদের ভাষায় ‘ইমাদ বলতে বোঝায় তাঁবুর কাঠ আর দালান যে খুঁটির উপর দাঁড়ায়। তাদের কোনো স্তম্ভওয়ালা দালানের কথা কোনো সহীহ খবরে জানা যায় না। ইবন কাসীর জানান, ইবন জারীর প্রথম অর্থটি নিয়েছেন, উচ্চতার অর্থ নাকচ করেছেন, আর তিনি ঠিকই করেছেন। মাআরিফ ও মুয়াসসার অবশ্য ভিন্ন অর্থ নেয়। ইবন কাসীর শেষ করেন এমন এক কথায়, যা সব অর্থেই খাটে। স্তম্ভ মানে দালান হোক, যাযাবরের তাঁবুর খুঁটি হোক, অস্ত্র হোক বা উচ্চতা, ‘আদ ছিল একটি গোত্র, একটি উম্মত।"
          }
        ]
      },
      {
        "h": {
          "en": "Tall Tales, Weighed and Set Aside",
          "bn": "অতিরঞ্জিত কাহিনি, মেপে দেখা"
        },
        "p": [
          {
            "en": "Al-Qurtubi carries reports of their height that climb fast: hundreds of cubits under Ibn Abbas's name through 'Ata', seventy in another report from him, and twelve from Qatadah, which al-Qurtubi introduces with the word claimed. The text gives no chain for any of them. Ibn al-'Arabi, quoted by al-Qurtubi, calls the seventy-cubit report false, because it is in the Sahih that Allah created Adam sixty cubits tall and that creation has kept decreasing since. The report is in Sahih al-Bukhari (3326), a general narration not attached to this verse. The page gives it in English as follows.",
            "bn": "কুরতুবী তাদের উচ্চতা নিয়ে এমন সব বর্ণনা আনেন, যা দ্রুত বাড়তে থাকে। আতার সূত্রে ইবন আব্বাসের নামে কয়েকশো হাত, তাঁর থেকে আরেক বর্ণনায় সত্তর হাত, আর কাতাদা থেকে ১২ হাত, যা কুরতুবী শুরু করেন ‘দাবি করেছেন’ শব্দে। এগুলোর কোনোটির সনদ লেখায় নেই। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী সত্তর হাতের বর্ণনাকে বাতিল বলেন। কারণ সহীহতে আছে, আল্লাহ আদমকে ষাট হাত লম্বা করে সৃষ্টি করেছেন, আর তারপর থেকে সৃষ্টি ছোট হয়েই চলেছে। বর্ণনাটি সহীহ বুখারীতে আছে (৩৩২৬)। এটি একটি সাধারণ হাদীস, এ আয়াতের সঙ্গে যুক্ত নয়। পাতাটির ইংরেজি পাঠের বাংলা রূপ নিচে।"
          },
          {
            "en": "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Allah created Adam, making him 60 cubits tall. When He created him, He said to him, \"Go and greet that group of angels, and listen to their reply, for it will be your greeting (salutation) and the greeting (salutations of your offspring.\" So, Adam said (to the angels), As-Salamu Alaikum (i.e. Peace be upon you). The angels said, \"As-salamu Alaika wa Rahmatu-l-lahi\" (i.e. Peace and Allah's Mercy be upon you). Thus the angels added to Adam's salutation the expression, 'Wa Rahmatu-l-lahi,' Any person who will enter Paradise will resemble Adam (in appearance and figure). People have been decreasing in stature since Adam's creation.",
            "bn": "আবু হুরায়রা (রাঃ) থেকে বর্ণিত: নবী ﷺ বলেছেন, “আল্লাহ আদমকে সৃষ্টি করলেন, তাঁর উচ্চতা ছিল ৬০ হাত। সৃষ্টি করে তাঁকে বললেন, যাও, ফেরেশতাদের ওই দলটিকে সালাম দাও, আর শোনো তারা কী জবাব দেয়। সেটাই হবে তোমার অভিবাদন, আর তোমার বংশধরদের অভিবাদন। আদম (ফেরেশতাদের) বললেন, আসসালামু আলাইকুম (অর্থাৎ আপনাদের উপর শান্তি)। ফেরেশতারা বললেন, আসসালামু আলাইকা ওয়া রাহমাতুল্লাহ (অর্থাৎ আপনার উপর শান্তি ও আল্লাহর রহমত)। এভাবে ফেরেশতারা আদমের সালামে ‘ওয়া রাহমাতুল্লাহ’ কথাটি যোগ করলেন। যে-ই জান্নাতে প্রবেশ করবে, সে আকৃতি ও গড়নে আদমের মতো হবে। আদমের সৃষ্টির পর থেকে মানুষের উচ্চতা কমেই চলেছে।”"
          },
          {
            "en": "Ma'arif al-Qur'an says the Qur'an left out their measurement as unnecessary, that Israelite traditions tell incredible things about their stature, and that the figure reported from Ibn Abbas and Muqatil also seems drawn from them. Ma'arif reports that some made Iram a paradise built by Shaddad son of 'Ad, and al-Qurtubi carries such accounts with no chain. Ibn Kathir warns against them explicitly, so that nobody is taken in: a city of gold and silver is a fable of the Israelites, and the tale of a Bedouin who came upon it has no sound chain.",
            "bn": "মাআরিফুল কুরআন বলে, তাদের মাপজোখ কুরআন বাদ রেখেছে, কারণ তার প্রয়োজন ছিল না। ইসরাঈলী বর্ণনাগুলো তাদের দৈহিক গড়ন নিয়ে অবিশ্বাস্য সব কথা বলে। ইবন আব্বাস ও মুকাতিল থেকে বর্ণিত মাপটিও সেখান থেকেই নেওয়া বলে মনে হয়। মাআরিফ জানায়, কেউ কেউ ইরামকে বলেছেন ‘আদের পুত্র শাদ্দাদের গড়া এক বেহেশত। কুরতুবী এমন বিবরণ আনেন কোনো সনদ ছাড়াই। কেউ যেন ধোঁকা না খায়, তাই ইবন কাসীর স্পষ্ট করে এসব থেকে সাবধান করেন। সোনা-রুপার শহরের বর্ণনা ইসরাঈলীদের কল্পকাহিনি, আর এক বেদুঈনের সেই শহরে গিয়ে পড়ার গল্পের সনদ সহীহ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Turned Into Boast",
          "bn": "নিয়ামত যখন অহংকার"
        },
        "p": [
          {
            "en": "Ibn Kathir says they were the strongest people of their time in build and the mightiest in force. That, he says, is why Hud (AS) reminded them of the favour and directed them to spend it in obedience to the Lord who created them, and he cites 7:69: remember when He made you successors after the people of Nuh and increased you in stature. He sets beside it 41:15: as for 'Ad, they were arrogant in the land without right and said, who is mightier than us in strength?",
            "bn": "ইবন কাসীর বলেন, নিজেদের যুগে গড়নে তারা ছিল সবচেয়ে মজবুত, শক্তিতে সবচেয়ে প্রবল। এ কারণেই হূদ (আঃ) তাদের এই নিয়ামতের কথা মনে করিয়ে দেন, আর বলেন, যে রব তাদের সৃষ্টি করেছেন, তাঁর আনুগত্যে এ শক্তি খরচ করতে। প্রমাণে তিনি ৭:৬৯ আয়াত আনেন: স্মরণ করো, তিনি তোমাদের নূহের জাতির পর উত্তরসূরি বানিয়েছেন, আর দৈহিক গড়নে তোমাদের বাড়িয়ে দিয়েছেন। তার পাশে রাখেন ৪১:১৫ আয়াত: ‘আদ পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল, বলেছিল, শক্তিতে আমাদের চেয়ে প্রবল কে?"
          },
          {
            "en": "Al-Qurtubi cites the same line of 41:15 for ad-Dahhak's reading of the pillars as strength. Al-Baghawi names the purpose: the verse makes the people of Makkah fear, for it tells how He destroyed those who lived longer and were stronger than they. The module's article on 7:69 reads the favour as an argument Hud (AS) made; these two verses show where the refusal ended. The gift was real, and so was the reminder. What turned it into ruin was the boast that nothing could match them.",
            "bn": "স্তম্ভকে শক্তি অর্থে নেওয়ার পক্ষে দাহহাকের দলিল হিসেবে কুরতুবী ৪১:১৫ আয়াতের এই অংশটিই আনেন। বাগাভী উদ্দেশ্যটা খুলে বলেন। আয়াতটি মক্কাবাসীকে ভয় দেখায়, কারণ এতে আছে, যারা তাদের চেয়ে বেশি দিন বাঁচত আর বেশি শক্তিশালী ছিল, তাদের তিনি কীভাবে ধ্বংস করেছিলেন। এই মডিউলে ৭:৬৯ আয়াতের প্রবন্ধ নিয়ামতকে দেখে হূদ (আঃ)-এর যুক্তি হিসেবে। এ দুই আয়াত দেখায়, প্রত্যাখ্যানের শেষ কোথায় গিয়ে ঠেকল। দানটা সত্যি ছিল, মনে করিয়ে দেওয়াও সত্যি। সর্বনাশ ডেকে আনল এই অহংকার যে, তাদের সমকক্ষ কেউ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Heirs Named Today",
          "bn": "আজকের কোনো উত্তরসূরি নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses describe what the text describes: a people of the past named 'Ad, called by the name Iram, and what their Lord did with them. They license nothing against any living person or community. They give nobody standing to name a tribe, a nation or a town of today as Iram or as the heirs of 'Ad or to treat any place as cursed. Where Iram stood is among the questions the commentators answered differently, and this article leaves it with them.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত দুটি শুধু সেটুকুই বলে, যা কুরআনে আছে: অতীতের এক জাতি, যার নাম ‘আদ, যাদের ইরাম নামে ডাকা হয়েছে, আর তাদের রব তাদের সঙ্গে কী করেছিলেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো গোত্র, জাতি বা শহরকে ইরাম কিংবা ‘আদের উত্তরসূরি বলে দাগানোর অধিকার কাউকে দেয় না। কোনো জায়গাকে অভিশপ্ত ভাবারও না। ইরাম কোথায় ছিল, তার উত্তর তাফসীরকারেরা ভিন্ন ভিন্ন দিয়েছেন। এ প্রবন্ধ প্রশ্নটা তাঁদের কাছেই রেখে দেয়।"
          },
          {
            "en": "What the verses leave the reader is the question itself: have you not seen? A reader who has the health, the skill or the walls that his own age admires can ask it of himself. Do I treat what I have been given as proof that nothing can reach me? Have I been reminded of a favour and answered with a boast? Those who ask that honestly have seen what the verses asked them to see.",
            "bn": "আয়াত দুটি পাঠকের হাতে যা রেখে যায়, তা প্রশ্নটাই: তুমি কি দেখোনি? যে পাঠকের আছে স্বাস্থ্য, দক্ষতা কিংবা এমন দেয়াল, যা তার যুগের মানুষ তারিফ করে, তিনি প্রশ্নটা নিজেকেই করতে পারেন। আমাকে যা দেওয়া হয়েছে, আমি কি তাকে এমন প্রমাণ ভাবি যে কিছুই আমাকে ছুঁতে পারবে না? কোনো নিয়ামতের কথা মনে করিয়ে দেওয়া হলে আমি কি জবাব দিয়েছি অহংকারে? যিনি সততার সঙ্গে এ প্রশ্ন করেন, আয়াত দুটি যা দেখতে বলেছে, তিনি তা দেখেছেন।"
          }
        ]
      }
    ]
  },
  "89:20": {
    "sections": [
      {
        "h": {
          "en": "The Last Charge Is a Love",
          "bn": "শেষ অভিযোগটি এক ভালোবাসা"
        },
        "p": [
          {
            "en": "Wa tuhibbuna al-mala hubban jamma: and you love wealth with a love that is jamm. The verse is four words in the Arabic, and its verb and the noun after the object come from one root, you love and a love. It closes a short run of charges. Just before it, 89:15 and 89:16 report the claim of man: when his Lord is generous to him he says, my Lord has honoured me, and when his provision is restricted he says, my Lord has humiliated me. Then 89:17 opens with kalla, no, and the charges begin.",
            "bn": "ওয়া তুহিব্বূনাল মালা হুব্বান জাম্মা: আর তোমরা সম্পদকে ভালোবাস 'জাম্ম' ভালোবাসায়। আরবিতে আয়াতটি মাত্র চারটি শব্দ। ক্রিয়া আর বস্তুর পরের নামপদটি একই ধাতু থেকে এসেছে: ভালোবাস, ভালোবাসায়। ছোট্ট এক অভিযোগের ধারা এ আয়াতে এসে থামে। ঠিক আগে ৮৯:১৫ ও ৮৯:১৬ আয়াত মানুষের দাবিটা তুলে ধরে। রব তাকে দান করলে সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। রিযক সংকুচিত হলে বলে, আমার রব আমাকে অপমান করেছেন। তারপর ৮৯:১৭ আয়াত শুরু হয় 'কাল্লা' দিয়ে, অর্থাৎ না, আর অভিযোগগুলো আসতে থাকে।"
          },
          {
            "en": "The charges run through three verses: you do not honour the orphan, you do not urge one another to feed the poor, and you devour inheritance with a greedy devouring. Those verses, 89:17 to 89:19, have their own treatment and are named here only as the setting. The Muyassar reads 89:18 to 89:20 as one passage and first answers the man's assumption: honour lies in obedience to Allah, and humiliation in disobedience to Him. Where the earlier charges name things done or left undone, this last one names a love.",
            "bn": "অভিযোগগুলো ছড়িয়ে আছে তিনটি আয়াতে: তোমরা ইয়াতীমকে সম্মান কর না, মিসকিনকে খাওয়াতে পরস্পরকে উৎসাহ দাও না, আর মিরাসের সম্পদ লোভে গোগ্রাসে খাও। ৮৯:১৭ থেকে ৮৯:১৯ পর্যন্ত এই আয়াতগুলোর আলোচনা আলাদা, এখানে শুধু প্রেক্ষাপট হিসেবে নাম আসছে। মুয়াসসার ৮৯:১৮ থেকে ৮৯:২০ পর্যন্ত একটি অংশ হিসেবে পড়ে, আর শুরুতেই মানুষের ধারণার জবাব দেয়: সম্মান আল্লাহর আনুগত্যে, অপমান তাঁর নাফরমানিতে। আগের অভিযোগগুলো বলে কী করা হয়েছে আর কী করা হয়নি। শেষেরটি বলে এক ভালোবাসার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Gathering in a Basin",
          "bn": "হাউজে জমে ওঠা পানি"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse: you love the gathering of wealth and its acquisition, O people, with a love that is much and intense. He takes jamm from a phrase of the Arabs, qad jamma al-ma'u fi al-hawd, said of water when it has collected in a basin. As a witness he quotes a line of Zuhayr ibn Abi Sulma about a company that comes down to water whose jimam, its gathered pools, are blue. A footnote in the printed text explains jimam as what has gathered and grown much, and the blue as clarity, because no one had come to that water before them to stir it.",
            "bn": "তাবারী নিজের ভাষায় আয়াতটির ব্যাখ্যা দেন: হে মানুষ, তোমরা সম্পদ জমানো আর তা নিজের করে রাখাকে ভালোবাস, অনেক বেশি ও তীব্র ভালোবাসায়। 'জাম্ম' শব্দটি তিনি নেন আরবদের এক কথা থেকে: কাদ জাম্মাল মাউ ফিল হাওদ, অর্থাৎ হাউজে পানি জমে উঠেছে। সাক্ষী হিসেবে তিনি যুহাইর ইবন আবী সুলমার একটি পঙক্তি আনেন। সেখানে একদল লোক এমন পানির ধারে নামে, যার জমে থাকা জলাশয়গুলো নীল। ছাপা সংস্করণের এক টীকা বলে, 'জিমাম' মানে যা জমে জমে বেড়ে উঠেছে। আর নীল রং পানির স্বচ্ছতার কারণে, কেননা তাদের আগে কেউ সে পানিতে নামেনি, কেউ তা ঘোলা করেনি।"
          },
          {
            "en": "Al-Qurtubi gives the same picture in more detail. Jamm is much; one says jamma al-shay'u yajimmu jumuman, and of water, that it jamma in the basin when it collected and grew much. A related noun names the place where water gathers. Al-jamum is a well with plenty of water, and jumum, read with the vowel u, is said of water that grows much and collects in a well after what was in it has been drawn out. Al-Baghawi keeps to the short form: one says jamma al-ma'u fi al-hawd when the water grew much and collected.",
            "bn": "কুরতুবী একই ছবি আরও খুঁটিয়ে আঁকেন। জাম্ম মানে অনেক। বলা হয় জাম্মাশ শাইউ ইয়াজিম্মু জুমূমান, আর পানির বেলায় বলা হয়, হাউজে পানি 'জাম্মা' করেছে, যখন তা জমে বেড়ে ওঠে। এই ধাতুর আরেকটি শব্দ বোঝায় সেই জায়গা, যেখানে পানি এসে জমে। 'জামূম' হলো প্রচুর পানির কূপ। আর পেশ দিয়ে পড়া 'জুমূম' বলা হয় তখন, যখন কূপ থেকে পানি তুলে নেওয়ার পর আবার তাতে পানি বেড়ে জমে ওঠে। বাগাভী ছোট করে বলেন: হাউজে পানি বেড়ে জমে উঠলে বলা হয় জাম্মাল মাউ ফিল হাওদ।"
          },
          {
            "en": "Al-Qurtubi also quotes a line of poetry, ascribed in his editor's brackets to Abu Khirash al-Hudhali: in taghfir allahumma taghfir jamma, wa ayyu 'abdin laka la alamma. If You forgive, O Allah, You forgive abundantly, and what servant of Yours has not fallen into some slight fault? There the same word praises the abundance of Allah's forgiveness. This article draws one observation from that: the word jamm carries no blame of itself. Any blame in the verse comes from what the abundance attaches to, a point Ma'arif al-Qur'an makes outright, as a later section shows.",
            "bn": "কুরতুবী একটি কবিতার পঙক্তিও উদ্ধৃত করেন। সম্পাদকের বন্ধনীতে তা আবু খিরাশ হুযালীর বলে উল্লেখ আছে: ইন তাগফির আল্লাহুম্মা তাগফির জাম্মা, ওয়া আইয়ু আবদিন লাকা লা আলাম্মা। হে আল্লাহ, তুমি ক্ষমা করলে অঢেল ক্ষমা কর, আর তোমার এমন কোন বান্দা আছে, যে ছোটখাটো ভুলে জড়ায়নি? সেখানে এই একই শব্দ আল্লাহর ক্ষমার প্রাচুর্যের প্রশংসা করছে। এ লেখা সেখান থেকে একটি কথা টানে: 'জাম্ম' শব্দে নিজে থেকে কোনো নিন্দা নেই। আয়াতে যে নিন্দা, তা আসে প্রাচুর্যটা কিসের সঙ্গে জুড়েছে তা থেকে। মাআরিফুল কুরআন কথাটা সরাসরি বলে, পরের এক অংশে তা আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Much, or Intense?",
          "bn": "অনেক, নাকি তীব্র?"
        },
        "p": [
          {
            "en": "At-Tabari then lists the early glosses with their chains, and they fall along two lines. One line is intensity. Ibn 'Abbas, in one chain, says shadid, intense; Qatada says a love that is intense; Ibn Zayd says al-jamm is al-shadid. The other line is quantity. Mujahid says al-jamm is al-kathir, much, while Ibn 'Abbas in a second chain, and ad-Dahhak, both say that they love the abundance of wealth, which moves the muchness from the love onto the wealth. At-Tabari's own gloss holds both together, kathiran shadidan, and he says the people of interpretation spoke likewise.",
            "bn": "এরপর তাবারী সনদসহ প্রথম যুগের ব্যাখ্যাগুলো তুলে ধরেন। সেগুলো দুটি ধারায় ভাগ হয়ে যায়। একটি ধারা তীব্রতার। একটি সনদে ইবন আব্বাস (রাঃ) বলেন, শাদীদ, অর্থাৎ তীব্র। কাতাদা বলেন, তীব্র ভালোবাসা। ইবন যাইদ বলেন, আল-জাম্ম মানে আশ-শাদীদ। অন্য ধারাটি পরিমাণের। মুজাহিদ বলেন, আল-জাম্ম মানে আল-কাসীর, অনেক। আর আরেক সনদে ইবন আব্বাস (রাঃ) এবং দাহহাক দুজনেই বলেন, তারা সম্পদের প্রাচুর্য ভালোবাসে। এতে 'অনেক' কথাটা ভালোবাসা থেকে সরে গিয়ে বসে সম্পদের গায়ে। তাবারীর নিজের ব্যাখ্যা দুটোকে একসঙ্গে ধরে রাখে: কাসীরান শাদীদান। তিনি বলেন, তাফসীরবিদেরাও এমনই বলেছেন।"
          },
          {
            "en": "The later commentators carry the same pair. Al-Qurtubi and al-Baghawi both say kathir, much, and as-Sa'di says kathiran shadidan, much and intense, as at-Tabari did. Ibn Kathir's Arabic, as fetched, says kathir and then records that some added fahish, gross or immoderate. The abridged English edition renders that clause differently: This increases some of them in their wickedness. The Muyassar says mufrit, excessive, and Ma'arif al-Qur'an says the word jamm means excessive. This article sets the glosses side by side and does not choose among them.",
            "bn": "পরের যুগের তাফসীরকারেরাও এই জোড়াটাই বহন করেন। কুরতুবী ও বাগাভী দুজনেই বলেন কাসীর, অনেক। সা'দী তাবারীর মতোই বলেন কাসীরান শাদীদান, অনেক ও তীব্র। ইবন কাসীরের আরবি পাঠে আছে কাসীর, তারপর লেখা: কেউ কেউ যোগ করেছেন 'ফাহিশ', অর্থাৎ বেহিসাব, মাত্রাছাড়া। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটি এসেছে অন্যভাবে: এটি তাদের কারও কারও দুষ্কর্ম বাড়িয়ে দেয়। মুয়াসসার বলে মুফরিত, সীমাছাড়া। মাআরিফুল কুরআন বলে, জাম্ম মানে অতিরিক্ত। এ লেখা ব্যাখ্যাগুলো পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Love Fastens On",
          "bn": "ভালোবাসা আঁকড়ে ধরে কী"
        },
        "p": [
          {
            "en": "The commentators also differ slightly on what exactly is loved. The verse says al-mal, wealth. At-Tabari reads it as the gathering of wealth and its acquisition. Al-Baghawi says the same and adds a second verb: you love gathering wealth and are infatuated with it, tula'una bihi. Ibn 'Abbas in one report, and ad-Dahhak, speak of loving the abundance of wealth. So the object is read three ways in the sources: wealth itself, the act of amassing it, and the sheer amount of it. Here too the readings stand together, and none is set above the others.",
            "bn": "ভালোবাসার বিষয়টা ঠিক কী, তা নিয়েও তাফসীরকারদের কথায় সামান্য তফাত আছে। আয়াতে আছে 'আল-মাল', সম্পদ। তাবারী একে পড়েন সম্পদ জমানো আর নিজের করে রাখা হিসেবে। বাগাভীও তাই বলেন, সঙ্গে জোড়েন আরেকটি ক্রিয়া: তোমরা সম্পদ জমানো ভালোবাস আর তাতে মোহগ্রস্ত হয়ে থাক, তূলাঊনা বিহী। একটি বর্ণনায় ইবন আব্বাস (রাঃ), আর দাহহাকও, সম্পদের প্রাচুর্য ভালোবাসার কথা বলেন। ফলে উৎসগুলোতে বিষয়টা তিনটি দিক থেকে পড়া হয়েছে: সম্পদ নিজে, তা জমানোর কাজ, আর তার নিছক পরিমাণ। এখানেও পাঠগুলো পাশাপাশি থাকে, কোনোটিকে অন্যটির উপরে তোলা হয় না।"
          },
          {
            "en": "Al-Qurtubi adds a short phrase that widens the circle: kathiran, halalahu wa haramahu, much, its lawful and its unlawful. In his gloss the love takes in both kinds of wealth. The neighbouring verse, 89:19, speaks of devouring inheritance, and the abridged English Ibn Kathir says on that verse, however they can get it, whether lawful or forbidden. That clause belongs to 89:19 and is mentioned only to show the setting. On this verse, the lawful-and-unlawful phrase is al-Qurtubi's, and none of the other commentaries fetched for it repeats the point.",
            "bn": "কুরতুবী ছোট্ট একটি কথা যোগ করে পরিধিটা বাড়িয়ে দেন: কাসীরান, হালালাহু ওয়া হারামাহু, অর্থাৎ অনেক, তার হালালও, তার হারামও। তাঁর ব্যাখ্যায় ভালোবাসাটা দুই ধরনের সম্পদকেই জড়িয়ে নেয়। পাশের আয়াত ৮৯:১৯ মিরাস গিলে খাওয়ার কথা বলে। সেই আয়াতের আলোচনায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে: যেভাবে পারে সেভাবেই, হালাল হোক বা হারাম। কথাটা ৮৯:১৯ আয়াতের, এখানে শুধু প্রেক্ষাপট দেখাতে আনা হলো। এই আয়াতের বেলায় হালাল-হারামের কথাটি কুরতুবীর। এ আয়াতের জন্য সংগৃহীত অন্য কোনো তাফসীরে তা আর আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Rebuke Faces",
          "bn": "তিরস্কার কাদের মুখোমুখি"
        },
        "p": [
          {
            "en": "The verse speaks to a you in the plural, and the commentators give that you different breadth. At-Tabari's gloss addresses it to ayyuha al-nas, O people, which reads the charge as spoken to people at large. Ma'arif al-Qur'an calls the verse the fourth evil trait of the unbelievers and says they have an insatiable love for wealth. The abridged English Ibn Kathir heads the passage that begins at 89:17 From the Evil that the Servant does regarding Wealth, and the Muyassar simply carries its you on from the man of the preceding verses. The difference is kept here as a difference.",
            "bn": "আয়াতের সম্বোধন বহুবচনে, 'তোমরা'। এই 'তোমরা' কতটা বিস্তৃত, তাফসীরকারেরা তা ভিন্নভাবে দেখেন। তাবারীর ব্যাখ্যায় সম্বোধন 'আইয়ুহান নাস', হে মানুষ। তাতে অভিযোগটা সাধারণভাবে মানুষের প্রতি। মাআরিফুল কুরআন আয়াতটিকে বলে কাফিরদের চতুর্থ মন্দ স্বভাব, আর বলে, সম্পদের প্রতি তাদের ভালোবাসা কখনো মেটে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮৯:১৭ থেকে শুরু হওয়া অংশের শিরোনাম দেয়: সম্পদ নিয়ে বান্দা যে মন্দ কাজ করে। মুয়াসসার আগের আয়াতগুলোর মানুষটির কথা থেকে সোজা 'তোমরা'-তে চলে যায়। মতভেদটা এখানে মতভেদ হিসেবেই রইল।"
          },
          {
            "en": "The shape of the passage itself is plain from the text. In 89:15 and 89:16 the subject is al-insan, man, spoken of in the third person: he says, my Lord has honoured me. From 89:17 the verbs turn to the second person plural, you do not honour, and this verse keeps that address. The fetched commentaries do not explain the turn, and this article does not supply a reason of its own. It notes only that a rebuke which was about someone becomes, in these verses, a rebuke spoken to someone's face.",
            "bn": "অংশটির গড়ন পাঠ থেকেই স্পষ্ট। ৮৯:১৫ ও ৮৯:১৬ আয়াতে কথা হচ্ছে মানুষকে নিয়ে, তার সম্পর্কে: সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। ৮৯:১৭ থেকে ক্রিয়াগুলো সরাসরি সামনের লোকদের দিকে ঘুরে যায়: তোমরা সম্মান কর না। এ আয়াতও সেই সম্বোধন ধরে রাখে। সংগৃহীত তাফসীরগুলো এই মোড় ঘোরার কারণ ব্যাখ্যা করেনি, এ লেখাও নিজে থেকে কোনো কারণ বসায় না। শুধু এটুকু লক্ষ করে যে, যে তিরস্কার ছিল কারও সম্পর্কে, এই আয়াতগুলোতে তা উচ্চারিত হয় কারও মুখের ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fault Lies in Measure",
          "bn": "দোষ মাপে, বস্তুতে নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws the line most clearly. The word excessive, it says, indicates that love of wealth in itself, in a sober sense, is a natural instinct of man, and that has not been condemned here; what is denounced is the excessive or insatiable love of wealth. The Muyassar's mufrit points the same way, since it names a love that has passed its bound. Ibn Kathir, in the abridged English passage he groups with this verse, says that Allah gives wealth to those He loves and to those He does not love, and withholds it from both alike.",
            "bn": "রেখাটা সবচেয়ে স্পষ্ট করে টানে মাআরিফুল কুরআন। তার কথায়, 'অতিরিক্ত' শব্দটিই বুঝিয়ে দেয় যে সংযত অর্থে সম্পদের প্রতি ভালোবাসা মানুষের স্বভাবজাত, এখানে তার নিন্দা করা হয়নি। নিন্দা হয়েছে সম্পদের প্রতি মাত্রাছাড়া, কখনো না মেটা ভালোবাসার। মুয়াসসারের 'মুফরিত' শব্দও একই দিকে ইশারা করে, কারণ তা এমন ভালোবাসার নাম, যা সীমা পেরিয়ে গেছে। ইবন কাসীর এ আয়াতের সঙ্গে জুড়ে রাখা সংক্ষিপ্ত ইংরেজি অংশে বলেন, আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও দেন। আবার দুই দলের কাছ থেকেই তা আটকেও রাখেন।"
          },
          {
            "en": "This verse describes what the text describes: a love of wealth that the commentators call much, intense or excessive, set in a passage about people who left the orphan and the poor without their due. It licenses nothing against any living person or community, and it passes no sentence on wealth or on the people who have it. Nothing here names a group alive today, and no reader is entitled to fit the verse onto a neighbour, a class or a nation. Ibn Kathir's own conclusion keeps the matter personal: the wealthy should thank Allah, and the poor should be patient.",
            "bn": "আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: সম্পদের এমন ভালোবাসা, যাকে তাফসীরকারেরা বলেছেন অনেক, তীব্র বা মাত্রাছাড়া। আর তা এসেছে এমন এক অংশে, যেখানে কিছু মানুষ ইয়াতীম ও মিসকিনকে তাদের প্রাপ্য দেয়নি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো কিছুর অনুমতি দেয় না। সম্পদ বা সম্পদশালীদের বিরুদ্ধেও কোনো রায় দেয় না। আজকের কোনো দলের নাম এখানে নেই, আর প্রতিবেশী, কোনো শ্রেণি বা কোনো জাতির গায়ে আয়াতটি সেঁটে দেওয়ার অধিকার কোনো পাঠকের নেই। ইবন কাসীরের নিজের সিদ্ধান্তও কথাটাকে ব্যক্তির ভেতরেই রাখে: ধনী আল্লাহর শোকর করবে, গরিব সবর করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di's Companion Verses",
          "bn": "সা'দীর জোড়া আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di glosses jamm as much and intense and then adds that this is like His words: rather you prefer the life of this world, while the Hereafter is better and more lasting, at 87:16 and 87:17; and no, rather you love the immediate and leave the Hereafter, at 75:20 and 75:21. The second pair uses the same verb, tuhibbuna, you love, with a different object, al-'ajilah, the immediate. Both pairs have their own articles in this module, on 87:14 to 87:17 and on 75:20, and they are not retold here.",
            "bn": "সা'দী 'জাম্ম'-এর অর্থ করেন অনেক ও তীব্র, তারপর বলেন, এটি আল্লাহর এই বাণীর মতো: বরং তোমরা দুনিয়ার জীবনকে বেছে নাও, অথচ আখিরাত উত্তম ও স্থায়ী (৮৭:১৬ ও ৮৭:১৭)। আরও: কক্ষনো না, বরং তোমরা নগদকে ভালোবাস আর আখিরাতকে ছেড়ে দাও (৭৫:২০ ও ৭৫:২১)। দ্বিতীয় জোড়ায় একই ক্রিয়া, তুহিব্বূনা, তোমরা ভালোবাস। শুধু ভালোবাসার বিষয়টা আলাদা: আল-আজিলা, যা নগদ, হাতের কাছে। দুটি জোড়া নিয়েই এ বিভাগে আলাদা লেখা আছে, ৮৭:১৪ থেকে ৮৭:১৭ এবং ৭৫:২০ আয়াতের ওপর। সেগুলো এখানে আবার বলা হলো না।"
          },
          {
            "en": "No fetched commentary on this verse attaches a hadith to it. Ibn Kathir's grouped passage does bring a narration from Abu Dawud, but it concerns the guardian of the orphan in 89:17, so it is left to that verse. What comes after is also left for later. Verse 89:21 opens with kalla once more, and Ma'arif al-Qur'an says that after describing these evil traits the passage returns to the main theme of the surah, the punishment of the Hereafter, beginning with the end of the world. The scenes that follow belong to their own verses.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের একসঙ্গে রাখা অংশে আবু দাউদের একটি বর্ণনা আছে বটে, তবে তা ৮৯:১৭ আয়াতের ইয়াতীমের অভিভাবক নিয়ে, তাই সেটি সেই আয়াতের জন্য রইল। পরে যা আসছে, তাও পরের জন্য রাখা হলো। ৮৯:২১ আয়াত আবার শুরু হয় 'কাল্লা' দিয়ে। মাআরিফুল কুরআন বলে, এই মন্দ স্বভাবগুলোর বর্ণনার পর অংশটি ফিরে যায় সূরার মূল বিষয়ে, আখিরাতের শাস্তিতে, আর শুরু করে দুনিয়ার সমাপ্তি দিয়ে। পরের দৃশ্যগুলো যার যার আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "This Article's Own Reading",
          "bn": "এ লেখার নিজের পাঠ"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not a claim of any commentator. The image the commentators give for jamm is water collecting in a basin, and a well that fills again soon after it has been drawn. Read against that image, the verse can be held up as a mirror. Is there something in me that gathers and has no outlet, so that whatever comes in mostly stays? And when some of it goes out in giving, does the wish to have it rise again at once to fill the space, the way a full well recovers its level?",
            "bn": "এখান থেকে যা আসছে, তা এ লেখার নিজের পাঠ, কোনো তাফসীরকারের দাবি নয়। 'জাম্ম'-এর জন্য তাফসীরকারেরা যে ছবি দেন, তা হাউজে জমে ওঠা পানির, আর এমন কূপের, যা সেঁচে নেওয়ার পর অল্পক্ষণেই আবার ভরে যায়। সেই ছবির পাশে রাখলে আয়াতটি আয়নার মতো সামনে ধরা যায়। আমার ভেতরে কি এমন কিছু আছে, যা শুধু জমায়, বেরোনোর কোনো পথ নেই, ফলে যা আসে তার প্রায় সবই থেকে যায়? আর দানের পথে কিছু বেরিয়ে গেলে কি সেটা ফেরত পাওয়ার ইচ্ছা সঙ্গে সঙ্গে উঠে এসে জায়গাটা ভরে দেয়, যেমন ভরা কূপ আবার আগের জায়গায় ফিরে আসে?"
          },
          {
            "en": "The same reading turns back to 89:15 and 89:16, where a man measured his honour by what he was given. Taking the Muyassar's line that honour lies in obedience to Allah, the question for the reader is not how much sits in the basin, but what the love of it has kept from reaching the orphan, the poor and the heir nearby. Ma'arif al-Qur'an leaves room for an ordinary, sober love of wealth, and condemns only its excess. The reader can ask, honestly and in private, on which side of that line the heart stands today.",
            "bn": "এই পাঠ আবার ফিরে যায় ৮৯:১৫ ও ৮৯:১৬ আয়াতে, যেখানে এক মানুষ নিজের সম্মান মেপেছিল কী পেয়েছে তা দিয়ে। মুয়াসসারের কথা ধরলে সম্মান আল্লাহর আনুগত্যে। তাহলে পাঠকের প্রশ্ন এই নয় যে হাউজে কতটা জমেছে। প্রশ্ন হলো, সেই ভালোবাসা কাছের ইয়াতীম, মিসকিন আর উত্তরাধিকারীর কাছে কী পৌঁছাতে দেয়নি। মাআরিফুল কুরআন সম্পদের প্রতি সাধারণ, সংযত ভালোবাসার জায়গা রেখেছে, নিন্দা করেছে শুধু তার বাড়াবাড়ির। আপনি নিজেকে সৎভাবে, নিভৃতে জিজ্ঞেস করতে পারেন, আজ আপনার মন সেই রেখার কোন পাশে দাঁড়িয়ে।"
          }
        ]
      }
    ]
  },
  "89:27-30": {
    "sections": [
      {
        "h": {
          "en": "Where the Address Falls",
          "bn": "সম্বোধনটি কোথায় পড়ে"
        },
        "p": [
          {
            "en": "Surah al-Fajr is a surah of hard scenes before this gentle ending. It parades the destroyed powers — Aad of the pillars, Thamud who carved the rocks, Pharaoh of the stakes — and then diagnoses man in 89:15-16: honored, he says my Lord has favored me; tried with less, he says my Lord has humiliated me. It shows inheritance devoured greedily and wealth loved with unbounded love, then the Day when Hell is brought and man remembers too late, as 89:23 describes.",
            "bn": "সূরা আল-ফাজর এই কোমল সমাপ্তির আগে কঠিন দৃশ্যের সূরা। এটি সারিবদ্ধ করে দেখায় ধ্বংস হওয়া পরাক্রমগুলোকে — স্তম্ভের অধিকারী আদ, পাথর খোদাই করা সামূদ, কীলকের অধিকারী ফিরআউন — তারপর 89:15-16 আয়াতে মানুষের রোগনির্ণয় করে: সম্মানিত হলে সে বলে আমার রব আমাকে অনুগ্রহ করেছেন; সংকীর্ণতায় পরীক্ষিত হলে বলে আমার রব আমাকে অপমান করেছেন। এটি দেখায় গোগ্রাসে খাওয়া উত্তরাধিকার আর লোভভরে ভালোবাসা ধনসম্পদ; তারপর সেই দিন, যেদিন জাহান্নামকে আনা হবে আর মানুষ স্মরণ করবে — কিন্তু অনেক দেরিতে, যেমন 89:23 বর্ণনা করে।"
          },
          {
            "en": "Against that dark background, the final verses turn with sudden tenderness to a single addressee: O soul at peace. The contrast is the message. The surah has shown souls that rattled with the rise and fall of fortune; now it addresses the one soul that stopped rattling. Everything before was the noise; this is the voice that the quiet soul finally hears.",
            "bn": "সেই অন্ধকার পটভূমির বিপরীতে শেষ আয়াতগুলো হঠাৎ কোমলতায় ফেরে একটিমাত্র সম্বোধিতের দিকে: হে প্রশান্ত আত্মা। এই বৈপরীত্যই বার্তা। সূরাটি দেখিয়েছে সেসব আত্মাকে, ভাগ্যের ওঠানামায় যারা ঝনঝন করে কেঁপেছে; এখন সে সম্বোধন করছে সেই একটি আত্মাকে, যার কাঁপুনি থেমে গেছে। আগের সবকিছু ছিল কোলাহল; আর এটি সেই কণ্ঠস্বর, যা শান্ত আত্মা অবশেষে শুনতে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Soul at Peace",
          "bn": "প্রশান্ত আত্মা"
        },
        "p": [
          {
            "en": "The Quran names three conditions of the human soul. There is the nafs ammarah bis-su, the soul that commands to evil, confessed in 12:53; the nafs lawwamah, the self-reproaching soul that Allah swears by in 75:2; and here the nafs mutma'innah, the soul at rest. Scholars have long read these as stations on one road: the same soul, disciplined and turned toward its Lord, moves from commanding evil, to blaming itself, to settling.",
            "bn": "কুরআন মানব আত্মার তিনটি অবস্থার নাম নেয়। আছে 'নাফসে আম্মারা বিস-সূ' — মন্দের আদেশদাতা আত্মা, যার স্বীকারোক্তি 12:53 আয়াতে; 'নাফসে লাওয়ামা' — আত্মভর্ৎসনাকারী আত্মা, যার কসম আল্লাহ খেয়েছেন 75:2 আয়াতে; আর এখানে 'নাফসে মুতমাইন্না' — স্থির, প্রশান্ত আত্মা। আলিমগণ বহুকাল ধরে এগুলোকে পড়েছেন এক পথেরই স্টেশন হিসেবে: একই আত্মা, সংযত হয়ে ও তার রবের দিকে ফিরে, মন্দের আদেশ থেকে আত্মভর্ৎসনায়, সেখান থেকে স্থিরতায় পৌঁছায়।"
          },
          {
            "en": "What the soul is at peace about is defined by the surah it ends: not at peace about outcomes, but about its Lord. Where 89:15-16 showed a soul whose verdict on Allah swung with its bank balance, the mutma'innah holds steady through both halves of that test. And the Quran states where such steadiness is manufactured: truly in the remembrance of Allah do hearts find rest, as 13:28 says. Tranquility is not a temperament; it is a relationship's fruit.",
            "bn": "আত্মাটি কী বিষয়ে প্রশান্ত, তা সংজ্ঞায়িত করে সেই সূরাই, যার সমাপ্তিতে সে আছে: ফলাফল নিয়ে প্রশান্ত নয় — তার রব সম্পর্কে প্রশান্ত। 89:15-16 যেখানে দেখিয়েছে এমন আত্মা, আল্লাহ সম্পর্কে যার রায় ব্যাংক ব্যালেন্সের সঙ্গে দুলত, মুতমাইন্না সেখানে সেই পরীক্ষার দুই অর্ধেই অটল থাকে। আর এমন অটলতা কোথায় তৈরি হয় কুরআন তা বলে দিয়েছে: জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায় — যেমন 13:28 বলে। প্রশান্তি কোনো মেজাজ নয়; এটি এক সম্পর্কের ফল।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleased and Pleasing",
          "bn": "সন্তুষ্ট ও সন্তোষভাজন"
        },
        "p": [
          {
            "en": "Return to your Lord radiyatan mardiyyah — well-pleased, well-pleasing. The two words are a mirror: the soul is pleased with Allah, with what He decreed, gave and withheld; and Allah is pleased with the soul. The order within the verse repays attention. Being pleased with Him is the soul's own work in this life, done in the dark, through the unexplained losses; being pleased with by Him is the answer it receives at the return.",
            "bn": "তোমার রবের দিকে ফিরে এসো 'রাদিয়াতান মারদিয়্যাহ' — সন্তুষ্ট হয়ে, সন্তোষভাজন হয়ে। শব্দ দুটি একটি আয়না: আত্মা আল্লাহর প্রতি সন্তুষ্ট — তাঁর ফয়সালায়, তাঁর দেওয়ায় ও না-দেওয়ায়; আর আল্লাহ সন্তুষ্ট সেই আত্মার প্রতি। আয়াতের ভেতরের ক্রমটি মনোযোগের দাম ফেরত দেয়। তাঁর প্রতি সন্তুষ্ট থাকা এই জীবনে আত্মার নিজের কাজ — অন্ধকারে, ব্যাখ্যাহীন ক্ষতির ভেতর দিয়ে করা; আর তাঁর সন্তোষভাজন হওয়া হলো প্রত্যাবর্তনের সময় পাওয়া তার উত্তর।"
          },
          {
            "en": "The command irji'i, return, also quietly asserts something about home. One returns only to where one belongs; the wording treats the soul's presence in this world as a journey out, and its movement to Allah as the way back. Death, for the soul described here, is not eviction from its place but arrival at it.",
            "bn": "'ইরজিঈ' — ফিরে এসো — আদেশটিও নীরবে ঠিকানা সম্পর্কে কিছু ঘোষণা করে। মানুষ কেবল সেখানেই ফেরে, যেখানে তার শিকড়; শব্দবিন্যাসটি আত্মার এই দুনিয়ায় থাকাকে দেখে বাইরে যাওয়া সফর হিসেবে, আর আল্লাহর দিকে তার যাত্রাকে ঘরে ফেরার পথ হিসেবে। এখানে বর্ণিত আত্মার জন্য মৃত্যু নিজের জায়গা থেকে উচ্ছেদ নয় — সেখানে পৌঁছানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Among My Servants, Into My Garden",
          "bn": "আমার বান্দাদের মাঝে, আমার জান্নাতে"
        },
        "p": [
          {
            "en": "The welcome has two doors, in order: enter among My servants, and enter My Garden. Company comes before place. Before the Garden is mentioned, the soul is folded into the fellowship of Allah's servants — the prophets, the truthful, the martyrs and the righteous whom 4:69 names as the best of companions. The sequence hints that who you are with is a deeper reward than where you are; Paradise is Paradise partly because of its residents.",
            "bn": "অভ্যর্থনাটির দুটি দরজা, ক্রম অনুসারে: আমার বান্দাদের মধ্যে প্রবেশ করো, এবং আমার জান্নাতে প্রবেশ করো। স্থানের আগে সঙ্গ। জান্নাতের উল্লেখের আগেই আত্মাকে জড়িয়ে নেওয়া হয় আল্লাহর বান্দাদের সাহচর্যে — নবীগণ, সিদ্দীকগণ, শহীদগণ ও সালিহগণ, 4:69 যাঁদের নাম নিয়েছে শ্রেষ্ঠ সঙ্গী হিসেবে। এই ক্রম ইঙ্গিত দেয়: আপনি কাদের সঙ্গে আছেন, তা আপনি কোথায় আছেন তার চেয়ে গভীর পুরস্কার; জান্নাত আংশিকভাবে জান্নাত তার অধিবাসীদের কারণেই।"
          },
          {
            "en": "Then the possessive: My Garden. Throughout the Quran, Paradise is described by its rivers and shade, but here, at the address to the quiet soul, Allah attaches it to Himself. The commentators hear in that single pronoun the highest honoring in the passage — the invitation is not to a reward warehouse but into what the Host calls His own. The verses are recited across the world at funerals; they were revealed as a destination to steer a life by.",
            "bn": "তারপর সেই সম্বন্ধসূচক শব্দ: আমার জান্নাত। গোটা কুরআনে জান্নাতের বর্ণনা তার নদী ও ছায়া দিয়ে, কিন্তু এখানে, প্রশান্ত আত্মার প্রতি সম্বোধনে, আল্লাহ একে যুক্ত করেছেন নিজের সঙ্গে। মুফাসসিরগণ ওই একটিমাত্র সর্বনামে শোনেন অনুচ্ছেদটির সর্বোচ্চ সম্মাননা — আমন্ত্রণটি কোনো পুরস্কারের গুদামে নয়, বরং মেজবান যাকে নিজের বলে ডাকেন তার ভেতরে। আয়াতগুলো সারা বিশ্বে জানাযায় পড়া হয়; কিন্তু নাযিল হয়েছিল এমন এক গন্তব্য হিসেবে, যাকে সামনে রেখে জীবন চালাতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Becoming the Addressee",
          "bn": "সম্বোধিত হয়ে ওঠা"
        },
        "p": [
          {
            "en": "The commentators mention that this address comes to the soul at death and at the Resurrection — the welcome spans the whole passage from this world to the next. Which raises the only question that matters to a living reader: how does a soul come to deserve that address? The surah has already shown the disqualifiers — reading Allah's favor and trial as approval and insult, devouring inheritance, loving wealth with unbounded love — and 13:28 has named the builder: remembrance.",
            "bn": "মুফাসসিরগণ উল্লেখ করেন, এই সম্বোধন আত্মার কাছে আসে মৃত্যুর সময় এবং পুনরুত্থানে — অভ্যর্থনাটি এ জগৎ থেকে পরের জগৎ পর্যন্ত পুরো পথ জুড়ে। আর তাতেই জাগে জীবিত পাঠকের একমাত্র জরুরি প্রশ্ন: কোন আত্মা এই সম্বোধনের যোগ্য হয়? সূরাটি অযোগ্যতার লক্ষণগুলো আগেই দেখিয়েছে — আল্লাহর অনুগ্রহ ও পরীক্ষাকে অনুমোদন আর অপমান হিসেবে পড়া, উত্তরাধিকার গোগ্রাসে খাওয়া, সীমাহীন ভালোবাসায় সম্পদ ভালোবাসা — আর 13:28 নির্মাতার নাম বলে দিয়েছে: স্মরণ।"
          },
          {
            "en": "So the practice is unglamorous and daily: dhikr that steadies the heart, and deliberate contentment rehearsed at each rise and fall — saying alhamdulillah in the ease without reading it as entitlement, and in the tightness without reading it as rejection. A soul trained for years to be pleased with Allah in both weathers is being shaped into the very description radiyah carries. The address at the end is simply the name of what it has become.",
            "bn": "অতএব অনুশীলনটি জৌলুসহীন ও দৈনন্দিন: যে যিকর হৃদয় স্থির করে, আর প্রতিটি উত্থান-পতনে মহড়া দেওয়া সজ্ঞান সন্তুষ্টি — স্বাচ্ছন্দ্যে আলহামদুলিল্লাহ বলা, তাকে নিজের প্রাপ্য অধিকার না পড়ে; আর টানাটানিতেও তা বলা, তাকে প্রত্যাখ্যান না পড়ে। যে আত্মা বছরের পর বছর দুই আবহাওয়াতেই আল্লাহর প্রতি সন্তুষ্ট থাকার প্রশিক্ষণ নিয়েছে, সে গড়ে উঠছে ঠিক সেই বর্ণনায় — 'রাদিয়া' যা বহন করে। শেষের সম্বোধনটি আসলে সে যা হয়ে উঠেছে, তারই নাম।"
          }
        ]
      }
    ]
  }
});
